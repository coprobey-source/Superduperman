FL.addCharacter({
  id: 'celestine',
  name: 'Sister Celestine',
  short: 'Celestine',
  trope: 'Pure Priestess (Secretly Curious)',
  color: '#f2e6a8',
  favStat: 'charm',
  endingTitle: 'A Blessing of Our Own',
  teaser: 'A priestess in white and gold prays before the altar. Her lips are moving very fast. She is blushing.',
  blurb: 'The Temple\'s youngest high priestess: radiant, gentle, devout, beloved by all. She has never broken a single vow. She has also, lately, been having some very un-priestly thoughts, and would like the Goddess of Love to please stop smirking about it.',
  schedule: ['temple', 'temple', ['temple', 'square']],
  gifts: { love: ['candle'], like: ['novel', 'cakes', 'roses', 'tea'], hate: ['wine', 'dagger'] },
  giftLines: {
    love: ['She cradles it like a newborn.', '@celestine A Blessed Candle! Oh, it\'s been sanctified by the High Altar! I\'ll light it at evening prayers and think of — of the *Goddess.* Exclusively. Yes.'],
    like: '@celestine Oh, how kind! The Goddess teaches us that gifts given freely are the purest form of love. Not *love* love! Holy love! The regular kind! Oh dear.',
    neutral: '@celestine Thank you, my friend! I shall donate it to the poor! ...Unless you\'d rather I kept it? I could keep it.',
    hate: ['She takes a step back, hands clasped.', '@celestine Oh — no, I couldn\'t possibly — Sisters of the Radiant Heart are forbidden such things. I\'m sorry. I\'ll... say a prayer for you.'],
  },
  talk: [
    ['@celestine Blessings upon you, {name}! Have you come to pray? Or confess? We have very comfortable confession booths. ...Not that you have anything to confess! Do you?'],
    ['@celestine I rose at four this morning for dawn prayers! Then I fed the poor, healed six people, and blessed a goat. It was a wonderful day. The goat bit me.'],
    ['@celestine The Goddess of Love is our patron. Her teachings are... um... very *thorough.* Some of the scriptures are... illustrated. I\'m told it\'s symbolic.'],
    ['She drops her prayer book. Several loose pages flutter out. You catch a glimpse of one titled *The Duke\'s Forbidden Passion, Chapter Nine.*', '@celestine THAT\'S CONFISCATED. I CONFISCATED IT. FROM A SINNER. I WAS READING IT TO UNDERSTAND THE SIN.'],
    ['@celestine Sometimes I wonder what life would be like if I hadn\'t joined the Temple at sixteen. ...But then I remember how much good I do here. And then I wonder again.'],
    ['@celestine You have kind eyes. Did you know that? The Goddess says the eyes are windows to the soul. Yours are very... open windows. I\'m going to go pray now.'],
  ],
  afterTalk: [
    ["@celestine The Abbess asked why I've been taking such long confessions lately. I told her I've been very *thorough* in my sinning. She laughed for ten minutes."],
    ["She leans close, pretending to bless you.", "@celestine *May the Goddess keep you,*" , "@celestine ...and may you come to my room after vespers. That last bit isn't in the liturgy."],
    ["@celestine I climbed the cherry tree again today. And I thought about you the whole time. I nearly fell out. Twice. It was worth it."],
    ["@celestine I've started reading the illustrated scriptures again. For *comparison.* We're doing much better than the illustrations. I've made notes."],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'The Temple of the Radiant Heart glows with golden morning light. Before the great statue of the Goddess of Love, a young priestess kneels in prayer: white robes trimmed with gold, platinum-blonde hair under a light veil, a face so gentle it could calm a storm.',
          'As you approach, you hear her whispering, very fast:',
          '@celestine — and forgive me, Goddess, for the thoughts I had about the baker\'s apprentice\'s forearms, and the blacksmith\'s shoulders, and the — that chapter of that *book* — and please give me strength, and *please stop smiling at me like that* —',
          'She looks up and sees you. Her face turns the color of a ripe tomato.',
          '@celestine Oh! Oh my! Blessings upon you! I didn\'t — how long have you been standing there?',
        ],
        aff: 10,
        choices: [
          { text: '"I just arrived. Didn\'t hear a thing."', go: 'lie' },
          { text: '"Long enough to hear about the forearms."', go: 'truth' },
          { text: 'Kneel beside her and pray too. [Charm check 1]', check: { stat: 'charm', dc: 1 }, pass: 'pray_win', fail: 'pray_fail' },
        ],
      },
      lie: {
        text: [
          '@celestine Oh, thank the Goddess. Not that there was anything to hear! I was praying about... crops.',
          '@you Forearm crops?',
          '@celestine You said you didn\'t hear anything!',
        ],
        aff: 4,
        next: 'name',
      },
      truth: {
        text: [
          'She makes a sound like a deflating bagpipe and covers her face with her prayer book.',
          '@celestine I am so sorry. I am a high priestess. I am supposed to be pure. I *am* pure! I\'ve never done anything! I just... think. Sometimes. A normal amount!',
          '@you Your secret\'s safe with me.',
          'She peeks over the book with enormous blue eyes.',
          '@celestine ...You\'re not going to tell the Abbess?',
        ],
        aff: 6,
        next: 'name',
      },
      pray_win: {
        text: [
          'You kneel beside her in silence and bow your head. After a moment, she relaxes beside you.',
          'When you both rise, she\'s smiling at you — a soft, radiant smile.',
          '@celestine It\'s so rare that anyone prays with me. They come to ask for things. Healing, blessings, coin. But you just... stayed.',
        ],
        aff: 6,
        next: 'name',
      },
      pray_fail: {
        text: [
          'You kneel beside her. You try to think of a prayer. The only one that comes to mind is a tavern song. You hum a bit of it by accident.',
          'She bites her lip, trying very hard not to giggle. She fails.',
          '@celestine That\'s — that\'s not a hymn — that\'s "The Goblin\'s Trousers" —',
        ],
        aff: 3,
        next: 'name',
      },
      name: {
        text: [
          '@celestine I\'m Sister Celestine, High Priestess of the Radiant Heart. And you are?',
          '@you {name}.',
          '@celestine {name}. Welcome to our Temple. May the Goddess of Love bless you and keep you and — oh, she\'s doing it again.',
          '@you Doing what?',
          '@celestine Never mind! Please come back any time! For spiritual guidance! Purely spiritual!',
          'As you leave, you glance back at the great statue. You could swear that the Goddess is grinning.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Celestine finds you at the Temple gate, bouncing on her toes, a basket of bread over one arm.',
          '@celestine {name}! I\'m going to bless the orchards outside town. It\'s a very long walk. Very boring. Lots of praying. Would you — would you like to come?',
          '@celestine As my escort! For safety! There are wolves! Possibly!',
          'It is a lovely walk. The sun is warm. The orchards are in bloom. Celestine blesses every tree with a little touch and a whispered prayer, and the blossoms seem to glow where she\'s touched them.',
          'By noon you stop to rest under a cherry tree.',
          '@celestine May I ask you something, {name}? Something personal?',
          '@celestine What is it like? Being... out there? Free? Not having vows?',
        ],
        choices: [
          { text: '"It\'s wonderful. And terrifying. Mostly wonderful."', go: 'wonderful', aff: 6 },
          { text: '"Want to find out? Do one thing today you\'ve never done before."', go: 'dare', aff: 8 },
          { text: '"Do you regret your vows?" [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'regret', fail: 'regret_fail' },
        ],
      },
      wonderful: {
        text: [
          'She hugs her knees and looks up at the blossoms.',
          '@celestine Wonderful and terrifying. That sounds like... like how I imagine falling in love must feel.',
          'She hears herself say it and goes pink.',
          '@celestine Hypothetically! From what I\'ve read! In scripture!',
        ],
        next: 'blossom',
      },
      dare: {
        text: [
          'She considers it very seriously.',
          '@celestine Something I\'ve never done...',
          'She looks around. Nobody is watching. And then she takes off her shoes, hitches up her robes, and climbs the cherry tree. All the way to the top.',
          '@celestine I\'VE NEVER CLIMBED A TREE! THIS IS AMAZING! I CAN SEE THE WHOLE TOWN! I CAN SEE THE ABBESS\'S HOUSE! SHE\'S HANGING UP HER UNDERTHINGS!',
          'She gets stuck coming down, of course. You have to catch her. She lands in your arms, laughing, blossoms in her hair.',
        ],
        next: 'blossom',
      },
      regret: {
        text: [
          'She\'s quiet for a long moment, fiddling with the bread.',
          '@celestine No. I love serving the Goddess. I love healing people. But I joined when I was very young, and sometimes I feel like I never got to find out who I was *before* I decided who I\'d be.',
          '@celestine Does that make sense?',
          '@you It makes perfect sense. And for what it\'s worth, I like who you are.',
          'She looks at you like you\'ve just performed a miracle.',
        ],
        aff: 10,
        next: 'blossom',
      },
      regret_fail: {
        text: [
          '@you Do you, like... hate being a nun?',
          '@celestine Priestess! And no! Of course not! ...Mostly not!',
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
          '@celestine ...We should — we should go bless the pear trees now.',
          'She says it. She doesn\'t move. Neither do you. Eventually, very slowly, she leans her head against your shoulder, and the two of you sit under the cherry tree until the bells ring for vespers.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'It\'s raining when Celestine finds you, soaked, her veil plastered to her head. She looks frantic.',
          '@celestine {name}! I need your help! A plague of — of — *sinfulness* — no, that\'s not —',
          'She takes a deep breath.',
          '@celestine The Harvest Festival is in a week and the Abbess wants me to give the sermon. On *love.* In front of the whole congregation. And I don\'t know *anything* about love! I only know scripture! I\'ve never been — I\'ve never had —',
          '@celestine You have to help me understand it! Please!',
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
          '@celestine ...Oh. Oh no. Oh, Goddess, *no.*',
        ],
        next: 'confession',
      },
      write: {
        text: [
          'You sit together in the Temple library, candles burning, and you help her shape it. Not scripture — stories. The old couple who\'ve been married fifty years. The mother who walked three days to the Temple for her sick child. The way people look at each other when they think no one\'s watching.',
          '@celestine That\'s... that\'s love, isn\'t it? Not the illustrated scriptures. Just — *noticing* someone. Choosing them, every day.',
          'She looks up at you. Her quill has stopped moving.',
          '@celestine I think I understand now. I think I\'ve understood for a while.',
        ],
        aff: 10,
        next: 'confession',
      },
      write_fail: {
        text: [
          'You try to help. Your first suggestion is "start with a joke." Your second is "the Goblin\'s Trousers, but holy." She giggles so hard she has to put the quill down.',
          '@celestine You\'re terrible at this! You\'re so terrible! ...Thank you. I needed to laugh.',
        ],
        aff: 5,
        next: 'confession',
      },
      confession: {
        text: [
          'She sets down her quill. She stands. She walks to the confession booth at the side of the chapel, steps inside, and closes the curtain.',
          '@celestine Would you — would you sit on the other side? Please?',
          'You sit. Through the lattice, you can see her silhouette, hands clasped tight.',
          '@celestine Forgive me, for I have... feelings. For a person. A very particular person who brings me candles and makes me laugh and caught me when I fell out of a cherry tree.',
          '@celestine And I don\'t know if it\'s a sin. The scriptures say love is holy. But the Abbess says priestesses must be pure. And I don\'t know if being in love with you makes me *less* holy or *more.*',
          'A long silence.',
          '@celestine ...What penance do you assign me, confessor?',
        ],
        choices: [
          { text: '"Say it to my face."', go: 'face', aff: 10 },
          { text: '"No penance. There\'s nothing to forgive."', go: 'forgive', aff: 10 },
        ],
      },
      face: {
        text: [
          'The curtain on her side twitches. Then she steps out, and you step out, and there she is in front of you, shaking.',
          '@celestine I\'m... I\'m in love with you, {name}.',
          'She says it in a whisper. Then she says it again, louder, like testing a bell.',
          '@celestine I\'m in love with you.',
          'And then she grabs your face in both hands and kisses you, quick and fierce and inexpert, right there in the chapel, under the gaze of the Goddess. She pulls back looking utterly astonished at herself.',
          '@celestine I — that was — the Goddess didn\'t strike me down!',
          'Behind her, the statue of the Goddess of Love definitely, absolutely winks.',
        ],
        end: true,
      },
      forgive: {
        text: [
          'Silence. Then a small, wet sound — she\'s crying, but when she pulls the curtain aside, she\'s smiling through it.',
          '@celestine No one has ever told me that. My whole life, I\'ve been confessing things. Little things. Silly things. And no one has ever said *there\'s nothing to forgive.*',
          'She reaches through the lattice and laces her fingers with yours.',
          '@celestine Thank you, confessor.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'The sermon is a triumph. The congregation weeps. The Abbess, astonishingly, weeps too. Afterward, while everyone is feasting in the hall, Celestine catches your hand and pulls you up a narrow staircase to the bell tower.',
          'Up here, there\'s only moonlight, the great silent bells, and the two of you.',
          '@celestine I went to the Abbess this morning. I told her everything. About you. About how I feel.',
          '@you What did she say?',
          '@celestine She laughed. She said, "Child, our Goddess is the Goddess of *Love.* Did you think she wanted us all to be lonely?" She said the vow of purity was written by a very grumpy abbot four hundred years ago and nobody\'s actually enforced it since.',
          '@celestine Four hundred years! I\'ve been *reading the illustrated scriptures in secret* for nothing!',
          'She steps closer, trembling a little, and takes off her veil. Her long platinum hair spills down her back like moonlight.',
          '@celestine I\'ve been good my whole life, {name}. I\'d like to be... a little bit *wicked.* Just with you.',
        ],
        choices: [
          { text: '"Are you sure, Celestine?"', go: 'sure', aff: 10 },
          { text: 'Brush her hair back and kiss her slowly. [Charm check 4]', check: { stat: 'charm', dc: 4 }, pass: 'slow', fail: 'sure' },
        ],
      },
      sure: {
        text: [
          '@celestine I have never been more sure of anything. Not even of the Goddess. And I\'m *very* sure of the Goddess. She keeps winking at me.',
        ],
        next: 'night',
      },
      slow: {
        text: [
          'You tuck a strand of silver-gold hair behind her ear and kiss her slowly, unhurried, like a prayer. She melts against you with a soft sigh.',
          '@celestine Oh. Oh, *that\'s* what chapter nine meant.',
        ],
        aff: 14,
        next: 'night',
      },
      night: {
        text: [
          "Her room in the Temple is small and simple: a narrow bed, a window full of stars, a single Blessed Candle burning on the sill. She sits on the edge of the bed and fumbles with the clasps of her robes, then laughs nervously and gives up.",
          "@celestine I can't — my hands won't — would you? Please?",
          "You undo the clasps one by one. Each one seems to take a year. Beneath the stiff white robes is a simple linen shift, and beneath that the soft, warm, freckled skin of a woman who has spent her whole life being told it should never be seen.",
          "@celestine The illustrated scriptures don't... they don't say what it *feels* like. Being looked at like that.",
          "@you How does it feel?",
          "@celestine Like being *blessed.*",
          "She pulls you down onto the narrow bed. She's shy for exactly one minute, then wonderfully, hilariously enthusiastic, then overwhelmed in a way that makes her gasp prayers that are definitely not in any hymnal. Your mouth travels down her throat, and she grips the sheets and whispers *oh, Goddess*, then claps a hand over her mouth, scandalized. You both collapse into giggles.",
          "@celestine Don't stop. I'll confess it all tomorrow. *Every* bit of it. In great detail.",
          "Outside, the Temple bells begin to ring on their own, softly, for no reason anyone will ever explain...",
          "...",
          "Much later, she lies in your arms in the narrow bed, hair spilling silver-gold across the pillow, watching the candle burn down.",
          "@celestine I always thought love was something you gave away. To the poor, the sick, the Goddess. I never knew you could *receive* it like that.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "The dawn bell wakes you. Celestine is already up, kneeling at the little altar under her window in nothing but a sheet, hands clasped, murmuring.",
          "@celestine — and I'd like to confess to the second time, and the part with the — and the third time, which was my idea, and I'm not sorry, Goddess, I'm *really* not sorry —",
          "She notices you watching. She turns the color of a sunrise.",
          "@celestine Good morning! I'm — I'm doing my morning confession. It's taking a little longer than usual.",
          "@celestine The statue in the chapel was smiling at me this morning. *Grinning,* really. I think she knows.",
        ],
        choices: [
          { text: "\"Want me to confess too? I have plenty to add.\"", go: "confess", aff: 6 },
          { text: "\"Come back to bed. You can confess this part later.\"", go: "bed", aff: 6 },
          { text: "\"How do you feel?\"", go: "feel", aff: 5 },
        ],
      },
      confess: {
        text: [
          "@celestine You — no! You'll make it worse! You'll add *details!*",
          "You kneel beside her at the altar and begin, very solemnly: *Forgive me, Goddess, for last night I kissed your High Priestess on the —*",
          "She tackles you before you can finish. You both end up on the floor, laughing, tangled in the sheet. Somewhere in the Temple, a bell rings once, as if in approval.",
        ],
        end: true,
      },
      bed: {
        text: [
          "She looks at the altar. She looks at you. She looks at the altar again.",
          "@celestine The Goddess of *Love* would want me to... prioritize. Wouldn't she?",
          "She's back under the covers before you can answer. The morning prayers start forty minutes late. The Abbess, passing in the corridor, simply sighs and smiles.",
        ],
        end: true,
      },
      feel: {
        text: [
          "She thinks about it seriously, the way she thinks about everything.",
          "@celestine Like I've been reading about the sea my whole life. And then someone finally took me to the beach.",
          "@celestine ...And then the sea took me *back to bed* several times.",
          "She covers her face with her hands, horrified at her own joke. You laugh so hard that the Abbess knocks on the door to ask if everything is all right.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Celestine finds you on the festival hill, in a simple white dress with no veil at all. Her hair is braided with gold ribbon. She carries a Blessed Candle in a little lantern.',
          '@celestine The Abbess gave me the night off. She said, and I quote, "Go watch the stars with your sweetheart, and for the Goddess\'s sake, *kiss them.*"',
          'You find a spot among the crowd. She tucks herself under your arm. When the stars begin to fall, she clasps her hands and whispers a prayer.',
        ],
        next: 'prayer',
      },
      prayer: {
        text: [
          '@you What did you pray for?',
          '@celestine I didn\'t pray *for* anything. I said *thank you.*',
          '@celestine For you. For this. For finding out who I am, after all this time. It turns out I\'m someone who climbs trees, and laughs too loud, and is very, very much in love.',
          'She lifts her face, and you kiss her under the falling stars. The candle in the lantern flares bright gold, all on its own.',
          'Somewhere, very far away, a goddess sighs happily into a bowl of popcorn.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'Celestine performs your wedding herself. The Abbess points out that this is extremely irregular. Celestine points out that she is the High Priestess and can bless anything she wants. The Abbess concedes the point and cries through the whole ceremony.',
          'She still rises at dawn for prayers. She still feeds the poor and heals the sick and blesses the occasional goat. But now she comes home every night to a little cottage near the Temple orchards, where a cherry tree grows outside the bedroom window.',
          'She climbs it sometimes, just because she can.',
          'Her sermons on love become famous across the kingdom. People travel for miles to hear them. And every one of them, somewhere in the middle, includes a story about a confession booth, a cherry tree, and a person who told her there was nothing to forgive.',
        ],
        ending: 'celestine',
      },
    },
  },
});
