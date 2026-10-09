FL.addCharacter({
  id: 'fenna',
  name: 'Fenna Moonfang',
  short: 'Fenna',
  trope: 'Feral Werewolf Girl',
  color: '#d39b5a',
  favStat: 'might',
  endingTitle: 'Pack of Two',
  teaser: 'Golden eyes watch you from the undergrowth. Something is gnawing a bone. Loudly.',
  blurb: 'A werewolf raised by actual wolves, cast out of her pack for refusing to back down from the alpha. Wild, blunt and fiercely loyal. She has no idea what "personal space" is, and wouldn\'t care if she did. She respects strength.',
  schedule: ['forest', 'market', 'forest'],
  gifts: { love: ['steak'], like: ['fish', 'plushie', 'cakes'], hate: ['dagger', 'perfume'] },
  giftLines: {
    love: ['@fenna *sniff* ...*SNIFF*. MEAT. Good meat! You hunted this for me?', 'She tears into it right there, growling happily, and then bumps her head hard against your shoulder. Wolf for "thank you."'],
    like: '@fenna For Fenna? *sniff* ...Good. Fenna keeps it. Nobody else touches it.',
    neutral: '@fenna *sniff sniff* Hm. Can\'t eat it. Can\'t chew it. Why do humans give each other things you can\'t eat?',
    hate: ['She recoils with a snarl, hackles up.', '@fenna SILVER-SMELL. STINK-SMELL. Get it away! Bad gift! *Bad!*'],
  },
  talk: [
    ['Fenna sniffs you all over, circling twice.', '@fenna You went to the tavern. And the market. And you touched a cat. *Why* did you touch a cat.'],
    ['@fenna Humans sit on chairs. Why? Ground is right there. Ground is a free chair.', 'She demonstrates by flopping onto the dirt, belly up, and looking at you expectantly.'],
    ['@fenna Old pack said Fenna is "too wild." Too wild for *wolves.* Can you believe?', '@fenna ...Fenna bit the alpha. Only a little. He deserved it.'],
    ['She shows you a scar on her shoulder: three parallel lines.', '@fenna Bear. Big bear. Fenna won. Then we were friends. Then Fenna ate his fish. Then we were not friends.'],
    ['@fenna Your hair is messy. Hold still.', 'Before you can protest, she grooms it into place with her fingers, very seriously, like this is the most important task in the world.'],
    ['@fenna When the moon is full, Fenna gets... more. More teeth. More hungry. More *feelings*. It is very annoying.'],
    ['@fenna Fenna practiced the human thing. The "hello." *Hel-lo.* Good? Fenna did not bite the shopkeeper this time. Progress.'],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'You\'re following a deer trail through Whisperwood when the birds go quiet all at once.',
          'Then something drops out of the tree above you and lands in a crouch, close enough to touch. It\'s a woman: wild sandy hair full of twigs, tattered furs, bare feet, and a pair of very large, very fluffy wolf ears twitching on top of her head. A big bushy tail sways behind her.',
          'She leans in close. Closer. And *sniffs* you, from collar to boots.',
          '@fenna *sniff sniff sniff.* ...You are not from here. You smell like hay-cart and road and nervous.',
        ],
        aff: 10,
        choices: [
          { text: 'Stand your ground and look her in the eye. [Might check 1]', check: { stat: 'might', dc: 1 }, pass: 'stand_win', fail: 'stand_fail' },
          { text: 'Hold out your hand, palm down, like you would for a dog.', go: 'hand' },
          { text: 'Sniff her back.', go: 'sniff' },
        ],
      },
      stand_win: {
        text: [
          'You don\'t flinch. You meet those golden eyes and hold them.',
          'Slowly, a grin spreads across her face, showing a lot of very sharp teeth.',
          '@fenna Ha! You don\'t run. Most humans run. Running is fun to chase, but... not running is *more* interesting.',
        ],
        aff: 5,
        next: 'name',
      },
      stand_fail: {
        text: [
          'You try to stand your ground. Your knees have other ideas. You stumble back and land on your rear in the moss.',
          '@fenna Ha! Wobbly. Like a baby deer. Cute.',
          'She offers you a hand up — and then pulls you up so hard you nearly fly past her.',
        ],
        next: 'name',
      },
      hand: {
        text: [
          'She stares at your outstretched hand. Then she stares at you.',
          '@fenna ...Fenna is not a *dog.*',
          'And then she sniffs your hand anyway, very thoroughly, and then licks it once. Just once. For research.',
          '@fenna Salty. Fine.',
        ],
        aff: 3,
        next: 'name',
      },
      sniff: {
        text: [
          'You lean in and take a big theatrical sniff of her hair. She smells like pine needles, rain and campfire smoke.',
          'Her ears shoot straight up. Her tail starts wagging so hard it smacks a sapling.',
          '@fenna YOU SNIFF BACK! Nobody sniffs back! Humans are so *rude* about sniffing!',
        ],
        aff: 6,
        next: 'name',
      },
      name: {
        text: [
          '@fenna Fenna. Fenna Moonfang. Pack of... *one*, now. You?',
          '@you {name}.',
          '@fenna {name}. *sniff.* Fenna will remember the smell. Smells are better than names.',
          'She drops to all fours, bounds up onto a fallen log, and looks back at you over her shoulder.',
          '@fenna This is Fenna\'s forest. You can come again. Bring meat.',
          'Then she\'s gone into the trees, crashing through the underbrush with absolutely no stealth whatsoever.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Fenna finds you on the forest path — or rather, she tackles you onto it from behind a bush.',
          '@fenna HUNT. Today we hunt. Together. Fenna will teach you, because you are hopeless.',
          'She drags you off the trail by the sleeve, deep into the woods, then drops into a low crouch beside a muddy stream.',
          '@fenna Look. Tracks. Rabbit? Deer? Something tasty. Tell Fenna which.',
        ],
        choices: [
          { text: 'Study the tracks carefully. [Wits check 2]', check: { stat: 'wits', dc: 2 }, pass: 'track_win', fail: 'track_fail' },
          { text: '"Why don\'t you just sniff it out?"', go: 'track_sniff' },
          { text: 'Get down on all fours next to her and sniff the ground too.', go: 'track_allfours' },
        ],
      },
      track_win: {
        text: [
          '@you Deer. A young buck, judging by the size. And he\'s favoring his left foreleg — see how that print\'s shallower?',
          'Fenna stares at you with her mouth open.',
          '@fenna ...You read the ground like the bookworm people read books. That is *so strange.* That is so — good!',
        ],
        aff: 6,
        next: 'chase',
      },
      track_fail: {
        text: [
          '@you That\'s... definitely a bear. A big one.',
          '@fenna That is a *rabbit.*',
          '@you A big rabbit?',
          '@fenna A normal rabbit. You are a terrible wolf. It\'s okay. Fenna will be the wolf for both of us.',
        ],
        aff: 2,
        next: 'chase',
      },
      track_sniff: {
        text: [
          '@fenna Because then *you* don\'t learn! Pups have to learn!',
          '@you Did you just call me a pup?',
          '@fenna Fenna calls it like Fenna smells it.',
        ],
        aff: 3,
        next: 'chase',
      },
      track_allfours: {
        text: [
          'You crouch next to her, nose an inch from the mud, and inhale deeply. You smell mud. That\'s it. Just mud.',
          'Fenna is shaking with silent laughter beside you, her tail thumping the ground.',
          '@fenna Your nose is broken! All human noses are broken! But — you *tried.* Fenna likes trying.',
        ],
        aff: 5,
        next: 'chase',
      },
      chase: {
        text: [
          'The hunt is chaos. Fenna bounds through the trees with impossible speed. You crash behind her through brambles, over logs, across a stream you fall into completely.',
          'Eventually you collapse in a sunny clearing, soaked and scratched and laughing so hard your ribs hurt. Fenna flops down next to you. The deer is long gone. Neither of you cares.',
          '@fenna Good hunt.',
          '@you We didn\'t catch anything.',
          '@fenna Good hunt. *Fun* hunt. Fenna has not had a fun hunt since... since pack.',
          'Her ears droop for a second. Then she rolls over and puts her head on your stomach like it\'s a pillow, completely unselfconscious.',
        ],
        choices: [
          { text: 'Scratch behind her ears.', go: 'ears' },
          { text: '"Tell me about your old pack."', go: 'pack' },
          { text: 'Just lie there with her and watch the clouds.', go: 'clouds' },
        ],
      },
      ears: {
        text: [
          'You reach up and scratch gently behind one fluffy ear. Fenna goes completely still.',
          'Then her leg starts kicking. On its own. Thump-thump-thump.',
          '@fenna Th-that is — Fenna is not — *ohhh, right there* — this is very undignified and you will tell NOBODY.',
          'She doesn\'t move away, though. If anything, she presses her head harder into your hand.',
        ],
        aff: 8,
        end: true,
      },
      pack: {
        text: [
          '@fenna Big pack. Twelve wolves. Fenna was the only one who could be human-shaped. They didn\'t like it. Too strange. Too loud. Too *Fenna*.',
          '@fenna The alpha said: be less. Fenna said: no. So.',
          'She shrugs, but her tail has gone very still.',
          '@you For what it\'s worth, I like you exactly as much Fenna as you are.',
          'She doesn\'t answer. But she presses closer against your side, and stays there for a long time.',
        ],
        aff: 8,
        end: true,
      },
      clouds: {
        text: [
          'You lie in the grass together. Fenna points at clouds.',
          '@fenna That one is a rabbit. That one is a deer. That one is a big steak.',
          '@you They\'re all food.',
          '@fenna Clouds are sky food. Everyone knows this.',
          'It\'s the most peaceful afternoon you\'ve had in a long time.',
        ],
        aff: 6,
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'Fenna is waiting for you at the edge of the forest, pacing back and forth. Her eyes are brighter than usual, and her teeth look sharper.',
          '@fenna You. Fenna has been thinking. That is rare, so listen.',
          '@fenna In wolf-pack, you have a *place*. A rank. Fenna wants to know your place. With Fenna.',
          '@you ...How do we figure that out?',
          'She grins. It\'s a lot of teeth.',
          '@fenna We *wrestle.*',
        ],
        choices: [
          { text: 'Accept the challenge and go all in. [Might check 3]', check: { stat: 'might', dc: 3 }, pass: 'wrestle_win', fail: 'wrestle_lose' },
          { text: 'Accept, but fight dirty — tickle her. [Wits check 2]', check: { stat: 'wits', dc: 2 }, pass: 'tickle', fail: 'wrestle_lose' },
        ],
      },
      wrestle_win: {
        text: [
          'She lunges. You catch her. It is the most intense two minutes of your life: rolling through leaves, grappling, her snapping playfully at your ear, you hooking her leg out from under her.',
          'And then, somehow, you\'re on top, pinning her wrists to the moss. She\'s breathing hard. So are you.',
          'Fenna stares up at you, wide-eyed, cheeks flushed under the dirt.',
          '@fenna You... *won.* Nobody pins Fenna. Not even the alpha pinned Fenna.',
          'Her tail is wagging so hard it\'s sweeping a clear patch in the leaves.',
          '@fenna ...Again. Do it again sometime.',
        ],
        aff: 12,
        next: 'after',
      },
      tickle: {
        text: [
          'She lunges. Instead of blocking, you go straight for her ribs.',
          'Fenna lets out a shriek that scatters every bird in the forest and collapses into helpless giggles, kicking and squirming.',
          '@fenna CHEATING — that is — *ahahaha* — WOLVES DON\'T — STOP — *don\'t stop*—',
          'By the time you let up, she\'s lying flat on her back in the leaves, gasping and grinning.',
          '@fenna Sneaky. Sneaky pup. Fenna will allow it. Once.',
        ],
        aff: 9,
        next: 'after',
      },
      wrestle_lose: {
        text: [
          'She lunges. You last approximately four seconds before you\'re flat on your back with a werewolf sitting on your chest.',
          '@fenna Fenna wins! Fenna is top wolf!',
          'But she doesn\'t gloat for long. She looks down at you, head tilted.',
          '@fenna ...But you got up every time. Five times. Fenna knocked you down five times and you kept getting up. Stubborn. Stubborn is good. Stubborn is *pack.*',
        ],
        aff: 7,
        next: 'after',
      },
      after: {
        text: [
          'Later, the two of you sit together against an old oak while the sun goes down. The moon rises, nearly full, and Fenna shivers.',
          '@fenna Moon is almost round. Three more nights. Then Fenna will be... big. Hairy. Hungry. Fenna will go far into the woods so Fenna doesn\'t hurt anybody.',
          '@fenna Alone. Fenna is always alone on the round moon.',
        ],
        choices: [
          { text: '"Then I\'ll come with you. You don\'t have to be alone."', go: 'stay', aff: 8 },
          { text: '"Would you let me brush your fur? When you\'re all wolfy?"', go: 'brush', aff: 6 },
          { text: '"Are you afraid of yourself?"', go: 'afraid', aff: 5 },
        ],
      },
      stay: {
        text: [
          '@fenna You — no. You would be in danger. Fenna has big teeth on the round moon. *Big* teeth.',
          '@you You\'ve had big teeth this whole time. I\'m still here.',
          'Fenna looks at you for a long, long moment. Her eyes shine in the twilight.',
          '@fenna ...Stupid pup. Brave, stupid pup.',
          'She leans over and presses her forehead to yours, eyes closed. It feels like a promise in a language older than words.',
        ],
        end: true,
      },
      brush: {
        text: [
          'Fenna\'s ears go completely flat and her face turns bright red.',
          '@fenna B-brushing is — in pack, only *mates* groom each other\'s — do you know what you are *saying?*',
          '@you ...Maybe?',
          'She covers her face with both hands. Her tail, however, is wagging uncontrollably.',
          '@fenna ...Fenna will think about it. Fenna is thinking about it *very hard.*',
        ],
        end: true,
      },
      afraid: {
        text: [
          'She\'s quiet for a long time.',
          '@fenna Yes. When Fenna is the big wolf, Fenna forgets things. Forgets names. What if Fenna forgets you?',
          '@you Then I\'ll remind you. As many times as it takes.',
          'She leans against your shoulder, and the two of you watch the almost-full moon rise together.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'The full moon hangs huge and silver over Whisperwood. You follow the sound of a lonely howl deep into the trees, to a hollow beneath the roots of an ancient oak.',
          'She\'s there. Fenna — but *more*. Taller, wilder, her ears and tail thicker, her nails sharp as claws, her eyes burning pure gold. Fur ripples along her arms and shoulders. She\'s breathing hard.',
          '@fenna You... came. Fenna told you not to come. *Stupid.* Stupid, brave...',
          'She stalks toward you slowly. A low growl rumbles in her chest — but it isn\'t a threatening sound. Not quite.',
          '@fenna Fenna is not thinking straight. The moon is loud. Everything smells like *you.* Go. Go now, or Fenna won\'t let you go at all.',
        ],
        choices: [
          { text: 'Stay exactly where you are. "I\'m not going anywhere."', go: 'stay' },
          { text: 'Step forward and take her clawed hand in yours.', go: 'hand' },
          { text: 'Say her name, gently, again and again, until her eyes focus on you.', go: 'name' },
        ],
      },
      stay: {
        text: [
          '@you I\'m not going anywhere, Fenna.',
          'She stops a breath away from you. Her nose brushes along your jaw, your throat, your collar — and she *shudders.*',
          '@fenna ...Pack. You smell like pack. You smell like *Fenna\'s.*',
        ],
        aff: 8,
        next: 'kiss',
      },
      hand: {
        text: [
          'You reach for her hand. Claws and all. Her breath catches.',
          '@fenna Careful — sharp —',
          '@you I know.',
          'You lace your fingers through hers. She stares at your joined hands like she\'s never seen anything like it in her life.',
        ],
        aff: 8,
        next: 'kiss',
      },
      name: {
        text: [
          '@you Fenna. Fenna. It\'s me. Fenna.',
          'Her golden eyes slowly clear. The growl fades into something softer, like a whine.',
          '@fenna ...{name}. Fenna remembers. Fenna remembers *you.* Even with the moon this loud.',
        ],
        aff: 10,
        next: 'kiss',
      },
      kiss: {
        text: [
          'Then she kisses you — hungry, clumsy, a little too much teeth, like she\'s only ever read about kissing in a book and decided to go for it anyway. She tastes like rain and wild honey.',
          'You kiss her back, and she makes a low, rumbling sound against your mouth that you feel all the way down to your toes.',
          'She pulls back just long enough to look into your eyes, panting.',
          '@fenna Wolves choose once. Only once. Forever. Fenna chooses you. Fenna chose you a long time ago, at the first sniff.',
          '@fenna Do you — choose Fenna back?',
        ],
        choices: [
          { text: '"I choose you, Fenna. Forever."', go: 'night', aff: 10 },
          { text: 'Answer by tilting your head back, baring your throat to her.', go: 'mark', aff: 12 },
        ],
      },
      mark: {
        text: [
          'Her eyes go wide. She knows exactly what it means — total trust, wolf-to-wolf.',
          'Slowly, so gently it makes your heart ache, she lowers her mouth to the curve of your neck and *bites* — not hard enough to break skin, just enough to leave a mark. A claim. A promise.',
          '@fenna Mine. *Mine.* And Fenna is yours.',
        ],
        next: 'night',
      },
      night: {
        text: [
          'She pulls you down into the soft moss of her den beneath the roots, and the moonlight pours over you both like water.',
          'What follows is wild and tender in equal measure: her laughter against your skin, the heat of her, her tail curling possessively around your leg, her claws so careful, careful, careful as they trace your back.',
          'Somewhere out in the forest, the wolves begin to howl. Fenna throws back her head and howls with them, and you\'ve never heard anything so joyful in your life.',
          '...',
          'When dawn comes, you wake tangled in furs and limbs, a heavy head pillowed on your chest. Fenna is human-shaped again, snoring softly, a little drool on your shirt.',
          'One golden eye opens.',
          '@fenna *Mine.* Good morning, mine.',
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Fenna isn\'t on the hill with the rest of the crowd. Of course she isn\'t. You find her up on a rocky outcrop at the edge of Whisperwood, sitting on her haunches, ears perked toward the sky.',
          '@fenna Too many people down there. Too much noise. Too many smells. Up here is better.',
          'She pats the rock next to her. You sit. She immediately flops over sideways and puts her head in your lap.',
          '@fenna Humans say the stars make you bound forever. Wolves already know that. Wolves don\'t need stars.',
          '@fenna ...But Fenna likes stars. Fenna will watch them with you anyway.',
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'The first star falls, a long streak of silver right across the full moon. Then another. Then a hundred, a thousand.',
          'Fenna sits up and howls at them — a long, happy, wild sound. Down in the forest, a wolf pack answers. Her old pack, maybe. Or a new one.',
          'Then she turns and kisses you hard under the falling stars.',
          '@fenna Pack of two. Forever.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'You build a cabin together at the edge of Whisperwood. Fenna insists on helping and mostly digs holes. Eventually you just let her dig a den under the porch, and she sleeps there half the nights and in your bed the other half.',
          'She never does learn to wear shoes. She does learn to read — a little — mostly so she can read the labels at the butcher\'s. She learns to say "please." She mostly uses it as "please, more meat."',
          'Every full moon, you walk into the forest together. She runs; you follow. You never once fall behind.',
          'And when the town children ask about the wild wolf-woman who lives at the edge of the woods with the adventurer, the old folks tell them it\'s the happiest pack in all of FantasyLandia.',
          'Just the two of you. And it\'s more than enough.',
        ],
        ending: 'fenna',
      },
    },
  },
});
