import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 5 · Lesson 4 — Sentence Arrangement
 *
 * English word order: S + V + O, adjectives before nouns, capitals and
 * full stops. The unscrambling strategy: find the subject first, then the
 * verb, then the object.
 */
export const p1_5_4: StructuredCourseLesson = {
  slug: "p1-5-4",
  title: "Sentence Arrangement",
  subtitle: "Putting words in the right order",
  description:
    "Words are like furniture — where you put them matters! Learn the English word-order recipe (subject + verb + object) and become a sentence unscrambling champion.",
  minutes: 12,
  skills: ["reading", "writing", "listening", "speaking"],
  content: draftMeta([
    "st03-m01-u02-l01",
    "st03-m01-u02-l02",
  ]),

  introduction:
    "Today is puzzle day! You know all the pieces — subjects, verbs, objects, adjectives — now we practise putting them in the right order. English is strict about order: the subject comes first, then the verb, then the object. Master the recipe, and no scrambled sentence will ever scare you again.",

  objectives: [
    "You can say the English order: subject + verb + object.",
    "You can unscramble mixed-up words into a correct sentence.",
    "You can place adjectives correctly: before the noun.",
  ],

  prerequisites: [
    { lessonSlug: "p1-4-4", label: "You know S + V + O sentences (lesson 19)." },
    { lessonSlug: "p1-5-2", label: "You know adjectives go before nouns (lesson 22)." },
    { lessonSlug: "p1-4-1", label: "You know the sentence uniform: capital + full stop (lesson 16)." },
  ],

  vocab: [
    {
      id: "p1-5-4-w1",
      term: "order",
      pos: "noun",
      definition: "the position of things; first, second, third…",
      example: "English has a special word order.",
    },
    {
      id: "p1-5-4-w2",
      term: "to arrange",
      pos: "verb",
      definition: "to put things in the right places",
      example: "Arrange the words to make a sentence.",
    },
    {
      id: "p1-5-4-w3",
      term: "then",
      pos: "adverb",
      definition: "after that; next",
      example: "First the subject, then the verb.",
    },
    {
      id: "p1-5-4-w4",
      term: "mixed up",
      pos: "adjective",
      definition: "in the wrong order; shuffled",
      example: "These words are mixed up! Let's fix them.",
    },
    {
      id: "p1-5-4-w5",
      term: "to build",
      pos: "verb",
      definition: "to make by putting pieces together",
      example: "Build a sentence from the words.",
    },
    {
      id: "p1-5-4-w6",
      term: "to make sense",
      pos: "phrase",
      definition: "to have a clear meaning",
      example: "The correct order makes sense.",
    },
  ],

  concept: {
    definition: "English sentences follow a strict order: subject first, then the verb, then the object. Adjectives go before their noun.",
    explanation: [
      "English is a word-order language. Move one word and the meaning changes — or disappears! 'The dog sees the cat' and 'The cat sees the dog' are different stories. The order IS the grammar.",
      "The master recipe: SUBJECT + VERB + OBJECT. Who, then what they do, then what they do it to. 'Ana reads books.' 'I drink tea.' 'We learn English.'",
      "Adjectives have their place too: directly before the noun. Not 'a dog big' but 'a big dog'. And the whole sentence still wears its uniform: capital letter at the front, full stop at the back.",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — The master recipe: S + V + O",
      text: "Say it with me: subject, verb, object. WHO, DOES WHAT, TO WHAT. 'Ana (S) reads (V) a book (O).' Every big English sentence is this recipe with extras added.",
      examples: ["Ana | reads | a book.", "I | drink | tea.", "We | learn | English."],
    },
    {
      title: "Step 2 — The unscramble strategy",
      text: "Words arrive mixed up: 'book / a / reads / Ana'. Strategy: find the SUBJECT first (who?). Then find the VERB (what do they do?). What's left is usually the OBJECT. Assemble: Ana reads a book!",
      examples: ["Mixed: book / a / reads / Ana → Ana reads a book.", "Mixed: tea / drink / I → I drink tea."],
    },
    {
      title: "Step 3 — Park the adjective before the noun",
      text: "When an adjective is in the pile, park it directly before its noun. 'big / a / dog / sees / cat / the' → 'A big dog sees the cat.' The adjective and noun travel together.",
      examples: ["Mixed: big / a / dog → a big dog.", "Mixed: old / an / book → an old book.", "Mixed: cold / a / day → a cold day."],
    },
    {
      title: "Step 4 — Check the meaning",
      text: "After unscrambling, read your sentence aloud. Does it make sense? Does the subject DO the action? 'The tea drinks Ana' is in perfect S + V + O order — but it makes no sense! Tea cannot drink. Check grammar AND meaning.",
      examples: ["Ana drinks tea. ✓ (makes sense)", "The tea drinks Ana. ✗ (right order, wrong meaning)"],
    },
    {
      title: "Step 5 — Dress the sentence",
      text: "Almost done! Add the uniform: capital letter at the start, full stop at the end. 'ana reads a book' becomes 'Ana reads a book.' Now the sentence is dressed and ready.",
      examples: ["Fix: ana reads a book → Ana reads a book.", "Fix: we learn english → We learn English."],
    },
  ],

  exampleBank: {
    basic: [
      "Ana reads a book.",
      "I drink tea.",
      "A big dog runs.",
      "We learn English.",
    ],
    everyday: [
      "My mother cooks rice.",
      "The old man walks slowly. (slowly tells how)",
      "I need a cold drink.",
      "She buys bread at the shop.",
    ],
    questions: [
      "What comes first in an English sentence?",
      "Where does the adjective go?",
      "Does 'The tea drinks Ana' make sense?",
    ],
    negatives: [
      "'Reads Ana a book' is not correct order.",
      "'A dog big' is not correct — the adjective goes first.",
      "Order is not optional in English — it changes the meaning.",
    ],
    corrections: [
      {
        wrong: "Reads Ana a book.",
        right: "Ana reads a book.",
        note: "Subject first! WHO before WHAT THEY DO.",
      },
      {
        wrong: "I have a phone new.",
        right: "I have a new phone.",
        note: "The adjective goes before its noun: a new phone.",
      },
    ],
  },

  dialogue: {
    title: "The unscramble race",
    context: "Ms Reed writes mixed-up sentences on the board. Two teams race to fix them.",
    lines: [
      { speaker: "Ms Reed", text: "Race! Unscramble: 'tea / drinks / Omar / cold'." },
      { speaker: "Ana", text: "Omar drinks cold tea!" },
      { speaker: "Ms Reed", text: "Point to Ana's team! Next: 'book / a / big / reads / she'." },
      { speaker: "Omar", text: "She reads a big book!" },
      { speaker: "Ms Reed", text: "Point to Omar's team! Last one: 'dog / the / cat / the / sees'." },
      { speaker: "Ana", text: "The dog sees the cat!" },
      { speaker: "Omar", text: "Or… the cat sees the dog! Both make sense!" },
      { speaker: "Ms Reed", text: "Ha! True — both are correct sentences. A point for everyone!" },
    ],
  },

  realLife: {
    title: "Order in real messages",
    text: "When you write messages, order is everything. 'Bus I the take morning in the' — nobody understands. 'I take the bus in the morning' — everyone understands. Before you send your next English message, check the order: WHO first?",
    examples: [
      "Check your next message: does the subject come first?",
      "Unscramble your shopping list into sentences: 'I need milk.'",
      "Read one sentence from a book. Point at S, V and O.",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-5-4");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "The English master recipe is ______.",
        ["subject + verb + object", "object + verb + subject", "verb + subject + object"],
        0,
        "WHO first, then WHAT THEY DO, then WHAT they do it to."
      ),
      t.mcq(
        "guided",
        "Unscramble: 'tea / I / drink'",
        ["I drink tea.", "Tea drink I.", "Drink I tea."],
        0,
        "Subject (I) + verb (drink) + object (tea)."
      ),
      t.fill(
        "guided",
        "Unscramble: 'reads / Ana / books' → Ana ______ books.",
        ["reads"],
        "Subject first, verb second, object third."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "Which sentence puts the adjective in the right place?",
        ["I need a hot tea.", "I need a tea hot.", "I need hot a tea."],
        0,
        "Adjective before noun: a hot tea."
      ),
      t.mcq(
        "independent",
        "Unscramble: 'the / park / in / play / children / the'",
        ["The children play in the park.", "Play the children in the park.", "In the park play the children the."],
        0,
        "The children (S) play (V) in the park (place)."
      ),
      t.match("independent", "Match each job with its position in the sentence.", [
        { left: "subject", right: "first" },
        { left: "verb", right: "second" },
        { left: "object", right: "third" },
      ]),
      t.order(
        "independent",
        "Build the sentence from the mixed words: 'big / a / dog / sees / cat / the'.",
        "A big dog sees the cat",
        "Subject + verb + object — and the adjective goes before its noun."
      ),

      /* 10 — speaking */
      t.speak("Say the sentence in the right order: 'tea / drink / I / morning / the / in'.", "I drink tea in the morning."),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "She reads a big book.",
        "Listen. Which word comes FIRST in the sentence?",
        ["She", "reads", "book"],
        0
      ),
      t.listenType("listening", "My father drives an old bus.", "Listen and type the first two words.", ["my father", "my", "father"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. Why does Ben like word-order day?",
        ["Because unscrambling is like a game", "Because he can sleep", "Because there is no homework"],
        0,
        "Ben says it is like a puzzle game."
      ),
      t.fill(
        "reading",
        "Read the story. Fix the sentence: 'milk / the / drinks / cat / the' → The cat drinks the ______.",
        ["milk"],
        "The object comes last."
      ),

      /* 13 — writing */
      t.write(
        "Unscramble and write: 'english / we / learn'.",
        "We learn English.",
        "Subject first, verb second, object last. Capital + full stop!"
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "What is the correct order for 'eats / Sara / rice'?",
        ["Sara eats rice.", "Eats Sara rice.", "Rice Sara eats."],
        0,
        "Subject + verb + object: Sara eats rice."
      ),
      t.mcq(
        "assessment",
        "Where does an adjective go?",
        ["Directly before its noun", "After its noun", "At the end of the sentence"],
        0,
        "A big dog. A cold day. The adjective leads its noun."
      ),
      t.fill(
        "assessment",
        "Unscramble: 'buys / bread / she' → She ______ bread.",
        ["buys"],
        "Subject (she) + verb + object (bread)."
      ),
      t.mcq(
        "assessment",
        "'The tea drinks Ana.' — what is wrong with this sentence?",
        ["The order is right but the meaning is wrong", "The order is wrong", "Nothing is wrong"],
        0,
        "Grammar is fine (S+V+O), but tea cannot drink! Check sense, not just order.",
      ),
      t.order(
        "assessment",
        "Put the words in order: 'learn / English / we'.",
        "We learn English",
        "Subject first: We learn English."
      ),
    ];
  })(),

  passage: {
    title: "Word-order day",
    text: "Friday is word-order day in Ms Reed's class. She writes mixed-up words on the board, and the students fix them. 'Book / a / reads / Ben' — Ben reads a book! 'Small / a / cat / sleeps' — A small cat sleeps! Ben loves this game. 'It is like a puzzle,' he says. 'First I find the subject. Then I find the verb. Then I build the sentence!' Ms Reed smiles. Good order makes good English.",
  },

  commonMistakes: [
    {
      wrong: "Reads Ana a book.",
      right: "Ana reads a book.",
      why: "The subject comes first — WHO before WHAT THEY DO.",
    },
    {
      wrong: "I have a phone new.",
      right: "I have a new phone.",
      why: "Adjectives go directly before their noun: a new phone.",
    },
  ],

  revision: {
    keyPoints: [
      "English order: subject + verb + object.",
      "Unscramble strategy: find WHO first, then the verb; the rest falls into place.",
      "Adjectives park directly before their noun: a big dog.",
      "Check meaning, not just order: 'The tea drinks Ana' is ordered but silly.",
      "Dress every sentence: capital letter + full stop.",
    ],
    keyWords: ["order", "to arrange", "then", "mixed up", "to build", "to make sense"],
    selfCheck: [
      "Can you recite the master recipe: S + V + O?",
      "Can you unscramble 'rice / eats / Sara'?",
      "Does the adjective go before or after the noun?",
    ],
  },

  homework: {
    tasks: [
      "Unscramble these: 'tea / drinks / he' · 'a / needs / pen / she' · 'English / we / love'.",
      "Write three sentences about your day in perfect S + V + O order.",
      "Take one sentence from a book. Mark the subject, verb and object.",
      "Play the unscramble race with a friend — mix words, race to fix them!",
    ],
  },
};
