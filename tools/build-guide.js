#!/usr/bin/env node
/*
 * Build the illustrated ending guide (PDF) from the game data plus the written
 * entries in docs/guide/entries/*.json and docs/guide/special.json.
 *
 *   NODE_PATH=$(npm root -g) node tools/build-guide.js [out.pdf] [--html out.html]
 *
 * Needs Playwright with Chromium (used to lay out the HTML and print it).
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const GUIDE = path.join(ROOT, 'docs/guide');
const args = process.argv.slice(2);
const htmlArg = args.indexOf('--html');
const htmlOut = htmlArg >= 0 ? args[htmlArg + 1] : null;
const pdfOut = args.find(function (a, i) { return !a.startsWith('--') && args[i - 1] !== '--html'; }) ||
  path.join(ROOT, 'docs/Hearts-of-Generic-FantasyLandia-Ending-Guide.pdf');

/* ------------------------------------------------------------------ load the game */
const ctx = { console: console };
vm.createContext(ctx);
ctx.window = vm.runInContext('this', ctx);
const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
indexHtml.replace(/<script src="([^"]+)"><\/script>/g, function (_, src) {
  if (src !== 'js/ui.js') vm.runInContext(fs.readFileSync(path.join(ROOT, src), 'utf8'), ctx, { filename: src });
});
const FL = ctx.window.FL;

/* ------------------------------------------------------------------ load the entries */
const entries = {};
FL.charOrder.forEach(function (id) {
  const f = path.join(GUIDE, 'entries', id + '.json');
  if (!fs.existsSync(f)) {
    if (args.indexOf('--draft') < 0) throw new Error('Missing guide entry ' + f);
    // --draft: lay out the guide before every entry is written
    entries[id] = { overview: '(draft)', tips: [], endings: FL.characters[id].endingIds.map(function (x) {
      return { id: x, kind: x === id ? 'main' : 'variant', summary: '(summary to come)', howTo: ['(steps to come)'] }; }) };
    return;
  }
  const e = JSON.parse(fs.readFileSync(f, 'utf8'));
  const want = FL.characters[id].endingIds;
  const got = e.endings.map(function (x) { return x.id; });
  want.forEach(function (w) { if (got.indexOf(w) < 0) throw new Error(id + ': guide entry is missing ending ' + w); });
  entries[id] = e;
});
const special = JSON.parse(fs.readFileSync(path.join(GUIDE, 'special.json'), 'utf8'));

/* ------------------------------------------------------------------ helpers */
function esc(s) {
  return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
}
// light markup: *italic* and "quoted choices" get styled
function rich(s) {
  return esc(s)
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/&quot;([^&]+?)&quot;/g, '<span class="choice">“$1”</span>');
}
function fontCss() {
  return fs.readFileSync(path.join(GUIDE, 'fonts.css'), 'utf8').replace(/url\(fonts\/([^)]+)\)/g, function (_, f) {
    return 'url(data:font/woff2;base64,' + fs.readFileSync(path.join(GUIDE, 'fonts', f)).toString('base64') + ')';
  });
}
// A readable text version of a heroine color: darken pale colors until they reach ~4.5:1 on white.
function textColor(hex) {
  let rgb = [1, 3, 5].map(function (i) { return parseInt(hex.substr(i, 2), 16); });
  const lum = function (c) {
    const l = c.map(function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
    return 0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2];
  };
  while ((1.05) / (lum(rgb) + 0.05) < 4.5) rgb = rgb.map(function (v) { return v * 0.9; });
  return '#' + rgb.map(function (v) { return Math.round(v).toString(16).padStart(2, '0'); }).join('');
}
function unlockNote(id) {
  return { malzahra: 'Appears after the imp attack on day 10.', amorette: 'Appears after the goddess dream on day 15.', sigrun: 'Arrives on day 6.' }[id] || '';
}

/* ------------------------------------------------------------------ sections */
function cover() {
  const faces = FL.charOrder.map(function (id) {
    return '<span class="cv-face" style="--c:' + FL.characters[id].color + '">' + FL.portrait(id, 'happy', { festival: true }) + '</span>';
  }).join('');
  return '<section class="cover">' + FL.backdrop('starfall', 2) +
    '<div class="cv-inner"><div class="cv-crest">♥</div>' +
    '<h1>Hearts of<br><span>Generic FantasyLandia</span></h1>' +
    '<div class="cv-sub">The Complete Guide to Every Ending</div>' +
    '<div class="cv-stats">' + FL.charOrder.length + ' heroines · ' + FL.endingOrder.length + ' endings · 30 days until Starfall</div></div>' +
    '<div class="cv-faces">' + faces + '</div>' +
    '<div class="cv-warn">Contains spoilers for every route and ending.</div></section>';
}

function intro() {
  return '<section class="page prose">' +
    '<h2>How to use this guide</h2>' +
    '<p>Every heroine in Clichéton has <b>two or three endings</b>. You always get her main ending if you win her heart. Her other endings depend on <em>how</em> you played her route: what you said in her romance scenes, which dates you took her on, and how you handled her side events. This guide lists every ending, what makes it different, and how to reach it.</p>' +
    '<p>Choices are quoted as they appear in the game, sometimes shortened: <span class="choice">“Like this.”</span> Scene names follow the game: <b>First Meeting</b>, <b>Romance Scene I–III</b>, <b>The Morning After</b>, the four <b>dates</b>, and her <b>Starfall ending</b> at the festival on day 30.</p>' +
    '<p>Most variant endings unlock a final option at the festival or switch on automatically. Getting a variant never locks you out of her main ending on a later run. Endings you have reached can be replayed from <b>Memories</b> or the <b>Endings Gallery</b>, with the same choices open.</p>' +
    '<h2>The basics</h2>' +
    '<div class="cols2">' +
    '<div><h3>Time</h3><p>Thirty days, each with a Morning, Afternoon and Evening. Talking, romance scenes, dates, work and training each take one part of the day. Travel, shopping, gifts and private lessons take no time.</p>' +
    '<h3>Affection & scenes</h3><p>Each heroine has a first meeting and three romance scenes, unlocked at ♥30, ♥60 and ♥90. Scenes II and III also need her favorite stat at 2 and 3. After a romance scene she needs a couple of days before the next one, so court more than one heroine at a time. See all three to make her <b>Devoted</b>.</p>' +
    '<h3>Stats</h3><p>Train Might at the Arena, Wits at the Library or Academy, and Charm at the Tavern, Temple, Noble Quarter or Bathhouse. You can also buy private lessons on Market Street, at a climbing price. Stats unlock scenes and pass the checks inside them.</p></div>' +
    '<div><h3>Gifts</h3><p>One gift per heroine per day. Everyone has gifts she loves and one she hates. Repeating the same gift loses its charm, so mix it up.</p>' +
    '<h3>Dates</h3><p>After her first romance scene, ask her out to dinner, the Moonlit Gardens, the harbor or a picnic. Her favorite spot gives extra affection, and some dates open ending variants.</p>' +
    '<h3>The festival</h3><p>On day 30, choose a Devoted heroine to watch the stars with. With five or more Devoted, a further option appears. You can also watch alone. A secret option waits on New Game+.</p>' +
    '<h3>Finding people</h3><p>The 👥 Who\'s Where panel shows where everyone you\'ve met is right now and next, with a ★ when a romance scene is ready.</p></div>' +
    '</div>' +
    '<div class="strategy"><h3>Chasing endings: general strategy</h3><ul>' +
    '<li><b>Court two or three heroines at once.</b> After each romance scene a heroine needs a couple of days, so spend them with someone else. A focused route takes about ten to fourteen days.</li>' +
    '<li><b>Variants are decided mostly in Romance Scenes II and III, the morning after, and on dates.</b> Read her entry before those scenes. Most variants need one or two specific choices, sometimes with a stat check.</li>' +
    '<li><b>Save before Scene III and before the festival.</b> You have three save slots plus save codes, so you can branch a run and try a different choice without replaying a month.</li>' +
    '<li><b>New Game+ keeps your stats and gold.</b> Later runs pass every stat check easily, which makes them ideal for picking up variants you missed. The Narrator also remembers you.</li>' +
    '<li><b>Watch for side events.</b> Marigold, Valeria, Ignivara and Rosalind each have a jealousy scene in which your answer can open (or close) one of their endings.</li>' +
    '</ul></div></section>';
}

function index() {
  const rows = FL.charOrder.map(function (id) {
    const c = FL.characters[id];
    const love = (c.gifts.love || []).map(function (i) { return FL.items[i].name; }).join(', ');
    return '<tr><td><span class="ix-face" style="--c:' + c.color + '">' + FL.portrait(id, 'neutral') + '</span></td>' +
      '<td><b style="color:' + textColor(c.color) + '">' + esc(c.short) + '</b><div class="small">' + esc(c.trope) + '</div></td>' +
      '<td>' + FL.STAT_NAMES[c.favStat] + '</td><td class="small">' + esc(love) + '</td>' +
      '<td class="small">' + esc(c.dateFav ? FL.DATE_SPOTS[c.dateFav].name.replace(/^(A |Dinner at the |Sunset at )/, '') : '—') + '</td>' +
      '<td class="num">' + c.endingIds.length + '</td></tr>';
  }).join('');
  return '<section class="page"><h2>The heroines at a glance</h2>' +
    '<table class="ix"><thead><tr><th></th><th>Heroine</th><th>Values</th><th>Loves</th><th>Favorite date</th><th>Endings</th></tr></thead><tbody>' + rows + '</tbody></table></section>';
}

function heroine(id) {
  const c = FL.characters[id];
  const e = entries[id];
  const sched = FL.scheduleSummary(id).map(esc).join('<br>');
  const gift = function (k) { return (c.gifts[k] || []).map(function (i) { return esc(FL.items[i].name); }).join(', ') || '—'; };
  const facts = '<dl class="facts">' +
    '<dt>Values</dt><dd>' + FL.STAT_NAMES[c.favStat] + '</dd>' +
    '<dt>Find her</dt><dd>' + sched + (unlockNote(id) ? '<div class="small">' + unlockNote(id) + '</div>' : '') + '</dd>' +
    '<dt>Loves</dt><dd>' + gift('love') + '</dd>' +
    '<dt>Likes</dt><dd>' + gift('like') + '</dd>' +
    '<dt>Hates</dt><dd>' + gift('hate') + '</dd>' +
    '<dt>Favorite date</dt><dd>' + (c.dateFav ? esc(FL.DATE_SPOTS[c.dateFav].name) : '—') + '</dd></dl>';
  const endings = e.endings.map(function (x) {
    const meta = FL.endings[x.id];
    const badge = x.kind === 'main' ? '<span class="badge main">Main ending</span>' : '<span class="badge var">Variant</span>';
    return '<div class="ending" style="--c:' + c.color + ';--ct:' + textColor(c.color) + '"><div class="en-head"><span class="box"></span><h4>' + esc(meta.title) + '</h4>' + badge + '</div>' +
      '<p class="en-sum">' + rich(x.summary) + '</p>' +
      '<div class="en-how"><div class="label">How to get it</div><ul>' + x.howTo.map(function (h) { return '<li>' + rich(h) + '</li>'; }).join('') + '</ul></div></div>';
  }).join('');
  return '<section class="page heroine" style="--c:' + c.color + ';--ct:' + textColor(c.color) + '">' +
    '<header class="h-head"><div class="h-pic">' + FL.portrait(id, 'happy', { full: true }) + '</div>' +
    '<div class="h-title"><div class="h-trope">' + esc(c.trope) + '</div><h2>' + esc(c.name) + '</h2>' +
    '<p class="h-over">' + rich(e.overview) + '</p></div></header>' +
    '<div class="h-body"><aside>' + facts +
    (e.tips && e.tips.length ? '<div class="tips"><div class="label">Tips</div><ul>' + e.tips.map(function (t) { return '<li>' + rich(t) + '</li>'; }).join('') + '</ul></div>' : '') +
    '</aside><div class="h-endings">' + endings + '</div></div></section>';
}

function specials() {
  const pics = { harem: ['fenna', 'valeria', 'mira', 'kit', 'sesha'], alone: [], greenhouse: ['marigold'], true_end: ['amorette'] };
  const blocks = special.endings.map(function (x) {
    const meta = FL.endings[x.id];
    const faces = (pics[x.id] || []).map(function (id) {
      return '<span class="sp-face" style="--c:' + FL.characters[id].color + '">' + FL.portrait(id, x.id === 'greenhouse' ? 'angry' : x.id === 'true_end' ? 'blush' : 'happy', { festival: x.id !== 'greenhouse' }) + '</span>';
    }).join('') || '<span class="sp-cat">🐈‍⬛</span>';
    return '<div class="ending special" style="--c:' + meta.color + ';--ct:' + textColor(meta.color) + '"><div class="en-head"><span class="box"></span><h4>' + esc(meta.title) + '</h4><span class="badge sp">' + esc(meta.who) + '</span></div>' +
      '<div class="sp-faces">' + faces + '</div>' +
      '<p class="en-sum">' + rich(x.summary) + '</p>' +
      '<div class="en-how"><div class="label">How to get it</div><ol>' + x.howTo.map(function (h) { return '<li>' + rich(h) + '</li>'; }).join('') + '</ol></div></div>';
  }).join('');
  return '<section class="page"><h2>The other endings</h2><p class="lede">Four endings don\'t belong to a single heroine: the household, the cat, the greenhouse and the secret one.</p>' + blocks + '</section>';
}

function checklist() {
  const groups = FL.charOrder.map(function (id) {
    const c = FL.characters[id];
    return '<div class="cl-group"><b style="color:' + textColor(c.color) + '">' + esc(c.short) + '</b>' +
      c.endingIds.map(function (eid) { return '<div class="cl-item"><span class="box"></span>' + esc(FL.endings[eid].title) + '</div>'; }).join('') + '</div>';
  }).join('') + '<div class="cl-group"><b>Other endings</b>' + special.endings.map(function (x) {
    return '<div class="cl-item"><span class="box"></span>' + esc(FL.endings[x.id].title) + '</div>';
  }).join('') + '</div>';
  return '<section class="page"><h2>Ending checklist</h2><p class="lede">All ' + FL.endingOrder.length + ' endings. Tick them off as you find them.</p><div class="checklist">' + groups + '</div>' +
    '<div class="strategy secret"><h3>One last secret</h3><p>In a hurry? Open <b>Settings</b> or the ☰ menu, choose <b>Enter a code</b>, and type <b>MAINCHARACTER</b>. You get 99,999 gold and 10 in every stat, so every stat check passes. The Narrator will be <em>very</em> disappointed in you.</p></div></section>';
}

/* ------------------------------------------------------------------ styles */
const CSS = `
@page { size: A4; margin: 13mm 13mm 15mm; }
@page :first { margin: 0; }
* { box-sizing: border-box; }
:root { --ink: #2a1f33; --muted: #6e6278; --paper: #ffffff; --card: #fbf7f0; --line: #e6dccd; --plum: #5a2a6a; --gold: #b8892e; }
html, body { margin: 0; background: var(--paper); color: var(--ink); font: 10pt/1.4 'EB Garamond', Georgia, serif; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
h1, h2, h3, h4 { font-family: 'Cinzel', Georgia, serif; font-weight: 600; margin: 0; }
h2 { font-size: 19pt; color: var(--plum); margin-bottom: 8pt; letter-spacing: .02em; }
h3 { font-size: 10.5pt; color: var(--plum); margin: 10pt 0 3pt; letter-spacing: .05em; text-transform: uppercase; }
h4 { font-size: 11.5pt; color: var(--ct, var(--plum)); }
p { margin: 0 0 6pt; }
em { font-style: italic; }
.small { font-size: 8.6pt; color: var(--muted); }
.lede { color: var(--muted); font-style: italic; margin-bottom: 10pt; }
.page { break-before: page; }
.choice { font-style: italic; color: #4a2a5a; }
.label { font-family: 'Cinzel', serif; font-size: 7.6pt; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); margin-bottom: 2pt; }
.box { display: inline-block; width: 9pt; height: 9pt; border: 1.2pt solid var(--c, var(--plum)); border-radius: 2pt; flex: 0 0 auto; }

/* cover */
.cover { position: relative; width: 210mm; height: 297mm; overflow: hidden; background: #0a0c26; color: #fff; }
.cover > svg { position: absolute; inset: 0; width: 100%; height: 62%; }
.cover::after { content: ''; position: absolute; left: 0; right: 0; top: 50%; height: 14%; background: linear-gradient(to bottom, rgba(10,12,38,0), #0a0c26); }
.cv-inner { position: absolute; top: 15%; left: 0; right: 0; text-align: center; z-index: 2; text-shadow: 0 2px 12px rgba(0,0,0,.6); }
.cv-crest { font-size: 30pt; color: #ff9ac8; }
.cv-inner::before { content: ''; position: absolute; left: 15%; right: 15%; top: -8mm; bottom: -6mm; background: radial-gradient(ellipse at center, rgba(10,12,38,.75), rgba(10,12,38,0) 70%); z-index: -1; }
.cover h1 { font-size: 22pt; line-height: 1.15; letter-spacing: .04em; }
.cover h1 span { font-size: 34pt; font-weight: 800; color: #ffd9ec; }
.cv-sub { font-family: 'Cinzel', serif; font-size: 13pt; letter-spacing: .14em; margin-top: 10pt; color: #ffe9b8; text-transform: uppercase; }
.cv-stats { margin-top: 8pt; font-size: 11pt; color: #d8cfee; font-style: italic; }
.cv-faces { position: absolute; left: 12mm; right: 12mm; bottom: 24mm; z-index: 2; display: flex; flex-wrap: wrap; justify-content: center; gap: 2.4mm; }
.cv-face { display: block; width: 19mm; height: 19mm; border-radius: 50%; overflow: hidden; box-shadow: 0 0 0 1.4pt var(--c), 0 0 10pt rgba(255,220,170,.25); }
.cv-face svg, .ix-face svg, .sp-face svg { width: 100%; height: 100%; display: block; }
.cv-warn { position: absolute; bottom: 10mm; left: 0; right: 0; text-align: center; font-size: 9pt; color: #b8aed0; letter-spacing: .08em; z-index: 2; }

/* prose pages */
.prose p { font-size: 10.8pt; }
.strategy { margin-top: 8mm; background: var(--card); border: .8pt solid var(--line); border-left: 2.4pt solid var(--gold); border-radius: 2mm; padding: 3mm 5mm; }
.strategy h3 { margin-top: 0; }
.strategy ul { margin: 0; padding-left: 12pt; } .strategy li { margin: 3pt 0; font-size: 10.2pt; }
.cols2 { display: grid; grid-template-columns: 1fr 1fr; gap: 0 9mm; }

/* index */
table.ix { width: 100%; border-collapse: collapse; font-size: 9pt; }
table.ix th { text-align: left; font-family: 'Cinzel', serif; font-size: 7.6pt; letter-spacing: .1em; color: var(--muted); border-bottom: 1pt solid var(--line); padding: 3pt 4pt; }
table.ix td { border-bottom: .6pt solid var(--line); padding: 2.4pt 4pt; vertical-align: middle; }
table.ix td.num { text-align: center; font-family: 'Cinzel', serif; color: var(--plum); }
table.ix tr { break-inside: avoid; }
.ix-face { display: block; width: 22pt; height: 22pt; border-radius: 50%; overflow: hidden; border: 1pt solid var(--c); }

/* heroine pages */
.h-head { display: flex; gap: 5mm; align-items: flex-end; border-bottom: 2.4pt solid var(--c); padding-bottom: 3mm; margin-bottom: 4mm; break-inside: avoid; }
.h-pic { width: 33mm; height: 33mm; flex: 0 0 auto; border-radius: 6mm 6mm 0 0; overflow: hidden; border: 1.4pt solid var(--c); }
.h-pic svg { width: 100%; height: 100%; display: block; }
.h-trope { font-family: 'Cinzel', serif; font-size: 8.4pt; letter-spacing: .14em; text-transform: uppercase; color: var(--ct); }
.h-title h2 { font-size: 19pt; color: var(--ink); margin: 1pt 0 4pt; }
.h-over { font-size: 10.2pt; font-style: italic; color: #4a3d55; margin: 0; }
.h-body { display: grid; grid-template-columns: 50mm 1fr; gap: 5mm; }
aside { font-size: 8.6pt; }
dl.facts { margin: 0 0 4mm; }
dl.facts dt { font-family: 'Cinzel', serif; font-size: 7.4pt; letter-spacing: .12em; text-transform: uppercase; color: var(--ct); margin-top: 5pt; }
dl.facts dd { margin: 1pt 0 0; line-height: 1.35; }
.tips { background: var(--card); border: .8pt solid var(--line); border-left: 2.4pt solid var(--c); border-radius: 2mm; padding: 3mm 3.4mm; }
.tips ul, .en-how ul, .en-how ol { margin: 0; padding-left: 12pt; }
.tips li { margin: 1.6pt 0; line-height: 1.32; }
.ending { background: var(--card); border: .8pt solid var(--line); border-top: 2.4pt solid var(--c); border-radius: 2mm; padding: 2.8mm 3.6mm 2.4mm; margin-bottom: 3.2mm; break-inside: avoid; }
.en-head { display: flex; align-items: center; gap: 6pt; margin-bottom: 3pt; }
.en-head h4 { flex: 1; }
.badge { font-family: 'Cinzel', serif; font-size: 6.8pt; letter-spacing: .12em; text-transform: uppercase; padding: 1.4pt 6pt; border-radius: 8pt; white-space: nowrap; }
.badge.main { background: var(--ct); color: #fff; }
.badge.var { border: .8pt solid var(--ct); color: var(--ct); }
.badge.sp { border: .8pt solid var(--ct); color: var(--ct); }
.en-sum { font-size: 9.8pt; margin-bottom: 4pt; }
.en-how li { margin: 1.4pt 0; font-size: 9.2pt; line-height: 1.32; }

/* specials */
.sp-faces { display: flex; gap: 2mm; margin: 2mm 0 3mm; }
.sp-face { display: block; width: 16mm; height: 16mm; border-radius: 50%; overflow: hidden; border: 1pt solid var(--c); }
.sp-cat { font-size: 22pt; line-height: 1; }

/* checklist */
.checklist { columns: 4; column-gap: 5mm; font-size: 8.2pt; }
.cl-group { break-inside: avoid; margin-bottom: 2.6mm; }
.cl-group b { font-family: 'Cinzel', serif; font-size: 8.4pt; display: block; margin-bottom: 1.4pt; }
.cl-item { display: flex; gap: 5pt; align-items: flex-start; margin: 1.6pt 0; line-height: 1.25; }
.cl-item .box { margin-top: 1.4pt; --c: var(--muted); }
`;

/* ------------------------------------------------------------------ assemble & print */
function doc(body) {
  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Hearts of Generic FantasyLandia: The Complete Guide to Every Ending</title>' +
    '<style>' + fontCss() + CSS + '</style></head><body>' + body + '</body></html>';
}
const coverHtml = doc(cover());
const html = doc(intro() + index() + FL.charOrder.map(heroine).join('') + specials() + checklist());

(async function () {
  const os = require('os');
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'hgf-guide-'));
  if (htmlOut) fs.writeFileSync(htmlOut, html);
  const { chromium } = require('playwright');
  const browser = await chromium.launch();
  async function print(markup, out, footer) {
    const f = path.join(tmpDir, path.basename(out) + '.html');
    fs.writeFileSync(f, markup);
    const page = await browser.newPage();
    await page.goto('file://' + f);
    await page.evaluate(function () { return document.fonts.ready; });
    await page.pdf({
      path: out, format: 'A4', printBackground: true, preferCSSPageSize: true,
      displayHeaderFooter: footer,
      headerTemplate: '<div></div>',
      footerTemplate: '<div style="width:100%;font-size:7pt;color:#9a8ea6;font-family:Georgia,serif;text-align:center;letter-spacing:.08em">' +
        'HEARTS OF GENERIC FANTASYLANDIA · ENDING GUIDE · <span class="pageNumber"></span></div>',
    });
    await page.close();
  }
  const coverPdf = path.join(tmpDir, 'cover.pdf'), bodyPdf = path.join(tmpDir, 'body.pdf');
  await print(coverHtml, coverPdf, false);
  await print(html, bodyPdf, true);
  await browser.close();
  // the cover goes on unnumbered; pages are numbered from the first page of the guide itself
  const py = 'import sys\nfrom pypdf import PdfReader, PdfWriter\nw = PdfWriter()\n' +
    'for f in sys.argv[2:]:\n    for p in PdfReader(f).pages: w.add_page(p)\n' +
    'w.add_metadata({"/Title": "Hearts of Generic FantasyLandia: The Complete Guide to Every Ending", "/Subject": "Every ending and how to reach it"})\n' +
    'w.write(open(sys.argv[1], "wb"))\n';
  require('child_process').execFileSync('python3', ['-c', py, pdfOut, coverPdf, bodyPdf], { stdio: 'inherit' });
  // flag pages that hold only a few stray lines (a layout overflow)
  const check = 'import sys\nfrom pypdf import PdfReader\nr = PdfReader(sys.argv[1])\n' +
    'for i, p in enumerate(r.pages[1:], 2):\n    t = [l for l in p.extract_text().split("\\n") if "ENDING GUIDE" not in l and l.strip()]\n' +
    '    if len(t) < 4: print("  warning: page %d is nearly empty (%d lines)" % (i, len(t)))\n' +
    'print("  %d pages" % len(r.pages))\n';
  require('child_process').execFileSync('python3', ['-c', check, pdfOut], { stdio: 'inherit' });
  console.log('Wrote ' + pdfOut + (htmlOut ? ' and ' + htmlOut : ''));
})().catch(function (e) { console.error(e); process.exit(1); });
