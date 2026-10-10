FL.addCharacter({
  id: 'celestine',
  name: 'Sister Celestine',
  short: 'Celestine',
  trope: 'Pure Priestess (Secretly Curious)',
  color: '#f2e6a8',
  favStat: 'charm',
  endingTitle: 'A Blessing of Our Own',
  endings: {
    celestine_abbess: 'The Abbess of the Radiant Heart',
    celestine_pilgrim: 'The Road Less Hallowed',
  },
  teaser: 'A priestess in white and gold prays before the altar. Her lips are moving very fast. She is blushing.',
  blurb: 'The Temple\'s youngest high priestess: radiant, gentle, devout, beloved by all. She has never broken a single vow. She has also, lately, been having some very un-priestly thoughts, and would like the Goddess of Love to please stop smirking about it.',
  schedule: ['temple', 'temple', ['temple', 'square']],
  gifts: { love: ['candle'], like: ['novel', 'cakes', 'roses', 'tea', 'salts'], hate: ['wine', 'dagger'] },
  giftLines: {
    love: ['She cradles it like a newborn.', '@celestine:happy A Blessed Candle! Oh, it\'s been sanctified by the High Altar! I\'ll light it at evening prayers and think of — of the *Goddess.* Exclusively. Yes.'],
    like: '@celestine:blush Oh, how kind! The Goddess teaches us that gifts given freely are the purest form of love. Not *love* love! Holy love! The regular kind! Oh dear.',
    neutral: '@celestine:happy Thank you, my friend! I shall donate it to the poor! ...Unless you\'d rather I kept it? I could keep it.',
    hate: ['She takes a step back, hands clasped.', '@celestine:sad Oh — no, I couldn\'t possibly — Sisters of the Radiant Heart are forbidden such things. I\'m sorry. I\'ll... say a prayer for you.'],
    special: {
      candle: ['She cradles the Blessed Candle in both hands as if it might fly away.', '@celestine:happy Oh, you *remembered.* I burn one every night on my windowsill. The novices think it\'s for the Goddess.', '@celestine:blush It is *partly* for the Goddess.'],
      novel: ['She sees the cover. She makes a sound like a kettle reaching the boil.', '@celestine:surprised *The Duke\'s Forbidden Passion, Volume IX?!* In PUBLIC? In the *Temple?*', 'She snatches it, glances around and slides it inside her prayer book, where it fits suspiciously well.', '@celestine:blush I confiscated volumes one through eight. From sinners. It would be irresponsible to leave the collection incomplete.'],
      wine: ['She holds the bottle away from herself like it might whisper something.', '@celestine:sad "Do not ask"? That\'s what it says on the label. Do you know who writes "do not ask" on a label? *Vampires,* that\'s who.', '@celestine I\'ll pour it out at the crossroads. With a prayer. Just to be safe.'],
      relic: ['She turns the little gilded reliquary over, very gently, and peers at the knucklebone inside. Her face softens.', '@celestine:smug Oh, this isn\'t holy at all. It\'s from a pig. A *nice* pig, probably.', '@celestine:happy But you bought it because you thought I\'d want something holy. That part\'s holy. I\'ll bless the rest myself. The pig deserves it.'],
      roses: ['She buries her face in the roses and breathes in so deeply she has to sit down.', '@celestine:blush Red roses. You do know what red roses *mean,* don\'t you? There\'s a whole chapter on it. In the — in a book. A gardening book.'],
      fork: ['She examines the ordinary fork with tremendous seriousness, turning it in the candlelight.', '@celestine:surprised Is this a test of faith? Is it a parable? "And the stranger gave unto her a fork, and she understood that all things serve..." — no, I don\'t think that\'s in there.', '@celestine:happy Thank you! I shall bless it. I bless everything. I blessed a *goat.*'],
    },
    repeat: '@celestine:smug Another one! You know, the Goddess teaches moderation. I\'ve just checked. She doesn\'t, actually. But the Abbess does. ...I\'ll hide it from the Abbess.',
  },
  talk: [
    ['@celestine:happy Blessings upon you, {name}! Have you come to pray? Or confess? We have very comfortable confession booths. ...Not that you have anything to confess! Do you?'],
    ['@celestine:happy I rose at four this morning for dawn prayers! Then I fed the poor, healed six people, and blessed a goat. It was a wonderful day. The goat bit me.'],
    ['@celestine:blush The Goddess of Love is our patron. Her teachings are... um... very *thorough.* Some of the scriptures are... illustrated. I\'m told it\'s symbolic.'],
    ['She drops her prayer book. Several loose pages flutter out. You catch a glimpse of one titled *The Duke\'s Forbidden Passion, Chapter Nine.*', '@celestine:surprised THAT\'S CONFISCATED. I CONFISCATED IT. FROM A SINNER. I WAS READING IT TO UNDERSTAND THE SIN.'],
    ['@celestine:sad Sometimes I wonder what life would be like if I hadn\'t joined the Temple at sixteen. ...But then I remember how much good I do here. And then I wonder again.'],
    ['@celestine:blush You have kind eyes. Did you know that? The Goddess says the eyes are windows to the soul. Yours are very... open windows. I\'m going to go pray now.'],
    ['@celestine:smug Someone confessed to stealing pies from the bakery. I assigned his penance: return the pies. He said he\'d eaten them. So I said, "Then bake new ones."', '@celestine:happy He\'s there now. He\'s very good at it. The baker has offered him an apprenticeship. The Abbess says my penances are "alarmingly practical."'],
    ['@celestine The Abbess is ninety-one and has never once raised her voice. She doesn\'t need to. She just looks at you over her spectacles, and you confess things you haven\'t even done yet.', '@celestine:blush I confessed to *this conversation* this morning. Pre-emptively.'],
    ['@celestine:sad The goat came back. The one I blessed. It walked all the way from the farm on its own and stood at the altar until I blessed it again.', '@celestine:happy Then it bit me. I think it\'s a ritual now. I think I have a congregation of one very devout goat.'],
    { if: 'celestine_forearms', lines: ['@celestine:blush I\'ve been praying very hard about the forearms. The baker\'s apprentice\'s. You remember. You heard.', '@celestine:sad The good news is, I don\'t think about his forearms anymore. The bad news is that I think about *someone else\'s,* and that someone else keeps coming to my Temple and *rolling up their sleeves.*', '@celestine:angry Stop it. Stop it right now. I can see your wrists.'] },
    { if: 'celestine_goblin', lines: ['@celestine:surprised I hummed "The Goblin\'s Trousers" during evening prayers. By accident! It\'s been stuck in my head since you — since *you.*', '@celestine:blush The whole choir picked it up. Forty sisters. In harmony. Then the Abbess joined in on the chorus. She knows *all the verses.* Even the ones about the second goblin.'] },
    { if: 'celestine_tree', lines: ['@celestine:happy I climbed another tree! The big oak behind the Temple! I could see the harbor from the top!', '@celestine:blush I got stuck again, obviously. A novice had to fetch a ladder. I told her I was "blessing the upper branches." She asked me to bless her upper branches next week. I think I\'ve started something.'] },
    { if: { stage: 3 }, lines: ['@celestine:sad The sermon is next week. I\'ve rewritten it nine times.', '@celestine:blush Every draft, I find your name in the margins. I don\'t remember writing it. It\'s in my handwriting. There\'s a little heart over the *i* when there isn\'t even an *i.*'] },
  ],
  afterTalk: [
    ["@celestine:smug The Abbess asked why I've been taking such long confessions lately. I told her I've been very *thorough* in my sinning. She laughed for ten minutes."],
    ["She leans close, pretending to bless you.", "@celestine:smug *May the Goddess keep you,*", "@celestine:blush ...and may you come to my room after vespers. That last bit isn't in the liturgy."],
    ["@celestine:happy I climbed the cherry tree again today. And I thought about you the whole time. I nearly fell out. Twice. It was worth it."],
    ["@celestine:smug I've started reading the illustrated scriptures again. For *comparison.* We're doing much better than the illustrations. I've made notes."],
    ["@celestine:surprised The bells rang on their own again last night. The novices are calling it the Miracle of the Midnight Bells. They've started a little shrine.", "@celestine:blush The Abbess asked me, very kindly, whether the miracle might occur a little *earlier* in the evening. Some of the sisters need their sleep."],
    { if: 'celestine_slow', lines: ["@celestine:blush Ever since you kissed me in the bell tower, I've started saying my prayers more slowly. Every word. Like it matters.", "@celestine:smug The Goddess seems to appreciate it. The novices behind me in the queue do *not.*"] },
    { if: 'celestine_forgiven', lines: ["@celestine A woman came to confession today. She'd been carrying something for twenty years. Something small. Something silly. She cried the whole time.", "@celestine:happy I told her there was nothing to forgive. She looked at me like I'd performed a miracle. I didn't. I just remembered how it felt when someone said it to me."] },
    { if: 'celestine_face', lines: ["@celestine:smug I've started saying things to people's faces! Like you told me to! I told the Abbess her soup is too salty.", "@celestine:happy She looked at me over her spectacles for a very long time and then she said, \"*About time.*\" I've never been so frightened or so proud."] },
    { if: 'celestine_date_harbor', lines: ["@celestine:happy I went back to the harbor and put my feet in the sea again. It's still cold. It's still enormous. I still love it.", "@celestine:blush I kept looking beside me for someone with their trousers rolled up. I'm going to need you to come back and stand in the sea with me. For spiritual reasons."] },
  ],
  dateFav: 'picnic',
  dates: {
    dinner: {
      start: {
        text: [
          'Celestine has never been inside the Tipsy Wyvern. She stands in the doorway in her white robes like a candle that has wandered into a coal cellar.',
          'Three adventurers drop to their knees. A dwarf asks her to bless his axe. The barkeep, without a word, removes the dartboard with the picture of the Abbess on it.',
          '@celestine:surprised Everyone is so *loud!* And sticky! Is it always this sticky? Is that ale or is that sin?',
          'She slides into the corner booth across from you, bolt upright, hands folded, and orders a glass of milk. The barmaid brings it with a small paper umbrella.',
          { if: { stage: 4 }, text: 'Under the table, her foot finds yours. She keeps her face perfectly serene. Her ears are bright red.' },
        ],
        choices: [
          { text: 'Order the most decadent thing on the menu: molten chocolate cake, two spoons.', go: 'cake', aff: 5 },
          { text: 'Ask the bard to play something she\'ll recognize.', go: 'bard' },
          { text: 'Teach her a tavern card game.', go: 'cards', aff: 3 },
        ],
      },
      cake: {
        text: [
          'The cake arrives oozing. She stares at it as if it has made her an indecent proposal.',
          '@celestine:blush This looks like something the Abbess would describe as "a temptation of the flesh."',
          'She takes one bite. Her eyes close. She makes a small, devout sound that causes the table next to you to fall silent.',
          '@celestine:happy Oh, I *understand* gluttony now. I understand it *completely.* I have been so unfair to gluttons.',
          'She eats her half, then most of your half, and then she scrapes the plate with the edge of her spoon and says a short prayer over it, of gratitude, or possibly of apology.',
        ],
        next: 'close',
      },
      bard: {
        text: [
          'You slip the bard a coin. He grins and strikes up a familiar, terrible tune. *The Goblin\'s Trousers.*',
          '@celestine:surprised Oh, no. Oh, no, no, no, I can\'t, I\'m a high priestess —',
          'By the second verse, her lips are moving. By the chorus, she is singing. By the verse about the second goblin, she is standing on the bench with a mug of milk, conducting the whole tavern.',
          { if: 'celestine_goblin', text: '@celestine:smug You did this to me! You hummed it in my Temple and it never left! I hope you\'re *proud!*' },
          'When it\'s over, the room bursts into applause. She sits down very quickly, scarlet to the roots of her hair, and hides behind her umbrella.',
        ],
        next: 'close',
      },
      cards: {
        text: [
          'You teach her Knaves and Knights, a game for sailors, cheats and people who lose their wages on purpose.',
          'She wins the first hand. Then the second. Then eleven in a row. A small crowd gathers. A professional gambler sits down, loses his hat and leaves in tears.',
          '@celestine:happy Is this what it\'s like? Sinning? It\'s *very easy!*',
          '@you You\'re not cheating, are you?',
          '@celestine:smug Of course not! I\'m just very good at telling when people are lying. I hear confessions six days a week. Your face does a little thing.',
        ],
        next: 'close',
      },
      close: {
        text: [
          'On the walk home she hums under her breath, swinging your joined hands.',
          '@celestine:blush Thank you for taking me somewhere I\'m not supposed to go. I\'d like to go to *lots* of places I\'m not supposed to go. Not the sewers. But lots of others.',
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          'The Moonlit Gardens of the Noble Quarter are famous for their roses, their fountains and their statues, which are classical, marble and almost entirely undressed.',
          'Celestine was very excited about the roses. She has now been standing in front of a statue of a discus thrower for four minutes.',
          '@celestine:blush It\'s — anatomically very — as a *healer,* I find it professionally — the musculature is very well observed.',
          '@celestine:surprised Is that what knees look like? I\'ve healed hundreds of knees and I don\'t think I\'ve ever *looked* at one.',
        ],
        choices: [
          { text: 'Gently steer her toward the roses by the hand.', go: 'roses', aff: 5 },
          { text: '"I think the statue\'s forearms are better than the baker\'s apprentice\'s."', go: 'tease', if: 'celestine_forearms' },
          { text: '"I think the statue\'s overrated."', go: 'overrated', aff: 3 },
        ],
      },
      roses: {
        text: [
          'She lets you lead her away, glancing back over her shoulder only twice. The rose walk is a tunnel of white and crimson blooms under the moon, so heavy with scent that it is almost like walking through warm water.',
          'Every few steps she stops to touch a petal, and every rose she touches seems to open a little wider.',
          '@celestine:happy I bless the orchards every spring, but I\'ve never just... walked through somewhere beautiful. For no reason. Without praying.',
          { if: { stage: 4 }, text: 'At the end of the walk, where the roses close over into a little arbor, she pulls you in by your collar and kisses you, firmly, while a fountain splashes nearby. She has clearly been planning it since the gate.' },
        ],
        next: 'close',
      },
      tease: {
        text: [
          'She turns around so fast her veil swings.',
          '@celestine:angry You *promised!* You said my secret was safe with you!',
          '@you It is. I\'m only telling you.',
          'She tries to stay angry. She lasts about three seconds before she dissolves into helpless giggles and has to lean on the discus thrower for support.',
          '@celestine:blush ...They *are* better. He\'s marble. It\'s unfair. Nobody\'s apprentice could compete.',
        ],
        aff: 4,
        next: 'close',
      },
      overrated: {
        text: [
          '@celestine:surprised Overrated? He\'s been holding that discus for three hundred years! That\'s *devotion!*',
          'She considers the statue critically. She considers you critically.',
          '@celestine:smug ...Mind you, I\'m not sure *he* would have caught me when I fell out of a tree. He\'d have had to put the discus down.',
        ],
        next: 'close',
      },
      close: {
        text: [
          'On the way out she picks up a fallen rose and tucks it into the clasp of her robe, right over her heart.',
          '@celestine:blush For pressing. In my prayer book. Between the pages that aren\'t prayers.',
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          'Celestine has lived in Clichéton for nine years and has never once walked down to the harbor. "It always seemed so far," she says, which is not true. It is eleven minutes away.',
          'At the end of the pier she stops and looks out at the sea turning gold under the setting sun, and doesn\'t say anything for a long time.',
          '@celestine:surprised It doesn\'t *stop.* It just keeps going. All the way to the sky.',
          'A fisherman recognizes her and, cap in hand, asks if she might bless his boat. She blesses his boat. Then his nets. Then his cat. Then the fried fish in your paper cone, which you are fairly sure is now holy.',
        ],
        choices: [
          { text: 'Roll up your trousers and climb down the ladder into the shallows. Offer her your hand.', go: 'wade', aff: 6 },
          { text: 'Sit on the end of the pier and point out the ships.', go: 'ships', aff: 3 },
        ],
      },
      wade: {
        text: [
          'She looks at your hand. She looks at her long white robes. She looks at the Temple bell tower, far away on the hill.',
          'Then she kicks off her sandals, gathers her skirts in one fist and climbs down after you, squealing when the cold water reaches her ankles.',
          '@celestine:happy It\'s FREEZING! It\'s *alive!* Something touched my foot! Was that a fish? Did I just meet a fish?',
          { if: 'celestine_tree', text: '@celestine:smug First a tree, now the sea. You keep putting me in places where I can see further than I could before.' },
          'You stand in the shallows together while the sun goes down, the hem of her robe soaked through and forgotten, her hand tight in yours.',
        ],
        next: 'close',
      },
      ships: {
        text: [
          'You sit on the end of the pier, legs dangling, and name the ships: the trader from the southern isles, the old whaler, the little pleasure boat that belongs to a merchant\'s son who is very bad at sailing it.',
          '@celestine Where do they all go?',
          '@you Everywhere. Places you\'ve never heard of.',
          '@celestine:sad I\'ve read about places I\'ve never heard of. In books. It\'s not the same, is it? It\'s like reading about the sea.',
          'She leans her head on your shoulder and watches a sail disappear over the edge of the world.',
        ],
        next: 'close',
      },
      close: {
        text: [
          'By the time you walk her back up the hill, the stars are out and her hem has dried stiff with salt.',
          '@celestine:blush I\'m going to have to explain this to the laundress. I\'m going to say I was *baptizing* something.',
          '@celestine:happy ...Me. I was baptizing me.',
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          'Celestine meets you at the edge of Whisperwood with a basket of the Temple\'s bread and a jar of honey from the Temple\'s own hives. She is extremely nervous.',
          '@celestine:sad The Abbess says that every great scandal in the history of the Radiant Heart began with a *picnic.* She was very specific. She had a list.',
          'You find a sunny clearing. She spreads the blanket with great care, then smooths it, then smooths it again, then sits on the very corner of it with her hands in her lap.',
          'An ant crawls onto the blanket. She blesses it. It leaves. Another arrives. She blesses that one too.',
          { if: { stage: 4 }, text: '@celestine:smug ...I suppose, technically, we\'ve already had the scandal. So this is more of a *celebration.*' },
        ],
        choices: [
          { text: 'Lie back and find shapes in the clouds together.', go: 'clouds', aff: 5 },
          { text: 'Teach her to whistle with a blade of grass.', go: 'whistle', aff: 4 },
          { text: 'Suggest a game of "Never Have I Ever."', go: 'never' },
        ],
      },
      clouds: {
        text: [
          'You lie side by side on the blanket and look up through the leaves.',
          '@celestine:happy That one looks like a dove! The holy dove of the Radiant Heart! And that one\'s a harp! And that one is — ',
          'She tilts her head. You tilt your head.',
          '@celestine:surprised ...That one is *not* holy. That one\'s from chapter nine.',
          '@you I don\'t see it.',
          '@celestine:blush Then you haven\'t *read* chapter nine. I could lend it to you. I\'ve got it in my — it\'s in the basket. Under the bread. I don\'t know how it got there.',
        ],
        next: 'close',
      },
      whistle: {
        text: [
          'You stretch a blade of grass between your thumbs and blow. It makes a loud, rude, glorious squawk. A bird falls off a branch.',
          '@celestine:surprised Do it again! No — show me! Show me how!',
          'Her first try produces nothing. Her second, a damp sigh. On the ninth, she produces a shriek so piercing that a deer bolts from the undergrowth and the Temple bells, a mile away, answer with a single startled *bong.*',
          '@celestine:happy I DID IT! I made a *terrible noise!* I\'ve never made a terrible noise in my life! I\'ve been so *quiet!*',
          'She spends the rest of the afternoon practicing. It never gets any better. She is radiant.',
        ],
        next: 'close',
      },
      never: {
        text: [
          '@you Never have I ever... climbed a tree.',
          'She drinks her honey-water. You explain the next round. "Never have I ever kissed someone." She drinks. "Never have I ever been drunk." She does not drink. "Never have I ever stolen anything." She does not drink.',
          '@celestine:smug My turn! Never have I ever... lied to a high priestess about not hearing her prayers.',
          { if: 'celestine_forearms', text: '@celestine:sad Oh. You didn\'t, did you. You told me the truth. About the forearms. That\'s the problem with you. You always tell me the truth.' },
          { if: '!celestine_forearms', text: 'You drink. She looks enormously pleased with herself.' },
          '@celestine:blush This game is very unfair to people who\'ve spent their whole lives being good. I shall have to go and *do* some things, so I have something to drink to next time.',
        ],
        next: 'close',
      },
      close: {
        text: [
          'By the end of the afternoon she has abandoned the corner of the blanket entirely, and is lying with her head in your lap and honey on her fingers, eyes half closed, sun on her face.',
          '@celestine:happy The Abbess was right. This is exactly how scandals start.',
          '@celestine:blush Let\'s have another one next week.',
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'The Temple of the Radiant Heart glows with golden morning light. Before the great statue of the Goddess of Love, a young priestess kneels in prayer: white robes trimmed with gold, platinum-blonde hair under a light veil, a face so gentle it could calm a storm.',
          'As you approach, you hear her whispering, very fast:',
          '@celestine:blush — and forgive me, Goddess, for the thoughts I had about the baker\'s apprentice\'s forearms, and the blacksmith\'s shoulders, and the — that chapter of that *book* — and please give me strength, and *please stop smiling at me like that* —',
          'She looks up and sees you. Her face turns the color of a ripe tomato.',
          '@celestine:surprised Oh! Oh my! Blessings upon you! I didn\'t — how long have you been standing there?',
        ],
        aff: 10,
        choices: [
          { text: '"I just arrived. Didn\'t hear a thing."', go: 'lie' },
          { text: '"Long enough to hear about the forearms."', go: 'truth', flag: 'celestine_forearms' },
          { text: 'Kneel beside her and pray too. [Charm check 1]', check: { stat: 'charm', dc: 1 }, pass: 'pray_win', fail: 'pray_fail' },
        ],
      },
      lie: {
        text: [
          '@celestine:happy Oh, thank the Goddess. Not that there was anything to hear! I was praying about... crops.',
          '@you Forearm crops?',
          '@celestine:angry You said you didn\'t hear anything!',
        ],
        aff: 4,
        next: 'name',
      },
      truth: {
        text: [
          'She makes a sound like a deflating bagpipe and covers her face with her prayer book.',
          '@celestine:sad I am so sorry. I am a high priestess. I am supposed to be pure. I *am* pure! I\'ve never done anything! I just... think. Sometimes. A normal amount!',
          '@you Your secret\'s safe with me.',
          'She peeks over the book with enormous blue eyes.',
          '@celestine:blush ...You\'re not going to tell the Abbess?',
        ],
        aff: 6,
        next: 'name',
      },
      pray_win: {
        text: [
          'You kneel beside her in silence and bow your head. After a moment, she relaxes beside you.',
          'When you both rise, she\'s smiling at you — a soft, radiant smile.',
          '@celestine:happy It\'s so rare that anyone prays with me. They come to ask for things. Healing, blessings, coin. But you just... stayed.',
        ],
        aff: 6,
        flag: 'celestine_prayed',
        next: 'name',
      },
      pray_fail: {
        text: [
          'You kneel beside her. You try to think of a prayer. The only one that comes to mind is a tavern song. You hum a bit of it by accident.',
          'She bites her lip, trying very hard not to giggle. She fails.',
          '@celestine:happy That\'s — that\'s not a hymn — that\'s "The Goblin\'s Trousers" —',
        ],
        aff: 3,
        flag: 'celestine_goblin',
        next: 'name',
      },
      name: {
        text: [
          '@celestine I\'m Sister Celestine, High Priestess of the Radiant Heart. And you are?',
          '@you {name}.',
          '@celestine:happy {name}. Welcome to our Temple. May the Goddess of Love bless you and keep you and — oh, she\'s doing it again.',
          '@you Doing what?',
          '@celestine:blush Never mind! Please come back any time! For spiritual guidance! Purely spiritual!',
          'As you leave, you glance back at the great statue. You could swear that the Goddess is grinning.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Celestine finds you at the Temple gate, bouncing on her toes, a basket of bread over one arm.',
          '@celestine:happy {name}! I\'m going to bless the orchards outside town. It\'s a very long walk. Very boring. Lots of praying. Would you — would you like to come?',
          '@celestine:blush As my escort! For safety! There are wolves! Possibly!',
          'It is a lovely walk. The sun is warm. The orchards are in bloom. Celestine blesses every tree with a little touch and a whispered prayer, and the blossoms seem to glow where she\'s touched them.',
          { if: 'celestine_goblin', text: 'Somewhere around the plum trees, you realize she is humming under her breath between blessings. It is "The Goblin\'s Trousers." She realizes it at the same moment and stops dead, appalled.' },
          'By noon you stop to rest under a cherry tree.',
          '@celestine May I ask you something, {name}? Something personal?',
          '@celestine:sad What is it like? Being... out there? Free? Not having vows?',
        ],
        choices: [
          { text: '"It\'s wonderful. And terrifying. Mostly wonderful."', go: 'wonderful', aff: 6 },
          { text: '"Want to find out? Do one thing today you\'ve never done before."', go: 'dare', aff: 8, flag: 'celestine_tree' },
          { text: '"Do you regret your vows?" [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'regret', fail: 'regret_fail' },
        ],
      },
      wonderful: {
        text: [
          'She hugs her knees and looks up at the blossoms.',
          '@celestine:sad Wonderful and terrifying. That sounds like... like how I imagine falling in love must feel.',
          'She hears herself say it and goes pink.',
          '@celestine:blush Hypothetically! From what I\'ve read! In scripture!',
        ],
        next: 'blossom',
      },
      dare: {
        text: [
          'She considers it very seriously.',
          '@celestine Something I\'ve never done...',
          'She looks around. Nobody is watching. And then she takes off her shoes, hitches up her robes, and climbs the cherry tree. All the way to the top.',
          '@celestine:happy I\'VE NEVER CLIMBED A TREE! THIS IS AMAZING! I CAN SEE THE WHOLE TOWN! I CAN SEE THE ABBESS\'S HOUSE! SHE\'S HANGING UP HER UNDERTHINGS!',
          'She gets stuck coming down, of course. You have to catch her. She lands in your arms, laughing, blossoms in her hair.',
        ],
        next: 'blossom',
      },
      regret: {
        text: [
          'She\'s quiet for a long moment, fiddling with the bread.',
          '@celestine:sad No. I love serving the Goddess. I love healing people. But I joined when I was very young, and sometimes I feel like I never got to find out who I was *before* I decided who I\'d be.',
          '@celestine Does that make sense?',
          '@you It makes perfect sense. And for what it\'s worth, I like who you are.',
          'She looks at you like you\'ve just performed a miracle.',
        ],
        aff: 10,
        flag: 'celestine_regret',
        next: 'blossom',
      },
      regret_fail: {
        text: [
          '@you Do you, like... hate being a nun?',
          '@celestine:surprised Priestess! And no! Of course not! ...Mostly not!',
          'She laughs, a little flustered.',
        ],
        aff: 3,
        next: 'blossom',
      },
      blossom: {
        text: [
          'A gust of wind sends cherry blossoms swirling around you both. One lands on her nose. She goes cross-eyed looking at it.',
          'You reach out and brush it away. Your fingers linger on her cheek for just a second too long.',
          'She doesn\'t move. She\'s barely breathing.',
          '@celestine:blush ...We should — we should go bless the pear trees now.',
          'She says it. She doesn\'t move. Neither do you. Eventually, very slowly, she leans her head against your shoulder, and the two of you sit under the cherry tree until the bells ring for vespers.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'It\'s raining when Celestine finds you, soaked, her veil plastered to her head. She looks frantic.',
          '@celestine:surprised {name}! I need your help! A plague of — of — *sinfulness* — no, that\'s not —',
          'She takes a deep breath.',
          '@celestine:sad The Harvest Festival is in a week and the Abbess wants me to give the sermon. On *love.* In front of the whole congregation. And I don\'t know *anything* about love! I only know scripture! I\'ve never been — I\'ve never had —',
          '@celestine You have to help me understand it! Please!',
          { if: 'celestine_regret', text: '@celestine:blush You told me you like who I am. Under the cherry tree. I\'ve been thinking about it every day since. That\'s — that\'s part of the problem, actually.' },
        ],
        choices: [
          { text: '"Love isn\'t something you learn from books. It\'s something you feel."', go: 'feel', aff: 7 },
          { text: 'Help her write the sermon, line by line. [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'write', fail: 'write_fail' },
        ],
      },
      feel: {
        text: [
          '@celestine Then how do I *feel* it? Is there a ritual? A prayer?',
          '@you Tell me what you think about when you can\'t sleep.',
          'She opens her mouth to answer. Closes it. Her eyes go to you, and then quickly away, and her whole face floods with color.',
          '@celestine:surprised ...Oh. Oh no. Oh, Goddess, *no.*',
        ],
        next: 'confession',
      },
      write: {
        text: [
          'You sit together in the Temple library, candles burning, and you help her shape it. Not scripture — stories. The old couple who\'ve been married fifty years. The mother who walked three days to the Temple for her sick child. The way people look at each other when they think no one\'s watching.',
          '@celestine:surprised That\'s... that\'s love, isn\'t it? Not the illustrated scriptures. Just — *noticing* someone. Choosing them, every day.',
          'She looks up at you. Her quill has stopped moving.',
          '@celestine:blush I think I understand now. I think I\'ve understood for a while.',
        ],
        aff: 10,
        flag: 'celestine_sermon',
        next: 'confession',
      },
      write_fail: {
        text: [
          'You try to help. Your first suggestion is "start with a joke." Your second is "the Goblin\'s Trousers, but holy." She giggles so hard she has to put the quill down.',
          '@celestine:happy You\'re terrible at this! You\'re so terrible! ...Thank you. I needed to laugh.',
        ],
        aff: 5,
        flag: 'celestine_goblin',
        next: 'confession',
      },
      confession: {
        text: [
          'She sets down her quill. She stands. She walks to the confession booth at the side of the chapel, steps inside, and closes the curtain.',
          '@celestine:blush Would you — would you sit on the other side? Please?',
          'You sit. Through the lattice, you can see her silhouette, hands clasped tight.',
          { if: 'celestine_tree', text: '@celestine Forgive me, for I have... feelings. For a person. A very particular person who brings me candles and makes me laugh and caught me when I fell out of a cherry tree.', else: '@celestine Forgive me, for I have... feelings. For a person. A very particular person who brings me candles and makes me laugh and sat with me under a cherry tree until the vespers bells.' },
          { if: 'celestine_forearms', text: '@celestine:sad A person who has *very good forearms,* which is not relevant, and I don\'t know why I said it, and I\'ll be confessing that separately.' },
          '@celestine:sad And I don\'t know if it\'s a sin. The scriptures say love is holy. But the Abbess says priestesses must be pure. And I don\'t know if being in love with you makes me *less* holy or *more.*',
          'A long silence.',
          '@celestine ...What penance do you assign me, confessor?',
        ],
        choices: [
          { text: '"Say it to my face."', go: 'face', aff: 10, flag: 'celestine_face' },
          { text: '"No penance. There\'s nothing to forgive."', go: 'forgive', aff: 10, flag: 'celestine_forgiven' },
        ],
      },
      face: {
        text: [
          'The curtain on her side twitches. Then she steps out, and you step out, and there she is in front of you, shaking.',
          '@celestine:blush I\'m... I\'m in love with you, {name}.',
          'She says it in a whisper. Then she says it again, louder, like testing a bell.',
          '@celestine:happy I\'m in love with you.',
          'And then she grabs your face in both hands and kisses you, quick and fierce and inexpert, right there in the chapel, under the gaze of the Goddess. She pulls back looking utterly astonished at herself.',
          '@celestine:surprised I — that was — the Goddess didn\'t strike me down!',
          'Behind her, the statue of the Goddess of Love definitely, absolutely winks.',
        ],
        end: true,
      },
      forgive: {
        text: [
          'Silence. Then a small, wet sound — she\'s crying, but when she pulls the curtain aside, she\'s smiling through it.',
          '@celestine:sad No one has ever told me that. My whole life, I\'ve been confessing things. Little things. Silly things. And no one has ever said *there\'s nothing to forgive.*',
          'She reaches through the lattice and laces her fingers with yours.',
          '@celestine:happy Thank you, confessor.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'The sermon is a triumph. The congregation weeps. The Abbess, astonishingly, weeps too. Afterward, while everyone is feasting in the hall, Celestine catches your hand and pulls you up a narrow staircase to the bell tower.',
          { if: 'celestine_sermon', text: 'You recognize every story in it. The old couple. The mother on the road. The way people look at each other when no one is watching. When she reached that part, she looked straight at you over the heads of four hundred people and lost her place for a full ten seconds.' },
          { if: ['!celestine_sermon', 'celestine_goblin'], text: 'She opened with a joke. It was your joke. It was a terrible joke. It brought the house down, and four hundred people spent the rest of the sermon trying not to hum "The Goblin\'s Trousers."' },
          'Up here, there\'s only moonlight, the great silent bells, and the two of you.',
          '@celestine I went to the Abbess this morning. I told her everything. About you. About how I feel.',
          '@you What did she say?',
          '@celestine:smug She laughed. She said, "Child, our Goddess is the Goddess of *Love.* Did you think she wanted us all to be lonely?" She said the vow of purity was written by a very grumpy abbot four hundred years ago and nobody\'s actually enforced it since.',
          '@celestine:angry Four hundred years! I\'ve been *reading the illustrated scriptures in secret* for nothing!',
          'She steps closer, trembling a little, and takes off her veil. Her long platinum hair spills down her back like moonlight.',
          { if: 'celestine_face', text: '@celestine:blush You told me to say it to your face. So I\'m going to say *this* to your face, too.' },
          '@celestine:blush I\'ve been good my whole life, {name}. I\'d like to be... a little bit *wicked.* Just with you.',
        ],
        choices: [
          { text: '"Are you sure, Celestine?"', go: 'sure', aff: 10 },
          { text: 'Brush her hair back and kiss her slowly. [Charm check 4]', check: { stat: 'charm', dc: 4 }, pass: 'slow', fail: 'sure' },
        ],
      },
      sure: {
        text: [
          '@celestine:smug I have never been more sure of anything. Not even of the Goddess. And I\'m *very* sure of the Goddess. She keeps winking at me.',
        ],
        next: 'night',
      },
      slow: {
        text: [
          'You tuck a strand of silver-gold hair behind her ear and kiss her slowly, unhurried, like a prayer. She melts against you with a soft sigh.',
          '@celestine:surprised Oh. Oh, *that\'s* what chapter nine meant.',
        ],
        aff: 14,
        flag: 'celestine_slow',
        next: 'night',
      },
      night: {
        text: [
          "Her room in the Temple is small and simple: a narrow bed, a window full of stars, a single Blessed Candle burning on the sill. She sits on the edge of the bed and fumbles with the clasps of her robes, then laughs nervously and gives up.",
          "@celestine:blush I can't — my hands won't — would you? Please?",
          "You undo the clasps one by one. Each one seems to take a year. Beneath the stiff white robes is a simple linen shift, and beneath that the soft, warm, freckled skin of a woman who has spent her whole life being told it should never be seen.",
          "@celestine The illustrated scriptures don't... they don't say what it *feels* like. Being looked at like that.",
          "@you How does it feel?",
          "@celestine:happy Like being *blessed.*",
          "She pulls you down onto the narrow bed. She's shy for exactly one minute, then wonderfully, hilariously enthusiastic, then overwhelmed in a way that makes her gasp prayers that are definitely not in any hymnal. Your mouth travels down her throat, and she grips the sheets and whispers *oh, Goddess*, then claps a hand over her mouth, scandalized. You both collapse into giggles.",
          "@celestine:smug Don't stop. I'll confess it all tomorrow. *Every* bit of it. In great detail.",
          "Outside, the Temple bells begin to ring on their own, softly, for no reason anyone will ever explain...",
          "...",
          "Much later, she lies in your arms in the narrow bed, hair spilling silver-gold across the pillow, watching the candle burn down.",
          "@celestine:sad I always thought love was something you gave away. To the poor, the sick, the Goddess. I never knew you could *receive* it like that.",
          { if: 'celestine_regret', text: "@celestine:blush I told you once I never found out who I was before I decided who I'd be. I think I've found out a little bit tonight. She's very loud. I like her." },
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "The dawn bell wakes you. Celestine is already up, kneeling at the little altar under her window in nothing but a sheet, hands clasped, murmuring.",
          "@celestine:blush — and I'd like to confess to the second time, and the part with the — and the third time, which was my idea, and I'm not sorry, Goddess, I'm *really* not sorry —",
          { if: 'celestine_slow', text: "@celestine:smug — and the slow kiss in the bell tower, which I would like noted was *better than chapter nine,* and I've read chapter nine *a lot* —" },
          "She notices you watching. She turns the color of a sunrise.",
          "@celestine:surprised Good morning! I'm — I'm doing my morning confession. It's taking a little longer than usual.",
          "@celestine:smug The statue in the chapel was smiling at me this morning. *Grinning,* really. I think she knows.",
        ],
        choices: [
          { text: "\"Want me to confess too? I have plenty to add.\"", go: "confess", aff: 6 },
          { text: "\"Come back to bed. You can confess this part later.\"", go: "bed", aff: 6 },
          { text: "\"How do you feel?\"", go: "feel", aff: 5 },
          { text: "Kneel beside her at the altar and pray with her, quietly, like the first day.", go: "pray", aff: 6, if: 'celestine_prayed' },
        ],
      },
      confess: {
        text: [
          "@celestine:surprised You — no! You'll make it worse! You'll add *details!*",
          "You kneel beside her at the altar and begin, very solemnly: *Forgive me, Goddess, for last night I kissed your High Priestess on the —*",
          "She tackles you before you can finish. You both end up on the floor, laughing, tangled in the sheet. Somewhere in the Temple, a bell rings once, as if in approval.",
        ],
        end: true,
      },
      bed: {
        text: [
          "She looks at the altar. She looks at you. She looks at the altar again.",
          "@celestine:blush The Goddess of *Love* would want me to... prioritize. Wouldn't she?",
          "She's back under the covers before you can answer. The morning prayers start forty minutes late. The Abbess, passing in the corridor, simply sighs and smiles.",
        ],
        end: true,
      },
      feel: {
        text: [
          "She thinks about it seriously, the way she thinks about everything.",
          "@celestine:happy Like I've been reading about the sea my whole life. And then someone finally took me to the beach.",
          "@celestine:smug ...And then the sea took me *back to bed* several times.",
          "She covers her face with her hands, horrified at her own joke. You laugh so hard that the Abbess knocks on the door to ask if everything is all right.",
        ],
        end: true,
      },
      pray: {
        text: [
          "You kneel beside her in the dawn light and bow your head, and say nothing at all. After a moment she stops murmuring. Her shoulder leans against yours.",
          "@celestine:sad You did this the very first day. Everyone else came to ask for something. You just stayed.",
          "@celestine:happy You're still staying.",
          "The two of you kneel there until the candle on the sill gutters out, and the Temple wakes up around you, and it is the most peaceful morning prayer she has said in nine years. It is also the first one she has said in a bedsheet.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Celestine finds you on the festival hill, in a simple white dress with no veil at all. Her hair is braided with gold ribbon. She carries a Blessed Candle in a little lantern.',
          '@celestine:smug The Abbess gave me the night off. She said, and I quote, "Go watch the stars with your sweetheart, and for the Goddess\'s sake, *kiss them.*"',
          { if: 'celestine_goblin', text: 'Somewhere down the hill, a choir of novices is singing "The Goblin\'s Trousers" in four-part harmony. Celestine winces. Celestine also, very quietly, sings along.' },
          'You find a spot among the crowd. She tucks herself under your arm. When the stars begin to fall, she clasps her hands and whispers a prayer.',
        ],
        next: 'prayer',
      },
      prayer: {
        text: [
          '@you What did you pray for?',
          '@celestine:happy I didn\'t pray *for* anything. I said *thank you.*',
          '@celestine:blush For you. For this. For finding out who I am, after all this time. It turns out I\'m someone who climbs trees, and laughs too loud, and is very, very much in love.',
          'She lifts her face, and you kiss her under the falling stars. The candle in the lantern flares bright gold, all on its own.',
          'Somewhere, very far away, a goddess sighs happily into a bowl of popcorn.',
        ],
        next: 'which',
      },
      which: {
        branch: [
          { if: ['celestine_tree', 'celestine_face'], go: 'pilgrim' },
          { if: ['celestine_prayed', 'celestine_forgiven'], go: 'abbess' },
          { go: 'epilogue' },
        ],
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'Celestine performs your wedding herself. The Abbess points out that this is extremely irregular. Celestine points out that she is the High Priestess and can bless anything she wants. The Abbess concedes the point and cries through the whole ceremony.',
          'She still rises at dawn for prayers. She still feeds the poor and heals the sick and blesses the occasional goat. But now she comes home every night to a little cottage near the Temple orchards, where a cherry tree grows outside the bedroom window.',
          'She climbs it sometimes, just because she can.',
          { if: 'celestine_forgiven', text: 'Her sermons on love become famous across the kingdom. People travel for miles to hear them. And every one of them, somewhere in the middle, includes a story about a confession booth, a cherry tree, and a person who told her there was nothing to forgive.', else: 'Her sermons on love become famous across the kingdom. People travel for miles to hear them. And every one of them, somewhere in the middle, includes a story about a confession booth, a cherry tree, and a person who asked her to say it to their face.' },
        ],
        ending: 'celestine',
      },
      abbess: {
        text: [
          'When the last star has fallen, an old woman in gray climbs the hill toward you, leaning on a stick. It is the Abbess. She has never been seen outside the Temple after dark.',
          'She looks at Celestine for a long time over her spectacles. Then she takes the silver key from around her own neck and hangs it around Celestine\'s.',
          '@celestine:surprised Mother? What — this is the — I can\'t —',
          'The Abbess only pats her cheek, nods at you once, and goes back down the hill to bed.',
          '*Some time later...*',
          'Mother Celestine, Abbess of the Radiant Heart, is the youngest in four hundred years. Her first act is to find the grumpy abbot\'s vow of purity in the archives and rewrite it. It now reads, in its entirety: *Thou shalt not be lonely.* Her second act is to marry you, on the steps of the Temple, with the whole town watching and the statue of the Goddess positively beaming.',
          'She takes the Temple further into the world than it has ever been. The doors stay open all night. Anyone can come and sit in the candlelight, to pray or not, to talk or not. Nobody who comes is asked what they want. They are simply allowed to stay.',
          'She still prays every dawn. You still kneel beside her, more mornings than not, saying nothing, because that is what you did the very first day, and she has never once forgotten it.',
          'In the confession booths, the novices are taught one rule above all the others. When someone has carried something small and silly for far too long, you tell them the truth: *there is nothing to forgive.*',
          'And at night, behind the locked door of the Abbess\'s chambers, the most devout woman in FantasyLandia is not very devout at all. The bells ring on their own about twice a week. The novices have stopped asking.',
          '@celestine:smug Holiness is just love, paying attention. I\'m *extremely* attentive.',
        ],
        ending: 'celestine_abbess',
      },
      pilgrim: {
        text: [
          'When the last star has fallen, she reaches up and pulls the gold ribbon out of her braid, and lets it go on the wind.',
          '@celestine:happy {name}. I want to climb every tree. Not just the ones near the Temple. *Every* tree.',
          '@you That\'s a lot of trees.',
          '@celestine:smug Then we\'d better start early.',
          '*Some time later...*',
          'She leaves the Temple at sunrise a week later, in boots and a traveling cloak, with a pack full of bandages and a prayer book with no prayers in it at all, only blank pages. The Abbess walks her to the town gate and gives her a small purse and a long list of things she is not to do. Celestine does most of them within the month.',
          'You walk the whole kingdom together. She heals in villages that have never had a healer. She marries farmers at crossroads and blesses ships in harbors she cannot pronounce. She learns to swim, to haggle, to sleep on the ground, to eat food she cannot identify, to lose at cards on purpose so other people can win. She climbs trees on mountainsides and trees in deserts and one tree in the far south so tall that she can see the curve of the world from the top, and shouts it down to you, and gets stuck, and you catch her.',
          'Every month she writes the Abbess a letter, with a section at the end headed *Confessions.* The Abbess reads them aloud to the novices, heavily abridged. The novices beg for the unabridged ones. The Abbess keeps those in a locked drawer and reads them alone, laughing.',
          'One evening, on a beach at the far end of the world, she sits with her feet in the sea and fills in the very last blank page in her book.',
          '@celestine:blush I used to wonder who I was before I decided who I\'d be. I don\'t wonder now. I\'m someone who wants to see *everything.*',
          '@celestine:happy And I want to see it all with you.',
        ],
        ending: 'celestine_pilgrim',
      },
    },
  },
});
