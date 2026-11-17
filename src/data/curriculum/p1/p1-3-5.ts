import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 3 · Lesson 5 — Basic Pronouns
 *
 * "A pronoun takes the place of a noun." I, you, he, she, it, we, they —
 * with noun→pronoun swaps (Sara runs → She runs) and the pronoun rules
 * for people, things and groups.
 */
export const p1_3_5: StructuredCourseLesson = {
  slug: "p1-3-5",
  title: "Basic Pronouns",
  subtitle: "Small words that replace nouns",
  description:
    "Sara runs. She runs. The dog sleeps. It sleeps. Pronouns take the place of nouns so we do not repeat names — meet I, you, he, she, it, we and they.",
  minutes: 12,
  skills: ["reading", "writing", "listening", "speaking"],
  content: draftMeta(["st03-m02-u02-l01"]),

  introduction:
    "Imagine a friend who says your name in every sentence: 'Ana, Ana's book, Ana's tea, Ana's cat…' Tiring, right? English has a fix: small words that REPLACE nouns. 'Ana' becomes she. 'The dog' becomes it. These little words are pronouns — and they are everywhere.",

  objectives: [
    "You can say what a pronoun is.",
    "You can name the seven pronouns: I, you, he, she, it, we, they.",
    "You can change a noun into the right pronoun: 'Sara runs' → 'She runs.'",
  ],

  prerequisites: [
    { lessonSlug: "p1-3-3", label: "You know nouns (lesson 13)." },
    { lessonSlug: "p1-3-4", label: "You know verbs (lesson 14)." },
  ],

  vocab: [
    {
      id: "p1-3-5-w1",
      term: "pronoun",
      pos: "noun",
      definition: "a small word that takes the place of a noun",
      example: "'She' takes the place of 'Sara'.",
    },
    {
      id: "p1-3-5-w2",
      term: "to take the place of",
      pos: "phrase",
      definition: "to replace; to stand in for something",
      example: "A pronoun takes the place of a noun.",
    },
    {
      id: "p1-3-5-w3",
      term: "he",
      pos: "pronoun",
      definition: "the word for ONE man or boy",
      example: "Omar is my friend. He is kind.",
    },
    {
      id: "p1-3-5-w4",
      term: "she",
      pos: "pronoun",
      definition: "the word for ONE woman or girl",
      example: "Ana is here. She reads a book.",
    },
    {
      id: "p1-3-5-w5",
      term: "it",
      pos: "pronoun",
      definition: "the word for ONE thing or one animal",
      example: "The book is red. It is on the table.",
    },
    {
      id: "p1-3-5-w6",
      term: "we",
      pos: "pronoun",
      definition: "the word for a group that includes YOU",
      example: "Ana and I read. We read.",
    },
    {
      id: "p1-3-5-w7",
      term: "they",
      pos: "pronoun",
      definition: "the word for more people or things",
      example: "The dogs run. They run fast.",
    },
  ],

  concept: {
    definition: "A pronoun takes the place of a noun. We use pronouns so we do not repeat the same name again and again.",
    explanation: [
      "The seven pronouns are: I, you, he, she, it, we, they. I and you you already know. Today we add the other five.",
      "He is for one man or boy. She is for one woman or girl. It is for one thing — and usually for animals too. We is for a group that includes you. They is for any group of people or things.",
      "Watch the magic: 'Sara runs.' → 'She runs.' 'The dog sleeps.' → 'It sleeps.' 'Tom and Ana read.' → 'They read.' Same sentence, lighter, faster, natural.",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — I and you (you know these!)",
      text: "When you talk about yourself, say I — always a capital letter. When you talk to the person in front of you, say you. 'I am a student. You are my friend.'",
      examples: ["I am a student.", "You are my friend.", "I read. You read."],
    },
    {
      title: "Step 2 — He and she: one person",
      text: "One man or boy → he. One woman or girl → she. 'Omar is here. He is happy.' 'Ana reads. She reads fast.' He and she only ever mean ONE person.",
      examples: ["Omar is here. He is happy.", "Ana reads. She reads fast.", "My father works. He works at a school."],
    },
    {
      title: "Step 3 — It: things and animals",
      text: "One thing → it. A book? It. A table? It. Usually an animal too: a dog, a cat — it. 'The book is red. It is on the table.' 'The dog runs. It runs fast.'",
      examples: ["The book is red. It is on the table.", "The dog runs. It runs fast.", "My tea is hot. It is very hot!"],
    },
    {
      title: "Step 4 — We and they: groups",
      text: "A group with YOU in it → we. 'Ana and I read. We read.' Any other group → they. 'Tom and Ana read. They read.' 'The dogs run. They run.'",
      examples: ["Ana and I read. We read.", "Tom and Ana read. They read.", "The dogs run. They run fast."],
    },
    {
      title: "Step 5 — The pronoun swap",
      text: "Now the game that makes you fluent: catch the noun, swap the pronoun. 'Sara runs.' → 'She runs.' 'The pen is blue.' → 'It is blue.' 'My mother and father work.' → 'They work.' Say the swap out loud!",
      examples: [
        "Sara runs. → She runs.",
        "The pen is blue. → It is blue.",
        "My mother and father work. → They work.",
      ],
    },
  ],

  exampleBank: {
    basic: [
      "I am a student.",
      "You are my friend.",
      "He is a teacher.",
      "She reads a book.",
      "It is a pen.",
    ],
    everyday: [
      "Ana is my sister. She drinks tea.",
      "My cat sleeps. It sleeps all day.",
      "Tom and Ana read. They read at night.",
      "You and I learn English. We learn every day.",
    ],
    questions: [
      "Is Sara a 'he' or a 'she'?",
      "What pronoun takes the place of 'the dog'?",
      "Do you say 'they' for one person or many?",
    ],
    negatives: [
      "He is not for a woman — use she.",
      "It is not for people — use he or she.",
      "We is not for a group without you — use they.",
    ],
    corrections: [
      {
        wrong: "Ana is here. He reads a book.",
        right: "Ana is here. She reads a book.",
        note: "Ana is a woman — the pronoun is she, not he.",
      },
      {
        wrong: "The dog runs. They runs fast.",
        right: "The dog runs. It runs fast.",
        note: "One dog = it. They is for more than one.",
      },
    ],
  },

  dialogue: {
    title: "The pronoun swap game",
    context: "Ms Reed says a sentence with a name. The students say it again with a pronoun.",
    lines: [
      { speaker: "Ms Reed", text: "Swap game! 'Sara runs.' Now with a pronoun!" },
      { speaker: "Ana", text: "She runs!" },
      { speaker: "Ms Reed", text: "Great! 'The dog sleeps.'" },
      { speaker: "Omar", text: "It sleeps!" },
      { speaker: "Ms Reed", text: "Perfect! 'Tom and Ana read.'" },
      { speaker: "Ana", text: "They read!" },
      { speaker: "Ms Reed", text: "And 'Ana and Omar learn English'?" },
      { speaker: "Omar", text: "WE learn English!" },
    ],
  },

  realLife: {
    title: "Pronouns at home",
    text: "Your family is a pronoun playground. Point at your mother: she. Your father: he. The cat: it. Your family together (with you): we. Your friends: they. Play the swap game at dinner: say a name, then say the pronoun.",
    examples: [
      "Say a family member's name, then their pronoun.",
      "Point at three things and say 'it' sentences.",
      "Say: 'We eat dinner.' — because you are in the group!",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-3-5");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "A pronoun takes the place of a ______.",
        ["noun", "verb", "letter"],
        0,
        "Pronouns replace nouns: Sara → she."
      ),
      t.mcq(
        "guided",
        "Omar is a boy. Which pronoun takes the place of Omar?",
        ["he", "she", "it"],
        0,
        "One boy or man → he."
      ),
      t.fill(
        "guided",
        "Ana is a woman. ______ is my friend.",
        ["she"],
        "One woman or girl → she."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "The book is on the table. ______ is red.",
        ["It", "She", "They"],
        0,
        "One thing → it."
      ),
      t.mcq(
        "independent",
        "Tom and Sara play. ______ play in the park.",
        ["They", "He", "It"],
        0,
        "More than one person → they."
      ),
      t.match("independent", "Match each noun with its pronoun.", [
        { left: "Sara (one woman)", right: "she" },
        { left: "the pen (one thing)", right: "it" },
        { left: "Omar (one man)", right: "he" },
        { left: "the dogs (many)", right: "they" },
      ]),

      /* 10 — speaking */
      t.speak("Say the pronoun swap: 'Sara runs.' becomes…", "She runs."),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "She reads a book.",
        "Listen. Which pronoun do you hear?",
        ["she", "he", "they"],
        0
      ),
      t.listenType("listening", "They play in the park.", "Listen and type the pronoun you hear.", ["they"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. What pronoun takes the place of Grandpa Joe?",
        ["he", "she", "it"],
        0,
        "Grandpa Joe is one man — he."
      ),
      t.fill(
        "reading",
        "Read the story. The twins are noisy. ______ sing and dance.",
        ["they"],
        "Two children = a group → they."
      ),

      /* 13 — writing */
      t.write(
        "Change the noun to a pronoun: 'The dog sleeps.' Write the new sentence.",
        "It sleeps.",
        "One animal → it."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "What is a pronoun?",
        ["A small word that takes the place of a noun", "An action word", "A capital letter"],
        0,
        "Pronouns replace nouns so we do not repeat names."
      ),
      t.mcq(
        "assessment",
        "Which pronoun is for ONE THING?",
        ["it", "he", "we"],
        0,
        "It replaces one thing — a book, a pen, a dog."
      ),
      t.fill(
        "assessment",
        "My mother and I cook. ______ cook rice.",
        ["we"],
        "A group with YOU in it → we."
      ),
      t.mcq(
        "assessment",
        "'Ana and Tom read.' → ______ read.",
        ["They", "She", "It"],
        0,
        "Two people = a group → they."
      ),
    ];
  })(),

  passage: {
    title: "Pronouns at Grandma's house",
    text: "Rina loves her family. Her grandma is kind. She cooks rice. Her grandpa is funny. He tells stories. Rina has two little cousins. They are noisy! They sing and dance. Rina's cat is old. It sleeps all day. On Sundays, all the family eats together. Rina says: 'We are a big family. I love them!'",
  },

  commonMistakes: [
    {
      wrong: "Ana is here. He reads a book.",
      right: "Ana is here. She reads a book.",
      why: "Ana is a woman — one woman or girl is always she.",
    },
    {
      wrong: "The dog runs. They runs fast.",
      right: "The dog runs. It runs fast.",
      why: "One dog = it. They is for more than one person or thing.",
    },
    {
      wrong: "I talks to my friend.",
      right: "I talk to my friend.",
      why: "With I, the verb has no s. (And with he/she/it, it does: she talks.)",
    },
  ],

  revision: {
    keyPoints: [
      "A pronoun takes the place of a noun.",
      "The seven pronouns: I, you, he, she, it, we, they.",
      "He = one man/boy. She = one woman/girl. It = one thing (and usually animals).",
      "We = a group with you in it. They = any other group.",
      "Swap game: 'Sara runs.' → 'She runs.'",
    ],
    keyWords: ["pronoun", "to take the place of", "he", "she", "it", "we", "they"],
    selfCheck: [
      "Can you say all seven pronouns in five seconds?",
      "What pronoun replaces your best friend's name?",
      "What pronoun replaces 'the books' (more than one)?",
    ],
  },

  homework: {
    tasks: [
      "Write the seven pronouns on paper: I, you, he, she, it, we, they.",
      "Play the swap game five times: say a name, then the pronoun sentence.",
      "Point at three things in your home and say 'it' sentences about them.",
      "Say one true 'we' sentence about your family.",
    ],
  },
};
