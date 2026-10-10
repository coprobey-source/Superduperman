FL.addCharacter({
  id: 'kit',
  name: 'Kit Whiskerwhit',
  short: 'Kit',
  trope: 'Genki Catgirl Thief',
  color: '#ff9fce',
  favStat: 'wits',
  endingTitle: 'Nine Lives, One Heart',
  endings: { kit_phantom: 'The Phantom Paws' },
  teaser: 'A blur of pink hair and a striped tail darts through the crowd. Your pockets feel lighter.',
  blurb: 'A bubbly, hyperactive catgirl pickpocket with quick paws, quicker wits, and absolutely no concept of personal property. She steals for fun, gives most of it to the street kids, and gets bored of anyone who can\'t keep up with her tricks.',
  schedule: ['market', 'square', 'tavern'],
  gifts: { love: ['fish', 'yarn'], like: ['gem', 'plushie', 'mirror', 'polish'], hate: ['ale', 'salts'] },
  giftLines: {
    love: ['Her pupils go huge and round. Her tail shoots straight up.', '@kit:happy FOR ME?! Mrrrow! You\'re the best! The BEST! I didn\'t even have to steal it!', 'She pounces on it, rolls on her back, and kicks it with her feet. She is purring so loud people turn to look.'],
    like: '@kit:happy Ooh, shiny! Mine now! ...Wait, you *gave* it to me? That\'s weird. That\'s nice! It feels different when you don\'t steal it. Tingly!',
    neutral: '@kit Huh. Okay! I\'ll put it in the pile. I have a pile. It\'s a *big* pile.',
    hate: ['She sniffs it and her whole face scrunches up.', '@kit:angry Bleh! Wet and bitter and smelly! Like a bath! But worse! *Why!*'],
    special: {
      fish: [
        'She snatches the fish out of your hands before you have finished holding it out, sniffs it nose to tail, and makes a noise like a kettle having a religious experience.',
        '@kit:happy Morning catch! From the *north* pier! You can tell by the eyes. North pier fish have *smug* eyes!',
        "@kit:blush ...You got this for me. With money. From a person. On *purpose.* Nobody's ever bought me a fish before. I've only ever borrowed them. Permanently.",
      ],
      yarn: [
        '@kit:surprised Is that — is that RED WOOL —',
        'She does not finish the sentence. She is already on the cobbles. The yarn is already unraveled across half the square. A small crowd gathers to watch a grown woman lose a fight with a ball of string, and win, and lose again.',
        "@kit:blush ...Don't look at me. I'm *dignified.* Nyaa.",
      ],
      gem: [
        'She holds the sapphire up to the sun. Her pupils go to pinpricks, then huge, then pinpricks again.',
        "@kit:surprised This is a *real* one. Not paste! Not glass! I can tell, I've stolen *so* many fakes —",
        "@kit:happy I'm gonna sell it and buy the orphans a goat! ...No. I'm gonna keep it. For a week. *Then* the goat.",
      ],
      fork: [
        'She takes the fork, turns it over, and frowns.',
        "@kit:smug Wait. This is *my* fork. I stole this from the Tipsy Wyvern on Tuesday. And then you stole it out of my pile. And now you're giving it *back?*",
        "@kit:surprised ...You've been stealing from *me?* That's — that's the most romantic thing anyone's ever done! Nyahaha!",
      ],
      mirror: [
        'She looks into the gilded mirror. A pink-haired cat-eared woman looks back. Kit\'s tail puffs up to twice its size and she hisses at her own reflection.',
        "@kit:angry Who's THAT?! She's wearing my *jacket!*",
        "@kit:blush ...Oh. Oh, that's me. I knew that. I was testing *you.*",
      ],
      polish: [
        '@kit:surprised SPARKLY! It\'s so *sparkly!*',
        'She paints all ten of her nails on the spot, then the tip of her tail, then a stray cat that wandered too close and is now, against its will, extremely fabulous.',
        "@kit:happy Now everything I touch will sparkle! Including your pockets! Nyahaha!",
      ],
      salts: [
        'She unscrews the lid, sniffs, and drops the jar like it bit her.',
        "@kit:angry *Bath salts?!* That's — that's for — that's *water stuff!* That's *voluntary wet!*",
        '@kit:sad You want me to get *in* the water? On *purpose?* What did I ever do to you?',
      ],
    },
    repeat: "@kit:happy Another one?! You're spoiling me! I'm putting it in the pile next to the last one. They're a family now. They're gonna have little ones.",
  },
  talk: [
    ['@kit:happy Heya! Guess what I stole today! No, guess! ...Wrong! It was the mayor\'s left shoe! Just the left one! He\'s been hopping all morning! Nyahaha!'],
    ['She appears upside down, hanging from an awning by her knees.', '@kit:smug You look bored! Wanna race me across the rooftops? Loser buys fish! You\'ll lose! It\'ll be great!'],
    ['@kit:happy Did you know I can fit through any gap as big as my head? It\'s a cat thing! It\'s great for burglary! And for getting stuck in fences!'],
    ['She hands you back your own coin purse. You didn\'t notice it was gone.', '@kit:smug You\'re getting better! That one took me almost three whole seconds!'],
    ['@kit Sometimes I give stuff to the orphans at the old mill. Shh! It ruins my reputation! I\'m a *dastardly* thief! ...They named a kitten after me.'],
    ['She\'s curled up in a patch of sun on the fountain\'s edge, half asleep.', '@kit Mmmrrr... five more minutes... come sit in the warm spot... it\'s the best spot...'],
    ['@kit:sad Sooo, are we friends? Like, real friends? I don\'t have a lot of those. People get mad when you steal their stuff. Weird, right?'],
    [
      'She is sitting on top of the town notice board, swinging her legs and reading a wanted poster.',
      "@kit:angry They spelled my name wrong! *Kitt Wiskerwit!* And the drawing has a *mustache!* I do NOT have a mustache!",
      "@kit:smug ...The reward went up, though. Fifteen gold! I'm worth fifteen gold now. I'm gonna turn myself in and keep the money.",
    ],
    [
      "@kit Did you know cats can't taste sweet things? It's true! I read it! Well. Someone read it to me. Well. I overheard it.",
      "@kit:happy That's why I like *you!* You're not sweet. You're *savory.* Like a fish pie! A really interesting fish pie!",
      '@kit:blush ...That sounded better in my head.',
    ],
    [
      "@kit:surprised Okay. Important question. Very important cat question.",
      "@kit Why do *dogs* get to be \"who's a good boy\" and \"who's a good girl,\" and cats just get \"oh no, not on the table\"? I'm *always* on the table! I'm *great* on the table!",
      '@kit:sad ...Nobody ever says it.',
      'She looks at you. Hopefully. Extremely hopefully.',
    ],
    { if: 'kit_cutoff', lines: [
      "@kit:smug I changed all my escape routes because of you. *All* of them. You guessed the bakery alley on day one, so now I go over the hatmaker's, through the laundry lines, and down the chimney of a man named Gus.",
      '@kit Gus has been very understanding.',
      "@kit:happy Bet you can't guess the new one! ...You're thinking about it. Stop thinking about it! Nyaa!",
    ] },
    { if: 'kit_trick', lines: [
      'She is walking past you when she suddenly stops and whips around to check her tail.',
      "@kit:angry ...It's there. Of COURSE it's there. You said \"you dropped your tail\" ONE TIME, and now I check it, like, forty times a day!",
      "@kit:smug I've started doing it to the guards. \"Hey! You dropped your sword!\" Works every time. Their swords are always there. They always look. You *invented* that. You're a genius. A mean genius.",
    ] },
    { if: 'kit_why', lines: [
      "@kit:sad Hey. About what I said on the bakery roof. About when I was a kitten.",
      "@kit I don't tell people that stuff. Not even the orphans. I tell them I was raised by a pirate queen and a very large owl.",
      "@kit:blush ...You didn't make it weird. You just listened. I've been thinking about that a lot. Like, a weird amount.",
    ] },
    { if: { stage: 3 }, lines: [
      "She is sitting on the edge of the hatmaker's roof, swinging her legs, and pats the spot beside her without looking round.",
      "@kit:sad Can I tell you a secret? A real one. Not a heist one.",
      "@kit When people are nice to me, I count how long until they leave. In my head. One day. Three days. A week. I'm usually right.",
      "@kit:blush I stopped counting with you. I don't know when. I just looked up one day and couldn't remember what number I was on.",
    ] },
    { if: 'kit_drawing', lines: [
      "@kit:blush I drew another one of you. Don't look! ...Okay, look.",
      'It\'s a charcoal sketch of you asleep on a bench by the fountain. Curled up on your feet, in the corner, is a tiny cat with very familiar pink-tipped ears.',
      "@kit:happy That's me! I put me in! Is that allowed? Can you just put yourself in somebody's picture? I did it anyway. Nyahaha.",
    ] },
  ],
  afterTalk: [
    ["Your coin purse is gone. In its place is a note: *IOU 1 coin purse. Collect in person. Attic. Tonight. Bring yourself. ♡ K*"],
    ["@kit:smug I haven't stolen anything in THREE DAYS. Except your socks. And your shirt. And your heart, obviously. Nyahaha! ...That was cheesy. I've been practicing it."],
    ["She sidles up close and whispers in your ear.", "@kit:blush I found a new rooftop. It's really high and really private and the stars are *so* bright. Just saying. No reason. Totally no reason."],
    ["@kit:happy The orphans asked why I'm so happy lately. I told them I found the biggest treasure in Clichéton. They asked if they could see it. I said NO, it's MINE."],
    [
      'She drops from an awning and lands in your arms, bridal-style, as if she planned it. She absolutely planned it.',
      "@kit:happy Heya, gorgeous! Carry me to the tavern. I'm too tired to walk. I did eleven crimes this morning. Small ones. Nice crimes.",
      '@kit:blush ...Actually, just stand here a minute. You\'re warm. Five more minutes.',
    ],
    { if: 'kit_jacket', lines: [
      'She is wearing your jacket. The one from the rainstorm. It\'s far too big for her and she\'s rolled the sleeves up six times.',
      "@kit:smug What? It's *mine.* You put it on me. In the rain. That's a binding contract in cat law.",
      "@kit:blush ...It still smells like you. I sleep in it. Don't make it weird. *I'm* making it weird. Shh.",
    ] },
    { if: 'kit_sequel', lines: [
      "@kit:happy Okay, I crossed off number one on the sequel heist list. The big tub at the inn.",
      '@kit:blush Number two is "the big tub at the inn, again." I think the list might be broken. I\'m not fixing it.',
    ] },
    { if: 'kit_tailscratch', lines: [
      'She backs into you, very casually, until the base of her tail is right under your hand.',
      '@kit:smug Oops. My tail is just... there. Coincidence. Total coincidence.',
      "@kit:blush ...You know what to do. Don't make me *ask.* I'll steal your boots.",
    ] },
    { if: 'kit_date_harbor', lines: [
      "@kit:happy The fishmonger at the harbor waves at me now! Because of our date! He says any friend of yours gets the *good* sardines.",
      "@kit:smug He doesn't know I've been stealing his sardines for five years. He thinks we just met. I'm a *new woman.*",
    ] },
  ],
  dateFav: 'harbor',
  dates: {
    dinner: {
      start: {
        text: [
          'The Tipsy Wyvern\'s corner booth is candlelit and cozy and requires you to sit still on a bench for an entire meal. Kit lasts about forty seconds.',
          'Then she is sitting on the back of the bench. Then she is under the table. Then she is back in her seat, beaming innocently, and the candlestick is gone.',
          "@kit:happy This is so fancy! Look, they gave us *three* forks each! That's so many forks!",
          'There are now no forks on the table.',
        ],
        choices: [
          { text: 'Order her the fish platter and challenge her to eat it with a knife and fork, like nobility.', go: 'nobility', aff: 5 },
          { text: 'Steal her napkin while she\'s distracted. [Wits check 2]', check: { stat: 'wits', dc: 2 }, pass: 'napkin', fail: 'napkin_fail' },
          { text: '"Kit. Put the candlestick back."', go: 'candle', aff: 1 },
        ],
      },
      nobility: {
        text: [
          'The fish platter arrives. Kit produces a knife and fork from her sleeve, holds them like a duchess, and attempts it.',
          'It goes well for nine seconds. Then a sardine escapes across the table, and her instincts take over, and she pounces on it, and the fork is in her teeth and the knife is somewhere in the rafters.',
          '@kit:happy Nyahaha! Nobility is *stupid!* Hands are *right there!*',
          'She eats the rest with her fingers, purring loudly, and feeds you the best bits off the platter without seeming to notice she\'s doing it.',
          { if: { stage: 4 }, text: 'At some point she ends up on your side of the booth, then half in your lap, then entirely in your lap, still eating. The barman pretends not to see. He has seen worse. Mostly from her.' },
        ],
        end: true,
      },
      napkin: {
        text: [
          'While she is busy gazing adoringly at a passing tray of herring, you slip the napkin out from under her elbow and tuck it into your own sleeve.',
          'She reaches for it. Pats the table. Looks at you. Her ears shoot straight up.',
          "@kit:surprised You — you *lifted* that! From *me!* Right under my *nose!*",
          "@kit:blush That's so — that's — nobody's ever — okay, I need to sit on your side now. I need to be closer to whatever *that* was.",
          'She does. She spends the rest of dinner trying to steal it back. You spend the rest of dinner not letting her. It is the best dinner either of you has ever had.',
        ],
        aff: 6,
        end: true,
      },
      napkin_fail: {
        text: [
          'You reach very casually for her napkin. She catches your wrist without looking up from her herring.',
          "@kit:smug Nice try, sneaky. Your elbow went first. Your elbow always goes first.",
          "@kit:happy ...I'll teach you, though. After dinner. On a roof. Bring a napkin.",
        ],
        aff: 2,
        end: true,
      },
      candle: {
        text: [
          '@kit:sad Awww.',
          'She puts the candlestick back. A salt cellar falls out of her sleeve. Then a spoon. Then a small silver bell. Then a pocket watch, which the man at the next table recognizes with a shout.',
          "@kit:smug ...Okay, *that* one I was going to give back anyway.",
          'You spend the next ten minutes returning things to tables. It is still, somehow, a fun dinner. Kit eats your bread roll while you are gone.',
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          'The Moonlit Gardens are full of nobles\' houses, and Kit walks through them the way a child walks through a sweet shop: wide-eyed, slow, mentally pricing every window latch.',
          "@kit:smug That one's got a broken shutter. That one keeps the spare key under a frog. That one's *dog* is a *liar.*",
          'Then she sees the fountain. It is full of fat, glittering orange koi, gliding under the lily pads in the moonlight.',
          '@kit:surprised ...',
          'Her pupils go enormous. Her tail begins to twitch at the very tip.',
        ],
        choices: [
          { text: 'Distract the night watchman so she can look at the koi up close.', go: 'koi', aff: 5 },
          { text: '"Kit, no. Those are somebody\'s pets."', go: 'no', aff: 2 },
        ],
      },
      koi: {
        text: [
          'You ask the night watchman for directions to an address that doesn\'t exist. He is very patient about it.',
          'When you get back, Kit is lying on her stomach on the rim of the fountain, chin on her hands, nose an inch from the water, watching the fish with total, silent adoration. She hasn\'t touched a single one.',
          '@kit:blush I named them all. That one\'s Lord Pomfrey, because he\'s fat and he hogs the lily pad. That one\'s Granny Hobb. That little one\'s *you*, because he keeps coming back to look at me.',
          { if: { stage: 4 }, text: 'On the way out she pulls you onto a hidden bench behind the hedge and kisses you in the moonlight, her tail curled tight around your wrist, purring so loud the watchman glances over.' },
          "@kit:happy That was the best heist ever. I didn't steal *anything.* Isn't that weird? I feel great!",
        ],
        end: true,
      },
      no: {
        text: [
          '@kit:sad I wasn\'t gonna *eat* them. I was gonna... *look* at them. Aggressively.',
          'She sits on the edge of the fountain, sulking magnificently, tail lashing.',
          'Then a koi rises to the surface and blows a bubble at her. She makes a tiny, involuntary noise. You sit down next to her, and the two of you watch the fish for an hour.',
          "@kit:blush ...Okay, you were right. They're better in the water. Don't tell anyone I said you were right.",
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          'Saltbreeze Harbor at sunset. Fried fish in paper. Fishing boats unloading. The whole air smells of the sea and the catch.',
          'Kit stands at the head of the pier with her eyes closed and her arms out and breathes in like someone who has finally, at long last, arrived in heaven.',
          "@kit:happy This is the best place in the whole *world.* Why don't we live here? Let's live here! On the pier! In a barrel!",
          'A gull lands on a post nearby and looks at her fish. Kit opens one eye and looks back at the gull. It is a look that has been passed down through ten thousand generations of cats.',
        ],
        choices: [
          { text: 'Defend her fish from the gulls. [Might check 2]', check: { stat: 'might', dc: 2 }, pass: 'gulls', fail: 'gulls_fail' },
          { text: 'Give her your fish too.', go: 'share', aff: 5 },
        ],
      },
      gulls: {
        text: [
          'The gulls attack in force. You stand your ground at the end of the pier, waving your paper cone like a sword. Feathers fly. Gulls retreat. Not a single piece of fish is lost.',
          "@kit:surprised You — you *fought the birds!* For *my fish!*",
          'She looks at you as though you\'ve just slain a dragon on her behalf.',
          '@kit:blush Nobody\'s ever fought the birds for me. I always have to fight the birds by myself.',
          'You sit at the very end of the pier with your legs over the water and watch the sun go down, and she leans against you and purrs, and every so often hisses at a gull to keep the treaty fresh.',
        ],
        aff: 6,
        end: true,
      },
      gulls_fail: {
        text: [
          'You stand your ground. A gull takes your entire fish cone out of your hand in a single swoop. Another one takes your hat.',
          '@kit:surprised ...They took your *hat?*',
          'She laughs so hard she has to sit down on the pier. Then, still giggling, she tears her fish in half and gives you the bigger piece.',
          "@kit:happy Here. You'll need your strength. For the hat rescue. We leave at dawn.",
        ],
        aff: 3,
        end: true,
      },
      share: {
        text: [
          'You hold out your own paper cone of fish. Kit stares at it. Then at you.',
          "@kit:surprised You're giving me your *fish?* Your whole fish? But — it's *yours.* You didn't even make me steal it.",
          '@you I want you to have it.',
          'Her ears go flat, and her eyes go very bright, and for a moment you think she might actually cry over a cone of fried fish.',
          '@kit:blush ...We\'re sharing it. Half each. That\'s the rule now. I just made it up. It\'s the best rule.',
          'You share. She feeds you the crispiest bits. The sun goes down in gold, and she purrs the whole time.',
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          'The Whisperwood clearing is full of sunlight, long grass and butterflies. Kit takes one look and forgets the picnic basket exists.',
          '@kit:surprised *Butterflies.*',
          'She is gone. She is leaping. She is in the long grass, then in a bush, then briefly up a tree. She catches nothing. She is having the time of her life.',
          'Eventually she flops down on the blanket beside you, flushed and breathless, with a leaf on her head.',
          "@kit:happy That one was taunting me. They're *all* taunting me.",
        ],
        choices: [
          { text: 'Lie back in the sun and let her nap on you.', go: 'nap', aff: 6 },
          { text: 'Get up and chase butterflies with her.', go: 'chase', aff: 4 },
        ],
      },
      nap: {
        text: [
          'You lie back on the blanket in the warmest patch of sun. Kit looks at you for a long moment, then crawls over and curls up on your chest, exactly like a cat that has located the best spot in the house.',
          "@kit:blush Mmmrrr... this is the warm spot. You're the warm spot. You were the warm spot all along...",
          'She is purring before she finishes the sentence. She is asleep thirty seconds later.',
          'A butterfly lands on her ear. Her ear twitches. She doesn\'t wake. You don\'t move for two hours, and you would not have traded those two hours for anything in Clichéton.',
        ],
        end: true,
      },
      chase: {
        text: [
          'You run after her into the long grass. You are terrible at it. She is delighted that you are terrible at it.',
          "@kit:happy No, no, you have to *wiggle* first! Like this! Wiggle, *then* pounce!",
          'You wiggle. You pounce. You land face-first in a patch of clover, and a butterfly lands calmly on the back of your head.',
          "@kit:surprised YOU GOT ONE! Well. It got you. That counts! That *totally* counts!",
          'She tackles you back into the clover, laughing, and the butterfly flies away in disgust.',
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'A young woman in a patched green jacket cannons into you in the busy market, nearly knocking you off your feet. Bright pink hair, a pair of triangular cat ears, a long striped tail swishing behind her.',
          '@kit:happy Oopsie! Sorry-sorry-sorry! Clumsy me! Have a great day, stranger!',
          'She bounces off into the crowd, tail waving. You pat your pocket.',
          'Your coin purse is gone.',
        ],
        aff: 10,
        gold: -10,
        choices: [
          { text: 'Figure out where she\'ll run and cut her off. [Wits check 1]', check: { stat: 'wits', dc: 1 }, pass: 'cutoff', fail: 'chase' },
          { text: 'Chase her!', go: 'chase' },
          { text: 'Shout "Hey, cat girl! You dropped your tail!"', go: 'trick', flag: 'kit_trick' },
        ],
      },
      cutoff: {
        text: [
          'She\'s fast, but she\'s heading for the alley behind the bakery — the only shortcut out of the market with an awning low enough for a climber. You take the long way around and arrive first.',
          'She skids around the corner and straight into you.',
          '@kit:surprised Mrrowr?! How did you — nobody\'s ever — you *guessed my route?!*',
          'Her ears perk up. Her eyes sparkle.',
          '@kit:happy That is SO COOL. Okay, okay, here\'s your purse. Plus interest! I took a gumdrop from the baker on the way. You can have half.',
        ],
        aff: 8,
        gold: 12,
        flag: 'kit_cutoff',
        next: 'name',
      },
      chase: {
        text: [
          'You chase her through the market, over a fruit cart, under a horse, and up a drainpipe. She is *much* better at this than you.',
          'Eventually you find her sitting on a rooftop, swinging her legs, tossing your coin purse up and down.',
          '@kit:smug Nyahaha! You\'re slow but you\'re *stubborn!* Nobody\'s ever chased me this far before! That\'s worth something!',
          'She tosses the purse back to you. It\'s lighter than before.',
          '@kit:smug I kept a finder\'s fee. For the cardio.',
        ],
        gold: 5,
        next: 'name',
      },
      trick: {
        text: [
          'She stops dead in the middle of the crowd and whips around to look at her tail. It\'s there. Of course it\'s there.',
          '@kit:angry ...HEY! That\'s a mean trick! I fell for it! Nobody makes me fall for tricks!',
          'She marches back over, pouting, and drops your coin purse into your hand.',
          '@kit:happy Okay, you win this time. But only because that was *funny.*',
        ],
        aff: 6,
        gold: 10,
        next: 'name',
      },
      name: {
        text: [
          '@kit:happy I\'m Kit! Kit Whiskerwhit! Thief extraordinaire, rooftop runner, champion napper! Who are you?',
          '@you {name}.',
          '@kit:happy {name}! I like that! It\'s got a good bounce to it!',
          'She leans in very close and sniffs your cheek.',
          '@kit:smug You\'re interesting. I like interesting. Most people are boring as a wet sock. See ya around, {name}! Watch your pockets! Nyahaha!',
          'She\'s gone in a flash of pink. A moment later, you realize she\'s also taken your handkerchief.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Kit drops from an awning directly in front of you, landing on all fours.',
          '@kit:happy Psst! {name}! Wanna do a heist? A real one? With me?',
          '@you A heist?',
          '@kit:angry Lord Pomfrey — the fat noble with the mustache — stole a necklace from old Granny Hobb. It was her dead husband\'s wedding gift. He "confiscated" it for "back taxes." It\'s in his study. We\'re gonna steal it back!',
          '@kit I need a lookout! Someone smart! Please please pleeeease?',
          { if: 'kit_cutoff', text: '@kit:smug And you guessed my escape route on the very first day, so don\'t pretend you\'re not a planner. I *know* you\'re a planner.' },
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
          '@kit:happy That was PERFECT! That was the smoothest job I\'ve ever done! You\'re a *genius!* A sneaky genius!',
          'She\'s so excited she tackles you into a hedge.',
        ],
        aff: 10,
        flag: 'kit_plan',
        next: 'granny',
      },
      improvise: {
        text: [
          'It goes badly. Then it goes worse. The dog wakes up. A guard sees you. Kit trips an alarm bell. You end up fleeing across three rooftops with half the Pomfrey household in pursuit, while Kit cackles the entire time.',
          'But somehow, at the end of it, Kit is holding up a silver necklace in the moonlight.',
          '@kit:happy Nyahaha! That was a DISASTER! That was the most fun I\'ve had in YEARS!',
        ],
        aff: 6,
        next: 'granny',
      },
      granny: {
        text: [
          'You return the necklace to Granny Hobb together. The old woman weeps and kisses you both on the cheek and makes you take a whole basket of fish pie.',
          'Afterward, you sit together on the roof of the bakery, sharing the pie. Kit\'s tail is curled around your ankle. You don\'t think she\'s noticed.',
          '@kit:sad So... you didn\'t think it was weird? That I steal stuff and then give it back?',
        ],
        choices: [
          { text: '"I think it\'s the best kind of stealing."', go: 'best', aff: 6 },
          { text: '"Why do you do it, Kit?"', go: 'why', aff: 7, flag: 'kit_why' },
        ],
      },
      best: {
        text: [
          '@kit:happy RIGHT?! It\'s like being a hero, but with more climbing!',
          'She flops sideways onto your lap and starts purring. She definitely notices this time. She doesn\'t move.',
        ],
        end: true,
      },
      why: {
        text: [
          'Her ears droop a little.',
          '@kit:sad When I was a kitten, nobody gave me anything. I had to steal everything. Food. Blankets. Shoes. The other street kids too.',
          '@kit:sad So now... I just figure, nobody should have to feel like that. And the people who\'ve got too much won\'t miss a little bit.',
          'She shrugs, but her tail tightens around your ankle.',
          '@kit:happy Anyway! That\'s boring! More pie!',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'The rain comes out of nowhere — a sudden, drenching summer downpour. You duck under a shop awning. A moment later a sopping pink shape hurls itself under there too, hissing.',
          'Kit is soaked to the bone. Her ears are plastered flat. Her tail looks like a wet rope. She is the most miserable creature you have ever seen.',
          '@kit:angry Water. Water from the *sky.* Why does the sky do this. What did I ever do to the sky.',
        ],
        choices: [
          { text: 'Wrap your jacket around her.', go: 'jacket', aff: 8, flag: 'kit_jacket' },
          { text: 'Try very hard not to laugh. Fail.', go: 'laugh', aff: 4 },
        ],
      },
      jacket: {
        text: [
          'You drape your jacket over her shoulders. She stops hissing. She looks up at you with huge, wet eyes.',
          '@kit:blush ...Oh. It\'s warm. It smells like you.',
          'She burrows into it until only her nose and ears are poking out.',
        ],
        next: 'dry',
      },
      laugh: {
        text: [
          'You snort. She glares. You try to stop. A little giggle escapes.',
          '@kit:angry I will steal ALL of your socks. *All of them.*',
          'But then she sneezes, a tiny, ridiculous *mew* of a sneeze, and you both burst out laughing.',
        ],
        next: 'dry',
      },
      dry: {
        text: [
          'The rain shows no sign of stopping. Eventually, Kit leads you by the hand through the downpour to her hideout: a cozy attic above an abandoned hatmaker\'s, piled with cushions and blankets and what is clearly a very large hoard of stolen shiny things.',
          'She stands dripping in the middle of the room, shivering.',
          { if: 'kit_jacket', text: 'She still hasn\'t taken your jacket off. She drips on it contentedly. You get the distinct impression you are not getting it back.' },
          '@kit:blush Um... can you... dry my hair? Cats can\'t reach behind their ears. It\'s a whole thing.',
        ],
        choices: [
          { text: 'Dry her hair gently with a towel, careful around the ears.', go: 'towel', aff: 10 },
          { text: 'Notice one of the stolen trinkets is a framed drawing of you. [Wits check 3]', check: { stat: 'wits', dc: 3 }, pass: 'drawing', fail: 'towel' },
        ],
      },
      towel: {
        text: [
          'You sit on the cushions with her between your knees and rub her hair dry with a soft towel. When you get to her ears, she starts purring — a deep, rumbling, helpless purr that she seems completely unable to control.',
          '@kit:blush Mrrrrrrrr... that\'s... cheating... mrrrr...',
          'She leans back against your chest. You keep going long after her hair is dry.',
          '@kit:blush {name}? You\'re my favorite person. Out of everyone. In the whole town. Don\'t tell the orphans.',
        ],
        end: true,
      },
      drawing: {
        text: [
          'Pinned to the wall above the cushions, between a gilded spoon and a stolen weathervane, is a charcoal sketch. Of you. Laughing. It\'s actually quite good.',
          '@you Kit... did you steal this?',
          'Her ears shoot straight up, then flatten.',
          '@kit:surprised Nooo! I drew it! I watched you at the fountain and I drew it! I\'m not a *creep*, I just — you were laughing at something and I didn\'t want to forget it —',
          '@kit:blush Everything in this room is something I didn\'t want to lose. That\'s why it\'s all here. And I didn\'t want to lose *you*, so... drawing.',
          'She hides her face in her towel. You sit beside her and dry her hair, and she purrs so hard the cushions vibrate.',
        ],
        aff: 12,
        flag: 'kit_drawing',
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Kit isn\'t in any of her usual spots. Eventually you find a note pinned to your door with a fish-shaped hairpin: *come to the attic tonite!!! SECRET!!! (not a heist) (ok kind of a heist) — K ♡*',
          'The attic is lit with dozens of stolen candles. Kit is sitting cross-legged on the cushions, uncharacteristically still, holding a tiny tarnished locket.',
          '@kit:sad This is the first thing I ever stole. I was six. It was from a lady who dropped it in the street. I tried to give it back, but she was gone.',
          { if: 'kit_why', text: '@kit:sad You know how I said nobody ever gave me anything, when I was little? This was the first pretty thing I ever held. Nobody gave it to me either. It just... fell.' },
          '@kit I\'ve kept it my whole life. It\'s the most important thing I own.',
          'She holds it out to you.',
          '@kit:blush I want you to have it. Because you\'re the most important thing I own now. — I mean! Not *own!* You know what I mean! *Nyaaa!*',
        ],
        choices: [
          { text: 'Accept the locket and put it on.', go: 'accept', aff: 10 },
          { text: '"Open it first. What\'s inside?" [Wits check 4]', check: { stat: 'wits', dc: 4 }, pass: 'inside', fail: 'accept' },
        ],
      },
      inside: {
        text: [
          'She opens it. Inside, where a portrait might once have been, is a tiny scrap of paper in a child\'s crooked handwriting: *SOMEONE WHO STAYS.*',
          '@kit:sad I wrote that when I was six. It was what I wanted most. More than food, even.',
          '@you And now?',
          'She looks at you, and her eyes are shining.',
          '@kit:blush Now I found them.',
        ],
        aff: 12,
        next: 'accept',
      },
      accept: {
        text: [
          "You fasten the locket around your neck. Kit watches you do it, and something in her face crumples and blooms at the same time.",
          "Then she pounces. She literally pounces, knocks you back into the cushions, and kisses you all over your face, quick and clumsy and delighted, purring the whole time.",
          "@kit:happy Mine! Mine-mine-mine! The best thing I ever stole! And you *let me!*",
          "She slows down eventually. Her kisses get softer and deeper. Her tail winds around your waist. Her quick, clever thief's fingers find your buttons and have your shirt open before you notice they're there.",
          "@kit:smug Ooh. Shiny. I mean — not shiny. *Better* than shiny.",
          "She's playful about all of it: nipping at your ear, pinning your wrists and then letting you roll her over, laughing breathlessly into your neck. When you find the spot at the base of her tail, she goes completely boneless and lets out a long, astonished *mrrrrrow* that she will deny forever.",
          "@kit:blush Do that again. Do that *again.* — Don't stop, don't you *dare* stop, I'll steal everything you own —",
          "At one point you knock over a stolen candelabra and she has to put out a very small fire with a stolen tablecloth. Then she climbs back on top of you, purring loud enough to rattle the shiny things on the shelves, and nothing in the attic gets any quieter for a long time...",
          "...",
          "Afterward she curls up on your chest like a cat in a sunbeam, purring softly, her tail draped over your legs.",
          { if: 'kit_drawing', text: 'On the wall above you, the charcoal sketch of you laughing watches the candles burn down. Since you last saw it, she has drawn a tiny heart in the corner.' },
          "@kit Hey. {name}.",
          "@you Mm?",
          "@kit:smug I stole your shirt.",
          "You look down. She's wearing it. You have no idea when that happened.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake up because someone is sitting on your chest. Kit is perched there like a cat on a windowsill, wearing your shirt and nothing else, watching you with huge, delighted eyes.",
          "@kit:happy You're awake! Finally! I've been awake for HOURS. Well. Twenty minutes. I stole your breakfast. Sorry. It was a very good breakfast.",
          "She looks down at you. Her ears go slightly pink at the tips.",
          "@kit:blush So, um. Last night. That was... that was the best heist ever. Right? It wasn't just me? Tell me it wasn't just me.",
        ],
        choices: [
          { text: "\"Best heist ever. Want to plan the next job?\"", go: "next", aff: 6, flag: 'kit_sequel' },
          { text: "Reach up and scratch the base of her tail.", go: "tail", aff: 6, flag: 'kit_tailscratch' },
          { text: "\"Give me back my shirt.\"", go: "shirt", aff: 5 },
        ],
      },
      next: {
        text: [
          "Her tail shoots straight up.",
          "@kit:surprised A SEQUEL HEIST? Oh, oh, I have *ideas.* I have a whole list. I made it while you were sleeping. Number one is \"the bath at the inn has a really big tub.\"",
          "She produces an actual list, written on a stolen napkin. It's long. It's illustrated.",
          { if: 'kit_plan', text: "@kit:smug And YOU do the planning, 'cause you're the sneaky genius. I'll do the climbing. And the stealing. And the kissing. We'll share the kissing." },
        ],
        end: true,
      },
      tail: {
        text: [
          "Her whole body goes limp. She collapses on top of you with a purr so loud the windowpane rattles.",
          "@kit:blush Cheating — that's *cheating* — mrrrrrr — you can't just — mrrrrrrr —",
          "She doesn't finish the sentence. She doesn't move for an hour. Breakfast, what's left of it, goes cold.",
        ],
        end: true,
      },
      shirt: {
        text: [
          "@kit:smug Nope! Finders keepers. It's *mine* now. Possession is nine-tenths of the law. I read that on a wanted poster. Mine.",
          "She hugs it around herself and grins.",
          "@kit:smug You can come try to steal it back, though. If you're quick enough.",
          "You are, eventually. It takes a while. She doesn't try very hard to stop you.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Kit finds you on the festival hill — or rather, she drops out of the tree above you and lands in your lap.',
          '@kit:smug Got the best seat! Stole it from a very snooty couple. They\'ll live.',
          'She curls up against you, the locket glinting at your throat. When the stars begin to fall, she goes completely still, eyes huge, reflecting the whole sky.',
          '@kit:surprised Ohhh... it\'s so shiny...',
          '@kit:happy Think I could steal one?',
          '@you A star?',
          '@kit:happy Yeah! For you! I\'d climb up there and grab one!',
        ],
        next: 'choice',
      },
      choice: {
        text: [
          'She is already eyeing the sky, measuring the distance to the nearest star the way she would measure a jump between two rooftops.',
        ],
        choices: [
          { text: '"You don\'t have to steal me anything, Kit."', go: 'promise' },
          { text: '"Forget the stars. I know a better job. Lord Pomfrey just bought himself a vault."', go: 'phantom', if: ['kit_plan', { any: ['kit_cutoff', 'kit_sequel'] }] },
        ],
      },
      promise: {
        text: [
          '@you You don\'t have to steal me anything, Kit.',
          '@kit:blush I know. That\'s the weird part. I don\'t want to steal anything anymore. Not when I\'m with you. I already have the best thing.',
          'She kisses you under the falling stars, purring against your lips.',
          '@kit:smug ...Okay, I still want to steal *some* things. I\'m not a *saint.*',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'Kit goes legitimate. Mostly. The Adventurers\' Guild hires her as their first ever "Recovery Specialist," retrieving stolen goods from people who stole them first. She is spectacularly good at it. Mira hates her paperwork.',
          'The orphans at the old mill get a real roof, warm beds, and a lot of very mysterious anonymous donations. One of the kittens there grows up into a very fat, very smug tomcat named Kit Junior.',
          'You live together above the old hatmaker\'s, in an attic full of cushions and shiny things. She still steals your socks. She still naps in every patch of sunlight. She still wakes you at dawn by sitting on your chest.',
          { if: 'kit_drawing', text: 'The charcoal sketch of you laughing hangs above the bed now, in a real frame she bought with real money from a real shop, an experience she describes as "deeply uncomfortable" and "worth it."' },
          'And every night, before she falls asleep curled against you, she taps the locket at your throat and whispers the words inside it.',
          '*Someone who stays.*',
        ],
        ending: 'kit',
      },
      phantom: {
        text: [
          '@you Forget the stars. I know a better job. Lord Pomfrey just bought himself a vault. Rumor says half of what\'s in it isn\'t his.',
          'Kit\'s ears swivel toward you so fast they practically click.',
          '@kit:surprised A *vault?* A real one? With the big round door and the wheel on the front —',
          '@you And a guard rotation that changes every forty minutes. I checked.',
          '@kit:blush You *checked.* You cased a vault. For me. On *festival night.*',
          { if: 'kit_sequel', text: '@kit:smug This is going on the sequel heist list. Right at the top. Above the bathtub. That\'s how you know it\'s serious.' },
          { if: 'kit_cutoff', text: '@kit:happy You guessed my route on the very first day. I knew it. I *knew* you were a thief at heart. A thief with a *plan.*' },
          '@kit:happy Okay, but listen. If we do this, we do it *forever.* No going legit. No guild paperwork. You and me, on the rooftops, robbing the rotten ones blind and giving it all away. Partners. *Real* partners.',
          '@you Partners.',
          'She kisses you hard, purring, while the stars pour down overhead. Then she pulls back, her eyes glittering like a whole sky\'s worth of stolen light.',
          '@kit:smug ...We\'re still stealing a star, though. Eventually. I\'m putting it on the list.',
        ],
        next: 'phantom_epi',
      },
      phantom_epi: {
        text: [
          '*Some time later...*',
          'Clichéton gets a new legend. They call it the Phantom Paws: a pair of thieves who only rob people who deserve it, and who always leave a calling card behind. A paw print in pink chalk, and beside it, in very tidy handwriting, an itemized list of everything taken and exactly who it is being returned to.',
          'Lord Pomfrey\'s vault is emptied in a single night. The next morning, half the town finds its "back taxes" on its doorsteps, wrapped in brown paper. Granny Hobb receives a new roof. Lord Pomfrey receives a fish.',
          'The guard captain puts up wanted posters. The drawing of Kit has a mustache again. The drawing of you is, everyone agrees, extremely flattering. Kit is furious about this for a month.',
          'You do the planning. She does the climbing. You both do the running, usually laughing, usually with somebody shouting behind you. She has never once let you fall. You have never once let her get wet.',
          'The orphans at the old mill get a real school, with books and a very tall climbing wall. Their anonymous benefactor is listed in the town records as *A. Cat.* Nobody asks questions. The few who do find their purses mysteriously returned, with a polite note.',
          'By day you sleep tangled in the cushions of the attic above the hatmaker\'s, surrounded by shiny things that each meant something to somebody. The locket hangs over the bed now, where you can both see it.',
          'And every so often, on a clear night, she sits on the highest rooftop in town and points up at one particular star.',
          '@kit:smug That one. Next year. I\'ve got a plan.',
          '@kit:happy Well. *You\'ve* got a plan. I\'ve got the rope.',
        ],
        ending: 'kit_phantom',
      },
    },
  },
});
