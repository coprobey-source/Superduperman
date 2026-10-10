FL.addCharacter({
  id: 'sylvaine',
  name: 'Sylvaine Elderleaf',
  short: 'Sylvaine',
  trope: 'Ancient Wise Elf',
  color: '#7fcf9a',
  favStat: 'wits',
  endingTitle: 'A Season Among Centuries',
  endings: {
    sylvaine_apprentice: 'The Last Apprentice',
    sylvaine_blue: 'Blue Hair, Again',
  },
  teaser: 'A tall woman with long pointed ears reads three books at once, all of them floating.',
  blurb: 'An elven archmage of nine hundred and twelve years. Serene, sardonic and devastatingly clever, she has outlived kingdoms and finds most mortals charmingly brief. She claims she has nothing left to learn. She is wrong.',
  schedule: ['library', 'forest', 'forest'],
  gifts: { love: ['tome'], like: ['herbs', 'tea', 'scroll', 'polish', 'strings'], hate: ['axe', 'ale', 'mead'] },
  giftLines: {
    love: ['Her eyes widen — genuinely widen, which you suspect hasn\'t happened in a century.', '@sylvaine:surprised The Codex of Vel\'Mara. I thought every copy burned in the Second Sundering. Where did you — no. Don\'t tell me. Let me have the mystery. Thank you, little one.'],
    like: '@sylvaine:happy How thoughtful. You know, I believe that\'s the first gift a mortal has given me in sixty years. The last was a goat. I\'m still not sure why.',
    neutral: '@sylvaine:smug Ah. Mortal trinket. I\'ll treasure it for the brief span of your lifetime, which, to me, is about a week and a half.',
    hate: ['She regards it with the weary disappointment of someone who has watched forests fall.', '@sylvaine:sad I see. Well. I suppose not everyone can be thoughtful.'],
    special: {
      tome: [
        'She takes the tome in both hands. It is old, and dusty, and the lock on it is trying very feebly to bite her. She soothes it with one fingertip, and it purrs.',
        '@sylvaine:surprised The Codex of Vel\'Mara. I thought every copy burned in the Second Sundering. I *watched* it burn. I wept for a decade.',
        '@sylvaine:happy Where did you — no. Don\'t tell me. Let me have the mystery. It\'s been so long since anything surprised me that I\'d like to keep this one in a jar.',
      ],
      fork: [
        'She holds the fork up to the light and turns it slowly, as one might turn a historical artifact.',
        '@sylvaine:happy Oh, the *fork.* You know I was there when it caught on? Year four hundred and six. Everyone was so excited. There were parades. A man named Oswin was knighted for the third tine.',
        '@sylvaine:smug Nobody remembers Oswin now. Except me. And now you. Keep that in your quick little brain. Someone ought to.',
      ],
      strings: [
        'She takes the coil of silver lute strings and goes very quiet, running them through her fingers.',
        '@sylvaine:sad Aldric used to break these. Every single performance. He played so hard he snapped the top string by the second verse, and then he\'d just carry on, a string short, grinning at me.',
        '@sylvaine He was a terrible musician. I still have his lute. I\'ve never restrung it.',
        '@sylvaine:happy ...Perhaps I will. Thank you, little one. That was kind, even if you didn\'t know it would be.',
      ],
      polish: [
        'She unscrews the little pot. It is hot pink, and it glitters, and it is in every possible way the opposite of nine hundred years of serene elven dignity.',
        '@sylvaine:smug Do you know, the Conclave of Elders meets next month. Thirteen ancients in silver robes, sitting in a circle, discussing the slow death of the world.',
        '@sylvaine:happy I am going to wear this. I am going to drum my fingers on the table the *entire* time.',
      ],
      scroll: [
        '@sylvaine:smug A scroll of Minor Sparkles. How sweet. I could cast that when I was four hundred. I could cast that *asleep.*',
        'She unrolls it anyway and reads the spell aloud. A small cloud of glitter puffs out and settles over both of you.',
        '@sylvaine:happy ...That never stops being funny, actually. Don\'t tell the Conclave.',
      ],
      novel: [
        'She reads the title aloud. *The Duke\'s Forbidden Passion, Volume IX.*',
        '@sylvaine:smug I\'ve read the first eight. Volume three was extremely inaccurate about elves. We are not "insatiable in the springtime." We are insatiable *year-round*, and far more organized about it.',
        '@sylvaine:blush ...I didn\'t say that. You didn\'t hear that. I am a very serious archmage.',
      ],
      axe: [
        'She looks at the battle axe. The trees at the edge of the glade seem to lean away from it.',
        '@sylvaine:sad I see. And which of my friends were you planning to use this on? The birch? The old oak? He\'s three hundred years younger than me. He\'s practically a child.',
      ],
    },
    repeat: '@sylvaine:smug Again? Little one, I have a very long memory. I remember the *first* time you gave me this. I remember the second. Do try to surprise me. I\'m told it\'s good for my health.',
  },
  talk: [
    ['@sylvaine:smug Ah, the little mortal. You\'ve grown. No, wait. You haven\'t. Mortals grow so slowly in the ways that matter, and so quickly in the ways that don\'t.'],
    ['@sylvaine When I was young, that hill over there was a mountain. And Clichéton was a swamp. And humans hadn\'t invented the fork yet.', '@sylvaine:happy The fork was a big moment. Everyone was very excited.'],
    ['@sylvaine You want wisdom? Very well. Never trust a wizard who says "trust me." Never eat yellow snow, or yellow mushrooms. And never, ever let a dwarf choose the music.'],
    ['@sylvaine:blush I was young and foolish once. Around three hundred years ago. I dyed my hair blue and ran off with a bard. Don\'t look at me like that.'],
    ['She is lying in a patch of sunlight in the grass, eyes closed, perfectly still.', '@sylvaine:smug I am not napping. I am *contemplating eternity.* Sit down. Contemplate with me.'],
    ['@sylvaine Your little brain is fascinating. You think so *fast.* Leaping to conclusions like a frog leaping to lily pads. Some of them are even right.'],
    ['@sylvaine:sad The library is replacing its oldest catalogue. Two hundred years of my handwriting in the margins. "See also." "Wrong." "This author was a fraud and also had terrible breath."', '@sylvaine:smug They\'ve asked me to sign the new one. I\'ve written "wrong" on the cover. It\'s a start.'],
    ['@sylvaine:smug A student asked me today what the secret to a long life is. I told him: be an elf.', '@sylvaine He seemed disappointed. I don\'t know what he expected. Vegetables?'],
    ['She is reading a book upside down, frowning.', '@sylvaine It isn\'t upside down. It\'s a dwarven text. They write from the bottom up, because they think the important part should be closest to the ground. It\'s very sensible. Don\'t tell them I said so.'],
    ['@sylvaine:happy Do you know what I love about mortals? You\'re so *urgent.* Everything matters. Every breakfast is a crisis. Every rainy day is a tragedy.', '@sylvaine:sad I used to find it exhausting. Lately I find I\'m jealous.'],
    { if: 'sylvaine_gambit', lines: ['She has the crystal chessboard set up on the stone, frozen at the exact moment of your Shepherd\'s Gambit.', '@sylvaine:smug I haven\'t moved it. I come here in the mornings and look at it. I\'ve found eleven ways I could have prevented it.', '@sylvaine:happy None of them would have been as much *fun.*'] },
    { if: 'sylvaine_chaos', lines: ['@sylvaine:angry I have been analyzing our chess game. Four days. Nine hundred years of strategy, and I still cannot find your plan.', '@you I didn\'t have a plan.', '@sylvaine:smug So you *say.* That\'s exactly what someone with a very deep plan would say.'] },
    { if: 'sylvaine_quiet', lines: ['She doesn\'t look up from her book when you sit down. She simply moves over on the bench to make room.', 'The two of you read in silence for an hour. When you finally get up to leave, she says, without looking:', '@sylvaine:happy Thank you. That was the best conversation I\'ve had all week.'] },
    { if: { stage: 3 }, lines: ['@sylvaine:sad I keep a ledger of things I want to remember. Nine hundred years of it. It\'s mostly very important. The fall of Vel\'Mara. The day the moon cracked.', '@sylvaine:blush I\'ve noticed the last thirty pages are all you. What you said. The face you made at the tea. I\'m an archmage, little one. This is *very* embarrassing.'] },
    { if: ['sylvaine_stories', { stage: 3 }], lines: ['@sylvaine Shall I tell you another one? A story. You liked the moon one.', '@sylvaine:happy This is the one about the dwarf who tried to tunnel to the sky. It ends badly. It\'s my favorite. Sit closer, it has *voices.*'] },
  ],
  afterTalk: [
    ["@sylvaine:happy I caught myself humming in the library today. Out loud. A student stared at me. I stared back until he left. It was very satisfying."],
    ["She tucks a leaf into your hair, very seriously.", "@sylvaine:smug Silverbough. It means \"I am thinking of the glade.\" Elves have a whole language of leaves. You'll find I've been very *talkative* lately."],
    ["@sylvaine:blush I've been reconsidering my position on patience. Nine hundred years of it, and last night I found myself counting the hours until sunset. Like a child."],
    ["@sylvaine The rings on my skin. A new one is forming. Very faint. Do you know what that means?", "She smiles.", "@sylvaine:happy It means this year matters."],
    { if: 'sylvaine_rings', lines: ["@sylvaine:sad I keep thinking about the pool. Your fingers on the rings, and you saying, *this one's darker.* Nobody ever looked closely enough to see.", "@sylvaine:happy I've decided you're going to be a very bright ring. Possibly garish. I don't mind."] },
    { if: 'sylvaine_glitter', lines: ["@sylvaine:smug Still finding glitter. From your first spell. In my hair, my books, my *tea.*", "@sylvaine:blush I could banish it with a word. I've decided not to. Every time a bit of it catches the light, I remember your face when it came out of your fingers instead of a flower."] },
    { if: 'sylvaine_mylove', lines: ["@sylvaine:blush \"Good morning, my love.\" I've said it every morning since. Even on the mornings you aren't there. I say it to the window. The window has no complaints."] },
    { if: 'sylvaine_everyday', lines: ["@sylvaine \"Every day I have.\" That's what you promised. I've been counting them. Not out of worry.", "@sylvaine:happy Out of greed. Every single one is mine. You said so."] },
    { if: 'sylvaine_date_harbor', lines: ["@sylvaine:happy I went back to the harbor. On my own. And bought fried fish. In paper.", "@sylvaine:smug A seagull tried to steal it. I turned it into a slightly smaller seagull. Don't tell the Conclave. I'm going back tomorrow."] },
    ["@sylvaine:smug I've started writing my memoirs. Volume one covers my first two hundred years. Volume two covers the next seven hundred.", "@sylvaine:blush Volume three is about this month. It's already longer than the other two put together."],
  ],
  dateFav: 'harbor',
  dates: {
    dinner: {
      start: {
        text: [
          'Sylvaine sits in the Tipsy Wyvern\'s corner booth with her hands folded, looking around the tavern with an expression of quiet, enormous nostalgia.',
          '@sylvaine:happy I was here the night it opened. Three hundred and forty years ago. It was called the Sober Wyvern then. That lasted about a fortnight.',
          'The barkeep sets down two bowls of stew. Sylvaine peers into hers, then sniffs it.',
          '@sylvaine:surprised Oh, my. It\'s the same stew.',
          '@you Same recipe?',
          '@sylvaine:smug No, little one. The same *stew.* They\'ve never emptied the pot. They just keep adding to it. There is a turnip in here older than your great-grandmother.',
        ],
        choices: [
          { text: 'Raise a spoon. "To the turnip." Eat with gusto.', go: 'turnip', aff: 5 },
          { text: 'Ask her what the town was like back then.', go: 'history', aff: 6 },
          { text: 'Ask the fiddler to play something for her. [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'fiddle', fail: 'fiddle_fail' },
        ],
      },
      turnip: {
        text: [
          'You raise your spoon solemnly. She stares at you. Then, very slowly, she raises hers.',
          '@you To the turnip. Who has seen so much.',
          '@sylvaine:happy To the turnip. Who has endured.',
          'You both eat. It\'s honestly delicious. Three hundred and forty years of slow simmering will do that.',
          '@sylvaine:smug You know, every scholar in the Academy would be appalled by this. I\'m dining on a historical artifact with a mortal in a tavern.',
          '@sylvaine:happy It\'s the most fun I\'ve had at dinner since the fork.',
        ],
        next: 'end',
      },
      history: {
        text: [
          '@sylvaine Back then? Mud, mostly. Pigs in the streets. A wizard on every corner swearing he could turn lead into gold. None of them could. One of them could turn gold into lead, which was a *much* less popular trick.',
          'She smiles, looking at the crowded room through three centuries.',
          '@sylvaine:sad That table there is where a girl named Bess used to sell pies. She was the funniest person I ever met. She died before the second bell tower was built.',
          '@sylvaine I don\'t usually tell people these things. It makes them sad. They realize I\'m looking at ghosts.',
          '@you I don\'t mind ghosts. Tell me about Bess.',
          '@sylvaine:happy ...She had a pie called "The Regret." Nobody knew what was in it. Everyone ordered it anyway.',
        ],
        next: 'end',
      },
      fiddle: {
        text: [
          'You catch the fiddler\'s eye, slip him a coin and whisper a request. He looks nervous, but he lifts his bow and plays something slow and old, a tune you heard Sylvaine humming once in the library.',
          'Sylvaine goes very still.',
          '@sylvaine:surprised That\'s "The Birch at Morning." That song is six hundred years old. Nobody plays it any more. How did you—',
          '@you You hum it when you think no one\'s listening.',
          'She looks at you for a long moment, and the tips of her ears go faintly pink.',
          '@sylvaine:blush ...I see I shall have to be much more careful about what I hum near you.',
        ],
        next: 'end',
      },
      fiddle_fail: {
        text: [
          'You catch the fiddler\'s eye and make an encouraging gesture that you hope means *something romantic, please.* He nods eagerly and launches into a dwarven drinking song about a goat.',
          'Sylvaine closes her eyes in pain.',
          '@sylvaine:angry What did I tell you? What is the *one rule*? Never let a dwarf choose the music.',
          '@you He\'s not a dwarf.',
          '@sylvaine:smug He *learned* from a dwarf. I can tell. It\'s in the wrists.',
        ],
        next: 'end',
      },
      end: {
        text: [
          { if: { stage: 4 }, text: 'When you leave, she slips her arm through yours and, instead of floating, walks. Footstep by footstep, like a mortal, matching your pace. "I want to feel how long the street is," she explains. "When you walk it."' },
          '@sylvaine:happy Thank you for dinner, little one. I\'ll remember it. I remember everything, but I\'ll remember this *on purpose.*',
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          'Sylvaine walks through the Moonlit Gardens with her hands clasped behind her back, critiquing every bush she passes like a disappointed tutor.',
          '@sylvaine:angry Too square. Too round. That one is supposed to be a swan, I think, but it looks like a duck that has given up.',
          'Then she stops in front of an old, gnarled rose bush in a forgotten corner, with small white flowers that smell of honey. Her whole face changes.',
          '@sylvaine:happy Oh. You\'re still here.',
          '@you You know this rose?',
          '@sylvaine:smug I *planted* this rose. Five hundred years ago, as a cutting from my mother\'s garden. Everything else in these gardens is a copy of a copy of it.',
        ],
        choices: [
          { text: 'Ask her to tell you about her mother.', go: 'mother', aff: 6 },
          { text: 'Offer to take a cutting of it, and plant it for her somewhere new.', go: 'cutting', aff: 5 },
          { text: 'Tease her: "So you\'re the reason all the bushes here are smug."', go: 'smug', aff: 3 },
        ],
      },
      mother: {
        text: [
          '@sylvaine:sad My mother was the gardener of the old Silverbough court. She could make a tree grow a single branch in a week, just by asking it nicely. She talked to everything. Rocks. Rain. Me, mostly, when I wasn\'t listening.',
          'Sylvaine touches one of the small white roses, very gently.',
          '@sylvaine She told me once that the hardest thing an elf ever learns is that *slowly* is not the same as *forever.* I was two hundred. I thought she was being dramatic.',
          '@sylvaine:happy I understand her better every year. And much better, recently.',
          'She doesn\'t say why. She doesn\'t need to.',
        ],
        next: 'end',
      },
      cutting: {
        text: [
          'She looks at you with real surprise.',
          '@sylvaine:surprised A cutting? You\'d take care of it?',
          '@you If you show me how.',
          'She takes a small silver knife from her sleeve and shows you: where to cut, how to wrap it, how to whisper to it so it isn\'t frightened. Her hands are cool over yours, guiding them.',
          '@sylvaine:happy It\'ll grow slowly. Mortals always want things to grow fast. This won\'t. You\'ll have to be patient with it.',
          '@sylvaine:smug Good practice, really. For being patient with *me.*',
        ],
        next: 'end',
      },
      smug: {
        text: [
          '@sylvaine:angry The bushes are not *smug.* The bushes are *dignified.*',
          '@you That one is definitely smug.',
          'She looks at the bush. The bush, a large topiary owl, does seem to be wearing a slightly superior expression.',
          '@sylvaine:smug ...Fine. It gets that from me. I may have whispered a few things to it, over the years. About the gardeners. And the Duke. And his trousers.',
          '@sylvaine:happy Plants are excellent listeners. Like you, on a good day.',
        ],
        next: 'end',
      },
      end: {
        text: [
          { if: { stage: 4 }, text: 'You sit together on a hidden bench under the old rose until the moon goes down. At some point she lies down with her head in your lap, silver hair spilling over your knees, and closes her eyes. "Not napping," she murmurs. "Contemplating you."' },
          '@sylvaine:happy You know, I\'ve walked these gardens four thousand times. That was the first time I noticed the smell of the roses in the dark.',
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          'Sylvaine stands at the end of the pier at sunset, looking out at the boats, the gulls and the fishermen, and the paper cone of fried fish in your hand, with an expression of total, delighted bewilderment.',
          '@sylvaine:surprised What is *that?*',
          '@you Fried fish. In paper.',
          '@sylvaine:surprised In *paper?* Since when?',
          '@you About forty years, I think.',
          '@sylvaine:happy *Forty years.* I\'ve been sitting in a library reading about the Second Sundering, and meanwhile, forty years ago, somebody invented *this.* And nobody *told* me.',
        ],
        choices: [
          { text: 'Give her the first piece, and watch her face.', go: 'first', aff: 6 },
          { text: 'Teach her how to keep the seagulls away.', go: 'gulls', aff: 4 },
          { text: '"I thought you said there was nothing left to learn."', go: 'nothing', aff: 5 },
        ],
      },
      first: {
        text: [
          'You hand her a piece. She examines it carefully. She sniffs it. She takes a small, scholarly bite.',
          'Then she stops. She chews. Her eyes widen. She looks at you with an expression of complete betrayal.',
          '@sylvaine:surprised This is *wonderful.* It\'s crunchy and hot and salty and greasy and it\'s *ruining my robe,* and it\'s wonderful.',
          '@sylvaine:happy Give me another. No — give me the paper. I want to see how it\'s folded. This is a revolution, little one. This is the fork all over again.',
          'She eats the entire cone. You buy another. She eats half of that one too.',
        ],
        next: 'end',
      },
      gulls: {
        text: [
          'A gull lands on the railing beside her and eyes her fish with obvious intent.',
          '@you You have to wave your arms and shout. Like this.',
          'She tries. It\'s the most undignified thing you have ever seen an archmage do. The gull is unimpressed.',
          '@sylvaine:angry I have unmade storms. I have bound demons. I have argued with *dwarves.* I will *not* be defeated by a bird.',
          'She flicks a finger. The gull floats gently into the air, turns three somersaults, and is deposited, very surprised, on top of a mast.',
          '@sylvaine:smug ...That was cheating. Don\'t tell anyone. I have a reputation for serenity.',
        ],
        next: 'end',
      },
      nothing: {
        text: [
          'She opens her mouth to answer, then closes it. She looks at the fish. She looks at the sea, where the sun is setting in a long red stripe.',
          '@sylvaine:sad I did say that. On my nine-hundredth birthday. I told the Conclave I had learned everything worth learning, and I would spend the rest of my centuries reading.',
          '@sylvaine:smug It turns out, little one, I was a pompous old fool. Don\'t agree with me. I can tell you\'re about to agree with me.',
          '@sylvaine:happy It turns out there\'s fried fish. And you. And I\'ve been in a library.',
        ],
        next: 'end',
      },
      end: {
        text: [
          'The two of you sit at the very end of the pier with your legs dangling over the water as the sun goes down. She has grease on her fingers and salt on her lips, and she has never looked less like an ancient archmage.',
          { if: { stage: 4 }, text: 'She kisses you as the last light goes, and tastes of salt and vinegar, and laughs against your mouth about it. "Nine hundred years," she says, "and this is the best kiss I\'ve had at a harbor. There have been several harbors."' },
          '@sylvaine:happy We\'re coming back here. Every week. I\'ve decided. I need to know what else I\'ve missed in the last forty years.',
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          'Sylvaine does not believe in carrying picnic baskets. Hers floats along behind you through Whisperwood like a well-trained dog, and the blanket unfolds itself on the grass of a sunny clearing before you\'ve even sat down.',
          'The forest knows her. Flowers lean toward her as she passes. A fox trots up, sits down, and looks at her expectantly. She hands it a grape without looking.',
          '@sylvaine:happy Ah. That\'s Bramble. Or Bramble\'s great-great-great-granddaughter. They all look the same, and they all want grapes.',
          'The teacups pour themselves. The sandwiches cut themselves into triangles. Sylvaine leans back on her elbows in the sunlight and sighs.',
          '@sylvaine:smug Well, little one? Entertain an old elf.',
        ],
        choices: [
          { text: 'Make tea the mortal way, by hand, and serve her a cup.', go: 'tea', aff: 6 },
          { text: 'Lie down in the grass. "Contemplate eternity with me."', go: 'eternity', aff: 5 },
          { text: 'Challenge her to a game of skipping stones on the stream. [Wits check 3]', check: { stat: 'wits', dc: 3 }, pass: 'stones_win', fail: 'stones_lose' },
        ],
      },
      tea: {
        text: [
          'You stop the floating teapot, pour it yourself, add a splash of milk, stir it, and hand her the cup with both hands.',
          'She looks at the cup, then at you, puzzled.',
          '@sylvaine:surprised You... poured it. With your hands.',
          '@you It tastes better when someone makes it for you.',
          'She takes a sip. Then another. Something in her face goes soft and very young.',
          '@sylvaine:blush ...It does. It does, doesn\'t it. I\'d forgotten. Nobody has made me tea since my mother.',
        ],
        next: 'end',
      },
      eternity: {
        text: [
          'You lie back in the grass, close your eyes, and fold your hands on your chest. After a moment you hear her lie down beside you.',
          '@sylvaine:smug What are you contemplating?',
          '@you The clouds. That one looks like a dragon.',
          '@sylvaine:happy That one *is* a dragon. Very high up. He\'s called Thessaly, he\'s seven hundred years old, and he owes me money.',
          'You lie there in the sun together until you genuinely can\'t tell whether you\'re contemplating eternity or just napping. She claims it\'s the same thing, done properly.',
        ],
        next: 'end',
      },
      stones_win: {
        text: [
          'You find the flattest stone on the bank, study the current and send it skipping across the stream: one, two, three, four, *five*, six, seven.',
          'Sylvaine stares.',
          '@sylvaine:surprised Seven. Without magic. How did you—',
          '@you Angle, speed and spin. Mostly angle.',
          'She tries it. Without magic. Her stone hits the water and sinks immediately, with a sad little *plunk.*',
          '@sylvaine:happy Again. Teach me again. I want to do it the *mortal* way. I\'ve never learned anything the mortal way.',
        ],
        aff: 6,
        next: 'end',
      },
      stones_lose: {
        text: [
          'You throw your stone. It hits the water with a *plop* and sinks. You throw another. It goes sideways and hits a frog, which looks offended.',
          'Sylvaine flicks a pebble with one finger. It skips forty-three times, curves gracefully around a rock, and comes back to land in her palm.',
          '@sylvaine:smug Practice, little one. Nine hundred years of it.',
          '@sylvaine:happy Here. Hold it like this. No — like *this.* Oh, you\'re hopeless. Come closer, I\'ll show you.',
        ],
        aff: 3,
        next: 'end',
      },
      end: {
        text: [
          'The afternoon slides by, slow and golden. Bramble the fox steals a sandwich and is forgiven.',
          { if: { stage: 4 }, text: 'Later, when the light turns amber, she pulls you down onto the blanket beside her and kisses you, slowly, the way she does everything. Her hair falls around you like a curtain, and the forest politely looks away.' },
          '@sylvaine:happy Do you know, I\'ve had picnics with kings. With a dragon, once. This is better. You\'re much less pompous than a king. You\'re *slightly* more pompous than the dragon.',
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'In a quiet corner of the Grand Library, a woman sits cross-legged in midair, a foot above her chair. Three books float around her, pages turning themselves. A teacup orbits her head like a little moon.',
          'She\'s tall and willowy, with silver-blonde hair that falls past her waist and ears that taper to long, elegant points. Her robes are the green of new leaves. She looks perhaps thirty. Her eyes look much, much older.',
          '@sylvaine:smug You\'ve been standing there staring for two minutes and forty seconds. That\'s very rude, even for a human. Either sit down or say something clever.',
        ],
        aff: 10,
        choices: [
          { text: 'Say something clever. [Wits check 1]', check: { stat: 'wits', dc: 1 }, pass: 'clever_win', fail: 'clever_fail' },
          { text: 'Sit down without a word.', go: 'sit', flag: 'sylvaine_quiet' },
          { text: '"How old *are* you?"', go: 'age' },
        ],
      },
      clever_win: {
        text: [
          '@you You\'re reading three books at once, and I\'d bet they\'re the same story in three different translations, so you can see what each translator got wrong.',
          'The books stop turning. She looks at you properly for the first time.',
          '@sylvaine:surprised ...Well. Aren\'t you a surprise. It\'s the Lay of Eldarion, yes, and all three translators are fools.',
        ],
        aff: 6,
        flag: 'sylvaine_clever',
        next: 'name',
      },
      clever_fail: {
        text: [
          '@you Uh. Nice... floating?',
          '@sylvaine:smug Thank you. I\'ve been practicing for six hundred years. It\'s nice to be appreciated by a professional.',
          'Despite the sarcasm, the corner of her mouth twitches.',
        ],
        next: 'name',
      },
      sit: {
        text: [
          'You sit. You say nothing. She keeps reading. Minutes pass in perfect silence.',
          '@sylvaine ...Hm. You know how to be quiet. Most mortals don\'t. They talk to fill up their brief little lives with noise.',
          '@sylvaine:happy I approve.',
        ],
        aff: 5,
        next: 'name',
      },
      age: {
        text: [
          '@sylvaine Nine hundred and twelve. Next question.',
          '@you You look great for nine hundred and twelve.',
          '@sylvaine:smug I know.',
        ],
        aff: 3,
        next: 'name',
      },
      name: {
        text: [
          '@sylvaine Sylvaine Elderleaf, of the Silverbough line. Archmage, historian, and the oldest living thing in this town that isn\'t a tree. And you?',
          '@you {name}.',
          '@sylvaine:sad {name}. I\'ll try to remember it. I find mortal names hard to keep — you\'re gone so quickly.',
          'She says it lightly, but her gaze drifts to the window for just a moment.',
          '@sylvaine Come find me in the Whisperwood, if you want to learn something. I keep a glade there. It\'s quieter than this place. Fewer people saying "shh."',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Sylvaine\'s glade is hidden deep in the Whisperwood: a ring of silver birches around a still pool, with flowers that glow like small lanterns. She is sitting on a mossy stone with a chessboard of carved crystal.',
          '@sylvaine:happy Ah. Good. Sit. Do you play Kings & Dragons?',
          { if: 'sylvaine_clever', text: '@sylvaine:smug I ask because you guessed the three translations. I\'ve been wondering all week whether that was luck. This should settle it.' },
          { if: 'sylvaine_quiet', text: '@sylvaine And you can be quiet, which is the other half of the game. Most people chatter. Chatter loses.' },
          '@you A little.',
          '@sylvaine:smug Wonderful. I haven\'t lost a game since the reign of Queen Merovia. That was four hundred years ago. She cheated.',
        ],
        choices: [
          { text: 'Play a careful, patient game. [Wits check 2]', check: { stat: 'wits', dc: 2 }, pass: 'chess_win', fail: 'chess_lose' },
          { text: 'Play wildly and recklessly, sacrificing pieces everywhere.', go: 'chess_wild', flag: 'sylvaine_chaos' },
          { text: '"I\'ll play, if you tell me a story while we do."', go: 'chess_story', flag: 'sylvaine_stories' },
        ],
      },
      chess_win: {
        text: [
          'It takes an hour. Her pieces glide across the board with terrifying precision. Yours fall one by one. And then — you see it. A gap. A single move.',
          'You push your humble shepherd forward, and her dragon is trapped.',
          'Sylvaine stares at the board. Then at you. Then at the board again.',
          '@sylvaine:surprised That is — the Shepherd\'s Gambit. Nobody uses the Shepherd\'s Gambit. It\'s *ridiculous*. It\'s —',
          'She starts laughing, a bright astonished sound, like a silver bell.',
          '@sylvaine:happy You haven\'t won, you know. You\'ve merely forced a draw. But it\'s the first draw in four hundred years. Oh, I like you.',
        ],
        aff: 10,
        flag: 'sylvaine_gambit',
        next: 'pool',
      },
      chess_lose: {
        text: [
          'You lose in eleven moves. She is very gracious about it.',
          '@sylvaine:smug Your problem is you think three moves ahead. I think three hundred. But you never once looked at the board and gave up. That\'s rarer than skill, you know.',
        ],
        aff: 4,
        next: 'pool',
      },
      chess_wild: {
        text: [
          'You hurl your pieces forward with abandon, sacrificing your knights, your towers, even your queen, in an utterly nonsensical charge.',
          'Sylvaine frowns at the board. She frowns harder. She begins calculating, muttering under her breath, trying to find the hidden strategy.',
          'There isn\'t one. You lose spectacularly. But she spends the next twenty minutes convinced there was a genius move she missed.',
          '@sylvaine:surprised You... had no plan. At all. That\'s — chaos is very hard to predict. I need a moment.',
        ],
        aff: 6,
        next: 'pool',
      },
      chess_story: {
        text: [
          'So she tells you, as the pieces glide: the founding of the elven kingdoms, the dragon wars, the day the moon cracked and the elves sang it whole again.',
          'You lose the game. You don\'t care. You could listen to her voice for a hundred years.',
          '@sylvaine You\'re not paying attention to the board at all, are you?',
          '@you Not even slightly.',
          '@sylvaine:happy ...Hm. That\'s alright. Nobody has listened to my stories in a very long time.',
        ],
        aff: 7,
        next: 'pool',
      },
      pool: {
        text: [
          'Afterward, she leads you to the edge of the pool. Its surface is so still it reflects the sky like a mirror.',
          '@sylvaine Look into it. It shows what was. This glade, a thousand years ago.',
          'In the water, you see the same birches, younger. A young elf with blue-dyed hair laughing with a human man who has a lute.',
          '@sylvaine:sad His name was Aldric. He was a terrible musician. He died seventy years after that, an old man, in my arms.',
          'She says it lightly, like a weather report. But her fingers tremble.',
          '@sylvaine:sad That\'s the trouble with mortals, little one. You\'re lovely and you\'re brief, and we always outlive you.',
        ],
        choices: [
          { text: '"Was it worth it? Loving him?"', go: 'worth', aff: 6 },
          { text: 'Take her trembling hand.', go: 'hold', aff: 6, flag: 'sylvaine_held' },
        ],
      },
      worth: {
        text: [
          'She\'s silent for so long you think she won\'t answer.',
          '@sylvaine:sad ...Yes. Every moment. That\'s the cruelest part.',
        ],
        end: true,
      },
      hold: {
        text: [
          'Her fingers are cool and slender. She glances down at your joined hands in surprise, but she doesn\'t pull away.',
          '@sylvaine:blush You\'re very warm. Mortals always are. You burn faster.',
          'But she holds on until the sun sets.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'Sylvaine sends a sparrow to find you. It lands on your shoulder and speaks in her voice: *Come to the glade. Bring your brain. You\'ll need it.*',
          'When you arrive, the glade is filled with floating motes of light, and there is an enormous magical circle carved into the grass.',
          { if: 'sylvaine_gambit', text: '@sylvaine:smug The brain that found the Shepherd\'s Gambit. I\'ve been looking forward to seeing what else it can do. Don\'t let it go to your head. It\'s already in your head. That\'s the problem.' },
          { if: 'sylvaine_chaos', text: '@sylvaine:smug Please don\'t sacrifice anything today. Magic is not chess. If you throw your queen at a spell, the spell eats the queen.' },
          '@sylvaine I\'m going to teach you a spell. No, don\'t look like that. Humans can learn. Slowly. With great difficulty. Like teaching a cat to fetch.',
          'She stands behind you, guiding your hands into position. Her breath tickles your ear.',
          '@sylvaine Focus. Feel the current. It\'s like a river under the skin of the world.',
        ],
        choices: [
          { text: 'Concentrate with everything you have. [Wits check 3]', check: { stat: 'wits', dc: 3 }, pass: 'spell_win', fail: 'spell_fail' },
          { text: 'Get distracted by how close she is.', go: 'distracted', flag: 'sylvaine_distracted' },
        ],
      },
      spell_win: {
        text: [
          'At first, nothing. And then — you feel it. A thrumming warmth flowing up from the earth, through your feet, along your arms, and out through your fingertips.',
          'A single flower blooms in midair before you: a shimmering, translucent rose made of pure light.',
          'Behind you, Sylvaine has gone very quiet.',
          '@sylvaine:surprised ...It took me forty years to make my first flower. You did it in an afternoon.',
          '@sylvaine:smug Well, I *was* a very good teacher.',
        ],
        aff: 10,
        flag: 'sylvaine_rose',
        next: 'confess',
      },
      spell_fail: {
        text: [
          'You strain. You focus. Something happens: a small cloud of glitter puffs out of your fingers and settles in her hair.',
          '@sylvaine:smug ...That\'s a start. A sparkly, unhelpful start.',
          'She doesn\'t brush the glitter out. She leaves it in for the rest of the day.',
        ],
        aff: 5,
        flag: 'sylvaine_glitter',
        next: 'confess',
      },
      distracted: {
        text: [
          'It\'s hard to feel the river under the world when there\'s a nine-hundred-year-old archmage pressed against your back, her silver hair falling over your shoulder, smelling of rain and old books.',
          '@sylvaine You\'re not focusing.',
          '@you I\'m focusing on something.',
          'A long pause. Then — so faint you almost miss it — the tips of her long ears turn pink.',
          '@sylvaine:blush ...Insolent mortal.',
        ],
        aff: 8,
        next: 'confess',
      },
      confess: {
        text: [
          'Later, you sit together on the stone by the pool. The motes of light have dimmed. The glade is filled with soft blue twilight.',
          '@sylvaine:sad I made a promise, after Aldric. Never again. Never to love something that would leave so soon. I have kept it for seven hundred years.',
          '@sylvaine:blush And then you wander in with your terrible chess and your quick little brain, and I find myself watching the door of the library every morning like a love-struck girl of two hundred.',
          { if: 'sylvaine_stories', text: '@sylvaine And you *listen.* You sat through the whole founding of the elven kingdoms and asked for the dragon part again. Do you know how dangerous that is, to someone like me?' },
          { if: 'sylvaine_held', text: '@sylvaine:sad And you held my hand by the pool. Nobody has done that since he did. I thought my hands had forgotten how.' },
          'She doesn\'t look at you.',
          '@sylvaine:smug It\'s very inconvenient.',
        ],
        choices: [
          { text: '"Then let it be inconvenient."', go: 'inconvenient', aff: 10 },
          { text: '"I can\'t promise you forever. But I can promise you every day I have."', go: 'promise', aff: 12, flag: 'sylvaine_everyday' },
        ],
      },
      inconvenient: {
        text: [
          'She laughs, a small, helpless sound.',
          '@sylvaine:happy Spoken like someone with no sense of scale. Oh, you\'re impossible.',
          'And she leans over and kisses you, very lightly, on the corner of the mouth. Then she looks surprised at herself.',
          '@sylvaine:surprised ...Hm. Well. That happened.',
        ],
        end: true,
      },
      promise: {
        text: [
          'She turns to look at you, and her ancient eyes are shining.',
          '@sylvaine:sad That is the most foolish, most *human* thing anyone has ever said to me.',
          '@sylvaine:blush ...Say it again. Slowly. I want to remember the exact way it sounds.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'The glade at night is otherworldly. The glowing flowers have opened fully, and the pool reflects a thousand stars. Sylvaine is waiting for you in the water, waist-deep, her silver hair floating around her like moonlight.',
          { if: 'sylvaine_rose', text: 'Floating on the surface of the pool beside her is a small, translucent rose made of light. Yours. From the lesson. She has kept it alive all this time.' },
          { if: 'sylvaine_glitter', text: 'There is, you notice, still a little glitter in her hair. It sparkles in the starlight. She sees you notice and lifts her chin. "I like it," she says. "Don\'t."' },
          '@sylvaine There\'s an old elven custom. The Night of the Mirror Pool. You come to the water with someone, and you show them... everything. No glamours. No illusions. Just who you truly are.',
          'She lets something go — a spell you didn\'t know she\'d been holding. Her form shimmers. Her ears grow longer. Faint silver markings like tree-rings trace across her skin, glowing softly. She looks older and younger all at once: ancient and luminous and impossibly beautiful.',
          '@sylvaine:sad This is what nine hundred years looks like. Will you come in?',
        ],
        choices: [
          { text: 'Wade into the water without hesitation.', go: 'wade', aff: 8 },
          { text: '"You\'re the most beautiful thing I\'ve ever seen."', go: 'beautiful', aff: 8 },
          { text: 'Trace the glowing markings on her skin. [Wits check 4] "Every ring is a year, isn\'t it?"', check: { stat: 'wits', dc: 4 }, pass: 'rings', fail: 'wade' },
        ],
      },
      wade: {
        text: [
          'The water is cool, then warm, glowing faintly where it touches you. She watches you approach with a strange expression, like she can\'t quite believe you\'re real.',
          '@sylvaine:surprised You\'re not afraid.',
          '@you Should I be?',
          '@sylvaine:smug Most would be. I\'m very old, and very powerful, and I could make the sky rain fire if I sneezed wrong.',
          '@you Don\'t sneeze, then.',
        ],
        next: 'together',
      },
      beautiful: {
        text: [
          'She actually blushes — the silver markings on her cheeks glowing brighter.',
          '@sylvaine:blush I have been called beautiful by poets and kings for nine hundred years. It has never once made me feel like *this.* Come here.',
        ],
        next: 'together',
      },
      rings: {
        text: [
          'Your fingertips trace a ring on her shoulder. She shivers.',
          '@you Every ring is a year. Like a tree. This one is darker — that\'s when you lost Aldric, isn\'t it?',
          'She stares at you. A tear slips down her cheek.',
          '@sylvaine:sad No one has ever read them. Not in nine hundred years. No one has ever bothered to *look.*',
        ],
        aff: 12,
        flag: 'sylvaine_rings',
        next: 'together',
      },
      together: {
        text: [
          "She draws you close, and the stars in the pool swirl around you both.",
          "Her kiss is slow and deep and patient. It's the kiss of someone with all the time in the world who has decided to spend it here, on you, in no hurry at all. Wherever she touches you, light blooms under your skin. Her fingers trace the line of your jaw, your throat, the hollow between your collarbones, as if she's reading something written there.",
          "@sylvaine:smug Mortals rush. Always rushing. Let me show you what nine hundred years teaches you about *patience.*",
          { if: 'sylvaine_distracted', text: "@sylvaine:blush You said you were \"focusing on something,\" the day of the spell. I've been wondering for a week what you meant. Show me." },
          "And she does. She undresses you in the water with maddening slowness, one fastening at a time, and kisses each new inch of skin as it appears. She hums an old elven melody against your shoulder. When you try to hurry her, she laughs softly and catches both your hands.",
          "@sylvaine No. Feel it. Every moment. I want you to remember every one of them the way I will.",
          "The silver rings on her skin brighten wherever your mouth finds them. When you press your lips to the darkest ring, the year she lost Aldric, she gasps and arches against you, and the whole pool flares white.",
          "The glade holds its breath. Her long hair sweeps over you both like a curtain of moonlight. The rest is hushed and luminous, a secret the whole forest keeps...",
          "...",
          "Afterward you lie together on the soft moss by the pool, her head on your chest, listening to your heartbeat.",
          "@sylvaine:happy It's so fast. Like a little bird. I'll memorize it.",
          "@you Why?",
          { if: 'sylvaine_everyday', text: "@sylvaine:sad So that in a thousand years, I'll still know exactly what it sounded like. You promised me every day you have. I intend to keep all of them. Even the ones after.", else: "@sylvaine:sad So that in a thousand years, I'll still know exactly what it sounded like." },
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake in the glade at dawn, wrapped in a silver-green cloak that wasn't there when you fell asleep. Birds are singing. A deer is drinking from the pool and looking at you with polite interest.",
          "Sylvaine is sitting cross-legged nearby, floating an inch above the grass, holding a cup of tea and absolutely not looking at you. Her ears are pink to the very tips.",
          "@sylvaine:blush Good morning. I made tea. I've also been sitting here for an hour trying to decide what nine-hundred-year-old archmages say on mornings like this.",
          "@sylvaine:smug The last time I had one, the printing press hadn't been invented. I find I'm out of practice.",
          { if: 'sylvaine_rings', text: "@sylvaine:happy Also, there's a new ring. Look. On my wrist. It wasn't there yesterday. It's very bright. It's quite *garish,* actually. I don't mind at all." },
          { if: 'sylvaine_quiet', text: "@sylvaine I could, of course, just sit here in silence. You'd let me. You let me the first day in the library. It's one of the reasons I'm in this mess." },
        ],
        choices: [
          { text: "\"You could start with 'come back here.'\"", go: "comeback", aff: 6 },
          { text: "\"How about 'good morning, my love'?\"", go: "love", aff: 6, flag: 'sylvaine_mylove' },
          { text: "Tease her: \"You're blushing. Archmages blush?\"", go: "blush", aff: 5 },
        ],
      },
      comeback: {
        text: [
          "She considers this. She sets down the tea. She drifts over and settles beside you under the cloak, very primly, as though attending a lecture.",
          "@sylvaine:happy Come back here. ...Hm. Yes. That works rather well.",
          "Her cool hand finds yours. Then her mouth finds yours. The tea goes cold. The deer leaves, scandalized.",
        ],
        end: true,
      },
      love: {
        text: [
          "She goes very still. Her cup trembles.",
          "@sylvaine:sad I haven't said those words aloud in seven hundred years.",
          "@sylvaine:blush ...Good morning, my love.",
          "She says it carefully, testing it like ice on a pond. Then she says it again, more certain. Then she laughs, bright and astonished, as if she's discovered a spell she'd forgotten she knew.",
        ],
        end: true,
      },
      blush: {
        text: [
          "@sylvaine:angry Archmages do *not* blush. It's — the dawn light. Refraction. A very complicated magical phenomenon you wouldn't understand.",
          "@you Your ears are pink.",
          "@sylvaine:blush My ears are *contemplating eternity.*",
          "She throws a cushion at you with a flick of her finger. It's very accurate. Then she comes and lies down beside you anyway, and spends the morning tracing the shapes of your old scars and asking about every one.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'You find Sylvaine on the very top of the festival hill, sitting a few inches above the grass, ankles crossed.',
          '@sylvaine:sad Nine hundred and twelve Starfalls. I\'ve watched every one. Alone, for most of them.',
          '@sylvaine The legend says that those who watch together are bound forever. But forever means something very different to an elf than to you. My forever would be your thousand lifetimes.',
          '@you So what do we do?',
          'She smiles.',
          '@sylvaine:smug Oh, I\'ve been thinking about that for weeks. Days and days. Which is an *eternity* for you.',
          { if: 'sylvaine_held', text: 'She holds out her hand without looking, the way she did by the pool, and waits for yours. When you take it, she lets out a breath she seems to have been holding for a month.' },
        ],
        next: 'gift',
      },
      gift: {
        text: [
          'She takes your hand and presses a small seed into it. It glows faintly silver.',
          '@sylvaine A Silverbough seed. My family\'s tree. Elves plant one when they bind their life to someone. It will grow as long as one of us is alive, and it remembers everything.',
          '@sylvaine:sad I can\'t give you forever, {name}. But I can give you this: I will love you with all of mine. And when you\'re gone, every leaf on that tree will still remember your name.',
        ],
        choices: [
          { text: 'Close your hand around the seed, and kiss her as the stars fall.', go: 'kiss' },
          { text: '"Don\'t give me a seed. Give me lessons. All of them. I want to keep up with you."', if: { any: ['sylvaine_gambit', 'sylvaine_rose', 'sylvaine_rings', 'sylvaine_clever'] }, go: 'apprentice' },
          { text: '"Forget the tree. You\'ve been wise for nine hundred years. Come be foolish with me."', if: { any: ['sylvaine_chaos', 'sylvaine_glitter', 'sylvaine_distracted', 'sylvaine_date_harbor'] }, go: 'blue' },
        ],
      },
      kiss: {
        text: [
          'The stars begin to fall. She kisses you beneath them, and for once she doesn\'t seem to be counting time at all.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'You plant the seed in the glade. It grows impossibly fast — a sapling by summer, a young tree by winter, its leaves shining silver in the moonlight.',
          'Sylvaine teaches you magic. You teach her to cook. (She\'s terrible at it. Nine hundred years and she has never once boiled an egg.) You play chess every evening. You\'ve won twice. She insists both were draws.',
          'She stops counting years. She starts counting days instead — days with you — and she says that each one is fuller than a century used to be.',
          'And in the heart of the Whisperwood, a silver tree grows tall, and on every one of its leaves, if you look closely, is the faint shape of a name.',
        ],
        ending: 'sylvaine',
      },
      apprentice: {
        text: [
          'She looks at you for a very long moment. The seed glows between your joined hands.',
          '@sylvaine:surprised Lessons. You understand what you\'re asking. The elven arts aren\'t a hobby, little one. They take centuries.',
          '@you Then I\'d better start tonight.',
          '@sylvaine:sad A mage who studies the deep currents can live a long time. Not forever. Not like me. Two hundred years, perhaps three, if they\'re diligent. Most aren\'t. It\'s brutally hard. I would be a *horrible* teacher. I would be exacting and impatient and I would correct your posture.',
          '@you You already correct my posture.',
          'She laughs, the bright silver-bell laugh from the chess game, and then she presses the seed back into your palm and closes your fingers around it.',
          '@sylvaine:happy Keep it, then. We\'ll plant it when you\'ve earned it. Your first lesson is tomorrow at dawn. Bring your brain. You\'ll need it.',
          'The stars fall. She kisses you under them, and this time, you could swear, she is already planning the syllabus.',
        ],
        next: 'apprentice_epilogue',
      },
      apprentice_epilogue: {
        text: [
          '*Some time later...*',
          'Your first year, you make a lot of glitter. Your second year, you make a flower that lasts a full minute. Your fifth year, you make it rain on the library, by accident, during a lecture. Sylvaine is mortified in public and delighted in private.',
          'She is, exactly as promised, a horrible teacher: exacting, impatient, and wildly proud of you in ways she refuses to say out loud and tells everyone else about constantly. The Conclave of Elders receives a forty-page letter about your progress. They did not ask for it.',
          'The deep currents take you slowly, the way she said they would. Your hair goes silver at the temples and then stops. The years go by and leave less of a mark than they ought to. On your fiftieth birthday you look thirty-five. On your hundredth, you look forty, and you finally, *finally* beat her at Kings & Dragons, cleanly, with no gambit at all.',
          'She stares at the board for a very long time.',
          '@sylvaine:happy ...That was not a draw.',
          'You plant the Silverbough seed that night. It grows slowly, the proper elven way, because now you have the time to watch it.',
          'Nobody knows quite how long you\'ll last. Two hundred years. Three. She says she has stopped calculating it, which you know is a lie, because you have learned to read her the way you once read the rings on her skin. But she has stopped dreading it. She says the trouble with mortals was never that you were brief. It was that she always had to watch you go on alone.',
          'Now you study together. You argue about translations in the library until the students throw things. And at every Starfall, the two of you float a foot above the festival hill, side by side, and watch the sky. Nobody else in the crowd is floating. That is entirely the point.',
        ],
        ending: 'sylvaine_apprentice',
      },
      blue: {
        text: [
          'Sylvaine blinks. The seed\'s light flickers in her palm.',
          '@sylvaine:surprised *Foolish?*',
          '@you You keep saying you were young and foolish once. Blue hair, a bard, running off. You say it like it was a mistake. I think it might have been the best thing you ever did.',
          '@you You told me there was nothing left to learn. You were wrong. There\'s a whole world out there that\'s changed since you last looked. Come and look at it with me. At my speed. While I\'m here.',
          'She stares at you. Around you, the whole festival is gasping at the falling stars. She isn\'t looking at the sky at all.',
          '@sylvaine:sad The last time I did something foolish, I was three hundred years old and I lost him and it broke my heart for seven centuries.',
          '@sylvaine:happy ...And I would do it again. Every moment. I told you that, by the pool. That\'s the cruelest part. Oh, you *impossible* mortal.',
          'She snaps her fingers. Her long silver hair turns, from root to tip, a brilliant, ridiculous, unmistakable blue.',
          '@sylvaine:smug Well? Don\'t just stand there. Where are we going?',
        ],
        next: 'blue_epilogue',
      },
      blue_epilogue: {
        text: [
          '*Some time later...*',
          'You leave Clichéton three days after Starfall with two packs, one map, and an archmage of nine hundred and twelve years who has never once in her life carried her own luggage. She tries to float it. You make her carry it. She complains for the first eleven miles and then stops, astonished, at the top of a hill, because her shoulders ache and her feet hurt and she has never felt so *alive.*',
          'You show her the world at mortal speed. She learns to boil an egg over a campfire on the third attempt and is more proud of it than of any spell she has ever cast. She gets sunburnt on the tips of her ears for the first time in nine centuries. She learns that fried fish comes in seven regional styles and has opinions on all of them. She learns card games in border taverns and cheats at every single one, flagrantly, with magic, and is thrown out of four inns in one week.',
          'She keeps a journal. Not in years, the way elves do. In days. *Day 41: a dog at the crossroads followed us for an hour. I named him Oswin. Day 112: we saw the eastern sea. It is very large. {name} made me swim in it. I am not over this.*',
          'Her hair stays blue. The Conclave of Elders writes her a very stern letter. She draws a fish on it and mails it back.',
          'Some nights by the fire, she goes quiet, and you know she\'s thinking about the end. About Aldric. About you. You don\'t pretend it isn\'t coming. You just take her hand, and she lets out a breath, and says: *still worth it. Every moment.*',
          'And then she drags you up, because there\'s a town over the next ridge she hasn\'t seen yet, and it\'s already been nine hundred years. She is not wasting one more day.',
        ],
        ending: 'sylvaine_blue',
      },
    },
  },
});
