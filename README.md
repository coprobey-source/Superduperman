# Hearts of Generic FantasyLandia

A text-adventure dating sim set in the most aggressively average fantasy kingdom ever imagined, with **34 romanceable heroines**, one for every fantasy trope we could think of.

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
- **Affection (♥)** comes from talking, gifts and choices in scenes. Each heroine has an introduction, **three romance scenes** (unlocked at ♥30 / ♥60 / ♥90) and her own endings. Scenes 2 and 3 also need her favorite stat (Might, Wits or Charm) at 2 and 3. After a romance scene, she needs a couple of days before the next one, so it pays to court more than one heroine at a time.
- **Gifts:** everyone has things they love, like and hate. Repeating the same gift becomes less effective each time.
- **Stats:** train Might at the Arena, Wits at the Library, and Charm at the Tavern, Temple or Noble Quarter. Higher stats also open stat-check options inside scenes.
- **Gold:** take Guild quests, work tavern shifts, haul cargo, or hunt sewer rats. Spend it on gifts, dates, or private lessons (+1 stat, at a climbing price).
- **Story events:** the festival announcement (day 5), a demon attack (day 10), a divine dream (day 15), the Grand Masquerade (day 20), an omen (day 25) and the Starfall Festival (day 30).
- **She remembers.** Memorable choices in a heroine's scenes, on dates and in side events are remembered. They come back in later scenes and talk lines, and they decide which of her endings you get.
- **Endings:** at the festival, choose a heroine who is *Devoted* (all three scenes seen) to get her ending. Almost every heroine has **two or three endings**, picked by how you played her route. Win over five or more and another option appears. There's also an ending for nobody at all, a bad end for anyone careless with a certain florist, and a secret ending for New Game+.
- **Dates:** after your first romance scene with someone, ask her out: dinner at the tavern, the Moonlit Gardens, sunset at the harbor or a picnic in Whisperwood. Each heroine has a scene for every spot and a favourite.
- **The main plot:** Lord Baalgrim is up to something, and it involves the Starfall itself. The story unfolds across the month alongside the romance, and the heroines you've befriended can help.
- **Jealousy:** some heroines don't take it well when your heart wanders. Marigold, Valeria, Ignivara and Rosalind each have a jealousy scene.
- **The morning after:** your third romance scene with a heroine is the steamy one. The next morning she gets a scene of her own, and from then on her talk lines call back to what you've shared.
- **Crossover events:** 16 run-ins between heroines, such as Fenna vs. Kit over a salmon, Valeria meeting Celestine's holy-water bucket, or Malzahra finally meeting a "hero." They happen when you're in the right place at the right time and have met both heroines.
- **Portraits & expressions:** every heroine has a soft-shaded anime-style SVG portrait with seven expressions (neutral, happy, blush, angry, sad, smug, surprised), generated from a config in `js/portraits.js`. Her face changes as the dialogue does.
- **Locations:** every location has an illustrated backdrop that changes from morning to afternoon to evening (`js/backdrops.js`).
- **Key moments:** every ending gets an illustration of her, in festival finery, under the falling stars. You can view endings again from the gallery. Third romance scenes get a candlelit setting of their own.
- **Music:** 14 hand-composed location and story themes, plus a **leitmotif for every heroine** that plays in her romance scenes, dates and ending. Everything is synthesized live with Web Audio; there are no audio files. Plucked-string, FM, flute, string, choir, organ, brass and percussion instruments go through a reverb and mastering chain. Turn music on from the title screen or the 🎵 button.
- **Sound effects:** soft synthesized UI sounds: page turns, heart chimes, coins, stat-ups, check results, a heartbeat, an ending fanfare and festival fireworks.
- **Memories:** replay any romance scene, morning after, date or ending you've seen, from the title screen or the menu. Endings replay with the choices that led to them.
- **Who's where:** the 👥 button shows everyone you've met, grouped by where they are right now and where they'll be next, with one-click travel. A ★ badge counts heroines with a romance scene ready. The journal can be filtered the same way.
- **Accessibility:** screen-reader labels for portraits, affection and buttons; dialogs trap and return keyboard focus; new scene text is announced; a skip link; visible focus outlines; and reduced-motion and high-contrast modes are respected. Automated audits (axe-core, WCAG 2 AA) pass on every main screen.
- Three save slots plus an autosave, **save codes** for backups and moving between browsers, a journal tracking where everyone is and what they like, an endings gallery grouped by heroine, a **heroine gallery** to view every portrait and expression, **31 achievements**, and **New Game+**, which carries over your stats and gold (and the Narrator remembers).
- **Settings:** text size, text pacing (gentle fade, line by line, or instant), sound-effect and music volume.

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
| Kohana | Mischievous Kitsune Trickster | Wits |
| Sesha | Gentle Giant Lamia | Charm |
| Sigrun Stormbrand | Valkyrie Who Wants You to Die Gloriously *(arrives day 6)* | Might |
| Queen Thistle | Capricious Fairy Queen | Wits |
| Lyra Songsworth | Flirty Bard Who Writes Songs About Everyone | Charm |
| Sister Maud Ironveil | Battle Nun with a Very Big Hammer | Might |
| Vespera Thornquill | Self-Proclaimed Rival | Wits |
| Zyra Sunkiss | Dark Elf Gyaru | Charm |

101 endings in total: 97 across the 34 heroines (two or three each), plus the harem, alone, greenhouse and secret true endings. Over 300,000 words of story, 37 crossover scenes and a 30-day main plot.

## Project layout

```
index.html            page shell, loads everything in order
css/style.css         styles
js/core.js            game rules & state (DOM-free, testable in Node)
js/portraits.js       procedural SVG portraits, expressions + per-heroine configs
js/backdrops.js       procedural location backdrops for each time of day
js/sfx.js             synthesized UI sound effects
js/music.js           Web Audio music engine, location themes and heroine leitmotifs
js/crossovers.js      crossover events between heroines
js/world.js           items, locations, jobs, story events, festival & finale
js/chars/*.js         one file per heroine: profile, schedule, gifts, talk, scenes, ending
js/ui.js              browser UI (hub, scenes, modals, saves)
tools/validate.js     content validator + simulated playthroughs
tools/build-single.js bundles everything into one HTML file
tools/apply_patch.py  helper for bulk-editing scene nodes in character files
docs/AUTHORING.md     the full authoring guide (format, conditions, callbacks, endings, dates, moods)
docs/CANON.md         continuity canon: named NPCs, world facts and running gags shared across files
```

### Adding a heroine

See **[docs/AUTHORING.md](docs/AUTHORING.md)** for the full guide. In short: copy any file in `js/chars/`, change the `id`, and add a `<script>` tag for it to `index.html`, before `js/crossovers.js`. A character needs:
- `intro`, `s1`, `s2`, `s3`, `morning` and `ending` scenes;
- four date scenes;
- talk and `afterTalk` lines;
- a portrait config in `js/portraits.js` and a leitmotif in `js/music.js`.

The ending scene must reach a node with `ending: '<id>'`. Variant endings are registered in `endings`.

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

It checks:
- every link, speaker, item, schedule, condition, flag, mood tag and melody;
- every heroine's route from meeting to ending, played with several choice strategies, plus every date;
- that every ending variant can be reached;
- 60 random full playthroughs.

`--only fenna,kit` limits the report to particular heroines.
