FL.addCharacter({
  id: 'mira',
  name: 'Mira Hartwell',
  short: 'Mira',
  trope: 'Tsundere Guild Receptionist',
  color: '#ff8f5a',
  favStat: 'might',
  endingTitle: 'Paperwork of the Heart',
  teaser: 'A twin-tailed receptionist is stamping forms with the fury of a thousand suns.',
  blurb: 'The Adventurers\' Guild\'s most efficient — and most terrifying — receptionist. Short-tempered, sharp-tongued, allergic to sincerity. She insists she doesn\'t care what happens to you out there. She has memorized every quest you\'ve taken.',
  schedule: ['guild', 'guild', 'tavern'],
  gifts: { love: ['novel', 'plushie'], like: ['cakes', 'chocolate', 'tea'], hate: ['steak', 'fish'] },
  giftLines: {
    love: ['She snatches it out of your hands and hides it under the counter so fast it\'s a blur.', '@mira I-I don\'t even LIKE these! Who told you?! I\'m only keeping it so you don\'t embarrass yourself giving it to someone else! ...Thank you. *Shut up.*'],
    like: '@mira Hmph! I guess I\'ll take it. Since you went to all the trouble. Not that I asked! ...It\'s good, okay?',
    neutral: '@mira What is this, a bribe? Bribing a Guild official is a Class C offense! ...I\'ll let it slide. This once.',
    hate: ['@mira EW! Why would you — this is *raw!* This is a professional workplace!', 'She flings it into the bin and glares at you over her spectacles.'],
  },
  talk: [
    ['@mira You again? Don\'t you have a quest or something? Not that I care. I just don\'t want you cluttering up my lobby.', 'She slides a quest scroll across the desk. It\'s the best-paying one on the board. She doesn\'t make eye contact.'],
    ['@mira Your form from last week had *four* spelling errors. Four! I fixed them. Not for you! For the *archives.*'],
    ['@mira You came back without any injuries this time. Good. I mean — the Guild\'s medical budget is very tight! That\'s all!'],
    ['@mira Do you know how many idiots die in their first month as adventurers? Thirty percent! So don\'t you dare be part of that thirty percent, you hear me?!', '...', '@mira For STATISTICAL reasons.'],
    ['She\'s eating lunch at her desk: a sad little sandwich.', '@mira What? Receptionists eat. We\'re people. Stop staring. ...Do you want half?'],
    ['@mira My twin-tails? They are a *professional hairstyle*, thank you very much. They are aerodynamic. ...What do you mean they\'re cute?! They are NOT cute! Go away!'],
    ['@mira I heard you took down a whole pack of goblins yesterday. ...Not bad. For a rookie. Don\'t let it go to your head!'],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'The Adventurers\' Guild registration desk is a fortress of paperwork. Behind it, a young woman with fiery orange twin-tails and round spectacles is stamping forms so hard the desk shakes.',
          'You fill out the registration form and hand it over. She reads it. Her eye twitches.',
          '@mira "Class: Romantic Lead." What is this. What is *this.*',
          '@mira "Special Skills: Being Charming." "Previous Experience: Arriving in Town." You put "yes" in the box marked "Sex"!',
          'She slams the form on the desk and glares at you over her spectacles.',
          '@mira Are you mocking me? Do you think this job is a JOKE?',
        ],
        aff: 10,
        choices: [
          { text: '"Sorry! I\'ll redo it properly. Can you help me?"', go: 'sorry' },
          { text: '"Do you always get this worked up, or am I special?"', go: 'special' },
          { text: 'Flex. "Just put \'Fighter\'. Look at these arms." [Might check 1]', check: { stat: 'might', dc: 1 }, pass: 'flex_win', fail: 'flex_fail' },
        ],
      },
      sorry: {
        text: [
          '@mira ...F-fine. Since you asked *properly.* Not because you\'re hopeless or anything.',
          'She spends twenty minutes walking you through every single field, muttering the whole time. She draws little arrows. She underlines things. She is, unmistakably, enjoying herself.',
        ],
        aff: 5,
        next: 'name',
      },
      special: {
        text: [
          'Her face goes as red as her hair.',
          '@mira S-SPECIAL?! You are not special! You are a *nuisance!* A rookie nuisance with terrible handwriting!',
          '@mira I get worked up at everyone equally! ...Mostly.',
        ],
        aff: 4,
        next: 'name',
      },
      flex_win: {
        text: [
          'You roll up a sleeve. Her eyes flick down to your arm, and stay there for a fraction too long.',
          '@mira ...I-I suppose that\'s *adequate* for a Fighter classification. Barely. Put your sleeve down! This is a place of business!',
          'She writes "Fighter" on the form in very neat, very fast letters, not looking at you.',
        ],
        aff: 5,
        next: 'name',
      },
      flex_fail: {
        text: [
          'You roll up a sleeve and flex. Nothing much happens.',
          '@mira ...I\'m putting you down as "Civilian (Optimistic)."',
        ],
        aff: 1,
        next: 'name',
      },
      name: {
        text: [
          '@mira Mira Hartwell, Senior Registrar. If you need anything — quests, rankings, healing reimbursements — you come to *me*. Not the other desks. They\'re incompetent.',
          '@you {name}. Nice to meet you, Mira.',
          '@mira Hmph. We\'ll see if it\'s nice. Most rookies don\'t last a month.',
          'She stamps your form: APPROVED. Then, when she thinks you\'re not looking, she draws a tiny heart next to the stamp, stares at it in horror, and scribbles it out furiously.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'You\'re halfway through a routine quest — clearing a nest of oversized spiders from an old mill — when you hear a shriek from the rafters.',
          'It\'s Mira. In full receptionist uniform. Hanging upside down in a spider web.',
          '@mira DON\'T LOOK AT ME!',
          '@you Mira? What are you doing here?!',
          '@mira I was — conducting a *field audit!* To verify quest conditions! It\'s standard procedure! It\'s definitely not because I was worried about you taking a C-rank quest at your level!',
          'A very large spider is approaching her with interest.',
        ],
        choices: [
          { text: 'Charge the spider. [Might check 2]', check: { stat: 'might', dc: 2 }, pass: 'save_win', fail: 'save_messy' },
          { text: 'Distract the spider by throwing your lunch at it.', go: 'save_lunch' },
        ],
      },
      save_win: {
        text: [
          'You charge, sword-first. The spider never stands a chance. One clean strike, and it flees into the darkness, hissing.',
          'You cut Mira down and catch her as she falls. For one long moment, she\'s in your arms, spectacles askew, staring up at you.',
          '@mira ...',
          '@mira PUT ME DOWN. Immediately. That was — completely unnecessary — I had it under control.',
          'She doesn\'t struggle very hard.',
        ],
        aff: 8,
        next: 'ankle',
      },
      save_messy: {
        text: [
          'You charge. You trip on a web. You slide across the floor on your face directly into the spider, which is so startled it flees.',
          'Then you cut Mira down, and she lands on top of you.',
          '@mira ...That was the least heroic rescue in Guild history. I\'m writing it up.',
          '@mira ...But thank you.',
        ],
        aff: 5,
        next: 'ankle',
      },
      save_lunch: {
        text: [
          'You hurl your sandwich across the room. The spider pounces on it with eight-legged delight.',
          'While it\'s distracted, you climb up and cut Mira free.',
          '@mira That was my sandwich recipe! I gave you that recipe! I — you made it? You actually made it?',
          'For some reason, this seems to affect her more than the rescue.',
        ],
        aff: 6,
        next: 'ankle',
      },
      ankle: {
        text: [
          'Mira tries to stand and winces. Her ankle is twisted.',
          '@mira It\'s fine! I\'ll walk! I\'m perfectly capable of — ow — ow ow ow.',
        ],
        choices: [
          { text: 'Offer to carry her on your back.', go: 'carry', aff: 7 },
          { text: 'Sit with her and bandage the ankle.', go: 'bandage', aff: 6 },
        ],
      },
      carry: {
        text: [
          '@mira You — absolutely not — this is a violation of — *fine.*',
          'You carry her all the way back to town on your back. She complains the entire way — about your posture, your sweat, the fact that people are staring. Her arms stay wrapped tight around your neck.',
          'Halfway home, the complaining stops. You realize she\'s fallen asleep, her cheek resting against your shoulder.',
          'She mumbles something into your collar. It sounds a lot like *idiot... don\'t get hurt...*',
        ],
        end: true,
      },
      bandage: {
        text: [
          'You kneel and take her foot gently in your lap. She goes rigid, then very red, as you unlace her boot.',
          '@mira Wh-what are you — that\'s my *foot* —',
          '@you I know. Hold still.',
          'You wrap the ankle carefully. She stops protesting. When you look up, she\'s watching you with an expression you\'ve never seen before — soft, unguarded.',
          'She notices you noticing, and it vanishes.',
          '@mira Your bandaging technique is sloppy. I\'ll send you a pamphlet.',
          'She sends you four pamphlets. They\'re hand-illustrated.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'Mira catches you as you come in from a quest, and drags you by the sleeve into the Guild\'s empty records room.',
          '@mira Here. Take it. Don\'t make it weird.',
          'She shoves a lunchbox into your hands. Inside: neatly cut sandwiches, rice balls, little sausages shaped like octopuses.',
          '@mira I made too much. By accident. It was going to go to waste! And you\'re always eating that terrible tavern food, and you look pale, and — it\'s *not* because I was thinking about you while I was cooking at six in the morning!',
          'She\'s scarlet to the tips of her ears.',
        ],
        choices: [
          { text: 'Eat the octopus sausage and say, "This is the best thing I\'ve ever tasted."', go: 'eat', aff: 8 },
          { text: '"You made these shapes by accident, too?"', go: 'tease', aff: 6 },
          { text: '"Have lunch with me?"', go: 'share', aff: 9 },
        ],
      },
      eat: {
        text: [
          'Her face does something complicated, like she\'s trying to frown and smile at the same time and failing at both.',
          '@mira O-of course it is. I\'m very good at cooking. Everyone knows that. ...Do you really mean it?',
          '@you Really.',
          '@mira ...I\'ll make you another one tomorrow. By accident.',
        ],
        next: 'rank',
      },
      tease: {
        text: [
          '@mira THE OCTOPUSES HAPPENED NATURALLY.',
          '@you Sausages don\'t naturally grow eight legs, Mira.',
          '@mira THEY DO IF YOU BELIEVE IN THEM.',
          'She buries her face in her hands. You hear a muffled sound that might be a laugh.',
        ],
        next: 'rank',
      },
      share: {
        text: [
          'She blinks.',
          '@mira I — I have a break in fifteen minutes. Not that I\'ll spend it with you specifically. I just happen to eat in this room. Sometimes.',
          'Fifteen minutes later she\'s sitting next to you on a crate of old files, sharing rice balls, and laughing at your story about the mimic that ate your boot.',
          'She has a nice laugh. You\'ve never heard it before.',
        ],
        next: 'rank',
      },
      rank: {
        text: [
          'She clears her throat and produces a small iron badge from her pocket.',
          '@mira Also. You\'ve been promoted. Rank C. I processed it myself. You earned it.',
          '@mira ...I\'m proud of you, okay? There! I said it! Are you happy?!',
        ],
        choices: [
          { text: '"Very. Thank you, Mira."', go: 'happy', aff: 6 },
          { text: 'Pull her into a hug.', go: 'hug', aff: 10 },
        ],
      },
      happy: {
        text: [
          '@mira Good. Then... good.',
          'She pins the badge on your collar herself, smoothing the fabric with her fingers a little longer than strictly necessary.',
        ],
        end: true,
      },
      hug: {
        text: [
          'She freezes like a startled cat. Then, slowly, her arms come up and wrap around you. She buries her face in your shoulder.',
          '@mira ...This is highly unprofessional.',
          '@you Want me to stop?',
          '@mira *Don\'t you dare.*',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'You come back late from a hard quest. A wyvern. You won, but your armor is scorched and there\'s a long cut along your arm.',
          'The Guild is closed. But a light is still on, and Mira is still at her desk, alone, surrounded by unstamped paperwork. She looks up when the door opens.',
          'For a second, her face crumples.',
          '@mira You — you\'re LATE. You were supposed to be back at *noon!* Do you know what time it is? Do you know how many times I checked the casualty reports? Seven! SEVEN TIMES!',
          'She storms around the desk, grabs your collar — and then she sees your arm, and all the fury drains out of her at once.',
          '@mira ...You\'re hurt. You stupid, *stupid*...',
          'Her voice cracks. Her spectacles are fogging up.',
        ],
        choices: [
          { text: '"I\'m okay, Mira. I\'m here."', go: 'here', aff: 8 },
          { text: '"Were you... worried about me?"', go: 'worried', aff: 6 },
          { text: 'Wipe the tears from under her spectacles.', go: 'tears', aff: 10 },
        ],
      },
      here: {
        text: [
          '@mira You\'re here. You\'re here. You\'re — *why do you always have to do the most dangerous quest on the board?!*',
          'She punches your chest weakly. Then she leaves her fist there, gripping your shirt.',
        ],
        next: 'confess',
      },
      worried: {
        text: [
          '@mira OF COURSE I WAS WORRIED, YOU IDIOT!',
          'It echoes off the rafters. She claps her hands over her mouth, horrified.',
          '@mira I — that wasn\'t — I meant *professionally* —',
          'But the dam has broken.',
        ],
        next: 'confess',
      },
      tears: {
        text: [
          'You gently lift her spectacles and wipe her tears with your thumb. She goes completely still.',
          '@mira ...Don\'t be nice to me right now. I can\'t — if you\'re nice to me I\'ll say something stupid.',
          '@you Say it anyway.',
        ],
        next: 'confess',
      },
      confess: {
        text: [
          '@mira I *like* you, okay?! I have liked you since the day you wrote "Romantic Lead" on your registration form, which was the stupidest thing I have ever read and I *kept it.* It\'s in my desk! I look at it on bad days!',
          '@mira I like you so much it makes me furious! Every time you go out that door I can\'t breathe until you come back! And I\'m terrible at saying it so I yell at you instead, and I\'m — I\'m sorry —',
          'She runs out of air. She stares at you, red-faced and trembling and utterly undone.',
        ],
        choices: [
          { text: 'Kiss her.', go: 'kiss', aff: 12 },
          { text: '"I like you too, Mira. I have for a long time."', go: 'too', aff: 10 },
        ],
      },
      too: {
        text: [
          '@mira ...You do?',
          '@you I do.',
          '@mira You\'re not just saying that because I\'m crying?',
          '@you I\'m saying it because it\'s true.',
          'And she grabs your collar and kisses *you*, hard enough to knock you back a step.',
        ],
        next: 'upstairs',
      },
      kiss: {
        text: [
          'You kiss her before she can say another word.',
          'She makes a startled little "mmph!" sound, and then her arms are around your neck and she\'s kissing you back like she\'s been saving it up for months — fierce, clumsy, completely without dignity.',
        ],
        next: 'upstairs',
      },
      upstairs: {
        text: [
          'When you finally come up for air, her spectacles are crooked and her twin-tails are a mess.',
          '@mira My — my apartment is upstairs. Above the Guild. I have bandages. For your arm. *Medical* reasons.',
          '@you Medical reasons.',
          '@mira Shut up and come upstairs.',
          'She does bandage your arm, very carefully. And then she sits in your lap and takes off her spectacles and, for the first time since you\'ve known her, says exactly what she wants in a small, clear voice, without yelling at all.',
          'It turns out that Mira Hartwell, Senior Registrar, is extremely thorough in every aspect of her life.',
          '...',
          'In the morning, you wake to find her already dressed for work, sitting on the edge of the bed, holding a form.',
          '@mira This is a Relationship Disclosure Form. Section 4, Paragraph 9 of the Guild Code. Staff must disclose relationships with registered adventurers.',
          'She\'s already filled it out. In the box marked "Nature of Relationship," she has written, very small: *I love them.*',
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Mira is waiting for you at the bottom of the festival hill. She\'s wearing a dress — an actual dress, pale orange, with flowers in her twin-tails — and she looks like she\'s about to fight someone.',
          '@mira Don\'t say anything about the dress.',
          '@you You look beautiful.',
          '@mira I SAID DON\'T SAY ANYTHING!',
          'She grabs your hand and drags you up the hill to the very best spot — she must have staked it out hours ago — and sits down on a blanket with a picnic basket. Octopus sausages, of course.',
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'When the stars begin to fall, she goes quiet. She leans her head on your shoulder.',
          '@mira Hey. {name}.',
          '@you Yeah?',
          '@mira I love you. There. I said it without yelling. I\'ve been practicing all week.',
          'Then she pulls a folded paper from her basket and hands it to you, not meeting your eyes.',
          '@mira Also, this is a marriage registration form. I\'ve pre-filled it. You just need to sign. Not now! Whenever! Or never! It\'s just — in case — *don\'t look at me like that!*',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'You sign it. Of course you sign it. She bursts into tears, then yells at you for making her cry, then kisses you in front of the entire Adventurers\' Guild, who all break into applause.',
          'She files the form herself. She gives it the most beautiful stamp she has ever stamped.',
          'These days you take fewer dangerous quests. When you do, she waits at her desk with a packed lunch and a glare. When you come home, she yells at you for being late — and then holds you so tight you can barely breathe.',
          'She still yells. She still blushes. But every morning, in her careful handwriting, she leaves you a note in your lunchbox.',
          'They all say the same thing. *Come home safe, idiot. I love you.*',
        ],
        ending: 'mira',
      },
    },
  },
});
