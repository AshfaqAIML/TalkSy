import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 6 · Lesson 3 — Simple WH-Questions
 *
 * what (things), where (places), who (people) + be: "What is your name?"
 * "Where are you from?" "Who is she?" — the three questions that start
 * every friendship.
 */
export const p1_6_3: StructuredCourseLesson = {
  slug: "p1-6-3",
  title: "Simple WH-Questions",
  subtitle: "what, where and who",
  description:
    "What is your name? Where are you from? Who is she? WH-questions ask for real information — and these three questions open every conversation in the world.",
  minutes: 12,
  skills: ["listening", "speaking", "reading", "writing"],
  content: draftMeta(["st03-m03-u01-l03"]),

  introduction:
    "Yes and no are useful — but real talks need real answers. That is the job of WH-questions! WHAT asks about things. WHERE asks about places. WHO asks about people. With just these three question words, you can start a talk with anyone on Earth. Let's learn the friendship trio!",

  objectives: [
    "You know what what, where and who ask about.",
    "You can build WH-questions with be: 'What is your name?'",
    "You can answer the three big questions for meeting new people.",
  ],

  prerequisites: [
    { lessonSlug: "p1-6-2", label: "You know how be questions flip (lesson 27)." },
    { lessonSlug: "p1-4-5", label: "You know articles and nouns (lessons 13, 20)." },
  ],

  vocab: [
    {
      id: "p1-6-3-w1",
      term: "what",
      pos: "question word",
      definition: "asking about a thing or an idea",
      example: "What is your name?",
    },
    {
      id: "p1-6-3-w2",
      term: "where",
      pos: "question word",
      definition: "asking about a place",
      example: "Where are you from?",
    },
    {
      id: "p1-6-3-w3",
      term: "who",
      pos: "question word",
      definition: "asking about a person",
      example: "Who is she?",
    },
    {
      id: "p1-6-3-w4",
      term: "information",
      pos: "noun",
      definition: "facts; the details you want to know",
      example: "WH-questions ask for information.",
    },
    {
      id: "p1-6-3-w5",
      term: "from",
      pos: "preposition",
      definition: "showing where someone or something starts",
      example: "I am from Cairo.",
    },
    {
      id: "p1-6-3-w6",
      term: "name",
      pos: "noun",
      definition: "what a person or thing is called",
      example: "My name is Ana.",
    },
  ],

  concept: {
    definition: "WH-questions ask for information: what asks about things, where asks about places, and who asks about people. The pattern: WH-word + be — 'What is your name?'",
    explanation: [
      "Yes/no questions get short answers. WH-questions get REAL answers — a name, a city, a person. That is why they are the conversation starters of English.",
      "The pattern is easy because you already know it: WH-word + be + the rest. 'What is your name?' 'Where are you from?' 'Who is she?' The be verb stays in front of the subject, exactly like the flip you learned.",
      "Each WH-word has its own territory. WHAT owns things and ideas (What is this? What is your job?). WHERE owns places (Where is the bus stop? Where are you from?). WHO owns people (Who is he? Who is your teacher?).",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — WHAT: the thing question",
      text: "What asks about things and ideas. 'What is your name?' — the answer is a thing: a name. 'What is this?' — the answer is a thing: a pen. What wants nouns!",
      examples: ["What is your name?", "What is this?", "What is your job?"],
    },
    {
      title: "Step 2 — WHERE: the place question",
      text: "Where asks about places. 'Where are you from?' — the answer is a place: a city, a country. 'Where is the bus stop?' — the answer is a place: over there. Where wants locations!",
      examples: ["Where are you from?", "Where is the bus stop?", "Where is my bag?"],
    },
    {
      title: "Step 3 — WHO: the people question",
      text: "Who asks about people. 'Who is she?' — the answer is a person: my sister. 'Who is your teacher?' — a person: Ms Reed. Who wants humans!",
      examples: ["Who is she?", "Who is your teacher?", "Who is that man?"],
    },
    {
      title: "Step 4 — The pattern: WH + be + the rest",
      text: "See the family resemblance? Every WH-question starts with the WH-word, then the be flip you already know. 'What IS your name?' 'Where ARE you from?' 'Who IS she?' WH-word + flipped be — one pattern, three superpowers.",
      examples: ["What + is + your name?", "Where + are + you from?", "Who + is + she?"],
    },
    {
      title: "Step 5 — The friendship trio",
      text: "Three questions start almost every friendship in English: 'What is your name?' 'Where are you from?' And later: 'Who is your friend?' Ask them, answer them, and watch friendships grow. Your answers: 'My name is ___. I am from ___.'",
      examples: [
        "What is your name? — My name is Ana.",
        "Where are you from? — I am from Rome.",
        "Who is she? — She is my sister.",
      ],
    },
  ],

  exampleBank: {
    basic: [
      "What is your name?",
      "What is this?",
      "Where are you from?",
      "Who is she?",
    ],
    everyday: [
      "What is your job?",
      "Where is the bus stop?",
      "Where is the toilet, please?",
      "Who is that woman?",
      "What is this in English?",
    ],
    questions: [
      "What is your name?",
      "Where are you from?",
      "Who is your English teacher?",
      "Where is my pen?",
    ],
    negatives: [
      "WH-questions are not yes/no questions — they want information.",
      "'What is your name?' is not answered with yes or no.",
      "Who is not for places — that is where's job!",
    ],
    corrections: [
      {
        wrong: "What is your name? — Yes.",
        right: "What is your name? — My name is Ana.",
        note: "WH-questions want information, not yes/no. Give the thing, place or person!",
      },
      {
        wrong: "Where is your name?",
        right: "What is your name?",
        note: "Names are things → what. Cities and places → where.",
      },
    ],
  },

  dialogue: {
    title: "Three questions",
    context: "Ben meets Ana's cousin, Mia, for the first time at the bus stop.",
    lines: [
      { speaker: "Ana", text: "Ben! This is my cousin. Ben, Mia. Mia, Ben." },
      { speaker: "Ben", text: "Hello, Mia! What is your name again?" },
      { speaker: "Mia", text: "Ha! My name is Mia. And you are Ben." },
      { speaker: "Ben", text: "Yes! Where are you from, Mia?" },
      { speaker: "Mia", text: "I am from Rome. Where are you from?" },
      { speaker: "Ben", text: "I am from Leeds. Who is your favourite person in Rome?" },
      { speaker: "Mia", text: "My grandma! She cooks the best food in Italy!" },
    ],
  },

  realLife: {
    title: "The three questions game",
    text: "Play the question game with any new person (or in your head): What is your name? Where are you from? Who is your favourite person? Three questions — and you know each other! Today, answer all three about YOURSELF, out loud.",
    examples: [
      "What is your name? — My name is…",
      "Where are you from? — I am from…",
      "Who is your best friend? — My best friend is…",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-6-3");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "WHICH question word asks about PLACES?",
        ["where", "what", "who"],
        0,
        "Where asks about places: Where are you from?"
      ),
      t.mcq(
        "guided",
        "You want to know a person's name. Ask:",
        ["What is your name?", "Where is your name?", "Who is your name?"],
        0,
        "A name is a thing → What is your name?"
      ),
      t.fill(
        "guided",
        "______ is she? (You see a new person. Ask about HER.)",
        ["who"],
        "Questions about people start with who."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "You need the toilet. Ask:",
        ["Where is the toilet, please?", "What is the toilet?", "Who is the toilet?"],
        0,
        "A place → where."
      ),
      t.mcq(
        "independent",
        "What is your name? — the best answer is:",
        ["My name is Omar.", "Yes, it is.", "I am fine, thank you."],
        0,
        "WH-questions want information: the name itself."
      ),
      t.match("independent", "Match each question with what it asks about.", [
        { left: "What is your job?", right: "a thing / an idea" },
        { left: "Where are you from?", right: "a place" },
        { left: "Who is your teacher?", right: "a person" },
      ]),

      /* 10 — speaking */
      t.speak("Ask the three friendship questions.", "What is your name? Where are you from?"),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "Where are you from?",
        "Listen. Which question do you hear?",
        ["Where are you from?", "What is your name?", "Who is she?"],
        0
      ),
      t.listenType("listening", "Who is she?", "Listen and type the question word.", ["who"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. Where is Ken from?",
        ["Japan", "Italy", "Leeds"],
        0,
        "The story says: 'I am from Japan.'"
      ),
      t.fill(
        "reading",
        "Read the story. Who is Rina? She is Ken's ______.",
        ["sister"],
        "Ken says: 'This is my sister, Rina.'"
      ),

      /* 13 — writing */
      t.write(
        "Write ONE WH-question for a new friend.",
        "Where are you from?",
        "What is…? · Where is…? · Who is…?",
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "WH-questions ask for ______.",
        ["information", "yes or no only", "nothing"],
        0,
        "They want real answers: a name, a place, a person."
      ),
      t.mcq(
        "assessment",
        "The pattern of a WH-question with be is:",
        ["WH-word + be + the rest", "be + WH-word + the rest", "the rest + be + WH-word"],
        0,
        "What IS your name? Where ARE you from? WH-word first, then the flip."
      ),
      t.fill(
        "assessment",
        "______ is the bus stop? (You want the place.)",
        ["where"],
        "Places → where."
      ),
      t.mcq(
        "assessment",
        "Which question asks about a PERSON?",
        ["Who is your teacher?", "What is your teacher?", "Where is your teacher?"],
        0,
        "Who wants people: who is your teacher?",
      ),
    ];
  })(),

  passage: {
    title: "Ken's first day",
    text: "Ken is new in class. The teacher says: 'Welcome! What is your name?' Ken answers: 'My name is Ken.' A girl asks: 'Where are you from?' Ken says: 'I am from Japan. I am from Osaka.' Then a boy asks: 'Who is your friend here?' Ken smiles: 'You! My name is Ken. What is YOUR name?' The boy laughs: 'Omar! Nice to meet you, Ken!' Three questions — and Ken has a new friend.",
  },

  commonMistakes: [
    {
      wrong: "What is your name? — Yes.",
      right: "What is your name? — My name is Ana.",
      why: "WH-questions want information. Give the name, the place or the person!",
    },
    {
      wrong: "Where is your name?",
      right: "What is your name?",
      why: "Names are things → what. Where is only for places.",
    },
  ],

  revision: {
    keyPoints: [
      "WH-questions ask for information.",
      "What = things and ideas. Where = places. Who = people.",
      "Pattern: WH-word + be + the rest. 'What is your name?'",
      "The friendship trio: What is your name? Where are you from? Who is she?",
      "Answers: My name is ___. I am from ___. She is my ___.",
    ],
    keyWords: ["what", "where", "who", "information", "from", "name"],
    selfCheck: [
      "Can you ask the three friendship questions?",
      "Which WH-word asks about places?",
      "Can you answer 'Where are you from?' about yourself?",
    ],
  },

  homework: {
    tasks: [
      "Write the three friendship questions and YOUR answers to each.",
      "Play the question game with a friend or family member.",
      "Find three WH-questions in a song, a film or this app today.",
      "Write two more questions with where ('Where is the…?').",
    ],
  },
};
