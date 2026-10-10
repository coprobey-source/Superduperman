FL.addCharacter({
  id: 'fenna',
  name: 'Fenna Moonfang',
  short: 'Fenna',
  trope: 'Feral Werewolf Girl',
  color: '#d39b5a',
  favStat: 'might',
  endingTitle: 'Pack of Two',
  endings: {
    fenna_alpha: 'Alpha of Whisperwood',
    fenna_ranger: 'Ranger Moonfang',
  },
  teaser: 'Golden eyes watch you from the undergrowth. Something is gnawing a bone. Loudly.',
  blurb: 'A werewolf raised by actual wolves, cast out of her pack for refusing to back down from the alpha. Wild, blunt and fiercely loyal. She has no idea what "personal space" is, and wouldn\'t care if she did. She respects strength.',
  schedule: ['forest', 'market', 'forest'],
  gifts: { love: ['steak'], like: ['fish', 'plushie', 'cakes', 'relic', 'mead'], hate: ['dagger', 'perfume', 'salts'] },
  giftLines: {
    love: ['@fenna:surprised *sniff* ...*SNIFF*. MEAT. Good meat! You hunted this for me?', 'She tears into it right there, growling happily, and then bumps her head hard against your shoulder. Wolf for "thank you."'],
    like: '@fenna:happy For Fenna? *sniff* ...Good. Fenna keeps it. Nobody else touches it.',
    neutral: '@fenna *sniff sniff* Hm. Can\'t eat it. Can\'t chew it. Why do humans give each other things you can\'t eat?',
    hate: ['She recoils with a snarl, hackles up.', '@fenna:angry SILVER-SMELL. STINK-SMELL. Get it away! Bad gift! *Bad!*'],
    special: {
      steak: [
        'Her nose finds it before you\'ve even unwrapped the paper. Her ears go straight up. Her tail goes completely insane.',
        '@fenna:surprised *WYVERN.* You brought Fenna *wyvern.* Fenna has not had wyvern since the big storm year!',
        'She eats it in four bites, licks the paper clean, licks your fingers clean, and then headbutts you in the chest so hard you sit down.',
        '@fenna:happy Best pup. *Best* pup. Fenna will tell the whole forest.',
      ],
      fork: [
        'Fenna takes the fork, sniffs it, and bites it. Hard. There is a small metallic *crunch.*',
        '@fenna:angry Tiny spear. Bad tiny spear. Bent now.',
        '@fenna:smug ...Fenna keeps it. For back-scratching. Humans made one good thing by accident.',
      ],
      plushie: [
        'She grabs the bunny, shakes it violently from side to side with a growl, and flings it into the air.',
        'Then she catches it, very gently, and tucks it under her chin.',
        '@fenna:blush It is *dead* now. Fenna hunted it. So now Fenna is allowed to keep it. That is the rule. Do not look at Fenna like that.',
      ],
      relic: [
        '@fenna:surprised A bone! In a tiny gold house! With a *window!*',
        'She pries the reliquary open with one claw and starts gnawing on the knucklebone with deep contentment.',
        '@fenna:happy Old bone. Pig, Fenna thinks. Very holy pig. Thank you.',
      ],
      perfume: [
        'She takes one sniff of the crystal vial and sneezes so hard she falls over backwards.',
        '@fenna:angry *ACHOO.* Flower-poison! Fenna can\'t smell anything now! Fenna can\'t smell *you!* That is the worst thing that ever happened!',
        'She rubs her nose furiously in the dirt until she can smell again, and then sniffs you all over, twice, to make sure you\'re still there.',
      ],
      salts: [
        '@fenna *sniff.* What is it for?',
        '@you You put it in the bath.',
        '@fenna:angry *BATH.* Fenna knows "bath." Fenna has *heard* of bath. You are trying to trick Fenna into getting wet on purpose. Fenna is not stupid. Fenna is *wild.*',
      ],
      tofu: [
        'She sniffs the golden tofu pocket. Takes a cautious bite. Chews. Her face goes through several stages of betrayal.',
        '@fenna:angry It looks like meat. It smells a little like meat. It is *not meat.* It is a *liar.*',
        'She eats the rest anyway. Very grumpily.',
      ],
      mead: [
        '@fenna *sniff.* Honey! Bear-drink!',
        'She drains the whole horn in one go, hiccups, and grins at you with a dribble of gold down her chin.',
        '@fenna:happy Now Fenna understands why the bear was so grumpy about his tree.',
      ],
    },
    repeat: '@fenna:smug *sniff.* Same smell as last time. And the time before. Fenna knows. Fenna still takes it. But Fenna knows.',
  },
  talk: [
    ['Fenna sniffs you all over, circling twice.', '@fenna:surprised You went to the tavern. And the market. And you touched a cat. *Why* did you touch a cat.'],
    ['@fenna Humans sit on chairs. Why? Ground is right there. Ground is a free chair.', 'She demonstrates by flopping onto the dirt, belly up, and looking at you expectantly.'],
    ['@fenna:angry Old pack said Fenna is "too wild." Too wild for *wolves.* Can you believe?', '@fenna:smug ...Fenna bit the alpha. Only a little. He deserved it.'],
    ['She shows you a scar on her shoulder: three parallel lines.', '@fenna:smug Bear. Big bear. Fenna won. Then we were friends. Then Fenna ate his fish. Then we were not friends.'],
    ['@fenna Your hair is messy. Hold still.', 'Before you can protest, she grooms it into place with her fingers, very seriously, like this is the most important task in the world.'],
    ['@fenna:sad When the moon is full, Fenna gets... more. More teeth. More hungry. More *feelings*. It is very annoying.'],
    ['@fenna:happy Fenna practiced the human thing. The "hello." *Hel-lo.* Good? Fenna did not bite the shopkeeper this time. Progress.'],
    ['Fenna is sitting on top of a market stall roof, eating an apple, core and all.', '@fenna The man says "get down." Fenna says "why." He does not have a good answer. Nobody ever has a good answer to "why."'],
    ['@fenna:angry Squirrels. Do not trust squirrels. They see everything and they tell *everyone.* The whole forest knows Fenna fell in the river on Tuesday.', '@fenna:blush Fenna did not fall. Fenna was *testing* the river.'],
    ['@fenna Humans have so many words for weather. Rain, drizzle, mizzle, shower, downpour.', '@fenna:smug Wolves have one word. It is "wet." Wolves are more efficient.'],
    { if: 'fenna_ears', lines: ['She ducks her head under your hand without asking, ears flat, eyes hopeful.', '@fenna:blush Fenna is not asking for the ear thing. Fenna is just... putting her head here. By accident. Where your hand is. Your hand can do whatever it wants.'] },
    { if: 'fenna_tracker', lines: ['@fenna:happy Pup! Come! Fenna found tracks by the stream. You read them. Use the book-eyes.', 'She drags you to a patch of mud and waits, tail thumping, while you squint at it.', '@you ...Fox. Limping a bit.', '@fenna:surprised *Again!* How! Fenna had to smell it! You did it with *looking!*'] },
    { if: 'fenna_clouds', lines: ['Fenna lies on her back in the grass and points at the sky.', '@fenna:smug That cloud is a sausage. That one is a whole pig. Look, pup. Sky food. Fenna remembered. Fenna is teaching you the important things first.'] },
    { if: { stage: 3 }, lines: ['@fenna:sad Fenna has been counting. The moon is fatter every night. Fenna counts on her fingers. Then Fenna runs out of fingers and counts on yours.', 'She takes your hand and solemnly folds down two of your fingers.', '@fenna Not long now.'] },
    { if: ['fenna_stubborn', { stage: 3 }], lines: ['@fenna:smug Fenna told the bear about you. The getting-up-five-times thing.', '@fenna:happy The bear was very impressed. Bears respect stubborn. Bears are *also* stubborn. Fenna and the bear are maybe friends again because of you.'] },
  ],
  afterTalk: [
    { if: 'fenna_mark', lines: ["Fenna presses her nose to your neck the moment you arrive and breathes in, eyes closed.", "@fenna:smug Still smells like Fenna. Good. The mark is fading, though. We will have to fix that."] },
    ["@fenna:happy Fenna told the butcher about you. Fenna said, *that one is my mate.* He gave Fenna a free bone. Humans are strange about mates but nice about bones."],
    ["She bumps her hip against yours, hard, and nearly knocks you over.", "@fenna:smug That is wolf for \"come to the den tonight.\" Fenna is teaching you wolf. You are a slow learner. Fenna likes repeating lessons."],
    ["@fenna:blush Fenna keeps dreaming about you. Not the running dreams. The *other* dreams. Fenna wakes up and bites the pillow."],
    ["Fenna presses her nose to your neck the moment you arrive and breathes in, eyes closed.", "@fenna:happy Smells like pack. Smells like *home.* You can say hello now. Fenna already said it with her nose."],
    { if: 'fenna_brush', lines: ["She drops a brush into your lap. A real one, from the market. She has clearly bitten the price tag off.", "@fenna:blush You said. Before the round moon. You said *brushing.* Fenna has been waiting very patiently. Fenna has been waiting *eleven days.*", "She lies down with her head on your knee and her tail across your lap, and does not move for an hour."] },
    { if: 'fenna_tickled', lines: ["@fenna:angry Fenna knows you are thinking about the ribs. Fenna can *smell* you thinking about the ribs.", "She backs away, crouched low, eyes narrow and delighted.", "@fenna:smug ...Fenna has been practicing not being ticklish. Come and try. Fenna dares you."] },
    { if: 'fenna_named', lines: ["@fenna:sad The round moon is coming again. Fenna is not scared this time.", "@fenna:happy Because Fenna knows: if Fenna forgets, you will say the name. You will say it and say it until Fenna comes back. Fenna remembers that even when Fenna forgets everything else."] },
    { if: 'fenna_date_harbor', lines: ["@fenna:angry Fenna went back to the big water. Alone. To fight the seagull.", "@fenna:smug The seagull is not there anymore. Fenna won. Probably. Nobody saw. Fenna is telling you so somebody knows."] },
    { if: 'fenna_date_dinner', lines: ["@fenna:smug Fenna practiced with the tiny spear. The fork. At home. On a rabbit.", "@fenna:happy Fenna got it in the rabbit *three times.* Then Fenna used hands. But three times! Next time, the tavern man will be so scared of Fenna's manners."] },
  ],
  dateFav: 'picnic',
  dates: {
    dinner: {
      start: {
        text: [
          'The Tipsy Wyvern\'s private booth has a white tablecloth, two candles, a vase with one flower in it, and more cutlery than Fenna has ever seen in her life. She stares at the place setting the way a cat stares at a cucumber.',
          '@fenna:surprised Why are there *three* tiny spears? Why are there two *knives?* Is there going to be a *fight?*',
          'She is sitting on the chair. Technically. She is crouched on the seat of it with her knees up and her tail hanging over the back, and the barkeep is pretending very hard not to notice.',
          'A steak arrives. A large one. Fenna\'s nostrils flare. Her hands twitch toward the plate. She looks at you, and she looks at the forks, and she is clearly torn between hunger and something like wanting to get this right.',
          '@fenna:sad ...Show Fenna. The human way. Fenna wants to do the human way. For you.',
        ],
        choices: [
          { text: 'Pick up your own steak with your hands and take a huge bite. "This is the human way now."', go: 'hands', aff: 6 },
          { text: 'Patiently teach her how to use a knife and fork.', go: 'teach', aff: 4 },
          { text: 'Let her watch you eat very properly, so she can copy.', go: 'proper', aff: 2 },
        ],
      },
      hands: {
        text: [
          'You lift the steak off your plate with both hands and tear into it. Juice runs down your wrists. Somebody at the next table gasps.',
          'Fenna stares at you. Then her whole face lights up like sunrise.',
          '@fenna:happy *PACK.*',
          'She falls on her steak with a joyful growl. The two of you eat like wolves in the candlelight while the whole tavern watches in horror and, eventually, with a kind of awe. A dwarf at the bar slowly puts down his fork and picks up his chop.',
          '@fenna:smug You see? Humans only need someone to go first.',
        ],
        next: 'end',
      },
      teach: {
        text: [
          '@you Fork in this hand. Knife in that one. Hold it down, cut a little piece, then—',
          'Fenna holds the fork like a dagger and the knife like a second dagger. She stabs the steak with such force that the plate cracks in half.',
          '@fenna:surprised It is *dead*, pup! Fenna killed it twice!',
          'It takes twenty minutes. But by the end, with her tongue between her teeth in fierce concentration, she cuts one small, perfect square of steak and lifts it to her mouth with the fork, and looks at you, eyes enormous.',
          '@fenna:happy Fenna did the human way. Did you see? *Did you see?*',
          'Then she eats the rest with her hands. You both agree that one square was plenty.',
        ],
        next: 'end',
      },
      proper: {
        text: [
          'You eat with perfect manners: napkin on lap, small bites, elbows in. Fenna watches with intense concentration.',
          'Then she puts her napkin on her head, takes one tiny bite, chews it forty times, and swallows with a pained expression.',
          '@fenna:sad This is the human way? This is so *slow.* The steak is getting cold. The steak is getting *sad.*',
          '@you You don\'t have to—',
          '@fenna:angry No! Fenna can do it. Fenna can do *anything.*',
          'She does it, too, to the very last miserable bite. Then she goes outside and gnaws the bone in the alley for an hour to recover.',
        ],
        next: 'end',
      },
      end: {
        text: [
          { if: { stage: 4 }, text: 'On the walk home she slings an arm around your neck and steers you with it, the way a wolf steers a packmate with its shoulder. "Mate eats with hands," she announces to every person you pass. "Fenna is very proud." Several of them hurry away.' },
          '@fenna:happy Good dinner. Loud dinner. The tavern man is scared of Fenna now. That is how you know it was a good dinner.',
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          'The Moonlit Gardens are full of neat hedges, white gravel paths, fountains and people walking very slowly with their hands behind their backs. Fenna stops at the gate and sniffs, deeply.',
          '@fenna:surprised Who *hurt* the bushes?',
          '@you What?',
          '@fenna The bushes. They are cut into shapes. That one is a swan. That one is a ball. Bushes do not *want* to be swans, pup. Somebody made them.',
          'She walks along the hedge-swans with her ears flat and her tail low, the way you might walk through a prison, glaring at a gardener as he passes.',
        ],
        choices: [
          { text: 'Challenge her to find you in the hedge maze.', go: 'maze', aff: 6 },
          { text: 'Pick a white rose and tuck it behind her ear.', go: 'rose', aff: 5 },
          { text: '"Want to help me free a bush?"', go: 'dig', aff: 3 },
        ],
      },
      maze: {
        text: [
          'You sprint into the maze. Left, right, right, left, back through a gap in the yew, and you crouch under a stone bench, holding your breath.',
          'You count to three. On four, a nose presses against the back of your neck.',
          '@fenna:smug *Found.*',
          '@you How?! That was a maze!',
          '@fenna Maze is for eyes. Fenna is a *nose.* You smell like you, pup. You can not hide from Fenna. Not ever. Not anywhere.',
          'She sounds smug. She also sounds, underneath it, very happy about that fact.',
          '@fenna:happy Again! You hide again! Fenna will count with her eyes shut. And her nose shut. Fenna will still find you.',
        ],
        next: 'end',
      },
      rose: {
        text: [
          'You pick the whitest rose and reach up to tuck it behind one of her big fluffy ears. She holds perfectly still, eyes crossing to look at it.',
          '@fenna:blush ...Why?',
          '@you Humans do it. It means I think you\'re beautiful.',
          'Her ears go pink on the inside. She doesn\'t say anything for a long time.',
          '@fenna:sad Pack never said that. Pack said "too loud" and "too strange." Nobody ever put a flower on Fenna.',
          'She wears the rose for the rest of the evening. She also eats it, eventually, but only after it has started to wilt, which you\'ve decided is a compliment.',
        ],
        next: 'end',
      },
      dig: {
        text: [
          'Fenna\'s eyes light up. Before you can explain that you were joking, she has dropped to all fours under a topiary peacock and begun digging with both hands.',
          'Dirt flies. Gravel flies. The peacock tilts alarmingly. A gardener shouts. Then another gardener shouts. Then a guard.',
          '@fenna:happy *RUN!*',
          'You run. She runs with you, laughing her loud barking laugh, and the two of you vault the garden wall together and land in a heap in the alley on the other side, filthy and breathless.',
          '@fenna:smug The peacock is free now. You are a good pup. A *bad* human. But a good pup.',
        ],
        next: 'end',
      },
      end: {
        text: [
          { if: { stage: 4 }, text: 'Before you leave, she pulls you behind the tallest hedge and kisses you hard, her fingers in your collar, her tail thumping the leaves. "Bushes can watch," she says. "Bushes have had a hard life. They deserve something nice."' },
          '@fenna Gardens are strange. Too neat. Too quiet. *But.* You were here. So it was a good place. Fenna has decided.',
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          'Fenna has never seen the sea. She stops dead at the end of the pier and stares at it, fur on end, as the sun goes down in gold and pink.',
          '@fenna:surprised It is *so much water.* Where does it stop? Fenna cannot smell where it stops. Everything else stops somewhere.',
          'A seagull lands on the railing next to her and eyes the paper cone of fried fish in your hand. Fenna eyes the seagull. The seagull eyes Fenna.',
          'Something ancient and terrible passes between them.',
          '@fenna:angry Pup. That bird. That bird wants our fish.',
        ],
        choices: [
          { text: 'Split your fish with her, piece by piece, and keep the gull at bay together.', go: 'share', aff: 6 },
          { text: 'Throw the gull a chip to keep the peace.', go: 'chip', aff: 2 },
          { text: 'Sit at the end of the pier and howl at the sunset with her.', go: 'howl', aff: 5 },
        ],
      },
      share: {
        text: [
          'You sit together on the edge of the pier, legs dangling, the cone of fish between you. You hand her a piece. She hands you a piece. The seagull edges closer. Fenna growls without looking at it. The seagull edges back.',
          '@fenna:happy This is how pack eats. Everyone gets some. Biggest wolf guards it.',
          '@you Which one\'s the biggest wolf?',
          '@fenna:smug Fenna, obviously. You are the second biggest. The bird is not pack. The bird gets *nothing.*',
          'The seagull, defeated, settles for screaming at a passing fisherman instead.',
        ],
        next: 'end',
      },
      chip: {
        text: [
          'You toss the seagull a chip. It catches it neatly.',
          'Fenna turns slowly to look at you with an expression of total betrayal.',
          '@fenna:angry You *fed* it. Now it is going to bring its *family.*',
          'It brings its family. Twelve seagulls descend on the pier in a screaming white cloud. Fenna leaps into battle, snarling. You lose all of your fish and most of your dignity, and Fenna nearly falls in the harbor. She comes out of it with a feather in her teeth and the air of a conquering hero.',
          '@fenna:smug Fenna won. Fenna got one feather. That is a win.',
        ],
        next: 'end',
      },
      howl: {
        text: [
          'You sit at the very end of the pier, put your head back, and let out the loudest, most ridiculous howl you can manage.',
          'Fenna stares at you. Then she sits next to you, tips her head back, and howls too: a long, wild, golden sound that rolls out across the water and comes back from the far rocks.',
          'Fishermen stop coiling their ropes. A dog somewhere in town joins in. Then another. Then, very faintly, from the edge of Whisperwood, something that is not a dog.',
          '@fenna:happy The big water howls back! Did you hear? It answered!',
          '@you That was an echo.',
          '@fenna:smug It was the *sea*, pup. You do not know everything.',
        ],
        next: 'end',
      },
      end: {
        text: [
          'The sun goes down. The water turns dark and silver. Fenna sits close enough that her tail wraps around your back like a scarf.',
          { if: { stage: 4 }, text: 'She rests her chin on your shoulder and breathes against your ear, slow and warm. "Big water does not stop," she says. "Fenna does not stop either. With you. That is what Fenna was thinking about."' },
          '@fenna Fenna likes the big water. It is loud and it does not care what anybody thinks of it. Like Fenna.',
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          'You barely make it ten steps into Whisperwood with the picnic basket before it is snatched out of your hands. Fenna sprints off with it in her teeth, tail high, and you have to chase her half a mile to a clearing you\'ve never seen before.',
          'It\'s beautiful: a hollow full of wild strawberries, a stream running over flat stones, and sunlight falling through the leaves in green-gold coins. Old bones are piled very neatly by a log.',
          '@fenna:happy Fenna\'s secret place. Nobody else knows. Not the pack. Not the squirrels. *Especially* not the squirrels.',
          'She has already opened the basket, sniffed everything in it, and eaten the ham.',
          '@fenna:smug The ham was guarding the other food. Fenna had to.',
        ],
        choices: [
          { text: 'Weave a crown out of wildflowers and put it on her head.', go: 'crown', aff: 6 },
          { text: 'Feed her strawberries by hand, one at a time.', go: 'feed', aff: 5 },
          { text: 'Wrestle her for the last sandwich. [Might check 3]', check: { stat: 'might', dc: 3 }, pass: 'wrestle_win', fail: 'wrestle_lose' },
        ],
      },
      crown: {
        text: [
          'You sit and weave buttercups and clover into a lopsided crown while she watches suspiciously, sure it\'s some kind of trap. When you set it on her head between her ears, she freezes.',
          '@fenna:surprised Fenna is... a *queen* now?',
          '@you Queen of the clearing.',
          'She sits up very straight. She surveys her clearing. She surveys you. She lifts her chin with enormous dignity, and the crown slides sideways over one ear.',
          '@fenna:happy Queen Fenna commands: more strawberries. And you have to stay. *Forever.* Queen\'s orders.',
        ],
        next: 'end',
      },
      feed: {
        text: [
          'You pick a ripe strawberry and hold it out. She takes it delicately from your fingers with her teeth, which is somehow much more distracting than it should be.',
          'Then another. Then another. By the tenth, she has crept so close that she\'s lying with her head in your lap, eyes half-closed, mouth open like a baby bird.',
          '@fenna:blush Fenna could pick them herself. Fenna has hands.',
          '@you Do you want to?',
          '@fenna ...No.',
          'Her tail thumps the grass, slow and content, the whole rest of the afternoon.',
        ],
        next: 'end',
      },
      wrestle_win: {
        text: [
          'You lunge for the last sandwich. She lunges for you. You roll through the strawberries, a tangle of limbs and laughter and growling, and somehow you come up on top with the sandwich held high.',
          { if: 'fenna_pinned', text: '@fenna:blush *Again.* You pinned Fenna *again.* That is two times now. That has never happened two times.', else: '@fenna:surprised You *won*? Fenna was... Fenna was trying! Mostly!' },
          'You break the sandwich in half and give her the bigger piece. She stares at it like you\'ve handed her the moon.',
          '@fenna:happy Winner shares. That is the best rule. Fenna did not know that rule. Fenna likes it.',
        ],
        aff: 6,
        next: 'end',
      },
      wrestle_lose: {
        text: [
          'You lunge for the last sandwich. Fenna gets there first, flips you onto your back in the strawberries, sits on your chest, and eats the entire sandwich while looking you directly in the eye.',
          '@fenna:smug Fenna wins. Again.',
          'Then she leans down and licks a smear of strawberry off your cheek.',
          '@fenna:happy You taste like strawberry now. So Fenna wins twice.',
        ],
        aff: 3,
        next: 'end',
      },
      end: {
        text: [
          'The sun moves across the clearing. Eventually she falls asleep curled around you like a big warm dog, snoring softly, a strawberry still clutched in one hand.',
          { if: { stage: 4 }, text: 'When she wakes she doesn\'t move away. She just presses her face into your neck and breathes you in, and murmurs: "Fenna\'s secret place. And Fenna\'s mate. Now Fenna has two secrets, and they are the best two."' },
          '@fenna:happy Come back here. Any time. Fenna will know when you are coming. Fenna will smell you from the stream.',
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'You\'re following a deer trail through Whisperwood when the birds go quiet all at once.',
          'Then something drops out of the tree above you and lands in a crouch, close enough to touch. It\'s a woman: wild sandy hair full of twigs, tattered furs, bare feet, and a pair of very large, very fluffy wolf ears twitching on top of her head. A big bushy tail sways behind her.',
          'She leans in close. Closer. And *sniffs* you, from collar to boots.',
          '@fenna:surprised *sniff sniff sniff.* ...You are not from here. You smell like hay-cart and road and nervous.',
        ],
        aff: 10,
        choices: [
          { text: 'Stand your ground and look her in the eye. [Might check 1]', check: { stat: 'might', dc: 1 }, pass: 'stand_win', fail: 'stand_fail' },
          { text: 'Hold out your hand, palm down, like you would for a dog.', go: 'hand' },
          { text: 'Sniff her back.', go: 'sniff', flag: 'fenna_sniffed' },
        ],
      },
      stand_win: {
        text: [
          'You don\'t flinch. You meet those golden eyes and hold them.',
          'Slowly, a grin spreads across her face, showing a lot of very sharp teeth.',
          '@fenna:smug Ha! You don\'t run. Most humans run. Running is fun to chase, but... not running is *more* interesting.',
        ],
        aff: 5,
        flag: 'fenna_stood',
        next: 'name',
      },
      stand_fail: {
        text: [
          'You try to stand your ground. Your knees have other ideas. You stumble back and land on your rear in the moss.',
          '@fenna:happy Ha! Wobbly. Like a baby deer. Cute.',
          'She offers you a hand up — and then pulls you up so hard you nearly fly past her.',
        ],
        next: 'name',
      },
      hand: {
        text: [
          'She stares at your outstretched hand. Then she stares at you.',
          '@fenna:angry ...Fenna is not a *dog.*',
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
          '@fenna:surprised YOU SNIFF BACK! Nobody sniffs back! Humans are so *rude* about sniffing!',
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
          '@fenna:happy This is Fenna\'s forest. You can come again. Bring meat.',
          'Then she\'s gone into the trees, crashing through the underbrush with absolutely no stealth whatsoever.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Fenna finds you on the forest path — or rather, she tackles you onto it from behind a bush.',
          '@fenna:happy HUNT. Today we hunt. Together. Fenna will teach you, because you are hopeless.',
          { if: 'fenna_sniffed', text: '@fenna:smug Also, you sniffed Fenna. First day. Fenna has been thinking about it. That means we are allowed to hunt together. That is the rule. Fenna made the rule this morning.' },
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
          '@fenna:surprised ...You read the ground like the bookworm people read books. That is *so strange.* That is so — good!',
        ],
        aff: 6,
        flag: 'fenna_tracker',
        next: 'chase',
      },
      track_fail: {
        text: [
          '@you That\'s... definitely a bear. A big one.',
          '@fenna That is a *rabbit.*',
          '@you A big rabbit?',
          '@fenna:smug A normal rabbit. You are a terrible wolf. It\'s okay. Fenna will be the wolf for both of us.',
        ],
        aff: 2,
        next: 'chase',
      },
      track_sniff: {
        text: [
          '@fenna:angry Because then *you* don\'t learn! Pups have to learn!',
          '@you Did you just call me a pup?',
          '@fenna:smug Fenna calls it like Fenna smells it.',
        ],
        aff: 3,
        next: 'chase',
      },
      track_allfours: {
        text: [
          'You crouch next to her, nose an inch from the mud, and inhale deeply. You smell mud. That\'s it. Just mud.',
          'Fenna is shaking with silent laughter beside you, her tail thumping the ground.',
          '@fenna:happy Your nose is broken! All human noses are broken! But — you *tried.* Fenna likes trying.',
        ],
        aff: 5,
        next: 'chase',
      },
      chase: {
        text: [
          'The hunt is chaos. Fenna bounds through the trees with impossible speed. You crash behind her through brambles, over logs, across a stream you fall into completely.',
          'Eventually you collapse in a sunny clearing, soaked and scratched and laughing so hard your ribs hurt. Fenna flops down next to you. The deer is long gone. Neither of you cares.',
          '@fenna:happy Good hunt.',
          '@you We didn\'t catch anything.',
          '@fenna Good hunt. *Fun* hunt. Fenna has not had a fun hunt since... since pack.',
          'Her ears droop for a second. Then she rolls over and puts her head on your stomach like it\'s a pillow, completely unselfconscious.',
        ],
        choices: [
          { text: 'Scratch behind her ears.', go: 'ears', flag: 'fenna_ears' },
          { text: '"Tell me about your old pack."', go: 'pack', flag: 'fenna_pack_talk' },
          { text: 'Just lie there with her and watch the clouds.', go: 'clouds', flag: 'fenna_clouds' },
        ],
      },
      ears: {
        text: [
          'You reach up and scratch gently behind one fluffy ear. Fenna goes completely still.',
          'Then her leg starts kicking. On its own. Thump-thump-thump.',
          '@fenna:blush Th-that is — Fenna is not — *ohhh, right there* — this is very undignified and you will tell NOBODY.',
          'She doesn\'t move away, though. If anything, she presses her head harder into your hand.',
        ],
        aff: 8,
        end: true,
      },
      pack: {
        text: [
          '@fenna:sad Big pack. Twelve wolves. Fenna was the only one who could be human-shaped. They didn\'t like it. Too strange. Too loud. Too *Fenna*.',
          '@fenna:angry The alpha said: be less. Fenna said: no. So.',
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
          '@fenna:happy That one is a rabbit. That one is a deer. That one is a big steak.',
          '@you They\'re all food.',
          '@fenna:smug Clouds are sky food. Everyone knows this.',
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
          { if: 'fenna_stood', text: '@fenna:smug First day, you did not run. You looked at Fenna with your eyes and *stayed.* Fenna wants to know how much not-running is in you.' },
          { if: 'fenna_tracker', text: '@fenna And you read the ground. With looking. So maybe you are a clever wolf. Clever wolves can still be pinned. We will see.' },
          '@you ...How do we figure that out?',
          'She grins. It\'s a lot of teeth.',
          '@fenna:smug We *wrestle.*',
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
          '@fenna:surprised You... *won.* Nobody pins Fenna. Not even the alpha pinned Fenna.',
          'Her tail is wagging so hard it\'s sweeping a clear patch in the leaves.',
          '@fenna:blush ...Again. Do it again sometime.',
        ],
        aff: 12,
        flag: 'fenna_pinned',
        next: 'after',
      },
      tickle: {
        text: [
          'She lunges. Instead of blocking, you go straight for her ribs.',
          'Fenna lets out a shriek that scatters every bird in the forest and collapses into helpless giggles, kicking and squirming.',
          '@fenna:happy CHEATING — that is — *ahahaha* — WOLVES DON\'T — STOP — *don\'t stop*—',
          'By the time you let up, she\'s lying flat on her back in the leaves, gasping and grinning.',
          '@fenna:smug Sneaky. Sneaky pup. Fenna will allow it. Once.',
        ],
        aff: 9,
        flag: 'fenna_tickled',
        next: 'after',
      },
      wrestle_lose: {
        text: [
          'She lunges. You last approximately four seconds before you\'re flat on your back with a werewolf sitting on your chest.',
          '@fenna:happy Fenna wins! Fenna is top wolf!',
          'But she doesn\'t gloat for long. She looks down at you, head tilted.',
          '@fenna ...But you got up every time. Five times. Fenna knocked you down five times and you kept getting up. Stubborn. Stubborn is good. Stubborn is *pack.*',
        ],
        aff: 7,
        flag: 'fenna_stubborn',
        next: 'after',
      },
      after: {
        text: [
          'Later, the two of you sit together against an old oak while the sun goes down. The moon rises, nearly full, and Fenna shivers.',
          { if: 'fenna_pack_talk', text: '@fenna:sad You asked about pack, before. Fenna did not tell all of it. Here is the rest. When the alpha said *be less*, nobody in the pack said anything. Not one wolf. Fenna left in the night, and nobody howled.' },
          '@fenna:sad Moon is almost round. Three more nights. Then Fenna will be... big. Hairy. Hungry. Fenna will go far into the woods so Fenna doesn\'t hurt anybody.',
          '@fenna Alone. Fenna is always alone on the round moon.',
        ],
        choices: [
          { text: '"Then I\'ll come with you. You don\'t have to be alone."', go: 'stay', aff: 8, flag: 'fenna_moon_promise' },
          { text: '"Would you let me brush your fur? When you\'re all wolfy?"', go: 'brush', aff: 6, flag: 'fenna_brush' },
          { text: '"Are you afraid of yourself?"', go: 'afraid', aff: 5, flag: 'fenna_remind' },
        ],
      },
      stay: {
        text: [
          '@fenna:surprised You — no. You would be in danger. Fenna has big teeth on the round moon. *Big* teeth.',
          '@you You\'ve had big teeth this whole time. I\'m still here.',
          'Fenna looks at you for a long, long moment. Her eyes shine in the twilight.',
          '@fenna:blush ...Stupid pup. Brave, stupid pup.',
          'She leans over and presses her forehead to yours, eyes closed. It feels like a promise in a language older than words.',
        ],
        end: true,
      },
      brush: {
        text: [
          'Fenna\'s ears go completely flat and her face turns bright red.',
          '@fenna:blush B-brushing is — in pack, only *mates* groom each other\'s — do you know what you are *saying?*',
          '@you ...Maybe?',
          'She covers her face with both hands. Her tail, however, is wagging uncontrollably.',
          '@fenna:blush ...Fenna will think about it. Fenna is thinking about it *very hard.*',
        ],
        end: true,
      },
      afraid: {
        text: [
          'She\'s quiet for a long time.',
          '@fenna:sad Yes. When Fenna is the big wolf, Fenna forgets things. Forgets names. What if Fenna forgets you?',
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
          '@fenna:angry You... came. Fenna told you not to come. *Stupid.* Stupid, brave...',
          { if: 'fenna_moon_promise', text: '@fenna:sad You *said.* You said you would come. Fenna did not believe it. Nobody ever came on the round moon. Not once. Not in Fenna\'s whole life.' },
          { if: 'fenna_remind', text: '@fenna:sad Fenna is already forgetting. Words are slipping. You said you would remind. *Remind,* then.' },
          'She stalks toward you slowly. A low growl rumbles in her chest — but it isn\'t a threatening sound. Not quite.',
          '@fenna Fenna is not thinking straight. The moon is loud. Everything smells like *you.* Go. Go now, or Fenna won\'t let you go at all.',
        ],
        choices: [
          { text: 'Stay exactly where you are. "I\'m not going anywhere."', go: 'stay' },
          { text: 'Step forward and take her clawed hand in yours.', go: 'hand' },
          { text: 'Say her name, gently, again and again, until her eyes focus on you.', go: 'name', flag: 'fenna_named' },
        ],
      },
      stay: {
        text: [
          '@you I\'m not going anywhere, Fenna.',
          'She stops a breath away from you. Her nose brushes along your jaw, your throat, your collar — and she *shudders.*',
          '@fenna:blush ...Pack. You smell like pack. You smell like *Fenna\'s.*',
        ],
        aff: 8,
        next: 'kiss',
      },
      hand: {
        text: [
          'You reach for her hand. Claws and all. Her breath catches.',
          '@fenna:surprised Careful — sharp —',
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
          '@fenna:sad ...{name}. Fenna remembers. Fenna remembers *you.* Even with the moon this loud.',
        ],
        aff: 10,
        next: 'kiss',
      },
      kiss: {
        text: [
          "Then she kisses you. It's hungry and clumsy, with a little too much teeth, like she's only ever read about kissing and decided to go for it anyway. She tastes like rain and wild honey.",
          "You kiss her back, and a low rumble starts in her chest. You feel it in your own ribs, all the way down to your toes. Her hands fist in your shirt, then slide under it, claws held back with what's clearly enormous effort. She's running hot, as if the moon itself is burning her up from the inside.",
          "She breaks off to bury her nose in the curve of your neck and breathes you in, long and deep, and her whole body shivers against yours.",
          "@fenna:blush Smell changed. You smell like *wanting.* Like Fenna smells.",
          "She pulls back just far enough to look you in the eye. Her pupils are huge and gold.",
          "@fenna Wolves choose once. Only once. Forever. Fenna chooses you. Fenna chose you a long time ago, at the first sniff.",
          { if: 'fenna_sniffed', text: "@fenna:smug You sniffed back. That first day. Nobody ever sniffs back. Fenna knew then. Fenna has just been waiting for you to catch up." },
          "@fenna:sad Do you choose Fenna back?",
        ],
        choices: [
          { text: "\"I choose you, Fenna. Forever.\"", go: "night", aff: 10 },
          { text: "Answer by tilting your head back and baring your throat to her.", go: "mark", aff: 12, flag: 'fenna_mark' },
        ],
      },
      mark: {
        text: [
          "Her eyes go wide. She knows exactly what it means, wolf to wolf: total trust.",
          "For a long moment she just breathes against your skin. Then her lips brush the hollow of your throat, then the side of your neck, slow and reverent, working up to it. When she finally *bites*, it isn't hard enough to break the skin. It's just hard enough to leave a mark, and to make your knees buckle so badly she has to catch you.",
          "She growls, pleased, deep in her chest.",
          "@fenna:smug Mine. *Mine.* Everyone will smell it. And Fenna is yours. Bite back, if you want. Fenna wants you to.",
          "You do, gently, on the warm curve of her shoulder. The sound she makes is not a sound you will ever forget.",
        ],
        next: "night",
      },
      night: {
        text: [
          "She pulls you down into the soft moss of her den beneath the roots. The moonlight pours over you both like water.",
          "She has no patience at all for buttons. Your shirt doesn't survive. She's pressing herself against your bare chest before you can laugh about it, skin to skin, and she is *so warm.* Her tail curls possessively around your leg. She noses down your collarbone, your sternum, your ribs, learning you by scent, licking and nipping wherever you gasp. And she finds every place that makes you gasp.",
          { if: 'fenna_tickled', text: "When her nose finds your ribs, she pauses, and grins against your skin. \"Revenge,\" she breathes, \"for the tickling,\" and then she does not tickle you at all, and that is somehow much worse." },
          "She's wild, but she listens, and her ears flick toward every sound you make. When you tangle your fingers in her hair and pull, just a little, her eyes roll back and she *whines.* When she pins your wrists to the moss, she checks your face, just once, before she leans in again.",
          { if: 'fenna_pinned', text: "@fenna:smug Fenna's turn to pin. You had yours. Fair is fair." },
          "@fenna Tell Fenna if it's too much.",
          "@you It's not too much.",
          "@fenna:blush *Good.*",
          "Somewhere out in the forest, the wolves begin to howl. Fenna throws back her head and howls with them, and then she's on you again, and the rest of the night is heat and moonlight and laughter and teeth...",
          "...",
          "Much later, you lie tangled in furs and limbs. Her head rests on your chest, and her breathing slows to a contented rumble.",
          "@fenna:happy Pack. *Mine.* Sleep now. Fenna keeps watch.",
          "She's snoring within thirty seconds.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake to sunlight through the oak roots, a heavy weight across your chest, and something warm and wet licking your cheek.",
          "@fenna:happy Morning. You sleep like a dead thing. Fenna checked twice that you were breathing.",
          {
            if: 'fenna_mark',
            text: [
              "She's human-shaped again, sprawled half on top of you in a nest of furs, her hair a disaster of leaves. There's a clear bite-mark on her shoulder, and when you touch your own neck you find its twin. She sees you notice and grins with every one of her teeth.",
              "@fenna:smug Everyone in the forest knows now. A squirrel saw. Squirrels are terrible gossips.",
            ],
            else: [
              "She's human-shaped again, sprawled half on top of you in a nest of furs, her hair a disaster of leaves. What's left of your shirt is draped over a root like a defeated flag. She sees you notice and grins with every one of her teeth.",
              "@fenna:smug Shirt is dead. Fenna is sorry. Fenna is *not* sorry. A squirrel saw everything. Squirrels are terrible gossips.",
            ],
          },
          { if: 'fenna_named', text: "@fenna:sad Fenna remembers it all. Every bit. Even the loud moon parts. Because you kept saying the name. Fenna heard it the whole night, like a rope to hold." },
          "Then her ears droop a little.",
          "@fenna:sad Last night. Fenna was very... *loud.* Very wolf. You are not scared of Fenna now? Not sorry?",
        ],
        choices: [
          { text: "\"Not sorry. Not even a little. Come here.\"", go: "notsorry", aff: 6 },
          { text: "\"Scared? I'm planning to do it again tonight.\"", go: "again", aff: 6 },
          { text: "Scratch behind her ears until her leg starts kicking.", go: "ears", aff: 5 },
        ],
      },
      notsorry: {
        text: [
          "You pull her down and kiss her slowly. She melts against you with a happy whine, tail sweeping the furs.",
          "@fenna:happy Good. Because Fenna is keeping you. Fenna decided. It is very official in wolf.",
          "She makes you breakfast: a whole raw rabbit, presented proudly on a leaf. You compromise and build a fire. She watches you cook it like you're performing powerful magic.",
        ],
        end: true,
      },
      again: {
        text: [
          "Her ears shoot straight up. Her tail starts thumping the ground so hard the roots shake.",
          "@fenna:surprised *Tonight?* The moon will not be round tonight.",
          "@you I don't think we need the moon.",
          "She considers this with great seriousness. Then she tackles you back into the furs, and you're both very late leaving the den.",
        ],
        end: true,
      },
      ears: {
        text: [
          "You reach up and scratch behind her ear. Her eyes slide shut. Her leg starts kicking. Thump. Thump. Thump.",
          { if: 'fenna_ears', text: "@fenna:blush The ear thing. *Again.* You remembered the ear thing from the clearing. You told nobody, yes? You promised. Fenna is holding you to it forever." },
          "@fenna:blush Not fair. Not fair. Fenna was being *serious* — oh. Oh, right there. Fenna forgives you. Fenna forgives everything forever.",
          "She falls back asleep on your chest. You don't have the heart to move for another hour.",
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
          { if: 'fenna_clouds', text: '@fenna:smug Also stars are sky food. Little ones. Like seeds. Fenna is going to catch one in her mouth tonight. You will see.' },
          '@fenna:blush ...But Fenna likes stars. Fenna will watch them with you anyway.',
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'The first star falls, a long streak of silver right across the full moon. Then another. Then a hundred, a thousand.',
          'Fenna sits up and howls at them — a long, happy, wild sound. Down in the forest, a wolf pack answers. Her old pack, maybe. Or a new one.',
          { if: 'fenna_mark', text: 'The answering howls are getting closer. Fenna\'s ears swivel toward them. Her nose works. Her hand finds the mark on your neck, and holds it, as though she\'s making sure it\'s still there.' },
        ],
        choices: [
          { text: 'Kiss her under the falling stars.', go: 'kiss' },
          { text: 'Stand up beside her as the old pack comes out of the trees.', if: ['fenna_mark', { any: ['fenna_pinned', 'fenna_stood', 'fenna_stubborn'] }], go: 'alpha' },
          { text: '"Come down the hill with me. Let them all meet the real you."', if: [{ any: ['fenna_tracker', 'fenna_pack_talk', 'fenna_remind'] }, { any: ['fenna_named', 'fenna_moon_promise', 'fenna_sniffed'] }], go: 'ranger' },
        ],
      },
      kiss: {
        text: [
          'Then she turns and kisses you hard under the falling stars.',
          '@fenna:happy Pack of two. Forever.',
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
      alpha: {
        text: [
          'You stand. Fenna stands with you. Out of the dark between the trees come the wolves: eleven of them, grey and brown and silver, eyes shining in the starlight. At their head is a huge, grizzled male with a notch bitten out of one ear.',
          '@fenna:angry *Ashmuzzle.* The alpha. Fenna bit that ear. Fenna would bite it again.',
          'The old alpha growls, low. Every wolf behind him flattens its ears. Fenna doesn\'t. She steps forward, shoulders squared, the starlight falling all around her.',
          '@fenna Fenna went away. Fenna came back with a mate. A *human* mate, who does not run, and gets up every time, and *chose* Fenna. You said be less. Fenna got *more.*',
          'The alpha looks at you. You look back. You don\'t flinch. You think about the first day in the forest and the five times you got up, and you hold his gaze until the starfall is the only sound.',
          'Then a young she-wolf at the back of the pack sits down. And howls. Not at the alpha. At Fenna.',
          'One by one, the others join her. The old alpha\'s ears go back. He looks at Fenna for a long moment. Then he lowers his head and steps aside.',
          '@fenna:surprised ...Oh.',
          '@fenna:happy *Oh.* Pup. Pup, they are *choosing.*',
        ],
        next: 'alpha_epilogue',
      },
      alpha_epilogue: {
        text: [
          '*Some time later...*',
          'Fenna Moonfang is the first alpha of the Whisperwood pack who walks on two legs, and she has one law, which she carved into the big oak with her own claws: *NOBODY HAS TO BE LESS.*',
          'Underneath, slightly smaller: *ALSO NO EATING THE MATE.* That one is for you.',
          'The pack takes some getting used to. Pack meetings are held in your kitchen. Eleven wolves fit in it, technically, if three of them sit on the table. They track mud everywhere. They steal your boots. The young she-wolf who howled first follows you around like a shadow and brings you dead rabbits on your pillow, which Fenna says is an enormous honor and you should not, under any circumstances, put them in the bin.',
          'You learn to hunt, eventually. You will never be a good wolf. But you read the ground, and you never give up, and the pack starts calling you something in wolf that Fenna says translates roughly as *the one who keeps getting up.* It is the highest compliment she knows.',
          'On full moons, Fenna runs at the head of the pack, huge and golden, and you run at her side, and the whole forest knows to get out of the way. Old Ashmuzzle runs at the back, grumbling, and is secretly much happier.',
          'Sometimes, very late, after the pack has gone to sleep in a heap by the fire, Fenna will put her head in your lap and sigh and say, *pack of thirteen.* And then, softer, so only you hear: *but pack of two first. Always.*',
        ],
        ending: 'fenna_alpha',
      },
      ranger: {
        text: [
          'Fenna looks down the hill at the crowd. The lanterns. The noise. The hundred different smells. Her ears go flat.',
          '@fenna:sad They will stare. They always stare. Too wild. Too loud. Too *Fenna.*',
          '@you Let them. You\'ve never been too much for me. Maybe you just haven\'t been too much for enough people yet.',
          'She stares at you. Then she laughs, her loud barking laugh, and grabs your hand and runs down the hill so fast your feet barely touch it.',
          'The crowd parts in alarm. Then, right in the middle of the festival, a woman starts shouting: her dog has bolted, frightened by the starfall, gone into the dark streets. Fenna\'s head comes up. Her nose works once, twice.',
          '@fenna:smug *That way.* Come, pup. Use your book-eyes. Fenna smells, you look. Pack hunt.',
          'You find the dog in eleven minutes, wedged under a cart three streets over, by the oldest method in the world: she follows the scent and you follow the tracks, and you meet in the middle. When you bring it back, the whole square cheers. Fenna stands there in her furs and bare feet, holding a very grateful terrier, with a look on her face like she\'s never heard that sound pointed at her before.',
          '@fenna:blush ...They are not saying "too wild."',
          '@you No. They\'re saying "thank you."',
        ],
        next: 'ranger_epilogue',
      },
      ranger_epilogue: {
        text: [
          '*Some time later...*',
          'The Adventurers\' Guild has never had a werewolf on the books before. Nobody can find the right form. Fenna fills in the form herself, in enormous capitals, and under *SPECIAL SKILLS* she writes *NOSE* and underlines it four times. Then she bites the corner of the paper. The guildmaster files it anyway.',
          'Ranger Moonfang wears her brass badge pinned to her fur vest, upside down, and refuses to have it fixed. She will not wear shoes. She will not use a chair. She will not "please lower your voice in the guild hall." She is also, inside of a month, the best tracker in the kingdom, because she has a partner who reads the ground while she reads the wind, and between the two of you nothing that walks, crawls or flies can stay lost for long.',
          'Lost sheep. Lost children\'s cats. A lost duke, once, who had been hiding from his wedding and was very sorry to be found. You take the jobs together. She sniffs; you look. You meet in the middle, every time.',
          'The town gets used to her. Then it gets fond of her. The butcher saves her bones. The baker shouts "*Hel-lo, Fenna!*" across the street and she shouts "*HEL-LO!*" back, enormously pleased. Somewhere along the way, greeting a friend with a quick sniff of the collar becomes a fashion among the young people of Clichéton, and nobody can ever quite remember who started it.',
          'She was never less. She never had to be. The town just had to grow big enough to fit her.',
          'And every evening, when the jobs are done, the two of you walk home to the edge of Whisperwood together, and she bumps her hip against yours, hard, and nearly knocks you into a hedge. Wolf for *good hunt.* Wolf for *home.*',
        ],
        ending: 'fenna_ranger',
      },
    },
  },
});
