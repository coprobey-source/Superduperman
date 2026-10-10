FL.addCharacter({
  id: 'valeria',
  name: 'Countess Valeria Nocturne',
  short: 'Valeria',
  trope: 'Evil Dominating Vampire',
  color: '#c2264b',
  favStat: 'charm',
  endingTitle: 'Consort of Eternal Night',
  endings: {
    valeria_bride: 'Bride of the Crimson Throne',
    valeria_bakery: 'Honey Bread at Midnight',
  },
  teaser: 'A tall silhouette on a throne of black iron. Red eyes glint. She is smiling, and it is not a nice smile.',
  blurb: 'Six-hundred-year-old mistress of Castle Nocturne. Imperious, cruel-tongued and deliciously wicked; she is used to being obeyed and has been bored for centuries. Only the truly charming can hold her attention — or dare to talk back.',
  schedule: [null, null, 'castle'],
  gifts: { love: ['wine'], like: ['gem', 'roses', 'perfume', 'quill'], hate: ['candle', 'dagger', 'relic'] },
  giftLines: {
    love: ['She uncorks it, inhales, and her eyes flutter half-closed.', '@valeria:happy Oh. *Oh*, you clever little thing. A 1340 vintage. You *do* know how to please me. I may let you live another week.'],
    like: '@valeria:smug Hm. Tribute. Adequate tribute. You are learning your place, pet.',
    neutral: '@valeria What *is* this? Are you trying to bore me to death? I am already dead, darling, it won\'t take.',
    hate: ['She hisses, recoiling into the shadows as if burned.', '@valeria:angry You *dare* bring that into my castle? Get it out. *Now.* Before I forget I find you amusing.'],
    special: {
      wine: [
        'She turns the bottle so the candlelight shows through it, and reads the label aloud.',
        '@valeria:smug "Do not ask." I wrote that, you know. In 1340. The vintner kept asking.',
        'She uncorks it with one fingernail and breathes it in, eyes half-closed.',
        '@valeria:happy Oh, you clever little thing. You have *taste*. Not as much as I do. But some.',
      ],
      fork: [
        'She holds the fork up between two fingers, the way one might hold a dead mouse brought in by the cat.',
        '@valeria:surprised A fork. For me. I have not eaten solid food since the spring of 1347.',
        '@valeria:smug ...I shall keep it on my throne and point at people I dislike with it. Gerald, come here. *Gerald.*',
      ],
      candle: [
        'The moment the blessed candle catches the light, every bat in the rafters screams.',
        '@valeria:angry A *temple* candle? In *my* hall? Do you want me to smell like a cathedral for a week? Out. Take it out. Gerald, open a window. Open *all* the windows.',
      ],
      relic: [
        'She takes one look at the little gilded reliquary and steps backward onto her own throne.',
        '@valeria:angry Whose knuckle is that? No. Don\'t tell me. I probably *knew* him.',
        '@valeria ...It\'s a pig bone, darling. You were swindled. Get it out anyway, on principle.',
      ],
      cakes: [
        'She takes the honey cakes, and for a moment she does nothing at all. She just breathes.',
        '@valeria:sad Honey. And butter. And something burnt at the edges, the way they always were.',
        '@valeria Take them back. No. Leave them. I shall smell them. That is all I get, and it is not nothing.',
      ],
      mirror: [
        'She tilts the gilded mirror toward herself. It shows the throne, the candles, the empty air where a Countess should be, and you, peering hopefully over her shoulder.',
        '@valeria:smug Look at that. A portrait of a mortal waiting to be praised. It\'s rather sweet, actually. I\'ll hang it in the hall.',
      ],
      quill: [
        'She sets the enchanted quill on a sheet of parchment. It immediately writes, in a beautiful copperplate hand: *Gerald is a damp candle.*',
        '@valeria:happy Oh, I *adore* it. It agrees with me. Nobody agrees with me except out of fear.',
      ],
      polish: [
        'She unscrews the little pot. It is hot pink. It glitters. She looks at it for a very long time.',
        '@valeria:surprised This is the least frightening substance I have ever been given.',
        '@valeria:smug ...I am going to paint Gerald\'s nails while he sleeps. Thank you, darling. This is a gift for *both* of us.',
      ],
    },
    repeat: '@valeria:smug Again? Darling, I have lived six hundred years. I notice patterns. I *am* a pattern. Surprise me, or I shall have to surprise *you.*',
  },
  talk: [
    ['@valeria Ah, my little mortal returns. Do you know how many fools have walked through those gates? I keep their names in a book. It is a *very* long book.', '@valeria:smug Yours is written in pencil. For now.'],
    ['@valeria:smug The villagers call me "The Crimson Terror." I prefer "Countess." Or "Mistress." You may choose. Choose correctly.'],
    ['She is sprawled across her throne sideways, one leg dangling over the armrest, looking terribly bored.', '@valeria Entertain me. Sing. Dance. Juggle. Bleed a little. Anything.'],
    ['@valeria Sunlight? A *dreadful* thing. Hot, bright, cheerful. Everything I despise. You remind me of it a little. I haven\'t decided if that\'s a compliment.'],
    ['@valeria Six hundred years, and shall I tell you what I\'ve learned? Mortals are fragile, foolish, short-lived...', 'She trails a cold finger along your cheek.', '@valeria:smug ...and *so* warm.'],
    ['@valeria My servants? Bats, mostly. A few ghouls. One very nervous butler named Gerald. Gerald, say hello.', 'Somewhere in the dark, someone squeaks.'],
    ['@valeria:angry Garlic. Everyone asks about garlic. Garlic is a lie spread by garlic merchants in 1411. I simply dislike it because it is *common.*', '@valeria Holy water, on the other hand, is real, and I would thank you not to bring any to dinner.'],
    ['She is reclining on the throne while a coat rack in the corner holds her cloak. The coat rack has a very sad face carved into it.', '@valeria:smug You\'ve met Sir Bertram? The paladin. The last man who told me no. He holds my cloak beautifully. He\'s much more useful this way.'],
    ['@valeria Yes, I can turn into a bat. No, you may not see. It is one bat, darling. One *small* bat. It squeaks. It is the single most undignified thing about me, and if you ever tell anyone, I will turn you into a matching one.'],
    ['@valeria:sad I haven\'t seen my own face in six hundred years. No reflection, you see. Portrait painters lie, and I have eaten most of them.', '@valeria:smug Describe it. My face. Be accurate. Be *generous.*'],
    { if: 'valeria_defied', lines: ['@valeria:smug Do you know, I had a statistic. A hundred and twelve years without anyone telling me no. I was very proud of it.', '@valeria Then you walked in and smiled at me. Now the number is *days.* You\'ve ruined my statistic, pet. I\'m keeping a new one. It\'s about you.'] },
    { if: 'valeria_flirted', lines: ['@valeria You flirted with me. In my own throne room. Moments from death.', '@valeria:blush I\'ve been thinking about it. Not *fondly.* Analytically. The line was terrible, by the way. "Just the cute ones." Gerald has been repeating it in the kitchen. I can hear him.'] },
    { if: 'valeria_honest', lines: ['@valeria:happy Gerald has been instructed to roast two pheasants whenever you visit. He asked me why.', '@valeria I told him honesty must be rewarded. He wept. I think he has been lying to me for years.'] },
    { if: { stage: 3 }, lines: ['She opens the long black book on her lap and turns it toward you. Near the very end, in fresh red ink, is your name.', '@valeria:blush Not pencil anymore. Don\'t make that face. Ink can be *crossed out,* you know.', 'She closes the book very gently, as if it might bruise.'] },
    { if: 'valeria_jealous_soothed', lines: ['@valeria:smug "I would sooner eat *garlic.*" Gerald heard me laughing in the carriage from the castle gates. Two miles, darling.', '@valeria:blush He asked if I was ill. I told him I was *entertained,* which for me is very nearly the same thing. Do the speech again some time. I\'ve been rewriting your second verse.'] },
    { if: 'valeria_jealous_sulked', lines: ['@valeria:angry I am still a *little* cross about the swoon. You hit the window. The window is antique.', '@valeria:sad ...Is your head all right? Don\'t answer that warmly. I\'m cross.'] },
    { if: ['valeria_honeybread', { stage: 3 }], lines: ['@valeria:sad I tried to remember the honey bread last night. My mother\'s. I got as far as the smell of the oven and the sound of the bell over the door.', '@valeria Then nothing. Six hundred years is a long way to carry a loaf. Don\'t look at me like that. Tell me something warm, and quickly.'] },
  ],
  afterTalk: [
    ["@valeria:happy Ah, my sweetheart returns. Do you know, Gerald has started setting two places at dinner without being told. Insolent man. I've given him a raise."],
    ["She tilts your chin up with one cold finger and inspects your neck.", "@valeria:smug Healing nicely. What a shame. Come upstairs later and I'll... *redecorate.*"],
    ["@valeria:angry I've been dreadfully distracted all evening. I signed a decree ordering the village to plant *flowers.* Flowers! This is your fault. You've ruined me."],
    [{ if: 'valeria_obeyed', text: "@valeria I kept the ribbon, you know. The black one. It's on my nightstand.", else: "@valeria There is a black silk ribbon on my nightstand, you know. I have never used it. *Yet.*" }, "She smiles slowly.", "@valeria:smug For *emergencies.*"],
    { if: 'valeria_switched', lines: ["@valeria:blush I've been practicing saying *please*. In the mirror. I have no reflection, so it's very freeing. Nobody sees me do it.", "@valeria:smug Gerald heard me once. Gerald has been sent to the cellar to think about what he heard."] },
    { if: 'valeria_sunrise', lines: ["@valeria You said it. The word. That night. And then you stayed.", "@valeria:sad Shall I tell you how many people I gave that word to over the centuries? Three. Not one of them ever used it. They were too frightened. You were the first to trust that I meant it."] },
    { if: 'valeria_jealous_offered', lines: ["She lifts your wrist to her face, absently, the way other people check a pocket watch, and breathes in.", "@valeria:happy Only you. Good.", "@valeria:smug What? It's a habit now. You gave it to me. In the carriage. You have only yourself to blame."] },
    { if: 'valeria_jealous_defied', lines: ["@valeria:smug \"You don't own me.\" I had it embroidered on a cushion. Black silk, red thread.", "@valeria I stab it with a hatpin some evenings. Lovingly. It helps."] },
    { if: 'valeria_jealous_sulked', lines: ["@valeria I had the carriage step lowered, you know. After I threw you out of it.", "@valeria:blush So that if it ever happens again, you won't land in the same puddle. I'm not apologizing. I'm *improving the carriage.*"] },
    { if: 'valeria_date_harbor', lines: ["@valeria:sad I keep thinking about the harbor. The last sliver of sun going under the water, and you beside me, sweating politely under my parasols.", "@valeria:smug Somebody once told me a sunset looks like the inside of a peach. I've never eaten a peach. I've decided they're my favorite fruit anyway."] },
    { if: 'valeria_bread_shared', lines: ["@valeria Gerald found me in the kitchen at four in the morning. Flour to the elbows. I told him I was conducting a *ritual.*", "@valeria:blush I was trying the recipe again. The honey bread. I still can't taste it. But the kitchen smells right, and you're asleep upstairs, and that's... rather close."] },
    ["@valeria:smug I've moved your name in the book, you know. To the front. On its own page. With a border.", "@valeria The border is bats. Don't laugh. It took a week."],
  ],
  dateFav: 'gardens',
  dates: {
    dinner: {
      start: {
        text: [
          'The Tipsy Wyvern has never been so quiet. The fiddler has stopped mid-jig. A dwarf has frozen with his tankard halfway to his mouth. Every head in the tavern turns toward the door as Countess Valeria Nocturne sweeps in, takes one long look around, and wrinkles her nose.',
          '@valeria:smug So *this* is where mortals go to enjoy themselves. How brave of them.',
          'She allows you to lead her to the corner booth. She does not allow the barkeep to come within six feet of it. He sets a candle on the table with a pair of tongs, bows, and flees.',
          '@valeria What is the house wine?',
          '@you I think it\'s just called "red."',
          '@valeria:angry *Red.* As though that were a vintage. As though that were a *personality.*',
        ],
        choices: [
          { text: 'Produce a bottle of Vintage Bloodwine from your coat. "I brought our own."', if: { item: 'wine' }, take: { wine: 1 }, go: 'own', aff: 6 },
          { text: 'Order the honey bread. Describe every bite to her.', if: 'valeria_honeybread', go: 'bread', aff: 6, flag: 'valeria_bread_shared' },
          { text: 'Order the house red for her anyway. "Be brave, Countess."', go: 'red', aff: 2 },
          { text: 'Ask her what she did on her first night out, six hundred years ago.', go: 'first', aff: 4 },
        ],
      },
      own: {
        text: [
          'You set the bottle on the table. The label says *Do not ask.* Her eyes go wide, then narrow, then go wide again.',
          '@valeria:happy You smuggled my own wine into a *tavern?* Past a barkeep? Under your coat?',
          '@valeria:smug That is the most criminal thing anyone has ever done for me. And I once had a cardinal steal a cathedral door.',
          'She pours two glasses. She drinks hers. She watches you sip yours with open, delighted malice, waiting for you to cough. You don\'t. She looks almost proud.',
        ],
        next: 'end',
      },
      bread: {
        text: [
          'The bread arrives warm, split down the middle, honey pooling in the crumb. Valeria goes very still across the table.',
          '@valeria:sad You remembered.',
          'You take a bite and tell her about it. The crust that crackles. The way the honey goes almost salty at the burnt edges. The soft middle that tastes like somebody\'s kitchen early in the morning.',
          'She leans her chin on her hand and listens like it\'s an opera. When you finish, she says nothing for a long while.',
          '@valeria:blush ...More. Tell me the second bite. Slower.',
        ],
        next: 'end',
      },
      red: {
        text: [
          'The house red arrives in a tankard. Valeria regards it the way she might regard a peasant who has wandered into her ballroom.',
          'She takes one sip. Her face does not move. A single candle on the far side of the tavern goes out on its own.',
          '@valeria:angry That is not wine. That is a *rumor* of wine. Somebody heard about wine once and tried to describe it to a barrel.',
          '@valeria:smug ...But you were very brave to order it for me. I\'ll have you killed later. Gently.',
        ],
        next: 'end',
      },
      first: {
        text: [
          '@valeria:surprised My first night out? After I was turned?',
          'She traces one nail slowly around the rim of her empty glass, thinking.',
          '@valeria I went to a tavern. Rather like this one. Smaller. Smokier. I sat in the corner and listened to everyone laughing and realized I would never be hungry for bread again.',
          '@valeria Then a drunk soldier tried to steal my purse, and I discovered I was hungry for something else entirely.',
          '@valeria:smug He lived, before you ask. He became a monk. Very devout. Wouldn\'t stop writing to me.',
        ],
        next: 'end',
      },
      end: {
        text: [
          { if: { stage: 4 }, text: 'When you get up to leave, she takes your arm in full view of the whole tavern, and lets them all look. The fiddler starts playing again, very softly, something romantic. She tips him a gold coin and a death threat.' },
          '@valeria:smug Well. I suppose the company made up for the wine. Barely. Walk me to my carriage, pet. And try to look *menacing.* I have a reputation.',
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          'The Moonlit Gardens at midnight belong to Valeria. You can tell because the night watchman takes one look at her, hands you his lantern, and goes home.',
          'Moonlight silvers the white roses. Fountains whisper. Somewhere in the hedge maze, a nightingale is singing, slightly off-key, as if nervous.',
          '@valeria:happy I paid for these gardens, you know. In 1502. I told the Duke it was a gift to the town. It was so that I had somewhere *beautiful* to brood.',
          '@valeria Brooding in a dungeon is so *obvious.* Anyone can brood in a dungeon.',
          'She walks with her arm through yours, slow and unhurried, as though the night has been set aside for exactly this.',
        ],
        choices: [
          { text: 'Pick her a white rose. Prick your finger on the thorns doing it.', go: 'rose', aff: 6 },
          { text: 'Run into the hedge maze. "Catch me, Countess."', go: 'maze', aff: 5 },
          { text: 'Ask her to tell you what she broods about.', go: 'brood', aff: 3 },
        ],
      },
      rose: {
        text: [
          'You snap off the palest rose on the bush and hiss as a thorn bites into your thumb. A single bright bead of red wells up.',
          'Valeria is suddenly much closer than she was.',
          '@valeria:blush You did that on *purpose.*',
          '@you I really didn\'t.',
          '@valeria:smug Liar. Delicious liar.',
          'She takes your hand, slowly, and lifts your thumb to her lips. It is the briefest touch: cool mouth, a flicker of warmth, gone. She tucks the rose behind her ear without looking.',
          { if: { stage: 4 }, text: '@valeria:blush Next time, darling, bleed somewhere more *interesting.*', else: '@valeria That was a liberty. I took it. I\'m not sorry.' },
        ],
        next: 'end',
      },
      maze: {
        text: [
          'You bolt into the maze. Hedges flash past. You take three lefts, a right, and a turn you\'re fairly sure doesn\'t exist, and you crouch behind a marble faun, breathing hard.',
          'Silence. Not even the nightingale.',
          '@valeria:smug I can hear your heart, pet.',
          'Her voice is in front of you. Then it\'s behind you. Then cold arms slide around your waist from somewhere that should have been a hedge.',
          '@valeria:happy Six hundred years and nobody has ever asked me to *chase* them. They run, certainly. But nobody ever *asked.* It\'s a completely different thing when it\'s a game.',
          'She doesn\'t let go for a while. The nightingale, cautiously, resumes.',
        ],
        next: 'end',
      },
      brood: {
        text: [
          '@valeria:surprised What I *brood* about? Darling, it\'s not a hobby. It\'s an aesthetic.',
          '@you So, nothing?',
          '@valeria:angry Of course not nothing. Empires. The decline of good tailoring. That one sculptor in 1588 who promised me a statue and died before finishing the nose.',
          'She looks at the roses, and something in her face goes softer.',
          '@valeria:sad And lately, a mortal. How quickly the roses go over. How I\'ve watched these exact bushes bloom four hundred times, and only this year did I bother to smell them.',
        ],
        next: 'end',
      },
      end: {
        text: [
          'By the time you reach the great fountain at the center, the moon is low. She sits on its marble rim and pulls you down beside her.',
          { if: { stage: 4 }, text: 'She kisses you there, slow and certain, while the fountain whispers secrets behind you. When she pulls back her lips are faintly warm, borrowed from yours.' },
          '@valeria:happy This is my favorite place in the whole town, you know. I\'ve never brought anyone here. Don\'t make it strange.',
          '@valeria:smug ...Make it a *little* strange.',
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          'Saltbreeze Harbor at sunset is gold and pink and full of gulls. Valeria arrives precisely as the last fingernail of sun touches the water, stepping out of a black carriage under three parasols, a veil, and a cloak with the hood up.',
          '@valeria:angry I want you to know that I am doing this under protest. There is *daylight* still lying about. On the water. Just *lying* there.',
          'She stands at the very end of the pier in the deepest available shadow, like a cat who has been placed against its will in a bucket.',
          '@valeria Well? This is the famous sunset, is it? Describe it. I am looking at the sea through four layers of lace.',
        ],
        choices: [
          { text: 'Describe the sunset to her, carefully, in every color you can find.', go: 'describe', aff: 6 },
          { text: 'Offer her some of your fried fish.', go: 'fish', aff: 2 },
          { text: 'Lift her veil a little. "Look for yourself. Just the edge."', go: 'veil', aff: 4 },
        ],
      },
      describe: {
        text: [
          'So you tell her. The gold where the sun is touching the water, like a coin being slid under a door. The pink further out. The clouds lit from underneath, the color of the inside of a peach.',
          { if: 'valeria_honeybread', text: 'And the very edge of it, where it\'s going dark: brown and gold together, like the crust on a loaf of honey bread.' },
          'Valeria doesn\'t interrupt once. Behind the veil, her eyes are closed.',
          '@valeria:sad I last saw that in the year 1347. From a bakery window. I didn\'t know it was the last time.',
          '@valeria:blush ...Again. Describe it again, before it goes. Do the peach part again.',
        ],
        next: 'end',
      },
      fish: {
        text: [
          'You hold out the paper cone of fried fish. She looks at it. She looks at you.',
          '@valeria:surprised You are offering a six-hundred-year-old vampire... *batter.*',
          '@you It\'s really good batter.',
          'She takes the cone with immense dignity and holds it, untouched, like a royal scepter. A gull lands on the railing and eyes it. She eyes the gull back. The gull reconsiders its entire life and leaves.',
          '@valeria:smug There. I have defended your fish. That is the most I can do with fish.',
        ],
        next: 'end',
      },
      veil: {
        text: [
          'You lift the corner of her veil, just an inch. The very last line of light slides across the water toward her.',
          'She flinches, and then doesn\'t. She looks. For one heartbeat, the sun is a red thread on the horizon, and her eyes reflect it.',
          'Then it\'s gone. She drops the veil. Her hand is trembling, only slightly.',
          '@valeria:angry That was *reckless.*',
          '@valeria:happy ...It was red. At the end. It was the same red as my eyes. Did you know that? I didn\'t know that.',
        ],
        next: 'end',
      },
      end: {
        text: [
          'With the sun safely drowned, she throws back the hood and the veil and all three parasols, and walks the length of the pier with you in the lamplight as if she owns it. Several fishermen decide she does.',
          { if: { stage: 4 }, text: 'At the end of the pier she pulls you into her cloak, out of the wind, and keeps you there. "You\'re cold," she says, which is absurd, coming from her. You don\'t argue.' },
          '@valeria:smug Next time we do this, it will be a *moonrise.* I am making the rules now. I have always been making the rules.',
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          'Valeria has agreed to a picnic in Whisperwood on one condition: that it is held at midnight. She has also had Gerald pack the basket.',
          'Gerald\'s basket contains: one silver candelabra, lit. One damask tablecloth. One crystal goblet. Her own bottle of wine. And, for you, a single grape on a silver plate.',
          '@valeria:smug Gerald has never been on a picnic either. He was trying his best. Don\'t you *dare* laugh at the grape.',
          'She arranges herself on the cloth like a painting of a tragic duchess. The forest goes very quiet around her. Even the owls seem to be minding their manners.',
        ],
        choices: [
          { text: 'Eat the grape with tremendous ceremony.', go: 'grape', aff: 6 },
          { text: 'Lie back and ask her to name the stars for you.', go: 'stars', aff: 5 },
          { text: 'Tell her a ghost story to set the mood.', go: 'ghost', aff: 3 },
        ],
      },
      grape: {
        text: [
          'You lift the grape. You examine it in the candlelight. You bow to Gerald, who is not present but surely senses it. Then you eat it, slowly, with your eyes closed, and sigh as if it were the finest feast of your life.',
          'Valeria laughs out loud. It\'s her real laugh, the startled one, and it sends a whole tree full of bats into the air.',
          '@valeria:happy Oh, you *absurd* creature. Gerald will be so proud. I\'ll tell him you wept.',
          '@you I nearly did. It was a very good grape.',
          '@valeria:smug It was the *only* grape. Scarcity is the soul of luxury, pet.',
        ],
        next: 'end',
      },
      stars: {
        text: [
          'You lie back on the damask and look up. She stretches out beside you and points with one long nail.',
          '@valeria That one is the Hunter. That one is the Ship. That one is the Countess\'s Garter, and you may stop smirking, because I *named* it. In 1460. There was a poet involved, and some wine, and then a great deal of paperwork with the Astronomers\' Guild.',
          '@valeria:blush ...He was a very bad poet. It is a very good garter.',
          'She falls quiet. Her shoulder is cool against yours.',
          '@valeria:sad They\'ll still be there when you\'re gone, you know. The stars. I try not to think about that on picnics.',
        ],
        next: 'end',
      },
      ghost: {
        text: [
          '@you So, there\'s this castle on a hill, and every night a pale woman in red walks its halls—',
          '@valeria:angry Absolutely not. That is *libel.* I don\'t walk. I *glide.* And the gown is burgundy.',
          '@you It\'s not about you.',
          '@valeria:smug Darling, every ghost story in this valley is about me. I\'ve read them all. Several of them I *commissioned.*',
          'She spends the next half hour correcting your story, adding a far better ending in which the castle\'s mistress drinks the narrator. It\'s terrifying. You both enjoy it enormously.',
        ],
        next: 'end',
      },
      end: {
        text: [
          'The candelabra burns low. She lets you pack up, and supervises.',
          { if: { stage: 4 }, text: 'Before you leave, she takes the cloak from her shoulders and wraps it around yours. It is heavy and smells of roses and old stone. "The forest is cold," she says, "and you\'re mine. Those are both facts."' },
          '@valeria:happy Tell no one I enjoyed myself. I have a reputation. I am the Crimson Terror. I do not *picnic.*',
          '@valeria:smug ...Same time next week.',
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'The gates of Castle Nocturne swing open as you approach, without a single hand touching them. Candles light themselves, one by one, down a long hall of black marble and red velvet.',
          'At the end of the hall, on a throne of twisted iron, sits a woman. Pale as moonlight, hair like spilled ink, a gown the color of old blood. Her eyes are a lazy, glowing crimson.',
          '@valeria:smug Well, well. A visitor. How *quaint.* Do you know where you are, little mortal?',
          '@valeria You are in my house. Uninvited. That is very rude. In my experience, rude guests end up as dinner.',
          'She rises — and suddenly she\'s right in front of you, though you never saw her move. She tilts your chin up with one cold, sharp-nailed finger.',
          '@valeria *Kneel.*',
        ],
        aff: 10,
        choices: [
          { text: 'Kneel, with a theatrical bow. "As my lady commands."', go: 'kneel', flag: 'valeria_knelt' },
          { text: 'Don\'t kneel. Smile instead. "I don\'t think I will." [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'defy_win', fail: 'defy_fail' },
          { text: '"Do you say that to all your guests, or just the cute ones?"', go: 'flirt', flag: 'valeria_flirted' },
        ],
      },
      kneel: {
        text: [
          'You sweep into an elaborate bow and drop to one knee. Her eyebrows rise.',
          '@valeria:smug Oh, *theatrical.* And obedient. I could get used to this.',
          'She circles you slowly, her gown whispering across the marble.',
          '@valeria Most of them kneel because they\'re terrified. You knelt like you were having *fun.* Curious.',
        ],
        aff: 3,
        next: 'name',
      },
      defy_win: {
        text: [
          '@you I don\'t think I will.',
          'For a moment the air goes cold enough to frost your breath. Then — she laughs. A low, delighted, genuinely surprised laugh that echoes up into the vaulted ceiling.',
          '@valeria:happy Oh, you *impudent* thing! No one has said no to me in a hundred and twelve years. The last one was a paladin. I turned him into a very nice coat rack.',
          '@valeria:smug You, though... I think I\'ll keep you a while. For entertainment.',
        ],
        aff: 7,
        flag: 'valeria_defied',
        next: 'name',
      },
      defy_fail: {
        text: [
          '@you I don\'t th— ',
          'Her eyes flare red, and your knees give out on their own. You hit the floor. She smirks.',
          '@valeria:smug Bold words, weak knees. Never mind, darling. You may try again when you\'re more... *interesting.*',
          'Still, there\'s a glint of curiosity in those crimson eyes.',
        ],
        aff: 1,
        next: 'name',
      },
      flirt: {
        text: [
          'She blinks. Once. Twice. Six hundred years of composure visibly misplaces itself.',
          '@valeria:surprised Did you — are you *flirting* with me? In my own throne room? Moments from death?',
          '@you Is it working?',
          '@valeria:blush ...Absolutely not.',
          'It\'s working a little.',
        ],
        aff: 5,
        next: 'name',
      },
      name: {
        text: [
          '@valeria I am Countess Valeria Nocturne, Mistress of the Night, Scourge of the Southern Vale, and owner of this rather dusty castle. And you are?',
          '@you {name}.',
          '@valeria:smug {name}. How plain. I shall call you "pet" instead.',
          'She waves a hand, and the great doors swing open behind you.',
          '@valeria You may go. You may also come back. Evenings only, naturally. Bring me something worth my time, and perhaps I won\'t drink you.',
          '@valeria:smug ...Perhaps.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'A bat flutters down from the castle gates as you arrive and drops a black envelope into your hands. Inside, in elegant crimson script: *You will dine with me tonight. Attendance is not optional. — V.*',
          'The dining hall could seat a hundred. Tonight it seats two. Silver platters of roast pheasant and sugared fruits for you. A single crystal goblet of something dark red for her.',
          '@valeria Eat. You\'re too thin. I like my mortals well fed. Purely for... aesthetic reasons.',
          'She watches you over the rim of her goblet, chin propped on one hand.',
          { if: 'valeria_flirted', text: '@valeria:smug And no flirting at the table. I\'ve had Gerald hide the candles you might find "romantic." He has hidden all of them. That is why it is so dark.' },
          { if: 'valeria_defied', text: '@valeria You\'ll notice I haven\'t asked you to kneel tonight. I have learned. I learn very slowly, pet, but I *do* learn.' },
          '@valeria We shall play a game. I ask a question; you answer honestly. If you lie, I\'ll know. If you bore me, I\'ll know that too. Understood?',
        ],
        next: 'q1',
      },
      q1: {
        text: [
          '@valeria First question. Why do you keep coming back here? Everyone else in that town crosses the street when my carriage passes.',
        ],
        choices: [
          { text: '"Because you\'re the most interesting person in Clichéton."', go: 'q1a', aff: 5 },
          { text: '"Because I don\'t think you\'re as evil as you pretend."', go: 'q1b', aff: 3 },
          { text: '"Honestly? The free food."', go: 'q1c', aff: 4, flag: 'valeria_honest' },
        ],
      },
      q1a: {
        text: [
          '@valeria:smug Flattery. Cheap. Effective. *Continue.*',
          'She hides a smile behind her goblet.',
        ],
        next: 'q2',
      },
      q1b: {
        text: [
          'The temperature in the room drops ten degrees.',
          '@valeria:angry Oh, I am *exactly* as evil as I pretend, pet. I have burned villages. I have drained knights. I have once, on a whim, cancelled a children\'s birthday party.',
          '@valeria:blush ...That last one was a misunderstanding. The clown was *very* frightening.',
        ],
        next: 'q2',
      },
      q1c: {
        text: [
          'Her goblet stops an inch from her lips. Then she sets it down, very carefully, and laughs until the candle flames lean away from her.',
          '@valeria:happy *Honesty!* Oh, it\'s so rare, I forgot what it tasted like. Have more pheasant, you ridiculous creature.',
        ],
        next: 'q2',
      },
      q2: {
        text: [
          '@valeria Second question. What do you want, mortal? Riches? Power? Immortality? I could give you any of them. For a price.',
        ],
        choices: [
          { text: '"I want to know what you want." [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'q2_win', fail: 'q2_fail' },
          { text: '"Another dinner like this one."', go: 'q2_dinner', aff: 5 },
        ],
      },
      q2_win: {
        text: [
          'Valeria goes very, very still. The candles flicker.',
          '@valeria:surprised What I *want?*',
          'She doesn\'t answer at once. A candle drips. When she does, her voice is quieter. Almost unguarded.',
          '@valeria:sad Something I haven\'t seen before. Something that surprises me. Do you know how *long* six hundred years is, pet? I have read every book. Seen every play. Every mortal who walks through those doors wants the same three things.',
          '@valeria And then you came along and asked me *that.*',
          'She sets down her goblet with a sharp little click.',
          '@valeria:blush Dinner is over. Come back tomorrow. That is an *order.*',
          'It sounds more like a request.',
        ],
        aff: 10,
        flag: 'valeria_asked_want',
        end: true,
      },
      q2_fail: {
        text: [
          '@you I want to know what *you* want.',
          '@valeria:smug Hah! A clumsy deflection, darling. I want you to answer my question.',
          '@you ...Riches?',
          '@valeria How *dull.* Never mind. You\'re still prettier than Gerald.',
          'Gerald squeaks from the shadows, wounded.',
        ],
        aff: 3,
        end: true,
      },
      q2_dinner: {
        text: [
          '@valeria:surprised Another — ',
          'She cuts herself off. For the first time since you met her, Countess Valeria Nocturne seems at a loss for words.',
          '@valeria You could have *immortality*, and you want a second dinner.',
          '@you The company\'s good.',
          '@valeria:blush ...Tomorrow, then. Same time. Wear something nicer.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'Tonight the great ballroom of Castle Nocturne is lit with a thousand black candles. A ghostly orchestra plays in the gallery. The dance floor is empty, except for the Countess.',
          '@valeria:angry You\'re late. I\'ve been waiting. I *loathe* waiting.',
          'She extends one gloved hand.',
          '@valeria:smug Dance with me, pet. I lead. I always lead.',
          { if: 'valeria_defied', text: '@valeria:smug And don\'t smile at me like that. Like you did the night you wouldn\'t kneel. I know that smile. That smile is *trouble.*' },
          { if: 'valeria_honest', text: '@valeria There\'s pheasant afterward. I know why you really come here.' },
          'She does lead. She dances like a storm — sweeping, commanding, pulling you through turns so fast the candles blur. Her body is cool against yours. Her eyes never leave your throat.',
        ],
        choices: [
          { text: 'Let her lead completely. Follow every move.', go: 'follow', aff: 5 },
          { text: 'Halfway through, take the lead yourself. [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'lead_win', fail: 'lead_fail' },
        ],
      },
      follow: {
        text: [
          'You let her guide you, surrendering to the music, and she makes a soft, pleased sound low in her throat.',
          '@valeria:smug Good. *Very* good. You trust me. That\'s either very brave or very stupid.',
        ],
        next: 'blood',
      },
      lead_win: {
        text: [
          'At the crescendo, you tighten your grip on her waist and spin *her* instead.',
          'Valeria lets out a sharp, startled gasp — and then she\'s laughing, breathless, as you dip her low over the ballroom floor.',
          '@valeria:happy You — *insolent* — oh, do that again.',
        ],
        aff: 8,
        flag: 'valeria_led',
        next: 'blood',
      },
      lead_fail: {
        text: [
          'You try to take the lead. She simply doesn\'t let you; you end up spinning on your own like a confused top while she watches, arms folded, smirking.',
          '@valeria:smug Valiant effort, pet. Six hundred years of practice, though. Six hundred.',
        ],
        aff: 3,
        next: 'blood',
      },
      blood: {
        text: [
          'The music slows. She draws you close, so close your cheek brushes her cold one. Her lips hover just above the pulse in your neck.',
          '@valeria I can hear it, you know. Your heartbeat. It\'s been racing all night.',
          '@valeria I want to taste you. Just a little. I could simply *take* it — I always have, from everyone. But for some reason, with you, I find I want to be... *asked.*',
          { if: 'valeria_asked_want', text: '@valeria:sad You asked me once what I want. Over dinner. I didn\'t answer properly. This is the answer. *This.*' },
          'She pulls back, just enough to look at you. And for the first time, there is something uncertain in her crimson eyes.',
        ],
        choices: [
          { text: '"Then I\'m asking. Go ahead."', go: 'yes', aff: 10, flag: 'valeria_offered' },
          { text: '"Not tonight."', go: 'no', aff: 8, flag: 'valeria_refused' },
          { text: '"Only if you tell me something true about yourself first."', go: 'trade', aff: 9, flag: 'valeria_honeybread' },
        ],
      },
      yes: {
        text: [
          'You tilt your head. She stares at the offered skin for a long moment, like a starving woman before a feast she never expected to be invited to.',
          'Then her fangs slide in — a sharp sting, then warmth flooding through you like the first sip of hot spiced wine. Her arms tighten around you, and every candle in the ballroom bows its flame toward her.',
          'It lasts only seconds. She pulls away and presses a cold kiss to the tiny wound, sealing it. Her lips are red. Her eyes are wet.',
          '@valeria:sad No one has ever *offered.* Six hundred years. They scream. They pray. They run. No one has ever just... offered.',
          '@valeria:blush You stupid, wonderful creature.',
        ],
        end: true,
      },
      no: {
        text: [
          'She freezes. You can practically feel the castle hold its breath.',
          'And then, slowly, she steps back and dips her head. It\'s the first time you\'ve seen her bow to anyone.',
          '@valeria:sad ...As you wish.',
          '@valeria When mortals tell me no, pet, they usually say it over their shoulder, running. You simply stand there and keep holding my hand.',
          'She doesn\'t let go. Not for the rest of the night.',
        ],
        end: true,
      },
      trade: {
        text: [
          'Her eyebrows rise. Then, quietly:',
          '@valeria:sad ...I was a baker\'s daughter. Before. I used to make honey bread. I can\'t taste it anymore. I can\'t remember what it tasted like.',
          'She looks almost embarrassed at the admission. You tilt your head for her. Her bite is achingly gentle.',
          'Afterward, she rests her forehead against your shoulder and doesn\'t say anything at all, not until the ghostly orchestra has quietly packed up its instruments and gone.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'There\'s no invitation tonight. Gerald simply opens the gates, bows deeply, and points up the winding stairs to the highest tower.',
          'Her bedchamber is all black silk and crimson velvet, lit by a single candelabra and the blood-red moon through the window. Valeria stands at the glass with her back to you.',
          '@valeria Close the door.',
          'You do. She turns. Her gown is a sheer, dark thing that leaves very little to the imagination, and her eyes are glowing.',
          { if: 'valeria_offered', text: '@valeria:smug You offered me your throat in the ballroom. Without being asked twice. I have thought about very little else since, and I have a *castle to run.*' },
          { if: 'valeria_refused', text: '@valeria You told me no, in the ballroom. And I listened. Do you know what that did to me? Neither do I. I have been trying to work it out for days.' },
          '@valeria:smug I have decided I am going to have you, pet. All of you. And you are going to do *exactly* as I say.',
          'She crosses the room in an instant, pressing you back against the door. Her hand is at your throat — not squeezing, just resting there, possessive.',
          '@valeria ...Unless you say "sunrise." If you say that word, everything stops. Instantly. I won\'t be angry. I won\'t ask why.',
          'Her voice softens, just for that one sentence.',
          '@valeria:sad Do you understand?',
        ],
        choices: [
          { text: '"Yes, Mistress."', go: 'submit', aff: 10, flag: 'valeria_obeyed' },
          { text: '"I understand. But maybe tonight, *you* do as *I* say." [Charm check 4]', check: { stat: 'charm', dc: 4 }, pass: 'switch', fail: 'submit_after' },
          { text: '"Sunrise." (Stop, and just talk.)', go: 'sunrise', aff: 10, flag: 'valeria_sunrise' },
        ],
      },
      submit: {
        text: [
          "Something in her expression melts into a wicked, delighted smile.",
          "@valeria:smug Oh, *good.* Such good manners.",
          { if: 'valeria_knelt', text: "@valeria You knelt so prettily, that first night. As if it were a game. Let's find out how long you can keep playing." },
          "She doesn't rush. That's the cruelest part. She circles you slowly, the way a cat circles something it has already decided to keep, and trails one sharp nail along your jaw, your throat, the line of your collar. She tells you exactly what she's going to do to you. Every word is soft and filthy and deliberate. Every time you lean toward her she pulls away, laughing low in her throat.",
          "@valeria Don't move. I didn't say you could move.",
          "She unlaces your shirt herself, one tie at a time, watching your face. She binds your wrists loosely above your head with a black silk ribbon from her hair, and tests the knot with a fingertip.",
          "@valeria:sad Still with me, sweetheart?",
          "@you Yes.",
          "@valeria:smug Then *beg.*",
          "You do. She makes you say it twice. Then her mouth is at your throat, fangs grazing but never piercing, and her cold hands are everywhere at once, and the candles gutter out one by one...",
          "...",
        ],
        next: "after",
      },
      submit_after: {
        text: [
          "You try. You really do. But she simply arches one perfect eyebrow and says *kneel* in that voice, and your resolve evaporates like mist at dawn.",
          "@valeria:smug Next time, perhaps. Six hundred years of practice, pet.",
          "She sits on the edge of the bed with her legs crossed and makes you wait, watching you kneel there with your heart pounding, while she slowly peels off one long black glove, finger by finger.",
          "@valeria Come here. *Slowly.*",
          "Then she shows you, at great and thorough length, exactly what six hundred years of practice means, checking in with a murmured *still with me?* every time she takes you somewhere new...",
          "...",
        ],
        flag: 'valeria_obeyed',
        next: "after",
      },
      switch: {
        text: [
          "You catch her wrist, gently, and turn her around so *she's* the one with her back against the door.",
          "Valeria's eyes go wide. Her lips part. For one long moment the most feared woman in the Southern Vale is utterly speechless.",
          "@valeria:surprised You... no one has ever... *oh.*",
          "@you Is that a no?",
          "@valeria:blush It is *very much not* a no.",
          { if: 'valeria_led', text: "@valeria You did this in the ballroom, too. Spun me. I told myself it was a fluke. It was not a fluke, was it?" },
          "You pin both her wrists above her head with one hand. She could break your grip without trying. She doesn't. She stays exactly where you put her, trembling, and when you kiss down the cold line of her throat she makes a sound so raw it shocks you both.",
          "@valeria:blush Say it. Tell me what to do. I've never — tell me.",
          "It turns out the Countess, who has commanded everyone for six centuries, has never once been allowed to simply let go. She's a quick learner. She says *please* for the first time in a hundred years, then again, then a great many more times...",
          "...",
        ],
        aff: 15,
        flag: 'valeria_switched',
        next: "after",
      },
      sunrise: {
        text: [
          "The word hangs in the air. She lets go at once and steps back, exactly as she promised.",
          "@valeria:sad ...Very well.",
          "There's no anger in her face, only a flicker of something like fear, quickly hidden.",
          "@you I don't want to stop. I just want to know why tonight. Why now.",
          "She sits on the edge of the bed, suddenly very small in all that black silk.",
          "@valeria:sad Because the festival is coming. Because you are mortal, and you will grow old and die, and I will still be here. Because I wanted to have *something* of you before that happens.",
          { if: 'valeria_honeybread', text: "@valeria I can't remember my mother's honey bread. I told you that. I am *terrified* of not remembering you." },
          "You sit beside her and take her cold hand. After a while she leans into you, and you kiss her slowly, and it's you who lays her back on the silk.",
          "There's no commanding this time. You undress each other carefully, like unwrapping something fragile. She shivers when your warm palms slide down her bare back. She keeps whispering *you're so warm, you're so warm*, as if it's the most astonishing thing in the world. It's tender and hungry and terribly, terribly sincere...",
          "...",
        ],
        next: "after",
      },
      after: {
        text: [
          "Hours later you lie tangled in black silk, the moon low in the window. Valeria is curled against your side, one cold leg thrown over yours, idly tracing a fingertip over the faint red marks she left on your collarbone.",
          "@valeria:smug You realize I'm never letting you go now. You are *mine.* My pet. My consort. My... whatever word mortals use.",
          "@you \"Sweetheart\" is popular.",
          "@valeria:angry Absolutely not.",
          "A pause.",
          "@valeria:blush ...*Sweetheart.* Ugh. Disgusting. Say it again.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "Gerald brings you breakfast in bed on a silver tray: eggs, toast, a pot of coffee, and a single black rose. The heavy velvet curtains are drawn tight against the sun.",
          { if: 'valeria_honeybread', text: "The toast is not toast. It's honey bread, slightly burnt at the edges. Gerald won't meet your eyes. Valeria won't either. \"I gave him instructions,\" she says, to the ceiling. \"From memory. Tell me if it's wrong. Don't tell me if it's wrong.\"" },
          "@valeria:smug Don't spill crumbs on the silk. I will know. I will *always* know.",
          "Valeria is lying beside you, propped on one elbow, watching you eat with an expression she'd probably describe as bored. It isn't bored. Her hair is a wild black tangle and there's a faint flush in her pale cheeks, which you have learned means she has recently fed.",
          "@valeria:smug You talk in your sleep, you know. You said my name. Several times. In a *very* particular tone.",
          "She smiles like a cat with a mouse.",
          "@valeria Now. Tell me what you liked best. In detail. I'm writing a list.",
        ],
        choices: [
          { text: "Tell her, in detail. Watch her lose her composure.", go: "detail", aff: 6 },
          { text: "\"I liked the part where you said please.\"", go: "please", aff: 5 },
          { text: "Pull her down and kiss her instead of answering.", go: "kiss", aff: 6 },
        ],
      },
      detail: {
        text: [
          "You tell her. Slowly. In great detail. By the third item, the Countess of Castle Nocturne has pulled a pillow over her face.",
          "@valeria:blush That's — I asked for a list, not a *recitation* — oh, you wretch, you're enjoying this.",
          "@you You asked.",
          "@valeria:angry I'm *aware* I asked.",
          "She doesn't remove the pillow. But her bare foot finds your ankle under the sheets and stays there.",
        ],
        end: true,
      },
      please: {
        text: [
          "Her eyes narrow dangerously.",
          "@valeria:angry I said no such thing.",
          {
            if: 'valeria_switched',
            text: [
              "@you You said it eleven times.",
              "@valeria:blush I said it *nine* times, and I would thank you not to — Gerald, stop *smiling* — get out —",
            ],
            else: [
              "@you You said it once. Very quietly. Right before the candles went out.",
              "@valeria:blush That was a *sigh.* A sigh with consonants. Gerald, stop *smiling* — get out —",
            ],
          },
          "Gerald flees. Valeria rolls on top of you, pins you to the pillows, and informs you that tonight you'll be the one counting. You don't argue.",
        ],
        end: true,
      },
      kiss: {
        text: [
          "You set the tray aside and pull her down. She tastes of copper and dark wine. She goes still with surprise against your mouth, and then she lets you keep her there.",
          "@valeria:smug Mm. That's cheating. You're supposed to be terrified of me.",
          "@you I'll work on it.",
          "@valeria:happy See that you don't.",
          { if: 'valeria_sunrise', text: "@valeria:sad ...You can still say it, you know. The word. Any time. Even at breakfast. It isn't only for the bedroom. It's for whenever I'm too much.", else: "She tucks her cold nose into the warm curve of your neck and sighs as though she's come home." },
          "She doesn't let you leave until sunset. The breakfast goes cold. Neither of you mentions it.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'A black carriage drawn by four skeletal horses pulls up at the foot of the festival hill. Townsfolk scatter. The door opens.',
          '@valeria:smug Get in, sweetheart. I am *not* watching the stars with all these peasants.',
          'The carriage takes you to the highest balcony of Castle Nocturne, above the clouds, where the sky is so close you could touch it.',
          { if: 'valeria_jealous_defied', text: '@valeria You told me once, in this very carriage, that I don\'t own you. I\'ve thought about it every night since. I\'ve decided you\'re right. It\'s much more frightening to be *chosen.*' },
          { if: 'valeria_jealous_offered', text: 'She lifts your wrist and breathes in, the way she did in the carriage that night. Her eyes close. "Only you," she murmurs. "Still only you."' },
          'When the stars begin to fall, she takes your hand — and doesn\'t let go.',
          '@valeria:sad Six hundred years I\'ve watched this from this balcony. Alone. Every single time.',
          { if: 'valeria_defied', text: '@valeria:smug The night we met, you wouldn\'t kneel. Do you remember? I decided then that I would either kill you or keep you. I am so relieved it was the second one. The first would have been *such* a waste of a good smile.' },
          '@valeria I could make you like me, you know. Immortal. We could watch the stars fall together for a thousand years.',
        ],
        choices: [
          { text: '"Ask me again in ten years."', go: 'wait' },
          { text: '"Yes. Forever sounds about right."', go: 'turn' },
          { text: 'Bare your throat to her under the falling stars. "Not soon. Tonight. Make me yours."', if: [{ any: ['valeria_offered', 'valeria_jealous_offered'] }, { any: ['valeria_obeyed', 'valeria_knelt'] }], go: 'bride' },
          { text: '"Keep forever. Teach me your mother\'s honey bread instead."', if: ['valeria_honeybread', { any: ['valeria_switched', 'valeria_sunrise', 'valeria_refused', 'valeria_jealous_defied', 'valeria_bread_shared'] }], go: 'bakery' },
        ],
      },
      wait: {
        text: [
          '@valeria:smug Ten years. *Fine.* What are ten years? I\'ve had naps longer than that.',
          'But she\'s smiling. A real smile, bright and astonished and young.',
          '@valeria:happy Ten years, and then I\'ll ask again. And again. And again, until you say yes.',
        ],
        next: 'epilogue',
      },
      turn: {
        text: [
          'She is quiet for so long that a star has time to cross the whole sky and burn out. Then she kisses you under the falling stars, and her fangs graze your lip, and she whispers:',
          '@valeria:blush Not tonight. Tonight, I want to feel how warm you are. But soon, sweetheart. *Soon.*',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'The villagers still call her the Crimson Terror. But these days, the Crimson Terror pays fair wages, funds the orphanage ("for future minions," she insists), and hosts a midnight ball every month that has become the most exclusive event in the kingdom.',
          'You sit at her side on a second throne she had made just for you. She complains about it constantly. She has also had your name engraved on it in rubies.',
          'Gerald says he has never seen the Mistress so happy. He says it very quietly, so she won\'t hear.',
          'She hears. She gives him a raise.',
          'And every night, before the dawn, she pulls you close in that great black bed and whispers, *still mine?* — and every night, you tell her yes.',
        ],
        ending: 'valeria',
      },
      bride: {
        text: [
          'She goes absolutely still. Above you, the sky is coming apart in silver.',
          '@valeria:surprised Tonight? You understand what you\'re saying. No more sunlight. No more honey, or pheasant, or *warm.* There\'s no taking it back, sweetheart. Not even with the word.',
          '@you I understand. I want it. I want you, for as long as there is.',
          '@valeria:sad Then say "sunrise" if you change your mind. Right up until the last moment. I will stop. I will *always* stop for you.',
          { if: 'valeria_offered', text: 'You don\'t say it. You tilt your head back, the way you did in the ballroom, and she gathers you into her arms like something precious and terribly fragile.', else: 'You don\'t say it. You tilt your head back and bare your throat, the way you once bared your wrist to her in the carriage, and she gathers you into her arms like something precious and terribly fragile.' },
          'The bite is slow. It is not like the other times. It is cold, and then it is very warm, and then it is the warmest thing you have ever felt, like falling asleep in a sunbeam you will never see again. The stars wheel overhead. Her voice is in your ear the whole time, saying your name, not *pet*, your real name, over and over, as if she is writing it down.',
          'The last thing you hear with a beating heart is her whisper: *mine. Mine. And I am yours.*',
        ],
        next: 'bride_epilogue',
      },
      bride_epilogue: {
        text: [
          '*Some time later...*',
          'You wake three nights later in the great black bed with no heartbeat, an enormous appetite, and the strong conviction that everything is *very dramatic.* Valeria is sitting at your bedside. She has clearly not moved the whole time. She will deny this until the end of the world.',
          '@valeria:happy Good evening, sweetheart. Welcome to forever. Don\'t look in the mirror; it\'s upsetting the first time. Gerald, bring the *good* goblets.',
          'She teaches you everything. How to glide instead of walk. How to make a candle gutter with a look. How to say *kneel* so that a whole ballroom does. You are, it turns out, hopeless at being terrifying. You keep being nice to the villagers. You tip. You remember the names of their goats. She despairs of you loudly and often, and she has never been happier in six hundred years.',
          'The Crimson Throne gets a twin, iron and ruby, and the valley learns to fear *two* shadows on the castle balcony. Mostly they fear the paperwork. You have reformed the tax code.',
          'She still leads when you dance. Except on Thursdays. Thursdays are yours, by treaty, signed in red ink and witnessed by Sir Bertram the coat rack.',
          'And every Starfall, for centuries, the two of you stand on the highest balcony of Castle Nocturne and watch the sky come apart in silver. She doesn\'t ask *still mine?* anymore. She doesn\'t need to.',
          'She asks *again?* instead. And every time, you say yes.',
        ],
        ending: 'valeria_bride',
      },
      bakery: {
        text: [
          'She blinks at you. Of all the things she braced for, it was not that.',
          '@valeria:surprised Honey bread. I offer you *eternity*, and you want a recipe.',
          '@you You\'ve spent six hundred years trying to remember it. I don\'t want forever with you if it means you stop wanting anything. I want to help you get it back.',
          '@valeria:sad I can\'t taste it. You know I can\'t taste it.',
          '@you No. But I can. And you can smell it. And you\'ve got six hundred years of being right about everything. Between us, I think we can get it right.',
          'For a moment, the most feared woman in the Southern Vale looks at you as if you\'ve said the most unreasonable thing she has ever heard. Then she laughs, the startled laugh, and puts her face in her hands, and when she lifts it again her eyes are wet and shining under the falling stars.',
          '@valeria:happy You absurd, *impossible* — fine. *Fine.* But I am warning you. My mother was a tyrant in the kitchen. I am much worse.',
        ],
        next: 'bakery_epilogue',
      },
      bakery_epilogue: {
        text: [
          '*Some time later...*',
          'It takes forty-one tries. Valeria stands at your elbow in the castle kitchen with flour on her black silk sleeves, smelling every loaf as it comes out of the oven and pronouncing judgment like a high court. *Too much salt.* *Not enough fire.* *Honey from the wrong side of the valley, what are you, a barbarian?* Gerald eats the failures. Gerald gains a stone and a half and has never been happier.',
          'On the forty-second try, she breathes in over the cooling loaf, and goes very quiet. You take a bite. You tell her what it tastes like: crust that crackles, honey gone almost salty at the burnt edges, a soft middle like somebody\'s kitchen early in the morning.',
          '@valeria:sad ...That\'s it. That\'s her. Oh, that\'s *her.*',
          'Nocturne\'s opens in the village that winter: a narrow little bakery with a bell over the door, open from midnight until an hour before dawn. The proprietor is very tall, very pale, and extremely rude to anyone who squeezes the loaves. People queue around the block anyway. The Crimson Terror sells out every single night.',
          'She never does ask to turn you again. When Gerald finally works up the courage to ask why, she tells him that she has decided she likes you *warm.* That eternity is overrated. That she has had six hundred years, and she would rather spend the next fifty smelling bread with someone who will tell her exactly how it tastes.',
          'She is lying, a little. She still checks your pulse while you sleep. But every night, as she turns the sign on the door to *Closed*, she asks the same question, and it isn\'t *still mine?*',
          'It\'s *how does it taste?* And you tell her. Every time.',
        ],
        ending: 'valeria_bakery',
      },
    },
  },
});

/* ------------------------------------------------------------------ side event: Valeria smells someone else on you */
FL.addScene('valeria_jealous', {
  start: {
    text: [
      'You\'re crossing the square in the evening when every lamp along the street gutters out at once. A black carriage drawn by four skeletal horses rolls out of the dark and stops precisely beside you. The door swings open on its own.',
      'Inside, on red velvet, sits Countess Valeria Nocturne. She does not say hello. She leans forward, very slowly, until her nose is almost touching your collar, and *inhales.*',
      '@valeria:angry You smell of *her.*',
      '@valeria Don\'t. Don\'t tell me her name. If you tell me her name I shall have to *write it in the book*, and I have only just bought new ink.',
      '@valeria:sad Six hundred years. I have outlived empires. I have outlived *fashion.* And tonight I find myself sitting in a carriage outside a cheese shop, sniffing a mortal\'s sleeve like a jealous spaniel. Look what you have *done* to me.',
      'The carriage door clicks shut behind you. The horses do not move. Neither does she. Her eyes are glowing a very dangerous red.',
    ],
    choices: [
      { text: 'Hold out your bare wrist. "There\'s no one in here but you. Taste for yourself."', go: 'offer', flag: 'valeria_jealous_offered' },
      { text: 'Match her theatrics. Swoon, protest, declare your undying devotion. [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'soothe', fail: 'sulk' },
      { text: '"I have friends, Valeria. You don\'t own me."', go: 'defy', flag: 'valeria_jealous_defied' },
    ],
  },
  offer: {
    text: [
      'She stares at your wrist. Then at you. Then, very slowly, she takes your hand in both of hers, turns it over, and presses her cold mouth to the inside of your wrist.',
      'There\'s a tiny sting. A single bead. She is very, very careful.',
      'When she lifts her head, the red has gone out of her eyes.',
      '@valeria:blush ...Only you. Warm, and nervous, and slightly of cheese. Only *you.*',
      '@valeria:smug I knew that, of course. I was testing you. You passed. This was entirely a test.',
      'She seals the tiny wound with a kiss and keeps hold of your hand for the whole ride home. When the carriage stops, she doesn\'t let go for another minute. Then another.',
    ],
    affTo: { valeria: 6 },
    end: true,
  },
  soothe: {
    text: [
      'You clutch your chest. You stagger back against the velvet. You declare, at volume, that there is only one woman in all the Southern Vale who could make you wear black, and that the other scent is merely the *tragic residue of daylight.*',
      '@you I would sooner kneel in a church than look at another! I would sooner eat *garlic!*',
      'Valeria stares at you. Her mouth twitches. She fights it valiantly, for six hundred years\' worth of dignity, and loses.',
      '@valeria:happy Oh, that\'s *dreadful.* That was the worst speech I\'ve heard since the Duke of Mirebridge proposed to me in rhyming couplets.',
      '@valeria:smug Do it again. The garlic part. With more feeling.',
      'You do. By the end of the ride she is laughing so hard that the skeletal horses keep looking back, alarmed.',
    ],
    affTo: { valeria: 5 },
    flag: 'valeria_jealous_soothed',
    end: true,
  },
  sulk: {
    text: [
      'You throw yourself into a dramatic swoon across the velvet seat — and misjudge it, and hit your head on the window, and say "ow" in a voice that is not at all romantic.',
      '@valeria:angry Is this a *joke* to you? I am having a crisis of the heart, and you are doing *slapstick?*',
      'She raps on the roof. The carriage lurches into motion, rounds the corner, and stops. The door opens. You are invited, very firmly, out of it.',
      'You land in a puddle. The carriage thunders off into the night.',
      'The next morning, a bat drops a black envelope onto your pillow. Inside, in sharp crimson script: *You are forgiven. Partially. Do not test it. — V.* Underneath, smaller, as though added later: *The puddle was not intentional.*',
    ],
    affTo: { valeria: -8 },
    flag: 'valeria_jealous_sulked',
    end: true,
  },
  defy: {
    text: [
      'The carriage goes so quiet you can hear the horses not breathing.',
      '@valeria:surprised I beg your *pardon?*',
      '@you I have friends. I have people I care about. I\'m not something you keep on a shelf next to Sir Bertram. If I\'m here, it\'s because I chose to be. Every time.',
      'She opens her mouth. Closes it. Opens it again. For a moment you think she might actually throw you out of the carriage. Then she sits back against the velvet, very slowly, and looks at you as though you are a book she thought she\'d already read.',
      '@valeria:sad ...Chose. Every time.',
      '@valeria:angry I hate that. I hate it *enormously.* It is far more frightening than owning you would be. Get out. No — stay. Stay, and don\'t speak, and let me be furious in peace.',
      'She is quiet the whole ride. But halfway there, without looking, her hand finds yours on the seat between you, and holds on.',
    ],
    affTo: { valeria: -3 },
    end: true,
  },
});

FL.addEvent({
  id: 'valeria_jealous',
  owner: 'valeria',
  scene: 'valeria_jealous',
  slot: 2,
  priority: 10,
  cond: function (s) {
    const v = s.chars.valeria;
    if (!v || v.stage < 2 || v.stage > 3) return false;
    if (s.day >= FL.CONFIG.maxDay) return false;
    return FL.charOrder.some(function (id) { return id !== 'valeria' && s.chars[id].stage >= 3; });
  },
});

FL.sceneCast = FL.sceneCast || {};
FL.sceneCast.valeria_jealous = ['valeria'];
