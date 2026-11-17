import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 1 · Lesson 5 — Basic Letter Sounds
 *
 * The difference between a letter's NAME (bee) and its SOUND (/b/), the
 * /sound/ notation, common consonant sounds, short vowel sounds, and
 * hearing the first sound of a word. This is the base for all phonics.
 */
export const p1_1_5: StructuredCourseLesson = {
  slug: "p1-1-5",
  title: "Basic Letter Sounds",
  subtitle: "Letter names are not letter sounds",
  description:
    "Every letter has a name (like 'bee') and a sound (like /b/ in ball). Learn the difference — it is the key that unlocks reading.",
  minutes: 12,
  skills: ["listening", "speaking", "reading", "writing"],
  content: draftMeta([
    "st01-m03-u01-l01",
    "st01-m03-u03-l01",
  ]),

  introduction:
    "Here is a secret that unlocks reading: the name of a letter is not its sound. The letter b is called 'bee' — but in the word ball, it just makes a small /b/ sound. In this lesson you will meet the sounds of the letters. Listen carefully, and say each sound with me.",

  objectives: [
    "You can tell a letter's name apart from its sound.",
    "You can say the common sound of many letters.",
    "You can hear the first sound of a short word.",
  ],

  prerequisites: [
    { lessonSlug: "p1-1-2", label: "You know the letter names (lesson 2)." },
    { lessonSlug: "p1-1-4", label: "You know the vowels and consonants (lesson 4)." },
  ],

  vocab: [
    {
      id: "p1-1-5-w1",
      term: "sound",
      pos: "noun",
      definition: "what you hear with your ears",
      example: "The letter b makes a sound.",
    },
    {
      id: "p1-1-5-w2",
      term: "to say",
      pos: "verb",
      definition: "to make words with your mouth",
      example: "Say the letter sound with me.",
    },
    {
      id: "p1-1-5-w3",
      term: "to hear",
      pos: "verb",
      definition: "to take in sound with your ears",
      example: "I hear the sound /m/.",
    },
    {
      id: "p1-1-5-w4",
      term: "mouth",
      pos: "noun",
      definition: "the part of your face you speak with",
      example: "Open your mouth and say the sound.",
    },
    {
      id: "p1-1-5-w5",
      term: "to repeat",
      pos: "verb",
      definition: "to say something again",
      example: "Listen, then repeat the sound.",
    },
    {
      id: "p1-1-5-w6",
      term: "different",
      pos: "adjective",
      definition: "not the same",
      example: "The name and the sound are different.",
    },
  ],

  concept: {
    definition: "A letter has a name and a sound. The name of b is 'bee'. The sound of b is /b/, like in ball.",
    explanation: [
      "We write letter sounds between two marks like this: /b/. When you see /b/, say the sound, not the letter name. It is a short, small sound: /b/.",
      "When we spell out loud, we use letter names: B-E-E. But when we read words, we use letter sounds: /b/ /e/ /d/ makes bed.",
      "Most consonants make one clear sound. Vowels are a little richer — each vowel has a short sound, like the a in cat, and a long sound that says the letter's name, like the a in cake. We start with the short sounds.",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — Name versus sound",
      text: "Say the letter name: 'bee'. Now say the sound: /b/. Feel the difference? The name is long and sing-song. The sound is short and quick. This is true for every letter.",
      examples: ["B says /b/, like in ball.", "D says /d/, like in dog.", "M says /m/, like in moon."],
    },
    {
      title: "Step 2 — The sound marks / /",
      text: "From now on, we write sounds like this: /b/. The two marks mean 'this is a sound, not a letter name'. When you read /k/, you say a quick k sound — you do not say 'kay'.",
      examples: ["/b/ is the sound in ball.", "/s/ is the sound in sun."],
    },
    {
      title: "Step 3 — Consonant sounds",
      text: "Most consonants make one common sound. C says /k/ like in cat. D says /d/ like in dog. F says /f/ like in fish. M says /m/ like in moon. Listen to the audio and repeat each one.",
      examples: [
        "C says /k/ — cat.",
        "D says /d/ — dog.",
        "F says /f/ — fish.",
        "M says /m/ — moon.",
      ],
    },
    {
      title: "Step 4 — Short vowel sounds",
      text: "The vowels have short sounds. A says /a/ like in cat. E says /e/ like in bed. I says /i/ like in sit. O says /o/ like in hot. U says /u/ like in sun. These five short sounds appear in thousands of small words.",
      examples: [
        "A says /a/ — cat.",
        "E says /e/ — bed.",
        "I says /i/ — sit.",
        "O says /o/ — hot.",
        "U says /u/ — sun.",
      ],
    },
    {
      title: "Step 5 — Hear the first sound",
      text: "Listen to a word and catch its first sound. Ball starts with /b/. Sun starts with /s/. Moon starts with /m/. This skill — hearing first sounds — is the heart of reading.",
      examples: ["Ball starts with /b/.", "Sun starts with /s/.", "Moon starts with /m/."],
    },
  ],

  exampleBank: {
    basic: [
      "The name of b is 'bee'.",
      "The sound of b is /b/.",
      "/m/ is the first sound in moon.",
      "C says /k/ in cat.",
    ],
    everyday: [
      "The dog says woof.",
      "The cat says meow.",
      "Listen to the first sound of the word.",
      "Say it slowly: /b/ /a/ /l/ /l/.",
    ],
    questions: [
      "What is the first sound of 'sun'?",
      "Is /b/ a letter name or a letter sound?",
      "Which letter says /m/ in moon?",
    ],
    negatives: [
      "The sound of b is not 'bee'.",
      "We do not read words with letter names.",
      "/b/ is not a word.",
    ],
    corrections: [
      {
        wrong: "The name of b is /b/.",
        right: "The name of b is 'bee'. The sound of b is /b/.",
        note: "Names are for spelling. Sounds are for reading.",
      },
      {
        wrong: "We read words with letter names.",
        right: "We read words with letter sounds.",
        note: "With sounds, c-a-t becomes cat. With names it becomes 'see-ay-tee' — that is spelling, not reading.",
      },
    ],
  },

  dialogue: {
    title: "What sound does it make?",
    context: "Ms Reed holds up letter cards. The students say the letter sounds.",
    lines: [
      { speaker: "Ms Reed", text: "Look at this card: b. What is the sound?" },
      { speaker: "Omar", text: "/b/!" },
      { speaker: "Ms Reed", text: "Great! Now this one: m." },
      { speaker: "Ana", text: "/m/!" },
      { speaker: "Ms Reed", text: "Wonderful. Now listen: moon. What is the first sound?" },
      { speaker: "Omar", text: "/m/! Moon starts with /m/." },
      { speaker: "Ms Reed", text: "Perfect. You are ready for reading!" },
    ],
  },

  realLife: {
    title: "Sounds in your day",
    text: "Letters and sounds are everywhere. When you sing a song, you use sounds. When a dog barks — woof! — that is a sound too. Try this today: say the name of any thing around you, slowly, and listen for its first sound.",
    examples: [
      "Look at a door. Say 'door' slowly. The first sound is /d/.",
      "Eat an apple. Say 'apple' slowly. It starts with a vowel sound.",
      "Say your own name slowly. What is the first sound?",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-1-5");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "What is the SOUND of the letter b?",
        ["/b/ like in ball", "'bee' like in the alphabet", "It has no sound"],
        0,
        "The sound of b is /b/, like the first sound in ball."
      ),
      t.mcq(
        "guided",
        "The name of the letter m is 'em'. What is its sound?",
        ["/m/ like in moon", "'em' again", "/e/ like in egg"],
        0,
        "The sound of m is /m/, like the first sound in moon."
      ),
      t.fill(
        "guided",
        "The first sound of 'sun' is /______/.",
        ["s"],
        "Say it slowly: sss-un."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "Which letter makes the /d/ sound in 'dog'?",
        ["d", "b", "g"],
        0,
        "Dog starts with the /d/ sound, made by the letter d."
      ),
      t.mcq(
        "independent",
        "We write letter sounds ______.",
        ["between two marks like /b/", "with capital letters", "as full words"],
        0,
        "The marks / / mean 'this is a sound'."
      ),
      t.match("independent", "Match each letter with its sound word.", [
        { left: "c", right: "cat" },
        { left: "f", right: "fish" },
        { left: "m", right: "moon" },
      ]),

      /* 10 — speaking */
      t.speak("Say the sound of the letters: b, then m, then s.", "/b/ /m/ /s/"),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "moon",
        "Listen to the word. What is its FIRST sound?",
        ["/m/", "/s/", "/d/"],
        0
      ),
      t.listenType("listening", "cat", "Listen to the word and type it.", ["cat"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. What does the dog say?",
        ["Woof", "Meow", "Moo"],
        0,
        "The story says: 'The dog says woof.'"
      ),
      t.fill(
        "reading",
        "Read the story. The ______ says moo.",
        ["cow"],
        "Cows say moo!"
      ),

      /* 13 — writing */
      t.write(
        "Type the FIRST LETTER of the word 'dog'.",
        "d",
        "Listen to the first sound: /d/. Which letter makes it?"
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "A letter has a name and a ______.",
        ["sound", "colour", "song"],
        0,
        "Every letter has a name (like 'bee') and a sound (like /b/)."
      ),
      t.mcq(
        "assessment",
        "Which sound does the letter f make in 'fish'?",
        ["/f/", "/s/", "/m/"],
        0,
        "Fish starts with the /f/ sound."
      ),
      t.fill(
        "assessment",
        "Which word has the SHORT sound of the letter a: cat or cake? Type the word.",
        ["cat"],
        "The a in cat is short. The a in cake says its name — that is the long sound."
      ),
      t.mcq(
        "assessment",
        "When we READ words, we use ______.",
        ["letter sounds", "letter names", "capital letters"],
        0,
        "Reading uses sounds: /b/ /e/ /d/ makes bed. Names are for spelling."
      ),
    ];
  })(),

  passage: {
    title: "Animal sounds",
    text: "Ben has a cat and a dog. The cat says meow. The dog says woof. The cow on the farm says moo. Animals have sounds. Letters have sounds too! The letter b says /b/. The letter m says /m/. Ben listens to sounds all day.",
  },

  commonMistakes: [
    {
      wrong: "The name of b is /b/.",
      right: "The name of b is 'bee'. The sound of b is /b/.",
      why: "Names are for spelling aloud. Sounds are for reading words.",
    },
    {
      wrong: "We read words with letter names.",
      right: "We read words with letter sounds.",
      why: "With sounds, c-a-t becomes cat. With names it becomes 'see-ay-tee' — that is spelling, not reading.",
    },
  ],

  revision: {
    keyPoints: [
      "Every letter has a name and a sound.",
      "The name of b is 'bee'. The sound of b is /b/.",
      "We write sounds between marks: /b/.",
      "Consonants usually make one clear sound.",
      "Vowels have a short sound (cat, bed, sit, hot, sun) and a long sound (cake).",
    ],
    keyWords: ["sound", "to say", "to hear", "mouth", "to repeat", "different"],
    selfCheck: [
      "Can you say the name and the sound of b, m and s?",
      "Can you hear the first sound of your own name?",
      "What sound does the letter d make in dog?",
    ],
  },

  homework: {
    tasks: [
      "Say the sounds /b/, /d/, /m/, /s/ and /f/ out loud, five times each.",
      "Find five things in your home. Say each word slowly and listen for the first sound.",
      "Write the first letter of these words: cat, moon, sun, fish.",
      "Play: say a letter name to a friend — your friend says the sound.",
    ],
  },
};
