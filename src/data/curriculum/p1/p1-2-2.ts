import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 2 · Lesson 2 — Reading Your First Words
 *
 * Reading CVC words with meaning, plus the first sight words (the, is, a, I)
 * that appear everywhere and are learned as whole words.
 */
export const p1_2_2: StructuredCourseLesson = {
  slug: "p1-2-2",
  title: "Reading Your First Words",
  subtitle: "Words with meaning",
  description:
    "Read your first words by blending — pen, cup, bag — and meet the four little words you see in every sentence: the, is, a and I.",
  minutes: 12,
  skills: ["reading", "listening", "speaking", "writing"],
  content: draftMeta([
    "st01-m04-u01-l02",
    "st01-m04-u02-l02",
    "st02-m01-u01-l03",
  ]),

  introduction:
    "Blending gave you the power to read words. Today you will use it! You will read words like pen, cup and bag — and you will know what they mean. You will also meet four very small words that live in every English sentence: the, is, a and I. Small words, big job.",

  objectives: [
    "You can read short words like pen, cup and bag by blending.",
    "You can read the sight words the, is, a and I.",
    "You can match a word you read to its meaning.",
  ],

  prerequisites: [
    { lessonSlug: "p1-2-1", label: "You can blend sounds into words (lesson 6)." },
    { lessonSlug: "p1-1-3", label: "You know the capital letter I (lesson 3)." },
  ],

  vocab: [
    {
      id: "p1-2-2-w1",
      term: "the",
      pos: "sight word",
      definition: "the word before a thing when we both know which thing it is",
      example: "The cat is on the mat.",
    },
    {
      id: "p1-2-2-w2",
      term: "is",
      pos: "sight word",
      definition: "the word that tells what something is",
      example: "The cup is red.",
    },
    {
      id: "p1-2-2-w3",
      term: "a",
      pos: "sight word",
      definition: "one; any one thing",
      example: "I have a pen.",
    },
    {
      id: "p1-2-2-w4",
      term: "I",
      pos: "sight word",
      definition: "the word for yourself — always a capital letter",
      example: "I am Sam.",
    },
    {
      id: "p1-2-2-w5",
      term: "to look",
      pos: "verb",
      definition: "to turn your eyes to something",
      example: "Look at the word and read it.",
    },
    {
      id: "p1-2-2-w6",
      term: "to know",
      pos: "verb",
      definition: "to have an idea or a word in your head",
      example: "I know this word! It is cup.",
    },
  ],

  concept: {
    definition: "Reading a word means saying it and knowing what it means. You read short words by blending, and you read small sight words like the, is, a and I by looking.",
    explanation: [
      "Blending gives you the sound of a word. But reading is sound plus meaning. When you read cup, you say /k/ /u/ /p/ and you picture a cup in your head. Both parts together make reading.",
      "Some words appear in almost every sentence: the, is, a and I. We call them sight words — you learn them by looking at them again and again, until you know them in one glance.",
      "Sight words are like the glue of English. Learn these four well: they will hold together almost everything you read in this course.",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — Read by blending",
      text: "Read these words by blending. Pen: /p/ /e/ /n/. Bag: /b/ /a/ /g/. Cup: /k/ /u/ /p/. Sun: /s/ /u/ /n/. Say each one out loud — your voice is part of the learning.",
      examples: ["You write with a pen.", "You carry things in a bag.", "You drink from a cup."],
    },
    {
      title: "Step 2 — Meet the sight words",
      text: "Now look at four little words: the, is, a, I. You cannot blend them — they are short and their sounds are shy. So we learn them by looking. See them, say them, and soon you will know them in one glance.",
      examples: ["Use the: the cat, the sun.", "Use is: the cup is red.", "Use a: a pen, a bag.", "Use I: I am Sam."],
    },
    {
      title: "Step 3 — Sound plus meaning",
      text: "A word is not finished until you know its meaning. Cup is a thing you drink from. Bed is a thing you sleep on. After you blend a word, always ask yourself: what does it mean?",
      examples: ["You drink from a cup.", "You sleep on a bed.", "You ride a bus to town."],
    },
    {
      title: "Step 4 — Read little phrases",
      text: "Words love company. Put two or three together: a cat. The dog. I sit. You can read these already! Blend the long words, glance at the sight words.",
      examples: ["a cat", "the dog", "I sit", "The sun is hot."],
    },
    {
      title: "Step 5 — Read with a purpose",
      text: "Reading is best when it tells you something. Read a word to find a thing. Read a label to find food. Every word you read in the real world makes the next word easier.",
      examples: ["Read BUS to find the bus.", "Read TEA to order a drink.", "Read the word, then look at the thing."],
    },
  ],

  exampleBank: {
    basic: [
      "You write with a pen.",
      "You drink from a cup.",
      "the cat",
      "I sit.",
    ],
    everyday: [
      "You read the word BUS at the bus stop.",
      "You read TEA and COFFEE at a café.",
      "You read OPEN on a shop door.",
      "I have a pen and a bag.",
    ],
    questions: [
      "What does the word 'cup' mean?",
      "Can you read this word: bed?",
      "Which sight word means 'yourself'?",
    ],
    negatives: [
      "A cup is not for writing.",
      "Bed and bad are not the same word.",
      "The word 'the' is not the name of a thing.",
    ],
    corrections: [
      {
        wrong: "Reading 'pen' letter by letter: 'pee, ee, en'.",
        right: "Read pen as one word: pen.",
        note: "Blend the sounds: /p/ /e/ /n/ → pen. Letter names are for spelling.",
      },
      {
        wrong: "I write the word for myself as a small i.",
        right: "I is always a capital letter.",
        note: "The word I — meaning you — is always big: I am Sam.",
      },
    ],
  },

  dialogue: {
    title: "Reading the menu",
    context: "Ana and Omar wait for tea at a café. Ana practises her new reading skill.",
    lines: [
      { speaker: "Ana", text: "Look, Omar! A menu. I can read some words." },
      { speaker: "Omar", text: "Read to me!" },
      { speaker: "Ana", text: "T-E-A… tea! And C-U-P… cup!" },
      { speaker: "Omar", text: "Tea in a cup! You are a reader, Ana." },
      { speaker: "Ana", text: "I am! The tea here is good." },
      { speaker: "Omar", text: "Yes. And I can read one word: cake!" },
    ],
  },

  realLife: {
    title: "Read the world",
    text: "Your new reading skill works outside the lesson. Menus, doors, buses and shops are full of small words. Every day, read one real word in the world. One word a day is 365 words a year!",
    examples: [
      "Read one word on a food box at home.",
      "Read the word on a bus or a taxi.",
      "Read OPEN or CLOSED on a shop door.",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-2-2");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "Which word means 'you write with it'?",
        ["pen", "cup", "bag"],
        0,
        "You write with a pen."
      ),
      t.mcq(
        "guided",
        "Read the word B-E-D. What does it mean?",
        ["A place to sleep", "A place to cook", "An animal"],
        0,
        "You sleep on a bed."
      ),
      t.fill(
        "guided",
        "You drink water from a ______.",
        ["cup"],
        "Blend the sounds: /k/ /u/ /p/."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "Which word comes before a thing when we BOTH know which thing it is?",
        ["the", "cup", "pen"],
        0,
        "The cat, the sun — 'the' points to a thing we both know."
      ),
      t.mcq(
        "independent",
        "Which sentence uses the word I correctly?",
        ["I am Sam.", "i am Sam.", "I is Sam."],
        0,
        "I is always a capital letter, and we say 'I am' (not 'I is')."
      ),
      t.match("independent", "Match each word with its meaning.", [
        { left: "pen", right: "you write with it" },
        { left: "cup", right: "you drink from it" },
        { left: "bed", right: "you sleep on it" },
      ]),

      /* 10 — speaking */
      t.speak("Read this word out loud: sun.", "sun"),

      /* 11 — listening */
      t.listenChoice("listening", "bed", "Listen carefully. Which word do you hear?", [
        "bed",
        "bad",
        "bud",
      ], 0),
      t.listenType("listening", "bag", "Listen to the word and type it.", ["bag"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. What can Sam do?",
        ["Read", "Sing", "Sleep"],
        0,
        "The story says: 'I can read.'"
      ),
      t.mcq(
        "reading",
        "Read the story. Where is the cat?",
        ["On the mat", "On the bed", "On the bus"],
        0,
        "The story says: 'The cat is on the mat.'"
      ),

      /* 13 — writing */
      t.write(
        "Blend /c/ /u/ /p/ and type the word.",
        "cup",
        "You drink from it."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "Reading a word means ______.",
        ["saying it AND knowing its meaning", "saying it very fast", "spelling it with letter names"],
        0,
        "Sound plus meaning — that is reading."
      ),
      t.mcq(
        "assessment",
        "The word 'a' means ______.",
        ["one; any one thing", "many things", "a person"],
        0,
        "A pen = one pen, any pen."
      ),
      t.fill(
        "assessment",
        "Complete: ______ am Sam.",
        ["i"],
        "The word for yourself — always a capital letter."
      ),
      t.mcq(
        "assessment",
        "Which are sight words — words you learn by looking?",
        ["the, is, a, I", "pen, cup, bag", "cat, dog, sun"],
        0,
        "The, is, a and I appear everywhere; we learn them as whole words."
      ),
    ];
  })(),

  passage: {
    title: "I can read!",
    text: "I am Sam. I can read! I read the word bus. I read the word cup. I read the words 'the cat'. The cat is on the mat. I look at a word and I know it. Reading is fun. I am a reader!",
  },

  commonMistakes: [
    {
      wrong: "Reading 'pen' letter by letter: 'pee, ee, en'.",
      right: "Read pen as one word: pen.",
      why: "Blend the sounds /p/ /e/ /n/ into one word. Letter names are for spelling aloud.",
    },
    {
      wrong: "Writing the word for yourself as a small i.",
      right: "I is always a capital letter.",
      why: "The word I — meaning you — is always big, even in the middle of a sentence.",
    },
  ],

  revision: {
    keyPoints: [
      "Reading = saying the word + knowing its meaning.",
      "Blend short words: pen, cup, bag, sun.",
      "Learn sight words by looking: the, is, a, I.",
      "Sight words appear in almost every sentence.",
    ],
    keyWords: ["the", "is", "a", "I", "to look", "to know"],
    selfCheck: [
      "Can you read pen, cup and bag without help?",
      "Can you say the four sight words in one second each?",
      "Can you read 'the cat is on the mat' out loud?",
    ],
  },

  homework: {
    tasks: [
      "Read these words out loud three times: pen, cup, bag, sun, bed.",
      "Write the four sight words three times each: the, is, a, I.",
      "Read one real word in the world today (on a door, a box or a bus).",
      "Read 'The cat is on the mat.' to a family member.",
    ],
  },
};
