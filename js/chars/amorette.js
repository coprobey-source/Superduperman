FL.addSpeaker('sub', 'The Substitute Narrator', '#9a9a9a');

FL.addCharacter({
  id: 'amorette',
  name: 'Amorette, Goddess of Love',
  short: 'Amorette',
  trope: 'The Narrator (Fourth-Wall-Breaking Goddess)',
  color: '#ff8ad8',
  favStat: 'charm',
  endingTitle: 'The Narrator\'s Own Story',
  teaser: 'At the foot of the Goddess\'s statue, a pink-haired woman is eating popcorn and watching couples with intense interest.',
  blurb: 'Goddess of Love, Patron of Romantic Clichés, and — as you\'ve noticed — the voice narrating your life. She has arranged a million meet-cutes and a thousand happily-ever-afters, and has never once had one of her own. She has taken a mortal form for the first time in an age. Only the truly charming can win the heart of the one who invented charm.',
  schedule: [null, null, 'temple'],
  unlock: function (s) { return !!s.flags.goddess_awake; },
  gifts: { love: ['novel'], like: ['roses', 'chocolate', 'cakes', 'perfume', 'wine'], hate: ['gears'] },
  giftLines: {
    love: ['@amorette *The Duke\'s Forbidden Passion, Volume Nine!* Oh, I *adore* this one! Did you know I personally inspired the author? I whispered chapter nine into her ear at three in the morning.', 'She hugs the book to her chest.', '@amorette You have *excellent* taste, darling. Clearly I chose well.'],
    like: '@amorette A romantic gift for the Goddess of Romance? Oh, how *meta.* I love it. I love it *so much.*',
    neutral: '@amorette Hm! Not exactly romantic, darling. But it\'s the thought that counts. I\'m a goddess; I can *see* the thought. It was a nice thought.',
    hate: ['@amorette Gears? Cogs? *Clockwork?* The most unromantic thing in creation!', 'She pauses.', '@amorette ...Although, the automaton girl... no. No. Still unromantic. Give these to Seven.'],
  },
  talk: [
    ['@amorette Oh, it\'s *you!* My favorite protagonist! Sit, sit. Want some popcorn? I\'ve been watching the baker and the blacksmith. They\'re *so close* to kissing. I can feel it.'],
    ['@amorette Do you know how many love stories I\'ve narrated? Eleven million, four hundred thousand, and six. And do you know how many were about me? *Zero.* Rude.'],
    ['@amorette My favorite trope? Oh, don\'t make me choose. ...Enemies to lovers. No — fake dating. No — "there was only one bed." Oh, I love them all. They\'re my *children.*'],
    ['@amorette Being a goddess in a mortal body is so strange! I get *hungry!* I stubbed my toe yesterday and nearly smote the table!'],
    ['@amorette I saw what you did today, you know. I see everything. It was very sweet. I narrated it beautifully, if I say so myself. You didn\'t hear? Oh, nobody ever does.'],
    ['She looks out at the candlelit temple, unusually quiet.', '@amorette Everyone prays to me for love. Nobody ever asks if *I\'m* lonely. Not in ten thousand years. ...Forget I said that. Goddesses aren\'t supposed to monologue.'],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'The Temple of the Radiant Heart glows with a thousand candles. At the foot of the great statue of the Goddess of Love, a woman sits cross-legged on the altar steps, eating popcorn out of a golden offering bowl.',
          'She has long, rose-pink hair that seems to drift in a breeze you can\'t feel, golden eyes, and a gown made of something that looks like sunset. She looks exactly like the statue above her. The statue, you notice, is now subtly frowning.',
          '@amorette There you are! Finally! I\'ve been waiting *all evening.* Do you know how hard it is to sit still when you\'re omnipresent? I keep wanting to be somewhere else.',
          '@amorette Hello, {name}. It\'s me. The Narrator. In the flesh! Well, in *a* flesh. It\'s borrowed. I\'ll give it back.',
        ],
        aff: 10,
        choices: [
          { text: '"So the voice in my head was real."', go: 'real' },
          { text: 'Bow deeply. "Goddess."', go: 'bow' },
          { text: '"Is that popcorn from the offering bowl?" [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'popcorn', fail: 'popcorn_fail' },
        ],
      },
      real: {
        text: [
          '@amorette Real! Very real! Extremely real! Though "voice in your head" is a bit reductive, darling. I prefer "omniscient third-person perspective with a strong personal voice."',
          'She pats the step beside her.',
        ],
        aff: 4,
        next: 'name',
      },
      bow: {
        text: [
          'She waves a hand, embarrassed.',
          '@amorette Oh, don\'t *bow.* Everyone bows. Bowing is so *boring.* I get bowed at forty thousand times a day. Do you know what nobody does?',
          '@you What?',
          '@amorette Sit next to me and share my popcorn.',
        ],
        aff: 4,
        next: 'name',
      },
      popcorn: {
        text: [
          '@you Is that popcorn from the offering bowl?',
          '@amorette It was *offered.* To *me.* I\'m eating my offerings! That\'s how offerings work!',
          '@you Can I have some?',
          'She stares at you. Then she laughs — a sound like wind chimes and champagne — and holds out the bowl.',
          '@amorette Ten thousand years, and you\'re the first mortal who ever asked to *share* an offering. Oh, I *knew* you\'d be fun.',
        ],
        aff: 8,
        next: 'name',
      },
      popcorn_fail: {
        text: [
          '@you Is that — popcorn — holy popcorn — can — ',
          'You trip over the words and, somehow, over the altar step.',
          '@amorette Oh, *honey.* Smooth. Very protagonist energy.',
          'She helps you up, giggling, and hands you a piece of popcorn anyway.',
        ],
        aff: 3,
        next: 'name',
      },
      name: {
        text: [
          '@amorette I\'m Amorette. Goddess of Love, Patron of Romantic Clichés, Hopeless Pining and Meet-Cutes, Keeper of the Red String, et cetera, et cetera.',
          '@amorette I\'ve spent ten thousand years arranging everyone else\'s love stories. And then I watched yours, and I thought: *oh, I want to be in this one.*',
          'She grins at you, impish and bright.',
          '@amorette So! Here I am. A romanceable option. Very meta. Come visit me in the evenings. I\'ll be right here, eating popcorn and meddling.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Amorette is waiting with a stack of scrolls and a quill.',
          '@amorette I need your help, darling! I\'m doing my annual review. Every trope in creation, ranked. I usually do it alone, but I wanted a *mortal perspective.*',
          '@amorette First: "There Was Only One Bed." Overrated, or perfect?',
        ],
        choices: [
          { text: '"Perfect. Timeless. Iconic."', go: 'bed_perfect', aff: 5 },
          { text: '"Overrated. Just sleep on the floor."', go: 'bed_over', aff: 3 },
          { text: '"Depends entirely on who\'s in the bed." [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'bed_charm', fail: 'bed_perfect' },
        ],
      },
      bed_perfect: {
        text: [
          '@amorette *THANK* you! The minor god of interior design says it\'s "unrealistic." He\'s never been to an inn during a festival!',
        ],
        next: 'trope2',
      },
      bed_over: {
        text: [
          '@amorette *The floor?!* Oh, you sweet, unromantic creature. I\'m writing that down. "Mortal suggests floor. Investigate."',
        ],
        next: 'trope2',
      },
      bed_charm: {
        text: [
          '@you Depends entirely on who\'s in the bed.',
          'She looks at you over her scroll. For the first time, the Goddess of Love seems momentarily lost for words.',
          '@amorette ...Oh. Oh, you\'re *good.* I didn\'t narrate that line. That was all you.',
          'She fans herself with the scroll.',
        ],
        aff: 8,
        next: 'trope2',
      },
      trope2: {
        text: [
          '@amorette Next: "Love at First Sight." Real, or nonsense?',
        ],
        choices: [
          { text: '"Real. It happens."', go: 'sight_real', aff: 5 },
          { text: '"Nonsense. Love takes time. You get to know someone."', go: 'sight_time', aff: 7 },
        ],
      },
      sight_real: {
        text: [
          '@amorette Oh, it\'s *very* real. I do it myself, with a little golden arrow. Although I must confess — I have a terrible aim. I once made a duke fall in love with a goose.',
          '@amorette They were very happy.',
        ],
        next: 'lonely',
      },
      sight_time: {
        text: [
          'She stops writing.',
          '@amorette ...Hm. That\'s my favorite answer. Most people say "real," because it\'s easier. But the best love stories I\'ve ever narrated took *time.* Little moments. Hundreds of them. Until one day, you look up and realize it\'s been love for ages.',
          'She glances at you, and away.',
          '@amorette Like this, maybe. Hypothetically.',
        ],
        next: 'lonely',
      },
      lonely: {
        text: [
          'By the time you\'ve ranked four hundred tropes, it\'s past midnight. She rolls up the last scroll and leans back on the altar steps, looking up at her own statue.',
          '@amorette Do you know what the hardest part of being the Goddess of Love is?',
          '@amorette Watching. Always watching. Every first kiss, every wedding, every "I love you" in every language. I\'m there for all of it. I\'m just never *in* it.',
          '@amorette I\'m always the narrator. Never the heroine.',
        ],
        choices: [
          { text: '"You can be the heroine of mine."', go: 'heroine', aff: 10 },
          { text: 'Offer her the last of the popcorn.', go: 'popcorn', aff: 7 },
        ],
      },
      heroine: {
        text: [
          'She turns to look at you. Her golden eyes are very bright.',
          '@amorette ...Careful, darling. You\'re saying that to the one being in existence who can tell *exactly* how much you mean it.',
          '@amorette And you mean it a *lot.*',
          'She smiles, small and astonished, and doesn\'t say anything else for a long time.',
        ],
        end: true,
      },
      popcorn: {
        text: [
          'You hold out the bowl. She takes a piece, then looks at it in her palm.',
          '@amorette You always share. Every time. I\'ve watched you share with everyone — the werewolf, the dragon, the ghost.',
          '@amorette It\'s the most romantic thing about you, and you don\'t even know it.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'The temple is dim tonight. Half the candles have gone out. Amorette is sitting on the altar steps, and something is wrong: her hair isn\'t drifting. Her gown is just a dress. Her golden eyes have faded to warm brown.',
          '@amorette Oh. You\'re here. I didn\'t know you\'d come. I *always* know. I didn\'t know.',
          '@amorette Something\'s happening to me. I\'m losing my divinity, darling. Bit by bit. I tried to narrate the baker\'s proposal this morning and I couldn\'t *see* it. I tried to fire an arrow and it just... fell on the floor.',
          '@amorette There\'s an old law. Gods who fall in love with mortals become a little mortal themselves. I always thought it was a myth.',
          'She looks up at you. She looks frightened, and very young.',
        ],
        choices: [
          { text: '"Is it because of me?"', go: 'because', aff: 6 },
          { text: 'Sit beside her and take her hand. "Then we\'ll figure it out together."', go: 'together', aff: 10 },
        ],
      },
      because: {
        text: [
          '@amorette Of course it\'s because of you, you magnificent idiot. Who else would it be?',
          'She laughs, wet and shaky.',
          '@amorette I\'m the Goddess of Love, and I didn\'t see it coming. Do you know how *embarrassing* that is?',
        ],
        next: 'choice',
      },
      together: {
        text: [
          'Her hand is warm. Ordinary. Mortal. She looks down at your fingers wrapped around hers like it\'s the most extraordinary thing she\'s ever seen.',
          '@amorette Together. That\'s... I\'ve narrated that word ten million times. I never knew what it *felt* like.',
        ],
        next: 'choice',
      },
      choice: {
        text: [
          '@amorette If I keep falling for you, I\'ll lose it all. The arrows, the omniscience, the narrating. I\'ll be... just a woman. With pink hair and a popcorn habit.',
          '@amorette And if I stop — if I go back up — I\'ll be a goddess forever. Watching. Narrating. Alone.',
          '@amorette What would *you* do?',
        ],
        choices: [
          { text: '"I don\'t want you to lose yourself for me."', go: 'lose', aff: 10 },
          { text: 'Make her laugh. "Being mortal\'s great. We have naps." [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'naps', fail: 'lose' },
        ],
      },
      lose: {
        text: [
          'She stares at you.',
          '@amorette You... you\'d tell me to go back? Even though it means you\'d lose me?',
          '@you If it\'s what you need. I want you to be happy.',
          'A tear slides down her cheek — and as it falls, it begins to glow, faintly gold. Then another. All around the temple, the candles flicker back to life, one by one.',
          '@amorette Oh. Oh, you *fool.* That\'s the most selfless thing anyone\'s ever said to me. And selfless love is the strongest magic there is.',
          'Her hair begins to drift again. Her eyes turn gold. She laughs, astonished.',
          '@amorette It\'s not *taking* my divinity. It\'s *changing* it. I\'m not losing anything. I\'m finally *feeling* what I\'ve been giving away for ten thousand years.',
        ],
        aff: 5,
        next: 'kiss',
      },
      naps: {
        text: [
          '@you Being mortal\'s great. We have naps. And cake. And stubbing our toes, which builds character.',
          'She stares at you. Then she bursts out laughing — and with every peal of laughter, a candle in the temple flickers back to life.',
          '@amorette *Naps!* You\'re selling me mortality on *naps!*',
          '@you They\'re really good naps.',
          'She laughs until she cries, and the tears glow gold, and her hair begins to drift again.',
          '@amorette Oh — oh, I understand now. It\'s not taking my divinity away. Love doesn\'t make you less. It makes you *more.*',
        ],
        aff: 12,
        next: 'kiss',
      },
      kiss: {
        text: [
          'She leans in and kisses you. It\'s sweet and warm and tastes like popcorn and starlight.',
          'Somewhere, very far away, you hear a slightly nasal voice say: *"...and then the Goddess kissed the protagonist, and — oh, gosh, am I narrating now? Nobody told me I was narrating."*',
          'Amorette pulls back, laughing.',
          '@amorette Oh, that\'s my substitute. Cupid\'s nephew. He\'s *terrible.* Ignore him.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Amorette doesn\'t meet you at the temple. Instead, a single rose petal drifts in front of you as you leave the square, then another, then a trail of them, leading you up out of the town and into a meadow you\'ve never seen before — a meadow that, you\'re fairly sure, wasn\'t there yesterday.',
          'It\'s the field of roses from your dream: endless, glowing softly under a sky full of stars, with a swing hanging from nothing. She\'s sitting on it, kicking her heels.',
          '@amorette I made it. Just for tonight. Every rose is a love story I narrated. Eleven million, four hundred thousand and six.',
          'She hops down from the swing and comes to you.',
          '@amorette And I wanted the eleven million, four hundred thousand and *seventh* to be mine.',
        ],
        choices: [
          { text: '"Then let\'s write it."', go: 'write', aff: 10 },
          { text: '"Do you want to narrate this part, or should I?" [Charm check 4]', check: { stat: 'charm', dc: 4 }, pass: 'narrate', fail: 'write' },
        ],
      },
      write: {
        text: [
          'She smiles, and it\'s nothing like her usual impish grin. It\'s soft and certain and a little shy.',
          '@amorette Yes. Let\'s.',
        ],
        next: 'night',
      },
      narrate: {
        text: [
          'She laughs, delighted, and then thinks about it seriously.',
          '@amorette ...Neither. For once in my existence, I don\'t want to narrate. I just want to *be here.*',
          'She snaps her fingers.',
          '@sub Uh, hi, substitute Narrator here, the Goddess has asked for some privacy, so I\'ll just — I\'ll be over here — looking at a different part of the meadow —',
          '@amorette *Further away, Kevin.*',
          '@sub Right! Sorry! Going!',
        ],
        aff: 14,
        next: 'night',
      },
      night: {
        text: [
          'She kisses you among the roses. The petals rise around you like a slow, sweet storm.',
          'What follows is — well. The Narrator has stepped away, and the substitute has been told to look elsewhere, and so the story politely averts its eyes.',
          'But it\'s worth noting that for a goddess of love, she is surprisingly nervous, and then surprisingly giddy, and then completely, overwhelmingly *present* — no omniscience, no distance, no watching from above, just here, with you. The roses glow brighter. At one point she laughs and a shower of tiny golden hearts erupts into the air around you, and she says *oh, that\'s embarrassing, that hasn\'t happened since the Renaissance.*',
          '...',
          'Later, you lie together in the roses, watching the stars. She\'s resting her head on your chest, idly drawing hearts on your skin.',
          '@amorette Ten thousand years, I\'ve been writing endings. *Happily ever after.* I always thought that was the end of the story.',
          '@amorette It isn\'t, is it? It\'s just the part where the narrator stops talking.',
          '@you And then what?',
          '@amorette And then you get to live it.',
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'On the festival hill, the crowd is gathered, waiting for the stars. And then everyone gasps, because the statue of the Goddess of Love on the temple dome has started to glow — and from it, a shower of rose petals is drifting down over the whole town.',
          'She steps out of the falling petals beside you: hair drifting, eyes gold, gown like sunset. Every head on the hill turns.',
          '@amorette Sorry, darling. I *had* to make an entrance. It\'s in my job description.',
          'She takes your hand and turns to face the sky.',
          '@amorette Do you know who makes the stars fall at Starfall?',
          '@you ...You?',
          '@amorette Me! Every year. It\'s my favorite night. This year, I wanted to watch it from down here. With you.',
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'She lifts her free hand, and the stars begin to fall: thousands of them, more than any Starfall in living memory, streaking across the sky in pink and gold and silver, spelling out — just for a moment, if you squint — two names.',
          '@amorette Too much?',
          '@you Way too much.',
          '@amorette *Perfect.*',
          'She kisses you under the falling stars, in front of the whole town, and every couple on the hill finds themselves kissing too, without quite knowing why.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '@sub Uh — hi! Substitute Narrator again. The Goddess is... busy. So I\'ll just, um, wrap things up.',
          '@sub *Some time later...*',
          '@sub Amorette never quite goes back to being a full-time goddess. She splits her time: mornings in the heavens, arranging love stories (her aim has gotten better); evenings in a little cottage near the temple, with you.',
          '@sub She still eats popcorn while watching couples. Now she makes you watch with her and narrates out loud, and you rate her narration out of ten. She always gets a ten. You\'re very biased.',
          '@sub The temple has a new statue now. It\'s of the Goddess of Love, holding hands with someone very ordinary-looking. Pilgrims come from all over to see it. They say it\'s the most romantic statue in the world.',
          '@sub And every Starfall, the stars spell out two names, just for a moment, if you squint.',
          '@amorette *Kevin, that was lovely. You can go now.*',
          '@sub Oh! Thank you! Okay! Bye!',
        ],
        ending: 'amorette',
      },
    },
  },
});
