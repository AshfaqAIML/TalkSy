import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 3 · Lesson 2 — Syllables
 *
 * A syllable is a beat in a word. Clapping and counting syllables:
 * cat (1), ta-ble (2), ba-na-na (3). Why it helps reading, spelling
 * and speaking.
 */
export const p1_3_2: StructuredCourseLesson = {
  slug: "p1-3-2",
  title: "Syllables",
  subtitle: "The beats inside words",
  description:
    "Every word has beats: cat has one, ta-ble has two, ba-na-na has three. Learn to clap the syllables — a secret tool for reading long words and speaking clearly.",
  minutes: 10,
  skills: ["listening", "speaking", "reading", "writing"],
  content: draftMeta(["st02-m01-u01-l02"]),

  introduction:
    "Clap with me: CLAP. That is one beat. Now clap this word: TA-BLE — two claps! You have just counted syllables. A syllable is a beat inside a word, and today you will learn to hear them, clap them and count them. This small skill makes big words friendly.",

  objectives: [
    "You can say what a syllable is.",
    "You can clap and count the syllables in a word.",
    "You can break a long word into syllable parts.",
  ],

  prerequisites: [
    { lessonSlug: "p1-1-4", label: "You know the vowels (lesson 4) — every syllable needs one." },
  ],

  vocab: [
    {
      id: "p1-3-2-w1",
      term: "syllable",
      pos: "noun",
      definition: "one beat in a word",
      example: "'Table' has two syllables: ta-ble.",
    },
    {
      id: "p1-3-2-w2",
      term: "beat",
      pos: "noun",
      definition: "one clap, one tap, one unit of rhythm",
      example: "Clap the beats of the word.",
    },
    {
      id: "p1-3-2-w3",
      term: "part",
      pos: "noun",
      definition: "one piece of a whole",
      example: "'Banana' has three parts: ba-na-na.",
    },
    {
      id: "p1-3-2-w4",
      term: "to clap",
      pos: "verb",
      definition: "to hit your hands together to make a sound",
      example: "Clap once for each syllable.",
    },
    {
      id: "p1-3-2-w5",
      term: "to count",
      pos: "verb",
      definition: "to say how many: one, two, three…",
      example: "Count the syllables: ba-na-na — three!",
    },
    {
      id: "p1-3-2-w6",
      term: "to break",
      pos: "verb",
      definition: "to divide into parts",
      example: "Break the word into syllables.",
    },
  ],

  concept: {
    definition: "A syllable is one beat in a word. Cat has one beat. Ta-ble has two beats. Ba-na-na has three beats.",
    explanation: [
      "Say a word slowly and clap every time your chin drops. Cat: one chin drop, one clap — one syllable. Ta-ble: two claps. Ba-na-na: three claps. Your chin is a syllable counter!",
      "Every syllable has a vowel sound inside it. That is why every word you learned in lesson 4 needs at least one vowel — one vowel per beat, at least.",
      "Syllables are a superpower for reading. A long word like banana looks scary — until you break it: ba… na… na. Three small, easy parts. Read the parts, join them, and you have read the word!",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — One-beat words",
      text: "Small words have one beat. Cat. Dog. Pen. Sun. Tea. Say each word and clap once. One word, one clap, one syllable.",
      examples: ["Cat: one clap.", "Dog: one clap.", "Pen: one clap."],
    },
    {
      title: "Step 2 — Two-beat words",
      text: "Now words with two beats. Say them slowly: TA-ble. MOR-ning. SIS-ter. PEN-cil. Clap twice for each one. Feel the rhythm!",
      examples: ["Ta-ble: two claps.", "Mor-ning: two claps.", "Sis-ter: two claps.", "Pen-cil: two claps."],
    },
    {
      title: "Step 3 — Three-beat words",
      text: "Ready for three? Ba-na-na! To-ma-to! Po-ta-to! Clap three times. These words almost sing themselves.",
      examples: ["Ba-na-na: three claps.", "To-ma-to: three claps.", "Po-ta-to: three claps."],
    },
    {
      title: "Step 4 — The chin-drop test",
      text: "How do you count syllables with any word? Put your hand under your chin and say the word slowly. Every time your chin drops, that is one syllable. Try it with your own name!",
      examples: [
        "Say 'morning' — your chin drops two times.",
        "Say 'banana' — your chin drops three times.",
      ],
    },
    {
      title: "Step 5 — Use syllables to read big words",
      text: "When a long word scares you, break it into syllables and read part by part. Win-ter. Sum-mer. Dol-phin. Each part is small and easy. Join the parts — you have read a big word!",
      examples: ["win-ter → winter", "sum-mer → summer", "dol-phin → dolphin"],
    },
  ],

  exampleBank: {
    basic: [
      "Cat has one syllable.",
      "Ta-ble has two syllables.",
      "Ba-na-na has three syllables.",
      "Every syllable has a vowel sound.",
    ],
    everyday: [
      "Good mor-ning — two beats in morning.",
      "I drink tea — tea has one beat.",
      "My sis-ter eats ba-na-nas.",
      "Break the word into parts and read it.",
    ],
    questions: [
      "How many syllables are in 'table'?",
      "Can you clap the parts of 'banana'?",
      "How many beats are in your name?",
    ],
    negatives: [
      "One syllable does not have two vowel sounds.",
      "'Cat' is not a two-syllable word.",
      "Syllables are not letters — they are beats.",
    ],
    corrections: [
      {
        wrong: "Ta-ble has one syllable.",
        right: "Ta-ble has two syllables.",
        note: "Clap it: TA (clap) BLE (clap) — two beats.",
      },
      {
        wrong: "Syllables are letters.",
        right: "Syllables are beats (sound parts), not letters.",
        note: "'Table' has 5 letters but only 2 syllables. Count beats, not letters.",
      },
    ],
  },

  dialogue: {
    title: "Clap the word",
    context: "Ms Reed plays a clapping game with Ana and Omar.",
    lines: [
      { speaker: "Ms Reed", text: "Clapping game! Clap the word 'table'." },
      { speaker: "Ana", text: "TA-BLE! (clap, clap) Two syllables!" },
      { speaker: "Ms Reed", text: "Perfect! Now 'banana'." },
      { speaker: "Omar", text: "BA-NA-NA! (clap, clap, clap) Three!" },
      { speaker: "Ms Reed", text: "Wonderful! Last one — 'cat'." },
      { speaker: "Ana", text: "CAT! (clap) One!" },
      { speaker: "Ms Reed", text: "You are syllable stars!" },
    ],
  },

  realLife: {
    title: "Syllables in songs and names",
    text: "Songs are made of syllables — every note carries one beat of a word. Names have beats too: Ma-ria (two), Mo-ham-med (two), Ma-ya (two). Today, clap your own name and the names of three people you know.",
    examples: [
      "Clap your own name. How many beats?",
      "Listen to a song. Hear the beats of the words.",
      "Clap 'good morning' — good (1) + mor-ning (2) = 3 claps.",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-3-2");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "A syllable is ______.",
        ["one beat in a word", "one letter", "one sentence"],
        0,
        "A syllable is a beat: ta-ble has two beats."
      ),
      t.mcq(
        "guided",
        "How many syllables are in 'cat'?",
        ["1", "2", "3"],
        0,
        "Cat — one clap, one syllable."
      ),
      t.fill(
        "guided",
        "Ta-ble has ______ syllables. (a number)",
        ["2", "two"],
        "Clap it: TA-BLE."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "How many syllables are in 'ba-na-na'?",
        ["3", "1", "2"],
        0,
        "Ba-na-na: three claps, three syllables."
      ),
      t.mcq(
        "independent",
        "Which word has TWO syllables?",
        ["morning", "dog", "pen"],
        0,
        "Mor-ning: two beats."
      ),
      t.match("independent", "Match each word with its number of syllables.", [
        { left: "pen", right: "1" },
        { left: "sister", right: "2" },
        { left: "tomato", right: "3" },
      ]),

      /* 10 — speaking */
      t.speak("Say the word 'banana' slowly, with a beat for each part.", "ba-na-na"),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "ta-ble",
        "Listen to the word in beats. Which word is it?",
        ["table", "cable", "able"],
        0
      ),
      t.listenType("listening", "mor-ning", "Listen to the word in beats and type it.", ["morning"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. How many syllables are in 'sister'?",
        ["2", "1", "3"],
        0,
        "The story says: sis-ter — two syllables."
      ),
      t.fill(
        "reading",
        "Read the story. Maya eats a ______ every day.",
        ["banana"],
        "A yellow fruit — three syllables!"
      ),

      /* 13 — writing */
      t.write(
        "Write the word 'morning' with a line between its two syllables.",
        "mor-ning",
        "Two beats: MOR and NING."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "Every syllable has a ______ sound inside it.",
        ["vowel", "capital", "silent"],
        0,
        "Each beat needs a vowel sound — that is why every word has a vowel."
      ),
      t.mcq(
        "assessment",
        "Which word has THREE syllables?",
        ["tomato", "table", "cat"],
        0,
        "To-ma-to: three claps."
      ),
      t.fill(
        "assessment",
        "Break this word into syllables with a line: pencil → pen-______",
        ["cil"],
        "PEN-CIL."
      ),
      t.mcq(
        "assessment",
        "Why do syllables help you read?",
        ["They break big words into small parts", "They make words longer", "They add capital letters"],
        0,
        "Big word → small parts → read each part → join them!"
      ),
    ];
  })(),

  passage: {
    title: "Maya's clapping game",
    text: "Maya loves the clapping game. She claps her name: MA-YA — two syllables! She claps her sister's name: SIS-TER — two syllables! She claps her breakfast: BA-NA-NA — three syllables! Maya says: 'Big words are just small parts. I break them and I read them!' Her sister smiles and claps too.",
  },

  commonMistakes: [
    {
      wrong: "Ta-ble has one syllable.",
      right: "Ta-ble has two syllables.",
      why: "Clap it: TA (one) BLE (two). Your chin drops two times.",
    },
    {
      wrong: "Syllables are letters.",
      right: "Syllables are beats, not letters.",
      why: "'Table' has 5 letters but only 2 syllables. Count the beats, not the letters.",
    },
  ],

  revision: {
    keyPoints: [
      "A syllable is one beat in a word.",
      "Count syllables by clapping or by chin drops.",
      "Cat: 1. Ta-ble: 2. Ba-na-na: 3.",
      "Every syllable has a vowel sound inside it.",
      "Break big words into syllables to read them part by part.",
    ],
    keyWords: ["syllable", "beat", "part", "to clap", "to count", "to break"],
    selfCheck: [
      "Can you clap the syllables of 'morning'?",
      "How many syllables are in your name?",
      "Can you break 'tomato' into its three parts?",
    ],
  },

  homework: {
    tasks: [
      "Clap your name and the names of three family members. Count the syllables.",
      "Write these words with lines between syllables: table, sister, banana.",
      "Find one long word on food packaging. Break it into syllables.",
      "Say 'good morning' with a clap for every syllable.",
    ],
  },
};
