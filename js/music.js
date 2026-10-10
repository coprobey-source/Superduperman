/*
 * Hearts of Generic FantasyLandia — soundtrack engine.
 *
 * No audio files: everything is synthesized with the Web Audio API.
 *  - Instruments: plucked strings (Karplus-Strong: harp, lute, guitar, harpsichord),
 *    FM keys and bells (electric piano, celesta, music box, temple bell), flute,
 *    bowed strings (pad and solo), choir, organ, accordion, fiddle, brass,
 *    upright bass and a small percussion kit, plus ambience (waves, drips, birds).
 *  - Music: each theme is hand-composed — melody and chord progression written in
 *    scale degrees (see SONGS below), arranged per theme, with voice leading,
 *    humanized timing and variations on repeats.
 *  - Mix: per-instrument channels with panning and reverb sends, a generated
 *    stereo hall reverb, and a compressor + limiter on the master bus.
 *
 * FL.music.start() / stop() / setTheme(name) / setVolume(0..1)
 * FL.music.render(name, seconds) -> Promise<AudioBuffer> (offline, for testing)
 */
(function (root) {
  'use strict';
  const FL = (root.FL = root.FL || {});

  /* ================================================================== theory */
  const MODES = {
    major: [0, 2, 4, 5, 7, 9, 11],
    minor: [0, 2, 3, 5, 7, 8, 10],
    dorian: [0, 2, 3, 5, 7, 9, 10],
    lydian: [0, 2, 4, 6, 7, 9, 11],
    mixo: [0, 2, 4, 5, 7, 9, 10],
    harm: [0, 2, 3, 5, 7, 8, 11],
    phrygian: [0, 1, 3, 5, 7, 8, 10],
  };

  // degree index (0-based, may exceed 6 or go negative) -> semitones above tonic
  function degSemis(mode, d) {
    const m = MODES[mode];
    const oct = Math.floor(d / 7);
    return oct * 12 + m[((d % 7) + 7) % 7];
  }

  // Melody notation: "3/1.5 2/.5 5' r/2 #4,"
  //  digit 1-7 = scale degree, ' = octave up, , = octave down, # / b = alter,
  //  /n = duration in beats (default 1), r = rest, | = bar line (checked).
  function parseMelody(str, mode, meter) {
    const notes = [];
    let t = 0, barStart = 0;
    str.trim().split(/\s+/).forEach(function (tok) {
      if (tok === '|') {
        if (Math.abs(t - barStart - meter) > 1e-6) throw new Error('bar length ' + (t - barStart) + ' != ' + meter + ' in "' + str + '"');
        barStart = t;
        return;
      }
      const m = /^([#b]?)([1-7r])([',]*)(?:\/([\d.]+))?$/.exec(tok);
      if (!m) throw new Error('bad melody token ' + tok);
      const dur = m[4] ? parseFloat(m[4]) : 1;
      if (m[2] !== 'r') {
        let semis = degSemis(mode, parseInt(m[2], 10) - 1);
        for (const c of m[3]) semis += c === "'" ? 12 : -12;
        if (m[1] === '#') semis += 1;
        if (m[1] === 'b') semis -= 1;
        notes.push({ t: t, dur: dur, semis: semis, deg: parseInt(m[2], 10) - 1 });
      }
      t += dur;
    });
    if (Math.abs(t - barStart - meter) > 1e-6) throw new Error('last bar length ' + (t - barStart) + ' in "' + str + '"');
    return { notes: notes, beats: t };
  }

  // Chord notation per bar, bars separated by |: "1 | 6 | 4 5.7"
  // digit = scale degree of the root, .7 adds the seventh. Two chords split the bar.
  function parseChords(str) {
    return str.split('|').map(function (bar) {
      return bar.trim().split(/\s+/).map(function (c) {
        const m = /^([1-7])(\.7)?$/.exec(c);
        if (!m) throw new Error('bad chord ' + c);
        return { deg: parseInt(m[1], 10) - 1, seventh: !!m[2] };
      });
    });
  }

  function chordSemis(mode, ch) {
    const out = [0, 2, 4].concat(ch.seventh ? [6] : []).map(function (i) { return degSemis(mode, ch.deg + i); });
    return out;
  }

  /* ================================================================== songs */
  // Every theme: key (MIDI tonic), mode, meter (beats/bar), bpm, A and B phrases,
  // a form, and an arrangement. Melodies were written so chord tones land on the
  // strong beats (tools/validate.js checks this).
  const SONGS = {
    title: {
      key: 64, mode: 'major', meter: 4, bpm: 76,
      A: { chords: '1 | 6 | 4 | 5', mel: '3/1.5 2/.5 1 5 | 6/2 3 5 | 4/1.5 3/.5 4 6 | 5/3 r' },
      B: { chords: '4 | 5 | 3 6 | 2 5.7', mel: "6 1' 6 5 | 5/1.5 4/.5 2/2 | 3 5 6 3 | 2/2 5,/2" },
      form: ['A', 'A2', 'B', 'A2', 'Bi'],
      lead: 'flute', lead2: 'violin', accomp: ['harp', 'arp'], pad: 'strings', bass: ['bass', 'root'], drums: null,
    },
    town: {
      key: 62, mode: 'major', meter: 4, bpm: 100,
      A: { chords: '1 | 4 | 1 | 5', mel: "1/.5 2/.5 3 3/.5 4/.5 5 | 6 4 6/.5 5/.5 4 | 3 5 1' 5 | 2 3/.5 2/.5 5,/2" },
      B: { chords: '6 | 4 | 2 | 5.7', mel: "6/1.5 5/.5 6 1' | 4/1.5 3/.5 4 6 | 2 4 6 4 | 5/2 4 2" },
      form: ['A', 'A2', 'B', 'A', 'Ai', 'B', 'A2'],
      lead: 'flute', lead2: 'fiddle', accomp: ['lute', 'strum'], pad: null, bass: ['bass', 'roots2'], drums: 'light',
    },
    tavern: {
      key: 62, mode: 'dorian', meter: 6, bpm: 300, // 6/8 jig: the beat is an eighth note
      A: { chords: '1 | 7 | 1 | 4 7', mel: "1/2 3 5/2 3 | 7,/2 2 4/2 2 | 1 2 3 5 3 1 | 4/2 6 7/2 2'" },
      B: { chords: '4 | 7 | 4 | 5 1', mel: "6/2 4 6 1' 6 | 7/2 5 7 2' 7 | 1'/2 6 4/2 6 | 5 6 5 3/2 1" },
      form: ['A', 'A2', 'B', 'B2', 'Ai', 'A', 'B2', 'Bi'],
      lead: 'fiddle', lead2: 'flute', accomp: ['guitar', 'jig'], pad: 'accordion', bass: ['bass', 'jig'], drums: 'jig',
    },
    forest: {
      key: 64, mode: 'lydian', meter: 4, bpm: 72,
      A: { chords: '1 | 2 | 1 | 2', mel: '3/2 5 7 | 6/3 r | 5/2 3 1 | 2/4' },
      B: { chords: '6 | 3 | 2 | 1', mel: "1' 7 6/2 | 5/2 3/2 | 4/1.5 2/.5 6/2 | 5/2 3/2" },
      form: ['A', 'A2', 'Bi', 'B', 'A'],
      lead: 'flute', lead2: 'celesta', accomp: ['harp', 'arp'], pad: 'strings', bass: ['bass', 'root'], drums: null, extras: ['birds'],
    },
    night: {
      key: 57, mode: 'harm', meter: 3, bpm: 112, leadOctave: 12,
      A: { chords: '1 | 4 | 5 | 1', mel: "5/2 1' | 6/2 4 | 7 5 2 | 1/2 7," },
      B: { chords: '6 | 3 | 4 | 5', mel: "1'/2 3' | 3'/2 7 | 1' 6 4 | 7/2 5" },
      form: ['A', 'A2', 'B', 'Ai', 'A'],
      lead: 'celesta', lead2: 'strings', accomp: ['harpsichord', 'waltz'], pad: 'organ', bass: ['bass', 'waltz'], drums: null,
    },
    temple: {
      key: 65, mode: 'major', meter: 4, bpm: 54,
      A: { chords: '1 | 4 | 6 | 5', mel: '5/2 3/2 | 6/2 4/2 | 3/2 1/2 | 2/4' },
      B: { chords: '4 | 1 | 2 | 5', mel: "1'/2 6/2 | 5/2 3/2 | 4/2 6/2 | 5/4" },
      form: ['A', 'B', 'Ai', 'A2', 'B'],
      lead: 'bell', lead2: 'bell', accomp: ['harp', 'arpSlow'], pad: 'choir', bass: ['bass', 'root'], drums: null,
    },
    library: {
      key: 62, mode: 'major', meter: 3, bpm: 96, leadOctave: 12,
      A: { chords: '1 | 5 | 6 | 4', mel: '3 2 1 | 2/2 5, | 6, 1 3 | 4/3' },
      B: { chords: '4 | 1 | 2 | 5', mel: '6 5 4 | 3/2 1 | 2 4 6 | 5/2 7,' },
      form: ['A', 'A2', 'B', 'Ai', 'A'],
      lead: 'musicbox', lead2: 'musicbox', accomp: ['epiano', 'waltz'], pad: null, bass: ['bass', 'waltz'], drums: null,
    },
    sea: {
      key: 62, mode: 'mixo', meter: 6, bpm: 190,
      A: { chords: '1 | 7 | 4 | 1', mel: "5/3 3/2 1 | 7,/3 2/3 | 1/2 4 6/2 4 | 3/6" },
      B: { chords: '4 | 1 | 7 | 5', mel: "6/2 1' 6/2 4 | 5/3 3/3 | 4/2 2 7,/2 2 | 5,/3 r/3" },
      form: ['A', 'A2', 'B', 'Ai', 'A', 'B2'],
      lead: 'flute', lead2: 'fiddle', accomp: ['guitar', 'arp6'], pad: 'accordion', bass: ['bass', 'jig'], drums: null, extras: ['waves'],
    },
    noble: {
      key: 67, mode: 'major', meter: 3, bpm: 156,
      A: { chords: '1 | 4 | 5 | 1', mel: "3 5 1' | 1'/2 6 | 7/1.5 6/.5 5 | 5/3" },
      B: { chords: '6 | 2 | 5 | 1', mel: "1'/2 3' | 2'/2 6 | 7 2' 5 | 1'/3" },
      form: ['A', 'A2', 'B', 'A', 'Bi', 'A2'],
      lead: 'violin', lead2: 'flute', accomp: ['harpsichord', 'waltz'], pad: 'strings', bass: ['bass', 'waltz'], drums: null,
    },
    cave: {
      key: 52, mode: 'phrygian', meter: 4, bpm: 60, leadOctave: 12,
      A: { chords: '1 | 2 | 1 | 1', mel: 'r/2 5/2 | 6/3 r | 5 4 2/2 | 1/4' },
      dissonance: ['A:3:3'], // the flat second rubbing against the tonic: deliberately eerie
      B: { chords: '4 | 2 | 7 | 1', mel: '6/2 4/2 | 2/4 | 7,/2 2/2 | 1/4' },
      form: ['A', 'Bi', 'B', 'Ai'],
      lead: 'flute', lead2: 'celesta', accomp: null, pad: 'stringsDark', bass: ['bass', 'drone'], drums: null, extras: ['drips'],
    },
    epic: {
      key: 57, mode: 'minor', meter: 4, bpm: 96,
      A: { chords: '1 | 6 | 3 | 7', mel: '1/1.5 5,/.5 1 3 | 1/2 6,/2 | 3/1.5 5/.5 3 2 | 2/4' },
      B: { chords: '4 | 1 | 6 | 7', mel: "4/1.5 6/.5 1'/2 | 5/1.5 3/.5 1/2 | 1' 6 3 6 | 7/2 2'/2" },
      form: ['A', 'A2', 'B', 'A2', 'Ai'],
      lead: 'brass', lead2: 'brass', accomp: ['strings', 'pulse'], pad: 'stringsDark', bass: ['bass', 'pulse'], drums: 'march',
    },
    romance: {
      key: 65, mode: 'major', meter: 4, bpm: 66,
      A: { chords: '1.7 | 6.7 | 2.7 | 5.7', mel: '3/1.5 2/.5 3 5 | 1\'/2 6/2 | 4/1.5 3/.5 4 6 | 5/3 r' },
      B: { chords: '4.7 | 3.7 | 6.7 | 2.7 5.7', mel: "6 1' 3' 1' | 7/2 5/2 | 6/1.5 5/.5 3 1 | 2/2 5/2" },
      form: ['A', 'A2', 'B', 'Ai', 'A2'],
      lead: 'flute', lead2: 'cello', accomp: ['epiano', 'block'], pad: 'strings', bass: ['bass', 'root'], drums: null, extraAccomp: ['harp', 'arpSlow'],
    },
    festival: {
      key: 67, mode: 'major', meter: 4, bpm: 126,
      A: { chords: '1 | 4 | 5 | 1', mel: "5/.5 5/.5 6/.5 5/.5 3 1 | 4/.5 4/.5 6/.5 4/.5 1'/2 | 7/.5 6/.5 5/.5 4/.5 2 5 | 3 1 1/2" },
      B: { chords: '6 | 4 | 2 | 5', mel: "6 1' 6 3 | 4 6 1'/2 | 2' 1'/.5 7/.5 6 4 | 5/2 7, 2" },
      form: ['A', 'A2', 'B', 'A2', 'Ai', 'B2'],
      lead: 'flute', lead2: 'fiddle', accomp: ['guitar', 'strum'], pad: 'accordion', bass: ['bass', 'roots2'], drums: 'festival',
    },
    tension: {
      key: 62, mode: 'harm', meter: 4, bpm: 116,
      A: { chords: '1 | 1 | 6 | 5', mel: '1/1.5 1/.5 3 2 | 1/2 7,/2 | 6,/1.5 1/.5 3 1 | 7,/4' },
      dissonance: ['A:2:3'], // the leading tone grinding against the minor tonic
      B: { chords: '4 | 1 | 2 | 5', mel: '4/1.5 3/.5 4 6 | 5/2 3/2 | 4 2 4 6 | 7/2 5/2' },
      form: ['A', 'A2', 'B', 'A2', 'Ai'],
      lead: 'brass', lead2: 'violin', accomp: ['strings', 'pulse'], pad: 'stringsDark', bass: ['bass', 'pulse'], drums: 'tension',
    },
  };

  // Loudness trims in dB, measured with tools so every theme sits at a similar level.
  const TRIM = { cave: 0.5, epic: 0.9, festival: 0.6, forest: 0.8, library: 3.6, night: 3.8, noble: 2.8, romance: 0.2, sea: 0.0, tavern: 0.4, temple: 2.1, tension: 2.0, title: 0.4, town: -0.4 };
  Object.keys(TRIM).forEach(function (k) { SONGS[k].trim = Math.pow(10, TRIM[k] / 20); });

  // Pre-parse every song once.
  Object.keys(SONGS).forEach(function (k) {
    const S = SONGS[k];
    ['A', 'B'].forEach(function (sec) {
      S[sec].bars = parseChords(S[sec].chords);
      S[sec].melody = parseMelody(S[sec].mel, S.mode, S.meter);
      if (S[sec].melody.beats !== S[sec].bars.length * S.meter) throw new Error(k + '.' + sec + ': melody/chord length mismatch');
    });
  });

  /* ================================================================== instruments */
  // Mixer settings per instrument: level, pan, reverb send.
  // [level, pan, reverb send, highpass Hz, stereo-widen, lowpass Hz, lowpass Q]
  // Static tone filters live on the channel (shared by every note) to keep the graph small.
  const CH = {
    flute: [0.39, 0.15, 0.4, 250, false, 4200], fiddle: [0.328, 0.28, 0.32, 200, false, 4200, 1.1], violin: [0.302, 0.22, 0.42, 200, false, 3600, 1.1],
    cello: [0.4, -0.15, 0.38, 60, false, 1700, 1], celesta: [0.42, 0.28, 0.5, 300], musicbox: [0.36, 0.22, 0.55, 400], bell: [0.425, 0.05, 0.65, 150],
    brass: [0.707, 0.12, 0.32, 120], harp: [0.567, -0.38, 0.42, 90, false, 5200], lute: [0.621, -0.32, 0.28, 110, false, 4200],
    guitar: [0.594, -0.34, 0.28, 100, false, 5000], harpsichord: [0.405, -0.3, 0.32, 150], epiano: [0.459, -0.2, 0.34, 110],
    strings: [0.156, 0, 0.5, 180, true, 2000], stringsDark: [0.156, 0, 0.55, 110, true, 1000], choir: [0.204, 0, 0.65, 200, true, 2600],
    organ: [0.12, 0, 0.5, 130, true, 5000], accordion: [0.12, 0.1, 0.28, 220, true, 2200], bass: [0.3, 0, 0.06, 38, false, 650],
    drums: [0.42, 0, 0.14, 45], amb: [0.35, 0, 0.6, 200, true],
  };

  // Sustained voices: waveform, oscillator detunes (cents), attack, release, peak, vibrato [rate, cents]
  const VOICE = {
    flute: { wave: 'flute', det: [0], atk: 0.07, rel: 0.18, peak: 0.42, vib: [5.2, 9] },
    fiddle: { wave: 'sawtooth', det: [-4, 4], atk: 0.04, rel: 0.2, peak: 0.2, vib: [5.8, 13] },
    violin: { wave: 'sawtooth', det: [-4, 4], atk: 0.09, rel: 0.2, peak: 0.2, vib: [5.8, 13] },
    cello: { wave: 'sawtooth', det: [-5, 5], atk: 0.12, rel: 0.3, peak: 0.26, vib: [5, 11] },
    strings: { wave: 'sawtooth', det: [-9, 9], atk: -0.4, rel: 0.6, peak: 0.2, vib: [4.6, 6] },
    stringsDark: { wave: 'sawtooth', det: [-9, 9], atk: -0.4, rel: 0.6, peak: 0.2, vib: [4.6, 6] },
    choir: { wave: 'sawtooth', det: [-6, 6], atk: -0.8, rel: 0.9, peak: 0.22, vib: [4.2, 7] },
    organ: { wave: 'organ', det: [0], atk: 0.03, rel: 0.25, peak: 0.2 },
    accordion: { wave: 'square', det: [-10, 10], atk: 0.05, rel: 0.12, peak: 0.16 },
    brass: { wave: 'sawtooth', det: [-6, 6], atk: 0.06, rel: 0.18, peak: 0.26, vib: [5.5, 8] },
  };

  function Engine(ctx) {
    this.ctx = ctx;
    this.sr = ctx.sampleRate;
    this.ks = {};
    this.drumBufs = {};
    this.noise = this.makeNoise();
    const wave = function (amps) {
      const real = new Float32Array(amps.length), imag = new Float32Array(amps.length);
      amps.forEach(function (a, i) { imag[i] = a; });
      return ctx.createPeriodicWave(real, imag);
    };
    this.waves = {
      flute: wave([0, 1, 0.3, 0.12, 0.05, 0.02]),
      organ: wave([0, 1, 0.5, 0.28, 0.18, 0, 0.08]),
      bass: wave([0, 1, 0.35, 0.12, 0.06, 0.02]),
    };
    this.out = ctx.createGain();
    // master: highpass -> glue compressor -> limiter
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 40;
    const air = ctx.createBiquadFilter(); air.type = 'highshelf'; air.frequency.value = 4500; air.gain.value = 4;
    const lowcut = ctx.createBiquadFilter(); lowcut.type = 'lowshelf'; lowcut.frequency.value = 160; lowcut.gain.value = -3;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -20; comp.ratio.value = 2.5; comp.attack.value = 0.015; comp.release.value = 0.25; comp.knee.value = 8;
    const lim = ctx.createDynamicsCompressor();
    lim.threshold.value = -4; lim.ratio.value = 20; lim.attack.value = 0.002; lim.release.value = 0.1; lim.knee.value = 0;
    this.out.connect(hp); hp.connect(lowcut); lowcut.connect(air); air.connect(comp); comp.connect(lim);
    this.master = lim;
    this.reverb = this.makeReverb();
    this.reverb.connect(this.out);
  }

  Engine.prototype.makeNoise = function () {
    const b = this.ctx.createBuffer(1, this.sr * 2, this.sr);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return b;
  };

  // A stereo hall: 15 ms pre-delay, ~2.6 s decay, high frequencies dying faster.
  Engine.prototype.makeReverb = function () {
    const ctx = this.ctx;
    const len = Math.floor(this.sr * 2.8);
    const pre = Math.floor(this.sr * 0.015);
    const ir = ctx.createBuffer(2, len, this.sr);
    for (let ch = 0; ch < 2; ch++) {
      const d = ir.getChannelData(ch);
      let lp = 0;
      for (let i = pre; i < len; i++) {
        const t = (i - pre) / (len - pre);
        const env = Math.pow(1 - t, 2.2) * Math.exp(-t * 2.5);
        const n = Math.random() * 2 - 1;
        // a one-pole lowpass that closes over time = darker tail
        const a = 0.15 + 0.8 * t;
        lp = lp + (n - lp) * (1 - a);
        d[i] = lp * env * (1.2 - 0.5 * t);
      }
    }
    const conv = ctx.createConvolver();
    conv.buffer = ir;
    const wet = ctx.createGain(); wet.gain.value = 0.85;
    const tone = ctx.createBiquadFilter(); tone.type = 'lowpass'; tone.frequency.value = 6500;
    conv.connect(tone); tone.connect(wet);
    this.verbIn = conv;
    return wet;
  };

  // A bus is one "performance" of a theme; switching themes crossfades buses.
  Engine.prototype.makeBus = function () {
    const ctx = this.ctx;
    const g = ctx.createGain();
    g.connect(this.out);
    const verbSend = ctx.createGain();
    verbSend.connect(this.verbIn);
    const bus = { gain: g, verb: verbSend, ch: {} };
    return bus;
  };

  // side: for widened instruments, 'L' or 'R' picks one of two mirrored channels.
  // Alternating notes between them spreads chords across the stereo field while
  // staying mono-compatible (no delay tricks, so no comb filtering when summed).
  Engine.prototype.channel = function (bus, name, side) {
    const cfg = CH[name] || [0.3, 0, 0.3, 40];
    if (cfg[4] && !side) side = 'L';
    const key = cfg[4] ? name + side : name;
    if (bus.ch[key]) return bus.ch[key];
    const ctx = this.ctx;
    const input = ctx.createGain();
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = cfg[3] || 40; hp.Q.value = 0.6;
    const g = ctx.createGain(); g.gain.value = cfg[0];
    input.connect(hp);
    let last = hp;
    if (cfg[5]) {
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = cfg[5]; lp.Q.value = cfg[6] || 0.7;
      last.connect(lp); last = lp;
    }
    if (name === 'choir') {
      // "ah" vowel formants, shared by all choir notes
      const f1 = ctx.createBiquadFilter(); f1.type = 'bandpass'; f1.frequency.value = 760; f1.Q.value = 5;
      const f2 = ctx.createBiquadFilter(); f2.type = 'bandpass'; f2.frequency.value = 1180; f2.Q.value = 6;
      const mixg = ctx.createGain(); mixg.gain.value = 2.6;
      last.connect(f1); last.connect(f2); f1.connect(mixg); f2.connect(mixg);
      last = mixg;
    }
    last.connect(g);
    const pan = function (v) {
      if (!ctx.createStereoPanner) return bus.gain;
      const p = ctx.createStereoPanner(); p.pan.value = v; p.connect(bus.gain); return p;
    };
    g.connect(pan(cfg[4] ? (side === 'L' ? -0.55 : 0.55) : cfg[1]));
    const sgain = ctx.createGain(); sgain.gain.value = cfg[2];
    g.connect(sgain); sgain.connect(bus.verb);
    input.vib = null;
    bus.ch[key] = input;
    return input;
  };

  // One shared vibrato LFO per instrument channel (much cheaper than one per note).
  Engine.prototype.sharedVibrato = function (bus, name, rate, cents, side) {
    const ch = this.channel(bus, name, side);
    if (ch.vib) return ch.vib;
    const lfo = this.ctx.createOscillator(); lfo.frequency.value = rate;
    const g = this.ctx.createGain(); g.gain.value = cents;
    lfo.connect(g); lfo.start();
    ch.vib = g;
    bus.lfos = (bus.lfos || []).concat([lfo]);
    return g;
  };

  function freq(m) { return 440 * Math.pow(2, (m - 69) / 12); }

  // Finished notes must be unplugged, or their gain/filter nodes stay in the
  // graph forever and the browser keeps processing them.
  function cleanup(src, nodes) {
    src.onended = function () {
      nodes.forEach(function (n) { try { n.disconnect(); } catch (e) { /* already gone */ } });
    };
  }

  // ---- Karplus-Strong plucked strings, rendered once per note and cached
  const KS = {
    harp: { len: 3.2, bright: 0.55, decay: 0.9975, pos: 0.12 },
    lute: { len: 1.8, bright: 0.45, decay: 0.993, pos: 0.2 },
    guitar: { len: 2.2, bright: 0.6, decay: 0.995, pos: 0.18 },
    harpsichord: { len: 1.6, bright: 0.95, decay: 0.992, pos: 0.06 },
  };
  Engine.prototype.ksBuffer = function (kind, midi) {
    const key = kind + midi;
    if (this.ks[key]) return this.ks[key];
    const p = KS[kind];
    const sr = this.sr;
    const f = freq(midi);
    const N = Math.max(2, Math.round(sr / f));
    const len = Math.floor(sr * p.len);
    const buf = this.ctx.createBuffer(1, len, sr);
    const y = buf.getChannelData(0);
    // excitation: filtered noise, comb-filtered for pluck position
    const exc = new Float32Array(N);
    let lp = 0;
    for (let i = 0; i < N; i++) { const n = Math.random() * 2 - 1; lp += (n - lp) * p.bright; exc[i] = lp; }
    const pd = Math.max(1, Math.round(N * p.pos));
    for (let i = 0; i < N; i++) y[i] = exc[i] - (i >= pd ? exc[i - pd] * 0.9 : 0);
    // decay factor scaled so high notes don't ring forever and low ones don't die instantly
    const dec = Math.pow(p.decay, 440 / Math.max(110, f) * 0.6 + 0.4);
    for (let i = N; i < len; i++) y[i] = dec * 0.5 * (y[i - N] + y[i - N - 1 < 0 ? 0 : i - N - 1]);
    // normalize
    let mx = 0;
    for (let i = 0; i < Math.min(len, N * 4); i++) mx = Math.max(mx, Math.abs(y[i]));
    if (mx > 0) for (let i = 0; i < len; i++) y[i] /= mx;
    buf.rate = (sr / N) / f; // tuning correction applied as playbackRate
    this.ks[key] = buf;
    return buf;
  };

  Engine.prototype.pluck = function (bus, kind, midi, t, dur, vel) {
    const ctx = this.ctx;
    const buf = this.ksBuffer(kind, midi);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.playbackRate.value = 1 / buf.rate;
    const g = ctx.createGain();
    const end = t + Math.min(buf.duration * 0.95, Math.max(dur, 0.3) + (kind === 'harp' ? 1.8 : 0.5));
    g.gain.setValueAtTime(vel * 0.5, t);
    g.gain.setTargetAtTime(0, end - 0.15, 0.06);
    src.connect(g); g.connect(this.channel(bus, kind));
    src.start(t); src.stop(end + 0.1);
    cleanup(src, [src, g]);
  };

  // ---- FM keys & bells
  const FM = {
    epiano: { ratio: 1, index: 2.2, idecay: 0.9, decay: 2.4, attack: 0.004, tine: 0.25 },
    celesta: { ratio: 4, index: 1.6, idecay: 0.35, decay: 1.8, attack: 0.002, tine: 0 },
    musicbox: { ratio: 5, index: 1.2, idecay: 0.2, decay: 1.4, attack: 0.001, tine: 0 },
    bell: { ratio: 3.5, index: 3.0, idecay: 1.2, decay: 4.5, attack: 0.002, tine: 0 },
  };
  Engine.prototype.fm = function (bus, kind, midi, t, dur, vel) {
    const ctx = this.ctx;
    const p = FM[kind];
    const f = freq(midi);
    const car = ctx.createOscillator(); car.frequency.value = f;
    const mod = ctx.createOscillator(); mod.frequency.value = f * p.ratio;
    const mg = ctx.createGain();
    mg.gain.setValueAtTime(f * p.index * (0.6 + vel * 0.4), t);
    mg.gain.exponentialRampToValueAtTime(f * p.index * 0.08 + 1, t + p.idecay);
    mod.connect(mg); mg.connect(car.frequency);
    const g = ctx.createGain();
    const len = Math.max(dur, 0.2) + p.decay;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vel * 0.45, t + p.attack);
    g.gain.setTargetAtTime(0.0001, t + p.attack, p.decay / 4.5);
    car.connect(g);
    if (p.tine) {
      // a short bright "tine" partial gives electric piano its bark
      const tn = ctx.createOscillator(); tn.frequency.value = f * 7;
      const tg = ctx.createGain(); tg.gain.setValueAtTime(vel * 0.06 * p.tine * 4, t); tg.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
      tn.connect(tg); tg.connect(this.channel(bus, kind)); tn.start(t); tn.stop(t + 0.15);
      cleanup(tn, [tn, tg]);
    }
    if (kind === 'epiano' || kind === 'bell') {
      // note release: dampers come down at the end of the written duration
      g.gain.setTargetAtTime(0.0001, t + Math.max(dur, 0.2), kind === 'bell' ? 0.9 : 0.25);
    }
    g.connect(this.channel(bus, kind));
    car.start(t); mod.start(t);
    car.stop(t + len + 0.2); mod.stop(t + len + 0.2);
    cleanup(car, [car, mod, mg, g]);
  };

  // ---- sustained voices: flute, strings, choir, organ, accordion, fiddle, brass
  Engine.prototype.sustain = function (bus, kind, midi, t, dur, vel) {
    const ctx = this.ctx;
    const P = VOICE[kind] || VOICE.strings;
    const f = freq(midi);
    const short = dur < 0.4;
    const g = ctx.createGain();
    const nodes = [g];
    const oscs = [];
    let dest = g;
    if (kind === 'brass') {
      // the "blat": a per-note filter that opens on the attack
      const filt = ctx.createBiquadFilter(); filt.type = 'lowpass'; filt.Q.value = 1.4;
      filt.frequency.setValueAtTime(500, t);
      filt.frequency.linearRampToValueAtTime(3200, t + 0.07);
      filt.frequency.linearRampToValueAtTime(1600, t + 0.3);
      filt.connect(g); nodes.push(filt); dest = filt;
    }
    const dets = short && P.det.length > 1 ? [-6, 6] : P.det;
    const waves = this.waves;
    dets.forEach(function (d) {
      const o = ctx.createOscillator();
      if (waves[P.wave]) o.setPeriodicWave(waves[P.wave]); else o.type = P.wave;
      o.frequency.value = f; o.detune.value = d;
      o.connect(dest); oscs.push(o); nodes.push(o);
    });
    const side = CH[kind] && CH[kind][4] ? ((bus.alt = (bus.alt || 0) + 1) % 2 ? 'L' : 'R') : null;
    if (P.vib && !short && dur >= 0.3) {
      const v = this.sharedVibrato(bus, kind, P.vib[0], P.vib[1], side);
      oscs.forEach(function (o) { v.connect(o.detune); });
    }
    const atk = short ? 0.02 : (P.atk < 0 ? Math.min(-P.atk, dur * 0.4) : P.atk);
    const rel = short ? Math.min(P.rel, 0.1) : P.rel;
    const peak = vel * P.peak / Math.sqrt(dets.length);
    const end = t + Math.max(dur, atk + 0.05);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(peak, t + atk);
    g.gain.setValueAtTime(peak, Math.max(t + atk, end - 0.02));
    g.gain.setTargetAtTime(0.0001, end, rel / 3);
    g.connect(this.channel(bus, kind, side));
    const stopAt = end + rel * 2 + 0.1;
    oscs.forEach(function (o) { o.start(t); o.stop(stopAt); });
    cleanup(oscs[0], nodes);
    if (kind === 'flute' && dur >= 0.25) this.breath(bus, f, t, dur, vel);
  };

  Engine.prototype.breath = function (bus, f, t, dur, vel) {
    const ctx = this.ctx;
    const s = ctx.createBufferSource(); s.buffer = this.noise;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = Math.min(9000, f * 2); bp.Q.value = 1.5;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vel * 0.05, t + 0.03);
    g.gain.setTargetAtTime(vel * 0.012, t + 0.06, 0.08);
    g.gain.setTargetAtTime(0.0001, t + dur, 0.05);
    s.connect(bp); bp.connect(g); g.connect(this.channel(bus, 'flute'));
    s.start(t, Math.random()); s.stop(t + dur + 0.3);
    cleanup(s, [s, bp, g]);
  };

  Engine.prototype.bassNote = function (bus, midi, t, dur, vel) {
    const ctx = this.ctx;
    const o = ctx.createOscillator(); o.setPeriodicWave(this.waves.bass); o.frequency.value = freq(midi);
    const g = ctx.createGain();
    o.connect(g);
    const end = t + Math.max(0.1, dur * 0.92);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vel * 0.55, t + 0.012);
    g.gain.setTargetAtTime(vel * 0.34, t + 0.02, 0.25);
    g.gain.setTargetAtTime(0.0001, end, 0.06);
    g.connect(this.channel(bus, 'bass'));
    o.start(t); o.stop(end + 0.4);
    cleanup(o, [o, g]);
  };

  // ---- percussion: each sound is synthesized once into a buffer
  const DRUMKIT = {
    kick: { len: 0.35, gain: 0.8 }, snare: { len: 0.25, gain: 0.45 }, hat: { len: 0.07, gain: 0.22 },
    shaker: { len: 0.11, gain: 0.24 }, tamb: { len: 0.24, gain: 0.3 }, bodhran: { len: 0.32, gain: 0.7 },
    tom: { len: 0.42, gain: 0.6 }, timpani: { len: 1.3, gain: 0.6 },
  };
  Engine.prototype.drumBuffer = function (type) {
    if (this.drumBufs[type]) return this.drumBufs[type];
    const sr = this.sr;
    const n = Math.floor(sr * DRUMKIT[type].len);
    const buf = this.ctx.createBuffer(1, n, sr);
    const y = buf.getChannelData(0);
    let ph = 0, lp = 0, lp2 = 0, prev = 0;
    for (let i = 0; i < n; i++) {
      const t = i / sr;
      const w = Math.random() * 2 - 1;
      let v = 0;
      switch (type) {
        case 'kick': {
          const fq = 62 + 95 * Math.exp(-t / 0.035);
          ph += 2 * Math.PI * fq / sr;
          v = Math.sin(ph) * Math.exp(-t / 0.13) + (t < 0.004 ? w * 0.5 : 0);
          break;
        }
        case 'snare':
          ph += 2 * Math.PI * 185 / sr;
          lp += (w - lp) * 0.55; // tame the top
          v = (w - lp * 0.6) * Math.exp(-t / 0.055) * 0.8 + Math.sin(ph) * Math.exp(-t / 0.03) * 0.5;
          break;
        case 'hat':
          v = (w - prev) * Math.exp(-t / 0.013); prev = w;
          break;
        case 'shaker':
          v = (w - prev) * Math.min(1, t / 0.012) * Math.exp(-Math.max(0, t - 0.012) / 0.03); prev = w;
          break;
        case 'tamb':
          v = (w - prev) * Math.exp(-t / 0.06) * (0.6 + 0.4 * Math.sin(2 * Math.PI * 23 * t)); prev = w;
          break;
        case 'bodhran': {
          const fq = 72 + 40 * Math.exp(-t / 0.05);
          ph += 2 * Math.PI * fq / sr;
          lp += (w - lp) * 0.05;
          v = Math.sin(ph) * Math.exp(-t / 0.09) + lp * 3 * Math.exp(-t / 0.03);
          break;
        }
        case 'tom': {
          const fq = 85 + 45 * Math.exp(-t / 0.08);
          ph += 2 * Math.PI * fq / sr;
          v = Math.sin(ph) * Math.exp(-t / 0.13);
          break;
        }
        case 'timpani': {
          const fq = 88 + 12 * Math.exp(-t / 0.2);
          ph += 2 * Math.PI * fq / sr;
          lp2 += (w - lp2) * 0.03;
          v = (Math.sin(ph) + 0.3 * Math.sin(ph * 1.5) + 0.15 * Math.sin(ph * 2)) * Math.exp(-t / 0.38) + lp2 * 2 * Math.exp(-t / 0.05);
          break;
        }
      }
      y[i] = v;
    }
    let mx = 0;
    for (let i = 0; i < n; i++) mx = Math.max(mx, Math.abs(y[i]));
    if (mx) for (let i = 0; i < n; i++) y[i] /= mx;
    this.drumBufs[type] = buf;
    return buf;
  };

  Engine.prototype.drum = function (bus, type, t, vel) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource(); src.buffer = this.drumBuffer(type);
    src.playbackRate.value = 0.97 + Math.random() * 0.06; // a little life
    const g = ctx.createGain(); g.gain.value = vel * DRUMKIT[type].gain;
    src.connect(g); g.connect(this.channel(bus, 'drums'));
    src.start(t);
    cleanup(src, [src, g]);
  };

  const DRUMS = {
    light: function (meter, i) { return [[0, 'kick', 0.5], [2, 'kick', 0.35]].concat([0, 1, 2, 3].map(function (b) { return [b + 0.5, 'shaker', 0.45]; })).concat([[1, 'shaker', 0.6], [3, 'shaker', 0.6]]); },
    jig: function (meter, i) { return [[0, 'bodhran', 0.8], [2, 'bodhran', 0.35], [3, 'bodhran', 0.6], [5, 'bodhran', 0.3], [3, 'tamb', 0.4], [0, 'tamb', i % 2 ? 0.25 : 0]]; },
    march: function (meter, i) { const e = [[0, 'timpani', 0.8], [2, 'tom', 0.5], [2.5, 'tom', 0.35], [3.5, 'tom', 0.45]]; if (i % 4 === 3) e.push([3, 'timpani', 0.6], [3.5, 'timpani', 0.7]); return e; },
    festival: function (meter, i) { return [[0, 'kick', 0.7], [2, 'kick', 0.55], [1, 'snare', 0.35], [3, 'snare', 0.4], [1.5, 'tamb', 0.35], [3.5, 'tamb', 0.35]].concat([0, 1, 2, 3].map(function (b) { return [b + 0.5, 'hat', 0.4]; })); },
    tension: function (meter, i) { return [[0, 'kick', 0.8], [1.5, 'kick', 0.6], [3, 'snare', 0.5], [2, 'tom', 0.4], [3.5, 'tom', i % 2 ? 0.45 : 0]].concat([0, 1, 2, 3].map(function (b) { return [b, 'hat', 0.3]; })); },
  };

  // ---- ambience
  Engine.prototype.ambience = function (bus, kind, t, barDur, bar) {
    const ctx = this.ctx;
    const ch = this.channel(bus, 'amb');
    if (kind === 'waves' && bar % 2 === 0) {
      const s = ctx.createBufferSource(); s.buffer = this.noise; s.loop = true;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass';
      lp.frequency.setValueAtTime(300, t); lp.frequency.linearRampToValueAtTime(1400, t + barDur * 0.8); lp.frequency.linearRampToValueAtTime(250, t + barDur * 2);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.16, t + barDur * 0.8); g.gain.linearRampToValueAtTime(0.0001, t + barDur * 2);
      s.connect(lp); lp.connect(g); g.connect(ch);
      s.start(t); s.stop(t + barDur * 2 + 0.1);
      cleanup(s, [s, lp, g]);
    }
    if (kind === 'birds' && Math.random() < 0.6) {
      const at = t + Math.random() * barDur;
      const base = 2400 + Math.random() * 1600;
      const n = 2 + Math.floor(Math.random() * 3);
      for (let k = 0; k < n; k++) {
        const tt = at + k * 0.11;
        const o = ctx.createOscillator();
        o.frequency.setValueAtTime(base, tt); o.frequency.exponentialRampToValueAtTime(base * 1.45, tt + 0.05); o.frequency.exponentialRampToValueAtTime(base * 1.1, tt + 0.08);
        const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, tt); g.gain.linearRampToValueAtTime(0.05, tt + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, tt + 0.09);
        o.connect(g); g.connect(ch); o.start(tt); o.stop(tt + 0.1);
        cleanup(o, [o, g]);
      }
    }
    if (kind === 'drips') {
      const n = Math.random() < 0.5 ? 1 : 2;
      for (let k = 0; k < n; k++) {
        const tt = t + Math.random() * barDur;
        const f = 1400 + Math.random() * 1400;
        const o = ctx.createOscillator(); o.frequency.setValueAtTime(f, tt); o.frequency.exponentialRampToValueAtTime(f * 1.9, tt + 0.06);
        const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, tt); g.gain.linearRampToValueAtTime(0.07, tt + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, tt + 0.12);
        o.connect(g); g.connect(ch); o.start(tt); o.stop(tt + 0.15);
        cleanup(o, [o, g]);
      }
    }
  };

  /* ================================================================== arranger */
  const ACCOMP = {
    // [beat, tone index into the arpeggio ladder or 'chord', length in beats, velocity]
    arp: function (meter) {
      if (meter === 3) return [0, 1, 2, 3, 2, 1].map(function (k, i) { return [i * 0.5, k, 1.2, i ? 0.55 : 0.75]; });
      return [0, 1, 2, 3, 4, 3, 2, 1].map(function (k, i) { return [i * 0.5, k, 1.2, i % 4 ? 0.5 : 0.72]; });
    },
    arpSlow: function (meter) { return [[0, 0, 3, 0.6], [1, 2, 3, 0.45], [2, 3, 3, 0.5], [3, 4, 3, 0.4]].filter(function (e) { return e[0] < meter; }); },
    arp6: function () { return [0, 1, 2, 3, 2, 1].map(function (k, i) { return [i, k, 1.5, i % 3 ? 0.5 : 0.7]; }); },
    strum: function (meter) {
      if (meter === 3) return [[0, 'chord', 1, 0.75], [1, 'chord', 1, 0.45], [2, 'chord', 1, 0.45]];
      return [[0, 'chord', 1.4, 0.75], [1.5, 'chord', 0.5, 0.4], [2, 'chord', 1, 0.6], [3, 'chord', 0.5, 0.45], [3.5, 'chord', 0.5, 0.35]];
    },
    jig: function () { return [[0, 'chord', 2, 0.7], [2, 'chord', 1, 0.4], [3, 'chord', 2, 0.6], [5, 'chord', 1, 0.4]]; },
    waltz: function () { return [[1, 'chord', 0.8, 0.45], [2, 'chord', 0.8, 0.4]]; },
    block: function (meter) { return [[0, 'chord', meter / 2, 0.55], [meter / 2, 'chord', meter / 2, 0.45]]; },
    pulse: function (meter) { const e = []; for (let i = 0; i < meter * 2; i++) e.push([i * 0.5, 'chord', 0.35, i % 2 ? 0.4 : 0.55]); return e; },
  };

  const BASS = {
    root: function (meter) { return [[0, 0, meter, 0.8]]; },
    roots2: function (meter) { return [[0, 0, 1.6, 0.85], [meter / 2, 4, 1.6, 0.7]]; },
    waltz: function () { return [[0, 0, 1, 0.85]]; },
    jig: function () { return [[0, 0, 2, 0.85], [3, 4, 2, 0.7]]; },
    drone: function (meter) { return [[0, 0, meter, 0.7]]; },
    pulse: function (meter) { const e = []; for (let i = 0; i < meter * 2; i++) e.push([i * 0.5, 0, 0.4, i % 2 ? 0.45 : 0.62]); return e; },
  };

  // choose the inversion of chord tones (pitch classes) closest to the previous voicing
  function voiceLead(semis, key, prev) {
    const base = key - 12; // pad register around an octave below the tonic
    const pcs = semis.map(function (s) { return ((s % 12) + 12) % 12; });
    let best = null, bestCost = 1e9;
    for (let inv = 0; inv < pcs.length; inv++) {
      const v = [];
      let last = -1;
      for (let i = 0; i < pcs.length; i++) {
        let n = base + pcs[(i + inv) % pcs.length];
        while (n <= last) n += 12;
        v.push(n); last = n;
      }
      for (let shift = -12; shift <= 12; shift += 12) {
        const vv = v.map(function (n) { return n + shift; });
        if (vv[0] < key - 17 || vv[vv.length - 1] > key + 9) continue;
        let cost = 0;
        if (prev) for (let i = 0; i < Math.min(prev.length, vv.length); i++) cost += Math.abs(prev[i] - vv[i]);
        else cost = Math.abs(vv[0] - (key - 5));
        if (cost < bestCost) { bestCost = cost; best = vv; }
      }
    }
    return best;
  }

  Engine.prototype.playInst = function (bus, inst, midi, t, dur, vel) {
    if (KS[inst]) return this.pluck(bus, inst, midi, t, dur, vel);
    if (FM[inst]) return this.fm(bus, inst, midi, t, dur, vel);
    return this.sustain(bus, inst, midi, t, dur, vel);
  };

  // Schedule bar `n` of the song starting at time t. Returns the bar duration.
  Engine.prototype.scheduleBar = function (bus, S, n, t, state) {
    const beat = 60 / S.bpm;
    const barDur = beat * S.meter;
    const phraseBars = S.A.bars.length;
    const formIdx = Math.floor(n / phraseBars) % S.form.length;
    const label = S.form[formIdx];
    const sec = S[label.charAt(0)];
    const instrumental = label.indexOf('i') > 0;
    const variation = label.length > 1 && !instrumental;
    const bi = n % phraseBars;
    const bar = sec.bars[bi];
    const self = this;
    const hum = function () { return (Math.random() - 0.5) * 0.012; };

    bar.forEach(function (ch, ci) {
      const span = S.meter / bar.length;
      const ct = t + ci * span * beat;
      const semis = chordSemis(S.mode, ch);
      const rootPc = degSemis(S.mode, ch.deg) % 12;
      let rootMidi = S.key - 12 + rootPc - (rootPc > 7 ? 12 : 0);
      while (rootMidi < 45) rootMidi += 12; // keep the bass line out of the mud
      // pad: whole chord, voice-led
      const voicing = voiceLead(semis, S.key, state.prevVoicing);
      state.prevVoicing = voicing;
      if (S.pad) voicing.forEach(function (m) { self.sustain(bus, S.pad, m, ct, span * beat, 0.8); });
      // accompaniment
      const accs = [S.accomp, S.extraAccomp].filter(Boolean);
      accs.forEach(function (acc, ai) {
        const pattern = ACCOMP[acc[1]](S.meter);
        const ladderSorted = [rootMidi, rootMidi + 7, rootMidi + 12, voicing[1] + (voicing[1] < rootMidi + 12 ? 12 : 0), voicing[2] + (voicing[2] < rootMidi + 14 ? 12 : 0)];
        pattern.forEach(function (e) {
          if (e[0] >= span && bar.length > 1) return;
          const at = ct + e[0] * beat + hum();
          const vel = e[3] * (0.9 + Math.random() * 0.15) * (ai ? 0.6 : 1);
          if (e[1] === 'chord') {
            // strings ostinatos and keys sit an octave above the pad; plucked chords a little higher still
            const up = acc[0] === 'strings' || acc[0] === 'epiano' ? 12 : 12;
            const notes = voicing.map(function (m) { return m + up; }).concat(acc[0] === 'guitar' || acc[0] === 'lute' ? [rootMidi + 12] : []);
            notes.sort(function (a, b) { return a - b; }).forEach(function (m, k) {
              self.playInst(bus, acc[0], m, at + (KS[acc[0]] ? k * 0.014 : 0), e[2] * beat, vel * (KS[acc[0]] ? 0.55 : 0.7));
            });
          } else {
            self.playInst(bus, acc[0], ladderSorted[Math.min(e[1], ladderSorted.length - 1)], at, e[2] * beat, vel);
          }
        });
      });
      // bass
      if (S.bass) {
        const pat = BASS[S.bass[1]](S.meter);
        pat.forEach(function (e) {
          if (e[0] >= span && bar.length > 1) return;
          let m = rootMidi - 12 + (e[1] === 4 ? 7 : 0);
          while (m < 40) m += 12;
          const at = ct + e[0] * beat + hum();
          if (S.bass[1] === 'drone') { self.sustain(bus, 'stringsDark', m, at, e[2] * beat, 0.9); self.bassNote(bus, m, at, e[2] * beat, 0.5); }
          else self.bassNote(bus, m, at, Math.min(e[2], span) * beat, e[3]);
        });
      }
    });

    // melody
    const lead = variation && S.lead2 ? S.lead2 : S.lead;
    const lo = S.leadOctave || 0;
    if (!instrumental) sec.melody.notes.forEach(function (nt) {
      if (nt.t < bi * S.meter || nt.t >= (bi + 1) * S.meter) return;
      const at = t + (nt.t - bi * S.meter) * beat + hum();
      const vel = (nt.t % 1 === 0 ? 0.85 : 0.72) * (0.92 + Math.random() * 0.1);
      const m = S.key + nt.semis + lo + (lead === 'cello' ? -12 : 0);
      self.playInst(bus, lead, m, at, nt.dur * beat * 0.97, vel);
      // on variations, a quieter diatonic third below fills out the line
      if (variation && lead !== 'cello') {
        const third = S.key + degSemis(S.mode, nt.deg - 2) + (nt.semis - degSemis(S.mode, nt.deg)) + lo;
        self.playInst(bus, lead === 'flute' ? 'flute' : lead, third, at + 0.01, nt.dur * beat * 0.95, vel * 0.45);
      }
    });

    // drums
    if (S.drums) DRUMS[S.drums](S.meter, n).forEach(function (e) {
      if (e[2] > 0) self.drum(bus, e[1], t + e[0] * beat + hum() * 0.5, e[2]);
    });
    (S.extras || []).forEach(function (x) { self.ambience(bus, x, t, barDur, n); });
    return barDur;
  };

  /* ================================================================== realtime player */
  const VOL_KEY = 'hgf_volume';
  let ctx = null, eng = null, vol = null;
  let timer = null, running = false;
  let theme = 'title';
  let cur = null; // { bus, song, bar, next, state }
  let volume = 0.5;
  try { const v = parseFloat(localStorage.getItem(VOL_KEY)); if (!isNaN(v)) volume = v; } catch (e) { /* ignore */ }

  function init() {
    const AC = root.AudioContext || root.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();
    eng = new Engine(ctx);
    vol = ctx.createGain(); vol.gain.value = 0;
    eng.master.connect(vol); vol.connect(ctx.destination);
    return true;
  }

  function begin(name, at) {
    const bus = eng.makeBus();
    bus.gain.gain.setValueAtTime(0.0001, at);
    bus.gain.gain.exponentialRampToValueAtTime(SONGS[name].trim || 1, at + 1.2);
    cur = { bus: bus, song: SONGS[name], bar: 0, next: at + 0.05, state: {} };
  }

  function retire(c) {
    if (!c) return;
    const now = ctx.currentTime;
    c.bus.gain.gain.cancelScheduledValues(now);
    c.bus.gain.gain.setValueAtTime(c.bus.gain.gain.value, now);
    c.bus.gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
    setTimeout(function () {
      try { (c.bus.lfos || []).forEach(function (l) { l.stop(); }); c.bus.gain.disconnect(); c.bus.verb.disconnect(); } catch (e) { /* ignore */ }
    }, 5000);
  }

  function tick() {
    if (!running || !cur) return;
    while (cur.next < ctx.currentTime + 0.5) {
      const start = Math.max(cur.next, ctx.currentTime + 0.03);
      cur.next = start + eng.scheduleBar(cur.bus, cur.song, cur.bar, start, cur.state);
      cur.bar += 1;
    }
  }

  function setVolNode(v, secs) {
    if (!vol) return;
    const now = ctx.currentTime;
    vol.gain.cancelScheduledValues(now);
    vol.gain.setValueAtTime(vol.gain.value, now);
    vol.gain.linearRampToValueAtTime(v, now + secs);
  }

  FL.music = {
    themes: Object.keys(SONGS),
    songs: SONGS,
    parseMelody: parseMelody,
    parseChords: parseChords,
    chordSemis: chordSemis,
    degSemis: degSemis,
    start: function () {
      if (!ctx && !init()) return;
      if (ctx.state === 'suspended') ctx.resume();
      if (running) return;
      running = true;
      begin(theme, ctx.currentTime);
      setVolNode(volume, 1.2);
      timer = setInterval(tick, 60);
      tick();
    },
    stop: function () {
      running = false;
      if (timer) clearInterval(timer);
      timer = null;
      setVolNode(0, 0.6);
      retire(cur); cur = null;
    },
    setTheme: function (name) {
      if (!SONGS[name] || name === theme) return;
      theme = name;
      if (!running) return;
      retire(cur);
      begin(name, ctx.currentTime + 0.25);
    },
    setVolume: function (v) {
      volume = Math.max(0, Math.min(1, v));
      try { localStorage.setItem(VOL_KEY, String(volume)); } catch (e) { /* ignore */ }
      if (running) setVolNode(volume, 0.15);
    },
    getVolume: function () { return volume; },
    isRunning: function () { return running; },
    // Offline render of a theme (used by the test tools to analyze the mix).
    render: function (name, seconds, sampleRate) {
      const OAC = root.OfflineAudioContext || root.webkitOfflineAudioContext;
      const sr = sampleRate || 44100;
      const octx = new OAC(2, Math.floor(sr * seconds), sr);
      const e = new Engine(octx);
      e.master.connect(octx.destination);
      const bus = e.makeBus();
      const S = SONGS[name];
      bus.gain.gain.value = S.trim || 1;
      let t = 0.05, n = 0;
      const state = {};
      while (t < seconds) { t += e.scheduleBar(bus, S, n, t, state); n++; }
      return octx.startRendering();
    },
  };
})(typeof window !== 'undefined' ? window : globalThis);
