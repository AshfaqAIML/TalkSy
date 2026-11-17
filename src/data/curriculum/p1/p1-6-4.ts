import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 6 · Lesson 4 — Daily-Use Sentence Practice
 *
 * A consolidation lesson: the survival sentences of a full day — morning
 * routine, classroom, café, requests and help — built from every pattern
 * learned so far (affirmative, negative, yes/no and WH-questions).
 */
export const p1_6_4: StructuredCourseLesson = {
  slug: "p1-6-4",
  title: "Daily-Use Sentence Practice",
  subtitle: "A day of English",
  description:
    "Good morning! I need a tea. Excuse me, where is the bus stop? Walk through a whole day in English — morning, classroom, café and street — using every sentence pattern you know.",
  minutes: 12,
  skills: ["speaking", "listening", "reading", "writing"],
  content: draftMeta([
    "st01-m04-u02-l03",
    "st08-m01-u02-l01",
  ]),

  introduction:
    "You know affirmatives, negatives, yes/no questions and WH-questions. Now let's put them ALL to work in one full day of English! From 'Good morning' to 'Good night', from ordering tea to finding a bus stop — this lesson is a dress rehearsal for real life.",

  objectives: [
    "You can say the sentences of a morning routine in English.",
    "You can order food and drink politely: 'A tea, please.'",
    "You can ask for help: 'Excuse me, where is…?'",
  ],

  prerequisites: [
    { lessonSlug: "p1-6-3", label: "You know WH-questions (lesson 28)." },
    { lessonSlug: "p1-6-2", label: "You know yes/no questions (lesson 27)." },
    { lessonSlug: "p1-2-3", label: "You know the polite words (lesson 8)." },
  ],

  vocab: [
    {
      id: "p1-6-4-w1",
      term: "how are you",
      pos: "phrase",
      definition: "the friendly question about how someone feels",
      example: "Hi! How are you today?",
    },
    {
      id: "p1-6-4-w2",
      term: "I'm fine",
      pos: "phrase",
      definition: "the quick friendly answer to 'How are you?'",
      example: "How are you? — I'm fine, thank you!",
    },
    {
      id: "p1-6-4-w3",
      term: "see you",
      pos: "phrase",
      definition: "the friendly words when you leave (see you later / tomorrow)",
      example: "Goodbye! See you tomorrow!",
    },
    {
      id: "p1-6-4-w4",
      term: "here you are",
      pos: "phrase",
      definition: "what you say when you give something to someone",
      example: "Your tea! — Thank you. — Here you are.",
    },
    {
      id: "p1-6-4-w5",
      term: "to help",
      pos: "verb",
      definition: "to make something easier for someone",
      example: "Can you help me, please?",
    },
    {
      id: "p1-6-4-w6",
      term: "again",
      pos: "adverb",
      definition: "one more time",
      example: "Sorry, can you say that again, please?",
    },
    {
      id: "p1-6-4-w7",
      term: "this way",
      pos: "phrase",
      definition: "the words for showing a direction: come this way",
      example: "The café? Yes, this way, please!",
    },
  ],

  concept: {
    definition: "A day in English is built from short sentences: greetings (Good morning!), requests (A tea, please.), questions (Where is the bus stop?) and thanks (Thank you!).",
    explanation: [
      "You already own every piece. Today we simply string them into a day: wake, greet, order, ask, thank, leave. Real English life is mostly short sentences — and you can say all of them.",
      "The skeleton of the day: GREET (Good morning! How are you?), ASK FOR THINGS (A tea, please. I need a pen.), ASK FOR HELP (Excuse me, where is…? Can you help me?), THANK (Thank you! You're welcome.), LEAVE (See you tomorrow! Good night.).",
      "Survival secret: politeness + the magic phrases 'please', 'thank you', 'excuse me' and 'can you say that again, please?' make every situation softer. When in doubt — be polite!",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — Morning sentences",
      text: "The day begins with greetings and routines. 'Good morning! How are you? — I'm fine, thank you!' Then your routine: 'I wake up. I eat breakfast. I drink tea. I go to work.' Say your real morning in English.",
      examples: ["Good morning! How are you?", "I'm fine, thank you!", "I wake up at seven.", "I eat breakfast."],
    },
    {
      title: "Step 2 — Café sentences",
      text: "At the café, short sentences rule. Order: 'A tea, please.' Ask: 'How much is it?' Pay and thank: 'Thank you! — You're welcome.' You can survive any café with four polite sentences!",
      examples: ["A tea, please.", "An orange juice, please.", "How much is it?", "Thank you! You're welcome."],
    },
    {
      title: "Step 3 — Street sentences",
      text: "Lost? Ask! 'Excuse me, where is the bus stop?' 'Where is the station, please?' When someone helps you: 'Thank you very much!' When you don't understand: 'Sorry, can you say that again, please?' — the most useful sentence in this whole course.",
      examples: ["Excuse me, where is the bus stop?", "Sorry, can you say that again, please?", "Thank you very much!"],
    },
    {
      title: "Step 4 — Classroom sentences",
      text: "In class: 'I have a question.' 'I need a pen, please.' 'Can you help me, please?' 'I don't understand.' Teachers love these sentences — they mean you are learning bravely.",
      examples: ["I have a question.", "I need a pen, please.", "Can you help me, please?", "I don't understand."],
    },
    {
      title: "Step 5 — Evening sentences",
      text: "The day closes softly: 'Good evening! How are you?' 'I'm tired!' 'Good night! See you tomorrow!' Say the last two every evening this week — it takes ten seconds and keeps your English warm.",
      examples: ["Good evening!", "I'm tired today!", "Good night!", "See you tomorrow!"],
    },
  ],

  exampleBank: {
    basic: [
      "Good morning!",
      "A tea, please.",
      "Where is the bus stop?",
      "Thank you!",
    ],
    everyday: [
      "How are you? — I'm fine, thank you!",
      "Excuse me, where is the station?",
      "Can you help me, please?",
      "Sorry, can you say that again?",
      "See you tomorrow!",
    ],
    questions: [
      "How are you today?",
      "Where is the bus stop?",
      "How much is it?",
      "Can you help me, please?",
    ],
    negatives: [
      "I don't understand.",
      "No, thank you.",
      "Sorry, that isn't my order.",
    ],
    corrections: [
      {
        wrong: "Tea!",
        right: "A tea, please.",
        note: "One-word orders sound hard. Add the article and please: soft, polite, natural.",
      },
      {
        wrong: "Where bus stop?",
        right: "Where is the bus stop?",
        note: "Keep the be verb in the question, and give the bus stop its article.",
      },
    ],
  },

  dialogue: {
    title: "Ben's day in English",
    context: "A whole day of Ben's life, in short English sentences.",
    lines: [
      { speaker: "Neighbour", text: "Good morning, Ben! How are you?" },
      { speaker: "Ben", text: "I'm fine, thank you! I'm late. Excuse me!" },
      { speaker: "Waiter", text: "Good morning! A table for one?" },
      { speaker: "Ben", text: "Yes, thank you. A tea and some bread, please." },
      { speaker: "Waiter", text: "Here you are!" },
      { speaker: "Ben", text: "Thank you! … Excuse me, where is the bus stop?" },
      { speaker: "Waiter", text: "Outside, next to the bank. This way!" },
      { speaker: "Ben", text: "Thank you very much! See you tomorrow!" },
    ],
  },

  realLife: {
    title: "Live one hour in English",
    text: "Here is the challenge: live ONE hour of your day completely in English sentences — greet, order, ask, thank, leave. Even alone, narrate: 'Now I drink tea. Now I read.' One honest hour of short sentences is worth more than a silent day of study.",
    examples: [
      "Greet someone: 'Good morning! How are you?'",
      "Narrate one routine: 'I eat breakfast. I drink tea.'",
      "Close the day: 'Good night! See you tomorrow!'",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-6-4");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "Someone asks 'How are you?' You answer:",
        ["I'm fine, thank you!", "Yes, I am.", "My name is Ben."],
        0,
        "The friendly answer to 'How are you?' is 'I'm fine, thank you!'"
      ),
      t.mcq(
        "guided",
        "You want tea at a café. Say it politely:",
        ["A tea, please.", "Tea!", "Give tea."],
        0,
        "Article + please = polite and natural."
      ),
      t.fill(
        "guided",
        "You don't understand. Say: Sorry, can you say that ______, please?",
        ["again"],
        "One more time = again."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "You need help. Ask politely:",
        ["Can you help me, please?", "Help!", "You help me?"],
        0,
        "Can you help me, please? — polite and clear."
      ),
      t.mcq(
        "independent",
        "Someone gives you your tea. They say:",
        ["Here you are!", "See you!", "I'm fine!"],
        0,
        "Here you are = the giving phrase."
      ),
      t.match("independent", "Match each moment with its sentence.", [
        { left: "meeting in the morning", right: "Good morning! How are you?" },
        { left: "ordering at a café", right: "A tea, please." },
        { left: "leaving a friend", right: "See you tomorrow!" },
        { left: "not understanding", right: "Can you say that again, please?" },
      ]),

      /* 10 — speaking */
      t.speak("Greet a friend and ask how they are.", "Hello! How are you today?"),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "Excuse me, where is the bus stop?",
        "Listen. What does the person need?",
        ["Directions to a bus stop", "A cup of tea", "The time"],
        0
      ),
      t.listenType("listening", "See you tomorrow!", "Listen and type the sentence.", ["see you tomorrow"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. What does Emma order?",
        ["A coffee and bread", "A tea and bread", "An orange juice"],
        0,
        "The story says: 'A coffee and some bread, please.'"
      ),
      t.fill(
        "reading",
        "Read the story. Emma asks about the ______: 'Where is it?'",
        ["toilet"],
        "She needs it before the train!"
      ),

      /* 13 — writing */
      t.write(
        "Write your café order in one polite sentence.",
        "A tea and some bread, please.",
        "What do you want + please!",
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "The most useful sentence when you don't understand is:",
        ["Sorry, can you say that again, please?", "Yes, I am.", "Good night!"],
        0,
        "Ask for repetition — politely and clearly."
      ),
      t.mcq(
        "assessment",
        "'Here you are!' means:",
        ["I am giving this to you", "I am at home", "See you later"],
        0,
        "It is the giving phrase — used when you hand something over."
      ),
      t.fill(
        "assessment",
        "Complete the goodbye: See you ______! (not today, but the next day)",
        ["tomorrow"],
        "See you tomorrow!"
      ),
      t.mcq(
        "assessment",
        "Which set covers a WHOLE day in English?",
        ["Good morning → A tea, please → Where is…? → Good night", "Hello, hello, hello", "Yes, no, OK"],
        0,
        "Greet, order, ask, close — the full day!",
      ),
    ];
  })(),

  passage: {
    title: "Emma's morning train",
    text: "Emma runs to the café. 'Good morning! A coffee and some bread, please.' The man smiles: 'Here you are!' Emma eats fast. Then she asks: 'Excuse me, where is the toilet?' 'Over there, next to the door.' 'Thank you!' At the station, Emma asks a woman: 'Where is the platform?' The woman says: 'This way! The train isn't late today.' Emma smiles: 'Wonderful! See you tomorrow!' — she says it to the whole station, and to her good English day.",
  },

  commonMistakes: [
    {
      wrong: "Tea!",
      right: "A tea, please.",
      why: "One-word orders sound hard. The article plus please makes it soft and polite.",
    },
    {
      wrong: "Where bus stop?",
      right: "Where is the bus stop?",
      why: "Keep the be verb in the question, and give the noun its article: the bus stop.",
    },
  ],

  revision: {
    keyPoints: [
      "A day in English = greetings + requests + questions + thanks.",
      "Morning: 'Good morning! How are you? — I'm fine, thank you!'",
      "Café: 'A tea, please. How much is it? Thank you!'",
      "Street: 'Excuse me, where is…? Can you help me, please?'",
      "Golden sentence: 'Sorry, can you say that again, please?'",
      "Evening: 'Good night! See you tomorrow!'",
    ],
    keyWords: ["how are you", "I'm fine", "see you", "here you are", "to help", "again", "this way"],
    selfCheck: [
      "Can you order a drink politely in English?",
      "Can you ask for directions with 'Excuse me, where is…?'",
      "What do you say when someone hands you something?",
    ],
  },

  homework: {
    tasks: [
      "Live one hour in English: greet, order, ask, thank — all in short sentences.",
      "Write your full café order as polite sentences.",
      "Practise the golden sentence five times: 'Sorry, can you say that again, please?'",
      "Close every day this week with: 'Good night! See you tomorrow!'",
    ],
  },
};
