# Canon

The shared facts of *Hearts of Generic FantasyLandia* that every file has to agree on, followed by the list of contradictions found between files and how to fix each one.

When a heroine's own file and someone else's file disagree, her own file wins unless the fix list says otherwise. When `world.js` sets a plot fact, it wins over heroine files and crossovers.

---

## Part 1: Canon reference

### World and geography
- **Kingdom:** Generic FantasyLandia, ruled by **the King**. He is never named. He is Aurelia's father and has a golden beard. **King Aldous the Bald** is a king from long ago whose crown sits in Ignivara's hoard.
- **The capital** is never named, and it is not Clichéton. It has the great cathedral and the palace.
- **Clichéton** is a town. Its locations:
  - Town Square: a fountain with a stone hero nobody remembers, a notice board, organized pigeons.
  - Market Street: Marigold's Flower Shop on the corner, the bakery, the confectioner, the fishmonger, the butcher, the pie stall.
  - Artisan's Row: the Stonebrew Forge, with the Gearwright Workshop next door.
  - Noble Quarter: the Moonlit Gardens, the Ashcroft estate at the end of the lane.
  - Also: Saltbreeze Harbor (the docks), the Sewers, the Grand Library, the Temple of the Radiant Heart (domed), the Arcane Academy, the Steamwhistle Bathhouse, the Arena & Training Grounds, the Tipsy Wyvern.
  - Smaller places: Baker's Lane, Wendel Street, widows' row, the clocktower and bell tower, and the festival hill above the square.
- **Outside town:**
  - Whisperwood Forest: Fenna, Morwen's cottage, Kohana's shrine, Thistle's fairy ring, Sylvaine's glade.
  - Dragonspire Peak: Ignivara.
  - Castle Nocturne: Valeria, about two miles out.
  - Hollowmere Manor: Ophelia, on the hill.
  - The Old Watchtower: Malzahra's tower. It is reached in the evening only after the day-10 attack.
- **Farther away:** the Sapphire Sea, the Ironpeaks (Hilde's dwarf homeland), the Underdark (Zyra), the Underrealm (Malzahra), the Western March (Duke Fopsworth), the Sunken Coast, the Grey Sound, the Frostspine Mountains.
- **Money:** gold crowns, with coppers as small change.

### Main plot ("The Starfall Heist", js/world.js)
- **Day 1:** You arrive on a hay cart. The driver says "Mind the pigeons. They've been organizing."
- **Day 3:** Old Ebbe the Prophet of Doom predicts that "the Dark Lord awakens SOON." His family has been saying it for 151 years. The scruffy black cat sleeping by his bucket **is the Dark Lord**.
- **Day 5:** The **Starfall Lens** goes on display in the Temple dome. It is a crystal disc that has hung in the Temple for **400 years**, and the Lens itself is 400 years old too. It gathers the falling stars onto the festival hill.
- **Day 7:** Pindle the imp, a Junior Underling in the Department of Skulking, is caught measuring the dome.
- **Day 10, morning:** **A dozen imps** raid the fountain and the bakery. The raid is a distraction, and the Lens is stolen while it happens. Malzahra watches from a rooftop. Her real orders said "SUBTLE RECONNAISSANCE. Be polite. Do NOT steal any more goats." **Lord Baalgrim forged the extra lines in green ink**: the fountain fuss and "loot the bakery." Malzahra did not order the raid.
- **Day 11:** Captain Brassbuckle deputizes you. Your tin badge says *(PROBABLY)*.
- **Day 13:** You investigate one of three leads: the library, the docks or the sewers.
- **Day 15:** The goddess dream sets the flag `goddess_awake`.
- **Day 18:** Baalgrim's ultimatum.
- **Day 20:** The masquerade at the **Ashcroft estate**.
- **Day 22:** The Council of Hearts, in the back room of the Tipsy Wyvern.
- **Day 25:** The omen.
- **Day 28:** The Herald Star rises, and the heist at the Old Watchtower takes place.
- **Day 30:** The Starfall Festival on the hill above the square, followed by the pie contest. The contest always ends in a brawl, and the blueberry man always wins.
- **Lord Baalgrim:**
  - Duke of the Fourth Pit and High Treasurer of the Underrealm, and a member of Malzahra's council.
  - He has served the Pit for **two thousand years**, which is longer than Malzahra (1,000) has ruled. That is why the council calls her "the young queen."
  - He is eight feet tall, with four polished horns, a ruler-straight beard, a jeweled breastplate, expensive cologne and green fire.
  - He is vain and theatrical, and he wants to be loved. His jar is the **Grand Amphora of Unconditional Adoration**.
- **Malzahra's council:** Baalgrim, Duke Ashmaw and the Twins of Cinder.
- **Malzahra's imps:** Gnarlbit fans her cape. Lord Ruin is the goat her imps stole.

### Temple and religion
- **The Goddess of Love is Amorette.** She narrates the story, is about 10,000 years old, and eats popcorn on the altar steps. Her substitute narrator is **Kevin**, Cupid's nephew. She has not taken a mortal body "in an age."
- **Scripture:** the **Canticles of Love**, of which there are illustrated editions. The hymns include the Hymn of the Radiant Heart and the Hymn of the Second Glance. The Book of Rites contains the Rite of Rest.
- **Temple people:**
  - **The Abbess** heads the Temple. She is a 91-year-old woman with spectacles who keeps a bill of damages that includes a column for sneezes. She retires after the festival, and two endings give her post away: Celestine's `celestine_abbess` and Maud's `maud_abbess`.
  - **Sister Celestine** is already **High Priestess**, the youngest ever.
  - **Sister Maud Ironveil** is **Warden** of the Order of the Radiant Heart. She is 34, lives in the Warden's Tower, carries the hammer Mercy, and is the Order's "Counsel of Hearts."
  - **The old sacristan** is an elderly bearded priest with a feather duster. He is the `warden` speaker in world.js, renamed by fix W4.
  - **Brother Osric** is the monk the Abbess's goat keeps biting (fixes W5 and C5).
  - There are about forty Sisters in the choir.
- **The orphanage** is one place: **Saint Wendel's Orphanage, in the old mill on Wendel Street**. Kit, Morwen, Rosalind, Shade and Valeria all help it.

### Institutions
- **Adventurers' Guild:**
  - **Mira** works the front desk.
  - **Norbert** is her useless desk neighbor (fix M1).
  - The **Guildmaster** is an unnamed man.
  - Forms come in numbered series: 12-B, 9-D, 88-B. In her first month, an adventurer has a 30% chance of dying.
- **Town Watch:** **Captain Brassbuckle**, a broad woman whose helmet crest is shaped like a moustache, and the desk sergeant who hands out lollipops.
- **Garrison:** a separate body, led by **Dame Brunhild von Steinhart**, Knight-Captain. **Recruit Pim** is the Duck Sergeant.
- **Mayor Puddingham:** a round man in an enormous wig. Kit keeps stealing his shoes.
- **Arcane Academy (Clichéton):** first-years levitate chickens. **Magister Oddwort** is Vespera's tutor, and he has formidable eyebrows. No dean is named.
- **Infernal Academy of Seduction (the Abyss):** **Dean Vexaria** wears spectacles and arrives in pillars of hellfire. Lilette is her first-year field student. Vexaria is never the Arcane Academy's dean.
- **The Silent Guild:** Shade's assassins.
- **Grand Library:** Pell is assistant librarian, and the head librarian is a woman.

### Royalty and nobility
- **Aurelia** is the **only Crown Princess**, and there is **no Crown Prince**. She is 24. Her cousin Prudence wants the crown, and her arranged fiancé is Duke Fopsworth of the Western March, who is 52.
- **Prince Cedric**, the King's nephew, is Rosalind's ex. He jilted her at the Royal Ball six months ago for a commoner girl (fix R1). **Edmund Ashworth** is only ever Ophelia's poet.
- **Lady Pemberton** and the Pembertons are gossips who have weasel chins. **Lord Pomfrey** is a fat, mustached, crooked noble with a vault and a slaving "spice" company; Kit robs him and Scarlett exposes him.
- **Valeria:** Countess Valeria Nocturne, the "Crimson Terror," Scourge of the Southern Vale. She paid for the Moonlit Gardens in 1502.

### The tavern and other town NPCs
- **The Tipsy Wyvern** is owned by **Madame Bettina Rosewater**. She has run it for 20 years and has been a widow for 8. Her late husband was **Harold**.
- **The Wyvern's people:**
  - The barkeep who serves at tables is a **hired barman**, an unnamed man. Bettina owns the place; "the tavern keeper" means her.
  - **Aura** (Aurelia) is the barmaid.
  - **Gruk**, also "Old Gruk," is a huge, bald, scarred **orc** who sits at the end of the bar. He embroiders, bites coins to test them, spars with Brakka, and blushes dark green.
  - The corner booth is for couples.
- **The bathhouse:** Sesha owns it. Old Pip is the boiler, named after the dwarf who built it. **Grumbold** is a seven-foot troll attendant. Bartholomew is Sesha's frog.
- **The bakery:** the baker is **a man**, unmarried, who is slowly courting the town **blacksmith**. The blacksmith is also a man and is **not Hilde**. Amorette, Gloria and Marigold all follow this romance. The baker's apprentice, the one with the forearms, is a different man.
- **The Gearwright Workshop:** Professor Ambrose Gearwright, a gnome, built Seven. He disappeared on an expedition three years ago.
- **Croaksworth:** **Sir Croaksworth**, Morwen's toad. He was a duke for 31 years and insulted her grandmother, who cursed him; he has been a toad for 40 years. He chooses to stay a toad.
- **Valeria's castle staff:** bats, ghouls, and **Gerald**, the one nervous butler. Gerald is the only person called Gerald in the game. **Sir Bertram** is a paladin Valeria turned into a coat rack.
- **Other named NPCs:**
  - Scarlett: First Mate Bones. Captain Blackheart is the dead pirate whose compass and buried treasure she has.
  - Brunhild: the plushie Sir Fluffington (fix C1), the cat Sir Pounce (fix C1), and Baron Wobbles and Lady Buttons.
  - Thistle: Bramblewick, her servant, and the snail Sir Slowly.
  - Kit: Granny Hobb, the widow Lord Pomfrey robbed.
  - Ophelia: Aunt Hester, her chaperone.
  - Maud: Sir Wendell and Lady Rosamund, the ghosts.
  - Others: Mr. Snips (Marigold's biting plant), Margery (Lyra's lute), Footnote (Vespera's raven), Biscuit (Ignivara's horse), Stabby and Pokey (Brakka's).

### Heroine facts that other files mention most often
- **Valeria** is about 600 years old. Vampires can't see their reflections, and she cannot eat.
- **Sylvaine** is 912 and has watched 912 Starfalls. When she was young, she ran off with a bard and dyed her hair blue.
- **Malzahra** has ruled for 1,000 years. **Ignivara** is 3,000. **Kohana** is 400, has three tails (she claims nine) and wears a brass shrine bell at her throat. **Thistle** has been queen for 900 years, has violet eyes and four dragonfly wings, and her true name is Hesper. **Amorette** is about 10,000.
- **Ophelia** died in 1824 on the night of her debutante ball. It was raining, and she fell down the stairs. Valeria knew her before she died and still visits about once a century.
- **Hikari** was hit by an ox cart on her way to work in Tokyo and woke up here. That was six months ago.
- **Brunhild** follows the Knight's Code of 112 tenets. Tenet 1 is to protect those who cannot protect themselves. Tenet 43 is "A knight shall never giggle." She has never lost a duel; she calls her losses "inconclusive."
- **Pell** is Lady Velvet Ink, the author of *The Duke's Forbidden Passion*. **Volume Nine (IX)** is the newest volume and the one sold as the gift item. Readers who own all of it have read One through Eight first.
- **Zyra** came to the surface two years ago. **Seven** has been observing for three years. **Maud** has matched 212 couples. **Lyra** has written 214 love songs.
- **Coralie** is the youngest daughter of the Sea King, **King Triton the Third**. She has teal hair and a turquoise tail.

### Running gags
- **The fork:** the Ordinary Fork costs 3 gold. Coralie loves it, Thistle hates it because it is cold iron, and THE FORK can win the heist.
- **The pigeons are organized.** Rosalind runs a pigeon network that steals from the rich.
- **The blueberry man** always wins the pie contest. It's rigged, and the contest always ends in a brawl.
- **The Dark Lord** has been "awakening soon" for about 400 years. He is the black cat.
- Heroines are allowed to claim the same weekday, such as several of them claiming Thursdays. In a harem ending the overlap is part of the joke.

---

## Part 2: Fix list

Priority: **A** means a player will notice, so fix it. **B** is a real inconsistency and worth fixing. **C** is low priority.

Each fix gives the line number in the current file, a quoted snippet, and the change to make. When a fix says "replace every X," it means every occurrence in that file only.

### js/world.js (plot owner)

| ID | Pri | Problem | Snippet | Change |
|---|---|---|---|---|
| W1 | A | Scarlett's ship is the *Crimson Tide* in scarlett.js and crossovers. | l.1424 `The *Crimson Gale* sails for you, love.` and l.1648 `Scarlett's voice carries all the way from the *Crimson Gale*` | Replace `Crimson Gale` with `Crimson Tide` in both places. |
| W2 | B | The Lens's age is given twice as 400 years (l.639 and l.1713), once as 10,000. | l.1158 `A ten-thousand-year-old miracle, {name}` | Change to `A four-hundred-year-old miracle, {name}`. |
| W3 | A | Celestine is already High Priestess in her own blurb. | l.1976 `Sister Celestine is made High Priestess, on the strength of` | Change to `Sister Celestine is made Abbess when the old Abbess finally retires, on the strength of`. |
| W4 | B | Two different people called "warden": Maud is Warden of the Order. | l.19 `FL.addSpeaker('warden', 'Temple Warden', ...)`, l.1541 `the old warden has been doing sums`, l.1881 `The old warden takes it from you` | Change the display name to `'Old Sacristan'`, keeping the id `warden`. Change both narration lines to `the old sacristan` / `The old sacristan`. |
| W5 | B | Brother Pim collides with Brunhild's Recruit Pim. | l.930 `Brother Pim tried to move it. Brother Pim is lying down now.` | Replace both with `Brother Osric` (see C5). |
| W6 | B | Sylvaine is 912 and has "watched every one" of 912 Starfalls. Thistle was born from the first Starfall more than 1,000 years ago. | l.1402 `I watched the first Starfall from this hill when it was a mountain.` | Change to `I have watched nine hundred and twelve Starfalls from this hill.` and keep the rest of the line. |
| W7 | B | Kohana's voice tics are "Mm-hm-hm" and "dumpling"; she never says "Fufu" anywhere else. | l.1426 `How *quaint.* Fufu. Leave the masks to the professional, little one.` and l.1992 `@kohana:smug Fufu. Spiritually, that counts` | In both lines replace `Fufu.` with `Mm-hm-hm.` In l.1426 also replace `little one` with `dumpling`. |
| W8 | C | The price doesn't match within one scene. | l.1564 `Buy the ordinary fork. (3 gold)` vs l.1577 `You hand over three coppers.` | Change l.1577 to `You hand over three gold coins.` Optionally change l.1767 `three-copper dinner fork` to `three-gold dinner fork`. |

### js/crossovers.js

| ID | Pri | Problem | Snippet | Change |
|---|---|---|---|---|
| C1 | A | In brunhild.js, **Sir Fluffington is her stuffed bunny** and her only cat is **Sir Pounce**. Her ending has "one very fat orange cat." | x_kohana_brunhild l.1363 `This one's called Sir Fluffington. He's yours.`; l.1382 `Sir Fluffington climbs up her greave`; l.1384 `She keeps the kitten.`; l.1412 `where it purrs against the steel all the way home.` | l.1363 → `This one's called Sir Fluffington the Second. He's yours.` l.1382 → `Sir Fluffington the Second climbs up her greave`. l.1384 → `She does not keep the kitten. She enlists it as garrison mouser and inspects it every morning.` l.1412 → `where it purrs against the steel all the way to the garrison stables.` |
| C2 | A | Malzahra did not order the raid: Baalgrim forged that part of her orders, and only a dozen imps took part. The line also needs the male baker (C3). | x_screamed_at l.1003 `I raided the fountain with forty imps, and the baker asked me to sign her apron.` | → `A dozen of my imps raided the fountain, and the baker asked me to sign his apron.` |
| C3 | B | The baker is a man (see the canon section on the tavern and other town NPCs). | l.749 `even though she *laughed* at their joke`; l.1333 `I'm not even sure she likes roses.`; l.1334 `She doesn't. She likes peonies.` | `he *laughed*`; `I'm not even sure he likes roses.`; `He doesn't. He likes peonies.` |
| C4 | B | ophelia.js l.61 calls the player "the only visitor I've had in a century who hasn't screamed." | x_ophelia_valeria l.662 `Valeria has been visiting once a decade to complain about her neighbors.` | → `Valeria visits about once a century to complain about her neighbors. She's overdue.` |
| C5 | C | There is already an Ambrose (Professor Ambrose Gearwright, seven.js). | x_sigrun_mira l.1540 `It's bitten Brother Ambrose eleven times` | → `Brother Osric` (the same monk as W5). |
| C6 | C | Croaksworth is already "Sir Croaksworth" (morwen.js speaker), so he can't be knighted. | x_thistle_morwen l.1628 `And I'm knighting the toad. Sir Slowly could do with a squire.` | → `And the toad is hereby squire to Sir Slowly. He is already a Sir, but mine are better.` |

### js/chars/mira.js
| ID | Pri | Problem | Change |
|---|---|---|---|
| M1 | A | **Two Geralds.** Valeria's butler Gerald (about 30 lines) collides with Mira's desk neighbor Gerald (11 lines). Example: l.64 `The desk next to mine is staffed by Gerald. Gerald stamps upside down.` | Replace every `Gerald` in mira.js with `Norbert`, 11 occurrences (l.22, 64, 81, 89, 132, 566, 709, 725, 738, 739, 749). Check the apostrophes in `Norbert's stamp` (l.709). |

### js/chars/rosalind.js
| ID | Pri | Problem | Change |
|---|---|---|---|
| R1 | A | **Two Edmunds.** Ophelia's Edmund Ashworth (19 lines, central to her mystery) collides with Rosalind's ex (9 lines). Example: l.438 `Then Edmund broke our engagement at the Royal Ball.` | Replace every `Edmund` in rosalind.js with `Cedric` (l.52, 72, 293, 438, 582, 727, 739, 805, 806). |
| R2 | A | **Crown Prince vs Crown Princess.** Aurelia is the Crown Princess and sole heir; her cousin Prudence is next. A Crown Prince can't exist alongside her. | l.16 blurb `publicly jilted by the Crown Prince six months ago` → `publicly jilted by Prince Cedric, the King's nephew, six months ago`. l.663 `She walks straight past the Crown Prince and his fiancée` → `straight past Prince Cedric and his fiancée`. l.712 `The Crown Prince takes a step backwards.` → `Prince Cedric takes a step backwards.` Leave "the Prince" elsewhere as it is. |

### js/chars/hikari.js
| ID | Pri | Problem | Change |
|---|---|---|---|
| H1 | A | The blurb contradicts her own talk (l.30, l.372: the ox cart hit her in her old world), her ending (l.623) and x_hikari_sigrun. | l.11 `who was hit by a cart-pulling ox on her first day here and is *absolutely certain*` → `who was hit by a cart-pulling ox on her way to work, woke up here, and is *absolutely certain*`. |

### js/chars/bettina.js
| ID | Pri | Problem | Change |
|---|---|---|---|
| B1 | B | **Gruk** is the same character in bettina, aurelia and brakka: a huge, bald, scarred orc regular who embroiders. Orcs blush green (crossovers: "an orc blush"). | l.682 `a kiss on his bald head that makes him go purple` → `that makes him go dark green`. |
| B2 | B | The baker is unmarried and courting the blacksmith. | l.21 `then Aura, then the baker's wife.` → `then Aura, then the fishmonger's wife.` |
| B3 | C | "Lord Pemberly" is too close to "Lady Pemberton," a different noble family that appears in 3 files. | Optional: replace `Lord Pemberly` with `Lord Pettigrew` (l.109, l.156). |

### js/chars/coralie.js
| ID | Pri | Problem | Change |
|---|---|---|---|
| CO1 | B | The owner of the Tipsy Wyvern is Bettina, a woman. | l.85 `The tavern keeper says I'm banned from the Tipsy Wyvern until the floor dries.` → `Madame Bettina says I'm banned from the Tipsy Wyvern until the floor dries.` In the same entry, `I asked him when that will be. He said \"never.\"` → `I asked her when that will be. She said \"never.\"` |
| CO2 | C | **Two Bartholomews:** Sesha's frog (6 lines) and Coralie's dead trout (2 lines). | l.133 `His name was Bartholomew.` and l.136 `carry Bartholomew down to the harbor` → `Humphrey`. |

### js/chars/malzahra.js
| ID | Pri | Problem | Change |
|---|---|---|---|
| MZ1 | A | Baalgrim has served the Pit for 2,000 years (world.js, six times), and that is why the council calls her "the young queen." | l.511 `I was ruling while your grandfather was still an egg, Baalgrim. KNEEL.` → `You have served it for two, and you are still only a *treasurer*, Baalgrim. KNEEL.` |
| MZ2 | B | In world.js Baalgrim is a vain, groomed dandy who uses cologne and green fire. | l.464 `a huge, brutish demon with four horns and a jeweled breastplate` → `a towering, immaculately groomed demon with four polished horns and a jeweled breastplate`. |
| MZ3 | B | She didn't order the bakery raid; Baalgrim forged that order. She can still claim it out of pride. | l.320 `...The bakery was also strategic.` → `...The bakery was not in my orders. But now that you mention it, the bakery was *also* strategic.` |

### js/chars/zyra.js
| ID | Pri | Problem | Change |
|---|---|---|---|
| Z1 | B | Sir Fluffington is Brunhild's bunny plushie, and both bunnies are the same gift item. | l.51 `His name is Sir Fluffington the Unstabbed.` → `His name is Lord Snugglesworth the Unstabbed.` |

### js/chars/pell.js
| ID | Pri | Problem | Change |
|---|---|---|---|
| P1 | B | **Two Footnotes:** Vespera's raven (a speaker, plus crossovers) and Pell's library cat. | Replace every `Footnote` in pell.js with `Errata` (l.71, 87, 109, 377, 395, 401, 441, 604, 628, 683). |

### js/chars/maud.js
| ID | Pri | Problem | Change |
|---|---|---|---|
| MD1 | B | Lord Pomfrey is the crooked noble in kit, scarlett and crossovers, so the tourney knight needs another name. | l.3 speaker display `'Sir Pomfrey of the Forty Ribbons'` → `'Sir Peregrine of the Forty Ribbons'`. Keep the id `maud_pomfrey`. Replace `Sir Pomfrey` with `Sir Peregrine` at l.487, 508, 519, 529. |
| MD2 | B | The line assumes Celestine has a sweetheart, which is only true on her route. | l.28 `Celestine keeps one on hers for her sweetheart.` → `Celestine keeps one on hers. She won't say who it's for.` |

### js/chars/amorette.js
| ID | Pri | Problem | Change |
|---|---|---|---|
| A1 | C | **Two Hobbs:** Kit's Granny Hobb, the robbed widow (4 lines), and Amorette's gardener with a rake. | l.182 `That's Old Hobb` → `That's Old Grimsby`. l.183 `while Hobb stomps past` → `while Grimsby stomps past`. |
| A2 | B | The baker and the blacksmith are both men (marigold.js l.70: the blacksmith buys violets "for his mother"). | l.621 `The baker proposed to the blacksmith at four this morning. She said yes.` → `...He said yes.` |

### js/chars/gloria.js
| ID | Pri | Problem | Change |
|---|---|---|---|
| G1 | C | The name Margery is taken by Lyra's lute (23 lines plus crossovers). | l.332 `his wife, Margery, of fifty years` → `his wife, Millicent, of fifty years`. The ring's "M" still works. |
| G2 | B | Hilde has never made jewelry (her blurb says so, and so does x_maud_hilde). | l.332 `The goldsmith's mark is from Hilde's forge. The engraving style is old.` → `The goldsmith's mark belongs to a jeweller on Artisan's Row who retired decades ago.` |

### js/chars/kohana.js
| ID | Pri | Problem | Change |
|---|---|---|---|
| K1 | B | The baker is a man. | l.79 `Then I told the baker you think she's *wonderful.*` → `you think he's *wonderful.*` Leave l.68 as it is: "His grandson answers" already fits. |

### js/chars/sesha.js
| ID | Pri | Problem | Change |
|---|---|---|---|
| S1 | B | The baker is a man. | l.74 `She dropped a loaf. But then she smiled *back!*` → `He dropped a loaf. But then he smiled *back!*` |

### js/chars/thistle.js
| ID | Pri | Problem | Change |
|---|---|---|---|
| T1 | C | Amorette's blurb says this is her first mortal form "in an age," and world.js says the same. | l.45 `She does this every few centuries; it's a whole phase.` → `She hasn't done that in an age. Last time, I was still a princess.` |

### Checked and left alone (no change needed)
- **Baker gender:** these lines already say "he": gloria l.55 and l.608, lyra l.52, lilette l.61, brunhild l.749, kohana l.68.
- **Tavern barkeep "he":** in valeria, malzahra, coralie (l.136, l.144) and others, the barkeep is the hired barman. Bettina is the owner.
- **Kit's frog named "Lord Pomfrey"** is a deliberate insult. Ophelia's spider "Lord Ambrose" is a hereditary spider title. The player's improvised "cousin Bertram" in aurelia.js is a fake name. All three stay.
- **The relic:** Malzahra calls it a pig's knuckle, Amorette calls it Saint Ebbert's, and Maud calls it "Saint Probably." The item is "(Probably)," so the disagreement is the joke.
- **The day-10 attack:** cameo heroics stay as long as nobody claims more than a dozen imps. Maud flattened six, Sigrun held one up by the tail, and Thistle sneezed lemonade.
- **"Mrs. Fennick" vs "the Bog Hag of Fennick":** one is a person and one is a place. Rename one only if someone touches those lines anyway.
- **Marigold:** crossovers call her shop a "flower stall." She has a shop with a stall out front.
- **Kohana's ages:** "four hundred years old" and "out-watched for the first time in three hundred years" don't conflict.
