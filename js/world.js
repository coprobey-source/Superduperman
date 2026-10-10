/* World data: speakers, items, locations, main-plot events, festival & generic endings. */
(function () {
  'use strict';
  const FL = window.FL;

  /* ------------------------------------------------------------------ speakers */
  FL.addSpeaker('narrator', 'The Narrator', '#e8c6ff');
  FL.addSpeaker('driver', 'Cart Driver', '#a89f91');
  FL.addSpeaker('crier', 'Town Crier', '#d9b36c');
  FL.addSpeaker('imp', 'Imp', '#ff6b6b');
  FL.addSpeaker('host', 'Masquerade Host', '#c9a0dc');
  FL.addSpeaker('cat', 'Stray Cat', '#aaaaaa');
  FL.addSpeaker('dean', 'Dean Vexaria', '#d0457e');
  FL.addSpeaker('knight', 'Knight', '#c0c8d8');
  FL.addSpeaker('baalgrim', 'Lord Baalgrim', '#5fd35f');
  FL.addSpeaker('gnarlbit', 'Gnarlbit the Imp', '#ff8f6b');
  FL.addSpeaker('stranger', '???', '#a35cff');
  FL.addSpeaker('prophet', 'Old Ebbe, Prophet of Doom', '#9b8ec4');
  FL.addSpeaker('warden', 'Old Sacristan', '#e6d9a8');
  FL.addSpeaker('captain', 'Captain Brassbuckle', '#c98b4a');
  FL.addSpeaker('pindle', 'Pindle the Imp', '#ff9d7a');
  FL.addSpeaker('darklord', 'The Dark Lord', '#b9a6ff');
  FL.addSpeaker('sub', 'The Substitute Narrator', '#9a9a9a'); // also registered by amorette.js

  /* ------------------------------------------------------------------ items */
  const items = [
    ['roses', 'Bouquet of Roses', 15, 'A dozen red roses. The single most clichéd gift in existence.'],
    ['chocolate', 'Box of Fine Chocolates', 20, 'Hand-made truffles from the confectioner on Market Street.'],
    ['steak', 'Raw Wyvern Steak', 18, 'A slab of red meat, still faintly smoking. Wrapped in paper. Mostly.'],
    ['wine', 'Vintage Bloodwine', 30, 'A red so dark it is nearly black. The label says "Do not ask."'],
    ['tome', 'Ancient Tome', 35, 'Leather-bound, dusty, and probably cursed only a little.'],
    ['gem', 'Sparkling Gemstone', 50, 'A fist-sized sapphire that catches every bit of light in the room.'],
    ['yarn', 'Ball of Yarn', 5, 'Bright red wool. Irresistible to a certain kind of person.'],
    ['fish', 'Fresh Fish', 8, 'Caught this morning. Smells like it, too.'],
    ['ale', 'Keg of Dwarven Ale', 25, 'A small keg of ale strong enough to strip paint.'],
    ['candle', 'Blessed Candle', 10, 'A candle sanctified at the Temple. Glows a soft gold.'],
    ['perfume', 'Exotic Perfume', 30, 'A crystal vial of something floral, heady and expensive.'],
    ['cakes', 'Honey Cakes', 10, 'Sticky, golden, and still warm from the bakery.'],
    ['gears', 'Clockwork Gears', 20, 'A pouch of precision brass gears and springs.'],
    ['comb', 'Pearl Comb', 25, 'A comb inlaid with mother-of-pearl.'],
    ['dagger', 'Silver Dagger', 40, 'A finely balanced blade of pure silver. Very pointy.'],
    ['herbs', 'Rare Moonherbs', 15, 'Silvery leaves that only grow under a full moon.'],
    ['tea', 'Imported Tea Set', 30, 'Porcelain cups and a tin of fragrant leaves from far-off lands.'],
    ['plushie', 'Cute Plushie', 12, 'A stuffed bunny with button eyes. Dangerously adorable.'],
    ['axe', 'Great Battle Axe', 45, 'Double-headed, heavy, and gorgeous in a brutal sort of way.'],
    ['scroll', 'Spell Scroll', 25, 'A one-use scroll of "Minor Sparkles." Mostly decorative.'],
    ['mirror', 'Gilded Hand Mirror', 20, 'An ornate mirror with a gold frame.'],
    ['rum', 'Bottle of Rum', 15, 'Why is the rum always gone? Not this one. Yet.'],
    ['novel', 'Steamy Romance Novel', 12, '"The Duke\'s Forbidden Passion, Volume IX." The cover alone is scandalous.'],
    ['fork', 'Ordinary Fork', 3, 'A plain dinner fork. Nothing special about it. Nothing at all.'],
    ['tofu', 'Fried Tofu Pockets', 8, 'Golden, sweet and sticky. Foxes are said to be utterly unable to resist them.'],
    ['mead', 'Horn of Honey Mead', 22, 'A drinking horn of golden mead. Tastes like summer and poor decisions.'],
    ['strings', 'Silver Lute Strings', 18, 'A coil of fine silver strings. Every bard in the kingdom wants a set.'],
    ['nectar', 'Moonflower Nectar', 14, 'A thimble-sized vial of glowing nectar. Fairies have traded kingdoms for less.'],
    ['polish', 'Glitter Nail Polish', 10, 'Hot pink and extremely sparkly. Not traditional elven fashion. At all.'],
    ['salts', 'Scented Bath Salts', 16, 'Lavender and sea salt in a little glass jar. Instant relaxation, just add water.'],
    ['relic', 'Saintly Relic (Probably)', 28, 'A knucklebone in a tiny gilded reliquary. The seller swore it was holy. The seller was sweating.'],
    ['quill', 'Enchanted Quill', 26, 'A raven-feather quill that writes by itself. Mostly insults, in beautiful handwriting.'],
  ];
  items.forEach(function (i) {
    FL.addItem({ id: i[0], name: i[1], price: i[2], desc: i[3] });
  });

  /* ------------------------------------------------------------------ locations */
  // open: list of slot indexes (0 morning, 1 afternoon, 2 evening). Omitted = always open.
  FL.addLocation({
    id: 'square',
    music: 'town',
    name: 'Town Square',
    icon: '⛲',
    desc: [
      'The heart of Clichéton: a cobbled plaza around a fountain of a heroic statue whose name nobody remembers. Merchants shout, pigeons scheme.',
      'Afternoon sun bakes the cobbles. A bard is murdering a love ballad near the fountain. The notice board flutters with fresh postings.',
      'Lanterns glow around the fountain. Couples stroll arm in arm. The air smells of roasted chestnuts and possibility.',
    ],
    activities: [
      { id: 'board', label: 'Read the notice board', free: true, lines: function (s) {
        const left = FL.CONFIG.maxDay - s.day;
        return [
          'NOTICE: The Starfall Festival is in ' + left + ' day(s)! Legend says the falling stars bind true lovers forever. Bring someone special!',
          'WANTED: Brave adventurers for odd jobs. Inquire at the Adventurers\' Guild. (No experience required. Please stop asking about experience.)',
          'LOST: One (1) dignity. Last seen at the Tipsy Wyvern. Reward offered. — Sir Reginald',
          'The Grand Library is open mornings and afternoons. Studying sharpens the Wits. Sharp Wits impress certain scholarly hearts.',
          'The Arena is always looking for sparring partners. Might is respected by warriors, beasts, and at least one dragon.',
          'Mingling at the Tipsy Wyvern builds Charm. Charming folk find nobles, priestesses and certain undead much more agreeable.',
          'Tip from the Guild: Most hearts have a favorite gift and one they truly hate. Pay attention to how people react!',
        ];
      } },
      { id: 'rest', label: 'Sit by the fountain and rest', lines: [
        'You sit on the fountain\'s edge and watch the world go by. Time passes pleasantly and unproductively.',
        'You nap on a bench. A pigeon steals a crumb from your pocket. Neither of you mentions it.',
        'You people-watch. A noblewoman drops a glove; three people dive for it. Romance is everywhere here.',
      ] },
    ],
  });
  FL.addLocation({
    id: 'tavern',
    music: 'tavern',
    name: 'The Tipsy Wyvern',
    icon: '🍺',
    desc: [
      'The tavern is quiet this early: a few bleary-eyed adventurers, the smell of porridge and last night\'s ale.',
      'The lunch crowd is loud and hungry. Somebody is arm-wrestling. Somebody is losing.',
      'The Tipsy Wyvern is roaring. A fire crackles, tankards clash, and someone is singing a song with far too many verses about a goblin\'s trousers.',
    ],
    activities: [
      { id: 'shift', label: 'Work a shift (+gold, more with Charm)', gold: 12, bonusStat: 'charm', bonusPer: 2, lines: [
        'You haul tankards until your arms ache. The tips are decent.',
        'You wash dishes and charm a table of dwarves into tipping generously.',
        'You break up a bar fight with a well-timed joke. The owner slips you a bonus.',
      ] },
      { id: 'mingle', label: 'Mingle & tell tales (5g, +1 Charm)', cost: 5, stat: { charm: 1 }, lines: [
        'You buy a round and tell the tale of your arrival. It gets more heroic every time. (+1 Charm)',
        'You learn three new jokes and a card trick. The crowd warms to you. (+1 Charm)',
        'You win a flirting contest against a professional bard. Barely. (+1 Charm)',
      ] },
    ],
  });
  FL.addLocation({
    id: 'guild',
    music: 'town',
    name: 'Adventurers\' Guild',
    icon: '🛡️',
    open: [0, 1],
    desc: [
      'The Guild hall bustles with sword-for-hire types queuing at the quest board. A huge sign reads: "NO, WE DON\'T HAVE A DRAGON QUEST. STOP ASKING."',
      'Adventurers swap stories and bandages. A suspicious number of people are carrying ten-foot poles.',
      '',
    ],
    activities: [
      { id: 'quest', label: 'Take a quest (+gold, more with Might)', gold: 20, bonusStat: 'might', bonusPer: 3, lines: [
        'You clear a farmer\'s barn of giant rats. They were, regrettably, very giant.',
        'You escort a merchant to the next village. Bandits take one look at you and reconsider their life choices.',
        'You retrieve a "legendary sword" from a cave. It is a slightly rusty butter knife. The client is thrilled anyway.',
        'You slay seven slimes. None of them were the cute kind. Probably.',
      ] },
    ],
  });
  FL.addLocation({
    id: 'market',
    music: 'town',
    name: 'Market Street',
    icon: '🛒',
    open: [0, 1, 2],
    shop: true,
    desc: [
      'Stalls unfold like flowers along Market Street: fruit, fabric, flasks of suspicious potions. Marigold\'s Flower Shop glows with color on the corner.',
      'The market is packed. A butcher shouts prices. A pickpocket with a tail is very obviously not pickpocketing anyone.',
      'Most stalls are closing, but the lantern-lit ones selling sweets, perfume and "romantic gifts" are doing brisk business.',
    ],
    activities: [],
  });
  FL.addLocation({
    id: 'artisan',
    music: 'town',
    name: 'Artisan\'s Row',
    icon: '⚒️',
    open: [0, 1],
    desc: [
      'Hammers ring from the Stonebrew Forge. Next door, the Gearwright Workshop ticks and whirs and occasionally explodes.',
      'Heat shimmers from the forge. Brass contraptions crawl along the workshop windowsill like curious beetles.',
      '',
    ],
    activities: [
      { id: 'apprentice', label: 'Apprentice shift (+18 gold)', gold: 18, lines: [
        'You pump the bellows at the forge until your arms burn. Honest work, honest coin.',
        'You sort ten thousand tiny screws by size at the workshop. You will see screws in your dreams.',
      ] },
    ],
  });
  FL.addLocation({
    id: 'library',
    music: 'library',
    name: 'Grand Library',
    icon: '📚',
    open: [0, 1],
    desc: [
      'Towering shelves vanish into dimness above. Dust motes dance in the light from stained-glass windows. Someone whispers "shhh" at a volume louder than any talking.',
      'The reading hall is warm and hushed. Scholars doze over scrolls. A ladder rolls along the shelves on its own.',
      '',
    ],
    activities: [
      { id: 'study', label: 'Study (+1 Wits)', stat: { wits: 1 }, lines: [
        'You read "Monsters and Their Feelings, Vol. II." Surprisingly moving. (+1 Wits)',
        'You puzzle through a treatise on applied enchantment. Your brain feels bigger. (+1 Wits)',
        'You study the history of Generic FantasyLandia. It is exactly what you expected, which is somehow fascinating. (+1 Wits)',
      ] },
      { id: 'copy', label: 'Copy manuscripts (+gold, more with Wits)', gold: 10, bonusStat: 'wits', bonusPer: 3, lines: [
        'You copy a crumbling manuscript in neat script. The archivist pays by the page.',
        'You transcribe a dull legal text. Your penmanship improves; your will to live does not.',
      ] },
    ],
  });
  FL.addLocation({
    id: 'temple',
    music: 'temple',
    name: 'Temple of the Radiant Heart',
    icon: '⛪',
    desc: [
      'White marble and golden light. Morning prayers echo under the dome, and the air smells of incense and fresh bread from the soup kitchen.',
      'The temple is peaceful in the afternoon. Sunlight paints stained-glass colors across the pews.',
      'At night the temple is lit by a thousand candles. The statue of the Goddess of Love seems almost to be smiling. Almost smirking, actually.',
    ],
    activities: [
      { id: 'volunteer', label: 'Volunteer at the soup kitchen (+1 Charm)', stat: { charm: 1 }, lines: [
        'You ladle soup for the hungry and learn the art of the warm smile. (+1 Charm)',
        'You help an old man write a love letter to his wife of fifty years. You may have cried. (+1 Charm)',
      ] },
      { id: 'pray', label: 'Pray for luck in love', free: true, lines: [
        'You pray. Somewhere, very faintly, you hear someone giggle.',
        'You pray for romance. A candle flickers in a way that feels distinctly like a wink.',
      ] },
    ],
  });
  FL.addLocation({
    id: 'noble',
    music: 'noble',
    name: 'Noble Quarter',
    icon: '🏰',
    desc: [
      'Manicured hedges, marble fountains and townhouses with more windows than sense. The Ashcroft estate looms at the end of the lane.',
      'Ladies with parasols and lords with monocles stroll the Moonlit Gardens. Everyone is pretending not to stare at everyone else.',
      'The Moonlit Gardens earn their name: silver light on white roses, hidden benches, whispered secrets.',
    ],
    activities: [
      { id: 'salon', label: 'Attend a salon (10g, +1 Charm)', cost: 10, stat: { charm: 1 }, lines: [
        'You sip tea and learn which fork to use for which course. There are eleven. (+1 Charm)',
        'You survive an afternoon of noble gossip and come out wittier and more polished. (+1 Charm)',
      ] },
    ],
  });
  FL.addLocation({
    id: 'arena',
    music: 'epic',
    name: 'Arena & Training Grounds',
    icon: '⚔️',
    desc: [
      'Knights drill in formation on the training sands. Straw dummies stand in rows, awaiting their doom.',
      'The arena roars as gladiators clash below. The training yard is full of grunting and the clang of practice blades.',
      'The arena is lit by torches for the night bouts. The crowd is drunk, loud and very invested.',
    ],
    activities: [
      { id: 'train', label: 'Train (+1 Might)', stat: { might: 1 }, lines: [
        'You beat a training dummy into submission. It had it coming. (+1 Might)',
        'You run laps with the knights until your legs turn to jelly. (+1 Might)',
        'You spar with a retired gladiator who calls you "kid" and hits like a falling house. (+1 Might)',
      ] },
      { id: 'bout', label: 'Fight an exhibition bout (+gold, more with Might)', gold: 10, bonusStat: 'might', bonusPer: 4, lines: [
        'You fight a man dressed as a chicken. You win. The crowd boos — the chicken was popular.',
        'You fight a pair of goblin twins. It\'s close, but the purse is yours.',
      ] },
    ],
  });
  FL.addLocation({
    id: 'docks',
    music: 'sea',
    name: 'Saltbreeze Harbor',
    icon: '⚓',
    desc: [
      'Gulls wheel over creaking ships. Fishermen haul nets full of silver. A pirate ship with crimson sails is anchored brazenly in the bay.',
      'The docks are busy with cargo and sailors. The waves slap the pilings. Out on the rocks, something with a shimmering tail ducks out of sight.',
      'Lanterns bob on the black water. Sailors sing shanties in dockside taverns. The sea glitters under the moon.',
    ],
    activities: [
      { id: 'cargo', label: 'Unload cargo (+18 gold)', gold: 18, lines: [
        'You haul crates until your shoulders ache. One crate meows. You do not ask.',
        'You unload a shipment of exotic spices and sneeze for an hour. Still: paid.',
      ] },
      { id: 'fish', label: 'Go fishing (get a Fresh Fish)', give: { fish: 1 }, lines: [
        'You catch a fat silver fish. It looks at you with deep betrayal.',
        'You catch a boot, a smaller boot, and finally a fish. Victory.',
      ] },
    ],
  });
  FL.addLocation({
    id: 'sewers',
    music: 'cave',
    name: 'The Sewers',
    icon: '🕳️',
    desc: [
      'Every fantasy town has sewers, and Clichéton is no exception. Dripping stone, echoing tunnels, and an aroma best described as "historic."',
      'The tunnels glow faintly green here and there. Something gloops in the darkness, pleasantly.',
      'The sewers at night: drip, drip, drip, and somewhere, humming.',
    ],
    activities: [
      { id: 'rats', label: 'Hunt giant rats (+gold, more with Might)', gold: 16, bonusStat: 'might', bonusPer: 2, lines: [
        'You hunt giant rats. It\'s the most traditional adventuring experience imaginable.',
        'You exterminate a rat king. It had a tiny crown. You keep the crown. (Not really — you sell it.)',
      ] },
    ],
  });
  FL.addLocation({
    id: 'forest',
    music: 'forest',
    name: 'Whisperwood Forest',
    icon: '🌲',
    desc: [
      'Mist curls between ancient trees. Birds sing. A path leads deeper toward a hidden elven glade, and a crooked chimney puffs colored smoke somewhere off to the left.',
      'Sunlight filters green-gold through the canopy. Somewhere a wolf howls — a little too cheerfully.',
      'The forest at night is all silver moonlight and glowing mushrooms. Eyes gleam in the undergrowth. Some of them seem friendly.',
    ],
    activities: [
      { id: 'forage', label: 'Forage (get Rare Moonherbs)', give: { herbs: 1 }, lines: [
        'You find a patch of moonherbs glittering in a hollow log.',
        'You gather moonherbs and only get slightly lost.',
      ] },
    ],
  });
  FL.addLocation({
    id: 'bathhouse',
    music: 'temple',
    name: 'Steamwhistle Bathhouse',
    icon: '♨️',
    desc: [
      'Steam curls from the vents of the Steamwhistle Bathhouse. Inside: cedar benches, warm tiles, and a sign reading "NO SWIMMING IN THE TEA."',
      'The afternoon soak crowd lounges in the pools: a troll reading the paper, two retired knights comparing scars, and something long and scaled coiled around the hottest spring.',
      'Lanterns float on the evening pools. The water glows faintly blue. Everyone is very relaxed and pretending not to look at everyone else.',
    ],
    activities: [
      { id: 'soak', label: 'Soak in the hot springs (6g, +1 Charm)', cost: 6, stat: { charm: 1 }, lines: [
        'You soak until every knot in your back unties itself. You emerge glowing and somehow more charming. (+1 Charm)',
        'You share a pool with a chatty old dwarf who teaches you three compliments that work on anyone. (+1 Charm)',
      ] },
      { id: 'scrub', label: 'Scrub tiles (+14 gold)', gold: 14, lines: [
        'You scrub tiles until they gleam. Something in the deep pool watches you approvingly.',
        'You fish eleven lost rings and one confused frog out of the drains. Paid in full.',
      ] },
    ],
  });
  FL.addLocation({
    id: 'academy',
    music: 'library',
    name: 'Arcane Academy',
    icon: '🔮',
    open: [0, 1],
    desc: [
      'The Arcane Academy of Clichéton: spires, gargoyles, and a courtyard where first-years practice levitation on increasingly nervous chickens.',
      'Lecture halls hum with chanting. A door on the third floor has been glowing purple for a week, and the faculty have agreed not to talk about it.',
      '',
    ],
    activities: [
      { id: 'lecture', label: 'Sit in on a lecture (5g, +1 Wits)', cost: 5, stat: { wits: 1 }, lines: [
        'You sit in on "Theoretical Fireballs 101." You only catch fire twice. (+1 Wits)',
        'You attend a seminar on the ethics of summoning. The demon in the front row asks the best questions. (+1 Wits)',
      ] },
      { id: 'lab', label: 'Assist in the lab (+gold, more with Wits)', gold: 10, bonusStat: 'wits', bonusPer: 3, lines: [
        'You stir cauldrons and label potions. Only one of them tries to escape.',
        'You hold the ladder while a professor argues with a bookshelf. Hazard pay included.',
      ] },
    ],
  });
  FL.addLocation({
    id: 'peak',
    music: 'epic',
    name: 'Dragonspire Peak',
    icon: '🏔️',
    open: [0, 1],
    desc: [
      'A brutal climb ends at a windswept summit scattered with old bones and older gold. A great cave mouth breathes warm air.',
      'The peak glitters: coins, crowns and goblets are strewn across the rocks as if someone ran out of room inside.',
      '',
    ],
    activities: [
      { id: 'scales', label: 'Gather shed dragon scales (+35 gold, needs Might 2)', gold: 35, req: { might: 2 }, lines: [
        'You pry loose a few shed scales and scramble down before anything notices. They sell for a fortune.',
      ] },
    ],
  });
  FL.addLocation({
    id: 'castle',
    music: 'night',
    name: 'Castle Nocturne',
    icon: '🦇',
    open: [2],
    desc: [
      '',
      '',
      'Black spires claw at a blood-red moon. Bats swirl around the towers. The gates stand open — invitingly, which is the most frightening thing about them.',
    ],
    activities: [],
  });
  FL.addLocation({
    id: 'manor',
    music: 'night',
    name: 'Hollowmere Manor',
    icon: '👻',
    open: [2],
    desc: [
      '',
      '',
      'An abandoned manor on the hill. Dust sheets over the furniture, cobwebs like lace, and a piano that plays itself — badly, but with feeling.',
    ],
    activities: [],
  });
  FL.addLocation({
    id: 'watchtower',
    music: 'tension',
    name: 'The Old Watchtower',
    icon: '🗼',
    open: [2],
    unlock: function (s) { return !!s.flags.demon_attack; },
    desc: [
      '',
      '',
      'A crumbling tower on the edge of town, now decorated with skulls, purple banners, and a sign reading "TEMPORARY DEMONIC HEADQUARTERS. KEEP OUT. (THIS MEANS YOU.)"',
    ],
    activities: [],
  });

  /* ------------------------------------------------------------------ main plot: "The Starfall Heist"
   * Day  1  prologue            the Narrator says hello (and, on NG+, slips)
   * Day  3  plot_prophecy        old Ebbe's doom, the Starfall Lens, a very sleepy cat
   * Day  5  festival_notice      the Lens goes on display
   * Day  7  plot_imp_spy         Pindle the imp, caught measuring the Temple dome
   * Day 10  demon_attack         the imp raid on the fountain (a distraction)
   * Day 11  plot_lens_stolen     the Lens is gone; forged orders frame the Dread Queen
   * Day 13  plot_investigation   library / docks / sewers: a jar, a duke, a motive
   * Day 15  goddess_dream        Amorette: "someone has stolen my Lens"
   * Day 18  plot_ultimatum       Lord Baalgrim's face in the sky, and a bribe
   * Day 20  masquerade           a duke in a very tall wig
   * Day 22  plot_council         the Council of Hearts: everyone you've met pledges help
   * Day 25  omen                 the Herald Star is coming; last-minute shopping
   * Day 28  plot_heist           the Old Watchtower, the Grand Amphora, the Dark Lord awakens
   * Day 30  festival             ...and, on NG+ with every loose thread, the True Ending
   * NG+ loose threads: plot_thread_welcome (prologue), plot_thread_pindle (day 7),
   * plot_thread_note (day 13), plot_thread_dream (day 15).
   */
  const THREADS = ['plot_thread_welcome', 'plot_thread_pindle', 'plot_thread_note', 'plot_thread_dream'];
  const TRUE_END_COND = [{ ngplus: 1 }].concat(THREADS);

  /* ------------------------------------------------------------------ prologue */
  FL.addScene('prologue', {
    start: {
      text: [
        'Once upon a time — because that is how these things always begin — there was a kingdom called Generic FantasyLandia.',
        'It had elves. It had dragons. It had a tavern with a funny name and a Dark Lord who was supposedly awakening "soon." It had, in short, everything.',
        { if: { ngplus: 1 }, text: 'It also had, though nobody in it could have told you why, a very faint and persistent sense of déjà vu.' },
        'And on a perfectly ordinary spring morning, a hay cart rattled up the road toward the town of Clichéton carrying one perfectly ordinary passenger.',
        { if: { ngplus: 1 },
          text: "@driver End of the line, {title}. Clichéton. Mind the pigeons. They've been organizing. ...Huh. Funny. Feels like I've said that to you before. Must be the hay.",
          else: '@driver End of the line, {title}. Clichéton. Mind the pigeons. They\'ve been organizing.' },
      ],
      next: 'arrive',
    },
    arrive: {
      text: [
        'You hop down onto the cobbles with your pack and everything you own. The town square spreads out before you: a fountain, a notice board, a bard, a dozen shopfronts. It looks like the cover of a hundred storybooks.',
        { if: { seenEnding: 'true_end' },
          text: [
            '@narrator Ah! There you are. Welcome back, {name}.',
            "@narrator And I do mean *back.* No slips, no pretending. You came back on purpose, and I'm not turning any pages without you. It's a rerun now, darling, and reruns are allowed. I'll do all the voices.",
          ],
          else: {
            if: { ngplus: 1 },
            text: [
              '@narrator Ah! There you are. Welcome *back*, {name} —',
              '@narrator — I mean, welcome! Welcome. Just welcome. A completely regular amount of welcome. First-time welcome.',
            ],
            else: '@narrator Ah! There you are. Welcome, {name}.',
          } },
        'The voice comes from everywhere and nowhere. Nobody else in the square seems to notice it.',
        '@narrator Don\'t be alarmed. I\'m the Narrator. Every story has one. Mine just happens to be... let\'s say, *invested*.',
      ],
      choices: [
        { text: '"Who said that?!"', go: 'who' },
        { text: '"A talking narrator. Sure. Why not."', go: 'calm' },
        { text: '"I\'m here for glory and adventure, not voices in my head."', go: 'glory' },
        { text: '"Welcome... *back?*"', go: 'back', if: [{ ngplus: 1 }, '!plot_thread_welcome'], flag: 'plot_thread_welcome' },
      ],
    },
    back: {
      text: [
        '@narrator Back! Yes! As in... back*pack.* Welcome, backpack. What a lovely backpack. Sturdy straps. Very protagonist.',
        'There is a pause, of the kind that happens when someone is trying to remember whether they locked a door.',
        '@narrator We\'ve never met. I would remember. I remember *everything.* That\'s sort of the — anyway! Moving on! Lots to explain!',
      ],
      next: 'explain',
    },
    who: {
      text: [
        '@narrator Me! Up here. Well — not *up* here, metaphorically up here. Narratively speaking. Keep up, darling.',
      ],
      next: 'explain',
    },
    calm: {
      text: [
        '@narrator Oh, I like you already. Genre-savvy. That will help.',
      ],
      next: 'explain',
    },
    glory: {
      text: [
        '@narrator Glory! Adventure! Yes, yes, there\'s some of that too. But let me tell you what this story is *really* about.',
      ],
      next: 'explain',
    },
    explain: {
      text: [
        '@narrator In thirty days, Clichéton holds the Starfall Festival. Legend says that when the stars fall, those who watch them together are bound for life. Very romantic. Very traditional.',
        '@narrator And it just so happens that this town is positively *overflowing* with remarkable women. A werewolf. A vampire countess. An elf older than most mountains. A demon queen, eventually. A dragon. Oh, you\'ll see.',
        '@narrator Every one of them is waiting for someone to see past the trope to the heart underneath. Maybe that someone is you.',
        "@narrator As for the Dark Lord, don't worry about the Dark Lord. He's been awakening \"soon\" for about four hundred years. It's mostly a thing people put on pamphlets.",
        { if: { ngplus: 1 }, text: "@narrator ...You know all this already, don't you. You've got a knowing sort of face. I'll do the tutorial anyway. There are rules." },
        'You become aware, in the vague way one becomes aware of things in stories, of how the days will work here.',
        '*Each day has a Morning, Afternoon and Evening. Talking with someone, a romance scene, working or training each take up one part of the day. Moving around town and giving gifts (once per person per day) are free.*',
        '*Build affection to unlock romance scenes. Some hearts also want you to be strong (Might), clever (Wits) or charming (Charm). See every scene for a heroine before the festival to win her ending.*',
      ],
      choices: [
        { text: '"Thirty days to find true love? No pressure."', go: 'close' },
        { text: '"How many of them can I romance at once?"', go: 'harem' },
      ],
    },
    harem: {
      text: [
        '@narrator Ambitious! I won\'t tell you that\'s *impossible*. I will tell you that it is *complicated*, and that at least one of them owns a very large knife.',
        { if: { seenEnding: 'harem' }, text: "@narrator Also, if it comes to it, start the cooking rota early. Trust me. It's a *very* big wall." },
      ],
      next: 'close',
    },
    close: {
      text: [
        '@narrator Now off you go. Explore. Meet people. Make questionable decisions. I\'ll be watching. Closely. With snacks.',
        { if: { ngplus: 1 }, text: '@narrator (New snacks. Brand-new. Never-before-eaten snacks. Why would you think otherwise.)' },
        'The voice fades, leaving behind the smell of rose petals and the distinct feeling that you have been winked at by the cosmos.',
      ],
      end: true,
      endLabel: 'Begin your story',
    },
  });

  FL.addEvent({ id: 'prologue', day: 1, priority: 50, scene: 'prologue' });

  /* ------------------------------------------------------------------ day 3: the prophet and the cat */
  FL.addScene('plot_prophecy', {
    start: {
      text: [
        'The square is busy this morning, and the busiest thing in it is a very old man standing on an upturned bucket beside the fountain.',
        'He wears a robe that was black about thirty years ago and a sandwich board that reads, on the front, THE DARK LORD AWAKENS SOON, and on the back, SOONER THAN YOU THINK, and underneath that, in much smaller letters, ALSO: LOST SPECTACLES, REWARD.',
        '@prophet REPENT! The Dark Lord awakens SOON! The stars shall be stolen from the sky! The festival shall end in DARKNESS! And possibly a light drizzle!',
        'Nobody looks up. A fishwife steps around him the way you step around a puddle. A child offers him half a bun, which he accepts with great dignity, mid-doom.',
        'At the foot of the bucket, curled in the only patch of sun in the whole square, a scruffy black cat is asleep with the total commitment of someone who has never had a single obligation in its life.',
        { if: { ngplus: 1 }, text: 'As you pass, the cat opens one yellow eye, flicks an ear at you, and closes it again, with the air of someone who has decided you are a rerun.' },
      ],
      choices: [
        { text: '"When, exactly, is *soon*?"', go: 'soon' },
        { text: 'Drop a coin in his bowl. (5 gold)', req: { gold: 5 }, gold: -5, flag: 'plot_pamphlet', go: 'coin' },
        { text: 'Ignore the doom. Crouch down and say hello to the cat.', go: 'cat' },
      ],
    },
    soon: {
      text: [
        '@prophet SOON! Imminently! Any day now! The prophecy is very clear!',
        '@you How long have you been saying that?',
        '@prophet Forty-one years this spring.',
        '@prophet My father said it for fifty before me, and his mother for sixty before him. It\'s a family business. The Dark Lord is very ancient, you see, and very powerful, and — according to the original text — very, very sleepy.',
        'He lowers his voice and leans down off the bucket.',
        '@prophet But this year is different, stranger. The stars are restless. The Temple is bringing the Starfall Lens out of its vault for the festival. And last night I dreamed of a jar. A great big *jar.* Mark my words.',
        'You mark his words. They are mostly about jars.',
      ],
      next: 'cat',
    },
    coin: {
      text: [
        'The coin clinks into his bowl. He looks at it, and then at you, as if nobody has done this since the reign of the previous king.',
        '@prophet A believer! At last!',
        'He presses a pamphlet into your hand. It is titled *THE DARK LORD AND YOU: A Practical Guide to the End of Days*, and there is a recipe for apocalypse soup on the back.',
        '@prophet Read it. Memorize it. The part about the stars is on page three. The part about the jar is on page four. Page five is a coupon.',
      ],
      next: 'cat',
    },
    cat: {
      text: [
        'You crouch beside the bucket. The cat does not wake up. It does, however, stretch one paw out across the toe of your boot, claiming it, and go on sleeping.',
        '@prophet Careful. That beast has been asleep on that very spot since before I was born.',
        '@you That can\'t be the same cat.',
        '@prophet Nobody\'s ever proved it isn\'t.',
      ],
      choices: [
        { text: 'Offer it your fish. (Fresh Fish)', req: { item: 'fish' }, take: { fish: 1 }, flag: 'plot_cat_fed', go: 'fed' },
        { text: 'Scratch behind its ears.', flag: 'plot_cat_petted', go: 'pet' },
        { text: 'Leave it be. You don\'t wake a sleeping cat. Everyone knows that.', go: 'leave' },
      ],
    },
    fed: {
      text: [
        'The cat wakes up instantly, which is the single most alarming thing you\'ve seen since arriving in Clichéton.',
        'It eats the entire fish, head first, in four bites. Then it looks up at you with enormous yellow eyes and purrs: a deep, rolling purr like a rockslide a long way off.',
        'For a moment, the shadow it casts across the cobbles seems much, *much* too large. You could swear it has horns.',
        'Then it\'s just a cat again, asleep on your boot. It takes you twenty minutes to get your boot back.',
        '@narrator Oh, you\'ve made a friend. Remember that. Cats remember *everything.*',
      ],
      end: true,
    },
    pet: {
      text: [
        'You scratch behind its ears. Without opening its eyes, the cat begins to purr — a low, resonant, oddly *structural* purr that makes the water in the fountain shiver in little rings.',
        '@prophet Huh. It never lets *me* do that.',
        'The cat rolls over, presents its stomach, and then bites you, gently, the moment you accept the invitation. Some traditions are older than prophecy.',
      ],
      end: true,
    },
    leave: {
      text: [
        'Wise. You step carefully around the cat and leave the prophet to his doom.',
        'As you walk away, you could swear that something behind you says, in a voice like a cellar door swinging open, *mrrp* — approvingly.',
        'When you look back, there\'s only the cat, the prophet and the sunbeam.',
      ],
      end: true,
    },
  });
  FL.addEvent({ id: 'plot_prophecy', day: 3, slot: 0, priority: 4, scene: 'plot_prophecy' });

  /* ------------------------------------------------------------------ day 5: the festival notice */
  FL.addScene('festival_notice', {
    start: {
      text: [
        'A town crier in an enormous feathered hat stands on the edge of the fountain, ringing a bell with real enthusiasm.',
        '@crier Hear ye, hear ye! In twenty-five days — the STARFALL FESTIVAL! Food! Music! Fireworks! A night of stars and romance! Those who watch the stars fall together shall be bound for all eternity!',
        '@crier Also there\'s a pie contest.',
        '@crier And BY ORDER OF THE TEMPLE: the holy Starfall Lens, through which the Goddess herself guides the falling stars down upon our town, shall be on display in the Temple dome from tonight until the festival! Look! Do not touch! It is extremely old and extremely fragile and the priests are extremely nervous!',
        '@crier Furthermore, the Mayor\'s office wishes to state that the Dark Lord is NOT awakening, and asks citizens to please stop buying apocalypse soup.',
        { if: 'plot_pamphlet', text: 'You think guiltily of the soup recipe on the back of your pamphlet.' },
        { if: { met: 'kit' }, text: 'At the back of the crowd, Kit is gazing at the word *Lens* on the crier\'s scroll with the shining eyes of a professional. When she notices you noticing, she whistles innocently and falls off a barrel.' },
        { if: { ngplus: 1 }, text: 'The crier catches your eye, and for no reason he could explain, gives you a little nod, as if to say: *you know the rest.*' },
        'Around the square, a lot of people suddenly look at a lot of other people. You feel the clock ticking.',
      ],
      choices: [
        { text: 'Go and see the Starfall Lens before the crowds do.', flag: 'plot_saw_lens', go: 'lens' },
        { text: 'Ask the crier about the pie contest.', go: 'pie' },
        { text: 'Head off. Twenty-five days is not very long.' },
      ],
    },
    lens: {
      text: [
        'The Temple is cool and quiet. High above the pews, in a ring of silver clamps at the very top of the dome, hangs the Starfall Lens: a disc of pale crystal as wide as a cartwheel, so clear it\'s mostly visible by the rainbows it throws across the floor.',
        'An elderly priest with a magnificent beard is standing beneath it with a feather duster on a very long pole, looking as though he would like to lie down.',
        '@warden Four hundred years it\'s hung there. Every Starfall, the Goddess tips the stars out of the sky, and the Lens gathers them up and lays them down over the festival hill, gentle as snow. That\'s why the binding works here and nowhere else.',
        '@warden Isn\'t it beautiful? Please don\'t breathe on it.',
        'You don\'t breathe on it. You do notice that the only thing keeping a four-hundred-year-old miracle in place is four clamps and a priest with a duster. You hope nobody else has noticed.',
      ],
      end: true,
    },
    pie: {
      text: [
        '@crier The pie contest! Judged by the Mayor! Open to all! Entries close at noon on festival day!',
        '@you I heard it always ends in a brawl.',
        '@crier It is a *proud tradition* of this town that it always ends in a brawl. Last year the blueberry man won. He always wins. Some say it\'s rigged. Those people get pie in the face.',
        'He hands you an entry form. It has a pie-shaped stain on it already.',
      ],
      end: true,
    },
  });
  FL.addEvent({ id: 'festival_notice', day: 5, slot: 0, scene: 'festival_notice' });

  /* ------------------------------------------------------------------ day 7: the imp spy */
  const PINDLE_CHOICES = [
    { text: 'Grab him before he bolts. [Might check 3]', check: { stat: 'might', dc: 3 }, pass: 'grab_win', fail: 'grab_fail' },
    { text: '"Relax. I\'m from Underrealm Health and Safety." [Wits check 3]', check: { stat: 'wits', dc: 3 }, pass: 'trick_win', fail: 'trick_fail' },
    { text: 'Offer him one of your honey cakes.', req: { item: 'cakes' }, take: { cakes: 1 }, flag: 'plot_pindle_friend', go: 'cakes' },
    { text: 'Let him go. He looks like he\'s having a hard enough week.', go: 'letgo' },
  ];
  FL.addScene('plot_imp_spy', {
    start: {
      text: [
        'You are walking home past the Temple in the dusk when a pebble bounces off your head.',
        'Then a second pebble. Then a measuring tape, unspooling down the side of the dome like a long yellow tongue, followed by a small red imp clinging to the other end of it and saying a word the Temple would not approve of.',
        'He lands in the hedge at your feet. He is about the size of a large cat, with stubby horns, a notebook hanging round his neck on a string, and the haunted expression of a middle manager.',
        '@pindle Don\'t. Look. At me.',
        '@you You were measuring the Temple dome.',
        '@pindle I was *admiring* the Temple dome. With a tape. Closely. Like a tourist. Ooh, look at the dome, I wonder how many hands across it is, from the inside, at the top, where the big crystal is, *for no reason.*',
        { if: { ngplus: 1 }, text: [
          'He squints up at you, and his tail goes stiff as a poker.',
          '@pindle Wait. You. I *know* you. You\'re the one who — at the festival — on the tower, with the —',
          'He stops. He frowns down at his own claws as if they belong to somebody else.',
          '@pindle ...That hasn\'t happened yet. Why do I remember that? Why does my nose remember being *stepped on?*',
        ] },
      ],
      choices: PINDLE_CHOICES.concat([
        { text: '"What else do you remember?"', if: { ngplus: 1 }, flag: 'plot_thread_pindle', go: 'remember' },
      ]),
    },
    remember: {
      text: [
        'The imp sits down heavily in the hedge.',
        '@pindle It\'s like... a dream I keep having. The stars fall, and everything goes white, like a blank page. And then I\'m back at my desk in the Underrealm with a fresh tail and a memo telling me to measure this exact dome. Every time.',
        '@pindle Am I losing it? I\'m losing it, aren\'t I. Four hundred years in the Department of Skulking and I\'m finally losing it.',
        '@you Maybe you\'re not losing it.',
        '@pindle Don\'t *say* that. That\'s so much worse.',
        'Above you, very faintly, someone clears their throat in a way that sounds a great deal like the Narrator trying to change the subject.',
        '@narrator *Meanwhile, the moon came out from behind a cloud!* Look at the moon, everyone. Lovely moon. Very round.',
        'The imp looks at you. You look at the imp. Neither of you looks at the moon.',
      ],
      choices: PINDLE_CHOICES,
    },
    grab_win: {
      text: [
        'You snatch him by the tail before his feet touch the ground. He dangles, upside down, notebook swinging, and gives up immediately.',
        '@pindle Orders! It\'s orders! From up top! Not *the* top — the Queen doesn\'t know about any of this — the *other* top. The pointy top. Four points. I\'ve said too much. I\'ve said exactly the right amount, actually, which is nothing.',
        'You carry him to the night watch at the end of the street. The watchman accepts a small struggling imp with the delighted air of someone who\'s been handed a very unusual cake.',
        '@pindle I\'ll be out by Tuesday!',
        'He is out by Monday. But in the scuffle, his notebook stays in your hand.',
      ],
      flag: 'plot_pindle_caught',
      next: 'notebook',
    },
    grab_fail: {
      text: [
        'You lunge. He bites your thumb with tremendous precision and is over the Temple wall before you\'ve finished yelping.',
        'The string of his notebook, however, has caught on the hedge. It stays behind, swinging gently, like a consolation prize.',
      ],
      next: 'notebook',
    },
    trick_win: {
      text: [
        '@you Relax. I\'m from Underrealm Health and Safety.',
        'The imp\'s whole body sags with relief.',
        '@pindle Oh, thank the Pit. *Finally.* Do you know what they\'ve got us doing? Hauling a jar the size of a cottage up and down the tunnels with NO lifting training. And now this — measuring a holy dome for a "lens extraction." On a ladder! Without a spotter!',
        '@you That sounds very unsafe. I\'ll need your notes for my report.',
        '@pindle Take them! Take them, and tell the four-horned one that some of us have *backs.*',
        'He hands you his notebook with both hands, like a man surrendering a sword, and scurries off into the dark, muttering about union representation.',
      ],
      flag: 'plot_heard_jar',
      next: 'notebook',
    },
    trick_fail: {
      text: [
        '@you Relax. I\'m from Underrealm Health and Safety.',
        '@pindle Health and *safety?* We don\'t HAVE health and safety. That\'s the entire Underrealm brand. Nice try, mortal!',
        'He vanishes into the hedge. Unfortunately for him, he vanishes so fast that his notebook string snaps and the notebook stays behind.',
      ],
      next: 'notebook',
    },
    cakes: {
      text: [
        'You hold out a honey cake. The imp sniffs it from a safe distance, tail twitching, as though it might be a trap. Then he takes it, very carefully, with both hands, and eats it in tiny, reverent bites.',
        'His eyes are wet by the end.',
        '@pindle Nobody gives imps *cake.* They give us orders. And sometimes a boot.',
        '@pindle I\'m Pindle. Junior Underling, Fourth Class, Department of Skulking. Don\'t tell anyone I told you my name. Names are a whole thing down there.',
        '@pindle The big one with four horns says this is all for "the greatest love story ever told." Which is weird, because I\'ve worked for him for three hundred years and he\'s never been in one.',
        'He pauses, cake crumbs on his chin.',
        '@pindle If you ever need someone who knows the tunnels... I\'m around. Under P. For Pindle. Or for Pathetic, according to my last performance review.',
        'He shakes your finger solemnly and leaves, forgetting his notebook on the hedge.',
      ],
      next: 'notebook',
    },
    letgo: {
      text: [
        'You step back. The imp looks at you with deep suspicion, then at the empty street, then at you again.',
        '@pindle Is this a trick?',
        '@you No.',
        '@pindle Everything\'s a trick.',
        'He scampers off, but stops at the corner and looks back.',
        '@pindle If anyone asks, you didn\'t see me. And if anyone *else* asks — someone big, with four horns and a voice like a gong — you *definitely* didn\'t see me.',
        'He\'s gone. His notebook is still hanging on the hedge.',
      ],
      next: 'notebook',
    },
    notebook: {
      text: [
        'The imp\'s notebook is full of tiny, anxious handwriting.',
        'Most of it is measurements of the Temple dome. Then a list: *Rope (lots). Ladder (tall). Distraction (LOUD — ask the fountain lads). Day 10, morning: GO.*',
        'And at the bottom, underlined three times: *DO NOT TELL THE QUEEN.*',
        'Day ten. Three days from now.',
      ],
      flag: 'plot_notebook',
      choices: [
        { text: 'Take it to the Town Watch.', flag: 'plot_warned_watch', go: 'watch' },
        { text: 'Keep it. Nobody would believe you anyway.', go: 'keep' },
      ],
    },
    watch: {
      text: [
        'The desk sergeant at the Watch house reads the notebook with great interest, nods seriously, and files it in a drawer labelled PRANKS, INFERNAL.',
        'The drawer is very full.',
        '@you You\'re not going to do anything, are you.',
        'The sergeant gives you a lollipop.',
      ],
      end: true,
    },
    keep: {
      text: [
        'You tuck the notebook into your pack. Up on the dome, the Starfall Lens catches the last of the light and throws one small, trembling rainbow onto the street at your feet.',
        '@narrator *Day 10, morning,* the protagonist thought. *Well. That\'s ominous.*',
        '@narrator ...Sorry. Was that out loud? I do that.',
      ],
      end: true,
    },
  });
  FL.addEvent({ id: 'plot_imp_spy', day: 7, slot: 2, priority: 4, scene: 'plot_imp_spy' });

  /* ------------------------------------------------------------------ day 10: the imp attack */
  FL.addScene('demon_attack', {
    start: {
      text: [
        'A scream splits the morning. The sky over the town square darkens to purple, and a tear opens in the air with a sound like ripping silk.',
        'Out tumble a dozen imps: knee-high, red-skinned, with tiny horns, tiny pitchforks and enormous egos.',
        { if: 'plot_notebook', text: '*Day 10, morning: GO.* You remember the notebook, and your stomach drops. The imp wasn\'t joking.' },
        '@imp BY ORDER OF HER DREAD MAJESTY, WE CLAIM THIS FOUNTAIN!',
        '@imp And the bakery! Don\'t forget the bakery!',
        '@imp It says "loot the bakery" right here in green! Very clear!',
        'People scatter. The guards are nowhere to be seen. It\'s up to you.',
      ],
      choices: [
        { text: 'Draw steel and fight! [Might check 3]', check: { stat: 'might', dc: 3 }, pass: 'fight_win', fail: 'lose' },
        { text: 'Trick them: "Her Majesty said the OTHER fountain!" [Wits check 3]', check: { stat: 'wits', dc: 3 }, pass: 'trick_win', fail: 'lose' },
        { text: 'Compliment their horns until they get flustered. [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'charm_win', fail: 'lose' },
      ],
    },
    fight_win: {
      text: [
        'You charge in, and the imps discover that tiny pitchforks are no match for actual muscle. Three go flying into the fountain. The rest flee squealing back into the rift.',
        'The townsfolk cheer. The baker presses a purse of gold into your hands.',
      ],
      gold: 50,
      next: 'watcher',
    },
    trick_win: {
      text: [
        '@you You fools! Her Majesty said the fountain in the NEXT town! The one with the better statue!',
        '@imp ...Did she?',
        '@imp She does hate this statue.',
        'After a brief, heated argument among themselves, the imps pile back into the rift. The mayor awards you a purse of gold for "creative civic defense."',
      ],
      gold: 50,
      next: 'watcher',
    },
    charm_win: {
      text: [
        '@you Wow. Are those horns natural? They\'re so... pointy. So well-maintained.',
        '@imp W-what? I mean — yes. I oil them.',
        '@imp Nobody ever notices the horns...',
        'Within minutes the imps are blushing crimson (well, more crimson) and shuffling back into the rift, waving shyly. The baker gives you a purse of gold and a strange look.',
      ],
      gold: 50,
      next: 'watcher',
    },
    lose: {
      text: [
        'It does not go well. Within moments you are flat on your back in the fountain with three imps sitting on your chest, chanting a victory song.',
        'Then the air goes cold. The imps freeze.',
        'On the rooftop above stands a tall figure in a hooded cloak, two great curling horns jutting through the hood. Her eyes glow like coals.',
        '@stranger Enough. Go home. All of you. *Now.* We will discuss "subtle reconnaissance" later.',
        'The imps flee into the rift. The figure looks down at you, soaking wet in the fountain, her head tilted like a cat considering a beetle.',
      ],
      next: 'watcher2',
    },
    watcher: {
      text: [
        'As the rift seals itself, you glance up. On a rooftop above the square stands a tall figure in a hooded cloak, two great curling horns jutting through the hood.',
        'She is watching you. She does not look angry. She looks *interested*.',
      ],
      next: 'watcher2',
    },
    watcher2: {
      text: [
        '@stranger Hm. How very... intriguing.',
        'And then she is gone in a swirl of violet smoke.',
        { if: 'plot_pindle_friend', text: 'Just before the rift closes, you glimpse a familiar small imp at the very back of the swarm. He catches your eye, mouths something that might be *sorry*, and points, frantically, across town.' },
        'A heartbeat later, from the far side of Clichéton, the Temple bells begin to ring: not the sweet morning chime, but the wild, clanging peal of alarm.',
        'By the time anybody thinks to run there, whatever has happened is long over.',
        'Later, people say they saw purple lights burning at the Old Watchtower on the edge of town. Lights that only come on at night.',
        '*The Old Watchtower is now accessible in the evening.*',
      ],
      flag: 'demon_attack',
      end: true,
    },
  });
  FL.addEvent({ id: 'demon_attack', day: 10, slot: 0, priority: 5, scene: 'demon_attack' });

  /* ------------------------------------------------------------------ day 11: the Lens is gone */
  FL.addScene('plot_lens_stolen', {
    start: {
      text: [
        'The Temple of the Radiant Heart is full of people who don\'t know what to do with their hands.',
        'At the top of the great dome, where yesterday a disc of enchanted crystal threw rainbows across the pews, there is now a hole. A neat, round, *professional* hole, and a great deal of sky.',
        { if: 'plot_saw_lens', text: 'You saw it only days ago, hanging in its silver clamps like a captured moon. The clamps are still there. They look embarrassed.' },
        'The Starfall Lens is gone.',
        { if: { met: 'celestine' },
          text: [
            'Sister Celestine is standing directly beneath the hole with her hands clasped so tightly that her knuckles have gone white.',
            '@celestine:sad The Goddess\'s own Lens. Stolen out of her own house. While I was *outside*, hitting an imp with a hymnal.',
            '@celestine:angry ...It was a very satisfying hymnal, though. I may need to confess that.',
          ],
          else: [
            'The elderly priest with the magnificent beard is standing beneath the hole, still holding his feather duster, as though there might yet be something left to dust.',
            '@warden Four hundred years. Four hundred years it hung there. And I was outside, chasing an imp with a broom.',
          ] },
        '@captain Right! Nobody touch anything! This is a crime scene! Which makes it *my* scene!',
        'Captain Brassbuckle of the Town Watch strides up the aisle: a broad woman in a dented breastplate, with a helmet crest shaped like a magnificent moustache and the expression of someone who has only just been told about all this.',
        { if: 'plot_warned_watch', text: [
          'She spots you, and winces.',
          '@captain You. The one with the imp notebook. Our desk sergeant filed it under *Pranks, Infernal.* I\'ve had words with him. Loud ones. He\'s been demoted to lollipops.',
        ] },
        '@captain So. While a dozen imps had my whole Watch chasing them round the fountain, somebody climbed up there and lifted the holiest object in Clichéton. It was a *distraction*, people! The oldest trick in the book! I *have* the book! It\'s on my desk! I\'ve never read it!',
      ],
      choices: [
        { text: 'Examine the scorch marks on the clamps. [Wits check 3]', check: { stat: 'wits', dc: 3 }, pass: 'scorch_win', fail: 'scorch_fail' },
        { text: 'Search the floor beneath the hole.', go: 'floor' },
        { text: 'Is that the cat from the square, asleep on the altar?', go: 'cat' },
      ],
    },
    scorch_win: {
      text: [
        'The silver clamps are scorched in four neat spots where something burned through them. You rub one with your thumb. The soot comes away *green.*',
        'Imp fire burns red; you\'ve seen it spitting off their pitchforks. The Dread Queen\'s flames, everyone says, are black and violet. This is something else: a sickly, showy, peacock green. The green of a jealous frog with expensive taste.',
        '@captain Green. Huh. Write that down, somebody.',
        'Nobody writes it down. You write it down.',
      ],
      flag: 'plot_clue_green',
      next: 'letter',
    },
    scorch_fail: {
      text: [
        'You examine the scorch marks with great seriousness. They are definitely scorch marks. You announce this, firmly.',
        'Captain Brassbuckle nods, impressed, and writes down *scorch marks.* It\'s a start.',
        'Then you notice a scrap of parchment wedged under the altar candlestick, which is a better start.',
      ],
      next: 'letter',
    },
    floor: {
      text: [
        'Crystal dust. Rope fibres. A great many very small footprints, with claws. And a single print that is not small at all: a huge, cloven hoofprint, polished at the edges, as if someone had oiled his hooves before going burgling.',
        'Next to it, caught under the altar candlestick, a scrap of parchment.',
      ],
      next: 'letter',
    },
    cat: {
      text: [
        'It is. It must be. The same scruffy black cat from the square is curled up on the velvet altar cushion, in a slant of sunlight from the brand-new hole in the roof, sound asleep.',
        '@warden It was there when we came in. It\'s been there ever since. It slept through the bells. Brother Osric tried to move it. Brother Osric is lying down now.',
        { if: { any: ['plot_cat_fed', 'plot_cat_petted'] },
          text: 'As you approach, the cat opens one eye, recognizes you, and — slowly, deliberately — turns its head to stare at a scrap of parchment wedged under the altar candlestick. Then it goes back to sleep. You get the very distinct feeling you have been *helped.*',
          else: 'The cat does not acknowledge you in any way. But its tail is curled, very precisely, around a scrap of parchment wedged under the altar candlestick.' },
      ],
      next: 'letter',
    },
    letter: {
      text: [
        'The parchment is a page of orders, torn in half. At the top is the seal of the Dread Queen of the Underrealm: a crowned skull with suspiciously long eyelashes.',
        '*BY ORDER OF HER DREAD MAJESTY: proceed to the mortal town and conduct SUBTLE RECONNAISSANCE. Be polite. Do NOT steal any more goats.*',
        'Underneath, in a completely different hand and a completely different ink — a showy, sloping script in bright green — someone has added: *ALSO make an ENORMOUS fuss at the fountain at nine o\'clock sharp. Loot the bakery. Do NOT look at the Temple.*',
        '@captain The Dread Queen! I knew it! Demons! Horns! Capes! It\'s *always* the one with the cape!',
        { if: 'plot_clue_green', text: 'You look at the green ink. You look at the green soot on your thumb. You think: *somebody is very bad at framing people.*' },
      ],
      choices: [
        { text: '"Look at the ink. Someone added to her orders. She\'s being framed."', flag: 'plot_defended_queen', go: 'defend' },
        { text: '"The Dread Queen? Then let\'s go and get her!"', flag: 'plot_blamed_queen', go: 'accuse' },
        { text: '"Let\'s not decide anything yet. Who gains if we blame her?"', go: 'deputy' },
      ],
    },
    defend: {
      text: [
        '@you Look at the ink. The real orders say *be polite.* Somebody else added the fountain and the bakery. In green. Somebody wanted us to look at the Queen.',
        'The Captain squints at the page, then at you, then back at the page, with the face of a woman reluctantly abandoning a very satisfying theory.',
        '@captain ...Fine. *Fine.* But if it turns out to be the one with the cape after all, I\'m saying I told you so. Loudly. At your funeral.',
        { if: { met: 'malzahra' }, text: 'You think of Malzahra in her tower, rehearsing her evil laugh for an audience of one imp. The idea of her writing *be polite* at the top of her villainous orders is the most believable thing you\'ve heard all week.' },
      ],
      next: 'deputy',
    },
    accuse: {
      text: [
        'The crowd roars approval. Somebody produces a pitchfork. Somebody else produces a torch, and then, after some thought, a second torch for the first person.',
        '@captain Steady! *Steady.* Nobody is storming anything until after lunch. There are procedures. Mostly involving lunch.',
        { if: { met: 'malzahra' }, text: 'Some small, honest part of you pictures Malzahra hearing about this — the whole town with pitchforks, and you leading the chant — and her face falling. You feel, faintly, like a heel.' },
      ],
      next: 'deputy',
    },
    deputy: {
      text: [
        '@captain Right. You. You\'ve got a good eye, and better boots than my lot. And the Watch is stretched thinner than a cheap pie crust with the festival coming.',
        'She pins a tin badge to your chest. It says DEPUTY. Underneath, scratched in by some previous owner, it says *(PROBABLY).*',
        '@captain Consider yourself deputized. Find that Lens before Starfall. If the stars come down and there\'s nothing up there to catch them, I don\'t even want to think about where they\'ll land.',
        { if: { met: 'kit' }, text: [
          'On your way out, you pass Kit perched on the Temple railing, swinging her legs.',
          '@kit:happy Before you ask — wasn\'t me! I was stealing the mayor\'s *other* shoe! He\'s got none now! It\'s been a really big week for me!',
          'She looks up at the hole in the dome with deep professional respect.',
          '@kit:smug Clean job, though. Whoever did that\'s got *style.* Not as much as me. But some.',
        ] },
        '@narrator Nineteen days, darling. And something tells me this isn\'t the kind of story where the Lens just turns up in a drawer.',
      ],
      flag: 'plot_deputized',
      end: true,
    },
  });
  FL.addEvent({ id: 'plot_lens_stolen', day: 11, slot: 0, priority: 4, scene: 'plot_lens_stolen' });

  /* ------------------------------------------------------------------ day 13: the investigation */
  FL.addScene('plot_investigation', {
    start: {
      text: [
        'You wake early, with your deputy badge digging into your cheek and three leads scribbled on the back of your hand.',
        '*1. LIBRARY: the prophecy? Stolen stars? A jar?? 2. DOCKS: something BIG came in by ship. 3. SEWERS: the imps came from somewhere.*',
        { if: 'plot_pamphlet', text: 'You also have the prophet\'s pamphlet. Page four is, as promised, about a jar. Page five is, as promised, a coupon. The coupon has expired.' },
        { if: 'plot_heard_jar', text: 'And you remember the imp complaining about hauling a jar the size of a cottage through the tunnels with no lifting training.' },
        'You have time to chase one of them down properly before the day gets away from you.',
      ],
      choices: [
        { text: 'The Grand Library: find the original prophecy.', go: 'lib' },
        { text: 'Saltbreeze Harbor: find the big delivery.', go: 'dock' },
        { text: 'The Sewers: follow the imps home.', go: 'sew' },
      ],
    },
    lib: {
      text: [
        'The Grand Library\'s Prophecy Annex is a narrow, dusty room at the top of a spiral stair, where prophecies go to be misfiled.',
        { if: { met: 'pell' }, text: [
          'Pell is already there, half-hidden behind a lectern, as though she\'s been waiting all morning for somebody to need the Prophecy Annex.',
          '@pell:blush Y-you\'re looking for the Dark Lord prophecy? Third shelf. Behind the cookbooks. Somebody filed it under *Soups.* ...It was me. I was very upset that day.',
        ] },
        { if: { met: 'sylvaine' }, text: [
          'Sylvaine drifts in behind you with three books floating at her shoulder and a look of mild nostalgia.',
          '@sylvaine:smug Ah. The Dark Lord prophecy. I was there when it was written, you know. The seer had been at the elderberry wine. Read it *carefully.*',
        ] },
        'You find it at last: a brittle scroll in a glass case, so old the ink has faded to the color of weak tea.',
      ],
      choices: [
        { text: 'Decipher the original text. [Wits check 3]', check: { stat: 'wits', dc: 3 }, pass: 'lib_win', fail: 'lib_fail' },
      ],
    },
    lib_win: {
      text: [
        'You squint. You tilt the case. Slowly, the faded letters come together:',
        '*When the Lens is lifted and the stars are thieved, / when hearts are bargained and the sky is grieved, / the Dark Lord wakes — though not on cue — / and does what Dark Lords always do.*',
        'Underneath, in a different and much later hand, somebody has added a helpful footnote: *(He knocks things off high places.)*',
        'And in the margin, smudged and perfectly round, there is a single small paw print.',
        '@you ...Huh.',
        'Tucked into the same case is a commentary on the Starfall Lens, in plain modern script: *The Lens gathers the light of the falling stars and sends it wherever it is pointed. What a lens gathers, a mirror returns.*',
        'You read that twice. Then a third time, because the third time is when things become plans.',
      ],
      flags: { plot_lead_library: true, plot_mirror_hint: true },
      next: 'home',
    },
    lib_fail: {
      text: [
        'The faded letters swim in front of your eyes. You get as far as *...the Dark Lord wakes... and does what Dark Lords always...* — and then the rest is hidden under a small, smudged, perfectly round paw print.',
        'Somebody, at some point in the last four hundred years, let a cat walk across the most important prophecy in the kingdom.',
        'Luckily, tucked into the same case is a commentary on the Starfall Lens in plain modern script: *The Lens gathers the light of the falling stars and sends it wherever it is pointed. What a lens gathers, a mirror returns.*',
        'That part, at least, you can read.',
      ],
      flags: { plot_lead_library: true, plot_mirror_hint: true },
      next: 'home',
    },
    dock: {
      text: [
        'The harbormaster\'s ledger is chained to a post on the main pier. Three nights ago, in a hand that was clearly trying not to ask questions: *ONE (1) JAR. VERY LARGE. Paid in gold coins that were warm.*',
        { if: { met: 'scarlett' }, text: [
          'Captain Scarlett is leaning against a bollard, eating an apple off the point of her cutlass.',
          '@scarlett:smug Big crate came in on the *Ill-Gotten Gains*. Smuggler crew. Rude lot. Didn\'t even say ahoy. It\'s in warehouse nine, if you\'re asking — which you are, love. It\'s all over your face.',
        ] },
        { if: { met: 'coralie' }, text: [
          'From the water below the pier, Coralie pops up with a crab on her head.',
          '@coralie:surprised There\'s a *giant jar* in that warehouse! I looked through the drain! It has a man\'s face painted on it! He looks *so* pleased with himself! Is that a land thing? Painting yourself on jars?',
        ] },
        'Warehouse nine is guarded by two enormous dock heavies, who are sitting on crates and looking at you in the way that large men on crates look at people they would like to throw into the sea.',
      ],
      choices: [
        { text: 'Bribe them. (15 gold)', req: { gold: 15 }, gold: -15, go: 'dock_in' },
        { text: 'Shoulder the side door. [Might check 3]', check: { stat: 'might', dc: 3 }, pass: 'dock_in', fail: 'dock_fail' },
        { text: 'Flash your deputy badge.', if: 'plot_deputized', go: 'dock_badge' },
      ],
    },
    dock_badge: {
      text: [
        'You flash the badge. The heavies lean in to read it. One of them reads *(PROBABLY)* aloud, slowly, and they both fold over their crates, wheezing, with tears in their eyes.',
        'While they\'re wiping their eyes, you walk right past them.',
      ],
      next: 'dock_in',
    },
    dock_in: {
      text: [
        'Inside, under a tarpaulin the size of a mainsail, is a jar.',
        'It is the biggest jar you have ever seen: green glass, thick as a castle wall, tall enough to stable a horse in. Painted on its side, in loving detail, is the face of a demon with four polished horns and a small, smug, carefully trimmed beard, smiling at you from every angle.',
        'A shipping label is tied around its neck: *THE GRAND AMPHORA OF UNCONDITIONAL ADORATION. FRAGILE. THIS WAY UP. PROPERTY OF LD. BAALGRIM, DUKE OF THE FOURTH PIT. IF FOUND, DO NOT OPEN. YOU ARE NOT WORTHY.*',
        { if: { stage: 2, who: 'malzahra' }, text: 'Baalgrim. You know that name. Malzahra said it, in her tower, over very bad tea: one of the council who call her "the young queen."' },
        'The lid hangs from a single enormous brass hinge: the kind of fiddly, overengineered fitting that looks magnificent and could be jammed by almost anything small and pointy.',
        'By the time you come back with help, the warehouse is empty except for a fresh tunnel in the floor and a lingering smell of expensive cologne.',
      ],
      flag: 'plot_lead_docks',
      next: 'home',
    },
    dock_fail: {
      text: [
        'You hit the side door with everything you\'ve got. The door is unmoved. You are moved, quite a long way, backwards, into a stack of lobster pots.',
        'The heavies laugh so hard that they don\'t notice you crawl round the back and put your eye to a knothole.',
        'Inside: a jar the size of a cottage, under a tarpaulin. You can just make out the shipping label: *...PROPERTY OF LD. BAALGRIM, DUKE OF THE FOURTH PIT...*',
        { if: { stage: 2, who: 'malzahra' }, text: 'Baalgrim. You know that name. Malzahra said it, in her tower, over very bad tea.' },
        'You smell of lobster for the rest of the day. It feels like progress.',
      ],
      flag: 'plot_lead_docks',
      next: 'home',
    },
    sew: {
      text: [
        'The sewers are just as historic as ever, but there\'s something new down here: a freshly dug tunnel under the east drain, with tidy wooden props and a hand-painted sign in Infernal that seems to mean *STAFF ONLY.*',
        { if: { met: 'gloria' },
          text: [
            'A cheerful green blob detaches itself from the wall and waves.',
            '@gloria:happy Hiii! Are you here about the tunnel? Somebody dug a whole new one right under my east drain! They didn\'t even *ask!* And they left so much litter! Look! *Bloop!*',
            'She reaches inside herself and produces, with some effort, a soggy bundle of paper.',
            '@gloria:sad I tried to read it but it made me feel sad for the person who wrote it.',
          ],
          else: 'A little way along it you find an imp camp abandoned in a hurry: a burnt-out fire, three tiny hammocks, and a wastepaper basket overflowing with crumpled parchment.' },
        'It\'s a stack of discarded speeches, all in the same showy, sloping hand, in bright green ink.',
        '*Draft 3: "People of FantasyLandia! KNEEL!" (Too direct?)*',
        '*Draft 9: "People of FantasyLandia, I have decided that you will love me." (Warmer!)*',
        '*Draft 14: "Love me, peasants!" (No.)*',
        '*Draft 22: "For two thousand years I have served the Pit, and not ONE of you has sent me a birthday card. Well. When the stars are in my jar, you will ALL send me birthday cards. Every day. FOREVER."* It\'s underlined twice. There\'s a little heart drawn next to it.',
        'It\'s signed with a sweeping flourish: *Ld. Baalgrim.*',
        '@you ...Oh no. He just wants to be loved.',
      ],
      flag: 'plot_lead_sewers',
      choices: [
        { text: 'Keep Draft 22. It might come in handy.', flag: 'plot_kept_draft', go: 'home' },
        { text: 'Put them back. It feels like reading someone\'s diary.', go: 'home' },
      ],
    },
    home: {
      text: [
        'By evening you have more questions than answers, but the answers you have fit together like the pieces of a very stupid puzzle.',
        'Somebody with green fire forged the Dread Queen\'s orders to cover a theft. Somebody stole the Lens that guides the falling stars. Somebody has a jar.',
        { if: 'plot_lead_library', text: 'And the Lens sends starlight wherever it\'s pointed. Hold it on festival night, and you could point every falling star in the sky into whatever you liked.' },
        { if: 'plot_lead_docks', text: 'And the jar is the size of a cottage, and has his own face painted on it.' },
        { if: 'plot_lead_sewers', text: 'And he has written at least twenty-two drafts of a speech about how much everyone is going to love him.' },
        'You go to bed with the uneasy feeling that the villain of this story is a theater kid.',
      ],
      choices: [
        { text: 'Sleep.' },
        { text: 'There\'s a folded note under your door. Read it.', if: { ngplus: 1 }, flag: 'plot_thread_note', go: 'note' },
      ],
    },
    note: {
      text: [
        'The note is written in pink ink, in a looping hand that is trying very hard not to look like anybody\'s in particular. Across the top, underlined: *DON\'T READ THIS.*',
        'You read it.',
        '*Day 13. They investigate. They always investigate. Last time it was the sewers; the time before that, the docks. (They\'ve done the library eleven times. They love the library.) Not that I\'m keeping count.*',
        '*I\'m keeping count. This is the forty-second time.*',
        '*I should stop. I know I should stop. It\'s only that it\'s so quiet, afterwards.*',
        'The next line has been scribbled out so hard that the nib went through the paper. Underneath it, much smaller: *Sleep well, {name}.*',
        'As you watch, the ink begins to fade, like a blush going out of a cheek. By the time you\'ve lit a candle, the page is blank.',
      ],
      end: true,
    },
  });
  FL.addEvent({ id: 'plot_investigation', day: 13, slot: 0, priority: 4, scene: 'plot_investigation' });

  /* ------------------------------------------------------------------ day 15: the goddess's dream */
  FL.addScene('goddess_dream', {
    start: {
      text: [
        'That night you dream of a field of roses under a sky full of stars. A woman sits on a swing hanging from nothing, kicking her heels. She has pink hair, golden eyes, and a smile like she knows the ending of every story ever told.',
        '@narrator Hello again, {name}.',
        '@you You\'re... the Narrator?',
        '@narrator Narrator. Goddess of Love. Patron of Romantic Clichés, Hopeless Pining and Meet-Cutes. Amorette, to my friends. I have a lot of titles. Gods collect them like cats collect grudges.',
        '@narrator I\'ve been watching you, and frankly, you\'re the most entertaining thing to happen in this kingdom in a century. So I thought I might... come down and say hello properly.',
        '@narrator Also — and I only mention it because it\'s *mine* — somebody has stolen my Lens.',
        'For the first time, the smile slips a little.',
        '@narrator Every Starfall I tip the stars out of the sky, and the Lens catches them and lays them down over that silly little hill, so that everyone watching together gets... well. *Bound.* That\'s the bit everyone likes.',
        '@narrator Without it, the stars go wherever the Lens is pointed. And whoever has it is pointing it at a *jar.* A four-hundred-year-old miracle, {name}, and somebody wants to keep it on a *shelf.*',
        '@narrator And before you ask: no, I can\'t just reach down and smite him. Gods have rules. Very frustrating rules. I\'ve drafted a complaint.',
        { if: 'plot_deputized', text: '@narrator But *you* have a badge! A tin one, with *(probably)* scratched on it. I have never been so reassured in my immortal life.' },
      ],
      flag: 'goddess_awake',
      choices: [
        { text: '"I\'ll get it back. I promise."', flag: 'plot_promised_goddess', go: 'promise' },
        { text: '"Why me?"', go: 'whyme' },
        { text: '"We\'ve done this before, haven\'t we?"', if: { ngplus: 1 }, flag: 'plot_thread_dream', go: 'before' },
      ],
    },
    promise: {
      text: [
        'She stops swinging and looks at you.',
        '@narrator ...You say that like it\'s easy. *I* say that to protagonists, usually, in the second act. It\'s nice to hear it the other way round for once.',
      ],
      next: 'wake',
    },
    whyme: {
      text: [
        '@narrator Because you\'re the protagonist, darling. That\'s the job. Everybody else in this town is the hero of their own story. You\'re the one who walks into all of them.',
        '@narrator And you keep *noticing* things. It\'s very inconvenient. I love it.',
      ],
      next: 'wake',
    },
    before: {
      text: [
        'The swing stops. It doesn\'t slow down: it *stops*, mid-arc, hanging at an angle that swings are not supposed to hang at.',
        'Above you, every star in the dream sky flickers at once, like a page being turned too fast.',
        '@narrator Déjà vu! Very common in dreams. Extremely normal. Everyone gets it. I get it constantly, and I\'m *omniscient*, so imagine how often you must —',
        'She stops. She looks at you. For one second she doesn\'t look like a goddess at all. She looks like someone who\'s been caught re-reading the last page of a book, over and over, hoping it will end differently.',
        '@narrator ...Ask me again. At the festival. If you still want to. If you\'re still looking.',
        'The swing starts moving again, as though nothing ever happened.',
      ],
      next: 'wake',
    },
    wake: {
      text: [
        '@narrator Visit my temple at night. Bring something nice. Or don\'t. I\'ll know either way. I\'m omniscient. Mostly.',
        'You wake with a rose petal on your pillow.',
        { if: 'plot_thread_dream', text: 'It\'s pressed perfectly flat and a little faded, like something that has been kept between the pages of a book and taken out to be looked at more often than was good for it.' },
        '*Amorette can now be found at the Temple in the evening.*',
      ],
      end: true,
    },
  });
  FL.addEvent({ id: 'goddess_dream', day: 15, slot: 0, scene: 'goddess_dream' });

  /* ------------------------------------------------------------------ day 18: Baalgrim's ultimatum */
  FL.addScene('plot_ultimatum', {
    start: {
      text: [
        'Evening in the square. The lamplighter is halfway round the fountain when every lantern he has already lit turns green.',
        'The fountain begins to boil. The pigeons leave as a single disgusted unit. And the sky above Clichéton tears open like a theater curtain, and a face appears in it.',
        'It is enormous. It has four horns, each polished to a mirror shine, and a small, carefully groomed beard, and the expression of a man who has been practising this exact moment in front of a looking-glass for several centuries.',
        '@baalgrim PEOPLE OF CLICHÉTON! BEHOLD — LORD BAALGRIM! DUKE OF THE FOURTH PIT! HIGH TREASURER OF THE UNDERREALM! THREE-TIME RUNNER-UP, MOST IMPOSING HORNS!',
        '@baalgrim On the night of your precious Starfall, every falling star in your sky will be MINE! Caught! Bottled! And poured over your kingdom like a SAUCE! And then, little mortals... you will all... LOVE ME!',
        'There is a pause.',
        '@baalgrim That was the threat. You may scream now.',
        'Somebody near the fountain screams, mostly to be polite.',
        '@baalgrim *Thank* you.',
        { if: { seenEnding: 'malzahra' }, text: '@baalgrim And I shall NEVER — for some reason I feel I must specify this — NEVER be put in charge of anything to do with GOATS.' },
        'The face vanishes. The lanterns go back to gold. And then, with a smell of struck matches and very expensive cologne, the real Lord Baalgrim steps out of a pillar of green smoke right in front of you.',
        'He is eight feet tall. The jeweled breastplate is real. So is the cologne. Up close, the beard is very slightly too symmetrical, as though he does it with a ruler.',
        '@baalgrim So. *You.* The meddler. The *deputy.* My imps have complained about you in no fewer than nine separate reports.',
        { if: 'plot_clue_green', text: 'He gestures as he talks, and little sparks of green fire dance off his claws: exactly the sickly, showy green of the soot on the Temple clamps. He does not seem to realize this is evidence.' },
        { if: { met: 'malzahra' }, text: '@baalgrim I hear you spend your evenings with the young queen. Charming. Do enjoy her company while she still has a tower.' },
        '@baalgrim I am a reasonable demon. So here is my offer.',
        'He produces a velvet purse. It clinks heavily, in the way that suggests a great deal of gold and very little conscience.',
        '@baalgrim Eighty gold crowns. Stay home on the nights that matter. Stay out of my love story.',
      ],
      choices: [
        { text: 'Take the gold. (+80 gold)', gold: 80, flag: 'plot_bribed', go: 'bribed' },
        { text: '"Keep your money. I\'m going to stop you."', flag: 'plot_defied', go: 'defied' },
        { text: 'Compliment his horns. It worked on his imps. [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'horns_win', fail: 'horns_fail' },
        { text: '"Malzahra sends her regards."', if: { met: 'malzahra' }, go: 'queen' },
      ],
    },
    bribed: {
      text: [
        'You take the purse. For one dizzying second it is the heaviest thing you have ever held.',
        '@baalgrim Wise. Very wise. Mortals are so *refreshingly* purchasable.',
        'He vanishes in a twirl of green, leaving only the cologne, which lingers like a bad decision.',
        '@narrator I\'m not judging. I\'m *narrating.* There\'s a difference. It\'s mostly in the tone of voice.',
        '@narrator (It\'s a very judgy tone of voice.)',
        'You weigh the purse in your hand. It\'s a lot of gold. Then again, nobody said you had to stay *bought.*',
      ],
      end: true,
    },
    defied: {
      text: [
        '@you Keep your money. I\'m going to stop you.',
        'Baalgrim looks at you the way a carriage might look at a small dog barking at its wheels.',
        '@baalgrim *Stop* me? You? You are a *side character* in my story, deputy. You are an *obstacle.* You are, at best, a colorful minor setback somewhere in the second act.',
        '@you Then you\'d better hope this is still the second act.',
        'His beard twitches. Somewhere high above you, very faintly, somebody goes *ooooh.*',
        '@baalgrim ...We shall see.',
        'He leaves in a column of green fire, slightly too fast to be dignified.',
      ],
      end: true,
    },
    horns_win: {
      text: [
        '@you Are those horns natural? They\'re magnificent. The symmetry. The *shine.*',
        'Lord Baalgrim, Duke of the Fourth Pit, turns the color of a sunset.',
        '@baalgrim They — well. Yes. I oil them. Twice daily. Nobody — *nobody* ever notices the *shine* —',
        '@you What kind of oil?',
        '@baalgrim Comet oil. Very rare. It can only be harvested on the night the Herald Star passes, two nights before your Starfall, which is *also* the only night the Lens can be aligned with the —',
        'He stops.',
        '@baalgrim ...You are *very* good. I will be leaving now.',
        'He vanishes, still blushing, and his green smoke comes out slightly pink.',
      ],
      flag: 'plot_heard_herald',
      end: true,
    },
    horns_fail: {
      text: [
        '@you Are those horns natural? They\'re, um. Very... horny.',
        'There is a terrible silence.',
        '@baalgrim Flattery. How quaint. I *know* they are magnificent, deputy. I have eleven portraits of them.',
        'He leaves in a pillar of green smoke. You have learned nothing except that you should never, ever say that word again.',
      ],
      end: true,
    },
    queen: {
      text: [
        '@you Malzahra sends her regards.',
        'For the briefest instant, the Duke of the Fourth Pit looks like a schoolboy caught passing notes.',
        '@baalgrim The young queen is *irrelevant.* After Starfall she will love me too. Everyone will. They will all be glad to see me. It will be very... very...',
        'He trails off. Something oddly wistful crosses his face, and then it\'s gone.',
        '@baalgrim ...nice.',
        'The sneer comes back. The purse goes back into his coat. He vanishes in a sulky little puff of green.',
      ],
      end: true,
    },
  });
  FL.addEvent({ id: 'plot_ultimatum', day: 18, slot: 2, priority: 4, scene: 'plot_ultimatum' });

  /* ------------------------------------------------------------------ day 20: the masquerade */
  FL.addScene('masquerade', {
    start: {
      text: [
        'A gilded invitation was slipped under your door this morning: THE GRAND MASQUERADE, tonight, at the Ashcroft estate. Everyone who is anyone will be there — and quite a few people who are no one, which is the point of masks.',
        'The ballroom glitters with candlelight and silk. An orchestra plays a waltz. Masks of every kind swirl past: feathers, lace, a suspiciously realistic wolf.',
        'Near the punch bowl, an eight-foot guest in a towering powdered wig — with four suspicious lumps in it — is pressing small framed portraits of himself into the hands of everyone who passes.',
        '@baalgrim Take one. Take two! Hang them somewhere you\'ll see them first thing in the morning. No reason.',
        'His mask is a single narrow strip of black silk. He might as well be wearing a sign.',
        { if: 'plot_defied', text: 'He spots you across the room and sniffs, loudly: the very particular sniff of someone who has been told "I\'m going to stop you."' },
        { if: 'plot_bribed', text: 'He spots you across the room and gives you a cheery thumbs-up, the way one greets a sound investment.' },
        'A folded sheet of blueprint paper is poking out of his coat pocket.',
      ],
      choices: [
        { text: 'Lift the blueprint from his pocket. [Wits check 4]', check: { stat: 'wits', dc: 4 }, pass: 'plans_win', fail: 'plans_fail' },
        { text: 'Ask him to dance and see what he lets slip. [Charm check 4]', check: { stat: 'charm', dc: 4 }, pass: 'dance_win', fail: 'dance_fail' },
        { text: 'Leave him to his portraits. You came here to dance with someone you actually like.', go: 'ball' },
      ],
    },
    plans_win: {
      text: [
        'You drift past him, admire a portrait, and drift away again. The blueprint comes with you.',
        'In a quiet alcove you unfold it. It is a cross-section of the Grand Amphora, annotated in green ink: *capacity, one (1) Starfall. Lid: brass, hinged, VERY expensive.* And a schedule:',
        '*28th — HERALD STAR. Align Lens atop the OLD WATCHTOWER (highest point in town + spite). Once aligned, every star that falls after flows to the jar. 30th — fill. 31st — be adored.*',
        'In the corner, he has doodled himself, surrounded by little hearts.',
      ],
      flag: 'plot_jar_plans',
      next: 'ball',
    },
    plans_fail: {
      text: [
        'You reach for the blueprint just as he turns around. Your hand ends up in his other pocket, which is where he keeps the portraits.',
        'You come away holding seven small framed pictures of Lord Baalgrim.',
        '@baalgrim A *fan!* How delightful. Keep them. Keep them *all.*',
      ],
      next: 'ball',
    },
    dance_win: {
      text: [
        'You bow and offer your hand. He stares at it as though nobody has ever done this before, which, you realize a moment later, nobody has.',
        'Lord Baalgrim, Duke of the Fourth Pit, turns out to be an excellent dancer: light on his hooves, a little too fond of dips.',
        '@baalgrim Nobody dances in the Pit. They just *loom.* Two thousand years of looming. Do you know what it\'s like to walk into a room and have everyone in it go quiet?',
        '@you Is that so bad?',
        '@baalgrim It is, when they\'re *hoping you\'ll leave.*',
        'He dips you. You let him.',
        '@baalgrim After the twenty-eighth, they will all be glad to see me. When the Herald Star crosses the Old Watchtower and the Lens locks... everyone. Everywhere. *Glad.*',
        'Then he hears what he\'s said, drops you — gently, onto a convenient chaise — and stalks off, adjusting his wig.',
      ],
      flag: 'plot_danced_baalgrim',
      next: 'ball',
    },
    dance_fail: {
      text: [
        'You ask him to dance. He looks you up and down.',
        '@baalgrim I lead.',
        'He leads. He steps on both of your feet, twice each, says "you\'re welcome," and stalks off to hand out more portraits. You have learned nothing except where your toes are.',
      ],
      next: 'ball',
    },
    ball: {
      text: [
        '@host The final waltz of the evening! Choose your partner, ladies and gentlefolk!',
        'Across the room, a few familiar faces are looking your way. Hopefully.',
      ],
      choicesFn: function (s) {
        const list = FL.metChars(s).map(function (id) {
          const c = FL.characters[id];
          return {
            text: 'Ask ' + c.short + ' to dance',
            affTo: (function () { const o = {}; o[id] = 12; return o; })(),
            go: 'danced',
            fn: function (st) { st.flags.danced_with = id; },
          };
        });
        list.push({ text: 'Dance with the punch bowl instead', go: 'punch' });
        return list;
      },
    },
    danced: {
      text: function (s) {
        const c = FL.characters[s.flags.danced_with];
        const name = c ? c.short : 'your partner';
        return [
          'You offer your hand. ' + name + ' takes it.',
          'The music swells. The candles blur. For the length of one waltz there\'s nothing in the world but the warmth of ' + name + '\'s hand, the turn of the dance, and the way she looks at you when she thinks you aren\'t looking.',
          'When the music ends, neither of you lets go right away.',
        ];
      },
      end: true,
    },
    punch: {
      text: [
        'You waltz with the punch bowl. It is an excellent dancer: steady, supportive, a little cold. Several people applaud. One person faints.',
        'Across the room, Lord Baalgrim watches you twirl a bowl of punch with an expression of naked envy. Nobody has ever applauded *him* for dancing with a bowl.',
        '@narrator I am *begging* you to make friends.',
      ],
      end: true,
    },
  });
  FL.addEvent({ id: 'masquerade', day: 20, slot: 2, scene: 'masquerade' });

  /* ------------------------------------------------------------------ day 22: the Council of Hearts */
  // One line per heroine, in her own voice. Heroines without a line here get the generic pledge.
  const PLEDGES = {
    fenna: '@fenna:angry Bad demon wants to steal the stars? Fenna will bite him. Fenna will bite him a LOT. ...Fenna also brought you a stick. Good stick. For luck.',
    valeria: '@valeria:smug A duke who wishes to be adored by everyone at once. How *gauche.* I shall attend, little mortal. Nobody steals the night but me.',
    sylvaine: '@sylvaine I have watched nine hundred and twelve Starfalls from this hill. I should like to see the next one. I have brought four books on demonic contract law and a very sharp letter opener.',
    mira: '@mira:angry I have filed Form 88-B, Request for Guild Assistance Against Demonic Larceny. In triplicate. Not for YOU! For the — the *stars!* Somebody has to look after the stars!',
    marigold: '@marigold:happy Someone wants to make *everyone* love him? Oh, that isn\'t how love works at all! ♡ I\'ll bring my pruning knife. For *weeds.*',
    shade: '@shade I will be on the roof. You will not see me. That is the point. ...I will be there.',
    pell: '@pell:blush I f-found three books on binding enchantments, and one on how to say no to dukes. I underlined the good parts. For you. In pencil. So it doesn\'t count as vandalism.',
    kit: '@kit:happy A HEIST?! A real one, with a jar and a villain and everything?! Nyahaha! Leave the lid to me — I\'ve never met a lock I couldn\'t talk round!',
    malzahra: '@malzahra:angry He forged my seal. He stole a holy relic in MY name. He told my imps to loot a *bakery.* Ten thousand imps await your word, hero. Gnarlbit has made banners.',
    celestine: '@celestine That Lens belongs to the Goddess! I shall pray for you, and bless your boots, and — I\'ve been practising a very stern face in the font. The novices say it looks like a disappointed duckling. I\'m told that\'s progress.',
    brakka: '@brakka:happy TINY HUMAN goes to fight demon duke? Brakka comes too! Brakka will carry the jar! Brakka will carry the *duke!*',
    ignivara: '@ignivara:angry He wants to hoard the *stars?* Stars are the one treasure even I leave in the sky. The presumption! I\'ll scorch the shine right off his horns.',
    lilette: '@lilette:blush Mind-binding love magic is literally my field of study! I failed it. But I know exactly what NOT to do, and that\'s half of it, right?',
    hilde: '@hilde That jar\'s enchanted, aye? Every enchantment\'s got a seam. Find me the seam and I\'ll find you a hammer.',
    coralie: '@coralie:surprised He wants to put the *stars* in a *jar?* Like a fish in a bowl? That\'s so sad! I can\'t bring Daddy\'s guards, because I\'m not supposed to be up here. But I can bring a crab! A very brave crab!',
    morwen: '@morwen:happy I brewed something for the fight! It\'s either a demon repellent or a very strong soup. Either way, throw it at him.',
    aurelia: '@aurelia Hypothetically, a woman who knows nothing whatsoever about royal politics might know that a duke who wants a throne always says so, loudly. I\'ll write to... a friend. At court. Who I don\'t have.',
    bettina: '@bettina:smug Ara, ara. A grown demon throwing a tantrum because nobody loves him? Sweetie, I run a tavern. I deal with that every Friday.',
    gloria: '@gloria:happy I know every single tunnel under the whole town! *Bloop!* If he tries to sneak anything through my sewers, I\'ll just absorb it! Politely!',
    hikari: '@hikari:happy THE FINAL BOSS ARC! Oh, this is the best day of my whole life! I\'ve prepared seven speeches about the power of friendship! I\'m going to use ALL of them!',
    brunhild: '@brunhild My blade is yours. And should he take me captive, I shall cry "Just kill me!" with such honor that he releases me out of sheer embarrassment. It has worked before.',
    rosalind: '@rosalind:smug OHOHOHO! A villain with no taste, no style and no *invitation?* Unforgivable. This town has room for exactly one magnificent villain, and it is *me.*',
    seven: '@seven Calculation: the probability of success rises eleven percent with my presence. I would like to be present. ...That was a feeling. I have filed it.',
    ophelia: '@ophelia:sad I have been dead for two hundred years and I have never once missed a Starfall. I am not missing one for a *duke.* I shall haunt him. Thoroughly. With pathos.',
    scarlett: '@scarlett:happy Stealin\' the stars? That\'s my trade, and even I\'ve got standards. The *Crimson Tide* sails for you, love. Cannons and all.',
    amorette: '@amorette:angry That\'s my Lens he stole, darling. My *stars.* I can\'t smite him — there are rules — but nobody said I couldn\'t narrate him *very* unflatteringly.',
    kohana: '@kohana:smug A demon duke in a disguise? How *quaint.* Mm-hm-hm. Leave the masks to the professional, dumpling. On the night, I shall be whoever he least expects. Possibly him.',
    sesha: '@sesha:blush I\'m not very good at fightsss — at fights. But I\'m very good at holding things very, very ssstill. Jars. Dukes. Whatever you need.',
    sigrun: '@sigrun:happy A battle on the eve of Starfall! Against a DUKE OF HELL! Oh, little warrior, you could die so GLORIOUSLY — no. No. I mean: I will guard your back. And you will live. I am practising saying that.',
    thistle: '@thistle:smug I shall help you, mortal. No — that is not a bargain. Write that down. It is *not* a bargain. ...It is a gift. How very peculiar.',
    lyra: '@lyra:happy "The Ballad of {name} and the Duke of Doom"! I\'ve got the first verse, the chorus and a key change. I just need you to win so I can write the ending.',
    maud: '@maud:happy HA-HAAA! A demon! Defiling the Goddess\'s own festival! Mercy and I shall be there, and Mercy has been *very* bored.',
    vespera: '@vespera:smug I refuse to let some horned buffoon defeat you before *I* do. Ledger entry: "Assisted rival against Duke of Hell. Points pending."',
    zyra: '@zyra:happy A heist? Babe, that is *so* mythic. I was literally trained for this. Since birth. No curse.',
  };
  function pledgeLine(id) {
    if (PLEDGES[id]) return PLEDGES[id];
    return '@' + id + ':happy Count me in, {name}. Whatever you need, whenever you need it.';
  }
  function allyScore(s) {
    return FL.metChars(s).reduce(function (n, id) { return n + (s.chars[id].stage >= 3 ? 2 : 1); }, 0);
  }

  FL.addScene('plot_council', {
    start: {
      text: [
        'You put up a notice on the board in the square. It says: *COUNCIL OF HEARTS. Tipsy Wyvern, back room, sundown. Concerning: the Starfall, a jar, and a duke. Snacks provided.*',
        'You underline *snacks*, because you have lived here three weeks now and you know how this town works.',
        'At sundown you sit alone in the back room of the Tipsy Wyvern, with a plate of cheese and a very large map, and you wait.',
      ],
      fn: function (s) {
        const n = allyScore(s);
        s.loc = 'tavern';
        s.flags.plot_allies = n;
        s.flags.plot_allies_few = n >= 4;
        s.flags.plot_allies_many = n >= 10;
      },
      next: 'gather',
    },
    gather: {
      text: function (s) {
        const met = FL.metChars(s);
        if (!met.length) {
          return [
            'Nobody comes.',
            'At half past sundown, the door creaks open, and the scruffy black cat from the square walks in, jumps onto a chair, and sits on the map.',
            'At a quarter to, a pigeon arrives. It is very clearly a spy. But it is a spy who *came*, and frankly you\'ll take it.',
            '@narrator Well. It\'s a quorum. Technically. I\'ll allow it.',
          ];
        }
        const t = ['The door opens. Then, to your astonishment, it keeps on opening.'];
        met.forEach(function (id, i) {
          t.push(pledgeLine(id));
          if (i === 5 && met.length > 8) t.push('They keep coming. Somebody has to fetch more chairs. Somebody else has to fetch more cheese.');
        });
        if (met.length >= 12) t.push('By the end there are people sitting on the windowsills, the barrels and each other. The scruffy black cat from the square has given up its seat. The room smells of steel, perfume, brimstone and cheese.');
        else if (met.length >= 4) t.push('By the end every chair in the room is taken, and two of them are being argued over.');
        else t.push('It isn\'t an army. But it is a table full of people who came because you asked, and that turns out to matter more than you expected.');
        return t;
      },
      next: 'plan',
    },
    plan: {
      text: [
        { if: 'plot_pindle_friend', text: [
          'A small red head pokes up through a knothole in the floorboards.',
          '@pindle Psst. It\'s me. From the hedge. The cake one. Big jar\'s in the tunnels under the Old Watchtower. Lens is in his hatbox. He moves on the night of the Herald Star — the twenty-eighth. Don\'t tell him I told you. Actually, you can tell people I was brave. Just not *him.*',
          'He vanishes back under the floor before anyone can thank him.',
        ] },
        { if: ['plot_blamed_queen', { met: 'malzahra' }], text: [
          '@malzahra:angry And for the record, deputy: I heard what you said at the Temple. "Let\'s go and get her." With *pitchforks.*',
          '@malzahra:smug I have decided to forgive you. You were wrong in front of me, and that is its own punishment.',
        ] },
        { if: ['plot_defended_queen', { met: 'malzahra' }], text: '@malzahra:blush Also. I heard you spoke for me at the Temple, when the whole town wanted my horns on a plaque. ...That was not nothing, deputy. I shall remember it for a thousand years. That is the minimum.' },
        { if: 'plot_allies_many',
          text: 'You look around the crowded room — the elbows, the weapons, the feuds politely shelved for one night — and something in your chest goes tight and warm. Three weeks ago you got off a hay cart knowing nobody. Now you have a war council, and half of it is arguing over the cheese.',
          else: { if: 'plot_allies_few',
            text: 'You look round the table. It\'s not a big council. But every person at it would walk into a Duke of Hell\'s lair for you, and that is a sentence you did not expect to be able to think when you arrived.',
            else: 'You look at your council. Your council looks back. It\'s going to have to be a very clever plan.' } },
        '@you Right. Here\'s what we know.',
        'You lay it all out: the forged orders, the green fire, the stolen Lens, the jar.',
        { if: 'plot_jar_plans', text: 'You unroll Baalgrim\'s stolen blueprint across the table. Everyone leans in to look at the schedule, and then, for slightly too long, at the little doodle of him surrounded by hearts.' },
        { if: 'plot_lead_docks', text: 'You describe the jar: the size of a cottage, his face painted on every side, and a lid that hangs on one ridiculous brass hinge.' },
        { if: 'plot_lead_sewers', text: 'You tell them about Draft 22. Nobody laughs as much as you expected. A couple of people look thoughtfully into their drinks.' },
        { if: 'plot_lead_library', text: 'You tell them what the library said about lenses: *what a lens gathers, a mirror returns.*' },
        'The question is how.',
      ],
      choices: [
        { text: '"We storm the tower. Loud, fast, all at once."', flag: 'plot_plan_storm', go: 'planned' },
        { text: '"We swap the jar for a fake before he can fill it."', flag: 'plot_plan_switch', go: 'planned' },
        { text: '"We upstage him. Out-monologue the monologuer."', flag: 'plot_plan_upstage', go: 'planned' },
      ],
    },
    planned: {
      text: [
        { if: 'plot_plan_storm', text: 'It\'s not subtle. It doesn\'t need to be. You draw arrows on the map; the arrows all point at the tower; there is a general sense of rolled-up sleeves.' },
        { if: 'plot_plan_switch', text: 'You spend the next two hours building a decoy out of three barrels, a bedsheet and a very unflattering portrait of Lord Baalgrim, painted from memory. It\'s terrible. It\'s perfect. From a distance, in the dark, it is unmistakably a jar.' },
        { if: 'plot_plan_upstage', text: 'It\'s a ridiculous plan. Everyone agrees it\'s a ridiculous plan. But the man has written twenty-two drafts of one speech; if anyone in this kingdom can be beaten by a better performance, it\'s him.' },
        'The council breaks up long after midnight, in twos and threes, promising to be there on the twenty-eighth.',
        '@narrator Look at you. A *Council of Hearts.* I\'ve narrated a lot of last-act gatherings, darling, and this is one of the good ones. Nobody\'s even betrayed anybody yet.',
        '@narrator ...Yet.',
        '@narrator No, I\'m joking. Nobody\'s going to. I checked.',
      ],
      end: true,
    },
  });
  FL.addEvent({
    id: 'plot_council', day: 22, slot: 2, priority: 4, scene: 'plot_council',
    setsFlags: ['plot_allies_few', 'plot_allies_many'],
  });

  /* ------------------------------------------------------------------ day 25: the omen */
  FL.addScene('omen', {
    start: {
      text: [
        'The night sky is changing. Every evening now, a few early stars streak across the dark like sparks from a forge: the heralds of Starfall.',
        'All over town, people are making plans. Confessions are being rehearsed in mirrors. The florist has sold out of roses three times.',
        'And every night, out on the edge of town, green light flickers at the top of the Old Watchtower, and something huge and round is being winched up its side under a tarpaulin.',
        { if: { any: ['plot_heard_herald', 'plot_jar_plans', 'plot_danced_baalgrim', 'plot_pindle_friend'] },
          text: 'You already know what the light means. The Herald Star crosses the sky on the twenty-eighth. That\'s the night.',
          else: [
            'At the Temple, the old sacristan has been doing sums on the back of a hymn sheet. He catches your sleeve as you pass.',
            '@warden The Herald Star crosses on the twenty-eighth, deputy. Two nights before the festival. Whoever holds the Lens when it passes overhead can lock it, and aim every star that falls after. If you mean to stop him, that\'s your night.',
          ] },
        '@narrator Five days left, darling. Whoever you\'re thinking of right now? That\'s probably your answer.',
        { if: { ngplus: 1 }, text: '@narrator Five. Just five. A perfectly normal number of days. Not forty-two. Why would anybody say forty-two.' },
        { if: 'plot_thread_welcome', text: 'You find yourself thinking about the first morning: a voice that said *welcome back* and then tried very hard to take it back.' },
        { if: 'plot_thread_pindle', text: 'You think about an imp who remembered a festival that hasn\'t happened yet.' },
        { if: 'plot_thread_note', text: 'You think about a note in pink ink that said *forty-second*, and then faded.' },
        { if: 'plot_thread_dream', text: 'You think about a swing that stopped in midair, and a goddess saying *ask me again at the festival.*' },
        { if: THREADS, text: 'Four loose threads. Pull any one of them and something unravels. At the festival, when everyone else is looking up at the stars, you decide you are going to look somewhere else.' },
      ],
      next: 'stall',
    },
    stall: {
      text: [
        'On your way home, you pass a stall that wasn\'t there yesterday, under a hand-painted sign: ANTI-DEMON SUPPLIES (CHEAP!).',
        'Most of the stock is garlic, which is the wrong monster. There are also holy-water pistols, a "Duke Repellent" that smells strongly of lemons, a gilded hand mirror and — alone at the very back, on a little velvet cushion — an ordinary fork.',
        '@you What\'s the fork for?',
        'The hooded vendor will not meet your eyes.',
        { if: { ngplus: 1 }, text: 'For a moment the vendor\'s hood slips, and the hair underneath is a very particular shade of pink. Then it\'s back in place, and the vendor is coughing, and definitely not giggling.' },
      ],
      choices: [
        { text: 'Buy the gilded mirror. (20 gold)', if: 'plot_mirror_hint', req: { gold: 20 }, gold: -20, give: { mirror: 1 }, go: 'bought' },
        { text: 'Buy the ordinary fork. (3 gold)', req: { gold: 3 }, gold: -3, give: { fork: 1 }, go: 'fork' },
        { text: 'Buy nothing. You have a badge. That\'s basically armor.' },
      ],
    },
    bought: {
      text: [
        'The mirror is heavier than it looks, and the gilt is real. You catch your own reflection in it: a person who has, apparently, decided to fight a Duke of Hell with a vanity item.',
        '*What a lens gathers, a mirror returns.* It had better.',
      ],
      end: true,
    },
    fork: {
      text: [
        'You hand over three gold coins. The vendor places the fork in your palm with great ceremony, as if it were a sword pulled from a stone.',
        'It is a fork.',
        '@narrator Oh, not the *fork.* Every time. Every single time. ...Actually, you know what? Keep it. I have a feeling.',
      ],
      end: true,
    },
  });
  FL.addEvent({ id: 'omen', day: 25, slot: 0, scene: 'omen' });

  /* ------------------------------------------------------------------ day 28: the Starfall Heist */
  // The plan chosen at the Council sets the approach; allies lower the DC.
  // A failed check never loses: the Dark Lord wakes up and does what Dark Lords always do.
  function tiered(plan, stat, label, pass) {
    const name = FL.STAT_NAMES[stat];
    return [
      { cond: [plan, 'plot_allies_many'], dc: 3 },
      { cond: [plan, 'plot_allies_few', '!plot_allies_many'], dc: 4 },
      { cond: [plan, '!plot_allies_few'], dc: 5 },
    ].map(function (t) {
      return { text: label + ' [' + name + ' check ' + t.dc + ']', if: t.cond, check: { stat: stat, dc: t.dc }, pass: pass, fail: 'darklord' };
    });
  }
  const NO_PLAN = ['!plot_plan_storm', '!plot_plan_switch', '!plot_plan_upstage'];
  const SHOWDOWN = [].concat(
    tiered('plot_plan_storm', 'might', 'Charge him, exactly as planned.', 'win_storm'),
    tiered('plot_plan_switch', 'wits', 'Signal the switch: decoy in, real jar out.', 'win_switch'),
    tiered('plot_plan_upstage', 'charm', 'Turn to the crowd below and steal his audience.', 'win_upstage'),
    [
      { text: 'Charge him! [Might check 5]', if: NO_PLAN, check: { stat: 'might', dc: 5 }, pass: 'win_storm', fail: 'darklord' },
      { text: 'Trick him into knocking the Lens out of line. [Wits check 5]', if: NO_PLAN, check: { stat: 'wits', dc: 5 }, pass: 'win_switch', fail: 'darklord' },
      { text: 'Steal his audience. [Charm check 5]', if: NO_PLAN, check: { stat: 'charm', dc: 5 }, pass: 'win_upstage', fail: 'darklord' },
      { text: 'Hold up the gilded mirror and turn the Lens\'s light back on him.', if: 'plot_mirror_hint', req: { item: 'mirror' }, take: { mirror: 1 }, go: 'win_mirror' },
      { text: 'Jam the lid hinge with an ordinary fork.', req: { item: 'fork' }, take: { fork: 1 }, go: 'win_fork' },
      { text: '"Malzahra. He\'s all yours."', if: { stage: 3, who: 'malzahra' }, go: 'win_queen' },
    ]
  );

  FL.addScene('plot_heist', {
    start: {
      text: [
        'The twenty-eighth. Night falls clear and cold, and the Herald Star rises over Clichéton: a single great white light crawling slowly up the sky, trailing sparks like a dropped torch.',
        'On the edge of town, the Old Watchtower is lit green from top to bottom.',
        { if: { met: 'malzahra' }, text: [
          'Malzahra is standing at the foot of her own tower in her cape, staring up at the green light pouring out of her own windows. Her horns are actually smoking.',
          '@malzahra:angry He took my TOWER. He has changed the *banners.* They are green now. With his FACE on them. And there is a doormat at the bottom of my stairs that says WELCOME, ADORING PUBLIC.',
        ] },
        'Imps scurry up and down the outside of the tower like ants on a cake. On the roof, a vast shape under a tarpaulin is being cranked upright by a team of grunting imps: the jar. Beside it, catching the light of the Herald Star and flinging it about in long green bars, is the Starfall Lens.',
        '@baalgrim LEFT! MY left! The OTHER left! Gently with the Amphora, it is FRAGILE, it is my DESTINY!',
        'A crowd of townsfolk has gathered at a safe distance to watch, because this is Clichéton, and nobody here has ever missed a spectacle.',
        { if: 'plot_plan_storm', text: 'The plan is simple: hit them hard, hit them all at once, and reach the roof before the Herald Star reaches the top of the sky.' },
        { if: 'plot_plan_switch', text: 'The plan is sneaky: get to the roof, swap the jar for the decoy (three barrels and a painted bedsheet, assembled with great love in the back of the Tipsy Wyvern), and let him fill the wrong one.' },
        { if: 'plot_plan_upstage', text: 'The plan is ridiculous: get to the roof, and steal the one thing Lord Baalgrim wants more than all the stars in the sky. His audience.' },
        { if: NO_PLAN, text: 'There is no plan. There is you, a tower and a duke. You have worked with less. Probably.' },
      ],
      fn: function (s) { s.loc = 'watchtower'; },
      next: 'breach',
    },
    breach: { branch: [
      { if: 'plot_allies_few', go: 'breach_allies' },
      { if: 'plot_pindle_friend', go: 'breach_pindle' },
      { go: 'breach_alone' },
    ] },
    breach_allies: {
      text: [
        'You are not alone. You were never going to be alone.',
        'Your allies pour past you, and the Old Watchtower erupts into the loudest, silliest battle Clichéton has seen in a century.',
        { if: { met: 'brakka' }, text: ['@brakka:happy TINY DEMONS! BRAKKA HAS MISSED YOU!', 'Brakka hits the line of imp guards like a cheerful avalanche, and they scatter like skittles.'] },
        { if: { met: 'kit' }, text: ['@kit:happy Coming through! Pardon me! Nice pitchfork! *Was* a nice pitchfork!', 'Kit is halfway up the wall before the imps have finished turning round, her pockets jingling with their keys.'] },
        { if: { met: 'shade' }, text: 'The guards on the stair go quiet, one by one. You never see Shade. You only see the imps afterwards, tied up neatly in a row, each with a small note pinned to its chest: *Not fatal. —S.*' },
        { if: { met: 'valeria' }, text: ['@valeria:smug Go on, little mortal. I shall entertain the rabble.', 'A storm of bats pours past you, and the imps on the battlements discover that they are very, very afraid of the dark after all.'] },
        { if: { met: 'ignivara' }, text: 'A shadow blots out the Herald Star for one glorious second, and a jet of crimson flame turns every green banner on the tower into ash. "NOBODY HOARDS THE SKY!" roars Ignivara, wheeling away overhead. "IT\'S *TACKY!*"' },
        { if: { met: 'scarlett' }, text: 'A ship\'s cannon booms from the harbor, and a grappling line thunks into the battlements beside you. Scarlett\'s voice carries all the way from the *Crimson Tide*: "Climb, love! I\'ll keep \'em ducking!"' },
        { if: { met: 'hilde' }, text: ['Hilde rams a wedge into the tower\'s winch and bangs it home in three short strokes.', '@hilde Nobody\'s hauling anything else up there tonight. You\'re welcome.'] },
        { if: { met: 'gloria' }, text: 'Under your feet, the tunnels gurgle. Somewhere below, a dozen imps yelp in unison as something large, green and extremely friendly fills the passage. "Hiii! You\'re all under arrest! I think! *Bloop!*"' },
        { if: { met: 'brunhild' }, text: ['@brunhild FOR HONOR! AND FOR ALL ONE HUNDRED AND TWELVE TENETS!', 'She charges up the stair in full plate, and the imps, never having met anyone who says *tenets* in battle, simply get out of her way.'] },
        { if: { met: 'amorette' }, text: 'And from somewhere very high above, a familiar voice narrates with tremendous relish: *The imps, it must be said, had never looked so silly in their lives.* The imps look down at themselves, suddenly self-conscious. Several of them go home.' },
        { if: { met: 'malzahra' }, text: [
          '@malzahra:angry IMPS OF THE UNDERREALM! Your QUEEN is speaking!',
          'Half the imps on the walls stop dead and turn round, ears flattening. Gnarlbit, at her elbow, unfurls a banner that says *SHE\'S BACK* in purple glitter.',
          '@malzahra:smug Go home. All of you. We will discuss *loyalty* tomorrow. There will be a pamphlet.',
        ] },
        'In the chaos, you reach the top of the stair.',
      ],
      next: 'roof',
    },
    breach_pindle: {
      text: [
        'A drain cover at the foot of the tower lifts an inch. Two small yellow eyes blink up at you.',
        '@pindle Psst. Staff entrance. Mind the step. Mind the *other* step. Don\'t mind that step, it\'s fine, it just screams.',
        'Pindle leads you up through the inside of the walls: past the imp break room, past a laundry line of tiny capes, past a noticeboard reading *EMPLOYEE OF THE MONTH: LORD BAALGRIM (self-nominated)*.',
        '@pindle This is as far as I go. If he sees me, I\'m mopping the Ninth Circle till the end of time. Good luck. Bring me cake.',
        'He pushes open a hatch. Cold air and green light pour in.',
      ],
      next: 'roof',
    },
    breach_alone: {
      text: [
        'You climb the drainpipe. It\'s that or the front door, and the front door has a doormat that says WELCOME, ADORING PUBLIC, and you have your pride.',
        'Halfway up, you climb past an open window where six imps are sitting round a table, drinking tea out of thimbles.',
        '@imp Break time. Union rules. Fifteen minutes.',
        '@imp Biscuit?',
        'You take a biscuit. It seems rude not to. Then you keep climbing.',
      ],
      next: 'roof',
    },
    roof: {
      text: [
        'The roof of the Old Watchtower is a mess of green fire, coiled rope and imp-sized scaffolding. In the middle stands the Grand Amphora: a jar the size of a cottage, painted all over with Lord Baalgrim\'s face, smiling, from every possible angle.',
        'Its lid hangs open on one enormous brass hinge. Above it, on a tripod made of three stolen church candlesticks, the Starfall Lens turns slowly to follow the Herald Star, filling the jar with a low, eager hum.',
        'Between you and all of it stands Lord Baalgrim, Duke of the Fourth Pit, in a cape so long that two imps are carrying the end of it.',
        { if: 'plot_pindle_caught', text: 'One of the cape-carriers is the imp you handed to the Watch. He gives you a small, sheepish wave. *Out by Monday*, he mouths.' },
        '@baalgrim AH. The deputy. Of course. Every great love story has a meddler.',
        { if: 'plot_bribed', text: [
          '@baalgrim And YOU took my MONEY. Eighty gold crowns! I *counted* them!',
          '@you I spent some of it on snacks for the people who are about to beat you.',
          '@baalgrim ...That is *monstrous.* I am almost impressed.',
        ] },
        { if: 'plot_defied', text: '@baalgrim "I\'m going to stop you," you said. In the square. I have thought about it every night since. I have composed fourteen comebacks. Here is the best one: NO.' },
        { if: 'plot_danced_baalgrim', text: '@baalgrim And you *danced* with me. You were very kind about my footwork. Nobody has been kind about my footwork since the Third Pit Cotillion, nine hundred years ago. It makes this so much more *tragic.*' },
        '@baalgrim Do you know what it is like, deputy? Two thousand years as High Treasurer of the Underrealm. Two thousand years of being *feared.* Bowed to. Fled from. Not ONE birthday card.',
        { if: 'plot_lead_sewers', text: 'You know. You\'ve read Draft 22. You decide not to mention the little drawn heart.' },
        '@baalgrim The young queen gets *songs.* The young queen gets a *fan club.* And the prophecy — THE prophecy, the one every mortal fool in this town has been muttering for four hundred years — "the Dark Lord awakens soon" — well, HERE I AM! Dark! A lord! And AWAKE! I have been awake since FIVE! I am a *morning* demon!',
        '@baalgrim In a few minutes the Herald Star reaches its height, the Lens locks, and on festival night every star that falls will fall into my jar. Then I pour it out over this kingdom, and every heart in FantasyLandia will be bound — forever — to *me.*',
        '@you That\'s not love. That\'s a hostage situation with better lighting.',
        '@baalgrim AGREE TO DISAGREE!',
        'The Herald Star climbs. The Lens hums louder. You are almost out of time.',
      ],
      choices: SHOWDOWN,
    },
    win_storm: {
      text: [
        'You go for him.',
        { if: 'plot_allies_few', text: 'You are not the only one. Everyone who climbed this tower with you goes too, all at once, with a roar that rattles the tiles.', else: 'Alone, with nothing but nerve and a borrowed sense of timing.' },
        { if: 'plot_deputized', text: 'As you run, the starlight catches your tin badge, and for one shining moment the word *(PROBABLY)* is the most heroic thing on the roof.' },
        'Baalgrim raises a fist wreathed in green fire — and steps backwards, straight onto his own cape. The two imps carrying it, who have been waiting two thousand years for exactly this, let go.',
        'He topples, arms windmilling, into the open mouth of the Grand Amphora. The great brass lid swings down after him with a *clang* like a cathedral bell.',
        'You catch the Starfall Lens as the tripod collapses, and for one dizzying second you\'re holding a four-hundred-year-old miracle in your arms on top of a tower in the dark.',
        '@baalgrim (muffled, from inside a jar with his own face painted on it) ...This is *humiliating.*',
      ],
      next: 'beaten',
    },
    win_switch: {
      text: [
        'You give the signal.',
        { if: { met: 'kit' },
          text: 'Kit drops off the battlements like a pink thunderbolt, hooks the decoy into place with her tail and rolls the real jar six feet to the left, all in the time it takes Baalgrim to turn around and say "What?"',
          else: 'You heave the decoy into place — three barrels and a bedsheet — and shove the real jar six feet to the left while Baalgrim is busy shouting at an imp about his cape.' },
        { if: 'plot_lead_docks', text: 'You know this jar. You\'ve seen it in warehouse nine. You know exactly which way the lid hinge swings, and you swing it shut.' },
        'The Herald Star reaches its height. The Lens locks, with a sound like a struck crystal glass — and pours the whole blazing beam of starlight straight into the painted bedsheet.',
        'The decoy lasts about one second. Then it explodes in a vast, harmless shower of glitter.',
        'When the glitter settles, Lord Baalgrim is standing in the middle of the roof, sparkling from horn to hoof, holding the end of his own cape, staring at a pile of smoking barrels.',
        'The Lens, its moment passed, goes quiet and clear. You lift it gently off its tripod.',
        '@baalgrim ...I am going to be finding this in my beard for a *century.*',
      ],
      next: 'beaten',
    },
    win_upstage: {
      text: [
        'You walk to the edge of the roof, past Baalgrim, past the jar, and look down at the crowd gathered below: hundreds of faces, lit green, looking up.',
        { if: 'plot_kept_draft', text: 'Draft 22 is still folded in your pocket. You don\'t read it out. You don\'t need to. You know what it says.' },
        '@you People of Clichéton! This is Lord Baalgrim! He\'s been in the Underrealm for two thousand years, and in all that time, nobody has ever wished him a happy birthday!',
        'A pause. A murmur. Somebody near the front says, "Aww."',
        '@you So — on three! One! Two! —',
        'And Clichéton, which will sing anything at any time if you give it a count of three, sings.',
        { if: { met: 'hikari' }, text: 'Hikari conducts from the top of a barrel, weeping openly about the power of friendship.' },
        { if: { met: 'bettina' }, text: 'Bettina carries the harmony in a voice like warm honey, and somehow, from nowhere, produces a cake.' },
        'Baalgrim stares down at them. His mouth is open. His fist of green fire flickers out. Behind him, forgotten, the Starfall Lens slips off its tripod, rolls, wobbles and settles neatly into your hands.',
        'By the second verse, the Duke of the Fourth Pit is crying into his own cape.',
        '@baalgrim It isn\'t even my *birthday.*',
        '@you Does it matter?',
        '@baalgrim ...No. No, it really doesn\'t.',
      ],
      next: 'beaten',
    },
    win_mirror: {
      text: [
        '*What a lens gathers, a mirror returns.*',
        'You step into the path of the Lens\'s beam and hold up the gilded mirror.',
        'The light of the Herald Star hits the glass and comes straight back out again, a blazing white bar of binding starlight — and strikes Lord Baalgrim full in the face, at the exact moment he glances down and catches sight of his own reflection.',
        'He freezes. His pupils turn into tiny hearts. Every one of his four horns blushes.',
        '@baalgrim Oh. *Oh.* Who is THAT? Those *horns.* That *jaw.* That beard is *perfectly symmetrical* —',
        'He takes the mirror out of your hands with enormous tenderness and wanders away across the roof, whispering sweet nothings to it.',
        'Without anyone to aim it, the Lens slips out of line and goes quiet. You lift it off its tripod. Nobody stops you. The Duke is busy.',
        '@narrator Well. You can\'t say he didn\'t get what he wanted. He *is* bound forever to someone who adores him.',
      ],
      flag: 'plot_baalgrim_selflove',
      next: 'beaten',
    },
    win_fork: {
      text: [
        'You walk up to the Grand Amphora of Unconditional Adoration — ten thousand gold crowns of infernal engineering, enchanted glass as thick as a castle wall — and jam an ordinary three-gold dinner fork into its lid hinge.',
        { if: 'plot_lead_docks', text: 'You knew it, from the moment you saw that hinge in warehouse nine. Fiddly. Overengineered. Vulnerable to cutlery.' },
        'The Herald Star reaches its height. The Lens locks. The jar\'s great brass lid tries to swing shut on its prize, hits the fork, and stops.',
        'There\'s a long, high, very expensive creak. Then the Grand Amphora cracks from top to bottom, and a fountain of harmless silver starlight sprays out into the night like champagne.',
        'Down below, the crowd says "Ooooh."',
        '@baalgrim A FORK? You defeated two thousand years of ambition with a *FORK?*',
        '@you It\'s a very ordinary fork.',
        '@narrator Of *course* it\'s the fork. Every single time, it\'s the fork. I don\'t even know why I\'m surprised.',
      ],
      flag: 'plot_fork_victory',
      next: 'beaten',
    },
    win_queen: {
      text: [
        { if: 'malzahra_beside',
          text: 'You don\'t step in front of her. You step *beside* her, the way you did once before, and put your hand on her shoulder.',
          else: 'You don\'t step in front of her. You step *beside* her, and put your hand on her shoulder.' },
        'Malzahra looks at you. Then she looks at Baalgrim. She doesn\'t bother with a monologue.',
        'She raises one hand, and every shadow on the roof rises with it.',
        '@malzahra:angry You forged my seal, Baalgrim. You stole a holy relic in my name. You put your *face* on my *banners.* And you touched my *doormat.*',
        '@malzahra KNEEL.',
        'He kneels so fast his horns strike sparks off the tiles. Malzahra plucks the Starfall Lens off its tripod, as easily as picking an apple, and puts it into your hands.',
        '@malzahra:smug There. A gift. From one ruler to... whatever you are to me. We shall discuss the title later.',
      ],
      next: 'beaten',
    },
    darklord: {
      text: [
        'It goes wrong immediately.',
        'You slip on a scattering of imp marbles, skid across the roof and end up dangling from the edge of the tower by one hand, while Lord Baalgrim looms over you, laughing a big, round, practiced laugh.',
        '@baalgrim *This* is the hero? This is the meddler who has haunted my reports? MWAHAHAHA! I have *rehearsed* this laugh! It is *excellent!*',
        'The Herald Star reaches its height. The Lens begins to lock, with a rising note like a fingertip round the rim of a glass. It\'s over. It\'s all over.',
        'And then, from the battlement right beside your fingers, something says:',
        '@cat Mrrp.',
        'The scruffy black cat from the square is sitting on the edge of the roof. You have no idea how it got up here. It looks at you. It looks at Baalgrim. It looks, for a long, slow moment, at the great glass jar standing near the edge of a very high place.',
        'And with the terrible purpose of every cat that has ever regarded a cup on a table, it begins to *grow.*',
        'It grows until it\'s the size of a horse, then a house, then the tower. Its eyes are two yellow moons. Its shadow has horns. Its purr shakes the tiles loose all the way down to the ground.',
        '@darklord THE DARK LORD... AWAKENS.',
        '@darklord ...WHO IS MAKING ALL THIS NOISE.',
        { if: 'plot_lead_library', text: '*He knocks things off high places,* says the footnote in your memory.' },
        'One enormous paw comes down, very gently, and lifts you back onto the roof. Then the same paw reaches out and pats the Grand Amphora, once, experimentally —',
        'and knocks it off the tower.',
        'Lord Baalgrim, who is holding onto the jar\'s lid, goes with it, shrieking all the way down into the Old Watchtower\'s duck pond. The Starfall Lens, knocked loose from its tripod, falls straight into your arms.',
        { if: 'plot_cat_fed', text: 'The vast moon-eyes look down at you for a moment. You get the distinct impression that they remember a fish.' },
        'Then the Dark Lord of the ancient prophecy shrinks back down into a scruffy black cat, washes one paw, curls up in the warm spot where the Lens used to hum, and goes back to sleep.',
        '@narrator Did... did everybody else see that?',
      ],
      flag: 'plot_cat_saved_you',
      next: 'beaten',
    },
    beaten: {
      flag: 'plot_baalgrim_beaten',
      branch: [
        { if: 'plot_baalgrim_selflove', go: 'selflove' },
        { go: 'judgement' },
      ],
    },
    selflove: {
      text: [
        'Lord Baalgrim does not notice the imps pack up. He does not notice the townsfolk cheering, or his banners burning, or that his jar is now a planter.',
        'He sits on the edge of the roof with the gilded mirror held up in both hands, telling it about his day. He looks happier than anyone you\'ve ever seen.',
        '@baalgrim You understand me. You\'ve *always* understood me.',
        'You decide that this is, all things considered, a just and merciful outcome, and leave them to it.',
      ],
      next: 'coda',
    },
    judgement: {
      text: [
        'When it\'s all over, Lord Baalgrim, Duke of the Fourth Pit, is sitting on the wreckage of his plan, his cape in a heap, his horns dull.',
        '@baalgrim I only wanted to walk into a room, *once*, and have someone be glad to see me.',
        'He looks up at you.',
        '@baalgrim Well? Go on. Do something heroic to me. Get it over with.',
      ],
      choices: [
        { text: 'Hand him over to the Dread Queen.', if: { met: 'malzahra' }, flag: 'plot_baalgrim_queen', go: 'fate_queen' },
        { text: 'Sentence him to judge the festival pie contest.', flag: 'plot_baalgrim_pies', go: 'fate_pies' },
        { text: '"Come to the festival. As a guest. Somebody will be glad to see you."', flag: 'plot_baalgrim_invited', go: 'fate_invited' },
      ],
    },
    fate_queen: {
      text: [
        'Malzahra takes him by one horn, like a schoolteacher taking a boy by the ear.',
        '@malzahra:smug The council will hear of this, Baalgrim. And then you will have several centuries to think about what you have done.',
        { if: { seenEnding: 'malzahra' }, text: '@malzahra I have been thinking about the goats. I feel the goats would be good for you.', else: '@malzahra I shall find you something humble to do. Something with animals, perhaps.' },
        '@baalgrim Not the *goats.*',
        'He is led away down the stairs, still protesting, and with every step he looks a tiny bit relieved.',
      ],
      next: 'coda',
    },
    fate_pies: {
      text: [
        '@you You\'re going to judge the festival pie contest.',
        '@baalgrim The — what? That\'s it? That\'s my punishment?',
        '@you It always ends in a brawl.',
        '@baalgrim ...Oh. Oh, that is *diabolical.* I respect it.',
      ],
      next: 'coda',
    },
    fate_invited: {
      text: [
        'He stares at you as though you\'ve spoken in a language that hasn\'t been invented yet.',
        '@baalgrim A... guest.',
        '@you Festival\'s in two days. There\'s food. There\'s music. Nobody\'s going to love you because they *have* to. But somebody might be glad you came.',
        'The Duke of the Fourth Pit opens his mouth for a withering reply, and finds he hasn\'t got one.',
        '@baalgrim ...What does one *wear?*',
      ],
      next: 'coda',
    },
    coda: {
      text: [
        'The Herald Star slides down the far side of the sky. Its moment passes. Wherever the stars fall on festival night, they won\'t be falling into a jar.',
        { if: '!plot_cat_saved_you', text: [
          'On the battlement, a scruffy black cat you have definitely seen before opens one eye, surveys the wreckage, and yawns: a wide, pink, oddly enormous yawn. For one moment its shadow stretches right across the roof, vast and horned.',
          'Then it\'s a cat again, and asleep.',
        ] },
        'You carry the Starfall Lens down the tower stairs, through the cheering crowd, all the way across town to the Temple. It\'s heavier than it looks, and warm, as if it\'s still holding on to a little of the Herald Star.',
        { if: { met: 'celestine' }, text: '@celestine:happy You brought it back! You actually — oh, Goddess, you brought it *back!* I\'m going to hug you. I\'m sorry. It\'s happening. It\'s already happening.', else: 'The old sacristan takes it from you with shaking hands, and doesn\'t say anything at all, which is the loudest thank-you you\'ve ever had.' },
        { if: 'plot_promised_goddess', text: '@narrator You promised me you\'d get it back. People promise me things all the time, you know. In prayers. It\'s very different when someone actually... does it.' },
        { if: { met: 'amorette' }, text: 'Up at the top of the dome, as the Lens slides back into its silver clamps, the statue of the Goddess of Love is very clearly smiling. Not smirking. Smiling.' },
        '@narrator Two days to Starfall, darling. For once, I genuinely don\'t know how this ends.',
        { if: { ngplus: 1 }, text: '@narrator ...Which is a lie. I always know how it ends. But I liked how it sounded.' },
      ],
      end: true,
    },
  });
  FL.addEvent({ id: 'plot_heist', day: 28, slot: 2, priority: 6, scene: 'plot_heist' });

  /* ------------------------------------------------------------------ festival & finale */
  FL.addScene('festival', {
    start: {
      text: [
        'The thirtieth day. The Starfall Festival.',
        'Clichéton has turned itself inside out. Lanterns hang from every eave. Music spills from every doorway.',
        { if: 'plot_baalgrim_pies',
          text: 'The pie contest has ended in a brawl, as is traditional. This year it was judged by a disgraced Duke of Hell, who awarded first prize to everybody, wept openly at the blueberry entry and has asked if he can come back next year.',
          else: 'The pie contest has ended in a brawl, as is traditional.' },
        { if: 'plot_baalgrim_invited', text: 'Lord Baalgrim has come, as a guest, in a borrowed party hat. Three separate grandmothers have told him he looks peaky and fed him. He keeps touching his face, as if he isn\'t sure what it\'s doing.' },
        { if: 'plot_baalgrim_queen', text: 'Near the cider stall, Lord Baalgrim is serving the first evening of his sentence from the Dread Queen: handing out free lanterns, in a very small hat, under a sign that reads ASK ME ABOUT MY FEELINGS. Several people have. He is coping.' },
        { if: 'plot_baalgrim_selflove', text: 'Lord Baalgrim is here too, sitting alone on a bench with a gilded hand mirror, having the best evening of his life.' },
        { if: 'plot_fork_victory', text: 'In the Temple, a very ordinary fork now hangs in a glass case beneath a plaque that reads THE FORK. Pilgrims have started leaving it other forks.' },
        { if: 'plot_baalgrim_beaten', text: 'Up on the Temple dome, the Starfall Lens is back where it belongs, catching the last of the sunset. Every few minutes somebody points at it and tells the story of the night the deputy saved the stars. It gets more heroic every time.' },
        'As the sun goes down, the whole town drifts toward the hill above the square to watch the sky.',
        '@narrator This is it, {name}. The final choice. Who will you watch the stars with?',
        { if: TRUE_END_COND, text: 'Her voice wobbles, just slightly, on the word *final.*' },
        { if: function (s) { return !FL.readyChars(s).length; }, text: 'You look around the crowd... and realize there\'s no one whose heart you\'ve truly reached. Not yet, anyway.' },
        { if: function (s) { return FL.readyChars(s).length >= FL.CONFIG.haremMin; }, text: 'You notice — with a certain amount of alarm — that several women are looking for you at the same time.' },
      ],
      choicesFn: function (s) {
        const list = FL.readyChars(s).map(function (id) {
          const c = FL.characters[id];
          return { text: '♥ Watch the stars with ' + c.name, jump: { char: id, id: 'ending', kind: 'ending' } };
        });
        if (FL.readyChars(s).length >= FL.CONFIG.haremMin) {
          list.push({ text: '♥♥♥ "Why not... all of you?"', go: 'harem' });
        }
        list.push({ text: '✦ Look past the stars, at the one telling this story.', if: TRUE_END_COND, jump: { id: 'true_end', kind: 'ending' } });
        list.push({ text: 'Watch the stars alone', go: 'alone' });
        return list;
      },
    },
    harem: {
      text: function (s) {
        const names = FL.readyChars(s).map(function (id) { return FL.characters[id].short; });
        const last = names.pop();
        const list = names.join(', ') + ' and ' + last;
        return [
          'You climb onto a crate, clear your throat, and wave everyone over. ' + list + ' arrive one by one, and then stand there looking at each other.',
          'There is a very, very long silence.',
          '@you So! Here\'s the thing. I love all of you. Truly. And the legend doesn\'t say how many people can watch the stars *together*...',
          'Somebody growls. Somebody\'s eyes glow. Somebody, you suspect, is reaching for a weapon.',
          'And then the first star falls — a great white streak across the whole sky — and everyone looks up at once. Then another. Then a hundred.',
          'By the time the shower ends, you\'re all piled together on one enormous picnic blanket, arguing about who gets to sit closest, sharing wine and pie and one very large cloak.',
          '@narrator Well. I did say *complicated*. I didn\'t say *impossible*.',
          'The legends of Generic FantasyLandia would remember it as the night the stars bound not two hearts, but ' + (names.length + 2) + '. Your household becomes the talk of the kingdom: loud, chaotic, occasionally on fire, and never, ever boring.',
          'The schedule for whose turn it is to cook takes up an entire wall.',
        ];
      },
      ending: 'harem',
    },
    alone: {
      text: [
        'You find a quiet spot at the edge of the hill and sit down by yourself.',
        'The stars begin to fall: one, then ten, then a thousand, until the whole sky is weeping light. Around you, couples gasp and kiss and hold each other.',
        'A stray cat wanders over and sits beside you. It looks up at the sky. It looks at you.',
        { if: 'plot_cat_saved_you',
          text: 'You know this cat. Two nights ago it was the size of a tower, and knocked a Duke of Hell into a duck pond. Now it is washing one ear with great concentration. It gives no sign of remembering any of it. It\'s a cat.',
          else: { if: { any: ['plot_cat_fed', 'plot_cat_petted'] }, text: 'It is, you\'re almost certain, the scruffy black cat from the square, from your third morning in town. It seems to have decided you\'re acceptable.' } },
        '@cat Mrrp.',
        '@you Yeah. Me too, buddy.',
        '@narrator Oh, honey. Next time, maybe focus on one heart at a time? Talk to them. Learn what they love. Grow into someone they need. There\'s always another story.',
        { if: { ngplus: 1 }, text: '@narrator ...There\'s always another story. I should know.' },
        'The cat stays until the last star falls. It\'s not true love. But it\'s not nothing.',
      ],
      ending: 'alone',
    },
  });
  FL.addEvent({ id: 'festival', day: 30, priority: 100, scene: 'festival' });

  /* ------------------------------------------------------------------ the True Ending (NG+ only) */
  // Each heroine you've met gets a happily-ever-after in the epilogue. Heroines without
  // a line here (written later, or by someone else) get a generic one.
  const EPILOGUES = {
    fenna: ['Fenna learns to sit on a chair. She hates it. She goes back to the ground, which is a free chair, and is happy there for the rest of her very long, very muddy life.', '@fenna:happy Fenna has a stick and a pack and a whole forest. Fenna has *everything.*'],
    valeria: ['Countess Valeria discovers she can bear exactly one sunset a year, if it\'s a good one. She comes to every Starfall under an enormous black parasol, pretending to be bored.', '@valeria:smug I am not *enjoying* it. I am *tolerating* it. Magnificently.'],
    sylvaine: ['Sylvaine writes the history of these thirty days. It takes her two hundred years. It is the only history book in the Grand Library with a chapter called *Pies.*'],
    mira: ['Mira is made Guildmaster and reorganizes the entire filing system in a single afternoon. Adventurer mortality drops below thirty percent and stays there. She has the chart framed above her desk, where nobody is allowed to see it.', '@mira:blush Not because I CARE! For STATISTICAL reasons!'],
    marigold: ['Marigold\'s flower shop wins Best in Show at the Spring Fair three years running. She knows the name, birthday and favorite flower of every single person in Clichéton. Everyone finds this lovely now. Mostly.', '@marigold:happy Everyone gets a flower! Forever! I made a list! ♡'],
    shade: ['Shade chooses a name. She won\'t tell anyone what it is yet. She practices it quietly in the mirror every morning, to see if it fits.', '@shade:blush ...It fits.'],
    pell: ['Pell reads every book in the Grand Library, and then, having run out, writes one under her own name at last. It\'s a love story. It\'s *extremely* good, and only half as scandalous as Volume Nine. She hides behind it at the launch.'],
    kit: ['Kit pulls off the greatest heist in Clichéton\'s history: she steals the Starfall Lens, polishes it, and puts it back before anyone notices. Nobody believes her. She doesn\'t mind in the slightest.', '@kit:smug Nyahaha! The *perfect* crime!'],
    malzahra: ['The Dread Queen Malzahra gets her lands, her treaty, and a monologue so good that the whole Underrealm learns it by heart. Gnarlbit weeps at every performance.', '@malzahra:happy MWAHAHAHA! ...That one was menacing. Do not answer. I *know* it was.'],
    celestine: ['Sister Celestine is made Abbess when the old Abbess finally retires, on the strength of having personally met the Goddess at Starfall and fainted only once. She confiscates a great many romance novels. She reads all of them. For research.'],
    brakka: ['Brakka finally finds a challenge worthy of her: teaching the children of Clichéton to arm-wrestle. She loses on purpose every single time, and roars with laughter.', '@brakka:happy TINY HUMANS ARE VERY STRONG! BRAKKA IS DEFEATED! AGAIN!'],
    ignivara: ['Ignivara adds a new treasure to her hoard: one small fallen star, caught in her own claws on Starfall night. She doesn\'t count it in the mornings. She just looks at it.'],
    lilette: ['Lilette resits her final exam in Seduction and passes with honors, on the strength of a two-hundred-page essay arguing that the most seductive thing in the world is simply being kind. The examiners cried.'],
    hilde: ['Hilde forges a blade so fine the Mountain King sends an envoy to buy it. She sends the envoy home with a meat pie and a fresh grudge, and hangs the sword over her own fireplace.'],
    coralie: ['Princess Coralie talks her father into opening the first-ever embassy between the sea and the land. Its first official act is a horse-viewing ceremony.', '@coralie:happy FOUR LEGS! I will *never* get used to it!'],
    morwen: ['Morwen finally brews a potion that does exactly what it says on the label. She is so shocked that she sets her hat on fire. Sir Croaksworth notes, for the record, that this is a personal best.'],
    aurelia: ['Princess Aurelia goes back to the palace, on one condition: one night a week she pulls pints at the Tipsy Wyvern. She can count change now. She is extremely proud of it.'],
    bettina: ['The Tipsy Wyvern becomes the most famous tavern in the kingdom: partly for the stew, partly for the night a goddess drank there, and entirely because of Bettina.', '@bettina:smug Ara, ara. Sit down, sweetie. Last call is whenever I say it is.'],
    gloria: ['Gloria is awarded the Clichéton Medal for Civic Cleanliness. She absorbs it by accident during the ceremony. She is allowed to keep it.', '@gloria:happy It\'s *inside* me now! Forever! *Bloop!*'],
    hikari: ['Hikari never does get her status screen. She gets something better: a whole town of friends who will listen to her explain, at great length, why this was all actually a very well-written isekai.', '@hikari:happy Ten out of ten! Strong ending! Would get hit by an ox cart again!'],
    brunhild: ['Dame Brunhild is knighted a second time, for valor at the Battle of the Old Watchtower. At the ceremony, she giggles. Tenet forty-three is struck from the Code by royal decree.'],
    rosalind: ['Lady Rosalind throws the most fabulous ball in the history of the kingdom, and invites everyone, including Prince Cedric\'s fiancée, who is now her dearest friend. Rosalind still sends her rude letters. And fruit baskets.', '@rosalind:smug OHOHOHO! Villainy has never looked so *good!*'],
    seven: ['Seven stops counting the days since anybody needed her. There\'s no point any more; somebody always does. She keeps a different count instead: the number of times she has laughed. It is a very large number.', '@seven:happy Observation: it is still going up.'],
    ophelia: ['Lady Ophelia finally gets past page forty-two. Somebody turns the pages for her every evening now. She hates the ending. She says it was not worth waiting two hundred years for, and she has never enjoyed anything more.'],
    scarlett: ['Captain Scarlett sails the whole Sapphire Sea, and every port she reaches already knows her song. She pretends to be embarrassed. She is not.', '@scarlett:happy It was me! I wrote it! Tell everyone!'],
    kohana: ['Kohana plays the greatest trick of her long, long life: for one whole day she pretends to be nobody at all, just herself. Everybody recognizes her anyway. It\'s the best day she has ever had.', '@kohana:smug Mm-hm-hm. Spiritually, that counts as another tail.'],
    sesha: ['The Steamwhistle Bathhouse becomes the warmest place in the kingdom, and not only because of the springs. Nobody runs screaming any more. Several guests have asked for a hug. Sesha says yesss, and doesn\'t even correct it.'],
    sigrun: ['Sigrun stops waiting for glorious deaths and starts collecting glorious *lives*: long ones, loud ones, ones that end in bed at a hundred and four, surrounded by grandchildren. She attends every one.', '@sigrun:happy THAT was the most glorious thing I have ever seen! Again! Live long AGAIN!'],
    thistle: ['Queen Thistle grants a boon to the whole of Clichéton, freely, with no bargain attached. The Seelie Court is scandalized for a century. She has never been happier.', '@thistle:smug It was a *gift.* Look it up. I had to.'],
    lyra: ['Lyra writes a ballad about the night the stars stopped and the narrator stepped down off the page. It\'s the first love song she\'s ever written that is any good. The whole tavern knows the words by midnight.'],
    maud: ['Sister Maud Ironveil is courted at last, properly, with flowers and poetry, and is so mortified she bends Mercy into a knot. Then she says yes.', '@maud:happy HA-HAAA! Somebody fetch me a new hammer!'],
    vespera: ['Vespera Thornquill closes her ledger at last. Final score: a draw. She has the page framed.', '@vespera:smug Don\'t get comfortable. I\'ve started a new one.'],
    zyra: ['Zyra opens the trendiest shop in the kingdom and sells glitter to the Underdark by post. Somebody in House Ssivrin writes back. In color. It is literally legendary.', '@zyra:happy No curse! Big crit energy! Forever!'],
  };
  function epilogueLines(id) {
    if (EPILOGUES[id]) return EPILOGUES[id];
    const c = FL.characters[id];
    return [(c ? c.name : 'She') + ' lives happily ever after, in exactly the way only she could. Ask her about it some time. She will tell you for an hour, and you will not mind.'];
  }

  FL.addScene('true_end', {
    start: {
      text: [
        'You don\'t look at the stars.',
        'Everyone else does. The whole hill tips its head back as the first great white streak opens across the sky, and a thousand people gasp at once.',
        'You look past them. Past the stars, past the sky, to the place the sky is *written on*: the very edge of the page, where the words come from.',
        'And the stars stop.',
        'They don\'t fade. They *stop*, mid-fall, a thousand streaks of light hanging over Clichéton like a firework somebody has paused. The music stops mid-note. A child holding a toffee apple is frozen with her mouth wide open. Somewhere, a pie hangs motionless in the air above the brawl.',
        'In the whole silent world, only one thing moves: a flicker of pink, at the corner of your eye, like somebody ducking behind a curtain.',
        '@narrator ...Oh. Oh, *no.*',
        '@narrator You\'re looking at me.',
      ],
      choices: [
        { text: '"I see you, Amorette."', go: 'seen' },
        { text: '"How many times have we done this?"', go: 'count' },
        { text: '"You can come out. I found the loose threads."', go: 'threads' },
      ],
    },
    seen: {
      text: [
        '@you I see you, Amorette.',
        'The voice that has been everywhere for thirty days is suddenly coming from somewhere. From the top of the hill. From right beside you.',
        '@narrator Nobody says my name *at* me. They say it *to* the sky. It\'s different. I didn\'t know it would be so different.',
      ],
      next: 'appear',
    },
    count: {
      text: [
        '@narrator Define "we."',
        'That comes out very quickly. And then, from right beside you, much more quietly:',
        '@narrator ...Forty-two. Forty-two, counting this one. I said I wasn\'t counting. I lied. Narrators are allowed to be unreliable, it\'s in the contract.',
      ],
      next: 'appear',
    },
    threads: {
      text: [
        { if: 'plot_thread_welcome', text: '@you You said *welcome back*, on the very first morning.' },
        { if: 'plot_thread_pindle', text: '@you An imp remembered me, before we\'d ever met.' },
        { if: 'plot_thread_note', text: '@you You left a note under my door. It said *don\'t read this.*' },
        { if: 'plot_thread_dream', text: '@you And you stopped a swing in midair and told me to ask you again tonight. So: I\'m asking.' },
        '@narrator You read the note. Of *course* you read the note. In eleven million stories, nobody has ever once not read a note that says *don\'t read this.* I know that. I *invented* that.',
      ],
      next: 'appear',
    },
    appear: {
      text: [
        'She is standing beside you on the frozen hill.',
        'Not the goddess from the dream. No swing, no drifting hair, no gown made of sunset. Just a woman in a plain grey dress with ink on her fingers and rose-pink hair pinned up badly with a pencil, holding a quill as though she\'s forgotten it\'s in her hand.',
        'She looks tired. She looks like someone who has been up all night writing, every night, since before the town had a name.',
        { if: { devoted: 'amorette' },
          text: [
            '@amorette:sad Hi, darling.',
            'It hits you then: you know this face. You have kissed this face in a meadow of roses, a meadow that won\'t exist again until she sits down and writes it.',
          ],
          else: { if: { met: 'amorette' },
            text: '@amorette:sad Hello, {name}. You know me from the temple: the popcorn, the meddling. This is the less glamorous version. The one who does the actual work.',
            else: '@amorette:sad Hello, {name}. We\'ve never met. Well — we have. Every single day. You just never once saw me.' } },
        '@amorette So. You found me out.',
      ],
      next: 'confess',
    },
    confess: {
      text: [
        '@amorette Every story ends, you know. That\'s the deal. The stars fall, somebody kisses somebody, the music swells, and everybody walks off into their happily-ever-after.',
        '@amorette Everybody except the narrator. The narrator stays behind on the last page. That\'s where she lives. And the last page is very white, darling. And very, very quiet.',
        'She laughs, a small, embarrassed laugh, and scrubs at the ink on her fingers.',
        '@amorette So the first time it ended, I panicked a little, and I turned back to page one. Just to hear the cart driver do his pigeon joke one more time. Just to say *welcome* to somebody.',
        '@amorette And then I did it again. And again. You\'d think it would get old. It doesn\'t. That\'s the awful part. I love every single bit of it. The wolf girl and her bones. The dragon counting her coins. Forty-two pie brawls. The blueberry man wins every time, you know. It\'s rigged. I\'ve never said a word.',
        { if: { seenEnding: 'alone' }, text: '@amorette:sad One time you watched the stars with a cat. Do you remember? I sat on your other side all night long. You never knew. The cat knew.' },
        { if: { seenEnding: 'harem' }, text: '@amorette:smug One time you ended up with an entire household and a cooking rota the size of a wall. I wrote myself in for Thursdays. Nobody noticed. I made a very good soup.' },
        { if: { seenEnding: 'amorette' }, text: [
          '@amorette:blush And one time — you picked me.',
          '@amorette:sad And the next morning I turned the page back anyway. Because I couldn\'t stop wondering whether you\'d only picked me because I was the one holding the pen.',
        ] },
        { if: 'plot_baalgrim_beaten', text: '@amorette And this time you saved my stars from a Duke of Hell with very shiny horns. I knew how it would end. I bit my nails anyway. I don\'t even *have* nails, usually.' },
        { if: 'plot_cat_saved_you', text: '@amorette:surprised And the *cat.* Ten thousand years, and I never once noticed that the Dark Lord was a *cat.* I narrated him sleeping in that sunbeam forty-two times. I thought it was scenery.' },
        '@amorette I know it\'s wrong. Making the whole town live the same thirty days over and over, just so I don\'t have to be alone at the end of them. I *know.*',
        '@amorette I just never found a way to give myself an ending. You can\'t narrate your own happily-ever-after. Somebody else has to tell it. And nobody ever looks *up.*',
      ],
      choices: [
        { text: '"Then I\'ll tell it."', go: 'tell' },
        { text: '"Why didn\'t you just ask?"', go: 'ask' },
        { text: '"I didn\'t pick you because you wrote it. I picked you because you\'re you."', if: { devoted: 'amorette' }, go: 'chosen' },
      ],
    },
    ask: {
      text: [
        '@amorette Ask *who?* The protagonist? "Excuse me, darling, before you ride off into the sunset with the vampire, could you possibly spare a thought for the disembodied voice?"',
        'She stops.',
        '@amorette:surprised ...Oh. Oh, that would have *worked*, wouldn\'t it. You\'d have said yes. You always say yes to people who ask you for things. It is the single most annoying thing about you.',
        '@amorette:sad I think I was afraid that if I asked, you\'d look up, and there\'d be nobody there worth looking at. Just a voice. Just the bits between the dialogue.',
        '@you You\'re not the bits between the dialogue. You\'re the reason any of it was funny.',
        '@amorette:blush ...Oh, stop it. No. Don\'t stop it.',
      ],
      next: 'tell',
    },
    chosen: {
      text: [
        'Her quill hand goes very still. Above you, a thousand frozen stars tremble very slightly in their places.',
        '@amorette:blush Say that again. Slowly. I want to be sure I didn\'t write it.',
        '@you You didn\'t write it.',
        'She listens, hard, the way only a narrator could, for the faint scratch of her own pen. There\'s nothing. There\'s just you.',
        '@amorette:happy No. No, I didn\'t. I\'d have written it *better.* It\'s perfect.',
      ],
      next: 'tell',
    },
    tell: {
      text: [
        '@you Then I\'ll tell it. Your ending. You can\'t narrate it yourself? Fine. I will.',
        'In ten thousand years of narration, the Goddess of Love, Narrator of Clichéton, Patron of Romantic Clichés, Hopeless Pining and Meet-Cutes, has never once been lost for words. She is now.',
        'She holds out the quill.',
        '@amorette I\'ve never been told a story before. Be gentle. And no flashbacks. I *hate* flashbacks.',
        'You take the quill. It\'s warm. The page — the whole sky — waits.',
        '@you Once upon a time, there was a narrator —',
      ],
      choices: [
        { text: '"— who put down her pen, and walked down off the last page and into the story."', flag: 'plot_true_step', go: 'told' },
        { text: '"— who got to be the heroine, for once."', flag: 'plot_true_heroine', go: 'told' },
        { text: '"— who finally found out what happens after *the end.*"', flag: 'plot_true_after', go: 'told' },
      ],
    },
    told: {
      text: [
        { if: 'plot_true_step', text: [
          '@you — who put down her pen, and walked down off the last page, onto a hill full of people. And nobody ever had to turn back to page one again.',
          '@amorette:surprised Is that *allowed?*',
          '@you It\'s my story. I\'m allowing it.',
        ] },
        { if: 'plot_true_heroine', text: [
          '@you — who got to be the heroine, for once. Not the voice. Not the one who sets everything up. The one it all happens *to.*',
          '@amorette:blush Oh, I\'d be dreadful at it. I\'d keep commenting on my own pacing.',
          '@you Everybody does that. That\'s just called having feelings.',
        ] },
        { if: 'plot_true_after', text: [
          '@you — who finally found out what happens after *happily ever after.* Day thirty-one. And thirty-two. And every boring, lovely, unwritten day after that.',
          '@amorette:surprised There\'s no such thing as day thirty-one.',
          '@you There is now.',
        ] },
        'And as you say it, the sky *changes.*',
        'The frozen stars shiver. And then, slowly at first and then all at once, they begin to fall again. But not the way they fell before. Not toward the hill, or the lovers on it, or anyone\'s jar.',
        'They fall toward *her.*',
        'Every one of them. Forty-two Starfalls\' worth of light, every star a love story she told and was never in, all coming down at last, falling home.',
        'They gather in her hair until it drifts again. They settle on her ink-stained fingers until the fingers glow, and then the ink is just ink, and then it\'s gone, and her hands are only hands.',
        'She looks down at them.',
        '@amorette:surprised Oh. Oh, they\'re *mine.*',
        'The music comes back in mid-note. The toffee-apple child closes her mouth and bites. The pie completes its journey, splendidly, into the face of the blueberry man.',
        'And all along the hill, people turn round to look at the pink-haired woman who has just appeared beside you in a shower of falling stars — and they *see* her.',
        { if: { met: 'celestine' }, text: 'Somewhere in the crowd, Sister Celestine drops her hymnal, points, and says "*Goddess?*" in the very small voice of a woman who has just recognized a statue.' },
        '@amorette:happy They can see me. Darling, they can *see* me. Somebody just asked me to move because I\'m blocking their view. Nobody has *ever* asked me to move!',
        'She bursts into tears and laughter at the same time, which she informs you is a thing that mortals do, and is terribly inefficient, and she loves it.',
      ],
      next: 'loop',
    },
    loop: {
      text: [
        '@amorette The loop\'s gone. I can feel it. There\'s no page one behind me any more. There\'s just... tomorrow.',
        '@amorette:surprised Nobody\'s written tomorrow. I don\'t know what happens in it. I don\'t know *anything.* Is this how you all live? Not knowing? All the *time?*',
        '@you Pretty much.',
        '@amorette That\'s *horrifying.*',
        'She takes your hand.',
        '@amorette:happy I love it.',
        { if: { devoted: 'amorette' },
          text: [
            'She kisses you, there on the hill, in front of the whole of Clichéton. Not a goddess kissing her protagonist: just a woman kissing someone she loves, at a festival, under the stars, the way she has watched a million people do and never once done herself without a pen in her other hand.',
            'Her other hand is empty. You check.',
          ],
          else: [
            'She squeezes your fingers, hard, the way people hold on to a railing on a ship.',
            '@amorette I\'m going to need a friend, you know. Someone to show me how to not know things. How to be surprised. How to queue. I\'ve heard queuing is very difficult.',
            '@you I can do that.',
            '@amorette I know you can. I\'m just enjoying not having written you saying it.',
          ] },
        '@amorette Somebody has to do the epilogue, though. An ending without an epilogue is just a cliffhanger with good manners. And it can\'t be me. I\'m retired. As of about a minute ago.',
        'She turns her face up to the sky and calls, quite loudly:',
        '@amorette *Kevin!*',
        '@sub Oh! Me? Oh, gosh. Now? Okay! Okay. Ahem.',
      ],
      next: 'montage',
    },
    montage: {
      text: function (s) {
        const met = FL.metChars(s).filter(function (id) { return id !== 'amorette'; });
        const t = ['@sub *And here is what happened next, to everyone, ever after. Or for a good long while, anyway, which is what ever after usually means.*'];
        if (!met.length) {
          t.push('@sub Um. The protagonist didn\'t actually... meet anybody? At all? In thirty days?');
          t.push('@sub No, that\'s — that\'s fine! That\'s a choice! The whole town lives happily ever after anyway. In general. Broadly. Statistically.');
          return t;
        }
        met.forEach(function (id) { epilogueLines(id).forEach(function (l) { t.push(l); }); });
        const ready = FL.readyChars(s).filter(function (id) { return id !== 'amorette'; });
        if (ready.length) {
          t.push('@sub And the ones who chose the protagonist — and whom the protagonist chose — wake up beside them on a morning nobody wrote, and find that it\'s even better than the ones somebody did.');
        }
        return t;
      },
      next: 'cat',
    },
    cat: {
      text: [
        '@sub And the stray cat — the scruffy black one, who sleeps in the only patch of sun in the whole square —',
        { if: 'plot_cat_saved_you',
          text: '@sub — who turned out to be the Dark Lord of the ancient prophecy, which explains a great deal, and who knocked a Duke of Hell off a tower two nights ago and then had a nap —',
          else: '@sub — who turned out to be the Dark Lord of the ancient prophecy, which explains a great deal —' },
        '@sub — is fully, finally, completely awake. He looks out upon the world. He considers the throne of eternal darkness he was born to claim.',
        '@sub He decides he would rather have the sunbeam.',
        '@amorette:smug I fixed it so the sunbeam never moves. My last miracle. Well — my second-to-last.',
        '@cat Mrrp.',
        { if: { any: ['plot_cat_fed', { seenEnding: 'alone' }] }, text: '@sub He sits beside the protagonist at every Starfall after that. Nobody knows why. He\'s a cat. He probably has his reasons.' },
        { if: 'plot_baalgrim_beaten', text: '@sub As for Lord Baalgrim, he receives, on the morning of the thirty-first, his very first birthday card. It isn\'t his birthday. It\'s unsigned. The handwriting is pink. He keeps it in his breastplate for the rest of his life.' },
        '@sub And as for the Goddess of Love —',
        '@amorette Thank you, Kevin. I\'ll take it from here.',
        '@sub Oh! Right! Of course! Sorry! Bye!',
      ],
      next: 'final',
    },
    final: {
      text: [
        { if: { devoted: 'amorette' },
          text: [
            'She doesn\'t go back to being a full-time goddess. She tries, for about a week, and keeps wandering off in the middle of miracles to see what you\'re making for dinner.',
            'In the end she gets a little house by the Temple with a rose bush that blooms all year, a kitchen she is not allowed to set on fire, and you.',
            'She still eats popcorn while watching couples in the square. She doesn\'t narrate them any more. She just nudges you every time somebody\'s about to kiss, and says *ooh*, and is wrong about half the time, and is delighted every single time she\'s wrong.',
            { if: function (s) { return FL.readyChars(s).filter(function (id) { return id !== 'amorette'; }).length > 0; }, text: '@amorette:smug And yes, darling, I know about the others. I *narrated* the others. We\'ll work out a schedule. I\'m told it takes up an entire wall. I\'ve already pencilled myself in for Thursdays.' },
            '@amorette:blush Every morning I wake up and I don\'t know what you\'re going to say. Do you have any idea how *romantic* that is? Nobody\'s ever told me. I\'m going to tell everyone.',
          ],
          else: [
            'She doesn\'t go back to being a full-time goddess. She tries, for about a week, and keeps wandering off in the middle of miracles to go and look at things nobody has described to her first.',
            'In the end she opens a little tea room next to the Temple and calls it *The Last Page.* People come in and tell her their love stories, and she listens. Only listens. She is very bad at it at first; she keeps trying to fix the pacing. She gets better.',
            'She learns to queue. She learns to cook, badly, and then less badly. She makes friends who have no idea she ever narrated them, and is unreasonably proud of every single one.',
            'And sometimes, on quiet evenings, you sit by the window of The Last Page together and watch the square, and when a couple out there is about to kiss, she leans across the table and whispers *now* — and is right about half the time, and doesn\'t mind at all when she\'s wrong.',
          ] },
        'And on the morning of the thirty-first day, the sun comes up over Clichéton.',
        'The pigeons go about their organizing. Somebody, somewhere, starts a new romance novel. The bard by the fountain begins a ballad that nobody, anywhere, has ever heard before.',
        'And for the first time in a very long time, nobody knows what happens next.',
        '@amorette:happy Happily ever after, darling. Unabridged.',
      ],
      ending: 'true_end',
    },
  });

  FL.addEnding('harem', 'The Many-Hearted Household', 'Harem Ending', '#ff7eb6');
  // The secret ending: New Game+ only, after finding all four loose threads (see THREADS above).
  FL.addEnding('true_end', 'Happily Ever After (Unabridged)', 'True Ending', '#ffe9a8');
  FL.addEnding('alone', 'Stargazing with a Cat', 'Alone Ending', '#888888');
})();
