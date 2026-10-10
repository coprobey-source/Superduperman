FL.addCharacter({
  id: 'bettina',
  name: 'Madame Bettina Rosewater',
  short: 'Bettina',
  trope: 'Teasing "Ara-Ara" Tavern Owner',
  color: '#e0607e',
  favStat: 'charm',
  endingTitle: 'Last Call, First Love',
  endings: { bettina_ruin: 'Bettina\'s Ruin', bettina_wander: 'Closing Time' },
  teaser: 'The tavern\'s owner leans on the bar, chin in hand, watching you with a slow, knowing smile.',
  blurb: 'Owner of the Tipsy Wyvern for twenty years and a widow for eight. Warm, voluptuous, unflappable and terribly fond of making young adventurers blush. She mothers everyone in town and flirts with all of them. She hasn\'t let anyone truly close since her husband died. She\'s very good at making sure nobody notices.',
  schedule: ['market', 'tavern', 'tavern'],
  gifts: { love: ['perfume'], like: ['wine', 'roses', 'chocolate', 'novel', 'salts'], hate: ['ale'] },
  giftLines: {
    love: ['@bettina:blush Oh, sweetie. You\'ve been *paying attention.* That\'s a dangerous habit in a young thing. I may have to keep you.'],
    like: '@bettina:smug My, my. Bringing gifts to an old woman? You\'re going to make me blush, dear. ...Well, almost.',
    neutral: '@bettina:happy Aren\'t you sweet. I\'ll put it behind the bar with all my other little treasures.',
    hate: ['She laughs, long and loud.', '@bettina:smug Ale? You\'re giving *ale* to the woman who owns a *tavern?* Sweetie, I\'ve been drowning in the stuff for twenty years. I can\'t stand the taste.'],
    special: {
      perfume: ['She uncorks it and breathes in, eyes fluttering closed.', '@bettina:blush Oh, *my.* Nightjasmine and amber. Harold used to buy me this, every anniversary. Nobody\'s bought it for me since.', 'She dabs a little on her wrist, then holds it out to you.', '@bettina:smug Well? Go on, sweetie. Tell me what you think.'],
      novel: ["@bettina:smug *The Duke's Forbidden Passion, Volume Nine.* Oh, you wicked thing. Who do you think has been lending volumes one through eight to half the women on Market Street?", "@bettina:happy I'll read it first, then Aura, then the fishmonger's wife. By Thursday the whole street will be walking funny. Thank you, dear."],
      salts: ["@bettina:surprised Bath salts. For *me?* Not for the tavern, not for the guest rooms — for me?", "@bettina:sad Twenty years on my feet behind that bar, sweetie. My feet have opinions. Loud ones.", "@bettina:blush ...I'm going to have a bath tonight. A long one. You may be *invited* to hear about it afterwards."],
      roses: ["@bettina:happy Roses! How shamelessly traditional.", "@bettina Harold never bought me roses. He said they were \"showing off.\" He bought carnations, from the woman by the well, and pretended he'd grown them. He couldn't grow mould on bread.", "@bettina:blush I like showing off. Put them in water, sweetie. On the bar, where everyone can see."],
      fork: ["She holds the fork up to the light, turning it slowly, eyebrow climbing.", "@bettina:smug I own four hundred and twelve forks, sweetie. I count them every night. I'm always short by about thirty.", "@bettina:happy This is the first one anybody's ever *given* back. I'm going to frame it. Over the till. As a lesson to the others."],
    },
    repeat: "@bettina:smug Another one, dear? You're sweet. But you've found something that works and now you're too frightened to try anything else. I know that look. Harold bought me the same scarf eleven years running.",
  },
  talk: [
    ['@bettina:happy Ara, ara. Look who\'s back. Sit down, sweetie, you look starved. Stew\'s on the house. Don\'t argue. Arguing with me is very bad for your health.'],
    ['@bettina:smug You\'ve got a little something on your cheek, dear. No — other side. Here, let me.', 'She wipes it off with her thumb, slowly, smiling the whole time. There was nothing on your cheek.'],
    ['@bettina Twenty years I\'ve run this tavern. I\'ve seen knights, kings, three dragons, and one very confused octopus. You learn to read people. You, for instance, are blushing.'],
    ['@bettina:sad My Harold was a terrible cook and a worse singer. He proposed with a ring he won in a card game. Best man I ever knew.', 'She polishes a glass a little harder than necessary.'],
    ['@bettina:smug That little blonde barmaid of mine is a princess, you know. Don\'t tell her I know. It\'s so much fun watching her try to say "guv\'nor."'],
    ['@bettina:happy Young people always think the best years are behind folks my age. Silly things. I\'m just getting started, dear.'],
    ["She slides a bowl of stew in front of you before you've said a word.", "@bettina You skipped lunch. Don't lie, sweetie, I can see it in your shoulders. You learn to read shoulders in this trade. Yours say *I had one sad apple at noon.*"],
    ["@bettina:sad Some nights I still set out two glasses at closing. Habit. I pour one, and look at the other, and laugh at myself.", "@bettina:smug Then I drink the second one too. Waste not."],
    ["@bettina Gossip's free at my bar. Ale costs money. That's why everyone in Clichéton knows everything and nobody can afford to do anything about it."],
    { if: 'bettina_blushed', lines: ["@bettina:smug Oh, look. My favourite tip just walked in. I told the regulars you tip in blushes. Now they've all started trying it.", "@bettina:surprised Gruk tried this morning. It was *alarming.* I gave him the ale for free just to make it stop."] },
    { if: 'bettina_pan', lines: ["@bettina:smug I had the frying pan engraved. *To the Iron Hounds, with regards.* It hangs over the bar now. Nobody's started a fight in a fortnight.", "@bettina:blush You'd have fought him, you know. With your little fists. I think about that more often than a sensible woman should."] },
    { if: 'bettina_newcomer', lines: ["@bettina:smug I put \"The Newcomer\" on the menu. Three dwarves ordered it last night. One of them proposed to the coat stand. Your drink is a *menace,* dear. I'm so proud."] },
    { if: 'bettina_sweetheart', lines: ["@bettina:happy I put \"The Sweetheart\" on the menu. Every time someone orders it I think of you and serve it with a wink.", "@bettina:smug Half my customers think I'm flirting with them. All my customers think I'm flirting with them. As usual."] },
    { if: { stage: 3 }, lines: ["@bettina:blush I caught myself fixing my hair before you walked in. *Twice.* A woman my age, primping like a debutante at her first ball.", "@bettina:smug You ought to be ashamed of yourself, sweetie. ...Don't be."] },
  ],
  afterTalk: [
    ["@bettina:smug Ara, ara. You've got that look again, sweetie. The one where you're thinking about upstairs. Close the bar with me tonight and find out if I'm thinking the same thing."],
    ["She wipes a spot off your cheek with her thumb, slowly. There's nothing on your cheek. There never is.", "@bettina:blush Habit. I like touching you. I've stopped pretending I need a reason."],
    ["@bettina:smug I put a new drink on the menu. It's called \"The Upstairs.\" It's sweet, it's strong, and it ends the night *very* well. People keep ordering it and looking at you."],
    ["@bettina:happy I went to Harold's grave again. Told him you snore. He'd have found that very funny. He snored like a bear."],
    ["@bettina:smug You have your own stool now. Third from the left, by the wobble. Anyone else sits on it, I serve them Harold's pickled-onion cocktail. It clears the stool *very* quickly."],
    { if: 'bettina_kissed', lines: ["@bettina:smug Ever since you kissed me across the bar in front of the whole morning crowd, every courting couple in town has tried it.", "@bettina:happy I've had to wipe the bar down four times before noon. I'm thinking of charging. A copper a kiss. I'd retire by spring."] },
    { if: 'bettina_care', lines: ["@bettina:blush You keep doing it, you know. Taking care of me. Rubbing my feet after closing. Bringing *me* the stew, in my own tavern.", "@bettina:sad I don't know where to put my hands, sweetie. I'm so used to being the one holding the ladle.", "@bettina:happy ...I'm learning. Slowly. You'll have to keep at it."] },
    { if: 'bettina_singing', lines: ["@bettina:happy I caught myself singing again this morning. Harold's old sweeping song. Wildly off-key. Aura joined in, and she's worse.", "@bettina We sounded like two cats in a sack. Best morning I've had in eight years."] },
    { if: 'bettina_date_dinner', lines: ["@bettina:blush I keep thinking about that dinner. Sitting in my own booth like a customer. I'd never seen the room from that side.", "@bettina:smug It's lovelier than I realised. Or perhaps that was just the company. I'll let you decide which."] },
    { if: 'bettina_sea', lines: ["@bettina I found Harold's old map in the cellar. The one with the coast on it. He'd circled a little town called Gullwater with *\"someday\"* written beside it.", "@bettina:blush You promised me a boat, sweetie. On the pier. I'm a businesswoman. I *collect* on promises."] },
  ],
  dateFav: 'dinner',
  dates: {
    dinner: {
      start: {
        text: [
          "You book the corner booth at the Tipsy Wyvern. Bettina looks at the reservation, looks at you, and laughs so hard she has to sit down. Which, as it turns out, is the point.",
          "@bettina:surprised You're taking me to dinner. At my *own tavern.* In my own booth. I have never once sat in this booth, sweetie. Twenty years. It's where the *customers* go.",
          "She sits. She immediately reaches out to wipe a ring off the table with her sleeve. She straightens the candle. She glares at a passing potboy for carrying a tray wrong.",
          "Aura arrives to take your order, curtsies, drops her pencil, and says \"What'll it be, Madame?\" in a voice of pure terror.",
        ],
        choices: [
          { text: "Take the cloth out of her hand and hold her hand instead.", go: 'hand', aff: 5 },
          { text: "\"Two glasses of Bettina's Ruin, please. The real bottle. From under the bar.\"", go: 'ruin', aff: 4 },
          { text: "Let her go and sort out the kitchen. Just for a minute.", go: 'kitchen', aff: 1 },
        ],
      },
      hand: {
        text: [
          "You reach over, take the rag out of her fingers, set it aside, and lace your fingers through hers on the tabletop.",
          "@bettina:blush ...Oh, that's *cheating.*",
          "She doesn't let go. For the rest of the meal she eats one-handed, which is a skill she has clearly practised on a thousand busy nights, and does not once look at the potboy.",
        ],
        next: 'end',
      },
      ruin: {
        text: [
          "@bettina:smug Ordering my own drink, at my own bar, in front of my own staff. Bold. Cheeky. *Correct.*",
          "Aura comes back with the dusty bottle held in both hands like a holy relic. She pours. Most of it goes in the glasses.",
          "@bettina:happy Harold named it on our first anniversary. He said it was the only thing in the world as dangerous as me.",
          "@bettina:blush He was wrong, you know. There's at least one more thing. It's sitting across from me, ordering off the secret menu.",
        ],
        next: 'end',
      },
      kitchen: {
        text: [
          "She's out of the booth before you finish the sentence. There is shouting from the kitchen. There is a clang. Someone says \"Yes, Madame\" eleven times in a row.",
          "She comes back eventually, flushed and smelling of onions, and sits down with a sigh.",
          "@bettina:sad Sorry, sweetie. You do a sweet thing for me and I run off to scold a pot of stew. Old habits. You'll have to be firmer with me next time.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "By the end of the night she's leaning back against the booth with her shoes off under the table, watching her own tavern as though it were somebody else's, and smiling at it.",
          { if: { stage: 4 }, text: "@bettina:smug Now. The customers in this booth usually get a room upstairs, I'm told. Shall I see if there's one free? ...Oh, look. There is. Fancy that. It's mine.", else: "@bettina:happy I'll say this for you, dear. You're the first person who ever made me feel like a guest in my own house. I didn't know I'd been wanting that." },
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          "Bettina arrives at the Moonlit Gardens in dark green velvet with her hair up and a fan she has no intention of using for its intended purpose. Within three steps of the gate, a baron sees her and dives behind a hedge.",
          "@bettina:smug Ara, ara. Lord Pettigrew. He drank at my bar for six years before his uncle died and left him a title. He still owes me fourteen crowns. I'll let him keep hiding. It's good for his knees.",
          "She takes your arm and strolls you down the rose walk, nodding graciously to lords and ladies who all, without exception, go a little pale.",
          "@bettina Half these nobles used to be *somebody's* regulars. I know who cried into their ale, who sang, and who proposed to my coat stand. Pick a couple, sweetie. I'll tell you their secret.",
        ],
        choices: [
          { text: "\"Them. The two by the sundial pretending not to know each other.\" [Wits check 2]", check: { stat: 'wits', dc: 2 }, pass: 'secret', fail: 'secret_fail' },
          { text: "\"I'd rather hear one of yours.\"", go: 'hers', aff: 5 },
          { text: "Pick her a rose from the hedge.", go: 'rose', aff: 4 },
        ],
      },
      secret: {
        text: [
          "@you Them. He keeps checking his pocket. She's wearing his cloak pin. And they both just bowed to each other a little too formally.",
          "@bettina:surprised Oh, you're *good.* That's Lady Thistlewood and her husband's fencing master. Every Thursday. He proposes every week and she says \"after the harvest.\" There's been nine harvests.",
          "@bettina:smug You read people, dear. I like that. Means I'll have to work harder to keep secrets from you.",
        ],
        aff: 5,
        next: 'end',
      },
      secret_fail: {
        text: [
          "@you Them. By the sundial. Secret lovers, surely.",
          "@bettina:happy Sweetie, that's a brother and sister. They're arguing about their mother's will. He's about to push her into the fountain.",
          "He does. She takes him with her. Bettina applauds, delighted.",
        ],
        aff: 2,
        next: 'end',
      },
      hers: {
        text: [
          "She looks at you sideways, fan stilled.",
          "@bettina:blush Mine? ...Oh, you are a dangerous thing.",
          "@bettina:sad All right. One. After Harold, I didn't open the tavern for a week. The first night I did, I couldn't stop crying, and I didn't want anyone to see. So I flirted with every single person who walked in. All night. Every one. Nobody noticed I was crying the whole time.",
          "@bettina It's been my armour ever since. You're the first one who's ever noticed the straps.",
        ],
        next: 'end',
      },
      rose: {
        text: [
          "You snap a red rose from a hedge. A gardener shouts. You run. She runs too, in velvet and heels, laughing like a girl half her age, until you're both hidden behind a statue of a weeping nymph.",
          "@bettina:happy Stolen roses! From the Duke of Ravenmoor's own hedge! Sweetie, that's practically a *proposal* in this quarter.",
          "She tucks it into her hair, just above the ear, where you tuck her curls.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "You end the night on a hidden bench behind the yew walk, her shoes kicked off under the bench and her cheek pillowed on your arm, Lord Pettigrew still crouching hopefully in a hedge some way off.",
          { if: { stage: 4 }, text: "@bettina:smug There's a reason they put the benches back here, you know. Generations of nobility have made poor decisions on this very bench. Shall we uphold the tradition, dear? Discreetly. Mostly." },
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          "Saltbreeze Harbor smells of tar and frying and the sea. Bettina buys the fish herself — she knows the fishwife, of course, and the fishwife's husband, and the fishwife's husband's secret second family in the next village — and you eat it on the end of the pier with your legs over the water.",
          "@bettina:happy Harold won my ring off a sea captain, you know. Sat down with him at my bar, one hand of cards, captain bet the ring off his own finger. Harold won with a pair of twos. The captain cried.",
          "She watches a ship slide out past the breakwater, sails gold in the last light.",
          "@bettina:sad Forty-four years, sweetie, and I've never once been on a boat. We were going to. Harold and I. Then there was the bar, and the roof, and the bar again. And then there wasn't Harold.",
        ],
        choices: [
          { text: "\"Then I'll take you. One day. I promise.\"", go: 'promise', aff: 6, flag: 'bettina_sea' },
          { text: "\"Tell me where you'd have gone.\"", go: 'where', aff: 4 },
          { text: "Feed her the last bit of fish to change the subject.", go: 'fish', aff: 2 },
        ],
      },
      promise: {
        text: [
          "She laughs, soft and disbelieving, and opens her mouth to tease you out of it. Then she sees your face, and closes it.",
          "@bettina:blush ...Careful, sweetie. I've run a tavern for twenty years. I remember every tab, every debt and every promise anybody's ever made me. I *collect.*",
          "@you Good.",
          "She looks out at the sea for a long time. She doesn't let go of your hand.",
        ],
        next: 'end',
      },
      where: {
        text: [
          "@bettina:happy Gullwater. A little town on the south coast. Harold read about it in a book. Pink cliffs, he said. Oysters the size of your hand. A tavern with no roof at all, just stars.",
          "@bettina:smug He'd never been to the end of the street without getting lost. He'd have got us to Gullwater by way of the Frostspine Mountains. ...It would have been a lovely trip.",
        ],
        next: 'end',
      },
      fish: {
        text: [
          "You hold up the last piece of fish. She looks at it, then at you, one eyebrow climbing.",
          "@bettina:smug Changing the subject with food. That's *my* trick, sweetie. I invented it. I'll allow it.",
          "She takes it, but she's quiet for a while after, watching the ships.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "The sun goes down into the sea. She hums something under her breath, off-key, and leans into you the way she leans on her bar at closing: all of her weight, none of her guard.",
          { if: { stage: 4 }, text: "@bettina:blush You know, the fishwife has a little room above her shop. Rents it by the night. Very discreet. I happen to know she owes me a favour. ...I happen to know *everybody* owes me a favour, dear." },
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          "Bettina packs a picnic like a quartermaster provisioning a siege. There are three kinds of bread, a cold pie, a whole roast chicken, honey cakes, a jar of pickles, a bottle of something red, two cups, a tablecloth, and a smaller backup tablecloth.",
          "@bettina:smug Never trust a picnic to a man, sweetie. Harold once brought a single turnip and a lute.",
          "She spreads it all out in a sunny clearing and immediately begins feeding you: a bite of this, a taste of that, *eat up, you're too thin,* until you can barely move.",
          "Then, somewhere between the chicken and the cakes, she lies back on the blanket to look at the sky, sighs, and falls fast asleep in the sun.",
        ],
        choices: [
          { text: "Let her sleep. Sit beside her and keep the flies off.", go: 'sleep', aff: 6 },
          { text: "Wake her with a kiss.", go: 'kiss', aff: 4 },
          { text: "Eat all the honey cakes while she's asleep.", go: 'cakes', aff: 1 },
        ],
      },
      sleep: {
        text: [
          "You sit beside her and wave the flies away with a napkin, and watch the light move over her face. Asleep, the knowing smile is gone. She looks younger. She looks tired. She looks like someone who has not been allowed to stop in a very long time.",
          "She wakes an hour later with a start.",
          "@bettina:surprised Oh — oh, sweetie, I'm so sorry, I never *sleep* in the day, I don't know what came over —",
          "@you You needed it.",
          "@bettina:blush ...Yes. I suppose I did. Nobody's let me need anything in years.",
        ],
        next: 'end',
      },
      kiss: {
        text: [
          "You lean over and kiss her softly. Her eyes open slowly, warm and amused, and she doesn't move.",
          "@bettina:smug Ara, ara. Is this how the young people wake their sweethearts now? I approve. Do it again. I'm not fully awake yet.",
          "It takes several attempts before she's fully awake.",
        ],
        next: 'end',
      },
      cakes: {
        text: [
          "You eat one honey cake. Then another. They're very good. Then there are none.",
          "She wakes, sits up, looks at the empty plate, looks at your sticky fingers, and smiles like a cat.",
          "@bettina:smug Sweetie. You've got honey all down your chin.",
          "She doesn't wipe it off with her thumb this time. She leans in and takes care of it in another way entirely, and you are so flustered you knock over the pickles.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "You walk home through the forest at dusk with the empty basket, her arm through yours, and she doesn't flirt with a single passing woodcutter. You notice. So does she.",
          { if: { stage: 4 }, text: "@bettina:blush I've a confession, dear. I didn't pack the backup tablecloth for spills. I packed it for *after.* ...Well. There's still a little light left." },
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'You lean on the bar of the Tipsy Wyvern and try to catch someone\'s attention. Someone catches yours instead.',
          'She\'s in her forties, perhaps — and wears it like a crown. Dark auburn hair piled loosely on her head, a few curls escaping. A low-cut emerald bodice. Warm brown eyes with laughter lines at the corners. She leans across the bar toward you, chin propped on one hand, and smiles.',
          '@bettina:smug Well, *hello.* A new face. And such a pretty one, too. What can I get you, sweetie?',
          'Her voice is honey and smoke. Several regulars at the bar exchange knowing grins.',
        ],
        aff: 10,
        choices: [
          { text: '"Whatever you recommend."', go: 'recommend' },
          { text: 'Lean in and match her smile. "Surprise me." [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'match', fail: 'match_fail' },
          { text: 'Go bright red and mumble "...an ale, please."', go: 'blush', flag: 'bettina_blushed' },
        ],
      },
      recommend: {
        text: [
          '@bettina:happy Oh, a trusting one. I like that.',
          'She pours you something amber and spiced from a bottle under the bar.',
          '@bettina:smug My own recipe. Harold called it "Bettina\'s Ruin." Sip it slowly, dear. It sneaks up on you.',
          'It does. It\'s wonderful.',
        ],
        aff: 4,
        next: 'name',
      },
      match: {
        text: [
          '@you Surprise me.',
          'One of her eyebrows lifts. Her smile widens slowly, like a cat who\'s just found a particularly interesting mouse.',
          '@bettina:smug Ara, ara. Bold, aren\'t you? Most of the young things who come in here turn into tomatoes the moment I look at them.',
          'She pours you something deep red and glittering, and slides it over so your fingers brush.',
          '@bettina On the house. For being *interesting.*',
        ],
        aff: 8,
        next: 'name',
      },
      match_fail: {
        text: [
          'You lean in, try to match her smile, slip on the bar\'s wet surface, and nearly pitch face-first into a bowl of peanuts.',
          '@bettina:surprised Oh, *sweetie.*',
          'She\'s laughing, but not unkindly. She pushes a glass toward you.',
          '@bettina:happy Here. For the bravery. And the peanuts.',
        ],
        aff: 3,
        next: 'name',
      },
      blush: {
        text: [
          'She laughs, a rich, warm sound that fills the whole room.',
          '@bettina:happy Oh, you\'re *adorable.* I\'m going to keep you.',
          'She pours your ale and leaves a little honey cake beside it, winking.',
          '@bettina:smug For the blush. It\'s my favourite kind of tip.',
        ],
        aff: 5,
        next: 'name',
      },
      name: {
        text: [
          '@bettina I\'m Bettina. Madame Bettina Rosewater, if you\'re being proper, but nobody ever is in here. I own this den of sin.',
          '@you {name}.',
          '@bettina:happy {name}. Lovely. Well, {name}, you\'re welcome at my bar any time. Come for the ale, stay for the company.',
          'She reaches over and tucks a stray lock of hair behind your ear.',
          '@bettina:smug Mostly the company.',
          'And then she sweeps off down the bar to scold a dwarf for standing on a table, leaving you feeling distinctly warm and not entirely because of the drink.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'It\'s closing time. The last patrons have stumbled out. Bettina locks the door, turns the sign, and pours two glasses.',
          '@bettina:smug Stay a while, sweetie. Keep an old woman company. I\'ll teach you something.',
          'She sets out bottles: honey liqueur, firebrandy, elderflower cordial, a dusty bottle with no label.',
          '@bettina:happy Every barkeep worth her salt has a signature drink. Harold\'s was terrible — he put pickled onion in everything. Let\'s see what yours would be.',
        ],
        choices: [
          { text: 'Mix something bold and smoky.', go: 'bold', aff: 6, flag: 'bettina_newcomer' },
          { text: 'Mix something sweet and gentle.', go: 'sweet', aff: 6, flag: 'bettina_sweetheart' },
          { text: 'Ask her to guide your hands. [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'guide', fail: 'guide_fail' },
        ],
      },
      bold: {
        text: [
          'You mix firebrandy with the mystery bottle and a twist of burnt orange. She takes a sip and coughs. Then she laughs.',
          '@bettina:surprised Oh, that\'s *dangerous.* That\'s the kind of drink that starts duels. I love it.',
          '@bettina:smug We\'ll call it "The Newcomer." It looks innocent and kicks like a mule.',
        ],
        next: 'harold',
      },
      sweet: {
        text: [
          'You mix honey liqueur with elderflower and a splash of cream. She sips it thoughtfully.',
          '@bettina Mm. Soft. Warm. A little shy at first, then it lingers.',
          'She looks at you over the rim of her glass.',
          '@bettina:smug Rather like you, sweetie.',
          "@bettina:happy We'll call it \"The Sweetheart.\" I'll put it on the menu, and every time someone orders it, I'll think of you going pink.",
        ],
        next: 'harold',
      },
      guide: {
        text: [
          'She comes around the bar and stands behind you, her hands over yours on the shaker. She smells of cinnamon and nightjasmine. Her voice is low in your ear.',
          '@bettina:smug Gently. Not too fast. Feel the rhythm of it. There. *There.* Just like that.',
          'You are not entirely sure you\'re still talking about drinks.',
          'The cocktail is perfect. She takes a long, slow sip without stepping back.',
          '@bettina:blush Mm. You\'re a natural, dear.',
          "@bettina:smug We'll call it \"The Duet.\" It takes two pairs of hands to make properly. I'm not teaching anyone else."
        ],
        aff: 9,
        flag: 'bettina_duet',
        next: 'harold',
      },
      guide_fail: {
        text: [
          'She comes around behind you and guides your hands. You become so flustered that you shake the shaker so hard the lid flies off and coats you both in honey liqueur.',
          'There\'s a stunned silence. Then she laughs so hard she has to hold onto the bar.',
          '@bettina:happy Oh, sweetie! Oh, *look at us!* Harold would have *loved* you.',
          "@bettina:smug That's going on the menu. \"The Sticky Situation.\" Served with a towel.",
        ],
        aff: 5,
        flag: 'bettina_sticky',
        next: 'harold',
      },
      harold: {
        text: [
          'Later, the two of you sit on the bar itself, legs dangling, finishing your drinks by the light of the dying fire.',
          '@bettina:happy Harold built this bar. With his own hands. Terrible carpenter. It wobbles on the left. I\'ve never had it fixed.',
          '@bettina:sad Eight years now. People keep telling me to "move on." As if he were a town I was passing through.',
          'She swirls her glass and smiles, but it doesn\'t reach her eyes.',
        ],
        choices: [
          { text: '"Tell me about him."', go: 'tell', aff: 8, flag: 'bettina_harold' },
          { text: 'Just sit with her. Quietly.', go: 'quiet', aff: 7 },
        ],
      },
      tell: {
        text: [
          'So she does. The card game where he won the ring. The time he tried to fight a troll and ended up buying it a drink. The way he sang off-key every morning while he swept the floor. She laughs, and then she cries a little, and then she laughs again.',
          '@bettina:sad Nobody\'s asked me about him in years. They\'re all too afraid I\'ll get sad.',
          '@bettina:happy Thank you, dear. It\'s nice to remember him *out loud.*',
        ],
        end: true,
      },
      quiet: {
        text: [
          'You don\'t say anything. You just sit there beside her, shoulder to shoulder, while the fire crackles down.',
          'After a while, she sets her glass down on the bar and lets her shoulder settle against yours, heavy and warm, like a door that has finally been allowed to close.',
          '@bettina:blush ...You\'re a good listener, {name}. Even when nobody\'s talking.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'The Tipsy Wyvern is packed and rowdy. Then the door slams open, and a gang of mercenaries swaggers in — big, drunk, armoured, and looking for trouble.',
          'Their leader slams his fist on the bar. "Free drinks for the Iron Hounds, woman. Or we start breaking things."',
          'The tavern goes quiet. Bettina doesn\'t even look up from the glass she\'s polishing.',
          '@bettina:smug Sweetie, I\'ve been throwing men like you out of this tavern since before you lost your milk teeth. Pay or leave.',
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
          'He turns. Every regular in the tavern — dwarves, adventurers, Old Gruk, an orc woman with two axes she calls by name, a knight in full plate — is standing, silently, glaring at him.',
          'The Iron Hounds leave very quickly. They even pay.',
          'Bettina looks at you over her glass, and for once, her smile seems genuinely surprised.',
        ],
        mood: 'surprised',
        aff: 10,
        next: 'after',
      },
      pan: {
        text: [
          'You move — but before you can do anything heroic, there\'s a resounding *BONG*.',
          'Bettina has produced a cast-iron frying pan from under the bar and introduced it to the side of his head. He crumples like a wet sack. The tavern erupts into cheers.',
          '@bettina:smug Somebody drag this one out by his ankles, please. Thank you, Gruk.',
          'Then she turns to you, frying pan still in hand, eyes bright.',
          '@bettina:surprised You were going to fight a man three times your size. For me.',
          '@bettina:blush That was very foolish, sweetie. And very, *very* sweet.',
        ],
        flag: 'bettina_pan',
        next: 'after',
      },
      after: {
        text: [
          'After closing, you help her clean up. When the last chair is upright and the last glass is washed, she sets down her rag and doesn\'t pick it up again.',
          { if: 'bettina_harold', text: '@bettina:sad You asked me about Harold, that night on the bar. Do you know how long it had been since anyone asked? People step around him like a puddle on the floor. You walked straight through it.' },
          '@bettina I flirt with everyone, you know. It\'s a barkeep\'s armour. Make everyone feel special, and no one ever gets close enough to see the cracks.',
          '@bettina:sad But you keep getting past it. You keep staying after closing. You keep *seeing* me. I don\'t quite know what to do with that.',
          'Bettina Rosewater, who always has the last word, has run out of words. She looks uncertain.',
        ],
        choices: [
          { text: '"You don\'t have to do anything with it. Just let me stay."', go: 'stay', aff: 10 },
          { text: 'Tuck a loose curl behind *her* ear, the way she does to you. [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'curl', fail: 'stay' },
        ],
      },
      stay: {
        text: [
          'She looks at you for a long moment. Then she laughs softly and shakes her head.',
          '@bettina:blush Oh, I\'m in trouble. I\'m in *such* trouble.',
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
          '@bettina:blush ...Oh, you *wicked* thing. Using my own tricks against me.',
          '@you Is it working?',
          '@bettina:smug Sweetie, I am forty-four years old and you have just made me *blush.* What do you think?',
          'She kisses you — slow and warm and devastatingly sure — and then pulls away before you can catch your breath.',
          '@bettina:happy Good night, {name}. Come back tomorrow.',
        ],
        aff: 12,
        flag: 'bettina_curl',
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'The tavern is closed. The fire is low. Bettina is waiting at the foot of the stairs, wearing a deep red silk robe and holding a single candle. Her hair is down — you\'ve never seen it down. It falls past her shoulders in heavy auburn waves.',
          { if: 'bettina_curl', text: '@bettina:blush I couldn\'t pin it up tonight. Every time I tried, I remembered your hand, tucking that curl behind my ear, and I had to put the pins down and sit on the bed for a minute. It\'s very undignified, sweetie. I blame you entirely.' },
          '@bettina:sad I\'ve been thinking about this for weeks, sweetie. About whether it\'s foolish. A woman my age. Someone like you.',
          '@bettina:smug And then I decided I\'m too old to waste time being foolish about *not* being foolish.',
          'She holds out her hand.',
          '@bettina:blush Come upstairs with me.',
        ],
        choices: [
          { text: 'Take her hand.', go: 'hand', aff: 10 },
          { text: '"Only if you let me take care of *you* for once." [Charm check 4]', check: { stat: 'charm', dc: 4 }, pass: 'care', fail: 'hand' },
        ],
      },
      hand: {
        text: [
          'Her hand is warm. She leads you up the creaking stairs, past Harold\'s portrait on the landing — she touches the frame lightly as she passes — and into her room.',
          { if: 'bettina_harold', text: '@bettina:happy Goodnight, love. Be good. — Don\'t look at me like that, sweetie. I\'ve told him all about you. You came out of it very well. He always liked anyone who asked about the troll.' },
        ],
        next: 'night',
      },
      care: {
        text: [
          'She stops on the bottom stair. The candle tilts. For a moment, all the teasing confidence falls away, and she looks like someone who\'s been carrying a full tray, one-handed, for eight years.',
          '@bettina:sad ...No one\'s said that to me in eight years.',
          '@bettina:sad Everyone needs Bettina. Nobody ever thinks Bettina might need anything.',
          'She lets you lead her up the stairs. When you reach her room, she sits on the edge of the bed and lets you take the pins from her hair one by one, eyes closed.',
        ],
        aff: 14,
        flag: 'bettina_care',
        next: 'night',
      },
      night: {
        text: [
          "She leads you into her room and closes the door behind you. For a moment she just looks at you, leaning back against the door, a slow, warm, knowing smile spreading across her face.",
          "@bettina:smug Twenty years I've watched young things blush across my bar. Do you know what I've always wanted?",
          "@you What?",
          "@bettina:smug To see how far down the blush goes.",
          { if: 'bettina_blushed', text: "@bettina:smug You went scarlet the very first night, you know. Over an *ale.* I've been wondering ever since." },
          "She takes her time finding out. She unbuttons your shirt one button at a time, kissing each new inch, murmuring *mm* and *oh, sweetie* and *look at you* in that honey-and-smoke voice until you can't think straight. She takes your hands and places them exactly where she wants them. She shows you how she likes to be touched, patiently, with the confidence of a woman who has nothing left to prove and no intention of hurrying.",
          "@bettina:smug Slower. *There.* Oh, you're a quick study. I like that. I like that very much.",
          "Then the red silk robe slides off her shoulders and pools on the floor. Somewhere in the middle of it all, when you kiss her very gently below the ear, her confidence finally cracks. Her breath catches and her fingers tighten in your hair. The great flirt of the Tipsy Wyvern, who has made a thousand adventurers blush, goes pink all the way down herself.",
          "@bettina:blush Oh. Oh, *my.* I'd — I'd forgotten it could be like this.",
          "She doesn't let you be careful with her for long. She pulls you down onto the bed with a low, delighted laugh, and the old frame creaks and creaks...",
          "...",
          "Morning comes slow and golden through the window. She's propped on one elbow beside you, hair everywhere, tracing lazy circles on your chest.",
          "@bettina:smug Ara, ara. Look at the state of you. I've ruined you for anyone your own age.",
          "@you Completely.",
          "@bettina:happy *Good.*",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You come downstairs to find the Tipsy Wyvern's morning regulars all very, very interested in their porridge. Nobody looks up. Several people are smirking.",
          "Bettina is behind the bar, humming, hair loose around her shoulders for the first time anyone can remember. She slides a plate of eggs, bacon and honey cakes in front of you, and a mug of coffee with a little heart traced in cinnamon on the saucer.",
          { if: 'bettina_care', text: "@bettina:blush You took my pins out last night, sweetie. One at a time. I didn't put them back in this morning. I don't think I'm going to." },
          "@bettina:happy On the house, sweetie. Eat up. You'll need your strength.",
          "Old Gruk at the end of the bar snorts into his tankard. Aura, wiping tables, drops a whole tray of mugs.",
          "@bettina:smug Oh, don't mind them. The walls in this place are *dreadfully* thin. Half the street knows. The other half will know by noon.",
          "She leans across the bar, chin in hand, smiling.",
          "@bettina:smug Are you going to be embarrassed about it, or are you going to kiss me good morning in front of all these lovely people?",
        ],
        choices: [
          { text: "Lean across the bar and kiss her good morning. Thoroughly.", go: "kiss", aff: 6, flag: 'bettina_kissed' },
          { text: "Go bright red and hide behind your coffee.", go: "blush", aff: 5 },
          { text: "\"Sorry, everyone. I'll try to be quieter.\"", go: "sorry", aff: 5, flag: 'bettina_singing' },
        ],
      },
      kiss: {
        text: [
          "You lean across the bar and kiss her, long and slow, in front of everyone. The whole tavern erupts in cheers. Somebody bangs a tankard. Gruk wolf-whistles.",
          "When you pull back, Bettina's cheeks are pink. In public. Before noon. In front of the *regulars.*",
          "@bettina:blush ...Well. That'll give them something to talk about.",
          "She's smiling all day. Customers get free refills. Nobody knows why, but everybody knows why.",
        ],
        end: true,
      },
      blush: {
        text: [
          "You hide behind your coffee. Bettina laughs, rich and delighted.",
          "@bettina:smug Oh, there it is. My favourite tip. Look, everyone! It goes all the way down. I checked.",
          "The tavern howls. You want to die. She leans over and kisses the top of your head, very softly.",
          "@bettina:happy I'm teasing, sweetie. Mostly.",
        ],
        end: true,
      },
      sorry: {
        text: [
          "The regulars burst out laughing. Gruk raises his tankard.",
          "\"Don't you dare, lad,\" he says. \"First time in eight years she's sung while she sweeps.\"",
          "Bettina goes very quiet. She looks at the old orc, then at you. Her eyes are a little bright.",
          "@bettina:surprised ...Was I singing?",
          "Everyone nods.",
          "@bettina:blush Well. Fancy that.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Bettina closes the Tipsy Wyvern for Starfall — the first time she\'s closed it for anything in twenty years. The regulars are scandalised. She doesn\'t care.',
          'She climbs the festival hill on your arm in an emerald gown, her hair loose, a basket of food and a bottle of Bettina\'s Ruin under her other arm.',
          { if: 'bettina_singing', text: 'She\'s humming as you climb. She\'s been humming for weeks now. Gruk has started keeping a tally on the wall behind the bar, and the regulars are running a book on when she\'ll stop. Nobody is betting on soon.' },
          { if: 'bettina_pan', text: 'The frying pan is in the basket too. "For emergencies," she says, when you raise an eyebrow. "And omelettes. And emergencies involving omelettes."' },
          '@bettina:sad Harold and I used to come up here every year. I haven\'t been back since he passed.',
          'She spreads a blanket over the grass and pulls you down beside her.',
          '@bettina:blush I wanted my first time back to be with you, sweetie.',
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'The stars begin to fall. She watches them with her head on your shoulder, her hand laced with yours.',
          '@bettina:sad The legend says the stars bind you forever. I already had one forever. I didn\'t think I\'d get another.',
          '@bettina:smug But here you are. Ruining all my plans to grow old gracefully.',
          'She laughs, turns, and kisses you — a long, slow, unhurried kiss, the kind that has nowhere else to be — as a thousand stars streak across the sky.',
          '@bettina:blush Ara, ara. I think I\'m in love with you, {name}. How *inconvenient.*',
        ],
        choices: [
          { text: 'Kiss her back, and let the stars do the rest.', go: 'epilogue' },
          { text: '"Bettina... is that a deck of cards in your bodice?"', go: 'ruin', if: { any: ['bettina_pan', 'bettina_kissed'] } },
          { text: '"What do *you* want, Bettina? Not the tavern. Not the town. You."', go: 'wander', if: ['bettina_care', { any: ['bettina_harold', 'bettina_curl', 'bettina_sea'] }] },
        ],
      },
      epilogue: {
        text: [
          '*Some time later...*',
          { if: 'bettina_sweetheart', text: 'The Tipsy Wyvern gets a new sign. It reads, in fresh gold paint: *THE TIPSY WYVERN — Proprietors: Bettina Rosewater & {name}.* Below it, smaller: *(Ask about our signature cocktail, "The Sweetheart.")*' },
          { if: 'bettina_duet', text: 'The Tipsy Wyvern gets a new sign. It reads, in fresh gold paint: *THE TIPSY WYVERN — Proprietors: Bettina Rosewater & {name}.* Below it, smaller: *(Ask about our signature cocktail, "The Duet." Made to order, by both proprietors only.)*' },
          { if: 'bettina_sticky', text: 'The Tipsy Wyvern gets a new sign. It reads, in fresh gold paint: *THE TIPSY WYVERN — Proprietors: Bettina Rosewater & {name}.* Below it, smaller: *(Ask about our signature cocktail, "The Sticky Situation." Towels provided.)*' },
          { if: ['!bettina_sweetheart', '!bettina_duet', '!bettina_sticky'], text: 'The Tipsy Wyvern gets a new sign. It reads, in fresh gold paint: *THE TIPSY WYVERN — Proprietors: Bettina Rosewater & {name}.* Below it, smaller: *(Ask about our signature cocktail, "The Newcomer.")*' },
          'You run the bar together. She still flirts with every customer. They still blush. But at the end of every night, when the doors are locked and the chairs are up, she pours two glasses and sits on the bar with you, legs dangling, and tells you about her day.',
          'The bar still wobbles on the left. Neither of you ever fixes it.',
          'Harold\'s portrait still hangs on the landing. Next to it now hangs another: you and Bettina on the festival hill, painted by a very excitable travelling artist.',
          'She says Harold would have liked you. She says it often. She says it like she means it — because she does.',
        ],
        ending: 'bettina',
      },
      ruin: {
        text: [
          'She pulls out a battered deck of cards from the front of her gown with the unhurried grace of a magician producing a dove, and fans them across the blanket.',
          '@bettina:smug Harold won my ring in a card game, sweetie. I always thought that was the most romantic thing a man could do. Gamble for a woman. Twenty years I\'ve wondered what it would feel like to be the one holding the cards.',
          { if: 'bettina_pan', text: '@bettina:happy The gentleman I introduced to my frying pan came back last week to apologise. We played a few hands. He lost his purse, his boots, his sword, and *this.*', else: '@bettina:happy I won this off a sea captain last week. He was very gracious about it. He also lost his hat.' },
          'She holds up a ring between two fingers. It catches the starlight.',
          '@bettina:smug One hand of Wyvern\'s Gambit. If I win, you marry me. If you win...',
          '@you If I win?',
          '@bettina:smug You marry me. I\'m a businesswoman, dear. I don\'t play games I can lose.',
          'She deals. You turn over your cards. Five queens. There are only four in the deck.',
          '@bettina:blush Ara, ara. Would you look at that. You lose. Or win. I\'ve honestly forgotten which way round I stacked it.',
          'She is, you realise, shaking a little. Bettina Rosewater, who throws mercenaries out by the ear, is holding a ring in the starlight and waiting for an answer with her heart in her face.',
          '@you Deal me in. Forever.',
          'She laughs, a little wetly, and slides the ring onto your finger, and then pulls you down into the grass by your collar while a thousand stars fall on the hill and the cards blow away in the wind.',
        ],
        next: 'epilogue_ruin',
      },
      epilogue_ruin: {
        text: [
          '*Some time later...*',
          'You are married in the Tipsy Wyvern, because Bettina says she\'s not getting married anywhere she can\'t reach the good bottles. Gruk officiates. He got himself ordained by post the very morning after the festival and has been insufferable about it since.',
          'Aura is maid of honour and drops the rings twice. A knight in full plate weeps openly. The Iron Hounds send a fruit basket. Out of fear.',
          { if: 'bettina_pan', text: 'The frying pan hangs over the bar, polished to a mirror shine, beneath a brass plaque: *FOR EMERGENCIES.* It has been taken down exactly twice since. Both times, the emergency was resolved immediately.' },
          'She introduces you to everyone who walks in as "my ruin." She means it as the highest compliment she knows. Harold named a drink after her, she tells you, because she was the most dangerous thing he\'d ever met. Now she\'s met the second most.',
          'She never stops flirting with the customers. She simply ends every flirtation by pointing across the room at you and saying, "But I\'m taken, sweetie. Look at that. Isn\'t it awful?" The customers agree that it is, and tip extra.',
          'On every anniversary, after closing, she sits on the bar and deals one hand of Wyvern\'s Gambit. She stacks the deck every single year. Every year, you let her.',
          'The bar still wobbles on the left. Harold\'s portrait still watches over the landing. And if you look very closely at it these days, you\'d swear he\'s smirking.',
        ],
        ending: 'bettina_ruin',
      },
      wander: {
        text: [
          'She laughs it off at first, the way she laughs everything off. *Oh, sweetie, what a question.* Then she sees you aren\'t laughing, and the smile slips.',
          '@bettina:sad ...I want to see the sea. Not the harbor. The *sea.* The kind with no other side.',
          '@bettina:sad Harold and I were going to. We had a map. We\'d saved up. Then the roof went, and then the bar had a bad winter, and then — well. Then there wasn\'t Harold. And there was always the tavern. There\'s *always* the tavern.',
          { if: 'bettina_sea', text: '@bettina:blush You promised me a boat. On the pier. I\'ve been pretending I didn\'t hear you. I\'ve heard nothing else for weeks.' },
          '@you Gruk can run the bar.',
          '@bettina:surprised Gruk can\'t *pour.*',
          '@you Then Aura can help.',
          '@bettina:smug Aura sets the kitchen on fire.',
          '@you Then it\'ll be on fire for a while. It\'ll survive. So will they. So will you.',
          'She searches your face for a very long time, the way she reads a stranger across her bar. A star falls behind her and she doesn\'t see it.',
          '@bettina:blush ...Twenty years, and nobody ever asked what *I* wanted. They only ever asked for a drink.',
          '@bettina:happy All right. All *right,* you wicked, wonderful thing. Take me to the sea.',
        ],
        next: 'epilogue_wander',
      },
      epilogue_wander: {
        text: [
          '*Some time later...*',
          'Bettina hands the keys of the Tipsy Wyvern to Gruk, along with a list of instructions nine pages long, a frying pan, and a kiss on his bald head that makes him go dark green. Then she walks out of her own front door with a carpetbag, Harold\'s old map, and you, and she doesn\'t look back. Well. She looks back once.',
          'You take the coast road south. She makes a pirate captain blush so hard he gives you free passage. She out-drinks a sea giant in a harbor town and is carried home on his shoulders, singing. She discovers she gets terribly seasick, and then that she doesn\'t care.',
          { if: 'bettina_sea', text: 'You keep your promise from the pier. The first morning there is nothing on any side of the ship but open water, she stands at the rail and cries, and then laughs, and then kisses you so long that the helmsman has to steer around a whale.' },
          'You reach Gullwater in the autumn. The cliffs really are pink. The oysters really are the size of your hand. There is a tavern with no roof, just stars, exactly as Harold read in his book, and she sits at its bar and orders a drink and lets someone else pour it, and tips like a duchess.',
          'Every night, wherever you are — a ship\'s rail, a mountain inn, a hayloft in a storm — she pours two glasses and sits with you, legs dangling, and tells you about her day. The days are much more interesting now.',
          'You come home after a year and a day. The kitchen has been on fire only eleven times. The regulars have read every letter aloud so often they can recite them. Gruk hands her back the keys and bursts into tears.',
          'The bar still wobbles on the left. Nobody has fixed it. She puts her hand flat on it, and smiles, and says, "Hello, love. We\'re back. You\'d have hated the boat."',
        ],
        ending: 'bettina_wander',
      },
    },
  },
});
