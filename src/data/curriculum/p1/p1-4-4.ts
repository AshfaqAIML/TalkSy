import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 4 · Lesson 4 — Subject + Verb + Object
 *
 * Recipe number two: S + V + O ("I read books."). The object receives the
 * action and answers 'what?'. Swapping subject and object changes the story.
 */
export const p1_4_4: StructuredCourseLesson = {
  slug: "p1-4-4",
  title: "Subject + Verb + Object",
  subtitle: "Who does what to what",
  description:
    "I read books. She drinks tea. Subject + verb + object is recipe number two — add an object and your sentences grow richer and more useful.",
  minutes: 12,
  skills: ["reading", "writing", "listening", "speaking"],
  content: draftMeta([
    "st03-m01-u01-l03",
    "st03-m01-u02-l01",
  ]),

  introduction:
    "'The dog runs.' — nice, but WHERE does the story go next? Today your sentences gain a third ingredient: the object. 'I read… a book.' 'She drinks… tea.' With subject + verb + object you can say almost anything about your daily life. This is recipe number two — the workhorse of English.",

  objectives: [
    "You can say what the object of a sentence is.",
    "You can build subject + verb + object sentences: 'I read books.'",
    "You can find the object by asking 'verb + what?'.",
  ],

  prerequisites: [
    { lessonSlug: "p1-4-3", label: "You can build subject + verb sentences (lesson 18)." },
    { lessonSlug: "p1-3-3", label: "You know nouns (lesson 13)." },
  ],

  vocab: [
    {
      id: "p1-4-4-w1",
      term: "object",
      pos: "noun",
      definition: "the part of the sentence that receives the action",
      example: "In 'I read a book', 'a book' is the object.",
    },
    {
      id: "p1-4-4-w2",
      term: "to have",
      pos: "verb",
      definition: "to own; to hold; to possess",
      example: "I have a red pen.",
    },
    {
      id: "p1-4-4-w3",
      term: "to want",
      pos: "verb",
      definition: "to wish for something",
      example: "I want a cup of tea.",
    },
    {
      id: "p1-4-4-w4",
      term: "to like",
      pos: "verb",
      definition: "to think something is good; to enjoy",
      example: "I like rice and fish.",
    },
    {
      id: "p1-4-4-w5",
      term: "to need",
      pos: "verb",
      definition: "to require something important",
      example: "I need water.",
    },
    {
      id: "p1-4-4-w6",
      term: "to buy",
      pos: "verb",
      definition: "to get something with money",
      example: "She buys bread at the shop.",
    },
  ],

  concept: {
    definition: "Many sentences have three parts: subject + verb + object. The object receives the action.",
    explanation: [
      "In 'I read a book', the book does not read — it RECEIVES the reading. That is the object: the thing the action lands on. Almost always a noun (or pronoun like me, you, him, her, it, us, them).",
      "Here is the finder trick: say the subject and verb, then ask WHAT? 'She drinks… what?' Tea. 'He wants… what?' A pen. The answer is the object.",
      "Subject + verb + object — S + V + O — is the great workhorse of English. 'I eat rice.' 'We learn English.' 'They play football.' Master this pattern and you can describe almost your entire life.",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — Meet the object",
      text: "Look at 'I read a book.' Who reads? I — subject. What do I do? Read — verb. Read WHAT? A book — object! The object is the thing that receives the action.",
      examples: ["I read a book. (object: a book)", "She drinks tea. (object: tea)", "He has a pen. (object: a pen)"],
    },
    {
      title: "Step 2 — The finder trick: verb + what?",
      text: "To find the object, say the subject and verb, then ask 'what?'. 'We learn… what?' English! 'They play… what?' Football. 'I want… what?' Tea. Question asked, object found.",
      examples: ["We learn English.", "They play football.", "I want tea."],
    },
    {
      title: "Step 3 — Build S + V + O sentences",
      text: "Now build your own. Choose a subject (I, Ana, my mother, we…), an action verb (eat, read, drink, like, want, need, buy…), and an object (rice, a book, tea, a pen…). Mix and match — hundreds of sentences!",
      examples: ["I eat rice.", "Ana reads books.", "My mother buys bread.", "We like English."],
    },
    {
      title: "Step 4 — The -s rule still works",
      text: "Remember the s? It travels with you. 'I like tea.' but 'She likes tea.' 'We buy bread.' but 'He buys bread.' Subject first, s rule second — always in that order.",
      examples: ["I like tea. / She likes tea.", "We buy bread. / He buys bread.", "They want rice. / It wants milk."],
    },
    {
      title: "Step 5 — Swapping changes the story",
      text: "Careful: 'The dog sees the cat.' and 'The cat sees the dog.' use the same three words — but tell different stories! The subject is the star; the object is the one who gets seen. Order matters.",
      examples: ["The dog sees the cat. (the cat gets seen)", "The cat sees the dog. (the dog gets seen)"],
    },
  ],

  exampleBank: {
    basic: [
      "I read a book.",
      "She drinks tea.",
      "He has a pen.",
      "We learn English.",
    ],
    everyday: [
      "I eat rice and fish for dinner.",
      "My father drives a bus.",
      "She buys bread at the shop.",
      "They play football after school.",
      "I need a new pen.",
    ],
    questions: [
      "What do you read? (I read books.)",
      "What does she drink? (She drinks tea.)",
      "What do you want? (I want rice, please.)",
    ],
    negatives: [
      "The book is not the subject — it receives the action.",
      "I do not drink bread.",
      "'Read a book I' is not English order — S + V + O!",
    ],
    corrections: [
      {
        wrong: "I read.",
        right: "I read a book.",
        note: "'I read' is correct but short. Adding an object (a book) makes the sentence fuller.",
      },
      {
        wrong: "She like tea.",
        right: "She likes tea.",
        note: "She = one person → verb + s: likes. The s rule works in S + V + O too!",
      },
    ],
  },

  dialogue: {
    title: "What do you need?",
    context: "Ana and Omar pack their school bags for tomorrow.",
    lines: [
      { speaker: "Ana", text: "I need a pen and a book. What do you need?" },
      { speaker: "Omar", text: "I need two pens. I lose my pens!" },
      { speaker: "Ana", text: "Ha! And I want a new bag. This bag is old." },
      { speaker: "Omar", text: "My mother buys bread at the shop. I want bread too!" },
      { speaker: "Ana", text: "Omar! We pack school bags, not food!" },
      { speaker: "Omar", text: "OK, OK. I need a book. And after school… I buy bread!" },
    ],
  },

  realLife: {
    title: "Shopping in S + V + O",
    text: "Shops speak S + V + O. 'I want bread, please.' 'I need milk.' 'I have two euros.' 'I buy rice.' Practise on your next shopping trip — even silently in your head counts!",
    examples: [
      "At a shop: 'I want bread, please.'",
      "At a café: 'I need a tea.'",
      "At home: 'I have a book. I read the book.'",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-4-4");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "The object of a sentence ______.",
        ["receives the action", "does the action", "ends the sentence with a dot"],
        0,
        "In 'I read a book', the book receives the reading."
      ),
      t.mcq(
        "guided",
        "In 'She drinks tea', what is the object?",
        ["tea", "She", "drinks"],
        0,
        "Drinks WHAT? Tea — the object."
      ),
      t.fill(
        "guided",
        "I eat ______. (a food word)",
        ["rice", "bread", "fish"],
        "Eat WHAT? Choose any food!"
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "Which sentence follows the S + V + O pattern?",
        ["I read books.", "Read books I.", "Books read I."],
        0,
        "Subject (I) + verb (read) + object (books)."
      ),
      t.mcq(
        "independent",
        "Find the object: 'My father drives a bus.'",
        ["a bus", "My father", "drives"],
        0,
        "Drives WHAT? A bus."
      ),
      t.match("independent", "Match each verb with a natural object.", [
        { left: "drink", right: "tea" },
        { left: "read", right: "a book" },
        { left: "eat", right: "rice" },
        { left: "play", right: "football" },
      ]),
      t.order(
        "independent",
        "Build the sentence from the mixed words: 'reads / a / Ana / book'.",
        "Ana reads a book",
        "Subject + verb + object — the master recipe."
      ),

      /* 10 — speaking */
      t.speak("Say what you drink every morning.", "I drink tea every morning."),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "She buys bread at the shop.",
        "Listen. What is the object of the sentence?",
        ["bread", "she", "the shop"],
        0
      ),
      t.listenType("listening", "I want a new pen.", "Listen and type the object you hear.", ["pen", "a pen", "a new pen"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. What does Nina teach?",
        ["English", "Football", "Bread-making"],
        0,
        "The story says: 'She teaches English.'"
      ),
      t.fill(
        "reading",
        "Read the story. What does Nina's son eat? He eats ______.",
        ["bread"],
        "His favourite object is bread!"
      ),

      /* 13 — writing */
      t.write(
        "Write ONE sentence: subject + verb + object. Use 'like' or 'need'.",
        "I like English.",
        "WHO + WHAT THEY DO + WHAT they do it to."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "In S + V + O, the O stands for ______.",
        ["object — the thing that receives the action", "order — the word order", "old — old words"],
        0,
        "Object = receives the action."
      ),
      t.mcq(
        "assessment",
        "He ______ football every Sunday. (play)",
        ["plays", "play", "playing"],
        0,
        "He → verb + s: plays."
      ),
      t.fill(
        "assessment",
        "Find the object: 'We learn English.' The object is ______.",
        ["english"],
        "Learn WHAT? English."
      ),
      t.mcq(
        "assessment",
        "'The dog sees the cat.' Who receives the seeing?",
        ["The cat", "The dog", "Nobody"],
        0,
        "The dog is the star; the cat receives the action — it is the object."
      ),
    ];
  })(),

  passage: {
    title: "Nina and her son",
    text: "Nina is a teacher. She teaches English. Her son, Sam, is five years old. Sam loves stories. Nina reads him a story every night. Sam wants a dog. Nina says: 'A dog needs a garden. We have a small flat.' So Sam wants a fish. It needs only water! Nina smiles. She buys bread, rice and a little fish food.",
  },

  commonMistakes: [
    {
      wrong: "She like tea.",
      right: "She likes tea.",
      why: "She = one person → the verb takes s: likes. The s rule works in every pattern.",
    },
    {
      wrong: "Read a book I.",
      right: "I read a book.",
      why: "English order is S + V + O: the subject first, the verb second, the object last.",
    },
  ],

  revision: {
    keyPoints: [
      "The object receives the action and answers 'verb + what?'.",
      "S + V + O: subject + verb + object — 'I read books.'",
      "The -s rule still applies: she likes tea, he buys bread.",
      "Swapping subject and object changes the story.",
      "Objects are usually nouns: rice, tea, a book, a pen.",
    ],
    keyWords: ["object", "to have", "to want", "to like", "to need", "to buy"],
    selfCheck: [
      "Can you find the object in 'I drink milk.'?",
      "Can you build an S + V + O sentence about your breakfast?",
      "She ____ (like) rice — like or likes?",
    ],
  },

  homework: {
    tasks: [
      "Write five S + V + O sentences about things you eat, read or play.",
      "Go shopping (or watch someone shop). Write two sentences: 'I want…' 'I buy…'",
      "Find the object: 'My mother reads a book at night.'",
      "Fix the mistake: 'He want tea.' Write the correct sentence.",
    ],
  },
};
