import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 2 · Lesson 4 — Vocabulary Categories
 *
 * Grouping words by idea: colours, numbers, family, animals, food and school
 * things — 6 categories × 4 words. Categories make vocabulary stick.
 */
export const p1_2_4: StructuredCourseLesson = {
  slug: "p1-2-4",
  title: "Vocabulary Categories",
  subtitle: "Words that live in groups",
  description:
    "A category is a group of words with the same idea. Meet six useful groups — colours, numbers, family, animals, food and school things — four friendly words in each.",
  minutes: 12,
  skills: ["reading", "listening", "speaking", "writing"],
  content: draftMeta([
    "st02-m03-u01-l01",
    "st02-m05-u02-l01",
    "st02-m06-u04-l01",
    "st02-m07-u02-l01",
    "st02-m08-u01-l02",
  ]),

  introduction:
    "Your vocabulary is growing! Twenty-four new words are waiting for you today. Do not worry — you will not learn them one by one. You will learn them in families, and families are easy. Six groups, four words each. Ready? Let's meet them.",

  objectives: [
    "You can say what a category is.",
    "You can name four words in six categories: colours, numbers, family, animals, food and school things.",
    "You can find the word that does not belong in a group.",
  ],

  prerequisites: [
    { lessonSlug: "p1-2-2", label: "You can read short words and sight words (lesson 7)." },
  ],

  vocab: [
    {
      id: "p1-2-4-w1",
      term: "category",
      pos: "noun",
      definition: "a group of words or things with the same idea",
      example: "Red and blue are in the colour category.",
    },
    {
      id: "p1-2-4-w2",
      term: "colour",
      pos: "noun",
      definition: "what you see when you look at red, blue or green",
      example: "The sky is the colour blue.",
    },
    {
      id: "p1-2-4-w3",
      term: "number",
      pos: "noun",
      definition: "a word like one, two or three that tells how many",
      example: "Three is my lucky number.",
    },
    {
      id: "p1-2-4-w4",
      term: "family",
      pos: "noun",
      definition: "the people you live with and love: mother, father, sister, brother",
      example: "My family is big.",
    },
    {
      id: "p1-2-4-w5",
      term: "animal",
      pos: "noun",
      definition: "a living thing like a cat, dog, bird or fish",
      example: "A cat is an animal.",
    },
    {
      id: "p1-2-4-w6",
      term: "food",
      pos: "noun",
      definition: "the things we eat, like bread, rice, eggs and milk",
      example: "Bread and milk are food.",
    },
  ],

  concept: {
    definition: "A category is a group of words with the same idea. Red, blue, green and yellow are in the colour category.",
    explanation: [
      "Your brain loves groups. It is much easier to remember 'four colours' than four separate lonely words. When you learn words in categories, they hold hands and help each other stay in your memory.",
      "Today you will meet six categories: colours, numbers, family, animals, food and school things. Each one has four friendly words.",
      "Categories also help you FIND words. When a word is on the tip of your tongue, ask yourself: which category is it in? Colours? Food? The search becomes smaller.",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — Colours: red, blue, green, yellow",
      text: "Colours paint the world. Red like a tomato. Blue like the sky. Green like grass. Yellow like the sun. Look around you right now — how many colours can you see?",
      examples: ["The apple is red.", "The sky is blue.", "The grass is green.", "The sun is yellow."],
    },
    {
      title: "Step 2 — Numbers: one, two, three, four, five",
      text: "Numbers tell us how many. One, two, three, four, five — say them while counting your fingers. Numbers are some of the oldest and most useful words in any language.",
      examples: ["One cat.", "Two dogs.", "Three eggs.", "I have four books.", "Five fingers on one hand."],
    },
    {
      title: "Step 3 — Family: mother, father, sister, brother",
      text: "Family words are warm words. Mother and father are your parents. A sister is a girl in your family. A brother is a boy in your family. Say each word and think of a person you love.",
      examples: ["My mother cooks rice.", "My father drives a taxi.", "My sister has a cat.", "My brother reads books."],
    },
    {
      title: "Step 4 — Animals: cat, dog, bird, fish",
      text: "Animals are our neighbours on Earth. The cat says meow. The dog says woof. The bird sings in the tree. The fish swims in the water. Which animal do you like best?",
      examples: ["The cat is on the mat.", "The dog runs in the park.", "A bird sings.", "A fish swims."],
    },
    {
      title: "Step 5 — Food: bread, rice, egg, milk",
      text: "Food words are survival words! Bread for breakfast. Rice for dinner. An egg — small and strong. Milk to drink. You will use these words at every meal.",
      examples: ["I eat bread and eggs.", "Rice is good with fish.", "I drink milk in the morning."],
    },
    {
      title: "Step 6 — School things: book, pen, chair, table",
      text: "And the tools of learning: a book to read, a pen to write, a chair to sit on, a table to work at. These four words live in every classroom in the world.",
      examples: ["I read a book.", "I write with a pen.", "I sit on a chair.", "The pen is on the table."],
    },
  ],

  exampleBank: {
    basic: [
      "Red, blue, green and yellow are colours.",
      "One, two, three are numbers.",
      "Mother and father are family.",
      "A cat is an animal.",
    ],
    everyday: [
      "The apple is red.",
      "I eat rice and fish.",
      "My sister has a dog.",
      "I read a book at the table.",
      "Two teas, please.",
    ],
    questions: [
      "What colour is the sky?",
      "How many eggs do you need?",
      "Is a fish an animal?",
    ],
    negatives: [
      "Bread is not a colour.",
      "A pen is not an animal.",
      "Blue is not a number.",
    ],
    corrections: [
      {
        wrong: "Red is a food.",
        right: "Red is a colour.",
        note: "Red describes how things look. You cannot eat a colour!",
      },
      {
        wrong: "A chair is an animal.",
        right: "A chair is a school thing.",
        note: "Animals are alive — they eat, move and grow. A chair just sits there!",
      },
    ],
  },

  dialogue: {
    title: "The category game",
    context: "Ana and Omar play a word game with Ms Reed. She says a word — they say the category.",
    lines: [
      { speaker: "Ms Reed", text: "Category game! I say a word, you say the group. Ready?" },
      { speaker: "Omar", text: "Ready!" },
      { speaker: "Ms Reed", text: "Green." },
      { speaker: "Ana", text: "Colours!" },
      { speaker: "Ms Reed", text: "Perfect. Fish." },
      { speaker: "Omar", text: "Animals! And food… fish is both!" },
      { speaker: "Ms Reed", text: "Very good, Omar! Some words live in two groups." },
    ],
  },

  realLife: {
    title: "Sort your world into categories",
    text: "Categories turn the world into a game. In the kitchen, name the food. In the street, name the colours. At home, name your family in English. Four words here, four words there — soon you have hundreds.",
    examples: [
      "Open your kitchen cupboard. Say the food words you know.",
      "Look out of the window. Name two colours you see.",
      "Count your family members in English: one, two, three…",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-2-4");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "Red, blue and green are ______.",
        ["colours", "numbers", "animals"],
        0,
        "Red, blue, green and yellow are the colour words."
      ),
      t.mcq(
        "guided",
        "Bread, rice, eggs and milk are ______.",
        ["food", "family", "school things"],
        0,
        "We eat food: bread, rice, eggs and milk."
      ),
      t.fill(
        "guided",
        "My ______ cooks rice for dinner. (She is your parent.)",
        ["mother"],
        "The word starts with m — mother or mum."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "Which word does NOT belong in the family category?",
        ["brother", "father", "table"],
        2,
        "A table is a school thing. Family words are mother, father, sister, brother."
      ),
      t.mcq(
        "independent",
        "Which word does NOT belong in the animal category?",
        ["cat", "pen", "bird"],
        1,
        "A pen is a school thing — you write with it."
      ),
      t.match("independent", "Match each word with its category.", [
        { left: "yellow", right: "colour" },
        { left: "three", right: "number" },
        { left: "sister", right: "family" },
        { left: "chair", right: "school thing" },
      ]),

      /* 10 — speaking */
      t.speak("Name two colours out loud.", "Red and blue"),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "green",
        "Listen. Which category is this word in?",
        ["Colours", "Numbers", "Food"],
        0
      ),
      t.listenChoice(
        "listening",
        "My brother has a dog.",
        "Listen. Which family word do you hear?",
        ["brother", "sister", "mother"],
        0
      ),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. What does Ana eat?",
        ["Bread and an egg", "Rice and fish", "Bread and rice"],
        0,
        "Ana eats bread and an egg."
      ),
      t.fill(
        "reading",
        "Read the story. Ana writes with a ______.",
        ["pen"],
        "You write with it — p-e-n."
      ),

      /* 13 — writing */
      t.write(
        "Write ONE word from the food category.",
        "bread",
        "Bread, rice, egg or milk — any one is good."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "A category is ______.",
        ["a group of words with the same idea", "one very long word", "a type of letter"],
        0,
        "Categories group words: colours, numbers, family, animals, food, school things."
      ),
      t.mcq(
        "assessment",
        "Which word is a NUMBER?",
        ["four", "green", "fish"],
        0,
        "Four tells you how many — it is a number."
      ),
      t.fill(
        "assessment",
        "My father and my ______ are my parents.",
        ["mother"],
        "She is your female parent."
      ),
      t.mcq(
        "assessment",
        "Which word does NOT belong: cat, dog, book, bird?",
        ["cat", "dog", "book"],
        2,
        "A book is a school thing. The others are animals."
      ),
    ];
  })(),

  passage: {
    title: "Ana's morning",
    text: "Ana gets up. 'Good morning!' she says. Her mother cooks bread and an egg. Ana drinks milk. Her brother eats rice. After breakfast, Ana sits on her chair at the table. She reads her book and writes with her pen. Her cat sleeps. Her fish swims. The sky is blue and the sun is yellow. What a good morning!",
  },

  commonMistakes: [
    {
      wrong: "Red is a food.",
      right: "Red is a colour.",
      why: "Red describes how things look. You cannot eat it!",
    },
    {
      wrong: "A chair is an animal.",
      right: "A chair is a school thing.",
      why: "Animals are alive — they eat, move and grow. A chair is a thing you sit on.",
    },
  ],

  revision: {
    keyPoints: [
      "A category is a group of words with the same idea.",
      "Colours: red, blue, green, yellow.",
      "Numbers: one, two, three, four, five.",
      "Family: mother, father, sister, brother.",
      "Animals: cat, dog, bird, fish. Food: bread, rice, egg, milk.",
      "School things: book, pen, chair, table.",
    ],
    keyWords: ["category", "colour", "number", "family", "animal", "food"],
    selfCheck: [
      "Can you say four colours without looking?",
      "Can you name four animals in English?",
      "Can you find the odd word out: bread, milk, dog?",
    ],
  },

  homework: {
    tasks: [
      "Draw six boxes on paper. Label them: colours, numbers, family, animals, food, school things. Put one word in each box.",
      "Name your family members in English: mother, father, sister, brother…",
      "At your next meal, say the food words in English.",
      "Play the category game with a friend: one says a word, the other says the group.",
    ],
  },
};
