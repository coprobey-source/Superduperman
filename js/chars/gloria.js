FL.addSpeaker('mayor', 'Mayor Puddingham', '#c7a26b');

FL.addCharacter({
  id: 'gloria',
  name: 'Gloria',
  short: 'Gloria',
  trope: 'Bubbly Slime Girl',
  color: '#7be07b',
  favStat: 'wits',
  endingTitle: 'A Perfect Fit',
  endings: { gloria_professor: 'Professor Bloop', gloria_drain: 'Down the Drain (Happily)' },
  teaser: 'Something green, translucent and vaguely woman-shaped is humming as it oozes along the sewer wall. It waves.',
  blurb: 'A cheerful, gelatinous slime girl living in the town sewers, where she quietly eats all the filth and keeps Clichéton plague-free. Nobody knows she exists — or if they do, they scream. She is sweet, sticky, very huggable and desperately lonely. Clever people fascinate her: she wants to understand *everything.*',
  schedule: ['sewers', 'sewers', 'sewers'],
  gifts: { love: ['gem'], like: ['chocolate', 'cakes', 'plushie', 'fish', 'fork', 'yarn', 'mirror', 'comb', 'polish'], hate: ['rum', 'salts'] },
  giftLines: {
    love: ['@gloria:surprised Ooooh! It\'s so *sparkly!* Can I — can I keep it *inside?* Somewhere safe? Right in the middle?', '@gloria:happy *Bloop!* I\'m going to glow about this for a *week.*'],
    like: '@gloria:happy For me?! *Bloop!* Thank you! I\'m going to keep it right here.',
    neutral: '@gloria Oh! Thank you! *Glorp.* ...Hm. Tastes like nothing. I\'ll keep it anyway!',
    hate: ['She absorbs a little and immediately goes cloudy and wobbly.', '@gloria:sad Ooooh... *hic*... everything\'s... spinny... why are there three of you? I like *all* of you... *hic*...'],
    special: {
      gem: ['She swallows it whole. You can see the gemstone floating in the middle of her translucent chest, right where a heart would be, glittering green and blue.', '@gloria:happy Ooooh! Look! It\'s *inside* me! Now I have a sparkly heart! I\'m never going to digest it. *Never.*', 'She does a happy little wobble.'],
      fork: ["@gloria:happy A FORK! I *love* forks! They're so pointy and so *polite!* Spoons are just bowls with ambitions. Knives are rude. But forks!", "She absorbs it and arranges it carefully next to the others floating inside her. There are nine. They're lined up by size.", "@gloria:smug I'm going to be the best-set table in Clichéton."],
      mirror: ["@gloria:surprised Ooh! That's me! And *through* me is the wall! And through the wall is — no, just more wall. Hello, me!", "She spends a full minute making faces at herself, then tries on a nose. It's a very good nose. She changes it four times.", "@gloria:blush Which one do you like? ...That one? I'll keep that one. Just for you."],
      salts: ["She takes one sniff of the jar and goes pale. Well — paler green. Translucent mint.", "@gloria:sad S-salt. That's what the priest had. In the bucket. On the purge day.", "@gloria:surprised It smells *lovely,* though! Lavender! I'm sure it's very nice for *people.* Can you — can you put the lid on? And maybe hold me for a minute? Thank you."],
      polish: ["@gloria:surprised Nail polish! For *nails!* I don't — hold on —", "She concentrates very hard and grows ten tidy little fingernails. Then she pours the whole bottle in at once. It swirls through her like pink glitter in a snow-globe.", "@gloria:happy I'm *sparkly all over!* That's even better than nails!"],
      fish: ["@gloria:surprised A fish! Is it lost? Did it get lost? Oh, the poor thing, it's very far from the sea —", "@gloria:sad ...Oh. It's the *eating* kind. It's not lost. It's *finished.*", "She eats it very respectfully, with a little moment of silence first."],
    },
    repeat: "@gloria:happy Another one! I've got a whole collection now! Look, they're all floating together in a little row. *Bloop.* ...I do like it when you surprise me, though. Surprises make me fizzy.",
  },
  talk: [
    ['@gloria:happy Hiiii! *Bloop!* I cleaned the whole east tunnel today! It sparkles! Well, it doesn\'t *sparkle*, it\'s a sewer, but it\'s *less brown!*'],
    ['@gloria:blush I found a love letter in the drain! It was from a baker to a blacksmith. Oh, it was so romantic! I put it back very carefully so it would reach them.'],
    ['She forms a little hand from her body and pats your head.', '@gloria:happy You have such nice hair! It\'s so... *solid.* Everything about you is so solid. It\'s amazing.'],
    ['@gloria:smug People think slimes are just goo. But I have thoughts! Lots of them! They just float around in here, all squishy!'],
    ['@gloria:sad I tried to go to the market once. A lady screamed and hit me with a cabbage. So I ate the cabbage. Then she screamed more.'],
    ['@gloria:blush Can I hug you? I\'ll be really careful not to absorb you! I\'ve gotten very good at not absorbing people!'],
    ["@gloria:surprised Guess how many socks went down the drains this week! Guess!", "@gloria Forty-one! And not *one* pair! Where do the other ones go?! It's the greatest mystery of the sewers! I have a *map.*"],
    ["@gloria:happy A lady in a funny sailor collar came down here once and held out her sandal and shouted \"BE MY TAMED MONSTER!\" So I ate the sandal. I thought it was a present!", "@gloria:sad She ran away screaming. I've still got the sandal. Digested a *little.* I'd give it back if she asked."],
    ["She's holding a soggy book right up against the moss-light, very close to where her nose would be.", "@gloria:happy I'm reading about *geography!* Did you know there's a whole ocean? It's like a sewer, but with no walls, and the fish aren't lost?"],
    ["@gloria Do you want to know a secret? I can hear the whole town through the pipes. People singing in the bath, and arguing, and saying \"I love you\" into washbasins.", "@gloria:blush Clichéton says \"I love you\" four hundred and twelve times a day! I counted! It's my favorite thing to listen to. After you."],
    { if: 'gloria_smart', lines: ["@gloria:blush You worked it out. The very first time. You fell in me, and the first thing you thought was *arithmetic.*", "@gloria:happy I think about that a lot. Most people's first thought is \"AAAAH.\""] },
    { if: 'gloria_facts', lines: ["@gloria:happy The Mayor sent me a certificate! It says *With The Thanks Of A Grateful Town, For Not Letting Us All Die Of Plague.*", "@gloria:surprised I put it in the treasure room. Then I hugged it. Then I absorbed the frame by accident. It's fine! I'm keeping it inside now. Where it's safe."] },
    { if: 'gloria_grate', lines: ["@gloria:happy Martin comes and talks to the grate in the square every morning now! He tells me the weather. I tell him how many socks went missing. It's our *thing.*", "@gloria:blush He calls me \"the young lady in the drain.\" Nobody's ever called me a young lady. Or a lady. Or *in* anything, except trouble."] },
    { if: { stage: 3 }, lines: ["@gloria:blush I keep turning pinkish when you come in. Well — green-pink. Sort of brown. It's not a good color on me.", "@gloria The letters say that means I'm in love. Or that I ate a beetroot. I *did* eat a beetroot. But I'm fairly sure it's the love."] },
  ],
  afterTalk: [
    ["@gloria:happy I've been practising holding human shape for longer! Four hours now! I want to be able to walk with you in the sunshine. And then come back down here and be *squishy* with you."],
    ["She gives you a long, cool, tingly hug that leaves your clothes spotless and your knees weak.", "@gloria:smug That's a slime kiss. It's like a regular kiss but everywhere. You're welcome!"],
    ["@gloria:blush I found a love letter in the drain today and I read it and it was nowhere *near* as nice as last night. I put it back anyway. I hope they figure it out."],
    ["@gloria:blush The pool in my treasure room is warm now. I warmed it up. For two. Just saying! *Bloop.*"],
    ["@gloria:surprised I counted your heartbeats again last night. Thirty-two thousand and nine! That's six hundred more than last time!", "@gloria:smug Is that because you're getting healthier, or because of the tickly thing I did around three o'clock? *Science* needs to know."],
    { if: 'gloria_belt', lines: ["She does a little twirl so you can see your belt floating near her gem, buckled into a tidy loop.", "@gloria:smug I polish it every day. From the *inside.* It's the shiniest belt in all of Clichéton. You can't have it back."] },
    { if: 'gloria_comfy', lines: ["@gloria:happy You fell asleep on me again. You do it every time now. You just sort of *flop.*", "@gloria:blush You said I was comfortable, the first day. I didn't believe you. I believe you now. You *snore* on me. That's the best review I've ever had."] },
    { if: 'gloria_shape', lines: ["@gloria:happy I held human shape for *five hours* today! I walked all the way to the bakery! I bought a bun with *money!*", "@gloria:smug The baker only screamed a *little.* Then he gave me a second bun for free. I think that means we're friends."] },
    { if: 'gloria_date_harbor', lines: ["@gloria:sad I keep thinking about the sea. It went all the way to the edge of the world and it didn't have one single wall.", "@gloria:blush I want to go back. With you. And maybe... *in?* Just a little way. Holding your hand. So I don't get lost."] },
  ],
  dateFav: 'harbor',
  dates: {
    dinner: {
      start: {
        text: [
          "You're sitting in the corner booth at the Tipsy Wyvern when the floor drain beside your table starts to bubble. A green head pops up, followed by the rest of Gloria, who pours herself upward into the booth and into shape in a borrowed blue dress.",
          "@gloria:happy I came up the *kitchen pipe!* It was full of gravy! I ate the gravy! I'm sorry! I'm *so* sorry! It was *delicious!*",
          { if: { met: 'bettina' }, text: "Bettina, behind the bar, looks over, looks at the drain, and calmly hangs a *Wet Floor* sign on it.", else: "The tavern's owner, a handsome auburn-haired woman behind the bar, looks over, looks at the drain, and calmly hangs a *Wet Floor* sign on it." },
          "@gloria:surprised There's a *candle.* On the *table.* And *plates!* Plates are for food to sit on before it goes in you! I've read about them!",
        ],
        choices: [
          { text: "Order her one of everything on the menu.", go: 'everything', aff: 5 },
          { text: "Show her how to use a fork.", go: 'fork', aff: 4 },
          { text: "Pretend not to notice that she's eyeing the candle.", go: 'candle', aff: 1 },
        ],
      },
      everything: {
        text: [
          "The potboy brings stew, pie, bread, cheese, roast chicken and a pudding. Gloria absorbs each one in turn, very slowly, so she can taste it properly. You can watch the stew swirl around inside her and meet the pudding. It's oddly hypnotic.",
          "@gloria:happy Oh, the *pie!* The pie has *layers!* Things down the drain never have layers. They're all one layer, and the layer is *sadness.*",
          "She leaves the plates. They're spotless. She's very proud of that.",
        ],
        next: 'end',
      },
      fork: {
        text: [
          "You show her how to hold a fork. She forms a hand, with real fingers, and copies you exactly, tongue between her teeth in concentration. She spears a potato. She lifts it. She brings it to her mouth.",
          "The potato goes in. So does the fork. So, for a moment, does most of her hand.",
          "@gloria:surprised Oh! It — it went *in!* That's — I don't think that's how it goes.",
          "@gloria:happy But I *did* the fork part! I did it perfectly right up until the end! Can I keep this one? I'll add it to my set!",
        ],
        next: 'end',
      },
      candle: {
        text: [
          "You look away for one second. When you look back, the candle is gone, and Gloria is glowing from inside like a lantern, little wisps of steam curling off her shoulders.",
          "@gloria:sad It looked so *warm!* — oh — oh no, it's *still* warm — it's warm in a *bad* way —",
          "There is a sizzle and a puff of steam, and she coughs out a sad little stub of wax. Every regular in the tavern applauds. She takes a small, damp bow.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "When it's time to go, she pours herself back down the drain in a long happy ribbon, waving the whole way, and her head pops up one last time to say goodnight.",
          { if: { stage: 4 }, text: "@gloria:blush The pool's warm, by the way. In the treasure room. You could take the long way home. Down the stairs. Through the pipe. Into *me.* ...That came out wrong! That came out *exactly* right!" },
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          "You wait by the great marble fountain in the Moonlit Gardens. For a while nothing happens. Then the fountain's water turns gently, unmistakably green, and Gloria rises out of the basin with lily pads in her hair.",
          "@gloria:happy Hiiii! I came up the *fancy* pipes! The nobles have *very* clean drains. It's almost insulting.",
          "A passing countess shrieks and runs. Gloria waves at her cheerfully. Then she looks down at the bottom of the fountain basin, which is carpeted in coins.",
          "@gloria:surprised Why are there so many coins? Did they all fall? Are they all *lost?* Oh, I'll have to give them all back —",
        ],
        choices: [
          { text: "\"People throw them in to make wishes.\" Toss one into her.", go: 'wish', aff: 5 },
          { text: "Pick her a rose from the nearest hedge.", go: 'rose', aff: 4 },
          { text: "\"Help me fish them out. We'll be rich.\"", go: 'rich', aff: 1 },
        ],
      },
      wish: {
        text: [
          "You flip a copper into the air. She catches it in her middle with a soft *plip,* and it drifts down to float beside her gemstone heart.",
          "@gloria:surprised You — you made a wish. *On* me. I'm a wishing fountain now!",
          "@gloria:blush What did you wish for? No — don't tell me! The letters say if you tell, it doesn't come true. Or — I'll find out. It's *inside* me. I'll just — listen very hard.",
          "She goes very quiet and very still for a long moment, as though listening. Then she turns the brightest green you've ever seen.",
          "@gloria:blush ...Oh. *Oh.* That one's going to come true. I'm going to *make* it.",
        ],
        next: 'end',
      },
      rose: {
        text: [
          "You snap a red rose off a hedge and hold it out to her. She takes it very carefully in a newly formed hand, smells it, and then — of course — absorbs it.",
          "Slowly, from the middle outward, she flushes pink. Rose pink. All of her.",
          "@gloria:happy Look! I'm *rose-flavored!* I'm going to smell like a garden for a whole *day!* Smell me! No, *closer!*",
        ],
        next: 'end',
      },
      rich: {
        text: [
          "@gloria:sad Oh — but they're *wishes.* If we take them out, the wishes fall out too. And then where would they go?",
          "She gently pats the coins back into place, one by one, and looks at you with the gentle disappointment of somebody who has never once stolen anything that fell down a drain.",
          "@gloria:happy It's okay! You didn't know! Now you know! That's the best thing about knowing things!",
        ],
        next: 'end',
      },
      end: {
        text: [
          "You sit on the fountain's edge until late, her cool, damp weight slumped companionably against your side, humming. The fountain has never been cleaner. The gardeners will talk about it for years.",
          { if: { stage: 4 }, text: "@gloria:blush There's room in the basin for two, you know. It's a very big fountain. And it's very late. And I'm very good at making things *clean* afterwards." },
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          "You wait on the beach below Saltbreeze Harbor, beside the big storm drain where the town's water runs out to sea. Gloria comes out of it slowly, in human shape, holding the edge of the pipe like someone about to step off a cliff.",
          "Then she sees the sea.",
          "She doesn't say anything at all for a long time. The sun is going down into the water, and the whole huge shining width of it is gold and blue and green, and it reflects through her, so she glows the colors of the sunset.",
          "@gloria:surprised It doesn't have any *walls.*",
          "@gloria:sad It just keeps going. All the way to the edge. Everything I ever cleaned went *here.* For eleven years. And I never knew what it was going *to.*",
        ],
        choices: [
          { text: "Take her hand and wade in together.", go: 'wade', aff: 6 },
          { text: "\"What do you think is down there?\"", go: 'down', aff: 4 },
          { text: "Buy her some fish in paper.", go: 'fish', aff: 3 },
        ],
      },
      wade: {
        text: [
          "You kick off your boots and take her hand, and walk her into the shallows. The first wave comes in around her ankles and she squeaks.",
          "@gloria:surprised It's *salty!* Like the priest's bucket! — No — no, it's *different.* It's friendly salty. It's — it's *fizzy!*",
          "The waves go out and pull at her, very gently, and she clings to your hand and laughs and laughs, and her whole body sparkles with sea foam.",
          "@gloria:blush Don't let go. If you let go I might just keep going. And I'd rather stay here. With the one solid thing.",
        ],
        next: 'end',
      },
      down: {
        text: [
          "@gloria:happy Lost things! *Everything* that's ever been lost! Ships and rings and anchors and somebody's *teeth* — I'd bet there are hundreds of years of lost things, all down there in the dark, waiting for somebody to keep them safe.",
          "@gloria:sad Nobody's keeping them safe. Nobody's *counting* them.",
          "She gazes out at the water, very still, with the expression of someone being offered the most enormous and most wonderful job in the world.",
          "@gloria:blush ...Not yet, though. I've got *you* to keep safe first.",
        ],
        next: 'end',
      },
      fish: {
        text: [
          "You buy two portions of fish in paper from a stall on the pier and bring one down to her. She holds it, looks at it, and then looks at the sea.",
          "@gloria:sad It's so *close* to home.",
          "She walks to the edge of the water and very gently lowers it in, paper and all. It does not swim away, being fried. She waves at it anyway as it bobs off.",
          "@gloria:happy There. It's not lost anymore. ...Can I have *yours?*",
        ],
        next: 'end',
      },
      end: {
        text: [
          "You stay until the stars come out and the sea goes silver. She doesn't go back into the drain until the very last possible minute, and she looks over her shoulder at the water the whole way.",
          { if: { stage: 4 }, text: "@gloria:blush Next time, let's come at night. When it's empty. I want to show you what I can do in the *big* water. I've been thinking about it. In a lot of detail. *Scientific* detail." },
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          "It's a gorgeous, cloudless day in Whisperwood, which is a problem. Gloria arrives through a stream, in human shape, holding a lacy parasol she found in the drains, and she is already a little smaller than usual.",
          "@gloria:surprised The sun is so *warm!* It's lovely! It's — oh. Oh, I think I'm *evaporating.* A bit. Just around the edges.",
          "A little puff of steam rises off her shoulder. She looks at it with scientific fascination.",
          "@gloria:happy It's fine! It's *fine!* I've wanted to go on a picnic since the first letter I ever read! I'm not going to let a little *being-turned-into-vapour* stop me!",
        ],
        choices: [
          { text: "Hold the parasol over her all afternoon.", go: 'parasol', aff: 5 },
          { text: "Spread the blanket right next to the stream and splash her now and then.", go: 'stream', aff: 4 },
          { text: "\"You'll get used to it! Lie in the sun with me.\"", go: 'sun', aff: 1 },
        ],
      },
      parasol: {
        text: [
          "You take the parasol and hold it over her, and you keep holding it — through the bread, through the cheese, through the honey cakes, even when your arm starts to shake.",
          "@gloria:blush You don't have to keep — your arm is *wobbling!* Only *I'm* allowed to wobble!",
          "@you I'm fine.",
          "She looks up at you from the shade with an expression you've only ever seen on people reading the very best letters.",
          "@gloria:happy ...Nobody's ever *made shade* for me before.",
        ],
        next: 'end',
      },
      stream: {
        text: [
          "You spread the blanket right on the bank, and every time she starts to steam you flick a little stream water at her. She sighs happily every time, like a cat in a sunbeam.",
          "@gloria:happy This is the best invention! A picnic with *watering!* Do it again! Do it with your *foot!*",
          "By the end of the afternoon she's lying half in the stream like a lazy green river, eating honey cakes off your hand.",
        ],
        next: 'end',
      },
      sun: {
        text: [
          "She lies in the sun with you. For a while, she's fine. Then her voice starts getting higher. And higher.",
          "@gloria:surprised {name}? Is it me, or are you getting *bigger?*",
          "When you sit up, she's the size of a teacup and squeaking like a kettle. You scoop her up and run her to the stream, where she soaks for an hour and slowly regains her height.",
          "@gloria:sad I'm *fine!* I'm completely fine. I'm just going to be a tiny bit *shorter* for a few days. Don't tell anyone.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "When the sun goes down, she's back to full size, flushed bright green with happiness, and she wants to know the name of every bird and every flower and every single cloud.",
          { if: { stage: 4 }, text: "@gloria:blush You know, it's *much* cooler in the evening. And very private in this clearing. And I'm very good at keeping a blanket *clean.* ...I'm just listing facts! For science!" },
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'The sewers of Clichéton are exactly what you\'d expect: damp stone, echoing drips, and a smell that could strip paint. You\'re edging along a narrow walkway when your foot slips on something slick.',
          'You fall — not into the water, but into something soft, cool and wobbly that catches you with a loud *SPLORP.*',
          '@gloria:surprised Eep! Oh! Hi! You fell in me! I mean on me! I mean — hello!',
          'You\'re sitting, waist-deep, in a glistening green slime. As you watch, the slime rises up and forms itself into the shape of a woman: translucent emerald, curvy and shimmering, with a cheerful round face and a bob of jelly hair. She\'s blushing a darker green.',
          '@gloria:blush Sorry! Sorry! I was napping! Are you okay? You\'re not dissolving, are you? Please don\'t dissolve!',
        ],
        aff: 10,
        choices: [
          { text: '"I\'m okay! This is actually kind of comfortable."', go: 'comfy', flag: 'gloria_comfy' },
          { text: 'Scream. (Reasonable.)', go: 'scream' },
          { text: '"Wait — are you the reason the town doesn\'t smell?" [Wits check 1]', check: { stat: 'wits', dc: 1 }, pass: 'smart', fail: 'comfy' },
        ],
      },
      comfy: {
        text: [
          { if: '!gloria_comfy', text: '@you Are you the reason the — sorry. Lost my train of thought. You\'re very... comfortable.' },
          'Her face lights up like a lantern.',
          '@gloria:happy Really?! You think I\'m *comfortable?* Nobody\'s ever said that! People usually say "AAAAH" or "GET IT OFF ME" or "MY BOOTS!"',
          'She gently lifts you out of herself and sets you down on the walkway, perfectly dry. Your boots are spotless. Cleaner than they\'ve been in weeks.',
        ],
        aff: 6,
        next: 'name',
      },
      scream: {
        text: [
          'You scream. It echoes down every tunnel. She screams too, out of sympathy. Then you both stop and stare at each other.',
          '@gloria:sad ...Sorry. I always scream when other people scream. It seemed polite.',
          'She sets you down on the walkway very gently. You notice your boots are now extremely clean.',
        ],
        aff: 2,
        next: 'name',
      },
      smart: {
        text: [
          '@you Wait. A town this size should reek. There should be rats, plague, the works. But Clichéton\'s spotless. It\'s you, isn\'t it? You\'re eating all the filth.',
          'Her whole body goes perfectly still, then wobbles with astonishment from the edges inward.',
          '@gloria:surprised You *figured it out!* Nobody\'s ever figured it out! I\'ve been doing it for *eleven years* and nobody ever says thank you, because nobody ever *knows!*',
          '@you Well — thank you.',
          'She makes a sound like a happy kettle and wraps you in a gentle, cool, squishy hug.',
        ],
        aff: 8,
        mood: 'happy',
        flag: 'gloria_smart',
        next: 'name',
      },
      name: {
        text: [
          '@gloria:happy I\'m Gloria! I picked it myself. I found it on a lost birthday card in the drain. "Happy Birthday, Gloria!" And I thought, that\'s a happy name. I\'ll be that.',
          '@you {name}.',
          '@gloria:happy {name}! Oh, I\'ll remember that. I\'ll write it on the wall in glowing moss!',
          'She bobs up and down excitedly.',
          '@gloria:blush Will you come back? Please? You\'re the first person who\'s ever talked to me for this long! It\'s been three whole minutes!',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Gloria greets you with a hug that leaves you smelling of lemons. (She absorbed the dirt off you. She\'s very proud of this.)',
          '@gloria:happy I want to show you something! My treasure! Come, come!',
          'She leads you through winding tunnels to a dry chamber lit by glowing moss. Every surface is covered with lost things, neatly arranged: rings, coins, buttons, keys, spectacles, a hundred letters, a child\'s wooden horse.',
          '@gloria Everything that falls down the drains comes to me! I don\'t eat any of it. I keep it safe. In case people come looking. But they never do.',
          'She holds up a gold ring.',
          '@gloria:sad This one\'s my favorite. It\'s a wedding ring. It says "Forever, M." on the inside. I\'ve had it for a year. Someone must be so sad.',
          { if: 'gloria_smart', text: '@gloria:happy And you\'re the clever one! You worked out the cleaning thing in about four seconds! So you\'ll be *perfect* for a mystery!' },
        ],
        choices: [
          { text: 'Help her figure out who it belongs to. [Wits check 2]', check: { stat: 'wits', dc: 2 }, pass: 'detective', fail: 'detective_fail' },
          { text: '"Let\'s go ask around town together."', go: 'ask', aff: 6, flag: 'gloria_grate' },
        ],
      },
      detective: {
        text: [
          'You examine the ring. The goldsmith\'s mark belongs to a jeweler on Artisan\'s Row who retired decades ago. And "M" — you remember old Martin at the Temple, who wrote a love letter to his wife, Millicent, of fifty years.',
          'You track him down. When you hand him the ring, he bursts into tears. He lost it down a drain a year ago and thought it was gone forever. He hugs you. Then, when you explain who really found it, he walks to the nearest drain grate, kneels, and says "Thank you, Gloria" into it.',
          'Back in the sewers, Gloria is sobbing. Happy sobbing. It\'s a lot of liquid.',
          '@gloria:happy He said *thank you!* To *me!* Into the drain! I *heard* it!',
        ],
        aff: 10,
        flag: 'gloria_detective',
        next: 'end',
      },
      detective_fail: {
        text: [
          'You squint at the ring. You make a few guesses. They\'re all wrong. Eventually Gloria pats your head with a gentle squishy hand.',
          '@gloria:happy That\'s okay! You *tried!* Nobody else has ever even tried!',
          'She puts the ring back in its place of honor, carefully, and you can tell she\'s touched just that you cared.',
        ],
        aff: 5,
        next: 'end',
      },
      ask: {
        text: [
          '@gloria:surprised Together? Up *there?* In the *light?*',
          'She can\'t, not really. So you go up alone, ring in hand, while she peeks out of a drain grate in the square with one wobbly eye. After an hour of asking, you find the owner — an old man named Martin. He weeps. He thanks you.',
          '@you Thank Gloria. She kept it safe for a year.',
          'He looks at the drain grate. A small green hand waves at him. He waves back, bewildered.',
        ],
        next: 'end',
      },
      end: {
        text: [
          'Afterward, she sits with you in her treasure room, glowing softly in the moss-light.',
          '@gloria:happy Do you know, I think that was the best day of my whole life. And I\'ve had *eleven years* of days.',
          'She hesitantly forms a hand and rests it on top of yours. It\'s cool and soft and tingles slightly.',
          '@gloria:blush Is this okay? Holding hands? I read about it in a letter once.',
        ],
        choices: [
          { text: '"It\'s more than okay."', go: 'okay', aff: 7 },
        ],
      },
      okay: {
        text: [
          'Her whole body turns a slightly brighter green. A little gem of light pulses where her heart should be.',
          '@gloria:blush *Bloop.*',
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
          { if: 'gloria_grate', text: '@mayor Citizens! A monster has been spotted in our sewers! A *slime!* Witnesses report it waved at an old man! Today, we purge the menace!', else: '@mayor Citizens! A monster has been spotted in our sewers! A *slime!* Witnesses report it hummed at a washerwoman! Today, we purge the menace!' },
          'From somewhere deep in the tunnels, you hear a tiny, terrified *bloop.*',
          { if: 'gloria_grate', text: ['A small, wobbly voice whispers up through the grate beside your boot:', '@gloria:sad I *waved.* I knew I shouldn\'t have waved. It was the best wave of my whole life, and now there are *torches.*'] },
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
          { if: 'gloria_smart', text: '@you I worked it out the first time I fell in her. It took me about four seconds. It\'s taken this town eleven years.' },
          '@you If you purge her, the plague comes back by midsummer.',
          'The crowd goes very quiet. The priest slowly puts down his bucket of salt.',
          '@mayor ...Well. That puts rather a different spin on things.',
        ],
        aff: 12,
        flag: 'gloria_facts',
        next: 'meet',
      },
      plead: {
        text: [
          'You plead. You tell them about the ring, the letters, the eleven years of quiet work. The crowd mutters. The Mayor looks unmoved.',
          'And then a small, shaking, translucent green figure rises out of the drain behind you.',
          '@gloria:sad P-please don\'t hurt them. They\'re my friend. If you have to purge someone, purge me. Just... leave my treasure. Somebody might need it.',
          { if: { any: ['gloria_detective', 'gloria_grate'] }, text: ['There\'s a long silence. Then old Martin pushes to the front of the crowd, holding up his hand with a gold ring on it.', '"She found my wedding ring," he says. "Kept it a whole year. If you want her, you\'ll go through me."'], else: ['There\'s a long silence. Then an old washerwoman pushes to the front of the crowd, holding up a silver thimble.', '"My mother\'s thimble," she says. "Lost it down the drain ten years back. Found it on my windowsill last spring, clean as new. If you want her, you\'ll go through me."'] },
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
          '@gloria:sad You stood up for me. In front of everyone. In the *light.* Nobody\'s ever stood up for me.',
          '@gloria:blush I think — I think I love you, {name}. Is that allowed? For a slime?',
        ],
        choices: [
          { text: '"It\'s allowed. And I think I love you too."', go: 'love', aff: 10, flag: 'gloria_love' },
          { text: 'Hug her tight, slime and all.', go: 'hug', aff: 10 },
        ],
      },
      love: {
        text: [
          'Her body turns a bright, shining green, so bright the whole tunnel glows. She shapes her face very carefully, very precisely, and leans in and kisses you.',
          'It is cool and tingly and tastes faintly of mint, and she pulls back looking astonished.',
          '@gloria:surprised I did it! I did a kiss! Was it right? I practiced on a lamp post!',
        ],
        end: true,
      },
      hug: {
        text: [
          'You wrap your arms around her. You sink in a little. It\'s cool and soft and strangely wonderful, like hugging a summer rain.',
          '@gloria:surprised You\'re *hugging* me. On purpose. You\'re not even screaming.',
          '@gloria:blush *Bloooop.*',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Gloria has been practising. When you arrive in her moss-lit treasure room, she is standing in the middle of it — and she is much more *defined* than usual. A face with real features. Long, flowing hair. Fingers with knuckles. She\'s concentrating very hard.',
          { if: 'gloria_love', text: ['Behind her, across the whole far wall of the chamber, someone has written in enormous letters of glowing moss: *{name} SAID THEY LOVE ME.*', '@gloria:blush I ran out of moss for the full stop. I\'ll get more.'], else: '@gloria:blush You hugged me. In the tunnel. On purpose. I\'ve thought about that hug every single day since. I want to do the next thing after the hug.' },
          '@gloria Do I look... human? I\'ve been studying! I borrowed an anatomy book from the library drain!',
          'She wobbles a little at the edges, but she\'s beautiful: a shimmering emerald woman with a gemstone heart glowing in her chest.',
          '@gloria:sad I want to be with you. *Really* with you. Like in the letters. But I don\'t know if I can. I\'m not... solid.',
        ],
        choices: [
          { text: '"You don\'t have to be human. I love you the way you are."', go: 'asyouare', aff: 12 },
          { text: 'Help her hold her shape — talk her through it, piece by piece. [Wits check 4]', check: { stat: 'wits', dc: 4 }, pass: 'shape', fail: 'asyouare_try' },
        ],
      },
      asyouare_try: {
        text: [
          "You talk her through it, piece by piece: elbow, wrist, fingers. But every time she fixes one part, another slides. Her knees go first. Then an ear.",
          "@gloria:sad It's not working. It never works for long. I'm sorry, I'm so —",
          "@you Gloria. Stop. You don't have to be human. I love you as you are.",
        ],
        next: 'asyouare',
      },
      asyouare: {
        text: [
          'She stares at you. Then she lets go — and her careful human shape relaxes into her usual soft, cheerful, wobbly form.',
          '@gloria:surprised ...Really? Squishy me?',
          '@you Squishy you.',
          '@gloria:happy Oh, *good.* Holding that shape was giving me a headache. I don\'t even *have* a head!',
        ],
        flag: 'gloria_squishy',
        next: 'night',
      },
      shape: {
        text: [
          'You sit with her and talk her through it gently. Her hand — your hand on top of it, feeling the shape. Her shoulder. Her face, under your fingertips. She concentrates, and under your touch she becomes steadier, more certain, until she\'s holding her shape without wobbling at all.',
          '@gloria:blush I can feel where you\'re touching. I can feel *all* of it. It\'s like... like I know where I *end* now. Because you showed me.',
        ],
        aff: 14,
        flag: 'gloria_shape',
        next: 'night',
      },
      night: {
        text: [
          "Being with Gloria is unlike anything you could have imagined.",
          "@gloria:blush Can I — can I touch you everywhere? All at once? Slimes can do that. I've never wanted to before. I really, *really* want to now.",
          "@you Yes.",
          "She flows around you like warm water, cool at first and then warming to match your skin. Wherever she touches, she leaves a faint, fizzing tingle, like sparkling wine on the tongue. She slips under your clothes and they simply... aren't there anymore. She's absorbed them, very politely, and she sheepishly promises to give them back later.",
          "@gloria:surprised Sorry! Sorry! It just happened! Your shirt was in the way of the hug!",
          "She's endlessly adaptable and endlessly curious, delighted by every reaction, every gasp, every shiver. She shapes herself to fit you, then tries a different shape just to see what happens. She giggles constantly. She keeps saying *oh! oh, that's what that does!*, then trying it again, slower, with tremendous scientific dedication.",
          "@gloria:blush You're so *warm* inside — I mean — your *heart*, your heart is warm, I can feel it beating right through me — oh, it's going so fast —",
          "The gemstone in her chest glows brighter and brighter until it lights the whole room in shimmering green and blue, like being underwater in a sunlit sea. Her careful human shape dissolves entirely, and she becomes a warm, glowing, wordless tide around you...",
          "...",
          "Afterward you lie with her in her treasure room, half sunk into her like a hot spring that loves you back. She's humming. She has given back your shirt. It's folded neatly. It's also the cleanest it has ever been.",
          "@gloria:happy You know what I am? I'm a perfect fit. I can be any shape at all. And I picked the shape that fits *you.*",
          "She forms a hand and holds yours, very gently.",
          "@gloria:blush I think that's what love is. Picking the shape that fits.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake up floating. Gloria has formed herself into a warm, gently bobbing bed beneath you, and she's humming. Moss-light glows soft green on the treasure-room walls.",
          "@gloria:happy Good morning! You slept for nine hours! I counted your heartbeats. Thirty-one thousand, four hundred and six. I liked all of them.",
          "Her face forms up out of the slime beside your head, beaming.",
          { if: 'gloria_shape', text: "It's a very good face. A real one, with eyelashes and a little crease when she smiles, and it doesn't wobble at all. She holds it for you, proudly, the way she learned to last night under your fingertips." },
          "@gloria:smug Also, I absorbed your shoes by accident in the night. Here. They're *very* clean now. I don't think they've ever been this clean.",
          "Two spotless boots pop out of her, one after the other, and land on the floor with a squelch.",
          { if: 'gloria_comfy', text: "@gloria:blush You said I was comfortable. The very first day, when you fell in me. Was I still comfortable? Be honest! I can take feedback! I'm *very* absorbent!" },
          "@gloria:sad Was it... was last night okay? I've never done that with anyone. I was worried I was too squishy.",
        ],
        choices: [
          { text: "\"You were perfect. Exactly the right amount of squishy.\"", go: "perfect", aff: 6 },
          { text: "\"I'd like to stay here all day.\"", go: "stay", aff: 6 },
          { text: "Ask her to give you back your belt, too.", go: "belt", aff: 5, flag: 'gloria_belt' },
        ],
      },
      perfect: {
        text: [
          "Her whole body glows brighter, so bright it lights up the tunnel outside.",
          "@gloria:happy The *right amount?* Nobody's ever said I was the right amount of anything! People usually say \"too much\" and \"AAAH\" and \"get it off me!\"",
          "She wraps around you in a hug so warm and complete that you feel it in your bones.",
        ],
        end: true,
      },
      stay: {
        text: [
          "@gloria:surprised All day? In the *sewers?* With *me?*",
          "@you With you.",
          "She fizzes all over, a thousand tiny happy bubbles rising through her, and settles around you even more snugly, like a warm bath that hugs back. You stay all day. She tells you about every treasure in the room. You fall asleep again around noon, floating, and she hums the whole time.",
        ],
        end: true,
      },
      belt: {
        text: [
          "@gloria:surprised Oh! Um. Your belt.",
          "There's a long pause. Something shifts inside her, and you can see your belt floating near her gemstone heart.",
          "@gloria:blush ...Can I keep it? It's very nice. I like having something of yours in here.",
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
          { if: 'gloria_facts', text: 'Behind her walks the town physician, carrying a small velvet cushion with a medal on it, and behind *him* the Mayor, wig askew, puffing. "Two hundred and six cases," the physician keeps telling people. "Two hundred and six, down to none." Nobody has asked.' },
          'People don\'t scream. They wave. A little girl gives her a flower. Gloria swallows it. Everyone laughs, including her.',
          '@gloria:happy I came out! I came out into the *sky!* It\'s so *big!* Why didn\'t anyone tell me it was so big!',
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'She sits beside you on the grass. When the stars start to fall, they reflect inside her translucent body — so it looks like the starfall is happening *inside her*, too, swirling around the glowing gem of her heart.',
          '@gloria:surprised Look! Look! I\'m full of stars!',
          '@you You always were.',
          'She wobbles with joy and kisses you, cool and minty and tingling, and a thousand falling stars glitter through her like sunlight through a stained-glass window.',
          '@gloria:blush Forever, {name}. Like the ring said. *Forever.*',
        ],
        choices: [
          { text: 'Hold her hand and watch the stars together.', go: 'epilogue' },
          { text: '"You could come up here every day, you know. You could *learn* anything."', go: 'professor', if: ['gloria_shape', { any: ['gloria_smart', 'gloria_facts', 'gloria_detective'] }] },
          { text: '"Or I could come down there. For good."', go: 'drain', if: ['gloria_squishy', { any: ['gloria_comfy', 'gloria_belt', '!gloria_love'] }] },
        ],
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'The town builds Gloria a proper home: a beautiful house on the canal, with a large heated pool in the middle of the living room, connected by a private pipe to the sewers so she can still do her rounds. You live there with her.',
          'Her lost-and-found becomes an official town institution. People line up every Saturday to reclaim their treasures. Gloria hugs every single one of them. Most of them have learned to enjoy it.',
          'She still can\'t hold human shape for more than a few hours. She doesn\'t need to. Most evenings you sit in her pool together, and she curls around you like a warm green sea and tells you about everything she found in the drains that day.',
          { if: 'gloria_belt', text: 'Your belt still floats beside her heart. So do the next four. You have taken to wearing braces.' },
          { if: { any: ['gloria_detective', 'gloria_grate'] }, text: 'There\'s a gold ring floating in her chest now, right beside the gemstone. Martin gave it to her when his wife passed — "for safekeeping," he said. It says *Forever, M.*', else: 'There\'s a gold ring floating in her chest now, right beside the gemstone. Nobody ever came back for it. It says *Forever, M.*' },
          'She says she\'ll keep it until someone needs it. Then she looks at you, and glows.',
        ],
        ending: 'gloria',
      },
      professor: {
        text: [
          '@gloria:surprised *Anything?*',
          'She goes very still. Then, a little guiltily, she reaches into herself and pulls out a soggy, carefully folded pamphlet. It\'s the Arcane Academy\'s prospectus.',
          '@gloria:blush It came down the drain from the Dean\'s office. I\'ve read it four hundred times. They have a course in *hydrology.* That\'s the study of *water!* I\'m *made* of water! I\'d be the student *and* the textbook!',
          '@gloria:sad But I can only hold a shape for a few hours. Lectures are *long.* What if I melt into the floorboards in the middle of a sentence?',
          '@you You held it all night for me. Piece by piece. You said you knew where you ended.',
          'She looks down at her own hand, with its knuckles and its little fingernails, steady and sure in the starlight. It isn\'t wobbling.',
          '@gloria:happy ...I do, don\'t I? I know where I end. And I know where *you* start. Everything in between, I can *learn.*',
          'She stands up on the hill, in front of everyone, with stars falling through her, and announces to absolutely nobody in particular:',
          '@gloria:happy I\'M GOING TO *SCHOOL!*',
          'The whole hill cheers. She bursts into joyful tears and floods a picnic.',
        ],
        next: 'epilogue_professor',
      },
      epilogue_professor: {
        text: [
          '*Some time later...*',
          'Gloria enrols at the Arcane Academy that autumn, the first slime ever to do so. For the first term she attends lectures from a large glass tank at the back of the hall, so as not to seep into the floor. By the second term she walks in on her own two feet, in a borrowed gown, and sits in the front row.',
          'She asks an average of four hundred questions a lecture. The professors find this exhausting, then thrilling, then indispensable. She is the only student in history to correct a hydrology examiner on the behavior of water *from the inside.*',
          'Her thesis, *On the Self-Cleaning City; or, A Natural History of the Lost Sock,* is the most borrowed book in the Grand Library. Several copies have fallen down drains. They always come back. Cleaner.',
          'She becomes Clichéton\'s first Chief Engineer of Waterworks. Every town in the kingdom sends for her advice. She writes back to all of them, in beautiful handwriting, with lots of exclamation marks.',
          'The students call her Professor Bloop. She pretends to disapprove, and has it painted on her office door in gold.',
          'Every morning, she holds her shape and walks to the bakery with you in the sunshine, and pays for two buns with real money, and the baker doesn\'t scream at all. He just says, "Morning, Professor," and gives her the extra one.',
          'She says the best thing about knowing exactly where she ends is that she always knows exactly where you begin. And she always, always reaches for it.',
        ],
        ending: 'gloria_professor',
      },
      drain: {
        text: [
          '@gloria:surprised Down *there?* For *good?* But it\'s a *sewer!* It *smells!* — I mean, it doesn\'t, because of me, but *conceptually* it smells!',
          '@you It\'s where you are.',
          'Her careful human shape slips at the edges, then lets go entirely, and she pours down into a soft, glowing, wobbly heap in your lap, stars and all.',
          '@gloria:sad Everyone always wants me to come *up.* Up into the light, up into a house, up into a shape. You\'re the first person who ever wanted to come *down.*',
          '@you I liked it there. It was comfortable.',
          { if: 'gloria_comfy', text: '@gloria:blush You said that the very first day. Comfortable. You fell in me and you said I was *comfortable.* I kept the word. It\'s in here somewhere, next to the gem.' },
          'She lets out a whistle like the happiest kettle in the world, and then she cries so hard that the whole festival hill gets very briefly, very wonderfully, very cleanly wet.',
        ],
        next: 'epilogue_drain',
      },
      epilogue_drain: {
        text: [
          '*Some time later...*',
          'The town offers Gloria a house on the canal. She thanks them very politely and asks for the old cistern under the square instead.',
          'It takes the masons a year. When they\'re done, the great vaulted cistern beneath Clichéton is lined with glowing moss and hung with a thousand lanterns made from lost bottles, and the treasure room has grown into the Clichéton Museum of Lost Things, open Saturdays, entered by a spiral stair beneath the fountain. Queues stretch around the square.',
          'You are sworn in as the first human Warden of the Underworks. Your badge is a bottle cap. She made it herself. You learn every tunnel by heart. You learn to tell the hour by which bath in town is draining.',
          'She never holds human shape again unless she wants to, and mostly she doesn\'t. She stays squishy and enormous and wonderfully, gleamingly happy, and in the evenings she cradles you like a warm green sea and tells you everything she heard through the pipes.',
          { if: 'gloria_belt', text: 'She still has your belt. She has eleven of your belts now. You have stopped buying belts. You just wear her, mostly.' },
          'Children drop letters down the drains for her. She answers every one, in glowing moss, on the underside of the grates. When it rains in Clichéton, people look at the gutters and smile and say, "Gloria\'s busy."',
          'People sometimes ask whether you miss the sky.',
          'You tell them the truth. On a clear night, when the stars shine down through the grates and into the cistern water, she lights up from the inside with all of them at once, and you have never been far from the stars at all.',
        ],
        ending: 'gloria_drain',
      },
    },
  },
});
