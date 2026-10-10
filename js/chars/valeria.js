FL.addCharacter({
  id: 'valeria',
  name: 'Countess Valeria Nocturne',
  short: 'Valeria',
  trope: 'Evil Dominating Vampire',
  color: '#c2264b',
  favStat: 'charm',
  endingTitle: 'Consort of Eternal Night',
  teaser: 'A tall silhouette on a throne of black iron. Red eyes glint. She is smiling, and it is not a nice smile.',
  blurb: 'Six-hundred-year-old mistress of Castle Nocturne. Imperious, cruel-tongued and deliciously wicked; she is used to being obeyed and has been bored for centuries. Only the truly charming can hold her attention — or dare to talk back.',
  schedule: [null, null, 'castle'],
  gifts: { love: ['wine'], like: ['gem', 'roses', 'perfume'], hate: ['candle', 'dagger'] },
  giftLines: {
    love: ['She uncorks it, inhales, and her eyes flutter half-closed.', '@valeria Oh. *Oh*, you clever little thing. A 1340 vintage. You *do* know how to please me. I may let you live another week.'],
    like: '@valeria Hm. Tribute. Adequate tribute. You are learning your place, pet.',
    neutral: '@valeria What *is* this? Are you trying to bore me to death? I am already dead, darling, it won\'t take.',
    hate: ['She hisses, recoiling into the shadows as if burned.', '@valeria You *dare* bring that into my castle? Get it out. *Now.* Before I forget I find you amusing.'],
  },
  talk: [
    ['@valeria Ah, my little mortal returns. Do you know how many fools have walked through those gates? I keep their names in a book. It is a *very* long book.', '@valeria Yours is written in pencil. For now.'],
    ['@valeria The villagers call me "The Crimson Terror." I prefer "Countess." Or "Mistress." You may choose. Choose correctly.'],
    ['She is sprawled across her throne sideways, one leg dangling over the armrest, looking terribly bored.', '@valeria Entertain me. Sing. Dance. Juggle. Bleed a little. Anything.'],
    ['@valeria Sunlight? A *dreadful* thing. Hot, bright, cheerful. Everything I despise. You remind me of it a little. I haven\'t decided if that\'s a compliment.'],
    ['@valeria Six hundred years, and do you know what I\'ve learned? Mortals are fragile, foolish, short-lived...', 'She trails a cold finger along your cheek.', '@valeria ...and *so* warm.'],
    ['@valeria My servants? Bats, mostly. A few ghouls. One very nervous butler named Gerald. Gerald, say hello.', 'Somewhere in the dark, someone squeaks.'],
  ],
  afterTalk: [
    ["@valeria Ah, my sweetheart returns. Do you know, Gerald has started setting two places at dinner without being told. Insolent man. I've given him a raise."],
    ["She tilts your chin up with one cold finger and inspects your neck.", "@valeria Healing nicely. What a shame. Come upstairs later and I'll... *redecorate.*"],
    ["@valeria I've been dreadfully distracted all evening. I signed a decree ordering the village to plant *flowers.* Flowers! This is your fault. You've ruined me."],
    ["@valeria I kept the ribbon, you know. The black one. It's on my nightstand.", "She smiles slowly.", "@valeria For *emergencies.*"],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'The gates of Castle Nocturne swing open as you approach, without a single hand touching them. Candles light themselves, one by one, down a long hall of black marble and red velvet.',
          'At the end of the hall, on a throne of twisted iron, sits a woman. Pale as moonlight, hair like spilled ink, a gown the color of old blood. Her eyes are a lazy, glowing crimson.',
          '@valeria Well, well. A visitor. How *quaint.* Do you know where you are, little mortal?',
          '@valeria You are in my house. Uninvited. That is very rude. In my experience, rude guests end up as dinner.',
          'She rises — and suddenly she\'s right in front of you, though you never saw her move. She tilts your chin up with one cold, sharp-nailed finger.',
          '@valeria *Kneel.*',
        ],
        aff: 10,
        choices: [
          { text: 'Kneel, with a theatrical bow. "As my lady commands."', go: 'kneel' },
          { text: 'Don\'t kneel. Smile instead. "I don\'t think I will." [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'defy_win', fail: 'defy_fail' },
          { text: '"Do you say that to all your guests, or just the cute ones?"', go: 'flirt' },
        ],
      },
      kneel: {
        text: [
          'You sweep into an elaborate bow and drop to one knee. Her eyebrows rise.',
          '@valeria Oh, *theatrical.* And obedient. I could get used to this.',
          'She circles you slowly, her gown whispering across the marble.',
          '@valeria Most of them kneel because they\'re terrified. You knelt like you were having *fun.* Curious.',
        ],
        aff: 3,
        next: 'name',
      },
      defy_win: {
        text: [
          '@you I don\'t think I will.',
          'For a moment the air goes cold enough to frost your breath. Then — she laughs. A low, delighted, genuinely surprised laugh that echoes up into the vaulted ceiling.',
          '@valeria Oh, you *impudent* thing! No one has said no to me in a hundred and twelve years. The last one was a paladin. I turned him into a very nice coat rack.',
          '@valeria You, though... I think I\'ll keep you a while. For entertainment.',
        ],
        aff: 7,
        next: 'name',
      },
      defy_fail: {
        text: [
          '@you I don\'t th— ',
          'Her eyes flare red, and your knees give out on their own. You hit the floor. She smirks.',
          '@valeria Bold words, weak knees. Never mind, darling. You may try again when you\'re more... *interesting.*',
          'Still, there\'s a glint of curiosity in those crimson eyes.',
        ],
        aff: 1,
        next: 'name',
      },
      flirt: {
        text: [
          'She blinks. Once. Twice. Like a cat that has just been booped on the nose.',
          '@valeria Did you — are you *flirting* with me? In my own throne room? Moments from death?',
          '@you Is it working?',
          '@valeria ...Absolutely not.',
          'It\'s working a little.',
        ],
        aff: 5,
        next: 'name',
      },
      name: {
        text: [
          '@valeria I am Countess Valeria Nocturne, Mistress of the Night, Scourge of the Southern Vale, and owner of this rather dusty castle. And you are?',
          '@you {name}.',
          '@valeria {name}. How plain. I shall call you "pet" instead.',
          'She waves a hand, and the great doors swing open behind you.',
          '@valeria You may go. You may also come back. Evenings only, naturally. Bring me something worth my time, and perhaps I won\'t drink you.',
          '@valeria ...Perhaps.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'A bat flutters down from the castle gates as you arrive and drops a black envelope into your hands. Inside, in elegant crimson script: *You will dine with me tonight. Attendance is not optional. — V.*',
          'The dining hall could seat a hundred. Tonight it seats two. Silver platters of roast pheasant and sugared fruits for you. A single crystal goblet of something dark red for her.',
          '@valeria Eat. You\'re too thin. I like my mortals well fed. Purely for... aesthetic reasons.',
          'She watches you over the rim of her goblet, chin propped on one hand.',
          '@valeria We shall play a game. I ask a question; you answer honestly. If you lie, I\'ll know. If you bore me, I\'ll know that too. Understood?',
        ],
        next: 'q1',
      },
      q1: {
        text: [
          '@valeria First question. Why do you keep coming back here? Everyone else in that town crosses the street when my carriage passes.',
        ],
        choices: [
          { text: '"Because you\'re the most interesting person in Clichéton."', go: 'q1a', aff: 5 },
          { text: '"Because I don\'t think you\'re as evil as you pretend."', go: 'q1b', aff: 3 },
          { text: '"Honestly? The free food."', go: 'q1c', aff: 4 },
        ],
      },
      q1a: {
        text: [
          '@valeria Flattery. Cheap. Effective. *Continue.*',
          'She hides a smile behind her goblet.',
        ],
        next: 'q2',
      },
      q1b: {
        text: [
          'The temperature in the room drops ten degrees.',
          '@valeria Oh, I am *exactly* as evil as I pretend, pet. I have burned villages. I have drained knights. I have once, on a whim, cancelled a children\'s birthday party.',
          '@valeria ...That last one was a misunderstanding. The clown was *very* frightening.',
        ],
        next: 'q2',
      },
      q1c: {
        text: [
          'She stares at you. Then she throws back her head and laughs.',
          '@valeria *Honesty!* Oh, it\'s so rare, I forgot what it tasted like. Have more pheasant, you ridiculous creature.',
        ],
        next: 'q2',
      },
      q2: {
        text: [
          '@valeria Second question. What do you want, mortal? Riches? Power? Immortality? I could give you any of them. For a price.',
        ],
        choices: [
          { text: '"I want to know what you want." [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'q2_win', fail: 'q2_fail' },
          { text: '"Another dinner like this one."', go: 'q2_dinner', aff: 5 },
        ],
      },
      q2_win: {
        text: [
          'Valeria goes very, very still. The candles flicker.',
          '@valeria What I *want?*',
          'For a long moment, she doesn\'t answer. When she does, her voice is quieter. Almost unguarded.',
          '@valeria Something I haven\'t seen before. Something that surprises me. Do you know how *long* six hundred years is, pet? I have read every book. Seen every play. Every mortal who walks through those doors wants the same three things.',
          '@valeria And then you came along and asked me *that.*',
          'She sets down her goblet with a sharp little click.',
          '@valeria Dinner is over. Come back tomorrow. That is an *order.*',
          'It sounds more like a request.',
        ],
        aff: 10,
        end: true,
      },
      q2_fail: {
        text: [
          '@you I want to know what *you* want.',
          '@valeria Hah! A clumsy deflection, darling. I want you to answer my question.',
          '@you ...Riches?',
          '@valeria How *dull.* Never mind. You\'re still prettier than Gerald.',
          'Gerald squeaks from the shadows, wounded.',
        ],
        aff: 3,
        end: true,
      },
      q2_dinner: {
        text: [
          '@valeria Another — ',
          'She cuts herself off. For the first time since you met her, Countess Valeria Nocturne seems at a loss for words.',
          '@valeria You could have *immortality*, and you want a second dinner.',
          '@you The company\'s good.',
          '@valeria ...Tomorrow, then. Same time. Wear something nicer.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'Tonight the great ballroom of Castle Nocturne is lit with a thousand black candles. A ghostly orchestra plays in the gallery. The dance floor is empty, except for the Countess.',
          '@valeria You\'re late. I\'ve been waiting. I *loathe* waiting.',
          'She extends one gloved hand.',
          '@valeria Dance with me, pet. I lead. I always lead.',
          'She does lead. She dances like a storm — sweeping, commanding, pulling you through turns so fast the candles blur. Her body is cool against yours. Her eyes never leave your throat.',
        ],
        choices: [
          { text: 'Let her lead completely. Follow every move.', go: 'follow', aff: 5 },
          { text: 'Halfway through, take the lead yourself. [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'lead_win', fail: 'lead_fail' },
        ],
      },
      follow: {
        text: [
          'You let her guide you, surrendering to the music, and she makes a soft, pleased sound low in her throat.',
          '@valeria Good. *Very* good. You trust me. That\'s either very brave or very stupid.',
        ],
        next: 'blood',
      },
      lead_win: {
        text: [
          'At the crescendo, you tighten your grip on her waist and spin *her* instead.',
          'Valeria lets out a sharp, startled gasp — and then she\'s laughing, breathless, as you dip her low over the ballroom floor.',
          '@valeria You — *insolent* — oh, do that again.',
        ],
        aff: 8,
        next: 'blood',
      },
      lead_fail: {
        text: [
          'You try to take the lead. She simply doesn\'t let you; you end up spinning on your own like a confused top while she watches, arms folded, smirking.',
          '@valeria Valiant effort, pet. Six hundred years of practice, though. Six hundred.',
        ],
        aff: 3,
        next: 'blood',
      },
      blood: {
        text: [
          'The music slows. She draws you close, so close your cheek brushes her cold one. Her lips hover just above the pulse in your neck.',
          '@valeria I can hear it, you know. Your heartbeat. It\'s been racing all night.',
          '@valeria I want to taste you. Just a little. I could simply *take* it — I always have, from everyone. But for some reason, with you, I find I want to be... *asked.*',
          'She pulls back, just enough to look at you. And for the first time, there is something uncertain in her crimson eyes.',
        ],
        choices: [
          { text: '"Then I\'m asking. Go ahead."', go: 'yes', aff: 10 },
          { text: '"Not tonight."', go: 'no', aff: 8 },
          { text: '"Only if you tell me something true about yourself first."', go: 'trade', aff: 9 },
        ],
      },
      yes: {
        text: [
          'You tilt your head. She stares at the offered skin for a long moment, like a starving woman before a feast she never expected to be invited to.',
          'Then her fangs slide in — a sharp sting, then warmth flooding through you like the first sip of hot spiced wine. Her arms tighten around you. She makes a sound you will never forget.',
          'It lasts only seconds. She pulls away and presses a cold kiss to the tiny wound, sealing it. Her lips are red. Her eyes are wet.',
          '@valeria No one has ever *offered.* Six hundred years. They scream. They pray. They run. No one has ever just... offered.',
          '@valeria You stupid, wonderful creature.',
        ],
        end: true,
      },
      no: {
        text: [
          'She freezes. You can practically feel the castle hold its breath.',
          'And then, slowly, she steps back and dips her head. It\'s the first time you\'ve seen her bow to anyone.',
          '@valeria ...As you wish.',
          '@valeria Do you know, the last mortal who told me no ran screaming from the castle. You simply stand there and keep holding my hand.',
          'She doesn\'t let go. Not for the rest of the night.',
        ],
        end: true,
      },
      trade: {
        text: [
          'Her eyebrows rise. Then, quietly:',
          '@valeria ...I was a baker\'s daughter. Before. I used to make honey bread. I can\'t taste it anymore. I can\'t remember what it tasted like.',
          'She looks almost embarrassed at the admission. You tilt your head for her. Her bite is achingly gentle.',
          'Afterward, she rests her forehead against your shoulder and doesn\'t say anything at all for a long, long time.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'There\'s no invitation tonight. Gerald simply opens the gates, bows deeply, and points up the winding stairs to the highest tower.',
          'Her bedchamber is all black silk and crimson velvet, lit by a single candelabra and the blood-red moon through the window. Valeria stands at the glass with her back to you.',
          '@valeria Close the door.',
          'You do. She turns. Her gown is a sheer, dark thing that leaves very little to the imagination, and her eyes are glowing.',
          '@valeria I have decided I am going to have you, pet. All of you. And you are going to do *exactly* as I say.',
          'She crosses the room in an instant, pressing you back against the door. Her hand is at your throat — not squeezing, just resting there, possessive.',
          '@valeria ...Unless you say "sunrise." If you say that word, everything stops. Instantly. I won\'t be angry. I won\'t ask why.',
          'Her voice softens, just for that one sentence.',
          '@valeria Do you understand?',
        ],
        choices: [
          { text: '"Yes, Mistress."', go: 'submit', aff: 10 },
          { text: '"I understand. But maybe tonight, *you* do as *I* say." [Charm check 4]', check: { stat: 'charm', dc: 4 }, pass: 'switch', fail: 'submit_after' },
          { text: '"Sunrise." (Stop, and just talk.)', go: 'sunrise', aff: 10 },
        ],
      },
      submit: {
        text: [
          "Something in her expression melts into a wicked, delighted smile.",
          "@valeria Oh, *good.* Such good manners.",
          "She doesn't rush. That's the cruelest part. She circles you slowly, the way she did the night you met, and trails one sharp nail along your jaw, your throat, the line of your collar. She tells you exactly what she's going to do to you. Every word is soft and filthy and deliberate. Every time you lean toward her she pulls away, laughing low in her throat.",
          "@valeria Don't move. I didn't say you could move.",
          "She unlaces your shirt herself, one tie at a time, watching your face. She binds your wrists loosely above your head with a black silk ribbon from her hair, and tests the knot with a fingertip.",
          "@valeria Still with me, sweetheart?",
          "@you Yes.",
          "@valeria Then *beg.*",
          "You do. She makes you say it twice. Then her mouth is at your throat, fangs grazing but never piercing, and her cold hands are everywhere at once, and the candles gutter out one by one...",
          "...",
        ],
        next: "after",
      },
      submit_after: {
        text: [
          "You try. You really do. But she simply arches one perfect eyebrow and says *kneel* in that voice, and your resolve evaporates like mist at dawn.",
          "@valeria Next time, perhaps. Six hundred years of practice, pet.",
          "She sits on the edge of the bed with her legs crossed and makes you wait, watching you kneel there with your heart pounding, while she slowly peels off one long black glove, finger by finger.",
          "@valeria Come here. *Slowly.*",
          "Then she shows you, at great and thorough length, exactly what six hundred years of practice means, checking in with a murmured *still with me?* every time she takes you somewhere new...",
          "...",
        ],
        next: "after",
      },
      switch: {
        text: [
          "You catch her wrist, gently, and turn her around so *she's* the one with her back against the door.",
          "Valeria's eyes go wide. Her lips part. For one long moment the most feared woman in the Southern Vale is utterly speechless.",
          "@valeria You... no one has ever... *oh.*",
          "@you Is that a no?",
          "@valeria It is *very much not* a no.",
          "You pin both her wrists above her head with one hand. She could break your grip without trying. She doesn't. She stays exactly where you put her, trembling, and when you kiss down the cold line of her throat she makes a sound so raw it shocks you both.",
          "@valeria Say it. Tell me what to do. I've never — tell me.",
          "It turns out the Countess, who has commanded everyone for six centuries, has never once been allowed to simply let go. She's a quick learner. She says *please* for the first time in a hundred years, then again, then a great many more times...",
          "...",
        ],
        aff: 15,
        next: "after",
      },
      sunrise: {
        text: [
          "The word hangs in the air. She lets go at once and steps back, exactly as she promised.",
          "@valeria ...Very well.",
          "There's no anger in her face, only a flicker of something like fear, quickly hidden.",
          "@you I don't want to stop. I just want to know why tonight. Why now.",
          "She sits on the edge of the bed, suddenly very small in all that black silk.",
          "@valeria Because the festival is coming. Because you are mortal, and you will grow old and die, and I will still be here. Because I wanted to have *something* of you before that happens.",
          "You sit beside her and take her cold hand. After a long time she leans into you, and you kiss her slowly, and it's you who lays her back on the silk.",
          "There's no commanding this time. You undress each other carefully, like unwrapping something fragile. She shivers when your warm palms slide down her bare back. She keeps whispering *you're so warm, you're so warm*, as if it's the most astonishing thing in the world. It's tender and hungry and terribly, terribly sincere...",
          "...",
        ],
        next: "after",
      },
      after: {
        text: [
          "Hours later you lie tangled in black silk, the moon low in the window. Valeria is curled against your side, one cold leg thrown over yours, idly tracing a fingertip over the faint red marks she left on your collarbone.",
          "@valeria You realize I'm never letting you go now. You are *mine.* My pet. My consort. My... whatever word mortals use.",
          "@you \"Sweetheart\" is popular.",
          "@valeria Absolutely not.",
          "A pause.",
          "@valeria ...*Sweetheart.* Ugh. Disgusting. Say it again.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "Gerald brings you breakfast in bed on a silver tray: eggs, toast, a pot of coffee, and a single black rose. The heavy velvet curtains are drawn tight against the sun.",
          "@valeria Don't spill crumbs on the silk. I will know. I will *always* know.",
          "Valeria is lying beside you, propped on one elbow, watching you eat with an expression she'd probably describe as bored. It isn't bored. Her hair is a wild black tangle and there's a faint flush in her pale cheeks, which you have learned means she has recently fed.",
          "@valeria You talk in your sleep, you know. You said my name. Several times. In a *very* particular tone.",
          "She smiles like a cat with a mouse.",
          "@valeria Now. Tell me what you liked best. In detail. I'm writing a list.",
        ],
        choices: [
          { text: "Tell her, in detail. Watch her lose her composure.", go: "detail", aff: 6 },
          { text: "\"I liked the part where you said please.\"", go: "please", aff: 5 },
          { text: "Pull her down and kiss her instead of answering.", go: "kiss", aff: 6 },
        ],
      },
      detail: {
        text: [
          "You tell her. Slowly. In great detail. By the third item, the Countess of Castle Nocturne has pulled a pillow over her face.",
          "@valeria That's — I asked for a list, not a *recitation* — oh, you wretch, you're enjoying this.",
          "@you You asked.",
          "@valeria I'm *aware* I asked.",
          "She doesn't remove the pillow. But her bare foot finds your ankle under the sheets and stays there.",
        ],
        end: true,
      },
      please: {
        text: [
          "Her eyes narrow dangerously.",
          "@valeria I said no such thing.",
          "@you You said it eleven times.",
          "@valeria I said it *nine* times, and I would thank you not to — Gerald, stop *smiling* — get out —",
          "Gerald flees. Valeria rolls on top of you, pins you to the pillows, and informs you that tonight you'll be the one counting. You don't argue.",
        ],
        end: true,
      },
      kiss: {
        text: [
          "You set the tray aside and pull her down. She tastes of copper and dark wine. She makes a soft, surprised sound against your mouth and lets you keep her there.",
          "@valeria Mm. That's cheating. You're supposed to be terrified of me.",
          "@you I'll work on it.",
          "@valeria See that you don't.",
          "She doesn't let you leave until sunset. The breakfast goes cold. Neither of you mentions it.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'A black carriage drawn by four skeletal horses pulls up at the foot of the festival hill. Townsfolk scatter. The door opens.',
          '@valeria Get in, sweetheart. I am *not* watching the stars with all these peasants.',
          'The carriage takes you to the highest balcony of Castle Nocturne, above the clouds, where the sky is so close you could touch it.',
          'When the stars begin to fall, she takes your hand — and doesn\'t let go.',
          '@valeria Six hundred years I\'ve watched this from this balcony. Alone. Every single time.',
          '@valeria I could make you like me, you know. Immortal. We could watch the stars fall together for a thousand years.',
        ],
        choices: [
          { text: '"Ask me again in ten years."', go: 'wait' },
          { text: '"Yes. Forever sounds about right."', go: 'turn' },
        ],
      },
      wait: {
        text: [
          '@valeria Ten years. *Fine.* What are ten years? I\'ve had naps longer than that.',
          'But she\'s smiling. A real smile, bright and astonished and young.',
          '@valeria Ten years, and then I\'ll ask again. And again. And again, until you say yes.',
        ],
        next: 'epilogue',
      },
      turn: {
        text: [
          'She looks at you for a long time. Then she kisses you under the falling stars, and her fangs graze your lip, and she whispers:',
          '@valeria Not tonight. Tonight, I want to feel how warm you are. But soon, sweetheart. *Soon.*',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'The villagers still call her the Crimson Terror. But these days, the Crimson Terror pays fair wages, funds the orphanage ("for future minions," she insists), and hosts a midnight ball every month that has become the most exclusive event in the kingdom.',
          'You sit at her side on a second throne she had made just for you. She complains about it constantly. She has also had your name engraved on it in rubies.',
          'Gerald says he has never seen the Mistress so happy. He says it very quietly, so she won\'t hear.',
          'She hears. She gives him a raise.',
          'And every night, before the dawn, she pulls you close in that great black bed and whispers, *still mine?* — and every night, you tell her yes.',
        ],
        ending: 'valeria',
      },
    },
  },
});
