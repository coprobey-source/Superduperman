FL.addCharacter({
  id: 'brakka',
  name: 'Brakka Ironjaw',
  short: 'Brakka',
  trope: 'Buff Orc Warrior Woman',
  color: '#6fb35a',
  favStat: 'might',
  endingTitle: 'Warrior\'s Bond',
  teaser: 'A seven-foot green woman with tusks is bench-pressing a horse. The horse seems fine with it.',
  blurb: 'Undefeated arena champion and exiled warchief\'s daughter. Loud, proud, absurdly strong, and blunt to a fault. She is looking for a mate worthy of her clan\'s traditions — which mostly involve combat, feasting, and more combat. Under the muscle is a surprisingly soft heart.',
  schedule: ['arena', 'arena', 'tavern'],
  gifts: { love: ['axe'], like: ['steak', 'ale', 'rum'], hate: ['tea', 'perfume'] },
  giftLines: {
    love: ['She lifts the axe overhead with one hand and lets out a roar that shakes the dust from the rafters.', '@brakka HA! A REAL WEAPON! Balanced! Heavy! *Beautiful!* You give Brakka axe? In clan, this is very serious gift. Very, very serious. You know this?', 'She is grinning so wide her tusks gleam.'],
    like: '@brakka Ha! Good gift! Strong gift! Brakka approves!',
    neutral: '@brakka Hm. Small thing. Brakka will keep it. Maybe use it as toothpick.',
    hate: ['She holds it between two fingers like a dead mouse.', '@brakka Leaf water? Flower smell? Brakka is WARRIOR. Brakka is not *dainty.* ...Brakka will give this to Gruk. Gruk is dainty.'],
  },
  talk: [
    ['@brakka TINY HUMAN! You come to arena again! Good! You want to arm-wrestle? You will lose! But it will build character!'],
    ['@brakka In Ironjaw clan, we greet friends by headbutting. Brakka will not headbutt you. You would die. Brakka will *gently* headbutt you.', 'She gently headbutts you. You see stars.'],
    ['@brakka Humans eat with tiny forks. Tiny little forks for tiny little mouths. It is very cute. Brakka eats with hands. Or with axe.'],
    ['@brakka Brakka has won one hundred and twelve arena fights. Brakka has lost zero. Brakka is bored. Brakka needs a *challenge.*', 'She looks at you speculatively.', '@brakka ...In a few years, maybe.'],
    ['@brakka Brakka was exiled from clan for refusing to marry Chieftain\'s son. He was weak. Cried when Brakka sat on him. Brakka only sat on him a *little.*'],
    ['She\'s gently tending a tiny potted cactus on the arena wall.', '@brakka This is Stabby. Brakka found him in desert. He is strong like orc. Don\'t tell anyone Brakka sings to him.'],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'The arena crowd is roaring. Down on the sands, a gladiator in heavy armor charges at his opponent with a war cry —',
          '— and his opponent, a towering green-skinned orc woman with a braided mohawk and tusks, catches him by the helmet with one hand and lifts him clean off the ground.',
          '@brakka HA! Too slow! Like snail! Like snail in mud!',
          'She tosses him gently into a pile of hay. The crowd goes wild. She flexes. They go wilder.',
          'Then she spots you at the edge of the training yard and points.',
          '@brakka YOU. Tiny human. You look at Brakka like you want to fight. You want to fight?',
        ],
        aff: 10,
        choices: [
          { text: '"Absolutely." Step into the ring. [Might check 2]', check: { stat: 'might', dc: 2 }, pass: 'fight_win', fail: 'fight_lose' },
          { text: '"I\'d rather buy you a drink."', go: 'drink' },
          { text: '"I was just admiring your arms."', go: 'arms' },
        ],
      },
      fight_win: {
        text: [
          'You step into the ring. She grins. She charges. You don\'t win — no one could win — but you sidestep her first rush, duck the second, and on the third you actually manage to plant your feet and *stop* her, if only for a second.',
          'The crowd goes silent. Brakka blinks down at you.',
          '@brakka ...You *stopped* Brakka. For one heartbeat. Nobody stops Brakka.',
          'Then she picks you up and spins you around over her head while the crowd screams.',
          '@brakka TINY HUMAN IS STRONG! BRAKKA LIKES TINY HUMAN!',
        ],
        aff: 8,
        next: 'name',
      },
      fight_lose: {
        text: [
          'You step into the ring. She grins. She charges. Then you are lying on your back in the sand looking at the sky, and you aren\'t entirely sure how you got there.',
          'Her huge face appears above you, upside down.',
          '@brakka You okay? You fall very good. Very dramatic. Crowd loves it.',
          'She hauls you to your feet with one hand and claps you on the back so hard you nearly fall over again.',
          '@brakka You are weak. But you are brave! Brave is first step! Strong comes later!',
        ],
        aff: 4,
        next: 'name',
      },
      drink: {
        text: [
          'She stares at you. Then she bursts out laughing — a huge booming laugh that echoes off the arena walls.',
          '@brakka HA! Tiny human wants to drink with Brakka? Brakka drinks a *barrel.* You will drink a *cup.* And then you will fall over!',
          '@brakka ...Brakka accepts.',
        ],
        aff: 5,
        next: 'name',
      },
      arms: {
        text: [
          'She looks down at her arms — each one roughly the size of your torso — and then back at you. Her dark green cheeks go even darker.',
          '@brakka ...They are good arms. Brakka works very hard on arms.',
          '@brakka Most humans run away screaming. You *admire.* Hm. Brakka will think about this.',
        ],
        aff: 6,
        next: 'name',
      },
      name: {
        text: [
          '@brakka Brakka Ironjaw! Daughter of Grommash Ironjaw! Champion of the Arena! Breaker of a hundred and twelve shields! What is your name, tiny human?',
          '@you {name}.',
          '@brakka {name}! Good strong name! Brakka will shout it in battle!',
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
          '@brakka TODAY, Brakka trains you! Orc way! Very traditional! Very effective! Usually nobody dies!',
          '@you Usually?',
          '@brakka *Usually.*',
          'The orc way turns out to involve running up the arena steps carrying a log, wrestling a goat (the goat wins), and punching a boulder until either your fist or the boulder gives up. By sunset you are soaked in sweat and covered in bruises.',
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
          '@brakka You... lifted Brakka. Nobody lifts Brakka. Even Father could not lift Brakka after Brakka was twelve.',
          'Then she hugs you so hard your spine pops in four places.',
          '@brakka WE CELEBRATE! FEAST! MEAT! TONIGHT!',
        ],
        aff: 10,
        next: 'feast',
      },
      lift_fail: {
        text: [
          'You crouch. You brace. You heave. Nothing happens. You heave again. Something in your back makes a noise.',
          '@brakka Ha! Good try! You are like ant trying to lift mountain! Very brave ant!',
          'She picks *you* up instead, tucks you under her arm like a sack of potatoes, and carries you off the field.',
          '@brakka Now we feast!',
        ],
        aff: 5,
        next: 'feast',
      },
      lift_me: {
        text: [
          'She grins, scoops you up, and swings you over her shoulders like a cape. Then she runs a victory lap of the arena while you cling to her mohawk and the crowd cheers.',
          '@brakka Ha! You are light! Like baby goat! Brakka could carry you all day!',
          '@brakka ...Brakka *would* carry you all day.',
          'She mutters the last part. You\'re not sure you were meant to hear it.',
        ],
        next: 'feast',
      },
      feast: {
        text: [
          'The "feast" is Brakka, you, a bonfire behind the arena, and a whole roasted boar. She tears off a leg and hands it to you.',
          '@brakka Eat! Grow strong!',
          'You eat together under the stars, grease running down your chins. She tells stories about her clan: the Great Wolf Hunt, the Year of No Mead, the time her grandmother headbutted a dragon.',
          'Eventually she falls quiet, staring into the fire.',
          '@brakka In clan, Brakka was too much. Too loud, too strong, too stubborn. They say, "No man will take Brakka." So Brakka said, "Then Brakka will take nobody." And left.',
          '@brakka Sometimes Brakka is lonely. But only sometimes. Only when the fire is low.',
        ],
        choices: [
          { text: '"You\'re not too much, Brakka. You\'re exactly enough."', go: 'enough', aff: 8 },
          { text: 'Throw another log on the fire.', go: 'log', aff: 7 },
        ],
      },
      enough: {
        text: [
          'She looks at you for a long time. The fire crackles.',
          '@brakka ...Tiny human says big things.',
          'She shifts closer, until her huge shoulder is pressed against yours. She\'s warm as a furnace.',
          '@brakka Brakka likes the big things you say.',
        ],
        end: true,
      },
      log: {
        text: [
          'You heave a heavy log onto the fire. It roars up, bright and warm.',
          '@brakka ...Ha. Fire is not low anymore.',
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
          '@brakka Brakka must ask you something. It is very important. Brakka is very nervous. Brakka is *never* nervous.',
          '@brakka In Ironjaw clan, when warrior wants to court someone, there is test. Courting challenge. Warrior must fight them. If they fight with honor, warrior asks to court them.',
          '@brakka Brakka wants to... *fight* you. In the courting way.',
        ],
        choices: [
          { text: '"I accept your challenge, Brakka Ironjaw." [Might check 3]', check: { stat: 'might', dc: 3 }, pass: 'court_win', fail: 'court_brave' },
          { text: '"Do I have to win?"', go: 'win_q', aff: 5 },
        ],
      },
      win_q: {
        text: [
          '@brakka No! Nobody beats Brakka. You just have to fight with *honor.* Not run away. Not cry. Not too much.',
          '@you What if I cry a little?',
          '@brakka A little is fine. Brakka cried at last wedding. Very beautiful axe ceremony.',
          'She leads you to the arena by moonlight. It\'s empty except for the two of you.',
        ],
        next: 'court_brave',
      },
      court_win: {
        text: [
          'She leads you to the empty arena under the moon. You face each other on the sand.',
          'It is nothing like your first fight. She is still impossibly strong, but you\'ve been training — and you meet her charge head on. You grapple. You trade blows. You get thrown and get back up, and get thrown and get back up, and on the fourth time you manage to throw *her*, and she hits the sand with a *whump* that echoes off the stands.',
          'She lies there on her back, laughing up at the moon.',
          '@brakka HA! HA! You — you put Brakka *down!* On her *back!* In courting fight!',
          '@brakka You know what that means? In clan? If you put warrior down in courting fight?',
          '@you ...What does it mean?',
          '@brakka It means *you* are courting *Brakka!*',
        ],
        aff: 12,
        next: 'ask',
      },
      court_brave: {
        text: [
          'You face each other on the moonlit sand. She charges. You fight with everything you have, which is not enough, but you never once back down. You get knocked down nine times. You get up nine times.',
          'On the tenth, you\'re too dizzy to stand. She kneels in the sand beside you, her face very serious.',
          '@brakka You did not run. You did not give up. You got up nine times against Brakka Ironjaw.',
          '@brakka That is *honor.* That is the most honor Brakka has ever seen.',
        ],
        aff: 8,
        next: 'ask',
      },
      ask: {
        text: [
          'She takes something from her belt: a braided leather cord with a single carved tusk bead on it.',
          '@brakka This is courting token. Brakka\'s mother made it. Brakka never gave it to anyone. Never found anyone worth it.',
          '@brakka Will you wear it? Will you let Brakka court you?',
        ],
        choices: [
          { text: '"Tie it on me yourself."', go: 'tie', aff: 10 },
          { text: '"Only if I get to court you back."', go: 'back', aff: 10 },
        ],
      },
      tie: {
        text: [
          'Her huge fingers are incredibly gentle as she ties the cord around your wrist. She ties it three times to make sure.',
          'Then she presses her forehead against yours, very carefully, so she doesn\'t knock you over.',
          '@brakka Now everyone will know. Tiny human is *Brakka\'s* tiny human.',
        ],
        end: true,
      },
      back: {
        text: [
          'She blinks. Then she laughs so loudly a dog starts barking three streets away.',
          '@brakka Both courting? At same time? That is not tradition! That is — that is *better* than tradition!',
          'She ties the token around your wrist, then holds out her own wrist expectantly. You tie your handkerchief around it. She looks at it like it\'s made of gold.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Brakka has built a hut. An actual hut, of timber and hide, in the hills outside town, with a firepit and a hand-carved door. She stands outside it, arms folded, trying to look casual and failing completely.',
          '@brakka Brakka made this. In orc courtship, after token, warrior builds a home. To show they can provide.',
          '@brakka It took three days. Brakka punched down the trees herself. Do you... like it?',
          'Inside is a big bed piled with furs, a hearth, and on the windowsill, in pride of place, Stabby the cactus.',
        ],
        choices: [
          { text: '"It\'s perfect, Brakka."', go: 'perfect', aff: 8 },
          { text: 'Pick her up. (Yes, all of her.) [Might check 4]', check: { stat: 'might', dc: 4 }, pass: 'carry', fail: 'perfect' },
        ],
      },
      perfect: {
        text: [
          'Something in her face breaks open: relief and joy and a shyness you\'ve never seen on her before.',
          '@brakka It is only perfect because you are here.',
          'She pulls you inside, ducking under the doorframe.',
        ],
        next: 'night',
      },
      carry: {
        text: [
          'You crouch, wrap your arms around her, and *lift.* It is the hardest thing you have ever done. But Brakka Ironjaw — all seven feet of her — rises off the ground, and you carry her, staggering, across the threshold of the hut she built.',
          'She is laughing and crying at the same time, her arms around your neck.',
          '@brakka You carried Brakka — across the door — that is the most important orc wedding custom — nobody has ever been able to carry Brakka —',
          '@you Is this a wedding?',
          '@brakka IT IS NOW.',
        ],
        aff: 15,
        next: 'night',
      },
      night: {
        text: [
          'By the firelight, she is suddenly, adorably shy. She sits on the edge of the furs, fiddling with her braids.',
          '@brakka Brakka is very strong. Brakka is afraid of... breaking you. You are so small. So soft.',
          '@you You won\'t break me.',
          '@brakka ...Promise?',
          '@you Promise. And if you get too rough, I\'ll tell you.',
          'She nods very seriously, and then she kisses you, very, very carefully, as if you were made of glass.',
          'It doesn\'t stay careful for long. She is enormous and warm and wildly enthusiastic, and it is a little like being swept away by a friendly avalanche. She laughs a lot. She checks on you often. At one point the bed breaks, and she simply lifts both of you onto the furs on the floor without missing a beat, and keeps going.',
          '...',
          'In the morning, you wake up completely enveloped — draped across her chest like a blanket, one huge arm wrapped around you. She\'s already awake, watching you with a soft, goofy smile.',
          '@brakka Good morning, mate.',
          '@brakka Brakka will fix the bed. Brakka will make it stronger. *Much* stronger.',
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'You hear Brakka before you see her: a booming voice parting the crowd on the festival hill like the prow of a ship.',
          '@brakka MOVE! MOVE, PLEASE! THANK YOU! BRAKKA IS COMING THROUGH! WITH FOOD!',
          'She arrives carrying an entire roast boar on a spit over one shoulder and a barrel of ale under the other arm. She drops both at your feet with a thump.',
          '@brakka Orc way to watch stars! With feast!',
          'She settles beside you on the grass, and then — very gently, so she won\'t squash you — pulls you into her lap.',
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'The stars begin to fall. Brakka goes quiet, which is so rare that several nearby people turn to stare.',
          '@brakka In clan, they say the stars are the spirits of warriors, falling down to see who is worthy.',
          '@brakka Brakka always thought they would look at Brakka and see too much. Too big. Too loud.',
          '@brakka But tonight Brakka thinks they look and see... Brakka and Brakka\'s mate. And they say, *good. Strong bond.*',
          'She kisses the top of your head, then your forehead, then your lips, very carefully, under the falling stars.',
          '@brakka Brakka loves you, tiny human. More than axes. More than feasts. More than *Stabby.*',
          '@brakka ...Do not tell Stabby.',
        ],
        next: 'epilogue',
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
    },
  },
});
