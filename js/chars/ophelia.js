FL.addCharacter({
  id: 'ophelia',
  name: 'Lady Ophelia Hollowmere',
  short: 'Ophelia',
  trope: 'Melancholy Gothic Ghost',
  color: '#a9c6e8',
  favStat: 'wits',
  endingTitle: 'A Heartbeat at Starfall',
  teaser: 'A translucent woman in a two-hundred-year-old ballgown drifts down the staircase, sighing theatrically.',
  blurb: 'The ghost of Hollowmere Manor, dead for two hundred years. She waited all night at her debutante ball for a suitor who never arrived, and died of a broken heart (and a fall down the stairs) before dawn. Dramatic, morbid, darkly funny and desperately bored. A clever mind might uncover what really happened that night.',
  schedule: [null, null, 'manor'],
  gifts: { love: ['roses'], like: ['tea', 'comb', 'plushie', 'novel'], hate: ['candle', 'mirror'] },
  giftLines: {
    love: ['She reaches for the roses — and her fingers, for just a moment, become solid enough to touch them.', '@ophelia Roses. Red ones. I waited my whole life for someone to bring me red roses.', '@ophelia ...I waited two hundred years after that, too. Oh, you\'ll make me weep. I\'m *very* good at weeping. I\'ve had practice.'],
    like: '@ophelia How *thoughtful.* I can\'t hold it, of course. But I shall haunt it devotedly.',
    neutral: '@ophelia A gift for the dead. How morbidly sweet. I\'ll put it on the mantelpiece with the cobwebs.',
    hate: ['She recoils, flickering violently.', '@ophelia A *mirror!* Must you? I haven\'t had a reflection in two hundred years. It\'s simply *rude* to remind me.'],
  },
  talk: [
    ['@ophelia Ah, the living one returns. How lovely. You\'re the only visitor I\'ve had in a century who hasn\'t screamed and run into a wall.'],
    ['@ophelia I\'ve been practicing my wailing. Listen. *Ooooooooh.* Too much? I feel it lacks *pathos.*'],
    ['She is lying draped across the piano, staring at the ceiling.', '@ophelia Being dead is so *tedious.* I can\'t eat. I can\'t sleep. I can\'t even read — I can\'t turn the pages! I\'ve been stuck on page forty-two of the same novel since 1824.'],
    ['@ophelia The last people who lived here were a family of six. I haunted them very politely. Rattled a few chains. Moved the teacups. They left after a week. I was *heartbroken.* I\'d grown fond of the youngest.'],
    ['@ophelia Do you know how I died? I fell down those stairs. In my ballgown. Waiting for a man who never came. Very tragic. Very *Gothic.* I\'ve always been a little proud of it, honestly.'],
    ['@ophelia You\'re warm. I can feel it from here, like standing near a hearth. I haven\'t been warm in two hundred years. Stand closer. ...Closer. *There.*'],
  ],
  afterTalk: [
    ["@ophelia I've been practicing becoming solid. I managed it for nearly three seconds yesterday while thinking about the blood moon. I nearly fell through the floor afterwards. *Worth it.*"],
    ["She drifts close and whispers in your ear, sending a delicious chill down your spine.", "@ophelia I've learned that ghosts can make people shiver from across a room. I've been doing it to you all evening. Did you notice?"],
    ["@ophelia I finally finished the novel I've been stuck on since 1824. The heroine was much less satisfied than I was. I've decided the author was clearly a virgin."],
    ["@ophelia The piano plays itself better now. Love songs, mostly. I can't help it. It's very embarrassing to be haunted by one's own feelings."],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'Hollowmere Manor creaks and sighs around you. Moonlight falls through broken windows onto dust-sheeted furniture. Somewhere upstairs, a piano is playing a waltz — badly, with feeling.',
          'The music stops. The temperature drops. And down the grand staircase drifts a woman.',
          'She is translucent, glowing faintly blue-white, dressed in a ballgown two centuries out of date: high-waisted, puff-sleeved, trimmed with lace. Her dark hair is piled up in elaborate curls. Her face is pale and lovely and terribly sad.',
          '@ophelia *Begone, mortal!* Begone from this cursed place! Flee, lest you share my doom! *Ooooooooh!*',
          'She pauses, mid-wail.',
          '@ophelia ...You\'re not fleeing.',
        ],
        aff: 10,
        choices: [
          { text: '"That was a beautiful wail. Very haunting."', go: 'wail' },
          { text: '"Mind if I stay? It\'s cold outside."', go: 'stay' },
          { text: 'Notice the dust sheets — she\'s set a table for two. [Wits check 1]', check: { stat: 'wits', dc: 1 }, pass: 'table', fail: 'stay' },
        ],
      },
      wail: {
        text: [
          'She blinks. She flickers.',
          '@ophelia ...Truly? You think so? I\'ve been working on it for decades. I feel the third "ooh" really *lands.*',
          '@you It really does.',
          '@ophelia Oh, finally! An *audience* with taste!',
        ],
        aff: 6,
        next: 'name',
      },
      stay: {
        text: [
          '@ophelia It\'s colder in *here*, darling. I\'m dead. I lower the temperature of every room I enter. It\'s a very inconvenient condition.',
          'But she drifts closer, curious, peering at you.',
          '@ophelia ...Still, I suppose you may stay. It has been *ever* so long since I had someone to talk to who didn\'t scream.',
        ],
        aff: 4,
        next: 'name',
      },
      table: {
        text: [
          'Through the doorway to the dining room, you can see it: under all the dust, a table carefully laid for two. Fine china. Silver candlesticks. A wilted, ancient corsage on one plate.',
          '@you You\'re still waiting for someone.',
          'The ghost goes very still. The whole house seems to hold its breath.',
          '@ophelia ...That is a very rude observation. And a very clever one.',
          '@ophelia Two hundred years. One gets into the habit.',
        ],
        aff: 7,
        next: 'name',
      },
      name: {
        text: [
          'She sweeps into a deep, ghostly curtsy, her gown rippling like smoke.',
          '@ophelia Lady Ophelia Hollowmere. Debutante, deceased. Mistress of this crumbling pile. And you are?',
          '@you {name}.',
          '@ophelia {name}. What a warm-sounding name. Everything about you is so dreadfully *warm.*',
          'She drifts back up the stairs, glancing over her shoulder.',
          '@ophelia Do come again, living one. Evenings only. I\'m not a morning ghost.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'When you arrive, the manor has been... tidied. Somewhat. The dust sheets are off the ballroom furniture. The chandelier, hung with two centuries of cobwebs, is lit with ghostly blue flames.',
          'Ophelia waits in the middle of the ballroom floor, in the same gown, fussing with her translucent curls.',
          '@ophelia I never got to dance. At my ball. Not one dance, the entire night. I simply stood by the stairs, waiting.',
          '@ophelia Would you... would you dance with me? I know I can\'t be touched. But perhaps we could pretend?',
          'The piano upstairs begins to play on its own.',
        ],
        choices: [
          { text: 'Bow and offer her your hand, as if she were solid.', go: 'dance', aff: 8 },
          { text: 'Ask her to teach you the old dances. [Wits check 2]', check: { stat: 'wits', dc: 2 }, pass: 'teach', fail: 'teach_fail' },
        ],
      },
      dance: {
        text: [
          'You bow, and hold out your hand. She stares at it. Then she places her ghostly fingers just above yours, so close you feel a cold tingle, and you begin to dance.',
          'It\'s a strange waltz: you, moving through the dusty ballroom; her, gliding a hair\'s breadth away, never quite touching. Your hand at her waist meets only cold air. But she follows every step perfectly, and halfway through, she starts to laugh — a light, bright, delighted laugh that echoes through the empty house.',
          '@ophelia I\'m *dancing!* After two hundred years! Oh, look at me!',
        ],
        next: 'end',
      },
      teach: {
        text: [
          'She teaches you the Hollowmere Quadrille, a dance so complicated it has thirty-two steps and a section involving a tambourine. You learn it in an hour, step by step, counting under your breath.',
          'By the end, you\'re dancing it together perfectly — and she\'s glowing brighter than the chandelier.',
          '@ophelia No one\'s danced the quadrille in a century! It went out of fashion after the Duke of Westbury broke his leg on the tambourine section. Oh, you\'re a *marvel!*',
        ],
        aff: 8,
        next: 'end',
      },
      teach_fail: {
        text: [
          'She attempts to teach you the Hollowmere Quadrille. You get lost by step four, crash into a candelabra at step eleven, and fall into a dusty armchair at step sixteen.',
          'She is laughing so hard she flickers in and out of visibility.',
          '@ophelia That was the worst quadrille I have ever seen. And I have seen the Duke of Westbury\'s.',
          '@ophelia ...It was also the most fun I\'ve had since I died.',
        ],
        aff: 5,
        next: 'end',
      },
      end: {
        text: [
          'When the music fades, she hovers beside you at the great window, looking out at the moonlit grounds.',
          '@ophelia His name was Edmund Ashworth. He was a poet. Terribly handsome. Terrible poetry. He promised he would come to my ball and ask for the first dance, and then he would ask my father for my hand.',
          '@ophelia He never came. I waited by the stairs until dawn. And then I... well. The stairs.',
          '@ophelia I\'ve always wondered *why.* What I did wrong. Why he didn\'t want me.',
        ],
        choices: [
          { text: '"Maybe it wasn\'t about you at all."', go: 'notyou', aff: 6 },
          { text: '"He was a fool. I came. I\'ll keep coming."', go: 'fool', aff: 8 },
        ],
      },
      notyou: {
        text: [
          '@ophelia That is what everyone says. "It wasn\'t you, it was him." But when you\'ve had two hundred years to think about it, you find a *great* many reasons that it was you.',
          'She sighs. Then she looks at you sideways.',
          '@ophelia ...But it is kind of you to say.',
        ],
        end: true,
      },
      fool: {
        text: [
          'She turns to look at you. Her ghostly eyes are wide.',
          '@ophelia You\'ll keep coming?',
          '@you Every evening you\'ll have me.',
          'She reaches out, slowly, and lays her hand against your cheek. It passes through, mostly. But for one instant — just one — you swear you feel the brush of cold fingertips.',
          '@ophelia ...Oh. I *felt* that. I haven\'t felt anything in two hundred years.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'Ophelia meets you at the door, flickering with agitation.',
          '@ophelia I\'ve decided! I\'ve been dead two hundred years and I\'m *tired* of not knowing. I want to know why Edmund didn\'t come. Will you help me find out?',
          '@ophelia There\'s an old desk in the attic. My father\'s. Locked. I can\'t open it — I can\'t touch anything — but you can.',
          'The attic is thick with dust. The desk is old mahogany, its lock rusted shut. Inside, you find bundles of yellowed letters, ledgers, and a sealed envelope addressed in faded ink: *To Lady Ophelia Hollowmere.* It was never opened.',
        ],
        choices: [
          { text: 'Read the letters carefully, piecing together what happened. [Wits check 3]', check: { stat: 'wits', dc: 3 }, pass: 'mystery', fail: 'mystery_fail' },
          { text: 'Hand her the sealed letter first.', go: 'letter', aff: 7 },
        ],
      },
      mystery: {
        text: [
          'You sort through the letters by date. Her father\'s correspondence. A ledger of debts. A letter from a magistrate. A newspaper clipping, folded small, dated the morning after her ball.',
          '*TRAGEDY ON THE NORTH ROAD. A carriage overturned in the storm last night. The sole passenger, Mr. Edmund Ashworth, poet, was killed. He was found clutching a bouquet of red roses.*',
          'Ophelia makes a sound you\'ll never forget.',
          '@you He didn\'t abandon you, Ophelia. He was on his way. He was bringing you roses. Your father must have hidden this — and the letter — after you died.',
          'She can\'t speak. She opens the sealed envelope with your help, her ghostly hands trembling over yours.',
        ],
        aff: 12,
        next: 'read',
      },
      mystery_fail: {
        text: [
          'You sort through the letters, but the old handwriting is hard to read. You can\'t piece it together.',
          'It\'s Ophelia who spots it: a sealed envelope, addressed to her, at the bottom of the pile.',
          '@ophelia That\'s... his handwriting. Edmund\'s. Open it. *Please.*',
        ],
        aff: 5,
        next: 'read',
      },
      letter: {
        text: [
          '@ophelia That\'s his handwriting. Edmund\'s. I\'d know it anywhere — the dreadful curly "O."',
          'You break the seal for her and hold it up so she can read.',
        ],
        next: 'read',
      },
      read: {
        text: [
          '*My dearest Ophelia — I write this in haste, as my carriage is delayed by the storm. I will be late, but I will come. Save me the last dance, if not the first. I have roses for you. Red, as you always wanted. I mean to ask your father tonight. I mean to ask you forever. — Your Edmund.*',
          'The letter falls through her hands and drifts to the floor.',
          'Ophelia is crying. Ghostly tears, glimmering like moonlight, falling and vanishing before they touch the ground.',
          '@ophelia He was coming. He was *coming.* All this time, I thought — two hundred years I thought —',
          '@ophelia I wasn\'t unwanted. I was *loved.*',
        ],
        choices: [
          { text: 'Stay with her while she grieves.', go: 'grieve', aff: 10 },
          { text: '"You were loved then. You\'re loved now."', go: 'now', aff: 12 },
        ],
      },
      grieve: {
        text: [
          'You sit on the dusty attic floor beside her for hours, while she cries, and talks, and cries again. She tells you everything about Edmund: his awful poems, his kind eyes, the time he fell in the duck pond trying to impress her.',
          'Near dawn, she goes quiet.',
          '@ophelia I always thought that when I found out the truth, I would finally be at peace. I would move on. Fade away.',
          '@ophelia But I\'m still here. And I think... I think it\'s because now I have a different reason to stay.',
          'She looks at you.',
        ],
        end: true,
      },
      now: {
        text: [
          'She looks at you, her tears still falling.',
          '@ophelia ...Now?',
          '@you Now.',
          'And then, impossibly, she becomes solid — just for a moment, just enough — and throws her arms around you. She\'s cold as winter and light as mist, and she\'s *there*, she\'s *real*, and then she fades again.',
          '@ophelia I touched you. I *touched* you. How did I —',
          '@ophelia I think a ghost can become solid when she wants to *stay* badly enough.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'The blood moon hangs huge and crimson over Hollowmere Manor. Ophelia is waiting for you on the grand staircase — the staircase where she waited for Edmund, two hundred years ago — and she is no longer transparent.',
          'She is solid. Real. Pale and dark-haired and lovely, in her old-fashioned gown, with color in her cheeks for the first time.',
          '@ophelia The blood moon. On one night a century, the veil between the living and the dead grows thin. Ghosts can walk as they did in life. For one night only.',
          '@ophelia I didn\'t want to spend it waiting on the stairs this time.',
          'She descends the staircase, step by step, and stops on the last one, so her eyes are level with yours.',
          '@ophelia I wanted to spend it with you.',
        ],
        choices: [
          { text: 'Take her hands — real hands — and kiss them.', go: 'hands', aff: 10 },
          { text: 'Produce a single red rose from behind your back. [Wits check 4]', check: { stat: 'wits', dc: 4 }, pass: 'rose', fail: 'hands' },
        ],
      },
      rose: {
        text: [
          'You hold out a single red rose. You picked it this morning, from the overgrown garden of the manor — from a rosebush she told you Edmund planted for her two hundred years ago, that has somehow, impossibly, survived.',
          'She takes it with trembling hands. She can hold it. She presses it to her lips and closes her eyes.',
          '@ophelia ...His roses. You found his roses. And you brought them to me.',
          '@ophelia I was given roses at last. And by the person I love.',
        ],
        aff: 14,
        next: 'hands',
      },
      hands: {
        text: [
          'Her hands are cool, but not cold anymore. She laughs in astonishment as your fingers lace through hers.',
          '@ophelia I can feel you. Your warmth. Your heartbeat in your wrist. Oh, I\'d *forgotten.* I\'d forgotten what it was like to be touched.',
          'She kisses you on the last step of the staircase, and it\'s cool and sweet and tastes faintly of the rose — and the whole manor sighs around you, the dust lifting in the moonlight like glitter.',
        ],
        next: 'night',
      },
      night: {
        text: [
          "Her old bedchamber has been closed for two hundred years. She leads you there by candlelight, through halls that seem a little less shadowed with each step. The canopy bed is faded rose silk. The window looks out over the blood moon.",
          "@ophelia I haven't been touched in two hundred years. I don't know if I remember how this goes. I'm not sure I ever knew. I died *terribly* inexperienced.",
          "@you We'll go slow.",
          "@ophelia Please don't go *too* slow. I've only got until dawn.",
          "You untie the ribbons of her old-fashioned gown one by one. With each ribbon she seems to become more real: warmer, more solid, color rising into her pale cheeks. When the gown falls away she's shivering, not from cold but from the sheer overwhelming *sensation* of the night air on her skin.",
          "@ophelia I can feel *everything.* The air. The silk. Your hands. Oh, your *hands.* I'd forgotten hands. I've been dead so long I'd forgotten what *warm* felt like.",
          "She's shy and fervent and heartbreakingly grateful, savoring every touch as if she might never feel it again. You kiss her slowly down the line of her throat, and she arches against you and makes a sound she hasn't made in two centuries. She clutches at your back. She keeps laughing softly in wonder, and saying your name, as if to make sure it's real.",
          "@ophelia Again. Do that again. I want to remember it. I want to remember all of it, for when I'm cold again.",
          "The candles burn low. The blood moon climbs. The old house sighs around you, and for one night it feels truly alive...",
          "...",
          "Near dawn she lies against your chest, already beginning to fade at the edges as the blood moon sets.",
          "@ophelia I'll be a ghost again when the sun rises. I won't be able to touch you.",
          "@ophelia Will you still come? Even if I can't hold you?",
          "@you Every evening. For as long as you'll have me.",
          "She smiles, translucent now, glimmering in the first grey light.",
          "@ophelia Then I'll haunt you forever, my love. Devotedly.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake alone in the faded rose bed, sunlight pouring through the dusty window. For a terrible moment you think it was a dream.",
          "Then the temperature drops a few degrees, and a cool, faint pressure settles against your side, like someone curling up next to you on the covers.",
          "@ophelia I'm here. I'm still here. Just... thin again.",
          "She shimmers into view: translucent, glowing faintly blue, lying beside you with her chin propped on her hand. She looks happier than you've ever seen her.",
          "@ophelia I watched you sleep. Is that terribly morbid? It's the sort of thing ghosts are expected to do. But I wasn't haunting you. I was just... *looking.*",
          "She reaches out and lays her hand on your chest. It passes through, mostly. But you feel the faintest coolness, right over your heart.",
        ],
        choices: [
          { text: "\"Haunt me all you like.\"", go: "haunt", aff: 6 },
          { text: "\"Was it worth two hundred years of waiting?\"", go: "worth", aff: 6 },
          { text: "Lay your hand over hers, where it rests on your chest.", go: "hand", aff: 6 },
        ],
      },
      haunt: {
        text: [
          "@ophelia Oh, I *intend* to. Rattling chains. Moaning in the corridors. Rearranging your socks. Appearing in mirrors at *extremely* inopportune moments.",
          "She grins wickedly.",
          "@ophelia I have a great deal of creative energy and nowhere to put it. You're going to have a very interesting life.",
        ],
        end: true,
      },
      worth: {
        text: [
          "She's quiet for a long time.",
          "@ophelia I used to count the years. Every single one. Two hundred of them.",
          "@ophelia I'd wait two hundred more for one more night like that.",
          "@ophelia ...But I'd rather not have to. Come back tonight. I'll be thin, and cold, and you won't be able to hold me. But I'll play you the piano. Badly. With *feeling.*",
        ],
        end: true,
      },
      hand: {
        text: [
          "You lay your hand over her ghostly one. You can't feel it, not really, but for a moment it seems to glow a little brighter, a little warmer.",
          "@ophelia ...I felt that. Just for an instant. Like a candle flickering on.",
          "@ophelia I think every time you touch me, I come back a little more. I think if you keep doing that, one day I might stay.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Ophelia can\'t leave the manor grounds. So you don\'t go to the festival hill. Instead, you climb to the roof of Hollowmere Manor with a blanket and a bottle of wine, and she drifts up beside you, glowing faintly in the dark.',
          '@ophelia I\'m sorry. You\'re missing the festival. The music, the dancing —',
          '@you I\'d rather be here.',
          'The stars begin to fall. She watches them with her translucent hand hovering over yours.',
          '@ophelia The legend says the stars bind those who watch together forever. I wonder if it counts for the dead.',
        ],
        next: 'goddess',
      },
      goddess: {
        text: [
          '@narrator Oh, darling. Of *course* it does.',
          'The voice comes from everywhere. A falling star, brighter than all the rest, curves out of its path across the sky — and streaks down toward the manor roof.',
          'It strikes Ophelia directly in the chest.',
          'She gasps. She glows — blinding white, then gold, then a warm, living pink. When the light fades, she\'s sitting beside you on the roof, solid, flushed, breathing hard.',
          'She presses a hand to her chest.',
          '@ophelia ...I have a *heartbeat.* I — I have a — *it\'s beating!* It\'s *beating!*',
          '@narrator Two hundred years of waiting deserves a second chance, don\'t you think? Consider it a Starfall gift. From one hopeless romantic to another.',
          'Ophelia throws her arms around you, laughing and sobbing, warm and alive, and kisses you under the falling stars until neither of you can breathe.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'You restore Hollowmere Manor together, room by room. It turns out Ophelia has two hundred years of opinions on interior design. The ballroom is reopened. The piano is tuned. (She still plays it badly. With feeling.)',
          'She discovers food again and is horrified by how much she\'s missed. She eats cake for breakfast for a month. She sleeps for the first time in two centuries and wakes up furious that she\'d forgotten how wonderful it was.',
          'She finally finishes the novel she was stuck on at page forty-two. She hates the ending. She writes a strongly worded letter to the author\'s great-great-grandchildren.',
          'You hold a ball in the restored manor on the anniversary of her death, and she dances every single dance — the first, the last, and all the ones between — with you.',
          'Edmund\'s rosebush blooms in the garden every summer. She lays the first rose on his grave. The second, she keeps for herself.',
        ],
        ending: 'ophelia',
      },
    },
  },
});
