#!/usr/bin/env node
/*
 * Bundle the game into one self-contained HTML file (CSS + JS inlined).
 *   node tools/build-single.js [out.html] [--fragment]
 * --fragment omits <!doctype>/<html>/<head>/<body> (for hosts that wrap the page themselves).
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const args = process.argv.slice(2);
const fragment = args.indexOf('--fragment') >= 0;
const out = args.find((a) => !a.startsWith('--')) || path.join(ROOT, 'dist', 'hearts-of-generic-fantasylandia.html');

const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(ROOT, 'css/style.css'), 'utf8');
const scripts = [];
html.replace(/<script src="([^"]+)"><\/script>/g, function (_, src) { scripts.push(src); });
const js = scripts.map(function (src) {
  return '/* ---- ' + src + ' ---- */\n' + fs.readFileSync(path.join(ROOT, src), 'utf8').replace(/<\/script/gi, '<\\/script');
}).join('\n');

const body = html.slice(html.indexOf('<body>') + 6, html.indexOf('<script'));
const head = '<title>Hearts of Generic FantasyLandia</title>\n' +
  '<link rel="preconnect" href="https://fonts.googleapis.com">\n' +
  '<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;800&family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">\n' +
  '<style>\n' + css + '\n</style>\n';
const page = fragment
  ? head + body + '<script>\n' + js + '\n</script>\n'
  : '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    head + '</head>\n<body>' + body + '<script>\n' + js + '\n</script>\n</body>\n</html>\n';

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, page);
console.log('Wrote ' + out + ' (' + Math.round(page.length / 1024) + ' KB)');
