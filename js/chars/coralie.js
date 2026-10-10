FL.addSpeaker('seaking', 'The Sea King', '#3aa7c9');

FL.addCharacter({
  id: 'coralie',
  name: 'Princess Coralie',
  short: 'Coralie',
  trope: 'Curious Mermaid Princess',
  color: '#4fd1c5',
  favStat: 'charm',
  endingTitle: 'Between the Tides',
  endings: { coralie_sea: 'A Sea Change', coralie_tub: 'Have Tub, Will Travel' },
  teaser: 'On the harbor rocks, something with a shimmering turquoise tail is examining a seagull with intense fascination.',
  blurb: 'The youngest daughter of the Sea King, utterly obsessed with the surface world. She has a grotto full of human junk she\'s found on shipwrecks and a lot of very wrong ideas about what it\'s all for. Sweet, wide-eyed, and endlessly delighted by everything. Forbidden to visit the land. Visits anyway.',
  schedule: ['docks', 'docks', null],
  gifts: { love: ['fork', 'comb'], like: ['mirror', 'plushie', 'gem', 'cakes', 'salts', 'polish'], hate: ['fish'] },
  giftLines: {
    love: ['She gasps so loudly that a gull falls off a piling.', '@coralie:surprised A *dinglehopper!* A real one! And it\'s so shiny! The surface people use them to comb their hair, you know. I\'m an expert.', 'She immediately starts combing her hair with it. You decide not to correct her.'],
    like: '@coralie:happy Ooooh! What is it? What does it do? Can I keep it? I\'m going to put it in my grotto with all my treasures!',
    neutral: '@coralie Oh, a surface thing! I don\'t know what it is but I love it! Probably! Is it a hat?',
    hate: ['She stares at the fish in horror. The fish stares back.', '@coralie:angry *Reginald?!* — oh, no, not Reginald, but — that could have been someone\'s *Reginald!* How could you?!', 'She gently releases it into the sea and glares at you.'],
    special: {
      fork: [
        'She gasps so loudly that a gull falls off a piling.',
        '@coralie:surprised A *dinglehopper!* A real one! And it\'s so shiny!',
        { if: 'coralie_truth', text: '@coralie:smug I know, I know, you told me. You *eat* with them. I don\'t care. I\'m combing. I\'m a princess. I can comb with whatever I like.', else: '@coralie:happy The surface people use them to comb their hair, you know. I\'m an expert.' },
        'She immediately starts combing her hair with it, humming.',
      ],
      comb: [
        '@coralie:surprised A comb! A *pearl* comb! Made of *oyster!* Do the surface people know that\'s where pearls come from? Do they know oysters have *feelings?*',
        'She thinks about it, turning the comb in the light.',
        '@coralie:happy ...It\'s fine. Oysters love being famous. I\'m going to comb with this *and* a dinglehopper at the same time. Double-handed. Like a queen.',
      ],
      fish: [
        'She stares at the fish in horror. The fish stares back.',
        '@coralie:angry *Reginald?!* — oh, no, not Reginald, but — that could have been someone\'s *Reginald!* How could you?!',
        'She gently releases it into the sea and glares at you, then glares at the sea, as if it might tell on you.',
      ],
      mirror: [
        '@coralie:surprised It\'s a little pond you can *hold!* And there\'s a mermaid in it! Hello! Hello!',
        '@coralie:angry ...She copies everything I do. *Rude.* I\'m going to stare at her until she stops.',
      ],
      candle: [
        '@coralie:happy Fire on a stick! You can *carry* it! And it doesn\'t go out!',
        'She holds it up, enchanted. Then she looks at the sea. Then she looks at the candle.',
        '@coralie:smug ...I\'m going to find out what happens if I swim with it. For science. Don\'t tell me. I want it to be a surprise.',
      ],
      salts: [
        '@coralie:surprised You put *salt* in your *bath?* On purpose? To make it like the sea?',
        '@coralie:sad Oh, you surface people *miss* the sea too. That\'s the saddest, sweetest thing I\'ve ever heard. I\'m going to tell Daddy. He\'ll cry. He won\'t admit it.',
      ],
      rum: [
        '@coralie:happy Shipwreck juice! Every wreck has bottles like this! Usually empty. Usually with a little piece of paper inside that says *HELP.*',
        'She shakes it hopefully next to her ear.',
        '@coralie:sad ...No paper. Nobody needs help. That\'s good. That\'s good! I\'m only a *little* disappointed.',
      ],
    },
    repeat: '@coralie:happy Another one! I\'m running out of room in the grotto! I\'ll have to evict a crab. He\'ll understand. ...He won\'t understand.',
  },
  talk: [
    ['@coralie:surprised I saw a horse today! A real one! It has four legs! FOUR! You only have two! Is the horse better than you? You can tell me.'],
    ['@coralie What\'s "fire"? Daddy says it\'s dangerous. I put my hand in a candle once. It was *very* educational.'],
    ['@coralie Mermaids don\'t have feet. What\'s it like? Having feet? Do they get lonely down there, so far away from your face?'],
    ['She\'s sitting on the rocks, braiding seaweed into her long teal hair.', '@coralie:happy My sisters think I\'m silly for loving the surface. But up here there\'s *sky!* It\'s like the sea, but you can\'t swim in it! It\'s so wasteful! I love it!'],
    ['@coralie:smug I found a thing on a shipwreck. It\'s a box with a little handle. When you turn the handle, it plays music. I think it\'s a baby. I\'m raising it.'],
    ['@coralie Daddy says humans are dangerous. You\'re not dangerous. You\'re *nice.* Daddy\'s never met you. I\'m going to tell him all about you! ...Maybe not *all* about you.'],
    ['@coralie:happy I learned a new surface word from a fisherman! "Moist!"', '@coralie:surprised I said it in the fish market and everybody went *very* quiet. I think it\'s a powerful spell. I\'m only going to use it in emergencies.'],
    ['@coralie:sad Mermaids can\'t cry, you know. Not properly. It all just goes into the sea and nobody can tell.', '@coralie Up here, tears stay *on your face.* Everyone can see you\'re sad and come and help. That\'s so brave of you. Walking around with your feelings on the outside.'],
    ['@coralie Underwater, you don\'t *hear* music. You *feel* it. When the whales sing, it rattles your scales all the way to the tip of your tail.', '@coralie:happy The bard by the fountain sang today and it just went politely into my ears. Surface music is so *well-mannered.*'],
    ['She has her tail up on a rock and is kicking it, very seriously, one fin at a time.', '@coralie:smug I\'m practicing for legs. Left. Right. Left. Is this how you do it? Why are you laughing? This is *hard!*'],
    { if: 'coralie_spyglass', lines: ['@coralie:happy I looked at the moon through the spyglass! The right way round, like you showed me!', '@coralie:surprised It has *holes* in it! Somebody\'s been eating the moon! ...Is it you? You can tell me. I won\'t tell Daddy.'] },
    { if: 'coralie_along', lines: ['@coralie:smug I told my sisters the teapot is a little ship for soup. They didn\'t believe me. So I made soup in it and sailed it across the throne room.', '@coralie:happy It sank. But it sank *majestically.* My sisters had to admit it was very convincing.'] },
    { if: 'coralie_truth', lines: ['@coralie I explained corsets to my eldest sister. Properly, the way you explained them to me.', '@coralie:smug She has *nightmares* now. I\'m a very good teacher. I learned from the best.'] },
    { if: 'coralie_rock', lines: ['@coralie:blush I\'ve been practicing being a rock. For when the fishermen sail by.', '@coralie:smug I\'m a *very* pretty rock now. The prettiest. You said so. You can\'t take it back. Rocks remember everything.'] },
    { if: { stage: 3 }, lines: ['@coralie:angry The swamp witch says she won\'t sell me any more legs. She says I "used them irresponsibly."', '@coralie I *danced* in them! And hugged a horse! What else are legs *for?*'] },
  ],
  afterTalk: [
    ["@coralie:happy My sisters noticed I'm pink all the time now. They asked who the lucky merman was. I said, \"It's not a merman, it's a HUMAN, and they have KNEES!\" They fainted."],
    ["She tucks a pearl into your pocket.", "@coralie:blush That means \"come to the grotto tonight.\" In mermaid. We have a whole language of shells and pearls. I'm going to teach you all of it. The *naughty* ones first."],
    ["@coralie:sad I tried to explain last night to a seagull. It didn't understand. I don't think seagulls have romance. That's very sad for seagulls."],
    ["@coralie:blush I've decided my favorite surface thing isn't forks anymore. Or horses. It's you. Specifically, the dips. The little dips."],
    ["@coralie:smug I asked Daddy to come up and meet you properly. He said he would \"consider it.\"", "@coralie That's what he said about sea serpents, and now we have *eleven.*"],
    { if: 'coralie_waved', lines: ["@coralie:happy The fisherman who threw me a kiss leaves a dinglehopper on my rock every morning now! I have *nine!* I'm going to marry him!", "@coralie:smug ...Joking! I'm joking! You made the jealous face again! I *love* the jealous face! Do it again!"] },
    { if: 'coralie_moonkiss', lines: ["@coralie:blush Daddy says when a mermaid kisses a human under the full moon, a little bit of them belongs to the sea forever.", "@coralie:smug So if you ever want to swim for no reason, or you get a sudden craving for kelp, that's me. Sorry. *Not* sorry."] },
    { if: 'coralie_specs', lines: ["She puts on the spectacles — the tiny face-windows — and studies you for a long, serious minute.", "@coralie:blush ...I know *exactly* what you're thinking. Every time. They're very good windows. You should be more careful what you think near me."] },
    { if: 'coralie_date_dinner', lines: ["@coralie:happy Madame Bettina says I'm banned from the Tipsy Wyvern until the floor dries.", "@coralie:smug I asked her when that will be. She said \"never.\" I've never been banned from anything before! I'm so *dangerous!*"] },
    { if: 'coralie_danced', lines: ["@coralie The fiddler in the square still plays our waltz when I come up the beach steps. I can't dance it without legs, so I wave my tail in time.", "@coralie:happy People throw coins! I keep them all. They're *flat treasure.*"] },
  ],
  dateFav: 'dinner',
  dates: {
    dinner: {
      start: {
        text: [
          'Getting a mermaid to dinner at the Tipsy Wyvern takes, in the end: one enormous copper bathtub borrowed from the bathhouse, a set of cart wheels, forty buckets of seawater and a tavern keeper who has stopped asking questions.',
          'The tub does not fit through the door. The door comes off its hinges. Coralie rolls in, sloshing gloriously, waving to everyone like a queen on parade.',
          '@coralie:happy Hello! Hello! I\'m on *land!* I\'m in a *pot!*',
          'You wheel her to the corner booth. Half the tavern moves its stools to get a better look. She sees the table settings and lets out a shriek that shatters a wine glass two tables away.',
          '@coralie:surprised *Dinglehoppers!* So many! Everyone has *two!* Are they *free?!*',
          'Within a minute, every fork on your table is in her hair. Within two, so are the forks from the next table, which the dwarves sitting there hand over in total silence.',
          { if: 'coralie_along', text: ['@coralie:smug Look, a little ship for soup! On that table! You were *right!*', 'The dwarves look at you. You do not explain.'] },
          { if: 'coralie_truth', text: '@coralie You *eat* with them here, don\'t you. You told me. I\'m going to be very civilized. Watch.' },
          'The barkeep brings a menu. She holds it upside down, then right way up, then reads the first line aloud: *"Catch of the Day — Grilled Trout."* Her face goes very still.',
        ],
        choices: [
          { text: '"Bread. We\'ll have bread. All of your bread."', go: 'bread', aff: 6 },
          { text: 'Teach her to clink tankards and shout "Cheers!"', go: 'cheers', aff: 4 },
          { text: 'Order the trout. Discreetly. She\'ll never notice.', go: 'trout', aff: 1 },
        ],
      },
      bread: {
        text: [
          'Bread arrives: a warm, crusty loaf, then another, then a basket of rolls.',
          { if: { stage: 3 }, text: 'Coralie bursts into tears exactly as she did the first time she ever tasted it.', else: 'Coralie takes one bite and bursts into tears.' },
          '@coralie:sad It\'s so *soft.* Why is it so soft? Who did this? I want to thank them personally.',
          'The cook comes out of the kitchen, wiping his hands. She hugs him from the bathtub. He goes back into the kitchen soaked to the waist and does not speak for an hour.',
          'She dunks a roll in her bathwater to see what happens. It goes soggy. She looks at the floating crumbs, then at you, delighted.',
          '@coralie:happy I\'m a *soup!* I\'m a mermaid soup! Oh, this is the best night of my *life!*',
        ],
        next: 'done',
      },
      cheers: {
        text: [
          'You show her how it works: tankard up, look each other in the eye, *clink.* She studies the move like a sword technique.',
          '@coralie:smug Cheers!',
          'She clinks. She is a mermaid with a tail strong enough to fling a dolphin, and she clinks with her whole body. A tidal wave of ale and seawater sweeps across the booth and drenches the dwarves at the next table.',
          'There is a terrible silence. Then the dwarves raise their dripping tankards and roar "CHEERS!" back at her, and the whole tavern joins in, and for the rest of the night every toast in the Tipsy Wyvern is followed by somebody throwing a cup of water over their friend.',
          '@coralie:happy Surface people are so *fun!*',
        ],
        next: 'done',
      },
      trout: {
        text: [
          'You lean over and murmur to the barkeep. Ten minutes later, a grilled trout arrives in front of you, garnished with lemon. You put your napkin over it. Coralie lifts the napkin.',
          'Her tail goes perfectly still under the bathwater. She looks at the trout the way a sailor\'s widow looks at a ship that didn\'t come home.',
          '@coralie:sad ...His name was Humphrey.',
          '@you You didn\'t know him.',
          '@coralie:angry He had a *wife.* He liked *currents.* He always swam a bit to the left.',
          'She delivers a full, tearful eulogy to the trout, to the room. Several sailors remove their hats. The barkeep bows his head. At the end, she makes you carry Humphrey down to the harbor and give him to the sea, which you do, and which takes until midnight.',
          '@coralie:sad ...I forgive you. You didn\'t know. Just don\'t do it again where he can see.',
          'You decide not to ask who "he" is.',
        ],
        next: 'done',
      },
      done: {
        text: [
          'When you finally roll her home down Market Street, the tub leaves a long wet stripe along the cobbles all the way to the docks. The barkeep watches you go from the empty doorway, holding the door.',
          '@coralie:happy The bill\'s paid! He says the door\'s extra!',
          { if: { stage: 4 }, text: 'At the top of the beach steps, she grabs you by the collar and pulls you down into the tub to kiss you, and you roll the last twenty yards down to the sea together, half in and half out, soaked and laughing.' },
          '@coralie:blush Can we come back tomorrow? I want to try "pudding." It sounds *squishy.*',
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          'The Moonlit Gardens have seven fountains. Coralie has decided to visit all of them.',
          'This requires a wheelbarrow, a lot of buckets, and you at a dead run between the hedges while she clings to the sides, shrieking with joy, her tail fin trailing over the front like a figurehead.',
          'At the first fountain, she slides in with a happy sigh and floats on her back among the lily pads. A passing duke stops, stares, and walks directly into a hedge.',
          '@coralie:surprised {name}! There are people in this garden made out of *stone!* Did a gorgon do this?! We have to *tell* someone!',
          '@you They\'re statues.',
          '@coralie:sad ...Do they know?',
          'Then she spots the topiary: a hedge clipped into the shape of a swan. She points at it, horrified.',
          '@coralie:angry Why is that bush a *bird?* Did the bush *want* to be a bird?',
        ],
        choices: [
          { text: 'Wheel her to the biggest fountain at full speed.', go: 'race', aff: 5 },
          { text: 'Explain topiary.', go: 'topiary', aff: 3 },
          { text: 'Sit on the fountain\'s edge and dangle your feet in the water beside her.', go: 'feet', aff: 6 },
        ],
      },
      race: {
        text: [
          'You tip her back into the wheelbarrow, sloshing, and sprint. Gravel sprays. Hedges blur. A noblewoman flattens herself against a sundial. Coralie throws her arms in the air and screams like a gull in a gale.',
          'You hit the edge of the great central fountain, the wheelbarrow stops, and Coralie does not. She sails through the air in a perfect, glittering arc and lands with a magnificent splash in the basin beneath the marble statue of the Goddess of Love.',
          'She surfaces with a lily pad on her head and spouts a long stream of water straight up like a whale.',
          '@coralie:happy AGAIN! Do it AGAIN!',
        ],
        next: 'done',
      },
      topiary: {
        text: [
          'You explain that gardeners cut the bushes into shapes on purpose, because people find it pretty. She listens with mounting horror.',
          '@coralie:surprised You cut the bush until it\'s a *swan?* And it stays a swan? Forever? Unless you keep cutting it?',
          '@coralie:sad ...That\'s so much work for a bush that just wanted to be a bush.',
          'She thinks about it for a while, floating on her back. Then she sits up.',
          '@coralie:smug I want one. Shaped like you. I\'m going to keep it outside the grotto and talk to it when you\'re on land. Don\'t worry, I\'ll let it grow a little bit messy. Like your hair in the morning.',
        ],
        next: 'done',
      },
      feet: {
        text: [
          'You take off your boots, roll up your trousers and sit on the fountain\'s rim beside her, feet in the cool water. She watches your toes with total fascination.',
          '@coralie:surprised They\'re so *small* under the water. And wiggly. Do they always wiggle like that?',
          'She brushes her tail fin against your ankle, soft and silky, then does it again, watching your face to see what happens.',
          '@coralie:blush Is this the thing? The surface thing? "Footsie"? I read about it in a book from a shipwreck. I think I\'m very good at it. I have a *lot* of foot.',
          'You stay there a long time, the moon on the water, her fin curled around your ankle.',
        ],
        next: 'done',
      },
      done: {
        text: [
          'By the time you\'ve done all seven fountains, there are lily pads in your pockets, the gardeners have locked themselves in the tool shed, and Coralie is wrapped in your coat in the wheelbarrow, sleepy and damp and shining.',
          { if: { stage: 4 }, text: 'At the last fountain, she pulls you in. All the way in. You sit together in the basin under the moon, soaked to the bone, kissing while the water spills over the edge around you.' },
          '@coralie:happy The surface has puddles *everywhere* if you know where to look. You always know where to look.',
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          'Saltbreeze Harbor at sunset is Coralie\'s home ground, which is why the fried-fish stall at the end of the pier is something of a diplomatic incident.',
          'She is waiting in the water below the last plank, arms folded on the boards, chin on her arms, glaring past you at the stall.',
          '@coralie:angry He\'s *frying* them. In *batter.* With a *smile* on his face.',
          'The fishmonger, who has clearly met her before, waves a nervous greeting with his tongs.',
          '@coralie:sad Oh, hello, Mr. Haddock. That\'s not his real name. I gave it to him. As a *warning.*',
        ],
        choices: [
          { text: '"Chips. Just chips. No fish at all." Say it loudly, so she can hear.', go: 'chips', aff: 5 },
          { text: 'Let her pull you into the water to see the sunset her way.', go: 'swim', aff: 6 },
          { text: 'Buy the fish anyway. It\'s just a fish.', go: 'fish', aff: 1 },
        ],
      },
      chips: {
        text: [
          '@you Chips, please. Just chips. No fish. Absolutely no fish.',
          'Coralie\'s head pops up over the edge of the pier.',
          '@coralie:happy Potatoes! Potatoes don\'t have *faces!* I love potatoes!',
          'You sit with your legs over the edge and feed her chips one at a time while the sun goes down. A gull lands beside you with a greedy eye. Coralie says something to it, sharply, in a language of clicks and squawks. The gull leaves at once and does not come back.',
          '@coralie:smug I told it what Daddy does to gulls that steal. Daddy doesn\'t actually do anything. But the *gulls* don\'t know that.',
        ],
        next: 'done',
      },
      swim: {
        text: [
          'She takes your hand and pulls you off the end of the pier, clothes and all. The sea closes over your head, cool and green-gold.',
          'Underwater, she spins you round and points up. From below, the sunset is a wide, wavering disc of fire on the surface, the light slanting down through the water in long golden ladders, slowly going red, then violet, then dim.',
          'You hold your breath as long as you can. When you kick back up, gasping, she surfaces beside you with her hair plastered to her face.',
          '@coralie I told you, didn\'t I? Under the water, the sunset\'s just the light going away. I always thought it was sad.',
          '@coralie:blush It isn\'t, when there\'s somebody to watch it go with. Then it\'s just... the light going away *together.*',
        ],
        next: 'done',
      },
      fish: {
        text: [
          'You buy a paper of fried fish. You sit on the edge of the pier. You take one bite.',
          'Coralie watches every chew with enormous, wounded eyes.',
          '@coralie:sad That was Wilhelmina. She was a grandmother. She knew all the old songs. She once outswam a shark just to prove a point.',
          'You take another bite. You try not to.',
          '@coralie:sad She had a *limp.* She was very brave about it.',
          'You cannot finish the fish. You give it to the gull. Coralie forgives you instantly and kisses you on the nose, but she does say "Wilhelmina" under her breath every time you walk past the stall for the rest of the month.',
        ],
        next: 'done',
      },
      done: {
        text: [
          'The first stars come out. She rests her arms on the pier beside your knees, her tail drifting lazily below.',
          { if: { stage: 4 }, text: 'She tugs you down by the shirt until your face is level with hers, and kisses you slow and salty while the harbor lights come on one by one.' },
          '@coralie:happy I like it here best, I think. Right here. Halfway. Me in the sea and you on the land, and our hands in the middle.',
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          'Whisperwood has a river. You checked. It is slow, cool and just deep enough, which makes it, for one afternoon, the most romantic river in the kingdom.',
          'You carry her the last stretch from the cart. She slides off the bank into the water and goes completely still, eyes enormous.',
          '@coralie:surprised It\'s not *salty!* It\'s like swimming in a *cloud!* How does anything live in here? Doesn\'t it taste of *nothing?*',
          'You spread the picnic blanket on the bank. She arranges herself with her elbows on the grass and her tail in the river, a princess at a very long table. A small brown trout swims past her and does something with its fins.',
          '@coralie:angry Excuse me?! ...That trout just called me a *tourist.* River fish are so *provincial.*',
          'Then the reeds rustle. An otter emerges, sleek and shameless, and lifts the lid of the picnic basket with its nose.',
        ],
        choices: [
          { text: 'Lie on the bank and feed her honey cakes, one bite at a time.', go: 'cakes', aff: 5 },
          { text: 'Wade into the river and float beside her.', go: 'wade', aff: 6 },
          { text: 'Defend the basket from the otter. [Might check 2]', check: { stat: 'might', dc: 2 }, pass: 'otter_win', fail: 'otter_fail' },
        ],
      },
      cakes: {
        text: [
          'You shoo the otter off with a sandwich, as tribute, and stretch out on your stomach on the blanket. Coralie props her chin on her hands. You feed her a honey cake, a bite at a time.',
          '@coralie:happy Mmmmh. Surface food is all so *sticky.* Underwater, nothing is sticky. Everything just floats away.',
          'She licks the honey off your fingers, very thoroughly, purely for research, and then looks at you with great innocence as you go pink.',
          '@coralie:smug Oh! You change color too! Just like a mermaid! I *knew* we were compatible!',
        ],
        next: 'done',
      },
      wade: {
        text: [
          'You strip to your shirt and wade in. The water is cold enough to make you yelp. Coralie laughs, wraps an arm around your waist and pulls you out into the slow, deep middle of the river.',
          'You float on your back side by side, the sky going past overhead through the leaves. Her tail moves just enough to keep you both in place against the current.',
          '@coralie This is the river\'s sky. It has leaves in it. The sea\'s sky is just *sky.* I didn\'t know there were different kinds.',
          '@coralie:blush Every time I\'m with you I find out there are more kinds of things.',
        ],
        next: 'done',
      },
      otter_win: {
        text: [
          'You lunge for the basket. The otter lunges for the basket. There is a brief, undignified tug-of-war that ends with you flat on your back in the mud, holding the basket over your head in triumph, and the otter retreating to the reeds to chitter insults.',
          '@coralie:happy MY HERO! You *fought* for the sandwiches! On *land!*',
          'She rewards you by splashing an entire wave of river water over you, which she seems to consider a great honor.',
        ],
        next: 'done',
      },
      otter_fail: {
        text: [
          'You lunge for the basket. The otter is faster, cleverer and less afraid of mud. It escapes with a whole cheese, a loaf and your dignity.',
          'Coralie is cheering. Not for you.',
          '@coralie:happy Go on! Go on, little river dog! *Run!*',
          '@coralie:smug Sorry. It\'s just — he wanted it *so much.* I respect that. You\'re very brave, though. I\'ll give you the second-best kiss for trying.',
          'The second-best kiss turns out to be very good indeed. You start to wonder about the best one.',
        ],
        next: 'done',
      },
      done: {
        text: [
          'As the light turns gold, she rests her head on her folded arms at the edge of the bank, tail drifting in the water, watching dragonflies.',
          { if: { stage: 4 }, text: 'You lie down beside her with your head next to hers, the grass under you and the river under her, and she laces her fingers through yours and doesn\'t let go until the first stars come out.' },
          '@coralie:happy The land has so much water hidden in it. Rivers, fountains, puddles, tubs. I think it\'s been trying to make me feel at home this whole time.',
          '@coralie:blush ...Or that was you. It was probably you.',
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'Out on the black rocks at the edge of Saltbreeze Harbor, half-hidden by sea spray, there\'s a girl sunbathing. Long teal hair spilling down her back, skin dappled with tiny glittering scales at her shoulders and collarbone, and — where her legs should be — a long, gleaming turquoise tail, its fins trailing in the waves.',
          'She\'s holding a rusty spyglass to her eye. Backwards. Pointing it at a seagull.',
          'She lowers it, sees you, and shrieks.',
          '@coralie:surprised AH! A HUMAN! You didn\'t see me! I\'m not here! I\'m a — I\'m a *rock!* I\'m a very pretty rock!',
          'She freezes completely still, eyes squeezed shut.',
        ],
        aff: 10,
        choices: [
          { text: '"That\'s the prettiest rock I\'ve ever seen." [Charm check 1]', check: { stat: 'charm', dc: 1 }, pass: 'rock_win', fail: 'rock_fail' },
          { text: 'Sit down on the rocks a little way away, so you don\'t scare her.', go: 'sit' },
          { text: '"You\'re holding that spyglass backwards."', go: 'spyglass', flag: 'coralie_spyglass' },
        ],
      },
      rock_win: {
        text: [
          'One eye pops open.',
          '@coralie:blush ...Really? The *prettiest?*',
          '@you By far.',
          'She giggles, delighted, and forgets to be a rock entirely.',
          '@coralie:happy Nobody\'s ever called me a pretty rock before! My sisters just call me "Coral, stop that."',
        ],
        aff: 6,
        flag: 'coralie_rock',
        next: 'name',
      },
      rock_fail: {
        text: [
          '@you Nice... rock... shape.',
          '@coralie:smug Thank you! I practice!',
          'She stays frozen another full minute before she finally gives up and opens her eyes.',
        ],
        aff: 3,
        next: 'name',
      },
      sit: {
        text: [
          'You sit down slowly a few rocks away and look out at the sea. After a minute, you hear a cautious splash. Then another. When you glance over, she\'s much closer, peering at you over a boulder.',
          '@coralie:sad ...You\'re not going to catch me in a net?',
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
          '@coralie:surprised ...It *has* a backwards?',
          'You show her. She looks through it the right way, points it at the gull, and screams with delight.',
          '@coralie:happy IT\'S SO BIG! IT HAS SUCH A BIG FACE! Oh, this is the best day of my *life!*',
        ],
        aff: 5,
        next: 'name',
      },
      name: {
        text: [
          '@coralie:happy I\'m Coralie! Princess Coralie of the Coral Throne, youngest daughter of King Triton the Third! But that\'s a secret! I\'m not supposed to be up here!',
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
          '@coralie:happy Okay! I\'ve been studying! Tell me if I\'m right!',
          'She picks up the spectacles.',
          '@coralie:smug These are tiny windows you wear on your face, so you can see what people are *really* thinking.',
          'She picks up the corset.',
          '@coralie And this is a hat for a very large, very sad octopus.',
        ],
        choices: [
          { text: 'Go along with it. "Absolutely correct."', go: 'along', aff: 7, flag: 'coralie_along' },
          { text: 'Gently explain what everything really is. [Charm check 2]', check: { stat: 'charm', dc: 2 }, pass: 'explain', fail: 'explain_fail' },
          { text: 'Put the spectacles on her. "Now what am I thinking?"', go: 'specs', aff: 8, flag: 'coralie_specs' },
        ],
      },
      along: {
        text: [
          '@coralie:happy I *knew* it! My sisters said I was wrong! HA!',
          'She puts the corset on her head. It does look like a very sad octopus hat.',
          'You spend the whole afternoon making up uses for everything. The teapot is "a little ship for soup." The candelabra is "a fork for giants." She believes every word and writes it all down on a slate with a piece of chalk.',
        ],
        next: 'sunset',
      },
      explain: {
        text: [
          'You explain, patiently, what everything is. Spectacles help people see. The corset is clothing (she finds this deeply horrifying). The teapot makes tea. You promise to bring her some tea.',
          'She listens to every word with her chin in her hands, eyes enormous.',
          '@coralie:sad Nobody\'s ever *explained* things to me before. My sisters just laugh, and Daddy says "humans are barbarians, Coral."',
          '@coralie:happy You make the surface sound like a *story.*',
        ],
        aff: 8,
        flag: 'coralie_truth',
        next: 'sunset',
      },
      explain_fail: {
        text: [
          'You start explaining what a corset is and quickly realize you don\'t actually understand them either. She asks fourteen follow-up questions. You answer none of them well.',
          '@coralie:surprised So it\'s a *trap?* For your own body? That you put on *willingly?* Surface people are so *brave.*',
        ],
        aff: 4,
        next: 'sunset',
      },
      specs: {
        text: [
          'You slide the spectacles onto her nose. They\'re far too big. She peers at you through them, squinting, very serious.',
          '@coralie Hmmm. You\'re thinking... that I\'m...',
          'She stops. Her cheeks go pink, her scales shimmering pink along with them.',
          '@coralie:blush ...They\'re very good windows. I\'m going to keep them.',
        ],
        next: 'sunset',
      },
      sunset: {
        text: [
          'The sun sets over the sea, painting the waves gold and pink. Coralie goes quiet, watching it.',
          '@coralie This is my favorite thing about the surface. Under the water, the sunset is just... the light going away. Up here, it\'s like the whole sky is on fire and nobody\'s scared.',
          'She leans her head against your shoulder, her tail trailing in the waves.',
          '@coralie:sad I wish I could stay up here. Forever. With you.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'You hear the commotion before you see it: shrieking, splashing, and a lot of very confused sailors.',
          'Coralie is standing on the dock. *Standing.* On two wobbly, bare legs, wrapped in a sailcloth, holding a small empty potion bottle.',
          '@coralie:happy {name}! LOOK! LEGS! I got LEGS! I traded the swamp witch in the forest my best seashell for them! Well, she said they\'d only last until sunset, and that I\'d probably fall over a lot, and —',
          'She takes a step toward you and immediately falls over.',
          '@coralie:surprised — and she was RIGHT!',
          { if: 'coralie_specs', text: 'She is still wearing the spectacles, wildly crooked. She peers up at you through them from the planks, and you get the strong impression the tiny windows are telling her *exactly* what you\'re thinking.' },
        ],
        choices: [
          { text: 'Help her up and teach her to walk.', go: 'walk', aff: 8 },
          { text: 'Sweep her into your arms and carry her.', go: 'carry', aff: 7, flag: 'coralie_carried' },
        ],
      },
      walk: {
        text: [
          'You hold her hands and walk backward slowly while she wobbles toward you, step by step, giggling hysterically. She falls on you four times. By the fifth try, she\'s walking — sort of — like a newborn deer on a frozen lake.',
          '@coralie:happy I\'m DOING IT! I\'m WALKING! On FEET! Feet are so *weird!* They have little *fingers!*',
        ],
        next: 'day',
      },
      carry: {
        text: [
          'You scoop her up. She shrieks, then laughs, then throws her arms around your neck.',
          '@coralie:blush This is how surface princesses travel, isn\'t it? I read it in a book from a shipwreck!',
          '@you Sure. But you should try walking too.',
          'She does try. Eventually. Mostly she holds onto your arm and drags her feet like a puppet with tangled strings, laughing the whole time.',
        ],
        next: 'day',
      },
      day: {
        text: [
          'It is the best day of her life, and she tells you so every five minutes.',
          'You buy her bread (she cries), a hat (she wears it backward), and a cup of hot cocoa (she drinks it, gasps, and demands four more). She hugs a horse. She tries to pet a cat; the cat flees. She dances barefoot in the town square to a street fiddler, wobbly and joyful, dragging you in with her.',
          { if: 'coralie_along', text: 'At a tea shop, she points proudly at a teapot and informs the owner that it\'s "a little ship for soup." The owner, after one look at your face, agrees.' },
          { if: 'coralie_truth', text: 'At a tea shop, she points at a teapot and announces, very proudly, "It makes *tea!*" The owner gives her a cup for free. She tells everyone in the shop that you taught her.' },
          'And then, far too soon, the sun begins to sink.',
          '@coralie:surprised Oh. Oh no. It\'s almost sunset.',
          'She looks down at her legs. At the town. At you.',
          '@coralie:sad I don\'t want to go back. I don\'t want this day to end.',
        ],
        choices: [
          { text: '"Then let\'s end it somewhere beautiful." Take her to the beach.', go: 'beach', aff: 8 },
          { text: 'Dance with her, one last time, right there in the street. [Charm check 3]', check: { stat: 'charm', dc: 3 }, pass: 'dance', fail: 'beach' },
        ],
      },
      beach: {
        text: [
          'You walk her down to the beach together, hand in hand. She stands at the edge of the waves, toes curling in the wet sand, and watches the sun sink.',
          '@coralie:happy Thank you. For the best day. For *every* best day.',
          'As the sun touches the water, she shimmers — and then she\'s a mermaid again, sitting in the shallows, her tail glimmering. She looks up at you with wet eyes and a brave smile.',
          '@coralie:sad I\'ll come back. I promise. I\'ll always come back.',
        ],
        end: true,
      },
      dance: {
        text: [
          'You take her hands. The fiddler, seeing your face, switches to a slow waltz. You dance with her in the middle of the street, slowly, and she follows you with her whole heart even though her feet keep tangling.',
          'People stop to watch. Nobody laughs. Somebody sighs.',
          'As the last of the sun slips away, she stops dancing and looks up at you.',
          '@coralie I think I understand now. Why the surface people love so much. It\'s because everything ends. Sunsets. Days. Legs.',
          '@coralie:blush So you have to love it *right now*, as hard as you can.',
          'She kisses you, very quickly, on the lips — and then she runs, stumbling and laughing, all the way to the sea, and you hear the splash as she transforms.',
        ],
        aff: 12,
        flag: 'coralie_danced',
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Coralie surfaces at the end of the dock at midnight, the moon full above the black water.',
          '@coralie I want to show you my home. Where I live. All of it.',
          '@you I can\'t breathe underwater, Coralie.',
          '@coralie:blush You can. With a mermaid\'s kiss. It\'s very old magic. Daddy says it\'s only for... for very special people. The kind you never want to let go.',
          { if: 'coralie_danced', text: '@coralie You gave me a whole dance, on the only legs I\'ll ever have. I want to give you a whole *ocean* back. It seems fair. It\'s a bit bigger, but I can\'t help that.' },
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
          '@coralie:blush Now you belong to the sea a little bit too. Just like I belong to the land a little bit. We\'re even.',
        ],
        aff: 14,
        flag: 'coralie_moonkiss',
        next: 'dive',
      },
      dive: {
        text: [
          'She pulls you down into the dark water. For a moment you panic — and then she kisses you, and you *breathe.* Cool, clear, effortless.',
          'Down and down you go, into a world of light: bioluminescent coral glowing blue and violet, fish like scattered jewels, kelp forests swaying in silent currents. And at the bottom, in a hollow of white sand, a grotto filled with every human thing she has ever found. Spoons. Clocks. Teacups. A music box. A painting of a horse.',
          { if: 'coralie_spyglass', text: 'Pride of place, on a little throne of shells, is the rusty spyglass. It has been carefully mounted pointing the right way round.' },
          { if: 'coralie_specs', text: 'The spectacles are here too, on a velvet scrap, beside a slate where she has written in chalk: *FACE WINDOWS. They work. (Ask {name} what I saw.)*' },
          '@coralie This is my treasure room. Everything I ever loved about the surface is in here.',
          'She looks at you, hair floating around her like a cloud of teal silk.',
          '@coralie:blush Except you. You\'re the best thing about the surface. And I want you here too.',
        ],
        next: 'night',
      },
      night: {
        text: [
          "She kisses you again in the glow of the grotto. Every kiss is another breath of sea-magic, warm now, and dizzying.",
          "@coralie:smug On the surface you wear so many *layers.* Why do humans wear so many layers? Take them off. I want to see how surface people are put together.",
          "She helps, curious as ever. She drifts around you, examining each newly bared patch of skin with the fascination she usually saves for forks, and kisses each one.",
          "@coralie:surprised Oh! You have little dips here. And here. Mermaids don't have these. I love them. I love *all* of them.",
          "Being with her down here is like being inside a dream. It's weightless and slow and shimmering. Her tail curls around your legs, smooth and cool and impossibly strong. Her hair drifts over you both like a cloud of teal silk. The tiny scales along her shoulders and ribs shiver and change color under your fingertips, from teal to violet to blushing pink.",
          "@coralie:blush Mermaids change color when they — when they *really* like something. I'm going to be pink all night. Everyone in the reef will know.",
          "She laughs, and the sound comes out in shimmering bubbles. She whispers your name, and the coral glows brighter. The whole ocean seems to hold you in its cool, dark hands...",
          "...",
          "Later, you float together in the grotto's soft light, her head on your chest, both of you wrapped in a curtain of sea silk. She's still very, very pink.",
          "@coralie Mermaids have a word for this. It means \"the person who makes the sea feel like home.\"",
          "@coralie:sad I've never had anyone to use it for before.",
          "She says the word. It sounds like waves on a shore. It sounds like your name.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake on the black rocks of the harbor at dawn, in a nest of soft seaweed, with no memory of swimming back up. Coralie is curled half in the water beside you, her tail trailing in the waves, her cheek on your chest. She's still faintly pink.",
          "@coralie:happy Good morning! The kiss-magic wears off at sunrise, so I brought you up. You snore underwater. Did you know that? It makes very cute bubbles.",
          { if: 'coralie_moonkiss', text: "@coralie:smug You don't cough up any seawater, did you notice? That's the moon kiss. The sea likes you now. It won't let you drown. It'd be *rude.*" },
          { if: 'coralie_specs', text: "She has the spectacles on again. She's been watching you sleep through them. She says your sleeping thoughts were \"very blue, with a bit of me in the corner.\"" },
          "A fishing boat drifts past. The fishermen are staring. One of them drops his net.",
          "@coralie:surprised Oh no. Oh no, they've seen me. Daddy is going to hear about this. Daddy hears about *everything.* The fish are terrible gossips.",
        ],
        choices: [
          { text: "Wave cheerfully at the fishermen.", go: "wave", aff: 5, flag: 'coralie_waved' },
          { text: "\"Let them talk. I'm not going anywhere.\"", go: "talk", aff: 6 },
          { text: "Pull her into your lap, out of sight behind the rocks.", go: "hide", aff: 6 },
        ],
      },
      wave: {
        text: [
          "You wave. After a long pause, one fisherman waves back. Then another. Coralie giggles and waves too, flipping her tail out of the water.",
          "@coralie:happy They waved! Humans waved at a *mermaid!* Daddy says they'd throw harpoons. They threw nothing! One of them threw a kiss!",
          "@you I'm going to have words with that one.",
          "@coralie:smug You're *jealous!* Oh, that's so surface of you. I love it.",
        ],
        end: true,
      },
      talk: {
        text: [
          "She looks up at you, wide-eyed.",
          "@coralie:surprised Really? Even if Daddy sends a sea serpent? He did that to the last sailor who winked at my sister.",
          "@you Even then.",
          "She throws her arms around your neck and kisses you, salty and sweet, right there in front of the fishing boat. One of the fishermen applauds.",
        ],
        end: true,
      },
      hide: {
        text: [
          "You pull her up out of the water and into your lap, tucked behind the tallest rock. She squeaks, then giggles, then winds her tail around both your legs.",
          "@coralie:happy Hiding behind rocks! Sneaking! Daddy would be *appalled.* I\'m going to be such a bad influence on the reef.",
          "@coralie:blush ...Kiss me again. I want to see if I stay pink when the magic's gone.",
          "You do. She stays pink. Very pink. For a very long time.",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'You find Coralie on the beach below the festival hill, sitting in the shallows with her tail in the water, looking up at the sky with her chin in her hands.',
          '@coralie I wanted to see Starfall from both worlds. Half in the sea and half out. Like me.',
          { if: 'coralie_rock', text: '@coralie:blush I thought about watching from my rock. The one where you called me the prettiest rock. But you can\'t sit on a rock *with* someone. Not properly. Not the way I want to.' },
          'You wade out and sit beside her in the waves. When the stars begin to fall, they reflect in the black water all around you, so that it seems like they\'re falling up and down at once.',
          '@coralie:surprised Oh... OH... it\'s the most beautiful thing I\'ve *ever* seen! Even better than the horse!',
        ],
        next: 'father',
      },
      father: {
        text: [
          'Then the sea rises. A great wave lifts from the water, and on its crest sits a huge, bearded merman with a golden crown and a trident. The Sea King.',
          '@coralie:surprised D-Daddy!',
          'The King looks at you for a very long moment. You hold his gaze. You don\'t let go of Coralie\'s hand.',
          'Finally, he sighs, a sound like the tide going out.',
          '@seaking My daughter has been sneaking to the surface since she was a child. She talks of nothing but you. I have come to see if you are worthy.',
          'Coralie squeezes your hand so hard it hurts.',
          '@seaking ...She is happy. I have never seen her so happy. That will do.',
          'He begins to lift his trident.',
        ],
        choices: [
          { text: 'Hold her hand and let him finish.', go: 'bless' },
          { text: '"Your Majesty, wait. I don\'t want her to come up. I want to come *down.*"', go: 'sea', if: 'coralie_moonkiss' },
          { text: 'Squeeze her hand. "Tell him about the bathtub, Coralie."', go: 'tub', if: ['coralie_date_dinner', { any: ['coralie_truth', 'coralie_danced', 'coralie_carried'] }] },
        ],
      },
      bless: {
        text: [
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
          { if: 'coralie_waved', text: 'The fishermen of Saltbreeze leave forks on your doorstep every Starfall. She has four hundred. She has named every one.' },
          'Some nights you sleep in the house. Some nights she kisses you and pulls you down into the grotto, and you sleep among the glowing coral, breathing the sea.',
          'Her father visits every Starfall. He brings you a gift each time: a pearl, a shell, a ship\'s bell from an old wreck. Coralie says it means he likes you. He insists it does not.',
          'He always stays for dinner, though. He has developed a very serious fondness for bread.',
        ],
        ending: 'coralie',
      },
      sea: {
        text: [
          'The trident stops. The Sea King\'s eyebrows, which are made largely of foam, climb toward his crown.',
          '@seaking ...You wish to come *down?* A human? To *give up* the land? The land is my daughter\'s whole obsession. You *have* the land.',
          '@you She kissed me under the full moon. She said a bit of me belongs to the sea now. I\'d like the rest of me to catch up.',
          'Coralie\'s tail stops mid-swish. Her scales flash white, then deep pink. She grabs your face in both wet hands.',
          '@coralie:surprised NO! No — not the *knees!* You\'d lose the *knees!* And the little dips! And your *feet*, with their little fingers —',
          '@you You\'d still have me.',
          '@coralie:sad ...I would, wouldn\'t I.',
          '@coralie:blush ...Can they be *pink?* The scales? I want everyone to know.',
          'The Sea King laughs, a deep rolling laugh like a wave breaking on a sea-wall, and lowers the trident until its tip touches the water by your feet. Cold light rushes up your legs. Your legs are no longer there. In their place is something long, strong and silver-pink, with a fin at the end that you have absolutely no idea how to work.',
          'You fall over sideways into the shallows. Coralie shrieks with laughter and catches you.',
          '@coralie:happy Oh, you\'re *terrible* at it! Oh, I\'m going to teach you *everything!*',
        ],
        next: 'sea_epilogue',
      },
      sea_epilogue: {
        text: [
          '*Some time later...*',
          'It takes you a month to learn to swim in a straight line, and another to stop panicking every time you remember to breathe. Coralie teaches you the way you once taught her to walk: holding both your hands, swimming backwards, laughing every time you crash into the coral.',
          'The court of the Coral Throne has never had a surface-born subject before. You become, immediately and to your great surprise, a celebrity.',
          'You are made Royal Ambassador to the Surface, which means that every evening, in the great pearl hall, the merfolk gather round to hear you explain human things. What forks are *really* for. Why people wear shoes. What a "Tuesday" is. Coralie sits at your side through every lecture, heckling, correcting you lovingly and incorrectly. ("It\'s a *dinglehopper.* Tell them it\'s a dinglehopper!") The court sides with her. Officially, by royal decree, forks are now for hair.',
          'Her sisters adore you. Her father pretends not to, and then quietly gives you the best seat at every feast.',
          'The grotto becomes a museum. You add your old boots to the collection. Coralie labels them: *FOOT HOUSES (retired).* She visits them sometimes and pats them fondly.',
          'Once a year, at Starfall, the Sea King grants you both legs until sunrise. You walk up the beach steps hand in hand, wobbling, and go straight to the bakery on Market Street, and eat bread until dawn.',
          'She still cries every time.',
          'So, now, do you.',
        ],
        ending: 'coralie_sea',
      },
      tub: {
        text: [
          'Coralie takes a deep breath, sits up as tall as a mermaid can sit, and puts one hand flat on her father\'s trident.',
          '@coralie Daddy. Wait. I don\'t want legs.',
          '@seaking ...You have wanted legs since you were *seven.*',
          '@coralie:smug I know. But I found something better. It\'s called a *bathtub.* On *wheels.* You fill it with the sea and somebody you love pushes you anywhere you want. We went to a *tavern* in it. We took the door off.',
          '@seaking A... bath. On wheels.',
          '@coralie:happy I don\'t want to be a different shape, Daddy. I *like* my tail. I like being a mermaid! I just want to see everything. Mountains! Deserts! A *library!* More horses! There\'s a place called the Ironpeaks and nobody there has *ever* seen a mermaid!',
          'She looks at you, glowing.',
          '@coralie:blush And {name} says they\'ll push.',
          'The Sea King looks at his daughter. He looks at you. He looks, for a long, helpless moment, at the stars, as if they might help. They do not.',
          '@seaking ...Take this.',
          'He presses a great spiral conch into your hands.',
          '@seaking Blow it if she is ever more than three days from water. I will send a wave. Perhaps a small one. Perhaps a *sea serpent.* Do not test me, human.',
          '@coralie:happy He *likes* you!',
        ],
        next: 'tub_epilogue',
      },
      tub_epilogue: {
        text: [
          '*Some time later...*',
          'The Great Bathtub Odyssey begins in the spring: one copper tub, reinforced, on four sprung wheels, pulled by a patient cart-horse Coralie names Admiral Hay, and pushed up the steep bits by you.',
          'You travel the whole kingdom. Rivers, lakes, wells, hot springs, a duck pond in a village so small it doesn\'t have a name. Word travels ahead of you, and soon whole towns come out to meet "the Tub Princess" with buckets of water held over their heads like offerings.',
          'She sees mountains. She sees a desert, briefly, very nervously, at speed. She sees the Grand Library from the inside, by special arrangement, through a window, with her elbows on the sill. She sees four hundred and twelve horses and has opinions about every one of them.',
          'She writes a book: *A Mermaid\'s Guide to the Surface (Mostly Correct).* The chapter on forks is eleven pages long. You are not allowed to edit it.',
          'At night you camp on riverbanks, you on the grass and her in the shallows, your hands meeting in the middle. She tells you what the river fish have said about you. It is usually rude. She defends your honor fiercely in Trout.',
          'You never do blow the conch. You keep it anyway, on the edge of the tub. Sometimes, on very quiet nights, it hums, as if somebody on the other end is listening and pretending not to miss her.',
          'Every Starfall, you roll her down to the nearest sea, wherever in the kingdom you happen to be, and you sit half in the waves together and watch the stars fall into the water.',
          'Then you fill the tub back up, and keep going.',
        ],
        ending: 'coralie_tub',
      },
    },
  },
});
