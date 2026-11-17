import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 5 · Lesson 3 — Basic Prepositions
 *
 * "A preposition tells where something is." in, on, under, next to —
 * with be-verb place sentences: "The cat is on the table."
 */
export const p1_5_3: StructuredCourseLesson = {
  slug: "p1-5-3",
  title: "Basic Prepositions",
  subtitle: "Where things are",
  description:
    "The cat is ON the table. The pen is IN the bag. The shoe is UNDER the bed. Prepositions tell you where things are — in, on, under and next to.",
  minutes: 10,
  skills: ["reading", "writing", "listening", "speaking"],
  content: draftMeta(["st03-m02-u03-l03"]),

  introduction:
    "Close your eyes. Where is your phone right now? On the table? In your bag? Under a book? To say WHERE things are, English uses little position words: prepositions. Four of them run most of daily life: in, on, under and next to. Let's learn to place things!",

  objectives: [
    "You can say what a preposition is.",
    "You can use in, on, under and next to to say where something is.",
    "You can build place sentences with be: 'The pen is on the table.'",
  ],

  prerequisites: [
    { lessonSlug: "p1-5-1", label: "You know the be verbs (lesson 21)." },
    { lessonSlug: "p1-4-5", label: "You know articles (lesson 20)." },
  ],

  vocab: [
    {
      id: "p1-5-3-w1",
      term: "preposition",
      pos: "noun",
      definition: "a little word that tells where something is",
      example: "'On' is a preposition: the book is on the table.",
    },
    {
      id: "p1-5-3-w2",
      term: "in",
      pos: "preposition",
      definition: "inside something",
      example: "The pen is in the bag.",
    },
    {
      id: "p1-5-3-w3",
      term: "on",
      pos: "preposition",
      definition: "touching the top of something",
      example: "The cup is on the table.",
    },
    {
      id: "p1-5-3-w4",
      term: "under",
      pos: "preposition",
      definition: "below something",
      example: "The cat is under the bed.",
    },
    {
      id: "p1-5-3-w5",
      term: "next to",
      pos: "preposition",
      definition: "beside; at the side of something",
      example: "The shop is next to the bank.",
    },
    {
      id: "p1-5-3-w6",
      term: "where",
      pos: "adverb",
      definition: "in what place?",
      example: "Where is my pen?",
    },
  ],

  concept: {
    definition: "A preposition tells where something is: in, on, under, next to.",
    explanation: [
      "IN = inside. The pen is in the bag — the bag holds it. ON = touching the top. The cup is on the table. UNDER = below. The cat is under the bed. NEXT TO = beside. The lamp is next to the sofa.",
      "Place sentences follow a recipe you already know: thing + be + preposition + place. 'The cat is on the table.' The preposition is the bridge between the thing and its place.",
      "Why do prepositions matter? Because people ask WHERE a hundred times a day: Where is the bus stop? Where is my bag? Where is the milk? Prepositions are the answers!",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — IN: inside",
      text: "IN means inside something. The pen is in the bag. The milk is in the fridge. The fish is in the water. Picture the thing with a container all around it.",
      examples: ["The pen is in the bag.", "The milk is in the fridge.", "The fish is in the water."],
    },
    {
      title: "Step 2 — ON: touching the top",
      text: "ON means resting on top of something. The cup is on the table. The book is on the shelf. The cat is on the sofa. Picture the thing sitting on a surface.",
      examples: ["The cup is on the table.", "The book is on the shelf.", "The cat is on the sofa."],
    },
    {
      title: "Step 3 — UNDER: below",
      text: "UNDER means below something. The shoes are under the bed. The cat is under the table. The keys are under the newspaper. Picture the thing hiding below.",
      examples: ["The shoes are under the bed.", "The cat is under the table.", "The keys are under the newspaper."],
    },
    {
      title: "Step 4 — NEXT TO: beside",
      text: "NEXT TO means at the side of something. The lamp is next to the bed. The shop is next to the bank. I sit next to my friend. Picture the thing standing beside a friend.",
      examples: ["The lamp is next to the bed.", "The shop is next to the bank.", "I sit next to Ana."],
    },
    {
      title: "Step 5 — The place recipe",
      text: "Build place sentences like a chef: thing + be + preposition + place. 'The keys are on the small table.' 'My bag is under the chair.' Now look around you and say three true place sentences!",
      examples: ["The keys are on the table.", "My bag is under the chair.", "The tea is next to my book."],
    },
  ],

  exampleBank: {
    basic: [
      "The pen is in the bag.",
      "The cup is on the table.",
      "The cat is under the bed.",
      "The lamp is next to the sofa.",
    ],
    everyday: [
      "Where is my phone? — It's on the table!",
      "The milk is in the fridge.",
      "The bus stop is next to the shop.",
      "My shoes are under the bed.",
      "The children are in the park.",
    ],
    questions: [
      "Where is the pen?",
      "Is the cat under the table?",
      "Is the shop next to the bank?",
    ],
    negatives: [
      "The cup is not IN the table — it is ON the table.",
      "The pen is not under the bag — it is in the bag.",
      "A preposition is not a verb — it tells where, not what.",
    ],
    corrections: [
      {
        wrong: "The cup is in the table.",
        right: "The cup is on the table.",
        note: "ON = touching the top of a surface. IN = inside a container.",
      },
      {
        wrong: "The pen is on the bag. (when the pen is inside)",
        right: "The pen is in the bag.",
        note: "If the bag holds the pen, the pen is IN the bag.",
      },
    ],
  },

  dialogue: {
    title: "Where is my pen?",
    context: "Omar loses his pen before class. Ana helps him look.",
    lines: [
      { speaker: "Omar", text: "Where is my pen? I can't find it!" },
      { speaker: "Ana", text: "Is it in your bag?" },
      { speaker: "Omar", text: "No… wait. Yes! It's in my bag, under my book!" },
      { speaker: "Ana", text: "Ha! And where is your book?" },
      { speaker: "Omar", text: "On the table. Next to your tea." },
      { speaker: "Ana", text: "Careful! The tea is hot, and my cup is next to your book!" },
      { speaker: "Omar", text: "Ha! OK — the pen is in the bag, the book is on the table, and the tea is FAR from my book!" },
    ],
  },

  realLife: {
    title: "The where-game",
    text: "Play the where-game at home today: pick any object and say where it is. 'The keys are on the shelf.' 'The bread is in the cupboard.' Ten objects, ten preposition sentences — and your room has never been so well described!",
    examples: [
      "Say where your phone is right now.",
      "Say where three things in your kitchen are.",
      "Tell someone where their shoes are.",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-5-3");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "A preposition tells ______.",
        ["where something is", "what something does", "who something is"],
        0,
        "Prepositions point to places: in, on, under, next to."
      ),
      t.mcq(
        "guided",
        "The milk is ______ the fridge. (inside)",
        ["in", "on", "under"],
        0,
        "Inside a container → in the fridge."
      ),
      t.fill(
        "guided",
        "The cup is ______ the table. (touching the top)",
        ["on"],
        "It rests on the surface."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "The cat is hiding below the bed. It is ______ the bed.",
        ["under", "on", "next to"],
        0,
        "Below → under the bed."
      ),
      t.mcq(
        "independent",
        "The shop stands beside the bank. It is ______ the bank.",
        ["next to", "in", "under"],
        0,
        "Beside → next to."
      ),
      t.match("independent", "Match each thing with its place sentence.", [
        { left: "fish", right: "in the water" },
        { left: "cup", right: "on the table" },
        { left: "shoes", right: "under the bed" },
        { left: "lamp", right: "next to the sofa" },
      ]),

      /* 10 — speaking */
      t.speak("Say where your phone is right now.", "My phone is on the table."),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "The keys are under the newspaper.",
        "Listen. Where are the keys?",
        ["Under the newspaper", "On the newspaper", "In the newspaper"],
        0
      ),
      t.listenType("listening", "The cat is on the sofa.", "Listen and type the preposition.", ["on"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. Where is Tom's flat?",
        ["On the third floor", "Under the shop", "Next to the park"],
        0,
        "The story says: 'His flat is on the third floor.'"
      ),
      t.fill(
        "reading",
        "Read the story. Tom's keys are ______ the door, on a small table.",
        ["next to"],
        "The table stands beside the door."
      ),

      /* 13 — writing */
      t.write(
        "Write ONE sentence about where something is, using in, on, under or next to.",
        "My book is on the table.",
        "Thing + is + preposition + place."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "Which preposition means INSIDE?",
        ["in", "on", "next to"],
        0,
        "In = inside: the pen is in the bag."
      ),
      t.mcq(
        "assessment",
        "Your shoes are below the bed. They are ______ the bed.",
        ["under", "on", "in"],
        0,
        "Below = under."
      ),
      t.fill(
        "assessment",
        "Complete: The lamp is ______ to the bed. (beside it)",
        ["next"],
        "Next to = at the side of."
      ),
      t.mcq(
        "assessment",
        "Which sentence uses ON correctly?",
        ["The cup is on the table.", "The cup is on the fridge. (inside it)", "The cup is on under the table."],
        0,
        "On = resting on a surface: on the table."
      ),
    ];
  })(),

  passage: {
    title: "Tom's small flat",
    text: "Tom lives in a small flat. His flat is on the third floor. The kitchen is next to the door. In the kitchen, the tea is in a green cup, and the cup is on a small table. Tom's cat is under the sofa. His shoes are under the bed. His keys are next to the door. 'Where is my phone?' thinks Tom. Ha! It is in his hand!",
  },

  commonMistakes: [
    {
      wrong: "The cup is in the table.",
      right: "The cup is on the table.",
      why: "ON touches the top of a surface. IN is for inside containers — a bag, a box, a fridge.",
    },
    {
      wrong: "The pen is on the bag. (the pen is inside)",
      right: "The pen is in the bag.",
      why: "If the bag holds the pen, the pen is IN the bag.",
    },
  ],

  revision: {
    keyPoints: [
      "A preposition tells where something is.",
      "IN = inside. ON = touching the top. UNDER = below. NEXT TO = beside.",
      "Place recipe: thing + be + preposition + place.",
      "'The cat is on the table.' — four words, one clear picture.",
    ],
    keyWords: ["preposition", "in", "on", "under", "next to", "where"],
    selfCheck: [
      "Where is your phone right now? Say the full sentence.",
      "Which preposition means 'below'?",
      "Can you say where three things in your room are?",
    ],
  },

  homework: {
    tasks: [
      "Play the where-game: say where ten things in your home are.",
      "Write four sentences: one with in, one with on, one with under, one with next to.",
      "Tell someone where their shoes are — in a full sentence.",
      "Draw your room. Label three things with preposition sentences.",
    ],
  },
};
