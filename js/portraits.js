/*
 * Procedural SVG portraits, drawn in a soft-shaded anime style.
 * Each heroine is described by a config (skin, hair, eyes, outfit, features);
 * FL.portrait(id) returns a self-contained SVG string.
 *
 * Coordinate system: 200 x 200. Face centre x = 100, eyes on y = 104.
 */
(function (root) {
  'use strict';
  const FL = (root.FL = root.FL || {});
  let uid = 0;

  /* ------------------------------------------------------------------ color helpers */
  function hex(c) {
    const n = parseInt(c.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function toHex(rgb) {
    return '#' + rgb.map(function (v) {
      return Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0');
    }).join('');
  }
  // amt < 0 darkens toward a slightly cool shadow, > 0 lightens toward white
  function shade(c, amt) {
    const rgb = hex(c);
    if (amt < 0) {
      const k = 1 + amt;
      return toHex([rgb[0] * k * 0.97, rgb[1] * k * 0.94, rgb[2] * k * 1.02 + 6 * -amt]);
    }
    return toHex(rgb.map(function (v) { return v + (255 - v) * amt; }));
  }
  function f(n) { return Math.round(n * 10) / 10; }

  /* ------------------------------------------------------------------ svg builder */
  function Builder(prefix) {
    this.p = prefix;
    this.defs = [];
    this.n = 0;
  }
  Builder.prototype.id = function (k) { return this.p + k + (++this.n); };
  function stopsXml(stops) {
    return stops.map(function (s) {
      return '<stop offset="' + s[0] + '" stop-color="' + s[1] + '"' + (s[2] != null ? ' stop-opacity="' + s[2] + '"' : '') + '/>';
    }).join('');
  }
  Builder.prototype.lin = function (stops, x1, y1, x2, y2) {
    const id = this.id('l');
    this.defs.push('<linearGradient id="' + id + '" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '">' + stopsXml(stops) + '</linearGradient>');
    return 'url(#' + id + ')';
  };
  Builder.prototype.rad = function (stops, cx, cy, r) {
    const id = this.id('r');
    this.defs.push('<radialGradient id="' + id + '" cx="' + cx + '" cy="' + cy + '" r="' + r + '">' + stopsXml(stops) + '</radialGradient>');
    return 'url(#' + id + ')';
  };
  Builder.prototype.clip = function (d) {
    const id = this.id('c');
    this.defs.push('<clipPath id="' + id + '"><path d="' + d + '"/></clipPath>');
    return 'url(#' + id + ')';
  };

  /* ------------------------------------------------------------------ geometry */
  const FACE = 'M65 92 C65 58 80 44 100 44 C120 44 135 58 135 92 C135 110 129 124 117 134 C110 140 105 143 100 143 C95 143 90 140 83 134 C71 124 65 110 65 92 Z';
  const NECK = 'M89 128 L88 163 Q100 170 112 163 L111 128 Z';
  const SHOULDERS = 'M14 200 C18 176 46 164 80 159 Q100 166 120 159 C154 164 182 176 186 200 Z';

  // A smooth spiky outline (for wild hair) around an ellipse arc.
  function spikes(cx, cy, rx, ry, a0, a1, n, len, jitter) {
    const pts = [];
    for (let i = 0; i <= n; i++) {
      const a = a0 + (a1 - a0) * (i / n);
      pts.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry, a]);
    }
    let d = 'M' + f(pts[0][0]) + ' ' + f(pts[0][1]);
    for (let i = 0; i < n; i++) {
      const p0 = pts[i], p1 = pts[i + 1];
      const am = (p0[2] + p1[2]) / 2 + (jitter || 0) * (i % 2 ? 1 : -1);
      const L = len * (0.75 + ((i * 37) % 10) / 20);
      const tx = cx + Math.cos(am) * (rx + L), ty = cy + Math.sin(am) * (ry + L);
      d += ' Q' + f((p0[0] + tx) / 2 + Math.cos(am + 1.2) * 3) + ' ' + f((p0[1] + ty) / 2 + Math.sin(am + 1.2) * 3) + ' ' + f(tx) + ' ' + f(ty);
      d += ' Q' + f((p1[0] + tx) / 2) + ' ' + f((p1[1] + ty) / 2) + ' ' + f(p1[0]) + ' ' + f(p1[1]);
    }
    return d;
  }

  /* ------------------------------------------------------------------ hair */
  function hairFill(b, h) {
    return b.lin([[0, shade(h, 0.28)], [0.45, h], [1, shade(h, -0.32)]], 0, 0, 0, 1);
  }

  function backHair(b, p) {
    const h = p.hairColor;
    const A = ' fill="' + hairFill(b, h) + '" stroke="' + shade(h, -0.5) + '" stroke-width="1.4" stroke-linejoin="round"';
    const strands = function (d) { return '<path d="' + d + '" fill="none" stroke="' + shade(h, -0.35) + '" stroke-width="1.1" stroke-linecap="round" opacity="0.55"/>'; };
    switch (p.hair) {
      case 'long':
        return '<path' + A + ' d="M62 92 C52 48 74 24 100 24 C126 24 148 48 138 92 C144 128 150 168 152 204 L48 204 C50 168 56 128 62 92 Z"/>' +
          strands('M64 120 C60 150 58 175 58 200 M136 120 C140 150 142 175 142 200 M74 150 C72 170 70 190 70 204 M126 150 C128 170 130 190 130 204');
      case 'wavy':
        return '<path' + A + ' d="M62 90 C50 46 74 22 100 22 C126 22 150 46 138 90 C152 106 136 120 150 138 C164 156 144 170 156 190 L160 204 L40 204 L44 190 C56 170 36 156 50 138 C64 120 48 106 62 90 Z"/>' +
          strands('M54 140 C64 152 50 168 58 186 M146 140 C136 152 150 168 142 186 M66 110 C58 122 66 132 58 142 M134 110 C142 122 134 132 142 142');
      case 'wild':
        return '<path' + A + ' d="' + spikes(100, 96, 46, 56, Math.PI * 0.05, Math.PI * 0.95, 9, 26, 0.05) + ' L58 70 C60 34 80 22 100 22 C120 22 140 34 142 70 Z" transform="translate(0 6)"/>' +
          '<path' + A + ' d="M58 74 C56 34 78 20 100 20 C122 20 144 34 142 74 C140 96 136 110 132 118 L68 118 C64 110 60 96 58 74 Z"/>';
      case 'curly': {
        const cs = [];
        [[68, 58], [61, 76], [57, 94], [56, 112], [58, 130], [62, 148], [68, 164], [76, 178], [100, 30], [84, 34], [116, 34], [72, 44], [128, 44]].forEach(function (c) { cs.push([c[0], c[1], 13]); cs.push([200 - c[0], c[1], 13]); });
        [[50, 104, 11], [52, 140, 11], [150, 104, 11], [148, 140, 11]].forEach(function (c) { cs.push(c); });
        return '<g' + A + '>' + cs.map(function (c) { return '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + c[2] + '"/>'; }).join('') + '</g>' +
          '<g fill="none" stroke="' + shade(h, 0.3) + '" stroke-width="1.6" opacity="0.5" stroke-linecap="round">' +
          cs.map(function (c) { return '<path d="M' + (c[0] - c[2] * 0.5) + ' ' + (c[1] - c[2] * 0.3) + ' a' + c[2] * 0.55 + ' ' + c[2] * 0.55 + ' 0 0 1 ' + c[2] * 0.7 + ' -' + c[2] * 0.2 + '"/>'; }).join('') + '</g>';
      }
      case 'bob':
        return '<path' + A + ' d="M62 94 C52 48 74 26 100 26 C126 26 148 48 138 94 C142 116 144 134 138 146 C134 152 126 150 124 144 L76 144 C74 150 66 152 62 146 C56 134 58 116 62 94 Z"/>' +
          strands('M66 112 C64 128 66 140 70 146 M134 112 C136 128 134 140 130 146');
      case 'short':
        return '<path' + A + ' d="M64 92 C56 48 76 28 100 28 C124 28 144 48 136 92 C136 108 132 118 128 124 L72 124 C68 118 64 108 64 92 Z"/>';
      case 'ponytail':
        return '<path' + A + ' d="M128 44 C162 36 172 70 162 104 C154 132 166 162 150 186 C146 160 136 140 140 110 C144 86 138 62 128 44 Z"/>' +
          strands('M146 70 C152 96 146 120 150 150') +
          '<path' + A + ' d="M64 92 C56 48 76 26 100 26 C124 26 144 48 136 92 L134 118 L66 118 Z"/>' +
          '<path d="M128 42 C134 40 138 44 136 50" fill="none" stroke="' + (p.ribbon || '#d8283a') + '" stroke-width="5" stroke-linecap="round"/>';
      case 'twintails': {
        const r = p.ribbon || '#ffffff';
        return '<path' + A + ' d="M64 58 C30 56 22 104 28 146 C32 172 26 188 32 200 C46 184 52 164 52 140 C52 108 58 82 70 68 Z"/>' +
          '<path' + A + ' d="M136 58 C170 56 178 104 172 146 C168 172 174 188 168 200 C154 184 148 164 148 140 C148 108 142 82 130 68 Z"/>' +
          strands('M40 90 C36 120 40 150 36 180 M160 90 C164 120 160 150 164 180') +
          '<path' + A + ' d="M64 92 C56 48 76 26 100 26 C124 26 144 48 136 92 L134 116 L66 116 Z"/>' +
          ribbon(62, 58, r, -1) + ribbon(138, 58, r, 1);
      }
      case 'bun':
        return '<circle' + A + ' cx="100" cy="22" r="20"/>' + strands('M88 18 C96 10 108 12 112 22') +
          '<path' + A + ' d="M64 92 C56 48 76 28 100 28 C124 28 144 48 136 92 L134 118 L66 118 Z"/>';
      case 'updo':
        return '<circle' + A + ' cx="100" cy="20" r="21"/><circle' + A + ' cx="76" cy="30" r="13"/><circle' + A + ' cx="124" cy="30" r="13"/>' +
          strands('M86 16 C94 8 108 10 114 20') +
          '<path' + A + ' d="M64 92 C56 48 76 28 100 28 C124 28 144 48 136 92 L134 112 L66 112 Z"/>' +
          '<path fill="none" stroke="' + h + '" stroke-width="3.2" stroke-linecap="round" d="M66 100 C58 116 68 126 60 140 M134 100 C142 116 132 126 140 140"/>';
      case 'drills':
        return '<path' + A + ' d="M64 92 C56 46 76 24 100 24 C124 24 144 46 136 92 L134 112 L66 112 Z"/>' +
          drill(b, 58, 84, h, -1) + drill(b, 44, 98, h, -1) + drill(b, 142, 84, h, 1) + drill(b, 156, 98, h, 1);
      case 'braid':
        return '<path' + A + ' d="M64 92 C56 48 76 26 100 26 C124 26 144 48 136 92 L134 122 L66 122 Z"/>';
      case 'mohawk':
        return '<path' + A + ' d="M86 50 C82 22 92 8 101 8 C111 9 115 24 113 50 Z"/>' + strands('M97 14 C95 26 97 38 99 48 M105 14 C106 26 106 38 105 48');
      default:
        return '';
    }
  }

  function ribbon(x, y, c, dir) {
    const d = shade(c, -0.3);
    return '<g stroke="' + d + '" stroke-width="1" fill="' + c + '">' +
      '<path d="M' + x + ' ' + y + ' l' + (-12 * dir) + ' -9 l2 15 Z"/><path d="M' + x + ' ' + y + ' l' + (10 * dir) + ' -10 l1 16 Z"/>' +
      '<circle cx="' + x + '" cy="' + y + '" r="4"/></g>';
  }

  function drill(b, x, y, h, dir) {
    // a ringlet: stacked, alternately tilted curls that taper downward
    const fill = b.lin([[0, shade(h, 0.4)], [0.5, h], [1, shade(h, -0.35)]], 0, 0, 1, 1);
    const d = shade(h, -0.5);
    let s = '';
    for (let i = 0; i < 6; i++) {
      const rx = 11.5 - i * 1.3, cy = y + i * 12, rot = (i % 2 ? 14 : -14) * dir;
      s += '<g transform="rotate(' + rot + ' ' + x + ' ' + cy + ')"><ellipse cx="' + x + '" cy="' + cy + '" rx="' + f(rx) + '" ry="7.5" fill="' + fill + '" stroke="' + d + '" stroke-width="1.2"/>' +
        '<path fill="none" stroke="' + shade(h, 0.55) + '" stroke-width="1.5" stroke-linecap="round" opacity="0.7" d="M' + f(x - rx * 0.6) + ' ' + (cy - 2) + ' Q' + x + ' ' + (cy - 6) + ' ' + f(x + rx * 0.5) + ' ' + (cy - 3) + '"/></g>';
    }
    return s;
  }

  // Builds a fringe from a list of strand tips: the crown is covered, then the
  // lower edge sweeps from strand tip to strand tip with curved clumps.
  function fringe(tips, valley, lx, rx, ly) {
    let d = 'M' + lx + ' ' + ly + ' C' + (lx - 9) + ' 44 76 19 100 19 C124 19 ' + (rx + 9) + ' 44 ' + rx + ' ' + ly;
    let px = rx, py = ly;
    for (let i = tips.length - 1; i >= 0; i--) {
      const t = tips[i];
      const lean = (t[0] - 100) * 0.12; // strands curl outward a little
      d += ' Q' + f(px - (px - t[0]) * 0.25 + lean) + ' ' + f(t[1] - 6) + ' ' + t[0] + ' ' + t[1];
      const nx = i > 0 ? (t[0] + tips[i - 1][0]) / 2 : lx;
      const ny = i > 0 ? valley + ((i * 7) % 5) : ly;
      d += ' Q' + f(t[0] - 1 + lean * 0.5) + ' ' + f((t[1] + ny) / 2) + ' ' + f(nx) + ' ' + f(ny);
      px = nx; py = ny;
    }
    return d + ' Z';
  }

  function bangsPath(style) {
    switch (style) {
      case 'straight':
        return fringe([[70, 97], [80, 92], [90, 90], [100, 91], [110, 90], [120, 92], [130, 97]], 76, 63, 137, 100);
      case 'messy':
        return fringe([[69, 100], [77, 86], [86, 96], [95, 82], [104, 94], [113, 80], [122, 92], [131, 98]], 72, 62, 138, 102);
      case 'side':
        return 'M64 104 C54 50 76 22 102 22 C128 22 148 52 136 98 C133 80 125 68 116 62 C112 76 100 86 86 88 C92 82 96 76 98 70 C88 80 76 92 64 104 Z';
      case 'parted':
        return 'M64 112 C54 52 76 22 100 22 C124 22 146 52 136 112 C134 88 124 68 108 58 C104 60 102 63 100 68 C98 63 96 60 92 58 C76 68 66 88 64 112 Z';
      case 'swept':
        return 'M66 90 C56 44 78 22 104 22 C128 22 146 44 136 88 C128 68 114 58 98 60 C86 62 74 72 66 90 Z';
      default:
        return null;
    }
  }

  function frontHair(b, p, faceClip) {
    const h = p.hairColor;
    let s = '';
    if (p.bangs === 'curly') {
      const cs = [[74, 56, 9], [84, 50, 9], [95, 47, 9], [106, 47, 9], [117, 50, 9], [127, 56, 9], [68, 68, 8], [132, 68, 8], [80, 60, 7], [100, 54, 7], [120, 60, 7]];
      return '<g fill="' + hairFill(b, h) + '" stroke="' + shade(h, -0.5) + '" stroke-width="1.3">' +
        cs.map(function (c) { return '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + c[2] + '"/>'; }).join('') + '</g>' +
        '<g fill="none" stroke="' + shade(h, 0.45) + '" stroke-width="1.3" stroke-linecap="round" opacity="0.6">' +
        cs.map(function (c) { return '<path d="M' + (c[0] - c[2] * 0.5) + ' ' + (c[1] - c[2] * 0.1) + ' Q' + c[0] + ' ' + (c[1] - c[2] * 0.75) + ' ' + (c[0] + c[2] * 0.45) + ' ' + (c[1] - c[2] * 0.3) + '"/>'; }).join('') + '</g>';
    }
    const d = bangsPath(p.bangs);
    if (!d) return '';
    // soft shadow the fringe casts on the forehead
    s += '<g clip-path="' + faceClip + '"><path d="' + d + '" fill="' + shade(p.skin, -0.28) + '" opacity="0.55" transform="translate(1.5 5)"/></g>';
    s += '<path d="' + d + '" fill="' + hairFill(b, h) + '" stroke="' + shade(h, -0.5) + '" stroke-width="1.4" stroke-linejoin="round"/>';
    // anime "angel ring" shine, clipped to the fringe
    const clip = b.clip(d);
    const rgb = hex(h);
    const dark = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11 < 90;
    const shine = dark ? '#b9c6ee' : shade(h, 0.7);
    s += '<g clip-path="' + clip + '" fill="' + shine + '" opacity="' + (dark ? 0.42 : 0.6) + '">' +
      '<path d="M72 54 C76 48 82 45 86 44 L85 50 C81 51 77 53 74 58 Z"/>' +
      '<path d="M90 42 C96 40 104 40 110 42 L109 48 C103 46 97 46 91 48 Z"/>' +
      '<path d="M114 44 C120 46 125 49 128 54 L125 58 C122 54 118 51 113 50 Z"/></g>';
    s += '<g clip-path="' + clip + '"><path d="M84 46 C82 58 84 70 88 80 M112 46 C116 58 116 70 112 80 M98 40 C96 52 98 64 100 76" fill="none" stroke="' + shade(h, -0.3) + '" stroke-width="1" opacity="0.45"/></g>';
    return s;
  }

  /* ------------------------------------------------------------------ body & clothes */
  function body(b, p) {
    const o = p.outfit, skin = p.skin;
    const od = shade(o, -0.45);
    const t = p.trim || shade(o, 0.5);
    const of = b.lin([[0, shade(o, 0.2)], [0.6, o], [1, shade(o, -0.3)]], 0, 0, 0.3, 1);
    const sf = b.lin([[0, shade(skin, -0.12)], [1, skin]], 0, 0, 0, 1);
    const base = '<path fill="' + of + '" stroke="' + od + '" stroke-width="1.4" d="' + SHOULDERS + '"/>' +
      '<path fill="none" stroke="' + shade(o, -0.25) + '" stroke-width="1.2" opacity="0.6" d="M46 186 C52 178 60 174 66 172 M154 186 C148 178 140 174 134 172"/>';
    const skinChest = function (d) { return '<path fill="' + sf + '" d="' + d + '"/>'; };
    switch (p.collar) {
      case 'v':
        return base + skinChest('M84 159 L100 186 L116 159 Z') + '<path fill="none" stroke="' + t + '" stroke-width="3" d="M82 158 L100 188 L118 158"/>';
      case 'off':
        return '<path fill="' + sf + '" stroke="' + shade(skin, -0.3) + '" stroke-width="1" d="' + SHOULDERS + '"/>' +
          '<path fill="' + of + '" stroke="' + od + '" stroke-width="1.4" d="M16 200 C20 176 40 166 64 167 Q100 182 136 167 C160 166 180 176 184 200 Z"/>' +
          '<path fill="none" stroke="' + t + '" stroke-width="3" stroke-linecap="round" d="M28 178 C42 170 54 167 64 168 Q100 183 136 168 C146 167 158 170 172 178"/>';
      case 'high':
        return base + '<path fill="' + b.lin([[0, shade(o, 0.1)], [1, shade(o, -0.25)]], 0, 0, 0, 1) + '" stroke="' + od + '" stroke-width="1.2" d="M86 146 Q100 151 114 146 L118 164 Q100 172 82 164 Z"/>' +
          '<path fill="none" stroke="' + od + '" stroke-width="0.9" opacity="0.6" d="M85 152 Q100 158 115 152 M84 158 Q100 164 116 158"/>';
      case 'gothic':
        return base + skinChest('M86 160 L100 180 L114 160 Z') +
          '<path fill="' + shade(o, -0.2) + '" stroke="' + t + '" stroke-width="1.2" d="M84 164 L60 122 L76 126 L88 152 Z M116 164 L140 122 L124 126 L112 152 Z"/>';
      case 'sailor': {
        const nav = p.trim || '#24365e';
        return base + '<path fill="' + nav + '" stroke="' + shade(nav, -0.4) + '" d="M72 160 L100 190 L128 160 L148 170 L100 204 L52 170 Z"/>' +
          '<path fill="none" stroke="#ffffff" stroke-width="2" d="M64 168 L100 200 L136 168"/>' +
          '<path fill="#d8283a" stroke="#8a1424" d="M92 180 L108 180 L104 196 L100 192 L96 196 Z"/>';
      }
      case 'armor': {
        const mf = b.lin([[0, '#f4f6fa'], [0.5, o], [1, shade(o, -0.35)]], 0, 0, 0, 1);
        return (p.cape ? '<path fill="' + p.cape + '" d="M12 200 C12 180 22 168 36 164 L30 200 Z M188 200 C188 180 178 168 164 164 L170 200 Z"/>' : '') +
          '<path fill="' + mf + '" stroke="' + od + '" stroke-width="1.4" d="' + SHOULDERS + '"/>' +
          '<path fill="' + mf + '" stroke="' + od + '" stroke-width="1.2" d="M78 148 Q100 155 122 148 L130 166 Q100 176 70 166 Z"/>' +
          '<path fill="none" stroke="' + od + '" stroke-width="1.2" d="M36 184 C54 170 74 170 84 176 M164 184 C146 170 126 170 116 176 M100 168 L100 200"/>' +
          '<path fill="none" stroke="#ffffff" stroke-width="2" opacity="0.7" d="M40 180 C54 172 66 171 76 173"/>' +
          '<g fill="' + shade(o, -0.4) + '"><circle cx="80" cy="159" r="1.6"/><circle cx="120" cy="159" r="1.6"/></g>';
      }
      case 'robe':
        return base + skinChest('M88 159 L100 178 L112 159 Z') +
          '<path fill="none" stroke="' + t + '" stroke-width="4.5" d="M78 158 L100 196 M122 158 L100 196"/>';
      case 'coat':
        return base + '<path fill="#f6f2ea" d="M84 158 L100 200 L116 158 Z"/>' + skinChest('M90 158 L100 174 L110 158 Z') +
          '<path fill="' + shade(o, -0.15) + '" stroke="' + od + '" stroke-width="1.2" d="M80 158 L94 192 L72 172 Z M120 158 L106 192 L128 172 Z"/>' +
          '<g fill="#f2c14e"><circle cx="86" cy="194" r="2"/><circle cx="114" cy="194" r="2"/></g>';
      case 'apron':
        return base + skinChest('M86 159 L100 176 L114 159 Z') +
          '<path fill="' + t + '" stroke="' + shade(t, -0.3) + '" stroke-width="1.2" d="M72 178 L128 178 L134 204 L66 204 Z"/>' +
          '<path fill="none" stroke="' + t + '" stroke-width="3.5" d="M76 178 L66 160 M124 178 L134 160"/>';
      case 'fur': {
        let s = base + '<g fill="' + b.lin([[0, shade(t, 0.3)], [1, shade(t, -0.25)]], 0, 0, 0, 1) + '" stroke="' + shade(t, -0.4) + '" stroke-width="1">';
        [44, 56, 68, 80, 92, 104, 116, 128, 140, 152].forEach(function (x, i) {
          s += '<path d="M' + (x - 9) + ' ' + (170 + Math.abs(i - 4.5) * 1.8) + ' q9 -14 18 0 q-9 10 -18 0 Z"/>';
        });
        return s + '</g>';
      }
      case 'gold':
        return base + skinChest('M86 159 L100 178 L114 159 Z') +
          '<path fill="none" stroke="#f2c14e" stroke-width="4" d="M78 160 C86 178 114 178 122 160"/>' +
          '<path fill="#ffdc6a" stroke="#a8781a" d="M100 174 l5 6 l-5 8 l-5 -8 Z"/>';
      case 'lace': {
        let s = base + '<g fill="#f7f0fb" stroke="#d8cce0" stroke-width="0.8">';
        for (let x = 80; x <= 120; x += 6) s += '<circle cx="' + x + '" cy="' + (160 + Math.abs(x - 100) * 0.12) + '" r="4.5"/>';
        return s + '</g><path fill="' + t + '" d="M100 166 l6 5 l-6 7 l-6 -7 Z"/>';
      }
      case 'gown': {
        // festival finery: off the shoulder, a sweetheart bodice, a fine chain with a pendant
        const gf = b.lin([[0, shade(o, 0.3)], [0.55, o], [1, shade(o, -0.35)]], 0, 0, 0.2, 1);
        return '<path fill="' + sf + '" stroke="' + shade(skin, -0.3) + '" stroke-width="1" d="' + SHOULDERS + '"/>' +
          '<path fill="' + gf + '" stroke="' + od + '" stroke-width="1.4" d="M16 200 C20 180 36 170 56 167 C68 165 78 168 86 174 Q93 166 100 173 Q107 166 114 174 C122 168 132 165 144 167 C164 170 180 180 184 200 Z"/>' +
          '<path fill="none" stroke="' + t + '" stroke-width="2.6" stroke-linecap="round" d="M30 178 C42 170 56 167 68 168 C76 169 82 171 86 174 Q93 166 100 173 Q107 166 114 174 C118 171 124 169 132 168 C144 167 158 170 170 178"/>' +
          '<path fill="none" stroke="' + shade(o, 0.35) + '" stroke-width="1.2" opacity="0.6" d="M60 182 C70 178 80 180 88 186 M140 182 C130 178 120 180 112 186"/>' +
          '<path fill="none" stroke="' + t + '" stroke-width="1.1" d="M88 150 Q100 162 112 150"/>' +
          '<path fill="' + (p.gem || '#e8486a') + '" stroke="' + t + '" stroke-width="1" d="M100 156 l3.6 4.5 l-3.6 5.5 l-3.6 -5.5 Z"/>' +
          '<circle cx="99" cy="159.5" r="0.9" fill="#ffffff" opacity="0.8"/>';
      }
      case 'mage': {
        const mc = b.lin([[0, shade(o, 0.15)], [1, shade(o, -0.35)]], 0, 0, 0, 1);
        return base + '<path fill="' + mc + '" stroke="' + t + '" stroke-width="1.6" d="M78 166 L58 116 L84 140 L90 162 Z M122 166 L142 116 L116 140 L110 162 Z"/>' +
          skinChest('M90 160 L100 176 L110 160 Z') +
          '<path fill="' + t + '" stroke="' + shade(t, -0.4) + '" stroke-width="0.8" d="M100 170 l5 6 l-5 8 l-5 -8 Z"/>';
      }
      case 'gears':
        return base + '<path fill="' + b.lin([[0, shade(t, 0.35)], [1, shade(t, -0.3)]], 0, 0, 0, 1) + '" stroke="' + od + '" stroke-width="1.2" d="M86 146 Q100 151 114 146 L118 164 Q100 172 82 164 Z"/>' +
          '<g fill="' + od + '"><circle cx="90" cy="159" r="1.8"/><circle cx="100" cy="161" r="1.8"/><circle cx="110" cy="159" r="1.8"/></g>' +
          '<g fill="none" stroke="' + shade(t, -0.35) + '" stroke-width="2"><circle cx="64" cy="184" r="6"/><circle cx="136" cy="184" r="6"/></g>';
      case 'strap':
        return base + skinChest('M86 159 L100 172 L114 159 Z') +
          '<path fill="' + t + '" stroke="' + shade(t, -0.4) + '" d="M48 168 L62 164 L140 204 L120 204 Z"/>' +
          '<circle cx="84" cy="180" r="3" fill="#c9b27a"/>';
      case 'shell':
        return '<path fill="' + sf + '" stroke="' + shade(skin, -0.3) + '" stroke-width="1" d="' + SHOULDERS + '"/>' +
          '<path fill="' + of + '" stroke="' + od + '" stroke-width="1.2" d="M56 204 C56 186 72 180 86 190 C92 180 108 180 114 190 C128 180 144 186 144 204 Z"/>' +
          '<g fill="#fbf7f2" stroke="#d9cfc4" stroke-width="0.6">' + [76, 84, 92, 100, 108, 116, 124].map(function (x) {
            return '<circle cx="' + x + '" cy="' + f(166 + Math.pow((x - 100) / 12, 2)) + '" r="2.8"/>';
          }).join('') + '</g>';
      default:
        return base;
    }
  }

  /* ------------------------------------------------------------------ face features */
  function ears(b, p) {
    const skin = p.skin, sd = shade(skin, -0.32);
    const fill = b.lin([[0, skin], [1, shade(skin, -0.12)]], 0, 0, 1, 0);
    if (p.ears === 'elf') {
      return '<path fill="' + fill + '" stroke="' + sd + '" stroke-width="1.2" d="M68 98 C56 94 40 80 28 66 C38 86 52 106 68 116 Z"/>' +
        '<path fill="none" stroke="' + sd + '" stroke-width="1" d="M64 104 C54 98 44 88 36 78"/>' +
        '<path fill="' + fill + '" stroke="' + sd + '" stroke-width="1.2" d="M132 98 C144 94 160 80 172 66 C162 86 148 106 132 116 Z"/>' +
        '<path fill="none" stroke="' + sd + '" stroke-width="1" d="M136 104 C146 98 156 88 164 78"/>';
    }
    if (p.ears === 'fin') {
      const c = p.finColor || '#3fc4b8';
      const ff = b.lin([[0, shade(c, 0.35)], [1, shade(c, -0.25)]], 0, 0, 1, 1);
      const fin = function (s) {
        return '<g transform="translate(' + (s > 0 ? 0 : 200) + ' 0) scale(' + s + ' 1)"><path fill="' + ff + '" stroke="' + shade(c, -0.4) + '" stroke-width="1.2" d="M68 94 L42 78 L48 92 L36 98 L48 106 L40 120 L68 114 Z"/>' +
          '<path fill="none" stroke="' + shade(c, -0.3) + '" stroke-width="0.9" d="M66 100 L46 92 M66 106 L44 106 M66 110 L48 116"/></g>';
      };
      return fin(1) + fin(-1);
    }
    return '<path fill="' + fill + '" stroke="' + sd + '" stroke-width="1.1" d="M68 98 C60 96 58 106 60 112 C62 118 66 120 69 118 Z"/>' +
      '<path fill="' + fill + '" stroke="' + sd + '" stroke-width="1.1" d="M132 98 C140 96 142 106 140 112 C138 118 134 120 131 118 Z"/>';
  }

  function eye(b, cx, cy, dir, p) {
    // dir: -1 for the eye on the viewer's left (outer corner points left), +1 for right
    const ic = p.eyeColor;
    const lash = p.lash || '#24141e';
    const style = p.eyes;
    const tilt = style === 'sharp' || style === 'cat' ? 3.5 : style === 'sleepy' ? 1 : 0;
    const top = style === 'round' || style === 'yandere' ? 12 : style === 'sharp' || style === 'cat' ? 8.5 : 10.5;
    const bot = style === 'round' || style === 'yandere' ? 7.5 : 6;
    const ox = cx + dir * 12, ix = cx - dir * 10;
    const oy = cy - tilt, iy = cy;
    if (style === 'happy') {
      return '<path fill="none" stroke="' + lash + '" stroke-width="2.8" stroke-linecap="round" d="M' + (cx - 10) + ' ' + (cy + 2) + ' Q' + cx + ' ' + (cy - 9) + ' ' + (cx + 10) + ' ' + (cy + 2) + '"/>' +
        '<path fill="none" stroke="' + lash + '" stroke-width="1.6" stroke-linecap="round" d="M' + (cx + dir * 10) + ' ' + (cy + 2) + ' l' + (dir * 4) + ' -2"/>';
    }
    const upper = 'M' + ix + ' ' + iy + ' C' + f(cx - dir * 6) + ' ' + f(cy - top) + ' ' + f(cx + dir * 6) + ' ' + f(cy - top - tilt * 0.4) + ' ' + ox + ' ' + oy;
    const lower = ' C' + f(cx + dir * 8) + ' ' + f(cy + bot) + ' ' + f(cx - dir * 6) + ' ' + f(cy + bot) + ' ' + ix + ' ' + iy + ' Z';
    const shape = upper + lower;
    const clip = b.clip(shape);
    const irisFill = style === 'glow'
      ? b.rad([[0, shade(ic, 0.8)], [0.55, ic], [1, shade(ic, -0.3)]], 0.5, 0.55, 0.6)
      : b.lin([[0, shade(ic, -0.6)], [0.35, shade(ic, -0.15)], [0.75, ic], [1, shade(ic, 0.55)]], 0, 0, 0, 1);
    let ir = style === 'round' || style === 'yandere' ? 8 : 7.2;
    if (p.shock) ir *= 0.72;
    let s = '<path d="' + shape + '" fill="#fdfbfa"/>';
    s += '<g clip-path="' + clip + '">';
    // eyelid shadow on the white
    s += '<path d="' + upper + ' L' + ox + ' ' + (oy + 5) + ' C' + f(cx + dir * 6) + ' ' + f(cy - top + 6) + ' ' + f(cx - dir * 6) + ' ' + f(cy - top + 6) + ' ' + ix + ' ' + (iy + 4) + ' Z" fill="' + shade(p.skin, -0.3) + '" opacity="0.45"/>';
    s += '<ellipse cx="' + cx + '" cy="' + (cy + 0.5) + '" rx="' + ir + '" ry="' + (ir + 1.6) + '" fill="' + irisFill + '" stroke="' + shade(ic, -0.6) + '" stroke-width="0.9"/>';
    if (style === 'cat') s += '<ellipse cx="' + cx + '" cy="' + (cy + 0.5) + '" rx="1.3" ry="7" fill="' + shade(ic, -0.85) + '"/>';
    else if (style === 'yandere') s += '<circle cx="' + cx + '" cy="' + (cy + 1) + '" r="1.4" fill="' + shade(ic, -0.85) + '"/><ellipse cx="' + cx + '" cy="' + (cy + 0.5) + '" rx="' + (ir - 2) + '" ry="' + (ir - 0.5) + '" fill="none" stroke="' + shade(ic, -0.5) + '" stroke-width="0.7" opacity="0.7"/>';
    else if (style !== 'glow') s += '<ellipse cx="' + cx + '" cy="' + (cy + 1) + '" rx="3.4" ry="4.4" fill="' + shade(ic, -0.85) + '"/>';
    if (style !== 'yandere') {
      s += '<ellipse cx="' + (cx + 2.8) + '" cy="' + (cy - 3.6) + '" rx="2.8" ry="2.2" fill="#ffffff"/>';
      s += '<circle cx="' + (cx - 2.6) + '" cy="' + (cy + 4.4) + '" r="1.3" fill="#ffffff" opacity="0.85"/>';
    }
    if (p.sparkleEyes && style !== 'yandere') s += '<ellipse cx="' + (cx - 2.4) + '" cy="' + (cy - 1.6) + '" rx="1.9" ry="1.6" fill="#ffffff" opacity="0.9"/><ellipse cx="' + (cx + 1.5) + '" cy="' + (cy + 3.5) + '" rx="3.4" ry="1.4" fill="#ffffff" opacity="0.35"/>';
    if (style === 'sleepy') s += '<path d="M' + (cx - 14) + ' ' + (cy - 16) + ' L' + (cx + 14) + ' ' + (cy - 16) + ' L' + (cx + 14) + ' ' + (cy - 3.5) + ' C' + (cx + 5) + ' ' + (cy - 5.5) + ' ' + (cx - 5) + ' ' + (cy - 5.5) + ' ' + (cx - 14) + ' ' + (cy - 3.5) + ' Z" fill="' + p.skin + '"/>';
    let lidLine = '';
    if (p.lid && style !== 'sleepy') {
      // a lowered upper lid (sad, tired, unimpressed); slope > 0 droops toward the outer corner
      const ly = cy - top + p.lid * (top + bot) * 0.62;
      // the lid edge runs corner to corner; slope moves its low point toward the outer corner
      const qx = f(cx + dir * (p.lidSlope || 0) * 4), qy = f(2 * ly - (iy + oy) / 2);
      const edge = ' Q' + qx + ' ' + qy + ' ';
      s += '<path d="M' + (ix - dir * 3) + ' ' + iy + ' L' + (ix - dir * 3) + ' ' + (cy - 22) + ' L' + (ox + dir * 3) + ' ' + (cy - 22) + ' L' + (ox + dir * 3) + ' ' + oy +
        ' L' + ox + ' ' + oy + edge + ix + ' ' + iy + ' Z" fill="' + p.skin + '"/>';
      lidLine = '<path fill="none" stroke="' + lash + '" stroke-width="2.5" stroke-linecap="round" d="M' + ix + ' ' + iy + edge + (ox + dir) + ' ' + (oy - 0.5) + '"/>';
    }
    s += '</g>';
    if (style === 'glow') s += '<circle cx="' + cx + '" cy="' + cy + '" r="13" fill="' + b.rad([[0, ic, 0.35], [1, ic, 0]], 0.5, 0.5, 0.5) + '"/>';
    // upper lash line with a flick at the outer corner
    if (style === 'sleepy') {
      s += '<path fill="none" stroke="' + lash + '" stroke-width="2.6" stroke-linecap="round" d="M' + ix + ' ' + (iy - 3) + ' C' + (cx - dir * 4) + ' ' + (cy - 5.5) + ' ' + (cx + dir * 5) + ' ' + (cy - 5.5) + ' ' + (ox + dir) + ' ' + (oy - 2) + '"/>';
    } else if (lidLine) {
      s += lidLine;
    } else {
      s += '<path fill="none" stroke="' + lash + '" stroke-width="2.8" stroke-linecap="round" d="' + upper + '"/>';
    }
    s += '<path fill="' + lash + '" d="M' + (ox - dir * 2) + ' ' + (oy - 1.5) + ' L' + (ox + dir * 5) + ' ' + (oy - 5) + ' L' + (ox + dir * 1) + ' ' + (oy + 1) + ' Z"/>';
    // lower lash (outer half only)
    s += '<path fill="none" stroke="' + lash + '" stroke-width="1" opacity="0.55" stroke-linecap="round" d="M' + ox + ' ' + oy + ' C' + f(cx + dir * 7) + ' ' + f(cy + bot - 0.5) + ' ' + f(cx + dir * 1) + ' ' + f(cy + bot + 0.5) + ' ' + f(cx - dir * 2) + ' ' + f(cy + bot) + '"/>';
    return s;
  }

  function brows(p) {
    const c = shade(p.hairColor, -0.45);
    const y = 83;
    // offsets for [outer, middle, inner] ends
    const shapes = { neutral: [0, -4, -1], raised: [2, -6, 0], angry: [-3, -1, 3], worried: [3, -3, 0],
      furious: [-6, -1, 5], high: [-5, -10, -5], sad: [5, -3, -3], arched: [1, -8, -1] };
    let s = '';
    [-1, 1].forEach(function (dir) {
      const k = shapes[(dir > 0 && p.browsR) || p.brows] || shapes.neutral;
      const cx = 100 + dir * 16;
      const ox = cx + dir * 11, ix = cx - dir * 9;
      const oyy = y + k[0], myy = y + k[1], iyy = y + k[2];
      s += '<path fill="' + c + '" d="M' + ix + ' ' + iyy + ' Q' + cx + ' ' + (myy - 1.5) + ' ' + ox + ' ' + (oyy + 1) +
        ' Q' + cx + ' ' + (myy + 1.2) + ' ' + ix + ' ' + (iyy + 2.4) + ' Z"/>';
    });
    return s;
  }

  function mouth(b, p) {
    const lip = p.lip || '#b4505a';
    const ld = shade(lip, -0.35);
    const st = ' fill="none" stroke="' + ld + '" stroke-width="1.8" stroke-linecap="round"';
    switch (p.mouth) {
      case 'smirk':
        return '<path' + st + ' d="M92 131 Q102 134 110 127"/><path' + st + ' stroke-width="1" d="M110 127 l2 -1"/>';
      case 'grin':
        return '<path fill="#5a1c28" stroke="' + ld + '" stroke-width="1.4" d="M89 128 Q100 129 111 128 Q109 141 100 141 Q91 141 89 128 Z"/>' +
          '<path fill="#e8788a" d="M93 136 Q100 132 107 136 Q104 140 100 140 Q96 140 93 136 Z"/>' +
          '<path fill="#ffffff" d="M90.5 128.6 L109.5 128.6 L108.5 131.4 L91.5 131.4 Z"/>';
      case 'fang':
        return '<path' + st + ' d="M91 129 Q100 135 109 129"/><path fill="#ffffff" stroke="' + ld + '" stroke-width="0.6" d="M94 130.4 L95.8 135 L97.6 131.6 Z"/>';
      case 'flat':
        return '<path' + st + ' d="M94 131 Q100 132 106 131"/>';
      case 'pout':
        return '<path' + st + ' d="M94 132 Q100 128.5 106 132"/><path fill="' + lip + '" opacity="0.5" d="M96 133 Q100 135.5 104 133 Q100 134 96 133 Z"/>';
      case 'o':
        return '<ellipse cx="100" cy="132" rx="3.6" ry="4.4" fill="#5a1c28" stroke="' + ld + '" stroke-width="1.1"/><ellipse cx="100" cy="134" rx="2.2" ry="1.6" fill="#e8788a"/>';
      case 'cat':
        return '<path' + st + ' d="M90 129 Q95 134 100 129.5 Q105 134 110 129"/>';
      case 'laugh':
      case 'fanglaugh':
        return '<path fill="#5a1c28" stroke="' + ld + '" stroke-width="1.4" d="M88 127 Q100 129 112 127 Q110 142 100 142 Q90 142 88 127 Z"/>' +
          '<path fill="#e8788a" d="M92 136 Q100 131 108 136 Q105 141 100 141 Q95 141 92 136 Z"/>' +
          (p.mouth === 'fanglaugh' ? '<path fill="#ffffff" stroke="' + ld + '" stroke-width="0.5" d="M93 128 L94.8 133 L96.8 128.4 Z"/>' : '');
      case 'fangsmirk':
        return '<path' + st + ' d="M92 131 Q102 134 110 127"/><path' + st + ' stroke-width="1" d="M110 127 l2 -1"/>' +
          '<path fill="#ffffff" stroke="' + ld + '" stroke-width="0.6" d="M103 132.4 L104.4 136.4 L106 131.4 Z"/>';
      case 'wobble':
        return '<path' + st + ' stroke-width="1.6" d="M92 132 q2 -2.4 4 0 t4 0 t4 0 t4 0"/>';
      case 'grit':
        return '<path fill="#ffffff" stroke="' + ld + '" stroke-width="1.4" d="M89 129 Q100 127 111 129 L110 135 Q100 137 90 135 Z"/>' +
          '<path fill="none" stroke="' + shade(ld, 0.3) + '" stroke-width="0.8" d="M90 132 L110 132 M95 129 L95 136 M100 128.6 L100 136.6 M105 129 L105 136"/>';
      case 'frown':
        return '<path' + st + ' d="M93 134 Q100 128 107 134"/>';
      case 'none':
        return '';
      default:
        return '<path' + st + ' d="M91 129 Q100 136 109 129"/><path fill="' + lip + '" opacity="0.35" d="M95 133.2 Q100 135.6 105 133.2 Q100 134.4 95 133.2 Z"/>';
    }
  }

  function faceDetails(b, p) {
    const skin = p.skin;
    let s = '';
    // nose: a soft shadow and a tiny highlight
    s += '<path fill="none" stroke="' + shade(skin, -0.32) + '" stroke-width="1.3" stroke-linecap="round" d="M101 114 Q103 119 100 121"/>';
    s += '<circle cx="98.5" cy="116" r="1.1" fill="#ffffff" opacity="0.55"/>';
    const bl = p.blush === false ? 0 : (p.blush || 0.3);
    if (bl) {
      const g = b.rad([[0, '#ff6f92', Math.min(0.85, bl * 1.4)], [1, '#ff6f92', 0]], 0.5, 0.5, 0.5);
      s += '<ellipse cx="79" cy="120" rx="11" ry="6" fill="' + g + '"/><ellipse cx="121" cy="120" rx="11" ry="6" fill="' + g + '"/>';
      if (bl >= 0.45) {
        s += '<g stroke="' + shade('#ff6f92', -0.15) + '" stroke-width="1" stroke-linecap="round" opacity="0.7"><path d="M74 121 l2.5 -3.5 M78 121 l2.5 -3.5 M82 121 l2.5 -3.5 M118 121 l2.5 -3.5 M122 121 l2.5 -3.5 M126 121 l2.5 -3.5"/></g>';
      }
    }
    if (p.freckles) s += '<g fill="' + shade(skin, -0.42) + '" opacity="0.8">' + [[76, 114], [81, 117], [73, 118], [79, 121], [124, 114], [119, 117], [127, 118], [121, 121]]
      .map(function (c) { return '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="1"/>'; }).join('') + '</g>';
    if (p.scales) s += '<g fill="' + p.scales + '" stroke="' + shade(p.scales, -0.4) + '" stroke-width="0.5">' + [[72, 112], [69, 118], [74, 121], [128, 112], [131, 118], [126, 121], [70, 104], [130, 104]]
      .map(function (c) { return '<path d="M' + c[0] + ' ' + (c[1] - 2.6) + ' L' + (c[0] + 2.2) + ' ' + c[1] + ' L' + c[0] + ' ' + (c[1] + 2.6) + ' L' + (c[0] - 2.2) + ' ' + c[1] + ' Z"/>'; }).join('') + '</g>';
    if (p.seams) s += '<path fill="none" stroke="#b9a488" stroke-width="0.9" opacity="0.6" d="M68 116 Q72 124 78 130 M132 116 Q128 124 122 130"/>' +
      '<g fill="#c8a46a" stroke="#8a6a3a" stroke-width="0.5"><circle cx="68" cy="116" r="1.6"/><circle cx="132" cy="116" r="1.6"/></g>';
    if (p.scar === 'cheek') s += '<path fill="none" stroke="' + shade(skin, -0.35) + '" stroke-width="1.3" stroke-linecap="round" d="M117 116 L127 126"/>';
    if (p.scar === 'brow') s += '<path fill="none" stroke="' + shade(skin, -0.35) + '" stroke-width="1.5" stroke-linecap="round" d="M112 80 L118 96"/>';
    if (p.mole) s += '<circle cx="110" cy="136" r="1.2" fill="#4a2a24"/>';
    if (p.soot) s += '<ellipse cx="121" cy="126" rx="6" ry="2.6" fill="#3a3030" opacity="0.35"/>';
    return s;
  }

  function topBits(b, p) {
    const h = p.hairColor, hd = shade(h, -0.5);
    let s = '';
    if (p.animal === 'fox') {
      const ear = function (dir) {
        const bx = 100 + dir * 24, tx = 100 + dir * 50, ty = 4, by = 38;
        const outer = 'M' + (bx - dir * 16) + ' ' + (by - 4) + ' Q' + (tx - dir * 14) + ' ' + (ty + 14) + ' ' + tx + ' ' + ty + ' Q' + (tx + dir * 2) + ' ' + (by - 2) + ' ' + (bx + dir * 14) + ' ' + (by + 18) + ' Z';
        const tipClip = b.clip(outer);
        return '<path fill="' + hairFill(b, h) + '" stroke="' + hd + '" stroke-width="1.4" stroke-linejoin="round" d="' + outer + '"/>' +
          '<g clip-path="' + tipClip + '"><circle cx="' + tx + '" cy="' + (ty + 2) + '" r="13" fill="' + (p.earTip || p.tipColor || '#fbf4ea') + '"/></g>' +
          '<path fill="' + (p.tipColor || '#fbf4ea') + '" opacity="0.9" d="M' + (bx - dir * 6) + ' ' + (by) + ' Q' + (tx - dir * 9) + ' ' + (ty + 20) + ' ' + (tx - dir * 3) + ' ' + (ty + 14) + ' Q' + (tx - dir * 3) + ' ' + (by) + ' ' + (bx + dir * 7) + ' ' + (by + 12) + ' Z"/>';
      };
      s += ear(-1) + ear(1);
    }
    if (p.animal === 'wolf' || p.animal === 'cat') {
      const tall = p.animal === 'wolf';
      const ear = function (dir) {
        const bx = 100 + dir * 26, tx = 100 + dir * (tall ? 46 : 42), ty = tall ? 12 : 17;
        const by = 36;
        return '<path fill="' + hairFill(b, h) + '" stroke="' + hd + '" stroke-width="1.4" stroke-linejoin="round" d="M' + (bx - dir * 14) + ' ' + (by - 6) + ' Q' + (tx - dir * 6) + ' ' + (ty + 8) + ' ' + tx + ' ' + ty + ' Q' + (tx - dir * 2) + ' ' + (by + 4) + ' ' + (bx + dir * 12) + ' ' + (by + 16) + ' Z"/>' +
          '<path fill="' + (tall ? '#ecbcaa' : '#ffd0e2') + '" stroke="' + shade(h, -0.25) + '" stroke-width="0.6" d="M' + (bx - dir * 7) + ' ' + (by - 2) + ' Q' + (tx - dir * 7) + ' ' + (ty + 14) + ' ' + (tx - dir * 3) + ' ' + (ty + 9) + ' Q' + (tx - dir * 5) + ' ' + (by + 4) + ' ' + (bx + dir * 6) + ' ' + (by + 11) + ' Z"/>' +
          (tall ? '<path fill="none" stroke="' + shade(h, 0.45) + '" stroke-width="1.3" stroke-linecap="round" d="M' + (bx + dir * 2) + ' ' + (by + 2) + ' l' + (dir * 5) + ' -10 M' + (bx + dir * 6) + ' ' + (by + 6) + ' l' + (dir * 6) + ' -9"/>' : '');
      };
      s += ear(-1) + ear(1);
    }
    if (p.horns) {
      const hornFill = b.lin([[0, '#6a5a7a'], [0.5, '#2a1e34'], [1, '#120a18']], 0, 0, 1, 1);
      const redHorn = b.lin([[0, '#8a2424'], [0.6, '#3a0c0c'], [1, '#160404']], 0, 0, 1, 1);
      const draw = function (dir) {
        const t = dir > 0 ? 'translate(200 0) scale(-1 1)' : '';
        let d, fill = hornFill;
        if (p.horns === 'curl') d = 'M76 52 C54 30 32 40 34 62 C35 76 48 82 56 74 C60 68 56 60 50 62 C46 54 58 50 70 60 Z';
        if (p.horns === 'swept') { d = 'M78 50 C68 30 52 14 26 6 C42 18 56 34 68 58 Z'; fill = redHorn; }
        if (p.horns === 'small') d = 'M80 50 C76 38 78 28 86 22 C84 32 86 40 90 46 Z';
        return '<g transform="' + t + '"><path fill="' + fill + '" stroke="#0c0610" stroke-width="1.2" d="' + d + '"/>' +
          (p.horns === 'curl' ? '<path fill="none" stroke="#8a7a9a" stroke-width="1" d="M70 54 C58 42 44 44 40 56 M62 46 l-2 6 M52 44 l0 6 M44 48 l2 5"/>' : '') +
          (p.horns === 'swept' ? '<path fill="none" stroke="#c84a3a" stroke-width="1" opacity="0.7" d="M70 50 C62 36 50 24 34 12"/>' : '') + '</g>';
      };
      s += draw(-1) + draw(1);
    }
    if (p.hat === 'witch') {
      const hc = p.hatColor;
      const hf = b.lin([[0, shade(hc, 0.25)], [1, shade(hc, -0.35)]], 0, 0, 1, 1);
      s += '<path fill="' + hf + '" stroke="' + shade(hc, -0.6) + '" stroke-width="1.4" d="M98 -14 C108 4 112 18 128 42 L66 42 C80 22 86 8 98 -14 Z"/>' +
        '<path fill="' + hf + '" stroke="' + shade(hc, -0.6) + '" stroke-width="1.4" d="M40 46 C60 34 140 34 160 46 C140 54 60 54 40 46 Z"/>' +
        '<path fill="#f2c14e" stroke="#9a701a" d="M70 36 L126 36 L128 43 L68 43 Z"/><rect x="92" y="35" width="10" height="8" fill="none" stroke="#9a701a" stroke-width="1.6"/>';
    }
    if (p.hat === 'tricorn') {
      const hf = b.lin([[0, shade(p.hatColor, 0.3)], [1, shade(p.hatColor, -0.3)]], 0, 0, 0, 1);
      s += '<path fill="#f6f1e6" d="M118 22 C138 0 164 6 172 14 C156 14 142 18 126 30 Z"/><path fill="none" stroke="#c9bfa8" stroke-width="1" d="M124 26 C138 14 152 10 166 12"/>' +
        '<path fill="' + hf + '" stroke="#000" stroke-width="1" d="M36 52 C52 30 72 20 100 20 C128 20 148 30 164 52 C144 46 124 48 100 54 C76 48 56 46 36 52 Z"/>' +
        '<path fill="none" stroke="#f2c14e" stroke-width="2" d="M40 50 C62 42 82 46 100 52 C118 46 138 42 160 50"/>';
    }
    if (p.veil && p.veilColor) {
      // a nun's wimple: dark veil over a white band
      const vc = p.veilColor;
      const vf = b.lin([[0, shade(vc, 0.2)], [1, shade(vc, -0.35)]], 0, 0, 0, 1);
      s += '<path fill="' + vf + '" stroke="' + shade(vc, -0.6) + '" stroke-width="1.6" d="M56 124 C46 56 70 26 100 26 C130 26 154 56 144 124 C140 90 128 62 100 58 C72 62 60 90 56 124 Z"/>' +
        '<path fill="#f8f6f0" stroke="#c8c2b4" stroke-width="1.2" d="M66 66 C80 52 120 52 134 66 L132 74 C118 62 82 62 68 74 Z"/>' +
        '<path fill="#e8c45a" stroke="#9a7a2a" stroke-width="0.6" d="M98 40 h4 v6 h5 v4 h-5 v8 h-4 v-8 h-5 v-4 h5 Z"/>';
    } else if (p.veil) {
      const vf = b.lin([[0, '#ffffff'], [1, '#e6e1d4']], 0, 0, 0, 1);
      s += '<path fill="' + vf + '" stroke="#cdb874" stroke-width="2" d="M58 114 C50 56 70 28 100 28 C130 28 150 56 142 114 C140 84 128 58 100 54 C72 58 60 84 58 114 Z"/>' +
        '<path fill="none" stroke="#e8c45a" stroke-width="3" d="M70 54 C86 44 114 44 130 54"/><path fill="#e8c45a" d="M100 40 l4 6 l-4 6 l-4 -6 Z"/>';
    }
    if (p.hat === 'wingedhelm') {
      const mf = b.lin([[0, '#ffffff'], [0.45, '#c8d0dc'], [1, '#7a8494']], 0, 0, 0, 1);
      const wing = function (dir) {
        const t = dir > 0 ? 'translate(200 0) scale(-1 1)' : '';
        let w = '<g transform="' + t + '"><path fill="#fbfbff" stroke="#9aa4b8" stroke-width="1.1" d="M68 50 C54 40 40 22 30 4 C40 10 46 10 52 8 C50 16 54 20 60 20 C58 28 62 32 70 34 Z"/>';
        w += '<path fill="none" stroke="#b8c0d0" stroke-width="1" d="M66 46 C56 36 46 24 38 12 M64 40 C58 32 54 26 52 18 M66 36 C64 30 62 26 60 22"/></g>';
        return w;
      };
      s += wing(-1) + wing(1) +
        '<path fill="' + mf + '" stroke="#5a6474" stroke-width="1.4" d="M62 64 C62 30 80 18 100 18 C120 18 138 30 138 64 C124 56 112 54 100 54 C88 54 76 56 62 64 Z"/>' +
        '<path fill="none" stroke="#e8c45a" stroke-width="2.6" d="M64 60 C78 52 122 52 136 60"/><path fill="none" stroke="#ffffff" stroke-width="2" opacity="0.7" d="M78 30 C84 24 92 22 98 22"/>' +
        '<path fill="#5aa0e0" stroke="#e8c45a" stroke-width="1" d="M100 46 l4 5 l-4 5 l-4 -5 Z"/>';
    }
    if (p.hat === 'bard') {
      const hc = p.hatColor || '#2a6a8a';
      const hf = b.lin([[0, shade(hc, 0.25)], [1, shade(hc, -0.35)]], 0, 0, 1, 1);
      const fc = p.featherColor || '#e84a5a';
      s += '<path fill="' + b.lin([[0, shade(fc, 0.35)], [1, shade(fc, -0.2)]], 0, 0, 1, 1) + '" stroke="' + shade(fc, -0.45) + '" stroke-width="1" d="M134 44 C140 26 156 8 182 0 C186 4 184 10 178 14 C166 24 152 36 140 48 Z"/>' +
        '<path fill="none" stroke="' + shade(fc, -0.4) + '" stroke-width="1" d="M137 46 C150 30 164 16 180 4"/>' +
        '<path fill="' + hf + '" stroke="' + shade(hc, -0.6) + '" stroke-width="1.4" d="M56 54 C54 30 84 16 112 20 C138 24 152 38 146 52 C130 46 76 46 56 54 Z"/>' +
        '<path fill="none" stroke="' + (p.trim || '#e8c45a') + '" stroke-width="3" d="M58 52 C80 44 124 44 146 50"/>';
    }
    if (p.flowerCrown) {
      const cols = p.flowerCrown;
      s += '<path fill="none" stroke="#5a9a4a" stroke-width="2.4" d="M62 64 C76 50 124 50 138 64"/>';
      [[64, 62], [76, 54], [88, 50], [100, 48], [112, 50], [124, 54], [136, 62]].forEach(function (c, i) {
        const col = cols[i % cols.length];
        s += '<g transform="translate(' + c[0] + ' ' + c[1] + ')">';
        for (let k = 0; k < 5; k++) {
          const a = k / 5 * Math.PI * 2;
          s += '<circle cx="' + f(Math.cos(a) * 3.4) + '" cy="' + f(Math.sin(a) * 3.4) + '" r="2.8" fill="' + col + '" stroke="' + shade(col, -0.3) + '" stroke-width="0.5"/>';
        }
        s += '<circle r="1.8" fill="#ffe36a"/></g>';
        if (i % 2) s += '<path fill="#6ab05a" d="M' + (c[0] + 4) + ' ' + (c[1] + 3) + ' q5 -1 7 3 q-5 1 -7 -3 Z"/>';
      });
    }
    if (p.shades) {
      s += '<g transform="translate(0 -2)"><path fill="' + p.shades + '" stroke="#2a1a2a" stroke-width="1.2" d="M70 52 C70 44 92 44 96 50 C96 58 86 60 78 58 C72 57 70 55 70 52 Z M130 52 C130 44 108 44 104 50 C104 58 114 60 122 58 C128 57 130 55 130 52 Z"/>' +
        '<path fill="none" stroke="#2a1a2a" stroke-width="1.6" d="M96 50 Q100 47 104 50 M70 50 L62 54 M130 50 L138 54"/>' +
        '<path fill="none" stroke="#ffffff" stroke-width="1.4" opacity="0.6" d="M76 49 l6 -1 M110 49 l6 -1"/></g>';
    }
    if (p.circlet) s += '<path fill="none" stroke="' + p.circlet + '" stroke-width="2.4" d="M66 70 C82 60 118 60 134 70"/><path fill="' + p.circlet + '" stroke="#8a90a0" stroke-width="0.6" d="M100 58 l4 5 l-4 5 l-4 -5 Z"/><circle cx="100" cy="63" r="1.6" fill="#7fd8b0"/>';
    if (p.tiara) s += '<path fill="' + b.lin([[0, '#fff0a8'], [1, '#c8961e']], 0, 0, 0, 1) + '" stroke="#9a6a10" stroke-width="0.8" d="M74 44 L80 34 L88 40 L100 26 L112 40 L120 34 L126 44 Q100 38 74 44 Z"/><circle cx="100" cy="35" r="2.6" fill="#5ab0ff" stroke="#2a6ab0" stroke-width="0.6"/>';
    if (p.flower) s += flower(130, 56, p.flower);
    if (p.halo) s += '<ellipse cx="100" cy="16" rx="30" ry="7" fill="none" stroke="' + b.lin([[0, '#fff6c8'], [1, '#f2c14e']], 0, 0, 1, 0) + '" stroke-width="4"/><ellipse cx="100" cy="16" rx="30" ry="7" fill="none" stroke="#fffbe6" stroke-width="1" opacity="0.8"/>';
    return s;
  }

  function flower(x, y, c) {
    let s = '<g stroke="#e5d9c8" stroke-width="0.6">';
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const px = f(x + Math.cos(a) * 6), py = f(y + Math.sin(a) * 6);
      s += '<ellipse cx="' + px + '" cy="' + py + '" rx="4.6" ry="3.2" transform="rotate(' + f(a * 57.3) + ' ' + px + ' ' + py + ')" fill="#ffffff"/>';
    }
    return s + '</g><circle cx="' + x + '" cy="' + y + '" r="4" fill="' + c + '" stroke="' + shade(c, -0.35) + '" stroke-width="0.8"/>';
  }

  function overlays(b, p) {
    let s = '';
    if (p.glasses) {
      const c = p.glasses;
      const r = p.bigGlasses ? 15 : 12.5;
      s += '<g fill="#ffffff" fill-opacity="0.12" stroke="' + c + '" stroke-width="2"><circle cx="84" cy="104" r="' + r + '"/><circle cx="116" cy="104" r="' + r + '"/></g>' +
        '<path fill="none" stroke="' + c + '" stroke-width="2" d="M' + (84 + r) + ' 102 Q100 97 ' + (116 - r) + ' 102 M' + (84 - r) + ' 101 L66 97 M' + (116 + r) + ' 101 L134 97"/>' +
        '<path fill="none" stroke="#ffffff" stroke-width="1.6" opacity="0.6" stroke-linecap="round" d="M' + f(84 - r * 0.5) + ' ' + f(104 - r * 0.7) + ' l5 -1 M' + f(116 - r * 0.5) + ' ' + f(104 - r * 0.7) + ' l5 -1"/>';
      if (p.cracked) s += '<path fill="none" stroke="#ffffff" stroke-width="0.9" d="M110 95 L117 104 L113 112 M117 104 L127 106"/>';
      if (p.fogged) s += '<g fill="#ffffff" opacity="0.22"><circle cx="84" cy="106" r="' + (r - 2) + '"/><circle cx="116" cy="106" r="' + (r - 2) + '"/></g>';
    }
    if (p.mask) {
      const mf = b.lin([[0, shade(p.mask, 0.15)], [1, shade(p.mask, -0.3)]], 0, 0, 0, 1);
      s += '<path fill="' + mf + '" stroke="' + shade(p.mask, -0.5) + '" stroke-width="1.2" d="M66 110 C80 116 120 116 134 110 C132 124 124 134 117 138 C110 142 105 144 100 144 C95 144 90 142 83 138 C76 134 68 124 66 110 Z"/>' +
        '<path fill="none" stroke="' + shade(p.mask, 0.25) + '" stroke-width="1" opacity="0.6" d="M78 122 C90 126 110 126 122 122"/>';
    }
    if (p.tusks) s += '<path fill="#f6f0dc" stroke="#b9ae88" stroke-width="0.8" d="M90 138 L87 124 L95 136 Z M110 138 L113 124 L105 136 Z"/>';
    if (p.earring) s += '<circle cx="133" cy="124" r="4.5" fill="none" stroke="#f2c14e" stroke-width="1.8"/>';
    if (p.braidFront) {
      const h = p.hairColor, hd = shade(h, -0.5);
      const bf = hairFill(b, h);
      // the hank of hair gathered from behind the ear
      s += '<path fill="' + bf + '" stroke="' + hd + '" stroke-width="1.2" d="M134 98 C142 106 144 116 142 126 L132 126 C134 118 134 108 131 102 Z"/>';
      s += '<g fill="' + bf + '" stroke="' + hd + '" stroke-width="1.2">';
      for (let i = 0; i < 7; i++) {
        const x = f(137 + i * 2.2), y = 126 + i * 10, side = i % 2 ? 1 : -1;
        s += '<path d="M' + f(x - 9) + ' ' + y + ' Q' + f(x + side * 2) + ' ' + (y - 7) + ' ' + f(x + 9) + ' ' + (y + 2) + ' Q' + f(x + side * 3) + ' ' + (y + 13) + ' ' + f(x - 9) + ' ' + y + ' Z"/>';
      }
      s += '</g><g fill="none" stroke="' + shade(h, 0.5) + '" stroke-width="1.2" opacity="0.55" stroke-linecap="round">';
      for (let i = 0; i < 7; i++) {
        const x = 137 + i * 2.2, y = 126 + i * 10;
        s += '<path d="M' + f(x - 5) + ' ' + (y - 1) + ' Q' + f(x) + ' ' + (y - 4) + ' ' + f(x + 5) + ' ' + y + '"/>';
      }
      s += '</g><path fill="' + (p.ribbon || '#c8a24e') + '" stroke="' + shade(p.ribbon || '#c8a24e', -0.4) + '" d="M' + f(137 + 7 * 2.2 - 6) + ' ' + (126 + 7 * 10 - 4) + ' l12 -2 l-1 6 l-10 1 Z"/>';
    }
    if (p.sparkles) s += '<g fill="#fff6c8">' + [[30, 50, 6], [170, 40, 5], [24, 120, 4], [176, 110, 6], [158, 170, 4], [44, 172, 3]].map(function (c) {
      const x = c[0], y = c[1], r = c[2];
      return '<path d="M' + x + ' ' + (y - r) + ' Q' + x + ' ' + y + ' ' + (x + r) + ' ' + y + ' Q' + x + ' ' + y + ' ' + x + ' ' + (y + r) + ' Q' + x + ' ' + y + ' ' + (x - r) + ' ' + y + ' Q' + x + ' ' + y + ' ' + x + ' ' + (y - r) + ' Z"/>';
    }).join('') + '</g>';
    if (p.bubbles) s += '<g fill="#ffffff" fill-opacity="0.15" stroke="#f0fff0" stroke-width="1" opacity="0.85"><circle cx="78" cy="176" r="4"/><circle cx="122" cy="186" r="3"/><circle cx="108" cy="70" r="2.4"/><circle cx="74" cy="132" r="2"/><circle cx="140" cy="150" r="2.6"/></g>';
    if (p.monocle) s += '<circle cx="117" cy="104" r="13" fill="#ffffff" fill-opacity="0.1" stroke="' + p.monocle + '" stroke-width="2.2"/>' +
      '<path fill="none" stroke="' + p.monocle + '" stroke-width="1" d="M129 110 C136 124 134 146 126 168"/><path fill="none" stroke="#ffffff" stroke-width="1.4" opacity="0.6" d="M110 96 l5 -1"/>';
    if (p.hoops) s += '<g fill="none" stroke="#f2c14e" stroke-width="1.6"><circle cx="133" cy="126" r="5"/><circle cx="67" cy="126" r="5"/></g><g fill="#ffd8f0" stroke="#d04a9a" stroke-width="0.6"><circle cx="136" cy="112" r="1.6"/><circle cx="138" cy="106" r="1.4"/><circle cx="64" cy="112" r="1.6"/></g>';
    if (p.faceGem) s += '<path fill="' + p.faceGem + '" stroke="#ffffff" stroke-width="0.7" d="M126 116 C126 113 129 112 130 114.5 C131 112 134 113 134 116 C134 119 130 121 130 122 C130 121 126 119 126 116 Z"/>';
    if (p.streak) s += '<path fill="none" stroke="' + p.streak + '" stroke-width="4" stroke-linecap="round" opacity="0.9" d="M118 30 C126 40 130 56 128 78"/>';
    if (p.hairpins) s += '<g stroke="' + shade(p.hairpins, -0.45) + '" stroke-width="1" fill="' + p.hairpins + '"><path d="M82 22 L118 8 L119 11 L83 25 Z M84 8 L120 24 L119 27 L83 11 Z"/><circle cx="118" cy="9.5" r="2.6"/><circle cx="119.5" cy="25.5" r="2.6"/></g>';
    if (p.quillPin) s += '<path fill="#1a1622" stroke="#4a4058" stroke-width="0.8" d="M126 30 C146 10 160 2 176 -4 C166 8 152 22 132 36 Z"/><path fill="none" stroke="#c8c0d8" stroke-width="0.8" d="M130 33 L172 -2"/>';
    if (p.sash) {
      s += '<path fill="' + p.sash + '" stroke="' + shade(p.sash, -0.4) + '" stroke-width="1" d="M60 168 L72 162 L148 204 L130 204 Z"/>';
      [[86, 174, '#f2c14e'], [100, 182, '#e84a5a'], [114, 190, '#4a9ae8']].forEach(function (r) {
        s += '<circle cx="' + r[0] + '" cy="' + r[1] + '" r="4" fill="' + r[2] + '" stroke="' + shade(r[2], -0.4) + '" stroke-width="0.6"/><path fill="' + r[2] + '" d="M' + (r[0] - 3) + ' ' + (r[1] + 3) + ' l-2 7 l3 -2 l2 3 Z M' + (r[0] + 3) + ' ' + (r[1] + 3) + ' l2 7 l-3 -2 l-2 3 Z"/>';
      });
    }
    s += moodMarks(p);
    return s;
  }

  // Comic-style marks for expressions: anger vein, tears, sweat drop, shock lines.
  function moodMarks(p) {
    let s = '';
    if (p.vein) s += '<g fill="none" stroke="#e8283a" stroke-width="2.4" stroke-linecap="round" transform="translate(146 56) rotate(10)">' +
      '<path d="M-7 -2 Q-2 -2 -2 -7 M2 -7 Q2 -2 7 -2 M7 2 Q2 2 2 7 M-2 7 Q-2 2 -7 2"/></g>';
    if (p.tear) s += '<path fill="#bfe6ff" stroke="#6ab0e0" stroke-width="0.8" d="M76 113 C73 120 72 124 75 126 C78 128 81 125 80 121 C79 118 77 115 76 113 Z"/>' +
      '<path fill="none" stroke="#bfe6ff" stroke-width="2" opacity="0.7" stroke-linecap="round" d="M124 112 C125 118 124 124 125 128"/>';
    if (p.sweat) s += '<path fill="#d8f0ff" stroke="#7ab8e0" stroke-width="0.9" d="M140 72 C135 82 134 88 139 90 C144 92 147 87 145 82 C144 79 142 76 140 72 Z"/><path fill="#ffffff" d="M139 84 a1.4 2 0 1 0 0.1 0 Z" opacity="0.8"/>';
    if (p.shocklines) s += '<g stroke="#2a1a2a" stroke-width="2" stroke-linecap="round" opacity="0.7"><path d="M40 52 L50 60 M34 70 L46 72 M160 52 L150 60 M166 70 L154 72"/></g>';
    return s;
  }

  /* ------------------------------------------------------------------ expressions */
  // What each mood does to a heroine's base look. Per-heroine tweaks go in cfg.moods.
  function bump(v, d) { return v === false ? false : Math.min(0.85, (v || 0.25) + d); }
  const MOODS = {
    happy: function (p) {
      return { eyes: p.eyes === 'glow' || p.eyes === 'yandere' ? p.eyes : 'happy', brows: 'neutral', blush: bump(p.blush, 0.12),
        mouth: p.mouth === 'none' ? 'none' : (p.mouth === 'fang' || p.mouth === 'fangsmirk' ? 'fanglaugh' : 'laugh') };
    },
    blush: function (p) {
      return { brows: 'worried', blush: 0.78, sparkleEyes: true, mouth: p.mouth === 'none' ? 'none' : 'wobble', lid: p.eyes === 'sleepy' ? 0 : 0.18 };
    },
    angry: function (p) {
      return { brows: 'furious', vein: true, eyes: p.eyes === 'happy' ? 'round' : p.eyes, lid: p.eyes === 'sleepy' ? 0 : 0.42, lidSlope: -1.2,
        mouth: p.mouth === 'none' ? 'none' : 'grit', blush: p.blush === false ? false : Math.min(p.blush || 0.2, 0.35) };
    },
    sad: function (p) {
      return { brows: 'sad', eyes: p.eyes === 'happy' || p.eyes === 'sleepy' ? 'round' : p.eyes, lid: 0.55, lidSlope: 1.4, tear: true,
        mouth: p.mouth === 'none' ? 'none' : 'frown', blush: p.blush === false ? false : 0.2 };
    },
    smug: function (p) {
      return { eyes: p.eyes === 'happy' || p.eyes === 'round' ? 'sleepy' : p.eyes, lid: p.eyes === 'sleepy' ? 0 : 0.6, brows: 'neutral', browsR: 'arched',
        mouth: p.mouth === 'none' ? 'none' : (p.mouth === 'fang' ? 'fangsmirk' : 'smirk') };
    },
    surprised: function (p) {
      return { eyes: p.eyes === 'happy' || p.eyes === 'sleepy' ? 'round' : p.eyes, shock: true, brows: 'high', lid: 0,
        mouth: p.mouth === 'none' ? 'none' : 'o', shocklines: true };
    },
  };
  // Starfall Festival finery: a gown, a flower in the hair, a little sparkle.
  function festivalLook(p, color, extra) {
    const o = { collar: 'gown', outfit: shade(color, -0.2), trim: '#f2d27a', sparkles: true, hammer: false, lute: false, sash: false, cape: false, glasses: p.glasses };
    if (!p.hat && !p.veil && !p.tiara && !p.flowerCrown && !p.halo && !p.circlet && !p.flower && !p.animal && !p.horns) o.flower = shade(color, 0.35);
    Object.assign(p, o, extra || {});
    return p;
  }
  function applyMood(p, mood, extra) {
    if (!mood || mood === 'neutral') return extra && extra.neutral ? Object.assign(p, extra.neutral) : p;
    const fn = MOODS[mood];
    if (!fn) return p;
    Object.assign(p, fn(p));
    if (extra && extra[mood]) Object.assign(p, extra[mood]);
    return p;
  }

  function wings(b, p) {
    if (p.wings === 'fairy') {
      const wf = b.lin([[0, '#ffffff', 0.85], [0.45, p.wingColor || '#c8f0ff', 0.7], [1, '#e8a8ff', 0.6]], 0, 0, 1, 1);
      const w = function (dir) {
        const t = dir > 0 ? 'translate(200 0) scale(-1 1)' : '';
        return '<g transform="' + t + '"><path fill="' + wf + '" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.9" d="M72 150 C40 130 6 96 10 56 C14 40 34 44 46 60 C60 80 70 120 76 148 Z"/>' +
          '<path fill="' + wf + '" stroke="#ffffff" stroke-width="1.2" stroke-opacity="0.9" d="M74 160 C48 166 20 186 16 200 L60 200 C66 186 72 172 76 162 Z"/>' +
          '<path fill="none" stroke="#ffffff" stroke-width="0.9" opacity="0.7" d="M72 146 C54 120 30 86 22 58 M72 146 C60 120 50 96 46 72 M74 162 C56 172 38 186 30 198"/></g>';
      };
      return w(-1) + w(1);
    }
    if (p.wings === 'feather') {
      const wf = b.lin([[0, '#ffffff'], [0.7, '#e8ecf4'], [1, '#b8c2d4']], 0, 0, 0, 1);
      const w = function (dir) {
        const t = dir > 0 ? 'translate(200 0) scale(-1 1)' : '';
        let g = '<g transform="' + t + ' translate(20 26) scale(0.82)" fill="' + wf + '" stroke="#8a96ac" stroke-width="1">';
        g += '<path d="M70 156 C40 140 10 100 2 40 C24 60 40 70 60 80 C66 104 70 130 74 154 Z"/>';
        for (let i = 0; i < 6; i++) {
          const y = 70 + i * 16, x = 6 + i * 7;
          g += '<path d="M' + (72 - i) + ' ' + (y + 20) + ' C' + (x + 20) + ' ' + (y + 14) + ' ' + x + ' ' + (y + 4) + ' ' + (x - 6) + ' ' + (y + 18) + ' C' + (x + 6) + ' ' + (y + 26) + ' ' + (x + 26) + ' ' + (y + 30) + ' ' + (72 - i) + ' ' + (y + 28) + ' Z"/>';
        }
        return g + '</g>';
      };
      return w(-1) + w(1);
    }
    if (p.wings !== 'bat') return '';
    const wf = b.lin([[0, '#5a2a5a'], [1, '#1e0c22']], 0, 0, 0, 1);
    const w = function (dir) {
      const t = dir > 0 ? 'translate(200 0) scale(-1 1)' : '';
      return '<g transform="' + t + '"><path fill="' + wf + '" stroke="#12060f" stroke-width="1.2" d="M60 170 C32 150 10 150 4 118 C18 124 26 116 28 104 C36 114 44 112 46 100 C54 116 60 136 72 158 Z"/>' +
        '<path fill="none" stroke="#7a4a7a" stroke-width="1" opacity="0.7" d="M60 166 L28 106 M64 162 L46 102 M56 168 L8 122"/></g>';
    };
    return w(-1) + w(1);
  }

  // Things behind the figure: fox tails, a lamia's coils, a hammer or lute over the shoulder.
  function backProps(b, p) {
    let s = '';
    if (p.tails) {
      const h = p.tailColor || p.hairColor;
      const tf = b.lin([[0, shade(h, 0.25)], [0.6, h], [1, shade(h, -0.3)]], 0, 0, 1, 1);
      // big plumes fanning up behind the shoulders, alternating sides
      const fan = [[1, 0], [-1, 0], [1, 22], [-1, 22], [1, -18], [-1, -18], [1, 40], [-1, 40], [1, -34]].slice(0, Math.min(9, p.tails));
      fan.forEach(function (t) {
        const tr = (t[0] < 0 ? 'translate(200 0) scale(-1 1) ' : '') + 'rotate(' + t[1] + ' 118 200)';
        s += '<g transform="' + tr + '"><path fill="' + tf + '" stroke="' + shade(h, -0.5) + '" stroke-width="1.3" d="M112 200 C118 150 140 110 158 74 C166 58 184 56 188 72 C192 92 172 120 160 150 C152 170 148 186 146 200 Z"/>' +
          '<path fill="' + (p.tipColor || '#fbf4ea') + '" stroke="' + shade(h, -0.45) + '" stroke-width="1" d="M158 74 C166 58 184 56 188 72 C189 80 186 88 182 94 C176 86 168 80 158 74 Z"/>' +
          '<path fill="none" stroke="' + shade(h, 0.4) + '" stroke-width="1.2" opacity="0.6" d="M126 186 C132 150 146 118 162 90"/></g>';
      });
    }
    if (p.coil) {
      const c = p.coil;
      const cf = b.lin([[0, shade(c, 0.3)], [0.5, c], [1, shade(c, -0.35)]], 0, 0, 0, 1);
      s += '<path fill="' + cf + '" stroke="' + shade(c, -0.5) + '" stroke-width="1.4" d="M-10 186 C10 150 40 142 64 156 L60 176 C42 164 22 168 4 200 L-10 200 Z"/>' +
        '<path fill="' + cf + '" stroke="' + shade(c, -0.5) + '" stroke-width="1.4" d="M210 150 C186 128 156 128 140 146 C130 158 136 170 146 168 C154 152 176 148 196 168 L210 176 Z"/>' +
        '<path fill="' + shade(c, 0.45) + '" opacity="0.6" d="M200 158 C184 144 162 142 150 152 C164 146 182 150 198 164 Z"/>';
      // belly scales on the coils
      s += '<g fill="none" stroke="' + shade(c, -0.35) + '" stroke-width="0.8" opacity="0.7">' +
        '<path d="M16 170 l6 6 M28 162 l5 7 M40 156 l3 7 M170 140 l-2 7 M182 144 l-4 6 M192 152 l-5 5"/></g>';
    }
    if (p.hammer) {
      s += '<path fill="#6a4a2a" stroke="#3a2614" stroke-width="1.2" d="M146 196 L170 40 L177 41 L154 197 Z"/>' +
        '<path fill="' + b.lin([[0, '#e8ecf2'], [0.5, '#9aa2b0'], [1, '#5a6270']], 0, 0, 0, 1) + '" stroke="#3a4250" stroke-width="1.4" d="M150 22 L196 30 L192 58 L146 50 Z"/>' +
        '<path fill="#e8c45a" stroke="#8a6a1a" stroke-width="0.8" d="M150 34 L194 41 L193 46 L149 39 Z"/>' +
        '<path fill="none" stroke="#ffffff" stroke-width="1.6" opacity="0.6" d="M154 26 L190 32"/>';
    }
    if (p.lute) {
      s += '<path fill="#b8783a" stroke="#5a3414" stroke-width="1.2" d="M38 150 L20 54 L28 52 L48 148 Z"/>' +
        '<path fill="#7a4a1a" stroke="#3a2008" stroke-width="1.2" d="M16 56 L12 30 L30 24 L32 52 Z"/>' +
        '<g fill="#f2e0a8" stroke="#5a3414" stroke-width="0.6"><circle cx="12" cy="38" r="2"/><circle cx="13" cy="46" r="2"/><circle cx="33" cy="32" r="2"/><circle cx="34" cy="42" r="2"/></g>' +
        '<path fill="none" stroke="#f4f0e0" stroke-width="0.5" d="M24 54 L42 148 M26 54 L44 147 M28 53 L46 146"/>' +
        '<ellipse cx="44" cy="176" rx="30" ry="24" fill="' + b.rad([[0, '#e0a050'], [1, '#8a5020']], 0.4, 0.4, 0.7) + '" stroke="#5a3414" stroke-width="1.4"/>';
    }
    return s;
  }

  function background(b, p, color) {
    const bg = b.rad([[0, shade(color, 0.5)], [0.6, shade(color, 0.05)], [1, shade(color, -0.45)]], 0.5, 0.38, 0.75);
    let s = '<rect x="-20" y="-20" width="240" height="240" fill="' + bg + '"/>';
    let seed = 0;
    for (let i = 0; i < p.key.length; i++) seed = (seed * 31 + p.key.charCodeAt(i)) % 9973;
    const dot = b.rad([[0, '#ffffff', 0.35], [1, '#ffffff', 0]], 0.5, 0.5, 0.5);
    for (let i = 0; i < 7; i++) {
      seed = (seed * 1103 + 12345) % 9973;
      s += '<circle cx="' + (seed % 200) + '" cy="' + ((seed * 7) % 120) + '" r="' + (6 + (seed % 14)) + '" fill="' + dot + '"/>';
    }
    return s;
  }

  /* ------------------------------------------------------------------ configs */
  FL.portraitConfigs = {
    fenna: { skin: '#e2b089', hairColor: '#d9b06a', hair: 'wild', bangs: 'messy', eyes: 'sharp', eyeColor: '#e8a420', mouth: 'fang', brows: 'angry', animal: 'wolf', outfit: '#7a5a3a', collar: 'fur', trim: '#c4a070', scar: 'cheek', blush: 0.25 },
    valeria: { skin: '#f3e6ea', hairColor: '#2a2030', hair: 'long', bangs: 'parted', eyes: 'sleepy', eyeColor: '#e0263f', mouth: 'fang', brows: 'raised', outfit: '#4a0c1c', collar: 'gothic', trim: '#c2264b', lip: '#a3122f', blush: 0.12 , moods: { angry: { mouth: 'fang', vein: false } } },
    sylvaine: { skin: '#f7e2cf', hairColor: '#ece6c6', hair: 'long', bangs: 'parted', eyes: 'sleepy', eyeColor: '#3fae78', mouth: 'smile', ears: 'elf', outfit: '#3d7a52', collar: 'robe', trim: '#d8e8a8', circlet: '#dfe4ee', blush: 0.2 },
    mira: { skin: '#f8dfcb', hairColor: '#ff8a3d', hair: 'twintails', bangs: 'straight', eyes: 'round', eyeColor: '#6e9a2c', mouth: 'pout', brows: 'angry', glasses: '#6a4a2a', outfit: '#2e4a7a', collar: 'v', trim: '#f3efe6', blush: 0.5, ribbon: '#3a6ad0' , moods: { angry: { mouth: 'pout' } } },
    marigold: { skin: '#f8dfcb', hairColor: '#f3c24b', hair: 'wavy', bangs: 'straight', eyes: 'round', eyeColor: '#78a868', mouth: 'smile', flower: '#f6a21b', outfit: '#e8a33a', collar: 'apron', trim: '#fbf6ea', blush: 0.55 , moods: { angry: { eyes: 'yandere', mouth: 'smile', brows: 'neutral', vein: false, lid: 0, blush: 0.6 }, smug: { eyes: 'yandere', lid: 0.3 } } },
    shade: { skin: '#f2d4b8', hairColor: '#4e5368', hair: 'bob', bangs: 'side', eyes: 'sharp', eyeColor: '#b3a3e8', mouth: 'none', mask: '#2e3140', outfit: '#3a3d4a', collar: 'high', scar: 'cheek', blush: false , moods: { happy: { eyes: 'sleepy', lid: 0 } } },
    pell: { skin: '#f9e6d8', hairColor: '#b49ad9', hair: 'bun', bangs: 'straight', eyes: 'round', eyeColor: '#8a90a6', mouth: 'o', glasses: '#4a3a5a', bigGlasses: true, outfit: '#6b5a8a', collar: 'high', blush: 0.6 , moods: { angry: { mouth: 'pout' } } },
    kit: { skin: '#f8dfcb', hairColor: '#ff9fce', hair: 'short', bangs: 'messy', eyes: 'cat', eyeColor: '#4fd0a0', mouth: 'cat', animal: 'cat', outfit: '#3d7a42', collar: 'coat', blush: 0.45 , moods: { angry: { mouth: 'pout' } } },
    malzahra: { skin: '#a08cb6', hairColor: '#f2f0f7', hair: 'wild', bangs: 'swept', eyes: 'glow', eyeColor: '#ffb02e', mouth: 'grin', brows: 'raised', horns: 'curl', outfit: '#3a1a5a', collar: 'gothic', trim: '#a35cff', lip: '#5a2a6a', blush: false },
    celestine: { skin: '#f9e8db', hairColor: '#f5efd2', hair: 'long', bangs: 'parted', eyes: 'round', eyeColor: '#5aa0e8', mouth: 'smile', veil: true, outfit: '#fbfaf6', collar: 'robe', trim: '#e8c45a', blush: 0.5 , moods: { angry: { mouth: 'pout' } } },
    brakka: { skin: '#82b066', hairColor: '#2c2c2c', hair: 'mohawk', bangs: 'none', eyes: 'sharp', eyeColor: '#d04a24', mouth: 'grin', brows: 'angry', tusks: true, outfit: '#6b4a2a', collar: 'strap', trim: '#3a2a1a', blush: false, lip: '#3a5a2a' },
    ignivara: { skin: '#f2cdad', hairColor: '#d62a2a', hair: 'wild', bangs: 'swept', eyes: 'cat', eyeColor: '#ffc420', mouth: 'fang', brows: 'raised', horns: 'swept', scales: '#c8202a', outfit: '#a01f1f', collar: 'gold' },
    lilette: { skin: '#cca6db', hairColor: '#ff7fb6', hair: 'bob', bangs: 'straight', eyes: 'round', eyeColor: '#ff4f8f', mouth: 'o', brows: 'worried', horns: 'small', wings: 'bat', outfit: '#1d1020', collar: 'off', trim: '#ff5fa2', blush: 0.65 , moods: { angry: { mouth: 'pout' } } },
    hilde: { skin: '#f2d4b8', hairColor: '#c4642b', hair: 'braid', bangs: 'side', eyes: 'sharp', eyeColor: '#5a7a9a', mouth: 'grin', freckles: true, soot: true, braidFront: true, outfit: '#5a3a24', collar: 'apron', trim: '#8a6a4a', ribbon: '#3a2a1a' },
    coralie: { skin: '#f5dfd3', hairColor: '#3fc4b8', hair: 'wavy', bangs: 'parted', eyes: 'round', eyeColor: '#2f90d9', mouth: 'grin', ears: 'fin', finColor: '#7ee0d6', outfit: '#e88aa8', collar: 'shell', blush: 0.4 , moods: { angry: { mouth: 'pout' } } },
    morwen: { skin: '#f8dfcb', hairColor: '#3c2c26', hair: 'curly', bangs: 'curly', eyes: 'round', eyeColor: '#8a6ad9', mouth: 'smile', glasses: '#8a7a6a', cracked: true, hat: 'witch', hatColor: '#4a2f7a', outfit: '#6a4aa0', collar: 'robe', trim: '#c8a8f0' , moods: { angry: { mouth: 'pout' } } },
    aurelia: { skin: '#f9e6d8', hairColor: '#f2c14e', hair: 'braid', bangs: 'parted', eyes: 'round', eyeColor: '#4a8ee0', mouth: 'smile', braidFront: true, tiara: true, outfit: '#f0e6d0', collar: 'apron', trim: '#ffffff', blush: 0.35, ribbon: '#4a8ee0' , moods: { angry: { mouth: 'pout' } } },
    bettina: { skin: '#f0cbaa', hairColor: '#8a3324', hair: 'updo', bangs: 'side', eyes: 'sleepy', eyeColor: '#8a5a2a', mouth: 'smirk', mole: true, outfit: '#2f6b4a', collar: 'v', trim: '#e8c890', lip: '#b02a3a', blush: 0.25 },
    gloria: { skin: '#9ae69a', hairColor: '#5fc65f', hair: 'bob', bangs: 'side', eyes: 'happy', eyeColor: '#2a6a2a', lash: '#1f5a2a', mouth: 'smile', lip: '#2f8a3f', outfit: '#6fd06f', collar: 'v', bubbles: true, blush: 0.3, slime: true , moods: { angry: { mouth: 'pout' } } },
    hikari: { skin: '#f8dfcb', hairColor: '#1c1c28', hair: 'ponytail', bangs: 'straight', eyes: 'round', eyeColor: '#6a442c', mouth: 'grin', brows: 'angry', outfit: '#fbfbfb', collar: 'sailor', trim: '#24365e', ribbon: '#d8283a', blush: 0.3 },
    brunhild: { skin: '#f7e2cf', hairColor: '#d8cfa8', hair: 'braid', bangs: 'swept', eyes: 'sharp', eyeColor: '#4a72b0', mouth: 'flat', brows: 'angry', braidFront: true, outfit: '#b9c2d0', collar: 'armor', cape: '#b01f2a', blush: 0.2, ribbon: '#b01f2a' },
    rosalind: { skin: '#f9e8db', hairColor: '#f2c94c', hair: 'drills', bangs: 'swept', eyes: 'sleepy', eyeColor: '#9a4ab0', mouth: 'smirk', brows: 'raised', outfit: '#5a2a6a', collar: 'lace', trim: '#c74bb0', blush: 0.2 },
    seven: { skin: '#f5eee6', hairColor: '#c8833a', hair: 'bob', bangs: 'straight', eyes: 'glow', eyeColor: '#ffb84a', mouth: 'flat', seams: true, outfit: '#8a6a3a', collar: 'gears', trim: '#d8a850', blush: 0.15 , moods: { happy: { eyes: 'glow', mouth: 'smile', blush: 0.3 }, angry: { mouth: 'flat', vein: false }, sad: { tear: false, mouth: 'flat' } } },
    ophelia: { skin: '#dce9f7', hairColor: '#2c3c5c', hair: 'updo', bangs: 'parted', eyes: 'sleepy', eyeColor: '#7a9ac8', mouth: 'flat', brows: 'worried', outfit: '#b8c8e0', collar: 'off', trim: '#eef4fb', blush: 0.15, ghost: true, lip: '#6a7aa0' },
    scarlett: { skin: '#f0cbaa', hairColor: '#c8262b', hair: 'curly', bangs: 'curly', eyes: 'sharp', eyeColor: '#2f8a5a', mouth: 'smirk', brows: 'raised', scar: 'brow', earring: true, hat: 'tricorn', hatColor: '#2a1414', outfit: '#b0202a', collar: 'coat', blush: 0.2 },
    amorette: { skin: '#f9e6d8', hairColor: '#ff9ad5', hair: 'wavy', bangs: 'parted', eyes: 'glow', eyeColor: '#f2c14e', mouth: 'smile', halo: true, sparkles: true, outfit: '#ff7aa8', collar: 'off', trim: '#ffd27a', blush: 0.4 },
    // the new heroines
    kohana: { skin: '#fbe8da', hairColor: '#f08a2a', hair: 'long', bangs: 'parted', eyes: 'cat', eyeColor: '#d8402a', mouth: 'fangsmirk', brows: 'raised', animal: 'fox', earTip: '#2a1a1e', tails: 3, tailColor: '#f7a644', tipColor: '#fdf6ec', outfit: '#fbf8f2', collar: 'robe', trim: '#d8283a', ribbon: '#d8283a', blush: 0.3, moods: { happy: { mouth: 'fanglaugh' } } },
    sesha: { skin: '#eadcc4', hairColor: '#2f8a62', hair: 'updo', bangs: 'side', eyes: 'cat', eyeColor: '#e8c43a', mouth: 'smile', brows: 'worried', glasses: '#8a6a3a', fogged: true, hairpins: '#b8844a', scales: '#3fa06a', coil: '#3f9a62', outfit: '#d8b870', collar: 'v', trim: '#8a5a2a', blush: 0.45, moods: { angry: { mouth: 'pout', vein: false } } },
    sigrun: { skin: '#f4d6bc', hairColor: '#f0e6c4', hair: 'braid', bangs: 'swept', eyes: 'sharp', eyeColor: '#8a9ab4', mouth: 'grin', brows: 'raised', freckles: true, braidFront: true, hat: 'wingedhelm', wings: 'feather', outfit: '#a8b4c4', collar: 'armor', cape: '#2a4a8a', ribbon: '#2a4a8a', blush: 0.35 },
    thistle: { skin: '#fdf0ea', hairColor: '#b8e050', hair: 'wavy', bangs: 'parted', eyes: 'round', eyeColor: '#a050d0', mouth: 'smirk', brows: 'raised', ears: 'elf', wings: 'fairy', wingColor: '#d8f8c8', flowerCrown: ['#9a4ad8', '#c87af0', '#7a3ab8'], outfit: '#5aa860', collar: 'off', trim: '#f8b0d8', sparkles: true, blush: 0.35 },
    lyra: { skin: '#f8dfcb', hairColor: '#8a3aa8', hair: 'wavy', bangs: 'side', eyes: 'round', eyeColor: '#3a9a7a', mouth: 'grin', hat: 'bard', hatColor: '#2a6a8a', featherColor: '#e8505a', lute: true, outfit: '#2a6a8a', collar: 'v', trim: '#f2c14e', earring: true, blush: 0.35 },
    maud: { skin: '#f0cfae', hairColor: '#c4642b', hair: 'short', bangs: 'none', eyes: 'sharp', eyeColor: '#8a6a34', mouth: 'grin', brows: 'raised', veil: true, veilColor: '#f2f0ea', hammer: true, outfit: '#c8ccd8', collar: 'armor', blush: 0.25, freckles: true, braidFront: false },
    vespera: { skin: '#f9e8db', hairColor: '#1c1824', hair: 'ponytail', bangs: 'straight', eyes: 'sharp', eyeColor: '#8a5ae0', mouth: 'smirk', brows: 'raised', streak: '#d8dce8', quillPin: true, ribbon: '#1c1824', outfit: '#1e2a5a', collar: 'mage', trim: '#e8c45a', sash: '#c8283a', blush: 0.2 },
    zyra: { skin: '#a898b4', hairColor: '#f8e6a0', hair: 'curly', bangs: 'side', eyes: 'round', eyeColor: '#e0303a', lash: '#1a0a14', mouth: 'grin', ears: 'elf', hoops: true, streak: '#ff5fa8', faceGem: '#ff8ac8', outfit: '#ff6fb0', collar: 'off', trim: '#ffffff', lip: '#ff4f8f', blush: 0.3 },
  };

  /* ------------------------------------------------------------------ main */
  FL.portraitMoods = ['neutral'].concat(Object.keys(MOODS));
  // opts.festival: dressed up for the Starfall Festival (endings and the festival itself)
  FL.portrait = function (id, mood, opts) {
    const cfg = FL.portraitConfigs[id];
    if (!cfg) return '';
    opts = opts || {};
    let base = Object.assign({ eyes: 'round', mouth: 'smile', bangs: 'straight', collar: 'v', key: id }, cfg);
    if (opts.festival) base = festivalLook(base, FL.characters && FL.characters[id] ? FL.characters[id].color : '#8a7aa8', cfg.festival);
    const p = applyMood(base, mood, cfg.moods);
    const b = new Builder('pt' + (++uid) + '_');
    const color = FL.characters && FL.characters[id] ? FL.characters[id].color : '#8a7aa8';
    const skin = p.skin;
    const faceFill = b.rad([[0, shade(skin, 0.18)], [0.7, skin], [1, shade(skin, -0.1)]], 0.42, 0.42, 0.65);
    const faceClip = b.clip(FACE);
    let figure =
      backProps(b, p) +
      wings(b, p) +
      backHair(b, p) +
      '<path fill="' + b.lin([[0, shade(skin, -0.3)], [0.45, shade(skin, -0.08)], [1, skin]], 0, 0, 0, 1) + '" d="' + NECK + '"/>' +
      body(b, p) +
      ears(b, p) +
      '<path fill="' + faceFill + '" stroke="' + shade(skin, -0.38) + '" stroke-width="1.3" d="' + FACE + '"/>' +
      // jaw shadow + soft rim light
      '<g clip-path="' + faceClip + '"><path d="M65 110 C70 128 86 141 100 143 C114 141 130 128 135 110 C131 132 116 147 100 149 C84 147 69 132 65 110 Z" fill="' + shade(skin, -0.2) + '" opacity="0.5"/>' +
      '<path d="M128 70 C136 86 136 104 130 120" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.18"/></g>' +
      faceDetails(b, p) +
      '<g transform="translate(83 104) scale(1.18) translate(-83 -104)">' + eye(b, 83, 104, -1, p) + '</g>' +
      '<g transform="translate(117 104) scale(1.18) translate(-117 -104)">' + eye(b, 117, 104, 1, p) + '</g>' +
      '<g transform="translate(0 -3)">' + mouth(b, p) + '</g>' +
      frontHair(b, p, faceClip) +
      // brows sit on top of the fringe (an anime convention), so expressions read through bangs
      '<g opacity="0.92">' + brows(p) + '</g>' +
      topBits(b, p) +
      overlays(b, p);
    if (p.ghost) figure = '<g opacity="0.8">' + figure + '</g>';
    if (p.slime) figure = '<g opacity="0.9">' + figure + '<path d="M76 70 C84 60 96 58 104 62" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.5" stroke-linecap="round"/></g>';
    const bgLayer = opts.noBg ? '' : background(b, p, color);
    const who = FL.characters && FL.characters[id] ? FL.characters[id].short : id;
    const label = who + (mood && mood !== 'neutral' ? ', looking ' + ({ happy: 'happy', blush: 'flustered', angry: 'angry', sad: 'sad', smug: 'smug', surprised: 'surprised' }[mood] || mood) : '');
    return '<svg viewBox="' + (opts.full ? '0 0 200 200' : '12 6 176 176') + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + label + '">' +
      '<defs>' + b.defs.join('') + '</defs>' + bgLayer + figure + '</svg>';
  };
})(typeof window !== 'undefined' ? window : globalThis);
