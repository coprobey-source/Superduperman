FL.addCharacter({
  id: 'ophelia',
  name: 'Lady Ophelia Hollowmere',
  short: 'Ophelia',
  trope: 'Melancholy Gothic Ghost',
  color: '#a9c6e8',
  favStat: 'wits',
  endingTitle: 'A Heartbeat at Starfall',
  endings: {
    ophelia_haunted: 'Haunted by You',
    ophelia_debut: 'The Debutante, Belatedly',
  },
  teaser: 'A translucent woman in a two-hundred-year-old ballgown drifts down the staircase, sighing theatrically.',
  blurb: 'The ghost of Hollowmere Manor, dead for two hundred years. She waited all night at her debutante ball for a suitor who never arrived, and died of a broken heart (and a fall down the stairs) before dawn. Dramatic, morbid, darkly funny and desperately bored. A clever mind might uncover what really happened that night.',
  schedule: [null, null, 'manor'],
  gifts: { love: ['roses'], like: ['tea', 'comb', 'plushie', 'novel', 'quill', 'strings'], hate: ['candle', 'mirror', 'relic'] },
  giftLines: {
    love: ['She reaches for the roses — and her fingers, for just a moment, become solid enough to touch them.', '@ophelia:sad Roses. Red ones. I waited my whole life for someone to bring me red roses.', '@ophelia:blush ...I waited two hundred years after that, too. Oh, you\'ll make me weep. I\'m *very* good at weeping. I\'ve had practice.'],
    like: '@ophelia:happy How *thoughtful.* I can\'t hold it, of course. But I shall haunt it devotedly.',
    neutral: '@ophelia A gift for the dead. How morbidly sweet. I\'ll put it on the mantelpiece with the cobwebs.',
    hate: ['She recoils, flickering violently.', '@ophelia:angry A *mirror!* Must you? I haven\'t had a reflection in two hundred years. It\'s simply *rude* to remind me.'],
    special: {
      roses: [
        "She bends over the roses, and her fingertips, just for an instant, go solid enough to brush a petal. It trembles.",
        "@ophelia:sad Red ones. Of *course* you'd bring red ones. Do you know, in two hundred years, nobody has *ever* brought me red ones but you?",
        "@ophelia:blush I'm going to put them in the vase on the landing. At the top of the stairs. Where I waited. I want that spot to have something better in it now.",
      ],
      candle: [
        "The blessed candle's soft gold light touches her, and she flickers so violently she nearly vanishes.",
        "@ophelia:angry A *temple* candle? Blessed? Are you trying to *banish* me, darling? On a *Tuesday?*",
        "She peers at it from behind the piano, glowing indignantly.",
        "@ophelia:smug ...Well, it's very pretty, I'll give it that. Put it in the garden. Far away. I'll admire it from the attic, like a sensible ghost.",
      ],
      relic: [
        "She takes one look at the little gilded reliquary and shoots straight up through the ceiling.",
        "Her voice drifts down from the floor above.",
        "@ophelia:angry Is that a *saint's knucklebone?* You've brought a *holy relic* to a *haunted house?* That's like bringing a cat to a mouse's birthday party!",
        "A long pause.",
        "@ophelia:surprised ...Actually, it doesn't feel holy at all. I think it's a chicken. You've been swindled, my love. I'll come down now. Bring the chicken.",
      ],
      novel: [
        "@ophelia:surprised *The Duke's Forbidden Passion, Volume Nine?* Oh, how *scandalous.* In my day one had to hide this sort of thing inside a hymnbook.",
        "She hovers over it, reading the back cover, glowing faintly pink.",
        "@ophelia:blush Turn the pages for me? I'm stuck on page forty-two of my old one, and frankly the Duke in this one looks a great deal more promising. Read me the good parts. Read me the *very* good parts. I'm dead; I've no reputation left to lose.",
      ],
      quill: [
        "She circles the enchanted quill curiously as it sits on the dusty writing desk. Then she leans down and whispers to it.",
        "The quill leaps up and begins to write, in a gorgeous flowing hand: *Dearest Diary. It has been two hundred years. I have news.*",
        "@ophelia:surprised It — it writes for me. It writes what I *say.* I haven't been able to hold a pen since 1824!",
        "@ophelia:happy Oh, I'm going to write *letters.* I'm going to write *complaints.* I'm going to write a sternly worded note to every one of the families who ran away screaming. You've given a ghost her *voice* back, {name}. I could kiss you. I will, the very moment I'm solid enough. Remind me.",
      ],
      fork: [
        "@ophelia:smug A fork. How touching. I have a whole drawer of silverware downstairs that hasn't been used since the Regency, and you've brought me *one more.*",
        "She makes it float, spinning it gently in the air above her palm.",
        "@ophelia:happy I shall use it to set the table. For two. *Properly*, this time. With someone actually sitting at the other end of it.",
      ],
    },
    repeat: '@ophelia:smug Another one? Darling, I\'m a ghost. I collect things devotedly. But I\'m beginning to feel rather like a museum. A *very* beloved museum.',
  },
  talk: [
    ['@ophelia:happy Ah, the living one returns. How lovely. You\'re the only visitor I\'ve had in a century who hasn\'t screamed and run into a wall.'],
    ['@ophelia I\'ve been practicing my wailing. Listen. *Ooooooooh.* Too much? I feel it lacks *pathos.*'],
    ['She is lying draped across the piano, staring at the ceiling.', '@ophelia:sad Being dead is so *tedious.* I can\'t eat. I can\'t sleep. I can\'t even read — I can\'t turn the pages! I\'ve been stuck on page forty-two of the same novel since 1824.'],
    ['@ophelia:sad The last people who lived here were a family of six. I haunted them very politely. Rattled a few chains. Moved the teacups. They left after a week. I was *heartbroken.* I\'d grown fond of the youngest.'],
    ['@ophelia:smug Do you know how I died? I fell down those stairs. In my ballgown. Waiting for a man who never came. Very tragic. Very *Gothic.* I\'ve always been a little proud of it, honestly.'],
    ['@ophelia:blush You\'re warm. I can feel it from here, like standing near a hearth. I haven\'t been warm in two hundred years. Stand closer. ...Closer. *There.*'],
    ["@ophelia One must *never* walk through someone without asking first. It's terribly intimate.", "@ophelia:blush I walked through the vicar by accident in 1871. We both felt we ought to get married afterwards. Spiritually. It didn't work out. He was very High Church and I was very dead."],
    ["@ophelia:angry In my day, a glimpse of ankle was a *scandal.* Now I'm translucent. Everyone can see my ankles *all the time.* Through the skirt. Through the *petticoats.*", "@ophelia:smug I've decided to embrace it. I am the most scandalous woman in the county and I didn't even have to try."],
    ["She points up at a cobweb in the corner of the ceiling, where a fat spider is sitting.", "@ophelia:happy That's Lord Ambrose. He's the seventy-third Lord Ambrose. I name every spider in the house. It's a hereditary title. The current one is a *tremendous* bore, but one doesn't choose one's peerage."],
    ["@ophelia:smug I wrote my own epitaph, you know. After the funeral. I was very dissatisfied with theirs. It used to say *Here lies Ophelia, beloved daughter.* Rubbish.", "@ophelia I changed it. I spent six years carving it into the stone with the power of grief alone. It now says: *Here lies Ophelia. She waited. It was the stairs.*"],
    ["@ophelia:sad I remember lemon cake. The sharp kind, with the sugar on top that cracked. I'd have killed for lemon cake.", "@ophelia:smug Well. I'd have *died.* Again. Which, between us, I'm told I'm rather good at."],
    ["@ophelia Midnight is terribly overrated as a haunting hour. Everyone *expects* it. They're braced. The best hour is a quarter past four in the morning.", "@ophelia:smug That's when the living are at their most suggestible. A single cold breath on the back of the neck at four fifteen, and they're moving to the seaside by Thursday."],
    { if: 'ophelia_truth', lines: ["@ophelia:sad I keep reading the newspaper cutting you found in the attic. Over and over. *He was found clutching a bouquet of red roses.*", "@ophelia:happy Two hundred years I thought I was the girl nobody came for. And then a living person sat on my father's dusty floor and *solved* me. Do you know how rare that is? Most people don't solve anything. They just leave."] },
    { if: 'ophelia_candelabra', lines: ["@ophelia:smug I've had the candelabra you crashed into at step eleven mounted on the wall. With a little brass plaque.", "@ophelia:happy It says: *Here {name} attempted the Hollowmere Quadrille, and failed magnificently.* It's the first new plaque in this house since 1790. I'm awfully proud of it."] },
    { if: 'ophelia_grieved', lines: ["@ophelia:happy I told you about the duck pond, didn't I? Edmund, trying to impress me, reciting a sonnet on the edge of it? The ducks didn't care for the meter.", "@ophelia:sad It's strange. I can talk about him now, and laugh. Two hundred years I couldn't say his name. You sat with me in the attic until I could. I don't think you know what you did."] },
    { if: 'ophelia_wail', lines: ["@ophelia I've refined the wail, by the way. Since you complimented it. I've added a fourth *ooh.* Listen.", "She throws back her head. *Oooh. Ooooh. OOOOOOH. ...oooh.*", "@ophelia:smug The fourth one is *quieter.* It's for *pathos.* A ghost needs range, darling. One can't simply wail at people at the same volume for two centuries."] },
    { if: { stage: 3 }, lines: ["@ophelia:blush I've started counting the days until the blood moon. Not the years. The *days.* I haven't counted days in two hundred years.", "@ophelia It's much worse. Years go by at a decent clip when you're dead. Days *crawl.* I blame you entirely."] },
  ],
  afterTalk: [
    ["@ophelia:happy I've been practicing becoming solid. I managed it for nearly three seconds yesterday while thinking about the blood moon. I nearly fell through the floor afterwards. *Worth it.*"],
    ["She drifts close and whispers in your ear, sending a delicious chill down your spine.", "@ophelia:smug I've learned that ghosts can make people shiver from across a room. I've been doing it to you all evening. Did you notice?"],
    ["@ophelia:smug I finally finished the novel I've been stuck on since 1824. The heroine was much less satisfied than I was. I've decided the author was clearly a virgin."],
    ["@ophelia:blush The piano plays itself better now. Love songs, mostly. I can't help it. It's very embarrassing to be haunted by one's own feelings."],
    ["@ophelia:happy The dining table is set for two again. But I've cleared away the old corsage, and the dust, and I've put the good china out. For *now*, not for *then.* It's the first time in two hundred years I've set a table for someone who's actually coming."],
    { if: 'ophelia_haunt', lines: ["@ophelia:smug I've rearranged your socks. By color. Then by mood. Then I hid one of each pair in the chimney.", "@ophelia:happy You did say *haunt me all you like.* I've a great deal of creative energy and I'm putting it to tremendously good use. Check your boots before you put them on tomorrow. That's all I'll say."] },
    { if: 'ophelia_rose', lines: ["She hovers by the little vase on the landing, where a single red rose stands, impossibly fresh.", "@ophelia:blush Edmund's rose. The one you picked for me under the blood moon. It hasn't wilted. Not a single petal. I think the house is keeping it alive, out of sympathy.", "@ophelia:happy Or I am. I talk to it every night. I tell it about you. Roses are very good listeners."] },
    { if: 'ophelia_date_harbor', lines: ["@ophelia:happy I keep thinking about the sea. The way the sunset went straight through me and turned me into a stained-glass window.", "@ophelia:blush I've never been anything so *colorful.* I've been blue-white for two centuries. For half an hour on that pier I was gold, and pink, and *orange,* and it was entirely your fault."] },
    { if: 'ophelia_quadrille', lines: ["@ophelia:smug I've written to the Academy of Dance to inform them that the Hollowmere Quadrille has been revived. By two people. One of them deceased.", "@ophelia:happy They wrote back asking whether the tambourine section was really *necessary.* I've replied that it is the *only* necessary part, and enclosed a diagram of the Duke of Westbury's leg."] },
    { if: 'ophelia_ball_promise', lines: ["@ophelia:blush I've begun planning the ball. You did promise. I've drawn up a guest list. It's four hundred names long. Two hundred of them are dead.", "@ophelia:smug I'll trim it. Probably. The dead are much better dancers, you know. We don't step on anyone's feet. We step *through* them."] },
  ],
  dateFav: 'harbor',
  dates: {
    dinner: {
      start: {
        text: [
          "Ophelia can't leave the manor grounds. Except, it turns out, inside her old cameo locket, which you wear on a ribbon at your throat. *A loophole,* she called it. *I found it in 1911 and never had anywhere to go.*",
          "In the candlelit corner booth at the Tipsy Wyvern, the locket glows, and she shimmers out of it and settles on the bench opposite you in her two-hundred-year-old ballgown. The barmaid drops a tray. A dwarf at the bar drops his pipe into his ale.",
          "@ophelia:happy *Oh.* Oh, it's so *loud!* And everyone's so *alive!* Look at them, all eating and shouting and spilling things. I'd forgotten how *messy* the living are.",
          { if: { stage: 4 }, text: "She rests her translucent hand on the table beside yours, so close that the candle flame between your fingers turns faintly blue." },
        ],
        choices: [
          { text: "Order her a slice of lemon cake anyway, and set it in front of her.", go: 'cake', aff: 6 },
          { text: "Nod at the man at the next table who's being rude to the barmaid.", go: 'haunt', aff: 5 },
          { text: "\"What was a dinner date like, in 1824?\"", go: 'past', aff: 4 },
        ],
      },
      cake: {
        text: [
          "You catch the barmaid's eye and order the lemon cake, the sharp kind, with the cracked sugar on top. When it comes, you set it in front of Ophelia with a fork.",
          "She hovers over it, flickering faintly, the way a candle does in a draft. She can't eat it. You both know that.",
          "@ophelia:sad ...Lemon cake. The sharp kind. How did you — I must have mentioned it. I mention it to everyone. I didn't think anyone listened to the dead about *cake.*",
          "She hovers over it, closing her eyes, as though she can feel the warmth rising from it. A single glimmering tear falls, and vanishes before it touches the sugar.",
          "@ophelia:blush Eat it for me. Slowly. And tell me exactly what it's like. Every crumb. I want to *remember* it properly again.",
          "You do. She listens to every word, chin on her hand, and she's smiling the whole time.",
        ],
        next: 'end',
      },
      haunt: {
        text: [
          "At the next table, a red-faced man in a velvet coat is snapping his fingers at the barmaid for the third time and complaining that his soup is too cold.",
          "Ophelia follows your look. A slow, wicked smile spreads across her face.",
          "@ophelia:smug Too cold, is it? Oh, *darling.*",
          "She drifts over, very casually, and leans down, and breathes on his soup.",
          "Frost blooms across the surface. The spoon freezes upright in the bowl. The man turns, sees a translucent woman in a Regency ballgown smiling at him from six inches away, and leaves the Tipsy Wyvern by the nearest window.",
          "The barmaid sends over two free drinks. Ophelia glows like a lantern.",
          "@ophelia:happy I haven't had a *proper* haunt in years. Thank you. That was better than dessert.",
        ],
        next: 'end',
      },
      past: {
        text: [
          "@ophelia:smug Oh, *dreadful.* There was a chaperone, always — mine was Aunt Hester, who was deaf in one ear and listened with the other like a hawk.",
          "@ophelia One sat at opposite ends of a table eleven feet long. One discussed the weather, and the weather, and occasionally, if one was feeling *very* daring, the weather at the *seaside.*",
          "@ophelia:blush If a gentleman touched one's glove passing the salt, one fainted. I fainted three times at a single supper once. Edmund kept dropping the salt on purpose.",
          "She looks across the little candlelit table at you, close enough to touch if she were solid.",
          "@ophelia:happy This is much better. There's no Aunt Hester. And no salt, and no eleven feet. Only you, close enough to hear me whisper.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "As the evening wears on, she begins to flicker at the edges. The locket can't hold her for long. She drifts back into it with a sigh, and you feel it go cool against your throat.",
          "@ophelia:happy *Take me home, darling. Slowly. Through the busy streets. I want to hear all of them.*",
        ],
        end: true,
      },
    },
    gardens: {
      start: {
        text: [
          "The cameo locket at your throat glows as you pass through the gates of the Moonlit Gardens, and Ophelia shimmers out beside you, gazing around in delight.",
          "@ophelia:surprised Oh! It's *exactly* the same. Well, the hedges are taller. And the statues are mossier. But this is where I took the air every evening the summer I came out. With Aunt Hester. Under extreme supervision.",
          "Noble couples stroll the silver gravel paths. One or two notice her, go pale, and suddenly remember urgent business elsewhere.",
          "@ophelia:smug Oh, look. That's a Pemberton. I'd know that chin anywhere. Her great-great-great-grandmother had the same one, and she used it to cut me dead at the Assembly in 1823.",
          { if: { stage: 4 }, text: "@ophelia:blush I used to walk here wishing someone would take my arm. Hold yours out. Even if I can't take it. I want everyone to *see* that it's offered." },
        ],
        choices: [
          { text: "Dance the Hollowmere Quadrille right here on the lawn.", go: 'quadrille', aff: 6, if: 'ophelia_quadrille' },
          { text: "\"Tell me everything about their ancestors.\"", go: 'gossip', aff: 4 },
          { text: "Ask her to show you her old favorite bench.", go: 'bench', aff: 5 },
        ],
      },
      quadrille: {
        text: [
          "@you Shall we?",
          "@ophelia:surprised Here? On the lawn? In front of the *Pembertons?*",
          "You bow. She curtseys. And there, on the moonlit grass of the Gardens, you dance the Hollowmere Quadrille: all thirty-two steps, the hops, the turns, the promenade, and finally, with enormous ceremony, the tambourine section, for which you have brought a tambourine.",
          "A crowd gathers. Nobody has seen this dance in a hundred years. By the end, three elderly noblewomen are crying, a young lord is trying to learn the steps, and the Pemberton has fainted into a hedge.",
          "@ophelia:happy *Encore!* No. No, that's for the *audience* to say. Oh, I'm *glowing,* aren't I? I'm glowing in public! How *vulgar!* How *marvelous!*",
        ],
        next: 'end',
      },
      gossip: {
        text: [
          "@ophelia:smug You see the gentleman by the fountain with the very large mustache? His great-great-grandfather fought a duel over a poem. He lost. The poem was about his own nose.",
          "@ophelia That lady in lilac? Her ancestress eloped with a dancing master to the Western March, came back a week later, and *pretended she had been at the seaside.* Everyone knew. Everyone *talked.* I talked the most.",
          "She does the whole Gardens. Every family. Every scandal, two centuries deep. She knows which house's fortune came from smuggling, which earl had a secret second wife, and why the Countess of Ash's family is barred for life from the Royal Regatta.",
          "@ophelia:happy Oh, I've missed this. Dead people are such *dreadful* gossips. They only want to talk about how they died. This is *much* more fun.",
        ],
        next: 'end',
      },
      bench: {
        text: [
          "She leads you down a narrow path to a little stone bench half lost in ivy, under a weeping willow by the pond.",
          "@ophelia:sad This is where Edmund read me his first poem. It was about my eyebrows. It was *dreadful.* Sixteen stanzas. He rhymed *Ophelia* with *regalia.*",
          "@ophelia:happy I laughed so hard Aunt Hester thought I'd been taken ill. And he laughed too. And I thought, *oh. Oh, it's him.*",
          "She sits on the bench beside you, weightless, and looks at you rather than at the pond.",
          "@ophelia:blush I didn't think I'd ever sit here again with anyone. I thought this bench belonged to the past. But it doesn't, does it? It's only a bench. It belongs to whoever's sitting on it.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "The locket grows cool and she begins to fray at the edges like mist. She kisses the air beside your cheek before she slips back inside it, and you feel the cold of it there all the way home.",
        ],
        end: true,
      },
    },
    harbor: {
      start: {
        text: [
          "You carry the locket all the way to the end of Saltbreeze pier just before sunset, and open it. Ophelia shimmers out beside you, turns, sees the sea, and stops.",
          "She has never seen it. She tells you so in a whisper. In life, Mama forbade the harbor: sea air ruins a complexion. She was nineteen. Then she was dead.",
          "@ophelia:surprised It's — it doesn't *stop.* It just goes on and on until it falls off the edge of the world. Nobody told me it was so *big.*",
          "The sun sinks low and gold over the water. And as it does, the light passes straight through her, and she lights up from the inside like stained glass: gold, then rose, then fiery orange, all the colors of the sky caught in her translucent gown.",
          { if: { stage: 4 }, text: "@ophelia:blush Stand behind me. Look at the sunset *through* me. I want to be the window you see it in." },
        ],
        choices: [
          { text: "\"You're glowing. Literally. You look like a cathedral window.\"", go: 'glow', aff: 5 },
          { text: "Walk her out to the very tip of the breakwater, as far as the locket can carry her.", go: 'tip', aff: 6 },
          { text: "Recite one of Edmund's terrible poems to the sea.", go: 'poem', aff: 5, if: 'ophelia_grieved' },
        ],
      },
      glow: {
        text: [
          "She looks down at herself. Her hands are gold. Her gown is the pink of the clouds. Her hair is shot through with the last red light.",
          "@ophelia:surprised I'm *colored.* I haven't been anything but blue-white since the night I died. I'd forgotten I *could* be anything else.",
          "She turns in a slow circle on the pier, arms out, watching the sunset play through her fingers. A fisherman crosses himself. A little boy points and waves, and she waves back, delighted.",
          "@ophelia:happy I'm a *window,* {name}. I'm a cathedral window at the end of a fishing pier. That's the most beautiful thing anyone has ever called me, and Edmund wrote me sixteen stanzas.",
        ],
        next: 'end',
      },
      tip: {
        text: [
          "You walk her out along the breakwater, over the slick dark rocks, as far as you can go, until there's nothing ahead but water and sky.",
          "She drifts out past the very last stone, just a little, over the waves, the locket's ribbon tugging gently at your throat like a kite string.",
          "@ophelia:happy I'm over the *sea!* I'm *standing on the sea!* Look at me! Not even Edmund could walk on water, and he was a *poet!*",
          "She hovers there, hair blowing in the salt wind, until the sun touches the horizon. Then she drifts back and settles close against your side, cold and soft as sea mist.",
          "@ophelia:blush Two hundred years in one house, on one staircase. And tonight I stood on the edge of the world. With you holding the string.",
        ],
        next: 'end',
      },
      poem: {
        text: [
          "You clear your throat, face the sunset, and declaim at the top of your voice: *O, Ophelia! Fair as royal regalia! Thine eyebrows two, like caterpillars true!*",
          "Ophelia makes a sound like a teakettle and collapses into helpless laughter, flickering so hard she nearly goes out.",
          "@ophelia:happy The eyebrow one! I must have recited it to you in the attic — I recited *everything* in the attic — and you *learned* it! Oh, it's even worse out loud, I'd forgotten — *caterpillars* —",
          "@ophelia:sad ...He'd have liked you, you know. He'd have been *horribly* jealous. And then he'd have written you a poem about it. And it would have been dreadful.",
          "She leans against you, still giggling, as the sun goes down.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "The lanterns come on along the harbor, and the last of the color fades out of her, and she's moonlight-blue again. She doesn't seem to mind.",
          "@ophelia:happy I'll remember the sea now. I'll lie on the piano at Hollowmere and close my eyes and *remember* it. Thank you for giving a ghost something new to haunt.",
        ],
        end: true,
      },
    },
    picnic: {
      start: {
        text: [
          "Ophelia insisted on a picnic. A *daylight* picnic. In Whisperwood. She shimmers out of the locket in a sunny clearing and promptly almost disappears, faded to a faint grey outline by the bright afternoon sun.",
          "@ophelia:angry *Ugh.* Sunlight. It's like trying to be seen through a *bonfire.* I'm practically a rumor.",
          "She has, somehow, a ghostly black lace parasol, which she unfurls with a snap. It helps slightly. She sits on the very edge of the blanket like a duchess at an unsatisfactory garden party, and looks around at the wildflowers with grudging interest.",
          "@ophelia:smug Mama always said a lady never sat on the ground. Then again, Mama also said I'd catch my death if I went out without a shawl, and look how *that* turned out.",
          { if: { stage: 4 }, text: "@ophelia:blush ...I wanted to see you in the daylight. Properly. I only ever see you by candlelight. You're even warmer-looking in the sun. It's quite unfair." },
        ],
        choices: [
          { text: "Spread the blanket in the deep shade under the old yew tree.", go: 'shade', aff: 5 },
          { text: "Lie down in the hot sun and ask her to lie down beside you.", go: 'cool', aff: 6 },
          { text: "Make her a daisy chain and float it on her parasol.", go: 'daisies', aff: 4 },
        ],
      },
      shade: {
        text: [
          "You move the whole picnic into the cool green dark beneath an ancient yew. In the shade, she comes back into focus all at once, pale and clear and lovely, and her parasol vanishes with a pleased little pop.",
          "@ophelia:surprised Oh! I can see my *hands* again!",
          "@ophelia:happy A yew tree. How perfectly Gothic of you. They plant these in graveyards, you know. I feel *right at home.*",
          "She spends the afternoon lying in the shade with her head near your knee, reading the old novel you've brought along, aloud, while you turn the pages for her. She does all the voices. Her Duke is outrageous.",
        ],
        next: 'end',
      },
      cool: {
        text: [
          "It's a hot, still afternoon. You lie back on the blanket in the full sun and pat the space beside you. Ophelia gives you a skeptical look, then folds her parasol and lies down, very carefully, alongside you.",
          "Instantly, the air around you drops ten degrees. A cool, gentle chill settles over your whole body like a damp cloth on a fevered forehead.",
          "@you Oh, that's *wonderful.*",
          "@ophelia:smug Isn't it? I'm *tremendously* popular in August. Every summer the cats of Hollowmere come and sleep on me in heaps.",
          "@ophelia:blush ...I've never been *useful* to anyone before. Not since I died. I'm just something people run away from. And here you are, lying in the sun, *relieved* that I'm here.",
          "You fall asleep like that. When you wake, she's still there, keeping the heat off, watching the clouds go by, and she looks happier than you've ever seen her.",
        ],
        next: 'end',
      },
      daisies: {
        text: [
          "You make a long chain of daisies and toss it gently up onto her parasol. It falls straight through.",
          "@ophelia:sad ...Oh. Of course.",
          "You try again, and this time she concentrates, very hard, her face scrunched up with effort, and for just a second, the parasol goes solid enough to catch it. The daisies settle around the brim.",
          "@ophelia:surprised I *caught* it! I've never held anything that long in *daylight!*",
          "She keeps the parasol perfectly still for the rest of the afternoon, so as not to lose it. She won't stop admiring her reflection in the stream, which she can't see, but she says she can *feel* that she looks marvelous.",
        ],
        next: 'end',
      },
      end: {
        text: [
          "When the locket begins to cool, she drifts back into it with a satisfied sigh.",
          "@ophelia:happy *I've decided I quite like daylight. In small doses. With company. Don't tell the other ghosts. They'll think I've gone soft.*",
        ],
        end: true,
      },
    },
  },
  scenes: {
    intro: {
      start: {
        text: [
          'Hollowmere Manor creaks and sighs around you. Moonlight falls through broken windows onto dust-sheeted furniture. Somewhere upstairs, a piano is playing a waltz — badly, with feeling.',
          'The music stops. The temperature drops. And down the grand staircase drifts a woman.',
          'She is translucent, glowing faintly blue-white, dressed in a ballgown two centuries out of date: high-waisted, puff-sleeved, trimmed with lace. Her dark hair is piled up in elaborate curls. Her face is pale and lovely and terribly sad.',
          '@ophelia:angry *Begone, mortal!* Begone from this cursed place! Flee, lest you share my doom! *Ooooooooh!*',
          'She pauses, mid-wail.',
          '@ophelia:surprised ...You\'re not fleeing.',
        ],
        aff: 10,
        choices: [
          { text: '"That was a beautiful wail. Very haunting."', go: 'wail', flag: 'ophelia_wail' },
          { text: '"Mind if I stay? It\'s cold outside."', go: 'stay' },
          { text: 'Notice the dust sheets — she\'s set a table for two. [Wits check 1]', check: { stat: 'wits', dc: 1 }, pass: 'table', fail: 'stay' },
        ],
      },
      wail: {
        text: [
          'She blinks. She flickers.',
          '@ophelia:blush ...Truly? You think so? I\'ve been working on it for decades. I feel the third "ooh" really *lands.*',
          '@you It really does.',
          '@ophelia:happy Oh, finally! An *audience* with taste!',
        ],
        aff: 6,
        next: 'name',
      },
      stay: {
        text: [
          '@ophelia:smug It\'s colder in *here*, darling. I\'m dead. I lower the temperature of every room I enter. It\'s a very inconvenient condition.',
          'But she drifts closer, curious, peering at you.',
          '@ophelia ...Still, I suppose you may stay. It has been *ever* so long since I had someone to talk to who didn\'t scream.',
        ],
        aff: 4,
        next: 'name',
      },
      table: {
        text: [
          'Through the doorway to the dining room, you can see it: under all the dust, a table carefully laid for two. Fine china. Silver candlesticks. A wilted, ancient corsage on one plate.',
          '@you You\'re still waiting for someone.',
          'The ghost goes very still. The whole house seems to hold its breath.',
          '@ophelia:angry ...That is a very rude observation. And a very clever one.',
          '@ophelia:sad Two hundred years. One gets into the habit.',
        ],
        aff: 7,
        flag: 'ophelia_table',
        next: 'name',
      },
      name: {
        text: [
          'She sweeps into a deep, ghostly curtsy, her gown rippling like smoke.',
          '@ophelia Lady Ophelia Hollowmere. Debutante, deceased. Mistress of this crumbling pile. And you are?',
          '@you {name}.',
          '@ophelia:happy {name}. What a warm-sounding name. Everything about you is so dreadfully *warm.*',
          'She drifts back up the stairs, glancing over her shoulder.',
          '@ophelia:smug Do come again, living one. Evenings only. I\'m not a morning ghost.',
        ],
        end: true,
      },
    },
    s1: {
      start: {
        text: [
          'When you arrive, the manor has been... tidied. Somewhat. The dust sheets are off the ballroom furniture. The chandelier, hung with two centuries of cobwebs, is lit with ghostly blue flames.',
          { if: 'ophelia_table', text: "Through the dining-room door you can see the table for two. The dust is gone from it now. So is the wilted corsage. She sees you notice and looks quickly away." },
          'Ophelia waits in the middle of the ballroom floor, in the same gown, fussing with her translucent curls.',
          '@ophelia:sad I never got to dance. At my ball. Not one dance, the entire night. I simply stood by the stairs, waiting.',
          '@ophelia:blush Would you... would you dance with me? I know I can\'t be touched. But perhaps we could pretend?',
          'The piano upstairs begins to play on its own.',
        ],
        choices: [
          { text: 'Bow and offer her your hand, as if she were solid.', go: 'dance', aff: 8, flag: 'ophelia_waltz' },
          { text: 'Ask her to teach you the old dances. [Wits check 2]', check: { stat: 'wits', dc: 2 }, pass: 'teach', fail: 'teach_fail' },
        ],
      },
      dance: {
        text: [
          'You bow, and hold out your hand. She stares at it. Then she places her ghostly fingers just above yours, so close you feel a cold tingle, and you begin to dance.',
          'It\'s a strange waltz: you, moving through the dusty ballroom; her, gliding a hair\'s breadth away, never quite touching. Your hand at her waist meets only cold air. But she follows every step perfectly, and halfway through, she starts to laugh — a light, bright, delighted laugh that echoes through the empty house.',
          '@ophelia:happy I\'m *dancing!* After two hundred years! Oh, look at me!',
        ],
        next: 'end',
      },
      teach: {
        text: [
          'She teaches you the Hollowmere Quadrille, a dance so complicated it has thirty-two steps and a section involving a tambourine. You learn it in an hour, step by step, counting under your breath.',
          'By the end, you\'re dancing it together perfectly — and she\'s glowing brighter than the chandelier.',
          '@ophelia:happy No one\'s danced the quadrille in a century! It went out of fashion after the Duke of Westbury broke his leg on the tambourine section. Oh, you\'re a *marvel!*',
        ],
        aff: 8,
        flag: 'ophelia_quadrille',
        next: 'end',
      },
      teach_fail: {
        text: [
          'She attempts to teach you the Hollowmere Quadrille. You get lost by step four, crash into a candelabra at step eleven, and fall into a dusty armchair at step sixteen.',
          'She is laughing so hard she flickers in and out of visibility.',
          '@ophelia:smug That was the worst quadrille I have ever seen. And I have seen the Duke of Westbury\'s.',
          '@ophelia:happy ...It was also the most fun I\'ve had since I died.',
        ],
        aff: 5,
        flag: 'ophelia_candelabra',
        next: 'end',
      },
      end: {
        text: [
          'When the music fades, she hovers beside you at the great window, looking out at the moonlit grounds.',
          '@ophelia His name was Edmund Ashworth. He was a poet. Terribly handsome. Terrible poetry. He promised he would come to my ball and ask for the first dance, and then he would ask my father for my hand.',
          '@ophelia:sad He never came. I waited by the stairs until dawn. And then I... well. The stairs.',
          '@ophelia:sad I\'ve always wondered *why.* What I did wrong. Why he didn\'t want me.',
        ],
        choices: [
          { text: '"Maybe it wasn\'t about you at all."', go: 'notyou', aff: 6 },
          { text: '"He was a fool. I came. I\'ll keep coming."', go: 'fool', aff: 8, flag: 'ophelia_felt' },
        ],
      },
      notyou: {
        text: [
          '@ophelia:sad That is what everyone says. "It wasn\'t you, it was him." But when you\'ve had two hundred years to think about it, you find a *great* many reasons that it was you.',
          'She sighs. Then she looks at you sideways.',
          '@ophelia:blush ...But it is kind of you to say.',
        ],
        end: true,
      },
      fool: {
        text: [
          'She turns to look at you. Her ghostly eyes are wide.',
          '@ophelia:surprised You\'ll keep coming?',
          '@you Every evening you\'ll have me.',
          'She reaches out, slowly, and lays her hand against your cheek. It passes through, mostly. But for one instant — just one — you swear you feel the brush of cold fingertips.',
          '@ophelia:blush ...Oh. I *felt* that. I haven\'t felt anything in two hundred years.',
        ],
        end: true,
      },
    },
    s2: {
      start: {
        text: [
          { if: 'ophelia_felt', text: "You've kept your word: every evening, at the manor door. She's begun waiting for you on the bottom step instead of the top one. She says it's for the draft. It isn't." },
          'Ophelia meets you at the door, flickering with agitation.',
          '@ophelia:angry I\'ve decided! I\'ve been dead two hundred years and I\'m *tired* of not knowing. I want to know why Edmund didn\'t come. Will you help me find out?',
          '@ophelia There\'s an old desk in the attic. My father\'s. Locked. I can\'t open it — I can\'t touch anything — but you can.',
          'The attic is thick with dust. The desk is old mahogany, its lock rusted shut. Inside, you find bundles of yellowed letters, ledgers, and a sealed envelope addressed in faded ink: *To Lady Ophelia Hollowmere.* It was never opened.',
        ],
        choices: [
          { text: 'Read the letters carefully, piecing together what happened. [Wits check 3]', check: { stat: 'wits', dc: 3 }, pass: 'mystery', fail: 'mystery_fail' },
          { text: 'Hand her the sealed letter first.', go: 'letter', aff: 7 },
        ],
      },
      mystery: {
        text: [
          'You sort through the letters by date. Her father\'s correspondence. A ledger of debts. A letter from a magistrate. A newspaper clipping, folded small, dated the morning after her ball.',
          '*TRAGEDY ON THE NORTH ROAD. A carriage overturned in the storm last night. The sole passenger, Mr. Edmund Ashworth, poet, was killed. He was found clutching a bouquet of red roses.*',
          'Ophelia makes a sound you\'ll never forget.',
          '@you He didn\'t abandon you, Ophelia. He was on his way. He was bringing you roses. Your father must have hidden this — and the letter — after you died.',
          'She can\'t speak. She opens the sealed envelope with your help, her ghostly hands trembling over yours.',
        ],
        mood: 'sad',
        aff: 12,
        flag: 'ophelia_truth',
        next: 'read',
      },
      mystery_fail: {
        text: [
          'You sort through the letters, but the old handwriting is hard to read. You can\'t piece it together.',
          'It\'s Ophelia who spots it: a sealed envelope, addressed to her, at the bottom of the pile.',
          '@ophelia:surprised That\'s... his handwriting. Edmund\'s. Open it. *Please.*',
        ],
        aff: 5,
        next: 'read',
      },
      letter: {
        text: [
          '@ophelia:surprised That\'s his handwriting. Edmund\'s. I\'d know it anywhere — the dreadful curly "O."',
          'You break the seal for her and hold it up so she can read.',
        ],
        next: 'read',
      },
      read: {
        text: [
          '*My dearest Ophelia — I write this in haste, as my carriage is delayed by the storm. I will be late, but I will come. Save me the last dance, if not the first. I have roses for you. Red, as you always wanted. I mean to ask your father tonight. I mean to ask you forever. — Your Edmund.*',
          'The letter falls through her hands and drifts to the floor.',
          'Ophelia is crying. Ghostly tears, glimmering like moonlight, falling and vanishing before they touch the ground.',
          '@ophelia:sad He was coming. He was *coming.* All this time, I thought — two hundred years I thought —',
          '@ophelia:sad I wasn\'t unwanted. I was *loved.*',
        ],
        choices: [
          { text: 'Stay with her while she grieves.', go: 'grieve', aff: 10, flag: 'ophelia_grieved' },
          { text: '"You were loved then. You\'re loved now."', go: 'now', aff: 12, flag: 'ophelia_solid' },
        ],
      },
      grieve: {
        text: [
          'You sit on the dusty attic floor beside her for hours, while she cries, and talks, and cries again. She tells you everything about Edmund: his awful poems, his kind eyes, the time he fell in the duck pond trying to impress her.',
          'Near dawn, she goes quiet.',
          '@ophelia:sad I always thought that when I found out the truth, I would finally be at peace. I would move on. Fade away.',
          '@ophelia:blush But I\'m still here. And I think... I think it\'s because now I have a different reason to stay.',
          'She looks at you.',
        ],
        end: true,
      },
      now: {
        text: [
          'She looks at you, her tears still falling.',
          '@ophelia:surprised ...Now?',
          '@you Now.',
          'And then, impossibly, she becomes solid — just for a moment, just enough — and throws her arms around you. She\'s cold as winter and light as mist, and she\'s *there*, she\'s *real*, and then she fades again.',
          '@ophelia:surprised I touched you. I *touched* you. How did I —',
          '@ophelia:blush I think a ghost can become solid when she wants to *stay* badly enough.',
        ],
        end: true,
      },
    },
    s3: {
      start: {
        text: [
          'The blood moon hangs huge and crimson over Hollowmere Manor. Ophelia is waiting for you on the grand staircase — the staircase where she waited for Edmund, two hundred years ago — and she is no longer transparent.',
          'She is solid. Real. Pale and dark-haired and lovely, in her old-fashioned gown, with color in her cheeks for the first time.',
          '@ophelia The blood moon. On one night a century, the veil between the living and the dead grows thin. Ghosts can walk as they did in life. For one night only.',
          { if: 'ophelia_solid', text: "@ophelia:blush In the attic, when you said I was loved *now,* I was solid for one heartbeat. I've been trying to get back there ever since. Tonight the moon has done it for me, and I've got until *dawn.*" },
          '@ophelia:sad I didn\'t want to spend it waiting on the stairs this time.',
          'She descends the staircase, step by step, and stops on the last one, so her eyes are level with yours.',
          '@ophelia:blush I wanted to spend it with you.',
        ],
        choices: [
          { text: 'Take her hands — real hands — and kiss them.', go: 'hands', aff: 10 },
          { text: 'Produce a single red rose from behind your back. [Wits check 4]', check: { stat: 'wits', dc: 4 }, pass: 'rose', fail: 'hands' },
        ],
      },
      rose: {
        text: [
          'You hold out a single red rose. You picked it this morning, from the overgrown garden of the manor — from a rosebush by the gate that, according to her father\'s ledgers in the attic, Edmund planted for her two hundred years ago. It has somehow, impossibly, survived.',
          'She takes it with trembling hands. She can hold it. She presses it to her lips and closes her eyes.',
          '@ophelia:sad ...His roses. You found his roses. And you brought them to me.',
          '@ophelia:happy I was given roses at last. And by the person I love.',
        ],
        aff: 14,
        flag: 'ophelia_rose',
        next: 'hands',
      },
      hands: {
        text: [
          'Her hands are cool, but not cold anymore. She laughs in astonishment as your fingers lace through hers.',
          '@ophelia:surprised I can feel you. Your warmth. Your heartbeat in your wrist. Oh, I\'d *forgotten.* I\'d forgotten what it was like to be touched.',
          'She kisses you on the last step of the staircase, and it\'s cool and sweet and tastes faintly of the rose — and the whole manor sighs around you, the dust lifting in the moonlight like glitter.',
        ],
        next: 'night',
      },
      night: {
        text: [
          "Her old bedchamber has been closed for two hundred years. She leads you there by candlelight, through halls that seem a little less shadowed with each step. The canopy bed is faded rose silk. The window looks out over the blood moon.",
          { if: 'ophelia_waltz', text: "Somewhere below, the piano begins to play on its own: the waltz you danced to in the ballroom, the first night she ever danced. It's playing it badly, with a great deal of feeling. She laughs and tells it to *hush.* It doesn't." },
          "@ophelia:blush I haven't been touched in two hundred years. I don't know if I remember how this goes. I'm not sure I ever knew. I died *terribly* inexperienced.",
          "@you We'll go slow.",
          "@ophelia:smug Please don't go *too* slow. I've only got until dawn.",
          "You untie the ribbons of her old-fashioned gown one by one. With each ribbon she seems to become more real: warmer, more solid, color rising into her pale cheeks. When the gown falls away she's shivering, not from cold but from the sheer overwhelming *sensation* of the night air on her skin.",
          "@ophelia:surprised I can feel *everything.* The air. The silk. Your hands. Oh, your *hands.* I'd forgotten hands. I've been dead so long I'd forgotten what *warm* felt like.",
          "She's shy and fervent and heartbreakingly grateful, savoring every touch as if she might never feel it again. You kiss her slowly down the line of her throat, and she arches against you and makes a sound she hasn't made in two centuries. She clutches at your back. She keeps laughing softly in wonder, and saying your name, as if to make sure it's real.",
          "@ophelia:blush Again. Do that again. I want to remember it. I want to remember all of it, for when I'm cold again.",
          "The candles burn low. The blood moon climbs. The old house sighs around you, and for one night it feels truly alive...",
          "...",
          "Near dawn she lies against your chest, already beginning to fade at the edges as the blood moon sets.",
          "@ophelia:sad I'll be a ghost again when the sun rises. I won't be able to touch you.",
          "@ophelia:sad Will you still come? Even if I can't hold you?",
          "@you Every evening. For as long as you'll have me.",
          { if: 'ophelia_felt', text: "@ophelia:happy You said that once before. At the window, that first night in the ballroom. *I'll keep coming.* And you did. Every single evening. I've stopped being afraid you won't." },
          "She smiles, translucent now, glimmering in the first grey light.",
          "@ophelia:happy Then I'll haunt you forever, my love. Devotedly.",
        ],
        end: true,
      },
    },
    morning: {
      start: {
        text: [
          "You wake alone in the faded rose bed, sunlight pouring through the dusty window. For a terrible moment you think it was a dream.",
          "Then the temperature drops a few degrees, and a cool, faint pressure settles against your side, like someone curling up next to you on the covers.",
          "@ophelia:happy I'm here. I'm still here. Just... thin again.",
          "She shimmers into view: translucent, glowing faintly blue, lying beside you with her chin propped on her hand. She looks happier than you've ever seen her.",
          { if: 'ophelia_rose', text: "On the pillow between you lies Edmund's red rose, still perfectly fresh. She keeps reaching for it and almost, almost touching it." },
          "@ophelia:blush I watched you sleep. Is that terribly morbid? It's the sort of thing ghosts are expected to do. But I wasn't haunting you. I was just... *looking.*",
          "She reaches out and lays her hand on your chest. It passes through, mostly. But you feel the faintest coolness, right over your heart.",
        ],
        choices: [
          { text: "\"Haunt me all you like.\"", go: "haunt", aff: 6, flag: 'ophelia_haunt' },
          { text: "\"Was it worth two hundred years of waiting?\"", go: "worth", aff: 6 },
          { text: "Lay your hand over hers, where it rests on your chest.", go: "hand", aff: 6 },
          { text: "\"Next time there's a ball in this house, it's yours. Every dance. I promise.\"", go: "ball", aff: 6, flag: 'ophelia_ball_promise' },
        ],
      },
      haunt: {
        text: [
          "@ophelia:smug Oh, I *intend* to. Rattling chains. Moaning in the corridors. Rearranging your socks. Appearing in mirrors at *extremely* inopportune moments.",
          "She grins wickedly.",
          "@ophelia:smug I have a great deal of creative energy and nowhere to put it. You're going to have a very interesting life.",
        ],
        end: true,
      },
      worth: {
        text: [
          "She drifts up off the pillow and hangs there a moment, faintly luminous, thinking.",
          "@ophelia:sad I used to count the years. Every single one. Two hundred of them.",
          "@ophelia:happy I'd wait two hundred more for one more night like that.",
          "@ophelia:smug ...But I'd rather not have to. Come back tonight. I'll be thin, and cold, and you won't be able to hold me. But I'll play you the piano. Badly. With *feeling.*",
        ],
        end: true,
      },
      hand: {
        text: [
          "You lay your hand over her ghostly one. You can't feel it, not really, but for a moment it seems to glow a little brighter, a little warmer.",
          "@ophelia:surprised ...I felt that. Just for an instant. Like a candle flickering on.",
          "@ophelia:blush I think every time you touch me, I come back a little more. I think if you keep doing that, one day I might stay.",
        ],
        end: true,
      },
      ball: {
        text: [
          "She goes absolutely still. For a moment she flickers, the way she does when she's trying very hard not to cry.",
          "@ophelia:surprised A ball? *Here?* With guests? Living ones? Who won't run screaming into the topiary?",
          "@you The whole town, if you like. And you're the debutante. You don't wait on the stairs. You come *down* them, and I'm at the bottom.",
          "@ophelia:sad Nobody's come to a ball at Hollowmere since mine. The ballroom's been shut for two hundred years. The chandelier has *bats* in it.",
          "@ophelia:happy ...I'll evict the bats. I'll tell them it's a *matter of the heart.* Oh, {name}, I'm going to need a *new gown.* I'm going to need to *haunt a dressmaker.*",
        ],
        end: true,
      },
    },
    ending: {
      start: {
        branch: [
          { if: { any: ['ophelia_ball_promise', ['ophelia_quadrille', 'ophelia_table']] }, go: 'ball' },
          { go: 'roof' },
        ],
      },
      roof: {
        text: [
          'Ophelia can\'t leave the manor grounds. So you don\'t go to the festival hill. Instead, you climb to the roof of Hollowmere Manor with a blanket and a bottle of wine, and she drifts up beside you, glowing faintly in the dark.',
          "Even the little cameo locket couldn't carry her through a whole night; it never holds her for more than an hour or two. And tonight, she says, she wants all of it.",
          '@ophelia:sad I\'m sorry. You\'re missing the festival. The music, the dancing —',
          '@you I\'d rather be here.',
          { if: 'ophelia_rose', text: "She has tucked Edmund's rose behind her ear, the living one, impossibly fresh. It's the only thing on the roof that isn't moonlight-blue." },
          'The stars begin to fall. She watches them with her translucent hand hovering over yours.',
          { if: 'ophelia_truth', text: "@ophelia:happy Two hundred years I thought the story of my life was *the girl nobody came for.* And then you sat in my father's attic and read it properly. It's a much better story than I thought." },
          '@ophelia The legend says the stars bind those who watch together forever. I wonder if it counts for the dead.',
        ],
        choices: [
          { text: 'Lay your hand as near to hers as it will go. "I think it counts."', go: 'goddess' },
          { text: '"Make a wish, Ophelia. On the brightest one. Anything you like."', go: 'wish', if: { any: ['ophelia_haunt', 'ophelia_wail'] } },
        ],
      },
      goddess: {
        text: [
          '@narrator Oh, darling. Of *course* it does.',
          'The voice comes from everywhere. A falling star, brighter than all the rest, curves out of its path across the sky — and streaks down toward the manor roof.',
          'It strikes Ophelia directly in the chest.',
          'She gasps. She glows — blinding white, then gold, then a warm, living pink. When the light fades, she\'s sitting beside you on the roof, solid, flushed, breathing hard.',
          'She presses a hand to her chest.',
          '@ophelia:surprised ...I have a *heartbeat.* I — I have a — *it\'s beating!* It\'s *beating!*',
          '@narrator Two hundred years of waiting deserves a second chance, don\'t you think? Consider it a Starfall gift. From one hopeless romantic to another.',
          'Ophelia throws her arms around you, laughing and sobbing, warm and alive, and kisses you under the falling stars until neither of you can breathe.',
        ],
        mood: 'happy',
        next: 'epilogue',
      },
      epilogue: {
        text: [
          '*Some time later...*',
          'You restore Hollowmere Manor together, room by room. It turns out Ophelia has two hundred years of opinions on interior design. The ballroom is reopened. The piano is tuned. (She still plays it badly. With feeling.)',
          'She discovers food again and is horrified by how much she\'s missed. She eats cake for breakfast for a month. She sleeps for the first time in two centuries and wakes up furious that she\'d forgotten how wonderful it was.',
          'She rereads the novel she was stuck on at page forty-two, turning the pages herself this time. She still hates the ending. She writes a strongly worded letter to the author\'s great-great-grandchildren.',
          'You hold a ball in the restored manor on the anniversary of her death, and she dances every single dance — the first, the last, and all the ones between — with you.',
          'Edmund\'s rosebush blooms in the garden every summer. She lays the first rose on his grave. The second, she keeps for herself.',
        ],
        ending: 'ophelia',
      },
      wish: {
        text: [
          "She looks up at the brightest star, the one curving down out of its path toward the roof as if it's heard you, and goes very quiet.",
          "@ophelia:sad Everyone will expect me to wish to be alive. That's the proper ending, isn't it? The ghost gets her heartbeat back. The curtain falls. Very tidy.",
          "@ophelia:smug But I've been a ghost for two hundred years, {name}. I'm *extremely* good at it. I can walk through walls. I can frost a man's soup from across a tavern. I can make you shiver from the other end of a ballroom. I don't want to stop haunting.",
          "She turns to you, glowing.",
          "@ophelia:blush I just want to stop haunting a *house.*",
          "@narrator Oh, *honey.* Now that's a wish.",
          "The star streaks down and strikes, not Ophelia, but the little cameo locket around your neck. It blazes white-hot for an instant, and then cools, and settles against your skin like a second heartbeat.",
          "Ophelia drifts to the edge of the roof. Past the edge. Out over the garden wall, out past the gates, the old invisible boundary she hasn't crossed in two centuries, and she doesn't stop. She doesn't fade. She spins in the air above the road, laughing.",
          "@ophelia:happy I'm *out!* I'm tied to *you* now! Not the stairs, not the house — *you!* Oh, you poor thing. You're going to be the most thoroughly haunted person in the kingdom.",
          "She swoops back and kisses you, cold as winter and sweet as roses, and the stars fall all around you both.",
        ],
        next: 'haunted_epilogue',
      },
      haunted_epilogue: {
        text: [
          '*Some time later...*',
          "You are, as promised, the most thoroughly haunted person in Generic FantasyLandia.",
          "Ophelia goes everywhere you go. She rides on your shoulder through the market, critiquing the fashions. She floats beside you at the Guild, terrifying the quest-giver into doubling your fee. She frosts the soup of anyone who is rude to you in taverns, and she has a long memory for rudeness.",
          "You travel. She has two hundred years of the world to catch up on, and she wants all of it: mountains, cities, deserts, the sea, the sea, the *sea.* She makes you take her to the sea every chance you get and stands on the waves at sunset, glowing like stained glass.",
          "You go into the haunted-house business, briefly, as consultants. People pay enormous sums for Ophelia to explain, very patiently, to the ghosts in their attics, that rattling chains is *gauche* and the quarter past four rule is everything.",
          "Hollowmere Manor is restored, and you live there between journeys. The piano plays love songs. The spiders keep their peerage.",
          "And once a century, under the blood moon, she is solid again for a single night, and the two of you don't waste a minute of it. In between, she says, she doesn't mind being cold. You're warm enough for two.",
          "Every morning she rearranges your socks. Every night she whispers *goodnight, my love* in your ear and makes you shiver.",
          "She has never once been bored again.",
        ],
        ending: 'ophelia_haunted',
      },
      ball: {
        text: [
          "You don't go to the festival hill. The festival comes to Hollowmere.",
          "For a week you've been hauling dust sheets off furniture and chasing bats out of the chandelier, and Ophelia has been haunting every dressmaker, florist and musician in Clichéton until they agreed to come. Tonight, on Starfall, the great doors of Hollowmere Manor stand open again after two hundred years, and half the town is in the ballroom.",
          "The chandelier blazes with ghostly blue fire. An orchestra tunes up nervously. Lady Pemberton is there, clutching her husband. So is the orphanage matron, and a dozen curious adventurers, and the barmaid from the Tipsy Wyvern, and a troll in a borrowed waistcoat.",
          "Then the music stops, and every head turns toward the grand staircase.",
          "She appears at the top of it. The same stairs where she waited all night for someone who never came. She's in a new gown of silver and midnight blue, translucent and glowing, and she looks absolutely terrified.",
          "You're waiting at the bottom. You hold out your hand.",
          "She comes down the stairs. One step. Then another. She doesn't stop. She doesn't wait. When she reaches the last step, she puts her ghostly hand just above yours, and the orchestra strikes up a waltz.",
          "@ophelia:blush ...Not the first dance I was promised. But the first dance I've ever had at a *ball.* May I have it, {name}?",
        ],
        next: 'ball_dance',
      },
      ball_dance: {
        text: [
          "You dance. The town watches. Somebody starts to cry. Above the ballroom, through the shattered glass of the old dome, the stars begin to fall.",
          "@narrator Oh, *now* you're just showing off. All right. All right. I'm a sucker for a staircase.",
          "A single star, brighter than the rest, falls straight down through the broken dome, through the blazing chandelier, and into Ophelia's arms, mid-turn.",
          "She glows: white, then gold, then a warm, living pink. And when the light fades, your hand at her waist meets silk and warmth and the rise and fall of breath.",
          "@ophelia:surprised I can — I'm — {name}, I can feel the *floor!* I've got *feet!* I've got a *heartbeat!*",
          "She doesn't stop dancing. She laughs out loud, solid and flushed and alive in the middle of her own ballroom, and the whole town bursts into applause.",
          "@ophelia:happy I'm at my *ball!* I'm at my ball and I'm *alive* and I'm dancing with the person I love and *nobody is late!*",
          "She kisses you in the middle of the floor while the stars fall through the dome like snow. Then she drags you straight into the Hollowmere Quadrille, tambourine section and all.",
        ],
        next: 'ball_epilogue',
      },
      ball_epilogue: {
        text: [
          '*Some time later...*',
          "Lady Ophelia Hollowmere, aged two hundred and nineteen, becomes the most sought-after hostess in Clichéton.",
          "Nobody quite knows what to make of her. She has the manners of a Regency debutante and the opinions of a woman who has been dead for two centuries and has *nothing left to lose.* She says things at dinner that make dowagers choke. She tells the Pembertons exactly what their great-great-great-grandmother said about them in 1823. She teaches an entire generation of young nobles the Hollowmere Quadrille, and the tambourine section is now compulsory.",
          "Hollowmere becomes famous for its balls. They are held every season, they begin at a quarter past four, and everyone comes, living and otherwise. The ghosts of the county attend in the conservatory. The dead, Ophelia insists, are wonderful dancers. They never step on anyone's feet; they step *through* them.",
          "She writes her memoirs, with an enchanted quill, and calls them *Two Hundred Years on the Shelf.* They are the scandal of the decade. Chapter eleven is entirely about you.",
          "She never waits on the stairs again. If you're late home, she comes looking for you, down the stairs, out the door, along the road, with a lantern and a great deal to say.",
          "And she never once sits out a dance. Not the first. Not the last. Not any of the ones in between.",
        ],
        ending: 'ophelia_debut',
      },
    },
  },
});
