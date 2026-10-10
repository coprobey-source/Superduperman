FL.addCharacter({
  id: 'kit',
  name: 'Kit Whiskerwhit',
  short: 'Kit',
  trope: 'Genki Catgirl Thief',
  color: '#ff9fce',
  favStat: 'wits',
  endingTitle: 'Nine Lives, One Heart',
  teaser: 'A blur of pink hair and a striped tail darts through the crowd. Your pockets feel lighter.',
  blurb: 'A bubbly, hyperactive catgirl pickpocket with quick paws, quicker wits, and absolutely no concept of personal property. She steals for fun, gives most of it to the street kids, and gets bored of anyone who can\'t keep up with her tricks.',
  schedule: ['market', 'square', 'tavern'],
  gifts: { love: ['fish', 'yarn'], like: ['gem', 'plushie', 'mirror'], hate: ['ale'] },
  giftLines: {
    love: ['Her pupils go huge and round. Her tail shoots straight up.', '@kit FOR ME?! Mrrrow! You\'re the best! The BEST! I didn\'t even have to steal it!', 'She pounces on it, rolls on her back, and kicks it with her feet. She is purring so loud people turn to look.'],
    like: '@kit Ooh, shiny! Mine now! ...Wait, you *gave* it to me? That\'s weird. That\'s nice! It feels different when you don\'t steal it. Tingly!',
    neutral: '@kit Huh. Okay! I\'ll put it in the pile. I have a pile. It\'s a *big* pile.',
    hate: ['She sniffs it and her whole face scrunches up.', '@kit Bleh! Wet and bitter and smelly! Like a bath! But worse! *Why!*'],
  },
  talk: [
    ['@kit Heya! Guess what I stole today! No, guess! ...Wrong! It was the mayor\'s left shoe! Just the left one! He\'s been hopping all morning! Nyahaha!'],
    ['She appears upside down, hanging from an awning by her knees.', '@kit You look bored! Wanna race me across the rooftops? Loser buys fish! You\'ll lose! It\'ll be great!'],
    ['@kit Did you know I can fit through any gap as big as my head? It\'s a cat thing! It\'s great for burglary! And for getting stuck in fences!'],
    ['She hands you back your own coin purse. You didn\'t notice it was gone.', '@kit You\'re getting better! That one took me almost three whole seconds!'],
    ['@kit Sometimes I give stuff to the orphans at the old mill. Shh! It ruins my reputation! I\'m a *dastardly* thief! ...They named a kitten after me.'],
    ['She\'s curled up in a patch of sun on the fountain\'s edge, half asleep.', '@kit Mmmrrr... five more minutes... come sit in the warm spot... it\'s the best spot...'],
    ['@kit Sooo, are we friends? Like, real friends? I don\'t have a lot of those. People get mad when you steal their stuff. Weird, right?'],
  ],
  afterTalk: [
    ["Your coin purse is gone. In its place is a note: *IOU 1 coin purse. Collect in person. Attic. Tonight. Bring yourself. ♡ K*"],
    ["@kit I haven't stolen anything in THREE DAYS. Except your socks. And your shirt. And your heart, obviously. Nyahaha! ...That was cheesy. I've been practicing it."],
    ["She sidles up close and whispers in your ear.", "@kit I found a new rooftop. It's really high and really private and the stars are *so* bright. Just saying. No reason. Totally no reason."],
    ["@kit The orphans asked why I'm so happy lately. I told them I found the biggest treasure in Clichéton. They asked if they could see it. I said NO, it's MINE."],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'A young woman in a patched green jacket cannons into you in the busy market, nearly knocking you off your feet. Bright pink hair, a pair of triangular cat ears, a long striped tail swishing behind her.',
          '@kit Oopsie! Sorry-sorry-sorry! Clumsy me! Have a great day, stranger!',
          'She bounces off into the crowd, tail waving. You pat your pocket.',
          'Your coin purse is gone.',
        ],
        aff: 10,
        gold: -10,
        choices: [
          { text: 'Figure out where she\'ll run and cut her off. [Wits check 1]', check: { stat: 'wits', dc: 1 }, pass: 'cutoff', fail: 'chase' },
          { text: 'Chase her!', go: 'chase' },
          { text: 'Shout "Hey, cat girl! You dropped your tail!"', go: 'trick' },
        ],
      },
      cutoff: {
        text: [
          'She\'s fast, but she\'s heading for the alley behind the bakery — the only shortcut out of the market with an awning low enough for a climber. You take the long way around and arrive first.',
          'She skids around the corner and straight into you.',
          '@kit Mrrowr?! How did you — nobody\'s ever — you *guessed my route?!*',
          'Her ears perk up. Her eyes sparkle.',
          '@kit That is SO COOL. Okay, okay, here\'s your purse. Plus interest! I took a gumdrop from the baker on the way. You can have half.',
        ],
        aff: 8,
        gold: 12,
        next: 'name',
      },
      chase: {
        text: [
          'You chase her through the market, over a fruit cart, under a horse, and up a drainpipe. She is *much* better at this than you.',
          'Eventually you find her sitting on a rooftop, swinging her legs, tossing your coin purse up and down.',
          '@kit Nyahaha! You\'re slow but you\'re *stubborn!* Nobody\'s ever chased me this far before! That\'s worth something!',
          'She tosses the purse back to you. It\'s lighter than before.',
          '@kit I kept a finder\'s fee. For the cardio.',
        ],
        gold: 5,
        next: 'name',
      },
      trick: {
        text: [
          'She stops dead in the middle of the crowd and whips around to look at her tail. It\'s there. Of course it\'s there.',
          '@kit ...HEY! That\'s a mean trick! I fell for it! Nobody makes me fall for tricks!',
          'She marches back over, pouting, and drops your coin purse into your hand.',
          '@kit Okay, you win this time. But only because that was *funny.*',
        ],
        aff: 6,
        gold: 10,
        next: 'name',
      },
      name: {
        text: [
          '@kit I\'m Kit! Kit Whiskerwhit! Thief extraordinaire, rooftop runner, champion napper! Who are you?',
          '@you {name}.',
          '@kit {name}! I like that! It\'s got a good bounce to it!',
          'She leans in very close and sniffs your cheek.',
          '@kit You\'re interesting. I like interesting. Most people are boring as a wet sock. See ya around, {name}! Watch your pockets! Nyahaha!',
          'She\'s gone in a flash of pink. A moment later, you realize she\'s also taken your handkerchief.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Kit drops from an awning directly in front of you, landing on all fours.',
          '@kit Psst! {name}! Wanna do a heist? A real one? With me?',
          '@you A heist?',
          '@kit Lord Pomfrey — the fat noble with the mustache — stole a necklace from old Granny Hobb. It was her dead husband\'s wedding gift. He "confiscated" it for "back taxes." It\'s in his study. We\'re gonna steal it back!',
          '@kit I need a lookout! Someone smart! Please please pleeeease?',
        ],
        choices: [
          { text: '"I\'m in. But we do it smart — I\'ll plan the route." [Wits check 2]', check: { stat: 'wits', dc: 2 }, pass: 'plan', fail: 'improvise' },
          { text: '"Let\'s just wing it!"', go: 'improvise' },
        ],
      },
      plan: {
        text: [
          'You spend an hour casing Pomfrey\'s townhouse. Guards change shifts at sundown. The study window is latched but the latch is old. The dog is fat and lazy and loves sausage.',
          'The heist goes like clockwork. You distract the dog. Kit slips in through the window. Ninety seconds later, she\'s back out, clutching a silver necklace, grinning ear to ear.',
          '@kit That was PERFECT! That was the smoothest job I\'ve ever done! You\'re a *genius!* A sneaky genius!',
          'She\'s so excited she tackles you into a hedge.',
        ],
        aff: 10,
        next: 'granny',
      },
      improvise: {
        text: [
          'It goes badly. Then it goes worse. The dog wakes up. A guard sees you. Kit trips an alarm bell. You end up fleeing across three rooftops with half the Pomfrey household in pursuit, while Kit cackles the entire time.',
          'But somehow, at the end of it, Kit is holding up a silver necklace in the moonlight.',
          '@kit Nyahaha! That was a DISASTER! That was the most fun I\'ve had in YEARS!',
        ],
        aff: 6,
        next: 'granny',
      },
      granny: {
        text: [
          'You return the necklace to Granny Hobb together. The old woman weeps and kisses you both on the cheek and makes you take a whole basket of fish pie.',
          'Afterward, you sit together on the roof of the bakery, sharing the pie. Kit\'s tail is curled around your ankle. You don\'t think she\'s noticed.',
          '@kit So... you didn\'t think it was weird? That I steal stuff and then give it back?',
        ],
        choices: [
          { text: '"I think it\'s the best kind of stealing."', go: 'best', aff: 6 },
          { text: '"Why do you do it, Kit?"', go: 'why', aff: 7 },
        ],
      },
      best: {
        text: [
          '@kit RIGHT?! It\'s like being a hero, but with more climbing!',
          'She flops sideways onto your lap and starts purring. She definitely notices this time. She doesn\'t move.',
        ],
        end: true,
      },
      why: {
        text: [
          'Her ears droop a little.',
          '@kit When I was a kitten, nobody gave me anything. I had to steal everything. Food. Blankets. Shoes. The other street kids too.',
          '@kit So now... I just figure, nobody should have to feel like that. And the people who\'ve got too much won\'t miss a little bit.',
          'She shrugs, but her tail tightens around your ankle.',
          '@kit Anyway! That\'s boring! More pie!',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'The rain comes out of nowhere — a sudden, drenching summer downpour. You duck under a shop awning. A moment later a sopping pink shape hurls itself under there too, hissing.',
          'Kit is soaked to the bone. Her ears are plastered flat. Her tail looks like a wet rope. She is the most miserable creature you have ever seen.',
          '@kit Water. Water from the *sky.* Why does the sky do this. What did I ever do to the sky.',
        ],
        choices: [
          { text: 'Wrap your jacket around her.', go: 'jacket', aff: 8 },
          { text: 'Try very hard not to laugh. Fail.', go: 'laugh', aff: 4 },
        ],
      },
      jacket: {
        text: [
          'You drape your jacket over her shoulders. She stops hissing. She looks up at you with huge, wet eyes.',
          '@kit ...Oh. It\'s warm. It smells like you.',
          'She burrows into it until only her nose and ears are poking out.',
        ],
        next: 'dry',
      },
      laugh: {
        text: [
          'You snort. She glares. You try to stop. A little giggle escapes.',
          '@kit I will steal ALL of your socks. *All of them.*',
          'But then she sneezes, a tiny, ridiculous *mew* of a sneeze, and you both burst out laughing.',
        ],
        next: 'dry',
      },
      dry: {
        text: [
          'The rain shows no sign of stopping. Eventually, Kit leads you by the hand through the downpour to her hideout: a cozy attic above an abandoned hatmaker\'s, piled with cushions and blankets and what is clearly a very large hoard of stolen shiny things.',
          'She stands dripping in the middle of the room, shivering.',
          '@kit Um... can you... dry my hair? Cats can\'t reach behind their ears. It\'s a whole thing.',
        ],
        choices: [
          { text: 'Dry her hair gently with a towel, careful around the ears.', go: 'towel', aff: 10 },
          { text: 'Notice one of the stolen trinkets is a framed drawing of you. [Wits check 3]', check: { stat: 'wits', dc: 3 }, pass: 'drawing', fail: 'towel' },
        ],
      },
      towel: {
        text: [
          'You sit on the cushions with her between your knees and rub her hair dry with a soft towel. When you get to her ears, she starts purring — a deep, rumbling, helpless purr that she seems completely unable to control.',
          '@kit Mrrrrrrrr... that\'s... cheating... mrrrr...',
          'She leans back against your chest. You keep going long after her hair is dry.',
          '@kit {name}? You\'re my favorite person. Out of everyone. In the whole town. Don\'t tell the orphans.',
        ],
        end: true,
      },
      drawing: {
        text: [
          'Pinned to the wall above the cushions, between a gilded spoon and a stolen weathervane, is a charcoal sketch. Of you. Laughing. It\'s actually quite good.',
          '@you Kit... did you steal this?',
          'Her ears shoot straight up, then flatten.',
          '@kit Nooo! I drew it! I watched you at the fountain and I drew it! I\'m not a *creep*, I just — you were laughing at something and I didn\'t want to forget it —',
          '@kit Everything in this room is something I didn\'t want to lose. That\'s why it\'s all here. And I didn\'t want to lose *you*, so... drawing.',
          'She hides her face in her towel. You sit beside her and dry her hair, and she purrs so hard the cushions vibrate.',
        ],
        aff: 12,
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Kit isn\'t in any of her usual spots. Eventually you find a note pinned to your door with a fish-shaped hairpin: *come to the attic tonite!!! SECRET!!! (not a heist) (ok kind of a heist) — K ♡*',
          'The attic is lit with dozens of stolen candles. Kit is sitting cross-legged on the cushions, uncharacteristically still, holding a tiny tarnished locket.',
          '@kit This is the first thing I ever stole. I was six. It was from a lady who dropped it in the street. I tried to give it back, but she was gone.',
          '@kit I\'ve kept it my whole life. It\'s the most important thing I own.',
          'She holds it out to you.',
          '@kit I want you to have it. Because you\'re the most important thing I own now. — I mean! Not *own!* You know what I mean! *Nyaaa!*',
        ],
        choices: [
          { text: 'Accept the locket and put it on.', go: 'accept', aff: 10 },
          { text: '"Open it first. What\'s inside?" [Wits check 4]', check: { stat: 'wits', dc: 4 }, pass: 'inside', fail: 'accept' },
        ],
      },
      inside: {
        text: [
          'She opens it. Inside, where a portrait might once have been, is a tiny scrap of paper in a child\'s crooked handwriting: *SOMEONE WHO STAYS.*',
          '@kit I wrote that when I was six. It was what I wanted most. More than food, even.',
          '@you And now?',
          'She looks at you, and her eyes are shining.',
          '@kit Now I found them.',
        ],
        aff: 12,
        next: 'accept',
      },
      accept: {
        text: [
          "You fasten the locket around your neck. Kit watches you do it, and something in her face crumples and blooms at the same time.",
          "Then she pounces. She literally pounces, knocks you back into the cushions, and kisses you all over your face, quick and clumsy and delighted, purring the whole time.",
          "@kit Mine! Mine-mine-mine! The best thing I ever stole! And you *let me!*",
          "She slows down eventually. Her kisses get softer and deeper. Her tail winds around your waist. Her quick, clever thief's fingers find your buttons and have your shirt open before you notice they're there.",
          "@kit Ooh. Shiny. I mean — not shiny. *Better* than shiny.",
          "She's playful about all of it: nipping at your ear, pinning your wrists and then letting you roll her over, laughing breathlessly into your neck. When you find the spot at the base of her tail, she goes completely boneless and lets out a long, astonished *mrrrrrow* that she will deny forever.",
          "@kit Do that again. Do that *again.* — Don't stop, don't you *dare* stop, I'll steal everything you own —",
          "At one point you knock over a stolen candelabra and she has to put out a very small fire with a stolen tablecloth. Then she climbs back on top of you, purring loud enough to rattle the shiny things on the shelves, and nothing in the attic gets any quieter for a long time...",
          "...",
          "Afterward she curls up on your chest like a cat in a sunbeam, purring softly, her tail draped over your legs.",
          "@kit Hey. {name}.",
          "@you Mm?",
          "@kit I stole your shirt.",
          "You look down. She's wearing it. You have no idea when that happened.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake up because someone is sitting on your chest. Kit is perched there like a cat on a windowsill, wearing your shirt and nothing else, watching you with huge, delighted eyes.",
          "@kit You're awake! Finally! I've been awake for HOURS. Well. Twenty minutes. I stole your breakfast. Sorry. It was a very good breakfast.",
          "She looks down at you. Her ears go slightly pink at the tips.",
          "@kit So, um. Last night. That was... that was the best heist ever. Right? It wasn't just me? Tell me it wasn't just me.",
        ],
        choices: [
          { text: "\"Best heist ever. Want to plan the next job?\"", go: "next", aff: 6 },
          { text: "Reach up and scratch the base of her tail.", go: "tail", aff: 6 },
          { text: "\"Give me back my shirt.\"", go: "shirt", aff: 5 },
        ],
      },
      next: {
        text: [
          "Her tail shoots straight up.",
          "@kit A SEQUEL HEIST? Oh, oh, I have *ideas.* I have a whole list. I made it while you were sleeping. Number one is \"the bath at the inn has a really big tub.\"",
          "She produces an actual list, written on a stolen napkin. It's long. It's illustrated.",
        ],
        end: true,
      },
      tail: {
        text: [
          "Her whole body goes limp. She collapses on top of you with a purr so loud the windowpane rattles.",
          "@kit Cheating — that's *cheating* — mrrrrrr — you can't just — mrrrrrrr —",
          "She doesn't finish the sentence. She doesn't move for an hour. Breakfast, what's left of it, goes cold.",
        ],
        end: true,
      },
      shirt: {
        text: [
          "@kit Nope! Finders keepers. It's *mine* now. Possession is nine-tenths of the law. I read that on a wanted poster. Mine.",
          "She hugs it around herself and grins.",
          "@kit You can come try to steal it back, though. If you're quick enough.",
          "You are, eventually. It takes a while. She doesn't try very hard to stop you.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Kit finds you on the festival hill — or rather, she drops out of the tree above you and lands in your lap.',
          '@kit Got the best seat! Stole it from a very snooty couple. They\'ll live.',
          'She curls up against you, the locket glinting at your throat. When the stars begin to fall, she goes completely still, eyes huge, reflecting the whole sky.',
          '@kit Ohhh... it\'s so shiny...',
          '@kit Think I could steal one?',
          '@you A star?',
          '@kit Yeah! For you! I\'d climb up there and grab one!',
        ],
        next: 'promise',
      },
      promise: {
        text: [
          '@you You don\'t have to steal me anything, Kit.',
          '@kit I know. That\'s the weird part. I don\'t want to steal anything anymore. Not when I\'m with you. I already have the best thing.',
          'She kisses you under the falling stars, purring against your lips.',
          '@kit ...Okay, I still want to steal *some* things. I\'m not a *saint.*',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'Kit goes legitimate. Mostly. The Adventurers\' Guild hires her as their first ever "Recovery Specialist," retrieving stolen goods from people who stole them first. She is spectacularly good at it. Mira hates her paperwork.',
          'The orphans at the old mill get a real roof, warm beds, and a lot of very mysterious anonymous donations. One of the kittens there grows up into a very fat, very smug tomcat named Kit Junior.',
          'You live together above the old hatmaker\'s, in an attic full of cushions and shiny things. She still steals your socks. She still naps in every patch of sunlight. She still wakes you at dawn by sitting on your chest.',
          'And every night, before she falls asleep curled against you, she taps the locket at your throat and whispers the words inside it.',
          '*Someone who stays.*',
        ],
        ending: 'kit',
      },
    },
  },
});
