FL.addCharacter({
  id: 'hikari',
  name: 'Hikari Hoshino',
  short: 'Hikari',
  trope: 'Self-Proclaimed Isekai Protagonist',
  color: '#5aa9ff',
  favStat: 'might',
  endingTitle: 'Isekai\'d Into Love',
  endings: { hikari_hero: 'The Hero After All', hikari_home: 'Reverse Isekai' },
  teaser: 'A young woman in a strange pleated uniform is pointing dramatically at the sky and shouting "STATUS OPEN!" Nothing is happening.',
  blurb: 'A young woman from a faraway world called "Tokyo," who was hit by a cart-pulling ox on her way to work, woke up here, and is *absolutely certain* she has been reincarnated as the Chosen Hero. She is waiting for her cheat skill to activate. She has been waiting for six months. She is brave, earnest, dramatic and very, very homesick.',
  schedule: ['guild', 'square', 'tavern'],
  gifts: { love: ['scroll'], like: ['novel', 'cakes', 'plushie', 'chocolate', 'tofu', 'quill'], hate: ['steak'] },
  giftLines: {
    love: ['@hikari:surprised Wait. Wait wait wait. Is this a *rare drop?* Did you just give me a *rare drop?!*', '@hikari:happy This is going in my inventory. My *real* inventory. The bag under my bed.'],
    like: '@hikari:happy Oh! A gift event! Did I just trigger a gift event?! Affection up! ...Wait, is it *my* affection or *yours?*',
    neutral: '@hikari Huh. A key item? A plot device? ...Oh, it\'s just a thing. Thanks!',
    hate: ['@hikari:sad Is that... wyvern meat? Raw? I\'m sorry, I still can\'t. In my world we had *convenience stores.* With *rice balls.* In *little plastic wrappers.*', 'She looks very homesick all of a sudden.'],
    special: {
      scroll: ['@hikari:surprised A SPELL SCROLL! Is this — is this my *skill book?* My overpowered ultimate technique?!', 'She unrolls it, reads it, and casts it with enormous drama. Sparkles shoot from her fingers. Just sparkles.', '@hikari:happy ...It\'s *beautiful.* I\'m keeping it. This is the start of my power-up arc. I can *feel* it.'],
      tofu: ["@hikari:surprised Fried tofu pockets? Sweet ones? These are — these are *almost* —", "She takes a bite. Her eyes fill up instantly.", "@hikari:sad They're wrong. There's no rice inside. They're completely wrong. They taste like the shrine festival near my grandma's house.", "@hikari:happy I'm going to eat every single one and cry the whole time. It's fine. This is a *good* cry. This is a *flashback* cry."],
      quill: ["@hikari:surprised A pen that writes by *itself?* That's an auto-writing skill! That's a *passive ability!*", "The quill scratches out a line on her sleeve: *Your sword technique is an embarrassment to sticks.*", "@hikari:happy It's *roasting* me! It has a personality! I've got a *sentient weapon!* Okay, it's a pen, but in some genres that counts!"],
      fork: ["@hikari:surprised A fork. Is it a legendary fork? A cursed fork? The Fork of Destiny, sealed away for a thousand years, waiting for its chosen one?", "She holds it aloft. Nothing happens.", "@hikari:smug ...It's probably a level thing. I'll unlock it at level ten. Same as everything else."],
      novel: ["@hikari:blush *The Duke's Forbidden Passion, Volume Nine.* Oh, this is the good one. The Duke gets *amnesia* in this one. I've been waiting to see if he gets amnesia.", "@hikari:smug In my world we call this a light novel. It's not light. It weighs a *ton.* That's where the passion is."],
    },
    repeat: "@hikari:smug Another one? You're *grinding,* aren't you. You found the item that gives the most affection and now you're just farming it. ...I respect it. It's a valid strategy. It's *my* strategy. But you could try a side quest once in a while.",
  },
  talk: [
    ['@hikari:surprised STATUS OPEN! ...STATUS... OPEN? Status, please open? Pretty please?', 'Nothing happens.', '@hikari:smug It\'s fine. It\'s probably a level thing. I\'ll unlock it at level ten.'],
    ['@hikari:happy In my world, I was an office worker. I made spreadsheets. Eleven hours a day. Then BAM — ox cart. And now I\'m HERE! Isn\'t it AMAZING?!', 'She says it cheerfully. She looks a little sad.'],
    ['@hikari Every isekai protagonist gets a harem, a cheat skill, and a tragic backstory! I have... a tragic backstory. Kind of. Two out of three isn\'t bad. Wait, that\'s one.'],
    ['@hikari:sad I tried to make friends with a slime. It ate my sandal. I\'ve decided slimes are a *later-game* friend.'],
    ['@hikari:happy Do you think there\'s a Demon Lord? There\'s always a Demon Lord. I want to defeat the Demon Lord! Or marry him! Depending on the genre!'],
    ['She\'s sitting on the edge of the fountain, swinging her legs, staring at nothing.', '@hikari:sad I miss ramen. And trains. And my mom. Is that weird? To miss trains?'],
    ["@hikari:smug I've been training! Two hundred sword swings every morning!", "@hikari ...Well. Forty. With breaks. And the sword is a stick. But it's a *very heroic* stick. I've named it."],
    ["@hikari Okay, quick question, totally hypothetical. If a girl from another world ran round a corner with toast in her mouth and crashed into you, would that be a meet-cute?", "@hikari:blush Asking for a friend. The friend is me. I've been carrying toast around for three days. It's getting very stale."],
    ["@hikari:happy In my world we had a thing called *overtime.* You stay at work after work is over. For free. Because the boss is still there.", "@hikari Here, when the Guild closes, Mira at the front desk *throws* everyone out. With a broom. I've never felt so *respected.*"],
    ["@hikari:sad Do you know what this world doesn't have? Vending machines. You can't just put a coin in a wall and get a drink.", "@hikari:surprised I tried it at the Guild. I found a crack and put a coin in. Mira charged me for the crack."],
    { if: 'hikari_join', lines: ["@hikari:happy People at the Guild have started calling us \"the Status Open Twins.\" Mira says it's an insult.", "@hikari:smug I've decided it's our party name. We need matching capes. I've already bought the fabric. It was very expensive. It was a curtain."] },
    { if: 'hikari_sidekick', lines: ["@hikari:smug I've accepted my role as your sidekick. I've been studying the genre. Sidekicks get the best one-liners, the noble sacrifice scene, and *sometimes* the love interest.", "@hikari:blush I'm going for option three. I'm skipping option two. Option two seems like a lot."] },
    { if: 'hikari_curry', lines: ["@hikari:happy I tried making Mom's curry. From memory. With *local ingredients.* There's no curry powder in this world, so I used mustard, cinnamon and a lot of hope.", "@hikari:sad I put in too much carrot. On purpose. It tasted *exactly* wrong. I cried into it a bit. That's probably also traditional."] },
    { if: { stage: 3 }, lines: ["@hikari:blush You know how in stories there's that one person the heroine can't stop thinking about, so she messes up her sword practice and walks into doors?", "@hikari:sad I walked into a door today. Two doors. One of them was *open.*"] },
  ],
  afterTalk: [
    ["@hikari:blush I've been keeping a quest log. Under \"completed\" I wrote \"the big event\" and drew forty little hearts. Mira saw it at the Guild. She asked what quest it was. I lied badly."],
    ["She strikes a dramatic pose.", "@hikari:surprised STATUS OPEN!", "Nothing happens. She leans in and whispers:", "@hikari:smug ...Status: wants to stay over tonight. Accept quest Y/N?"],
    ["@hikari:blush In my world, there's a thing called a \"route.\" When you pick one person and see their whole story. I picked mine. It's you. I'm never doing another route. This is the true ending."],
    ["@hikari:smug The light novels always skip to the morning after. I'm writing my own now. It does NOT skip. It is VERY detailed. I'll never let anyone read it."],
    ["@hikari:happy I updated my quest log again. New entry: *Main Quest: Be Happy.* Status: in progress. Reward: unknown. Party members: two.", "@hikari:blush I crossed out \"unknown\" and wrote your name. Then I crossed *that* out because it was embarrassing. Then I wrote it again. The page is mostly holes now."] ,
    { if: 'hikari_secret', lines: ["@hikari:smug The secret third route has a sequel now. Route Three-and-a-Half.", "@hikari:blush It unlocks when you look at me like that across the Guild. ...You're doing it right now. Route unlocked. Meet you upstairs. Bring the blanket."] },
    { if: 'hikari_want', lines: ["@hikari:blush You asked me what I wanted. On the night of the letter. Not the hero. Me.", "@hikari:happy I wrote it down afterwards, so I'd remember. The list is one item long. It's not a cheat skill."] },
    { if: 'hikari_rival', lines: ["@hikari:smug Technically we're still rivals. I've checked. We never formally ended the rivalry. So now we're rivals-to-lovers, which is the *best* genre.", "@hikari:happy You get to bicker *and* kiss. I want to bicker. Say something smug. Go on. Then I'll kiss you to shut you up. It's *tradition.*"] },
    { if: 'hikari_date_gardens', lines: ["@hikari:happy The gardens. Under the blossoms. In my world that's called *hanami,* and it's the most romantic thing you can do in spring.", "@hikari:blush I didn't tell you what it's called at the time because I was busy *dying.* Quietly. On the inside. Of happiness."] },
  ],
  dateFav: 'gardens',
  dates: {
    dinner: {
      start: {
        text: [
          "Hikari arrives at the Tipsy Wyvern in her sailor uniform, freshly ironed with a hot stone, and slides into the corner booth across from you with the grim focus of a knight entering a boss room.",
          "@hikari:smug Dinner date. Candlelight. Private booth. This is a *CG event.* That's when the story stops and there's a beautiful painting of the scene. I need us both to look very attractive for the next ten minutes.",
          "She keeps glancing down at her left palm. There is writing on it. A lot of writing.",
          "@hikari:blush Okay. Okay okay okay. I've prepared some lines.",
        ],
        choices: [
          { text: "\"Go on, then. Do the lines.\"", go: 'lines', aff: 5 },
          { text: "Order her a bowl of the Wyvern's noodle soup.", go: 'noodles', aff: 4 },
          { text: "\"Is that... a script? On your hand?\"", go: 'hand', aff: 2 },
        ],
      },
      lines: {
        text: [
          "She takes a deep breath, picks up a dumpling with her fork, and holds it across the table.",
          "@hikari:blush Say *aaah.*",
          "You say *aaah.* She feeds you the dumpling. Then she puts both hands over her face and makes a long, high noise like a kettle achieving enlightenment.",
          "@hikari:happy It *worked!* The \"say aah\" event *worked!* That's the most powerful technique in the whole romance genre! I didn't think I'd survive using it!",
          "@you Your turn.",
          "@hikari:surprised My — *my* turn? Nobody said there was a *counter-attack —*",
        ],
        next: 'end',
      },
      noodles: {
        text: [
          "Madame Bettina, the Wyvern's owner, brings out a big bowl of thick noodle soup with an egg floating on top, and winks at Hikari, who goes very quiet.",
          { if: 'hikari_noodles', text: "@hikari:sad You remembered. That it makes me feel... you know. Less far away.", else: "@hikari:sad How did you know? It's not ramen. It's not even close. But it makes me feel... you know. Less far away." },
          "She slurps it noisily and happily, the way you're apparently supposed to, and gets broth on her nose, and doesn't once look at her hand.",
        ],
        next: 'end',
      },
      hand: {
        text: [
          "She snatches her hand under the table.",
          "@hikari:surprised NO. It is NOT. It's — it's a *tattoo.* A hero's tattoo. Of — of sacred runes.",
          "@you It says \"compliment their eyes, then laugh mysteriously.\"",
          "@hikari:angry THE RUNES ARE *ANCIENT* AND *MYSTERIOUS* AND YOU SHOULDN'T BE ABLE TO READ THEM.",
          "She sulks for five whole minutes, then compliments your eyes and laughs mysteriously, extremely badly. It's honestly very effective.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "By the end of the meal she's forgotten all about the CG and is just talking, about her old office and the cat next door and how the trains used to sound at night, her feet hooked around yours under the table.",
          { if: { stage: 4 }, text: "@hikari:smug You know what usually comes after the dinner CG? The *walking home* CG. And then the *goodnight at the door* CG. And then — well. Some routes skip the door entirely." },
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          "At the far end of the Moonlit Gardens there's a grove of moonblossom trees in full bloom: pale pink flowers, almost white in the lantern light, and petals drifting down over everything like slow snow.",
          "Hikari stops dead at the edge of the grove. She doesn't say anything. For once in her life, she doesn't say *anything.*",
          "@hikari:sad ...They look like the cherry trees. Back home. In spring, everyone goes out under them with blankets and food and sits there all day, just looking up. Even the boss. Even *my* boss.",
          "@hikari:happy I didn't know this world had them. Six months and I didn't know.",
        ],
        choices: [
          { text: "Catch a falling petal and give it to her.", go: 'petal', aff: 6 },
          { text: "\"Tell me what spring was like back home.\"", go: 'spring', aff: 4 },
          { text: "Shake the branches so the petals come down all at once.", go: 'shake', aff: 2 },
        ],
      },
      petal: {
        text: [
          "It takes you a few tries. Petals are slippery and the wind is cheating. But eventually one drifts right into your palm, and you hold it out to her.",
          "@hikari:surprised You — oh no. Oh *no.* Do you know what that *means?*",
          "@hikari:blush Back home, they say if you catch a falling petal before it touches the ground, you get a wish. And if you catch one for somebody else, it's — it's basically a — it's very — you can't just *do* that —",
          "She takes the petal very carefully and puts it in the pocket of her sailor uniform, right over her heart, and holds her hand there for a moment.",
        ],
        next: 'end',
      },
      spring: {
        text: [
          "She sits down under the biggest tree, and you sit beside her, and she tells you. About picnics under the blossoms with her mom and her little brother. About the year it rained and they all sat under one umbrella and ate soggy sandwiches and laughed. About the petals in the river, so many the water turned pink.",
          "@hikari:sad I thought I'd never see it again.",
          "She tips sideways until her ponytail is squashed against your arm, and stays there.",
          "@hikari:happy This is better, though. Don't tell my mom. It's better because of who I'm sitting with.",
        ],
        next: 'end',
      },
      shake: {
        text: [
          "You grab a low branch and give it a good shake. Petals come down in a glorious pink storm. So does a squirrel. It lands on Hikari's head.",
          "@hikari:surprised AAAH! A MONSTER! AN AMBUSH! A — oh. Oh, it's a squirrel. Hello, squirrel.",
          "The squirrel looks at her. She looks at the squirrel. It leaves.",
          "@hikari:happy ...That was my first ever *random encounter.* Thank you. I think.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "You stay under the moonblossoms until the lanterns burn low, petals collecting in her hair and on your shoulders and in the folds of her skirt, and she doesn't shout \"STATUS OPEN\" once.",
          { if: { stage: 4 }, text: "@hikari:blush In the stories this is where the couple kisses under the blossoms and the petals swirl around them dramatically. I've been practising. With the wind. Hold still. Okay. *Now.*" },
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          "The moment Hikari sees Saltbreeze Harbor at sunset — the sand, the waves, the gulls, the pier going out into the gold — she grabs both your arms.",
          "@hikari:surprised Oh no. Oh *no.* {name}. This is the *beach episode.*",
          "@you The what?",
          "@hikari:sad Every series has one! Everyone goes to the beach and there's swimsuits and a watermelon and someone gets buried in the sand and there's *fanservice* and I didn't *prepare* — I don't have a *swimsuit,* I have a *sword* —",
          "You buy her fish in paper to calm her down. It works. She eats it on the end of the pier, legs over the water, still muttering.",
        ],
        choices: [
          { text: "\"Then let's do it properly.\" Run along the waterline at sunset with her.", go: 'run', aff: 5 },
          { text: "Point at a dark shape on the horizon. \"Is that a sea serpent?\"", go: 'serpent', aff: 3 },
          { text: "\"What did the sea look like, back home?\"", go: 'home', aff: 4 },
        ],
      },
      run: {
        text: [
          "You grab her hand and pull her off the pier and down onto the sand, and run along the edge of the waves with the sun going down beside you, both of you kicking up spray and laughing like idiots.",
          "@hikari:happy THIS IS THE OPENING SEQUENCE! We're in the OPENING SEQUENCE! There should be MUSIC!",
          "She trips over a crab and takes you down with her into the surf. You lie there, soaked, in the foam, while she laughs so hard she can't breathe.",
          "@hikari:blush ...Best beach episode ever. Ten out of ten. No notes.",
        ],
        next: 'end',
      },
      serpent: {
        text: [
          "She's on her feet before you've finished the sentence, dented sword drawn, ponytail whipping in the wind.",
          "@hikari:smug FINALLY! A *SEA BOSS!* Stand back, {name}! GRAND — HEAVENLY — SEA — SLASH!",
          "She charges down the pier and leaps heroically into the harbor. A minute later she hauls herself back up the ladder, dripping, with her arms around a large and extremely waterlogged log.",
          "@hikari:sad ...I defeated it. It didn't fight back very much.",
        ],
        next: 'end',
      },
      home: {
        text: [
          "@hikari:sad Grey, mostly. There was a big port, with cranes like giant metal birds. And in summer there were stalls on the beach that sold little fried octopus balls, too hot to eat, so you burned your mouth every single time and bought more anyway.",
          "@hikari:happy This is nicer. The fish is better. There are no cranes. And there's you.",
          "She shuffles a little closer, until her shoulder's against yours, and steals one of your chips.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "The sun goes down into the sea. The gulls go quiet. She sits with her head on your shoulder and her hair smelling of salt, and for once she doesn't seem to be waiting for anything to happen.",
          { if: { stage: 4 }, text: "@hikari:smug You know what happens at the end of a beach episode? Everyone goes back to the inn, and there's a hot spring, and there's a *misunderstanding.* ...I'm willing to have a misunderstanding. A big one. Tonight." },
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          "Hikari insists on treating the walk to Whisperwood as a dungeon crawl. She checks behind every tree for traps, makes you wait while she \"scouts ahead,\" and stabs a suspicious mushroom.",
          "@hikari:smug Clear! This floor is clear! Proceed to the safe room!",
          "The safe room is a sunny clearing. She spreads out the blanket and produces, with enormous ceremony, a wooden box tied up in a handkerchief.",
          "@hikari:blush I made a *bento.* It's a box lunch. Back home you make them for — for somebody you — it's a whole *thing.* Don't look at it too hard. It's my first one.",
          "Inside, carefully arranged, are rice balls shaped like stars, a slightly scorched rolled omelette, and some sausages cut and fried so they look like little octopuses. One octopus has a face drawn on in sauce. It is winking.",
        ],
        choices: [
          { text: "Eat the whole thing with enormous enthusiasm, starting with the winking octopus.", go: 'eat', aff: 5 },
          { text: "\"Want to trade? I brought sandwiches.\"", go: 'trade', aff: 3 },
          { text: "Ask about the star-shaped rice balls.", go: 'stars', aff: 4 },
        ],
      },
      eat: {
        text: [
          "You eat the winking octopus first. Then the stars. Then the omelette, scorched bits and all. She watches you with her hands clasped together under her chin like someone watching the final episode of her favourite show.",
          "@hikari:happy You *ate* it. You ate the *whole bento.* You *know* what that means, right?",
          "@you That I was hungry?",
          "@hikari:blush In my world it means — never mind what it means! Spoilers! You'll find out in a later arc!",
        ],
        next: 'end',
      },
      trade: {
        text: [
          "@hikari:surprised Trade? My *bento?* For a *sandwich?*",
          "She looks down at the box, then up at your sad, squashed sandwiches, and her lip wobbles for just a second.",
          "@hikari:happy ...Okay! Fine! Half and half! That's a *party* bento! That's even better! That's *teamwork!*",
          "The sandwich is not as good as the octopus. She eats it anyway and declares it delicious, very loyally.",
        ],
        next: 'end',
      },
      stars: {
        text: [
          "@hikari:blush Oh! Um. Hoshino. My name. It means — sort of — \"star field.\" So I made stars. Because it's from me.",
          "@hikari:sad My mom used to make them for me when I was little. I could never get the points right. Look, this one's basically a potato.",
          "You eat the potato-star. She laughs, and then has to look away for a moment and wipe her eyes on her sleeve.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "Afterwards you lie on the blanket in the sun with her head on your stomach while she points out clouds and names them after monsters she's going to fight someday.",
          { if: { stage: 4 }, text: "@hikari:smug This is the *safe room,* remember. Nothing can hurt us here. No monsters. No interruptions. Just the two party members. *Resting.* ...Come here and rest *closer.*" },
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'Every head in the Adventurers\' Guild turns as a young woman leaps onto a table, thrusts one hand toward the ceiling, and bellows:',
          '@hikari:smug STATUS... OPEN!',
          'Nothing happens.',
          'She\'s wearing a strange outfit — a pleated navy skirt, a white blouse with a sailor collar, a red neckerchief, and a heavily dented iron sword strapped to her back. Her black hair is in a high ponytail. She has the bright, slightly desperate eyes of someone who\'s been waiting a very long time for something.',
          '@hikari:surprised ...SKILL ACTIVATE! CHEAT ABILITY! SYSTEM MENU! HELLO?!',
          { if: { met: 'mira' }, text: 'From behind the reception desk, Mira sighs heavily: "That\'s the fourth time today."', else: 'From behind the reception desk, a sharp-eyed receptionist sighs heavily: "That\'s the fourth time today."' },
          'She spots you staring and points at you dramatically.',
          '@hikari:happy YOU! You look important! Are you my party member? My mentor? My mysterious rival?!',
        ],
        aff: 10,
        choices: [
          { text: '"I\'m your mysterious rival." (Play along.)', go: 'rival', flag: 'hikari_rival' },
          { text: '"I\'m just here for a quest."', go: 'npc' },
          { text: 'Climb onto the table with her and shout "STATUS OPEN!" too.', go: 'join', flag: 'hikari_join' },
        ],
      },
      rival: {
        text: [
          'Her eyes go enormous and starry.',
          '@hikari:happy I *KNEW* it! A rival character! You have the vibe! The cool, aloof vibe!',
          '@hikari Okay, so in the first arc we\'re enemies, but then we team up against a bigger threat, and then there\'s a moment where we fight back-to-back, and *then* —',
          'She stops herself, flushing.',
          '@hikari:blush Never mind what happens then! Spoilers!',
        ],
        aff: 6,
        next: 'name',
      },
      npc: {
        text: [
          '@hikari Oh. You\'re an NPC. That\'s okay! NPCs are important too! Sometimes they give the best side quests!',
          '@hikari:surprised ...Wait. You\'re talking back. NPCs don\'t usually talk back this much. Are you a *named* NPC?',
          'She squints at you suspiciously.',
        ],
        aff: 3,
        next: 'name',
      },
      join: {
        text: [
          'You hop onto the table beside her and throw your hand up.',
          '@you STATUS OPEN!',
          'Nothing happens. The whole Guild stares at you both. The receptionist puts her head down on the desk.',
          'She turns to you with a look of absolute, radiant joy.',
          '@hikari:happy You... you *believe* me? Nobody here believes me! They think I\'m crazy! But you — you did the *pose!*',
        ],
        aff: 8,
        next: 'name',
      },
      name: {
        text: [
          '@hikari:smug I\'m Hikari! Hikari Hoshino! I\'m from another world! I was reincarnated here as the Chosen Hero! Probably! Almost definitely!',
          '@you {name}.',
          '@hikari {name}... that\'s a protagonist name. Hm. Suspicious.',
          'She hops off the table, nearly falls, and recovers with a heroic pose.',
          '@hikari:happy Let\'s be friends! Every hero needs a party! I\'ll be the hero, you can be — whatever you want! Healer? Tank? Comic relief?',
          '@hikari:blush ...Love interest?',
          'She says that last one very quickly and then runs out of the Guild before you can answer.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Hikari grabs your sleeve at the Guild and drags you out of town.',
          '@hikari:happy It\'s time! The first quest! Every great isekai story begins with slaying slimes! This is where my overpowered abilities will awaken!',
          'In a meadow outside town, three fat blue slimes are bouncing in the grass. Hikari draws her dented sword and strikes a pose.',
          '@hikari:smug Witness my power! ULTIMATE HEAVENLY SLASH!',
          'She swings. She misses. A slime bounces onto her face.',
          '@hikari:surprised MMMPH! MMMMPH MMMPH!',
        ],
        choices: [
          { text: 'Pull the slime off her and fight it! [Might check 2]', check: { stat: 'might', dc: 2 }, pass: 'fight_win', fail: 'fight_mess' },
          { text: 'Shout encouragement. "You can do it, Hero!"', go: 'cheer', aff: 6 },
        ],
      },
      fight_win: {
        text: [
          'You yank the slime off her face and punt it into a bush. You take down the other two with quick, clean strikes. In twenty seconds, the meadow is slime-free.',
          'Hikari is sitting in the grass, dripping blue goo, staring at you.',
          '@hikari:surprised ...Oh no.',
          '@you What?',
          '@hikari:sad *You\'re* the protagonist. You have the cheat skill. I\'m — I\'m the *sidekick!*',
          'She flops backward into the grass dramatically.',
          '@hikari:angry This is the worst plot twist ever!',
        ],
        aff: 7,
        flag: 'hikari_sidekick',
        next: 'grass',
      },
      fight_mess: {
        text: [
          'You grab the slime and pull. It doesn\'t come off. It\'s very sticky. Now you\'re stuck to the slime too. The other two slimes bounce over to investigate.',
          'It takes twenty minutes and a lot of rolling around in the grass, but eventually you and Hikari — covered head to toe in blue goo — defeat all three slimes by sitting on them.',
          '@hikari:happy WE DID IT! TEAMWORK! The power of friendship!',
          '@you We sat on them.',
          '@hikari:smug The power of *sitting!*',
        ],
        aff: 6,
        next: 'grass',
      },
      cheer: {
        text: [
          '@you You can do it, Hero!',
          'Hikari rips the slime off her face with both hands, holds it above her head, and screams a battle cry. Then she throws it into the river.',
          '@hikari:happy I DID IT! Did you see that?! That was totally a power-up moment! Your cheering activated my hidden potential!',
          'She defeats the other two by throwing them into the river as well. It is not elegant, but it is effective.',
        ],
        next: 'grass',
      },
      grass: {
        text: [
          'Afterward, you lie in the grass side by side, slime-sticky and exhausted, looking up at the clouds.',
          '@hikari:sad In my old world, I never did anything exciting. Work, train, sleep, work. Every day the same. When the ox cart hit me, my last thought was... "Finally, something *different.*"',
          '@hikari So now I want to be a hero. A real one. I want my life to *mean* something.',
          'She turns her head to look at you.',
          '@hikari:sad Is that dumb?',
        ],
        choices: [
          { text: '"It\'s not dumb. And it already means something to me."', go: 'means', aff: 8 },
          { text: '"You were pretty heroic with that river throw."', go: 'river', aff: 6, flag: 'hikari_toss' },
        ],
      },
      means: {
        text: [
          'She goes very still, mouth open. Her cheeks go pink under the slime.',
          '@hikari:blush That\'s — that\'s a *line.* That\'s a love interest line. You can\'t just *say* those!',
          '@you Too bad. Already said it.',
          'She covers her face with her hands and kicks her feet in the grass.',
          '@hikari:blush *Affection meter went up so much!*',
        ],
        end: true,
      },
      river: {
        text: [
          '@hikari:happy It WAS heroic, wasn\'t it?! Grand Slime Toss! I\'m naming it! It\'s my signature move now!',
          'She laughs, bright and loud, and for a moment she doesn\'t look homesick at all.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'You find Hikari sitting alone on the roof of the Guild late at night, hugging her knees, staring up at the moon.',
          '@hikari:sad Oh. Hey.',
          { if: 'hikari_sidekick', text: '@hikari:sad Shouldn\'t the main character be off doing main-character things? Levelling up? Collecting a mysterious sword?' },
          'Her eyes are red.',
          '@hikari:sad Sorry. It\'s just... today is my mom\'s birthday. Back home. She\'d be making curry. Really bad curry. Too much carrot.',
          '@hikari:sad I don\'t even know if I can ever go back. Or if anyone there even remembers me. Maybe I just... disappeared.',
        ],
        choices: [
          { text: 'Sit with her. "Tell me about your mom\'s bad curry."', go: 'curry', aff: 8, flag: 'hikari_curry' },
          { text: '"Come on. I know a place that makes noodle soup."', go: 'noodles', aff: 8, flag: 'hikari_noodles' },
        ],
      },
      curry: {
        text: [
          'So she tells you. About her mom, who always burned the rice and always said it was "rustic." About her little brother, who played video games — "they\'re like... magic paintings you control" — too loud. About her tiny apartment, and the cat next door, and cherry blossoms in spring.',
          'She cries a little. She laughs a lot. By the end she\'s leaning against your shoulder.',
          '@hikari:blush Thank you. Nobody here ever asks about my world. They just think I\'m weird.',
          '@you You *are* weird.',
          '@hikari:angry *Hey!*',
          '@you In the best way.',
        ],
        next: 'goblins',
      },
      noodles: {
        text: [
          'You take her to the Tipsy Wyvern, where Madame Bettina, the owner, is just closing up, and talk her into making a bowl of thick noodle soup with an egg on top.',
          'It isn\'t ramen. Not really. But Hikari takes one sip, and her face crumples, and she cries into the bowl for a full minute.',
          '@hikari:sad It\'s *wrong.* It\'s completely wrong. It\'s the best thing I\'ve ever eaten.',
          'She eats three bowls.',
        ],
        next: 'goblins',
      },
      goblins: {
        text: [
          'Walking home, you hear a scream from an alley. A gang of goblins has cornered a flower-seller.',
          'Hikari draws her dented sword without hesitation.',
          '@hikari:angry Stay back, {name}! This is a hero\'s job!',
          'There are six goblins. She charges in anyway.',
        ],
        choices: [
          { text: 'Fight at her side, back to back. [Might check 3]', check: { stat: 'might', dc: 3 }, pass: 'backtoback', fail: 'save' },
          { text: 'Let her lead, and cover her flank.', go: 'save', aff: 6 },
        ],
      },
      backtoback: {
        text: [
          { if: 'hikari_rival', text: 'You leap in beside her. She glances at you, startled — and then grins fiercely, and you fight back to back, exactly like she described on the day you met.', else: 'You leap in beside her. She glances at you, startled — and then grins fiercely, and you fight back to back, like something straight out of one of her stories.' },
          'It\'s chaos. It\'s glorious. When the last goblin flees, you\'re both breathing hard, swords up, shoulder blades pressed together.',
          '@hikari:surprised ...Back-to-back fight scene. You did it. You actually did the back-to-back fight scene with me.',
          'She turns around. Her face is very close to yours.',
          '@hikari:smug You know what usually comes after the back-to-back fight scene, right?',
          'She kisses you — quick and fierce — then steps back, red as a tomato.',
          '@hikari:blush THAT WAS A PLOT REQUIREMENT. I DIDN\'T WRITE THE RULES.',
        ],
        aff: 12,
        flag: 'hikari_backtoback',
        end: true,
      },
      save: {
        text: [
          { if: 'hikari_toss', text: 'Hikari fights like a whirlwind — wild and untrained, but absolutely fearless. A goblin gets behind her. You knock it away. She doesn\'t even notice; she\'s too busy screaming "GRAND SLIME TOSS!" and throwing a goblin into a rain barrel.', else: 'Hikari fights like a whirlwind — wild and untrained, but absolutely fearless. A goblin gets behind her. You knock it away. She doesn\'t even notice; she\'s too busy screaming "ULTIMATE HEAVENLY SLASH!" and hitting a goblin very hard with the flat of her sword until it gives up.' },
          'When it\'s over, the flower-seller is safe, the goblins are gone, and Hikari is standing in the middle of the alley, sword raised, panting.',
          '@hikari:happy I did it! A real rescue! A real *hero* thing!',
          'She turns to you, glowing.',
          '@hikari:blush I don\'t need a cheat skill. I just needed someone to watch my back.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Hikari finds you at the town square at midnight, out of breath, clutching a crumpled letter. Her face is pale.',
          '@hikari:surprised {name}. The Goddess talked to me. In a dream. She said... she said there\'s a way home.',
          '@hikari On Starfall night, a gate opens for one minute. If I step through it, I go back. To Tokyo. To my mom. To my old life.',
          'She looks up at you. Her eyes are full of tears.',
          '@hikari:sad And I don\'t know what to do.',
          { if: 'hikari_backtoback', text: '@hikari:sad You\'re the only person in this whole world who ever played along all the way. The back-to-back fight. Everything. How am I supposed to leave the one person who did the back-to-back fight?' },
        ],
        choices: [
          { text: '"Whatever you choose, I\'ll support you."', go: 'support', aff: 10 },
          { text: '"Stay. Please. Stay with me."', go: 'stay', aff: 8, flag: 'hikari_stay' },
          { text: '"What do you *want*, Hikari? Not the hero. You." [Might check 4]', check: { stat: 'might', dc: 4 }, pass: 'want', fail: 'support' },
        ],
      },
      support: {
        text: [
          '@hikari:sad ...That\'s the worst answer. That\'s the *best* answer. That\'s the answer that makes it *harder.*',
          'She laughs and sobs at the same time.',
          '@hikari In all the stories, the hero goes home in the end. That\'s how it works. But I keep thinking — what if this isn\'t a story where I go home?',
          '@hikari:blush What if this *is* home?',
        ],
        flag: 'hikari_support',
        next: 'choice',
      },
      stay: {
        text: [
          'She stares at you. Then she throws her arms around your neck so hard you stagger.',
          '@hikari:happy You said it. You actually said it. Nobody\'s ever asked me to stay *anywhere.*',
        ],
        next: 'choice',
      },
      want: {
        text: [
          'She stops. She actually thinks about it, standing very still in the moonlight.',
          '@hikari:sad I wanted to be special. That\'s all I ever wanted. Back home I was nobody. Here, I thought, if I could just be the *hero*...',
          '@hikari:sad But I\'m not the hero, am I? I never got a cheat skill. I\'m just... me.',
          '@you You charged six goblins with a dented sword. Just you. That\'s more heroic than any cheat skill.',
          'Her lip wobbles.',
          '@hikari:blush ...I want to stay. With you. I want to be *your* hero. Not the world\'s. Just yours.',
        ],
        aff: 14,
        flag: 'hikari_want',
        next: 'choice',
      },
      choice: {
        text: [
          'She crumples the letter and tosses it into the fountain.',
          '@hikari I\'ll write to my mom. The Goddess said she\'d deliver one letter. I\'ll tell her I\'m happy. That I found something better than a cheat skill.',
          'She takes your hands, very serious, very pink.',
          '@hikari:blush And I want to... um... I want to trigger the next event. The *big* one. The one with the... you know.',
          '@you The one where the screen fades to black?',
          '@hikari:angry *THAT ONE, YES, STOP SAYING IT OUT LOUD.*',
        ],
        next: 'night',
      },
      night: {
        text: [
          "Her room at the inn is tiny and piled with \"quest gear\": a bag of rocks she's convinced are magic, a hand-drawn map of \"possible dungeon locations\", a dozen wooden practice swords. She shoves it all under the bed in a panic.",
          "@hikari:blush Okay. Okay okay okay. This is the event. The big one. I've seen it a thousand times. I've *read* it a thousand times. I know exactly what happens.",
          "@hikari:surprised ...I have absolutely no idea what happens.",
          "You laugh, and she laughs, and the nerves break. She kisses you, bumping noses, then again, better. She tugs her sailor uniform's red neckerchief loose with a flourish she's obviously been saving.",
          "@hikari:smug *Cast off armour!* — that sounded way cooler in my head.",
          "She's nervous and excitable and talks far too much. She narrates everything like an announcer: \"and then the heroine *bravely* unbuttons the — oh, oh *wow* — critical hit —\". Then you kiss down her neck and she runs out of words entirely. That takes a while, and it's very worth it.",
          "She's fearless, the same way she charged six goblins with a dented sword. She doesn't know the rules, so she makes them up as she goes, with total enthusiasm, and laughs breathlessly every time something works.",
          "@hikari:happy This is SO much better than the light novels. They skipped *everything.* They always cut to the morning! Who *does* that?!",
          "@you Writers who've never done it.",
          "@hikari:smug *Cowards.*",
          "...",
          "Afterward, she lies curled against you, tracing patterns on your chest.",
          "@hikari:blush Hey. {name}.",
          "@you Yeah?",
          "@hikari Status open.",
          "Nothing happens. She grins anyway.",
          "@hikari:happy Affection: max. Relationship: *heroine.* Current location: exactly where I want to be.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake to someone poking your cheek, repeatedly, with great determination.",
          "@hikari:happy Morning event! Morning event! This is the part where the heroine wakes up first and watches the love interest sleep and thinks deep thoughts!",
          "Hikari is sitting cross-legged on the bed in your shirt, hair in a messy ponytail, absolutely glowing.",
          "@hikari:smug I've been thinking deep thoughts for ten minutes and I'm bored, so now it's the part where we talk about our feelings. Or the part where you make me breakfast. Or both! Which route do you pick?",
        ],
        choices: [
          { text: "\"The feelings route.\"", go: "feelings", aff: 6 },
          { text: "\"The breakfast route. I'll make you noodle soup.\"", go: "breakfast", aff: 6 },
          { text: "\"Secret third route.\" Pull her back under the blanket.", go: "secret", aff: 6, flag: 'hikari_secret' },
        ],
      },
      feelings: {
        text: [
          "@hikari Okay! Okay. Feelings. I'll go first.",
          "She takes a deep breath.",
          { if: 'hikari_want', text: "@hikari:blush You asked me what I wanted. Not the hero. Me. Nobody ever asks the protagonist that. They just hand her a sword and point." },
          "@hikari:blush Back home, I used to feel like a background character in my own life. And last night I felt like the main character for the first time ever. And it wasn't because of a cheat skill. It was because of you.",
          "She claps both hands over her face, appalled at herself, and talks through her fingers.",
          "@hikari:surprised That was SO cheesy. I've been reading too much. Pretend I said something cool.",
          "You kiss her instead. She decides that's cool enough.",
        ],
        end: true,
      },
      breakfast: {
        text: [
          { if: 'hikari_noodles', text: "You go down to the inn kitchen and make her a bowl of noodle soup with an egg on top, the way you watched Madame Bettina make it, the night you found Hikari on the Guild roof. You bring it back up on a tray.", else: "You go down to the inn kitchen and make her a bowl of noodle soup with an egg on top, as close to the ramen she's always going on about as you can manage, down to the soft yolk. You bring it back up on a tray." },
          "She eats it sitting in bed in your shirt, slurping loudly, and gets broth on her nose.",
          "@hikari:happy This is the best morning of both my lives. And one of them included *trains.*",
        ],
        end: true,
      },
      secret: {
        text: [
          "@hikari:surprised A SECRET THIRD ROUTE? Oh, those are always the best ones! What unlocks it? Is there a flag? Did I trigger a —",
          "You pull her under the blanket. She shrieks, then giggles, then stops talking for a good long while.",
          "@hikari:smug ...Okay, the secret route is canon now. I'm declaring it canon.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'On the festival hill, Hikari is waiting for you in a festival yukata she sewed herself from a curtain — white with blue stars. It\'s lopsided. It\'s perfect.',
          '@hikari:blush It\'s what we wear for festivals back home! It\'s a bit... rough. I had to guess the pattern. And the sewing. And the fabric.',
          'Halfway through the starfall, the air above the hill shimmers. A doorway opens: a rectangle of fluorescent light, and beyond it, a narrow street full of tiny shops and glowing signs and the distant rumble of a train.',
          'Tokyo.',
          'Her hand finds yours and holds on very tight.',
          { if: 'hikari_stay', text: '@hikari:sad You asked me to stay. I said yes. I *meant* yes. I just didn\'t think it would be so... *bright.*' },
        ],
        choices: [
          { text: 'Squeeze her hand, and let her say goodbye.', go: 'letter' },
          { text: '"...Or we could both go."', go: 'home', if: ['hikari_curry', { any: ['hikari_want', 'hikari_support'] }] },
        ],
      },
      letter: {
        text: [
          'Hikari stares at it for a long, long time. Then she takes a folded letter from her sleeve and tosses it through. The doorway flickers, as if accepting it.',
          { if: 'hikari_curry', text: '@hikari:sad I told her about you, in the letter. I said I told someone about her curry and they didn\'t laugh. Well. They laughed in the *good* way.' },
          '@hikari:sad Bye, Mom. I love you. Don\'t burn the rice.',
          'The gate closes. Hikari turns to you, eyes wet, smiling.',
        ],
        next: 'goddess',
      },
      goddess: {
        text: [
          '@narrator Oh, I *love* this part.',
          '@hikari:surprised ...Goddess?!',
          '@narrator Hello, little star. I owe you an explanation. I\'m the one who brought you here. Not the ox cart — well, the ox cart helped.',
          '@narrator You wanted to be special so badly. But you were looking at the wrong genre, darling. You were never going to be the *hero.*',
          '@narrator You were going to be the *heroine.*',
          'Hikari bursts into tears and laughter at the same time, and grabs your face, and kisses you under the falling stars while the entire festival hill cheers without knowing why.',
        ],
        choices: [
          { text: 'Kiss her back while the stars fall.', go: 'epilogue' },
          { text: '"Why can\'t she be both?"', go: 'hero', if: ['hikari_backtoback', { any: ['hikari_rival', 'hikari_join', 'hikari_toss'] }] },
        ],
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'You and Hikari become the most famous adventuring duo in FantasyLandia. She never gets a cheat skill. She never needs one. She still shouts "STATUS OPEN!" before every fight. Sometimes, now, it works — though that may just be the goddess having fun.',
          { if: 'hikari_toss', text: 'Her signature move is still the Grand Slime Toss. It is entered into the Guild\'s official register of named techniques, over Mira\'s written objections, which are also entered into the register.' },
          'She opens a noodle shop in Clichéton with Madame Bettina\'s help: *Hoshino Ramen (Approximately).* It\'s wildly popular. It\'s never quite right. She says that\'s the point.',
          'Every Starfall, the goddess delivers one letter to Tokyo, and one letter back. Her mother writes that she\'s glad Hikari is happy, that her brother still plays games too loud, and that she has learned to not burn the rice.',
          'Hikari reads them aloud to you on the festival hill every year, laughing and crying, your hand in hers.',
          'She was right, in the end. Her life did turn into a story.',
          'It just turned out to be a love story.',
        ],
        ending: 'hikari',
      },
      hero: {
        text: [
          'The goddess pauses. You get the distinct sense of a very old, very powerful being being *delighted.*',
          '@narrator ...Oh, you *are* fun.',
          '@hikari:surprised Both? Hero *and* heroine? Is that — is that *allowed?*',
          '@narrator Well, there *is* a rule against it. I wrote it. But I\'m the Patron of Romantic Clichés, darling, and "the hero gets the girl" and "the girl is the hero" are *both* on my list. It seems a shame to choose.',
          'Somewhere above the hill, very faintly, fingers snap.',
          'A small, translucent blue window pops into the air in front of Hikari\'s face with a soft *ding.*',
          '*NAME: Hikari Hoshino. CLASS: Hero (Probationary). SKILLS: Grand Slime Toss (Lv. 1), Unreasonable Courage (Lv. MAX). PARTY: {name}. AFFECTION:* and then, instead of a number, just the word *yes.*',
          'Hikari makes a sound you have never heard a human being make.',
          '@hikari:surprised IT OPENED. {name}. IT *OPENED.* STATUS OPEN. *STATUS OPEN!* Six months! SIX MONTHS!',
          '@narrator You\'re welcome. Do try not to let it go to your head. I\'ll be writing the descriptions myself.',
          'Hikari tackles you into the grass, laughing and crying and kissing you, while the little blue window bobs patiently above you both and a new line writes itself across the bottom: *QUEST ACCEPTED.*',
        ],
        next: 'epilogue_hero',
      },
      epilogue_hero: {
        text: [
          '*Some time later...*',
          'The status window never goes away. It follows Hikari around at shoulder height, visible only to the two of you, and every so often it updates with a soft *ding* and a line of commentary in the goddess\'s unmistakable handwriting. *Skill gained: Parallel Parking (Ox Cart).* *Affection: still yes. Obviously.*',
          'She takes real quests now, and you take them with her. You clear the Whisperwood of a slime king the size of a barn, which she befriends instead of fighting, on the grounds that slimes are a "later-game friend" and this is clearly later in the game. You rescue a caravan from bandits who surrender the instant she shouts the name of her attack. You travel to a distant realm to face a genuine, horned, fire-breathing Demon Lord, who turns out to be lonely and wants a pen pal. She writes to him monthly.',
          { if: 'hikari_rival', text: 'Officially, you\'re still rivals. You keep a tally on the inn wall of who has saved whom. It stands at four hundred and twelve to four hundred and nine. She has formally appealed three of yours.' },
          'She trains every morning. Two hundred swings now, really. With a real sword. Well — the same dented one. She refuses to replace it. She says it\'s her legendary weapon, and that legendary weapons are always a bit rubbish until the right person picks them up.',
          'Every Starfall, a letter goes to Tokyo and a letter comes back. Her mother writes that she\'s very proud, and slightly concerned about the Demon Lord.',
          'The status window\'s bottom line never changes. *CURRENT QUEST: Happily ever after. PROGRESS: Ongoing. PARTY: Two.*',
          'She checks it every morning anyway, just to be sure. Then she checks you.',
        ],
        ending: 'hikari_hero',
      },
      home: {
        text: [
          'She whips round and gapes at you as if you\'ve started speaking in tongues.',
          '@hikari:surprised *Both?* You\'d — you\'d *come?* To *Tokyo?*',
          '@hikari:sad {name}, there\'s no *magic.* There are *taxes.* There\'s *paperwork.* Swords are *illegal.* Ox carts are *illegal!* Everyone works eleven hours a day and nobody ever, ever shouts STATUS OPEN —',
          '@you You came here with nothing. A dented sword and a sailor collar. And you made it home.',
          '@you I think I can try it the other way round.',
          'Her face crumples completely.',
          '@narrator Oh, a *reverse isekai!* Darling, I haven\'t seen one of those in *centuries.* Very well. I\'ll leave the door ajar. Every Starfall, both ways. Do send postcards.',
          '@hikari:happy You\'re *ridiculous.* You\'re the most ridiculous protagonist I\'ve ever — come *on* then. Hold my hand. Don\'t let go. And whatever you do, *don\'t* try to fight the traffic.',
          'She laces her fingers through yours, and takes one last look back at the falling stars, and the two of you step through the light together.',
        ],
        next: 'epilogue_home',
      },
      epilogue_home: {
        text: [
          '*Some time later...*',
          'The other side is rain and neon and a smell of hot food and engine oil, and you are, immediately and completely, the weird one.',
          'Hikari buys you a rice ball in a little plastic wrapper. You cannot open it. You try a dagger. She laughs until she has to sit down on the wet pavement, and then she opens it for you and watches you eat it with tears running down her face.',
          'Her mother opens the door of a tiny apartment, sees her daughter, and drops a ladle. Then she holds on to Hikari as though an ox cart might come round the corner for her again. Then she looks up at you — a stranger in a travel-stained tunic, with a sword wrapped in a curtain — and says, after a moment\'s consideration, "Are you hungry? There\'s curry."',
          'There is far too much carrot. You have two helpings.',
          'You learn trains. You get lost on trains. You shout "STATUS OPEN!" at a ticket barrier and it opens for you, and you decide on the spot that this world has plenty of magic after all, it\'s just hidden in the walls. Her little brother teaches you to play the magic paintings. You are catastrophically bad. He is delighted.',
          { if: 'hikari_rival', text: 'Hikari never goes back to spreadsheets. She writes a book instead — *I Was Hit By An Ox Cart And Fell In Love With My Mysterious Rival* — and it sells out in a week. Critics call the romance "wildly unrealistic." She reads the reviews aloud to you in bed and laughs until the neighbours bang on the wall.', else: 'Hikari never goes back to spreadsheets. She writes a book instead — *I Was Hit By An Ox Cart And My Party Member Followed Me Home* — and it sells out in a week. Critics call the romance "wildly unrealistic." She reads the reviews aloud to you in bed and laughs until the neighbours bang on the wall.' },
          'And every Starfall, the air on a quiet rooftop shimmers, and the two of you step back through into Clichéton for a week, to the Tipsy Wyvern, where Madame Bettina always saves you the corner booth.',
          'She always said she wanted her life to mean something. It turns out it doesn\'t matter which world you\'re in. It matters who\'s holding your hand when the door opens.',
        ],
        ending: 'hikari_home',
      },
    },
  },
});
