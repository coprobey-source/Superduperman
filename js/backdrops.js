/*
 * Procedural location backdrops: FL.backdrop(locId, slot) returns an SVG banner
 * (viewBox 800 x 250) drawn for the time of day (0 morning, 1 afternoon, 2 evening).
 */
(function (root) {
  'use strict';
  const FL = (root.FL = root.FL || {});
  let uid = 0;

  /* ------------------------------------------------------------------ helpers */
  function rng(seed) {
    let x = seed;
    return function () { x = (x * 16807) % 2147483647; return (x - 1) / 2147483646; };
  }
  function f(n) { return Math.round(n * 10) / 10; }
  function mix(a, b, t) {
    const pa = [1, 3, 5].map(function (i) { return parseInt(a.substr(i, 2), 16); });
    const pb = [1, 3, 5].map(function (i) { return parseInt(b.substr(i, 2), 16); });
    return '#' + pa.map(function (v, i) { return Math.round(v + (pb[i] - v) * t).toString(16).padStart(2, '0'); }).join('');
  }

  function Pic(slot) {
    this.p = 'bd' + (++uid) + '_';
    this.n = 0;
    this.defs = [];
    this.slot = slot;
    this.night = slot === 2;
    // how strongly to tint scene colors toward the time of day
    this.tint = ['#ffd9a8', null, '#2a3a7a'][slot];
    this.tintAmt = [0.12, 0, 0.5][slot];
  }
  Pic.prototype.id = function () { return this.p + (++this.n); };
  Pic.prototype.lin = function (stops, vertical) {
    const id = this.id();
    this.defs.push('<linearGradient id="' + id + '" x1="0" y1="0" x2="' + (vertical === false ? 1 : 0) + '" y2="' + (vertical === false ? 0 : 1) + '">' +
      stops.map(function (s) { return '<stop offset="' + s[0] + '" stop-color="' + s[1] + '"' + (s[2] != null ? ' stop-opacity="' + s[2] + '"' : '') + '/>'; }).join('') + '</linearGradient>');
    return 'url(#' + id + ')';
  };
  Pic.prototype.rad = function (stops) {
    const id = this.id();
    this.defs.push('<radialGradient id="' + id + '">' +
      stops.map(function (s) { return '<stop offset="' + s[0] + '" stop-color="' + s[1] + '"' + (s[2] != null ? ' stop-opacity="' + s[2] + '"' : '') + '/>'; }).join('') + '</radialGradient>');
    return 'url(#' + id + ')';
  };
  // tint a color toward the time of day
  Pic.prototype.c = function (col) { return this.tint ? mix(col, this.tint, this.tintAmt) : col; };
  Pic.prototype.glow = function (x, y, r, col, op) {
    return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + this.rad([[0, col, op == null ? 0.7 : op], [1, col, 0]]) + '"/>';
  };

  /* ------------------------------------------------------------------ sky & land */
  const SKY = [
    [['0', '#7fb0e8'], ['0.6', '#f6c9a8'], ['1', '#ffe2b8']],   // morning
    [['0', '#4a8ee0'], ['0.7', '#9fd0f6'], ['1', '#d8eefa']],   // afternoon
    [['0', '#0c0f2a'], ['0.6', '#1e2458'], ['1', '#3a3270']],   // evening
  ];
  Pic.prototype.sky = function (seed) {
    let s = '<rect width="800" height="250" fill="' + this.lin(SKY[this.slot]) + '"/>';
    const r = rng(seed || 7);
    if (this.night) {
      for (let i = 0; i < 70; i++) {
        const x = r() * 800, y = r() * 150, z = r();
        s += '<circle cx="' + f(x) + '" cy="' + f(y) + '" r="' + f(0.5 + z * 1.2) + '" fill="#ffffff" opacity="' + f(0.35 + z * 0.6) + '"/>';
      }
      s += this.glow(650, 50, 60, '#fff6d8', 0.35) + '<circle cx="650" cy="50" r="18" fill="#fbf4dc"/><circle cx="657" cy="45" r="15" fill="' + mix('#1e2458', '#3a3270', 0.2) + '" opacity="0.9"/>';
    } else {
      const sx = this.slot === 0 ? 120 : 600, sy = this.slot === 0 ? 120 : 45;
      s += this.glow(sx, sy, 110, this.slot === 0 ? '#fff0c0' : '#ffffff', 0.6) + '<circle cx="' + sx + '" cy="' + sy + '" r="20" fill="' + (this.slot === 0 ? '#fff2c8' : '#fffdf0') + '"/>';
      for (let i = 0; i < 4; i++) s += this.cloud(80 + r() * 640, 20 + r() * 70, 0.6 + r() * 0.6);
    }
    return s;
  };
  Pic.prototype.cloud = function (x, y, k) {
    const col = this.slot === 0 ? '#fff4ec' : '#ffffff';
    return '<g opacity="' + (this.slot === 0 ? 0.75 : 0.85) + '" fill="' + col + '" transform="translate(' + f(x) + ' ' + f(y) + ') scale(' + f(k) + ')">' +
      '<ellipse cx="0" cy="0" rx="34" ry="12"/><ellipse cx="-18" cy="-6" rx="16" ry="12"/><ellipse cx="10" cy="-10" rx="20" ry="15"/><ellipse cx="28" cy="-2" rx="14" ry="10"/></g>';
  };
  Pic.prototype.hills = function (y, col, amp, seed) {
    const r = rng(seed || 3);
    let d = 'M0 250 L0 ' + y;
    for (let x = 0; x <= 800; x += 100) d += ' Q' + (x + 50) + ' ' + f(y - amp * (0.4 + r())) + ' ' + (x + 100) + ' ' + f(y + (r() - 0.5) * amp * 0.5);
    return '<path fill="' + this.c(col) + '" d="' + d + ' L800 250 Z"/>';
  };
  Pic.prototype.pine = function (x, y, h, col) {
    const w = h * 0.36;
    let d = '';
    for (let i = 0; i < 3; i++) {
      const ty = y - h + i * h * 0.24, by = y - h * 0.32 + i * h * 0.18, ww = w * (0.55 + i * 0.25);
      d += 'M' + f(x) + ' ' + f(ty) + ' L' + f(x + ww) + ' ' + f(by) + ' L' + f(x - ww) + ' ' + f(by) + ' Z ';
    }
    return '<path fill="' + this.c(col) + '" d="' + d + '"/><rect x="' + f(x - h * 0.03) + '" y="' + f(y - h * 0.16) + '" width="' + f(h * 0.06) + '" height="' + f(h * 0.16) + '" fill="' + this.c('#3a2a1a') + '"/>';
  };
  Pic.prototype.tree = function (x, y, h, col) {
    return '<rect x="' + f(x - h * 0.05) + '" y="' + f(y - h * 0.45) + '" width="' + f(h * 0.1) + '" height="' + f(h * 0.45) + '" fill="' + this.c('#4a3220') + '"/>' +
      '<g fill="' + this.c(col) + '"><circle cx="' + f(x) + '" cy="' + f(y - h * 0.62) + '" r="' + f(h * 0.3) + '"/><circle cx="' + f(x - h * 0.22) + '" cy="' + f(y - h * 0.48) + '" r="' + f(h * 0.22) + '"/><circle cx="' + f(x + h * 0.22) + '" cy="' + f(y - h * 0.5) + '" r="' + f(h * 0.22) + '"/></g>' +
      '<circle cx="' + f(x - h * 0.08) + '" cy="' + f(y - h * 0.72) + '" r="' + f(h * 0.12) + '" fill="#ffffff" opacity="0.12"/>';
  };
  // a storybook house: walls, roof, door, windows (lit at night)
  Pic.prototype.house = function (x, y, w, h, wall, roof, seed) {
    const r = rng(seed || 11);
    const rh = h * 0.55;
    let s = '<rect x="' + x + '" y="' + (y - h) + '" width="' + w + '" height="' + h + '" fill="' + this.c(wall) + '" stroke="' + this.c('#3a2a24') + '" stroke-width="1.2"/>';
    s += '<path fill="' + this.c(roof) + '" stroke="' + this.c('#2a1a18') + '" stroke-width="1.2" d="M' + (x - 6) + ' ' + (y - h) + ' L' + (x + w / 2) + ' ' + f(y - h - rh) + ' L' + (x + w + 6) + ' ' + (y - h) + ' Z"/>';
    // timber beams
    s += '<path fill="none" stroke="' + this.c('#5a3a28') + '" stroke-width="2" opacity="0.7" d="M' + x + ' ' + f(y - h * 0.55) + ' L' + (x + w) + ' ' + f(y - h * 0.55) + '"/>';
    const lit = this.night ? '#ffd27a' : this.c('#9cc4e4');
    const cols = Math.max(1, Math.floor(w / 26));
    for (let i = 0; i < cols; i++) {
      const wx = x + (w / cols) * (i + 0.5) - 6;
      [y - h * 0.85, y - h * 0.45].forEach(function (wy, k) {
        if (k === 1 && i === Math.floor(cols / 2)) return;
        const on = this.night && r() < 0.7;
        s += '<rect x="' + f(wx) + '" y="' + f(wy) + '" width="12" height="14" fill="' + (on ? lit : this.c('#6a8aa8')) + '" stroke="' + this.c('#3a2a24') + '" stroke-width="1"/>';
        if (on) s += this.glow(wx + 6, wy + 7, 16, '#ffc860', 0.35);
      }, this);
    }
    const dx = x + w / 2 - 7;
    s += '<path fill="' + this.c('#5a3a24') + '" d="M' + f(dx) + ' ' + y + ' L' + f(dx) + ' ' + f(y - 22) + ' Q' + f(dx + 7) + ' ' + f(y - 29) + ' ' + f(dx + 14) + ' ' + f(y - 22) + ' L' + f(dx + 14) + ' ' + y + ' Z"/>';
    return s;
  };
  Pic.prototype.lantern = function (x, y) {
    let s = '<path stroke="' + this.c('#2a2028') + '" stroke-width="2" d="M' + x + ' ' + (y + 40) + ' L' + x + ' ' + y + '"/>';
    s += '<rect x="' + (x - 5) + '" y="' + (y - 10) + '" width="10" height="12" fill="' + (this.night ? '#ffd27a' : this.c('#d8c8a0')) + '" stroke="' + this.c('#2a2028') + '"/>';
    if (this.night) s += this.glow(x, y - 4, 30, '#ffc860', 0.5);
    return s;
  };
  Pic.prototype.bunting = function (x1, x2, y, sag) {
    const colors = ['#e84a5a', '#f2c14e', '#4a9ae8', '#7ac85a', '#b07af0'];
    let s = '<path fill="none" stroke="' + this.c('#5a4a3a') + '" stroke-width="1.2" d="M' + x1 + ' ' + y + ' Q' + ((x1 + x2) / 2) + ' ' + (y + sag * 2) + ' ' + x2 + ' ' + y + '"/>';
    const n = Math.floor((x2 - x1) / 22);
    for (let i = 1; i < n; i++) {
      const t = i / n, x = x1 + (x2 - x1) * t, yy = y + sag * 4 * t * (1 - t) * 0.98;
      s += '<path fill="' + this.c(colors[i % colors.length]) + '" d="M' + f(x - 6) + ' ' + f(yy) + ' L' + f(x + 6) + ' ' + f(yy) + ' L' + f(x) + ' ' + f(yy + 12) + ' Z"/>';
    }
    return s;
  };
  // interior walls: plank wall with warm light
  Pic.prototype.interior = function (wall, floor, light) {
    let s = '<rect width="800" height="250" fill="' + this.lin([[0, wall], [1, mix(wall, '#000000', 0.35)]]) + '"/>';
    for (let x = 0; x < 800; x += 46) s += '<path stroke="' + mix(wall, '#000000', 0.3) + '" stroke-width="1.5" opacity="0.5" d="M' + x + ' 0 L' + x + ' 200"/>';
    s += '<rect y="196" width="800" height="54" fill="' + this.lin([[0, floor], [1, mix(floor, '#000000', 0.4)]]) + '"/>';
    for (let x = -40; x < 840; x += 60) s += '<path stroke="' + mix(floor, '#000000', 0.35) + '" stroke-width="1" d="M' + (x + 20) + ' 196 L' + (x - 30) + ' 250"/>';
    if (light) s += this.glow(light[0], light[1], light[2], light[3], 0.45);
    return s;
  };
  Pic.prototype.beam = function (y) {
    return '<rect x="0" y="' + y + '" width="800" height="14" fill="#4a3020" stroke="#2a1a10"/>' +
      [80, 300, 520, 740].map(function (x) { return '<path fill="#4a3020" stroke="#2a1a10" d="M' + (x - 8) + ' ' + y + ' L' + (x + 8) + ' ' + y + ' L' + (x + 8) + ' 200 L' + (x - 8) + ' 200 Z"/>'; }).join('');
  };
  Pic.prototype.window = function (x, y, w, h) {
    const glass = this.lin(SKY[this.slot]);
    let s = '<rect x="' + (x - 6) + '" y="' + (y - 6) + '" width="' + (w + 12) + '" height="' + (h + 12) + '" fill="#3a2418"/>';
    s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + glass + '"/>';
    if (this.night) s += '<circle cx="' + (x + w * 0.7) + '" cy="' + (y + h * 0.3) + '" r="5" fill="#fbf4dc"/>';
    s += '<path stroke="#3a2418" stroke-width="4" d="M' + (x + w / 2) + ' ' + y + ' L' + (x + w / 2) + ' ' + (y + h) + ' M' + x + ' ' + (y + h / 2) + ' L' + (x + w) + ' ' + (y + h / 2) + '"/>';
    return s;
  };
  Pic.prototype.finish = function (body) {
    // a soft vignette, plus a night wash for outdoor scenes
    const vig = this.rad([[0.55, '#000000', 0], [1, '#000000', 0.45]]);
    return '<svg viewBox="0 0 800 250" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">' +
      '<defs>' + this.defs.join('') + '</defs>' + body +
      '<rect width="800" height="250" fill="' + vig + '" transform="translate(400 125) scale(1.6 1) translate(-400 -125)"/></svg>';
  };

  /* ------------------------------------------------------------------ locations */
  const DRAW = {
    square: function (P) {
      let s = P.sky(5) + P.hills(150, '#7aa86a', 20, 4);
      s += P.house(10, 200, 110, 90, '#e8d8b8', '#a84a3a', 1) + P.house(130, 200, 90, 110, '#d8c8e0', '#5a4a8a', 2) +
        P.house(560, 200, 100, 100, '#f0e0c8', '#3a6a8a', 3) + P.house(670, 200, 120, 85, '#e0c8a8', '#a86a3a', 4);
      s += '<rect y="196" width="800" height="54" fill="' + P.c('#b8a890') + '"/>';
      for (let i = 0; i < 40; i++) s += '<rect x="' + ((i * 37) % 800) + '" y="' + (200 + (i * 13) % 46) + '" width="22" height="9" rx="3" fill="' + P.c('#a89880') + '" opacity="0.7"/>';
      // fountain + statue
      s += '<ellipse cx="400" cy="214" rx="120" ry="20" fill="' + P.c('#8a8a9a') + '"/><ellipse cx="400" cy="208" rx="110" ry="16" fill="' + P.c('#6ab0d8') + '"/>' +
        '<rect x="388" y="130" width="24" height="80" fill="' + P.c('#a8a8b8') + '"/><ellipse cx="400" cy="160" rx="40" ry="8" fill="' + P.c('#9a9aaa') + '"/>' +
        '<path fill="' + P.c('#b8b8c8') + '" d="M392 130 L388 96 Q400 84 412 96 L408 130 Z M396 86 a6 7 0 1 1 8 0 Z M410 98 L432 74 L436 78 L414 104 Z"/>' +
        '<path fill="none" stroke="' + P.c('#cfefff') + '" stroke-width="2" opacity="0.8" d="M372 158 Q350 170 346 200 M428 158 Q450 170 454 200"/>';
      s += P.lantern(270, 160) + P.lantern(530, 160) + P.bunting(110, 260, 120, 10) + P.bunting(540, 690, 116, 10);
      return s;
    },
    market: function (P) {
      let s = P.sky(9) + P.house(0, 190, 130, 110, '#e8d0b0', '#7a4a3a', 5) + P.house(660, 190, 140, 115, '#d8e0c8', '#4a6a3a', 6) + P.house(250, 160, 100, 70, '#e0d0e8', '#6a4a7a', 7) + P.house(450, 160, 100, 75, '#f0e0c0', '#8a5a2a', 8);
      s += '<rect y="190" width="800" height="60" fill="' + P.c('#b0a088') + '"/>';
      const stall = function (x, c1, c2, goods) {
        let g = '<rect x="' + (x + 4) + '" y="150" width="6" height="60" fill="' + P.c('#5a3a24') + '"/><rect x="' + (x + 120) + '" y="150" width="6" height="60" fill="' + P.c('#5a3a24') + '"/>';
        g += '<rect x="' + x + '" y="186" width="130" height="28" fill="' + P.c('#8a5a34') + '" stroke="' + P.c('#4a2a14') + '"/>';
        for (let i = 0; i < 6; i++) g += '<path fill="' + P.c(i % 2 ? c1 : c2) + '" d="M' + (x - 6 + i * 23.6) + ' 140 L' + (x - 6 + (i + 1) * 23.6) + ' 140 L' + (x - 6 + (i + 1) * 23.6) + ' 158 Q' + (x - 6 + (i + 0.5) * 23.6) + ' 166 ' + (x - 6 + i * 23.6) + ' 158 Z"/>';
        goods.forEach(function (gd, i) { g += '<circle cx="' + (x + 16 + i * 16) + '" cy="182" r="7" fill="' + P.c(gd) + '"/>'; });
        return g;
      };
      s += stall(40, '#e84a5a', '#fbf4ea', ['#e84a3a', '#f2a03a', '#7ac85a', '#e84a3a', '#f2c14e', '#a85ad8', '#e84a3a']) +
        stall(330, '#4a9ae8', '#fbf4ea', ['#c8a878', '#e8d8a8', '#c89858', '#e8d8a8', '#c8a878', '#e8d8a8', '#c89858']) +
        stall(620, '#7ac85a', '#fbf4ea', ['#ff8ab8', '#ffffff', '#f2c14e', '#ff6a8a', '#b07af0', '#ffffff', '#ff8ab8']);
      s += P.bunting(0, 400, 40, 18) + P.bunting(400, 800, 40, 18);
      if (P.night) s += P.lantern(200, 120) + P.lantern(500, 120);
      return s;
    },
    tavern: function (P) {
      let s = P.interior('#6a4028', '#5a3a22', [640, 150, 220, '#ff9a3a']) + P.window(60, 50, 90, 80) + P.beam(20);
      // fireplace
      s += '<path fill="#6a6a72" stroke="#3a3a42" d="M560 196 L560 90 L720 90 L720 196 Z"/><path fill="#1a1010" d="M590 196 L590 130 Q640 104 690 130 L690 196 Z"/>' +
        '<path fill="#ff8a2a" d="M600 196 Q610 160 625 175 Q632 140 645 172 Q660 150 668 178 Q680 165 682 196 Z"/><path fill="#ffd25a" d="M615 196 Q628 172 640 186 Q652 168 664 196 Z"/>';
      // tables & barrels
      s += '<ellipse cx="300" cy="200" rx="70" ry="12" fill="#7a4a2a"/><rect x="292" y="200" width="16" height="36" fill="#5a3418"/>' +
        '<rect x="270" y="178" width="12" height="20" rx="2" fill="#d8b860" stroke="#7a5a20"/><rect x="318" y="180" width="12" height="18" rx="2" fill="#d8b860" stroke="#7a5a20"/>';
      [[430, 190], [470, 196], [450, 160]].forEach(function (b) {
        s += '<rect x="' + (b[0] - 22) + '" y="' + (b[1] - 34) + '" width="44" height="40" rx="10" fill="#8a5a32" stroke="#3a2010" stroke-width="1.5"/>' +
          '<path stroke="#3a3a3a" stroke-width="3" d="M' + (b[0] - 22) + ' ' + (b[1] - 26) + ' L' + (b[0] + 22) + ' ' + (b[1] - 26) + ' M' + (b[0] - 22) + ' ' + (b[1] - 4) + ' L' + (b[0] + 22) + ' ' + (b[1] - 4) + '"/>';
      });
      s += '<g transform="translate(200 40)"><path stroke="#2a1a10" stroke-width="2" d="M0 0 L0 20 M60 0 L60 20"/><rect x="-10" y="20" width="80" height="34" rx="4" fill="#a8783a" stroke="#4a2a10"/><path fill="#5ab05a" d="M12 46 Q20 26 34 30 Q50 22 52 34 L58 30 L52 42 Q36 50 22 44 Z"/></g>';
      return s;
    },
    guild: function (P) {
      let s = P.interior('#5a5048', '#4a3e34', [400, 80, 300, '#ffe0a0']) + P.beam(14);
      // banners
      [[120, '#a83a3a'], [680, '#3a5aa8']].forEach(function (b) {
        s += '<path fill="' + b[1] + '" stroke="#2a1a1a" d="M' + (b[0] - 30) + ' 28 L' + (b[0] + 30) + ' 28 L' + (b[0] + 30) + ' 140 L' + b[0] + ' 120 L' + (b[0] - 30) + ' 140 Z"/>' +
          '<path fill="#f2c14e" d="M' + b[0] + ' 58 l14 10 l-6 18 l-16 0 l-6 -18 Z"/>';
      });
      // quest board
      s += '<rect x="300" y="60" width="200" height="120" fill="#8a5a32" stroke="#3a2010" stroke-width="3"/>';
      const r = rng(4);
      for (let i = 0; i < 9; i++) s += '<rect x="' + f(312 + (i % 3) * 62 + r() * 6) + '" y="' + f(70 + Math.floor(i / 3) * 36 + r() * 4) + '" width="44" height="30" fill="#f4ead0" transform="rotate(' + f((r() - 0.5) * 8) + ' ' + (330 + (i % 3) * 62) + ' ' + (85 + Math.floor(i / 3) * 36) + ')"/>';
      s += '<g fill="#b8c0c8" stroke="#4a4a52"><circle cx="230" cy="120" r="26"/><circle cx="570" cy="120" r="26"/></g><path stroke="#6a6a72" stroke-width="4" d="M210 100 L250 140 M250 100 L210 140 M550 100 L590 140 M590 100 L550 140"/>';
      return s;
    },
    artisan: function (P) {
      let s = P.sky(13) + P.house(30, 200, 170, 110, '#7a6a5a', '#4a3a32', 9) + P.house(520, 200, 160, 120, '#c8b090', '#6a5a3a', 10);
      s += '<rect y="196" width="800" height="54" fill="' + P.c('#8a7a68') + '"/>';
      // chimneys & smoke
      s += '<rect x="150" y="40" width="24" height="70" fill="' + P.c('#5a4a42') + '"/>';
      for (let i = 0; i < 5; i++) s += '<circle cx="' + (162 + i * 10) + '" cy="' + (34 - i * 9) + '" r="' + (8 + i * 3) + '" fill="#cfcfd8" opacity="' + (0.5 - i * 0.08) + '"/>';
      s += P.glow(110, 170, 70, '#ff7a2a', P.night ? 0.8 : 0.45) + '<path fill="#2a1a14" d="M88 200 L88 160 Q110 144 132 160 L132 200 Z"/><path fill="#ff8a2a" d="M94 200 Q104 176 112 188 Q120 172 126 200 Z"/>';
      // anvil + gear sign
      s += '<path fill="' + P.c('#3a3a42') + '" d="M250 200 L262 176 L240 168 L300 168 L322 176 L290 176 L300 200 Z"/>';
      s += '<g transform="translate(600 60)" fill="' + P.c('#c8a050') + '" stroke="' + P.c('#6a5020') + '" stroke-width="1.5"><circle r="18"/>' +
        [0, 45, 90, 135, 180, 225, 270, 315].map(function (a) { return '<rect x="-5" y="-26" width="10" height="10" transform="rotate(' + a + ')"/>'; }).join('') + '<circle r="7" fill="' + P.c('#6a5020') + '"/></g>';
      return s;
    },
    library: function (P) {
      let s = P.interior('#3a2a3a', '#4a3424', [400, 60, 260, P.night ? '#8a7aff' : '#fff0c0']);
      // stained glass
      s += '<path fill="#2a1a10" d="M340 180 L340 60 Q400 0 460 60 L460 180 Z"/>';
      const glass = ['#e84a5a', '#4a8ee0', '#f2c14e', '#7ac85a', '#b07af0'];
      for (let i = 0; i < 10; i++) s += '<rect x="' + (350 + (i % 5) * 20) + '" y="' + (70 + Math.floor(i / 5) * 50) + '" width="18" height="48" fill="' + glass[(i * 3) % 5] + '" opacity="0.85"/>';
      s += '<path fill="' + glass[4] + '" opacity="0.85" d="M350 68 Q400 14 450 68 Z"/>';
      // shelves
      const shelf = function (x) {
        let g = '<rect x="' + x + '" y="10" width="140" height="190" fill="#5a3a24" stroke="#2a1a10" stroke-width="2"/>';
        const r = rng(x + 1);
        for (let row = 0; row < 5; row++) {
          const y = 18 + row * 37;
          g += '<rect x="' + x + '" y="' + (y + 32) + '" width="140" height="5" fill="#3a2414"/>';
          let bx = x + 6;
          while (bx < x + 130) {
            const w = 6 + r() * 8, h = 20 + r() * 10;
            g += '<rect x="' + f(bx) + '" y="' + f(y + 32 - h) + '" width="' + f(w) + '" height="' + f(h) + '" fill="' + ['#8a2a2a', '#2a4a7a', '#3a6a3a', '#7a5a2a', '#5a2a6a', '#a8883a'][Math.floor(r() * 6)] + '"/>';
            bx += w + 1;
          }
        }
        return g;
      };
      s += shelf(20) + shelf(170) + shelf(490) + shelf(640);
      for (let i = 0; i < 14; i++) s += '<circle cx="' + (330 + (i * 47) % 140) + '" cy="' + (90 + (i * 31) % 90) + '" r="1.5" fill="#fff4c8" opacity="0.6"/>';
      return s;
    },
    temple: function (P) {
      let s = P.sky(17) + P.hills(180, '#8ab07a', 14, 6);
      s += '<rect x="250" y="120" width="300" height="80" fill="' + P.c('#f4f0e8') + '"/>' +
        '<path fill="' + P.c('#e8e0d0') + '" d="M230 120 L400 70 L570 120 Z"/>' +
        '<path fill="' + P.c('#f8f4ec') + '" d="M330 70 Q400 -10 470 70 Z"/><path fill="#f2c14e" d="M396 12 h8 v-14 h-8 Z M392 0 h16 v4 h-16 Z"/>';
      for (let x = 268; x <= 532; x += 44) s += '<rect x="' + x + '" y="124" width="14" height="76" fill="' + P.c('#ffffff') + '" stroke="' + P.c('#c8c0b0') + '"/>';
      s += '<path fill="' + (P.night ? '#ffd27a' : P.c('#c8a050')) + '" d="M384 200 L384 160 Q400 146 416 160 L416 200 Z"/>';
      if (P.night) { s += P.glow(400, 180, 120, '#ffd27a', 0.45); for (let i = 0; i < 12; i++) s += '<circle cx="' + (280 + i * 22) + '" cy="206" r="2.4" fill="#ffe08a"/>'; }
      s += '<rect y="200" width="800" height="50" fill="' + P.c('#e0d8c8') + '"/><path fill="' + P.c('#d0c8b8') + '" d="M250 200 L550 200 L590 250 L210 250 Z"/>';
      s += P.tree(100, 210, 90, '#5a9a4a') + P.tree(700, 214, 100, '#5a9a4a');
      return s;
    },
    noble: function (P) {
      let s = P.sky(21) + '<rect x="230" y="70" width="340" height="120" fill="' + P.c('#e8e0f0') + '" stroke="' + P.c('#8a7a9a') + '"/>' +
        '<path fill="' + P.c('#5a4a7a') + '" d="M220 70 L300 30 L500 30 L580 70 Z"/>';
      for (let i = 0; i < 6; i++) {
        const lit = P.night && i % 2;
        s += '<rect x="' + (250 + i * 54) + '" y="90" width="20" height="34" rx="10" fill="' + (lit ? '#ffd27a' : P.c('#8ab0d0')) + '"/><rect x="' + (250 + i * 54) + '" y="140" width="20" height="34" rx="10" fill="' + (P.night && !(i % 3) ? '#ffd27a' : P.c('#8ab0d0')) + '"/>';
      }
      // hedges with white roses
      s += '<rect y="170" width="800" height="80" fill="' + P.c('#3a6a3a') + '"/>';
      for (let x = 0; x < 800; x += 70) s += '<ellipse cx="' + (x + 35) + '" cy="176" rx="40" ry="20" fill="' + P.c('#4a7a42') + '"/>';
      const r = rng(9);
      for (let i = 0; i < 40; i++) s += '<circle cx="' + f(r() * 800) + '" cy="' + f(162 + r() * 40) + '" r="3" fill="' + (P.night ? '#f4f4ff' : '#ffffff') + '"/>';
      s += '<path fill="' + P.c('#d8d0c8') + '" d="M330 250 L370 196 L430 196 L470 250 Z"/>';
      // fountain urn
      s += '<path fill="' + P.c('#e0e0e8') + '" d="M390 200 L384 176 Q400 168 416 176 L410 200 Z"/><ellipse cx="400" cy="176" rx="24" ry="6" fill="' + P.c('#cfd8e8') + '"/>';
      return s;
    },
    arena: function (P) {
      let s = P.sky(25);
      s += '<path fill="' + P.c('#c8a878') + '" d="M0 60 Q400 10 800 60 L800 200 L0 200 Z"/>';
      for (let i = 0; i < 16; i++) {
        const x = 20 + i * 50;
        s += '<path fill="' + P.c('#5a4030') + '" d="M' + x + ' 160 L' + x + ' ' + (110 - Math.sin(i / 15 * Math.PI) * 30) + ' Q' + (x + 15) + ' ' + (96 - Math.sin(i / 15 * Math.PI) * 30) + ' ' + (x + 30) + ' ' + (110 - Math.sin(i / 15 * Math.PI) * 30) + ' L' + (x + 30) + ' 160 Z"/>';
      }
      s += '<rect y="160" width="800" height="90" fill="' + P.c('#e0c890') + '"/>';
      [[120, '#a83a3a'], [400, '#3a5aa8'], [680, '#a83a3a']].forEach(function (b) {
        s += '<path stroke="' + P.c('#5a4030') + '" stroke-width="3" d="M' + b[0] + ' 20 L' + b[0] + ' 60"/><path fill="' + P.c(b[1]) + '" d="M' + b[0] + ' 20 L' + (b[0] + 40) + ' 26 L' + b[0] + ' 34 Z"/>';
      });
      // training dummies
      [[200, 210], [600, 214]].forEach(function (d) {
        s += '<path stroke="' + P.c('#6a4a2a') + '" stroke-width="5" d="M' + d[0] + ' ' + d[1] + ' L' + d[0] + ' ' + (d[1] - 60) + ' M' + (d[0] - 24) + ' ' + (d[1] - 44) + ' L' + (d[0] + 24) + ' ' + (d[1] - 44) + '"/>' +
          '<ellipse cx="' + d[0] + '" cy="' + (d[1] - 40) + '" rx="12" ry="18" fill="' + P.c('#d8c078') + '"/><circle cx="' + d[0] + '" cy="' + (d[1] - 64) + '" r="9" fill="' + P.c('#d8c078') + '"/>';
      });
      if (P.night) s += P.lantern(60, 120) + P.lantern(740, 120) + P.lantern(400, 116);
      return s;
    },
    docks: function (P) {
      let s = P.sky(29);
      const sea = P.night ? [[0, '#1a2a5a'], [1, '#0a1230']] : P.slot === 0 ? [[0, '#e8b898'], [0.3, '#5a8ac8'], [1, '#2a4a8a']] : [[0, '#6ab0e0'], [1, '#2a5a9a']];
      s += '<rect y="130" width="800" height="120" fill="' + P.lin(sea) + '"/>';
      for (let i = 0; i < 18; i++) s += '<path fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.35" d="M' + ((i * 97) % 760) + ' ' + (150 + (i * 23) % 80) + ' q10 -4 20 0 t20 0"/>';
      if (P.night) s += '<path fill="#fbf4dc" opacity="0.25" d="M640 132 L660 132 L700 250 L600 250 Z"/>';
      // ship with crimson sails
      s += '<path fill="' + P.c('#4a2a18') + '" d="M480 150 L640 150 L620 176 L500 176 Z"/><path stroke="' + P.c('#3a2010') + '" stroke-width="4" d="M540 150 L540 50 M590 150 L590 64"/>' +
        '<path fill="' + P.c('#b8202a') + '" d="M542 56 Q570 80 542 104 Z M542 108 Q576 124 542 144 Z M592 70 Q616 92 592 112 Z"/><path fill="#1a1a1a" d="M540 50 L516 44 L540 40 Z"/>';
      // pier
      s += '<rect x="0" y="180" width="360" height="16" fill="' + P.c('#7a5434') + '"/>';
      for (let x = 10; x < 360; x += 50) s += '<rect x="' + x + '" y="180" width="10" height="70" fill="' + P.c('#5a3a22') + '"/>';
      s += '<rect x="40" y="150" width="34" height="30" fill="' + P.c('#8a6a3a') + '" stroke="' + P.c('#4a3018') + '"/><rect x="80" y="160" width="26" height="20" fill="' + P.c('#8a6a3a') + '" stroke="' + P.c('#4a3018') + '"/>';
      if (!P.night) s += '<path fill="none" stroke="#ffffff" stroke-width="2" d="M200 60 q8 -8 16 0 q8 -8 16 0 M280 40 q6 -6 12 0 q6 -6 12 0"/>';
      else s += P.lantern(300, 140);
      // a shimmer of tail on the rocks
      s += '<ellipse cx="740" cy="190" rx="50" ry="16" fill="' + P.c('#5a5a6a') + '"/><path fill="' + P.c('#3fc4b8') + '" d="M730 180 Q750 170 760 176 L770 168 L768 182 Q750 186 730 180 Z"/>';
      return s;
    },
    sewers: function (P) {
      let s = '<rect width="800" height="250" fill="#1e2420"/>';
      for (let y = 0; y < 200; y += 18) for (let x = (y / 18) % 2 ? -30 : 0; x < 800; x += 60) s += '<rect x="' + x + '" y="' + y + '" width="58" height="16" fill="#2e3630" stroke="#1a201c"/>';
      s += '<path fill="#0e1210" d="M200 200 L200 90 Q400 -20 600 90 L600 200 Z"/>';
      s += '<path fill="none" stroke="#4a564e" stroke-width="10" d="M200 200 L200 90 Q400 -20 600 90 L600 200"/>';
      s += '<rect y="190" width="800" height="60" fill="' + 'url(#__w)' + '"/>';
      s = s.replace('url(#__w)', P.lin([[0, '#3a8a4a'], [1, '#1a3a24']]));
      s += P.glow(400, 210, 220, '#7aff8a', 0.25);
      for (let i = 0; i < 9; i++) s += '<circle cx="' + (100 + i * 80) + '" cy="' + (205 + (i % 3) * 12) + '" r="' + (3 + i % 3) + '" fill="#9aff9a" opacity="0.5"/>';
      s += '<path fill="#5ac85a" opacity="0.75" d="M640 200 Q650 170 670 170 Q690 170 696 200 Z"/><circle cx="660" cy="182" r="3" fill="#1a3a1a"/><circle cx="676" cy="182" r="3" fill="#1a3a1a"/>';
      s += '<path stroke="#5a4a3a" stroke-width="3" d="M80 60 L80 200 M100 60 L100 200 M80 80 L100 80 M80 110 L100 110 M80 140 L100 140 M80 170 L100 170"/>';
      return s;
    },
    forest: function (P) {
      let s = P.sky(33) + P.hills(130, '#4a7a5a', 18, 8);
      const r = rng(5);
      for (let i = 0; i < 14; i++) s += P.pine(i * 60 + r() * 30, 160, 70 + r() * 30, '#3a6a4a');
      s += '<rect y="150" width="800" height="100" fill="' + P.c('#3a5a2a') + '"/>';
      for (let i = 0; i < 9; i++) s += P.pine(i * 95 + r() * 40, 230, 120 + r() * 40, '#2a5a3a');
      s += '<rect y="120" width="800" height="70" fill="#ffffff" opacity="' + (P.night ? 0.06 : 0.16) + '"/>';
      // path
      s += '<path fill="' + P.c('#8a7a5a') + '" d="M360 250 Q390 200 420 180 L440 180 Q430 210 470 250 Z"/>';
      if (P.night) {
        for (let i = 0; i < 12; i++) { const x = 40 + r() * 720, y = 200 + r() * 40; s += P.glow(x, y, 10, '#7affd8', 0.6) + '<circle cx="' + f(x) + '" cy="' + f(y) + '" r="2" fill="#bfffe8"/>'; }
        for (let i = 0; i < 8; i++) s += '<circle cx="' + f(50 + r() * 700) + '" cy="' + f(100 + r() * 80) + '" r="1.6" fill="#fff6a8"/>';
      }
      // a crooked witch chimney puffing coloured smoke
      s += '<path fill="' + P.c('#4a3a5a') + '" d="M110 160 L114 120 L124 121 L122 160 Z"/>' + [0, 1, 2].map(function (i) { return '<circle cx="' + (118 + i * 6) + '" cy="' + (112 - i * 12) + '" r="' + (6 + i * 3) + '" fill="' + ['#c8a8f0', '#a8f0c8', '#f0a8d8'][i] + '" opacity="0.5"/>'; }).join('');
      return s;
    },
    bathhouse: function (P) {
      let s = P.sky(37) + P.hills(160, '#6a8a6a', 24, 10);
      s += '<rect x="200" y="100" width="400" height="100" fill="' + P.c('#a87a52') + '" stroke="' + P.c('#4a2a14') + '"/>' +
        '<path fill="' + P.c('#3a4a5a') + '" d="M170 104 Q400 60 630 104 L600 84 Q400 40 200 84 Z"/><path fill="' + P.c('#3a4a5a') + '" d="M240 84 Q400 20 560 84 L540 64 Q400 10 260 64 Z"/>';
      s += '<path fill="' + P.c('#e8e0d0') + '" d="M360 200 L360 140 L440 140 L440 200 Z"/><rect x="380" y="146" width="40" height="22" fill="' + P.c('#3a6a8a') + '"/>';
      // pool
      s += '<rect y="196" width="800" height="54" fill="' + P.c('#8a8a92') + '"/><ellipse cx="400" cy="222" rx="330" ry="22" fill="' + P.lin([[0, P.night ? '#4ad8e8' : '#8ae0f0'], [1, '#3a8ab0']]) + '"/>';
      if (P.night) s += P.glow(400, 222, 300, '#5af0ff', 0.25);
      for (let i = 0; i < 10; i++) s += '<path fill="none" stroke="#ffffff" stroke-width="' + (6 + i % 3 * 3) + '" stroke-linecap="round" opacity="0.18" d="M' + (110 + i * 66) + ' 212 q-12 -24 4 -40 q14 -16 0 -36"/>';
      [[150, 206], [650, 206]].forEach(function (l) { s += '<circle cx="' + l[0] + '" cy="' + l[1] + '" r="9" fill="' + (P.night ? '#ffd27a' : '#f0d8a8') + '"/>' + (P.night ? P.glow(l[0], l[1], 30, '#ffc860', 0.5) : ''); });
      // a long scaled tail coiled by the hottest spring
      s += '<path fill="none" stroke="' + P.c('#3f9a62') + '" stroke-width="14" stroke-linecap="round" d="M560 224 Q640 236 700 222 Q740 210 720 196"/>';
      return s;
    },
    academy: function (P) {
      let s = P.sky(41) + P.hills(180, '#7a9a7a', 10, 12);
      const tower = function (x, w, h, roof) {
        let g = '<rect x="' + (x - w / 2) + '" y="' + (200 - h) + '" width="' + w + '" height="' + h + '" fill="' + P.c('#a8a0b8') + '" stroke="' + P.c('#4a4058') + '"/>';
        g += '<path fill="' + P.c(roof) + '" d="M' + (x - w / 2 - 6) + ' ' + (200 - h) + ' L' + x + ' ' + (200 - h - w * 1.6) + ' L' + (x + w / 2 + 6) + ' ' + (200 - h) + ' Z"/>';
        for (let y = 210 - h; y < 190; y += 30) g += '<rect x="' + (x - 5) + '" y="' + y + '" width="10" height="16" rx="5" fill="' + (P.night ? '#c8a8ff' : P.c('#6a7aa8')) + '"/>' + (P.night ? P.glow(x, y + 8, 18, '#b088ff', 0.5) : '');
        return g;
      };
      s += tower(250, 46, 110, '#4a3a7a') + tower(550, 46, 120, '#4a3a7a') + '<rect x="270" y="110" width="260" height="90" fill="' + P.c('#b8b0c8') + '" stroke="' + P.c('#4a4058') + '"/>' + tower(400, 60, 160, '#6a3a8a');
      s += '<path fill="' + P.c('#5a5068') + '" d="M380 200 L380 168 Q400 150 420 168 L420 200 Z"/>';
      s += '<rect y="196" width="800" height="54" fill="' + P.c('#7a8a6a') + '"/>';
      // floating books
      [[150, 80], [640, 60], [700, 120]].forEach(function (b, i) {
        s += '<g transform="translate(' + b[0] + ' ' + b[1] + ') rotate(' + (i * 20 - 10) + ')"><path fill="' + ['#a83a3a', '#3a5aa8', '#3a8a5a'][i] + '" d="M-12 0 L0 4 L12 0 L12 -14 L0 -10 L-12 -14 Z"/><path fill="#f4ead0" d="M-10 -2 L0 2 L10 -2 L10 -12 L0 -8 L-10 -12 Z"/></g>' +
          (P.night ? P.glow(b[0], b[1] - 6, 22, '#c8a8ff', 0.4) : '');
      });
      s += '<path fill="#ff9ae0" opacity="' + (P.night ? 0.9 : 0.6) + '" d="M535 120 h30 v22 h-30 Z"/>' + P.glow(550, 131, 30, '#ff7ad8', 0.5);
      return s;
    },
    peak: function (P) {
      let s = P.sky(45);
      s += '<path fill="' + P.c('#8a8aa0') + '" d="M0 200 L120 60 L200 120 L300 30 L420 140 L520 50 L640 130 L760 70 L800 100 L800 250 L0 250 Z"/>' +
        '<path fill="#ffffff" opacity="0.8" d="M300 30 L330 70 L310 64 L292 78 L282 56 Z M520 50 L548 86 L526 80 L510 92 L500 74 Z M120 60 L140 86 L124 82 L108 92 Z"/>';
      s += '<path fill="' + P.c('#5a5060') + '" d="M0 250 L0 180 Q200 150 400 170 Q600 150 800 180 L800 250 Z"/>';
      s += '<path fill="#1a1014" d="M330 200 Q340 130 400 120 Q460 130 470 200 Z"/>' + P.glow(400, 170, 60, '#ff6a2a', 0.35);
      const r = rng(3);
      for (let i = 0; i < 40; i++) { const x = 200 + r() * 400, y = 196 + r() * 40; s += '<ellipse cx="' + f(x) + '" cy="' + f(y) + '" rx="5" ry="2.4" fill="#f2c14e" stroke="#a8781a" stroke-width="0.6"/>'; }
      s += '<path fill="#e8d8b8" d="M180 220 q20 -10 40 0 q-20 6 -40 0 Z M600 216 l30 -8 l4 6 l-30 8 Z"/><path fill="#f2c14e" d="M260 214 l8 -12 l8 12 Z"/>';
      return s;
    },
    castle: function (P) {
      let s = '<rect width="800" height="250" fill="' + P.lin([[0, '#1a0a1a'], [0.7, '#4a1028'], [1, '#6a1a30']]) + '"/>';
      s += P.glow(600, 70, 120, '#ff3a4a', 0.4) + '<circle cx="600" cy="70" r="34" fill="#e8283a"/><circle cx="590" cy="62" r="8" fill="#c81a2a" opacity="0.6"/>';
      s += '<path fill="#120810" d="M220 200 L220 110 L250 110 L250 60 L262 20 L274 60 L274 110 L330 110 L330 80 L350 40 L370 80 L370 110 L430 110 L430 50 L450 0 L470 50 L470 110 L530 110 L530 70 L546 36 L562 70 L562 200 Z"/>';
      [[262, 80], [350, 92], [450, 70], [450, 120], [546, 96], [300, 150], [500, 150]].forEach(function (w) { s += '<rect x="' + (w[0] - 4) + '" y="' + w[1] + '" width="8" height="14" rx="4" fill="#ff5a5a"/>' + P.glow(w[0], w[1] + 7, 14, '#ff3a3a', 0.5); });
      s += '<path fill="#0a0408" d="M0 250 L0 200 Q200 180 400 200 Q600 180 800 200 L800 250 Z"/>';
      const r = rng(8);
      for (let i = 0; i < 9; i++) { const x = 120 + r() * 600, y = 30 + r() * 100; s += '<path fill="#0a0408" d="M' + f(x) + ' ' + f(y) + ' q-6 -6 -14 -2 q6 0 8 6 q2 -4 6 -4 q4 0 6 4 q2 -6 8 -6 q-8 -4 -14 2 Z"/>'; }
      return s;
    },
    manor: function (P) {
      let s = '<rect width="800" height="250" fill="' + P.lin([[0, '#0e1424'], [0.7, '#2a3a5a'], [1, '#4a5a7a']]) + '"/>' + P.sky(49).replace(/^<rect[^>]*>/, '');
      s += '<path fill="#1a1e2a" d="M0 250 L0 190 Q400 120 800 190 L800 250 Z"/>';
      s += '<path fill="#262a3a" d="M290 170 L290 90 L340 50 L390 90 L390 70 L430 40 L470 70 L470 90 L520 60 L560 90 L560 170 Z"/>';
      [[315, 110, 0], [365, 110, 1], [430, 90, 0], [500, 110, 0], [530, 130, 0], [340, 140, 0]].forEach(function (w) {
        s += '<rect x="' + w[0] + '" y="' + w[1] + '" width="14" height="20" fill="' + (w[2] ? '#bfe0ff' : '#3a3e52') + '"/>' + (w[2] ? P.glow(w[0] + 7, w[1] + 10, 30, '#9ad0ff', 0.6) : '');
      });
      // dead trees
      [[120, 200], [680, 196]].forEach(function (t) {
        s += '<path fill="none" stroke="#0e1018" stroke-width="6" stroke-linecap="round" d="M' + t[0] + ' ' + t[1] + ' L' + t[0] + ' ' + (t[1] - 80) + ' M' + t[0] + ' ' + (t[1] - 50) + ' L' + (t[0] - 30) + ' ' + (t[1] - 90) + ' M' + t[0] + ' ' + (t[1] - 64) + ' L' + (t[0] + 34) + ' ' + (t[1] - 100) + ' M' + (t[0] - 18) + ' ' + (t[1] - 74) + ' L' + (t[0] - 34) + ' ' + (t[1] - 76) + '"/>';
      });
      s += '<rect y="170" width="800" height="80" fill="#c8d8f0" opacity="0.12"/><rect y="200" width="800" height="50" fill="#c8d8f0" opacity="0.12"/>';
      return s;
    },
    watchtower: function (P) {
      let s = '<rect width="800" height="250" fill="' + P.lin([[0, '#100820'], [0.7, '#2a1450'], [1, '#4a2470']]) + '"/>' + P.sky(53).replace(/^<rect[^>]*>/, '');
      s += '<path fill="#1a1028" d="M0 250 L0 200 Q400 170 800 200 L800 250 Z"/>';
      s += '<path fill="#3a3048" d="M350 200 L360 60 L440 60 L450 200 Z"/><path fill="#3a3048" d="M346 60 L346 40 L360 40 L360 50 L374 50 L374 40 L390 40 L390 50 L410 50 L410 40 L426 40 L426 50 L440 50 L440 40 L454 40 L454 60 Z"/>';
      s += '<path fill="#1a1028" d="M440 90 L452 120 L444 140 Z M356 150 L368 170 L360 180 Z"/>';
      s += '<rect x="390" y="100" width="20" height="30" rx="10" fill="#c87aff"/>' + P.glow(400, 115, 80, '#a35cff', 0.6);
      [[330, '#6a2a9a'], [470, '#6a2a9a']].forEach(function (b) { s += '<path stroke="#2a1a1a" stroke-width="3" d="M' + b[0] + ' 200 L' + b[0] + ' 120"/><path fill="' + b[1] + '" d="M' + b[0] + ' 120 L' + (b[0] + (b[0] < 400 ? -30 : 30)) + ' 128 L' + b[0] + ' 150 Z"/>'; });
      s += '<g fill="#e8e0d0"><circle cx="372" cy="54" r="5"/><circle cx="428" cy="54" r="5"/></g><rect x="420" y="170" width="60" height="20" fill="#5a4a3a"/><path fill="none" stroke="#e8e0d0" stroke-width="1" d="M426 180 h48"/>';
      return s;
    },
    // The festival hill on Starfall night: the town below, lanterns, a crowd, and falling stars.
    starfall: function (P) {
      let s = '<rect width="800" height="250" fill="' + P.lin([[0, '#070a24'], [0.55, '#1c1f5a'], [0.85, '#4a2a6a'], [1, '#7a3a6a']]) + '"/>';
      const r = rng(77);
      for (let i = 0; i < 120; i++) {
        const x = r() * 800, y = r() * 170, z = r();
        s += '<circle cx="' + f(x) + '" cy="' + f(y) + '" r="' + f(0.4 + z * 1.3) + '" fill="#ffffff" opacity="' + f(0.3 + z * 0.7) + '"/>';
      }
      // a soft band of sky-glow, like the stars gathering
      s += '<path d="M0 120 Q300 40 800 70" stroke="' + P.lin([[0, '#b8a8ff', 0], [0.5, '#e8d8ff', 0.25], [1, '#b8a8ff', 0]], false) + '" stroke-width="70" fill="none"/>';
      // falling stars: long streaks with bright heads (they animate on screens that allow motion)
      const tail = P.lin([[0, '#ffffff', 0], [1, '#fff6d8', 0.95]], false);
      for (let i = 0; i < 16; i++) {
        const x = 40 + r() * 760, y = 10 + r() * 120, len = 50 + r() * 90, w = 1 + r() * 1.8;
        // the outer group places and angles the streak; the inner one slides along it
        s += '<g transform="translate(' + f(x) + ' ' + f(y) + ') rotate(32)"><g class="star-fall" style="animation-delay:' + f(-r() * 6) + 's;animation-duration:' + f(3 + r() * 4) + 's">' +
          '<rect x="0" y="' + f(-w / 2) + '" width="' + f(len) + '" height="' + f(w) + '" rx="' + f(w / 2) + '" fill="' + tail + '"/>' +
          '<circle cx="' + f(len) + '" cy="0" r="' + f(w * 1.6) + '" fill="#fffbe8"/></g></g>';
      }
      s += P.glow(640, 60, 70, '#fff6d8', 0.35) + '<circle cx="640" cy="60" r="22" fill="#fbf4dc"/>';
      // the town below, lit up for the festival
      s += '<path fill="#120e26" d="M0 250 L0 196 L40 196 L40 176 L60 166 L80 176 L80 190 L120 190 L120 170 L150 150 L180 170 L180 196 L240 196 L240 180 L262 160 L284 180 L284 196 L560 196 L560 178 L590 158 L620 178 L620 192 L680 192 L680 168 L700 140 L720 168 L720 196 L800 196 L800 250 Z"/>';
      [[60, 182], [100, 196], [150, 176], [170, 188], [262, 186], [590, 184], [600, 172], [700, 180], [710, 160], [750, 200]].forEach(function (w) {
        s += '<rect x="' + w[0] + '" y="' + w[1] + '" width="5" height="7" fill="#ffd27a"/>';
      });
      // the hill, with strings of lanterns and the crowd looking up
      s += '<path fill="' + P.lin([[0, '#1e2a3a'], [1, '#0e1420']]) + '" d="M0 250 L0 222 Q400 170 800 222 L800 250 Z"/>';
      const lanterns = ['#ff8a5a', '#ffd27a', '#ff6a9a', '#9ad0ff', '#ffd27a'];
      s += '<path fill="none" stroke="#3a2a3a" stroke-width="1" d="M60 196 Q220 222 400 186 Q580 222 740 196"/>';
      for (let i = 1; i < 14; i++) {
        const t = i / 14, x = 60 + t * 680;
        const y = t < 0.5 ? 196 + Math.sin(t * 2 * Math.PI) * 12 : 186 + Math.sin((t - 0.5) * 2 * Math.PI) * 12;
        const c = lanterns[i % lanterns.length];
        s += P.glow(x, y + 6, 14, c, 0.6) + '<ellipse cx="' + f(x) + '" cy="' + f(y + 6) + '" rx="4" ry="5" fill="' + c + '"/>';
      }
      for (let i = 0; i < 26; i++) {
        const x = 20 + i * 30 + r() * 14, y = 214 + Math.abs(400 - x) / 400 * 18 + r() * 4, h = 16 + r() * 7;
        s += '<g fill="#080a14"><circle cx="' + f(x) + '" cy="' + f(y - h) + '" r="' + f(h * 0.24) + '"/><path d="M' + f(x - h * 0.3) + ' 250 L' + f(x - h * 0.24) + ' ' + f(y - h * 0.7) + ' Q' + f(x) + ' ' + f(y - h * 0.86) + ' ' + f(x + h * 0.24) + ' ' + f(y - h * 0.7) + ' L' + f(x + h * 0.3) + ' 250 Z"/></g>';
      }
      return s;
    },
  };

  // Candlelight for the most intimate scenes: a rose-gold wash, warm bokeh and drifting petals.
  function intimate(P, seed) {
    const r = rng(seed || 19);
    let s = '<rect width="800" height="250" fill="' + P.lin([[0, '#3a0a2a', 0.55], [1, '#120414', 0.7]]) + '"/>';
    for (let i = 0; i < 14; i++) {
      const x = r() * 800, y = 40 + r() * 190, rr = 10 + r() * 30;
      s += P.glow(f(x), f(y), f(rr), ['#ffb070', '#ff7aa8', '#ffd27a'][i % 3], 0.45);
    }
    for (let i = 0; i < 10; i++) {
      const x = r() * 800, y = r() * 230, a = r() * 180;
      s += '<g transform="translate(' + f(x) + ' ' + f(y) + ') rotate(' + f(a) + ')"><path class="petal" style="animation-delay:' + f(-r() * 8) + 's" fill="#ff8ab0" opacity="0.8" d="M0 0 C4 -6 12 -6 14 0 C12 6 4 6 0 0 Z"/></g>';
    }
    // two candles at the edges
    [[60, 230], [740, 230]].forEach(function (c) {
      s += '<rect x="' + (c[0] - 6) + '" y="' + (c[1] - 34) + '" width="12" height="34" fill="#f4ead6"/>' + P.glow(c[0], c[1] - 42, 40, '#ffb050', 0.7) +
        '<path class="flame" fill="#ffd27a" d="M' + c[0] + ' ' + (c[1] - 50) + ' C' + (c[0] + 5) + ' ' + (c[1] - 42) + ' ' + (c[0] + 4) + ' ' + (c[1] - 36) + ' ' + c[0] + ' ' + (c[1] - 35) + ' C' + (c[0] - 4) + ' ' + (c[1] - 36) + ' ' + (c[0] - 5) + ' ' + (c[1] - 42) + ' ' + c[0] + ' ' + (c[1] - 50) + ' Z"/>';
    });
    return s;
  }

  const NIGHT_ONLY = { castle: 1, manor: 1, watchtower: 1, starfall: 1 };
  const INDOORS = { tavern: 1, guild: 1, library: 1, sewers: 1 };
  // opts.intimate: the candlelit treatment used for each heroine's third romance scene
  FL.backdrop = function (loc, slot, opts) {
    const draw = DRAW[loc];
    if (!draw) return '';
    opts = opts || {};
    if (NIGHT_ONLY[loc] || opts.intimate) slot = 2;
    const P = new Pic(slot == null ? 1 : slot);
    let body = draw(P);
    // indoors at night: lamplight, a bit dimmer
    if (INDOORS[loc] && P.night) body += '<rect width="800" height="250" fill="#0a0a28" opacity="0.28"/>';
    if (opts.intimate) body += intimate(P, loc.length * 7);
    return P.finish(body);
  };
  FL.backdropIds = Object.keys(DRAW);
})(typeof window !== 'undefined' ? window : globalThis);
