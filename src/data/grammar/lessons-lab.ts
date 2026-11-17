import type { Lesson } from "@/data/curriculum/types";

/**
 * Sentence Construction Laboratory — the seven progressive stages.
 * Each stage: Learn → Practice → Challenge (timed or untimed) → Homework.
 */

export const labLessons: Lesson[] = [
  {
    slug: "lab-1-word-recognition",
    levelId: "grammar-core",
    unit: 3,
    title: "Sentence Lab · Stage 1: Word Recognition",
    description:
      "Before building sentences, learn to see their parts: subjects, verbs, objects and modifiers.",
    estimatedMinutes: 18,
    sections: [
      {
        id: "learn",
        title: "The four roles",
        blocks: [
          { type: "heading", text: "Every word has a job" },
          {
            type: "text",
            text: "A sentence is a team, and every word has a position on that team. Today you learn to spot the four key players — after this, sentence building becomes logical instead of magical.",
          },
          {
            type: "sentence-anatomy",
            title: "Study this sentence — click the words",
            sentence: {
              pattern: "S + V + O + M",
              tokens: [
                { text: "The", role: "determiner", note: "Points to which boy." },
                { text: "tall", role: "modifier", note: "MODIFIER — describes the subject." },
                { text: "boy", role: "subject", note: "SUBJECT — who does the action." },
                { text: "reads", role: "verb", note: "VERB — the action." },
                { text: "books", role: "object", note: "OBJECT — receives the action." },
                { text: "quietly", role: "modifier", note: "MODIFIER — how he reads." },
                { text: ".", role: "punctuation" },
              ],
            },
          },
          {
            type: "grammar-rule",
            title: "How to find each role",
            rule: "Subject = who/what does it (ask WHO?) · Verb = the action (ask WHAT DO THEY DO?) · Object = what receives it (ask WHAT?) · Modifier = describing words (what kind? how? when?).",
            examples: [
              { english: "The busy bee makes honey.", translation: "La abeja ocupada hace miel." },
              { english: "Who? the bee · Does what? makes · What? honey · Describing: busy", translation: "Sujeto, verbo, objeto, modificador." },
            ],
          },
        ],
      },
      {
        id: "practice",
        title: "Practice",
        blocks: [
          {
            type: "practice",
            title: "Recognise the roles",
            exerciseIds: ["lab1-1-dd", "lab1-2-mcq", "lab1-3-match", "lab1-b1-mcq"],
          },
        ],
      },
      {
        id: "challenge",
        title: "Challenge",
        blocks: [
          {
            type: "challenge",
            title: "Word-recognition challenge",
            description:
              "Untimed accuracy round — take your time and get them all right. Accuracy beats speed here!",
            exerciseIds: ["lab1-b2-dd", "lab1-2-mcq", "lab1-1-dd"],
            timed: false,
          },
          {
            type: "homework",
            title: "Homework",
            tasks: [
              "Take any sentence from a song and label its subject, verb and object.",
              "Write one sentence of your own and colour-code it on paper.",
            ],
          },
        ],
      },
    ],
    summary: {
      keyPoints: [
        "Subject = who/what does the action.",
        "Verb = the action itself.",
        "Object = what receives the action.",
        "Modifier = words that describe (adjectives, adverbs, time expressions).",
      ],
      vocabulary: ["subject", "verb", "object", "modifier", "role"],
    },
    assessment: {
      questionCount: 5,
      passScore: 0.7,
      bank: [
        "lab1-1-dd",
        "lab1-2-mcq",
        "lab1-3-match",
        "lab1-b1-mcq",
        "lab1-b2-dd",
      ],
    },
  },
  {
    slug: "lab-2-basic-structure",
    levelId: "grammar-core",
    unit: 3,
    title: "Sentence Lab · Stage 2: Basic Structure",
    description:
      "Build your first sentences from word tiles: S+V, S+V+O and S+V+C.",
    estimatedMinutes: 20,
    sections: [
      {
        id: "learn",
        title: "Three patterns",
        blocks: [
          { type: "heading", text: "The three starter patterns" },
          {
            type: "text",
            text: "Almost every English sentence grows from one of three skeletons. Learn them as patterns, then hang words on them.",
          },
          {
            type: "sentence-anatomy",
            title: "Pattern 1 — S + V (the minimum)",
            sentence: {
              pattern: "S + V",
              tokens: [
                { text: "Birds", role: "subject", note: "Who?" },
                { text: "fly", role: "verb", note: "What do they do? Complete!" },
                { text: ".", role: "punctuation" },
              ],
            },
          },
          {
            type: "sentence-anatomy",
            title: "Pattern 2 — S + V + O",
            sentence: {
              pattern: "S + V + O",
              tokens: [
                { text: "Sara", role: "subject", note: "Who?" },
                { text: "reads", role: "verb", note: "Does what? (+s because Sara = she)" },
                { text: "books", role: "object", note: "Reads WHAT?" },
                { text: ".", role: "punctuation" },
              ],
            },
          },
          {
            type: "sentence-anatomy",
            title: "Pattern 3 — S + V + C",
            sentence: {
              pattern: "S + V + C",
              tokens: [
                { text: "The", role: "determiner" },
                { text: "soup", role: "subject" },
                { text: "is", role: "verb", note: "Linking verb — not an action!" },
                { text: "hot", role: "complement", note: "COMPLEMENT — describes the subject." },
                { text: ".", role: "punctuation" },
              ],
            },
          },
          {
            type: "warning",
            title: "Object vs. complement",
            text: "'Sara reads books' — books receive an action (object). 'The soup is hot' — hot DESCRIBES the soup (complement). If the verb is be/seem/become, what follows is a complement.",
          },
        ],
      },
      {
        id: "practice",
        title: "Practice",
        blocks: [
          {
            type: "practice",
            title: "Build the patterns",
            exerciseIds: ["lab2-1-sb", "lab2-2-sb", "lab2-3-sb", "lab2-4-mcq"],
          },
        ],
      },
      {
        id: "challenge",
        title: "Challenge",
        blocks: [
          {
            type: "challenge",
            title: "Structure sprint",
            description:
              "A timed round — but remember: accuracy is what counts. Read carefully, then build!",
            exerciseIds: ["lab2-b1-mcq", "lab2-b2-sb", "lab2-2-sb"],
            timed: true,
            seconds: 120,
          },
          {
            type: "homework",
            title: "Homework",
            tasks: [
              "Write three S+V sentences about animals.",
              "Write three S+V+O sentences about your day.",
              "Write three S+V+C sentences describing your mood this week.",
            ],
          },
        ],
      },
    ],
    summary: {
      keyPoints: [
        "S + V is a complete sentence: 'Birds fly.'",
        "S + V + O adds what receives the action: 'Sara reads books.'",
        "S + V + C uses a linking verb + a describing word: 'The soup is hot.'",
        "he/she/it subjects take verb-s: 'Sara reads.'",
      ],
      vocabulary: ["pattern", "S+V", "S+V+O", "S+V+C", "linking verb", "complement"],
    },
    assessment: {
      questionCount: 5,
      passScore: 0.7,
      bank: [
        "lab2-1-sb",
        "lab2-2-sb",
        "lab2-3-sb",
        "lab2-4-mcq",
        "lab2-b1-mcq",
        "lab2-b2-sb",
      ],
    },
  },
  {
    slug: "lab-3-sentence-types",
    levelId: "grammar-core",
    unit: 3,
    title: "Sentence Lab · Stage 3: Sentence Types",
    description:
      "Statements, questions, commands and exclamations — the four moods of a sentence.",
    estimatedMinutes: 18,
    sections: [
      {
        id: "learn",
        title: "The four types",
        blocks: [
          { type: "heading", text: "Why are you saying this?" },
          {
            type: "text",
            text: "Every sentence has a PURPOSE: to state, to ask, to command or to exclaim. The type changes the structure — especially word order in questions.",
          },
          {
            type: "table",
            title: "The four sentence types",
            headers: ["Type", "Job", "Example", "Ends with"],
            rows: [
              ["Declarative", "states a fact or opinion", "She works here.", "."],
              ["Interrogative", "asks a question", "Do you like tea?", "?"],
              ["Imperative", "gives a command/request", "Please sit down.", "./!"],
              ["Exclamatory", "expresses strong feeling", "What a goal!", "!"],
            ],
          },
          {
            type: "sentence-anatomy",
            title: "Inside a yes/no question — inversion!",
            sentence: {
              pattern: "Aux + S + V + O?",
              tokens: [
                { text: "Do", role: "auxiliary", note: "The helper VERB jumps to the front." },
                { text: "you", role: "subject", note: "…the subject moves back." },
                { text: "like", role: "verb", note: "Base verb after 'do'." },
                { text: "coffee", role: "object" },
                { text: "?", role: "punctuation", note: "Questions end with '?'." },
              ],
            },
          },
          {
            type: "note",
            title: "Imperatives hide their subject",
            text: "'Close the door' really means '(You) close the door' — the subject 'you' is understood, so the sentence starts with the verb.",
          },
        ],
      },
      {
        id: "practice",
        title: "Practice",
        blocks: [
          {
            type: "practice",
            title: "Recognise and build the types",
            exerciseIds: ["lab3-1-mcq", "lab3-2-mcq", "lab3-3-sb", "lab3-4-ra"],
          },
        ],
      },
      {
        id: "challenge",
        title: "Challenge",
        blocks: [
          {
            type: "challenge",
            title: "Type match-up",
            description: "Untimed round — sort, identify and build all four types.",
            exerciseIds: ["lab3-b1-match", "lab3-b2-mcq", "lab3-1-mcq"],
            timed: false,
          },
          {
            type: "homework",
            title: "Homework",
            tasks: [
              "Write one sentence of each type about your breakfast.",
              "Turn three statements into questions (inversion!).",
              "Exclaim about something amazing that happened today: 'What …!'",
            ],
          },
        ],
      },
    ],
    summary: {
      keyPoints: [
        "Declarative states, interrogative asks, imperative commands, exclamatory exclaims.",
        "Yes/no questions invert: Do + you + like…?",
        "Imperatives hide the subject 'you': 'Close the door.'",
        "Exclamatory: What + a/an + adj + noun + subject + verb + !",
      ],
      vocabulary: ["declarative", "interrogative", "imperative", "exclamatory", "inversion"],
    },
    assessment: {
      questionCount: 5,
      passScore: 0.7,
      bank: [
        "lab3-1-mcq",
        "lab3-2-mcq",
        "lab3-3-sb",
        "lab3-4-ra",
        "lab3-b1-match",
        "lab3-b2-mcq",
      ],
    },
  },
  {
    slug: "lab-4-polarity",
    levelId: "grammar-core",
    unit: 3,
    title: "Sentence Lab · Stage 4: Sentence Polarity",
    description:
      "Flip sentences: affirmative ↔ negative, statement ↔ question.",
    estimatedMinutes: 20,
    sections: [
      {
        id: "learn",
        title: "Flipping polarity",
        blocks: [
          { type: "heading", text: "The polarity switchboard" },
          {
            type: "text",
            text: "Negating and questioning are mechanical operations — once you know the rules, you can flip any sentence in both directions.",
          },
          {
            type: "grammar-rule",
            title: "Negatives",
            rule: "With BE: add 'not' after the verb (She isn't tired). With other verbs: don't/doesn't/didn't + base verb (She doesn't work).",
            examples: [
              { english: "You are ready. → You aren't ready.", translation: "No estás listo." },
              { english: "I like fish. → I don't like fish.", translation: "No me gusta el pescado." },
            ],
          },
          {
            type: "grammar-rule",
            title: "Questions",
            rule: "With BE: swap verb and subject (Are you ready?). With other verbs: Do/Does/Did + subject + base verb (Do you like tea?).",
            examples: [
              { english: "You are ready. → Are you ready?", translation: "¿Estás listo?" },
              { english: "She works here. → Does she work here?", translation: "¿Trabaja aquí?" },
            ],
          },
          {
            type: "sentence-anatomy",
            title: "Inside a negative with 'be'",
            sentence: {
              pattern: "S + be + not + C",
              tokens: [
                { text: "She", role: "subject" },
                { text: "is", role: "verb" },
                { text: "not", role: "negation", note: "'not' goes right after 'be'." },
                { text: "a", role: "determiner" },
                { text: "doctor", role: "complement" },
                { text: ".", role: "punctuation" },
              ],
            },
          },
        ],
      },
      {
        id: "practice",
        title: "Practice",
        blocks: [
          {
            type: "practice",
            title: "Flip the sentences",
            exerciseIds: ["lab4-1-sb", "lab4-2-sb", "lab4-3-sb", "lab4-4-cm"],
          },
        ],
      },
      {
        id: "challenge",
        title: "Challenge",
        blocks: [
          {
            type: "challenge",
            title: "Polarity flip — timed",
            description: "Timed round! But accuracy is still the score — flip carefully.",
            exerciseIds: ["lab4-b1-mcq", "lab4-b2-fb", "lab4-1-sb"],
            timed: true,
            seconds: 150,
          },
          {
            type: "homework",
            title: "Homework",
            tasks: [
              "Write five things you do like and five you DON'T like (I don't like…).",
              "Ask five questions to a friend with do/does.",
              "Take one statement and flip it three ways: negative, question, negative question.",
            ],
          },
        ],
      },
    ],
    summary: {
      keyPoints: [
        "With 'be': not goes after the verb; questions swap verb + subject.",
        "With other verbs: use do/does/did + base verb for negatives and questions.",
        "'is not' = 'isn't', 'do not' = 'don't'.",
        "Never double the past: 'Did you go', not 'Did you went'.",
      ],
      vocabulary: ["affirmative", "negative", "polarity", "do-support", "inversion", "contraction"],
    },
    assessment: {
      questionCount: 5,
      passScore: 0.7,
      bank: [
        "lab4-1-sb",
        "lab4-2-sb",
        "lab4-3-sb",
        "lab4-4-cm",
        "lab4-b1-mcq",
        "lab4-b2-fb",
      ],
    },
  },
  {
    slug: "lab-5-expansion",
    levelId: "grammar-core",
    unit: 3,
    title: "Sentence Lab · Stage 5: Sentence Expansion",
    description:
      "Watch 'I read.' grow into 'I read an interesting book every evening.' — one step at a time.",
    estimatedMinutes: 18,
    sections: [
      {
        id: "learn",
        title: "Growing sentences",
        blocks: [
          { type: "heading", text: "From seed to tree" },
          {
            type: "text",
            text: "You don't write a rich sentence in one jump — you grow it. Start with a seed (subject + verb) and add one layer at a time: an object, then a describing word, then a time expression.",
          },
          {
            type: "example",
            title: "The famous expansion",
            items: [
              { english: "I read.", translation: "Leo." },
              { english: "I read a book.", translation: "Leo un libro." },
              { english: "I read an interesting book.", translation: "Leo un libro interesante." },
              { english: "I read an interesting book every evening.", translation: "Leo un libro interesante cada tarde." },
            ],
            note: "Each step adds ONE idea: what → what kind → when.",
          },
          {
            type: "sentence-anatomy",
            title: "The full tree, colour-coded",
            sentence: {
              pattern: "S + V + det + adj + O + time",
              tokens: [
                { text: "I", role: "subject" },
                { text: "read", role: "verb" },
                { text: "an", role: "determiner", note: "Layer 1: the object's article." },
                { text: "interesting", role: "modifier", note: "Layer 2: the adjective." },
                { text: "book", role: "object", note: "Layer 1: the object." },
                { text: "every", role: "determiner" },
                { text: "evening", role: "modifier", note: "Layer 3: the time expression." },
                { text: ".", role: "punctuation" },
              ],
            },
          },
        ],
      },
      {
        id: "practice",
        title: "Practice",
        blocks: [
          {
            type: "practice",
            title: "Grow the sentence",
            exerciseIds: ["lab5-1-sb", "lab5-2-sb", "lab5-3-sb", "lab5-4-mcq"],
          },
        ],
      },
      {
        id: "challenge",
        title: "Challenge",
        blocks: [
          {
            type: "challenge",
            title: "Expansion challenge",
            description: "Untimed — grow your sentences layer by layer, perfectly.",
            exerciseIds: ["lab5-b1-sb", "lab5-b2-mcq", "lab5-2-sb"],
            timed: false,
          },
          {
            type: "homework",
            title: "Homework",
            tasks: [
              "Grow 'She sings.' in three steps like the lesson example.",
              "Grow 'I play.' with an object, an adjective and a time expression.",
              "Find one long sentence in a book and shrink it back to its seed (S+V).",
            ],
          },
        ],
      },
    ],
    summary: {
      keyPoints: [
        "Grow sentences one layer at a time: object → adjective → time.",
        "Adjectives go between article and noun: an interesting book.",
        "Time expressions often go at the end: every evening.",
        "'Every' takes a singular noun: every day (not every days).",
      ],
      vocabulary: ["expand", "layer", "object", "adjective", "time expression", "every"],
    },
    assessment: {
      questionCount: 5,
      passScore: 0.7,
      bank: [
        "lab5-1-sb",
        "lab5-2-sb",
        "lab5-3-sb",
        "lab5-4-mcq",
        "lab5-b1-sb",
        "lab5-b2-mcq",
      ],
    },
  },
  {
    slug: "lab-6-combination",
    levelId: "grammar-core",
    unit: 3,
    title: "Sentence Lab · Stage 6: Sentence Combination",
    description:
      "Join short sentences with and, but, so, because, although — and say goodbye to choppy English.",
    estimatedMinutes: 18,
    sections: [
      {
        id: "learn",
        title: "Building bridges",
        blocks: [
          { type: "heading", text: "Two ideas, one sentence" },
          {
            type: "text",
            text: "Short sentences are correct but choppy: 'I was tired. I went to bed.' Combination joins them logically — and the conjunction you choose IS the logic.",
          },
          {
            type: "table",
            title: "Choose your bridge",
            headers: ["Conjunction", "Logic", "Example"],
            rows: [
              ["and", "addition", "I like tea and coffee."],
              ["but", "contrast", "I called her, but she didn't answer."],
              ["so", "result", "It was late, so we took a taxi."],
              ["because", "reason", "We stayed in because it was cold."],
              ["although", "surprising contrast", "Although it rained, we walked home."],
            ],
          },
          {
            type: "warning",
            title: "One conjunction only!",
            text: "'Because I was tired, so I slept' uses TWO connectors for one link. Choose because OR so — never both.",
          },
          {
            type: "sentence-anatomy",
            title: "A compound sentence, dissected",
            sentence: {
              pattern: "S + V + O + , + but + S + V",
              tokens: [
                { text: "I", role: "subject", note: "Clause 1 subject." },
                { text: "called", role: "verb" },
                { text: "her", role: "object" },
                { text: ",", role: "punctuation", note: "Comma before the conjunction." },
                { text: "but", role: "conjunction", note: "Contrast bridge." },
                { text: "she", role: "subject", note: "Clause 2 needs its own subject + verb." },
                { text: "didn't", role: "auxiliary", note: "did + not." },
                { text: "answer", role: "verb" },
                { text: ".", role: "punctuation" },
              ],
            },
          },
        ],
      },
      {
        id: "practice",
        title: "Practice",
        blocks: [
          {
            type: "practice",
            title: "Combine!",
            exerciseIds: ["lab6-1-fb", "lab6-2-sb", "lab6-3-mcq", "lab6-4-cs"],
          },
        ],
      },
      {
        id: "challenge",
        title: "Challenge",
        blocks: [
          {
            type: "challenge",
            title: "Bridge builder",
            description: "Untimed — choose the perfect conjunction each time.",
            exerciseIds: ["lab6-b1-mcq", "lab6-b2-fb", "lab6-1-fb"],
            timed: false,
          },
          {
            type: "homework",
            title: "Homework",
            tasks: [
              "Combine five pairs of short sentences from your own writing.",
              "Write one sentence with 'although' about your week.",
              "Explain the difference between 'so' and 'because' to a friend.",
            ],
          },
        ],
      },
    ],
    summary: {
      keyPoints: [
        "and = addition, but = contrast, so = result, because = reason, although = surprising contrast.",
        "Compound: clause + , + and/but/so + clause.",
        "Complex: because/although + clause + , + main clause.",
        "Use ONE conjunction per link — never 'because…, so…'.",
      ],
      vocabulary: ["combine", "conjunction", "compound", "complex", "clause", "bridge"],
    },
    assessment: {
      questionCount: 5,
      passScore: 0.7,
      bank: [
        "lab6-1-fb",
        "lab6-2-sb",
        "lab6-3-mcq",
        "lab6-4-cs",
        "lab6-b1-mcq",
        "lab6-b2-fb",
      ],
    },
  },
  {
    slug: "lab-7-transformation",
    levelId: "grammar-core",
    unit: 3,
    title: "Sentence Lab · Stage 7: Sentence Transformation",
    description:
      "The master stage: simple/compound/complex, active/passive, direct/indirect speech and tense shifts.",
    estimatedMinutes: 25,
    sections: [
      {
        id: "structure-types",
        title: "Simple, compound & complex",
        blocks: [
          { type: "heading", text: "Three levels of sentence architecture" },
          {
            type: "table",
            title: "The three structures",
            headers: ["Structure", "Contains", "Example"],
            rows: [
              ["Simple", "1 clause", "I studied all night."],
              ["Compound", "2 equal clauses + and/but/so", "I studied, and I passed."],
              ["Complex", "main + because/although clause", "Although I was tired, I studied."],
            ],
          },
          {
            type: "sentence-anatomy",
            title: "A complex sentence, dissected",
            sentence: {
              pattern: "although-clause + , + main clause",
              tokens: [
                { text: "Although", role: "conjunction", note: "Starts the DEPENDENT clause." },
                { text: "she", role: "subject" },
                { text: "was", role: "verb" },
                { text: "busy", role: "complement" },
                { text: ",", role: "punctuation", note: "Comma after the fronted clause." },
                { text: "she", role: "subject", note: "Main clause begins." },
                { text: "helped", role: "verb" },
                { text: "me", role: "object" },
                { text: ".", role: "punctuation" },
              ],
            },
          },
        ],
      },
      {
        id: "voice-and-speech",
        title: "Active/passive & direct/indirect speech",
        blocks: [
          { type: "heading", text: "Changing perspective" },
          {
            type: "grammar-rule",
            title: "Active → passive",
            rule: "Object moves to the front + be (same tense) + past participle + by + doer: 'Tom wrote the letter' → 'The letter was written by Tom.'",
            examples: [
              { english: "The boys broke the window.", translation: "Los niños rompieron la ventana." },
              { english: "→ The window was broken by the boys.", translation: "→ La ventana fue rota por los niños." },
            ],
          },
          {
            type: "grammar-rule",
            title: "Direct → indirect speech",
            rule: "said + that + pronoun shift (I→he/she) + tense shift back (am→was, like→liked): 'I am tired,' he said → He said (that) he was tired.",
            examples: [
              { english: "\"I am happy,\" she said.", translation: "—Estoy contenta —dijo." },
              { english: "→ She said she was happy.", translation: "→ Dijo que estaba contenta." },
            ],
          },
          {
            type: "grammar-rule",
            title: "Tense transformations",
            rule: "Tense must match time expressions: yesterday → past simple; every day → present simple; tomorrow → will.",
            examples: [
              { english: "I go to Paris last year. → I went to Paris last year.", translation: "Fui a París el año pasado." },
            ],
          },
        ],
      },
      {
        id: "practice-and-challenge",
        title: "Practice & challenge",
        blocks: [
          {
            type: "practice",
            title: "Transform!",
            exerciseIds: ["lab7-1-sb", "lab7-2-cs", "lab7-3-mcq", "lab7-4-cm", "lab7-5-mcq"],
          },
          {
            type: "challenge",
            title: "Master transformer — timed",
            description:
              "The final challenge: a timed transformation round. Accuracy first — the timer is just excitement!",
            exerciseIds: ["lab7-b1-mcq", "lab7-b2-sb", "lab7-b3-cm"],
            timed: true,
            seconds: 180,
          },
          {
            type: "homework",
            title: "Homework",
            tasks: [
              "Transform three active sentences into the passive.",
              "Report three things a friend said today (He said he…).",
              "Write one simple, one compound and one complex sentence about your weekend.",
            ],
          },
        ],
      },
    ],
    summary: {
      keyPoints: [
        "Simple = 1 clause; compound = 2 equal clauses; complex = main + dependent.",
        "Passive = object + be (same tense) + past participle + by + doer.",
        "Indirect speech shifts pronouns and tenses back (am→was).",
        "Tense must always match its time expression.",
      ],
      vocabulary: ["transformation", "active", "passive", "direct speech", "indirect speech", "clause", "participle"],
    },
    assessment: {
      questionCount: 5,
      passScore: 0.7,
      bank: [
        "lab7-1-sb",
        "lab7-2-cs",
        "lab7-3-mcq",
        "lab7-4-cm",
        "lab7-5-mcq",
        "lab7-b1-mcq",
        "lab7-b2-sb",
        "lab7-b3-cm",
      ],
    },
  },
];
