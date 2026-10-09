FL.addCharacter({
  id: 'lilette',
  name: 'Lilette',
  short: 'Lilette',
  trope: 'Succubus Who\'s Terrible at Seduction',
  color: '#ff5fa2',
  favStat: 'charm',
  endingTitle: 'Graduated With Honors (in Love)',
  teaser: 'A woman with little bat wings and a heart-tipped tail is trying to lean seductively against a pillar. She misses the pillar.',
  blurb: 'A first-year field student from the Infernal Academy of Seduction, sent to the mortal realm for her final exam: drain the life essence of one mortal with her irresistible wiles. She has no wiles. She has read every romance novel in existence and somehow understood none of them. She blushes at the word "ankle."',
  schedule: [null, 'noble', 'tavern'],
  gifts: { love: ['cakes'], like: ['plushie', 'perfume', 'novel', 'chocolate'], hate: ['candle'] },
  giftLines: {
    love: ['@lilette Honey cakes! For me?! A mortal is giving *me* treats? That\'s backwards! I\'m supposed to tempt *you!*', 'She eats one. Her tail curls into a happy spiral. Her little wings flutter so fast she lifts an inch off the ground.', '@lilette ...You\'re *very* tempting. Unfair. Unfair!'],
    like: '@lilette Oh! Oh, that\'s so sweet! Is this — is this a *seduction?* Are you seducing *me?* Is that allowed?!',
    neutral: '@lilette Oh, thank you! I\'ll, um, use this to... corrupt someone? Probably? I\'ll figure it out!',
    hate: ['She yelps and drops it, shaking her singed fingers.', '@lilette HOLY! It\'s *holy!* Ow ow ow! Why would you — oh, you didn\'t know! It\'s okay! I\'m fine! I\'m only a *little* on fire!'],
  },
  talk: [
    ['@lilette Hello, mortal. *Ahem.* Hello, *mortal.* Did that sound sultry? I\'ve been practicing on the mirror. The mirror said it sounded "congested."'],
    ['@lilette At the Academy, I got a D-minus in Smoldering Glances. The professor said I looked like I needed to sneeze.'],
    ['@lilette The book says to "trail a finger along your target\'s jawline." Hold still.', 'She trails a finger along your jaw. Then she squeaks and hides behind her wings.', '@lilette I DID IT. I DID THE THING. I NEED TO SIT DOWN.'],
    ['@lilette My roommate at the Academy drained *forty* mortals in her first week. I\'ve drained zero. I gave one a hug once. He seemed nice.'],
    ['@lilette Is it normal for mortals to smell this nice? Is that a trap? Is it a counter-seduction? You can tell me. I won\'t report you.'],
    ['@lilette Succubi aren\'t supposed to blush. It\'s in the handbook. Page one. I have never once made it past page one.'],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'The Tipsy Wyvern is roaring tonight. In a corner booth, under a red lantern, sits a woman who is clearly *trying* to look mysterious. Lavender skin, short pink hair, small curving horns, a pair of little bat wings, and a slender tail with a heart-shaped tip.',
          'She\'s wearing a very low-cut black dress that she keeps nervously tugging upward.',
          'She spots you. She takes a deep breath. She sashays toward you in a way that has clearly been rehearsed in a mirror, trips on her own tail, and spills an entire goblet of wine down your front.',
          '@lilette OH NO. Oh no oh no. I\'m so sorry! I meant to — I was going to say "Hello there, mortal, is your soul *available*" — and then I fell — oh, gods below, you\'re *soaked* —',
        ],
        aff: 10,
        choices: [
          { text: 'Laugh it off. "Well, that\'s one way to get my attention."', go: 'laugh' },
          { text: '"To answer your question — my soul\'s spoken for, but I\'m free for a drink." [Charm check 1]', check: { stat: 'charm', dc: 1 }, pass: 'line', fail: 'line_fail' },
          { text: '"Are you... a succubus?"', go: 'succubus' },
        ],
      },
      laugh: {
        text: [
          'She stares at you as you laugh. Then she starts giggling too, nervously, hiding her face in her hands.',
          '@lilette You\'re not angry? Everyone at the Academy gets angry when I spill things on them. Which is... often.',
        ],
        aff: 5,
        next: 'name',
      },
      line: {
        text: [
          'She freezes. Her mouth opens and closes. Her tail goes stiff as a poker.',
          '@lilette You — you *flirted back.* That\'s not supposed to — I\'m the — that\'s *my job!*',
          '@lilette ...Oh no. Was that good? That felt good. Is it supposed to feel good when someone else does it? This wasn\'t in the textbook.',
        ],
        aff: 7,
        next: 'name',
      },
      line_fail: {
        text: [
          '@you To answer your question — my soul is... um... for... sale? No — rent?',
          '@lilette You can *rent* souls?! Nobody told me that! I\'m going to fail so hard!',
        ],
        aff: 3,
        next: 'name',
      },
      succubus: {
        text: [
          '@lilette Shh! SHH! You\'re not supposed to know! I\'m in *disguise!*',
          '@you You have wings.',
          '@lilette ...I have *very discreet* wings.',
        ],
        aff: 4,
        next: 'name',
      },
      name: {
        text: [
          'She produces a handkerchief and dabs at your shirt, which makes it worse.',
          '@lilette I\'m Lilette. Of the Infernal Academy of Seduction. Third-year. Well, first-year. Third time. I\'m here for my final exam: I have to seduce one mortal and drain their life essence.',
          '@lilette And you are?',
          '@you {name}. And am I going to be your exam?',
          'She looks at you with wide eyes. Then at your wine-soaked shirt. Then back at your face.',
          '@lilette ...Maybe? Would that be okay? I promise I\'m really bad at it.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Lilette ambushes you in the Moonlit Gardens with a book in one hand and a clipboard in the other.',
          '@lilette Okay. I have a proposal. I need to practice. A lot. And you\'re the only mortal who hasn\'t run away. So — would you be my practice target?',
          '@lilette I won\'t drain you! I promise! I\'ll only *pretend* to drain you! I just need to practice the steps!',
          'She opens the book: *The Succubus\'s Handbook of Irresistible Allure, 4th Edition.* The pages are covered in her own nervous little notes. *What does "sultry" mean?? Ask someone.*',
          '@lilette Step one: The Smoldering Glance.',
          'She smolders at you. It looks like she\'s trying to read very small print.',
        ],
        choices: [
          { text: 'Teach her a *real* smoldering glance. [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'teach', fail: 'teach_fail' },
          { text: '"Honestly? You\'re cuter when you just smile."', go: 'smile', aff: 8 },
        ],
      },
      teach: {
        text: [
          'You show her. Relax the eyes. Hold the gaze a beat too long. A slow smile, just at the corner of the mouth. Then look away, and back.',
          'You demonstrate on her. Her tail goes rigid. Her wings snap open. She drops the book.',
          '@lilette OH. Oh, *that\'s* what that means. Oh, I understand the *whole chapter* now.',
          'She tries it on you. It\'s still clumsy. But it works a little. Mostly because she\'s blushing so hard.',
        ],
        aff: 8,
        next: 'date',
      },
      teach_fail: {
        text: [
          'You try to demonstrate. Somewhere along the way, your smolder turns into a squint. Lilette squints back. You squint at each other like two very confused owls.',
          'Then you both crack up.',
          '@lilette You\'re as bad as me! That\'s so *reassuring!*',
        ],
        aff: 5,
        next: 'date',
      },
      smile: {
        text: [
          'She blinks at you. Then she smiles — a real one, wide and crooked and a little shy, fangs showing.',
          '@lilette ...Like this?',
          '@you Exactly like that.',
          'She writes it down on her clipboard: *Step 1: just smile?? (it worked???)*',
        ],
        next: 'date',
      },
      date: {
        text: [
          'Step two is "The Romantic Stroll." Step three is "The Accidental Brush of Hands." Step four is "The Shared Dessert." By step five, she\'s stopped reading the book entirely.',
          'You spend the whole afternoon wandering the gardens. She tells you about the Infernal Academy — the terrible food, the strict professors, her roommate who keeps stealing her hairpins. You tell her about your journey to Clichéton. She laughs at all the right places.',
          'At sunset, she suddenly stops and checks her clipboard in a panic.',
          '@lilette Wait. I think — I think I accidentally went on a *date* with you. A *real* one. That\'s not in the curriculum!',
        ],
        choices: [
          { text: '"Did you have fun?"', go: 'fun', aff: 6 },
          { text: '"Want to go on another one?"', go: 'another', aff: 8 },
        ],
      },
      fun: {
        text: [
          '@lilette ...So much fun. More fun than anything. Ever. Is that bad? Am I a bad succubus?',
          '@you You\'re a very good *Lilette.*',
          'Her tail curls into a heart shape. She doesn\'t seem to notice.',
        ],
        end: true,
      },
      another: {
        text: [
          'Her wings flutter so hard she lifts off the ground and has to grab your arm to come back down.',
          '@lilette YES. I mean. Yes. For practice. *Strictly* for practice.',
          'She writes it on the clipboard: *Step 6: another date!!! (for practice) (not for practice)*',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'A pillar of hellfire erupts in the middle of the tavern. When the smoke clears, a tall, imperious succubus in a severe black gown and spectacles is standing beside your table, holding a quill and a ledger.',
          '@dean Lilette. Your exam period ends in three days. You have drained precisely *zero* mortals. Explain.',
          'Lilette is cowering behind your shoulder, her wings wrapped around herself like a blanket.',
          '@lilette I — I\'ve been practicing, Dean! With this one! I\'ve been doing *so* much practice!',
          '@dean Then *drain* them. Now. In front of me. Or you fail, and you are recalled to the Abyss permanently. Third strike.',
          'Lilette looks at you. Her eyes are wide and wet.',
        ],
        choices: [
          { text: '"Go ahead, Lilette. I trust you."', go: 'trust', aff: 10 },
          { text: 'Stand up to the Dean. "She doesn\'t need to drain anyone to be worth something." [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'defend', fail: 'trust' },
        ],
      },
      trust: {
        text: [
          'Lilette leans in, trembling. She puts her hands on your face. She closes her eyes — and kisses you.',
          'It\'s supposed to be the draining kiss. You can feel something stirring, a warm tingling pull. But it\'s gentle, so gentle, and after a moment she makes a soft little sound and stops pulling entirely, and it just becomes... a kiss.',
          'She pulls away and looks at the Dean, tears spilling down her cheeks.',
          '@lilette I can\'t. I *can\'t.* I don\'t want to take anything from them. I just want to — to give them things. Honey cakes and hugs and... *everything.*',
          '@lilette Fail me. I don\'t care.',
        ],
        next: 'verdict',
      },
      defend: {
        text: [
          'You stand. You look the Dean in the eye.',
          '@you She\'s the kindest person I\'ve met in this town. She makes everyone around her happier. Isn\'t that what seduction\'s supposed to be about? Making people *want* to be near you?',
          '@you Because I do. More than anything.',
          'The Dean raises a sharp eyebrow. Lilette makes a small, strangled noise.',
          '@lilette You... want to be near me? *More than anything?*',
        ],
        aff: 12,
        next: 'verdict',
      },
      verdict: {
        text: [
          'Dean Vexaria looks at Lilette for a long moment. Then she looks at you. Then she adjusts her spectacles and makes a note in her ledger.',
          '@dean Hmph. Interesting. The life essence of a mortal *taken* sustains a succubus for a week. The life essence of a mortal *freely given*, out of love, sustains her for a lifetime.',
          '@dean It is the rarest form of feeding. Most of us never achieve it. It cannot be forced. It cannot be faked. It requires the succubus to actually... *fall in love.*',
          'She snaps the ledger shut.',
          '@dean Your exam is extended, Miss Lilette. Indefinitely. I expect a full report.',
          'She vanishes in a puff of brimstone. Lilette stares at the empty space. Then at you.',
          '@lilette ...Did she just say I was in *love* with you?',
          '@lilette Because I think she might have been right.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Lilette has rented a room at the inn. She has decorated it according to Chapter Twelve of her handbook: rose petals, candles, silk sheets, a bowl of strawberries. She is sitting on the very edge of the bed, wringing her tail in her hands.',
          '@lilette Okay. Okay. So. I read every book. I made notes. I made *diagrams.* I am extremely prepared.',
          '@lilette I am also extremely nervous. I have never been this nervous. Not even the time I accidentally summoned a duke of hell instead of a pizza.',
          'She looks up at you, pink to the tips of her horns.',
          '@lilette I don\'t want to do this for an exam. I want to do it because it\'s *you.* Is that — is that okay?',
        ],
        choices: [
          { text: 'Sit beside her. "Throw out the handbook. Just be you."', go: 'handbook', aff: 10 },
          { text: 'Gently tilt her chin up and give her a *perfect* smoldering glance. [Charm check 4]', check: { stat: 'charm', dc: 4 }, pass: 'smolder', fail: 'handbook' },
        ],
      },
      handbook: {
        text: [
          'She looks at the handbook. Then at you. Then she throws it over her shoulder. It lands in the strawberries.',
          '@lilette Just me. Okay. Just me.',
        ],
        next: 'night',
      },
      smolder: {
        text: [
          'You lift her chin and give her the slow, heavy-lidded look you taught her in the gardens.',
          'Her wings snap open so fast they knock over three candles. She lets out a tiny shriek.',
          '@lilette THAT\'S CHEATING. You are using MY CURRICULUM against me!',
          '@you Is it working?',
          '@lilette SO WELL. IT\'S WORKING SO WELL.',
        ],
        aff: 14,
        next: 'night',
      },
      night: {
        text: [
          'Her kiss is clumsy at first. Then it isn\'t. Something old and instinctive seems to wake up in her — not the hungry thing her teachers wanted, but something warm and luminous. Her skin begins to glow faintly pink where you touch her.',
          'For a succubus who has never done this before, she is remarkably enthusiastic, endlessly curious, and given to blurting out exactly what she\'s feeling at every moment, which is mostly variations of *oh* and *again* and *the book did NOT cover this.*',
          'At one point her tail gets tangled in the sheets and her wing knocks the strawberry bowl over and you are both laughing so hard you can\'t breathe.',
          '...',
          'Afterward, she lies curled against you, glowing softly in the dark like a little pink lantern. She looks down at herself in wonder.',
          '@lilette I\'m *glowing.* I\'ve never glowed. Succubi only glow when they\'ve fed very, very well.',
          '@lilette But I didn\'t take anything. You just... gave. And I gave back.',
          'She snuggles closer, wrapping one wing over you like a blanket.',
          '@lilette I\'m going to get *such* a good grade.',
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Lilette finds you on the festival hill, positively radiant — literally; she has been faintly glowing pink for weeks now. She\'s wearing a dress she clearly chose herself: soft, pink, comfortable, with a little heart embroidered on the pocket. Not a scrap of black lace in sight.',
          '@lilette I got my results!',
          'She unrolls a scroll bearing the Infernal Academy seal. In flaming letters across the top: *GRADUATED WITH HIGHEST HONORS.* Below, in the Dean\'s handwriting: *First true-love feeding in 300 years. Exemplary. — V.*',
          '@lilette I\'m the best student in my whole class! Me! I failed Smoldering Glances three times!',
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'You sit together on the grass as the stars begin to fall. She tucks her head under your chin and wraps her tail around your wrist.',
          '@lilette The Dean offered me a job. Teaching. A new course. She wants to call it "Advanced Seduction: Falling In Love On Purpose."',
          '@lilette But I said I\'d only take it if I could live here. In the mortal realm. With you.',
          'She looks up at you, glowing brighter than the falling stars.',
          '@lilette Is that okay? Will you keep me?',
          'You answer with a kiss. Her wings flutter so hard she lifts you both a few inches off the grass.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'Lilette teaches her class by correspondence from a little cottage in Clichéton, sending lessons to the Infernal Academy by fire-sparrow. Her course becomes the most popular in the Academy\'s history. Enrollment triples. Several of her students marry mortals.',
          'The Dean visits once a year to inspect her. She brings you a fruitcake. It is mildly cursed. It\'s also delicious.',
          'Lilette still trips over her own tail. She still blushes at the word "ankle." She still has never once smoldered properly.',
          'But she glows every single day. And whenever anyone in town asks her the secret of seduction, she simply points at you and smiles — just smiles — and that, it turns out, was the whole curriculum all along.',
        ],
        ending: 'lilette',
      },
    },
  },
});
