FL.addSpeaker('noblewoman', 'Lady Pemberton', '#b9a5d6');

FL.addCharacter({
  id: 'rosalind',
  name: 'Lady Rosalind Ashcroft',
  short: 'Rosalind',
  trope: 'Haughty Villainess ("Ohohoho!")',
  color: '#c74bb0',
  favStat: 'charm',
  endingTitle: 'The Villainess\'s Happy Ending',
  endings: {
    rosalind_reign: 'Partners in Crime',
    rosalind_unmasked: 'Exit, Villainess',
  },
  teaser: 'A noblewoman with enormous golden drill-curls and a feathered fan is laughing "OHOHOHO!" at a footman.',
  blurb: 'Heiress of House Ashcroft, publicly jilted by the Crown Prince six months ago in favor of a sweet commoner girl. Society has cast her as the villainess, and she plays the role magnificently: cutting remarks, dramatic laughter, a fan for every occasion. Few know she anonymously funds half the charities in Clichéton. She has no friends left. She tells herself she prefers it.',
  schedule: ['noble', 'noble', 'noble'],
  gifts: { love: ['tea'], like: ['roses', 'mirror', 'perfume', 'comb', 'chocolate', 'quill', 'salts'], hate: ['fish', 'ale'] },
  giftLines: {
    love: ['She opens the box and goes very still.', '@rosalind:sad ...Silver Needle white tea. From the Jade Mountains. My mother used to serve this. I haven\'t had it since she passed.', 'She snaps her fan open in front of her face so you can\'t see her expression.', '@rosalind:blush O-ohoho! How *presumptuous!* I suppose I shall have to invite you to drink it with me. Since you\'re *so* thoughtful.'],
    like: '@rosalind:smug Hmph! Well. At least *someone* in this town has taste. I shall accept your tribute, commoner. Graciously.',
    neutral: '@rosalind How *quaint.* I shall have a servant find somewhere to put it. Somewhere *far away.*',
    hate: ['She recoils, fan snapping up like a shield.', '@rosalind:angry A FISH? You present a *fish* to the heiress of House Ashcroft? Do I look like a *harbor cat* to you? OHOHOHO — no. No, I\'m not laughing. I am *appalled.*'],
    special: {
      tea: [
        "She lifts the lid of the tin and breathes in, eyes closed, for a long time.",
        "@rosalind:sad Mother used to say that one can tell everything about a person by the tea they bring. Cheap tea: a flatterer. Strong tea: a bore. No tea at all: a *Pemberton.*",
        "@rosalind:blush And this. This says you listened when I wasn't saying anything. ...Thursday. Three o'clock. Bring yourself. I'll bring the cups.",
      ],
      fork: [
        "She looks at the fork. She looks at you. Her eyes narrow.",
        "@rosalind:smug A dinner fork. Four tines, plain handle. Is this a *test?*",
        "@rosalind Very well. This is for the fish course at an informal supper, *never* the cake, and I'm told the Duchess of Wendlemoor once stabbed a viscount with one in self-defense. ...Did I pass? I always pass. Ohohoho!",
      ],
      quill: [
        "She uncaps the enchanted quill and sets it on a sheet of paper. It immediately writes, in a gorgeous flowing hand: *Your hat is a crime against birds.*",
        "Rosalind gasps. Then she clutches it to her chest.",
        "@rosalind:happy It insults people. In *calligraphy.* Darling, I think I've just met my soulmate. ...My *second* soulmate. Don't sulk. You're still the first.",
      ],
      ale: [
        "She holds the keg at arm's length, as if it might bite.",
        "@rosalind:angry *Dwarven ale.* By the keg. You've brought the heiress of House Ashcroft a barrel of *peasant courage.*",
        "@rosalind:smug ...I shall give it to my footmen. They've had a very trying week. Don't tell them it was from me. I have a reputation to maintain.",
      ],
      polish: [
        "She opens the little bottle. It is hot pink, and it glitters with frankly hostile enthusiasm.",
        "@rosalind:surprised This is the most *vulgar* thing I have ever seen. It's garish. It's common. It's —",
        "She paints one fingernail. Then another. Then she holds her hand up to the light and turns it this way and that.",
        "@rosalind:smug — *devastating.* I shall wear it to the Duchess's luncheon. She'll have to lie down. Ohohoho!",
      ],
      roses: [
        "@rosalind:smug Red roses. The single most predictable gift a suitor can bring. Edmund sent me *forty dozen* of them on our engagement. His secretary chose them.",
        "She buries her nose in them anyway.",
        "@rosalind:blush ...You chose these yourself. One of them's slightly squashed. You held them too tightly on the way here, didn't you? Hmph. They're perfect.",
      ],
    },
    repeat: '@rosalind:smug Again? Darling, a gift given twice is a habit, and a gift given three times is a *strategy.* I can see right through you. ...Keep going. It\'s working.',
  },
  talk: [
    ['@rosalind:smug OHOHOHO! Look who has come crawling back to bask in my magnificence! ...You may bask for five minutes. I\'m very busy.'],
    ['@rosalind The Prince\'s new fiancée sent me a letter. She wished to "be friends." Ohoho! As if! ...I sent back a very rude letter. And a fruit basket. She looked thin.'],
    ['@rosalind:smug Society calls me the villainess. I have decided to embrace it. If one is to be a villain, one should at least be *fabulous.*'],
    ['She is feeding pigeons with great dignity.', '@rosalind:angry Don\'t look at me. These are *my* pigeons. They are *evil* pigeons. I am training them to... to steal from the rich. Hmph.'],
    ['@rosalind Do you know how long it takes to set these curls every morning? Two hours. Two hours! And people say I don\'t *work.*'],
    ['@rosalind:sad I had friends, once. Dozens of them. They all vanished the day the Prince broke our engagement. It\'s fine. Friends are terribly overrated. ...Why are you still here? ...You may stay.'],
    ["She flicks her fan open, shut, half open, and tilts it.", "@rosalind:smug Fan language, darling. Open: *you may approach.* Shut: *you bore me.* Half-open at an angle: *your hat is an act of war.*", "She tilts it to a position you haven't seen before, low and slow, and looks at you over the top of it.", "@rosalind:blush ...That one isn't for public use. Look it up. No, don't. *Don't* look it up."],
    ["@rosalind There are four kinds of *ohoho.* The triumphant. The dismissive. The scandalized. And the one I do alone in my bedchamber after finishing a very good book.", "@rosalind:happy That last one is the best one. Nobody has ever heard it. Perhaps one day, if you're very lucky."],
    ["@rosalind:angry The matron at Saint Wendel's orphanage caught me leaving a crate of winter boots on her doorstep at four in the morning.", "@rosalind:smug I told her I was *stealing* them. She thanked me for stealing them so neatly, and for stealing them in all the right sizes. That woman is a menace."],
    ["@rosalind:sad Mother taught me the laugh. She said: a lady who laughs first is never laughed at.", "@rosalind ...She was wrong, as it turned out. But it's a very good laugh. It would be a shame to waste it."],
    ["She is reading a novel with a black cover and a scowl.", "@rosalind:angry In this book, the villainess is exiled to a convent in the third act and never mentioned again. *Never mentioned again!* She had the best dresses! She had all the good lines!", "@rosalind:smug I have written to the author. Eleven pages. I've suggested a sequel in which she burns the convent down and opens a hat shop."],
    { if: 'rosalind_honey', lines: ["She sips something golden from a bone-china cup.", "@rosalind:smug Honey water. I drink it in front of the servants now, quite openly. I've told them it's a poison I'm building up an immunity to.", "@rosalind:blush You're the only person alive who knows it's for my throat. Guard it with your life. Ohoho. Ow."] },
    { if: 'rosalind_salons', lines: ["@rosalind:surprised Lady Wendlemoor's footman tells me you sat through a three-hour salon lecture on *fish knives.* Before our first tea. On purpose.", "@rosalind:blush Nobody has ever endured a fish-knife lecture for me. Edmund didn't know which end of a fish knife to hold. I'm — touched. Moderately. Don't let it go to your head."] },
    { if: 'rosalind_pupil', lines: ["@rosalind Stand up straight. Fan up. *Diaphragm.* Again.", "@you Ohohoho!", "@rosalind:smug Better. You still sound like a goose with ambitions, but a goose that is *going places.* Lesson eleven next week: the scandalized laugh, with optional swoon."] },
    { if: 'rosalind_custard', lines: ["A confectioner's boy hurries past with a tray of custard tarts. Rosalind's fan snaps up to cover her entire face.", "@rosalind:blush I can't look at it. I can never look at custard again. Every time I see a custard tart I hear *pigeons.*", "@rosalind:smug ...Though I will admit it was the most fun I've had in a year. Tell no one."] },
    { if: { stage: 3 }, lines: ["@rosalind Lady Pemberton has started a rumor that I've been seen in the Gardens kissing a commoner in a *very* ordinary coat.", "@rosalind:happy I've decided to let it stand. It's the first rumor anyone's ever spread about me that's true. Ohohoho! It's *wonderful.* I may start a few more."] },
  ],
  afterTalk: [
    ["@rosalind:smug Ohoho! You've returned to bask in my magnificence. You may bask closer. *Much* closer. I've had the pillows restocked."],
    ["She snaps open her fan and speaks behind it, very low.", "@rosalind:blush I had my dressmaker make something new. In black. It has very few hooks. I'm told it comes off in *seconds.* Come and test that claim tonight."],
    ["@rosalind:happy Lady Pemberton has told everyone in the Noble Quarter about us. I am now the most interesting woman in society. I've received eleven invitations. I've declined them all. Thursdays are *ours.*"],
    ["@rosalind:blush I haven't set my drills for two days. My maid nearly fainted. I told her the curls were *distracting* certain people. She didn't ask who."],
    ["@rosalind:smug The Prince's fiancée came to tea. She cried when I told her she was too good for him. I told her I meant it as an insult. She cried harder and hugged me. I have *no idea* how to make her stop liking me."],
    { if: 'rosalind_danced', lines: ["@rosalind:blush I've hired a string quartet to play in the rose garden at midnight. For dancing. With no one watching.", "@rosalind:smug They're extremely discreet. They're also blindfolded. I pay them double. Come tonight. I want to see if it still feels the way it did."] },
    { if: 'rosalind_accomplice', lines: ["She draws you behind a pillar and unrolls a tiny scroll.", "@rosalind:smug Operation Pemberton's Hat. Phase one: the pigeons. Phase two: a very small amount of glue. Phase three: we are *nowhere near* the scene, and we are having tea, and we are *magnificent.*", "@rosalind:happy I knew I chose my partner in crime well. Ohohohoho!"] },
    { if: 'rosalind_unscripted', lines: ["@rosalind:surprised I went an entire day without saying *ohoho.* My maid sent for a physician.", "@rosalind:happy He said I was in perfect health and asked what had changed. I said I'd stopped waiting for the end of the story. He prescribed more of whatever that was. I've prescribed it *you.*"] },
    { if: 'rosalind_date_picnic', lines: ["@rosalind:smug I had luncheon served on the *lawn* yesterday. On a blanket. In front of the Duchess.", "@rosalind:happy She asked whether the Ashcrofts had fallen on hard times. I told her we'd fallen on *soft* times, and they were vastly superior. Then I ate a sandwich with my hands. She had to be helped to her carriage."] },
    { if: 'rosalind_fingers', lines: ["@rosalind:smug I've started a new tradition. Fingers-only tea. No forks, no knives, no sugar tongs. Very exclusive.", "@rosalind:happy Three countesses have attended. One of them licked jam off her thumb and burst into tears of joy. Society is *crumbling,* darling, and it's all your fault."] },
  ],
  dateFav: 'picnic',
  dates: {
    dinner: {
      start: {
        text: [
          "Lady Rosalind Ashcroft sweeps into the Tipsy Wyvern in violet silk and black lace, fan raised, and the entire tavern goes quiet. A dwarf lowers his tankard. A bard stops mid-verse.",
          "@rosalind:smug Ohohoho! So *this* is where commoners go to be common. I've been in exactly one tavern before, and it was for research. Barkeep! Your finest vintage!",
          "@you They have red. And the other red.",
          "@rosalind ...The other red, then. It sounds *dangerous.*",
          "She settles into the candlelit corner booth, sitting bolt upright, as if the booth might ask her to dance. Every eye in the room is still on her. She's loving it. She's also, you notice, gripping her fan very tightly.",
          { if: { stage: 4 }, text: "Under the table, she has slipped off one silk shoe and hooked her stockinged foot around your ankle. Her face, above the fan, is perfectly composed." },
        ],
        choices: [
          { text: "Stand up and teach the whole tavern the villainess laugh. [Charm check 2]", check: { stat: 'charm', dc: 2 }, pass: 'chorus', fail: 'chorus_fail' },
          { text: "Order her the house stew. \"Trust me.\"", go: 'stew', aff: 4 },
          { text: "Challenge her to a laugh-off, right here.", go: 'laughoff', aff: 6, if: 'rosalind_pupil' },
        ],
      },
      chorus: {
        text: [
          "You climb onto the bench and raise an imaginary fan.",
          "@you Friends! Drinkers! Dwarves! On three, from the diaphragm: *OHOHOHO!*",
          "The tavern hesitates. Then the dwarves join in, because dwarves will join in with anything loud, and then the arm-wrestlers, and then the bard, until the whole Tipsy Wyvern is roaring *OHOHOHO!* at the rafters like a choir of delighted villains.",
          "Rosalind has gone pink to the roots of her drills.",
          "@rosalind:happy They're — they're *terrible!* All of them! Their form is atrocious! Oh, *listen to them!*",
          "By the end of the night she has corrected the posture of eleven dwarves and been toasted three times as *the Lady of the Laugh.* She tells you on the way out that it was dreadful and she's coming back on Friday.",
        ],
        aff: 6,
        next: 'end',
      },
      chorus_fail: {
        text: [
          "You climb onto the bench and invite the tavern to laugh along. The tavern looks at you, and then back at its drinks.",
          "A single dwarf in the corner says *oho* very quietly, out of pity.",
          "Rosalind pulls you down by the sleeve, hiding her face behind her fan, shoulders shaking.",
          "@rosalind:smug Darling. *Darling.* One does not ask the peasants to laugh. One makes them *want* to. ...But that was very brave. And very stupid. I'm so fond of you I could scream.",
        ],
        aff: 3,
        next: 'end',
      },
      stew: {
        text: [
          "The stew arrives in a wooden bowl with a wooden spoon. Rosalind regards it as she might regard a dead mouse in her slipper.",
          "@rosalind:angry It's *brown.* It's entirely brown. There's a *potato* in it, looking at me.",
          "She takes one bite, out of spite. Then a second bite. Then she's scraping the bottom of the bowl with the wooden spoon and sending you to fetch the cook.",
          "@rosalind:surprised I *demand* the recipe. My chef will weep. My chef has been making me tiny swans out of aspic for eleven years and *this* is what I have been missing?",
        ],
        next: 'end',
      },
      laughoff: {
        text: [
          "@you Lady Ashcroft. I challenge you to a laugh-off.",
          "Her eyes light up like a duelist hearing steel drawn.",
          "@rosalind:smug Ohoho. You *dare?* Your own teacher? Very well. Triumphant laugh, on three.",
          "You both throw your heads back. *OHOHOHO!* The bard drops his lute. The barkeep ducks behind the counter. It goes on for some time. It escalates. The scandalized laugh. The dismissive laugh. A laugh so long and so high that a glass on the shelf develops a crack.",
          "At last she collapses against the back of the booth, gasping, tears in her eyes, laughing for real.",
          "@rosalind:happy A *draw!* A draw! You've learned everything I taught you on the day you assaulted my hatboxes. I've never been so proud and so furious in my life.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "You walk her back to the Noble Quarter. At the gate of the Ashcroft estate, she pauses with her hand on the latch.",
          "@rosalind:blush That was the first meal I've eaten in a year where nobody was watching to see if I'd poison them. ...Well. Everyone was watching. But not for *that.*",
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          "The Moonlit Gardens are Rosalind's territory, and she strolls them on your arm like a queen inspecting a conquered city. Every couple on every bench stops what they're doing to look at her. She knows. She slows down.",
          "@rosalind:smug Lord Fennimore, with the girl from the milliner's. His wife is in Wendlemoor. That's the Countess of Ash in the ridiculous hat; she's been crying behind the yew hedge since Tuesday. And *that,* darling, is a Pemberton, which is a kind of weasel.",
          "@rosalind Everyone here is watching me walk with you. Half of them think it's a scandal. The other half think it's a scheme.",
          { if: { stage: 4 }, text: "@rosalind:blush Let them think it. I want them to see. That's a new feeling. I'm trying it on, like a hat." },
        ],
        choices: [
          { text: "Join in. Critique every passing hat, out loud.", go: 'hats', aff: 4 },
          { text: "Stop in the middle of the path and kiss her in front of all of them.", go: 'kiss', aff: 6 },
          { text: "Lead her to the bench where she cried after the salon.", go: 'bench', aff: 6, if: 'rosalind_seen' },
        ],
      },
      hats: {
        text: [
          "@you That hat looks like a pheasant that's given up.",
          "Rosalind turns to you so fast that her drills swing.",
          "@rosalind:happy *Yes!* And that one?",
          "@you A cake that's been sat on. By a horse.",
          "@rosalind:happy Oh, you're *vile.* You're perfectly vile. Do the Countess.",
          "You do the Countess. She laughs so hard that she has to hold on to a statue of a nymph. By the end of the walk you've done every hat in the Gardens, and the Countess of Ash, overhearing, has taken off her hat, looked at it, and thrown it into the fountain with an expression of profound relief.",
        ],
        next: 'end',
      },
      kiss: {
        text: [
          "You stop dead in the middle of the main path, beneath the brightest lantern, turn her toward you, and kiss her.",
          "Around you, the Gardens fall silent. A fan drops. Somebody gasps so hard they hiccup.",
          "When you pull back, Rosalind is staring at you, lips parted, fan forgotten at her side.",
          "@rosalind:surprised The *audacity.* In front of — in front of the *Pembertons* —",
          "Then she seizes your collar and kisses you back, harder, for twice as long, and when she's done she turns to the crowd with her chin high.",
          "@rosalind:smug *Ohohohoho!* Do take notes, everyone. There'll be a quiz.",
        ],
        next: 'end',
      },
      bench: {
        text: [
          "She knows which bench before you reach it. Her steps slow.",
          "@rosalind:sad This is where I wept like a burst pipe and ruined your coat.",
          "@you This is where you let me see you.",
          "She sits, carefully, the way she did that night. But this time she leans into your shoulder at once, as if it's already hers.",
          "@rosalind:blush I used to avoid this part of the Gardens. Now I walk past it every evening on purpose. I tell the bench good evening. Isn't that *ridiculous?* I've become a woman who greets furniture.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "When you leave, the whispers follow you all the way to the gates. Rosalind walks through them with her fan furled and her hand tucked into your arm, and for once she doesn't seem to hear them at all.",
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          "Rosalind has dressed for the harbor, by which she means she has worn a slightly less enormous hat. She stands at the end of the pier as the sun goes down, clutching it against the sea wind, while gulls wheel overhead and fishermen haul in nets of silver.",
          "@rosalind:angry The *smell.* It's like a fish wrote a poem about itself. And the wind! I spent *two hours* on these drills!",
          "You offer her a paper cone of fried fish. She looks at it the way a cat looks at a bath.",
          { if: { stage: 4 }, text: "But she stays close against your side the whole time, and she doesn't let go of your arm, not even to fix her hat." },
        ],
        choices: [
          { text: "\"One bite. I dare you.\"", go: 'bite', aff: 4 },
          { text: "Help her let the drills down before the wind does it for her.", go: 'hair', aff: 5 },
          { text: "Point at the pirate ship with crimson sails. \"Ever thought about a life of crime?\"", go: 'pirate', aff: 5 },
        ],
      },
      bite: {
        text: [
          "@rosalind:angry A *dare.* You think you can manipulate me with a common schoolyard dare?",
          "She takes the smallest bite of fried fish in recorded history. She chews. She considers. Her expression goes through outrage, betrayal and something like despair.",
          "@rosalind:surprised It's... *good.* Why is it good? It's a fish! In *paper!*",
          "She takes the cone from you. She eats the whole thing. She licks the salt off her gloved fingers and glares at you.",
          "@rosalind:smug If this gets out, I shall deny everything. I'll say it was an impostor. A *fish-eating* impostor. Buy me another one.",
        ],
        next: 'end',
      },
      hair: {
        text: [
          "The wind is winning. One of her perfect golden drills has started to unspool like a spring.",
          "@you Let it go. Here, let me.",
          "She hesitates, then nods and turns around. You draw out the pins one by one, and the drills fall loose into long golden waves that blow wild around her face in the sea wind.",
          "@rosalind:blush I look like a — like a *shipwreck.* Like a figurehead. Like a mermaid who's had a very bad week.",
          "@you You look free.",
          "She doesn't answer that. She just closes her eyes and lifts her face into the wind and the last of the sun, and for one moment she laughs, a small, surprised, real laugh, like someone opening a window.",
        ],
        next: 'end',
      },
      pirate: {
        text: [
          "@rosalind:surprised A pirate villainess? Me?",
          "She looks at the ship. You can see the idea take hold of her like a fever.",
          "@rosalind:smug A black tricorn hat. With *plumes.* A cutlass with a jeweled hilt. A parrot trained to say *ohohoho.* We'd raid only the yachts of the dreadful and redistribute their silver to the orphanages. They'd call me the Dread Lady Ashcroft. They'd write *songs.*",
          "@rosalind:happy And you'd be my first mate, obviously. Don't argue. I've already designed your hat.",
          "She spends the rest of the sunset designing your hat in great detail. It has a small cannon on it.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "By the time the lanterns come on, she's windblown and salt-sticky and far less magnificent than when she arrived, and she's never looked happier.",
          "@rosalind:smug The harbor is *dreadful,* darling. We're coming back next week.",
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          "You spread a blanket in a sunny clearing in Whisperwood. Rosalind regards it from a safe distance, in a gown of pale lilac silk that has clearly never touched a field in its life.",
          "@rosalind:surprised We're to sit on the... *ground.* Directly upon the earth. Like *mushrooms.*",
          "But she sits, eventually, very carefully, and tucks her skirts around her, and looks about at the wildflowers and the bees and the dappled light as if she's landed on the moon.",
          "@rosalind ...No one can see us. There's not a single Pemberton for miles. I don't know what to do with my face.",
          { if: 'rosalind_fingers', text: "@rosalind:smug And you forgot the cutlery. *Again.* I know exactly what you're doing. Just like at tea. You're a corrupting influence and I *adore* it." },
          { if: { stage: 4 }, text: "She takes off her gloves, one finger at a time, and lays them on the blanket. Then she lies back on her elbows in the grass, in the silk, and smiles up at you as if she's daring the whole world to stop her." },
        ],
        choices: [
          { text: "Make her a crown out of daisies.", go: 'daisies', aff: 5 },
          { text: "Lie back and name the clouds.", go: 'clouds', aff: 5 },
          { text: "Hand her a strawberry, and feed her the next one yourself.", go: 'berries', aff: 6 },
        ],
      },
      daisies: {
        text: [
          "You weave a chain of daisies with clumsy fingers, tie it off, and set it on top of her golden drills.",
          "@rosalind:surprised A tiara of *weeds?*",
          "She touches it gingerly. She takes out her little hand mirror and looks at herself for a long, long time.",
          "@rosalind:blush I've worn the Ashcroft sapphires to three royal balls. They weigh four pounds. They gave me a headache every single time.",
          "@rosalind:happy This weighs nothing at all. I'm going to wear it home. I'm going to wear it to *dinner.* If the Duchess says anything, I shall tell her it's from the spring collection and watch her try to buy one.",
        ],
        next: 'end',
      },
      clouds: {
        text: [
          "You lie back side by side on the blanket and look up at the sky.",
          "@you That one looks like a dragon.",
          "@rosalind:smug That one looks like Lady Pemberton. Look, it's even got her chin. And that one — ohoho — that's Edmund, see? Big, handsome and completely empty inside.",
          "She names every cloud in the sky after someone who wronged her, and then, when she runs out of enemies, she starts on the ones she likes. A small round cloud is the orphanage matron. A big soft one is her mother. The last one, drifting right overhead, she doesn't name at all. She just reaches over and takes your hand.",
        ],
        next: 'end',
      },
      berries: {
        text: [
          "You hand her a strawberry. She eats it. Then you hold up the next one, and she looks at it, and then at you, and goes slowly scarlet.",
          "@rosalind:blush Being *fed.* By hand. Out of *doors.* This is the most scandalous thing I've ever done, and I once wore white to a funeral.",
          "She leans forward and takes it from your fingers anyway, slowly, and her lips brush your fingertips, and it's suddenly much warmer in the clearing than the weather explains.",
          "@rosalind:smug ...Another. That's an order.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "You walk her home at dusk with grass stains on her silk and a leaf caught in her drills. She refuses to let you remove the leaf.",
          "@rosalind:happy I'm keeping it. It's a *souvenir.* Of the day the villainess sat in a field and nobody died.",
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'You\'re walking through the Noble Quarter when a carriage door bangs open and a woman sweeps out of it directly into your path. You collide. She staggers back, and an entire armful of hatboxes goes flying.',
          'She is magnificent: a gown of violet silk and black lace, a towering arrangement of golden hair in four perfect ringlet drills, a jeweled fan, and the expression of someone who has never in her life been bumped into.',
          '@rosalind:angry *How DARE you!* Do you have any idea who I am?!',
          'She snaps her fan open.',
          '@rosalind:smug I am Lady Rosalind Ashcroft! Heiress of House Ashcroft! And you have just assaulted my *hatboxes!* OHOHOHO! You shall *rue* this day!',
        ],
        aff: 10,
        choices: [
          { text: 'Gather up her hatboxes and stack them neatly. "My apologies, my lady."', go: 'hatboxes', flag: 'rosalind_hatboxes' },
          { text: 'Match her energy. "OHOHOHO! And I am {name}! Rue *me!*" [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'match', fail: 'match_fail' },
          { text: '"Is that laugh hard to do? It sounds like it hurts."', go: 'laugh', flag: 'rosalind_honey' },
        ],
      },
      hatboxes: {
        text: [
          'You kneel and collect every hatbox, dust them off, and stack them in her arms. She stares at you over the top of the pile.',
          '@rosalind:surprised ...You\'re *helping.* Why are you helping? I just threatened you.',
          '@you You looked like you needed a hand.',
          'For a moment, her haughty expression flickers into genuine confusion.',
          '@rosalind:blush ...Hmph. Well. Don\'t expect *gratitude.* ...Thank you.',
        ],
        aff: 5,
        next: 'name',
      },
      match: {
        text: [
          'You snap open an imaginary fan and throw your head back.',
          '@you OHOHOHO!',
          'She stares at you, utterly scandalized. Her footman covers his mouth. A passing noblewoman drops her parasol.',
          'Then — slowly, unwillingly — the corner of Rosalind\'s mouth begins to twitch. She hides it behind her fan.',
          '@rosalind:smug ...Your form is *atrocious.* The laugh comes from the diaphragm, not the throat. You must *project* your contempt.',
          '@rosalind:happy I suppose I shall have to *teach* you. Ohoho.',
        ],
        aff: 8,
        flag: 'rosalind_pupil',
        next: 'name',
      },
      match_fail: {
        text: [
          'You attempt the laugh. It comes out as "Oho... ho? Hoo?"',
          '@rosalind:surprised ...Was that an *owl?*',
          'She looks at you with pity. Then she waves her fan dismissively.',
          '@rosalind:smug Never attempt that again. Leave it to the professionals.',
        ],
        aff: 3,
        next: 'name',
      },
      laugh: {
        text: [
          'She opens her mouth to retort — then pauses.',
          '@rosalind:surprised ...It does, actually. It\'s very hard on the throat. I drink honey water every evening.',
          'She seems shocked to have admitted it. She snaps her fan shut.',
          '@rosalind:angry That is a *state secret.* Breathe a word of it and I shall *ruin* you.',
        ],
        aff: 5,
        next: 'name',
      },
      name: {
        text: [
          '@you I\'m {name}.',
          '@rosalind:smug {name}. How very... *ordinary.* I suppose you\'re one of those adventurers. Muddy boots, no manners, terrible taste in hats.',
          'She sweeps past you toward the Ashcroft estate, hatboxes and all.',
          '@rosalind You may call on me. If you wish. I am *very* exclusive, but I shall make an exception, as a form of charity. Ohohoho!',
          'At the gate, she glances back at you. Just for a second. She looks almost hopeful.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'An invitation arrives on thick cream paper, with gold edging and a wax seal: *Lady Rosalind Ashcroft requests the pleasure of your company for tea. Attendance is mandatory. Wear something decent. — R.A.*',
          'The tea is served in a glass conservatory full of roses. The table is laid for twelve. There are only two chairs occupied.',
          '@rosalind I invited the Duchess of Wendlemoor, Lady Pemberton, the Countess of Ash, and eight others. They all sent their regrets.',
          'She says it lightly, pouring tea with perfect precision.',
          '@rosalind:smug No matter! More cake for us. Now. Let us see if you know how to behave in polite society. Which fork for the cake?',
        ],
        choices: [
          { text: 'Choose the correct fork. [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'fork_win', fail: 'fork_fail' },
          { text: '"Do we need a fork? Can\'t I just pick it up?"', go: 'hands', aff: 5, flag: 'rosalind_fingers' },
        ],
      },
      fork_win: {
        text: [
          'You pick the small three-tined fork at the far left. She raises an eyebrow.',
          '@rosalind:surprised Correct. And you hold it properly, too. Who taught you?',
          '@you I\'ve been going to salons.',
          '@rosalind:blush *For me?*',
          'She catches herself.',
          '@rosalind:smug — I mean, *for social advancement.* Naturally. Well done.',
        ],
        aff: 7,
        flag: 'rosalind_salons',
        next: 'empty',
      },
      fork_fail: {
        text: [
          'You pick up the butter knife. She winces delicately.',
          '@rosalind:smug That is for *butter,* darling. It\'s in the name.',
          'She leans across and moves your hand to the correct fork, her fingers lingering on yours for just a moment.',
          '@rosalind:blush There. Honestly. What would you do without me?',
        ],
        aff: 4,
        next: 'empty',
      },
      hands: {
        text: [
          'She gasps theatrically. Then, after a moment, she looks around the empty conservatory.',
          '@rosalind ...There\'s no one here to see. Is there.',
          'She picks up a slice of cake with her bare fingers and takes a bite. Her eyes go wide.',
          '@rosalind:surprised It tastes *better.* Why does it taste better? This is *scandalous.*',
        ],
        next: 'empty',
      },
      empty: {
        text: [
          'As the afternoon wears on, she runs out of etiquette lessons. She runs out of insults. Eventually she just sits, stirring her tea, looking at the ten empty chairs.',
          '@rosalind:sad I used to host tea every Thursday. Twenty guests. Thirty. Everyone wanted to be seen with the future queen.',
          '@rosalind:sad Then Edmund broke our engagement at the Royal Ball. In front of everyone. For a sweet little commoner who\'d never done anything wrong in her life.',
          '@rosalind And suddenly I was the villain of the story. And everyone remembered they were busy on Thursdays.',
        ],
        choices: [
          { text: '"Their loss. I\'m not busy on Thursdays."', go: 'thursday', aff: 10, flag: 'rosalind_thursday' },
          { text: '"Did you actually do anything villainous?"', go: 'villain', aff: 6, flag: 'rosalind_truth' },
        ],
      },
      thursday: {
        text: [
          'She looks at you. Something in her face wavers — a crack in porcelain.',
          '@rosalind:surprised ...You would come? Every Thursday? To drink tea with the villainess?',
          '@you If she\'ll have me.',
          'She snaps her fan open in front of her face. From behind it, very quietly:',
          '@rosalind:blush ...Thursday at three. Do not be late. I *loathe* lateness.',
          'When she lowers the fan, her eyes are suspiciously bright.',
        ],
        end: true,
      },
      villain: {
        text: [
          '@rosalind:smug I was *rude.* Frequently. I told her that her dress was the color of a bruised plum. It was.',
          '@rosalind I never hurt her. I never would. But a rejected fiancée with a sharp tongue makes a much better story than the truth.',
          '@you What\'s the truth?',
          'She sets down her teacup.',
          '@rosalind:sad That I never loved him. And he never loved me. And I was relieved. And *nobody* ever asked.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          { if: 'rosalind_thursday', text: "You've kept every Thursday at three since that first tea. Today, for the first time, she asked you to escort her somewhere *else*, in public, and she asked it very quickly, as if she expected you to refuse." },
          'The salon at the Pemberton house is full of nobility when you arrive with Rosalind on your arm. Conversation stops. Fans flutter. Whispers start.',
          '@noblewoman Oh, *Lady Ashcroft.* What a surprise. We heard you\'d been... *unwell.* After the whole *poisoning* affair.',
          'The room goes deathly quiet.',
          '@rosalind:surprised ...The *what?*',
          '@noblewoman Oh, haven\'t you heard? The Prince\'s fiancée fell ill at the garden party last week. Everyone *knows* it was you. Jealousy is *such* an ugly color, darling.',
          'Rosalind goes white. Her fan trembles in her hand. She opens her mouth for a cutting retort — and nothing comes out.',
        ],
        choices: [
          { text: 'Defend her publicly, with poise and wit. [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'defend', fail: 'defend_fail' },
          { text: 'Take her hand and walk her out of the room, head high.', go: 'leave', aff: 8 },
        ],
      },
      defend: {
        text: [
          'You step forward with a pleasant smile.',
          '@you How curious. I was at the garden party. The fiancée ate eleven cream puffs and then got on the carousel. Everyone saw it. I\'d call it "physics," not poison.',
          'A few people snicker.',
          '@you Also, Lady Ashcroft left early to deliver blankets to the orphanage. Anonymously. She does that every week. I\'m sure you knew that, Lady Pemberton, since your husband\'s name is on the donor list and his money isn\'t.',
          'There is a stunned silence. Then someone at the back begins to laugh. Then someone else. Lady Pemberton turns the color of a bruised plum and flees.',
          'Rosalind is staring at you. Her fan has fallen to the floor.',
        ],
        mood: 'surprised',
        aff: 12,
        flag: 'rosalind_defended',
        next: 'garden',
      },
      defend_fail: {
        text: [
          '@you She didn\'t poison anybody! She\'s — she\'s very nice! Underneath!',
          'A few people titter. It isn\'t a strong defense. But you stand in front of her the whole time, and you don\'t step aside.',
          'Eventually, Rosalind lays a hand on your arm.',
          '@rosalind ...Come. We\'re leaving.',
          'Her voice is perfectly steady. Her hand on your arm is shaking.',
        ],
        aff: 6,
        next: 'garden',
      },
      leave: {
        text: [
          'You take her hand, very deliberately, in front of everyone. Then you turn and walk her out of the salon, slowly, with your chin up, as though you were leaving a coronation.',
          'Nobody says a word.',
        ],
        next: 'garden',
      },
      garden: {
        text: [
          'You find a quiet bench in the Moonlit Gardens. Rosalind sits down very carefully, very straight.',
          'And then, for the first time since you\'ve known her, Lady Rosalind Ashcroft cries.',
          'Not prettily. Not elegantly. Great, ugly, hiccuping sobs that shake her whole body and wreck her makeup and make her drill-curls tremble.',
          '@rosalind:sad I didn\'t — I would *never* — I *hate* poison, it\'s so *common* —',
          '@rosalind:sad Why does everyone always believe the worst of me? Why is it always so *easy* for them?',
        ],
        choices: [
          { text: 'Hold her while she cries.', go: 'hold', aff: 10 },
          { text: '"Because you never let anyone see the best of you. But I see it."', go: 'see', aff: 10, flag: 'rosalind_seen' },
        ],
      },
      hold: {
        text: [
          'You put your arms around her. She stiffens — then collapses against you, burying her face in your shoulder, clutching your coat with both hands.',
          'You stay like that a long time. When she finally pulls back, her face is blotchy and her mascara is everywhere and she looks more beautiful than you\'ve ever seen her.',
          '@rosalind:angry ...If you tell *anyone* about this, I shall —',
          '@you Ruin me?',
          '@rosalind:blush ...*Kiss* you. I was going to say kiss you. Ohoho. How *unexpected.*',
          'And she does.',
        ],
        end: true,
      },
      see: {
        text: [
          'She looks at you through her tears.',
          '@rosalind:surprised You... *see* it?',
          '@you The orphanage blankets. The fruit basket for your rival. The honey water. The pigeons you pretend are evil. Thursdays at three.',
          { if: 'rosalind_hatboxes', text: "@you And the day we met, after you threatened to make me rue it, you said thank you for the hatboxes. Under your breath. I heard it." },
          '@rosalind:sad ...Nobody was ever supposed to notice any of that.',
          '@you I noticed.',
          'She takes your face in her hands and kisses you, fierce and salty with tears, right there in the Moonlit Gardens where anyone could see.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Midnight in the Ashcroft rose garden. There are no servants. No fans. No drills — her golden hair is down, loose and wavy past her shoulders, and you hardly recognize her without the armor of ringlets.',
          'She\'s wearing a simple nightgown under a silk wrap, standing among the white roses with her arms folded tightly.',
          '@rosalind In every story, the villainess gets her comeuppance. She is exiled. Or imprisoned. Or dies alone in a tower. She never, *ever* gets a happy ending.',
          '@rosalind:sad I have been preparing for my comeuppance for six months.',
          { if: 'rosalind_unscripted', text: "@rosalind:blush You told me there was no script. Behind the orange tree on Market Street, with custard everywhere. I've been trying very hard to believe you." },
          { if: 'rosalind_accomplice', text: "@rosalind:smug Lady Pemberton is *still* finding custard in her ears, you know. I've never had an accomplice before. I didn't know scheming could be so... *companionable.*" },
          'She turns to face you.',
          '@rosalind And instead, you came along. And I don\'t know what to *do* with you.',
        ],
        choices: [
          { text: '"Write a new ending."', go: 'ending', aff: 10 },
          { text: 'Offer your arm, like a gentleman at a ball. "May I have this dance, my lady?" [Charm check 4]', check: { stat: 'charm', dc: 4 }, pass: 'dance', fail: 'ending' },
        ],
      },
      ending: {
        text: [
          '@rosalind:surprised A new ending.',
          'She laughs, softly. Not her villainess laugh. A real one.',
          '@rosalind:happy Ohoho. How *presumptuous.* I adore it.',
        ],
        next: 'night',
      },
      dance: {
        text: [
          'She stares at your offered arm. Then, slowly, she places her hand on it.',
          'There\'s no music. You dance anyway, among the roses, in the moonlight. She leads at first, out of habit. Then she lets you lead, and closes her eyes, and rests her head on your shoulder.',
          '@rosalind:blush I danced with Edmund at a hundred balls. I never once felt like this.',
          '@rosalind:blush I didn\'t know it was *supposed* to feel like this.',
          { if: 'rosalind_truth', text: "@rosalind:sad I told you once that I never loved him. I didn't know, then, what I was comparing him to." },
        ],
        aff: 14,
        flag: 'rosalind_danced',
        next: 'night',
      },
      night: {
        text: [
          "She kisses you among the white roses. Then she takes your hand and leads you up the back stairs of the great silent house to her bedchamber: violet silk, gilt mirrors, and a canopy bed with a ridiculous number of pillows.",
          "@rosalind:angry Don't comment on the pillows.",
          "@you There are at least forty —",
          "@rosalind:angry *Don't comment on the pillows.*",
          { if: 'rosalind_honey', text: "On the nightstand stands a crystal carafe of honey water. She sees you notice it. \"For the laugh,\" she says, primly. \"I anticipate laughing.\"" },
          "She sits on the edge of the bed, regal even now, and lifts her chin.",
          "@rosalind:smug You'll undress me. Slowly. A lady is never rushed.",
          "It's an order, delivered with all the imperiousness of House Ashcroft. But her voice wavers, just slightly, on the last word.",
          "So you do it slowly. You unhook the gown at her back one tiny hook at a time, kissing the nape of her neck between each one, and you feel her composure crack a little more with every kiss. When the last hook comes free and the silk slides from her shoulders, she lets out a long, shuddering breath she seems to have been holding for six months.",
          "@rosalind:blush ...More. Don't stop. That is *also* an order.",
          "Without the fan and the curls and the cutting words, she's startlingly shy, then startlingly bold, and entirely, wonderfully *honest.* She says exactly what she wants and how and when, as imperious in this as in everything else. Then, somewhere in the night, all her orders melt away into soft, wordless sighs, and the villainess forgets entirely that she was ever supposed to be in control...",
          "...",
          "In the morning she wakes in a nest of pillows with her hair everywhere, looks at you, and laughs.",
          "@rosalind:surprised I just realized. I've finally done something truly scandalous.",
          "@rosalind:happy I've fallen in *love.* Ohohohoho!",
          "It's the best villainess laugh you've ever heard.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "A knock at the door. A maid's voice: \"Lady Ashcroft? Your morning tea. And... Lady Pemberton is downstairs. She says it's urgent. She says she saw a carriage leave very late last night, and she wishes to know whose.\"",
          "Rosalind sits bolt upright among the pillows. Her hair is a tangled golden mess without a single drill in sight. She's wearing nothing but your shirt.",
          { if: 'rosalind_fingers', text: "She has also, somehow, already stolen a pastry from the tea tray outside the door and is eating it with her fingers, scattering crumbs across forty pillows with total disregard." },
          "@rosalind:angry That *viper.* She's here to gossip. She'll tell the whole Noble Quarter by luncheon.",
          "She looks at you. Something wicked dawns in her eyes.",
          "@rosalind:smug ...Unless.",
        ],
        choices: [
          { text: "\"Unless we go downstairs together. Like this.\"", go: "together", aff: 6 },
          { text: "\"Let her gossip. Come back to bed.\"", go: "bed", aff: 6 },
          { text: "\"Ohohoho!\" (Do the laugh.)", go: "laugh", aff: 5 },
        ],
      },
      together: {
        text: [
          "You walk into the drawing room hand in hand, you in your rumpled clothes, Rosalind in your shirt and a silk robe with her hair loose around her shoulders.",
          "Lady Pemberton drops her teacup.",
          { if: 'rosalind_defended', text: "She sees you, and goes faintly plum-colored, clearly remembering the salon and the donor list." },
          "@rosalind:smug Good morning, Lady Pemberton! You've met my *lover*, I believe? Do sit down. Have a scone. Spread whatever you like about us. *Ohohohoho!*",
          "Lady Pemberton flees without her hat. By luncheon, the entire Noble Quarter knows. By dinner, three noblewomen have sent Rosalind letters of support and asked for the name of her dressmaker.",
        ],
        end: true,
      },
      bed: {
        text: [
          "@rosalind:surprised Let her — *gossip?* Unchallenged?",
          "@you Let her.",
          "She considers this for a long moment. It clearly goes against every instinct she has. Then she lies back down in the pillows and pulls the covers over both your heads.",
          "@rosalind:blush Tell her I'm *indisposed.* Tell her I'll be indisposed all day.",
          "The maid tells her. Lady Pemberton waits for three hours. Rosalind remains indisposed.",
        ],
        end: true,
      },
      laugh: {
        text: [
          "You throw your head back and laugh the villainess laugh: *OHOHOHO!* This time, after weeks of her lessons, it's perfect. It echoes through the whole estate.",
          "Rosalind stares at you, utterly delighted.",
          "@rosalind:happy Your *form!* Your diaphragm! Your *projection!* Oh, I've created a monster.",
          { if: 'rosalind_pupil', text: "@rosalind:happy The very first day, you sounded like an affronted goose. And look at you now. I could weep. I *am* weeping. Don't look." },
          "Downstairs, Lady Pemberton hears the laugh, goes very pale, and decides to come back another day.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Every head on the festival hill turns as Lady Rosalind Ashcroft arrives, in a gown of shimmering midnight blue, her drills more magnificent than ever, her fan glittering with sapphires.',
          'She walks straight past the Crown Prince and his fiancée — pausing only to compliment the fiancée\'s dress, sincerely, which leaves the poor girl utterly baffled — and comes to you.',
          '@rosalind:smug I\'m told this is where commoners watch the stars.',
          '@rosalind:smug How *quaint.* I shall watch them with you.',
          'She sits down on the grass. In silk. Several noblewomen faint.',
          { if: 'rosalind_thursday', text: "@rosalind:blush It's a Thursday, you know. I checked. Three o'clock came and went this afternoon and you were at my table, as always. I've decided the stars are just a very late tea." },
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'As the stars begin to fall, she slips her hand into yours.',
          { if: 'rosalind_danced', text: "Somewhere down the hill, a fiddler strikes up a waltz. Her fingers tighten on yours. You both know exactly which dance in the rose garden she's thinking of." },
          "@rosalind So. Here we are, at the end of the story. The stars. The legend. Everyone watching.",
          "@rosalind:sad Tell me, {name}. What happens to the villainess now?",
        ],
        choices: [
          { text: '"That\'s up to you. It\'s your story."', go: 'decide' },
          { text: '"OHOHOHO!" (Laugh it with her, at the whole hill.)', go: 'reign', if: { any: ['rosalind_accomplice', ['rosalind_defended', 'rosalind_pupil']] } },
          { text: '"Put down the fan, Rosalind. You don\'t need it tonight."', go: 'unmask', if: { any: ['rosalind_unscripted', ['rosalind_seen', 'rosalind_fingers']] } },
        ],
      },
      decide: {
        text: [
          '@rosalind:smug I have decided. I will remain the villainess. I am *very* good at it, and society needs someone to tell them their hats are hideous.',
          '@rosalind But every good villainess needs a partner in crime. Someone to help her ruin the reputations of horrible people and fund orphanages in secret.',
          '@rosalind:blush Will you be mine?',
          'You answer by kissing her, and she drops her fan entirely for the second time in her life.',
          '@rosalind:happy ...Ohoho. *Yes.* Very good answer.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'You marry in the Ashcroft rose garden. The guest list is short. Every single guest attends.',
          'Lady Rosalind remains the most feared woman in high society. Her tea parties become legendary — not for who is invited, but for who *isn\'t.* Cruel gossips, petty tyrants and anyone who has ever kicked a dog are banned for life. Everyone else is welcome. Every Thursday. At three.',
          'The Prince\'s former fiancée — now just a friend — becomes a regular. So does Lady Pemberton, eventually, after an apology that takes three hours and a great deal of crying.',
          'Rosalind still laughs "Ohohoho!" at people who annoy her. She still sets her drills every morning. You help now. It only takes an hour.',
          'And in the great Ashcroft library, there\'s a new book on the shelf, bound in violet leather. Its title is *The Villainess Who Got a Happy Ending.*',
          'She commissioned it herself. She says she wanted *someone* to finally write it properly.',
        ],
        ending: 'rosalind',
      },
      reign: {
        text: [
          "You stand up on the hill, snap open an imaginary fan, throw back your head and laugh: *OHOHOHOHO!*",
          "The festival goes silent. A thousand faces turn toward you.",
          "Rosalind looks up at you, and something blazes in her eyes like the stars falling over her head. She rises in a rustle of midnight silk, snaps open her sapphire fan, and joins you.",
          "@rosalind:smug *OHOHOHOHOHO!*",
          "Two perfect villainess laughs in harmony ring out across the hill, from the diaphragm, with *projection.* The Crown Prince takes a step backwards. Lady Pemberton grabs her husband's arm. Somewhere, a baby begins to laugh along.",
          "@rosalind:happy You *understand.* They want a villainess? Then they shall have *two!* We shall be *dreadful,* darling. We shall be the most dreadful couple this kingdom has ever seen!",
          "She kisses you there on the hill, fan raised to hide nothing at all, while the stars rain down like applause.",
        ],
        next: 'reign_epilogue',
      },
      reign_epilogue: {
        text: [
          '*Some time later...*',
          "Within a year, the Noble Quarter has a new word for being found out: *getting Ashcrofted.*",
          "It happens to the landlord who doubled the rent on the widows' row: he wakes to find his debts posted on every lamppost in town, in gorgeous calligraphy, by an enchanted quill. It happens to the magistrate who took bribes: his ledgers are read aloud at his own birthday party, by a choir. It happens to the lord who beat his horses. Nobody quite knows what happened to him, but he now runs a donkey sanctuary, and he flinches whenever he hears a fan open.",
          "Everyone knows who's responsible. Nobody can prove a thing. Lady Rosalind and her terrible commoner spouse are always somewhere else at the time, having tea, with witnesses.",
          "You have matching fans. You have matching laughs. You have a scheme ledger, bound in violet leather, and an evil pigeon network that now covers three provinces. You plan your crimes on Thursdays, at three, in the conservatory, over Silver Needle tea.",
          "And every single coin your victims are made to repay goes, anonymously, to the orphanages, the widows' row and the free school on Market Street.",
          "Society still calls her the villainess. The orphans call her something else, though never where she can hear it.",
          "When the Prince finally works up the courage to ask what she's been doing with her life, she smiles behind her fan and says: \"Oh, Edmund. *Ruining* people. With my partner.\"",
          "Then you both laugh, in harmony, and he has to sit down.",
        ],
        ending: 'rosalind_reign',
      },
      unmask: {
        text: [
          "She looks down at the sapphire fan in her hand as though she has never seen it before.",
          "@rosalind:surprised Don't need it? I *always* need it. It's what I hide behind. Everyone knows that.",
          "@you I know. Not tonight.",
          "For a long moment she doesn't move. Then she furls the fan, slowly, and lays it in the grass.",
          "And then, as the whole hill watches, she reaches up and begins taking the pins out of her hair. One. Two. Ten. The great golden drills come down one by one into loose, ordinary waves, until she's just a woman in a blue dress on a hillside, with stars in her hair.",
          "@rosalind:sad I'm Rosalind. I'm not a villainess. I never was. I fund the orphanage on Wendel Street and the soup kitchen at the temple and the free school, and I've been doing it for years, and I didn't poison anyone, and I *never* loved Edmund, and I am —",
          "Her voice wobbles. She lifts her chin anyway.",
          "@rosalind:blush — I'm hopelessly in love with an adventurer in a very ordinary coat. There. Now *everyone* knows everything.",
          "The silence lasts forever. Then the Prince's fiancée starts to clap. Then the orphanage matron. Then, impossibly, Lady Pemberton. Then the whole hill.",
          "@rosalind:surprised Oh, no. Oh, no, they *like* me. What do I do? *What do I do now?*",
          "You kiss her. That seems to answer it.",
        ],
        next: 'unmask_epilogue',
      },
      unmask_epilogue: {
        text: [
          '*Some time later...*',
          "It turns out that being liked is much harder than being hated. Rosalind is terrible at it, at first.",
          "People wave at her in the street, and she panics and snaps something cutting about their shoes, and they laugh, because they know now, and it makes her furious, and then it makes her laugh too. A real laugh. Small and surprised. It gets less small every month.",
          "She stops setting the drills. Her maid weeps for a week and then takes up watercolors with the two hours she has back every morning. The sapphire fan goes into a glass case in the hall, labeled *RETIRED,* beside the daisy crown, which she has had preserved in resin at enormous expense.",
          "She runs the Ashcroft charities openly now, in plain dresses, with her sleeves rolled up. She is a ferocious administrator. Corrupt suppliers fear her more than they ever feared the villainess. The orphans adore her and call her Aunt Ros, and she pretends to hate it, and fails.",
          "She does still say \"ohoho.\" But only when something is genuinely funny, and only to you.",
          "On Thursdays at three, the conservatory table is laid for twelve, and every chair is full.",
          "And sometimes, very late, when the house is asleep, she takes the old fan out of its case and opens it in front of the mirror, just to see. Then she puts it back, and comes to bed, and leaves the whole of her face uncovered. She says it's the most scandalous thing she's ever done.",
        ],
        ending: 'rosalind_unmasked',
      },
    },
  },
});

/* ------------------------------------------------------------------ Rosalind's jealousy event */
(function () {
  // The heroine Rosalind has cast as "the Heroine": whoever the player is closest to.
  function rivalName(s) {
    let best = null;
    FL.charOrder.forEach(function (id) {
      if (id === 'rosalind' || !s.chars[id] || s.chars[id].stage < 3) return;
      if (!best || s.chars[id].aff > s.chars[best].aff) best = id;
    });
    return best ? FL.characters[best].short : 'that woman';
  }

  FL.addScene('rosalind_jealous', {
    start: {
      text: function (s) {
        const rival = rivalName(s);
        return [
          "You're crossing Market Street in the afternoon when a gloved hand shoots out from behind a potted orange tree outside the confectioner's and hauls you in by the collar.",
          "Behind the tree, someone has set up a small folding writing desk, a cushion, a spyglass and a silver tea service. Crouched among them, in a black lace veil and a gown the color of a bruise, is Lady Rosalind Ashcroft.",
          "@rosalind:smug Ohohoho! Welcome, darling, to my *lair.*",
          "@rosalind:angry Don't play the innocent. I have eyes. I have informants. I have *pigeons.* I know about " + rival + ".",
          "@rosalind Every story has a Heroine, {name}. Sweet. Plucky. Beloved by small animals. She wanders in out of nowhere and steals the villainess's beloved away, and everybody *applauds.* It happened to me once, at the Royal Ball. I am *not* letting it happen twice.",
          "She unrolls a scroll across the desk. It is titled, in violet ink, *THE GRAND HUMILIATION.* There are diagrams.",
          "@rosalind:smug Phase one: my pigeons, trained in the arts of distraction. Phase two: an *entire bucket of custard,* balanced over the confectioner's door. My informants say she passes at four o'clock. Phase three: I arrive, coincidentally, in my best gown, and I *laugh.*",
          "She points up. There is, indeed, a bucket of custard wedged above the confectioner's door, with a long silk cord running from it to the orange tree. Three pigeons sit on the awning, looking shifty.",
          "@rosalind She'll be *custardy.* And you'll finally see her for what she truly is: a woman covered in custard. And then you'll —",
          "Her voice catches, just for a moment.",
          "@rosalind:sad — you'll come back to Thursdays. Ohoho. Obviously.",
        ];
      },
      choices: [
        { text: "\"Rosalind. There's no Heroine. There's no script. There's just you, and me, and a great deal of custard.\" [Charm check 3]", check: { stat: 'charm', dc: 3 }, pass: 'melt', fail: 'backfire' },
        { text: "\"Ohohoho! Count me in. What's my role?\"", go: 'accomplice' },
        { text: "Step under the bucket yourself and pull the cord.", go: 'martyr' },
      ],
    },
    melt: {
      text: [
        "You take the silk cord gently out of her hand.",
        "@you There's no Heroine coming to steal me, Rosalind. Nobody's writing this. Nobody's going to make you the villain of it unless you hand them the pen.",
        "@rosalind:angry You don't — you don't *know* that. That's what Edmund said. *Nothing will change, Ros.* And then it was the Royal Ball and the commoner girl and three hundred people *laughing* —",
        "@you I'm not Edmund. And I'm not going anywhere.",
        "She stares at you through the black lace. Then she rips the veil off, and her face crumples, and she sits down very suddenly on her cushion behind the orange tree.",
        "@rosalind:sad I don't even dislike her. Isn't that awful? She's perfectly lovely. I bought her a scarf last week. Anonymously. I just looked at the two of you and I thought, *oh, here it comes, here's my comeuppance,* and I panicked and bought a *bucket.*",
        "@rosalind:blush ...I'm a very stupid woman, aren't I.",
        "@you You're a frightened one. That's different.",
        "She laughs, wetly, and leans her head on your shoulder. At four o'clock, the two of you climb up and carefully take the custard down, and she donates it to the orphanage with a note: *For pudding. Do not ask.*",
      ],
      flag: 'rosalind_unscripted',
      affTo: { rosalind: 8 },
      end: true,
    },
    backfire: {
      text: [
        "@you Rosalind, there's no Heroine, there's no —",
        "@rosalind:angry That's *precisely* what a person who's been stolen by a Heroine would say! Pigeons! *Positions!*",
        "She flourishes her fan at the awning. The three pigeons, who have been trained, after all, to steal from the rich, take one look at her diamond hair-pins and dive straight at her head.",
        "@rosalind:surprised *No!* Not me! The *other* one! The — *unhand my pins, you feathered traitors!*",
        "She staggers out from behind the orange tree, flailing, tangled in the silk cord. The cord goes taut. The bucket tips.",
        "There is a sound like a very large and very wet kiss.",
        "Lady Rosalind Ashcroft stands in the middle of Market Street, in a black lace veil, absolutely coated from her drills to her hem in yellow custard. A pigeon lands on her head and begins to eat.",
        "@rosalind:sad ...",
        "@rosalind:sad Kill me. Somebody, please, just —",
        "You start to laugh. You can't help it. You try to stop and it gets worse. And then, to your astonishment, so does she: a helpless, custardy, completely undignified laugh that has nothing whatsoever of the villainess in it.",
        "@rosalind:happy I'm the Heroine. Oh, no. *I'm* the one in the custard. That makes me the — ohoho — *ohohoho* —",
        "You walk her home, dripping. She holds your hand the entire way and doesn't care who sees.",
      ],
      flag: 'rosalind_custard',
      affTo: { rosalind: 5 },
      end: true,
    },
    accomplice: {
      text: [
        "Rosalind's eyes go wide behind the veil. Then she seizes both your hands.",
        "@rosalind:happy An *accomplice?* I've never had an accomplice! Villainesses always scheme *alone!* You can work the cord! I'll handle the laugh!",
        "You crouch behind the orange tree together, shoulder to shoulder, watching the confectioner's door through the spyglass. She narrates in a breathless whisper. She has also packed sandwiches. It's the most fun you've had all week.",
        "At four o'clock exactly, the door swings open.",
        "@rosalind:smug *Now!*",
        "You pull the cord. The bucket tips. Custard descends.",
        "Directly onto Lady Pemberton, who has just stepped out of the confectioner's with a box of éclairs.",
        "There is a terrible silence on Market Street. Lady Pemberton stands dripping and yellow. A pigeon lands on her hat. She looks slowly around and sees two heads poking out from behind an orange tree.",
        "@noblewoman *ASHCROFT!*",
        "@rosalind:surprised Run.",
        "You run. You run all the way down Market Street, hand in hand, with Lady Pemberton's shrieks echoing behind you, and you duck into an alley and collapse against the wall, and Rosalind is laughing so hard she can't stand up.",
        "@rosalind:happy That was — that was the *wrong woman* — that was *better than the right woman* —",
        "She wipes her eyes, still gasping, and looks at you as if seeing you for the first time.",
        "@rosalind:blush ...I don't think I care about the Heroine anymore. I think I've just realized I'd much rather be wicked with you than jealous without you.",
      ],
      flags: { rosalind_accomplice: true, rosalind_custard: true },
      affTo: { rosalind: 8 },
      end: true,
    },
    martyr: {
      text: [
        "Before she can stop you, you step out from behind the orange tree, plant yourself under the confectioner's door and give the silk cord a firm tug.",
        "@rosalind:surprised {name}, *no* —",
        "The bucket tips. You are, instantly and completely, custard.",
        "Market Street stops to stare. A pigeon lands on your shoulder. You wipe your eyes clear and turn to her, dripping.",
        "@you There. The Heroine's been humiliated. It's me. I'm the one who walked into your story out of nowhere, so I suppose I'm the Heroine. And here I am, covered in custard, and I'm still not going anywhere.",
        "Rosalind stares at you for a very long time.",
        "Then she walks out from behind the tree, in her best lace and her black veil, right into the puddle of custard, and takes your yellow, sticky face in both her gloved hands.",
        "@rosalind:sad You absolute *fool.* You ridiculous, impossible —",
        "She kisses you, custard and all, in the middle of Market Street, in front of a crowd. When she pulls away there is custard on her nose, and on her veil, and in her drills, and she doesn't seem to care at all.",
        "@rosalind:blush There's no Heroine. Is there. There was only ever me, being frightened. ...You taste of vanilla. I'm keeping you.",
      ],
      flags: { rosalind_unscripted: true, rosalind_custard: true },
      affTo: { rosalind: 10 },
      end: true,
    },
  });

  FL.addEvent({
    id: 'rosalind_jealous',
    owner: 'rosalind',
    slot: 1,
    scene: 'rosalind_jealous',
    priority: 10,
    cond: function (s) {
      const r = s.chars.rosalind;
      if (!r || r.stage < 2 || r.stage > 3) return false;
      return FL.charOrder.some(function (id) { return id !== 'rosalind' && s.chars[id] && s.chars[id].stage >= 3; });
    },
  });

  // Portrait in the scene header.
  FL.sceneCast = FL.sceneCast || {};
  FL.sceneCast.rosalind_jealous = ['rosalind'];
})();
