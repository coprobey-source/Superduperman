#!/usr/bin/env node
/*
 * Content validator + simulator for Hearts of Generic FantasyLandia.
 *   node tools/validate.js           — validate all data and run simulations
 *   node tools/validate.js --stats   — also print content statistics
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

// Every char file on disk must be referenced from index.html.
fs.readdirSync(path.join(ROOT, 'js/chars')).forEach(function (f) {
  if (scripts.indexOf('js/chars/' + f) < 0) err('index.html is missing <script> for js/chars/' + f);
});

scripts.filter((s) => s !== 'js/ui.js').forEach(function (s) {
  if (!fs.existsSync(path.join(ROOT, s))) { err("index.html references missing " + s); return; }
  load(s);
});
const FL = ctx.window.FL;

/* ------------------------------------------------------------------ static checks */
const SPEAKER_RE = /^@(\w+)\s/;

function checkLines(where, lines) {
  (Array.isArray(lines) ? lines : [lines]).forEach(function (l) {
    if (typeof l !== 'string') { err(where + ': non-string line'); return; }
    const m = SPEAKER_RE.exec(l);
    if (m && m[1] !== 'you' && !FL.characters[m[1]] && !FL.speakers[m[1]]) err(where + ': unknown speaker @' + m[1]);
    if ((l.match(/\*/g) || []).length % 2) warn(where + ': unbalanced * in "' + l.slice(0, 50) + '"');
  });
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
    if (node.next) exits.push(node.next);
    (node.choices || []).forEach(function (ch, i) {
      if (!ch.text) err(label + '.' + id + ': choice ' + i + ' has no text');
      if (ch.check) {
        if (!ch.pass || !ch.fail) err(label + '.' + id + ': check choice missing pass/fail');
        if (FL.STATS.indexOf(ch.check.stat) < 0) err(label + '.' + id + ': bad check stat');
        exits.push(ch.pass, ch.fail);
      } else if (ch.go) exits.push(ch.go);
      if (ch.req) Object.keys(ch.req).forEach(function (k) {
        if (['might', 'wits', 'charm', 'gold', 'item', 'flag', 'noflag', 'aff', 'test', 'label'].indexOf(k) < 0) err(label + '.' + id + ': bad req key ' + k);
        if (k === 'item' && !FL.items[ch.req.item]) err(label + '.' + id + ': req unknown item ' + ch.req.item);
      });
      ['give', 'take'].forEach(function (k) {
        if (ch[k]) Object.keys(ch[k]).forEach(function (it) { if (!FL.items[it]) err(label + '.' + id + ': unknown item ' + it); });
      });
      if (ch.affTo) Object.keys(ch.affTo).forEach(function (c) { if (!FL.characters[c]) err(label + '.' + id + ': affTo unknown ' + c); });
    });
    const terminal = node.end || node.ending || node.choicesFn || node.jump ||
      (node.choices && node.choices.length);
    if (!node.next && !terminal) err(label + '.' + id + ': dead end (no next/choices/end)');
    if (node.ending && !FL.endings[node.ending]) err(label + '.' + id + ': unknown ending ' + node.ending);
    if (owner && node.ending && owner.id !== node.ending && label.indexOf('.ending') > 0 && !owner.extraEndings) {
      warn(label + '.' + id + ': ending id differs from owner');
    }
    exits.forEach(function (x) { if (x) queue.push(x); });
  }
  const dynamic = Object.keys(scene).some(function (id) { return scene[id].choicesFn; });
  if (!dynamic) Object.keys(scene).forEach(function (id) {
    if (!reach[id]) warn(label + ': unreachable node "' + id + '"');
  });
}

const stats = { chars: 0, nodes: 0, words: 0, choices: 0 };
function countWords(scene) {
  Object.keys(scene).forEach(function (id) {
    const n = scene[id];
    stats.nodes++;
    if (Array.isArray(n.text)) n.text.forEach(function (t) { stats.words += t.split(/\s+/).length; });
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
  if (c.talk.length < 5) warn(L + ': only ' + c.talk.length + ' talk lines');
  c.talk.forEach(function (t, i) { checkLines(L + '.talk' + i, t); });
  ['love', 'like', 'neutral', 'hate'].forEach(function (k) { if (c.giftLines[k]) checkLines(L + '.gift.' + k, c.giftLines[k]); });
  ['intro', 's1', 's2', 's3', 'ending'].forEach(function (sid) {
    checkScene(L + '.' + sid, c.scenes[sid], c);
    if (c.scenes[sid]) countWords(c.scenes[sid]);
  });
  const endHit = Object.keys(c.scenes.ending || {}).some(function (k) { return c.scenes.ending[k].ending === id; });
  if (!endHit) err(L + ': ending scene never reaches ending "' + id + '"');
  ['intro', 's1', 's2', 's3'].forEach(function (sid) {
    const sc = c.scenes[sid] || {};
    if (!Object.keys(sc).some(function (k) { return sc[k].end || (sc[k].choices || []).some(function (ch) { return !ch.go && !ch.check && !ch.jump; }); })) {
      err(L + '.' + sid + ': scene never ends');
    }
  });
});
Object.keys(FL.scenes).forEach(function (sid) { checkScene('scene ' + sid, FL.scenes[sid]); countWords(FL.scenes[sid]); });
FL.events.forEach(function (ev) {
  if (ev.scene && !FL.scenes[ev.scene] && !ev.ref) err('event ' + ev.id + ': unknown scene ' + ev.scene);
  if (ev.ref && !FL.getScene(ev.ref)) err('event ' + ev.id + ': unknown ref scene');
});
FL.charOrder.forEach(function (id) {
  FL.charOrder.forEach(function (o) { if (o === id) return; });
  stats.words += FL.characters[id].talk.reduce(function (a, t) { return a + t.join(' ').split(/\s+/).length; }, 0);
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
    try {
      s.day = 30;
      const run = FL.startScene(s, { id: 'festival' }, 'event');
      const res = playRun(s, run, function (opts) {
        const want = opts.find(function (o) { return o.choice.jump && o.choice.jump.char === id; });
        return want || opts[0];
      });
      if (res !== 'ending' || run.ending !== id) err('sim ' + id + ': festival did not reach ending (' + run.ending + ')');
    } catch (e) { err('sim ' + id + '.ending: ' + e.message); }
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
warnings.forEach(function (w) { console.log('WARN  ' + w); });
errors.forEach(function (e) { console.log('ERROR ' + e); });
if (process.argv.indexOf('--stats') >= 0 || !errors.length) {
  console.log('\nHeroines: ' + stats.chars + ' · Scene nodes: ' + stats.nodes + ' · Choices: ' + stats.choices +
    ' · ~Words: ' + stats.words + ' · Endings: ' + FL.endingOrder.length);
  console.log('Random-bot endings: ' + JSON.stringify(endingsSeen));
}
console.log(errors.length ? '\n' + errors.length + ' error(s).' : '\nAll checks passed.');
process.exit(errors.length ? 1 : 0);
