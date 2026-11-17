import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 1 · Lesson 1 — Understanding English
 *
 * Orientation lesson for absolute beginners: what English is, where they
 * already meet it, and four survival words (hello, hi, yes, no, thank you).
 * No letter knowledge is required — everything is taught by ear and eye.
 */
export const p1_1_1: StructuredCourseLesson = {
  slug: "p1-1-1",
  title: "Understanding English",
  subtitle: "Your very first lesson",
  description:
    "Meet English: what it is, where you already see it every day, and the first words you can use right now — hello, hi, yes, no and thank you.",
  minutes: 12,
  skills: ["listening", "reading", "speaking", "writing"],
  content: draftMeta([
    "st01-m01-u01-l01",
    "st01-m01-u01-l02",
    "st01-m01-u02-l02",
  ]),

  /* 1 — lesson introduction */
  introduction:
    "Welcome to your very first English lesson! You do not need to know any English to start this course. We begin at zero, together. In this lesson you will learn what English is, where you can already find it around you, and you will learn your first real English words. Take your time. It is fine to listen and look more than once.",

  /* 2 — learning objectives */
  objectives: [
    "You can say what English is, in simple words.",
    "You can find English words in the world around you.",
    "You can say and use five first words: hello, hi, yes, no, thank you.",
  ],

  /* 3 — prerequisite knowledge (first lesson: none) */
  prerequisites: [],

  vocab: [
    {
      id: "p1-1-1-w1",
      term: "English",
      pos: "noun",
      definition: "the language you are learning in this course",
      example: "This lesson is in English.",
    },
    {
      id: "p1-1-1-w2",
      term: "language",
      pos: "noun",
      definition: "the words people use to talk and write to each other",
      example: "English is a language.",
    },
    {
      id: "p1-1-1-w3",
      term: "word",
      pos: "noun",
      definition: "a small piece of a language, like hello or cat",
      example: "Hello is my first English word.",
    },
    {
      id: "p1-1-1-w4",
      term: "hello",
      pos: "exclamation",
      definition: "a friendly word you say when you meet someone",
      example: "Hello! It is good to see you.",
    },
    {
      id: "p1-1-1-w5",
      term: "hi",
      pos: "exclamation",
      definition: "a short, friendly way to say hello",
      example: "Hi, Sam!",
    },
    {
      id: "p1-1-1-w6",
      term: "yes",
      pos: "exclamation",
      definition: "the word for a positive answer",
      example: "Yes, I like tea.",
    },
    {
      id: "p1-1-1-w7",
      term: "no",
      pos: "exclamation",
      definition: "the word for the opposite of yes",
      example: "No, thank you.",
    },
    {
      id: "p1-1-1-w8",
      term: "thank you",
      pos: "phrase",
      definition: "a polite word you say when someone helps you or gives you something",
      example: "Thank you for the book.",
    },
  ],

  /* 4 — concept explanation */
  concept: {
    definition: "English is a language. A language is how people talk to each other and write to each other.",
    explanation: [
      "People speak English in many countries. On the internet, in songs, in games and on signs, you can find English words almost everywhere.",
      "You may already know some English words. Words like pizza, taxi, TV and OK are used all over the world. So you are not starting from nothing!",
      "In this course you will learn many English words, and step by step you will learn to use them. You will read, write, listen and speak.",
    ],
  },

  /* 5 — step-by-step teaching */
  teachingSteps: [
    {
      title: "Step 1 — English is a language",
      text: "English is a language, like the language you speak at home. A language is how people share ideas. With English, people talk, write and make friends in many countries.",
      examples: ["English is a language.", "People speak English in many countries."],
    },
    {
      title: "Step 2 — English is all around you",
      text: "You already see English every day. Phones, computers, songs and games use English words. Airport signs often use English too.",
      examples: ["STOP is an English word on road signs.", "Many games use the words start and game."],
    },
    {
      title: "Step 3 — You already know some English",
      text: "Words travel around the world. Pizza, taxi, TV, hotel and OK are English words — and you probably know them already. That is a good start!",
      examples: ["Pizza is an English word now.", "Taxi and hotel are English words too."],
    },
    {
      title: "Step 4 — Say it and hear it",
      text: "There are two ways to use a language. You can speak and listen with your mouth and ears. You can read and write with your eyes and hands. This course practises all four, one small step at a time.",
      examples: ["You speak and you listen.", "You read and you write."],
    },
    {
      title: "Step 5 — Your first word: hello",
      text: "Hello is a friendly word. People say hello when they meet. A shorter way to say it is hi. Say your first English word out loud now: hello!",
      examples: ["Hello!", "Hi, Sam!"],
    },
  ],

  /* 6 — examples */
  exampleBank: {
    basic: ["Hello!", "Hi!", "Yes.", "No.", "Thank you."],
    everyday: [
      "Hello! It is good to see you.",
      "Hi, Ana! How are you today?",
      "Yes, please.",
      "No, thank you.",
      "Thank you for your help.",
    ],
    questions: [
      "How do you say hello in your language?",
      "Do you know the word pizza?",
      "Is English fun? Yes or no?",
    ],
    corrections: [
      {
        wrong: "helo",
        right: "Hello",
        note: "Hello has two l letters in the middle.",
      },
      {
        wrong: "thankyou",
        right: "Thank you",
        note: "Thank and you are two words. Write them separately.",
      },
    ],
  },

  /* dialogue (also serves as listening input) */
  dialogue: {
    title: "The first English class",
    context: "Ms Reed welcomes her new student, Omar, to his first English lesson.",
    lines: [
      { speaker: "Ms Reed", text: "Hello, class!" },
      { speaker: "Omar", text: "Hello!" },
      { speaker: "Ms Reed", text: "Welcome to your first English lesson." },
      { speaker: "Omar", text: "Thank you!" },
      { speaker: "Ms Reed", text: "English is fun. Yes or no?" },
      { speaker: "Omar", text: "Yes!" },
    ],
  },

  /* 7 — real-life application */
  realLife: {
    title: "English in your day",
    text: "English is closer than you think. You can use it today, before you even finish this lesson. Listen for English words in songs. Look for them on your phone. And say hello to someone — it works in almost every country.",
    examples: [
      "Say hello to a friend or a neighbour today.",
      "Look at your phone. Can you find three English words?",
      "Listen to one song. Can you hear the word yes or no?",
    ],
  },

  /* 8–13 + 16 — exercises, in template order */
  exercises: (() => {
    const t = makeLessonTools("p1-1-1");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "You meet a friend. What do you say?",
        ["Hello", "No", "Thank you"],
        0,
        "Hello is the friendly word for meeting someone."
      ),
      t.mcq(
        "guided",
        "Someone gives you a gift. What do you say?",
        ["Yes", "Thank you", "Hi"],
        1,
        "Thank you is the polite answer when you get something."
      ),
      t.fill(
        "guided",
        "Type the word: H-E-L-L-O spells ______.",
        ["hello"],
        "Two l letters in the middle."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "Your teacher asks: 'Do you want tea?' You want tea. What do you say?",
        ["No", "Yes", "Hello"],
        1,
        "Yes is the answer when you want something."
      ),
      t.mcq(
        "independent",
        "English is a ______.",
        ["language", "colour", "name"],
        0,
        "English is a language — the words people use to talk and write."
      ),
      t.fill(
        "independent",
        "People say '______' when they meet a friend.",
        ["hello", "hi"],
        "It starts with h."
      ),

      /* 10 — speaking */
      t.speak("Say hello to your new English class.", "Hello!"),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "Hello!",
        "Listen. What do you hear?",
        ["Hello", "Yes", "No"],
        0,
        "p1-1-1-w4"
      ),
      t.listenChoice(
        "listening",
        "Thank you!",
        "Listen. What do you hear?",
        ["Yes", "Thank you", "Hello"],
        1,
        "p1-1-1-w8"
      ),

      /* 12 — reading (passage + questions) */
      t.mcq(
        "reading",
        "Read the story. What is Omar's first English word?",
        ["hello", "yes", "no"],
        0,
        "The story says: 'This is my first English word: hello.'"
      ),
      t.fill(
        "reading",
        "Read the story. Omar says hello to his teacher and his ______.",
        ["friends"],
        "Omar says hello to two groups of people."
      ),

      /* 13 — writing */
      t.write(
        "Type the word hello one time. Start with a big H.",
        "Hello",
        "H-E-L-L-O. Two l letters."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "What is English?",
        ["A language", "A country", "A name"],
        0,
        "English is a language — people use it to talk and write."
      ),
      t.mcq(
        "assessment",
        "A friend helps you carry a heavy bag. You say:",
        ["Thank you", "No", "Word"],
        0,
        "Thank you is the polite word when someone helps you."
      ),
      t.fill(
        "assessment",
        "Complete the word: y______ means the opposite of no.",
        ["yes"],
        "It has three letters: y-e-s."
      ),
      t.mcq(
        "assessment",
        "Which word is a friendly way to say hello?",
        ["Hi", "Yes", "Thank you"],
        0,
        "Hi is the short form of hello."
      ),
    ];
  })(),

  /* reading passage for section 12 */
  passage: {
    title: "Omar says hello",
    text: "Hello! I am Omar. This is my first English word: hello. I say hello to my teacher. I say hello to my friends. Hello, friends! Yes, English is fun.",
  },

  /* 14 — common mistakes */
  commonMistakes: [
    {
      wrong: "helo",
      right: "Hello",
      why: "Hello has two l letters in the middle. Write it slowly: h-e-l-l-o.",
    },
    {
      wrong: "thankyou",
      right: "Thank you",
      why: "Thank and you are two separate words. There is a space between them.",
    },
  ],

  /* 15 — revision */
  revision: {
    keyPoints: [
      "English is a language. A language is how people talk and write to each other.",
      "English words are all around you — on phones, signs, songs and games.",
      "Hello and hi are words for meeting people.",
      "Yes and no are answers. Thank you is the polite word when someone helps you.",
    ],
    keyWords: ["English", "language", "word", "hello", "hi", "yes", "no", "thank you"],
    selfCheck: [
      "Can you say hello out loud, without looking at this page?",
      "Can you spell hello with two l letters?",
      "Can you find three English words around you today?",
    ],
  },

  /* 17 — homework */
  homework: {
    tasks: [
      "Say hello to three people today.",
      "Write the word hello five times on paper. Use two l letters every time.",
      "Find three English words around you — on your phone, a sign, or food packaging. Write them down.",
      "Answer one question today with the word yes or no, out loud, in English.",
    ],
  },
};
