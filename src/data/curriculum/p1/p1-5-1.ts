import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 5 · Lesson 1 — Be Verbs (am, is, are)
 *
 * I am, you are, he/she/it is, we/they are. The be verb tells what someone
 * or something is; contractions (I'm, she's, we're) make speech natural.
 */
export const p1_5_1: StructuredCourseLesson = {
  slug: "p1-5-1",
  title: "Be Verbs",
  subtitle: "am, is and are",
  description:
    "I am a student. She is happy. We are friends. The be verbs — am, is, are — are the most used verbs in English. Learn which one goes with which subject.",
  minutes: 12,
  skills: ["reading", "writing", "listening", "speaking"],
  content: draftMeta(["st03-m02-u01-l01"]),

  introduction:
    "Time to meet the three busiest words in English: am, is and are. They all mean the same thing — they connect a subject to what it IS — but each one works with different subjects. I am. She is. We are. Learn the team today and a whole world of sentences opens up.",

  objectives: [
    "You can say which be verb goes with which subject: I am, you are, he is.",
    "You can build sentences with be: 'I am a student.'",
    "You can use short forms: I'm, she's, we're.",
  ],

  prerequisites: [
    { lessonSlug: "p1-4-3", label: "You know the -s rule subjects: he, she, it (lesson 18)." },
    { lessonSlug: "p1-4-5", label: "You know articles: a teacher, an egg (lesson 20)." },
  ],

  vocab: [
    {
      id: "p1-5-1-w1",
      term: "be verb",
      pos: "noun",
      definition: "the words am, is and are — they tell what someone or something is",
      example: "'Am', 'is' and 'are' are be verbs.",
    },
    {
      id: "p1-5-1-w2",
      term: "am",
      pos: "verb",
      definition: "the be verb for I",
      example: "I am happy.",
    },
    {
      id: "p1-5-1-w3",
      term: "is",
      pos: "verb",
      definition: "the be verb for one person or thing: he, she, it",
      example: "She is a doctor.",
    },
    {
      id: "p1-5-1-w4",
      term: "are",
      pos: "verb",
      definition: "the be verb for you, we and they",
      example: "We are friends.",
    },
    {
      id: "p1-5-1-w5",
      term: "short form",
      pos: "noun",
      definition: "two words joined with a comma-like mark: I'm = I am",
      example: "I'm tired. (I am tired.)",
    },
    {
      id: "p1-5-1-w6",
      term: "to be",
      pos: "verb",
      definition: "the name of the verb family: am, is, are",
      example: "Am, is and are are forms of 'to be'.",
    },
  ],

  concept: {
    definition: "Be verbs tell what someone or something is. There are three: am, is, are. I am. You are. She is. We are. They are.",
    explanation: [
      "One job, three workers. AM works only with I. IS works with he, she and it — one person or one thing. ARE works with you, we and they — and with any group.",
      "Be verbs are connectors. They join a subject to what it is: 'I am a student.' 'The tea is hot.' 'We are friends.' Without the be verb, the sentence is broken: 'I a student' — no!",
      "In friendly speech and messages, be verbs shrink: I am → I'm. She is → She's. We are → We're. Both forms are correct — short forms are just faster and warmer.",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — The be verb team",
      text: "Meet the team: am, is, are. All three do the same job — connecting a subject to what it is. The only question is which subject each one works with. Let's sort them.",
      examples: ["Am goes with I.", "Is goes with he, she and it.", "Are goes with you, we and they."],
    },
    {
      title: "Step 2 — I AM and YOU ARE",
      text: "Talking about yourself? I am. 'I am Omar. I am a student. I am happy.' Talking to someone? You are. 'You are my friend. You are kind.'",
      examples: ["I am a student.", "I am happy.", "You are my friend.", "You are late!"],
    },
    {
      title: "Step 3 — HE IS, SHE IS, IT IS",
      text: "One person or one thing: is. 'He is a teacher. She is a doctor. It is a cat.' And one noun too: 'The dog is big. Ana is here. The tea is hot.'",
      examples: ["He is a teacher.", "She is tired.", "It is cold today.", "The dog is big."],
    },
    {
      title: "Step 4 — WE ARE, THEY ARE",
      text: "Groups take are. 'We are students. They are teachers. My parents are here.' You (when talking to two or more people) also takes are: 'You are a good class!'",
      examples: ["We are friends.", "They are students.", "My parents are here."],
    },
    {
      title: "Step 5 — Short forms: I'm, she's, we're",
      text: "In messages and friendly talk, be verbs shrink. I am → I'm. She is → She's. It is → It's. We are → We're. They are → They're. Say them fast — they sound like natural English.",
      examples: ["I'm Omar.", "She's a doctor.", "It's cold!", "We're friends.", "They're here."],
    },
  ],

  exampleBank: {
    basic: [
      "I am a student.",
      "You are my friend.",
      "He is a teacher.",
      "She is happy.",
      "It is a cat.",
      "We are ready.",
    ],
    everyday: [
      "I'm tired today.",
      "It's cold this morning.",
      "She's at the shop.",
      "We're late for the bus!",
      "They're good people.",
    ],
    questions: [
      "Are you a student?",
      "Is she a doctor?",
      "Am I late?",
    ],
    negatives: [
      "I is not correct — say 'I am'.",
      "She are not correct — say 'she is'.",
      "We is not correct — say 'we are'.",
    ],
    corrections: [
      {
        wrong: "I is happy.",
        right: "I am happy.",
        note: "I always works with am.",
      },
      {
        wrong: "They is students.",
        right: "They are students.",
        note: "Groups (they, we, you) always work with are.",
      },
    ],
  },

  dialogue: {
    title: "New in class",
    context: "Ben joins the class for the first time. Ana shows him around.",
    lines: [
      { speaker: "Ana", text: "Hello! Are you new?" },
      { speaker: "Ben", text: "Yes. I'm Ben. I'm from Leeds." },
      { speaker: "Ana", text: "Welcome, Ben! I'm Ana. This is Omar." },
      { speaker: "Ben", text: "Hi, Omar. Is she in our class?" },
      { speaker: "Omar", text: "Yes! We're all in Class Three. It's a good class." },
      { speaker: "Ben", text: "Great. I'm happy to be here!" },
    ],
  },

  realLife: {
    title: "Be verbs everywhere",
    text: "Listen to any English song or film and you will hear am, is and are every few seconds. They are the glue of English. Today, describe your world: 'I am… It is… We are…' — three sentences about your day, using the be verb team.",
    examples: [
      "Describe yourself: 'I am a student. I'm from…'",
      "Describe the weather: 'It is hot today.'",
      "Describe your family: 'We are a big family.'",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-5-1");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "Which be verb works with I?",
        ["am", "is", "are"],
        0,
        "I am — always am with I."
      ),
      t.mcq(
        "guided",
        "She ______ a doctor.",
        ["is", "am", "are"],
        0,
        "She = one person → is."
      ),
      t.fill(
        "guided",
        "We ______ students. (am / is / are)",
        ["are"],
        "We is a group → are."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "The dog ______ big. (one dog)",
        ["is", "are", "am"],
        0,
        "The dog = it, one thing → is."
      ),
      t.mcq(
        "independent",
        "Which sentence is correct?",
        ["They are teachers.", "They is teachers.", "They am teachers."],
        0,
        "They → are. Groups always take are."
      ),
      t.match("independent", "Match each subject with its be verb.", [
        { left: "I", right: "am" },
        { left: "He", right: "is" },
        { left: "They", right: "are" },
      ]),

      /* 10 — speaking */
      t.speak("Introduce yourself with a be verb.", "I am a student."),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "I am a student.",
        "Listen. Which be verb do you hear?",
        ["am", "is", "are"],
        0
      ),
      t.listenType("listening", "She is happy today.", "Listen and type the be verb.", ["is"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. What is Sam's dog?",
        ["Small and brown", "Big and black", "Old and white"],
        0,
        "The story says: 'It is small and brown.'"
      ),
      t.fill(
        "reading",
        "Read the story. Sam and Mia ______ good friends.",
        ["are"],
        "Two people = a group → are."
      ),

      /* 13 — writing */
      t.write(
        "Write one sentence about you with a be verb: 'I am ___.'",
        "I am a student.",
        "I + am + a noun or a feeling word."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "Which be verb works with he, she and it?",
        ["is", "am", "are"],
        0,
        "One person or thing → is."
      ),
      t.mcq(
        "assessment",
        "'You' works with ______.",
        ["are", "is", "am"],
        0,
        "You are — even for one person!"
      ),
      t.fill(
        "assessment",
        "I'm is the short form of I ______.",
        ["am"],
        "I am → I'm."
      ),
      t.mcq(
        "assessment",
        "Which sentence uses WE correctly?",
        ["We are friends.", "We is friends.", "We am friends."],
        0,
        "We → are. Remember: groups take are."
      ),
    ];
  })(),

  passage: {
    title: "Sam and Mia",
    text: "Sam is a student. He is ten years old. His dog is small and brown. Its name is Coco. Mia is Sam's best friend. She is funny. Sam and Mia are in the same class. Their teacher is Ms Reed. She is kind. 'We are lucky,' says Sam. 'Our class is good, and Coco is the best dog!'",
  },

  commonMistakes: [
    {
      wrong: "I is happy.",
      right: "I am happy.",
      why: "I always works with am — never is.",
    },
    {
      wrong: "They is students.",
      right: "They are students.",
      why: "Groups (they, we, you) always work with are.",
    },
    {
      wrong: "She are a doctor.",
      right: "She is a doctor.",
      why: "One person (she) takes is.",
    },
  ],

  revision: {
    keyPoints: [
      "Be verbs tell what someone or something is: am, is, are.",
      "I am. You are. He/she/it is. We are. They are.",
      "One person or thing → is. Groups → are. I → am.",
      "Short forms: I'm, she's, it's, we're, they're.",
      "Be verbs connect: 'I am a student. It is cold.'",
    ],
    keyWords: ["be verb", "am", "is", "are", "short form", "to be"],
    selfCheck: [
      "Which be verb works with 'my friends'?",
      "Can you say three sentences about yourself with am?",
      "What is the short form of 'she is'?",
    ],
  },

  homework: {
    tasks: [
      "Write all six combinations: I am, you are, he is, she is, it is, we are, they are.",
      "Write three sentences about your family with is or are.",
      "Send a message with a short form: 'I'm fine. How are you?'",
      "Describe today's weather: 'It is…'",
    ],
  },
};
