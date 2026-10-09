FL.addCharacter({
  id: 'ignivara',
  name: 'Ignivara the Crimson',
  short: 'Ignivara',
  trope: 'Proud Hoarding Dragon Girl',
  color: '#ff5a36',
  favStat: 'might',
  endingTitle: 'The Most Precious Treasure',
  teaser: 'A woman with crimson horns and a long scaled tail lounges on a mountain of gold, counting coins.',
  blurb: 'A three-thousand-year-old red dragon who spends most of her time in human form, because it\'s easier to count coins with fingers. Haughty, possessive, vain and fiercely territorial. She has never shared anything in her life. She has also never met anything she wanted more than gold. Until now.',
  schedule: ['peak', 'peak', null],
  gifts: { love: ['gem'], like: ['mirror', 'comb', 'dagger', 'fork'], hate: ['plushie', 'herbs'] },
  giftLines: {
    love: ['Her pupils narrow to slits. Her tail lashes. Smoke curls from her nostrils.', '@ignivara Mine. *Mine.* Oh, look at the *facets* on it. Look how it *sparkles.*', 'She clutches it to her chest and growls at you, then seems to remember you gave it to her.', '@ignivara ...Thank you. You may stay in my presence a while longer. A *long* while.'],
    like: '@ignivara Ooh, shiny. Acceptable tribute! It shall go in the hoard. Third pile from the left. The *good* pile.',
    neutral: '@ignivara It doesn\'t sparkle. Why would you give a dragon something that doesn\'t sparkle? ...Fine. It goes in the "maybe" pile.',
    hate: ['She stares at it in mounting outrage.', '@ignivara Do I look like a *hatchling* to you? Do I look like a *goat?* This is an insult to dragonkind!', 'She incinerates it. Politely.'],
  },
  talk: [
    ['@ignivara Mortal! You climbed my mountain again. You are very persistent. Like a barnacle. A cute barnacle.'],
    ['@ignivara I have forty-one thousand, six hundred and eight gold coins. I know because I count them every morning. Twice. Once for accuracy and once for *pleasure.*'],
    ['@ignivara Knights keep coming to slay me. It\'s so tedious. They always make speeches. I always eat their horses. Not the knights! Just the horses. Usually.'],
    ['She is lying on her stomach on the gold, chin on her hands, tail swaying lazily.', '@ignivara Come here. Lie on the gold. It\'s very comfortable. No, it isn\'t, it\'s lumpy, but it *feels* comfortable. Emotionally.'],
    ['@ignivara Other dragons think I\'m vain. I am not vain. I am *accurately aware of my magnificence.* There\'s a difference.'],
    ['@ignivara Do you know why dragons hoard? Because everything else leaves. Gold doesn\'t. Gold stays exactly where you put it.'],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'The climb to Dragonspire Peak nearly kills you. At the top, gasping, you stagger into the mouth of an enormous cave — and stop dead.',
          'Gold. Mountains of it, rivers of it, coins and crowns and goblets and gemstones heaped higher than a house. And on top of the highest pile, lounging like a cat on a sunny windowsill, is a woman.',
          'She has wild crimson hair, a pair of sweeping black-red horns, golden slitted eyes, and patches of ruby scales glittering on her cheeks and shoulders. A long, powerful dragon\'s tail curls around the pile beneath her.',
          'She sits up slowly. Her nostrils flare.',
          '@ignivara A *thief.* In my hoard. How *delightful.* I haven\'t roasted a thief in weeks.',
        ],
        aff: 10,
        choices: [
          { text: 'Stand tall and meet her glare. "I\'m no thief." [Might check 2]', check: { stat: 'might', dc: 2 }, pass: 'stand_win', fail: 'stand_fail' },
          { text: '"Your hoard is magnificent. So are you."', go: 'flatter' },
          { text: 'Turn out your pockets to prove you haven\'t taken anything.', go: 'pockets' },
        ],
      },
      stand_win: {
        text: [
          'Her eyes narrow. She slides down the gold toward you, and with each step she seems to grow — heat pouring off her, the shadow on the wall behind her vast and winged. Smoke curls from her lips.',
          'You don\'t move.',
          'She stops a foot away and leans in, nostrils flaring, studying you.',
          '@ignivara ...You\'re not afraid. Your heart is fast, but you\'re not *running.* Even knights run, eventually.',
          '@ignivara How interesting. I don\'t own anything interesting.',
        ],
        aff: 7,
        next: 'name',
      },
      stand_fail: {
        text: [
          'You try to stand tall. She breathes a single puff of fire over your head. Your hair is now somewhat shorter. You sit down very suddenly.',
          '@ignivara Ha! Brave words, wobbly knees. Never mind, little mortal. I\'ve decided not to roast you. You\'re too scrawny to make a good snack.',
        ],
        aff: 2,
        next: 'name',
      },
      flatter: {
        text: [
          'She pauses. Her tail twitches. She tosses her hair over her shoulder.',
          '@ignivara Well. *Obviously.* But it\'s nice to hear it said. The knights never say it. They say "foul beast" and "die, wyrm."',
          '@ignivara You may continue complimenting me. I\'ll allow it.',
        ],
        aff: 6,
        next: 'name',
      },
      pockets: {
        text: [
          'You turn out every pocket. Some lint. A button. A single copper coin.',
          'Her eyes lock on the copper. She swoops down, snatches it from your palm, examines it, and sniffs it.',
          '@ignivara This is not mine. This is *yours.* ...May I have it?',
          '@you Sure.',
          'She clutches it to her chest like it\'s a priceless gem.',
          '@ignivara A *gift.* No one has ever *given* me treasure. They only try to take it.',
        ],
        aff: 6,
        next: 'name',
      },
      name: {
        text: [
          '@ignivara I am Ignivara the Crimson, Eldest of the Red Flight, Terror of the Western Skies, Keeper of the Greatest Hoard in FantasyLandia. And you are?',
          '@you {name}.',
          '@ignivara {name}. A small name for a small creature. I shall remember it.',
          'She settles back onto her gold pile and waves a lazy hand.',
          '@ignivara You may visit again. Daytime only. I sleep at night, on my gold, and anyone who disturbs me gets *crispy.* Bring something shiny.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Ignivara is in a state when you arrive. She\'s pacing furiously across the hoard, tail lashing, scattering coins with every step.',
          '@ignivara GONE. One coin. *One.* Forty-one thousand six hundred and eight this morning, and now it\'s forty-one thousand six hundred and SEVEN.',
          '@ignivara Somebody has *robbed* me. I will find them. I will find them and I will *melt them.*',
        ],
        choices: [
          { text: 'Help her search the hoard, methodically, pile by pile.', go: 'search', aff: 6 },
          { text: '"Maybe you just miscounted?"', go: 'miscount', aff: 3 },
          { text: 'Notice a coin glinting under her own tail. [Wits check 2]', check: { stat: 'wits', dc: 2 }, pass: 'tail', fail: 'search' },
        ],
      },
      search: {
        text: [
          'You spend the whole morning sifting through gold with her. She narrates the history of every item you pick up: the crown of King Aldous the Bald, the goblet she won from a giant in a riddle contest, the shield of the first knight who ever tried to slay her (he didn\'t).',
          'Eventually you find the coin wedged between two shields.',
          '@ignivara MY COIN! My beautiful coin! Oh, I will never let you out of my sight again, you naughty little coin.',
          'She kisses it. Then she looks at you, and you swear her scales flush a deeper red.',
          '@ignivara ...You spent all morning helping me look. For one coin. Why?',
          '@you It was important to you.',
        ],
        next: 'fly',
      },
      miscount: {
        text: [
          'She stops. She turns. Her eyes glow.',
          '@ignivara I have counted these coins *every morning for three thousand years.* I do not *miscount.*',
          'Ten minutes later, she finds the coin in her own bracelet, where she put it last night "for safekeeping." She glares at you, daring you to say anything.',
          'You say nothing. She grudgingly appreciates it.',
        ],
        next: 'fly',
      },
      tail: {
        text: [
          '@you Ignivara. Lift your tail.',
          'She lifts her tail. The coin is stuck to a scale underneath, glinting.',
          'She stares at it. She stares at you. She stares at the coin again.',
          '@ignivara ...I have been *sitting on it.* All morning. Oh, how *mortifying.* If you tell anyone, I will eat you.',
          '@ignivara ...You have sharp eyes, little mortal. Sharper than a dragon\'s. I didn\'t know that was possible.',
        ],
        aff: 8,
        next: 'fly',
      },
      fly: {
        text: [
          'She stands abruptly and strides to the mouth of the cave, where the sky opens wide and blue over the whole kingdom.',
          '@ignivara As a reward, I will grant you a great honor. Get on my back.',
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
          '@ignivara No one has ever ridden me before. Dragons don\'t carry *anyone.* It\'s undignified.',
          '@ignivara ...I liked it. Don\'t tell the other dragons.',
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
          '@ignivara THE MORTAL SAID: NOBODY IS SLAYING ANYONE TODAY.',
          'The knights flee. One leaves his horse behind. Ignivara considers the horse. Then, with visible effort, she doesn\'t eat it.',
        ],
        aff: 12,
        next: 'after',
      },
      talk_win: {
        text: [
          '@you Gentlemen! This dragon is under the official protection of the Adventurers\' Guild, as a registered Heritage Monster. Slaying her is a Class A offense. Mira at the Guild will have your licenses.',
          'The knights exchange nervous glances.',
          '@knight ...Mira? *Mira Hartwell?*',
          '@you She has a very sharp stamp.',
          'The knights leave very quickly. It is entirely a lie. But from the cave above, you hear a sound that might be a dragon laughing.',
        ],
        aff: 10,
        next: 'after',
      },
      block_lose: {
        text: [
          'You plant yourself on the path. The knights don\'t slow down. The lead horse knocks you flat, and you tumble down the rocks with a crunch.',
          'And then the mountain *explodes.* Ignivara lands among the knights in full dragon form with a roar that splits stones, and the knights scatter like leaves in a gale.',
          'She doesn\'t chase them. She shrinks back into her human form and runs to you, kneeling in the snow, her clawed hands shaking.',
          '@ignivara You IDIOT. You *fragile little idiot.* You tried to fight twelve knights for *me?* Why would you — nobody has ever —',
          'She gathers you up in her arms and carries you up to the cave herself.',
        ],
        aff: 8,
        next: 'after',
      },
      after: {
        text: [
          'Later, in the warmth of the cave, she sits beside you on the gold, unusually quiet.',
          '@ignivara For three thousand years, everyone who came up this mountain came to take something. My gold. My head. My life.',
          '@ignivara You came up the mountain to *protect* me.',
          'She looks at her hands.',
          '@ignivara Dragons hoard because nothing else stays. I never thought anything would stay for me. I never thought anyone would *fight* for me.',
        ],
        choices: [
          { text: '"I\'ll always fight for you, Ignivara."', go: 'always', aff: 10 },
          { text: 'Take her clawed hand and hold it.', go: 'hold', aff: 8 },
        ],
      },
      always: {
        text: [
          'She turns her head away so you won\'t see her face. Her tail curls around your waist instead.',
          '@ignivara ...Then you\'re mine. You understand? I\'m adding you to my hoard. Officially. You\'re my most valuable item.',
          '@you More valuable than the gold?',
          '@ignivara Don\'t push your luck.',
          'But her tail tightens around you, just a little.',
        ],
        end: true,
      },
      hold: {
        text: [
          'Her hand is hot as a hearthstone. She looks down at your fingers wrapped around her claws with an expression of utter bewilderment.',
          '@ignivara You\'re holding on to me. Like I hold on to my gold.',
          '@ignivara ...Is this what it feels like? To be something someone wants to keep?',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'The cave has been rearranged. Ignivara has pushed all the gold into a great glittering circle, like a nest, and lined the inside with silks and furs from her hoard. Candles flicker in jeweled goblets. She\'s standing in the middle, wearing nothing but a great deal of gold jewelry and a very nervous expression.',
          '@ignivara I have decided something.',
          '@ignivara A dragon\'s nest is where she keeps the most precious thing she owns. The one thing she\'d burn the world for. I have never had a nest. I never had anything precious enough.',
          'She holds out her hand.',
          '@ignivara Come into my nest, {name}. Be my treasure.',
        ],
        choices: [
          { text: 'Step into the nest and take her hand.', go: 'step', aff: 8 },
          { text: 'Sweep her off her feet — a dragon, carried. [Might check 4]', check: { stat: 'might', dc: 4 }, pass: 'sweep', fail: 'step' },
        ],
      },
      step: {
        text: [
          'She pulls you down into the silks, among the gold, and wraps her tail around you possessively.',
          '@ignivara Mine. *Mine.* No one else\'s.',
        ],
        next: 'night',
      },
      sweep: {
        text: [
          'You scoop her up — dragon, horns, tail and all — and she lets out a squeak of pure astonishment, flailing her tail.',
          '@ignivara You — put me — I am THREE THOUSAND YEARS OLD — I am a TERROR OF THE SKIES —',
          '@you You\'re my treasure, too.',
          'She stops struggling. Her face turns as red as her scales.',
          '@ignivara ...Oh. Oh, that\'s *unfair.*',
        ],
        aff: 14,
        next: 'night',
      },
      night: {
        text: [
          'She kisses you with heat — real heat, her mouth almost too warm, smoke curling from her lips. Her scales are smooth and warm as sunlit stone under your hands. She makes a sound like a purr and a growl at once.',
          'She is possessive and passionate and wildly proud, and she *will not* stop telling you how beautiful you are, how precious, how much finer than any gem. The candles flare every time she sighs. At one point the gold around you actually begins to melt, just a little, and you both have to pause, laughing, to move further from the edge.',
          '...',
          'Later, you lie in the warm nest, her tail wrapped around you twice, her head on your chest.',
          '@ignivara Forty-one thousand, six hundred and eight gold coins.',
          '@ignivara And one {name}.',
          '@ignivara The {name} is worth more. I counted.',
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'The crowd on the festival hill screams as a crimson dragon swoops low overhead — and then lands in the field beside you, transforming in a burst of heat into a woman in a gown made, as far as you can tell, entirely of gold coins.',
          '@ignivara I came to watch the stars. From the ground. With the mortals. Because *you\'re* down here.',
          'She looks around at the crowd, nose wrinkled.',
          '@ignivara Ugh. So many people. Not one of them sparkles. Come, we\'re going somewhere better.',
          'She transforms again and holds out one enormous claw for you.',
        ],
        next: 'sky',
      },
      sky: {
        text: [
          'She carries you up above the clouds, so high that the air is thin and cold and the stars are close enough to touch. And then they begin to fall — all around you, streaking past, so close you can hear them hiss.',
          '@ignivara Look! LOOK! The whole sky is *gold!* It\'s the greatest hoard in the world!',
          '@ignivara And I don\'t even want it. Isn\'t that strange? I have *you.*',
          'She lands on the very peak of Dragonspire as the last stars fall, shifts back into her human form, and kisses you with smoke and heat and three thousand years of longing.',
          '@ignivara My treasure. Forever.',
        ],
        next: 'epilogue',
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
    },
  },
});
