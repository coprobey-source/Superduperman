FL.addSpeaker('zyra_ilvaxa', 'Ilvaxa', '#7a6a9e');
FL.addSpeaker('zyra_vendor', 'Cosmetics Vendor', '#c9a27a');
FL.addSpeaker('zyra_knight', 'Retired Knight', '#b0b8c8');

FL.addCharacter({
  id: 'zyra',
  name: 'Zyra Sunkiss',
  short: 'Zyra',
  trope: 'Dark Elf Gyaru',
  color: '#d63cf0',
  favStat: 'charm',
  endingTitle: 'Literally Legendary',
  endings: { zyra_underdark: 'Glitter in the Deep' },
  teaser: 'A dark elf in platform sandals and nine earrings per ear is having a full emotional crisis over two identical shades of pink.',
  blurb: "Zyra fled the Underdark two years ago, saw the sun for the first time, and cried for an hour because it was SO mythic. Now she's Clichéton's loudest trend-chaser: bleached-gold curls, glitter nails, more jewelry than a dragon's hoard, and slang nobody else has caught up with yet. People see a dark elf and clutch their purses. They're half right to: she was raised from birth as a spy and an assassin, and she's terrifyingly good at both. She would much rather talk about your shoes.",
  schedule: ['market', 'bathhouse', 'docks'],
  gifts: { love: ['polish'], like: ['gem', 'perfume', 'comb', 'mirror', 'cakes'], hate: ['dagger', 'axe'] },
  giftLines: {
    love: ["@zyra:happy Oh my gods. Oh my GODS. For me? Bestie. You *get* me. That's so mythic I can't even."],
    like: "@zyra:happy Ooh, cute! That's going straight in the collection. Like, *straight* in. Top shelf. Next to the shell from my first day at the sea.",
    neutral: "@zyra Aww, thank you! I'll find a way to make it sparkly. Everything can be sparkly if you believe in it hard enough. And have glue.",
    hate: ["Her smile goes still for half a heartbeat.", "@zyra:sad Babe. I have, like, *eleven* of those. In places you don't want to know about. I'm trying really hard to be a whole new me, okay? Take it away."],
    special: {
      polish: [
        "She takes the little bottle of hot-pink glitter polish and holds it up to the light. It throws tiny sparkles across her face.",
        "@zyra:surprised This is *Starburst Flamingo.* They only made one batch. I've been stalking that shelf for a *month.* I was going to fight a noblewoman for it.",
        "@zyra:happy Literally legendary. You're literally legendary. I'm doing my nails right now. I'm doing *your* nails right now. Give me your hand.",
        "You give her your hand. She paints one of your nails before you can argue, blows on it, and admires it as though she's just signed a treaty.",
        "@zyra:blush There. Matching. That's a whole commitment now, no curse.",
      ],
      dagger: [
        "The moment it's in her hand, it's spinning: across her knuckles, behind her back, over her wrist. You never see her look at it once. Then she stops it dead, point down, and stares at it.",
        "@zyra:sad ...See, this is the problem. My hands *love* this. My hands are like, *oh, hi, old friend.*",
        "She hands it back to you, hilt first, very gently.",
        "@zyra I don't want to be the girl whose hands know knives. I want to be the girl whose hands know *nail art.* Help me out here, bestie.",
      ],
      fork: [
        "@zyra:surprised A fork. A plain fork. No gems? No engraving? Not even a little *bow?*",
        "She looks at it with growing fascination.",
        "@zyra:smug Okay, no, actually, I see the vision. *Minimalism.* That's so bold. That's a *statement.* I'm wearing it in my hair.",
        "She does. By the next day, two girls on Market Street are wearing forks in their hair too.",
      ],
      roses: [
        "@zyra:happy Red roses! That's so classic! That's so *romance novel!*",
        "She sniffs them, then glances around, then pulls a tiny bottle out of her curls and dabs something on the petals. They turn hot pink in front of your eyes.",
        "@zyra:blush What? I fixed them. They were giving *Underdark funeral.*",
      ],
      plushie: [
        "@zyra:surprised Is it a spider? Is it poisonous? Why does it have such big eyes?",
        "@you It's a bunny.",
        "@zyra:happy A *bunny.* A soft, harmless, completely non-venomous bunny. Oh, I love him. Nothing in the Underdark is soft. His name is Sir Fluffington the Unstabbed.",
      ],
      mirror: [
        "@zyra:happy A mirror! For checking my face! For checking *behind* me!",
        "She angles it over her shoulder without looking, the way someone checks a doorway.",
        "@zyra:blush ...Mostly for my face. Ninety percent for my face. Okay, eighty.",
      ],
    },
    repeat: "@zyra:smug Babe, you got me this already. Repeating an outfit is one thing, but repeating a *gift?* That's a little bit Underdark. I still love you. Shop harder.",
  },
  talk: [
    ["@zyra:happy Okay, so I've been doing research on surface fashion, and I've found something *horrifying.*", "@zyra Humans wear the SAME BOOTS FOR YEARS. On purpose. Until the boots *die.* That's so Underdark. I'm actually sick."],
    ["@zyra Fun fact: I can't really tan. Dark elf. It's not a thing.", "@zyra:smug But I lie on the harbor wall every single day anyway, because the sun feels mythic, and sometimes my cheeks go a teeny bit gold. That's called *manifesting.*"],
    ["@zyra In the Underdark, the main colors are black, darker black, and *the color your veins go when you've been poisoned.*", "@zyra:happy So, you know. Pink's a big step."],
    ["@zyra:smug I saw a surface elf in the market today. Nine hundred years old, probably, and still dressed head to toe in leaf-green.", "@zyra Babe. You're *immortal.* You've had literal centuries. *Accessorize.*"],
    ["@zyra:happy Thirty-one people crossed the street when they saw me today! My personal best is forty-two. I'm basically famous.", "She says it brightly. She's twisting one of her bangles round and round her wrist."],
    ["@zyra Want to know a secret about the butcher? ...No. Never mind.", "@zyra:smug I know *everybody's* secrets, I just don't use them. It's like having a really sharp knife and only ever using it to cut cake."],
    ["She jingles her charm bracelet at you.", "@zyra This little sun is from my first day up here. This seashell's from the first time I touched the sea. It was cold. I screamed. A gull stole my sandwich.", "@zyra:happy Best day of my *entire* life."],
    ["@zyra Slang lesson! *Mythic* means amazing. *Literally legendary* means extra amazing. *Big crit energy* means someone's absolutely smashing it. *No curse* means I'm being honest. And *so Underdark* means gloomy and tragic and bad.", "@zyra:happy You're welcome. You're fluent now. Use it responsibly."],
    ["@zyra Platform sandals are tactical, by the way. Extra height, extra reach, and a heel you can hide a garrote in.", "@zyra:blush I mean — they're *cute.* They're cute! I said cute."],
    ["@zyra In the Underdark, nobody ever says what they mean. *Lovely weather* means *I will poison your soup.* *What a nice cloak* means *I know where you sleep.*", "@zyra:happy Up here, when people say *nice cloak*, it just means *nice cloak!* I cried the first time. The lady was so confused."],
    { if: 'zyra_knife', lines: ["@zyra You still want me to teach you the purse thing? From the market?", "@zyra:smug Okay. Rule one: never look at what you're grabbing. Look at their eyes. Rule two: always smile, because nobody suspects a smile. Rule three —", "@zyra:blush ...This is a crime tutorial. I'm giving you a *crime tutorial.* Let's do nails instead."] },
    { if: 'zyra_nails', lines: ["She grabs your hand and inspects the glitter nail.", "@zyra:angry Chipped! *Chipped!* Unacceptable!", "She fixes it on the spot, with a tiny bottle she produces from her curls. You catch a glimpse of something black and thin tucked in beside it. She smiles at you, very innocently, and pats her hair back into place."] },
    { if: 'zyra_both', lines: ["@zyra:happy I bought both pinks again today. And then a *third* pink.", "@zyra:smug You did this. You said *both*, and now it's my whole philosophy. You've created a monster, bestie. A very well-dressed monster."] },
    { if: 'zyra_pink', lines: ["@zyra Ilvaxa sent me a letter. It came out of a shadow under my bed, which is so rude.", "@zyra:sad It was a sheet of black paper, completely blank. And folded up inside it was one single pink thread.", "@zyra:blush That's Underdark for *I miss you.* I cried on a pastry. In public. Again."] },
    { if: { stage: 3 }, lines: ["@zyra Since the harbor... I haven't told anybody that stuff. Ever. The knife stuff. The *me* stuff.", "@zyra:happy I feel like I took off a really heavy necklace. I'm still wearing six other necklaces, obviously. But still."] },
  ],
  afterTalk: [
    ["She spots you from across Market Street and launches herself into a full running jump-hug, platform sandals and all. You stagger. She weighs almost nothing, and she lands like a cat.", "@zyra:happy Hi! *Hi.* I missed you. It's been four whole hours. That's, like, a decade in surface time."],
    ["@zyra:happy Guess what! Nobody crossed the street today. Well, okay, one guy did. But he crossed *towards* me, to ask where I got my earrings!", "@zyra:smug I told him. He bought six. I'm a trendsetter now. I'm a *menace.*"],
    ["@zyra I designed you an outfit. It's pink. Don't make that face. It's *tasteful* pink. It's pink with *restraint.*", "She shows you the sketch. It is not pink with restraint."],
    ["She goes quiet, tracing your knuckles with one glittery nail.", "@zyra:sad I'm really happy. Like, scary happy. In the Underdark you're not allowed to be this happy, because something always happens.", "@zyra:blush And then something did. *You* did."],
    { if: 'zyra_name', lines: ["She leans in close and whispers your name. Then, very softly, her long one: *Zyrathiel Nhaundar Vel'Ssivrin.* As if she's setting them side by side on a shelf.", "@zyra:blush There. Now they're friends."] },
    { if: 'zyra_bare', lines: ["She's not wearing a scrap of makeup today. Just her own face, and only nine bits of jewelry, which is practically nothing.", "@zyra:smug You looked at me exactly the same way you always do. I checked. I'm a *spy.*"] },
    { if: 'zyra_pancake', lines: ["@zyra:happy I've been practicing pancakes! I've only set one small fire. The bathhouse put it out. They have *so* much water there."] },
    { if: 'zyra_date_harbor', lines: ["@zyra:happy Sunset tonight? At the pier? I saved our spot.", "@zyra:smug By *saved* I mean I've been sitting in it since lunch. A gull tried to take it. The gull has learned a lesson."] },
    { if: 'zyra_shop', lines: ["@zyra I've been drawing the shop sign. *Sunkiss & Co.* With a little sun, and the dot over the i is a star.", "@zyra:blush The *& Co.* is you, obviously. Don't argue. It's already in glitter."] },
    { if: 'zyra_underdark', lines: ["@zyra:smug Sometimes I think about taking a whole crate of polish down to the Weeping Dark and just... leaving it on the Matron Mother's doorstep. No note.", "@zyra:happy *Chaos.* Beautiful, sparkly chaos."] },
  ],
  dateFav: 'harbor',
  dates: {
    dinner: {
      start: {
        text: [
          "When Zyra walks into the Tipsy Wyvern, three tables of adventurers quietly shuffle their chairs round so their backs are to the wall. She waves at all of them. Two wave back, nervously.",
          "She slides into the corner booth across from you and orders *the most colorful thing you have.* It turns out to be a cordial the barman sets on fire.",
          "@zyra:happy *Mythic.*",
          "Then her eyes flick, very briefly, to the card table by the fire, and narrow.",
          "@zyra Babe. Don't look. The man in the green hat has two aces up his left sleeve, and the guy he's playing has been losing for an hour. That's so Underdark of him.",
        ],
        choices: [
          { text: '"Want to do something about it?"', go: 'expose', aff: 5 },
          { text: '"What else can you see? Read the room for me."', go: 'read', aff: 6 },
          { text: 'Change the subject. Order her the plain stew.', go: 'stew', aff: 2 },
        ],
      },
      expose: {
        text: [
          "@zyra:smug Thought you'd never ask.",
          "She sashays over to the card table, gushes about the man's hat, *so* cute, *where* did you get it, and gives him a hug. When she sashays back, she's holding two aces, and his sleeve is hanging open.",
          "The whole table stares at the cards in her hand. Then at him. He leaves through the window.",
          "The man who'd been losing buys your whole dinner, and calls her *miss* very respectfully, and doesn't move his chair once.",
          "@zyra:blush ...Was that okay? I used the spy stuff. For *good.* That's allowed, right?",
          { if: { stage: 4 }, text: "@zyra:happy You're looking at me like I did something mythic. Do that more. Do that *forever.*" },
        ],
        end: true,
      },
      read: {
        text: [
          "@zyra:happy Ooh, okay. Fun.",
          "She leans in, chin on her hand, and doesn't look at anyone, and tells you everything.",
          "@zyra The bard's in love with the barmaid. The barmaid knows, and she's waiting for him to sing something that isn't about a goblin's trousers. Those two dwarves are brothers, and they haven't spoken in a year, and they come in every night anyway so they can not-speak together. And that knight by the fire? He's going to propose to his boyfriend tonight. He's touched his pocket eleven times.",
          "The knight gets down on one knee twenty minutes later. The whole tavern cheers. Zyra cheers loudest of all, and cries a little into her flaming cordial.",
          "@zyra:blush I'm not crying. The drink's on fire. It's *smoke.*",
        ],
        end: true,
      },
      stew: {
        text: [
          "The stew arrives. It's brown. She stares at it.",
          "@zyra Babe. It's *beige.*",
          "@you It's good, though.",
          "She takes a suspicious bite, then another, then steals your bread to mop up the rest.",
          "@zyra:smug Okay, fine. It's good. It's *very* good. But it needs a garnish. It needs, like, a flower. Or a sparkler. Next time I'm bringing a sparkler.",
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          "The Moonlit Gardens are full of nobles taking the evening air, and Zyra has opinions about every single one of them.",
          "@zyra *Don't* turn around. Lady in lilac, by the fountain. That bonnet? *Mythic.* Big crit energy. And the man next to her has a waistcoat that's honestly so Underdark I want to hold a funeral for it.",
          "A dowager with a lorgnette spots her, gasps, and hurries her poodle away.",
          "Zyra waves after her, sweetly.",
          "@zyra:smug She's having an affair with her fencing instructor. Wednesdays. I'll never tell. But *I know.*",
        ],
        choices: [
          { text: 'Rate the outfits with her. Loudly.', go: 'rate', aff: 6 },
          { text: '"How do you know all this?"', go: 'secrets', aff: 4 },
          { text: '"You\'re the best-dressed person here, you know."', go: 'best', aff: 5 },
        ],
      },
      rate: {
        text: [
          "@you Gentleman by the roses. Gold buttons, green velvet, pointy shoes.",
          "@zyra:happy Ugh, the *buttons!* Okay, the buttons are mythic, but the shoes are a crime, and you said *pointy* in exactly the right tone of voice.",
          "You go through the whole garden. She shrieks with laughter so many times that a hedge trimmer in a bonnet asks you to keep it down. She gives you a score at the end: *eight out of ten, very fashion, needs more sparkle.*",
          { if: { stage: 4 }, text: "@zyra:blush You're the only person I've ever wanted to gossip with. In the Underdark, gossip gets people killed. Up here it just gets them *giggling.*" },
        ],
        end: true,
      },
      secrets: {
        text: [
          "@zyra Oh, I can't help it. I was trained to listen from three rooms away before I could walk. It's like having really good eyesight. I can't turn it off.",
          "@zyra:sad In the Underdark, you learn everyone's secrets so you can use them. I collected so many. I used *some.* I'm not proud of all of them.",
          "She brightens deliberately.",
          "@zyra:happy Up here I only use my powers for *good.* And for gossip. Mostly for gossip.",
        ],
        end: true,
      },
      best: {
        text: [
          "She stops in the middle of the path and looks down at herself: pink silk, gold curls, forty-ish pieces of jewelry, platform sandals.",
          "@zyra:blush I mean. *Obviously.* But nobody ever just... says it. They usually say *what is that* or *guards, guards.*",
          "She links her arm through yours and walks the rest of the gardens with her chin held very high. The dowager with the poodle sees you both coming and, after a long moment, nods.",
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          "Zyra has claimed the very end of the longest pier at Saltbreeze Harbor: a blanket, a pink parasol, two paper cones of fried fish, and a pair of smoked-glass spectacles with heart-shaped rims.",
          "@zyra Shhh. Sit. It's starting.",
          "The sun is sinking into the sea. It goes gold, then orange, then a deep blazing pink.",
          "@zyra:happy Okay, this is my favorite thing in the whole world. In the Underdark, nothing ever *ends* like this. Things just... stay dark. Forever. Up here the day *finishes*, and it's so pretty about it, and then it comes back again in the morning like nothing happened.",
        ],
        choices: [
          { text: 'Watch it with her, in silence, all the way down.', go: 'silence', aff: 6 },
          { text: '"What does the sky look like, down there?"', go: 'sky', aff: 5 },
          { text: 'Steal her heart-shaped spectacles and put them on.', go: 'glasses', aff: 3 },
        ],
      },
      silence: {
        text: [
          "You don't say anything. Neither does she, which, for Zyra, is extraordinary. She leans her head on your shoulder, and her earrings chime softly in the wind.",
          "The sun goes down a sliver at a time. When the last bright edge slips under the water, she lets out a long breath, as if she's been holding it for three hundred years.",
          "@zyra:blush You didn't talk. You just let me *have* it.",
          { if: { stage: 4 }, text: "@zyra:happy I'm going to watch every single sunset for the rest of my life. I want you at every one. That's not a question. Well. It's a little bit a question." },
        ],
        end: true,
      },
      sky: {
        text: [
          "@zyra It doesn't. It's rock. Just rock, all the way up. There's this glowing fungus on the high ceilings that's sort of blue, and everyone calls it *the stars*, but it's not. It's fungus.",
          "@zyra:sad I used to lie on my back in the training yard and stare at it and pretend. And then I came up here, and I saw the real ones, and I sat down in the middle of the road and cried until a goat came over to check on me.",
          "@zyra:happy The goat was really nice about it.",
        ],
        end: true,
      },
      glasses: {
        text: [
          "You pluck the heart-shaped spectacles off her nose and put them on yourself. You turn to her with a serious expression.",
          "She stares at you. Then she shrieks.",
          "@zyra:happy Oh, that's *so* you. No — wait — give them — they're *mine* —",
          "She tackles you so enthusiastically that you both nearly go off the end of the pier. You miss the last bit of the sunset entirely. She keeps the spectacles. She lets you borrow them on Tuesdays.",
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          "Zyra arrives for a picnic in Whisperwood with a parasol, a pink-checked blanket, a basket of tiny pastries cut into star shapes, and the wary posture of someone walking into an ambush.",
          "@zyra Okay, I love it, it's gorgeous, it's very *nature.* But there's a lot of sunlight, and a lot of bugs, and some of them are *spotted.*",
          "A ladybug lands on the blanket. She goes perfectly still. A knife appears in her hand from nowhere.",
          "@zyra:surprised Don't. Move. In the Underdark, *everything* spotted is poisonous.",
        ],
        choices: [
          { text: 'Let the ladybug walk onto your finger and show her.', go: 'ladybug', aff: 6 },
          { text: 'Weave her a crown of wildflowers to distract her.', go: 'crown', aff: 5 },
          { text: 'Laugh. "It\'s a beetle, Zyra."', go: 'tease', aff: 3 },
        ],
      },
      ladybug: {
        text: [
          "You hold out your finger. The ladybug climbs on and trundles along your knuckle. Zyra watches it as if it might explode.",
          "@zyra It's not... biting you?",
          "@you It's a ladybug. They're good luck.",
          "Very slowly, the knife disappears. She holds out one glittery fingertip, and you let it walk across. She doesn't breathe until it opens its wings and buzzes away.",
          "@zyra:happy It was so *small.* And it had *spots* and it was *nice.* That's literally legendary. I'm going to get a ladybug charm. I'm getting *ten.*",
        ],
        end: true,
      },
      crown: {
        text: [
          "You weave daisies and bluebells into a crown and set it on her bleached-gold curls. She forgets the ladybug entirely.",
          "@zyra:blush Flowers. On my *head.* Just for being pretty.",
          "@zyra In the Underdark, you only get a crown if someone important dies. This is so much better.",
          "She wears it all the way home. She presses one daisy in her diary that night, and draws a little pink heart next to it.",
        ],
        end: true,
      },
      tease: {
        text: [
          "@zyra:angry It's *spotted!* Spotted is a *warning!* Nature put spots on it to tell you something!",
          "The ladybug flies onto her nose. She makes a sound like a squeaking hinge and stays absolutely, perfectly still for two full minutes until it leaves.",
          "@zyra:smug ...I won, though. It blinked first.",
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          "Market Street is at its mid-morning busiest. At the cosmetics stall on the corner, someone is having a crisis.",
          "@zyra Okay. Okay okay okay. *Sea Shell Pink.* Or *Seashell Pink.* This is the most important decision of my whole life, and I'm three hundred years old.",
          "@zyra_vendor They're the same polish, miss. Different batch.",
          "@zyra *Different batch.* Babe, that's how wars start.",
          "She's a dark elf. Your brain gets there a beat late, because nothing else about her matches the stories. Her skin is a dusky lilac-grey with a sun-kissed glow across the cheekbones, as though she's been lying on the harbor wall all summer. Her hair is bleached the color of fresh butter and piled into enormous curls, with one hot-pink streak. Her red eyes are framed in glittering pink shadow and lashes so long they practically cast shade.",
          "She's wearing platform sandals, a cropped jacket of spider-silk dyed flamingo pink, a short pleated skirt, and somewhere between thirty and forty pieces of jewelry: stacked bangles, a charm bracelet, gold hoops, and nine little earrings climbing each long, pointed ear. Her nails are pink. Her nails are *very* pink.",
          "She turns, sees you, and her whole face lights up as though you're the answer to a prayer.",
          "@zyra:happy Oh, thank the Surface. A stranger! Strangers are *objective!* Bestie, which pink? Be totally honest. No curse, I can take it.",
        ],
        aff: 10,
        choices: [
          { text: 'Study both shades carefully and pick one, with reasons. [Charm check 1]', check: { stat: 'charm', dc: 1 }, pass: 'pick_win', fail: 'pick_fail' },
          { text: '"They\'re the same color."', go: 'same' },
          { text: '"Both. Obviously both."', go: 'both', flag: 'zyra_both' },
        ],
      },
      pick_win: {
        text: [
          "@you Sea Shell. It's warmer. It'll catch the sunset. Seashell is for people who want to look nice. Sea Shell is for people who want to be *noticed.*",
          "She gasps and clutches her chest.",
          "@zyra:surprised Oh my *gods.* You have *taste.* Surface people never have taste! They wear brown on *purpose!*",
          "@zyra:happy That's literally legendary. I'm buying it. I'm buying two.",
        ],
        aff: 6,
        next: 'thief',
      },
      pick_fail: {
        text: [
          "@you That one. The, uh... pinker one.",
          "@zyra Babe. They're *both* the pinker one.",
          "She pats your cheek with great sympathy.",
          "@zyra:smug Cute effort, though. Big crit energy, zero damage.",
        ],
        aff: 3,
        next: 'thief',
      },
      same: {
        text: [
          "@zyra:angry The *same?*",
          "She stares at you, aghast, for a long moment.",
          "@zyra Wow. Okay. That is so Underdark of you.",
          "Then she cracks up, a big, loud, honking laugh that turns heads all down the street.",
          "@zyra:happy I'm kidding! Mostly! You're so *honest.* Nobody's honest with me up here. They're all too busy being scared.",
          "The last part slips out lightly, as if it doesn't matter. It sounds like it matters.",
        ],
        aff: 4,
        next: 'thief',
      },
      both: {
        text: [
          "@zyra:happy *Both.* Oh, you're *dangerous.*",
          "She slaps a handful of coins on the counter, scoops up both bottles and holds them up like trophies.",
          "@zyra Why not both? Why not *everything?* That's my new motto now, and you're not even getting credit.",
        ],
        aff: 6,
        next: 'thief',
      },
      thief: {
        text: [
          "While the vendor wraps her purchase, something tugs at your belt. Your coin purse is gone. A skinny man in a grey hood is already three stalls away, running.",
          "You turn to chase him. You don't need to.",
          "Zyra isn't beside you any more. She's *there*, in front of him, without seeming to have crossed the space in between. One platform sandal hooks his ankle. One hand turns his wrist in a way wrists don't like. He's face-down on the cobbles before your purse even starts to fall, and she catches it before it lands.",
          "In her other hand, so briefly that you almost miss it, is a thin black knife. A heartbeat later it's gone, vanished back into her curls.",
          "Market Street goes very quiet. A woman pulls her little boy behind her skirts. Somebody mutters, *drow.*",
          "Zyra's smile flickers, just for an instant. Then it comes back twice as bright.",
          "@zyra:happy Oopsie! Reflexes! Ha ha! So random!",
          "She tosses you your purse. The thief scrambles up and bolts. She lets him go.",
        ],
        choices: [
          { text: '"That was incredible. Can you teach me that?"', go: 'amazed', flag: 'zyra_knife', aff: 8 },
          { text: '"Are you all right?"', go: 'okay', aff: 7 },
          { text: '"Thank you."', go: 'thanks', aff: 4 },
        ],
      },
      amazed: {
        text: [
          "@zyra:surprised You're... not scared?",
          "@you Scared? You did that in *platform shoes.*",
          "She stares at you. Then she laughs. It isn't the big honking laugh this time. It's smaller, startled, and real.",
          "@zyra:blush Okay. You're officially my favorite surface person. Don't tell the sun. It'll get jealous.",
        ],
        next: 'name',
      },
      okay: {
        text: [
          "@zyra Me? Babe, I'm fine, *he's* the one who —",
          "She stops. She looks at you properly.",
          "@zyra:sad Nobody ever asks if *I'm* okay. After. They just ask if *they're* okay.",
          "Then she shakes it off so hard her earrings jingle.",
          "@zyra:happy Anyway! *Gorgeous* day!",
        ],
        next: 'name',
      },
      thanks: {
        text: [
          "@zyra:happy Any time! Literally *any* time. I'm always around.",
          "She glances at the townsfolk still staring at her from every doorway.",
          "@zyra:smug Everybody keeps an eye on me, so I'm basically a public service.",
        ],
        next: 'name',
      },
      name: {
        text: [
          "@zyra I'm Zyra! Zyra Sunkiss. I picked the *Sunkiss* part myself. My old name was like forty syllables long, and three of them were a curse.",
          "@you {name}.",
          "@zyra:happy {name}! Cute! Okay, so: mornings I'm here. Afternoons I'm at the Steamwhistle, because steam is *so* good for the pores. And evenings I'm at the harbor, watching the sun go down.",
          "@zyra Because it *goes down*, bestie. Every day! And then it *comes back!* Up here it just *does that!*",
          "She blows you a kiss and flounces off into the crowd. People step aside for her as she goes. She pretends not to notice.",
          "You notice her noticing.",
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          "The Steamwhistle Bathhouse is warm and cedar-scented and drifting with steam. In the shallow pool, under a sign reading *NO SWIMMING IN THE TEA*, lies Zyra: green clay mask on her face, two cucumber slices over her eyes, and every single piece of her jewelry still on.",
          "@zyra:happy {name}! I can tell it's you from your footsteps. You walk like someone who's never been chased. It's *adorable.* Get in. It's spa day.",
          "Beside her on the tiles sits a basket overflowing with polishes, combs, oils, brushes, and a few things you don't recognize and decide not to ask about.",
          "@zyra:smug I'm giving you a glow-up. Don't argue. I've been planning it since the market. I have *diagrams.*",
        ],
        choices: [
          { text: 'Hold out your hand. "Do my nails."', go: 'nails', flag: 'zyra_nails' },
          { text: '"Do my hair. I trust you."', go: 'hair' },
          { text: '"Only if I get to do yours first." [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'turn_win', fail: 'turn_fail' },
        ],
      },
      nails: {
        text: [
          "She takes your hand very seriously, like a surgeon. She picks a bottle of glitter pink and paints just one nail, your ring finger, with tiny, perfect strokes.",
          "@zyra Just one. A signature. So we *match.*",
          "She holds up her own hand next to yours to compare.",
          "@zyra:blush In the Underdark, if two people match, it means one of them's the other one's bodyguard. Up here it means you're *friends.*",
          "@zyra:happy I like the up here version so much better.",
        ],
        aff: 7,
        next: 'knights',
      },
      hair: {
        text: [
          "She slides in behind you and starts braiding. Her fingers move so fast you can't feel the individual strands, just a sort of warm, tugging blur. In under a minute you have a crown braid that would make a princess weep.",
          "@zyra:smug I can braid a guard's bootlaces together while he's standing at attention. Hypothetically. That's just a *fun fact.*",
          "She sticks a tiny pink flower into the braid and admires it.",
          "@zyra:happy Mythic. You're *mythic.* I'm a genius.",
        ],
        aff: 6,
        next: 'knights',
      },
      turn_win: {
        text: [
          "She hesitates for a long second. Then she holds out her hand to you, slowly, as though it's something precious she's not sure she should lend.",
          "You paint her nails with your best, steadiest strokes. She watches every movement with her mouth slightly open.",
          "@zyra:surprised Nobody's ever done mine. *Ever.* In the Underdark, you do your own, because if someone's that close to your hands they're probably trying to poison them.",
          "When you're done, she stares at her nails for a long time.",
          "@zyra:blush Okay. You're allowed near my hands. That's, like, a *huge* honor. No curse.",
          "@zyra:happy And fair's fair. Give me yours. You're getting one too, so we *match.*",
        ],
        flag: 'zyra_nails',
        aff: 9,
        next: 'knights',
      },
      turn_fail: {
        text: [
          "You try. You really do. You get polish on her nails, her knuckles, her bangles, and somehow her eyebrow.",
          "She looks down at her hand.",
          "@zyra:happy It's giving... *crime scene.*",
          "She's laughing too hard to be annoyed. She fixes the whole thing in about four seconds flat, then grabs your hand and paints one of your nails glitter pink, perfectly.",
          "@zyra:smug There. Now we match. You can try again when you've had *training.*",
        ],
        flag: 'zyra_nails',
        aff: 5,
        next: 'knights',
      },
      knights: {
        text: [
          "In the next pool, two retired knights are comparing scars. When Zyra stands up to reach for a towel, they go quiet.",
          "One of them reaches, very casually, for the sword lying on the bench beside him.",
          "@zyra_knight We'll, ah... give you the pool, miss.",
          "They climb out, dripping, sword firmly in hand, and leave without looking back.",
          "Zyra keeps smiling. Her clay mask has started to crack, right across the cheek.",
          "@zyra:happy More pool for us! That happens, like, every day. It's so normal. It's *whatever.*",
        ],
        choices: [
          { text: '"It\'s not whatever. Does that happen a lot?"', go: 'ask', aff: 8 },
          { text: 'Cup your hands and splash them both, thoroughly, on their way out.', go: 'splash', aff: 6 },
          { text: '"Their loss. Do my other hand?"', go: 'loss', aff: 5 },
        ],
      },
      ask: {
        text: [
          "She sinks back into the water up to her chin. For a while she just watches the steam.",
          "@zyra:sad Every day. Guards follow me through the market. Shops are suddenly *just closing.* Mothers pick up their kids. Once, a man threw a cabbage at me and then apologized to the *cabbage.*",
          "@zyra That's why the pink, you know. Nobody's scared of pink. It's literally the least scary color there is. I thought if I was sparkly enough, and loud enough, and *cute* enough, they'd stop seeing...",
          "She waves a hand at her ears, her skin, her red eyes.",
          "@zyra:sad ...all of this.",
          "She scrubs the cracked mask off her face, hard.",
          "@zyra:happy But you're still sitting here. So that's one. One is a *great* start.",
        ],
        end: true,
      },
      splash: {
        text: [
          "You send a great wave of hot water across the tiles. It catches both knights square in the back of the knees, and the one with the sword sits down hard on the floor.",
          "Zyra stares at you. Then she laughs so loudly that the troll reading the newspaper in the deep pool lowers it to look.",
          "@zyra:happy You *splashed* them! For *me!* That's so petty! That's the nicest petty thing anyone's ever done for me!",
          "She spends the rest of the afternoon recounting it to you, with gestures, and every time it gets bigger. By the fourth telling, the knights were giants, and you were a tidal wave.",
        ],
        end: true,
      },
      loss: {
        text: [
          "@zyra:surprised ...Yeah. *Yeah.* Their loss.",
          "She takes your other hand and starts on it, and for a while neither of you says anything. When she's done, all ten of your nails are glitter pink.",
          "@zyra:blush Sorry. Got carried away. I was going to do one. I did ten. That's my love language, I think. Excessive nail art.",
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          "Saltbreeze Harbor at sunset. You find Zyra sitting at the very end of the pier, feet dangling over the water, parasol folded, watching the sun go down with the solemn attention of someone in a temple.",
          "@zyra Shh. Sit. It's the best part. It goes all orange, and then pink, and then this purple that's honestly very Underdark, but in a *pretty* way.",
          "You sit. She leans against you. The sun touches the sea.",
          "Then the shadows on the pier lengthen in the wrong direction.",
          "A woman steps *out* of the shadow of a mooring post, as if through a door. She's tall and grim, in black spider-silk armor under a veil, with the same red eyes as Zyra and the expression of a funeral that's running late.",
          "@zyra_ilvaxa Zyrathiel Nhaundar Vel'Ssivrin. Seventh Blade of House Ssivrin. Whisper of the Weeping Dark.",
          "@zyra:angry Ugh. My full name. In *public.*",
          "@zyra Bestie, this is my big sister, Ilvaxa. Ilvaxa, this is my bestie. Be nice. Be *surface* nice.",
          "@zyra_ilvaxa The Matron Mother recalls you. Two years of...",
          "She looks Zyra up and down: the curls, the glitter, the bangles. Her lip curls.",
          "@zyra_ilvaxa ...*this*... is long enough. Return, or be returned.",
          "Her gaze slides to you, and something thin and black appears in her hand.",
          "@zyra_ilvaxa Or perhaps the mortal comes too. As *encouragement.*",
        ],
        choices: [
          { text: 'Step between Zyra and her sister. [Might check 2]', check: { stat: 'might', dc: 2 }, pass: 'step_win', fail: 'step_fail' },
          { text: 'Compliment Ilvaxa\'s cloak. Sincerely. [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'cloak_win', fail: 'cloak_fail' },
          { text: 'Stay still. Trust Zyra.', go: 'trust' },
        ],
      },
      step_win: {
        text: [
          "You stand up and plant yourself squarely between them. Ilvaxa looks you over, slowly, from your boots to your face.",
          "@zyra_ilvaxa Brave. Foolish. *Surface.*",
          "But she hesitates, just for a second, and the knife lowers an inch. It's all the time Zyra needs.",
        ],
        aff: 6,
        next: 'fight',
      },
      step_fail: {
        text: [
          "You try to stand up heroically. Your foot catches a coil of rope, and you go down onto the planks between them in a heap.",
          "@zyra_ilvaxa ...This is what you left the Dark for?",
          "Zyra's eyes go flat and cold.",
        ],
        aff: 4,
        next: 'fight',
      },
      cloak_win: {
        text: [
          "@you Is that shadow-silk? The way it moves is incredible. It's like the cloak's breathing.",
          "Ilvaxa blinks. Nobody, you suspect, has ever complimented her on anything.",
          "@you And the lining's beautiful. Is that a *pink* thread, at the hem?",
          "Ilvaxa freezes. There is, in fact, one single thread of hot pink stitched into the lining of her cloak, hidden where only the wearer could ever see it.",
          "@zyra:surprised Ilvaxa. Is that... *my* thread? From my old sewing kit? The one Mother burned?",
          "@zyra_ilvaxa It was... lying around.",
          "@zyra:happy You *kept* it! You kept my *pink!*",
          "@zyra_ilvaxa This changes *nothing.* The Matron will send others.",
          "She steps backward into the shadow of the mooring post and is gone. But not before you see her clutch the hem of her cloak, just once, very tightly.",
        ],
        flag: 'zyra_pink',
        aff: 10,
        next: 'after',
      },
      cloak_fail: {
        text: [
          "@you Nice... cape?",
          "@zyra_ilvaxa It is a *cloak.*",
          "She lunges for you anyway. She doesn't get there.",
        ],
        aff: 3,
        next: 'fight',
      },
      trust: {
        text: [
          "You don't move. You look at Zyra. She glances back at you, just once, and something in her face settles, like a blade sliding home in its sheath.",
        ],
        aff: 8,
        next: 'fight',
      },
      fight: {
        text: [
          "Zyra moves.",
          "It isn't like the market. That was a reflex. This is a *skill*: quiet, precise and utterly without wasted motion. The bubbly girl is simply gone. In her place is something that has been trained for three hundred years to end fights before the other side realizes they've started.",
          "Ilvaxa's knife ends up buried in the pier. Ilvaxa ends up on her back. Zyra's platform heel rests on her sister's wrist, perfectly balanced, and when she speaks, her voice is flat and cold and very, very quiet.",
          "@zyra Tell Mother I'm not coming home. Tell her I found somewhere the sun comes up.",
          "@zyra And if you *ever* point a knife at them again, Ilvaxa, I will stop being nice.",
          "Ilvaxa melts into the shadows and is gone.",
        ],
        next: 'after',
      },
      after: {
        text: [
          "The pier is silent. A fisherman has dropped his net. A dockhand is staring, white-faced. Somebody behind a stack of crates whispers, *knew it.*",
          "Zyra stands with her back to you, looking out at the water. The sun is almost gone.",
          "@zyra:sad So. That's the other me.",
          "She doesn't turn around.",
          "@zyra You can go, if you want. I won't be weird about it. People usually go.",
          "@you I'm not going anywhere.",
          "A long silence. Then she sits down on the edge of the pier, very small, and lets her feet dangle over the dark water.",
          "@zyra Three hundred years. Trained since I could walk. In the Underdark, everybody's smile has a knife behind it. *Everybody's.* My mother's. My sisters'. Mine.",
          "@zyra So when I came up here, and saw the sun, I wanted to be a smile with *nothing* behind it. That's what the pink is. It's not a disguise. The knife was the disguise. I just can't... take it off all the way. My hands remember.",
          { if: 'zyra_knife', text: "@zyra:blush At the market, you asked me to teach you. You didn't even flinch. I told myself you just hadn't seen properly. But you saw it tonight, and you're *still sitting here.*" },
          "@zyra:sad People see the ears and the skin and the eyes, and they wait for the knife. And now you've *seen* the knife.",
        ],
        choices: [
          { text: '"I saw all of it. I\'m still here. Both of you are mythic."', go: 'both_you', aff: 10 },
          { text: '"Tell me your name. The long one. I want to know all of you."', go: 'longname', flag: 'zyra_name', aff: 9 },
        ],
      },
      both_you: {
        text: [
          "She turns around so fast her curls whip across her face.",
          "@zyra:surprised Did you just use my *slang?* At me? *Correctly?*",
          "@you Both of you. The one who argues about pink and the one who put her sister on the planks. Mythic. No curse.",
          "Her face crumples. She laughs and cries at the same time, mascara running in two long glittery rivers, and she doesn't even try to fix it.",
          "@zyra:happy You're so — that's so — oh, you've ruined my *face* —",
        ],
        next: 'dream',
      },
      longname: {
        text: [
          "She goes still. In the Underdark, you suspect, a true name is not something you hand over lightly.",
          "Then she says it, slowly, so you can follow every syllable.",
          "@zyra Zyrathiel Nhaundar Vel'Ssivrin. It means *Last Light Before the Knife.*",
          "@you It's beautiful.",
          "@zyra:smug It's *so* Underdark.",
          "@you It can be both.",
          "She looks at you for a long time. Then she leans her head on your shoulder.",
          "@zyra:blush Nobody's ever said that name like it was *nice* before.",
        ],
        next: 'dream',
      },
      dream: {
        text: [
          "Later, after the lanterns come on along the harbor, she pulls a battered little sketchbook out of her jacket. It's full of drawings: dresses, jackets, jewelry, sandals, a hundred pink things and a few daring purple ones.",
          "@zyra:blush Can I tell you a dumb dream? Don't laugh.",
          "@zyra I want to make *this.* For people. I want someone to put on something I made and feel the way I felt the first time I saw the sun. Like they're allowed to be *seen.*",
          "@zyra I just don't know where. Nobody here wants to buy a dress from a drow. And down there... nobody's allowed to want a dress at all.",
        ],
        choices: [
          { text: '"Then open a shop. Here. Make Clichéton want it."', go: 'shop', flag: 'zyra_shop', aff: 8 },
          { text: '"Maybe your people need it more than anyone. Maybe the Dark could use a little color."', go: 'underdark', flag: 'zyra_underdark', aff: 8 },
          { text: '"Can I be in the dream too?"', go: 'in_dream', aff: 9 },
        ],
      },
      shop: {
        text: [
          "@zyra:surprised A *shop?* Like, with a *sign?* And a *door?* And people *coming in on purpose?*",
          "@you Why not?",
          "@zyra:happy Why not *both?* Why not *everything?*",
          "She flips to a fresh page in the sketchbook and starts drawing a shopfront so fast her pencil smokes. Little sun over the door. Big windows. Pink, obviously.",
          "@zyra:blush You'd come in? Even on the first day, when nobody else does?",
          "@you Especially then.",
        ],
        end: true,
      },
      underdark: {
        text: [
          "She stares at you as if you've said something in a language she used to speak.",
          "@zyra:surprised ...Go *back?* With *glitter?*",
          { if: 'zyra_pink', text: "@zyra Ilvaxa kept my pink thread. For two whole years. In her *cloak.* Where nobody could see it." },
          "@zyra Everybody down there's so scared all the time. Scared of the Matron, scared of each other, scared of *smiling.* What if... what if somebody went down and showed them they could stop?",
          "She laughs, a little shakily.",
          "@zyra:happy That's so dumb. That's *so* dumb. I'd need a really good bodyguard. One who matches.",
        ],
        end: true,
      },
      in_dream: {
        text: [
          "@zyra:blush You — in the — *yes.* Obviously yes. You're in *all* of them now. I'll have to redraw everything.",
          "She flips to the back of the sketchbook and shows you the last page. It's a drawing of two people sitting at the end of a pier, watching a sunset. One of them is wearing a great deal of pink. The other is clearly you.",
          "@zyra:sad I drew that a week ago. I thought it was just a dumb dream too.",
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          "Zyra's home turns out to be a loft above a milliner's shop on Market Street, up a narrow outside staircase she climbs in her platform sandals without touching the rail.",
          "When she opens the door, you stop on the threshold. The whole room is lit with candles. Dozens of them, on every shelf and sill, flickering pink and gold over a riot of fabric, sketches and hanging jewelry.",
          "@zyra:blush I can see in the dark, you know. Dark elf. I don't need any of these.",
          "@zyra But you can't. And I wanted you to be able to see me.",
          "She's changed out of her usual armor of sparkle into something soft and simple and lilac, and she's only wearing about a dozen pieces of jewelry, which for Zyra is practically nothing at all. And she's talking very fast.",
          "@zyra Okay so I cleaned, which I never do, and I bought those little cakes you like, and I *re*-cleaned, and I tried on six outfits, which is actually low for me, and —",
          { if: 'zyra_nails', text: "She grabs your hand, mid-sentence, to show you something, and stops. The glitter nail she painted at the bathhouse is chipped. She strokes it with her thumb, very gently, as though it's the most important thing in the room." },
          "And then, abruptly, she stops talking.",
          "The silence is so sudden that you hear the candles hiss.",
          "@zyra Okay. I'm going to stop. I'm going to do the scary thing now.",
          "She looks right at you. No glitter, no slang, no performance at all. Just Zyra, and red eyes, and a voice gone low and steady.",
          "@zyra I want you. Tonight. All of tonight. I'm not being cute. I'm not being random. I mean it.",
          "@zyra Do you want that too?",
        ],
        choices: [
          { text: '"Yes. Very much."', go: 'yes', aff: 8 },
          { text: 'Kiss her first. Then answer.', go: 'kiss_first', aff: 10 },
          { text: '"Yes. And can I see you without the sparkle? All of you?"', go: 'sparkle', flag: 'zyra_bare', aff: 10 },
        ],
      },
      yes: {
        text: [
          "She lets out a breath she seems to have been holding since the market.",
          "@zyra:happy *Good.* Okay. Good. That's literally — no. No slang. Not tonight.",
          "She steps in close and kisses you, slow and sure, with nothing bubbly about it at all.",
        ],
        next: 'night',
      },
      kiss_first: {
        text: [
          "You close the distance and kiss her. She makes a tiny, surprised sound, and then her hands are in your hair, and she's kissing you back as though you're the sun coming up.",
          "When you finally pull away, you say it against her lips.",
          "@you Yes.",
          "@zyra:blush You answered with your *mouth* first. That's very forward of you, bestie.",
          "@zyra Do it again.",
        ],
        next: 'night',
      },
      sparkle: {
        text: [
          "She blinks.",
          "@zyra:surprised Without the — oh. *Oh.* Okay. That's going to take a while. There's a *lot* of it.",
          "There is. She takes it off for you piece by piece, by candlelight. The bangles, one at a time, *clink, clink, clink*, into a dish. The charm bracelet. The hoops. All eighteen earrings, ear by ear, while you hold the dish. Two rings. A third ring you didn't even see. Something from her hair that is definitely not a hair pin, and that she sets down without comment.",
          "Then she wipes the glitter from her eyelids with a damp cloth, and turns to face you. Lilac skin, red eyes, bare, uncertain.",
          "@zyra:sad This is very... Underdark.",
          "@you This is beautiful.",
          "She has to sit down for a second.",
        ],
        next: 'night',
      },
      night: {
        text: [
          "She's forward. You discover this almost immediately. She knows exactly what she wants, and she isn't shy about asking for it, and she asks for it in a low, steady voice you've never heard her use before.",
          "Her hands are quick and sure, trained hands, the hands of someone who learned to undo knots in the dark before she could read. Your shirt is unlaced before you realize she's started.",
          "@zyra:blush Sorry. Habit. Do you want it back?",
          "@you No.",
          "@zyra *Good.*",
          "She pulls you down onto a bed heaped with pink cushions and silk scarves, and she kisses your throat, your collarbone, the glitter nail on your hand. She notices everything, every catch of your breath, every time your fingers tighten in her hair, and she does it again, and again, because she was trained to read people and has finally found a use for it that she actually loves.",
          "@zyra Tell me if anything's too much. I'm really, really good at reading people. But I want you to *tell* me.",
          "@you It's not too much.",
          "@zyra Then tell me what's *more.*",
          { if: 'zyra_name', text: "At some point, breathless, she whispers into your ear: *say it.* The long one. And you do, every syllable of it, slowly and softly, and she makes a sound like something breaking open in the best possible way." },
          "The candles burn down one by one. Neither of you notices...",
          "...",
          "When you wake, the sky through the round window is turning grey, then gold. Zyra is sitting up in the tangled sheets beside you, knees to her chest, watching it.",
          "@zyra:happy It's coming back. It always comes back, up here.",
          "She glances down at you and smiles, soft and sleepy and completely unarmored.",
          "@zyra I'm never going to get used to that. Either thing.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake again, properly this time, to the smell of something burning and Zyra's voice from the little kitchen nook.",
          "@zyra No, no, no, no, *no*, it's FINE, it's *fine*, I meant to do that —",
          "She appears in the doorway with a plate of pancakes. Most of them are black on one side. One of them is still faintly smoking.",
          "She's not wearing a scrap of makeup. Her curls are a wild mess, and the roots are growing out silver-white. She's wearing one of your shirts and exactly zero pieces of jewelry, and she's chewing her lip.",
          "@zyra:blush So. This is me with no glitter. In *daylight.* It's... very Underdark.",
          { if: 'zyra_bare', text: "@zyra You already saw, last night. I know. But candlelight's flattering. Daylight's *honest.*" },
        ],
        choices: [
          { text: '"You\'re beautiful. Both ways. Every way."', go: 'beautiful', aff: 6 },
          { text: 'Eat the smoking pancake, with heroic commitment.', go: 'pancake', flag: 'zyra_pancake', aff: 6 },
          { text: 'Hold out your hand. "Do my nails again?"', go: 'nails', aff: 6 },
        ],
      },
      beautiful: {
        text: [
          "@zyra:surprised Both — *every* —",
          "She sets the plate down very carefully on the floor, as though she's afraid of dropping it, and climbs back into bed and hides her face in your shoulder.",
          "@zyra:blush I'm not crying. It's pancake smoke.",
          "She stays there for a long time. When she finally sits up, she doesn't reach for the makeup. She just reaches for your hand.",
        ],
        end: true,
      },
      pancake: {
        text: [
          "You pick up the smoking pancake, look her dead in the eye, and eat the whole thing.",
          "It's terrible. It's crunchy in places pancakes shouldn't crunch. You don't flinch.",
          "@zyra:happy Oh my *gods.* That's — that's *big crit energy!* That's the bravest thing I've ever seen anyone do, and I've seen people fight *driders!*",
          "She learns to make pancakes properly by the end of the month. She tells everyone it's because you deserve better. Mostly it's because she wants to watch you eat them.",
        ],
        end: true,
      },
      nails: {
        text: [
          "She lights up like a sunrise.",
          { if: 'zyra_nails', text: "@zyra:happy You *kept* it! The bathhouse one! It's all chipped, oh, babe, that's *tragic,* hold still —", else: "@zyra:happy *Yes.* Yes. Hold still. I've been dying to do this since the market —" },
          "She sits cross-legged on the bed with her little bottle of glitter pink, bare-faced and messy-haired and completely happy, and paints your nail with tiny, perfect strokes. Then she paints one of her own to match, and holds the two hands side by side in the morning light.",
          "@zyra:blush There. Matching. Up here, that means *friends.*",
          "@zyra ...Okay, it means way more than friends. But we'll work up to the full set.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          "You don't have to look for Zyra on the festival hill. She's the brightest thing on it.",
          "She's sewn tiny glowing star-charms onto every inch of her jacket, and she's wearing a crown of them in her curls, and when she sees you coming she waves both arms over her head like she's signalling a ship.",
          { if: 'zyra_both', text: "@zyra:smug I'm wearing both pinks. Obviously. And a third pink. It's festival. Why not *everything?*" },
          "She pulls you down onto a blanket. Around you, a few people glance at her ears, and then at the stars on her jacket, and then away.",
          "@zyra:sad I've never seen a star fall. In the Underdark there aren't any stars at all. I've only had two years of them.",
          "@zyra:blush I wanted to see it with you. I wanted it to be *ours.*",
        ],
        next: 'fall',
      },
      fall: {
        text: [
          "The first star falls, a long white streak right across the sky.",
          "Zyra gasps. Then another one falls, and then ten, and then the whole sky is raining light, and she doesn't say *mythic* or *literally legendary* or anything at all. She just cries, quietly, the way people cry in temples, holding your hand so tightly her rings dig in.",
          "@zyra I came up here to see the sun. That's all I wanted. Just to see it once.",
          "@zyra:blush I stayed for you.",
          "She turns to you. The starlight makes the glitter on her cheeks look like it's falling too.",
          "@zyra So. What now?",
        ],
        choices: [
          { text: '"Now we stay. And we build the thing you dreamed about, right here."', go: 'stay' },
          { text: '"Now we go down. Together. And we bring the sky with us."', go: 'down', if: 'zyra_underdark' },
        ],
      },
      stay: {
        text: [
          "@zyra:surprised *Here?* In Clichéton? Where people cross the street?",
          "@you Let them cross it. Right into your shop.",
          "She laughs, wet and bright, and kisses you under a sky full of falling stars.",
          "@zyra:happy Okay. *Okay.* But I'm making the sign, and it's going to be *so* pink.",
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          "*Some time later...*",
          "*Sunkiss & Co.* opens on the corner of Market Street the following spring, with a little gold sun over the door and windows so full of color that people stop in the street to stare. For the first week, nobody comes in.",
          "Then a noblewoman in a lilac bonnet buys a jacket. Then her whole salon does. Then the Countess of Ash wears a Sunkiss gown to the Midsummer Ball, and by autumn there is a queue around the block every morning, and half the people in it are the same ones who used to cross the street.",
          "Zyra greets every one of them by name. She knows all their secrets. She uses them strictly for choosing which color would suit them best.",
          { if: 'zyra_shop', text: "The shop sign says *Sunkiss & Co.* in glitter. You are the *& Co.* She refuses to discuss this." },
          "No shoplifter has ever made it out of the door. Nobody can quite work out how she does it. She's always on the other side of the counter, painting someone's nails, when the thief suddenly finds himself sitting on the step outside with his boots laced together.",
          { if: 'zyra_pink', text: "Once a year, on the longest night, a tall veiled woman steps out of the shadow in the stockroom, buys a single spool of pink thread, and leaves without saying a word. Zyra always gives her a discount. Ilvaxa always pays full price." },
          "Every evening, whatever else is happening, she shuts the shop at sunset and drags you down to the end of the pier. She still cries a little, sometimes, when it goes down.",
          "@zyra:happy It comes back, though. Every day. That's the thing about up here.",
          "*Literally legendary.*",
        ],
        ending: 'zyra',
      },
      down: {
        text: [
          "@zyra:surprised Down. To the *Dark.* You'd come?",
          "@you You'll need a bodyguard. One who matches.",
          { if: 'zyra_nails', text: "You hold up your hand, with its one glittery nail. She stares at it, and then she starts laughing and crying at the same time, and grabs your face, and kisses you while the sky falls down around you.", else: "She stares at you, and then she starts laughing and crying at the same time, and grabs your hand and paints one of your nails pink right there on the hill, and kisses you while the sky falls down around you." },
          "@zyra:happy Okay. *Okay.* We are going to need *so* much polish.",
        ],
        next: 'down_epilogue',
      },
      down_epilogue: {
        text: [
          "*Some time later...*",
          "You go down in the spring, with a cart full of crates: polish, ribbon, bolts of bright silk, a hundred paper lanterns and one very confused donkey. The tunnels close over your heads, and the sun goes away, and Zyra holds your hand the entire way down.",
          "The Weeping Dark is everything she said: black stone, black silk, whispers, and knives behind every smile. The Matron Mother of House Ssivrin receives you on a throne of black glass and looks at her seventh daughter for a very long time.",
          "@zyra Hi, Mother. I brought presents.",
          { if: 'zyra_pink', text: "It's Ilvaxa who breaks first. She steps out from behind the throne, holds out one hand, and wordlessly accepts a bottle of Starburst Flamingo. The court gasps. Then a second sister steps forward. Then a third.", else: "It's a young guard by the door who breaks first. He steps forward, shaking, and asks very quietly whether she has anything in *purple.* The court gasps. Then another drow steps forward. Then another." },
          "It takes a year. Then it takes two. But one day, the great cavern market of the Weeping Dark holds its very first Festival of Colors, and the stalactites are hung with paper lanterns, and somebody has painted the glowing fungus on the ceiling into the shapes of real stars. Zyra teaches a hundred former assassins how to do a perfect cat-eye. Nobody gets stabbed. It's the best party the Underdark has ever had.",
          { if: 'zyra_name', text: "She signs her designs with both names now: *Zyrathiel Nhaundar Vel'Ssivrin*, and underneath it, in glitter, *Sunkiss.* Last Light Before the Knife, and then the sun." },
          "Every year, at Starfall, she drags you back up through the tunnels, all the way to the festival hill above Clichéton, to watch the real stars fall.",
          "@zyra:happy Down there, they've got lanterns now. Up here, we've got this. Babe, we've got *both.*",
        ],
        ending: 'zyra_underdark',
      },
    },
  },
});
