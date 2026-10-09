FL.addSpeaker('goblin', 'Goblin Chief', '#8fbf3a');

FL.addCharacter({
  id: 'brunhild',
  name: 'Dame Brunhild von Steinhart',
  short: 'Brunhild',
  trope: 'Proud Lady Knight ("Just Kill Me!")',
  color: '#c0c8d8',
  favStat: 'might',
  endingTitle: 'Sworn to the Heart',
  teaser: 'A tall knight in polished silver plate is drilling recruits. She is shouting about honor. Loudly.',
  blurb: 'Knight-Captain of the Clichéton garrison: honorable, rigid, devastatingly proud, and so allergic to embarrassment that she demands to be slain at the slightest humiliation. She has never lost a duel. She has a secret soft spot for cute things — kittens, plushies, small ducks — that she would rather die than admit.',
  schedule: ['arena', 'arena', 'noble'],
  gifts: { love: ['plushie'], like: ['cakes', 'dagger', 'axe', 'yarn'], hate: ['novel', 'perfume'] },
  giftLines: {
    love: ['She stares at the stuffed bunny. Her stern face does not move. Her hands, however, are trembling.', '@brunhild This is... a child\'s toy. Wholly inappropriate for a Knight-Captain.', 'She tucks it into her breastplate, very carefully, so that only its ears stick out.', '@brunhild I shall... confiscate it. For safekeeping. Its name is Sir Fluffington. Speak of this to no one.'],
    like: '@brunhild A fine gift. You honor me. I accept it in the spirit it was given.',
    neutral: '@brunhild Hm. A curious offering. I shall accept it, as is proper.',
    hate: ['She takes one look at the cover and goes scarlet from her collar to her hairline.', '@brunhild THIS IS — this is *indecent!* To present a knight with such — such *lewdness!* The shame! Kill me! Just kill me!'],
  },
  talk: [
    ['@brunhild Citizen. You are standing with poor posture. Straighten your spine. A straight spine is the foundation of a straight soul.'],
    ['@brunhild I have challenged every warrior in Clichéton to a duel. All have refused. Cowards! ...The orc woman accepted. We have agreed never to speak of the outcome.'],
    ['She is standing perfectly still while a small duckling waddles across her boot.', '@brunhild Do not move. It is resting. A knight protects the defenseless.', 'Her eye twitches with the effort of not smiling.'],
    ['@brunhild The Code of Knighthood has one hundred and twelve tenets. I have memorized all of them. Number forty-three: "A knight shall never giggle." It is the hardest.'],
    ['@brunhild My father wished for a son to carry the Steinhart sword. He got me. I have spent my whole life proving that was no misfortune.'],
    ['@brunhild You have been training. I can see it in your stance. ...That is a compliment. Accept it quickly, before I take it back.'],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'In the arena training grounds, a row of terrified recruits stands at attention in the blazing sun. Pacing before them is a tall woman in gleaming silver plate armor, a crimson cape snapping behind her. Her ash-blonde hair is pulled into a severe braid. Her jaw could cut glass.',
          '@brunhild PATHETIC! Your stances are weak! Your swords are crooked! Your *hearts* are crooked! A knight\'s blade is an extension of their *honor!*',
          'She whirls — and spots you watching from the fence.',
          '@brunhild You! Civilian! You dare observe the sacred drills of the garrison? State your purpose, or draw your blade!',
        ],
        aff: 10,
        choices: [
          { text: 'Draw your blade. "I\'ll take that challenge." [Might check 2]', check: { stat: 'might', dc: 2 }, pass: 'duel_win', fail: 'duel_lose' },
          { text: 'Salute. "Just admiring the drills, Captain."', go: 'salute' },
          { text: '"Your cape is very dramatic."', go: 'cape' },
        ],
      },
      duel_win: {
        text: [
          'She vaults the fence in full armor and attacks. She\'s fast, brutally precise, and utterly relentless. You don\'t win. But you hold your ground for a full minute — and at one point, you land a light tap on her pauldron.',
          'She stops dead. The recruits gasp.',
          '@brunhild You... *touched* me. In a formal duel. Before my recruits.',
          'Her face goes red. Her eyes burn.',
          '@brunhild The *shame* of it! Kill me! Just kill me!',
          '@you ...It was just a tap.',
          '@brunhild A tap is a *hit!* A hit is a *wound!* A wound is — *excellent swordsmanship.* Well fought, civilian.',
          'She sheathes her blade and gives you a sharp, respectful bow.',
        ],
        aff: 7,
        next: 'name',
      },
      duel_lose: {
        text: [
          'She vaults the fence and attacks. You last approximately three seconds before your sword is spinning through the air and her blade is at your throat.',
          '@brunhild Courage without skill is a candle in a gale. But courage is the rarer of the two. You may train with us, civilian, when you are ready.',
        ],
        aff: 3,
        next: 'name',
      },
      salute: {
        text: [
          'You snap a crisp salute. She blinks.',
          '@brunhild ...Your form is correct. Wrist straight. Elbow level. You have had military training?',
          '@you Some.',
          '@brunhild Hm. You show more discipline than these recruits. *Did you hear that, recruits?* A CIVILIAN shows more discipline!',
          'The recruits groan. Brunhild looks almost pleased.',
        ],
        aff: 6,
        next: 'name',
      },
      cape: {
        text: [
          'She stops mid-stride. Her cape flutters to a halt.',
          '@brunhild ...It is regulation crimson. Standard issue. Its drama is purely incidental.',
          'She swishes it slightly.',
          '@brunhild ...Is it *very* dramatic?',
          '@you Extremely.',
          'She swishes it again, harder. The corner of her mouth twitches.',
        ],
        aff: 5,
        next: 'name',
      },
      name: {
        text: [
          '@brunhild I am Dame Brunhild von Steinhart, Knight-Captain of the Clichéton Garrison, Bearer of the Steinhart Blade, and Sworn Defender of the Realm. Who are you?',
          '@you {name}.',
          '@brunhild {name}. I will remember it. Train hard. Live honorably. Do not slouch.',
          'She turns smartly on her heel. As she marches back to her recruits, something small and fluffy falls out of her cape — a tiny knitted mouse. She snatches it up so fast it\'s a blur and glares at you.',
          '@brunhild You saw nothing.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'You\'re walking through the Noble Quarter when you hear an unusual sound from behind a hedge: a high-pitched, delighted cooing.',
          '@brunhild Who\'s a tiny brave warrior? Who\'s the bravest little warrior in all the land? *You* are! Yes you are!',
          'You peer around the hedge. Dame Brunhild von Steinhart, in full plate armor, is kneeling in the flowerbed, nuzzling a fat orange kitten against her cheek.',
          'She looks up. She sees you. All the color drains from her face.',
          'The kitten mews.',
          '@brunhild ...',
          '@brunhild I have been disgraced. My honor lies in tatters. Kill me. *Just kill me.*',
        ],
        choices: [
          { text: '"I won\'t tell a soul. I swear on my honor."', go: 'swear', aff: 8 },
          { text: 'Kneel down and pet the kitten too.', go: 'kitten', aff: 8 },
          { text: '"Who\'s the bravest little warrior?" (in the same voice)', go: 'tease', aff: 4 },
        ],
      },
      swear: {
        text: [
          '@brunhild ...On your honor?',
          '@you On my honor.',
          'She stares at you for a long moment. Then she nods, very slowly, and stands, still holding the kitten.',
          '@brunhild A knight\'s secret, entrusted to a civilian. This is... irregular. But I believe you.',
          'The kitten licks her chin. Her stern face cracks into a smile — a real one, wide and soft and completely unguarded — before she can stop it.',
        ],
        next: 'secret',
      },
      kitten: {
        text: [
          'You kneel in the flowerbed beside her and scratch the kitten under the chin. It purrs like a tiny engine.',
          'Brunhild watches you, utterly baffled.',
          '@brunhild You... are not mocking me.',
          '@you Why would I? It\'s a kitten.',
          '@brunhild ...It *is* a kitten. Isn\'t it. A very good one.',
          'She kneels back down. You sit together in the flowerbed for half an hour, petting the kitten. She doesn\'t say a word. She doesn\'t have to.',
        ],
        next: 'secret',
      },
      tease: {
        text: [
          '@you Who\'s the bravest little warrior?',
          'She makes a sound like a kettle shrieking and covers her face with one gauntlet.',
          '@brunhild *CEASE.* Cease at once! I command you!',
          'But she doesn\'t put the kitten down.',
        ],
        next: 'secret',
      },
      secret: {
        text: [
          'Later, sitting on a garden bench with the kitten asleep in her lap, she finally talks.',
          '@brunhild My father said that softness was weakness. A Steinhart must be steel all the way through. So I hid it. Every soft thing. For twenty years.',
          '@brunhild I have a room in the barracks. Locked. It is full of plushies. Forty-two of them. I knit them little helmets.',
          'She looks at you sideways, cheeks flaming.',
          '@brunhild If you laugh, I shall challenge you to a duel to the death.',
        ],
        choices: [
          { text: '"I\'d love to meet them sometime."', go: 'meet', aff: 8 },
          { text: '"Softness isn\'t weakness. Protecting small things is what knights are *for.*"', go: 'knights', aff: 10 },
        ],
      },
      meet: {
        text: [
          'She looks at you like you\'ve offered her a kingdom.',
          '@brunhild ...You wish to meet Sir Fluffington? And Lady Buttons? And Baron Wobbles?',
          '@brunhild Very well. But you must address them by their proper titles.',
        ],
        end: true,
      },
      knights: {
        text: [
          'She goes very still. She looks down at the kitten in her lap. Then back at you.',
          '@brunhild ...Tenet number one of the Knight\'s Code: "Protect those who cannot protect themselves."',
          '@brunhild I have read it ten thousand times. I never once thought it might apply to... *this.*',
          'She doesn\'t say anything else. But she sits a little closer to you on the bench.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'The alarm bells ring at dawn: a goblin warband has raided a farm east of town and dragged off the farmer\'s family. Brunhild rode out alone, before the garrison could muster.',
          'You track her to a goblin camp in the hills — and find her tied to a stake in the middle of it, armor stripped, surrounded by cackling goblins.',
          '@goblin HEHEHEH! The great lady knight! Captured by Gribbit! What do you say now, shiny lady?',
          '@brunhild I will never yield to the likes of you! I would rather die! Kill me! *JUST KILL ME!*',
          '@goblin ...We weren\'t going to kill you. We was going to ransom you. For pies.',
          '@brunhild ...Oh.',
        ],
        choices: [
          { text: 'Charge into the camp! [Might check 3]', check: { stat: 'might', dc: 3 }, pass: 'charge_win', fail: 'charge_lose' },
          { text: 'Sneak in and cut her loose while the goblins argue about pies.', go: 'sneak', aff: 7 },
        ],
      },
      charge_win: {
        text: [
          'You burst into the camp with a battle cry. Goblins scatter like startled chickens. You knock the chief flat, cut Brunhild\'s ropes, and toss her a sword. In seconds she\'s fighting beside you, and together you clear the camp. The farmer\'s family is found safe in a pen, eating goblin stew. (They report it was excellent.)',
          'When it\'s over, Brunhild stands amid the wreckage, breathing hard, and turns to you.',
          '@brunhild You came for me. Alone. Against twenty goblins.',
          '@brunhild That was reckless. Foolhardy. Against every principle of sound tactics.',
          'She grabs your shoulders.',
          '@brunhild It was the most *knightly* thing I have ever seen.',
        ],
        aff: 12,
        next: 'after',
      },
      charge_lose: {
        text: [
          'You charge into the camp with a battle cry. Goblins swarm you. Within moments, you\'re tied to the stake right next to Brunhild.',
          '@brunhild ...You came to rescue me.',
          '@you That was the plan.',
          '@brunhild It was a *terrible* plan.',
          'Then she flexes, snaps her ropes like thread — she could have done it at any time; she was waiting for the farmer\'s family to be out of danger — and breaks yours too. Together, you rout the goblins.',
          '@brunhild Terrible plan. Wonderful heart. I shall train the plan. The heart needs no training.',
        ],
        aff: 8,
        next: 'after',
      },
      sneak: {
        text: [
          'While the goblins argue loudly about whether pie ransom should be blueberry or meat, you creep around the back of the camp and slice through Brunhild\'s ropes.',
          'She looks at you in astonishment. Then she stands up, rolls her shoulders, and picks up the nearest goblin by the scruff.',
          '@brunhild *Meat pie,* you wretches. Always meat.',
          'The rout takes about two minutes.',
        ],
        next: 'after',
      },
      after: {
        text: [
          'You escort the farmer\'s family home and ride back to town together at sunset, Brunhild sitting behind you on your horse because hers ran away.',
          'Her arms are wrapped around your waist. She\'s quiet for a long time.',
          '@brunhild When they took me, I was not afraid of dying. Knights are trained not to fear death.',
          '@brunhild I was afraid I would not see you again. I have no training for *that* fear. None at all.',
          'Her forehead comes to rest against the back of your shoulder.',
        ],
        choices: [
          { text: 'Put a hand over hers on your waist.', go: 'hand', aff: 8 },
          { text: '"You\'ll always see me again, Brunhild. I\'ll make sure of it."', go: 'promise', aff: 10 },
        ],
      },
      hand: {
        text: [
          'Her gauntleted fingers lace through yours. She doesn\'t say anything else for the whole ride. She doesn\'t have to.',
          'When you reach the town gates, she slides down from the horse, looks up at you, and says, very formally:',
          '@brunhild I find I have developed... *feelings.* This is extremely inconvenient. I shall require time to compose a proper response.',
          'She marches off. She walks into a lamppost. She keeps walking.',
        ],
        end: true,
      },
      promise: {
        text: [
          'She doesn\'t answer for a long time. Then, very quietly:',
          '@brunhild That is an oath. Do you know what an oath means to a knight?',
          '@you Everything.',
          '@brunhild ...Yes. Everything.',
          'Her arms tighten around you. You\'re fairly sure she\'s crying, very quietly, into your cloak. You pretend not to notice. She\'d want you to.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Brunhild sends you a formal letter, sealed with wax, inviting you to "a matter of the utmost personal significance" in the garrison chapel at midnight.',
          'The chapel is dark except for a single candle on the altar. Brunhild kneels before it in full ceremonial armor, the Steinhart blade laid across her knees. She rises as you enter.',
          '@brunhild {name}. I have spent many nights composing what I wish to say. I have written forty-one drafts. I have burned forty of them.',
          'She draws the sword, turns it around, and offers it to you hilt-first. Then she kneels.',
          '@brunhild I wish to swear myself to you. Not to the crown. Not to the garrison. To *you.* As your knight. Your sword. Your shield. Your... *beloved,* if you would have me.',
          'Her voice cracks on the last word. Her face is scarlet.',
          '@brunhild If you refuse, I shall understand. And then I shall ask you to kill me.',
        ],
        choices: [
          { text: 'Take the sword and knight her: touch each shoulder. "I accept."', go: 'accept', aff: 10 },
          { text: 'Lay the sword aside and kneel down in front of her, as an equal. [Might check 4]', check: { stat: 'might', dc: 4 }, pass: 'equal', fail: 'accept' },
        ],
      },
      accept: {
        text: [
          'You take the heavy blade and touch it gently to her right shoulder, then her left.',
          '@you I accept your oath, Dame Brunhild.',
          'She looks up at you with shining eyes.',
          '@brunhild Then, as your sworn knight... I request permission to kiss you.',
          '@you Permission granted.',
        ],
        next: 'night',
      },
      equal: {
        text: [
          'You set the sword down on the altar and kneel in front of her, so your eyes are level.',
          '@you I don\'t want a knight kneeling to me. I want a partner standing beside me.',
          'She stares at you. Then she laughs — a big, startled, helpless laugh that echoes off the chapel stones. Tenet forty-three, broken spectacularly.',
          '@brunhild That is not in the Code. That is not in *any* code. That is...',
          '@brunhild That is *better* than the Code.',
          'She takes your face in her gauntleted hands and kisses you.',
        ],
        aff: 14,
        next: 'night',
      },
      night: {
        text: [
          'Getting her out of ceremonial plate takes a very long time. There are forty-two buckles. She insists on naming each one. You both end up laughing so hard you have to sit down on the chapel floor.',
          'Her chambers are spartan and spotless — a narrow bed, a weapons rack, a polished shield — and, on a shelf in the corner, forty-two plushies in tiny knitted helmets, standing at attention.',
          '@brunhild Do not look at them. They are... on duty.',
          'She turns them all to face the wall. One by one. Very solemnly.',
          'Out of her armor she is all strength and nerves and hesitant tenderness, approaching you like a battle she is determined to win honorably, asking permission with grave formality at every step until you kiss her quiet. Then she stops asking, and simply *trusts* — which, you realize, is the bravest thing she has ever done.',
          '...',
          'In the gray light of dawn, you wake to find her already awake, watching you. She looks soft and unguarded and almost shy.',
          '@brunhild I have never been happier in my life. It is deeply undignified.',
          '@you Want me to kill you?',
          'She laughs, and pulls you closer.',
          '@brunhild Not today. Not for a very long time.',
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Brunhild marches up the festival hill in her dress uniform: polished silver, crimson cape, every medal gleaming. The crowd parts for her automatically.',
          'Then she reaches you and stops, and you notice that tucked into her breastplate, peeking out at the top, are the ears of a small stuffed bunny.',
          '@brunhild Sir Fluffington insisted on attending.',
          '@you Of course he did.',
          'She sits beside you on the grass with a great clank of armor. When the stars begin to fall, she watches with her chin held high — and then, slowly, she reaches out and takes your hand in front of the entire town.',
        ],
        next: 'vow',
      },
      vow: {
        text: [
          'A few of her recruits, nearby, gasp audibly. She ignores them.',
          '@brunhild For twenty years I have been steel all the way through. I believed it was the only way to be strong.',
          '@brunhild You taught me otherwise. That a knight\'s heart may be soft and still be unbreakable.',
          '@brunhild I love you, {name}. I say it before the stars and the town and my recruits and Sir Fluffington. Let them all bear witness.',
          'She kisses you under the falling stars. Somewhere behind you, a recruit faints.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'Dame Brunhild is promoted to Knight-Commander of the Realm. At her investiture, before the King and the whole court, she insists that you stand beside her rather than behind. The court is scandalized. The King shrugs and allows it.',
          'She adds a one-hundred-and-thirteenth tenet to the Knight\'s Code. It reads: *"A knight shall protect small soft things, and shall not be ashamed of it."* Within a year, every barracks in the kingdom has a kitten.',
          'The plushie room is no longer locked. It now contains ninety-six plushies, all in tiny helmets, and one very fat orange cat named Sir Pounce, who outranks most of the garrison.',
          'She still says "just kill me" when she\'s embarrassed. You still say "not today." It has become, somehow, the way you say *I love you* in public.',
          'In private, she just says it plainly. Every night. With perfect posture.',
        ],
        ending: 'brunhild',
      },
    },
  },
});
