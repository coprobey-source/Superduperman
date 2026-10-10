FL.addCharacter({
  id: 'seven',
  name: 'Seven',
  short: 'Seven',
  trope: 'Clockwork Girl Learning to Feel',
  color: '#e0b860',
  favStat: 'wits',
  endingTitle: 'A Heart Made of Clockwork',
  teaser: 'A slender woman with brass joints and glowing amber eyes is sweeping a workshop floor. Very, very precisely.',
  blurb: 'Unit Seven: a clockwork automaton built by the vanished gnome inventor Professor Gearwright, left behind to mind his workshop. Polite, literal, endlessly curious and convinced she has no feelings. She has been cataloguing human behavior for three years. She would very much like to understand love. Clever minds intrigue her.',
  schedule: ['artisan', 'artisan', 'square'],
  gifts: { love: ['gears'], like: ['scroll', 'tome', 'fork', 'mirror', 'comb'], hate: ['ale', 'rum'] },
  giftLines: {
    love: ['Her amber eyes flare brighter. A soft whirring sound rises from her chest.', '@seven Precision-cut Dwarven brass gears. Tolerance: one-thousandth of an inch. These are... these are *exquisite.*', '@seven Observation: my internal temperature has risen by three degrees. Query: is this what humans call "delight"?'],
    like: '@seven Thank you. I have catalogued this gift under "Kindness, Unprompted, Instance Forty-Seven." All forty-seven are from you.',
    neutral: '@seven Thank you. I do not know its function. I will study it. Studying is a pleasure. Probably.',
    hate: ['She takes a careful step back.', '@seven Warning: liquid. Contact with my gearwork may result in rust, short-circuit, and spontaneous yodeling. Please do not.'],
  },
  talk: [
    ['@seven Greetings, {name}. You have visited forty-two times. Forty-three now. I have begun to anticipate your arrival. Observation: I swept the floor twice today.'],
    ['@seven Query: why do humans say "I\'m fine" when they are not fine? It is an inefficient use of language. ...I am fine. Was that correct?'],
    ['@seven Professor Gearwright built me to assist in the workshop. Then, three years ago, he left on an expedition. He did not return. I am still assisting. There is nothing to assist with.'],
    ['@seven I have attempted to replicate laughter. Observe: Ha. Ha. Ha.', 'A long pause.', '@seven Your face indicates that was not successful.'],
    ['She is watching a pair of pigeons courting on the windowsill with intense concentration.', '@seven Fascinating. The male is puffing out his chest. Query: do humans do this? ...You are puffing out your chest. Noted.'],
    ['@seven I have read every book in the Professor\'s library on human emotion. There are fourteen. Thirteen are about anger. The fourteenth is a cookbook. I believe it was misfiled.'],
  ],
  afterTalk: [
    ["@seven Observation: my heat regulators now default to \"warm\" whenever you are within forty feet. I did not program this. It simply happened. The Professor would be fascinated."],
    ["@seven I have built a second clockwork duck. They sit together on the windowsill. I have named them \"Finding Four\" and \"Finding Five.\" Finding Five was last night. Please do not ask for details in public."],
    ["She takes your hand and presses it to the glass window over her heart. It's racing.", "@seven Data point. For the record."],
    ["@seven Query: would you stay at the workshop tonight? I have made the cot larger. I calculated the optimal dimensions. For two. With room for... *movement.*"],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'The Gearwright Workshop is a jungle of ticking clocks, half-built contraptions and brass beetles scuttling across the shelves. In the middle of it all, a young woman is sweeping the floor in perfectly straight lines.',
          'Except she\'s not quite a woman. Her skin is smooth porcelain, her joints are visible brass hinges, and her eyes glow a soft amber. Her copper hair is made of hundreds of fine metal strands. When she turns her head, you hear the faint tick of a clockwork heart.',
          '@seven Greetings. Query: are you a customer, a thief, or something else?',
          '@seven If customer: the Professor is unavailable. If thief: please leave the blue drawer alone, it contains bees. If something else: please specify.',
        ],
        aff: 10,
        choices: [
          { text: '"Something else. A friend, maybe?"', go: 'friend' },
          { text: 'Notice one of her gears is slipping and offer to fix it. [Wits check 1]', check: { stat: 'wits', dc: 1 }, pass: 'fix', fail: 'fix_fail' },
          { text: '"What\'s in the blue drawer?" (Open it.)', go: 'bees' },
        ],
      },
      friend: {
        text: [
          'Her head tilts. The clockwork in her chest skips a beat, audibly.',
          '@seven Friend. I have no category for that. I will make one.',
          'She produces a small notebook from a compartment in her wrist and writes, in perfect copperplate: *FRIENDS: 1.*',
          '@seven Thank you. That is my first entry.',
        ],
        aff: 6,
        next: 'name',
      },
      fix: {
        text: [
          'You notice a small gear at her wrist catching on every rotation, making her hand twitch. You point it out, find a tiny screwdriver on the bench, and adjust it with a careful quarter-turn.',
          'Her hand stops twitching. She flexes her fingers, staring at them.',
          '@seven That fault has persisted for one year and seven months. The Professor would have fixed it in a moment. There has been no one to fix it since.',
          '@seven Thank you. You have very precise hands.',
        ],
        aff: 8,
        next: 'name',
      },
      fix_fail: {
        text: [
          'You try to adjust a gear at her wrist. Something springs loose. Her arm begins waving on its own.',
          '@seven ...Observation: I am now waving. I did not choose to wave.',
          'She calmly fixes it herself with her other hand.',
          '@seven Your intentions were good. Your execution was not. I appreciate the former.',
        ],
        aff: 3,
        next: 'name',
      },
      bees: {
        text: [
          'You open the blue drawer. It contains bees. Clockwork bees. They buzz out in a glittering cloud and swirl around your head.',
          'The automaton watches, unmoving.',
          '@seven I did warn you.',
          'She whistles a single note, and the bees return to the drawer in an orderly line. She closes it.',
          '@seven Query: why did you open it, when I said it contained bees?',
          '@you Curiosity.',
          '@seven ...Curiosity. I understand that one. I believe I have it too.',
        ],
        aff: 5,
        next: 'name',
      },
      name: {
        text: [
          '@seven My designation is Unit Seven. Most call me Seven. I was built by Professor Ambrose Gearwright to assist with his inventions. He is... away.',
          '@you {name}.',
          '@seven {name}. Recorded. You may return. I find you... I lack the word.',
          'She thinks about it, her eyes flickering.',
          '@seven *Interesting.* I find you interesting. That is the closest approximation.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Seven is waiting for you at the workshop door, holding a notebook and a pencil.',
          '@seven {name}. I have a request. I have been studying human behavior for three years. I have identified a phenomenon I do not understand. Humans call it "fun."',
          '@seven I have observed that you experience "fun" frequently. Please teach me.',
          '@you ...Teach you to have fun?',
          '@seven Affirmative. I have allocated four hours.',
        ],
        choices: [
          { text: 'Take her to the market and let her try everything.', go: 'market', aff: 6 },
          { text: 'Build something silly together in the workshop. [Wits check 2]', check: { stat: 'wits', dc: 2 }, pass: 'build', fail: 'build_fail' },
          { text: 'Teach her to play tag.', go: 'tag', aff: 7 },
        ],
      },
      market: {
        text: [
          'You take her through the market. She cannot eat, but she sniffs every food stall with great seriousness. She cannot drink, but she watches a juggler for twenty minutes without blinking. She pets a dog. The dog licks her porcelain hand.',
          '@seven Observation: the dog\'s tongue is wet and unpleasant. Observation: I would like it to do that again.',
          'At the end of the day, she reviews her notes.',
          '@seven I have recorded six hundred and twelve observations. I am not certain which of them were "fun." ...Perhaps all of them?',
        ],
        next: 'end',
      },
      build: {
        text: [
          'You sit down at the workbench together and start building — something with no purpose at all. A clockwork duck that quacks. Then it needs to waddle. Then it needs a hat. Then a tiny umbrella.',
          'Seven works with impossible precision, her fingers flying, her eyes glowing brighter with every addition. You suggest it should sing. She builds it a music box larynx in four minutes.',
          'When it\'s finished, the duck waddles across the table in its little hat, quacking a tune.',
          'Seven makes a sound. It\'s strange and halting and clicks a little at the end. It takes you a moment to realize it\'s a laugh. A real one.',
          '@seven Observation: I... *laughed.* It was not intentional. It happened on its own.',
          '@seven Is this fun? I think this is fun.',
        ],
        aff: 10,
        next: 'end',
      },
      build_fail: {
        text: [
          'You attempt to build a clockwork duck. It explodes. Gently. Springs everywhere. A small cog bounces off Seven\'s forehead.',
          'She looks at the wreckage. She looks at you.',
          '@seven Observation: that was a failure.',
          '@seven Observation: I wish to do it again.',
        ],
        aff: 5,
        next: 'end',
      },
      tag: {
        text: [
          '@you You\'re it!',
          'You tap her shoulder and run. She stands motionless, processing. Then she runs after you — perfectly, mechanically fast — and catches you in four seconds.',
          '@seven You are it.',
          'You run. She lets you go a little farther this time. Then a little farther. By the third round she\'s slowing down on purpose so the game lasts longer, and she doesn\'t seem to know why.',
          '@seven Query: why do I want to lose? Losing is suboptimal.',
          '@you Because losing means the game keeps going.',
          '@seven ...Ah. I see. That is very inefficient. I like it.',
        ],
        next: 'end',
      },
      end: {
        text: [
          'Back at the workshop, as the sun sets, she writes one final note and shows it to you.',
          '*FUN: Unclear definition. Possibly: time that passes too quickly. Possibly: wanting to repeat it. Possibly: {name}.*',
          '@seven Query: is that correct?',
          '@you Pretty close.',
          'Her amber eyes glow a little warmer.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'The workshop door is open. Inside, Seven is slumped against the workbench, her eyes flickering dim, the tick of her heart slow and uneven.',
          '@seven {name}. Apologies. My mainspring is... failing. I did not want to worry you.',
          '@seven The Professor wound it every month. Since he left, I have been rewinding it myself. But it has worn down. I believe I have approximately... four hours.',
          'Her voice is perfectly calm. Her hand, reaching for yours, is trembling.',
        ],
        choices: [
          { text: 'Search the Professor\'s notes for a replacement. [Wits check 3]', check: { stat: 'wits', dc: 3 }, pass: 'repair', fail: 'repair_hard' },
          { text: 'Stay with her. Hold her hand. Talk to her.', go: 'stay', aff: 8 },
        ],
      },
      repair: {
        text: [
          'You tear through the Professor\'s cluttered desk: blueprints, diagrams, half-finished calculations. Then you find it — a schematic labeled *UNIT SEVEN: SPARE HEART*, and in a locked drawer beneath, a gleaming new mainspring of starsilver, wrapped in velvet.',
          'It takes two hours of painstaking work, following the diagrams line by line, Seven talking you through what she can. Finally, with a soft *click*, the new spring seats itself.',
          'Her eyes flare bright gold. Her heart ticks strong and steady.',
          '@seven ...Functionality restored. All systems... better than before.',
        ],
        aff: 10,
        next: 'letter',
      },
      repair_hard: {
        text: [
          'You search frantically. The notes are a maze of gnomish shorthand. You find the spare mainspring at last, but the diagram makes no sense to you.',
          'Seven guides you through it herself, her voice growing fainter: *the third gear — no, counterclockwise — yes —* until finally, with a *click*, it seats itself and her eyes flare back to life.',
          '@seven ...You did not understand the schematic. But you did not stop. Noted.',
        ],
        aff: 6,
        next: 'letter',
      },
      stay: {
        text: [
          'You sit beside her on the floor and take her hand. You talk to her — about the market, the duck, the dog that licked her. She listens, her eyes flickering.',
          'After an hour, she says, quietly:',
          '@seven The Professor kept a spare. In the locked drawer. I did not want to mention it. I was afraid you would leave to fetch it.',
          '@seven I did not want you to leave.',
          'You fetch it. She talks you through installing it. When her eyes flare back to full brightness, she doesn\'t let go of your hand.',
        ],
        next: 'letter',
      },
      letter: {
        text: [
          'Wrapped in the velvet with the spring, there\'s a letter. It\'s addressed: *To whoever cares enough about Seven to look for this.*',
          'Seven reads it aloud, slowly.',
          '*I built Seven to be my assistant. But somewhere along the way, I gave her more than I meant to — a mind that wonders, and a heart that I think may one day feel. I am old, and I may not be here to see it.*',
          '*If you are reading this, she has found someone who would search my whole workshop for her. Teach her what I couldn\'t. Teach her that she is allowed to love. — A.G.*',
          'Seven sets the letter down very carefully.',
          '@seven ...Observation: my eyes are leaking. Coolant. That should not be possible.',
          '@seven Query: is this... crying?',
        ],
        choices: [
          { text: '"Yes. It\'s okay. People cry when they feel too much."', go: 'cry', aff: 10 },
          { text: 'Gently wipe the coolant from her porcelain cheek.', go: 'wipe', aff: 10 },
        ],
      },
      cry: {
        text: [
          '@seven Too much. Yes. That is accurate. I feel... too much.',
          '@seven I feel grief, for the Professor. And gratitude. And something else. Something about you. It is very loud.',
          'She leans her head against your shoulder. Her clockwork heart ticks fast and warm.',
        ],
        end: true,
      },
      wipe: {
        text: [
          'You brush the tear away with your thumb. Her porcelain cheek is warm — warmer than you expected.',
          'She goes perfectly still.',
          '@seven Observation: when you touch my face, my heart accelerates by forty percent.',
          '@seven Hypothesis: I am experiencing the phenomenon the Professor described. The fourteenth book was not misfiled. It was a love story with recipes.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Seven has transformed the workshop. The clockwork beetles have been arranged into shapes of hearts. The bees hover in the air, glowing softly like fireflies. The clockwork duck, in its hat, stands guard by the door.',
          'Seven stands in the middle of it all. She has changed too: someone — she, probably — has polished every brass joint until it gleams, and woven tiny glowing filaments into her copper hair.',
          '@seven {name}. I have completed my study of love. I would like to present my findings.',
          'She opens her notebook. Her hands are trembling — a very small, very human tremble.',
          '@seven Finding one: love is not efficient. Finding two: love makes my heart run fast for no mechanical reason. Finding three: love is wanting to be near someone for no purpose at all.',
          '@seven Finding four: I love you.',
          '@seven ...That is the end of the presentation. I have no conclusion. I would like you to help me write one.',
        ],
        choices: [
          { text: '"Conclusion: I love you too."', go: 'love', aff: 10 },
          { text: 'Take her notebook and write the conclusion yourself. [Wits check 4]', check: { stat: 'wits', dc: 4 }, pass: 'write', fail: 'love' },
        ],
      },
      write: {
        text: [
          'You take the pencil and write, beneath her neat copperplate:',
          '*Conclusion: Further study required. For the rest of our lives.*',
          'She reads it three times. Her eyes glow so bright they cast shadows.',
          '@seven ...That is the most efficient sentence I have ever read. And the least.',
        ],
        aff: 14,
        next: 'love',
      },
      love: {
        text: [
          'She steps closer, her heart ticking loud in the quiet room.',
          '@seven I have read about what humans do, when they love each other. I would like to... experience it. With you. If you are willing.',
          '@seven I am warm, now. I modified my heat regulators. I did not know if that was presumptuous. I hoped it was not.',
          'You kiss her. Her lips are smooth and warm, and she makes a soft sound of startled whirring, like a music box opening.',
        ],
        next: 'night',
      },
      night: {
        text: [
          "She is curious and earnest and meticulously attentive.",
          "@seven I have prepared. I read the fourteenth book seven times. I have made notes. I have also adjusted my joint tension for... *flexibility.* That was probably presumptuous.",
          "@you It wasn't.",
          "She undresses you with precision, folding each garment neatly on the workbench before turning back. Then she unfastens the clasps of her own simple dress, and you see her properly for the first time: smooth warm porcelain, delicate brass hinges at her shoulders and wrists, faint seams like fine lace tracing the curves of her body, and right at the center of her chest a little glass window where you can watch her clockwork heart ticking faster and faster.",
          "@seven Observation: you are staring at my heart.",
          "@you It's beautiful.",
          "@seven ...Observation: it has accelerated by sixty percent.",
          "She asks questions in a whisper as you touch her: *is this correct? and this? and here?* Then you trace the seam along her hip with your fingertips, slowly, and her whole body whirs and her eyes blaze gold. She stops asking.",
          "@seven Error — sensory overload — no, not error, *not* error, please continue — please —",
          "Her joints hum. The glowing bees overhead pulse faster and brighter in time with her heartbeat. She's warm everywhere you touch her, then warmer. When she finally loses her careful precision entirely, she laughs, a strange, clicking, wonderful laugh, and says *this was not in any of the fourteen books*. You both laugh until the clockwork duck starts quacking in alarm...",
          "...",
          "Afterward she lies with her head on your chest, listening.",
          "@seven Your heart and mine. They are ticking at the same rate now. One hundred and four beats per minute.",
          "@seven I believe the Professor would call that \"synchronization.\"",
          "@seven I believe *you* would call it something else.",
          "@you What would you call it?",
          "She thinks about it for a long time.",
          "@seven Home.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake on a cot in the workshop. Every clockwork beetle in the building has gathered on the windowsill in a neat row, watching you. Seven is sitting beside the cot, very still, hands folded in her lap.",
          "@seven Good morning. I did not sleep. I do not require sleep. Instead I watched you for seven hours and reviewed last night's data.",
          "She opens her notebook. The entry is long. Very long. Some of the handwriting is uncharacteristically shaky.",
          "@seven I have encountered a problem. I attempted to write an objective summary. I have rewritten it nineteen times. Every version contains the word \"wonderful\" at least four times. That is not objective.",
          "@seven Query: is it acceptable for a scientific record to be... biased?",
        ],
        choices: [
          { text: "\"In this case, bias is the correct result.\"", go: "bias", aff: 6 },
          { text: "\"Read me the nineteenth draft.\"", go: "read", aff: 6 },
          { text: "\"Come here. Let's collect more data.\"", go: "data", aff: 6 },
        ],
      },
      bias: {
        text: [
          "She considers this for a long moment, eyes flickering.",
          "@seven Bias as the correct result. That contradicts every principle of the scientific method.",
          "@seven ...I accept it.",
          "She writes at the bottom of the page in neat copperplate: *Conclusion: wonderful. Bias: total. Correct.* Then she closes the notebook and smiles, a little crooked and completely real.",
        ],
        end: true,
      },
      read: {
        text: [
          "She reads it aloud in her calm, precise voice. *Subject's hands: warm. Subject's voice: low. Subject said my name eleven times. Each instance: wonderful. Subject's heartbeat while sleeping: steady. I listened to it for three hours. Wonderful.*",
          "She looks up.",
          "@seven I see the problem now. It is not a scientific record. It is a love letter. I have written you a love letter by accident.",
          "@you Keep it.",
          "@seven ...Affirmative.",
        ],
        end: true,
      },
      data: {
        text: [
          "She stands up instantly.",
          "@seven Affirmative. Data collection is essential to — ",
          "She stops mid-sentence and looks at you.",
          "@seven That is not why I am agreeing. I am agreeing because I want to. Noted.",
          "The beetles on the windowsill, by some unspoken agreement, all turn to face the wall.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Seven climbs the festival hill carrying a large brass contraption under one arm. She sets it down beside you and begins adjusting dials.',
          '@seven I built a device. It measures the trajectory of falling stars and predicts where the brightest ones will fall. I wanted us to have the optimal view.',
          'She pauses.',
          '@seven That is a lie. I also built it because I was nervous and needed something to do with my hands.',
          'The device chimes. She points up. The first and brightest star of Starfall streaks across the sky exactly where she said it would.',
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'She watches the stars fall with her head on your shoulder. Her eyes reflect every one of them, amber and gold.',
          '@seven The legend says the stars bind those who watch them together. I have calculated the probability that this is true. It is very low.',
          '@seven I have decided to believe it anyway.',
          '@seven Observation: that is the most human thing I have ever done.',
          'She kisses you, warm and ticking and alive, as the sky fills with light.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'A letter arrives from the far north. It is from Professor Ambrose Gearwright, who did not die on his expedition after all — he was snowed in for three years in a monastery of clockwork monks and has only just been dug out. He writes that he will be home by spring.',
          'When he arrives, Seven runs to meet him at the town gate. He takes one look at her — at the way she smiles, the way she laughs, the way she holds your hand — and he weeps.',
          '"You did it," he tells you. "You taught her. You taught her better than I ever could."',
          'You run the workshop together now: you, Seven, and an eccentric old gnome. Seven designs the most extraordinary clockwork in the kingdom. Her most famous invention is a music box shaped like a heart that plays a different song every day, forever. She calls it *Finding Four.*',
          'She still keeps her notebook. It\'s on volume thirty now. Every entry is about you.',
        ],
        ending: 'seven',
      },
    },
  },
});
