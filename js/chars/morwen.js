FL.addSpeaker('croak', 'Sir Croaksworth', '#7fae5a');

FL.addCharacter({
  id: 'morwen',
  name: 'Morwen Hazelbrook',
  short: 'Morwen',
  trope: 'Scatterbrained Witch',
  color: '#9b7fe6',
  favStat: 'wits',
  endingTitle: 'Happily Ever Potion',
  teaser: 'A cloud of purple smoke and a woman\'s voice: "That was NOT supposed to happen!" Something croaks sarcastically.',
  blurb: 'A brilliant, absent-minded swamp witch with an enormous pointed hat, a cauldron that explodes roughly twice a day, and a sardonic toad familiar named Sir Croaksworth. She is a genius at potions and a disaster at everything else, including — especially — her own feelings.',
  schedule: ['market', 'forest', 'forest'],
  gifts: { love: ['herbs'], like: ['candle', 'tome', 'scroll', 'tea'], hate: ['roses'] },
  giftLines: {
    love: ['@morwen MOONHERBS! Fresh ones! Picked under the waxing gibbous, by the smell! Do you know how hard these are to find?! Oh, I could kiss you!', 'She freezes.', '@morwen ...Hypothetically! In a scientific sense! Croaksworth, stop *looking* at me like that.'],
    like: '@morwen Ooh! Useful! Very useful! I\'ll put it in the cupboard. The *good* cupboard. Not the cupboard that bites.',
    neutral: '@morwen Hmm. I wonder what happens if I boil it. ...Don\'t answer that. I\'ll find out.',
    hate: ['@morwen Oh no — roses — I\'m allergic — *ah — ah —*', '*AH-CHOO!*', 'Her sneeze sets off a small purple explosion. When the smoke clears, her hat is on fire and her eyebrows are slightly green.', '@morwen ...I\'m fine. I\'m *fine.*'],
  },
  talk: [
    ['@morwen Oh, hello! Mind the cauldron. And the floor. And that jar. And — actually, just don\'t touch anything. Or breathe too hard.'],
    ['@croak She set her own hat on fire twice this morning. A personal record.', '@morwen CROAKSWORTH.', '@croak I merely report the facts, madam.'],
    ['@morwen I invented a potion that makes you smell colors! It worked perfectly! Unfortunately, it also makes you hear smells. Purple is *very* loud.'],
    ['@morwen My mother was a witch, and her mother, and her mother. All very proper, very scary witches. Cackling, cursing, the works. I can\'t cackle. I tried. I sound like a goose.'],
    ['She\'s staring into her cauldron, chin propped on her broom handle.', '@morwen You know what\'s the hardest potion to brew? Courage. It takes nine years and a phoenix feather. Or you just... do the scary thing anyway. Which is cheaper but much harder.'],
    ['@morwen You have the most interesting aura. Sort of a warm orange, with little sparkles. ...Oh, I said that out loud. Please disregard.'],
  ],
  scenes: {
    intro: {
      start: {
        text: [
          'Deep in the Whisperwood, a cottage with a crooked chimney is belching clouds of lavender smoke. The door bursts open, and a woman stumbles out in a cloud of sparkles, coughing.',
          'She\'s wearing an enormous pointed hat (smoldering slightly), a patched violet dress with about a hundred pockets, and spectacles that have cracked in one lens. Her dark curly hair has a twig in it. And possibly a small bird.',
          '@morwen That was NOT the right amount of newt. That was SO MUCH NEWT.',
          'She spots you. Her eyes go wide.',
          '@morwen Oh, a visitor! Wait — don\'t breathe! You might have inhaled some of the — ',
          'You sneeze. There is a puff of pink. When it clears, you feel... small. Green. Very damp.',
          'You have turned into a frog.',
        ],
        aff: 10,
        choices: [
          { text: '"Ribbit." (Calmly.)', go: 'ribbit' },
          { text: 'Hop furiously in circles.', go: 'hop' },
          { text: 'Hop over to her potion shelf and point at the antidote. [Wits check 1]', check: { stat: 'wits', dc: 1 }, pass: 'antidote', fail: 'hop' },
        ],
      },
      ribbit: {
        text: [
          '@morwen Oh, you poor thing — oh, you\'re being *so* calm about this — hold on —',
          'She rummages through her many pockets, producing a sock, a teacup, a live mouse (who looks offended), and finally a small vial, which she dumps over your head. *Pop.* You\'re yourself again, soaking wet.',
          '@morwen I am *so* sorry. You\'re the calmest frog I\'ve ever made. And I\'ve made a lot of frogs.',
        ],
        aff: 5,
        next: 'name',
      },
      hop: {
        text: [
          'You hop around in agitated circles, croaking indignantly. A large, warty toad sitting on her windowsill watches you with an expression of profound boredom.',
          '@croak Amateur.',
          '@morwen Croaksworth, be nice! Hold still, hold still —',
          'She catches you, dumps a potion over your head, and *pop* — you\'re yourself again, sitting in the dirt.',
        ],
        next: 'name',
      },
      antidote: {
        text: [
          'Frog-you hops through the cottage door, past a bubbling cauldron and a broom that\'s sweeping by itself, up a stack of books, and slaps one tiny webbed hand against a bottle labeled *UN-FROG (probably)*.',
          'She stares at you.',
          '@morwen You — you *read the label.* As a frog. That\'s *amazing.*',
          'She dumps the potion over your head. *Pop.* You\'re yourself again.',
          '@morwen Most people just panic and hop into the pond. I spent a whole week fishing out a tax collector last spring.',
        ],
        aff: 7,
        next: 'name',
      },
      name: {
        text: [
          '@morwen I\'m Morwen. Morwen Hazelbrook. Witch. Apothecary. Occasional accidental frog-maker. And this is Sir Croaksworth.',
          '@croak Charmed. Truly.',
          '@you {name}. Your toad talks.',
          '@morwen He\'s my familiar! He used to be a duke. He insulted my grandmother.',
          '@croak The finest decision of my life. The ponds are lovely this time of year.',
          '@morwen Come back sometime! I promise not to frog you again. Probably. Ninety percent. Eighty-five.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'Morwen finds you with a basket on her arm and a long list in her hand.',
          '@morwen I need ingredients! Lots of them! For a very important potion! And I need an assistant with sharp eyes because last time I went alone I picked deathcap instead of puffball and Croaksworth had to lick me to cure it.',
          '@croak I will not be doing that again.',
          'You spend the afternoon in the deep forest, gathering. Morwen knows every plant by name and tells you stories about each one. Then she holds up two nearly identical white mushrooms.',
          '@morwen Okay! Test! Which of these is a moonpuff, and which will make your face fall off?',
        ],
        choices: [
          { text: 'Examine them closely. [Wits check 2]', check: { stat: 'wits', dc: 2 }, pass: 'mush_win', fail: 'mush_fail' },
          { text: '"Neither. I\'m not touching either of them."', go: 'mush_none', aff: 5 },
        ],
      },
      mush_win: {
        text: [
          '@you This one. The moonpuff has gills that fork twice. The other one\'s gills are straight, and there\'s a ring on the stem.',
          'Morwen blinks at you. Croaksworth blinks at you. Then Morwen squeals and throws her arms around you, knocking her own hat off.',
          '@morwen YOU READ MY FIELD GUIDE! Nobody reads my field guide! I wrote it when I was *fourteen!*',
          '@croak She sold three copies. One was to her mother.',
        ],
        aff: 8,
        next: 'brew',
      },
      mush_fail: {
        text: [
          'You pick the left one. Confidently.',
          '@morwen ...That\'s the face-falling-off one.',
          '@you Oh.',
          '@morwen It\'s okay! It\'s a very common mistake! I made it four times! That\'s why Croaksworth has trust issues.',
        ],
        aff: 4,
        next: 'brew',
      },
      mush_none: {
        text: [
          '@morwen ...That\'s actually the right answer. Neither of them is a moonpuff. They\'re both face-falling-off ones. I was testing your *caution.*',
          '@croak She was not. She genuinely forgot which was which.',
          '@morwen CROAKSWORTH.',
        ],
        next: 'brew',
      },
      brew: {
        text: [
          'Back at her cottage, she brews. You watch her work — and she changes completely. The scatterbrained clumsiness vanishes. Her hands move with perfect precision, measuring, stirring, adding a pinch of this and a whisper of that. She hums under her breath. The cauldron glows gold.',
          'When she finishes, she ladles out a single shimmering drop into a vial and holds it up to the light.',
          '@morwen Healing draught. Strongest in the kingdom. For the orphanage at the old mill. They\'ve had a fever going round.',
          '@you You spent all day on this for the orphans?',
          'She shrugs, suddenly shy again.',
          '@morwen Well. Somebody has to.',
        ],
        choices: [
          { text: '"You\'re amazing when you brew, you know."', go: 'amazing', aff: 7 },
          { text: 'Offer to deliver it with her.', go: 'deliver', aff: 6 },
        ],
      },
      amazing: {
        text: [
          'She drops the vial. You catch it.',
          '@morwen I — what — *amazing?* Me? I turned you into a frog!',
          '@you You also made the strongest healing potion in the kingdom.',
          'Her face goes as purple as her dress. Behind her, the cauldron bubbles over and sets the curtains on fire.',
          '@croak And there it is.',
        ],
        end: true,
      },
      deliver: {
        text: [
          'You deliver it together. The orphans swarm her. She gets three hugs, a crayon drawing of a frog, and a marriage proposal from a seven-year-old, which she gravely declines.',
          'Walking home under the stars, she bumps her shoulder against yours.',
          '@morwen Thank you for coming. I don\'t usually... have company. People think witches are scary.',
          '@you You\'re not scary.',
          '@morwen I\'m a *little* scary.',
          '@you You\'re a little scary.',
          'She beams.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'When you arrive at the cottage, the door is wide open, there is pink smoke everywhere, and Morwen is sitting on the floor in the middle of it all with her head in her hands.',
          '@morwen Don\'t come in! Don\'t — oh, you\'re already in. Oh no. Oh *no.*',
          '@croak She has done something truly spectacular this time.',
          '@morwen I was brewing a love potion. For a client! The baker\'s apprentice! And the cauldron exploded, and the steam went everywhere, and — and *you just breathed it in.*',
          'You don\'t feel any different. You look at her: sitting there in the smoke, spectacles askew, a smudge of soot on her nose. She\'s lovely. But she was lovely yesterday, too.',
          '@morwen So now whatever you feel for me isn\'t *real.* It\'s just the potion! And I can\'t — I won\'t — I\'d never want anyone to — ',
          'Tears are welling behind her spectacles.',
        ],
        choices: [
          { text: '"Morwen. Make the antidote. I\'ll drink it right now."', go: 'antidote', aff: 10 },
          { text: 'Reason it out. "When did the cauldron explode? How long does the potion take?" [Wits check 3]', check: { stat: 'wits', dc: 3 }, pass: 'reason', fail: 'antidote' },
        ],
      },
      antidote: {
        text: [
          'She brews it with shaking hands. It takes an hour. You sit with her the whole time, handing her ingredients.',
          'You drink it. It tastes like lemons and cold water. You wait. You look at her.',
          'Nothing has changed. Nothing at all.',
          '@you Still here. Still feel exactly the same.',
          'She stares at you. Her lip trembles.',
          '@morwen ...Exactly the same as *what?*',
        ],
        next: 'confess',
      },
      reason: {
        text: [
          '@you When did it explode?',
          '@morwen Twenty minutes ago.',
          '@you And how long does your love potion take to work?',
          '@morwen ...An hour. Minimum. It has to steep in the bloodstream. Why —',
          '@you So it hasn\'t taken effect yet. Which means whatever I\'m feeling right now — that\'s just me.',
          'She opens her mouth. Closes it. Opens it again.',
          '@croak Oh, she\'s going to cry. Somebody fetch a bucket.',
          '@morwen And — and what *are* you feeling right now?',
        ],
        aff: 12,
        next: 'confess',
      },
      confess: {
        text: [
          '@you That I really like you, Morwen. The brilliant witch who turns people into frogs and makes medicine for orphans and sets her hat on fire. I liked you before the potion. I\'ll like you after.',
          'She bursts into tears. Then laughter. Then both at once.',
          '@morwen I\'ve been brewing love potions for nine years and I\'ve never once understood why anyone would want one!',
          '@morwen And now I do, because I\'d have drunk a whole cauldron of it just to make you feel the way I do, and you already *did*, and I didn\'t *have to* — ',
          'She grabs your face and kisses you, smelling of smoke and lavender and burnt sugar.',
          '@croak Finally. I was beginning to think I\'d have to croak it into existence myself.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'Morwen\'s cottage is different tonight. The cauldron is cold. Candles float in the air, bobbing gently. The shelves have been tidied — mostly. Croaksworth has been banished to the pond with a "do not disturb" sign around his neck.',
          'Morwen stands by the hearth in a dark violet gown, without her hat for once, her curls loose. She\'s holding two cups of something that shimmers like starlight.',
          '@morwen It\'s not a potion! I promise! It\'s just elderflower wine. With a teeny bit of glow-moss. For ambiance.',
          '@morwen I\'ve been thinking about tonight for days. I wrote a list. I lost the list. I made a potion to find the list. It found a different list. It was my grocery list. I\'m very nervous.',
        ],
        choices: [
          { text: 'Take the cups, set them down, and kiss her.', go: 'kiss', aff: 10 },
          { text: '"What was on the list?" [Wits check 4]', check: { stat: 'wits', dc: 4 }, pass: 'list', fail: 'kiss' },
        ],
      },
      list: {
        text: [
          'She bites her lip.',
          '@morwen Number one: don\'t explode anything. Number two: tell them about the time I flew my broom into the church bell, because it\'s funny and it\'ll break the ice. Number three...',
          'Her cheeks go pink.',
          '@morwen Number three was "tell them you love them." I put it third so I\'d have time to work up the courage.',
          '@you Want to skip to number three?',
          '@morwen ...I love you. Oh, that was easier than the bell story. I love you, {name}.',
        ],
        aff: 14,
        next: 'kiss',
      },
      kiss: {
        text: [
          'Every candle in the room flares when you kiss her. She laughs against your mouth.',
          '@morwen Sorry! Sorry. Witch thing. Magic gets a little... excitable.',
          'It gets *much* more excitable. As the night goes on, the candles float up to the ceiling and spin. The jars on the shelves rattle. A long-dormant potion on the windowsill bursts into bloom. Somewhere outside, every frog in the pond begins to sing at once.',
          'Morwen is wonderfully clumsy and wonderfully clever and laughs at every mishap — the bed collapses under a pile of spellbooks, her elbow knocks over a jar of fireflies, which swirl around you both like living stars.',
          '...',
          'In the soft hours before dawn, she lies tangled with you in a nest of quilts, idly drawing glowing runes on your chest with one fingertip.',
          '@morwen I\'ve figured out the recipe for the strongest potion in the world.',
          '@you Yeah?',
          '@morwen It\'s you. Just you. No newt required.',
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'There\'s a bang, a flash, and a puff of purple smoke on the festival hill, and Morwen appears in the middle of the crowd, coughing, broom in hand, hat smoking.',
          '@morwen I tried to teleport! It mostly worked! I\'m only missing one shoe!',
          'Croaksworth is perched on her hat brim. He looks deeply put-upon.',
          '@croak I was not consulted.',
          'You find a spot together. She pulls out a small vial and uncorks it, and a soft cloud of sparkling mist rises around you both.',
          '@morwen Starlight Elixir. It makes the stars look brighter. I brewed it just for tonight. Absolutely no frogs.',
        ],
        next: 'fall',
      },
      fall: {
        text: [
          'The stars begin to fall, and through the elixir mist they look like jewels, like fireworks, like a cauldron of light spilling across the whole sky.',
          'Morwen takes your hand.',
          '@morwen My mother always said a witch\'s heart is her strongest ingredient. I never knew what she meant.',
          '@morwen I know now. It\'s you. You\'re what makes everything work.',
          'She kisses you as the stars fall, and every lantern on the hill flares bright violet for one perfect moment.',
          '@croak Oh, for heaven\'s sake. *Everyone* saw that.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'You open an apothecary together on Market Street: *Hazelbrook\'s Remedies & Mostly Safe Wonders.* She brews; you handle customers, labels, and the fire extinguishers. The shop explodes only about once a month now. Everyone agrees it\'s a huge improvement.',
          'The orphanage never wants for medicine again. The baker\'s apprentice eventually gets married without a love potion. Morwen considers this her greatest professional achievement.',
          'You are turned into a frog roughly twice a year. You\'ve gotten quite good at reading labels with webbed hands.',
          'Sir Croaksworth remains a toad by choice. He officiates your wedding. His speech is cutting, merciless, and makes everyone cry.',
          'And on the windowsill of your cottage sits a single sealed vial, glowing softly pink: the love potion from that day, never used. Morwen keeps it there as a reminder that the best magic in the world was the kind she never had to brew.',
        ],
        ending: 'morwen',
      },
    },
  },
});
