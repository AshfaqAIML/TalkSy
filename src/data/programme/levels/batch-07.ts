/**
 * Core English Programme — Batch 07 (Chapters 25–28, Level A2).
 *
 * Comparisons, prepositions and phrasal verbs, joining sentences and
 * practical paragraphs — the A2 capstone.
 */

import { chapter } from "../types";
import type { ChapterSpec } from "../types";
import { AU, CORR, DL, DICT, GR, EX, FB, H, LIS, MCQ, MATCH, N, REORD, TB, T, VOC, W, fb } from "../types";

export const batch07: ChapterSpec[] = [
  chapter("a2", {
    number: 25,
    title: "Comparisons",
    description:
      "Better, best, bigger, the biggest: the complete comparison system — comparative and superlative adjectives, than and as...as, irregular comparisons (good/bad/far) and comparing people, products and places in real conversations.",
    objectives: [
      "Form comparatives and superlatives for short, long and irregular adjectives",
      "Compare with than and as...as",
      "Use the irregular set: good/better/best, bad/worse/worst, far/farther",
      "Compare products, people and places naturally",
    ],
    prerequisites: ["CH-24"],
    hours: 2,
    skills: ["grammar", "speaking", "vocabulary"],
    strands: ["communication", "speaking", "vocabulary", "writing", "reading"],
    assessment:
      "Chapter review quiz: 3 questions on comparative forms and as...as. Assignment: compare two phones, cities or jobs in a paragraph.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 7,
    module: "a2-modality-and-quantity",
    lessons: [
      {
        title: "Comparative Adjectives",
        blurb: "Bigger, cheaper, more expensive — comparing two things.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "speaking", "writing"],
        outcomes: [
          "Form comparatives: -er, -ier, more",
          "Compare two things with than",
          "Spell double-consonant comparatives (big → bigger)",
        ],
        blocks: [
          H("Comparing two"),
          GR(
            "Comparative formation",
            "Short adjectives: + er (cheap → cheaper); one vowel + one consonant doubles (big → bigger); y → ier (easy → easier). Long adjectives: more + adjective (more expensive). Compare with THAN.",
            [
              ["This phone is cheaper than that one.", "Este teléfono es más barato que ese."],
              ["Today is hotter than yesterday.", "Hoy hace más calor que ayer."],
              ["Running is more relaxing than working.", "Correr es más relajante que trabajar."],
            ],
          ),
          EX("Shopping comparisons", [
            ["The red bag is bigger, but the blue one is more beautiful.", "El bolso rojo es más grande, pero el azul es más bonito."],
          ]),
          AU("Listen: comparing", "cheaper than... bigger than... easier than... more expensive than...", 0.85),
          W("Never double more + -er", "'More cheaper' is wrong — choose ONE marker: cheaper OR more expensive. One per adjective."),
        ],
        assignment: {
          title: "Two objects, one verdict",
          instructions:
            "Compare two objects you own (phones, shoes, bags) with five comparative sentences, using short and long adjectives.",
          minWords: 18,
          maxWords: 60,
        },
        homework: ["Compare your city with another city in three sentences.", "Use than each time."],
      },
      {
        title: "Superlative Adjectives",
        blurb: "The best, the biggest, the most interesting — picking the champion.",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "speaking", "communication"],
        outcomes: [
          "Form superlatives: the -est, the most",
          "Use in + group and of + group correctly",
          "Recommend the best of anything",
        ],
        blocks: [
          H("The champion form"),
          GR(
            "Superlative formation",
            "Short: the + adjective + est (the cheapest, the biggest, the easiest). Long: the most + adjective (the most beautiful). Group: in + place/group (in the class), of + plural (of all my friends).",
            [
              ["It's the best film of the year.", "Es la mejor película del año."],
              ["She's the youngest in the family.", "Es la más joven de la familia."],
              ["That was the most expensive restaurant!", "¡Ese fue el restaurante más caro!"],
            ],
          ),
          EX("Recommending", [
            ["Try the green tea — it's the best on the menu.", "Prueba el té verde — es el mejor del menú."],
          ]),
          AU("Listen: superlatives", "the biggest... the cheapest... the most beautiful... the best of the year.", 0.85),
          N("Superlatives always take 'the'", "A superlative names a unique champion, so 'the' is part of the form: the tallest, the most interesting."),
        ],
        assignment: {
          title: "My personal championships",
          instructions:
            "Write five superlative sentences about your life: the best food you know, the most interesting person, the busiest day, the cheapest hobby, the most beautiful place.",
          minWords: 18,
          maxWords: 60,
        },
        homework: ["Recommend the best restaurant you know.", "Name the most useful app on your phone."],
      },
      {
        title: "Than and As...As",
        blurb: "Bigger than, as big as, not as cheap as — the two comparison engines.",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "writing"],
        outcomes: [
          "Compare inequality with than",
          "Compare equality with as...as",
          "Soften with a bit / much (a bit cheaper, much better)",
        ],
        blocks: [
          H("Two engines"),
          GR(
            "than vs as...as",
            "Inequality: adjective-er + than ('cheaper than'). Equality: as + adjective + as ('as cheap as'). Negative equality: not as...as = less than.",
            [
              ["My bag is as big as yours.", "Mi bolso es tan grande como el tuyo."],
              ["The bus isn't as fast as the train.", "El autobús no es tan rápido como el tren."],
              ["This is much better than the old one.", "Esto es mucho mejor que el viejo."],
            ],
          ),
          TB("Degree boosters", ["Booster", "Meaning", "Example"], [
            ["a bit / a little", "slightly", "a bit cheaper"],
            ["much / far", "a lot", "much better"],
            ["twice / three times", "multiples", "twice as big as"],
          ]),
          AU("Listen: equality and difference", "as big as... not as fast as... much better than... twice as expensive as...", 0.85),
          N("The most useful comparison", "'Not as...as' sounds softer and more polite than a direct negative — a key tool for diplomatic English."),
        ],
        assignment: {
          title: "Compare your week",
          instructions:
            "Write five comparison sentences about your life mixing than, as...as and not as...as, with at least one degree booster.",
          minWords: 18,
          maxWords: 60,
        },
        homework: ["Compare two transport options in your city.", "Say which is better and why."],
      },
      {
        title: "Irregular Comparisons",
        blurb: "Good, better, best — the four adjectives that ignore the rules.",
        minutes: 20,
        difficulty: 2,
        skills: ["vocabulary", "grammar"],
        strands: ["vocabulary", "reading", "communication"],
        outcomes: [
          "Use good/better/best and bad/worse/worst",
          "Use far/farther and little/less",
          "Combine irregular comparisons in conversation",
        ],
        blocks: [
          H("The rule-breakers"),
          TB("Irregular comparison set", ["Base", "Comparative", "Superlative"], [
            ["good", "better", "the best"],
            ["bad", "worse", "the worst"],
            ["far", "farther / further", "the farthest / furthest"],
            ["little", "less", "the least"],
          ]),
          EX("Irregulars in real talk", [
            ["This coffee is better than the one at work.", "Este café es mejor que el del trabajo."],
            ["That was the worst day of my life!", "¡Ese fue el peor día de mi vida!"],
            ["The station is further than I thought.", "La estación está más lejos de lo que pensaba."],
          ]),
          AU("Listen: good, better, best", "good — better — the best. bad — worse — the worst.", 0.85),
          W("More good never exists", "No matter how excited you are, 'more good' and 'gooder' are impossible. The best thing you can say is 'better' — or 'the best'."),
        ],
        assignment: {
          title: "Irregular life",
          instructions:
            "Write five sentences using all four irregular sets (better, worse, further/farther, less) about real experiences.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Name the best and worst meal you ate this month.", "Say which is further from home: work or the shops?"],
      },
      {
        title: "Comparing in Real Life and Chapter Review",
        blurb: "Compare products, people and plans like a native shopper, then the Chapter 25 review.",
        minutes: 25,
        difficulty: 2,
        skills: ["speaking", "communication"],
        strands: ["communication", "speaking", "vocabulary", "listening"],
        outcomes: [
          "Run a full comparison conversation",
          "Choose the right form under time pressure",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The comparison conversation"),
          DL(
            "Which one should I buy?",
            "A customer compares two phones.",
            [
              ["Customer", "I like both phones. Which one is better?"],
              ["Assistant", "The X20 is cheaper, but the P45 is faster and it has a much better camera."],
              ["Customer", "Is the P45 battery as good as the X20's?"],
              ["Assistant", "No, the X20's battery is the best on the market — two days."],
              ["Customer", "Hmm. The P45 is the most beautiful, but it's also the most expensive."],
              ["Assistant", "True. But it's further proof that you get what you pay for!"],
              ["Customer", "You're right. I'll take the P45 — better photos matter more to me than money."],
            ],
          ),
          AU("Listen: the shop comparison", "Which one is better? The X20 is cheaper, but the P45 is faster with a much better camera.", 0.85),
          H("Chapter 25 review"),
          T("Three questions on comparisons, then the comparison paragraph."),
        ],
        assignment: {
          title: "My comparison verdict",
          instructions:
            "Compare two things you know well (two cities, two apps, two jobs) in a paragraph of six sentences using: two comparatives, one superlative, one as...as and one irregular.",
          minWords: 30,
          maxWords: 95,
        },
        questions: [
          MCQ(
            "Which is correct?",
            [["a", "She is more taller than me."], ["b", "She is taller than me."], ["c", "She is taller as me."]],
            "b",
            fb("She is taller than me.", "Short adjective → -er + than. One marker only.", "'More taller' doubles the marker; 'as' belongs to the equality pattern."),
            { skill: "grammar", difficulty: "easy" },
          ),
          FB(
            "Complete the superlative: 'It's ___ (good) restaurant in the city.'",
            "It's ___ restaurant in the city.",
            ["the best"],
            fb("the best", "Good is irregular: good → better → the best.", "Superlatives also need 'the'."),
            { skill: "vocabulary", difficulty: "easy" },
          ),
          MCQ(
            "'The bus isn't ___ fast ___ the train.' — the equality pattern:",
            [["a", "as / as"], ["b", "so / than"], ["c", "more / than"]],
            "a",
            fb("as fast as", "Equality (and negative equality) uses as + adjective + as.", "Than belongs to inequality comparisons."),
            { skill: "grammar", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),

  chapter("a2", {
    number: 26,
    title: "Prepositions and Everyday Phrasal Verbs",
    description:
      "Prepositions beyond place and time: dependent prepositions (depend on, listen to), prepositions after adjectives, and the world of phrasal verbs — get up, turn on, look for — the small verbs that make English sound natural.",
    objectives: [
      "Use the twenty most common dependent prepositions",
      "Recognise and use fifteen everyday phrasal verbs",
      "Separate separable phrasal verbs correctly (turn it on)",
      "Understand how particles change meaning",
    ],
    prerequisites: ["CH-25"],
    hours: 2,
    skills: ["vocabulary", "grammar", "listening"],
    strands: ["vocabulary", "listening", "communication", "reading"],
    assessment:
      "Chapter review quiz: 3 questions on dependent prepositions and phrasal verbs. Assignment: describe your morning routine with five phrasal verbs.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 7,
    module: "a2-connecting-ideas",
    lessons: [
      {
        title: "Dependent Prepositions",
        blurb: "You listen TO, depend ON, wait FOR — verbs choose their prepositions.",
        minutes: 25,
        difficulty: 2,
        skills: ["vocabulary", "grammar"],
        strands: ["vocabulary", "reading", "writing"],
        outcomes: [
          "Use twenty common verb + preposition combinations",
          "Avoid translating prepositions from your language",
          "Use adjective + preposition pairs (good at, afraid of)",
        ],
        blocks: [
          H("Fixed partnerships"),
          T(
            "English verbs choose their prepositions, and the choice rarely matches other languages. 'Listen to music' (not 'listen music'), 'depend on' (not 'depend of'). Learn them as whole chunks, like single words.",
          ),
          TB("Core verb + preposition", ["Chunk", "Example"], [
            ["listen to", "I listen to podcasts."],
            ["depend on", "It depends on the weather."],
            ["wait for", "I'm waiting for the bus."],
            ["look for (= search)", "She's looking for her keys."],
            ["look at", "Look at this photo!"],
            ["pay for", "He paid for dinner."],
            ["think about", "I'm thinking about my holiday."],
            ["belong to", "This bag belongs to Ana."],
            ["ask for", "She asked for help."],
            ["arrive at / in", "We arrived at the airport / in Rome."],
          ]),
          EX("Adjective + preposition", [
            ["good at languages, afraid of dogs, interested in art", "bueno en idiomas, temeroso de perros, interesado en arte"],
          ]),
          AU("Listen: preposition chunks", "listen to... depend on... wait for... look for... good at... afraid of...", 0.85),
          W("The number-one transfer error", "Most learners say 'depend of' (Spanish/Portuguese) or 'listen music' (many languages). Drill the chunks whole — 'IT DEPENDS ON' as one word."),
        ],
        assignment: {
          title: "Chunk collector",
          instructions:
            "Write eight sentences using eight different verb+preposition or adjective+preposition chunks from this lesson, all true about your life.",
          minWords: 18,
          maxWords: 65,
        },
        homework: ["Say five chunks aloud as whole units.", "Find three chunks in anything you read or hear today."],
      },
      {
        title: "What Is a Phrasal Verb?",
        blurb: "Verb + particle = new meaning: give up doesn't mean give, and up doesn't mean up.",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "reading", "listening"],
        outcomes: [
          "Explain what a phrasal verb is",
          "Learn the first eight core phrasal verbs",
          "Understand separable vs inseparable patterns",
        ],
        blocks: [
          H("The particle effect"),
          T(
            "A phrasal verb combines a verb with a particle (up, on, off, out, for...) to create a NEW meaning you cannot guess from the parts. 'Give' = regalar; 'give up' = stop trying. There are thousands — you already know some from the practice labs.",
          ),
          TB("First eight core phrasal verbs", ["Phrasal verb", "Meaning", "Example"], [
            ["get up", "leave your bed", "I get up at seven."],
            ["wake up", "stop sleeping", "She wakes up early."],
            ["turn on", "start a machine", "Turn on the lights."],
            ["turn off", "stop a machine", "Turn off your phone."],
            ["put on", "dress in", "Put on your coat."],
            ["take off", "remove (clothes)", "Take off your shoes."],
            ["sit down", "take a seat", "Please sit down."],
            ["stand up", "rise", "Stand up, please."],
          ]),
          GR("Separable phrasal verbs", "With an object, the particle can move: 'turn on the TV' or 'turn the TV on'. With a PRONOUN it must move: 'turn it on' (never 'turn on it').", [["Turn it on. / Put it on.", "Enciéndelo. / Póntelo."]]),
          AU("Listen: morning phrasals", "I get up, I put on my shoes, I turn on the radio.", 0.85),
          N("Learn them as vocabulary", "Treat each phrasal verb as ONE new word with its own meaning — not grammar to compute."),
        ],
        assignment: {
          title: "My morning in particles",
          instructions:
            "Describe your morning from alarm to leaving home in five sentences using five different phrasal verbs.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Use turn on/off three times today (and say it).", "Write two sentences with pronoun objects: 'turn it on'."],
      },
      {
        title: "Daily-Use Phrasal Verbs",
        blurb: "The fifteen phrasal verbs of everyday conversation: find out, come back, pick up...",
        minutes: 25,
        difficulty: 3,
        skills: ["vocabulary", "listening"],
        strands: ["vocabulary", "listening", "communication", "speaking"],
        outcomes: [
          "Recognise and use the fifteen daily phrasal verbs",
          "Hear phrasal verbs in fast speech",
          "Retell a day using only phrasal narration",
        ],
        blocks: [
          H("The daily fifteen"),
          TB("Everyday phrasal verbs", ["Phrasal verb", "Meaning", "Example"], [
            ["find out", "discover information", "I found out the truth."],
            ["come back", "return", "He came back at ten."],
            ["go out", "leave home for fun", "We went out for dinner."],
            ["come in", "enter", "Come in, please!"],
            ["pick up", "lift / collect", "Pick up your bag. / I'll pick you up at eight."],
            ["look after", "take care of", "She looks after her grandmother."],
            ["look for", "search", "I'm looking for my glasses."],
            ["give back", "return something", "Give back my pen, please."],
            ["call back", "return a call", "I'll call you back."],
            ["grow up", "become an adult", "I grew up in Lima."],
            ["hurry up", "be quick", "Hurry up, we're late!"],
            ["hold on", "wait", "Hold on a second."],
            ["try on", "test clothes", "Try on the blue shirt."],
            ["write down", "note", "Write down my number."],
            ["wake up", "stop sleeping", "I wake up at six."],
          ]),
          EX("Phrasal storytelling", [
            ["Yesterday I woke up late, hurried up, picked up my bag and went out. On the bus I found out that the meeting was cancelled, so I called my boss back and came home.", "Ayer me desperté tarde, me di prisa, cogí mi bolso y salí. En el autobús descubrí que la reunión se canceló, así que llamé a mi jefe y volví a casa."],
          ]),
          AU("Listen: a phrasal day", "I woke up late, hurried up, picked up my bag and went out.", 0.85),
          N("Frequency", "Phrasal verbs dominate casual spoken English. Every one you learn makes listening measurably easier."),
        ],
        assignment: {
          title: "A phrasal day",
          instructions:
            "Retell a real day of your life in six sentences using six different phrasal verbs from this lesson.",
          minWords: 20,
          maxWords: 70,
        },
        homework: ["Use three phrasal verbs in real conversation today.", "Write down two new ones you hear."],
      },
      {
        title: "Particles and Prepositions in Real Life and Chapter Review",
        blurb: "When particles change everything: one verb, five meanings, then the Chapter 26 review.",
        minutes: 25,
        difficulty: 3,
        skills: ["vocabulary", "reading"],
        strands: ["vocabulary", "reading", "communication", "writing"],
        outcomes: [
          "Explain how one verb + different particles makes different meanings",
          "Choose correct prepositions under pressure",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("One verb, many lives"),
          TB("The 'look' family", ["Phrasal", "Meaning"], [
            ["look at", "direct your eyes to"],
            ["look for", "search for"],
            ["look after", "take care of"],
            ["look forward to", "feel happy about a future event"],
            ["look up", "find information in a reference"],
          ]),
          EX("One conversation, five looks", [
            ["A: What are you looking for? B: My dictionary — I want to look up a word. A: I'll look after your coffee while you search. B: Thanks! I look forward to reading tonight.", "A: ¿Qué buscas? B: Mi diccionario — quiero buscar una palabra. A: Cuidaré tu café mientras buscas. B: ¡Gracias! Tengo ganas de leer esta noche."],
          ]),
          AU("Listen: the look family", "look at... look for... look after... look forward to... look up...", 0.85),
          H("Chapter 26 review"),
          T("Three questions on prepositions and phrasal verbs, then the routine task."),
        ],
        assignment: {
          title: "Routine + phrasals + prepositions",
          instructions:
            "Describe a typical day (six sentences) using four phrasal verbs, two verb+preposition chunks and one adjective+preposition pair.",
          minWords: 30,
          maxWords: 95,
        },
        questions: [
          FB(
            "Complete the chunk: 'It depends ___ the weather. I'm listening ___ a podcast.'",
            "It depends ___ the weather. I'm listening ___ a podcast.",
            ["on", "to"],
            fb("depends ON / listening TO", "These are fixed chunks — the verbs choose their prepositions.", "Translating prepositions from your first language causes most of these errors."),
            { skill: "vocabulary", difficulty: "medium" },
          ),
          MCQ(
            "Which sentence has the pronoun in the right place?",
            [["a", "Turn on it."], ["b", "Turn it on."], ["c", "Turn on him it."]],
            "b",
            fb("Turn it on.", "With pronoun objects, separable phrasal verbs MUST split: verb + pronoun + particle.", "'Turn on it' is impossible in English."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "'Look after' means:",
            [["a", "search for"], ["b", "take care of"], ["c", "watch carefully"]],
            "b",
            fb("take care of", "Look after = care for someone/something.", "Search = look for; watch carefully is just 'watch'."),
            { skill: "vocabulary", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),

  chapter("a2", {
    number: 27,
    title: "Joining Sentences",
    description:
      "From short sentences to flowing English: coordination with and, but, or; cause and effect with because and so; the surprise connector although; compound vs complex sentences; and combining short ideas into longer natural ones.",
    objectives: [
      "Join ideas with and, but, or with correct punctuation",
      "Express reason with because and result with so",
      "Introduce contrast with although",
      "Distinguish compound and complex sentences",
    ],
    prerequisites: ["CH-26"],
    hours: 2,
    skills: ["grammar", "writing"],
    strands: ["writing", "reading", "communication"],
    assessment:
      "Chapter review quiz: 3 questions on connectors and sentence types. Assignment: combine ten short sentences into five well-joined ones.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 7,
    module: "a2-connecting-ideas",
    lessons: [
      {
        title: "And, But, Or",
        blurb: "The three traffic lights of connection: adding, contrasting, choosing.",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading"],
        outcomes: [
          "Join ideas with the three coordinators",
          "Punctuate compound sentences (comma before and/but/or)",
          "Choose the right connector by meaning",
        ],
        blocks: [
          H("The three lights"),
          GR(
            "and / but / or",
            "AND adds ('I cooked and she cleaned'). BUT contrasts ('It's expensive but useful'). OR offers a choice ('Tea or coffee?'). Two full sentences joined by one of these = a compound sentence, usually with a comma.",
            [
              ["I wanted to walk, but it was raining.", "Quería caminar, pero llovía."],
              ["You can take the bus, or we can walk together.", "Puedes tomar el autobús, o podemos caminar juntos."],
            ],
          ),
          EX("Joining in practice", [
            ["The film was long, and the seats were uncomfortable.", "La película fue larga y los asientos incómodos."],
          ]),
          AU("Listen: three connections", "I cooked and she cleaned. It's expensive but useful. Tea or coffee?", 0.85),
          W("Comma check", "Two complete sentences need a comma before and/but/or: 'I called her, but she didn't answer.' No comma for single words: 'I called her but no answer' is informal but acceptable; keep the comma rule for full sentences."),
        ],
        assignment: {
          title: "Light controls",
          instructions:
            "Combine five pairs of short sentences into five compound sentences using and, but and or at least once each.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Find three compound sentences in anything you read.", "Name the connector's job in each."],
      },
      {
        title: "Because and So",
        blurb: "Reason and result: because explains why, so shows what followed.",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "writing"],
        strands: ["writing", "communication", "reading"],
        outcomes: [
          "Explain reasons with because",
          "Show results with so",
          "Flip between reason-first and result-first order",
        ],
        blocks: [
          H("Cause and effect"),
          GR(
            "because vs so",
            "Because introduces the REASON ('I stayed home because it rained'). So introduces the RESULT ('It rained, so I stayed home'). Same facts, two directions.",
            [
              ["She was tired because she worked all night.", "Estaba cansada porque trabajó toda la noche."],
              ["She worked all night, so she was tired.", "Trabajó toda la noche, así que estaba cansada."],
            ],
          ),
          EX("Direction practice", [
            ["I love cooking, so I make dinner every day. / I make dinner every day because I love cooking.", "Me encanta cocinar, así que hago la cena cada día. / Hago la cena cada día porque me encanta cocinar."],
          ]),
          AU("Listen: reason and result", "I stayed home because it rained. It rained, so I stayed home.", 0.85),
          N("The comma rule", "'So' results take a comma before them ('It rained, so...'); 'because' reasons usually take none before 'because'."),
        ],
        assignment: {
          title: "Same fact, both directions",
          instructions:
            "Write three pairs of sentences: each pair states one fact with because in one version and so in the other.",
          minWords: 18,
          maxWords: 60,
        },
        homework: ["Explain two decisions you made today with because.", "Restate them with so."],
      },
      {
        title: "Although and Complex Sentences",
        blurb: "The surprise connector — and the step from compound to complex sentences.",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Contrast with although and though",
          "Define complex sentences (independent + dependent clause)",
          "Combine three ideas into one complex sentence",
        ],
        blocks: [
          H("The surprise word"),
          GR(
            "although / though",
            "Although introduces a surprising contrast: 'Although it was raining, we walked home.' 'Though' is its informal twin. The although-clause is DEPENDENT — it cannot stand alone.",
            [
              ["Although he's rich, he lives simply.", "Aunque es rico, vive con sencillez."],
              ["We enjoyed the trip, though the hotel was terrible.", "Disfrutamos el viaje, aunque el hotel era terrible."],
            ],
          ),
          TB("Compound vs complex", ["Type", "Structure", "Example"], [
            ["Compound", "sentence + and/but/or + sentence", "It rained, but we went out."],
            ["Complex", "sentence + because/although/when + sentence", "We went out although it rained."],
          ]),
          AU("Listen: surprises", "Although it was raining, we walked home. Although he's rich, he lives simply.", 0.85),
          N("Comma position", "Although-clause FIRST → comma after it ('Although it rained, we went.'). Although-clause SECOND → usually no comma ('We went although it rained.')"),
        ],
        assignment: {
          title: "Surprise combinations",
          instructions:
            "Write four although-sentences about surprising truths in your life (two with the although-clause first, two second).",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Rewrite two but-sentences with although.", "Say one surprising truth about yourself."],
      },
      {
        title: "Combining Your Ideas and Chapter Review",
        blurb: "The full connector toolbox in one paragraph, then the Chapter 27 review.",
        minutes: 25,
        difficulty: 3,
        skills: ["writing", "grammar"],
        strands: ["writing", "communication", "reading"],
        outcomes: [
          "Combine many short sentences into flowing text",
          "Vary connectors for style",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("Before and after combining"),
          EX(
            "The transformation",
            [
              ["Short: I moved to this city. I didn't know anyone. I was scared. I joined a club. I met new people. Now I love it here. → Combined: When I moved to this city, I didn't know anyone, so I was scared. Although I felt nervous, I joined a club, and I met new people. Now I love it here.", "Corto: Me mudé a esta ciudad. No conocía a nadie. Tenía miedo. Me uní a un club. Conocí gente nueva. Ahora me encanta estar aquí. → Combinado: Cuando me mudé a esta ciudad, no conocía a nadie, así que tenía miedo. Aunque me sentía nervioso, me uní a un club y conocí gente nueva. Ahora me encanta estar aquí."],
            ],
            "Same facts — three sentences instead of six, and it reads like a story.",
          ),
          AU("Listen: the combined version", "When I moved to this city, I didn't know anyone, so I was scared. Although I felt nervous, I joined a club.", 0.85),
          H("Chapter 27 review"),
          T("Three questions on connectors, then the combining task."),
        ],
        assignment: {
          title: "The great combining",
          instructions:
            "Write ten simple sentences about a real experience, then rewrite them as five connected sentences using and, but, because, so and although at least once each. Submit both versions.",
          minWords: 40,
          maxWords: 130,
        },
        questions: [
          MCQ(
            "Choose the connector: 'I took a taxi ___ it was raining heavily.'",
            [["a", "so"], ["b", "because"], ["c", "although"]],
            "b",
            fb("because", "The rain is the REASON for the taxi.", "'So' would make the taxi the reason for the rain!"),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "Which sentence shows a SURPRISE contrast?",
            [["a", "It was cheap, so I bought it."], ["b", "Although it was expensive, I bought it."], ["c", "It was cheap and nice."]],
            "b",
            fb("Although it was expensive, I bought it.", "Buying despite the high price is surprising — although's job.", "'So' shows result; 'and' simply adds."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "'It rained, ___ the match continued.' — best connector:",
            [["a", "but"], ["b", "because"], ["c", "or"]],
            "a",
            fb("but", "Rain vs continuing is a contrast → but.", "Because shows reason; or shows choice."),
            { skill: "grammar", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("a2", {
    number: 28,
    title: "Practical Paragraphs and Communication",
    description:
      "The A2 capstone: paragraph architecture (topic sentence, supporting details, conclusion), describing experiences in writing, simple emails, everyday requests, and the communication habits that carry you into B1. Finishing this level means you can write connected text on familiar topics.",
    objectives: [
      "Structure a paragraph: topic, support, conclusion",
      "Describe past experiences in organised writing",
      "Write a clear simple email (greeting, purpose, closing)",
      "Make everyday requests and handle responses",
    ],
    prerequisites: ["CH-27"],
    hours: 3,
    skills: ["writing", "communication", "reading"],
    strands: ["writing", "communication", "reading", "speaking", "listening"],
    assessment:
      "Chapter review quiz: 3 questions on paragraph structure and email conventions. Assignment: the A2 exit task — an experience paragraph plus a complete email.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly. Finishing this chapter completes Level A2.",
    batch: 7,
    module: "a2-connecting-ideas",
    lessons: [
      {
        title: "Paragraph Structure",
        blurb: "One paragraph, one job: the topic sentence announces it, details prove it, the ending completes it.",
        minutes: 25,
        difficulty: 2,
        skills: ["writing", "reading"],
        strands: ["writing", "reading"],
        outcomes: [
          "Name the three parts of a paragraph",
          "Write a strong topic sentence",
          "Spot the odd sentence that breaks unity",
        ],
        blocks: [
          H("The paragraph machine"),
          GR(
            "Topic + support + conclusion",
            "1) Topic sentence: one line saying what the paragraph is about. 2) Supporting sentences: 3–5 details, examples or reasons. 3) Concluding sentence: a wrap-up or feeling. Every sentence must serve the topic.",
            [["Learning English changed my daily life. Now I can understand songs and films. I read news from other countries every morning. I even made a friend in Canada online. These small changes make me feel like a world citizen.", "Aprender inglés cambió mi vida diaria. Ahora entiendo canciones y películas. Leo noticias de otros países cada mañana. Incluso hice un amigo en Canadá por internet. Estos pequeños cambios me hacen sentir ciudadano del mundo."]],
          ),
          EX("Unity check", [
            ["Topic: 'My grandmother is an amazing cook.' Support: her dishes, her speed, her secret recipes. NOT relevant: 'My grandfather likes football.'", "Tema: 'Mi abuela es una cocinera increíble.' Apoyo: sus platos, su rapidez, sus recetas secretas. NO relevante: 'A mi abuelo le gusta el fútbol.'"],
          ]),
          AU("Listen: the paragraph read aloud", "Learning English changed my daily life. Now I can understand songs and films...", 0.85),
          N("One paragraph, one idea", "If a sentence does not serve the topic sentence, it belongs in another paragraph — or nowhere."),
        ],
        assignment: {
          title: "Topic sentence factory",
          instructions:
            "Write three topic sentences (one for a paragraph about a hobby, one about a person, one about a place). Then fully develop ONE of them into a complete paragraph with three supporting sentences and a conclusion.",
          minWords: 35,
          maxWords: 110,
        },
        homework: ["Find a paragraph in anything you read.", "Label its topic sentence and conclusion."],
      },
      {
        title: "Topic Sentences and Support",
        blurb: "The sentence that runs the paragraph — and the details that back it up.",
        minutes: 20,
        difficulty: 2,
        skills: ["writing"],
        strands: ["writing", "reading"],
        outcomes: [
          "Distinguish strong and weak topic sentences",
          "Support claims with specific examples",
          "Use numbers and facts as support",
        ],
        blocks: [
          H("Weak vs strong"),
          TB("Topic sentence quality", ["Weak", "Strong", "Why"], [
            ["I like food.", "Home cooking is better than restaurants.", "Specific, arguable, clear"],
            ["Sport is good.", "Swimming is the perfect exercise for busy people.", "Names one sport and a claim"],
          ]),
          EX("Support with specifics", [
            ["Swimming works the whole body: thirty minutes burns about 300 calories, it is easy on the knees, and you can do it at any age.", "La natación trabaja todo el cuerpo: treinta minutos queman unas 300 calorías, es suave para las rodillas y se puede practicar a cualquier edad."],
          ]),
          AU("Listen: strong topic sentences", "Home cooking is better than restaurants. Swimming is the perfect exercise for busy people.", 0.85),
          N("Numbers convince", "'Many people' is fog; 'three of my four colleagues' is a photograph. Specific details are the muscle of any paragraph."),
        ],
        assignment: {
          title: "Upgrade the support",
          instructions:
            "Take your paragraph from the last lesson (or write a new one): upgrade its topic sentence and add two specific supporting details (a number, an example or a name).",
          minWords: 30,
          maxWords: 100,
        },
        homework: ["Write a strong topic sentence about your job or studies.", "List three specific supports for it."],
      },
      {
        title: "Describing Experiences",
        blurb: "Turn 'it was nice' into a story: when, where, who, what, feelings.",
        minutes: 25,
        difficulty: 2,
        skills: ["writing", "grammar"],
        strands: ["writing", "communication", "reading"],
        outcomes: [
          "Describe an experience with the five question words",
          "Mix past simple and past continuous for atmosphere",
          "End a description with a reflection",
        ],
        blocks: [
          H("The experience formula"),
          TB("The five questions", ["Question", "Sentence starter"], [
            ["When/Where?", "Last summer, ... / In 2023, ..."],
            ["Who?", "I went with..."],
            ["What happened?", "First..., then..., suddenly..."],
            ["What was it like?", "It was amazing / terrifying / hilarious."],
            ["What did you learn/feel?", "I realised... / I'll never forget..."],
          ]),
          EX(
            "A full experience paragraph",
            [
              ["Last spring, I visited my friend in Kyoto. We spent three days walking through temples and markets. While we were drinking tea in a tiny café, an old man started singing traditional songs — everyone went quiet. It was the most magical moment of my trip. I realised that the best travel moments are never planned.", "La primavera pasada visité a mi amiga en Kioto. Pasamos tres días caminando por templos y mercados. Mientras tomábamos té en un café diminuto, un señor empezó a cantar canciones tradicionales — todos guardamos silencio. Fue el momento más mágico del viaje. Me di cuenta de que los mejores momentos de viaje nunca se planifican."],
            ],
          ),
          AU("Listen: the Kyoto paragraph", "Last spring, I visited my friend in Kyoto. It was the most magical moment of my trip.", 0.85),
          N("One perfect detail beats ten general words", "'An old man singing in a tiny café' paints the scene; 'something cultural happened' erases it."),
        ],
        assignment: {
          title: "My experience paragraph",
          instructions:
            "Write one paragraph (six to eight sentences) describing a real experience: when/where, who, what happened (with one while/when continuous sentence), a feeling, and one reflection at the end.",
          minWords: 40,
          maxWords: 130,
        },
        homework: ["Tell your experience aloud to someone.", "Ask which detail they liked best."],
      },
      {
        title: "Writing Simple Emails",
        blurb: "Greeting, purpose, details, closing: the four-move email that works everywhere.",
        minutes: 25,
        difficulty: 2,
        skills: ["writing", "communication"],
        strands: ["writing", "communication", "reading"],
        outcomes: [
          "Structure a simple email in four moves",
          "Choose the right greeting and sign-off",
          "Make a clear request by email",
        ],
        blocks: [
          H("The email skeleton"),
          TB("The four moves", ["Move", "Language"], [
            ["1. Greeting", "Dear Mr Smith, / Hi Anna,"],
            ["2. Purpose", "I'm writing to ask about... / I'm writing because..."],
            ["3. Details", "The facts, dates, questions — short sentences."],
            ["4. Closing", "Thank you very much. / Best wishes, + name"],
          ]),
          EX(
            "A complete email",
            [
              ["Subject: Music lesson on Thursday\n\nDear Ms Brown,\n\nI'm writing because I can't come to our lesson on Thursday at five. I have a doctor's appointment.\n\nCould we move the lesson to Friday at the same time? I'm free all afternoon.\n\nThank you very much, and sorry for the change.\n\nBest wishes,\nDaniel", "Asunto: Clase de música el jueves\n\nEstimada Sra. Brown:\n\nLe escribo porque no puedo asistir a nuestra clase del jueves a las cinco. Tengo una cita médica.\n\n¿Podríamos mover la clase al viernes a la misma hora? Estoy libre toda la tarde.\n\nMuchas gracias y disculpe el cambio.\n\nUn saludo,\nDaniel"],
            ],
          ),
          AU("Listen: the email moves", "Dear Ms Brown, I'm writing because I can't come to our lesson on Thursday.", 0.85),
          W("Never start with your life story", "'Hello, my name is Daniel, I am 24, I live with my mother and...' — business emails state their purpose in sentence one. Details come after."),
        ],
        assignment: {
          title: "The request email",
          instructions:
            "Write a complete email (with subject line) making a real request: to a teacher, a shop, a landlord or a friend. Use all four moves.",
          minWords: 40,
          maxWords: 120,
        },
        homework: ["Write one more email: a thank-you note.", "Keep both under 120 words."],
      },
      {
        title: "Everyday Communication and A2 Exit",
        blurb: "Requests, responses and the full A2 exit review: you can now function in English.",
        minutes: 30,
        difficulty: 3,
        skills: ["communication", "writing"],
        strands: ["communication", "writing", "reading", "speaking", "listening"],
        outcomes: [
          "Make polite requests in five everyday situations",
          "Respond to requests gracefully",
          "Complete the A2 exit tasks and chapter review",
        ],
        blocks: [
          H("The polite request ladder"),
          TB("Requests by situation", ["Situation", "Request"], [
            ["borrowing", "Could I borrow your pen, please?"],
            ["asking a favour", "Could you help me for a second?"],
            ["at a shop", "Could I try this on, please?"],
            ["at a restaurant", "Could we have the bill, please?"],
            ["declining", "I'm sorry, I can't. Maybe another time?"],
          ]),
          DL(
            "The favour",
            "A neighbour asks for help.",
            [
              ["Rosa", "Hi Tom! Sorry to bother you — could you help me carry these boxes?"],
              ["Tom", "Of course! Are you moving something?"],
              ["Rosa", "Yes, they're books for the school. They're a bit heavy."],
              ["Tom", "No problem. Where do you want them?"],
              ["Rosa", "Just inside the door. Thank you so much — you're a star!"],
              ["Tom", "Any time, Rosa. That's what neighbours are for."],
            ],
          ),
          AU("Listen: the favour", "Could you help me carry these boxes? Of course! Thank you so much.", 0.85),
          H("Chapter 28 review — Level A2 exit"),
          T("You can now tell stories, plan futures, compare options, connect ideas, write paragraphs and emails. B1 is where English starts feeling like YOUR language. Complete the review and the exit task."),
        ],
        assignment: {
          title: "A2 exit: my story in writing",
          instructions:
            "Write two pieces: (1) a paragraph (six sentences) about a memorable experience using past tenses and a connector; (2) a complete email to a friend inviting them to visit your city. Use at least one comparison and one phrasal verb.",
          minWords: 70,
          maxWords: 180,
        },
        questions: [
          MCQ(
            "What does a strong TOPIC SENTENCE do?",
            [["a", "Ends the paragraph with a feeling"], ["b", "States what the paragraph is about"], ["c", "Gives one supporting example"]],
            "b",
            fb("States what the paragraph is about.", "The topic sentence announces the paragraph's one job.", "Feelings belong to the conclusion; examples are support."),
            { skill: "writing", difficulty: "easy" },
          ),
          MCQ(
            "Which email greeting + closing pair is correct for a teacher?",
            [["a", "Hey + See ya"], ["b", "Dear Ms Brown, + Best wishes,"], ["c", "To whom + xoxo"]],
            "b",
            fb("Dear Ms Brown, ... Best wishes,", "Formal-but-warm greeting with a neutral sign-off.", "Casual slang greetings are for close friends."),
            { skill: "writing", difficulty: "easy" },
          ),
          MCQ(
            "The politest request is:",
            [["a", "Give me that pen."], ["b", "Could I borrow your pen, please?"], ["c", "I want your pen."]],
            "b",
            fb("Could I borrow your pen, please?", "Could + please is the standard polite request frame.", "Imperatives and 'I want' sound demanding."),
            { skill: "speaking", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),
];
