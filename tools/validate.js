#!/usr/bin/env node
/*
 * Content validator + simulator for Hearts of Generic FantasyLandia.
 *   node tools/validate.js           — validate all data and run simulations
 *   node tools/validate.js --stats   — also print content statistics
 *   node tools/validate.js --only fenna,kit
 *                                    — only report problems involving these heroines
 *                                      (plus global problems); handy while others are mid-edit
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const ctx = { console: console };
vm.createContext(ctx);
ctx.window = vm.runInContext('this', ctx);

function load(rel) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), ctx, { filename: rel });
}

const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const scripts = [];
html.replace(/<script src="([^"]+)"><\/script>/g, function (_, src) { scripts.push(src); });

const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);
const onlyArg = process.argv.indexOf('--only');
const ONLY = onlyArg >= 0 ? process.argv[onlyArg + 1].split(',') : null;

// Every char file on disk must be referenced from index.html.
fs.readdirSync(path.join(ROOT, 'js/chars')).forEach(function (f) {
  if (scripts.indexOf('js/chars/' + f) < 0) err('index.html is missing <script> for js/chars/' + f);
});

scripts.filter((s) => s !== 'js/ui.js').forEach(function (s) {
  if (!fs.existsSync(path.join(ROOT, s))) { err('char ' + path.basename(s, '.js') + ': index.html references missing ' + s); return; }
  try { load(s); } catch (e) {
    // one broken file shouldn't hide everyone else's results
    err('char ' + path.basename(s, '.js') + ': failed to load ' + s + ': ' + e.message);
  }
});
const FL = ctx.window.FL;

/* ------------------------------------------------------------------ static checks */
const SPEAKER_RE = /^@(\w+)(?::(\w*))?\s/;
const COND_KEYS = ['might', 'wits', 'charm', 'gold', 'item', 'flag', 'noflag', 'aff', 'test', 'label',
  'any', 'stage', 'who', 'ngplus', 'seenEnding', 'met', 'devoted'];
const flagReads = {};
const flagSets = {};

function checkCond(where, c) {
  if (c == null) return;
  if (typeof c === 'string') { flagReads[c.replace(/^!/, '')] = where; return; }
  if (typeof c === 'function') return;
  if (Array.isArray(c)) { c.forEach(function (x) { checkCond(where, x); }); return; }
  if (typeof c !== 'object') { err(where + ': bad condition ' + c); return; }
  Object.keys(c).forEach(function (k) {
    if (COND_KEYS.indexOf(k) < 0) err(where + ': bad condition key ' + k);
  });
  if (c.any) checkCond(where, c.any);
  if (c.flag) flagReads[c.flag] = where;
  if (c.noflag) flagReads[c.noflag] = where;
  if (c.item && !FL.items[c.item]) err(where + ': condition names unknown item ' + c.item);
  ['met', 'devoted', 'who'].forEach(function (k) { if (c[k] && !FL.characters[c[k]]) err(where + ': condition names unknown heroine ' + c[k]); });
  if (c.seenEnding && !FL.endings[c.seenEnding]) err(where + ': condition names unknown ending ' + c.seenEnding);
}

function checkLines(where, lines) {
  (Array.isArray(lines) ? lines : [lines]).forEach(function (l) {
    if (l && typeof l === 'object') {
      if (!('if' in l)) err(where + ': conditional line without "if"');
      if (l.text == null && l.else == null) err(where + ': conditional line without text');
      checkCond(where, l.if);
      if (l.text != null) checkLines(where, l.text);
      if (l.else != null) checkLines(where, l.else);
      return;
    }
    if (typeof l !== 'string') { err(where + ': non-string line'); return; }
    const m = SPEAKER_RE.exec(l);
    if (m && m[1] !== 'you' && !FL.characters[m[1]] && !FL.speakers[m[1]]) err(where + ': unknown speaker @' + m[1]);
    if (m && m[2] != null && FL.MOODS.indexOf(m[2]) < 0) err(where + ': unknown mood "' + m[2] + '" (use ' + FL.MOODS.join('/') + ')');
    if (m && m[2] && !FL.characters[m[1]]) warn(where + ': mood on non-heroine speaker @' + m[1]);
    if (/^@\w+:\S/.test(l) && !m) err(where + ': malformed speaker tag in "' + l.slice(0, 40) + '"');
    if ((l.match(/\*/g) || []).length % 2) warn(where + ': unbalanced * in "' + l.slice(0, 50) + '"');
  });
}
function noteFlags(fx) {
  if (fx.flag) flagSets[fx.flag] = true;
  if (fx.flags) Object.keys(fx.flags).forEach(function (k) { flagSets[k] = true; });
}

function checkScene(label, scene, owner) {
  if (!scene) { err(label + ': missing scene'); return; }
  if (!scene.start) err(label + ': no start node');
  const reach = {};
  const queue = ['start'];
  while (queue.length) {
    const id = queue.shift();
    if (reach[id]) continue;
    reach[id] = true;
    const node = scene[id];
    if (!node) { err(label + ': missing node "' + id + '"'); continue; }
    if (typeof node.text !== 'function') checkLines(label + '.' + id, node.text || []);
    const exits = [];
    noteFlags(node);
    if (node.mood && FL.MOODS.indexOf(node.mood) < 0) err(label + '.' + id + ': unknown node mood ' + node.mood);
    if (node.branch) {
      if (node.text || node.choices || node.next || node.end) err(label + '.' + id + ': a branch node only routes (no text/choices/next/end)');
      node.branch.forEach(function (b, i) {
        if (!b.go) err(label + '.' + id + ': branch ' + i + ' has no go');
        checkCond(label + '.' + id, b.if);
        exits.push(b.go);
      });
      const last = node.branch[node.branch.length - 1];
      if (last && last.if != null) err(label + '.' + id + ': last branch must be an unconditional fallback');
    }
    if (node.next) exits.push(node.next);
    (node.choices || []).forEach(function (ch, i) {
      if (!ch.text) err(label + '.' + id + ': choice ' + i + ' has no text');
      noteFlags(ch);
      if (ch.if != null) checkCond(label + '.' + id + '.choice' + i, ch.if);
      if (ch.check) {
        if (!ch.pass || !ch.fail) err(label + '.' + id + ': check choice missing pass/fail');
        if (FL.STATS.indexOf(ch.check.stat) < 0) err(label + '.' + id + ': bad check stat');
        exits.push(ch.pass, ch.fail);
      } else if (ch.go) exits.push(ch.go);
      if (ch.req) Object.keys(ch.req).forEach(function (k) {
        if (['might', 'wits', 'charm', 'gold', 'item', 'flag', 'noflag', 'aff', 'test', 'label'].indexOf(k) < 0) err(label + '.' + id + ': bad req key ' + k);
        if (k === 'item' && !FL.items[ch.req.item]) err(label + '.' + id + ': req unknown item ' + ch.req.item);
        if (k === 'flag' || k === 'noflag') flagReads[ch.req[k]] = label + '.' + id;
      });
      ['give', 'take'].forEach(function (k) {
        if (ch[k]) Object.keys(ch[k]).forEach(function (it) { if (!FL.items[it]) err(label + '.' + id + ': unknown item ' + it); });
      });
      if (ch.affTo) Object.keys(ch.affTo).forEach(function (c) { if (!FL.characters[c]) err(label + '.' + id + ': affTo unknown ' + c); });
    });
    const terminal = node.end || node.ending || node.choicesFn || node.jump || node.branch ||
      (node.choices && node.choices.length);
    if (!node.next && !terminal) err(label + '.' + id + ': dead end (no next/choices/end)');
    if (node.ending && !FL.endings[node.ending]) err(label + '.' + id + ': unknown ending ' + node.ending);
    if (owner && node.ending && (owner.endingIds || [owner.id]).indexOf(node.ending) < 0 && label.indexOf('.ending') > 0) {
      warn(label + '.' + id + ': ending ' + node.ending + ' is not one of ' + owner.id + "'s endings");
    }
    exits.forEach(function (x) { if (x) queue.push(x); });
  }
  const dynamic = Object.keys(scene).some(function (id) { return scene[id].choicesFn; });
  if (!dynamic) Object.keys(scene).forEach(function (id) {
    if (!reach[id]) warn(label + ': unreachable node "' + id + '"');
  });
}

const stats = { chars: 0, nodes: 0, words: 0, choices: 0 };
function wordsIn(t) {
  if (t == null) return 0;
  if (typeof t === 'string') return t.split(/\s+/).length;
  if (Array.isArray(t)) return t.reduce(function (a, x) { return a + wordsIn(x); }, 0);
  if (typeof t === 'object') return wordsIn(t.text) + wordsIn(t.else) + wordsIn(t.lines);
  return 0;
}
function countWords(scene) {
  Object.keys(scene).forEach(function (id) {
    const n = scene[id];
    stats.nodes++;
    if (Array.isArray(n.text)) stats.words += wordsIn(n.text);
    (n.choices || []).forEach(function (c) { stats.choices++; stats.words += c.text.split(/\s+/).length; });
  });
}

FL.charOrder.forEach(function (id) {
  const c = FL.characters[id];
  const L = 'char ' + id;
  stats.chars++;
  ['name', 'short', 'trope', 'color', 'teaser', 'blurb', 'endingTitle'].forEach(function (k) {
    if (!c[k]) err(L + ': missing ' + k);
  });
  if (FL.STATS.indexOf(c.favStat) < 0) err(L + ': bad favStat ' + c.favStat);
  if (!Array.isArray(c.schedule) || c.schedule.length !== 3) err(L + ': schedule must have 3 entries');
  else c.schedule.forEach(function (w, slot) {
    (Array.isArray(w) ? w : [w]).forEach(function (loc) {
      if (loc === null) return;
      if (!FL.locations[loc]) err(L + ': schedule unknown location ' + loc);
      else if (FL.locations[loc].open && FL.locations[loc].open.indexOf(slot) < 0) err(L + ': at ' + loc + ' while it is closed (slot ' + slot + ')');
    });
  });
  ['love', 'like', 'hate'].forEach(function (k) {
    (c.gifts[k] || []).forEach(function (it) { if (!FL.items[it]) err(L + ': gift unknown item ' + it); });
  });
  if (!(c.gifts.love || []).length) err(L + ': no loved gift');
  if (!(c.gifts.hate || []).length) warn(L + ': no hated gift');
  if (c.talk.length < 12) warn(L + ': only ' + c.talk.length + ' talk lines (aim for 12+)');
  const checkTalk = function (where, t) {
    if (Array.isArray(t)) { checkLines(where, t); return; }
    if (!t || typeof t !== 'object' || !Array.isArray(t.lines)) { err(where + ': talk entry must be [lines] or { if, lines }'); return; }
    checkCond(where, t.if);
    checkLines(where, t.lines);
  };
  c.talk.forEach(function (t, i) { checkTalk(L + '.talk' + i, t); });
  if (!c.talk.some(Array.isArray)) err(L + ': needs at least one unconditional talk line');
  if (c.afterTalk.length < 3) err(L + ': needs at least 3 afterTalk lines');
  if (c.afterTalk.length < 8) warn(L + ': only ' + c.afterTalk.length + ' afterTalk lines (aim for 8+)');
  c.afterTalk.forEach(function (t, i) { checkTalk(L + '.afterTalk' + i, t); });
  if (!c.afterTalk.some(Array.isArray)) err(L + ': needs at least one unconditional afterTalk line');
  if (c.giftLines.special) Object.keys(c.giftLines.special).forEach(function (it) {
    if (!FL.items[it]) err(L + ': special gift line for unknown item ' + it);
    checkLines(L + '.gift.special.' + it, c.giftLines.special[it]);
  });
  if (c.giftLines.repeat) checkLines(L + '.gift.repeat', c.giftLines.repeat);
  Object.keys(c.dates).forEach(function (k) {
    if (!FL.DATE_SPOTS[k]) err(L + ': date at unknown spot ' + k);
    checkScene(L + '.date_' + k, c.dates[k], c);
    countWords(c.dates[k]);
  });
  if (c.dateFav && !c.dates[c.dateFav]) err(L + ': dateFav ' + c.dateFav + ' has no date scene');
  FL.DATE_ORDER.forEach(function (k) { if (!c.dates[k]) warn(L + ': no date scene for ' + k); });
  if (Object.keys(c.dates).length && !c.dateFav) warn(L + ': no dateFav');
  if (!FL.portraitConfigs || !FL.portraitConfigs[id]) err(L + ': no portrait config');
  else if (FL.portrait(id).indexOf('<svg') !== 0) err(L + ': portrait did not render');
  ['love', 'like', 'neutral', 'hate'].forEach(function (k) { if (c.giftLines[k]) checkLines(L + '.gift.' + k, c.giftLines[k]); });
  if (FL.portraitConfigs && FL.portraitConfigs[id]) FL.MOODS.forEach(function (m) {
    if (FL.portrait(id, m).indexOf('<svg') !== 0) err(L + ': portrait mood ' + m + ' did not render');
  });
  ['intro', 's1', 's2', 's3', 'morning', 'ending'].forEach(function (sid) {
    checkScene(L + '.' + sid, c.scenes[sid], c);
    if (c.scenes[sid]) countWords(c.scenes[sid]);
  });
  (c.endingIds || [id]).forEach(function (eid) {
    const endHit = Object.keys(c.scenes.ending || {}).some(function (k) { return c.scenes.ending[k].ending === eid; });
    if (!endHit) err(L + ': ending scene never reaches ending "' + eid + '"');
  });
  ['intro', 's1', 's2', 's3'].forEach(function (sid) {
    const sc = c.scenes[sid] || {};
    if (!Object.keys(sc).some(function (k) { return sc[k].end || (sc[k].choices || []).some(function (ch) { return !ch.go && !ch.check && !ch.jump; }); })) {
      err(L + '.' + sid + ': scene never ends');
    }
  });
});
Object.keys(FL.scenes).forEach(function (sid) { checkScene('scene ' + sid, FL.scenes[sid]); countWords(FL.scenes[sid]); });
// Flags: callbacks should read what scenes set, and nothing should read a flag nobody sets.
FL.charOrder.forEach(function (id) { FL.DATE_ORDER.forEach(function (k) { flagSets[id + '_date_' + k] = true; }); });
['demon_attack', 'goddess_awake', 'plot_baalgrim_beaten'].forEach(function (f) { flagSets[f] = true; });
FL.events.forEach(function (ev) { if (ev.setsFlags) ev.setsFlags.forEach(function (f) { flagSets[f] = true; }); });
Object.keys(flagReads).forEach(function (f) {
  if (!flagSets[f]) err(flagReads[f] + ': reads flag "' + f + '" that nothing sets');
});
Object.keys(flagSets).forEach(function (f) {
  if (!flagReads[f] && !/_date_/.test(f) && ['demon_attack', 'goddess_awake'].indexOf(f) < 0) warn('flag "' + f + '" is set but never read by a condition (a callback is missing, or it is read in code)');
});
FL.events.forEach(function (ev) {
  if (ev.scene && !FL.scenes[ev.scene] && !ev.ref) err('event ' + ev.id + ': unknown scene ' + ev.scene);
  if (ev.ref && !FL.getScene(ev.ref)) err('event ' + ev.id + ': unknown ref scene');
});
FL.charOrder.forEach(function (id) {
  FL.charOrder.forEach(function (o) { if (o === id) return; });
  const c = FL.characters[id];
  stats.words += wordsIn(c.talk) + wordsIn(c.afterTalk);
  Object.keys(c.giftLines).forEach(function (k) { stats.words += k === 'special' ? wordsIn(Object.values(c.giftLines.special)) : wordsIn(c.giftLines[k]); });
});

/* ------------------------------------------------------------------ simulation */
function rng(seed) {
  let x = seed || 1;
  return function () { x = (x * 1103515245 + 12345) & 0x7fffffff; return x / 0x7fffffff; };
}

function playRun(s, run, pickFn, guard) {
  let steps = 0;
  for (;;) {
    if (++steps > 400) throw new Error('scene loop ' + (run.char || '') + '.' + run.id);
    const node = FL.currentNode(run);
    FL.nodeText(s, run, node);
    if (run.ending) return 'ending';
    const opts = FL.nodeChoices(s, run, node).filter(function (o) { return o.ok; });
    if (!opts.length) throw new Error('no available choices at ' + (run.char || '') + '.' + run.id + '.' + run.node);
    const ch = pickFn(opts, run).choice;
    const r = FL.choose(s, run, ch);
    if (r === 'end') { FL.finishScene(s, run); return 'end'; }
    if (r === 'ending') { FL.nodeText(s, run, FL.currentNode(run)); return 'ending'; }
    if (guard) guard(s, run);
  }
}

// 1) Every heroine's route works end to end, with every choice explored at least once.
const routeEndings = {};
FL.charOrder.forEach(function (id) {
  for (let variant = 0; variant < 6; variant++) {
    const s = FL.newState({ name: 'Tester' });
    s.flags.demon_attack = true; s.flags.goddess_awake = true;
    s.day = 16;
    FL.STATS.forEach(function (k) { s.stats[k] = variant % 2 ? 10 : 4; });
    s.gold = 999;
    FL.itemOrder.forEach(function (it) { s.inv[it] = 3; });
    const r = rng(variant * 7919 + id.length * 31);
    ['intro', 's1', 's2', 's3'].forEach(function (sid, i) {
      if (s.chars[id].stage !== i) { err('sim ' + id + ': expected stage ' + i + ' before ' + sid); return; }
      s.chars[id].aff = Math.max(s.chars[id].aff, FL.CONFIG.affNeeded[i] || 0);
      s.daily.scene = {};
      const st = FL.romanceStatus(s, id);
      if (st.scene !== sid) { err('sim ' + id + ': romanceStatus scene ' + st.scene + ' != ' + sid); return; }
      if (!st.ok) { err('sim ' + id + ': ' + sid + ' not unlockable: ' + st.needs.join(', ')); return; }
      try {
        const run = FL.startScene(s, { char: id, id: sid }, 'romance');
        const res = playRun(s, run, function (opts) { return variant === 0 ? opts[0] : variant === 1 ? opts[opts.length - 1] : opts[Math.floor(r() * opts.length)]; });
        if (res !== 'end') err('sim ' + id + '.' + sid + ': ended with ' + res);
      } catch (e) { err('sim ' + id + '.' + sid + ': ' + e.message); }
    });
    if (s.chars[id].stage !== 4) { err('sim ' + id + ': not devoted after scenes'); continue; }
    // every date spot plays through
    Object.keys(FL.characters[id].dates).forEach(function (k) {
      try {
        s.daily.date = {};
        const before = s.gold;
        const run = FL.startDate(s, id, k);
        if (!run) { err('sim ' + id + ': could not start date ' + k); return; }
        if (before - s.gold !== FL.DATE_SPOTS[k].cost) err('sim ' + id + ': date ' + k + ' cost wrong');
        if (playRun(s, run, function (opts) { return variant === 0 ? opts[0] : variant === 1 ? opts[opts.length - 1] : opts[Math.floor(r() * opts.length)]; }) !== 'end') err('sim ' + id + ': date ' + k + ' did not end');
        if (!s.flags[id + '_date_' + k]) err('sim ' + id + ': date ' + k + ' did not set its flag');
      } catch (e) { err('sim ' + id + '.date_' + k + ': ' + e.message); }
    });
    // the morning after: the event must fire on the next morning and play cleanly
    try {
      s.day += 1; s.slot = 0; s.flags.lastCrossover = s.day;
      FL.events.forEach(function (ev) { if (ev.id !== 'morning_' + id) s.seenEvents[ev.id] = true; });
      const ev = FL.pendingEvent(s);
      if (!ev || ev.id !== 'morning_' + id) err('sim ' + id + ': morning-after event did not fire');
      else {
        s.seenEvents[ev.id] = true;
        const run = FL.startScene(s, ev.ref, 'event');
        if (playRun(s, run, function (opts) { return opts[Math.floor(r() * opts.length)]; }) !== 'end') err('sim ' + id + ': morning scene did not end');
      }
      const before = s.chars[id].afterTalks;
      const said = FL.talk(s, id).lines;
      if (s.chars[id].afterTalks !== before + 1) err('sim ' + id + ': devoted talk did not use afterTalk');
      if (!said.length || said.some(function (l) { return typeof l !== 'string'; })) err('sim ' + id + ': talk produced bad lines');
    } catch (e) { err('sim ' + id + '.morning: ' + e.message); }
    try {
      s.day = 30;
      const run = FL.startScene(s, { id: 'festival' }, 'event');
      const res = playRun(s, run, function (opts) {
        const want = opts.find(function (o) { return o.choice.jump && o.choice.jump.char === id; });
        return want || opts[0];
      });
      if (res !== 'ending' || (FL.characters[id].endingIds || [id]).indexOf(run.ending) < 0) err('sim ' + id + ': festival did not reach her ending (' + run.ending + ')');
      else routeEndings[run.ending] = true;
    } catch (e) { err('sim ' + id + '.ending: ' + e.message); }
  }
});

// 1a') Every ending variant is reachable by some way of playing her route.
FL.charOrder.forEach(function (id) {
  const c = FL.characters[id];
  const missing = (c.endingIds || [id]).filter(function (e) { return !routeEndings[e]; });
  for (let seed = 1; seed <= 80 && missing.length; seed++) {
    const s = FL.newState({ name: 'Seeker', ngplus: seed % 2, meta: { endings: seed % 4 === 0 ? FL.endingOrder.slice() : [] } });
    s.flags.demon_attack = true; s.flags.goddess_awake = true;
    s.day = 16; s.gold = 999;
    FL.STATS.forEach(function (k) { s.stats[k] = seed % 3 === 0 ? 2 : 10; });
    FL.itemOrder.forEach(function (it) { s.inv[it] = 3; });
    const r = rng(seed * 104729 + id.length);
    const pick = function (opts) { return opts[Math.floor(r() * opts.length)]; };
    try {
      ['intro', 's1', 's2', 's3'].forEach(function (sid, i) {
        s.chars[id].aff = Math.max(s.chars[id].aff, FL.CONFIG.affNeeded[i] || 0);
        s.daily.scene = {};
        playRun(s, FL.startScene(s, { char: id, id: sid }, 'romance'), pick);
      });
      Object.keys(c.dates).forEach(function (k) { if (r() < 0.5) { s.daily.date = {}; playRun(s, FL.startDate(s, id, k), pick); } });
      s.day += 1; s.slot = 0;
      if (c.scenes.morning) playRun(s, FL.startScene(s, { char: id, id: 'morning' }, 'event'), pick);
      // jealousy / side events that belong to her
      FL.events.forEach(function (ev) {
        if (ev.ref && ev.ref.char === id && ev.ref.id !== 'morning' && r() < 0.7) playRun(s, FL.startScene(s, ev.ref, 'event'), pick);
        if (!ev.ref && ev.scene && ev.owner === id && r() < 0.7) playRun(s, FL.startScene(s, { id: ev.scene }, 'event'), pick);
      });
      s.day = 30;
      const run = FL.startScene(s, { char: id, id: 'ending' }, 'ending');
      playRun(s, run, pick);
      const at = missing.indexOf(run.ending);
      if (at >= 0) missing.splice(at, 1);
    } catch (e) { err('sim ' + id + ' ending search: ' + e.message); break; }
  }
  missing.forEach(function (e) { warn('char ' + id + ': ending "' + e + '" was never reached in simulated routes (check its conditions)'); });
});

// 1a) Music: every theme parses, locations point at real themes, and melodies
// put chord tones on the strong beats (apart from deliberately marked dissonances).
(function () {
  const M = FL.music;
  if (!M || !M.songs) { err('music engine not loaded'); return; }
  FL.locOrder.forEach(function (id) {
    const t = FL.locations[id].music;
    if (t && !M.songs[t]) err('location ' + id + ': unknown music theme ' + t);
  });
  ['title', 'romance', 'festival', 'tension'].forEach(function (t) { if (!M.songs[t]) err('missing music theme ' + t); });
  Object.keys(M.songs).forEach(function (name) {
    const S = M.songs[name];
    const allowed = S.dissonance || [];
    S.form.forEach(function (lab) { if (!S[lab.charAt(0)]) err('music ' + name + ': form uses missing section ' + lab); });
    ['A', 'B'].forEach(function (sec) {
      const strong = S.meter === 4 ? [0, 2] : S.meter === 3 ? [0] : [0, 3];
      S[sec].melody.notes.forEach(function (n) {
        const bar = Math.floor(n.t / S.meter), pos = n.t - bar * S.meter;
        if (strong.indexOf(pos) < 0) return;
        const chords = S[sec].bars[bar];
        const ch = chords[Math.min(chords.length - 1, Math.floor(pos / (S.meter / chords.length)))];
        const pcs = M.chordSemis(S.mode, ch).map(function (x) { return ((x % 12) + 12) % 12; });
        if (pcs.indexOf(((n.semis % 12) + 12) % 12) < 0 && allowed.indexOf(sec + ':' + (bar + 1) + ':' + (pos + 1)) < 0) {
          err('music ' + name + '.' + sec + ': non-chord tone on strong beat (bar ' + (bar + 1) + ', beat ' + (pos + 1) + ')');
        }
      });
    });
  });
})();

// 1b) Every crossover fires in the right place and plays through every branch.
Object.keys(FL.sceneCast || {}).forEach(function (xid) {
  const cast = FL.sceneCast[xid];
  cast.forEach(function (c) { if (!FL.characters[c]) err('crossover ' + xid + ': unknown cast ' + c); });
  const ev = FL.events.find(function (e) { return e.id === xid; });
  if (!ev) { err('crossover ' + xid + ': no event'); return; }
  if (ev.owner || cast.length < 2) return; // a heroine's own side event (e.g. jealousy), not a crossover
  for (let variant = 0; variant < 4; variant++) {
    const s = FL.newState({ name: 'X' });
    s.flags.demon_attack = true; s.flags.goddess_awake = true;
    cast.forEach(function (c) { s.chars[c].stage = 1; });
    FL.STATS.forEach(function (k) { s.stats[k] = variant % 2 ? 10 : 0; });
    let fired = false;
    for (let day = 3; day < 29 && !fired; day++) {
      for (let slot = 0; slot < 3 && !fired; slot++) {
        FL.locOrder.forEach(function (loc) {
          if (fired) return;
          s.day = day; s.slot = slot; s.loc = loc;
          if (ev.cond(s)) {
            fired = true;
            const r = rng(variant + 1);
            try {
              const run = FL.startScene(s, { id: xid }, 'event');
              const res = playRun(s, run, function (opts) { return variant < 2 ? opts[variant ? opts.length - 1 : 0] : opts[Math.floor(r() * opts.length)]; });
              if (res !== 'end') err('crossover ' + xid + ': ended with ' + res);
              if (s.flags.lastCrossover !== day) err('crossover ' + xid + ': did not record lastCrossover');
            } catch (e) { err('crossover ' + xid + ': ' + e.message); }
          }
        });
      }
    }
    if (!fired) err('crossover ' + xid + ': never fires');
  }
});

// 2) Random full playthroughs never crash and always reach an ending.
const endingsSeen = {};
for (let seed = 1; seed <= 60; seed++) {
  const r = rng(seed);
  const s = FL.newState({ name: 'Bot' + seed, stats: { might: seed % 3, wits: (seed + 1) % 3, charm: (seed + 2) % 3 } });
  let guard = 0;
  let ended = false;
  try {
    while (!ended) {
      if (++guard > 2000) throw new Error('playthrough did not finish');
      const ev = FL.pendingEvent(s);
      if (ev) {
        s.seenEvents[ev.id] = true;
        const run = FL.startScene(s, ev.ref || { id: ev.scene }, 'event');
        const res = playRun(s, run, function (opts) { return opts[Math.floor(r() * opts.length)]; });
        if (res === 'ending') { ended = true; endingsSeen[run.ending] = (endingsSeen[run.ending] || 0) + 1; }
        continue;
      }
      // pick a destination with people if possible
      const open = FL.locOrder.filter(function (l) { return FL.locOpen(s, l); });
      s.loc = open[Math.floor(r() * open.length)];
      const here = FL.charsAt(s, s.loc);
      const roll = r();
      if (here.length && roll < 0.75) {
        const id = here[Math.floor(r() * here.length)];
        const st = FL.romanceStatus(s, id);
        // greedy-ish heroine-focused bot: buy & give gifts
        if (s.chars[id].stage > 0 && FL.canGift(s, id)) {
          const love = FL.characters[id].gifts.love[0];
          if (!s.inv[love]) FL.buy(s, love, 1);
          if (s.inv[love]) FL.giveGift(s, id, love);
        }
        if (st.ok && st.scene) {
          const run = FL.startScene(s, { char: id, id: st.scene }, 'romance');
          const res = playRun(s, run, function (opts) { return opts[Math.floor(r() * opts.length)]; });
          if (res === 'ending') { ended = true; endingsSeen[run.ending] = (endingsSeen[run.ending] || 0) + 1; break; }
          FL.advance(s);
        } else if (FL.canTalk(s, id)) {
          FL.talk(s, id);
        } else {
          FL.advance(s);
        }
      } else {
        const acts = (FL.locations[s.loc].activities || []).filter(function (a) { return !a.free; });
        if (acts.length) {
          const res = FL.doActivity(s, acts[Math.floor(r() * acts.length)]);
          if (!res) FL.advance(s);
        } else FL.advance(s);
      }
      if (s.day > FL.CONFIG.maxDay + 1) throw new Error('ran past the festival');
    }
  } catch (e) {
    err('random playthrough seed ' + seed + ': ' + e.message);
  }
}

/* ------------------------------------------------------------------ report */
if (ONLY) {
  const all = FL.charOrder.concat(scripts.filter(function (x) { return x.indexOf('js/chars/') === 0; }).map(function (x) { return path.basename(x, '.js'); }));
  const keep = function (m) {
    const hits = all.filter(function (id) { return new RegExp('(^|[^a-z])' + id + '([^a-z]|$)').test(m); });
    return !hits.length || hits.some(function (h) { return ONLY.indexOf(h) >= 0; });
  };
  const e2 = errors.filter(keep), w2 = warnings.filter(keep);
  console.log('(--only ' + ONLY.join(',') + ': hiding ' + (errors.length - e2.length) + ' error(s) and ' + (warnings.length - w2.length) + ' warning(s) about other heroines)');
  errors.length = 0; e2.forEach(function (x) { errors.push(x); });
  warnings.length = 0; w2.forEach(function (x) { warnings.push(x); });
}
warnings.forEach(function (w) { console.log('WARN  ' + w); });
errors.forEach(function (e) { console.log('ERROR ' + e); });
if (process.argv.indexOf('--stats') >= 0 || !errors.length) {
  console.log('\nHeroines: ' + stats.chars + ' · Scene nodes: ' + stats.nodes + ' · Choices: ' + stats.choices +
    ' · ~Words: ' + stats.words + ' · Endings: ' + FL.endingOrder.length);
  console.log('Random-bot endings: ' + JSON.stringify(endingsSeen));
}
console.log(errors.length ? '\n' + errors.length + ' error(s).' : '\nAll checks passed.');
process.exit(errors.length ? 1 : 0);
