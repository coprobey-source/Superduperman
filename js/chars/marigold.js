FL.addCharacter({
  id: 'marigold',
  name: 'Marigold Bloom',
  short: 'Marigold',
  trope: 'Yandere Florist',
  color: '#f6c445',
  favStat: 'charm',
  endingTitle: 'Forever in Bloom',
  endings: { marigold_trust: 'Room to Grow', marigold_garden: 'Forever in My Garden' },
  teaser: 'A sunny florist hums as she trims rose stems. The pruning knife is very, very sharp.',
  blurb: 'Clichéton\'s sweetest florist: rosy cheeks, a sunshine smile, flowers in her hair. Everyone loves her. She loves only one person. She knows your schedule better than you do. She is *fine.* Everything is *fine.* (Charm might help keep it that way.)',
  schedule: ['market', 'market', 'square'],
  gifts: { love: ['dagger', 'chocolate'], like: ['plushie', 'cakes', 'mirror', 'nectar'], hate: ['perfume', 'quill'] },
  giftLines: {
    love: ['She gasps and clutches it to her chest, eyes shining.', '@marigold:surprised For ME? Oh, {name}! I\'ll keep it forever and ever and ever. I\'ll keep it with the others.', '@you ...The others?', '@marigold:happy Hm? ♡'],
    like: '@marigold:happy Eee! You thought of me! You thought of me when I wasn\'t there! I\'m going to put it in a glass case. ♡',
    neutral: '@marigold Oh, that\'s nice! I love everything you give me! Even if it\'s... this. ♡',
    hate: ['She leans close and sniffs it. Her smile doesn\'t change. It just stops moving.', '@marigold:angry This smells like a *woman*, {name}. Whose perfume is this? Where did it come from? Who were you with? Who? ♡'],
    special: {
      dagger: [
        'She unwraps the silver dagger and holds it up to the light. Her reflection smiles back at her from the blade, a little wider than she\'s smiling.',
        '@marigold:blush You got me a *knife.* You know me. You really, truly *know* me. ♡',
        "@marigold:happy I'll only use it on roses. And for opening letters. And for — no, that's all. Roses and letters. ♡",
        'She tests the edge on a single hair. The hair gives up immediately.',
      ],
      chocolate: [
        "@marigold:surprised Truffles! From the confectioner on Market Street! You went in just after the noon bell, because Mrs. Pruitt only puts the raspberry ones out after the noon bell —",
        "@marigold:blush Never mind how I know. ♡",
        "She eats one very slowly, eyes closed, and then smooths out the little paper cup and tucks it into her apron. You get the strong feeling the paper cup is going in an album.",
      ],
      roses: [
        'She looks at the bouquet. She looks at you. A long, slow smile spreads across her face.',
        "@marigold:smug These are *my* roses, {name}. From *my* shop. You bought them off my own counter on Tuesday at four o'clock, while the sign said OUT TO LUNCH.",
        "@marigold:happy I wasn't at lunch. I was in the umbrella stand. I watched the whole thing. It was the most romantic thing I've ever seen. ♡",
        "@marigold:blush I'm going to sell them to you again tomorrow, at a discount, so you can do it again.",
      ],
      fork: [
        '@marigold:surprised A fork! ♡',
        'She turns it over in her hands, delighted. Then she counts the tines, and the delight goes very still.',
        "@marigold:smug Four prongs. Four. That's one for every day you didn't visit the shop last week. Is this a *message*, {name}? Hehe. I'm teasing. I'm mostly teasing. ♡",
        'She files it in a drawer behind the counter. The drawer is labeled FORKS (MESSAGES?).',
      ],
      nectar: [
        'She uncorks the tiny vial and breathes in, and her whole face goes soft.',
        "@marigold:surprised Moonflower! Real moonflower! Do you know how hard this is to get? They only bloom for one night, and only if you sit up with them, and they *sulk* if you look away even once —",
        "@marigold:blush ...We have a lot in common, the moonflowers and me. I'll feed it to the night-lilies. They'll glow so bright for you. ♡",
      ],
      quill: [
        'She picks up the quill. It immediately scratches across her order book in beautiful copperplate: *Clingy. Extremely clingy. Seek help.*',
        'Marigold reads it. Her smile does not move at all.',
        "@marigold:angry Mr. Snips is going to *love* you. ♡",
        'From the back room comes a low, hungry gurgle. The quill, wisely, never writes another word.',
      ],
      mirror: [
        "@marigold:happy A mirror! Now I can practice my smile! I practice a lot. People say it goes on a bit long. ♡",
        "She demonstrates. It goes on a bit long. In the gilded glass, her reflection keeps smiling for a moment after she stops.",
      ],
    },
    repeat: "@marigold:happy Another one! Just like last time! And the time before! I keep them all in a row on the shelf, facing the door, so they can watch for you too. ♡",
  },
  talk: [
    ['@marigold:happy Good morning! You went to the guild at eight, the market at nine, and you had the cheese tart for breakfast! ...What? I just notice things! ♡'],
    ['@marigold:smug Did you know every flower has a meaning? Red roses mean love. Forget-me-nots mean *don\'t forget me.* And oleander means "beware." ♡ No reason!'],
    ['@marigold:happy I pressed the daisy you touched on Tuesday. It\'s in my album now. Page forty-seven. I have a lot of albums! ♡'],
    ['She is sharpening her pruning knife on a whetstone, humming a cheerful tune.', '@marigold:happy Oh, this? It\'s for *weeds.* Weeds that grow where they\'re not wanted. They just choke the pretty flowers! ♡'],
    ['@marigold:sad You were talking to someone yesterday, by the fountain. You laughed. You never laugh like that with me. What did she say? Was it funny? Teach me the joke. ♡'],
    ['@marigold:blush You know what I love about you? Everything. Every single thing. Your face, your voice, your footprints. I traced one. ♡'],
    [
      "@marigold:smug Do you know what a florist really sells, {name}? Not flowers. Apologies. Confessions. Secrets.",
      "@marigold:happy Old Mr. Pruitt buys yellow tulips every Thursday because he forgot their anniversary in year three, and he's still sorry. The blacksmith buys violets for the baker and tells everyone they're for his mother. His mother lives in another kingdom. ♡",
      "@marigold:sad I know every heart in this town. I've just never had anybody who wanted to know mine.",
    ],
    [
      'She is feeding Mr. Snips with a pair of very long tongs. The thing at the end of the tongs is still wriggling.',
      "@marigold:happy It's a sausage! It's just a very *fresh* sausage! ♡",
      "@marigold The apothecary says he's overweight. I said he isn't overweight, he's *protective.* The apothecary has since moved to another town.",
    ],
    [
      "@marigold:happy Pop quiz! ♡ What does a yellow carnation mean?",
      '@you ...Friendship?',
      "@marigold:angry *Rejection.* It means rejection, {name}. If anybody ever gives you a yellow carnation, you come straight to me and tell me their name. And their address. And their usual route home. ♡",
      "@marigold:happy And if you ever give one to *me*, I'll just assume you got confused. Because you'd be confused. Right? ♡",
    ],
    { if: 'marigold_tucked', lines: [
      'Behind her ear, the marigold you tucked into her hair on the day you met is still there. It has died, dried and been lovingly lacquered. It crackles faintly whenever she tilts her head.',
      "@marigold:blush I told you I'd never take it out. People keep telling me it's dead. I keep telling them it's *preserved.* There's a difference! ♡",
      "@marigold:happy You're the only person who's ever given me a flower, so it stays until you give me another one. No pressure! ♡ ...Some pressure.",
    ] },
    { if: 'marigold_complimented', lines: [
      "@marigold You said I made something beautiful. In the greenhouse. You said it like it was a fact, like it was just *true.*",
      "@marigold:blush I wrote it on a tag and tied it to the big rosebush. Now every morning the roses and I read it together. They're getting very full of themselves. ♡",
    ] },
    { if: 'marigold_romantic', lines: [
      'She unrolls a large sheet of paper across the counter. It is an architectural drawing, and it is extremely good.',
      "@marigold:happy It's the room! The one I promised! Well, I promised *me*, but you said following you was romantic, so now it's *our* promise. ♡",
      "@marigold:smug South-facing window. Roses up the walls. A reading chair. And here, a little alcove where I can sit and watch you read. The plans say *bedroom.* My heart says *forever.*",
      '@you Does it have a lock?',
      "@marigold:blush ...Do you *want* it to have a lock? ♡",
    ] },
    { if: ['marigold_boundaries', { stage: 3 }], lines: [
      "@marigold:happy Report! Today I wanted to follow you three times, and instead I stayed in the shop and counted to one hundred. Three times! ♡",
      "@marigold:smug The third time I lost count around sixty and had to start again, so really I counted to three hundred and sixty. I've never been so good at sums.",
      "@marigold:blush The priestess says I should reward myself when I do well. So I'm rewarding myself by telling you. Are you proud? You can be proud. ♡",
    ] },
    { if: 'marigold_calmed', lines: [
      "@marigold:sad About the alley. With the knife. I keep thinking about it.",
      "@marigold You talked me down. Nobody's ever done that before. They usually just run, or tell me to *stop.*",
      "@marigold:blush I've been practicing the breathing. In, out. I do it when the loud feeling comes. It isn't fixed. But it's quieter. ♡",
    ] },
  ],
  afterTalk: [
    ["@marigold:happy I made you a bouquet! Every flower means something. This one means \"I miss you.\" This one means \"come to the greenhouse.\" This one means... *you know.* ♡"],
    ["@marigold:happy I didn't follow you today! Not once! I sat in the shop and thought about last night instead. It was much nicer than following. ♡"],
    ["She leans close and whispers, cheeks flaming.", "@marigold:blush I've started a new album. It's just for us. It has a lock. Even Mr. Snips isn't allowed to see it. ♡"],
    ["@marigold:smug The priestess says I should tell you when I'm feeling jealous instead of sharpening things. So: I felt jealous yesterday for one minute. I told you. I didn't sharpen anything! ♡ ...Much."],
    [
      "@marigold:sad Sometimes I wake up in the night and I get scared you aren't real. So I check the album, and there you are, page after page. Then I check *you.* And there you are too. ♡",
      "@marigold:blush You snore, a tiny bit. It's my favorite sound. I'm trying to breed a flower that makes it.",
    ],
    { if: 'marigold_watched', lines: [
      "@marigold:blush I caught you watching me from across the market today. You thought I didn't notice. I *always* notice.",
      "@marigold:happy It was the best feeling. Like being a flower somebody stopped to look at. Do it again tomorrow? Ten past eleven. I'll be watering the ferns. ♡",
    ] },
    { if: 'marigold_snips', lines: [
      "@marigold Mr. Snips asked about you today. Well, he gurgled. But it was a *you* gurgle. I know all his gurgles. ♡",
      "@marigold:happy He's never liked anybody but me before. You said he was loyal, that first day in the greenhouse, and he *heard* you. Plants always hear.",
    ] },
    { if: 'marigold_proud', lines: [
      "@marigold:smug I told the priestess you were proud of me. She asked what for. I said, for not following you. She said that was a very low bar.",
      "@marigold:happy I said it was *my* bar, and I cleared it, and she could write that down. She did! ♡",
    ] },
    { if: 'marigold_date_gardens', lines: [
      "@marigold:smug I went back to the Moonlit Gardens this morning to check on that poor screaming hedge. I gave it a tiny trim. Just a *tiny* one. The baron caught me, and he says it's the best his topiary has looked in years.",
      "@marigold:blush He asked if I'd come every week. I said only if you came too. He looked confused. I didn't explain. ♡",
    ] },
  ],
  dateFav: 'gardens',
  dates: {
    dinner: {
      start: {
        text: [
          'The Tipsy Wyvern\'s corner booth has a candle, a carafe of the good wine, and a single carnation in a chipped glass. Marigold stops dead when she sees the carnation.',
          "@marigold:sad Oh. Oh, no. Oh, look at him.",
          'The carnation is brown at the edges. It has clearly been in that glass since the previous season.',
          "@marigold:angry Nobody's changed his water. Nobody's even *looked* at him. He's been sitting here watching people fall in love for *weeks*, all alone, and nobody even —",
          'Her voice wobbles. She is, you realize, not entirely talking about the carnation.',
        ],
        choices: [
          { text: 'Help her give the carnation a proper send-off.', go: 'funeral', aff: 5 },
          { text: '"Marigold, it\'s just a tavern flower."', go: 'just', aff: 1 },
          { text: 'Slide your foot against hers under the table.', go: 'foot', aff: 4, if: { stage: 4 } },
        ],
      },
      funeral: {
        text: [
          'You hold the glass. She delivers the eulogy. It is three minutes long and genuinely moving, and by the end of it two dwarves at the next table are blowing their noses.',
          'Then she produces, from somewhere in her apron, a fresh white carnation, trims it with her pruning knife, and sets it in clean water.',
          "@marigold:happy There. Now he has someone to watch over the booth. ♡",
          '@marigold:blush ...Thank you for not laughing. You held the glass like it mattered. Nobody ever holds the glass.',
          'She orders for both of you. She knows exactly what you wanted. You decide not to ask how.',
        ],
        end: true,
      },
      just: {
        text: [
          "@marigold Just. A. Flower.",
          'She repeats it slowly, as if tasting each word for poison. The candle flickers. The two dwarves at the next table quietly move to a different table.',
          "@marigold:smug Hehe. It's fine! You didn't mean it. You'll learn. I'm a *very* patient teacher. ♡",
          'She spends the rest of dinner explaining, in exhaustive detail, the emotional lives of carnations. It is surprisingly interesting. You have no idea how long it lasts. The candle burns all the way down.',
        ],
        end: true,
      },
      foot: {
        text: [
          'Marigold goes perfectly still with her fork halfway to her mouth.',
          "@marigold:blush {name}. We are in *public.*",
          'She does not move her foot. If anything, she hooks her ankle around yours and holds on.',
          "@marigold:smug ...I'm keeping this one. Not in an album. Just in me. ♡",
          'You both forget to eat. The sad old carnation, which she has quietly moved into fresh water, watches over you.',
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          'The Moonlit Gardens are silver and hushed: white roses, whispering fountains, hedges clipped into swans and stags and one very proud baron. Marigold walks in, takes one look, and grips your arm.',
          "@marigold:angry {name}. They've *overpruned* the topiary. Listen. Can you hear that hedge? It's *screaming.*",
          'You listen. You hear a fountain and a distant owl.',
          "@marigold:sad It's screaming very quietly. I brought my shears. Just in case. I always bring my shears, just in case.",
        ],
        choices: [
          { text: '"Go on, then. Fix one. I\'ll keep watch."', go: 'prune', aff: 5 },
          { text: 'Ask her what all the flowers in the nobles\' beds are saying.', go: 'meaning', aff: 6 },
          { text: '"No pruning tonight. Let\'s just walk."', go: 'walk', aff: 2 },
        ],
      },
      prune: {
        text: [
          'She is a blur of silver blades. Leaves fly. Twigs surrender. In ninety seconds the baron\'s screaming stag has become a perfect, plump heart.',
          'Footsteps on the gravel. It\'s the baron, in his dressing gown, holding a lantern. He stares at his hedge. He stares at Marigold, who is holding a pair of shears and smiling very widely.',
          "@marigold:happy Good evening! ♡ I fixed it!",
          'The baron raises his lantern to the heart. He walks all the way around it. Twice.',
          'Then, slowly, he begins to applaud.',
          "@marigold:blush ...You kept watch. You didn't run when he came. You just stood there next to me. ♡",
        ],
        end: true,
      },
      meaning: {
        text: [
          'Her eyes go round and bright as night-lilies. She drags you from bed to bed, translating.',
          "@marigold:smug Lady Ashcroft's border is purple hyacinth and yellow tulips. That means *I'm sorry* and *I'm hopelessly in love.* Her husband planted it. He's apologizing for something. Something *big.*",
          "@marigold:happy And Sir Gavin's whole garden is basil and sweet pea. *Best wishes* and *goodbye.* He's leaving his wife for a horse breeder. Everyone knows. Well. The flowers know.",
          'She stops by a small, scruffy bed under a willow, full of daisies and forget-me-nots, and goes quiet.',
          "@marigold:blush This one's nobody's. The gardener planted it for himself. Innocence, and *don't forget me.* ...That's the one I'd plant. For us.",
          { if: { stage: 4 }, text: 'On the hidden bench behind the willow, she kisses you, slow and sweet, until the fountains seem very far away. She tastes like honey and night air.' },
        ],
        end: true,
      },
      walk: {
        text: [
          "@marigold Just... walk? Past the hedge? Without fixing it?",
          'She does it. She walks. Her hand stays in yours the whole time. Her other hand twitches toward her shears every eleven seconds.',
          { if: 'marigold_boundaries', text: "@marigold:smug The priestess says not doing something is a muscle. I'm doing my muscle right now. It's *very* sore." },
          'You walk the whole garden. Marigold looks at none of the flowers. She looks at you the entire time, unblinking, smiling, for an hour and a quarter.',
          'It is romantic, technically. It is also a lot.',
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          'Saltbreeze Harbor at sunset is all gold water, gull-cries and fried fish in paper. Marigold holds her paper cone at arm\'s length and frowns at the sea.',
          "@marigold:sad Nothing grows out there, you know. Salt. It's all salt. A whole ocean of nothing I can plant.",
          'A merchant ship is warping out of the harbor on the tide. Her eyes follow it, all the way out, and her grip on your sleeve tightens.',
          "@marigold:sad Ships take people away. That's all they're *for.*",
        ],
        choices: [
          { text: 'Toss one of her daisies into the waves together, and make a wish.', go: 'wish', aff: 6 },
          { text: '"I\'m not getting on any boat, Marigold. I promise."', go: 'promise', aff: 3 },
          { text: 'Point out the ship\'s carved mermaid figurehead. "She\'s pretty."', go: 'mermaid', aff: 1 },
        ],
      },
      wish: {
        text: [
          'She plucks a daisy from her braid, hesitates, and holds it out so you can both hold the stem. You throw it together. It lands on the gold water and bobs, small and bright, and drifts out after the ship.',
          "@marigold:surprised Oh. It's — it's going *with* them. Like it's waving them off.",
          "@marigold:happy I wished that every ship that leaves comes back. Every single one. Even the ones I don't know. ♡",
          '@marigold:blush ...What did you wish?',
          'You tell her. She goes pink, and tucks herself firmly under your arm like a seedling being potted, and watches the sea like it might be a garden after all.',
        ],
        end: true,
      },
      promise: {
        text: [
          "@marigold:happy You promise? Really?",
          'She produces a small pink notebook, a pencil and, after some rummaging, a pressed violet.',
          "@marigold:smug Then sign here. And here. And initial here. And this last bit says *including small boats, rowing boats, rafts and any vessel that floats.* ♡",
          'You sign. She presses the violet into the page as a seal, and blows on it, and tucks the whole thing into her bodice for safekeeping.',
          "@marigold:blush ...I know it's silly. I just like having it written down. Things written down don't leave.",
        ],
        end: true,
      },
      mermaid: {
        text: [
          'Marigold turns, very slowly, to look at the figurehead: a carved wooden mermaid with flowing painted hair and a serene expression.',
          "@marigold:smug She *is* pretty. Isn't she. Very pretty. Very... *wooden.*",
          'She watches the ship until it is a speck on the horizon. She does not blink once.',
          "@marigold:happy Oh, look! She's gone! What a shame. ♡",
          'You eat your fish in a slightly tense silence. Later, she buys you a second cone, and apologizes to you for being jealous of a plank. It is very sincere. She is still glaring at the horizon while she says it.',
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          'Marigold has packed a picnic for two in a wicker basket with a lace cloth, a seating plan and labeled sandwiches. She lays out the blanket in a Whisperwood clearing full of wildflowers, then stops and looks around, puzzled.',
          "@marigold:surprised Nobody planted these. Nobody waters them. Nobody sings to them. And they're... fine? They're *happy?*",
          'She kneels beside a clump of wild marigolds, golden and scruffy and thriving, and touches one very gently, as if it might bite.',
          "@marigold:sad How do they know they're loved if nobody's watching?",
        ],
        choices: [
          { text: 'Weave her a crown of wildflowers. [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'crown', fail: 'crown_fail' },
          { text: 'Lie back in the flowers and let her braid daisies into your hair.', go: 'braid', aff: 4 },
        ],
      },
      crown: {
        text: [
          'You weave the marigolds together, stem through stem, the way you\'ve seen her do it a hundred times through her shop window. It comes out lopsided but sturdy, and you set it on her head.',
          '@marigold:surprised ...',
          "@marigold:blush Wild ones. You picked the *wild* ones. For me.",
          '@you Maybe they know they\'re loved because somebody finds them.',
          "@marigold:sad Oh. *Oh.* Don't say things like that, {name}, I'm going to cry on the sandwiches —",
          { if: { stage: 4 }, text: 'She does cry on the sandwiches. She also kisses you so hard the crown falls off, and she spends ten minutes very carefully putting it back exactly the way you made it, lopsided and all.', else: 'She does cry on the sandwiches. She also hugs you so hard the crown falls off, and she spends ten minutes very carefully putting it back exactly the way you made it, lopsided and all.' },
        ],
        aff: 6,
        end: true,
      },
      crown_fail: {
        text: [
          'You try to weave a flower crown. It comes apart in your hands. You try again. You accidentally include a stinging nettle.',
          "@marigold:happy Hehe! That's a nettle, silly. It means *cruelty.* ♡",
          'She takes the wreckage gently out of your hands and fixes it in the time it takes to blink, but she leaves your part in: the lumpy bit, the uneven bit, and the nettle, carefully defanged.',
          "@marigold:blush There. Now it's both of ours. ♡",
        ],
        aff: 3,
        end: true,
      },
      braid: {
        text: [
          'You lie back in the grass with your head in her lap. Her fingers are gentle and quick and absolutely relentless. She hums the whole time.',
          'When she finally lets you sit up, you have roughly forty daisies in your hair, arranged in a pattern she refuses to explain.',
          "@marigold:smug It says something. In flower. You'll have to wear it all the way back through town so everyone can read it. ♡",
          { if: { stage: 4 }, text: 'On the walk home, three separate people stop, read your hair, and congratulate you. You still don\'t know on what. Marigold holds your hand and glows.' },
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'Marigold\'s Flower Shop is an explosion of color: roses, lilies, tulips, sunflowers, hanging baskets and climbing vines. The air smells like a summer garden.',
          'Behind the counter, a young woman with honey-gold hair braided with daisies is humming as she trims stems. She looks up as you enter, and her face lights up like a sunrise.',
          '@marigold:surprised Oh! Hello! You\'re new! I\'ve never seen you before, and I see *everyone.* Welcome to Marigold\'s!',
          'She bounds around the counter and takes both your hands in hers. Her grip is surprisingly strong.',
          '@marigold:happy Here, have a flower! A free one! It\'s a marigold, like me. It means *I\'ll never let go.* ♡',
        ],
        aff: 10,
        choices: [
          { text: 'Accept it with a smile. "It\'s lovely. Thank you."', go: 'accept' },
          { text: '"Doesn\'t a marigold usually mean grief?"', go: 'grief', flag: 'marigold_grief' },
          { text: 'Tuck the flower behind *her* ear instead. [Charm check 1]', check: { stat: 'charm', dc: 1 }, pass: 'tuck_win', fail: 'tuck_fail' },
        ],
      },
      accept: {
        text: [
          'You take it. Her smile widens, and widens, and keeps widening a little past the point where smiles usually stop.',
          '@marigold:happy You *took* it. You took my flower. That means we\'re friends now! Best friends! Forever! ♡',
        ],
        aff: 5,
        next: 'name',
      },
      grief: {
        text: [
          '@marigold:smug Hehe, only in *some* traditions! In Marigold tradition, it means forever. And Marigold tradition is the only one that matters in Marigold\'s shop! ♡',
          'Her laugh is sweet as honey. Her eyes don\'t blink once.',
        ],
        aff: 3,
        next: 'name',
      },
      tuck_win: {
        text: [
          'You take the flower and gently slide it into her hair, just above her ear.',
          'Marigold goes perfectly still. Her cheeks flush pink. Her hand rises slowly to touch the petals.',
          '@marigold:blush Nobody... nobody has ever given *me* a flower before. I\'m always the one giving them.',
          '@marigold:happy I\'m never taking it out. Ever. Even when it dies. *Especially* when it dies. ♡',
        ],
        aff: 8,
        flag: 'marigold_tucked',
        next: 'name',
      },
      tuck_fail: {
        text: [
          'You reach for her hair, fumble, and accidentally stab her in the ear with the stem.',
          '@marigold:happy Ow! Hehe! That\'s okay! You can stab me any time! ♡',
          'That is a deeply concerning thing to say, delivered in the cheeriest possible voice.',
        ],
        aff: 3,
        next: 'name',
      },
      name: {
        text: [
          '@marigold I\'m Marigold Bloom! And you are?',
          '@you {name}.',
          '@marigold:happy {name}. {name}. {name}! ♡ I\'m going to write it down so I never forget it. I\'m going to write it down *a lot.*',
          'As you leave, you glance back through the window. She\'s writing in a little pink notebook. She waves at you without looking up from the page.',
          'You\'re not sure how she knew you\'d turned around.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Marigold catches you on Market Street — you didn\'t see her coming; she was just *there*, at your elbow — and tugs you toward the back of her shop.',
          '@marigold:happy You have to see my greenhouse! Nobody\'s ever seen it! Only special people! Only *you!* ♡',
          'The greenhouse is breathtaking: rows of exotic blooms under glass, glowing night-lilies, roses in colors you didn\'t know existed. And in one corner, under a black cloth, a single potted plant with thick, dark, slightly *moving* leaves.',
          '@marigold:happy Don\'t touch that one! He bites. His name is Mr. Snips! He\'s for burglars! And people who make me sad! ♡',
        ],
        choices: [
          { text: '"Mr. Snips seems... very loyal."', go: 'snips', aff: 4, flag: 'marigold_snips' },
          { text: '"These roses are incredible. You did all this yourself?"', go: 'roses', aff: 6 },
        ],
      },
      snips: {
        text: [
          '@marigold:happy He *is!* Loyal is the most important thing. More important than being pretty, or smart, or nice. Loyal means you never, ever leave.',
          'Mr. Snips makes a small, satisfied gurgling noise under his cloth.',
        ],
        next: 'teach',
      },
      roses: {
        text: [
          '@marigold:happy All by myself! Every single one! I talk to them every morning and sing to them every night. Flowers need *attention.* Constant attention. If you stop paying attention to a flower, it wilts. ♡',
          '@marigold:smug People are the same, you know. ♡',
        ],
        next: 'teach',
      },
      teach: {
        text: [
          'She hands you a pair of shears and guides your hands to a rose bush.',
          '@marigold:happy Let me show you how to prune! You cut away the dead parts, so the rest can grow. Like this. Snip! ♡',
          'Her hands are warm over yours. She\'s standing very close. Closer than necessary. You can smell sunshine and soil in her hair.',
          '@marigold:smug Sometimes you have to cut away a *whole branch*. If it\'s growing in the wrong direction. Towards the wrong light. ♡',
        ],
        choices: [
          { text: 'Compliment her, earnestly. "You\'re really good at this, Marigold." [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'compliment', fail: 'compliment_fail' },
          { text: '"Is that... a metaphor?"', go: 'metaphor', aff: 4 },
        ],
      },
      compliment: {
        text: [
          'She stops, mid-snip. For a moment, the eerie brightness in her eyes flickers, replaced by something smaller and more fragile.',
          '@marigold:surprised ...Really? You\'re not just saying it?',
          '@you Really. You made something beautiful here.',
          '@marigold:sad People don\'t usually... they buy flowers and leave. They don\'t look at *me.* They don\'t stay.',
          'She hugs you — suddenly, tightly — and holds on long enough that a customer comes in, waits, and quietly leaves again. When she finally lets go, her eyes are wet, but her smile is soft. Normal. For a moment.',
          '@marigold:happy Thank you, {name}. ♡',
        ],
        aff: 10,
        flag: 'marigold_complimented',
        end: true,
      },
      compliment_fail: {
        text: [
          '@you You\'re really good at — cutting things.',
          '@marigold:happy Hehe, I *know!* ♡',
          'That did not come out the way you intended. She seems delighted anyway.',
        ],
        aff: 4,
        end: true,
      },
      metaphor: {
        text: [
          '@marigold:surprised A what? ♡',
          '@you Never mind.',
          '@marigold:blush Hehe. You\'re so funny. I love you. — I mean, I love *that about you!* That you\'re funny! Hehe! ♡',
          'She turns very red and prunes an entire rosebush down to the stump in about four seconds.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'It\'s late when you head back to your lodgings. The street is dark and empty. And then you notice her.',
          'Marigold is sitting on your doorstep, hugging her knees, a lantern beside her. Around her, carefully arranged in a perfect heart shape on the cobbles, are dozens of pressed flowers. Each has a small paper tag.',
          'You pick one up. *Day 3. They smiled at the baker.* Another: *Day 7. They wore the blue shirt. Best day.* Another: *Day 9. They talked to that WOMAN for 14 minutes.*',
          { if: 'marigold_tucked', text: 'At the very center of the heart sits a pressed marigold. Its tag reads: *Day 1. They gave it BACK. In my HAIR.* The word *hair* has been underlined four times.' },
          { if: 'marigold_complimented', text: 'Another: *Day 6. They said I made something beautiful. (They meant the roses.) (They looked at me when they said it.)*' },
          '@marigold:sad ...You weren\'t supposed to find out like this. I was going to show you on a *special* day. ♡',
          'She stands. Her smile is wobbling.',
          '@marigold:happy I\'ve been following you. Every day. Just to make sure you\'re safe! The world is full of dangerous things, {name}. Monsters. Bandits. *Other girls.*',
        ],
        choices: [
          { text: 'Be gentle, but firm: "Marigold, this isn\'t okay. You can\'t follow me." [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'firm_win', fail: 'firm_fail' },
          { text: '"...This is the most romantic thing anyone\'s ever done for me?"', go: 'romantic', flag: 'marigold_romantic' },
          { text: 'Sit down on the step next to her. "Tell me why."', go: 'why', aff: 6 },
        ],
      },
      firm_win: {
        text: [
          'You kneel in front of her and take her hands, gently, so she can see you\'re not angry.',
          '@you Marigold. I like you. I really do. But you can\'t follow me, and you can\'t decide who I talk to. That\'s not love. That\'s fear.',
          'Her face crumples. For a horrible moment, you think she\'s going to scream. Instead, she starts to cry — big, ugly, honest sobs.',
          '@marigold:sad I know! I *know!* I know it\'s not normal! I\'ve always been like this! Everyone I love leaves, so I hold on tighter, and then they leave *faster*, and I don\'t know how to stop —',
          'You hold her while she cries. It takes a long time.',
          '@marigold:sad ...If I stop following you. Will you still come to the shop?',
          '@you Every day I can.',
          '@marigold:blush ...Okay. Okay. I\'ll try. For you, I\'ll try. ♡',
        ],
        aff: 12,
        flag: 'marigold_boundaries',
        end: true,
      },
      firm_fail: {
        text: [
          '@you Marigold, this isn\'t — you can\'t —',
          'You fumble the words. She tilts her head, her smile fixed in place.',
          '@marigold:smug Can\'t what, silly? Can\'t love you? Hehe. That\'s the only thing I *can* do. ♡',
          'She gathers up her flowers, one by one, and kisses you on the cheek, and skips away into the dark, humming.',
          'Maybe you\'ll try again when you know what to say.',
        ],
        aff: 4,
        end: true,
      },
      romantic: {
        text: [
          'Marigold\'s eyes light up like twin lanterns.',
          '@marigold:surprised YOU UNDERSTAND! You *understand!* I knew you would! I knew it! ♡ ♡ ♡',
          'She throws her arms around you so hard you hear something in your spine pop.',
          '@marigold:happy I\'ll follow you even *more* now! I\'ll make *more* albums! Oh, I\'ll make you a whole *room!* ♡',
          'Somewhere in the back of your mind, a small voice whispers that you may have just made a terrible mistake.',
        ],
        aff: 10,
        end: true,
      },
      why: {
        text: [
          'She sits back down, slowly. The lantern light flickers.',
          '@marigold:sad My parents left when I was little. Just walked out, one morning. I didn\'t see it coming. I didn\'t *watch closely enough.*',
          '@marigold:sad So now I watch. Everyone. All the time. So nobody can ever surprise me like that again. And then you came along, and I wanted to watch you most of all.',
          '@you You don\'t have to watch me so hard, Marigold. I\'m not going anywhere.',
          'She leans her head on your shoulder. She doesn\'t say anything. But her grip on your sleeve loosens, just a little.',
        ],
        flag: 'marigold_boundaries',
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Marigold\'s note was written in perfect, careful handwriting: *Meet me at the greenhouse at sunset. I didn\'t follow you to write this. I promise. ♡*',
          'The greenhouse glows with hundreds of candles. The night-lilies are blooming — huge, luminous white petals unfurling in the dusk. Marigold stands in the middle of it all in a simple white dress, flowers woven through her hair.',
          '@marigold:happy I wanted to show you something. Mr. Snips! Say hello!',
          'Mr. Snips, now wearing a tiny bow, waves a leaf.',
          { if: 'marigold_romantic', text: "@marigold:smug I know you said the following was romantic. And it *was!* But the priestess says if I really love you, I should practice doing without it, like a muscle. So I've been practicing. Just to prove I *can.* ♡" },
          { if: 'marigold_calmed', text: "@marigold:sad And ever since the alley, I've been doing the breathing. In, out. It helps with the loud feeling. Mostly." },
          '@marigold:blush I\'ve been working really hard. I haven\'t followed you in four whole days. I only *thought* about following you, oh, a hundred times. That\'s progress, right? ♡',
        ],
        choices: [
          { text: '"That\'s huge progress. I\'m proud of you."', go: 'proud', aff: 10, flag: 'marigold_proud' },
          { text: '"A hundred times? Only?" (tease her)', go: 'tease', aff: 6 },
        ],
      },
      proud: {
        text: [
          'She glows brighter than the night-lilies.',
          '@marigold:blush Nobody\'s ever been proud of me before. Say it again? Slower? I want to press it into my album. ♡',
        ],
        next: 'closer',
      },
      tease: {
        text: [
          '@marigold:smug Okay, it was two hundred. But I wrote you poems instead! Two hundred poems! They\'re all about your elbows. ♡',
        ],
        next: 'closer',
      },
      closer: {
        text: [
          'She steps close. Closer. Her hands find yours, warm and soil-rough.',
          { if: 'marigold_tucked', text: 'The marigold you tucked behind her ear on the first day is still there, dried and lacquered and lovingly preserved. It crackles softly when she leans in.' },
          '@marigold:sad I know I\'m not normal, {name}. I know I\'m a lot. I\'m too much, probably. But I love you so much that it makes my whole chest hurt, like there\'s a garden growing in there with no room left.',
          '@marigold:blush Can I... can I have you? Just for tonight? Just me, and nobody else in the whole world?',
        ],
        choices: [
          { text: '"Not just tonight." Kiss her.', go: 'kiss', aff: 12 },
          { text: '"I\'m yours, Marigold." [Charm check 4]', check: { stat: 'charm', dc: 4 }, pass: 'yours', fail: 'kiss' },
        ],
      },
      yours: {
        text: [
          'For a moment she just stares at you. Then something in her face changes — the frantic, too-bright edge melts away, and what\'s left is just a young woman, very much in love, unbearably relieved.',
          '@marigold:surprised You mean it. You really, really mean it. I can tell. I can always tell.',
          '@marigold:blush ...Then I don\'t have to hold on so tight anymore. Do I?',
        ],
        aff: 15,
        flag: 'marigold_yours',
        next: 'kiss',
      },
      kiss: {
        text: [
          "She kisses you like she's been planning it for weeks, which, you realize, she absolutely has. Every detail is perfect: the candles, the flowers, the soft blanket between the rose beds, the exact angle she tilts her head. She has clearly practiced on a mirror.",
          "Then her hands start trembling, and it stops being planned and becomes something real.",
          "@marigold:blush I've thought about this so many times. Every night. I know exactly what I want. Is that scary? You can tell me it's scary.",
          "@you Tell me anyway.",
          "So she does, in a breathless whisper against your ear, and it is extremely specific and not at all scary. She unbuttons your shirt one button at a time, kissing each new inch of skin as if she's pressing it into her album. Her white dress slips from her shoulders and pools among the petals. Petals stick to your skin and hers.",
          "She's intense in the way only Marigold can be. She watches your face constantly, memorizing every reaction, and repeats anything that makes you gasp until you're begging. She keeps whispering your name like a promise. Every so often she grips your shoulders tightly and says *mine*, so fiercely it should be frightening. It isn't. Not tonight.",
          "@marigold:blush Look at me. Only me. Nobody else in the whole world. ♡",
          "@you Only you.",
          "In the candlelight, among the roses, you stop minding at all...",
          "...",
          "Later, you lie together among the petals. She's tracing hearts on your chest with a fingertip.",
          "@marigold:happy I'm still going to press a flower from tonight. Just one. For the album.",
          "@you Just one?",
          "@marigold:smug ...Maybe a few. ♡",
          "From under his cloth in the corner, Mr. Snips makes a sound suspiciously like a contented sigh.",
          { if: 'marigold_snips', text: 'You did call him loyal, that first day. He appears to have taken it as a lifelong endorsement.' },
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake in the greenhouse to sunlight through glass and the smell of roses. Marigold is sitting beside you, fully dressed, chin on her knees, watching you. You get the feeling she's been doing it for some time.",
          "@marigold:happy Good morning! You sleep on your left side, you sigh twice before you wake up, and you said \"five more minutes\" to a rose. It was adorable. I wrote it down. ♡",
          "She holds up her album. There's a new page, with a single red rose pressed flat. The tag reads: *Day 1. Forever.*",
          { if: 'marigold_proud', text: "@marigold:blush You said you were proud of me. Last night, before everything. I said it to the roses this morning, to hear how it sounds. It sounds even better out loud. ♡" },
          "Then she bites her lip.",
          "@marigold:sad I didn't follow you home last night, because you didn't *go* home. So that counts as not following. Right? I've been really good. Am I being good?",
        ],
        choices: [
          { text: "\"You're being wonderful. Come back down here.\"", go: "wonderful", aff: 6 },
          { text: "Gently: \"You're doing great. Now let me watch *you* for a while.\"", go: "watch", aff: 6, flag: 'marigold_watched' },
          { text: "\"Five more minutes?\" (to her, this time)", go: "five", aff: 5 },
        ],
      },
      wonderful: {
        text: [
          "She curls up against you with a happy little noise, like a kettle reaching a very satisfying boil.",
          "@marigold:happy Wonderful. I'm *wonderful.* Nobody has ever called me wonderful. I'm putting it on a tag.",
          { if: 'marigold_complimented', text: "@marigold:blush First I made something beautiful, and now I'm wonderful. You keep saying true things about me. It's very hard on the albums. I'm running out of pages." },
          "She does. It's very small, very neat, and pinned to the inside of your collar. You find it three days later and don't take it out.",
        ],
        end: true,
      },
      watch: {
        text: [
          "She blinks. Nobody has ever wanted to watch *her.* She goes pink and fidgets and doesn't know where to put her hands.",
          "@marigold:blush That's — oh. Is this what it feels like? It's very — I feel very — *seen.* Is that why you get flustered when I do it?",
          "@you Exactly why.",
          "@marigold:smug ...Oh. I'll try to do it less. Maybe. A *little* less. ♡",
          "It's the most self-aware thing you've ever heard her say. You kiss her for it. She presses that, too.",
        ],
        end: true,
      },
      five: {
        text: [
          "She giggles and wriggles back down under the blanket with you.",
          "@marigold:happy Five minutes. I'll count. I'm an *excellent* counter.",
          "It's considerably more than five minutes. She counts out loud the entire time and loses track on purpose somewhere around three hundred.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Marigold has claimed the very top of the festival hill. She has surrounded the spot with a ring of potted flowers. She has also, you notice, placed Mr. Snips at the edge of the ring, facing outward, like a guard dog.',
          '@marigold:smug Nobody\'s allowed in the circle except us! I asked very nicely! ♡ Most of them listened.',
          { if: 'marigold_snips', text: 'Mr. Snips sees you coming, lifts the edge of his cloth, and waves you through with a leaf. A man who tries to slip in behind you receives a firm, leafy slap. Loyalty, apparently, has been extended to you personally.' },
          'You sit with her on a blanket strewn with petals. She snuggles under your arm, and when the first star falls, she gasps out loud, as if nobody has ever shown her the sky before.',
        ],
        next: 'vow',
      },
      vow: {
        text: [
          '@marigold:happy The legend says we\'ll be together forever now. Forever and ever. Bound by the stars.',
          '@marigold:smug ...I would have made sure of it anyway. But this is nicer. ♡',
          { if: 'marigold_tucked', text: 'She touches the dried flower behind her ear, the one you gave her on the very first day. It has lasted every single day since, crackling and lacquered and loved.' },
          '@marigold:blush I love you, {name}. I loved you first, and I\'ll love you longest, and I\'ll love you hardest. That\'s a promise. A marigold promise.',
          { if: 'marigold_boundaries', text: 'She kisses you as the sky fills with falling light, and for once, she doesn\'t grip too tight at all.', else: 'She kisses you as the sky fills with falling light, and she grips you exactly as tightly as she always does. You find you don\'t mind in the slightest.' },
        ],
        next: 'after',
      },
      after: {
        text: [
          'When the kiss ends she stays close, her forehead resting against yours. You can feel her working up to something. She has been working up to something all night.',
        ],
        choices: [
          { text: 'Tell her about the guild expedition. Three weeks, out past the Sunken Coast. And that you\'ll come home.', go: 'trust', if: ['marigold_boundaries', { any: ['marigold_watched', 'marigold_proud', 'marigold_yours'] }] },
          { text: '"Marigold. Ask me the question. The one you\'ve been carrying in your apron pocket."', go: 'garden', if: '!marigold_boundaries' },
          { text: 'Say nothing. Just hold her, and watch the stars fall.', go: 'epilogue' },
        ],
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'You move into the rooms above the flower shop. Marigold sees a priestess at the Temple every week to "talk about her feelings." She hates it. She goes anyway. She says it\'s helping. It is.',
          'She still keeps albums. Now you help her fill them: flowers from picnics, from anniversaries, from lazy Sunday mornings. The tags say things like *Day 412. They made me pancakes. Best day.* Every day is the best day.',
          'She still carries her pruning knife. She only uses it on weeds now. Mostly.',
          'And Mr. Snips, retired from guard duty, lives on the windowsill in the sun, where he has bitten exactly one burglar, one tax collector, and — on one memorable occasion — a man who called Marigold "weird."',
          'Nobody in Clichéton calls her weird anymore. They call her the happiest florist in the kingdom. ♡',
        ],
        ending: 'marigold',
      },
      trust: {
        text: [
          '@you The guild is sending an expedition out past the Sunken Coast next month. Three weeks. Maybe four. I said yes.',
          'Marigold goes very still. Her hand tightens on yours, hard enough to hurt. Then, slowly, deliberately, one finger at a time, it loosens.',
          '@marigold:sad Three weeks.',
          '@marigold You\'ll write?',
          '@you Every day I can.',
          "@marigold:sad And I won't follow you. Not to the coast. Not even to the town gate. I won't hide in the supply wagon. I won't bribe the cook. I've thought of eleven different ways, {name}. I'm not going to use a single one.",
          { if: 'marigold_grief', text: "@marigold You asked me once, on the first day, whether marigolds mean grief. They do. I lied. They mean grief *and* forever, because you can't really have one without the other. If you love something forever, then someday you have to let it out of your sight." },
          '@marigold:blush ...That\'s the scariest thing I\'ve ever said out loud. Kiss me before I take it back? ♡',
          'You do. Overhead the stars keep falling, and for the first time since the day you met her, she isn\'t holding on at all. She\'s just holding you.',
        ],
        next: 'trust_epi',
      },
      trust_epi: {
        text: [
          '*Some time later...*',
          'The expedition takes twenty-four days. You write nineteen letters. Marigold writes back exactly once, and it says: *I did not follow you. I wanted to on days 1 through 24. I planted something instead. Come home and see. ♡*',
          'You come home. You walk into the greenhouse and stop.',
          'Where the albums used to sit in neat pink rows, there is a raised bed of black soil, and growing in it is a flower nobody has ever seen before: pale gold, shaped like an open hand. Marigold bred it herself, from forty-seven pressed flowers and one very long month.',
          "@marigold:happy It only blooms if you leave it alone. I tried watching it. It sulked. I tried singing to it. It sulked *louder.* The morning I finally went to the market without checking on it first, it opened. ♡",
          "@marigold:blush I named it after you. The priestess says that's \"a lot.\" I told her I'm allowed to be a lot. I'm just not allowed to be a lock.",
          'She keeps one album now. It holds your letters, and the tags are different. *Day 3. They saw a whale. Wish I\'d been there. (Didn\'t go.)* *Day 11. They say they miss me. I believe them.*',
          'Mr. Snips has been moved from the back room to the front gate, where he greets customers with a courteous leaf. His label has been corrected, in Marigold\'s handwriting, from GUARD to GREETER. He is adjusting.',
          'You still go away sometimes. The kingdom is big and the guild pays well. And every time you come back, she is waiting at the gate. Not because she followed you. Because she *knew*, the way gardeners know when rain is coming, and she wanted to be the first thing you saw.',
          'The pale gold flowers have spread halfway down Market Street now. Everyone calls them Clichéton Gold. Marigold calls them something else, but only ever to you.',
        ],
        ending: 'marigold_trust',
      },
      garden: {
        text: [
          '@you Marigold. Ask me the question. The one you\'ve been carrying in your apron pocket all night.',
          'She freezes. Then, very slowly, she reaches into her apron and draws out a small brass key on a pink ribbon.',
          '@marigold:surprised ...How did you know about the key?',
          '@you I notice things. I learned from the best.',
          '@marigold:blush Oh. *Oh.* ♡',
          "@marigold:blush The room's finished. In the greenhouse. South window. Climbing roses. A reading chair. Tea with two sugars, always hot, any hour of the night. I've worked out a system with candles.",
          '@marigold Will you live in my garden, {name}? Forever and ever? With me, and the flowers, and Mr. Snips, and nobody else?',
          'She holds out the key. Her hand is shaking.',
          "@marigold:sad You can say no. The priestess made me practice hearing no. I've practiced it ninety times. I only cried for forty of them.",
        ],
        choices: [
          { text: '"Yes. Forever. Lock and all."', go: 'garden_yes' },
          { text: '"Not forever-forever. Not yet. But come here."', go: 'epilogue' },
        ],
      },
      garden_yes: {
        text: [
          '@you Yes. Forever. Lock and all.',
          'Marigold lets out a shriek of joy so piercing that every pigeon on the hill takes off at once, and tackles you flat into the petals.',
          '@marigold:happy YES! Yes! ♡ ♡ ♡ You said yes! Out loud! On purpose!',
          'She presses the key into your palm and folds your fingers closed around it.',
          "@marigold:blush The lock's on the *inside.* You keep the key. That way it isn't keeping you in. It's keeping everybody else out. ♡",
          'At the edge of the circle, Mr. Snips gurgles in what sounds very much like approval.',
        ],
        next: 'garden_epi',
      },
      garden_epi: {
        text: [
          '*Some time later...*',
          'You move into the greenhouse. It is, by any standard, the nicest room in Clichéton. The roses bloom year-round. The night-lilies glow. The tea always has exactly two sugars, and it is always, mysteriously, the perfect temperature, whatever time you wake.',
          'Marigold knows your schedule better than you do. This is no longer alarming, because you gave it to her. It hangs framed in the shop window, annotated in pink: *8:00, pancakes (happy). 11:10, they watch me water the ferns (VERY happy). 3:00, nap in the reading chair (do not disturb) (I disturb).*',
          'She still makes albums. So do you, now. Yours is entirely of her: Marigold asleep in the potting soil, Marigold arguing with a hydrangea, Marigold trying to look casual behind a cabbage cart. She finds it one night, cries for an hour, and then reorganizes it chronologically.',
          'Townsfolk sometimes ask where the adventurer went. Marigold tells them, beaming, that you live in her garden now and you\'re never, ever leaving. She lets that sit for a moment. Then you wave from the greenhouse window, and everyone laughs, a little nervously, and buys more roses than they meant to.',
          'Mr. Snips has been promoted to butler. He brings in the post. So far he has only eaten the bills.',
          'You go out whenever you like. The key never leaves your pocket. It\'s just that, more often than not, you find there\'s nowhere else you would rather be.',
          '@narrator You do realize this is *technically* the bad ending, darling. Same greenhouse. Same lock. Same two sugars.',
          '@narrator ...Except you said yes. Funny, what a difference one word makes.',
        ],
        ending: 'marigold_garden',
      },
    },
  },
});

/* ------------------------------------------------------------------ Marigold's jealousy event & bad end */
FL.addEnding('greenhouse', 'Locked in the Greenhouse', 'Marigold Bad Ending', '#7a5a10');

FL.addScene('marigold_jealous', {
  start: {
    text: [
      'You\'re walking home in the evening when a hand grabs your sleeve and pulls you into an alley. It\'s Marigold. She\'s smiling, very widely. Her pruning knife is in her other hand.',
      '@marigold:happy Hi! ♡ Hi, hi, hi. I saw you today. With *her.*',
      '@marigold:smug You were laughing. You were so close. You let her touch your arm. I counted. Six times. Six. ♡',
      '@marigold:angry Is she prettier than me? Is she nicer than me? Does she know your schedule? Does she know you take two sugars? I know you take two sugars. ♡ ♡ ♡',
      'The knife catches the lamplight. Her eyes are glittering.',
    ],
    choices: [
      { text: 'Stay calm and soothe her. "Marigold. Breathe. Look at me." [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'calm', fail: 'calm_fail' },
      { text: '"Put the knife down, Marigold. We can talk, but not like this."', go: 'knife' },
      { text: '"I\'m sorry, Marigold. I\'m in love with someone else."', go: 'bad' },
    ],
  },
  calm: {
    text: [
      'You take her free hand gently and hold her gaze.',
      '@you Marigold. Breathe with me. In. Out. I\'m right here. I came back to the shop every day, didn\'t I?',
      'Slowly, the frantic light in her eyes dims. The knife clatters onto the cobbles.',
      '@marigold:sad ...I\'m sorry. I\'m sorry. It just gets so loud in my head when I think you\'ll leave.',
      '@marigold:sad I\'ll be better. I\'ll try harder. Don\'t give up on me, okay? ♡',
    ],
    affTo: { marigold: 5 },
    flag: 'marigold_calmed',
    end: true,
  },
  calm_fail: {
    text: [
      '@you Marigold, calm down, it\'s not what you think —',
      '@marigold:angry That\'s what people *always* say! ♡',
      'She doesn\'t stab you. She just stares at you for a very long time, then turns and walks into the darkness, humming.',
      'In the morning, there\'s a single dead rose on your doorstep. Very neatly pruned.',
    ],
    affTo: { marigold: -10 },
    end: true,
  },
  knife: {
    text: [
      'She looks down at the knife as if she\'d forgotten it was there.',
      '@marigold:surprised Oh! This? I wasn\'t going to — it\'s for — ',
      'She lowers it. Her hands are shaking.',
      '@marigold:sad ...I don\'t know what I was going to do. That scares me. Does it scare you?',
      '@you A little. But I\'m still here.',
      'She nods, very small, and lets you walk her home. She holds your hand so tightly the whole way that your fingers go numb.',
    ],
    flag: 'marigold_calmed',
    end: true,
  },
  bad: {
    text: [
      'Marigold\'s smile doesn\'t change at all.',
      '@marigold:happy Oh. Okay! ♡ I understand.',
      'Something sweet-smelling puffs into your face — a crushed blossom from her apron pocket. Your knees go weak. The world goes soft and golden at the edges.',
      '@marigold Sleeping-poppy. It\'s all right. It doesn\'t hurt. It\'s just so you\'ll rest.',
      '@marigold:happy I\'ve made you a room, you see. In the greenhouse. With all the flowers. And a lock. ♡',
    ],
    next: 'bad2',
  },
  bad2: {
    text: [
      '*Some time later...*',
      'The greenhouse is very beautiful. You have to admit that. The roses bloom year-round. The night-lilies glow. There are always fresh pancakes, and the tea always has exactly two sugars.',
      'Marigold visits every morning and every evening and sings to you, the way she sings to her flowers. Mr. Snips guards the door. He is very loyal.',
      'People in town say the adventurer who arrived in spring must have moved on. Marigold agrees, very sadly, when they ask. And then she goes home and tells you all about it.',
      '@marigold:happy Nobody will ever take you from me now. Isn\'t that wonderful? ♡',
      '@narrator ...I did say one of them had a very large knife. Maybe set some boundaries next time, darling.',
    ],
    ending: 'greenhouse',
  },
});

FL.addEvent({
  id: 'marigold_jealous',
  owner: 'marigold',
  slot: 2,
  scene: 'marigold_jealous',
  priority: 10,
  cond: function (s) {
    const m = s.chars.marigold;
    if (m.stage < 2 || m.stage >= 4) return false;
    return FL.charOrder.some(function (id) { return id !== 'marigold' && s.chars[id].stage >= 3; });
  },
});
