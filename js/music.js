/*
 * Generative background music with the Web Audio API. No audio files: each
 * theme is a small recipe (tempo, key, mode, chord progression, instruments)
 * and the engine composes bars on the fly. Phrases repeat every 8 bars so the
 * tunes are recognizable rather than random noodling.
 *
 * FL.music.start() / stop() / setTheme(name) / setVolume(0..1)
 */
(function (root) {
  'use strict';
  const FL = (root.FL = root.FL || {});

  const MODES = {
    major: [0, 2, 4, 5, 7, 9, 11],
    minor: [0, 2, 3, 5, 7, 8, 10],
    dorian: [0, 2, 3, 5, 7, 9, 10],
    lydian: [0, 2, 4, 6, 7, 9, 11],
    mixo: [0, 2, 4, 5, 7, 9, 10],
    harm: [0, 2, 3, 5, 7, 8, 11],
    phrygian: [0, 1, 3, 5, 7, 8, 10],
  };

  // prog: scale degrees (0 = I). rhythm: 8th-note grid of where melody may play.
  const THEMES = {
    title: { bpm: 74, root: 64, mode: 'major', prog: [0, 5, 3, 4], pad: 'sine', lead: 'sine', density: 0.45, rhythm: [1, 0, 1, 0, 1, 1, 0, 1], seventh: true, perc: null, bell: true },
    town: { bpm: 96, root: 60, mode: 'major', prog: [0, 4, 5, 3], pad: 'triangle', lead: 'triangle', density: 0.55, rhythm: [1, 0, 1, 1, 0, 1, 1, 0], bass: 'walk', perc: 'light' },
    tavern: { bpm: 138, root: 62, mode: 'dorian', prog: [0, 6, 0, 4], pad: 'triangle', lead: 'square', density: 0.85, rhythm: [1, 1, 1, 1, 1, 0, 1, 1], bass: 'pump', perc: 'jig', leadCut: 2200 },
    forest: { bpm: 70, root: 64, mode: 'lydian', prog: [0, 1, 0, 4], pad: 'sine', lead: 'sine', density: 0.35, rhythm: [1, 0, 0, 1, 0, 1, 0, 0], bell: true, perc: null },
    night: { bpm: 58, root: 57, mode: 'harm', prog: [0, 5, 3, 4], pad: 'sawtooth', padCut: 700, lead: 'triangle', density: 0.3, rhythm: [1, 0, 0, 0, 1, 0, 1, 0], bass: 'drone', perc: null },
    temple: { bpm: 54, root: 65, mode: 'major', prog: [0, 3, 5, 4], pad: 'sine', lead: 'sine', density: 0.18, rhythm: [1, 0, 0, 0, 0, 0, 1, 0], seventh: true, bell: true, perc: null },
    library: { bpm: 66, root: 62, mode: 'major', prog: [0, 5, 1, 4], pad: 'sine', lead: 'sine', density: 0.3, rhythm: [1, 0, 1, 0, 0, 1, 0, 0], bell: true, perc: null },
    sea: { bpm: 84, root: 62, mode: 'mixo', prog: [0, 6, 3, 0], pad: 'triangle', lead: 'triangle', density: 0.45, rhythm: [1, 0, 0, 1, 1, 0, 1, 0], bass: 'walk', perc: 'waves' },
    noble: { bpm: 112, root: 67, mode: 'major', prog: [0, 3, 4, 0], meter: 3, pad: 'triangle', lead: 'triangle', density: 0.6, rhythm: [1, 0, 1, 1, 1, 0], bass: 'waltz', perc: null, seventh: true },
    cave: { bpm: 66, root: 52, mode: 'phrygian', prog: [0, 1, 0, 6], pad: 'sine', lead: 'sine', density: 0.22, rhythm: [1, 0, 0, 0, 0, 1, 0, 0], bass: 'drone', bell: true, perc: null },
    epic: { bpm: 92, root: 57, mode: 'minor', prog: [0, 5, 2, 6], pad: 'sawtooth', padCut: 1200, lead: 'square', leadCut: 1800, density: 0.55, rhythm: [1, 0, 1, 1, 1, 0, 1, 0], bass: 'pump', perc: 'drum' },
    romance: { bpm: 66, root: 65, mode: 'major', prog: [0, 5, 3, 4, 0, 2, 3, 4], pad: 'sine', lead: 'sine', density: 0.42, rhythm: [1, 0, 0, 1, 1, 0, 1, 0], seventh: true, bass: 'walk', perc: null, legato: true },
    festival: { bpm: 122, root: 67, mode: 'major', prog: [0, 4, 5, 3], pad: 'triangle', lead: 'triangle', density: 0.75, rhythm: [1, 1, 0, 1, 1, 0, 1, 1], bass: 'pump', perc: 'light', bell: true },
    tension: { bpm: 112, root: 57, mode: 'harm', prog: [0, 0, 5, 4], pad: 'sawtooth', padCut: 900, lead: 'square', leadCut: 1500, density: 0.6, rhythm: [1, 1, 0, 1, 1, 0, 1, 1], bass: 'pump', perc: 'drum' },
  };

  const VOL_KEY = 'hgf_volume';
  let ctx = null, master = null, bus = null, verb = null, noiseBuf = null;
  let timer = null, running = false;
  let theme = 'title', next = null;
  let nextBar = 0, bar = 0, lastNote = null;
  let volume = 0.5;
  try { const v = parseFloat(localStorage.getItem(VOL_KEY)); if (!isNaN(v)) volume = v; } catch (e) { /* ignore */ }

  function freq(n) { return 440 * Math.pow(2, (n - 69) / 12); }

  function rng(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function hash(str) { let h = 2166136261; for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619); return h; }

  function scaleNote(T, deg, base) {
    const m = MODES[T.mode];
    const oct = Math.floor(deg / 7);
    return base + oct * 12 + m[((deg % 7) + 7) % 7];
  }

  function init() {
    const AC = root.AudioContext || root.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);
    bus = ctx.createGain();
    bus.gain.value = 1;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18; comp.ratio.value = 3;
    bus.connect(comp); comp.connect(master);
    // simple generated-impulse reverb
    verb = ctx.createConvolver();
    const len = ctx.sampleRate * 2.4;
    const ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = ir.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
    }
    verb.buffer = ir;
    const wet = ctx.createGain(); wet.gain.value = 0.32;
    verb.connect(wet); wet.connect(comp);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const nd = noiseBuf.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
    return true;
  }

  function voice(type, f, t, dur, peak, opts) {
    opts = opts || {};
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f, t);
    if (opts.detune) o.detune.setValueAtTime(opts.detune, t);
    const g = ctx.createGain();
    const atk = opts.attack != null ? opts.attack : 0.01;
    const rel = opts.release != null ? opts.release : dur * 0.9;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + atk);
    if (opts.sustain) {
      g.gain.setValueAtTime(peak, t + dur - rel * 0.5);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur + rel * 0.5);
    } else {
      g.gain.exponentialRampToValueAtTime(0.0001, t + atk + rel);
    }
    let out = g;
    if (opts.cut) {
      const f2 = ctx.createBiquadFilter();
      f2.type = 'lowpass'; f2.frequency.value = opts.cut; f2.Q.value = 0.7;
      g.connect(f2); out = f2;
    }
    o.connect(g);
    out.connect(bus);
    if (opts.wet) out.connect(verb);
    o.start(t);
    o.stop(t + dur + (opts.sustain ? rel : 0) + 0.1);
  }

  function noise(t, dur, peak, cut, type) {
    const s = ctx.createBufferSource();
    s.buffer = noiseBuf;
    const f = ctx.createBiquadFilter();
    f.type = type || 'highpass'; f.frequency.value = cut;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + Math.min(0.01, dur / 4));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(bus);
    s.start(t, Math.random() * 0.5, dur + 0.05);
  }

  function kick(t, peak) {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.frequency.setValueAtTime(120, t);
    o.frequency.exponentialRampToValueAtTime(45, t + 0.15);
    g.gain.setValueAtTime(peak, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
    o.connect(g); g.connect(bus);
    o.start(t); o.stop(t + 0.3);
  }

  function scheduleBar(t) {
    if (next) { theme = next; next = null; bar = 0; lastNote = null; }
    const T = THEMES[theme] || THEMES.town;
    const meter = T.meter || 4;
    const beat = 60 / T.bpm;
    const barDur = beat * meter;
    const deg = T.prog[bar % T.prog.length];
    const chord = [0, 2, 4].concat(T.seventh ? [6] : []).map(function (i) { return deg + i; });

    // pad
    chord.forEach(function (d, i) {
      voice(T.pad, freq(scaleNote(T, d, T.root - 12)), t, barDur, 0.035, { attack: barDur * 0.3, release: barDur * 0.5, sustain: true, cut: T.padCut || 1600, wet: true, detune: i % 2 ? 6 : -6 });
    });

    // bass
    const bassNote = freq(scaleNote(T, deg, T.root - 24));
    if (T.bass === 'drone') voice('sine', bassNote, t, barDur, 0.09, { attack: 0.3, release: barDur * 0.6, sustain: true });
    else if (T.bass === 'pump') for (let b = 0; b < meter; b++) voice('triangle', bassNote, t + b * beat, beat * 0.8, 0.12, { release: beat * 0.6, cut: 600 });
    else if (T.bass === 'waltz') {
      voice('triangle', bassNote, t, beat, 0.13, { release: beat * 0.8, cut: 700 });
      for (let b = 1; b < 3; b++) chord.slice(0, 3).forEach(function (d) { voice('triangle', freq(scaleNote(T, d, T.root - 12)), t + b * beat, beat * 0.5, 0.03, { release: beat * 0.4, cut: 1400 }); });
    } else if (T.bass === 'walk') {
      voice('triangle', bassNote, t, beat * 2, 0.12, { release: beat * 1.5, cut: 700 });
      voice('triangle', freq(scaleNote(T, deg + 4, T.root - 24)), t + beat * 2, beat * 2, 0.09, { release: beat * 1.5, cut: 700 });
    }

    // melody: seeded per (theme, bar mod 8) so phrases repeat
    const r = rng(hash(theme + ':' + (bar % 8)));
    const steps = meter * 2;
    const step = beat / 2;
    const lo = T.root, hi = T.root + 16;
    for (let i = 0; i < steps; i++) {
      if (!T.rhythm[i % T.rhythm.length] || r() > T.density) continue;
      let n;
      const strong = i % 2 === 0;
      if (strong || lastNote == null) {
        const tone = chord[Math.floor(r() * 3)];
        n = scaleNote(T, tone, T.root);
        if (lastNote != null && Math.abs(n - lastNote) > 7) n += n > lastNote ? -12 : 12;
      } else {
        // step to a neighbouring scale tone
        let d = 0;
        for (let k = -2; k < 30; k++) { if (scaleNote(T, k, T.root) >= lastNote) { d = k; break; } }
        n = scaleNote(T, d + (r() < 0.5 ? -1 : 1), T.root);
      }
      while (n < lo) n += 12;
      while (n > hi) n -= 12;
      lastNote = n;
      const len = T.legato ? step * (1.5 + r() * 2) : step * 0.9;
      voice(T.lead, freq(n), t + i * step, len, T.lead === 'square' ? 0.03 : 0.07, { release: len, cut: T.leadCut || 3200, wet: true });
      if (T.bell && r() < 0.25) voice('sine', freq(n + 12), t + i * step, step * 3, 0.025, { release: step * 3, wet: true });
    }

    // percussion
    if (T.perc === 'light') {
      for (let i = 0; i < steps; i++) noise(t + i * step, 0.05, i % 2 ? 0.012 : 0.02, 7000);
      kick(t, 0.25); if (meter === 4) kick(t + beat * 2, 0.18);
    } else if (T.perc === 'jig') {
      for (let b = 0; b < meter; b++) { kick(t + b * beat, b % 2 ? 0.12 : 0.22); noise(t + b * beat + step, 0.06, 0.02, 5000); }
    } else if (T.perc === 'drum') {
      kick(t, 0.3); kick(t + beat * 1.5, 0.2); kick(t + beat * 2, 0.3);
      noise(t + beat, 0.12, 0.04, 1500, 'bandpass'); noise(t + beat * 3, 0.12, 0.04, 1500, 'bandpass');
    } else if (T.perc === 'waves' && bar % 2 === 0) {
      noise(t, barDur * 1.8, 0.03, 500, 'lowpass');
    }

    bar += 1;
    return barDur;
  }

  function tick() {
    if (!running) return;
    while (nextBar < ctx.currentTime + 0.6) {
      nextBar += scheduleBar(Math.max(nextBar, ctx.currentTime + 0.05));
    }
  }

  function fadeTo(v, secs) {
    if (!ctx) return;
    const now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(master.gain.value, now);
    master.gain.linearRampToValueAtTime(v, now + secs);
  }

  FL.music = {
    themes: Object.keys(THEMES),
    start: function () {
      if (!ctx && !init()) return;
      if (ctx.state === 'suspended') ctx.resume();
      if (running) return;
      running = true;
      nextBar = ctx.currentTime + 0.1;
      fadeTo(volume * 0.6, 1.5);
      timer = setInterval(tick, 80);
      tick();
    },
    stop: function () {
      running = false;
      if (timer) clearInterval(timer);
      timer = null;
      fadeTo(0, 0.6);
    },
    setTheme: function (name) {
      if (!THEMES[name] || name === theme || name === next) return;
      if (!running) { theme = name; return; }
      next = name;
      // a quick dip so the change of tune doesn't clash
      const now = ctx.currentTime;
      master.gain.cancelScheduledValues(now);
      master.gain.setValueAtTime(master.gain.value, now);
      master.gain.linearRampToValueAtTime(volume * 0.15, now + 0.4);
      master.gain.linearRampToValueAtTime(volume * 0.6, now + 1.8);
    },
    setVolume: function (v) {
      volume = Math.max(0, Math.min(1, v));
      try { localStorage.setItem(VOL_KEY, String(volume)); } catch (e) { /* ignore */ }
      if (running) fadeTo(volume * 0.6, 0.2);
    },
    getVolume: function () { return volume; },
    isRunning: function () { return running; },
  };
})(typeof window !== 'undefined' ? window : globalThis);
