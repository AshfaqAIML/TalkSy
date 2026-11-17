import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 2 · Lesson 1 — Simple Phonics (Blending)
 *
 * Joining letter sounds into words: two sounds, then three (CVC), then word
 * families (-at, -an, -it, -og) and swapping the first sound.
 */
export const p1_2_1: StructuredCourseLesson = {
  slug: "p1-2-1",
  title: "Simple Phonics: Blending",
  subtitle: "Joining sounds into words",
  description:
    "Take the sounds /k/ /a/ /t/, slide them together, and a word appears: cat. Learn blending — the mechanic behind all reading — plus word families like cat, hat and mat.",
  minutes: 12,
  skills: ["reading", "listening", "speaking", "writing"],
  content: draftMeta([
    "st01-m04-u01-l01",
    "st01-m03-u03-l02",
  ]),

  introduction:
    "You know the letter sounds. Now comes the magic step: joining them. /k/… /a/… /t/… Say the sounds slowly, then faster, then together — cat! This is called blending, and it is how reading works. Today you will read your first words with your own voice.",

  objectives: [
    "You can blend two sounds together.",
    "You can blend three sounds into a CVC word like cat.",
    "You can read a word family by changing the first sound.",
  ],

  prerequisites: [
    { lessonSlug: "p1-1-4", label: "You know the vowels and consonants (lesson 4)." },
    { lessonSlug: "p1-1-5", label: "You know the basic letter sounds (lesson 5)." },
  ],

  vocab: [
    {
      id: "p1-2-1-w1",
      term: "to blend",
      pos: "verb",
      definition: "to join sounds together to make a word",
      example: "Blend /k/ /a/ /t/ and you get cat.",
    },
    {
      id: "p1-2-1-w2",
      term: "to join",
      pos: "verb",
      definition: "to put things together",
      example: "Join the sounds and say the word.",
    },
    {
      id: "p1-2-1-w3",
      term: "word family",
      pos: "noun",
      definition: "words that end with the same sounds, like cat, hat and mat",
      example: "Cat and hat are in the same word family.",
    },
    {
      id: "p1-2-1-w4",
      term: "to read",
      pos: "verb",
      definition: "to look at a word and say it",
      example: "I can read the word dog.",
    },
    {
      id: "p1-2-1-w5",
      term: "together",
      pos: "adverb",
      definition: "as one; joined",
      example: "Say the sounds together: cat.",
    },
    {
      id: "p1-2-1-w6",
      term: "slowly",
      pos: "adverb",
      definition: "not fast; with time",
      example: "Say it slowly first, then fast.",
    },
  ],

  concept: {
    definition: "Blending means joining letter sounds to make a word. /k/ /a/ /t/ blended together makes cat.",
    explanation: [
      "Say each sound: /k/… /a/… /t/… Now say them closer: /k/ /a/ /t/… Now say them together: cat! You just read a word.",
      "The easiest English words have three sounds: consonant, vowel, consonant. Cat, dog, pen, cup, sun — words like these are the perfect practice ground.",
      "Words that share their last two sounds are a word family. Cat, hat and mat all end in -at. Learn one family, and you can read many words at once.",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — Blend two sounds",
      text: "Start small. /m/ and /a/ make /ma/. /s/ and /u/ make /su/. Two sounds first, then three. Feel how the sounds hold hands.",
      examples: ["/m/ + /a/ makes /ma/.", "/s/ + /u/ makes /su/."],
    },
    {
      title: "Step 2 — Blend three sounds: CVC words",
      text: "Now try three sounds. /k/ /a/ /t/ — slowly: /k/… /a/… /t/… faster: /k/ /a/ /t/… together: cat! Do the same with /d/ /o/ /g/: dog.",
      examples: ["/k/ /a/ /t/ makes cat.", "/d/ /o/ /g/ makes dog.", "/p/ /e/ /n/ makes pen."],
    },
    {
      title: "Step 3 — The CVC pattern",
      text: "Cat, dog, pen, cup and sun all follow the same pattern: a consonant, then a vowel, then a consonant. Teachers call this CVC. These are the friendliest words in English — short, clear and easy to blend.",
      examples: ["c-a-t", "d-o-g", "p-e-n", "c-u-p", "s-u-n"],
    },
    {
      title: "Step 4 — Word families",
      text: "Cat, hat, mat and bat all end with -at. That is the -at family! There is also the -an family: man, pan, can. And the -it family: sit, hit? No — keep it friendly: sit and pit. And the -og family: dog and log.",
      examples: ["The -at family: cat, hat, mat, bat.", "The -an family: man, pan, can.", "The -og family: dog, log."],
    },
    {
      title: "Step 5 — Change the first sound",
      text: "Here is a game. Take the word cat. Keep the family (-at) and change only the first sound. Cat… hat… mat… bat! You just read four words by changing one letter. This is how strong readers grow.",
      examples: ["cat → hat", "hat → mat", "mat → bat"],
    },
  ],

  exampleBank: {
    basic: [
      "/k/ /a/ /t/ makes cat.",
      "/d/ /o/ /g/ makes dog.",
      "Cat, hat and mat are a word family.",
      "Pen and pig start with the same sound: /p/.",
    ],
    everyday: [
      "You can read the word BUS on a bus.",
      "You can read CUP on a cup in a café.",
      "You can read the word PEN on a pen.",
      "The word TAXI is on every taxi.",
    ],
    questions: [
      "What sounds make the word 'pen'?",
      "Can you blend /s/ /u/ /n/ into a word?",
      "Which word is in the -at family?",
    ],
    negatives: [
      "Hat and hot are not the same word.",
      "Bat is not the same word as cat — only the family is shared.",
      "Blending is not spelling with letter names.",
    ],
    corrections: [
      {
        wrong: "Reading /k/ /a/ /t/ letter by letter: 'kay, ay, tee'.",
        right: "Blend the sounds into one word: cat.",
        note: "Say the sounds, not the letter names, and slide them together.",
      },
      {
        wrong: "hat and hot are the same word.",
        right: "Hat and hot are different words.",
        note: "The middle vowel changes the word: /a/ in hat, /o/ in hot. Listen carefully!",
      },
    ],
  },

  dialogue: {
    title: "The -at family game",
    context: "Ms Reed shows sound cards. The students blend them into words.",
    lines: [
      { speaker: "Ms Reed", text: "Sounds on my cards: /k/ /a/ /t/. Blend them!" },
      { speaker: "Omar", text: "Cat!" },
      { speaker: "Ms Reed", text: "Great! Now change /k/ to /h/." },
      { speaker: "Ana", text: "Hat!" },
      { speaker: "Ms Reed", text: "Wonderful. Now /m/." },
      { speaker: "Omar", text: "Mat!" },
      { speaker: "Ms Reed", text: "You are reading words! Well done, team." },
    ],
  },

  realLife: {
    title: "Words you can already read",
    text: "Once you can blend, the world starts talking to you. Three letters on a bus: B-U-S. Three letters at breakfast: E-G-G. Short words are everywhere — on signs, cups, bags and doors.",
    examples: [
      "Read the word on a bus: bus.",
      "Read the word on your door: no? go? Look for short words.",
      "Read the word E-G-G on an egg box at the shop.",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-2-1");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "/b/ /u/ /s/ blended together makes ______.",
        ["bus", "sub", "sun"],
        0,
        "Say the sounds: /b/ /u/ /s/… bus!"
      ),
      t.mcq(
        "guided",
        "Blend the sounds /s/ /u/ /n/. What is the word?",
        ["sun", "sit", "hat"],
        0,
        "/s/ /u/ /n/ makes sun."
      ),
      t.fill(
        "guided",
        "/d/ /o/ /g/ makes the word ______.",
        ["dog"],
        "It is an animal that says woof."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "Which word is in the SAME word family as cat, hat and mat?",
        ["bat", "dog", "cup"],
        0,
        "Bat ends with -at, just like cat, hat and mat."
      ),
      t.mcq(
        "independent",
        "In the word 'pen', the middle sound is ______.",
        ["/e/", "/a/", "/o/"],
        0,
        "P-/e/-n. The short e sound is in the middle."
      ),
      t.match("independent", "Match the sounds with the word they make.", [
        { left: "/k/ /a/ /t/", right: "cat" },
        { left: "/d/ /o/ /g/", right: "dog" },
        { left: "/s/ /i/ /t/", right: "sit" },
      ]),

      /* 10 — speaking */
      t.speak("Blend the sounds and say the word: /k/ /a/ /t/.", "cat"),

      /* 11 — listening */
      t.listenChoice("listening", "hat", "Listen carefully. Which word do you hear?", [
        "hat",
        "hot",
        "hit",
      ], 0),
      t.listenType("listening", "pen", "Listen to the word and type it.", ["pen"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. Where does the cat sit?",
        ["On the mat", "On the hat", "On the bat"],
        0,
        "The story says: 'The cat sits on the mat.'"
      ),
      t.fill(
        "reading",
        "Read the story. Sam puts on his ______.",
        ["hat"],
        "Sam puts it on his head."
      ),

      /* 13 — writing */
      t.write(
        "Blend /m/ /a/ /t/ and type the word.",
        "mat",
        "It ends with -at, like cat and hat."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "Blending means ______.",
        ["joining sounds to make a word", "saying letter names", "writing capital letters"],
        0,
        "Blending is joining sounds: /k/ /a/ /t/ becomes cat."
      ),
      t.mcq(
        "assessment",
        "Which word follows the CVC pattern (consonant-vowel-consonant)?",
        ["cup", "milk", "chart"],
        0,
        "C-u-p is exactly consonant, vowel, consonant."
      ),
      t.fill(
        "assessment",
        "/h/ /a/ /t/ makes the word ______.",
        ["hat"],
        "You wear it on your head."
      ),
      t.mcq(
        "assessment",
        "Cat, bat, hat and mat are a ______.",
        ["word family", "sentence", "letter"],
        0,
        "They all end with the same sounds: -at."
      ),
    ];
  })(),

  passage: {
    title: "Sam and the cat",
    text: "Sam has a cat. The cat is fat. Sam has a hat and a mat. The cat sits on the mat. Sam puts on the hat. The cat looks at a bat. The bat goes up, up, up. Sam says: 'I can read! Cat, hat, mat, bat!'",
  },

  commonMistakes: [
    {
      wrong: "Reading /k/ /a/ /t/ as 'kay, ay, tee'.",
      right: "Blend the sounds into one word: cat.",
      why: "Letter names are for spelling. Reading joins the sounds: /k/ /a/ /t/ → cat.",
    },
    {
      wrong: "hat and hot are the same word.",
      right: "Hat and hot are different words.",
      why: "The middle vowel changes everything: /a/ in hat, /o/ in hot. Listen for the vowel.",
    },
  ],

  revision: {
    keyPoints: [
      "Blending means joining letter sounds into a word.",
      "CVC words (consonant-vowel-consonant) are the easiest to blend: cat, dog, pen.",
      "Word families share their end sounds: cat, hat, mat, bat.",
      "Change the first sound and you make a new word in the same family.",
    ],
    keyWords: ["to blend", "to join", "word family", "to read", "together", "slowly"],
    selfCheck: [
      "Can you blend /p/ /e/ /n/ into a word?",
      "Can you say three words in the -at family?",
      "Can you turn hat into mat by changing one sound?",
    ],
  },

  homework: {
    tasks: [
      "Blend these sounds into words: /s/ /u/ /n/, /b/ /a/ /g/, /c/ /u/ /p/. Say each word out loud.",
      "Write the -at family: cat, hat, mat, bat. Read the list three times.",
      "Find one CVC word near your home (bus, bag, cup, pen). Read it to someone.",
      "Play: change the first sound of 'pan' — how many new words can you make? (man, can, fan)",
    ],
  },
};
