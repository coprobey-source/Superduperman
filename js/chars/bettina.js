FL.addCharacter({
  id: 'bettina',
  name: 'Madame Bettina Rosewater',
  short: 'Bettina',
  trope: 'Teasing "Ara-Ara" Tavern Owner',
  color: '#e0607e',
  favStat: 'charm',
  endingTitle: 'Last Call, First Love',
  teaser: 'The tavern\'s owner leans on the bar, chin in hand, watching you with a slow, knowing smile.',
  blurb: 'Owner of the Tipsy Wyvern for twenty years and a widow for eight. Warm, voluptuous, unflappable and terribly fond of making young adventurers blush. She mothers everyone in town and flirts with all of them. She hasn\'t let anyone truly close since her husband died. She\'s very good at making sure nobody notices.',
  schedule: ['market', 'tavern', 'tavern'],
  gifts: { love: ['perfume'], like: ['wine', 'roses', 'chocolate', 'novel'], hate: ['ale'] },
  giftLines: {
    love: ['She uncorks it and breathes in, eyes fluttering closed.', '@bettina Oh, *my.* Nightjasmine and amber. Harold used to buy me this, every anniversary. Nobody\'s bought it for me since.', 'She dabs a little on her wrist, then holds it out to you.', '@bettina Well? Go on, sweetie. Tell me what you think.'],
    like: '@bettina My, my. Bringing gifts to an old woman? You\'re going to make me blush, dear. ...Well, almost.',
    neutral: '@bettina Aren\'t you sweet. I\'ll put it behind the bar with all my other little treasures.',
    hate: ['She laughs, long and loud.', '@bettina Ale? You\'re giving *ale* to the woman who owns a *tavern?* Sweetie, I\'ve been drowning in the stuff for twenty years. I can\'t stand the taste.'],
  },
  talk: [
    ['@bettina Ara, ara. Look who\'s back. Sit down, sweetie, you look starved. Stew\'s on the house. Don\'t argue. Arguing with me is very bad for your health.'],
    ['@bettina You\'ve got a little something on your cheek, dear. No — other side. Here, let me.', 'She wipes it off with her thumb, slowly, smiling the whole time. There was nothing on your cheek.'],
    ['@bettina Twenty years I\'ve run this tavern. I\'ve seen knights, kings, three dragons, and one very confused octopus. You learn to read people. You, for instance, are blushing.'],
    ['@bettina My Harold was a terrible cook and a worse singer. He proposed with a ring he won in a card game. Best man I ever knew.', 'She polishes a glass a little harder than necessary.'],
    ['@bettina That little blonde barmaid of mine is a princess, you know. Don\'t tell her I know. It\'s so much fun watching her try to say "guv\'nor."'],
    ['@bettina Young people always think the best years are behind folks my age. Silly things. I\'m just getting started, dear.'],
  ],
  afterTalk: [
    ["@bettina Ara, ara. You've got that look again, sweetie. The one where you're thinking about upstairs. Close the bar with me tonight and find out if I'm thinking the same thing."],
    ["She wipes a spot off your cheek with her thumb, slowly. There's nothing on your cheek. There never is.", "@bettina Habit. I like touching you. I've stopped pretending I need a reason."],
    ["@bettina I put a new drink on the menu. It's called \"The Upstairs.\" It's sweet, it's strong, and it ends the night *very* well. People keep ordering it and looking at you."],
    ["@bettina I went to Harold's grave again. Told him you snore. He'd have found that very funny. He snored like a bear."],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'You lean on the bar of the Tipsy Wyvern and try to catch someone\'s attention. Someone catches yours instead.',
          'She\'s in her forties, perhaps — and wears it like a crown. Dark auburn hair piled loosely on her head, a few curls escaping. A low-cut emerald bodice. Warm brown eyes with laughter lines at the corners. She leans across the bar toward you, chin propped on one hand, and smiles.',
          '@bettina Well, *hello.* A new face. And such a pretty one, too. What can I get you, sweetie?',
          'Her voice is honey and smoke. Several regulars at the bar exchange knowing grins.',
        ],
        aff: 10,
        choices: [
          { text: '"Whatever you recommend."', go: 'recommend' },
          { text: 'Lean in and match her smile. "Surprise me." [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'match', fail: 'match_fail' },
          { text: 'Go bright red and mumble "...an ale, please."', go: 'blush' },
        ],
      },
      recommend: {
        text: [
          '@bettina Oh, a trusting one. I like that.',
          'She pours you something amber and spiced from a bottle under the bar.',
          '@bettina My own recipe. Harold called it "Bettina\'s Ruin." Sip it slowly, dear. It sneaks up on you.',
          'It does. It\'s wonderful.',
        ],
        aff: 4,
        next: 'name',
      },
      match: {
        text: [
          '@you Surprise me.',
          'One of her eyebrows lifts. Her smile widens slowly, like a cat who\'s just found a particularly interesting mouse.',
          '@bettina Ara, ara. Bold, aren\'t you? Most of the young things who come in here turn into tomatoes the moment I look at them.',
          'She pours you something deep red and glittering, and slides it over so your fingers brush.',
          '@bettina On the house. For being *interesting.*',
        ],
        aff: 8,
        next: 'name',
      },
      match_fail: {
        text: [
          'You lean in, try to match her smile, slip on the bar\'s wet surface, and nearly faceplant into a bowl of peanuts.',
          '@bettina Oh, *sweetie.*',
          'She\'s laughing, but not unkindly. She pushes a glass toward you.',
          '@bettina Here. For the bravery. And the peanuts.',
        ],
        aff: 3,
        next: 'name',
      },
      blush: {
        text: [
          'She laughs, a rich, warm sound that fills the whole room.',
          '@bettina Oh, you\'re *adorable.* I\'m going to keep you.',
          'She pours your ale and leaves a little honey cake beside it, winking.',
          '@bettina For the blush. It\'s my favorite kind of tip.',
        ],
        aff: 5,
        next: 'name',
      },
      name: {
        text: [
          '@bettina I\'m Bettina. Madame Bettina Rosewater, if you\'re being proper, but nobody ever is in here. I own this den of sin.',
          '@you {name}.',
          '@bettina {name}. Lovely. Well, {name}, you\'re welcome at my bar any time. Come for the ale, stay for the company.',
          'She reaches over and tucks a stray lock of hair behind your ear.',
          '@bettina Mostly the company.',
          'And then she sweeps off down the bar to scold a dwarf for standing on a table, leaving you feeling distinctly warm and not entirely because of the drink.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'It\'s closing time. The last patrons have stumbled out. Bettina locks the door, turns the sign, and pours two glasses.',
          '@bettina Stay a while, sweetie. Keep an old woman company. I\'ll teach you something.',
          'She sets out bottles: honey liqueur, firebrandy, elderflower cordial, a dusty bottle with no label.',
          '@bettina Every barkeep worth her salt has a signature drink. Harold\'s was terrible — he put pickled onion in everything. Let\'s see what yours would be.',
        ],
        choices: [
          { text: 'Mix something bold and smoky.', go: 'bold', aff: 6 },
          { text: 'Mix something sweet and gentle.', go: 'sweet', aff: 6 },
          { text: 'Ask her to guide your hands. [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'guide', fail: 'guide_fail' },
        ],
      },
      bold: {
        text: [
          'You mix firebrandy with the mystery bottle and a twist of burnt orange. She takes a sip and coughs. Then she laughs.',
          '@bettina Oh, that\'s *dangerous.* That\'s the kind of drink that starts duels. I love it.',
          '@bettina We\'ll call it "The Newcomer." It looks innocent and kicks like a mule.',
        ],
        next: 'harold',
      },
      sweet: {
        text: [
          'You mix honey liqueur with elderflower and a splash of cream. She sips it thoughtfully.',
          '@bettina Mm. Soft. Warm. A little shy at first, then it lingers.',
          'She looks at you over the rim of her glass.',
          '@bettina Rather like you, sweetie.',
        ],
        next: 'harold',
      },
      guide: {
        text: [
          'She comes around the bar and stands behind you, her hands over yours on the shaker. She smells of cinnamon and nightjasmine. Her voice is low in your ear.',
          '@bettina Gently. Not too fast. Feel the rhythm of it. There. *There.* Just like that.',
          'You are not entirely sure you\'re still talking about drinks.',
          'The cocktail is perfect. She takes a long, slow sip without stepping back.',
          '@bettina Mm. You\'re a natural, dear.',
        ],
        aff: 9,
        next: 'harold',
      },
      guide_fail: {
        text: [
          'She comes around behind you and guides your hands. You become so flustered that you shake the shaker so hard the lid flies off and coats you both in honey liqueur.',
          'There\'s a stunned silence. Then she laughs so hard she has to hold onto the bar.',
          '@bettina Oh, sweetie! Oh, *look at us!* Harold would have *loved* you.',
        ],
        aff: 5,
        next: 'harold',
      },
      harold: {
        text: [
          'Later, the two of you sit on the bar itself, legs dangling, finishing your drinks by the light of the dying fire.',
          '@bettina Harold built this bar. With his own hands. Terrible carpenter. It wobbles on the left. I\'ve never had it fixed.',
          '@bettina Eight years now. People keep telling me to "move on." As if he were a town I was passing through.',
          'She swirls her glass and smiles, but it doesn\'t reach her eyes.',
        ],
        choices: [
          { text: '"Tell me about him."', go: 'tell', aff: 8 },
          { text: 'Just sit with her. Quietly.', go: 'quiet', aff: 7 },
        ],
      },
      tell: {
        text: [
          'So she does. The card game where he won the ring. The time he tried to fight a troll and ended up buying it a drink. The way he sang off-key every morning while he swept the floor. She laughs, and then she cries a little, and then she laughs again.',
          '@bettina Nobody\'s asked me about him in years. They\'re all too afraid I\'ll get sad.',
          '@bettina Thank you, dear. It\'s nice to remember him *out loud.*',
        ],
        end: true,
      },
      quiet: {
        text: [
          'You don\'t say anything. You just sit there beside her, shoulder to shoulder, while the fire crackles down.',
          'After a while, she leans her head on your shoulder.',
          '@bettina ...You\'re a good listener, {name}. Even when nobody\'s talking.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'The Tipsy Wyvern is packed and rowdy. Then the door slams open, and a gang of mercenaries swaggers in — big, drunk, armored, and looking for trouble.',
          'Their leader slams his fist on the bar. "Free drinks for the Iron Hounds, woman. Or we start breaking things."',
          'The tavern goes quiet. Bettina doesn\'t even look up from the glass she\'s polishing.',
          '@bettina Sweetie, I\'ve been throwing men like you out of this tavern since before you lost your milk teeth. Pay or leave.',
          'He reaches across the bar toward her.',
        ],
        choices: [
          { text: 'Step between them and talk him down. [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'talk', fail: 'pan' },
          { text: 'Grab his wrist. "Touch her and you\'ll regret it."', go: 'pan', aff: 7 },
        ],
      },
      talk: {
        text: [
          'You slide between them with an easy smile and lean on the bar.',
          '@you Friend, you don\'t want to do this. See that woman? She once knocked out an ogre with a soup ladle. The ogre still sends her a fruit basket every year. Out of *fear.*',
          '@you Also — look behind you.',
          'He turns. Every regular in the tavern — dwarves, adventurers, Brakka the orc, a knight in full plate — is standing, silently, glaring at him.',
          'The Iron Hounds leave very quickly. They even pay.',
          'Bettina looks at you over her glass, and for once, her smile seems genuinely surprised.',
        ],
        aff: 10,
        next: 'after',
      },
      pan: {
        text: [
          'You grab for his wrist — but before you can do anything heroic, there\'s a resounding *BONG*.',
          'Bettina has produced a cast-iron frying pan from under the bar and introduced it to the side of his head. He crumples like a wet sack. The tavern erupts into cheers.',
          '@bettina Somebody drag this one out by his ankles, please. Thank you, Gruk.',
          'Then she turns to you, frying pan still in hand, eyes bright.',
          '@bettina You were going to fight a man three times your size. For me.',
          '@bettina That was very foolish, sweetie. And very, *very* sweet.',
        ],
        next: 'after',
      },
      after: {
        text: [
          'After closing, you help her clean up. When the last chair is upright and the last glass is washed, she sets down her rag and doesn\'t pick it up again.',
          '@bettina I flirt with everyone, you know. It\'s a barkeep\'s armor. Make everyone feel special, and no one ever gets close enough to see the cracks.',
          '@bettina But you keep getting past it. You keep staying after closing. You keep *seeing* me. I don\'t quite know what to do with that.',
          'For the first time since you met her, Bettina Rosewater looks uncertain.',
        ],
        choices: [
          { text: '"You don\'t have to do anything with it. Just let me stay."', go: 'stay', aff: 10 },
          { text: 'Tuck a loose curl behind *her* ear, the way she does to you. [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'curl', fail: 'stay' },
        ],
      },
      stay: {
        text: [
          'She looks at you for a long moment. Then she laughs softly and shakes her head.',
          '@bettina Oh, I\'m in trouble. I\'m in *such* trouble.',
          'She cups your face in both hands and kisses your forehead, lingering.',
          '@bettina Go home, sweetie. Before I do something I\'ve been *very* good about not doing for eight years.',
          'You go. You look back once. She\'s still standing at the bar, fingertips pressed to her own lips.',
        ],
        end: true,
      },
      curl: {
        text: [
          'You reach up and gently tuck one of her escaping auburn curls behind her ear.',
          'She goes perfectly still. Her lips part. Her cheeks — for the first time since you\'ve known her — flush pink.',
          '@bettina ...Oh, you *wicked* thing. Using my own tricks against me.',
          '@you Is it working?',
          '@bettina Sweetie, I am forty-four years old and you have just made me *blush.* What do you think?',
          'She kisses you — slow and warm and devastatingly sure — and then pulls away before you can catch your breath.',
          '@bettina Good night, {name}. Come back tomorrow.',
        ],
        aff: 12,
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'The tavern is closed. The fire is low. Bettina is waiting at the foot of the stairs, wearing a deep red silk robe and holding a single candle. Her hair is down — you\'ve never seen it down. It falls past her shoulders in heavy auburn waves.',
          '@bettina I\'ve been thinking about this for weeks, sweetie. About whether it\'s foolish. A woman my age. Someone like you.',
          '@bettina And then I decided I\'m too old to waste time being foolish about *not* being foolish.',
          'She holds out her hand.',
          '@bettina Come upstairs with me.',
        ],
        choices: [
          { text: 'Take her hand.', go: 'hand', aff: 10 },
          { text: '"Only if you let me take care of *you* for once." [Charm check 4]', check: { stat: 'charm', dc: 4 }, pass: 'care', fail: 'hand' },
        ],
      },
      hand: {
        text: [
          'Her hand is warm. She leads you up the creaking stairs, past Harold\'s portrait on the landing — she touches the frame lightly as she passes — and into her room.',
        ],
        next: 'night',
      },
      care: {
        text: [
          'She stops. She stares at you. For a moment, all the teasing confidence falls away, and she looks like someone who\'s been carrying something heavy for a very long time.',
          '@bettina ...No one\'s said that to me in eight years.',
          '@bettina Everyone needs Bettina. Nobody ever thinks Bettina might need anything.',
          'She lets you lead her up the stairs. When you reach her room, she sits on the edge of the bed and lets you take the pins from her hair one by one, eyes closed.',
        ],
        aff: 14,
        next: 'night',
      },
      night: {
        text: [
          "She leads you into her room and closes the door behind you. For a moment she just looks at you, leaning back against the door, a slow, warm, knowing smile spreading across her face.",
          "@bettina Twenty years I've watched young things blush across my bar. Do you know what I've always wanted?",
          "@you What?",
          "@bettina To see how far down the blush goes.",
          "She takes her time finding out. She unbuttons your shirt one button at a time, kissing each new inch, murmuring *mm* and *oh, sweetie* and *look at you* in that honey-and-smoke voice until you can't think straight. She takes your hands and places them exactly where she wants them. She shows you how she likes to be touched, patiently, with the confidence of a woman who has nothing left to prove and no intention of hurrying.",
          "@bettina Slower. *There.* Oh, you're a quick study. I like that. I like that very much.",
          "Then the red silk robe slides off her shoulders and pools on the floor. Somewhere in the middle of it all, when you kiss her very gently below the ear, her confidence finally cracks. Her breath catches and her fingers tighten in your hair. The great flirt of the Tipsy Wyvern, who has made a thousand adventurers blush, goes pink all the way down herself.",
          "@bettina Oh. Oh, *my.* I'd — I'd forgotten it could be like this.",
          "She doesn't let you be careful with her for long. She pulls you down onto the bed with a low, delighted laugh, and the old frame creaks and creaks...",
          "...",
          "Morning comes slow and golden through the window. She's lying with her head on your shoulder, tracing lazy circles on your chest.",
          "@bettina Ara, ara. Look at the state of you. I've ruined you for anyone your own age.",
          "@you Completely.",
          "@bettina *Good.*",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You come downstairs to find the Tipsy Wyvern's morning regulars all very, very interested in their porridge. Nobody looks up. Several people are smirking.",
          "Bettina is behind the bar, humming, hair loose around her shoulders for the first time anyone can remember. She slides a plate of eggs, bacon and honey cakes in front of you, and a mug of coffee with a little heart drawn in the foam.",
          "@bettina On the house, sweetie. Eat up. You'll need your strength.",
          "Old Gruk at the end of the bar snorts into his tankard. Aura, wiping tables, drops a whole tray of mugs.",
          "@bettina Oh, don't mind them. The walls in this place are *dreadfully* thin. Half the street knows. The other half will know by noon.",
          "She leans across the bar, chin in hand, smiling.",
          "@bettina Are you going to be embarrassed about it, or are you going to kiss me good morning in front of all these lovely people?",
        ],
        choices: [
          { text: "Lean across the bar and kiss her good morning. Thoroughly.", go: "kiss", aff: 6 },
          { text: "Go bright red and hide behind your coffee.", go: "blush", aff: 5 },
          { text: "\"Sorry, everyone. I'll try to be quieter.\"", go: "sorry", aff: 5 },
        ],
      },
      kiss: {
        text: [
          "You lean across the bar and kiss her, long and slow, in front of everyone. The whole tavern erupts in cheers. Somebody bangs a tankard. Gruk wolf-whistles.",
          "When you pull back, Bettina's cheeks are pink. Bettina's cheeks are *never* pink.",
          "@bettina ...Well. That'll give them something to talk about.",
          "She's smiling all day. Customers get free refills. Nobody knows why, but everybody knows why.",
        ],
        end: true,
      },
      blush: {
        text: [
          "You hide behind your coffee. Bettina laughs, rich and delighted.",
          "@bettina Oh, there it is. My favorite tip. Look, everyone! It goes all the way down. I checked.",
          "The tavern howls. You want to die. She leans over and kisses the top of your head, very softly.",
          "@bettina I'm teasing, sweetie. Mostly.",
        ],
        end: true,
      },
      sorry: {
        text: [
          "The regulars burst out laughing. Gruk raises his tankard.",
          "\"Don't you dare, lad,\" he says. \"First time in eight years she's sung while she sweeps.\"",
          "Bettina goes very quiet. She looks at the old dwarf for a long moment, then at you. Her eyes are a little bright.",
          "@bettina ...Was I singing?",
          "Everyone nods.",
          "@bettina Well. Fancy that.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Bettina closes the Tipsy Wyvern for Starfall — the first time she\'s closed it for anything in twenty years. The regulars are scandalized. She doesn\'t care.',
          'She climbs the festival hill on your arm in an emerald gown, her hair loose, a basket of food and a bottle of Bettina\'s Ruin under her other arm.',
          '@bettina Harold and I used to come up here every year. I haven\'t been back since he passed.',
          'She spreads a blanket over the grass and pulls you down beside her.',
          '@bettina I wanted my first time back to be with you, sweetie.',
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'The stars begin to fall. She watches them with her head on your shoulder, her hand laced with yours.',
          '@bettina The legend says the stars bind you forever. I already had one forever. I didn\'t think I\'d get another.',
          '@bettina But here you are. Ruining all my plans to grow old gracefully.',
          'She laughs, turns, and kisses you — a long, slow, unhurried kiss, the kind that has nowhere else to be — as a thousand stars streak across the sky.',
          '@bettina Ara, ara. I think I\'m in love with you, {name}. How *inconvenient.*',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'The Tipsy Wyvern gets a new sign. It reads, in fresh gold paint: *THE TIPSY WYVERN — Proprietors: Bettina Rosewater & {name}.* Below it, smaller: *(Ask about our signature cocktail, "The Newcomer.")*',
          'You run the bar together. She still flirts with every customer. They still blush. But at the end of every night, when the doors are locked and the chairs are up, she pours two glasses and sits on the bar with you, legs dangling, and tells you about her day.',
          'The bar still wobbles on the left. Neither of you ever fixes it.',
          'Harold\'s portrait still hangs on the landing. Next to it now hangs another: you and Bettina on the festival hill, painted by a very excitable traveling artist.',
          'She says Harold would have liked you. She says it often. She says it like she means it — because she does.',
        ],
        ending: 'bettina',
      },
    },
  },
});
