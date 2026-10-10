FL.addSpeaker('guard', 'Royal Guard', '#c9b26b');
FL.addSpeaker('king', 'The King', '#e8c547');

FL.addCharacter({
  id: 'aurelia',
  name: 'Aura (Princess Aurelia)',
  short: 'Aurelia',
  trope: 'Runaway Princess in Disguise',
  color: '#f2b84b',
  favStat: 'charm',
  endingTitle: 'The Barmaid Princess',
  endings: { aurelia_aura: 'Just Aura', aurelia_queen: 'Long Live the Queen' },
  teaser: 'A new barmaid with a very fake-sounding accent is carrying six tankards. It is going extremely badly.',
  blurb: 'She calls herself "Aura," a humble barmaid at the Tipsy Wyvern. She is the worst barmaid in history. She curtsies to customers, calls the ale "a most robust vintage," and once tipped a beggar with a diamond earring. She is, obviously, the runaway Crown Princess. Everyone knows except her.',
  schedule: ['square', 'tavern', 'tavern'],
  gifts: { love: ['rum'], like: ['cakes', 'fish', 'plushie', 'yarn', 'mead'], hate: ['gem', 'tea', 'relic'] },
  giftLines: {
    love: ['@aurelia:surprised For me? Something *common?* Something nobody at court would be caught dead holding?', '@aurelia:happy Oh, {name}. You understand me *terribly* well.'],
    like: '@aurelia:happy How lovely! A real common-folk gift! I shall treasure it — er — I mean — *ta, love, that\'s proper nice of ya.*',
    neutral: '@aurelia Oh, how... practical! Thank you! Truly! ...What is it?',
    hate: ['Her smile goes very stiff and very polite.', '@aurelia:sad Ah. How... *courtly.* I\'ve had rather enough of those for one lifetime, I\'m afraid. But the thought is appreciated. Truly.'],
    special: {
      rum: ['@aurelia:surprised Rum! Common, cheap, terrible rum! The sort that sailors drink! I have *never* been allowed this! Not once!', 'She takes a swig. She coughs for a full minute. Her eyes water.', '@aurelia:happy Oh, that\'s *dreadful.* I love it. I am going to drink the whole thing.', "@aurelia:smug I shall drink it from the bottle. Like a *pirate.* Father would have a seizure. Pass me that barrel, I'm going to sit on it."],
      fork: ["@aurelia:surprised A fork. One fork. Just... one.", "@aurelia:happy Do you know there are eleven forks at a state banquet? Oyster, fish, salad, *second* salad, a fork that exists only to frighten foreigners — I was examined on them. At age seven. I cried.", "@aurelia:blush And you've given me one. As if one were *enough.* I think this is the most freeing thing anyone has ever handed me."],
      fish: ["@aurelia:surprised It's a whole fish! With a *face!* At the palace they only ever arrived in a sauce, lying down, pretending they'd never been alive.", "@aurelia:happy Hello, sir. I shall call you Duke Fopsworth. You have his expression exactly."],
      gem: ["She turns the sapphire over in her fingers with the expression of someone being handed homework.", "@aurelia:sad I tipped a beggar with one of these my first week. He tried to give it back. He said it was making him nervous.", "@aurelia I'll put it with the others. In a sock. Under the floorboard. Please don't tell Bettina I own a *sock of sapphires.*"],
      relic: ["@aurelia:angry A *reliquary.* I have kissed four hundred and twelve of these. At state funerals. In order of precedence. One of them was definitely a chicken bone.", "@aurelia:sad I'm sorry. It's a lovely thought. It's just that it smells like a cathedral and a cathedral smells like being told to *stand still.*"],
      mead: ["@aurelia:happy Mead! In a horn! Like a warrior at a feast! I'm going to drink it standing on a table. Hold my apron.", "She climbs onto the table. She sips it delicately, with her little finger out. Old habits."],
    },
    repeat: "@aurelia:smug Another one? I'm starting to suspect you're courting me with a *strategy.* My tutors called that \"diplomacy.\" Bettina calls it \"not taking the hint.\" I call it adorable. Do vary it, though.",
  },
  talk: [
    ['@aurelia:happy Good morrow — er — mornin\', guv! What\'ll it be? We have ale. And ale. And — I believe it\'s also ale?'],
    ['@aurelia:happy I learned to mop today! You push the wet stick back and forth! It\'s *thrilling!* Nobody ever let me hold a wet stick before!'],
    ['@aurelia:surprised I haven\'t been a princess — I mean, I have *never* been a princess, why would you say that — I simply have very good posture. Common folk can have posture!'],
    ['She is very carefully counting change, lips moving.', '@aurelia:sad Three coppers make... a... silver? No. Ten coppers. Oh, money is so *complicated* when you have to actually use it.'],
    ['@aurelia:happy Do you know what I love about the tavern? Nobody bows. Nobody calls me "Your Highness." They call me "oi, you" and "where\'s me pie." It\'s *wonderful.*'],
    ['@aurelia I received a letter from my — from a *friend* — saying my — their father is very worried. I wrote back saying "I am fine, I have a mop now." I hope that reassures him.'],
    ["@aurelia:smug I've been practising my accent. Listen. *'Ello, guv'nor. 'Ow's yer muvver.*", "@you That was worse.", "@aurelia:happy I *know!* I'm regressing! Gruk says if I keep going I'll be speaking Dwarvish by midsummer."],
    ["She's polishing a tankard with the fierce concentration of a court portraitist painting a duchess.", "@aurelia Seven years of etiquette lessons and nobody once told me that glasses get *dirty.* I assumed they were simply replaced. By some sort of fairy."],
    ["@aurelia:smug A gentleman tried to pay me in compliments today. I accepted. Bettina says that isn't legal tender. I said it is in *some* kingdoms. She asked which. I said *mine.*", "@aurelia:surprised ...And then I had to pretend I meant my *heart.* I think I got away with it. I don't think I got away with it."],
    ["@aurelia:sad I keep a list. Of things I've never done. Climbed a tree. Owed somebody money. Been bored on purpose.", "@aurelia:happy I've crossed off nine since I came here. Don't ask me what number ten is. No — don't. It's *embarrassing.*"],
    { if: 'aurelia_mopped', lines: ["@aurelia:blush Bettina says a customer who picks up a mop on the first night is \"a keeper.\" She says it's an old tavern saying.", "@aurelia I think she made it up on the spot. She was looking straight at you when she said it."] },
    { if: 'aurelia_pirate', lines: ["@aurelia:smug Did you know the Royal Guard has been searching Saltbreeze Harbor for *eleven days?* For a pirate called \"Big Eyepatch\"?", "@aurelia:happy They arrested a parrot. It's been taken to the capital for questioning. I feel *dreadful.* I also cannot stop laughing."] },
    { if: 'aurelia_pie', lines: ["@aurelia:happy I went back to the pie stall today. Alone! I paid in *coins!* The *correct* coins! The pie man shook my hand.", "@aurelia:blush ...Then I got gravy on my hat again. Some traditions must be honoured."] },
    { if: { stage: 3 }, lines: ["@aurelia:blush Now that you know who I am, you can stop pretending not to know who I am. And I can stop pretending not to be who I am.", "@aurelia:smug Shall we pretend to be strangers anyway? Just for fun? I'll spill something on you. You'll be charmed. It'll be like old times."] },
  ],
  afterTalk: [
    ["@aurelia:blush Bettina asked why I'm so tired at work lately. I said I've been *reading.* She said, \"Ara, ara, dear, what book? The one with the creaky bed?\" I nearly dropped a whole tray."],
    ["She slips a note into your hand as she passes with a tray of ale. It reads, in elegant palace calligraphy: *Attic. Midnight. By royal command.*"],
    ["@aurelia:smug I wrote to my father. I told him I've found someone. He wrote back asking for your lineage. I told him your lineage is \"very good at unlacing dresses.\" I may have been slightly drunk."],
    ["@aurelia:happy I've learned to make one thing without burning it. It's honey toast. I'm going to make it for you tomorrow morning. You'll have to stay the night, though. That's the recipe."],
    ["@aurelia:happy I counted my tips today without using my fingers. Then I counted them again *with* my fingers, to be sure. Then I bought you a pie. Then I had no tips.", "@aurelia Economics is *marvellous.*"],
    { if: 'aurelia_goat', lines: ["@aurelia I told Bettina you said you'd have me even if I were a goat. She said it was the most romantic thing she'd heard in twenty years behind a bar.", "@aurelia:surprised Then she asked whether I'd *considered* being a goat. I hadn't. Now I can't stop. I think I'd be a very good goat. Very sure-footed. Excellent posture."] },
    { if: 'aurelia_ate', lines: ["@aurelia:blush You ate the whole breakfast. The charcoal one. I still think about it at the strangest moments. During arithmetic. While mopping.", "@aurelia:sad A man asked me for change yesterday and I burst into *tears.* He gave me a copper. I kept it. I'm not sure who was serving whom."] },
    { if: 'aurelia_bow', lines: ["@aurelia:smug I've been issuing royal decrees again. Only to you. Only after midnight.", "@aurelia Decree the first: you're to stop looking at me like that in front of the customers.", "@aurelia:blush Decree the second: *don't* stop."] },
    { if: 'aurelia_date_picnic', lines: ["@aurelia:happy I've been back to our picnic clearing four times. I climbed the big oak! On my own! Only got stuck twice. A woodcutter had to get me down. I *tipped* him. He's started taking his lunch under that tree."] },
  ],
  dateFav: 'picnic',
  dates: {
    dinner: {
      start: {
        text: [
          "You book the corner booth at the Tipsy Wyvern. Aura arrives in her one good dress, sits down opposite you, and immediately stands up again because a dwarf two tables over has an empty tankard.",
          "@aurelia:surprised He's *empty!* {name}, he's empty and nobody's — I can't just *sit* here while a man is empty!",
          "From behind the bar, Bettina calls: \"Aura, dear, you're off duty. Sit down before I nail you to the bench.\"",
          "She sits. Her knee bounces under the table. Her eyes follow every tray in the room like a hound watching a thrown stick.",
          { if: 'aurelia_mopped', text: "@aurelia:blush This is the table I spilled on. The first night. When you picked up a rag instead of a fight. I've wiped this table four hundred times since and I think about it *every* time." },
        ],
        choices: [
          { text: "Get up and fetch your own drinks, so she can stay sitting.", go: 'serve', aff: 5 },
          { text: "\"Order for us. In your best common accent.\"", go: 'accent', aff: 4 },
          { text: "Let her top up the dwarf's tankard. Just this once.", go: 'once', aff: 1 },
        ],
      },
      serve: {
        text: [
          "You come back from the bar with two tankards and a plate of pie, and set them down in front of her with a little flourish of a bow.",
          "@aurelia:surprised You're — *serving* me.",
          "@you You looked like you needed someone to.",
          "She stares at the plate. You realise that in twenty-four years of being served by a hundred people, this may be the first time she's ever been served by one she chose.",
          "@aurelia:blush ...You put the pie on the left. Proper banquet etiquette is the right.",
          "@aurelia:happy Never change. Never, *ever* learn that.",
        ],
        next: 'end',
      },
      accent: {
        text: [
          "She clears her throat, waves the potboy over, and summons the full force of her elocution training into a voice that sounds like a duchess falling down a well.",
          "@aurelia:smug Oi, you. Two of yer finest *ales,* if you please, and a *pie,* and be *sharp* about it, there's a good — a good — *gent.*",
          "The potboy, who has worked beside her for a month, says \"Yes, Aura,\" and walks off shaking his head.",
          "@aurelia:happy Did you hear that? *Gent!* I didn't even say \"my good man.\" I'm *assimilating.*",
        ],
        next: 'end',
      },
      once: {
        text: [
          "She leaps up gratefully, seizes a jug, and sweeps toward the dwarf with the grace of a ballroom dancer. She pours with enormous dignity. She pours a great deal. She keeps pouring.",
          "The dwarf is now sitting in a small lake. He looks thrilled.",
          "@aurelia:surprised Oh, *bother!* — I'm so sorry — it's just that you were *empty* and it seemed so *sad* —",
          "By the time she gets back to the booth, her pie is cold and she's soaked to the elbow. She eats it anyway, beaming.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "By the end of the night she's stopped watching the trays and started watching you, chin on her hand, the candle making a halo of her messy braid.",
          { if: { stage: 4 }, text: "@aurelia:blush You know, the attic's only one flight up. I'm told the service there is *dreadful.* Very hands-on, though.", else: "@aurelia:happy This is the first dinner I've ever had where nobody made a speech. I could weep. I'm not going to. I'm going to have more pie." },
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          "The Moonlit Gardens are in the Noble Quarter, which is a problem, because the Noble Quarter is full of nobles, and half of them have dined with the Crown Princess.",
          "Aura has prepared. She's wearing her enormous straw hat, a scarf, dark spectacles at night, and a false moustache she bought from a theatre troupe. It is ginger. It is enormous. She is very proud of it.",
          "@aurelia:smug Nobody will look twice. I'm a *gentleman of the country.* I've come to town about... turnips.",
          "Halfway down the rose walk, a baroness in lilac silk stops dead and squints at the moustache.",
          "\"...Your *Highness?*\"",
        ],
        choices: [
          { text: "\"This is my cousin Bertram. He's very shy. And very much a man.\" [Charm check 2]", check: { stat: 'charm', dc: 2 }, pass: 'bertram', fail: 'bertram_fail' },
          { text: "Pull her behind the nearest hedge.", go: 'hedge', aff: 5 },
        ],
      },
      bertram: {
        text: [
          "@you This is my cousin Bertram. From the country. He's here about turnips.",
          "@aurelia Turnips, madam. Gruff hello.",
          "The baroness looks from the moustache to your face to the moustache again. You hold her gaze with the serene confidence of a person who has absolutely nothing to hide. She curtsies uncertainly to Bertram and drifts off.",
          "@aurelia:happy *Gruff hello!* I said *gruff hello* and it *worked!* You're a sorcerer!",
        ],
        aff: 5,
        next: 'fountain',
      },
      bertram_fail: {
        text: [
          "@you This is my cousin Bertram. From the country.",
          "The moustache chooses this moment to fall off. It lands in the baroness's hand.",
          "There is a long, awful silence. Then Aura snatches it back, sticks it on upside down, and says, \"Good *evening,*\" in a voice two octaves too low, and the two of you run.",
        ],
        aff: 2,
        next: 'fountain',
      },
      hedge: {
        text: [
          "You grab her hand and duck through a gap in the yew hedge. It's very narrow. She's pressed flat against you, moustache askew, both of you shaking with silent laughter while lilac silk rustles past on the other side.",
          { if: [{ stage: 3 }, '!aurelia_pirate'], text: "@aurelia:blush ...This is twice now. Twice you've hidden me in a small space. People will start to *talk.*", else: "@aurelia:blush ...You've hidden me in a hedge. A *noble* hedge. People will start to *talk.*" },
          "@you Do you want me to stop?",
          "@aurelia:smug I want you to find smaller spaces.",
        ],
        next: 'fountain',
      },
      fountain: {
        text: [
          "You end up at the great marble fountain at the heart of the gardens, moustache retired to her pocket, the moon on the water.",
          { if: 'aurelia_splash', text: ["She looks at the fountain. She looks at you. Her eyes narrow.", "@aurelia:smug Don't you *dare.* This is a *noble* fountain. If you splash me in a noble fountain it's practically a diplomatic incident.", "You don't. She splashes you anyway. It's a diplomatic incident."], else: ["@aurelia:happy At the palace I was never allowed to touch the fountains. They were for *looking at.*", "She rolls up her sleeves and trails her fingers through the water like a burglar running her hands through a jewel box."] },
          { if: { stage: 4 }, text: "@aurelia:blush Every lady in this garden came here hoping someone would kiss her by the fountain. I think I'm the only one who's going to get her wish. Hurry up, before the moustache comes back." },
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          "Saltbreeze Harbor at sunset is gulls and tar and the smell of fried fish, and Aura looks at all of it as though someone has unwrapped it for her personally.",
          "You buy two portions of fish in paper. She holds hers as if it might be a live eel.",
          "@aurelia:surprised There's no fork. There's no plate. There's no *footman.* There's just — fish. In a *broadsheet.* Is that today's? Is it bad luck to eat the news?",
          { if: 'aurelia_pie', text: "@aurelia:smug No — wait. I know this. *Just bite it.* You taught me. I'm a seasoned eater of hand-food now." },
          { if: 'aurelia_pirate', text: "A grizzled fishmonger leans over and winks at her. \"Evenin', miss. Any luck with that pirate of yours?\" She chokes on her fish. You pat her on the back until the fishmonger, concerned, offers a bucket." },
        ],
        choices: [
          { text: "Teach her to skip stones off the end of the pier.", go: 'stones', aff: 5 },
          { text: "Point at the ships. \"Where would you sail, if you could?\"", go: 'ships', aff: 4 },
          { text: "Feed her a chip, very slowly.", go: 'chip', aff: 3 },
        ],
      },
      stones: {
        text: [
          "Her first stone goes straight down with a *plop.* Her second hits a gull, who takes it personally. Her third skips three times, and she screams so loudly a fishing boat drops anchor in alarm.",
          "@aurelia:happy *THREE!* Three skips! Write it down! Tell the herald! That's another thing crossed off the list!",
        ],
        next: 'end',
      },
      ships: {
        text: [
          "She watches a cargo ship slide out past the breakwater, sails gold in the sunset.",
          "@aurelia:sad When I was little I used to watch ships from my tower and plan which one I'd stow away on. I had a list. I had *maps.* I never went.",
          "@aurelia:blush And now I don't want to. Isn't that strange? I finally got off the tower and the place I wanted to go turned out to be a tavern with a wobbly bar.",
        ],
        next: 'end',
      },
      chip: {
        text: [
          "You hold up a chip. She eyes it. She eyes you. Then she leans in and takes it from your fingers with her teeth, eyes on yours the whole time, and only goes scarlet once she's swallowed.",
          "@aurelia:blush I don't know where I learned to do that. I think it might be a *common-folk* thing. I think I've been here too long. Do another one.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "The sun goes down into the sea. She licks salt off her fingers without being embarrassed about it, and you count that as progress.",
          { if: { stage: 4 }, text: "@aurelia:smug You know, if we stowed away on one of these ships together, nobody would ever find us. Not my father. Not Bettina. *Hours* of nobody finding us. ...I'm not saying we should. I'm saying I've thought about it in some detail." },
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          "Aura has packed the picnic herself, which is why you have to carry it between you like a coffin. It contains six loaves, a wheel of cheese, two pies, a ham, eleven apples, a candelabra, and a small silver bell.",
          "@aurelia:smug The bell's for summoning the footman. I know we haven't *got* a footman. It's a comfort thing.",
          "She spreads the blanket in a sunny clearing, then stands at the edge of it, frowning, as though waiting for a chair to be brought.",
          "@aurelia:surprised Do we just... sit? On the *ground?* Where the *ground* is?",
        ],
        choices: [
          { text: "Flop down on your back in the grass and pat the spot beside you.", go: 'flop', aff: 4 },
          { text: "Point at the big oak. \"Number one on your list, wasn't it?\"", go: 'tree', aff: 6 },
          { text: "Ring the little silver bell.", go: 'bell', aff: 3 },
        ],
      },
      flop: {
        text: [
          "She considers it with the solemnity of a coronation. Then she lies down beside you, very straight, hands folded on her stomach, like an effigy on a tomb.",
          "@you Relax.",
          "@aurelia I *am* relaxed. This is relaxed posture. Level four. There's a chart.",
          "Twenty minutes later she's sprawled like a starfish with an apple in each hand, dandelion fluff in her braid, laughing at a cloud she insists looks like her father.",
        ],
        next: 'end',
      },
      tree: {
        text: [
          "Her eyes go enormous. She looks at the oak, then at her skirts, then at you.",
          "@aurelia:surprised You *remembered.* I said it *once.* Over a tankard.",
          "It takes a boost, three attempts, a torn hem and a great deal of royal language you did not know princesses knew, but she makes it to the first big branch and sits there, legs dangling, flushed and triumphant.",
          "@aurelia:happy I'm in a TREE! {name}, I'm *higher than you!* Bow to me! — No, don't, I've had enough of that. *Climb up.*",
          "You climb up. The branch is just wide enough for two, if you sit very close. She doesn't seem to mind.",
        ],
        next: 'end',
      },
      bell: {
        text: [
          "You ring the bell. A squirrel appears at the edge of the clearing, looks at you both, and leaves.",
          "@aurelia:happy Oh, he's *perfect.* Terribly insolent. Exactly like the real ones.",
          "She sets out a single apple slice on the edge of the blanket \"for staff.\" It's gone within the minute. She's delighted.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "You eat about a fifth of the picnic. The candelabra goes unused. On the way home she insists on carrying the basket herself, and only falls over once.",
          { if: { stage: 4 }, text: "@aurelia:blush Number ten on my list, by the way. The embarrassing one. You crossed it off weeks ago. Up in the attic. I'm not telling you which night. You'll have to guess. Possibly *all* of them." },
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'You\'ve barely sat down in the Tipsy Wyvern when a barmaid approaches your table carrying six overflowing tankards — three in each hand, held with the delicate grip of someone holding porcelain teacups.',
          'She\'s stunning: golden hair in a hasty braid, wide blue eyes, a heart-shaped face, and the bearing of someone who has been taught to walk with a book balanced on her head. Her apron is on inside out. There\'s a smudge of flour on her nose.',
          '@aurelia:happy Good evening, kind sir or madam! Would you care for a — oh dear — oh, dear, *dear* —',
          'The tankards tip. Ale cascades onto the table, your lap, and her shoes. She stares at the wreckage in horror.',
          '@aurelia:surprised I do beg your pardon! I am *most* frightfully sorry! — I mean — *oops, me bad, guv\'nor.*',
          'That last bit is delivered in the worst common accent you have ever heard.',
        ],
        aff: 10,
        choices: [
          { text: '"Don\'t worry about it. First week?"', go: 'firstweek' },
          { text: 'Help her mop it up.', go: 'mop', flag: 'aurelia_mopped' },
          { text: '"Your accent slipped, *Your Highness.*" [Charm check 1]', check: { stat: 'charm', dc: 1 }, pass: 'highness', fail: 'highness_fail' },
        ],
      },
      firstweek: {
        text: [
          '@aurelia:surprised First *day*, actually! Is it that obvious?',
          '@you Your apron\'s inside out.',
          'She looks down. She gasps. She looks up at you as if you\'ve revealed a great secret of the universe.',
          '@aurelia:surprised There\'s an *inside* and an *outside?*',
        ],
        aff: 4,
        next: 'name',
      },
      mop: {
        text: [
          'You grab a rag from the bar and start mopping. She stares at you in astonishment, then grabs another rag and kneels beside you, and together you clean up the mess.',
          '@aurelia:surprised You\'re *helping.* Customers aren\'t supposed to help! Are they? I read a book on taverns and it didn\'t say anything about helping!',
          '@you Seemed like the right thing to do.',
          'She smiles at you, a little dazzled.',
        ],
        aff: 6,
        next: 'name',
      },
      highness: {
        text: [
          'She goes absolutely white. Then absolutely red.',
          '@aurelia:surprised I — I haven\'t the faintest — I am a *barmaid!* A humble one! Look, I have — I have *ale* — on my *shoes!*',
          'She leans in close and whispers, panicked:',
          '@aurelia:blush ...How did you know?',
          '@you Lucky guess. Don\'t worry. I won\'t tell.',
          'She searches your face, one hand still clutching her ale-soaked apron like a royal sash. Then she lets out a breath and laughs, very quietly.',
        ],
        aff: 7,
        flag: 'aurelia_outed',
        next: 'name',
      },
      highness_fail: {
        text: [
          '@you Thanks, Your Highn— I mean — barmaid lady.',
          '@aurelia:angry ...What did you almost call me?',
          '@you Nothing!',
          'You both stare at each other with mutual suspicion.',
        ],
        aff: 3,
        next: 'name',
      },
      name: {
        text: [
          '@aurelia:happy I\'m Aura! Just Aura! No other names! Very common name! There are probably dozens of us!',
          '@you {name}.',
          '@aurelia {name}! What a lovely name. Very... *robust.*',
          'Madame Bettina calls from behind the bar: "Aura, dear! The kitchen\'s on fire again!"',
          '@aurelia:surprised Oh, *bother!* Excuse me! I must go — fetch the — the *wet stick!*',
          'She curtsies to you — a full, deep, flawless court curtsy — and then flees toward the kitchen.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Aura catches you in the square on her day off. She\'s wearing a peasant dress three sizes too big, an enormous straw hat, and a determined expression.',
          '@aurelia:happy {name}! I need a teacher! In the ways of the common folk!',
          '@aurelia I want to buy things at the market *myself.* I want to eat food from a stall, with my *hands.* I want to *haggle.* Will you show me?',
          { if: 'aurelia_outed', text: '@aurelia:blush And since you already know — the *thing* — that I am definitely not — you\'re the only one I can ask without having to explain why I\'ve never held a coin.' },
        ],
        choices: [
          { text: '"Lesson one: haggling. Watch and learn." [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'haggle_win', fail: 'haggle_fail' },
          { text: 'Buy her a meat pie from a street stall.', go: 'pie', aff: 7, flag: 'aurelia_pie' },
        ],
      },
      haggle_win: {
        text: [
          'You approach the fruit seller. You compliment his apples. You lament your poverty. You walk away. He calls you back. You get six apples for the price of two and a free pear.',
          'Aura is staring at you like you\'ve just slain a dragon with your bare hands.',
          '@aurelia:surprised That was *magnificent!* That was *diplomacy!* My father\'s ambassadors couldn\'t have done better!',
          'She tries it herself at the next stall. She offers the cheese merchant twice the asking price and then apologises for insulting him. He gives her the cheese for free out of pure confusion.',
          '@aurelia:happy I WON!',
        ],
        aff: 8,
        next: 'fountain',
      },
      haggle_fail: {
        text: [
          'You attempt to haggle with the fruit seller. Somehow you end up paying double and buying a bucket you didn\'t want.',
          '@aurelia:surprised Is — is that how it\'s supposed to go?',
          '@you Absolutely. Advanced technique.',
          'She nods very seriously, then pays four times the price for a single plum. You both carry your terrible bargains to the fountain, laughing.',
        ],
        aff: 5,
        next: 'fountain',
      },
      pie: {
        text: [
          'You buy a steaming meat pie from a stall and hand it to her. She looks around for a plate. A fork. A napkin. A footman.',
          '@you Just bite it.',
          'She bites it. Gravy runs down her chin. Her eyes go huge.',
          '@aurelia:happy This is the best thing I\'ve ever eaten. In my *entire life.* We had a chef from the Eastern Isles and he never made anything like *this!*',
          'She eats three more. She gets gravy on her hat.',
        ],
        next: 'fountain',
      },
      fountain: {
        text: [
          'You end the day sitting on the edge of the town fountain, sharing apples, your feet in the cool water. She takes off her hat and lets the sun hit her face.',
          '@aurelia I\'ve never been anywhere without guards. Without someone telling me how to stand and what to say and who to smile at.',
          '@aurelia:happy Today, nobody told me anything. And you just... let me be bad at things.',
          'She looks at you, and her blue eyes are very soft.',
          '@aurelia:blush Thank you, {name}. For letting me be *Aura.*',
        ],
        choices: [
          { text: '"You\'re a very good Aura."', go: 'good', aff: 6 },
          { text: 'Splash her with fountain water.', go: 'splash', aff: 8, flag: 'aurelia_splash' },
        ],
      },
      good: {
        text: [
          '@aurelia:sad I\'m a *terrible* Aura. I can\'t mop, I can\'t count, and I set the kitchen on fire twice.',
          '@aurelia:happy ...But I think I\'m a *happy* one. I never knew those were different things.',
        ],
        end: true,
      },
      splash: {
        text: [
          'You kick a spray of water at her. She shrieks. For one second, she looks absolutely scandalised, the full force of royal outrage in her face.',
          'Then she shoves you into the fountain.',
          'You both end up soaked to the skin, laughing so hard you can\'t stand, while the pigeons scatter and a small crowd gathers to watch the barmaid and the adventurer splashing each other like a pair of drunken otters.',
          '@aurelia:happy No one has *ever* splashed me! Not in my *whole life!* Do it again!',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'Aura grabs your arm the moment you walk into the Tipsy Wyvern and drags you into the storeroom, pale as milk.',
          '@aurelia:surprised They\'re here. Royal Guards. They\'re asking about a "golden-haired runaway." They\'ve got a *portrait.*',
          'Through a crack in the door, you see four guards in royal livery questioning Madame Bettina. One of them is holding up a painting. It is very obviously Aura, in a crown.',
          '@aurelia:sad I\'m not ready. I can\'t go back. Not yet. Please, {name}.',
          'Footsteps approach the storeroom door.',
        ],
        choices: [
          { text: 'Step out and bluff the guards. [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'bluff', fail: 'hide' },
          { text: 'Pull her behind the ale barrels and hide together.', go: 'hide' },
        ],
      },
      bluff: {
        text: [
          'You step out of the storeroom, wiping your hands on an apron.',
          '@guard You there. Have you seen this woman?',
          'You study the portrait seriously.',
          '@you Oh, her? Sure. Came through about a week ago. Asked for directions to the docks. Said something about running off to marry a pirate.',
          '@guard A *pirate?!*',
          '@you Big fellow. Eyepatch. Called her "my little doubloon." Very romantic.',
          'The guards exchange horrified glances and rush out the door toward the harbor. Bettina, behind the bar, catches your eye and gives you a slow, approving wink.',
        ],
        aff: 10,
        flag: 'aurelia_pirate',
        next: 'truth',
      },
      hide: {
        text: [
          'You pull her down behind the barrels. It\'s a very small space. She\'s pressed against you, her face buried in your shoulder, her heart pounding so hard you can feel it.',
          'The door creaks open. Lantern light sweeps over the barrels. A guard grunts. The door closes.',
          'Neither of you moves for a long time after. She doesn\'t let go of your shirt.',
          '@aurelia ...They\'re gone.',
          '@you Yeah.',
          '@aurelia:blush I\'m still not moving.',
        ],
        aff: 7,
        next: 'truth',
      },
      truth: {
        text: [
          'Later, alone in the dim storeroom, she sits on a barrel and finally takes off her apron.',
          '@aurelia:sad I suppose you\'ve guessed. My name is Aurelia. Crown Princess of FantasyLandia. Heir to the Sunlit Throne.',
          { if: 'aurelia_outed', text: '@aurelia:smug Well. You didn\'t *guess.* You *knew.* The very first night, with ale on my shoes. And you never told a soul. Do you know how rare that is? At court a secret has the shelf life of milk.' },
          { if: 'aurelia_pirate', text: '@aurelia:happy And a *pirate!* "My little doubloon!" Where did you even — you\'re a *menace.* I\'m going to be thinking about Big Eyepatch at every state banquet for the rest of my life.' },
          '@aurelia:angry My father arranged a marriage. To Duke Fopsworth of the Western March. He\'s fifty-two. He collects snuffboxes. He once made a speech about snuffboxes that lasted three hours.',
          '@aurelia So I ran. I climbed out my window with a bag of jewels and no idea how anything works. And I ended up here.',
          'She looks at you. Her eyes are bright with unshed tears.',
          '@aurelia:blush I have been happier in this tavern than in twenty-four years in a palace. And it\'s because of you.',
        ],
        choices: [
          { text: '"Then don\'t go back. Stay here."', go: 'stay', aff: 8, flag: 'aurelia_stay' },
          { text: '"You\'re not just running away, Aurelia. You\'re running toward something."', go: 'toward', aff: 10, flag: 'aurelia_toward' },
        ],
      },
      stay: {
        text: [
          '@aurelia:sad I wish I could. But they\'ll find me eventually. And my father... he\'s not cruel. He\'s just — worried. And very bad at asking what I want.',
          '@aurelia I\'ll have to face him one day. I just want a little longer. A little longer of *this.* Of you.',
          'She leans her forehead against yours in the dark.',
        ],
        end: true,
      },
      toward: {
        text: [
          'She stares at you. Then she laughs — a wet, startled laugh — and wipes her eyes with her sleeve, very unladylike.',
          '@aurelia:surprised Toward *what?*',
          '@you You tell me.',
          'She leans forward and kisses you. Softly. Shyly. Like she\'s asking permission.',
          '@aurelia:blush ...That. Toward that.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'It\'s late. The tavern is closed. Aura — Aurelia — has invited you up to her tiny attic room above the Tipsy Wyvern. It\'s barely big enough for a narrow bed and a washstand. There\'s a crack in the window. She has decorated it with wildflowers in an old tankard.',
          '@aurelia:happy It\'s smaller than my wardrobe at the palace. I love it more than anything.',
          { if: 'aurelia_toward', text: '@aurelia:blush You said I was running *toward* something. I\'ve thought about it every night since, lying in that bed, looking at that crack in the window. I think I\'ve arrived.' },
          { if: 'aurelia_stay', text: '@aurelia:sad You asked me to stay. In the storeroom. I said I couldn\'t. I\'ve been saying it to myself every night since, and every night it sounds a little less true.' },
          'She turns to you. She\'s nervous — twisting her fingers together the way they must have taught her never to do.',
          '@aurelia I\'ve been told my whole life who to love. Who to marry. Who to be. Tonight I want to *choose.*',
          '@aurelia:blush I choose you, {name}. If you\'ll have a terrible barmaid with no money and a very angry father.',
        ],
        choices: [
          { text: '"I\'d have you if you were a barmaid, a princess, or a goat."', go: 'goat', aff: 10 },
          { text: 'Bow — a perfect court bow — and kiss her hand. "Your Highness." [Charm check 4]', check: { stat: 'charm', dc: 4 }, pass: 'bow', fail: 'goat_try' },
        ],
      },
      goat_try: {
        text: [
          "You sweep into your finest court bow. In a room this small, your elbow catches the tankard of wildflowers, your heel catches the washstand, and the bow becomes a sort of graceful collapse onto her narrow bed.",
          "Aura laughs so loudly that a pigeon takes off.",
          "@aurelia:smug *Your Highness,* says the person currently wearing my wildflowers.",
          "@you Fine. Forget the bowing.",
        ],
        next: 'goat',
      },
      goat: {
        text: [
          '@you I\'d have you if you were a barmaid, a princess, or a goat.',
          'She bursts out laughing, then grabs your collar and kisses you.',
          '@aurelia:happy A *goat!* You romantic fool!',
        ],
        flag: 'aurelia_goat',
        next: 'night',
      },
      bow: {
        text: [
          'You sweep into a bow worthy of the royal court and press your lips to her knuckles.',
          '@you Your Highness.',
          'Her breath catches. All her life, people have bowed to the crown. For the first time, someone is bowing to *her* — and she knows the difference.',
          '@aurelia:blush Get up. Get up and kiss me. That\'s a royal command.',
          '@you Thought you weren\'t a princess anymore?',
          '@aurelia:smug I\'ll make an exception. *Just* for tonight.',
        ],
        aff: 14,
        flag: 'aurelia_bow',
        next: 'night',
      },
      night: {
        text: [
          "The attic is cramped and the bed creaks alarmingly. Neither matters.",
          "@aurelia:blush I've been laced into gowns my entire life by three maids at a time. I've never once been *unlaced* by someone I wanted.",
          "She turns around and looks at you over her shoulder, blue eyes very wide and very bright.",
          "@aurelia Would you?",
          "Her barmaid's dress has only six laces, but you take your time with every one. Each tug sends a visible shiver down her spine. When the dress slips from her shoulders she doesn't reach to catch it, the way they must have taught her to. She lets it fall, and stands there in the moonlight with her chin up like a princess at her coronation.",
          "@aurelia:smug Well? Your future queen awaits your — no. No, that sounds ridiculous. Just — *come here.*",
          "She's tender and eager and full of wonder, as though discovering something no tutor or governess ever dared to teach her. She keeps saying *oh, is that allowed?* and then answering herself: *it is now, I've decided, royal decree.* She laughs often, a bright, unguarded, entirely un-royal laugh. You think you could listen to it forever.",
          "And when you kiss your way down the curve of her neck and murmur *Your Highness* against her skin, half teasing, she grips your shoulders and makes a sound that would scandalise the entire royal court...",
          "...",
          "The moon shines through the cracked window. Downstairs, the tavern cat knocks something over. Neither of you notices.",
          "Much later, she lies with her golden hair spread across your chest, tracing idle patterns on your skin.",
          "@aurelia:smug You realise this is treason. Seducing the Crown Princess. They used to hang people for this.",
          "@you Should I be worried?",
          "@aurelia:happy Terribly. I'm going to sentence you to a life of hard labour. In my bed. With no possibility of parole.",
          { if: 'aurelia_splash', text: "@aurelia:smug And let the record show that this was *revenge.* For the fountain. Long, slow, extremely thorough revenge. I'm heir to the Sunlit Throne. We hold grudges for *centuries.*" },
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake to sunlight through the cracked window, the smell of burnt toast, and Aurelia crashing through the attic door holding a tray, wearing your shirt and her apron and nothing else.",
          "@aurelia:happy I made breakfast! Myself! In the kitchen! With *fire!*",
          "The toast is charcoal. The eggs are somehow both raw and burnt. The tea is cold. She sets the tray down on your lap and looks at you with total pride.",
          "@aurelia:happy Nobody has *ever* let me cook. The palace chef wouldn't even let me hold a spoon. Isn't it *wonderful?*",
          { if: 'aurelia_bow', text: "@aurelia:smug Her Highness *commands* that you enjoy it. You started all this with the bowing. You've only yourself to blame.", else: "@aurelia:blush I'd have made you a goat, for symmetry. But the butcher was closed. And I think he'd have asked questions." },
          "From downstairs, Bettina's voice drifts up: \"Aura, dear! Why is the kitchen on fire again?\"",
        ],
        choices: [
          { text: "Eat the whole thing with a straight face.", go: "eat", aff: 6, flag: 'aurelia_ate' },
          { text: "\"It's perfect. Come back to bed and help me eat it.\"", go: "bed", aff: 6 },
          { text: "\"Should we... check on the fire?\"", go: "fire", aff: 4 },
        ],
      },
      eat: {
        text: [
          "You eat every bite. The charcoal toast. The raw-burnt eggs. The cold tea. You don't flinch once.",
          "Aurelia watches with growing wonder. When you finish, her eyes are wet.",
          "@aurelia:sad That was *terrible.* I tasted it. And you ate all of it. For me.",
          "@aurelia:happy I'm going to marry you. I've decided. Royal decree.",
        ],
        end: true,
      },
      bed: {
        text: [
          "She climbs back in beside you, still in the apron. You feed each other bites of charcoal toast and laugh until the bed creaks so loudly that Bettina bangs on the ceiling with a broom.",
          "@aurelia:surprised We're being *scolded!* By a *commoner!* For *noise!*",
          "She's never looked happier.",
        ],
        end: true,
      },
      fire: {
        text: [
          "@aurelia:surprised Oh! Oh, BOTHER —",
          "She runs downstairs in your shirt and the apron. A moment later you hear a scream, a splash, and the entire Tipsy Wyvern bursting into applause.",
          "When she comes back up, soaking wet and grinning, she says the regulars gave her a standing ovation. You decide not to ask which part they were applauding.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Trumpets sound on the festival hill. The crowd parts. A royal carriage rolls up the path, drawn by six white horses.',
          'The door opens, and Aurelia steps out in a gown of gold silk, a slim crown in her hair. The whole crowd gasps and drops into a bow.',
          'She ignores them all. She walks straight to you, past every lord and lady, and takes both your hands.',
          '@aurelia:happy I told him. My father. Everything. About the tavern, and the mop, and the pie, and *you.*',
          { if: 'aurelia_outed', text: '@aurelia:smug I told him you saw through me the very first night. He said, "Everyone saw through you, darling. You curtsied to a *horse.*" That is *not* the point.' },
          'Behind her, an older man with a golden beard steps out of the carriage. The King. He looks at you with a very stern expression.',
          { if: 'aurelia_pie', text: '@king So. You are the one who has been teaching my daughter to be *common.*', else: '@king So. You are the one who taught my daughter to haggle.' },
        ],
        next: 'king',
      },
      king: {
        text: [
          '@you ...Yes, Your Majesty.',
          { if: 'aurelia_splash', text: '@king And to *splash people in fountains.*', else: '@king And to drink tavern ale. She has sent me a *tasting report.* Four pages. The word "dreadful" appears nineteen times, always approvingly.' },
          '@you ...Also yes.',
          { if: 'aurelia_pie', text: ['@king And to eat pie. With her *hands.* In the *street.*', '@aurelia:smug It had gravy, Father. You\'d have done the same.'] },
          { if: 'aurelia_pirate', text: ['@king I am also told it was *you* who sent the Royal Guard to search Saltbreeze Harbor for a pirate named "Big Eyepatch."', '@king My Captain of the Guard has not slept in a fortnight. He has questions about a parrot.'] },
          'A very long pause.',
          '@king She has not laughed like this since her mother died. I had forgotten what it sounded like.',
          'He clears his throat gruffly and looks away.',
          '@king Duke Fopsworth has been informed. He has taken it well. He is consoling himself with snuffboxes. Watch the stars with my daughter, adventurer. Then we will discuss your *title.*',
          'Aurelia squeals — a deeply un-royal squeal — and throws her arms around your neck as the first star falls.',
        ],
        choices: [
          { text: 'Hold her close and watch the stars fall.', go: 'epilogue' },
          { text: 'Tell the King what she told you in the storeroom: she was happier in the tavern.', go: 'aura', if: [{ any: ['aurelia_stay', 'aurelia_goat'] }, { any: ['aurelia_pie', 'aurelia_mopped', 'aurelia_splash'] }] },
          { text: 'Kneel. Not to the King. To her.', go: 'queen', if: ['aurelia_bow', { any: ['aurelia_outed', 'aurelia_pirate', 'aurelia_toward'] }] },
        ],
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'You are married in the great cathedral of the capital, with the whole kingdom watching. Bettina is the guest of honour. She cries into a handkerchief the size of a tablecloth.',
          'Aurelia becomes the most beloved Crown Princess in FantasyLandia\'s history. She abolishes the snuffbox tax. She opens the palace gardens to the public. She founds the Royal Institute for Practical Skills, where nobles must learn to cook, mop, and haggle. Attendance is mandatory. The nobles are furious.',
          { if: 'aurelia_ate', text: 'Once a week she still makes you breakfast herself, in the palace kitchens, with the royal chef hovering behind her in visible agony. It\'s still terrible. You still eat every bite. She still watches you do it like it\'s the most romantic thing in the kingdom. It might be.' },
          'But on the first weekend of every month, she slips out of the palace with you, in a peasant dress three sizes too big and an enormous straw hat, and you ride to Clichéton.',
          'And for two whole days, at the Tipsy Wyvern, she\'s just Aura again: the worst barmaid in history, spilling ale on customers and laughing about it.',
          'The regulars all know. Nobody ever says a word.',
        ],
        ending: 'aurelia',
      },
      aura: {
        text: [
          '@you With respect, Your Majesty — you keep telling her what she\'s going to be. Have you ever asked her what she *wants?*',
          'The King opens his mouth. Closes it. Turns, very slowly, to his daughter, as though seeing a door in a wall he has walked past for twenty-four years.',
          '@king ...Aurelia. What do you want?',
          'She looks at you. You squeeze her hand.',
          '@aurelia:sad I want to be Aura, Father. Not on weekends. Not in secret. *Always.*',
          '@aurelia I want to burn toast and owe Gruk two coppers and get gravy on my hat. I want to be bad at things in front of people who love me anyway. Cousin Prudence has wanted the crown since she was four. She has a *five-year plan for the drains.* Let her have it. She\'ll be magnificent. She\'ll be *terrifying.*',
          'The silence goes on so long that a star falls in the middle of it.',
          '@king ...Your mother ran away once, you know. Before the wedding. I went after her. She made me carry her bags all the way back and told me I\'d *earned* her.',
          'He looks at you for a long moment. Then, very carefully, he lifts the slim crown from his daughter\'s hair and tucks it under his own arm.',
          '@king Carry her bags, adventurer.',
          'Aurelia bursts into tears, then into laughter, then reaches into the sleeve of her golden gown and pulls out a crumpled apron. She ties it on. It\'s inside out.',
          '@aurelia:happy I brought it just in case. *Just in case!* Oh, {name} — kiss me, quickly, before I start curtsying to everyone out of sheer relief.',
        ],
        next: 'epilogue_aura',
      },
      epilogue_aura: {
        text: [
          '*Some time later...*',
          'Princess Aurelia formally renounces the succession on the steps of the capital cathedral, in an apron. The proclamation is read by her cousin Prudence, who has already drafted the drainage reforms and is visibly trying not to look pleased.',
          'Aura buys a quarter-share of the Tipsy Wyvern with one diamond earring, which Bettina has appraised by Gruk, who bites it. She is promoted to Head Barmaid, and then, after the third kitchen fire, to Assistant Manager of Spillage, a post invented specifically for her.',
          'You live in the attic for a year, until the bed collapses outright and Bettina declares it a public safety concern and gives you the big room on the second floor. Aura weeps about leaving the crack in the window. You take the tankard of wildflowers with you.',
          { if: 'aurelia_mopped', text: 'There is a mop by the bar with your name carved into the handle. Nobody else is allowed to use it. On busy nights she hands it to you without a word, and the regulars all go "ohhh."' },
          { if: 'aurelia_pie', text: 'The pie man on Market Street names a pie after her. It is called *The Princess* and it has far too much gravy. She orders it every Thursday and eats it with her hands, on the fountain steps, in her straw hat.' },
          'On the first weekend of every month, a large man with a very obviously false beard comes in, sits at the end of the bar and orders "an ale, my good — er — guv." The regulars call him Goldie. He loses at cards to Gruk every single time and has never once been happier.',
          'Aura never does learn to count change. You do it for her. She learns to carry six tankards at once — well, five — well, four, reliably. She still curtsies to customers. Nobody minds.',
          'The crown lives in a hatbox under your bed, next to the enormous straw hat she wore on your first lesson. Once a year, on the anniversary of her renunciation, she puts it on and uses it to scrub the floor, because she says it\'s good for it to finally do some honest work.',
        ],
        ending: 'aurelia_aura',
      },
      queen: {
        text: [
          'You let go of her hands, step back, and go down on one knee in the grass — not facing the King. Facing her.',
          '@you Your Highness.',
          'The hill goes quiet. The King\'s eyebrows climb. Aurelia stares down at you, and you can see her remembering a cramped attic, a cracked window, the first person who ever bowed to *her* and not the crown on her head.',
          '@aurelia:blush ...You did that in the attic. And I made an exception *just* for one night.',
          '@aurelia:smug I think I\'m going to stop making exceptions.',
          'She turns to her father, chin up, coronation-straight, apron nowhere in sight.',
          '@aurelia Father. You\'ve been trying to retire for three years. You keep saying the kingdom isn\'t ready.',
          '@king ...And?',
          '@aurelia It is now. *I* am. I\'ve mopped its floors and haggled in its markets and been shouted at in its taverns. I know what a copper is worth. Nobody else at court can say that.',
          'The King looks at his daughter for a very long time. Then he lets out a breath that seems to come up from his boots.',
          '@king Thank the stars. My *back.*',
          'Aurelia laughs and pulls you to your feet by both hands, and kisses you in front of the King, the court, half of Clichéton and a thousand falling stars.',
          '@aurelia:happy Rise, consort. You\'ll have to learn eleven forks. I\'ll help. We\'ll cheat.',
        ],
        next: 'epilogue_queen',
      },
      epilogue_queen: {
        text: [
          '*Some time later...*',
          'Aurelia the First is crowned in midsummer. The commons call her Queen Aura, which she pretends to find undignified and has secretly had embroidered on her nightgowns.',
          'She rules exactly as she tended bar. She holds open court every Tuesday, in an apron, and pours the petitioners their own ale. She makes the Royal Council haggle for its budget in the public market, which has cut spending by a third and made the Lord Treasurer cry twice. Duke Fopsworth is appointed Minister of Snuffboxes, the only position in the kingdom with no duties whatsoever, and serves in it with tremendous joy.',
          { if: 'aurelia_pirate', text: 'You are named Royal Consort and, after the business with Big Eyepatch, Keeper of the Queen\'s Fictions. Any time a foreign spy needs misleading, the Guard is sent to you. Three enemy agents are currently searching the southern seas for a pirate who does not exist.' },
          { if: 'aurelia_splash', text: 'The palace fountains are opened to the public, with a royal edict that splashing is permitted on feast days. The Queen is usually the first one in.' },
          'There is a mop in the throne room, behind a tapestry of her great-great-grandfather. Nobody is supposed to know. Everybody knows.',
          'Every night, after the last petitioner has gone and the last minister has been chased from the room, she kicks off her slippers, sits on the edge of the great bed, and looks at you over her shoulder with those wide, bright blue eyes.',
          '"By royal command," she says.',
          'Six laces. You still take your time with every one.',
          'They taught her for twenty-four years how to rule. You were the only one who ever asked whether she wanted to. It turned out she did. She just needed it to be her choice.',
        ],
        ending: 'aurelia_queen',
      },
    },
  },
});
