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
  teaser: 'A new barmaid with a very fake-sounding accent is carrying six tankards. It is going extremely badly.',
  blurb: 'She calls herself "Aura," a humble barmaid at the Tipsy Wyvern. She is the worst barmaid in history. She curtsies to customers, calls the ale "a most robust vintage," and once tipped a beggar with a diamond earring. She is, obviously, the runaway Crown Princess. Everyone knows except her.',
  schedule: ['square', 'tavern', 'tavern'],
  gifts: { love: ['rum'], like: ['cakes', 'fish', 'plushie', 'yarn'], hate: ['gem', 'tea'] },
  giftLines: {
    love: ['@aurelia Rum! Common, cheap, terrible rum! The sort that sailors drink! I have *never* been allowed this! Not once!', 'She takes a swig. She coughs for a full minute. Her eyes water.', '@aurelia Oh, that\'s *dreadful.* I love it. I am going to drink the whole thing.'],
    like: '@aurelia How lovely! A real common-folk gift! I shall treasure it — er — I mean — *ta, love, that\'s proper nice of ya.*',
    neutral: '@aurelia Oh, how... practical! Thank you! Truly! ...What is it?',
    hate: ['Her smile goes very stiff and very polite.', '@aurelia Ah. How... *courtly.* I\'ve had rather enough of those for one lifetime, I\'m afraid. But the thought is appreciated. Truly.'],
  },
  talk: [
    ['@aurelia Good morrow — er — mornin\', guv! What\'ll it be? We have ale. And ale. And — I believe it\'s also ale?'],
    ['@aurelia I learned to mop today! You push the wet stick back and forth! It\'s *thrilling!* Nobody ever let me hold a wet stick before!'],
    ['@aurelia I haven\'t been a princess — I mean, I have *never* been a princess, why would you say that — I simply have very good posture. Common folk can have posture!'],
    ['She is very carefully counting change, lips moving.', '@aurelia Three coppers make... a... silver? No. Ten coppers. Oh, money is so *complicated* when you have to actually use it.'],
    ['@aurelia Do you know what I love about the tavern? Nobody bows. Nobody calls me "Your Highness." They call me "oi, you" and "where\'s me pie." It\'s *wonderful.*'],
    ['@aurelia I received a letter from my — from a *friend* — saying my — their father is very worried. I wrote back saying "I am fine, I have a mop now." I hope that reassures him.'],
  ],
  afterTalk: [
    ["@aurelia Bettina asked why I'm so tired at work lately. I said I've been *reading.* She said, \"Ara, ara, dear, what book? The one with the creaky bed?\" I nearly dropped a whole tray."],
    ["She slips a note into your hand as she passes with a tray of ale. It reads, in elegant palace calligraphy: *Attic. Midnight. By royal command.*"],
    ["@aurelia I wrote to my father. I told him I've found someone. He wrote back asking for your lineage. I told him your lineage is \"very good at unlacing dresses.\" I may have been slightly drunk."],
    ["@aurelia I've learned to make one thing without burning it. It's honey toast. I'm going to make it for you tomorrow morning. You'll have to stay the night, though. That's the recipe."],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'You\'ve barely sat down in the Tipsy Wyvern when a barmaid approaches your table carrying six overflowing tankards — three in each hand, held with the delicate grip of someone holding porcelain teacups.',
          'She\'s stunning: golden hair in a hasty braid, wide blue eyes, a heart-shaped face, and the bearing of someone who has been taught to walk with a book balanced on her head. Her apron is on inside out. There\'s a smudge of flour on her nose.',
          '@aurelia Good evening, kind sir or madam! Would you care for a — oh dear — oh, dear, *dear* —',
          'The tankards tip. Ale cascades onto the table, your lap, and her shoes. She stares at the wreckage in horror.',
          '@aurelia I do beg your pardon! I am *most* frightfully sorry! — I mean — *oops, me bad, guv\'nor.*',
          'That last bit is delivered in the worst common accent you have ever heard.',
        ],
        aff: 10,
        choices: [
          { text: '"Don\'t worry about it. First week?"', go: 'firstweek' },
          { text: 'Help her mop it up.', go: 'mop' },
          { text: '"Your accent slipped, *Your Highness.*" [Charm check 1]', check: { stat: 'charm', dc: 1 }, pass: 'highness', fail: 'highness_fail' },
        ],
      },
      firstweek: {
        text: [
          '@aurelia First *day*, actually! Is it that obvious?',
          '@you Your apron\'s inside out.',
          'She looks down. She gasps. She looks up at you as if you\'ve revealed a great secret of the universe.',
          '@aurelia There\'s an *inside* and an *outside?*',
        ],
        aff: 4,
        next: 'name',
      },
      mop: {
        text: [
          'You grab a rag from the bar and start mopping. She stares at you in astonishment, then grabs another rag and kneels beside you, and together you clean up the mess.',
          '@aurelia You\'re *helping.* Customers aren\'t supposed to help! Are they? I read a book on taverns and it didn\'t say anything about helping!',
          '@you Seemed like the right thing to do.',
          'She smiles at you, a little dazzled.',
        ],
        aff: 6,
        next: 'name',
      },
      highness: {
        text: [
          'She goes absolutely white. Then absolutely red.',
          '@aurelia I — I haven\'t the faintest — I am a *barmaid!* A humble one! Look, I have — I have *ale* — on my *shoes!*',
          'She leans in close and whispers, panicked:',
          '@aurelia ...How did you know?',
          '@you Lucky guess. Don\'t worry. I won\'t tell.',
          'She stares at you for a long moment. Then she lets out a breath and laughs, very quietly.',
        ],
        aff: 7,
        next: 'name',
      },
      highness_fail: {
        text: [
          '@you Thanks, Your Highn— I mean — barmaid lady.',
          '@aurelia ...What did you almost call me?',
          '@you Nothing!',
          'You both stare at each other with mutual suspicion.',
        ],
        aff: 3,
        next: 'name',
      },
      name: {
        text: [
          '@aurelia I\'m Aura! Just Aura! No other names! Very common name! There are probably dozens of us!',
          '@you {name}.',
          '@aurelia {name}! What a lovely name. Very... *robust.*',
          'Madame Bettina calls from behind the bar: "Aura, dear! The kitchen\'s on fire again!"',
          '@aurelia Oh, *bother!* Excuse me! I must go — fetch the — the *wet stick!*',
          'She curtsies to you — a full, deep, flawless court curtsy — and then flees toward the kitchen.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Aura catches you in the square on her day off. She\'s wearing a peasant dress three sizes too big, an enormous straw hat, and a determined expression.',
          '@aurelia {name}! I need a teacher! In the ways of the common folk!',
          '@aurelia I want to buy things at the market *myself.* I want to eat food from a stall, with my *hands.* I want to *haggle.* Will you show me?',
        ],
        choices: [
          { text: '"Lesson one: haggling. Watch and learn." [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'haggle_win', fail: 'haggle_fail' },
          { text: 'Buy her a meat pie from a street stall.', go: 'pie', aff: 7 },
        ],
      },
      haggle_win: {
        text: [
          'You approach the fruit seller. You compliment his apples. You lament your poverty. You walk away. He calls you back. You get six apples for the price of two and a free pear.',
          'Aura is staring at you like you\'ve just slain a dragon with your bare hands.',
          '@aurelia That was *magnificent!* That was *diplomacy!* My father\'s ambassadors couldn\'t have done better!',
          'She tries it herself at the next stall. She offers the cheese merchant twice the asking price and then apologizes for insulting him. He gives her the cheese for free out of pure confusion.',
          '@aurelia I WON!',
        ],
        aff: 8,
        next: 'fountain',
      },
      haggle_fail: {
        text: [
          'You attempt to haggle with the fruit seller. Somehow you end up paying double and buying a bucket you didn\'t want.',
          '@aurelia Is — is that how it\'s supposed to go?',
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
          '@aurelia This is the best thing I\'ve ever eaten. In my *entire life.* We had a chef from the Eastern Isles and he never made anything like *this!*',
          'She eats three more. She gets gravy on her hat.',
        ],
        next: 'fountain',
      },
      fountain: {
        text: [
          'You end the day sitting on the edge of the town fountain, sharing apples, your feet in the cool water. She takes off her hat and lets the sun hit her face.',
          '@aurelia I\'ve never been anywhere without guards. Without someone telling me how to stand and what to say and who to smile at.',
          '@aurelia Today, nobody told me anything. And you just... let me be bad at things.',
          'She looks at you, and her blue eyes are very soft.',
          '@aurelia Thank you, {name}. For letting me be *Aura.*',
        ],
        choices: [
          { text: '"You\'re a very good Aura."', go: 'good', aff: 6 },
          { text: 'Splash her with fountain water.', go: 'splash', aff: 8 },
        ],
      },
      good: {
        text: [
          '@aurelia I\'m a *terrible* Aura. I can\'t mop, I can\'t count, and I set the kitchen on fire twice.',
          '@aurelia ...But I think I\'m a *happy* one. I never knew those were different things.',
        ],
        end: true,
      },
      splash: {
        text: [
          'You kick a spray of water at her. She shrieks. For one second, she looks absolutely scandalized, the full force of royal outrage in her face.',
          'Then she shoves you into the fountain.',
          'You both end up soaked to the skin, laughing so hard you can\'t stand, while the pigeons scatter and a small crowd gathers to watch the barmaid and the adventurer splashing each other like children.',
          '@aurelia No one has *ever* splashed me! Not in my *whole life!* Do it again!',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'Aura grabs your arm the moment you walk into the Tipsy Wyvern and drags you into the storeroom, pale as milk.',
          '@aurelia They\'re here. Royal Guards. They\'re asking about a "golden-haired runaway." They\'ve got a *portrait.*',
          'Through a crack in the door, you see four guards in royal livery questioning Madame Bettina. One of them is holding up a painting. It is very obviously Aura, in a crown.',
          '@aurelia I\'m not ready. I can\'t go back. Not yet. Please, {name}.',
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
        next: 'truth',
      },
      hide: {
        text: [
          'You pull her down behind the barrels. It\'s a very small space. She\'s pressed against you, her face buried in your shoulder, her heart pounding so hard you can feel it.',
          'The door creaks open. Lantern light sweeps over the barrels. A guard grunts. The door closes.',
          'Neither of you moves for a long time after. She doesn\'t let go of your shirt.',
          '@aurelia ...They\'re gone.',
          '@you Yeah.',
          '@aurelia I\'m still not moving.',
        ],
        aff: 7,
        next: 'truth',
      },
      truth: {
        text: [
          'Later, alone in the dim storeroom, she sits on a barrel and finally takes off her apron.',
          '@aurelia I suppose you\'ve guessed. My name is Aurelia. Crown Princess of FantasyLandia. Heir to the Sunlit Throne.',
          '@aurelia My father arranged a marriage. To Duke Fopsworth of the Western March. He\'s fifty-two. He collects snuffboxes. He once made a speech about snuffboxes that lasted three hours.',
          '@aurelia So I ran. I climbed out my window with a bag of jewels and no idea how anything works. And I ended up here.',
          'She looks at you. Her eyes are bright with unshed tears.',
          '@aurelia I have been happier in this tavern than in twenty-four years in a palace. And it\'s because of you.',
        ],
        choices: [
          { text: '"Then don\'t go back. Stay here."', go: 'stay', aff: 8 },
          { text: '"You\'re not just running away, Aurelia. You\'re running toward something."', go: 'toward', aff: 10 },
        ],
      },
      stay: {
        text: [
          '@aurelia I wish I could. But they\'ll find me eventually. And my father... he\'s not cruel. He\'s just — worried. And very bad at asking what I want.',
          '@aurelia I\'ll have to face him one day. I just want a little longer. A little longer of *this.* Of you.',
          'She leans her forehead against yours in the dark.',
        ],
        end: true,
      },
      toward: {
        text: [
          'She stares at you. Then she laughs — a wet, startled laugh — and wipes her eyes with her sleeve, very unladylike.',
          '@aurelia Toward *what?*',
          '@you You tell me.',
          'She leans forward and kisses you. Softly. Shyly. Like she\'s asking permission.',
          '@aurelia ...That. Toward that.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'It\'s late. The tavern is closed. Aura — Aurelia — has invited you up to her tiny attic room above the Tipsy Wyvern. It\'s barely big enough for a narrow bed and a washstand. There\'s a crack in the window. She has decorated it with wildflowers in an old tankard.',
          '@aurelia It\'s smaller than my wardrobe at the palace. I love it more than anything.',
          'She turns to you. She\'s nervous — twisting her fingers together the way they must have taught her never to do.',
          '@aurelia I\'ve been told my whole life who to love. Who to marry. Who to be. Tonight I want to *choose.*',
          '@aurelia I choose you, {name}. If you\'ll have a terrible barmaid with no money and a very angry father.',
        ],
        choices: [
          { text: '"I\'d have you if you were a barmaid, a princess, or a goat."', go: 'goat', aff: 10 },
          { text: 'Bow — a perfect court bow — and kiss her hand. "Your Highness." [Charm check 4]', check: { stat: 'charm', dc: 4 }, pass: 'bow', fail: 'goat' },
        ],
      },
      goat: {
        text: [
          'She bursts out laughing, then grabs your collar and kisses you.',
          '@aurelia A *goat!* You romantic fool!',
        ],
        next: 'night',
      },
      bow: {
        text: [
          'You sweep into a bow worthy of the royal court and press your lips to her knuckles.',
          '@you Your Highness.',
          'Her breath catches. All her life, people have bowed to the crown. For the first time, someone is bowing to *her* — and she knows the difference.',
          '@aurelia Get up. Get up and kiss me. That\'s a royal command.',
          '@you Thought you weren\'t a princess anymore?',
          '@aurelia I\'ll make an exception. *Just* for tonight.',
        ],
        aff: 14,
        next: 'night',
      },
      night: {
        text: [
          "The attic is cramped and the bed creaks alarmingly. Neither matters.",
          "@aurelia I've been laced into gowns my entire life by three maids at a time. I've never once been *unlaced* by someone I wanted.",
          "She turns around and looks at you over her shoulder, blue eyes very wide and very bright.",
          "@aurelia Would you?",
          "Her barmaid's dress has only six laces, but you take your time with every one. Each tug sends a visible shiver down her spine. When the dress slips from her shoulders she doesn't reach to catch it, the way they must have taught her to. She lets it fall, and stands there in the moonlight with her chin up like a princess at her coronation.",
          "@aurelia Well? Your future queen awaits your — no. No, that sounds ridiculous. Just — *come here.*",
          "She's tender and eager and full of wonder, as though discovering something no tutor or governess ever dared to teach her. She keeps saying *oh, is that allowed?* and then answering herself: *it is now, I've decided, royal decree.* She laughs often, a bright, unguarded, entirely un-royal laugh. You think you could listen to it forever.",
          "And when you kiss your way down the curve of her neck and murmur *Your Highness* against her skin, half teasing, she grips your shoulders and makes a sound that would scandalize the entire royal court...",
          "...",
          "The moon shines through the cracked window. Downstairs, the tavern cat knocks something over. Neither of you notices.",
          "Much later, she lies with her golden hair spread across your chest, tracing idle patterns on your skin.",
          "@aurelia You realize this is treason. Seducing the Crown Princess. They used to hang people for this.",
          "@you Should I be worried?",
          "@aurelia Terribly. I'm going to sentence you to a life of hard labor. In my bed. With no possibility of parole.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake to sunlight through the cracked window, the smell of burnt toast, and Aurelia crashing through the attic door holding a tray, wearing your shirt and her apron and nothing else.",
          "@aurelia I made breakfast! Myself! In the kitchen! With *fire!*",
          "The toast is charcoal. The eggs are somehow both raw and burnt. The tea is cold. She sets the tray down on your lap and looks at you with total pride.",
          "@aurelia Nobody has *ever* let me cook. The palace chef wouldn't even let me hold a spoon. Isn't it *wonderful?*",
          "From downstairs, Bettina's voice drifts up: \"Aura, dear! Why is the kitchen on fire again?\"",
        ],
        choices: [
          { text: "Eat the whole thing with a straight face.", go: "eat", aff: 6 },
          { text: "\"It's perfect. Come back to bed and help me eat it.\"", go: "bed", aff: 6 },
          { text: "\"Should we... check on the fire?\"", go: "fire", aff: 4 },
        ],
      },
      eat: {
        text: [
          "You eat every bite. The charcoal toast. The raw-burnt eggs. The cold tea. You don't flinch once.",
          "Aurelia watches with growing wonder. When you finish, her eyes are wet.",
          "@aurelia That was *terrible.* I tasted it. And you ate all of it. For me.",
          "@aurelia I'm going to marry you. I've decided. Royal decree.",
        ],
        end: true,
      },
      bed: {
        text: [
          "She climbs back in beside you, still in the apron. You feed each other bites of charcoal toast and laugh until the bed creaks so loudly that Bettina bangs on the ceiling with a broom.",
          "@aurelia We're being *scolded!* By a *commoner!* For *noise!*",
          "She's never looked happier.",
        ],
        end: true,
      },
      fire: {
        text: [
          "@aurelia Oh! Oh, BOTHER —",
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
          '@aurelia I told him. My father. Everything. About the tavern, and the mop, and the pie, and *you.*',
          'Behind her, an older man with a golden beard steps out of the carriage. The King. He looks at you with a very stern expression.',
          '@king So. You are the one who taught my daughter to haggle.',
        ],
        next: 'king',
      },
      king: {
        text: [
          '@you ...Yes, Your Majesty.',
          '@king And to drink rum. And to *splash people in fountains.*',
          '@you ...Also yes.',
          'A very long pause.',
          '@king She has not laughed like this since her mother died. I had forgotten what it sounded like.',
          'He clears his throat gruffly and looks away.',
          '@king Duke Fopsworth has been informed. He has taken it well. He is consoling himself with snuffboxes. Watch the stars with my daughter, adventurer. Then we will discuss your *title.*',
          'Aurelia squeals — a deeply un-royal squeal — and throws her arms around your neck as the first star falls.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'You are married in the great cathedral of the capital, with the whole kingdom watching. Bettina is the guest of honor. She cries into a handkerchief the size of a tablecloth.',
          'Aurelia becomes the most beloved Crown Princess in FantasyLandia\'s history. She abolishes the snuffbox tax. She opens the palace gardens to the public. She founds the Royal Institute for Practical Skills, where nobles must learn to cook, mop, and haggle. Attendance is mandatory. The nobles are furious.',
          'But on the first weekend of every month, she slips out of the palace with you, in a peasant dress three sizes too big and an enormous straw hat, and you ride to Clichéton.',
          'And for two whole days, at the Tipsy Wyvern, she\'s just Aura again: the worst barmaid in history, spilling ale on customers and laughing about it.',
          'The regulars all know. Nobody ever says a word.',
        ],
        ending: 'aurelia',
      },
    },
  },
});
