import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 3 · Lesson 1 — Word Usage
 *
 * Knowing a word means using it in a sentence. Word alone vs word in
 * context, word partners (eat bread, drink tea), and the I eat / I drink
 * sentence patterns. "Sentence" is introduced here as friendly vocabulary.
 */
export const p1_3_1: StructuredCourseLesson = {
  slug: "p1-3-1",
  title: "Word Usage",
  subtitle: "Words live in sentences",
  description:
    "A word alone is only a seed. Learn to put words into sentences — I eat bread, I drink tea — and meet the word partners that make English sound natural.",
  minutes: 12,
  skills: ["reading", "writing", "listening", "speaking"],
  content: draftMeta([
    "st02-m01-u01-l01",
    "st02-m02-u02-l05",
  ]),

  introduction:
    "You know words. You know meanings. Now comes the step that turns knowledge into speech: USING words. A word in your notebook sleeps. A word in a sentence works! Today you will put your words to work inside real sentences.",

  objectives: [
    "You can put a word inside a sentence, not just name it alone.",
    "You can use the patterns 'I eat ___' and 'I drink ___'.",
    "You can choose natural word partners like 'eat bread' and 'drink tea'.",
  ],

  prerequisites: [
    { lessonSlug: "p1-2-5", label: "You know what a word's meaning is (lesson 10)." },
    { lessonSlug: "p1-2-4", label: "You know words from six categories (lesson 9)." },
  ],

  vocab: [
    {
      id: "p1-3-1-w1",
      term: "to use",
      pos: "verb",
      definition: "to do something with a word or a thing",
      example: "Use the word 'bread' in a sentence.",
    },
    {
      id: "p1-3-1-w2",
      term: "sentence",
      pos: "noun",
      definition: "a group of words that tells a complete idea",
      example: "I eat bread. — This is a sentence.",
    },
    {
      id: "p1-3-1-w3",
      term: "partner",
      pos: "noun",
      definition: "a thing that goes well with another thing",
      example: "'Eat' and 'bread' are good partners.",
    },
    {
      id: "p1-3-1-w4",
      term: "natural",
      pos: "adjective",
      definition: "the way people really say it",
      example: "'I drink tea' sounds natural.",
    },
    {
      id: "p1-3-1-w5",
      term: "alone",
      pos: "adverb",
      definition: "by itself; with no other words",
      example: "'Bread' alone is just one word.",
    },
    {
      id: "p1-3-1-w6",
      term: "to sound",
      pos: "verb",
      definition: "to seem when you hear it",
      example: "Does this sound right? Yes, it sounds natural!",
    },
  ],

  concept: {
    definition: "Using a word means putting it inside a sentence. A word alone is a seed; a word in a sentence is a tree.",
    explanation: [
      "You know the word bread. But bread alone cannot feed a conversation. Put it in a sentence — 'I eat bread.' — and suddenly you are speaking English!",
      "Words also have favourite partners. In English we eat bread and drink tea. We do not 'drink bread'. Learning partners (eat + breakfast, drink + milk, read + book) makes your English sound natural.",
      "Here is the best news: you can build correct sentences today with one simple pattern — I eat ___. I drink ___. Put any food after eat, any drink after drink. Instant sentences!",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — Word alone, word in a sentence",
      text: "Say the word book. That is a word alone. Now say: 'I read a book.' That is the word working inside a sentence. A sentence is a group of words that tells a complete idea.",
      examples: ["book (alone)", "I read a book. (in a sentence)", "tea (alone)", "I drink tea. (in a sentence)"],
    },
    {
      title: "Step 2 — Words have partners",
      text: "Some words love each other. Eat loves bread, rice and eggs. Drink loves tea, milk and water. Read loves book. These pairs are word partners. Use them and your English sounds natural.",
      examples: ["Eat + bread → I eat bread.", "Drink + tea → I drink tea.", "Read + book → I read a book."],
    },
    {
      title: "Step 3 — Right word, right place",
      text: "In English, the person comes first, then the action: 'I eat bread.' Not 'Bread eat I.' The order matters — you will learn much more about this in the sentence lessons coming soon.",
      examples: ["I eat bread. ✓", "Ana drinks tea. ✓", "Bread eat I. ✗ (wrong order)"],
    },
    {
      title: "Step 4 — Change one word, make a new sentence",
      text: "Here is a magic trick. Take 'I drink tea.' Change only the last word: 'I drink milk.' Change the action too: 'I eat rice.' One pattern, many sentences!",
      examples: ["I drink tea. → I drink milk.", "I eat bread. → I eat rice.", "I read a book. → I read the menu."],
    },
    {
      title: "Step 5 — Your turn to use words",
      text: "Now use YOUR words. What do you eat? Say: 'I eat ___.' What do you drink? Say: 'I drink ___.' True sentences are the best sentences.",
      examples: ["I eat rice.", "I drink water.", "I read books at night."],
    },
  ],

  exampleBank: {
    basic: [
      "I eat bread.",
      "I drink tea.",
      "I read a book.",
      "I eat rice and eggs.",
    ],
    everyday: [
      "I drink milk in the morning.",
      "I eat rice and fish for dinner.",
      "Ana drinks tea with sugar.",
      "We read books at school.",
    ],
    questions: [
      "What do you eat for breakfast?",
      "What do you drink in the morning?",
      "Do you read books at night?",
    ],
    negatives: [
      "I do not drink bread.",
      "We do not eat tea.",
      "'Bread eat I' is not correct English.",
    ],
    corrections: [
      {
        wrong: "I drink bread.",
        right: "I eat bread. / I drink tea.",
        note: "Drink is for liquids (tea, milk, water). Eat is for food (bread, rice, eggs).",
      },
      {
        wrong: "Bread eat I.",
        right: "I eat bread.",
        note: "In English, the person comes first: I eat bread.",
      },
    ],
  },

  dialogue: {
    title: "Breaktime talk",
    context: "Ana and Omar sit together at break. Omar practises his new word patterns.",
    lines: [
      { speaker: "Ana", text: "I drink tea. What do you drink, Omar?" },
      { speaker: "Omar", text: "I drink milk. And I eat bread." },
      { speaker: "Ana", text: "I eat bread too — bread and eggs!" },
      { speaker: "Omar", text: "Ana, is 'I drink bread' OK?" },
      { speaker: "Ana", text: "Ha! No — you EAT bread. You drink tea and milk." },
      { speaker: "Omar", text: "OK! I eat bread. I drink milk. Natural!" },
    ],
  },

  realLife: {
    title: "Use your words at the table",
    text: "The kitchen is the best classroom. At your next meal, say what you eat and drink: 'I eat rice. I drink water.' Say it in your head if you are shy — but say it! Real usage is where memory is made.",
    examples: [
      "At breakfast: 'I eat bread and eggs.'",
      "At dinner: 'I eat rice.'",
      "Any time: 'I drink water.'",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-3-1");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "Which is a word IN A SENTENCE (not alone)?",
        ["I drink tea.", "Tea.", "Drink."],
        0,
        "'I drink tea.' tells a complete idea — it is a sentence."
      ),
      t.mcq(
        "guided",
        "Which sentence sounds natural?",
        ["I eat bread.", "I drink bread.", "I read bread."],
        0,
        "Eat is the natural partner for bread."
      ),
      t.fill(
        "guided",
        "I ______ tea every morning. (drink or eat)",
        ["drink"],
        "Tea is a liquid — you drink it."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "Which word is the natural partner for 'book'?",
        ["read", "drink", "sleep"],
        0,
        "You read a book. Read + book is a natural pair."
      ),
      t.mcq(
        "independent",
        "Change one word to fix the sentence: 'I drink rice.'",
        ["I eat rice.", "I rice drink.", "I drink book."],
        0,
        "Rice is food — you eat it."
      ),
      t.match("independent", "Match each action with its natural partner.", [
        { left: "eat", right: "bread" },
        { left: "drink", right: "milk" },
        { left: "read", right: "a book" },
      ]),

      /* 10 — speaking */
      t.speak("Say what you drink in the morning.", "I drink tea in the morning."),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "I eat rice and fish.",
        "Listen. What does the person eat?",
        ["Rice and fish", "Bread and eggs", "Bread and milk"],
        0
      ),
      t.listenType("listening", "I drink milk.", "Listen and type the drink you hear.", ["milk"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. What does Ben eat for breakfast?",
        ["Bread and eggs", "Rice and fish", "Bread and milk"],
        0,
        "Ben says: 'I eat bread and eggs.'"
      ),
      t.fill(
        "reading",
        "Read the story. Ben drinks ______ in the morning.",
        ["milk"],
        "The story says: 'I drink milk.'"
      ),

      /* 13 — writing */
      t.write(
        "Write ONE true sentence about you: I eat ___ or I drink ___.",
        "I eat rice.",
        "Start with 'I', then eat or drink, then a food or a drink."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "Using a word means ______.",
        ["putting it inside a sentence", "saying it once", "writing it with capital letters"],
        0,
        "Words work inside sentences: I eat bread."
      ),
      t.mcq(
        "assessment",
        "Which sentence has the RIGHT word order?",
        ["Ana drinks tea.", "Tea drinks Ana.", "Drinks Ana tea."],
        0,
        "The person comes first: Ana drinks tea."
      ),
      t.fill(
        "assessment",
        "I ______ a book at night. (read or drink)",
        ["read"],
        "Books are for reading."
      ),
      t.mcq(
        "assessment",
        "Which pair is a NATURAL word partnership?",
        ["eat breakfast", "drink breakfast", "sleep breakfast"],
        0,
        "In English we eat breakfast — eat + breakfast is natural."
      ),
    ];
  })(),

  passage: {
    title: "Ben's day in sentences",
    text: "Ben uses his words in sentences all day. In the morning he says: 'I eat bread and eggs. I drink milk.' At school he says: 'I read a book. I write with a pen.' At night he says: 'I drink tea. I read a little more. I sleep.' Ben knows: a word alone is a seed. A word in a sentence is a tree!",
  },

  commonMistakes: [
    {
      wrong: "I drink bread.",
      right: "I eat bread.",
      why: "Drink is for liquids (tea, milk, water). Eat is for food (bread, rice, eggs).",
    },
    {
      wrong: "Bread eat I.",
      right: "I eat bread.",
      why: "English puts the person first, then the action: I eat bread.",
    },
  ],

  revision: {
    keyPoints: [
      "Using a word means putting it inside a sentence.",
      "A sentence is a group of words that tells a complete idea.",
      "Words have natural partners: eat bread, drink tea, read a book.",
      "Person first, then action: I eat bread.",
      "Change one word in a pattern to make a new sentence.",
    ],
    keyWords: ["to use", "sentence", "partner", "natural", "alone", "to sound"],
    selfCheck: [
      "Can you say one true sentence with 'I eat ___'?",
      "Can you say one true sentence with 'I drink ___'?",
      "Which is natural: 'I drink bread' or 'I eat bread'?",
    ],
  },

  homework: {
    tasks: [
      "At your next meal, say two sentences out loud: 'I eat ___.' and 'I drink ___.'",
      "Write three sentences on paper: one with eat, one with drink, one with read.",
      "Find the mistake and fix it: 'I drink rice.' Write the correct sentence.",
      "Tell a friend what you read: 'I read a ___.'",
    ],
  },
};
