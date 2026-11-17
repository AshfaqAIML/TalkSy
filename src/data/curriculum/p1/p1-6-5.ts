import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 6 · Lesson 5 — Basic Self-Introduction (course capstone)
 *
 * The six-line self-introduction: Hello. My name is ___. I am from ___.
 * I am a ___. I like ___. Nice to meet you. Everything in the course
 * comes together in the learner's first independent English speech.
 */
export const p1_6_5: StructuredCourseLesson = {
  slug: "p1-6-5",
  title: "Basic Self-Introduction",
  subtitle: "Your first English speech",
  description:
    "Hello. My name is ___. I am from ___. I like ___. Nice to meet you! Six short sentences that turn you from a silent listener into an English speaker. The grand finale of your first 30 lessons.",
  minutes: 12,
  skills: ["speaking", "writing", "listening", "reading"],
  content: draftMeta([
    "st08-m01-u01-l02",
    "st08-m01-u01-l01",
  ], "Capstone lesson of the P1 Foundations course. Reviewers: please check the self-introduction pattern covers every earlier unit (greetings, be verbs, articles, likes, polite closes)."),

  introduction:
    "Thirty lessons ago, you could not read a single English word. Today, you will introduce yourself in a complete, natural, six-sentence English speech. This is the moment everything comes together: your words, your sentences, your questions, your polite phrases. Take a breath. This lesson is your graduation.",

  objectives: [
    "You can introduce yourself in six sentences: name, city, job or study, family, likes, greeting close.",
    "You can answer the three big questions for meeting new people.",
    "You can write your own self-introduction and say it out loud.",
  ],

  prerequisites: [
    { lessonSlug: "p1-6-3", label: "You can ask and answer the friendship questions (lesson 28)." },
    { lessonSlug: "p1-6-4", label: "You know the daily-use sentences (lesson 29)." },
    { lessonSlug: "p1-5-1", label: "You know be verbs (lesson 21)." },
  ],

  vocab: [
    {
      id: "p1-6-5-w1",
      term: "my name is",
      pos: "phrase",
      definition: "the words that tell people what you are called",
      example: "My name is Ana.",
    },
    {
      id: "p1-6-5-w2",
      term: "from",
      pos: "preposition",
      definition: "showing your home city or country",
      example: "I am from Rome.",
    },
    {
      id: "p1-6-5-w3",
      term: "nice to meet you",
      pos: "phrase",
      definition: "the friendly words when you meet a person for the first time",
      example: "Hello, I'm Ben. Nice to meet you!",
    },
    {
      id: "p1-6-5-w4",
      term: "years old",
      pos: "phrase",
      definition: "the words for telling your age",
      example: "I am 25 years old.",
    },
    {
      id: "p1-6-5-w5",
      term: "to introduce",
      pos: "verb",
      definition: "to tell people who you are",
      example: "Please introduce yourself.",
    },
    {
      id: "p1-6-5-w6",
      term: "myself",
      pos: "pronoun",
      definition: "me — the person you are when you talk about you",
      example: "Let me introduce myself!",
    },
    {
      id: "p1-6-5-w7",
      term: "friend",
      pos: "noun",
      definition: "a person you like and trust",
      example: "You are my first English friend!",
    },
  ],

  concept: {
    definition: "A self-introduction tells who you are: your name, your city, your job or study, your family, your likes. Hello plus five true facts — and you have met the world.",
    explanation: [
      "Every language learner's first speech is the same wonderful thing: a short list of true facts. My name is Sara. I am from Cairo. I am a nurse. I like tea and books. Nice to meet you!",
      "The pattern uses everything you learned: greetings (Hello!), be verbs (I am), articles (a nurse), likes (I like), polite closes (Nice to meet you). You are not learning something new — you are assembling something you own.",
      "Here is the beautiful part: there is no wrong self-introduction, as long as it is true. Your facts, your speech. Six sentences, spoken clearly, and you have done something that thirty lessons ago was impossible.",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — The six-line map",
      text: "Here is the whole speech, line by line: 1. Hello! 2. My name is ___. 3. I am from ___. 4. I am a ___. 5. I like ___. 6. Nice to meet you! Read the map twice. Then we build each line.",
      examples: [
        "Hello!",
        "My name is Sara.",
        "I am from Cairo.",
        "I am a nurse.",
        "I like tea and books.",
        "Nice to meet you!",
      ],
    },
    {
      title: "Step 2 — Lines 1 and 2: the greeting and your name",
      text: "Start warm: 'Hello!' Then your name: 'My name is Omar.' You can also use the short form: 'I'm Omar.' Both are perfect. Say your own name with a smile — it is the most important word in the speech.",
      examples: ["Hello!", "My name is Omar.", "I'm Omar."],
    },
    {
      title: "Step 3 — Line 3: your city",
      text: "Where are you from? 'I am from Tokyo.' 'I'm from Mexico City.' Add your country if you like: 'I am from Egypt.' One line, one place — and your listener already knows you better.",
      examples: ["I am from Tokyo.", "I'm from Mexico City.", "I am from Egypt."],
    },
    {
      title: "Step 4 — Lines 4 and 5: what you do and what you like",
      text: "Your job or study — remember the article! 'I am a teacher. I am a student.' Your likes: 'I like tea. I like football and music.' Two lines that paint your daily life.",
      examples: ["I am a teacher.", "I am a student.", "I like football and music.", "I like tea."],
    },
    {
      title: "Step 5 — Line 6 and the finish",
      text: "Close warmly: 'Nice to meet you!' The other person answers: 'Nice to meet you too!' Optional extra lines: 'I am 30 years old.' 'I have two children.' 'I am happy to be here.' Your speech, your choice.",
      examples: ["Nice to meet you!", "Nice to meet you too!", "I am 30 years old.", "I am happy to be here."],
    },
    {
      title: "Step 6 — Put it together — YOUR turn",
      text: "Now build YOUR six lines. Fill the map with your true facts. Practise: say it slowly three times, then at normal speed. Then record yourself saying it. This is your first English speech — and it only took thirty lessons!",
      examples: [
        "Hello! My name is ___.",
        "I am from ___.",
        "I am a ___.",
        "I like ___.",
        "Nice to meet you!",
      ],
    },
  ],

  exampleBank: {
    basic: [
      "Hello! My name is Sara.",
      "I am from Cairo.",
      "I am a nurse.",
      "I like tea and books.",
      "Nice to meet you!",
    ],
    everyday: [
      "Hi! I'm Ben. I'm from Leeds.",
      "I'm a student. I study English.",
      "I like football and music.",
      "I have one sister and two brothers.",
      "I'm happy to be here!",
    ],
    questions: [
      "What is your name?",
      "Where are you from?",
      "What do you like?",
    ],
    negatives: [
      "A self-introduction is not a long story — six lines are enough.",
      "Don't rush: clear words beat fast words.",
      "You are not perfect — you are speaking. That is the point!",
    ],
    corrections: [
      {
        wrong: "I am teacher.",
        right: "I am a teacher.",
        note: "Jobs need their article: a teacher, a nurse, a student.",
      },
      {
        wrong: "My name Sara.",
        right: "My name is Sara.",
        note: "Keep the be verb: My name IS Sara. (Or the short road: I'm Sara.)",
      },
    ],
  },

  dialogue: {
    title: "Two new students",
    context: "First day of a new English course. Sara and Ben meet before class.",
    lines: [
      { speaker: "Sara", text: "Hello! I'm Sara. Nice to meet you!" },
      { speaker: "Ben", text: "Hi, Sara! I'm Ben. Nice to meet you too!" },
      { speaker: "Sara", text: "Where are you from, Ben?" },
      { speaker: "Ben", text: "I'm from Leeds. And you?" },
      { speaker: "Sara", text: "I'm from Cairo. I'm a nurse. What do you do?" },
      { speaker: "Ben", text: "I'm a student — and a bus driver! I like music and football." },
      { speaker: "Sara", text: "I like books and tea. We are a good class already!" },
    ],
  },

  realLife: {
    title: "Your speech, your life",
    text: "This speech is not just an exercise — it is a tool for life. New job, new class, new neighbour, new app: when someone says 'Introduce yourself', you have six true sentences ready. Practise it until it flows, then use it in the real world.",
    examples: [
      "Practise your six lines in front of a mirror.",
      "Record your speech on your phone and listen back.",
      "Use it once in real life this week.",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-6-5");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "How does a self-introduction usually start?",
        ["Hello! My name is ___.", "Where are you from?", "Nice to meet you too!"],
        0,
        "Greeting first, then your name."
      ),
      t.mcq(
        "guided",
        "Which sentence tells your CITY?",
        ["I am from Rome.", "I am a nurse.", "I like tea."],
        0,
        "From + place = your city or country."
      ),
      t.fill(
        "guided",
        "Complete the introduction: I am ______ student. (job word with article)",
        ["a"],
        "Jobs need their article: a student."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "Someone says 'Nice to meet you!' You answer:",
        ["Nice to meet you too!", "My name is Ben.", "I'm fine, thank you."],
        0,
        "Too = also. The friendly echo completes the meeting."
      ),
      t.mcq(
        "independent",
        "Which line uses the be verb correctly?",
        ["I am a teacher.", "I is a teacher.", "I are a teacher."],
        0,
        "I + am — always."
      ),
      t.match("independent", "Match each question with its introduction line.", [
        { left: "What is your name?", right: "My name is Sara." },
        { left: "Where are you from?", right: "I am from Cairo." },
        { left: "What do you do?", right: "I am a nurse." },
        { left: "What do you like?", right: "I like tea and books." },
      ]),

      /* 10 — speaking */
      t.speak(
        "Say the first two lines of YOUR self-introduction.",
        "Hello! My name is Ana."
      ),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "Hello! My name is Ben. I am from Leeds.",
        "Listen. Where is Ben from?",
        ["Leeds", "Cairo", "Rome"],
        0
      ),
      t.listenType("listening", "Nice to meet you!", "Listen and type the phrase.", ["nice to meet you"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. What is Fatima's job?",
        ["She is a teacher", "She is a nurse", "She is a student"],
        0,
        "The story says: 'I am a teacher.'"
      ),
      t.fill(
        "reading",
        "Read the story. Fatima likes tea and ______.",
        ["music"],
        "Her two likes: tea and this."
      ),

      /* 13 — writing */
      t.write(
        "Write YOUR full self-introduction — all six lines!",
        "Hello! My name is Ana. I am from Rome. I am a student. I like tea and books. Nice to meet you!",
        "Hello! · My name is… · I am from… · I am a… · I like… · Nice to meet you!"
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "A self-introduction tells people ______.",
        ["who you are: name, city, job, likes", "the news of the day", "a long story about your family"],
        0,
        "Six true facts — that is the speech."
      ),
      t.mcq(
        "assessment",
        "Which job sentence has the article it needs?",
        ["I am a doctor.", "I am doctor.", "I doctor."],
        0,
        "Jobs need a: a doctor, a nurse, a teacher."
      ),
      t.fill(
        "assessment",
        "Complete: My name ______ Ana.",
        ["is"],
        "My name IS — keep the be verb."
      ),
      t.mcq(
        "assessment",
        "How do you close a self-introduction warmly?",
        ["Nice to meet you!", "Good night!", "Where are you from?"],
        0,
        "Nice to meet you! — the friendly finish. (They answer: Nice to meet you too!)",
      ),
      t.order(
        "assessment",
        "Put the words in order — the first line of your speech: 'name / is / my / Ana'.",
        "My name is Ana",
        "My name is — the classic opening."
      ),
    ];
  })(),

  passage: {
    title: "Fatima introduces herself",
    text: "It is the first day of English class. A woman stands up. 'Hello! My name is Fatima. I am from Casablanca. I am a teacher. I teach maths. I am 32 years old. I like tea, music and long walks. I have one daughter. Her name is Nora. Nice to meet you all!' The class smiles. Fatima sits down. Six sentences — and now twenty people know her. That is the power of a self-introduction!",
  },

  commonMistakes: [
    {
      wrong: "I am teacher.",
      right: "I am a teacher.",
      why: "Jobs need their article: a teacher, a nurse, a student.",
    },
    {
      wrong: "My name Sara.",
      right: "My name is Sara.",
      why: "Keep the be verb: My name IS Sara. Or take the short road: I'm Sara.",
    },
    {
      wrong: "I am 32 years. (missing 'old')",
      right: "I am 32 years old.",
      why: "The full phrase is 'years old' — both words travel together.",
    },
  ],

  revision: {
    keyPoints: [
      "A self-introduction is six true sentences about you.",
      "The map: Hello! · My name is… · I am from… · I am a… · I like… · Nice to meet you!",
      "Jobs need their article: I am a teacher.",
      "Optional extras: your age (I am 30 years old), your family (I have one sister).",
      "The answer to 'Nice to meet you!' is 'Nice to meet you too!'",
    ],
    keyWords: ["my name is", "from", "nice to meet you", "years old", "to introduce", "myself", "friend"],
    selfCheck: [
      "Can you say your six lines without reading them?",
      "Does your job line have its article (a/an)?",
      "Have you recorded your speech and listened back once?",
    ],
  },

  homework: {
    tasks: [
      "Write your six-line self-introduction on paper. Make every line true.",
      "Practise it three times: slowly, normally, and with a smile.",
      "Record your speech on your phone. Listen once. Be proud!",
      "Use your speech in real life once this week — a new colleague, a language partner, anyone!",
    ],
  },
};
