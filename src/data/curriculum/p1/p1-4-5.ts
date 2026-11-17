import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 4 · Lesson 5 — Basic Articles
 *
 * A and an = one, any one (an before vowel sounds). The = we both know
 * which one. Fixes the classic "She is teacher" error.
 */
export const p1_4_5: StructuredCourseLesson = {
  slug: "p1-4-5",
  title: "Basic Articles",
  subtitle: "a, an and the",
  description:
    "Three tiny words with a big job: a cat, an apple, the sun. Learn when English uses a, when it uses an, and when it uses the — and fix the famous 'She is teacher' mistake.",
  minutes: 12,
  skills: ["reading", "writing", "listening", "speaking"],
  content: draftMeta(["st03-m02-u02-l02"]),

  introduction:
    "A cat. An apple. The sun. Three of the most common words in all of English — and each one does a different little job. Today you will master a, an and the. These three tiny words will make your sentences sound natural and correct. Small lesson, big reward!",

  objectives: [
    "You can use a before consonant sounds: a cat, a pen.",
    "You can use an before vowel sounds: an apple, an egg.",
    "You can use the for things we both know: the sun, the door.",
  ],

  prerequisites: [
    { lessonSlug: "p1-1-4", label: "You know the vowels: a, e, i, o, u (lesson 4)." },
    { lessonSlug: "p1-3-3", label: "You know nouns (lesson 13)." },
    { lessonSlug: "p1-4-4", label: "You can build S + V + O sentences (lesson 19)." },
  ],

  vocab: [
    {
      id: "p1-4-5-w1",
      term: "article",
      pos: "noun",
      definition: "a little word before a noun: a, an or the",
      example: "'A' and 'the' are articles.",
    },
    {
      id: "p1-4-5-w2",
      term: "a",
      pos: "article",
      definition: "one; any one — used before a consonant sound",
      example: "I have a cat.",
    },
    {
      id: "p1-4-5-w3",
      term: "an",
      pos: "article",
      definition: "one; any one — used before a vowel sound",
      example: "She eats an apple.",
    },
    {
      id: "p1-4-5-w4",
      term: "the",
      pos: "article",
      definition: "the one we both know — a specific thing",
      example: "The sun is hot.",
    },
    {
      id: "p1-4-5-w5",
      term: "to choose",
      pos: "verb",
      definition: "to pick one from many",
      example: "Choose the right article: a or an?",
    },
    {
      id: "p1-4-5-w6",
      term: "which",
      pos: "question word",
      definition: "what one? (used to ask about a choice)",
      example: "Which one? The red pen or the blue pen?",
    },
  ],

  concept: {
    definition: "A and an mean one (any one). The means this one — the one we both know.",
    explanation: [
      "Say 'I have a cat.' Which cat? Any cat — you have not told me yet. A means one, any one. Now say 'The cat is hungry.' Which cat? MY cat — we both know it. The points at a specific thing.",
      "When do you use a, and when an? Listen to the SOUND after the article. Consonant sound → a (a cat, a pen, a bus). Vowel sound → an (an apple, an egg, an orange). The n in an makes vowel starts smooth.",
      "English nouns often travel with an article. 'She is a teacher.' 'I need a pen.' 'The shop opens at nine.' Forgetting articles is the most common beginner mistake — and now you know the fix!",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — A: one, any one",
      text: "Use a before a consonant sound. A cat — any cat in the world. A pen — any pen. A book, a bus, a table, a shop. A says: one thing, and it does not matter which one yet.",
      examples: ["I have a cat.", "She reads a book.", "He drives a bus."],
    },
    {
      title: "Step 2 — AN: one, before a vowel sound",
      text: "Use an before a vowel sound: a, e, i, o, u at the start of the word. An apple. An egg. An orange. An umbrella. Try saying 'a apple' — bumpy! The n makes it smooth: an apple.",
      examples: ["She eats an apple.", "I need an umbrella.", "He has an orange."],
    },
    {
      title: "Step 3 — THE: the one we both know",
      text: "Use the when both speakers know which thing is meant. The sun (there is only one!). The door (the door of this room). The teacher (our teacher). The is the pointing word of English.",
      examples: ["The sun is hot.", "Close the door, please.", "The teacher reads a book."],
    },
    {
      title: "Step 4 — A/AN vs THE: the story of two cats",
      text: "Watch articles tell a story: 'I see a cat. The cat is black.' First mention: a cat — new information. Second mention: the cat — because now we both know which cat.",
      examples: ["I see a cat. The cat is black.", "She buys a pen. The pen is red."],
    },
    {
      title: "Step 5 — Fix the famous mistake",
      text: "Beginners often say 'She is teacher.' English needs an article: 'She is a teacher.' Jobs and single things almost always want their little word. Train your ear: a teacher, a doctor, a student.",
      examples: ["She is a teacher. ✓", "He is a doctor. ✓", "I am a student. ✓"],
    },
  ],

  exampleBank: {
    basic: [
      "a cat",
      "an apple",
      "the sun",
      "I have a pen.",
      "She eats an egg.",
    ],
    everyday: [
      "I need a cup of tea.",
      "He is a bus driver.",
      "The shop opens at nine.",
      "Close the window, please.",
      "She reads an old book.",
    ],
    questions: [
      "A pen or an pen?",
      "Where is the bus stop? (we both know the one I mean)",
      "Is she a teacher?",
    ],
    negatives: [
      "It is not 'a apple' — the vowel needs an.",
      "It is not 'an cat' — the consonant sound needs a.",
      "'She is teacher' is not complete — she is A teacher.",
    ],
    corrections: [
      {
        wrong: "She is teacher.",
        right: "She is a teacher.",
        note: "Jobs need a: a teacher, a doctor, a student.",
      },
      {
        wrong: "I eat a apple.",
        right: "I eat an apple.",
        note: "Apple starts with a vowel sound (a) → use an.",
      },
    ],
  },

  dialogue: {
    title: "The new student",
    context: "A new student, Ben, meets the class. Ms Reed asks him questions.",
    lines: [
      { speaker: "Ms Reed", text: "Welcome, Ben! Are you a student here?" },
      { speaker: "Ben", text: "Yes. I am a new student." },
      { speaker: "Ms Reed", text: "Wonderful. And what does your father do?" },
      { speaker: "Ben", text: "He is a bus driver. He drives the number three bus." },
      { speaker: "Ana", text: "I know the number three bus! It stops at the park." },
      { speaker: "Ben", text: "Yes! We live near the park. I eat an apple there every day." },
    ],
  },

  realLife: {
    title: "Articles at the table",
    text: "Articles hide in every menu and market. 'A coffee, please.' 'An orange juice.' 'The bill, please.' Today, say three requests with the right article. If you feel brave, add the classic: 'The bill, please!'",
    examples: [
      "Order a drink: 'A tea, please.' or 'An orange juice, please.'",
      "Ask about your town: 'Where is the bus stop?'",
      "Say your job (or dream job): 'I am a…'",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-4-5");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "______ apple a day is good for you. (a or an?)",
        ["An", "A", "The"],
        0,
        "Apple starts with a vowel sound → an apple."
      ),
      t.mcq(
        "guided",
        "I have ______ cat. Her name is Bella. (first time we hear about the cat)",
        ["a", "an", "the"],
        0,
        "New information → a cat. Any cat, we do not know it yet."
      ),
      t.fill(
        "guided",
        "______ sun is hot today. (There is only one sun!)",
        ["the"],
        "One-of-a-kind things take the."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "She is ______ teacher at my school.",
        ["a", "an", "the"],
        0,
        "Jobs need a: a teacher."
      ),
      t.mcq(
        "independent",
        "Choose the correct sentence:",
        ["I need an umbrella.", "I need a umbrella.", "I need the umbrella every day."],
        0,
        "Umbrella starts with a vowel sound (u = 'uh') → an umbrella."
      ),
      t.match("independent", "Match each noun with its article.", [
        { left: "pen", right: "a" },
        { left: "egg", right: "an" },
        { left: "sun", right: "the" },
      ]),

      /* 10 — speaking */
      t.speak("Say your job or dream job with the article.", "I am a teacher."),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "She eats an apple every day.",
        "Listen. Which article do you hear?",
        ["an", "a", "the"],
        0
      ),
      t.listenType("listening", "I need a pen, please.", "Listen and type the article you hear.", ["a"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. What does Sara's brother have?",
        ["An orange cat", "A black dog", "An old book"],
        0,
        "The story says: 'He has an orange cat.'"
      ),
      t.fill(
        "reading",
        "Read the story. Sara wants to be a ______.",
        ["doctor"],
        "Her dream job — she wants to help people."
      ),

      /* 13 — writing */
      t.write(
        "Write about your dream job with the right article: 'I want to be a/an ___.'",
        "I want to be a teacher.",
        "Teacher starts with a consonant sound → a teacher."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "When do you use AN?",
        ["Before a vowel sound: an apple", "Before every noun", "Only for jobs"],
        0,
        "Vowel sound → an (an apple, an egg, an umbrella)."
      ),
      t.mcq(
        "assessment",
        "'I see a dog. ___ dog is big.' Which article fits the second sentence?",
        ["The", "A", "An"],
        0,
        "Second mention — now we both know the dog → the dog."
      ),
      t.fill(
        "assessment",
        "Fix the sentence: 'He is doctor.' He is ______ doctor.",
        ["a"],
        "Jobs need their article: a doctor."
      ),
      t.mcq(
        "assessment",
        "THE means ______.",
        ["the one we both know", "any one", "more than one"],
        0,
        "The points at a specific thing: the sun, the door, our teacher."
      ),
    ];
  })(),

  passage: {
    title: "Sara and the orange cat",
    text: "Sara is a student. She studies English. Her brother is a doctor. He has an orange cat. The cat is old and fat. Every morning, Sara eats an egg and reads a book. The cat sleeps on the sofa. Sara says: 'I want to be a doctor. I want to help people.' She smiles and studies. The sun shines on her book.",
  },

  commonMistakes: [
    {
      wrong: "She is teacher.",
      right: "She is a teacher.",
      why: "Jobs and single things need an article: a teacher, a doctor, a student.",
    },
    {
      wrong: "I eat a apple.",
      right: "I eat an apple.",
      why: "Apple starts with a vowel sound. The n in an makes the vowel start smooth.",
    },
    {
      wrong: "I see the cat in the street. — the first time you mention the cat.",
      right: "I see a cat in the street.",
      why: "First mention — a cat (new). Second mention — the cat, because we both know it now.",
    },
  ],

  revision: {
    keyPoints: [
      "A and an mean one, any one.",
      "A before consonant sounds: a cat, a pen.",
      "An before vowel sounds: an apple, an egg, an umbrella.",
      "The means the one we both know: the sun, the door.",
      "First mention — a/an. Second mention — the.",
      "Jobs need their article: She is a teacher.",
    ],
    keyWords: ["article", "a", "an", "the", "to choose", "which"],
    selfCheck: [
      "A pen or an pen? Decide in one second!",
      "Can you say your job with the right article?",
      "Why does the sun take 'the' and not 'a'?",
    ],
  },

  homework: {
    tasks: [
      "Write five nouns with the right article: a pen, an egg, the sun…",
      "Say three requests today with articles: 'A tea, please.'",
      "Write your job (or your parents' jobs) with the right article.",
      "Find three nouns in a book or message. Which article is before them?",
    ],
  },
};
