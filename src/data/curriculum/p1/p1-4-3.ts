import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 4 · Lesson 3 — Subject + Verb
 *
 * The smallest complete sentence pattern: S + V ("Birds fly."). Subjects
 * as nouns or pronouns, and the full -s rule (he/she/it + verb-s).
 */
export const p1_4_3: StructuredCourseLesson = {
  slug: "p1-4-3",
  title: "Subject + Verb",
  subtitle: "The smallest complete sentence",
  description:
    "Birds fly. I sit. We learn. Subject + verb is the smallest complete sentence in English — plus the famous -s rule: he runs, she reads, it sleeps.",
  minutes: 12,
  skills: ["reading", "writing", "listening", "speaking"],
  content: draftMeta(["st03-m01-u02-l01"]),

  introduction:
    "You can find subjects and predicates. Now let's BUILD sentences with them. Today's recipe has just two ingredients: a subject and a verb. Mix them and you get a complete English sentence — the smallest one possible. Plus, we finally unlock the mystery of that little letter s!",

  objectives: [
    "You can build a subject + verb sentence: 'Birds fly.'",
    "You can use a noun or a pronoun as the subject.",
    "You can apply the -s rule: he runs, she reads, it sleeps.",
  ],

  prerequisites: [
    { lessonSlug: "p1-4-2", label: "You can find the subject and predicate (lesson 17)." },
    { lessonSlug: "p1-3-4", label: "You know verbs (lesson 14)." },
    { lessonSlug: "p1-3-5", label: "You know the pronouns (lesson 15)." },
  ],

  vocab: [
    {
      id: "p1-4-3-w1",
      term: "pattern",
      pos: "noun",
      definition: "a shape that repeats; a recipe for building something",
      example: "Subject + verb is a sentence pattern.",
    },
    {
      id: "p1-4-3-w2",
      term: "rule",
      pos: "noun",
      definition: "something that is always true in a language",
      example: "Here is a rule: he runs, but I run.",
    },
    {
      id: "p1-4-3-w3",
      term: "to fly",
      pos: "verb",
      definition: "to move through the air, like a bird",
      example: "Birds fly.",
    },
    {
      id: "p1-4-3-w4",
      term: "to work",
      pos: "verb",
      definition: "to do a job",
      example: "My mother works at a school.",
    },
    {
      id: "p1-4-3-w5",
      term: "to study",
      pos: "verb",
      definition: "to learn from books and lessons",
      example: "We study English every day.",
    },
    {
      id: "p1-4-3-w6",
      term: "always",
      pos: "adverb",
      definition: "every time; without exception",
      example: "The sun always rises.",
    },
  ],

  concept: {
    definition: "The smallest complete sentence is a subject and a verb: 'Birds fly.'",
    explanation: [
      "Two words — one complete idea. 'Birds fly.' Who? Birds. What do they do? Fly. Nothing is missing. Subject + verb (S + V) is sentence recipe number one.",
      "The subject can be a noun (The dog runs.) or a pronoun (It runs.). Both work perfectly. Choose whichever is handier.",
      "Now the -s rule, promised since the verb lesson: when the subject is he, she or it — ONE person or thing — the verb takes s. He runs. She reads. It sleeps. For I, you, we and they, no s: I run. They read. We sleep.",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — Recipe number one: S + V",
      text: "Take a subject. Take a verb. Put them together. Done! 'Birds fly.' 'The baby sleeps.' 'We learn.' The smallest complete sentences in English — and you can already build them.",
      examples: ["Birds fly.", "The baby sleeps.", "We learn.", "I sit."],
    },
    {
      title: "Step 2 — Noun subjects and pronoun subjects",
      text: "Use a noun when you need to name the star: 'The dog runs.' Use a pronoun when the star is already known: 'It runs.' Both are correct — pronouns make sentences lighter.",
      examples: ["The dog runs. → It runs.", "Ana reads. → She reads.", "Tom and Ana work. → They work."],
    },
    {
      title: "Step 3 — The -s rule: he, she, it",
      text: "One person or thing (he, she, it)? Add s to the verb. He runs. She reads. It sleeps. The dog (it) runs. Ana (she) reads. This rule is small but mighty — it is the most common verb pattern in English.",
      examples: ["He works.", "She studies.", "It sleeps.", "The cat (it) runs."],
    },
    {
      title: "Step 4 — No s for I, you, we, they",
      text: "I run. You run. We run. They run. No s! And groups of nouns act like 'they': 'The dogs run.' 'My friends work.' Many stars, no s.",
      examples: ["I run.", "You read.", "We study.", "They work.", "The dogs run."],
    },
    {
      title: "Step 5 — Build your own S + V bank",
      text: "Fill your notebook with S + V sentences about your life: 'I study.' 'My father works.' 'My friend reads.' 'We talk.' Ten sentences today, ten tomorrow — soon you will think in patterns, not words.",
      examples: ["I study English.", "My mother cooks.", "My friends play football.", "We talk every day."],
    },
  ],

  exampleBank: {
    basic: [
      "Birds fly.",
      "I sit.",
      "The baby sleeps.",
      "We learn.",
    ],
    everyday: [
      "My father works every day.",
      "She studies at night.",
      "The shop opens at nine.",
      "They play football on Sundays.",
    ],
    questions: [
      "Do birds fly? (Yes, they fly!)",
      "What do you do every morning? (I wake up.)",
      "Does the dog run? (Yes, it runs fast!)",
    ],
    negatives: [
      "I do not sleeps — I sleep.",
      "He do not run — he runs.",
      "'Run birds' is not the pattern — the subject comes first.",
    ],
    corrections: [
      {
        wrong: "He work at a school.",
        right: "He works at a school.",
        note: "He = one person → the verb takes s: works.",
      },
      {
        wrong: "They plays football.",
        right: "They play football.",
        note: "They = a group → no s on the verb.",
      },
    ],
  },

  dialogue: {
    title: "Two-word sentences",
    context: "Ms Reed challenges the class to a two-word sentence contest.",
    lines: [
      { speaker: "Ms Reed", text: "Contest! Build a sentence with only two words." },
      { speaker: "Omar", text: "Birds fly!" },
      { speaker: "Ms Reed", text: "Two words, one idea — perfect! Ana?" },
      { speaker: "Ana", text: "We learn!" },
      { speaker: "Ms Reed", text: "Beautiful. Now a two-word sentence about Omar, with the s rule." },
      { speaker: "Ana", text: "He wins!" },
      { speaker: "Omar", text: "Ha! Yes — he wins. She is right!" },
    ],
  },

  realLife: {
    title: "Your life in S + V",
    text: "Your whole day is a chain of subject + verb sentences. I wake. I eat. I work. My bus comes. The sun sets. I sleep. Describe your day in two-word sentences today — it is English practice that costs you nothing.",
    examples: [
      "Describe your morning in S + V sentences.",
      "Describe your family: 'My mother works. My brother studies.'",
      "Watch a street: 'Cars go. People walk. Dogs run.'",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-4-3");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "The smallest complete sentence is ______.",
        ["subject + verb", "verb + verb", "subject + subject"],
        0,
        "Birds fly. — two words, one complete idea."
      ),
      t.mcq(
        "guided",
        "Choose the correct verb: 'The dog ______.'",
        ["runs", "run", "running"],
        0,
        "The dog = it → one thing → verb takes s: runs."
      ),
      t.fill(
        "guided",
        "Choose the verb: 'Ana ______ books at night.' (read/reads)",
        ["reads"],
        "Ana = she → reads with s."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "Which sentence follows the -s rule correctly?",
        ["She works at a shop.", "She work at a shop.", "She works at a shop s."],
        0,
        "She → verb + s: works."
      ),
      t.mcq(
        "independent",
        "Which sentence is correct for a GROUP?",
        ["They play football.", "They plays football.", "They playing football."],
        0,
        "They → no s: play."
      ),
      t.match("independent", "Match each subject with a correct verb.", [
        { left: "I", right: "run" },
        { left: "He", right: "runs" },
        { left: "They", right: "play" },
      ]),
      t.order(
        "independent",
        "Build the sentence from the mixed words: 'baby / the / sleeps'.",
        "The baby sleeps",
        "Subject (the baby) + verb (sleeps)."
      ),

      /* 10 — speaking */
      t.speak("Say a two-word sentence about birds.", "Birds fly."),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "She studies at night.",
        "Listen. Which verb do you hear?",
        ["studies", "study", "studys"],
        0
      ),
      t.listenType("listening", "The dog runs in the park.", "Listen and type the verb.", ["runs"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. What does the small bird do every morning?",
        ["It sings.", "It sleeps.", "It studies."],
        0,
        "The story says: 'It sings every morning.'"
      ),
      t.fill(
        "reading",
        "Read the story. The other birds fly away, but the small bird ______.",
        ["stays"],
        "It does not leave — it remains: stays."
      ),

      /* 13 — writing */
      t.write(
        "Write ONE sentence with the pattern subject + verb. Use 'works' or 'sleeps'.",
        "My father works.",
        "Choose a person (he/she) and use the -s verb."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "Which is a complete subject + verb sentence?",
        ["The baby sleeps.", "The baby", "Sleeps"],
        0,
        "Subject (the baby) + verb (sleeps) = complete idea."
      ),
      t.mcq(
        "assessment",
        "He ______ English every day. (study)",
        ["studies", "study", "studying"],
        0,
        "He → verb takes s: studies."
      ),
      t.fill(
        "assessment",
        "We ______ football on Sundays. (play)",
        ["play"],
        "We → no s: play."
      ),
      t.mcq(
        "assessment",
        "When does the verb take an s?",
        ["With he, she and it", "With I and you", "With we and they"],
        0,
        "One person or thing (he/she/it) → verb + s. Groups and I/you → no s."
      ),
    ];
  })(),

  passage: {
    title: "The little bird",
    text: "A small bird lives in my garden. It sings every morning. I listen. My sister listens too. She loves its song. My cat watches the bird. It wants to catch it! But the bird is fast. It flies high. The cat sleeps under the tree. I smile. My garden is never quiet!",
  },

  commonMistakes: [
    {
      wrong: "He work at a school.",
      right: "He works at a school.",
      why: "He is one person — the verb takes s: works.",
    },
    {
      wrong: "They plays football.",
      right: "They play football.",
      why: "They is a group — no s on the verb.",
    },
    {
      wrong: "I runs in the park.",
      right: "I run in the park.",
      why: "With I, the verb never takes s.",
    },
  ],

  revision: {
    keyPoints: [
      "Subject + verb is the smallest complete sentence: 'Birds fly.'",
      "Subjects can be nouns (The dog runs.) or pronouns (It runs.).",
      "The -s rule: he, she, it → verb + s (he runs, she reads, it sleeps).",
      "I, you, we, they → no s (I run, they read).",
      "Groups of nouns act like they: The dogs run.",
    ],
    keyWords: ["pattern", "rule", "to fly", "to work", "to study", "always"],
    selfCheck: [
      "Can you build a two-word sentence right now?",
      "Does 'she' take runs or run?",
      "Does 'the cats' take play or plays?",
    ],
  },

  homework: {
    tasks: [
      "Write five S + V sentences about people in your family. Use the -s rule where needed.",
      "Describe your morning in two-word sentences: 'I wake. I eat. I go.'",
      "Fix the mistake: 'My mother cook rice.' Write the correct sentence.",
      "Watch an animal or a person for one minute. Write two S + V sentences about them.",
    ],
  },
};
