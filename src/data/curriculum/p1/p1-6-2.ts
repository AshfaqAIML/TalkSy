import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 6 · Lesson 2 — Basic Questions (Yes/No)
 *
 * Be moves to the front: 'You are tired.' → 'Are you tired?' Short
 * answers (Yes, I am. / No, I'm not.), the rising voice, and the
 * question mark.
 */
export const p1_6_2: StructuredCourseLesson = {
  slug: "p1-6-2",
  title: "Basic Questions",
  subtitle: "Yes/no questions",
  description:
    "Are you tired? Is this your pen? Learn the flip that turns statements into questions — and how to answer politely with 'Yes, I am' and 'No, I'm not'.",
  minutes: 12,
  skills: ["listening", "speaking", "reading", "writing"],
  content: draftMeta(["st03-m03-u01-l02"]),

  introduction:
    "You can say things. Now learn to ASK things! Today's trick is beautifully small: take a be sentence and flip the first two words. 'You are tired.' → 'Are you tired?' That's it — you are asking questions in English. Add the short answers, and you can hold a real conversation.",

  objectives: [
    "You can turn a be statement into a yes/no question.",
    "You can answer with short answers: 'Yes, I am.' / 'No, I'm not.'",
    "You can use the question mark and the rising voice.",
  ],

  prerequisites: [
    { lessonSlug: "p1-5-1", label: "You know be verbs (lesson 21)." },
    { lessonSlug: "p1-6-1", label: "You know negatives with not (lesson 26)." },
  ],

  vocab: [
    {
      id: "p1-6-2-w1",
      term: "question",
      pos: "noun",
      definition: "a sentence that asks something",
      example: "'Are you tired?' is a question.",
    },
    {
      id: "p1-6-2-w2",
      term: "question mark",
      pos: "noun",
      definition: "the mark (?) at the end of a question",
      example: "Questions end with a question mark.",
    },
    {
      id: "p1-6-2-w3",
      term: "answer",
      pos: "noun",
      definition: "what you say after a question",
      example: "'Yes, I am' is an answer.",
    },
    {
      id: "p1-6-2-w4",
      term: "short answer",
      pos: "noun",
      definition: "a quick two-word answer to a yes/no question",
      example: "Are you happy? — Yes, I am!",
    },
    {
      id: "p1-6-2-w5",
      term: "to ask",
      pos: "verb",
      definition: "to say a question to someone",
      example: "Ask me a question!",
    },
    {
      id: "p1-6-2-w6",
      term: "maybe",
      pos: "adverb",
      definition: "perhaps; yes or no, I am not sure",
      example: "Are you free tomorrow? — Maybe!",
    },
  ],

  concept: {
    definition: "A yes/no question asks for the answer yes or no. Move the be verb to the front: 'You are tired.' → 'Are you tired?'",
    explanation: [
      "Statements tell; questions ask. And English has a beautiful flip for making questions with be: the be verb jumps to the FRONT. 'She is a doctor.' → 'Is she a doctor?' 'They are here.' → 'Are they here?'",
      "Answering is easy with short answers: 'Yes, she is.' 'No, they aren't.' 'Yes, I am.' 'No, I'm not.' Two or three words — polite, complete, natural.",
      "Two finishing touches: write a question mark (?) at the end, and let your voice RISE a little at the end when you speak. The rising voice says: 'your turn — answer me!'",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — The big flip",
      text: "Watch the be verb jump. 'You are tired.' — flip — 'Are you tired?' The subject and the be verb swap places. That single move turns any be statement into a question!",
      examples: ["You are tired. → Are you tired?", "She is happy. → Is she happy?", "It is cold. → Is it cold?"],
    },
    {
      title: "Step 2 — Yes, I am! (positive short answers)",
      text: "When the answer is yes, echo the be verb back: 'Are you tired?' — 'Yes, I am.' 'Is she a doctor?' — 'Yes, she is.' 'Are they here?' — 'Yes, they are.' Short, warm, done.",
      examples: ["Are you tired? — Yes, I am.", "Is she a doctor? — Yes, she is.", "Are they here? — Yes, they are."],
    },
    {
      title: "Step 3 — No, I'm not. (negative short answers)",
      text: "When the answer is no: 'Are you tired?' — 'No, I'm not.' 'Is it cold?' — 'No, it isn't.' 'Are we late?' — 'No, we aren't.' Notice: the short forms come out to play!",
      examples: ["Are you tired? — No, I'm not.", "Is it cold? — No, it isn't.", "Are we late? — No, we aren't."],
    },
    {
      title: "Step 4 — The question mark and the rising voice",
      text: "In writing, every question ends with (?). In speaking, your voice rises at the end: 'Are you tired↗?' That little climb tells the listener a question is flying towards them. Try it out loud!",
      examples: ["Are you happy↗?", "Is this your pen↗?", "Are we late↗?"],
    },
    {
      title: "Step 5 — Question tennis",
      text: "Now play question tennis: ask, answer, ask again. 'Are you a student?' — 'Yes, I am. Are you a teacher?' — 'No, I'm not. I'm a student too!' Every flip of the ball is real conversation practice.",
      examples: [
        "Are you a student? — Yes, I am.",
        "Are you from Spain? — No, I'm not. I'm from Italy!",
      ],
    },
  ],

  exampleBank: {
    basic: [
      "Are you tired?",
      "Is she a doctor?",
      "Is it cold today?",
      "Are they at home?",
    ],
    everyday: [
      "Is this your bag?",
      "Are you free tomorrow?",
      "Is the shop open?",
      "Am I late?",
      "Are we ready?",
    ],
    questions: [
      "Are you happy?",
      "Is this your pen?",
      "Am I in the right class?",
    ],
    negatives: [
      "No, I'm not tired.",
      "No, it isn't cold.",
      "No, they aren't here.",
    ],
    corrections: [
      {
        wrong: "You are tired?",
        right: "Are you tired?",
        note: "For real questions, flip the be verb to the front. (Rising-voice 'Really?' questions are a different tool for later!)",
      },
      {
        wrong: "Is she a doctor. (with a full stop)",
        right: "Is she a doctor?",
        note: "Questions wear a question mark (?), not a full stop.",
      },
    ],
  },

  dialogue: {
    title: "Question tennis",
    context: "Ana and Ben wait for the bus. To pass the time, they play question tennis.",
    lines: [
      { speaker: "Ana", text: "Tennis time! Are you ready?" },
      { speaker: "Ben", text: "Yes, I am! You start." },
      { speaker: "Ana", text: "Are you from this city?" },
      { speaker: "Ben", text: "No, I'm not. I'm from Leeds. Is the bus late?" },
      { speaker: "Ana", text: "Maybe! Is that our bus?" },
      { speaker: "Ben", text: "No, it isn't. That's the number five." },
      { speaker: "Ana", text: "Ha! Are buses always this slow in Leeds?" },
      { speaker: "Ben", text: "Yes, they are! Welcome to my life!" },
    ],
  },

  realLife: {
    title: "Ask the world",
    text: "Yes/no questions run daily life: 'Is this seat free?' 'Is the shop open?' 'Are you ready?' Today, ask three yes/no questions — to a person, or quietly to yourself as practice. Remember the flip: be verb first!",
    examples: [
      "At a café: 'Is this seat free?'",
      "At a shop: 'Are you open?'",
      "With a friend: 'Are you free tomorrow?'",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-6-2");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "How do you make a be question?",
        ["Move the be verb to the front", "Add not to the sentence", "Say it louder"],
        0,
        "You are tired. → Are you tired? Flip the first two words."
      ),
      t.mcq(
        "guided",
        "'She is happy.' — the question is:",
        ["Is she happy?", "She is happy?", "Happy is she?"],
        0,
        "Be verb to the front: Is she happy?"
      ),
      t.fill(
        "guided",
        "Are you tired? Answer YES: Yes, I ______.",
        ["am"],
        "Echo the be verb back: yes, I am."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "'It is cold today.' — the question is:",
        ["Is it cold today?", "It is cold today?", "Cold is it today?"],
        0,
        "Is it cold today? — flip!"
      ),
      t.mcq(
        "independent",
        "Is this your pen? Answer NO:",
        ["No, it isn't.", "No, it is.", "No, I'm not."],
        0,
        "The question asks about the pen (it) → No, it isn't."
      ),
      t.match("independent", "Match each question with its short answer.", [
        { left: "Are you a student?", right: "Yes, I am." },
        { left: "Is she a teacher?", right: "No, she isn't." },
        { left: "Are they here?", right: "Yes, they are." },
      ]),

      /* 10 — speaking */
      t.speak("Ask me if I am tired.", "Are you tired?"),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "Is this your bag?",
        "Listen. Is this a question or a statement?",
        ["A question", "A statement", "A negative"],
        0
      ),
      t.listenType("listening", "Are you free tomorrow?", "Listen and type the question.", ["are you free tomorrow"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. What does Ben ask the woman?",
        ["'Is this seat free?'", "'Are you tired?'", "'Is the shop open?'"],
        0,
        "Ben asks: 'Is this seat free?'"
      ),
      t.fill(
        "reading",
        "Read the story. Is Ben a noisy person? — No, he ______.",
        ["isn't"],
        "Short negative answer with he: isn't."
      ),

      /* 13 — writing */
      t.write(
        "Turn this statement into a question and write it: 'You are from Spain.'",
        "Are you from Spain?",
        "Flip the first two words. Add a question mark!",
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "A yes/no question asks for ______.",
        ["the answer yes or no", "a long story", "a place"],
        0,
        "Are you tired? — Yes or No!"
      ),
      t.mcq(
        "assessment",
        "'They are at home.' — the question is:",
        ["Are they at home?", "They are at home?", "At home are they?"],
        0,
        "Be verb to the front: Are they at home?"
      ),
      t.fill(
        "assessment",
        "Is she a doctor? Answer NO: No, she ______.",
        ["isn't"],
        "Short negative answer echoes isn't."
      ),
      t.mcq(
        "assessment",
        "What mark ends every question?",
        ["? (a question mark)", ". (a full stop)", ", (a comma)"],
        0,
        "Questions wear (?).",
      ),
    ];
  })(),

  passage: {
    title: "A question for Ben",
    text: "Ben is on the train. The train is full. A woman sits next to him. Ben asks: 'Is this seat free?' The woman smiles: 'Yes, it is. Sit down, please.' Ben sits. He is shy, but he asks one more question: 'Are you going to the coast?' The woman says: 'Yes, I am! Are you?' 'No, I'm not. I'm going home.' They talk quietly. Questions open doors — even on a full train.",
  },

  commonMistakes: [
    {
      wrong: "You are tired?",
      right: "Are you tired?",
      why: "For real questions, the be verb moves to the front of the sentence.",
    },
    {
      wrong: "Is she a doctor. (with a full stop)",
      right: "Is she a doctor?",
      why: "Questions end with a question mark (?), never a full stop.",
    },
  ],

  revision: {
    keyPoints: [
      "Yes/no questions ask for the answer yes or no.",
      "The flip: move the be verb to the front. 'You are' → 'Are you…?'",
      "Short answers echo the verb: Yes, I am. / No, she isn't. / Yes, they are.",
      "Questions end with a question mark (?) and a rising voice.",
    ],
    keyWords: ["question", "question mark", "answer", "short answer", "to ask", "maybe"],
    selfCheck: [
      "Can you flip 'It is cold' into a question?",
      "How do you answer 'Are you tired?' with no?",
      "What mark ends a question?",
    ],
  },

  homework: {
    tasks: [
      "Flip five statements into questions: 'She is a doctor.' · 'They are here.' · 'It is open.'…",
      "Write each short answer: 'Are you a student? — ___' · 'Is it cold? — ___' (yes AND no versions).",
      "Ask someone two yes/no questions today (in any language, then in English in your head).",
      "Practise the rising voice: say 'Are you ready?' five times, rising at the end.",
    ],
  },
};
