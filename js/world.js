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
          'Tip from the Guild: Most hearts have a favourite gift and one they truly hate. Pay attention to how people react!',
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

  /* ------------------------------------------------------------------ prologue */
  FL.addScene('prologue', {
    start: {
      text: [
        'Once upon a time — because that is how these things always begin — there was a kingdom called Generic FantasyLandia.',
        'It had elves. It had dragons. It had a tavern with a funny name and a Dark Lord who was supposedly awakening "soon." It had, in short, everything.',
        'And on a perfectly ordinary spring morning, a hay cart rattled up the road toward the town of Clichéton carrying one perfectly ordinary passenger.',
        '@driver End of the line, {title}. Clichéton. Mind the pigeons. They\'ve been organizing.',
      ],
      next: 'arrive',
    },
    arrive: {
      text: [
        'You hop down onto the cobbles with your pack and everything you own. The town square spreads out before you: a fountain, a notice board, a bard, a dozen shopfronts. It looks like the cover of a hundred storybooks.',
        '@narrator Ah! There you are. Welcome, {name}.',
        'The voice comes from everywhere and nowhere. Nobody else in the square seems to notice it.',
        '@narrator Don\'t be alarmed. I\'m the Narrator. Every story has one. Mine just happens to be... let\'s say, *invested*.',
      ],
      choices: [
        { text: '"Who said that?!"', go: 'who' },
        { text: '"A talking narrator. Sure. Why not."', go: 'calm' },
        { text: '"I\'m here for glory and adventure, not voices in my head."', go: 'glory' },
      ],
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
      ],
      next: 'close',
    },
    close: {
      text: [
        '@narrator Now off you go. Explore. Meet people. Make questionable decisions. I\'ll be watching. Closely. With snacks.',
        'The voice fades, leaving behind the smell of rose petals and the distinct feeling that you have been winked at by the cosmos.',
      ],
      end: true,
      endLabel: 'Begin your story',
    },
  });

  FL.addEvent({ id: 'prologue', day: 1, priority: 50, scene: 'prologue' });

  /* ------------------------------------------------------------------ main plot events */
  FL.addScene('festival_notice', {
    start: {
      text: [
        'A town crier in an enormous feathered hat stands on the edge of the fountain, ringing a bell with real enthusiasm.',
        '@crier Hear ye, hear ye! In twenty-five days — the STARFALL FESTIVAL! Food! Music! Fireworks! A night of stars and romance! Those who watch the stars fall together shall be bound for all eternity!',
        '@crier Also there\'s a pie contest.',
        'Around the square, a lot of people suddenly look at a lot of other people. You feel the clock ticking.',
      ],
      end: true,
    },
  });
  FL.addEvent({ id: 'festival_notice', day: 5, slot: 0, scene: 'festival_notice' });

  FL.addScene('demon_attack', {
    start: {
      text: [
        'A scream splits the morning. The sky over the town square darkens to purple, and a tear opens in the air with a sound like ripping silk.',
        'Out tumble a dozen imps: knee-high, red-skinned, with tiny horns, tiny pitchforks and enormous egos.',
        '@imp BY ORDER OF HER DREAD MAJESTY, WE CLAIM THIS FOUNTAIN!',
        '@imp And the bakery! Don\'t forget the bakery!',
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
        'The imps flee into the rift. The figure looks down at you, soaking wet in the fountain, for a long moment.',
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
        'And then she is gone in a swirl of violet smoke. Later, people say they saw purple lights burning at the Old Watchtower on the edge of town. Lights that only come on at night.',
        '*The Old Watchtower is now accessible in the evening.*',
      ],
      flag: 'demon_attack',
      end: true,
    },
  });
  FL.addEvent({ id: 'demon_attack', day: 10, slot: 0, priority: 5, scene: 'demon_attack' });

  FL.addScene('goddess_dream', {
    start: {
      text: [
        'That night you dream of a field of roses under a sky full of stars. A woman sits on a swing hanging from nothing, kicking her heels. She has pink hair, golden eyes, and a smile like she knows the ending of every story ever told.',
        '@narrator Hello again, {name}.',
        '@you You\'re... the Narrator?',
        '@narrator Narrator. Goddess of Love. Patron of Romantic Clichés, Hopeless Pining and Meet-Cutes. Amorette, to my friends. I have a lot of titles. Gods collect them like cats collect grudges.',
        '@narrator I\'ve been watching you, and frankly, you\'re the most entertaining thing to happen in this kingdom in a century. So I thought I might... come down and say hello properly.',
        '@narrator Visit my temple at night. Bring something nice. Or don\'t. I\'ll know either way. I\'m omniscient. Mostly.',
        'You wake with a rose petal on your pillow.',
        '*Amorette can now be found at the Temple in the evening.*',
      ],
      flag: 'goddess_awake',
      end: true,
    },
  });
  FL.addEvent({ id: 'goddess_dream', day: 15, slot: 0, scene: 'goddess_dream' });

  FL.addScene('masquerade', {
    start: {
      text: [
        'A gilded invitation was slipped under your door this morning: THE GRAND MASQUERADE, tonight, at the Ashcroft estate. Everyone who is anyone will be there — and quite a few people who are no one, which is the point of masks.',
        'The ballroom glitters with candlelight and silk. An orchestra plays a waltz. Masks of every kind swirl past: feathers, lace, a suspiciously realistic wolf.',
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
        '@narrator I am *begging* you to make friends.',
      ],
      end: true,
    },
  });
  FL.addEvent({ id: 'masquerade', day: 20, slot: 2, scene: 'masquerade' });

  FL.addScene('omen', {
    start: {
      text: [
        'The night sky is changing. Every evening now, a few early stars streak across the dark like sparks from a forge — the herald of Starfall.',
        'All over town, people are making plans. Confessions are being rehearsed in mirrors. The florist has sold out of roses three times.',
        '@narrator Five days left, darling. Whoever you\'re thinking of right now? That\'s probably your answer.',
      ],
      end: true,
    },
  });
  FL.addEvent({ id: 'omen', day: 25, slot: 0, scene: 'omen' });

  /* ------------------------------------------------------------------ festival & finale */
  FL.addScene('festival', {
    start: {
      text: function (s) {
        const ready = FL.readyChars(s);
        const t = [
          'The thirtieth day. The Starfall Festival.',
          'Clichéton has turned itself inside out. Lanterns hang from every eave. Music spills from every doorway. The pie contest has ended in a brawl, as is traditional.',
          'As the sun goes down, the whole town drifts toward the hill above the square to watch the sky.',
          '@narrator This is it, {name}. The final choice. Who will you watch the stars with?',
        ];
        if (!ready.length) {
          t.push('You look around the crowd... and realize there\'s no one whose heart you\'ve truly reached. Not yet, anyway.');
        } else if (ready.length >= FL.CONFIG.haremMin) {
          t.push('You notice — with a certain amount of alarm — that several women are looking for you at the same time.');
        }
        return t;
      },
      choicesFn: function (s) {
        const list = FL.readyChars(s).map(function (id) {
          const c = FL.characters[id];
          return { text: '♥ Watch the stars with ' + c.name, jump: { char: id, id: 'ending', kind: 'ending' } };
        });
        if (FL.readyChars(s).length >= FL.CONFIG.haremMin) {
          list.push({ text: '♥♥♥ "Why not... all of you?"', go: 'harem' });
        }
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
          'The legends of Generic FantasyLandia would remember it as the night the stars bound not two hearts, but ' + (names.length + 1) + '. Your household becomes the talk of the kingdom: loud, chaotic, occasionally on fire, and never, ever boring.',
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
        '@cat Mrrp.',
        '@you Yeah. Me too, buddy.',
        '@narrator Oh, honey. Next time, maybe focus on one heart at a time? Talk to them. Learn what they love. Grow into someone they need. There\'s always another story.',
        'The cat stays until the last star falls. It\'s not true love. But it\'s not nothing.',
      ],
      ending: 'alone',
    },
  });
  FL.addEvent({ id: 'festival', day: 30, priority: 100, scene: 'festival' });

  FL.addEnding('harem', 'The Many-Hearted Household', 'Harem Ending', '#ff7eb6');
  FL.addEnding('alone', 'Stargazing with a Cat', 'Alone Ending', '#888888');
})();
