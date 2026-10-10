FL.addCharacter({
  id: 'shade',
  name: 'Shade',
  short: 'Shade',
  trope: 'Kuudere Assassin',
  color: '#8a93c9',
  favStat: 'wits',
  endingTitle: 'The Quiet Blade Retires',
  endings: { shade_partners: 'The Twin Shades' },
  teaser: 'A shadow on a rooftop that you swear wasn\'t there a second ago. It\'s gone when you blink.',
  blurb: 'A masked assassin of the Silent Guild. Flat voice, flat expression, terrifying competence. She speaks in short reports and claims to feel nothing. Her one known weakness: honey cakes. She is very interested in clever people, for professional reasons. Probably.',
  schedule: ['square', 'docks', ['noble', 'square']],
  gifts: { love: ['cakes'], like: ['dagger', 'tea', 'chocolate', 'salts'], hate: ['perfume', 'roses', 'mead'] },
  giftLines: {
    love: ['She stares at the honey cakes. She stares for a long time. Then she pulls her mask down just far enough to eat one in a single bite.', '@shade ...', '@shade:blush Acceptable. Highly acceptable. You have located my weakness. This is a serious tactical failure on my part.', 'Her ears are pink.'],
    like: '@shade Useful. Thank you. I will add it to my equipment.',
    neutral: '@shade:surprised ...I do not understand the purpose of this object. I will keep it until I do.',
    hate: ['@shade:angry Strong scent. Highly visible colors. This would compromise my position from forty paces.', '@shade:sad ...You intended it kindly. I will dispose of it kindly.'],
    special: {
      cakes: [
        'She is suddenly very close to you. The honey cakes are suddenly not in your hands. You did not see either thing happen.',
        '@shade:blush From the corner bakery. The second tray, which is the superior tray. The first tray is for tourists.',
        '@shade:surprised ...I never told you about the second tray. You observed it.',
        '@shade:smug This is unacceptable. I am going to be insufferable about it for several days.',
      ],
      dagger: [
        'She takes the silver dagger, balances it on one fingertip, flips it twice, and it vanishes somewhere about her person.',
        '@shade Silver. Well balanced. Effective against werewolves, vampires and very stubborn jars.',
        '@shade:blush I own thirty-one knives. This is now my favorite. Do not tell the other thirty-one.',
      ],
      fork: [
        'She takes the fork. She looks at it for a very long time.',
        '@shade Four tines. Concealable. Universally underestimated. No guard in history has ever confiscated a fork.',
        '@shade:smug ...You understand me better than the Guild ever did.',
      ],
      plushie: [
        'She holds the stuffed bunny at arm\'s length, the way one might hold a lit fuse.',
        '@shade:surprised It is soft. It is staring. Why is it staring.',
        '@shade:blush ...I will keep it. For target practice. I will never practice on it. Its name is Sergeant.',
      ],
      tea: [
        '@shade Tea. Excellent. It masks the taste of most common poisons.',
        '@shade:blush ...It also tastes good. I am permitted to notice that now. I am noticing it.',
      ],
      quill: [
        'She picks up the quill. It immediately writes across the back of her hand, in elegant looping script: *Short.*',
        '@shade:angry ...',
        'There is a blur. When it clears, the quill is pinned to the nearest wall by a throwing knife, still quivering.',
        '@shade It may stay there. As a warning to the other stationery.',
      ],
      salts: [
        '@shade Bath salts. For muscles. Some of my muscles have been tense for nine years.',
        '@shade:blush ...If I use these, I will be unarmed in a bathtub for several minutes. Someone would need to watch the door. Do you know anyone who watches doors.',
      ],
      roses: [
        '@shade:angry Red. Visible from every rooftop in the district. Fragrant enough to be tracked by a dog.',
        'She looks at the bouquet for a long while anyway.',
        '@shade:sad ...No one has given me flowers before. I cannot keep them. I am keeping one petal. In a pocket. Where it cannot be seen.',
      ],
    },
    repeat: '@shade Duplicate received. Logged. Stored beside the previous unit. ...There is a whole shelf now. The shelf is classified. The shelf is also my favorite place in the attic.',
  },
  talk: [
    ['She drops from a rooftop and lands silently beside you.', '@shade Report: You were followed by two pickpockets today. They have been dealt with. Not fatally. They are hanging from a flagpole.'],
    ['@shade You blink fifteen times per minute. When you are nervous, twenty-two. Currently: twenty-one.', '@shade:smug ...Am I making you nervous?'],
    ['@shade I have no feelings. I am a blade in the dark. ...That cat is very fluffy. Please do not tell anyone I stopped to look at it.'],
    ['@shade:sad My name is not Shade. Shade is a designation. My real name was erased by the Guild when I was twelve.', '@shade:sad I do not miss it. ...I sometimes wonder what it was.'],
    ['@shade Small talk. You enjoy it. I am attempting it. ...The weather is weather today. Correct?'],
    ['@shade I counted the exits in the tavern you visited last night. Nine. You sat with your back to all of them. Please stop doing that. It is distressing to watch.'],
    [
      '@shade I have been studying humor. For infiltration purposes.',
      '@shade A knight, a wizard and a bishop walk into a tavern. The knight has a concealed blade in his left boot. The wizard has already located three exits. The bishop is me, in disguise.',
      '@shade ...',
      '@shade:surprised You are laughing. The joke was effective. I do not know which part was the joke.',
    ],
    [
      'She is standing perfectly still in the middle of the square. A pigeon is sitting on her head.',
      '@shade Do not move. It trusts me.',
      '@shade:blush This has never happened before. Animals usually flee. I have been standing here for two hours. I can no longer feel my legs. I have never been happier.',
    ],
    [
      '@shade The Guild taught me forty-three ways to kill a man with household objects.',
      '@shade It did not teach me how to cook an egg. I attempted one this morning. The egg is now classified as a casualty.',
      '@shade:sad Would you show me. The egg. Not the killing. I am already proficient at the killing.',
    ],
    { if: 'shade_spotted', lines: [
      '@shade You noticed I was on tiptoe. The day we met. In the fountain.',
      '@shade:angry I have since purchased boots with a two-inch heel. You will not catch me at a disadvantage again.',
      '@shade:blush ...I have never told anyone that I was on tiptoe. Only you know. I would like it to stay that way.',
    ] },
    { if: 'shade_lonely', lines: [
      'She sits beside you on the edge of the fountain. Her shoulder touches yours.',
      '@shade Continuing the proximity experiment.',
      '@shade Results so far: loneliness reduced by approximately sixty percent. Side effects include warmth, distraction, and an urge to remain longer than is operationally necessary.',
      '@shade:blush I will need to repeat the experiment many times. For accuracy.',
    ] },
    { if: 'shade_fun', lines: [
      '@shade:smug I have been practicing being fun. As discussed on the clocktower.',
      '@shade Today I returned a stolen purse to a merchant by dropping it into his soup from a rooftop. He screamed. Then he found the purse. Then he wept. Then he bought the entire tavern a round.',
      '@shade:surprised Was that fun? It felt fun. I require a second opinion.',
    ] },
    { if: 'shade_stakeout', lines: [
      '@shade The smuggler from the clocktower stakeout has been sentenced. The magistrate asked who spotted the hollow apples. I gave your name.',
      '@shade:smug You are now listed in the court records as "a civilian of unusual perception." I have requested a copy. I intend to frame it.',
      '@shade:blush ...It will hang above my bed. Where I can see it. That is not strange. Many people have court records above their beds.',
    ] },
    { if: 'shade_face', lines: [
      '@shade:blush Since you saw my face, I have started looking at it. In windows. In puddles. In the backs of spoons. I never looked before.',
      '@shade I wanted to know what you saw.',
      '@shade:sad It is a very ordinary face. You said beautiful. I am still investigating the discrepancy.',
    ] },
  ],
  afterTalk: [
    ["A honey cake appears in your pocket. You didn't see her. You never see her.", "A note is pinned to it: *For later. Also: the attic. Tonight. — S.*"],
    ["@shade:blush I attempted to purchase a dress today. The shopkeeper asked what it was for. I said, \"Reconnaissance.\" ...I bought three."],
    ["She drops from a rooftop and lands beside you, closer than strictly necessary.", "@shade:blush Status report: I have been thinking about you at a rate of approximately once every forty seconds. This is a severe operational concern."],
    ["@shade:happy I know the location of every exit in this town. I have recently discovered that I do not want to use any of them. That is new."],
    [
      '@shade I have a new problem.',
      '@shade:blush When I am away from you, I compose reports in my head. *Subject purchased bread. Subject smiled at a dog. Subject looks extremely good in afternoon light.*',
      '@shade I have nowhere to file them. So I am delivering them in person.',
      'She hands you a folded square of paper. In very neat handwriting, it says: *Missed you. 14:00 to 16:30. Unacceptable.*',
    ],
    { if: 'shade_cake', lines: [
      '@shade Do you remember the stakeout on the clocktower? You offered me a honey cake while I was on duty.',
      '@shade:smug I have reviewed that decision many times. Conclusion: it was the most dangerous thing anyone has ever done to me. Nine years of training, undone by a single cake.',
      '@shade:blush Do it again. I will pretend to resist.',
    ] },
    { if: 'shade_watch', lines: [
      '@shade You kept watch, that first morning. Nothing moved.',
      '@shade:blush I have slept facing away from the door every night since. When I wake up afraid, I listen for you breathing. It is a better alarm than any I have built.',
    ] },
    { if: 'shade_scar', lines: [
      'She lifts the hem of her shirt an inch to show you the scar along her ribs, crooked and pink.',
      '@shade:happy It healed. Crooked, as predicted. Objectively, it is not a very good scar.',
      '@shade It is my favorite one. I check on it every morning. I have never wanted to keep anything before.',
    ] },
    { if: 'shade_date_harbor', lines: [
      '@shade I went back to the end of the pier this morning. Where we watched the sunset.',
      '@shade:smug I sat with my back to the open water. Completely exposed. No wall. No cover.',
      '@shade:blush Nothing happened. A gull stole my breakfast. It was an excellent morning.',
    ] },
  ],
  dateFav: 'dinner',
  dates: {
    dinner: {
      start: {
        text: [
          'The corner booth at the Tipsy Wyvern has candlelight, the good wine, and exactly one seat with its back to the wall. Shade stops at the edge of the booth and looks at that seat the way other women look at diamond rings.',
          '@shade That seat has a clear view of the front door, the kitchen door, the stairs and the window. It is the best seat in the tavern.',
          '@shade:sad There is only one of it.',
          { if: { stage: 4 }, text: 'She isn\'t wearing her mask at all anymore. Two different barmaids walk past without recognizing the most feared assassin in the kingdom, and one of them calls her "sweetheart."', else: 'She lowers her mask exactly as far as the menu requires, and not one hair further.' },
        ],
        choices: [
          { text: 'Slide in beside her on the same side of the booth, so you both face the door.', go: 'beside', aff: 6 },
          { text: 'Let her have the seat facing the door.', go: 'give', aff: 3 },
          { text: 'Take the good seat yourself. "I\'ll keep watch. I\'ll report anything."', go: 'report', aff: 1 },
        ],
      },
      beside: {
        text: [
          'You slide onto the bench beside her. Your shoulders touch. You both have a perfect view of every door in the room.',
          'Shade stares at you.',
          '@shade:surprised Tactically, that is flawless.',
          '@shade:blush ...Romantically, it is also flawless. I did not know those two things could happen at the same time.',
          'She eats an entire honey cake pudding without looking away from the door once. Her knee stays pressed against yours under the table the whole meal. At some point she whispers, *a man by the bar has a stolen watch*, and then, a moment later, *I like this booth*, in exactly the same tone of voice.',
        ],
        end: true,
      },
      give: {
        text: [
          'She sits. Some tension leaves her shoulders that you didn\'t know was there.',
          '@shade Thank you. Most people insist on the seat. Then they spend the evening wondering why I keep looking past them.',
          '@shade:blush I will try to look at you instead. I may glance at the door every thirty seconds. Do not take it personally. It is the door I distrust. Not you.',
          'She glances at the door every forty seconds. You count. It\'s an improvement.',
        ],
        end: true,
      },
      report: {
        text: [
          '@you Barmaid, approaching. Man at the bar, picking his teeth. Someone just dropped a spoon.',
          '@shade:angry Which spoon. Where. Who dropped it.',
          '@you Er. The man with the beard?',
          '@shade:angry Which man with the beard. There are *six* men with beards.',
          'By the time the main course arrives she is perched on the edge of the booth like a coiled spring, and you have described the movements of every spoon in the Tipsy Wyvern.',
          '@shade:sad ...I appreciate the effort. Please never do it again.',
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          'The Moonlit Gardens are all silver light and whispering hedges. Shade walks beside you in perfect silence, and you slowly realize she is narrating the guard rotation under her breath.',
          '@shade Two guards. Sixty-second loop. One of them is asleep standing up. The hedge maze has three dead ends and a bench where the baron\'s nephew meets the cook\'s daughter on Thursdays.',
          '@shade:blush ...Apologies. That is not romantic. I am told the roses are romantic. I am looking at the roses now.',
          'She is not looking at the roses. She is looking at you.',
        ],
        choices: [
          { text: 'Challenge her to hide-and-seek in the hedge maze. [Wits check 3]', check: { stat: 'wits', dc: 3 }, pass: 'hide_win', fail: 'hide_fail' },
          { text: 'Stop and smell the roses. Literally.', go: 'roses', aff: 2 },
        ],
      },
      hide_win: {
        text: [
          'You don\'t hide in the maze. You hide *on* it, flat on top of a hedge where the trim is thickest, perfectly still, while she sweeps every dead end below you.',
          'It takes her nine minutes to find you. When she finally looks up, her lavender eyes go wide.',
          '@shade:surprised Nine minutes. No one has hidden from me for nine minutes. The Guild\'s best tracker lasted four.',
          '@shade:blush Come down. ...No. Stay there. I am coming up.',
          'She vaults onto the hedge beside you, and the two of you lie on top of the maze looking at the stars, while the sleeping guard snores below.',
        ],
        aff: 6,
        end: true,
      },
      hide_fail: {
        text: [
          'You find what you think is a brilliant hiding place behind a statue of a weeping nymph.',
          'Four seconds later, a hand taps your shoulder.',
          '@shade:smug Your boots squeak. You breathe through your mouth. You hid behind the only statue in the garden with a shadow facing the wrong way.',
          '@shade:happy ...Again. You will improve. I enjoy finding you.',
          'You play eleven more rounds. You lose every one. She looks happier with each.',
        ],
        aff: 3,
        end: true,
      },
      roses: {
        text: [
          'You bend over a white rose and breathe in. Shade watches with deep suspicion.',
          '@shade:angry Roses. Highly fragrant. Trackable at a distance. Thorned. Planted along every approach in this garden for a reason.',
          '@you Try it.',
          'She leans down, very cautiously, and sniffs. Then sniffs again. Then stays bent over the rose for a long time with her eyes closed.',
          '@shade:blush ...It is still a tactical liability. It is also very nice. I am filing both reports.',
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          'At the end of the pier there is open water on three sides and nothing at your back but the sunset. Shade takes one look at the arrangement and stiffens like a cat on a wet floor.',
          '@shade No walls. No cover. Every approach is from the front, and the sea is behind me. I would never sit here on a mission.',
          '@shade:sad ...But you want to watch the sun go down. And the sun goes down over there. In the exposed direction.',
          'She holds her paper cone of fried fish like a shield.',
        ],
        choices: [
          { text: '"Sit with your back to me. I\'ll be your wall."', go: 'wall', aff: 6 },
          { text: 'Toss a piece of fish to a gull.', go: 'gulls', aff: 3 },
        ],
      },
      wall: {
        text: [
          'You sit at the very end of the pier with your back against a mooring post, and she sits between your knees and leans back against your chest, very slowly, as if testing ice.',
          'You feel the moment she decides to trust it. Her whole body lets go.',
          '@shade:surprised Oh.',
          'The sun goes down in red and gold. She watches all of it. She does not count a single exit.',
          { if: { stage: 4 }, text: 'When the last light is gone she tips her head back against your shoulder and kisses the underside of your jaw, quick and soft, the way she might plant a blade where no one would think to look.' },
          '@shade:blush Report: I watched a sunset. Number of threats: zero. Number of walls: one. The wall was excellent.',
        ],
        end: true,
      },
      gulls: {
        text: [
          'You toss a scrap of fish into the air. A gull snatches it. Then four more gulls arrive. Then twenty.',
          '@shade:angry Behind me. *Now.*',
          'What follows is two minutes of the most graceful, terrifying and entirely non-lethal combat you have ever seen. She defends your dinner with a fork. The gulls are routed. Not one feather is harmed. Every one of them is deeply embarrassed.',
          '@shade:smug They will tell the other gulls. We will not be troubled again.',
          'You are troubled again about ten minutes later. She handles it. She is, you think, having the time of her life.',
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          'Shade inspects the picnic blanket for tripwires, checks the basket for false bottoms, and climbs a tree to survey the clearing before she will sit down.',
          '@shade So this is a picnic. Eating outdoors. On purpose. Without an ambush.',
          '@shade:surprised People do this *voluntarily?*',
          'She has brought honey cakes and, for some reason, a full field-ration kit with flint, rope and a small grappling hook.',
          '@shade:blush ...In case the picnic goes badly.',
        ],
        choices: [
          { text: 'Lie back on the blanket and teach her to look for shapes in the clouds.', go: 'clouds', aff: 5 },
          { text: 'Sneak up behind her and surprise her with a hug.', go: 'hug', aff: 2 },
        ],
      },
      clouds: {
        text: [
          'You lie side by side and look up. She takes the exercise very seriously.',
          '@shade That cloud is shaped like a crossbow. That one is a battering ram. That one is the Guildmaster\'s face, if he were made of steam and very much smaller.',
          '@you Try to find something nice.',
          'A long silence.',
          '@shade:happy ...That one is a honey cake. And that one is a cat. A fluffy one. And that one.',
          'She points at a small, lopsided cloud drifting beside a larger one.',
          '@shade:blush That one is us.',
        ],
        end: true,
      },
      hug: {
        text: [
          'You creep up behind her very, very quietly and throw your arms around her shoulders.',
          'There is a blur. You are on your back on the blanket with the sky spinning above you, and a small, mortified assassin kneeling on your chest.',
          '@shade:surprised — *Apologies.* Reflex. Are you injured. Say something. Blink twice if you can hear me.',
          'You blink twice. She makes a sound you have never heard her make before. It takes you a moment to realize that she is laughing.',
          '@shade:happy You hugged me from behind. *No one* does that. That was the stupidest thing I have ever seen.',
          '@shade:blush Do it again in about a month. I will be ready. I will let you.',
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'You\'re crossing the square when the hair on the back of your neck stands up. Then you feel it: cold steel resting lightly against your throat, and a body pressed silently against your back.',
          '@shade Do not move. Do not speak. State your name.',
          '@you ...You told me not to speak.',
          'A pause.',
          '@shade:surprised ...Valid point. You may speak only to state your name.',
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
          '@shade:angry ...Correct. Observant. That is very irritating.',
          'The blade withdraws. When you turn, her lavender eyes are studying you over a dark cloth mask with what might be — very faintly — interest.',
        ],
        aff: 7,
        flag: 'shade_spotted',
        next: 'name',
      },
      spot_fail: {
        text: [
          'You try to look for her reflection in the fountain. All you see is a pigeon looking judgmental.',
          '@shade:smug You are looking at the pigeon. The pigeon is not the threat.',
          'The blade withdraws. You turn around to find a small woman in dark leathers and a black cloth mask, watching you with flat lavender eyes.',
        ],
        next: 'name',
      },
      hello: {
        text: [
          '@shade:smug No. Most people do not get a hello. Most people get a goodbye.',
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
          '@shade:smug No. But no one ever believes me.',
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
          '@shade:blush It is a factual assessment. ...It is also a compliment.',
          'You settle in beside her. Below, the market crowd swirls like a river.',
        ],
        choices: [
          { text: 'Scan the crowd methodically for anything out of place. [Wits check 2]', check: { stat: 'wits', dc: 2 }, pass: 'spot_win', fail: 'spot_fail' },
          { text: 'Offer her a honey cake from your pack.', go: 'cake', aff: 6, flag: 'shade_cake' },
        ],
      },
      spot_win: {
        text: [
          'It takes an hour. Then you see it: a man buying apples who doesn\'t eat apples — he hands each one to a woman at the next stall without looking at her. Something glints inside the third apple.',
          '@you There. The apple seller and the woman in green. The apples are hollow.',
          'Shade follows your gaze. Her eyes widen a fraction of a millimeter.',
          '@shade:surprised ...Correct. I missed that. I do not miss things.',
          'She drops off the roof. Thirty seconds later, the smuggler is unconscious and the woman in green is tied to a lamppost with her own scarf. Shade reappears beside you without a hair out of place.',
          '@shade:blush Mission complete. Your contribution was... significant.',
        ],
        aff: 8,
        flag: 'shade_stakeout',
        next: 'cakes',
      },
      spot_fail: {
        text: [
          'You stare at the crowd for an hour. You spot nothing except a dog stealing a sausage.',
          'Shade, however, suddenly drops off the roof. Thirty seconds later a smuggler is unconscious in an alley. She reappears beside you.',
          '@shade:smug Mission complete. You were... moral support.',
          '@you Is that useful?',
          '@shade:blush ...Unexpectedly, yes.',
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
          '@shade:blush That was a tactical error. I am now distracted. If the smuggler appears, it is your fault.',
          'The smuggler appears. She catches him anyway, in about four seconds.',
        ],
        next: 'cakes',
      },
      cakes: {
        text: [
          'Afterward, you sit together on the edge of the roof as the city lights come on below. Your legs dangle over the drop. Hers are tucked neatly under her.',
          '@shade May I ask a question?',
          '@you Sure.',
          '@shade:sad Why do you talk to me? I am an assassin. I have no feelings. I am not... pleasant company.',
        ],
        choices: [
          { text: '"Because I think you\'re lonely."', go: 'lonely', aff: 7, flag: 'shade_lonely' },
          { text: '"Because you\'re fun. In a terrifying way."', go: 'fun', aff: 6, flag: 'shade_fun' },
        ],
      },
      lonely: {
        text: [
          'She doesn\'t answer for a long time. A bat swoops past.',
          '@shade:sad ...That is not a feeling I was trained to have.',
          '@you That\'s not the same as not having it.',
          'She looks at you sideways. Then, very deliberately, she shifts an inch closer, until her shoulder just barely touches yours.',
          '@shade:blush Hypothesis: proximity reduces loneliness. Testing.',
        ],
        end: true,
      },
      fun: {
        text: [
          '@shade:surprised Fun.',
          'She says the word like she\'s tasting it.',
          '@shade No one has called me fun. They call me "that one," and "oh gods," and occasionally "please, I have a family."',
          '@shade:happy I will try to be more fun. ...Not with the knives.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'There\'s a soft knock on your window. On the third floor.',
          'You open it. Shade is clinging to the sill, one-handed. Her other arm is clutched against her side. Her grey leathers are dark and wet.',
          '@shade:sad Apologies. I require assistance. I did not know where else to go.',
          'You pull her in. She\'s bleeding from a long cut across her ribs. Up close, through the mask, you can see she\'s very pale.',
          '@shade An ambush. Six of them. I defeated five. The sixth was... lucky.',
          { if: 'shade_lonely', text: '@shade:blush I have six safehouses. Two are closer than this window. I came here instead. Proximity hypothesis. I required... data.' },
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
          '@shade:surprised ...Your work is better than the Guild physician\'s. You are full of anomalies.',
        ],
        aff: 8,
        flag: 'shade_stitched',
        next: 'feeling',
      },
      stitch_fail: {
        text: [
          'You do your best. The stitches are uneven and slightly crooked. She watches you the whole time with flat, unreadable eyes.',
          '@shade ...That will leave a scar.',
          '@you Sorry.',
          '@shade:blush Do not apologize. I have many scars. This one will be the first one I do not mind.',
        ],
        aff: 5,
        flag: 'shade_scar',
        next: 'feeling',
      },
      healer: {
        text: [
          'She grabs your wrist before you can reach the door.',
          '@shade:angry No. No healers. They would report it. The Guild would know I was weak.',
          '@shade:sad ...Please. Just you.',
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
          '@shade:surprised It is happening again now. Do you think I was poisoned?',
        ],
        choices: [
          { text: '"I don\'t think it\'s poison, Shade."', go: 'not_poison', aff: 8 },
          { text: 'Gently lower her mask. "Can I see your face?"', go: 'mask', aff: 10, flag: 'shade_face' },
        ],
      },
      not_poison: {
        text: [
          '@shade Then what is it?',
          '@you I think... it\'s the feeling you weren\'t trained to have.',
          'She is silent for a very long time.',
          '@shade:sad ...That is far more dangerous than poison.',
          'She falls asleep there, on your bed, her hand still holding yours. You don\'t let go until morning.',
        ],
        end: true,
      },
      mask: {
        text: [
          'She tenses — every muscle coiled — and you stop, waiting. After a long moment, she gives the smallest nod.',
          'You lower the mask. Underneath, she\'s younger than you expected: a sharp little chin, a faded scar across one cheek, a small serious mouth. She\'s flushed pink from her nose to her ears.',
          '@shade:blush ...No one has seen my face in nine years. This is a severe breach of protocol.',
          '@you You\'re beautiful.',
          'She immediately pulls the blanket over her head.',
          '@shade:blush Malfunction worsening. Please stop talking.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'She\'s waiting for you on the clocktower roof at midnight. Her mask is gone. Her grey leathers are gone too, replaced with a simple dark dress that looks like she bought it this morning and has been staring at it ever since.',
          { if: 'shade_face', text: '@shade:blush You have seen my face before. You were the first. It seemed inefficient to keep hiding it from the only person who matters.', else: '@shade:blush This is my face. No one has seen it in nine years. It seemed correct that you should be the first.' },
          '@shade I have resigned from the Silent Guild.',
          '@you You... can do that?',
          '@shade:smug Technically no. Technically they will now send people to kill me. I have prepared. They will be very disappointed.',
          'She stands up and faces you. Her hands are fidgeting at her sides — the first time you\'ve ever seen her hands do anything that wasn\'t precise.',
          '@shade:blush I have spent nine years being a blade. I would like to try being a person. I have identified the person I would like to try it with. It is you.',
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
          { if: 'shade_fun', text: '@shade:smug Four and a half. Be fun. Progress: ongoing. Results: promising.' },
          '@shade Five.',
          'She stops. She looks at you. Her face goes red.',
          '@shade:blush Five is classified.',
          '@you What\'s number five, Shade?',
          '@shade:blush ...Number five is you.',
        ],
        aff: 15,
        flag: 'shade_list',
        next: 'yes',
      },
      yes: {
        text: [
          'She steps forward, rises onto her toes — and kisses you, very carefully, as if it were a lock she was trying to pick.',
          'She pulls back and studies your face intently.',
          '@shade:surprised Was that correct? I have only read about it. In reports.',
          '@you Want to try again? For thoroughness?',
          '@shade:blush ...Yes. For thoroughness.',
          'The second time is less careful. The third time, she makes a soft, surprised noise against your mouth, and her hands knot in your shirt, and all of her clinical precision dissolves.',
        ],
        next: 'night',
      },
      night: {
        text: [
          "Her safehouse is a tiny attic room hidden behind a false wall. It has a bed, a weapons rack and a jar of honey cakes. She locks the door, hesitates, unlocks it, then locks it again.",
          "@shade:blush I am... nervous. I have never been nervous before. I have walked into a room of twenty armed men without being nervous.",
          "@you We can go as slow as you want.",
          "@shade ...Slow. Yes. Slow is good.",
          "She approaches it the only way she knows how: like a mission. She disarms first. Two knives from her sleeves, one from her boot, one from her hair, one from somewhere you genuinely didn't see. Each one goes on the rack with a click. Then she starts on your buttons with steady fingers and total focus.",
          "@shade Report each sensation. I need data.",
          "You report. She listens with total concentration and adjusts accordingly, and she's devastatingly effective. She finds every sensitive point the way she'd find the gaps in a suit of armor. She marks each one with her mouth and files it away. She has, it turns out, studied anatomy *very* thoroughly.",
          "Then you turn the tables. You slide your hands under her leathers and trace the scars along her ribs, slowly, one by one. The steady breathing she has trained for nine years finally breaks.",
          { if: 'shade_stitched', text: 'Your fingers find the newest scar, the neat line you stitched yourself on the night she came to your window. She covers your hand with hers and holds it there, pressed flat, as though she could keep it.' },
          { if: 'shade_scar', text: 'Your fingers find the newest scar, crooked and still pink. *The first one I do not mind,* she told you. She shivers when you touch it, and it isn\'t from pain.' },
          "@shade:blush That — that is not — I cannot catalogue this — *{name}* —",
          "She stops cataloguing. She simply *feels*, maybe for the first time in her life. She's not silent at all...",
          "...",
          "In the small hours of the morning she lies with her head on your chest and her back to the door.",
          "You feel her shaking against you, and for a moment you think she's crying.",
          "She's laughing, softly and helplessly, as if she's just discovered how.",
          { if: 'shade_list', text: "@shade:happy Number four. Complete.", else: "@shade:happy I laughed. I did not know I could do that. I am going to have to start a list." },
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
          "@shade:blush Additional report: I slept. Actually slept. Facing away from the door. For the first time in nine years.",
          { if: 'shade_cake', text: "@shade:smug You introduced me to honey cakes on duty. I am now expanding the program to honey cakes in bed. Field trials are going well." },
          "She stares at the honey cake.",
          "@shade:surprised I do not know what to do with this information. Or with my face. It keeps doing this.",
          "She's smiling. She can't seem to stop.",
        ],
        choices: [
          { text: "\"Keep doing it. It looks good on you.\"", go: "smile", aff: 6 },
          { text: "\"Come back to bed. I'll keep watch this time.\"", go: "watch", aff: 6, flag: 'shade_watch' },
          { text: "Steal one of her honey cakes.", go: "steal", aff: 5 },
        ],
      },
      smile: {
        text: [
          "@shade:blush ...Acknowledged.",
          "She tries to make her face stern. She fails completely. She pulls your shirt up over her nose instead, so only her eyes show, and they're crinkled at the corners.",
          "@shade:happy This is worse than the mask. I can't hide anything in this.",
        ],
        end: true,
      },
      watch: {
        text: [
          "She considers the offer with total seriousness. Then she crosses the room and slides back under the blanket beside you, her back against your chest. She takes your arm and places it over her waist, precisely, like adjusting a strap.",
          "@shade You will wake me if anything moves.",
          "@you Promise.",
          "@shade:blush ...I trust you. That is also new.",
          "She's asleep in under a minute. You keep watch, and absolutely nothing moves, and it's one of the best hours of your life.",
        ],
        end: true,
      },
      steal: {
        text: [
          "You reach across and take one of her honey cakes. She doesn't stop you.",
          "There's a long pause.",
          "@shade:surprised I let you do that. Do you understand the significance? I have killed men for less. Well. Not killed. Very seriously inconvenienced.",
          "Then she leans down and kisses the honey off your lips, very thoroughly.",
          "@shade:smug Retrieval complete.",
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
          '@shade:blush I did not want anything to interrupt.',
        ],
        next: 'plans',
      },
      plans: {
        text: [
          'She sets the basket down between you and folds her hands in her lap, the way she does before a briefing.',
          '@shade Before the stars fall, I must present my plans for the rest of my life. There are two.',
          '@shade Plan A. I open a bakery. I make honey cakes. I learn to be a person, slowly, in a warm place that smells good. I have already selected premises.',
          { if: ['shade_stakeout', { any: ['shade_spotted', 'shade_stitched'] }],
            text: ['@shade Plan B. I do not stop. I keep doing what I am good at, but only for people who need it, and never alone again. Plan B requires a partner. Someone observant. Someone with steady hands. Someone who does not look at the pigeon.', '@shade:blush I have exactly one candidate for Plan B.'],
            else: '@shade:smug There was a Plan B. It required a partner with very specific skills. I have shredded it. Plan A has cake.' },
        ],
        choices: [
          { text: '"Plan A. Honey cakes, a warm kitchen, and you."', go: 'fall' },
          { text: '"Tell me more about Plan B, partner."', go: 'partners', if: ['shade_stakeout', { any: ['shade_spotted', 'shade_stitched'] }] },
        ],
      },
      fall: {
        text: [
          'You watch the stars fall together. She eats honey cakes openly, in front of everyone, and doesn\'t hide it once.',
          '@shade I have decided on my name.',
          '@you Yeah?',
          '@shade:happy Wren. It is a small, quiet bird. It sings very loudly when it is happy.',
          'She looks up at you, and she smiles — a real smile, small and crooked and blinding.',
          '@shade:blush I would like you to be the first to say it.',
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
          { if: 'shade_list',
            text: ['Her list hangs framed on the bakery wall. Every item has been checked off.', 'Number five has been checked off many, many times.'],
            else: ['A new list hangs framed on the bakery wall, in very neat handwriting: *Things I Am Allowed To Want.* It gets longer every week.', 'Your name is at the top. It is underlined twice.'] },
        ],
        ending: 'shade',
      },
      partners: {
        text: [
          '@you Tell me more about Plan B, partner.',
          'Something lights behind her eyes, quick and sharp as a struck match.',
          '@shade:smug Partner. You said partner. I am recording that as a verbal agreement.',
          '@shade:happy Plan B. We work at night. We take only the jobs I would be proud of: kidnapped heirs, stolen orphanage funds, nobles who believe a moat makes them untouchable. You find the hollow apples. I deal with whoever is holding them.',
          { if: 'shade_stitched', text: '@shade You stitch better than the Guild physician. I have already ordered you a field kit. It has your initials on it. I embroidered them myself. Badly.' },
          { if: 'shade_spotted', text: '@shade:blush You saw me in the fountain on the very first day. No one has ever seen me coming. I would like to spend the rest of my life beside the one person who does.' },
          '@you And your name? Did you choose one?',
          '@shade:blush I did. It is classified.',
          'The first star falls. She rises onto her toes, puts her lips against your ear, and whispers it: one soft word, meant for nobody else on the hill, or in the kingdom, or in the world.',
          '@shade:happy Now two people know it. That is the correct number.',
        ],
        next: 'partners_epi',
      },
      partners_epi: {
        text: [
          '*Some time later...*',
          'Clichéton acquires a legend: two shadows on the rooftops, moving as one. Kidnappers wake up tied to the town fountain with a list of their crimes pinned to their chests in two different handwritings, one very neat and one considerably less so.',
          'The criers call them the Twin Shades. She finds the name "unoriginal" and "accurate" in the same breath. Their calling card is a single honey cake left on the windowsill of whoever hired them. The bakery on the corner has never sold so many.',
          'The Silent Guild sends operatives after her twice. The first group is returned by post. The second group asks to join. She interviews them, rejects four for poor posture, and hires the fifth as a bookkeeper.',
          'By day you live in her attic, which has grown into two attics and a rooftop garden. She still briefs you every morning: *weather, threats, three things I like about you, in descending order of urgency.* You still catch her watching you sleep, logging data. The data is no longer classified. She reads it to you over breakfast.',
          'She laughs more than anyone would believe. Usually at your jokes. Sometimes at her own, which she still delivers like a death sentence.',
          'And on the rare nights with no job, you sit on the edge of the clocktower roof, your legs dangling over the drop, hers tucked neatly under her, and she leans her shoulder against yours.',
          { if: 'shade_lonely',
            text: ['@shade:happy Proximity experiment. Day four hundred and twelve.', '@shade:blush Results: conclusive.'],
            else: ['@shade:happy Status report: everything is fine.', '@shade:blush ...That has never been true before. Logging it.'] },
        ],
        ending: 'shade_partners',
      },
    },
  },
});
