FL.addCharacter({
  id: 'pell',
  name: 'Pellucia Quill',
  short: 'Pell',
  trope: 'Shy Dandere Librarian',
  color: '#b6a1e0',
  favStat: 'wits',
  endingTitle: 'Our Story, Bound in Leather',
  teaser: 'Behind a towering stack of books, someone very small and very quiet squeaks.',
  blurb: 'An assistant librarian who speaks mostly in whispers and ellipses and hides behind whatever book is closest. Painfully shy, secretly brilliant — and, unknown to anyone, the anonymous author of the kingdom\'s most scandalous romance novels.',
  schedule: ['library', 'library', null],
  gifts: { love: ['novel', 'tea'], like: ['tome', 'candle', 'cakes'], hate: ['ale', 'steak'] },
  giftLines: {
    love: ['She looks at it. Her face goes from pale to crimson in under a second.', '@pell Th-the Duke\'s Forbidden — you — w-where did you — I mean — I\'ve *heard* of it — I\'ve never *read* it — it\'s very — the prose in chapter nine is — ', '@pell ...Thank you. I\'ll treasure it. In a drawer. A *locked* drawer.'],
    like: '@pell F-for me? ...You didn\'t have to... but I... I really like it. Thank you. *So* much.',
    neutral: '@pell Oh! Um. Thank you... I\'ll... find a place for it. Next to the... other things.',
    hate: ['@pell Oh... um... th-that\'s... very... *loud*-smelling...', 'She tries to smile. It doesn\'t quite work.'],
  },
  talk: [
    ['@pell ...Oh! H-hello. I didn\'t see you. I mean, I *did* see you, I always see you, I mean — ', 'She disappears behind a copy of "Advanced Mycology." The book trembles.'],
    ['@pell ...I re-shelved the entire poetry section today. Alphabetically. And by... feelings. The sad ones are on the bottom shelf. So you have to kneel to read them. It felt right.'],
    ['@pell D-do you like books? ...You do? What kind? ...Oh. Oh, that\'s my favorite too. *That\'s my favorite too.*'],
    ['She hands you a book without a word. There\'s a bookmark in it, on a page with one sentence underlined: *She wanted to speak, but her heart had already said everything.*', 'When you look up, she\'s gone.'],
    ['@pell People think libraries are quiet. They\'re not. Every book is someone shouting. You just have to... listen in the right way.'],
    ['@pell I... I had a dream about you. N-not a strange dream! A normal dream! We were... alphabetizing. ...It was nice.'],
  ],
  afterTalk: [
    ["She hands you a book without a word. There's a bookmark in it, on a page with one line underlined: *She wanted it again. She wanted it every night.* When you look up, she's very pink and very busy shelving."],
    ["@pell M-my editor read the new chapter. She said it was \"suspiciously well-informed.\" I said I'd been doing a lot of research. She asked who with. I fainted a little."],
    ["@pell Footnote has started sleeping on your side of the nook. He misses you. I mean — he — *I* — he misses you."],
    ["@pell The library closes at sundown. And I have a key now. I'm just... telling you. For no reason. Purely informational."],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'Deep in the stacks of the Grand Library, a rolling ladder is wobbling dangerously. At the very top, a small woman with enormous round glasses and a messy lavender bun is trying to shelve an armful of books that is much too big for her.',
          'The ladder tilts. The books slide. She squeaks.',
          'Everything falls at once.',
        ],
        aff: 10,
        choices: [
          { text: 'Dive and catch her. [Might check 1]', check: { stat: 'might', dc: 1 }, pass: 'catch_her', fail: 'catch_fail' },
          { text: 'Catch the falling books instead.', go: 'catch_books' },
          { text: 'Steady the ladder before it tips. [Wits check 1]', check: { stat: 'wits', dc: 1 }, pass: 'ladder', fail: 'catch_fail' },
        ],
      },
      catch_her: {
        text: [
          'You lunge and catch her just before she hits the floor. Books rain down around you like heavy leather hail.',
          'She lies in your arms, staring up at you, glasses askew, mouth open in a perfect little "o."',
          '@pell ...',
          '@pell ......',
          '@pell ...th-thank you...',
          'And then she wriggles free, grabs the nearest book and holds it in front of her face like a shield.',
        ],
        aff: 5,
        next: 'name',
      },
      catch_books: {
        text: [
          'You snatch three books out of the air. She lands in a pile of cushions in the reading nook, unhurt.',
          '@pell ...You saved the *Collected Sonnets.* That\'s a first edition. That\'s... you saved it.',
          'She looks at you like you\'ve just slain a dragon.',
          '@pell Most people would have... just saved me. B-but you understood which one was *important*...',
          '@you You\'re important too.',
          'She vanishes behind the nearest shelf with a squeak.',
        ],
        aff: 6,
        next: 'name',
      },
      ladder: {
        text: [
          'You grab the ladder and brace it with your foot at exactly the right angle. It settles. She clings to the top, books clutched to her chest, eyes enormous.',
          '@pell ...O-oh. You fixed the fulcrum... that\'s very... clever...',
          'She climbs down very carefully, never taking her eyes off you.',
        ],
        aff: 5,
        next: 'name',
      },
      catch_fail: {
        text: [
          'You lunge. You miss. She lands on you. Fourteen books land on both of you.',
          'From somewhere beneath the pile, a very small voice whispers:',
          '@pell ...I\'m so sorry... I\'m so, so sorry... please don\'t tell the head librarian...',
        ],
        aff: 3,
        next: 'name',
      },
      name: {
        text: [
          '@you Are you okay? I\'m {name}.',
          'From behind her book:',
          '@pell ...Pellucia. Quill. Pell. Assistant librarian. I-I\'m okay. I fall a lot. The ladders hate me.',
          '@pell ...Thank you. For... for noticing me. People usually don\'t.',
          'She peeks out from behind the book for half a second. She has very pretty grey eyes. Then she\'s gone, scurrying off into the stacks.',
          'On the floor, she\'s left behind a single sheet of paper covered in tiny handwriting. The only words you can make out are: *...his strong hands upon her trembling...*',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Pell finds you in the reading hall. She hovers at the end of your table for nearly a full minute, opening and closing her mouth, before she finally sets down a book in front of you and bolts.',
          'You follow her into a small, hidden reading nook behind the history section: a window seat piled with cushions, a teapot, and a cat named Footnote who regards you with contempt.',
          '@pell Th-this is my secret place... No one else knows about it... I thought... maybe... you could read with me? If you want? You don\'t have to! You probably have adventures to — ',
          '@you I\'d love to.',
          '@pell ...Oh.',
        ],
        choices: [
          { text: '"Will you read something aloud to me?"', go: 'aloud', aff: 7 },
          { text: 'Sit quietly and read together in comfortable silence.', go: 'quiet', aff: 6 },
          { text: 'Ask her about her favorite book. [Wits check 2]', check: { stat: 'wits', dc: 2 }, pass: 'favorite', fail: 'favorite_fail' },
        ],
      },
      aloud: {
        text: [
          '@pell A-aloud? I... I can try...',
          'She opens a book of poems with shaking hands. Her first line comes out as a whisper. The second, a little stronger. By the fifth, her voice has found something — a low, musical warmth you would never have guessed was hiding in her.',
          'When she finishes, she looks up and realizes you\'re staring at her.',
          '@pell W-was that bad? I\'m sorry —',
          '@you You have a beautiful voice, Pell.',
          'She pulls a cushion over her head. Footnote the cat sighs.',
        ],
        next: 'end',
      },
      quiet: {
        text: [
          'You sit. You read. The afternoon light moves slowly across the floor. The tea goes cold. Footnote eventually, grudgingly, settles in your lap.',
          'At some point you look up. Pell has stopped reading. She\'s watching you over the top of her book.',
          '@pell ...Sorry. I just... I\'ve never had someone to be quiet *with* before. Only someone to be quiet *around*.',
        ],
        next: 'end',
      },
      favorite: {
        text: [
          'She tells you about her favorite: an obscure, centuries-old epic about a mapmaker who falls in love with a country. You ask about the symbolism of the rivers, and her face lights up.',
          'For two hours, she talks. She doesn\'t stammer once. She gestures. She *laughs.* She forgets to hide behind anything at all.',
          'Then she seems to realize, all at once, how much she\'s been talking.',
          '@pell I... I\'m sorry... I never talk this much... I never talk this much to *anyone*...',
          '@you Don\'t stop.',
        ],
        aff: 8,
        next: 'end',
      },
      favorite_fail: {
        text: [
          '@pell It\'s... um... it\'s very obscure... you probably wouldn\'t...',
          'You try to ask a smart follow-up question. It comes out as "Is it... long?"',
          '@pell ...Yes. It\'s very long. Hehe.',
          'She giggles. You didn\'t know she could giggle. It\'s worth it.',
        ],
        aff: 4,
        next: 'end',
      },
      end: {
        text: [
          'When it\'s time to go, she walks you to the door of the nook. She looks at the floor.',
          '@pell ...Will you come back? To my secret place?',
          '@you If you\'ll have me.',
          '@pell ...I would like that. Very much. I would like that *the most.*',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'Pell is late to the reading nook. You wait for her. Footnote the cat knocks a stack of papers off the window seat out of spite.',
          'You gather them up. It\'s a manuscript. Handwritten, in Pell\'s tiny, careful script. The title page reads: *The Librarian\'s Secret Desire, by Lady Velvet Ink.*',
          'Lady Velvet Ink. The anonymous author of *The Duke\'s Forbidden Passion.* The most scandalous romance novelist in all of FantasyLandia.',
          'Footsteps. Pell rounds the corner. She sees the manuscript in your hands.',
          'She makes a sound like a kettle reaching boiling point.',
          '@pell NO — DON\'T — THAT\'S — I CAN EXPLAIN — no I can\'t — *please just let the floor swallow me*',
        ],
        choices: [
          { text: '"You\'re Lady Velvet Ink? Pell, you\'re *famous!*"', go: 'famous', aff: 7 },
          { text: 'Read a passage aloud with great dramatic flair.', go: 'readaloud', aff: 5 },
          { text: 'Hand it back gently. "I won\'t tell anyone."', go: 'secret', aff: 8 },
        ],
      },
      famous: {
        text: [
          '@pell N-no one can know! The head librarian would fire me! My mother would — oh gods, my *mother* —',
          '@you Pell. Half the kingdom reads your books. They\'re *good.*',
          'She stops panicking. Peeks at you through her fingers.',
          '@pell ...You think they\'re good?',
        ],
        next: 'research',
      },
      readaloud: {
        text: [
          '@you "His strong hands upon her trembling waist, the Duke whispered, *Your eyes are like the twin moons of Eldaria —*"',
          '@pell PLEASE STOP —',
          '@you "— *and I would burn every library in the kingdom to —*" Pell, the Duke burns libraries? That\'s so out of character for you.',
          '@pell IT\'S A METAPHOR FOR PASSION!',
          'She snatches it back, scarlet, and then — to your surprise — starts laughing so hard she has to sit down.',
        ],
        next: 'research',
      },
      secret: {
        text: [
          'She takes it with trembling hands, hugging it to her chest.',
          '@pell ...You\'re not going to laugh? Or tell anyone?',
          '@you Never.',
          'She stares at you for a long moment, glasses fogging slightly.',
          '@pell No one has ever kept a secret for me before. Because no one has ever *known* any.',
        ],
        next: 'research',
      },
      research: {
        text: [
          'Pell sits on the window seat, clutching the manuscript. After a long, agonized silence:',
          '@pell The truth is... I\'m stuck. On this chapter. The kiss scene. I\'ve written forty-two kiss scenes. But they\'re all... I\'ve never... I just *read* about it. I\'ve never actually...',
          '@pell My editor says the new one is "technically accurate but emotionally bankrupt." I don\'t know what I\'m doing wrong.',
        ],
        choices: [
          { text: 'Read the chapter and give her real feedback. [Wits check 3]', check: { stat: 'wits', dc: 3 }, pass: 'critique', fail: 'critique_fail' },
          { text: '"Maybe you need to do some... research?"', go: 'kiss', aff: 10 },
        ],
      },
      critique: {
        text: [
          'You read the chapter carefully. Then you point to a line.',
          '@you Here. You describe *everything* — the candlelight, the curtains, his hands. But you never say what she\'s *thinking.* What she\'s afraid of. The kiss isn\'t the important part. It\'s the moment right before, when she decides to be brave.',
          'Pell stares at you. Then at the page. Then at you.',
          '@pell ...That\'s it. That\'s exactly it. I never wrote her being brave... because I never was...',
          'She looks up at you, very pink, very determined.',
          '@pell C-can I try being brave? Right now?',
          'And she leans forward and kisses you — very quickly, a tiny brush of a kiss, gone in a heartbeat — and then stares at you, utterly shocked at herself.',
          '@pell ...Oh. *Oh.* I need to rewrite the entire book.',
        ],
        aff: 12,
        end: true,
      },
      critique_fail: {
        text: [
          'You read the chapter. You say it\'s good. You suggest "more kissing." She nods very seriously and writes "MORE KISSING" in the margin.',
          '@pell ...That is not helpful feedback. But it\'s very... *sincere* feedback.',
          'She\'s smiling, though.',
        ],
        aff: 5,
        end: true,
      },
      kiss: {
        text: [
          'Pell goes absolutely still.',
          '@pell R-research...?',
          '@you For the book.',
          '@pell For... for the book. Yes. For literature. For *art.*',
          'She takes off her glasses with shaking hands. Closes her eyes. Tilts her face up.',
          'You kiss her softly. She tastes like chamomile tea. She makes a tiny, astonished sound, and her fingers curl into your sleeve.',
          'When you pull back, she keeps her eyes closed for a long moment.',
          '@pell ...My editor was right. All forty-two of them were emotionally bankrupt.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'You lose track of time in the reading nook. By the time you notice, the great windows are dark and the library is silent.',
          'Pell tries the main door. It doesn\'t move.',
          '@pell ...The head librarian locks up at sundown. And she has the only key. And she doesn\'t come back until morning.',
          '@pell We\'re... locked in. Overnight. Together.',
          'She turns to face you, pressing her back against the door. In the candlelight her face is pink all the way up to her ears.',
          '@pell This is... this is a trope, you know. "Locked in Together." It\'s chapter eleven in four of my books.',
          '@you What happens in chapter eleven?',
          '@pell ...',
          'She doesn\'t answer. Instead she pulls a folded letter from her sleeve and hands it to you, then turns around and faces the wall.',
          '@pell I wrote it. Weeks ago. I could never say it out loud. So... please read it. *Quietly.* Not aloud. *Definitely not aloud.*',
        ],
        choices: [
          { text: 'Read the letter.', go: 'letter', aff: 6 },
        ],
      },
      letter: {
        text: [
          'The letter is three pages long, written in her small, careful hand. It\'s the most beautiful thing you\'ve ever read.',
          '*I have written a thousand love scenes, and every one of them was a lie, because I had never felt anything like this. The way my heart jumps when your footsteps come down the history aisle. The way I save the best books for you before anyone else can borrow them. The way you look at me — as if I am the story, and not the girl hiding behind it.*',
          '*I am not brave. I am the least brave person in this kingdom. But I would like, just once, to be the heroine of my own story instead of the author. I would like it to be with you.*',
          '*— P.*',
          'You look up. She\'s still facing the wall. Her shoulders are shaking.',
        ],
        choices: [
          { text: 'Turn her around gently and kiss her.', go: 'kiss', aff: 10 },
          { text: 'Read the last line aloud anyway, softly. [Wits check 4]', check: { stat: 'wits', dc: 4 }, pass: 'aloud', fail: 'kiss' },
        ],
      },
      aloud: {
        text: [
          '@you "I would like it to be with you."',
          'She spins around.',
          '@pell I SAID NOT ALOUD —',
          '@you I know. But it deserved to be heard. It\'s the best thing you\'ve ever written.',
          'Her protest dies on her lips. Her eyes fill with tears.',
          '@pell ...It\'s the *truest* thing I\'ve ever written.',
        ],
        aff: 12,
        next: 'kiss',
      },
      kiss: {
        text: [
          "She kisses you this time, really kisses you, on tiptoe, her glasses bumping your nose and her hands trembling against your chest. She isn't hiding behind anything at all.",
          "You end up in the reading nook among the cushions, by the light of a single candle and the moon through the tall windows. She is shy at first: she sets her glasses aside very carefully, then fumbles with the buttons of her cardigan and gets two of them wrong.",
          "@pell I-I know the theory. Very well. Extensively. Forty-two chapters of theory.",
          "@you And the practice?",
          "@pell ...Please be patient with me.",
          "You are. You undo the buttons for her, one at a time, and kiss each new inch of soft skin. She whimpers so quietly you almost miss it. Then she's curious, then braver, and then, to your delight, she's *astonishingly* well-read. She murmurs things she's clearly only ever written down, and goes scarlet at each one, and says them anyway.",
          "@pell Chapter six. Th-the part with the — would you — *oh.* Oh, that's much better in person.",
          "At one point she whispers, breathless, *oh, chapter nine was completely wrong*, and you both dissolve into helpless laughter in the cushions. Then she pulls you back down, and she isn't laughing anymore. She is very, very far from quiet in her quiet library...",
          "...",
          "Hours later, she lies with her head on your chest, tracing words on your skin with one fingertip. You realize she's writing.",
          "@you What are you writing?",
          "@pell The first line of the next book. Don't read it. *Don't* — you're reading it.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake to a click and a creak: the head librarian is unlocking the main door. You and Pell are tangled together in the reading nook, half-dressed under her cardigan, with Footnote the cat asleep on your chest like a judgmental loaf.",
          "Pell's eyes snap open. She sees the head librarian's shadow at the end of the history aisle, and she makes a sound like a teakettle.",
          "@pell Oh no. Oh no, oh no. Hide. *Hide.* We have to — my cardigan's inside out — where are my *glasses* —",
          "The footsteps are getting closer.",
        ],
        choices: [
          { text: "Grab a book, sit up straight, and pretend you're both studying.", go: "study", aff: 5 },
          { text: "Pull the cushions over both of you and hold very still.", go: "hide", aff: 6 },
          { text: "Kiss her, slowly. Let the head librarian find what she finds.", go: "caught", aff: 6 },
        ],
      },
      study: {
        text: [
          "You snatch up the nearest book and open it. Pell does the same. You are both reading very intently when the head librarian rounds the corner.",
          "Head librarian: Good morning, Miss Quill. You're in early.",
          "@pell Y-yes! Research! Very early research!",
          "The head librarian looks at you. At Pell's inside-out cardigan. At the book you're holding, which is upside down and titled *The Duke's Forbidden Passion.* She sighs.",
          "Head librarian: Chapter nine is overrated, dear. Carry on.",
          "Pell doesn't speak for an hour. Then she laughs until she cries.",
        ],
        end: true,
      },
      hide: {
        text: [
          "You pull the cushions over both of you. Pell burrows into your chest, shaking with silent, terrified giggles. The footsteps pause right outside the nook. Footnote yawns loudly. The footsteps move on.",
          "@pell ...That was the most exciting thing that's ever happened to me in this library.",
          "@you The most exciting thing?",
          "@pell The *second* most exciting thing. Please stop smiling like that. I'm going to put it in a book.",
        ],
        end: true,
      },
      caught: {
        text: [
          "You kiss her. She stiffens, then melts. The footsteps stop at the edge of the nook. There's a long silence.",
          "Head librarian: ...I'll come back after breakfast.",
          "The footsteps retreat. Pell buries her face in your neck and screams into it, very quietly, for about thirty seconds.",
          "@pell I'm never going to be able to look her in the eye again.",
          "@pell ...That was very brave of us, wasn't it? I've never been brave before. I think I like it.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Pell is waiting for you at the foot of the festival hill, holding a lantern and a small package wrapped in brown paper. She isn\'t hiding behind anything. She keeps almost reaching for a book and stopping herself.',
          '@pell I... I brought you something. To open when the stars fall.',
          'You climb the hill together and find a quiet spot under an old oak. When the first star streaks across the sky, she nudges the package into your hands.',
        ],
        next: 'book',
      },
      book: {
        text: [
          'It\'s a book. Bound in deep blue leather, the title stamped in silver: *The Librarian and the Adventurer.*',
          'Underneath the title is the author\'s name. Not *Lady Velvet Ink*. It says *Pellucia Quill.*',
          '@pell It\'s about us. It\'s not scandalous. Well. It\'s *a little bit* scandalous. Chapter eleven. But mostly it\'s just... true.',
          '@pell I\'m publishing it under my real name. I\'m done hiding. I wanted you to have the first copy.',
          'You open it. The dedication reads: *For {name}, who found me in the stacks.*',
          'Under the falling stars, she kisses you, and doesn\'t hide her face afterward at all.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          '*The Librarian and the Adventurer* becomes the bestselling book in FantasyLandia history. Pell goes to her first book signing, nearly faints twice, and signs four hundred copies anyway — with you standing beside her, holding her hand under the table.',
          'Her mother reads it. Her mother *loves* it. Except chapter eleven, which her mother has "not read, and will never mention, and please stop asking, Pellucia."',
          'She becomes head librarian eventually. She installs a new reading nook, with two window seats side by side. Footnote the cat sleeps between you.',
          'She still whispers, mostly. She still stammers when she\'s flustered. But every night, in the quiet of the library after closing, she reads to you aloud — and her voice never shakes at all.',
        ],
        ending: 'pell',
      },
    },
  },
});
