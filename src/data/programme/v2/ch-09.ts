/**
 * PROMPT 57 production — Batch 4, Chapter 09: Understanding Sentence Structure.
 *
 * Every lesson below is rewritten to the full v2 teaching standard:
 * lesson introduction + prerequisites, concept explanation, step-by-step
 * teaching, rules and patterns, 8+ worked examples with teaching notes,
 * real-life usage, comparison, common mistakes (wrong → right → reason),
 * guided practice (with hints), independent practice (no hints),
 * four-skill integration, validated Urdu/Hindi support, summary,
 * revision questions from earlier lessons, assignment and homework.
 *
 * This is the sentence-anatomy chapter: every lesson makes learners ANALYSE
 * real sentences — split them into subject | predicate, run the what?/who?
 * test to find direct objects, recognise complements after be, place
 * adjectives, how-often words and time phrases, and finally assemble new
 * sentences from the reusable SV / SVO / SVC / SVOO patterns. Real beginner
 * mistakes (She is teacher · I like very much football · I drink always
 * coffee) come with reasons, never bare rule lists.
 */

import {
  AU,
  CORR,
  DICT,
  DL,
  FB,
  GR,
  H,
  LIS,
  MCQ,
  MATCH,
  N,
  RD,
  REORD,
  T,
  TB,
  VOC,
  W,
  fb,
} from "../types";
import { CMP, EXD, FS, LI, LSP, MS, RV, SM, ST, US, type LessonUpgrade } from "./helpers";
import { gls } from "./glossary";

/** Vocabulary entry built from a validated glossary term. */
function vocGlossary(
  title: string,
  entries: { word: string; partOfSpeech: string; definition: string }[],
) {
  return VOC(
    title,
    entries.map((e) => {
      const g = gls(e.word);
      return [e.word, e.partOfSpeech, e.definition, `${g.ur} · ${g.hi}`] as [
        string,
        string,
        string,
        string,
      ];
    }),
  );
}

/** fb() plus a similar example — used where one more model teaches the pattern. */
function fbx(
  correctAnswer: string,
  explanation: string,
  whyWrong: string,
  example: { english: string; translation: string },
) {
  return { ...fb(correctAnswer, explanation, whyWrong), similarExample: example };
}

export const ch09Upgrades: LessonUpgrade[] = [
  // =========================================================================
  // Lesson 1 — Subject and Predicate
  // =========================================================================
  {
    slug: "ch-09-l-01",
    minutes: 25,
    description:
      "Every sentence splits into two halves: the subject — who it is about — and the predicate — everything said about them. Learn the split, and sentences open like a book.",
    outcomes: [
      "Split any simple sentence into subject and predicate",
      "Say what each half does in one sentence",
      "Write a new predicate for a given subject",
      "Split a sentence with a long subject correctly",
    ],
    blocks: [
      LI(
        "You can already find the subject of a sentence. Today you meet the other half: the predicate. Every sentence splits into two halves. The subject says who or what the sentence is about. The predicate says everything else. In this lesson you learn to split any sentence with one line.",
        [
          "You can find the subject with the question who? (Chapter 08 · Lesson 3).",
          "You know every sentence needs a verb (Chapter 08 · Lesson 1).",
          "You know naming words, action words and describing words (Chapter 07).",
        ],
      ),
      vocGlossary("Sentence parts for this lesson", [
        { word: "subject", partOfSpeech: "noun", definition: "Who or what the sentence is about — the left half." },
        { word: "predicate", partOfSpeech: "noun", definition: "The verb and everything after it — the right half." },
        { word: "verb", partOfSpeech: "noun", definition: "The action or being word. The predicate starts with it." },
        { word: "sentence", partOfSpeech: "noun", definition: "A group of words that expresses one complete idea." },
        { word: "complete sentence", partOfSpeech: "noun", definition: "A sentence with both halves: subject and predicate." },
      ]),
      H("Two halves of every sentence"),
      T(
        "Think of a sentence as two teams. The subject names the person or thing. The predicate says what they do. “My mother cooks rice.” splits into two halves: my mother | cooks rice. One line, two halves. Every complete sentence splits like this.",
      ),
      {
        type: "definition",
        term: "predicate",
        partOfSpeech: "noun",
        definition:
          "The predicate is the verb and everything else in the sentence. It tells us what the subject does or is.",
        example: {
          english: "My brother drinks tea in the morning.",
          translation: "My brother | drinks tea in the morning — subject | predicate.",
        },
      },
      ST(
        "Split a sentence in three steps",
        [
          {
            title: "Step 1 — Find the verb",
            text: "Every predicate starts with a verb. Find the action word or the being word first.",
            examples: [
              { english: "My brother drinks tea in the morning. → verb: drinks", note: "The verb is the anchor of the right half." },
            ],
          },
          {
            title: "Step 2 — Ask: who or what?",
            text: "Put the question before the verb. Take the whole answer — that is the subject.",
            examples: [
              { english: "Who drinks? → my brother", note: "The whole phrase, not only the word brother." },
            ],
          },
          {
            title: "Step 3 — Draw the line and take the rest",
            text: "Everything after the subject is the predicate. The verb, the object, the place, the time — all of it.",
            examples: [
              { english: "My brother | drinks tea in the morning.", note: "One line after the doer. The predicate runs to the full stop." },
            ],
          },
        ],
      ),
      GR(
        "The split rule",
        "A sentence has a subject and a predicate. The subject is who or what the sentence is about. The predicate is the verb and everything after it — it tells us what the subject does or is.",
        [
          { english: "My mother | cooks rice.", translation: "Subject: my mother. Predicate: cooks rice." },
          { english: "The students | write sentences at school.", translation: "Long predicates run all the way to the full stop." },
          { english: "We | are happy.", translation: "Being verbs live in the predicate too." },
        ],
        [
          "Commands keep no written subject: “Open the door.” — the subject is you, hidden. The whole command is the predicate.",
        ],
      ),
      TB(
        "Splitting real sentences",
        ["Sentence", "Subject", "Predicate"],
        [
          ["The cat sleeps.", "The cat", "sleeps"],
          ["My mother cooks rice.", "My mother", "cooks rice"],
          ["Sara and Ali play tennis.", "Sara and Ali", "play tennis"],
          ["The shop near my house opens at nine.", "The shop near my house", "opens at nine"],
          ["We are students.", "We", "are students"],
        ],
        "Cover the last two columns and split the sentences yourself.",
      ),
      AU(
        "Listen: the two halves",
        "My brother drinks tea in the morning. Subject: my brother. Predicate: drinks tea in the morning. The cat sleeps. Subject: the cat. Predicate: sleeps. Say the halves with me.",
        0.85,
      ),
      AU(
        "Listen: one line, two halves",
        "The students write sentences at school. We take the bus to work. My little sister plays in the garden. Draw the line in your head after the doer.",
        0.9,
      ),
      EXD(
        "Sentences split across your day",
        [
          { english: "My brother drinks tea in the morning.", note: "My brother | drinks tea in the morning. Subject | predicate.", domain: "everyday" },
          { english: "The students write sentences at school.", note: "The students | write sentences at school — the predicate is six words long.", domain: "education" },
          { english: "My grandmother makes bread on Sundays.", note: "My grandmother | makes bread on Sundays. The time lives inside the predicate.", domain: "food" },
          { english: "The shop opens at nine.", note: "The shop | opens at nine. Short predicate, whole idea.", domain: "shopping" },
          { english: "We take the bus to work.", note: "We | take the bus to work. A pronoun subject takes half a second.", domain: "travel" },
          { english: "My little sister plays in the garden.", note: "My little sister — all three words — | plays in the garden.", domain: "home" },
          { english: "Sara sends a message to her friend.", note: "Sara | sends a message to her friend. One doer, one long predicate.", domain: "technology" },
          { english: "The boys play cricket after school.", note: "The boys | play cricket after school. Who? and what do they do?", domain: "sport" },
          { english: "The baby sleeps.", note: "The baby | sleeps. Two words, two halves — the smallest full split.", domain: "family" },
        ],
        "Nine sentences, nine places. One line after the doer, and every sentence opens up.",
      ),
      US(
        [
          {
            situation: "Checking your homework",
            example: "“Draw one line between the subject and the predicate.”",
            note: "Teachers ask for the split to see if you truly understand the sentence.",
          },
          {
            situation: "Reading with a young cousin",
            example: "“Who is this sentence about? The lion. What does the lion do? It sleeps.”",
            note: "The two halves turn reading into a question game.",
          },
          {
            situation: "Writing a message to a friend",
            example: "“I am at the shop. I buy bread and milk.”",
            note: "Every sentence you write has the two halves. Check them before you send.",
          },
          {
            situation: "Learning a new word",
            example: "New word: bird. Build: “Birds fly.”",
            note: "A new word starts working the moment it fills one of the halves.",
          },
          {
            situation: "Translating in your head",
            example: "Your language says: “I rice eat.” Rebuild it in English: “I eat rice.”",
            note: "Both languages have the two halves. Only the order inside the predicate changes.",
          },
        ],
        "Where you split sentences",
        "Once you see the two halves, you can check any sentence you read or write.",
      ),
      DL(
        "The line in the notebook",
        "Bilal looks at Ali's English notebook and sees lines drawn through the sentences.",
        [
          ["Bilal", "What is this line in the middle of your sentence?"],
          ["Ali", "It is the split. My teacher taught us today."],
          ["Bilal", "Show me. Take this one: “My mother cooks rice.”"],
          ["Ali", "My mother | cooks rice. The line goes after the doer."],
          ["Bilal", "So “My mother” is the subject?"],
          ["Ali", "Yes. And “cooks rice” is the predicate. It tells what she does."],
          ["Bilal", "My turn. “The dog runs in the garden.”"],
          ["Ali", "The dog | runs in the garden. Take the whole right half."],
          ["Bilal", "The predicate is long — four words!"],
          ["Ali", "It can be longer. The predicate runs to the full stop."],
        ],
      ),
      CMP(
        "The subject half vs the predicate half",
        ["Subject (the left half)", "Predicate (the right half)"],
        [
          ["The question it answers", "Who or what is the sentence about?", "What does the subject do — or what is it?"],
          ["What it contains", "A naming word or pronoun, with its describing words", "The verb and everything after it"],
          ["Where it sits", "Before the line", "After the line, up to the end mark"],
          ["Example", "“My little sister”", "“plays in the garden”"],
        ],
        {
          intro: "Beginners often stop at the verb and call that the predicate. The verb is only the start of the right half.",
          verdict: "The subject is who. The predicate is everything said about them — the verb plus all the rest.",
        },
      ),
      MS(
        [
          [
            "In “The cat sleeps on the bed”, the subject is sleeps.",
            "In “The cat sleeps on the bed”, the subject is the cat.",
            "Sleeps is the verb — the action. The subject is who does it: the cat.",
          ],
          [
            "The predicate of “My father works at night” is works.",
            "The predicate of “My father works at night” is works at night.",
            "The predicate is the verb AND everything after it — the whole right half.",
          ],
          [
            "My sister she reads books.",
            "My sister reads books.",
            "The subject appears once. A pronoun cannot repeat the same doer in the same sentence.",
          ],
          [
            "“Plays football every day.” is a complete sentence.",
            "“Plays football every day.” is a fragment — it has no subject.",
            "Ask: who plays? There is no answer. Add a doer and the halves are complete.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "The line moves",
        "The subject is not always one word. “The shop near my house opens at nine.” has a subject of five words. Ask the question, take the whole answer, and draw the line after it — never in the middle of the subject.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Every sentence has two halves. The subject tells us who or what the sentence is about. The predicate tells us what the subject does. “My mother cooks rice.” splits into “my mother” and “cooks rice”. The subject can be long: “The shop near my house” is one subject. The predicate is everything after it. Draw a line between the two halves and the sentence opens up like a book.",
          task: "Read the text two times. Then split “My sister reads books at night.” into its two halves.",
        },
        writing: {
          task: "Copy these sentences and draw one line between the subject and the predicate: “The cat sleeps on my bed.” — “My father and I drink tea.” — “The shops open at nine.”",
          guide: ["The cat | sleeps on my bed.", "My father and I | ___", "The shops | ___"],
          model: "The cat | sleeps on my bed. · My father and I | drink tea. · The shops | open at nine.",
        },
        listening: {
          script: "My brother drinks tea in the morning. The students write sentences at school. We take the bus to work.",
          task: "Listen and say the subject of each sentence.",
        },
        speaking: {
          task: "Say three sentences about your family. After each one, say the two halves: subject first, predicate second.",
          frames: ["My ___ | ___ every day.", "My ___ and I | ___ together.", "The ___ | ___ at ___."],
          checklist: [
            "I said the subject first every time.",
            "I took the whole predicate, not only the verb.",
          ],
        },
      }),
      LSP(
        [
          gls("A sentence has a subject and a predicate."),
          gls("The predicate tells us what the subject does."),
          gls("The subject tells us who does the action."),
          gls("subject"),
          gls("predicate"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "A sentence has a subject and a predicate — two halves, one line between them.",
        "The subject answers who? or what? before the verb. Take the whole phrase.",
        "The predicate is the verb and everything after it. It tells us what the subject does or is.",
        "A long subject stays whole: “The shop near my house” is one subject.",
        "A group with no subject is still a fragment, however long it looks.",
      ]),
      RV(
        [
          {
            question: "The subject tells us…",
            options: ["who does the action", "what the action does", "where the action happens"],
            correctIndex: 0,
            explanation: "The subject names the doer — you learned to find it with the question who?",
            from: "Chapter 08 · Lesson 3",
          },
          {
            question: "Every sentence needs…",
            options: ["a question mark", "a verb", "a describing word"],
            correctIndex: 1,
            explanation: "Without a verb the idea is broken — that is the sentence rule.",
            from: "Chapter 08 · Lesson 1",
          },
          {
            question: "Action words are called…",
            options: ["nouns", "adjectives", "verbs"],
            correctIndex: 2,
            explanation: "Action words are verbs: run, eat, read, sleep.",
            from: "Chapter 07 · Lesson 3",
          },
          {
            question: "A group of words with no verb is called a…",
            options: ["fragment", "pattern", "predicate"],
            correctIndex: 0,
            explanation: "A fragment looks like a sentence but the idea never finishes.",
            from: "Chapter 08 · Lesson 2",
          },
        ],
        { title: "Look back — check your base", intro: "Four quick questions from earlier chapters before you go on." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "In “My brother drinks tea in the morning”, what is the predicate?",
            [
              ["a", "My brother"],
              ["b", "drinks tea in the morning"],
              ["c", "tea in the morning"],
            ],
            "b",
            fb(
              "drinks tea in the morning",
              "Draw the line after the doer. Everything on the right — the verb and all the rest — is the predicate.",
              "“My brother” is the subject. “Tea in the morning” is only part of the right half.",
            ),
            { hints: ["Draw the line after the doer. Take everything on the right of the line."] },
          ),
          FB(
            "Complete the rule.",
            "The ___ tells us what the subject does.",
            ["predicate"],
            fbx(
              "predicate",
              "This half begins with the verb and runs to the end of the sentence.",
              "The subject names the doer; the other half says what the doer does.",
              { english: "The cat | sleeps on the bed.", translation: "Subject: the cat. Predicate: sleeps on the bed." },
            ),
            { hints: ["This half begins with the verb and runs all the way to the full stop."] },
          ),
          MATCH(
            "Match each subject to a predicate. Then say the three full sentences.",
            [
              ["s1", "The cat"],
              ["s2", "My mother"],
              ["s3", "The students"],
            ],
            [
              ["p1", "cooks rice in the kitchen"],
              ["p2", "sleeps on my bed"],
              ["p3", "write sentences at school"],
            ],
            [
              ["s1", "p2"],
              ["s2", "p1"],
              ["s3", "p3"],
            ],
            fb(
              "The cat sleeps on my bed. · My mother cooks rice in the kitchen. · The students write sentences at school.",
              "Left half + right half = one complete sentence. Every match keeps the subject first.",
              "A predicate without its subject is only half an idea.",
            ),
            { skill: "grammar", hints: ["Ask two questions: who? and what do they do? Cats sleep; mothers cook; students write."] },
          ),
          LIS(
            "Listen and answer.",
            "My sister reads books at night.",
            "What is the subject of the sentence?",
            ["My sister", "my sister", "sister"],
            fb(
              "My sister",
              "Ask: who reads? My sister — the doer on the left of the line.",
              "“Reads books at night” is the predicate; it says what she does.",
            ),
            { hints: ["Ask: who reads? The answer is the doer on the left of the line."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          RD(
            "Read and find the parts.",
            "A day at home",
            "My father works in a small shop. He opens the shop at eight. My mother cooks rice for dinner. We eat together in the kitchen.",
            "Which word is the verb of the last sentence?",
            [
              ["a", "eat"],
              ["b", "kitchen"],
              ["c", "together"],
            ],
            "a",
            fb(
              "eat",
              "The last sentence is “We eat together in the kitchen.” The action word is eat. We is the subject; everything after it is the predicate.",
              "Kitchen is a naming word and together tells us how — neither is the action.",
            ),
            { skill: "reading" },
          ),
          REORD(
            "Put the words in the correct order.",
            "My mother cooks rice in the kitchen.",
            fb(
              "My mother cooks rice in the kitchen",
              "Subject first, then the verb, then the object. The place words come last, inside the predicate.",
              "The doer always stands before the action word.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "My sister she reads books at night.",
            ["My sister reads books at night."],
            fb(
              "My sister reads books at night.",
              "The subject appears once. My sister already names the doer, so she has no job here.",
              "A pronoun cannot repeat the same subject in the same sentence.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "The students read books at school.",
            ["The students read books at school."],
            fb(
              "The students read books at school.",
              "The students | read books at school. Subject, then predicate — in that order.",
              "The subject comes first, and the predicate runs to the full stop.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Split and label",
      instructions:
        "Write four sentences about your day. Draw one vertical line between the subject and the predicate in each. Then label the halves: S and P.",
      minWords: 12,
      maxWords: 50,
    },
    homework: [
      "Split three sentences from a page you read today. Say the two halves aloud.",
      "Write two new predicates for the subject “My friend”. Try one short and one long.",
      "Find one sentence with a very long subject and copy it. Where does the line go?",
    ],
  },

  // =========================================================================
  // Lesson 2 — Verbs and Objects
  // =========================================================================
  {
    slug: "ch-09-l-02",
    minutes: 25,
    description:
      "Some verbs act on something; others stand alone. Meet the direct object, the what?/who? test, and the verbs that need a receiver.",
    outcomes: [
      "Find the direct object of a verb with the what? or who? test",
      "Name common verbs that need objects and verbs that stand alone",
      "Say why a place phrase is not an object",
      "Write sentences with and without objects",
    ],
    blocks: [
      LI(
        "You know the three boxes of English order: subject, verb, object. Now you study the third box closely. Some verbs must act on something. Some verbs are complete alone. In this lesson you learn to test every verb with two small questions.",
        [
          "You know the SVO order of English statements (Chapter 08 · Lesson 5).",
          "You can find the verb of any sentence (Chapter 08 · Lesson 4).",
          "You can split a sentence into subject and predicate (Lesson 1).",
        ],
      ),
      vocGlossary("Object words for this lesson", [
        { word: "object", partOfSpeech: "noun", definition: "The thing or person that receives the action of the verb." },
        { word: "direct object", partOfSpeech: "noun", definition: "The direct answer to verb + what? or verb + who?" },
        { word: "transitive verb", partOfSpeech: "noun", definition: "A verb that acts on an object; it needs a receiver." },
        { word: "verb", partOfSpeech: "noun", definition: "The action or being word of the sentence." },
        { word: "noun", partOfSpeech: "noun", definition: "The name of a person, place, animal or thing." },
      ]),
      H("Receiving the action"),
      T(
        "Some verbs push their action onto a thing. “She reads a book.” — the book receives the reading. Other verbs are complete by themselves. “The baby sleeps.” needs nothing more. The verb decides. Ask it two small questions: what? or who?",
      ),
      {
        type: "definition",
        term: "direct object",
        partOfSpeech: "noun",
        definition:
          "The direct object is the thing or person that receives the action of the verb. To find it, ask the verb: what? or who?",
        example: {
          english: "She calls her sister.",
          translation: "Calls who? Her sister — the receiver, so her sister is the direct object.",
        },
      },
      ST(
        "Find the object in three steps",
        [
          {
            title: "Step 1 — Find the verb",
            text: "The object belongs to the verb. Find the action word first.",
            examples: [
              { english: "She calls her sister. → verb: calls", note: "The receiver hangs on the action word." },
            ],
          },
          {
            title: "Step 2 — Ask: what? or who?",
            text: "Put the question right after the verb. The answer, if there is one, is the object.",
            examples: [
              { english: "calls who? → her sister", note: "People can receive actions too." },
            ],
          },
          {
            title: "Step 3 — Check for no answer",
            text: "No answer? Then the verb stands alone. The sentence is complete without an object.",
            examples: [
              { english: "The baby sleeps. → sleeps what? No answer.", note: "No object — and none needed." },
            ],
          },
        ],
      ),
      GR(
        "The object rule",
        "The direct object receives the action of the verb. To find it, ask the verb: what? or who? Verbs that need an object are transitive verbs. Verbs that stand alone need no object.",
        [
          { english: "She calls her sister. → calls who? her sister.", translation: "A person can be the object." },
          { english: "I drink milk. → drink what? milk.", translation: "A thing can be the object." },
          { english: "The baby sleeps. → sleeps what? No answer.", translation: "The verb is complete alone." },
        ],
        [
          "“I run in the park.” has no object. “In the park” answers where, not what. Place phrases are not objects.",
        ],
      ),
      TB(
        "Two kinds of verb",
        ["Kind of verb", "Needs an object?", "Examples"],
        [
          ["Transitive verbs — act on something", "Yes — the sentence needs a receiver", "read, drink, eat, want, open, call, like, watch"],
          ["Verbs that stand alone", "No — the verb is complete by itself", "sleep, run, arrive, smile, sit, come, go"],
          ["Verbs with two faces", "Both ways work", "I read. / I read books. · She sings. / She sings a song."],
        ],
        "The dictionary cannot always tell you — ask the verb the question.",
      ),
      AU(
        "Listen: with and without objects",
        "She reads a book. Reads what? A book. She calls her sister. Calls who? Her sister. The baby sleeps. Sleeps what? Nothing. The verb is complete. Say the questions with me.",
        0.85,
      ),
      AU(
        "Listen: receivers at work",
        "I drink milk. He wants a new phone. The bus arrives at eight. We watch television in the evening.",
        0.9,
      ),
      EXD(
        "Objects across your day",
        [
          { english: "I drink milk at breakfast.", note: "Drink what? Milk — the object sits right after the verb.", domain: "food" },
          { english: "The teacher opens the window.", note: "Opens what? The window. Even a command-like verb takes a receiver.", domain: "education" },
          { english: "She calls her sister every night.", note: "Calls who? Her sister. People can be objects too.", domain: "social" },
          { english: "We watch television in the evening.", note: "Watch what? Television. The time phrase rides after the object.", domain: "technology" },
          { english: "He wants a new phone.", note: "Wants what? A new phone — want always says what.", domain: "shopping" },
          { english: "The bus arrives at eight.", note: "Arrives what? No answer. Arrives is complete alone.", domain: "travel" },
          { english: "They play cricket after school.", note: "Play what? Cricket. The game receives the playing.", domain: "sport" },
          { english: "The baby smiles at my mother.", note: "Smiles what? No answer. “At my mother” is not an object — it tells where the smile goes.", domain: "family" },
          { english: "I read before bed.", note: "Read what? Nothing here. Read is one of the two-faced verbs.", domain: "everyday" },
        ],
        "Nine sentences. Ask the verb what? or who? — and the objects announce themselves.",
      ),
      US(
        [
          {
            situation: "A shopping list",
            example: "“We need eggs, bread and milk.”",
            note: "Need acts on every word after it — a whole list of objects.",
          },
          {
            situation: "Ordering at a café",
            example: "“I want rice. She wants tea.”",
            note: "Want always says what. The waiter waits for the object.",
          },
          {
            situation: "A phone call home",
            example: "“I call my grandmother every week.”",
            note: "Ask: call who? My grandmother — even a person can be an object.",
          },
          {
            situation: "Classroom instructions",
            example: "“Open your books. Close the door.”",
            note: "Commands carry objects too. The hidden subject is you.",
          },
          {
            situation: "Talking about sport",
            example: "“They play cricket. We watch the game.”",
            note: "Play and watch both act on things — two objects, one conversation.",
          },
        ],
        "Where objects live",
        "Every time you say what you want, need or like, an object follows the verb.",
      ),
      DL(
        "In the kitchen",
        "Ali helps his mother cook dinner. They play the object game while they work.",
        [
          ["Mother", "Ali, we cook dinner together. Read the list to me."],
          ["Ali", "We need rice, eggs and milk."],
          ["Mother", "Good. Now wash the vegetables. What does “wash” act on?"],
          ["Ali", "The vegetables. Wash what? The vegetables."],
          ["Mother", "Right. I boil the water, and you cut the onions."],
          ["Ali", "Cut what? The onions. My eyes are red!"],
          ["Mother", "Poor Ali. Now find the object: “The baby drinks milk.”"],
          ["Ali", "Drinks what? Milk. The object game is easy now."],
          ["Mother", "Then serve the food. Dinner is ready!"],
        ],
      ),
      CMP(
        "A true object vs a place phrase",
        ["A true object", "A place or time phrase"],
        [
          ["The question", "Verb + what? or verb + who?", "Where? or when?"],
          ["What it does", "Receives the action", "Tells where or when the action happens"],
          ["Example", "“She reads a book.” — a book", "“She reads in the room.” — in the room"],
          ["The test", "“Reads what?” — a book. The question works.", "“Reads what? in the room” — nonsense. It answers where."],
        ],
        {
          intro: "Beginners often call every word after the verb an object. Ask the question first.",
          verdict: "Objects answer what? or who?. Places answer where?, times answer when?. Only the first group are objects.",
        },
      ),
      MS(
        [
          [
            "I like very much football.",
            "I like football very much.",
            "The object sits right after the verb. Very much moves to the end of the sentence.",
          ],
          [
            "I go school.",
            "I go to school.",
            "Go takes to before its place. School answers where, not what — it is not an object here.",
          ],
          [
            "He wants.",
            "He wants a new phone.",
            "Want is a transitive verb. It must say what is wanted, or the sentence hangs.",
          ],
          [
            "I listen music.",
            "I listen to music.",
            "Listen needs the small word to. Say what you listen to.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Verbs with two faces",
        "Some verbs work both ways. “I read.” is complete. “I read books.” is also complete. Eat, read, play and sing all have two faces. Ask the question: is there a receiver after the verb? Then you know which face you are looking at.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Some verbs act on an object. “She reads a book.” — the book receives the reading. Ask the verb: what? or who? The answer is the direct object. Some verbs stand alone: “The baby sleeps.” — sleeps what? There is no answer, and none is needed. Watch out for place words: “I run in the park.” has no object. “In the park” answers where, not what.",
          task: "Read the text two times. Then find the object in “He wants a new phone.”",
        },
        writing: {
          task: "Finish each sentence with an object from this box: milk · cricket · the window. “I drink ___.” — “We play ___.” — “Please open ___.”",
          guide: ["I drink ___.", "We play ___.", "Please open ___."],
          model: "I drink milk. · We play cricket. · Please open the window.",
        },
        listening: {
          script: "I drink milk. We play cricket. Please open the window. The baby sleeps.",
          task: "Listen and count the sentences that have an object.",
        },
        speaking: {
          task: "Look around your kitchen. Say three sentences: what do you open, close and wash?",
          frames: ["I open the ___.", "I close the ___.", "I wash the ___."],
          checklist: [
            "Every sentence had a verb and an object.",
            "I can ask the verb: what?",
          ],
        },
      }),
      LSP(
        [
          gls("Some verbs act on an object."),
          gls("English word order is subject, verb, object."),
          gls("object"),
          gls("direct object"),
          gls("transitive verb"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "The direct object receives the action. Ask the verb: what? or who?",
        "Transitive verbs need an object: read, drink, want, open, call, like, watch.",
        "Some verbs stand alone: sleep, run, arrive, smile. No object needed.",
        "A place phrase is not an object — it answers where, not what.",
        "Verbs like eat, read, play and sing have two faces: with and without an object.",
      ]),
      RV(
        [
          {
            question: "English statements follow the order…",
            options: ["subject, verb, object", "object, verb, subject", "verb, subject, object"],
            correctIndex: 0,
            explanation: "The three boxes keep their places: SVO.",
            from: "Chapter 08 · Lesson 5",
          },
          {
            question: "A sentence has a subject and a…",
            options: ["complement", "predicate", "question mark"],
            correctIndex: 1,
            explanation: "The predicate is the verb and everything after it.",
            from: "Chapter 09 · Lesson 1",
          },
          {
            question: "In “The cat eats fish”, which word receives the action?",
            options: ["The cat", "eats", "fish"],
            correctIndex: 2,
            explanation: "Eats what? Fish. The receiver sits in the third box.",
            from: "Chapter 08 · Lesson 5",
          },
          {
            question: "The being verbs are…",
            options: ["run, eat, play", "is, am, are", "big, cold, hot"],
            correctIndex: 1,
            explanation: "Is, am and are show a state — they are full verbs.",
            from: "Chapter 08 · Lesson 4",
          },
        ],
        { title: "Look back — check your base" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "In “She calls her sister”, which words answer calls WHO?",
            [
              ["a", "She"],
              ["b", "her sister"],
              ["c", "calls"],
            ],
            "b",
            fb(
              "her sister",
              "Ask the verb: calls who? Her sister receives the action, so it is the direct object.",
              "She is the subject; calls is the verb itself.",
            ),
            { hints: ["Say the action word, then ask the question. The answer receives the action."] },
          ),
          MCQ(
            "Which verb NEEDS an object after it?",
            [
              ["a", "sleep"],
              ["b", "want"],
              ["c", "arrive"],
            ],
            "b",
            fbx(
              "want",
              "Want must say what is wanted: “I want water.” Sleep and arrive are complete alone.",
              "Try stopping after “I sleep” and “I arrive” — both sound finished.",
              { english: "He wants a new phone.", translation: "Wants what? A new phone — the receiver is built in." },
            ),
            { hints: ["Try to stop right after the verb: “I …” — your ears wait for more with only one of the three."] },
          ),
          MATCH(
            "Match each verb to the object that fits it.",
            [
              ["d1", "drink"],
              ["d2", "open"],
              ["d3", "play"],
            ],
            [
              ["r1", "the window"],
              ["r2", "milk"],
              ["r3", "cricket"],
            ],
            [
              ["d1", "r2"],
              ["d2", "r1"],
              ["d3", "r3"],
            ],
            fb(
              "drink → milk · open → the window · play → cricket",
              "Each action word finds its receiver. Ask each verb: what?",
              "Objects belong to their verbs — windows do not drink.",
            ),
            { skill: "grammar", hints: ["Ask each action word: what? One answer is white to drink, one is made of glass, one is a game."] },
          ),
          LIS(
            "Listen and answer.",
            "The teacher opens the window.",
            "What does the teacher open?",
            ["the window", "The window", "window"],
            fb(
              "the window",
              "Opens what? The window — the naming word at the end receives the action.",
              "The teacher is the subject; opens is the verb.",
            ),
            { hints: ["Listen for the naming word at the very end. It receives the action."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — you have the test.",
        questions: [
          MCQ(
            "Which sentence has NO object?",
            [
              ["a", "The man opens the shop."],
              ["b", "The baby sleeps."],
              ["c", "I drink water."],
            ],
            "b",
            fb(
              "The baby sleeps.",
              "Ask: sleeps what? There is no answer — the verb is complete alone.",
              "Opens acts on the shop; drink acts on water. Both verbs have receivers.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Put the words in the correct order.",
            "She calls her sister every night.",
            fb(
              "She calls her sister every night",
              "Subject, verb, object — then the time phrase at the end.",
              "The receiver follows the verb directly; the time comes last.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "I listen music.",
            ["I listen to music."],
            fb(
              "I listen to music.",
              "Listen needs the small word to before the thing you hear.",
              "Music cannot sit in the object box on its own after listen.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "We watch television in the evening.",
            ["We watch television in the evening."],
            fb(
              "We watch television in the evening.",
              "Watch what? Television — the object. The time phrase closes the sentence.",
              "The object stands right after its verb.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Transitive or not?",
      instructions:
        "Write five sentences: three with an object and two without. Label the object in the first three. Use verbs from this lesson — and test each one with what? or who?",
      minWords: 15,
      maxWords: 55,
    },
    homework: [
      "Find three objects in sentences you read today. Write verb + what? under each one.",
      "Test the verbs eat and sleep: which one can stand alone? Try both ways aloud.",
      "Say five things you can see right now with “I see a …” — each thing is an object.",
    ],
  },

  // =========================================================================
  // Lesson 3 — Complements
  // =========================================================================
  {
    slug: "ch-09-l-03",
    minutes: 25,
    description:
      "After be there is no action and no object — a complement completes the meaning. Nouns say what, adjectives say how, and jobs always take a or an.",
    outcomes: [
      "Explain what a complement is",
      "Complete be sentences with nouns and adjectives",
      "Tell an object apart from a complement",
      "Use a or an with job words after be",
    ],
    blocks: [
      LI(
        "You know the being verbs: am, is and are. After them, a special word waits. It is not an object, because be shows no action. It is the complement — the word that completes the meaning. In this lesson you meet the two kinds: nouns and adjectives.",
        [
          "You know that am, is and are are the being verb be (Chapter 08 · Lesson 4).",
          "You know describing words — adjectives (Chapter 07 · Lesson 4).",
          "You can find the object of an action verb (Lesson 2).",
        ],
      ),
      vocGlossary("Complement words for this lesson", [
        { word: "complement", partOfSpeech: "noun", definition: "The word after be that completes the meaning: a noun or an adjective." },
        { word: "being verb", partOfSpeech: "noun", definition: "The verb be: am, is, are. It shows a state, not an action." },
        { word: "verb", partOfSpeech: "noun", definition: "The action or being word of the sentence." },
        { word: "adjective", partOfSpeech: "noun", definition: "A word that tells us how someone or something is." },
        { word: "noun", partOfSpeech: "noun", definition: "The name of a person, place, animal or thing." },
      ]),
      H("Completing the idea"),
      T(
        "The being verbs show no action. So nothing after be can receive anything. Instead, a complement completes the meaning. A noun says what the subject is. An adjective says how the subject is. “She is a doctor.” and “She is kind.” both need their last word.",
      ),
      {
        type: "definition",
        term: "complement",
        partOfSpeech: "noun",
        definition:
          "The complement is the word after the being verb that completes the meaning. It is a noun (what the subject is) or an adjective (how the subject is).",
        example: {
          english: "The milk is cold.",
          translation: "Cold completes the idea — without it, “The milk is…” hangs in the air.",
        },
      },
      ST(
        "Complete a be sentence in three steps",
        [
          {
            title: "Step 1 — Check the verb",
            text: "Is the verb am, is or are? Then you need a complement, not an object. Be shows no action.",
            examples: [
              { english: "My mother is ___.", note: "The being verb opens a slot that must be filled." },
            ],
          },
          {
            title: "Step 2 — Ask: what? or how?",
            text: "What is she? A teacher. How is she? Kind. Choose a noun or an adjective.",
            examples: [
              { english: "My mother is a teacher. / My mother is kind.", note: "Noun complement says what; adjective complement says how." },
            ],
          },
          {
            title: "Step 3 — Say the whole sentence",
            text: "Read it aloud. The complement finishes the idea. Without it, the sentence hangs.",
            examples: [
              { english: "My mother is… → My mother is a teacher.", note: "Your ears hear the missing piece." },
            ],
          },
        ],
      ),
      GR(
        "The be + complement rule",
        "Subject + be + complement. The complement is a noun (what the subject is) or an adjective (how the subject is). Be shows no action, so it never takes an object.",
        [
          { english: "I am a student.", translation: "Noun complement: what am I?" },
          { english: "The milk is cold.", translation: "Adjective complement: how is it?" },
          { english: "They are teachers.", translation: "A plural noun complement works the same way." },
        ],
        [
          "Job words need a or an: “She is a teacher.” The full article rules arrive in Chapter 10.",
        ],
      ),
      TB(
        "Two kinds of complement",
        ["Kind", "Question", "Examples"],
        [
          ["Noun complement", "What is the subject?", "a student · a teacher · a big city"],
          ["Adjective complement", "How is the subject?", "cold · happy · busy · beautiful"],
          ["Both together", "What and how?", "She is a kind teacher."],
        ],
        "One kind says what it is; the other says how it is.",
      ),
      AU(
        "Listen: be + complement",
        "I am a student. What am I? A student. The milk is cold. How is it? Cold. Say the complements with me.",
        0.85,
      ),
      AU(
        "Listen: states of the day",
        "My mother is a teacher. The shops are busy today. My grandfather is old but happy. We are tired after the match.",
        0.9,
      ),
      EXD(
        "Complements across your day",
        [
          { english: "I am a student.", note: "Noun complement: what am I? A student.", domain: "education" },
          { english: "My mother is a teacher.", note: "Jobs are noun complements — with a before the job word.", domain: "work" },
          { english: "The milk is cold.", note: "Adjective complement: how is the milk? Cold.", domain: "food" },
          { english: "The shops are busy today.", note: "Plural subject, plural be — the complement still completes.", domain: "shopping" },
          { english: "My grandfather is old but happy.", note: "Two adjective complements joined by but.", domain: "family" },
          { english: "My room is small and clean.", note: "Two adjectives joined by and — both describe the room.", domain: "home" },
          { english: "The garden is beautiful in spring.", note: "The season phrase rides after the complement.", domain: "nature" },
          { english: "My legs are tired after the match.", note: "How are they? Tired. Sport leaves its adjectives in your legs.", domain: "sport" },
          { english: "My phone is new.", note: "Things take complements too: how is the phone? New.", domain: "technology" },
        ],
        "Nine states, nine places. After be, the last word always completes the idea.",
      ),
      US(
        [
          {
            situation: "Introducing people",
            example: "“This is Sara. She is a doctor.”",
            note: "The noun complement gives the job in one word.",
          },
          {
            situation: "At the doctor",
            example: "“The doctor is busy. I am tired.”",
            note: "Feelings and states ride on being verbs.",
          },
          {
            situation: "Describing your city",
            example: "“My city is big. The streets are busy.”",
            note: "Adjective complements paint the picture.",
          },
          {
            situation: "First day at a new school",
            example: "“I am a new student. My teacher is kind.”",
            note: "Two complements, two facts — enough for a whole introduction.",
          },
          {
            situation: "Weather talk",
            example: "“It is hot today. The sky is blue.”",
            note: "Small talk is built on be plus a describing word.",
          },
        ],
        "Where complements live",
        "Every time you say what something is or how it is, a complement completes your sentence.",
      ),
      DL(
        "The photo and the jobs",
        "Sara visits her friend Hina. They look at a family photo on the wall.",
        [
          ["Sara", "Is this your family? Tell me about them."],
          ["Hina", "Yes! My father is a taxi driver. He is very busy."],
          ["Sara", "And your mother? What is she?"],
          ["Hina", "My mother is a teacher. She is kind and patient."],
          ["Sara", "Is this tall girl your sister?"],
          ["Hina", "Yes. She is a student. She is happy at her new school."],
          ["Sara", "And the small one with the red ball?"],
          ["Hina", "My brother. He is five. The ball is his favourite thing!"],
          ["Sara", "Your family is big and happy."],
        ],
      ),
      CMP(
        "Object vs complement",
        ["Object (after an action verb)", "Complement (after be)"],
        [
          ["The verb before it", "An action verb: read, eat, call", "A being verb: am, is, are"],
          ["The question", "Verb + what? or verb + who?", "What? or How?"],
          ["What it does", "Receives the action", "Completes the meaning — describes or renames the subject"],
          ["Example", "“She reads a book.” — a book", "“She is a teacher.” · “She is happy.”"],
          ["The flip test", "“A book reads her” — nonsense. A book is an object.", "“Happy is she” — poetic, but the meaning survives."],
        ],
        {
          intro: "Both sit at the end of the sentence, so beginners mix them up. The verb decides which one you have.",
          verdict: "Action verbs act on objects. Be never acts — after be, the word at the end is a complement.",
        },
      ),
      MS(
        [
          [
            "She is teacher.",
            "She is a teacher.",
            "Job words after be need a or an. Teacher starts with a consonant sound, so it takes a.",
          ],
          [
            "The milk cold.",
            "The milk is cold.",
            "Adjective complements need the being verb. Without is, the sentence is a fragment.",
          ],
          [
            "I am agree.",
            "I agree.",
            "Agree is an action verb, not a describing word. Be has no job here.",
          ],
          [
            "He is plays football.",
            "He plays football.",
            "One verb is enough. Be never stands before an action verb in a simple sentence.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "The flip test",
        "Try turning the sentence around. “She reads a book.” — “A book reads she” is nonsense: book is an object. “She is happy.” — “Happy is she” sounds like poetry, but the meaning survives: happy is a complement. Objects break when you flip them. Complements do not.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "After the being verb, a sentence needs a complement. “I am a student.” — student says what I am. “The milk is cold.” — cold says how the milk is. The complement is a noun or an adjective, and it completes the meaning. Be shows no action, so there is no object after be. Remember the little word: “She is a teacher”, never “She is teacher”.",
          task: "Read the text two times. Then find the complement in “My father is busy today.”",
        },
        writing: {
          task: "Write six sentences about people you know: three with a noun complement (a job or a role) and three with an adjective complement (a feeling or a quality).",
          guide: ["My ___ is a ___.", "My ___ is ___ (adjective)."],
          model: "My father is a driver. My mother is kind.",
        },
        listening: {
          script: "I am a student. My mother is a teacher. The milk is cold. We are happy today.",
          task: "Listen and say if each complement is a noun or an adjective.",
        },
        speaking: {
          task: "Introduce two people you know. Say their job and one quality for each person.",
          frames: ["This is my ___. He is a ___.", "She is ___ (adjective)."],
          checklist: [
            "I used be + noun for each job.",
            "I used be + adjective for each quality.",
          ],
        },
      }),
      LSP(
        [
          gls("Am, is and are are the present of the verb be."),
          gls("Every sentence needs a verb."),
          gls("complement"),
          gls("being verb"),
          gls("adjective"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "After be comes a complement: the word that completes the meaning.",
        "A noun complement says what the subject is: “I am a student.”",
        "An adjective complement says how the subject is: “The milk is cold.”",
        "Be shows no action, so it never takes an object.",
        "Job words need a or an: “She is a teacher.” Full article rules come in Chapter 10.",
      ]),
      RV(
        [
          {
            question: "Am, is and are are the present of the verb…",
            options: ["do", "have", "be"],
            correctIndex: 2,
            explanation: "The being verb be has three present forms: am, is, are.",
            from: "Chapter 08 · Lesson 4",
          },
          {
            question: "Describing words tell us…",
            options: ["how someone or something is", "who does the action", "where things are"],
            correctIndex: 0,
            explanation: "Describing words — adjectives — tell us how: big, cold, happy.",
            from: "Chapter 07 · Lesson 4",
          },
          {
            question: "Ask the verb “what?” — the answer is the…",
            options: ["object", "subject", "question mark"],
            correctIndex: 0,
            explanation: "The object receives the action: verb + what?",
            from: "Chapter 09 · Lesson 2",
          },
          {
            question: "Every sentence needs a subject and a…",
            options: ["verb", "object", "pattern"],
            correctIndex: 0,
            explanation: "The verb is the second essential part of every sentence.",
            from: "Chapter 08 · Lesson 1",
          },
        ],
        { title: "Look back — check your base" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "In “She is a doctor”, what is “a doctor”?",
            [
              ["a", "the object"],
              ["b", "the complement"],
              ["c", "the subject"],
            ],
            "b",
            fb(
              "the complement",
              "The verb is be, and there is no action on a thing. “A doctor” tells us what she is — it completes the meaning.",
              "Objects only follow action verbs. The subject here is she.",
            ),
            { hints: ["Does the last part tell you what she is? Then it completes the meaning."] },
          ),
          FB(
            "Complete the rule.",
            "After be, a complement can be a noun or an ___.",
            ["adjective"],
            fbx(
              "an adjective",
              "Two kinds of complement: nouns say what, adjectives say how.",
              "Adverbs tell how an action happens — but be shows no action.",
              { english: "The milk is cold.", translation: "Cold completes the idea after be." },
            ),
            { hints: ["It is a describing word: big, cold, happy."] },
          ),
          MCQ(
            "Which sentence is correct?",
            [
              ["a", "She is teacher."],
              ["b", "She is a teacher."],
              ["c", "She is an teacher."],
            ],
            "b",
            fb(
              "She is a teacher.",
              "Job words after be need a or an. Teacher starts with a consonant sound, so it takes a.",
              "“She is teacher” misses the little word. “An teacher” breaks the sound rule.",
            ),
            { hints: ["Job words need one very small word in front. Listen to the first sound of the job word."] },
          ),
          LIS(
            "Listen and answer.",
            "My brother is a doctor.",
            "What is his job?",
            ["doctor", "a doctor"],
            fb(
              "a doctor",
              "The noun complement names the job: what is he? A doctor.",
              "“My brother” is the subject; is is the being verb.",
            ),
            { hints: ["Listen for the job word after the being verb."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — you have the test.",
        questions: [
          MCQ(
            "In “She reads a book”, what is “a book”?",
            [
              ["a", "the complement"],
              ["b", "the object"],
              ["c", "the subject"],
            ],
            "b",
            fb(
              "the object",
              "Reads is an action verb acting on a thing. Ask: reads what? A book. It receives the action.",
              "Complements only follow the being verb be.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Put the words in the correct order.",
            "My father is a busy man.",
            fb(
              "My father is a busy man",
              "Subject + be + noun complement, with the describing word before its noun.",
              "The complement follows the being verb, and the job word keeps a.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "The milk cold.",
            ["The milk is cold."],
            fb(
              "The milk is cold.",
              "Adjective complements need the being verb. Add is and the idea completes.",
              "Without is, the group of words is a fragment.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "The students are happy today.",
            ["The students are happy today."],
            fb(
              "The students are happy today.",
              "Plural subject, plural be, adjective complement: how are they? Happy.",
              "Are matches the plural subject students.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Complete the be",
      instructions:
        "Write six be sentences about people you know: three with a noun complement (jobs or roles) and three with an adjective complement (feelings or qualities). Check every job word for a or an.",
      minWords: 18,
      maxWords: 50,
    },
    homework: [
      "Write three true sentences with “I am …” about yourself — one noun and two adjectives.",
      "Find two complements in anything you read today. Say what or how for each.",
      "Ask two people about their jobs. Write: He is a … · She is a …",
    ],
  },

  // =========================================================================
  // Lesson 4 — Word Order Rules
  // =========================================================================
  {
    slug: "ch-09-l-04",
    minutes: 25,
    description:
      "The traffic rules of English: adjectives before nouns, how-often words before verbs, time and place at the ends. Learn where every word wants to sit — and fix the order beginners get wrong.",
    outcomes: [
      "Place adjectives before their nouns",
      "Place how-often words before the main verb and after be",
      "Place time and place phrases at the start or the end",
      "Fix broken word order in a sentence",
    ],
    blocks: [
      LI(
        "English words have favourite places. Describing words stand before their nouns. Words like always and never stand before the verb. Time words sit at the start or the end. In this lesson you learn these traffic rules — and you fix the word order that beginners get wrong.",
        [
          "You know the SVO order of English statements (Chapter 08 · Lesson 5).",
          "You know naming words and describing words (Chapter 07).",
          "You know the words for your day: food, home, school, work (Chapter 06).",
        ],
      ),
      vocGlossary("Word-order words for this lesson", [
        { word: "word order", partOfSpeech: "noun", definition: "The fixed position of words in a sentence." },
        { word: "adjective", partOfSpeech: "noun", definition: "A describing word. It stands before its noun." },
        { word: "noun", partOfSpeech: "noun", definition: "The name of a person, place, animal or thing." },
        { word: "verb", partOfSpeech: "noun", definition: "The action word. How-often words stand before it." },
        { word: "sentence", partOfSpeech: "noun", definition: "A group of words that expresses one complete idea." },
      ]),
      H("The traffic rules of English"),
      T(
        "English keeps its words in fixed places. A describing word stands before its noun. A how-often word stands before the verb. Time and place phrases stand at the ends. Learn the places once. They never change.",
      ),
      {
        type: "definition",
        term: "word order",
        partOfSpeech: "noun",
        definition:
          "Word order is the fixed position of words in a sentence. Adjectives go before nouns. How-often words go before the main verb. Time and place phrases go at the start or the end.",
        example: {
          english: "I always drink tea in the morning.",
          translation: "always before the verb · in the morning at the end — every word in its place.",
        },
      },
      ST(
        "Place each word in three steps",
        [
          {
            title: "Step 1 — Is it a describing word?",
            text: "Describing words stand before their noun, like a hat on a head.",
            examples: [
              { english: "a blue bag · cold water", note: "The adjective touches the noun it describes." },
            ],
          },
          {
            title: "Step 2 — Is it a how-often word?",
            text: "Always, usually, sometimes and never stand before the main verb. After be, they stand after it.",
            examples: [
              { english: "I always drink tea. · She is never late.", note: "Hold the verb's hand — in front. After be, just behind it." },
            ],
          },
          {
            title: "Step 3 — Is it a time or place phrase?",
            text: "They stand at the start or the end — never between the verb and its object.",
            examples: [
              { english: "On Mondays, we study English. · We study English on Mondays.", note: "Two homes for time: first place or last place." },
            ],
          },
        ],
      ),
      GR(
        "The three position rules",
        "1) Adjectives go before their nouns: a big house. 2) How-often words (always, usually, sometimes, never) go before the main verb — and after be: She is never late. 3) Time and place phrases go at the start or the end, never in the middle.",
        [
          { english: "I always drink tea.", translation: "always holds the verb's hand, in front." },
          { english: "We study English on Mondays.", translation: "The time phrase closes the sentence." },
          { english: "She is a kind teacher.", translation: "The adjective stands before its noun." },
        ],
        [
          "Two adjectives keep a fixed order of their own: “a nice big house”, not “a big nice house”. The full order arrives in Chapter 15.",
        ],
      ),
      TB(
        "Where each word sits",
        ["Word", "Position", "Example"],
        [
          ["Adjective", "before its noun", "a big garden"],
          ["How-often word", "before the main verb", "She always reads."],
          ["How-often word with be", "after am, is, are", "She is always happy."],
          ["Time phrase", "start or end of the sentence", "On Mondays, we study English."],
          ["Place phrase", "at the end, before the time", "We eat in the kitchen at nine."],
        ],
        "Say each example aloud — your ears learn positions faster than your eyes.",
      ),
      AU(
        "Listen: the rules at work",
        "I always drink tea. Always before the verb. She is never late. Never after be. We study English on Mondays. Time at the end. Say the sentences with me.",
        0.85,
      ),
      AU(
        "Listen: a day in order",
        "My father usually walks to work. They often play cricket after school. It is a small blue bag. The train is never late.",
        0.9,
      ),
      EXD(
        "Word order across your day",
        [
          { english: "I always drink tea in the morning.", note: "always before drink; the time phrase closes the sentence.", domain: "everyday" },
          { english: "She never eats meat.", note: "never holds the verb's hand: never eats.", domain: "food" },
          { english: "My little sister plays in the big garden.", note: "Two adjectives, each before its noun — little sister, big garden.", domain: "home" },
          { english: "We study English on Mondays.", note: "The time phrase sits at the end, after the object.", domain: "education" },
          { english: "The shop always opens at nine.", note: "The how-often word comes before opens, the time after it.", domain: "shopping" },
          { english: "My father usually walks to work.", note: "usually before walks; the place phrase to work at the end.", domain: "work" },
          { english: "She has a small blue phone.", note: "Size comes before colour: a small blue phone.", domain: "technology" },
          { english: "They often play cricket after school.", note: "often before play; the time phrase after the object.", domain: "sport" },
          { english: "The train is never late.", note: "With be, the how-often word comes after: is never.", domain: "travel" },
        ],
        "Nine sentences, nine places. Every word sits in its lane — and the sentence runs smoothly.",
      ),
      US(
        [
          {
            situation: "Talking about your routine",
            example: "“I always wake up at six.”",
            note: "A how-often word plus a time phrase — a full routine in one line.",
          },
          {
            situation: "Shopping with a friend",
            example: "“I want the small blue bag.”",
            note: "Two describing words before the noun: size before colour.",
          },
          {
            situation: "Making plans",
            example: "“On Mondays, we visit my grandmother.”",
            note: "A time phrase can open the sentence and set the scene.",
          },
          {
            situation: "Texting about the weekend",
            example: "“We play cricket on Fridays. Call me in the evening!”",
            note: "Time at the end keeps the message clear.",
          },
          {
            situation: "Describing a photo",
            example: "“The big dog runs. The small cat sleeps.”",
            note: "Adjective before noun, action after — the order tells the story.",
          },
        ],
        "Where the rules work",
        "Every sentence you build today follows the same three traffic rules.",
      ),
      DL(
        "Always, usually, never",
        "Omar and Hina talk about their days at the school gate.",
        [
          ["Omar", "Hina, tell me about your day. What do you do first?"],
          ["Hina", "I always wake up at six. I usually drink tea with my mother."],
          ["Omar", "Tea in the morning? I never drink tea. I drink milk."],
          ["Hina", "Then I go to school. We study English on Mondays."],
          ["Omar", "We study English every day. Our teacher is never angry."],
          ["Hina", "You are a good student, Omar!"],
          ["Omar", "In the evening, I usually play cricket with my brothers."],
          ["Hina", "Not me. I always help my mother in the kitchen."],
          ["Omar", "And on Sundays?"],
          ["Hina", "On Sundays, we visit my grandmother. She makes good bread."],
        ],
      ),
      CMP(
        "Adjective position vs how-often-word position",
        ["Describing word + noun (adjective)", "How-often word + verb"],
        [
          ["What it does", "Tells us more about a thing", "Tells us how often the action happens"],
          ["Where it sits", "Before its noun", "Before the main verb — after be"],
          ["Example", "“a fast car” · “I drink cold water.”", "“I always run.” · “She is never late.”"],
          ["A wrong version", "“a car fast” — the noun is left alone", "“I run always.” — the verb is left alone"],
          ["How to check", "Is it next to a naming word?", "Is it next to the action word?"],
        ],
        {
          intro: "Both kinds of word describe something. What they describe decides where they stand.",
          verdict: "Adjectives hold the noun's hand and stand in front of it. How-often words hold the verb's hand — in front of it, or just after be.",
        },
      ),
      MS(
        [
          [
            "I drink always coffee.",
            "I always drink coffee.",
            "How-often words stand before the main verb, not after it. Always holds the verb's hand.",
          ],
          [
            "She eats in the kitchen rice.",
            "She eats rice in the kitchen.",
            "The object sits right after the verb. Place words come after the object.",
          ],
          [
            "We on Mondays study English.",
            "We study English on Mondays.",
            "Time phrases live at the start or the end — never between the subject and its verb.",
          ],
          [
            "It is a house big.",
            "It is a big house.",
            "Describing words stand before their noun. This is the reverse of Urdu and Hindi order — train the new habit.",
          ],
          [
            "She always is happy.",
            "She is always happy.",
            "With be, the how-often word comes after the verb: is always, are never.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Why English fixes the order",
        "In Urdu and Hindi, small words can move and the meaning stays. English uses position to show meaning. The noun holds its describing word in front. The verb holds its how-often word in front. Learn the positions once — they never change.",
      ),
      W(
        "Two describing words in a row",
        "When two describing words share one noun, opinion comes before size: “a nice big house”, not “a big nice house”. The full order arrives in Chapter 15. For now: keep the opinion word first and both words before the noun.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "English keeps its words in fixed places. Adjectives go before nouns: “a big house”, never “a house big”. How-often words go before the main verb: “I always drink tea.” With be, they come after: “She is never late.” Time phrases sit at the start or the end: “On Mondays, we study English.” or “We study English on Mondays.” — never in the middle, between the verb and its object.",
          task: "Read the text two times. Then fix this sentence: “I drink always coffee in the morning.”",
        },
        writing: {
          task: "Write three true sentences about your week with always, usually and never. Check the position of each how-often word.",
          guide: ["I always ___ at six.", "I usually ___ in the evening.", "I never ___."],
          model: "I always drink tea at six. I usually play in the evening. I never eat meat.",
        },
        listening: {
          script: "I always drink tea in the morning. She never eats meat. We study English on Mondays.",
          task: "Listen and say where the how-often word sits in each sentence.",
        },
        speaking: {
          task: "Describe two things you own — a bag and a phone — with two describing words each, in the right order.",
          frames: ["I have a ___ ___.", "My ___ is ___ and ___."],
          checklist: [
            "My describing words stand before the noun.",
            "My how-often words stand before the verb.",
          ],
        },
      }),
      LSP(
        [
          gls("Adjectives go before nouns in English."),
          gls("English word order is subject, verb, object."),
          gls("adjective"),
          gls("word order"),
          gls("noun"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Adjectives go before their nouns in English: a big house, never a house big.",
        "How-often words — always, usually, sometimes, never — go before the main verb.",
        "With be, the how-often word goes after the verb: She is always happy.",
        "Time and place phrases go at the start or the end, never in the middle.",
        "Place comes before time at the end: We eat in the kitchen at nine.",
      ]),
      RV(
        [
          {
            question: "In “The baby sleeps”, which part is the subject?",
            options: ["The baby", "sleeps", "the"],
            correctIndex: 0,
            explanation: "The subject names the doer: who sleeps? The baby.",
            from: "Chapter 09 · Lesson 1",
          },
          {
            question: "Which of these is a being verb?",
            options: ["is", "run", "eat"],
            correctIndex: 0,
            explanation: "Is shows a state. Run and eat show action.",
            from: "Chapter 08 · Lesson 4",
          },
          {
            question: "The object sits right after the…",
            options: ["subject", "verb", "full stop"],
            correctIndex: 1,
            explanation: "SVO: the receiver follows the verb directly.",
            from: "Chapter 09 · Lesson 2",
          },
          {
            question: "Describing words are called…",
            options: ["adjectives", "nouns", "pronouns"],
            correctIndex: 0,
            explanation: "Describing words are adjectives: big, new, beautiful.",
            from: "Chapter 07 · Lesson 4",
          },
        ],
        { title: "Look back — check your base" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "Which sentence puts always in the right place?",
            [
              ["a", "I drink always coffee."],
              ["b", "I always drink coffee."],
              ["c", "Always I drink coffee."],
            ],
            "b",
            fb(
              "I always drink coffee.",
              "How-often words hold the verb's hand: they stand right before the main verb.",
              "“I drink always coffee” pushes it after the verb. “Always I drink coffee” puts it before the subject.",
            ),
            { hints: ["The how-often word holds the hand of the main action word — in front of it."] },
          ),
          FB(
            "Complete the rule.",
            "Adjectives go ___ nouns in English.",
            ["before"],
            fbx(
              "before",
              "The describing word stands in front of the noun it describes.",
              "After the noun is the Urdu and Hindi habit — English sends the word in front.",
              { english: "a big garden", translation: "Big stands in front of the noun it describes." },
            ),
            { hints: ["In Urdu and Hindi the describing word often follows its noun. English sends it to the front."] },
          ),
          REORD(
            "Put the words in the correct order.",
            "She never eats meat.",
            fb(
              "She never eats meat",
              "Subject, how-often word, verb, object — never stands before eats.",
              "The how-often word never stands between the verb and its food.",
            ),
            { hints: ["First the doer, then the how-often word, then the action and its receiver."] },
          ),
          LIS(
            "Listen and answer.",
            "We study English on Mondays.",
            "When do they study English?",
            ["on Mondays", "On Mondays", "Mondays"],
            fb(
              "on Mondays",
              "The time phrase closes the sentence — its favourite home is the end.",
              "The start also works: On Mondays, we study English. The middle never does.",
            ),
            { hints: ["Listen for the day word at the very end of the sentence."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — you have the rules.",
        questions: [
          MCQ(
            "Which sentence puts the adjective in the right place?",
            [
              ["a", "It is a house big."],
              ["b", "It is a big house."],
              ["c", "It is big a house."],
            ],
            "b",
            fb(
              "It is a big house.",
              "The describing word stands directly before its noun: a big house.",
              "Both wrong versions leave the noun or push the word out of its lane.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Put the words in the correct order.",
            "I always drink tea in the morning.",
            fb(
              "I always drink tea in the morning",
              "How-often word before the verb; the time phrase closes the sentence.",
              "The describing word never sits between the verb and the object.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "She eats in the kitchen rice.",
            ["She eats rice in the kitchen."],
            fb(
              "She eats rice in the kitchen.",
              "The object sits right after the verb; the place phrase comes after the object.",
              "Rice never waits behind the kitchen — the receiver follows the verb directly.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "My father usually walks to work.",
            ["My father usually walks to work."],
            fb(
              "My father usually walks to work.",
              "Usually stands before walks; the place phrase to work closes the sentence.",
              "The how-often word always hugs the main verb.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Traffic control",
      instructions:
        "Fix the word order in these three sentences and write them correctly: “I drink always coffee.” — “She eats in the kitchen rice.” — “We on Mondays study English.” Then write two new sentences of your own and check every position.",
      minWords: 15,
      maxWords: 50,
    },
    homework: [
      "Write three sentences about your routine with always, usually and never. Check the position of each word.",
      "Look around your room. Describe five things with a describing word before each noun.",
      "Listen for time words when people speak today. Do they come at the start or at the end?",
    ],
  },

  // =========================================================================
  // Lesson 5 — Basic Sentence Patterns and Chapter Review
  // =========================================================================
  {
    slug: "ch-09-l-05",
    minutes: 30,
    description:
      "Five reusable patterns — SV, SVO, SVC, SVOO and SV + place — build most beginner English. Assemble the toolbox, then take the Chapter 09 review.",
    outcomes: [
      "Build sentences in the patterns SV, SVO, SVC and SVOO",
      "Choose the right pattern for an idea",
      "Label the parts of a pattern sentence: S, V, O, C",
      "Answer the Chapter 09 review questions",
    ],
    blocks: [
      LI(
        "You can split a sentence, test its verbs and find complements. Now the parts become machines. Five patterns build most beginner English: SV, SVO, SVC, SVOO and SV plus place. This lesson assembles your toolbox — and ends with the Chapter 09 review.",
        [
          "You can split any sentence into subject and predicate (Lesson 1).",
          "You can find objects with the what? or who? test (Lesson 2).",
          "You know the three-box SVO order (Chapter 08 · Lesson 5).",
          "You can place adjectives and time words correctly (Lesson 4).",
        ],
      ),
      vocGlossary("Pattern words for this lesson", [
        { word: "pattern", partOfSpeech: "noun", definition: "A reusable sentence recipe: SV, SVO, SVC, SVOO." },
        { word: "subject", partOfSpeech: "noun", definition: "The doer — the first box of every pattern." },
        { word: "verb", partOfSpeech: "noun", definition: "The action or being word — the second box." },
        { word: "object", partOfSpeech: "noun", definition: "The receiver of the action — after the verb." },
        { word: "complement", partOfSpeech: "noun", definition: "The word after be that completes the meaning." },
      ]),
      H("The pattern toolbox"),
      T(
        "Cooking works with recipes. Sentence-building works with patterns. A pattern has empty boxes: subject, verb, object, complement. Drop your words into the boxes and out comes a correct sentence. Five patterns cover most of beginner English.",
      ),
      {
        type: "definition",
        term: "pattern",
        partOfSpeech: "noun",
        definition:
          "A pattern is a reusable sentence recipe. Each pattern fixes the order of its boxes: subject, verb, object, complement. Fill the boxes with your own words.",
        example: {
          english: "He gives her flowers.",
          translation: "SVOO: subject + verb + person + thing — one recipe, hundreds of sentences.",
        },
      },
      ST(
        "Build a sentence from a pattern in three steps",
        [
          {
            title: "Step 1 — Choose your idea",
            text: "Start small: who does what? One doer, one action.",
            examples: [
              { english: "idea: my brother + work", note: "Any doer and any action can start." },
            ],
          },
          {
            title: "Step 2 — Choose the pattern",
            text: "Does the verb act on a thing? Is the verb be? Do you give someone something? The answer picks the pattern.",
            examples: [
              { english: "My brother sells cars. → the verb acts on a thing → SVO", note: "be → SVC. give + person + thing → SVOO." },
            ],
          },
          {
            title: "Step 3 — Fill the boxes and check",
            text: "Drop your words into the pattern, then check with the questions: who? what? what is it?",
            examples: [
              { english: "My brother | sells | cars. S-V-O.", note: "The pattern guarantees the order." },
            ],
          },
        ],
      ),
      GR(
        "The pattern rule",
        "English builds sentences from patterns: SV (The baby sleeps.), SVO (I read books.), SVC (She is a doctor.), SVOO (He gives her flowers.) and SV + place (We eat in the kitchen.). The verb decides the pattern: what follows it — nothing, an object, a complement, or two objects?",
        [
          { english: "The baby sleeps. → SV", translation: "The verb is complete alone." },
          { english: "I read books. → SVO", translation: "The verb acts on a thing." },
          { english: "She is a doctor. → SVC", translation: "Be takes a complement, never an object." },
          { english: "He gives her flowers. → SVOO", translation: "With give, the person comes before the thing." },
        ],
        [
          "Patterns can grow: “They play cricket in the park on Sundays.” is still SVO — the place and time words ride at the end.",
        ],
      ),
      TB(
        "The five patterns",
        ["Pattern", "Structure", "Example"],
        [
          ["SV", "Subject + Verb", "The baby sleeps."],
          ["SVO", "Subject + Verb + Object", "I read books."],
          ["SVC", "Subject + be + Complement", "She is a doctor."],
          ["SVOO", "Subject + Verb + person + thing", "He gives her flowers."],
          ["SV + place", "Subject + Verb + where", "We eat in the kitchen."],
        ],
        "Five recipes — every new word you learn is a new ingredient.",
      ),
      AU(
        "Listen: the patterns, one by one",
        "The baby sleeps. SV. I read books. SVO. She is a doctor. SVC. He gives her flowers. SVOO. We eat in the kitchen. SV plus place. Say the letters with me.",
        0.85,
      ),
      AU(
        "Listen: patterns at work",
        "We eat in the kitchen. My uncle sells fruit. My mother is a good cook. She sends her friend a message.",
        0.9,
      ),
      EXD(
        "Patterns across your life",
        [
          { english: "The baby sleeps.", note: "SV: subject and verb — complete with two words.", domain: "family" },
          { english: "I read books every night.", note: "SVO: read acts on books; the time rides at the end.", domain: "education" },
          { english: "She is a doctor.", note: "SVC: be plus a noun complement names her job.", domain: "work" },
          { english: "He gives her flowers.", note: "SVOO: person first, then the thing — her flowers, not flowers her.", domain: "social" },
          { english: "We eat in the kitchen.", note: "SV + place: the kitchen tells where, after the verb.", domain: "home" },
          { english: "My uncle sells fruit.", note: "SVO again — the shopkeeper's favourite pattern.", domain: "shopping" },
          { english: "My mother is a good cook.", note: "SVC with an adjective inside the noun complement.", domain: "food" },
          { english: "They play cricket in the park.", note: "SVO that grew a place phrase — still the same pattern.", domain: "sport" },
          { english: "She sends her friend a message.", note: "SVOO works with send too: person first, then the thing.", domain: "technology" },
        ],
        "Nine sentences, nine places, five recipes. Choose the pattern, fill the boxes, done.",
      ),
      US(
        [
          {
            situation: "Introducing your family",
            example: "“My father is a driver. He drives a taxi.”",
            note: "SVC first, then SVO — a complete introduction in two sentences.",
          },
          {
            situation: "A diary line at night",
            example: "“I play cricket. I am tired.”",
            note: "SVO then SVC: two patterns, one whole day.",
          },
          {
            situation: "At work",
            example: "“I open the shop. I sell fruit. I go home at six.”",
            note: "SVO lines carry the working day.",
          },
          {
            situation: "Sharing on your phone",
            example: "“I send my friend a message.”",
            note: "SVOO: one person, one thing, one pattern.",
          },
          {
            situation: "In the classroom",
            example: "“He gives the students homework.”",
            note: "The pattern game from this lesson — play it with a friend.",
          },
        ],
        "Where the patterns work",
        "Own five recipes and every new word becomes an ingredient.",
      ),
      DL(
        "The sentence factory",
        "Miss Sana plays the pattern game with her class. Two teams: blue and red.",
        [
          ["Sana", "Last game of the week: the sentence factory. I name a pattern, you build the sentence."],
          ["Blue team", "Ready!"],
          ["Sana", "Pattern SV. Go!"],
          ["Amal", "The baby sleeps!"],
          ["Sana", "One point for blue. Now SVO."],
          ["Zaid", "I read books every night."],
          ["Sana", "One point for red. Now SVC."],
          ["Amal", "My mother is a teacher."],
          ["Sana", "Blue again. Last one: SVOO."],
          ["Zaid", "He gives her flowers. And my mother gives me bread every day!"],
          ["Sana", "Two points for red! You all own the patterns now."],
        ],
      ),
      CMP(
        "SVO vs SVC",
        ["SVO — action on a thing", "SVC — being something"],
        [
          ["The verb", "An action verb: read, eat, want, give", "The being verb: am, is, are"],
          ["The last part", "An object — it receives the action", "A complement — it completes the meaning"],
          ["Example", "“She reads a book.”", "“She is a teacher.”"],
          ["The question", "Reads what? — a book", "What is she? — a teacher"],
          ["Try to remove it", "“She reads.” — still a sentence", "“She is.” — the idea breaks; be needs a complement"],
        ],
        {
          intro: "The last slot of a sentence can hold an object or a complement. The verb tells you which.",
          verdict: "Action verb → expect an object. Be → expect a complement. Both make complete, correct sentences.",
        },
      ),
      MS(
        [
          [
            "My brother he is a mechanic.",
            "My brother is a mechanic.",
            "One subject is enough. A pronoun cannot repeat the same doer.",
          ],
          [
            "He gives flowers her.",
            "He gives her flowers.",
            "With give, the person comes first, then the thing: her flowers, not flowers her.",
          ],
          [
            "They are play cricket after school.",
            "They play cricket after school.",
            "Be does not stand before an action verb. Choose one verb: play.",
          ],
          [
            "I very like English.",
            "I like English very much.",
            "Very much goes at the end, after the object. The object follows the verb.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Patterns are recipes",
        "A pattern is a recipe with empty boxes. Once you own five recipes, every new word is just an ingredient. Learn a new noun? Drop it into SVO. Learn a new adjective? Drop it into SVC. The recipe guarantees the order.",
      ),
      FS({
        title: "Practise all four skills — chapter review",
        reading: {
          text: "Chapter 09 gave you the whole machine. A sentence has a subject and a predicate. Inside the predicate, some verbs act on objects; after be, a complement completes the meaning. English keeps a fixed order: adjectives before nouns, how-often words before verbs, time at the ends. Five patterns build almost everything: SV, SVO, SVC, SVOO and SV + place. Own the patterns, and every new word finds its place.",
          task: "Read the text two times. Then name the five patterns from memory.",
        },
        writing: {
          task: "Write one sentence for each pattern — SV, SVO, SVC and SVOO — about your family. Label the parts: S, V, O and C.",
          guide: ["SV: My ___ ___s.", "SVO: My ___ ___s ___.", "SVC: My ___ is a ___.", "SVOO: My ___ gives ___ ___."],
          model: "SV: The baby sleeps. · SVO: My sister reads books. · SVC: My father is a driver. · SVOO: My mother gives me bread.",
        },
        listening: {
          script: "The baby sleeps. I read books. She is a doctor. He gives her flowers. We eat in the kitchen.",
          task: "Listen and name the pattern of each sentence.",
        },
        speaking: {
          task: "The pattern game: a friend names a pattern, you say a sentence. Play five rounds with SV, SVO, SVC and SVOO.",
          frames: ["SV: The ___ ___s.", "SVO: I ___ ___.", "SVC: He is a ___.", "SVOO: She gives ___ ___."],
          checklist: [
            "I built one sentence for each pattern.",
            "I can say what S, V, O and C stand for.",
          ],
        },
      }),
      LSP(
        [
          gls("A sentence has a subject and a predicate."),
          gls("The predicate tells us what the subject does."),
          gls("Some verbs act on an object."),
          gls("pattern"),
          gls("complement"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Five patterns build most beginner English: SV, SVO, SVC, SVOO and SV + place.",
        "The verb decides the pattern: nothing, an object, a complement, or two objects follow it.",
        "SVC uses be plus a complement — never an object.",
        "SVOO puts the person before the thing: He gives her flowers.",
        "Patterns grow: place and time words ride at the end without breaking the recipe.",
      ]),
      RV(
        [
          {
            question: "The predicate tells us…",
            options: ["what the subject does", "who does the action", "where the sentence ends"],
            correctIndex: 0,
            explanation: "The predicate is the verb and everything after it — what the subject does or is.",
            from: "Chapter 09 · Lesson 1",
          },
          {
            question: "Some verbs act on…",
            options: ["an object", "a full stop", "a question mark"],
            correctIndex: 0,
            explanation: "Transitive verbs push their action onto a receiver: the object.",
            from: "Chapter 09 · Lesson 2",
          },
          {
            question: "After be, the word that completes the meaning is the…",
            options: ["complement", "object", "subject"],
            correctIndex: 0,
            explanation: "A noun says what, an adjective says how — the complement completes be sentences.",
            from: "Chapter 09 · Lesson 3",
          },
          {
            question: "Where do words like always and never sit?",
            options: ["after the verb", "before the main verb", "at the start of the sentence"],
            correctIndex: 1,
            explanation: "How-often words hold the verb's hand — in front. After be, they come just behind it.",
            from: "Chapter 09 · Lesson 4",
          },
          {
            question: "English statements follow the order…",
            options: ["subject, verb, object", "subject, object, verb", "verb, subject, object"],
            correctIndex: 0,
            explanation: "The three boxes keep their places — the base of every pattern in this chapter.",
            from: "Chapter 08 · Lesson 5",
          },
        ],
        { title: "Chapter 09 review — the whole chapter", intro: "Five questions from this chapter and the ones before it. Can you answer them all?" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "“She is a doctor.” follows which pattern?",
            [
              ["a", "SV"],
              ["b", "SVO"],
              ["c", "SVC"],
            ],
            "c",
            fb(
              "SVC",
              "Subject + be + complement. The verb is be, and “a doctor” completes the meaning.",
              "SVO needs an action verb with an object. SV stops right after the verb.",
            ),
            { hints: ["The verb is a being verb. What comes after it completes the meaning."] },
          ),
          FB(
            "Complete the pattern.",
            "In the pattern SV, the letters mean subject and ___.",
            ["verb"],
            fbx(
              "verb",
              "The V stands for the action or being word — the second box of every pattern.",
              "Objects and complements join in the longer patterns, but every pattern starts S-V.",
              { english: "The baby sleeps.", translation: "S: the baby. V: sleeps. The smallest pattern." },
            ),
            { hints: ["The letter V stands for the action or being word."] },
          ),
          MATCH(
            "Match each sentence to its pattern.",
            [
              ["a1", "The baby sleeps."],
              ["a2", "I read books."],
              ["a3", "She is happy."],
            ],
            [
              ["p1", "SVC"],
              ["p2", "SV"],
              ["p3", "SVO"],
            ],
            [
              ["a1", "p2"],
              ["a2", "p3"],
              ["a3", "p1"],
            ],
            fb(
              "The baby sleeps. → SV · I read books. → SVO · She is happy. → SVC",
              "Look at what follows the verb: nothing, a receiver, or a word that completes be.",
              "Each sentence keeps its own recipe — the verb decides.",
            ),
            { skill: "grammar", hints: ["Look at what follows the action or being word: nothing, a thing, or a describing word."] },
          ),
          LIS(
            "Listen and answer.",
            "He gives his mother flowers.",
            "What does he give his mother?",
            ["flowers", "Flowers"],
            fb(
              "flowers",
              "With give, the thing comes after the person: his mother, then flowers.",
              "His mother is the first object — the person. The thing comes last.",
            ),
            { hints: ["With give, the person comes first and the thing comes last."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — you own the toolbox.",
        questions: [
          MCQ(
            "Which sentence follows the SVOO pattern?",
            [
              ["a", "The baby sleeps."],
              ["b", "She is a teacher."],
              ["c", "He gives her flowers."],
            ],
            "c",
            fb(
              "He gives her flowers.",
              "Give takes two receivers: her (the person) and flowers (the thing). Subject + verb + person + thing.",
              "“The baby sleeps.” is SV. “She is a teacher.” is SVC.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Put the words in the correct order.",
            "He gives his sister a book.",
            fb(
              "He gives his sister a book",
              "SVOO: subject, verb, person, thing — the sister comes before the book.",
              "With give, the thing never comes before the person.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "They are play football.",
            ["They play football."],
            fb(
              "They play football.",
              "One verb is enough. Be never stands before an action verb in a simple sentence.",
              "Are and play cannot both be the verb — choose the action word.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "We eat rice in the kitchen.",
            ["We eat rice in the kitchen."],
            fb(
              "We eat rice in the kitchen.",
              "SVO plus a place phrase: rice after the verb, the kitchen at the end.",
              "The object always follows the verb directly.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Pattern portfolio",
      instructions:
        "Write one sentence for each pattern — SV, SVO, SVC and SVOO — about your family. Label the parts of every sentence: S, V, O and C. Then write one line: which pattern is easiest for you, and why?",
      minWords: 15,
      maxWords: 60,
    },
    homework: [
      "Play the pattern game alone: say SV, SVO, SVC or SVOO, then build one sentence for each.",
      "Copy the five patterns into your notebook with one new example each.",
      "Find one long sentence in a book. Which pattern is at its heart? Label the boxes.",
    ],
  },
];
