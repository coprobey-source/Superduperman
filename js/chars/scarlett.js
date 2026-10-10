FL.addSpeaker('watch', 'Harbor Watchman', '#8aa1b8');
FL.addSpeaker('crew', 'First Mate Bones', '#c9a36b');

FL.addCharacter({
  id: 'scarlett',
  name: 'Captain Scarlett "Red" Vane',
  short: 'Scarlett',
  trope: 'Swashbuckling Pirate Captain',
  color: '#e8383d',
  favStat: 'might',
  endingTitle: 'A Heart for a Compass',
  endings: { scarlett_home: 'Home Port', scarlett_rival: 'Two Ships, One Sea' },
  teaser: 'A woman in a crimson coat and an enormous feathered hat is swinging from a ship\'s rigging, laughing at the harbor watch.',
  blurb: 'Captain of the *Crimson Tide*, the most notorious — and most charming — pirate ship on the Sapphire Sea. Brash, boastful, quick with a blade and quicker with a wink. She robs only the rich, frees every slave ship she finds, and has never once stayed in one port long enough to fall in love. She respects a strong sword arm.',
  schedule: ['docks', 'docks', 'tavern'],
  gifts: { love: ['rum'], like: ['dagger', 'gem', 'comb', 'fish', 'mead', 'strings'], hate: ['tea'] },
  giftLines: {
    love: ['She snatches the bottle, bites the cork out, and takes a long swig.', '@scarlett:happy *Ahhhh.* Now THAT\'S a gift fit for a captain! You know the way to a pirate\'s heart, love. It\'s through her liver.', 'She winks and tosses you the bottle. It\'s half empty already.'],
    like: '@scarlett:happy Ooh, shiny! Bit o\' plunder freely given! That\'s the best kind. No cannons required.',
    neutral: '@scarlett Huh. Well, it\'s not treasure. But I s\'pose I\'ll keep it in the hold. With the other not-treasure.',
    hate: ['She stares at the tea set like it personally offended her mother.', '@scarlett:angry *Tea?* That\'s what the Royal Navy drinks. Pinky out, stiff upper lip, hanging pirates at dawn. Get it off my deck, love.'],
    special: {
      rum: [
        "She snatches the bottle, holds it up to the light and squints at the label like a jeweler with a diamond.",
        "@scarlett:happy Black Gully, twelve-year cask. Oh, you *beauty.* You've been asking around the docks, haven't you? Asking what the Captain drinks?",
        "She bites the cork out, takes a swig, and offers you the bottle with a flourish.",
        "@scarlett:smug Pirate law, love. Whoever brings the rum drinks second. ...Whoever brings the *good* rum gets kissed first. That's an older law. I just made it up, so it's very old.",
      ],
      fish: [
        "She takes the fish, looks it in the eye, and then looks you in the eye.",
        "@scarlett:smug Is this a gift, or is this a *threat?* Because the last time someone handed me a fish, it was *on my hat.*",
        "@scarlett:happy ...Cook'll fry it. I'll think of you. Fondly, mostly.",
      ],
      dagger: [
        "She draws the silver dagger, flips it, catches it by the point and flips it back. It doesn't leave her hand once.",
        "@scarlett:happy Balanced like a dream. Silver, too — that's werewolf insurance, love. You've seen this town.",
        "@scarlett:blush It's going in my boot. Left one. Closest to the heart, if you're upside down in the rigging.",
      ],
      fork: [
        "@scarlett:surprised A fork.",
        "She holds it up. She jabs it experimentally at the air.",
        "@scarlett:smug Hah! A trident for cowards! I'll board the Navy's next frigate with this and tell 'em it's King Triton's *dessert* trident. ...Thank you, love. You're strange. I like strange.",
      ],
      tea: [
        "She looks at the tea set. She looks at you. She lifts the lid of the teapot with the very tip of her cutlass.",
        "@scarlett:angry Admiral Pembroke had one just like this. He used to drink from it while he read out the charges. *Every* time. Pinky out.",
        "@scarlett ...I'll keep it. Not for drinking. For *target practice.*",
      ],
      salts: [
        "She uncorks the jar and sniffs, and then laughs so hard she has to sit down on a barrel.",
        "@scarlett:happy *Sea salt!* You brought SALT to a PIRATE! Love, I've got salt in places you don't have *places!*",
        "@scarlett:blush ...Lavender's nice, though. Don't tell Bones I said lavender's nice.",
      ],
      mead: [
        "@scarlett:happy Mead! Sweet as a sunrise and twice as dangerous. Northern sailors drink this before they row into a storm. They say it makes 'em brave.",
        "@scarlett:smug I'm already brave. But I'll drink it so I'm brave *and* sticky.",
      ],
    },
    repeat: "@scarlett:smug Another one, love? Careful. A pirate who's given the same treasure three times starts to think she's being *courted.* ...Not that I mind. Just tellin' you the odds.",
  },
  talk: [
    ['@scarlett:smug Ahoy, landlubber! Come to see the finest ship on the Sapphire Sea? Or her finer captain? ...It\'s me. I\'m the finer one.'],
    ['@scarlett:smug I once fought a kraken with nothing but a cutlass and a very stern expression. The kraken lost. Mostly because of the expression.'],
    ['@scarlett Rule one of piracy: never trust a man with a parrot. They always have something to hide. Usually, more parrots.'],
    ['She\'s sitting on a barrel, sharpening her cutlass and humming a shanty.', '@scarlett "Oh, the captain had a heart of gold, but she buried it at sea..." Old song. Nobody knows who wrote it. ...It was me. I wrote it. Don\'t tell anyone.'],
    ['@scarlett:sad Every port I sail into, there\'s someone waving goodbye on the dock. Never someone waving hello. Funny thing, that.'],
    ['@scarlett My first mate, Bones, says I\'ve been docked in Clichéton three weeks longer than planned. He\'s asked why. I told him the rum\'s good.', 'She looks at you sideways.', '@scarlett:blush The rum\'s not *that* good.'],
    ["@scarlett:smug Rule two of piracy: a good hat is worth more than a good ship. You can steal a new ship any day of the week. A hat like this has *history.*", "@scarlett It's been shot four times. Once by me, by accident. We don't talk about it."],
    ["She's leaning on the rail, watching a fat merchant galleon tack into the harbor.", "@scarlett:smug See the flag on that one? Lord Pomfrey's cousin. Three cannons, forty crew, and a hold full of other people's money.", "@scarlett:happy ...Not today, though. Today I'm *socializing.* With you. You should feel very honored."],
    ["@scarlett People think piracy's all swordfights and treasure. It's mostly *knots.* Ninety knots a sailor needs to know. I know a hundred and twelve.", "@scarlett:smug Six of 'em aren't for sailing. Ask me nicely one day and I'll show you."],
    { if: 'scarlett_ledger', lines: ["@scarlett:happy Remember the ledger I nicked the day we met? Magistrate read it. Lord Pomfrey's been arrested! His spice ships are impounded down at the Navy dock, and every soul in their holds walked free this morning.", "@scarlett:blush ...You could have shouted for the watch, that day. You didn't. I keep thinking about that."] },
    { if: 'scarlett_mackerel', lines: ["@scarlett:smug I had the mackerel stuffed. The one you threw at me. It's mounted above my cabin door with a little brass plaque.", "@scarlett:happy \"SLAIN IN SINGLE COMBAT. BY ACCIDENT.\" The crew salute it on the way in."] },
    { if: 'scarlett_disarmed', lines: ["@crew Cap'n's been up at dawn every day since you knocked her blade out of her hand. Practicin'. On the mainmast. The mainmast's losing.", "@scarlett:angry *Bones!*", "@scarlett:blush ...Rematch. Soon. And this time I'm not going easy on you because you've got a nice face."] },
    { if: { stage: 3 }, lines: ["She pulls Blackheart's compass out of her coat, glances at it, and snaps it shut again with a little huff.", "@scarlett:blush It's still doing it. Pointing. I've tried *everything.* Held it upside down. Dunked it in rum. Showed it a very handsome map.", "@scarlett:happy Stubborn thing. Takes after its captain."] },
  ],
  afterTalk: [
    ["@scarlett:happy Ahoy, love! The crew's finished the shanty about us. Thirteen verses. Verse nine is *filthy.* Bones wrote it. I'm very proud of him."],
    ["She pulls Blackheart's compass out and holds it up. The needle swings straight to you.", "@scarlett:smug Still pointin'. Means I'm headed your way tonight. Leave the window open."],
    ["@scarlett:blush I've been dockside longer than any port in nine years. The crew's started calling Clichéton \"home port.\" I haven't corrected 'em."],
    ["@scarlett:smug I tied down the bed. Rope, chain and a very good knot. Come test it, love. For the seaworthiness."],
    ["@scarlett I had a dream last night. I was at the wheel, and there was a storm, and I looked over and you were right there beside me, soaked through, laughing.", "@scarlett:blush Best dream I've had in nine years. ...Didn't even need the rum."],
    { if: 'scarlett_bet', lines: ["@crew Cap'n. Ten gold on \"honest pirate,\" from the landlubber. I'm told I should be payin' out.", "@scarlett:smug Pay 'em, Bones. They've earned it. They've *thoroughly* earned it.", "@crew ...I'm not going to ask, Cap'n.", "@scarlett:happy Wise man."] },
    { if: 'scarlett_boarded', lines: ["@scarlett:smug I've been using your line, you know. \"I'm just boarding your ship.\" Used it on a Navy captain this morning while I relieved him of his cargo.", "@scarlett:blush It didn't land the same. He didn't blush. I think it only works if *you* say it."] },
    { if: 'scarlett_date_picnic', lines: ["@scarlett:happy I keep thinking about that picnic in Whisperwood. All those trees, not one scrap of horizon, and I didn't mind a bit.", "@scarlett:smug Next time I'm bringing a shovel. Every picnic should end in buried treasure, love. Don't look at me like that. It's just good cartography."] },
    { if: 'scarlett_right_here', lines: ["@scarlett:sad I climbed the crow's nest this morning. Looked at the horizon, same as always.", "@scarlett:blush Then I looked down at the dock. And you were on it. And for the first time in my whole life, love, the dock won."] },
  ],
  dateFav: 'harbor',
  dates: {
    dinner: {
      start: {
        text: [
          "The private corner booth at the Tipsy Wyvern, all candlelight and good wine. Scarlett slides in with her back to the wall and her eyes on the door, which you suspect is a habit from every tavern she's ever been in.",
          "@scarlett:smug Fancy! Booths! Napkins! I've robbed people with napkins this nice, love. Usually right before the dessert course.",
          "She picks up the wine list, puts on a ludicrous accent and holds out her little finger.",
          "@scarlett Waiter, the *Château Bloodwine, the year of the Great Kraken,* if you'd be so — oh, I can't do it, it hurts my face.",
          { if: { stage: 4 }, text: "Her ankle hooks around yours under the table and stays there, quite deliberately, for the whole meal." },
        ],
        choices: [
          { text: "\"Arm-wrestle you for the bill.\" [Might check 3]", check: { stat: 'might', dc: 3 }, pass: 'wrestle_win', fail: 'wrestle_lose' },
          { text: "\"You don't have to be fancy for me, Red.\"", go: 'real', aff: 5 },
          { text: "Order the tea, to see what she does.", go: 'tea', aff: 0 },
        ],
      },
      wrestle_win: {
        text: [
          "She plants her elbow on the table with a wicked grin. The whole tavern gathers round. She's strong — wiry, sailor-strong — but you dig in and slowly, slowly, bring her hand down onto the wood.",
          { if: 'scarlett_disarmed', text: "@scarlett:surprised Two duels! Two duels I've lost to you now! The *Wyvern* saw it! My reputation!", else: "@scarlett:surprised Beaten! In public! The *Wyvern* saw it! My reputation!" },
          "@scarlett:happy ...Fine. Fine. I'll pay. I'll pay for the whole *tavern,* actually — DRINKS ON THE CAPTAIN, LADS, TO THE ONLY LANDLUBBER WHO'S EVER BEATEN ME!",
          "She does not, it turns out, have enough money for the whole tavern. You run for it together, laughing, out into the night.",
        ],
        end: true,
      },
      wrestle_lose: {
        text: [
          "She plants her elbow on the table and slams your hand down so fast the candles gutter.",
          "@scarlett:smug Hah! Forty years of hauling rope, love. Well — nine. But they were *very* hard years.",
          "@scarlett:happy Bill's yours. I'll have the lobster. And the other lobster. And whatever *that* gentleman's having, it smells incredible.",
        ],
        end: true,
      },
      real: {
        text: [
          "The silly accent drops away. She looks at you over the candle, unexpectedly quiet.",
          "@scarlett:blush ...Nobody's ever taken me somewhere with napkins before. Not to *eat.* I suppose I panicked and did a posh voice.",
          "@you I'd rather have the pirate.",
          "@scarlett:happy Then you'll have the pirate.",
          "She orders rum, eats the bread with her hands and tells you about the time she stole a duke's wedding cake, the whole thing, five tiers, and rowed it out to a ship full of freed prisoners who hadn't seen sugar in a year. She laughs, and then she isn't laughing, and she holds your hand on the table between the candles like it's the most natural thing in the world.",
        ],
        end: true,
      },
      tea: {
        text: [
          "@scarlett:angry You *didn't.*",
          "The tea arrives. Scarlett stares at it like it's a Navy frigate flying a black flag. Then she very slowly reaches across the table, picks up your cup — and pours a generous splash of rum into it.",
          "@scarlett:smug There. Now it's *grog.* Drink up, love. I'm saving your soul.",
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          "The Moonlit Gardens are full of silver fountains and hedges and nobility. Scarlett strolls through them with her hat tipped low and her hands in her coat pockets, like a cat walking through a room full of pigeons.",
          "@scarlett:smug That fountain? Robbed it. That statue? Robbed the man who paid for it. That hedge shaped like a swan? Robbed the swan. Long story. The swan started it.",
          "A pair of noblemen stroll around the corner, escorted by a watchman with a lantern. The watchman squints at her coat, then at her hat.",
          "@watch Good evening, Lord Ashby, Lord — wait. Is that —",
          { if: 'scarlett_lied', text: "@scarlett:happy Oh, it's *him!* That's the watchman you sent to the fish market the day we met, love. He's been promoted to garden patrol. I wonder why." },
        ],
        choices: [
          { text: "Pull her into the nearest hedge.", go: 'hedge', aff: 5 },
          { text: "\"This is my aunt. She's very eccentric.\"", go: 'aunt', aff: 3 },
          { text: "Stand your ground. \"She's with me.\"", go: 'with_me', aff: 4 },
        ],
      },
      hedge: {
        text: [
          "You grab her by the lapels and haul her backwards into a gap in the hedge. Branches close around you. The watchman's boots crunch slowly past on the gravel, inches away.",
          "Scarlett is pressed against you in the dark, very still, shaking with silent laughter. Then she's very still for a different reason.",
          "@scarlett:blush ...Well. This is the best hiding place I've ever been in.",
          "By the time the boots have gone, her hat's fallen off and there are leaves in her curls and neither of you has said anything for quite a while.",
        ],
        end: true,
      },
      aunt: {
        text: [
          "@scarlett:surprised Your *aunt?!*",
          "@watch ...Your aunt.",
          "@scarlett:smug — Yes. Aunt Scarlett. From the coast. I'm *very* eccentric. I collect hats. And other people's jewelry, but only when I'm confused. Good evening, gentlemen!",
          "The watchman decides, wisely, that he hasn't seen anything. Scarlett waits until he's gone, then elbows you so hard you nearly fall in a fountain.",
          "@scarlett:angry *Aunt.* I'll make you pay for that one, love. Slowly.",
        ],
        end: true,
      },
      with_me: {
        text: [
          "You step between her and the watchman and look him dead in the eye.",
          "@you She's with me. And we're just walking.",
          "The watchman looks at you. He looks at Scarlett's hand, resting on her cutlass. He looks at your face, which is doing something you didn't know it could do.",
          "@watch ...Lovely evening for it.",
          "When he's gone, Scarlett tips her hat back and looks at you with an expression you haven't seen on her before.",
          "@scarlett:blush Nobody's ever stood in front of me before, love. Usually I'm the one doing the standing. ...I could get used to it. Don't make a habit of it. Make a *little* habit of it.",
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          "The sun is going down over Saltbreeze Harbor like a gold coin dropping into a pocket. Scarlett buys two paper cones of fried fish from a stall whose owner salutes her, and leads you right past the end of the pier, down a ladder, into a little red rowing boat.",
          "@scarlett:happy Can't see a proper sunset from a pier, love. Too many gulls. Too many *people.* Sit. Hold the fish. Mind your elbows.",
          "She rows you out until the town is a scatter of lights behind you and there's nothing ahead but the burning horizon.",
          "@scarlett This is the bit I love. The minute between day and night when the sea goes the same color as rum. Every sailor stops what they're doing. Even the Navy. Even the *pirates.*",
          { if: { stage: 4 }, text: "She ships the oars and leans back against your knees, letting the boat drift, her hat over her eyes, perfectly content." },
        ],
        choices: [
          { text: "\"Teach me to find my way home by the stars.\"", go: 'stars', aff: 6 },
          { text: "Steal a kiss and her hat at the same time.", go: 'hat', aff: 5 },
          { text: "Grab the oars. \"My turn to row.\" [Might check 2]", check: { stat: 'might', dc: 2 }, pass: 'row_win', fail: 'row_fail' },
        ],
      },
      stars: {
        text: [
          "She brightens like a lantern. As the first stars come out, she takes your hand and points it at them, one by one.",
          "@scarlett:happy That's the Anchor. That's the Drowned Queen. That little one by itself is the Widow's Lamp — keep it on your left and you'll always find Clichéton.",
          "@you What's that one? The red one.",
          "@scarlett:blush ...That one doesn't have a name. I've always wanted to name a star. Never had a reason to.",
          "She doesn't say what she names it. But you see her lips move, and you're fairly sure it's your name.",
        ],
        end: true,
      },
      hat: {
        text: [
          "You lean in and kiss her, and while she's busy being kissed you lift the great feathered tricorn off her head and put it on your own.",
          "@scarlett:surprised Did you — did you just *pickpocket* my *head?*",
          "@you I've been learning from the best.",
          "@scarlett:smug Oh, you are a *menace.* It suits you. Keep it until we're back on shore. Then I'm taking it back with interest, and the interest is *also kissing.*",
        ],
        end: true,
      },
      row_win: {
        text: [
          "You take the oars and row. Long, steady strokes. The little boat skims across the gold water, and Scarlett leans back on her elbows to watch you with open admiration.",
          "@scarlett:happy Look at that stroke! Look at those *shoulders!* Bones, are you seeing this — oh, he's not here. Pity. He'd write a verse.",
          "@scarlett:smug I'll write it myself. \"Oh, the landlubber rowed with a back made of oak...\" Hm. Needs work. Row slower, I need to *study* the subject.",
        ],
        end: true,
      },
      row_fail: {
        text: [
          "You grab the oars and row with tremendous enthusiasm. The boat turns in a slow, stately circle. Then another one.",
          "@scarlett:happy Hah! We're going *around!* We're a whirlpool, love! We're a very small, very determined whirlpool!",
          "She's laughing so hard she nearly falls out. Eventually she takes one oar, you keep the other, and you row back to shore together, perfectly in time, as the stars come out.",
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          "Whisperwood is green and quiet and very, very far from the sea. Scarlett stands at the edge of the clearing, gazing suspiciously up at the trees.",
          "@scarlett:sad Too many trees, love. Not enough horizon. How do you people know where you *are?* There's no wind to read. There's no tide. There's just... more forest.",
          "She spreads the blanket like she's laying out a sail and sits down on it cross-legged, one hand never far from her cutlass in case a squirrel tries anything.",
        ],
        choices: [
          { text: "Point at the tallest tree. \"That's a mast, if you squint.\"", go: 'climb', aff: 6 },
          { text: "\"Teach me one of your hundred and twelve knots.\"", go: 'knot', aff: 4 },
          { text: "\"Should we bury the leftovers like treasure?\"", go: 'bury', aff: 5 },
        ],
      },
      climb: {
        text: [
          "Her eyes light up. She's up the trunk before you've finished speaking, scrambling from branch to branch like it's rigging, and calls down for you to follow.",
          "At the top, the forest opens up below you like a green ocean, rolling away to the mountains. The wind finally picks up. She tips her face into it and laughs.",
          "@scarlett:happy THERE it is! Horizon! I knew you were hiding it somewhere, you sneaky forest!",
          "She sits in the crook of a branch with her arm around your waist, swaying with the tree like a ship on a swell, perfectly at home.",
          "@scarlett:blush ...A crow's nest made of leaves. You found me a crow's nest in the middle of the woods, love. Who *does* that?",
        ],
        end: true,
      },
      knot: {
        text: [
          "She brightens immediately and pulls a length of rope out of her coat. She always has rope.",
          "@scarlett:smug Right. This one's the bowline. King of knots. The rabbit comes out of the hole, round the tree, back down the hole —",
          "Your rabbit gets lost. Your tree falls over. She takes your hands in hers and guides them, slowly, her chin on your shoulder.",
          "@scarlett:blush ...There. See? Holds tight. Never slips. Comes undone the second you want it to and not a moment before.",
          "She looks at the knot for a long moment.",
          "@scarlett Best knot there is, love.",
        ],
        end: true,
      },
      bury: {
        text: [
          "@scarlett:surprised Bury the —",
          "@scarlett:happy Oh, I *love* you. — I mean. I love that. The idea. Get the shovel.",
          "She doesn't have a shovel, so you dig with her cutlass and a picnic plate. She buries the basket under an oak, with the last of the pie inside it, and then draws you a map on the back of a napkin. With an X. With a little skull. With a sea serpent in the corner, though the nearest sea is twenty miles away.",
          "@scarlett:smug Every great treasure needs a map, love. And every map needs a sea serpent. That's just good cartography.",
          "She presses the map into your hand and closes your fingers over it.",
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'A bell is clanging furiously on the docks. Harbor watchmen are running, shouting, pointing up at the rigging of a merchant ship. And swinging from a rope between the masts, laughing, is a woman in a long crimson coat and an enormous feathered tricorn hat.',
          '@scarlett:happy Catch me if you can, lads! Oh wait — you can\'t!',
          'She lets go of the rope, somersaults through the air, and lands on the dock directly in front of you. She has wild red curls, a scar across one eyebrow, a gold hoop earring, and the most infuriatingly charming grin you have ever seen.',
          '@watch STOP THAT PIRATE!',
          'She looks at you. She looks at the approaching watchmen. She winks.',
          '@scarlett:smug Well, love? You going to stop me?',
        ],
        aff: 10,
        choices: [
          { text: 'Step aside and point the watchmen the wrong way.', go: 'help' },
          { text: 'Grab her wrist. "Maybe I will." [Might check 2]', check: { stat: 'might', dc: 2 }, pass: 'grab_win', fail: 'grab_fail' },
          { text: '"Depends. What did you steal?"', go: 'steal' },
        ],
      },
      help: {
        text: [
          '@you She went that way! Toward the fish market!',
          'The watchmen thunder past. Scarlett leans casually against a barrel beside you until they\'re gone, then tips her hat.',
          '@scarlett:happy Well, well. A landlubber with a heart of gold. I\'ll remember that, love.',
        ],
        aff: 6,
        flag: 'scarlett_lied',
        next: 'name',
      },
      grab_win: {
        text: [
          'You catch her wrist as she darts past. She spins, startled — and you hold on. She tugs. You don\'t budge.',
          'Her grin widens.',
          '@scarlett:surprised Oho! Strong grip! I *like* that in a person.',
          'Then she twists her wrist, slips free like an eel, and kisses your cheek before you can react.',
          '@scarlett:smug But not strong enough. Next time, love!',
          'She vaults over the watchmen\'s heads and is gone.',
        ],
        aff: 7,
        flag: 'scarlett_grip',
        next: 'name_later',
      },
      grab_fail: {
        text: [
          'You lunge for her wrist. She sidesteps, and you trip over a coil of rope and land face-first on the dock.',
          '@scarlett:happy Oof! Valiant attempt! Points for enthusiasm!',
          'She tips her hat to you and vaults over the watchmen\'s heads.',
        ],
        aff: 3,
        next: 'name_later',
      },
      steal: {
        text: [
          'She pulls a heavy leather ledger from inside her coat and waves it at you.',
          '@scarlett:smug The private records of Lord Pomfrey\'s trading company. Proof he\'s been smuggling slaves on his "spice ships." I\'m taking it to the magistrate. Well. Slipping it under the magistrate\'s door. Pirates aren\'t welcome in courtrooms.',
          '@you ...Then go. I didn\'t see you.',
          'She grins and tips her hat.',
        ],
        aff: 7,
        flag: 'scarlett_ledger',
        next: 'name',
      },
      name: {
        text: [
          '@scarlett Captain Scarlett Vane. "Red," to my friends. Of the *Crimson Tide* — that\'s her, anchored in the bay, the prettiest ship you ever saw.',
          '@you {name}.',
          '@scarlett:happy {name}! Good name. Strong. Sounds like it could swing a cutlass.',
          '@scarlett:smug Come find me at the docks, {name}. Or the Wyvern, after dark. I\'ll buy you a rum. Pirates always pay their debts.',
          'And she\'s off, coat flaring, laughing all the way down the pier.',
        ],
        end: true,
      },
      name_later: {
        text: [
          'That evening, a note is delivered to you at the tavern, tied to a gold doubloon.',
          '*To the landlubber with the grip. Captain Scarlett "Red" Vane of the Crimson Tide requests a rematch. Docks or tavern, whenever you like. First rum\'s on me. — S.V.*',
          'Below that, a little drawing of a skull wearing a heart-shaped eyepatch.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'The deck of the *Crimson Tide* gleams in the morning sun. Scarlett tosses you a cutlass and draws her own.',
          { if: 'scarlett_lied', text: "@crew So this is the one who sent the whole harbor watch to the fish market, Cap'n? They were there till sundown. Arrested a halibut." },
          { if: 'scarlett_grip', text: "@scarlett:smug Here for that rematch, love? Let's see if that grip of yours can hold on to a sword." },
          '@scarlett Every member of my crew learns to fight. Even the cook. *Especially* the cook. You want to drink with pirates, love, you learn to fight like one.',
          '@scarlett:smug First lesson: there are no rules. Second lesson: there are *no rules.* Third lesson: if someone says "no rules," they\'re about to kick you in the shin.',
          'She kicks you in the shin.',
        ],
        choices: [
          { text: 'Fight back with everything you\'ve got. [Might check 2]', check: { stat: 'might', dc: 2 }, pass: 'duel_win', fail: 'duel_lose' },
          { text: 'Fight dirty — throw a bucket of seawater at her.', go: 'bucket', aff: 7 },
        ],
      },
      duel_win: {
        text: [
          'Steel rings across the deck. She\'s fast — impossibly fast, dancing across the planks, flicking her blade at your face — but you hold your ground, parry, and press. The crew gathers round, whooping.',
          'Finally, you catch her blade on your hilt, twist, and send her cutlass clattering across the deck.',
          'Silence. Scarlett stares at her empty hand. Then she throws her head back and roars with laughter.',
          '@scarlett:happy Disarmed! On my own deck! In front of my crew! Oh, you\'re *wonderful!*',
          '@crew Cap\'n hasn\'t lost a duel in nine years.',
          '@scarlett:angry *Shut it, Bones.*',
        ],
        aff: 10,
        flag: 'scarlett_disarmed',
        next: 'rigging',
      },
      duel_lose: {
        text: [
          'Steel rings across the deck. She dances circles around you, laughing, tapping you on the shoulder, the hip, the rear, with the flat of her blade. After a minute, she flicks your cutlass out of your hand and catches it.',
          '@scarlett:smug Not bad! Not good, but not bad. You didn\'t drop it until I made you. Most landlubbers drop it the moment I smile.',
          'She hands it back, hilt first.',
          '@scarlett:happy We\'ll make a pirate of you yet.',
        ],
        aff: 5,
        next: 'rigging',
      },
      bucket: {
        text: [
          'You grab the nearest bucket and fling its contents straight at her. Seawater, and a startled fish, hit her square in the face.',
          'The crew falls silent. Scarlett stands there, dripping, a mackerel on her hat.',
          'Then she grins — a huge, delighted grin.',
          '@scarlett:happy *Now* you\'re thinking like a pirate!',
        ],
        flag: 'scarlett_mackerel',
        next: 'rigging',
      },
      rigging: {
        text: [
          'Afterward, she takes you up the rigging — all the way to the crow\'s nest, high above the bay. From up here the whole harbor is spread out below, and the open sea stretches out to the horizon, blue and endless.',
          '@scarlett:happy This is my favorite place in the world. Up here, it\'s just you, the wind, and the edge of the map.',
          '@scarlett:sad Every port I sail into, I think about staying. Settling down. And then I climb up here and look at the horizon, and I can\'t. There\'s always another island. Another adventure.',
          'She looks at you sideways, the wind tugging at her red curls.',
          '@scarlett:smug Ever wanted to see what\'s past the edge of the map, love?',
        ],
        choices: [
          { text: '"With you? Absolutely."', go: 'yes', aff: 8 },
          { text: '"I think I\'d rather see what\'s right here."', go: 'here', aff: 7 },
        ],
      },
      yes: {
        text: [
          'She laughs, delighted, and throws an arm around your shoulders.',
          '@scarlett:smug Careful, love. Say things like that to a pirate and she might just kidnap you.',
          '@you Is that a threat?',
          '@scarlett:happy It\'s a *promise.*',
        ],
        flag: 'scarlett_horizon',
        end: true,
      },
      here: {
        text: [
          'She pushes her hat back with one finger and studies you, the grin fading into something softer and more thoughtful.',
          '@scarlett:blush ...Funny. That\'s the first time in nine years anyone\'s made "right here" sound like an adventure.',
        ],
        flag: 'scarlett_right_here',
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'Scarlett bursts into the tavern waving a weathered scrap of parchment.',
          '@scarlett:happy A MAP! A real one! Captain Blackheart\'s treasure, buried on Skull Isle, half a day\'s sail from here! I\'m sailing on the evening tide. And I want you on my crew.',
          '@scarlett:blush Only for this voyage! Probably. Unless you like it. Then forever. No pressure.',
          { if: 'scarlett_mackerel', text: "When you climb aboard that evening, you notice that every bucket on the *Crimson Tide* has been nailed to the deck. Bones won't meet your eye." },
          'The voyage is glorious — until it isn\'t. Halfway to Skull Isle, the sky turns black. A storm comes screaming out of the west, and the *Crimson Tide* is tossed like a toy on mountainous waves.',
          '@scarlett:surprised ALL HANDS! REEF THE MAINSAIL! — {name}, the rigging\'s snapped! If that sail goes, we go with it!',
        ],
        choices: [
          { text: 'Climb the mast in the storm and secure the sail. [Might check 3]', check: { stat: 'might', dc: 3 }, pass: 'mast', fail: 'mast_fail' },
          { text: 'Take the wheel so Scarlett can climb.', go: 'wheel', aff: 7 },
        ],
      },
      mast: {
        text: [
          'You climb. The rain is horizontal. The wind tries to tear you off the mast. You climb anyway, hand over hand, and reach the snapped line and haul it in with every ounce of strength you have, and lash it fast.',
          { if: 'scarlett_grip', text: "Somewhere below you, over the wind, you hear her shout: \"THAT'S THE GRIP! THAT'S THE GRIP I WAS TALKING ABOUT, BONES!\"" },
          'The sail holds. The ship steadies. Below, the crew cheers so loudly you can hear it over the storm.',
          'When you climb down, Scarlett catches you at the bottom of the rigging and doesn\'t let go.',
          '@scarlett:angry You absolute madwoman — madman — mad *whatever you are* — you could have died!',
          '@scarlett:happy That was the bravest thing I\'ve ever seen anyone do on this ship. And I\'ve seen Bones eat the cook\'s stew.',
        ],
        aff: 12,
        flag: 'scarlett_mast',
        next: 'island',
      },
      mast_fail: {
        text: [
          'You climb. The wind snatches you off the rigging halfway up. You fall — and Scarlett catches you, one arm around your waist, the other clinging to a rope.',
          '@scarlett:surprised GOT YOU! — Hold on to me!',
          'Together, you make it to the top and lash the sail fast. When you climb down, she\'s shaking — and it isn\'t from the cold.',
          '@scarlett:sad Don\'t you *ever* do that again. I nearly lost you, love.',
        ],
        aff: 8,
        flag: 'scarlett_mast',
        next: 'island',
      },
      wheel: {
        text: [
          'You grab the wheel and hold it against the storm while Scarlett scrambles up the mast like a cat. She lashes the sail. The ship steadies. When she slides back down, soaked to the bone, she finds you still holding the wheel, white-knuckled, keeping the bow into the waves.',
          '@scarlett:surprised You held her steady. In a storm. Your first time at a wheel.',
          '@scarlett:happy Bones, are you seeing this?',
          '@crew Aye, Cap\'n. Natural sailor.',
        ],
        flag: 'scarlett_wheel',
        next: 'island',
      },
      island: {
        text: [
          'By dawn the storm has passed, and the *Crimson Tide* drops anchor off Skull Isle. You dig all morning at the spot marked X. Finally, your shovel strikes wood: an old iron-bound chest.',
          'Scarlett pries it open. Inside there\'s no gold. No jewels. Just a single compass, tarnished brass, and a faded note.',
          '*To whoever finds this: a compass that points not north, but to the thing you want most. I spent my life chasing treasure. This was the only treasure that mattered. — Blackheart.*',
          'Scarlett picks up the compass. The needle spins wildly — and then settles.',
          'It\'s pointing at you.',
        ],
        mood: 'surprised',
        choices: [
          { text: '"...Is it broken?"', go: 'broken', aff: 6 },
          { text: 'Say nothing. Just look at her.', go: 'look', aff: 10 },
        ],
      },
      broken: {
        text: [
          'She shakes it. She turns in a circle. The needle stays pointing at you.',
          '@scarlett:blush ...It\'s not broken.',
          'For once, Captain Scarlett Vane has nothing clever to say. She snaps the compass shut and stuffs it into her coat, cheeks as red as her hair.',
          '@scarlett:angry We are *never* speaking of this. Bones! We\'re sailing home!',
        ],
        end: true,
      },
      look: {
        text: [
          'You don\'t say anything. Neither does she. She looks at the compass, and then at you, and then at the compass again.',
          'Then she closes it, very carefully, and puts it in her coat pocket over her heart.',
          '@scarlett:sad Nine years I\'ve been sailing, looking for something past the horizon.',
          { if: 'scarlett_horizon', text: "@scarlett:blush You said you'd come and see it with me. Past the edge of the map. And all along the compass knew..." },
          '@scarlett:blush Turns out I left it on the dock in Clichéton.',
          'She kisses you on the beach of Skull Isle, with the whole crew whistling and cheering from the ship.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'The *Crimson Tide* lies at anchor in the bay under a full moon. Scarlett has given the whole crew shore leave. The ship is empty, creaking softly, lanterns swaying.',
          { if: 'scarlett_wheel', text: "As you pass the great wheel on your way below, you notice a new brass plate screwed to its hub. It reads: *HELD IN THE STORM BY {name}. FIRST TIME. NATURAL SAILOR.*" },
          'She\'s waiting in the captain\'s cabin — a cozy, cluttered room of maps and brass instruments and a great bed under the stern windows. She\'s taken off her hat and her coat and her boots. Without them she looks less like a legend and more like a woman. Nervous.',
          '@scarlett:blush I\'ve never brought anyone in here. Not once. Captain\'s cabin\'s sacred. It\'s the only place on the sea that\'s mine.',
          'She pulls the compass out and sets it on the table. The needle swings toward you.',
          '@scarlett:sad I\'m a pirate, love. I take what I want. But I don\'t want to *take* you. I want you to *stay.*',
        ],
        choices: [
          { text: '"I\'m not going anywhere, Captain."', go: 'stay', aff: 10 },
          { text: 'Pin her against the map table and kiss her. Pirate-style. [Might check 4]', check: { stat: 'might', dc: 4 }, pass: 'pin', fail: 'stay' },
        ],
      },
      stay: {
        text: [
          'She grins — the old, infuriating, charming grin — but her eyes are shining.',
          '@scarlett:happy Good. Because I\'ve just raised anchor in my heart, and there\'s no turning this ship around.',
          '@scarlett:blush ...That was a terrible line. Kiss me before I say another one.',
        ],
        next: 'night',
      },
      pin: {
        text: [
          'You close the distance and pin her back against the map table, scattering charts and compasses. She gasps — then laughs, breathless.',
          '@scarlett:surprised Oho! *Now* who\'s the pirate?',
          '@you Still you. I\'m just boarding your ship.',
          '@scarlett:smug ...Oh, that\'s *good.* I\'m stealing that one.',
        ],
        aff: 14,
        flag: 'scarlett_boarded',
        next: 'night',
      },
      night: {
        text: [
          "The ship rocks gently beneath you. The moon pours silver through the stern windows.",
          "@scarlett:smug Right. Boarding procedure. First, the boarding party removes the captain's coat.",
          "She turns around and holds out her arms, grinning over her shoulder. You slide the heavy crimson coat off her shoulders. Underneath she's wearing a loose linen shirt and a leather corset, and she looks at you sidelong.",
          "@scarlett Second, the corset. Laces at the back. Twelve of 'em. I tied 'em extra tight tonight, to make you work for it.",
          "She did. You work for it. She laughs at your fumbling, then stops laughing when you kiss the back of her neck between laces. By the eighth lace she's braced both hands against the map table, breathing hard.",
          "@scarlett:blush Faster, love. That's an order from your captain.",
          "@you I thought there were no rules?",
          "@scarlett:surprised ...Oh, you *cheeky* —",
          "She spins, grabs your collar and drags you onto the great bed under the stern windows. She's as bold in this as in everything: laughing, daring, demanding, swearing in at least four languages. Every so often she goes suddenly, sweetly quiet and just holds you, as if making sure you're real. You trace the old scars on her ribs, the sword cut, the bullet graze, the kraken's mark. She tells you the story of each one in a breathless whisper, and loses the thread of the last story halfway through...",
          "...",
          "At one point the ship lurches on a swell and you both tumble off the bed onto a pile of maps. She lies there wheezing with laughter, a chart of the Grey Sound stuck to her shoulder.",
          "@scarlett:happy Rule one of romance on the high seas: *always* tie down the bed.",
          "At dawn you lie together in a tangle of sheets and maps, her head on your chest, red curls everywhere, gulls crying outside.",
          { if: 'scarlett_mast', text: "@scarlett:sad When you went up that mast in the storm... I've never been afraid on my own ship before, love. Not once. Not even with a kraken on the foredeck. I was afraid for *you.* Didn't know I could be." },
          "@scarlett Hey, love. You know what's funny?",
          "@you What?",
          "@scarlett:blush I've been all over the world. Every sea, every shore. And I've never once wanted to stay in bed past sunrise.",
          "She pulls the blanket over both your heads.",
          "@scarlett:happy The sea can wait.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "The cabin door bangs open. First Mate Bones is standing there holding a mug of coffee and staring directly at the ceiling.",
          "@crew Cap'n. The crew's back from shore leave. They, ah, saw the stern windows were fogged up from the harbor. All of 'em. There's betting.",
          "Scarlett sits up in the tangle of sheets, completely unashamed, hair a wild red cloud.",
          "@scarlett:smug Betting on *what,* Bones?",
          "@crew Whether you'll finally be makin' an honest landlubber of yourself, Cap'n. Or an honest pirate of them. Odds are about even.",
          { if: 'scarlett_boarded', text: "@crew Also the map table's broke, Cap'n. Clean in half. The lads have questions." },
          "Scarlett turns to you, grinning.",
          "@scarlett:happy Well, love? Want to give the crew something to bet on?",
        ],
        choices: [
          { text: "Walk out on deck with her, hand in hand, in front of everyone.", go: "deck", aff: 6 },
          { text: "\"Tell them to come back in an hour.\"", go: "hour", aff: 6 },
          { text: "\"Put me down for ten gold on 'honest pirate.'\"", go: "bet", aff: 5 },
        ],
      },
      deck: {
        text: [
          "You walk out onto the deck together, hand in hand, still rumpled, in yesterday's clothes. The whole crew goes silent. Then the whole crew erupts.",
          "Hats go flying. Somebody fires a cannon. Somebody else starts a shanty, very loudly, about a captain who lost her heart in port to a landlubber.",
          "@scarlett:blush ...They've been writing that one for weeks, haven't they.",
          "@crew Aye, Cap'n. There's eleven verses.",
          { if: 'scarlett_mackerel', text: "@crew Verse six is about the mackerel, Cap'n. It rhymes with \"spectacle.\" Sort of." },
        ],
        end: true,
      },
      hour: {
        text: [
          "@scarlett:smug You heard 'em, Bones. Come back in an hour.",
          "@crew An hour, Cap'n?",
          "@scarlett:blush ...Make it two.",
          "Bones closes the door. Through it you can hear him shouting: \"PAY UP, LADS!\"",
        ],
        end: true,
      },
      bet: {
        text: [
          "Scarlett slaps the mattress and roars with laughter.",
          "@scarlett:happy Ha! Betting on your own corruption! Bones, take the bet!",
          "@crew Aye, Cap'n. Ten gold on \"honest pirate.\" Very good odds.",
          "When the door closes, Scarlett pins you back down in the sheets.",
          "@scarlett:smug You're going to have to *earn* that bet, love. Lessons start right now.",
        ],
        flag: 'scarlett_bet',
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'You don\'t watch Starfall from the hill. Scarlett sends a longboat for you, rowed by Bones in his best shirt, and takes you out past the harbor, past the lighthouse, to the open sea where the *Crimson Tide* waits with all her lanterns lit.',
          'The whole crew is on deck. They cheer when you climb aboard. Scarlett meets you at the rail in her finest crimson coat, the compass on a chain around her neck.',
          { if: 'scarlett_bet', text: "@crew Ten gold, as promised. \"Honest pirate.\" The lads've agreed you won fair and square. Several of 'em are very upset." },
          '@scarlett:happy Best view of Starfall in the world is from the deck of a ship, love. No hills in the way. No crowds. Just sky.',
          { if: 'scarlett_date_harbor', text: "@scarlett:blush Better than the little red rowing boat, even. ...Close, though. Very close." },
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'The stars begin to fall, and the sea reflects every one of them, so the *Crimson Tide* seems to sail through a sky full of light above and below.',
          'Scarlett takes your hand.',
          '@scarlett I\'ve got a proposition. Two, actually. First: be my first mate.',
          '@crew *Oi!*',
          '@scarlett:smug Bones, you\'re promoted to Captain of the Longboat. Shut it.',
          '@scarlett:blush Second...',
          'She pulls a gold ring from her pocket. It\'s set with a red gem like a drop of the sunset.',
          '@scarlett:blush Every pirate needs someone to come home to. Even if home is a ship. Marry me, {name}. Sail with me. Let\'s see what\'s past the edge of the map. *Together.*',
        ],
        choices: [
          { text: 'Say yes.', go: 'yes' },
          { text: 'Say yes. And then: "Red... what if you didn\'t have to leave?"', go: 'home', if: 'scarlett_right_here' },
          { text: 'Say yes. And then: "First mate? Captain, I want a ship of my own."', go: 'rival', if: { any: ['scarlett_disarmed', 'scarlett_boarded'] } },
        ],
      },
      yes: {
        text: [
          'You say yes. The crew fires every cannon on the ship in celebration. Several are accidentally loaded. Nobody minds.',
        ],
        mood: 'happy',
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'You are married on the deck of the *Crimson Tide* by a very drunk ship\'s chaplain, with the whole crew in tears. Bones gives a speech. It\'s mostly about the stew.',
          'You sail the Sapphire Sea together. You fight krakens and Navy frigates and the occasional sea serpent. You free slave ships, rob crooked merchants, and give most of it away. Scarlett teaches you every shanty she knows. You learn to swing from the rigging. You only fall in the sea twice.',
          'You come back to Clichéton every Starfall. Scarlett buys everyone at the Tipsy Wyvern a round and tells increasingly exaggerated stories about your adventures. In the latest version, you defeated the kraken by yourself. With a spoon.',
          'Blackheart\'s compass still hangs around her neck. She checks it sometimes, when she thinks you aren\'t looking.',
          'It still points to you. Every time.',
        ],
        ending: 'scarlett',
      },
      home: {
        text: [
          "You say yes. The crew cheers. And then, while they're still cheering, you take her hands and say the other thing.",
          "@you Every port you sail into, I'll bet there's someone on the dock waving goodbye. Never hello.",
          "@you What if there was a dock you came home to? What if somebody was always on it?",
          "The cheering dies away. Scarlett looks at you. Then she looks out at the open sea, the edge of the map, all that endless horizon she has chased for nine years.",
          "Then she looks back at Clichéton: the little lights of the harbor, the Wyvern, the dock where she first dropped out of the rigging at your feet.",
          "@scarlett:sad ...I've never stayed anywhere, love. I don't know how. What if I'm terrible at it?",
          "@you Then you'll be terrible at it here. With me.",
          "She laughs, wet-eyed. She takes off her great feathered hat, turns, and drops it on Bones's head.",
          "@scarlett:happy Captain Bones. She's yours. Bring her home every Starfall, or I'll come and get her.",
          "@crew ...Cap'n?",
          "@scarlett:blush Not Cap'n. Not any more. Just Red.",
        ],
        next: 'home_epilogue',
      },
      home_epilogue: {
        text: [
          "*Some time later...*",
          "Scarlett Vane is very bad at staying. For the first month, she climbs onto the roof of your cottage every morning to check the horizon. She rearranges the furniture like cargo. She tries to tie down the bed. You let her.",
          "Then the harbormaster retires, and Clichéton needs someone who knows every current, every reef and every smuggler's trick on the Sapphire Sea. The council debates it for three hours. Then Scarlett walks in, puts her boots on the table and says \"I know where all the bodies are buried. *Literally.* I buried most of them,\" and they give her the job on the spot.",
          "She is the best harbormaster in the kingdom's history. Smugglers hate her. Slave ships give Clichéton a very wide berth. The harbor watch salute her, nervously, every morning.",
          "Every Starfall the *Crimson Tide* sails home, flying Bones's new flag: a skull wearing a harbormaster's cap. The crew brings stories, and treasure, and the latest verses of the shanty, which now has forty-one.",
          "And at the end of every day, Scarlett walks down to the end of the pier, where you are waiting, and you wave.",
          "Hello. Every single time. Hello.",
          "Blackheart's compass hangs by the cottage door. You took it down once to polish it and found the needle wasn't pointing at you any more.",
          "It was pointing at the house.",
        ],
        ending: 'scarlett_home',
      },
      rival: {
        text: [
          "You say yes to the ring. Then you put your hand on your hip, exactly the way she does, and tip your head.",
          { if: 'scarlett_disarmed', text: "@you But first mate? Captain, I disarmed you on your own deck. I'm not taking orders from you. I'm taking *your hand.*", else: "@you But first mate? Captain, I boarded your ship and you *let* me. I'm not taking orders from you. I'm taking *your hand.*" },
          "The crew goes very quiet. Scarlett's scarred eyebrow climbs all the way up. Then she laughs, the big wild laugh that started this whole thing, so loud the gulls lift off the yardarm.",
          "@scarlett:happy Oh, you *magnificent* — Bones! Tell them!",
          "@crew Aye, Cap'n. There's a ship. Impounded at the Navy dock. Nobody's claimed her.",
          { if: 'scarlett_ledger', text: "@scarlett:smug Lord Pomfrey's old spice ship, love. The one that ledger sank. Fitting, don't you think? Turn a slaver into a free ship." },
          "@scarlett:smug I was going to steal her for you as a wedding present. Now I suppose you'll have to steal her *yourself.* Tonight. Before the Navy wakes up.",
          "@scarlett:blush ...Race you to the horizon, Captain {name}. Loser buys the rum.",
        ],
        next: 'rival_epilogue',
      },
      rival_epilogue: {
        text: [
          "*Some time later...*",
          "There are two pirate ships on the Sapphire Sea now that every sailor knows by sight: the *Crimson Tide,* and her sister, the *Starfall,* which you stole from the Navy dock at midnight while Scarlett's crew distracted the guards with a shanty.",
          "You are married on a sandbar halfway between the two ships, so that neither captain has to set foot on the other's deck and lose face. Bones officiates. It is extremely romantic and very complicated.",
          "Then you spend years trying to outdo each other. She robs a Navy frigate; you rob two. You free a slave fleet off the Jade Coast; she frees the one behind it and sends you a note saying *you missed one, love.* The shanty-writers of four kingdoms can't keep up.",
          "You board each other's ships constantly. Sometimes there's swordplay. Sometimes there's very little sword at all. Every time she loses a duel she demands a rematch. Every time you lose a duel you demand one too. Nobody has ever kept track of the score, because nobody has ever wanted it to end.",
          "You meet in a different port every week, always by surprise, always in a tavern with a booth. Neither of you ever says where you're going next. You never need to.",
          "Because Blackheart's compass hangs around her neck, and its twin hangs around yours — you found it hidden in your new ship's captain's cabin, the night you stole her.",
          "Both needles point the same way. Toward each other. All across the edge of the map.",
        ],
        ending: 'scarlett_rival',
      },
    },
  },
});
