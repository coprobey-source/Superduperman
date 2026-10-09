FL.addCharacter({
  id: 'hilde',
  name: 'Hilde Stonebrew',
  short: 'Hilde',
  trope: 'Gruff Tomboy Dwarf Blacksmith',
  color: '#d97b3a',
  favStat: 'might',
  endingTitle: 'Forged Together',
  teaser: 'A short, broad-shouldered woman covered in soot is hammering a red-hot blade and swearing at it in Dwarvish.',
  blurb: 'Master smith of the Stonebrew Forge: four feet of muscle, soot and stubbornness. Out-drinks, out-works and out-swears everyone in Clichéton. Thinks romance is for elves and poets. Has a secret sketchbook full of delicate jewelry designs she\'s never dared to make.',
  schedule: ['artisan', 'artisan', 'tavern'],
  gifts: { love: ['ale'], like: ['gears', 'axe', 'gem', 'steak'], hate: ['roses', 'perfume'] },
  giftLines: {
    love: ['She cracks the keg open with her bare hands and drinks straight from it.', '@hilde *GLUG GLUG GLUG.* HAAAH. Now *that\'s* a proper Ironpeak stout! You know your ale, surfacer. Come \'ere —', 'She claps you on the back hard enough to dislodge a filling.'],
    like: '@hilde Hm. Useful. Good quality. You\'ve got an eye for craft, I\'ll give you that.',
    neutral: '@hilde What am I s\'posed to do with this? ...Fine, fine, I\'ll put it on the shelf. With the other junk people give me.',
    hate: ['She holds it at arm\'s length, nose wrinkled.', '@hilde Flowers? Stink-water? Do I look like an *elf* to you? Get it out of my forge before it rusts the anvils.'],
  },
  talk: [
    ['@hilde Oi. You. Hold these tongs. No, the *other* end. The end that isn\'t on fire. Gods, surfacers.'],
    ['@hilde Dwarven proverb: "A good blade, a good ale, and a good grudge will see you through any winter." ...I got a lot of grudges. Want to hear \'em? It\'ll take a while.'],
    ['@hilde My da wanted me to marry a nice dwarf lad and make babies and shields. Made the shields. Skipped the rest. Best decision I ever made.'],
    ['She\'s sitting on an anvil, eating a meat pie in three bites.', '@hilde Lunch. Want some? Don\'t answer, you\'re having some. You\'re too skinny. Swing a hammer, you\'ll grow.'],
    ['@hilde The elf from the library came in yesterday. Wanted a "delicate silver circlet." Delicate! I make *axes.* ...I made it anyway. It\'s alright, I s\'pose. Don\'t tell anyone.'],
    ['@hilde You keep coming round the forge. People\'ll talk. ...Let \'em. Pass me that hammer.'],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'The Stonebrew Forge is a cavern of heat and noise. Sparks shower from an anvil where a stocky woman — barely four feet tall, but as broad across the shoulders as a door — is hammering a glowing blade into shape. Her braided copper hair is tied up in a leather band. Her arms are corded with muscle and freckled with burn scars.',
          '@hilde — *stupid, stubborn, rock-headed* — oi! You! Don\'t just stand there gawking! Grab those bellows and PUMP!',
        ],
        aff: 10,
        choices: [
          { text: 'Grab the bellows and pump with all your strength. [Might check 1]', check: { stat: 'might', dc: 1 }, pass: 'pump_win', fail: 'pump_fail' },
          { text: '"Say please."', go: 'please' },
          { text: 'Hand her the tongs she\'s reaching for instead.', go: 'tongs' },
        ],
      },
      pump_win: {
        text: [
          'You heave on the bellows. The coals roar white-hot. She plunges the blade back in, pulls it out, hammers it twice more, then quenches it in a hiss of steam.',
          'She holds it up to the light. It\'s flawless.',
          '@hilde Huh. Not bad. You\'ve got some meat on you after all.',
        ],
        aff: 6,
        next: 'name',
      },
      pump_fail: {
        text: [
          'You pump the bellows. They wheeze. You pump harder. They wheeze louder. She sighs, shoves you aside, and does it herself with one arm while hammering with the other.',
          '@hilde Surfacers. All noodle arms. We\'ll fix that.',
        ],
        aff: 3,
        next: 'name',
      },
      please: {
        text: [
          'She stops mid-swing and stares at you. Then she barks out a laugh.',
          '@hilde *Please?* Ha! Cheeky! Fine. *Please* pump the bloody bellows before my blade cools, your highness.',
          'You pump. She grins the whole time.',
        ],
        aff: 5,
        next: 'name',
      },
      tongs: {
        text: [
          'She\'s reaching blindly behind her for something. You notice the tongs on the bench and press them into her hand.',
          'She grips them, pulls the blade out of the coals, and only then looks at you.',
          '@hilde ...You knew what I needed before I asked. Huh. Most people just get in the way.',
        ],
        aff: 6,
        next: 'name',
      },
      name: {
        text: [
          'She wipes her hands on her apron, leaving black streaks, and sticks one out. Her grip is like a vise.',
          '@hilde Hilde Stonebrew. Master smith. Best in Clichéton. Best this side of the Ironpeaks, if I\'m honest, and I always am.',
          '@you {name}.',
          '@hilde {name}. You can come back, if you like. I always need a spare pair of hands. Bring ale.',
          'As you leave, you notice a battered leather sketchbook lying open on her workbench. On the page: a delicate, intricate drawing of a silver necklace, all filigree and tiny flowers. She snaps it shut the moment she sees you looking.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Hilde slams a tankard down in front of you at the Tipsy Wyvern. Then another. Then another. There are now twelve tankards on the table.',
          '@hilde Right. Dwarven tradition. You want to be friends with a Stonebrew, you drink with a Stonebrew. First one to fall off their stool buys the next round. Forever.',
          '@you Forever?',
          '@hilde *Forever.* My cousin Durin\'s still paying for a round from fifty years ago.',
          'The whole tavern is gathering to watch.',
        ],
        choices: [
          { text: 'Drink! [Might check 2]', check: { stat: 'might', dc: 2 }, pass: 'drink_win', fail: 'drink_lose' },
          { text: 'Pour your ale into the potted plant when she isn\'t looking.', go: 'cheat' },
        ],
      },
      drink_win: {
        text: [
          'One. Two. Three. Five. Eight. The tavern is chanting. Hilde is grinning. You\'re sweating. Ten. Eleven.',
          'On the twelfth, she looks at you over the rim of her tankard with real respect. She drinks it. You drink yours.',
          'You both sit there, swaying gently, staring at each other.',
          'Then — slowly, majestically, like a felled oak — Hilde tips backward off her stool.',
          'The tavern explodes. Hilde lies on the floor, laughing so hard she can\'t breathe.',
          '@hilde Nobody — *nobody* has outdrunk a Stonebrew since — HA! I\'m buying! Forever! You magnificent surfacer!',
        ],
        aff: 10,
        next: 'walk',
      },
      drink_lose: {
        text: [
          'One. Two. Three. Four. On the fifth, the room starts to spin. On the sixth, you are fairly sure there are two Hildes.',
          'On the seventh, you fall off your stool.',
          'Hilde peers down at you from very far away.',
          '@hilde Seven! Not bad for a surfacer! Most of \'em fall at three!',
          'She hauls you up and drapes your arm over her shoulder.',
        ],
        aff: 5,
        next: 'walk',
      },
      cheat: {
        text: [
          'You discreetly pour your ale into the potted fern beside the table. And again. And again. Hilde drinks hers. By the tenth, she\'s swaying — and the fern is *definitely* swaying.',
          'On the twelfth, Hilde looks at you. Looks at the fern. Narrows her eyes.',
          '@hilde ...That plant\'s drunker than I am.',
          'A long pause. Then she bursts out laughing.',
          '@hilde Sneaky! Sneaky little surfacer! You know, in the Ironpeaks we\'d call that *tactics.* I like you.',
        ],
        aff: 7,
        next: 'walk',
      },
      walk: {
        text: [
          'Afterward, you walk her home through the cool night. She\'s humming a dwarven drinking song, badly. Halfway there, she stops under a lamppost and looks up at you.',
          '@hilde You know what\'s funny? I don\'t usually like people. They\'re loud and they lie and they want weapons and they never say thanks.',
          '@hilde But you\'re alright. You\'re more\'n alright.',
          'She pokes you hard in the chest.',
          '@hilde Don\'t let it go to your head.',
        ],
        choices: [
          { text: '"You\'re more than alright too, Hilde."', go: 'alright', aff: 6 },
          { text: '"Will you show me your sketchbook sometime?"', go: 'sketch', aff: 8 },
        ],
      },
      alright: {
        text: [
          '@hilde ...Pfft. Shut up.',
          'She bumps her shoulder against your hip — the highest she can reach — and leaves it there for the rest of the walk.',
        ],
        end: true,
      },
      sketch: {
        text: [
          'She stops dead. Even in the lamplight you can see her go red under the soot.',
          '@hilde You... you saw that.',
          '@hilde It\'s nothing. Silly doodles. Stonebrews make *weapons*, not trinkets. My da\'d laugh me out of the clan.',
          '@you They looked beautiful.',
          'She doesn\'t answer for a long time.',
          '@hilde ...Maybe. Someday. If you\'re very lucky and very quiet about it.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          '@hilde I need starsilver. For a commission. There\'s a vein in the old mine under the hills. Abandoned. Dangerous. Probably haunted. You coming?',
          'The mine is dark, narrow and very, very deep. Hilde leads the way with a lantern, completely at home, tapping the walls with her hammer and listening.',
          '@hilde Hear that? Hollow. That\'s where the vein is. Now we just — ',
          'There\'s a groan from overhead. A crack. A rumble.',
          '@hilde ...*Oh, rocks.*',
          'The ceiling comes down.',
        ],
        choices: [
          { text: 'Shove Hilde clear of the falling rocks. [Might check 3]', check: { stat: 'might', dc: 3 }, pass: 'shove', fail: 'trapped' },
          { text: 'Trust her instincts — follow wherever she dives.', go: 'follow', aff: 5 },
        ],
      },
      shove: {
        text: [
          'You throw yourself at her and knock her into a side passage just as the tunnel collapses where she was standing. Rock thunders down. Dust fills the air.',
          'When it settles, you\'re both alive, pressed together in a small pocket of tunnel, sealed in by rubble. The lantern flickers on the floor.',
          'Hilde stares at you, wide-eyed.',
          '@hilde You... you pushed *me* out of the way. Nobody protects a dwarf in a mine. *We* protect *you.*',
        ],
        aff: 10,
        next: 'dark',
      },
      follow: {
        text: [
          'She grabs your hand and dives sideways into a cleft in the rock. You go with her. The tunnel collapses behind you.',
          'When the dust settles, you\'re both alive, crammed into a small pocket of tunnel, sealed in by rubble.',
          '@hilde Good. You listened. Most surfacers freeze. Freeze, and you\'re flat.',
        ],
        next: 'dark',
      },
      trapped: {
        text: [
          'You lunge for her, but she\'s faster: she grabs *you* and hauls you into a side passage as the ceiling comes down. A rock clips your shoulder. Then silence.',
          'You\'re both alive, pressed together in a cramped pocket of tunnel, sealed in by rubble.',
          '@hilde You alright? Shoulder? ...Idiot. You were trying to save *me*, weren\'t you. In a *mine.* I\'m a *dwarf.*',
          'She doesn\'t sound angry. She sounds shaken.',
        ],
        aff: 6,
        next: 'dark',
      },
      dark: {
        text: [
          'It takes hours to dig out. Hilde works the rocks with her hammer, testing each one, while you haul them away. In the flickering light, sweating, exhausted, you talk.',
          '@hilde My ma was a jeweler. Best in the Ironpeaks. Made a crown for the Mountain King. Da said it was a waste — "real dwarves make steel." She stopped making jewelry after they married.',
          '@hilde She died when I was forty. Young, for a dwarf. I found her old tools in the attic. I\'ve been drawing ever since. I\'ve just never had the guts to *make* any of it.',
          'She pauses, a stone in each hand.',
          '@hilde I\'m the bravest smith in Clichéton. I\'ve forged blades in dragonfire. And I\'m scared of a *necklace.*',
        ],
        choices: [
          { text: '"Then make one. For me. I\'ll wear it every day."', go: 'forme', aff: 10 },
          { text: '"Your mother would be proud of you either way."', go: 'proud', aff: 8 },
        ],
      },
      forme: {
        text: [
          'She stops digging. She looks at you in the lantern-light for a long, long moment.',
          '@hilde ...You\'d wear it? Dwarf-made? Not even a *weapon?*',
          '@you Every day.',
          'She turns back to the rocks quickly. You hear her sniff, once, very hard. She says it\'s the dust.',
          'Finally, a gap opens in the rubble, and moonlight spills in. She grabs your hand and doesn\'t let go all the way home.',
        ],
        end: true,
      },
      proud: {
        text: [
          '@hilde You don\'t know that.',
          '@you I know she made a crown for a king, and her daughter forges blades in dragonfire. Seems like the apple didn\'t fall far.',
          'She laughs — a small, wet, startled laugh.',
          '@hilde ...Smooth-talking surfacer.',
          'When you finally break through to moonlight, she pulls you into a hug so tight your ribs creak. It lasts a long time.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Hilde shuts the forge early. She\'s never done that before. She stands by the anvil in the glow of the banked coals, scrubbed clean of soot for once, copper hair loose around her shoulders. She looks nervous. Hilde Stonebrew never looks nervous.',
          '@hilde Close your eyes. Hold out your hand.',
          'Something cool and delicate drops into your palm. You open your eyes. It\'s a necklace: fine silver filigree twisted into tiny flowers and vines, with a single starsilver pendant shaped like a hammer crossed with a rose. It is the most beautiful thing you\'ve ever seen.',
          '@hilde First piece. Took me nine nights. Ruined about forty tries. The hammer\'s for me. The rose is... well. You.',
          '@hilde Is it — is it any good?',
        ],
        choices: [
          { text: '"Put it on me."', go: 'wear', aff: 10 },
          { text: 'Lift her up onto the workbench so she\'s at eye level. [Might check 4]', check: { stat: 'might', dc: 4 }, pass: 'lift', fail: 'wear' },
        ],
      },
      wear: {
        text: [
          'She steps up onto an anvil to reach and fastens it around your neck with hands that shake slightly. She smooths it against your collarbone with one rough, scarred thumb.',
          '@hilde ...Looks good on you. Course it does. *I* made it.',
          'And then she grabs your collar and kisses you, standing on the anvil, her hands fisted in your shirt like she\'s afraid you\'ll get away.',
        ],
        next: 'night',
      },
      lift: {
        text: [
          'You take her by the waist and lift her — not an easy thing, she\'s solid muscle — and set her on the high workbench so that, for once, her eyes are level with yours.',
          'She blinks at you. Her face goes crimson.',
          '@hilde Oi — I\'m not a *bloody child* — ',
          '@you I know. I just wanted to see you properly.',
          'Her protest dies. She puts the necklace on you herself, slowly, eyes never leaving yours.',
          '@hilde ...Well. Now you\'ve seen me.',
          'She pulls you in and kisses you, fierce and certain.',
        ],
        aff: 14,
        next: 'night',
      },
      night: {
        text: [
          'She tastes like ale and smoke. Her hands are rough and strong and astonishingly gentle. She swears under her breath in Dwarvish — fondly, you think — every time you make her gasp.',
          'There is a cot in the back room of the forge where she sleeps during long commissions. It is not built for two. It does not survive the night. Neither of you particularly cares.',
          'She is the way she is with everything: honest, direct, hard-working, and absolutely determined to do the job properly. At one point she grins up at you, hair wild, and says *we\'re not done until it\'s right*, and you laugh so hard you can\'t breathe.',
          '...',
          'In the gray dawn, you wake on a pile of leather aprons on the forge floor, the cot in splinters beside you. Hilde is sitting up, sketching furiously in her book.',
          '@hilde Morning. Don\'t move. I\'m designing you a ring.',
          '@you A ring?',
          '@hilde Shut up. Don\'t read into it. ...Read into it a little.',
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Hilde climbs the festival hill with a keg on her shoulder and a wooden box under her arm. She plants herself beside you, cracks the keg, pours two tankards, and hands you one.',
          '@hilde Right. Starfall. Dwarves don\'t do this, you know. We live underground. Never seen the stars fall. Never cared to.',
          '@hilde Thought I\'d give it a go. With you.',
          'When the stars start to fall, she goes completely silent, her mouth hanging open, her tankard forgotten in her hand.',
          '@hilde ...By my beard. Ma would\'ve loved this. All that silver. All that *light.*',
        ],
        next: 'ring',
      },
      ring: {
        text: [
          'She opens the wooden box. Inside, on a bed of velvet, is a ring: a band of starsilver and dwarven gold, braided together like two strands of hair, set with a tiny chip of fallen star that glows faintly in the dark.',
          '@hilde Dwarves don\'t kneel. Bad for the knees. So I\'m just going to stand here and ask.',
          '@hilde Will you be my — ah, bloody hell — will you marry me, you ridiculous surfacer?',
          'You say yes. She roars with laughter, picks you up — easily, she could always pick you up — and spins you around under the falling stars while half the hill applauds.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'The Stonebrew Forge gets a new sign: *STONEBREW & {name} — Weapons, Armor & Fine Jewelry.* The jewelry sells faster than the axes. Hilde complains about this constantly and is secretly delighted.',
          'Her da comes down from the Ironpeaks for the wedding. He grumbles about surfacers. Then he sees the necklace you\'re wearing, and the filigree on it, and he goes very quiet and has to step outside for a while.',
          'When he comes back, he hugs his daughter for the first time in fifty years.',
          'You learn to swing a hammer. She learns to say "I love you" without immediately adding "shut up." It takes about the same amount of practice.',
          'And every Starfall, the two of you climb the hill with a keg and a box, and she gives you something new she\'s made — something delicate and impossible and beautiful — and says "Don\'t read into it."',
          'You always read into it.',
        ],
        ending: 'hilde',
      },
    },
  },
});
