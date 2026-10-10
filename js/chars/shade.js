FL.addCharacter({
  id: 'shade',
  name: 'Shade',
  short: 'Shade',
  trope: 'Kuudere Assassin',
  color: '#8a93c9',
  favStat: 'wits',
  endingTitle: 'The Quiet Blade Retires',
  teaser: 'A shadow on a rooftop that you swear wasn\'t there a second ago. It\'s gone when you blink.',
  blurb: 'A masked assassin of the Silent Guild. Flat voice, flat expression, terrifying competence. She speaks in short reports and claims to feel nothing. Her one known weakness: honey cakes. She is very interested in clever people, for professional reasons. Probably.',
  schedule: ['square', 'docks', ['noble', 'square']],
  gifts: { love: ['cakes'], like: ['dagger', 'tea', 'chocolate'], hate: ['perfume', 'roses'] },
  giftLines: {
    love: ['She stares at the honey cakes. She stares for a long time. Then she pulls her mask down just far enough to eat one in a single bite.', '@shade ...', '@shade Acceptable. Highly acceptable. You have located my weakness. This is a serious tactical failure on my part.', 'Her ears are pink.'],
    like: '@shade Useful. Thank you. I will add it to my equipment.',
    neutral: '@shade ...I do not understand the purpose of this object. I will keep it until I do.',
    hate: ['@shade Strong scent. Highly visible colors. This would compromise my position from forty paces.', '@shade ...You intended it kindly. I will dispose of it kindly.'],
  },
  talk: [
    ['She drops from a rooftop and lands silently beside you.', '@shade Report: You were followed by two pickpockets today. They have been dealt with. Not fatally. They are hanging from a flagpole.'],
    ['@shade You blink fifteen times per minute. When you are nervous, twenty-two. Currently: twenty-one.', '@shade ...Am I making you nervous?'],
    ['@shade I have no feelings. I am a blade in the dark. ...That cat is very fluffy. Please do not tell anyone I stopped to look at it.'],
    ['@shade My name is not Shade. Shade is a designation. My real name was erased by the Guild when I was twelve.', '@shade I do not miss it. ...I sometimes wonder what it was.'],
    ['@shade Small talk. You enjoy it. I am attempting it. ...The weather is weather today. Correct?'],
    ['@shade I counted the exits in the tavern you visited last night. Nine. You sat with your back to all of them. Please stop doing that. It is distressing to watch.'],
  ],
  afterTalk: [
    ["A honey cake appears in your pocket. You didn't see her. You never see her.", "A note is pinned to it: *For later. Also: the attic. Tonight. — S.*"],
    ["@shade I attempted to purchase a dress today. The shopkeeper asked what it was for. I said, \"Reconnaissance.\" ...I bought three."],
    ["She drops from a rooftop and lands beside you, closer than strictly necessary.", "@shade Status report: I have been thinking about you at a rate of approximately once every forty seconds. This is a severe operational concern."],
    ["@shade I know the location of every exit in this town. I have recently discovered that I do not want to use any of them. That is new."],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'You\'re crossing the square when the hair on the back of your neck stands up. Then you feel it: cold steel resting lightly against your throat, and a body pressed silently against your back.',
          '@shade Do not move. Do not speak. State your name.',
          '@you ...You told me not to speak.',
          'A pause.',
          '@shade ...Valid point. You may speak only to state your name.',
        ],
        aff: 10,
        choices: [
          { text: 'State your name, calmly.', go: 'calm' },
          { text: 'Notice her reflection in the fountain and figure out her angle. [Wits check 1]', check: { stat: 'wits', dc: 1 }, pass: 'spot', fail: 'spot_fail' },
          { text: '"Is this how you say hello to everyone?"', go: 'hello' },
        ],
      },
      calm: {
        text: [
          '@you {name}.',
          'The blade withdraws instantly.',
          '@shade Not my target. Wrong description. Apologies for the inconvenience.',
          'You turn around. She\'s small, slim, wrapped in dark grey leathers, face hidden behind a black cloth mask. Only her eyes show: a pale, cool lavender, entirely without expression.',
        ],
        aff: 3,
        next: 'name',
      },
      spot: {
        text: [
          'In the fountain\'s ripples you can see her: small, grey-clad, left-handed, standing on her toes because you\'re taller than she expected.',
          '@you You\'re left-handed, and you\'re on tiptoe. If I stepped back now, you\'d lose your balance.',
          'A long, long silence.',
          '@shade ...Correct. Observant. That is very irritating.',
          'The blade withdraws. When you turn, her lavender eyes are studying you over a dark cloth mask with what might be — very faintly — interest.',
        ],
        aff: 7,
        next: 'name',
      },
      spot_fail: {
        text: [
          'You try to look for her reflection in the fountain. All you see is a pigeon looking judgmental.',
          '@shade You are looking at the pigeon. The pigeon is not the threat.',
          'The blade withdraws. You turn around to find a small woman in dark leathers and a black cloth mask, watching you with flat lavender eyes.',
        ],
        next: 'name',
      },
      hello: {
        text: [
          '@shade No. Most people do not get a hello. Most people get a goodbye.',
          'The blade withdraws. She steps in front of you: small, masked, lavender-eyed.',
          '@shade You are not my target. You are, however, very calm for someone with a knife at their throat. Noted.',
        ],
        aff: 5,
        next: 'name',
      },
      name: {
        text: [
          '@shade Designation: Shade. Silent Guild. I am currently on assignment in Clichéton.',
          '@you Are you allowed to just tell people that?',
          '@shade No. But no one ever believes me.',
          'She tilts her head, studying you.',
          '@shade You are an anomaly. I will be observing you. For security reasons.',
          'And then she\'s gone. Not walked away — *gone*, between one blink and the next.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'A note appears in your pocket. You have no idea how. *Rooftop. Clocktower. Sunset. Bring snacks. — S.*',
          'She\'s crouched on the clocktower roof, perfectly still, watching the street below. She doesn\'t look at you when you climb up.',
          '@shade Stakeout. A smuggler is meeting a contact somewhere in that market tonight. I need a second pair of eyes. Yours are adequate.',
          '@you Is that a compliment?',
          '@shade It is a factual assessment. ...It is also a compliment.',
          'You settle in beside her. Below, the market crowd swirls like a river.',
        ],
        choices: [
          { text: 'Scan the crowd methodically for anything out of place. [Wits check 2]', check: { stat: 'wits', dc: 2 }, pass: 'spot_win', fail: 'spot_fail' },
          { text: 'Offer her a honey cake from your pack.', go: 'cake', aff: 6 },
        ],
      },
      spot_win: {
        text: [
          'It takes an hour. Then you see it: a man buying apples who doesn\'t eat apples — he hands each one to a woman at the next stall without looking at her. Something glints inside the third apple.',
          '@you There. The apple seller and the woman in green. The apples are hollow.',
          'Shade follows your gaze. Her eyes widen a fraction of a millimeter.',
          '@shade ...Correct. I missed that. I do not miss things.',
          'She drops off the roof. Thirty seconds later, the smuggler is unconscious and the woman in green is tied to a lamppost with her own scarf. Shade reappears beside you without a hair out of place.',
          '@shade Mission complete. Your contribution was... significant.',
        ],
        aff: 8,
        next: 'cakes',
      },
      spot_fail: {
        text: [
          'You stare at the crowd for an hour. You spot nothing except a dog stealing a sausage.',
          'Shade, however, suddenly drops off the roof. Thirty seconds later a smuggler is unconscious in an alley. She reappears beside you.',
          '@shade Mission complete. You were... moral support.',
          '@you Is that useful?',
          '@shade ...Unexpectedly, yes.',
        ],
        aff: 4,
        next: 'cakes',
      },
      cake: {
        text: [
          'She freezes. Her eyes lock on the honey cake. She looks away. She looks back.',
          '@shade I am on duty.',
          '@you It\'s just a cake.',
          '@shade ...',
          'She pulls her mask down just far enough and eats it in two bites. For a moment — just a moment — her flat expression wavers, and she looks like a completely different person. Younger. Happier.',
          '@shade That was a tactical error. I am now distracted. If the smuggler appears, it is your fault.',
          'The smuggler appears. She catches him anyway, in about four seconds.',
        ],
        next: 'cakes',
      },
      cakes: {
        text: [
          'Afterward, you sit together on the edge of the roof as the city lights come on below. Your legs dangle over the drop. Hers are tucked neatly under her.',
          '@shade May I ask a question?',
          '@you Sure.',
          '@shade Why do you talk to me? I am an assassin. I have no feelings. I am not... pleasant company.',
        ],
        choices: [
          { text: '"Because I think you\'re lonely."', go: 'lonely', aff: 7 },
          { text: '"Because you\'re fun. In a terrifying way."', go: 'fun', aff: 6 },
        ],
      },
      lonely: {
        text: [
          'She doesn\'t answer for a long time. A bat swoops past.',
          '@shade ...That is not a feeling I was trained to have.',
          '@you That\'s not the same as not having it.',
          'She looks at you sideways. Then, very deliberately, she shifts an inch closer, until her shoulder just barely touches yours.',
          '@shade Hypothesis: proximity reduces loneliness. Testing.',
        ],
        end: true,
      },
      fun: {
        text: [
          '@shade Fun.',
          'She says the word like she\'s tasting it.',
          '@shade No one has called me fun. They call me "that one," and "oh gods," and occasionally "please, I have a family."',
          '@shade I will try to be more fun. ...Not with the knives.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'There\'s a soft knock on your window. On the third floor.',
          'You open it. Shade is clinging to the sill, one-handed. Her other arm is clutched against her side. Her grey leathers are dark and wet.',
          '@shade Apologies. I require assistance. I did not know where else to go.',
          'You pull her in. She\'s bleeding from a long cut across her ribs. Up close, through the mask, you can see she\'s very pale.',
          '@shade An ambush. Six of them. I defeated five. The sixth was... lucky.',
        ],
        choices: [
          { text: 'Clean and stitch the wound carefully. [Wits check 3]', check: { stat: 'wits', dc: 3 }, pass: 'stitch_win', fail: 'stitch_fail' },
          { text: 'Run for the Temple healers.', go: 'healer' },
        ],
      },
      stitch_win: {
        text: [
          'You boil water, find clean cloth, thread a needle. You work slowly and precisely, the way the library\'s medical texts described. She doesn\'t flinch once — not when the alcohol touches the wound, not when the needle goes in.',
          'But her hand finds yours on the bedsheet and grips it, very tightly.',
          'When it\'s done, the stitches are neat and even. She inspects them with professional interest.',
          '@shade ...Your work is better than the Guild physician\'s. You are full of anomalies.',
        ],
        aff: 8,
        next: 'feeling',
      },
      stitch_fail: {
        text: [
          'You do your best. The stitches are uneven and slightly crooked. She watches you the whole time with flat, unreadable eyes.',
          '@shade ...That will leave a scar.',
          '@you Sorry.',
          '@shade Do not apologize. I have many scars. This one will be the first one I do not mind.',
        ],
        aff: 5,
        next: 'feeling',
      },
      healer: {
        text: [
          'She grabs your wrist before you can reach the door.',
          '@shade No. No healers. They would report it. The Guild would know I was weak.',
          '@shade ...Please. Just you.',
          'It\'s the first time you\'ve ever heard her say *please.* You stay. You stitch the wound as best you can, and she holds your hand the whole time.',
        ],
        aff: 6,
        next: 'feeling',
      },
      feeling: {
        text: [
          'She lies on your bed afterward, staring at the ceiling, her mask still on.',
          '@shade I must report a malfunction.',
          '@you A malfunction?',
          '@shade When I was fighting the sixth man, I was not thinking about the mission. I was thinking: *if I die here, I will not see {name} tomorrow.* And then my chest became very tight. Heart rate elevated. Breathing irregular.',
          '@shade It is happening again now. Do you think I was poisoned?',
        ],
        choices: [
          { text: '"I don\'t think it\'s poison, Shade."', go: 'not_poison', aff: 8 },
          { text: 'Gently lower her mask. "Can I see your face?"', go: 'mask', aff: 10 },
        ],
      },
      not_poison: {
        text: [
          '@shade Then what is it?',
          '@you I think... it\'s the feeling you weren\'t trained to have.',
          'She is silent for a very long time.',
          '@shade ...That is far more dangerous than poison.',
          'She falls asleep there, on your bed, her hand still holding yours. You don\'t let go until morning.',
        ],
        end: true,
      },
      mask: {
        text: [
          'She tenses — every muscle coiled — and you stop, waiting. After a long moment, she gives the smallest nod.',
          'You lower the mask. Underneath, she\'s younger than you expected: a sharp little chin, a faded scar across one cheek, a small serious mouth. She\'s flushed pink from her nose to her ears.',
          '@shade ...No one has seen my face in nine years. This is a severe breach of protocol.',
          '@you You\'re beautiful.',
          'She immediately pulls the blanket over her head.',
          '@shade Malfunction worsening. Please stop talking.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'She\'s waiting for you on the clocktower roof at midnight. Her mask is gone. Her grey leathers are gone too, replaced with a simple dark dress that looks like she bought it this morning and has been staring at it ever since.',
          '@shade I have resigned from the Silent Guild.',
          '@you You... can do that?',
          '@shade Technically no. Technically they will now send people to kill me. I have prepared. They will be very disappointed.',
          'She stands up and faces you. Her hands are fidgeting at her sides — the first time you\'ve ever seen her hands do anything that wasn\'t precise.',
          '@shade I have spent nine years being a blade. I would like to try being a person. I have identified the person I would like to try it with. It is you.',
        ],
        choices: [
          { text: '"I\'d like that more than anything."', go: 'yes', aff: 10 },
          { text: '"What does being a person look like to you?" [Wits check 4]', check: { stat: 'wits', dc: 4 }, pass: 'list', fail: 'yes' },
        ],
      },
      list: {
        text: [
          'She blinks. Then she pulls a folded paper from a pocket. It\'s a list. Of course it\'s a list.',
          '@shade One. Eat honey cakes without hiding. Two. Learn my real name, or choose a new one. Three. Sleep with my back to a door. Four. Laugh, at least once.',
          '@shade Five.',
          'She stops. She looks at you. Her face goes red.',
          '@shade Five is classified.',
          '@you What\'s number five, Shade?',
          '@shade ...Number five is you.',
        ],
        aff: 15,
        next: 'yes',
      },
      yes: {
        text: [
          'She steps forward, rises onto her toes — and kisses you, very carefully, as if it were a lock she was trying to pick.',
          'She pulls back and studies your face intently.',
          '@shade Was that correct? I have only read about it. In reports.',
          '@you Want to try again? For thoroughness?',
          '@shade ...Yes. For thoroughness.',
          'The second time is less careful. The third time, she makes a soft, surprised noise against your mouth, and her hands knot in your shirt, and all of her clinical precision dissolves.',
        ],
        next: 'night',
      },
      night: {
        text: [
          "Her safehouse is a tiny attic room hidden behind a false wall. It has a bed, a weapons rack and a jar of honey cakes. She locks the door, hesitates, unlocks it, then locks it again.",
          "@shade I am... nervous. I have never been nervous before. I have walked into a room of twenty armed men without being nervous.",
          "@you We can go as slow as you want.",
          "@shade ...Slow. Yes. Slow is good.",
          "She approaches it the only way she knows how: like a mission. She disarms first. Two knives from her sleeves, one from her boot, one from her hair, one from somewhere you genuinely didn't see. Each one goes on the rack with a click. Then she starts on your buttons with steady fingers and total focus.",
          "@shade Report each sensation. I need data.",
          "You report. She listens with total concentration and adjusts accordingly, and she's devastatingly effective. She finds every sensitive point the way she'd find the gaps in a suit of armor. She marks each one with her mouth and files it away. She has, it turns out, studied anatomy *very* thoroughly.",
          "Then you turn the tables. You slide your hands under her leathers and trace the scars along her ribs, slowly, one by one. The steady breathing she has trained for nine years finally breaks.",
          "@shade That — that is not — I cannot catalogue this — *{name}* —",
          "She stops cataloguing. She simply *feels*, maybe for the first time in her life. She's not silent at all...",
          "...",
          "In the small hours of the morning she lies with her head on your chest and her back to the door.",
          "You feel her shaking against you, and for a moment you think she's crying.",
          "She's laughing, softly and helplessly, as if she's just discovered how.",
          "@shade Number four. Complete.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake up because someone is watching you. It's the same prickle on the back of your neck you felt the day you met her.",
          "Shade is sitting on the windowsill in one of your shirts, knees drawn up, a honey cake in each hand. She is not wearing her mask. The early light makes her look very young and very soft.",
          "@shade Report: you slept seven hours and twelve minutes. You stole the blanket four times. I allowed it.",
          "@shade Additional report: I slept. Actually slept. Facing away from the door. For the first time in nine years.",
          "She stares at the honey cake.",
          "@shade I do not know what to do with this information. Or with my face. It keeps doing this.",
          "She's smiling. She can't seem to stop.",
        ],
        choices: [
          { text: "\"Keep doing it. It looks good on you.\"", go: "smile", aff: 6 },
          { text: "\"Come back to bed. I'll keep watch this time.\"", go: "watch", aff: 6 },
          { text: "Steal one of her honey cakes.", go: "steal", aff: 5 },
        ],
      },
      smile: {
        text: [
          "@shade ...Acknowledged.",
          "She tries to make her face stern. She fails completely. She pulls your shirt up over her nose instead, so only her eyes show, and they're crinkled at the corners.",
          "@shade This is worse than the mask. I can't hide anything in this.",
        ],
        end: true,
      },
      watch: {
        text: [
          "She considers the offer with total seriousness. Then she crosses the room and slides back under the blanket beside you, her back against your chest. She takes your arm and places it over her waist, precisely, like adjusting a strap.",
          "@shade You will wake me if anything moves.",
          "@you Promise.",
          "@shade ...I trust you. That is also new.",
          "She's asleep in under a minute. You keep watch, and absolutely nothing moves, and it's one of the best hours of your life.",
        ],
        end: true,
      },
      steal: {
        text: [
          "You reach across and take one of her honey cakes. She doesn't stop you.",
          "There's a long pause.",
          "@shade I let you do that. Do you understand the significance? I have killed men for less. Well. Not killed. Very seriously inconvenienced.",
          "Then she leans down and kisses the honey off your lips, very thoroughly.",
          "@shade Retrieval complete.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'You don\'t see Shade anywhere on the festival hill. And then a hand slips into yours, and she\'s simply *there*, at your side, as if she always has been.',
          'She\'s wearing a pale lavender dress that matches her eyes. Her face is bare. She is carrying a basket. It\'s full of honey cakes.',
          '@shade Seventeen Guild operatives attempted to stop me from attending tonight. They are currently tied up in the cellar of the Tipsy Wyvern. Bettina has agreed to keep them until morning.',
          '@shade I did not want anything to interrupt.',
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'You watch the stars fall together. She eats honey cakes openly, in front of everyone, and doesn\'t hide it once.',
          '@shade I have decided on my name.',
          '@you Yeah?',
          '@shade Wren. It is a small, quiet bird. It sings very loudly when it is happy.',
          'She looks up at you, and she smiles — a real smile, small and crooked and blinding.',
          '@shade I would like you to be the first to say it.',
          '@you Wren.',
          'She kisses you under the falling stars, and she doesn\'t check the exits once.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'The former best assassin in the Silent Guild now runs a bakery on Market Street. It is called *The Quiet Crumb*, and its honey cakes are the finest in the kingdom.',
          'The Silent Guild stopped sending people after the fourth group was found tied up in a bundle in the town square with a polite note and a box of pastries each.',
          'Wren still counts exits. She still catches pickpockets without looking up from the dough. But she laughs now — often, loudly, like a little bird — and she sleeps every night with her back to the door and her head on your shoulder.',
          'Her list hangs framed on the bakery wall. Every item has been checked off.',
          'Number five has been checked off many, many times.',
        ],
        ending: 'shade',
      },
    },
  },
});
