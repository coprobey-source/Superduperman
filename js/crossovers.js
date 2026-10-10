/*
 * Crossover events: heroines running into each other around town.
 * Each fires once, when you're at the right place and time and have met both.
 * At most one crossover per day.
 */
(function () {
  'use strict';
  const FL = window.FL;
  FL.sceneCast = FL.sceneCast || {};

  function met(s, id) { return s.chars[id] && s.chars[id].stage >= 1; }

  function xover(id, cast, where, scene, extra) {
    extra = extra || {};
    FL.addScene(id, scene);
    FL.sceneCast[id] = cast;
    FL.addEvent({
      id: id,
      scene: id,
      priority: 3,
      cond: function (s) {
        if (s.loc !== where.loc) return false;
        if (where.slots && where.slots.indexOf(s.slot) < 0) return false;
        if (s.day < (where.day || 3) || s.day >= FL.CONFIG.maxDay) return false;
        if (s.flags.lastCrossover === s.day) return false;
        if (!cast.every(function (c) { return met(s, c) && FL.charUnlocked(s, c); })) return false;
        return !extra.cond || extra.cond(s);
      },
    });
    // remember the day so only one crossover happens per day
    const start = scene.start;
    const fn = start.fn;
    start.fn = function (s, run) { s.flags.lastCrossover = s.day; if (fn) fn(s, run); };
  }

  function both(a, b, n) { const o = {}; o[a] = n; o[b] = n; return o; }
  function one(a, n) { const o = {}; o[a] = n; return o; }

  /* ------------------------------------------------------------------ Fenna & Kit */
  xover('x_fenna_kit', ['fenna', 'kit'], { loc: 'market', slots: [0, 1] }, {
    start: {
      text: [
        "There's a commotion at the fishmonger's stall: hissing, growling, and the fishmonger hiding under his counter.",
        "Fenna and Kit are crouched on opposite ends of the stall, each with one hand on the same enormous salmon.",
        "@fenna:angry Fenna smelled it first. Fenna's fish. *Grrr.*",
        "@kit:angry Finders keepers! I found it first! With my *eyes!* Eyes beat noses! Hssss!",
        "They both spot you at the same time.",
        "@fenna {name}! Tell the cat. Tell the cat the fish is Fenna's.",
        "@kit:smug {name}! Tell the *dog* that cats invented fish! It's a known fact!",
      ],
      choices: [
        { text: "\"Fenna smelled it first. Sorry, Kit.\"", go: "fenna", affTo: { fenna: 6, kit: -3 } },
        { text: "\"Kit saw it first. Sorry, Fenna.\"", go: "kit", affTo: { kit: 6, fenna: -3 } },
        { text: "Buy two more salmon and declare a feast. [Charm check 2]", check: { stat: 'charm', dc: 2 }, pass: "feast", fail: "chaos" },
      ],
    },
    fenna: {
      text: [
        "Fenna lets out a victorious howl and runs off with the salmon over her shoulder. Kit flattens her ears and glares at you.",
        "@kit:angry Traitor. Dog-lover. I'm stealing your socks. *All* of them.",
        "She does. You find them a week later, every one, on top of the town hall weathervane.",
      ],
      end: true,
    },
    kit: {
      text: [
        "Kit shrieks in triumph and vanishes up a drainpipe with the salmon. Fenna's ears droop and she gives you a long, wounded look.",
        "@fenna:sad ...Fenna will remember this. Fenna's nose remembers *everything.*",
        "Then she bumps her head against your shoulder anyway, sulkily, because she can't stay mad at you.",
      ],
      end: true,
    },
    feast: {
      text: [
        "@you Three fish! One for each of us! Picnic by the fountain!",
        "They both stare at you. Then at each other. Then at the three salmon.",
        "Ten minutes later, a werewolf and a catgirl are sitting side by side on the fountain's edge, eating raw fish with their hands, arguing cheerfully about whether a nose or eyes are better for hunting.",
        "@kit:happy ...Okay, you're alright, for a dog.",
        "@fenna:happy You are alright for a cat. You smell like trouble. Fenna likes trouble.",
        "By sunset they've planned a joint raid on the butcher's. You decide not to ask.",
      ],
      affTo: { fenna: 5, kit: 5 },
      gold: -16,
      end: true,
    },
    chaos: {
      text: [
        "@you How about we share — ",
        "They both lunge for the salmon at once. It flies into the air, hits the fishmonger, ricochets off a cart, and lands in the fountain. Fenna dives in after it. Kit dives in after Fenna. You end up pulling two soaked, furious, giggling women out of the water.",
        "The salmon escapes. Nobody knows how. It was definitely dead.",
      ],
      affTo: { fenna: 2, kit: 2 },
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Valeria & Celestine */
  xover('x_valeria_celestine', ['valeria', 'celestine'], { loc: 'square', slots: [2] }, {
    start: {
      text: [
        "A black carriage rattles to a halt by the fountain. The door opens, and Countess Valeria steps out — straight into the path of Sister Celestine, who is carrying a large bucket of holy water for the evening blessing.",
        "Both women freeze.",
        "@celestine:surprised Oh! Oh my goodness. You're — you're the vampire. From the castle. The *Crimson Terror.*",
        "@valeria:smug And you're the little priestess with the bucket. How *quaint.* Do be careful where you swing that, darling. I just had this dress made.",
        "Celestine's grip on the bucket tightens. Valeria's eyes glitter red. The whole square goes very quiet.",
      ],
      choices: [
        { text: "Step between them. \"Ladies. It's a lovely evening. Let's keep it that way.\" [Charm check 3]", check: { stat: 'charm', dc: 3 }, pass: "peace", fail: "splash" },
        { text: "\"Celestine, she's with me.\"", go: "withme", affTo: { valeria: 6, celestine: -2 } },
        { text: "\"Valeria, behave yourself.\"", go: "behave", affTo: { celestine: 6, valeria: -2 } },
      ],
    },
    peace: {
      text: [
        "You step smoothly between them and offer each an arm.",
        "@you I was just about to buy roasted chestnuts. Would you both join me?",
        "There's a long, tense silence. Then Valeria laughs, low and amused.",
        "@valeria:happy Chestnuts. With a priestess. Oh, the *scandal.* I accept.",
        "@celestine:neutral ...I've never spoken to a vampire before. Is it true you can't see your reflection?",
        "@valeria:sad Darling, it's a *tragedy.* Six hundred years and I've never once been sure my hair looks right.",
        "By the bottom of the chestnut bag they're comparing notes on the worst kinds of nobility. Celestine leaves giggling. Valeria leaves looking thoughtful.",
        "@valeria:smug The little priestess is sweet. Too sweet. I may have to corrupt her a little. ...Purely as a friend.",
      ],
      affTo: { valeria: 5, celestine: 5 },
      end: true,
    },
    splash: {
      text: [
        "You step between them just as Celestine flinches. The bucket tips. A wave of holy water drenches *you*, head to toe.",
        "There's a stunned pause. Then Valeria laughs, a rich, wicked, six-hundred-year-old laugh that makes the carriage horses flatten their ears, and Celestine is apologizing so fast the words blur together, and you are standing in a puddle, blessed to the bone.",
        "@valeria:happy Oh, sweetheart. You've never looked holier.",
      ],
      affTo: { valeria: 2, celestine: 2 },
      end: true,
    },
    withme: {
      text: [
        "Celestine looks between you and the vampire, eyes wide.",
        "@celestine:blush *With* you? Oh. Oh, I see. I'll — I'll pray for you. Very hard.",
        "She scurries off. Valeria slips her arm through yours, smug as a cat.",
        "@valeria:smug *With me.* I do like the sound of that. Say it again, louder, for the peasants.",
      ],
      end: true,
    },
    behave: {
      text: [
        "Valeria's eyebrows climb to her hairline.",
        "@valeria:surprised *Behave?* Me? I'll have you know I've been on my best behavior for a whole century.",
        "But she steps aside with an elaborate bow, and Celestine slips past with a grateful, dazzling smile at you.",
        "@valeria:smug Hmph. You'll make this up to me, pet. Tonight.",
      ],
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Brakka & Brunhild */
  xover('x_brakka_brunhild', ['brakka', 'brunhild'], { loc: 'arena', slots: [1] }, {
    start: {
      text: [
        "The arena crowd is buzzing. Down on the sands, Brakka and Dame Brunhild face each other, weapons drawn. Neither of them looks happy.",
        "@brunhild:angry Orc. We agreed never to speak of the last time.",
        "@brakka:smug Brakka is not *speaking.* Brakka is *fighting.* Is different.",
        "@brunhild The outcome was inconclusive!",
        "@brakka Knight fell in the water trough. Brakka calls that *conclusive.*",
        "Both spot you in the stands at the same moment.",
        "@brakka:happy TINY HUMAN! Be judge! Judge is fair!",
        "@brunhild:smug Yes. A neutral arbiter. I accept. *Witness my honor!*",
      ],
      choices: [
        { text: "Judge fairly. Watch closely. [Wits check 2]", check: { stat: 'wits', dc: 2 }, pass: "fair", fail: "draw" },
        { text: "Declare Brakka the winner before it even starts.", go: "brakka", affTo: { brakka: 6, brunhild: -3 } },
        { text: "Declare Brunhild the winner before it even starts.", go: "brunhild", affTo: { brunhild: 6, brakka: -3 } },
      ],
    },
    fair: {
      text: [
        "The fight is magnificent. Axe against sword, raw strength against perfect technique. You watch every exchange and call every touch. Brakka lands a hit. Brunhild counters. Brakka feints. Brunhild nearly falls in the water trough again and recovers at the last second, to thunderous applause.",
        "At the end, you call it exactly as it is: a draw, by a hair.",
        "Brakka roars with laughter and slaps her thigh hard enough to raise a cloud of sand. Brunhild, after a moment, laughs too, which is very much against tenet forty-three.",
        "@brakka:happy Knight is strong! Brakka respects knight!",
        "@brunhild:happy And you are... surprisingly disciplined. For an orc. We shall train together, Ironjaw. Weekly.",
        "They shake hands. Then Brakka hugs Brunhild, armor and all, and lifts her off the ground while she shouts in protest.",
      ],
      affTo: { brakka: 5, brunhild: 5 },
      end: true,
    },
    draw: {
      text: [
        "You try to follow the fight, but it's all flashing steel and flying sand. You lose track completely. When they finally stop, panting, both look at you.",
        "@you ...It's a draw?",
        "@brunhild:angry Inconclusive. *Again.*",
        "@brakka:smug Brakka demands rematch. Next week. Tiny human brings glasses.",
      ],
      affTo: { brakka: 2, brunhild: 2 },
      end: true,
    },
    brakka: {
      text: [
        "Brakka roars in triumph and lifts her axe to the crowd. Brunhild turns to you, betrayed, and goes very red.",
        "@brunhild:angry Partiality! Corruption! A rigged tribunal! Kill me! *Just kill me!*",
        "@brakka:happy Brakka will not kill knight. Brakka will buy knight a drink. Knight looks like she needs one.",
      ],
      end: true,
    },
    brunhild: {
      text: [
        "Brunhild raises her sword in solemn victory. Brakka looks at you with enormous, wounded eyes, then sits down in the sand and sulks.",
        "@brakka:sad Tiny human picked shiny knight. Brakka is... fine. Brakka is very fine. Brakka will go punch a tree.",
        "@brunhild:blush ...I accept this victory, though it was perhaps not entirely earned. I shall buy the orc a drink. In honor.",
      ],
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Sylvaine & Pell */
  xover('x_sylvaine_pell', ['sylvaine', 'pell'], { loc: 'library', slots: [0] }, {
    start: {
      text: [
        "In the history section, Pell is frozen behind a bookshelf, white as a sheet, clutching a book to her chest. Across the aisle, Sylvaine is floating cross-legged in midair, reading a well-thumbed copy of *The Duke's Forbidden Passion.*",
        "Pell grabs your sleeve and pulls you down to whisper.",
        { if: { stage: 3, who: 'pell' }, text: "@pell:surprised Sh-she's reading my book. The *archmage* is reading my book. She's nine hundred years old. She's going to think it's *terrible.*", else: "@pell:surprised Sh-she's reading *that* book. The *archmage* is reading *that book.* She's nine hundred years old. What if she thinks it's *terrible?* I mean — not that I — I've only *heard* it's — oh no." },
        "Sylvaine turns a page, hums thoughtfully, and makes a note in the margin with a floating quill.",
        "@sylvaine:smug Hm. Interesting. Very interesting.",
      ],
      choices: [
        { text: "\"Go talk to her, Pell. I'll come with you.\"", go: "introduce", affTo: { pell: 4, sylvaine: 3 } },
        { text: "Casually ask Sylvaine what she thinks of the book. [Wits check 2]", check: { stat: 'wits', dc: 2 }, pass: "review", fail: "oops" },
      ],
    },
    introduce: {
      text: [
        "You walk Pell over, her hand trembling in yours.",
        { if: { stage: 3, who: 'pell' }, text: "@pell:blush M-Madam Elderleaf. I'm — I — the author of that — I'm —", else: "@pell:blush M-Madam Elderleaf. I'm — I — I've read that — I'm —" },
        "Sylvaine looks up. Her ancient eyes widen.",
        { if: { stage: 3, who: 'pell' }, text: "@sylvaine:surprised You're *Lady Velvet Ink?* Oh, my dear girl. I have every volume. I've read Chapter Nine twelve times.", else: "@sylvaine:surprised A fellow reader? Oh, my dear girl. I have every volume. I've read Chapter Nine twelve times." },
        "Pell makes a noise like a mouse being stepped on.",
        { if: { stage: 3, who: 'pell' }, text: "@sylvaine:smug Your elven historical detail is atrocious, of course. Elves didn't have *corsets* in the Third Age. But the *passion.* Oh, the passion is quite accurate. I'd know.", else: "@sylvaine:smug The elven historical detail is atrocious, of course. Elves didn't have *corsets* in the Third Age. But the *passion.* Oh, the passion is quite accurate. I'd know." },
        "They spend the whole morning in the reading nook, Sylvaine correcting the book's elven history and Pell, scarlet, taking notes on things that aren't history at all.",
      ],
      affTo: { pell: 4, sylvaine: 4 },
      end: true,
    },
    review: {
      text: [
        "@you Good book?",
        "@sylvaine:happy Remarkably good. The author has a rare gift. A little overwrought, perhaps, but she writes longing better than anyone I've read in four hundred years.",
        "@sylvaine I'd love to meet her. I suspect she's very shy.",
        "There's a crash from behind the bookshelf. Pell has fainted onto a pile of atlases. Sylvaine floats over, peers down, sees the manuscript pages spilling from Pell's satchel, and smiles a slow, ancient, delighted smile.",
        "@sylvaine:smug ...Ah.",
        { if: { stage: 3, who: 'pell' }, text: "When Pell comes to, an archmage is fanning her with a signed copy of her own book, asking very politely for an autograph.", else: "When Pell comes to, an archmage is fanning her with the manuscript pages, neatly gathered and very carefully not read, and talking kindly about how the best writers are always the shy ones." },
      ],
      affTo: { pell: 6, sylvaine: 5 },
      end: true,
    },
    oops: {
      text: [
        "@you So! Is the book... good? Or is it bad? Pell thinks — I mean — some people think —",
        "Sylvaine's eyes slide from you to the bookshelf, where Pell is visibly dying.",
        { if: { stage: 3, who: 'pell' }, text: "@sylvaine:smug It's very good. Tell your friend behind the shelf that I'd love her autograph.", else: "@sylvaine:smug It's very good. Tell your friend behind the shelf that she may borrow it when I'm done. She's been reading it over my shoulder for an hour." },
        "Pell flees the library and doesn't come back until lunchtime. But she's smiling the whole afternoon.",
      ],
      affTo: { pell: 2, sylvaine: 2 },
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Morwen & Coralie */
  xover('x_morwen_coralie', ['morwen', 'coralie'], { loc: 'docks', slots: [0, 1] }, {
    start: {
      text: [
        "Down at the end of the pier, Morwen is dangling her feet over the water and holding out a bubbling purple vial. Coralie is in the water below, bouncing with excitement.",
        "@coralie:happy Is it the legs one? Is it the *legs* one again?",
        "@morwen:smug It's the *improved* legs one! Lasts until midnight instead of sunset! Only side effect is a mild tendency to quack.",
        "@coralie:surprised Quack?",
        "@morwen:blush *Mild.* A *mild* tendency.",
        "They both notice you at once.",
        "@coralie:happy {name}! Morwen's giving me legs! For a whole evening! Should I drink it?",
      ],
      choices: [
        { text: "\"Check the recipe first.\" Look over Morwen's notes. [Wits check 3]", check: { stat: 'wits', dc: 3 }, pass: "fix", fail: "quack" },
        { text: "\"Go for it! I'll take you dancing!\"", go: "quack", affTo: { coralie: 4 } },
      ],
    },
    fix: {
      text: [
        "You read Morwen's scrawled recipe. Third line from the bottom: *one duck feather (for buoyancy).*",
        "@you Morwen. Why is there a duck feather in this?",
        "@morwen:surprised For buoyancy! So she doesn't sink! On land! ...Oh. Oh, land doesn't need buoyancy, does it.",
        "She fishes the feather out of the cauldron she has, for some reason, brought to the pier. The potion turns a lovely clear blue. Coralie drinks it, shimmers, and stands up on the dock on two wobbly legs. She doesn't quack once.",
        "@coralie:happy MORWEN, YOU'RE A GENIUS!",
        "@morwen:blush I'm really not. They are. I'd have given you a duck tendency for life.",
        "The three of you spend the afternoon walking around the market. Coralie buys forty forks.",
      ],
      affTo: { morwen: 5, coralie: 5 },
      end: true,
    },
    quack: {
      text: [
        "Coralie gulps the potion. She shimmers. She stands up on two legs on the pier, delighted.",
        "@coralie:happy I have LEGS again! Thank you, Mor— *QUACK.*",
        "She claps her hands over her mouth. Morwen winces.",
        "@coralie:surprised QUACK. Oh no. Quack. It's — QUACK — kind of fun actually — QUACK —",
        "You take her dancing anyway. She quacks every time she spins. By the end of the evening, half the dancers at the Tipsy Wyvern are quacking with her in solidarity.",
        "@morwen:happy That's... honestly better than the potion working.",
      ],
      affTo: { morwen: 3, coralie: 3 },
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Mira & Hikari */
  xover('x_mira_hikari', ['mira', 'hikari'], { loc: 'guild', slots: [0] }, {
    start: {
      text: [
        "The Guild is gathered around the reception desk, where Hikari is standing on a chair, pointing at Mira.",
        "@hikari:angry I just need to see my STATUS! My stats! My skills! My level! Every guild has a crystal ball that shows your stats!",
        "@mira:angry We have a *form.* Form 12-B. Self-Reported Capability Assessment. You fill it out. In ink.",
        "@hikari That's not the same! A form can't tell me if I have a hidden skill!",
        "@mira Yes it can! Section seven! \"Hidden Skills (Please Specify)\"! *Read the form!*",
        "They both look at you, for very different reasons.",
      ],
      choices: [
        { text: "Help Hikari fill out the form properly.", go: "form", affTo: { mira: 5, hikari: 3 } },
        { text: "\"Mira, couldn't you just... make her a status card?\" [Charm check 2]", check: { stat: 'charm', dc: 2 }, pass: "card", fail: "rules" },
      ],
    },
    form: {
      text: [
        "You sit down with Hikari and go through Form 12-B together. Section seven, Hidden Skills: she writes *\"probably something cool.\"* Section twelve, Weaknesses: *\"none (yet).\"*",
        "Mira reads it, sighs a long-suffering sigh, and stamps it APPROVED.",
        "@mira:smug There. Your status. In *writing.* Stamped. Sealed. Happy?",
        "@hikari:happy It's... it's a status window. A physical status window. *Mira, this is beautiful.*",
        "Hikari carries it everywhere afterwards. Mira pretends to be annoyed. She's clearly very proud.",
      ],
      end: true,
    },
    card: {
      text: [
        "@you She just wants to see her progress, Mira. You're the best record-keeper in the kingdom. If anyone could do it...",
        "Mira flushes at the compliment.",
        "@mira:blush I — well — I suppose I *could* design a supplementary card. With numbers. Updated monthly.",
        "She spends her entire lunch break designing it. It's gorgeous: hand-lettered, color-coded, with a little star for every completed quest. She hands it to Hikari without looking at her.",
        "@hikari:happy STATUS OPEN!",
        "She flips the card open. It works. Hikari bursts into tears and hugs Mira across the desk. Mira yells at her to let go. She doesn't push her away.",
      ],
      affTo: { mira: 5, hikari: 6 },
      end: true,
    },
    rules: {
      text: [
        "@mira:angry A *status card?* That's not in the Guild Code! There's no regulation for status cards!",
        "@hikari:smug Then write one!",
        "@mira I'm not writing a whole new *regulation* for —",
        "They argue for an hour. By the end of it, there is a new regulation. Mira wrote it. Hikari is very smug. Mira is very, very tired.",
      ],
      affTo: { mira: 2, hikari: 2 },
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Aurelia & Rosalind */
  xover('x_aurelia_rosalind', ['aurelia', 'rosalind'], { loc: 'tavern', slots: [2] }, {
    start: {
      text: [
        "The Tipsy Wyvern goes silent as Lady Rosalind Ashcroft sweeps in through the door, drills bouncing, fan snapping open.",
        "@rosalind:smug Ohoho! I've been told this is the place where common people go to be *common.* I wish to observe them.",
        "She snaps her fingers at the nearest barmaid. It's Aura. Aurelia. They look at each other.",
        "Rosalind's fan freezes mid-flutter. Her eyes go very wide.",
        "@rosalind:surprised ...*Aurelia?*",
        "@aurelia:surprised — *Aura!* My name is Aura! Common barmaid! Very common! Can I get you an ale, m'lady?",
        "Rosalind looks at the apron. At the flour on Aurelia's nose. At the six tankards wobbling on her tray. Then she looks at you. Aurelia is looking at you too, desperately.",
      ],
      choices: [
        { text: "Quietly ask Rosalind to keep the secret.", go: "secret", affTo: { aurelia: 5, rosalind: 3 } },
        { text: "\"You two know each other?\" [Charm check 3]", check: { stat: 'charm', dc: 3 }, pass: "friends", fail: "secret" },
      ],
    },
    secret: {
      text: [
        "You lean over and murmur to Rosalind.",
        "@you She's happy here. Please don't tell anyone.",
        "Rosalind's fan goes still. For once, even her drills stop bouncing. Then she snaps the fan shut and raises her voice.",
        "@rosalind:smug Ohoho! What a *dreadful* barmaid! I've never seen her before in my life! One ale, girl, and be quick about it!",
        "Aurelia's shoulders sag with relief. When she brings the ale, Rosalind tips her a gold coin and a very small, very sincere wink.",
      ],
      end: true,
    },
    friends: {
      text: [
        "Rosalind lowers her fan.",
        "@rosalind:sad We were girls at court together. Before the engagement. Before everything. She was the only one who ever laughed at my jokes.",
        "@aurelia:happy You were the only one who ever *told* jokes. Everyone else talked about tariffs.",
        "There's a pause. Then Aurelia sets down her tray, and Rosalind closes her fan, and the princess and the villainess hug in the middle of the tavern while the regulars stare.",
        "@rosalind:happy I won't tell a soul, you ridiculous girl. But you're going to tell me *everything.* Starting with that apron. It's inside out.",
        "They talk until closing. Bettina gives them a free bottle of wine and wipes her eyes with a bar towel.",
      ],
      affTo: { aurelia: 6, rosalind: 6 },
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Ignivara & Hilde */
  xover('x_ignivara_hilde', ['ignivara', 'hilde'], { loc: 'artisan', slots: [0, 1] }, {
    start: {
      text: [
        "There's smoke pouring out of the Stonebrew Forge. Not the usual smoke. *Red* smoke.",
        "Inside, Ignivara is perched on the anvil in human form, breathing a steady jet of fire onto the coals, while Hilde stands with her arms crossed and a hammer in one hand.",
        "@ignivara:smug I want a crown. Solid gold. Rubies. Big rubies. The biggest crown ever made. I'll provide the fire, obviously.",
        "@hilde:smug And I'll provide the *skill*, which is the expensive part. Five hundred gold.",
        "@ignivara:angry FIVE HUNDRED? I could *melt* you for five hundred!",
        "@hilde Melt me and you'll get no crown. Five hundred. Dwarven rates.",
        "They both glare at you.",
        "@ignivara Mortal! Tell her I'm worth a discount!",
      ],
      choices: [
        { text: "Negotiate a deal: dragon fire for a discount. [Wits check 3]", check: { stat: 'wits', dc: 3 }, pass: "deal", fail: "smoke" },
        { text: "\"Pay the dwarf, Ignivara. Good work costs gold.\"", go: "pay", affTo: { hilde: 6, ignivara: -2 } },
        { text: "\"She's a dragon, Hilde. Give her a discount.\"", go: "discount", affTo: { ignivara: 6, hilde: -2 } },
      ],
    },
    deal: {
      text: [
        "@you Hilde, how much does it cost you to keep that forge at full heat for a week?",
        "@hilde:neutral ...Coal, bellows, labor. Hundred and fifty gold, give or take.",
        "@you And Ignivara can heat it hotter than anything in the kingdom for free. So: she heats the forge for a week, you get free fuel, and the crown costs three-fifty instead of five hundred.",
        "A long pause. The dragon and the dwarf look at each other.",
        "@ignivara:happy ...That's a good deal for *me.*",
        "@hilde:happy That's a good deal for *me.*",
        "They shake hands. Ignivara's hand is hot enough to scorch Hilde's glove. Hilde doesn't flinch. They respect each other immediately.",
        "The crown is magnificent. Hilde also uses a week of dragonfire to forge the finest blades of her career. Both of them think they won.",
      ],
      affTo: { ignivara: 5, hilde: 5 },
      end: true,
    },
    smoke: {
      text: [
        "You try to negotiate. You get confused about fuel costs, then dragon fire rates, then whether rubies count as an ingredient. Ignivara gets frustrated and sneezes. The forge explodes in a column of crimson flame.",
        "When the smoke clears, you're all coated in soot.",
        "@hilde:angry ...Four hundred. And you're paying for the roof.",
        "@ignivara:sad ...Fine.",
      ],
      affTo: { ignivara: 2, hilde: 2 },
      end: true,
    },
    pay: {
      text: [
        "Ignivara gasps as if mortally wounded.",
        "@ignivara:surprised You — *side with the dwarf?* Against your dragon?",
        "But she pays. It physically pains her to count out the coins. Hilde gives you a slow, approving grin.",
        "@hilde:happy Knew you had good sense. Fair price for fair work.",
      ],
      end: true,
    },
    discount: {
      text: [
        "Hilde scowls. Ignivara preens, smoke curling from her nose.",
        "@ignivara:smug You see? My mortal knows my value.",
        "@hilde:angry Your mortal knows nothing about *metallurgy.* Fine. Four-fifty. And I'm not polishing it.",
      ],
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Malzahra & Hikari */
  xover('x_malzahra_hikari', ['malzahra', 'hikari'], { loc: 'watchtower', slots: [2], day: 11 }, {
    start: {
      text: [
        "You're climbing the stairs of the Old Watchtower when you hear a voice from above, echoing with enormous drama:",
        "@hikari:smug DEMON LORD! I, HIKARI HOSHINO, CHOSEN HERO FROM ANOTHER WORLD, HAVE COME TO DEFEAT YOU!",
        "You reach the top. Hikari is standing in the doorway with her dented sword raised. Malzahra has risen from her crate-throne, cape billowing — an imp behind her fanning it frantically — and her face is lit up with pure joy.",
        "@malzahra:happy A HERO! A *real* hero! With a *declaration!* Oh, Gnarlbit, *look!* She said \"Demon Lord\"! Nobody says \"Demon Lord\" anymore!",
        "@gnarlbit It's \"Dread Queen,\" Your Dreadness.",
        "@malzahra I DON'T CARE, GNARLBIT, SHE HAS A *SWORD.*",
        "Hikari spots you and stage-whispers out of the side of her mouth:",
        "@hikari:happy {name}! This is the final boss! We're doing it! The climax arc!",
      ],
      choices: [
        { text: "Officiate a proper duel. Hero vs. Dread Queen.", go: "duel", affTo: { malzahra: 4, hikari: 4 } },
        { text: "Point out that they'd probably get along. [Charm check 3]", check: { stat: 'charm', dc: 3 }, pass: "friends", fail: "duel" },
      ],
    },
    duel: {
      text: [
        "The duel is the most theatrical thing you have ever witnessed. Malzahra monologues for four minutes. Hikari counter-monologues for five. They clash swords. Malzahra does her backflip. Hikari shouts \"ULTIMATE HEAVENLY SLASH!\" and misses entirely.",
        "Malzahra lets her win. Very obviously. She collapses dramatically onto her crate-throne.",
        "@malzahra:sad Defeated! By the Chosen Hero! The Underrealm will speak of this day for a thousand years!",
        "@hikari:surprised I... I WON? I DEFEATED THE DEMON LORD?",
        "@malzahra:happy You did! Now we must have tea. It is tradition after a defeat. The tea is terrible.",
        "They drink the terrible tea together and compare notes on dramatic poses until midnight.",
      ],
      end: true,
    },
    friends: {
      text: [
        "@you Before anyone gets slashed: Malzahra, Hikari has wanted to fight a real Demon Lord her whole life. And Hikari, Malzahra has waited a thousand years for a real hero to give a real speech.",
        "@you You two might be each other's dream come true.",
        "They look at each other. Hikari slowly lowers her sword. Malzahra slowly lowers her cape. The imp stops fanning.",
        "@hikari:blush ...Do you want to practice dramatic entrances together?",
        "@malzahra:happy *Do I?!*",
        "By the end of the night they've choreographed a full twelve-minute battle sequence with lighting cues. They perform it in the town square the following week. It gets a standing ovation, and the Mayor offers them a summer residency.",
      ],
      affTo: { malzahra: 6, hikari: 6 },
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Shade & Kit */
  xover('x_shade_kit', ['shade', 'kit'], { loc: 'square', slots: [0] }, {
    start: {
      text: [
        "Two shadows are moving across the rooftops above the square. One is grey and silent. The other is pink and giggling.",
        "Kit drops down onto the fountain's edge beside you, panting, holding a stolen purse.",
        "@kit:surprised Hide me! The scary quiet one is chasing me! I didn't even take anything important! It was just a — eep —",
        "Shade lands silently on Kit's other side.",
        "@shade Report: that purse belongs to a widow on Baker's Lane. Return it. Now.",
        "@kit:angry It was an *accident!* It fell into my hand! Repeatedly!",
        "@shade:smug I have observed you for nine days. You have stolen forty-one items and returned thirty-nine of them anonymously. Explain the other two.",
        "Kit goes pink.",
        "@kit:blush ...They were *really* shiny.",
      ],
      choices: [
        { text: "\"Kit, give it back.\"", go: "back", affTo: { shade: 5, kit: 2 } },
        { text: "Suggest they team up instead. [Wits check 2]", check: { stat: 'wits', dc: 2 }, pass: "team", fail: "race" },
      ],
    },
    back: {
      text: [
        "Kit sighs dramatically and hands over the purse.",
        "@kit:sad Fiiiine. But only because {name} asked.",
        "Shade takes it and studies Kit with her flat lavender eyes.",
        "@shade:neutral ...You return most of what you take. To people who need it. Correct?",
        "@kit Maybe. So what?",
        "@shade Nothing. Noted.",
        "Later that week, the orphanage at the old mill receives a very large anonymous donation, in coins sorted precisely by denomination.",
      ],
      end: true,
    },
    team: {
      text: [
        "@you Shade, you've been watching Kit for nine days. You know she's a thief who robs crooks and gives it away. Kit, you know Shade can find anyone in this town.",
        "@you The tax collector's strongroom on Wendel Street is full of fines nobody in this town ever owed.",
        "Shade and Kit look at each other. Kit's tail begins to swish. Shade's eyes narrow by one exact degree.",
        "@kit:happy ...Heist?",
        "@shade:smug ...Heist.",
        "The strongroom is emptied that night, so cleanly no one hears a thing. Every coin finds its way back to its rightful owner by morning. Kit is unbearably smug about it. Shade allows herself one very small smile.",
      ],
      affTo: { shade: 5, kit: 6 },
      end: true,
    },
    race: {
      text: [
        "@you Why don't you settle it with a race? First one to the clocktower keeps — ",
        "They're gone before you finish the sentence. Over the rooftops, across the market, up the clocktower. Shade wins by half a second. Kit claims she let her win. Shade says, flatly, \"You did not.\"",
        "They come back arguing about it. They're still arguing at sunset. You get the feeling they're enjoying it.",
      ],
      affTo: { shade: 2, kit: 2 },
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Lilette & Amorette */
  xover('x_lilette_amorette', ['lilette', 'amorette'], { loc: 'temple', slots: [2], day: 15 }, {
    start: {
      text: [
        "There's a small, panicked shriek from inside the temple. Lilette is hopping from foot to foot just inside the doors, little puffs of smoke rising from her shoes.",
        "@lilette:surprised HOLY GROUND — HOLY GROUND — ow ow ow, it's like walking on a hot stove —",
        "Amorette is sitting on the altar steps with her popcorn, watching with great interest.",
        "@amorette:smug A succubus in my temple. Now *this* is a plot development. Why are you here, little demon?",
        "@lilette:blush I — I wanted to ask the Goddess of Love for seduction tips! I thought you'd be an expert! I didn't think about the *floor!*",
        "Amorette's golden eyes light up.",
        "@amorette:happy Oh, you *sweet* thing. Come here. — No, wait, the floor. {name}, darling, carry her, would you?",
      ],
      choices: [
        { text: "Pick Lilette up and carry her to the altar steps.", go: "carry", affTo: { lilette: 5, amorette: 3 } },
        { text: "Ask Amorette to bless the floor safe for her instead. [Charm check 3]", check: { stat: 'charm', dc: 3 }, pass: "bless", fail: "carry" },
      ],
    },
    carry: {
      text: [
        "You scoop Lilette up. She squeaks, then glows faintly pink, then hides her face in your shoulder.",
        "@lilette:blush This is so embarrassing. This is so — oh, you smell nice — this is so *embarrassing* —",
        "You set her down on the altar steps beside Amorette, who hands her the popcorn bowl.",
        "@amorette:smug Lesson one: the best seduction is being carried across a holy floor by someone who doesn't mind. You've already passed. Well done.",
        "They talk until midnight. Lilette fills four pages of her notebook. Every page has your name in the margins.",
      ],
      end: true,
    },
    bless: {
      text: [
        "@you You're the goddess. Can't you make an exception for her?",
        "Amorette tilts her head, considering. Then she snaps her fingers. A path of soft pink light unfurls across the temple floor, right to Lilette's feet.",
        "@amorette:happy There. Love is always welcome in my house. Even the kind with horns.",
        "Lilette walks the path slowly, wonderingly, unhurt. She sits down beside the goddess with shining eyes.",
        "@lilette:happy Nobody's ever *welcomed* me anywhere holy before.",
        "@amorette:smug Then they were doing it wrong, darling. Now. Seduction. Lesson one: never trip over your own tail. Lesson two: if you do trip, make sure it's into someone's arms.",
      ],
      affTo: { lilette: 6, amorette: 5 },
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Scarlett & Coralie */
  xover('x_scarlett_coralie', ['scarlett', 'coralie'], { loc: 'docks', slots: [0, 1], day: 6 }, {
    start: {
      text: [
        "There's shouting from the deck of the *Crimson Tide.* Half the crew is leaning over the rail, pointing at the water. Bones is clutching a harpoon.",
        "@crew MERMAID! Off the port bow! Bad luck, Cap'n! Bad luck!",
        "Coralie is bobbing in the water beside the ship, waving up at the crew with enormous delight.",
        "@coralie:happy HELLO! Is this a SHIP? A real one? Can I come aboard? What's that pointy thing? Is it a giant fork?",
        "Scarlett strides to the rail, takes one look, and grabs the harpoon out of Bones's hands.",
        "@scarlett:angry Nobody's harpooning anybody on my ship. Mermaids aren't bad luck. *Sailors* are bad luck.",
        "She spots you on the dock.",
        "@scarlett:happy {name}! You know this one?",
      ],
      choices: [
        { text: "\"She's a friend. Let her see the ship.\"", go: "tour", affTo: { coralie: 5, scarlett: 4 } },
        { text: "Help Coralie aboard with a rope and pulley. [Might check 2]", check: { stat: 'might', dc: 2 }, pass: "pulley", fail: "splash" },
      ],
    },
    tour: {
      text: [
        "Scarlett lowers a bucket on a rope. Coralie climbs in. The whole crew hauls her up onto the deck, where she sits in a barrel of seawater and asks four hundred questions.",
        "@coralie:surprised What's this? What's that? Why is the flag a *skull?* Does the skull *like* being a flag?",
        "Scarlett answers every single question with infinite patience and a growing grin.",
        "@scarlett:happy You know, I've sailed every sea there is and never once got to talk to a mermaid. You lot always swim off.",
        "@coralie:happy Because Daddy says pirates are scary! You're not scary! You're *fun!*",
        "By evening Coralie has been made an honorary member of the crew, with a tiny pirate hat. Bones carves her a wooden fork.",
      ],
      end: true,
    },
    pulley: {
      text: [
        "You rig a rope through the ship's pulley and haul Coralie up onto the deck in one smooth pull. The crew cheers. Scarlett slaps you on the back.",
        "@scarlett:happy Strong arms! Strong *and* friends with mermaids! You're wasted on dry land, love.",
        "Coralie gets the full tour. The crew teaches her a shanty. She teaches them a mermaid song so beautiful that three of the toughest pirates on the Sapphire Sea start crying into their rum.",
        "@scarlett:blush ...We're putting that one in the songbook.",
      ],
      affTo: { coralie: 5, scarlett: 6 },
      end: true,
    },
    splash: {
      text: [
        "You grab the rope and heave. The pulley jams. The rope snaps. You fall off the dock into the harbor, right next to Coralie.",
        "@coralie:happy OH! You came swimming! That's so nice of you!",
        "Scarlett laughs so hard she has to sit down on a barrel. Eventually the crew fishes you both out with a net. Coralie thinks it's the best day of her life.",
      ],
      affTo: { coralie: 2, scarlett: 2 },
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Ophelia & Valeria */
  xover('x_ophelia_valeria', ['ophelia', 'valeria'], { loc: 'manor', slots: [2], day: 6 }, {
    start: {
      text: [
        "Hollowmere Manor is lit with ghostly candles tonight, and there's a voice in the dusty parlor that isn't Ophelia's.",
        "@valeria:smug — and I said to the Duke, darling, if you're going to be bitten, at least have the decency to *wash your neck.*",
        "@ophelia:happy *Oh!* You didn't!",
        "You peer in. Countess Valeria is seated on a dust-sheeted sofa with a goblet of something dark red. Ophelia is floating opposite her, clutching a ghostly teacup, giggling.",
        "They both turn to look at you.",
        "@valeria Ah. The living one. Ophelia and I go back. Two hundred years, isn't it, darling? I came to her debut. Before the... stairs.",
        "@ophelia:smug Valeria visits about once a century to complain about her neighbors. She's overdue. We're *undead tea club.* It's very exclusive. You have a pulse, you see.",
      ],
      choices: [
        { text: "\"Can I join? I'll bring cake.\"", go: "join", affTo: { ophelia: 4, valeria: 4 } },
        { text: "Ask Valeria what Ophelia was like before. [Charm check 3]", check: { stat: 'charm', dc: 3 }, pass: "before", fail: "join" },
      ],
    },
    join: {
      text: [
        "@valeria:smug Cake? For the *undead?* Neither of us can eat, sweetheart.",
        "@ophelia:sad ...I'd like to *smell* the cake, though. I haven't smelled cake in two hundred years.",
        "So you bring the cake the next evening, and the three of you sit in the dusty parlor while Ophelia smells it rapturously and Valeria tells scandalous stories about the nobility of 1820, and the old manor feels less like a tomb than it has in centuries.",
      ],
      end: true,
    },
    before: {
      text: [
        "Valeria swirls her goblet, smiling faintly.",
        "@valeria:happy She was the most dreadful debutante in the county. She talked too loudly, laughed at the wrong moments, and quoted gothic poetry at the dinner table. Everyone else found her exhausting.",
        "@valeria:neutral I found her *wonderful.* She was the only one at that ball who wasn't afraid of me.",
        "Ophelia has gone very quiet. Her ghostly form flickers softly.",
        "@ophelia:surprised You... you never told me that.",
        "@valeria:smug You never asked, darling. You were too busy waiting by the stairs.",
        "Ophelia floats over and puts her translucent arms around the Countess. Valeria rolls her eyes, but pats her ghostly hand.",
      ],
      affTo: { ophelia: 6, valeria: 5 },
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Seven & Gloria */
  xover('x_seven_gloria', ['seven', 'gloria'], { loc: 'sewers', slots: [0, 1] }, {
    start: {
      text: [
        "Deep in the sewers, you find Seven standing very, very still on a narrow ledge, holding a brass measuring device. Gloria is rising out of the water directly in front of her, beaming.",
        "@gloria:happy A visitor! A shiny visitor! Can I hug you? I give the BEST hugs!",
        "@seven Warning. I am measuring water quality for the Professor's records. I am also composed of brass and springs. Contact with liquid will result in rust, short-circuit and spontaneous yodeling.",
        "@gloria:sad Oh! Oh no. I'm *mostly* liquid. That's so sad. I've never met someone I couldn't hug.",
        "Gloria's face falls. Seven's eyes flicker uncertainly.",
        "@seven:sad ...Observation: you appear to be experiencing sadness. I appear to be experiencing guilt. This is very inefficient.",
      ],
      choices: [
        { text: "Find a way for them to hug safely. [Wits check 3]", check: { stat: 'wits', dc: 3 }, pass: "hug", fail: "glove" },
        { text: "\"Seven, Gloria's the reason the water's so clean.\"", go: "clean", affTo: { gloria: 5, seven: 3 } },
      ],
    },
    hug: {
      text: [
        "@you Gloria, can you make your surface dry? Like a skin? You absorb dirt, so you should be able to absorb your own surface moisture too.",
        "Gloria scrunches up her face in concentration. Slowly her outer layer turns matte and smooth, like soft green rubber.",
        "@gloria Like this?",
        "Seven tests it with one cautious brass fingertip. Dry.",
        "@seven:surprised ...Affirmative. Proceed with hug.",
        "Gloria wraps her up gently. Seven goes perfectly still. Then, very slowly, her arms come up and hug back.",
        "@seven:blush Observation: this is... pleasant. Very pleasant. Gloria, would you permit me to study you? For science. And for more hugs.",
        "@gloria:happy *BLOOP!*",
      ],
      affTo: { seven: 6, gloria: 6 },
      end: true,
    },
    glove: {
      text: [
        "You can't think of a clever solution, so you lend Seven your gloves and your coat. She puts them on very seriously. Gloria hugs her through three layers of wool.",
        "@seven:happy ...Observation: this is very warm and muffled. Observation: I do not mind.",
        "@gloria:happy It's a *hug!* It counts!",
      ],
      affTo: { seven: 2, gloria: 3 },
      end: true,
    },
    clean: {
      text: [
        "Seven looks at her measuring device. Then at Gloria. Then at the device again.",
        "@seven:surprised ...The water quality in this sewer is ninety-four percent purer than any other recorded municipal system in the kingdom. I had no explanation.",
        "@seven You are the explanation. You are the most efficient waste-processing system I have ever encountered.",
        "@gloria:surprised ...Is that a compliment?",
        "@seven:happy It is the *highest* compliment.",
        "Gloria glows so brightly the whole tunnel lights up.",
      ],
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Marigold & Celestine */
  xover('x_marigold_celestine', ['marigold', 'celestine'], { loc: 'temple', slots: [1], day: 6 }, {
    start: {
      text: [
        "In a quiet corner of the temple, Marigold is sitting across from Sister Celestine, twisting a daisy between her fingers. Celestine is listening with gentle attention.",
        "@marigold:happy — and I only followed them *twice* this week, which is down from eleven, and I didn't sharpen anything when they talked to the baker, even though he *laughed* at their joke, and it wasn't even a *good* joke —",
        "@celestine:happy That's wonderful progress, Marigold. Truly.",
        "They both notice you at the same time. Marigold goes bright red. Celestine smiles serenely.",
        "@marigold:blush {name}! I — this is — I'm not *here*, I'm — this isn't what it — ♡",
        "@celestine Marigold comes to talk with me every week. About her feelings. She's doing very well.",
      ],
      choices: [
        { text: "\"I'm proud of you, Marigold.\"", go: "proud", affTo: { marigold: 6, celestine: 3 } },
        { text: "Sit down and listen too, if she'll let you. [Charm check 2]", check: { stat: 'charm', dc: 2 }, pass: "listen", fail: "proud" },
      ],
    },
    proud: {
      text: [
        "Marigold's daisy stops twisting. Her eyes fill.",
        "@marigold:surprised You're... proud? Of *this?* Of the weird part?",
        "@you Of you working on it. That's the bravest thing anyone can do.",
        "She makes a small sound and hugs her daisy to her chest. Celestine pats her hand.",
        "@celestine You see? I told you. The people who love us want to see us *grow.*",
      ],
      end: true,
    },
    listen: {
      text: [
        "You sit down quietly beside them. Marigold hesitates, then keeps talking, haltingly at first, then more easily. About her parents. About being afraid of being left. About how much easier it is now, some days.",
        "When she's done, Celestine leads you both in a short, simple prayer. It isn't about anything holy. It's just about being kind to yourself.",
        "Afterward, Marigold gives Celestine a single white lily.",
        "@marigold:blush White lilies mean \"thank you for seeing me.\" ♡ I've never given anyone one before.",
        "Celestine tucks it behind her ear and wears it all day.",
      ],
      affTo: { marigold: 6, celestine: 5 },
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Bettina & Brakka */
  xover('x_bettina_brakka', ['bettina', 'brakka'], { loc: 'tavern', slots: [2] }, {
    start: {
      text: [
        "The Tipsy Wyvern is roaring. In the middle of the room, a table has been cleared. Brakka is sitting at one side with her elbow on the table, flexing.",
        "@brakka:happy ARM-WRESTLING! Brakka challenges ANYONE! Winner drinks free for a month!",
        "Nobody moves. Brakka has broken four tables this year.",
        "Then Madame Bettina sets down her bar towel, rolls up one sleeve, and sits down across from her.",
        "@bettina:smug Ara, ara. A month of free drinks? From *my* bar? Well, I can't have that, sweetie.",
        "The whole tavern gasps. Brakka grins, delighted.",
        "@brakka Bar-lady wants to fight Brakka? Brakka will be gentle!",
        "@bettina Oh, please don't be.",
        "Everyone looks at you to call the start.",
      ],
      choices: [
        { text: "Call it fair and square.", go: "fair", affTo: { brakka: 3, bettina: 3 } },
        { text: "Notice Bettina's small smile. She's planning something. [Wits check 2]", check: { stat: 'wits', dc: 2 }, pass: "trick", fail: "fair" },
      ],
    },
    fair: {
      text: [
        "@you Three, two, one... *go!*",
        "Brakka pushes. Bettina's arm doesn't move. Brakka pushes harder. Bettina's arm still doesn't move. Bettina is calmly sipping a glass of wine with her other hand.",
        "@bettina:smug Twenty years of hauling ale kegs up from the cellar, sweetie. Every day. Two at a time.",
        "*Slam.* Brakka's hand hits the table. The table survives. Barely. The tavern explodes.",
        "Brakka stares at her hand in astonishment, then roars with laughter and bear-hugs Bettina across the table.",
        "@brakka:happy BAR-LADY IS STRONG! Brakka has new best friend!",
      ],
      end: true,
    },
    trick: {
      text: [
        "You catch Bettina's eye. There's a wicked glint there.",
        "@you Three, two, one — *go!*",
        "Just as Brakka starts to push, Bettina leans forward and murmurs something into her ear. You can't hear what. Brakka's face goes dark green — an orc blush — and her arm goes completely limp.",
        "*Slam.* Bettina wins.",
        "@brakka:blush That — that was *cheating!* Bar-lady said — Brakka cannot repeat what bar-lady said —",
        "@bettina:smug Twenty years behind a bar, sweetie. I know exactly what to say to make *anyone* lose concentration.",
        "Brakka laughs so hard she falls off her chair. Then she demands to know what Bettina says to *you.* Bettina just winks.",
      ],
      affTo: { bettina: 6, brakka: 5 },
      end: true,
    },
  });

  /* ================================================================== three-way crossovers */

  /* ------------------------------------------------------------------ Sesha & Coralie & Ignivara */
  xover('x_hot_water', ['sesha', 'coralie', 'ignivara'], { loc: 'bathhouse', slots: [1] }, {
    start: {
      text: [
        "The Steamwhistle Bathhouse is not steaming. It is not whistling. Old Pip, the boiler, has gone out with a sad little *tink*, and every pool in the place is going cold.",
        "Sesha is coiled around the last lukewarm pool like a draught excluder, spectacles fogged, moving at roughly the speed of a glacier with somewhere to be.",
        "@sesha:sad Oh, hello, dear. Sorry. I'm... a bit... slow. Cold-blooded. Give me... a moment. Or a season.",
        { if: 'sesha_spectacles', text: "You take her spectacles off, wipe them on your sleeve and slide them back on. She gives you a slow, grateful blink that takes about four seconds." },
        "Something splashes in the salt pool, the one fed straight from the harbor. A teal head pops up out of the inlet pipe.",
        "@coralie:happy I followed the pipe! It goes on for *ages!* {name}, is this the sea? It's a *tiny* sea! With *walls!* Is it a sea in jail?",
        "Then the front door bangs open, and a woman with red scales on her cheekbones strides in, already undoing the clasp of her cloak.",
        "@ignivara:smug I am told that in this establishment, one may lie in *hot water* and be *waited upon.* I have come to inspect it. Lead me to the hottest pool. I shall decide whether to buy the building.",
        "@sesha:surprised Oh! A dragon. A real one. Oh, *dear*, and Pip's out. Everything's cold. I'm so sorry, Your — Your Scaliness —",
        "@ignivara:angry *Cold?* You run a hot-water house without hot water? That is a *lake*, madam. You run a *lake.*",
        "She looks at the dead boiler. She looks at Sesha. She looks, thoughtfully, at her own fingernails, which have begun to glow.",
        "@ignivara:smug ...I could heat it. For a price.",
        "@coralie:surprised What's *heat?*",
      ],
      choices: [
        { text: "\"Gently, Ignivara. Like warming your hands on a cup. Show us how delicate a dragon can be.\" [Charm check 3]", check: { stat: 'charm', dc: 3 }, pass: "gentle", fail: "soup" },
        { text: "\"Name your price.\" Pay the dragon.", go: "pay", req: { gold: 10 }, affTo: { ignivara: 6, sesha: 3, coralie: 2 } },
        { text: "Wrap Sesha in every towel in the building and give her your coat.", go: "towels", affTo: { sesha: 6, coralie: 3, ignivara: -2 } },
      ],
    },
    gentle: {
      text: [
        "@you Anyone can boil a pool. Only a *really* powerful dragon could make it exactly right.",
        "Ignivara's chin goes up. Nobody has ever challenged her to be *subtle* before. She kneels at the edge of the big pool, purses her lips and breathes out a long, slow ribbon of gold that skims the water like a sigh.",
        "Steam curls up. The water goes clear and soft and gently, perfectly hot.",
        "Sesha pours herself in, all forty feet, one coil at a time.",
        "@sesha:blush Ahhhhhh. Oh. Oh, *yesss.* Yes. Sorry. *Yesss.*",
        "Coralie slides in after her, very carefully, then shrieks with joy.",
        "@coralie:happy It's *warm!* It's like being hugged by soup! Why doesn't the sea do this? I'm going to have *words* with Daddy!",
        "Ignivara stands at the edge with her arms crossed and smoke curling from one nostril, for exactly as long as her pride can bear. Then she sighs, unbuckles her boots, and steps in up to her shoulders. She makes exactly the same noise as everybody else. *Ahhhh.*",
        "@ignivara:blush ...Do not tell anyone I shared a pool. I have never shared anything. It is *my* warm water. I am merely *lending* it to the snake and the fish.",
        "@sesha:happy Everyone makes the same noise. Even dragons. I *knew* it.",
        "By closing time the three of them are asleep in a heap of coils, fins and smouldering red hair. You turn the lamps down on your way out.",
      ],
      affTo: { sesha: 5, coralie: 5, ignivara: 5 },
      end: true,
    },
    soup: {
      text: [
        "@you Just... gently, okay? A little puff.",
        "Ignivara takes a deep breath. A very deep breath. The deepest breath you have ever seen a person take, and you realize too late that she's offended you said *little.*",
        "*FWOOOM.*",
        "The pool boils. The salt pool boils. The *lobby* boils. The whole bathhouse vanishes into one enormous white cloud.",
        "@coralie:surprised IT'S SOUP! I'M IN SOUP! AM I THE SOUP?",
        "Coralie shoots back up the inlet pipe like a cork. Somewhere in the fog, Sesha lets out a long, blissful sigh.",
        "@sesha:happy Oh, this is *lovely.* Nobody move. I'm going to live in this cloud now.",
        "@ignivara:smug You see? *Hot water.* You're welcome. Do not say the other thing. I mean — say it. Say thank you. *Loudly.*",
        "Coralie comes back an hour later, when it's cooled, and announces that fog is a cloud you can walk around in, and that she forgives everyone.",
      ],
      affTo: { sesha: 3, coralie: 2, ignivara: 3 },
      end: true,
    },
    pay: {
      text: [
        "@ignivara:smug One gold coin per degree. And I shall know if you are counting the degrees *dishonestly.*",
        "You count out ten gold. She bites each coin, tucks them somewhere about her person and breathes a neat, precise jet of flame into Old Pip's firebox. The boiler wheezes, coughs, and starts to whistle.",
        "@sesha:blush Oh, Pip! Oh, you're *back!* Oh, dear, thank you, I'll pay you back, I'll fold you a swan, I'll fold you *fifty* swans —",
        "@ignivara:happy A paying customer and a satisfied vendor. This is how civilization should work.",
        "@coralie:sad ...Do I have to pay too? I only have forks.",
        "Ignivara looks at the fork. It is silver. It is shiny. She takes it, and Coralie gets in free.",
      ],
      gold: -10,
      end: true,
    },
    towels: {
      text: [
        "You raid the linen cupboard and come back with an armful of towels, which is about one-fortieth of what you need. You make several more trips. Coralie helps by bringing everything that looks soft, including a doormat and Grumbold's dressing gown.",
        "By the end, Sesha is a towel mountain with a face at the top. You put your coat around her shoulders last.",
        "@sesha:blush Oh. It's still warm from you. Oh, that's *nice.* That's the nicest thing.",
        "@ignivara:angry I offered to heat the entire *building!* And instead you choose *laundry?*",
        "@coralie:happy It's a nest! Sesha's a nest! Can I be in the nest?",
        "She can. So, eventually, can you. Ignivara stands outside the towel pile for a full minute with her arms folded, then climbs in too, muttering about inferior insulation.",
        "@ignivara:blush ...My feet were cold. That is the only reason. Do not *look* at me.",
      ],
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Vespera & Brunhild & Sigrun */
  xover('x_rival_rights', ['vespera', 'brunhild', 'sigrun'], { loc: 'arena', slots: [1], day: 6 }, {
    start: {
      text: [
        "There's a small, intense crowd at the edge of the training ground. In the middle of it, Vespera Thornquill and Dame Brunhild are standing nose to nose. Well, nose to breastplate. Vespera has gone up on her toes to make up the difference.",
        "@vespera:angry I have it *in writing.* Page one of the ledger. {name} is my Eternal Rival. Dated, witnessed, and initialled by a raven.",
        "@vespera_footnote MARKED.",
        "@brunhild:angry A *ledger.* A rivalry is not a matter of *paperwork*, scholar. It is a sacred bond of steel. Ever since I challenged {name} at the training ground, they have *smiled* at me. Not mockingly. *Fondly.* Nobody has ever smiled at me fondly! It is the deepest insult a knight can receive!",
        "@vespera:smug Well, *I* was beaten by them at a gargoyle riddle in zero point three seconds. Can you top zero point three?",
        "@brunhild:surprised ...I cannot top zero point three.",
        "The crowd parts, and Sigrun Stormbrand lands in the middle of the sand with a thunderclap that knocks three people over. Her wings are already fully spread with excitement.",
        "@sigrun:happy A CONTEST! For the right to *fight* someone! This is the most glorious thing I have heard all week! I shall referee! I am impartial! I want you ALL to suffer magnificently!",
        { if: 'sigrun_score', text: "@sigrun:smug And the prize is a rival with a Glory Score of four and a half. A *very* desirable rival. I have checked." },
        "@sigrun Three trials! Strength! Wits! And the most beautiful death speech!",
        "@brunhild:smug Tenet eighty-eight. *A knight shall always have a death speech prepared.* I have four. One for each season.",
        "@vespera:smug Mine has *footnotes.*",
        "All three of them turn to look at you.",
      ],
      choices: [
        { text: "\"Why choose? I can lose to both of you. On alternate days.\" [Charm check 3]", check: { stat: 'charm', dc: 3 }, pass: "both", fail: "speeches" },
        { text: "\"Vespera saw me first. She's my rival.\"", go: "vespera", affTo: { vespera: 6, brunhild: -3, sigrun: 2 } },
        { text: "\"I do smile at Brunhild. Fondly. That's a bond.\"", go: "brunhild", affTo: { brunhild: 6, vespera: -3, sigrun: 2 } },
      ],
    },
    both: {
      text: [
        "@you I'm not choosing. Vespera can beat me at anything with a number in it. Brunhild can beat me at anything with a sword in it. Everything else, I'll lose to whoever asks first.",
        "There is a pause while two very competitive people work out whether this is a win.",
        "@vespera:surprised A *shared* rivalry. Nobody's ever... I'll need a second column.",
        "@brunhild:blush A rival in common. Like a joint campaign. The Code is... silent on this. Which means it is *permitted.*",
        "Vespera rules a second column in her ledger and labels it *DAME B.* Brunhild signs it in her own blood, which turns out to be a small papercut from the ledger, and is very dignified about it.",
        "@sigrun:happy No trials? No deaths? And yet everybody *wins?*",
        "She thinks about this for so long that a pigeon lands on her helm.",
        "@sigrun:blush ...A nine. I do not understand it, but it is a nine.",
      ],
      affTo: { vespera: 5, brunhild: 5, sigrun: 4 },
      end: true,
    },
    speeches: {
      text: [
        "@you What if you just... shared me?",
        "@vespera:angry *Shared?* A rival isn't a *biscuit!*",
        "@brunhild:angry Unacceptable! We proceed to the trials! Valkyrie, the death speeches!",
        "Brunhild goes first. Her death speech lasts nine minutes and quotes all one hundred and twelve tenets in order. Vespera's lasts eleven, and halfway through she pauses to cite her sources.",
        "@sigrun:sad A six. And a six. Too many *citations.* Nobody has ever died gloriously with a bibliography.",
        "@vespera:surprised A *tie?*",
        "@brunhild:surprised *Inconclusive?* Again? *Kill me!*",
        "@sigrun:happy Ha! Not yet! I will tell you when!",
        "They storm off in opposite directions, then meet again at the arena gate, and leave together, arguing about whether a tie counts as half a win or two halves of a loss.",
      ],
      affTo: { vespera: 2, brunhild: 2, sigrun: 3 },
      end: true,
    },
    vespera: {
      text: [
        "Vespera turns to Brunhild with the face of a woman who has just won an argument with gravity.",
        "@vespera:happy *Thank* you. Footnote, the minutes!",
        "@vespera_footnote POINT.",
        "@brunhild:sad ...I see. Outranked by a raven.",
        "She draws herself up stiffly, turns to go, and pauses.",
        "@brunhild I remain available. For duelling. Any day. Should your scholar ever tire of you.",
        "@sigrun:smug Do not weep, knight! A rival is like a battle-axe. There are always more.",
      ],
      end: true,
    },
    brunhild: {
      text: [
        "Brunhild's face goes through pride, astonishment and something dangerously close to a giggle, which she suppresses so hard her helmet visor drops shut.",
        "@brunhild:blush You *admit* it. *Fondly.* Before witnesses. That is the most... the most *honorable* thing...",
        "@vespera:angry *Fondly?* A *bond?* I've kept a *ledger!* I've ruled the *margins!*",
        "She flips open the ledger, writes *{name}: -1* in very small furious handwriting, then underlines it three times.",
        "@vespera:sad ...You'll have to win it back. I'm warning you. I'm *extremely* hard to win back.",
        "@sigrun:happy Rivalry, heartbreak and a minus one! I have seen wars with less drama! A seven!",
      ],
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Sesha & Gloria & Malzahra */
  xover('x_screamed_at', ['sesha', 'gloria', 'malzahra'], { loc: 'bathhouse', slots: [2], day: 11 }, {
    start: {
      text: [
        "After closing, a chalkboard sign by the bathhouse door reads, in Sesha's careful, curly handwriting: *THE SOCIETY OF THE FREQUENTLY SCREAMED AT. Tea. Biscuits. No screaming, please.*",
        "In the warm back room there are three chairs, a teapot and a plate of biscuits. Sesha is coiled around two of the chairs. The third one has a puddle on it.",
        "The puddle says *bloop* and stands up.",
        "@gloria:happy Hiiii! I came up through the drain! Sesha's drains go *right* to my tunnels! I keep them *so* clean. I never knew whose they were!",
        "@sesha:happy And I never knew why my drains were the cleanest in town! We've been neighbors for *years*, dear, and we only met on Tuesday!",
        "Then the door bursts open, and in sweeps Malzahra, Dread Queen of the Underrealm, in full regalia. An imp follows her in, carrying a rolled-up diagram.",
        "@malzahra:happy GREETINGS, FELLOW TERRORS! I saw your sign! A secret society for creatures who make mortals *scream!* I have prepared a presentation! Gnarlbit, the chart!",
        "@sesha:surprised Oh! Oh, no, dear. We're the ones who get screamed *at.* It's a support group.",
        "Malzahra's cape slowly deflates.",
        "@malzahra:sad ...At? Screamed *at?* But nobody screams at me. A dozen of my imps raided the fountain, and the baker asked me to sign his apron.",
        "@gloria:surprised A lady hit me with a cabbage once.",
        "@malzahra:sad *Lucky.*",
        "All three of them look at you, the only person in the room with neither fangs, horns nor a goo-based skeleton.",
        "@sesha You're our first guest speaker, dear. What do *you* do, when people scream at you?",
      ],
      choices: [
        { text: "Make a speech: \"I've had tea with a lamia, a slime and a Dread Queen tonight. The scariest thing in here is the biscuits.\" [Charm check 2]", check: { stat: 'charm', dc: 2 }, pass: "speech", fail: "sit" },
        { text: "Stand up, look Malzahra in the eye, and scream at her. Properly.", go: "scream", affTo: { malzahra: 6, sesha: 2, gloria: 2 } },
      ],
    },
    speech: {
      text: [
        "@you I've been sitting here an hour. Nobody screamed. Gloria cleaned my teacup. Sesha folded my napkin into a swan. And Malzahra brought a *chart.*",
        "@you Honestly? The scariest thing in this room is these biscuits. Sesha, I think they're mostly gravel.",
        "Sesha claps a hand over her mouth. Gloria jiggles. Malzahra laughs: a real one, not the evil one, a big helpless honk that bounces off the tiles.",
        "@sesha:blush They *are* mostly gravel. Grumbold made them. Hsss-hehe!",
        "@gloria:happy I'll eat them! I'll eat anything! That's my whole thing!",
        "@malzahra:blush ...I have never been in a room where nobody was afraid of me and nobody was pretending. I do not know what to do with my arms.",
        "@sesha:happy You can have a biscuit with them, dear.",
        "By midnight the Society has a treasurer (Malzahra), a secretary (Sesha) and a Head of Biscuit Disposal (Gloria). The chalkboard outside has a new line, in dramatic violet letters: *Monsters of all kinds welcome. The Dread Queen will bring the cake.*",
      ],
      affTo: { sesha: 5, gloria: 5, malzahra: 5 },
      end: true,
    },
    sit: {
      text: [
        "@you Well, the important thing is to stay calm, and to —",
        "You sit down to deliver the rest of your wisdom. The chair you sit on is Gloria.",
        "@gloria:surprised *BLORP!*",
        "You scream. You don't mean to. It just comes out, very high and very long, and goes on rather longer than you'd like.",
        "There's a pause.",
        "@malzahra:surprised ...Oh.",
        "@sesha:happy Oh, *dear.* Welcome to the Society.",
        "@gloria:happy You get a badge! Sesha, make them a badge!",
        "Sesha makes you a badge out of a folded towel. Malzahra signs it. Gloria gives it a little shine. You are, it turns out, a very frequently screamed-at person now, mostly by yourself.",
      ],
      affTo: { sesha: 3, gloria: 3, malzahra: 3 },
      end: true,
    },
    scream: {
      text: [
        "You stand up. You take a deep breath. You look the Dread Queen of the Underrealm in the eye, and you scream. A real one. Long, ragged, terrified, with a little crack in the middle.",
        "Malzahra's hands fly to her chest. Her eyes fill with tears.",
        "@malzahra:happy *Oh.* Oh, that was *wonderful.* That was the best one in nine hundred years! Do it again!",
        "You do it again. Gloria joins in, which sounds like a kettle full of jelly. Then Sesha, with a long, hissing shriek that rattles the teacups.",
        "@sesha:blush Oh my. That felt *good.* I've never been on *this* side of one!",
        "@gloria:happy We're screaming! We're the screamers now! *Bloop!*",
        "The night watchman bursts in with a lantern, sees a lamia, a slime and the Dread Queen of the Underrealm all screaming at one mortal, and screams too.",
        "@malzahra:blush ...Everyone is screaming at once. I feel so *included.*",
      ],
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Rosalind & Aurelia & Thistle */
  xover('x_precedence', ['rosalind', 'aurelia', 'thistle'], { loc: 'noble', slots: [0] }, {
    start: {
      text: [
        "There is only one way into the white-rose walk of the Moonlit Gardens: a narrow arch in the hedge, wide enough for exactly one lady at a time. At this moment, three ladies are standing in front of it.",
        "@rosalind:smug Ohohoho! Stand aside. The heiress of House Ashcroft does not *queue.* The heiress of House Ashcroft has *never* queued. She would not know how to begin.",
        "A tiny figure in a leaf gown hovers up to Rosalind's eye level on four dragonfly wings.",
        "@thistle:smug How *sweet.* An heiress. I am the Queen of the Seelie Court. I outrank you by one crown, nine hundred years and the entire concept of hedges.",
        "@rosalind:angry A queen? Of a *shrubbery?*",
        "@thistle:angry Of *all* shrubbery. Mind your tone, or your curls will be full of beetles by noon.",
        "Standing slightly behind them, holding a basket of bread rolls, is Aura the barmaid, on her morning off. You can see her lips moving silently.",
        "@aurelia:surprised Well, *actually* — I mean, I'm only a humble barmaid — but I *believe* that under the Thornwood Accords a fairy monarch has precedence equal to a reigning sovereign, but only on unpaved ground, and this is gravel, and gravel counts as paved in the Western Duchies but not here, unless it's raked, which it is, so technically the Lady Ashcroft goes *second*, after the — after the —",
        "She stops. Both the villainess and the fairy queen are staring at her.",
        "@thistle:surprised ...How does a barmaid know the Thornwood Accords?",
        "Thistle flies closer and sniffs, delicately.",
        "@thistle:smug You smell of *crown.* Not a costume one. A real one, kept in a sock at the bottom of a drawer.",
        "@aurelia:blush I smell of *bread rolls!*",
        "Rosalind's fan snaps open in front of her face, but you catch her eyes over the top of it, flicking from Aurelia to you. *Help her.*",
      ],
      choices: [
        { text: "Invent a garden rule on the spot: smallest goes first, so nobody steps on her. [Wits check 2]", check: { stat: 'wits', dc: 2 }, pass: "rule", fail: "wheelbarrow" },
        { text: "\"Aura reads a lot. Constantly. It's a problem.\"", go: "reads", affTo: { aurelia: 5, rosalind: 3, thistle: 2 } },
      ],
    },
    rule: {
      text: [
        "@you Actually, the Moonlit Gardens have their own rule. Smallest goes first, so nobody gets trodden on. Then the tallest, to hold the branches. Then whoever's carrying bread.",
        "Thistle's wings stop mid-flick.",
        "@thistle:happy *Smallest first.* Oh, that's a *good* rule. Who made it?",
        "@you The gardener. Years ago. There used to be a sign.",
        "@thistle:smug There is *never* a sign.",
        "But she's already sailing through the arch with her nose in the air. Rosalind follows, holding the rose branches aside with her fan, very graciously, because she is undeniably the tallest and wants everyone to see it.",
        "@rosalind:smug Ohoho! The tallest, naturally. Height *is* a kind of rank.",
        "Aurelia comes last, beaming, swinging her basket.",
        "@aurelia:happy Last! I've never gone *last* anywhere! It's wonderful! You can see where everyone's been!",
        "At the far end of the walk, Thistle settles on a rose and looks back at you with narrowed violet eyes.",
        "@thistle:smug A rule nobody wrote, invented to protect a secret nobody's admitting to. You'd make a very respectable fairy, giant. I shan't say the T-word. But I *thought* it, loudly.",
      ],
      affTo: { rosalind: 5, aurelia: 6, thistle: 5 },
      end: true,
    },
    wheelbarrow: {
      text: [
        "@you There's a rule, actually. In these gardens. Something about... height. Or bread. Or —",
        "@rosalind:angry Height! Clearly height!",
        "@thistle:angry *Age!* I'm older than the gravel!",
        "@aurelia:sad Strictly speaking, under the Accords —",
        "They argue for so long that the gardener wakes up in his wheelbarrow, gets out, picks it up and trundles it straight through the arch between them.",
        "All three ladies stare after him.",
        "@aurelia:happy ...Well, I suppose that settles it. The gardener outranks everyone.",
        "@thistle:smug As it should be. He prunes my roses very respectfully. I shall knight him tonight. He'll be terrified.",
      ],
      affTo: { rosalind: 2, aurelia: 3, thistle: 2 },
      end: true,
    },
    reads: {
      text: [
        "@you Aura reads a lot. Treaties, mostly. She can't help it. It's a problem.",
        "@rosalind:smug Ohohoho! Yes! The girl reads *everything!* Menus! Tax law! The backs of jam jars! It's practically a disease! Pay her no attention, Your Tininess.",
        "@aurelia:blush It's — yes — it's a dreadful affliction. I read a whole maritime code once, by accident. I thought it was a romance.",
        "Thistle looks from the barmaid to the villainess to you. Then she smiles, slowly and with far too many implications.",
        "@thistle:smug A secret! And you're *all* in on it. Oh, how delicious. Very well. I shan't pry. A fairy *collects* secrets; she doesn't *spend* them.",
        "She flies through the arch first anyway. Rosalind goes second, and holds the branch back for Aurelia without being asked.",
      ],
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Maud & Celestine & Ophelia */
  xover('x_exorcism', ['maud', 'celestine', 'ophelia'], { loc: 'manor', slots: [2], day: 6 }, {
    start: {
      text: [
        "Every candle in Hollowmere Manor is lit, and there's chalk on the parlor floor in a very large, very official circle.",
        "Sister Maud is standing in the middle of it with Mercy over her shoulder. Beside her, Sister Celestine is holding the Book of Rites in both trembling hands.",
        "@maud:happy {name}! Good timing, lamb! The neighbors sent a complaint to the Temple. Wailing. Every night, for two hundred years. We are here to give the poor restless soul her *peace!*",
        "@celestine:sad Gently. We're here to do it *gently.* Sister Maud promised there'd be no hitting.",
        "@maud:smug I promised there'd be no hitting *first.*",
        "Above them, draped along the banister like a mourning veil, Ophelia is glowing with joy.",
        "@ophelia:happy An *exorcism!* For *me!* Nobody's tried to exorcise me in *eighty years!* I thought everyone had *forgotten!*",
        "@ophelia:smug Please, do begin. I've prepared some moaning. And I'll do the cold spots. I do *wonderful* cold spots.",
        "Celestine begins to read. Ophelia moans along, beautifully. Maud hums the hymn in a bass so deep the windows buzz. It's all going very well, in that everyone is enjoying themselves enormously, right up until Ophelia's hand goes faint at the edges.",
        "Then her elbow. Then her shoulder.",
        "@ophelia:surprised Oh. Oh, *that's* new. Is it supposed to feel like being *rinsed?*",
        "@celestine:surprised It's *working!* Why is it *working?* It never works! Sister, she's *fading!*",
        "@maud:surprised But she's *nice!* Nobody said she'd be *nice!* Stop reading, Celestine! *Stop reading!*",
        "@celestine:sad I can't! Once you start the Rite of Rest you have to finish the verse, or the roof falls in!",
      ],
      choices: [
        { text: "\"Then read it *backwards!*\" [Wits check 2]", check: { stat: 'wits', dc: 2 }, pass: "backwards", fail: "dust" },
        { text: "\"Ophelia, tell them why you're still here. Out loud.\"", go: "why", affTo: { ophelia: 6, maud: 4, celestine: 3 } },
      ],
    },
    backwards: {
      text: [
        "@you Every rite has a reverse! *Rest* backwards is a blessing of the house! Read it backwards!",
        "Celestine flips the book upside down and reads, fast, eyes wide. The candles flicker. The chalk circle glows gold, then pink.",
        "Ophelia's fading arm fills back in, brighter than before. Brighter than she's ever been.",
        "Then she reaches out without thinking and picks up a teacup from the side table. Not her ghostly one. The *real* one. It doesn't fall through her fingers.",
        "@ophelia:surprised I'm... I'm *holding* it. I'm holding a teacup. I haven't held a teacup since *1824.*",
        { if: 'maud_lifted', text: "@maud:happy You held Mercy on the very first day, and now you've saved a ghost with grammar! I *knew* you were a champion, lamb!" },
        "@maud:sad Oh, look at her. Oh, I'm going to *cry.* Somebody hold Mercy.",
        "She cries. It sounds like a foghorn with feelings. Celestine closes the book and sits down on the floor, shaking and laughing at the same time.",
        "@celestine:happy I think I just invented a *new sacrament.*",
        "It lasts about a minute. Then the teacup slips through Ophelia's fingers again, and you catch it. But she spends the whole minute holding it up to the candlelight and turning it, like a jewel.",
        "@ophelia:blush Do come and exorcise me again. Every week. I insist.",
      ],
      affTo: { maud: 5, celestine: 6, ophelia: 6 },
      end: true,
    },
    dust: {
      text: [
        "@you Read it backwards! That should — probably —",
        "Celestine flips the book upside down and reads, fast. The candles flicker. The chalk circle glows gold. Then two hundred years of dust rises off every surface in the manor at once, in one great grey cloud.",
        "Maud sneezes.",
        "It is a Maud sneeze. Every candle in the house goes out, the curtains blow flat against the windows, and somewhere upstairs a wardrobe falls over.",
        "In the dark, a small voice:",
        "@ophelia:happy ...I'm still here! I'm *completely* here! And that was the most *atmospheric* thing that's happened in this house in a century!",
        "@celestine:blush I think the sneeze broke the verse. I'm so sorry, Sister.",
        "@maud:blush The Abbess is going to put it on the bill. She has a column for sneezes.",
      ],
      affTo: { maud: 2, celestine: 2, ophelia: 3 },
      end: true,
    },
    why: {
      text: [
        "@you Ophelia, why are you still here? Tell them.",
        "Ophelia, mostly translucent now, looks down at the two nuns. For once there's no theater in it.",
        "@ophelia:sad I'm waiting. I've always been waiting. I was promised a dance, at a ball, two hundred years ago, and he never came, and I simply... never left the staircase.",
        "Celestine stops reading mid-word. The roof creaks ominously and decides not to fall in.",
        "Maud lowers Mercy. Her face has crumpled completely.",
        "@maud:sad Two hundred years. For *one dance.* I've matched over two hundred couples, lamb, and not one of them ever waited *half* that long for anything.",
        "@maud:angry Well, that won't do! That won't do at *all!* Nobody waits for a dance in *my* parish!",
        "She holds out one enormous gloved hand.",
        "@maud:blush I'm told I lead very firmly. But I'm light on my feet. For a woman my size.",
        "Ophelia flickers, like a candle in a draught. Then she floats down and puts her translucent hand in Maud's, and the battle nun waltzes the ghost around the dusty parlor while Celestine hums, and the candles burn steady, and nobody exorcises anybody at all.",
        "@ophelia:blush ...You're right. Very firmly.",
      ],
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Lyra & Scarlett & Bettina */
  xover('x_serenade_off', ['lyra', 'scarlett', 'bettina'], { loc: 'tavern', slots: [2] }, {
    start: {
      text: [
        "The Tipsy Wyvern is packed. Lyra is up on a table, tuning Margery. Captain Scarlett is up on the *next* table, with a squeezebox she has almost certainly stolen.",
        "@lyra:smug Ladies, gentlemen, and that one goblin! Tonight, a love song, dedicated to the most beautiful person in this tavern!",
        "She points Margery straight at you. The whole room turns.",
        "@scarlett:smug Oh, *no*, you don't. I saw them first. On the docks. In good light. Tonight, a *shanty*, dedicated to the same person, only *better.*",
        "@lyra:angry You can't *dedicate* a shanty, darling! Shanties are about *rope!*",
        "@scarlett:smug Mine's about a rope *and* a heart, songbird.",
        "Madame Bettina sets down a tray, wipes her hands on her apron and climbs onto the bar between them.",
        "@bettina:smug Ara, ara. A serenade-off, in my tavern? Fine. House rules, sweeties. No swords. No setting the curtains on fire. And *nobody* throws a fish.",
        "@lyra:angry We do *not* talk about the fish.",
        "Lyra plays first: a gorgeous, rippling melody with lyrics about your eyes being *two pools in which my heart goes boating.* Scarlett answers with a stomping shanty in which you are compared, at length and favorably, to a well-maintained mainsail. The crowd is torn. The crowd is also very drunk.",
        { if: 'lyra_heckled', text: "@lyra:smug {name} is my *official critic*, Captain. They'll tell you the truth. They told me the truth about the heart-glove. It was very hurtful. It was *invaluable.*" },
        "@bettina:happy Well, sweetie? You're the one being serenaded. You decide.",
      ],
      choices: [
        { text: "\"Lyra's. The boating line was beautiful. Wrong, but beautiful.\"", go: "lyra", affTo: { lyra: 6, scarlett: -2, bettina: 2 } },
        { text: "\"Scarlett's. Nobody's ever called me a mainsail before.\"", go: "scarlett", affTo: { scarlett: 6, lyra: -2, bettina: 2 } },
        { text: "Climb up on the bar and serenade the referee instead. [Charm check 3]", check: { stat: 'charm', dc: 3 }, pass: "bettina", fail: "fish" },
      ],
    },
    lyra: {
      text: [
        "Lyra punches the air so hard she nearly falls off the table.",
        "@lyra:happy *Wrong but beautiful!* That's going on my posters! That's going on my *grave!*",
        "@scarlett:angry Rigged! I demand a recount! I demand a *keelhauling!*",
        "@bettina:smug No keelhauling indoors, Captain. Have a rum. On the house. You lost very loudly.",
        "Scarlett has the rum. Then two more. By closing, she and Lyra are harmonizing on the shanty together, badly, with the boating line in it.",
      ],
      end: true,
    },
    scarlett: {
      text: [
        "Scarlett leaps off her table, lands in a perfect crouch and sweeps you into a bow so low your hair brushes the floorboards.",
        "@scarlett:happy A *mainsail*, love! Highest compliment on the Sapphire Sea! The crew will be unbearable about this!",
        "@lyra:sad Beaten by a *squeezebox.* Margery, don't look. Margery, cover your ears.",
        "@bettina:smug Don't sulk, songbird. You'll get wrinkles. Here. Pour your heart into a sad one. The room loves a sad one.",
        "Lyra does. It's the best thing she's played all year. She glares at you through every verse of it.",
      ],
      end: true,
    },
    bettina: {
      text: [
        "You climb up onto the bar, take Bettina's hand and sing her the only love song you know all the words to, which is a children's rhyme about a lonely turnip. You sing it with feeling.",
        "The tavern goes silent.",
        "For the first time in living memory, Madame Bettina has nothing to say. Her cheeks go pink. Then very pink.",
        "@bettina:blush Ara... *ara?* Oh, you wicked little thing. I'm meant to be the one who does that to *you.*",
        "@lyra:surprised A *turnip.* They beat us both with a *turnip.*",
        "@scarlett:happy Ha! Love, you've a pirate's nerve! Again, from the top! Lyra, you take the high part!",
        "Lyra takes the high part. Scarlett takes the squeezebox. The whole tavern sings the turnip song four times, with stamping, and Bettina wipes her eyes on her bar towel and pretends it's from laughing.",
      ],
      affTo: { lyra: 4, scarlett: 4, bettina: 6 },
      end: true,
    },
    fish: {
      text: [
        "You climb up onto the bar, open your mouth and sing.",
        "It does not go well. You pick a key that doesn't exist. Lyra winces professionally. Scarlett's squeezebox lets out a wheeze of sympathy.",
        "Halfway through the second verse, from somewhere in the back of the room, a fish sails through the air and hits you squarely in the chest.",
        "@lyra:angry We do *not* — we do *NOT* —",
        "@bettina:angry Who threw that? I *said* no fish! Out! *Out!*",
        "@scarlett:happy Ha! Now you're a real performer, love. Everybody's first fish. You never forget it.",
        "Lyra has the barman carry the fish out with tongs, at arm's length. Then she asks which table it came from, for the ballad. Nobody knows if she's joking.",
      ],
      affTo: { lyra: 3, scarlett: 3, bettina: 3 },
      end: true,
    },
  });

  /* ================================================================== new two-way crossovers */

  /* ------------------------------------------------------------------ Kohana & Marigold */
  xover('x_kohana_marigold', ['kohana', 'marigold'], { loc: 'market', slots: [1] }, {
    start: {
      text: [
        "You turn onto Market Street and stop dead, because you're already there.",
        "Another you is standing by Marigold's flower stall, wearing your clothes and your face and an expression you've never once made, which is *delighted with itself.*",
        "@kohana_you Morning, Marigold! Lovely day! I bought roses for the baker earlier. Big ones. Red ones. Just thought you should know!",
        "Marigold's smile doesn't move. Not one muscle. Her pruning knife, which a moment ago was trimming a stem, has stopped mid-snip.",
        "Then she sees you, the other you, standing at the end of the street.",
        "Her eyes go from one of you to the other. Very slowly.",
        "@marigold:surprised ...There are two of you.",
        "@marigold:blush There are *two of you.* ♡ That's twice as much of you. That's — oh, I'll need a second album —",
        "@marigold:angry But one of you bought roses. For the *baker.* Red ones. ♡",
        "Snip.",
        "@kohana_you Oh dear. Better work out which one of us it was, Marigold! I'd hate for you to get the wrong one! Mm-hm-hm!",
        "The other you laughs. It's not your laugh. It's a much better laugh, and there's an orange tail-tip poking out from under your second-best coat.",
      ],
      choices: [
        { text: "Notice the impostor keeps glancing at the fried-tofu cart. Buy a piece and wave it about. [Wits check 2]", check: { stat: 'wits', dc: 2 }, pass: "tofu", fail: "album" },
        { text: "\"Marigold. That's a fox. I'm me. And I'd never buy the baker roses.\"", go: "truth", affTo: { marigold: 6, kohana: 3 } },
      ],
    },
    tofu: {
      text: [
        "You stroll to the tofu cart, buy one golden, sizzling pocket, and hold it up in the air.",
        "@you Mm. Fresh. Still hot. Shame nobody here likes tofu.",
        "The other you makes a small, involuntary noise. Their nose twitches. Then three enormous orange tails burst out of the back of your second-best coat, and a pair of black-tipped ears pop up through your hair.",
        "@kohana:surprised Oh, that's *low.* That's the lowest trick I've ever — give me that —",
        "She snatches the tofu, shrinks back into her own shape mid-bite, and grins at Marigold with her cheeks full.",
        "@kohana:smug Mmf. Fine. It was me. I didn't buy anyone roses. I just wanted to see what *you'd* do.",
        "Marigold considers her the way she considers a rose with greenfly. Then she puts the knife away and tilts her head.",
        "@marigold:smug You follow them too, don't you? I've seen you. Behind the well. On the roof of the bakery. Tuesdays.",
        "@kohana:blush ...They hum. When they walk. Four notes.",
        "@marigold:happy *I know!* ♡ I've been trying to work out the song for *weeks!*",
        "By sunset the florist and the fox are sharing a bench and comparing notes. You decide to walk home a different way. For the next month.",
      ],
      affTo: { marigold: 5, kohana: 6 },
      flag: 'x_kohana_doubled',
      end: true,
    },
    album: {
      text: [
        "@you Marigold, I'm the real one, I can prove it, I —",
        "@kohana_you — I can prove it, I —",
        "@you Stop that.",
        "@kohana_you *Stop that.*",
        "The impostor copies every word a heartbeat after you, with your exact voice. Then a heartbeat *before* you. It's deeply unsettling.",
        "Marigold watches the two of you go back and forth for a while, and then her smile softens into something dreamy and alarming.",
        "@marigold:happy You know what? It doesn't matter. I'll keep *both.* ♡ I've got room. I've got so much room.",
        "@kohana:surprised ...Ah. Hm. *Both* is a very strong position.",
        "There's a little pop, and the fox is suddenly herself again, already backing away up the street.",
        "@kohana:smug Mm-hm-hm. Lovely meeting you, Marigold. You're even more frightening than me. I'll be *studying* you.",
        "Marigold waves after her with the pruning knife. Then she turns back to you, the only one of you left.",
        "@marigold:blush Oh well. ♡ One is still *plenty.*",
      ],
      affTo: { marigold: 3, kohana: 3 },
      flag: 'x_kohana_doubled',
      end: true,
    },
    truth: {
      text: [
        "@you Marigold. That's a fox. I'm me. And I would never buy the baker roses. I'm not even sure he likes roses.",
        "@marigold:happy He doesn't. He likes peonies. ♡",
        "She lowers the knife and turns, perfectly calm, to the other you.",
        "@marigold:smug The real one's left foot turns out a little when they walk. Yours turns *in.* And you've been standing on my geraniums since you got here.",
        "@kohana_you ...You knew? The whole time?",
        "@marigold:smug I know *everything* about them. ♡ I just wanted to see what they'd say.",
        "With a little pop, your double turns into a sheepish fox-woman with three tails, standing in a flowerbed.",
        "@kohana:blush ...Well. I've been out-watched. That hasn't happened in three hundred years.",
        "@marigold:happy You can have a geranium. To say sorry to the geraniums.",
        "Kohana takes the geranium. She looks at it, then at Marigold, then at you, with real and slightly worried respect.",
        { if: { devoted: 'marigold' }, text: "@marigold:blush And they'd never buy anyone else roses anyway. They buy *me* roses. ♡ On Thursdays." },
      ],
      flag: 'x_kohana_doubled',
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Kohana & Brunhild */
  xover('x_kohana_brunhild', ['kohana', 'brunhild'], { loc: 'noble', slots: [2] }, {
    start: {
      text: [
        "A crowd of nobles has gathered around the fountain in the Noble Quarter, murmuring in scandalized delight.",
        "Sitting on the fountain's edge is Dame Brunhild, Knight-Captain of the Clichéton garrison. She has a basket of kittens in her lap. She has a daisy chain on her helmet. She is giggling.",
        "@brunhild:happy Who's a fierce little knight? *You* are! Yes you are! Ooh, look at your tiny paws! You may each have a *title!*",
        "The nobles gasp. One lady faints into a hedge.",
        { if: 'x_kohana_doubled', text: "You have seen this trick before. Last time it was your own face." },
        "Then the crowd parts, and the *other* Dame Brunhild arrives at a dead run, in full armor, and stops so hard her sabatons strike sparks.",
        "@brunhild:surprised I —",
        "@brunhild:angry I do *not* — I have never in my *life* —",
        "The Brunhild on the fountain looks up, unbothered, and holds out a kitten.",
        "@brunhild:smug Oh, don't be dramatic, me. Tenet forty-three is *ridiculous.* Here. This one's called Sir Fluffington the Second. He's yours. You named him in your head last Tuesday.",
        "The real Brunhild goes the color of a boiled lobster.",
        "@brunhild:angry *KILL ME!* No! Kill *her!* Then kill me! In that order! {name}! You are a witness! Expose this impostor!",
      ],
      choices: [
        { text: "\"Easy. Both of you, recite tenet forty-three.\" [Wits check 2]", check: { stat: 'wits', dc: 2 }, pass: "tenet", fail: "mirror" },
        { text: "\"Honestly, Brunhild? You'd look good with a kitten.\"", go: "kitten", affTo: { kohana: 5, brunhild: 3 } },
      ],
    },
    tenet: {
      text: [
        "@you Both of you. Tenet forty-three. Word for word.",
        "@brunhild:smug *A knight shall never giggle.* Clause the first: not at a ball. Clause the second: not at a funeral. Clause the third: not at a *duckling*, however small, *however* well it waddles.",
        "The Brunhild on the fountain hesitates. Her eyes flick sideways, the way a fox's do when it's checking for the exit.",
        "@kohana:surprised ...There are *clauses?*",
        "There's a pop, and the second knight is a fox-woman with three tails and a daisy chain, sitting in a basket of kittens.",
        "@kohana:smug Fine. Fine! But you have to admit I was *very* good. I had the walk. Nobody gets the walk.",
        "@brunhild:angry You *defamed* me! Before the *nobility!* With *kittens!*",
        "@kohana:happy I gave you a reputation for kindness, dumpling. That's the cruellest thing I could think of.",
        "Brunhild draws breath for a furious reply. Sir Fluffington the Second climbs up her greave, onto her knee, and falls asleep. The knight freezes. The whole square watches her try not to smile. She fails, and a very small sound escapes her helmet.",
        "@brunhild:blush ...That was not a giggle. That was a cough. Of honor.",
        "She does not keep the kitten. She enlists it as garrison mouser and inspects it every morning.",
      ],
      affTo: { kohana: 4, brunhild: 6 },
      end: true,
    },
    mirror: {
      text: [
        "@you Both of you! Prove you're the real one!",
        "@brunhild:angry *Gladly!* Draw, impostor!",
        "Both Brunhilds draw their swords. Both take the same stance. Every thrust, every parry, every hop over a kitten: the fox copies it a heartbeat later, perfectly. The nobles applaud. It looks exactly like a knight duelling a mirror.",
        "It ends when both of them lunge at once, trip over the same kitten and fall backwards into the fountain.",
        "The water washes the glamour off. A soaked fox-woman and a soaked lady knight sit up in the fountain, side by side, glaring at each other. Then, very much against tenet forty-three, they both start laughing.",
        "@kohana:happy You *are* fun! I *knew* you were fun!",
        "@brunhild:blush I am not fun. I am *damp.* There is a difference. ...Hand me the cat.",
      ],
      affTo: { kohana: 3, brunhild: 3 },
      end: true,
    },
    kitten: {
      text: [
        "@you Honestly, Brunhild? You'd look good with a kitten.",
        "Brunhild's visor drops shut with a clank of pure alarm. The fake Brunhild beams.",
        "@kohana:smug *See?* Told you. They've thought about it.",
        "There's a pop, and she's herself again: three tails, a smug grin and an armful of kittens, one of which she drops into the real knight's gauntlets.",
        "Brunhild holds the kitten at arm's length, rigid, like an unexploded potion. It mews. Her whole face starts to wobble.",
        "@brunhild:blush ...You may tell no one. *No one.* I will deny it under oath.",
        "@kohana:happy Too late, dumpling. Forty nobles saw. I'll have you know you're now the most *popular* knight in the Quarter.",
        "@brunhild:angry *Kill me.*",
        "But she tucks the kitten inside her breastplate, where it purrs against the steel all the way to the garrison stables.",
      ],
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Zyra & Sylvaine */
  xover('x_zyra_sylvaine', ['zyra', 'sylvaine'], { loc: 'docks', slots: [2] }, {
    start: {
      text: [
        "The sun is going down over Saltbreeze Harbor, and Zyra is lying flat on the harbor wall in heart-shaped smoked spectacles, absorbing it.",
        "@zyra:happy Bestie! Sit down! Sunset's in, like, four minutes, and it's going to be *mythic.* I can feel it. The clouds are giving *drama.*",
        "Further along the wall, an elf in leaf-green robes is reading a very old book by the last of the light. She doesn't look up.",
        "@sylvaine I have seen three hundred and thirty thousand sunsets, child. They are, on the whole, much the same. The sun goes down. It comes up. It is very reliable. That is the best thing about it.",
        "Zyra sits bolt upright and lowers her spectacles.",
        "@zyra:surprised Wait. Leaf-green. Head to toe. *You're* the one from the market!",
        "@sylvaine:smug And you are the dark elf who told a nine-hundred-year-old archmage to *accessorize.* In front of the cheese man.",
        "@zyra:smug Babe. You're *immortal.* You've had *centuries.* I've been on the surface two years and I've already worn every color twice.",
        "@sylvaine When I was young, your people and mine fought a war that lasted two hundred years.",
        "@zyra Over what?",
        "Sylvaine pauses, frowns, and turns back a page, as if the answer might be written there.",
        "@sylvaine:surprised ...I genuinely cannot remember. I *think* it was a hat.",
        "@zyra:happy That's *so* Underdark.",
      ],
      choices: [
        { text: "\"Sylvaine. Let her do one nail. Just one.\" [Charm check 2]", check: { stat: 'charm', dc: 2 }, pass: "nail", fail: "green" },
        { text: "\"Sylvaine, when did you last actually *watch* a sunset? Without a book?\"", go: "watch", affTo: { sylvaine: 6, zyra: 4 } },
      ],
    },
    nail: {
      text: [
        "@you One nail. You'll have outlived it in a week. It's a rounding error.",
        "@sylvaine:smug ...One nail. The smallest one. And not pink.",
        { if: 'zyra_both', text: "@zyra:happy Not pink. Got it. No curse. *Two* pinks, then. Both of them. Like you taught me, bestie." },
        "Zyra produces a tiny bottle from her curls and paints the archmage's little fingernail with the concentration of a surgeon. It is pink. Sylvaine holds it up against the sunset, and something ancient and stern in her face goes slightly sideways.",
        "@sylvaine:blush ...I dyed my hair blue once. Eight hundred years ago. I was young. I ran away with a bard.",
        "@zyra:surprised SHUT UP.",
        "@sylvaine:smug He wrote a ballad about my eyebrows. Forty verses. It was banned in two kingdoms.",
        "@zyra:happy That is *big crit energy!* That is *literally legendary!* I take back everything I said about the leaf-green!",
        "By the time the sun is down, Sylvaine has agreed to one more nail and absolutely nothing else, and Zyra has borrowed a book on elven history, which she plans to read *ironically.*",
      ],
      affTo: { zyra: 6, sylvaine: 5 },
      end: true,
    },
    green: {
      text: [
        "@you Come on, Sylvaine. Live a little. Just one nail —",
        "@sylvaine:angry I have lived *a little* for nine hundred years. It adds up.",
        "But Zyra is already at work, chattering happily, while Sylvaine tries to keep reading. By the time the archmage looks down, all ten of her nails are flamingo pink.",
        "Sylvaine sighs, lifts one finger and murmurs a word older than the harbor. Every one of Zyra's own nails turns a deep, glossy, shimmering leaf-green.",
        "Zyra stares at them. She holds them up to the sunset. She turns them this way and that.",
        "@zyra:surprised ...Okay. Okay, wait. That's actually kind of *mythic.*",
        "@sylvaine:smug I know.",
      ],
      affTo: { zyra: 3, sylvaine: 3 },
      end: true,
    },
    watch: {
      text: [
        "Sylvaine opens her mouth to answer, and doesn't.",
        "She looks at the book on her knee. She looks at the sky, where the clouds have gone gold and rose and a shade of violet that doesn't have a name yet.",
        "@sylvaine:sad ...I have been reading during them. For about four hundred years, I think. One gets into the habit.",
        "She closes the book. Zyra scoots along the wall and sits beside her, very quiet for once, and the two elves, one very old and one very new to the sky, watch the sun go down together.",
        "When it's gone, Zyra is crying a bit, the way she always does.",
        "@zyra:blush Sorry. It's just. It's so *big.*",
        "@sylvaine:blush ...Yes. I had forgotten that. It *is* very big.",
        "Sylvaine lends her a handkerchief. It is leaf-green. Zyra keeps it anyway.",
      ],
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Sigrun & Mira */
  xover('x_sigrun_mira', ['sigrun', 'mira'], { loc: 'guild', slots: [0], day: 6 }, {
    start: {
      text: [
        "There's a tug-of-war happening across the Guild reception desk. The rope is a quest scroll.",
        "On one end is Sigrun Stormbrand, valkyrie, well over six feet of winged enthusiasm. On the other is Mira, who is a great deal shorter and has both boots braced against the desk.",
        "@sigrun:happy *SLAY THE WYRM OF BLACKMOOR!* Survival rate: almost none! It is PERFECT for my little warrior!",
        "@mira:angry It's an *S-rank!* They're a *C!* On a good day! The last party that took it came back as *one boot!*",
        "@sigrun:smug A very glorious boot.",
        "Mira yanks. Sigrun doesn't move. Mira slaps a different scroll down on the desk with her free hand.",
        "@mira:angry *Deliver Mrs. Fennick's Pie To Her Sister.* Two streets. Downhill. Survival rate: one hundred percent. *That's* their quest.",
        "@sigrun:surprised A *pie?* Nobody has ever been sung into the High Hall for a *pie!*",
        "@mira:angry *Good!*",
        { if: 'sigrun_score', text: "@sigrun:smug Receptionist, their Glory Score is four and a half! Four and a half does not *carry pies!*" },
        { if: 'sigrun_score', text: "@mira:angry There is no *Glory Score* in the Guild Code!" },
        "@mira Thirty percent of adventurers die in their first month. *Thirty!*",
        "@sigrun:happy Only thirty? Such *odds!* Such room for *improvement!*",
        "@mira:angry That's the *death* rate!",
        "They both turn on you at once, still holding the scroll between them.",
      ],
      choices: [
        { text: "Take the pie.", go: "pie", affTo: { mira: 6, sigrun: -2 } },
        { text: "Take the wyrm.", go: "wyrm", affTo: { sigrun: 6, mira: -3 } },
        { text: "Search the board for a quest that's glorious *and* survivable. [Wits check 2]", check: { stat: 'wits', dc: 2 }, pass: "goat", fail: "pieWyrm" },
      ],
    },
    pie: {
      text: [
        "You take the pie scroll. Mira lets go of the other one so fast that Sigrun stumbles backwards into the notice board.",
        "@mira:smug *Thank* you. Somebody in this building has sense.",
        "@mira:blush Not that I care. I'd just have to do a form if you died. A *long* form.",
        "@sigrun:sad ...A pie.",
        "She follows you all the way to Mrs. Fennick's sister's door anyway, in full armor, scanning the rooftops for ambushes. Nothing happens. The pie arrives intact.",
        "@sigrun:happy ...I will admit, little warrior, you carried it *with great dignity.* A two. But a *proud* two.",
      ],
      end: true,
    },
    wyrm: {
      text: [
        "You take the wyrm scroll. Sigrun whoops so loudly that the Guild's chandelier swings.",
        "@sigrun:happy *YES!* I shall fly overhead the entire time! If you fall, you will fall *magnificently!*",
        "Mira goes white, then red, then a sort of administrative purple. Then she yanks open a drawer and slams down a form.",
        "@mira:angry *Fine!* Die! See if I care! *Form 9-D!* Next of kin! Fill it in!",
        "You look at the form. In the *next of kin* box, in very neat, furious handwriting, someone has already written *MIRA (Guild Reception).*",
        "@mira:blush ...It's for *administrative* reasons. Somebody has to get your *boot.*",
        "The Wyrm of Blackmoor, as it turns out, has been dead for six years. Sigrun is crushed. Mira is so relieved she stamps the completed scroll four times.",
      ],
      end: true,
    },
    goat: {
      text: [
        "You scan the board. Near the bottom, under a rat-catching notice, is a scrap of parchment: *ESCORT THE ABBESS'S GOAT ACROSS THE OLD BRIDGE. Goat is bad-tempered. Bridge is very old.*",
        "@you A doomed bridge. A furious beast. A battle to the far side. And the goat's been across it a hundred times, so it's perfectly safe.",
        "Sigrun reads it. Her eyes light up with literal lightning.",
        "@sigrun:happy A *BRIDGE!* The greatest heroes always hold a bridge! *Grettir Half-Beard* held a bridge!",
        "Mira reads it. Her shoulders come down from around her ears.",
        "@mira:surprised ...That goat's never hurt anyone. It's bitten Brother Osric eleven times, but he's fine. Survival rate, one hundred percent.",
        "@mira:smug I'm making a new form. *Form 12-G: Glorious But Survivable.* You'll be the first.",
        "The goat headbutts you twice on the bridge. Sigrun composes a poem about it. Mira stamps the scroll APPROVED, and you notice she's drawn a very small heart in the corner, then scribbled over it, hard.",
      ],
      affTo: { sigrun: 5, mira: 5 },
      end: true,
    },
    pieWyrm: {
      text: [
        "@you How about... both?",
        "Both of them let go of the scroll in surprise. You take the pie *and* the wyrm.",
        "It turns out the Wyrm of Blackmoor has been retired for six years and lives just outside town, and its favorite food is pie. You hand Mrs. Fennick's pie to a very old, very polite dragon, who weeps with gratitude. Mrs. Fennick's sister is furious.",
        "@sigrun:happy You fed a *WYRM* with your bare *hands!* An eight!",
        "@mira:angry You fed a wyrm *someone else's pie!* That's two forms! *Two!*",
        "She does both forms. She signs both of them with a little flourish she pretends not to have done.",
      ],
      affTo: { sigrun: 3, mira: 2 },
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Thistle & Morwen */
  xover('x_thistle_morwen', ['thistle', 'morwen'], { loc: 'forest', slots: [2] }, {
    start: {
      text: [
        "The fairy ring in Whisperwood is glowing angrily. In the middle of it, a cauldron is bubbling, and around the cauldron, three toadstools are conspicuously missing.",
        "@thistle:angry You have *stewed* the *furniture* of the Seelie Court!",
        "@morwen:surprised I thought they were *mushrooms!*",
        "@thistle:angry They *are* mushrooms! They're *royal* mushrooms! That one was a *throne!*",
        "Morwen spots you and waves frantically with her ladle, splashing something purple onto a passing moth, which turns briefly plaid.",
        "@morwen:sad {name}! I stepped into a fairy ring by accident, and now I owe her a *forfeit*, and I don't even know what a forfeit *is*, and I think it might be *me!*",
        "@thistle:smug By ancient law, a ring-breaker owes the Queen a year and a day of service. Or her firstborn. Or her familiar.",
        "@morwen I don't *have* a firstborn! I barely have *lunch!*",
        "All eyes turn to the brim of Morwen's hat, where a large, warty toad is sitting with the air of a lawyer who has just been mentioned in a will.",
        "@croak I should like it noted that I am not *currency.*",
        "@thistle:happy Oh, but you're *cursed!* I can smell it from here. Witch-work. Clumsy. Grandmother-grade. I could unpick it in a heartbeat. You'd be a duke again by supper.",
        "The toad goes very still. So does Morwen.",
        "@morwen:sad ...You'd want that. Wouldn't you, Croaksworth.",
      ],
      choices: [
        { text: "\"Before anyone agrees to anything, Your Majesty, state the terms. *Precisely.*\" [Wits check 3]", check: { stat: 'wits', dc: 3 }, pass: "terms", fail: "jester" },
        { text: "\"Ask Croaksworth what *he* wants.\"", go: "croak", affTo: { morwen: 6, thistle: 3 } },
        { text: "\"Take me instead. I'll serve the forfeit.\"", go: "me", affTo: { thistle: 6, morwen: 3 } },
      ],
    },
    terms: {
      text: [
        "@thistle:smug The terms are a year and a day of *service* to the crown.",
        "@you Service. It doesn't say what kind.",
        "Thistle's wings stop flicking.",
        "@you So: Morwen serves the crown by brewing it something. Something the crown hasn't had in a century. Something to cure a fairy queen of being *bored.*",
        "@thistle:surprised ...Go on.",
        "Morwen is already rummaging in her bag.",
        "@morwen:happy Oh! Oh, I've got just the thing! It lets you smell colors! Only side effect is you hear smells. Purple's *very* loud.",
        "She hands Thistle a vial roughly the size of a thimble, which, for Thistle, is a barrel. Thistle sniffs it. Her eyes go wide.",
        "@thistle:surprised I can *hear* the violets. They're *shouting.* They're shouting about *bees!*",
        "@thistle:happy This is the most fun I've had in a *century!* A year and a day of *this?* Witch, you're hired!",
        "On the hat brim, Sir Croaksworth lets out a long, quiet breath.",
        "@croak ...I had forgotten that dukes have to attend dinners. Thank you, {title}. I mean that sincerely, which is unpleasant for me.",
      ],
      affTo: { thistle: 5, morwen: 5 },
      end: true,
    },
    jester: {
      text: [
        "@you What are the terms, exactly?",
        "@thistle:smug *Exactly?* Oh, how lovely. Nobody ever asks me *exactly.*",
        "She takes a deep breath and recites them. It takes twenty minutes. There are subclauses. There is a subclause about the subclauses. At some point you realize you've agreed to something, but not what.",
        "When it's over, Sir Croaksworth is wearing a tiny jester's cap with a bell on it.",
        "@thistle:happy He is now Royal Jester of the Seelie Court for a year and a day! Part-time. He may keep his toad body. And his witch.",
        "@croak This is the worst day of my life. And I was turned into a toad.",
        "@morwen:happy He looks *adorable!* Oh, Croaksworth, *jingle* for me!",
        "He does not jingle. He absolutely refuses to jingle. He jingles once, by accident, on the way home, and Morwen laughs until her hat falls off.",
      ],
      affTo: { thistle: 3, morwen: 3 },
      end: true,
    },
    croak: {
      text: [
        "@you Croaksworth. What do you actually want?",
        "The toad looks at the fairy queen. He looks at the witch, who is twisting her hat brim in both hands and trying very hard to look as if she doesn't mind.",
        "@croak I was a duke for thirty-one years. I have been a toad for forty. On balance, the toad years have been better.",
        "@croak Madam cannot find her own spoons without me. She labels poisons *probably fine.* She once tried to make toast with a lightning bolt. And the pay is excellent. Unlimited flies.",
        "@croak I shall remain a toad.",
        "Morwen scoops him off her hat and hugs him to her chest. He puts up with it, mostly.",
        "@morwen:blush You *grump.* You absolute *grump.* I'll buy you a whole jar of flies.",
        "Thistle watches this with her arms folded and her wings drooping, very slightly, at the tips.",
        "@thistle:sad ...Loyalty is rarer than speed. I always say so.",
        { if: 'thistle_snail', text: "@thistle:smug Very well. Forfeit waived. And the toad is hereby squire to Sir Slowly. He is already a Sir, but mine are better." },
        { if: '!thistle_snail', text: "@thistle:smug Very well. Forfeit waived. But you owe me three new toadstools, witch. *Comfortable* ones." },
      ],
      end: true,
    },
    me: {
      text: [
        "@you Take me instead. A year and a day.",
        "@thistle:surprised You're *volunteering?* Nobody *volunteers.* That's half the fun gone. ...Also, mortals take terribly long lunch breaks.",
        "She thinks about it, tapping her chin.",
        "@thistle:smug One hour. One hour of service, starting now. You shall hold court in my place. I'm bored of judging.",
        "So you spend the next hour sitting cross-legged in the fairy ring, gravely presiding over a property dispute between two beetles, a noise complaint against a cricket, and an extremely complicated divorce between two moths. Thistle sits on your shoulder, eating a raspberry and saying *ooh* at the good bits.",
        "@morwen:happy You're *good* at this! You're very fair! You gave the cricket *visiting rights!*",
        "@thistle:happy I shall have you back. Often. You've a judicial *face.*",
      ],
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Lyra & Fenna */
  xover('x_lyra_fenna', ['lyra', 'fenna'], { loc: 'forest', slots: [0] }, {
    start: {
      text: [
        "Deep in Whisperwood, someone is playing a lute at a tree.",
        "The tree has Fenna in it. She's crouched on a high branch, ears flat, glaring down at Lyra with deep suspicion.",
        "@lyra:smug *Ohhh, the wolf of Whisperwood, so wild and misunderstood, / with eyes like silver moons, and a heart just like a broom —*",
        "@fenna:angry Fenna does *not* have a broom heart.",
        "@lyra:sad It's a placeholder! The rhyme scheme's struggling!",
        "Fenna spots you, drops out of the tree and lands beside you in a crouch, then sniffs you thoroughly.",
        "@fenna:surprised {name}! The lute lady has been following Fenna for *two hours.* Making noises. At Fenna. Is it a mating call? Fenna is not interested in the lute lady's mating call.",
        "@lyra:blush It's a *ballad!* I'm writing a ballad! *The Wolf of Whisperwood!* It's going to be my masterpiece! Or, at least, my *thirty-first* masterpiece.",
        "@fenna:angry Song is wrong. Fenna has no moon eyes. Fenna's eyes are *eyes.*",
        "@lyra But I need *something* to rhyme! Help me, darling. You know her. What's the *real* story?",
      ],
      choices: [
        { text: "\"Let Fenna tell it herself.\"", go: "tell", affTo: { fenna: 6, lyra: 4 } },
        { text: "Help Lyra find the right rhyme. [Charm check 2]", check: { stat: 'charm', dc: 2 }, pass: "rhyme", fail: "howl" },
      ],
    },
    tell: {
      text: [
        "@you Fenna, you tell her. Your story.",
        "Fenna considers this very seriously. She sits down on the ground, because the ground is a free chair, and pulls aside her collar to show the three long scars on her shoulder.",
        "@fenna:smug Bear. Big bear. Fenna won. Then we were friends. Then Fenna ate his fish. Then we were *not* friends.",
        "There's a long pause. Lyra has stopped breathing.",
        "@lyra:surprised That's... that's *perfect.* That's verse, verse, chorus, *betrayal.* That's the structure of every great ballad ever written! I've spent ten years trying to write that!",
        "@fenna:happy Fenna is good at stories.",
        "@lyra:happy Fenna is *incredible* at stories!",
        "The finished ballad has four verses and the chorus is just *the bear, the bear, the bear, the fish*, and by the end of the week the whole Tipsy Wyvern is roaring it. Fenna comes in every night to hear it, sits under the table and thumps her foot on the floor in time.",
      ],
      end: true,
    },
    rhyme: {
      text: [
        "@you Don't rhyme her with things. Rhyme her with *places.* *Whisperwood.* Wild. Misunderstood. Good.",
        "@you *She'd never sit where a chair is placed, / she'd eat your lunch and lick your face, / but stand beside her if you would: / no heart is truer in Whisperwood.*",
        "Lyra's fingers freeze on Margery's strings. Fenna's ears come slowly up.",
        "@lyra:surprised Oh, you *menace.* That's — that's *good.* Darling, that's *better than mine.* I hate it. I'm stealing it.",
        "@fenna:blush ...Truer. Fenna likes truer. Fenna is *very* true.",
        "Lyra plays it again from the top. On the last line, Fenna throws back her head and howls, long and clear and dead on the note, and every bird in Whisperwood goes silent to listen.",
        "@lyra:happy ...Oh. Oh, that's the harmony. That's been the missing *harmony* all along. Fenna, darling, you're coming on tour.",
        "@fenna:happy Fenna does not know what a tour is. Fenna is coming.",
      ],
      affTo: { fenna: 5, lyra: 6 },
      end: true,
    },
    howl: {
      text: [
        "@you How about... *Whisperwood* and... *firewood?*",
        "@lyra:sad ...*Hairy hood?* *Pudding should?*",
        "@you *Neighborhood?*",
        "@fenna:angry These are *all bad.*",
        "Fenna points her nose at the sky and howls in protest. It goes on for a very long time. Lyra listens with her mouth slightly open, then hurriedly starts writing.",
        "@lyra:happy No, no — keep doing that! That's the *chorus!* The chorus is just *that!*",
        "The ballad's chorus, when it's finished, is twelve bars of a woman howling. It's the most popular thing Lyra has ever written. Nobody can sing it except Fenna, who is extremely smug about it.",
      ],
      affTo: { fenna: 3, lyra: 3 },
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Vespera & Seven */
  xover('x_vespera_seven', ['vespera', 'seven'], { loc: 'academy', slots: [0] }, {
    start: {
      text: [
        "There's a crowd of first-years around a desk in the Academy's great hall. Vespera is sitting at it with a stack of paper, three quills and the fixed stare of a hawk that has spotted a mouse doing long division.",
        "Across the desk sits Seven, hands folded, eyes ticking softly.",
        "@vespera:smug Mental arithmetic. Best of nine. I've held the Academy record for six years. Ready?",
        "@seven Affirmative. I came to attend a lecture on Emotional Thaumaturgy. It was cancelled. I have nothing else scheduled.",
        "@vespera Four hundred and seventeen times thirty-eight.",
        "@seven Fifteen thousand, eight hundred and forty-six.",
        "Vespera's quill hasn't touched the paper yet.",
        "@vespera:surprised ...Nine thousand and one, divided by — ",
        "@seven Seven. One thousand, two hundred and eighty-five, remainder six. Observation: you selected my name. That was either a coincidence or a joke. I am not equipped to tell which.",
        "Four questions later, the score is four to nothing. The first-years are whispering. Footnote is on the back of a chair with his head under his wing, unable to watch.",
        "Vespera looks down at the ledger. Then, slowly, her whole face lights up.",
        "@vespera:happy I've never lost so *fast.* Do you know how long I've waited to lose this fast? This is *magnificent!* Rematch! Different category!",
        "@vespera:smug *Feelings.* Whoever feels the most wins.",
        "@seven:sad I do not have feelings. I am brass and springs.",
        "@vespera:smug Then I win by default.",
        "@seven ...Objection.",
        "They both turn to you, the nearest adjudicator who isn't a raven.",
      ],
      choices: [
        { text: "\"New contest. First one to make the other laugh.\" [Wits check 2]", check: { stat: 'wits', dc: 2 }, pass: "laugh", fail: "tie" },
        { text: "Quietly ask Seven to let her win one.", go: "letwin", affTo: { seven: 4, vespera: -2 } },
      ],
    },
    laugh: {
      text: [
        "@you Nobody can calculate a joke. First one to make the other laugh wins.",
        "Vespera tells a joke about two wizards and a lectern. It's a very good joke. Seven considers it carefully.",
        "@seven Analysis: the humor derives from the double meaning of the word *staff.* I understand it fully. I am not laughing.",
        "@vespera:angry It's *funnier* if you *don't* analyse it!",
        "@seven My turn. I have been practising.",
        "She looks Vespera dead in the eye.",
        "@seven Ha. Ha. Ha.",
        "There is a pause. Then Vespera cracks. It starts as a snort and ends with her face down on the desk, ribbons clinking, howling.",
        "@vespera:happy That's not — that's not even a *joke* — that's just the *word* — oh, gods, do it again —",
        "@seven:surprised ...I won. I made a human laugh. On *purpose.*",
        "@vespera_footnote POINT.",
        "Seven's eyes are spinning very fast. She presses one hand flat against her chest plate, as if checking something.",
        "@seven:blush Observation: there is a sensation in my central spring. It is warm and slightly too large. Query: is this what you call *pride?*",
        "@vespera:smug Yes. Get used to it. Then I'll take it off you. Same time next week.",
      ],
      affTo: { vespera: 5, seven: 6 },
      end: true,
    },
    tie: {
      text: [
        "@you First one to make the other laugh wins.",
        "Vespera tells a joke. Seven analyses it. Seven tells a joke. It is a list of prime numbers, delivered with great confidence. Vespera blinks at her.",
        "Twenty minutes later, neither of them has laughed, and the first-years have gone to lunch.",
        "@vespera:angry A *draw.*",
        "@seven Correct. A draw.",
        "@vespera:smug ...I'm putting it down as a draw *in my favour.*",
        "@seven:smug Objection noted. Logged. And ignored.",
      ],
      affTo: { vespera: 2, seven: 3 },
      end: true,
    },
    letwin: {
      text: [
        "You lean down and murmur to Seven. She considers this, nods once, and the next question, she gets wrong. By exactly one.",
        "Vespera goes white.",
        "@vespera:angry You *let me win.*",
        "@seven Correct. Query: was that kind?",
        "@vespera:angry It was the most *insulting* thing anyone has *ever* done to me! Never do that again! *Never* let me win! Losing to you fair and square was the best thing that's happened all *month!*",
        "She stops, breathing hard. Then she squints.",
        "@vespera:surprised ...Wait. How did you make it so *convincing?*",
        "@seven:smug I calculated your expected error rate and matched it.",
        "@vespera:happy *Teach me that.*",
      ],
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Zyra & Shade */
  xover('x_zyra_shade', ['zyra', 'shade'], { loc: 'market', slots: [0] }, {
    start: {
      text: [
        "Zyra is at the cosmetics stall on Market Street, holding two pots of lip gloss up to the light. She doesn't turn round.",
        "@zyra Babe. You've been on that roof since dawn. Your knees must be *so* sad.",
        "A grey shape drops silently from the awning above and lands beside her. It's Shade, mask on, eyes flat.",
        "@shade Report: you are not a cosmetics enthusiast. You have checked the position of every exit on this street four times. Your left sandal has a garrote in the heel.",
        "@zyra:smug And your mask has a blade in the left cheek, and you've got three throwing knives in a sleeve that's *way* too tight for three throwing knives. We're literally *twinning.*",
        "@shade We are not twinning.",
        "@zyra:happy We're *so* twinning. Underdark training? Silent Guild? Either way, the grey is *tragic.* It's so Underdark. You look like a rainy Tuesday that got a job.",
        "@shade:angry Grey is tactical. Grey is invisible.",
        "@zyra I spotted you from a *reflection in a lip gloss,* babe.",
        "Shade's eye twitches. She sees you, and her shoulders go fractionally less tense, which is the most expression you've ever seen her show in public.",
        "@shade Citizen. You know this person. Assess.",
      ],
      choices: [
        { text: "Work out who Shade has been watching all morning. [Wits check 2]", check: { stat: 'wits', dc: 2 }, pass: "target", fail: "pigeon" },
        { text: "\"Shade. Let her pick you one thing. Just one.\"", go: "ribbon", affTo: { zyra: 5, shade: 4 } },
        { text: "Buy everyone a honey cake.", go: "cakes", affTo: { shade: 6, zyra: 3 } },
      ],
    },
    target: {
      text: [
        "You look at the roof Shade dropped from. Then at where Zyra has been standing. Then at the lines of sight.",
        "@you You're not watching the market, Shade. You're watching *her.*",
        "Shade's silence is very loud.",
        "@shade ...The Silent Guild has been asked to monitor the dark elf. By a nervous merchant.",
        "@zyra:surprised I have a *stalker?* An *actual* one? Oh, that's *mythic!* I've never had a stalker who wasn't my *mother!*",
        "She is genuinely thrilled. She produces a notebook from her curls and starts writing.",
        "@zyra:happy Okay. Here. I'll write your report for you, so you can have the afternoon off. Nine o'clock: nails. Ten: crisis about two pinks. Eleven: lay on the harbor wall and *manifested.*",
        "She hands it over. It has stickers on.",
        "@shade:surprised ...This is the most accurate report I have ever received.",
        "@shade:smug I will submit it unaltered. The merchant will cry.",
        "@zyra:happy Same time tomorrow, bestie? I'll do you a sticker of your own.",
      ],
      affTo: { zyra: 6, shade: 5 },
      end: true,
    },
    pigeon: {
      text: [
        "You look around very carefully, frowning, and point.",
        "@you That pigeon's been here all morning. It's watching both of you.",
        "Both assassins look at the pigeon. Then they look at you, with the same expression of deep, professional pity.",
        "@zyra:sad Bestie. *No.*",
        "@shade:sad The pigeon is a pigeon.",
        "For the rest of the morning they get on wonderfully, mostly by explaining spycraft to you very slowly and kindly, like you're a puppy that has wandered into a knife shop.",
      ],
      affTo: { zyra: 3, shade: 2 },
      end: true,
    },
    ribbon: {
      text: [
        "@you Let her pick one thing, Shade. One. You can take it off afterwards.",
        "Shade looks at you for a long moment. Then she gives a single nod, the way you'd agree to have a tooth pulled.",
        "Zyra squeals and rummages through the stall at blinding speed, then ties something around the strap of Shade's mask: a narrow ribbon, lilac, with one tiny embroidered sun.",
        "@zyra:happy There! *Subtle.* It's barely anything. It says *I could kill you, but I have a softer side.*",
        "@shade I do not have a softer side.",
        "Two days later, you find a note under your door in Shade's tiny, precise handwriting.",
        "*Report: a target noticed me in 0.4 seconds today, because of the ribbon. Unacceptable. I am keeping it.*",
      ],
      end: true,
    },
    cakes: {
      text: [
        "You buy three honey cakes from the baker's cart and hand them round.",
        "Shade takes hers. She doesn't eat it straight away. She holds it for a moment with both hands, and something behind the mask goes very quiet and soft.",
        "Zyra notices. Zyra notices everything.",
        "@zyra:smug Oh my *gods.* That's your thing. Honey cakes. That's your *soft spot.* I *knew* you had a gooey center!",
        "@shade:angry I do not have a gooey center. I am a blade in the dark.",
        "@zyra:happy A blade in the dark with a *gooey center.* No curse. It's *adorable.* Your secret's safe with me. I'm a spy. I *love* secrets.",
        "Shade eats the cake in four precise bites. She doesn't deny anything else.",
      ],
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Maud & Hilde */
  xover('x_maud_hilde', ['maud', 'hilde'], { loc: 'artisan', slots: [0] }, {
    start: {
      text: [
        "The Stonebrew Forge is ringing with argument. Sister Maud is standing just inside the door, which she has had to duck through, holding Mercy out across both palms like a wounded bird.",
        "@maud:sad She's *dented*, Mistress Stonebrew. A lich's skull is much harder than it looks. Look at her. Look at her little face.",
        "@hilde:surprised That's not a *face*, it's a hammerhead. ...Gods below. Let me see that.",
        "Hilde takes the hammer, staggers, plants her feet and turns it over in her hands. Her eyebrows go up, and keep going.",
        "@hilde:happy This is pre-Collapse dwarven steel. *Deep-forged.* There's maybe six of these left in the world. Where'd a nun get one?",
        "@maud:happy Nobody knows! She was at the back of the Temple armory under a sign that said *DO NOT.* So I did.",
        "@hilde I can fix it. Two hours. *If* you stop hovering.",
        "@maud:smug I shall have to sing to her during the repair. She gets nervous.",
        "@hilde:angry Nobody sings in my forge.",
        "@maud:sad Then she'll *rattle.*",
        "Somewhere in the argument, a battered sketchbook slides off Hilde's workbench and falls open on the floor at Maud's feet. It's full of jewelry: delicate silver chains, little pendants shaped like leaves, and, on the open page, a ring. A betrothal ring, unmistakably.",
        "Maud bends down. Maud is the Order's Counsel of Hearts. Maud has matched over two hundred couples. Maud's whole face goes bright with interest.",
        "@maud:surprised Oh, my *stars*, is that a —",
        "Hilde has gone the color of her own forge.",
      ],
      choices: [
        { text: "Step on the sketchbook and change the subject. \"Who wants to hold the hammer?\"", go: "cover", affTo: { hilde: 6, maud: 2 } },
        { text: "Hold Mercy steady on the anvil while Hilde works. [Might check 3]", check: { stat: 'might', dc: 3 }, pass: "anvil", fail: "foot" },
        { text: "\"Hilde. Just let her sing.\"", go: "sing", affTo: { maud: 5, hilde: 4 } },
      ],
    },
    cover: {
      text: [
        "You step neatly onto the open sketchbook and point at the hammer.",
        "@you So! Mercy. Two hours, you said? Who's holding her?",
        "Maud looks at your foot. Then at Hilde's face. Then at you. Two hundred-odd couples have taught her a great deal about when to say nothing.",
        "@maud:smug ...I'll hold her. You're quite right, lamb. Nothing to see down there. Nothing at *all.*",
        "Hilde sweeps the sketchbook up while Maud is turned away and stuffs it into her apron. She doesn't look at you. But for the next two hours, every time Maud starts humming, Hilde lets her.",
        "@hilde:blush ...Owe you one, surfacer. Don't make it weird.",
        "As Maud leaves with Mercy, good as new, she bends down to murmur in your ear.",
        "@maud:happy Whoever that ring is for, lamb, they're a lucky soul. One more for the tally. I can *feel* it.",
      ],
      end: true,
    },
    anvil: {
      text: [
        "@you Here. I'll hold her.",
        { if: 'maud_lifted', text: "@maud:happy You've held her before! She remembers you! Look, she's not even rattling!" },
        "You take Mercy by the haft and lay her across the anvil. She weighs about as much as a guilty conscience, and your arms shake, but they hold.",
        "Hilde works fast. Tap, turn, heat, tap. The dent eases out under her hammer like a crease under an iron. Maud, unable to help herself, starts humming a hymn in the deepest bass you've ever heard, and the anvil starts to ring in tune with it.",
        "Hilde stops. Listens. Then, very quietly, she starts striking on the beat.",
        "@hilde:blush ...My ma used to sing at her workbench. Never let anyone hear it but me.",
        "@maud:happy Then sing it now, Mistress! Mercy loves a duet!",
        "So the dwarf and the nun sing an old dwarven work-song together, very badly in two different keys, and Mercy comes out of the quench gleaming like the day she was made.",
        "@hilde:smug Finest piece I've ever fixed. Don't tell her. She'll get vain.",
      ],
      affTo: { maud: 5, hilde: 5 },
      end: true,
    },
    foot: {
      text: [
        "@you Here. I'll hold her.",
        "You take Mercy by the haft and lift her onto the anvil. You get her about halfway. Then she decides she'd rather be on your foot.",
        "Hilde catches the hammer one-handed an inch before impact, grunting. Maud catches *you* with the other hand.",
        "@hilde:angry Gods below! It's a *hammer*, not a *hat!*",
        "@maud:happy HA-HAAA! She likes you! She only drops herself on people she *likes!*",
        "Hilde fixes the dent while Maud sings to it, loudly, and you sit on an upturned bucket with your toes tingling. By the end, Hilde is muttering the chorus under her breath. She'll deny it.",
      ],
      affTo: { maud: 3, hilde: 2 },
      end: true,
    },
    sing: {
      text: [
        "@you Hilde. Just let her sing. Your forge won't fall down.",
        "@hilde:angry ...It might. Have you *heard* her?",
        "Maud sings. The forge does not fall down. It does, however, ring. Every hanging blade on the walls starts to hum along with her, a choir of steel, and Hilde stops working and stands very still, her tongs in the air.",
        "@hilde:surprised ...The tempering's taking better. The *tempering's* taking better. That shouldn't be — that's not how metal *works* —",
        "@maud:smug It's how *love* works. Mercy's been sung to every night for twenty years.",
        "Maud picks up the sketchbook while Hilde's distracted, closes it gently without looking at the page, and puts it back on the bench.",
        "@maud:blush Very beautiful work, Mistress. All of it. You ought to make some of it one day.",
        "Hilde doesn't answer. But she doesn't throw anything, either.",
      ],
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Pell & Amorette */
  xover('x_pell_amorette', ['pell', 'amorette'], { loc: 'temple', slots: [2], day: 15 }, {
    start: {
      text: [
        "The temple is almost empty this evening. A hooded figure is creeping up the aisle towards the altar of the Goddess of Love, holding a thick stack of paper tied with ribbon.",
        "It's Pell. She lays the manuscript on the altar, steps back, clasps her hands and whispers:",
        "@pell:sad ...Please. I'm stuck on chapter twelve. The Duke is at the door, and I don't know what he says. I've been stuck for three weeks. If anyone up there is... listening...",
        "@amorette:happy *Always*, darling.",
        "Pell screams. It's a very small scream, more of a squeak, but it echoes. Amorette is sitting on the altar steps with a bowl of popcorn and the manuscript already open in her lap.",
        { if: { stage: 3, who: 'pell' }, text: "@amorette:surprised Wait. Wait, wait, *wait.* This handwriting. *You're Lady Velvet Ink!* You wrote *The Duke's Forbidden Passion!* I've read volume nine *eleven times!* I narrated a man *proposing* while I read it, and I *wasn't even paying attention!*", else: "@amorette:surprised Wait. Wait, wait, *wait.* Is that a *manuscript?* A romance? With a *duke* at the *door?* Oh, I *love* a duke at a door. I once narrated a man *proposing* while I read one, and I *wasn't even paying attention!*" },
        "@pell:blush I — you — the — Goddess — I —",
        "@amorette:smug *Pell blushed the color of a ripe pomegranate. She had come to the temple for help, and help, at last, had come to her: radiant, divine, and quite extraordinarily well-dressed.*",
        "@pell:surprised ...Are you... *narrating* me?",
        "@amorette:happy It's a habit! I'll help with chapter twelve! The Duke's at the door? Easy. He kicks it in. There's only one bed. It's raining. A horse has died, symbolically —",
        "Pell has slid down behind the nearest pew. Only her eyes are showing.",
        { if: { devoted: 'pell' }, text: "@amorette:smug Oh, and darling, I know who the mysterious stranger in chapter eleven is based on. They're standing *right* behind you." },
      ],
      choices: [
        { text: "\"Amorette, let Pell narrate *you*, for once.\" [Charm check 3]", check: { stat: 'charm', dc: 3 }, pass: "narrate", fail: "ellipses" },
        { text: "Sit down and read chapter twelve together, the three of you.", go: "read", affTo: { pell: 5, amorette: 3 } },
      ],
    },
    narrate: {
      text: [
        "@you Amorette, you've narrated everyone in this town. Let Pell narrate *you.* Just once.",
        "Amorette blinks. Then she sets down the popcorn and sits up very straight, delighted.",
        "@amorette:happy Oh! Oh, *yes.* Nobody's ever narrated me. Go on, darling. Do your worst.",
        "Pell creeps out from behind the pew. She clears her throat. Her voice comes out as a whisper, and then, slowly, it doesn't.",
        "@pell *The goddess had told eleven million love stories, and not one of them was hers. She sat at the edge of every wedding and laughed in the right places, and went home alone, and nobody ever noticed, because she was very good at being the one who watches.*",
        "@pell *Then, one evening, somebody turned around in the pew, and looked straight at her.*",
        "The temple is completely silent.",
        "Amorette has stopped smiling. Her golden eyes are very bright. The Narrator of Clichéton, for once, appears to have run out of words.",
        "@amorette:blush ...Oh. Oh, that's *good.* That's *too* good. You can't just *do* that to a person.",
        "@pell:blush ...S-sorry.",
        "@amorette:happy Don't you *dare* be sorry. *That's* your chapter twelve. The Duke doesn't kick the door in. He *knocks.* Write that.",
        "Pell goes home and writes it. It's the best chapter she has ever written. When the book comes out, the dedication page reads only: *For the one who watches.*",
      ],
      affTo: { pell: 6, amorette: 6 },
      end: true,
    },
    ellipses: {
      text: [
        "@you Pell, why don't you narrate *her?*",
        "Pell creeps out from behind the pew, clears her throat and whispers.",
        "@pell *The goddess... um. She was... there. On the steps. With... popcorn. Which was... salted.*",
        "There is a long pause.",
        "@amorette:happy *Riveting!* I'm hooked! What happens next? Does the popcorn *betray* her?",
        "@pell:blush ...I... haven't decided.",
        "They spend the next hour on the altar steps writing chapter twelve together, which is mostly Amorette suggesting dead horses and Pell, very quietly and firmly, crossing them out.",
      ],
      affTo: { pell: 3, amorette: 3 },
      end: true,
    },
    read: {
      text: [
        "You sit down on the steps on Pell's other side, and the three of you read chapter twelve by candlelight, all eleven unfinished pages.",
        "The Duke, it turns out, has a mysterious companion. The companion has your hair. And your habit of humming. And, on page six, your exact way of saying *hello* when you come into the library.",
        "@pell:blush ...It's a *composite.* It's *fiction.* Any resemblance to persons living is entirely —",
        "@amorette:smug *— entirely on purpose.* Oh, darling. I'd know. I invented the device.",
        "Amorette eats her popcorn with enormous satisfaction. You turn the page. Pell slowly sinks lower and lower behind her hood, until only her ears are showing, and her ears are pink.",
      ],
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Vespera & Lilette */
  xover('x_vespera_lilette', ['vespera', 'lilette'], { loc: 'noble', slots: [1] }, {
    start: {
      text: [
        "In a quiet corner of the Noble Quarter, Lilette is standing in front of a marble statue of a duke, staring at it with tremendous effort.",
        "@lilette:angry Smoulder. *Smoulder.* Smoulder, Lilette —",
        "She looks like she's trying to remember where she left her keys. The statue looks unconvinced.",
        "Vespera, passing with an armful of books, stops, watches for ten seconds, and puts the books down.",
        "@vespera You're doing it wrong.",
        "@lilette:surprised *Eep!* Who — I — I'm studying! For my exam! At the Infernal Academy! It's *Smouldering Glances*, the practical, and I got a D-minus last time, and if I fail again they'll make me retake *first year!*",
        "@vespera:smug I've read three treatises on the Glance. Ophrenius, Malvoisin, and a very silly one by a duke. Your eyebrows are doing all the work. The eyebrows are a *supporting* muscle.",
        "@lilette:sad Nobody *told* me the eyebrows were supporting!",
        "@vespera:happy Right. Contest. Best of three Glances. Highest smoulder wins. You need practice, I need to win something before lunch. {name} judges.",
        "@vespera_footnote MARKED.",
        "Before you can object, both of them turn and fix you with their very best smoulder.",
        "Vespera's is fierce, focused and slightly alarming, like being looked at by an exam result. Lilette's looks as though she is about to sneeze, and then, halfway through, she does.",
      ],
      choices: [
        { text: "\"Vespera wins. That was terrifying. In a good way.\"", go: "vespera", affTo: { vespera: 5, lilette: -2 } },
        { text: "\"Lilette wins. That was the cutest sneeze I've ever been smouldered with.\"", go: "lilette", affTo: { lilette: 6, vespera: -2 } },
        { text: "Tell them the truth: they both look like they're about to sneeze. [Charm check 2]", check: { stat: 'charm', dc: 2 }, pass: "truth", fail: "hedge" },
      ],
    },
    vespera: {
      text: [
        "@vespera:happy *Ha!* Point! Footnote — the minutes!",
        "@vespera_footnote POINT.",
        "@lilette:sad D-minus. Again. I'm going to be a first-year *forever.* I'll be the oldest first-year in the Abyss. They'll put up a *plaque.*",
        "Vespera looks at her for a moment. Then she sighs and sits down on the statue's plinth.",
        "@vespera:smug Fine. Sit. You're getting a tutoring session. I'm not doing it to be *nice.* I'm doing it because I refuse to have beaten a rival who isn't *any good.* Eyebrows down. Chin up. Think about something you want.",
        "Lilette thinks about something she wants. She glances at you. Her face goes pink, then deep red, then, very briefly, smouldering.",
        "@vespera:surprised ...Oh. Well. That'll do it.",
      ],
      end: true,
    },
    lilette: {
      text: [
        "@lilette:surprised I — I won? *I won?* I've never won *anything!* Not even the raffle! I won the raffle once and it was a *mistake!*",
        "@vespera:angry A *sneeze* beat me? I lost to an *involuntary bodily function?* Footnote, are you *writing this down?*",
        "@vespera_footnote POINT.",
        "@vespera:angry *Not for her!*",
        "@lilette:blush ...You thought it was cute?",
        "@you Very.",
        "Lilette's tail curls up into a perfect little heart, all by itself, and she slaps both hands over it.",
        "@vespera:sad ...Rematch. Next Tuesday. Best of *ninety-nine.*",
      ],
      end: true,
    },
    truth: {
      text: [
        "@you Honestly? You both look like you're about to sneeze.",
        "There's a pause. Then Lilette giggles. Then Vespera snorts, which she clearly didn't mean to, and then they're both laughing helplessly against the statue.",
        "And while she's laughing, Lilette looks up at you through her lashes, flushed and bright-eyed and completely forgetting to try, and it *smoulders.* It properly smoulders. The air goes warm. A nearby rosebush blooms.",
        "Vespera stops laughing and grabs her notebook.",
        "@vespera:surprised Did you *see* that? She did it *while laughing!* Hypothesis: smouldering is a side effect of *joy*, not of effort! Ophrenius was *wrong!* I've got to write to someone!",
        "@lilette:surprised ...I did it? I *did* it? *I did the thing!* I need to sit down!",
        "She sits down. Vespera sits down next to her, already scribbling.",
        "@vespera:smug Study group. Thursdays. You're my control subject. Don't argue, I've already written it in.",
        "@lilette:happy I've never been in a study group! I've never been in *any* group!",
      ],
      affTo: { vespera: 5, lilette: 6 },
      end: true,
    },
    hedge: {
      text: [
        "@you You both look like — well — um —",
        "They both lean in to hear, still smouldering at full intensity. It's a lot. You step backwards, catch your heel on the edge of the path, and fall into a hedge.",
        "@lilette:surprised Oh no! Oh no, did I do that? Did my *Glance* do that?",
        "@vespera:happy *Our* Glance did that! Combined! Footnote, record: *subject felled by joint smoulder at four paces!*",
        "@lilette:happy We *felled* someone! The Academy will never believe me!",
        "They help you out of the hedge together, beaming. You have leaves in places leaves should not be.",
      ],
      affTo: { vespera: 3, lilette: 3 },
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Sigrun & Brakka */
  xover('x_sigrun_brakka', ['sigrun', 'brakka'], { loc: 'arena', slots: [0], day: 6 }, {
    start: {
      text: [
        "There's a broken table in the middle of the arena sand. Then a second broken table. Brakka and Sigrun are kneeling on either side of a third one, a solid oak bench three hands thick, elbows down, palms locked.",
        "@brakka:happy VALKYRIE! Brakka has dreamed of this since Brakka was tiny! In Ironjaw clan, great warriors who fall in battle are carried away by the Sky-Women to the Feast that Never Ends!",
        "@sigrun:happy An orc who knows her *afterlife!* Your clan has excellent theology! A NINE!",
        "@brakka:smug Brakka does not want to be carried yet. Brakka wants to *beat* the Sky-Woman first. Then be carried. Much later. After lunch.",
        "@sigrun:happy THAT is the right attitude!",
        "Neither arm moves. The bench groans. Sparks of blue lightning are crackling down Sigrun's forearm, and every hair on Brakka's head is standing straight up.",
        "@brakka:happy Brakka's hair is *fizzing!* Brakka feels *wonderful!*",
        "They both spot you at the edge of the sand.",
        "@sigrun:smug Little warrior! We have agreed on a prize! The winner gets to *carry you!*",
        "@brakka:happy Brakka carries you to the feast!",
        "@sigrun:happy I carry you to the *Hall!* Eventually! Not today! Probably!",
      ],
      choices: [
        { text: "Slap your own hand on top and make it a three-way. [Might check 3]", check: { stat: 'might', dc: 3 }, pass: "three", fail: "trough" },
        { text: "Cheer for Brakka.", go: "brakka", affTo: { brakka: 6, sigrun: 3 } },
        { text: "Cheer for Sigrun.", go: "sigrun", affTo: { sigrun: 6, brakka: 3 } },
      ],
    },
    three: {
      text: [
        "You kneel at the end of the bench and clamp your hand down on top of theirs.",
        "For a moment it's like holding onto a landslide and a thunderstorm at once. Your teeth rattle. Your shoulder screams. Your hair stands straight up, too. But you hold. One second. Two. *Three.*",
        "Then the bench explodes, and all three of you go over backwards into the sand.",
        "@brakka:surprised Tiny human held for *three seconds!* Against Brakka *and* Sky-Woman!",
        "@sigrun:happy THREE SECONDS! Do you know how many mortals have lasted three seconds against a valkyrie? I do! It is *one!* It is *you!*",
        { if: 'sigrun_score', text: "@sigrun:happy Your Glory Score is now *six!* SIX! I am going to write to my sisters!" },
        "@brakka:smug Nobody won. So *everybody* carries.",
        "Which is how you end up being carried around the arena on the shoulders of an orc and a valkyrie, to the confused applause of the morning trainees, while they argue cheerfully about which of them is holding more of you.",
      ],
      affTo: { sigrun: 5, brakka: 5 },
      end: true,
    },
    trough: {
      text: [
        "You kneel at the end of the bench and clamp your hand on top of theirs. For about half a second, it's fine.",
        "Then you leave the ground.",
        "You fly the full length of the training yard, clear the fence and land with a tremendous splash in the water trough. The same water trough. A certain lady knight once fell into it, and nobody has let her forget it since.",
        "@brakka:happy TINY HUMAN FLIES! Brakka did not know tiny human could fly!",
        "@sigrun:smug The landing was poor. The *flight* was a seven.",
        "They abandon the bench and fish you out together, each holding one arm, and dry you off with Sigrun's wings, which are warm and enormous and smell faintly of thunder.",
      ],
      affTo: { sigrun: 3, brakka: 3 },
      end: true,
    },
    brakka: {
      text: [
        "@you Come on, Brakka! Ironjaw! *IRONJAW!*",
        "Brakka roars, digs her knees into the sand and *pushes.* Slowly, impossibly, Sigrun's arm starts to tip, and then goes down with a crack that splits the bench in two.",
        "Sigrun gazes at her own hand as though it belongs to someone else. Then she laughs so loudly it echoes off the arena walls.",
        "@sigrun:happy I have been *beaten!* By a living hand! In a thousand years! My sisters will be *furious!* I cannot *wait* to tell them!",
        "@brakka:blush Brakka beat Sky-Woman... Brakka will be in songs.",
        "@sigrun:happy *All* the songs! When you fall, Ironjaw, I will carry you myself! In about eighty years! I am booking you *now!*",
        "Brakka carries you to the tavern for a victory lunch, at a run. Sigrun flies overhead the whole way, shouting the score at strangers.",
      ],
      end: true,
    },
    sigrun: {
      text: [
        "@you Go on, Sigrun! For the Hall!",
        "Sigrun's eyes flash white. A bolt of lightning cracks out of a clear sky, hits the bench, and Brakka's arm goes down in a shower of smoking splinters.",
        "Brakka sits back on her heels. Her hair is standing straight up in a smoking crest. Her eyebrows are mostly gone.",
        "@brakka:surprised ...Brakka has been struck by lightning.",
        "@brakka:happy Brakka feels *GREAT!* Again! Do again!",
        "@sigrun:happy Ha! I *like* you, orc! When you fall, I will carry you myself! Not soon! I have checked! You have *decades!*",
        "Sigrun scoops you up, as agreed, and carries you three times round the arena at a height of about forty feet. You'd like to say you didn't scream. You did, a bit.",
      ],
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Kohana & Kit */
  xover('x_kohana_kit', ['kohana', 'kit'], { loc: 'market', slots: [0] }, {
    start: {
      text: [
        "Kit is perched on top of the fish stall, grooming one hand and looking pleased with herself. It's a bright, sunny morning. Everything on Market Street has a crisp black shadow, except for Kit.",
        "@kit:happy Heya! Guess what I stole today! Go on, guess!",
        "@you Kit... where's your shadow?",
        "@kit:surprised My what?",
        "She looks down. There's nothing on the cobbles beneath her but sunlight. She leaps up, spins around twice, checks behind her, under the stall and inside a bucket.",
        "@kit:angry My *shadow's gone!* Somebody *stole my shadow!* How do you even *steal* a — oh, I'm going to *kill* — I *want* to know how —",
        "Across the street, leaning against a lamppost, is Kohana. Her own shadow stretches out beside her on the cobbles: a perfectly ordinary fox-woman's shadow. And curled up at its feet, washing behind one ear, is a second, cat-shaped one.",
        "It is purring. You can *hear* it purring.",
        "@kohana:smug Mm-hm-hm. Good morning, kitten. You're very hard to steal from, you know. It took me *six attempts.*",
        "@kit:angry *YOU!*",
        "@kohana:happy It's been with me for a whole week. It follows me everywhere. It sleeps on my feet. It is *much* better behaved than you are.",
      ],
      choices: [
        { text: "Help Kit out-trick the trickster: a bet she can't refuse. [Wits check 3]", check: { stat: 'wits', dc: 3 }, pass: "bet", fail: "chase" },
        { text: "\"Kohana. Give it back. Look at her.\"", go: "back", affTo: { kit: 6, kohana: 2 } },
      ],
    },
    bet: {
      text: [
        "@you Kohana. Bet you can't guess what Kit's going to steal next.",
        "@kohana:smug Dumpling, I'm four hundred years old. I can guess what *anyone's* going to —",
        "Kit's hand blurs. Kohana stops talking, looks down at her throat and goes very still. The little brass shrine bell that lives there is gone.",
        "@kit:smug Nyahaha! Looking for *this?*",
        "Kit dangles the bell from one claw. It sways. It doesn't ring.",
        "@kohana:surprised ...That's. That's *mine.* Nobody's touched that in *centuries.*",
        "@kit:happy Shadow for a bell. Fair trade?",
        "Kohana's tails go very still. Then she laughs, a real one.",
        "@kohana:blush ...You're very good, kitten. I mean that.",
        "In Kit's hand, the bell goes *ting.*",
        "@kohana:angry Oh, the *snitch.*",
        "The trade is made. Kit's shadow streaks back across the street and wraps around her ankles like a lost pet. Then the two of them go off together to plan something, and the next morning every shop sign on Market Street has been swapped with the one next door.",
      ],
      affTo: { kit: 6, kohana: 6 },
      end: true,
    },
    chase: {
      text: [
        "@you Kit, here's the plan. You go left, I'll go —",
        "Kit is already gone. She's across the street in one leap, pouncing on her own shadow, which is delighted to see her and immediately runs away.",
        "Kit chases her shadow up the lamppost. The shadow chases Kohana. Kohana runs off up the street, laughing, and Kit chases both of them across the rooftops of half the town.",
        "An hour later, Kit comes back, panting, with her shadow tucked firmly under one arm like a kitten. It's very hard to look at.",
        "@kit:smug Got it back! She let me. I *think* she let me. I'm going to pretend she didn't let me.",
        "Somewhere on a rooftop, very far off, a fox laughs.",
      ],
      affTo: { kit: 3, kohana: 3 },
      end: true,
    },
    back: {
      text: [
        "@you Kohana. Give it back. Look at her.",
        "Kohana looks. Kit's ears are flat. Her tail has gone limp. She's still trying to look furious, but her lip is wobbling slightly.",
        "@kit:sad ...I didn't even *notice.* For a whole *week.* What kind of a thief doesn't notice her own *shadow?*",
        "Kohana's smile falters. She crouches down and gently nudges the purring shadow back across the cobbles. It flows over to Kit and curls happily around her feet, and Kit lets out a long, shaky breath.",
        "@kohana:sad ...I only borrowed it because it was nice. To have something following me around that *wanted* to.",
        "@kit:surprised ...Oh.",
        "Kit thinks about this. Then she scoots over on the fish stall to make room.",
        "@kit:happy You can sit with me if you want. Me *and* my shadow. We're good company.",
      ],
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Lyra & Ophelia */
  xover('x_lyra_ophelia', ['lyra', 'ophelia'], { loc: 'manor', slots: [2] }, {
    start: {
      text: [
        "There's music coming from Hollowmere Manor. Minor key. Lots of it.",
        "Inside, in the dusty ballroom, Lyra is sitting on the bottom step of the grand staircase with Margery, and Ophelia is floating halfway up it, listening with the critical air of a woman who has been dead for two centuries and has *opinions.*",
        "@lyra:smug *Ohhh, the lady on the stair, with the moonlight in her hair, / she waited and she waited till the dawn —*",
        "@ophelia:angry No. *No.* There was no moonlight. It was *raining.* And it wasn't *hair*, it was a very complicated *headdress.* With *feathers.* Honestly, if you're going to write a ballad about my death, at least get the *millinery* right.",
        "@lyra:surprised *Feathers.* Got it. Darling, that's *gold.*",
        "She sees you in the doorway and waves Margery at you.",
        "@lyra:happy {name}! I'm writing a gothic ballad! *The Lady of Hollowmere!* My first ever tragedy! I've done dozens of drinking songs and over two hundred love songs, and *zero* tragedies. It's a gap in my portfolio.",
        "@ophelia:smug She's very bad at it. She keeps trying to make it *uplifting.* She put in a *key change.*",
        "@lyra:sad People *like* key changes!",
        "@ophelia:angry I fell down a *staircase*, Lyra.",
      ],
      choices: [
        { text: "\"Ophelia, you're the expert on dying tragically. Co-write it.\"", go: "cowrite", affTo: { ophelia: 6, lyra: 4 } },
        { text: "Suggest the ballad needs an ending the story never had. [Charm check 3]", check: { stat: 'charm', dc: 3 }, pass: "ending", fail: "wail" },
      ],
    },
    cowrite: {
      text: [
        "@you Ophelia's the expert. Make her your co-writer.",
        "Ophelia floats down three steps in astonishment.",
        "@ophelia:surprised A *co-writer?* Me? On a *ballad?* I've had nothing to *do* for two hundred years!",
        "@lyra:happy Splendid! Take a verse. Any verse.",
        "Ophelia takes the third verse. Then the fourth. Then all of them. It turns out that two hundred years of brooding has left her with a truly extraordinary vocabulary of despair. Lyra is scribbling as fast as she can.",
        "@ophelia:smug *And the candles guttered low, as the clock struck six-and-woe —*",
        "@lyra:surprised Six-and-woe isn't a *time.*",
        "@ophelia:smug It is in *gothic.*",
        "The finished ballad is nineteen verses long and has no key change. Lyra performs it at the Tipsy Wyvern the following week. Grown sailors weep into their rum. Bettina has to shut the bar early. Ophelia hears about it from you and floats in a pleased little circle for an hour.",
      ],
      end: true,
    },
    ending: {
      text: [
        "@you Every verse is about the waiting. What if the last one isn't?",
        "@lyra:surprised ...Go on.",
        "@you The story stops on the stair. Two hundred years. But a ballad doesn't have to. Give her the dance she never got. In the last verse.",
        "Ophelia goes very quiet. Lyra looks up at her, and for once doesn't reach for a joke.",
        "@lyra Would you like that? It's your story. I won't write it if you don't want it.",
        "@ophelia:sad ...I would like that very much.",
        "So Lyra writes the last verse there and then, on the staircase, and plays it. In it, the lady on the stair hears footsteps, finally, and turns, and it doesn't say who, and it doesn't need to.",
        "When it's done, Ophelia is crying silver tears that vanish before they reach the floor.",
        "@ophelia:blush ...You put in a key change.",
        "@lyra:blush I did. Just the one. Right at the end.",
        "@ophelia:happy ...It was *perfect.*",
      ],
      affTo: { ophelia: 6, lyra: 6 },
      end: true,
    },
    wail: {
      text: [
        "@you What if it had a... happier...",
        "@ophelia:angry *Happier?* Don't you start!",
        "She lets out an enormous, furious wail. Every window in the ballroom rattles. Lyra's hat feather stands straight up.",
        "Lyra listens with her head tilted. Then she grabs Margery and starts playing along, perfectly, in harmony.",
        "@lyra:happy Oh, *that's* the sound! Do that again! That's not a wail, darling, that's a *hook!*",
        "@ophelia:surprised ...You want me to wail? *On purpose?* Nobody has ever *wanted* me to wail!",
        "She wails. Lyra plays. By midnight they've got a chorus that's terrifying, haunting and, against all the odds, rather catchy.",
      ],
      affTo: { ophelia: 3, lyra: 3 },
      end: true,
    },
  });

  /* ------------------------------------------------------------------ Hikari & Sigrun */
  xover('x_hikari_sigrun', ['hikari', 'sigrun'], { loc: 'square', slots: [1], day: 6 }, {
    start: {
      text: [
        "A crowd has gathered around the fountain, where Hikari is on her knees in front of Sigrun Stormbrand, holding up her dented sword in both hands like an offering.",
        "@hikari:surprised A *valkyrie!* A real one! *This is the goddess scene!* This is where the goddess appears and grants me my cheat skill! I've been waiting *six months!*",
        "@sigrun:surprised I am not a goddess. I am a *shieldmaiden.* I judge the *dead.*",
        "@hikari:happy *Perfect!* I *am* dead! Sort of! I died in my old world and got reincarnated here! Judge me!",
        "Sigrun's eyes crackle blue-white, like a storm deciding where to land.",
        "@sigrun:happy You have *died?* Already? Tell me *everything!* How? Where? Was there a bridge? Were there *six hundred men?*",
        "@hikari ...Ox cart.",
        "There's a pause.",
        "@hikari On my way to work. I was looking at my... at a little glowing box. The ox wasn't looking either.",
        "Sigrun's face goes through several emotions, each one sadder than the last.",
        "@sigrun:sad ...A *two.* I am so sorry. It is a two.",
        "@hikari:sad *A two?!*",
        "She looks as though she's about to cry. Her sword is wobbling. She turns to you.",
      ],
      choices: [
        { text: "\"Tell her about your life before the ox cart, Hikari. All of it.\"", go: "before", affTo: { hikari: 6, sigrun: 4 } },
        { text: "\"Sigrun, she's not finished yet. Judge the *living* hero.\" [Might check 2]", check: { stat: 'might', dc: 2 }, pass: "spar", fail: "slime" },
      ],
    },
    before: {
      text: [
        "@you Hikari. Tell her about before. The job.",
        "@hikari:sad ...I made spreadsheets. Eleven hours a day. Six days a week. For six years. Every morning at five, I took the same crowded cart into the city. Every night, I took it home. I never once told my boss what I thought of him.",
        "Sigrun has gone completely still.",
        "@sigrun:surprised ...Six *years?* Eleven hours a *day?* Holding a desk against the endless, grinding foe? Never once breaking? Never fleeing?",
        "@hikari ...I mean. It was a pretty bad desk.",
        "@sigrun:happy That is not a *life*, that is a *SIEGE!* You held the line for *six years!* And then, at the end, the gods sent a *beast* to take you! An *ox!* The ancient symbol of *toil!*",
        "@sigrun:happy That is a NINE! It is a *nine!*",
        "@hikari:surprised ...A *nine?* I got a *NINE?*",
        "@hikari:happy *STATUS OPEN!* Did everyone hear that? *A NINE!*",
        "She rushes off to tell the whole Guild. Sigrun watches her go, very satisfied.",
        "@sigrun:blush ...I may have rounded up. Do not tell her. She needed the extra point more than the Hall does.",
      ],
      end: true,
    },
    spar: {
      text: [
        "@you She's not done yet. Come on, Hikari. Show her.",
        "You pull Hikari to her feet and back her up while she squares off against the valkyrie. She shouts the name of her special move. You shout it with her. She swings. Sigrun parries, easily, and the force of it sends Hikari spinning in a perfect, accidental pirouette that brings her sword round again into Sigrun's shield with a *clang* that echoes round the square.",
        "The crowd cheers. Sigrun lowers the shield and looks at the fresh dent in it with enormous pride.",
        "@sigrun:happy *HA!* You dented my *shield!* Nobody has dented it since the Siege of Grimhold!",
        "@hikari:surprised I... I did a *special move?* Did you see? That was my *cheat skill!*",
        "@sigrun:happy An *eight!* Not for the death. For the *life!* Live more like that, little hero!",
        "Hikari doesn't stop smiling for three days.",
      ],
      affTo: { hikari: 6, sigrun: 5 },
      end: true,
    },
    slime: {
      text: [
        "@you She's not done yet. Come on, Hikari, show her!",
        "Hikari leaps to her feet, shouts *ULTIMATE HEAVENLY SLASH!*, charges, slips on a wet cobble by the fountain and goes face-first into the water.",
        "She surfaces with a lily pad on her head.",
        "@sigrun:sad ...A three.",
        "@hikari:sad *It went UP!* It went up by one!",
        "@sigrun:happy It did! Because you *got up!* Again! Always get up! That is the whole secret!",
        "She hauls Hikari out of the fountain, one-handed, and sets her on her feet, and they go off together to find something to fight that isn't you.",
      ],
      affTo: { hikari: 3, sigrun: 3 },
      end: true,
    },
  });
})();
