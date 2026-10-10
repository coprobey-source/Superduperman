/*
 * Synthesized UI sound effects (no audio files). FL.sfx.play(name).
 * Names: click, page, heart, heartdown, coin, stat, gift, pass, fail, heartbeat, devoted, ending, fireworks.
 */
(function (root) {
  'use strict';
  const FL = (root.FL = root.FL || {});
  let ctx = null, out = null, enabled = true, volume = 0.6, noiseBuf = null;

  function init() {
    if (ctx) return ctx;
    const AC = root.AudioContext || root.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    out = ctx.createGain();
    out.gain.value = volume * 0.5;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 4;
    out.connect(comp); comp.connect(ctx.destination);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return ctx;
  }

  function mtof(m) { return 440 * Math.pow(2, (m - 69) / 12); }

  // a short enveloped oscillator
  function tone(t, midi, dur, opts) {
    opts = opts || {};
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = opts.type || 'sine';
    o.frequency.setValueAtTime(mtof(midi), t);
    if (opts.slide) o.frequency.exponentialRampToValueAtTime(mtof(midi + opts.slide), t + dur);
    const peak = opts.gain || 0.3;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + (opts.attack || 0.005));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    let node = o;
    if (opts.lp) { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = opts.lp; o.connect(f); node = f; }
    node.connect(g);
    if (opts.pan && ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = opts.pan; g.connect(p); p.connect(out); } else g.connect(out);
    o.start(t); o.stop(t + dur + 0.05);
  }
  // a bell: sine + inharmonic partial
  function bell(t, midi, dur, gain, pan) {
    tone(t, midi, dur, { gain: gain, pan: pan });
    tone(t, midi + 19.02, dur * 0.5, { gain: gain * 0.25, pan: pan });
    tone(t, midi + 12, dur * 0.7, { gain: gain * 0.3, pan: pan });
  }
  function noise(t, dur, opts) {
    opts = opts || {};
    const s = ctx.createBufferSource(); s.buffer = noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = opts.type || 'bandpass'; f.frequency.value = opts.freq || 2000; f.Q.value = opts.q || 1;
    if (opts.sweep) f.frequency.exponentialRampToValueAtTime(opts.sweep, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(opts.gain || 0.2, t + (opts.attack || 0.01));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g);
    if (opts.pan && ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = opts.pan; g.connect(p); p.connect(out); } else g.connect(out);
    s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.05);
  }

  const SOUNDS = {
    click: function (t) { tone(t, 84, 0.06, { type: 'triangle', gain: 0.12 }); noise(t, 0.03, { freq: 4000, gain: 0.05 }); },
    page: function (t) { noise(t, 0.28, { type: 'bandpass', freq: 1200, sweep: 5000, q: 0.7, gain: 0.07, attack: 0.08 }); },
    heart: function (t) { bell(t, 81, 0.5, 0.12, -0.2); bell(t + 0.09, 88, 0.7, 0.12, 0.2); },
    heartdown: function (t) { tone(t, 64, 0.25, { type: 'triangle', gain: 0.12, lp: 1500 }); tone(t + 0.12, 59, 0.4, { type: 'triangle', gain: 0.12, lp: 1200 }); },
    coin: function (t) { tone(t, 95, 0.08, { type: 'square', gain: 0.05, lp: 5000 }); tone(t + 0.07, 100, 0.35, { type: 'square', gain: 0.05, lp: 6000 }); },
    stat: function (t) { [72, 76, 79, 84].forEach(function (m, i) { tone(t + i * 0.06, m, 0.3, { type: 'triangle', gain: 0.1 }); }); },
    gift: function (t) { [84, 88, 91, 96, 100].forEach(function (m, i) { bell(t + i * 0.05, m, 0.4, 0.06, (i - 2) * 0.3); }); },
    pass: function (t) { [67, 71, 74, 79].forEach(function (m) { tone(t, m, 0.6, { type: 'triangle', gain: 0.07 }); }); tone(t + 0.1, 86, 0.5, { gain: 0.06 }); },
    fail: function (t) { tone(t, 50, 0.35, { type: 'sawtooth', gain: 0.08, lp: 500, slide: -3 }); noise(t, 0.15, { type: 'lowpass', freq: 300, gain: 0.12 }); },
    heartbeat: function (t) {
      [0, 0.22, 0.9, 1.12].forEach(function (d, i) { tone(t + d, i % 2 ? 31 : 33, 0.18, { gain: i % 2 ? 0.25 : 0.35, lp: 160 }); });
    },
    devoted: function (t) { [72, 76, 79, 83, 86, 88, 91].forEach(function (m, i) { bell(t + i * 0.07, m, 1.2, 0.06, Math.sin(i) * 0.6); }); },
    ending: function (t) {
      const seq = [[67, 0], [72, 0.18], [76, 0.36], [79, 0.54], [84, 0.8]];
      seq.forEach(function (n) { tone(t + n[1], n[0], 0.5, { type: 'sawtooth', gain: 0.06, lp: 2500, attack: 0.02 }); tone(t + n[1], n[0] - 12, 0.5, { type: 'triangle', gain: 0.06 }); });
      [72, 76, 79, 84].forEach(function (m) { tone(t + 0.8, m, 1.8, { type: 'triangle', gain: 0.06, attack: 0.05 }); });
    },
    fireworks: function (t) {
      for (let i = 0; i < 5; i++) {
        const s = t + i * 0.55 + Math.random() * 0.2, pan = Math.random() * 1.6 - 0.8;
        noise(s, 0.5, { type: 'bandpass', freq: 600, sweep: 3000, q: 2, gain: 0.03, attack: 0.4, pan: pan });   // whistle up
        noise(s + 0.5, 0.6, { type: 'lowpass', freq: 400, gain: 0.35, pan: pan });                              // boom
        for (let k = 0; k < 10; k++) noise(s + 0.6 + Math.random() * 0.7, 0.04, { type: 'highpass', freq: 3000, gain: 0.08, pan: pan + (Math.random() - 0.5) * 0.4 });
      }
    },
  };

  FL.sfx = {
    play: function (name) {
      if (!enabled || !SOUNDS[name]) return;
      try {
        if (!init()) return;
        if (ctx.state === 'suspended') ctx.resume();
        SOUNDS[name](ctx.currentTime + 0.01);
      } catch (e) { /* audio unavailable */ }
    },
    setEnabled: function (on) { enabled = !!on; },
    isEnabled: function () { return enabled; },
    setVolume: function (v) { volume = Math.max(0, Math.min(1, v)); if (out) out.gain.value = volume * 0.5; },
    getVolume: function () { return volume; },
    names: Object.keys(SOUNDS),
  };
})(typeof window !== 'undefined' ? window : globalThis);
