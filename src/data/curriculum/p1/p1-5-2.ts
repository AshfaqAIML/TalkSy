import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 5 · Lesson 2 — Basic Adjectives
 *
 * "An adjective describes a noun." Opposite pairs (big/small, hot/cold),
 * adjectives before nouns (a big dog) and after be (The dog is big).
 */
export const p1_5_2: StructuredCourseLesson = {
  slug: "p1-5-2",
  title: "Basic Adjectives",
  subtitle: "Words that describe",
  description:
    "A big dog. A cold day. A happy child. Adjectives describe nouns — they tell you what things are like. Learn the great describing pairs and where adjectives go.",
  minutes: 12,
  skills: ["reading", "writing", "listening", "speaking"],
  content: draftMeta(["st03-m02-u03-l01"]),

  introduction:
    "Nouns name the world. Adjectives PAINT it. A dog — but what kind of dog? A big dog? A small dog? A happy dog? With adjectives, your English turns from grey into colour. Today you will learn eight describing words and where they live in a sentence.",

  objectives: [
    "You can say what an adjective is.",
    "You can use eight describing pairs: big, small, hot, cold, new, old, happy, sad.",
    "You can put an adjective in the right place: before the noun or after be.",
  ],

  prerequisites: [
    { lessonSlug: "p1-5-1", label: "You know the be verbs am, is, are (lesson 21)." },
    { lessonSlug: "p1-3-3", label: "You know nouns (lesson 13)." },
  ],

  vocab: [
    {
      id: "p1-5-2-w1",
      term: "adjective",
      pos: "noun",
      definition: "a word that describes a noun — it tells what something is like",
      example: "'Big' is an adjective: a big dog.",
    },
    {
      id: "p1-5-2-w2",
      term: "to describe",
      pos: "verb",
      definition: "to say what something is like",
      example: "Describe your house: is it big or small?",
    },
    {
      id: "p1-5-2-w3",
      term: "big",
      pos: "adjective",
      definition: "large; not small",
      example: "An elephant is big.",
    },
    {
      id: "p1-5-2-w4",
      term: "small",
      pos: "adjective",
      definition: "little; not big",
      example: "A mouse is small.",
    },
    {
      id: "p1-5-2-w5",
      term: "hot",
      pos: "adjective",
      definition: "very warm (like fire or the summer sun)",
      example: "The tea is hot.",
    },
    {
      id: "p1-5-2-w6",
      term: "cold",
      pos: "adjective",
      definition: "not warm (like ice or winter)",
      example: "The water is cold.",
    },
    {
      id: "p1-5-2-w7",
      term: "new",
      pos: "adjective",
      definition: "made or bought a short time ago",
      example: "I have a new pen.",
    },
    {
      id: "p1-5-2-w8",
      term: "old",
      pos: "adjective",
      definition: "not new; from a long time ago",
      example: "My grandpa is old and wise.",
    },
  ],

  concept: {
    definition: "An adjective describes a noun. It tells what something is like: big, small, hot, cold, new, old, happy, sad.",
    explanation: [
      "A noun alone is plain: dog. Add an adjective and you can SEE it: a big dog, a small dog, a happy dog. Adjectives are the paint of language.",
      "Adjectives have two homes. Home one: right before the noun — 'a big dog', 'a cold day'. Home two: after a be verb — 'The dog is big', 'The day is cold'. Both are correct; you choose.",
      "Many adjectives come in opposite pairs: big/small, hot/cold, new/old, happy/sad. Learn them as pairs and you get two words for the price of one!",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — Adjectives paint nouns",
      text: "Say 'cat'. Plain cat. Now say 'a big cat'. 'A small cat'. 'A happy cat'. Different pictures, right? The adjective changes what you see. That is its power.",
      examples: ["A cat → a big cat.", "A house → a small house.", "A day → a hot day."],
    },
    {
      title: "Step 2 — The opposite pairs",
      text: "Learn adjectives as twins: big ↔ small, hot ↔ cold, new ↔ old, happy ↔ sad. Each pair is a two-for-one deal. Ask yourself: is the tea hot or cold? Is the book new or old?",
      examples: ["big ↔ small", "hot ↔ cold", "new ↔ old", "happy ↔ sad"],
    },
    {
      title: "Step 3 — Home one: before the noun",
      text: "The adjective sits directly before its noun. A BIG dog. A COLD drink. A NEW pen. An OLD book. In English, the paint goes before the thing it paints.",
      examples: ["a big dog", "a cold drink", "a new pen", "an old book", "a happy child"],
    },
    {
      title: "Step 4 — Home two: after be",
      text: "The other home is after a be verb: 'The dog is big.' 'The tea is hot.' 'We are happy.' Here the adjective comes at the end and describes the whole subject.",
      examples: ["The dog is big.", "The tea is hot.", "The book is old.", "We are happy."],
    },
    {
      title: "Step 5 — Describe your world",
      text: "Now play the describing game with everything you see: a big table, a small cup, a hot day, a cold drink. Ten adjectives a day — and your English becomes colourful fast.",
      examples: ["a big city", "a small shop", "a hot summer", "a cold morning"],
    },
  ],

  exampleBank: {
    basic: [
      "a big dog",
      "a small cat",
      "hot tea",
      "cold water",
      "a new book",
    ],
    everyday: [
      "I need a cold drink.",
      "It is a hot day.",
      "My grandpa has an old car.",
      "The children are happy.",
      "This is my new phone.",
    ],
    questions: [
      "Is your house big or small?",
      "Is the tea hot or cold?",
      "Is your phone new or old?",
    ],
    negatives: [
      "An elephant is not small.",
      "Ice is not hot.",
      "An adjective is not a noun — it describes a noun.",
    ],
    corrections: [
      {
        wrong: "a dog big",
        right: "a big dog",
        note: "The adjective goes BEFORE the noun: big dog.",
      },
      {
        wrong: "The tea hot is.",
        right: "The tea is hot.",
        note: "With be, the order is: subject + be + adjective.",
      },
    ],
  },

  dialogue: {
    title: "The new market",
    context: "Ana and Omar visit the new market in town. Everything needs describing!",
    lines: [
      { speaker: "Omar", text: "Wow! This market is big!" },
      { speaker: "Ana", text: "And it's new. Look — a small café! I'm hot. Let's drink something cold." },
      { speaker: "Omar", text: "Good idea. Two cold teas, please!" },
      { speaker: "Ana", text: "Look at that old clock. It's beautiful!" },
      { speaker: "Omar", text: "My grandpa has an old clock at home. He is happy when we visit it." },
      { speaker: "Ana", text: "Ha! You visit a clock?" },
      { speaker: "Omar", text: "We drink tea and talk. Then we are all happy!" },
    ],
  },

  realLife: {
    title: "Describe your day",
    text: "Adjectives make small talk possible: 'Hot today!' 'Nice bag!' 'Big city!' Try describing three things today — the weather, your food, one thing you own. Big or small? Hot or cold? New or old?",
    examples: [
      "Describe the weather: 'It is a cold day.'",
      "Describe your dinner: 'The rice is hot.'",
      "Describe something you love: 'My phone is new.'",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-5-2");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "An adjective ______.",
        ["describes a noun", "does an action", "names a person"],
        0,
        "Adjectives tell what something is like: big, small, hot, cold."
      ),
      t.mcq(
        "guided",
        "The opposite of BIG is ______.",
        ["small", "hot", "new"],
        0,
        "Big ↔ small — an opposite pair."
      ),
      t.fill(
        "guided",
        "The opposite of HOT is ______.",
        ["cold"],
        "Fire is hot, ice is…"
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "Which phrase has the adjective in the RIGHT place?",
        ["a small cat", "a cat small", "small a cat"],
        0,
        "Adjective before the noun: a small cat."
      ),
      t.mcq(
        "independent",
        "The tea is very hot today. 'Hot' is ______.",
        ["an adjective", "a noun", "a verb"],
        0,
        "Hot describes the tea — it is an adjective."
      ),
      t.match("independent", "Match each adjective with its opposite.", [
        { left: "big", right: "small" },
        { left: "new", right: "old" },
        { left: "happy", right: "sad" },
        { left: "hot", right: "cold" },
      ]),

      /* 10 — speaking */
      t.speak("Describe today's weather with an adjective.", "It is hot today."),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "The dog is big and happy.",
        "Listen. Which adjectives do you hear?",
        ["big and happy", "small and sad", "old and cold"],
        0
      ),
      t.listenType("listening", "I need a cold drink.", "Listen and type the adjective.", ["cold"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. What is Grandpa Ali's house like?",
        ["Small, old and warm", "Big, new and cold", "Big, old and noisy"],
        0,
        "The story says: 'It is small and very old… the house is warm.'"
      ),
      t.fill(
        "reading",
        "Read the story. Grandpa Ali's tea is ______ and good.",
        ["hot"],
        "Fresh from the pot — careful, it burns!"
      ),

      /* 13 — writing */
      t.write(
        "Write one sentence with an adjective BEFORE a noun: 'a ___ ___.'",
        "I have a big dog.",
        "Adjective + noun: a small cat, a hot day, a new pen…"
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "What is an adjective?",
        ["A word that describes a noun", "A word that does an action", "A word that names a person"],
        0,
        "Adjectives describe: a big dog, a cold day."
      ),
      t.mcq(
        "assessment",
        "Which word is an adjective?",
        ["happy", "teacher", "sleep"],
        0,
        "Happy describes how someone feels — an adjective."
      ),
      t.fill(
        "assessment",
        "Put the adjective in the right place: dog / big / a → ______",
        ["a big dog"],
        "The paint goes before the thing it paints."
      ),
      t.mcq(
        "assessment",
        "Adjectives have two homes. Which are they?",
        ["Before the noun and after be", "At the start and end of sentences", "Before and after the verb"],
        0,
        "A big dog. / The dog is big. — both are correct homes.",
      ),
    ];
  })(),

  passage: {
    title: "Grandpa Ali's house",
    text: "Grandpa Ali lives in an old house. It is small and very old, but it is beautiful. In summer, the house is warm. Grandpa Ali is happy there. He drinks hot tea and tells long stories. The children are never sad at his house. His cat is old too, and very fat. 'Old things are good things,' says Grandpa Ali. 'New is nice, but old is family.'",
  },

  commonMistakes: [
    {
      wrong: "a dog big",
      right: "a big dog",
      why: "English puts the adjective directly before its noun: a big dog.",
    },
    {
      wrong: "The tea hot is.",
      right: "The tea is hot.",
      why: "With a be verb, the order is subject + be + adjective.",
    },
  ],

  revision: {
    keyPoints: [
      "An adjective describes a noun — it tells what something is like.",
      "Opposite pairs: big/small, hot/cold, new/old, happy/sad.",
      "Home one: before the noun — a big dog.",
      "Home two: after be — The dog is big.",
      "Adjectives make your English colourful — use them every day.",
    ],
    keyWords: ["adjective", "to describe", "big", "small", "hot", "cold", "new", "old"],
    selfCheck: [
      "Can you say the four opposite pairs from memory?",
      "Is 'a small cat' or 'a cat small' correct?",
      "Can you describe the weather right now with one adjective?",
    ],
  },

  homework: {
    tasks: [
      "Write the four opposite pairs: big/small, hot/cold, new/old, happy/sad.",
      "Describe five things in your home with adjectives: 'a big table…'",
      "Describe today: 'It is a ___ day.'",
      "Describe three people you love with adjectives after be: 'My mother is…'",
    ],
  },
};
