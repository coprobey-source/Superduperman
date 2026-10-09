FL.addCharacter({
  id: 'sylvaine',
  name: 'Sylvaine Elderleaf',
  short: 'Sylvaine',
  trope: 'Ancient Wise Elf',
  color: '#7fcf9a',
  favStat: 'wits',
  endingTitle: 'A Season Among Centuries',
  teaser: 'A tall woman with long pointed ears reads three books at once, all of them floating.',
  blurb: 'An elven archmage of nine hundred and twelve years. Serene, sardonic and devastatingly clever, she has outlived kingdoms and finds most mortals charmingly brief. She claims she has nothing left to learn. She is wrong.',
  schedule: ['library', 'forest', 'forest'],
  gifts: { love: ['tome'], like: ['herbs', 'tea', 'scroll'], hate: ['axe', 'ale'] },
  giftLines: {
    love: ['Her eyes widen — genuinely widen, which you suspect hasn\'t happened in a century.', '@sylvaine The Codex of Vel\'Mara. I thought every copy burned in the Second Sundering. Where did you — no. Don\'t tell me. Let me have the mystery. Thank you, little one.'],
    like: '@sylvaine How thoughtful. You know, I believe that\'s the first gift a mortal has given me in sixty years. The last was a goat. I\'m still not sure why.',
    neutral: '@sylvaine Ah. Mortal trinket. I\'ll treasure it for the brief span of your lifetime, which, to me, is about a week and a half.',
    hate: ['She regards it with the weary disappointment of someone who has watched forests fall.', '@sylvaine I see. Well. I suppose not everyone can be thoughtful.'],
  },
  talk: [
    ['@sylvaine Ah, the little mortal. You\'ve grown. No, wait. You haven\'t. Mortals grow so slowly in the ways that matter, and so quickly in the ways that don\'t.'],
    ['@sylvaine When I was young, that hill over there was a mountain. And Clichéton was a swamp. And humans hadn\'t invented the fork yet.', '@sylvaine The fork was a big moment. Everyone was very excited.'],
    ['@sylvaine You want wisdom? Very well. Never trust a wizard who says "trust me." Never eat yellow snow, or yellow mushrooms. And never, ever let a dwarf choose the music.'],
    ['@sylvaine I was young and foolish once. Around three hundred years ago. I dyed my hair blue and ran off with a bard. Don\'t look at me like that.'],
    ['She is lying in a patch of sunlight in the grass, eyes closed, perfectly still.', '@sylvaine I am not napping. I am *contemplating eternity.* Sit down. Contemplate with me.'],
    ['@sylvaine Your little brain is fascinating. You think so *fast.* Leaping to conclusions like a frog leaping to lily pads. Some of them are even right.'],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'In a quiet corner of the Grand Library, a woman sits cross-legged in midair, a foot above her chair. Three books float around her, pages turning themselves. A teacup orbits her head like a little moon.',
          'She\'s tall and willowy, with silver-blonde hair that falls past her waist and ears that taper to long, elegant points. Her robes are the green of new leaves. She looks perhaps thirty. Her eyes look much, much older.',
          '@sylvaine You\'ve been standing there staring for two minutes and forty seconds. That\'s very rude, even for a human. Either sit down or say something clever.',
        ],
        aff: 10,
        choices: [
          { text: 'Say something clever. [Wits check 1]', check: { stat: 'wits', dc: 1 }, pass: 'clever_win', fail: 'clever_fail' },
          { text: 'Sit down without a word.', go: 'sit' },
          { text: '"How old *are* you?"', go: 'age' },
        ],
      },
      clever_win: {
        text: [
          '@you You\'re reading three books at once, and I\'d bet they\'re the same story in three different translations, so you can see what each translator got wrong.',
          'The books stop turning. She looks at you properly for the first time.',
          '@sylvaine ...Well. Aren\'t you a surprise. It\'s the Lay of Eldarion, yes, and all three translators are fools.',
        ],
        aff: 6,
        next: 'name',
      },
      clever_fail: {
        text: [
          '@you Uh. Nice... floating?',
          '@sylvaine Thank you. I\'ve been practicing for six hundred years. It\'s nice to be appreciated by a professional.',
          'Despite the sarcasm, the corner of her mouth twitches.',
        ],
        next: 'name',
      },
      sit: {
        text: [
          'You sit. You say nothing. She keeps reading. Minutes pass in perfect silence.',
          '@sylvaine ...Hm. You know how to be quiet. Most mortals don\'t. They talk to fill up their brief little lives with noise.',
          '@sylvaine I approve.',
        ],
        aff: 5,
        next: 'name',
      },
      age: {
        text: [
          '@sylvaine Nine hundred and twelve. Next question.',
          '@you You look great for nine hundred and twelve.',
          '@sylvaine I know.',
        ],
        aff: 3,
        next: 'name',
      },
      name: {
        text: [
          '@sylvaine Sylvaine Elderleaf, of the Silverbough line. Archmage, historian, and the oldest living thing in this town that isn\'t a tree. And you?',
          '@you {name}.',
          '@sylvaine {name}. I\'ll try to remember it. I find mortal names hard to keep — you\'re gone so quickly.',
          'She says it lightly, but her gaze drifts to the window for just a moment.',
          '@sylvaine Come find me in the Whisperwood, if you want to learn something. I keep a glade there. It\'s quieter than this place. Fewer people saying "shh."',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Sylvaine\'s glade is hidden deep in the Whisperwood: a ring of silver birches around a still pool, with flowers that glow like small lanterns. She is sitting on a mossy stone with a chessboard of carved crystal.',
          '@sylvaine Ah. Good. Sit. Do you play Kings & Dragons?',
          '@you A little.',
          '@sylvaine Wonderful. I haven\'t lost a game since the reign of Queen Merovia. That was four hundred years ago. She cheated.',
        ],
        choices: [
          { text: 'Play a careful, patient game. [Wits check 2]', check: { stat: 'wits', dc: 2 }, pass: 'chess_win', fail: 'chess_lose' },
          { text: 'Play wildly and recklessly, sacrificing pieces everywhere.', go: 'chess_wild' },
          { text: '"I\'ll play, if you tell me a story while we do."', go: 'chess_story' },
        ],
      },
      chess_win: {
        text: [
          'It takes an hour. Her pieces glide across the board with terrifying precision. Yours fall one by one. And then — you see it. A gap. A single move.',
          'You push your humble shepherd forward, and her dragon is trapped.',
          'Sylvaine stares at the board. Then at you. Then at the board again.',
          '@sylvaine That is — the Shepherd\'s Gambit. Nobody uses the Shepherd\'s Gambit. It\'s *ridiculous*. It\'s —',
          'She starts laughing, a bright astonished sound, like a silver bell.',
          '@sylvaine You haven\'t won, you know. You\'ve merely forced a draw. But it\'s the first draw in four hundred years. Oh, I like you.',
        ],
        aff: 10,
        next: 'pool',
      },
      chess_lose: {
        text: [
          'You lose in eleven moves. She is very gracious about it.',
          '@sylvaine Your problem is you think three moves ahead. I think three hundred. But you never once looked at the board and gave up. That\'s rarer than skill, you know.',
        ],
        aff: 4,
        next: 'pool',
      },
      chess_wild: {
        text: [
          'You hurl your pieces forward with abandon, sacrificing your knights, your towers, even your queen, in an utterly nonsensical charge.',
          'Sylvaine frowns at the board. She frowns harder. She begins calculating, muttering under her breath, trying to find the hidden strategy.',
          'There isn\'t one. You lose spectacularly. But she spends the next twenty minutes convinced there was a genius move she missed.',
          '@sylvaine You... had no plan. At all. That\'s — chaos is very hard to predict. I need a moment.',
        ],
        aff: 6,
        next: 'pool',
      },
      chess_story: {
        text: [
          'So she tells you, as the pieces glide: the founding of the elven kingdoms, the dragon wars, the day the moon cracked and the elves sang it whole again.',
          'You lose the game. You don\'t care. You could listen to her voice for a hundred years.',
          '@sylvaine You\'re not paying attention to the board at all, are you?',
          '@you Not even slightly.',
          '@sylvaine ...Hm. That\'s alright. Nobody has listened to my stories in a very long time.',
        ],
        aff: 7,
        next: 'pool',
      },
      pool: {
        text: [
          'Afterward, she leads you to the edge of the pool. Its surface is so still it reflects the sky like a mirror.',
          '@sylvaine Look into it. It shows what was. This glade, a thousand years ago.',
          'In the water, you see the same birches, younger. A young elf with blue-dyed hair laughing with a human man who has a lute.',
          '@sylvaine His name was Aldric. He was a terrible musician. He died seventy years after that, an old man, in my arms.',
          'She says it lightly, like a weather report. But her fingers tremble.',
          '@sylvaine That\'s the trouble with mortals, little one. You\'re lovely and you\'re brief, and we always outlive you.',
        ],
        choices: [
          { text: '"Was it worth it? Loving him?"', go: 'worth', aff: 6 },
          { text: 'Take her trembling hand.', go: 'hold', aff: 6 },
        ],
      },
      worth: {
        text: [
          'She\'s silent for so long you think she won\'t answer.',
          '@sylvaine ...Yes. Every moment. That\'s the cruelest part.',
        ],
        end: true,
      },
      hold: {
        text: [
          'Her fingers are cool and slender. She glances down at your joined hands in surprise, but she doesn\'t pull away.',
          '@sylvaine You\'re very warm. Mortals always are. You burn faster.',
          'But she holds on until the sun sets.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'Sylvaine sends a sparrow to find you. It lands on your shoulder and speaks in her voice: *Come to the glade. Bring your brain. You\'ll need it.*',
          'When you arrive, the glade is filled with floating motes of light, and there is an enormous magical circle carved into the grass.',
          '@sylvaine I\'m going to teach you a spell. No, don\'t look like that. Humans can learn. Slowly. With great difficulty. Like teaching a cat to fetch.',
          'She stands behind you, guiding your hands into position. Her breath tickles your ear.',
          '@sylvaine Focus. Feel the current. It\'s like a river under the skin of the world.',
        ],
        choices: [
          { text: 'Concentrate with everything you have. [Wits check 3]', check: { stat: 'wits', dc: 3 }, pass: 'spell_win', fail: 'spell_fail' },
          { text: 'Get distracted by how close she is.', go: 'distracted' },
        ],
      },
      spell_win: {
        text: [
          'At first, nothing. And then — you feel it. A thrumming warmth flowing up from the earth, through your feet, along your arms, and out through your fingertips.',
          'A single flower blooms in midair before you: a shimmering, translucent rose made of pure light.',
          'Behind you, Sylvaine has gone very quiet.',
          '@sylvaine ...It took me forty years to make my first flower. You did it in an afternoon.',
          '@sylvaine Well, I *was* a very good teacher.',
        ],
        aff: 10,
        next: 'confess',
      },
      spell_fail: {
        text: [
          'You strain. You focus. Something happens: a small cloud of glitter puffs out of your fingers and settles in her hair.',
          '@sylvaine ...That\'s a start. A sparkly, unhelpful start.',
          'She doesn\'t brush the glitter out. She leaves it in for the rest of the day.',
        ],
        aff: 5,
        next: 'confess',
      },
      distracted: {
        text: [
          'It\'s hard to feel the river under the world when there\'s a nine-hundred-year-old archmage pressed against your back, her silver hair falling over your shoulder, smelling of rain and old books.',
          '@sylvaine You\'re not focusing.',
          '@you I\'m focusing on something.',
          'A long pause. Then — so faint you almost miss it — the tips of her long ears turn pink.',
          '@sylvaine ...Insolent mortal.',
        ],
        aff: 8,
        next: 'confess',
      },
      confess: {
        text: [
          'Later, you sit together on the stone by the pool. The motes of light have dimmed. The glade is filled with soft blue twilight.',
          '@sylvaine I made a promise, after Aldric. Never again. Never to love something that would leave so soon. I have kept it for seven hundred years.',
          '@sylvaine And then you wander in with your terrible chess and your quick little brain, and I find myself watching the door of the library every morning like a love-struck girl of two hundred.',
          'She doesn\'t look at you.',
          '@sylvaine It\'s very inconvenient.',
        ],
        choices: [
          { text: '"Then let it be inconvenient."', go: 'inconvenient', aff: 10 },
          { text: '"I can\'t promise you forever. But I can promise you every day I have."', go: 'promise', aff: 12 },
        ],
      },
      inconvenient: {
        text: [
          'She laughs, a small, helpless sound.',
          '@sylvaine Spoken like someone with no sense of scale. Oh, you\'re impossible.',
          'And she leans over and kisses you, very lightly, on the corner of the mouth. Then she looks surprised at herself.',
          '@sylvaine ...Hm. Well. That happened.',
        ],
        end: true,
      },
      promise: {
        text: [
          'She turns to look at you, and her ancient eyes are shining.',
          '@sylvaine That is the most foolish, most *human* thing anyone has ever said to me.',
          '@sylvaine ...Say it again. Slowly. I want to remember the exact way it sounds.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'The glade at night is otherworldly. The glowing flowers have opened fully, and the pool reflects a thousand stars. Sylvaine is waiting for you in the water, waist-deep, her silver hair floating around her like moonlight.',
          '@sylvaine There\'s an old elven custom. The Night of the Mirror Pool. You come to the water with someone, and you show them... everything. No glamours. No illusions. Just who you truly are.',
          'She lets something go — a spell you didn\'t know she\'d been holding. Her form shimmers. Her ears grow longer. Faint silver markings like tree-rings trace across her skin, glowing softly. She looks older and younger all at once: ancient and luminous and impossibly beautiful.',
          '@sylvaine This is what nine hundred years looks like. Will you come in?',
        ],
        choices: [
          { text: 'Wade into the water without hesitation.', go: 'wade', aff: 8 },
          { text: '"You\'re the most beautiful thing I\'ve ever seen."', go: 'beautiful', aff: 8 },
          { text: 'Trace the glowing markings on her skin. [Wits check 4] "Every ring is a year, isn\'t it?"', check: { stat: 'wits', dc: 4 }, pass: 'rings', fail: 'wade' },
        ],
      },
      wade: {
        text: [
          'The water is cool, then warm, glowing faintly where it touches you. She watches you approach with a strange expression, like she can\'t quite believe you\'re real.',
          '@sylvaine You\'re not afraid.',
          '@you Should I be?',
          '@sylvaine Most would be. I\'m very old, and very powerful, and I could make the sky rain fire if I sneezed wrong.',
          '@you Don\'t sneeze, then.',
        ],
        next: 'together',
      },
      beautiful: {
        text: [
          'She actually blushes — the silver markings on her cheeks glowing brighter.',
          '@sylvaine I have been called beautiful by poets and kings for nine hundred years. It has never once made me feel like *this.* Come here.',
        ],
        next: 'together',
      },
      rings: {
        text: [
          'Your fingertips trace a ring on her shoulder. She shivers.',
          '@you Every ring is a year. Like a tree. This one is darker — that\'s when you lost Aldric, isn\'t it?',
          'She stares at you. A tear slips down her cheek.',
          '@sylvaine No one has ever read them. Not in nine hundred years. No one has ever bothered to *look.*',
        ],
        aff: 12,
        next: 'together',
      },
      together: {
        text: [
          'She draws you close, and the stars in the pool swirl around you both.',
          'Her kiss is slow and deep and patient, the kiss of someone who has all the time in the world and has decided to spend it here, with you. Every place she touches you, light blooms under your skin.',
          'The glade seems to hold its breath. The flowers glow brighter. The water warms.',
          '@sylvaine I have lived nine hundred years, and I\'ve never once felt so *young.*',
          'What follows is hushed and luminous, like a secret the whole forest is keeping: her long hair sweeping over you both, starlight in the water, a slow unhurried exploring as if you were a new language she intends to learn perfectly.',
          '...',
          'Afterward, you lie together on the soft moss by the pool, her head on your chest. She\'s listening to your heartbeat.',
          '@sylvaine It\'s so fast. Like a little bird. I\'ll memorize it.',
          '@you Why?',
          '@sylvaine So that in a thousand years, I\'ll still know exactly what it sounded like.',
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'You find Sylvaine on the very top of the festival hill, sitting a few inches above the grass, ankles crossed.',
          '@sylvaine Nine hundred and twelve Starfalls. I\'ve watched every one. Alone, for most of them.',
          '@sylvaine The legend says that those who watch together are bound forever. But forever means something very different to an elf than to you. My forever would be your thousand lifetimes.',
          '@you So what do we do?',
          'She smiles.',
          '@sylvaine Oh, I\'ve been thinking about that for weeks. Days and days. Which is an *eternity* for you.',
        ],
        next: 'gift',
      },
      gift: {
        text: [
          'She takes your hand and presses a small seed into it. It glows faintly silver.',
          '@sylvaine A Silverbough seed. My family\'s tree. Elves plant one when they bind their life to someone. It will grow as long as one of us is alive, and it remembers everything.',
          '@sylvaine I can\'t give you forever, {name}. But I can give you this: I will love you with all of mine. And when you\'re gone, every leaf on that tree will still remember your name.',
          'The stars begin to fall. She kisses you beneath them, and for once she doesn\'t seem to be counting time at all.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'You plant the seed in the glade. It grows impossibly fast — a sapling by summer, a young tree by winter, its leaves shining silver in the moonlight.',
          'Sylvaine teaches you magic. You teach her to cook. (She\'s terrible at it. Nine hundred years and she has never once boiled an egg.) You play chess every evening. You\'ve won twice. She insists both were draws.',
          'She stops counting years. She starts counting days instead — days with you — and she says that each one is fuller than a century used to be.',
          'And in the heart of the Whisperwood, a silver tree grows tall, and on every one of its leaves, if you look closely, is the faint shape of a name.',
        ],
        ending: 'sylvaine',
      },
    },
  },
});
