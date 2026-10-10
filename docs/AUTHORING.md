# Authoring guide

How heroine content is written for *Hearts of Generic FantasyLandia*: the data format, the features scenes can use, how much of each thing a heroine needs, and the house style.

Run the validator after every batch of edits:

```sh
node tools/validate.js --only fenna,kit   # only problems involving these heroines (plus global ones)
node tools/validate.js --stats            # everything
```

Warnings about missing content are a to-do list. Errors must be fixed.

---

## 1. Tone and content rules

- **Genre:** a warm, funny, flirty romantic comedy that knows it's a pile of fantasy clichés and loves them anyway. Each heroine is a trope played straight enough to be satisfying, and then given a real heart underneath it.
- **Voice:** second person, present tense ("You find her on the pier"). Narration is punchy and specific, with comic timing. Dialogue has a distinct voice per heroine: Fenna speaks in third person, Mira snaps, Rosalind goes "Ohohoho!"
- **Every character is an adult.** Never describe anyone as childlike, and never imply anyone is under 18.
- **Heat level: steamy, then fade to black.** Romance scenes, especially Scene III and some later dates, can build real heat: kissing, touching, clothes coming off, breathless dialogue and the trope's power dynamic (dominant vampire, feral wolf, shy librarian taking the lead). Describe sensation, emotion and atmosphere. **Never** describe sex acts or genitals explicitly. Cut away with `...` or a time skip once things get going. Consent is always clear and enthusiastic, even inside "dominant" dynamics: check-ins, safe words played for character, the player choosing.
- **Comedy over cruelty.** Bad choices are funny or gently sad, never humiliating. Jealousy and yandere beats stay theatrical.

## 2. File layout

Each heroine is one file, `js/chars/<id>.js`, that calls `FL.addCharacter({...})`. Any extra events or scenes she owns go after it in the same file, like `marigold_jealous` in `marigold.js`. Don't edit any other file unless your task says you own it.

```js
FL.addCharacter({
  id: 'fenna', name: 'Fenna Moonfang', short: 'Fenna',
  trope: 'Feral Werewolf Girl', color: '#d39b5a', favStat: 'might',   // might | wits | charm
  endingTitle: 'Pack of Two',                 // title of her main ending (id === her id)
  endings: { fenna_alpha: 'Alpha of Whisperwood' },  // ending variants: id -> title
  teaser: 'Shown on her card before you meet her.',
  blurb: 'Journal description.',
  schedule: ['forest', 'market', 'forest'],   // morning, afternoon, evening (null = nowhere; an array rotates by day)
  unlock: function (s) { return s.day >= 6; }, // optional: when she starts appearing
  gifts: { love: ['steak'], like: ['fish', 'plushie'], hate: ['dagger'] },
  giftLines: { love: [...], like: '...', neutral: '...', hate: [...],
               special: { steak: [...], fork: [...] },   // per-item lines (override the tier line)
               repeat: '...' },                           // the 3rd+ time you give the same thing
  talk: [ ... ],        // 12+ entries
  afterTalk: [ ... ],   // 8+ entries, used once she's Devoted
  dateFav: 'picnic',    // her favourite date spot (bonus affection)
  dates: { dinner: {...}, gardens: {...}, harbor: {...}, picnic: {...} },
  scenes: { intro, s1, s2, s3, morning, ending },
});
```

Locations: `square tavern guild market artisan library temple noble arena docks sewers forest bathhouse academy peak castle manor watchtower`. Some are closed at some times of day; the validator checks this.

Items: `roses chocolate steak wine tome gem yarn fish ale candle perfume cakes gears comb dagger herbs tea plushie axe scroll mirror rum novel fork tofu mead strings nectar polish salts relic quill`.

## 3. Lines and expressions

A line is either narration or dialogue:

```js
'Narration with *italics*. {name} is the player\'s name, {title} is Sir/Lady/Mx.',
'@fenna Dialogue from Fenna.',
'@fenna:happy Dialogue, and Fenna\'s portrait switches to her happy face.',
'@you What the player says.',
```

**Moods:** `neutral happy blush angry sad smug surprised`. A mood tag changes the heroine's portrait in the scene header, and it stays until another tag changes it. Each scene starts at neutral. Tag a line whenever her expression clearly changes; you don't need to tag every line. About a third to a half of a heroine's lines in a scene usually carry a tag. Use moods only on heroine speakers, not on `@you` or minor speakers. Tags work in scenes, dates, talk, afterTalk and gift lines. Conditional lines (`{ if, text, else }`) also work inside talk, afterTalk and gift lines.

A node can also set the owner's mood without a line: `{ mood: 'blush', text: [...] }`.

## 4. Scenes

A scene is an object of nodes; it starts at `start`.

```js
start: {
  text: [ ... ],
  aff: 5,                                // affection on entering (also gold, stat, give, take)
  flag: 'fenna_sniffed',                 // set a flag on entering; or flags: { a: true, b: true }
  choices: [
    { text: 'Plain choice', go: 'next', aff: 3 },
    { text: 'Remember this', go: 'x', flag: 'fenna_ears' },          // choices can set flags too
    { text: 'Needs a stat', go: 'y', req: { charm: 2 } },             // shown greyed out if unmet
    { text: 'Only if...', go: 'z', if: 'fenna_ears' },                // hidden unless the condition holds
    { text: 'Stat check', check: { stat: 'might', dc: 3 }, pass: 'win', fail: 'lose' },
  ],
},
next: { text: [...], next: 'other' },    // a single "Continue"
other: { text: [...], end: true },       // ends the scene (endLabel: 'Custom button text')
```

### Conditions

A condition is used by `if:` on choices, conditional lines, branch nodes and talk entries. It can be:

| Form | Meaning |
|---|---|
| `'fenna_ears'` | that flag is set |
| `'!fenna_ears'` | that flag is not set |
| `['a', '!b']` | all of them |
| `{ any: ['a', 'b'] }` | at least one |
| `{ stage: 3 }` | the scene owner's stage is ≥ 3 (0 stranger, 1 met, 2 after s1, 3 after s2, 4 devoted) |
| `{ stage: 2, who: 'kit' }` | someone else's stage |
| `{ met: 'kit' }` / `{ devoted: 'kit' }` | you've met / are devoted to another heroine |
| `{ might: 3 }`, `{ item: 'rum' }`, `{ gold: 20 }` | stats, items, gold |
| `{ ngplus: 1 }` | New Game+ run |
| `{ seenEnding: 'fenna' }` | the player has unlocked that ending in some earlier playthrough |

### Callbacks: conditional lines

Any entry in a `text` array can be an object instead of a string:

```js
text: [
  'She leans in.',
  { if: 'fenna_ears', text: '@fenna:smug You did the ear thing. In the clearing. Fenna has not forgotten the ear thing.' },
  { if: 'fenna_sniffed', text: [...lines], else: [...other lines] },
  '@fenna Anyway.',
]
```

### Branch nodes

A branch node routes on conditions and shows nothing itself. The last entry must be an unconditional fallback:

```js
finale: { branch: [ { if: ['fenna_mark', 'fenna_date_picnic'], go: 'alpha' }, { go: 'pack' } ] },
```

### Flag naming

Prefix every flag with the heroine's id: `fenna_ears`, `valeria_defied`. Dates set `<id>_date_<spot>` automatically when they finish, for example `fenna_date_picnic`. The validator warns about flags that are set but never read, and errors on flags that are read but never set.

## 5. What every heroine needs

| Piece | Requirement |
|---|---|
| `intro`, `s1`, `s2`, `s3`, `morning`, `ending` | as before: s3 is the steamy one, morning is the morning after |
| **Callbacks** | 5+ flags set by memorable choices in intro/s1/s2/s3 (and dates or side events), each read later. Use 6+ conditional lines spread over s2, s3, morning, the ending, talk and afterTalk, so what you did earlier is remembered. |
| **Ending variants** | Her ending scene can reach at least **two** endings: the main one (`ending: '<id>'`) and one or more variants (`ending: '<id>_<suffix>'`, registered in `endings`). Variants are chosen by how you played her route: branch on flags, or offer a final choice gated by `if:`. A variant should be a real alternative take on the relationship, not a reworded copy. Each one gets its own epilogue (~250–400 words) and title. Keep the main ending reachable as the default. |
| **talk** | 12+ entries. An entry is `[lines]`, or `{ if: cond, lines: [...] }` for lines that only make sense later (for example `{ stage: 3 }`) or that call back to a flag. Unheard conditional lines are played first, as soon as they're earned. Aim for 3–5 conditional entries. At least one entry must be unconditional. |
| **afterTalk** | 8+ entries, used once she's Devoted. They can reference the morning after, dates (`'<id>_date_harbor'`) and route flags. |
| **giftLines** | `love`, `like`, `neutral`, `hate`, plus `special` lines for every loved item and 3–5 other items that deserve a unique reaction (the fork is a running gag), plus a `repeat` line. |
| **dates** | One short scene for each of the four spots (`dinner gardens harbor picnic`) and a `dateFav`. ~150–300 words each: the setting through her eyes, 2–3 choices (one lands well, `aff: 3–6`; one might misfire), a short payoff ending with `end: true`. Dates unlock after Scene I and can be repeated on different days, so write them so they make sense at any later stage. Use `{ if: { stage: 4 } ... }` lines for extra warmth once she's devoted. A date may set a flag that a later scene or ending reads. Date affection is capped by her current stage, like talking. |
| **Moods** | Tag her lines throughout: scenes, dates, talk and gift lines (see §3). |

## 6. Side events

A heroine can own extra events, such as jealousy beats, defined after `FL.addCharacter` in her file:

```js
FL.addScene('valeria_jealous', { start: {...}, ... });
FL.addEvent({
  id: 'valeria_jealous', owner: 'valeria', scene: 'valeria_jealous',
  slot: 2, priority: 10,
  cond: function (s) { /* when it fires; once only */ },
});
```

Always set `owner`. `FL.sceneCast[id] = ['valeria']` shows her portrait in the header. Use `affTo: { valeria: 5 }` on nodes and choices for affection in a non-romance scene.

## 7. Checklist before you're done

- `node tools/validate.js --only <your ids>` shows no errors. Warnings about your heroines are resolved, or are deliberate.
- No `'` left unescaped inside single-quoted strings. Prefer double-quoted strings for lines with apostrophes.
- Re-read every line once for voice, typos and the content rules.
