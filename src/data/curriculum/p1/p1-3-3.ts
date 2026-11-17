import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 3 · Lesson 3 — Nouns
 *
 * "A noun is the name of a person, place, animal, or thing." Four
 * categories, nouns inside complete sentences, capital letters for names,
 * and a first look at nouns as subjects and objects of actions.
 */
export const p1_3_3: StructuredCourseLesson = {
  slug: "p1-3-3",
  title: "Nouns",
  subtitle: "Names of people, places, animals and things",
  description:
    "A noun is the name of a person, place, animal, or thing. Teacher, school, dog, book — learn to find nouns everywhere and use them in complete sentences.",
  minutes: 12,
  skills: ["reading", "writing", "listening", "speaking"],
  content: draftMeta(["st04-m01-u01-l01"]),

  introduction:
    "Welcome to grammar! Do not fear that word — grammar is just the study of how words work together, and you already know more than you think. Today you will meet the most important word family in English: nouns. A noun is the name of something — and by the end of this lesson, you will find nouns everywhere you look.",

  objectives: [
    "You can say the definition of a noun in one sentence.",
    "You can give one example of a person, a place, an animal and a thing.",
    "You can find the nouns in a simple sentence.",
  ],

  prerequisites: [
    { lessonSlug: "p1-2-4", label: "You know words for people, animals, food and school things (lesson 9)." },
    { lessonSlug: "p1-3-1", label: "You can put words into sentences (lesson 11)." },
  ],

  vocab: [
    {
      id: "p1-3-3-w1",
      term: "noun",
      pos: "noun",
      definition: "the name of a person, place, animal, or thing",
      example: "'Teacher' is a noun.",
    },
    {
      id: "p1-3-3-w2",
      term: "person",
      pos: "noun",
      definition: "a human being — a man, a woman, a child",
      example: "A teacher is a person.",
    },
    {
      id: "p1-3-3-w3",
      term: "place",
      pos: "noun",
      definition: "where something or someone is — a school, a park, a shop",
      example: "A school is a place.",
    },
    {
      id: "p1-3-3-w4",
      term: "animal",
      pos: "noun",
      definition: "a living thing that moves and grows, like a dog or a bird",
      example: "A dog is an animal.",
    },
    {
      id: "p1-3-3-w5",
      term: "thing",
      pos: "noun",
      definition: "something you can see or touch, like a book or a chair",
      example: "A book is a thing.",
    },
    {
      id: "p1-3-3-w6",
      term: "to name",
      pos: "verb",
      definition: "to give the name of something",
      example: "Name three animals in English!",
    },
  ],

  concept: {
    definition: "A noun is the name of a person, place, animal, or thing.",
    explanation: [
      "Person: teacher. Place: school. Animal: dog. Thing: book. These words are all nouns — they NAME something you can see, meet or visit.",
      "Nouns are the biggest word family in English. When you look around a room, almost everything you see has a noun for its name: table, chair, window, door, cup, pen.",
      "Here is a test that almost always works: if you can see it, touch it, meet it or visit it — it is a noun. The teacher is a noun. The school is a noun. Even ideas like 'day' and 'night' work as nouns, because we can name them.",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — Nouns name people",
      text: "A teacher is a person. A student is a person. A mother, a father, a doctor — all people, all nouns. Think of three people you know. Their names are nouns too!",
      examples: ["The teacher reads.", "A doctor helps people.", "My mother cooks rice."],
    },
    {
      title: "Step 2 — Nouns name places",
      text: "A school is a place. A park is a place. A shop, a city, a home — all places, all nouns. Where are you right now? That place has a noun name.",
      examples: ["The school is big.", "I play in the park.", "The shop sells bread."],
    },
    {
      title: "Step 3 — Nouns name animals",
      text: "A dog is an animal. A cat, a bird, a fish — all animals, all nouns. What is your favourite animal? Say its noun name!",
      examples: ["The dog runs.", "A bird sings in the tree.", "The fish swims."],
    },
    {
      title: "Step 4 — Nouns name things",
      text: "A book is a thing. A pen, a table, a chair, a cup — all things, all nouns. Look around you: how many thing-nouns can you name in ten seconds?",
      examples: ["The book is on the table.", "I write with a pen.", "The cup is red."],
    },
    {
      title: "Step 5 — Nouns inside complete sentences",
      text: "Now we put nouns to work in full sentences: 'The teacher has a book.' 'The dog runs in the park.' See how many nouns hide inside one sentence? Teacher, book, dog, park — four nouns, one sentence!",
      examples: [
        "The teacher has a book. (teacher, book)",
        "The dog runs in the park. (dog, park)",
        "My mother drinks tea. (mother, tea)",
      ],
    },
    {
      title: "Step 6 — Special nouns: names start with capitals",
      text: "One more gift before we practise: the names of people and places are special nouns. They always start with a capital letter — Ana, Omar, London, Paris. Regular nouns like teacher and school stay small.",
      examples: ["Ana lives in London.", "Omar works with Ms Reed.", "My cat is named Rex."],
    },
  ],

  exampleBank: {
    basic: [
      "Person: teacher.",
      "Place: school.",
      "Animal: dog.",
      "Thing: book.",
    ],
    everyday: [
      "My mother eats bread and eggs.",
      "The dog plays in the park.",
      "I read a book at school.",
      "The doctor drinks tea in the morning.",
    ],
    questions: [
      "Is 'teacher' a noun?",
      "What is a noun? Can you say the definition?",
      "Can you name three nouns in this room?",
    ],
    negatives: [
      "'Run' is not a noun — it is an action.",
      "'Red' is not a noun — it is a colour word.",
      "Not every word is a noun: nouns are NAMES.",
    ],
    corrections: [
      {
        wrong: "She is teacher.",
        right: "She is a teacher.",
        note: "Singular nouns need a little word before them: a teacher. You will meet 'a' and 'an' soon!",
      },
      {
        wrong: "The dog runs in the park. — 'runs' is a noun.",
        right: "'Runs' is an action word, not a noun.",
        note: "In that sentence, the nouns are dog and park.",
      },
    ],
  },

  dialogue: {
    title: "The noun hunt",
    context: "Ms Reed sends Ana and Omar on a noun hunt around the classroom.",
    lines: [
      { speaker: "Ms Reed", text: "Noun hunt! Find three nouns in our classroom. Ready?" },
      { speaker: "Omar", text: "Book! A book is a thing — a noun!" },
      { speaker: "Ana", text: "Chair! And table! Two more nouns!" },
      { speaker: "Ms Reed", text: "Excellent! Now a noun that is a person." },
      { speaker: "Omar", text: "Teacher! You, Ms Reed!" },
      { speaker: "Ms Reed", text: "Ha! Yes — teacher is a noun. And so are you two: students!" },
    ],
  },

  realLife: {
    title: "A world of nouns",
    text: "You are surrounded by nouns right now. Your room: bed, table, window, door. Your street: shop, bus, tree, taxi. Your family: mother, father, sister, brother. Naming the nouns around you is the oldest vocabulary game in the world — and it works.",
    examples: [
      "Name five nouns in the room where you are.",
      "On your way home, name three nouns you see.",
      "Name all the nouns at your dinner table.",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-3-3");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "A noun is the name of a person, place, animal, or ______.",
        ["thing", "colour", "action"],
        0,
        "Person, place, animal, or thing — that is the noun family."
      ),
      t.mcq(
        "guided",
        "Which word is a NOUN?",
        ["teacher", "run", "happy"],
        0,
        "A teacher is a person — and a noun. 'Run' is an action; 'happy' is a feeling word."
      ),
      t.fill(
        "guided",
        "'School' is a place. 'School' is a ______.",
        ["noun"],
        "Places are nouns."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "Which word is NOT a noun?",
        ["jump", "dog", "park"],
        0,
        "Jump is an action, not a name. Dog and park are nouns."
      ),
      t.mcq(
        "independent",
        "How many nouns are in this sentence: 'The mother has a book.'",
        ["2 (mother, book)", "1 (mother)", "3 (mother, has, book)"],
        0,
        "Mother and book are nouns. 'Has' is an action word."
      ),
      t.match("independent", "Match each noun with its type.", [
        { left: "doctor", right: "person" },
        { left: "park", right: "place" },
        { left: "cat", right: "animal" },
        { left: "pen", right: "thing" },
      ]),

      /* 10 — speaking */
      t.speak("Name a person, a place, an animal and a thing.", "Teacher, school, dog, book"),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "The dog plays in the park.",
        "Listen. Which NOUN do you hear?",
        ["park", "plays", "happy"],
        0
      ),
      t.listenType("listening", "I read a book.", "Listen and type the noun you hear.", ["book"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. Where does Leo's father work?",
        ["At a school", "In a park", "At a shop"],
        0,
        "The story says: 'His father works at a school.'"
      ),
      t.fill(
        "reading",
        "Read the story. Leo's mother is a ______.",
        ["doctor"],
        "She helps people — a doctor."
      ),

      /* 13 — writing */
      t.write(
        "Write two nouns: one ANIMAL and one THING.",
        "dog, book",
        "An animal you like and a thing near you."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "What is a noun?",
        ["The name of a person, place, animal, or thing", "An action word", "A colour word"],
        0,
        "Nouns name: people, places, animals, things."
      ),
      t.mcq(
        "assessment",
        "Which of these words is a noun?",
        ["table", "eat", "green"],
        0,
        "A table is a thing you can touch — a noun."
      ),
      t.fill(
        "assessment",
        "Find the noun: 'The bird sings.' The noun is ______.",
        ["bird"],
        "The bird is an animal — a noun. 'Sings' is an action."
      ),
      t.mcq(
        "assessment",
        "Which noun is a PLACE?",
        ["hospital", "doctor", "cat"],
        0,
        "A hospital is a place. A doctor is a person and a cat is an animal."
      ),
    ];
  })(),

  passage: {
    title: "Leo's family",
    text: "Leo loves nouns. His father is a teacher — teacher is a noun, a person! His mother is a doctor — another person noun. His father works at a school, and his mother works at a hospital — school and hospital are place nouns. At home, Leo plays with his cat. The cat's name is Bella. Leo says: 'Person, place, animal, thing — nouns are everywhere!'",
  },

  commonMistakes: [
    {
      wrong: "She is teacher.",
      right: "She is a teacher.",
      why: "Singular nouns like teacher need 'a' before them: a teacher. The lesson on 'a' and 'an' is coming soon!",
    },
    {
      wrong: "Thinking 'runs' in 'The dog runs' is a noun.",
      right: "The nouns in that sentence are dog (and park, if you add it).",
      why: "Run is an action word. Nouns are names of people, places, animals and things.",
    },
    {
      wrong: "ana goes to the park.",
      right: "Ana goes to the park.",
      why: "Names of people are special nouns — they always start with a capital letter.",
    },
  ],

  revision: {
    keyPoints: [
      "A noun is the name of a person, place, animal, or thing.",
      "Person: teacher. Place: school. Animal: dog. Thing: book.",
      "If you can see it, touch it, meet it or visit it, it is probably a noun.",
      "Nouns work inside complete sentences: 'The teacher has a book.'",
      "Names of people and places start with capital letters: Ana, London.",
    ],
    keyWords: ["noun", "person", "place", "animal", "thing", "to name"],
    selfCheck: [
      "Can you say the noun definition from memory?",
      "Can you find the nouns in 'The dog runs in the park.'?",
      "Can you name one person, one place, one animal and one thing near you?",
    ],
  },

  homework: {
    tasks: [
      "Write four nouns on paper: one person, one place, one animal, one thing.",
      "Find the nouns: 'My mother reads a book at night.' Write them down.",
      "Name three nouns in your kitchen at dinner.",
      "Write your name and the name of your city — with capital letters!",
    ],
  },
};
