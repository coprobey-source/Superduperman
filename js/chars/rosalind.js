FL.addSpeaker('noblewoman', 'Lady Pemberton', '#b9a5d6');

FL.addCharacter({
  id: 'rosalind',
  name: 'Lady Rosalind Ashcroft',
  short: 'Rosalind',
  trope: 'Haughty Villainess ("Ohohoho!")',
  color: '#c74bb0',
  favStat: 'charm',
  endingTitle: 'The Villainess\'s Happy Ending',
  teaser: 'A noblewoman with enormous golden drill-curls and a feathered fan is laughing "OHOHOHO!" at a footman.',
  blurb: 'Heiress of House Ashcroft, publicly jilted by the Crown Prince six months ago in favor of a sweet commoner girl. Society has cast her as the villainess, and she plays the role magnificently: cutting remarks, dramatic laughter, a fan for every occasion. Few know she anonymously funds half the charities in Clichéton. She has no friends left. She tells herself she prefers it.',
  schedule: ['noble', 'noble', 'noble'],
  gifts: { love: ['tea'], like: ['roses', 'mirror', 'perfume', 'comb', 'chocolate'], hate: ['fish', 'ale'] },
  giftLines: {
    love: ['She opens the box and goes very still.', '@rosalind ...Silver Needle white tea. From the Jade Mountains. My mother used to serve this. I haven\'t had it since she passed.', 'She snaps her fan open in front of her face so you can\'t see her expression.', '@rosalind O-ohoho! How *presumptuous!* I suppose I shall have to invite you to drink it with me. Since you\'re *so* thoughtful.'],
    like: '@rosalind Hmph! Well. At least *someone* in this town has taste. I shall accept your tribute, commoner. Graciously.',
    neutral: '@rosalind How *quaint.* I shall have a servant find somewhere to put it. Somewhere *far away.*',
    hate: ['She recoils, fan snapping up like a shield.', '@rosalind A FISH? You present a *fish* to the heiress of House Ashcroft? Do I look like a *harbor cat* to you? OHOHOHO — no. No, I\'m not laughing. I am *appalled.*'],
  },
  talk: [
    ['@rosalind OHOHOHO! Look who has come crawling back to bask in my magnificence! ...You may bask for five minutes. I\'m very busy.'],
    ['@rosalind The Prince\'s new fiancée sent me a letter. She wished to "be friends." Ohoho! As if! ...I sent back a very rude letter. And a fruit basket. She looked thin.'],
    ['@rosalind Society calls me the villainess. I have decided to embrace it. If one is to be a villain, one should at least be *fabulous.*'],
    ['She is feeding pigeons with great dignity.', '@rosalind Don\'t look at me. These are *my* pigeons. They are *evil* pigeons. I am training them to... to steal from the rich. Hmph.'],
    ['@rosalind Do you know how long it takes to set these curls every morning? Two hours. Two hours! And people say I don\'t *work.*'],
    ['@rosalind I had friends, once. Dozens of them. They all vanished the day the Prince broke our engagement. It\'s fine. Friends are terribly overrated. ...Why are you still here? ...You may stay.'],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'You\'re walking through the Noble Quarter when a carriage door bangs open and a woman sweeps out of it directly into your path. You collide. She staggers back, and an entire armful of hatboxes goes flying.',
          'She is magnificent: a gown of violet silk and black lace, a towering arrangement of golden hair in four perfect ringlet drills, a jeweled fan, and the expression of someone who has never in her life been bumped into.',
          '@rosalind *How DARE you!* Do you have any idea who I am?!',
          'She snaps her fan open.',
          '@rosalind I am Lady Rosalind Ashcroft! Heiress of House Ashcroft! And you have just assaulted my *hatboxes!* OHOHOHO! You shall *rue* this day!',
        ],
        aff: 10,
        choices: [
          { text: 'Gather up her hatboxes and stack them neatly. "My apologies, my lady."', go: 'hatboxes' },
          { text: 'Match her energy. "OHOHOHO! And I am {name}! Rue *me!*" [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'match', fail: 'match_fail' },
          { text: '"Is that laugh hard to do? It sounds like it hurts."', go: 'laugh' },
        ],
      },
      hatboxes: {
        text: [
          'You kneel and collect every hatbox, dust them off, and stack them in her arms. She stares at you over the top of the pile.',
          '@rosalind ...You\'re *helping.* Why are you helping? I just threatened you.',
          '@you You looked like you needed a hand.',
          'For a moment, her haughty expression flickers into genuine confusion.',
          '@rosalind ...Hmph. Well. Don\'t expect *gratitude.* ...Thank you.',
        ],
        aff: 5,
        next: 'name',
      },
      match: {
        text: [
          'You snap open an imaginary fan and throw your head back.',
          '@you OHOHOHO!',
          'She stares at you, utterly scandalized. Her footman covers his mouth. A passing noblewoman drops her parasol.',
          'Then — slowly, unwillingly — the corner of Rosalind\'s mouth begins to twitch. She hides it behind her fan.',
          '@rosalind ...Your form is *atrocious.* The laugh comes from the diaphragm, not the throat. You must *project* your contempt.',
          '@rosalind I suppose I shall have to *teach* you. Ohoho.',
        ],
        aff: 8,
        next: 'name',
      },
      match_fail: {
        text: [
          'You attempt the laugh. It comes out as "Oho... ho? Hoo?"',
          '@rosalind ...Was that an *owl?*',
          'She looks at you with pity. Then she waves her fan dismissively.',
          '@rosalind Never attempt that again. Leave it to the professionals.',
        ],
        aff: 3,
        next: 'name',
      },
      laugh: {
        text: [
          'She opens her mouth to retort — then pauses.',
          '@rosalind ...It does, actually. It\'s very hard on the throat. I drink honey water every evening.',
          'She seems shocked to have admitted it. She snaps her fan shut.',
          '@rosalind That is a *state secret.* Breathe a word of it and I shall *ruin* you.',
        ],
        aff: 5,
        next: 'name',
      },
      name: {
        text: [
          '@you I\'m {name}.',
          '@rosalind {name}. How very... *ordinary.* I suppose you\'re one of those adventurers. Muddy boots, no manners, terrible taste in hats.',
          'She sweeps past you toward the Ashcroft estate, hatboxes and all.',
          '@rosalind You may call on me. If you wish. I am *very* exclusive, but I shall make an exception, as a form of charity. Ohohoho!',
          'At the gate, she glances back at you. Just for a second. She looks almost hopeful.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'An invitation arrives on thick cream paper, with gold edging and a wax seal: *Lady Rosalind Ashcroft requests the pleasure of your company for tea. Attendance is mandatory. Wear something decent. — R.A.*',
          'The tea is served in a glass conservatory full of roses. The table is laid for twelve. There are only two chairs occupied.',
          '@rosalind I invited the Duchess of Wendlemoor, Lady Pemberton, the Countess of Ash, and eight others. They all sent their regrets.',
          'She says it lightly, pouring tea with perfect precision.',
          '@rosalind No matter! More cake for us. Now. Let us see if you know how to behave in polite society. Which fork for the cake?',
        ],
        choices: [
          { text: 'Choose the correct fork. [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'fork_win', fail: 'fork_fail' },
          { text: '"Do we need a fork? Can\'t I just pick it up?"', go: 'hands', aff: 5 },
        ],
      },
      fork_win: {
        text: [
          'You pick the small three-tined fork at the far left. She raises an eyebrow.',
          '@rosalind Correct. And you hold it properly, too. Who taught you?',
          '@you I\'ve been going to salons.',
          '@rosalind *For me?*',
          'She catches herself.',
          '@rosalind — I mean, *for social advancement.* Naturally. Well done.',
        ],
        aff: 7,
        next: 'empty',
      },
      fork_fail: {
        text: [
          'You pick up the butter knife. She winces delicately.',
          '@rosalind That is for *butter,* darling. It\'s in the name.',
          'She leans across and moves your hand to the correct fork, her fingers lingering on yours for just a moment.',
          '@rosalind There. Honestly. What would you do without me?',
        ],
        aff: 4,
        next: 'empty',
      },
      hands: {
        text: [
          'She gasps theatrically. Then, after a moment, she looks around the empty conservatory.',
          '@rosalind ...There\'s no one here to see. Is there.',
          'She picks up a slice of cake with her bare fingers and takes a bite. Her eyes go wide.',
          '@rosalind It tastes *better.* Why does it taste better? This is *scandalous.*',
        ],
        next: 'empty',
      },
      empty: {
        text: [
          'As the afternoon wears on, she runs out of etiquette lessons. She runs out of insults. Eventually she just sits, stirring her tea, looking at the ten empty chairs.',
          '@rosalind I used to host tea every Thursday. Twenty guests. Thirty. Everyone wanted to be seen with the future queen.',
          '@rosalind Then Edmund broke our engagement at the Royal Ball. In front of everyone. For a sweet little commoner who\'d never done anything wrong in her life.',
          '@rosalind And suddenly I was the villain of the story. And everyone remembered they were busy on Thursdays.',
        ],
        choices: [
          { text: '"Their loss. I\'m not busy on Thursdays."', go: 'thursday', aff: 10 },
          { text: '"Did you actually do anything villainous?"', go: 'villain', aff: 6 },
        ],
      },
      thursday: {
        text: [
          'She looks at you. Something in her face wavers — a crack in porcelain.',
          '@rosalind ...You would come? Every Thursday? To drink tea with the villainess?',
          '@you If she\'ll have me.',
          'She snaps her fan open in front of her face. From behind it, very quietly:',
          '@rosalind ...Thursday at three. Do not be late. I *loathe* lateness.',
          'When she lowers the fan, her eyes are suspiciously bright.',
        ],
        end: true,
      },
      villain: {
        text: [
          '@rosalind I was *rude.* Frequently. I told her that her dress was the color of a bruised plum. It was.',
          '@rosalind I never hurt her. I never would. But a rejected fiancée with a sharp tongue makes a much better story than the truth.',
          '@you What\'s the truth?',
          'She sets down her teacup.',
          '@rosalind That I never loved him. And he never loved me. And I was relieved. And *nobody* ever asked.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'The salon at the Pemberton house is full of nobility when you arrive with Rosalind on your arm. Conversation stops. Fans flutter. Whispers start.',
          '@noblewoman Oh, *Lady Ashcroft.* What a surprise. We heard you\'d been... *unwell.* After the whole *poisoning* affair.',
          'The room goes deathly quiet.',
          '@rosalind ...The *what?*',
          '@noblewoman Oh, haven\'t you heard? The Prince\'s fiancée fell ill at the garden party last week. Everyone *knows* it was you. Jealousy is *such* an ugly color, darling.',
          'Rosalind goes white. Her fan trembles in her hand. She opens her mouth for a cutting retort — and nothing comes out.',
        ],
        choices: [
          { text: 'Defend her publicly, with poise and wit. [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'defend', fail: 'defend_fail' },
          { text: 'Take her hand and walk her out of the room, head high.', go: 'leave', aff: 8 },
        ],
      },
      defend: {
        text: [
          'You step forward with a pleasant smile.',
          '@you How curious. I was at the garden party. The fiancée ate eleven cream puffs and then got on the carousel. Everyone saw it. I\'d call it "physics," not poison.',
          'A few people snicker.',
          '@you Also, Lady Ashcroft left early to deliver blankets to the orphanage. Anonymously. She does that every week. I\'m sure you knew that, Lady Pemberton, since your husband\'s name is on the donor list and his money isn\'t.',
          'There is a stunned silence. Then someone at the back begins to laugh. Then someone else. Lady Pemberton turns the color of a bruised plum and flees.',
          'Rosalind is staring at you. Her fan has fallen to the floor.',
        ],
        aff: 12,
        next: 'garden',
      },
      defend_fail: {
        text: [
          '@you She didn\'t poison anybody! She\'s — she\'s very nice! Underneath!',
          'A few people titter. It isn\'t a strong defense. But you stand in front of her the whole time, and you don\'t step aside.',
          'Eventually, Rosalind lays a hand on your arm.',
          '@rosalind ...Come. We\'re leaving.',
          'Her voice is perfectly steady. Her hand on your arm is shaking.',
        ],
        aff: 6,
        next: 'garden',
      },
      leave: {
        text: [
          'You take her hand, very deliberately, in front of everyone. Then you turn and walk her out of the salon, slowly, with your chin up, as though you were leaving a coronation.',
          'Nobody says a word.',
        ],
        next: 'garden',
      },
      garden: {
        text: [
          'You find a quiet bench in the Moonlit Gardens. Rosalind sits down very carefully, very straight.',
          'And then, for the first time since you\'ve known her, Lady Rosalind Ashcroft cries.',
          'Not prettily. Not elegantly. Great, ugly, hiccuping sobs that shake her whole body and wreck her makeup and make her drill-curls tremble.',
          '@rosalind I didn\'t — I would *never* — I *hate* poison, it\'s so *common* —',
          '@rosalind Why does everyone always believe the worst of me? Why is it always so *easy* for them?',
        ],
        choices: [
          { text: 'Hold her while she cries.', go: 'hold', aff: 10 },
          { text: '"Because you never let anyone see the best of you. But I see it."', go: 'see', aff: 10 },
        ],
      },
      hold: {
        text: [
          'You put your arms around her. She stiffens — then collapses against you, burying her face in your shoulder, clutching your coat with both hands.',
          'You stay like that a long time. When she finally pulls back, her face is blotchy and her mascara is everywhere and she looks more beautiful than you\'ve ever seen her.',
          '@rosalind ...If you tell *anyone* about this, I shall —',
          '@you Ruin me?',
          '@rosalind ...*Kiss* you. I was going to say kiss you. Ohoho. How *unexpected.*',
          'And she does.',
        ],
        end: true,
      },
      see: {
        text: [
          'She looks at you through her tears.',
          '@rosalind You... *see* it?',
          '@you The orphanage blankets. The fruit basket for your rival. The honey water. The pigeons you pretend are evil. Thursdays at three.',
          '@rosalind ...Nobody was ever supposed to notice any of that.',
          '@you I noticed.',
          'She takes your face in her hands and kisses you, fierce and salty with tears, right there in the Moonlit Gardens where anyone could see.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Midnight in the Ashcroft rose garden. There are no servants. No fans. No drills — her golden hair is down, loose and wavy past her shoulders, and you hardly recognize her without the armor of ringlets.',
          'She\'s wearing a simple nightgown under a silk wrap, standing among the white roses with her arms folded tightly.',
          '@rosalind In every story, the villainess gets her comeuppance. She is exiled. Or imprisoned. Or dies alone in a tower. She never, *ever* gets a happy ending.',
          '@rosalind I have been preparing for my comeuppance for six months.',
          'She turns to face you.',
          '@rosalind And instead, you came along. And I don\'t know what to *do* with you.',
        ],
        choices: [
          { text: '"Write a new ending."', go: 'ending', aff: 10 },
          { text: 'Offer your arm, like a gentleman at a ball. "May I have this dance, my lady?" [Charm check 4]', check: { stat: 'charm', dc: 4 }, pass: 'dance', fail: 'ending' },
        ],
      },
      ending: {
        text: [
          '@rosalind A new ending.',
          'She laughs, softly. Not her villainess laugh. A real one.',
          '@rosalind Ohoho. How *presumptuous.* I adore it.',
        ],
        next: 'night',
      },
      dance: {
        text: [
          'She stares at your offered arm. Then, slowly, she places her hand on it.',
          'There\'s no music. You dance anyway, among the roses, in the moonlight. She leads at first, out of habit. Then she lets you lead, and closes her eyes, and rests her head on your shoulder.',
          '@rosalind I danced with Edmund at a hundred balls. I never once felt like this.',
          '@rosalind I didn\'t know it was *supposed* to feel like this.',
        ],
        aff: 14,
        next: 'night',
      },
      night: {
        text: [
          'She kisses you among the white roses, and then she takes your hand and leads you up the back stairs of the great silent house to her bedchamber — all violet silk and gilt mirrors and a canopy bed with a ridiculous number of pillows.',
          '@rosalind Don\'t comment on the pillows.',
          '@you There are at least forty —',
          '@rosalind *Don\'t comment on the pillows.*',
          'Without the fan and the curls and the cutting words, she is startlingly shy, and then startlingly bold, and entirely, wonderfully *honest* — saying exactly what she wants and how and when, as imperious in this as in everything else, until somewhere in the night all her orders melt into soft, wordless sighs.',
          '...',
          'In the morning she wakes in a nest of pillows with her hair everywhere, and looks at you, and laughs.',
          '@rosalind I just realized. I\'ve finally done something truly scandalous.',
          '@rosalind I\'ve fallen in *love.* Ohohohoho!',
          'It\'s the best villainess laugh you\'ve ever heard.',
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Every head on the festival hill turns as Lady Rosalind Ashcroft arrives, in a gown of shimmering midnight blue, her drills more magnificent than ever, her fan glittering with sapphires.',
          'She walks straight past the Crown Prince and his fiancée — pausing only to compliment the fiancée\'s dress, sincerely, which leaves the poor girl utterly baffled — and comes to you.',
          '@rosalind I\'m told this is where commoners watch the stars.',
          '@rosalind How *quaint.* I shall watch them with you.',
          'She sits down on the grass. In silk. Several noblewomen faint.',
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'As the stars begin to fall, she slips her hand into yours.',
          '@rosalind I have decided. I will remain the villainess. I am *very* good at it, and society needs someone to tell them their hats are hideous.',
          '@rosalind But every good villainess needs a partner in crime. Someone to help her ruin the reputations of horrible people and fund orphanages in secret.',
          '@rosalind Will you be mine?',
          'You answer by kissing her, and she drops her fan entirely for the second time in her life.',
          '@rosalind ...Ohoho. *Yes.* Very good answer.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'You marry in the Ashcroft rose garden. The guest list is short. Every single guest attends.',
          'Lady Rosalind remains the most feared woman in high society. Her tea parties become legendary — not for who is invited, but for who *isn\'t.* Cruel gossips, petty tyrants and anyone who has ever kicked a dog are banned for life. Everyone else is welcome. Every Thursday. At three.',
          'The Prince\'s former fiancée — now just a friend — becomes a regular. So does Lady Pemberton, eventually, after an apology that takes three hours and a great deal of crying.',
          'Rosalind still laughs "Ohohoho!" at people who annoy her. She still sets her drills every morning. You help now. It only takes an hour.',
          'And in the great Ashcroft library, there\'s a new book on the shelf, bound in violet leather. Its title is *The Villainess Who Got a Happy Ending.*',
          'She commissioned it herself. She says she wanted *someone* to finally write it properly.',
        ],
        ending: 'rosalind',
      },
    },
  },
});
