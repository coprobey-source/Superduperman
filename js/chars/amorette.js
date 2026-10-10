FL.addSpeaker('sub', 'The Substitute Narrator', '#9a9a9a');

FL.addCharacter({
  id: 'amorette',
  name: 'Amorette, Goddess of Love',
  short: 'Amorette',
  trope: 'The Narrator (Fourth-Wall-Breaking Goddess)',
  color: '#ff8ad8',
  favStat: 'charm',
  endingTitle: 'The Narrator\'s Own Story',
  endings: { amorette_mortal: 'Just a Woman with Pink Hair', amorette_ascend: 'Patron of the Second Glance' },
  teaser: 'At the foot of the Goddess\'s statue, a pink-haired woman is eating popcorn and watching couples with intense interest.',
  blurb: 'Goddess of Love, Patron of Romantic Clichés, and — as you\'ve noticed — the voice narrating your life. She has arranged a million meet-cutes and a thousand happily-ever-afters, and has never once had one of her own. Now, after an age without one, she has taken a mortal form. Only the truly charming can win the heart of the one who invented charm.',
  schedule: [null, null, 'temple'],
  unlock: function (s) { return !!s.flags.goddess_awake; },
  gifts: { love: ['novel'], like: ['roses', 'chocolate', 'cakes', 'perfume', 'wine', 'quill', 'salts'], hate: ['gears'] },
  giftLines: {
    love: ['@amorette:happy *The Duke\'s Forbidden Passion, Volume Nine!* Oh, I *adore* this one! Did you know I personally inspired the author? I whispered chapter nine into her ear at three in the morning.', 'She hugs the book to her chest.', '@amorette:smug You have *excellent* taste, darling. Clearly I chose well.'],
    like: '@amorette:happy A romantic gift for the Goddess of Romance? Oh, how *meta.* I love it. I love it *so much.*',
    neutral: '@amorette Hm! Not exactly romantic, darling. But it\'s the thought that counts. I\'m a goddess; I can *see* the thought. It was a nice thought.',
    hate: ['@amorette:angry Gears? Cogs? *Clockwork?* The most unromantic thing in creation!', 'She pauses.', '@amorette:smug ...Although, the automaton girl... no. No. Still unromantic. Give these to the clockwork girl at the Gearwright Workshop.'],
    special: {
      novel: [
        "@amorette:surprised *The Duke's Forbidden Passion, Volume Nine!* Oh — oh, it's the *first printing!* With the typo on page forty! \"He clasped her to his heaving chest-of-drawers!\"",
        "She hugs it to her chest and spins in a slow circle on the altar steps.",
        "@amorette:happy I whispered chapter nine into the author's ear at three in the morning. She thought it was the cheese she'd eaten. It was *me.* The cheese has never written anything that good.",
        "@amorette:blush ...Read me the horse bit later? In the voice. You know the voice.",
      ],
      roses: [
        "@amorette:smug Roses. A dozen red roses. The single most clichéd gift in all of creation.",
        "She buries her nose in them anyway and stays there.",
        "@amorette:blush ...I invented these, you know. As a gift. Somewhere around the Bronze Age. Ten thousand years of everyone giving everyone else roses, and you're the first person who's ever given *me* the roses back.",
      ],
      candle: [
        "@amorette:surprised Is this a Blessed Candle? From *my* temple?",
        "@amorette:smug Darling. You've bought me a candle that was blessed *in my name* and given it *to me.* That's like giving a baker a loaf of their own bread.",
        "@amorette:happy ...I love it. I'm going to bless it again. It'll be *double-blessed.* Nobody's ever had one of those. It might explode.",
      ],
      gears: [
        "@amorette:angry *Gears.* Cogs. Springs. Do you know what these are, darling? These are the opposite of a love story. A love story is two people *failing* to be efficient at each other.",
        "She holds a single gear up to the candlelight and squints at it.",
        "@amorette ...Although. A girl made of these is out there learning to blush. Fine. *Fine.* I'll put them on the altar. Pointedly. Facing the wall.",
      ],
      fork: [
        "@amorette:surprised A fork! An ordinary fork! Nobody surprises *me,* darling. Nobody. It's been *centuries.*",
        "@amorette:smug I've narrated eleven million love stories and not *one* of them featured a fork. I'm going to put it in the next one. A forbidden romance. A fork and a — a spoon from a rival drawer.",
        "@amorette:happy ...Oh, this is good. Somebody get me a quill.",
      ],
      quill: [
        "The enchanted quill twitches in her fingers and scrawls *PURPLE PROSE* across her palm in looping copperplate.",
        "@amorette:angry How *dare* you. — I mean, how dare *it.* You're lovely.",
        "@amorette:smug I'm keeping it. We're going to have a long talk about adjectives. I'm going to win. I *invented* adjectives. Well. The romantic ones. \"Smouldering\" was mine.",
      ],
      relic: [
        "She peers into the little gilded box.",
        "@amorette:surprised Oh! That's Saint Ebbert's knuckle. Hello, Ebbert! — He owes me twelve coppers from a dice game in the year four hundred. I'd recognise that knuckle anywhere. It's the one he cheated with.",
        "@amorette:smug Holy? Probably not. *Valuable?* Enormously. To me. As leverage.",
      ],
      mirror: [
        "@amorette:blush A mirror! Oh, I never look in mirrors. Goddesses don't have reflections, exactly. We have... *interpretations.*",
        "She looks. For a moment the woman in the glass is someone else entirely: a stormcloud, a sunrise, a girl with a bow. Then it settles on pink hair and a nervous smile.",
        "@amorette:surprised ...Oh. I look *happy.* When did that happen?",
      ],
    },
    repeat: "@amorette:smug This again? Darling, I'm the Goddess of Love. I know a *recurring motif* when I see one. ...Keep going. I'm curious what it symbolises.",
  },
  talk: [
    ['@amorette:happy Oh, it\'s *you!* My favorite protagonist! Sit, sit. Want some popcorn? I\'ve been watching the baker and the blacksmith. They\'re *so close* to kissing. I can feel it.'],
    ['@amorette:angry Do you know how many love stories I\'ve narrated? Eleven million, four hundred thousand, and six. And do you know how many were about me? *Zero.* Rude.'],
    ['@amorette:happy My favorite trope? Oh, don\'t make me choose. ...Enemies to lovers. No — fake dating. No — "there was only one bed." Oh, I love them all. They\'re my *children.*'],
    ['@amorette:surprised Being a goddess in a mortal body is so strange! I get *hungry!* I stubbed my toe yesterday and nearly smote the table!'],
    ['@amorette:smug I saw what you did today, you know. I see everything. It was very sweet. I narrated it beautifully, if I say so myself. You didn\'t hear? Oh, nobody ever does.'],
    ['She looks out at the candlelit temple, unusually quiet.', '@amorette:sad Everyone prays to me for love. Nobody ever asks if *I\'m* lonely. Not in ten thousand years. ...Forget I said that. Goddesses aren\'t supposed to monologue.'],
    ["@amorette:smug You're about to say something charming. Three, two, one...", "You don't say anything.", "@amorette:surprised ...Huh. You usually — I mean, people *usually* do. Statistically. Over many — never mind. Say something charming *now.* I'll wait."],
    ["@amorette Here is a secret, darling. Every Starfall, I make the stars fall. Every single year. Do you know why?", "@amorette:blush Because it's the one night everybody stops what they're doing and looks *up.* For one night, they're all looking at my side of the sky. It's the closest I ever get to being looked at."],
    ["She's arguing with a prayer candle.", "@amorette:angry No. *No.* I'm not making the miller's son fall in love with the duchess. She's *eighty* and she's *busy* and he's *asked four times this week.* Pray for a hobby!", "@amorette:smug ...Sorry, darling. Customer service."],
    ["@amorette My substitute is Cupid's nephew. His name is Kevin. Gods don't usually get names like Kevin, but his mother was going through a phase.", "@amorette:smug He narrates everything in the passive voice. \"A kiss was had.\" I could *scream.*"],
    { if: 'amorette_floor', lines: ["@amorette:smug I investigated your floor theory, darling. \"Mortal suggests floor.\" I sent a test couple to an inn during the Harvest Fair. One bed. I gave him the floor option.", "@amorette:happy He lasted *four minutes.* They're getting married in the spring. Your theory has been disproven, and I've never been happier to be right."] },
    { if: 'amorette_goose', lines: ["@amorette:blush The duke and the goose had their anniversary today. Forty years! I sent a card.", "@amorette:smug ...Fine. It's been a series of geese. Geese don't live forty years. He's *very* loyal to the concept."] },
    { if: { stage: 3 }, lines: ["She holds up her hand to the candlelight. For a second, you can almost see through it — and then it's solid and warm and ordinary again.", "@amorette:sad It comes and goes. The divinity. This morning I couldn't hear a single prayer for nearly an hour.", "@amorette:blush It was the quietest hour of my existence. I spent it thinking about you. ...Don't let it go to your head. It's a very small head. Mortal-sized."] },
    { if: { ngplus: 1 }, lines: ["@amorette Do you ever get déjà vu, darling? That feeling you've done all this before?", "@amorette:smug I get it *constantly.* It's terribly inconvenient for an omniscient being. Like reading a book you're sure you've read, except you can't remember the ending.", "She smiles, and doesn't explain."] },
    { if: { seenEnding: 'alone' }, lines: ["@amorette:smug A cat was in the temple this morning. Grey. Very judgmental. It sat on my altar and looked at me as if we'd met.", "@amorette:happy I gave it some popcorn. It says it hopes you're *not* watching the stars with it this year. It means that kindly."] },
    { if: { seenEnding: 'harem' }, lines: ["@amorette:smug Can I ask you something, darling? Purely hypothetically. If someone were to, say, attempt to watch the stars with *several* people at once...", "@amorette:happy ...How did they decide who cooked? I've always wanted to know. It never makes it into the narration. Someone always sets something on fire."] },
  ],
  afterTalk: [
    ["@amorette:blush I've been narrating everyone else's romances all week and I keep accidentally comparing them to ours. \"And they kissed, but not as well as —\" I've had to restart *six* love stories."],
    ["She leans close and whispers in your ear, voice dropping into narration:", "@amorette:smug *And that night, the protagonist found a trail of rose petals leading to the meadow again...*", "@amorette:blush Consider that a hint."],
    ["@amorette:happy Do you know, prayers to the Temple have doubled this week? Everyone in town has suddenly been asking for \"a love like the goddess has.\" I've been granting them. Generously."],
    ["@amorette:blush My statue in the temple has started blushing. Actually blushing. The priests think it's a miracle. It's just that I keep thinking about you."],
    ["@amorette:sad Sometimes I wonder what happens to all the stories after I stop narrating them. Do the baker and the blacksmith keep going when I look away? Do they still love each other on a Tuesday?", "@amorette:happy ...You do. I've checked. Every Tuesday. I'm *very* thorough."],
    { if: 'amorette_kevin', lines: ["@amorette:smug Kevin's been practising since the meadow. He narrated a whole wedding this morning, active voice and everything. \"She kissed her.\" Subject, verb, object.", "@amorette:happy I cried. He cried. The bride cried, but she was going to anyway."] },
    { if: 'amorette_sequel', lines: ["@amorette:smug I've been drafting the sequel, darling. You did ask for one.", "@amorette:blush Chapter one is just the word *finally* written four hundred times. I'm told it needs an editor. I'm told *you* should come round tonight and edit it."] },
    { if: 'amorette_wish', lines: ["@amorette:blush I still hear it, you know. The wish you made at the fountain. Every coin in that fountain is a prayer, and yours is still in there, glowing.", "@amorette:happy I can't grant it. That's the funny thing. It's already *come true,* so there's nothing left to do but listen to it."] },
    { if: 'amorette_ten', lines: ["@amorette:smug Ten out of ten, you said. No notes. I've had it engraved on a little plaque by the altar.", "@amorette:blush The priests think it's a review of the incense. Let them."] },
  ],
  dateFav: 'gardens',
  dates: {
    dinner: {
      start: {
        text: [
          "The Tipsy Wyvern's corner booth glows with candlelight. Amorette slides into it and runs her hand along the old wooden table with something like reverence.",
          "@amorette:happy Booth three. Do you know how many proposals I've narrated in this booth? Four thousand and twelve. Nine went badly. One was to a hat stand. He'd had a lot of ale and it was a very handsome hat stand.",
          "She looks around the tavern, and her eyes go faintly gold. You realize she can see something you can't — thin red threads running between the diners, from wrist to wrist, from table to table.",
          { if: { stage: 4 }, text: "She glances down at her own wrist, and then at yours, and goes pink." },
        ],
        choices: [
          { text: "\"Tell me which of them will make it.\"", go: 'gossip', aff: 4 },
          { text: "\"No narrating tonight. Just dinner. Just us.\"", go: 'just_us', aff: 6 },
          { text: "\"You get hungry now, right? Order one of everything.\"", go: 'everything', aff: 3 },
        ],
      },
      gossip: {
        text: [
          "@amorette:smug Oh, you *wicked* thing. Lean in.",
          "She narrates the room in a delicious whisper. The couple by the fire: forty years, six children, one magnificent argument about a goat. The two dwarves at the bar: they don't know it yet, but in about ninety seconds he's going to knock over her drink. The man eating alone: his wife's on the late coach, and he's ordered her favorite pie to be warm when she walks in.",
          "Ninety seconds later the dwarf knocks over the drink. They both apologise at once. Amorette clutches your arm.",
          "@amorette:happy *I love this part.*",
        ],
        end: true,
      },
      just_us: {
        text: [
          "@amorette:surprised No narrating? At *all?*",
          "@amorette Fine. Fine! I can do that. I'm a goddess. I have *infinite discipline.*",
          "She lasts until the bread arrives.",
          "@amorette:blush *The protagonist buttered the bread with quiet intensity* — sorry. Sorry! It slipped out. You were buttering so *intensely.*",
          "But then, somewhere between the soup and the pie, she stops. You notice it before she does: she isn't watching the room any more, or the threads, or the story. She's just watching you, chin in her hand, listening to you talk about your day as if it were the only story in the world.",
          "@amorette:happy ...Oh. That's what it's like, from the inside. Huh.",
        ],
        end: true,
      },
      everything: {
        text: [
          "She orders one of everything. The table groans. The barmaid looks at you with deep sympathy.",
          "@amorette:surprised What's *this?* Is this a potato? Have I been *missing potatoes* for ten thousand years?",
          "She eats like someone discovering colour. She has opinions about every dish. She gives the pie a standing ovation. At the end of the night she leans back against you in the booth, very full and very pleased.",
          "@amorette:smug I'm adding a minor deity of gravy to the pantheon. I'll have to make one up. It'll be worth it.",
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          "The Moonlit Gardens are all silver hedges, marble benches and fountains singing softly to themselves in the dark. Amorette walks through them like someone coming home.",
          "@amorette:happy I designed these. Well — I inspired them. The landscaper had a dream about me four hundred years ago and woke up sobbing and drawing hedges. I'd had a *very* romantic week.",
          "@amorette:smug Every bench has a first kiss on it. That one's had nine hundred. That one's had two, but they were both *legendary.*",
          "At the heart of the gardens stands the Fountain of Wishes, its basin glittering with coins.",
          { if: { stage: 4 }, text: "She tugs you towards the bench with only two kisses on it, and sits you down, and smiles at you like she's about to make it three." },
        ],
        choices: [
          { text: "Toss a coin in the fountain and make a wish. Silently.", go: 'wish', aff: 6, flag: 'amorette_wish' },
          { text: "\"Which bench is your favorite?\"", go: 'bench', aff: 5 },
          { text: "Pick a rose from the hedge and tuck it behind her ear.", go: 'rose', aff: 3 },
        ],
      },
      wish: {
        text: [
          "You close your eyes and wish, and drop the coin. It hits the water with a soft plink.",
          "Beside you, Amorette goes very still. Then very, very pink.",
          "@amorette:blush ...Darling. You do know that every coin in this fountain is a prayer? And that it's *my* fountain? And that I can *hear* them?",
          "@you I know.",
          "@amorette:surprised You — you *knew* —",
          "She presses both hands to her cheeks. All around the gardens, every fountain jumps a foot into the air at once.",
          "@amorette:blush I'm not telling you whether it'll come true. Gods aren't allowed. ...But you should look very smug about it. Yes. Like that.",
        ],
        end: true,
      },
      bench: {
        text: [
          "She leads you without hesitation to a small, worn bench half-hidden under a willow, far from the fountains.",
          "@amorette This one's had no first kisses at all. Nobody ever finds it.",
          "@amorette:sad I come here sometimes. When I'm narrating something sad. A goodbye. A letter that's arrived too late. I sit here and watch it, so that at least somebody is sitting with them.",
          "She looks down at the bench, and at you, sitting on it beside her.",
          "@amorette:blush ...I've never sat on it with anyone before. It's much warmer. Who knew benches could change temperature?",
        ],
        end: true,
      },
      rose: {
        text: [
          "You pick a rose from the hedge and tuck it behind her ear. She touches it, delighted — and a gardener's voice bellows from the darkness.",
          "@amorette:surprised Run, darling! *Run!* That's Old Grimsby, and he has a rake and no sense of romance whatsoever!",
          "You run. She's laughing so hard she can barely keep up. You end up hiding behind a statue of her, panting, while Grimsby stomps past muttering about \"bloody couples.\"",
          "@amorette:smug ...He's going to fall in love next spring. With a woman who steals his roses. I'm going to enjoy that *enormously.*",
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          "The sun sinks into Saltbreeze Harbor in long streaks of orange and violet. You buy fried fish in paper, and Amorette holds hers as though it's a holy relic.",
          "@amorette:surprised It's *hot.* Why is it hot? Why is it *wet?* Why does it smell like — oh, that's *wonderful.*",
          "@amorette I don't do sunsets, you know. That's Solenne. Goddess of Horizons. Insufferable. Signs every single one of them in the corner, very small, in purple.",
          { if: { ngplus: 1 }, text: "@amorette:smug ...Funny. I could have sworn we'd sat right here before. — No. Different sunset. They're all different. That's the whole point of them." },
          "She sits on the very end of the pier, swinging her feet over the water.",
        ],
        choices: [
          { text: "\"Don't narrate it. Just watch it with me.\"", go: 'watch', aff: 6, flag: 'amorette_sunset' },
          { text: "\"Narrate it for me. I want to hear how you'd tell it.\"", go: 'narrate', aff: 5 },
          { text: "Throw a chip to the gulls.", go: 'gulls', aff: 2 },
        ],
      },
      watch: {
        text: [
          "She opens her mouth, out of habit, to begin. Then she closes it.",
          "The sun goes down. The sea turns copper, then rose, then deep blue. A ship's bell rings across the water. Amorette sits beside you, greasy fingers laced through yours, and doesn't say a single word.",
          "When the last of the light is gone, she lets out a long, shaky breath.",
          "@amorette:sad ...I've watched ten thousand years of sunsets, darling. I've never once just *seen* one. I was always too busy describing it.",
          "@amorette:blush Mortals get to do that every night? Just *have* them? Without taking notes?",
        ],
        end: true,
      },
      narrate: {
        text: [
          "She brightens, and turns to the sky, and begins.",
          "Her voice changes. It isn't the voice she speaks with; it's the other one, the one from everywhere and nowhere, the one you heard the day you arrived. She narrates the sunset, and the sea listens. The colours deepen as she describes them. A gull, mid-flight, stops to hear the end of a sentence.",
          "@amorette:blush ...*and the protagonist, who had asked to hear the story, was the most beautiful thing on the pier.*",
          "@amorette:smug Sorry. Couldn't help it. Solenne can sign *that.*",
        ],
        end: true,
      },
      gulls: {
        text: [
          "You toss a chip. Forty gulls appear from nowhere. Amorette shrieks with delight and throws her entire dinner at them.",
          "@amorette:happy Oh, they're *awful!* They're *perfect!* Look at that one — he's in love with her. He's going to give her that chip. *Give her the chip, Gregory!*",
          "Gregory eats the chip himself. Amorette is devastated. You have to buy her another fish.",
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          "You find the perfect sunny clearing in Whisperwood. You unpack the basket. You reach for the blankets.",
          "There is only one blanket.",
          "You look at Amorette. Amorette is looking at the sky with tremendous innocence and humming.",
          "@amorette:smug Oh *no.* Only one blanket. However shall we manage. What a terrible, unforeseeable coincidence.",
          { if: { stage: 4 }, text: "@amorette:blush ...I'll be honest, darling, I also hid the cushions. And one of the sandwiches. It's in a tree. Nobody needs to know why." },
        ],
        choices: [
          { text: "\"Guess we'll have to share.\"", go: 'share', aff: 5 },
          { text: "Sit on the grass instead. \"The floor's fine.\"", go: 'grass', aff: 3 },
          { text: "\"So what happens next? You must know.\"", go: 'next', aff: 6 },
        ],
      },
      share: {
        text: [
          "@amorette:happy *Yes!* Classic! Iconic! Perfect!",
          "She arranges you both on the blanket, which is precisely too small for two people unless they sit very, very close. She's clearly measured it.",
          "@amorette:blush ...It's much better from the inside, isn't it? The trope. I've only ever seen it from above.",
          "She rests her head on your shoulder, and the sun moves slowly across the clearing, and neither of you mentions the sandwich in the tree.",
        ],
        end: true,
      },
      grass: {
        text: [
          "You sit down firmly on the grass. Amorette stares at you, scandalised.",
          { if: 'amorette_floor', text: "@amorette:angry The *floor* again! You said floor at the trope review! I wrote it down! \"Mortal suggests floor. Investigate.\" I've *investigated,* darling, and the floor is *wrong!*", else: "@amorette:angry The *floor?* You'd take the *floor* over a perfectly good trope?" },
          "She lasts about thirty seconds on the blanket alone. Then she drags it over, flops down on the grass next to you, and pulls the blanket over both of you anyway.",
          "@amorette:smug There. Now it's one blanket *and* the floor. I've defeated your theory with *compromise.*",
        ],
        end: true,
      },
      next: {
        text: [
          "@amorette:smug Oh, darling, I always know. I know exactly how this goes. You'll pass me a strawberry, and I'll say something clever, and then —",
          "She stops. Her golden eyes go distant, searching for something.",
          "@amorette:surprised ...Huh. I don't know, actually. I can't see it. The next bit's just — blank.",
          "For a moment she looks frightened. Then, slowly, she starts to smile, wider and wider, until she's laughing.",
          "@amorette:happy I don't know what happens next! Do you know how long it's been since I didn't know what happens next? Pass me a strawberry. Let's find *out.*",
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'The Temple of the Radiant Heart glows with a thousand candles. At the foot of the great statue of the Goddess of Love, a woman sits cross-legged on the altar steps, eating popcorn out of a golden offering bowl.',
          'She has long, rose-pink hair that seems to drift in a breeze you can\'t feel, golden eyes, and a gown made of something that looks like sunset. She looks exactly like the statue above her. The statue, you notice, is now subtly frowning.',
          '@amorette:happy There you are! Finally! I\'ve been waiting *all evening.* Sitting still is *agony* when you\'re omnipresent. I keep wanting to be somewhere else.',
          { if: { ngplus: 1 }, text: "@amorette:smug Hello *again*, {name}. — Hello. I mean hello. Just the one hello. First time. Obviously. Ignore me, I've had a lot of popcorn." },
          '@amorette Hello, {name}. It\'s me. The Narrator. In the flesh! Well, in *a* flesh. It\'s borrowed. I\'ll give it back.',
        ],
        aff: 10,
        choices: [
          { text: '"So the voice in my head was real."', go: 'real' },
          { text: 'Bow deeply. "Goddess."', go: 'bow' },
          { text: '"Is that popcorn from the offering bowl?" [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'popcorn', fail: 'popcorn_fail' },
        ],
      },
      real: {
        text: [
          '@amorette:smug Real! Very real! Extremely real! Though "voice in your head" is a bit reductive, darling. I prefer "omniscient third-person perspective with a strong personal voice."',
          'She pats the step beside her.',
        ],
        aff: 4,
        next: 'name',
      },
      bow: {
        text: [
          'She waves a hand, embarrassed.',
          '@amorette:blush Oh, don\'t *bow.* Everyone bows. Bowing is so *boring.* I get bowed at forty thousand times a day. Do you know what nobody does?',
          '@you What?',
          '@amorette:happy Sit next to me and share my popcorn.',
        ],
        aff: 4,
        flag: 'amorette_bowed',
        next: 'name',
      },
      popcorn: {
        text: [
          '@you Is that popcorn from the offering bowl?',
          '@amorette:angry It was *offered.* To *me.* I\'m eating my offerings! That\'s how offerings work!',
          '@you Can I have some?',
          'She stares at you. Then she laughs — a sound like wind chimes and champagne — and holds out the bowl.',
          '@amorette:happy Ten thousand years, and you\'re the first mortal who ever asked to *share* an offering. Oh, I *knew* you\'d be fun.',
        ],
        aff: 8,
        flag: 'amorette_shared',
        next: 'name',
      },
      popcorn_fail: {
        text: [
          '@you Is that — popcorn — holy popcorn — can — ',
          'You trip over the words and, somehow, over the altar step.',
          '@amorette:smug Oh, *honey.* Smooth. Very protagonist energy.',
          'She helps you up, giggling, and hands you a piece of popcorn anyway.',
          "@amorette:happy Mind the step, by the way. — Ah. Too late. I always say it too late. It's a timing thing.",
        ],
        aff: 3,
        next: 'name',
      },
      name: {
        text: [
          '@amorette I\'m Amorette. Goddess of Love, Patron of Romantic Clichés, Hopeless Pining and Meet-Cutes, Keeper of the Red String, et cetera, et cetera.',
          '@amorette:blush I\'ve spent ten thousand years arranging everyone else\'s love stories. And then I watched yours, and I thought: *oh, I want to be in this one.*',
          {
            if: { any: [{ seenEnding: 'mira' }, { seenEnding: 'mira_partners' }, { seenEnding: 'mira_desk' }] },
            text: "@amorette:smug ...How's the receptionist, by the way? Still yelling? Still filing you under \"distinguishing features\"? — What? I didn't say anything. Gods hum. It's a known thing.",
            else: {
              if: { any: [{ seenEnding: 'scarlett' }, { seenEnding: 'scarlett_home' }, { seenEnding: 'scarlett_rival' }] },
              text: "@amorette:smug You smell faintly of the sea, darling. And rum. And a *very* specific compass. — Don't look at me like that. I'm omniscient. I'm allowed to be smug about it.",
              else: {
                if: { seenEnding: 'fenna' },
                text: "@amorette:smug You've got a look about you. Like someone who's been *thoroughly sniffed* by a werewolf. Fenna-thoroughly. — I said nothing! I'm a goddess of mystery. Among other things.",
                else: {
                  if: { seenEnding: 'valeria' },
                  text: "@amorette:smug You keep glancing at my neck, darling. Old habits? Someone with fangs teach you that? — Oh, don't blush. I'm not jealous. I'm *observant.* Very different.",
                  else: {
                    if: { seenEnding: 'rosalind' },
                    text: "@amorette:smug You flinched when I laughed just now. Were you expecting an *Ohohoho?* — I'm not saying anything. I'm simply noting it. In the margin. In red.",
                    else: {
                      if: { seenEnding: 'harem' },
                      text: "@amorette:smug You look like someone who's tried to share a blanket with a *great many* people at once. — No reason. Simply a goddess's intuition. How *was* the cooking rota?",
                      else: { if: { seenEnding: 'alone' }, text: "@amorette:sad You look like someone who once watched the stars with a cat. ...No? Just a feeling. Come here. Have some popcorn. I'm not letting that happen *this* time — I mean, at all. Ever." },
                    },
                  },
                },
              },
            },
          },
          'She grins at you, impish and bright.',
          '@amorette:smug So! Here I am. A romanceable option. Very meta. Come visit me in the evenings. I\'ll be right here, eating popcorn and meddling.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Amorette is waiting with a stack of scrolls and a quill.',
          { if: 'amorette_shared', text: "She's brought two bowls of popcorn tonight. One of them has a little card in it that says *YOURS* in glittering gold." },
          { if: 'amorette_bowed', text: "@amorette:smug And *no bowing.* I've put a sign up. Look. NO BOWING. THIS MEANS YOU, {name}." },
          '@amorette:happy I need your help, darling! I\'m doing my annual review. Every trope in creation, ranked. I usually do it alone, but I wanted a *mortal perspective.*',
          '@amorette First: "There Was Only One Bed." Overrated, or perfect?',
        ],
        choices: [
          { text: '"Perfect. Timeless. Iconic."', go: 'bed_perfect', aff: 5 },
          { text: '"Overrated. Just sleep on the floor."', go: 'bed_over', aff: 3 },
          { text: '"Depends entirely on who\'s in the bed." [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'bed_charm', fail: 'bed_perfect' },
        ],
      },
      bed_perfect: {
        text: [
          '@amorette:happy *THANK* you! The minor god of interior design says it\'s "unrealistic." He\'s never been to an inn during a festival!',
        ],
        next: 'trope2',
      },
      bed_over: {
        text: [
          '@amorette:surprised *The floor?!* Oh, you sweet, unromantic creature. I\'m writing that down. "Mortal suggests floor. Investigate."',
        ],
        flag: 'amorette_floor',
        next: 'trope2',
      },
      bed_charm: {
        text: [
          '@you Depends entirely on who\'s in the bed.',
          'She looks at you over her scroll. For the first time, the Goddess of Love seems momentarily lost for words.',
          '@amorette:blush ...Oh. Oh, you\'re *good.* I didn\'t narrate that line. That was all you.',
          'She fans herself with the scroll.',
        ],
        aff: 8,
        flag: 'amorette_one_bed',
        next: 'trope2',
      },
      trope2: {
        text: [
          '@amorette Next: "Love at First Sight." Real, or nonsense?',
        ],
        choices: [
          { text: '"Real. It happens."', go: 'sight_real', aff: 5 },
          { text: '"Nonsense. Love takes time. You get to know someone."', go: 'sight_time', aff: 7 },
        ],
      },
      sight_real: {
        text: [
          '@amorette:smug Oh, it\'s *very* real. I do it myself, with a little golden arrow. Although I must confess — I have a terrible aim. I once made a duke fall in love with a goose.',
          '@amorette:happy They were very happy.',
        ],
        flag: 'amorette_goose',
        next: 'lonely',
      },
      sight_time: {
        text: [
          'She stops writing.',
          '@amorette ...Hm. That\'s my favorite answer. Most people say "real," because it\'s easier. But the best love stories I\'ve ever narrated took *time.* Little moments. Hundreds of them. Until one day, you look up and realize it\'s been love for ages.',
          'She glances at you, and away.',
          '@amorette:blush Like this, maybe. Hypothetically.',
        ],
        flag: 'amorette_slowburn',
        next: 'lonely',
      },
      lonely: {
        text: [
          'By the time you\'ve ranked four hundred tropes, it\'s past midnight. She rolls up the last scroll and leans back on the altar steps, looking up at her own statue.',
          "@amorette Oh, I've always liked this part. The quiet bit, after midnight, when the candles are low.",
          '@amorette Do you know what the hardest part of being the Goddess of Love is?',
          '@amorette:sad Watching. Always watching. Every first kiss, every wedding, every "I love you" in every language. I\'m there for all of it. I\'m just never *in* it.',
          '@amorette:sad I\'m always the narrator. Never the heroine.',
        ],
        choices: [
          { text: '"You can be the heroine of mine."', go: 'heroine', aff: 10 },
          { text: 'Offer her the last of the popcorn.', go: 'popcorn', aff: 7 },
        ],
      },
      heroine: {
        text: [
          'She turns to look at you. Her golden eyes are very bright.',
          '@amorette:surprised ...Careful, darling. You\'re saying that to the one being in existence who can tell *exactly* how much you mean it.',
          '@amorette:blush And you mean it a *lot.*',
          'She smiles, small and astonished, and doesn\'t say anything else for a long time.',
        ],
        flag: 'amorette_heroine',
        end: true,
      },
      popcorn: {
        text: [
          'You hold out the bowl. She takes a piece, then looks at it in her palm.',
          '@amorette:blush You always share. Every time. I\'ve watched you share with everyone — strangers, street cats, the pigeons, who did *not* deserve it.',
          '@amorette:happy It\'s the most romantic thing about you, and you don\'t even know it.',
        ],
        flag: 'amorette_shared',
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'The temple is dim tonight. Half the candles have gone out. Amorette is sitting on the altar steps, and something is wrong: her hair isn\'t drifting. Her gown is just a dress. Her golden eyes have faded to warm brown.',
          '@amorette:surprised Oh. You\'re here. I didn\'t know you\'d come. I *always* know. I didn\'t know.',
          "@amorette:sad This has never — I don't *remember* this part. I mean — nothing like this has ever happened before. Obviously. That's what I meant.",
          '@amorette:sad Something\'s happening to me. I\'m losing my divinity, darling. Bit by bit. I tried to narrate the baker rehearsing his proposal this morning — he practises it on a loaf every day — and I couldn\'t *see* it. I tried to fire an arrow and it just... fell on the floor.',
          '@amorette There\'s an old law. Gods who fall in love with mortals become a little mortal themselves. I always thought it was a myth.',
          { if: 'amorette_slowburn', text: "@amorette:sad You told me love takes time. Little moments, hundreds of them. I thought I had all the time in the world. I'm a *goddess.* And then the moments went and added up when I wasn't looking." },
          'She looks up at you. She looks frightened, and very young.',
        ],
        choices: [
          { text: '"Is it because of me?"', go: 'because', aff: 6 },
          { text: 'Sit beside her and take her hand. "Then we\'ll figure it out together."', go: 'together', aff: 10 },
        ],
      },
      because: {
        text: [
          '@amorette:angry Of course it\'s because of you, you magnificent idiot. Who else would it be?',
          'She laughs, wet and shaky.',
          '@amorette:blush I\'m the Goddess of Love, and I didn\'t see it coming. That\'s *professionally embarrassing,* darling. There\'ll be a hearing.',
        ],
        next: 'choice',
      },
      together: {
        text: [
          'Her hand is warm. Ordinary. Mortal. She looks down at your fingers wrapped around hers like it\'s the most extraordinary thing she\'s ever seen.',
          '@amorette:blush Together. That\'s... I\'ve narrated that word ten million times. I never knew what it *felt* like.',
        ],
        next: 'choice',
      },
      choice: {
        text: [
          { if: 'amorette_heroine', text: "@amorette:sad You said I could be the heroine of yours. I didn't know heroines got this *scared.* In the books they always look so composed. I've been lying to people for ten thousand years." },
          '@amorette:sad If I keep falling for you, I\'ll lose it all. The arrows, the omniscience, the narrating. I\'ll be... just a woman. With pink hair and a popcorn habit.',
          '@amorette:sad And if I stop — if I go back up — I\'ll be a goddess forever. Watching. Narrating. Alone.',
          '@amorette What would *you* do?',
        ],
        choices: [
          { text: '"I don\'t want you to lose yourself for me."', go: 'lose', aff: 10 },
          { text: 'Make her laugh. "Being mortal\'s great. We have naps." [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'naps', fail: 'lose_try' },
        ],
      },
      lose_try: {
        text: [
          "@you Being mortal's great. We have naps.",
          "She doesn't laugh. She smiles, which is worse, because it's the smile of someone being brave.",
          "@amorette:sad That's lovely, darling. It isn't an answer.",
          "So you give her the true one instead.",
          "@you I don't want you to lose yourself for me. If going back is what you need, go.",
        ],
        next: 'lose',
      },
      lose: {
        text: [
          'She stares at you.',
          '@amorette:surprised You... you\'d tell me to go back? Even though it means you\'d lose me?',
          '@you If it\'s what you need. I want you to be happy.',
          'A tear slides down her cheek — and as it falls, it begins to glow, faintly gold. Then another. All around the temple, the candles flicker back to life, one by one.',
          '@amorette:sad Oh. Oh, you *fool.* That\'s the most selfless thing anyone\'s ever said to me. And selfless love is the strongest magic there is.',
          'Her hair begins to drift again. Her eyes turn gold. She laughs, astonished.',
          '@amorette:happy It\'s not *taking* my divinity. It\'s *changing* it. I\'m not losing anything. I\'m finally *feeling* what I\'ve been giving away for ten thousand years.',
        ],
        aff: 5,
        flag: 'amorette_selfless',
        next: 'kiss',
      },
      naps: {
        text: [
          '@you Being mortal\'s great. We have naps. And cake. And stubbing our toes, which builds character.',
          'Her mouth twitches. Her shoulders shake. Then she bursts out laughing — and with every peal of laughter, a candle in the temple flickers back to life.',
          '@amorette:happy *Naps!* You\'re selling me mortality on *naps!*',
          '@you They\'re really good naps.',
          'She laughs until she cries, and the tears glow gold, and her hair begins to drift again.',
          '@amorette:surprised Oh — oh, I understand now. It\'s not taking my divinity away. Love doesn\'t make you less. It makes you *more.*',
        ],
        aff: 12,
        flag: 'amorette_naps',
        next: 'kiss',
      },
      kiss: {
        text: [
          'She leans in and kisses you. It\'s sweet and warm and tastes like popcorn and starlight.',
          'Somewhere, very far away, you hear a slightly nasal voice say: *"...and then the Goddess kissed the protagonist, and — oh, gosh, am I narrating now? Nobody told me I was narrating."*',
          'Amorette pulls back, laughing.',
          '@amorette:smug Oh, that\'s my substitute. Cupid\'s nephew. He\'s *terrible.* Ignore him.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Amorette doesn\'t meet you at the temple. Instead, a single rose petal drifts in front of you as you leave the square, then another, then a trail of them, leading you up out of the town and into a meadow you\'ve never seen before — a meadow that, you\'re fairly sure, wasn\'t there yesterday.',
          'It\'s the field of roses from your dream: endless, glowing softly under a sky full of stars, with a swing hanging from nothing. She\'s sitting on it, kicking her heels.',
          '@amorette:happy I made it. Just for tonight. Every rose is a love story I narrated. Eleven million, four hundred thousand and six.',
          {
            if: 'amorette_floor',
            text: "There is no bed in the meadow. There is, however, a great deal of extremely soft floor. Amorette sees you notice and looks enormously pleased with herself. \"Mortal suggested floor,\" she says. \"I investigated.\"",
            else: { if: 'amorette_one_bed', text: "@amorette:smug You said it depends entirely on who's in the bed. So I didn't make a bed. I made a *meadow.* Let's see what it depends on now." },
          },
          'She hops down from the swing and comes to you.',
          '@amorette:blush And I wanted the eleven million, four hundred thousand and *seventh* to be mine.',
        ],
        choices: [
          { text: '"Then let\'s write it."', go: 'write', aff: 10 },
          { text: '"Do you want to narrate this part, or should I?" [Charm check 4]', check: { stat: 'charm', dc: 4 }, pass: 'narrate', fail: 'write' },
        ],
      },
      write: {
        text: [
          'She smiles, and it\'s nothing like her usual impish grin. It\'s soft and certain and a little shy.',
          '@amorette:blush Yes. Let\'s.',
        ],
        next: 'night',
      },
      narrate: {
        text: [
          'She laughs, delighted, and then thinks about it seriously.',
          '@amorette:happy ...Neither. For once in my existence, I don\'t want to narrate. I just want to *be here.*',
          "@amorette:blush But you offered. Nobody's ever offered to tell it *for* me before. I'm going to remember that, darling. Gods remember *everything.*",
          'She snaps her fingers.',
          '@sub Uh, hi, substitute Narrator here, the Goddess has asked for some privacy, so I\'ll just — I\'ll be over here — looking at a different part of the meadow —',
          '@amorette:angry *Further away, Kevin.*',
          '@sub Right! Sorry! Going!',
        ],
        aff: 14,
        flag: 'amorette_narrator',
        next: 'night',
      },
      night: {
        text: [
          "She kisses you among the roses. The petals rise around you like a slow, sweet storm.",
          "@amorette:blush I have narrated this moment eleven million times. I know every word that's ever been said in it.",
          "@amorette:surprised I have no idea what to say.",
          "@you Then don't say anything.",
          "Her gown, which was made of something like sunset, simply fades away into twilight at your touch, and she laughs, startled and delighted, as if even she didn't know it would do that.",
          "For a goddess of love, she's surprisingly nervous for about thirty seconds, then surprisingly giddy, then completely, overwhelmingly *present.* There's no omniscience, no distance, no watching from above. She's just here with you, gasping at sensations she's described eleven million times and never once felt herself.",
          "@amorette:surprised Oh. Oh, the *poets.* The poets got it so wrong. I'm going to have words with every single one of them —",
          "@you Later.",
          "@amorette:blush Later. Yes. *Much* later.",
          "The roses glow brighter wherever she touches you. At one point she laughs and a shower of tiny golden hearts erupts into the air around you. She says *oh, that's embarrassing, that hasn't happened since the Renaissance*, and then you kiss her again and she forgets to be embarrassed.",
          "And here, as you may have noticed, the Narrator falls silent. For once in ten thousand years, she's too busy to describe what happens next...",
          "...",
          "@sub Uh. Hi. It's me again, the substitute. She's told me I can come back now. She also said to tell you the meadow will remember this forever. Every rose. Apparently that's a big deal in goddess circles.",
          "Later, you lie together in the roses, watching the stars. She rests her head on your chest, idly drawing hearts on your skin.",
          { if: 'amorette_naps', text: "@amorette:surprised ...Darling. My eyes keep closing on their own. Everything's warm and heavy and slow. Is this — is this a *nap?* Is this what you were selling me? Oh. Oh, I *see.* I'm sorry I laughed." },
          "@amorette:sad Ten thousand years I've been writing endings. *Happily ever after.* I always thought that was the end of the story.",
          "@amorette It isn't, is it? It's just the part where the narrator stops talking.",
          "@you And then what?",
          "@amorette:happy And then you get to live it.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake in your own bed in Clichéton, with no idea how you got there. The meadow is gone. There's a rose on your pillow, and a voice in your ear.",
          "@narrator Good morning, darling. I narrated you home. Very gently. You didn't wake once.",
          "And then she's there in person, lying beside you in your little rented room, hair drifting in a breeze that doesn't exist, wearing a dressing gown made of dawn.",
          "@amorette:happy I've been narrating your neighbors while you slept. The baker proposed to the blacksmith at four this morning. He said yes. I cried. I'm so emotional now. It's dreadful. I *love* it.",
          { if: 'amorette_goose', text: "@amorette:smug Also the duke sent a card. And the goose. Separately. The goose's handwriting is better." },
          { if: 'amorette_selfless', text: "@amorette:blush You told me to go back up, if that's what I needed. Nobody's ever wanted to give me back to the sky before. Everyone *wants* something from a goddess. You wanted me to be happy. ...So I stayed. Isn't that funny?" },
          "She props herself up on one elbow and looks at you with shining golden eyes.",
          "@amorette:smug So. Tell me honestly. How was it, being the protagonist of the goddess of love's first romance?",
        ],
        choices: [
          { text: "\"Ten out of ten. No notes.\"", go: "ten", aff: 6 },
          { text: "\"You stopped narrating. Who's narrating now?\"", go: "who", aff: 5 },
          { text: "\"I want a sequel.\"", go: "sequel", aff: 6 },
        ],
      },
      ten: {
        text: [
          "She claps her hands, delighted.",
          "@amorette:happy *Ten!* No notes! That never happens. The poets *always* have notes.",
          "@amorette:blush ...I have one note, actually. The bit with the golden hearts. I'd like to apologize to the Renaissance.",
        ],
        flag: 'amorette_ten',
        end: true,
      },
      who: {
        text: [
          "@amorette:smug Oh, Kevin's still covering the slow parts. He's terribly nervous. Listen.",
          "@sub ...and the protagonist lay in bed with the goddess, and, um — oh, gosh, they're looking at me — I'll just — I'll narrate the weather —",
          "@amorette:happy He's sweet. Leave him. I'd rather be in the story this morning than outside it.",
          "She pulls the covers up over both your heads, and for a while, nobody narrates anything at all.",
        ],
        flag: 'amorette_kevin',
        end: true,
      },
      sequel: {
        text: [
          "Her golden eyes go wide. Then she grins, slow and wicked and divine.",
          "@amorette:smug A *sequel.* Oh, darling. Don't you know the second installment is always steamier?",
          "@amorette:smug It's a rule. I wrote it.",
          "The rose on your pillow bursts into full bloom. Somewhere outside, the morning bells ring for no reason at all.",
        ],
        flag: 'amorette_sequel',
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'On the festival hill, the crowd is gathered, waiting for the stars. And then everyone gasps, because the statue of the Goddess of Love on the temple dome has started to glow — and from it, a shower of rose petals is drifting down over the whole town.',
          'She steps out of the falling petals beside you: hair drifting, eyes gold, gown like sunset. Every head on the hill turns.',
          '@amorette:smug Sorry, darling. I *had* to make an entrance. It\'s in my job description.',
          { if: 'amorette_sequel', text: "@amorette:blush You asked for a sequel. I promised it'd be steamier. So I've made the stars *hotter* this year. Technically. Astronomically. Don't stand too close to the edge." },
          { if: { seenEnding: 'amorette' }, text: "@amorette:blush ...You came up the hill to me. You always — no. Never mind. Goddess thing. I get *feelings* about hills." },
          'She takes your hand and turns to face the sky.',
          '@amorette Do you know who makes the stars fall at Starfall?',
          '@you ...You?',
          '@amorette:happy Me! Every year. It\'s my favorite night. This year, I wanted to watch it from down here. With you.',
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'She lifts her free hand, and the stars begin to fall: thousands of them, more than any Starfall in living memory, streaking across the sky in pink and gold and silver, spelling out — just for a moment, if you squint — two names.',
          '@amorette:smug Too much?',
          '@you Way too much.',
          '@amorette:happy *Perfect.*',
          'She kisses you under the falling stars, in front of the whole town, and every couple on the hill finds themselves kissing too, without quite knowing why.',
        ],
        next: 'choose',
      },
      choose: {
        text: [
          "When the kiss ends, she doesn't let go. She stays very close, forehead against yours, while the sky burns.",
          "@amorette Darling. Do you know what happens to the narrator, after *The End?*",
          "@amorette:sad ...No. Never mind. Not tonight. Tonight I'm *in* it.",
          "@amorette:blush I've written eleven million, four hundred thousand and six endings. Every one of them for somebody else. So I'd like *you* to choose this one. However you want it to go. I promise not to edit.",
          "@amorette:smug Much.",
        ],
        choices: [
          { text: '"Stay just as you are. Half the sky, half a cottage. All mine."', go: 'epilogue' },
          { text: '"Come down, then. All the way. I\'ll teach you naps. And sunsets."', go: 'mortal', if: { any: ['amorette_naps', 'amorette_sunset'] } },
          { text: '"Take me up with you. Let me help you tell them."', go: 'ascend', if: { any: ['amorette_narrator', 'amorette_heroine'] } },
        ],
      },
      epilogue: {
        text: [
          '@sub Uh — hi! Substitute Narrator again. The Goddess is... busy. So I\'ll just, um, wrap things up.',
          '@sub *Some time later...*',
          '@sub Amorette never quite goes back to being a full-time goddess. She splits her time: mornings in the heavens, arranging love stories (her aim has gotten better); evenings in a little cottage near the temple, with you.',
          '@sub She still eats popcorn while watching couples. Now she makes you watch with her and narrates out loud, and you rate her narration out of ten. She always gets a ten. You\'re very biased.',
          '@sub The temple has a new statue now. It\'s of the Goddess of Love, holding hands with someone very ordinary-looking. Pilgrims come from all over to see it. They say it\'s the most romantic statue in the world.',
          '@sub And every Starfall, the stars spell out two names, just for a moment, if you squint.',
          '@amorette:happy *Kevin, that was lovely. You can go now.*',
          '@sub Oh! Thank you! Okay! Bye!',
        ],
        ending: 'amorette',
      },
      mortal: {
        text: [
          "She goes very still. The falling stars hang in the sky for a heartbeat, as if listening.",
          "@amorette:surprised All the way? No arrows? No narrating? No omniscience?",
          "@you No popcorn from the offering bowl. You'd have to buy it like everyone else.",
          "@amorette:sad ...I'd get *old,* darling. I'd get colds. I'd forget where I put things. I'd never know how anyone's story ends unless they *told* me.",
          "@you Neither do I. It's the best part.",
          "She laughs, and the laugh cracks in the middle. Then she reaches up, takes hold of something you can't see above her head — a thin gold thread, running all the way up into the sky — and, very gently, lets it go.",
          "Her hair stops drifting. Her eyes fade from gold to warm, ordinary brown. The last star of Starfall falls, all by itself, and nobody makes it.",
          "@amorette:blush ...Oh. It's *so quiet.* Is it always this quiet in your head? How do you *stand* it? — Hold my hand. Don't let go. I don't know what happens next, and it's *wonderful.*",
        ],
        next: 'mortal_epilogue',
      },
      mortal_epilogue: {
        text: [
          "@sub Um. Hi. It's Kevin. I'm — I'm the Narrator now. Full time. Officially. There was a ceremony. I wore a hat.",
          "@sub *Some time later...*",
          "@sub Amorette — just Amorette, of Clichéton, no titles — catches her first cold in the autumn and is convinced she's dying. She writes three wills. All of them leave everything to you, and the popcorn bowl to the cat. She recovers by Tuesday and is furious about it.",
          "@sub She opens a little bookshop by the temple, specialising in romance. She can't see the red threads any more, so she matchmakes the old-fashioned way: with opinions. Her aim is somehow worse than it was with arrows. Business is booming.",
          "@sub She learns naps. She takes them very seriously. She learns sunsets, and watches every single one from the end of the pier with you, and doesn't describe any of them. Not once.",
          "@sub She can't hear me any more. She says she misses it sometimes, the narration. So at night, in bed, you read her mine. Out loud. She says I've gotten very good. ...She says I still use too many adverbs. She's very, very right.",
          "@sub The year she finds her first grey hair, she throws a party.",
          "@sub And every Starfall, the two of you climb the hill with everyone else, and look up, and wait for the stars, like anyone does. You don't know who makes them fall now. Neither does she.",
          "@sub She says that's the most romantic thing she's ever not known.",
          "@sub ...Was that alright? I did my best. I — oh, she can't hear me. Right. Okay. Bye!",
        ],
        ending: 'amorette_mortal',
      },
      ascend: {
        text: [
          "@amorette:surprised Up? With *me?*",
          "@you You said you're always the narrator, never the heroine. I don't want you up there alone, telling everyone else's story. I want to be in the telling.",
          "Her hair lifts all at once, as if the whole sky has just breathed in. She starts to laugh, and the laugh turns to light, and the light runs down her arm and into your hand.",
          "@amorette:happy You *can't* just ascend, darling. It doesn't work like that. There are forms. Councils. A minor god of paperwork who hates me personally.",
          "@amorette:blush ...But you *did* tell me what to do with my divinity once. And I'm a goddess. And it's my favorite night. And nobody's ever asked to come *up.*",
          "The stars are falling. You feel your feet leave the hill. You feel the whole town, all at once: every pair of hands being held, every kiss, every glance across the crowd, every heart beating a little too fast. It's deafening. It's wonderful. She's holding your hand through all of it.",
          "@amorette:smug Breathe, darling. You'll get used to it. Now — what shall we call you?",
        ],
        next: 'ascend_epilogue',
      },
      ascend_epilogue: {
        text: [
          "@amorette *Some time later...*",
          "@you The Pantheon of Generic FantasyLandia gains a new minor deity: {name}, Patron of the Second Glance. The moment someone looks back over their shoulder, just to check.",
          "@amorette:smug It's a very small portfolio. I gave it to them myself. It's my *favorite* one.",
          "@you We narrate together now. It's mostly arguing. She wants \"smouldering.\" I want \"warm.\" We compromise on \"smouldering warmly\" and the lovers of four kingdoms are very confused.",
          "@amorette:happy They take the mornings, I take the evenings, and we both take Starfall. They're dreadful with arrows. They just walk up to people and *say* things. It works *alarmingly* well.",
          "@you The temple has two altars now, and two popcorn bowls. Kevin is our intern. He's thriving.",
          "@amorette:blush And every time a baker looks twice at a blacksmith, or a pirate looks back at the dock, or someone at a festival glances over to see who's watching them —",
          "@you — we're both there. Watching. Together.",
          "@amorette:blush For the first time in ten thousand years, darling, the Narrator isn't telling it alone.",
          "@amorette:smug ...Ten out of ten?",
          "@you No notes.",
        ],
        ending: 'amorette_ascend',
      },
    },
  },
});
