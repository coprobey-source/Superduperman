/*
 * Hearts of Generic FantasyLandia — core game logic.
 * Pure state + rules. No DOM access here, so tools/validate.js can run it in Node.
 */
(function (root) {
  'use strict';

  const FL = (root.FL = root.FL || {});

  FL.characters = {};
  FL.charOrder = [];
  FL.locations = {};
  FL.locOrder = [];
  FL.items = {};
  FL.itemOrder = [];
  FL.events = [];
  FL.scenes = {};
  FL.endings = {};
  FL.endingOrder = [];

  FL.CONFIG = {
    maxDay: 30,
    slots: ['Morning', 'Afternoon', 'Evening'],
    // affection needed to unlock the scene for the current stage (stage 1 -> s1, ...)
    affNeeded: [0, 30, 60, 90],
    // days that must pass after a romance scene before the next one (indexed by the next scene's stage)
    sceneGap: [0, 2, 3, 3],
    // favourite-stat needed to unlock the scene for the current stage
    statNeeded: [0, 0, 2, 3],
    // talk/gift affection can't push past this cap until the next scene is seen
    affCap: [0, 40, 70, 95, 100],
    talkAff: 5,
    giftAff: { love: 12, like: 6, neutral: 2, hate: -10 },
    haremMin: 5,
    startGold: 60,
  };

  FL.STATS = ['might', 'wits', 'charm'];
  FL.STAT_NAMES = { might: 'Might', wits: 'Wits', charm: 'Charm' };
  FL.STAGE_NAMES = ['Stranger', 'Acquaintance', 'Friend', 'Close', 'Devoted'];
  FL.SCENE_FOR_STAGE = ['intro', 's1', 's2', 's3'];

  /* ------------------------------------------------------------------ registry */

  FL.addCharacter = function (c) {
    if (FL.characters[c.id]) throw new Error('Duplicate character ' + c.id);
    c.talk = c.talk || [];
    c.giftLines = c.giftLines || {};
    c.gifts = c.gifts || {};
    c.afterTalk = c.afterTalk || [];
    c.dates = c.dates || {};
    c.endings = c.endings || {};
    FL.characters[c.id] = c;
    FL.charOrder.push(c.id);
    if (c.scenes.morning) {
      // The morning after the third romance scene, the heroine gets a scene of her own.
      FL.addEvent({
        id: 'morning_' + c.id,
        slot: 0,
        priority: 20,
        ref: { char: c.id, id: 'morning' },
        cond: function (s) {
          const due = s.flags['morningDue_' + c.id];
          return due != null && s.day > due;
        },
      });
    }
    FL.addEnding(c.id, c.endingTitle || c.short + "'s Ending", c.short, c.color, c.id);
    // Extra ending variants: { fenna_wild: 'Title', ... }
    c.endingIds = [c.id];
    Object.keys(c.endings).forEach(function (eid) {
      FL.addEnding(eid, c.endings[eid], c.short, c.color, c.id);
      c.endingIds.push(eid);
    });
  };

  FL.addEnding = function (id, title, who, color, char) {
    if (FL.endings[id]) return;
    FL.endings[id] = { id, title, who: who || '', color: color || '#d4af37', char: char || null };
    FL.endingOrder.push(id);
  };

  FL.addLocation = function (l) {
    FL.locations[l.id] = l;
    FL.locOrder.push(l.id);
  };

  FL.addItem = function (it) {
    FL.items[it.id] = it;
    FL.itemOrder.push(it.id);
  };

  FL.addEvent = function (ev) {
    FL.events.push(ev);
  };

  FL.addScene = function (id, scene) {
    FL.scenes[id] = scene;
  };

  // Non-romanceable speakers that can appear in dialogue lines ("@narrator ...").
  FL.speakers = {};
  FL.addSpeaker = function (id, name, color) {
    FL.speakers[id] = { name: name, color: color || '#bbb' };
  };

  FL.speakerInfo = function (s, id) {
    if (id === 'you') return { name: s.name, color: '#9fd3ff' };
    const c = FL.characters[id];
    if (c) return { name: c.short, color: c.color };
    return FL.speakers[id] || { name: id, color: '#bbb' };
  };

  // Portrait expressions a dialogue line can request: "@fenna:happy Text".
  FL.MOODS = ['neutral', 'happy', 'blush', 'angry', 'sad', 'smug', 'surprised'];
  const LINE_RE = /^@(\w+)(?::(\w+))?\s+([\s\S]*)$/;
  FL.parseLine = function (line) {
    const m = LINE_RE.exec(line);
    if (!m) return { text: line };
    return { speaker: m[1], mood: m[2] || null, text: m[3] };
  };

  /* ------------------------------------------------------------------ conditions */
  // A condition is: 'flag' | '!flag' | [cond, ...] (all) | { any: [cond, ...] } |
  // a req object (might/wits/charm/gold/item/flag/noflag/test) plus
  // { stage: n } (scene owner's stage >= n), { ngplus: n }, { seenEnding: id }, { met: id }, { devoted: id }.
  FL.cond = function (s, c, run) {
    if (c == null) return true;
    if (typeof c === 'string') return c.charAt(0) === '!' ? !s.flags[c.slice(1)] : !!s.flags[c];
    if (typeof c === 'function') return !!c(s, run);
    if (Array.isArray(c)) return c.every(function (x) { return FL.cond(s, x, run); });
    if (c.any) return c.any.some(function (x) { return FL.cond(s, x, run); });
    if (c.stage != null) {
      const who = c.who || (run && run.char);
      if (!who || !s.chars[who] || s.chars[who].stage < c.stage) return false;
    }
    if (c.ngplus != null && (s.ngplus || 0) < c.ngplus) return false;
    if (c.seenEnding && !((s.meta && s.meta.endings) || []).includes(c.seenEnding)) return false;
    if (c.met && !(s.chars[c.met] && s.chars[c.met].stage > 0)) return false;
    if (c.devoted && !(s.chars[c.devoted] && s.chars[c.devoted].stage >= 4)) return false;
    return FL.reqMet(s, c, run);
  };

  /* ------------------------------------------------------------------ state */

  FL.newState = function (opts) {
    opts = opts || {};
    const s = {
      v: 1,
      name: opts.name || 'Traveler',
      title: opts.title || 'Mx',
      day: 1,
      slot: 0,
      gold: FL.CONFIG.startGold,
      stats: { might: 0, wits: 0, charm: 0 },
      inv: {},
      flags: {},
      loc: 'square',
      chars: {},
      known: {},
      seenEvents: {},
      daily: { talk: {}, gift: {}, scene: {}, date: {} },
      giftLog: {},
      ngplus: opts.ngplus || 0,
      // what this player has seen in earlier playthroughs (for New Game+ callbacks)
      meta: { endings: (opts.meta && opts.meta.endings) || [] },
      over: false,
    };
    FL.charOrder.forEach(function (id) {
      s.chars[id] = FL.freshChar();
      s.known[id] = {};
    });
    if (opts.stats) FL.STATS.forEach(function (k) { s.stats[k] += opts.stats[k] || 0; });
    if (opts.gold) s.gold += opts.gold;
    return s;
  };

  FL.freshChar = function () {
    return { aff: 0, stage: 0, talks: 0, afterTalks: 0, seenTalk: [], seenAfter: [], dates: 0, lastScene: null };
  };

  // Bring an older/partial save up to date with the current roster.
  FL.normalizeState = function (s) {
    FL.charOrder.forEach(function (id) {
      if (!s.chars[id]) s.chars[id] = FL.freshChar();
      const st = s.chars[id];
      if (st.afterTalks == null) st.afterTalks = 0;
      if (!st.seenTalk) st.seenTalk = [];
      if (!st.seenAfter) st.seenAfter = [];
      if (st.dates == null) st.dates = 0;
      if (st.lastScene === undefined) st.lastScene = null;
      if (!s.known[id]) s.known[id] = {};
    });
    s.daily = s.daily || { talk: {}, gift: {}, scene: {}, date: {} };
    s.daily.scene = s.daily.scene || {};
    s.daily.date = s.daily.date || {};
    s.meta = s.meta || { endings: [] };
    s.giftLog = s.giftLog || {};
    s.flags = s.flags || {};
    s.seenEvents = s.seenEvents || {};
    return s;
  };

  FL.fmt = function (s, str) {
    return String(str)
      .replace(/\{name\}/g, s.name)
      .replace(/\{title\}/g, s.title);
  };

  FL.timeName = function (s) {
    return FL.CONFIG.slots[s.slot];
  };

  /* ------------------------------------------------------------------ world queries */

  FL.locOpen = function (s, id) {
    const l = FL.locations[id];
    if (!l) return false;
    if (l.unlock && !l.unlock(s)) return false;
    if (l.open && l.open.indexOf(s.slot) < 0) return false;
    return true;
  };

  FL.charUnlocked = function (s, id) {
    const c = FL.characters[id];
    return !c.unlock || c.unlock(s);
  };

  FL.charLocationAt = function (s, id, slot, day) {
    const c = FL.characters[id];
    let where = c.schedule[slot];
    if (Array.isArray(where)) where = where[day % where.length];
    return where || null;
  };

  FL.charLocation = function (s, id) {
    if (!FL.charUnlocked(s, id)) return null;
    return FL.charLocationAt(s, id, s.slot, s.day);
  };

  FL.charsAt = function (s, loc) {
    return FL.charOrder.filter(function (id) {
      return FL.charLocation(s, id) === loc;
    });
  };

  // Human readable "where to find" list for the journal.
  FL.scheduleSummary = function (id) {
    const c = FL.characters[id];
    const out = [];
    c.schedule.forEach(function (w, slot) {
      const list = Array.isArray(w) ? w : [w];
      const names = [];
      list.forEach(function (x) {
        if (x && names.indexOf(FL.locations[x].name) < 0) names.push(FL.locations[x].name);
      });
      if (names.length) out.push(FL.CONFIG.slots[slot] + ': ' + names.join(' / '));
    });
    return out;
  };

  /* ------------------------------------------------------------------ affection & romance */

  FL.addAff = function (s, id, n, uncapped) {
    const st = s.chars[id];
    if (!st) return 0;
    const cap = uncapped ? 100 : FL.CONFIG.affCap[st.stage];
    const before = st.aff;
    let next = st.aff + n;
    if (n > 0 && !uncapped) next = Math.min(next, Math.max(cap, st.aff));
    next = Math.max(0, Math.min(100, next));
    st.aff = next;
    return next - before;
  };

  FL.hearts = function (aff) {
    return Math.round(aff / 20 * 2) / 2; // 0..5 in half steps
  };

  // What romance scene is next for this character, and can we play it?
  FL.romanceStatus = function (s, id) {
    const c = FL.characters[id];
    const st = s.chars[id];
    if (st.stage === 0) return { scene: 'intro', ok: true };
    if (st.stage >= 4) return { scene: null, ok: false, done: true };
    const scene = FL.SCENE_FOR_STAGE[st.stage];
    const needAff = FL.CONFIG.affNeeded[st.stage];
    const needStat = FL.CONFIG.statNeeded[st.stage];
    const reasons = [];
    if (s.daily.scene && s.daily.scene[id]) reasons.push('a new day (one scene per day)');
    else if (st.lastScene != null && s.day < st.lastScene + FL.CONFIG.sceneGap[st.stage]) {
      reasons.push('time (she\'ll be ready on day ' + (st.lastScene + FL.CONFIG.sceneGap[st.stage]) + ')');
    }
    if (st.aff < needAff) reasons.push('♥ ' + needAff + ' affection');
    if (needStat && s.stats[c.favStat] < needStat) reasons.push(FL.STAT_NAMES[c.favStat] + ' ' + needStat);
    const extra = c.sceneReq && c.sceneReq[scene];
    if (extra && !extra.test(s)) reasons.push(extra.hint);
    return { scene: scene, ok: reasons.length === 0, needs: reasons };
  };

  FL.isReady = function (s, id) {
    return s.chars[id].stage >= 4;
  };

  FL.readyChars = function (s) {
    return FL.charOrder.filter(function (id) { return FL.isReady(s, id); });
  };

  FL.metChars = function (s) {
    return FL.charOrder.filter(function (id) { return s.chars[id].stage > 0; });
  };

  /* ------------------------------------------------------------------ actions */

  FL.advance = function (s) {
    s.slot += 1;
    if (s.slot > 2) {
      s.slot = 0;
      s.day += 1;
      s.daily = { talk: {}, gift: {}, scene: {}, date: {} };
      // Locations that are closed now kick you back to the square.
    }
    if (!FL.locOpen(s, s.loc)) s.loc = 'square';
  };

  FL.canTalk = function (s, id) {
    return s.chars[id].stage > 0 && !s.daily.talk[id];
  };

  // Talk entries are either a list of lines or { if: cond, lines: [...] }.
  // Unheard lines whose condition holds come first (conditional ones before plain ones,
  // so callbacks surface as soon as they're earned), then everything eligible repeats.
  function entryLines(e) { return Array.isArray(e) ? e : e.lines; }
  FL.pickTalk = function (s, id, list, seen) {
    const run = { char: id };
    const ok = [];
    list.forEach(function (e, i) { if (Array.isArray(e) || FL.cond(s, e.if, run)) ok.push(i); });
    if (!ok.length) return null;
    const fresh = ok.filter(function (i) { return seen.indexOf(i) < 0; });
    let pick;
    if (fresh.length) {
      const cond = fresh.filter(function (i) { return !Array.isArray(list[i]); });
      pick = cond.length ? cond[0] : fresh[0];
      seen.push(pick);
    } else {
      // everything heard: cycle, but avoid repeating the most recent line
      const last = seen[seen.length - 1];
      const pool = ok.length > 1 ? ok.filter(function (i) { return i !== last; }) : ok;
      pick = pool[(s.day * 7 + s.slot) % pool.length];
      seen.splice(seen.indexOf(pick), 1);
      seen.push(pick);
    }
    return { index: pick, lines: entryLines(list[pick]) };
  };

  FL.talk = function (s, id) {
    const c = FL.characters[id];
    const st = s.chars[id];
    let lines = null;
    if (st.stage >= 4 && c.afterTalk.length) {
      // Once devoted, she talks about what you've shared.
      const p = FL.pickTalk(s, id, c.afterTalk, st.seenAfter);
      if (p) { lines = p.lines; st.afterTalks += 1; }
    }
    if (!lines) {
      const p = FL.pickTalk(s, id, c.talk, st.seenTalk);
      lines = p ? p.lines : ['@' + id + ' ...'];
      st.talks += 1;
    }
    // lines inside an entry can be conditional too ({ if, text, else })
    lines = FL.flattenText(s, { char: id }, lines);
    s.daily.talk[id] = true;
    let gain = FL.CONFIG.talkAff;
    if (s.stats.charm >= 3) gain += 1;
    if (s.stats.charm >= 6) gain += 1;
    const got = FL.addAff(s, id, gain);
    FL.advance(s);
    return { lines: lines, gain: got };
  };

  FL.giftReaction = function (id, itemId) {
    const g = FL.characters[id].gifts;
    if (g.love && g.love.indexOf(itemId) >= 0) return 'love';
    if (g.like && g.like.indexOf(itemId) >= 0) return 'like';
    if (g.hate && g.hate.indexOf(itemId) >= 0) return 'hate';
    return 'neutral';
  };

  // Giving the same thing over and over loses its charm: each repeat drops one tier.
  const TIERS = ['love', 'like', 'neutral'];
  FL.giftEffect = function (s, id, itemId) {
    const base = FL.giftReaction(id, itemId);
    if (base === 'hate') return { reaction: base, tier: base, repeat: 0 };
    const n = (s.giftLog && s.giftLog[id] && s.giftLog[id][itemId]) || 0;
    const idx = Math.min(TIERS.length - 1, TIERS.indexOf(base) + n);
    return { reaction: base, tier: TIERS[idx], repeat: n };
  };

  FL.canGift = function (s, id) {
    return s.chars[id].stage > 0 && !s.daily.gift[id];
  };

  const GENERIC_GIFT = {
    love: '@{id} Oh! This is... this is perfect. How did you know?',
    like: '@{id} For me? That\'s very sweet of you. Thank you.',
    neutral: '@{id} Ah. A... gift. Thank you, I suppose.',
    hate: '@{id} ...Why would you give me this?',
  };

  FL.giveGift = function (s, id, itemId) {
    if (!s.inv[itemId]) return null;
    const c = FL.characters[id];
    const eff = FL.giftEffect(s, id, itemId);
    const r = eff.reaction;
    s.inv[itemId] -= 1;
    if (s.inv[itemId] <= 0) delete s.inv[itemId];
    s.known[id][itemId] = r;
    s.daily.gift[id] = true;
    s.giftLog[id] = s.giftLog[id] || {};
    s.giftLog[id][itemId] = (s.giftLog[id][itemId] || 0) + 1;
    const got = FL.addAff(s, id, FL.CONFIG.giftAff[eff.tier]);
    let line = c.giftLines[r] || GENERIC_GIFT[r].replace('{id}', id);
    if (c.giftLines.special && c.giftLines.special[itemId]) line = c.giftLines.special[itemId];
    // the same present again (and again) gets a tired reaction if she has one
    if (eff.repeat >= 2 && r !== 'hate' && c.giftLines.repeat) line = c.giftLines.repeat;
    return { reaction: r, tier: eff.tier, repeat: eff.repeat, gain: got, lines: FL.flattenText(s, { char: id }, Array.isArray(line) ? line : [line]) };
  };

  FL.buy = function (s, itemId, qty) {
    qty = qty || 1;
    const it = FL.items[itemId];
    if (!it || s.gold < it.price * qty) return false;
    s.gold -= it.price * qty;
    s.inv[itemId] = (s.inv[itemId] || 0) + qty;
    return true;
  };

  // Private lessons: turn gold into stats, at a price that climbs with each lesson.
  FL.LESSONS = {
    might: { name: 'Private Lesson with a Retired Champion', base: 60, step: 45 },
    wits: { name: 'Private Tutoring at the Academy', base: 60, step: 45 },
    charm: { name: 'Etiquette & Wit with a Courtesan', base: 60, step: 45 },
  };
  FL.lessonPrice = function (s, stat) {
    const L = FL.LESSONS[stat];
    const n = (s.lessons && s.lessons[stat]) || 0;
    return L.base + L.step * n;
  };
  FL.buyLesson = function (s, stat) {
    const price = FL.lessonPrice(s, stat);
    if (s.gold < price || s.stats[stat] >= 10) return false;
    s.gold -= price;
    s.lessons = s.lessons || {};
    s.lessons[stat] = (s.lessons[stat] || 0) + 1;
    s.stats[stat] = Math.min(10, s.stats[stat] + 1);
    return true;
  };

  FL.doActivity = function (s, act) {
    const res = { lines: [] };
    if (act.cost && s.gold < act.cost) return null;
    if (act.req && !FL.reqMet(s, act.req)) return null;
    if (act.give) {
      Object.keys(act.give).forEach(function (k) { s.inv[k] = (s.inv[k] || 0) + act.give[k]; });
      res.give = act.give;
    }
    if (act.cost) s.gold -= act.cost;
    if (act.gold) {
      let g = act.gold;
      if (act.bonusStat) g += s.stats[act.bonusStat] * (act.bonusPer || 3);
      s.gold += g;
      res.gold = g;
    }
    if (act.stat) {
      FL.STATS.forEach(function (k) {
        if (act.stat[k]) s.stats[k] = Math.min(10, s.stats[k] + act.stat[k]);
      });
      res.stat = act.stat;
    }
    const pool = typeof act.lines === 'function' ? act.lines(s) : act.lines || ['You spend some time here.'];
    res.lines = [pool[(s.day * 3 + s.slot) % pool.length]];
    if (!act.free) FL.advance(s);
    return res;
  };

  /* ------------------------------------------------------------------ dates */
  // Once you're friends (after her first romance scene), you can ask her out.
  // Each spot is a short scene written per heroine: c.dates[spot].
  FL.DATE_SPOTS = {
    dinner: { name: 'Dinner at the Tipsy Wyvern', icon: '🕯️', loc: 'tavern', cost: 15, desc: 'A private corner booth, candlelight and the good wine.' },
    gardens: { name: 'A stroll through the Moonlit Gardens', icon: '🌹', loc: 'noble', cost: 0, desc: 'Hedges, fountains and hidden benches in the Noble Quarter.' },
    harbor: { name: 'Sunset at Saltbreeze Harbor', icon: '🌅', loc: 'docks', cost: 5, desc: 'Fried fish in paper, the end of the pier and the sun going down.' },
    picnic: { name: 'A picnic in Whisperwood', icon: '🧺', loc: 'forest', cost: 10, desc: 'A basket, a blanket and a sunny clearing.' },
  };
  FL.DATE_ORDER = ['dinner', 'gardens', 'harbor', 'picnic'];
  FL.CONFIG.dateStage = 2;
  FL.CONFIG.dateAff = 4;
  FL.CONFIG.dateFavAff = 4;

  FL.canDate = function (s, id) {
    const c = FL.characters[id];
    const st = s.chars[id];
    return st.stage >= FL.CONFIG.dateStage && !s.daily.date[id] && FL.DATE_ORDER.some(function (k) { return c.dates[k]; });
  };
  FL.dateOptions = function (s, id) {
    const c = FL.characters[id];
    return FL.DATE_ORDER.filter(function (k) { return c.dates[k]; }).map(function (k) {
      const spot = FL.DATE_SPOTS[k];
      return { id: k, spot: spot, fav: c.dateFav === k, ok: s.gold >= spot.cost, been: !!s.flags[id + '_date_' + k] };
    });
  };
  FL.startDate = function (s, id, spotId) {
    const c = FL.characters[id];
    const spot = FL.DATE_SPOTS[spotId];
    if (!FL.canDate(s, id) || !c.dates[spotId] || s.gold < spot.cost) return null;
    s.gold -= spot.cost;
    s.daily.date[id] = true;
    s.loc = spot.loc;
    const run = FL.startScene(s, { char: id, id: 'date_' + spotId }, 'date');
    let gain = FL.CONFIG.dateAff + (c.dateFav === spotId ? FL.CONFIG.dateFavAff : 0);
    const got = FL.addAff(s, id, gain);
    if (got) run.notes.unshift({ type: 'aff', char: id, n: got });
    return run;
  };

  /* ------------------------------------------------------------------ events */

  FL.pendingEvent = function (s) {
    let best = null;
    FL.events.forEach(function (ev) {
      if (s.seenEvents[ev.id]) return;
      if (ev.day != null && s.day < ev.day) return;
      if (ev.slot != null && s.slot !== ev.slot) return;
      if (ev.cond && !ev.cond(s)) return;
      if (!best || (ev.priority || 0) > (best.priority || 0)) best = ev;
    });
    return best;
  };

  /* ------------------------------------------------------------------ scenes */

  FL.getScene = function (ref) {
    if (ref.char) {
      const c = FL.characters[ref.char];
      if (!c) return null;
      if (ref.id.indexOf('date_') === 0) return c.dates[ref.id.slice(5)];
      return c.scenes[ref.id];
    }
    return FL.scenes[ref.id];
  };

  FL.reqMet = function (s, req, run) {
    if (!req) return true;
    for (const k of FL.STATS) if (req[k] && s.stats[k] < req[k]) return false;
    if (req.gold && s.gold < req.gold) return false;
    if (req.item && !s.inv[req.item]) return false;
    if (req.flag && !s.flags[req.flag]) return false;
    if (req.noflag && s.flags[req.noflag]) return false;
    if (req.aff && run && run.char && s.chars[run.char].aff < req.aff) return false;
    if (req.test && !req.test(s)) return false;
    return true;
  };

  FL.reqLabel = function (req) {
    if (!req) return '';
    const parts = [];
    FL.STATS.forEach(function (k) { if (req[k]) parts.push(FL.STAT_NAMES[k] + ' ' + req[k]); });
    if (req.gold) parts.push(req.gold + ' gold');
    if (req.item) parts.push(FL.items[req.item] ? FL.items[req.item].name : req.item);
    if (req.aff) parts.push('♥ ' + req.aff);
    if (req.label) parts.push(req.label);
    return parts.join(', ');
  };

  FL.applyEffects = function (s, fx, run) {
    if (!fx) return [];
    const notes = [];
    if (fx.aff && run && run.char) {
      // Dates can't push past the current stage's cap. Romance scenes can go one stage
      // further (to the cap of the stage the scene leads to); later scenes are uncapped.
      let got;
      const st = s.chars[run.char];
      if (run.kind === 'romance' && st && st.stage < 4 && FL.SCENE_FOR_STAGE[st.stage] === run.id && fx.aff > 0) {
        const cap = FL.CONFIG.affCap[st.stage + 1];
        const before = st.aff;
        st.aff = Math.min(100, Math.max(st.aff, Math.min(cap, st.aff + fx.aff)));
        got = st.aff - before;
      } else got = FL.addAff(s, run.char, fx.aff, run.kind !== 'date');
      if (got) notes.push({ type: 'aff', char: run.char, n: got });
    }
    if (fx.affTo) {
      Object.keys(fx.affTo).forEach(function (id) {
        const got = FL.addAff(s, id, fx.affTo[id], true);
        if (got) notes.push({ type: 'aff', char: id, n: got });
      });
    }
    if (fx.gold) {
      s.gold = Math.max(0, s.gold + fx.gold);
      notes.push({ type: 'gold', n: fx.gold });
    }
    if (fx.stat) {
      FL.STATS.forEach(function (k) {
        if (fx.stat[k]) {
          s.stats[k] = Math.max(0, Math.min(10, s.stats[k] + fx.stat[k]));
          notes.push({ type: 'stat', stat: k, n: fx.stat[k] });
        }
      });
    }
    if (fx.give) {
      Object.keys(fx.give).forEach(function (k) {
        s.inv[k] = (s.inv[k] || 0) + fx.give[k];
        notes.push({ type: 'item', item: k, n: fx.give[k] });
      });
    }
    if (fx.take) {
      Object.keys(fx.take).forEach(function (k) {
        s.inv[k] = Math.max(0, (s.inv[k] || 0) - fx.take[k]);
        if (!s.inv[k]) delete s.inv[k];
      });
    }
    if (fx.flag) s.flags[fx.flag] = true;
    if (fx.flags) Object.keys(fx.flags).forEach(function (k) { s.flags[k] = fx.flags[k]; });
    if (fx.fn) fx.fn(s, run);
    return notes;
  };

  // Start running a scene. Returns a "run" object the UI keeps around.
  FL.startScene = function (s, ref, kind) {
    const scene = FL.getScene(ref);
    if (!scene) throw new Error('Missing scene ' + JSON.stringify(ref));
    const run = { char: ref.char || null, id: ref.id, kind: kind || 'scene', node: null, notes: [] };
    FL.enterNode(s, run, 'start');
    return run;
  };

  FL.currentNode = function (run) {
    return FL.getScene(run)[run.node];
  };

  FL.enterNode = function (s, run, nodeId, depth) {
    const scene = FL.getScene(run);
    const node = scene[nodeId];
    if (!node) throw new Error('Missing node ' + nodeId + ' in ' + (run.char || '') + '.' + run.id);
    if (node.branch) {
      // a router node: jump straight to the first branch whose condition holds
      if ((depth || 0) > 20) throw new Error('Branch loop at ' + nodeId);
      const fx = FL.applyEffects(s, node, run);
      const hit = node.branch.find(function (b) { return FL.cond(s, b.if, run); });
      if (!hit) throw new Error('No branch matched at ' + nodeId);
      FL.enterNode(s, run, hit.go, (depth || 0) + 1);
      run.notes = fx.concat(run.notes);
      return FL.currentNode(run);
    }
    run.node = nodeId;
    run.notes = FL.applyEffects(s, node, run);
    if (node.ending) {
      s.over = true;
      run.ending = node.ending;
    }
    return node;
  };

  // Text entries may be strings or { if: cond, text: line(s), else: line(s) }.
  FL.flattenText = function (s, run, t) {
    const out = [];
    (Array.isArray(t) ? t : [t]).forEach(function (p) {
      if (p == null) return;
      if (typeof p === 'string') { out.push(p); return; }
      const pick = FL.cond(s, p.if, run) ? p.text : p.else;
      if (pick != null) FL.flattenText(s, run, pick).forEach(function (x) { out.push(x); });
    });
    return out;
  };
  FL.nodeText = function (s, run, node) {
    const t = typeof node.text === 'function' ? node.text(s, run) : node.text || [];
    return FL.flattenText(s, run, t).map(function (p) { return FL.fmt(s, p); });
  };

  FL.nodeChoices = function (s, run, node) {
    let list;
    if (node.choicesFn) list = node.choicesFn(s, run);
    else if (node.choices) list = node.choices;
    else if (node.next) list = [{ text: 'Continue', go: node.next }];
    else if (node.jump) list = [{ text: 'Continue', jump: node.jump }];
    else if (node.end) list = [{ text: node.endLabel || 'Continue' }];
    else list = [];
    return list
      .filter(function (ch) { return !ch.hideIf || !ch.hideIf(s); })
      .filter(function (ch) { return !ch.showIf || ch.showIf(s); })
      .filter(function (ch) { return ch.if == null || FL.cond(s, ch.if, run); })
      .map(function (ch) {
        return { choice: ch, ok: FL.reqMet(s, ch.req, run), label: FL.reqLabel(ch.req) };
      });
  };

  // Apply a choice. Returns 'continue' (run moved to another node),
  // 'end' (scene finished) or 'ending' (game over).
  FL.choose = function (s, run, ch) {
    if (!FL.reqMet(s, ch.req, run)) return 'blocked';
    const pre = FL.applyEffects(s, ch, run);
    let go = ch.go;
    if (ch.check) {
      const val = s.stats[ch.check.stat];
      run.lastCheck = { stat: ch.check.stat, dc: ch.check.dc, val: val, pass: val >= ch.check.dc };
      go = run.lastCheck.pass ? ch.pass : ch.fail;
    } else {
      run.lastCheck = null;
    }
    if (ch.jump) {
      run.char = ch.jump.char || null;
      run.id = ch.jump.id;
      run.kind = ch.jump.kind || run.kind;
      go = 'start';
    }
    if (!go) return 'end';
    FL.enterNode(s, run, go);
    run.notes = pre.concat(run.notes);
    return run.ending ? 'ending' : 'continue';
  };

  // Called when a scene ends (node with end:true, or a choice with no target).
  FL.finishScene = function (s, run) {
    if (run.kind === 'date' && run.char) {
      s.chars[run.char].dates = (s.chars[run.char].dates || 0) + 1;
      s.flags[run.char + '_date_' + run.id.replace(/^date_/, '')] = true;
    }
    if (run.kind === 'romance' && run.char) {
      s.daily.scene = s.daily.scene || {};
      s.daily.scene[run.char] = true;
      const st = s.chars[run.char];
      st.lastScene = s.day;
      const expected = FL.SCENE_FOR_STAGE[st.stage];
      if (expected === run.id) st.stage += 1;
      if (run.id === 's3' && st.stage >= 4 && s.flags['morningDue_' + run.char] == null) {
        s.flags['morningDue_' + run.char] = s.day;
      }
    }
  };

  /* ------------------------------------------------------------------ persistence helpers */

  FL.serialize = function (s) {
    return JSON.stringify(s);
  };

  FL.deserialize = function (str) {
    return FL.normalizeState(JSON.parse(str));
  };
})(typeof window !== 'undefined' ? window : globalThis);
