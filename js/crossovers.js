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
        "There's a stunned pause. Then Valeria starts laughing so hard she has to lean on her carriage, and Celestine is apologizing so fast the words blur together, and you are standing in a puddle, blessed to the bone.",
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
        "Brakka throws back her head and laughs. Brunhild, after a moment, laughs too, which is very much against tenet forty-three.",
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
        "Brakka roars in triumph and lifts her axe to the crowd. Brunhild stares at you, betrayed, then goes very red.",
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
        "@pell:surprised Sh-she's reading my book. The *archmage* is reading my book. She's nine hundred years old. She's going to think it's *terrible.*",
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
        "@pell:blush M-Madam Elderleaf. I'm — I — the author of that — I'm —",
        "Sylvaine looks up. Her ancient eyes widen.",
        "@sylvaine:surprised You're *Lady Velvet Ink?* Oh, my dear girl. I have every volume. I've read Chapter Nine twelve times.",
        "Pell makes a noise like a mouse being stepped on.",
        "@sylvaine:smug Your elven historical detail is atrocious, of course. Elves didn't have *corsets* in the Third Age. But the *passion.* Oh, the passion is quite accurate. I'd know.",
        "They spend the whole morning in the reading nook, Sylvaine correcting Pell's elven history and Pell, scarlet, taking notes on things that aren't history at all.",
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
        "When Pell comes to, an archmage is fanning her with a signed copy of her own book, asking very politely for an autograph.",
      ],
      affTo: { pell: 6, sylvaine: 5 },
      end: true,
    },
    oops: {
      text: [
        "@you So! Is the book... good? Or is it bad? Pell thinks — I mean — some people think —",
        "Sylvaine's eyes slide from you to the bookshelf, where Pell is visibly dying.",
        "@sylvaine:smug It's very good. Tell your friend behind the shelf that I'd love her autograph.",
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
        "@mira:smug There. Your status. In *writing.* Laminated. Happy?",
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
        "Rosalind looks at Aurelia for a long moment. Then she snaps her fan shut and raises her voice.",
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
        "@you Lord Pomfrey has a vault full of things he stole from half the town.",
        "Shade and Kit look at each other for a very long moment.",
        "@kit:happy ...Heist?",
        "@shade:smug ...Heist.",
        "The Pomfrey vault is emptied that night, so cleanly no one hears a thing. Every item finds its way back to its rightful owner by morning. Kit is unbearably smug about it. Shade allows herself one very small smile.",
      ],
      affTo: { shade: 5, kit: 6 },
      end: true,
    },
    race: {
      text: [
        "@you Why don't you settle it with a race? First one to the clocktower keeps — ",
        "They're gone before you finish the sentence. Over the rooftops, across the market, up the bell tower. Shade wins by half a second. Kit claims she let her win. Shade says, flatly, \"You did not.\"",
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
        "@ophelia:smug Valeria has been visiting once a decade to complain about her neighbors. We're *undead tea club.* It's very exclusive. You have a pulse, you see.",
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
        "@marigold:happy — and I only followed them *twice* this week, which is down from eleven, and I didn't sharpen anything when they talked to the baker, even though she *laughed* at their joke, and it wasn't even a *good* joke —",
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
        "Marigold stares at you. Her eyes fill.",
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
})();
