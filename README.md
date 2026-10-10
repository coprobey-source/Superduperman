# Hearts of Generic FantasyLandia

A text-adventure dating sim set in the most aggressively average fantasy kingdom ever imagined, with **26 romanceable heroines**, one for every fantasy trope we could think of.

You arrive in the town of Clichéton thirty days before the **Starfall Festival**, when legend says the falling stars bind true lovers forever. Talk, give gifts, train, work, and make choices. Win a heart before the stars fall.

> Romantic comedy for adults (18+). Scenes are flirty and steamy, building up a lot of heat before they fade to black. Every character is an adult: several are centuries old, and one is a literal goddess.

## Play

No build step and no dependencies. Open `index.html` in any modern browser.

To get one self-contained file you can share:

```sh
node tools/build-single.js            # -> dist/hearts-of-generic-fantasylandia.html
```

## How it works

- **30 days**, each with a Morning, Afternoon and Evening. Meeting someone, talking, romance scenes, jobs and training each use one part of the day. Travel, shopping and gifts are free (one gift per person per day).
- **Affection (♥)** comes from talking, gifts and choices in scenes. Each heroine has an introduction, **three romance scenes** (unlocked at ♥25 / ♥50 / ♥75) and a **dedicated ending**. Scenes 2 and 3 also need her favorite stat (Might, Wits or Charm) at 2 and 3. You get one romance scene per heroine per day.
- **Gifts:** everyone has things they love, like and hate. Repeating the same gift becomes less effective each time.
- **Stats:** train Might at the Arena, Wits at the Library, and Charm at the Tavern, Temple or Noble Quarter. Higher stats also open stat-check options inside scenes.
- **Gold:** take Guild quests, work tavern shifts, haul cargo, or hunt sewer rats.
- **Story events:** the festival announcement (day 5), a demon attack (day 10), a divine dream (day 15), the Grand Masquerade (day 20), an omen (day 25) and the Starfall Festival (day 30).
- **Endings:** at the festival, choose a heroine who is *Devoted* (all three scenes seen) to get her ending. Win over five or more and another option appears. There's also an ending for nobody at all, and a bad end for anyone careless with a certain florist.
- **The morning after:** your third romance scene with a heroine is the steamy one. The next morning she gets a scene of her own, and from then on her talk lines call back to what you've shared.
- **Crossover events:** 16 run-ins between heroines, such as Fenna vs. Kit over a salmon, Valeria meeting Celestine's holy-water bucket, or Malzahra finally meeting a "hero." They happen when you're in the right place at the right time and have met both heroines.
- **Portraits:** every heroine has a hand-built SVG portrait, generated from a config in `js/portraits.js`.
- **Music:** a generative Web Audio soundtrack (no audio files) with themes for the town, tavern, forest, night spots, temple, sea, romance scenes, the festival and more. Turn it on from the title screen or the 🎵 button. Volume is in the menu.
- **Memories:** replay any romance or morning-after scene you've seen, from the title screen or the menu.
- Three save slots plus an autosave, a journal tracking where everyone is and what they like, an endings gallery, and **New Game+**, which carries over your stats and gold.

## The Heroines

| Heroine | Trope | Values |
|---|---|---|
| Fenna Moonfang | Feral Werewolf Girl | Might |
| Countess Valeria Nocturne | Evil Dominating Vampire | Charm |
| Sylvaine Elderleaf | Ancient Wise Elf | Wits |
| Mira Hartwell | Tsundere Guild Receptionist | Might |
| Marigold Bloom | Yandere Florist | Charm |
| Shade | Kuudere Assassin | Wits |
| Pellucia "Pell" Quill | Shy Dandere Librarian | Wits |
| Kit Whiskerwhit | Genki Catgirl Thief | Wits |
| Malzahra, the Dread Queen | Lonely Demon Queen *(appears after day 10)* | Might |
| Sister Celestine | Pure Priestess (Secretly Curious) | Charm |
| Brakka Ironjaw | Buff Orc Warrior Woman | Might |
| Ignivara the Crimson | Proud Hoarding Dragon Girl | Might |
| Lilette | Succubus Who's Terrible at Seduction | Charm |
| Hilde Stonebrew | Gruff Tomboy Dwarf Blacksmith | Might |
| Princess Coralie | Curious Mermaid Princess | Charm |
| Morwen Hazelbrook | Scatterbrained Witch | Wits |
| Aura (Princess Aurelia) | Runaway Princess in Disguise | Charm |
| Madame Bettina Rosewater | Teasing "Ara-Ara" Tavern Owner | Charm |
| Gloria | Bubbly Slime Girl | Wits |
| Hikari Hoshino | Self-Proclaimed Isekai Protagonist | Might |
| Dame Brunhild von Steinhart | Proud Lady Knight ("Just Kill Me!") | Might |
| Lady Rosalind Ashcroft | Haughty Villainess ("Ohohoho!") | Charm |
| Seven | Clockwork Girl Learning to Feel | Wits |
| Lady Ophelia Hollowmere | Melancholy Gothic Ghost | Wits |
| Captain Scarlett "Red" Vane | Swashbuckling Pirate Captain | Might |
| Amorette, Goddess of Love | The Narrator *(appears after day 15)* | Charm |

29 endings in total: one per heroine, plus the harem, alone and greenhouse endings.

## Project layout

```
index.html            page shell, loads everything in order
css/style.css         styles
js/core.js            game rules & state (DOM-free, testable in Node)
js/portraits.js       procedural SVG portraits + per-heroine configs
js/music.js           generative Web Audio music engine
js/crossovers.js      crossover events between heroines
js/world.js           items, locations, jobs, story events, festival & finale
js/chars/*.js         one file per heroine: profile, schedule, gifts, talk, scenes, ending
js/ui.js              browser UI (hub, scenes, modals, saves)
tools/validate.js     content validator + simulated playthroughs
tools/build-single.js bundles everything into one HTML file
tools/apply_patch.py  helper for bulk-editing scene nodes in character files
```

### Adding a heroine

Copy any file in `js/chars/`, change the `id`, and add a `<script>` tag for it to `index.html`, before `js/ui.js`. A character needs `intro`, `s1`, `s2`, `s3`, `morning` and `ending` scenes, at least three `afterTalk` lines (used once she's devoted), and a portrait config in `js/portraits.js`. The ending scene must reach a node with `ending: '<id>'`.

Scenes are graphs of nodes:

```js
start: {
  text: ['Narration.', '@fenna Dialogue from Fenna.', '@you Dialogue from the player, {name}.'],
  aff: 5,                                   // affection gained on entering the node
  choices: [
    { text: 'Plain choice', go: 'next', aff: 3 },
    { text: 'Needs a stat', go: 'x', req: { charm: 2 } },
    { text: 'Stat check', check: { stat: 'might', dc: 3 }, pass: 'win', fail: 'lose' },
  ],
},
next: { text: ['...'], end: true },          // ends the scene
```

Then run:

```sh
node tools/validate.js --stats
```

It checks every link, speaker, item and schedule. It then plays every heroine's route from meeting to ending with several choice strategies, and runs 60 random full playthroughs.
