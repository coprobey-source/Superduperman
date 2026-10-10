FL.addCharacter({
  id: 'ignivara',
  name: 'Ignivara the Crimson',
  short: 'Ignivara',
  trope: 'Proud Hoarding Dragon Girl',
  color: '#ff5a36',
  favStat: 'might',
  endingTitle: 'The Most Precious Treasure',
  endings: {
    ignivara_hoard: 'Item Forty-One Thousand, Six Hundred and Nine',
    ignivara_sky: 'The Dragon Who Let Go',
  },
  teaser: 'A woman with crimson horns and a long scaled tail lounges on a mountain of gold, counting coins.',
  blurb: 'A three-thousand-year-old red dragon who spends most of her time in human form, because it\'s easier to count coins with fingers. Haughty, possessive, vain and fiercely territorial. She has never shared anything in her life. She has also never met anything she wanted more than gold. Until now.',
  schedule: ['peak', 'peak', null],
  gifts: { love: ['gem'], like: ['mirror', 'comb', 'dagger', 'fork', 'polish', 'relic'], hate: ['plushie', 'herbs'] },
  giftLines: {
    love: ['Her pupils narrow to slits. Her tail lashes. Smoke curls from her nostrils.', '@ignivara:happy Mine. *Mine.* Oh, look at the *facets* on it. Look how it *sparkles.*', 'She clutches it to her chest and growls at you, then seems to remember you gave it to her.', '@ignivara:blush ...Thank you. You may stay in my presence a while longer. A *long* while.'],
    like: '@ignivara:smug Ooh, shiny. Acceptable tribute! It shall go in the hoard. Third pile from the left. The *good* pile.',
    neutral: '@ignivara It doesn\'t sparkle. Why would you give a dragon something that doesn\'t sparkle? ...Fine. It goes in the "maybe" pile.',
    hate: ['She stares at it in mounting outrage.', '@ignivara:angry Do I look like a *hatchling* to you? Do I look like a *goat?* This is an insult to dragonkind!', 'She incinerates it. Politely.'],
    special: {
      gem: ['She snatches the sapphire out of your hand before you have finished holding it out. She holds it up to the light. She holds it up to the other light. She licks it.', '@ignivara:surprised Flawless. *Flawless.* Do you know how rare that is? I have eleven thousand gemstones and *nine* are flawless. This is ten.', '@ignivara:blush ...I am naming it after you. It is the only thing in my hoard with a name. Do not tell the other gems. They will be unbearable.'],
      fork: ['She turns the fork over, sniffs it, and taps a tine against her fang.', '@ignivara:smug Silver! A silver fork! — no. Wait.', 'She bites it.', '@ignivara:angry *Pewter.* It is PEWTER. You have given a three-thousand-year-old dragon a *pewter fork.*', 'She puts it carefully in the good pile anyway.', '@ignivara:blush ...It is a very *confident* pewter.'],
      mirror: ['She looks into the gilded mirror. Then she keeps looking into it. A minute passes.', '@ignivara:smug Oh, she\'s *gorgeous.* Who is she? Is she single?', '@ignivara:happy I\'m joking. I know who she is. That is the most valuable thing in this cave, after you, and before the gold.'],
      polish: ['She opens the little bottle of glitter polish and gasps so hard a small flame comes out.', '@ignivara:surprised It\'s *liquid sparkle.* You can *wear* sparkle? On your *claws?*', 'She paints all ten claws immediately, badly, and holds them up to the cave mouth so they catch the sun.', '@ignivara:happy I am now the shiniest thing I own. This is the best day of my life. Do not tell the gems.'],
      relic: ['She opens the tiny gilded reliquary, peers at the knucklebone, then scrapes the gilding with one claw.', '@ignivara:smug Gilt. Over *tin.* Three coats, very thin, applied by somebody in a hurry who sweated on it. Your merchant is a crook.', '@ignivara:happy I respect him enormously. It goes in the good pile, under "Excellent Forgeries." It is a very large section.'],
      plushie: ['She holds the stuffed bunny at arm\'s length by one ear. It dangles. Its button eyes stare at her.', '@ignivara:angry It is *soft.* It has no *resale value.* It is looking at me.', 'A long pause.', '@ignivara:sad ...Why is it looking at me like that. Take it away. Take it away before I *feel* something.', 'She incinerates it, but slowly, and she looks sorry.'],
    },
    repeat: '@ignivara:smug Another one? Good. Dragons don\'t believe in "too many." There is no such thing as too many. There is only "not enough cave."',
  },
  talk: [
    ['@ignivara:smug Mortal! You climbed my mountain again. You are very persistent. Like a barnacle. A cute barnacle.'],
    ['@ignivara:happy I have forty-one thousand, six hundred and eight gold coins. I know because I count them every morning. Twice. Once for accuracy and once for *pleasure.*'],
    ['@ignivara Knights keep coming to slay me. It\'s so tedious. They always make speeches. I always eat their horses. Not the knights! Just the horses. Usually.'],
    ['She is lying on her stomach on the gold, chin on her hands, tail swaying lazily.', '@ignivara:smug Come here. Lie on the gold. It\'s very comfortable. No, it isn\'t, it\'s lumpy, but it *feels* comfortable. Emotionally.'],
    ['@ignivara:angry Other dragons think I\'m vain. I am not vain. I am *accurately aware of my magnificence.* There\'s a difference.'],
    ['@ignivara:sad Do you know why dragons hoard? Because everything else leaves. Gold doesn\'t. Gold stays exactly where you put it.'],
    ['She looks you up and down with narrowed golden eyes, the way a pawnbroker looks at a watch.', '@ignivara:smug Boots: four coppers. Belt: two, and that\'s generous. Cloak: you should be paying *them.* Face...', 'She stops. She looks away.', '@ignivara:blush Face: not for sale. Moving on.'],
    ['@ignivara My cousin Verdigrax hoards spoons. Only spoons. Nine hundred thousand spoons in a cave in the north.', '@ignivara:angry The family does not discuss Verdigrax. At the last gathering, she brought a *ladle* and called it "a big spoon." There was a fire. Several fires.'],
    ['@ignivara Shall I tell you why I sleep on the gold? If anyone so much as touches a single coin, I *hear* it. Every coin has its own little voice.', '@ignivara:blush ...Also it\'s warm. Gold holds heat. A dragon likes to be warm. You are also warm. That is not relevant. I don\'t know why I said that.'],
    { if: 'ignivara_copper', lines: ['She opens a small velvet-lined box and shows you what is inside: one copper coin, polished until it glows.', '@ignivara:blush Your coin. From the first day. It\'s worth one copper. I keep it in its own box, apart from the others.', '@ignivara:smug It is worth more than the crown of King Aldous the Bald. I have checked the market. The market is *wrong.*'] },
    { if: 'ignivara_tail', lines: ['@ignivara:angry I lifted my tail this morning and checked underneath. Nothing. Then I checked again at noon.', '@ignivara:sad It\'s your fault. You found a coin under there *once,* and now I can\'t stop *checking.* I have become paranoid about my own tail.'] },
    { if: 'ignivara_flattered', lines: ['@ignivara:smug Say the thing again. The first thing you ever said to me. "Your hoard is magnificent. So are you."', '@ignivara:blush ...Thank you. I\'m keeping a tally. That was fourteen. I\'m aiming for a round number. A *large* round number.'] },
    { if: 'ignivara_bluffed', lines: ['@ignivara:smug The Adventurers\' Guild sent me a form. A *Heritage Monster Registration* form. Your lie has become *paperwork.*', '@ignivara:happy I filled it in. Under "Species" I wrote "Magnificent." Under "Threat Level" I wrote "Yes." Under "Next of Kin" I wrote your name. I don\'t know why. The box was there.'] },
    { if: { stage: 3 }, lines: ['A horse is standing in the back of the cave, chewing on a cushion. It is wearing a small golden crown.', '@ignivara:blush The knights left it. On the mountain, the day you stood up for me. I didn\'t eat it. I thought about what you would say, so I didn\'t eat it, and then I just... kept not eating it.', '@ignivara:smug Its name is Biscuit. It is my second most valuable possession that isn\'t made of metal.'] },
  ],
  afterTalk: [
    ["@ignivara:blush I've started a new pile in the hoard. It's just things you've touched. A cup. A boot. A hair from your pillow. It is the most valuable pile. Do not tell the other dragons."],
    ["She sniffs your neck, very pointedly.", "@ignivara:smug You smell like smoke. *My* smoke. Good. Let everyone in town know whose treasure you are."],
    ["@ignivara:angry I counted my coins this morning. I got to forty-one thousand and then I started thinking about you and lost count. I had to start *over.* Three times."],
    ["@ignivara I've cleared a new space in the nest. Bigger. More silks. Further from the gold.", "A small, smug curl of smoke.", "@ignivara:smug Fewer melting incidents."],
    ["@ignivara:happy I've changed my morning count. It used to be twice: once for accuracy and once for pleasure.", "@ignivara:blush Now it's once for accuracy, and then I come and find you. The pleasure part has *moved.*"],
    { if: 'ignivara_ring', lines: ["She holds up her hand. The lopsided little ring from that night's gold is on her finger. It used to sit on the highest pile.", "@ignivara:blush I took it off the pile. I wanted it *on me.* I have never once in three thousand years wanted to wear a treasure instead of sleep on it.", "@ignivara:smug It is ugly. It is lumpy. It is the best thing anyone has ever made me.", { if: { met: 'hilde' }, text: "@ignivara:smug Hilde offered to fix the shape. I threatened her. Politely.", else: "@ignivara:smug The smith offered to fix the shape. I threatened the smith. Politely." }] },
    { if: 'ignivara_hoarded', lines: ["She reaches out and polishes the little brass tag at your wrist with her sleeve.", "@ignivara:happy Item forty-one thousand, six hundred and nine. Condition: excellent. Value: incalculable. Location: *right here.*", "@ignivara:smug I polish it every morning. Some items need more care than others. You are a *high-maintenance* item."] },
    { if: 'ignivara_free', lines: ["@ignivara:sad You walked down the mountain yesterday. To town. And I sat at the cave mouth and I counted the hours. Nineteen.", "@ignivara:happy And then you came back. You *always* come back. I keep waiting to need to hold on tighter, and I keep not needing to. It's the strangest thing that has ever happened to me."] },
    { if: 'ignivara_date_dinner', lines: ["@ignivara:smug I went back to the tavern. Alone. In disguise. I ordered the gold-leaf platter.", "@ignivara:sad It was not the same. There was nobody across the table to scold me about the spoons, or to help. Come back with me. I need an *accomplice.*"] },
  ],
  dateFav: 'dinner',
  dates: {
    dinner: {
      start: {
        text: [
          'Ignivara arrives at the Tipsy Wyvern in human form, wearing what appears to be her entire jewelry collection at once: three crowns, stacked; forty bracelets; earrings so heavy her ears are leaning. She clanks when she sits down.',
          '@ignivara:smug I dressed down. So as not to intimidate the peasants.',
          'She picks up a spoon, examines it, bites it, and slips it into her sleeve. Then the fork. Then the salt cellar.',
          '@ignivara:blush What? It\'s *tribute.* They put it on the table in front of me. That\'s how tribute *works.*',
          { if: { stage: 4 }, text: 'Under the table, her tail curls around your ankle and then, slowly, all the way up to your knee. Her face stays perfectly haughty. A small flame escapes her nostril.' },
        ],
        choices: [
          { text: 'Order the most expensive thing on the menu: the Wyvern Platter, dusted in real gold leaf.', go: 'gold', aff: 5 },
          { text: 'Quietly steal a spoon for her, too.', go: 'spoon', aff: 4 },
          { text: '"Ignivara. Put the cutlery back."', go: 'back' },
        ],
      },
      gold: {
        text: [
          'The platter arrives glittering. The gold leaf is so thin it trembles when she breathes. She does not touch it. She breathes on it, very gently, again and again, just to watch it shiver.',
          '@ignivara:surprised You can *eat* it? Mortals *eat* gold? Here? In the *open?*',
          'She takes one flake on the tip of her claw, places it on her tongue and closes her eyes.',
          '@ignivara:happy It tastes like *nothing.* It tastes like *being rich.* It\'s the most delicious nothing I have ever eaten.',
          'She eats every flake. She does not touch the wyvern. Then she pays the bill in gold coins, one at a time, wincing at each one, and leaves a tip so enormous that the barmaid has to sit down.',
        ],
        next: 'close',
      },
      spoon: {
        text: [
          'While she is busy appraising the candlestick, you slip a spoon off the next table and slide it across the cloth to her.',
          'She looks at the spoon. She looks at you. Her eyes go very wide and very golden.',
          '@ignivara:blush You *stole* for me. You *hoarded.* On my behalf.',
          '@ignivara:smug That\'s the most romantic thing any mortal has ever done. Knights write me poems. Poems don\'t go *in* anything.',
          'She keeps the spoon. It goes in the good pile. Later, she has it engraved.',
        ],
        next: 'close',
      },
      back: {
        text: [
          '@ignivara:angry *Back?* Give *back?* Do you know how many times in three thousand years I have given anything *back?*',
          'Her pupils narrow to slits. You hold her gaze. The salt cellar wobbles in her sleeve.',
          'Very, very slowly, she lays the spoon, the fork and the salt cellar on the table. Then she reaches into her bracelets, takes off a gold coin, and puts it next to them, as if she has paid a ransom.',
          '@ignivara:sad There. I bought them. Now they are *legally* mine, and I am leaving them here. On purpose. To be *generous.* Look at me being generous.',
          'She looks absolutely miserable. The barkeep looks at the coin and nearly weeps with joy.',
        ],
        next: 'close',
      },
      close: {
        text: [
          'On the walk out, she clanks. She also, unmistakably, swings your joined hands like a dragon a quarter of her age, which is to say a giddy seven hundred and fifty.',
          '@ignivara:happy That was a successful raid. Let\'s do it again. Next time, I\'ll bring a *bag.*',
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          'Ignivara strolls through the Moonlit Gardens with her nose in the air, unimpressed by everything.',
          '@ignivara The roses: they don\'t sparkle. The hedges: they don\'t sparkle. The statues: marble, which is a *rock,* which is what you have when you can\'t afford metal.',
          'Then she stops dead at the great central fountain. The bottom of the pool is covered in coins. Hundreds of them. Copper and silver and here and there a gold, glinting up through the water.',
          '@ignivara:surprised Who *left* these here? Who just — *left* them? In *water?*',
          '@you People throw them in and make a wish.',
          '@ignivara:angry They throw MONEY into a POND and WALK AWAY?! Are mortals *insane?*',
          'Her claws are already flexing toward the water.',
        ],
        choices: [
          { text: 'Put one of your own coins in her palm. "Make a wish with me."', go: 'wish', aff: 6 },
          { text: 'Help her fish out the gold ones while nobody\'s looking.', go: 'fish' },
        ],
      },
      wish: {
        text: [
          'She stares at the coin in her hand as if you have asked her to throw away a kidney.',
          '@ignivara:sad You want me to *give it to the water.* On *purpose.*',
          'It takes her three full minutes. She raises her hand twice and lowers it twice. On the third try she shuts her eyes, makes a strangled noise, and flicks the coin into the fountain. It sinks with a little *plink.*',
          'She stands there trembling.',
          '@ignivara:surprised I did it. I gave something away. To *nothing.* For a *wish.*',
          '@you What did you wish for?',
          '@ignivara:blush I\'m not telling you. Wishes are hoards. You keep them secret, or somebody steals them.',
          { if: { stage: 4 }, text: 'She glances at you sideways, and then at the coin, and then she kisses you very quickly by the fountain, as if checking whether the wish has worked yet.' },
        ],
        next: 'close',
      },
      fish: {
        text: [
          'You hold her bracelets while she rolls up her sleeves and plunges both arms into the fountain to the elbow. She works fast. Gold, gold, silver she pockets anyway, gold.',
          'A watchman comes around the hedge.',
          'There is a short and very polite conversation, after which Ignivara puts every single coin back into the fountain, one by one, while the watchman watches, and you both receive a written warning.',
          '@ignivara:angry Three thousand years. Three thousand *years,* and I have never once been *told off.*',
          '@ignivara:smug ...It was quite thrilling. Let\'s get another one.',
        ],
        next: 'close',
      },
      close: {
        text: [
          'On the way out she picks a rose. She looks at it critically. It still doesn\'t sparkle.',
          '@ignivara:blush It\'s going in the good pile anyway. Because *you* were standing next to it when I picked it. That is called *provenance,* and it is everything.',
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          'You buy fried fish at the end of Saltbreeze pier. Ignivara breathes on hers until it is black, then eats it, then breathes on yours, then eats that too.',
          'Then the sun begins to go down, and the sea turns gold. All of it. A road of molten gold from the end of the pier to the edge of the world.',
          'Ignivara drops the paper cone.',
          '@ignivara:surprised Oh. *Oh.* Look at it. It\'s the largest hoard I have ever seen. It goes all the way to the *sky.*',
          '@ignivara:angry I want it. I want it *now.* How do I take it? Is it heavy? I can carry a great deal. I\'ll need a bigger cave. I\'ll need a bigger *mountain.*',
        ],
        choices: [
          { text: '"You can\'t keep it. It\'s only here for a minute. You just have to watch it."', go: 'watch', aff: 4 },
          { text: '"It comes back every evening. Let\'s come back every evening. Then it\'s ours."', go: 'ours', aff: 6 },
        ],
      },
      watch: {
        text: [
          'She looks at you, stricken.',
          '@ignivara:sad Just *watch* it? And then it *goes?*',
          'She grips the rail of the pier so hard it smokes. But she watches. She watches the whole thing, every minute of it, as the gold road narrows and dims and finally slips under the waves, and she does not look away once.',
          '@ignivara:sad That was terrible. That was the worst thing that\'s ever happened to me.',
          '@ignivara:blush ...Can we see it again tomorrow?',
        ],
        next: 'close',
      },
      ours: {
        text: [
          'Her head snaps round.',
          '@ignivara:surprised *Every* evening?',
          '@you Every evening. Same time. Same pier. You don\'t have to carry it home. It\'ll be here.',
          'She considers this with the deep seriousness of an accountant.',
          '@ignivara:smug A hoard that stores *itself.* No guarding. No counting. No knights. It just... comes back. Because it wants to.',
          'She looks at the gold road. She looks at you. Something in her face goes very soft and very quiet.',
          '@ignivara:blush ...I think I know a few things like that.',
        ],
        next: 'close',
      },
      close: {
        text: [
          'When it\'s dark, she shifts into her dragon shape at the end of the pier, to the horror of several fishermen, and flies you home the long way, low over the water, where the last red light is still clinging to the waves.',
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          'Ignivara flies you to Whisperwood in one claw, which is efficient but undignified, and sets out a picnic on a blanket of cloth-of-gold. The plates are gold. The cups are gold. The sandwiches are, mercifully, bread.',
          '@ignivara:smug A dragon does not eat off *wood.*',
          'You have barely sat down when a magpie lands on the edge of the blanket, cocks its head at her, snatches a gold coin off the corner and flies up into an oak.',
          'Ignivara goes absolutely still. Her pupils go to slits. Smoke pours from her nostrils.',
          '@ignivara:angry A *THIEF.* A RIVAL. In MY PICNIC.',
        ],
        choices: [
          { text: 'Offer the magpie a trade instead: your shiniest button for the coin.', go: 'trade', aff: 5 },
          { text: '"Want me to climb up and get it?" [Might check 2]', check: { stat: 'might', dc: 2 }, pass: 'climb', fail: 'climb_fail' },
        ],
      },
      trade: {
        text: [
          'You pull the brass button off your cuff, hold it up so it catches the sun, and set it on a stump. The magpie looks at the button. It looks at the coin. After a long, very serious negotiation consisting entirely of head-tilting, it drops the coin and takes the button.',
          'Ignivara watches the whole thing with her mouth slightly open.',
          '@ignivara:surprised It *traded.* It understood *value.* It weighed the coin against the button and made a *decision.*',
          '@ignivara:sad It has a nest up there, you know. Full of shiny things. All on its own. Guarding it.',
          'She is quiet for a moment. Then she takes a second coin, a gold one, and leaves it on the stump.',
          '@ignivara:blush For its hoard. Professional courtesy.',
        ],
        next: 'close',
      },
      climb: {
        text: [
          'You climb the oak, hand over hand, while the magpie screams abuse at you from the top branch. You get the coin. You also get pecked four times, but you get the coin.',
          'When you drop down, she snatches it from you, inspects it, and then, unexpectedly, inspects *you*: every scratch, every peck.',
          '@ignivara:angry It *damaged* you. My treasure has *scratches.*',
          { if: 'ignivara_searched', text: '@ignivara:blush ...You climbed a tree for one coin. Again. You keep doing that. Spending yourself on my little things.', else: '@ignivara:blush ...You climbed a tree for one coin. *One.* Nobody spends themselves on my little things. Nobody ever has.' },
        ],
        next: 'close',
      },
      climb_fail: {
        text: [
          'You get halfway up the oak before the branch breaks and you fall into a bush, which is mostly thorns.',
          'There is a roar. The magpie, wisely, drops the coin and leaves the forest forever.',
          'Ignivara pulls you out of the bush by the collar and starts plucking thorns out of you with her claws, scolding the whole time.',
          '@ignivara:angry Never do that again. Never. The coin is worth one coin. *You* are worth — I haven\'t finished counting. It\'s a very big number.',
        ],
        next: 'close',
      },
      close: {
        text: [
          'You finish the picnic lying on the golden blanket, her tail draped over your legs, her head on your stomach, watching the leaves.',
          { if: { stage: 4 }, text: '@ignivara:happy I could stay here. Not forever. I\'d miss the gold. But a very long time.' },
          '@ignivara:smug This blanket is the good pile now. And so is this afternoon. I don\'t care that afternoons don\'t fit in a cave. I\'ll make room.',
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'The climb to Dragonspire Peak nearly kills you. At the top, gasping, you stagger into the mouth of an enormous cave — and stop dead.',
          'Gold. Mountains of it, rivers of it, coins and crowns and goblets and gemstones heaped higher than a house. And on top of the highest pile, lounging like a cat on a sunny windowsill, is a woman.',
          'She has wild crimson hair, a pair of sweeping black-red horns, golden slitted eyes, and patches of ruby scales glittering on her cheeks and shoulders. A long, powerful dragon\'s tail curls around the pile beneath her.',
          'She sits up slowly. Her nostrils flare.',
          '@ignivara:smug A *thief.* In my hoard. How *delightful.* I haven\'t roasted a thief in weeks.',
        ],
        aff: 10,
        choices: [
          { text: 'Stand tall and meet her glare. "I\'m no thief." [Might check 2]', check: { stat: 'might', dc: 2 }, pass: 'stand_win', fail: 'stand_fail' },
          { text: '"Your hoard is magnificent. So are you."', go: 'flatter', flag: 'ignivara_flattered' },
          { text: 'Turn out your pockets to prove you haven\'t taken anything.', go: 'pockets', flag: 'ignivara_copper' },
        ],
      },
      stand_win: {
        text: [
          'Her eyes narrow. She slides down the gold toward you, and with each step she seems to grow — heat pouring off her, the shadow on the wall behind her vast and winged. Smoke curls from her lips.',
          'You don\'t move.',
          'She stops a foot away and leans in, nostrils flaring, studying you.',
          '@ignivara:surprised ...You\'re not afraid. Your heart is fast, but you\'re not *running.* Even knights run, eventually.',
          '@ignivara:smug How interesting. I don\'t own anything interesting.',
        ],
        aff: 7,
        flag: 'ignivara_unafraid',
        next: 'name',
      },
      stand_fail: {
        text: [
          'You try to stand tall. She breathes a single puff of fire over your head. Your hair is now somewhat shorter. You sit down very suddenly.',
          '@ignivara:happy Ha! Brave words, wobbly knees. Never mind, little mortal. I\'ve decided not to roast you. You\'re too scrawny to make a good snack.',
        ],
        aff: 2,
        next: 'name',
      },
      flatter: {
        text: [
          'She pauses. Her tail twitches. She tosses her hair over her shoulder.',
          '@ignivara:smug Well. *Obviously.* But it\'s nice to hear it said. The knights never say it. They say "foul beast" and "die, wyrm."',
          '@ignivara:blush You may continue complimenting me. I\'ll allow it.',
        ],
        aff: 6,
        next: 'name',
      },
      pockets: {
        text: [
          'You turn out every pocket. Some lint. A button. A single copper coin.',
          'Her eyes lock on the copper. She swoops down, snatches it from your palm, examines it, and sniffs it.',
          '@ignivara:surprised This is not mine. This is *yours.* ...May I have it?',
          '@you Sure.',
          'She clutches it to her chest like it\'s a priceless gem.',
          '@ignivara:blush A *gift.* No one has ever *given* me treasure. They only try to take it.',
        ],
        aff: 6,
        next: 'name',
      },
      name: {
        text: [
          '@ignivara:smug I am Ignivara the Crimson, Eldest of the Red Flight, Terror of the Western Skies, Keeper of the Greatest Hoard in FantasyLandia. And you are?',
          '@you {name}.',
          '@ignivara {name}. A small name for a small creature. I shall remember it.',
          'She settles back onto her gold pile and waves a lazy hand.',
          '@ignivara:smug You may visit again. Daytime only. I sleep at night, on my gold, and anyone who disturbs me gets *crispy.* Bring something shiny.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Ignivara is in a state when you arrive. She\'s pacing furiously across the hoard, tail lashing, scattering coins with every step.',
          '@ignivara:angry GONE. One coin. *One.* Forty-one thousand six hundred and eight this morning, and now it\'s forty-one thousand six hundred and SEVEN.',
          { if: 'ignivara_copper', text: '@ignivara:sad Not *your* coin. Your coin is safe. Your coin has its own box. I checked it first. I checked it *three times.*' },
          '@ignivara:angry Somebody has *robbed* me. I will find them. I will find them and I will *melt them.*',
        ],
        choices: [
          { text: 'Help her search the hoard, methodically, pile by pile.', go: 'search', aff: 6, flag: 'ignivara_searched' },
          { text: '"Maybe you just miscounted?"', go: 'miscount', aff: 3 },
          { text: 'Notice a coin glinting under her own tail. [Wits check 2]', check: { stat: 'wits', dc: 2 }, pass: 'tail', fail: 'search' },
        ],
      },
      search: {
        text: [
          'You spend the whole morning sifting through gold with her. She narrates the history of every item you pick up: the crown of King Aldous the Bald, the goblet she won from a giant in a riddle contest, the shield of the first knight who ever tried to slay her (he didn\'t).',
          'Eventually you find the coin wedged between two shields.',
          '@ignivara:happy MY COIN! My beautiful coin! Oh, I will never let you out of my sight again, you naughty little coin.',
          'She kisses it. Then she looks at you, and you swear her scales flush a deeper red.',
          '@ignivara:blush ...You spent all morning helping me look. For one coin. Why?',
          '@you It was important to you.',
        ],
        next: 'fly',
      },
      miscount: {
        text: [
          'She stops. She turns. Her eyes glow.',
          '@ignivara:angry I have counted these coins *every morning for three thousand years.* I do not *miscount.*',
          'Ten minutes later, she finds the coin in her own bracelet, where she put it last night "for safekeeping." She glares at you, daring you to say anything.',
          'You say nothing. She grudgingly appreciates it.',
        ],
        next: 'fly',
      },
      tail: {
        text: [
          '@you Ignivara. Lift your tail.',
          'She lifts her tail. The coin is stuck to a scale underneath, glinting.',
          'She looks at the coin. She looks at you. A slow, mortified curl of smoke rises from one nostril.',
          '@ignivara:surprised ...I have been *sitting on it.* All morning. Oh, how *mortifying.* If you tell anyone, I will eat you.',
          '@ignivara:blush ...You have sharp eyes, little mortal. Sharper than a dragon\'s. I didn\'t know that was possible.',
        ],
        aff: 8,
        flag: 'ignivara_tail',
        next: 'fly',
      },
      fly: {
        text: [
          'She stands abruptly and strides to the mouth of the cave, where the sky opens wide and blue over the whole kingdom.',
          '@ignivara:smug As a reward, I will grant you a great honor. Get on my back.',
          '@you ...Your back?',
          'There\'s a roar and a blast of heat, and suddenly the woman is gone and an *enormous* crimson dragon fills the cave mouth, wings spread wide enough to blot out the sun.',
          '@ignivara GET ON, MORTAL. BEFORE I CHANGE MY MIND.',
        ],
        choices: [
          { text: 'Climb on and hold tight.', go: 'ride', aff: 8 },
        ],
      },
      ride: {
        text: [
          'She launches off the peak and the world falls away. You\'re flying — truly flying, over forests and rivers and tiny toy towns, through clouds so cold they sting, with nothing but warm scales under your hands and the wind roaring in your ears.',
          'She does a loop. You scream. She laughs — a huge rumbling dragon laugh you feel through your whole body.',
          'When she sets down again on the peak and shrinks back into her human shape, her hair is wild and her eyes are shining.',
          '@ignivara:happy No one has ever ridden me before. Dragons don\'t carry *anyone.* It\'s undignified.',
          '@ignivara:blush ...I liked it. Don\'t tell the other dragons.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'You\'re halfway up the mountain path when you hear it: the clank of armor, the stamp of hooves, and a voice declaiming loudly.',
          '@knight — and by the grace of the King, we shall slay the foul wyrm and claim her hoard! For glory! For honor! For the forty percent finder\'s fee!',
          'A dozen knights in shining plate are marching up toward Ignivara\'s cave. They have ballistas. They have a priest. They have a *very* large lance.',
          'You hear Ignivara\'s roar from the cave above. It sounds angry. It also sounds — just a little — afraid.',
          { if: 'ignivara_unafraid', text: 'You didn\'t run from her the first day. You\'re not about to start running now.' },
        ],
        choices: [
          { text: 'Plant yourself on the path and block their way. [Might check 3]', check: { stat: 'might', dc: 3 }, pass: 'block_win', fail: 'block_lose' },
          { text: 'Talk them down: "She\'s under the protection of the Adventurers\' Guild." [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'talk_win', fail: 'block_lose' },
        ],
      },
      block_win: {
        text: [
          'You plant your feet in the middle of the narrow mountain path and draw your weapon.',
          '@you Nobody\'s slaying anyone today.',
          'The lead knight charges. You meet him head on, knock his lance aside, and send him tumbling into a snowdrift. The next one tries. Same result. By the fourth, they\'re hesitating.',
          'And then a shadow falls over all of you. Ignivara lands on the cliff above in full dragon form, wings spread, fire glowing in her throat — and every knight on the path drops his weapon at once.',
          '@ignivara:angry THE MORTAL SAID: NOBODY IS SLAYING ANYONE TODAY.',
          'The knights flee. One leaves his horse behind. Ignivara considers the horse. Then, with visible effort, she doesn\'t eat it.',
        ],
        aff: 12,
        flag: 'ignivara_shielded',
        next: 'after',
      },
      talk_win: {
        text: [
          '@you Gentlemen! This dragon is under the official protection of the Adventurers\' Guild, as a registered Heritage Monster. Slaying her is a Class A offense. The front desk at the Guild will have your licenses.',
          'The knights exchange nervous glances.',
          '@knight ...The front desk? *Mira Hartwell\'s* front desk?',
          '@you She has a very sharp stamp.',
          'The knights leave very quickly. It is entirely a lie. But from the cave above, you hear a sound that might be a dragon laughing.',
        ],
        aff: 10,
        flag: 'ignivara_bluffed',
        next: 'after',
      },
      block_lose: {
        text: [
          'You plant yourself on the path. The knights don\'t slow down. The lead horse knocks you flat, and you tumble down the rocks with a crunch.',
          'And then the mountain *explodes.* Ignivara lands among the knights in full dragon form with a roar that splits stones, and the knights scatter like leaves in a gale.',
          'She doesn\'t chase them. She shrinks back into her human form and runs to you, kneeling in the snow, her clawed hands shaking.',
          '@ignivara:angry You IDIOT. You *fragile little idiot.* You tried to fight twelve knights for *me?* Why would you — nobody has ever —',
          'She gathers you up in her arms and carries you up to the cave herself.',
        ],
        aff: 8,
        flag: 'ignivara_shielded',
        next: 'after',
      },
      after: {
        text: [
          'Later, in the warmth of the cave, she sits beside you on the gold, unusually quiet.',
          '@ignivara:sad For three thousand years, everyone who came up this mountain came to take something. My gold. My head. My life.',
          '@ignivara:surprised You came up the mountain to *protect* me.',
          { if: 'ignivara_searched', text: '@ignivara:blush First you spend a whole morning looking for one coin. Now this. You keep spending yourself on me as if I were *worth* it.' },
          'She looks at her hands.',
          '@ignivara:sad Dragons hoard because nothing else stays. I never thought anything would stay for me. I never thought anyone would *fight* for me.',
        ],
        choices: [
          { text: '"I\'ll always fight for you, Ignivara."', go: 'always', aff: 10, flag: 'ignivara_always' },
          { text: 'Take her clawed hand and hold it.', go: 'hold', aff: 8, flag: 'ignivara_held' },
        ],
      },
      always: {
        text: [
          'She turns her head away so you won\'t see her face. Her tail curls around your waist instead.',
          '@ignivara:blush ...Then you\'re mine. You understand? I\'m adding you to my hoard. Officially. You\'re my most valuable item.',
          '@you More valuable than the gold?',
          '@ignivara:smug Don\'t push your luck.',
          'But her tail tightens around you, just a little.',
        ],
        end: true,
      },
      hold: {
        text: [
          'Her hand is hot as a hearthstone. She looks down at your fingers wrapped around her claws with an expression of utter bewilderment.',
          '@ignivara:surprised You\'re holding on to me. Like I hold on to my gold.',
          '@ignivara:sad ...Is this what it feels like? To be something someone wants to keep?',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'The cave has been rearranged. Ignivara has pushed all the gold into a great glittering circle, like a nest, and lined the inside with silks and furs from her hoard. Candles flicker in jeweled goblets. She\'s standing in the middle, wearing nothing but a great deal of gold jewelry and a very nervous expression.',
          { if: 'ignivara_copper', text: 'In the very center of the nest, on a little velvet cushion of its own, sits one copper coin.' },
          '@ignivara:blush I have decided something.',
          '@ignivara A dragon\'s nest is where she keeps the most precious thing she owns. The one thing she\'d burn the world for. I have never had a nest. I never had anything precious enough.',
          { if: 'ignivara_shielded', text: '@ignivara:sad You stood on my mountain in front of twelve knights. For me. I keep seeing it when I close my eyes. I have three thousand years of memories, and that is the one I *keep.*' },
          { if: 'ignivara_bluffed', text: '@ignivara:smug You lied to twelve knights with a straight face to save me. I have never been so *proud* of a crime.' },
          'She holds out her hand.',
          '@ignivara:blush Come into my nest, {name}. Be my treasure.',
        ],
        choices: [
          { text: 'Step into the nest and take her hand.', go: 'step', aff: 8 },
          { text: 'Sweep her off her feet — a dragon, carried. [Might check 4]', check: { stat: 'might', dc: 4 }, pass: 'sweep', fail: 'step' },
        ],
      },
      step: {
        text: [
          'She pulls you down into the silks, among the gold, and wraps her tail around you possessively.',
          '@ignivara:smug Mine. *Mine.* No one else\'s.',
        ],
        next: 'night',
      },
      sweep: {
        text: [
          'You scoop her up — dragon, horns, tail and all — and she lets out a squeak of pure astonishment, flailing her tail.',
          '@ignivara:surprised You — put me — I am THREE THOUSAND YEARS OLD — I am a TERROR OF THE SKIES —',
          '@you You\'re my treasure, too.',
          'She stops struggling. Her face turns as red as her scales.',
          '@ignivara:blush ...Oh. Oh, that\'s *unfair.*',
        ],
        aff: 14,
        flag: 'ignivara_carried',
        next: 'night',
      },
      night: {
        text: [
          "She kisses you with heat. Real heat: her mouth almost too warm, smoke curling from her lips, a low draconic rumble rolling through her chest and into yours. Her scales are smooth and warm as sunlit stone under your hands.",
          "@ignivara:smug Off. All of it. I want to *see* my treasure.",
          "She doesn't wait for you to comply. She burns the laces of your shirt clean through with one fingertip, neatly, without singeing your skin. Then she pushes you back into the silks and coins and simply *looks* at you for a long, hungry moment, the way she looks at a perfect gemstone.",
          "@ignivara:blush Mine. Every inch. I'm going to count them all.",
          "She does count them, out loud, with her mouth, starting at your throat and taking her time. She's possessive and passionate and wildly proud, and she *will not* stop telling you how beautiful you are, how precious, how much finer than any jewel in her hoard. Her tail coils around your leg and squeezes every time you gasp.",
          "When you roll her over and trace the line of scales down her spine, she arches like a cat and lets out a startled roar that shakes coins loose from the cave ceiling.",
          "@ignivara:surprised *There* — again — oh, you wicked little thief, you've found where I'm *vulnerable* —",
          "The candles flare every time she sighs. At one point the gold around you actually begins to melt. You both have to pause, laughing, and shift away from the glowing edge before you go on...",
          "...",
          "Later, you lie in the warm nest, her tail wrapped around you twice, her head on your chest.",
          "@ignivara Forty-one thousand, six hundred and eight gold coins.",
          { if: 'ignivara_copper', text: "@ignivara:blush One copper coin." },
          "@ignivara:happy And one {name}.",
          "@ignivara:blush The {name} is worth more. I counted.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake up warm, very warm, with something heavy draped over you. It's Ignivara's tail. And her arm. And, you realize, a scattering of gold coins she has carefully arranged on your chest in a heart shape while you slept.",
          "@ignivara:smug Don't move. You'll ruin it. I spent an hour on that.",
          "She is lying beside you, chin propped on her hand, looking smug and drowsy and rumpled. A small curl of smoke rises from her nostrils with each breath. Some of the gold near the nest's edge has cooled into a single lumpy puddle.",
          { if: 'ignivara_carried', text: "@ignivara:blush Also, I've been thinking. About being *carried.* Into my own nest. By a mortal. I have decided to be outraged about it later. Much later. Possibly never." },
          "@ignivara:surprised I melted part of my hoard last night. Two hundred coins. I've *never* lost coins before. I should be furious.",
          "@ignivara:blush I'm not. Isn't that strange?",
        ],
        choices: [
          { text: "\"I'll make you a new treasure from the melted gold.\"", go: "ring", aff: 6, flag: 'ignivara_ring' },
          { text: "\"Was it worth two hundred coins?\"", go: "worth", aff: 5 },
          { text: "Move. Ruin the heart. Kiss her.", go: "ruin", aff: 6 },
        ],
      },
      ring: {
        text: [
          "Her pupils go wide and round.",
          "@ignivara:surprised From — from *our* gold? From last night's gold?",
          { if: { met: 'hilde' }, text: "You take a lump of the cooled metal to Hilde's forge that afternoon, borrow her anvil, and come back with a rough little ring. It's lopsided. It's beautiful.", else: "You take a lump of the cooled metal to a forge on Artisan's Row that afternoon, borrow an anvil, and come back with a rough little ring. It's lopsided. It's beautiful." },
          "Ignivara puts it on her finger, holds it up to the light, and doesn't speak for a full minute. Then she puts it in the very center of her hoard, on the highest pile, where the sunlight hits it first every morning.",
        ],
        end: true,
      },
      worth: {
        text: [
          "She considers the question with enormous seriousness, the way a merchant appraises a jewel.",
          "@ignivara Two hundred coins... I've traded entire kingdoms for less.",
          "@ignivara:smug It was worth four hundred. At *least.* Possibly a thousand. We should do an appraisal again tonight. To be thorough.",
        ],
        end: true,
      },
      ruin: {
        text: [
          "You sit up. The coins slide everywhere. She lets out a scandalized hiss.",
          "@ignivara:angry My *heart!* You — that was a *masterpiece* —",
          "You kiss her. She stops complaining. A few minutes later, more gold begins to melt.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'The crowd on the festival hill screams as a crimson dragon swoops low overhead — and then lands in the field beside you, transforming in a burst of heat into a woman in a gown made, as far as you can tell, entirely of gold coins.',
          { if: 'ignivara_copper', text: 'In the very center of the gown, over her heart, hangs a single copper coin on a gold chain. It is the only thing on her that is not gold. It is, very obviously, the thing she is proudest of.' },
          { if: 'ignivara_ring', text: 'The lopsided little ring is on her finger.' },
          '@ignivara:smug I came to watch the stars. From the ground. With the mortals. Because *you\'re* down here.',
          'She looks around at the crowd, nose wrinkled.',
          '@ignivara:angry Ugh. So many people. Not one of them sparkles. Come, we\'re going somewhere better.',
          'She transforms again and holds out one enormous claw for you.',
        ],
        next: 'sky',
      },
      sky: {
        text: [
          'She carries you up above the clouds, so high that the air is thin and cold and the stars are close enough to touch. And then they begin to fall — all around you, streaking past, so close you can hear them hiss.',
          '@ignivara:happy Look! LOOK! The whole sky is *gold!* It\'s the greatest hoard in the world!',
          '@ignivara:blush And I don\'t even want it. Isn\'t that strange? I have *you.*',
          'She lands on the very peak of Dragonspire as the last stars fall, shifts back into her human form, and kisses you with smoke and heat and three thousand years of longing.',
          '@ignivara:happy My treasure. Forever.',
        ],
        next: 'which',
      },
      which: {
        branch: [
          { if: 'ignivara_free', go: 'letgo' },
          { if: 'ignivara_hoarded', go: 'hoard' },
          { if: ['ignivara_held', 'ignivara_copper'], go: 'letgo' },
          { if: ['ignivara_always', 'ignivara_ring'], go: 'hoard' },
          { go: 'epilogue' },
        ],
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'You move into the cave. You insist on a bed. She insists the bed be made of gold. You compromise: the frame is gold, the mattress is not. She sulks for a week, then admits it\'s more comfortable.',
          'Over many long arguments, you convince her to "loan" a little of her hoard to the town — for a new bridge, a school, a hospital. She charges zero interest and makes every single beneficiary write her a thank-you letter, which she keeps in the hoard, in the good pile.',
          'Knights stop coming to slay her. They come to *ask her advice* instead, which she finds far more irritating.',
          'Every morning she counts her coins. Twice. And then she counts you: one, kiss, two, kiss, three, until you\'re both laughing.',
          'The result is always the same: the greatest treasure in FantasyLandia, and it\'s not the gold.',
        ],
        ending: 'ignivara',
      },
      hoard: {
        text: [
          'On the peak, with the last of the starlight fading, she takes your hand and turns it over and presses something into your palm. It is a small, heavy, newly cut key, made of gold.',
          '@ignivara:blush It opens the vault. The *real* vault. The one under the hoard, where I keep the things I\'d burn the world for. Nobody has ever seen it. Nobody has ever been *in* it.',
          { if: 'ignivara_hoarded', text: '@ignivara:smug You already have a tag. Now you have a key. Item forty-one thousand, six hundred and nine is the only item in my hoard that can let *itself* in.' },
          '*Some time later...*',
          'You are, officially and legally, a registered part of the Greatest Hoard in FantasyLandia. There is a ledger. You are on the first page. Your entry reads: *ITEM 41,609 — THE {NAME}. Acquired: by choice (theirs). Condition: excellent. Value: see attached* — and the attached is eleven pages long and in places tear-stained.',
          'Ignivara treats you exactly as she treats her finest treasure, which is to say: outrageously. She polishes your boots. She appraises your outfits and then buys you better ones. She has your portrait painted in gold leaf and hangs it in the center of the cave, where the sun hits it first. She growls at anyone who touches your sleeve at market, and then apologizes, and then growls again, a little.',
          'Every month she brings you a new treasure, laid at your feet like tribute: a crown, a sword, the deed to a vineyard, a very startled wizard\'s hat. You have started giving them away in town when she isn\'t looking. She knows. She pretends not to. She has started bringing two.',
          'And every month, without fail, you climb into the vault beneath the hoard and add something of your own to her collection: a pressed flower, a sketch of her asleep, a perfectly ordinary pebble from the mountain path you climbed on the first day. She weeps over every single one.',
          'The other dragons think she has gone soft. She tells them she has simply found the one thing in the world that appreciates in value every single day.',
          '@ignivara:happy I said I\'d add you to my hoard, didn\'t I? I always keep my treasure. And you always keep *me.*',
        ],
        ending: 'ignivara_hoard',
      },
      letgo: {
        text: [
          'On the peak, with the last of the starlight fading, she looks back over her shoulder at the cave. All that gold, glittering in the dark.',
          '@ignivara:sad I haven\'t counted it for six days, you know. I keep forgetting. I keep being *somewhere else,* with you.',
          '@ignivara:blush I think — I think I hoarded because nothing ever stayed. And now something has. So I don\'t need to *hold on* so hard. To anything.',
          '*Some time later...*',
          'She gives it away. Not all at once — she is still a dragon — but over one long, astonishing year, the Greatest Hoard in FantasyLandia empties out into the world, one pile at a time. A hospital. A library. A harbor wall. Twenty thousand gold coins to the town, stamped on one side with a small, smug dragon. King Aldous the Bald\'s crown goes back to his great-great-great-granddaughter, who cries. Biscuit, the horse the knights left behind, is given, with great ceremony, a farm.',
          'Then the two of you leave the mountain. You fly. North, to see the ice. South, to see the jungles. East, to see where the sun comes up. She lands in a different place every week, in a different sky, and she does not take one single thing home, because there is no home to take it to, except wherever you are standing.',
          { if: 'ignivara_copper', text: 'She keeps only a handful of treasures. One copper coin, on a chain around her neck.', else: 'She keeps only a handful of treasures. A single gold coin from the old hoard, for luck, on a chain around her neck.' },
          { if: 'ignivara_ring', text: 'A lopsided ring, which has never once come off her finger.' },
          'And a small, battered notebook in which, every evening, she writes down the things she has seen that day that she could not possibly have kept: a sunset over the frozen sea, a herd of wild horses running, the way you laughed at the top of a waterfall. She calls it her hoard. It is the only one she has ever been completely happy with.',
          '@ignivara:happy Three thousand years I sat on a pile of gold waiting for something to stay. It turns out the trick was to *fly.*',
        ],
        ending: 'ignivara_sky',
      },
    },
  },
});

/* ------------------------------------------------------------------ side event: the dragon's jealousy */
FL.addScene('ignivara_jealous', {
  start: {
    text: [
      'It is a perfectly ordinary afternoon until the sun goes out.',
      'You look up. A crimson dragon the size of a warship is falling out of the clouds directly toward you. People scream and scatter. A cart overturns. The dragon swoops low over the rooftops and, with tremendous delicacy, plucks you off the street in one claw like a cherry off a cake.',
      'Then you are rising very fast, the town shrinking beneath your boots, the wind roaring, and a huge golden eye swiveling round to check that you are still there.',
      '@ignivara:angry STAY STILL. YOU ARE BEING *RECOVERED.*',
      'She sets you down on top of the highest pile of gold in Dragonspire Cave, shrinks back into her human shape in a gust of heat, and produces a ledger, a quill and a small brass tag on a chain.',
      '@ignivara:smug Hold still. I am *inventorying* you.',
    ],
    next: 'accuse',
  },
  accuse: {
    text: [
      '@ignivara:angry You were seen. In town. With *her.* Laughing. Standing very close. She *touched your arm,* {name}. I could smell it on you from the peak. Somebody else has been handling my treasure.',
      '@ignivara Do you know what happens to people who handle my treasure?',
      '@you They get crispy?',
      '@ignivara:smug They get *extremely* crispy.',
      { if: 'ignivara_always', text: '@ignivara:sad You said you were mine. You said you\'d always fight for me. You said it in this cave. I wrote it down. It\'s in the ledger. Page one.' },
      'She snaps the ledger open. On a fresh page, in elegant, furious handwriting, she has already written: *ITEM 41,609 — THE {NAME}. PROPERTY OF IGNIVARA THE CRIMSON. NOT FOR TRADE. NOT FOR TOUCHING.*',
      'She holds up the brass tag. It says the same thing, engraved, in very small letters. Her hand is not quite steady.',
      '@ignivara:sad Gold doesn\'t leave. You put it somewhere and it stays exactly where you put it. But you walk down my mountain every single evening, and every single evening I don\'t know if you\'re going to come back up.',
    ],
    choices: [
      { text: '"Then catalogue me. Properly. I\'d like to be in the good pile."', go: 'tag', flag: 'ignivara_hoarded', affTo: { ignivara: 5 } },
      { text: '"Gold stays because it can\'t leave. I come back because I want to." [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'choose', fail: 'choose_fail' },
      { text: '"Ignivara... are you *jealous?*"', go: 'jealous' },
    ],
  },
  jealous: {
    text: [
      'She draws herself up to her full height, horns and all. Smoke pours from both nostrils.',
      '@ignivara:angry Dragons DO NOT get JEALOUS. Jealousy is for *magpies.* Dragons get *inventoried.* It is an entirely different and much more dignified process.',
      'A coin slides off the pile behind her. She flinches, turns round and glares at it.',
      '@ignivara:blush ...It is a little bit like jealousy.',
    ],
    choices: [
      { text: '"Then catalogue me. Properly. I\'d like to be in the good pile."', go: 'tag', flag: 'ignivara_hoarded', affTo: { ignivara: 5 } },
      { text: '"Gold stays because it can\'t leave. I come back because I want to." [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'choose', fail: 'choose_fail' },
    ],
  },
  tag: {
    text: [
      'Her tail, which has been lashing the whole time, stops dead.',
      '@ignivara:surprised You... *want* to be catalogued?',
      'You hold out your wrist. Very slowly, as if you might bolt, she loops the chain around it and fastens the clasp, and then she sits back on her heels and looks at the little brass tag on your skin with an expression of absolute wonder.',
      '@ignivara:happy Item forty-one thousand, six hundred and nine. Condition: *excellent.* Pile: the *good* one. The *very* good one. I\'m starting a new one, just for you. It\'s called "the best pile."',
      '@you I still get to go into town.',
      '@ignivara:smug Within reason. With the tag on. And if anyone touches your arm, you tell them, very politely, that you are *registered.*',
      'She flies you back down to the square, very slowly, very carefully, as if carrying something that might break, and lands to a smattering of nervous applause. The tag glints on your wrist all the way home.',
    ],
    end: true,
  },
  choose: {
    text: [
      'She goes completely still. The quill drips ink onto the ledger. Neither of you moves to stop it.',
      '@ignivara:surprised ...Because you *want* to.',
      '@you Every time. Nobody makes me climb this mountain, Ignivara. I just keep doing it.',
      'She looks down at the tag in her hand for a long time. Then she sets it down on the gold, very gently, the way she might set down an egg.',
      '@ignivara:sad That is the most frightening thing anyone has ever said to me. A treasure that *chooses.* A treasure that could stop choosing.',
      '@ignivara:blush ...Go, then. Go back down to town. And then come back up. I want to see it. I want to see you *do* it.',
      'You walk down the mountain. It takes the rest of the afternoon. At the bottom, you turn round, and climb all the way back up again, and by the time you reach the cave it is dark and your legs are shaking.',
      'She is sitting at the cave mouth. She has clearly not moved the entire time. When she sees you come over the last rise she makes a sound you have never heard a dragon make, and then she is holding you so tightly that your ribs creak.',
      '@ignivara:happy You came back. You came back and nobody *made* you.',
    ],
    affTo: { ignivara: 6 },
    flag: 'ignivara_free',
    end: true,
  },
  choose_fail: {
    text: [
      '@you Ignivara, I\'m not your — I\'m not *stuff.* You can\'t just pick me up and put me on a pile —',
      'It comes out wrong. You hear it come out wrong. So does she.',
      'Her face shuts like a vault door. Without a word she shifts back into her dragon shape, scoops you up, flies you back to town and sets you down, very precisely, in a hay cart.',
      'The next morning there is a sapphire on your doorstep the size of a fist, and a note in elegant, furious handwriting: *STILL MINE. (EMOTIONALLY.) — I.*',
      'You get the sense that this conversation is not over. You also get the sense that she is going to need a few days before she can have it.',
    ],
    affTo: { ignivara: -3 },
    end: true,
  },
});
FL.addEvent({
  id: 'ignivara_jealous',
  owner: 'ignivara',
  scene: 'ignivara_jealous',
  slot: 1,
  priority: 10,
  cond: function (s) {
    const g = s.chars.ignivara;
    if (!g || g.stage < 2 || g.stage > 3) return false;
    if (s.day >= FL.CONFIG.maxDay) return false;
    return FL.charOrder.some(function (id) { return id !== 'ignivara' && s.chars[id].stage >= 3; });
  },
});

FL.sceneCast = FL.sceneCast || {};
FL.sceneCast.ignivara_jealous = ['ignivara'];
