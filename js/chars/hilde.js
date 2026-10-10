FL.addCharacter({
  id: 'hilde',
  name: 'Hilde Stonebrew',
  short: 'Hilde',
  trope: 'Gruff Tomboy Dwarf Blacksmith',
  color: '#d97b3a',
  favStat: 'might',
  endingTitle: 'Forged Together',
  endings: { hilde_shield: 'Shield-Bonded', hilde_romantic: 'Iron Roses' },
  teaser: 'A short, broad-shouldered woman covered in soot is hammering a red-hot blade and swearing at it in Dwarvish.',
  blurb: 'Master smith of the Stonebrew Forge: four feet of muscle, soot and stubbornness. Out-drinks, out-works and out-swears everyone in Clichéton. Thinks romance is for elves and poets. Has a secret sketchbook full of delicate jewelry designs she\'s never dared to make.',
  schedule: ['artisan', 'artisan', 'tavern'],
  gifts: { love: ['ale'], like: ['gears', 'axe', 'gem', 'steak', 'mead'], hate: ['roses', 'perfume', 'polish'] },
  giftLines: {
    love: ['She cracks the keg open with her bare hands and drinks straight from it.', '@hilde:happy *GLUG GLUG GLUG.* HAAAH. Now *that\'s* a proper Ironpeak stout! You know your ale, surfacer. Come \'ere —', 'She claps you on the back hard enough to dislodge a filling.'],
    like: '@hilde Hm. Useful. Good quality. You\'ve got an eye for craft, I\'ll give you that.',
    neutral: '@hilde What am I s\'posed to do with this? ...Fine, fine, I\'ll put it on the shelf. With the other junk people give me.',
    hate: ['She holds it at arm\'s length, nose wrinkled.', '@hilde:angry Flowers? Stink-water? Do I look like an *elf* to you? Get it out of my forge before it rusts the anvils.'],
    special: {
      ale: [
        'She cracks the keg open with her bare hands and drinks straight from it.',
        '@hilde:happy *GLUG GLUG GLUG.* HAAAH. Now *that\'s* a proper Ironpeak stout! You know your ale, surfacer.',
        { if: 'hilde_outdrank', text: '@hilde:smug Don\'t think this gets you out of anything. I still owe you a round. Forever. This is just the *interest.*', else: 'She claps you on the back hard enough to dislodge a filling.' },
      ],
      roses: [
        '@hilde:angry Roses. *Real* roses. You know they die in a week? Smell nice for three days, then they\'re compost. Pointless.',
        'She looks at them for a moment longer than she needs to.',
        '@hilde:blush ...Put \'em in the quench tank, then. Water\'s water. Not that I *care.*',
      ],
      polish: [
        '@hilde:angry Glitter. *GLITTER.* In my *forge.* You know how long this stuff stays in a set of bellows? Forever. I\'ll be sneezing sparkles at my own funeral.',
      ],
      gem: [
        '@hilde:surprised Hold on — hold *on* — that\'s a proper sapphire. Look at the clarity. Ma would\'ve —',
        'She turns it in the firelight for a long time, not saying anything.',
        '@hilde:blush ...I\'ve got a setting in mind. Don\'t ask. Don\'t *look* at me like that. Go pump the bellows.',
      ],
      fork: [
        '@hilde:smug A fork. Forged, not cast. Decent tines. Whoever made this, I\'d hire \'em.',
        '@hilde Better than the lad who made my last fork, and that was me. Drunk. During a thunderstorm.',
      ],
      mead: [
        '@hilde Mead? Honey-water for heroes who sing too much. Dwarves drink it at funerals, so the dead don\'t feel left out.',
        '@hilde:happy ...It\'s good, though. Don\'t tell the clan.',
      ],
      salts: [
        '@hilde:smug Bath salts. Surfacer, I bathe in the quench tank. Once a week, whether I need it or not.',
        '@hilde ...Lavender, is it? Hm. Might try it. Don\'t come round on Fifthday evenings.',
      ],
    },
    repeat: '@hilde:smug Another one? You\'ll have folk thinking you\'re courting me. ...Keep it up, then. Let \'em think.',
  },
  talk: [
    ['@hilde Oi. You. Hold these tongs. No, the *other* end. The end that isn\'t on fire. Gods, surfacers.'],
    ['@hilde:smug Dwarven proverb: "A good blade, a good ale, and a good grudge will see you through any winter." ...I got a lot of grudges. Want to hear \'em? It\'ll take a while.'],
    ['@hilde My da wanted me to marry a nice dwarf lad and make babies and shields. Made the shields. Skipped the rest. Best decision I ever made.'],
    ['She\'s sitting on an anvil, eating a meat pie in three bites.', '@hilde Lunch. Want some? Don\'t answer, you\'re having some. You\'re too skinny. Swing a hammer, you\'ll grow.'],
    ['@hilde:angry The elf from the library came in yesterday. Wanted a "delicate silver circlet." Delicate! I make *axes.* ...I made it anyway. It\'s alright, I s\'pose. Don\'t tell anyone.'],
    ['@hilde:blush You keep coming round the forge. People\'ll talk. ...Let \'em. Pass me that hammer.'],
    ['@hilde:angry Know what\'s wrong with surface houses? Windows. Great big holes in your walls so the weather can watch you eat.', '@hilde Under the mountain, if you want to see outside, you go *outside*, like a sensible person.'],
    ['She hands you a horseshoe fresh off the anvil. It\'s still warm enough to sting.', '@hilde Don\'t drop it. Don\'t flinch. ...Good.', '@hilde:smug That\'s a dwarven compliment, that is. "Didn\'t flinch." My da\'s said it to me twice in a hundred years.'],
    ['@hilde:angry Lad came in this morning wanting a sword that "glows when orcs are near."', '@hilde:smug Told him every sword glows when orcs are near, if you heat it up first and hit the orc with it. He didn\'t buy anything. Coward.'],
    ['@hilde I\'m a hundred and twelve, if you were wondering. Young, for a dwarf. Middling, for a grudge.', '@hilde:smug Oldest grudge in the family\'s nine hundred years old. Against a *goat.* We\'re very proud of it.'],
    { if: 'hilde_outdrank', lines: ['@hilde:smug Bought my fortieth round for you last night. Barkeep\'s started a tab on the wall called *Stonebrew\'s Shame.*', '@hilde:happy I\'m proud of it. When I die, frame it. Hang it over the bar.'] },
    { if: 'hilde_fern', lines: ['@hilde The fern at the Wyvern\'s been moved off the windowsill. Kept falling over. Barkeep says it\'s "never been the same."', '@hilde:blush I visit it. Bring it water. *Just* water. It\'s in recovery. Don\'t laugh, it\'s your fault.'] },
    { if: 'hilde_please', lines: ['@hilde Pass me the — *please* — the file.', 'She stops. She stares at her own hand like it\'s betrayed her.', '@hilde:angry Look at that. You\'ve got me *saying* it. First day you walked in here, cheeky as anything. Nobody\'s told a Stonebrew to say please in three hundred years.'] },
    { if: { stage: 3 }, lines: ['@hilde:blush Been sketching again. Every night, since the mine. Got thirty-one designs for a — never mind what for.', '@hilde:angry Shut up. Hand me the tongs. Don\'t smile at me. *Tongs.*'] },
  ],
  afterTalk: [
    ["@hilde Finished the new bed. Iron-oak, riveted, load-rated for a dragon. Took it for a test. Alone. Wasn't the same. Come round tonight."],
    ["She hands you a tiny silver charm, a hammer crossed with a rose.", "@hilde:blush Made it on my lunch break. Don't — just put it on. Don't make a thing of it. ...You're making a thing of it."],
    ["@hilde:smug The lads at the tavern asked why I'm whistling at the anvil. Told 'em I finally found good bellows help. They didn't believe me. Your fault."],
    ["@hilde:blush You smell like my forge now. Smoke and iron. I like it. Means everyone knows where you've been sleeping."],
    ["@hilde Wrote to my da. Told him about you. Three pages, front and back.", "@hilde:smug He wrote back one line: *\"Does the surfacer drink?\"* That's practically a blessing, from him. He'll be sharpening his tankard."],
    { if: 'hilde_forme', lines: ["She taps the necklace at your throat with one soot-black finger.", "@hilde:blush Still wearing it. Every day, like you said in the mine. I didn't think you meant it. Surfacers say things.", "@hilde Don't take it off. Ever. I'll know."] },
    { if: 'hilde_lifted', lines: ["@hilde:angry I've put a step by the workbench. So I can reach you myself. Didn't want you getting ideas about hauling me up there every time.", "@hilde:blush ...Haul me up there anyway. Now. Before the apprentice comes back."] },
    { if: 'hilde_shoved', lines: ["@hilde Went back to the old mine. Found the spot where you shoved me clear. Bolted an iron plaque to the wall.", "@hilde:smug It says: *HERE A SURFACER SAVED A DWARF IN A MINE.* Underneath, smaller: *Yes, really.*"] },
    { if: 'hilde_tongs', lines: ["She holds out her hand without looking up. You put the hammer in it before she asks.", "@hilde:blush ...You always know. Since the very first day. Tongs, that was. How d'you *do* that?"] },
    { if: 'hilde_date_picnic', lines: ["@hilde:happy Been lying in the grass on my lunch breaks. Looking at the sky. All that *up.*", "@hilde:smug Apprentice thinks I've had a head injury. Your fault, as usual."] },
  ],
  dateFav: 'picnic',
  dates: {
    dinner: {
      start: {
        text: [
          'The corner booth at the Tipsy Wyvern has candlelight, a white tablecloth and a bottle of the good wine. It was built for humans. Hilde\'s feet don\'t reach the floor, so she has dragged over a small keg to rest them on, and is glaring at the candle as if it owes her money.',
          '@hilde:angry This is for *romance*, is it? One little candle? Under the mountain we light a room so you can actually *see* your food. Surfacers eat in the dark like moles and call it "atmosphere."',
          'She has brought her own cutlery. It\'s hand-forged, heavy, and engraved with tiny hammers. She lays it out beside the tavern\'s with visible contempt.',
          '@hilde:smug Tavern forks. Bend if you look at \'em. Mine\'ll go through a roast boar and the table under it.',
          { if: { stage: 4 }, text: '@hilde:blush ...Polished \'em for tonight. Took an hour. Don\'t say anything.' },
          'The barkeep pours two glasses of wine. Hilde picks hers up by the bowl, then by the stem, then holds it at arm\'s length as if it might go off.',
        ],
        choices: [
          { text: 'Reach across the table and take her hand, in front of the whole tavern.', go: 'hand', aff: 6 },
          { text: 'Raise your glass, pinky out, very fancy. "To romance!"', go: 'toast', aff: 3 },
          { text: '"Your round, I believe."', go: 'round', aff: 5, if: 'hilde_outdrank' },
          { text: 'Swap the wine for two tankards of ale.', go: 'ale', aff: 4 },
        ],
      },
      hand: {
        text: [
          'You take her hand on the tablecloth. It\'s rough and warm and twice as strong as yours.',
          'Somebody at the bar whistles. Two of her regulars nudge each other. Hilde turns her head and *looks* at them, slowly, and the whistling stops as if it had been quenched.',
          'She doesn\'t let go. She eats the entire meal one-handed, rather than let go.',
          '@hilde:blush ...Let \'em look. Let the whole bloody town look.',
        ],
        next: 'done',
      },
      toast: {
        text: [
          'You lift your glass, pinky extended. Hilde squints at you, then copies you exactly: wine glass high, little finger stuck out like a sausage.',
          '@hilde To *romance.* Ugh. It hurts to say.',
          'You clink. Her glass, having met the full force of a dwarven toast, shatters. Wine goes everywhere. There is a stunned silence.',
          '@hilde:surprised ...They make \'em out of *sugar*, these things.',
          'The barkeep brings her a tankard without being asked. She clinks it against your glass very, very gently, and grins.',
        ],
        next: 'done',
      },
      round: {
        text: [
          'Hilde\'s head snaps up. Her eyes narrow. Then she roars with laughter so loud the candle goes out.',
          '@hilde:happy Ha! *HA!* Forever means forever! Barkeep! A round for my surfacer! And put it on the Shame!',
          'The barkeep, without a flicker of surprise, adds another mark to a long, long column on a slate behind the bar.',
          '@hilde:smug Forty-one. Ma always said I\'d end up owing somebody for the rest of my life. Thought she meant the bank.',
        ],
        next: 'done',
      },
      ale: {
        text: [
          'You catch the barkeep\'s eye, point at the wine and mime a tankard. Two minutes later the wine is gone and two foaming tankards sit in its place.',
          'Hilde looks at the ale. She looks at you. Something in her shoulders unclenches.',
          '@hilde:happy Oh, thank the *mountain.* I was going to drink that wine for you. I was going to *suffer.*',
          '@hilde:blush That\'s how you know it\'s serious, with a dwarf. We\'ll drink the bad stuff for you.',
        ],
        next: 'done',
      },
      done: {
        text: [
          'She walks you home afterwards, the full length of Market Street, knocking her shoulder into your hip every few steps.',
          '@hilde Candles. Tablecloths. Tiny glasses. Daft, the lot of it.',
          '@hilde:blush ...Same time next week?',
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          'The Moonlit Gardens are all clipped hedges, silver fountains and ornate wrought-iron gates. Hilde lasts four steps before she stops dead in front of one.',
          '@hilde:angry Who forged this? An *elf?* A blind elf? Look at the joins. *Look at them.* That scroll\'s been welded on with spit and hope.',
          'She grabs the gate, gives it a single expert shake, and finds the sagging hinge. Before you can stop her, she has pulled a hairpin out of her braid and is bending it into a new pin with her bare fingers.',
          '@hilde Hold this. And this. Don\'t let the gate swing. If a noble comes, tell \'em I\'m from the council.',
        ],
        choices: [
          { text: 'Hand her what she needs before she asks for it.', go: 'help', aff: 4 },
          { text: 'Pick a rose from the hedge and tuck it behind her ear while her hands are full.', go: 'rose', aff: 5, flag: 'hilde_rose' },
          { text: 'Keep watch for nobles. Badly.', go: 'watch', aff: 3 },
        ],
      },
      help: {
        text: [
          'She reaches back blind. You put a stone in her hand to use as a hammer. She reaches back again. You hand her the hairpin. She doesn\'t look round once.',
          '@hilde Good. Good. And the — ',
          'You\'re already holding the gate steady. She finishes the repair in under a minute. The gate swings smooth and silent for the first time in a decade.',
          '@hilde:blush ...You\'d make a decent apprentice, you know. Don\'t let it go to your head. Your head\'s big enough.',
        ],
        next: 'done',
      },
      rose: {
        text: [
          'Her hands are full of gate. You pick a red rose from the hedge, strip the thorns with your thumbnail and tuck it behind her ear, into the copper braid.',
          'She goes absolutely rigid. The gate creaks. You brace for an explosion.',
          'Hilde says nothing. She finishes the hinge. She wipes her hands on her trousers. She reaches up and touches the rose, very lightly, as if checking it\'s still there.',
          '@hilde:blush ...I hate roses.',
          'She doesn\'t take it out. She wears it all evening. When you mention it, she threatens to put you in the fountain.',
        ],
        next: 'done',
      },
      watch: {
        text: [
          'You stand guard. A noblewoman in a towering wig strolls around the corner, sees a soot-streaked dwarf dismantling her gate, and stops.',
          '@you She\'s from the council.',
          '@hilde:smug *Gate inspection,* madam. This one\'s a hazard. Could\'ve had your wig off.',
          'The noblewoman flees. Hilde laughs so hard she has to sit down on the edge of the fountain.',
        ],
        next: 'done',
      },
      done: {
        text: [
          'You end up on a hidden bench behind the hedges, watching the moon on the fountain. Hilde\'s boots don\'t reach the gravel, so she swings them.',
          { if: { stage: 4 }, text: 'She leans her head on your shoulder. Then, after a while, she climbs onto the bench on her knees, takes your face in both hands and kisses you, slow and thorough, like she\'s testing the temper of the steel.' },
          '@hilde:blush Not bad, these gardens. Ironwork\'s rubbish. But the company\'s alright.',
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          'Saltbreeze Harbor at sunset is gold and pink and glorious. Hilde will not set foot past the third plank of the pier.',
          '@hilde:angry Water. *Too much* water. You can\'t see the bottom! Where\'s the bottom? Who\'s holding the bottom up?',
          '@you Can\'t you swim?',
          '@hilde Dwarves don\'t *swim*, surfacer. Dwarves *sink.* Like anvils. Faster than anvils. Anvils have more sense than to go in the sea.',
          'She grips a mooring post with one hand and a paper of fried fish with the other, as if both of them might be swept away.',
        ],
        choices: [
          { text: 'Walk her out to the end of the pier, one plank at a time.', go: 'walk', aff: 6 },
          { text: 'Turn a crate over at the safe end and eat your fish there with her.', go: 'crate', aff: 4 },
          { text: '"I\'ll catch you if you fall in." [Might check 3]', check: { stat: 'might', dc: 3 }, pass: 'catch_win', fail: 'catch_fail' },
        ],
      },
      walk: {
        text: [
          'You take her hand. She takes your sleeve as well, and a fistful of your coat. You walk backwards, one plank at a time, telling her how deep the water is (lying), how sturdy the pier is (lying) and how good she\'s doing (true).',
          'At the end, she stands rigid as a statue, and then the sun touches the sea and turns everything to molten gold. Her grip loosens.',
          '@hilde:surprised ...It\'s going *in.* The sun\'s going into the water. Shouldn\'t it hiss? It ought to hiss. Every hot thing hisses in the quench.',
          '@hilde:blush ...It\'s pretty, though. Like a forge with the doors open. Don\'t let go of my hand.',
        ],
        next: 'done',
      },
      crate: {
        text: [
          'You flip an old fish crate upside down beside the harbourmaster\'s hut, at the very start of the pier, and pat it. Hilde sits down with enormous relief.',
          '@hilde:happy Now *this* is a proper view. Solid ground. Wall at your back. Sea where it belongs, over *there.*',
          'You eat fried fish out of the paper and watch the sunset from twenty yards further back than everyone else. She steals your last chip. You let her.',
        ],
        next: 'done',
      },
      catch_win: {
        text: [
          '@hilde You\'ll *what?*',
          'To prove it, you lift her off her feet and carry her, bodily, all the way to the end of the pier. She swears in Dwarvish the entire way, kicking, but she has her arms locked around your neck so tightly you can barely breathe.',
          'At the end, you don\'t put her down. You just stand there, holding her, while the sun goes into the sea.',
          '@hilde:blush ...Alright. You\'d catch me. Fine. Point made. You can put me down in about an hour.',
        ],
        next: 'done',
      },
      catch_fail: {
        text: [
          'To prove it, you take two confident steps backward toward the end of the pier, to show her how safe it is, and step straight off the side.',
          'There is a large splash. When you surface, spluttering, Hilde is lying flat on her belly on the planks, one arm stretched down to you, absolutely white with terror.',
          '@hilde:angry GRAB ON. *GRAB ON, YOU IDIOT.*',
          'She hauls you out one-handed, like a sack of ore. Then she sits on you on the pier until you promise never, ever to do that again.',
          '@hilde:sad ...You scared me. Don\'t. Not near *water.*',
        ],
        next: 'done',
      },
      done: {
        text: [
          'By the time the stars come out, she\'s loosened up enough to throw a fish bone into the harbor and watch it sink with grim satisfaction.',
          '@hilde:smug See? Sank. Like I said. Sea\'s for fish and fools.',
          '@hilde:blush ...And sunsets. Alright. Sunsets too.',
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          'Hilde arrives at the Whisperwood clearing with a picnic basket. It is an iron-bound strongbox with a handle welded on. Inside: a whole roast ham, a wheel of cheese the size of a cartwheel, two loaves, a jar of pickled onions and four tankards.',
          '@hilde:smug Picnic. Eating outside. Dwarves only eat outside when the mine\'s on fire. Thought I\'d try it when it isn\'t.',
          'She sits down on the blanket. Then she looks up. And up. And keeps looking up, at the vast, blue, cloud-streaked bowl of the sky, with no rock above it at all.',
          '@hilde:surprised ...That\'s a lot of *up.* Where\'s the ceiling? Who\'s holding it all up there?',
          'Her hand creeps sideways across the blanket and closes on your wrist.',
        ],
        choices: [
          { text: 'Lie back beside her. "Nothing\'s going to fall. Look at the clouds with me."', go: 'clouds', aff: 6 },
          { text: 'Challenge her to throw an axe at that stump. [Might check 2]', check: { stat: 'might', dc: 2 }, pass: 'axe_win', fail: 'axe_fail' },
          { text: '"Why did you pack enough food for a whole clan?"', go: 'food', aff: 3 },
        ],
      },
      clouds: {
        text: [
          'You lie back on the blanket. After a long moment, she lies back too, stiff as a plank, still holding your wrist.',
          'You point at a cloud. She grunts. You point at another. Slowly, she starts to point back.',
          '@hilde That one\'s iron ore. Look at the grain. That one\'s tin. That one\'s a nice bit of copper.',
          '@hilde:happy ...That one\'s just nice. Just a nice cloud. Doesn\'t have to be anything.',
          'Twenty minutes later, Hilde Stonebrew, master smith of Clichéton, is asleep in the sun with her mouth open, snoring like a pair of bellows, her hand still wrapped around your wrist.',
        ],
        next: 'done',
      },
      axe_win: {
        text: [
          'She produces a hand-axe from somewhere in her belt and gives it to you with a look of pure challenge. You throw. It spins end over end and buries itself in the dead centre of the stump with a deep, satisfying *thock.*',
          'Hilde forgets about the sky entirely.',
          '@hilde:surprised *Who taught you that?*',
          '@you You did. Sort of. I\'ve been watching you swing a hammer for weeks.',
          '@hilde:blush ...Well. Don\'t do it again. In front of me. Unless you want me to — just don\'t.',
        ],
        next: 'done',
      },
      axe_fail: {
        text: [
          'She produces a hand-axe from somewhere in her belt. You throw it. It bounces off the stump, ricochets off a tree, and lands squarely on the ham, which leaps out of the basket and rolls away down the slope.',
          'Hilde watches the ham go. Then she lies down flat on her back and laughs until she cries, kicking her boots in the air, the sky completely forgotten.',
          '@hilde:happy *The HAM.* Oh, the poor ham. Best throw I\'ve ever seen. I\'m having that carved on my tomb.',
        ],
        next: 'done',
      },
      food: {
        text: [
          '@hilde:smug Dwarves don\'t do "a little," surfacer. "A little" is a surface invention. Like windows. And forks that bend.',
          'She carves a slab of ham the size of a book and hands it to you on the point of a knife.',
          '@hilde Eat. You\'re still too skinny. I\'m not having my — I\'m not having my *bellows help* blowing away in a stiff wind.',
          'You notice she\'s stopped looking at the sky. She\'s looking at you instead. It seems to be helping.',
        ],
        next: 'done',
      },
      done: {
        text: [
          'By late afternoon the ham is gone, the cheese is half gone, and Hilde is lying in the grass with her head on your stomach, staring straight up at the sky without blinking.',
          { if: { stage: 4 }, text: 'She rolls over at some point, plants her chin on your chest and kisses you, unhurried, sun-warm, tasting of pickled onions and ale. It should not be romantic. It is enormously romantic.' },
          '@hilde:happy Ma used to tell me about the sky. Said it was the biggest roof in the world, and nobody built it.',
          '@hilde:blush ...Thought she was making it up. Glad I checked. Glad I checked with you.',
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'The Stonebrew Forge is a cavern of heat and noise. Sparks shower from an anvil where a stocky woman — barely four feet tall, but as broad across the shoulders as a door — is hammering a glowing blade into shape. Her braided copper hair is tied up in a leather band. Her arms are corded with muscle and freckled with burn scars.',
          '@hilde:angry — *stupid, stubborn, rock-headed* — oi! You! Don\'t just stand there gawking! Grab those bellows and PUMP!',
        ],
        aff: 10,
        choices: [
          { text: 'Grab the bellows and pump with all your strength. [Might check 1]', check: { stat: 'might', dc: 1 }, pass: 'pump_win', fail: 'pump_fail' },
          { text: '"Say please."', go: 'please', flag: 'hilde_please' },
          { text: 'Hand her the tongs she\'s reaching for instead.', go: 'tongs', flag: 'hilde_tongs' },
        ],
      },
      pump_win: {
        text: [
          'You heave on the bellows. The coals roar white-hot. She plunges the blade back in, pulls it out, hammers it twice more, then quenches it in a hiss of steam.',
          'She holds it up to the light. It\'s flawless.',
          '@hilde:smug Huh. Not bad. You\'ve got some meat on you after all.',
        ],
        aff: 6,
        next: 'name',
      },
      pump_fail: {
        text: [
          'You pump the bellows. They wheeze. You pump harder. They wheeze louder. She sighs, shoves you aside, and does it herself with one arm while hammering with the other.',
          '@hilde Surfacers. All noodle arms. We\'ll fix that.',
        ],
        aff: 3,
        next: 'name',
      },
      please: {
        text: [
          'She stops mid-swing and stares at you. Then she barks out a laugh.',
          '@hilde:happy *Please?* Ha! Cheeky! Fine. *Please* pump the bloody bellows before my blade cools, your highness.',
          'You pump. She grins the whole time.',
        ],
        aff: 5,
        next: 'name',
      },
      tongs: {
        text: [
          'She\'s reaching blindly behind her for something. You notice the tongs on the bench and press them into her hand.',
          'She grips them, pulls the blade out of the coals, and only then looks at you.',
          '@hilde:surprised ...You knew what I needed before I asked. Huh. Most people just get in the way.',
        ],
        aff: 6,
        next: 'name',
      },
      name: {
        text: [
          'She wipes her hands on her apron, leaving black streaks, and sticks one out. Her grip is like a vise.',
          '@hilde:smug Hilde Stonebrew. Master smith. Best in Clichéton. Best this side of the Ironpeaks, if I\'m honest, and I always am.',
          '@you {name}.',
          '@hilde {name}. You can come back, if you like. I always need a spare pair of hands. Bring ale.',
          'As you leave, you notice a battered leather sketchbook lying open on her workbench. On the page: a delicate, intricate drawing of a silver necklace, all filigree and tiny flowers. She snaps it shut the moment she sees you looking.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Hilde slams a tankard down in front of you at the Tipsy Wyvern. Then another. Then another. There are now twelve tankards on the table.',
          '@hilde:smug Right. Dwarven tradition. You want to be friends with a Stonebrew, you drink with a Stonebrew. First one to fall off their stool buys the next round. Forever.',
          '@you Forever?',
          '@hilde *Forever.* My cousin Durin\'s still paying for a round from fifty years ago.',
          'The whole tavern is gathering to watch.',
        ],
        choices: [
          { text: 'Drink! [Might check 2]', check: { stat: 'might', dc: 2 }, pass: 'drink_win', fail: 'drink_lose' },
          { text: 'Pour your ale into the potted plant when she isn\'t looking.', go: 'cheat', flag: 'hilde_fern' },
        ],
      },
      drink_win: {
        text: [
          'One. Two. Three. Five. Eight. The tavern is chanting. Hilde is grinning. You\'re sweating. Ten. Eleven.',
          'On the twelfth, she looks at you over the rim of her tankard with real respect. She drinks it. You drink yours.',
          'You both sit there, swaying gently, staring at each other.',
          'Then — slowly, majestically, like a felled oak — Hilde tips backward off her stool.',
          'The tavern explodes. Hilde lies on the floor, laughing so hard she can\'t breathe.',
          '@hilde:happy Nobody — *nobody* has outdrunk a Stonebrew since — HA! I\'m buying! Forever! You magnificent surfacer!',
        ],
        aff: 10,
        flag: 'hilde_outdrank',
        next: 'walk',
      },
      drink_lose: {
        text: [
          'One. Two. Three. Four. On the fifth, the room starts to spin. On the sixth, you are fairly sure there are two Hildes.',
          'On the seventh, you fall off your stool.',
          'Hilde peers down at you from very far away.',
          '@hilde:happy Seven! Not bad for a surfacer! Most of \'em fall at three!',
          'She hauls you up and drapes your arm over her shoulder.',
        ],
        aff: 5,
        next: 'walk',
      },
      cheat: {
        text: [
          'You discreetly pour your ale into the potted fern beside the table. And again. And again. Hilde drinks hers. By the tenth, she\'s swaying — and the fern is *definitely* swaying.',
          'On the twelfth, Hilde looks at you. Looks at the fern. Narrows her eyes.',
          '@hilde:angry ...That plant\'s drunker than I am.',
          'A long pause. Then she bursts out laughing.',
          '@hilde:happy Sneaky! Sneaky little surfacer! You know, in the Ironpeaks we\'d call that *tactics.* I like you.',
        ],
        aff: 7,
        next: 'walk',
      },
      walk: {
        text: [
          'Afterward, you walk her home through the cool night. She\'s humming a dwarven drinking song, badly. Halfway there, she stops under a lamppost and looks up at you.',
          '@hilde You know what\'s funny? I don\'t usually like people. They\'re loud and they lie and they want weapons and they never say thanks.',
          '@hilde:blush But you\'re alright. You\'re more\'n alright.',
          'She pokes you hard in the chest.',
          '@hilde:smug Don\'t let it go to your head.',
        ],
        choices: [
          { text: '"You\'re more than alright too, Hilde."', go: 'alright', aff: 6 },
          { text: '"Will you show me your sketchbook sometime?"', go: 'sketch', aff: 8, flag: 'hilde_sketch' },
        ],
      },
      alright: {
        text: [
          '@hilde:blush ...Pfft. Shut up.',
          'She bumps her shoulder against your hip — the highest she can reach — and leaves it there for the rest of the walk.',
        ],
        end: true,
      },
      sketch: {
        text: [
          'She stops dead. Even in the lamplight you can see her go red under the soot.',
          '@hilde:surprised You... you saw that.',
          '@hilde:sad It\'s nothing. Silly doodles. Stonebrews make *weapons*, not trinkets. My da\'d laugh me out of the clan.',
          '@you They looked beautiful.',
          'She doesn\'t answer for a long time.',
          '@hilde:blush ...Maybe. Someday. If you\'re very lucky and very quiet about it.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          '@hilde I need starsilver. For a commission. There\'s a vein in the old mine under the hills. Abandoned. Dangerous. Probably haunted. You coming?',
          'The mine is dark, narrow and very, very deep. Hilde leads the way with a lantern, completely at home, tapping the walls with her hammer and listening.',
          '@hilde:happy Hear that? Hollow. That\'s where the vein is. Now we just — ',
          'There\'s a groan from overhead. A crack. A rumble.',
          '@hilde:surprised ...*Oh, rocks.*',
          'The ceiling comes down.',
        ],
        choices: [
          { text: 'Shove Hilde clear of the falling rocks. [Might check 3]', check: { stat: 'might', dc: 3 }, pass: 'shove', fail: 'trapped' },
          { text: 'Trust her instincts — follow wherever she dives.', go: 'follow', aff: 5 },
        ],
      },
      shove: {
        text: [
          'You throw yourself at her and knock her into a side passage just as the tunnel collapses where she was standing. Rock thunders down. Dust fills the air.',
          'When it settles, you\'re both alive, pressed together in a small pocket of tunnel, sealed in by rubble. The lantern flickers on the floor.',
          'Hilde stares at you, wide-eyed.',
          '@hilde:surprised You... you pushed *me* out of the way. Nobody protects a dwarf in a mine. *We* protect *you.*',
        ],
        aff: 10,
        flag: 'hilde_shoved',
        next: 'dark',
      },
      follow: {
        text: [
          'She grabs your hand and dives sideways into a cleft in the rock. You go with her. The tunnel collapses behind you.',
          'When the dust settles, you\'re both alive, crammed into a small pocket of tunnel, sealed in by rubble.',
          '@hilde:smug Good. You listened. Most surfacers freeze. Freeze, and you\'re flat.',
        ],
        next: 'dark',
      },
      trapped: {
        text: [
          'You lunge for her, but she\'s faster: she grabs *you* and hauls you into a side passage as the ceiling comes down. A rock clips your shoulder. Then silence.',
          'You\'re both alive, pressed together in a cramped pocket of tunnel, sealed in by rubble.',
          '@hilde:angry You alright? Shoulder? ...Idiot. You were trying to save *me*, weren\'t you. In a *mine.* I\'m a *dwarf.*',
          'She doesn\'t sound angry. She sounds shaken.',
        ],
        aff: 6,
        next: 'dark',
      },
      dark: {
        text: [
          'It takes hours to dig out. Hilde works the rocks with her hammer, testing each one, while you haul them away. In the flickering light, sweating, exhausted, you talk.',
          { if: 'hilde_tongs', text: 'Every time she reaches back for a tool, you\'re already holding it out. After the fifth time she stops reaching and just opens her hand.' },
          '@hilde:sad My ma was a jeweler. Best in the Ironpeaks. Made a crown for the Mountain King. Da said it was a waste — "real dwarves make steel." She stopped making jewelry after they married.',
          '@hilde She died when I was forty. Young, for a dwarf. I found her old tools in the attic. I\'ve been drawing ever since. I\'ve just never had the guts to *make* any of it.',
          { if: 'hilde_sketch', text: '@hilde:blush You asked to see the sketchbook. Under the lamppost. Nobody\'s ever asked. I nearly showed you right there, drunk as a lord. Glad I didn\'t. Wanted to be sober for it.' },
          'She pauses, a stone in each hand.',
          '@hilde:sad I\'m the bravest smith in Clichéton. I\'ve forged blades in dragonfire. And I\'m scared of a *necklace.*',
        ],
        choices: [
          { text: '"Then make one. For me. I\'ll wear it every day."', go: 'forme', aff: 10, flag: 'hilde_forme' },
          { text: '"Your mother would be proud of you either way."', go: 'proud', aff: 8 },
        ],
      },
      forme: {
        text: [
          'She stops digging. She looks at you in the lantern-light for a long, long moment.',
          '@hilde:surprised ...You\'d wear it? Dwarf-made? Not even a *weapon?*',
          '@you Every day.',
          'She turns back to the rocks quickly. You hear her sniff, once, very hard. She says it\'s the dust.',
          'Finally, a gap opens in the rubble, and moonlight spills in. She grabs your hand and doesn\'t let go all the way home.',
        ],
        end: true,
      },
      proud: {
        text: [
          '@hilde:sad You don\'t know that.',
          '@you I know she made a crown for a king, and her daughter forges blades in dragonfire. Seems like the apple didn\'t fall far.',
          'She laughs — a small, wet, startled laugh.',
          '@hilde:blush ...Smooth-talking surfacer.',
          'When you finally break through to moonlight, she pulls you into a hug so tight your ribs creak. It lasts a long time.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Hilde shuts the forge early. She\'s never done that before. She stands by the anvil in the glow of the banked coals, scrubbed clean of soot for once, copper hair loose around her shoulders. She looks nervous. Hilde Stonebrew never looks nervous.',
          '@hilde:blush Close your eyes. Hold out your hand.',
          'Something cool and delicate drops into your palm. You open your eyes. It\'s a necklace: fine silver filigree twisted into tiny flowers and vines, with a single starsilver pendant shaped like a hammer crossed with a rose. It is the most beautiful thing you\'ve ever seen.',
          '@hilde First piece. Took me nine nights. Ruined about forty tries. The hammer\'s for me. The rose is... well. You.',
          { if: 'hilde_forme', text: '@hilde:smug You said you\'d wear it every day. In the mine. I\'m holding you to that. I\'ve got a very long memory and a very big hammer.' },
          { if: 'hilde_shoved', text: '@hilde The starsilver\'s from the vein in the mine. The one that nearly buried me. Would have, if some daft surfacer hadn\'t thrown themselves at me. Seemed right to use it for you.' },
          '@hilde:sad Is it — is it any good?',
        ],
        choices: [
          { text: '"Put it on me."', go: 'wear', aff: 10 },
          { text: 'Lift her up onto the workbench so she\'s at eye level. [Might check 4]', check: { stat: 'might', dc: 4 }, pass: 'lift', fail: 'wear' },
        ],
      },
      wear: {
        text: [
          'She steps up onto an anvil to reach and fastens it around your neck with hands that shake slightly. She smooths it against your collarbone with one rough, scarred thumb.',
          '@hilde:smug ...Looks good on you. Course it does. *I* made it.',
          'And then she grabs your collar and kisses you, standing on the anvil, her hands fisted in your shirt like she\'s afraid you\'ll get away.',
        ],
        next: 'night',
      },
      lift: {
        text: [
          'You take her by the waist and lift her — not an easy thing, she\'s solid muscle — and set her on the high workbench so that, for once, her eyes are level with yours.',
          'She blinks at you. Her face goes crimson.',
          '@hilde:angry Oi — I\'m not a *sack of ore* — ',
          '@you I know. I just wanted to see you properly.',
          'Her protest dies. She puts the necklace on you herself, slowly, eyes never leaving yours.',
          '@hilde:blush ...Well. Now you\'ve seen me.',
          'She pulls you in and kisses you, fierce and certain.',
        ],
        aff: 14,
        flag: 'hilde_lifted',
        next: 'night',
      },
      night: {
        text: [
          "She tastes like ale and smoke. Her hands are rough and strong and surprisingly gentle. She swears under her breath in Dwarvish, fondly you think, every time you make her gasp.",
          "@hilde:smug Right. Shirt off. I've been looking at your arms swinging my hammer for a month. I want a proper look.",
          "She doesn't wait. She hauls your shirt over your head with one hand and gives your chest an appraising, craftswoman's once-over, as if checking the temper on a blade.",
          "@hilde ...Huh. Good. Strong. Decent work. You've been keeping up with the bellows.",
          "Then she pulls off her own leather apron, then the sweat-soaked linen underneath. She's all muscle and freckles and old burn scars, and she plants her hands on her hips, daring you to say something. You don't say anything. You kiss the scar on her collarbone instead, and her whole body jolts.",
          "@hilde:blush *Oi* — that's — warn a woman — no, don't stop, I didn't say *stop* —",
          "There's a cot in the back room of the forge where she sleeps during long commissions. It isn't built for two, and it doesn't survive the night. You end up on a pile of leather aprons by the banked coals, warm red light on her skin.",
          "She's the way she is with everything: honest, direct, hard-working, and determined to do the job properly. She tells you exactly what she likes in plain words. She praises you like an apprentice who's finally got the technique right. At one point she grins up at you, hair wild, and says *we're not done until it's right*, and you laugh so hard you can't breathe...",
          "...",
          "Afterward, she lies sprawled on her back on the aprons, soot smudged on both of you, grinning at the rafters.",
          "@hilde:happy Ha. Well. That's the best thing I've ever made, and I didn't even use a hammer.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake on the forge floor in the grey dawn, the cot in splinters beside you. Hilde is sitting cross-legged on the anvil wearing your shirt, sketching furiously in her leather book.",
          "@hilde Morning. Don't move. I'm designing you a ring.",
          "@you A ring?",
          "@hilde:blush Shut up. Don't read into it. ...Read into it a little.",
          { if: 'hilde_lifted', text: "@hilde:smug And before you start: I've checked the workbench. You put a dent in it, lifting me up there. I'm leaving the dent. It's a good dent." },
          "She looks over the top of the book at you, then at the wreckage of the cot.",
          "@hilde:angry I've built siege engines that took less punishment than that cot. Forty years it lasted. *Forty.*",
        ],
        choices: [
          { text: "\"Build a sturdier one. I'll help.\"", go: "build", aff: 6 },
          { text: "\"Show me the ring design.\"", go: "design", aff: 6, flag: 'hilde_ring' },
          { text: "Wipe the soot off her nose.", go: "soot", aff: 5 },
        ],
      },
      build: {
        text: [
          "@hilde:happy Now you're talking. Proper dwarven bed. Iron frame. Riveted joints. Load-tested.",
          "@you Load-tested how?",
          "She grins, slow and wicked.",
          "@hilde:smug *Thoroughly.*",
          "You spend the day building it together. It's the most beautiful bed in Clichéton. She engraves your initials on the headboard when she thinks you're not looking.",
        ],
        end: true,
      },
      design: {
        text: [
          "She hesitates. Then she turns the book around.",
          "It's a ring: two bands, one of starsilver and one of dwarven gold, braided together like two strands of hair. Around the edge, in tiny Dwarvish runes, she's written something.",
          "@you What does it say?",
          "@hilde:blush ...Says \"forged together.\" It's an old dwarf thing. Don't — stop smiling at me like that — I'll put you in the quench tank —",
          "She doesn't. She lets you kiss her instead, and the book falls off the anvil.",
        ],
        end: true,
      },
      soot: {
        text: [
          "You reach up and brush the soot off the end of her nose with your thumb. She goes still. Then, very slowly, she turns pink under the freckles.",
          "@hilde:blush ...Soft. You're going soft on me, surfacer.",
          "@you You like it.",
          "@hilde:happy I *love* it. Gods help me. Come here.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Hilde climbs the festival hill with a keg on her shoulder and a wooden box under her arm. She plants herself beside you, cracks the keg, pours two tankards, and hands you one.',
          '@hilde Right. Starfall. Dwarves don\'t do this, you know. We live underground. Never seen the stars fall. Never cared to.',
          '@hilde:blush Thought I\'d give it a go. With you.',
          'When the stars start to fall, she goes completely silent, her mouth hanging open, her tankard forgotten in her hand.',
          '@hilde:surprised ...By my beard. Ma would\'ve loved this. All that silver. All that *light.*',
          'She sets the tankard down. She picks up the box. She puts it down again. She clears her throat three times.',
          '@hilde:sad Right. I had a speech. Forged it last night, tempered it and everything. It\'s gone. Hammered flat. Bloody stars.',
        ],
        choices: [
          { text: 'Wait. Let her find the words.', go: 'ring' },
          { text: 'Beat her to it. Get down on one knee.', go: 'kneel', if: ['hilde_sketch', { any: ['hilde_forme', 'hilde_lifted', 'hilde_rose'] }] },
          { text: '"Ask me the dwarven way, Hilde. Properly."', go: 'clan', if: { any: ['hilde_outdrank', 'hilde_shoved'] } },
        ],
      },
      ring: {
        text: [
          'She opens the wooden box. Inside, on a bed of velvet, is a ring: a band of starsilver and dwarven gold, braided together like two strands of hair, set with a tiny chip of fallen star that glows faintly in the dark.',
          { if: 'hilde_ring', text: 'It\'s the ring from the sketchbook — the one she was drawing on the anvil that first morning, wearing your shirt, telling you not to read into it.' },
          '@hilde:blush Dwarves don\'t kneel. Bad for the knees. So I\'m just going to stand here and ask.',
          '@hilde Will you be my — ah, bloody hell — will you marry me, you ridiculous surfacer?',
          { if: 'hilde_please', text: '@hilde:smug ...*Please.* There. You made me say it the day we met. Been saving the next one for this.' },
          'You say yes. She roars with laughter, picks you up — easily, she could always pick you up — and spins you around under the falling stars while half the hill applauds.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'The Stonebrew Forge gets a new sign: *STONEBREW & {name} — Weapons, Armor & Fine Jewelry.* The jewelry sells faster than the axes. Hilde complains about this constantly and is secretly delighted.',
          'Her da comes down from the Ironpeaks for the wedding. He grumbles about surfacers. Then he sees the necklace you\'re wearing, and the filigree on it, and he goes very quiet and has to step outside for a while.',
          'When he comes back, he hugs his daughter for the first time in fifty years.',
          { if: 'hilde_fern', text: 'The fern from the Tipsy Wyvern attends the wedding in a place of honour by the cake. It has been sober for a year. Hilde gives a short speech in its honour. Nobody else understands it. You cry anyway.' },
          'You learn to swing a hammer. She learns to say "I love you" without immediately adding "shut up." It takes about the same amount of practice.',
          'And every Starfall, the two of you climb the hill with a keg and a box, and she gives you something new she\'s made — something delicate and impossible and beautiful — and says "Don\'t read into it."',
          'You always read into it.',
        ],
        ending: 'hilde',
      },
      kneel: {
        text: [
          'Before she can open the box, you get down on one knee in the grass in front of her.',
          'Hilde stares at you. She looks around wildly, as if someone might be playing a trick on her.',
          '@hilde:surprised What are you — get *up* — dwarves don\'t kneel — bad for the knees —',
          '@you I\'m not a dwarf.',
          'Her face crumples. Hilde Stonebrew, master smith, the gruffest woman in Clichéton, bursts into tears — loud, ugly, furious tears — in front of the entire festival.',
          '@hilde:sad *Don\'t you dare.* Don\'t you DARE tell anyone. I\'ve wanted some idiot to do this since I was twelve. On a hill. Under the stars. Like in the elf ballads. I\'ve *read* the elf ballads. All of them. I hid them inside a book about ore smelting.',
          { if: 'hilde_rose', text: '@hilde:blush I kept that rose. From the gardens. Pressed it in the sketchbook. It\'s gone all flat and brown. I look at it every bloody night.' },
          '@you Hilde Stonebrew. Will you marry me?',
          '@hilde:happy YES. Yes. Yes, you ridiculous — yes. Get up. No, stay down there a bit. No, get up, I want to kiss you.',
          'She opens the box and shoves the ring at you so hard you nearly fall over. Then she unfolds a crumpled piece of paper from her pocket.',
          '@hilde:blush I wrote you a poem. It\'s terrible. Shut up. Listen.',
          'It is in Dwarvish. It rhymes "anvil" with "anvil" four times. It is the most beautiful thing you have ever heard.',
        ],
        next: 'kneel_epilogue',
      },
      kneel_epilogue: {
        text: [
          '*Some time later...*',
          'It turns out that Hilde Stonebrew, once she has stopped pretending, is the most relentlessly romantic person in the kingdom of Generic FantasyLandia.',
          'She forges you an iron rose every week. Real roses die. Iron ones don\'t. That, she says, is the whole point. Within three years your garden is full of them, rusting gently into shades of red and brown, and people come from the next town to look.',
          'She still mocks elves. She also goes to every single poetry evening at the Grand Library, sits in the back row with her arms crossed, and weeps openly. The elves have started saving her a seat.',
          'She remembers every anniversary: the day you met, the night of the twelve tankards, the day of the mine, the first night at the forge. She marks each one with something handmade and a speech she claims is "nothing, shut up." The speeches get longer every year.',
          'Her da comes down from the Ironpeaks for the wedding, sees his daughter in her mother\'s old silver circlet, reciting a poem she wrote herself in front of two hundred guests, and has to sit down on a barrel.',
          '@hilde:smug Problem, Da?',
          'He shakes his head. He doesn\'t trust his voice. Later, much later, you catch him by the keg, rereading a copy of the poem.',
          'Every Starfall, you climb the hill together. Every Starfall, you kneel. And every Starfall, Hilde Stonebrew cries and tells you that dwarves don\'t kneel, and to get up, and not to dare tell anyone.',
          'Everyone knows.',
        ],
        ending: 'hilde_romantic',
      },
      clan: {
        text: [
          'Hilde goes very still. Then she grins, slow and enormous, all teeth.',
          '@hilde:smug The *dwarven* way? You don\'t know what you\'re asking, surfacer.',
          '@hilde The dwarven way\'s not on a hill. It\'s under the mountain. In the Great Hall of the Ironpeaks. In front of the whole clan. In front of my *da.*',
          '@hilde:happy There\'s a keg the size of a horse. There\'s a stone you have to carry up four hundred steps. There\'s a shield you forge yourself, and I forge you one, and we swap \'em, and then you\'re a Stonebrew till the mountain falls down.',
          { if: 'hilde_outdrank', text: '@hilde And the elders drink with you first. You\'ll be fine. You drank me under the table. Nobody\'s done that in two hundred years. They\'ll have heard. They\'ll be *terrified.*' },
          { if: 'hilde_shoved', text: '@hilde:blush And the stone. You\'ll manage the stone. You shoved a dwarf out from under a mountain. You can carry a little bit of one up some stairs.' },
          '@you When do we leave?',
          'She throws back her head and roars with laughter at the falling stars, and puts the wooden box back under her arm, unopened.',
          '@hilde:happy This stays shut till the Great Hall. We do this *right.*',
        ],
        next: 'clan_epilogue',
      },
      clan_epilogue: {
        text: [
          '*Some time later...*',
          'The journey to the Ironpeaks takes three weeks. The trials take three days.',
          'On the first day, you drink with the clan elders, nine grey-bearded dwarves who have not lost a drinking contest in a combined three thousand years. You do not fall off your stool. Two of them do. The clan begins, very quietly, to take bets.',
          'On the second day, you carry a block of raw granite up the four hundred steps of the Great Stair, with Hilde walking backwards ahead of you the whole way, bellowing insults that are, in Dwarvish, words of love. You make it. You lie on the top step for an hour afterwards. She sits beside you and feeds you ale.',
          'On the third day, you exchange shields. Hers is a masterpiece: starsilver rim, oak core, a hammer crossed with a rose embossed on the boss. Yours is lopsided and dented and you burned yourself four times making it.',
          '@hilde:blush Best shield I\'ve ever seen. Don\'t you dare fix it.',
          'Her da, Boldur Stonebrew, looks at the two of you for a long, silent minute in front of the whole clan. Then he takes the great Book of Grudges down from its shelf, finds the page he started the day her letter arrived — "the surfacer who stole my daughter" — and, with enormous ceremony, crosses it out.',
          'You are a Stonebrew now. You spend the summers in Clichéton, at the forge, and the winters under the mountain, in the warm and the dark, with a clan of four hundred dwarves who argue about everything and would die for you. Your shield hangs over the hearth in the Great Hall.',
          'Everyone who visits asks who made the ugly one. Hilde tells them, every time, with her chest puffed out like a bellows.',
        ],
        ending: 'hilde_shield',
      },
    },
  },
});
