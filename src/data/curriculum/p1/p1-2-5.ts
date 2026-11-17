import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 2 · Lesson 5 — Word Meaning
 *
 * What "meaning" is, how to ask for it (What does X mean?), how to learn it
 * (object, picture, example, translation), and a first gentle look at words
 * with two meanings (play).
 */
export const p1_2_5: StructuredCourseLesson = {
  slug: "p1-2-5",
  title: "Word Meaning",
  subtitle: "What a word really says",
  description:
    "Every word carries an idea. Learn what meaning is, how to ask 'What does it mean?', and the four best ways to lock a new word into your memory.",
  minutes: 10,
  skills: ["reading", "listening", "speaking", "writing"],
  content: draftMeta([
    "st02-m01-u01-l01",
    "st02-m02-u02-l04",
  ]),

  introduction:
    "You know many words now — but what IS a word's meaning? And how do you catch a new word and make it yours? Today you will learn the skill behind all vocabulary learning. Master this lesson, and every future word becomes easier.",

  objectives: [
    "You can say what the meaning of a word is.",
    "You can ask 'What does it mean?' when you do not know a word.",
    "You can use four ways to learn a new word's meaning.",
  ],

  prerequisites: [
    { lessonSlug: "p1-2-4", label: "You know words in categories (lesson 9)." },
  ],

  vocab: [
    {
      id: "p1-2-5-w1",
      term: "meaning",
      pos: "noun",
      definition: "the idea a word carries",
      example: "The meaning of cup is 'a thing you drink from'.",
    },
    {
      id: "p1-2-5-w2",
      term: "to mean",
      pos: "verb",
      definition: "to carry an idea; to be about something",
      example: "What does this word mean?",
    },
    {
      id: "p1-2-5-w3",
      term: "idea",
      pos: "noun",
      definition: "a thought in your head",
      example: "The word sun gives you the idea of a hot yellow ball in the sky.",
    },
    {
      id: "p1-2-5-w4",
      term: "to ask",
      pos: "verb",
      definition: "to say a question to someone",
      example: "Ask your teacher about new words.",
    },
    {
      id: "p1-2-5-w5",
      term: "to remember",
      pos: "verb",
      definition: "to keep an idea in your head",
      example: "I remember this word! It is bread.",
    },
    {
      id: "p1-2-5-w6",
      term: "for example",
      pos: "phrase",
      definition: "words you say before giving an example",
      example: "I eat bread — for example, bread with eggs.",
    },
  ],

  concept: {
    definition: "The meaning of a word is the idea it carries. When you hear or read a word, the meaning appears in your head like a picture.",
    explanation: [
      "Say the word sun. Close your eyes. Do you see a bright yellow ball in a blue sky? That picture is the meaning. Words are sounds and marks on paper — the meaning is the idea they wake up inside you.",
      "Sometimes you meet a word and no picture appears. Then you simply ask: 'What does it mean?' or 'What is this word?' Asking is the fastest way to learn.",
      "A few words carry two ideas. The word play can mean a game (children play in the park) or music (music plays on the radio). The sentence around the word tells you which meaning is right.",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — Words carry ideas",
      text: "Every word is a box with an idea inside. Cup → a thing you drink from. Dog → an animal that says woof. Sun → the hot yellow ball in the sky. Hear the word, open the box, see the idea.",
      examples: [
        "A cup is a thing you drink from.",
        "A dog is an animal that says woof.",
        "The sun is the hot yellow ball in the sky.",
      ],
    },
    {
      title: "Step 2 — Ask for meanings politely",
      text: "When a word is new, do not stay lost — ask! 'What does it mean?' 'Sorry, what is this word?' People love to help. Asking is a learning superpower, not a weakness.",
      examples: [
        "Sorry, what does 'bread' mean?",
        "What does this word mean, please?",
        "Excuse me, what is this?",
      ],
    },
    {
      title: "Step 3 — Four ways to catch a meaning",
      text: "There are four good ways. 1. See the real thing (point at bread). 2. See a picture. 3. Read an example sentence. 4. Use a translation if you have one. Use all four — they are stronger together.",
      examples: [
        "See it: this is bread.",
        "Picture it: a photo of bread.",
        "Example: I eat bread and eggs.",
        "Translation: bread means 'pan' in Spanish, 'brot' in German.",
      ],
    },
    {
      title: "Step 4 — Use a word to keep it",
      text: "A word you never use slowly walks out of your memory. A word you USE moves in forever. Say it in a sentence: 'I eat bread.' Write it once. Use it at dinner tonight.",
      examples: ["I eat bread with eggs.", "The bread is on the table.", "I like bread and milk."],
    },
    {
      title: "Step 5 — One word, two meanings",
      text: "Some words carry two ideas — the sentence tells you which one. 'The children play in the park' — play means a game. 'Music plays' — play means sound. Do not panic when this happens; look at the words around it.",
      examples: [
        "The children play in the park. (game)",
        "Music plays on the radio. (sound)",
      ],
    },
  ],

  exampleBank: {
    basic: [
      "The meaning of cup is 'a thing you drink from'.",
      "The meaning of red is a colour.",
      "Bread means food.",
      "What does it mean?",
    ],
    everyday: [
      "Sorry, what does this word mean?",
      "I like bread — for example, bread with butter.",
      "Ask your teacher: 'What does it mean?'",
      "I remember! The word is milk.",
    ],
    questions: [
      "What does 'bread' mean?",
      "What is the meaning of this word?",
      "Can you give me an example?",
    ],
    negatives: [
      "The meaning of dog is not 'a colour'.",
      "A word is not just letters — it carries an idea.",
      "'What means this?' is not correct English — say 'What does this mean?'",
    ],
    corrections: [
      {
        wrong: "What means this word?",
        right: "What does this word mean?",
        note: "English questions use do/does: What does it mean?",
      },
      {
        wrong: "Learning a word = seeing it one time.",
        right: "Learning a word = seeing it, saying it, and using it many times.",
        note: "Meanings stick when you USE the word in sentences.",
      },
    ],
  },

  dialogue: {
    title: "What does it mean?",
    context: "Omar reads a menu and finds a word he does not know. He asks Ana.",
    lines: [
      { speaker: "Omar", text: "Ana, look at this word: 'tea'. What does it mean?" },
      { speaker: "Ana", text: "Tea? It is a hot drink. Brown, in a cup." },
      { speaker: "Omar", text: "Ah, like coffee but different!" },
      { speaker: "Ana", text: "Yes! For example: 'A tea, please.'" },
      { speaker: "Omar", text: "I remember now. Tea — a hot drink." },
      { speaker: "Ana", text: "Perfect. Now you know the word AND the meaning." },
    ],
  },

  realLife: {
    title: "Become a word catcher",
    text: "Today, catch one new English word in the wild — on a sign, in a song, on a box. Ask what it means. Say it three times. Use it in one sentence tonight. That is how vocabulary grows: one word, well caught, every day.",
    examples: [
      "Find one new English word today.",
      "Ask someone: 'What does it mean?'",
      "Use your new word in one sentence before dinner.",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-2-5");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "The meaning of a word is ______.",
        ["the idea it carries", "its colour", "its number of letters"],
        0,
        "Words carry ideas — that idea is the meaning."
      ),
      t.mcq(
        "guided",
        "You do not know the word 'milk'. What do you ask?",
        ["What does milk mean?", "Where is milk number?", "How milk is letter?"],
        0,
        "Ask: 'What does it mean?' — with does."
      ),
      t.fill(
        "guided",
        "The meaning of 'dog' is an ______ that says woof.",
        ["animal"],
        "Cat, dog, bird, fish — this category."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "Which sentence uses 'for example' correctly?",
        ["I eat bread — for example, bread and eggs.", "For example I bread eat.", "Bread for example is example."],
        0,
        "Say 'for example', then give the example."
      ),
      t.mcq(
        "independent",
        "The children play in the park. What does 'play' mean here?",
        ["A game", "Music on the radio", "A colour"],
        0,
        "Children play games — the words around 'play' tell you the meaning."
      ),
      t.match("independent", "Match each word with its meaning.", [
        { left: "cup", right: "a thing you drink from" },
        { left: "sun", right: "the hot yellow ball in the sky" },
        { left: "bread", right: "food you eat, often at breakfast" },
      ]),

      /* 10 — speaking */
      t.speak("Ask your teacher about a new word.", "What does it mean?"),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "What does it mean?",
        "Listen. What do you hear?",
        ["What does it mean?", "Where is the bus?", "How are you?"],
        0
      ),
      t.listenType("listening", "The meaning of bread is food.", "Listen and type the word 'bread'.", ["bread"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. What does 'juice' mean in the story?",
        ["A drink made from fruit", "A colour", "An animal"],
        0,
        "The story says: 'Juice is a drink from fruit — for example, orange juice.'"
      ),
      t.fill(
        "reading",
        "Read the story. Ana catches one new word every ______.",
        ["day"],
        "One word every day!"
      ),

      /* 13 — writing */
      t.write(
        "Write one sentence with the word 'bread'.",
        "I eat bread and eggs for breakfast.",
        "Use bread in any true sentence about you."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "A word's meaning is the ______ it carries.",
        ["idea", "sound", "colour"],
        0,
        "Sound and letters carry the idea — the idea is the meaning."
      ),
      t.mcq(
        "assessment",
        "Which question is correct?",
        ["What does this word mean?", "What means this word?", "What this word mean?"],
        0,
        "English questions with 'what' use do/does: What does it mean?"
      ),
      t.fill(
        "assessment",
        "You see a new word. Ask your teacher: '______ does it mean?'",
        ["what"],
        "The question word for ideas and things."
      ),
      t.mcq(
        "assessment",
        "Which is the BEST way to remember a new word?",
        ["Use it in a sentence", "See it once and close the book", "Say it very quietly"],
        0,
        "Words you USE stay. Words you only see walk away."
      ),
    ];
  })(),

  passage: {
    title: "Ana catches a new word",
    text: "Ana catches one new English word every day. Today she sees the word 'juice' on a bottle. She asks her teacher: 'What does juice mean?' The teacher says: 'Juice is a drink from fruit — for example, orange juice.' Ana says the word three times. She uses it at dinner: 'I drink juice.' Now Ana knows the word and the meaning. Tomorrow she will catch a new word!",
  },

  commonMistakes: [
    {
      wrong: "What means this word?",
      right: "What does this word mean?",
      why: "English questions with 'what' need do/does: What does it mean?",
    },
    {
      wrong: "Learning a word means seeing it one time.",
      right: "Learning a word means seeing it, saying it and using it many times.",
      why: "Meanings stick when you use the word in real sentences.",
    },
  ],

  revision: {
    keyPoints: [
      "The meaning of a word is the idea it carries.",
      "When a word is new, ask: 'What does it mean?'",
      "Four ways to catch a meaning: the real thing, a picture, an example sentence, a translation.",
      "Use a word in a sentence to keep it.",
      "Some words have two meanings — the sentence tells you which one.",
    ],
    keyWords: ["meaning", "to mean", "idea", "to ask", "to remember", "for example"],
    selfCheck: [
      "Can you ask 'What does it mean?' with good grammar?",
      "Can you give the meaning of cup, bread and sun?",
      "How many new words will you catch tomorrow?",
    ],
  },

  homework: {
    tasks: [
      "Catch one new English word today. Ask what it means.",
      "Write your new word and its meaning on paper. Add one example sentence.",
      "Say your new word three times out loud.",
      "Use your new word in one real sentence today.",
    ],
  },
};
