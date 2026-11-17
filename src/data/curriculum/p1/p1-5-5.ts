import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 5 · Lesson 5 — Affirmative Sentences
 *
 * Affirmative = yes-sentences: statements that say something IS so.
 * Consolidates all learned patterns (S+V, S+V+O, be+noun, be+adjective,
 * be+place) and previews negation (not) for the next lesson.
 */
export const p1_5_5: StructuredCourseLesson = {
  slug: "p1-5-5",
  title: "Affirmative Sentences",
  subtitle: "Sentences that say YES",
  description:
    "An affirmative sentence says something IS so — a yes sentence. 'I am a student. She likes tea. We live here.' Review every pattern you know and get ready for 'not'.",
  minutes: 10,
  skills: ["reading", "writing", "listening", "speaking"],
  content: draftMeta(["st03-m03-u01-l01"]),

  introduction:
    "You have been building affirmative sentences for weeks — without knowing their name! Today you meet the official term and collect everything you know into one big review. Affirmative sentences are the 'yes' sentences of English: they state facts. Master them, and the next lesson (negatives) becomes easy.",

  objectives: [
    "You can say what an affirmative sentence is.",
    "You can build affirmative sentences in all the patterns you know.",
    "You can state true facts about yourself in affirmative sentences.",
  ],

  prerequisites: [
    { lessonSlug: "p1-5-1", label: "You know be verbs (lesson 21)." },
    { lessonSlug: "p1-4-3", label: "You know S + V and S + V + O (lessons 18–19)." },
    { lessonSlug: "p1-5-3", label: "You know place sentences (lesson 23)." },
  ],

  vocab: [
    {
      id: "p1-5-5-w1",
      term: "affirmative",
      pos: "adjective",
      definition: "saying yes; saying that something IS so",
      example: "'I am happy' is an affirmative sentence.",
    },
    {
      id: "p1-5-5-w2",
      term: "fact",
      pos: "noun",
      definition: "something that is true",
      example: "'The sun is hot' is a fact.",
    },
    {
      id: "p1-5-5-w3",
      term: "true",
      pos: "adjective",
      definition: "real; matching the facts",
      example: "This sentence is true: I drink tea.",
    },
    {
      id: "p1-5-5-w4",
      term: "false",
      pos: "adjective",
      definition: "not true",
      example: "'Cats fly' is false — cats do not fly!",
    },
    {
      id: "p1-5-5-w5",
      term: "real",
      pos: "adjective",
      definition: "existing; not imaginary",
      example: "Tell me a real fact about you.",
    },
    {
      id: "p1-5-5-w6",
      term: "every day",
      pos: "phrase",
      definition: "each day; all days",
      example: "I study English every day.",
    },
  ],

  concept: {
    definition: "An affirmative sentence says something IS so. It states a fact: 'I am a student. She likes tea. We live here.'",
    explanation: [
      "Affirmative comes from the same family as 'yes'. These sentences confirm: they say this is true, this is real, this is so. Most sentences in every book, song and conversation are affirmative.",
      "You already know every affirmative pattern: S + V ('Birds fly.'), S + V + O ('I eat rice.'), be + noun ('She is a doctor.'), be + adjective ('The tea is hot.'), be + place ('The pen is on the table.').",
      "Why learn the name now? Because its opposite is coming: negative sentences, which say something is NOT so. First master yes — then meet no.",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — Meet the yes-sentence",
      text: "'I drink tea.' Is this true for you? If yes, say it — that is an affirmative sentence: a statement that something IS so. No question mark, no 'not', just a clear statement of fact.",
      examples: ["I drink tea.", "The sun is hot.", "We learn English."],
    },
    {
      title: "Step 2 — Pattern bank review: the verb patterns",
      text: "Two verb patterns: S + V ('The dog runs.') and S + V + O ('The dog sees the cat.'). Say one of each about an animal you know.",
      examples: ["The dog runs.", "The dog sees the cat.", "I read books."],
    },
    {
      title: "Step 3 — Pattern bank review: the be patterns",
      text: "Three be patterns: be + noun ('I am a student.'), be + adjective ('She is tired.'), be + place ('The pen is on the table.'). One little verb, three jobs!",
      examples: ["I am a student.", "She is tired.", "The pen is on the table."],
    },
    {
      title: "Step 4 — True facts about you",
      text: "The best affirmative sentences are TRUE ones. Build your fact file: 'I am ___. I like ___. I eat ___. I live in ___. My family is ___.' Five facts, five sentences — that is already a real self-introduction!",
      examples: ["I am a student.", "I like rice and fish.", "I live in a big city."],
    },
    {
      title: "Step 5 — The not-preview",
      text: "Here is a secret for next lesson: every affirmative sentence has a negative twin. 'I am happy.' → 'I am not happy.' The tiny word NOT flips yes into no. Watch for it — it arrives in the next lesson!",
      examples: ["I am happy. → I am not happy.", "She likes tea. → She does not like tea."],
    },
  ],

  exampleBank: {
    basic: [
      "I am a student.",
      "She likes tea.",
      "Birds fly.",
      "The pen is on the table.",
    ],
    everyday: [
      "I wake up at seven every day.",
      "My mother cooks rice.",
      "We live in a small flat.",
      "The children play in the park.",
      "I study English every day.",
    ],
    questions: [
      "Is this sentence affirmative: 'I am happy.'?",
      "What is a true fact about you?",
      "Can you say three affirmative sentences about your day?",
    ],
    negatives: [
      "An affirmative sentence does not have 'not' in it.",
      "A question is not an affirmative sentence — it asks, it does not state.",
      "'Cats fly' is affirmative in FORM but false in FACT — check your facts too!",
    ],
    corrections: [
      {
        wrong: "I am no happy.",
        right: "I am happy. (affirmative) / I am not happy. (negative)",
        note: "For next lesson: the negative word is 'not' — one word, after be.",
      },
      {
        wrong: "You are a student? (trying to state a fact)",
        right: "You are a student.",
        note: "Affirmative sentences state. Questions ask — no question mark on statements.",
      },
    ],
  },

  dialogue: {
    title: "True or false?",
    context: "Ms Reed plays a game: she says affirmative sentences. The students shout TRUE or FALSE.",
    lines: [
      { speaker: "Ms Reed", text: "Game time! True or false? 'The sun is hot.'" },
      { speaker: "Omar", text: "TRUE!" },
      { speaker: "Ms Reed", text: "'Cats fly at night.'" },
      { speaker: "Ana", text: "FALSE! Cats sleep at night!" },
      { speaker: "Ms Reed", text: "'We learn English every day.'" },
      { speaker: "Omar", text: "TRUE! This one is my favourite fact." },
      { speaker: "Ms Reed", text: "'Ms Reed drinks ten teas a day.'" },
      { speaker: "Ana", text: "FALSE!… Only five, Ms Reed?" },
      { speaker: "Ms Reed", text: "Ha! OK — true enough!" },
    ],
  },

  realLife: {
    title: "Your fact file",
    text: "Your life is full of affirmative sentences: your job, your city, your family, your food, your day. Write five true facts today: 'I am… I like… I eat… I live… I learn…' That is a real piece of English about a real person: you.",
    examples: [
      "Fact: 'I live in ___. (city)'",
      "Fact: 'I like ___.' (food or hobby)",
      "Fact: 'My family is ___.'",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-5-5");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "An affirmative sentence ______.",
        ["says something IS so", "asks a question", "says something is not so"],
        0,
        "Affirmative = yes-sentence: it states a fact."
      ),
      t.mcq(
        "guided",
        "Which sentence is AFFIRMATIVE?",
        ["I am a student.", "Are you a student?", "I am not a student."],
        0,
        "It states a fact — no question mark, no 'not'."
      ),
      t.fill(
        "guided",
        "Complete the affirmative fact: I ______ English every day. (study)",
        ["study"],
        "With I, the verb has no s."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "Which pattern is 'She is a doctor.'?",
        ["be + noun", "S + V + O", "be + place"],
        0,
        "is (be) + a doctor (noun) — the be + noun pattern."
      ),
      t.mcq(
        "independent",
        "Which pattern is 'The pen is on the table.'?",
        ["be + place", "S + V + O", "be + adjective"],
        0,
        "is (be) + on the table (place)."
      ),
      t.match("independent", "Match each sentence with its pattern.", [
        { left: "Birds fly.", right: "S + V" },
        { left: "I eat rice.", right: "S + V + O" },
        { left: "She is tired.", right: "be + adjective" },
        { left: "The pen is in the bag.", right: "be + place" },
      ]),
      t.order(
        "independent",
        "Build an affirmative sentence from the mixed words: 'every / English / day / study / we'.",
        "We study English every day",
        "Subject + verb + object — and the time at the end."
      ),

      /* 10 — speaking */
      t.speak("Say one true affirmative fact about you.", "I study English every day."),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "I drink tea every morning.",
        "Listen. Is this sentence affirmative?",
        ["Yes — it states a fact", "No — it is a question", "No — it is negative"],
        0
      ),
      t.listenType("listening", "We live in a big city.", "Listen and type the sentence.", ["we live in a big city"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. Which fact about Dani is in the story?",
        ["She is a nurse", "She is a teacher", "She is a doctor"],
        0,
        "The story says: 'She is a nurse.'"
      ),
      t.fill(
        "reading",
        "Read the story. Dani runs ______ the park every morning.",
        ["in"],
        "The place preposition for inside the park."
      ),

      /* 13 — writing */
      t.write(
        "Write TWO true affirmative facts about you.",
        "I am a student. I like tea.",
        "Patterns: I am ___ · I like ___ · I eat ___ · I live in ___",
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "What is an affirmative sentence?",
        ["A sentence that says something IS so", "A sentence with a question mark", "A sentence with 'not'"],
        0,
        "Affirmative sentences state facts: they say yes."
      ),
      t.mcq(
        "assessment",
        "'We live in a small flat.' — which pattern?",
        ["be + place", "S + V + O", "S + V"],
        0,
        "live (verb) + in a small flat (place) — an S+V sentence with a place at the end."
      ),
      t.fill(
        "assessment",
        "State the fact: The sun ______ in the east. (rise — the sun = it)",
        ["rises"],
        "The sun = it → verb + s: rises."
      ),
      t.mcq(
        "assessment",
        "Which of these is NOT affirmative?",
        ["Are you happy?", "I am happy.", "She is happy."],
        0,
        "A question asks — it does not state. Affirmative sentences state.",
      ),
    ];
  })(),

  passage: {
    title: "Dani's fact file",
    text: "Dani writes five facts about her life. Fact one: she is a nurse. Fact two: she works at a big hospital. Fact three: she lives in a small flat next to the park. Fact four: she runs in the park every morning. Fact five: she is tired in the evening — but happy! 'These are my facts,' says Dani. 'All my sentences are true!'",
  },

  commonMistakes: [
    {
      wrong: "I am no happy.",
      right: "I am happy. / I am not happy.",
      why: "The negative word is 'not' (not 'no'), and it comes after be: I am not happy.",
    },
    {
      wrong: "You are a student? (trying to state a fact)",
      right: "You are a student.",
      why: "Statements end with a full stop. Question marks are for questions.",
    },
  ],

  revision: {
    keyPoints: [
      "An affirmative sentence says something IS so — it states a fact.",
      "All your patterns are affirmative: S+V, S+V+O, be+noun, be+adjective, be+place.",
      "Affirmative sentences end with a full stop, not a question mark.",
      "The negative twin arrives next lesson: 'not' flips yes into no.",
    ],
    keyWords: ["affirmative", "fact", "true", "false", "real", "every day"],
    selfCheck: [
      "Can you say three true affirmative facts about yourself?",
      "Which patterns have you used today — be+noun or S+V+O?",
      "What tiny word will flip a yes-sentence into a no-sentence?",
    ],
  },

  homework: {
    tasks: [
      "Write your fact file: five true affirmative sentences about your life.",
      "Label each sentence with its pattern: S+V, S+V+O, be+noun, be+adjective or be+place.",
      "Say your fact file out loud to someone (or to the mirror!).",
      "Find three affirmative sentences in a song or message.",
    ],
  },
};
