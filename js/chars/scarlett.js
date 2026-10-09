FL.addSpeaker('watch', 'Harbor Watchman', '#8aa1b8');
FL.addSpeaker('crew', 'First Mate Bones', '#c9a36b');

FL.addCharacter({
  id: 'scarlett',
  name: 'Captain Scarlett "Red" Vane',
  short: 'Scarlett',
  trope: 'Swashbuckling Pirate Captain',
  color: '#e8383d',
  favStat: 'might',
  endingTitle: 'A Heart for a Compass',
  teaser: 'A woman in a crimson coat and an enormous feathered hat is swinging from a ship\'s rigging, laughing at the harbor watch.',
  blurb: 'Captain of the *Crimson Tide*, the most notorious — and most charming — pirate ship on the Sapphire Sea. Brash, boastful, quick with a blade and quicker with a wink. She robs only the rich, frees every slave ship she finds, and has never once stayed in one port long enough to fall in love. She respects a strong sword arm.',
  schedule: ['docks', 'docks', 'tavern'],
  gifts: { love: ['rum'], like: ['dagger', 'gem', 'comb', 'fish'], hate: ['tea'] },
  giftLines: {
    love: ['She snatches the bottle, bites the cork out, and takes a long swig.', '@scarlett *Ahhhh.* Now THAT\'S a gift fit for a captain! You know the way to a pirate\'s heart, love. It\'s through her liver.', 'She winks and tosses you the bottle. It\'s half empty already.'],
    like: '@scarlett Ooh, shiny! Bit o\' plunder freely given! That\'s the best kind. No cannons required.',
    neutral: '@scarlett Huh. Well, it\'s not treasure. But I s\'pose I\'ll keep it in the hold. With the other not-treasure.',
    hate: ['She stares at the tea set like it personally offended her mother.', '@scarlett *Tea?* That\'s what the Royal Navy drinks. Pinky out, stiff upper lip, hanging pirates at dawn. Get it off my deck, love.'],
  },
  talk: [
    ['@scarlett Ahoy, landlubber! Come to see the finest ship on the Sapphire Sea? Or her finer captain? ...It\'s me. I\'m the finer one.'],
    ['@scarlett I once fought a kraken with nothing but a cutlass and a very stern expression. The kraken lost. Mostly because of the expression.'],
    ['@scarlett Rule one of piracy: never trust a man with a parrot. They always have something to hide. Usually, more parrots.'],
    ['She\'s sitting on a barrel, sharpening her cutlass and humming a shanty.', '@scarlett "Oh, the captain had a heart of gold, but she buried it at sea..." Old song. Nobody knows who wrote it. ...It was me. I wrote it. Don\'t tell anyone.'],
    ['@scarlett Every port I sail into, there\'s someone waving goodbye on the dock. Never someone waving hello. Funny thing, that.'],
    ['@scarlett My first mate, Bones, says I\'ve been docked in Clichéton three weeks longer than planned. He\'s asked why. I told him the rum\'s good.', 'She looks at you sideways.', '@scarlett The rum\'s not *that* good.'],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'A bell is clanging furiously on the docks. Harbor watchmen are running, shouting, pointing up at the rigging of a merchant ship. And swinging from a rope between the masts, laughing, is a woman in a long crimson coat and an enormous feathered tricorn hat.',
          '@scarlett Catch me if you can, lads! Oh wait — you can\'t!',
          'She lets go of the rope, somersaults through the air, and lands on the dock directly in front of you. She has wild red curls, a scar across one eyebrow, a gold hoop earring, and the most infuriatingly charming grin you have ever seen.',
          '@watch STOP THAT PIRATE!',
          'She looks at you. She looks at the approaching watchmen. She winks.',
          '@scarlett Well, love? You going to stop me?',
        ],
        aff: 10,
        choices: [
          { text: 'Step aside and point the watchmen the wrong way.', go: 'help' },
          { text: 'Grab her wrist. "Maybe I will." [Might check 2]', check: { stat: 'might', dc: 2 }, pass: 'grab_win', fail: 'grab_fail' },
          { text: '"Depends. What did you steal?"', go: 'steal' },
        ],
      },
      help: {
        text: [
          '@you She went that way! Toward the fish market!',
          'The watchmen thunder past. Scarlett leans casually against a barrel beside you until they\'re gone, then tips her hat.',
          '@scarlett Well, well. A landlubber with a heart of gold. I\'ll remember that, love.',
        ],
        aff: 6,
        next: 'name',
      },
      grab_win: {
        text: [
          'You catch her wrist as she darts past. She spins, startled — and you hold on. She tugs. You don\'t budge.',
          'Her grin widens.',
          '@scarlett Oho! Strong grip! I *like* that in a person.',
          'Then she twists her wrist, slips free like an eel, and kisses your cheek before you can react.',
          '@scarlett But not strong enough. Next time, love!',
          'She vaults over the watchmen\'s heads and is gone.',
        ],
        aff: 7,
        next: 'name_later',
      },
      grab_fail: {
        text: [
          'You lunge for her wrist. She sidesteps, and you trip over a coil of rope and land face-first on the dock.',
          '@scarlett Oof! Valiant attempt! Points for enthusiasm!',
          'She tips her hat to you and vaults over the watchmen\'s heads.',
        ],
        aff: 3,
        next: 'name_later',
      },
      steal: {
        text: [
          'She pulls a heavy leather ledger from inside her coat and waves it at you.',
          '@scarlett The private records of Lord Pomfrey\'s trading company. Proof he\'s been smuggling slaves on his "spice ships." I\'m taking it to the magistrate. Well. Slipping it under the magistrate\'s door. Pirates aren\'t welcome in courtrooms.',
          '@you ...Then go. I didn\'t see you.',
          'She grins and tips her hat.',
        ],
        aff: 7,
        next: 'name',
      },
      name: {
        text: [
          '@scarlett Captain Scarlett Vane. "Red," to my friends. Of the *Crimson Tide* — that\'s her, anchored in the bay, the prettiest ship you ever saw.',
          '@you {name}.',
          '@scarlett {name}! Good name. Strong. Sounds like it could swing a cutlass.',
          '@scarlett Come find me at the docks, {name}. Or the Wyvern, after dark. I\'ll buy you a rum. Pirates always pay their debts.',
          'And she\'s off, coat flaring, laughing all the way down the pier.',
        ],
        end: true,
      },
      name_later: {
        text: [
          'That evening, a note is delivered to you at the tavern, tied to a gold doubloon.',
          '*To the landlubber with the grip. Captain Scarlett "Red" Vane of the Crimson Tide requests a rematch. Docks or tavern, whenever you like. First rum\'s on me. — S.V.*',
          'Below that, a little drawing of a skull wearing a heart-shaped eyepatch.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'The deck of the *Crimson Tide* gleams in the morning sun. Scarlett tosses you a cutlass and draws her own.',
          '@scarlett Every member of my crew learns to fight. Even the cook. *Especially* the cook. You want to drink with pirates, love, you learn to fight like one.',
          '@scarlett First lesson: there are no rules. Second lesson: there are *no rules.* Third lesson: if someone says "no rules," they\'re about to kick you in the shin.',
          'She kicks you in the shin.',
        ],
        choices: [
          { text: 'Fight back with everything you\'ve got. [Might check 2]', check: { stat: 'might', dc: 2 }, pass: 'duel_win', fail: 'duel_lose' },
          { text: 'Fight dirty — throw a bucket of seawater at her.', go: 'bucket', aff: 7 },
        ],
      },
      duel_win: {
        text: [
          'Steel rings across the deck. She\'s fast — impossibly fast, dancing across the planks, flicking her blade at your face — but you hold your ground, parry, and press. The crew gathers round, whooping.',
          'Finally, you catch her blade on your hilt, twist, and send her cutlass clattering across the deck.',
          'Silence. Scarlett stares at her empty hand. Then she throws her head back and roars with laughter.',
          '@scarlett Disarmed! On my own deck! In front of my crew! Oh, you\'re *wonderful!*',
          '@crew Cap\'n hasn\'t lost a duel in nine years.',
          '@scarlett *Shut it, Bones.*',
        ],
        aff: 10,
        next: 'rigging',
      },
      duel_lose: {
        text: [
          'Steel rings across the deck. She dances circles around you, laughing, tapping you on the shoulder, the hip, the rear, with the flat of her blade. After a minute, she flicks your cutlass out of your hand and catches it.',
          '@scarlett Not bad! Not good, but not bad. You didn\'t drop it until I made you. Most landlubbers drop it the moment I smile.',
          'She hands it back, hilt first.',
          '@scarlett We\'ll make a pirate of you yet.',
        ],
        aff: 5,
        next: 'rigging',
      },
      bucket: {
        text: [
          'You grab the nearest bucket and fling its contents straight at her. Seawater, and a startled fish, hit her square in the face.',
          'The crew falls silent. Scarlett stands there, dripping, a mackerel on her hat.',
          'Then she grins — a huge, delighted grin.',
          '@scarlett *Now* you\'re thinking like a pirate!',
        ],
        next: 'rigging',
      },
      rigging: {
        text: [
          'Afterward, she takes you up the rigging — all the way to the crow\'s nest, high above the bay. From up here the whole harbor is spread out below, and the open sea stretches out to the horizon, blue and endless.',
          '@scarlett This is my favorite place in the world. Up here, it\'s just you, the wind, and the edge of the map.',
          '@scarlett Every port I sail into, I think about staying. Settling down. And then I climb up here and look at the horizon, and I can\'t. There\'s always another island. Another adventure.',
          'She looks at you sideways, the wind tugging at her red curls.',
          '@scarlett Ever wanted to see what\'s past the edge of the map, love?',
        ],
        choices: [
          { text: '"With you? Absolutely."', go: 'yes', aff: 8 },
          { text: '"I think I\'d rather see what\'s right here."', go: 'here', aff: 7 },
        ],
      },
      yes: {
        text: [
          'She laughs, delighted, and throws an arm around your shoulders.',
          '@scarlett Careful, love. Say things like that to a pirate and she might just kidnap you.',
          '@you Is that a threat?',
          '@scarlett It\'s a *promise.*',
        ],
        end: true,
      },
      here: {
        text: [
          'She looks at you for a long moment, the grin fading into something softer and more thoughtful.',
          '@scarlett ...Funny. That\'s the first time in nine years anyone\'s made "right here" sound like an adventure.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'Scarlett bursts into the tavern waving a weathered scrap of parchment.',
          '@scarlett A MAP! A real one! Captain Blackheart\'s treasure, buried on Skull Isle, half a day\'s sail from here! I\'m sailing on the evening tide. And I want you on my crew.',
          '@scarlett Only for this voyage! Probably. Unless you like it. Then forever. No pressure.',
          'The voyage is glorious — until it isn\'t. Halfway to Skull Isle, the sky turns black. A storm comes screaming out of the west, and the *Crimson Tide* is tossed like a toy on mountainous waves.',
          '@scarlett ALL HANDS! REEF THE MAINSAIL! — {name}, the rigging\'s snapped! If that sail goes, we go with it!',
        ],
        choices: [
          { text: 'Climb the mast in the storm and secure the sail. [Might check 3]', check: { stat: 'might', dc: 3 }, pass: 'mast', fail: 'mast_fail' },
          { text: 'Take the wheel so Scarlett can climb.', go: 'wheel', aff: 7 },
        ],
      },
      mast: {
        text: [
          'You climb. The rain is horizontal. The wind tries to tear you off the mast. You climb anyway, hand over hand, and reach the snapped line and haul it in with every ounce of strength you have, and lash it fast.',
          'The sail holds. The ship steadies. Below, the crew cheers so loudly you can hear it over the storm.',
          'When you climb down, Scarlett catches you at the bottom of the rigging and doesn\'t let go.',
          '@scarlett You absolute madwoman — madman — mad *whatever you are* — you could have died!',
          '@scarlett That was the bravest thing I\'ve ever seen anyone do on this ship. And I\'ve seen Bones eat the cook\'s stew.',
        ],
        aff: 12,
        next: 'island',
      },
      mast_fail: {
        text: [
          'You climb. The wind snatches you off the rigging halfway up. You fall — and Scarlett catches you, one arm around your waist, the other clinging to a rope.',
          '@scarlett GOT YOU! — Hold on to me!',
          'Together, you make it to the top and lash the sail fast. When you climb down, she\'s shaking — and it isn\'t from the cold.',
          '@scarlett Don\'t you *ever* do that again. I nearly lost you, love.',
        ],
        aff: 8,
        next: 'island',
      },
      wheel: {
        text: [
          'You grab the wheel and hold it against the storm while Scarlett scrambles up the mast like a cat. She lashes the sail. The ship steadies. When she slides back down, soaked to the bone, she finds you still holding the wheel, white-knuckled, keeping the bow into the waves.',
          '@scarlett You held her steady. In a storm. Your first time at a wheel.',
          '@scarlett Bones, are you seeing this?',
          '@crew Aye, Cap\'n. Natural sailor.',
        ],
        next: 'island',
      },
      island: {
        text: [
          'By dawn the storm has passed, and the *Crimson Tide* drops anchor off Skull Isle. You dig all morning at the spot marked X. Finally, your shovel strikes wood: an old iron-bound chest.',
          'Scarlett pries it open. Inside there\'s no gold. No jewels. Just a single compass, tarnished brass, and a faded note.',
          '*To whoever finds this: a compass that points not north, but to the thing you want most. I spent my life chasing treasure. This was the only treasure that mattered. — Blackheart.*',
          'Scarlett picks up the compass. The needle spins wildly — and then settles.',
          'It\'s pointing at you.',
        ],
        choices: [
          { text: '"...Is it broken?"', go: 'broken', aff: 6 },
          { text: 'Say nothing. Just look at her.', go: 'look', aff: 10 },
        ],
      },
      broken: {
        text: [
          'She shakes it. She turns in a circle. The needle stays pointing at you.',
          '@scarlett ...It\'s not broken.',
          'For once, Captain Scarlett Vane has nothing clever to say. She snaps the compass shut and stuffs it into her coat, cheeks as red as her hair.',
          '@scarlett We are *never* speaking of this. Bones! We\'re sailing home!',
        ],
        end: true,
      },
      look: {
        text: [
          'You don\'t say anything. Neither does she. She looks at the compass, and then at you, and then at the compass again.',
          'Then she closes it, very carefully, and puts it in her coat pocket over her heart.',
          '@scarlett Nine years I\'ve been sailing, looking for something past the horizon.',
          '@scarlett Turns out I left it on the dock in Clichéton.',
          'She kisses you on the beach of Skull Isle, with the whole crew whistling and cheering from the ship.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'The *Crimson Tide* lies at anchor in the bay under a full moon. Scarlett has given the whole crew shore leave. The ship is empty, creaking softly, lanterns swaying.',
          'She\'s waiting in the captain\'s cabin — a cozy, cluttered room of maps and brass instruments and a great bed under the stern windows. She\'s taken off her hat and her coat and her boots. She looks younger without them. Nervous.',
          '@scarlett I\'ve never brought anyone in here. Not once. Captain\'s cabin\'s sacred. It\'s the only place on the sea that\'s mine.',
          'She pulls the compass out and sets it on the table. The needle swings toward you.',
          '@scarlett I\'m a pirate, love. I take what I want. But I don\'t want to *take* you. I want you to *stay.*',
        ],
        choices: [
          { text: '"I\'m not going anywhere, Captain."', go: 'stay', aff: 10 },
          { text: 'Pin her against the map table and kiss her. Pirate-style. [Might check 4]', check: { stat: 'might', dc: 4 }, pass: 'pin', fail: 'stay' },
        ],
      },
      stay: {
        text: [
          'She grins — the old, infuriating, charming grin — but her eyes are shining.',
          '@scarlett Good. Because I\'ve just raised anchor in my heart, and there\'s no turning this ship around.',
          '@scarlett ...That was a terrible line. Kiss me before I say another one.',
        ],
        next: 'night',
      },
      pin: {
        text: [
          'You close the distance and pin her back against the map table, scattering charts and compasses. She gasps — then laughs, breathless.',
          '@scarlett Oho! *Now* who\'s the pirate?',
          '@you Still you. I\'m just boarding your ship.',
          '@scarlett ...Oh, that\'s *good.* I\'m stealing that one.',
        ],
        aff: 14,
        next: 'night',
      },
      night: {
        text: [
          'The ship rocks gently beneath you. The moon pours silver through the stern windows. She\'s as bold in this as in everything — laughing, daring, demanding, swearing in at least four languages — but every so often she goes suddenly, sweetly quiet, and just holds you, as if making sure you\'re real.',
          'At one point the ship lurches on a swell and you both tumble off the bed onto a pile of maps, and she\'s laughing so hard she can barely breathe.',
          '@scarlett Rule one of romance on the high seas: *always* tie down the bed.',
          '...',
          'At dawn you lie together in the tangle of sheets and maps, her head on your chest, her red curls everywhere, the gulls crying outside.',
          '@scarlett Hey, love. You know what\'s funny?',
          '@you What?',
          '@scarlett I\'ve been all over the world. Every sea, every shore. And I\'ve never once wanted to stay in bed past sunrise.',
          'She pulls the blanket over both your heads.',
          '@scarlett The sea can wait.',
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'You don\'t watch Starfall from the hill. Scarlett sends a longboat for you, rowed by Bones in his best shirt, and takes you out past the harbor, past the lighthouse, to the open sea where the *Crimson Tide* waits with all her lanterns lit.',
          'The whole crew is on deck. They cheer when you climb aboard. Scarlett meets you at the rail in her finest crimson coat, the compass on a chain around her neck.',
          '@scarlett Best view of Starfall in the world is from the deck of a ship, love. No hills in the way. No crowds. Just sky.',
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'The stars begin to fall, and the sea reflects every one of them, so the *Crimson Tide* seems to sail through a sky full of light above and below.',
          'Scarlett takes your hand.',
          '@scarlett I\'ve got a proposition. Two, actually. First: be my first mate.',
          '@crew *Oi!*',
          '@scarlett Bones, you\'re promoted to Captain of the Longboat. Shut it.',
          '@scarlett Second...',
          'She pulls a gold ring from her pocket. It\'s set with a red gem like a drop of the sunset.',
          '@scarlett Every pirate needs someone to come home to. Even if home is a ship. Marry me, {name}. Sail with me. Let\'s see what\'s past the edge of the map. *Together.*',
          'You say yes. The crew fires every cannon on the ship in celebration. Several are accidentally loaded. Nobody minds.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'You are married on the deck of the *Crimson Tide* by a very drunk ship\'s chaplain, with the whole crew in tears. Bones gives a speech. It\'s mostly about the stew.',
          'You sail the Sapphire Sea together. You fight krakens and Navy frigates and the occasional sea serpent. You free slave ships, rob crooked merchants, and give most of it away. Scarlett teaches you every shanty she knows. You learn to swing from the rigging. You only fall in the sea twice.',
          'You come back to Clichéton every Starfall. Scarlett buys everyone at the Tipsy Wyvern a round and tells increasingly exaggerated stories about your adventures. In the latest version, you defeated the kraken by yourself. With a spoon.',
          'Blackheart\'s compass still hangs around her neck. She checks it sometimes, when she thinks you aren\'t looking.',
          'It still points to you. Every time.',
        ],
        ending: 'scarlett',
      },
    },
  },
});
