FL.addSpeaker('mayor', 'Mayor Puddingham', '#c7a26b');

FL.addCharacter({
  id: 'gloria',
  name: 'Gloria',
  short: 'Gloria',
  trope: 'Bubbly Slime Girl',
  color: '#7be07b',
  favStat: 'wits',
  endingTitle: 'A Perfect Fit',
  teaser: 'Something green, translucent and vaguely woman-shaped is humming as it oozes along the sewer wall. It waves.',
  blurb: 'A cheerful, gelatinous slime girl living in the town sewers, where she quietly eats all the filth and keeps Clichéton plague-free. Nobody knows she exists — or if they do, they scream. She is sweet, sticky, very huggable and desperately lonely. Clever people fascinate her: she wants to understand *everything.*',
  schedule: ['sewers', 'sewers', 'sewers'],
  gifts: { love: ['gem'], like: ['chocolate', 'cakes', 'plushie', 'fish', 'fork', 'yarn', 'mirror', 'comb'], hate: ['rum'] },
  giftLines: {
    love: ['She swallows it whole. You can see the gemstone floating in the middle of her translucent chest, right where a heart would be, glittering green and blue.', '@gloria Ooooh! Look! It\'s *inside* me! Now I have a sparkly heart! I\'m never going to digest it. *Never.*', 'She does a happy little wobble.'],
    like: '@gloria For me?! *Bloop!* Thank you! I\'m going to keep it right here.',
    neutral: '@gloria Oh! Thank you! *Glorp.* ...Hm. Tastes like nothing. I\'ll keep it anyway!',
    hate: ['She absorbs a little and immediately goes cloudy and wobbly.', '@gloria Ooooh... *hic*... everything\'s... spinny... why are there three of you? I like *all* of you... *hic*...'],
  },
  talk: [
    ['@gloria Hiiii! *Bloop!* I cleaned the whole east tunnel today! It sparkles! Well, it doesn\'t *sparkle*, it\'s a sewer, but it\'s *less brown!*'],
    ['@gloria I found a love letter in the drain! It was from a baker to a blacksmith. Oh, it was so romantic! I put it back very carefully so it would reach them.'],
    ['She forms a little hand from her body and pats your head.', '@gloria You have such nice hair! It\'s so... *solid.* Everything about you is so solid. It\'s amazing.'],
    ['@gloria People think slimes are just goo. But I have thoughts! Lots of them! They just float around in here, all squishy!'],
    ['@gloria I tried to go to the market once. A lady screamed and hit me with a cabbage. So I ate the cabbage. Then she screamed more.'],
    ['@gloria Can I hug you? I\'ll be really careful not to absorb you! I\'ve gotten very good at not absorbing people!'],
  ],
  afterTalk: [
    ["@gloria I've been practicing holding human shape for longer! Four hours now! I want to be able to walk with you in the sunshine. And then come back down here and be *squishy* with you."],
    ["She gives you a long, cool, tingly hug that leaves your clothes spotless and your knees weak.", "@gloria That's a slime kiss. It's like a regular kiss but everywhere. You're welcome!"],
    ["@gloria I found a love letter in the drain today and I read it and it was nowhere *near* as nice as last night. I put it back anyway. I hope they figure it out."],
    ["@gloria The pool in my treasure room is warm now. I warmed it up. For two. Just saying! *Bloop.*"],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'The sewers of Clichéton are exactly what you\'d expect: damp stone, echoing drips, and a smell that could strip paint. You\'re edging along a narrow walkway when your foot slips on something slick.',
          'You fall — not into the water, but into something soft, cool and wobbly that catches you with a loud *SPLORP.*',
          '@gloria Eep! Oh! Hi! You fell in me! I mean on me! I mean — hello!',
          'You\'re sitting, waist-deep, in a glistening green slime. As you watch, the slime rises up and forms itself into the shape of a woman: translucent emerald, curvy and shimmering, with a cheerful round face and a bob of jelly hair. She\'s blushing a darker green.',
          '@gloria Sorry! Sorry! I was napping! Are you okay? You\'re not dissolving, are you? Please don\'t dissolve!',
        ],
        aff: 10,
        choices: [
          { text: '"I\'m okay! This is actually kind of comfortable."', go: 'comfy' },
          { text: 'Scream. (Reasonable.)', go: 'scream' },
          { text: '"Wait — are you the reason the town doesn\'t smell?" [Wits check 1]', check: { stat: 'wits', dc: 1 }, pass: 'smart', fail: 'comfy' },
        ],
      },
      comfy: {
        text: [
          'Her face lights up like a lantern.',
          '@gloria Really?! You think I\'m *comfortable?* Nobody\'s ever said that! People usually say "AAAAH" or "GET IT OFF ME" or "MY BOOTS!"',
          'She gently lifts you out of herself and sets you down on the walkway, perfectly dry. Your boots are spotless. Cleaner than they\'ve been in weeks.',
        ],
        aff: 6,
        next: 'name',
      },
      scream: {
        text: [
          'You scream. It echoes down every tunnel. She screams too, out of sympathy. Then you both stop and stare at each other.',
          '@gloria ...Sorry. I always scream when other people scream. It seemed polite.',
          'She sets you down on the walkway very gently. You notice your boots are now extremely clean.',
        ],
        aff: 2,
        next: 'name',
      },
      smart: {
        text: [
          '@you Wait. A town this size should reek. There should be rats, plague, the works. But Clichéton\'s spotless. It\'s you, isn\'t it? You\'re eating all the filth.',
          'She stares at you. Her whole body wobbles with astonishment.',
          '@gloria You *figured it out!* Nobody\'s ever figured it out! I\'ve been doing it for *eleven years* and nobody ever says thank you, because nobody ever *knows!*',
          '@you Well — thank you.',
          'She makes a sound like a happy kettle and wraps you in a gentle, cool, squishy hug.',
        ],
        aff: 8,
        next: 'name',
      },
      name: {
        text: [
          '@gloria I\'m Gloria! I picked it myself. I found it on a lost birthday card in the drain. "Happy Birthday, Gloria!" And I thought, that\'s a happy name. I\'ll be that.',
          '@you {name}.',
          '@gloria {name}! Oh, I\'ll remember that. I\'ll write it on the wall in glowing moss!',
          'She bobs up and down excitedly.',
          '@gloria Will you come back? Please? You\'re the first person who\'s ever talked to me for this long! It\'s been three whole minutes!',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Gloria greets you with a hug that leaves you smelling of lemons. (She absorbed the dirt off you. She\'s very proud of this.)',
          '@gloria I want to show you something! My treasure! Come, come!',
          'She leads you through winding tunnels to a dry chamber lit by glowing moss. Every surface is covered with lost things, neatly arranged: rings, coins, buttons, keys, spectacles, a hundred letters, a child\'s wooden horse.',
          '@gloria Everything that falls down the drains comes to me! I don\'t eat any of it. I keep it safe. In case people come looking. But they never do.',
          'She holds up a gold ring.',
          '@gloria This one\'s my favorite. It\'s a wedding ring. It says "Forever, M." on the inside. I\'ve had it for a year. Someone must be so sad.',
        ],
        choices: [
          { text: 'Help her figure out who it belongs to. [Wits check 2]', check: { stat: 'wits', dc: 2 }, pass: 'detective', fail: 'detective_fail' },
          { text: '"Let\'s go ask around town together."', go: 'ask', aff: 6 },
        ],
      },
      detective: {
        text: [
          'You examine the ring. The goldsmith\'s mark is from Hilde\'s forge. The engraving style is old. And "M" — you remember the old man at the Temple who wrote a love letter to his wife, Margery, of fifty years.',
          'You track him down. When you hand him the ring, he bursts into tears. He lost it down a drain a year ago and thought it was gone forever. He hugs you. Then, when you explain who really found it, he walks to the nearest drain grate, kneels, and says "Thank you, Gloria" into it.',
          'Back in the sewers, Gloria is sobbing. Happy sobbing. It\'s a lot of liquid.',
          '@gloria He said *thank you!* To *me!* Into the drain! I *heard* it!',
        ],
        aff: 10,
        next: 'end',
      },
      detective_fail: {
        text: [
          'You squint at the ring. You make a few guesses. They\'re all wrong. Eventually Gloria pats your head with a gentle squishy hand.',
          '@gloria That\'s okay! You *tried!* Nobody else has ever even tried!',
          'She puts the ring back in its place of honor, carefully, and you can tell she\'s touched just that you cared.',
        ],
        aff: 5,
        next: 'end',
      },
      ask: {
        text: [
          '@gloria Together? Up *there?* In the *light?*',
          'She can\'t, not really. So you go up alone, ring in hand, while she peeks out of a drain grate in the square with one wobbly eye. After an hour of asking, you find the owner — an old man named Martin. He weeps. He thanks you.',
          '@you Thank Gloria. She kept it safe for a year.',
          'He looks at the drain grate. A small green hand waves at him. He waves back, bewildered.',
        ],
        next: 'end',
      },
      end: {
        text: [
          'Afterward, she sits with you in her treasure room, glowing softly in the moss-light.',
          '@gloria Do you know, I think that was the best day of my whole life. And I\'ve had *eleven years* of days.',
          'She hesitantly forms a hand and rests it on top of yours. It\'s cool and soft and tingles slightly.',
          '@gloria Is this okay? Holding hands? I read about it in a letter once.',
        ],
        choices: [
          { text: '"It\'s more than okay."', go: 'okay', aff: 7 },
        ],
      },
      okay: {
        text: [
          'Her whole body turns a slightly brighter green. A little gem of light pulses where her heart should be.',
          '@gloria *Bloop.*',
          'That seems to be all she can say.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'You hear the shouting from the sewer entrance. Torchlight. Armored boots. A crowd.',
          'The Mayor of Clichéton, a round man in an enormous wig, is standing at the grate with a dozen guards and a priest with a bucket of holy salt.',
          '@mayor Citizens! A monster has been spotted in our sewers! A *slime!* Witnesses report it waved at an old man! Today, we purge the menace!',
          'From somewhere deep in the tunnels, you hear a tiny, terrified *bloop.*',
        ],
        choices: [
          { text: 'Make the case with facts: disease rates, water quality, rat counts. [Wits check 3]', check: { stat: 'wits', dc: 3 }, pass: 'facts', fail: 'plead' },
          { text: 'Plead with them. "She\'s a person. She\'s kind. Please."', go: 'plead', aff: 7 },
        ],
      },
      facts: {
        text: [
          '@you Mayor, before you do that — how many cases of sewer fever did Clichéton have last year?',
          '@mayor I... none, I suppose.',
          '@you And eleven years ago?',
          'The town physician, in the crowd, speaks up: "Two hundred and six."',
          '@you Clichéton hasn\'t had a plague, a rat infestation, or a blocked drain in eleven years. Every other town in the kingdom has. You have the cleanest water in FantasyLandia. That\'s not luck. That\'s *her.*',
          '@you If you purge her, the plague comes back by midsummer.',
          'The crowd goes very quiet. The priest slowly puts down his bucket of salt.',
          '@mayor ...Well. That puts rather a different spin on things.',
        ],
        aff: 12,
        next: 'meet',
      },
      plead: {
        text: [
          'You plead. You tell them about the ring, the letters, the eleven years of quiet work. The crowd mutters. The Mayor looks unmoved.',
          'And then a small, shaking, translucent green figure rises out of the drain behind you.',
          '@gloria P-please don\'t hurt them. They\'re my friend. If you have to purge someone, purge me. Just... leave my treasure. Somebody might need it.',
          'There\'s a long silence. Then old Martin pushes to the front of the crowd, holding up his hand with a gold ring on it.',
          '"She found my wedding ring," he says. "Kept it a whole year. If you want her, you\'ll go through me."',
          'One by one, other voices join in. The baker. The blacksmith. A little girl whose lost doll was returned, mysteriously clean, to her doorstep.',
          '@mayor ...Ah. Er. Well. Perhaps we\'ve been hasty.',
        ],
        next: 'meet',
      },
      meet: {
        text: [
          'The Mayor clears his throat and, with visible effort, bows to the sewer grate.',
          '@mayor Miss... Gloria, was it? On behalf of the town of Clichéton — thank you for your service.',
          'Gloria makes a sound you\'ve never heard before: a long, wobbly, joyful wail, and then she is crying so hard she floods the street.',
          'Later, when the crowd has gone, she clings to you in the tunnel, shaking.',
          '@gloria You stood up for me. In front of everyone. In the *light.* Nobody\'s ever stood up for me.',
          '@gloria I think — I think I love you, {name}. Is that allowed? For a slime?',
        ],
        choices: [
          { text: '"It\'s allowed. And I think I love you too."', go: 'love', aff: 10 },
          { text: 'Hug her tight, slime and all.', go: 'hug', aff: 10 },
        ],
      },
      love: {
        text: [
          'Her body turns a bright, shining green, so bright the whole tunnel glows. She shapes her face very carefully, very precisely, and leans in and kisses you.',
          'It is cool and tingly and tastes faintly of mint, and she pulls back looking astonished.',
          '@gloria I did it! I did a kiss! Was it right? I practiced on a lamp post!',
        ],
        end: true,
      },
      hug: {
        text: [
          'You wrap your arms around her. You sink in a little. It\'s cool and soft and strangely wonderful, like hugging a summer rain.',
          '@gloria You\'re *hugging* me. On purpose. You\'re not even screaming.',
          '@gloria *Bloooop.*',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Gloria has been practicing. When you arrive in her moss-lit treasure room, she is standing in the middle of it — and she is much more *defined* than usual. A face with real features. Long, flowing hair. Fingers with knuckles. She\'s concentrating very hard.',
          '@gloria Do I look... human? I\'ve been studying! I borrowed an anatomy book from the library drain!',
          'She wobbles a little at the edges, but she\'s beautiful: a shimmering emerald woman with a gemstone heart glowing in her chest.',
          '@gloria I want to be with you. *Really* with you. Like in the letters. But I don\'t know if I can. I\'m not... solid.',
        ],
        choices: [
          { text: '"You don\'t have to be human. I love you the way you are."', go: 'asyouare', aff: 12 },
          { text: 'Help her hold her shape — talk her through it, piece by piece. [Wits check 4]', check: { stat: 'wits', dc: 4 }, pass: 'shape', fail: 'asyouare' },
        ],
      },
      asyouare: {
        text: [
          'She stares at you. Then she lets go — and her careful human shape relaxes into her usual soft, cheerful, wobbly form.',
          '@gloria ...Really? Squishy me?',
          '@you Squishy you.',
          '@gloria Oh, *good.* Holding that shape was giving me a headache. I don\'t even *have* a head!',
        ],
        next: 'night',
      },
      shape: {
        text: [
          'You sit with her and talk her through it gently. Her hand — your hand on top of it, feeling the shape. Her shoulder. Her face, under your fingertips. She concentrates, and under your touch she becomes steadier, more certain, until she\'s holding her shape without wobbling at all.',
          '@gloria I can feel where you\'re touching. I can feel *all* of it. It\'s like... like I know where I *end* now. Because you showed me.',
        ],
        aff: 14,
        next: 'night',
      },
      night: {
        text: [
          "Being with Gloria is unlike anything you could have imagined.",
          "@gloria Can I — can I touch you everywhere? All at once? Slimes can do that. I've never wanted to before. I really, *really* want to now.",
          "@you Yes.",
          "She flows around you like warm water, cool at first and then warming to match your skin. Wherever she touches, she leaves a faint, fizzing tingle, like sparkling wine on the tongue. She slips under your clothes and they simply... aren't there anymore. She's absorbed them, very politely, and she sheepishly promises to give them back later.",
          "@gloria Sorry! Sorry! It just happened! Your shirt was in the way of the hug!",
          "She's endlessly adaptable and endlessly curious, delighted by every reaction, every gasp, every shiver. She shapes herself to fit you, then tries a different shape just to see what happens. She giggles constantly. She keeps saying *oh! oh, that's what that does!*, then trying it again, slower, with tremendous scientific dedication.",
          "@gloria You're so *warm* inside — I mean — your *heart*, your heart is warm, I can feel it beating right through me — oh, it's going so fast —",
          "The gemstone in her chest glows brighter and brighter until it lights the whole room in shimmering green and blue, like being underwater in a sunlit sea. Her careful human shape dissolves entirely, and she becomes a warm, glowing, wordless tide around you...",
          "...",
          "Afterward you lie with her in her treasure room, half sunk into her like the world's most comfortable waterbed. She's humming. She has given back your shirt. It's folded neatly. It's also the cleanest it has ever been.",
          "@gloria You know what I am? I'm a perfect fit. I can be any shape at all. And I picked the shape that fits *you.*",
          "She forms a hand and holds yours, very gently.",
          "@gloria I think that's what love is. Picking the shape that fits.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake up floating. Gloria has formed herself into a warm, gently bobbing bed beneath you, and she's humming. Moss-light glows soft green on the treasure-room walls.",
          "@gloria Good morning! You slept for nine hours! I counted your heartbeats. Thirty-one thousand, four hundred and six. I liked all of them.",
          "Her face forms up out of the slime beside your head, beaming.",
          "@gloria Also, I absorbed your shoes by accident in the night. Here. They're *very* clean now. I don't think they've ever been this clean.",
          "Two spotless boots pop out of her, one after the other, and land on the floor with a squelch.",
          "@gloria Was it... was last night okay? I've never done that with anyone. I was worried I was too squishy.",
        ],
        choices: [
          { text: "\"You were perfect. Exactly the right amount of squishy.\"", go: "perfect", aff: 6 },
          { text: "\"I'd like to stay here all day.\"", go: "stay", aff: 6 },
          { text: "Ask her to give you back your belt, too.", go: "belt", aff: 5 },
        ],
      },
      perfect: {
        text: [
          "Her whole body glows brighter, so bright it lights up the tunnel outside.",
          "@gloria The *right amount?* Nobody's ever said I was the right amount of anything! People usually say \"too much\" and \"AAAH\" and \"get it off me!\"",
          "She wraps around you in a hug so warm and complete that you feel it in your bones.",
        ],
        end: true,
      },
      stay: {
        text: [
          "@gloria All day? In the *sewers?* With *me?*",
          "@you With you.",
          "She makes a sound like a happy kettle and settles around you even more snugly, like a warm bath that hugs back. You stay all day. She tells you about every treasure in the room. You fall asleep again around noon, floating, and she hums the whole time.",
        ],
        end: true,
      },
      belt: {
        text: [
          "@gloria Oh! Um. Your belt.",
          "There's a long pause. Something shifts inside her, and you can see your belt floating near her gemstone heart.",
          "@gloria ...Can I keep it? It's very nice. I like having something of yours in here.",
          "You let her keep it. She keeps it right next to her heart. You buy a new belt. She keeps that one too.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'You\'re waiting on the festival hill, wondering if she\'ll come. She\'s never left the sewers before. Not once.',
          'Then the crowd parts, murmuring. Gloria is walking up the path in the moonlight — slowly, carefully, holding her human shape — wearing a dress the town seamstresses made for her out of waterproof silk, with a sash that reads *CLICHÉTON\'S HONORARY SANITATION HERO.*',
          'People don\'t scream. They wave. A little girl gives her a flower. Gloria swallows it. Everyone laughs, including her.',
          '@gloria I came out! I came out into the *sky!* It\'s so *big!* Why didn\'t anyone tell me it was so big!',
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'She sits beside you on the grass. When the stars start to fall, they reflect inside her translucent body — so it looks like the starfall is happening *inside her*, too, swirling around the glowing gem of her heart.',
          '@gloria Look! Look! I\'m full of stars!',
          '@you You always were.',
          'She wobbles with joy and kisses you, cool and minty and tingling, and a thousand falling stars glitter through her like sunlight through a stained-glass window.',
          '@gloria Forever, {name}. Like the ring said. *Forever.*',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'The town builds Gloria a proper home: a beautiful house on the canal, with a large heated pool in the middle of the living room, connected by a private pipe to the sewers so she can still do her rounds. You live there with her.',
          'Her lost-and-found becomes an official town institution. People line up every Saturday to reclaim their treasures. Gloria hugs every single one of them. Most of them have learned to enjoy it.',
          'She still can\'t hold human shape for more than a few hours. She doesn\'t need to. Most evenings you sit in her pool together, and she curls around you like a warm green sea and tells you about everything she found in the drains that day.',
          'There\'s a gold ring floating in her chest now, right beside the gemstone. Martin gave it to her when his wife passed — "for safekeeping," he said. It says *Forever, M.*',
          'She says she\'ll keep it until someone needs it. Then she looks at you, and glows.',
        ],
        ending: 'gloria',
      },
    },
  },
});
