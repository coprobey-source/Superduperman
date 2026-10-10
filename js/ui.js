/* Browser UI for Hearts of Generic FantasyLandia. */
(function () {
  'use strict';
  const FL = window.FL;
  const $ = function (sel) { return document.querySelector(sel); };

  const SAVE_PREFIX = 'hgf_save_';
  const ENDINGS_KEY = 'hgf_endings';
  const AGE_KEY = 'hgf_age_ok';
  const MEMORY_KEY = 'hgf_memories';
  const MUSIC_KEY = 'hgf_music';
  const MEMORY_SCENES = ['intro', 's1', 's2', 's3', 'morning', 'date_dinner', 'date_gardens', 'date_harbor', 'date_picnic'];
  const MEMORY_LABELS = { intro: 'First Meeting', s1: 'Scene I', s2: 'Scene II', s3: 'Scene III', morning: 'Morning After',
    date_dinner: 'Date: Dinner', date_gardens: 'Date: Gardens', date_harbor: 'Date: Harbor', date_picnic: 'Date: Picnic' };

  const ui = {
    s: null,         // game state
    run: null,       // active scene run
    sel: null,       // selected character on hub
    log: [],         // feedback lines shown on hub
    lastChoice: null,
    moods: {},       // heroine id -> portrait mood shown on the hub after talking / gifts
  };

  /* ------------------------------------------------------------------ storage */
  function store(key, val) {
    try {
      if (val === undefined) return localStorage.getItem(key);
      if (val === null) localStorage.removeItem(key);
      else localStorage.setItem(key, val);
    } catch (e) { /* storage unavailable */ }
    return null;
  }
  function unlockedEndings() {
    try { return JSON.parse(store(ENDINGS_KEY) || '[]'); } catch (e) { return []; }
  }
  function unlockEnding(id) {
    const list = unlockedEndings();
    if (list.indexOf(id) < 0) { list.push(id); store(ENDINGS_KEY, JSON.stringify(list)); }
  }
  function memories() {
    try { return JSON.parse(store(MEMORY_KEY) || '[]'); } catch (e) { return []; }
  }
  function rememberScene(id, scene) {
    const list = memories();
    const key = id + '.' + scene;
    if (list.indexOf(key) < 0) { list.push(key); store(MEMORY_KEY, JSON.stringify(list)); }
  }

  /* ------------------------------------------------------------------ sound effects */
  function sfx(name) { if (FL.sfx) FL.sfx.play(name); }
  function sfxNotes(notes) {
    if (!notes || !notes.length) return;
    if (notes.some(function (n) { return n.type === 'aff' && n.n > 0; })) sfx('heart');
    else if (notes.some(function (n) { return n.type === 'aff' && n.n < 0; })) sfx('heartdown');
    if (notes.some(function (n) { return n.type === 'gold' && n.n > 0; })) sfx('coin');
    if (notes.some(function (n) { return n.type === 'stat'; })) sfx('stat');
    if (notes.some(function (n) { return n.type === 'item'; })) sfx('gift');
  }

  /* ------------------------------------------------------------------ music */
  function musicOn() { return store(MUSIC_KEY) === 'on'; }
  function music(theme) {
    if (FL.music) FL.music.setTheme(theme);
  }
  function sceneTheme(run) {
    if (run.id === 'festival') return 'festival';
    if (run.id === 'true_end') return 'title';
    if (run.id === 'plot_heist' || run.id === 'plot_ultimatum') return 'tension';
    if (run.id === 'plot_council') return 'epic';
    // her own leitmotif plays in her romance scenes, the morning after, dates and her ending
    const mine = run.char && FL.music && FL.music.songs['love_' + run.char] ? 'love_' + run.char : 'romance';
    if (run.kind === 'ending' || run.kind === 'date') return run.char ? mine : 'festival';
    if (run.char && (run.id === 's1' || run.id === 's2' || run.id === 's3' || run.id === 'morning')) return mine;
    if (run.id === 'prologue') return 'title';
    if (run.id === 'demon_attack' || /_jealous$/.test(run.id)) return 'tension';
    if (run.id === 'masquerade') return 'romance';
    const loc = ui.s && FL.locations[ui.s.loc];
    return (loc && loc.music) || 'town';
  }
  function toggleMusic() {
    const on = !musicOn();
    store(MUSIC_KEY, on ? 'on' : 'off');
    if (FL.music) { if (on) FL.music.start(); else FL.music.stop(); }
    updateMusicButtons();
  }
  function updateMusicButtons() {
    const on = musicOn();
    document.querySelectorAll('.music-toggle').forEach(function (b) {
      b.innerHTML = on ? '🎵<span> Music on</span>' : '🔇<span> Music off</span>';
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  /* ------------------------------------------------------------------ memories (scene replay) */
  function replayScene(id, scene) {
    closeModal();
    ui.replay = { saved: ui.s, savedRun: ui.run };
    bumpLifetime('replays');
    const s = FL.newState({ name: store('hgf_lastname') || 'Traveler', stats: { might: 10, wits: 10, charm: 10 } });
    s.flags.demon_attack = true; s.flags.goddess_awake = true;
    s.chars[id].stage = FL.SCENE_FOR_STAGE.indexOf(scene) >= 0 ? FL.SCENE_FOR_STAGE.indexOf(scene) : 4;
    s.chars[id].aff = 90;
    ui.s = s;
    ui.run = FL.startScene(s, { char: id, id: scene }, scene === 'morning' ? 'event' : scene.indexOf('date_') === 0 ? 'date' : 'romance');
    ui.lastChoice = null;
    renderScene();
  }
  // Endings remember the choices that led to them, so they can be replayed from Memories.
  const SNAP_KEY = 'hgf_ending_snaps';
  function endingSnaps() { try { return JSON.parse(store(SNAP_KEY) || '{}') || {}; } catch (e) { return {}; } }
  function snapEnding(s, run) {
    const chars = {};
    FL.charOrder.forEach(function (id) { const c = s.chars[id]; if (c.stage > 0) chars[id] = { stage: c.stage, aff: c.aff, dates: c.dates || 0 }; });
    // replay the scene the ending lives in: her ending scene, the festival, or a side story
    const ref = run.char ? { char: run.char, id: run.id } : { id: run.id };
    const snaps = endingSnaps();
    snaps[run.ending] = { ref: ref, kind: run.kind, when: Date.now(), state: { name: s.name, title: s.title, flags: s.flags, chars: chars, stats: s.stats, ngplus: s.ngplus || 0, meta: s.meta, gold: s.gold, inv: s.inv } };
    try { store(SNAP_KEY, JSON.stringify(snaps)); } catch (e) { /* storage full: skip */ }
  }
  function replayEnding(endingId) {
    const snap = endingSnaps()[endingId];
    if (!snap) return;
    closeModal();
    ui.replay = { saved: ui.s, savedRun: ui.run };
    bumpLifetime('replays');
    const st = snap.state;
    const s = FL.newState({ name: st.name, title: st.title, ngplus: st.ngplus, meta: st.meta });
    s.flags = JSON.parse(JSON.stringify(st.flags || {}));
    s.stats = Object.assign(s.stats, st.stats || {});
    s.gold = st.gold || 0; s.inv = JSON.parse(JSON.stringify(st.inv || {}));
    Object.keys(st.chars || {}).forEach(function (id) { if (s.chars[id]) Object.assign(s.chars[id], st.chars[id]); });
    s.day = FL.CONFIG.maxDay; s.slot = 2;
    FL.events.forEach(function (ev) { s.seenEvents[ev.id] = true; });
    ui.s = s;
    ui.run = FL.startScene(s, snap.ref, snap.kind || 'ending');
    ui.lastChoice = null;
    renderScene();
  }

  function finishReplay() {
    const r = ui.replay;
    ui.replay = null;
    ui.s = r.saved; ui.run = r.savedRun;
    if (ui.run) renderScene();
    else if (ui.s) renderHub();
    else titleScreen();
    memoriesModal();
  }

  function saveTo(slot) {
    const data = { when: Date.now(), state: ui.s };
    store(SAVE_PREFIX + slot, JSON.stringify(data));
  }
  function readSave(slot) {
    try {
      const raw = store(SAVE_PREFIX + slot);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  /* ------------------------------------------------------------------ text helpers */
  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }
  function rich(str) {
    return esc(str).replace(/\*([^*]+)\*/g, '<em>$1</em>');
  }
  function para(s, line) {
    line = FL.fmt(s, line);
    const m = FL.parseLine(line);
    if (m.speaker) {
      const sp = FL.speakerInfo(s, m.speaker);
      return '<p class="dlg"><span class="spk" style="color:' + sp.color + '">' + esc(sp.name) +
        '</span><span class="say">“' + rich(m.text) + '”</span></p>';
    }
    return '<p>' + rich(line) + '</p>';
  }
  // The last expression each heroine shows in a list of lines.
  function moodsIn(lines, into) {
    into = into || {};
    (lines || []).forEach(function (l) {
      if (typeof l !== 'string') return;
      const m = FL.parseLine(l);
      if (m.speaker && m.mood && FL.characters[m.speaker]) into[m.speaker] = m.mood;
    });
    return into;
  }
  function heartBar(aff) {
    const h = FL.hearts(aff);
    let out = '';
    for (let i = 1; i <= 5; i++) {
      if (h >= i) out += '<span class="h full">♥</span>';
      else if (h >= i - 0.5) out += '<span class="h half">♥</span>';
      else out += '<span class="h empty">♡</span>';
    }
    return '<span class="hearts" role="img" aria-label="Affection ' + aff + ' of 100" title="' + aff + '/100">' + out + '</span>';
  }
  function avatar(id, big, mood, opts) {
    const c = FL.characters[id];
    const cls = 'avatar' + (big ? ' big' : '');
    if (FL.portrait) return '<span class="' + cls + ' pic" data-mood="' + (mood || 'neutral') + '">' + FL.portrait(id, mood, opts) + '</span>';
    return '<span class="' + cls + '">' + esc(c.short.charAt(0)) + '</span>';
  }
  function btn(label, onClick, opts) {
    opts = opts || {};
    const b = document.createElement('button');
    b.className = 'btn' + (opts.cls ? ' ' + opts.cls : '');
    b.innerHTML = label;
    if (opts.disabled) b.disabled = true;
    if (opts.title) b.title = opts.title;
    b.addEventListener('click', onClick);
    return b;
  }
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function noteHtml(n) {
    if (n.type === 'aff') {
      const c = FL.characters[n.char];
      return '<span class="note ' + (n.n > 0 ? 'pos' : 'neg') + '" style="--c:' + c.color + '">' +
        (n.n > 0 ? '♥ +' : '♥ ') + n.n + ' ' + esc(c.short) + '</span>';
    }
    if (n.type === 'gold') return '<span class="note gold">' + (n.n > 0 ? '+' : '') + n.n + ' gold</span>';
    if (n.type === 'stat') return '<span class="note stat">+' + n.n + ' ' + FL.STAT_NAMES[n.stat] + '</span>';
    if (n.type === 'item') return '<span class="note item">+' + n.n + ' ' + esc(FL.items[n.item].name) + '</span>';
    return '';
  }

  /* ------------------------------------------------------------------ HUD */
  function renderHud() {
    const hud = $('#hud');
    const s = ui.s;
    document.documentElement.dataset.slot = s && !ui.replay ? s.slot : '';
    if (!s || ui.replay) { hud.hidden = true; return; }
    hud.hidden = false;
    const left = FL.CONFIG.maxDay - s.day;
    $('#hud-time').innerHTML = '<b>Day ' + s.day + '</b>/' + FL.CONFIG.maxDay + ' · ' + FL.timeName(s) +
      ' <span class="muted">(' + (left > 0 ? left + ' day' + (left === 1 ? '' : 's') + ' to Starfall' : 'Starfall!') + ')</span>';
    $('#hud-gold').innerHTML = '🪙 ' + s.gold;
    $('#hud-stats').innerHTML = FL.STATS.map(function (k) {
      return '<span class="stat stat-' + k + '">' + FL.STAT_NAMES[k] + ' <b>' + s.stats[k] + '</b></span>';
    }).join('');
    const inScene = !!ui.run;
    $('#btn-save').disabled = inScene;
    $('#btn-people').disabled = inScene;
    const ready = readyNow(s).length;
    const badge = $('#ready-badge');
    if (badge) {
      badge.hidden = !ready;
      badge.textContent = ready ? '★' + ready : '';
      $('#btn-people').setAttribute('aria-label', 'Who\'s where' + (ready ? ', ' + ready + ' romance scene' + (ready === 1 ? '' : 's') + ' ready' : ''));
    }
  }

  /* ------------------------------------------------------------------ screens */
  function setMain(node) {
    const pt = $('#page-title');
    const main = $('#main');
    main.innerHTML = '';
    // the page heading lives inside <main> so it sits in a landmark; the title screen has its own
    if (pt) { pt.hidden = !!node.classList.contains('title-screen'); main.appendChild(pt); }
    main.appendChild(node);
    main.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  function titleScreen() {
    ui.s = null; ui.run = null;
    const pt = $('#page-title'); if (pt) pt.hidden = true;
    renderHud();
    const box = el('div', 'title-screen');
    box.innerHTML =
      '<div class="crest">♥</div>' +
      '<h1>Hearts of<br><span>Generic FantasyLandia</span></h1>' +
      '<p class="tagline">A text-adventure dating sim featuring every fantasy trope we could cram into one kingdom.</p>';
    const menu = el('div', 'menu');
    menu.appendChild(btn('New Game', newGameScreen, { cls: 'primary' }));
    const auto = readSave('auto');
    menu.appendChild(btn('Continue', function () { if (auto) loadState(auto.state); }, { disabled: !auto }));
    menu.appendChild(btn('Load Game', function () { saveModal(false); }));
    const got = unlockedEndings().length;
    menu.appendChild(btn('Endings Gallery (' + got + '/' + FL.endingOrder.length + ')', galleryModal));
    menu.appendChild(btn('Memories (' + memories().length + ')', memoriesModal));
    menu.appendChild(btn('Heroines', function () { heroinesModal(); }));
    menu.appendChild(btn('Achievements', achievementsModal));
    menu.appendChild(btn('How to Play', helpModal));
    menu.appendChild(btn('Settings', settingsModal));
    menu.appendChild(btn('', toggleMusic, { cls: 'music-toggle' }));
    box.appendChild(menu);
    box.appendChild(el('p', 'fine', FL.charOrder.length + ' romanceable heroines · ' + FL.endingOrder.length +
      ' endings · 30 days until Starfall'));
    setMain(box);
    updateMusicButtons();
    music('title');
  }

  function newGameScreen(ngplus) {
    const carry = ngplus && ui.s ? { stats: ui.s.stats, gold: ui.s.gold, n: ui.s.ngplus + 1 } : null;
    ui.s = null; ui.run = null;
    renderHud();
    const box = el('div', 'panel newgame');
    box.innerHTML =
      '<h2>' + (carry ? 'New Game+ ' : 'A New Story') + '</h2>' +
      (carry ? '<p class="muted">Your stats and gold carry over. The hearts of FantasyLandia do not.</p>' : '') +
      '<label>Your name<input id="ng-name" maxlength="24" value="' + esc(store('hgf_lastname') || '') + '" placeholder="Traveler"></label>' +
      '<label>How should people address you?<select id="ng-title">' +
      '<option value="Sir">Sir</option><option value="Lady">Lady</option><option value="Mx" selected>Mx</option></select></label>' +
      '<fieldset><legend>Your background</legend>' +
      [
        ['soldier', 'Ex-Soldier', '+1 Might, +1 Might'],
        ['scholar', 'Wandering Scholar', '+2 Wits'],
        ['bard', 'Failed Bard', '+2 Charm'],
        ['merchant', 'Merchant\'s Heir', '+120 gold'],
        ['farmhand', 'Humble Farmhand', '+1 Might, +1 Wits, +1 Charm... but only 10 gold'],
      ].map(function (b, i) {
        return '<label class="radio"><input type="radio" name="bg" value="' + b[0] + '"' + (i === 0 ? ' checked' : '') +
          '><b>' + b[1] + '</b> <span class="muted">' + b[2] + '</span></label>';
      }).join('') +
      '</fieldset>';
    const row = el('div', 'row');
    row.appendChild(btn('Back', titleScreen));
    row.appendChild(btn('Begin', function () {
      const name = ($('#ng-name').value || '').trim() || 'Traveler';
      store('hgf_lastname', name);
      const bg = (document.querySelector('input[name=bg]:checked') || {}).value;
      const opts = { name: name, title: $('#ng-title').value, stats: {}, gold: 0, meta: { endings: unlockedEndings() } };
      if (bg === 'soldier') opts.stats.might = 2;
      if (bg === 'scholar') opts.stats.wits = 2;
      if (bg === 'bard') opts.stats.charm = 2;
      if (bg === 'merchant') opts.gold = 120;
      if (bg === 'farmhand') { opts.stats = { might: 1, wits: 1, charm: 1 }; opts.gold = -50; }
      if (carry) {
        FL.STATS.forEach(function (k) { opts.stats[k] = (opts.stats[k] || 0) + carry.stats[k]; });
        opts.gold += carry.gold;
        opts.ngplus = carry.n;
      }
      ui.s = FL.newState(opts);
      FL.STATS.forEach(function (k) { ui.s.stats[k] = Math.min(10, ui.s.stats[k]); });
      ui.log = [];
      afterAction();
    }, { cls: 'primary' }));
    box.appendChild(row);
    setMain(box);
  }

  function loadState(state) {
    ui.s = FL.normalizeState(JSON.parse(JSON.stringify(state)));
    ui.run = null; ui.sel = null; ui.log = ['Game loaded.'];
    closeModal();
    afterAction();
  }

  /* ------------------------------------------------------------------ flow */
  function afterAction() {
    const s = ui.s;
    const ev = FL.pendingEvent(s);
    if (ev) {
      s.seenEvents[ev.id] = true;
      playScene(ev.ref || { id: ev.scene }, 'event');
      return;
    }
    if (s.slot === 0 && !ui.run) saveTo('auto');
    renderHub();
  }

  function playScene(ref, kind) {
    ui.run = FL.startScene(ui.s, ref, kind);
    ui.lastChoice = null;
    renderScene();
  }

  /* ------------------------------------------------------------------ hub */
  function renderHub() {
    const s = ui.s;
    renderHud();
    const loc = FL.locations[s.loc];
    const box = el('div', 'hub');
    music(loc.music || 'town');

    const head = el('div', 'loc-head backdrop');
    head.innerHTML = (FL.backdrop ? FL.backdrop(s.loc, s.slot) : '') + '<div class="bd-title"><div class="loc-icon">' + loc.icon + '</div><div><h2>' + esc(loc.name) + '</h2>' +
      '<div class="muted">' + FL.timeName(s) + ', Day ' + s.day + '</div></div></div>';
    box.appendChild(head);
    box.appendChild(el('p', 'loc-desc', rich(loc.desc[s.slot] || loc.desc[0])));

    if (ui.log.length) {
      const log = el('div', 'log');
      log.setAttribute('role', 'status');
      log.innerHTML = ui.log.map(function (l) { return typeof l === 'string' && l.charAt(0) === '<' ? l : para(s, l); }).join('');
      box.appendChild(log);
    }

    // People
    const here = FL.charsAt(s, s.loc);
    const ppl = el('section', 'people');
    ppl.appendChild(el('h3', null, here.length ? 'People here' : 'Nobody of interest is here right now.'));
    here.forEach(function (id) { ppl.appendChild(charCard(id)); });
    box.appendChild(ppl);

    // Activities
    const acts = (loc.activities || []).slice();
    if (acts.length || loc.shop) {
      const sec = el('section', 'acts');
      sec.appendChild(el('h3', null, 'Things to do'));
      const wrap = el('div', 'btns');
      if (loc.shop) wrap.appendChild(btn('🛍️ Browse the shops', shopModal));
      acts.forEach(function (a) {
        const lacking = (a.cost && s.gold < a.cost) || (a.req && !FL.reqMet(s, a.req));
        wrap.appendChild(btn(esc(a.label) + (a.free ? '' : ' <span class="tick">⏳</span>'), function () {
          const res = FL.doActivity(s, a);
          if (!res) return;
          sfx(res.stat ? 'stat' : res.gold ? 'coin' : res.give ? 'gift' : 'click');
          ui.sel = null;
          const extra = [];
          if (res.gold) extra.push('<p class="sys">+' + res.gold + ' gold</p>');
          if (res.give) Object.keys(res.give).forEach(function (k) { extra.push('<p class="sys">+1 ' + esc(FL.items[k].name) + '</p>'); });
          ui.log = res.lines.concat(extra);
          afterAction();
        }, { disabled: lacking }));
      });
      sec.appendChild(wrap);
      box.appendChild(sec);
    }

    // Travel
    const tr = el('section', 'travel');
    tr.appendChild(el('h3', null, 'Travel <span class="muted">(free)</span>'));
    const grid = el('div', 'travel-grid');
    FL.locOrder.forEach(function (id) {
      const l = FL.locations[id];
      if (l.unlock && !l.unlock(s)) return;
      const open = FL.locOpen(s, id);
      const n = open ? FL.charsAt(s, id).filter(function (c) { return s.chars[c].stage > 0; }).length : 0;
      const b = btn('<span class="ti">' + l.icon + '</span>' + esc(l.name) +
        (n ? ' <span class="badge">' + n + '</span>' : '') + (open ? '' : '<span class="closed">closed</span>'),
        function () { s.loc = id; ui.sel = null; ui.log = []; ui.moods = {}; afterAction(); },
        { disabled: !open || id === s.loc, cls: id === s.loc ? 'here' : '' });
      grid.appendChild(b);
    });
    tr.appendChild(grid);
    box.appendChild(tr);

    setMain(box);
    checkAchievements();
  }

  function charCard(id) {
    const s = ui.s;
    const c = FL.characters[id];
    const st = s.chars[id];
    const card = el('div', 'card' + (ui.sel === id ? ' open' : ''));
    card.style.setProperty('--c', c.color);
    if (st.stage === 0) {
      card.innerHTML = '<div class="card-head"><div class="avatar">?</div><div><b>A stranger</b>' +
        '<div class="muted">' + rich(c.teaser) + '</div></div></div>';
      const row = el('div', 'btns');
      row.appendChild(btn('Approach <span class="tick">⏳</span>', function () {
        ui.log = [];
        playScene({ char: id, id: 'intro' }, 'romance');
      }, { cls: 'primary' }));
      card.appendChild(row);
      return card;
    }
    const rs = FL.romanceStatus(s, id);
    card.innerHTML = '<div class="card-head">' + avatar(id, false, ui.moods[id]) + '<div><b>' + esc(c.name) +
      '</b> <span class="trope">' + esc(c.trope) + '</span><div>' + heartBar(st.aff) +
      ' <span class="muted">' + FL.STAGE_NAMES[st.stage] + '</span>' +
      (rs.ok ? ' <span class="ready">★ Romance ready</span>' : '') +
      (rs.done ? ' <span class="ready">♥ Devoted</span>' : '') + '</div></div></div>';
    const row = el('div', 'btns');
    row.appendChild(btn('Talk <span class="tick">⏳</span>', function () {
      const res = FL.talk(s, id);
      ui.log = res.lines.slice();
      ui.moods = moodsIn(res.lines, {});
      if (res.gain) sfx('heart');
      if (res.gain) ui.log.push('<p class="sys">' + noteHtml({ type: 'aff', char: id, n: res.gain }) + '</p>');
      else if (st.stage < 4) ui.log.push('<p class="sys muted">(' + c.short + ' seems to be waiting for something more before you can get any closer.)</p>');
      afterAction();
    }, { disabled: !FL.canTalk(s, id), title: FL.canTalk(s, id) ? '' : 'Already talked today' }));
    row.appendChild(btn('Give gift', function () { giftModal(id); }, {
      disabled: !FL.canGift(s, id) || !Object.keys(s.inv).length,
      title: !FL.canGift(s, id) ? 'Already received a gift today' : '',
    }));
    if (st.stage >= FL.CONFIG.dateStage && Object.keys(c.dates).length) {
      const can = FL.canDate(s, id);
      row.appendChild(btn('💕 Ask on a date <span class="tick">⏳</span>', function () { dateModal(id); }, {
        disabled: !can, title: can ? '' : 'You\'ve already been on a date today',
      }));
    }
    if (rs.scene) {
      row.appendChild(btn('★ Romance scene <span class="tick">⏳</span>', function () {
        ui.log = [];
        playScene({ char: id, id: rs.scene }, 'romance');
      }, { disabled: !rs.ok, cls: rs.ok ? 'romance' : '', title: rs.ok ? '' : 'Needs: ' + rs.needs.join(', ') }));
    }
    card.appendChild(row);
    if (!rs.ok && rs.needs && rs.needs.length) {
      card.appendChild(el('div', 'needs muted', 'Next scene needs: ' + esc(rs.needs.join(', '))));
    }
    if (s.daily.talk[id]) card.appendChild(el('div', 'needs muted', 'You\'ve already talked today.'));
    return card;
  }

  /* ------------------------------------------------------------------ ending illustrations */
  // A key-moment picture for an ending: the Starfall sky with her, dressed for the festival.
  function catSvg() {
    return '<svg viewBox="0 0 100 100" role="img" aria-label="A stray cat"><path fill="#14101e" d="M30 92 C26 70 30 54 40 46 L36 26 L46 38 C50 36 54 36 58 38 L66 26 L64 46 C74 54 76 72 72 92 Z"/>' +
      '<path fill="none" stroke="#14101e" stroke-width="6" stroke-linecap="round" d="M70 88 C88 86 92 70 84 62"/><circle cx="46" cy="50" r="2.4" fill="#ffd27a"/><circle cx="56" cy="50" r="2.4" fill="#ffd27a"/></svg>';
  }
  function endingIllustration(endingId, state) {
    const e = FL.endings[endingId];
    if (!e || !FL.backdrop) return '';
    let cast = [];
    let mood = 'happy';
    let sky = FL.backdrop('starfall', 2);
    if (e.char) cast = [e.char];
    else if (endingId === 'harem') cast = state ? FL.readyChars(state).slice(0, 7) : [];
    else if (endingId === 'true_end') { cast = ['amorette']; mood = 'blush'; }
    else if (endingId === 'greenhouse') { cast = ['marigold']; mood = 'angry'; sky = FL.backdrop('market', 2); }
    let figs = cast.map(function (id) {
      return '<span class="ei-fig" style="--c:' + FL.characters[id].color + '">' + FL.portrait(id, mood, { festival: endingId !== 'greenhouse', full: true, noBg: true }) + '</span>';
    }).join('');
    if (endingId === 'alone') figs = '<span class="ei-cat">' + catSvg() + '</span>';
    return '<div class="ending-illus' + (cast.length > 2 ? ' many' : '') + '" style="--c:' + e.color + '">' + sky + '<div class="ei-cast">' + figs + '</div></div>';
  }

  /* ------------------------------------------------------------------ scenes */
  function renderScene() {
    const s = ui.s;
    const run = ui.run;
    renderHud();
    const node = FL.currentNode(run);
    const box = el('div', 'scene');
    music(sceneTheme(run));
    const lines = FL.nodeText(s, run, node);
    // expressions persist across nodes until a line changes them
    if (run.moodNode !== run.id + '.' + run.node) {
      run.moods = run.moods || {};
      if (node.mood && run.char) run.moods[run.char] = node.mood;
      moodsIn(lines, run.moods);
      run.moodNode = run.id + '.' + run.node;
    }
    const moods = run.moods || {};
    if (!run.sfxDone) {
      run.sfxDone = true;
      if (run.id === 'festival') sfx('fireworks');
      else if (run.id === 's3' && run.char) sfx('heartbeat');
      else sfx('page');
    }
    const festive = run.kind === 'ending' || run.id === 'festival' || run.id === 'true_end';
    const intimate = run.char && run.id === 's3';
    if (FL.backdrop) {
      const bd = festive ? FL.backdrop('starfall', 2) : FL.backdrop(s.loc, s.slot, intimate ? { intimate: true } : null);
      box.appendChild(el('div', 'backdrop scene-bd' + (festive || intimate ? ' key-moment' : ''), bd));
    }
    const dress = festive ? { festival: true } : null;
    if (run.char) {
      const c = FL.characters[run.char];
      let label = { intro: 'First Meeting', s1: 'Romance Scene I', s2: 'Romance Scene II', s3: 'Romance Scene III', morning: 'The Morning After', ending: 'Ending' }[run.id] || (run.kind === 'event' ? 'Chance Encounter' : '');
      if (run.kind === 'date') label = 'Date · ' + FL.DATE_SPOTS[run.id.slice(5)].name;
      const head = el('div', 'scene-head');
      head.style.setProperty('--c', c.color);
      head.innerHTML = avatar(run.char, true, moods[run.char], dress) + '<div><b>' + esc(c.name) + '</b> · <span class="trope">' +
        esc(c.trope) + '</span><div class="muted">' + label + '</div></div>';
      box.appendChild(head);
    }
    if (!run.char && FL.sceneCast && FL.sceneCast[run.id]) {
      const cast = FL.sceneCast[run.id];
      const head = el('div', 'scene-head cast');
      head.innerHTML = '<span class="cast-pics">' + cast.map(function (id) { return avatar(id, true, moods[id]); }).join('') + '</span><div><b>' +
        cast.map(function (id) { return esc(FL.characters[id].short); }).join(' & ') + '</b><div class="muted">' + (cast.length > 1 ? 'Chance Encounter' : 'Event') + '</div></div>';
      box.appendChild(head);
    }
    if (ui.lastChoice) box.appendChild(el('p', 'chosen', '› ' + rich(FL.fmt(s, ui.lastChoice))));
    if (run.lastCheck) {
      const lc = run.lastCheck;
      box.appendChild(el('p', 'check ' + (lc.pass ? 'pass' : 'fail'),
        FL.STAT_NAMES[lc.stat] + ' check: ' + lc.val + ' vs ' + lc.dc + ' — ' + (lc.pass ? 'Success!' : 'Failed.')));
    }
    const text = el('div', 'text');
    text.setAttribute('aria-live', 'polite');
    text.tabIndex = -1;
    text.innerHTML = lines.map(function (p) { return para(s, p); }).join('');
    box.appendChild(text);
    if (run.notes && run.notes.length) {
      box.appendChild(el('div', 'notes', run.notes.map(noteHtml).join(' ')));
    }

    if (run.ending && ui.replay) {
      // the end of a replayed memory: nothing is unlocked or overwritten
      sfx('ending');
      const e = FL.endings[run.ending];
      const end = el('div', 'ending-card');
      end.style.setProperty('--c', e.color);
      end.innerHTML = endingIllustration(run.ending, s) + '<div class="ending-label">MEMORY</div><h2>' + esc(e.title) + '</h2><div class="muted">' + esc(e.who) + '</div>';
      const row = el('div', 'btns center');
      row.appendChild(btn('Back to Memories', finishReplay, { cls: 'primary' }));
      end.appendChild(row);
      box.appendChild(end);
      setMain(box);
      paceScene(box);
      return;
    }
    if (run.ending) {
      sfx('ending');
      snapEnding(s, run);
      unlockEnding(run.ending);
      store(SAVE_PREFIX + 'auto', null);
      const e = FL.endings[run.ending];
      const end = el('div', 'ending-card');
      end.style.setProperty('--c', e.color);
      let more = '';
      if (e.char) {
        const mine = FL.characters[e.char].endingIds;
        const got = mine.filter(function (x) { return unlockedEndings().indexOf(x) >= 0; }).length;
        more = '<p class="muted small">' + esc(FL.characters[e.char].short) + '\'s endings found: ' + got + ' / ' + mine.length +
          (got < mine.length ? ' · the way you played her route decides which one you see' : '') + '</p>';
      }
      end.innerHTML = endingIllustration(run.ending, s) + '<div class="ending-label">ENDING UNLOCKED</div><h2>' + esc(e.title) + '</h2><div class="muted">' + esc(e.who) +
        '</div><p class="muted">' + unlockedEndings().length + ' / ' + FL.endingOrder.length + ' endings discovered</p>' + more;
      const row = el('div', 'btns center');
      row.appendChild(btn('New Game+ (keep stats & gold)', function () { newGameScreen(true); }, { cls: 'primary' }));
      row.appendChild(btn('Title Screen', titleScreen));
      row.appendChild(btn('Endings Gallery', galleryModal));
      end.appendChild(row);
      box.appendChild(end);
      ui.run = null;
      setMain(box);
      paceScene(box);
      checkAchievements();
      return;
    }

    const list = el('div', 'choices');
    FL.nodeChoices(s, run, node).forEach(function (o, i) {
      const ch = o.choice;
      let label = '<span class="num">' + (i + 1) + '</span>' + rich(FL.fmt(s, ch.text));
      if (o.label) label += ' <span class="req">[' + esc(o.label) + ']</span>';
      const b = btn(label, function () { pick(ch); }, { disabled: !o.ok, cls: 'choice' });
      b.dataset.idx = i + 1;
      list.appendChild(b);
    });
    box.appendChild(list);
    setMain(box);
    paceScene(box);
    // screen readers start on the new text; keyboard users can Tab straight to the choices
    if ($('#modal').hidden) text.focus({ preventScroll: true });
  }

  function pick(ch) {
    const s = ui.s;
    const run = ui.run;
    ui.lastChoice = ch.text === 'Continue' || /^Begin/.test(ch.text) ? null : ch.text;
    sfx('click');
    const r = FL.choose(s, run, ch);
    if (r === 'blocked') return;
    if (run.lastCheck) sfx(run.lastCheck.pass ? 'pass' : 'fail');
    sfxNotes(run.notes);
    if (r === 'end' && ui.replay) { finishReplay(); return; }
    if (r === 'end') {
      if (run.char && MEMORY_SCENES.indexOf(run.id) >= 0) rememberScene(run.char, run.id);
      FL.finishScene(s, run);
      const wasChar = run.char;
      const kind = run.kind;
      ui.run = null;
      if (kind === 'date') {
        FL.advance(s);
        ui.log = ['<p class="sys">💕 You had a lovely time with ' + esc(FL.characters[wasChar].short) + '.</p>'];
        ui.sel = wasChar;
      }
      if (kind === 'romance') {
        FL.advance(s);
        const st = s.chars[wasChar];
        if (st.stage >= 4) sfx('devoted');
        ui.log = ['<p class="sys">' + esc(FL.characters[wasChar].short) + ' is now: <b>' + FL.STAGE_NAMES[st.stage] + '</b>' +
          (st.stage >= 4 ? ' — her heart is yours. Find her at the Starfall Festival.' : '') + '</p>'];
        ui.sel = wasChar;
      }
      afterAction();
      return;
    }
    renderScene();
  }

  /* ------------------------------------------------------------------ modals */
  let modalReturn = null;
  function openModal(title, body) {
    const m = $('#modal');
    if (m.hidden) modalReturn = document.activeElement;
    m.innerHTML = '';
    const box = el('div', 'modal-box');
    const head = el('div', 'modal-head', '<h2 id="modal-title">' + title + '</h2>');
    const close = btn('✕', closeModal, { cls: 'close' });
    close.setAttribute('aria-label', 'Close');
    head.appendChild(close);
    box.appendChild(head);
    const inner = el('div', 'modal-body');
    if (typeof body === 'string') inner.innerHTML = body; else inner.appendChild(body);
    box.appendChild(inner);
    m.appendChild(box);
    m.hidden = false;
    // move keyboard focus into the dialog
    const first = inner.querySelector('button:not([disabled]), input, textarea, select, a[href]') || close;
    first.focus({ preventScroll: true });
  }
  function closeModal() {
    const m = $('#modal');
    const was = !m.hidden;
    m.hidden = true;
    m.innerHTML = '';
    if (was && modalReturn && document.contains(modalReturn)) modalReturn.focus({ preventScroll: true });
    modalReturn = null;
  }
  // keep Tab inside an open dialog
  function trapFocus(e) {
    const m = $('#modal');
    if (e.key !== 'Tab' || m.hidden) return;
    const items = Array.prototype.filter.call(m.querySelectorAll('button, input, textarea, select, a[href]'), function (x) { return !x.disabled && x.offsetParent !== null; });
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    else if (!m.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
  }

  function giftModal(id) {
    const s = ui.s;
    const c = FL.characters[id];
    const wrap = el('div', 'gift-list');
    const ids = Object.keys(s.inv);
    if (!ids.length) wrap.appendChild(el('p', 'muted', 'Your pockets are empty. The market sells gifts.'));
    ids.forEach(function (it) {
      const item = FL.items[it];
      const known = s.known[id][it];
      const mark = known ? { love: '💖 loves', like: '😊 likes', neutral: '😐 meh', hate: '💢 hates' }[known] : '';
      wrap.appendChild(btn('<b>' + esc(item.name) + '</b> ×' + s.inv[it] + (mark ? ' <span class="muted">(' + mark + ')</span>' : ''), function () {
        const res = FL.giveGift(s, id, it);
        closeModal();
        bumpLifetime('gifts');
        if (res.reaction === 'love') bumpLifetime('loved');
        if (it === 'fork') bumpLifetime('fork');
        ui.sel = id;
        ui.log = res.lines.slice();
        ui.moods = {};
        ui.moods[id] = moodsIn(res.lines, {})[id] || { love: 'happy', like: 'happy', neutral: 'neutral', hate: 'angry' }[res.reaction];
        sfx(res.reaction === 'hate' ? 'heartdown' : res.gain > 0 ? 'gift' : 'click');
        const tag = { love: 'She loves it!', like: 'She likes it.', neutral: 'She\'s indifferent.', hate: 'She hates it!' }[res.reaction];
        ui.log.push('<p class="sys">' + tag + ' ' + (res.gain ? noteHtml({ type: 'aff', char: id, n: res.gain }) :
          '<span class="muted">(no change)</span>') + '</p>');
        renderHub();
      }, { cls: 'wide' }));
    });
    openModal('Give a gift to ' + esc(c.short), wrap);
  }

  function dateModal(id) {
    const s = ui.s;
    const c = FL.characters[id];
    const wrap = el('div', 'gift-list');
    wrap.appendChild(el('p', 'muted', 'Where will you take ' + esc(c.short) + '? A date takes one part of the day. ' +
      'Everyone has a favorite spot, and you\'ll only find out by trying.'));
    FL.dateOptions(s, id).forEach(function (o) {
      const tag = (o.fav && o.been ? ' <span class="ready">★ her favorite</span>' : '') + (o.been ? ' <span class="muted small">(been)</span>' : '');
      wrap.appendChild(btn('<span class="ti">' + o.spot.icon + '</span><b>' + esc(o.spot.name) + '</b>' + tag +
        ' <span class="price">' + (o.spot.cost ? '🪙 ' + o.spot.cost : 'free') + '</span><div class="muted small">' + esc(o.spot.desc) + '</div>',
        function () {
          closeModal();
          const run = FL.startDate(s, id, o.id);
          if (!run) return;
          ui.log = []; ui.run = run; ui.lastChoice = null;
          renderScene();
        }, { cls: 'wide', disabled: !o.ok, title: o.ok ? '' : 'Not enough gold' }));
    });
    openModal('Ask ' + esc(c.short) + ' on a date', wrap);
  }

  function shopModal() {
    const s = ui.s;
    const wrap = el('div', 'shop');
    wrap.appendChild(el('p', 'muted', 'You have 🪙 ' + s.gold + ' gold. Shopping takes no time.'));
    FL.itemOrder.forEach(function (it) {
      const item = FL.items[it];
      const row = el('div', 'shop-row');
      row.innerHTML = '<div><b>' + esc(item.name) + '</b> <span class="price">🪙 ' + item.price + '</span>' +
        (s.inv[it] ? ' <span class="muted">(have ' + s.inv[it] + ')</span>' : '') +
        '<div class="muted small">' + esc(item.desc) + '</div></div>';
      row.appendChild(btn('Buy', function () {
        if (FL.buy(s, it, 1)) { renderHub(); shopModal(); }
      }, { disabled: s.gold < item.price }));
      wrap.appendChild(row);
    });
    wrap.appendChild(el('h3', 'shop-sub', 'Private lessons'));
    wrap.appendChild(el('p', 'muted small', 'Pay a tutor for +1 to a stat, no time needed. Each lesson in the same stat costs more than the last.'));
    FL.STATS.forEach(function (k) {
      const L = FL.LESSONS[k];
      const price = FL.lessonPrice(s, k);
      const maxed = s.stats[k] >= 10;
      const row = el('div', 'shop-row');
      row.innerHTML = '<div><b>' + esc(L.name) + '</b> <span class="price">🪙 ' + price + '</span>' +
        '<div class="muted small">+1 ' + FL.STAT_NAMES[k] + ' (now ' + s.stats[k] + (maxed ? ', the maximum' : '') + ')</div></div>';
      row.appendChild(btn('Buy', function () {
        if (FL.buyLesson(s, k)) { sfx('stat'); renderHub(); shopModal(); }
      }, { disabled: maxed || s.gold < price }));
      wrap.appendChild(row);
    });
    openModal('Market Street Shops', wrap);
  }

  function inventoryModal() {
    const s = ui.s;
    const ids = Object.keys(s.inv);
    const html = ids.length ? ids.map(function (it) {
      const item = FL.items[it];
      return '<div class="inv-row"><b>' + esc(item.name) + '</b> ×' + s.inv[it] + '<div class="muted small">' + esc(item.desc) + '</div></div>';
    }).join('') : '<p class="muted">Nothing but lint.</p>';
    openModal('Inventory', html);
  }

  /* ------------------------------------------------------------------ who's where */
  function readyNow(s) {
    return FL.metChars(s).filter(function (id) { return FL.romanceStatus(s, id).ok; });
  }
  function statusOf(s, id) {
    const st = s.chars[id];
    if (st.stage >= 4) return 'devoted';
    if (FL.romanceStatus(s, id).ok) return 'ready';
    return 'progress';
  }
  function goTo(loc, id) {
    const s = ui.s;
    if (!FL.locOpen(s, loc)) return;
    closeModal();
    s.loc = loc; ui.sel = id || null; ui.log = []; ui.moods = {};
    afterAction();
  }
  function peopleModal(filter) {
    const s = ui.s;
    filter = filter || (readyNow(s).length ? 'ready' : 'all');
    const wrap = el('div', 'people-modal');
    const tabs = el('div', 'btns tabs');
    const counts = { all: 0, ready: 0, progress: 0, devoted: 0 };
    const met = FL.metChars(s);
    met.forEach(function (id) { counts.all++; counts[statusOf(s, id)]++; });
    [['all', 'Everyone'], ['ready', '★ Scene ready'], ['progress', 'In progress'], ['devoted', '♥ Devoted']].forEach(function (t) {
      tabs.appendChild(btn(t[1] + ' <span class="muted">' + counts[t[0]] + '</span>', function () { peopleModal(t[0]); },
        { cls: filter === t[0] ? 'here' : '' }));
    });
    wrap.appendChild(tabs);
    const list = met.filter(function (id) { return filter === 'all' || statusOf(s, id) === filter; });
    if (!met.length) wrap.appendChild(el('p', 'muted', 'You haven\'t met anyone yet. Explore the town: strangers are waiting.'));
    else if (!list.length) wrap.appendChild(el('p', 'muted', 'Nobody in this group right now.'));
    // group by where they are right now
    const groups = {};
    list.forEach(function (id) {
      const loc = FL.charLocation(s, id);
      const key = loc && FL.locOpen(s, loc) ? loc : '_away';
      (groups[key] = groups[key] || []).push(id);
    });
    const order = FL.locOrder.filter(function (l) { return groups[l]; }).concat(groups._away ? ['_away'] : []);
    order.forEach(function (key) {
      const sec = el('div', 'pm-group');
      if (key === '_away') sec.appendChild(el('h3', null, 'Not around right now'));
      else {
        const L = FL.locations[key];
        const h = el('div', 'pm-head', '<h3>' + L.icon + ' ' + esc(L.name) + (key === s.loc ? ' <span class="muted">(you are here)</span>' : '') + '</h3>');
        if (key !== s.loc) h.appendChild(btn('Go there', function () { goTo(key); }, { cls: 'small-btn' }));
        sec.appendChild(h);
      }
      groups[key].forEach(function (id) {
        const c = FL.characters[id];
        const st = s.chars[id];
        const rs = FL.romanceStatus(s, id);
        const nextSlot = (s.slot + 1) % 3, nextDay = s.slot === 2 ? s.day + 1 : s.day;
        const later = FL.charUnlocked(s, id) ? FL.charLocationAt(s, id, nextSlot, nextDay) : null;
        const row = el('div', 'pm-row');
        row.style.setProperty('--c', c.color);
        row.innerHTML = avatar(id) + '<div class="pm-body"><b>' + esc(c.short) + '</b> ' + heartBar(st.aff) +
          (rs.ok ? ' <span class="ready">★ Romance ready</span>' : '') + (st.stage >= 4 ? ' <span class="ready">♥ Devoted</span>' : '') +
          '<div class="muted small">' + (key === '_away' ? 'Away. ' : '') + 'Next (' + FL.CONFIG.slots[nextSlot] + '): ' +
          (later ? esc(FL.locations[later].name) : 'nowhere to be found') +
          (!rs.ok && rs.needs && rs.needs.length ? ' · Needs: ' + esc(rs.needs.join(', ')) : '') + '</div></div>';
        if (key !== '_away' && key !== s.loc) row.appendChild(btn('Go', function () { goTo(key, id); }, { cls: 'small-btn' }));
        sec.appendChild(row);
      });
      wrap.appendChild(sec);
    });
    openModal('Who\'s Where · ' + FL.timeName(s) + ', Day ' + s.day, wrap);
  }

  function journalModal(filter) {
    const s = ui.s;
    filter = filter || 'all';
    const met = FL.metChars(s).filter(function (id) { return filter === 'all' || statusOf(s, id) === filter; });
    let html = '<p class="muted">Hearts discovered: ' + FL.metChars(s).length + ' / ' + FL.charOrder.length +
      ' · Devoted: ' + FL.readyChars(s).length + '</p>' +
      '<div class="btns tabs" id="j-tabs">' + [['all', 'Everyone'], ['ready', '★ Scene ready'], ['progress', 'In progress'], ['devoted', '♥ Devoted']].map(function (t) {
        return '<button class="btn' + (t[0] === filter ? ' here' : '') + '" data-f="' + t[0] + '">' + t[1] + '</button>';
      }).join('') + '</div>';
    if (!FL.metChars(s).length) html += '<p>You haven\'t met anyone yet. Explore the town — strangers are waiting.</p>';
    else if (!met.length) html += '<p class="muted">Nobody in this group right now.</p>';
    met.forEach(function (id) {
      const c = FL.characters[id];
      const st = s.chars[id];
      const rs = FL.romanceStatus(s, id);
      const known = Object.keys(s.known[id]).filter(function (it) { return FL.items[it]; }).map(function (it) {
        return '<span class="k k-' + s.known[id][it] + '">' + esc(FL.items[it].name) + '</span>';
      }).join(' ');
      const favKnown = c.dateFav && s.flags[id + '_date_' + c.dateFav];
      const endGot = c.endingIds.filter(function (x) { return unlockedEndings().indexOf(x) >= 0; }).length;
      html += '<div class="j-entry" style="--c:' + c.color + '"><div class="j-head"><b>' + esc(c.name) + '</b> <span class="trope">' + esc(c.trope) +
        '</span></div><div>' + heartBar(st.aff) + ' <span class="muted">' + st.aff + '/100 · ' + FL.STAGE_NAMES[st.stage] +
        ' · Scenes ' + Math.max(0, st.stage - 1) + '/3</span></div>' +
        '<p class="small">' + rich(c.blurb) + '</p>' +
        '<div class="small"><b>Values:</b> ' + FL.STAT_NAMES[c.favStat] + '</div>' +
        '<div class="small"><b>Found:</b> ' + esc(FL.scheduleSummary(id).join(' · ')) + '</div>' +
        '<div class="small"><b>Gift notes:</b> ' + (known || '<span class="muted">none yet</span>') + '</div>' +
        (st.stage >= FL.CONFIG.dateStage ? '<div class="small"><b>Dates:</b> ' + (st.dates || 0) +
          (favKnown ? ' · favorite spot: ' + esc(FL.DATE_SPOTS[c.dateFav].name) : '') + '</div>' : '') +
        '<div class="small"><b>Endings found:</b> ' + endGot + ' / ' + c.endingIds.length + '</div>' +
        '<div class="small"><b>Next:</b> ' + (rs.done ? 'Devoted — meet her at the Starfall Festival.' : rs.ok ? '★ Romance scene ready!' :
          esc((rs.needs || []).join(', '))) + '</div></div>';
    });
    openModal('Journal', html);
    document.querySelectorAll('#j-tabs button').forEach(function (b) {
      b.addEventListener('click', function () { journalModal(b.dataset.f); });
    });
  }

  function saveModal(canSave) {
    const wrap = el('div', 'saves');
    ['auto', 1, 2, 3].forEach(function (slot) {
      const d = readSave(slot);
      const row = el('div', 'save-row');
      const label = slot === 'auto' ? 'Autosave' : 'Slot ' + slot;
      row.innerHTML = '<div><b>' + label + '</b><div class="muted small">' + (d ?
        esc(d.state.name) + ' · Day ' + d.state.day + ' ' + FL.CONFIG.slots[d.state.slot] + ' · ' + new Date(d.when).toLocaleString() :
        'Empty') + '</div></div>';
      const b = el('div', 'btns');
      if (canSave && slot !== 'auto') b.appendChild(btn('Save', function () { saveTo(slot); saveModal(true); }));
      b.appendChild(btn('Load', function () { loadState(d.state); }, { disabled: !d }));
      row.appendChild(b);
      wrap.appendChild(row);
    });
    wrap.appendChild(el('div', 'btns', '')).appendChild(btn('Save codes: back up or transfer a game', saveCodeModal, { disabled: !!ui.run }));
    openModal(canSave ? 'Save / Load' : 'Load Game', wrap);
  }

  function galleryModal() {
    const got = unlockedEndings();
    const chip = function (id) {
      const e = FL.endings[id];
      const have = got.indexOf(id) >= 0;
      return have ? '<button class="g-chip got" data-end="' + id + '" style="--c:' + e.color + '">' + esc(e.title) + '</button>'
        : '<span class="g-chip" style="--c:' + e.color + '">???</span>';
    };
    let html = '<p class="muted">' + got.length + ' / ' + FL.endingOrder.length + ' endings discovered. Most heroines have more than one ending: how you play her route decides which you see.</p><div class="g-list">';
    FL.charOrder.forEach(function (id) {
      const c = FL.characters[id];
      const any = c.endingIds.some(function (x) { return got.indexOf(x) >= 0; });
      html += '<div class="g-row" style="--c:' + c.color + '">' + (any ? avatar(id) : '<span class="avatar">?</span>') +
        '<div><b>' + (any ? esc(c.short) : '???') + '</b> <span class="trope">' + esc(c.trope) + '</span><div>' +
        c.endingIds.map(chip).join(' ') + '</div></div></div>';
    });
    const others = FL.endingOrder.filter(function (id) { return !FL.endings[id].char; });
    html += '<div class="g-row"><span class="avatar">★</span><div><b>Other endings</b><div>' + others.map(function (id) {
      return chip(id) + ' <span class="muted small">' + esc(FL.endings[id].who) + '</span>';
    }).join(' ') + '</div></div></div></div>';
    openModal('Endings Gallery', html);
    document.querySelectorAll('.g-chip[data-end]').forEach(function (b) {
      b.addEventListener('click', function () { endingViewModal(b.dataset.end); });
    });
  }
  function endingViewModal(id) {
    const e = FL.endings[id];
    const snap = endingSnaps()[id];
    const st = snap ? Object.assign(FL.newState({}), { chars: Object.assign(FL.newState({}).chars, snap.state.chars || {}) }) : null;
    const wrap = el('div', 'ending-view', endingIllustration(id, st) + '<h2 style="color:' + e.color + '">' + esc(e.title) + '</h2><div class="muted">' + esc(e.who) + '</div>');
    const row = el('div', 'btns center');
    if (snap) row.appendChild(btn('Replay this ending', function () { replayEnding(id); }, { cls: 'primary' }));
    row.appendChild(btn('‹ Back to the gallery', galleryModal));
    wrap.appendChild(row);
    openModal('Ending', wrap);
  }

  function memoriesModal() {
    const got = memories();
    const wrap = el('div', 'memories');
    wrap.appendChild(el('p', 'muted', 'Replay any scene you\'ve already seen. Replays don\'t change your saved game. ' +
      got.length + ' memories unlocked.'));
    FL.charOrder.forEach(function (id) {
      const c = FL.characters[id];
      const seen = MEMORY_SCENES.filter(function (sc) { return FL.getScene({ char: id, id: sc }) && got.indexOf(id + '.' + sc) >= 0; });
      const snaps = endingSnaps();
      const ends = c.endingIds.filter(function (e) { return snaps[e]; });
      if (!seen.length && !ends.length) return;
      const row = el('div', 'mem-row');
      row.style.setProperty('--c', c.color);
      row.innerHTML = avatar(id) + '<div class="mem-body"><b>' + esc(c.name) + '</b> <span class="trope">' + esc(c.trope) + '</span></div>';
      const btns = el('div', 'btns');
      seen.forEach(function (sc) { btns.appendChild(btn(MEMORY_LABELS[sc], function () { replayScene(id, sc); })); });
      ends.forEach(function (e) { btns.appendChild(btn('★ ' + esc(FL.endings[e].title), function () { replayEnding(e); }, { cls: 'end-mem' })); });
      row.querySelector('.mem-body').appendChild(btns);
      wrap.appendChild(row);
    });
    const snapsAll = endingSnaps();
    const others = FL.endingOrder.filter(function (e) { return !FL.endings[e].char && snapsAll[e]; });
    if (others.length) {
      const row = el('div', 'mem-row');
      row.innerHTML = '<span class="avatar">★</span><div class="mem-body"><b>Other endings</b></div>';
      const b2 = el('div', 'btns');
      others.forEach(function (e) { b2.appendChild(btn('★ ' + esc(FL.endings[e].title), function () { replayEnding(e); }, { cls: 'end-mem' })); });
      row.querySelector('.mem-body').appendChild(b2);
      wrap.appendChild(row);
    }
    if (!got.length && !Object.keys(snapsAll).length) wrap.appendChild(el('p', null, 'No memories yet. Every romance scene, date and ending you finish is saved here.'));
    openModal('Memories', wrap);
  }

  function helpModal() {
    openModal('How to Play', [
      '<p>You have <b>30 days</b> until the Starfall Festival. Each day has a <b>Morning</b>, <b>Afternoon</b> and <b>Evening</b>.</p>',
      '<p><b>Actions marked ⏳ take up one part of the day:</b> meeting someone, talking, romance scenes, working and training. Travel, shopping and giving gifts are free (one gift per person per day).</p>',
      '<p><b>Affection (♥)</b> grows when you talk, give gifts, and make choices in scenes. Each heroine has three romance scenes. They unlock at ♥30, ♥60 and ♥90. The second and third also need her favorite stat (Might, Wits or Charm) at 2 and 3. Relationships need time, too: after a romance scene, wait a couple of days before the next one with her. That\'s a good moment to court someone else.</p>',
      '<p>Talking and gifts can only take a relationship so far. To grow closer, you have to see the next romance scene.</p>',
      '<p><b>Stats:</b> Train <b>Might</b> at the Arena, <b>Wits</b> at the Library and <b>Charm</b> at the Tavern, Temple or Noble Quarter. Stats also open up special options in scenes.</p>',
      '<p><b>Gold:</b> Take quests at the Guild, work shifts, unload cargo. Buy gifts on Market Street, or pay for private lessons there (+1 to a stat; each lesson costs more than the last). Everyone has a gift they love — and one they hate. Giving the same gift again and again gets less effective, so mix it up.</p>',
      '<p>See all three romance scenes with a heroine to make her <b>Devoted</b>. At the Starfall Festival on Day 30, choose who to watch the stars with to see her ending. Win over five or more and you can try for... a different kind of ending.</p>',
      '<p>Some heroines only appear after certain events, or only at night. Check the Journal (📖) to see where everyone can be found.</p>',
      '<p>After your third romance scene with a heroine, look for her the next morning, and talk to her afterwards. She\'ll have things to say.</p>',
      '<p>Heroines know each other. Visit the places they hang out and you may stumble into one of their run-ins.</p>',
      '<p><b>Dates:</b> after your first romance scene with someone, you can ask her on a date (💕): dinner, the Moonlit Gardens, the harbor at sunset, or a picnic. Each heroine has a favorite.</p>',
      '<p><b>She remembers.</b> What you say and do in her scenes and on dates comes back later, and it decides which of her endings you get at the festival.</p>',
      '<p><b>Memories</b> (on the title screen and in the menu) lets you replay any romance scene you\'ve seen. Music can be switched on from the title screen or the 🎵 button.</p>',
      '<p>Keyboard: press <b>1–9</b> to pick choices in scenes.</p>',
    ].join(''));
  }

  function ageGate(then) {
    if (store(AGE_KEY)) { then(); return; }
    const box = el('div', 'panel age');
    box.innerHTML = '<h2>Before you begin</h2><p>This game is a romantic comedy with suggestive and sensual scenes. It\'s meant for adults (18+).</p>' +
      '<p class="muted">All characters are adults. Many are several centuries old, and one is a literal goddess.</p>';
    const row = el('div', 'btns center');
    row.appendChild(btn('I am 18 or older', function () { store(AGE_KEY, '1'); then(); }, { cls: 'primary' }));
    box.appendChild(row);
    setMain(box);
  }


  /* ------------------------------------------------------------------ settings */
  const SETTINGS_KEY = 'hgf_settings';
  const DEFAULTS = { textSize: 'm', pace: 'animated', sfx: true, sfxVol: 0.6 };
  function settings() {
    let v = {};
    try { v = JSON.parse(store(SETTINGS_KEY) || '{}') || {}; } catch (e) { v = {}; }
    return Object.assign({}, DEFAULTS, v);
  }
  function saveSetting(k, v) {
    const cur = settings(); cur[k] = v;
    store(SETTINGS_KEY, JSON.stringify(cur));
    applySettings();
  }
  function applySettings() {
    const st = settings();
    document.documentElement.dataset.textsize = st.textSize;
    document.documentElement.dataset.pace = st.pace;
    if (FL.sfx) { FL.sfx.setEnabled(st.sfx); FL.sfx.setVolume(st.sfxVol); }
  }
  function settingsModal() {
    const st = settings();
    const wrap = el('div', 'settings');
    const group = function (label, key, opts) {
      const g = el('div', 'set-row', '<div class="set-label">' + label + '</div>');
      const b = el('div', 'btns');
      opts.forEach(function (o) {
        b.appendChild(btn(o[1], function () { saveSetting(key, o[0]); settingsModal(); }, { cls: st[key] === o[0] ? 'here' : '' }));
      });
      g.appendChild(b);
      wrap.appendChild(g);
    };
    group('Text size', 'textSize', [['s', 'Small'], ['m', 'Medium'], ['l', 'Large'], ['xl', 'Extra large']]);
    group('Text pacing', 'pace', [['animated', 'Gentle fade'], ['paced', 'Line by line'], ['instant', 'Instant']]);
    wrap.appendChild(el('p', 'muted small', 'With "Line by line", click, tap or press Space to show everything at once.'));
    group('Sound effects', 'sfx', [[true, 'On'], [false, 'Off']]);
    const vols = el('div', 'set-row');
    if (FL.music) {
      const mv = el('label', 'vol', 'Music volume <input type="range" min="0" max="100" value="' + Math.round(FL.music.getVolume() * 100) + '">');
      mv.querySelector('input').addEventListener('input', function (e) { FL.music.setVolume(e.target.value / 100); });
      vols.appendChild(mv);
    }
    const sv = el('label', 'vol', 'Effects volume <input type="range" min="0" max="100" value="' + Math.round(st.sfxVol * 100) + '">');
    sv.querySelector('input').addEventListener('change', function (e) { saveSetting('sfxVol', e.target.value / 100); sfx('heart'); });
    vols.appendChild(sv);
    wrap.appendChild(vols);
    wrap.appendChild(btn('', toggleMusic, { cls: 'music-toggle' }));
    wrap.appendChild(codeBox());
    openModal('Settings', wrap);
    updateMusicButtons();
  }

  // "Line by line" pacing: reveal a scene's paragraphs one after another.
  let paceTimer = null;
  function paceScene(box) {
    if (paceTimer) { clearTimeout(paceTimer); paceTimer = null; }
    if (settings().pace !== 'paced') return;
    const ps = Array.prototype.slice.call(box.querySelectorAll('.text p'));
    const rest = box.querySelectorAll('.notes, .choices, .ending-card');
    if (ps.length < 2) return;
    ps.forEach(function (p, i) { if (i) p.classList.add('pending'); });
    rest.forEach(function (r) { r.classList.add('pending'); });
    let i = 1;
    const showAll = function () {
      box.querySelectorAll('.pending').forEach(function (x) { x.classList.remove('pending'); });
      if (paceTimer) clearTimeout(paceTimer);
      paceTimer = null;
      document.removeEventListener('keydown', key, true);
      box.removeEventListener('click', clickSkip, true);
    };
    const step = function () {
      if (i >= ps.length) { showAll(); return; }
      ps[i].classList.remove('pending');
      const len = ps[i].textContent.length;
      i++;
      paceTimer = setTimeout(step, Math.min(2600, 500 + len * 22));
    };
    const clickSkip = function (e) {
      if (!box.querySelector('.pending')) return;
      if (e.target.closest('.choices')) return;
      e.stopPropagation(); showAll();
    };
    const key = function (e) {
      if ((e.key === ' ' || e.key === 'Enter') && box.querySelector('.pending')) { e.preventDefault(); e.stopPropagation(); showAll(); }
    };
    box.addEventListener('click', clickSkip, true);
    document.addEventListener('keydown', key, true);
    paceTimer = setTimeout(step, Math.min(2600, 500 + ps[0].textContent.length * 22));
  }

  /* ------------------------------------------------------------------ cheat code */
  function codeBox() {
    const wrap = el('div', 'set-row codebox');
    wrap.appendChild(el('div', 'set-label', 'Enter a code'));
    if (!ui.s || ui.replay) { wrap.appendChild(el('p', 'muted small', 'Start or load a game to use a code.')); return wrap; }
    const row = el('div', 'btns');
    const input = el('input', 'code-input');
    input.type = 'text'; input.autocomplete = 'off'; input.spellcheck = false;
    input.setAttribute('aria-label', 'Cheat code');
    input.placeholder = 'Type a code…';
    const msg = el('p', 'small muted', '');
    msg.setAttribute('role', 'status');
    const go = function () {
      const res = FL.applyCheat(ui.s, input.value);
      if (!res) { msg.textContent = 'Nothing happens. Somewhere, the Narrator snickers.'; sfx('fail'); return; }
      input.value = '';
      msg.textContent = res;
      sfx('devoted');
      toast('The Narrator sighs', 'Fine. But I\'m writing this down.');
      if (ui.run) renderHud(); else renderHub();
      checkAchievements();
    };
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); go(); } });
    row.appendChild(input);
    row.appendChild(btn('Enter', go, { cls: 'primary' }));
    wrap.appendChild(row);
    wrap.appendChild(msg);
    return wrap;
  }
  function codeModal() {
    const wrap = el('div', 'settings');
    wrap.appendChild(codeBox());
    openModal('Enter a Code', wrap);
  }

  /* ------------------------------------------------------------------ save codes */
  function encodeSave(state) {
    const json = JSON.stringify({ v: 1, game: 'hgf', when: Date.now(), state: state });
    return 'HGF1:' + btoa(unescape(encodeURIComponent(json)));
  }
  function decodeSave(code) {
    code = String(code || '').trim();
    if (code.indexOf('HGF1:') === 0) code = code.slice(5);
    const data = JSON.parse(decodeURIComponent(escape(atob(code))));
    if (!data || data.game !== 'hgf' || !data.state || !data.state.chars) throw new Error('not a save code');
    return data.state;
  }
  function saveCodeModal() {
    const wrap = el('div', 'savecode');
    wrap.appendChild(el('p', 'muted', 'Copy a save code to keep a backup or move your game to another browser. Paste one below to load it.'));
    const ta = el('textarea', 'code');
    ta.rows = 5;
    ta.placeholder = 'HGF1:…';
    if (ui.s && !ui.run) ta.value = encodeSave(ui.s);
    wrap.appendChild(ta);
    const msg = el('p', 'small muted', '');
    const row = el('div', 'btns');
    if (ui.s && !ui.run) row.appendChild(btn('Copy my current game\'s code', function () {
      ta.value = encodeSave(ui.s); ta.select();
      const done = function () { msg.textContent = 'Copied.'; };
      if (navigator.clipboard) navigator.clipboard.writeText(ta.value).then(done, function () { document.execCommand('copy'); done(); });
      else { document.execCommand('copy'); done(); }
    }));
    row.appendChild(btn('Load from code', function () {
      try { const st = decodeSave(ta.value); loadState(st); } catch (e) { msg.textContent = 'That doesn\'t look like a valid save code.'; }
    }, { cls: 'primary' }));
    wrap.appendChild(row);
    wrap.appendChild(msg);
    openModal('Save Codes', wrap);
  }

  /* ------------------------------------------------------------------ achievements */
  const ACH_KEY = 'hgf_achievements';
  const STATS_KEY = 'hgf_lifetime';
  function lifetime() { try { return JSON.parse(store(STATS_KEY) || '{}') || {}; } catch (e) { return {}; } }
  function bumpLifetime(k, n) { const l = lifetime(); l[k] = (l[k] || 0) + (n || 1); store(STATS_KEY, JSON.stringify(l)); }
  function metEver() { return lifetime().met || {}; }
  function noteMet(s) {
    const l = lifetime(); l.met = l.met || {};
    let changed = false;
    FL.charOrder.forEach(function (id) { if (s.chars[id].stage > 0 && !l.met[id]) { l.met[id] = 1; changed = true; } });
    if (changed) store(STATS_KEY, JSON.stringify(l));
  }
  function endingsFor(id) { return FL.characters[id].endingIds.filter(function (e) { return unlockedEndings().indexOf(e) >= 0; }).length; }
  const ACHIEVEMENTS = [
    ['hello', 'Meet-Cute', 'Meet your first heroine.', function (s) { return s && FL.metChars(s).length >= 1; }],
    ['butterfly', 'Social Butterfly', 'Meet 15 heroines in one playthrough.', function (s) { return s && FL.metChars(s).length >= 15; }],
    ['everyone', 'Gotta Meet ’Em All', 'Meet every heroine in one playthrough.', function (s) { return s && FL.metChars(s).length === FL.charOrder.length; }],
    ['devoted', 'Heart Stolen', 'Win a heroine’s devotion.', function (s) { return s && FL.readyChars(s).length >= 1; }],
    ['five', 'It’s Complicated', 'Have five heroines devoted at once.', function (s) { return s && FL.readyChars(s).length >= 5; }],
    ['morning', 'The Morning After', 'Wake up next to someone.', function () { return memories().some(function (m) { return /\.morning$/.test(m); }); }],
    ['date', 'First Date', 'Go on a date.', function (s) { return s && FL.charOrder.some(function (id) { return s.chars[id].dates > 0; }); }],
    ['perfect', 'Perfect Date', 'Take someone to her favorite date spot.', function (s) { return s && FL.charOrder.some(function (id) { const c = FL.characters[id]; return c.dateFav && s.flags[id + '_date_' + c.dateFav]; }); }],
    ['dates10', 'Serial Romantic', 'Go on ten dates in one playthrough.', function (s) { return s && FL.charOrder.reduce(function (a, id) { return a + (s.chars[id].dates || 0); }, 0) >= 10; }],
    ['loved', 'Thoughtful', 'Give someone a gift she loves.', function () { return (lifetime().loved || 0) >= 1; }],
    ['fork', 'Forked', 'Give someone the fork.', function () { return (lifetime().fork || 0) >= 1; }],
    ['gifts50', 'Generous to a Fault', 'Give fifty gifts (across all playthroughs).', function () { return (lifetime().gifts || 0) >= 50; }],
    ['crossover', 'Small Town', 'Witness five run-ins between heroines in one playthrough.', function (s) { return s && Object.keys(FL.sceneCast || {}).filter(function (x) { return /^x_/.test(x) && s.seenEvents[x]; }).length >= 5; }],
    ['dance', 'Last Waltz', 'Dance with someone at the masquerade.', function (s) { return s && !!s.flags.danced_with; }],
    ['might', 'Unstoppable', 'Reach 10 Might.', function (s) { return s && s.stats.might >= 10; }],
    ['wits', 'Insufferable Genius', 'Reach 10 Wits.', function (s) { return s && s.stats.wits >= 10; }],
    ['charm', 'Devastatingly Charming', 'Reach 10 Charm.', function (s) { return s && s.stats.charm >= 10; }],
    ['rich', 'Moneybags', 'Hold 500 gold at once.', function (s) { return s && s.gold >= 500; }],
    ['hero', 'Hero of Clichéton', 'Stop Lord Baalgrim’s scheme.', function (s) { return s && !!s.flags.plot_baalgrim_beaten; }],
    ['ending', 'Happily Ever After', 'See a heroine’s ending.', function () { return unlockedEndings().some(function (e) { return FL.endings[e] && FL.endings[e].char; }); }],
    ['variant', 'Another Way', 'See two different endings with the same heroine.', function () { return FL.charOrder.some(function (id) { return endingsFor(id) >= 2; }); }],
    ['allof', 'Every Version of Her', 'See every ending for one heroine.', function () { return FL.charOrder.some(function (id) { return endingsFor(id) === FL.characters[id].endingIds.length; }); }],
    ['end10', 'Hopeless Romantic', 'Discover 10 endings.', function () { return unlockedEndings().length >= 10; }],
    ['end40', 'Serial Monogamist', 'Discover 40 endings.', function () { return unlockedEndings().length >= 40; }],
    ['endall', 'Completionist', 'Discover every ending.', function () { return unlockedEndings().length >= FL.endingOrder.length; }],
    ['harem', 'The Many-Hearted', 'Ask them all.', function () { return unlockedEndings().indexOf('harem') >= 0; }],
    ['alone', 'Mrrp', 'Watch the stars with a cat.', function () { return unlockedEndings().indexOf('alone') >= 0; }],
    ['greenhouse', 'Green Thumb', 'Find out what’s in the greenhouse.', function () { return unlockedEndings().indexOf('greenhouse') >= 0; }],
    ['ngplus', 'Once More, With Feeling', 'Start a New Game+.', function (s) { return s && s.ngplus > 0; }],
    ['true', 'Unabridged', 'Give the Narrator an ending of her own.', function () { return unlockedEndings().indexOf('true_end') >= 0; }],
    ['memory', 'Memory Lane', 'Replay a memory.', function () { return (lifetime().replays || 0) >= 1; }],
    ['cheat', 'Main Character Energy', 'Find the secret code.', function (s) { return s && !!s.flags.cheat_used; }],
  ];
  function gotAchievements() { try { return JSON.parse(store(ACH_KEY) || '{}') || {}; } catch (e) { return {}; } }
  function checkAchievements() {
    if (ui.replay) return;
    const s = ui.s;
    if (s) noteMet(s);
    const got = gotAchievements();
    const fresh = [];
    ACHIEVEMENTS.forEach(function (a) {
      if (got[a[0]]) return;
      let ok = false;
      try { ok = a[3](s); } catch (e) { ok = false; }
      if (ok) { got[a[0]] = Date.now(); fresh.push(a); }
    });
    if (!fresh.length) return;
    store(ACH_KEY, JSON.stringify(got));
    fresh.forEach(function (a, i) { setTimeout(function () { toast('🏆 ' + a[1], a[2]); }, i * 700); });
  }
  function toast(title, body) {
    let host = $('#toasts');
    if (!host) { host = el('div', null); host.id = 'toasts'; host.setAttribute('role', 'status'); host.setAttribute('aria-live', 'polite'); document.body.appendChild(host); }
    const t = el('div', 'toast', '<b>' + esc(title) + '</b><div class="small">' + esc(body) + '</div>');
    host.appendChild(t);
    while (host.children.length > 3) host.removeChild(host.firstChild);
    setTimeout(function () { t.classList.add('out'); }, 3600);
    setTimeout(function () { t.remove(); }, 4200);
  }
  function achievementsModal() {
    const got = gotAchievements();
    const n = ACHIEVEMENTS.filter(function (a) { return got[a[0]]; }).length;
    let html = '<p class="muted">' + n + ' / ' + ACHIEVEMENTS.length + ' unlocked.</p><div class="ach-list">';
    ACHIEVEMENTS.forEach(function (a) {
      const have = !!got[a[0]];
      html += '<div class="ach' + (have ? ' got' : '') + '"><span class="ach-icon">' + (have ? '🏆' : '🔒') + '</span><div><b>' + esc(a[1]) +
        '</b><div class="small muted">' + esc(a[2]) + '</div></div></div>';
    });
    openModal('Achievements', html + '</div>');
  }

  /* ------------------------------------------------------------------ heroine gallery */
  function heroinesModal(focus) {
    const met = metEver();
    const wrap = el('div', 'heroines');
    if (focus) {
      const c = FL.characters[focus];
      const d = el('div', 'h-detail');
      d.style.setProperty('--c', c.color);
      const pic = el('div', 'h-big avatar pic', FL.portrait(focus, 'neutral'));
      d.appendChild(pic);
      const info = el('div', 'h-info', '<h3 style="color:' + c.color + '">' + esc(c.name) + '</h3><div class="trope">' + esc(c.trope) + '</div>' +
        '<p class="small">' + rich(c.blurb) + '</p><div class="small"><b>Values:</b> ' + FL.STAT_NAMES[c.favStat] +
        ' · <b>Endings found:</b> ' + endingsFor(focus) + ' / ' + c.endingIds.length + '</div>');
      const moods = el('div', 'btns');
      FL.MOODS.forEach(function (m) {
        const b = btn(m.charAt(0).toUpperCase() + m.slice(1), function () {
          pic.innerHTML = FL.portrait(focus, m);
          moods.querySelectorAll('.btn').forEach(function (x) { x.classList.remove('here'); });
          b.classList.add('here');
        }, { cls: m === 'neutral' ? 'here' : '' });
        moods.appendChild(b);
      });
      info.appendChild(moods);
      if (FL.music && FL.music.songs['love_' + focus]) {
        info.appendChild(btn('🎵 Play her theme', function () {
          if (!musicOn()) toggleMusic();
          music('love_' + focus);
        }));
      }
      d.appendChild(info);
      wrap.appendChild(d);
      wrap.appendChild(btn('‹ All heroines', function () { heroinesModal(); }));
      openModal('Heroines', wrap);
      return;
    }
    wrap.appendChild(el('p', 'muted', Object.keys(met).length + ' / ' + FL.charOrder.length + ' heroines met. Tap a portrait for a closer look.'));
    const grid = el('div', 'h-grid');
    FL.charOrder.forEach(function (id) {
      const c = FL.characters[id];
      const known = !!met[id];
      const cell = el('button', 'h-cell', (known ? avatar(id, true) : '<span class="avatar big">?</span>') +
        '<span class="h-name">' + (known ? esc(c.short) : '???') + '</span>');
      cell.style.setProperty('--c', c.color);
      cell.disabled = !known;
      cell.addEventListener('click', function () { heroinesModal(id); });
      grid.appendChild(cell);
    });
    wrap.appendChild(grid);
    openModal('Heroines', wrap);
  }

  /* ------------------------------------------------------------------ boot */
  function boot() {
    $('#btn-journal').addEventListener('click', function () { if (ui.s) journalModal(); });
    $('#btn-people').addEventListener('click', function () { if (ui.s && !ui.run) peopleModal(); });
    $('#btn-inv').addEventListener('click', function () { if (ui.s) inventoryModal(); });
    $('#btn-save').addEventListener('click', function () { if (ui.s && !ui.run) saveModal(true); });
    $('#btn-music').addEventListener('click', toggleMusic);
    // Browsers only allow sound after the first interaction.
    document.addEventListener('pointerdown', function first() {
      document.removeEventListener('pointerdown', first);
      if (musicOn() && FL.music) FL.music.start();
    });
    $('#btn-menu').addEventListener('click', function () {
      if (!ui.s) return;
      const wrap = el('div', 'btns col');
      wrap.appendChild(btn('How to Play', helpModal));
      wrap.appendChild(btn('Endings Gallery', galleryModal));
      wrap.appendChild(btn('Memories', memoriesModal));
      wrap.appendChild(btn('Heroines', function () { heroinesModal(); }));
      wrap.appendChild(btn('Achievements', achievementsModal));
      wrap.appendChild(btn('Settings', settingsModal));
      wrap.appendChild(btn('Enter a code', codeModal));
      wrap.appendChild(btn('Save Codes (backup / transfer)', saveCodeModal, { disabled: !!ui.run }));
      wrap.appendChild(btn('Quit to Title (unsaved progress since the last autosave is lost)', function () { closeModal(); titleScreen(); }));
      openModal('Menu', wrap);
    });
    $('#modal').addEventListener('click', function (e) { if (e.target.id === 'modal') closeModal(); });
    document.addEventListener('keydown', function (e) {
      trapFocus(e);
      if (e.key === 'Escape') { closeModal(); return; }
      if (!ui.run || !$('#modal').hidden) return;
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= 9) {
        const b = document.querySelector('.choices button[data-idx="' + n + '"]');
        if (b && !b.disabled) b.click();
      }
    });
    applySettings();
    updateMusicButtons();
    ageGate(titleScreen);
  }

  FL.ui = ui;
  document.addEventListener('DOMContentLoaded', boot);
})();
