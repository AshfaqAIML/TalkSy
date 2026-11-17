import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 1 · Lesson 4 — Vowels and Consonants
 *
 * The five vowels (a, e, i, o, u), the consonants, the special letter y,
 * and the rule that every English word needs a vowel.
 */
export const p1_1_4: StructuredCourseLesson = {
  slug: "p1-1-4",
  title: "Vowels and Consonants",
  subtitle: "Two groups of letters",
  description:
    "English letters come in two groups: vowels (a, e, i, o, u) and consonants (all the rest). Learn the groups and discover that every English word needs a vowel.",
  minutes: 10,
  skills: ["reading", "writing", "listening", "speaking"],
  content: draftMeta([
    "st01-m02-u02-l01",
    "st01-m02-u02-l02",
  ]),

  introduction:
    "Today you will sort the alphabet into two groups. Five special letters are vowels. All the other letters are consonants. Why does this matter? Because every English word — every single one — needs a vowel. Once you know the vowels, words become easier to read and to spell.",

  objectives: [
    "You can name the five vowels.",
    "You can say if a letter is a vowel or a consonant.",
    "You can find the vowel inside a short word.",
  ],

  prerequisites: [
    { lessonSlug: "p1-1-2", label: "You know the 26 letters (lesson 2)." },
    { lessonSlug: "p1-1-3", label: "You know big and small letter forms (lesson 3)." },
  ],

  vocab: [
    {
      id: "p1-1-4-w1",
      term: "vowel",
      pos: "noun",
      definition: "one of five letters: a, e, i, o, u",
      example: "A is a vowel.",
    },
    {
      id: "p1-1-4-w2",
      term: "consonant",
      pos: "noun",
      definition: "a letter that is not a vowel, like b, c or d",
      example: "B is a consonant.",
    },
    {
      id: "p1-1-4-w3",
      term: "group",
      pos: "noun",
      definition: "several things that belong together",
      example: "The vowels are a group of five letters.",
    },
    {
      id: "p1-1-4-w4",
      term: "every",
      pos: "word",
      definition: "all of them, one by one",
      example: "Every word has a vowel.",
    },
    {
      id: "p1-1-4-w5",
      term: "at least",
      pos: "phrase",
      definition: "one or more; not less than",
      example: "Every word has at least one vowel.",
    },
    {
      id: "p1-1-4-w6",
      term: "game",
      pos: "noun",
      definition: "a fun activity with rules",
      example: "We play a letter game.",
    },
  ],

  concept: {
    definition: "A, E, I, O and U are vowels. All the other letters are consonants.",
    explanation: [
      "The alphabet has two groups of letters. The vowel group has five letters: a, e, i, o, u. The consonant group has the other 21 letters.",
      "Vowels are special because every English word needs at least one vowel. The word cat needs a. The word bed needs e. The word sun needs u.",
      "One letter is a little special: y. It is usually a consonant, but sometimes it works like a vowel, like in the word my. You will learn more about that later.",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — Meet the vowels",
      text: "Say the five vowels with me: a, e, i, o, u. There are only five of them, so you can learn them in one day. Many teachers teach them with a song: 'a, e, i, o, u!'.",
      examples: ["The vowels are a, e, i, o, u.", "A is a vowel. E is a vowel."],
    },
    {
      title: "Step 2 — Meet the consonants",
      text: "Now take the vowels away. Everything left is a consonant: b, c, d, f, g, and so on. There are 21 consonants. Most letters in most words are consonants.",
      examples: ["B is a consonant.", "The word dog starts with a consonant: d."],
    },
    {
      title: "Step 3 — Every word needs a vowel",
      text: "Look inside any English word and you will find a vowel. Cat has the vowel a. Bed has the vowel e. Fish has the vowel i. This is true for every English word — at least one vowel, always.",
      examples: [
        "In c-a-t, the vowel is a.",
        "In b-e-d, the vowel is e.",
        "In s-u-n, the vowel is u.",
      ],
    },
    {
      title: "Step 4 — The special letter y",
      text: "The letter y is flexible. Usually it works like a consonant, like in yes. But sometimes it works like a vowel, like in my or happy. For now, just remember: y is special.",
      examples: ["In yes, y works like a consonant.", "In my, y works like a vowel."],
    },
    {
      title: "Step 5 — Use the groups",
      text: "Sorting letters into vowels and consonants helps you spell. When you write a word and it looks strange, count its vowels. A word with no vowel is almost always wrong!",
      examples: ["Dg is not a word — it has no vowel.", "Dog is a word — it has the vowel o."],
    },
  ],

  exampleBank: {
    basic: [
      "A is a vowel.",
      "B is a consonant.",
      "The vowels are a, e, i, o, u.",
      "The word cat has the vowel a.",
    ],
    everyday: [
      "Apple starts with a vowel: a.",
      "Dog starts with a consonant: d.",
      "My name has two vowels.",
      "Look for the vowel in this word.",
    ],
    questions: [
      "Is E a vowel or a consonant?",
      "Which vowel is in the word 'cat'?",
      "How many vowels are in your name?",
    ],
    negatives: [
      "B is not a vowel.",
      "The word 'dg' is not a real word — it has no vowel.",
      "Not every letter is a consonant.",
    ],
    corrections: [
      {
        wrong: "There are six vowels in the alphabet.",
        right: "There are five main vowels: a, e, i, o, u.",
        note: "The letter y sometimes works like a vowel, but the five main vowels are a, e, i, o, u.",
      },
      {
        wrong: "The word 'dog' has no vowel.",
        right: "Dog has the vowel o.",
        note: "Every English word has at least one vowel. Look inside: d-o-g.",
      },
    ],
  },

  dialogue: {
    title: "The vowel game",
    context: "Ms Reed plays a quick letter game with her students, Omar and Ana.",
    lines: [
      { speaker: "Ms Reed", text: "Let's play a game! Is A a vowel or a consonant?" },
      { speaker: "Omar", text: "A is a vowel!" },
      { speaker: "Ms Reed", text: "Yes! And B?" },
      { speaker: "Ana", text: "B is a consonant." },
      { speaker: "Ms Reed", text: "Perfect. Now the big question. The five vowels are…?" },
      { speaker: "Omar", text: "A, E, I, O, U!" },
      { speaker: "Ms Reed", text: "Wonderful! Ten points for the team!" },
    ],
  },

  realLife: {
    title: "Vowels around you",
    text: "Vowels hide in every word you see. Your name has vowels. Shop names have vowels. Even this lesson has vowels — thousands of them! When you write a message and a word looks wrong, check the vowel first.",
    examples: [
      "Look at your name. Which vowels are in it?",
      "Look at a shop sign. Find one vowel.",
      "Write the word 'dog' and circle its vowel.",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-1-4");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "How many vowels are in the English alphabet?",
        ["5", "21", "26"],
        0,
        "There are five vowels: a, e, i, o, u."
      ),
      t.mcq(
        "guided",
        "Which letter is a VOWEL?",
        ["b", "e", "t"],
        1,
        "E is one of the five vowels: a, e, i, o, u."
      ),
      t.fill(
        "guided",
        "The five vowels are a, e, i, o and ______.",
        ["u"],
        "It is the last vowel: u."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "Which letter is a CONSONANT?",
        ["a", "i", "m"],
        2,
        "M is not one of the five vowels, so it is a consonant."
      ),
      t.mcq(
        "independent",
        "The word 'cat' has the vowel ______ in the middle.",
        ["a", "e", "o"],
        0,
        "C-a-t: the middle letter is a, a vowel."
      ),
      t.match("independent", "Match each vowel with a word that uses it.", [
        { left: "a", right: "cat" },
        { left: "e", right: "bed" },
        { left: "u", right: "sun" },
      ]),

      /* 10 — speaking */
      t.speak("Say the five vowels, in order.", "A E I O U"),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "A",
        "You hear the letter A. Is it a vowel or a consonant?",
        ["A vowel", "A consonant", "It is not a letter"],
        0
      ),
      t.listenType("listening", "U", "Type the vowel you hear.", ["u"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. How many vowels does Ana have in her name?",
        ["Two", "One", "Five"],
        0,
        "A-n-a: the vowel a appears two times."
      ),
      t.fill(
        "reading",
        "Read the story. Omar has the vowels o and ______.",
        ["a"],
        "O-m-a-r has two vowels."
      ),

      /* 13 — writing */
      t.write(
        "Type the five small vowels in order. Put one space between them.",
        "a e i o u",
        "There are five vowels."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "Which group has ONLY vowels?",
        ["a e i o u", "b c d", "a b c"],
        0,
        "a, e, i, o, u are exactly the five vowels."
      ),
      t.mcq(
        "assessment",
        "How many consonants are in the alphabet?",
        ["21", "5", "26"],
        0,
        "26 letters minus 5 vowels = 21 consonants."
      ),
      t.fill(
        "assessment",
        "The word 'bed' has the vowel ______ in the middle.",
        ["e"],
        "B-e-d: the middle letter is e."
      ),
      t.mcq(
        "assessment",
        "Which word starts with a vowel?",
        ["apple", "dog", "cat"],
        0,
        "Apple starts with a — a vowel. Dog and cat start with consonants."
      ),
    ];
  })(),

  passage: {
    title: "The letter game",
    text: "Ana and Omar play a letter game. The five vowels are a, e, i, o and u. Ana has the vowel a two times in her name. Omar has the vowels o and a. Sam has the vowel a one time. Every name has a vowel. Every word has a vowel too. The game is fun!",
  },

  commonMistakes: [
    {
      wrong: "There are six vowels in the alphabet.",
      right: "There are five main vowels: a, e, i, o, u.",
      why: "The letter y sometimes works like a vowel, but the five main vowels are a, e, i, o, u.",
    },
    {
      wrong: "The word 'dog' has no vowel.",
      right: "Dog has the vowel o.",
      why: "Every English word has at least one vowel. Look inside the word: d-o-g.",
    },
  ],

  revision: {
    keyPoints: [
      "The five vowels are a, e, i, o, u.",
      "All the other 21 letters are consonants.",
      "Every English word needs at least one vowel.",
      "The letter y is special: usually a consonant, sometimes like a vowel.",
    ],
    keyWords: ["vowel", "consonant", "group", "every", "at least", "game"],
    selfCheck: [
      "Can you say the five vowels without looking?",
      "Is the first letter of your name a vowel or a consonant?",
      "Can you find the vowel in the word 'sun'?",
    ],
  },

  homework: {
    tasks: [
      "Write the five vowels three times on paper: a e i o u.",
      "Write your name. Circle every vowel in it.",
      "Find three things in your home. Say their English name (or ask someone). Find the vowel in each word.",
      "Play the vowel game with a friend: one of you says a letter, the other says 'vowel' or 'consonant'.",
    ],
  },
};
