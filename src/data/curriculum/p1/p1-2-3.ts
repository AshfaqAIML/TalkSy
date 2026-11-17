import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 2 · Lesson 3 — Common Everyday Words
 *
 * The politeness and survival kit: please, sorry, excuse me, goodbye,
 * you're welcome, good morning, good night, OK — when to use each one.
 */
export const p1_2_3: StructuredCourseLesson = {
  slug: "p1-2-3",
  title: "Common Everyday Words",
  subtitle: "The polite words people use all day",
  description:
    "Please, sorry, excuse me, goodbye, you're welcome — eight small words with big power. Learn exactly when to use each one, and make every day a little more polite.",
  minutes: 10,
  skills: ["listening", "speaking", "reading", "writing"],
  content: draftMeta(["st01-m04-u02-l02"]),

  introduction:
    "Some words are so useful that you can use them on day one, with anyone, anywhere. Please when you ask. Sorry when you make a mistake. Excuse me when you need to pass. These words are small, but they open doors and make friends. Today you will learn the politeness kit of English.",

  objectives: [
    "You can use please, sorry and excuse me in the right situations.",
    "You can say goodbye and good night at the right time.",
    "You can answer thank you with you're welcome.",
  ],

  prerequisites: [
    { lessonSlug: "p1-1-1", label: "You know hello, hi, yes, no and thank you (lesson 1)." },
  ],

  vocab: [
    {
      id: "p1-2-3-w1",
      term: "please",
      pos: "adverb",
      definition: "a polite word you add when you ask for something",
      example: "A coffee, please.",
    },
    {
      id: "p1-2-3-w2",
      term: "sorry",
      pos: "exclamation",
      definition: "the word you say when you make a mistake or something bad happens",
      example: "Sorry! I am late.",
    },
    {
      id: "p1-2-3-w3",
      term: "excuse me",
      pos: "phrase",
      definition: "a polite word before you pass someone, interrupt, or ask a question",
      example: "Excuse me, where is the bus stop?",
    },
    {
      id: "p1-2-3-w4",
      term: "goodbye",
      pos: "exclamation",
      definition: "the word you say when you leave",
      example: "Goodbye! See you tomorrow.",
    },
    {
      id: "p1-2-3-w5",
      term: "you're welcome",
      pos: "phrase",
      definition: "the friendly answer to thank you",
      example: "Thank you! — You're welcome.",
    },
    {
      id: "p1-2-3-w6",
      term: "good morning",
      pos: "phrase",
      definition: "a greeting for the morning, before 12 p.m.",
      example: "Good morning, Ana!",
    },
    {
      id: "p1-2-3-w7",
      term: "good night",
      pos: "phrase",
      definition: "the words you say when you leave at night or go to bed",
      example: "Good night, Mum.",
    },
    {
      id: "p1-2-3-w8",
      term: "OK",
      pos: "exclamation",
      definition: "fine; good; no problem",
      example: "OK! Let's go.",
    },
  ],

  concept: {
    definition: "Polite words are small words for important moments: please when you ask, sorry when you make a mistake, excuse me when you need to pass, goodbye when you leave.",
    explanation: [
      "You already know hello and thank you. Today's words complete the kit. With just these ten words, you can be polite from morning to night in English.",
      "The words work in every country where people speak English. A shop worker in London, a teacher in New York, a neighbour in Sydney — all of them know please, sorry and excuse me.",
      "Polite words are free. They cost you one second and they make people smile. Use them often!",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — Please: when you ask",
      text: "Add please when you ask for something. 'A coffee, please.' 'Two tickets, please.' It is like a magic word — people help faster and smile more.",
      examples: ["A coffee, please.", "The bill, please.", "Help me, please."],
    },
    {
      title: "Step 2 — Sorry: when you make a mistake",
      text: "Say sorry when you do something wrong, big or small. You step on a foot: 'Sorry!' You are late: 'Sorry I am late.' Small word, big kindness.",
      examples: ["Sorry!", "Oh, sorry! My mistake.", "Sorry I am late."],
    },
    {
      title: "Step 3 — Excuse me: when you pass or ask",
      text: "You want to walk past people, or you want to ask a question. Excuse me comes first. 'Excuse me, where is the bus?' 'Excuse me!' on a crowded bus.",
      examples: ["Excuse me, where is the bus stop?", "Excuse me, is this seat free?"],
    },
    {
      title: "Step 4 — Goodbye and good night",
      text: "Goodbye is for leaving, any time. Good night is special: it is for the end of the evening, or before sleep. In the morning, say good morning instead.",
      examples: ["Goodbye! See you tomorrow.", "Good night, Mum. I am going to bed.", "Good morning, class!"],
    },
    {
      title: "Step 5 — You're welcome and OK",
      text: "Someone says thank you — you answer: you're welcome. And OK? OK means 'fine' or 'yes'. 'Tea?' 'OK!' These two little answers keep every chat moving.",
      examples: [
        "Thank you! — You're welcome.",
        "Tea? — OK!",
        "Is 9 o'clock OK? — Yes, OK.",
      ],
    },
  ],

  exampleBank: {
    basic: [
      "Please.",
      "Sorry!",
      "Excuse me.",
      "Goodbye!",
      "You're welcome.",
    ],
    everyday: [
      "A coffee, please.",
      "Sorry! I am late.",
      "Excuse me, where is the station?",
      "Good night! Sleep well.",
      "Thank you for the tea. — You're welcome.",
    ],
    questions: [
      "What do you say when you ask for something?",
      "How do you answer 'Thank you'?",
      "What do you say before you sleep?",
    ],
    negatives: [
      "We do not say 'good night' when we arrive in the morning.",
      "Please is not a question by itself — it rides along with a request.",
      "You're welcome is not the answer to 'Hello'.",
    ],
    corrections: [
      {
        wrong: "You step on someone's foot and say: 'Excuse me!'",
        right: "You step on someone's foot and say: 'Sorry!'",
        note: "Excuse me comes BEFORE you do something (passing, asking). Sorry comes AFTER a mistake.",
      },
      {
        wrong: "You say 'Good night!' at 9 a.m.",
        right: "You say 'Good morning!' at 9 a.m.",
        note: "Good night is only for the end of the day or before sleep.",
      },
    ],
  },

  dialogue: {
    title: "On the bus",
    context: "Ben is on a crowded bus. He bumps into a woman, then asks her a question.",
    lines: [
      { speaker: "Ben", text: "Oh! Sorry!" },
      { speaker: "Mia", text: "That's OK." },
      { speaker: "Ben", text: "Excuse me, is this the bus to the park?" },
      { speaker: "Mia", text: "Yes, it is." },
      { speaker: "Ben", text: "Thank you!" },
      { speaker: "Mia", text: "You're welcome." },
      { speaker: "Ben", text: "Good morning, by the way!" },
    ],
  },

  realLife: {
    title: "A polite day in English",
    text: "Try a full polite day in English. Morning: good morning. Asking for tea: please. A small mistake: sorry. Passing someone: excuse me. Evening: good night. Ten little words, one friendly day.",
    examples: [
      "Say good morning to the first person you see.",
      "Add please to one request today.",
      "Say good night to your family this evening.",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-2-3");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "You want a coffee at a café. Which word do you add?",
        ["Please", "Sorry", "Goodbye"],
        0,
        "A coffee, please. — 'please' makes your request polite."
      ),
      t.mcq(
        "guided",
        "You step on someone's foot by accident. You say:",
        ["Sorry!", "Good night!", "You're welcome."],
        0,
        "Sorry is the word for mistakes."
      ),
      t.fill(
        "guided",
        "You want to walk past people. You say: '______ me!'",
        ["excuse"],
        "It starts with e."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "Someone says 'Thank you!' to you. You answer:",
        ["You're welcome", "Sorry", "Excuse me"],
        0,
        "You're welcome is the friendly answer to thank you."
      ),
      t.mcq(
        "independent",
        "It is 10 p.m. You go to bed. You say:",
        ["Good night", "Good morning", "Goodbye"],
        0,
        "Good night is for the end of the day and before sleep."
      ),
      t.match("independent", "Match each word with its moment.", [
        { left: "please", right: "when you ask for something" },
        { left: "sorry", right: "when you make a mistake" },
        { left: "excuse me", right: "when you pass someone" },
        { left: "goodbye", right: "when you leave" },
      ]),

      /* 10 — speaking */
      t.speak("You need to pass someone. Say the polite words.", "Excuse me!"),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "A coffee, please.",
        "Listen. Which polite word do you hear?",
        ["please", "sorry", "goodbye"],
        0,
        "p1-2-3-w1"
      ),
      t.listenChoice(
        "listening",
        "Sorry!",
        "Listen. Which word do you hear?",
        ["please", "sorry", "excuse me"],
        1,
        "p1-2-3-w2"
      ),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. What does Ana ask for?",
        ["A tea", "A coffee", "A cake"],
        0,
        "Ana says: 'A tea, please.'"
      ),
      t.fill(
        "reading",
        "Read the story. The man answers 'thank you' with '______'.",
        ["you're welcome", "youre welcome", "your welcome"],
        "The answer to thank you."
      ),

      /* 13 — writing */
      t.write(
        "You are at a café. You want a tea. Write your request with the polite word.",
        "A tea, please.",
        "Ask for the drink, then add the polite word."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "Which word comes BEFORE you pass someone or ask a question?",
        ["Excuse me", "Sorry", "Please"],
        0,
        "Excuse me first, then pass or ask. Sorry comes after a mistake."
      ),
      t.mcq(
        "assessment",
        "Which greeting is for the morning?",
        ["Good morning", "Good night", "Goodbye"],
        0,
        "Good morning — before 12 p.m."
      ),
      t.fill(
        "assessment",
        "Complete the answer to 'Thank you': You're ______.",
        ["welcome"],
        "We-l-c-o-m-e."
      ),
      t.mcq(
        "assessment",
        "OK means ______.",
        ["fine; no problem", "goodbye", "I am sorry"],
        0,
        "OK means fine or yes: 'Tea?' — 'OK!'"
      ),
    ];
  })(),

  passage: {
    title: "A polite day",
    text: "Ana starts her day. 'Good morning!' she says to the man in the shop. At the café, she says: 'A tea, please.' On the busy street, she says: 'Excuse me!' and walks past. Oh — she bumps a man with her bag. 'Sorry!' she says. 'That's OK,' says the man. At night, Ana says: 'Good night!' to her sister. What a polite day!",
  },

  commonMistakes: [
    {
      wrong: "Saying 'Excuse me!' after stepping on someone's foot.",
      right: "Sorry!",
      why: "Excuse me comes BEFORE an action (passing, asking). Sorry comes AFTER a mistake.",
    },
    {
      wrong: "Saying 'Good night!' when you meet someone at 9 a.m.",
      right: "Good morning!",
      why: "Good night is only for the end of the evening or before sleep.",
    },
    {
      wrong: "Writing 'your welcome'.",
      right: "You're welcome.",
      why: "You're is short for 'you are'. You are welcome!",
    },
  ],

  revision: {
    keyPoints: [
      "Please rides along when you ask for something.",
      "Sorry is for mistakes — after they happen.",
      "Excuse me comes before you pass someone or ask a question.",
      "Goodbye when you leave; good night at the end of the day.",
      "You're welcome answers thank you. OK means fine.",
    ],
    keyWords: [
      "please",
      "sorry",
      "excuse me",
      "goodbye",
      "you're welcome",
      "good morning",
      "good night",
      "OK",
    ],
    selfCheck: [
      "Can you say please, sorry and excuse me in the right moments?",
      "What do you answer when someone says thank you?",
      "Which word is for the morning: good morning or good night?",
    ],
  },

  homework: {
    tasks: [
      "Say good morning to three people tomorrow.",
      "Add please to every request you make today — in any language. Then say it in English once.",
      "Practise the pair: 'Thank you!' — 'You're welcome.' with a friend.",
      "Say good night in English before you sleep tonight.",
    ],
  },
};
