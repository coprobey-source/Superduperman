/*
 * Procedural SVG portraits. Each heroine is described by a small config
 * (skin, hair, eyes, outfit, features) and drawn as a flat-style bust.
 * FL.portrait(id) returns an SVG string; FL.portraitConfigs holds the data.
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
  function toHex(r, g, b) {
    return '#' + [r, g, b].map(function (v) {
      return Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0');
    }).join('');
  }
  // amt < 0 darkens, > 0 lightens
  function shade(c, amt) {
    const rgb = hex(c);
    return toHex.apply(null, rgb.map(function (v) { return amt < 0 ? v * (1 + amt) : v + (255 - v) * amt; }));
  }

  /* ------------------------------------------------------------------ parts */
  const FACE = 'M40 50 C40 30 49 24 60 24 C71 24 80 30 80 50 C80 66 72 79 60 84 C48 79 40 66 40 50 Z';

  function backHair(p, h, o) {
    const d = shade(h, -0.3);
    const a = ' fill="' + h + '" stroke="' + d + '" stroke-width="1"';
    switch (p.hair) {
      case 'long':
        return '<path' + a + ' d="M36 48 C32 24 46 16 60 16 C74 16 88 24 84 48 C88 76 92 100 90 122 L30 122 C28 100 32 76 36 48 Z"/>';
      case 'wavy':
        return '<path' + a + ' d="M36 46 C30 22 46 15 60 15 C74 15 90 22 84 46 C92 62 84 72 92 86 C98 100 88 110 92 122 L28 122 C32 110 22 100 28 86 C36 72 28 62 36 46 Z"/>';
      case 'wild':
        return '<path' + a + ' d="M34 46 C28 20 46 13 60 14 C76 13 92 20 86 46 L96 60 L86 64 L98 82 L86 84 L94 106 L80 98 L82 118 L68 104 L60 112 L52 104 L38 118 L40 98 L26 106 L34 84 L22 82 L34 64 L24 60 Z"/>';
      case 'curly':
        return '<g' + a + '>' + [[38, 34], [34, 50], [32, 66], [34, 82], [40, 96], [60, 18], [46, 22], [74, 22], [82, 34], [86, 50], [88, 66], [86, 82], [80, 96]]
          .map(function (c) { return '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="11"/>'; }).join('') + '</g>';
      case 'bob':
        return '<path' + a + ' d="M36 50 C32 24 46 17 60 17 C74 17 88 24 84 50 C86 64 86 74 82 80 L38 80 C34 74 34 64 36 50 Z"/>';
      case 'short':
        return '<path' + a + ' d="M38 48 C34 24 47 18 60 18 C73 18 86 24 82 48 C82 58 80 64 78 66 L42 66 C40 64 38 58 38 48 Z"/>';
      case 'ponytail':
        return '<path' + a + ' d="M76 22 C96 18 100 40 94 60 C90 76 96 92 88 104 C86 88 80 76 82 60 C84 46 80 34 76 22 Z"/>' +
          '<path' + a + ' d="M38 48 C34 24 47 17 60 17 C73 17 86 24 82 48 L80 64 L40 64 Z"/>';
      case 'twintails':
        return '<path' + a + ' d="M36 30 C18 30 14 56 18 80 C20 96 16 106 20 116 C28 104 30 92 30 78 C30 60 34 44 40 36 Z"/>' +
          '<path' + a + ' d="M84 30 C102 30 106 56 102 80 C100 96 104 106 100 116 C92 104 90 92 90 78 C90 60 86 44 80 36 Z"/>' +
          '<path' + a + ' d="M38 48 C34 24 47 17 60 17 C73 17 86 24 82 48 L80 62 L40 62 Z"/>' +
          '<circle cx="37" cy="31" r="3.5" fill="' + (o.ribbon || '#ffffff') + '"/><circle cx="83" cy="31" r="3.5" fill="' + (o.ribbon || '#ffffff') + '"/>';
      case 'bun':
        return '<circle' + a + ' cx="60" cy="14" r="12"/>' +
          '<path' + a + ' d="M38 48 C34 24 47 18 60 18 C73 18 86 24 82 48 L80 64 L40 64 Z"/>';
      case 'updo':
        return '<circle' + a + ' cx="60" cy="13" r="13"/><circle' + a + ' cx="46" cy="18" r="8"/><circle' + a + ' cx="74" cy="18" r="8"/>' +
          '<path' + a + ' d="M38 48 C34 24 47 18 60 18 C73 18 86 24 82 48 L80 60 L40 60 Z"/>' +
          '<path fill="none" stroke="' + h + '" stroke-width="2.4" stroke-linecap="round" d="M39 56 C34 66 40 72 36 80 M81 56 C86 66 80 72 84 80"/>';
      case 'drills':
        return '<path' + a + ' d="M38 48 C34 24 47 16 60 16 C73 16 86 24 82 48 L80 60 L40 60 Z"/>' +
          drill(34, 46, h, d) + drill(26, 54, h, d) + drill(86, 46, h, d) + drill(94, 54, h, d);
      case 'braid':
        return '<path' + a + ' d="M38 48 C34 24 47 17 60 17 C73 17 86 24 82 48 L80 64 L40 64 Z"/>';
      case 'mohawk':
        return '<path' + a + ' d="M54 26 C52 8 58 2 62 2 C68 4 68 14 66 26 Z"/>' +
          '<path' + a + ' d="M60 22 C76 26 74 50 70 64 C68 80 72 96 66 108 C62 96 60 84 60 70 Z"/>';
      default:
        return '';
    }
  }

  function drill(x, y, h, d) {
    let s = '';
    for (let i = 0; i < 5; i++) {
      const r = 6.5 - i * 0.9;
      s += '<ellipse cx="' + x + '" cy="' + (y + i * 9) + '" rx="' + r + '" ry="5.5" fill="' + h + '" stroke="' + d + '" stroke-width="1"/>';
    }
    return s;
  }

  function frontHair(p, h) {
    const d = shade(h, -0.3);
    const a = ' fill="' + h + '" stroke="' + d + '" stroke-width="1"';
    switch (p.bangs) {
      case 'straight':
        return '<path' + a + ' d="M38 46 C36 24 48 19 60 19 C72 19 84 24 82 46 C80 40 78 38 76 44 C74 38 70 36 68 42 C66 36 62 35 60 41 C58 35 54 36 52 42 C50 36 46 38 44 44 C42 38 40 40 38 46 Z"/>';
      case 'side':
        return '<path' + a + ' d="M38 50 C34 24 48 18 62 19 C76 20 86 28 82 48 C78 36 72 32 64 30 C58 36 48 42 38 50 Z"/>';
      case 'parted':
        return '<path' + a + ' d="M38 54 C34 26 48 19 60 19 C72 19 86 26 82 54 C80 40 72 30 62 26 L60 30 L58 26 C48 30 40 40 38 54 Z"/>';
      case 'messy':
        return '<path' + a + ' d="M37 50 C34 24 48 18 60 18 C72 18 86 24 83 50 L78 40 L76 48 L70 36 L66 46 L62 34 L58 46 L52 36 L50 46 L44 38 L42 48 Z"/>';
      case 'swept':
        return '<path' + a + ' d="M39 44 C36 22 50 18 62 18 C74 18 86 24 82 44 C76 32 66 28 56 30 C48 32 42 38 39 44 Z"/>';
      case 'curly':
        return '<g' + a + '>' + [[44, 30], [52, 26], [60, 25], [68, 26], [76, 30], [40, 40], [80, 40]]
          .map(function (c) { return '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="7"/>'; }).join('') + '</g>';
      default:
        return '';
    }
  }

  function body(p, skin) {
    const o = p.outfit;
    const od = shade(o, -0.3);
    const t = p.trim || shade(o, 0.45);
    const base = '<path fill="' + o + '" stroke="' + od + '" stroke-width="1" d="M12 122 C14 102 34 93 52 90 L68 90 C86 93 106 102 108 122 Z"/>';
    switch (p.collar) {
      case 'v':
        return base + '<path fill="' + skin + '" d="M52 90 L60 106 L68 90 Z"/>' + '<path fill="none" stroke="' + t + '" stroke-width="2" d="M51 90 L60 107 L69 90"/>';
      case 'off':
        return '<path fill="' + skin + '" d="M14 122 C16 104 34 94 52 90 L68 90 C86 94 104 104 106 122 Z"/>' +
          '<path fill="' + o + '" stroke="' + od + '" stroke-width="1" d="M14 122 C18 110 32 104 60 106 C88 104 102 110 106 122 Z"/>' +
          '<path fill="none" stroke="' + t + '" stroke-width="2" d="M22 110 C38 104 82 104 98 110"/>';
      case 'high':
        return base + '<path fill="' + od + '" d="M49 84 L71 84 L73 95 L47 95 Z"/>';
      case 'gothic':
        return base + '<path fill="' + skin + '" d="M52 90 L60 102 L68 90 Z"/>' +
          '<path fill="' + od + '" stroke="' + t + '" stroke-width="1" d="M50 92 L36 70 L46 72 L52 86 Z M70 92 L84 70 L74 72 L68 86 Z"/>';
      case 'sailor':
        return base + '<path fill="' + (p.trim || '#24365e') + '" d="M42 92 L60 110 L78 92 L90 98 L60 122 L30 98 Z"/>' +
          '<path fill="none" stroke="#ffffff" stroke-width="1.5" d="M38 97 L60 117 L82 97"/>' +
          '<path fill="#d8283a" d="M55 104 L65 104 L60 116 Z"/>';
      case 'armor':
        return base + '<path fill="' + shade(o, 0.2) + '" stroke="' + od + '" stroke-width="1" d="M44 88 L76 88 L80 98 L40 98 Z"/>' +
          '<path fill="none" stroke="' + od + '" stroke-width="1" d="M22 108 C34 100 46 100 52 104 M98 108 C86 100 74 100 68 104 M60 98 L60 122"/>' +
          (p.cape ? '<path fill="' + p.cape + '" d="M12 122 C12 108 18 100 26 98 L22 122 Z M108 122 C108 108 102 100 94 98 L98 122 Z"/>' : '');
      case 'robe':
        return base + '<path fill="none" stroke="' + t + '" stroke-width="3" d="M46 90 L60 116 M74 90 L60 116"/>' +
          '<path fill="' + skin + '" d="M53 90 L60 102 L67 90 Z"/>';
      case 'coat':
        return base + '<path fill="#f3efe6" d="M50 90 L60 120 L70 90 Z"/>' +
          '<path fill="' + od + '" d="M48 90 L56 112 L44 100 Z M72 90 L64 112 L76 100 Z"/>' +
          '<path fill="' + skin + '" d="M54 90 L60 100 L66 90 Z"/>';
      case 'apron':
        return base + '<path fill="' + skin + '" d="M52 90 L60 100 L68 90 Z"/>' +
          '<path fill="' + t + '" stroke="' + od + '" stroke-width="1" d="M44 104 L76 104 L80 122 L40 122 Z"/>' +
          '<path fill="none" stroke="' + t + '" stroke-width="2" d="M46 104 L40 92 M74 104 L80 92"/>';
      case 'fur':
        return base + '<g fill="' + t + '">' + [30, 38, 46, 54, 62, 70, 78, 86].map(function (x, i) {
          return '<circle cx="' + x + '" cy="' + (96 + Math.abs(i - 3.5) * 1.2) + '" r="5"/>';
        }).join('') + '</g>';
      case 'gold':
        return base + '<path fill="' + skin + '" d="M52 90 L60 100 L68 90 Z"/>' +
          '<path fill="none" stroke="#f2c14e" stroke-width="3" d="M46 92 C52 102 68 102 74 92"/><circle cx="60" cy="102" r="3" fill="#f2c14e"/>';
      case 'lace':
        return base + '<g fill="#f5eefa">' + [48, 53, 58, 63, 68, 72].map(function (x) {
          return '<circle cx="' + x + '" cy="92" r="3"/>';
        }).join('') + '</g><circle cx="60" cy="97" r="2.5" fill="' + t + '"/>';
      case 'gears':
        return base + '<path fill="' + t + '" stroke="' + od + '" stroke-width="1" d="M48 86 L72 86 L74 95 L46 95 Z"/>' +
          '<g fill="' + od + '"><circle cx="52" cy="90.5" r="1.4"/><circle cx="60" cy="90.5" r="1.4"/><circle cx="68" cy="90.5" r="1.4"/></g>';
      case 'strap':
        return base + '<path fill="' + skin + '" d="M52 90 L60 98 L68 90 Z"/>' +
          '<path fill="' + t + '" d="M30 98 L38 96 L86 122 L74 122 Z"/>';
      case 'shell':
        return '<path fill="' + skin + '" d="M14 122 C16 104 34 94 52 90 L68 90 C86 94 104 104 106 122 Z"/>' +
          '<path fill="' + o + '" stroke="' + od + '" stroke-width="1" d="M34 122 C34 110 44 106 52 112 C56 106 64 106 68 112 C76 106 86 110 86 122 Z"/>' +
          '<g fill="#f8f4ef">' + [46, 52, 58, 64, 70, 74].map(function (x, i) {
            return '<circle cx="' + x + '" cy="' + (98 + Math.sin(i) * 1.5) + '" r="1.8"/>';
          }).join('') + '</g>';
      default:
        return base;
    }
  }

  function eye(x, y, left, p) {
    const id = 'e' + (++uid);
    const tilt = p.eyes === 'sharp' || p.eyes === 'cat' ? 2 : 0;
    const big = p.eyes === 'round' || p.eyes === 'yandere' ? 1.6 : 0;
    const dir = left ? -1 : 1;
    const ox = x - 6 * dir, ix = x + 6 * dir; // outer & inner corner
    const almond = 'M' + ox + ' ' + (y - tilt) + ' Q' + x + ' ' + (y - 5.5 - big) + ' ' + ix + ' ' + y +
      ' Q' + x + ' ' + (y + 4 + big * 0.6) + ' ' + ox + ' ' + (y - tilt) + ' Z';
    const lash = shade(p.lash || '#2a1a24', 0);
    if (p.eyes === 'happy') {
      return '<path fill="none" stroke="' + lash + '" stroke-width="2" stroke-linecap="round" d="M' + (x - 5) + ' ' + (y + 1) + ' Q' + x + ' ' + (y - 5) + ' ' + (x + 5) + ' ' + (y + 1) + '"/>';
    }
    let iris = '';
    const ic = p.eyeColor;
    if (p.eyes === 'glow') {
      iris = '<circle cx="' + x + '" cy="' + y + '" r="3.6" fill="' + ic + '"/><circle cx="' + x + '" cy="' + y + '" r="1.8" fill="' + shade(ic, 0.6) + '"/>';
    } else {
      iris = '<circle cx="' + x + '" cy="' + (y + 0.2) + '" r="' + (3.4 + big * 0.5) + '" fill="' + ic + '"/>' +
        '<circle cx="' + x + '" cy="' + (y + 1.4) + '" r="' + (2.2 + big * 0.4) + '" fill="' + shade(ic, -0.25) + '"/>';
      if (p.eyes === 'cat') iris += '<ellipse cx="' + x + '" cy="' + y + '" rx="0.8" ry="3" fill="#120a10"/>';
      else if (p.eyes === 'yandere') iris += '<circle cx="' + x + '" cy="' + y + '" r="0.9" fill="#120a10"/>';
      else iris += '<circle cx="' + x + '" cy="' + y + '" r="1.6" fill="#120a10"/>';
      if (p.eyes !== 'yandere') iris += '<circle cx="' + (x + 1.3) + '" cy="' + (y - 1.3) + '" r="1.1" fill="#ffffff"/>';
    }
    let s = '<clipPath id="' + id + '"><path d="' + almond + '"/></clipPath>' +
      '<path d="' + almond + '" fill="#fbf8f6"/>' +
      '<g clip-path="url(#' + id + ')">' + iris +
      (p.eyes === 'sleepy' ? '<rect x="' + (x - 8) + '" y="' + (y - 8) + '" width="16" height="4.6" fill="' + p.skin + '"/>' : '') + '</g>';
    // upper lash line
    const lidY = p.eyes === 'sleepy' ? y - 3.4 : null;
    s += lidY != null
      ? '<path fill="none" stroke="' + lash + '" stroke-width="1.8" stroke-linecap="round" d="M' + ox + ' ' + (y - tilt) + ' L' + ix + ' ' + (lidY + 1) + '"/>'
      : '<path fill="none" stroke="' + lash + '" stroke-width="1.8" stroke-linecap="round" d="M' + (ox - dir * 0.6) + ' ' + (y - tilt - 0.6) + ' Q' + x + ' ' + (y - 6 - big) + ' ' + ix + ' ' + y + '"/>';
    if (p.eyes === 'glow') s += '<circle cx="' + x + '" cy="' + y + '" r="6" fill="' + ic + '" opacity="0.18"/>';
    // anime proportions: draw the eye a little larger than the face grid
    return '<g transform="translate(' + x + ' ' + y + ') scale(1.28) translate(' + (-x) + ' ' + (-y) + ')">' + s + '</g>';
  }

  function brows(p) {
    const c = shade(p.hairColor, -0.35);
    const a = ' fill="none" stroke="' + c + '" stroke-width="1.7" stroke-linecap="round"';
    switch (p.brows) {
      case 'raised': return '<path' + a + ' d="M45 45 Q50 41 55 44 M65 44 Q70 41 75 45"/>';
      case 'angry': return '<path' + a + ' d="M45 44 L55 47 M65 47 L75 44"/>';
      case 'worried': return '<path' + a + ' d="M45 47 L55 44 M65 44 L75 47"/>';
      default: return '<path' + a + ' d="M45 46 Q50 43 55 45 M65 45 Q70 43 75 46"/>';
    }
  }

  function mouth(p) {
    const lip = p.lip || '#b4505a';
    const a = ' fill="none" stroke="' + lip + '" stroke-width="1.6" stroke-linecap="round"';
    switch (p.mouth) {
      case 'smirk': return '<path' + a + ' d="M55 71 Q61 73 66 69"/>';
      case 'grin': return '<path fill="#7a2a36" d="M54 70 Q60 70 66 70 Q65 77 60 77 Q55 77 54 70 Z"/><path fill="#fff" d="M55 70 L65 70 L64 72 L56 72 Z"/>';
      case 'fang': return '<path' + a + ' d="M55 70 Q60 74 65 70"/><path fill="#fff" d="M57 71 L58.5 74 L59.5 71.6 Z"/>';
      case 'flat': return '<path' + a + ' d="M56 71 L64 71"/>';
      case 'pout': return '<path' + a + ' d="M56 72 Q60 69.5 64 72"/>';
      case 'o': return '<ellipse cx="60" cy="72" rx="2.4" ry="2.8" fill="#7a2a36"/>';
      case 'cat': return '<path' + a + ' d="M54 70 Q57 73 60 70 Q63 73 66 70"/>';
      case 'none': return '';
      default: return '<path' + a + ' d="M55 70 Q60 74 65 70"/>';
    }
  }

  function ears(p, skin) {
    const sd = shade(skin, -0.25);
    if (p.ears === 'elf') {
      return '<path fill="' + skin + '" stroke="' + sd + '" d="M41 52 L20 36 L40 60 Z"/><path fill="' + skin + '" stroke="' + sd + '" d="M79 52 L100 36 L80 60 Z"/>';
    }
    if (p.ears === 'fin') {
      const f = p.finColor || '#3fc4b8';
      return '<path fill="' + f + '" stroke="' + shade(f, -0.3) + '" d="M41 50 L26 40 L30 48 L24 52 L30 56 L26 64 L41 60 Z"/>' +
        '<path fill="' + f + '" stroke="' + shade(f, -0.3) + '" d="M79 50 L94 40 L90 48 L96 52 L90 56 L94 64 L79 60 Z"/>';
    }
    return '<ellipse cx="40.5" cy="56" rx="3" ry="5" fill="' + skin + '" stroke="' + sd + '" stroke-width="0.8"/>' +
      '<ellipse cx="79.5" cy="56" rx="3" ry="5" fill="' + skin + '" stroke="' + sd + '" stroke-width="0.8"/>';
  }

  function topBits(p) {
    const h = p.hairColor;
    const hd = shade(h, -0.3);
    let s = '';
    if (p.animal === 'wolf') {
      s += '<path fill="' + h + '" stroke="' + hd + '" d="M38 34 L34 6 L52 24 Z"/><path fill="#f4b8b0" d="M39 28 L37 13 L47 24 Z"/>' +
        '<path fill="' + h + '" stroke="' + hd + '" d="M82 34 L86 6 L68 24 Z"/><path fill="#f4b8b0" d="M81 28 L83 13 L73 24 Z"/>';
    }
    if (p.animal === 'cat') {
      s += '<path fill="' + h + '" stroke="' + hd + '" d="M38 32 L38 10 L54 22 Z"/><path fill="#ffd6e6" d="M40 27 L40 15 L49 22 Z"/>' +
        '<path fill="' + h + '" stroke="' + hd + '" d="M82 32 L82 10 L66 22 Z"/><path fill="#ffd6e6" d="M80 27 L80 15 L71 22 Z"/>';
    }
    if (p.horns === 'curl') {
      s += '<path fill="#24182e" stroke="#4a3a5a" d="M44 26 C30 18 22 28 26 38 C28 44 34 44 34 38 C30 34 32 28 40 32 Z"/>' +
        '<path fill="#24182e" stroke="#4a3a5a" d="M76 26 C90 18 98 28 94 38 C92 44 86 44 86 38 C90 34 88 28 80 32 Z"/>';
    }
    if (p.horns === 'swept') {
      s += '<path fill="#2a0c0c" stroke="#7a1a1a" d="M46 26 C40 14 30 6 18 4 C28 12 34 20 40 32 Z"/>' +
        '<path fill="#2a0c0c" stroke="#7a1a1a" d="M74 26 C80 14 90 6 102 4 C92 12 86 20 80 32 Z"/>';
    }
    if (p.horns === 'small') {
      s += '<path fill="#3a1a3a" d="M46 26 C44 18 46 12 50 10 C49 16 50 20 52 24 Z"/><path fill="#3a1a3a" d="M74 26 C76 18 74 12 70 10 C71 16 70 20 68 24 Z"/>';
    }
    if (p.hat === 'witch') {
      s += '<path fill="' + p.hatColor + '" stroke="' + shade(p.hatColor, -0.35) + '" d="M60 -8 C64 6 72 16 80 26 L40 26 C48 16 54 6 60 -8 Z"/>' +
        '<ellipse cx="60" cy="27" rx="34" ry="6" fill="' + p.hatColor + '" stroke="' + shade(p.hatColor, -0.35) + '"/>' +
        '<path fill="#f2c14e" d="M46 22 L74 22 L76 26 L44 26 Z"/>';
    }
    if (p.hat === 'tricorn') {
      s += '<path fill="' + p.hatColor + '" stroke="#000" stroke-width="0.6" d="M24 30 C34 18 44 12 60 12 C76 12 86 18 96 30 C84 26 72 28 60 32 C48 28 36 26 24 30 Z"/>' +
        '<path fill="none" stroke="#f2c14e" stroke-width="1.4" d="M26 29 C40 24 50 26 60 30 C70 26 80 24 94 29"/>' +
        '<path fill="#f3efe6" d="M70 14 C84 2 100 6 104 10 C94 10 84 12 74 18 Z"/>';
    }
    if (p.veil) {
      s += '<path fill="#fbfaf6" stroke="#d9c88a" stroke-width="1.5" d="M34 60 C30 30 42 16 60 16 C78 16 90 30 86 60 C84 46 78 32 60 30 C42 32 36 46 34 60 Z"/>' +
        '<path fill="none" stroke="#e8c45a" stroke-width="2" d="M41 30 C50 24 70 24 79 30"/>';
    }
    if (p.circlet) s += '<path fill="none" stroke="' + p.circlet + '" stroke-width="1.6" d="M40 36 C50 31 70 31 80 36"/><circle cx="60" cy="32" r="2.2" fill="' + p.circlet + '"/>';
    if (p.tiara) s += '<path fill="#f2c14e" stroke="#b88a1e" stroke-width="0.6" d="M46 24 L50 18 L54 22 L60 14 L66 22 L70 18 L74 24 Z"/><circle cx="60" cy="19" r="1.6" fill="#5ab0ff"/>';
    if (p.flower) s += flower(78, 30, p.flower);
    if (p.halo) s += '<ellipse cx="60" cy="10" rx="18" ry="4" fill="none" stroke="#ffe9a8" stroke-width="2.5" opacity="0.9"/>';
    return s;
  }

  function flower(x, y, c) {
    let s = '<g>';
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      s += '<circle cx="' + (x + Math.cos(a) * 3.6).toFixed(1) + '" cy="' + (y + Math.sin(a) * 3.6).toFixed(1) + '" r="2.6" fill="#ffffff" stroke="#e5d9c8" stroke-width="0.4"/>';
    }
    return s + '<circle cx="' + x + '" cy="' + y + '" r="2.4" fill="' + c + '"/></g>';
  }

  function faceBits(p, skin) {
    let s = '';
    if (p.blush !== false) s += '<ellipse cx="47" cy="64" rx="4.5" ry="2.2" fill="#ff7a9a" opacity="' + (p.blush || 0.28) + '"/>' +
      '<ellipse cx="73" cy="64" rx="4.5" ry="2.2" fill="#ff7a9a" opacity="' + (p.blush || 0.28) + '"/>';
    s += '<path fill="none" stroke="' + shade(skin, -0.28) + '" stroke-width="1.1" stroke-linecap="round" d="M60 60 L59 64.5 L61 65"/>';
    if (p.freckles) s += '<g fill="' + shade(skin, -0.35) + '">' + [[46, 61], [49, 63], [44, 64], [74, 61], [71, 63], [76, 64]]
      .map(function (c) { return '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="0.8"/>'; }).join('') + '</g>';
    if (p.scales) s += '<g fill="' + p.scales + '" opacity="0.85">' + [[44, 60], [42, 64], [46, 66], [76, 60], [78, 64], [74, 66]]
      .map(function (c) { return '<path d="M' + c[0] + ' ' + (c[1] - 1.6) + ' L' + (c[0] + 1.4) + ' ' + c[1] + ' L' + c[0] + ' ' + (c[1] + 1.6) + ' L' + (c[0] - 1.4) + ' ' + c[1] + ' Z"/>'; }).join('') + '</g>';
    if (p.seams) s += '<path fill="none" stroke="#b9a48a" stroke-width="0.8" d="M42 58 L48 58 M72 58 L78 58 M52 80 L56 76 M68 80 L64 76 M60 24 L60 34"/>';
    if (p.scar === 'cheek') s += '<path fill="none" stroke="' + shade(skin, -0.3) + '" stroke-width="1" d="M70 62 L76 68"/>';
    if (p.scar === 'brow') s += '<path fill="none" stroke="' + shade(skin, -0.3) + '" stroke-width="1.1" d="M68 40 L72 50"/>';
    if (p.mole) s += '<circle cx="67" cy="75" r="0.9" fill="#4a2a24"/>';
    if (p.soot) s += '<ellipse cx="72" cy="68" rx="3.5" ry="1.6" fill="#3a3030" opacity="0.4"/>';
    return s;
  }

  function overlays(p) {
    let s = '';
    if (p.glasses) {
      const c = p.glasses;
      const r = p.bigGlasses ? 8 : 6.5;
      s += '<g fill="rgba(255,255,255,0.12)" stroke="' + c + '" stroke-width="1.4"><circle cx="50" cy="56" r="' + r + '"/><circle cx="70" cy="56" r="' + r + '"/></g>' +
        '<path fill="none" stroke="' + c + '" stroke-width="1.4" d="M' + (50 + r) + ' 55 Q60 52 ' + (70 - r) + ' 55"/>';
      if (p.cracked) s += '<path fill="none" stroke="#fff" stroke-width="0.7" d="M66 51 L70 56 L68 60 M70 56 L75 57"/>';
    }
    if (p.mask) s += '<path fill="' + p.mask + '" stroke="' + shade(p.mask, -0.3) + '" d="M41 62 C48 64 72 64 79 62 C78 72 70 82 60 84 C50 82 42 72 41 62 Z"/>';
    if (p.tusks) s += '<path fill="#f6f0dc" stroke="#c9bf9a" stroke-width="0.6" d="M54 74 L53 66 L57 73 Z M66 74 L67 66 L63 73 Z"/>';
    if (p.earring) s += '<circle cx="79.5" cy="63" r="2.6" fill="none" stroke="#f2c14e" stroke-width="1.2"/>';
    if (p.braidFront) {
      const h = p.hairColor, d = shade(h, -0.3);
      s += '<g fill="' + h + '" stroke="' + d + '" stroke-width="1">' + [0, 1, 2, 3, 4].map(function (i) {
        return '<ellipse cx="' + (78 + i * 2) + '" cy="' + (72 + i * 9) + '" rx="5" ry="5.5"/>';
      }).join('') + '</g>';
    }
    if (p.sparkles) s += '<g fill="#fff6c8">' + [[22, 30], [100, 24], [16, 70], [104, 64], [92, 100]].map(function (c) {
      return '<path d="M' + c[0] + ' ' + (c[1] - 4) + ' L' + (c[0] + 1) + ' ' + (c[1] - 1) + ' L' + (c[0] + 4) + ' ' + c[1] + ' L' + (c[0] + 1) + ' ' + (c[1] + 1) +
        ' L' + c[0] + ' ' + (c[1] + 4) + ' L' + (c[0] - 1) + ' ' + (c[1] + 1) + ' L' + (c[0] - 4) + ' ' + c[1] + ' L' + (c[0] - 1) + ' ' + (c[1] - 1) + ' Z"/>';
    }).join('') + '</g>';
    if (p.bubbles) s += '<g fill="none" stroke="#e8ffe8" stroke-width="0.8" opacity="0.8"><circle cx="50" cy="96" r="2.5"/><circle cx="72" cy="104" r="1.8"/><circle cx="64" cy="40" r="1.5"/><circle cx="44" cy="74" r="1.2"/></g>';
    return s;
  }

  function wings(p) {
    if (p.wings === 'bat') {
      const c = '#3a1a3a';
      return '<path fill="' + c + '" d="M30 100 C14 82 4 86 2 70 C10 74 14 70 16 64 C20 70 24 68 26 62 C30 72 34 84 40 94 Z"/>' +
        '<path fill="' + c + '" d="M90 100 C106 82 116 86 118 70 C110 74 106 70 104 64 C100 70 96 68 94 62 C90 72 86 84 80 94 Z"/>';
    }
    return '';
  }

  /* ------------------------------------------------------------------ main */
  FL.portraitConfigs = {
    fenna: { skin: '#d9a77f', hairColor: '#d8b06a', hair: 'wild', bangs: 'messy', eyes: 'sharp', eyeColor: '#e2a92b', mouth: 'fang', brows: 'angry', animal: 'wolf', outfit: '#7a5a3a', collar: 'fur', trim: '#b89464', scar: 'cheek' },
    valeria: { skin: '#f0e4e8', hairColor: '#1d1622', hair: 'long', bangs: 'parted', eyes: 'sleepy', eyeColor: '#e0263f', mouth: 'fang', brows: 'raised', outfit: '#4a0c1c', collar: 'gothic', trim: '#c2264b', lip: '#9a1030', blush: 0.12 },
    sylvaine: { skin: '#f6dfcc', hairColor: '#ebe5c8', hair: 'long', bangs: 'parted', eyes: 'sleepy', eyeColor: '#4fb383', mouth: 'smile', ears: 'elf', outfit: '#3d7a52', collar: 'robe', trim: '#d8e8a8', circlet: '#d8dde8' },
    mira: { skin: '#f6dcc8', hairColor: '#ff8a3d', hair: 'twintails', bangs: 'straight', eyes: 'round', eyeColor: '#7a9a3a', mouth: 'pout', brows: 'angry', glasses: '#6a4a2a', outfit: '#2e4a7a', collar: 'v', trim: '#f3efe6', blush: 0.45, ribbon: '#3a6ad0' },
    marigold: { skin: '#f6dcc8', hairColor: '#f3c24b', hair: 'wavy', bangs: 'straight', eyes: 'yandere', eyeColor: '#7aa86a', mouth: 'smile', flower: '#f6a21b', outfit: '#e8a33a', collar: 'apron', trim: '#fbf6ea', blush: 0.5 },
    shade: { skin: '#f1d1b5', hairColor: '#4b4f63', hair: 'bob', bangs: 'side', eyes: 'sharp', eyeColor: '#b3a3e8', mouth: 'none', mask: '#2e3140', outfit: '#3a3d4a', collar: 'high', scar: 'cheek', blush: false },
    pell: { skin: '#f8e4d6', hairColor: '#b39ad9', hair: 'bun', bangs: 'straight', eyes: 'round', eyeColor: '#8a8fa0', mouth: 'o', glasses: '#4a3a5a', bigGlasses: true, outfit: '#6b5a8a', collar: 'high', blush: 0.55 },
    kit: { skin: '#f6dcc8', hairColor: '#ff9fce', hair: 'short', bangs: 'messy', eyes: 'cat', eyeColor: '#5fd0a0', mouth: 'cat', animal: 'cat', outfit: '#3d7a42', collar: 'coat', blush: 0.4 },
    malzahra: { skin: '#9b86b0', hairColor: '#f0eef5', hair: 'wild', bangs: 'swept', eyes: 'glow', eyeColor: '#ffb02e', mouth: 'grin', brows: 'raised', horns: 'curl', outfit: '#3a1a5a', collar: 'gothic', trim: '#a35cff', lip: '#5a2a6a', blush: false },
    celestine: { skin: '#f8e6d8', hairColor: '#f5efd2', hair: 'long', bangs: 'parted', eyes: 'round', eyeColor: '#6aa8e8', mouth: 'smile', veil: true, outfit: '#fbfaf6', collar: 'robe', trim: '#e8c45a', blush: 0.5 },
    brakka: { skin: '#7fae63', hairColor: '#2a2a2a', hair: 'mohawk', bangs: 'none', eyes: 'sharp', eyeColor: '#c94a2a', mouth: 'grin', brows: 'angry', tusks: true, outfit: '#6b4a2a', collar: 'strap', trim: '#3a2a1a', blush: false, lip: '#3a5a2a' },
    ignivara: { skin: '#f0c9a8', hairColor: '#d62a2a', hair: 'wild', bangs: 'swept', eyes: 'cat', eyeColor: '#ffcc33', mouth: 'fang', brows: 'raised', horns: 'swept', scales: '#c8202a', outfit: '#a01f1f', collar: 'gold' },
    lilette: { skin: '#c9a2d8', hairColor: '#ff7fb6', hair: 'bob', bangs: 'straight', eyes: 'round', eyeColor: '#ff4f8f', mouth: 'o', brows: 'worried', horns: 'small', wings: 'bat', outfit: '#1d1020', collar: 'off', trim: '#ff5fa2', blush: 0.6 },
    hilde: { skin: '#f1d1b5', hairColor: '#c4642b', hair: 'braid', bangs: 'side', eyes: 'sharp', eyeColor: '#5a7a9a', mouth: 'grin', freckles: true, soot: true, braidFront: true, outfit: '#5a3a24', collar: 'apron', trim: '#8a6a4a' },
    coralie: { skin: '#f3dcd0', hairColor: '#3fc4b8', hair: 'wavy', bangs: 'parted', eyes: 'round', eyeColor: '#3a9ad9', mouth: 'grin', ears: 'fin', finColor: '#7ee0d6', outfit: '#e88aa8', collar: 'shell', blush: 0.4 },
    morwen: { skin: '#f6dcc8', hairColor: '#3a2a24', hair: 'curly', bangs: 'curly', eyes: 'round', eyeColor: '#8a6ad9', mouth: 'smile', glasses: '#8a7a6a', cracked: true, hat: 'witch', hatColor: '#4a2f7a', outfit: '#6a4aa0', collar: 'robe', trim: '#c8a8f0' },
    aurelia: { skin: '#f8e4d6', hairColor: '#f2c14e', hair: 'braid', bangs: 'parted', eyes: 'round', eyeColor: '#4a90e0', mouth: 'smile', braidFront: true, tiara: true, outfit: '#f0e6d0', collar: 'apron', trim: '#ffffff', blush: 0.35 },
    bettina: { skin: '#efc9a8', hairColor: '#8a3324', hair: 'updo', bangs: 'side', eyes: 'sleepy', eyeColor: '#8a5a2a', mouth: 'smirk', mole: true, outfit: '#2f6b4a', collar: 'v', trim: '#e8c890', lip: '#b02a3a' },
    gloria: { skin: '#9ae69a', hairColor: '#5fc65f', hair: 'bob', bangs: 'side', eyes: 'happy', eyeColor: '#2a6a2a', lash: '#1f5a2a', mouth: 'smile', lip: '#2f8a3f', outfit: '#6fd06f', collar: 'v', bubbles: true, blush: 0.25, slime: true },
    hikari: { skin: '#f6dcc8', hairColor: '#1a1a24', hair: 'ponytail', bangs: 'straight', eyes: 'round', eyeColor: '#5a3a2a', mouth: 'grin', brows: 'angry', outfit: '#fbfbfb', collar: 'sailor', trim: '#24365e' },
    brunhild: { skin: '#f6dfcc', hairColor: '#d8cfa8', hair: 'braid', bangs: 'swept', eyes: 'sharp', eyeColor: '#5a7ab0', mouth: 'flat', brows: 'angry', braidFront: true, outfit: '#b9c2d0', collar: 'armor', cape: '#b01f2a', blush: 0.2 },
    rosalind: { skin: '#f8e6d8', hairColor: '#f2c94c', hair: 'drills', bangs: 'swept', eyes: 'sleepy', eyeColor: '#9a4ab0', mouth: 'smirk', brows: 'raised', outfit: '#5a2a6a', collar: 'lace', trim: '#c74bb0' },
    seven: { skin: '#f4ece4', hairColor: '#c8833a', hair: 'bob', bangs: 'straight', eyes: 'glow', eyeColor: '#ffb84a', mouth: 'flat', seams: true, outfit: '#8a6a3a', collar: 'gears', trim: '#d8a850', blush: 0.15 },
    ophelia: { skin: '#dbe8f6', hairColor: '#2a3a5a', hair: 'updo', bangs: 'parted', eyes: 'sleepy', eyeColor: '#7a9ac8', mouth: 'flat', brows: 'worried', outfit: '#b8c8e0', collar: 'off', trim: '#eef4fb', blush: 0.15, ghost: true, lip: '#6a7aa0' },
    scarlett: { skin: '#efc9a8', hairColor: '#c8262b', hair: 'curly', bangs: 'curly', eyes: 'sharp', eyeColor: '#3a8a5a', mouth: 'smirk', brows: 'raised', scar: 'brow', earring: true, hat: 'tricorn', hatColor: '#2a1414', outfit: '#b0202a', collar: 'coat' },
    amorette: { skin: '#f8e4d6', hairColor: '#ff9ad5', hair: 'wavy', bangs: 'parted', eyes: 'glow', eyeColor: '#f2c14e', mouth: 'smile', halo: true, sparkles: true, outfit: '#ff7aa8', collar: 'off', trim: '#ffd27a', blush: 0.4 },
  };

  FL.portrait = function (id) {
    const cfg = FL.portraitConfigs[id];
    if (!cfg) return '';
    const p = Object.assign({ eyes: 'round', mouth: 'smile', bangs: 'straight', collar: 'v' }, cfg);
    const skin = p.skin;
    const bg = FL.characters && FL.characters[id] ? FL.characters[id].color : '#8a7aa8';
    let inner =
      wings(p) +
      backHair(p, p.hairColor, p) +
      '<path fill="' + shade(skin, -0.18) + '" d="M53 74 L53 92 L67 92 L67 74 Z"/>' +
      body(p, skin) +
      ears(p, skin) +
      '<path fill="' + skin + '" stroke="' + shade(skin, -0.25) + '" stroke-width="0.9" d="' + FACE + '"/>' +
      faceBits(p, skin) +
      eye(50, 56, true, p) + eye(70, 56, false, p) +
      '<g transform="translate(0 -2.5)">' + brows(p) + '</g>' + mouth(p) +
      frontHair(p, p.hairColor) +
      topBits(p) +
      overlays(p);
    if (p.ghost) inner = '<g opacity="0.78">' + inner + '</g>';
    if (p.slime) inner = '<g opacity="0.88">' + inner + '</g>';
    const gid = 'bg' + (++uid);
 return '<svg viewBox="8 4 104 104" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Portrait">' +
      '<defs><radialGradient id="' + gid + '" cx="50%" cy="38%" r="70%"><stop offset="0" stop-color="' + shade(bg, 0.45) + '"/>' +
      '<stop offset="1" stop-color="' + shade(bg, -0.35) + '"/></radialGradient></defs>' +
      '<rect x="-10" y="-10" width="140" height="140" fill="url(#' + gid + ')"/>' + inner + '</svg>';
  };
})(typeof window !== 'undefined' ? window : globalThis);
