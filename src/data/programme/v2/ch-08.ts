/**
 * PROMPT 57 production — Batch 3, Chapter 08: First English Sentences.
 *
 * The Pre-A1 graduation chapter. Every lesson below is rewritten to the full
 * v2 teaching standard: lesson introduction + prerequisites, concept
 * explanation, step-by-step teaching, rules and patterns, 8+ worked examples
 * with teaching notes, real-life usage, comparison, common mistakes
 * (wrong → right → reason), guided practice (with hints), independent practice
 * (no hints), four-skill integration, validated Urdu/Hindi support, summary,
 * revision questions from earlier lessons, assignment and homework.
 *
 * A learner who studies this chapter alone learns to BUILD and JUDGE English
 * sentences: the three signals, fragments and their fixes, the subject, the
 * verb (action and being), the fixed SVO order — and how it differs from
 * Urdu/Hindi order — and how to read a run of simple sentences fluently.
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

export const ch08Upgrades: LessonUpgrade[] = [
  // =========================================================================
  // Lesson 1 — What Is a Sentence?
  // =========================================================================
  {
    slug: "ch-08-l-01",
    minutes: 25,
    description:
      "The sentence contract: one complete idea, a capital letter at the start, an end mark at the finish — and the voice that goes with each mark.",
    outcomes: [
      "Say what a sentence is in one simple sentence",
      "Name the three signals every sentence sends",
      "Tell a sentence apart from a group of words",
      "Read a sentence with the right voice: down for a full stop, up for a question mark",
    ],
    blocks: [
      LI(
        "You know many English words. Today the words start working together. A sentence is a group of words that expresses a complete idea. In this lesson you learn the three signals every sentence sends. By the end you can build and judge English sentences by yourself.",
        [
          "You know many English words: people, food, animals, colours, numbers (Chapter 06).",
          "You know naming words, action words and describing words (Chapter 07).",
          "You can read simple English words fluently (Chapter 05).",
        ],
      ),
      vocGlossary("Sentence words for this lesson", [
        { word: "sentence", partOfSpeech: "noun", definition: "A group of words that expresses one complete idea." },
        { word: "word", partOfSpeech: "noun", definition: "One unit of meaning: one letter or more." },
        { word: "capital letter", partOfSpeech: "noun", definition: "The big form of a letter: A, B, C." },
        { word: "full stop", partOfSpeech: "noun", definition: "The dot (.) that ends a statement." },
        { word: "question mark", partOfSpeech: "noun", definition: "The mark (?) that ends a question." },
      ]),
      H("From words to sentences"),
      T(
        "One word says one thing: “dog”. A sentence says one complete idea: “The dog runs.” Words join together to make sentences. A sentence always does three things. It starts big. It finishes the idea. It ends with a mark.",
      ),
      {
        type: "definition",
        term: "sentence",
        partOfSpeech: "noun",
        definition:
          "A sentence is a group of words that expresses one complete idea. It starts with a capital letter and ends with an end mark.",
        example: {
          english: "The dog runs.",
          translation: "One complete idea: a subject and a verb, with the two marks around it.",
        },
      },
      ST(
        "Judge a sentence in three steps",
        [
          {
            title: "Step 1 — Check the start",
            text: "Look at the first word. It must begin with a capital letter. “The dog runs.” starts with a big T.",
            examples: [{ english: "the dog runs → The dog runs.", note: "First signal: the capital letter." }],
          },
          {
            title: "Step 2 — Check the idea",
            text: "Ask two questions. Who? — the dog. What happens? — runs. If both questions have answers, the idea is complete.",
            examples: [
              { english: "The dog runs. → Who? the dog. What happens? runs.", note: "Second signal: the complete idea." },
            ],
          },
          {
            title: "Step 3 — Check the end",
            text: "A statement ends with a full stop. A question ends with a question mark. The mark tells your voice where to go.",
            examples: [
              { english: "The dog runs. / Does the dog run?", note: "Third signal: the end mark." },
            ],
          },
        ],
      ),
      GR(
        "The sentence rule",
        "A sentence (1) starts with a capital letter, (2) expresses one complete idea with a verb, (3) ends with an end mark: a full stop, a question mark or an exclamation mark.",
        [
          { english: "The dog runs.", translation: "Statement — the voice goes down at the full stop." },
          { english: "Does the dog run?", translation: "Question — the voice goes up at the question mark." },
          { english: "The dog runs fast!", translation: "Strong feeling — the voice jumps at the exclamation mark." },
        ],
        [
          "Two words can make a sentence: “It runs.” has all three signals. A long group of words can fail: “The big dog in the garden near the school.” is not a sentence — there is no verb.",
        ],
      ),
      TB(
        "The three end marks",
        ["Mark", "Name", "Job", "Your voice"],
        [
          [".", "full stop", "ends a statement", "goes down"],
          ["?", "question mark", "ends a question", "goes up"],
          ["!", "exclamation mark", "ends a strong feeling", "jumps"],
        ],
        "Read the three example sentences out loud. Punctuation is sound written down.",
      ),
      AU(
        "Listen: the three end marks",
        "The dog runs. Does the dog run? The dog runs fast! Hear the voice: down, up, jump. Now read the three sentences with me.",
        0.85,
      ),
      EXD(
        "Your first sentences across daily life",
        [
          { english: "I am a student.", note: "The sentence you say at school. One idea, two marks.", domain: "education" },
          { english: "My mother cooks rice.", note: "Who? my mother. What happens? cooks. Complete idea.", domain: "family" },
          { english: "We drink tea.", note: "The pronoun we starts the sentence — still a capital letter.", domain: "food" },
          { english: "The shop is open.", note: "is works as the verb here. Lesson 4 explains being verbs.", domain: "shopping" },
          { english: "The window is open.", note: "Same pattern, new place. One idea, two marks.", domain: "home" },
          { english: "The bus is late.", note: "Travel needs sentences too. Your voice goes down at the end.", domain: "travel" },
          { english: "They play football.", note: "A pronoun subject with an action verb.", domain: "sport" },
          { english: "The sun is hot.", note: "Nature gives easy complete ideas.", domain: "nature" },
          { english: "My phone is new.", note: "Technology words fit the same sentence machine.", domain: "technology" },
        ],
        "Nine sentences, nine places. Every one keeps the three signals: capital letter, complete idea, end mark.",
      ),
      US(
        [
          {
            situation: "Writing a WhatsApp message",
            example: "“I am at the shop. I buy bread and milk.”",
            note: "Two complete ideas, two full stops, one clear message.",
          },
          {
            situation: "Reading a class notice",
            example: "“The class starts at nine. Please bring your book.”",
            note: "Notices use full sentences so everyone understands.",
          },
          {
            situation: "Introducing yourself",
            example: "“My name is Sara. I am a student.”",
            note: "Your first English conversation is two sentences.",
          },
          {
            situation: "A page of a children's book",
            example: "“The cat sleeps. The moon is white.”",
            note: "Storybooks speak in short complete sentences — like this lesson.",
          },
          {
            situation: "Filling in a form",
            example: "“Name: Ali. Job: student.”",
            note: "Careful: forms are lists of labels, not sentences. Real sentences need the three signals.",
          },
        ],
        "Where sentences live",
        "You already meet sentences every day. Most beginners never stop to check them for the three signals.",
      ),
      DL(
        "Homework check, three signals",
        "Amal writes sentences about her family. Her father checks the signals with her.",
        [
          ["Amal", "Dad, check my English homework. Three sentences."],
          ["Father", "Let me see. Read the first one."],
          ["Amal", "my sister reads books."],
          ["Father", "The idea is complete. But look at the signals. What is missing?"],
          ["Amal", "A capital letter at the start. And a full stop at the end."],
          ["Father", "Right. Fix them, then read it with your voice going down."],
          ["Amal", "My sister reads books. I read books too!"],
          ["Father", "Good. The third one jumps — you used the exclamation mark well."],
        ],
      ),
      CMP(
        "A sentence vs a group of words",
        ["A sentence (complete idea)", "A group of words (no complete idea)"],
        [
          ["What it has", "A subject, a verb and one complete idea", "Names and describing words only"],
          ["Example", "“The dog runs.”", "“The big dog in the garden.”"],
          ["The signals", "Capital letter + end mark", "No verb, and the idea waits for more"],
          ["The test", "Who? and What happens? — both answer", "One of the two answers is missing"],
        ],
        {
          intro: "Beginners often think a long group of words must be a sentence. Judge by the signals, never by length.",
          verdict:
            "Two words can be a sentence: “It runs.” Ten words can fail: “The big dog in the garden near the school.” is not a sentence — there is no verb.",
        },
      ),
      MS(
        [
          [
            "the dog runs.",
            "The dog runs.",
            "The first word of every sentence starts with a capital letter.",
          ],
          [
            "The dog runs",
            "The dog runs.",
            "A statement ends with a full stop. Without it, the reader waits.",
          ],
          [
            "i am a student.",
            "I am a student.",
            "The word “I” is always a capital letter — anywhere in the sentence.",
          ],
          [
            "My name is Sara i am seven",
            "My name is Sara. I am seven.",
            "Two ideas need two sentences. Put a full stop between them and start the new one big.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "End marks carry voice",
        "Read “The dog runs.” — your voice goes down. Read “Does the dog run?” — your voice goes up. The marks are small, but they are sound written down. Read every sentence with its voice.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "A sentence is a group of words that expresses one complete idea. Every sentence starts with a capital letter. A statement ends with a full stop. A question ends with a question mark. Your voice goes down for a full stop and up for a question mark. Two words can make a sentence. A long group of words without a verb is not a sentence.",
          task: "Read the text two times. Then say the three signals from memory.",
        },
        writing: {
          task: "Copy these sentences and add the missing signals: “we drink tea” — “the shop is open” — “does the cat sleep?”",
          guide: ["we drink tea → We drink tea.", "the shop is open → ___", "does the cat sleep? → ___"],
          model: "We drink tea. · The shop is open. · Does the cat sleep?",
        },
        listening: {
          script:
            "The dog runs. Does the dog run? The dog runs fast! Listen once more, and read the three sentences with your voice.",
          task: "Listen and say each sentence with the right voice: down, up, jump.",
        },
        speaking: {
          task: "Say three sentences about your family: one statement, one question and one strong feeling.",
          frames: ["My ___ ___s.", "Does my ___ ___?", "My ___ is ___!"],
          checklist: ["I used a capital letter at every start.", "I used the right end mark three times."],
        },
      }),
      LSP(
        [
          gls("A sentence is a group of words that expresses a complete idea."),
          gls("Every sentence starts with a capital letter."),
          gls("A full stop ends a sentence."),
          gls("Words join together to make sentences."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "A sentence is a group of words that expresses one complete idea.",
        "Every sentence sends three signals: capital letter, complete idea with a verb, end mark.",
        "Statements end with a full stop; questions end with a question mark.",
        "End marks carry voice: down for a full stop, up for a question mark, a jump for an exclamation mark.",
        "Judge sentences by their signals, never by their length.",
      ]),
      RV(
        [
          {
            question: "What do we call one or more letters with a meaning?",
            options: ["A word", "A sentence", "A capital letter"],
            correctIndex: 0,
            explanation: "A word is one unit of meaning; sentences are built from words.",
            from: "Chapter 07 · Lesson 1",
          },
          {
            question: "Action words are called…",
            options: ["nouns", "verbs", "adjectives"],
            correctIndex: 1,
            explanation: "Action words are verbs: run, eat, read, sleep.",
            from: "Chapter 07 · Lesson 3",
          },
          {
            question: "Every sentence starts with…",
            options: ["a small letter", "a capital letter", "a space"],
            correctIndex: 1,
            explanation: "You learned this rule in the alphabet chapters — it never changes.",
            from: "Chapter 02 · Lesson 5",
          },
          {
            question: "Action words tell us…",
            options: ["what people do", "what people like", "where people live"],
            correctIndex: 0,
            explanation: "Action words tell us what people do — the doing is the meaning.",
            from: "Chapter 06 · Lesson 6",
          },
        ],
        { title: "Look back — check your base", intro: "Four quick questions from earlier lessons before you go on." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it whenever you are not sure.",
        questions: [
          MCQ(
            "Which one is a complete sentence?",
            [
              ["a", "The big dog in the garden."],
              ["b", "The big dog runs."],
              ["c", "Runs in the garden every day."],
            ],
            "b",
            fb(
              "The big dog runs.",
              "It has a subject (the big dog), a verb (runs) and both marks. The others miss a part.",
              "Option (a) has no verb. Option (c) has no subject.",
            ),
            { hints: ["Use the two questions: who? and what happens?"] },
          ),
          FB(
            "Complete the rule.",
            "Every sentence starts with a ___.",
            ["capital letter", "capital", "Capital letter"],
            fbx(
              "capital letter",
              "Sentences begin with the big form of the first letter.",
              "Small letters never start English sentences.",
              { english: "The dog runs.", translation: "Big T at the start, full stop at the end." },
            ),
            { hints: ["Think of the first word of “The dog runs.” — big or small?"] },
          ),
          MATCH(
            "Match each sentence with its end mark.",
            [
              ["s1", "The dog runs."],
              ["s2", "Does the dog run?"],
              ["s3", "The dog is big!"],
            ],
            [
              ["m1", "full stop (.)"],
              ["m2", "question mark (?)"],
              ["m3", "exclamation mark (!)"],
            ],
            [
              ["s1", "m1"],
              ["s2", "m2"],
              ["s3", "m3"],
            ],
            fb(
              "The dog runs. → full stop · Does the dog run? → question mark · The dog is big! → exclamation mark",
              "The mark at the end matches the job of the sentence.",
              "Each sentence keeps its own mark — they never swap.",
            ),
            { hints: ["Let your voice decide: down, up, or jump?"] },
          ),
          LIS(
            "Listen and answer.",
            "The cat sleeps. Does the cat sleep? The cat is happy!",
            "How does the first sentence end?",
            ["a full stop", "full stop"],
            fb(
              "a full stop",
              "The first sentence gives information, so the voice goes down at the dot.",
              "A question mark waits for an answer; this sentence gives information.",
            ),
            { hints: ["The first sentence tells you something. Information ends with a little dot."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "How does the voice read a question mark?",
            [
              ["a", "It goes up"],
              ["b", "It goes down"],
              ["c", "It stops"],
            ],
            "a",
            fb("It goes up", "Questions wait for an answer, so the voice rises at the end."),
          ),
          MCQ(
            "How many sentences are in this text? “I am Sara. I have a cat. My cat is black.”",
            [
              ["a", "1"],
              ["b", "2"],
              ["c", "3"],
            ],
            "c",
            fb("3", "Three capital letters, three full stops, three complete ideas."),
          ),
          CORR(
            "Add the missing signals.",
            "the dog runs",
            ["The dog runs.", "The dog runs"],
            fb(
              "The dog runs.",
              "A capital letter at the start and a full stop at the end turn the words into a sentence.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Three signals, three sentences",
      instructions:
        "Write three sentences about your family: one statement, one question and one sentence with a strong feeling. Check each one for the three signals before you finish. Then write one line: which signal do you forget most often?",
      minWords: 12,
      maxWords: 50,
    },
    homework: [
      "Find five English sentences around you today — on phones, signs or book pages. Check each one for the three signals.",
      "Read your five sentences out loud with the right voice: down for a full stop, up for a question mark.",
      "Write two sentences about your day: one statement and one question. Start big, end with a mark.",
    ],
  },

  // =========================================================================
  // Lesson 2 — Complete and Incomplete Sentences
  // =========================================================================
  {
    slug: "ch-08-l-02",
    minutes: 25,
    description:
      "Some groups of words look like sentences but are broken. Learn the two-question test, fix fragments, and stop trusting length.",
    outcomes: [
      "Explain why a group of words without a verb is not a sentence",
      "Use the two-question test: who? and what happens?",
      "Turn an incomplete group into a complete sentence",
      "Spot incomplete groups inside a short text",
    ],
    blocks: [
      LI(
        "Some groups of words look finished but are broken. “The cat on the bed.” has no verb. “Sleeps a lot.” has no subject. In this lesson you learn to spot both and fix them. You will use a two-question test on every group of words you meet.",
        [
          "You know the three signals of a sentence (Lesson 1).",
          "You know naming words, action words and describing words (Chapter 07).",
          "You know more than 200 English words for daily life (Chapter 06).",
        ],
      ),
      vocGlossary("Words for this lesson", [
        { word: "complete sentence", partOfSpeech: "noun", definition: "A sentence with a subject and a verb: a whole idea." },
        { word: "sentence", partOfSpeech: "noun", definition: "A group of words that expresses one complete idea." },
        { word: "verb", partOfSpeech: "noun", definition: "The action or state word. Every sentence needs one." },
        { word: "noun", partOfSpeech: "noun", definition: "The name of a person, place, animal or thing." },
      ]),
      H("The sentence breaks in two places"),
      T(
        "A sentence needs a subject and a verb. The subject says who. The verb says what happens. Remove one, and the idea breaks. The reader waits for more. We call the broken group a fragment.",
      ),
      {
        type: "definition",
        term: "fragment",
        partOfSpeech: "noun",
        definition:
          "A fragment is a group of words that looks like a sentence but misses the subject or the verb, so the idea is not complete.",
        example: {
          english: "The cat on the bed.",
          translation: "Who? the cat. What happens? No answer — the idea is broken.",
        },
      },
      ST(
        "Test any group of words in three steps",
        [
          {
            title: "Step 1 — Read the group to the end",
            text: "Say it out loud. Listen: does the idea finish, or do you wait for more?",
            examples: [
              { english: "The baby sleeps. / The baby in the cot…", note: "One ends. One leaves you waiting." },
            ],
          },
          {
            title: "Step 2 — Ask: who?",
            text: "Find the doer. “Who sleeps?” — the baby. No answer means the subject is missing.",
            examples: [
              { english: "Sleeps a lot. → Who? No answer.", note: "The fragment has a verb but no doer." },
            ],
          },
          {
            title: "Step 3 — Ask: what happens?",
            text: "Find the verb. “The baby does what?” — sleeps. No answer means the verb is missing.",
            examples: [
              { english: "The baby in the cot. → What happens? No answer.", note: "The fragment names the doer but gives no action." },
            ],
          },
        ],
      ),
      GR(
        "The completeness rule",
        "Ask two questions: Who? (the subject) and What happens? (the verb). Both answers present → complete sentence. One answer missing → fragment.",
        [
          { english: "The milk is white.", translation: "Who? the milk. What? is white. Both answers — complete." },
          { english: "The man with the hat.", translation: "Who? the man. What happens? No answer — fragment." },
          { english: "Runs very fast.", translation: "Who? No answer. What? runs. Fragment." },
        ],
        [
          "A fragment can be long and tidy: “The big dog in the garden near the school.” Length never completes an idea. Only a verb does.",
        ],
      ),
      TB(
        "Complete or incomplete?",
        ["Words", "Verdict", "Why"],
        [
          ["The cat sleeps.", "Complete", "subject + verb — the idea ends"],
          ["The cat on the bed.", "Fragment", "no verb — what does the cat do?"],
          ["Sleeps a lot.", "Fragment", "no subject — who sleeps?"],
          ["It runs.", "Complete", "two words, but subject + verb"],
          ["My sister and I read books.", "Complete", "a long subject still works"],
        ],
        "Cover the verdict column and test yourself.",
      ),
      AU(
        "Listen: complete or waiting?",
        "The baby sleeps. Complete. The baby in the cot… Waiting for more. Runs in the garden… Waiting for who? The dog runs. Complete. Now say each one with me.",
        0.85,
      ),
      EXD(
        "Fragments and their fixes across daily life",
        [
          { english: "The man with the hat. → The man with the hat reads a book.", note: "Add the verb and the fragment lives.", domain: "everyday" },
          { english: "Sleeps a lot. → My cat sleeps a lot.", note: "Add the subject. Any doer completes it.", domain: "family" },
          { english: "The shop near my house. → The shop near my house opens at nine.", note: "A place is not an action. Say what the shop does.", domain: "shopping" },
          { english: "Two eggs and milk. → We need two eggs and milk.", note: "Shopping lists are fragments. Cooking needs sentences.", domain: "food" },
          { english: "The window open. → The window is open.", note: "Describing words need a being verb to join the noun.", domain: "home" },
          { english: "The book on the table. → The book is on the table.", note: "is fixes this one — Lesson 4 shows why.", domain: "education" },
          { english: "Plays football every day. → The boys play football every day.", note: "Give the action a doer.", domain: "sport" },
          { english: "The road to the school. → The road to the school is long.", note: "Fragments often name places. Add a being verb.", domain: "travel" },
          { english: "My mother a teacher. → My mother is a teacher.", note: "Jobs need is. This fix returns in Lesson 4.", domain: "work" },
        ],
        "Nine fragments, nine fixes. Every fix answers one of the two questions.",
      ),
      US(
        [
          {
            situation: "A photo caption",
            example: "“My brother. Lahore. 2026.”",
            note: "Captions may use fragments — they are labels, not sentences. School English asks for full sentences.",
          },
          {
            situation: "A quick chat message",
            example: "“At the shop. Buy bread?”",
            note: "Fast messages drop words and friends still understand. But learn the full forms first, like in this lesson.",
          },
          {
            situation: "A note on the fridge",
            example: "“Milk in the fridge.”",
            note: "Family notes often skip the verb. Add one and it becomes a sentence: “The milk is in the fridge.”",
          },
          {
            situation: "Homework instructions",
            example: "“Write five sentences.”",
            note: "Instructions can be short commands. Commands have a hidden subject — Lesson 3 explains.",
          },
          {
            situation: "Filling in a form",
            example: "“Job: teacher. City: Lahore.”",
            note: "Forms are lists of fragments by design. Forms are not sentences.",
          },
        ],
        "Fragments in real life",
        "Daily life is full of fragments. The skill is knowing when full sentences are required.",
      ),
      DL(
        "Two columns on the board",
        "Miss Farah reads word groups. Bilal sorts them into two columns on the board.",
        [
          ["Farah", "Our next game is called: sentence or fragment? Listen."],
          ["Farah", "The students write sentences."],
          ["Bilal", "Sentence. Subject: the students. Verb: write."],
          ["Farah", "The big dog in the garden."],
          ["Bilal", "Fragment. No verb. We see the dog, but nothing happens."],
          ["Farah", "Sleeps in the morning."],
          ["Bilal", "Fragment. No subject. Who sleeps?"],
          ["Farah", "Right. Last one: it sleeps."],
          ["Bilal", "Sentence. Two words are enough."],
        ],
      ),
      CMP(
        "A long group of words vs a short sentence",
        ["A long group of words", "A short complete sentence"],
        [
          ["What it looks like", "Many names and describing words", "Sometimes only two words"],
          ["Example", "“The big dog in the garden near the school.”", "“It sleeps.”"],
          ["The test", "Who? maybe. What happens? never", "Who? it. What happens? sleeps."],
          ["Verdict", "Fragment — the idea is broken", "Sentence — the idea is complete"],
        ],
        {
          intro: "Beginners trust long groups of words and doubt short ones. Reverse that habit.",
          verdict: "Length is decoration. The verb is the engine. Trust the two questions, not the size.",
        },
      ),
      MS(
        [
          [
            "The man with the hat.",
            "The man with the hat reads a book.",
            "The fragment names a man but shows no action. Add the verb.",
          ],
          [
            "Sleeps a lot.",
            "My cat sleeps a lot.",
            "Something happens, but we never learn who. Add the subject.",
          ],
          [
            "The dog big.",
            "The dog is big.",
            "Describing words need a being verb: is joins “dog” and “big”.",
          ],
          [
            "My sister in the garden.",
            "My sister sits in the garden.",
            "A place is not an action. Say what she does there.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "The most common beginner error",
        "Writing “The cat in the garden.” as a full sentence. It looks long and real, but it has no verb. Length is not completeness. Only the two-question test decides.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "A complete sentence answers two questions: who? and what happens? “The baby sleeps.” answers both. “The baby in the cot.” answers only the first. A fragment is a group of words with a missing part. You can fix any fragment: add the subject, or add the verb. Never trust length. Trust the test.",
          task: "Read the text two times. Then say the two questions from memory.",
        },
        writing: {
          task: "Fix these fragments: “The baby in the cot.” — “Sleeps a lot.” — “The shop near my house.”",
          guide: ["The baby in the cot. → The baby sleeps in the cot.", "Sleeps a lot. → ___", "The shop near my house. → ___"],
          model: "The baby sleeps in the cot. · My cat sleeps a lot. · The shop near my house opens at nine.",
        },
        listening: {
          script:
            "The dog runs. Complete. The dog in the garden… Waiting. Sleeps a lot… Waiting for who? Now you: finish the two waiting ones.",
          task: "Listen, then say a complete sentence for each waiting group.",
        },
        speaking: {
          task: "Test three groups of words from this page with the two questions. Say your verdict for each.",
          frames: ["Who? — …", "What happens? — …", "Sentence or fragment? — …"],
          checklist: ["I asked both questions out loud.", "I gave a reason for every verdict."],
        },
      }),
      LSP(
        [
          gls("A sentence without a verb is not a sentence."),
          gls("Every sentence needs a verb."),
          gls("complete sentence"),
          gls("A sentence is a group of words that expresses a complete idea."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "A sentence needs a subject and a verb. Remove one and the idea breaks.",
        "The two-question test: who? and what happens? Both answers must come.",
        "A fragment can be long. Length never completes an idea — only a verb does.",
        "Fix a fragment by adding the missing part: the doer or the action.",
        "Real life is full of fragments: captions, lists and forms. Know when full sentences are required.",
      ]),
      RV(
        [
          {
            question: "A sentence needs a subject and a…",
            options: ["a verb", "a describing word", "a question mark"],
            correctIndex: 0,
            explanation: "The two essential parts are the subject and the verb.",
            from: "Chapter 08 · Lesson 1",
          },
          {
            question: "Describing words are called…",
            options: ["nouns", "adjectives", "verbs"],
            correctIndex: 1,
            explanation: "Describing words are adjectives: big, hot, new.",
            from: "Chapter 07 · Lesson 4",
          },
          {
            question: "Numbers tell us…",
            options: ["how many", "how big", "how old"],
            correctIndex: 0,
            explanation: "Numbers tell us how many — you met them with the first vocabulary chapter.",
            from: "Chapter 06 · Lesson 4",
          },
          {
            question: "Words that replace nouns are called…",
            options: ["pronouns", "adjectives", "verbs"],
            correctIndex: 0,
            explanation: "He, she, it and we replace naming words.",
            from: "Chapter 07 · Lesson 5",
          },
        ],
        { title: "Look back — check your base" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Hints are there when you need them.",
        questions: [
          MCQ(
            "Which group of words is NOT a sentence?",
            [
              ["a", "My sister reads books."],
              ["b", "The man with the hat."],
              ["c", "It runs."],
            ],
            "b",
            fb(
              "The man with the hat.",
              "It names a man but shows no action. The verb is missing.",
              "“My sister reads books.” and “It runs.” both have a subject and a verb.",
            ),
            { hints: ["Ask the two questions: who? and what happens? One group cannot answer both."] },
          ),
          FB(
            "Complete the rule.",
            "A sentence needs a subject and a ___.",
            ["verb"],
            fbx(
              "verb",
              "The verb says what happens. Without it, the idea is broken.",
              "Naming words and describing words alone never finish an idea.",
              { english: "The baby sleeps.", translation: "Subject: the baby. Verb: sleeps. Complete." },
            ),
            { hints: ["Chapter 07 called them action words. is, am and are count too."] },
          ),
          CORR(
            "Add what is missing.",
            "The cat on the bed.",
            ["The cat sleeps on the bed.", "The cat is on the bed."],
            fbx(
              "The cat sleeps on the bed.",
              "Add a verb and the fragment becomes a sentence. “is on the bed” also works.",
              "The group already names the cat; only the action was missing.",
              { english: "The dog in the garden. → The dog runs in the garden.", translation: "Same fix: give the doer something to do." },
            ),
            { hints: ["What does the cat do there? Add an action word — or a being word about the place."] },
          ),
          LIS(
            "Listen: complete or waiting?",
            "The baby sleeps. The baby in the cot… Runs in the garden…",
            "Which one is the complete sentence?",
            ["The baby sleeps.", "the baby sleeps"],
            fb(
              "The baby sleeps.",
              "One idea finishes there. The other two leave you waiting for more.",
              "A group with no verb cannot close the idea.",
            ),
            { hints: ["One idea finishes. The others leave you waiting for more."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints — you have the test.",
        questions: [
          MCQ(
            "“The big dog in the garden.” is not a sentence. Why?",
            [
              ["a", "It has no verb"],
              ["b", "It has no capital letter"],
              ["c", "It is too long"],
            ],
            "a",
            fb(
              "It has no verb",
              "We see the dog, but nothing happens. The two-question test fails at question two.",
            ),
          ),
          RD(
            "Read and find the fragment.",
            "At home",
            "My family is small. My mother cooks rice. My father in the garden. My sister and I read books. We are happy.",
            "Which part is a fragment?",
            [
              ["a", "My mother cooks rice."],
              ["b", "My father in the garden."],
              ["c", "We are happy."],
            ],
            "b",
            fb(
              "My father in the garden.",
              "We meet your father, but we never learn what he does there. No verb, no sentence.",
              "The other parts have subjects and verbs.",
            ),
          ),
          CORR(
            "Fix the fragment.",
            "Sleeps a lot.",
            ["My cat sleeps a lot.", "The baby sleeps a lot.", "He sleeps a lot."],
            fb(
              "My cat sleeps a lot.",
              "Give the action a doer and the idea completes.",
              "“Sleeps a lot.” already has the verb; only the subject was missing.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Fix the fragments",
      instructions:
        "Four groups of words are below. Two are fragments. Find them, add what is missing, and write all four as complete sentences: “The bird sings.” “The man with the hat.” “Sleeps a lot.” “My sister reads.” Then check each one with the two-question test.",
      minWords: 15,
      maxWords: 60,
    },
    homework: [
      "Write one fragment and one complete sentence about your home. Say the two questions for each.",
      "Look at two chat messages or notes you sent this week. Find the fragments in them.",
      "Fix one fragment from your day and read the full sentence out loud.",
    ],
  },

  // =========================================================================
  // Lesson 3 — The Subject
  // =========================================================================
  {
    slug: "ch-08-l-03",
    minutes: 25,
    description:
      "Meet the star of the sentence: who does the action. Find it with one question, take long subjects whole, and meet the hidden subject of commands.",
    outcomes: [
      "Define the subject of a sentence",
      "Find the subject in any simple sentence",
      "Take a long subject as one whole phrase",
      "Explain why commands have no written subject",
    ],
    blocks: [
      LI(
        "Every sentence is about someone or something. That someone is the subject. The subject tells us who does the action. In this lesson you learn to find it in any sentence. You will also meet one surprise: commands have no written subject at all.",
        [
          "You can test groups of words with the two questions (Lesson 2).",
          "You know naming words and the pronouns that replace them (Chapter 07).",
          "You know the words for your family and daily life (Chapter 06).",
        ],
      ),
      vocGlossary("Subject words for this lesson", [
        { word: "subject", partOfSpeech: "noun", definition: "Who or what the sentence is about: the doer." },
        { word: "noun", partOfSpeech: "noun", definition: "The name of a person, place, animal or thing." },
        { word: "pronoun", partOfSpeech: "noun", definition: "A word that replaces a noun: he, she, it, we." },
        { word: "question", partOfSpeech: "noun", definition: "Words we use to ask for information." },
      ]),
      H("Meet the subject"),
      T(
        "The subject is who or what the sentence is about. It usually comes first. To find it, ask “who?” before the verb. The answer is the subject. It can be one word. It can also be a long phrase.",
      ),
      {
        type: "definition",
        term: "subject",
        partOfSpeech: "noun",
        definition:
          "The subject is who or what the sentence is about. It tells us who does the action.",
        example: {
          english: "My mother cooks dinner.",
          translation: "Who cooks? My mother — the subject.",
        },
      },
      ST(
        "Find the subject in three steps",
        [
          {
            title: "Step 1 — Find the verb",
            text: "First find the verb — the action word or the being word. Chapter 07 called them action words.",
            examples: [{ english: "My mother cooks dinner. → verb: cooks", note: "The verb is the anchor." }],
          },
          {
            title: "Step 2 — Ask: who?",
            text: "Put the question in front of the verb. “Who cooks?” The answer is the subject.",
            examples: [
              { english: "Who cooks? → my mother", note: "The doer answers the question." },
            ],
          },
          {
            title: "Step 3 — Take the whole answer",
            text: "Long subjects stay whole. “My big brother with the black dog plays football.” The whole phrase before the verb is the subject.",
            examples: [
              { english: "My big brother with the black dog plays football.", note: "Subject: my big brother with the black dog." },
            ],
          },
        ],
      ),
      GR(
        "The subject rule",
        "The subject tells us who does the action. To find it, ask “who?” or “what?” before the verb. In statements the subject usually comes first.",
        [
          { english: "The dog runs. → Who runs? the dog.", translation: "Subject: the dog." },
          { english: "My mother cooks. → Who cooks? my mother.", translation: "Subject: my mother." },
          { english: "It is hot. → What is hot? it.", translation: "Subject: it — a pronoun." },
        ],
        [
          "Commands have no written subject: “Sit down.” “Open the door.” The subject is you — understood, not written.",
        ],
      ),
      TB(
        "Subjects in real sentences",
        ["Sentence", "Question", "Subject"],
        [
          ["Sara reads books.", "Who reads?", "Sara (a name)"],
          ["The students write sentences.", "Who writes?", "the students"],
          ["My big brother plays football.", "Who plays?", "my big brother (all three words)"],
          ["We drink tea.", "Who drinks?", "we (a pronoun)"],
          ["The shop opens at nine.", "What opens?", "the shop"],
          ["Please sit down.", "Who sits?", "you — hidden in commands"],
        ],
        "The subject can be one word or six. Take the whole answer.",
      ),
      AU(
        "Listen: who does it?",
        "Who reads? Sara reads. Who cooks? My mother cooks. Who plays football? My brother plays football. The subject answers who.",
        0.85,
      ),
      EXD(
        "Subjects across your life",
        [
          { english: "Sara reads books.", note: "A name can be a subject. Names take capital letters.", domain: "education" },
          { english: "The baby sleeps.", note: "Who? one small person at home.", domain: "family" },
          { english: "My father drives a taxi.", note: "The whole phrase “my father” is the doer.", domain: "work" },
          { english: "My brother plays football.", note: "One doer, one game, one subject.", domain: "sport" },
          { english: "The sun is hot.", note: "Nature can be the doer too — here it just is.", domain: "nature" },
          { english: "We drink tea.", note: "The pronoun we does the job of many people.", domain: "food" },
          { english: "The shop opens at nine.", note: "Things can act: shops open, buses come.", domain: "shopping" },
          { english: "The bus comes at eight.", note: "Ask “what comes?” — the bus.", domain: "travel" },
          { english: "My phone is new.", note: "Even a phone can hold the subject place.", domain: "technology" },
        ],
        "Nine sentences, nine doers. Ask “who?” and the subject always answers.",
      ),
      US(
        [
          {
            situation: "Showing a family photo",
            example: "“This is my grandfather. My grandfather walks every morning.”",
            note: "Point at people and say who does what.",
          },
          {
            situation: "Sharing the jobs at home",
            example: "“Who cooks dinner? My mother cooks dinner.”",
            note: "The question “who?” finds the doer in real life, not only in books.",
          },
          {
            situation: "Talking about jobs",
            example: "“I drive a taxi. My brother opens the shop.”",
            note: "Job talk is full of subjects: say who does the work.",
          },
          {
            situation: "In the classroom",
            example: "“Who reads? The students read.”",
            note: "Teachers ask “who?” all day. Now you know the grammar name for the answer.",
          },
          {
            situation: "Talking about a team",
            example: "“Ali plays football. He runs fast.”",
            note: "First the naming word, then the pronoun takes over as subject (Chapter 07).",
          },
        ],
        "Where you find subjects",
        "Every time you say who does something, you are using a subject.",
      ),
      DL(
        "The photo on the wall",
        "Amina shows her grandmother a family photo and names who does what.",
        [
          ["Grandmother", "Who is this? Is it your grandfather?"],
          ["Amina", "Yes. This is my grandfather. My grandfather walks every morning."],
          ["Grandmother", "And who cooks dinner in your house?"],
          ["Amina", "My mother cooks dinner. She cooks rice."],
          ["Grandmother", "Who reads books every night?"],
          ["Amina", "I read books. My brother plays football."],
          ["Grandmother", "Good. And who is the little one with the cat?"],
          ["Amina", "That is my sister. The cat sleeps with her."],
        ],
      ),
      CMP(
        "Subject of a sentence vs subject in school",
        ["Subject in a sentence (grammar)", "A subject in school (timetable)"],
        [
          ["What it is", "Who does the action in a sentence", "A lesson on your timetable, like English or maths"],
          ["Example", "“My mother cooks.” — the subject is my mother", "“English is my favourite subject.” — a school lesson"],
          ["How many you have", "Every sentence has one", "Your day has six or seven"],
          ["Where it lives", "Grammar — this chapter", "The school timetable"],
        ],
        {
          intro: "The word “subject” has two common meanings. Beginners meet both in the same week.",
          verdict: "In this chapter, subject always means the doer of the action. School subjects belong to your timetable.",
        },
      ),
      MS(
        [
          [
            "In “The dog runs”, the subject is runs.",
            "In “The dog runs”, the subject is the dog.",
            "Runs is the verb — the action. The subject is who does it: the dog.",
          ],
          [
            "Sleeps the baby.",
            "The baby sleeps.",
            "English statements start with the subject. The verb waits in second place.",
          ],
          [
            "My mother she cooks dinner.",
            "My mother cooks dinner.",
            "One subject is enough. Do not add a pronoun for the same doer.",
          ],
          [
            "“Sit down.” is not a sentence, because it has no subject.",
            "“Sit down.” is a sentence — the subject is you, hidden.",
            "Commands speak straight to you. The subject is understood, not written.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Long subjects",
        "In “My big brother with the black dog plays football”, the subject is not just “brother”. The whole phrase “my big brother with the black dog” names the doer. Ask the question and take the whole answer.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "The subject tells us who does the action. To find it, ask “who?” before the verb. “My mother cooks dinner.” — who cooks? My mother. Long subjects stay whole: “My big brother with the black dog plays football.” Commands have no written subject: “Sit down.” The subject is you, hidden.",
          task: "Read the text two times. Then find the subjects of three sentences on this page.",
        },
        writing: {
          task: "Write four sentences about people you know. Underline the subject in each one.",
          guide: ["___ reads books.", "___ cooks dinner.", "___ plays football.", "___ (three words or more) works every day."],
          model: "My mother cooks dinner. · The students write sentences. · My big brother with the black dog plays football.",
        },
        listening: {
          script:
            "Who reads? Sara. Who cooks? My mother. Who plays football? My brother. Listen once more and say each subject with me.",
          task: "Listen and say each subject out loud after the audio.",
        },
        speaking: {
          task: "Ask “who?” about three people in your family, then answer with full sentences.",
          frames: ["Who cooks dinner? — My ___ cooks dinner.", "Who reads? — ___ reads.", "Who plays? — ___ plays."],
          checklist: ["I asked “who?” three times.", "My answers name the doer first."],
        },
      }),
      LSP(
        [
          gls("The subject tells us who does the action."),
          gls("subject"),
          gls("He, she and it replace naming words."),
          gls("Naming words are called nouns."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "The subject is who or what the sentence is about — the doer of the action.",
        "Find it by asking “who?” or “what?” before the verb.",
        "In statements the subject usually comes first.",
        "Long subjects stay whole: take all the words that name the doer.",
        "Commands have no written subject: the subject is you, hidden.",
      ]),
      RV(
        [
          {
            question: "A fragment is a group of words with…",
            options: ["a missing subject or verb", "too many describing words", "no capital letter only"],
            correctIndex: 0,
            explanation: "The two essential parts are the subject and the verb. Miss one and the idea breaks.",
            from: "Chapter 08 · Lesson 2",
          },
          {
            question: "Words that replace nouns are called…",
            options: ["pronouns", "adjectives", "verbs"],
            correctIndex: 0,
            explanation: "He, she, it and we replace naming words — Chapter 07.",
            from: "Chapter 07 · Lesson 5",
          },
          {
            question: "“This is my mother.” — the naming words here are…",
            options: ["mother", "this", "is"],
            correctIndex: 0,
            explanation: "Mother names a person; this points and is is the verb.",
            from: "Chapter 06 · Lesson 1",
          },
          {
            question: "Every sentence needs a…",
            options: ["verb", "describing word", "question mark"],
            correctIndex: 0,
            explanation: "A sentence without a verb is not a sentence.",
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
        note: "Hints are there when you need them.",
        questions: [
          MATCH(
            "Match each sentence with its subject.",
            [
              ["s1", "Sara reads books."],
              ["s2", "The cats sleep."],
              ["s3", "My mother cooks dinner."],
              ["s4", "It is hot."],
            ],
            [
              ["j1", "my mother"],
              ["j2", "Sara"],
              ["j3", "the cats"],
              ["j4", "It"],
            ],
            [
              ["s1", "j2"],
              ["s2", "j3"],
              ["s3", "j1"],
              ["s4", "j4"],
            ],
            fb(
              "Sara · the cats · my mother · It",
              "Each doer answers the question “who?” for its sentence.",
              "The verb and the object never hold the subject job.",
            ),
            { hints: ["Ask “who?” before the verb. The answer is the star of the sentence."] },
          ),
          MCQ(
            "In “My brother plays football”, who does the action?",
            [
              ["a", "My brother"],
              ["b", "football"],
              ["c", "plays"],
            ],
            "a",
            fbx(
              "My brother",
              "Ask “who plays?” The doer comes first in the sentence.",
              "“Plays” is the verb; “football” receives the action.",
              { english: "The students write sentences.", translation: "Same question: who writes? The students." },
            ),
            { hints: ["Ask: who plays? Look before the verb."] },
          ),
          FB(
            "Write the subject from the clue.",
            "___ cooks dinner every day. (my mother)",
            ["my mother", "My mother"],
            fb(
              "My mother",
              "“Who cooks?” — my mother. The clue in brackets gives the doer.",
              "The verb cooks already waits in second place.",
            ),
            { hints: ["The doer waits in the brackets at the end."] },
          ),
          LIS(
            "Listen and answer.",
            "Who reads every night? Sara reads. Who cooks dinner? My mother cooks dinner. Who plays football? My brother plays football.",
            "Who cooks dinner?",
            ["My mother", "my mother"],
            fb(
              "My mother",
              "The question asks for the doer. The name after it is the subject.",
              "“Cooks” is the verb; the doer answers “who?”",
            ),
            { hints: ["Listen for the question about cooking. The doer follows it."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints — you have the question.",
        questions: [
          MCQ(
            "Which sentence has no written subject?",
            [
              ["a", "Please sit down."],
              ["b", "The dog runs."],
              ["c", "She is a teacher."],
            ],
            "a",
            fb("Please sit down.", "Commands speak to you. The subject “you” is hidden — but it is still there."),
          ),
          MCQ(
            "In “The students write sentences”, the subject is…",
            [
              ["a", "the students"],
              ["b", "sentences"],
              ["c", "write"],
            ],
            "a",
            fb("the students", "Ask “who writes?” The doer is the subject."),
          ),
          CORR(
            "Find and correct the mistake.",
            "Sleeps the baby.",
            ["The baby sleeps."],
            fb(
              "The baby sleeps.",
              "The subject comes first. The verb comes second.",
              "“Sleeps the baby.” puts the verb at the front.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Subject search",
      instructions:
        "Write four sentences about people in your family: one name, one pronoun, one long phrase of three or more words, and one command. Underline the subject in each. For the command, write the hidden subject in brackets.",
      minWords: 12,
      maxWords: 60,
    },
    homework: [
      "Find the subject of three sentences in any English text around you.",
      "Say each subject out loud with its verb: “my mother cooks”, “the bus comes”.",
      "Ask “who?” about three jobs in your house and answer with full sentences.",
    ],
  },

  // =========================================================================
  // Lesson 4 — The Verb
  // =========================================================================
  {
    slug: "ch-08-l-04",
    minutes: 25,
    description:
      "The heart of the sentence: every sentence needs a verb. Action verbs run and eat — being verbs is, am and are hold ideas together.",
    outcomes: [
      "Find the verb in any simple sentence",
      "Explain why no sentence exists without a verb",
      "Use being verbs (is, am, are) to hold ideas together",
      "Match subjects to their verbs in short sentences",
    ],
    blocks: [
      LI(
        "The verb is the heart of the sentence. It tells us what happens or what something is. In this lesson you learn to find verbs fast. You will also meet the being verbs: is, am and are. They show no action, but they are full verbs.",
        [
          "You can find the subject of a sentence (Lesson 3).",
          "You know the action words from Chapter 07.",
          "You know your first action words: eat, drink, read, sleep (Chapter 06).",
        ],
      ),
      vocGlossary("Verb words for this lesson", [
        { word: "verb", partOfSpeech: "noun", definition: "The action or state word. Every sentence needs one." },
        { word: "action word", partOfSpeech: "noun", definition: "A word that tells us what people do." },
        { word: "to eat", partOfSpeech: "verb", definition: "To put food in your mouth and swallow it." },
        { word: "to sleep", partOfSpeech: "verb", definition: "To rest with your eyes closed." },
      ]),
      H("The heart of the sentence"),
      T(
        "Every sentence needs a verb. Action verbs show movement: run, eat, read, play. Being verbs show a state: is, am, are. “She is a teacher.” has no action at all. But is is still the verb. It holds the idea together.",
      ),
      {
        type: "definition",
        term: "verb",
        partOfSpeech: "noun",
        definition:
          "The verb is the action or the state in the sentence. Every sentence needs one.",
        example: {
          english: "The dog runs.",
          translation: "runs is the verb — the action word.",
        },
      },
      ST(
        "Find the verb in three steps",
        [
          {
            title: "Step 1 — Read and find the doer",
            text: "Find the subject first. It names the doer or the thing.",
            examples: [{ english: "The milk…", note: "The doer here is a thing: the milk." }],
          },
          {
            title: "Step 2 — Ask: what happens? or what is it?",
            text: "Put the question after the doer. Action verbs answer “what happens?”. Being verbs answer “what is it?”.",
            examples: [
              { english: "The milk is cold. → What is it? is cold.", note: "The verb is is — a being verb." },
            ],
          },
          {
            title: "Step 3 — Say the verb alone",
            text: "Say the verb by itself, between the subject and the rest. If the sentence keeps its meaning, you found it.",
            examples: [
              { english: "The milk / is / cold.", note: "One word in the middle: the verb." },
            ],
          },
        ],
      ),
      GR(
        "The verb rule",
        "Every sentence needs a verb. Action verbs show action: run, eat, read, play. Being verbs show a state: is, am, are. A sentence without a verb is not a sentence.",
        [
          { english: "The dog runs. → verb: runs (action)", translation: "Movement you can see." },
          { english: "She is a teacher. → verb: is (state)", translation: "No movement — still a full verb." },
          { english: "We are happy. → verb: are (state)", translation: "A feeling held together by are." },
        ],
        [
          "In questions the verb can stand first: “Are you happy?” — are is still the verb.",
        ],
      ),
      TB(
        "Two kinds of verb",
        ["Kind", "Words", "Example"],
        [
          ["Action verbs", "run, eat, read, play, drink", "The dog runs."],
          ["Being verbs", "is, am, are", "The dog is big."],
          ["One is enough", "a sentence needs at least one", "I am a student. I read books."],
        ],
        "A being verb is a full verb. It needs no action to count.",
      ),
      AU(
        "Listen: the verb team",
        "I read. You read. She reads. We read. The subject and the verb are a team. I am a student. She is a teacher. They are happy. Being verbs work too.",
        0.85,
      ),
      EXD(
        "Verbs at work across your life",
        [
          { english: "I drink water.", note: "An action verb: you can see the drinking.", domain: "food" },
          { english: "She is a teacher.", note: "A being verb — no action, still the verb.", domain: "work" },
          { english: "The milk is cold.", note: "is joins the thing and the describing word.", domain: "food" },
          { english: "They play football.", note: "Team verbs are action verbs.", domain: "sport" },
          { english: "The shop is open.", note: "Being verb plus describing word: a whole state.", domain: "shopping" },
          { english: "My grandfather walks every morning.", note: "Walking keeps you healthy — an action verb at work.", domain: "health" },
          { english: "The students write sentences.", note: "Study runs on action verbs.", domain: "education" },
          { english: "We speak English.", note: "Speaking practice is a verb too.", domain: "social" },
          { english: "The bus is late.", note: "Waiting needs is: travel lives on being verbs.", domain: "travel" },
        ],
        "Nine sentences, nine verbs. Some move, some just hold the idea together.",
      ),
      US(
        [
          {
            situation: "Saying how you feel",
            example: "“I am happy today.”",
            note: "Feelings live on being verbs.",
          },
          {
            situation: "At the doctor",
            example: "“I am sick. I need rest.”",
            note: "Simple being-verb sentences say the most important things.",
          },
          {
            situation: "Talking about jobs",
            example: "“She is a nurse. He is a driver.”",
            note: "Job sentences are built on is.",
          },
          {
            situation: "Describing things",
            example: "“The tea is hot. The chairs are new.”",
            note: "Being verbs join things and describing words.",
          },
          {
            situation: "In the classroom",
            example: "“I read. I write. I speak.”",
            note: "Study actions are verbs: say them and do them.",
          },
        ],
        "Where verbs carry you",
        "Every feeling, job and description needs its verb. Say it — never drop it.",
      ),
      DL(
        "What is your job?",
        "Two neighbours meet at the shop and talk about their work.",
        [
          ["Rashid", "Hello! What is your job?"],
          ["Sana", "I am a nurse. I work at the hospital."],
          ["Rashid", "My brother is a driver. He drives a taxi."],
          ["Sana", "And you?"],
          ["Rashid", "I am a teacher. I teach small children."],
          ["Sana", "Teachers are important people."],
          ["Rashid", "Thank you. Every job needs its verb: am, work, teach!"],
        ],
      ),
      CMP(
        "Being verb vs action verb",
        ["Being verbs (is, am, are)", "Action verbs (run, eat, read)"],
        [
          ["What it shows", "A state: what something is", "An action: what something does"],
          ["Example", "“She is a teacher.”", "“She reads books.”"],
          ["Movement", "None — the idea simply stands", "Yes — the idea moves"],
          ["Same job", "Both are verbs. Every sentence needs one.", "Both are verbs. Every sentence needs one."],
        ],
        {
          intro: "Beginners trust action verbs and drop being verbs, because being verbs show no movement.",
          verdict: "“She a teacher.” is wrong. The being verb is the glue. Without it, the idea falls apart.",
        },
      ),
      MS(
        [
          [
            "She teacher.",
            "She is a teacher.",
            "The being verb is missing. is joins “she” and “teacher”.",
          ],
          [
            "The dog big.",
            "The dog is big.",
            "Describing words need a being verb: the dog is big.",
          ],
          [
            "I happy.",
            "I am happy.",
            "With I, the being word is am.",
          ],
          [
            "“She is a teacher” has no verb, because is shows no action.",
            "“She is a teacher” has a verb: is.",
            "Being verbs are full verbs. No action is needed — the state is the meaning.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "The most common beginner error in English",
        "Dropping the being verb. “She a teacher.” looks complete to many learners, because their own language can join two words without a verb. English cannot. The verb is the heart — never drop it.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Every sentence needs a verb. Action verbs show movement: run, eat, read, play. Being verbs show a state: is, am, are. “She is a teacher.” has no action, but is is still the verb. A sentence without a verb is not a sentence. Find the verb and you find the heart.",
          task: "Read the text two times. Then find the verbs in three sentences on this page.",
        },
        writing: {
          task: "Build four subject + verb teams: use I, she, we and one animal. Two teams use action verbs; two teams use being verbs.",
          guide: ["I ___ (action verb).", "She ___ a teacher.", "We ___ (action verb).", "The cat ___ black."],
          model: "I read. · She is a teacher. · We drink tea. · The cat is black.",
        },
        listening: {
          script:
            "I am a student. She is a teacher. We are happy. The dog runs. The baby sleeps. Listen once more and say each verb with me.",
          task: "Listen and say each verb out loud after the audio.",
        },
        speaking: {
          task: "Say five sentences about your day: three with action verbs and two with being verbs.",
          frames: ["I ___ every morning.", "I am a ___.", "My ___ is ___.", "We ___ together.", "The ___ is ___."],
          checklist: ["I used a verb in every sentence.", "Two of my verbs are being verbs."],
        },
      }),
      LSP(
        [
          gls("Every sentence needs a verb."),
          gls("Read the sentence and find the verb."),
          gls("Say the sentence out loud and listen for the verb."),
          gls("Action words are called verbs."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Every sentence needs a verb. A sentence without a verb is not a sentence.",
        "Action verbs show movement: run, eat, read, play.",
        "Being verbs show a state: is, am, are. They are full verbs.",
        "Find the verb by asking: what happens? or what is it?",
        "Never drop the being verb: “She is a teacher.” — is holds the idea together.",
      ]),
      RV(
        [
          {
            question: "The subject of a sentence is…",
            options: ["who does the action", "the action word", "the end mark"],
            correctIndex: 0,
            explanation: "The subject is the doer; the verb is the action.",
            from: "Chapter 08 · Lesson 3",
          },
          {
            question: "Action words are called…",
            options: ["verbs", "nouns", "adjectives"],
            correctIndex: 0,
            explanation: "Action words are verbs — Chapter 07 taught the label.",
            from: "Chapter 07 · Lesson 3",
          },
          {
            question: "A group of words with no verb is…",
            options: ["a fragment", "a question", "a command"],
            correctIndex: 0,
            explanation: "Without a verb the idea breaks — the group waits for more.",
            from: "Chapter 08 · Lesson 2",
          },
          {
            question: "Your first action words include…",
            options: ["eat, drink, read, sleep", "red, blue, green", "one, two, three"],
            correctIndex: 0,
            explanation: "You met eat, drink, read and sleep with the first vocabulary chapter.",
            from: "Chapter 06 · Lesson 6",
          },
        ],
        { title: "Look back — check your base" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Hints are there when you need them.",
        questions: [
          MCQ(
            "Which sentence has a verb?",
            [
              ["a", "She is a teacher."],
              ["b", "She a teacher."],
              ["c", "A teacher, she."],
            ],
            "a",
            fb(
              "She is a teacher.",
              "is is the verb — a being verb. It holds the idea together.",
              "Option (b) drops the verb. Option (c) has no verb either.",
            ),
            { hints: ["One small word joins “she” and “teacher”. Find it."] },
          ),
          FB(
            "Complete the sentence.",
            "She ___ a teacher.",
            ["is"],
            fbx(
              "is",
              "The being verb for she. It joins the subject and the naming word.",
              "“am” goes with I; “are” goes with we and they.",
              { english: "He is a driver.", translation: "Same being verb for he." },
            ),
            { hints: ["The being word for she. I use am — she uses this one."] },
          ),
          DICT(
            "Listen and write the sentence.",
            "The milk is cold.",
            ["The milk is cold.", "the milk is cold"],
            fb(
              "The milk is cold.",
              "Three parts: the thing, the being verb, the describing word.",
              "Do not drop the being verb — it is the heart of this sentence.",
            ),
            { hints: ["Three parts: the thing, the being word, the describing word."] },
          ),
          LIS(
            "Listen and find the verb.",
            "My father reads a book.",
            "What is the verb?",
            ["reads", "Reads"],
            fb(
              "reads",
              "Ask “what happens?” The action word is the verb.",
              "“My father” is the subject; “a book” receives the action.",
            ),
            { hints: ["Ask: what happens? The action word is the answer."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints — you have the question.",
        questions: [
          MCQ(
            "Is “is” a verb?",
            [
              ["a", "Yes — it is a being verb"],
              ["b", "No — it shows no action"],
              ["c", "Only in questions"],
            ],
            "a",
            fb("Yes — it is a being verb", "Being verbs are full verbs. “She is a teacher.” needs no action word."),
          ),
          FB(
            "Complete the rule.",
            "A sentence without a ___ is not a sentence.",
            ["verb"],
            fb(
              "verb",
              "The verb is required. Naming words and describing words cannot replace it.",
            ),
          ),
          CORR(
            "Fix the sentence.",
            "She teacher.",
            ["She is a teacher."],
            fb(
              "She is a teacher.",
              "Add the being verb. is joins the two words.",
              "The idea had a subject and a naming word; only the verb was missing.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Team builder",
      instructions:
        "Write four subject + verb teams. Use the subjects I, she, we and one animal. Two teams use action verbs; two teams use being verbs. Then write one line: which team was easier to build, and why?",
      minWords: 10,
      maxWords: 50,
    },
    homework: [
      "Find the verb in three sentences around you today. Say whether each is an action verb or a being verb.",
      "Write three sentences about your family with being verbs: “My mother is …”.",
      "Say five sentences about your day out loud. Check that every one has a verb.",
    ],
  },

  // =========================================================================
  // Lesson 5 — Word Order: Subject + Verb + Object
  // =========================================================================
  {
    slug: "ch-08-l-05",
    minutes: 30,
    description:
      "The SVO machine: English wears its words in a fixed order — subject, verb, object. Build thousands of sentences from three boxes, and see how the order differs from Urdu and Hindi.",
    outcomes: [
      "Explain the SVO pattern with one example",
      "Build SVO sentences from mixed words",
      "Correct a sentence with wrong word order",
      "Say how English order differs from Urdu and Hindi order",
    ],
    blocks: [
      LI(
        "English word order is fixed. Subject first, verb second, object third. Once you own this pattern, you can build thousands of correct sentences. In this lesson you also compare English with Urdu and Hindi. The parts are the same — the order is not.",
        [
          "You can find the subject and the verb of any sentence (Lessons 3 and 4).",
          "You know naming words, action words and describing words (Chapter 07).",
          "You know the words for daily life: food, family, school (Chapter 06).",
        ],
      ),
      vocGlossary("Word-order words for this lesson", [
        { word: "word order", partOfSpeech: "noun", definition: "The fixed position of words in a sentence." },
        { word: "subject", partOfSpeech: "noun", definition: "Who does the action." },
        { word: "verb", partOfSpeech: "noun", definition: "The action or state word." },
        { word: "object", partOfSpeech: "noun", definition: "The thing that receives the action." },
      ]),
      H("The SVO machine"),
      T(
        "English word order is fixed: subject first, verb second, object third. “The cat eats fish.” never becomes “Eats the cat fish.” The three boxes keep their places. Slot new words into the boxes and the machine builds correct sentences.",
      ),
      {
        type: "definition",
        term: "word order",
        partOfSpeech: "noun",
        definition:
          "Word order is the fixed position of words in a sentence. English statements follow subject, verb, object.",
        example: {
          english: "The cat eats fish.",
          translation: "Subject: the cat. Verb: eats. Object: fish.",
        },
      },
      ST(
        "Build an SVO sentence in three steps",
        [
          {
            title: "Step 1 — Fill the first box: the doer",
            text: "Who does it? That word or phrase goes first.",
            examples: [{ english: "fish / cats / eat → who eats? cats", note: "Box one: the doer." }],
          },
          {
            title: "Step 2 — Add the action",
            text: "What happens? The verb goes second, right after the doer.",
            examples: [{ english: "cats eat…", note: "Subject and verb are a team — Lesson 4." }],
          },
          {
            title: "Step 3 — Add the receiver",
            text: "What receives the action? The object goes last.",
            examples: [{ english: "Cats eat fish.", note: "Ask “eats what?” — fish. Box three." }],
          },
        ],
      ),
      GR(
        "The SVO rule",
        "English statements follow subject + verb + object. The object is the thing that receives the action. The order of the three boxes never changes.",
        [
          { english: "The dog chases the ball.", translation: "S: the dog · V: chases · O: the ball." },
          { english: "Students write sentences.", translation: "S: students · V: write · O: sentences." },
          { english: "I drink milk.", translation: "S: I · V: drink · O: milk." },
        ],
        [
          "Some sentences stop after the verb: “The dog runs.” The object is optional — the order is not.",
        ],
      ),
      TB(
        "The three boxes",
        ["Box 1: subject (who?)", "Box 2: verb (what happens?)", "Box 3: object (receives what?)"],
        [
          ["The cat", "eats", "fish"],
          ["My sister", "reads", "books"],
          ["I", "drink", "water"],
          ["We", "speak", "English"],
        ],
        "Say the box names as you build: subject, verb, object.",
      ),
      AU(
        "Listen: the pattern again and again",
        "I drink water. She reads books. The dog eats food. My mother cooks rice. The students write sentences. Subject, verb, object — again and again.",
        0.85,
      ),
      EXD(
        "SVO across your life",
        [
          { english: "I drink milk.", note: "I + drink + milk. The smallest full machine.", domain: "food" },
          { english: "My father drives a taxi.", note: "Three boxes, one job.", domain: "work" },
          { english: "Students write sentences.", note: "Study runs on the same machine.", domain: "education" },
          { english: "The boys play cricket.", note: "Team games build the same way.", domain: "sport" },
          { english: "We open the shop at nine.", note: "The time sits after the object — extra words never break the boxes.", domain: "shopping" },
          { english: "Sara sends a message.", note: "Even phone life follows SVO.", domain: "technology" },
          { english: "Elephants eat plants.", note: "Big animals, same three boxes.", domain: "nature" },
          { english: "I like my school.", note: "like names a feeling, not an action. Still box two.", domain: "social" },
          { english: "We take the bus.", note: "Travel builds on SVO too.", domain: "travel" },
        ],
        "Nine sentences, nine places, one fixed order. The machine never changes.",
      ),
      US(
        [
          {
            situation: "A diary line at night",
            example: "“I drink tea. I read books. I sleep.”",
            note: "Three SVO lines end the day.",
          },
          {
            situation: "Ordering at a café",
            example: "“I drink tea. We eat rice.”",
            note: "Small sentences are polite and clear.",
          },
          {
            situation: "Texting about your day",
            example: "“I play cricket. My mother cooks rice.”",
            note: "Two SVO sentences are a full update.",
          },
          {
            situation: "Talking about work",
            example: "“I drive a taxi. I open the shop at nine.”",
            note: "Job talk is box-filling: doer, action, receiver.",
          },
          {
            situation: "The classroom sentence machine",
            example: "The teacher gives three words; the class builds the sentence.",
            note: "Play the three-box game at home too: mix words, then build.",
          },
        ],
        "Where you build SVO",
        "Once the order is automatic, every new word you learn slides straight into a box.",
      ),
      DL(
        "The word-card game",
        "Hina and her brother Sam mix word cards and build sentences on the table.",
        [
          ["Sam", "My cards say: fish, cats, eat. Help me build a sentence."],
          ["Hina", "First box: who eats? The cats."],
          ["Sam", "Second box: what happens? Eat."],
          ["Hina", "Third box: what receives? Fish. So: cats eat fish."],
          ["Sam", "Cats eat fish. Now my turn: milk, I, drink."],
          ["Hina", "You build it. Say the box names first."],
          ["Sam", "Subject: I. Verb: drink. Object: milk. I drink milk."],
          ["Hina", "Perfect. The machine never changes its order."],
        ],
      ),
      CMP(
        "English order vs Urdu and Hindi order",
        ["English: subject + verb + object", "Urdu and Hindi: subject + object + verb"],
        [
          ["Where the verb goes", "In the middle, before the object", "At the end, after the object"],
          ["The same idea", "“I eat rice.”", "The same words in Urdu or Hindi say: “I rice eat.”"],
          ["What moves", "The verb stands second", "The verb waits till last"],
          ["What stays", "The subject still comes first in both", "The subject still comes first in both"],
        ],
        {
          intro: "You already build sentences in Urdu and Hindi. English uses the same parts in a different order.",
          verdict:
            "When you translate in your head, the verb wants to run to the end. Stop it in the middle. Subject, verb, object — every time.",
        },
      ),
      MS(
        [
          [
            "Likes I pizza.",
            "I like pizza.",
            "The subject comes first. “Likes I pizza” pushes the verb to the front.",
          ],
          [
            "Eats the cat fish.",
            "The cat eats fish.",
            "The verb never stands before the subject. Box two follows box one.",
          ],
          [
            "I cold drink water.",
            "I drink cold water.",
            "Describing words sit next to their noun: cold water. The verb stays in box two.",
          ],
          [
            "Rice eat I.",
            "I eat rice.",
            "This is Urdu or Hindi order with English words. English keeps the verb in the middle.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "Adjectives inside SVO",
        "Describing words stay close to their noun: “I drink cold water”, not “I cold drink water”. The three boxes are fixed; describing words travel inside a box.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "English word order is fixed: subject, verb, object. “The cat eats fish.” never becomes “Eats the cat fish.” Some sentences stop after the verb: “The dog runs.” The object is optional — the order is not. Urdu and Hindi put the verb at the end. English keeps it in the middle. Three boxes, thousands of sentences.",
          task: "Read the text two times. Then label the boxes in “My sister reads books.”",
        },
        writing: {
          task: "Build six sentences from these mixed words: “fish / cats / eat”, “a book / reads / my brother”, “water / we / drink”. Label S, V and O in each.",
          guide: ["fish / cats / eat → Cats eat fish. (S: cats, V: eat, O: fish)", "a book / reads / my brother → ___", "water / we / drink → ___"],
          model: "Cats eat fish. · My brother reads a book. · We drink water.",
        },
        listening: {
          script:
            "I drink water. She reads books. The dog eats food. My mother cooks rice. Listen once more and say the box names with me.",
          task: "Listen and say “subject, verb, object” for each sentence.",
        },
        speaking: {
          task: "Say five sentences about your day. Say the box names first, then the full sentence.",
          frames: ["Subject: I. Verb: ___. Object: ___.", "Subject: my mother. Verb: ___.", "We ___ together every day.", "The ___ is ___.", "I like ___."],
          checklist: ["I said the box names before each sentence.", "Every sentence follows subject, verb, object."],
        },
      }),
      LSP(
        [
          gls("English word order is subject, verb, object."),
          gls("word order"),
          gls("subject"),
          gls("object"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "English statements follow subject + verb + object. The order never changes.",
        "The object is the thing that receives the action: “Cats eat fish.”",
        "The object is optional: “The dog runs.” stops after the verb.",
        "Describing words travel inside a box, next to their noun.",
        "Urdu and Hindi put the verb at the end. English keeps it in the middle.",
      ]),
      RV(
        [
          {
            question: "Every sentence needs a…",
            options: ["verb", "object", "describing word"],
            correctIndex: 0,
            explanation: "A sentence without a verb is not a sentence.",
            from: "Chapter 08 · Lesson 4",
          },
          {
            question: "Being verbs are…",
            options: ["is, am, are", "run, eat, read", "big, hot, new"],
            correctIndex: 0,
            explanation: "is, am and are show a state — they are full verbs.",
            from: "Chapter 08 · Lesson 4",
          },
          {
            question: "Commands have no written subject. The hidden subject is…",
            options: ["you", "I", "we"],
            correctIndex: 0,
            explanation: "“Sit down.” speaks to you — the subject is you, hidden.",
            from: "Chapter 08 · Lesson 3",
          },
          {
            question: "“We drink tea.” — “we” is…",
            options: ["a pronoun subject", "a naming word", "the object"],
            correctIndex: 0,
            explanation: "We replaces a naming word and does the subject job.",
            from: "Chapter 07 · Lesson 5",
          },
        ],
        { title: "Look back — check your base" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Hints are there when you need them.",
        questions: [
          REORD(
            "Put the words in English order.",
            "I drink water",
            fb(
              "I drink water",
              "Subject, verb, object: the doer first, the action second, the receiver last.",
              "The verb never opens a statement.",
            ),
            { hints: ["Say the three box names as you place the words."] },
          ),
          REORD(
            "Put the words in English order: fish / cats / eat.",
            "Cats eat fish",
            fb(
              "Cats eat fish",
              "Who eats? cats. What happens? eat. What receives? fish.",
              "The doer never comes second in English.",
            ),
            { hints: ["Who eats? Start with the doer."] },
          ),
          MCQ(
            "Which word order is correct English?",
            [
              ["a", "Likes I pizza."],
              ["b", "I like pizza."],
              ["c", "Pizza like I."],
            ],
            "b",
            fb(
              "I like pizza.",
              "English statements follow subject, verb, object.",
              "The other two put the verb or the object first — that is not English order.",
            ),
            { hints: ["English starts with the doer of the action."] },
          ),
          FB(
            "Complete the rule.",
            "English word order is subject, ___, object.",
            ["verb"],
            fbx(
              "verb",
              "The middle box holds the verb. It tells us what happens.",
              "The verb stands second — never first, never last.",
              { english: "We speak English.", translation: "Subject: we. Verb: speak. Object: English." },
            ),
            { hints: ["The middle box. It tells us what happens."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints — the machine is yours.",
        questions: [
          REORD(
            "Put the words in order.",
            "The cat drinks milk",
            fb(
              "The cat drinks milk",
              "Subject, verb, object: the cat drinks milk.",
            ),
          ),
          CORR(
            "Fix the word order.",
            "Likes I pizza.",
            ["I like pizza."],
            fb(
              "I like pizza.",
              "Subject first, verb second, object third.",
              "“Likes I pizza.” is not English order.",
            ),
          ),
          MCQ(
            "In English statements, where does the verb go?",
            [
              ["a", "At the end, after the object"],
              ["b", "In the middle, before the object"],
              ["c", "First, before the subject"],
            ],
            "b",
            fb(
              "In the middle, before the object",
              "English is S-V-O: the verb stands second, the object waits last.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "SVO factory",
      instructions:
        "Build six sentences from these mixed words: “fish / cats / eat”, “a book / reads / my brother”, “water / we / drink”. Then build two of your own with words from Chapter 06. Label the three boxes in every sentence.",
      minWords: 18,
      maxWords: 70,
    },
    homework: [
      "Label S, V and O in three sentences you find today.",
      "Build one SVO sentence about your morning and one about your evening.",
      "Say one sentence in Urdu or Hindi, then rebuild it in English order. Feel where the verb moves.",
    ],
  },

  // =========================================================================
  // Lesson 6 — Reading Simple Sentences and Chapter Review
  // =========================================================================
  {
    slug: "ch-08-l-06",
    minutes: 35,
    description:
      "Your first real English paragraph: read a run of simple sentences with understanding, then take the Chapter 08 review and finish Pre-A1.",
    outcomes: [
      "Read a five-sentence paragraph of simple English with full understanding",
      "Answer questions about a simple text",
      "Read a paragraph with the right voice at every end mark",
      "Answer the Chapter 08 review questions",
    ],
    blocks: [
      LI(
        "This is the last lesson of Pre-A1. You will read your first real paragraph of English. You know every word in it. You know every pattern. Read each sentence to its full stop, and the paragraph will open by itself. Then you take the chapter review.",
        [
          "You can build sentences with subject, verb and object (Lesson 5).",
          "You know the three signals and the end marks (Lesson 1).",
          "You can read simple words fluently (Chapter 05).",
        ],
      ),
      vocGlossary("Review words for this lesson", [
        { word: "sentence", partOfSpeech: "noun", definition: "A group of words that expresses one complete idea." },
        { word: "complete sentence", partOfSpeech: "noun", definition: "A sentence with a subject and a verb: a whole idea." },
        { word: "word order", partOfSpeech: "noun", definition: "The fixed position of words: subject, verb, object." },
        { word: "full stop", partOfSpeech: "noun", definition: "The dot (.) that ends a statement." },
      ]),
      H("Your first paragraph"),
      T(
        "Read this short paragraph slowly. You know every word, every pattern and every signal in it. This is what Pre-A1 English looks like when it comes together.",
      ),
      {
        type: "definition",
        term: "paragraph",
        partOfSpeech: "noun",
        definition:
          "A paragraph is a group of sentences about one idea. Each sentence starts with a capital letter and ends with a full stop.",
        example: {
          english: "My name is Ana. I am a student.",
          translation: "Two sentences, one paragraph, one topic: Ana.",
        },
      },
      ST(
        "Read a paragraph in three steps",
        [
          {
            title: "Step 1 — Read each sentence to its full stop",
            text: "Do not jump over the marks. Each full stop closes one idea.",
            examples: [{ english: "My name is Ana. → one idea ends.", note: "Stop at the dot, then continue." }],
          },
          {
            title: "Step 2 — Find who does the action",
            text: "In each sentence, ask who? Then watch what they do.",
            examples: [
              { english: "I read books and Rex sleeps. → who? I and Rex.", note: "Two doers, two verbs, one sentence." },
            ],
          },
          {
            title: "Step 3 — Read the whole paragraph with your voice",
            text: "Let your voice go down at every full stop. Read it twice: slowly, then at talking speed.",
            examples: [
              { english: "My family is small and happy.", note: "The last sentence closes the paragraph." },
            ],
          },
        ],
      ),
      EXD(
        "Read these short texts",
        [
          {
            english:
              "My name is Ana. I am a student. I have a small dog. His name is Rex. Rex is black and white. Every day, Rex runs in the garden. I read books and Rex sleeps. In the morning, we eat bread and drink milk. My family is small and happy.",
            note: "Nine sentences about one small family. Read to every full stop.",
            domain: "family",
          },
          { english: "The shop opens at nine. It closes at six. We buy bread there.", note: "Three sentences, one shop.", domain: "shopping" },
          { english: "I am Omar. I am a student. I read books. I like my school.", note: "Four sentences that introduce a person.", domain: "education" },
          { english: "The park is big. The trees are green. Birds sing in the morning.", note: "Three being-verb sentences about nature.", domain: "nature" },
          { english: "My day: I wake up at six. I drink tea. I go to work.", note: "Three action verbs carry a whole morning.", domain: "work" },
          { english: "Sara: Hi! How are you? I am fine. See you at school.", note: "A message is a run of short sentences. Read each one to its end mark.", domain: "social" },
          { english: "The cat sleeps. The baby sleeps. The house is quiet.", note: "Three sentences, one quiet home.", domain: "home" },
          { english: "We take the bus. The bus is late. We walk to school.", note: "Read the small story: three sentences, one trip.", domain: "travel" },
        ],
        "Eight short texts. Read each one twice: once for the words, once for the meaning.",
      ),
      TB(
        "Check your understanding",
        ["Question", "Answer"],
        [
          ["Who is Rex?", "Ana's small dog"],
          ["What colour is Rex?", "black and white"],
          ["What does Ana do with books?", "she reads them"],
          ["Who eats bread and drinks milk?", "Ana and Rex (we)"],
        ],
        "If you can answer these, you understood the paragraph.",
      ),
      AU(
        "Listen: the paragraph, read slowly",
        "My name is Ana. I am a student. I have a small dog. His name is Rex. Rex is black and white. Every day, Rex runs in the garden.",
        0.85,
      ),
      US(
        [
          {
            situation: "A message from a friend",
            example: "“Hi! How are you? I am fine. See you at school.”",
            note: "Read each sentence to its end mark. The voice does the rest.",
          },
          {
            situation: "A class notice",
            example: "“The class starts at nine. Please bring your book. We read together.”",
            note: "Three sentences, three instructions, one notice.",
          },
          {
            situation: "A children's book at bedtime",
            example: "“The cat sleeps. The moon is white.”",
            note: "Read with your voice: down at every full stop. Children listen for the voice.",
          },
          {
            situation: "A poster at the shop",
            example: "“The shop opens at nine. Bread is fresh in the morning.”",
            note: "Posters speak in short complete sentences so everyone understands fast.",
          },
          {
            situation: "A first message to a teacher",
            example: "“Hello. My name is Bilal. I am a student. Thank you.”",
            note: "Four short sentences make a polite first message.",
          },
        ],
        "Where you read groups of sentences",
        "Real reading is runs of sentences, not single lines. You now have every tool for it.",
      ),
      DL(
        "Read with me",
        "Hina reads the Ana paragraph to her little brother. He practises his voice at the end marks.",
        [
          ["Hina", "Read with me. My name is Ana. I am a student."],
          ["Sam", "My name is Ana. I am a student."],
          ["Hina", "Good. Where does your voice go down?"],
          ["Sam", "At the full stops. Ana. Student."],
          ["Hina", "Right. Now the dog part. I have a small dog. His name is Rex."],
          ["Sam", "I have a small dog. His name is Rex."],
          ["Hina", "And what does Rex do every day?"],
          ["Sam", "Rex runs in the garden."],
          ["Hina", "Now say the whole paragraph in your own words."],
          ["Sam", "Ana is a student. Rex runs in the garden. They are happy."],
        ],
      ),
      CMP(
        "Statement vs question",
        ["A statement (tells)", "A question (asks)"],
        [
          ["Word order", "Subject first: “She reads books.”", "The verb comes first with do: “Does she read books?”"],
          ["End mark", "A full stop", "A question mark"],
          ["Your voice", "Goes down", "Goes up"],
          ["Job", "Gives information", "Asks for information"],
        ],
        {
          intro: "Questions look different from statements. See the difference now; later chapters teach you to build questions yourself.",
          verdict:
            "When you read, let the question mark lift your voice. When you write a statement, let the full stop bring it down.",
        },
      ),
      MS(
        [
          [
            "I read one word at a time and stop after every word.",
            "I read the whole sentence, from the capital letter to the end mark.",
            "Sentences carry meaning as wholes. Word-by-word reading breaks the flow.",
          ],
          [
            "I skip the end marks because they are small.",
            "I read the end marks with my voice: down for a full stop, up for a question mark.",
            "The marks are sound written down. They tell your voice where to go.",
          ],
          [
            "Rex runs in the garden. Rex is black. I read it as one long sentence.",
            "Rex runs in the garden. Rex is black. I read two sentences, with a pause between them.",
            "Each full stop closes one idea. Two ideas need two reads.",
          ],
          [
            "I answer questions about the paragraph before I read it.",
            "I read the paragraph first, slowly, and then answer.",
            "The answers live inside the sentences. Read first, answer second.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Read with your voice",
        "End marks are not decoration. Down for a full stop. Up for a question mark. A jump for an exclamation mark. Read every paragraph with its voice, and the meaning arrives with the sound.",
      ),
      H("Chapter 08 review — Pre-A1 graduation"),
      T(
        "You started this level with the alphabet. You finish it reading paragraphs and writing sentences. Answer the review questions below. Then write your own paragraph in the final task. Level A1 starts next. Welcome to beginner English.",
      ),
      FS({
        title: "Practise all four skills — chapter review",
        reading: {
          text: "In this chapter you learned the sentence itself. A sentence is a group of words that expresses one complete idea. Every sentence needs a verb — an action verb or a being verb. Fragments miss a part: you test them with two questions. The subject tells us who does the action. English word order is subject, verb, object. Read every sentence to its end mark, with your voice.",
          task: "Read the text two times. Then say the chapter's five big rules from memory.",
        },
        writing: {
          task: "Write your own paragraph like Ana's: at least five sentences — your name, one “I am…” sentence, one “I have…” sentence, and two SVO sentences about your day.",
          guide: ["My name is ___.", "I am a ___.", "I have a ___.", "I ___ every morning.", "We ___ together."],
          model:
            "My name is Ana. I am a student. I have a small dog. I drink tea every morning. We walk to school together.",
        },
        listening: {
          script:
            "Spelling check time. Listen and write. One: I drink milk. Two: The dog runs. Three: She is a teacher. Four: We read books. Check your capital letters and your full stops.",
          task: "Write the four sentences, then check them for the three signals.",
        },
        speaking: {
          task: "Introduce yourself in five sentences: your name, one “I am…” sentence, one “I have…” sentence and two SVO sentences about your day.",
          frames: [
            "My name is ___.",
            "I am a ___.",
            "I have a ___.",
            "I ___ every morning.",
            "My family is ___ and ___.",
          ],
          checklist: [
            "Every sentence started with a capital letter.",
            "Every sentence ended with the right mark.",
            "Every sentence had a verb.",
          ],
        },
      }),
      LSP(
        [
          gls("A full stop ends a sentence."),
          gls("English word order is subject, verb, object."),
          gls("A sentence without a verb is not a sentence."),
          gls("Read the sentence out loud."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "A paragraph is a group of sentences about one idea.",
        "Read each sentence to its end mark. Each full stop closes one idea.",
        "Read with your voice: down for a full stop, up for a question mark.",
        "Read first, answer second — the answers live inside the sentences.",
        "This chapter gave you the complete sentence: signals, subject, verb, order. Pre-A1 is finished.",
      ]),
      RV(
        [
          {
            question: "What are the three signals of a sentence?",
            options: ["Capital letter, complete idea, end mark", "Subject, verb, object", "Noun, verb, adjective"],
            correctIndex: 0,
            explanation: "Every sentence starts big, finishes the idea, and ends with a mark.",
            from: "Chapter 08 · Lesson 1",
          },
          {
            question: "How do you find the subject of a sentence?",
            options: ["Ask “who?” before the verb", "Look at the last word", "Count the words"],
            correctIndex: 0,
            explanation: "The subject is the doer: ask “who?” and take the whole answer.",
            from: "Chapter 08 · Lesson 3",
          },
          {
            question: "is, am and are are…",
            options: ["being verbs", "action verbs", "nouns"],
            correctIndex: 0,
            explanation: "They show a state. They are full verbs.",
            from: "Chapter 08 · Lesson 4",
          },
          {
            question: "English word order in statements is…",
            options: ["subject, verb, object", "subject, object, verb", "verb, subject, object"],
            correctIndex: 0,
            explanation: "Subject first, verb second, object last — every time.",
            from: "Chapter 08 · Lesson 5",
          },
          {
            question: "Action words are called…",
            options: ["verbs", "nouns", "adjectives"],
            correctIndex: 0,
            explanation: "Action words are verbs — the Chapter 07 label.",
            from: "Chapter 07 · Lesson 3",
          },
          {
            question: "Numbers tell us…",
            options: ["how many", "how big", "how old"],
            correctIndex: 0,
            explanation: "Numbers tell us how many — from the first vocabulary chapter.",
            from: "Chapter 06 · Lesson 4",
          },
        ],
        { title: "Chapter 08 review — the whole chapter", intro: "Six questions from this chapter and the ones before it. Can you answer them all?" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Hints are there when you need them.",
        questions: [
          RD(
            "Read and answer.",
            "Ana and Rex",
            "My name is Ana. I am a student. I have a small dog. His name is Rex. Rex is black and white. Every day, Rex runs in the garden.",
            "Who is Rex?",
            [
              ["a", "Ana's small dog"],
              ["b", "Ana's brother"],
              ["c", "Ana's cat"],
            ],
            "a",
            fb(
              "Ana's small dog",
              "The paragraph says: “I have a small dog. His name is Rex.”",
              "Rex is the dog — the third and fourth sentences tell you.",
            ),
            { hints: ["Read the first three sentences slowly."] },
          ),
          MCQ(
            "What does a full stop tell your voice to do?",
            [
              ["a", "Go down"],
              ["b", "Go up"],
              ["c", "Jump"],
            ],
            "a",
            fb(
              "Go down",
              "A full stop closes a statement. The voice comes down with it.",
              "Up belongs to the question mark; a jump belongs to the exclamation mark.",
            ),
            { hints: ["A statement closes an idea. Where does your voice land?"] },
          ),
          DICT(
            "Listen and write the sentence.",
            "I drink milk every morning.",
            ["I drink milk every morning.", "i drink milk every morning"],
            fb(
              "I drink milk every morning.",
              "Subject, verb, object — then the time at the end.",
              "Start with a capital letter and finish with a full stop.",
            ),
            { hints: ["Start with the doer. Then the action. Then the rest."] },
          ),
          REORD(
            "Put the words in order.",
            "The dog runs in the garden",
            fb(
              "The dog runs in the garden",
              "Subject: the dog. Verb: runs. The place comes after the verb.",
              "The doer never comes second.",
            ),
            { hints: ["Who runs? Start with the doer."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints — you have everything.",
        questions: [
          REORD(
            "Put the words in order.",
            "My sister reads a book",
            fb(
              "My sister reads a book",
              "Subject, verb, object: my sister reads a book.",
            ),
          ),
          CORR(
            "Fix the mistake.",
            "Reads my sister books.",
            ["My sister reads books."],
            fb(
              "My sister reads books.",
              "Subject first, verb second, object third.",
              "“Reads my sister books.” puts the verb at the front.",
            ),
          ),
          MCQ(
            "A sentence without a verb is…",
            [
              ["a", "not a sentence"],
              ["b", "very short"],
              ["c", "a question"],
            ],
            "a",
            fb("not a sentence", "The verb is required. Without it the idea cannot complete."),
          ),
        ],
      },
    ],
    assignment: {
      title: "My first English paragraph",
      instructions:
        "Write a short paragraph about yourself, like Ana's. Use at least five sentences: your name, one “I am…” sentence, one “I have…” sentence, and two SVO sentences about your daily life. Check every sentence for the three signals before you finish.",
      minWords: 30,
      maxWords: 90,
    },
    homework: [
      "Read the Ana paragraph to someone at home, with your voice going down at every full stop.",
      "Find a short English text today — a message, a notice or a book page. Count its sentences.",
      "Write your own three-sentence paragraph about your family, then read it aloud twice.",
    ],
  },
];
