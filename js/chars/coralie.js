FL.addSpeaker('seaking', 'The Sea King', '#3aa7c9');

FL.addCharacter({
  id: 'coralie',
  name: 'Princess Coralie',
  short: 'Coralie',
  trope: 'Curious Mermaid Princess',
  color: '#4fd1c5',
  favStat: 'charm',
  endingTitle: 'Between the Tides',
  teaser: 'On the harbor rocks, something with a shimmering turquoise tail is examining a seagull with intense fascination.',
  blurb: 'The youngest daughter of the Sea King, utterly obsessed with the surface world. She has a grotto full of human junk she\'s found on shipwrecks and a lot of very wrong ideas about what it\'s all for. Sweet, wide-eyed, and endlessly delighted by everything. Forbidden to visit the land. Visits anyway.',
  schedule: ['docks', 'docks', null],
  gifts: { love: ['fork', 'comb'], like: ['mirror', 'plushie', 'gem', 'cakes'], hate: ['fish'] },
  giftLines: {
    love: ['She gasps so loudly that a gull falls off a piling.', '@coralie A *dinglehopper!* A real one! And it\'s so shiny! The surface people use them to comb their hair, you know. I\'m an expert.', 'She immediately starts combing her hair with it. You decide not to correct her.'],
    like: '@coralie Ooooh! What is it? What does it do? Can I keep it? I\'m going to put it in my grotto with all my treasures!',
    neutral: '@coralie Oh, a surface thing! I don\'t know what it is but I love it! Probably! Is it a hat?',
    hate: ['She stares at the fish in horror. The fish stares back.', '@coralie *Gerald?!* — oh, no, not Gerald, but — that could have been someone\'s *Gerald!* How could you?!', 'She gently releases it into the sea and glares at you.'],
  },
  talk: [
    ['@coralie I saw a horse today! A real one! It has four legs! FOUR! You only have two! Is the horse better than you? You can tell me.'],
    ['@coralie What\'s "fire"? Daddy says it\'s dangerous. I put my hand in a candle once. It was *very* educational.'],
    ['@coralie Mermaids don\'t have feet. What\'s it like? Having feet? Do they get lonely down there, so far away from your face?'],
    ['She\'s sitting on the rocks, braiding seaweed into her long teal hair.', '@coralie My sisters think I\'m silly for loving the surface. But up here there\'s *sky!* It\'s like the sea, but you can\'t swim in it! It\'s so wasteful! I love it!'],
    ['@coralie I found a thing on a shipwreck. It\'s a box with a little handle. When you turn the handle, it plays music. I think it\'s a baby. I\'m raising it.'],
    ['@coralie Daddy says humans are dangerous. You\'re not dangerous. You\'re *nice.* Daddy\'s never met you. I\'m going to tell him all about you! ...Maybe not *all* about you.'],
  ],
  afterTalk: [
    ["@coralie My sisters noticed I'm pink all the time now. They asked who the lucky merman was. I said, \"It's not a merman, it's a HUMAN, and they have KNEES!\" They fainted."],
    ["She tucks a pearl into your pocket.", "@coralie That means \"come to the grotto tonight.\" In mermaid. We have a whole language of shells and pearls. I'm going to teach you all of it. The *naughty* ones first."],
    ["@coralie I tried to explain last night to a seagull. It didn't understand. I don't think seagulls have romance. That's very sad for seagulls."],
    ["@coralie I've decided my favorite surface thing isn't forks anymore. Or horses. It's you. Specifically, the dips. The little dips."],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'Out on the black rocks at the edge of Saltbreeze Harbor, half-hidden by sea spray, there\'s a girl sunbathing. Long teal hair spilling down her back, skin dappled with tiny glittering scales at her shoulders and collarbone, and — where her legs should be — a long, gleaming turquoise tail, its fins trailing in the waves.',
          'She\'s holding a rusty spyglass to her eye. Backwards. Pointing it at a seagull.',
          'She lowers it, sees you, and shrieks.',
          '@coralie AH! A HUMAN! You didn\'t see me! I\'m not here! I\'m a — I\'m a *rock!* I\'m a very pretty rock!',
          'She freezes completely still, eyes squeezed shut.',
        ],
        aff: 10,
        choices: [
          { text: '"That\'s the prettiest rock I\'ve ever seen." [Charm check 1]', check: { stat: 'charm', dc: 1 }, pass: 'rock_win', fail: 'rock_fail' },
          { text: 'Sit down on the rocks a little way away, so you don\'t scare her.', go: 'sit' },
          { text: '"You\'re holding that spyglass backwards."', go: 'spyglass' },
        ],
      },
      rock_win: {
        text: [
          'One eye pops open.',
          '@coralie ...Really? The *prettiest?*',
          '@you By far.',
          'She giggles, delighted, and forgets to be a rock entirely.',
          '@coralie Nobody\'s ever called me a pretty rock before! My sisters just call me "Coral, stop that."',
        ],
        aff: 6,
        next: 'name',
      },
      rock_fail: {
        text: [
          '@you Nice... rock... shape.',
          '@coralie Thank you! I practice!',
          'She stays frozen another full minute before she finally gives up and opens her eyes.',
        ],
        aff: 3,
        next: 'name',
      },
      sit: {
        text: [
          'You sit down slowly a few rocks away and look out at the sea. After a minute, you hear a cautious splash. Then another. When you glance over, she\'s much closer, peering at you over a boulder.',
          '@coralie ...You\'re not going to catch me in a net?',
          '@you Nope.',
          '@coralie Or put me in a tank? Or sell me to a circus? Daddy says humans do that.',
          '@you I just wanted to watch the waves.',
          'Her face lights up like sunrise on water.',
        ],
        aff: 6,
        next: 'name',
      },
      spyglass: {
        text: [
          '@coralie ...It *has* a backwards?',
          'You show her. She looks through it the right way, points it at the gull, and screams with delight.',
          '@coralie IT\'S SO BIG! IT HAS SUCH A BIG FACE! Oh, this is the best day of my *life!*',
        ],
        aff: 5,
        next: 'name',
      },
      name: {
        text: [
          '@coralie I\'m Coralie! Princess Coralie of the Coral Throne, youngest daughter of King Triton-the-Third! But that\'s a secret! I\'m not supposed to be up here!',
          '@you {name}.',
          '@coralie {name}! That\'s such a *surface* name. I love it!',
          'She leans forward eagerly, tail swishing.',
          '@coralie Will you come back? Tomorrow? And tell me everything about the land? What\'s a "shoe"? What\'s "bread"? Why do horses have *four?*',
          'And then she dives, with a flash of turquoise, and is gone beneath the waves.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Coralie is waiting on the rocks, bouncing with excitement. She\'s brought a sack of salvage from her grotto and dumps it out in front of you: a rusty compass, a teapot, a pair of spectacles, a corset, and a large brass candelabra.',
          '@coralie Okay! I\'ve been studying! Tell me if I\'m right!',
          'She picks up the spectacles.',
          '@coralie These are tiny windows you wear on your face, so you can see what people are *really* thinking.',
          'She picks up the corset.',
          '@coralie And this is a hat for a very large, very sad octopus.',
        ],
        choices: [
          { text: 'Go along with it. "Absolutely correct."', go: 'along', aff: 7 },
          { text: 'Gently explain what everything really is. [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'explain', fail: 'explain_fail' },
          { text: 'Put the spectacles on her. "Now what am I thinking?"', go: 'specs', aff: 8 },
        ],
      },
      along: {
        text: [
          '@coralie I *knew* it! My sisters said I was wrong! HA!',
          'She puts the corset on her head. It does look like a very sad octopus hat.',
          'You spend the whole afternoon making up uses for everything. The teapot is "a little ship for soup." The candelabra is "a fork for giants." She believes every word and writes it all down on a slate with a piece of chalk.',
        ],
        next: 'sunset',
      },
      explain: {
        text: [
          'You explain, patiently, what everything is. Spectacles help people see. The corset is clothing (she finds this deeply horrifying). The teapot makes tea. You promise to bring her some tea.',
          'She listens to every word with her chin in her hands, eyes enormous.',
          '@coralie Nobody\'s ever *explained* things to me before. My sisters just laugh, and Daddy says "humans are barbarians, Coral."',
          '@coralie You make the surface sound like a *story.*',
        ],
        aff: 8,
        next: 'sunset',
      },
      explain_fail: {
        text: [
          'You start explaining what a corset is and quickly realize you don\'t actually understand them either. She asks fourteen follow-up questions. You answer none of them well.',
          '@coralie So it\'s a *trap?* For your own body? That you put on *willingly?* Surface people are so *brave.*',
        ],
        aff: 4,
        next: 'sunset',
      },
      specs: {
        text: [
          'You slide the spectacles onto her nose. They\'re far too big. She peers at you through them, squinting, very serious.',
          '@coralie Hmmm. You\'re thinking... that I\'m...',
          'She stops. Her cheeks go pink, her scales shimmering pink along with them.',
          '@coralie ...They\'re very good windows. I\'m going to keep them.',
        ],
        next: 'sunset',
      },
      sunset: {
        text: [
          'The sun sets over the sea, painting the waves gold and pink. Coralie goes quiet, watching it.',
          '@coralie This is my favorite thing about the surface. Under the water, the sunset is just... the light going away. Up here, it\'s like the whole sky is on fire and nobody\'s scared.',
          'She leans her head against your shoulder, her tail trailing in the waves.',
          '@coralie I wish I could stay up here. Forever. With you.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'You hear the commotion before you see it: shrieking, splashing, and a lot of very confused sailors.',
          'Coralie is standing on the dock. *Standing.* On two wobbly, bare legs, wrapped in a sailcloth, holding a small empty potion bottle.',
          '@coralie {name}! LOOK! LEGS! I got LEGS! I traded the swamp witch in the forest my best seashell for them! Well, she said they\'d only last until sunset, and that I\'d probably fall over a lot, and —',
          'She takes a step toward you and immediately falls over.',
          '@coralie — and she was RIGHT!',
        ],
        choices: [
          { text: 'Help her up and teach her to walk.', go: 'walk', aff: 8 },
          { text: 'Sweep her into your arms and carry her.', go: 'carry', aff: 7 },
        ],
      },
      walk: {
        text: [
          'You hold her hands and walk backward slowly while she wobbles toward you, step by step, giggling hysterically. She falls on you four times. By the fifth try, she\'s walking — sort of — like a newborn deer on a frozen lake.',
          '@coralie I\'m DOING IT! I\'m WALKING! On FEET! Feet are so *weird!* They have little *fingers!*',
        ],
        next: 'day',
      },
      carry: {
        text: [
          'You scoop her up. She shrieks, then laughs, then throws her arms around your neck.',
          '@coralie This is how surface princesses travel, isn\'t it? I read it in a book from a shipwreck!',
          '@you Sure. But you should try walking too.',
          'She does try. Eventually. Mostly she holds onto your arm and drags her feet like a puppet with tangled strings, laughing the whole time.',
        ],
        next: 'day',
      },
      day: {
        text: [
          'It is the best day of her life, and she tells you so every five minutes.',
          'You buy her bread (she cries), a hat (she wears it backward), and a cup of hot cocoa (she drinks it, gasps, and demands four more). She hugs a horse. She tries to pet a cat; the cat flees. She dances barefoot in the town square to a street fiddler, wobbly and joyful, dragging you in with her.',
          'And then, far too soon, the sun begins to sink.',
          '@coralie Oh. Oh no. It\'s almost sunset.',
          'She looks down at her legs. At the town. At you.',
          '@coralie I don\'t want to go back. I don\'t want this day to end.',
        ],
        choices: [
          { text: '"Then let\'s end it somewhere beautiful." Take her to the beach.', go: 'beach', aff: 8 },
          { text: 'Dance with her, one last time, right there in the street. [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'dance', fail: 'beach' },
        ],
      },
      beach: {
        text: [
          'You walk her down to the beach together, hand in hand. She stands at the edge of the waves, toes curling in the wet sand, and watches the sun sink.',
          '@coralie Thank you. For the best day. For *every* best day.',
          'As the sun touches the water, she shimmers — and then she\'s a mermaid again, sitting in the shallows, her tail glimmering. She looks up at you with wet eyes and a brave smile.',
          '@coralie I\'ll come back. I promise. I\'ll always come back.',
        ],
        end: true,
      },
      dance: {
        text: [
          'You take her hands. The fiddler, seeing your face, switches to a slow waltz. You dance with her in the middle of the street, slowly, and she follows you with her whole heart even though her feet keep tangling.',
          'People stop to watch. Nobody laughs. Somebody sighs.',
          'As the last of the sun slips away, she stops dancing and looks up at you.',
          '@coralie I think I understand now. Why the surface people love so much. It\'s because everything ends. Sunsets. Days. Legs.',
          '@coralie So you have to love it *right now*, as hard as you can.',
          'She kisses you, very quickly, on the lips — and then she runs, stumbling and laughing, all the way to the sea, and you hear the splash as she transforms.',
        ],
        aff: 12,
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Coralie surfaces at the end of the dock at midnight, the moon full above the black water.',
          '@coralie I want to show you my home. Where I live. All of it.',
          '@you I can\'t breathe underwater, Coralie.',
          '@coralie You can. With a mermaid\'s kiss. It\'s very old magic. Daddy says it\'s only for... for very special people. The kind you never want to let go.',
          'She holds out her hand from the water, her eyes shining.',
          '@coralie Will you come with me?',
        ],
        choices: [
          { text: 'Take her hand and let her pull you under.', go: 'dive', aff: 10 },
          { text: '"Kiss me first. Here, under the moon." [Charm check 4]', check: { stat: 'charm', dc: 4 }, pass: 'moon', fail: 'dive' },
        ],
      },
      moon: {
        text: [
          'She blushes so deeply her scales glow rose-pink. She rises out of the water, braces her hands on the dock, and kisses you under the full moon — slowly, tasting of salt and something sweet.',
          'You feel the magic settle into your lungs like cool water.',
          '@coralie Now you belong to the sea a little bit too. Just like I belong to the land a little bit. We\'re even.',
        ],
        aff: 14,
        next: 'dive',
      },
      dive: {
        text: [
          'She pulls you down into the dark water. For a moment you panic — and then she kisses you, and you *breathe.* Cool, clear, effortless.',
          'Down and down you go, into a world of light: bioluminescent coral glowing blue and violet, fish like scattered jewels, kelp forests swaying in silent currents. And at the bottom, in a hollow of white sand, a grotto filled with every human thing she has ever found. Spoons. Clocks. Teacups. A music box. A painting of a horse.',
          '@coralie This is my treasure room. Everything I ever loved about the surface is in here.',
          'She looks at you, hair floating around her like a cloud of teal silk.',
          '@coralie Except you. You\'re the best thing about the surface. And I want you here too.',
        ],
        next: 'night',
      },
      night: {
        text: [
          "She kisses you again in the glow of the grotto. Every kiss is another breath of sea-magic, warm now, and dizzying.",
          "@coralie On the surface you wear so many *layers.* Why do humans wear so many layers? Take them off. I want to see how surface people are put together.",
          "She helps, curious as ever. She drifts around you, examining each newly bared patch of skin with the fascination she usually saves for forks, and kisses each one.",
          "@coralie Oh! You have little dips here. And here. Mermaids don't have these. I love them. I love *all* of them.",
          "Being with her down here is like being inside a dream. It's weightless and slow and shimmering. Her tail curls around your legs, smooth and cool and impossibly strong. Her hair drifts over you both like a cloud of teal silk. The tiny scales along her shoulders and ribs shiver and change color under your fingertips, from teal to violet to blushing pink.",
          "@coralie Mermaids change color when they — when they *really* like something. I'm going to be pink all night. Everyone in the reef will know.",
          "She laughs, and the sound comes out in shimmering bubbles. She whispers your name, and the coral glows brighter. The whole ocean seems to hold you in its cool, dark hands...",
          "...",
          "Later, you float together in the grotto's soft light, her head on your chest, both of you wrapped in a curtain of sea silk. She's still very, very pink.",
          "@coralie Mermaids have a word for this. It means \"the person who makes the sea feel like home.\"",
          "@coralie I've never had anyone to use it for before.",
          "She says the word. It sounds like waves on a shore. It sounds like your name.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake on the black rocks of the harbor at dawn, in a nest of soft seaweed, with no memory of swimming back up. Coralie is curled half in the water beside you, her tail trailing in the waves, her cheek on your chest. She's still faintly pink.",
          "@coralie Good morning! The kiss-magic wears off at sunrise, so I brought you up. You snore underwater. Did you know that? It makes very cute bubbles.",
          "A fishing boat drifts past. The fishermen are staring. One of them drops his net.",
          "@coralie Oh no. Oh no, they've seen me. Daddy is going to hear about this. Daddy hears about *everything.* The fish are terrible gossips.",
        ],
        choices: [
          { text: "Wave cheerfully at the fishermen.", go: "wave", aff: 5 },
          { text: "\"Let them talk. I'm not going anywhere.\"", go: "talk", aff: 6 },
          { text: "Pull her into your lap, out of sight behind the rocks.", go: "hide", aff: 6 },
        ],
      },
      wave: {
        text: [
          "You wave. After a long pause, one fisherman waves back. Then another. Coralie giggles and waves too, flipping her tail out of the water.",
          "@coralie They waved! Humans waved at a *mermaid!* Daddy says they'd throw harpoons. They threw nothing! One of them threw a kiss!",
          "@you I'm going to have words with that one.",
          "@coralie You're *jealous!* Oh, that's so surface of you. I love it.",
        ],
        end: true,
      },
      talk: {
        text: [
          "She looks up at you, wide-eyed.",
          "@coralie Really? Even if Daddy sends a sea serpent? He did that to the last sailor who winked at my sister.",
          "@you Even then.",
          "She throws her arms around your neck and kisses you, salty and sweet, right there in front of the fishing boat. One of the fishermen applauds.",
        ],
        end: true,
      },
      hide: {
        text: [
          "You pull her up out of the water and into your lap, tucked behind the tallest rock. She squeaks, then giggles, then winds her tail around both your legs.",
          "@coralie This is very *surface* of you. Hiding behind rocks. Sneaking. I love it.",
          "@coralie ...Kiss me again. I want to see if I stay pink when the magic's gone.",
          "She does. Very pink. For a very long time.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'You find Coralie on the beach below the festival hill, sitting in the shallows with her tail in the water, looking up at the sky with her chin in her hands.',
          '@coralie I wanted to see Starfall from both worlds. Half in the sea and half out. Like me.',
          'You wade out and sit beside her in the waves. When the stars begin to fall, they reflect in the black water all around you, so that it seems like they\'re falling up and down at once.',
          '@coralie Oh... OH... it\'s the most beautiful thing I\'ve *ever* seen! Even better than the horse!',
        ],
        next: 'father',
      },
      father: {
        text: [
          'Then the sea rises. A great wave lifts from the water, and on its crest sits a huge, bearded merman with a golden crown and a trident. The Sea King.',
          '@coralie D-Daddy!',
          'The King looks at you for a very long moment. You hold his gaze. You don\'t let go of Coralie\'s hand.',
          'Finally, he sighs, a sound like the tide going out.',
          '@seaking My daughter has been sneaking to the surface since she was a child. She talks of nothing but you. I have come to see if you are worthy.',
          'Coralie squeezes your hand so hard it hurts.',
          '@seaking ...She is happy. I have never seen her so happy. That will do.',
          'He lifts his trident, and a band of light wraps around Coralie\'s tail. When it fades, she gasps. She looks down. Her tail flickers — legs — tail — legs — at her will.',
          '@seaking Both worlds, little pearl. As you always wanted. Now kiss your human. I am *not* watching.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'You build a house on the cliffs above Saltbreeze Harbor, with a staircase carved down into the rock and a little sea-cave beneath it, so that Coralie can swim straight from the ocean into your living room.',
          'She spends her mornings on land and her afternoons in the sea. She still combs her hair with a fork. She has a horse now. His name is Captain Four-Legs. She brushes him every day.',
          'Some nights you sleep in the house. Some nights she kisses you and pulls you down into the grotto, and you sleep among the glowing coral, breathing the sea.',
          'Her father visits every Starfall. He brings you a gift each time: a pearl, a shell, a ship\'s bell from an old wreck. Coralie says it means he likes you. He insists it does not.',
          'He always stays for dinner, though. He has developed a very serious fondness for bread.',
        ],
        ending: 'coralie',
      },
    },
  },
});
