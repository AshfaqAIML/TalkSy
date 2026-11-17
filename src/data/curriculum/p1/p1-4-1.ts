import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 4 · Lesson 1 — Understanding Simple Sentences
 *
 * A sentence is a group of words that tells a complete idea: capital letter
 * at the start, full stop at the end, words in order. Sentences vs word
 * lists, and reading short sentences with understanding.
 */
export const p1_4_1: StructuredCourseLesson = {
  slug: "p1-4-1",
  title: "Understanding Simple Sentences",
  subtitle: "Words that work together",
  description:
    "Words are strong alone, but together they are stronger. Learn what makes a sentence — a complete idea, a capital letter at the start, a full stop at the end.",
  minutes: 12,
  skills: ["reading", "writing", "listening", "speaking"],
  content: draftMeta([
    "st03-m01-u01-l01",
    "st01-m04-u02-l03",
  ]),

  introduction:
    "You know nouns, verbs and pronouns. Now watch them join forces! Today you will learn what a sentence really is — not just a pile of words, but a team with a job: to tell one complete idea. Once you can see sentences, you can read them, say them and write them.",

  objectives: [
    "You can say what a sentence is.",
    "You can find the three signs of a sentence: capital start, full stop end, complete idea.",
    "You can tell a sentence apart from a list of words.",
  ],

  prerequisites: [
    { lessonSlug: "p1-3-3", label: "You know nouns (lesson 13)." },
    { lessonSlug: "p1-3-4", label: "You know verbs (lesson 14)." },
    { lessonSlug: "p1-3-5", label: "You know pronouns (lesson 15)." },
  ],

  vocab: [
    {
      id: "p1-4-1-w1",
      term: "full stop",
      pos: "noun",
      definition: "the little dot (.) at the end of a sentence",
      example: "Every sentence ends with a full stop.",
    },
    {
      id: "p1-4-1-w2",
      term: "complete",
      pos: "adjective",
      definition: "whole; not missing anything",
      example: "A sentence tells a complete idea.",
    },
    {
      id: "p1-4-1-w3",
      term: "idea",
      pos: "noun",
      definition: "a thought your head makes",
      example: "'The dog runs' tells one idea.",
    },
    {
      id: "p1-4-1-w4",
      term: "to start",
      pos: "verb",
      definition: "to begin",
      example: "A sentence starts with a capital letter.",
    },
    {
      id: "p1-4-1-w5",
      term: "to end",
      pos: "verb",
      definition: "to finish; to stop",
      example: "A sentence ends with a full stop.",
    },
    {
      id: "p1-4-1-w6",
      term: "space",
      pos: "noun",
      definition: "the empty gap between two words",
      example: "Put a space between the words.",
    },
  ],

  concept: {
    definition: "A sentence is a group of words that tells one complete idea.",
    explanation: [
      "'The dog runs.' — you can picture it, it makes sense, it is finished. That is a sentence. 'The dog the runs park' — nothing makes sense. That is just a word pile.",
      "Every sentence wears a uniform: it starts with a capital letter and ends with a full stop (.). Between them, the words stand in a special order you already know: WHO first, then WHAT THEY DO.",
      "The heart of a sentence is its complete idea. Someone does something — or someone is something. If your words leave the reader asking '…and then what?', the sentence is not finished yet.",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — One team, one idea",
      text: "Look at this: 'Ana reads a book.' One group of words, one complete idea — you can see it in your head. That is a sentence. The words work together like a team.",
      examples: ["Ana reads a book.", "The dog sleeps.", "I drink tea."],
    },
    {
      title: "Step 2 — The uniform: capital and full stop",
      text: "Sentences wear uniforms. At the front: a capital letter. At the back: a full stop (.). 'Ana reads a book.' See the big A and the little dot? That is a sentence dressed correctly.",
      examples: ["Ana reads a book. (capital A + full stop)", "The dog sleeps. (capital T + full stop)"],
    },
    {
      title: "Step 3 — Word order matters",
      text: "'The dog sees the cat.' Clear. Now mix the words: 'Cat the dog sees the.' Confusing! English sentences keep a secret order: WHO, then WHAT THEY DO (and sometimes WHAT they do it TO). You will master this order in the next lessons.",
      examples: ["The dog sees the cat. ✓", "Cat the dog sees the. ✗"],
    },
    {
      title: "Step 4 — Sentence or word pile?",
      text: "Test yourself. 'I eat rice.' — sentence! It tells a complete idea. 'Rice eat I the morning' — word pile! No order, no sense, no full stop. A sentence is always a team, never a pile.",
      examples: ["I eat rice. (sentence)", "Rice eat I the morning. (word pile)"],
    },
    {
      title: "Step 5 — Read sentences with understanding",
      text: "Reading a sentence is not just saying words. After you read, check the picture in your head. 'The cat sits on the mat.' — Do you see the cat? The mat? Then you understood the sentence!",
      examples: ["The cat sits on the mat. (See it?)", "Ana drinks tea. (See it?)"],
    },
  ],

  exampleBank: {
    basic: [
      "I eat rice.",
      "The dog runs.",
      "Ana reads a book.",
      "We play in the park.",
    ],
    everyday: [
      "I drink tea every morning.",
      "My sister works at a shop.",
      "The bus stops here.",
      "Good night! I sleep now.",
    ],
    questions: [
      "Is this a sentence: 'The dog runs.'?",
      "What does every sentence start with?",
      "What does every sentence end with?",
    ],
    negatives: [
      "'Runs dog the' is not a sentence.",
      "A sentence does not end with a comma (,).",
      "A word pile is not a sentence — order matters.",
    ],
    corrections: [
      {
        wrong: "the dog runs",
        right: "The dog runs.",
        note: "Capital letter at the start, full stop at the end. Every sentence, every time.",
      },
      {
        wrong: "Cat the dog sees the.",
        right: "The dog sees the cat.",
        note: "English order: WHO (the dog) + WHAT THEY DO (sees) + WHO THEY SEE (the cat).",
      },
    ],
  },

  dialogue: {
    title: "Sentence or word pile?",
    context: "Ms Reed holds up cards. Some are sentences; some are word piles. The students judge.",
    lines: [
      { speaker: "Ms Reed", text: "Card one: 'The cat sleeps.' Sentence or word pile?" },
      { speaker: "Omar", text: "Sentence! It tells one idea — I can see the cat!" },
      { speaker: "Ms Reed", text: "Card two: 'Tea drink I morning the.'" },
      { speaker: "Ana", text: "Word pile! The order is wrong." },
      { speaker: "Ms Reed", text: "Fix it, Ana!" },
      { speaker: "Ana", text: "I drink tea in the morning!" },
      { speaker: "Ms Reed", text: "A perfect sentence. Ten points!" },
    ],
  },

  realLife: {
    title: "Sentences are everywhere",
    text: "Look around: signs, messages, menus, this app — all made of sentences. Once you know the uniform (capital + words in order + full stop), you start seeing sentences everywhere. Today, read three real sentences and check: complete idea?",
    examples: [
      "Read a sign: 'The shop opens at nine.' One complete idea!",
      "Read a message from a friend. Is it a full sentence?",
      "Say one sentence about your day: 'I work today.'",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-4-1");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "A sentence is a group of words that tells ______.",
        ["one complete idea", "one letter", "a long story"],
        0,
        "One team of words, one complete idea — that is a sentence."
      ),
      t.mcq(
        "guided",
        "Every sentence starts with a ______.",
        ["capital letter", "full stop", "space"],
        0,
        "Capital at the start, full stop at the end."
      ),
      t.fill(
        "guided",
        "Every sentence ends with a ______ (a little dot).",
        ["full stop", ".", "period"],
        "It looks like this: ."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "Which one is a SENTENCE?",
        ["The dog runs.", "Runs dog the", "dog the runs"],
        0,
        "'The dog runs.' has order, a capital letter and a full stop — a complete idea."
      ),
      t.mcq(
        "independent",
        "Which one is a WORD PILE (not a sentence)?",
        ["Tea drink I the", "I drink tea.", "Ana reads a book."],
        0,
        "'Tea drink I the' has no order and no complete idea."
      ),
      t.match("independent", "Match each sentence part with its job.", [
        { left: "capital letter", right: "starts the sentence" },
        { left: "full stop", right: "ends the sentence" },
        { left: "space", right: "goes between words" },
      ]),

      /* 10 — speaking */
      t.speak("Say a complete sentence about your day.", "I eat breakfast."),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "The cat sits on the mat.",
        "Listen. Do you hear a sentence or a word pile?",
        ["A sentence", "A word pile", "Only one word"],
        0
      ),
      t.listenType("listening", "I drink tea in the morning.", "Listen and type the sentence.", [
        "i drink tea in the morning",
      ]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. What does Tom do every day?",
        ["He teaches the children.", "He sleeps all day.", "He eats bread."],
        0,
        "The story says: 'He teaches the children.'"
      ),
      t.mcq(
        "reading",
        "Read the story. Why does Tom love his job?",
        ["The children learn and smile.", "The school is big.", "He drinks tea."],
        0,
        "The last sentence says: the children learn and smile!"
      ),

      /* 13 — writing */
      t.write(
        "Write ONE complete sentence about you. Start with a capital letter. End with a full stop.",
        "I read books at night.",
        "WHO + WHAT THEY DO. Capital at the start, dot at the end."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "What is a sentence?",
        ["A group of words that tells one complete idea", "Any group of letters", "A word with a full stop"],
        0,
        "A sentence is a team of words with one job: telling a complete idea."
      ),
      t.mcq(
        "assessment",
        "Which sentence is dressed correctly?",
        ["The dog runs.", "the dog runs", "The dog runs"],
        0,
        "Capital letter at the start AND full stop at the end."
      ),
      t.fill(
        "assessment",
        "Put the words in order: 'reads / Ana / book / a' → Ana ______ a book.",
        ["reads"],
        "WHO first (Ana), then the action (reads)."
      ),
      t.mcq(
        "assessment",
        "'Rice eat I morning the' is ______.",
        ["a word pile (not a sentence)", "a perfect sentence", "a question"],
        0,
        "No order, no complete idea — just a pile of words."
      ),
    ];
  })(),

  passage: {
    title: "Tom the teacher",
    text: "Tom is a teacher. He works at a small school. He teaches the children every day. The children read and write. Tom says: 'A sentence starts with a big letter. A sentence ends with a full stop.' The children smile. They love his sentences. Tom drinks his tea. He is happy. His job is good.",
  },

  commonMistakes: [
    {
      wrong: "the dog runs",
      right: "The dog runs.",
      why: "Every sentence starts with a capital letter and ends with a full stop.",
    },
    {
      wrong: "Cat the dog sees the.",
      right: "The dog sees the cat.",
      why: "English word order: WHO first, then WHAT THEY DO, then WHO they do it to.",
    },
  ],

  revision: {
    keyPoints: [
      "A sentence is a group of words that tells one complete idea.",
      "Uniform: capital letter at the start, full stop (.) at the end.",
      "Word order matters: WHO, then WHAT THEY DO.",
      "A word pile is not a sentence — order and sense make the sentence.",
    ],
    keyWords: ["full stop", "complete", "idea", "to start", "to end", "space"],
    selfCheck: [
      "Can you say the three signs of a sentence?",
      "Can you spot the word pile: 'Tea I drink the'?",
      "Did you write one full sentence today — capital, words, full stop?",
    ],
  },

  homework: {
    tasks: [
      "Find three sentences around you (a sign, a message, this app). Check: capital? full stop? complete idea?",
      "Write three sentences about your day. Dress each one correctly.",
      "Fix this word pile: 'morning tea I the drink in'.",
      "Read your three sentences out loud to someone.",
    ],
  },
};
