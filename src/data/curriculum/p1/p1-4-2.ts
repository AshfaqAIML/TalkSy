import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 4 · Lesson 2 — Subject and Predicate
 *
 * The sentence's two halves: the subject (who or what it is about) and the
 * predicate (what it does or is). Finding both in any simple sentence.
 */
export const p1_4_2: StructuredCourseLesson = {
  slug: "p1-4-2",
  title: "Subject and Predicate",
  subtitle: "The two halves of every sentence",
  description:
    "Every sentence has two halves: the subject (who or what it is about) and the predicate (what it does or is). Learn to find both — the skill behind every grammar lesson that follows.",
  minutes: 12,
  skills: ["reading", "writing", "listening", "speaking"],
  content: draftMeta(["st03-m01-u01-l02"]),

  introduction:
    "Take a sentence and cut it down the middle. On the left: WHO the sentence is about. On the right: WHAT they do. Grammar teachers give these halves serious names — subject and predicate — but the idea is simple: every sentence is about someone doing something. Let's cut some sentences!",

  objectives: [
    "You can say what the subject of a sentence is.",
    "You can say what the predicate of a sentence is.",
    "You can divide a simple sentence into subject and predicate.",
  ],

  prerequisites: [
    { lessonSlug: "p1-4-1", label: "You know what a sentence is (lesson 16)." },
    { lessonSlug: "p1-3-3", label: "You know nouns and pronouns (lessons 13 and 15)." },
  ],

  vocab: [
    {
      id: "p1-4-2-w1",
      term: "subject",
      pos: "noun",
      definition: "the part of the sentence that tells WHO or WHAT it is about",
      example: "In 'The boy runs', the subject is 'The boy'.",
    },
    {
      id: "p1-4-2-w2",
      term: "predicate",
      pos: "noun",
      definition: "the part of the sentence that tells what the subject does or is",
      example: "In 'The boy runs', the predicate is 'runs'.",
    },
    {
      id: "p1-4-2-w3",
      term: "about",
      pos: "preposition",
      definition: "on the subject of; concerning",
      example: "The sentence is about a boy.",
    },
    {
      id: "p1-4-2-w4",
      term: "who",
      pos: "pronoun",
      definition: "which person?",
      example: "Who runs? The boy runs.",
    },
    {
      id: "p1-4-2-w5",
      term: "what",
      pos: "pronoun",
      definition: "which thing?",
      example: "What do you eat? Rice.",
    },
    {
      id: "p1-4-2-w6",
      term: "to divide",
      pos: "verb",
      definition: "to cut something into parts",
      example: "Divide the sentence into two parts.",
    },
  ],

  concept: {
    definition: "The subject tells who or what the sentence is about. The predicate tells what the subject does or is.",
    explanation: [
      "Look at 'The boy runs.' Ask: WHO is this sentence about? The boy. That is the subject. Then ask: WHAT does he do? Runs. That is the predicate.",
      "Here is a trick to find the subject: find the verb first, then ask 'WHO or WHAT does it?' In 'The dog sleeps', the verb is sleeps. Who sleeps? The dog — subject found!",
      "Every sentence needs both halves. A subject alone (the dog…) leaves you waiting. A predicate alone (…sleeps) leaves you asking who. Together: a complete idea.",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — Meet the subject",
      text: "The subject is the star of the sentence — the WHO or the WHAT. In 'Ana reads a book', the star is Ana. In 'The dog barks', the star is the dog. Subjects are nouns or pronouns.",
      examples: ["Ana reads a book. (subject: Ana)", "The dog barks. (subject: The dog)", "We play. (subject: We)"],
    },
    {
      title: "Step 2 — Meet the predicate",
      text: "The predicate is everything else — what the star DOES or IS. In 'Ana reads a book', the predicate is 'reads a book'. In 'The dog barks', it is 'barks'.",
      examples: ["Ana | reads a book.", "The dog | barks.", "We | play in the park."],
    },
    {
      title: "Step 3 — Draw the dividing line",
      text: "Take a sentence and draw a line between the star and the action: 'The boy | runs.' 'My mother | cooks rice.' 'They | read books.' Left of the line: subject. Right of the line: predicate.",
      examples: ["The boy | runs.", "My mother | cooks rice.", "They | read books."],
    },
    {
      title: "Step 4 — Find the subject with a question",
      text: "Lost? Find the verb first and ask: who or what does it? 'Sleeps. Who sleeps? The cat.' Subject: the cat. Try it with 'The children play' — who plays? The children. Subject found!",
      examples: ["Who sleeps? → The cat sleeps.", "Who plays? → The children play.", "What is hot? → The tea is hot."],
    },
    {
      title: "Step 5 — Both halves, always",
      text: "A sentence with only a subject is a head without a body: 'The dog…' (waiting!). A sentence with only a predicate is a body without a head: '…runs' (who?!). A real sentence needs both: 'The dog runs.'",
      examples: ["The dog… (not a sentence yet)", "…runs fast. (who?)", "The dog runs fast. (complete!)"],
    },
  ],

  exampleBank: {
    basic: [
      "The boy | runs.",
      "Ana | reads a book.",
      "The cat | sleeps.",
      "We | play.",
    ],
    everyday: [
      "My father | drives a bus.",
      "The shop | opens at nine.",
      "I | drink tea in the morning.",
      "The children | learn English.",
    ],
    questions: [
      "Who runs? — The boy.",
      "What is the subject of 'Ana reads'?",
      "What is the predicate of 'The dog barks'?",
    ],
    negatives: [
      "The subject is not the action — the subject is the star.",
      "A sentence cannot have a predicate only — who does it?",
      "The predicate is not just the verb — it can be longer: 'reads a book'.",
    ],
    corrections: [
      {
        wrong: "In 'The boy runs', the subject is 'runs'.",
        right: "In 'The boy runs', the subject is 'The boy' and the predicate is 'runs'.",
        note: "The subject is WHO. The predicate is WHAT THEY DO.",
      },
      {
        wrong: "'Plays in the park.' (as a full sentence)",
        right: "'The children play in the park.'",
        note: "A predicate alone is not a sentence — it needs its subject.",
      },
    ],
  },

  dialogue: {
    title: "Cut the sentence!",
    context: "Ms Reed draws a big line on the board. The students cut sentences into two parts.",
    lines: [
      { speaker: "Ms Reed", text: "Cut this one: 'My mother cooks rice.'" },
      { speaker: "Omar", text: "My mother | cooks rice!" },
      { speaker: "Ms Reed", text: "Subject?" },
      { speaker: "Omar", text: "My mother — the sentence is about her!" },
      { speaker: "Ms Reed", text: "Predicate?" },
      { speaker: "Ana", text: "Cooks rice — what she does!" },
      { speaker: "Ms Reed", text: "Perfect. You are sentence surgeons!" },
    ],
  },

  realLife: {
    title: "Subjects are people you know",
    text: "Every message, every story, every sign has subjects: the people and things doing things. When you read today, pause on one sentence and ask: who is this about? What do they do? Two small questions — and grammar becomes easy.",
    examples: [
      "Read a message: who is it about?",
      "Look at a sign: 'The shop opens at nine.' Subject: the shop.",
      "Say a sentence about your best friend, then name the subject.",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-4-2");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "The subject of a sentence tells ______.",
        ["who or what it is about", "when it happens", "how it ends"],
        0,
        "Subject = the star: WHO or WHAT."
      ),
      t.mcq(
        "guided",
        "In 'The girl sings', what is the subject?",
        ["The girl", "sings", "the song"],
        0,
        "Who sings? The girl — she is the subject."
      ),
      t.fill(
        "guided",
        "In 'The dog barks', the predicate is '______'.",
        ["barks"],
        "The predicate tells what the subject does."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "In 'My father drives a bus', what is the PREDICATE?",
        ["drives a bus", "My father", "the bus"],
        0,
        "The predicate is everything after the subject: drives a bus."
      ),
      t.mcq(
        "independent",
        "Which sentence has the subject 'We'?",
        ["We read books.", "They read books.", "She reads books."],
        0,
        "'We' is the star: We read books."
      ),
      t.match("independent", "Match each sentence with its subject.", [
        { left: "Ana cooks rice.", right: "Ana" },
        { left: "The dogs run.", right: "The dogs" },
        { left: "I sleep at night.", right: "I" },
      ]),

      /* 10 — speaking */
      t.speak("Say the subject first: 'Ana | reads a book.'", "Ana reads a book."),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "The teacher writes on the board.",
        "Listen. What is the subject of the sentence?",
        ["The teacher", "writes", "the board"],
        0
      ),
      t.listenType("listening", "The children play outside.", "Listen and type the subject.", ["the children", "children"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. What does Lily's garden have?",
        ["Flowers and fish", "Books and pens", "Dogs and cats"],
        0,
        "The story says: 'It has flowers and a little fish.'"
      ),
      t.fill(
        "reading",
        "Read the story. Lily feeds the ______ every day.",
        ["fish"],
        "It lives in the pond."
      ),

      /* 13 — writing */
      t.write(
        "Copy this sentence and draw a line ( | ) between subject and predicate: The cat sleeps.",
        "The cat | sleeps",
        "Who is it about? Put the line after the subject."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "Every sentence has ______.",
        ["a subject and a predicate", "two verbs", "six words"],
        0,
        "WHO (subject) + WHAT THEY DO (predicate) = complete idea."
      ),
      t.mcq(
        "assessment",
        "In 'The bus stops here', the subject is ______.",
        ["The bus", "stops", "here"],
        0,
        "What stops? The bus."
      ),
      t.fill(
        "assessment",
        "What is the subject of 'The flowers are red.'?",
        ["the flowers", "flowers"],
        "Who or what are red? The flowers."
      ),
      t.mcq(
        "assessment",
        "Which question helps you find the subject?",
        ["Who or what does it?", "How many words are there?", "What colour is it?"],
        0,
        "Find the verb, then ask WHO or WHAT — that is the subject."
      ),
    ];
  })(),

  passage: {
    title: "Lily's garden",
    text: "Lily has a small garden. The garden is behind her house. Lily plants flowers. The flowers are red and yellow. A little fish lives in the pond. Lily feeds the fish every day. The sun shines. The birds sing. Lily loves her quiet garden.",
  },

  commonMistakes: [
    {
      wrong: "In 'The boy runs', the subject is 'runs'.",
      right: "The subject is 'The boy'. The predicate is 'runs'.",
      why: "The subject is the star (WHO). The predicate is what they DO.",
    },
    {
      wrong: "Using 'Plays in the park.' as a complete sentence.",
      right: "The children play in the park.",
      why: "A predicate alone has no star. Add the subject and the idea is complete.",
    },
  ],

  revision: {
    keyPoints: [
      "The subject tells who or what the sentence is about.",
      "The predicate tells what the subject does or is.",
      "Find the verb, then ask 'who or what does it?' — that is the subject.",
      "The predicate is everything after the subject.",
      "Every sentence needs both halves.",
    ],
    keyWords: ["subject", "predicate", "about", "who", "what", "to divide"],
    selfCheck: [
      "Can you name the subject of 'Ana reads a book.'?",
      "Can you name the predicate of 'The dog barks.'?",
      "Can you cut 'My mother cooks rice.' into two halves?",
    ],
  },

  homework: {
    tasks: [
      "Cut three sentences into halves: write 'subject | predicate' for each.",
      "Write one sentence where YOU are the subject.",
      "Ask a friend: 'Who or what is this sentence about?' for one sentence they say.",
      "Find the subject and predicate in: 'The shop opens at nine.'",
    ],
  },
};
