FL.addCharacter({
  id: 'malzahra',
  name: 'Malzahra, the Dread Queen',
  short: 'Malzahra',
  trope: 'Lonely Demon Queen',
  color: '#a35cff',
  favStat: 'might',
  endingTitle: 'The Dread Queen\'s Consort',
  teaser: 'Great curling horns, a cape that billows without wind, and a voice that announces "AT LAST!" to nobody in particular.',
  blurb: 'Queen of the Underrealm, Sovereign of Ten Thousand Imps, Would-Be Conqueror of FantasyLandia. Theatrical, prideful and far too fond of villain monologues. She has been waiting a thousand years for a worthy rival. She has never once had a friend.',
  schedule: [null, null, 'watchtower'],
  unlock: function (s) { return !!s.flags.demon_attack; },
  gifts: { love: ['chocolate'], like: ['wine', 'axe', 'gem'], hate: ['candle'] },
  giftLines: {
    love: ['@malzahra What is this? A cursed artifact? A trap? — oh. Oh, it\'s *chocolate.*', 'She eats one. Her eyes roll back. Her horns literally glow.', '@malzahra The Underrealm has NOTHING like this. We have *ash.* I am conquering your kingdom for this ALONE.'],
    like: '@malzahra A tribute! At last, someone with proper respect! I shall add it to my treasury. It is the only thing in my treasury. Do not tell anyone.',
    neutral: '@malzahra Hmph. A mortal trinket. I suppose I shall... keep it. In a place of honor. Next to my throne. For intimidation purposes.',
    hate: ['She recoils with a hiss as the holy light touches her.', '@malzahra BLESSED?! You dare bring the light of the heavens into my dread lair?! Begone, foul candle!', 'She throws it out the window. Somewhere below, an imp yelps.'],
  },
  talk: [
    ['@malzahra MORTAL! You return to my lair! Do you come to beg for mercy? To swear fealty? To... just hang out?', '@malzahra ...The third one is acceptable.'],
    ['@malzahra My imps have been very bad today. They stole a goat. I told them "go forth and spread terror." I did not say *goat.*', '@malzahra We are keeping the goat. His name is Lord Ruin.'],
    ['@malzahra I have been practicing my evil laugh. Listen. MWAHAHAHA. ...Was that menacing? Be honest. The council says it is "giving community theatre."'],
    ['@malzahra Do you know how long it has been since anyone challenged me? Nine hundred years! The last hero I fought was so terrified he fainted before I finished my monologue!', '@malzahra It was a very good monologue. I rewrote it eleven times.'],
    ['She is sitting on the windowsill, chin in her hands, staring out at the lights of Clichéton.', '@malzahra Your people laugh so much. In taverns. In the streets. Why do they laugh so much?'],
    ['@malzahra I have decided that when I conquer this kingdom, I will spare you. And the chocolate shop. You are both too valuable to destroy.'],
  ],
  afterTalk: [
    ["@malzahra HERO! I have drafted a new monologue. It is about you. It contains the phrase \"thine eyes are as twin suns of terrible beauty.\" Gnarlbit wept. Shall I perform it? ...Later. In private. Wearing less."],
    ["@malzahra The imps have started calling you \"the Queen's Weakness.\" I have punished them by making them sweep the tower. I have not told them they are right."],
    ["She leans close, horns glowing faintly.", "@malzahra I replaced the curtains. Fireproof, this time. Enchanted. You understand what that means, hero? It means *no more interruptions.*"],
    ["@malzahra I conquered nothing today. Not one village. I sat on my throne and thought about you and smiled like an idiot. My council thinks I have been cursed."],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'The Old Watchtower has been extensively redecorated: purple banners, skulls (painted wood), a sign reading DREAD LAIR, and a red carpet leading up the stairs that is clearly an old tablecloth.',
          'At the top, on a throne made of stacked crates draped in velvet, sits the horned woman from the rooftop. Up close she\'s even more striking: ashen-violet skin, long silver-white hair, glowing amber eyes, and a pair of magnificent black horns curling back from her brow.',
          'She rises to her feet. Her cape billows dramatically, though there is no wind. You spot an imp behind the throne, frantically fanning it.',
          '@malzahra AT LAST! The hero comes to face me! Tremble, mortal, for you stand before MALZAHRA! Dread Queen of the Underrealm! Sovereign of Ten Thousand Imps! Devourer of Light! Breaker of —',
          '@malzahra — Gnarlbit, what comes after "Breaker"?',
          '@gnarlbit ...Of Chains, Your Dreadness.',
          '@malzahra BREAKER OF CHAINS!',
        ],
        aff: 10,
        choices: [
          { text: 'Draw your weapon. "Then let\'s settle this, Dread Queen." [Might check 2]', check: { stat: 'might', dc: 2 }, pass: 'challenge_win', fail: 'challenge_fail' },
          { text: 'Applaud. "That was an excellent introduction."', go: 'applaud' },
          { text: '"Why did you attack the fountain?"', go: 'fountain' },
        ],
      },
      challenge_win: {
        text: [
          'Steel rings. She lunges with a blade of black fire, and you meet it. Sparks fly. For a dizzying minute you clash back and forth across the tower — and she\'s *good*, but you hold your ground.',
          'She leaps back, breathing hard. And then she starts laughing — a big, wild, joyful laugh.',
          '@malzahra YES! YES! You *fight back!* No one has fought back in nine centuries! They faint! They flee! They wet themselves! But YOU —',
          '@malzahra You may be the first worthy rival I have ever had.',
        ],
        aff: 8,
        next: 'name',
      },
      challenge_fail: {
        text: [
          'You draw your weapon. She flicks one finger. Your sword flies out of your hand and embeds itself in the ceiling.',
          '@malzahra Hmph. Brave, at least. Foolish, but brave. Come back when you can lift something heavier than a butter knife, little hero, and *then* we will have a proper battle.',
          'Despite the scorn, she looks almost hopeful.',
        ],
        aff: 3,
        next: 'name',
      },
      applaud: {
        text: [
          'You clap. Slowly. Then enthusiastically.',
          'Malzahra freezes mid-pose. Her amber eyes widen.',
          '@malzahra You... liked it?',
          '@you The cape was a nice touch.',
          '@malzahra GNARLBIT, DID YOU HEAR THAT? THE CAPE WAS A NICE TOUCH!',
          'The imp behind the throne gives a tiny, exhausted thumbs-up.',
        ],
        aff: 6,
        next: 'name',
      },
      fountain: {
        text: [
          '@malzahra It was a *test!* Of your town\'s defenses! A reconnaissance mission! Very strategic!',
          '@you Your imps said they were claiming the bakery.',
          '@malzahra ...The bakery was also strategic.',
          'There is a long pause.',
          '@malzahra Have you *had* the cinnamon rolls? We do not have cinnamon in the Underrealm. We have *ash.*',
        ],
        aff: 5,
        next: 'name',
      },
      name: {
        text: [
          '@malzahra And who are you, hero? Speak your name, so that it may be remembered in the annals of my glorious conquest!',
          '@you {name}.',
          '@malzahra {name}. I shall have it carved on a monument. A small one. Probably. Budgets are tight.',
          'She sweeps her cape around herself and turns away dramatically — then peeks back over her shoulder.',
          '@malzahra You may return to my lair. In the evenings. To... continue our rivalry. If you wish. I will be here. Plotting. Probably alone.',
          '@malzahra Definitely alone.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Malzahra is waiting at the top of the tower with two swords and a very serious expression.',
          '@malzahra Tonight, hero, we duel! A true battle between Light and Darkness! The fate of the world hangs in the balance!',
          '@malzahra ...Also I will make tea afterward. The kettle is already on.',
          'She tosses you a blade.',
        ],
        choices: [
          { text: 'Fight with everything you\'ve got. [Might check 3]', check: { stat: 'might', dc: 3 }, pass: 'duel_win', fail: 'duel_lose' },
          { text: 'Fight defensively and let her show off.', go: 'duel_show', aff: 5 },
        ],
      },
      duel_win: {
        text: [
          'It\'s the fight of your life. She\'s fast and fierce and fighting with a wild grin, and every time you think you have her she flips over your head or blocks with her tail. But you push, and push, and finally — a feint, a twist, and her sword clatters across the floor.',
          'She stares at her empty hand. Then at you. Then she throws her head back and *roars* with laughter.',
          '@malzahra DEFEATED! I am DEFEATED! For the first time in a thousand years! Oh, this is *wonderful!* I must write a dramatic lament!',
        ],
        aff: 10,
        next: 'tea',
      },
      duel_lose: {
        text: [
          'You fight bravely. You last four minutes. Then her tail sweeps your legs out from under you and you land on your back with her sword at your chin.',
          '@malzahra Victory! Darkness triumphs! MWAHAHAHA!',
          'Then she offers you a hand up.',
          '@malzahra You lasted four minutes. The last hero lasted eleven seconds. You are improving, {name}. I am... strangely proud.',
        ],
        aff: 5,
        next: 'tea',
      },
      duel_show: {
        text: [
          'You hold back and let her flourish. She cartwheels. She spins. She does a backflip off the throne and lands in a perfect villainous pose.',
          '@malzahra Did you see that? DID YOU SEE THAT? I have been practicing that backflip for two hundred years and no one has ever been here to see it!',
          'She is so happy her horns are glowing.',
        ],
        next: 'tea',
      },
      tea: {
        text: [
          'Afterward, true to her word, she makes tea. It\'s terrible. It\'s black and smoky and tastes faintly of brimstone. She watches anxiously as you drink it.',
          '@malzahra Is it... adequate? I learned from a book. "Mortal Customs and How to Exploit Them."',
          '@you It\'s great.',
          '@malzahra You are lying. Your face is doing a thing. But it is a *kind* lie. I will accept it.',
          'She sits down on the floor beside you — not on her throne — and hugs her knees.',
          '@malzahra My council does not take me seriously. Lord Baalgrim, Duke Ashmaw, the Twins of Cinder. They think I am a child playing at conquest. I have ruled for a thousand years, and they still call me "the young queen."',
        ],
        choices: [
          { text: '"I take you seriously."', go: 'serious', aff: 8 },
          { text: '"Do you actually want to conquer the world?"', go: 'want', aff: 6 },
        ],
      },
      serious: {
        text: [
          'She turns and looks at you. For once, there\'s no theatrical flourish. Just a long, searching look.',
          '@malzahra ...You do, don\'t you. You fought me properly. You did not laugh.',
          '@malzahra Thank you, {name}.',
          'Then she clears her throat and leaps up onto the throne.',
          '@malzahra THAT WILL BE ALL, HERO. RETURN TOMORROW SO THAT WE MAY CONTINUE OUR ETERNAL STRUGGLE.',
        ],
        end: true,
      },
      want: {
        text: [
          'She opens her mouth to say "of course," then stops.',
          '@malzahra ...I want my people to stop living on ash. I want to see the sky without a ceiling of smoke. I want... I do not know. I have never been asked what I *want.* Only what I will *conquer.*',
          'She looks genuinely troubled. She drinks her terrible tea in thoughtful silence.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'Malzahra drags you to a table covered with an enormous map of FantasyLandia. It is marked with dozens of little flags and arrows, and also stickers. Gold stars, mostly. A few hearts.',
          '@malzahra Behold! My GRAND PLAN OF CONQUEST! Phase one: seize Clichéton! Phase two: seize the capital! Phase three: seize the chocolate supply!',
          '@you Why are there heart stickers on the bakery?',
          '@malzahra ...Phase two-and-a-half.',
          'She traces a long finger across the map, to a vast blank region on the eastern edge marked "THE BADLANDS (Nobody Lives Here)."',
          '@malzahra The truth is, the Underrealm is dying. The fires are going out. My imps grow thin. Ten thousand of them, and they look to *me.* I must take land from somewhere.',
        ],
        choices: [
          { text: '"Nobody lives in the Badlands. What if you didn\'t have to conquer anything?"', go: 'diplomacy', aff: 10 },
          { text: '"Then I\'ll help you. But no hurting innocent people."', go: 'help', aff: 8 },
          { text: '"Have you ever just... asked the King?"', go: 'ask', aff: 7 },
        ],
      },
      diplomacy: {
        text: [
          'She stares at the map. She stares at the Badlands. Her mouth slowly falls open.',
          '@malzahra It is... empty. It has been empty this whole time. I was so focused on *conquering* that I never thought to... *settle.*',
          '@malzahra If my people lived there, we would not be invaders. We would be... neighbors.',
          'She turns to you with a look of dawning wonder.',
          '@malzahra {name}, you are a tactical GENIUS. Or I am a fool. Possibly both.',
        ],
        next: 'baalgrim',
      },
      help: {
        text: [
          '@malzahra *Help* me? The hero, helping the Dread Queen? That is — that is not how the story goes!',
          '@you Maybe it\'s a different story.',
          'She looks at you for a long moment, her amber eyes glowing softly in the dim tower.',
          '@malzahra ...I think I would like to be in a different story.',
        ],
        next: 'baalgrim',
      },
      ask: {
        text: [
          '@malzahra ASKED? The Dread Queen does not *ask!* The Dread Queen *demands!* With *fire!* And *ominous portents!*',
          '@you Has the fire worked so far?',
          '@malzahra ...We stole a goat.',
          'She sits down heavily on her crate-throne and puts her head in her hands. Then she peeks at you through her fingers.',
          '@malzahra Would you... come with me? If I asked? The King would never listen to a demon. But he might listen to a hero.',
        ],
        next: 'baalgrim',
      },
      baalgrim: {
        text: [
          'The tower shakes. Green fire bursts through the window, and a huge, brutish demon with four horns and a jeweled breastplate steps out of the flames. Lord Baalgrim.',
          '@baalgrim So THIS is why the young queen delays the invasion. A *pet mortal.* How pathetic. The council has voted. You are deposed, girl. I will lead the conquest myself — and I will burn this town to the ground.',
          'Malzahra goes pale. For a moment, the Dread Queen looks very young indeed.',
        ],
        choices: [
          { text: 'Step in front of her. "You\'ll have to go through me." [Might check 3]', check: { stat: 'might', dc: 3 }, pass: 'defend_win', fail: 'defend_lose' },
          { text: '"Malzahra. You\'re the Queen. Show him." (Back her up.)', go: 'back', aff: 8 },
        ],
      },
      defend_win: {
        text: [
          'You plant yourself between them. Baalgrim laughs and swings a massive flaming fist — and you catch it on your blade and *shove.* He stumbles back, astonished.',
          'That\'s all Malzahra needs. Black fire erupts from her hands, wrapping him in chains of shadow. She steps forward, horns blazing, and every inch of her is a queen.',
          '@malzahra Tell the council: the Dread Queen is not deposed. The Dread Queen has *allies.* Now BEGONE!',
          'Baalgrim vanishes in a puff of green smoke. Malzahra turns to you, chest heaving.',
          '@malzahra You... defended me. A mortal hero defended a demon queen. That has *never* happened.',
          'Then she grabs you by the collar and kisses you — fierce and hot and smelling of smoke and cinnamon.',
          'She pulls back, wide-eyed, as if she\'s shocked herself.',
          '@malzahra That was — a victory kiss. A demonic custom. Very traditional. Do not read into it.',
        ],
        aff: 12,
        end: true,
      },
      defend_lose: {
        text: [
          'You step between them. Baalgrim backhands you across the room. You hit the wall and slide down it, seeing stars.',
          'And Malzahra *erupts.* Black fire roars from her horns. Her eyes blaze white. The whole tower trembles.',
          '@malzahra YOU DARE TOUCH WHAT IS MINE?!',
          'Baalgrim flees in a puff of green smoke, wailing. Malzahra kneels beside you in an instant, cradling your head.',
          '@malzahra You fool, you magnificent fool, you cannot fight a Duke of Hell with a sword from the market! Are you hurt? Speak to me!',
          '@you ...Did you say "what is mine"?',
          '@malzahra ...I said *nothing* of the sort.',
          'She doesn\'t let go of you for a very long time.',
        ],
        aff: 8,
        end: true,
      },
      back: {
        text: [
          'You don\'t step in front of her. You step *beside* her, and put a hand on her shoulder.',
          '@you You\'re the Dread Queen, Malzahra. Show him what that means.',
          'She looks at you. Something hardens in her eyes — not cruelty. Certainty.',
          'She raises one hand, and the shadows in the room rise with it. Baalgrim takes a step back. Then another.',
          '@malzahra I have ruled the Underrealm for one thousand years. I was ruling while your grandfather was still an egg, Baalgrim. KNEEL.',
          'He kneels. Then he flees. Malzahra stands trembling in the wreckage of her lair.',
          '@malzahra I have never... done that before. Without a monologue. Without the cape.',
          '@malzahra It was because you were standing next to me.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'The Old Watchtower is quiet tonight. No imps. No banners. Just Malzahra, sitting on the battlements under the stars, without her cape, her silver hair loose in the wind.',
          '@malzahra I sent them home. All the imps. Gnarlbit wept. I told him I needed an evening to myself.',
          '@malzahra That was a lie. I needed an evening with *you.*',
          'She doesn\'t look at you. Her tail is curling and uncurling nervously around her ankle.',
          '@malzahra I am a thousand years old, {name}. I have commanded armies and burned the skies. And I have never once been courted. No one has ever brought me flowers, or held my hand, or kissed me except in victory. Everyone is too afraid.',
          '@malzahra Are you afraid of me?',
        ],
        choices: [
          { text: '"Terrified." (Grin.) "Doesn\'t stop me."', go: 'terrified', aff: 8 },
          { text: 'Take her hand. "No."', go: 'no', aff: 8 },
          { text: 'Kneel before her — not as a subject, but the way a knight proposes. [Might check 4]', check: { stat: 'might', dc: 4 }, pass: 'kneel', fail: 'no' },
        ],
      },
      terrified: {
        text: [
          'She laughs, startled, delighted.',
          '@malzahra Good. Good! You *should* be. I am very fearsome.',
          '@malzahra ...Come here and be terrified closer.',
        ],
        next: 'claim',
      },
      no: {
        text: [
          'Her fingers are warm — warmer than any mortal\'s, like holding a coal that doesn\'t burn. She stares down at your joined hands.',
          '@malzahra ...No. You are not, are you. You never were.',
        ],
        next: 'claim',
      },
      kneel: {
        text: [
          'You drop to one knee on the battlements, under the stars, and take her hand, and press your lips to her knuckles.',
          '@you Malzahra, Dread Queen of the Underrealm. I\'m not afraid of you. I\'m *in love* with you.',
          'For the first time in a thousand years, the Dread Queen is completely, utterly speechless. Her amber eyes fill. Her horns flare with a soft violet glow.',
          '@malzahra ...You knelt. Not out of fear. You knelt because you *chose* to.',
          '@malzahra Get up. Get up, you ridiculous, wonderful hero, so I can kiss you properly.',
        ],
        aff: 15,
        next: 'claim',
      },
      claim: {
        text: [
          "She kisses you under the stars, and it's nothing like the victory kiss. It's slow and searching and almost shy, from a woman who has never once in a thousand years been shy about anything.",
          "Then it is very much *not* shy.",
          "@malzahra In the Underrealm, when a queen chooses a consort, she says it aloud. So.",
          "@malzahra I, Malzahra, choose you. Let the heavens and hells take note. You are *mine.*",
          "She carries you down into the tower easily, as if you weigh nothing, laughing at your protests. Her chamber is warm and full of velvet and the smell of cinnamon and smoke.",
          "She sets you on your feet beside the bed and looks down at you, horns glowing, eyes burning amber, every inch the Dread Queen. Then she sweeps her heavy gown off her shoulders in one dramatic motion. It is *clearly* rehearsed. She has definitely practiced it in a mirror.",
          "@malzahra Kneel, hero.",
          "@you Make me.",
          "Her eyes flare. A slow, delighted, very dangerous grin spreads across her face.",
          "@malzahra Oh, I *hoped* you would say that.",
          "It's a battle in the best possible way: wrestling across the velvet, each of you trying to pin the other, her laughing in triumph when she wins and gasping in outrage when she doesn't. She's fierce and commanding, her tail wrapped around your thigh, her claws raking your back just hard enough. When you finally pin her and kiss the base of one horn, she makes a sound that shakes the tower stones.",
          "@malzahra The *horns* — nobody has ever — do that again, *that is a royal command* —",
          "The curtains catch fire, only a little. Neither of you stops to put them out...",
          "...",
          "Afterward, she lies with her head on your chest, tracing idle circles on your skin with one clawed fingertip.",
          "@malzahra I have conquered a hundred kingdoms in my dreams. None of them felt like this.",
          "@malzahra I think I have finally conquered something worth having.",
          "@you What's that?",
          "@malzahra *Loneliness.* Now go to sleep, hero. That is a royal command.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake to the smell of smoke, a scorched curtain, and an imp standing at the foot of the bed holding a breakfast tray and staring determinedly at the ceiling.",
          "@gnarlbit Breakfast for Her Dreadness and the... ah... *Royal Consort.* I have been instructed to say that the toast is *ominously* buttered.",
          "Malzahra is sprawled across most of the bed, silver hair everywhere, one arm and her tail wrapped possessively around you. She opens one amber eye.",
          "@malzahra Gnarlbit. If you speak of this to the council, I will have you guard the goat for a century.",
          "@gnarlbit Of what, Your Dreadness? I have seen nothing. I am blind. I have always been blind.",
          "He flees. Malzahra rolls over and props her chin on your chest.",
          "@malzahra So. Hero. Tell me honestly. On a scale from one to ten, how *dreadful* was I?",
        ],
        choices: [
          { text: "\"Eleven. Absolutely terrifying.\"", go: "eleven", aff: 6 },
          { text: "\"I'd say we're tied. Rematch tonight?\"", go: "rematch", aff: 6 },
          { text: "Kiss the base of her horn again, good morning.", go: "horn", aff: 6 },
        ],
      },
      eleven: {
        text: [
          "She beams. Her horns glow bright violet.",
          "@malzahra *ELEVEN.* I shall have it carved on a monument. A large one. Budgets be damned.",
          "@malzahra ...You may also have the ominous toast. As a reward.",
        ],
        end: true,
      },
      rematch: {
        text: [
          "@malzahra *Tied?* TIED? I won *at least* three of those rounds. I have a list.",
          "@you I won four.",
          "@malzahra Then we must settle it. Tonight. In single combat. On this bed.",
          "She looks enormously pleased by the prospect. She looks even more pleased when you pull her back down and start the rematch early.",
        ],
        end: true,
      },
      horn: {
        text: [
          "You reach up and press your lips to the base of her horn. Her whole body jolts. The breakfast tray rattles. Something outside the window explodes, small and purple.",
          "@malzahra You — you can't just do that in the *morning* — I have a council meeting — I have a *goat* to inspect —",
          "The council waits. The goat waits. The Dread Queen of the Underrealm cancels all her appointments for the day.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Every head on the festival hill turns as Malzahra arrives — not in a column of fire, but walking up the path in a dress of deep violet, horns adorned with silver chains, a nervous imp carrying her train.',
          'People whisper. Some step back. She ignores them all and comes straight to you.',
          '@malzahra I came in peace. Look! No fire! Not even a little! Gnarlbit, show them the treaty.',
          'The imp unrolls a long scroll. It bears the seal of the King of FantasyLandia. Across the top, in gold ink: *TREATY OF THE BADLANDS.*',
          '@malzahra We signed it this morning. My people will have land. Your people will have peace. And I...',
          'She takes your hands.',
          '@malzahra I wanted to watch the stars fall with my consort. In front of everyone. Without hiding.',
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'The first star falls. A thousand more follow. Around you the townsfolk gasp — and then, slowly, the crowd turns back to the sky, and the demon queen at the top of the hill is just another woman watching stars with someone she loves.',
          '@malzahra In the Underrealm, there is no sky. Only smoke.',
          '@malzahra I never knew it could look like this.',
          'She kisses you as the stars fall, and her horns glow so bright that, for one moment, she\'s the brightest light on the hill.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'The Badlands bloom. It turns out imps are excellent farmers, once they stop trying to steal goats. Within a year there\'s a demon town there called New Dread, with a bakery that makes the best cinnamon rolls in the east.',
          'Malzahra rules from a castle on the border — not a lair, a *castle*, she\'s very particular about that — with you at her side as Royal Consort, Champion of the Underrealm, and Official Monologue Reviewer.',
          'She still gives speeches from the balcony. She still has an imp fan her cape. Lord Baalgrim was demoted to Head of Goat Husbandry, where he is, to everyone\'s surprise, much happier.',
          'And every evening, the Dread Queen of the Underrealm sits with you on the battlements and watches the sky she spent a thousand years without — and she never, ever watches it alone.',
        ],
        ending: 'malzahra',
      },
    },
  },
});
