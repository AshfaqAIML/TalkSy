import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 1 · Lesson 2 — Letter Recognition
 *
 * The 26 letters: names, sequence A→Z, first/last, and how letter names are
 * used to spell words and names. Pure recognition — sounds come in lesson 5.
 */
export const p1_1_2: StructuredCourseLesson = {
  slug: "p1-1-2",
  title: "Letter Recognition",
  subtitle: "The 26 letters of English",
  description:
    "Meet all 26 letters from A to Z. Learn their names, their order, and how people use letter names to spell words — like your own name.",
  minutes: 12,
  skills: ["listening", "reading", "speaking", "writing"],
  content: draftMeta([
    "st01-m02-u01-l01",
    "st01-m02-u03-l01",
  ]),

  introduction:
    "Words are made of letters. In this lesson you will meet all 26 letters of English. You will learn their names, and you will learn the order of the alphabet — A first, Z last. You do not need to memorise everything today. The goal is simple: see a letter, say its name. We will practise together.",

  objectives: [
    "You can name all 26 letters when you see them.",
    "You can say which letter is first and which letter is last.",
    "You can spell your own name with letter names.",
  ],

  prerequisites: [{ lessonSlug: "p1-1-1", label: "You know that English words are made of small pieces (lesson 1)." }],

  vocab: [
    {
      id: "p1-1-2-w1",
      term: "letter",
      pos: "noun",
      definition: "one mark in the alphabet, like A, B or C",
      example: "B is a letter.",
    },
    {
      id: "p1-1-2-w2",
      term: "alphabet",
      pos: "noun",
      definition: "all 26 letters of English, from A to Z",
      example: "The alphabet starts with A.",
    },
    {
      id: "p1-1-2-w3",
      term: "name",
      pos: "noun",
      definition: "what a person or thing is called",
      example: "My name is Omar.",
    },
    {
      id: "p1-1-2-w4",
      term: "first",
      pos: "word",
      definition: "before all the others",
      example: "A is the first letter.",
    },
    {
      id: "p1-1-2-w5",
      term: "last",
      pos: "word",
      definition: "after all the others",
      example: "Z is the last letter.",
    },
    {
      id: "p1-1-2-w6",
      term: "to spell",
      pos: "verb",
      definition: "to say the letters of a word in order",
      example: "I can spell my name.",
    },
    {
      id: "p1-1-2-w7",
      term: "to sing",
      pos: "verb",
      definition: "to make music with your voice",
      example: "We sing the alphabet song.",
    },
  ],

  concept: {
    definition: "The alphabet is all the letters of English. English has 26 letters, from A to Z.",
    explanation: [
      "Every letter has a name. When you say the alphabet, you say the letter names in order: A, B, C, D, E, F, G… all the way to Z.",
      "Letters are the building blocks of words. The word cat is built from three letters: c, a, t. Big words use more letters.",
      "People use letter names every day to spell. When someone asks 'How do you spell that?', you say the letters one by one.",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — Meet the alphabet",
      text: "Here are all 26 letters. Look at them from left to right. You do not need to learn them all at once — just let your eyes walk over them.",
      examples: ["A B C D E F G H I J K L M", "N O P Q R S T U V W X Y Z"],
    },
    {
      title: "Step 2 — Every letter has a name",
      text: "A letter's name is what you say when you read it alone. The letter B has the name 'bee'. The letter C has the name 'see'. Listen to the letter names in the exercises, and repeat them.",
      examples: ["B — bee", "C — see", "H — aitch"],
    },
    {
      title: "Step 3 — The alphabet has an order",
      text: "The letters always come in the same order, like numbers. A is first. Z is last. Many people learn the order with the alphabet song. Sing it if you know it!",
      examples: ["A is the first letter.", "Z is the last letter."],
    },
    {
      title: "Step 4 — Letters build words",
      text: "Put letters in a row and you get a word. C-A-T makes cat. M-U-M makes mum. Every English word is a team of letters.",
      examples: ["C-A-T makes cat.", "M-U-M makes mum."],
    },
    {
      title: "Step 5 — Spell your name",
      text: "Your name is made of letters too. When people write your name on a form or a list, you can help them: say the letters. Practice with your own name now.",
      examples: ["My name is Omar. O-M-A-R.", "Her name is Ana. A-N-A."],
    },
  ],

  exampleBank: {
    basic: [
      "A B C — the first three letters.",
      "The word cat has three letters.",
      "A is the first letter.",
      "Z is the last letter.",
    ],
    everyday: [
      "Please spell your name.",
      "My name is Ana. A-N-A.",
      "How do you spell that?",
      "Bus starts with the letter B.",
    ],
    questions: [
      "How do you spell your name?",
      "Which letter is first?",
      "Is this letter B or D?",
    ],
    corrections: [
      {
        wrong: "B is the same letter as D.",
        right: "B and D are different letters.",
        note: "Look carefully: b has a tall stick on the left, d has a tall stick on the right.",
      },
      {
        wrong: "The alphabet has 6 letters.",
        right: "The alphabet has 26 letters.",
        note: "Count them: from A to Z there are 26 letters.",
      },
    ],
  },

  dialogue: {
    title: "Spelling names in class",
    context: "Ms Reed writes new students on her class list. She asks them to spell their names.",
    lines: [
      { speaker: "Ms Reed", text: "Hello, Omar! Welcome to the class." },
      { speaker: "Omar", text: "Thank you, Ms Reed." },
      { speaker: "Ms Reed", text: "Please spell your name for the list." },
      { speaker: "Omar", text: "Yes. O-M-A-R." },
      { speaker: "Ms Reed", text: "Perfect. And your friend's name?" },
      { speaker: "Omar", text: "Ana. A-N-A." },
      { speaker: "Ms Reed", text: "Thank you, Omar. Hello, Ana!" },
    ],
  },

  realLife: {
    title: "Letter names in real life",
    text: "Letter names are useful everywhere. At a hotel, you spell your name at the desk. On the phone, people spell names because names are hard to hear. Your email address is written with letters too.",
    examples: [
      "At a hotel desk: 'My name is Khan. K-H-A-N.'",
      "On the phone: 'That is B for book, O for orange.'",
      "Your email address uses letters: omar.khan@mail.com.",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-1-2");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "How many letters are in the English alphabet?",
        ["26", "10", "100"],
        0,
        "The English alphabet has 26 letters, from A to Z."
      ),
      t.mcq(
        "guided",
        "Which letter is FIRST in the alphabet?",
        ["A", "Z", "M"],
        0,
        "The alphabet starts with A."
      ),
      t.fill(
        "guided",
        "The LAST letter of the alphabet is ______.",
        ["z"],
        "It looks like a zigzag: Z."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "Which letter comes right after B?",
        ["C", "A", "E"],
        0,
        "The order is A, B, C — so C comes after B."
      ),
      t.mcq(
        "independent",
        "The word 'cat' starts with the letter ______.",
        ["c", "b", "t"],
        0,
        "Cat starts with the c sound: c-a-t."
      ),
      t.match("independent", "Match each word with its first letter.", [
        { left: "cat", right: "c" },
        { left: "dog", right: "d" },
        { left: "sun", right: "s" },
      ]),

      /* 10 — speaking */
      t.speak("Say the first three letters of the alphabet.", "A B C"),

      /* 11 — listening */
      t.listenChoice("listening", "B", "Listen to the letter name. Which letter do you hear?", [
        "B",
        "D",
        "E",
      ], 0),
      t.listenType("listening", "M", "Type the letter you hear.", ["m"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. How many letters are in the alphabet?",
        ["26", "6", "3"],
        0,
        "The story says: 'The alphabet has 26 letters.'"
      ),
      t.fill(
        "reading",
        "Read the story. Sam spells his name: ______-A-M.",
        ["s"],
        "The first letter of Sam is S."
      ),

      /* 13 — writing */
      t.write(
        "Type the first three letters of the alphabet, in order. Put one space between the letters.",
        "A B C",
        "The alphabet starts with A."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "Which letter is LAST in the alphabet?",
        ["Z", "A", "Y"],
        0,
        "Z is the last letter of the alphabet."
      ),
      t.mcq(
        "assessment",
        "Which letter comes right after H?",
        ["I", "G", "J"],
        0,
        "The order is G, H, I — so I comes after H."
      ),
      t.fill(
        "assessment",
        "C-A-T spells the word ______.",
        ["cat"],
        "Say the letters: c… a… t… cat!"
      ),
      t.mcq(
        "assessment",
        "When do people use letter names?",
        ["To spell words", "To count numbers", "To say goodbye"],
        0,
        "Letter names are used to spell — for example, to spell your name."
      ),
    ];
  })(),

  passage: {
    title: "Sam and the alphabet",
    text: "The alphabet has 26 letters. A is the first letter. Z is the last letter. Sam is a student. Sam spells his name: S-A-M. Sam has three letters in his name. Sam is happy. He can spell his name in English!",
  },

  commonMistakes: [
    {
      wrong: "B is the same letter as D.",
      right: "B and D are different letters.",
      why: "The letter b has a tall stick on the left. The letter d has a tall stick on the right. Look twice when you read them.",
    },
    {
      wrong: "The alphabet has 6 letters.",
      right: "The alphabet has 26 letters.",
      why: "English uses 26 letters, from A to Z. Count them slowly with the alphabet song.",
    },
  ],

  revision: {
    keyPoints: [
      "The English alphabet has 26 letters, from A to Z.",
      "Every letter has a name, like 'bee' for B.",
      "A is the first letter. Z is the last letter.",
      "Letters build words: C-A-T makes cat.",
      "People spell names with letter names.",
    ],
    keyWords: ["letter", "alphabet", "name", "first", "last", "to spell", "to sing"],
    selfCheck: [
      "Can you say the first five letters, A to E, without looking?",
      "Can you spell your own name in English?",
      "Which letter is last in the alphabet?",
    ],
  },

  homework: {
    tasks: [
      "Sing or say the alphabet from A to Z once a day. Slowly is fine.",
      "Write the letters A to Z on paper. Take your time with each shape.",
      "Spell your name out loud to a family member, letter by letter.",
      "Look at a food label at home. Find three letters you know.",
    ],
  },
};
