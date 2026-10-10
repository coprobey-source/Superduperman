FL.addCharacter({
  id: 'marigold',
  name: 'Marigold Bloom',
  short: 'Marigold',
  trope: 'Yandere Florist',
  color: '#f6c445',
  favStat: 'charm',
  endingTitle: 'Forever in Bloom',
  teaser: 'A sunny florist hums as she trims rose stems. The pruning knife is very, very sharp.',
  blurb: 'Clichéton\'s sweetest florist: rosy cheeks, a sunshine smile, flowers in her hair. Everyone loves her. She loves only one person. She knows your schedule better than you do. She is *fine.* Everything is *fine.* (Charm might help keep it that way.)',
  schedule: ['market', 'market', 'square'],
  gifts: { love: ['dagger', 'chocolate'], like: ['plushie', 'cakes', 'mirror'], hate: ['perfume'] },
  giftLines: {
    love: ['She gasps and clutches it to her chest, eyes shining.', '@marigold For ME? Oh, {name}! I\'ll keep it forever and ever and ever. I\'ll keep it with the others.', '@you ...The others?', '@marigold Hm? ♡'],
    like: '@marigold Eee! You thought of me! You thought of me when I wasn\'t there! I\'m going to put it in a glass case. ♡',
    neutral: '@marigold Oh, that\'s nice! I love everything you give me! Even if it\'s... this. ♡',
    hate: ['She leans close and sniffs it. Her smile doesn\'t change. It just stops moving.', '@marigold This smells like a *woman*, {name}. Whose perfume is this? Where did it come from? Who were you with? Who? ♡'],
  },
  talk: [
    ['@marigold Good morning! You went to the guild at eight, the market at nine, and you had the cheese tart for breakfast! ...What? I just notice things! ♡'],
    ['@marigold Did you know every flower has a meaning? Red roses mean love. Forget-me-nots mean *don\'t forget me.* And oleander means "beware." ♡ No reason!'],
    ['@marigold I pressed the daisy you touched on Tuesday. It\'s in my album now. Page forty-seven. I have a lot of albums! ♡'],
    ['She is sharpening her pruning knife on a whetstone, humming a cheerful tune.', '@marigold Oh, this? It\'s for *weeds.* Weeds that grow where they\'re not wanted. They just choke the pretty flowers! ♡'],
    ['@marigold You were talking to someone yesterday, by the fountain. You laughed. You never laugh like that with me. What did she say? Was it funny? Teach me the joke. ♡'],
    ['@marigold You know what I love about you? Everything. Every single thing. Your face, your voice, your footprints. I traced one. ♡'],
  ],
  afterTalk: [
    ["@marigold I made you a bouquet! Every flower means something. This one means \"I miss you.\" This one means \"come to the greenhouse.\" This one means... *you know.* ♡"],
    ["@marigold I didn't follow you today! Not once! I sat in the shop and thought about last night instead. It was much nicer than following. ♡"],
    ["She leans close and whispers, cheeks flaming.", "@marigold I've started a new album. It's just for us. It has a lock. Even Mr. Snips isn't allowed to see it. ♡"],
    ["@marigold The priestess says I should tell you when I'm feeling jealous instead of sharpening things. So: I felt jealous yesterday for one minute. I told you. I didn't sharpen anything! ♡ ...Much."],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'Marigold\'s Flower Shop is an explosion of color: roses, lilies, tulips, sunflowers, hanging baskets and climbing vines. The air smells like a summer garden.',
          'Behind the counter, a young woman with honey-gold hair braided with daisies is humming as she trims stems. She looks up as you enter, and her face lights up like a sunrise.',
          '@marigold Oh! Hello! You\'re new! I\'ve never seen you before, and I see *everyone.* Welcome to Marigold\'s!',
          'She bounds around the counter and takes both your hands in hers. Her grip is surprisingly strong.',
          '@marigold Here, have a flower! A free one! It\'s a marigold, like me. It means *I\'ll never let go.* ♡',
        ],
        aff: 10,
        choices: [
          { text: 'Accept it with a smile. "It\'s lovely. Thank you."', go: 'accept' },
          { text: '"Doesn\'t a marigold usually mean grief?"', go: 'grief' },
          { text: 'Tuck the flower behind *her* ear instead. [Charm check 1]', check: { stat: 'charm', dc: 1 }, pass: 'tuck_win', fail: 'tuck_fail' },
        ],
      },
      accept: {
        text: [
          'You take it. Her smile widens, and widens, and keeps widening a little past the point where smiles usually stop.',
          '@marigold You *took* it. You took my flower. That means we\'re friends now! Best friends! Forever! ♡',
        ],
        aff: 5,
        next: 'name',
      },
      grief: {
        text: [
          '@marigold Hehe, only in *some* traditions! In Marigold tradition, it means forever. And Marigold tradition is the only one that matters in Marigold\'s shop! ♡',
          'Her laugh is sweet as honey. Her eyes don\'t blink once.',
        ],
        aff: 3,
        next: 'name',
      },
      tuck_win: {
        text: [
          'You take the flower and gently slide it into her hair, just above her ear.',
          'Marigold goes perfectly still. Her cheeks flush pink. Her hand rises slowly to touch the petals.',
          '@marigold Nobody... nobody has ever given *me* a flower before. I\'m always the one giving them.',
          '@marigold I\'m never taking it out. Ever. Even when it dies. *Especially* when it dies. ♡',
        ],
        aff: 8,
        next: 'name',
      },
      tuck_fail: {
        text: [
          'You reach for her hair, fumble, and accidentally stab her in the ear with the stem.',
          '@marigold Ow! Hehe! That\'s okay! You can stab me any time! ♡',
          'That is a deeply concerning thing to say, delivered in the cheeriest possible voice.',
        ],
        aff: 3,
        next: 'name',
      },
      name: {
        text: [
          '@marigold I\'m Marigold Bloom! And you are?',
          '@you {name}.',
          '@marigold {name}. {name}. {name}! ♡ I\'m going to write it down so I never forget it. I\'m going to write it down *a lot.*',
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
          '@marigold You have to see my greenhouse! Nobody\'s ever seen it! Only special people! Only *you!* ♡',
          'The greenhouse is breathtaking: rows of exotic blooms under glass, glowing night-lilies, roses in colors you didn\'t know existed. And in one corner, under a black cloth, a single potted plant with thick, dark, slightly *moving* leaves.',
          '@marigold Don\'t touch that one! He bites. His name is Mr. Snips! He\'s for burglars! And people who make me sad! ♡',
        ],
        choices: [
          { text: '"Mr. Snips seems... very loyal."', go: 'snips', aff: 4 },
          { text: '"These roses are incredible. You did all this yourself?"', go: 'roses', aff: 6 },
        ],
      },
      snips: {
        text: [
          '@marigold He *is!* Loyal is the most important thing. More important than being pretty, or smart, or nice. Loyal means you never, ever leave.',
          'Mr. Snips makes a small, satisfied gurgling noise under his cloth.',
        ],
        next: 'teach',
      },
      roses: {
        text: [
          '@marigold All by myself! Every single one! I talk to them every morning and sing to them every night. Flowers need *attention.* Constant attention. If you stop paying attention to a flower, it wilts. ♡',
          '@marigold People are the same, you know. ♡',
        ],
        next: 'teach',
      },
      teach: {
        text: [
          'She hands you a pair of shears and guides your hands to a rose bush.',
          '@marigold Let me show you how to prune! You cut away the dead parts, so the rest can grow. Like this. Snip! ♡',
          'Her hands are warm over yours. She\'s standing very close. Closer than necessary. You can smell sunshine and soil in her hair.',
          '@marigold Sometimes you have to cut away a *whole branch*. If it\'s growing in the wrong direction. Towards the wrong light. ♡',
        ],
        choices: [
          { text: 'Compliment her, earnestly. "You\'re really good at this, Marigold." [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'compliment', fail: 'compliment_fail' },
          { text: '"Is that... a metaphor?"', go: 'metaphor', aff: 4 },
        ],
      },
      compliment: {
        text: [
          'She stops, mid-snip. For a moment, the eerie brightness in her eyes flickers, replaced by something smaller and more fragile.',
          '@marigold ...Really? You\'re not just saying it?',
          '@you Really. You made something beautiful here.',
          '@marigold People don\'t usually... they buy flowers and leave. They don\'t look at *me.* They don\'t stay.',
          'She hugs you — suddenly, tightly — and holds on for a long time. When she finally lets go, her eyes are wet, but her smile is soft. Normal. For a moment.',
          '@marigold Thank you, {name}. ♡',
        ],
        aff: 10,
        end: true,
      },
      compliment_fail: {
        text: [
          '@you You\'re really good at — cutting things.',
          '@marigold Hehe, I *know!* ♡',
          'That did not come out the way you intended. She seems delighted anyway.',
        ],
        aff: 4,
        end: true,
      },
      metaphor: {
        text: [
          '@marigold A what? ♡',
          '@you Never mind.',
          '@marigold Hehe. You\'re so funny. I love you. — I mean, I love *that about you!* That you\'re funny! Hehe! ♡',
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
          '@marigold ...You weren\'t supposed to find out like this. I was going to show you on a *special* day. ♡',
          'She stands. Her smile is wobbling.',
          '@marigold I\'ve been following you. Every day. Just to make sure you\'re safe! The world is full of dangerous things, {name}. Monsters. Bandits. *Other girls.*',
        ],
        choices: [
          { text: 'Be gentle, but firm: "Marigold, this isn\'t okay. You can\'t follow me." [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'firm_win', fail: 'firm_fail' },
          { text: '"...This is the most romantic thing anyone\'s ever done for me?"', go: 'romantic' },
          { text: 'Sit down on the step next to her. "Tell me why."', go: 'why', aff: 6 },
        ],
      },
      firm_win: {
        text: [
          'You kneel in front of her and take her hands, gently, so she can see you\'re not angry.',
          '@you Marigold. I like you. I really do. But you can\'t follow me, and you can\'t decide who I talk to. That\'s not love. That\'s fear.',
          'Her face crumples. For a horrible moment, you think she\'s going to scream. Instead, she starts to cry — big, ugly, honest sobs.',
          '@marigold I know! I *know!* I know it\'s not normal! I\'ve always been like this! Everyone I love leaves, so I hold on tighter, and then they leave *faster*, and I don\'t know how to stop —',
          'You hold her while she cries. It takes a long time.',
          '@marigold ...If I stop following you. Will you still come to the shop?',
          '@you Every day I can.',
          '@marigold ...Okay. Okay. I\'ll try. For you, I\'ll try. ♡',
        ],
        aff: 12,
        flag: 'marigold_boundaries',
        end: true,
      },
      firm_fail: {
        text: [
          '@you Marigold, this isn\'t — you can\'t —',
          'You fumble the words. She tilts her head, her smile fixed in place.',
          '@marigold Can\'t what, silly? Can\'t love you? Hehe. That\'s the only thing I *can* do. ♡',
          'She gathers up her flowers, one by one, and kisses you on the cheek, and skips away into the dark, humming.',
          'Maybe you\'ll try again when you know what to say.',
        ],
        aff: 4,
        end: true,
      },
      romantic: {
        text: [
          'Marigold\'s eyes light up like twin lanterns.',
          '@marigold YOU UNDERSTAND! You *understand!* I knew you would! I knew it! ♡ ♡ ♡',
          'She throws her arms around you so hard you hear something in your spine pop.',
          '@marigold I\'ll follow you even *more* now! I\'ll make *more* albums! Oh, I\'ll make you a whole *room!* ♡',
          'Somewhere in the back of your mind, a small voice whispers that you may have just made a terrible mistake.',
        ],
        aff: 10,
        end: true,
      },
      why: {
        text: [
          'She sits back down, slowly. The lantern light flickers.',
          '@marigold My parents left when I was little. Just walked out, one morning. I didn\'t see it coming. I didn\'t *watch closely enough.*',
          '@marigold So now I watch. Everyone. All the time. So nobody can ever surprise me like that again. And then you came along, and I wanted to watch you most of all.',
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
          '@marigold I wanted to show you something. Mr. Snips! Say hello!',
          'Mr. Snips, now wearing a tiny bow, waves a leaf.',
          '@marigold I\'ve been working really hard. I haven\'t followed you in four whole days. I only *thought* about following you, like, a hundred times. That\'s progress, right? ♡',
        ],
        choices: [
          { text: '"That\'s huge progress. I\'m proud of you."', go: 'proud', aff: 10 },
          { text: '"A hundred times? Only?" (tease her)', go: 'tease', aff: 6 },
        ],
      },
      proud: {
        text: [
          'She glows brighter than the night-lilies.',
          '@marigold Nobody\'s ever been proud of me before. Say it again? Slower? I want to press it into my album. ♡',
        ],
        next: 'closer',
      },
      tease: {
        text: [
          '@marigold Okay, it was two hundred. But I wrote you poems instead! Two hundred poems! They\'re all about your elbows. ♡',
        ],
        next: 'closer',
      },
      closer: {
        text: [
          'She steps close. Closer. Her hands find yours, warm and soil-rough.',
          '@marigold I know I\'m not normal, {name}. I know I\'m a lot. I\'m too much, probably. But I love you so much that it makes my whole chest hurt, like there\'s a garden growing in there with no room left.',
          '@marigold Can I... can I have you? Just for tonight? Just me, and nobody else in the whole world?',
        ],
        choices: [
          { text: '"Not just tonight." Kiss her.', go: 'kiss', aff: 12 },
          { text: '"I\'m yours, Marigold." [Charm check 4]', check: { stat: 'charm', dc: 4 }, pass: 'yours', fail: 'kiss' },
        ],
      },
      yours: {
        text: [
          'For a moment she just stares at you. Then something in her face changes — the frantic, too-bright edge melts away, and what\'s left is just a girl, very much in love, unbearably relieved.',
          '@marigold You mean it. You really, really mean it. I can tell. I can always tell.',
          '@marigold ...Then I don\'t have to hold on so tight anymore. Do I?',
        ],
        aff: 15,
        next: 'kiss',
      },
      kiss: {
        text: [
          "She kisses you like she's been planning it for weeks, which, you realize, she absolutely has. Every detail is perfect: the candles, the flowers, the soft blanket between the rose beds, the exact angle she tilts her head. She has clearly practiced on a mirror.",
          "Then her hands start trembling, and it stops being planned and becomes something real.",
          "@marigold I've thought about this so many times. Every night. I know exactly what I want. Is that scary? You can tell me it's scary.",
          "@you Tell me anyway.",
          "So she does, in a breathless whisper against your ear, and it is extremely specific and not at all scary. She unbuttons your shirt one button at a time, kissing each new inch of skin as if she's pressing it into her album. Her white dress slips from her shoulders and pools among the petals. Petals stick to your skin and hers.",
          "She's intense in the way only Marigold can be. She watches your face constantly, memorizing every reaction, and repeats anything that makes you gasp until you're begging. She keeps whispering your name like a promise. Every so often she grips your shoulders tightly and says *mine*, so fiercely it should be frightening. It isn't. Not tonight.",
          "@marigold Look at me. Only me. Nobody else in the whole world. ♡",
          "@you Only you.",
          "In the candlelight, among the roses, you stop minding at all...",
          "...",
          "Later, you lie together among the petals. She's tracing hearts on your chest with a fingertip.",
          "@marigold I'm still going to press a flower from tonight. Just one. For the album.",
          "@you Just one?",
          "@marigold ...Maybe a few. ♡",
          "From under his cloth in the corner, Mr. Snips makes a sound suspiciously like a contented sigh.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake in the greenhouse to sunlight through glass and the smell of roses. Marigold is sitting beside you, fully dressed, chin on her knees, watching you. You get the feeling she's been doing it for some time.",
          "@marigold Good morning! You sleep on your left side, you sigh twice before you wake up, and you said \"five more minutes\" to a rose. It was adorable. I wrote it down. ♡",
          "She holds up her album. There's a new page, with a single red rose pressed flat. The tag reads: *Day 1. Forever.*",
          "Then she bites her lip.",
          "@marigold I didn't follow you home last night, because you didn't *go* home. So that counts as not following. Right? I've been really good. Am I being good?",
        ],
        choices: [
          { text: "\"You're being wonderful. Come back down here.\"", go: "wonderful", aff: 6 },
          { text: "Gently: \"You're doing great. Now let me watch *you* for a while.\"", go: "watch", aff: 6 },
          { text: "\"Five more minutes?\" (to her, this time)", go: "five", aff: 5 },
        ],
      },
      wonderful: {
        text: [
          "She curls up against you with a happy little noise, like a kettle reaching a very satisfying boil.",
          "@marigold Wonderful. I'm *wonderful.* Nobody has ever called me wonderful. I'm putting it on a tag.",
          "She does. It's very small, very neat, and pinned to the inside of your collar. You find it three days later and don't take it out.",
        ],
        end: true,
      },
      watch: {
        text: [
          "She blinks. Nobody has ever wanted to watch *her.* She goes pink and fidgets and doesn't know where to put her hands.",
          "@marigold That's — oh. Is this what it feels like? It's very — I feel very — *seen.* Is that why you get flustered when I do it?",
          "@you Exactly why.",
          "@marigold ...Oh. I'll try to do it less. Maybe. A *little* less. ♡",
          "It's the most self-aware thing you've ever heard her say. You kiss her for it. She presses that, too.",
        ],
        end: true,
      },
      five: {
        text: [
          "She giggles and wriggles back down under the blanket with you.",
          "@marigold Five minutes. I'll count. I'm an *excellent* counter.",
          "It's considerably more than five minutes. She counts out loud the entire time and loses track on purpose somewhere around three hundred.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Marigold has claimed the very top of the festival hill. She has surrounded the spot with a ring of potted flowers. She has also, you notice, placed Mr. Snips at the edge of the ring, facing outward, like a guard dog.',
          '@marigold Nobody\'s allowed in the circle except us! I asked very nicely! ♡ Most of them listened.',
          'You sit with her on a blanket strewn with petals. She snuggles under your arm, and when the first star falls, she gasps like a child.',
        ],
        next: 'vow',
      },
      vow: {
        text: [
          '@marigold The legend says we\'ll be together forever now. Forever and ever. Bound by the stars.',
          '@marigold ...I would have made sure of it anyway. But this is nicer. ♡',
          '@marigold I love you, {name}. I loved you first, and I\'ll love you longest, and I\'ll love you hardest. That\'s a promise. A marigold promise.',
          'She kisses you as the sky fills with falling light, and for once, she doesn\'t grip too tight at all.',
        ],
        next: 'epilogue',
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
    },
  },
});

/* ------------------------------------------------------------------ Marigold's jealousy event & bad end */
FL.addEnding('greenhouse', 'Locked in the Greenhouse', 'Marigold Bad Ending', '#7a5a10');

FL.addScene('marigold_jealous', {
  start: {
    text: [
      'You\'re walking home in the evening when a hand grabs your sleeve and pulls you into an alley. It\'s Marigold. She\'s smiling, very widely. Her pruning knife is in her other hand.',
      '@marigold Hi! ♡ Hi, hi, hi. I saw you today. With *her.*',
      '@marigold You were laughing. You were so close. You let her touch your arm. I counted. Six times. Six. ♡',
      '@marigold Is she prettier than me? Is she nicer than me? Does she know your schedule? Does she know you take two sugars? I know you take two sugars. ♡ ♡ ♡',
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
      '@marigold ...I\'m sorry. I\'m sorry. It just gets so loud in my head when I think you\'ll leave.',
      '@marigold I\'ll be better. I\'ll try harder. Don\'t give up on me, okay? ♡',
    ],
    affTo: { marigold: 5 },
    end: true,
  },
  calm_fail: {
    text: [
      '@you Marigold, calm down, it\'s not what you think —',
      '@marigold That\'s what people *always* say! ♡',
      'She doesn\'t stab you. She just stares at you for a very long time, then turns and walks into the darkness, humming.',
      'In the morning, there\'s a single dead rose on your doorstep. Very neatly pruned.',
    ],
    affTo: { marigold: -10 },
    end: true,
  },
  knife: {
    text: [
      'She looks down at the knife as if she\'d forgotten it was there.',
      '@marigold Oh! This? I wasn\'t going to — it\'s for — ',
      'She lowers it. Her hands are shaking.',
      '@marigold ...I don\'t know what I was going to do. That scares me. Does it scare you?',
      '@you A little. But I\'m still here.',
      'She nods, very small, and lets you walk her home. She holds your hand so tightly the whole way that your fingers go numb.',
    ],
    end: true,
  },
  bad: {
    text: [
      'Marigold\'s smile doesn\'t change at all.',
      '@marigold Oh. Okay! ♡ I understand.',
      'Something sweet-smelling puffs into your face — a crushed blossom from her apron pocket. Your knees go weak. The world goes soft and golden at the edges.',
      '@marigold Sleeping-poppy. It\'s alright. It doesn\'t hurt. It\'s just so you\'ll rest.',
      '@marigold I\'ve made you a room, you see. In the greenhouse. With all the flowers. And a lock. ♡',
    ],
    next: 'bad2',
  },
  bad2: {
    text: [
      '*Some time later...*',
      'The greenhouse is very beautiful. You have to admit that. The roses bloom year-round. The night-lilies glow. There are always fresh pancakes, and the tea always has exactly two sugars.',
      'Marigold visits every morning and every evening and sings to you, the way she sings to her flowers. Mr. Snips guards the door. He is very loyal.',
      'People in town say the adventurer who arrived in spring must have moved on. Marigold agrees, very sadly, when they ask. And then she goes home and tells you all about it.',
      '@marigold Nobody will ever take you from me now. Isn\'t that wonderful? ♡',
      '@narrator ...I did say one of them had a very large knife. Maybe set some boundaries next time, darling.',
    ],
    ending: 'greenhouse',
  },
});

FL.addEvent({
  id: 'marigold_jealous',
  slot: 2,
  scene: 'marigold_jealous',
  priority: 10,
  cond: function (s) {
    const m = s.chars.marigold;
    if (m.stage < 2 || m.stage >= 4) return false;
    return FL.charOrder.some(function (id) { return id !== 'marigold' && s.chars[id].stage >= 3; });
  },
});
