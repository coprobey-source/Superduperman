FL.addSpeaker('headlib', 'Head Librarian', '#a7a0b8');

FL.addCharacter({
  id: 'pell',
  name: 'Pellucia Quill',
  short: 'Pell',
  trope: 'Shy Dandere Librarian',
  color: '#b6a1e0',
  favStat: 'wits',
  endingTitle: 'Our Story, Bound in Leather',
  endings: { pell_velvet: 'The Secret Life of Lady Velvet Ink', pell_loud: 'Out Loud' },
  teaser: 'Behind a towering stack of books, someone very small and very quiet squeaks.',
  blurb: 'An assistant librarian who speaks mostly in whispers and ellipses and hides behind whatever book is closest. Painfully shy, secretly brilliant — and, unknown to anyone, the anonymous author of the kingdom\'s most scandalous romance novels.',
  schedule: ['library', 'library', null],
  gifts: { love: ['novel', 'tea'], like: ['tome', 'candle', 'cakes', 'quill', 'salts'], hate: ['ale', 'steak', 'mead'] },
  giftLines: {
    love: ['She looks at it. Her face goes from pale to crimson in under a second.', '@pell:surprised Th-the Duke\'s Forbidden — you — w-where did you — I mean — I\'ve *heard* of it — I\'ve never *read* it — it\'s very — the prose in chapter nine is — ', '@pell:blush ...Thank you. I\'ll treasure it. In a drawer. A *locked* drawer.'],
    like: '@pell:happy F-for me? ...You didn\'t have to... but I... I really like it. Thank you. *So* much.',
    neutral: '@pell Oh! Um. Thank you... I\'ll... find a place for it. Next to the... other things.',
    hate: ['@pell:sad Oh... um... th-that\'s... very... *loud*-smelling...', 'She tries to smile. It doesn\'t quite work.'],
    special: {
      novel: [
        'She looks at the cover. Then at you. Then at the cover. Her face works its way through every shade of pink in the dyer\'s catalogue.',
        "@pell:surprised *The Duke's Forbidden Passion, Volume IX.* That's — I know *exactly* what happens on page two hundred and twelve, because I —",
        "@pell:blush — because I've *heard.* From people. Who told me about it. A normal amount.",
        "@pell:sad ...There's a typo on page forty. It's haunted me for a year. Thank you. I'm going to fix it with a very small pen.",
      ],
      tea: [
        "@pell:surprised A whole tea set? With the little — the little *tongs* —",
        'She lifts the lid of the tin and breathes in, and her shoulders come down from around her ears for the first time since you\'ve known her.',
        "@pell:happy Jasmine. I'm making a pot right now. In the nook. And you're having the cup with the crane on it, because it's the best cup, and I want you to have the best cup.",
      ],
      tome: [
        "@pell:surprised An *ancient tome?* Oh — the binding's original — this is a sixth-century Eldarian stitch, they stopped doing these after the Great Paper Shortage —",
        'She sniffs the pages. Deeply. Then she catches you watching.',
        "@pell:blush ...Everyone sniffs old books. It's normal. It's a *normal librarian thing.*",
      ],
      candle: [
        "@pell:happy A blessed candle. It won't drip on the pages. Oh, that's so *thoughtful.*",
        "@pell:blush I'll keep it for... late nights. In the nook. For reading. Or for other — for reading.",
      ],
      quill: [
        'She holds the enchanted quill over a blank page. It immediately writes: *Overwritten. Purple. Too many adverbs.*',
        '@pell:sad ...',
        "@pell:angry It's *not* too many adverbs. It's *exactly* the right number of adverbs. Write that down. *Write it down.*",
        'The quill, sulkily, writes: *Fine.* You have never seen her look so pleased to win an argument.',
      ],
      fork: [
        "@pell:surprised A fork? Oh! Is this — is this a *reference?*",
        'She thinks very hard.',
        "@pell:happy *The Silver Tine!* The novel in letters where the lovers send messages by rearranging the cutlery at banquets? Nobody's read that. *Nobody's* read that. You've read that?",
        '@you ...Sure.',
        "@pell:blush I'm keeping it forever. It's a *symbol.*",
      ],
    },
    repeat: "@pell:happy Another one... You remembered I liked it. You *remembered.* I'm starting a shelf. With a label, in my best handwriting: *Things {name} Thought I'd Like (Correct).*",
  },
  talk: [
    ['@pell:surprised ...Oh! H-hello. I didn\'t see you. I mean, I *did* see you, I always see you, I mean — ', 'She disappears behind a copy of "Advanced Mycology." The book trembles.'],
    ['@pell ...I re-shelved the entire poetry section today. Alphabetically. And by... feelings. The sad ones are on the bottom shelf. So you have to kneel to read them. It felt right.'],
    ['@pell D-do you like books? ...You do? What kind? ...Oh. Oh, that\'s my favorite too. *That\'s my favorite too.*'],
    ['She hands you a book without a word. There\'s a bookmark in it, on a page with one sentence underlined: *She wanted to speak, but her heart had already said everything.*', 'When you look up, she\'s gone.'],
    ['@pell People think libraries are quiet. They\'re not. Every book is someone shouting. You just have to... listen in the right way.'],
    ['@pell:blush I... I had a dream about you. N-not a strange dream! A normal dream! We were... alphabetizing. ...It was nice.'],
    [
      "@pell:sad The head librarian says I have to work the front desk on Thursdays now. With *people.* Talking to them.",
      "@pell Someone asked me where the history section was, and I panicked and said \"behind you,\" and it wasn't, and he walked into the poetry section and never came out.",
      "@pell:surprised I think he lives there now. He writes sonnets. They're actually quite good.",
    ],
    [
      'Footnote the cat is sitting on your foot. Pell looks mortified.',
      "@pell:surprised He doesn't do that! He doesn't do that to *anyone!* He bit a duke once. A real one!",
      "@pell:blush ...He has very good taste. I mean — he's a very *discerning* cat.",
    ],
    [
      '@pell:blush C-can I ask you something? For a book. Purely professional.',
      "@pell When you like someone. What do you notice first? Not hands. Everyone says hands. My editor has banned hands.",
      "@you Honestly? How they look at you when they think you're not looking.",
      'She writes that down. Then she looks up, realizes she is looking at you, and drops the pencil.',
    ],
    { if: 'pell_sonnets', lines: [
      "@pell:happy The *Collected Sonnets* is back on its shelf. I had the spine re-glued.",
      "@pell Anyone else would have caught me. You caught the *book.* I've been thinking about that for days.",
      "@pell:blush I think it means you knew which thing I'd be sadder to lose. That's... that's the most romantic thing a person can know about another person.",
    ] },
    { if: 'pell_aloud', lines: [
      "@pell:blush I've been reading aloud. To Footnote. Every night, ever since you said my voice was...",
      "@pell He falls asleep by page three. I've decided to take it as a compliment.",
      "@pell:happy Yesterday I read a whole chapter without whispering once. Then I noticed the window was open and three pigeons were listening, and I had to go and lie down.",
    ] },
    { if: 'pell_secret', lines: [
      'She slides a folded note across the returns desk without looking at you. It says: *Thank you for not telling anyone. — L.V.I.*',
      'When you look up, she is behind the returns cart, sorting books with great concentration. Every single one of them is upside down.',
    ] },
    { if: 'pell_critique', lines: [
      "@pell:happy I rewrote the chapter. The kiss one. I did what you said. I wrote the moment *before.*",
      "@pell My editor cried. She actually cried. She sent back one word: *FINALLY.*",
      "@pell:blush Then she asked who my research consultant was. I said, \"the library.\" She wrote back, \"Mm-hm.\"",
    ] },
    { if: 'pell_research', lines: [
      "@pell:blush About the... the research. In the nook.",
      "@pell I've been reviewing my notes, and I think the data was... inconclusive. Statistically. One sample isn't — a proper scholar would want to *replicate* —",
      'She has turned the color of a ripe plum. You are fairly sure she rehearsed this in a mirror.',
    ] },
  ],
  afterTalk: [
    ["She hands you a book without a word. There's a bookmark in it, on a page with one line underlined: *She wanted it again. She wanted it every night.* When you look up, she's very pink and very busy shelving."],
    ["@pell:blush M-my editor read the new chapter. She said it was \"suspiciously well-informed.\" I said I'd been doing a lot of research. She asked who with. I fainted a little."],
    ["@pell:blush Footnote has started sleeping on your side of the nook. He misses you. I mean — he — *I* — he misses you."],
    ["@pell:smug The library closes at sundown. And I have a key now. I'm just... telling you. For no reason. Purely informational."],
    [
      'She has fallen asleep at the reading desk with her cheek on an open dictionary. When you touch her shoulder she wakes with a gasp, and the word *besotted* is printed backwards across her face.',
      '@pell:surprised I was — researching — the definition —',
      "@pell:blush ...It's accurate. I checked.",
    ],
    { if: 'pell_caught_kiss', lines: [
      '@pell:blush The head librarian gave me a raise today.',
      "@pell:surprised She said it was for \"initiative.\" And then she winked. She has never winked in her life. I don't think she knew how. It looked like it hurt.",
    ] },
    { if: 'pell_hid', lines: [
      "@pell:happy Someone built a cushion fort in the children's section today, and I had to go and stand in the stacks for ten minutes and breathe.",
      '@pell:blush You know why.',
    ] },
    { if: 'pell_letter_aloud', lines: [
      "@pell You read my letter aloud. After I *specifically* said not to.",
      "@pell:smug So I've decided on your punishment. Every letter I write you from now on, you have to read aloud. To me. In bed. With voices.",
      "@pell:blush ...I've written four this week. One of them has a duke in it.",
    ] },
    { if: 'pell_date_dinner', lines: [
      "@pell:happy I put our dinner at the Tipsy Wyvern in the new book. The bit with the turnips.",
      "@pell:blush My editor says nobody would believe a heroine who orders in a whisper and gets two plates of turnips. I told her *that's how you know it's true.*",
    ] },
  ],
  dateFav: 'picnic',
  dates: {
    dinner: {
      start: {
        text: [
          'The Tipsy Wyvern on a busy night is loud, warm and full of people shouting at each other affectionately. Pell sits in the corner booth with her back pressed flat against the wall, holding the menu up in front of her face like a portcullis.',
          '@pell:sad It\'s very... *full* in here. Of voices. All at once. None of them have chapter breaks.',
          'The barmaid arrives. Pell lowers the menu one inch and whispers her order into it.',
          '@pell ...the roast pheasant, please, and...',
          'The barmaid nods briskly and returns two minutes later with two enormous plates of mashed turnips.',
          '@pell:surprised ...',
        ],
        choices: [
          { text: 'Eat the turnips with tremendous enthusiasm, as if they were exactly what you wanted.', go: 'turnips', aff: 6 },
          { text: 'Wave the barmaid back and fix the order for her.', go: 'fix', aff: 3 },
          { text: '"Two plates of turnips. Bold choice, Pell."', go: 'tease', aff: 1 },
        ],
      },
      turnips: {
        text: [
          'You pick up your fork and eat a large mouthful of turnip with the air of someone tasting a rare vintage.',
          '@you Incredible. You have wonderful taste.',
          'Pell stares at you. Then a small, helpless giggle escapes from behind the menu. Then a bigger one.',
          '@pell:happy You — you don\'t even *like* turnips — I can tell, your left eye is twitching —',
          'She eats hers too, giggling the whole time. Nobody in the tavern can hear her over the noise, so for once she doesn\'t try to be quiet at all.',
          { if: { stage: 4 }, text: 'Under the table, her ankle finds yours and stays there. When the candle gutters, she leans across and kisses you, quick and turnip-flavored and bold, and then hides behind the menu again, beaming.' },
          '@pell:blush This is going in a book. All of it. Even the turnips. *Especially* the turnips.',
        ],
        end: true,
      },
      fix: {
        text: [
          'You catch the barmaid\'s eye and, very kindly, explain about the pheasant.',
          'The pheasant arrives. It is excellent. Pell eats it in small, grateful bites and says "thank you" eleven times.',
          '@pell:blush ...I would have just eaten the turnips. I always just eat the turnips.',
          '@pell:happy It\'s nice. Having someone who says the pheasant out loud.',
        ],
        end: true,
      },
      tease: {
        text: [
          'Pell raises the menu back to its full height. It stays there for some time.',
          '@pell:sad ...I panicked.',
          'Eventually she lowers it one inch, and you can see the very top of her glasses, and her eyes, crinkling.',
          '@pell:smug ...It *was* a bold choice. I\'m a very bold woman. Ask the turnips.',
          'You both eat turnips. It is not the most romantic meal in history. It does end with her laughing.',
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          'The Moonlit Gardens are as quiet as the library after hours: white roses, fountains whispering to themselves, marble statues peering from the hedges. Pell relaxes visibly the moment the gates close behind you.',
          '@pell:happy Oh, I *know* these. I\'ve read about all of them. That one is Sir Edric the Unwavering. That one\'s the Weeping Countess. That one\'s... a statue of a man holding a smaller statue. Nobody knows why.',
          'She looks around at the hedges, the moonlight and the hidden benches, and turns quietly pink.',
          '@pell:blush This is where chapter seven happens. In most books. The garden chapter.',
        ],
        choices: [
          { text: '"Tell me the story of the Weeping Countess."', go: 'story', aff: 5 },
          { text: 'Make up a ridiculous story about the man holding the smaller statue.', go: 'invent', aff: 4 },
        ],
      },
      story: {
        text: [
          'She tells you. She stands in front of the statue with her hands clasped and tells you all of it: the countess, the shipwrecked sailor, the letters hidden in the garden wall for nine years.',
          'She doesn\'t stammer once. Her voice goes low and sure and lovely, and when she gets to the end, two night watchmen have stopped their rounds to listen.',
          '@pell:surprised ...Oh. People. I didn\'t notice the people.',
          '@pell:blush I never notice the people when you\'re the one I\'m telling.',
          { if: { stage: 4 }, text: 'On the hidden bench behind the countess, she kisses you very slowly, the way the heroines do in chapter seven. Then she pulls back and whispers, *I\'ve always wanted to do that on this exact bench*, and kisses you again.' },
        ],
        end: true,
      },
      invent: {
        text: [
          '@you Clearly, he\'s a sculptor who fell in love with his own statue, and then the statue made a statue, and now they\'re a family.',
          '@pell:angry That\'s *not* — that is completely —',
          'She stops. Thinks. Pushes her glasses up her nose.',
          '@pell:smug ...Actually, the smaller statue should have a sculptor\'s chisel too. For symmetry. And the big one is jealous because the small one is better at it.',
          'By the time you leave the gardens, the two of you have co-written an entire tragicomic saga about three generations of increasingly small statues. She writes it all down on the back of her hand.',
          '@pell:happy We should publish. Under a pen name. A *new* pen name. A pen name for *both* of us.',
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          'Pell has read three hundred and forty books about the sea. She has never actually been to Saltbreeze Harbor. She stands at the head of the pier with the wind tearing at her bun, clutching a book about famous voyages to her chest.',
          '@pell:surprised It\'s *loud.* The books never said it was loud. And it smells like — oh. Oh, it smells like *fish.*',
          'A gull lands beside her and stares at her book.',
          '@pell:sad They never said anything about the *gulls* either.',
        ],
        choices: [
          { text: 'Take her hand and walk her all the way out to the very end of the pier.', go: 'end', aff: 6 },
          { text: 'Buy her fried fish in paper from the stall.', go: 'fish', aff: 4 },
        ],
      },
      end: {
        text: [
          'You walk her out, past the moored boats and the coiled ropes and the fishermen packing up for the night, until there is nothing in front of you but water and the sun going down into it.',
          'Pell stops. She doesn\'t say anything for a long time.',
          '@pell:sad ...The books got it wrong. All three hundred and forty. They said it was blue. It isn\'t. It\'s every color. It\'s *moving.*',
          'She opens her book of voyages, looks at it, and very carefully closes it again.',
          '@pell:blush I\'m going to write a better one. And I\'m going to say the sea is every color, and it\'s loud, and it smells like fish, and I saw it for the first time holding your hand.',
        ],
        end: true,
      },
      fish: {
        text: [
          'You buy two cones of fried fish from the stall. Pell unwraps hers, takes a bite, and then freezes, staring at the paper.',
          '@pell:surprised {name}. This is printed. This is a *page.* This is page one hundred and eighteen of *The Duke\'s Forbidden Passion, Volume IV.*',
          'You look at your own cone. It is page one hundred and nineteen.',
          '@pell:angry They\'re wrapping *fish* in my — in that *very good book by somebody* — the bit where the Duke finally —',
          'The fishmonger, overhearing, cheerfully informs her that it is the most popular paper on the docks. Sailors fight over the cones. Some of them buy fish just to finish the chapter.',
          '@pell:blush ...Oh. Oh, that\'s actually the nicest review I\'ve ever had.',
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          'Pell has packed for a picnic in Whisperwood the way other people pack for a long siege. There is a blanket, a basket, a teapot, a cushion for each of you, and eleven books.',
          '@pell:blush In case. Of... of reading emergencies.',
          'You spread the blanket under an old oak in a sunny clearing. The leaves move. Birds argue somewhere overhead. Pell takes off her shoes, very daringly, and tucks her toes into the grass.',
          '@pell:happy It\'s like a library. With a very high ceiling. And no head librarian.',
        ],
        choices: [
          { text: 'Lie back with your head in her lap and ask her to read to you.', go: 'lap', aff: 6 },
          { text: 'Pick one of her eleven books and read to *her* for a change.', go: 'read', aff: 5 },
          { text: 'Steal her glasses and run.', go: 'glasses', aff: 1 },
        ],
      },
      lap: {
        text: [
          'You lie back and put your head in her lap. She goes completely still for a moment, then, very slowly, rests one hand in your hair.',
          'She chooses a book of old forest ballads and begins to read.',
          { if: 'pell_aloud', text: 'It\'s the voice from the nook, the low warm one that comes out when she forgets to be afraid. She doesn\'t start with a whisper this time. She starts right in the middle of it, as if she knows you\'ve been waiting.', else: 'She starts in a whisper. By the second ballad her voice has found something warm and steady that you would never have guessed was hiding in her.' },
          'You fall asleep somewhere in the fourth ballad. When you wake, the sun has moved, the tea is cold, and she is still reading, very softly, mostly to herself.',
          '@pell:blush You looked so peaceful. I didn\'t want to stop. I didn\'t want *any* of it to stop.',
        ],
        end: true,
      },
      read: {
        text: [
          'You choose a book at random from the pile. It turns out to be a very old adventure novel with a dragon on the cover. You do all the voices.',
          'Pell lies on her back with her eyes closed and her hands folded on her stomach, and listens like she\'s never been read to in her life.',
          '@pell:sad ...I haven\'t. Not since I was little. I\'m always the one doing the reading.',
          'You do the dragon\'s voice particularly well. She giggles so hard at the dragon\'s big speech that a squirrel leaves.',
          '@pell:happy Again. From the dragon bit. Please?',
        ],
        end: true,
      },
      glasses: {
        text: [
          'You pluck her glasses off her nose and dash three steps away.',
          '@pell:surprised {name}! I can\'t — everything is soup — you are a *blob* —',
          'She gets up, takes two determined steps towards you, and walks directly into the oak tree.',
          'You rush back, mortified, and put her glasses back on her. She blinks at you, then at the tree, then bursts into helpless laughter.',
          '@pell:smug The tree was very polite about it. More polite than you. You\'re going in my next book as a *villain.* A minor one. With nice hair.',
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'Deep in the stacks of the Grand Library, a rolling ladder is wobbling dangerously. At the very top, a small woman with enormous round glasses and a messy lavender bun is trying to shelve an armful of books that is much too big for her.',
          'The ladder tilts. The books slide. She squeaks.',
          'Everything falls at once.',
        ],
        aff: 10,
        choices: [
          { text: 'Dive and catch her. [Might check 1]', check: { stat: 'might', dc: 1 }, pass: 'catch_her', fail: 'catch_fail' },
          { text: 'Catch the falling books instead.', go: 'catch_books' },
          { text: 'Steady the ladder before it tips. [Wits check 1]', check: { stat: 'wits', dc: 1 }, pass: 'ladder', fail: 'catch_fail' },
        ],
      },
      catch_her: {
        text: [
          'You lunge and catch her just before she hits the floor. Books rain down around you like heavy leather hail.',
          'She lies in your arms, staring up at you, glasses askew, mouth open in a perfect little "o."',
          '@pell:surprised ...',
          '@pell ......',
          '@pell:blush ...th-thank you...',
          'And then she wriggles free, grabs the nearest book and holds it in front of her face like a shield.',
        ],
        aff: 5,
        next: 'name',
      },
      catch_books: {
        text: [
          'You snatch three books out of the air. She lands in a pile of cushions in the reading nook, unhurt.',
          '@pell:surprised ...You saved the *Collected Sonnets.* That\'s a first edition. That\'s... you saved it.',
          'She looks at you like you\'ve just slain a dragon.',
          '@pell:blush Most people would have... just saved me. B-but you understood which one was *important*...',
          '@you You\'re important too.',
          'She vanishes behind the nearest shelf with a squeak.',
        ],
        aff: 6,
        flag: 'pell_sonnets',
        next: 'name',
      },
      ladder: {
        text: [
          'You grab the ladder and brace it with your foot at exactly the right angle. It settles. She clings to the top, books clutched to her chest, eyes enormous.',
          '@pell:surprised ...O-oh. You fixed the fulcrum... that\'s very... clever...',
          'She climbs down very carefully, never taking her eyes off you.',
        ],
        aff: 5,
        next: 'name',
      },
      catch_fail: {
        text: [
          'You lunge. You miss. She lands on you. Fourteen books land on both of you.',
          'From somewhere beneath the pile, a very small voice whispers:',
          '@pell:sad ...I\'m so sorry... I\'m so, so sorry... please don\'t tell the head librarian...',
        ],
        aff: 3,
        next: 'name',
      },
      name: {
        text: [
          '@you Are you okay? I\'m {name}.',
          'From behind her book:',
          '@pell ...Pellucia. Quill. Pell. Assistant librarian. I-I\'m okay. I fall a lot. The ladders hate me.',
          '@pell:blush ...Thank you. For... for noticing me. People usually don\'t.',
          'She peeks out from behind the book for half a second. She has very pretty grey eyes. Then she\'s gone, scurrying off into the stacks.',
          'On the floor, she\'s left behind a single sheet of paper covered in tiny handwriting. The only words you can make out are: *...his strong hands upon her trembling...*',
        ],
        choices: [
          { text: 'Fold the page carefully and keep it safe, to give back to her one day.', flag: 'pell_page' },
          { text: 'Leave it where it fell. It isn\'t yours to read.' },
        ],
      },
    },
    s1: {
      start: {
        text: [
          'Pell finds you in the reading hall. She hovers at the end of your table for nearly a full minute, opening and closing her mouth, before she finally sets down a book in front of you and bolts.',
          'You follow her into a small, hidden reading nook behind the history section: a window seat piled with cushions, a teapot, and a cat named Footnote who regards you with contempt.',
          '@pell:blush Th-this is my secret place... No one else knows about it... I thought... maybe... you could read with me? If you want? You don\'t have to! You probably have adventures to — ',
          '@you I\'d love to.',
          '@pell:surprised ...Oh.',
        ],
        choices: [
          { text: '"Will you read something aloud to me?"', go: 'aloud', aff: 7, flag: 'pell_aloud' },
          { text: 'Sit quietly and read together in comfortable silence.', go: 'quiet', aff: 6, flag: 'pell_quiet' },
          { text: 'Ask her about her favorite book. [Wits check 2]', check: { stat: 'wits', dc: 2 }, pass: 'favorite', fail: 'favorite_fail' },
        ],
      },
      aloud: {
        text: [
          '@pell:surprised A-aloud? I... I can try...',
          'She opens a book of poems with shaking hands. Her first line comes out as a whisper. The second, a little stronger. By the fifth, her voice has found something — a low, musical warmth you would never have guessed was hiding in her.',
          'When she finishes, she looks up and realizes you\'re staring at her.',
          '@pell:sad W-was that bad? I\'m sorry —',
          '@you You have a beautiful voice, Pell.',
          'She pulls a cushion over her head. Footnote the cat sighs.',
        ],
        next: 'end',
      },
      quiet: {
        text: [
          'You sit. You read. The afternoon light moves slowly across the floor. The tea goes cold. Footnote eventually, grudgingly, settles in your lap.',
          'At some point you look up. Pell has stopped reading. She\'s watching you over the top of her book.',
          '@pell:blush ...Sorry. I just... I\'ve never had someone to be quiet *with* before. Only someone to be quiet *around*.',
        ],
        next: 'end',
      },
      favorite: {
        text: [
          'She tells you about her favorite: an obscure, centuries-old epic about a mapmaker who falls in love with a country. You ask about the symbolism of the rivers, and her face lights up.',
          'For two hours, she talks. She doesn\'t stammer once. She gestures. She *laughs.* She forgets to hide behind anything at all.',
          'Then she seems to realize, all at once, how much she\'s been talking.',
          '@pell:blush I... I\'m sorry... I never talk this much... I never talk this much to *anyone*...',
          '@you Don\'t stop.',
        ],
        aff: 8,
        next: 'end',
      },
      favorite_fail: {
        text: [
          '@pell It\'s... um... it\'s very obscure... you probably wouldn\'t...',
          'You try to ask a smart follow-up question. It comes out as "Is it... long?"',
          '@pell:happy ...Yes. It\'s very long. Hehe.',
          'She giggles. You didn\'t know she could giggle. It\'s worth it.',
        ],
        aff: 4,
        next: 'end',
      },
      end: {
        text: [
          'When it\'s time to go, she walks you to the door of the nook. She looks at the floor.',
          '@pell:sad ...Will you come back? To my secret place?',
          '@you If you\'ll have me.',
          '@pell:happy ...I would like that. Very much. I would like that *the most.*',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          'Pell is late to the reading nook. You wait for her. Footnote the cat knocks a stack of papers off the window seat out of spite.',
          'You gather them up. It\'s a manuscript. Handwritten, in Pell\'s tiny, careful script. The title page reads: *The Librarian\'s Secret Desire, by Lady Velvet Ink.*',
          { if: 'pell_page', text: 'The handwriting is instantly familiar. You\'ve been carrying a page of it in your pack since the day the ladder fell: *...his strong hands upon her trembling...* You now know exactly whose trembling it was.' },
          'Lady Velvet Ink. The anonymous author of *The Duke\'s Forbidden Passion.* The most scandalous romance novelist in all of FantasyLandia.',
          'Footsteps. Pell rounds the corner. She sees the manuscript in your hands.',
          'She makes a sound like a kettle reaching boiling point.',
          '@pell:surprised NO — DON\'T — THAT\'S — I CAN EXPLAIN — no I can\'t — *please just let the floor swallow me*',
        ],
        choices: [
          { text: '"You\'re Lady Velvet Ink? Pell, you\'re *famous!*"', go: 'famous', aff: 7 },
          { text: 'Read a passage aloud with great dramatic flair.', go: 'readaloud', aff: 5, flag: 'pell_dramatic' },
          { text: 'Hand it back gently. "I won\'t tell anyone."', go: 'secret', aff: 8, flag: 'pell_secret' },
        ],
      },
      famous: {
        text: [
          '@pell:surprised N-no one can know! The head librarian would fire me! My mother would — oh gods, my *mother* —',
          '@you Pell. Half the kingdom reads your books. They\'re *good.*',
          'She stops panicking. Peeks at you through her fingers.',
          '@pell:blush ...You think they\'re good?',
        ],
        next: 'research',
      },
      readaloud: {
        text: [
          '@you "His strong hands upon her trembling waist, the Duke whispered, *Your eyes are like the twin moons of Eldaria —*"',
          '@pell:angry PLEASE STOP —',
          '@you "— *and I would burn every library in the kingdom to —*" Pell, the Duke burns libraries? That\'s so out of character for you.',
          '@pell:angry IT\'S A METAPHOR FOR PASSION!',
          'She snatches it back, scarlet, and then — to your surprise — starts laughing so hard she has to sit down.',
        ],
        next: 'research',
      },
      secret: {
        text: [
          'She takes it with trembling hands, hugging it to her chest.',
          '@pell:sad ...You\'re not going to laugh? Or tell anyone?',
          '@you Never.',
          'She stares at you for a long moment, glasses fogging slightly.',
          '@pell:blush No one has ever kept a secret for me before. Because no one has ever *known* any.',
        ],
        next: 'research',
      },
      research: {
        text: [
          'Pell sits on the window seat, clutching the manuscript. After a long, agonized silence:',
          { if: 'pell_page', text: '@pell:surprised And you — the page. From the first day. You *kept* it? Nobody keeps my pages. They usually end up lining birdcages.' },
          '@pell:sad The truth is... I\'m stuck. On this chapter. The kiss scene. I\'ve written forty-two kiss scenes. But they\'re all... I\'ve never... I just *read* about it. I\'ve never actually...',
          '@pell:sad My editor says the new one is "technically accurate but emotionally bankrupt." I don\'t know what I\'m doing wrong.',
        ],
        choices: [
          { text: 'Read the chapter and give her real feedback. [Wits check 3]', check: { stat: 'wits', dc: 3 }, pass: 'critique', fail: 'critique_fail' },
          { text: '"Maybe you need to do some... research?"', go: 'kiss', aff: 10, flag: 'pell_research' },
        ],
      },
      critique: {
        text: [
          'You read the chapter carefully. Then you point to a line.',
          '@you Here. You describe *everything* — the candlelight, the curtains, his hands. But you never say what she\'s *thinking.* What she\'s afraid of. The kiss isn\'t the important part. It\'s the moment right before, when she decides to be brave.',
          'Pell stares at you. Then at the page. Then at you.',
          '@pell:surprised ...That\'s it. That\'s exactly it. I never wrote her being brave... because I never was...',
          'She looks up at you, very pink, very determined.',
          '@pell:blush C-can I try being brave? Right now?',
          'And she leans forward and kisses you — very quickly, a tiny brush of a kiss, gone in a heartbeat — and then stares at you, utterly shocked at herself.',
          '@pell:surprised ...Oh. *Oh.* I need to rewrite the entire book.',
        ],
        aff: 12,
        flag: 'pell_critique',
        end: true,
      },
      critique_fail: {
        text: [
          'You read the chapter. You say it\'s good. You suggest "more kissing." She nods very seriously and writes "MORE KISSING" in the margin.',
          '@pell:smug ...That is not helpful feedback. But it\'s very... *sincere* feedback.',
          'She\'s smiling, though.',
        ],
        aff: 5,
        end: true,
      },
      kiss: {
        text: [
          'Pell goes absolutely still.',
          '@pell:surprised R-research...?',
          '@you For the book.',
          '@pell:blush For... for the book. Yes. For literature. For *art.*',
          'She takes off her glasses with shaking hands. Closes her eyes. Tilts her face up.',
          'You kiss her softly. She tastes like chamomile tea. She makes a tiny, astonished sound, and her fingers curl into your sleeve.',
          'When you pull back, she keeps her eyes closed for a long moment.',
          '@pell:blush ...My editor was right. All forty-two of them were emotionally bankrupt.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'You lose track of time in the reading nook. By the time you notice, the great windows are dark and the library is silent.',
          'Pell tries the main door. It doesn\'t move.',
          '@pell:surprised ...The head librarian locks up at sundown. And she has the only key. And she doesn\'t come back until morning.',
          '@pell:blush We\'re... locked in. Overnight. Together.',
          'She turns to face you, pressing her back against the door. In the candlelight her face is pink all the way up to her ears.',
          '@pell:blush This is... this is a trope, you know. "Locked in Together." It\'s chapter eleven in four of my books.',
          { if: 'pell_research', text: '@pell:blush And this time I can\'t even pretend it\'s for research. I tried. I wrote RESEARCH on an index card and held it up to the mirror, and I didn\'t believe me at all.' },
          '@you What happens in chapter eleven?',
          '@pell ...',
          'She doesn\'t answer. Instead she pulls a folded letter from her sleeve and hands it to you, then turns around and faces the wall.',
          '@pell:blush I wrote it. Weeks ago. I could never say it out loud. So... please read it. *Quietly.* Not aloud. *Definitely not aloud.*',
        ],
        choices: [
          { text: 'Read the letter.', go: 'letter', aff: 6 },
        ],
      },
      letter: {
        text: [
          'The letter is three pages long, written in her small, careful hand. It\'s the most beautiful thing you\'ve ever read.',
          '*I have written a thousand love scenes, and every one of them was a lie, because I had never felt anything like this. The way my heart jumps when your footsteps come down the history aisle. The way I save the best books for you before anyone else can borrow them. The way you look at me — as if I am the story, and not the girl hiding behind it.*',
          { if: 'pell_quiet', text: '*You sat with me in silence once, in the nook, and it was the loudest happiness I have ever heard.*' },
          { if: 'pell_critique', text: '*You told me the kiss is not the important part. The important part is the moment right before, when she decides to be brave. This letter is me, deciding.*' },
          '*I am not brave. I am the least brave person in this kingdom. But I would like, just once, to be the heroine of my own story instead of the author. I would like it to be with you.*',
          '*— P.*',
          'You look up. She\'s still facing the wall. Her shoulders are shaking.',
        ],
        choices: [
          { text: 'Turn her around gently and kiss her.', go: 'kiss', aff: 10 },
          { text: 'Read the last line aloud anyway, softly. [Wits check 4]', check: { stat: 'wits', dc: 4 }, pass: 'aloud', fail: 'kiss' },
        ],
      },
      aloud: {
        text: [
          '@you "I would like it to be with you."',
          'She spins around.',
          '@pell:angry I SAID NOT ALOUD —',
          '@you I know. But it deserved to be heard. It\'s the best thing you\'ve ever written.',
          { if: 'pell_aloud', text: '@you You read to me once, in the nook, and your voice made the whole room go still. This deserved the same.' },
          'Her protest dies on her lips. Her eyes fill with tears.',
          '@pell:blush ...It\'s the *truest* thing I\'ve ever written.',
        ],
        aff: 12,
        flag: 'pell_letter_aloud',
        next: 'kiss',
      },
      kiss: {
        text: [
          "She kisses you this time, really kisses you, on tiptoe, her glasses bumping your nose and her hands trembling against your chest. She isn't hiding behind anything at all.",
          "You end up in the reading nook among the cushions, by the light of a single candle and the moon through the tall windows. She is shy at first: she sets her glasses aside very carefully, then fumbles with the buttons of her cardigan and gets two of them wrong.",
          "@pell:blush I-I know the theory. Very well. Extensively. Forty-two chapters of theory.",
          "@you And the practice?",
          "@pell:blush ...Please be patient with me.",
          "You are. You undo the buttons for her, one at a time, and kiss each new inch of soft skin. She whimpers so quietly you almost miss it. Then she's curious, then braver, and then, to your delight, she's *astonishingly* well-read. She murmurs things she's clearly only ever written down, and goes scarlet at each one, and says them anyway.",
          "@pell:surprised Chapter six. Th-the part with the — would you — *oh.* Oh, that's much better in person.",
          { if: 'pell_dramatic', text: "Once, between kisses, she whispers *\"his strong hands upon her trembling waist\"* in a perfect, merciless impression of your dramatic reading voice, and you have to bury your face in a cushion." },
          "At one point she whispers, breathless, *oh, chapter nine was completely wrong*, and you both dissolve into helpless laughter in the cushions. Then she pulls you back down, and she isn't laughing anymore. She is very, very far from quiet in her quiet library...",
          "...",
          "Hours later, she lies with her head on your chest, tracing words on your skin with one fingertip. You realize she's writing.",
          "@you What are you writing?",
          "@pell:blush The first line of the next book. Don't read it. *Don't* — you're reading it.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake to a click and a creak: the head librarian is unlocking the main door. You and Pell are tangled together in the reading nook, half-dressed under her cardigan, with Footnote the cat asleep on your chest like a judgmental loaf.",
          "Pell's eyes snap open. She sees the head librarian's shadow at the end of the history aisle, and she makes a sound like a teakettle.",
          "@pell:surprised Oh no. Oh no, oh no. Hide. *Hide.* We have to — my cardigan's inside out — where are my *glasses* —",
          "The footsteps are getting closer.",
        ],
        choices: [
          { text: "Grab a book, sit up straight, and pretend you're both studying.", go: "study", aff: 5 },
          { text: "Pull the cushions over both of you and hold very still.", go: "hide", aff: 6, flag: 'pell_hid' },
          { text: "Kiss her, slowly. Let the head librarian find what she finds.", go: "caught", aff: 6, flag: 'pell_caught_kiss' },
        ],
      },
      study: {
        text: [
          "You snatch up the nearest book and open it. Pell does the same. You are both reading very intently when the head librarian rounds the corner.",
          "@headlib Good morning, Miss Quill. You're in early.",
          "@pell:surprised Y-yes! Research! Very early research!",
          "The head librarian looks at you. At Pell's inside-out cardigan. At the book you're holding, which is upside down and titled *The Duke's Forbidden Passion.* She sighs.",
          "@headlib Chapter nine is overrated, dear. Carry on.",
          "Pell doesn't speak for an hour. Then she laughs until she cries.",
        ],
        end: true,
      },
      hide: {
        text: [
          "You pull the cushions over both of you. Pell burrows into your chest, shaking with silent, terrified giggles. The footsteps pause right outside the nook. Footnote yawns loudly. The footsteps move on.",
          "@pell:happy ...That was the most exciting thing that's ever happened to me in this library.",
          "@you The most exciting thing?",
          "@pell:blush The *second* most exciting thing. Please stop smiling like that. I'm going to put it in a book.",
        ],
        end: true,
      },
      caught: {
        text: [
          "You kiss her. She stiffens, then melts. The footsteps stop at the edge of the nook. There's a long silence.",
          "@headlib ...I'll come back after breakfast.",
          "The footsteps retreat. Pell buries her face in your neck and screams into it, very quietly, for about thirty seconds.",
          "@pell:blush I'm never going to be able to look her in the eye again.",
          "@pell:happy ...That was very brave of us, wasn't it? I've never been brave before. I think I like it.",
          { if: 'pell_critique', text: "@pell:smug You told me the important part is the moment right before, when she decides to be brave. I decided. In front of the *head librarian.* I think that counts double." },
        ],
        end: true,
      },
    },
    ending: {
      start: {
        text: [
          'Pell is waiting for you at the foot of the festival hill, holding a lantern and a small package wrapped in brown paper. She isn\'t hiding behind anything. She keeps almost reaching for a book and stopping herself.',
          '@pell:blush I... I brought you something. To open when the stars fall.',
          'You climb the hill together and find a quiet spot under an old oak. When the first star streaks across the sky, she nudges the package into your hands.',
        ],
        next: 'book',
      },
      book: {
        text: [
          'It\'s a book. Bound in deep blue leather, the title stamped in silver: *The Librarian and the Adventurer.*',
          'Underneath the title is the author\'s name. Not *Lady Velvet Ink*. It says *Pellucia Quill.*',
          '@pell:blush It\'s about us. It\'s not scandalous. Well. It\'s *a little bit* scandalous. Chapter eleven. But mostly it\'s just... true.',
          '@pell:happy I\'m publishing it under my real name. I\'m done hiding. I wanted you to have the first copy.',
          'You open it. The dedication reads: *For {name}, who found me in the stacks.*',
          { if: 'pell_sonnets', text: 'Underneath, in smaller print: *...and who knew to catch the sonnets.*' },
          { if: 'pell_page', text: 'Pressed between the endpapers is a single sheet you recognize at once, soft from weeks in your pack: *...his strong hands upon her trembling...* She must have taken it back from you at some point. She has crossed out *his strong hands* and written, very small, *their hands.*' },
        ],
        choices: [
          { text: '"You don\'t have to put your real name on it, Pell. Not unless you want to."', go: 'velvet', if: 'pell_secret' },
          { text: '"Read it to me. Right here. Out loud."', go: 'loud', if: ['pell_aloud', { any: ['pell_letter_aloud', 'pell_caught_kiss'] }] },
          { text: 'Kiss her. "I\'m so proud of you."', go: 'proud' },
        ],
      },
      proud: {
        text: [
          'Under the falling stars, she kisses you, and doesn\'t hide her face afterward at all.',
        ],
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          '*The Librarian and the Adventurer* becomes the bestselling book in FantasyLandia history. Pell goes to her first book signing, nearly faints twice, and signs four hundred copies anyway — with you standing beside her, holding her hand under the table.',
          'Her mother reads it. Her mother *loves* it. Except chapter eleven, which her mother has "not read, and will never mention, and please stop asking, Pellucia."',
          'She becomes head librarian eventually. She installs a new reading nook, with two window seats side by side. Footnote the cat sleeps between you.',
          'She still whispers, mostly. She still stammers when she\'s flustered. But every night, in the quiet of the library after closing, she reads to you aloud — and her voice never shakes at all.',
        ],
        ending: 'pell',
      },
      velvet: {
        text: [
          '@you You don\'t have to put your real name on it, Pell. Not unless you want to. I\'ll keep the secret as long as you like.',
          'She looks down at the cover for a long time. Then up at you.',
          '@pell:sad I thought... I thought being brave meant telling everyone.',
          '@you Maybe being brave just means telling the right person.',
          '@pell:surprised ...',
          'Very slowly, she takes a pencil from behind her ear, draws a neat line through *Pellucia Quill*, and writes above it, in curling, extravagant script: *Lady Velvet Ink.*',
          '@pell:smug There. Now it\'s not my secret. It\'s *ours.* That\'s different. That\'s so much better.',
          '@pell:blush And you\'ll have to keep helping me with the research. For all the future volumes. Rigorously. It\'s a very demanding position.',
          'She kisses you under the falling stars, and then, for old times\' sake, hides behind the book.',
        ],
        next: 'velvet_epi',
      },
      velvet_epi: {
        text: [
          '*Some time later...*',
          '*The Librarian and the Adventurer*, by Lady Velvet Ink, sells out in nine days. The kingdom loses its mind. Salons hold debates on the true identity of Lady Velvet Ink. A duchess claims to be her. Three separate dukes claim to be the adventurer. One of them sues the other two.',
          'Meanwhile, in the Grand Library, a small assistant librarian with enormous glasses re-shelves the poetry section, listens to two noblewomen argue loudly about chapter eleven, and says absolutely nothing. She just smiles into the returns cart.',
          'You are thanked in the acknowledgements as *my Research Consultant, without whom chapters six through fourteen would have been emotionally bankrupt.* People at the tavern ask what exactly you consult on. You say "historical accuracy." Pell, at your elbow, inhales her tea.',
          'The head librarian works it out by Volume Two. She says nothing. She simply starts leaving the library key under a pot of ferns at sundown, with a note: *Lock up when you\'re finished, dear. Chapter nine is still overrated.*',
          'Every new book has a reading nook in it, and a cat who judges everyone, and two people who are very, very quiet together. Every one is dedicated to the same mysterious initial.',
          'Her mother never finds out. Her mother does, however, read every volume, and tells Pell over Sunday lunch that "this Velvet woman really understands romance, unlike *some* people who just shelve it."',
          'Pell says, "Yes, Mother," and kicks you gently under the table, and doesn\'t stammer once.',
        ],
        ending: 'pell_velvet',
      },
      loud: {
        text: [
          '@you Read it to me. Right here. Out loud.',
          '@pell:surprised H-here? On the *hill?* There are — there are *people* on the hill —',
          { if: 'pell_letter_aloud', text: '@you You told me not to read your letter aloud, and I did it anyway. Now it\'s your turn.' },
          'She looks at the crowd. She looks at the book. She looks at you, for a long time, and something in her face goes very still and very certain: the face of a heroine on the page right before she\'s brave.',
          'Then she opens to chapter one, takes a breath, and reads.',
          'The first sentence comes out as a whisper. The second, a little louder. By the end of the first page, the couple on the next blanket has stopped kissing to listen. By the end of the chapter, there are forty people sitting in the grass around your oak tree, and nobody is watching the stars at all.',
          'When she closes the book there is a silence. Then the applause starts, and doesn\'t stop.',
          '@pell:blush ...I didn\'t whisper. Did you notice? I didn\'t whisper once.',
          '@you I noticed.',
          'She throws her arms around your neck and kisses you in front of all forty of them, and then — astonishingly — takes a bow.',
        ],
        next: 'loud_epi',
      },
      loud_epi: {
        text: [
          '*Some time later...*',
          'The shy assistant librarian of the Grand Library becomes, against every law of nature, the most sought-after reader in Clichéton.',
          'It starts as one night a week at the Tipsy Wyvern: Pell, a stool, a candle, and whatever book she loves that week. At first she reads to five people. Then twenty. Then the landlord has to take out a wall. He starts charging at the door. Pell gives every coin to the library roof fund.',
          'She reads poetry so softly that grown dwarves weep into their tankards. She reads adventure so fiercely that a knight once drew his sword on a dragon that was only in chapter four. She reads chapter eleven of her own book exactly once, to a packed house, and has to be fanned back to consciousness afterwards. They still talk about it.',
          'Hecklers learn quickly. The first man to shout "Speak up!" receives a long look over the top of her enormous glasses, followed by the entire *Lament of the Drowned King* at a volume that rattles the tankards on the shelves. He buys every book she has ever written the next morning.',
          'At home she still whispers. She still stammers when she\'s flustered, which is often, because you make a point of it. She still hides behind books, but only from you, and only so she can peek over the top.',
          'And every night, after the tavern and the crowds, she climbs into bed beside you, opens whatever she\'s writing, and reads you the newest page in a voice meant for an audience of exactly one.',
          'That one is still your favorite.',
        ],
        ending: 'pell_loud',
      },
    },
  },
});
