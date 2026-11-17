import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 3 · Lesson 4 — Verbs
 *
 * "A verb is an action word." Everyday verbs, verbs in sentences
 * (noun + verb), one noun with many verbs, and an honest preview of the
 * -s ending (he runs) which is taught fully in the sentence lessons.
 */
export const p1_3_4: StructuredCourseLesson = {
  slug: "p1-3-4",
  title: "Verbs",
  subtitle: "Action words",
  description:
    "A verb is an action word. Run, eat, sit, read — verbs tell what people and things do. Learn the verbs of your day and put them to work in sentences.",
  minutes: 12,
  skills: ["reading", "writing", "listening", "speaking"],
  content: draftMeta(["st04-m01-u03-l01"]),

  introduction:
    "Nouns name the world — but the world MOVES. Dogs run. Teachers read. You eat, drink, sleep and learn. For every action, English has a special word: a verb. Verbs are the engines of sentences. Today you will meet the busiest word family in English.",

  objectives: [
    "You can say the definition of a verb in one sentence.",
    "You can name eight everyday action verbs.",
    "You can use a verb in a sentence with a noun.",
  ],

  prerequisites: [
    { lessonSlug: "p1-3-3", label: "You know what nouns are (lesson 13)." },
    { lessonSlug: "p1-3-1", label: "You can build simple sentences (lesson 11)." },
  ],

  vocab: [
    {
      id: "p1-3-4-w1",
      term: "verb",
      pos: "noun",
      definition: "an action word — it tells what a person or thing does",
      example: "'Run' is a verb.",
    },
    {
      id: "p1-3-4-w2",
      term: "action",
      pos: "noun",
      definition: "something you do",
      example: "Running is an action.",
    },
    {
      id: "p1-3-4-w3",
      term: "to eat",
      pos: "verb",
      definition: "to put food in your mouth and swallow it",
      example: "I eat bread.",
    },
    {
      id: "p1-3-4-w4",
      term: "to run",
      pos: "verb",
      definition: "to move fast with your legs",
      example: "The dog runs.",
    },
    {
      id: "p1-3-4-w5",
      term: "to sleep",
      pos: "verb",
      definition: "to rest with your eyes closed at night",
      example: "The cat sleeps.",
    },
    {
      id: "p1-3-4-w6",
      term: "to write",
      pos: "verb",
      definition: "to make words with a pen or pencil",
      example: "I write my name.",
    },
    {
      id: "p1-3-4-w7",
      term: "to play",
      pos: "verb",
      definition: "to do something fun, like a game",
      example: "The children play.",
    },
    {
      id: "p1-3-4-w8",
      term: "to do",
      pos: "verb",
      definition: "the general action word — to perform something",
      example: "What do you do every day?",
    },
  ],

  concept: {
    definition: "A verb is an action word. It tells what a person or thing does.",
    explanation: [
      "Run is a verb. Eat is a verb. Sit, read, sleep, drink, play — all verbs. Every time something happens, a verb is working.",
      "Nouns and verbs are best friends. A noun says WHO, a verb says WHAT THEY DO. 'The dog runs.' — dog (noun) + runs (verb) = a complete idea!",
      "Verbs change a little for different people: I run, but he runs (with an s). Do not worry about that yet — we will master it in the sentence lessons. For today, watch the verbs do their work.",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — Verbs are actions",
      text: "Stand up. Sit down. Walk. Stop. Every command I just gave you is a verb! Verbs are doing words. If you can DO it, the word for it is probably a verb.",
      examples: ["Stand is a verb.", "Sit is a verb.", "Walk is a verb.", "Stop is a verb."],
    },
    {
      title: "Step 2 — The verbs of your day",
      text: "Your day is full of verbs. You wake up. You eat. You drink. You read. You write. You play. You sleep. Eight verbs — one day! Say them in order and you have told the story of your day.",
      examples: ["I wake up.", "I eat.", "I read.", "I sleep."],
    },
    {
      title: "Step 3 — Noun + verb = the first engine",
      text: "Put a noun in front of a verb and something amazing happens: you get a complete idea. 'The dog runs.' 'Birds fly.' 'The baby sleeps.' Noun + verb — the smallest sentence in English.",
      examples: ["The dog runs.", "Birds fly.", "The baby sleeps.", "Fish swim."],
    },
    {
      title: "Step 4 — One noun, many verbs",
      text: "Take one noun and give it different actions. 'I eat. I read. I sit. I play.' The noun stays; the verb changes the story. Verbs are the colour of a sentence.",
      examples: ["I eat.", "I read.", "I sit.", "I play."],
    },
    {
      title: "Step 5 — A small preview: the s ending",
      text: "You will sometimes see verbs with a little s: 'He runs. She reads.' When ONE person or thing does the action (he, she, it), English often adds s to the verb. Full rules come in the sentence lessons — for now, just notice it.",
      examples: ["I run, but he runs.", "We read, but she reads.", "The dogs sleep, but the cat sleeps."],
    },
  ],

  exampleBank: {
    basic: [
      "Run is a verb.",
      "Eat is a verb.",
      "The dog runs.",
      "I sleep.",
    ],
    everyday: [
      "I eat breakfast at seven.",
      "Ana reads books at night.",
      "The children play in the park.",
      "My father drives a taxi.",
      "We drink tea in the morning.",
    ],
    questions: [
      "Is 'eat' a verb?",
      "What does the dog do?",
      "Can you name three actions you do every day?",
    ],
    negatives: [
      "'Table' is not a verb — you cannot DO a table!",
      "The cat does not read.",
      "'Sleep' is not a noun here — it is the action.",
    ],
    corrections: [
      {
        wrong: "The dog run fast.",
        right: "The dog runs fast.",
        note: "With one dog (it), the verb takes s: runs. We practise this rule in the sentence lessons.",
      },
      {
        wrong: "I sleeps at night.",
        right: "I sleep at night.",
        note: "With I, the verb has no s. Save the s for he, she and it!",
      },
    ],
  },

  dialogue: {
    title: "What does it do?",
    context: "Ana and Omar look at animals in the park and name their actions.",
    lines: [
      { speaker: "Ana", text: "Look, Omar! The dog runs!" },
      { speaker: "Omar", text: "Yes! And the bird flies. 'Flies' is a verb." },
      { speaker: "Ana", text: "The fish swim. 'Swim' is a verb too." },
      { speaker: "Omar", text: "And the cat? What does the cat do?" },
      { speaker: "Ana", text: "The cat sleeps! Cats love to sleep." },
      { speaker: "Omar", text: "Ha! Run, fly, swim, sleep — the park is full of verbs!" },
    ],
  },

  realLife: {
    title: "Your day in verbs",
    text: "Tell your day in verbs and you are telling stories in English. Wake, eat, drink, read, write, work, walk, play, sleep. Watch people today and ask: what does that person DO? Every answer is a verb.",
    examples: [
      "Watch a street: people walk, cars drive, birds fly.",
      "Say your morning in verbs: I wake up. I eat. I drink.",
      "Ask about a friend: What does she do every day?",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-3-4");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "A verb is ______.",
        ["an action word", "a person's name", "a colour"],
        0,
        "Verbs tell what people and things do."
      ),
      t.mcq(
        "guided",
        "Which word is a VERB?",
        ["eat", "table", "school"],
        0,
        "Eat is something you DO — a verb. Table and school are nouns."
      ),
      t.fill(
        "guided",
        "The cat ______ at night. (sleep or sleeps? The cat = it)",
        ["sleeps"],
        "With he, she or it, the verb takes s: sleeps."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "Which word is NOT a verb?",
        ["book", "run", "write"],
        0,
        "A book is a thing — a noun. Run and write are actions."
      ),
      t.mcq(
        "independent",
        "Complete the sentence with a verb: 'The children ___ in the park.'",
        ["play", "table", "happy"],
        0,
        "Play is the action: The children play in the park."
      ),
      t.match("independent", "Match each verb with its meaning.", [
        { left: "to eat", right: "put food in your mouth" },
        { left: "to sleep", right: "rest with your eyes closed" },
        { left: "to write", right: "make words with a pen" },
      ]),

      /* 10 — speaking */
      t.speak("Say three actions you do every day.", "I eat. I read. I sleep."),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "The children play in the park.",
        "Listen. Which VERB do you hear?",
        ["play", "park", "children"],
        0
      ),
      t.listenType("listening", "I write with a pen.", "Listen and type the verb you hear.", ["write"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. What does Max do at night?",
        ["He sleeps", "He runs", "He reads"],
        0,
        "The story says: 'At night, Max sleeps.'"
      ),
      t.fill(
        "reading",
        "Read the story. Max ______ bread and eggs in the morning.",
        ["eats"],
        "He eats breakfast — the verb with s, because Max = he."
      ),

      /* 13 — writing */
      t.write(
        "Write ONE sentence: a noun + a verb. Example: 'The dog runs.'",
        "The dog runs.",
        "First WHO (a noun), then WHAT THEY DO (a verb)."
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "What is a verb?",
        ["An action word", "The name of a place", "A group of letters"],
        0,
        "A verb tells what a person or thing does."
      ),
      t.mcq(
        "assessment",
        "Which of these words is a verb?",
        ["drink", "chair", "mother"],
        0,
        "Drink is an action. Chair and mother are nouns."
      ),
      t.fill(
        "assessment",
        "Find the verb: 'Ana reads a book.' The verb is ______.",
        ["reads"],
        "Reads is the action — what Ana does."
      ),
      t.mcq(
        "assessment",
        "Noun + verb makes ______.",
        ["a complete idea (a sentence)", "just a list of words", "a question"],
        0,
        "'The dog runs.' — noun + verb = a complete idea!"
      ),
    ];
  })(),

  passage: {
    title: "Max's busy day",
    text: "Max is a bus driver. He drives the number three bus. Max wakes up at five. He eats bread and eggs. He drinks tea. Then he works. He drives all day. People say: 'Good morning!' and Max smiles. At night, Max plays with his dog. Then Max sleeps. Verbs tell his story: wake, eat, drink, drive, play, sleep!",
  },

  commonMistakes: [
    {
      wrong: "The dog run fast.",
      right: "The dog runs fast.",
      why: "With one dog (it), the verb takes s: runs. The full rule comes in the sentence lessons.",
    },
    {
      wrong: "I sleeps at night.",
      right: "I sleep at night.",
      why: "With I, the verb has no s. Save the s for he, she and it.",
    },
  ],

  revision: {
    keyPoints: [
      "A verb is an action word. It tells what a person or thing does.",
      "Run, eat, drink, read, write, sit, sleep, play — everyday verbs.",
      "Noun + verb = the smallest complete sentence: 'The dog runs.'",
      "One noun can take many verbs: I eat. I read. I sleep.",
      "With he, she and it, verbs often take a small s: he runs.",
    ],
    keyWords: ["verb", "action", "to eat", "to run", "to sleep", "to write", "to play", "to do"],
    selfCheck: [
      "Can you say the verb definition from memory?",
      "Can you name five verbs you do every day?",
      "Can you build a noun + verb sentence about your family?",
    ],
  },

  homework: {
    tasks: [
      "Write six verbs on paper — one for each thing you do tomorrow morning.",
      "Find the verbs: 'Ana reads and writes at school.'",
      "Watch a person for one minute. Write three verbs for their actions.",
      "Say your whole day in verbs, from wake to sleep.",
    ],
  },
};
