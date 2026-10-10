FL.addCharacter({
  id: 'mira',
  name: 'Mira Hartwell',
  short: 'Mira',
  trope: 'Tsundere Guild Receptionist',
  color: '#ff8f5a',
  favStat: 'might',
  endingTitle: 'Paperwork of the Heart',
  endings: { mira_partners: 'Field Audit, Permanent', mira_desk: 'The Other Side of the Desk' },
  teaser: 'A twin-tailed receptionist is stamping forms with the fury of a thousand suns.',
  blurb: 'The Adventurers\' Guild\'s most efficient — and most terrifying — receptionist. Short-tempered, sharp-tongued, allergic to sincerity. She insists she doesn\'t care what happens to you out there. She has memorized every quest you\'ve taken.',
  schedule: ['guild', 'guild', 'tavern'],
  gifts: { love: ['novel', 'plushie'], like: ['cakes', 'chocolate', 'tea', 'quill', 'salts'], hate: ['steak', 'fish', 'relic'] },
  giftLines: {
    love: ['She snatches it out of your hands and hides it under the counter so fast it\'s a blur.', '@mira:blush I-I don\'t even LIKE these! Who told you?! I\'m only keeping it so you don\'t embarrass yourself giving it to someone else! ...Thank you. *Shut up.*'],
    like: '@mira:blush Hmph! I guess I\'ll take it. Since you went to all the trouble. Not that I asked! ...It\'s good, okay?',
    neutral: '@mira:smug What is this, a bribe? Bribing a Guild official is a Class C offense! ...I\'ll let it slide. This once.',
    hate: ['@mira:angry EW! Why would you — this is *raw!* This is a professional workplace!', 'She flings it into the bin and glares at you over her spectacles.'],
    special: {
      novel: [
        "She sees the cover. She goes white, then pink, then a red so deep it's nearly purple.",
        "@mira:blush *The Duke's Forbidden Passion, Volume Nine.* I have never heard of this series. I have certainly not read Volumes One through Eight on my lunch break inside a quest folder so Gerald thinks I'm reviewing goblin bounties.",
        "@mira:angry Volume Eight ended on a CLIFFHANGER. The Duke was *on a horse.* In the RAIN. Do you have ANY idea —",
        "She stops. She tucks the book inside a folder marked GOBLIN BOUNTIES (Q3).",
        "@mira:blush ...Thank you. If you spoil it, I will revoke your Guild membership.",
      ],
      plushie: [
        "She holds the bunny at arm's length like a suspicious parcel.",
        "@mira:angry This is a *toy.* I am a Senior Registrar. I do not have *toys* on my —",
        "The bunny is on her desk by the end of the day, propped against the inkwell, wearing a tiny paper badge that reads ASSISTANT REGISTRAR.",
        "@mira:blush It's a *paperweight.* It weighs down papers. That's a job. ...His name is Form 27-B. Don't make it weird.",
      ],
      fork: [
        "@mira:surprised A fork. You've brought me a single, ordinary fork.",
        "She turns it over, inspecting it for a maker's mark, a hidden message, a reason.",
        "@mira:smug ...Fine. Fine! I'm logging it. Item: Fork (One). Sender: Idiot (One). Purpose: Unknown. — I'm keeping it with my lunchbox. Since you clearly think I need *cutlery supervision.*",
      ],
      quill: [
        "She uncaps the enchanted quill. It immediately writes *YOUR FILING SYSTEM IS AN EMBARRASSMENT* across her blotter in gorgeous copperplate.",
        "@mira:angry How DARE —",
        "@mira:surprised ...Look at that *ascender* on the B, though.",
        "@mira:happy I'm keeping it. We're going to have words, this quill and I. I'm going to win.",
      ],
      relic: [
        "@mira:surprised Is that a — that's a *knuckle.* That is a person's KNUCKLE in a little gold box.",
        "@mira:angry I do not accept body parts at this desk! There's a FORM for body parts! The Temple has a whole DEPARTMENT! Get it out, get it out, get it OUT —",
      ],
      salts: [
        "@mira Bath salts. Lavender. For... relaxing.",
        "She sniffs the jar suspiciously, then not so suspiciously, then for quite a long time with her eyes closed.",
        "@mira:blush ...I haven't had a bath that wasn't a *rinse* in nine years. Nobody ever — hmph. This is a perfectly reasonable gift. I'm going home early. Don't tell anyone that either.",
      ],
    },
    repeat: "@mira:smug Another one? I'm starting a file. \"Gifts, Repetitive.\" It's getting thick. ...I'm not saying stop. I'm saying I've *noticed.*",
  },
  talk: [
    ['@mira:angry You again? Don\'t you have a quest or something? Not that I care. I just don\'t want you cluttering up my lobby.', 'She slides a quest scroll across the desk. It\'s the best-paying one on the board. She doesn\'t make eye contact.'],
    ['@mira:smug Your form from last week had *four* spelling errors. Four! I fixed them. Not for you! For the *archives.*'],
    ['@mira:happy You came back without any injuries this time. Good. I mean — the Guild\'s medical budget is very tight! That\'s all!'],
    ['@mira:angry Do you know how many idiots die in their first month as adventurers? Thirty percent! So don\'t you dare be part of that thirty percent, you hear me?!', '...', '@mira:blush For STATISTICAL reasons.'],
    ['She\'s eating lunch at her desk: a sad little sandwich.', '@mira:angry What? Receptionists eat. We\'re people. Stop staring. ...Do you want half?'],
    ['@mira:blush My twin-tails? They are a *professional hairstyle*, thank you very much. They are aerodynamic. ...What do you mean they\'re cute?! They are NOT cute! Go away!'],
    ['@mira:smug I heard you took down a whole pack of goblins yesterday. ...Not bad. For a rookie. Don\'t let it go to your head!'],
    ["@mira:angry The desk next to mine is staffed by Gerald. Gerald stamps upside down. Gerald once registered a mimic as \"Chest (Hostile)\" and *gave it a quest.*", "@mira:angry The mimic is now Rank B. It has a better completion rate than you. I hate Gerald."],
    ["@mira:smug I put the good quests on the board at eye level. *Your* eye level. I measured — I *estimated.* From across the room. Using professional instincts.", "She realizes what she's said, and stamps something that didn't need stamping."],
    ["@mira Do you know the most common cause of death among adventurers? Not dragons. Not curses.", "@mira:angry *Not reading the quest description.* \"Retrieve the Egg\" does NOT mean \"fight the mother.\" It says so in the SMALL PRINT. I wrote the small print. I wrote it *for you.*"],
    { if: 'mira_special', lines: ["@mira You asked me, on the very first day, if you were special.", "@mira:smug I've given it due consideration. You are filed under N. For Nuisance.", "@mira:blush ...There's a sub-folder. It's pink. Don't ask about the sub-folder."] },
    { if: 'mira_civilian', lines: ["@mira Someone at the tavern asked me what class you are. I told them: \"Civilian (Optimistic).\"", "@mira:angry They *laughed.* I didn't. It's a perfectly valid classification. ...I wrote it in my best pen."] },
    { if: 'mira_writeup', lines: ["@mira:smug Your spider-mill rescue write-up is now mandatory reading for new recruits. Section Nine: \"What Not To Do.\"", "@mira:blush ...I gave it four stars. The part where you slid in on your face was very... committed."] },
    { if: { stage: 3 }, lines: ["@mira:blush The records room has a lock now. On the inside. I requisitioned it.", "@mira:angry For SECURITY. Those are confidential files! ...It's a very good lock. Just so you know. For no reason."] },
  ],
  afterTalk: [
    ["@mira:blush You're back. Good. I mean — your file needed updating. I updated it. Under \"distinguishing features\" I wrote — never mind what I wrote. It's classified."],
    ["She slides a lunchbox across the desk without looking at you. Inside, the sausages are shaped like hearts.", "@mira:angry THE KNIFE SLIPPED. Several times. In a pattern."],
    ["@mira:blush The other receptionists keep asking why I'm *humming.* I'm not humming. I've never hummed in my life.", "She is, in fact, humming."],
    ["@mira:smug My apartment door will be unlocked tonight. For administrative reasons.", "She stamps a form so hard the desk shakes.", "@mira:blush *Don't be late.*"],
    ["@mira I've started two new files. One is labeled \"Things {name} Did That Were Stupid.\" It is *very* thick.", "@mira:blush The other one is labeled \"Things {name} Did That Were Wonderful.\" ...That one's thicker. If you look in either of them I'll have you arrested."],
    { if: 'mira_late', lines: ["@mira:angry The Guildmaster has started saying \"field audit\" with his fingers in the air. In MEETINGS. In front of the *Mages' Guild liaison.*", "@mira:blush ...Worth it. Don't tell him I said that."] },
    { if: 'mira_witness', lines: ["@mira The Relationship Disclosure Form came back from Records. *Approved.*", "@mira:blush I had it copied. In triplicate. One's in the archive. One's in my desk. One is under my pillow, which is a very secure location, and that is the only reason it's there."] },
    { if: 'mira_carried', lines: ["@mira I've been thinking about the spider mill. When you carried me all the way home.", "@mira:smug My *other* ankle's been feeling a bit twisty lately. Hypothetically.", "@mira:happy ...I'm fine. I just wanted to watch your face do that."] },
    { if: 'mira_date_harbor', lines: ["@mira:angry That gull is back. The one from the harbor. It sits on the Guild windowsill and *watches me eat.*", "@mira:smug I've filed a restraining order. Gerald processed it. The gull is now technically registered as an adventurer. ...It has a better completion rate than Gerald."] },
  ],
  dateFav: 'picnic',
  dates: {
    dinner: {
      start: {
        text: [
          "The Tipsy Wyvern's private corner booth glows with candlelight. Mira sits bolt upright in it like she's attending a disciplinary hearing, menu held in front of her face.",
          "@mira:angry I eat here every evening. I've never sat in *the booth.* The booth is for couples. And proposals. Last month Gerald proposed to a barmaid in this booth and she said \"who are you.\"",
          "She lowers the menu an inch.",
          "@mira:blush This isn't a couple thing. This is a working dinner. I've brought your quest log to review.",
          "She has, in fact, brought your quest log. It's been annotated in three colors of ink.",
          { if: { stage: 4 }, text: "Under the table, her boot finds yours and stays there, very deliberately, while her face pretends nothing is happening." },
        ],
        choices: [
          { text: "Raise your glass. \"To paperwork.\"", go: 'toast', aff: 5 },
          { text: "Order the Raw Wyvern Tartare.", go: 'tartare', aff: 1 },
          { text: "\"Order for me. You've clearly read the menu forty times.\"", go: 'order', aff: 4 },
        ],
      },
      toast: {
        text: [
          "@mira:surprised To — what?",
          "@you To paperwork. Without it, I'd never have met the scariest person in Clichéton.",
          "@mira:blush ...To paperwork.",
          "She clinks your glass, takes a single sip of the good wine, and goes pink from the collar up. By her second sip she is explaining, passionately, the elegance of the triplicate system. By her third she's holding your hand across the table and explaining that she'd file you in triplicate if she could, so there'd be *more* of you.",
        ],
        next: 'end',
      },
      tartare: {
        text: [
          "@mira:angry Absolutely NOT.",
          "She snatches the menu out of your hand.",
          "@mira:angry Do you know how many food-poisoning reimbursement claims I process from this *exact* dish? It's raw! It's wyvern! It's raw WYVERN! He's having the stew. With bread. *Cooked* bread.",
          "The barmaid writes it down without looking at you. Clearly this is not the first time Mira has overruled a diner.",
        ],
        next: 'end',
      },
      order: {
        text: [
          "@mira:smug Fifty-two times. Not that I've counted.",
          "She orders for both of you without hesitation: the roast, the honey carrots, *no* onions on yours because you picked them out of the tavern stew on day three and she noticed.",
          "@you You remember that?",
          "@mira:blush I remember everything about my adventurers! It's my JOB! ...Shut up and eat your carrots.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "When you walk her home, she stops at the Guild door and fiddles with her keys for a long time.",
          "@mira:blush That was... an adequate working dinner. I'm giving it a passing grade.",
          { if: { stage: 4 }, text: "@mira:happy ...Fine. A *high* passing grade. Now kiss me before Gerald comes out for his evening sulk." },
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          "The Moonlit Gardens of the Noble Quarter are all silver hedges, marble fountains and couples whispering on hidden benches. Mira walks through them with her arms crossed, glaring at the topiary.",
          "@mira:angry I process the Noble Quarter's quest requests. \"Retrieve my peacock.\" \"Remove the gnome from my hedge.\" \"Slay my neighbor's ugly fountain.\" Do you know how many of these hedges I've *paid for* in bounty fees?",
          "Ahead of you, the famous hedge maze looms. Couples go in giggling. Couples come out an hour later, flushed.",
          "@mira:smug I have a map. I drew it from the gardener's insurance claims.",
        ],
        choices: [
          { text: "Take the map and \"accidentally\" drop it in a fountain.", go: 'lost', aff: 5 },
          { text: "Hold out your hand. \"So you don't get lost.\"", go: 'hand', aff: 4 },
          { text: "\"Let's race to the middle.\" [Might check 3]", check: { stat: 'might', dc: 3 }, pass: 'race_win', fail: 'race_lose' },
        ],
      },
      lost: {
        text: [
          "The map lands in the fountain with a soft plop. Mira stares at it, then at you.",
          "@mira:angry You did that on PURPOSE.",
          "@you I'd never.",
          "@mira:blush ...Fine. *Fine.* We're lost now. Officially. I'm noting the time.",
          "You get lost for two hours. At one point she pulls you into a dead end and kisses you so hard a hedge rustles in protest, then marches out claiming she was \"checking for gnomes.\"",
        ],
        end: true,
      },
      hand: {
        text: [
          "@mira:angry I won't get lost. I have a map. I *made* the map.",
          "She takes your hand anyway. She doesn't use the map once. You get lost twice, and both times she says \"hmph\" and does not let go.",
          "@mira:blush ...It's for your safety. You're the one who'd get lost.",
        ],
        end: true,
      },
      race_win: {
        text: [
          "You win by a hedge. She arrives at the centre fountain thirty seconds later, twin-tails full of leaves, absolutely furious.",
          "@mira:angry You CHEATED. You went *through* a hedge!",
          "@you There are no rules in a maze.",
          "@mira:smug There are SEVEN rules. They're on a sign at the entrance. I wrote them.",
          "She is still listing the rules when you pick a leaf out of her hair, and then she forgets what number she was on.",
        ],
        end: true,
      },
      race_lose: {
        text: [
          "You sprint into the maze and immediately run face-first into a hedge. When you finally find the centre, Mira is sitting on the fountain's edge, legs crossed, reading a form.",
          "@mira:smug Eleven minutes. That's a new record for the slowest adventurer in the Guild. I'll update the board.",
          "@mira:blush ...You have leaves in your — come here. Hold still. *Honestly.*",
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          "The sun sets over Saltbreeze Harbor in streaks of gold and orange. You buy fried fish in paper. Mira produces her lunchbox.",
          "@mira:angry I'm not eating *fish.* Fish come from the sea, and the sea is where the Guild sends adventurers to get eaten by things bigger than fish.",
          "She sits at the very end of the pier and opens the box. Octopus sausages. At the harbor. Surrounded by actual octopuses. She does not see the irony and you are not brave enough to point it out.",
          "A large, battle-scarred gull lands three feet away and stares at her lunch.",
        ],
        choices: [
          { text: "Face down the gull. [Might check 2]", check: { stat: 'might', dc: 2 }, pass: 'gull_win', fail: 'gull_lose' },
          { text: "Offer the gull your fish instead.", go: 'gull_fish', aff: 4 },
        ],
      },
      gull_win: {
        text: [
          "You stand, spread your arms, and give the gull your most heroic glare. It weighs its options. It leaves.",
          "@mira:surprised ...You just intimidated a seabird. For my sausages.",
          "@you For your honor.",
          "@mira:blush That is the stupidest, most — I'm writing you a commendation. It's going in your file. *Defender of Lunch.*",
        ],
        next: 'sunset',
      },
      gull_lose: {
        text: [
          "You stand and glare at the gull. The gull glares back. The gull wins. It snatches an octopus sausage from the box and flaps off over the water, screaming in triumph.",
          "@mira:angry THAT WAS THE ONE WITH THE SMILE!",
          "She's on her feet shaking her fist at the sky. You've never seen her so magnificently furious over something that wasn't you.",
        ],
        next: 'sunset',
      },
      gull_fish: {
        text: [
          "You toss your fried fish down the pier. The gull goes after it, and three of its friends come out of nowhere to fight it.",
          "@mira:smug Strategic distraction. That's in the Guild handbook. Chapter Four.",
          "@mira:blush ...You gave up your dinner for my sausages. You absolute — here. Have half. *Don't* say anything.",
        ],
        aff: 2,
        next: 'sunset',
      },
      sunset: {
        text: [
          "Afterwards she sits with her shoulder against yours, watching the sun go down. The light turns her twin-tails to flame.",
          "@mira:sad Every ship that sails out of here, I process the crew manifest. I know which ones don't come back.",
          "@mira:blush ...You're never allowed on a ship without telling me first. That's not a request. It's policy. I'm writing it tonight.",
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          "Mira insisted on bringing the basket. It is enormous. It has dividers. There is a laminated menu taped inside the lid.",
          "She spreads the blanket in a sunny Whisperwood clearing and looks around at the trees with an odd expression.",
          "@mira I've processed four hundred and twelve quests in this forest. Wolf packs, will-o'-wisps, that troll who keeps charging a bridge toll on a bridge he doesn't own.",
          "@mira:sad I've never actually *been* here. Nine years, and I've only ever seen it on paper.",
          { if: { stage: 4 }, text: "She leans back against you without asking, as if you're furniture she's decided she owns. It's the most relaxed you've ever seen her." },
        ],
        choices: [
          { text: "\"Did you ever want to be out here? Instead of behind the desk?\"", go: 'dream', aff: 6, flag: 'mira_dream' },
          { text: "Eat everything in the basket with great enthusiasm.", go: 'eat', aff: 4 },
          { text: "\"Want me to show you the troll's bridge?\"", go: 'troll', aff: 3 },
        ],
      },
      dream: {
        text: [
          "She goes very quiet. Then she reaches into the basket, under the sandwiches, and pulls out a folded, yellowed form.",
          "It's an adventurer registration. *Name: Mira Hartwell. Class: Fighter.* Every box is filled in, in a younger, rounder version of her handwriting. It was never stamped.",
          "@mira:sad I filled it out the day I started at the Guild. I was going to do a year at the desk, save up for a sword, and then...",
          "@mira:angry And then I got *good* at the desk. And everyone else was so *bad* at it. And somebody had to make sure the idiots came home.",
          "@mira:blush ...I've never shown that to anyone. I don't know why I brought it. Give it back. *Don't* read the Special Skills box.",
          "You read the Special Skills box. It says *Very Loud.*",
        ],
        next: 'end',
      },
      eat: {
        text: [
          "You eat the rice balls. You eat the sandwiches. You eat the octopus sausages, the little omelette rolls and a cake you're fairly sure was meant to serve six.",
          "@mira:surprised You're going to be sick.",
          "@you Worth it.",
          "@mira:happy ...Hmph. Well. I suppose I'll have to make more next time. Since you're so *greedy.*",
          "She's smiling the whole way home. She thinks you can't see it.",
        ],
        next: 'end',
      },
      troll: {
        text: [
          "The troll is there, collecting a toll from a very confused deer. Mira takes one look at him, marches up and slaps a Guild cease-and-desist notice onto his chest.",
          "@mira:angry You've been charging illegal tolls for THREE YEARS. I have the complaints *alphabetized!*",
          "The troll, eleven feet tall and made of rock, apologizes and refunds the deer.",
          "@mira:smug ...That felt *amazing.* Is that what you feel like all the time?",
        ],
        next: 'end',
      },
      end: {
        text: [
          "When you pack up, she folds the blanket into a perfect square and doesn't let go of your hand the whole walk back to town.",
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'The Adventurers\' Guild registration desk is a fortress of paperwork. Behind it, a young woman with fiery orange twin-tails and round spectacles is stamping forms so hard the desk shakes.',
          'You fill out the registration form and hand it over. She reads it. Her eye twitches.',
          '@mira:surprised "Class: Romantic Lead." What is this. What is *this.*',
          '@mira:angry "Special Skills: Being Charming." "Previous Experience: Arriving in Town." You put "yes" in the box marked "Sex"!',
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
          '@mira:blush ...F-fine. Since you asked *properly.* Not because you\'re hopeless or anything.',
          'She spends twenty minutes walking you through every single field, muttering the whole time. She draws little arrows. She underlines things. She is, unmistakably, enjoying herself.',
        ],
        aff: 5,
        next: 'name',
      },
      special: {
        text: [
          'Her face goes as red as her hair.',
          '@mira:blush S-SPECIAL?! You are not special! You are a *nuisance!* A rookie nuisance with terrible handwriting!',
          '@mira:angry I get worked up at everyone equally! ...Mostly.',
        ],
        aff: 4,
        flag: 'mira_special',
        next: 'name',
      },
      flex_win: {
        text: [
          'You roll up a sleeve. Her eyes flick down to your arm, and stay there for a fraction too long.',
          '@mira:blush ...I-I suppose that\'s *adequate* for a Fighter classification. Barely. Put your sleeve down! This is a place of business!',
          'She writes "Fighter" on the form in very neat, very fast letters, not looking at you.',
        ],
        aff: 5,
        flag: 'mira_flexed',
        next: 'name',
      },
      flex_fail: {
        text: [
          'You roll up a sleeve and flex. Nothing much happens.',
          '@mira:smug ...I\'m putting you down as "Civilian (Optimistic)."',
        ],
        aff: 1,
        flag: 'mira_civilian',
        next: 'name',
      },
      name: {
        text: [
          '@mira Mira Hartwell, Senior Registrar. If you need anything — quests, rankings, healing reimbursements — you come to *me*. Not the other desks. They\'re incompetent.',
          '@you {name}. Nice to meet you, Mira.',
          '@mira:smug Hmph. We\'ll see if it\'s nice. Most rookies don\'t last a month.',
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
          '@mira:angry DON\'T LOOK AT ME!',
          '@you Mira? What are you doing here?!',
          '@mira:blush I was — conducting a *field audit!* To verify quest conditions! It\'s standard procedure! It\'s definitely not because I was worried about you taking a C-rank quest at your level!',
          { if: 'mira_civilian', text: "@mira:angry You're a *Civilian (Optimistic)!* You're not even ALLOWED in a C-rank mill!" },
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
          '@mira:blush ...',
          '@mira:angry PUT ME DOWN. Immediately. That was — completely unnecessary — I had it under control.',
          'She doesn\'t struggle very hard.',
        ],
        aff: 8,
        next: 'ankle',
      },
      save_messy: {
        text: [
          'You charge. You trip on a web. You slide across the floor on your face directly into the spider, which is so startled it flees.',
          'Then you cut Mira down, and she lands on top of you.',
          '@mira:smug ...That was the least heroic rescue in Guild history. I\'m writing it up.',
          '@mira:blush ...But thank you.',
        ],
        aff: 5,
        flag: 'mira_writeup',
        next: 'ankle',
      },
      save_lunch: {
        text: [
          'You hurl your sandwich across the room. The spider pounces on it with eight-legged delight.',
          'While it\'s distracted, you climb up and cut Mira free.',
          '@mira:surprised That was my sandwich recipe! I gave you that recipe! I — you made it? You actually made it?',
          'For some reason, this seems to affect her more than the rescue.',
        ],
        aff: 6,
        flag: 'mira_sandwich',
        next: 'ankle',
      },
      ankle: {
        text: [
          'Mira tries to stand and winces. Her ankle is twisted.',
          '@mira:angry It\'s fine! I\'ll walk! I\'m perfectly capable of — ow — ow ow ow.',
        ],
        mood: 'sad',
        choices: [
          { text: 'Offer to carry her on your back.', go: 'carry', aff: 7 },
          { text: 'Sit with her and bandage the ankle.', go: 'bandage', aff: 6 },
        ],
      },
      carry: {
        text: [
          '@mira:blush You — absolutely not — this is a violation of — *fine.*',
          'You carry her all the way back to town on your back. She complains the entire way — about your posture, your sweat, the fact that people are staring. Her arms stay wrapped tight around your neck.',
          'Halfway home, the complaining stops. You realize she\'s fallen asleep, her cheek resting against your shoulder.',
          'She mumbles something into your collar. It sounds a lot like *idiot... don\'t get hurt...*',
        ],
        flag: 'mira_carried',
        end: true,
      },
      bandage: {
        text: [
          'You kneel and take her foot gently in your lap. She goes rigid, then very red, as you unlace her boot.',
          '@mira:blush Wh-what are you — that\'s my *foot* —',
          '@you I know. Hold still.',
          'You wrap the ankle carefully. She stops protesting. When you look up, she\'s watching you with an expression you\'ve never seen before — soft, unguarded.',
          'She notices you noticing, and it vanishes.',
          '@mira:smug Your bandaging technique is sloppy. I\'ll send you a pamphlet.',
          'She sends you four pamphlets. They\'re hand-illustrated.',
        ],
        flag: 'mira_pamphlets',
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'Mira catches you as you come in from a quest, and drags you by the sleeve into the Guild\'s empty records room.',
          '@mira:angry Here. Take it. Don\'t make it weird.',
          'She shoves a lunchbox into your hands. Inside: neatly cut sandwiches, rice balls, little sausages shaped like octopuses.',
          '@mira:blush I made too much. By accident. It was going to go to waste! And you\'re always eating that terrible tavern food, and you look pale, and — it\'s *not* because I was thinking about you while I was cooking at six in the morning!',
          { if: 'mira_sandwich', text: "@mira:angry And you are NOT throwing this one at a spider. This one is for *eating.* By *you.* I'll know." },
          { if: 'mira_carried', text: "@mira:smug My ankle's fine, by the way. Since you asked. — You didn't ask. I'm telling you anyway. It's fine because *somebody* carried me home instead of letting me walk on it." },
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
          '@mira:blush O-of course it is. I\'m very good at cooking. Everyone knows that. ...Do you really mean it?',
          '@you Really.',
          '@mira:happy ...I\'ll make you another one tomorrow. By accident.',
        ],
        next: 'rank',
      },
      tease: {
        text: [
          '@mira:angry THE OCTOPUSES HAPPENED NATURALLY.',
          '@you Sausages don\'t naturally grow eight legs, Mira.',
          '@mira:angry THEY DO IF YOU BELIEVE IN THEM.',
          'She buries her face in her hands. You hear a muffled sound that might be a laugh.',
        ],
        flag: 'mira_octopus',
        next: 'rank',
      },
      share: {
        text: [
          'She blinks.',
          '@mira:blush I — I have a break in fifteen minutes. Not that I\'ll spend it with you specifically. I just happen to eat in this room. Sometimes.',
          'Fifteen minutes later she\'s sitting next to you on a crate of old files, sharing rice balls, and laughing at your story about the mimic that ate your boot.',
          { if: 'mira_writeup', text: "@mira:happy You're telling it wrong. You slid into that mimic *face-first,* same as the spider. I know. I've read your file. It's my favorite file." },
          'She has a nice laugh. You\'ve never heard it before.',
        ],
        mood: 'happy',
        next: 'rank',
      },
      rank: {
        text: [
          'She clears her throat and produces a small iron badge from her pocket.',
          '@mira Also. You\'ve been promoted. Rank C. I processed it myself. You earned it.',
          {
            if: 'mira_civilian',
            text: "@mira:smug I've updated your classification, too. You are no longer \"Civilian (Optimistic).\" You are now \"Adventurer (Optimistic).\" That's growth.",
            else: { if: 'mira_flexed', text: "@mira:blush Your classification stays \"Fighter.\" I double-checked. From memory. I have a very good memory for — for *arms* — for ARMAMENTS. Shut up." },
          },
          '@mira:blush ...I\'m proud of you, okay? There! I said it! Are you happy?!',
        ],
        choices: [
          { text: '"Very. Thank you, Mira."', go: 'happy', aff: 6 },
          { text: 'Pull her into a hug.', go: 'hug', aff: 10 },
        ],
      },
      happy: {
        text: [
          '@mira:happy Good. Then... good.',
          'She pins the badge on your collar herself, smoothing the fabric with her fingers a little longer than strictly necessary.',
        ],
        end: true,
      },
      hug: {
        text: [
          'She freezes like a startled cat. Then, slowly, her arms come up and wrap around you. She buries her face in your shoulder.',
          '@mira:blush ...This is highly unprofessional.',
          '@you Want me to stop?',
          '@mira:blush *Don\'t you dare.*',
        ],
        flag: 'mira_hugged',
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'You come back late from a hard quest. A wyvern. You won, but your armor is scorched and there\'s a long cut along your arm.',
          'The Guild is closed. But a light is still on, and Mira is still at her desk, alone, surrounded by unstamped paperwork. She looks up when the door opens.',
          'For a second, her face crumples.',
          '@mira:angry You — you\'re LATE. You were supposed to be back at *noon!* Do you know what time it is? Do you know how many times I checked the casualty reports? Seven! SEVEN TIMES!',
          'She storms around the desk, grabs your collar — and then she sees your arm, and all the fury drains out of her at once.',
          '@mira:sad ...You\'re hurt. You stupid, *stupid*...',
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
          '@mira:angry You\'re here. You\'re here. You\'re — *why do you always have to do the most dangerous quest on the board?!*',
          "@mira:sad I put that one at the *bottom* of the board! Behind the rat quests! You had to *dig* for it!",
          'She punches your chest weakly. Then she leaves her fist there, gripping your shirt.',
        ],
        next: 'confess',
      },
      worried: {
        text: [
          '@mira:angry OF COURSE I WAS WORRIED, YOU IDIOT!',
          'It echoes off the rafters. She claps her hands over her mouth, horrified.',
          '@mira:blush I — that wasn\'t — I meant *professionally* —',
          'But the dam has broken.',
        ],
        flag: 'mira_yelled',
        next: 'confess',
      },
      tears: {
        text: [
          'You gently lift her spectacles and wipe her tears with your thumb. She goes completely still.',
          '@mira:sad ...Don\'t be nice to me right now. I can\'t — if you\'re nice to me I\'ll say something stupid.',
          '@you Say it anyway.',
        ],
        flag: 'mira_tears',
        next: 'confess',
      },
      confess: {
        text: [
          '@mira:angry I *like* you, okay?! I have liked you since the day you wrote "Romantic Lead" on your registration form, which was the stupidest thing I have ever read and I *kept it.* It\'s in my desk! I look at it on bad days!',
          { if: 'mira_hugged', text: "@mira:blush And when you hugged me in the records room I didn't sleep for two nights! I reorganized the entire archive! By *colour!* Gerald cried!" },
          '@mira:sad I like you so much it makes me furious! Every time you go out that door I can\'t breathe until you come back! And I\'m terrible at saying it so I yell at you instead, and I\'m — I\'m sorry —',
          'She runs out of air. She stares at you, red-faced and trembling and utterly undone.',
        ],
        mood: 'blush',
        choices: [
          { text: 'Kiss her.', go: 'kiss', aff: 12 },
          { text: '"I like you too, Mira. I have for a long time."', go: 'too', aff: 10 },
        ],
      },
      too: {
        text: [
          '@mira:surprised ...You do?',
          '@you I do.',
          '@mira:sad You\'re not just saying that because I\'m crying?',
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
          "When you finally come up for air, her spectacles are crooked and her twin-tails are a mess.",
          "@mira:blush My — my apartment is upstairs. Above the Guild. I have bandages. For your arm. *Medical* reasons.",
          "@you Medical reasons.",
          "@mira:angry Shut up and come upstairs.",
          "She does bandage your arm, very carefully, glaring the whole time as if the wound personally offends her. Then she ties off the bandage, stays kneeling between your knees on the rug, and looks up at you. Her face is flushed and furious and frightened all at once.",
          { if: 'mira_pamphlets', text: "@mira:smug *That* is how you bandage something. Page four of the pamphlet. I illustrated it. — Did you even read the pamphlets? You read the pamphlets. ...You *kept* the pamphlets?" },
          "@mira:blush I'm going to say something. And you're not going to laugh. Or tease me. Or say *anything* until I'm done.",
          "She takes off her spectacles. She pulls the ribbons out of her twin-tails, and her orange hair tumbles loose. You've never seen it down. Then, in a small, clear voice, without yelling at all, she tells you exactly what she wants. She's specific. She's *organized.* She clearly made a list.",
          "@mira:blush — and then — and *then* — oh gods, stop *looking* at me like that, I'm going to die —",
          "You stop her the only way that works. She makes a strangled little sound against your mouth, climbs into your lap, and starts undoing your buttons with the brisk efficiency of someone who has processed ten thousand forms. She gets impatient with the last three and just pulls.",
          "@mira:angry Don't. Say. *Anything.*",
          "It turns out that Mira Hartwell, Senior Registrar, is extremely thorough in every aspect of her life. She works through the entire list, checking things off in breathless little gasps. Then she throws the list away entirely...",
          "...",
          "Some time later, she lies sprawled across your chest in her tiny bed, hair everywhere, still flushed.",
          "@mira:smug That was... adequate. Highly adequate. I'm giving it a passing grade.",
          "@you Just passing?",
          "@mira:blush *Shut up.* It's the highest grade I've ever given anyone.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake to the sound of furious scribbling. Mira is sitting on the edge of the bed in her uniform, hair already pinned back into perfect twin-tails, writing on a form.",
          "@mira Don't move. I'm filing a Relationship Disclosure Form. Section 4, Paragraph 9 of the Guild Code. Staff must disclose relationships with registered adventurers.",
          "She shows you. She's filled out every box in her neat, tiny handwriting. In the box marked *Nature of Relationship*, she has written, very small: *I love them.*",
          { if: 'mira_tears', text: "Her spectacles, you notice, have been polished to a mirror shine, as if she's trying to erase all evidence they were ever fogged up. She catches you looking and polishes them again." },
          { if: 'mira_yelled', text: "Clipped to the back is a second form: a noise complaint, filed by Mira Hartwell, against Mira Hartwell, for \"shouting OF COURSE I WAS WORRIED in a closed Guild hall after hours.\" She has fined herself two silver." },
          "Then she sees you reading it and goes red to the roots of her hair.",
          "@mira:angry THAT'S AN OFFICIAL DOCUMENT. You're not supposed to READ it. — Also, your breakfast is on the table. I made too much. By accident.",
          { if: 'mira_octopus', text: "There are octopus sausages. There are a great many octopus sausages. One of them has a tiny paper sign stuck in it that reads: *I BELIEVE.*", else: "There are octopus sausages. There are a great many octopus sausages." },
        ],
        choices: [
          { text: "Sign the form as witness, right under her line.", go: "sign", aff: 6 },
          { text: "\"You love me?\" (Make her say it out loud.)", go: "say", aff: 5 },
          { text: "Pull her back into bed. She has ten minutes before her shift.", go: "late", aff: 6 },
        ],
      },
      sign: {
        text: [
          "You take the quill and sign under her line: *Witnessed. Mutual. — {name}.*",
          "She stares at it for a long time. Then she presses the form flat against her chest with both hands.",
          "@mira:blush ...That's not how witnessing works. You can't witness your own feelings.",
          "@you File it anyway.",
          "@mira:happy I'm going to. I'm going to give it the best stamp I've ever stamped.",
        ],
        flag: 'mira_witness',
        end: true,
      },
      say: {
        text: [
          "@mira:blush I — it says it right *there* — I don't have to —",
          "@you Say it.",
          "@mira:angry ...I love you. There. Happy? I love you, you reckless, idiotic, *wonderful* — I'm going to be late. You've made me late. I've never been late in nine years.",
          "She kisses you hard and storms out. She comes back ten seconds later for her stamp. She kisses you again. She leaves.",
        ],
        flag: 'mira_said',
        end: true,
      },
      late: {
        text: [
          "@mira:surprised No. No, absolutely not, I have a nine o'clock with the Mages' Guild liaison, I have forty forms, I have —",
          "She's back under the covers in about four seconds.",
          "She's forty minutes late to her shift. When the Guildmaster asks why, she tells him, with a perfectly straight face, that she was conducting a field audit. He decides not to ask.",
        ],
        flag: 'mira_late',
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Mira is waiting for you at the bottom of the festival hill. She\'s wearing a dress — an actual dress, pale orange, with flowers in her twin-tails — and she looks like she\'s about to fight someone.',
          '@mira:angry Don\'t say anything about the dress.',
          '@you You look beautiful.',
          '@mira:blush I SAID DON\'T SAY ANYTHING!',
          { if: 'mira_late', text: "@mira:smug I took the whole evening off. Filed for it three weeks in advance. The Guildmaster asked if it was another field audit. I said *yes.*" },
          'She grabs your hand and drags you up the hill to the very best spot — she must have staked it out hours ago — and sits down on a blanket with a picnic basket. Octopus sausages, of course.',
          { if: 'mira_date_picnic', text: "It's the same blanket from Whisperwood, folded into the same perfect square. She has, you notice, ironed it." },
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'When the stars begin to fall, she goes quiet. She leans her head on your shoulder.',
          '@mira Hey. {name}.',
          '@you Yeah?',
          '@mira:blush I love you. There. I said it without yelling. I\'ve been practicing all week.',
          { if: 'mira_said', text: "@mira:smug And you didn't have to make me, this time. That morning doesn't count. You *extracted* it. This one I'm *giving* you." },
          'Then she pulls a folded paper from her basket and hands it to you, not meeting your eyes.',
          '@mira:blush Also, this is a marriage registration form. I\'ve pre-filled it. You just need to sign. Not now! Whenever! Or never! It\'s just — in case — *don\'t look at me like that!*',
        ],
        choices: [
          { text: 'Sign it. Obviously.', go: 'epilogue' },
          { text: 'Sign it. Then hand her the old form from the picnic basket: her own, never stamped.', go: 'partners', if: 'mira_dream' },
          { text: 'Sign it. Then ask where you apply for the desk next to hers.', go: 'desk', if: { any: ['mira_witness', 'mira_yelled', 'mira_tears'] } },
        ],
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
      partners: {
        text: [
          "You sign the marriage form against the lid of the picnic basket. Then you reach under the sandwiches, where she keeps it now, and pull out the yellowed registration. *Mira Hartwell. Class: Fighter. Special Skills: Very Loud.*",
          "You've found a Guild stamp somewhere. You hold it out.",
          "@mira:surprised What — where did you get a — that's *Gerald's* stamp —",
          "@you Nine years is long enough to save up for a sword.",
          "@mira:angry I can't just *leave!* Who's going to run the desk? Who's going to make sure the idiots come home?",
          "@you You. From right next to the idiot.",
          "She stares at the form for a long time while the stars fall. Then she snatches the stamp out of your hand and brings it down so hard the basket jumps. APPROVED.",
          "@mira:blush ...If you get me killed on our first quest, I'm filing a complaint.",
        ],
        next: 'partners_epilogue',
      },
      partners_epilogue: {
        text: [
          "*Some time later...*",
          "The Adventurers' Guild of Clichéton registers its most terrifying party in living memory: {name}, Fighter, and Mira Hartwell, Fighter (Senior), married, Rank C and climbing very, very fast.",
          "It turns out nine years of reading quest reports makes a person extremely dangerous. Mira knows every monster's weak point, every dungeon's floor plan and every bandit's outstanding fines. She fights with a sword, eventually. At first she fights with the Guild's heaviest iron stamp, which says DENIED, and the goblins of Whisperwood learn to fear the word.",
          "She audits everything. She audits a dragon. She informs a lich that his lair is in breach of three separate fire codes, and he is so flustered he lets you leave with the treasure.",
          "She still yells at you. She yells \"LEFT!\" and \"DUCK!\" and \"THAT IS NOT IN THE QUEST DESCRIPTION!\" She yells at you most of all when you get hurt, and then she bandages you herself, using the technique from page four.",
          "Gerald takes over the front desk. It goes about as well as you'd expect. The two of you come home from every quest to find the lobby in chaos, and Mira fixes it in eleven minutes flat before she's even taken her boots off.",
          "She keeps the first form you ever gave her — *Class: Romantic Lead* — folded in her breastplate, over her heart. On bad days in the dungeon she takes it out and reads it, and laughs, and then she gets up and hits something.",
          "There's still a note in your lunchbox every morning. The handwriting's a bit shakier now, written by lantern light in a tent. It says something new.",
          "*Watch my back, idiot. I've got yours.*",
        ],
        ending: 'mira_partners',
      },
      desk: {
        text: [
          "You sign the marriage form. Then you hand it back and ask, very seriously, where a person applies for the desk next to hers.",
          "@mira:surprised ...What?",
          "@you You checked the casualty reports seven times. I don't want to be the reason you can't breathe.",
          { if: 'mira_yelled', text: "@you You fined *yourself* two silver for worrying about me, Mira." },
          "@you And Gerald's terrible.",
          "@mira:angry Gerald IS terrible. — No. No, you can't just — you *love* adventuring! You wrote *Romantic Lead!* You're supposed to go *out there* and do stupid, heroic —",
          "@you I'll still be the romantic lead. I'll just be doing it at a desk. Next to you. With a stamp.",
          "She looks at you for a long moment. Then she produces, from her basket, a job application. Pre-filled. In her handwriting.",
          "@mira:blush ...I wasn't going to show you this one. I've had it since the wyvern.",
        ],
        next: 'desk_epilogue',
      },
      desk_epilogue: {
        text: [
          "*Some time later...*",
          "The Adventurers' Guild of Clichéton gets a new Junior Registrar. Gerald is transferred to the Lost Property office, where he is very happy, and loses things.",
          "Mira trains you herself, and she is merciless. Your handwriting is a disgrace. Your stamping lacks conviction. You put a Goblin Removal form in the Gnome Removal tray and she doesn't speak to you for an entire lunch break, then shares her rice balls anyway.",
          "And then something strange happens. A rookie comes to your desk wanting the wyvern quest, and you hear yourself say, *absolutely not, you'll get yourself killed, take the rats.* You hear yourself yell \"YOU'RE LATE\" at a party staggering in after midnight. You catch yourself checking the casualty reports. Seven times.",
          "@mira:blush ...Oh no. Oh no, you've become *me.* — Say it again. The bit about the small print. Say it in that voice.",
          "It turns out Mira Hartwell finds it unbearably attractive when you're stern with rookies. The records room lock gets a great deal of use.",
          "Your first form — *Class: Romantic Lead* — hangs in a frame between your two desks. She has finally given it a stamp. It says APPROVED, and next to it, in ink she never scribbles out, there's a tiny heart.",
          "The Guild's survival rate goes up eleven percent in the first year. Mira files the statistics with enormous satisfaction and a very small note at the bottom.",
          "*Cause: Two of us now.*",
        ],
        ending: 'mira_desk',
      },
    },
  },
});
