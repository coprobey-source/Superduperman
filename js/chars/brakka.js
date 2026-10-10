FL.addCharacter({
  id: 'brakka',
  name: 'Brakka Ironjaw',
  short: 'Brakka',
  trope: 'Buff Orc Warrior Woman',
  color: '#6fb35a',
  favStat: 'might',
  endingTitle: 'Warrior\'s Bond',
  endings: {
    brakka_warchief: 'Warchief of the Ironjaw',
    brakka_gentle: 'The Gentlest Orc in the World',
  },
  teaser: 'A seven-foot green woman with tusks is bench-pressing a horse. The horse seems fine with it.',
  blurb: 'Undefeated arena champion and exiled warchief\'s daughter. Loud, proud, absurdly strong, and blunt to a fault. She is looking for a mate worthy of her clan\'s traditions — which mostly involve combat, feasting, and more combat. Under the muscle is a surprisingly soft heart.',
  schedule: ['arena', 'arena', 'tavern'],
  gifts: { love: ['axe'], like: ['steak', 'ale', 'rum', 'mead'], hate: ['tea', 'perfume'] },
  giftLines: {
    love: ['She lifts the axe overhead with one hand and lets out a roar that shakes the dust from the rafters.', '@brakka:happy HA! A REAL WEAPON! Balanced! Heavy! *Beautiful!* You give Brakka axe? In clan, this is very serious gift. Very, very serious. You know this?', 'She is grinning so wide her tusks gleam.'],
    like: '@brakka:happy Ha! Good gift! Strong gift! Brakka approves!',
    neutral: '@brakka Hm. Small thing. Brakka will keep it. Maybe use it as toothpick.',
    hate: ['She holds it between two fingers like a dead mouse.', '@brakka:angry Leaf water? Flower smell? Brakka is WARRIOR. Brakka is not *dainty.* ...Brakka will give this to Gruk. Gruk is dainty.'],
    special: {
      axe: ['She takes the great axe in both hands, very slowly, the way other people hold a newborn.', '@brakka:surprised Double head. Good steel. Somebody *sharpened* this. For Brakka.', '@brakka:blush In clan, you give axe to warrior when you want warrior to come home safe. Brakka will come home safe. Brakka will come home to *you.*', 'She roars. A window breaks somewhere. She does not apologize.'],
      fork: ['She holds the ordinary fork up between her thumb and finger. It looks like a sewing needle.', '@brakka:happy TINY FORK! For tiny mouth! Ha!', 'She tries to eat with it, very seriously, frowning in concentration. The fork bends in half on the first bite.', '@brakka:sad ...Fork was weak. Brakka will bury fork with honors.'],
      perfume: ['She sniffs the crystal vial once. Her eyes water. She sneezes so hard she sits down.', '@brakka:angry FLOWERS. Flowers attacked Brakka. In the *nose.*', '@brakka ...Gruk will love it. Gruk smells like a hedge already.'],
      plushie: ['She stares at the stuffed bunny. The bunny stares back with its button eyes.', '@brakka:angry Brakka is WARRIOR. Brakka does not want soft baby rabbit.', 'She tucks it inside her breastplate, where it fits snugly, and pats it twice.', '@brakka:blush ...Rabbit is called Stabby\'s Brother. Rabbit will guard Stabby. Say nothing.'],
      dagger: ['She holds the silver dagger up to the light, squinting.', '@brakka:smug Ha! Tiny axe! For tiny human! Brakka will teach you to throw it. You will miss! But you will miss *with style.*'],
      salts: ['She opens the little jar, sniffs it, and before you can stop her, eats a whole handful.', '@brakka:surprised ...Crunchy. Salty. Purple. Is this human candy? Humans have *strange* candy.', '@you They\'re bath salts.', '@brakka:blush ...Brakka knew this. Brakka was *testing* them. For poison. You are welcome.'],
    },
    repeat: '@brakka:smug Same gift again? Ha! You know what Brakka likes! Brakka likes predictable enemy, and predictable mate. ...But next time, surprise Brakka. Maybe with bigger axe.',
  },
  talk: [
    ['@brakka:happy TINY HUMAN! You come to arena again! Good! You want to arm-wrestle? You will lose! But it will build character!'],
    ['@brakka In Ironjaw clan, we greet friends by headbutting. Brakka will not headbutt you. You would die. Brakka will *gently* headbutt you.', 'She gently headbutts you. You see stars.'],
    ['@brakka:smug Humans eat with tiny forks. Tiny little forks for tiny little mouths. It is very cute. Brakka eats with hands. Or with axe.'],
    ['@brakka Brakka has won one hundred and twelve arena fights. Brakka has lost zero. Brakka is bored. Brakka needs a *challenge.*', 'She looks at you speculatively.', '@brakka:smug ...In a few years, maybe.'],
    ['@brakka:angry Brakka was exiled from clan for refusing to marry Chieftain\'s son. He was weak. Cried when Brakka sat on him. Brakka only sat on him a *little.*'],
    ['She\'s gently tending a tiny potted cactus on the arena wall.', '@brakka:blush This is Stabby. Brakka found him in desert. He is strong like orc. Don\'t tell anyone Brakka sings to him.'],
    ['@brakka:happy This is Gruk! Gruk is Brakka\'s sparring partner. Gruk is dainty. Gruk does embroidery.', 'A huge, scarred orc in the corner holds up a cushion with the word *CRUSH* stitched on it in lovely pink thread. He waves shyly.', '@brakka:smug Gruk made it for Brakka. Brakka uses it for crushing. Everybody wins.'],
    ['@brakka:sad Brakka got letter. From clan. Brakka cannot read human letters, and clan cannot write. So letter is just drawing.', 'She shows you. It is a drawing of a very angry orc with a beard, a very small axe, and a door.', '@brakka:sad It means "Father is still angry. Come home or don\'t. Bring axe." ...Father always says bring axe.'],
    ['@brakka:happy Brakka\'s favorite human word is "snack." It is a thing *and* it is a thing you *do.* You snack a snack! Humans are very clever with words!', '@brakka:smug Brakka has used it in every sentence today. Arena master asked Brakka to stop. Brakka snacked him.'],
    ['@brakka:blush When Brakka was small — yes, Brakka was small once, for one year — Mother sang Brakka the war-lullaby.', 'She hums it. It is low and rumbling and surprisingly sweet. The words, she explains, are about crushing your enemies and then having a nice nap.', '@brakka:happy Brakka sings it to Stabby. Stabby sleeps very well.'],
    { if: 'brakka_stopped', lines: ['@brakka:happy Brakka tells everyone about the heartbeat. The one where tiny human stopped Brakka. In the ring. In *front* of crowd.', '@brakka:smug Now the bookies give odds on you. Bad odds. Very bad odds. But they *give* them. Nobody ever gave odds against Brakka before.'] },
    { if: 'brakka_arms', lines: ['@brakka Brakka did extra arm training this morning. Two hundred lifts. For no reason.', 'She flexes, very casually, while looking somewhere else entirely.', '@brakka:blush ...You are looking. Good. Brakka was not doing it for you. Keep looking.'] },
    { if: 'brakka_lifted', lines: ['@brakka:smug Brakka told Father, in drawing-letter, that tiny human lifted Brakka. Off ground. Three whole seconds.', '@brakka:angry Father drew back a picture of a liar with his pants on fire.', '@brakka:happy So now Brakka will draw a picture of you lifting Brakka, and *Brakka\'s* pants will be *fine.*'] },
    { if: { stage: 3 }, lines: ['She grabs your wrist without warning and turns it over. The courting token is there, braided and knotted three times.', '@brakka:happy Still there. Good.', '@brakka:blush Brakka checks every day. Every day: still there. Brakka is not worried. Brakka is *checking.* Warriors check things.'] },
  ],
  afterTalk: [
    ["@brakka:smug New bed is ready! Iron frame! Brakka tested it by jumping on it. Very sturdy. Now it needs *real* test. Tonight. Ha!"],
    ["She lifts you up under the arms like a child, kisses you soundly, and puts you down again.", "@brakka:happy That is how orcs say hello to mate. Get used to it."],
    ["@brakka:happy Gruk asked why Brakka is smiling during fights. Brakka said, \"Thinking about mate.\" Gruk lost fight because he was laughing. Brakka still won. Good day."],
    ["@brakka:blush Brakka sang to Stabby last night. Love song. About you. Stabby bloomed. First time ever. Stabby knows."],
    ["@brakka:sad The iron bed broke.", "@brakka:angry It was not Brakka's fault. It was *iron's* fault. Iron is weak. Brakka has asked the blacksmith for a bed made out of a *mountain.* Blacksmith is thinking about it. Blacksmith is crying a little."],
    { if: 'brakka_threshold', lines: ["@brakka:smug Brakka told whole arena: Brakka is married. Arena asked, \"When?\" Brakka said, \"When mate carried Brakka over the door.\"", "@brakka:happy Arena did not believe. So Brakka picked up arena master and carried *him* over a door, to show what it means. He understands now. He was very quiet afterwards."] },
    { if: 'brakka_marks', lines: ["@brakka:sad The scratches on Brakka's back are healed. Brakka was sad about this.", "@brakka:smug So Gruk painted them back on. Every morning. With red paint. Gruk is very good at painting. Gruk does them *better* than you. You must practice."] },
    { if: 'brakka_both', lines: ["She holds up her wrist. Your handkerchief is still tied there, filthy, frayed, knotted three times.", "@brakka:blush Brakka will not wash it. Washing is how things get lost. Brakka is not losing it. Brakka is not losing *you.*"] },
    { if: 'brakka_date_harbor', lines: ["@brakka:happy Brakka has been practicing floating! In the horse trough behind arena!", "@brakka:sad Horse was not happy. Water is mostly gone now. But Brakka floated for one heartbeat. One heartbeat is how everything starts. You taught Brakka that."] },
  ],
  dateFav: 'picnic',
  dates: {
    dinner: {
      start: {
        text: [
          'Brakka is waiting in the corner booth of the Tipsy Wyvern when you arrive. She has dressed up. She is wearing a dress. It is enormous, lilac, and has clearly been made by taking apart two other dresses and a sail.',
          '@brakka:blush Gruk made it. For *date.* Is it — does Brakka look —',
          'She takes a deep breath, to say something brave. Several seams give way with a noise like a crossbow.',
          '@brakka:sad ...Gruk will fix it.',
          'The waiter brings candles, a white tablecloth, and a fork, a knife and a spoon laid out in a neat row. Brakka stares at the cutlery the way she stares at opponents.',
          { if: 'brakka_drink', text: '@brakka:smug You said, the first day, you wanted to buy Brakka a drink. Brakka remembers. Brakka has ordered a barrel. You will have a *cup.*' },
        ],
        choices: [
          { text: 'Push the cutlery aside and tear into the bread with your hands. Together.', go: 'hands', aff: 5 },
          { text: 'Teach her to hold the fork "properly."', go: 'fork' },
          { text: '"You look beautiful, Brakka. Even more without the sleeve."', go: 'beautiful', aff: 4 },
        ],
      },
      hands: {
        text: [
          'You sweep the fork, knife and spoon into the bread basket and tear the loaf down the middle with both hands. Brakka gapes at you.',
          '@brakka:surprised Tiny human eats like *orc!*',
          'She grins with every tusk and takes the other half. When the roast arrives she carves it with her bare hands and gives you the best piece first, which, you will later learn, is the second most serious thing an Ironjaw can do at a table.',
          'The candles get knocked over twice. Nobody cares. By the end of the night the tablecloth is ruined and both of you are wearing gravy and she is laughing so hard the booth creaks.',
          { if: { stage: 4 }, text: '@brakka:blush Brakka likes candles. Brakka likes *you* in candles more. Come home. Brakka will feed you dessert. With hands.' },
        ],
        next: 'close',
      },
      fork: {
        text: [
          'You show her: index finger on the back, tines down, a delicate little stab. She copies you with total concentration, tongue poking out between her tusks.',
          'The fork bends. You give her yours. It bends. The waiter brings six more. They bend in sequence, faster each time, until there is a small silver sculpture on the tablecloth.',
          '@brakka:angry Human forks are *cowards.*',
          'She eats the rest of dinner with the gravy boat. It is the most elegant thing you have ever seen.',
        ],
        next: 'close',
      },
      beautiful: {
        text: [
          'She goes very still. Then a deep, dark green flush climbs up her neck to the tips of her ears.',
          '@brakka:blush ...Nobody says beautiful to Brakka. They say *big.* They say *strong.* They say "please put down the horse."',
          'She looks down at the torn sleeve, then rips the other one off too, to match, and tosses both over her shoulder.',
          '@brakka:smug Now Brakka is *twice* beautiful. Ha!',
        ],
        next: 'close',
      },
      close: {
        text: [
          'When you leave, she carries you home on her shoulders, because "date is not over until Brakka says," and Brakka does not say for a long time.',
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          'The Moonlit Gardens are full of delicate things. Brakka knows this. Brakka is walking through them on the very tips of her toes, arms clamped to her sides, holding her breath, like a mountain trying to sneak.',
          '@brakka:sad Everything here is small. Small flowers. Small fountain. Small bench. If Brakka sits, bench will die. If Brakka sneezes, *garden* will die.',
          'A rose brushes her elbow. She freezes. The rose is fine. She lets out a long breath of relief and very carefully steps around it.',
          'Then, at the far end of the garden, she sees something and gasps. There is a little bed of desert plants in a gravel corner. Cacti. One of them, small and lopsided, is leaning against a rock all by itself.',
          '@brakka:surprised ...Stabby has a *cousin.*',
        ],
        choices: [
          { text: 'Help her find the gardener and ask, very politely, for a cutting.', go: 'cutting', aff: 5 },
          { text: '"Just take it. Nobody will notice."', go: 'steal' },
        ],
      },
      cutting: {
        text: [
          'The gardener, an elderly gnome in a straw hat, comes up to roughly Brakka\'s knee. He looks up at her for a long, long time.',
          '@brakka:blush Please, small gardener. May Brakka have a piece of the lonely spiky one? Brakka will love it. Brakka will sing.',
          'The gnome looks at her. He looks at the cactus. Then he digs out the whole lopsided little thing, pot and all, and puts it in her enormous cupped hands.',
          '@brakka:happy He is called *Pokey.* He will live with Stabby. They will be strong together.',
          'She carries Pokey the whole rest of the evening in both hands, held out in front of her like a lantern, and doesn\'t trip over a single rose.',
        ],
        next: 'close',
      },
      steal: {
        text: [
          '@brakka:angry *Take?* Brakka does not *take!* Brakka is warrior, not raider! Warriors *ask!* Or warriors fight for it with honor!',
          'She stomps off to find the gardener, and the stomping wipes out a row of tulips. She stops. She looks at the tulips. She looks at you.',
          '@brakka:sad ...This is your fault.',
          'You both spend the next hour replanting tulips by lantern light, her huge fingers patting the soil down so gently you can barely see them move. The gardener gives her the cactus anyway. She names it Pokey, and refuses to share it with you for a week.',
        ],
        next: 'close',
      },
      close: {
        text: [
          'At the gate she stops and looks back at the garden, all the small fragile things glowing under the moon, untouched.',
          '@brakka:happy Brakka broke nothing. Except tulips. Tulips do not count. Tulips were *your* fault.',
          { if: { stage: 4 }, text: 'She bends down — a long way down — and kisses you, very carefully, so as not to crush Pokey between you.' },
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          'At Saltbreeze Harbor, Brakka buys every piece of fried fish the stall has, eats most of them, and then challenges an entire ship\'s crew to a tug-of-war. She wins. The ship comes several feet up the beach. The captain is not pleased.',
          'Then you walk out to the end of the pier to watch the sun go down, and she gets quieter and quieter, until she stops a good ten feet from the edge.',
          '@brakka:sad Brakka will stay here. Here is good.',
          '@you What\'s wrong?',
          '@brakka:blush ...Orcs do not swim. Orcs are *dense.* Good bones. Heavy bones. Orc goes in water, orc goes to the bottom and becomes a sad rock.',
          '@brakka:sad Brakka has never told anyone this. Brakka is not afraid of anything. Except deep water. And Father. And the bottom of the sea.',
        ],
        choices: [
          { text: 'Climb down to the shallow beach and offer to teach her to float.', go: 'float', aff: 6 },
          { text: 'Sit down right where she is and watch the sunset from ten feet back.', go: 'sit', aff: 4 },
        ],
      },
      float: {
        text: [
          'The water by the beach is waist-deep on you, and barely past her knees. She wades in one terrified step at a time, gripping your hand so hard you lose the feeling in it.',
          '@you Lie back. I\'ve got you. I promise.',
          '@brakka:surprised You cannot hold Brakka! Brakka is *very heavy!*',
          'She lies back anyway. She sinks. You heave. She sinks less. For one heartbeat, with your arms under her shoulders and the sunset blazing gold across the water, Brakka Ironjaw floats.',
          '@brakka:happy BRAKKA IS BOAT! BRAKKA IS A *BOAT!*',
          'Then she sinks again and comes up spluttering and laughing and grabs you, and you both go under, and when you come up she is still laughing.',
          { if: 'brakka_stopped', text: '@brakka:blush One heartbeat. Like in the ring. Everything good with you starts with one heartbeat.' },
        ],
        next: 'close',
      },
      sit: {
        text: [
          'You sit down cross-legged on the boards, ten feet from the edge. After a moment, so does she, with a creak that makes a nearby gull reconsider its life.',
          '@brakka:surprised You do not laugh? About sad rock?',
          '@you Everybody\'s afraid of something.',
          'She thinks about this for a while, watching the sun sink into the water.',
          '@brakka:blush Brakka thought being brave meant not being afraid. But you got up nine times, in the arena, and you were afraid every time. Brakka could tell. Your knees were shaking.',
          '@brakka:happy Maybe brave is sitting ten feet back, together.',
        ],
        next: 'close',
      },
      close: {
        text: [
          'By the time you walk back along the pier the sky is purple and she is still dripping, or still smiling, or both.',
          '@brakka:smug Do not tell arena about sad rock. If arena asks, Brakka wrestled a *shark.*',
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          'You suggested a picnic in Whisperwood. Brakka has arrived with a picnic in the Ironjaw style: an entire roast boar over one shoulder, a barrel of ale under the other arm, and a spear.',
          '@brakka:happy PICNIC! Brakka loves picnic! First we hunt. Then we eat. Then we hunt *again.*',
          '@you I was thinking more... a blanket. In the sun. Sandwiches.',
          '@brakka:surprised ...Sandwich does not need to be *hunted?*',
          'She sets down the boar with visible disappointment and lets you spread the blanket. It is not big enough for her. She lies on it anyway, with her legs out on the grass, and almost immediately a rabbit hops out of the bushes and sits on her chest.',
          '@brakka:blush ...Do not move. Rabbit has chosen Brakka.',
        ],
        choices: [
          { text: 'Lie down next to her very quietly and let more animals come.', go: 'animals', aff: 5 },
          { text: 'Arm-wrestle her for the last piece of boar. [Might check 3]', check: { stat: 'might', dc: 3 }, pass: 'wrestle_win', fail: 'wrestle_lose' },
        ],
      },
      animals: {
        text: [
          'You lie down beside her and keep perfectly still. The rabbit is joined by a second rabbit. Then a squirrel. Then a fat bird that sits on her tusk. Then, after a long while, a young deer that comes and lies down against her leg as if she were a warm green hill.',
          'Brakka does not move. She barely breathes. Her eyes are shining.',
          '@brakka:sad Animals always run from Brakka. Everything always runs from Brakka.',
          '@brakka:happy ...But not when Brakka is lying down next to *you.* You make Brakka quiet. Nobody makes Brakka quiet.',
        ],
        next: 'close',
      },
      wrestle_win: {
        text: [
          'You plant your elbows on a stump. She grins and takes your hand. It is like gripping a tree.',
          'It takes a full minute. Your arm burns. Her eyebrows rise. Then, with a heave that pulls something in your shoulder, you push her knuckles all the way down to the wood.',
          'Brakka stares at the stump.',
          '@brakka:surprised ...Brakka *let* you win.',
          '@you Did you?',
          '@brakka:happy NO! HA! You won fair! Tiny human is getting *dangerous!* Take boar! Take ALL the boar!',
        ],
        aff: 5,
        next: 'close',
      },
      wrestle_lose: {
        text: [
          'You plant your elbows on a stump. She grins and takes your hand. It is like gripping a tree. A tree that is also a landslide.',
          'Your knuckles hit the wood in less than a second. She did not appear to move.',
          '@brakka:smug Ha! Good effort! Effort of a *mouse!*',
          'She tears the last piece of boar in half and gives you the bigger part anyway.',
          '@brakka:blush Winner shares. That is Ironjaw rule. Brakka just made it up. It is still a rule.',
        ],
        next: 'close',
      },
      close: {
        text: [
          'The sun goes down through the trees. She falls asleep on the too-small blanket with her arm curled around you and a rabbit in her hair, snoring like distant thunder.',
          { if: { stage: 4 }, text: 'When she wakes, she mumbles, "Mate," into your shoulder, and goes straight back to sleep. You don\'t move for an hour. Neither does the rabbit.' },
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'The arena crowd is roaring. Down on the sands, a gladiator in heavy armor charges at his opponent with a war cry —',
          '— and his opponent, a towering green-skinned orc woman with a braided mohawk and tusks, catches him by the helmet with one hand and lifts him clean off the ground.',
          '@brakka:smug HA! Too slow! Like snail! Like snail in mud!',
          'She tosses him gently into a pile of hay. The crowd goes wild. She flexes. They go wilder.',
          'Then she spots you at the edge of the training yard and points.',
          '@brakka YOU. Tiny human. You look at Brakka like you want to fight. You want to fight?',
        ],
        aff: 10,
        choices: [
          { text: '"Absolutely." Step into the ring. [Might check 2]', check: { stat: 'might', dc: 2 }, pass: 'fight_win', fail: 'fight_lose' },
          { text: '"I\'d rather buy you a drink."', go: 'drink', flag: 'brakka_drink' },
          { text: '"I was just admiring your arms."', go: 'arms', flag: 'brakka_arms' },
        ],
      },
      fight_win: {
        text: [
          'You step into the ring. She grins. She charges. You don\'t win — no one could win — but you sidestep her first rush, duck the second, and on the third you actually manage to plant your feet and *stop* her, if only for a second.',
          'The crowd goes silent. Brakka blinks down at you.',
          '@brakka:surprised ...You *stopped* Brakka. For one heartbeat. Nobody stops Brakka.',
          'Then she picks you up and spins you around over her head while the crowd screams.',
          '@brakka:happy TINY HUMAN IS STRONG! BRAKKA LIKES TINY HUMAN!',
        ],
        aff: 8,
        flag: 'brakka_stopped',
        next: 'name',
      },
      fight_lose: {
        text: [
          'You step into the ring. She grins. She charges. Then you are lying on your back in the sand looking at the sky, and you aren\'t entirely sure how you got there.',
          'Her huge face appears above you, upside down.',
          '@brakka:surprised You okay? You fall very good. Very dramatic. Crowd loves it.',
          'She hauls you to your feet with one hand and claps you on the back so hard you nearly fall over again.',
          '@brakka:happy You are weak. But you are brave! Brave is first step! Strong comes later!',
        ],
        aff: 4,
        next: 'name',
      },
      drink: {
        text: [
          'She stares at you. Then she bursts out laughing — a huge booming laugh that echoes off the arena walls.',
          '@brakka:happy HA! Tiny human wants to drink with Brakka? Brakka drinks a *barrel.* You will drink a *cup.* And then you will fall over!',
          '@brakka:smug ...Brakka accepts.',
        ],
        aff: 5,
        next: 'name',
      },
      arms: {
        text: [
          'She looks down at her arms — each one roughly the size of your torso — and then back at you. Her dark green cheeks go even darker.',
          '@brakka:blush ...They are good arms. Brakka works very hard on arms.',
          '@brakka Most humans run away screaming. You *admire.* Hm. Brakka will think about this.',
        ],
        aff: 6,
        next: 'name',
      },
      name: {
        text: [
          '@brakka:smug Brakka Ironjaw! Daughter of Grommash Ironjaw! Champion of the Arena! Breaker of a hundred and twelve shields! What is your name, tiny human?',
          '@you {name}.',
          '@brakka:happy {name}! Good strong name! Brakka will shout it in battle!',
          'She thumps her fist against her chest, then thumps it against yours. You stagger back two feet.',
          '@brakka Come back to arena. Brakka will make you strong. Then maybe you will be worthy of a *real* fight.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Brakka is waiting for you at the arena gate with a log over each shoulder.',
          '@brakka:happy TODAY, Brakka trains you! Orc way! Very traditional! Very effective! Usually nobody dies!',
          '@you Usually?',
          '@brakka:smug *Usually.*',
          'The orc way turns out to involve running up the arena steps carrying a log, wrestling a goat (the goat wins), and punching a boulder until either your fist or the boulder gives up. By sunset you are soaked in sweat and covered in bruises.',
          { if: 'brakka_arms', text: '@brakka:blush You wanted good arms like Brakka. This is how. Many boulders. Many years. You will get there. Brakka will wait.' },
          '@brakka Last test! Lift Brakka!',
          '@you ...Lift *you?*',
          '@brakka Orc tradition. A warrior must be able to carry their companion from the battlefield. Lift Brakka!',
        ],
        choices: [
          { text: 'Try with everything you have. [Might check 3]', check: { stat: 'might', dc: 3 }, pass: 'lift_win', fail: 'lift_fail' },
          { text: '"How about you lift *me* instead?"', go: 'lift_me', aff: 6 },
        ],
      },
      lift_win: {
        text: [
          'You crouch. You brace. You heave — and, impossibly, slowly, Brakka\'s feet leave the ground. Barely. An inch. For three whole seconds.',
          'When you put her down, she is staring at you with her mouth open.',
          '@brakka:surprised You... lifted Brakka. Nobody lifts Brakka. Even Father could not lift Brakka after Brakka was twelve.',
          'Then she hugs you so hard your spine pops in four places.',
          '@brakka:happy WE CELEBRATE! FEAST! MEAT! TONIGHT!',
        ],
        aff: 10,
        flag: 'brakka_lifted',
        next: 'feast',
      },
      lift_fail: {
        text: [
          'You crouch. You brace. You heave. Nothing happens. You heave again. Something in your back makes a noise.',
          '@brakka:happy Ha! Good try! You are like ant trying to lift mountain! Very brave ant!',
          'She picks *you* up instead, tucks you under her arm like a sack of potatoes, and carries you off the field.',
          '@brakka:smug Now we feast!',
        ],
        aff: 5,
        next: 'feast',
      },
      lift_me: {
        text: [
          'She grins, scoops you up, and swings you over her shoulders like a cape. Then she runs a victory lap of the arena while you cling to her mohawk and the crowd cheers.',
          '@brakka:happy Ha! You are light! Like baby goat! Brakka could carry you all day!',
          '@brakka:blush ...Brakka *would* carry you all day.',
          'She mutters the last part. You\'re not sure you were meant to hear it.',
        ],
        next: 'feast',
      },
      feast: {
        text: [
          'The "feast" is Brakka, you, a bonfire behind the arena, and a whole roasted boar. She tears off a leg and hands it to you.',
          '@brakka:happy Eat! Grow strong!',
          'You eat together under the stars, grease running down your chins. She tells stories about her clan: the Great Wolf Hunt, the Year of No Mead, the time her grandmother headbutted a dragon.',
          'Eventually she falls quiet, staring into the fire.',
          '@brakka:sad In clan, Brakka was too much. Too loud, too strong, too stubborn. They say, "No man will take Brakka." So Brakka said, "Then Brakka will take nobody." And left.',
          '@brakka:sad Sometimes Brakka is lonely. But only sometimes. Only when the fire is low.',
        ],
        choices: [
          { text: '"You\'re not too much, Brakka. You\'re exactly enough."', go: 'enough', aff: 8, flag: 'brakka_enough' },
          { text: 'Throw another log on the fire.', go: 'log', aff: 7, flag: 'brakka_log' },
        ],
      },
      enough: {
        text: [
          'She looks at you for a long time. The fire crackles.',
          '@brakka:surprised ...Tiny human says big things.',
          'She shifts closer, until her huge shoulder is pressed against yours. She\'s warm as a furnace.',
          '@brakka:blush Brakka likes the big things you say.',
        ],
        end: true,
      },
      log: {
        text: [
          'You heave a heavy log onto the fire. It roars up, bright and warm.',
          '@brakka:happy ...Ha. Fire is not low anymore.',
          'She grins at you, tusks gleaming in the firelight. Then she puts one huge arm around your shoulders and pulls you close, and doesn\'t let go.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'Brakka storms into the tavern, picks you up out of your chair, and carries you outside without a word. The other patrons don\'t even look up. They\'re used to her.',
          'She sets you down in the alley and paces back and forth, cracking her knuckles.',
          '@brakka:blush Brakka must ask you something. It is very important. Brakka is very nervous. Brakka is *never* nervous.',
          { if: 'brakka_enough', text: '@brakka You said Brakka is exactly enough. By the fire. Brakka has been thinking about that every night. It is very loud in Brakka\'s head. Louder than the arena.' },
          '@brakka In Ironjaw clan, when warrior wants to court someone, there is test. Courting challenge. Warrior must fight them. If they fight with honor, warrior asks to court them.',
          '@brakka:blush Brakka wants to... *fight* you. In the courting way.',
        ],
        choices: [
          { text: '"I accept your challenge, Brakka Ironjaw." [Might check 3]', check: { stat: 'might', dc: 3 }, pass: 'court_win', fail: 'court_brave' },
          { text: '"Do I have to win?"', go: 'win_q', aff: 5 },
        ],
      },
      win_q: {
        text: [
          '@brakka:surprised No! Nobody beats Brakka. You just have to fight with *honor.* Not run away. Not cry. Not too much.',
          '@you What if I cry a little?',
          '@brakka:blush A little is fine. Brakka cried at last wedding. Very beautiful axe ceremony.',
          'She leads you to the arena by moonlight. It\'s empty except for the two of you.',
        ],
        next: 'court_brave',
      },
      court_win: {
        text: [
          'She leads you to the empty arena under the moon. You face each other on the sand.',
          'It is nothing like your first fight. She is still impossibly strong, but you\'ve been training — and you meet her charge head on. You grapple. You trade blows. You get thrown and get back up, and get thrown and get back up, and on the fourth time you manage to throw *her*, and she hits the sand with a *whump* that echoes off the stands.',
          'She lies there on her back, laughing up at the moon.',
          '@brakka:happy HA! HA! You — you put Brakka *down!* On her *back!* In courting fight!',
          '@brakka:surprised You know what that means? In clan? If you put warrior down in courting fight?',
          '@you ...What does it mean?',
          '@brakka:smug It means *you* are courting *Brakka!*',
        ],
        aff: 12,
        flag: 'brakka_pinned',
        next: 'ask',
      },
      court_brave: {
        text: [
          'You face each other on the moonlit sand. She charges. You fight with everything you have, which is not enough, but you never once back down. You get knocked down nine times. You get up nine times.',
          'On the tenth, you\'re too dizzy to stand. She kneels in the sand beside you, her face very serious.',
          '@brakka You did not run. You did not give up. You got up nine times against Brakka Ironjaw.',
          '@brakka:blush That is *honor.* That is the most honor Brakka has ever seen.',
        ],
        aff: 8,
        flag: 'brakka_nine',
        next: 'ask',
      },
      ask: {
        text: [
          'She takes something from her belt: a braided leather cord with a single carved tusk bead on it.',
          '@brakka:sad This is courting token. Brakka\'s mother made it. Brakka never gave it to anyone. Never found anyone worth it.',
          '@brakka:blush Will you wear it? Will you let Brakka court you?',
        ],
        choices: [
          { text: '"Tie it on me yourself."', go: 'tie', aff: 10 },
          { text: '"Only if I get to court you back."', go: 'back', aff: 10, flag: 'brakka_both' },
        ],
      },
      tie: {
        text: [
          'Her huge fingers are incredibly gentle as she ties the cord around your wrist. She ties it three times to make sure.',
          'Then she presses her forehead against yours, very carefully, so she doesn\'t knock you over.',
          '@brakka:happy Now everyone will know. Tiny human is *Brakka\'s* tiny human.',
        ],
        end: true,
      },
      back: {
        text: [
          'She blinks. Then she laughs so loudly a dog starts barking three streets away.',
          '@brakka:happy Both courting? At same time? That is not tradition! That is — that is *better* than tradition!',
          'She ties the token around your wrist, then holds out her own wrist expectantly. You tie your handkerchief around it. She looks at it like it\'s made of gold.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Brakka has built a hut. An actual hut, of timber and hide, in the hills outside town, with a firepit and a hand-carved door. She stands outside it, arms folded, trying to look casual and failing completely.',
          '@brakka:blush Brakka made this. In orc courtship, after token, warrior builds a home. To show they can provide.',
          '@brakka It took three days. Brakka punched down the trees herself. Do you... like it?',
          { if: 'brakka_both', text: 'Your handkerchief is still tied around her wrist. It is filthy. It has clearly not come off once, including, from the look of it, while punching down trees.' },
          'Inside is a big bed piled with furs, a hearth, and on the windowsill, in pride of place, Stabby the cactus.',
          { if: 'brakka_log', text: 'The fire in the hearth is already roaring, built up far too high for the size of the hut. She sees you notice and shrugs, a little embarrassed. "Fire is never low here," she mutters. "Brakka made sure."' },
        ],
        choices: [
          { text: '"It\'s perfect, Brakka."', go: 'perfect', aff: 8 },
          { text: 'Pick her up. (Yes, all of her.) [Might check 4]', check: { stat: 'might', dc: 4 }, pass: 'carry', fail: 'perfect' },
        ],
      },
      perfect: {
        text: [
          'Something in her face breaks open: relief and joy and a shyness you\'ve never seen on her before.',
          '@brakka:blush It is only perfect because you are here.',
          'She pulls you inside, ducking under the doorframe.',
        ],
        next: 'night',
      },
      carry: {
        text: [
          'You crouch, wrap your arms around her, and *lift.* It is the hardest thing you have ever done. But Brakka Ironjaw — all seven feet of her — rises off the ground, and you carry her, staggering, across the threshold of the hut she built.',
          { if: 'brakka_lifted', text: 'Three seconds, the first time. This time you don\'t put her down at all.' },
          'She is laughing and crying at the same time, her arms around your neck.',
          '@brakka:surprised You carried Brakka — across the door — that is the most important orc wedding custom — nobody has ever been able to carry Brakka —',
          '@you Is this a wedding?',
          '@brakka:happy IT IS NOW.',
        ],
        aff: 15,
        flag: 'brakka_threshold',
        next: 'night',
      },
      night: {
        text: [
          "By the firelight she's suddenly, adorably shy. She sits on the edge of the furs, fiddling with her braids.",
          "@brakka:sad Brakka is very strong. Brakka is afraid of... breaking you. You are so small. So soft.",
          "@you You won't break me.",
          "@brakka:blush ...Promise?",
          "@you Promise. And if you get too rough, I'll tell you.",
          { if: 'brakka_nine', text: "@brakka:smug ...Ha. You got up nine times. Brakka believes you." },
          "She nods very seriously, unbuckles her armor plate by plate, and sets each piece down with a heavy thunk. Then she kisses you, very, very carefully, as if you were made of glass.",
          "It doesn't stay careful for long. You run your hands over her shoulders, over the scars of a hundred arena fights, over muscle like warm carved stone. She shudders. Nobody has ever touched her like she was something to be *admired* rather than feared.",
          { if: 'brakka_arms', text: "@brakka:blush You said it. The first day. *Admiring.* Brakka thought you were joking. You are not joking. You are *still* not joking." },
          "@brakka:blush More. Brakka wants — more of that. Hands. Everywhere.",
          "She lifts you as if you weigh nothing, lays you down in the furs and looms over you, enormous and warm and grinning with all her tusks. It's a little like being swept away by a very friendly avalanche. She laughs a lot. She checks on you often, gruff and sweet: *good? still good?* At one point the bed breaks. She simply lifts both of you onto the furs on the floor without missing a beat, and keeps going...",
          "...",
          "Late in the night, you lie draped across her chest like a blanket, one huge arm wrapped around you, the fire burned down to embers.",
          "@brakka:smug Tiny human is not so tiny. Tiny human is very... *fierce.*",
          "She sounds deeply, smugly impressed.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake to the sound of hammering. Brakka is outside the hut, shirtless in the morning chill, rebuilding the bed frame out of a tree she has apparently just punched down.",
          "@brakka:happy MORNING, MATE! Brakka is making stronger bed! Iron-oak! Very sturdy! Will survive *anything!*",
          { if: 'brakka_threshold', text: "@brakka:smug Also Brakka has carved it on the door! See? *MATE CARRIED BRAKKA HERE.* So nobody forgets. So *Brakka* never forgets." },
          "She waves a log at you cheerfully. Then she spots the bruises on your shoulders, the ones shaped exactly like her hands, and her face falls.",
          "@brakka:sad Oh no. Brakka marked you. Brakka was too strong. Does it hurt? Brakka is sorry. Brakka will be gentler. Brakka will be *so* gentle —",
        ],
        choices: [
          { text: "\"I'm fine. I told you I'd say if it was too much. I didn't say.\"", go: "fine", aff: 6 },
          { text: "Show her the claw marks *you* left on her back.", go: "marks", aff: 6, flag: 'brakka_marks' },
          { text: "\"Gentle is overrated. Finish that bed.\"", go: "bed", aff: 5 },
        ],
      },
      fine: {
        text: [
          "She stares at you for a long moment. Then she drops the log and scoops you up into a hug that lifts you clean off the ground.",
          "@brakka:happy You did not say. Because it was GOOD. Ha! Brakka is a GOOD mate!",
          "She carries you around the clearing announcing this to the birds.",
        ],
        end: true,
      },
      marks: {
        text: [
          "You turn her around. Across her broad green shoulders are long red scratches, quite clearly from your fingernails.",
          "Brakka cranes her neck to look. Her eyes go wide. Then she starts laughing so hard she has to sit down.",
          "@brakka:happy TINY HUMAN MARKED BRAKKA! In clan, this is great honor! Brakka will show EVERYONE!",
          "She does. She wanders around the arena shirtless all afternoon. Several gladiators applaud.",
        ],
        end: true,
      },
      bed: {
        text: [
          "She grins with all her tusks.",
          "@brakka:smug *Overrated.* Ha! Brakka likes that! Brakka will make bed out of IRON!",
          "She finishes the bed by noon. It is enormous. It is magnificent. It lasts four days.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'You hear Brakka before you see her: a booming voice parting the crowd on the festival hill like the prow of a ship.',
          '@brakka:happy MOVE! MOVE, PLEASE! THANK YOU! BRAKKA IS COMING THROUGH! WITH FOOD!',
          'She arrives carrying an entire roast boar on a spit over one shoulder and a barrel of ale under the other arm. She drops both at your feet with a thump.',
          '@brakka:smug Orc way to watch stars! With feast!',
          { if: 'brakka_date_picnic', text: '@brakka:blush Brakka also brought a blanket. Small one. Human-style. For you. Brakka remembered.' },
          'She settles beside you on the grass, and then — very gently, so she won\'t squash you — pulls you into her lap.',
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'The stars begin to fall. Brakka goes quiet, which is so rare that several nearby people turn to stare.',
          '@brakka In clan, they say the stars are the spirits of warriors, falling down to see who is worthy.',
          '@brakka:sad Brakka always thought they would look at Brakka and see too much. Too big. Too loud.',
          { if: 'brakka_enough', text: '@brakka:blush But somebody told Brakka once, by a fire: *exactly enough.* Brakka believes it now. Mostly. Brakka believes it more every day.' },
          '@brakka:happy But tonight Brakka thinks they look and see... Brakka and Brakka\'s mate. And they say, *good. Strong bond.*',
          'She kisses the top of your head, then your forehead, then your lips, very carefully, under the falling stars.',
          '@brakka:blush Brakka loves you, tiny human. More than axes. More than feasts. More than *Stabby.*',
          '@brakka:surprised ...Do not tell Stabby.',
        ],
        next: 'which',
      },
      which: {
        branch: [
          { if: ['brakka_threshold', { any: ['brakka_pinned', 'brakka_lifted'] }], go: 'warchief' },
          { if: ['brakka_enough', 'brakka_both'], go: 'gentle' },
          { go: 'epilogue' },
        ],
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'You hold a proper Ironjaw wedding. It involves a lot of shouting, an axe ceremony, a feast that lasts three days, and a ritual headbutt that leaves you seeing stars for an hour. Brakka cries the entire time.',
          'Her clan hears about it. Her father arrives, furious — until you arm-wrestle him for his blessing. You lose, obviously. But you last long enough that he laughs, claps you on the back, and calls you "son-of-my-bones," which you are told is a great honor.',
          'You live in the hut in the hills, which Brakka has expanded four times. The new bed is made of solid iron. It has not broken yet.',
          'She still fights in the arena. She still wins. And every time, she points up into the stands where you\'re sitting and roars your name so loud the whole city hears it.',
          'Stabby the cactus is thriving. He has a little sibling now. Brakka sings to them both.',
        ],
        ending: 'brakka',
      },
      warchief: {
        text: [
          'When the last star has fallen, a horn sounds from the bottom of the hill. Deep. Old. Brakka goes rigid in your lap.',
          '@brakka:surprised That is Ironjaw horn.',
          'Coming up the hill, through the scattering crowd, are twenty orcs in war-paint, and at their head a huge, gray-bearded orc with an axe on his back and a face like a cliff. Grommash Ironjaw. He looks at his daughter. He looks at you.',
          'Then he takes the axe off his back and lays it at Brakka\'s feet.',
          '*Some time later...*',
          'It turns out the Chieftain\'s son, the one who cried when Brakka sat on him, has been a very poor Chieftain.',
          { if: 'brakka_pinned', text: 'It turns out the whole clan has heard about the human who put Brakka Ironjaw on her back in a courting fight and then carried her over a threshold.', else: 'It turns out the whole clan has heard about the human who lifted Brakka Ironjaw clean off the ground, twice, and the second time carried her over a threshold.' },
          'It turns out the old law says that anyone who can do that is *worth listening to,* and that the orc they can do it to is worth following.',
          'Brakka goes home. Not exiled. Invited. She challenges the Chieftain\'s son in the great ring under the mountain, and the fight lasts nine seconds, and she does not even sit on him. She just helps him up afterward and gives him a job looking after the goats.',
          'Warchief Brakka Ironjaw\'s first law is that nobody in the clan may ever again be called *too much.* Her second law is that courting fights may now go both ways. Her third law is about cactus care, and is very long.',
          'You are her mate, and her war-counsel, and the only person in the history of the Ironjaw who is allowed to tell the Warchief "no." You do it often. She loves it. Every time, she roars with laughter and picks you up and carries you around the great hall to show everyone the only creature on earth that Brakka Ironjaw is afraid of disappointing.',
          'Stabby and Pokey sit on the Warchief\'s throne, on a little velvet cushion stitched by Gruk. Visitors are expected to bow to them. Most do.',
          '@brakka:happy Brakka did not go home for clan. Brakka went home because *you* made Brakka strong enough to go back. Ha! Now clan has to put up with *both* of us!',
        ],
        ending: 'brakka_warchief',
      },
      gentle: {
        text: [
          'When the last star has fallen, Brakka is still very quiet. She holds your wrist up beside her own: her mother\'s token on yours, your grubby handkerchief on hers.',
          '@brakka:sad Can Brakka tell you a secret? Bigger than sad rock?',
          '@brakka:blush Brakka is tired of fighting. Not of *you.* Of the arena. One hundred and twelve shields. Brakka does not want one hundred and thirteen. Brakka wants... a garden.',
          '@you Then let\'s build one.',
          '*Some time later...*',
          'Brakka Ironjaw retires from the arena undefeated, in front of a crowd of thousands, by setting down her axe in the center of the sand and announcing that she is "going to go grow things now." There is a stunned silence. Then the whole arena gives her a standing ovation that lasts eleven minutes. Gruk weeps into his embroidery.',
          'You open a nursery on the edge of town together: *Brakka\'s Prickly Friends.* It sells cactuses, mostly, and some herbs, and a few very sturdy roses that Brakka has personally threatened into blooming. Every plant comes with a handwritten care card. The handwriting is yours. The instructions are hers. Most of them say *SING TO IT.*',
          'She is still enormous. She still breaks one doorframe a month. She still headbutts the customers she likes, gently, and they come back for more. Children climb on her like a tree. Animals follow her home. Once, a deer walks right into the shop and lies down at her feet, and she closes for the afternoon so as not to disturb it.',
          'Some evenings, she still arm-wrestles you for the last piece of pie. She lets you win exactly half the time, and you both pretend not to know.',
          'Stabby has eleven siblings now. Brakka knows all their names. She sings them the war-lullaby every night, about crushing your enemies and then having a nice nap, and it turns out that it is really mostly about the nap.',
          '@brakka:happy Brakka used to think the soft heart was the weak part. It is not. It is the strongest part of Brakka. Somebody had to be brave enough to hold it.',
        ],
        ending: 'brakka_gentle',
      },
    },
  },
});
