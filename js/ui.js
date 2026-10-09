/* Browser UI for Hearts of Generic FantasyLandia. */
(function () {
  'use strict';
  const FL = window.FL;
  const $ = function (sel) { return document.querySelector(sel); };

  const SAVE_PREFIX = 'hgf_save_';
  const ENDINGS_KEY = 'hgf_endings';
  const AGE_KEY = 'hgf_age_ok';

  const ui = {
    s: null,         // game state
    run: null,       // active scene run
    sel: null,       // selected character on hub
    log: [],         // feedback lines shown on hub
    lastChoice: null,
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
    const m = /^@(\w+)\s+([\s\S]*)$/.exec(line);
    if (m) {
      const sp = FL.speakerInfo(s, m[1]);
      return '<p class="dlg"><span class="spk" style="color:' + sp.color + '">' + esc(sp.name) +
        '</span><span class="say">“' + rich(m[2]) + '”</span></p>';
    }
    return '<p>' + rich(line) + '</p>';
  }
  function heartBar(aff) {
    const h = FL.hearts(aff);
    let out = '';
    for (let i = 1; i <= 5; i++) {
      if (h >= i) out += '<span class="h full">♥</span>';
      else if (h >= i - 0.5) out += '<span class="h half">♥</span>';
      else out += '<span class="h empty">♡</span>';
    }
    return '<span class="hearts" title="' + aff + '/100">' + out + '</span>';
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
    if (!s) { hud.hidden = true; return; }
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
  }

  /* ------------------------------------------------------------------ screens */
  function setMain(node) {
    const main = $('#main');
    main.innerHTML = '';
    main.appendChild(node);
    main.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  function titleScreen() {
    ui.s = null; ui.run = null;
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
    menu.appendChild(btn('How to Play', helpModal));
    box.appendChild(menu);
    box.appendChild(el('p', 'fine', FL.charOrder.length + ' romanceable heroines · ' + FL.endingOrder.length +
      ' endings · 30 days until Starfall'));
    setMain(box);
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
      const opts = { name: name, title: $('#ng-title').value, stats: {}, gold: 0 };
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

    const head = el('div', 'loc-head');
    head.innerHTML = '<div class="loc-icon">' + loc.icon + '</div><div><h2>' + esc(loc.name) + '</h2>' +
      '<div class="muted">' + FL.timeName(s) + ', Day ' + s.day + '</div></div>';
    box.appendChild(head);
    box.appendChild(el('p', 'loc-desc', rich(loc.desc[s.slot] || loc.desc[0])));

    if (ui.log.length) {
      const log = el('div', 'log');
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
        function () { s.loc = id; ui.sel = null; ui.log = []; renderHub(); },
        { disabled: !open || id === s.loc, cls: id === s.loc ? 'here' : '' });
      grid.appendChild(b);
    });
    tr.appendChild(grid);
    box.appendChild(tr);

    setMain(box);
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
    card.innerHTML = '<div class="card-head"><div class="avatar">' + esc(c.short.charAt(0)) + '</div><div><b>' + esc(c.name) +
      '</b> <span class="trope">' + esc(c.trope) + '</span><div>' + heartBar(st.aff) +
      ' <span class="muted">' + FL.STAGE_NAMES[st.stage] + '</span>' +
      (rs.ok ? ' <span class="ready">★ Romance ready</span>' : '') +
      (rs.done ? ' <span class="ready">♥ Devoted</span>' : '') + '</div></div></div>';
    const row = el('div', 'btns');
    row.appendChild(btn('Talk <span class="tick">⏳</span>', function () {
      const res = FL.talk(s, id);
      ui.log = res.lines.slice();
      if (res.gain) ui.log.push('<p class="sys">' + noteHtml({ type: 'aff', char: id, n: res.gain }) + '</p>');
      else ui.log.push('<p class="sys muted">(' + c.short + ' seems to be waiting for something more before you can get any closer.)</p>');
      afterAction();
    }, { disabled: !FL.canTalk(s, id), title: FL.canTalk(s, id) ? '' : 'Already talked today' }));
    row.appendChild(btn('Give gift', function () { giftModal(id); }, {
      disabled: !FL.canGift(s, id) || !Object.keys(s.inv).length,
      title: !FL.canGift(s, id) ? 'Already received a gift today' : '',
    }));
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

  /* ------------------------------------------------------------------ scenes */
  function renderScene() {
    const s = ui.s;
    const run = ui.run;
    renderHud();
    const node = FL.currentNode(run);
    const box = el('div', 'scene');
    if (run.char) {
      const c = FL.characters[run.char];
      const label = { intro: 'First Meeting', s1: 'Romance Scene I', s2: 'Romance Scene II', s3: 'Romance Scene III', ending: 'Ending' }[run.id] || '';
      const head = el('div', 'scene-head');
      head.style.setProperty('--c', c.color);
      head.innerHTML = '<span class="avatar">' + esc(c.short.charAt(0)) + '</span><div><b>' + esc(c.name) + '</b> · <span class="trope">' +
        esc(c.trope) + '</span><div class="muted">' + label + '</div></div>';
      box.appendChild(head);
    }
    if (ui.lastChoice) box.appendChild(el('p', 'chosen', '› ' + rich(FL.fmt(s, ui.lastChoice))));
    if (run.lastCheck) {
      const lc = run.lastCheck;
      box.appendChild(el('p', 'check ' + (lc.pass ? 'pass' : 'fail'),
        FL.STAT_NAMES[lc.stat] + ' check: ' + lc.val + ' vs ' + lc.dc + ' — ' + (lc.pass ? 'Success!' : 'Failed.')));
    }
    const text = el('div', 'text');
    text.innerHTML = FL.nodeText(s, run, node).map(function (p) { return para(s, p); }).join('');
    box.appendChild(text);
    if (run.notes && run.notes.length) {
      box.appendChild(el('div', 'notes', run.notes.map(noteHtml).join(' ')));
    }

    if (run.ending) {
      unlockEnding(run.ending);
      store(SAVE_PREFIX + 'auto', null);
      const e = FL.endings[run.ending];
      const end = el('div', 'ending-card');
      end.style.setProperty('--c', e.color);
      end.innerHTML = '<div class="ending-label">ENDING UNLOCKED</div><h2>' + esc(e.title) + '</h2><div class="muted">' + esc(e.who) +
        '</div><p class="muted">' + unlockedEndings().length + ' / ' + FL.endingOrder.length + ' endings discovered</p>';
      const row = el('div', 'btns center');
      row.appendChild(btn('New Game+ (keep stats & gold)', function () { newGameScreen(true); }, { cls: 'primary' }));
      row.appendChild(btn('Title Screen', titleScreen));
      row.appendChild(btn('Endings Gallery', galleryModal));
      end.appendChild(row);
      box.appendChild(end);
      ui.run = null;
      setMain(box);
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
  }

  function pick(ch) {
    const s = ui.s;
    const run = ui.run;
    ui.lastChoice = ch.text === 'Continue' || /^Begin/.test(ch.text) ? null : ch.text;
    const r = FL.choose(s, run, ch);
    if (r === 'blocked') return;
    if (r === 'end') {
      FL.finishScene(s, run);
      const wasChar = run.char;
      const kind = run.kind;
      ui.run = null;
      if (kind === 'romance') {
        FL.advance(s);
        const st = s.chars[wasChar];
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
  function openModal(title, body) {
    const m = $('#modal');
    m.innerHTML = '';
    const box = el('div', 'modal-box');
    const head = el('div', 'modal-head', '<h2>' + title + '</h2>');
    head.appendChild(btn('✕', closeModal, { cls: 'close' }));
    box.appendChild(head);
    const inner = el('div', 'modal-body');
    if (typeof body === 'string') inner.innerHTML = body; else inner.appendChild(body);
    box.appendChild(inner);
    m.appendChild(box);
    m.hidden = false;
  }
  function closeModal() {
    $('#modal').hidden = true;
    $('#modal').innerHTML = '';
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
        ui.sel = id;
        ui.log = res.lines.slice();
        const tag = { love: 'She loves it!', like: 'She likes it.', neutral: 'She\'s indifferent.', hate: 'She hates it!' }[res.reaction];
        ui.log.push('<p class="sys">' + tag + ' ' + (res.gain ? noteHtml({ type: 'aff', char: id, n: res.gain }) :
          '<span class="muted">(no change)</span>') + '</p>');
        renderHub();
      }, { cls: 'wide' }));
    });
    openModal('Give a gift to ' + esc(c.short), wrap);
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

  function journalModal() {
    const s = ui.s;
    const met = FL.metChars(s);
    let html = '<p class="muted">Hearts discovered: ' + met.length + ' / ' + FL.charOrder.length +
      ' · Devoted: ' + FL.readyChars(s).length + '</p>';
    if (!met.length) html += '<p>You haven\'t met anyone yet. Explore the town — strangers are waiting.</p>';
    met.forEach(function (id) {
      const c = FL.characters[id];
      const st = s.chars[id];
      const rs = FL.romanceStatus(s, id);
      const known = Object.keys(s.known[id]).map(function (it) {
        return '<span class="k k-' + s.known[id][it] + '">' + esc(FL.items[it].name) + '</span>';
      }).join(' ');
      html += '<div class="j-entry" style="--c:' + c.color + '"><div class="j-head"><b>' + esc(c.name) + '</b> <span class="trope">' + esc(c.trope) +
        '</span></div><div>' + heartBar(st.aff) + ' <span class="muted">' + st.aff + '/100 · ' + FL.STAGE_NAMES[st.stage] +
        ' · Scenes ' + Math.max(0, st.stage - 1) + '/3</span></div>' +
        '<p class="small">' + rich(c.blurb) + '</p>' +
        '<div class="small"><b>Values:</b> ' + FL.STAT_NAMES[c.favStat] + '</div>' +
        '<div class="small"><b>Found:</b> ' + esc(FL.scheduleSummary(id).join(' · ')) + '</div>' +
        '<div class="small"><b>Gift notes:</b> ' + (known || '<span class="muted">none yet</span>') + '</div>' +
        '<div class="small"><b>Next:</b> ' + (rs.done ? 'Devoted — meet her at the Starfall Festival.' : rs.ok ? '★ Romance scene ready!' :
          esc((rs.needs || []).join(', '))) + '</div></div>';
    });
    openModal('Journal', html);
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
    openModal(canSave ? 'Save / Load' : 'Load Game', wrap);
  }

  function galleryModal() {
    const got = unlockedEndings();
    let html = '<p class="muted">' + got.length + ' / ' + FL.endingOrder.length + ' endings discovered.</p><div class="gallery">';
    FL.endingOrder.forEach(function (id) {
      const e = FL.endings[id];
      const have = got.indexOf(id) >= 0;
      html += '<div class="g-item' + (have ? ' got' : '') + '" style="--c:' + e.color + '"><b>' + (have ? esc(e.title) : '???') +
        '</b><div class="muted small">' + esc(e.who) + '</div></div>';
    });
    html += '</div>';
    openModal('Endings Gallery', html);
  }

  function helpModal() {
    openModal('How to Play', [
      '<p>You have <b>30 days</b> until the Starfall Festival. Each day has a <b>Morning</b>, <b>Afternoon</b> and <b>Evening</b>.</p>',
      '<p><b>Actions marked ⏳ take up one part of the day:</b> meeting someone, talking, romance scenes, working and training. Travel, shopping and giving gifts are free (one gift per person per day).</p>',
      '<p><b>Affection (♥)</b> grows when you talk, give gifts, and make choices in scenes. Each heroine has three romance scenes. They unlock at ♥25, ♥50 and ♥75. The second and third also need her favorite stat (Might, Wits or Charm) at 2 and 3. You can only share one romance scene with each heroine per day.</p>',
      '<p>Talking and gifts can only take a relationship so far. To grow closer, you have to see the next romance scene.</p>',
      '<p><b>Stats:</b> Train <b>Might</b> at the Arena, <b>Wits</b> at the Library and <b>Charm</b> at the Tavern, Temple or Noble Quarter. Stats also open up special options in scenes.</p>',
      '<p><b>Gold:</b> Take quests at the Guild, work shifts, unload cargo. Buy gifts on Market Street. Everyone has a gift they love — and one they hate. Giving the same gift again and again gets less effective, so mix it up.</p>',
      '<p>See all three romance scenes with a heroine to make her <b>Devoted</b>. At the Starfall Festival on Day 30, choose who to watch the stars with to see her ending. Win over five or more and you can try for... a different kind of ending.</p>',
      '<p>Some heroines only appear after certain events, or only at night. Check the Journal (📖) to see where everyone can be found.</p>',
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

  /* ------------------------------------------------------------------ boot */
  function boot() {
    $('#btn-journal').addEventListener('click', function () { if (ui.s) journalModal(); });
    $('#btn-inv').addEventListener('click', function () { if (ui.s) inventoryModal(); });
    $('#btn-save').addEventListener('click', function () { if (ui.s && !ui.run) saveModal(true); });
    $('#btn-menu').addEventListener('click', function () {
      if (!ui.s) return;
      const wrap = el('div', 'btns col');
      wrap.appendChild(btn('How to Play', helpModal));
      wrap.appendChild(btn('Endings Gallery', galleryModal));
      wrap.appendChild(btn('Quit to Title (unsaved progress since the last autosave is lost)', function () { closeModal(); titleScreen(); }));
      openModal('Menu', wrap);
    });
    $('#modal').addEventListener('click', function (e) { if (e.target.id === 'modal') closeModal(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeModal(); return; }
      if (!ui.run || !$('#modal').hidden) return;
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= 9) {
        const b = document.querySelector('.choices button[data-idx="' + n + '"]');
        if (b && !b.disabled) b.click();
      }
    });
    ageGate(titleScreen);
  }

  FL.ui = ui;
  document.addEventListener('DOMContentLoaded', boot);
})();
