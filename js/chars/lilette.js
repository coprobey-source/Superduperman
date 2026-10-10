FL.addCharacter({
  id: 'lilette',
  name: 'Lilette',
  short: 'Lilette',
  trope: 'Succubus Who\'s Terrible at Seduction',
  color: '#ff5fa2',
  favStat: 'charm',
  endingTitle: 'Graduated With Honors (in Love)',
  endings: { lilette_dean: 'Head of the Class', lilette_baker: 'Sinfully Sweet' },
  teaser: 'A woman with little bat wings and a heart-tipped tail is trying to lean seductively against a pillar. She misses the pillar.',
  blurb: 'A first-year field student from the Infernal Academy of Seduction, sent to the mortal realm for her final exam: drain the life essence of one mortal with her irresistible wiles. She has no wiles. She has read every romance novel in existence and somehow understood none of them. She blushes at the word "ankle."',
  schedule: [null, 'noble', 'tavern'],
  gifts: { love: ['cakes'], like: ['plushie', 'perfume', 'novel', 'chocolate', 'polish', 'salts'], hate: ['candle', 'relic'] },
  giftLines: {
    love: ['@lilette:surprised Honey cakes! For me?! A mortal is giving *me* treats? That\'s backwards! I\'m supposed to tempt *you!*', 'She eats one. Her tail curls into a happy spiral. Her little wings flutter so fast she lifts an inch off the ground.', '@lilette:blush ...You\'re *very* tempting. Unfair. Unfair!'],
    like: '@lilette:happy Oh! Oh, that\'s so sweet! Is this — is this a *seduction?* Are you seducing *me?* Is that allowed?!',
    neutral: '@lilette Oh, thank you! I\'ll, um, use this to... corrupt someone? Probably? I\'ll figure it out!',
    hate: ['She yelps and drops it, shaking her singed fingers.', '@lilette:surprised HOLY! It\'s *holy!* Ow ow ow! Why would you — oh, you didn\'t know! It\'s okay! I\'m fine! I\'m only a *little* on fire!'],
    special: {
      cakes: [
        '@lilette:surprised Honey cakes! For me?! A mortal is giving *me* treats? That\'s backwards! I\'m supposed to tempt *you!*',
        'She eats one. Her tail curls into a happy spiral. Her little wings flutter so fast she lifts an inch off the ground.',
        { if: 'lilette_fedcake', text: '@lilette:smug This time *I* get to feed *you* the first bite. Chapter Seven, paragraph nine. Open wide. ...That was your nose again. I\'m very consistent. That\'s a kind of skill.', else: '@lilette:blush ...You\'re *very* tempting. Unfair. Unfair!' },
      ],
      novel: [
        '@lilette:surprised *The Duke\'s Forbidden Passion, Volume IX!* I\'ve read one through eight forty times each! This is where I learned *everything!*',
        '@lilette:blush ...Which explains a lot, now that I say it out loud. Chapter Three of Volume Two is just the Duke looking at an ankle. For eleven pages. I had to lie down.',
      ],
      relic: [
        'She takes one look at the gilded little reliquary and her tail puffs up like a startled cat\'s.',
        '@lilette:surprised Is that a *saint?!* A piece of one?! Ow — wait.',
        'She pokes it, very carefully. There is a faint, apologetic fizzle.',
        '@lilette:smug It\'s only a *tiny* bit holy. Like a pig that went to church once. I\'m going to send it to my roommate by fire-sparrow. She\'ll scream.',
      ],
      mirror: [
        '@lilette:happy A new mirror! My old one is so *mean.* It said my smolder looked "congested."',
        'She practices a sultry pout into the glass, then tilts it to check the angle.',
        '@lilette:surprised ...This one says I look "adorable." I don\'t know if that\'s better or worse for my career.',
      ],
      fork: [
        '@lilette:surprised A fork. A single fork. Is this a mortal *courtship* fork? Are we betrothed now? Am I supposed to give you a spoon?',
        '@lilette:blush I\'m going to look this up. Don\'t take it back while I\'m looking it up.',
      ],
      plushie: [
        '@lilette:happy A bunny! A little *bunny!* I\'m naming him Lord Ravager, Devourer of Pillows.',
        '@lilette:smug He\'s going to sit on my bed and be *extremely* threatening. Look at his button eyes. Pure malice.',
      ],
    },
    repeat: '@lilette:blush Another one? You\'re spoiling me! The handbook says *I\'m* supposed to bring the temptations. I\'m going to have to bake twice as many cakes just to catch up.',
  },
  talk: [
    ['@lilette Hello, mortal. *Ahem.* Hello, *mortal.* Did that sound sultry? I\'ve been practicing on the mirror. The mirror said it sounded "congested."'],
    ['@lilette:sad At the Academy, I got a D-minus in Smoldering Glances. The professor said I looked like I needed to sneeze.'],
    ['@lilette:smug The book says to "trail a finger along your target\'s jawline." Hold still.', 'She trails a finger along your jaw. Then she squeaks and hides behind her wings.', '@lilette:blush I DID IT. I DID THE THING. I NEED TO SIT DOWN.'],
    ['@lilette My roommate at the Academy drained *forty* mortals in her first week. I\'ve drained zero. I gave one a hug once. He seemed nice.'],
    ['@lilette:surprised Is it normal for mortals to smell this nice? Is that a trap? Is it a counter-seduction? You can tell me. I won\'t report you.'],
    ['@lilette:blush Succubi aren\'t supposed to blush. It\'s in the handbook. Page one. I have never once made it past page one.'],
    ['@lilette:surprised Mortal sayings are so *violent!* "Steal someone\'s heart." "Knock \'em dead." "Drop-dead gorgeous." And you call *us* the scary ones!', '@lilette:blush ...You\'re drop-dead gorgeous, by the way. Oh, I don\'t like it. It sounds like a threat. Please stay alive.'],
    ['@lilette:sad The Academy cafeteria serves brimstone casserole, sulfur soup and, on Fridays, regret. Just a bowl of it. With a spoon.', '@lilette:happy That\'s why I love honey cakes. They don\'t scream when you bite them.'],
    ['She\'s leaning against the tavern doorframe in what is clearly meant to be a seductive pose. Her horns are stuck in the wood.', '@lilette:blush Don\'t help. I\'m doing this on purpose. It\'s called *lingering.*', 'You help. She lets you. She lingers against your arm for quite a while afterward, which you suspect was the plan all along.'],
    ['@lilette:smug My roommate says the secret of seduction is *confidence.* So I practiced. I walked into the bakery, looked the baker right in the eye and purred, "I\'ll have your *finest* honey cake."', '@lilette:happy And he gave it to me! Confidence works! ...Also I paid him. I think that helped.'],
    { if: 'lilette_flirted', lines: ['@lilette:blush You flirted back. The night we met. Nobody\'s ever flirted back. I wrote it on my arm so I wouldn\'t forget.', '@lilette It took a week to wash off. I didn\'t try very hard.'] },
    { if: 'lilette_rent', lines: ['@lilette:surprised I asked the Dean if mortals can *rent* souls, like you said. She went very quiet and said yes, it\'s called a "mortgage," and it\'s the most evil thing your realm ever invented.', '@lilette:sad She seemed *impressed.* Please never get a mortgage. I couldn\'t bear it.'] },
    { if: 'lilette_taught', lines: ['@lilette:smug I practiced the smoldering glance you taught me. On the tavern cat.', '@lilette:surprised It *purred.* Then it followed me home. Then it left a dead mouse on my pillow. That\'s a good review, isn\'t it? I\'m counting it as a good review.'] },
    { if: { stage: 3 }, lines: ['@lilette:sad The Dean sends a fire-sparrow every morning. The note just says *"Report?"* Underlined four times. The sparrow looks disappointed in me too.', '@lilette:blush I don\'t know how to write "I think I\'m in love with my exam" in proper academic language. I\'ve tried eleven drafts. Nine of them are just your name.'] },
  ],
  afterTalk: [
    ["@lilette:happy The Dean wrote back! She said my report was \"the most enthusiastic piece of academic writing in Academy history.\" She also asked me to stop including illustrations."],
    ["She sidles up and tries a smoldering look. It actually works this time. She looks as surprised as you are.", "@lilette:surprised Oh! Oh, I did it again! Quick, take me somewhere before I forget how!"],
    ["@lilette:blush I've been glowing for three days straight. People keep asking if I'm sick. I keep saying, \"No, I'm just *very* well fed.\" Then I run away."],
    ["@lilette:smug I bought a new handbook. It's blank. I'm going to write my own. Chapter one is just your name. Chapter two is... *private.*"],
    ["@lilette:sad I tried a smoldering glance on another mortal today. Just to test my skills. Purely professional.", "@lilette He asked me for directions to the bakery. I gave him directions. Then I came straight here.", "@lilette:blush I don't *want* to smolder at anyone else. That's going to be a real problem for my career."],
    { if: 'lilette_footnote', lines: ["@lilette:happy The Dean framed your footnote! *\"Would be seduced again.\"* It's hanging in her office between the portrait of the Archduke of Wrath and her diploma in Advanced Tormenting.", "@lilette:blush Every student who gets detention has to stand in front of it. I'm *famous.* I'm famous for you."] },
    { if: 'lilette_science', lines: ["@lilette:smug I've revised the methodology. The data from the inn was very promising, but the sample size is far too small.", "@you How small?", "@lilette:blush One night. One! That's not science, that's an *anecdote.* I've booked the room through the end of the month. For rigor."] },
    { if: 'lilette_smoldered', lines: ["@lilette I've been studying the look you gave me at the inn. The perfect one.", "She gives it back to you. It is, unmistakably, perfect. Your knees notice before you do.", "@lilette:surprised Oh no. Oh no, I'm *good* now. What do I do with my hands? Nobody ever told me what to do with my hands after!"] },
    { if: 'lilette_fedcake', lines: ["@lilette:blush You fed me honey cake by hand. In *public.* At the Tipsy Wyvern. Chapter Seven says that's the *advanced* course. You skipped me three whole grades.", "@lilette:smug I've brought cake. Open wide. I'm aiming for your mouth this time. No promises."] },
    { if: 'lilette_date_harbor', lines: ["@lilette:happy I moved the Sunset Kiss to Chapter One of my new handbook. Right after your name.", "@lilette:blush I crossed out the bit about timing it exactly. I wrote, *\"Any time is fine. Gulls optional.\"*"] },
  ],
  dateFav: 'harbor',
  dates: {
    dinner: {
      start: {
        text: [
          'The slate by the Tipsy Wyvern\'s corner booth says, in careful chalk: *RESERVED — A Mysterious Temptress (Lilette).*',
          'She\'s in the black dress again, tugging the neckline up every few seconds. A red candle burns between you. A book lies open on her lap under the table, where she clearly thinks you can\'t see it. *Chapter Seven: The Candlelit Dinner.*',
          '@lilette:smug Good evening, mortal. Come closer. I have something to whisper.',
          'She leans toward you over the candle and sets her fringe on fire.',
          '@lilette:surprised It\'s fine! It\'s fine! I\'m a demon! Fire is my *heritage!*',
          'She pats it out with a napkin. The barkeep, without a word, brings a jug of water and sets it beside her like this happens every week.',
          { if: 'lilette_another', text: '@lilette:blush I still have the clipboard from the gardens. Step six: *another date.* I crossed out "for practice." Then I crossed out "not." Then the page tore and I had to tape it. It\'s a very sentimental page now.' },
          { if: { stage: 4 }, text: '@lilette:blush I know we don\'t need a whole chapter for this any more. I just like it when we do things *properly.* With a candle. And you across from me, looking at me like that.' },
          'Dessert arrives: a single honey cake, golden and sticky, with two forks. Lilette goes very still. Step Four: *The Shared Dessert.*',
        ],
        choices: [
          { text: 'Pick up a fork and feed her the first bite.', go: 'feed', aff: 6, flag: 'lilette_fedcake' },
          { text: '"So what does Chapter Seven say happens next?"', go: 'chapter', aff: 2 },
          { text: 'Signal the barkeep for a second honey cake before she\'s touched the first.', go: 'second', aff: 4 },
        ],
      },
      feed: {
        text: [
          'You hold out the fork. She stares at it, then at you, then parts her lips and accepts the bite with her eyes squeezed shut, as if it might bite back.',
          'She goes pink from the horns down, like a slow sunrise, and her tail lashes so hard it knocks the lantern off its hook. You catch it. She doesn\'t notice.',
          '@lilette:surprised You can\'t — that\'s *my* move! Chapter Seven, paragraph nine! You\'re stealing my curriculum *again!*',
          '@lilette:smug My turn. Hold still.',
          'She aims a forkful at your mouth with the concentration of an archer. She hits your nose. She hits your chin. The third attempt lands, and she cheers so loudly that the whole tavern applauds without knowing why.',
        ],
        next: 'done',
      },
      chapter: {
        text: [
          '@lilette:happy Oh! It says — hang on —',
          'She hauls the book onto the table and reads aloud, finger under each word.',
          '@lilette "And then, with a smoldering glance, she slowly lifts her *ankle* —"',
          'She stops. She turns the color of the candle. She slides, very slowly, under the table.',
          '@lilette:blush (from under the table) I\'m fine. Eat the cake. I\'m living down here now.',
          'You take the cake under the table. It is cramped. Her horns are stuck in the underside of the tabletop. It is, somehow, the best part of the evening.',
        ],
        next: 'done',
      },
      second: {
        text: [
          'The barkeep sets a second honey cake beside the first. Lilette looks at the two cakes. She looks at you.',
          '@lilette:surprised *Two?* Two cakes? Are you trying to *tempt* me?',
          '@you Maybe.',
          '@lilette:blush You can\'t just say *maybe* like that! In that voice! I\'m the professional. You\'re not even reading from a book!',
          'She eats both. She saves you the last bite of the second one, which, she informs you gravely, is the single greatest sacrifice a succubus has ever made.',
        ],
        next: 'done',
      },
      done: {
        text: [
          'Walking her home under the tavern lanterns, she hums happily, the singed end of her fringe still smoking a little.',
          '@lilette:happy I\'m giving tonight a ten. I\'m giving *you* an eleven. I know the scale only goes to ten. I\'m a demon. I can break rules.',
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          'Lilette insists on returning to the Moonlit Gardens "to re-examine the site of the original incident." She means your first date. She has brought the clipboard.',
          '@lilette:smug Chapter Ten: *The Labyrinth of Longing.* I lose myself in the hedge maze. You search for me. The yearning builds. Then you find me in a shaft of moonlight, and I turn, and I say something devastating.',
          '@lilette I\'ve written the devastating thing on my hand. Count to a hundred!',
          'She runs into the maze. You count to a hundred. You wait a little longer, to be generous.',
          'From somewhere deep in the hedges, a small voice drifts out.',
          '@lilette:sad Um. Hello? I\'m *genuinely* lost now. This is no longer seductive. There\'s a hedge here shaped like a swan and it\'s *judging* me.',
        ],
        choices: [
          { text: 'Follow the sound of her apologizing to the hedges.', go: 'follow', aff: 4 },
          { text: 'Climb up onto the hedge and look for her. [Might check 2]', check: { stat: 'might', dc: 2 }, pass: 'climb', fail: 'thorns' },
          { text: 'Wait at the fountain in the center. Everyone ends up there eventually.', go: 'wait', aff: 6 },
        ],
      },
      follow: {
        text: [
          'You follow a trail of "sorry" and "excuse me" and "oh, I\'m so sorry, I didn\'t see you, you\'re a bush" through six turns and a dead end, and find her sitting under the swan topiary with her wings wrapped around her knees.',
          '@lilette:blush You found me. Okay. Okay, hold on.',
          'She checks her palm. The ink has smudged into a pink smear.',
          '@lilette:sad The devastating thing has rubbed off. I think it was about stars. Or possibly scars. It might have been *jars.* I don\'t know why I would say something devastating about jars.',
        ],
        next: 'done',
      },
      climb: {
        text: [
          'You haul yourself up onto the top of the hedge and balance there. Over the dark rows of the maze, one spot is faintly glowing pink, like a lantern somebody forgot to blow out.',
          'You drop down beside her. She shrieks, then grabs your sleeve with both hands.',
          '@lilette:surprised You came from the *sky!* That\'s not how it goes! That\'s so much better than how it goes!',
        ],
        next: 'done',
      },
      thorns: {
        text: [
          'The hedge is a rose hedge. You find this out on the way up, and again on the way down.',
          'Lilette, drawn by the swearing, finds *you*, and picks the thorns out of your sleeves one at a time with her tongue poking out in concentration.',
          '@lilette:happy I rescued you! I\'m the one who rescued you! That\'s backwards and I *love* it!',
        ],
        next: 'done',
      },
      wait: {
        text: [
          'You sit on the rim of the center fountain and listen to the water. Twenty minutes later, a hedge rustles violently and Lilette bursts out of it in a shower of leaves, triumphant and disheveled, a twig stuck on one horn.',
          'She sees you. Her whole face lights up.',
          '@lilette:surprised You — you didn\'t search for me. You just *waited.* You knew I\'d come to you.',
          '@lilette:blush That\'s... that\'s *so* much better than Chapter Ten.',
        ],
        next: 'done',
      },
      done: {
        text: [
          'You walk out of the maze together the long way, hand in hand, taking every wrong turn on purpose.',
          { if: { stage: 4 }, text: 'In the moonlit dead end by the swan, she pulls you into the hedge and kisses you until the leaves rustle, and then giggles that this is *definitely* in a chapter somewhere.' },
          '@lilette:happy I\'m writing a new Chapter Ten. *Get lost with someone on purpose.* It\'s only one line. It\'s the best chapter in the book.',
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          'Lilette is waiting at the end of Saltbreeze pier with an hourglass, a clipboard and the expression of a general before a battle.',
          '@lilette:smug Chapter Three: *The Sunset Kiss.* According to the handbook, a kiss at the exact moment the sun touches the sea is "devastating, irresistible, and legally binding in four kingdoms."',
          '@lilette I\'ve done the calculations. Sunset is in eleven minutes. I\'ve turned the hourglass. That leaves time for one paper of fried fish and some light, sultry conversation.',
          'She perches on a bollard, crosses her legs seductively, and lets her tail drape over the edge of the pier. It falls in the harbor. She fishes it out without comment.',
          'The sky is going pink and lavender, the same colors as her. You don\'t think she\'s noticed.',
          { if: { stage: 4 }, text: '@lilette:blush I know we\'ve kissed lots of times now. Lots and lots. But never *on schedule.* I want one perfect one, exactly on time, to put in my report.' },
        ],
        choices: [
          { text: 'Share your chips and talk about anything except the schedule.', go: 'chips', aff: 5 },
          { text: 'Count the seconds down with her, very seriously.', go: 'count', aff: 3 },
          { text: '"Have you noticed the sky is exactly your color?"', go: 'colour', aff: 6 },
        ],
      },
      chips: {
        text: [
          'You hand her a chip. She tells you about the time her roommate tried to seduce a minotaur and ended up running his bakery for a month. You tell her about the worst inn on the road to Clichéton. She laughs so hard she snorts, and then dies of embarrassment, and then laughs again.',
          'At some point she looks down at the hourglass. It ran out a while ago. The sun is gone.',
          '@lilette:surprised We MISSED it! We missed the whole — the sky is still pink, though — is pink close enough? Does pink count?',
          'You kiss her before she can check the book. She drops the hourglass in the harbor.',
          '@lilette:blush ...That wasn\'t a sunset kiss. That was a *twilight* kiss. That\'s not in any chapter. That one\'s *mine.*',
        ],
        next: 'done',
      },
      count: {
        text: [
          'You stand side by side, staring at the sun as it sinks toward the water.',
          '@lilette Ten. Nine. Eight. Seven —',
          'At six, a seagull lands on the bollard. At five, it eyes her chips. At four, it lunges. At three, Lilette is in a full wrestling match with a gull, wings flapping, shouting "Not *now*, you feathered *menace!*"',
          'At one, you grab her by the waist, gull and all, and kiss her.',
          'The sun touches the sea. The gull escapes with the chips. Lilette goes completely limp in your arms.',
          '@lilette:surprised Did — did it count? With the gull?',
          '@lilette:happy It counts. I\'m counting it. I\'m going to draw the gull in the margins.',
        ],
        next: 'done',
      },
      colour: {
        text: [
          '@you Have you noticed the sky is exactly your color? Lavender up top, pink at the edges.',
          'She looks up. She looks at her own arm. She looks back at the sky.',
          'And she begins to glow. Softly at first, then brighter, pink-gold, until the boards of the pier around her are lit up like a lantern.',
          'Out in the harbor, a fishing boat changes course, its captain apparently convinced someone has built a new lighthouse.',
          '@lilette:blush Oh no. Oh no, I can\'t turn it off when you say things like that. That boat\'s coming *here.* Kiss me before it docks!',
          'You do. The sun sets. Nobody, including Lilette, is watching it.',
        ],
        next: 'done',
      },
      done: {
        text: [
          'You walk back along the pier as the first stars come out. She has her arm through yours and is writing in the margin of the handbook as she walks.',
          '@lilette:happy New rule. The sunset is *optional.* The kiss is mandatory.',
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          'Lilette has packed a picnic according to Chapter Nine: *Temptations Al Fresco.* In a sunny Whisperwood clearing, she unpacks it with great ceremony: strawberries, chocolates, a black satin bedsheet in place of a blanket, and one shiny red apple.',
          '@lilette:smug The *forbidden fruit.* Very on-brand. Very sinful.',
          '@you Where did you get it?',
          '@lilette:sad ...The market. It was three coppers. The man said it was "a Braeburn." I don\'t think it\'s forbidden at *all.*',
          'She bites it seductively anyway. Juice runs down her chin and onto the satin. She freezes, mortified, and then, from the grass, comes the sound of tiny feet. Ants. Hundreds of them, marching on the strawberries.',
        ],
        choices: [
          { text: 'Lie back and let her shade you with her wings while you eat.', go: 'wings', aff: 6 },
          { text: 'Help her lead the ants away with a trail of crumbs.', go: 'ants', aff: 4 },
          { text: 'Take the apple and try the "forbidden fruit" bit yourself. [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'apple_win', fail: 'apple_fail' },
        ],
      },
      wings: {
        text: [
          'You lie back on the satin. After a moment she understands, scoots closer, and spreads her little bat wings over the both of you like a parasol. They\'re thin enough that the sunlight comes through them rose-pink.',
          '@lilette:blush Is this... nice? Nobody\'s ever wanted to sit *under* my wings. At the Academy they mostly used them to swat flies.',
          'She feeds you strawberries, one at a time. She only misses twice. After twenty minutes her wings start trembling with the effort of holding them up, and she refuses to put them down.',
          { if: { stage: 4 }, text: 'Eventually she gives up, folds them around you both like a tent, and curls up against your chest, and that\'s even better.' },
        ],
        next: 'done',
      },
      ants: {
        text: [
          'Lilette kneels by the ant column and wiggles her fingers at it.',
          '@lilette:smug Shoo, my pretties. *Follow me.*',
          'To your shared astonishment, the ants follow her. In a perfect line. She leads them across the clearing to a fallen log, and they swarm happily into it, and she turns back to you with her mouth hanging open.',
          '@lilette:surprised I SEDUCED THEM! My first successful seduction! It\'s *insects!* Do you think that counts for my grade?',
          '@you I think it should count for double.',
        ],
        next: 'done',
      },
      apple_win: {
        text: [
          'You take the apple, look her in the eye, and take one slow, deliberate bite. You hold the gaze a beat too long. You let the corner of your mouth curl.',
          'Lilette drops the entire punnet of strawberries.',
          '@lilette:blush That — that\'s not fair, that\'s an *ordinary apple,* how are you making an ordinary apple do *that* —',
          'She takes the apple back and stares at it as if it has personally betrayed her.',
        ],
        next: 'done',
      },
      apple_fail: {
        text: [
          'You take the apple and bite it slowly and smolderingly. A piece goes down the wrong way. You cough for about a minute while she pats your back, enormously delighted.',
          '@lilette:happy You\'re *terrible* at it too! Oh, that\'s my favorite thing about you. Well, *one* of them. It\'s top ten.',
        ],
        next: 'done',
      },
      done: {
        text: [
          'By late afternoon the satin sheet is ruined with juice, the ants are thriving, and Lilette is lying on her back in the grass with her tail wrapped around your ankle.',
          '@lilette:happy Chapter Nine says a picnic is about temptation. I think it\'s actually just about lying in the sun with someone you like. I\'m going to write a strongly worded letter to the author.',
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'The Tipsy Wyvern is roaring tonight. In a corner booth, under a red lantern, sits a woman who is clearly *trying* to look mysterious. Lavender skin, short pink hair, small curving horns, a pair of little bat wings, and a slender tail with a heart-shaped tip.',
          'She\'s wearing a very low-cut black dress that she keeps nervously tugging upward.',
          'She spots you. She takes a deep breath. She sashays toward you in a way that has clearly been rehearsed in a mirror, trips on her own tail, and spills an entire goblet of wine down your front.',
          '@lilette:surprised OH NO. Oh no oh no. I\'m so sorry! I meant to — I was going to say "Hello there, mortal, is your soul *available*" — and then I fell — oh, gods below, you\'re *soaked* —',
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
          'Her tail freezes mid-swish while you laugh. Then she starts giggling too, nervously, hiding her face in her hands.',
          '@lilette:happy You\'re not angry? Everyone at the Academy gets angry when I spill things on them. Which is... often.',
        ],
        aff: 5,
        next: 'name',
      },
      line: {
        text: [
          'She freezes. Her mouth opens and closes. Her tail goes stiff as a poker.',
          '@lilette:surprised You — you *flirted back.* That\'s not supposed to — I\'m the — that\'s *my job!*',
          '@lilette:blush ...Oh no. Was that good? That felt good. Is it supposed to feel good when someone else does it? This wasn\'t in the textbook.',
        ],
        aff: 7,
        flag: 'lilette_flirted',
        next: 'name',
      },
      line_fail: {
        text: [
          '@you To answer your question — my soul is... um... for... sale? No — rent?',
          '@lilette:surprised You can *rent* souls?! Nobody told me that! I\'m going to fail so hard!',
        ],
        aff: 3,
        flag: 'lilette_rent',
        next: 'name',
      },
      succubus: {
        text: [
          '@lilette:surprised Shh! SHH! You\'re not supposed to know! I\'m in *disguise!*',
          '@you You have wings.',
          '@lilette:smug ...I have *very discreet* wings.',
        ],
        aff: 4,
        next: 'name',
      },
      name: {
        text: [
          'She produces a handkerchief and dabs at your shirt, which makes it worse.',
          '@lilette I\'m Lilette. Of the Infernal Academy of Seduction. Third-year. Well, first-year. Third time. I\'m here for my final exam: I have to seduce one mortal and drain their life essence.',
          '@lilette:happy And you are?',
          '@you {name}. And am I going to be your exam?',
          'She looks at you with wide eyes. Then at your wine-soaked shirt. Then back at your face.',
          '@lilette:blush ...Maybe? Would that be okay? I promise I\'m really bad at it.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Lilette ambushes you in the Moonlit Gardens with a book in one hand and a clipboard in the other.',
          '@lilette Okay. I have a proposal. I need to practice. A lot. And you\'re the only mortal who hasn\'t run away. So — would you be my practice target?',
          '@lilette:surprised I won\'t drain you! I promise! I\'ll only *pretend* to drain you! I just need to practice the steps!',
          'She opens the book: *The Succubus\'s Handbook of Irresistible Allure, 4th Edition.* The pages are covered in her own nervous little notes. *What does "sultry" mean?? Ask someone.*',
          '@lilette:smug Step one: The Smoldering Glance.',
          'She smolders at you. It looks like she\'s trying to read very small print.',
        ],
        choices: [
          { text: 'Teach her a *real* smoldering glance. [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'teach', fail: 'teach_fail' },
          { text: '"Honestly? You\'re cuter when you just smile."', go: 'smile', aff: 8, flag: 'lilette_smile' },
        ],
      },
      teach: {
        text: [
          'You show her. Relax the eyes. Hold the gaze a beat too long. A slow smile, just at the corner of the mouth. Then look away, and back.',
          'You demonstrate on her. Her tail goes rigid. Her wings snap open. She drops the book.',
          '@lilette:surprised OH. Oh, *that\'s* what that means. Oh, I understand the *whole chapter* now.',
          'She tries it on you. It\'s still clumsy. But it works a little. Mostly because she\'s blushing so hard.',
        ],
        aff: 8,
        flag: 'lilette_taught',
        next: 'date',
      },
      teach_fail: {
        text: [
          'You try to demonstrate. Somewhere along the way, your smolder turns into a squint. Lilette squints back. You squint at each other like two very confused owls.',
          'Then you both crack up.',
          '@lilette:happy You\'re as bad as me! That\'s so *reassuring!*',
        ],
        aff: 5,
        next: 'date',
      },
      smile: {
        text: [
          'She blinks at you. Then she smiles — a real one, wide and crooked and a little shy, fangs showing.',
          '@lilette:blush ...Like this?',
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
          '@lilette:surprised Wait. I think — I think I accidentally went on a *date* with you. A *real* one. That\'s not in the curriculum!',
        ],
        choices: [
          { text: '"Did you have fun?"', go: 'fun', aff: 6 },
          { text: '"Want to go on another one?"', go: 'another', aff: 8, flag: 'lilette_another' },
        ],
      },
      fun: {
        text: [
          '@lilette:blush ...So much fun. More fun than anything. Ever. Is that bad? Am I a bad succubus?',
          '@you You\'re a very good *Lilette.*',
          'Her tail curls into a heart shape. She doesn\'t seem to notice.',
        ],
        end: true,
      },
      another: {
        text: [
          'Her tail shoots straight up like an exclamation mark, heart tip quivering.',
          '@lilette:happy YES. I mean. Yes. For practice. *Strictly* for practice.',
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
          '@lilette:surprised I — I\'ve been practicing, Dean! With this one! I\'ve been doing *so* much practice!',
          '@dean Then *drain* them. Now. In front of me. Or you fail, and you are recalled to the Abyss permanently. Third strike.',
          'Lilette looks at you. Her eyes are wide and wet.',
          { if: 'lilette_smile', text: 'She tries to smile at you, the way you told her to in the gardens. It wobbles, and doesn\'t quite hold.' },
          { if: 'lilette_taught', text: 'For one wild second she seems to consider the smoldering glance you taught her. Then she remembers she\'s terrified, and it collapses into a hiccup.' },
        ],
        choices: [
          { text: '"Go ahead, Lilette. I trust you."', go: 'trust', aff: 10, flag: 'lilette_trusted' },
          { text: 'Stand up to the Dean. "She doesn\'t need to drain anyone to be worth something." [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'defend', fail: 'trust_try' },
        ],
      },
      trust_try: {
        text: [
          "@you She doesn't need to drain anyone to be worth —",
          "The Dean turns her eyes on you, and your voice simply stops working. It is like being looked at by a winter.",
          "Lilette's hand finds yours under the table, squeezing hard.",
          "@lilette:sad It's okay. I can do this. I *have* to do this.",
          "@you ...Go ahead, Lilette. I trust you.",
        ],
        next: 'trust',
      },
      trust: {
        text: [
          'Lilette leans in, trembling. She puts her hands on your face. She closes her eyes — and kisses you.',
          'It\'s supposed to be the draining kiss. You can feel something stirring, a warm tingling pull. But it\'s gentle, so gentle, and after a moment she makes a soft little sound and stops pulling entirely, and it just becomes... a kiss.',
          'She pulls away and looks at the Dean, tears spilling down her cheeks.',
          '@lilette:sad I can\'t. I *can\'t.* I don\'t want to take anything from them. I just want to — to give them things. Honey cakes and hugs and... *everything.*',
          '@lilette:angry Fail me. I don\'t care.',
        ],
        next: 'verdict',
      },
      defend: {
        text: [
          'You stand. You look the Dean in the eye.',
          '@you She\'s the kindest person I\'ve met in this town. She makes everyone around her happier. Isn\'t that what seduction\'s supposed to be about? Making people *want* to be near you?',
          '@you Because I do. More than anything.',
          'The Dean raises a sharp eyebrow. Lilette makes a small, strangled noise.',
          '@lilette:blush You... want to be near me? *More than anything?*',
        ],
        aff: 12,
        flag: 'lilette_defended',
        next: 'verdict',
      },
      verdict: {
        text: [
          'Dean Vexaria looks at Lilette for a long moment. Then she looks at you. Then she adjusts her spectacles and makes a note in her ledger.',
          '@dean Hmph. Interesting. The life essence of a mortal *taken* sustains a succubus for a week. The life essence of a mortal *freely given*, out of love, sustains her for a lifetime.',
          '@dean It is the rarest form of feeding. Most of us never achieve it. It cannot be forced. It cannot be faked. It requires the succubus to actually... *fall in love.*',
          { if: 'lilette_defended', text: '@dean And you, mortal. Nobody has contradicted me in a tavern in four hundred years. I am making a note of your name. Do not take it as a threat. Take it as... a footnote.' },
          'She snaps the ledger shut.',
          '@dean Your exam is extended, Miss Lilette. Indefinitely. I expect a full report.',
          'She vanishes in a puff of brimstone. Lilette stares at the empty space. Then at you.',
          '@lilette:surprised ...Did she just say I was in *love* with you?',
          '@lilette:blush Because I think she might have been right.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Lilette has rented a room at the inn. She has decorated it according to Chapter Twelve of her handbook: rose petals, candles, silk sheets, a bowl of strawberries. She is sitting on the very edge of the bed, wringing her tail in her hands.',
          '@lilette Okay. Okay. So. I read every book. I made notes. I made *diagrams.* I am extremely prepared.',
          '@lilette:sad I am also extremely nervous. I have never been this nervous. Not even the time I accidentally summoned a duke of hell instead of a pastry.',
          'She looks up at you, pink to the tips of her horns.',
          '@lilette:blush I don\'t want to do this for an exam. I want to do it because it\'s *you.* Is that — is that okay?',
          { if: 'lilette_defended', text: '@lilette You told the Dean you wanted to be near me more than anything. I\'ve stood near you every day since, just to check if it was true. It was true every single time.' },
          { if: 'lilette_trusted', text: '@lilette You trusted me. In front of the Dean. With your actual *soul.* Nobody trusts a succubus with anything. I\'m not even allowed to hold the good goblets.' },
          { if: 'lilette_flirted', text: '@lilette:smug And — and you flirted back, the very first night. So really this is all your fault. I want that in the record.' },
        ],
        choices: [
          { text: 'Sit beside her. "Throw out the handbook. Just be you."', go: 'handbook', aff: 10, flag: 'lilette_tossed' },
          { text: 'Gently tilt her chin up and give her a *perfect* smoldering glance. [Charm check 4]', check: { stat: 'charm', dc: 4 }, pass: 'smolder', fail: 'handbook_try' },
        ],
      },
      handbook_try: {
        text: [
          "You tilt her chin up and give her your most smoldering look. Something goes wrong with one eyebrow.",
          "Lilette stares. Then she claps both hands over her mouth and dissolves into helpless giggles.",
          "@lilette:happy Is *that* what I look like when I do it?! Oh no. Oh, that's so much worse than the handbook said.",
          "@you Then throw out the handbook.",
        ],
        next: 'handbook',
      },
      handbook: {
        text: [
          'She looks at the handbook. Then at you. Then she throws it over her shoulder. It lands in the strawberries.',
          '@lilette:happy Just me. Okay. Just me.',
        ],
        next: 'night',
      },
      smolder: {
        text: [
          'You lift her chin and give her the slow, heavy-lidded look from Chapter One of her handbook, the one she\'s never once managed.',
          { if: 'lilette_taught', text: 'It\'s the same look you taught her in the gardens, the afternoon she finally understood the whole chapter. This time you don\'t hold back.' },
          'Her wings snap open so fast they knock over three candles. She lets out a tiny shriek.',
          '@lilette:angry THAT\'S CHEATING. You are using MY CURRICULUM against me!',
          '@you Is it working?',
          '@lilette:blush SO WELL. IT\'S WORKING SO WELL.',
        ],
        aff: 14,
        flag: 'lilette_smoldered',
        next: 'night',
      },
      night: {
        text: [
          "Her first kiss of the night is clumsy. Then it isn't. Something old and instinctive wakes up in her. It isn't the hungry thing her teachers wanted. It's something warm and luminous, and her skin begins to glow faintly pink wherever you touch her.",
          "@lilette:surprised Oh. Oh, *that's* what Chapter Twelve meant by \"the awakening.\" I thought it was about roosters.",
          "She tries a move straight out of the handbook and slides one strap of her black dress off her shoulder with a sultry look. It gets stuck on her wing. She squeaks. You help her out of it, laughing, and her laughter cuts off in a soft gasp when your fingers trail down her bare spine to the base of her wings.",
          "@lilette:blush The *wings* — nobody's ever touched — the handbook says they're a weakness, I thought it meant in *combat* —",
          "Her tail winds around your wrist and tugs you closer. For a succubus who has never done this before, she's remarkably enthusiastic, endlessly curious, and given to blurting out exactly what she's feeling at every moment. Mostly that's *oh* and *again* and *the book did NOT cover this.*",
          "Then her instincts take over properly for the first time in her life. She pushes you back onto the silk sheets, settles over you with her wings spread wide, and her eyes glow a deep rose-red. Her voice comes out low and husky and genuinely, devastatingly sultry.",
          "@lilette:smug Hold still, mortal. I'm going to *ruin* you.",
          "She holds it for about three seconds before she bursts into delighted giggles.",
          "@lilette:happy I DID IT! Did you hear that? I *smoldered!*",
          "@you You did. Keep going.",
          "She does. Her tail knocks over the strawberry bowl at some point. Neither of you notices...",
          "...",
          "Afterward, she lies curled against you, glowing softly in the dark like a little pink lantern. She looks down at herself in wonder.",
          "@lilette:surprised I'm *glowing.* I've never glowed. Succubi only glow when they've fed very, very well.",
          "@lilette:blush But I didn't take anything. You just... gave. And I gave back.",
          "She snuggles closer and drapes one wing over you like a blanket.",
          "@lilette:happy I'm going to get *such* a good grade.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake to the scratching of a quill. Lilette is sitting cross-legged at the foot of the bed, wrapped in a sheet, wings fluttering happily, writing furiously in a notebook. She's still faintly glowing.",
          "@lilette:happy Good morning! Don't move! I'm writing my field report for the Dean. It has to be *very* detailed. Academic standards.",
          "She turns the notebook around. The heading reads *FIELD REPORT: Practical Seduction, Session One.* There are diagrams. There are footnotes. There is a section titled *Things I Did Not Expect (Numbered).* It's on page four.",
          { if: 'lilette_smoldered', text: "@lilette:smug Item one is \"The Look.\" You know the look. I gave it a ten. I'm also giving *myself* a ten, for surviving it." },
          { if: 'lilette_tossed', text: "The handbook is still sitting in the strawberry bowl where she threw it, its pages stained pink. She keeps glancing at it like an old flame across a crowded room, and then very deliberately not picking it up." },
          "@lilette:blush Could you, um, help me with the methodology section? I need to rate the — the *techniques* — on a scale of one to ten. Peer review.",
        ],
        choices: [
          { text: "Help her rate them. Honestly. Item by item.", go: "rate", aff: 6 },
          { text: "\"I think you'll need to repeat the experiment for accurate data.\"", go: "repeat", aff: 6 },
          { text: "Take the quill and add your own footnote.", go: "footnote", aff: 5 },
        ],
      },
      rate: {
        text: [
          "You go through the list together. By item three, she's pink. By item six, she's glowing so brightly the room is lit like a sunset. By item nine, she's hiding under the sheet.",
          "@lilette:surprised TEN? You gave that one a *TEN?* That was an accident! My tail slipped!",
          "@you Best accident I've ever had.",
          "@lilette:blush I'm writing that down. I'm writing ALL of this down. The Dean is going to faint.",
        ],
        end: true,
      },
      repeat: {
        text: [
          "She freezes, quill in the air.",
          "@lilette:surprised Repeat the... for *science?*",
          "@you Strictly for science.",
          "@lilette:smug The scientific method *does* require reproducible results...",
          "The notebook hits the floor. The report is submitted three days late. The Dean's only comment, in red ink, is: *Thorough. Very thorough.*",
        ],
        flag: 'lilette_science',
        end: true,
      },
      footnote: {
        text: [
          "You take the quill and write at the bottom of the page: *Subject wishes to report that the student is a natural. Highest marks. Would be seduced again.*",
          "Lilette reads it. Her tail curls into a perfect heart. Her wings flutter so hard she floats off the bed and bonks her horns on the ceiling.",
          "@lilette:happy *Ow.* Worth it. So worth it.",
        ],
        flag: 'lilette_footnote',
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Lilette finds you on the festival hill, positively radiant — literally; she has been faintly glowing pink for weeks now. She\'s wearing a dress she clearly chose herself: soft, pink, comfortable, with a little heart embroidered on the pocket. Not a scrap of black lace in sight.',
          '@lilette:happy I got my results!',
          'She unrolls a scroll bearing the Infernal Academy seal. In flaming letters across the top: *GRADUATED WITH HIGHEST HONORS.* Below, in the Dean\'s handwriting: *First true-love feeding in 300 years. Exemplary. — V.*',
          { if: 'lilette_footnote', text: 'Underneath that, smaller: *Subject testimony ("Would be seduced again") entered into the permanent record. Stop grinning. I can tell. — V.*' },
          '@lilette:smug I\'m the best student in my whole class! Me! I failed Smoldering Glances three times!',
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'You sit together on the grass as the stars begin to fall. She tucks her head under your chin and wraps her tail around your wrist.',
          '@lilette The Dean offered me a job. Teaching. A new course. She wants to call it "Advanced Seduction: Falling In Love On Purpose."',
          '@lilette But I said I\'d only take it if I could live here. In the mortal realm. With you.',
          'She looks up at you, glowing brighter than the falling stars.',
          '@lilette:blush Is that okay? Will you keep me?',
        ],
        choices: [
          { text: 'Answer her with a kiss.', go: 'kiss' },
          { text: '"Don\'t stay here for me. Take the job properly, on campus — and take me with you."', go: 'dean', if: [{ any: ['lilette_taught', 'lilette_smoldered'] }, 'lilette_defended'] },
          { text: '"Lilette. Is teaching seduction what *you* actually want?"', go: 'baker', if: [{ any: ['lilette_smile', 'lilette_tossed'] }, 'lilette_trusted'] },
        ],
      },
      kiss: {
        text: [
          'You answer with a kiss. Her wings flutter so hard she lifts you both a few inches off the grass.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'Lilette teaches her class by correspondence from a little cottage in Clichéton, sending lessons to the Infernal Academy by fire-sparrow. Her course becomes the most popular in the Academy\'s history. Enrollment triples. Several of her students marry mortals.',
          'The Dean visits once a year to inspect her. She brings you a fruitcake. It is mildly cursed. It\'s also delicious.',
          { if: 'lilette_fedcake', text: 'Every anniversary, you take her back to the corner booth at the Tipsy Wyvern and feed her the first bite of honey cake. She still tries to feed you back. She still hits your nose.' },
          'Lilette still trips over her own tail. She still blushes at the word "ankle." She still has never once smoldered on purpose for longer than three seconds.',
          'But she glows every single day. And whenever anyone in town asks her the secret of seduction, she simply points at you and smiles — just smiles — and that, it turns out, was the whole curriculum all along.',
        ],
        ending: 'lilette',
      },
      dean: {
        text: [
          '@you Don\'t stay here for me. Take the job properly. On campus. And take me with you.',
          '@lilette:surprised But — the Academy is in the *Abyss!* It\'s all brimstone and screaming and the cafeteria serves regret on Fridays! You\'d *hate* it!',
          '@you You\'d be there.',
          'Before she can answer, a pillar of hellfire erupts on the hillside, scattering a family of picnickers. Dean Vexaria steps out of it, adjusting her spectacles, entirely unbothered.',
          '@dean I have, of course, been listening. I am always listening. It is in the job description.',
          '@dean Miss Lilette, I accept your counter-offer. You will teach on campus. And you, mortal. You once stood in a tavern and told a dean of the Infernal Academy that she was wrong. You were correct. I found it *intolerable.* I would like you to do it professionally.',
          '@dean Visiting Lecturer in Mortal Studies. The hours are eternal. The pension is excellent.',
          '@lilette:happy They\'d let you *teach?* We\'d have offices next door! We could pass *notes!*',
          'She turns back to you, and something shifts in her face. She lifts her chin, holds your gaze a beat too long, and lets one corner of her mouth curl into the slow, devastating look she learned from you.',
          '@lilette:smug Well, mortal? Will you follow me into the Abyss?',
          'It works. It works *completely.* You say yes. She squeals, and the smolder collapses into giggles, and the Dean sighs and looks at the falling stars as if they have personally disappointed her.',
        ],
        next: 'dean_epilogue',
      },
      dean_epilogue: {
        text: [
          '*Some time later...*',
          'The Infernal Academy of Seduction has never seen anything like Professor Lilette. Her lecture hall is always full. Her course, *Falling In Love On Purpose*, has a waiting list three centuries long. Her practical exam has one question: *What would make them happy?* Most of her students fail it the first time. She gives them honey cakes and lets them try again.',
          'You teach Mortal Studies in the office next door. You are the only mortal on campus. Students follow you between classes, taking notes on how you hold a teacup. You give a lecture titled "Why We Like Knees" that is still talked about in hushed tones.',
          'The Abyss turns out to be less terrible than advertised. It\'s warm. The sunsets are spectacular, mostly because everything is on fire. Lilette has the cafeteria serve honey cakes on Fridays instead of regret. Attendance improves by forty percent.',
          'Fifty years later, Dean Vexaria retires to a villa on a lake of fire. On her last day, she hands Lilette the ledger, the quill and the spectacles.',
          '@dean Do not let it go to your head.',
          'Dean Lilette\'s first official act is to abolish the Smoldering Glances exam. Her second is to have your footnote engraved over the Academy gates. Her third is to lock her office door, sit on your desk, and give you the look. She\'s very, very good at it now.',
          'Every Starfall, the two of you climb up through the fire-vents to the mortal realm to watch the stars fall over Clichéton.',
          'She still trips over her tail on the way.',
        ],
        ending: 'lilette_dean',
      },
      baker: {
        text: [
          '@you Lilette. Is teaching seduction what *you* actually want?',
          'She opens her mouth to say yes. Nothing comes out. She closes it again.',
          '@lilette:sad Nobody\'s ever asked me that. At the Academy they don\'t ask what you *want.* They ask what you\'re *for.*',
          'She turns the glowing scroll over in her hands.',
          '@lilette You know what my favorite part of this whole month was? It wasn\'t the smoldering. It was three in the morning in the inn kitchen, when I couldn\'t sleep, and the cook let me bake honey cakes for you. I burned the first batch. And the second. The third was *perfect.* And you ate four, and you made a little noise, and I felt like I\'d been fed for a *year.*',
          '@lilette:blush I don\'t want to teach people to make other people want them. I want to make things people want. I want to bake.',
          '@lilette:surprised Oh, the Dean is going to *explode.* Literally. She does that.',
          'She rolls the scroll up and tucks it into her pocket next to the little embroidered heart.',
          '@lilette:happy I\'m keeping the diploma, though. I *earned* it.',
          'You kiss her. She smiles into it. Just smiles. As if that was the whole curriculum all along.',
        ],
        next: 'baker_epilogue',
      },
      baker_epilogue: {
        text: [
          '*Some time later...*',
          'The bakery opens on Market Street in the spring, under a pink-and-black sign with a little heart-tipped tail curled around the letters: *SINFULLY SWEET.*',
          'Lilette makes honey cakes, mostly. Also cinnamon horns, devil\'s food, and a strawberry tart called "The Chapter Twelve" that she refuses to explain. The queue goes round the block by sunrise.',
          'Something strange happens in that shop. People come in sad and leave happy. Customers swear the cakes are enchanted. They aren\'t. But every bit of joy that someone feels biting into one drifts, freely given, back across the counter to the succubus who made it. She has never been so well fed in her life. She glows so brightly in the mornings that the lamplighter skips your street.',
          'You do the early bake together. Your job is to stir. Her job is to taste. She takes her job very seriously. There is usually flour on her horns, and on you, and on the ceiling.',
          'Dean Vexaria visits once a year, glowers at everything, and buys a dozen honey cakes "for research." The Academy\'s cafeteria quietly starts serving them on Fridays.',
          'Lilette never does learn to smolder for longer than three seconds at a time. She doesn\'t need to.',
          'Every Starfall, you close the shop early, climb the hill with a basket of the day\'s last cakes, and watch the sky together. She feeds you the first bite. She still misses. You still let her try again.',
        ],
        ending: 'lilette_baker',
      },
    },
  },
});
