FL.addCharacter({
  id: 'hikari',
  name: 'Hikari Hoshino',
  short: 'Hikari',
  trope: 'Self-Proclaimed Isekai Protagonist',
  color: '#5aa9ff',
  favStat: 'might',
  endingTitle: 'Isekai\'d Into Love',
  teaser: 'A girl in a strange pleated uniform is pointing dramatically at the sky and shouting "STATUS OPEN!" Nothing is happening.',
  blurb: 'A young woman from a faraway world called "Tokyo," who was hit by a cart-pulling ox on her first day here and is *absolutely certain* she has been reincarnated as the Chosen Hero. She is waiting for her cheat skill to activate. She has been waiting for six months. She is brave, earnest, dramatic and very, very homesick.',
  schedule: ['guild', 'square', 'tavern'],
  gifts: { love: ['scroll'], like: ['novel', 'cakes', 'plushie', 'chocolate'], hate: ['steak'] },
  giftLines: {
    love: ['@hikari A SPELL SCROLL! Is this — is this my *skill book?* My overpowered ultimate technique?!', 'She unrolls it, reads it, and casts it with enormous drama. Sparkles shoot from her fingers. Just sparkles.', '@hikari ...It\'s *beautiful.* I\'m keeping it. This is the start of my power-up arc. I can *feel* it.'],
    like: '@hikari Oh! A gift event! Did I just trigger a gift event?! Affection up! ...Wait, is it *my* affection or *yours?*',
    neutral: '@hikari Huh. A key item? A plot device? ...Oh, it\'s just a thing. Thanks!',
    hate: ['@hikari Is that... wyvern meat? Raw? I\'m sorry, I still can\'t. In my world we had *convenience stores.* With *rice balls.* In *little plastic wrappers.*', 'She looks very homesick all of a sudden.'],
  },
  talk: [
    ['@hikari STATUS OPEN! ...STATUS... OPEN? Status, please open? Pretty please?', 'Nothing happens.', '@hikari It\'s fine. It\'s probably a level thing. I\'ll unlock it at level ten.'],
    ['@hikari In my world, I was an office worker. I made spreadsheets. Eleven hours a day. Then BAM — ox cart. And now I\'m HERE! Isn\'t it AMAZING?!', 'She says it cheerfully. She looks a little sad.'],
    ['@hikari Every isekai protagonist gets a harem, a cheat skill, and a tragic backstory! I have... a tragic backstory. Kind of. Two out of three isn\'t bad. Wait, that\'s one.'],
    ['@hikari I tried to make friends with a slime. It ate my sandal. I\'ve decided slimes are a *later-game* friend.'],
    ['@hikari Do you think there\'s a Demon Lord? There\'s always a Demon Lord. I want to defeat the Demon Lord! Or marry him! Depending on the genre!'],
    ['She\'s sitting on the edge of the fountain, swinging her legs, staring at nothing.', '@hikari I miss ramen. And trains. And my mom. Is that weird? To miss trains?'],
  ],
  afterTalk: [
    ["@hikari I've been keeping a quest log. Under \"completed\" I wrote \"the big event\" and drew forty little hearts. Mira saw it at the Guild. She asked what quest it was. I lied badly."],
    ["She strikes a dramatic pose.", "@hikari STATUS OPEN!", "Nothing happens. She leans in and whispers:", "@hikari ...Status: wants to stay over tonight. Accept quest Y/N?"],
    ["@hikari In my world, there's a thing called a \"route.\" When you pick one person and see their whole story. I picked mine. It's you. I'm never doing another route. This is the true ending."],
    ["@hikari The light novels always skip to the morning after. I'm writing my own now. It does NOT skip. It is VERY detailed. I'll never let anyone read it."],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'Every head in the Adventurers\' Guild turns as a young woman leaps onto a table, thrusts one hand toward the ceiling, and bellows:',
          '@hikari STATUS... OPEN!',
          'Nothing happens.',
          'She\'s wearing a strange outfit — a pleated navy skirt, a white blouse with a sailor collar, a red neckerchief, and a heavily dented iron sword strapped to her back. Her black hair is in a high ponytail. She has the bright, slightly desperate eyes of someone who\'s been waiting a very long time for something.',
          '@hikari ...SKILL ACTIVATE! CHEAT ABILITY! SYSTEM MENU! HELLO?!',
          'From behind the reception desk, Mira sighs heavily: "That\'s the fourth time today."',
          'The girl spots you staring and points at you dramatically.',
          '@hikari YOU! You look important! Are you my party member? My mentor? My mysterious rival?!',
        ],
        aff: 10,
        choices: [
          { text: '"I\'m your mysterious rival." (Play along.)', go: 'rival' },
          { text: '"I\'m just here for a quest."', go: 'npc' },
          { text: 'Climb onto the table with her and shout "STATUS OPEN!" too.', go: 'join' },
        ],
      },
      rival: {
        text: [
          'Her eyes go enormous and starry.',
          '@hikari I *KNEW* it! A rival character! You have the vibe! The cool, aloof vibe!',
          '@hikari Okay, so in the first arc we\'re enemies, but then we team up against a bigger threat, and then there\'s a moment where we fight back-to-back, and *then* —',
          'She stops herself, flushing.',
          '@hikari Never mind what happens then! Spoilers!',
        ],
        aff: 6,
        next: 'name',
      },
      npc: {
        text: [
          '@hikari Oh. You\'re an NPC. That\'s okay! NPCs are important too! Sometimes they give the best side quests!',
          '@hikari ...Wait. You\'re talking back. NPCs don\'t usually talk back this much. Are you a *named* NPC?',
          'She squints at you suspiciously.',
        ],
        aff: 3,
        next: 'name',
      },
      join: {
        text: [
          'You hop onto the table beside her and throw your hand up.',
          '@you STATUS OPEN!',
          'Nothing happens. The whole Guild stares at you both. Mira puts her head down on the desk.',
          'The girl turns to you with a look of absolute, radiant joy.',
          '@hikari You... you *believe* me? Nobody here believes me! They think I\'m crazy! But you — you did the *pose!*',
        ],
        aff: 8,
        next: 'name',
      },
      name: {
        text: [
          '@hikari I\'m Hikari! Hikari Hoshino! I\'m from another world! I was reincarnated here as the Chosen Hero! Probably! Almost definitely!',
          '@you {name}.',
          '@hikari {name}... that\'s a protagonist name. Hm. Suspicious.',
          'She hops off the table, nearly falls, and recovers with a heroic pose.',
          '@hikari Let\'s be friends! Every hero needs a party! I\'ll be the hero, you can be — whatever you want! Healer? Tank? Comic relief?',
          '@hikari ...Love interest?',
          'She says that last one very quickly and then runs out of the Guild before you can answer.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Hikari grabs your sleeve at the Guild and drags you out of town.',
          '@hikari It\'s time! The first quest! Every great isekai story begins with slaying slimes! This is where my overpowered abilities will awaken!',
          'In a meadow outside town, three fat blue slimes are bouncing in the grass. Hikari draws her dented sword and strikes a pose.',
          '@hikari Witness my power! ULTIMATE HEAVENLY SLASH!',
          'She swings. She misses. A slime bounces onto her face.',
          '@hikari MMMPH! MMMMPH MMMPH!',
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
          '@hikari ...Oh no.',
          '@you What?',
          '@hikari *You\'re* the protagonist. You have the cheat skill. I\'m — I\'m the *sidekick!*',
          'She flops backward into the grass dramatically.',
          '@hikari This is the worst plot twist ever!',
        ],
        aff: 7,
        next: 'grass',
      },
      fight_mess: {
        text: [
          'You grab the slime and pull. It doesn\'t come off. It\'s very sticky. Now you\'re stuck to the slime too. The other two slimes bounce over to investigate.',
          'It takes twenty minutes and a lot of rolling around in the grass, but eventually you and Hikari — covered head to toe in blue goo — defeat all three slimes by sitting on them.',
          '@hikari WE DID IT! TEAMWORK! The power of friendship!',
          '@you We sat on them.',
          '@hikari The power of *sitting!*',
        ],
        aff: 6,
        next: 'grass',
      },
      cheer: {
        text: [
          '@you You can do it, Hero!',
          'Hikari rips the slime off her face with both hands, holds it above her head, and screams a battle cry. Then she throws it into the river.',
          '@hikari I DID IT! Did you see that?! That was totally a power-up moment! Your cheering activated my hidden potential!',
          'She defeats the other two by throwing them into the river as well. It is not elegant, but it is effective.',
        ],
        next: 'grass',
      },
      grass: {
        text: [
          'Afterward, you lie in the grass side by side, slime-sticky and exhausted, looking up at the clouds.',
          '@hikari In my old world, I never did anything exciting. Work, train, sleep, work. Every day the same. When the ox cart hit me, my last thought was... "Finally, something *different.*"',
          '@hikari So now I want to be a hero. A real one. I want my life to *mean* something.',
          'She turns her head to look at you.',
          '@hikari Is that dumb?',
        ],
        choices: [
          { text: '"It\'s not dumb. And it already means something to me."', go: 'means', aff: 8 },
          { text: '"You were pretty heroic with that river throw."', go: 'river', aff: 6 },
        ],
      },
      means: {
        text: [
          'She stares at you. Her cheeks go pink under the slime.',
          '@hikari That\'s — that\'s a *line.* That\'s a love interest line. You can\'t just *say* those!',
          '@you Too bad. Already said it.',
          'She covers her face with her hands and kicks her feet in the grass.',
          '@hikari *Affection meter went up so much!*',
        ],
        end: true,
      },
      river: {
        text: [
          '@hikari It WAS heroic, wasn\'t it?! Grand Slime Toss! I\'m naming it! It\'s my signature move now!',
          'She laughs, bright and loud, and for a moment she doesn\'t look homesick at all.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'You find Hikari sitting alone on the roof of the Guild late at night, hugging her knees, staring up at the two moons.',
          '@hikari Oh. Hey.',
          'Her eyes are red.',
          '@hikari Sorry. It\'s just... today is my mom\'s birthday. Back home. She\'d be making curry. Really bad curry. Too much carrot.',
          '@hikari I don\'t even know if I can ever go back. Or if anyone there even remembers me. Maybe I just... disappeared.',
        ],
        choices: [
          { text: 'Sit with her. "Tell me about your mom\'s bad curry."', go: 'curry', aff: 8 },
          { text: '"Come on. I know a place that makes noodle soup."', go: 'noodles', aff: 8 },
        ],
      },
      curry: {
        text: [
          'So she tells you. About her mom, who always burned the rice and always said it was "rustic." About her little brother, who played video games — "they\'re like... magic paintings you control" — too loud. About her tiny apartment, and the cat next door, and cherry blossoms in spring.',
          'She cries a little. She laughs a lot. By the end she\'s leaning against your shoulder.',
          '@hikari Thank you. Nobody here ever asks about my world. They just think I\'m weird.',
          '@you You *are* weird.',
          '@hikari *Hey!*',
          '@you In the best way.',
        ],
        next: 'goblins',
      },
      noodles: {
        text: [
          'You take her to the Tipsy Wyvern, where Bettina is just closing up, and talk her into making a bowl of thick noodle soup with an egg on top.',
          'It isn\'t ramen. Not really. But Hikari takes one sip, and her face crumples, and she cries into the bowl for a full minute.',
          '@hikari It\'s *wrong.* It\'s completely wrong. It\'s the best thing I\'ve ever eaten.',
          'She eats three bowls.',
        ],
        next: 'goblins',
      },
      goblins: {
        text: [
          'Walking home, you hear a scream from an alley. A gang of goblins has cornered a flower-seller.',
          'Hikari draws her dented sword without hesitation.',
          '@hikari Stay back, {name}! This is a hero\'s job!',
          'There are six goblins. She charges in anyway.',
        ],
        choices: [
          { text: 'Fight at her side, back to back. [Might check 3]', check: { stat: 'might', dc: 3 }, pass: 'backtoback', fail: 'save' },
          { text: 'Let her lead, and cover her flank.', go: 'save', aff: 6 },
        ],
      },
      backtoback: {
        text: [
          'You leap in beside her. She glances at you, startled — and then grins fiercely, and you fight back to back, exactly like she described on the day you met.',
          'It\'s chaos. It\'s glorious. When the last goblin flees, you\'re both breathing hard, swords up, shoulder blades pressed together.',
          '@hikari ...Back-to-back fight scene. You did it. You actually did the back-to-back fight scene with me.',
          'She turns around. Her face is very close to yours.',
          '@hikari You know what usually comes after the back-to-back fight scene, right?',
          'She kisses you — quick and fierce — then steps back, red as a tomato.',
          '@hikari THAT WAS A PLOT REQUIREMENT. I DIDN\'T WRITE THE RULES.',
        ],
        aff: 12,
        end: true,
      },
      save: {
        text: [
          'Hikari fights like a whirlwind — wild and untrained, but absolutely fearless. A goblin gets behind her. You knock it away. She doesn\'t even notice; she\'s too busy screaming "GRAND SLIME TOSS!" and throwing a goblin into a rain barrel.',
          'When it\'s over, the flower-seller is safe, the goblins are gone, and Hikari is standing in the middle of the alley, sword raised, panting.',
          '@hikari I did it! A real rescue! A real *hero* thing!',
          'She turns to you, glowing.',
          '@hikari I don\'t need a cheat skill. I just needed someone to watch my back.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Hikari finds you at the town square at midnight, out of breath, clutching a crumpled letter. Her face is pale.',
          '@hikari {name}. The Goddess talked to me. In a dream. She said... she said there\'s a way home.',
          '@hikari On Starfall night, a gate opens for one minute. If I step through it, I go back. To Tokyo. To my mom. To my old life.',
          'She looks up at you. Her eyes are full of tears.',
          '@hikari And I don\'t know what to do.',
        ],
        choices: [
          { text: '"Whatever you choose, I\'ll support you."', go: 'support', aff: 10 },
          { text: '"Stay. Please. Stay with me."', go: 'stay', aff: 8 },
          { text: '"What do you *want*, Hikari? Not the hero. You." [Might check 4]', check: { stat: 'might', dc: 4 }, pass: 'want', fail: 'support' },
        ],
      },
      support: {
        text: [
          '@hikari ...That\'s the worst answer. That\'s the *best* answer. That\'s the answer that makes it *harder.*',
          'She laughs and sobs at the same time.',
          '@hikari In all the stories, the hero goes home in the end. That\'s how it works. But I keep thinking — what if this isn\'t a story where I go home?',
          '@hikari What if this *is* home?',
        ],
        next: 'choice',
      },
      stay: {
        text: [
          'She stares at you. Then she throws her arms around your neck so hard you stagger.',
          '@hikari You said it. You actually said it. Nobody\'s ever asked me to stay *anywhere.*',
        ],
        next: 'choice',
      },
      want: {
        text: [
          'She stops. She actually thinks about it, standing very still in the moonlight.',
          '@hikari I wanted to be special. That\'s all I ever wanted. Back home I was nobody. Here, I thought, if I could just be the *hero*...',
          '@hikari But I\'m not the hero, am I? I never got a cheat skill. I\'m just... me.',
          '@you You charged six goblins with a dented sword. Just you. That\'s more heroic than any cheat skill.',
          'Her lip wobbles.',
          '@hikari ...I want to stay. With you. I want to be *your* hero. Not the world\'s. Just yours.',
        ],
        aff: 14,
        next: 'choice',
      },
      choice: {
        text: [
          'She crumples the letter and tosses it into the fountain.',
          '@hikari I\'ll write to my mom. The Goddess said she\'d deliver one letter. I\'ll tell her I\'m happy. That I found something better than a cheat skill.',
          'She takes your hands, very serious, very pink.',
          '@hikari And I want to... um... I want to trigger the next event. The *big* one. The one with the... you know.',
          '@you The one where the screen fades to black?',
          '@hikari *THAT ONE, YES, STOP SAYING IT OUT LOUD.*',
        ],
        next: 'night',
      },
      night: {
        text: [
          "Her room at the inn is tiny and piled with \"quest gear\": a bag of rocks she's convinced are magic, a hand-drawn map of \"possible dungeon locations\", a dozen wooden practice swords. She shoves it all under the bed in a panic.",
          "@hikari Okay. Okay okay okay. This is the event. The big one. I've seen it a thousand times. I've *read* it a thousand times. I know exactly what happens.",
          "@hikari ...I have absolutely no idea what happens.",
          "You laugh, and she laughs, and the nerves break. She kisses you, bumping noses, then again, better. She tugs her sailor uniform's red neckerchief loose with a flourish she's obviously been saving.",
          "@hikari *Cast off armor!* — that sounded way cooler in my head.",
          "She's nervous and excitable and talks far too much. She narrates everything like an announcer: \"and then the heroine *bravely* unbuttons the — oh, oh *wow* — critical hit —\". Then you kiss down her neck and she runs out of words entirely. That takes a while, and it's very worth it.",
          "She's fearless, the same way she charged six goblins with a dented sword. She doesn't know the rules, so she makes them up as she goes, with total enthusiasm, and laughs breathlessly every time something works.",
          "@hikari This is SO much better than the light novels. They skipped *everything.* They always cut to the morning! Who *does* that?!",
          "@you Writers who've never done it.",
          "@hikari *Cowards.*",
          "...",
          "Afterward, she lies curled against you, tracing patterns on your chest.",
          "@hikari Hey. {name}.",
          "@you Yeah?",
          "@hikari Status open.",
          "Nothing happens. She grins anyway.",
          "@hikari Affection: max. Relationship: *heroine.* Current location: exactly where I want to be.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake to someone poking your cheek, repeatedly, with great determination.",
          "@hikari Morning event! Morning event! This is the part where the heroine wakes up first and watches the love interest sleep and thinks deep thoughts!",
          "Hikari is sitting cross-legged on the bed in your shirt, hair in a messy ponytail, absolutely glowing.",
          "@hikari I've been thinking deep thoughts for ten minutes and I'm bored, so now it's the part where we talk about our feelings. Or the part where you make me breakfast. Or both! Which route do you pick?",
        ],
        choices: [
          { text: "\"The feelings route.\"", go: "feelings", aff: 6 },
          { text: "\"The breakfast route. I'll make you noodle soup.\"", go: "breakfast", aff: 6 },
          { text: "\"Secret third route.\" Pull her back under the blanket.", go: "secret", aff: 6 },
        ],
      },
      feelings: {
        text: [
          "@hikari Okay! Okay. Feelings. I'll go first.",
          "She takes a deep breath.",
          "@hikari Back home, I used to feel like a background character in my own life. And last night I felt like the main character for the first time ever. And it wasn't because of a cheat skill. It was because of you.",
          "She stares at you, appalled at herself.",
          "@hikari That was SO cheesy. I've been reading too much. Pretend I said something cool.",
          "You kiss her instead. She decides that's cool enough.",
        ],
        end: true,
      },
      breakfast: {
        text: [
          "You go down to the inn kitchen and make her a bowl of noodle soup with an egg on top, the way she taught you. You bring it back up on a tray.",
          "She eats it sitting in bed in your shirt, slurping loudly, and gets broth on her nose.",
          "@hikari This is the best morning of both my lives. And one of them included *trains.*",
        ],
        end: true,
      },
      secret: {
        text: [
          "@hikari A SECRET THIRD ROUTE? Oh, those are always the best ones! What unlocks it? Is there a flag? Did I trigger a —",
          "You pull her under the blanket. She shrieks, then giggles, then stops talking for a good long while.",
          "@hikari ...Okay, the secret route is canon now. I'm declaring it canon.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'On the festival hill, Hikari is waiting for you in a borrowed festival yukata she sewed herself from a curtain — white with blue stars. It\'s lopsided. It\'s perfect.',
          '@hikari It\'s what we wear for festivals back home! It\'s a bit... rough. I had to guess the pattern. And the sewing. And the fabric.',
          'Halfway through the starfall, the air above the hill shimmers. A doorway opens: a rectangle of fluorescent light, and beyond it, a narrow street full of tiny shops and glowing signs and the distant rumble of a train.',
          'Tokyo.',
          'Hikari stares at it for a long, long time. Then she takes a folded letter from her sleeve and tosses it through. The doorway flickers, as if accepting it.',
          '@hikari Bye, Mom. I love you. Don\'t burn the rice.',
          'The gate closes. Hikari turns to you, eyes wet, smiling.',
        ],
        next: 'goddess',
      },
      goddess: {
        text: [
          '@narrator Oh, I *love* this part.',
          '@hikari ...Goddess?!',
          '@narrator Hello, little star. I owe you an explanation. I\'m the one who brought you here. Not the ox cart — well, the ox cart helped.',
          '@narrator You wanted to be special so badly. But you were looking at the wrong genre, darling. You were never going to be the *hero.*',
          '@narrator You were going to be the *heroine.*',
          'Hikari bursts into tears and laughter at the same time, and grabs your face, and kisses you under the falling stars while the entire festival hill cheers without knowing why.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'You and Hikari become the most famous adventuring duo in FantasyLandia. She never gets a cheat skill. She never needs one. She still shouts "STATUS OPEN!" before every fight. Sometimes, now, it works — though that may just be Amorette having fun.',
          'She opens a noodle shop in Clichéton with Bettina\'s help: *Hoshino Ramen (Approximately).* It\'s wildly popular. It\'s never quite right. She says that\'s the point.',
          'Every Starfall, the goddess delivers one letter to Tokyo, and one letter back. Her mother writes that she\'s glad Hikari is happy, that her brother still plays games too loud, and that she has learned to not burn the rice.',
          'Hikari reads them aloud to you on the festival hill every year, laughing and crying, your hand in hers.',
          'She was right, in the end. Her life did turn into a story.',
          'It just turned out to be a love story.',
        ],
        ending: 'hikari',
      },
    },
  },
});
