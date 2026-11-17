import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 1 · Lesson 3 — Uppercase and Lowercase
 *
 * Every letter has two forms: capital (A) and small (a). Same letter, same
 * name. Where capitals appear: people's names, the word I, sentence starts.
 */
export const p1_1_3: StructuredCourseLesson = {
  slug: "p1-1-3",
  title: "Uppercase and Lowercase",
  subtitle: "Big letters and small letters",
  description:
    "Every English letter comes in two forms: big (A) and small (a). Learn to match the pairs, and learn the three places where big letters always appear.",
  minutes: 10,
  skills: ["reading", "writing", "listening", "speaking"],
  content: draftMeta([
    "st01-m02-u01-l02",
    "st01-m02-u01-l03",
    "st01-m02-u01-l04",
    "st01-m02-u03-l03",
  ]),

  introduction:
    "Look at these two letters: A and a. They look different, but they are the same letter! One is big, one is small. In this lesson you will learn both forms of every letter, and you will learn where English uses the big form. This is a short lesson, but a very useful one.",

  objectives: [
    "You can match every big letter with its small partner.",
    "You can say where English uses capital letters.",
    "You can write your name with a capital letter at the start.",
  ],

  prerequisites: [
    { lessonSlug: "p1-1-2", label: "You know the 26 letters and their names (lesson 2)." },
  ],

  vocab: [
    {
      id: "p1-1-3-w1",
      term: "capital letter",
      pos: "noun",
      definition: "the big form of a letter, like A, B or C",
      example: "Ana starts with a capital letter.",
    },
    {
      id: "p1-1-3-w2",
      term: "small letter",
      pos: "noun",
      definition: "the little form of a letter, like a, b or c",
      example: "The word cat uses three small letters.",
    },
    {
      id: "p1-1-3-w3",
      term: "form",
      pos: "noun",
      definition: "the shape of something",
      example: "A and a are two forms of one letter.",
    },
    {
      id: "p1-1-3-w4",
      term: "pair",
      pos: "noun",
      definition: "two things that go together",
      example: "B and b are a pair.",
    },
    {
      id: "p1-1-3-w5",
      term: "the same",
      pos: "adjective",
      definition: "not different; exactly alike in idea",
      example: "A and a are the same letter.",
    },
    {
      id: "p1-1-3-w6",
      term: "to match",
      pos: "verb",
      definition: "to put two things together that belong together",
      example: "Match the big letter with the small letter.",
    },
  ],

  concept: {
    definition: "Every letter has two forms: a big form (A) and a small form (a). They are the same letter, with the same name.",
    explanation: [
      "The big form is called a capital letter. The small form is called a small letter. A and a are one pair. B and b are another pair.",
      "English uses capital letters in three important places: at the start of a sentence, for the names of people and cities, and for the word I when you talk about yourself.",
      "Most words use small letters. Capital letters are special — they work like little flags that say 'a sentence starts here' or 'this is a name'.",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — Big letters (capitals)",
      text: "These are the capital letters: A, B, C, D, E, F, G, and so on to Z. They are tall and easy to see. Street signs often use them.",
      examples: ["A B C D E", "STOP uses four capital letters."],
    },
    {
      title: "Step 2 — Small letters",
      text: "These are the small letters: a, b, c, d, e, f, g, and so on to z. Most writing uses small letters. Books, phones and websites are full of them.",
      examples: ["a b c d e", "The word book uses four small letters."],
    },
    {
      title: "Step 3 — Letter pairs",
      text: "Put a big letter next to its small partner and you get a pair: Aa, Bb, Cc. The name does not change. You say 'bee' for both B and b.",
      examples: ["Aa Bb Cc Dd", "H and h have the same name."],
    },
    {
      title: "Step 4 — Where capitals appear",
      text: "Capital letters appear in three important places. First: at the start of a sentence — a sentence is a group of words that tells one idea, like 'Ana has a dog.' Second: in names of people and cities. Third: for the word I when you talk about yourself. When you write your own name, it starts with a capital letter.",
      examples: ["My name is Omar. (O is a capital.)", "I am happy. (I is always a capital.)", "Ana lives in Rome. (A and R are capitals.)"],
    },
    {
      title: "Step 5 — Reading mixed writing",
      text: "Real English mixes both forms: 'Ana has a dog.' Read the capitals as the same letters you know. A capital A at the start of a sentence and a small a inside a word are friends, not strangers.",
      examples: ["Ana has a dog.", "Omar and Ana are friends."],
    },
  ],

  exampleBank: {
    basic: [
      "A and a are a pair.",
      "B and b are the same letter.",
      "The word 'dog' uses small letters.",
      "Names start with a capital letter.",
    ],
    everyday: [
      "My name is Ben. B-E-N.",
      "I am a student.",
      "The sign says STOP.",
      "Ana lives in Rome.",
    ],
    questions: [
      "Is this a capital letter or a small letter?",
      "How do you write your name?",
      "Which letter is the big form of d?",
    ],
    corrections: [
      {
        wrong: "my name is omar.",
        right: "My name is Omar.",
        note: "Use a capital M for 'My', and a capital O for the name Omar.",
      },
      {
        wrong: "i am happy.",
        right: "I am happy.",
        note: "The word I is always a capital letter, everywhere in English.",
      },
    ],
  },

  dialogue: {
    title: "A new name badge",
    context: "It is the first day of English club. The teacher, Ms Reed, makes name badges for two new students.",
    lines: [
      { speaker: "Ms Reed", text: "Hello! What is your name?" },
      { speaker: "Dana", text: "My name is Dana." },
      { speaker: "Ms Reed", text: "D-A-N-A. Is that right?" },
      { speaker: "Dana", text: "Yes! With a big D, please." },
      { speaker: "Ms Reed", text: "Of course! A name starts with a capital letter." },
      { speaker: "Dana", text: "Thank you!" },
    ],
  },

  realLife: {
    title: "Capitals in the real world",
    text: "Watch for capital letters today. Shop names use them. Street signs use them. Your own name uses one. Small letters fill books and phones. Once you see the two forms, you cannot stop seeing them.",
    examples: [
      "Look at a shop sign. How many capital letters can you find?",
      "Look at your phone. Most words there use small letters.",
      "Write your name. Check that it starts with a capital letter.",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-1-3");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "A and a are ______.",
        ["the same letter", "different letters", "different words"],
        0,
        "A and a are two forms of one letter."
      ),
      t.mcq(
        "guided",
        "Which of these is a CAPITAL letter?",
        ["b", "B", "d"],
        1,
        "The big form is the capital. B is the big form of b."
      ),
      t.fill(
        "guided",
        "The small form of the letter T is ______.",
        ["t"],
        "It looks the same, but smaller."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "Names of people start with a ______.",
        ["capital letter", "small letter", "number"],
        0,
        "Names always start with a capital letter: Ana, Omar, Dana."
      ),
      t.match("independent", "Match each capital letter with its small partner.", [
        { left: "A", right: "a" },
        { left: "G", right: "g" },
        { left: "M", right: "m" },
      ]),
      t.mcq(
        "independent",
        "Which sentence is written correctly?",
        ["my name is ana.", "My name is Ana.", "my Name is ana."],
        1,
        "Sentences start with a capital, and the name Ana has a capital A."
      ),

      /* 10 — speaking */
      t.speak("Say hello to Dana, using her name.", "Hello, Dana!"),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "Capital B.",
        "Listen. Which form does the speaker say?",
        ["A capital letter", "A small letter", "A number"],
        0
      ),
      t.listenType("listening", "Small m.", "Type the letter you hear.", ["m"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. What is the name of the dog?",
        ["Rex", "Ana", "Sam"],
        0,
        "The story says: 'The name of the dog is Rex.'"
      ),
      t.fill(
        "reading",
        "Read the story. ______ has a small dog.",
        ["ana"],
        "Look for the girl's name. It starts with a capital A."
      ),

      /* 13 — writing */
      t.write(
        "Type the name Dana. Start with a capital letter.",
        "Dana",
        "Names start with a big letter."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "How many forms does each letter have?",
        ["Two", "One", "Ten"],
        0,
        "Each letter has a capital form and a small form."
      ),
      t.mcq(
        "assessment",
        "The word 'I' (when you talk about yourself) is always ______.",
        ["a capital letter", "a small letter", "a number"],
        0,
        "I is always a capital: I am happy."
      ),
      t.fill(
        "assessment",
        "Write the capital form of the letter b: ______",
        ["B"],
        "It looks like a tall stick with a round belly: B."
      ),
      t.mcq(
        "assessment",
        "Which pair shows the SAME letter?",
        ["D-d", "D-b", "b-p"],
        0,
        "D and d are the two forms of one letter. The other pairs are different letters."
      ),
    ];
  })(),

  passage: {
    title: "Ana and Rex",
    text: "Ana is my friend. Ana has a dog. The dog is small. The name of the dog is Rex. Ana and Rex play in the park. I like Ana. I like Rex too.",
  },

  commonMistakes: [
    {
      wrong: "my name is omar.",
      right: "My name is Omar.",
      why: "Sentences start with a capital letter, and names like Omar always use a capital letter.",
    },
    {
      wrong: "i am happy.",
      right: "I am happy.",
      why: "The word I is always a capital letter in English — even in the middle of a sentence.",
    },
  ],

  revision: {
    keyPoints: [
      "Every letter has two forms: capital (A) and small (a).",
      "Both forms have the same letter name.",
      "Capital letters appear at the start of sentences, in names, and for the word I.",
      "Most words in books and on phones use small letters.",
    ],
    keyWords: ["capital letter", "small letter", "form", "pair", "the same", "to match"],
    selfCheck: [
      "Can you write your name with a capital letter at the start?",
      "Can you say the small partner of B, D and G?",
      "Can you find the word that always uses a capital: I?",
    ],
  },

  homework: {
    tasks: [
      "Write the alphabet twice: once in capital letters, once in small letters.",
      "Write the names of three people in your family. Start each with a capital letter.",
      "Find a shop sign near your home. Count the capital letters.",
      "Write the sentence 'I am happy.' — check the capital I.",
    ],
  },
};
