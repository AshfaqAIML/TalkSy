/**
 * PROMPT 57 production — Batch 4, Chapter 12: Be, Have and Do.
 *
 * Every lesson below is rewritten to the full v2 teaching standard:
 * lesson introduction + prerequisites, concept explanation, step-by-step
 * teaching, rules and patterns, 8+ worked examples with teaching notes,
 * real-life usage, comparison, common mistakes (wrong → right → reason),
 * guided practice (with hints), independent practice (no hints),
 * four-skill integration, validated Urdu/Hindi support, summary,
 * revision questions from earlier lessons, assignment and homework.
 *
 * This is the engine-verbs chapter: what be DOES (identity, description,
 * location — and forming its own negatives and questions by flipping),
 * have for possession, and do as BOTH a main verb and the helper that
 * carries questions and negatives for every other verb. Contractions are
 * taught as sound (weak forms, one-beat short forms), not just spelling,
 * and short answers never repeat the main verb. No bare conjugation
 * tables alone, no "practise more" filler — every form is taught with a
 * reason, a mistake it prevents, and a place in real life.
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

export const ch12Upgrades: LessonUpgrade[] = [
  // =========================================================================
  // Lesson 1 — Am, Is, Are: Affirmative
  // =========================================================================
  {
    slug: "ch-12-l-01",
    minutes: 25,
    description:
      "Meet be, the bridge verb of English: am, is and are with every pronoun, the contractions I'm, she's and we're, and the two jobs of the apostrophe-s.",
    outcomes: [
      "Match am, is and are to the right subject pronouns",
      "Use contractions (I'm, she's, it's, we're, they're) in speech",
      "Introduce yourself and describe people and places with be",
      "Tell the two jobs of 's apart: is and ownership",
    ],
    blocks: [
      LI(
        "This lesson meets the biggest verb in English: be. Be is not an action. It works like a bridge. It joins a person to a word about them. You will learn am, is and are — one for each pronoun group. Then you will say them fast, the natural way: I'm, she's, we're.",
        [
          "You know the subject pronouns: I, you, he, she, it, we, they (Chapter 11).",
          "You know that every sentence needs a verb (Chapter 08).",
          "You can read simple English sentences fluently (Chapter 05).",
        ],
      ),
      vocGlossary("Words for this lesson", [
        { word: "being verb", partOfSpeech: "noun", definition: "The verb that joins someone to who, how or where they are." },
        { word: "contraction", partOfSpeech: "noun", definition: "A short form: two words become one, with an apostrophe for the missing letters." },
        { word: "subject pronoun", partOfSpeech: "noun", definition: "The word that stands in front of the verb: I, you, he, she, it, we, they." },
        { word: "verb", partOfSpeech: "noun", definition: "The word that carries the action or the state of the sentence." },
      ]),
      H("The verb that is everywhere"),
      T(
        "Run, eat and sleep are actions. Be is different. It is a bridge. It joins a person to who they are, how they are, or where they are. Look: I am a student. She is happy. We are at home. The verb be does not run. It simply connects.",
      ),
      {
        type: "definition",
        term: "being verb",
        partOfSpeech: "verb",
        definition:
          "A being verb joins the subject to what it is, how it is, or where it is. Am, is and are are its present forms.",
        example: {
          english: "She is a doctor.",
          translation: "is joins she to the job doctor — no action, just a bridge.",
        },
      },
      ST(
        "Build a be sentence in three steps",
        [
          {
            title: "Step 1 — Choose the subject",
            text: "Start with the person or thing the sentence is about: I, she, the boys, my mother.",
            examples: [{ english: "My brother …", note: "The subject is who or what the sentence is about." }],
          },
          {
            title: "Step 2 — Choose the form of be",
            text: "Match be to the subject. I takes am. He, she and it take is. You, we and they take are.",
            examples: [
              { english: "My brother is six.", note: "One boy → is." },
              { english: "My brothers are six.", note: "More than one → are." },
            ],
          },
          {
            title: "Step 3 — Finish the idea",
            text: "Add who they are (a job), how they are (a feeling) or where they are (a place).",
            examples: [
              { english: "My brother is at school.", note: "A place finishes this sentence." },
              { english: "I am happy today.", note: "A feeling finishes this one." },
            ],
          },
        ],
      ),
      GR(
        "The be rule (present)",
        "I takes am. He, she and it take is. You, we and they take are. One person or thing → is; two or more → are.",
        [
          { english: "I am a student.", translation: "Only one pronoun takes am: I." },
          { english: "She is my teacher.", translation: "he, she, it → is." },
          { english: "They are at home.", translation: "you, we, they → are." },
        ],
        [
          "Names take is too: Sara is here. The dog is big. One name or one thing — is.",
        ],
      ),
      TB(
        "be and its contractions",
        ["Pronoun", "Full form", "Short form", "Example"],
        [
          ["I", "I am", "I'm", "I'm ten."],
          ["you", "you are", "you're", "You're kind."],
          ["he", "he is", "he's", "He's tall."],
          ["she", "she is", "she's", "She's my aunt."],
          ["it", "it is", "it's", "It's cold."],
          ["we", "we are", "we're", "We're late."],
          ["they", "they are", "they're", "They're here."],
        ],
        "The apostrophe marks the missing letters: the a of am in I'm, the a of are in you're.",
      ),
      AU(
        "Listen: two words become one",
        "I am. I'm. You are. You're. He is. He's. She is. She's. It is. It's. We are. We're. They are. They're. Hear the two words melt into one beat.",
        0.85,
      ),
      AU(
        "Listen: be in a real introduction",
        "Hello! I'm Sara. I'm a student. She's my teacher. We're in class one. It's a big school. They're my friends.",
        0.9,
      ),
      EXD(
        "be in real life",
        [
          { english: "I'm Omar. I'm from Egypt.", note: "Your first introduction uses am twice — short both times.", domain: "social" },
          { english: "She's a doctor at the city hospital.", note: "A job after a: a doctor. One woman → she's.", domain: "work" },
          { english: "My grandfather is old, but he's happy.", note: "Full form first, short form second — both are correct.", domain: "family" },
          { english: "The milk is cold.", note: "One thing → is. No action here, just a fact.", domain: "food" },
          { english: "We're at the market. It's busy.", note: "Two people → we're. A feeling can follow be.", domain: "shopping" },
          { english: "The classroom is small.", note: "Describe a place with is + a describing word.", domain: "education" },
          { english: "My phone is new.", note: "Things take be too. One phone → is.", domain: "technology" },
          { english: "The chairs are black and the tables are white.", note: "More than one chair → are. Two be-bridges in one sentence.", domain: "home" },
          { english: "The sea is blue today.", note: "Nature facts use be: the sea, the sun, the sky.", domain: "nature" },
        ],
        "Nine sentences from nine parts of life — all carried by one little bridge verb.",
      ),
      US(
        [
          {
            situation: "Introducing yourself at a club",
            example: "“Hi! I'm Aisha. I'm eleven.”",
            note: "Two short sentences with I'm — friendly and natural.",
          },
          {
            situation: "Telling a driver where you live",
            example: "“It's the white house near the shop.”",
            note: "it's points at one place — the house.",
          },
          {
            situation: "First day at school",
            example: "“This is my friend. We're in the same class.”",
            note: "we're covers two people at once.",
          },
          {
            situation: "A phone call home",
            example: "“Hi, Mum. I'm at the bus stop. It's cold.”",
            note: "Where you are + how it is: be twice in one message.",
          },
          {
            situation: "Showing a photo",
            example: "“That's my brother. He's tall!”",
            note: "that's = that is — the same bridge, pointing at something.",
          },
        ],
        "Where be lives",
        "You use be in the first minute of every meeting. It is the opening verb of English conversation.",
      ),
      DL(
        "New friends",
        "Omar meets Nina on his first day at a new school.",
        [
          ["Nina", "Hello! I'm Nina. I'm in class two."],
          ["Omar", "Hi, Nina. I'm Omar. I'm new."],
          ["Nina", "Welcome, Omar! This is my friend Bilal."],
          ["Bilal", "Hello, Omar. You're from Egypt, I think."],
          ["Omar", "Yes! My father is a teacher there. My mother is a doctor."],
          ["Bilal", "And your English is good!"],
          ["Omar", "Thank you. My teacher at home is very kind."],
          ["Nina", "Come. The classroom is this way. We're late!"],
        ],
      ),
      CMP(
        "The two jobs of 's",
        ["'s = is (contraction)", "'s = ownership"],
        [
          ["Meaning", "she's = she is", "Sara's book = the book of Sara"],
          ["Example", "“He's a good teacher.” = He is a good teacher.", "“Ali's bag is red.” = Ali owns the bag."],
          ["The test", "Say the sentence with is instead. Does it still work?", "Ask: who owns it? A name before a thing."],
          ["The sound", "Same sound — your ear cannot tell", "Same sound — the sentence tells you"],
        ],
        {
          intro: "The apostrophe-s has two jobs. Only the whole sentence shows which job it is doing.",
          verdict:
            "She's happy = she IS happy. Sara's book = Sara OWNS the book. Never look at the 's alone — read the full sentence.",
        },
      ),
      MS(
        [
          [
            "I is a student.",
            "I am a student.",
            "Only one pronoun takes am: I. Every other subject takes is or are.",
          ],
          [
            "She are my teacher.",
            "She is my teacher.",
            "One woman → she → is. are belongs to you, we and they.",
          ],
          [
            "They is at home.",
            "They are at home.",
            "They means more than one person → are.",
          ],
          [
            "Im ten years old.",
            "I'm ten years old.",
            "Every contraction needs its apostrophe. The missing letter gets a mark: I'm, not Im.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Contractions are not lazy English",
        "Some learners think short forms are bad style. The opposite is true. Friendly English contracts by default. I'm, she's, we're — these are the sounds of natural speech. Use the full forms when you write something formal, like a letter to a school.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My name is Sara. I am eleven. My mother is a doctor and my father is a teacher. We are a small family. My brother is a baby. He is one. Our home is near the school. It is an old house, but we are happy in it.",
          task: "Read the text two times. Then say every form of be you heard: am, is or are.",
        },
        writing: {
          task: "Write four sentences about yourself: your name, your age, your city and one feeling today. Use short forms at least twice.",
          guide: ["My name is ______.", "I'm ______ years old.", "My city is ______.", "Today I'm ______."],
          model: "My name is Ali. I'm twelve years old. My city is Lahore. Today I'm happy.",
        },
        listening: {
          script:
            "Hello! I'm Fatima. This is my sister. She's six. We're at the park. It's a beautiful day. They're my friends — look at them!",
          task: "Listen and count the contractions you hear.",
        },
        speaking: {
          task: "Introduce yourself and one friend with be. Use at least two contractions.",
          frames: ["I'm ______.", "This is my friend ______.", "She's / He's ______.", "We're ______."],
          checklist: [
            "I used am, is and are at least once each.",
            "I used at least two contractions.",
            "I spoke without reading.",
          ],
        },
      }),
      LSP(
        [
          gls("Am, is and are are the present of the verb be."),
          gls("being verb"),
          gls("contraction"),
          gls("I"),
          gls("she"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Be is a bridge, not an action. It joins a person to who, how or where they are.",
        "I takes am; he, she and it take is; you, we and they take are.",
        "In speech, be contracts: I'm, she's, it's, we're, they're.",
        "The apostrophe marks the missing letters of a contraction.",
        "One 's can mean is (she's tall) or ownership (Sara's book). The whole sentence tells you which.",
      ]),
      RV(
        [
          {
            question: "Which word replaces “the boy” in “The boy runs.”?",
            options: ["he", "she", "it"],
            correctIndex: 0,
            explanation: "The boy is one male person, so the subject pronoun is he.",
            from: "Chapter 11 · Lesson 1",
          },
          {
            question: "Every sentence needs a…",
            options: ["noun and an adjective", "verb", "question mark"],
            correctIndex: 1,
            explanation: "Every sentence needs a verb — and a being verb like is counts.",
            from: "Chapter 08 · Lesson 1",
          },
          {
            question: "Which sentence is in the correct English order?",
            options: ["Reads Ali books.", "Ali reads books.", "Books Ali reads."],
            correctIndex: 1,
            explanation: "English order is subject, verb, object: Ali (subject) reads (verb) books (object).",
            from: "Chapter 09 · Lesson 4",
          },
        ],
        { title: "Look back — check your base", intro: "Three quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "Your friend Sara is one girl. Which sentence is correct?",
            [
              ["a", "Sara are my friend."],
              ["b", "Sara is my friend."],
              ["c", "Sara am my friend."],
            ],
            "b",
            fbx(
              "Sara is my friend.",
              "Sara is one person → she → is. One person takes is.",
              "are fits you, we and they; am fits only I.",
              { english: "Sara is my friend. She is kind.", translation: "One girl → is, twice in a row." },
            ),
            { hints: ["Count the subject: one person or more than one?"] },
          ),
          FB(
            "Complete with the right form of be.",
            "I ___ a student.",
            ["am"],
            fb(
              "am",
              "The pronoun I takes am — always, in every sentence.",
              "is and are never fit with I.",
            ),
            { hints: ["Only one pronoun in English uses this form. Which one?"] },
          ),
          MATCH(
            "Match each pronoun to its form of be.",
            [
              ["p1", "I"],
              ["p2", "she"],
              ["p3", "we"],
            ],
            [
              ["b1", "am"],
              ["b2", "is"],
              ["b3", "are"],
            ],
            [
              ["p1", "b1"],
              ["p2", "b2"],
              ["p3", "b3"],
            ],
            fb(
              "I → am, she → is, we → are",
              "Each subject pronoun has its own form of be in the present.",
              "Mix the forms and the sentence breaks: “She am tired” is impossible.",
            ),
            { hints: ["One person: I or she. More than one person: we."] },
          ),
          LIS(
            "Listen and answer.",
            "My name is Bilal. I'm from Multan. My sister is a teacher and my brothers are students.",
            "Which form of be goes with the brothers?",
            ["are"],
            fb(
              "are",
              "Brothers is more than one person, so be becomes are.",
              "is fits one brother: my brother is a student.",
            ),
            { hints: ["Count the brothers: one person or more than one?"] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which sentence is correct?",
            [
              ["a", "It are cold today."],
              ["b", "It is cold today."],
              ["c", "It am cold today."],
            ],
            "b",
            fb("It is cold today.", "It is one thing, so be takes is.", "are fits you, we and they; am fits only I."),
          ),
          REORD(
            "Make the sentence.",
            "She is my aunt.",
            fb(
              "She is my aunt.",
              "The order is: subject (She) + be (is) + the rest of the idea.",
              "English always puts the subject before the verb.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "My friends is at the door.",
            ["My friends are at the door."],
            fb(
              "My friends are at the door.",
              "Friends is more than one person → are.",
              "is fits one friend: my friend is at the door.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "We're happy at our new school.",
            ["We're happy at our new school."],
            fb(
              "We're happy at our new school.",
              "We're is the short form of we are — two words, one beat. The apostrophe replaces the missing a.",
              "Write the apostrophe: were and we're are different words.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "My be introduction",
      instructions:
        "Write five sentences about yourself with be: your name, your age, your city, one school or job fact, and one feeling today. Use contractions at least twice. Example: “I'm Sara. I'm eleven. My city is Karachi. My school is big. Today I'm happy.”",
      minWords: 20,
      maxWords: 60,
    },
    homework: [
      "Say the be table from memory — first full, then short: I am / I'm, you are / you're, he is / he's, she is / she's, it is / it's, we are / we're, they are / they're.",
      "Describe three people you know: one with is + a job, one with is + a feeling, one with are + a place.",
      "Listen for contractions today — in songs, videos or calls. Count how many I'm, she's and it's you hear.",
    ],
  },

  // =========================================================================
  // Lesson 2 — Am, Is, Are: Negatives and Questions
  // =========================================================================
  {
    slug: "ch-12-l-02",
    minutes: 25,
    description:
      "Be says no and be asks — alone. Learn the flip for questions, isn't and aren't for negatives, and short answers like “Yes, I am.”",
    outcomes: [
      "Make be-negatives with isn't, aren't and I'm not",
      "Flip be to the front to make questions",
      "Answer be-questions with short answers",
      "Explain why be never needs do",
    ],
    blocks: [
      LI(
        "Be can say no, and be can ask. It does both jobs alone — no helper needed. In this lesson you flip be to the front for questions. You add not for negatives. Then you answer the short way: Yes, I am. No, she isn't.",
        [
          "You know the subject pronouns I, you, he, she, it, we, they (Chapter 11).",
          "You know a question ends with a question mark (Chapter 08).",
          "You can match am, is and are to every pronoun (Lesson 1).",
        ],
      ),
      vocGlossary("Words for this lesson", [
        { word: "question", partOfSpeech: "noun", definition: "A sentence that asks, and ends with a question mark." },
        { word: "short answer", partOfSpeech: "noun", definition: "A quick answer that repeats the verb: Yes, I am. No, she isn't." },
        { word: "contraction", partOfSpeech: "noun", definition: "A short form: two words become one, with an apostrophe." },
        { word: "being verb", partOfSpeech: "noun", definition: "The verb be: am, is, are." },
      ]),
      H("The flip"),
      T(
        "Listen to this: You are ready. Now listen again: Are you ready? The same words — new order. Be jumps over the subject. We call this the flip. Be is the only verb in English that flips alone.",
      ),
      {
        type: "definition",
        term: "short answer",
        partOfSpeech: "noun",
        definition:
          "A short answer repeats the verb of the question: Yes, I am. No, she isn't. Say the verb again — never the whole sentence.",
        example: {
          english: "Are you tired? — No, I'm not.",
          translation: "I'm not = I am not. The verb comes back, the rest stays away.",
        },
      },
      ST(
        "Flip a be sentence in three steps",
        [
          {
            title: "Step 1 — Find be",
            text: "Look at the statement. Find the small word: am, is or are.",
            examples: [{ english: "She is at home.", note: "is — the verb we will move." }],
          },
          {
            title: "Step 2 — Move it to the front",
            text: "Be jumps before the subject. Add a question mark at the end.",
            examples: [
              { english: "Is she at home?", note: "be + subject + the rest. That is the whole flip." },
            ],
          },
          {
            title: "Step 3 — Answer short",
            text: "Say the pronoun and be again: Yes, she is. Or: No, she isn't.",
            examples: [
              { english: "Is she at home? — Yes, she is.", note: "Echo be, not the whole sentence." },
            ],
          },
        ],
      ),
      GR(
        "Negatives and questions with be",
        "Negative: be + not → isn't, aren't, I'm not. Question: flip — be moves before the subject. Short answer: Yes/No + pronoun + be.",
        [
          { english: "She isn't tired.", translation: "is + not = isn't. Never “not is”." },
          { english: "They aren't at school.", translation: "are + not = aren't." },
          { english: "Am I late? — Yes, you are.", translation: "am flips too. The answer echoes am with are + you." },
        ],
        [
          "I'm not has no short form like “imn't” — English simply says I'm not.",
        ],
      ),
      TB(
        "One sentence, four ways",
        ["Form", "Sentence"],
        [
          ["Statement", "You are ready."],
          ["Negative", "You aren't ready."],
          ["Question", "Are you ready?"],
          ["Short answer (yes)", "Yes, I am."],
          ["Short answer (no)", "No, I'm not."],
        ],
        "One idea — and the verb be does all the work alone.",
      ),
      AU(
        "Listen: the flip",
        "He is at home. Is he at home? Yes, he is. They are tired. Are they tired? No, they aren't. Hear the verb move — and the voice go up.",
        0.85,
      ),
      AU(
        "Listen: short answers in talk",
        "Are you ready? Yes, I am. Is she a doctor? No, she isn't. Are we late? No, we aren't. Am I in the right class? Yes, you are.",
        0.9,
      ),
      EXD(
        "Saying no and asking with be",
        [
          { english: "I'm not tired. I'm hungry.", note: "Say what is NOT true — then what is.", domain: "everyday" },
          { english: "Are you from India? — Yes, I am.", note: "The short answer echoes am from the question.", domain: "social" },
          { english: "The shop isn't open on Sunday.", note: "isn't for one shop. Facts about places.", domain: "shopping" },
          { english: "We aren't late. The bus is late.", note: "aren't for we — then blame the bus with is.", domain: "travel" },
          { english: "Is your sister a student? — No, she isn't. She's a nurse.", note: "Flip, short answer, then the true fact.", domain: "family" },
          { english: "The questions aren't difficult.", note: "Plural questions → aren't. Calm before a test.", domain: "education" },
          { english: "It isn't cold today. The sun is warm.", note: "Weather talk with isn't — and good news after it.", domain: "nature" },
          { english: "My phone isn't new, but it works.", note: "Negate a fact, then add the good part.", domain: "technology" },
          { english: "Are the eggs ready? — Yes, they are.", note: "Plural subject → flip are; the answer echoes it.", domain: "food" },
        ],
        "Nine real moments where be says no or asks a question — always alone, never with do.",
      ),
      US(
        [
          {
            situation: "Checking a plan with a friend",
            example: "“Are you free tonight? — No, I'm not. Tomorrow?”",
            note: "Flip + short answer keeps talk short and friendly.",
          },
          {
            situation: "At the shop door",
            example: "“Is the shop open? — No, it isn't. It opens at nine.”",
            note: "it's / it isn't — the pronoun it covers the whole shop.",
          },
          {
            situation: "A new classmate asks",
            example: "“Are you from this city? — Yes, I am.”",
            note: "The first question every new friend asks.",
          },
          {
            situation: "On the bus",
            example: "“Excuse me. Is this seat free? — Yes, it is.”",
            note: "is + one thing (the seat) → short answer it is.",
          },
          {
            situation: "At the doctor",
            example: "“Are you tired in the morning? — Yes, I am.”",
            note: "Doctors ask with be — feelings are descriptions, not actions.",
          },
        ],
        "Asking and saying no in real life",
        "Questions with be open every conversation — doors, buses, shops and doctors.",
      ),
      DL(
        "Sunday morning",
        "Sana wakes her little brother Bilal. Their mother is out.",
        [
          ["Sana", "Bilal! Are you awake?"],
          ["Bilal", "Yes, I am. But I'm not happy. It's Monday tomorrow."],
          ["Sana", "The kitchen is free. Mum isn't home. She's at the market."],
          ["Bilal", "Are the eggs in the fridge?"],
          ["Sana", "No, they aren't. But the bread is on the table."],
          ["Bilal", "Hmm. Is the milk cold?"],
          ["Sana", "Yes, it is! You're always hungry, little brother."],
          ["Bilal", "I'm not always hungry… but today I am!"],
        ],
      ),
      CMP(
        "“Are you ready?” or “Do you ready?”",
        ["be: flips alone", "do: only for action verbs"],
        [
          ["The idea", "Ready describes you — be carries it", "do helps action verbs: like, eat, play"],
          ["The question", "Are you ready?", "Do you like tea?"],
          ["The mistake", "—", "“Do you ready?” is impossible: ready is not an action"],
          ["The rule", "be in the sentence? Flip it. No do.", "No be? Call do or does to the front."],
        ],
        {
          intro: "The number one beginner error with questions: putting do in front of be.",
          verdict:
            "Is there already a be-verb in the sentence? Flip it — alone. Is the verb an action word like eat or play? Then do arrives to help.",
        },
      ),
      MS(
        [
          [
            "Do you are ready?",
            "Are you ready?",
            "Be never needs do. The verb are flips to the front by itself.",
          ],
          [
            "I no am tired.",
            "I'm not tired.",
            "In English, not comes after be: I am not. Short: I'm not. “No” answers questions; it never sits inside a negative.",
          ],
          [
            "She not is happy.",
            "She isn't happy.",
            "The order is be + not: is not → isn't. “Not is” is not English.",
          ],
          [
            "Are you a student? — Yes, I am student.",
            "Are you a student? — Yes, I am.",
            "A short answer echoes only be. Stop after am — the rest of the sentence stays in the question.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "Never put do in front of be",
        "“Do you are ready?” and “Are you do ready?” are both impossible. Be flips alone: “Are you ready?” One verb at the front — never two.",
      ),
      N(
        "Short answers are polite, not lazy",
        "A question comes, and you answer with one small phrase: Yes, I am. No, they aren't. This is normal, friendly English. “Yes, I am a student” is correct — but long. In conversation, short wins.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Ali is at a new school. The school is big, but his class is small. His teacher isn't strict — she is kind. The students aren't slow; they are fast. “Are you happy here?” his mother asks. “Yes, I am,” Ali says. “It's a good school.”",
          task: "Read the text two times. Then find two negatives and two questions.",
        },
        writing: {
          task: "Write four things that are NOT true about you, with be + not.",
          guide: ["I'm not ______.", "My ______ isn't ______.", "We aren't ______."],
          model: "I'm not ten years old. I'm twelve. My hair isn't long. We aren't a big family.",
        },
        listening: {
          script:
            "Is your bag heavy? No, it isn't. Are your books new? Yes, they are. Is your teacher kind? Yes, she is. Are you ready for the test? No, I'm not!",
          task: "Listen. Which questions get a no?",
        },
        speaking: {
          task: "Ask a partner three be-questions and answer with short answers. Then swap roles.",
          frames: ["Are you ______?", "Is your ______ ______?", "Yes, I am. / No, I'm not.", "Yes, it is. / No, it isn't."],
          checklist: [
            "I flipped be in every question.",
            "I answered short: am, is or are again.",
            "My voice went up at the question mark.",
          ],
        },
      }),
      LSP(
        [
          gls("Be makes questions by itself; other verbs need do."),
          gls("short answer"),
          gls("question"),
          gls("contraction"),
          gls("Am, is and are are the present of the verb be."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Negative with be: be + not → isn't, aren't, I'm not.",
        "Question with be: the flip — be moves before the subject.",
        "Short answers echo be: Yes, I am. No, she isn't. Yes, they are.",
        "Be never needs do. “Do you are ready?” is impossible.",
        "Your voice goes up at the end of a be-question.",
      ]),
      RV(
        [
          {
            question: "Which word is a being verb?",
            options: ["run", "is", "eat"],
            correctIndex: 1,
            explanation: "is is a form of be — the being verb you met in the sentences chapter.",
            from: "Chapter 08 · Lesson 4",
          },
          {
            question: "The word she replaces…",
            options: ["a thing", "one female person", "many people"],
            correctIndex: 1,
            explanation: "She stands for one female person — a subject pronoun.",
            from: "Chapter 11 · Lesson 1",
          },
          {
            question: "Which mark ends a question?",
            options: [".", "?", "!"],
            correctIndex: 1,
            explanation: "Questions end with a question mark — and your voice goes up.",
            from: "Chapter 08 · Lesson 1",
          },
        ],
        { title: "Look back — check your base", intro: "Three quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "Choose the correct question.",
            [
              ["a", "Is you tired?"],
              ["b", "Are you tired?"],
              ["c", "Do you are tired?"],
            ],
            "b",
            fbx(
              "Are you tired?",
              "you takes are — and be flips to the front alone.",
              "“Is you” mixes forms; “Do you are” puts two verbs at the front.",
              { english: "Are you happy? — Yes, I am.", translation: "Flip are; answer with am + I." },
            ),
            { hints: ["First pick the right be-form for you. Then flip it."] },
          ),
          FB(
            "Complete the short answer.",
            "Are they at school? — Yes, they ___.",
            ["are"],
            fb(
              "are",
              "The short answer repeats the verb of the question — are.",
              "“Yes, they at school” is broken: the verb must come back.",
            ),
            { hints: ["Listen to the question. Which verb do you hear?"] },
          ),
          MATCH(
            "Match each statement to its flipped question.",
            [
              ["s1", "He is at home."],
              ["s2", "They are late."],
              ["s3", "I am in class two."],
            ],
            [
              ["q1", "Am I in class two?"],
              ["q2", "Is he at home?"],
              ["q3", "Are they late?"],
            ],
            [
              ["s1", "q2"],
              ["s2", "q3"],
              ["s3", "q1"],
            ],
            fb(
              "He is at home. → Is he at home? · They are late. → Are they late? · I am in class two. → Am I in class two?",
              "The flip moves be before the subject. Everything else stays in place.",
              "Only be moves — never the subject, never a do.",
            ),
            { hints: ["Move the little verb to the front and add a question mark."] },
          ),
          LIS(
            "Listen and answer.",
            "Is your mother a teacher? No, she isn't. She's a doctor.",
            "What is the mother's job?",
            ["a doctor", "doctor", "She's a doctor.", "She is a doctor."],
            fb(
              "She's a doctor.",
              "First comes the short answer no, then the true fact after it.",
              "The question used is, so the answer echoes it: isn't.",
            ),
            { hints: ["The answer comes after “No, she isn't.” Listen for the job."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which negative is correct?",
            [
              ["a", "They isn't ready."],
              ["b", "They aren't ready."],
              ["c", "They not are ready."],
            ],
            "b",
            fb("They aren't ready.", "they + are → aren't. The negative sticks to the verb.", "isn't fits he, she and it; “not are” is the wrong order."),
          ),
          REORD(
            "Make the question.",
            "Are you from Multan?",
            fb(
              "Are you from Multan?",
              "The flip: are + you + from + the city + the question mark.",
              "Statements say; questions ask — the verb goes first.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "I no am hungry.",
            ["I'm not hungry.", "I am not hungry."],
            fb(
              "I'm not hungry.",
              "be + not: I am not, short I'm not. “No” answers questions — it never makes negatives.",
              "The negative word always comes after be, never before it.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "She isn't at home today.",
            ["She isn't at home today."],
            fb(
              "She isn't at home today.",
              "isn't = is not. One word, one apostrophe — the apostrophe replaces the o of not.",
              "Write the apostrophe: “isnt” and “is not” both miss the short form.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Flip it four times",
      instructions:
        "Write four statements with be. Then flip each one into a question. Then answer each question with a short answer. Use is, are and am at least once. Example: “The shop is open. Is the shop open? Yes, it is.”",
      minWords: 18,
      maxWords: 60,
    },
    homework: [
      "Ask three be-questions to a friend or family member today. Answer each one with a short answer.",
      "Write five things that are not true today, with isn't or aren't. Example: “The sun isn't hot today.”",
      "Say one sentence four ways out loud: statement, negative, question, short answer.",
    ],
  },

  // =========================================================================
  // Lesson 3 — Was and Were
  // =========================================================================
  {
    slug: "ch-12-l-03",
    minutes: 20,
    description:
      "Move be into the past: was with I, he, she and it; were with you, we and they. The flip and the short answers stay the same.",
    outcomes: [
      "Use was and were correctly with all pronouns",
      "Make past be questions and negatives with wasn't and weren't",
      "Give short answers with was and were",
      "Talk about yesterday with time words",
    ],
    blocks: [
      LI(
        "Yesterday you were somewhere. Yesterday you felt something. English uses the past of be for this: was and were. The time moves back, but the machines you know stay the same. The flip stays. The short answers stay.",
        [
          "You know singular means one and plural means more than one (Chapter 10).",
          "You can use he, she and it for people and things (Chapter 11).",
          "You can flip be and give short answers (Lesson 2).",
        ],
      ),
      vocGlossary("Time words for the past", [
        { word: "day", partOfSpeech: "noun", definition: "Twenty-four hours — yesterday was a day." },
        { word: "week", partOfSpeech: "noun", definition: "Seven days. Last week is finished." },
        { word: "month", partOfSpeech: "noun", definition: "About thirty days. Last month is finished." },
        { word: "year", partOfSpeech: "noun", definition: "Twelve months. Last year is finished." },
      ]),
      H("The time machine: be goes back"),
      T(
        "Am, is and are live in the present. Move the time back, and be changes shape. I am becomes I was. She is becomes she was. They are becomes they were. Everything else stays the same.",
      ),
      {
        type: "definition",
        term: "the past of be",
        partOfSpeech: "verb",
        definition:
          "Was and were are the past forms of be. Was fits I, he, she and it. Were fits you, we and they.",
        example: {
          english: "I was at home yesterday.",
          translation: "was moves the idea to before now — one small word carries the whole past.",
        },
      },
      ST(
        "Talk about yesterday in three steps",
        [
          {
            title: "Step 1 — Choose your time",
            text: "Say when: yesterday, last week, last month, last year. Time words tell the listener: this is the past.",
            examples: [{ english: "Yesterday… Last week…", note: "Time first — the listener is ready for the past." }],
          },
          {
            title: "Step 2 — Pick was or were",
            text: "I, he, she and it take was. You, we and they take were.",
            examples: [
              { english: "She was at the market.", note: "One woman → was." },
              { english: "We were at the market.", note: "More people → were." },
            ],
          },
          {
            title: "Step 3 — Flip and answer like before",
            text: "Was she at the market? Yes, she was. Were you there? Yes, I was. The machines from Lesson 2 still work.",
            examples: [
              { english: "Were you there? — Yes, I was.", note: "you → were in the question; I → was in the answer." },
            ],
          },
        ],
      ),
      GR(
        "The was/were rule",
        "Past of be: I, he, she, it → was; you, we, they → were. Negatives: wasn't, weren't. Questions flip like the present: Was he…? Were they…?",
        [
          { english: "I was tired.", translation: "I takes was — never were." },
          { english: "We were at school.", translation: "we → were." },
          { english: "Was it cold? — Yes, it was.", translation: "Flip was; the short answer echoes was." },
        ],
        [
          "you always takes were — even for one person: “You were kind yesterday.”",
        ],
      ),
      TB(
        "was and were across the pronouns",
        ["Pronoun", "Present", "Past", "Negative"],
        [
          ["I", "am", "was", "wasn't"],
          ["he / she / it", "is", "was", "wasn't"],
          ["you", "are", "were", "weren't"],
          ["we", "are", "were", "weren't"],
          ["they", "are", "were", "weren't"],
        ],
        "The past is easier than the present: only two forms for everyone.",
      ),
      AU(
        "Listen: was and were",
        "I was. You were. He was. She was. It was. We were. They were. Wasn't. Weren't. Say each row with me.",
        0.85,
      ),
      AU(
        "Listen: yesterday talk",
        "I was at home yesterday. Were you at school? Yes, I was. Was she there? No, she wasn't. We were happy.",
        0.9,
      ),
      EXD(
        "Yesterday with be",
        [
          { english: "I was at the market yesterday.", note: "Time word + was: the easiest past sentence.", domain: "shopping" },
          { english: "We were at the sea last week.", note: "we → were. Memories start with were.", domain: "nature" },
          { english: "My grandmother was a teacher.", note: "Jobs for life: was + a + job.", domain: "family" },
          { english: "The bus was late this morning.", note: "Past trouble with was — one bus.", domain: "travel" },
          { english: "The test wasn't difficult.", note: "wasn't = was not. Good news about the past.", domain: "education" },
          { english: "They weren't at home last night.", note: "More than one person → weren't.", domain: "everyday" },
          { english: "Was your food cold? — Yes, it was.", note: "Flip + short answer with was.", domain: "food" },
          { english: "My phone was dead at work.", note: "Technology fails in the past too: one phone → was.", domain: "technology" },
          { english: "The game was great! You were fast.", note: "you → were, even for one player.", domain: "sport" },
        ],
        "Nine trips back in time — every one carried by was or were.",
      ),
      US(
        [
          {
            situation: "Monday morning at school",
            example: "“Were you at the match? — Yes, I was!”",
            note: "Weekend stories start with were + you.",
          },
          {
            situation: "Family dinner talk",
            example: "“My mother was in Lahore last month.”",
            note: "One woman, past time → was.",
          },
          {
            situation: "At the station",
            example: "“The train wasn't late. It was early.”",
            note: "Past facts about things with was.",
          },
          {
            situation: "Old photos",
            example: "“Look! I was a baby. We were so small.”",
            note: "Photos pull the past into the room — was and were everywhere.",
          },
          {
            situation: "After the exam",
            example: "“The questions weren't hard. I was ready.”",
            note: "weren't for plural questions, was for your feeling.",
          },
        ],
        "Where the past of be lives",
        "Every story about yesterday runs on was and were.",
      ),
      DL(
        "Old photos",
        "Sara and her grandmother look at an old photo book.",
        [
          ["Sara", "Dadi, look at this photo! Were you at the sea?"],
          ["Grandmother", "Yes, I was. That was sixty years ago."],
          ["Sara", "You were so tall! And who is this man?"],
          ["Grandmother", "That was my brother. He was a fisherman."],
          ["Sara", "And the small house? Was it your home?"],
          ["Grandmother", "Yes, it was. Life wasn't easy, but we were happy."],
          ["Sara", "And the white horse?!"],
          ["Grandmother", "Ha! The horse was my friend. Its name was Chand."],
        ],
      ),
      CMP(
        "Now or before?",
        ["Present: is / are", "Past: was / were"],
        [
          ["Time", "now, today", "yesterday, last week, last year"],
          ["With he", "He is at school.", "He was at school."],
          ["With they", "They are tired.", "They were tired."],
          ["The question", "Is it cold?", "Was it cold?"],
        ],
        {
          intro: "Same subject, same idea — only the time changes the verb.",
          verdict:
            "Say the time word in your head first. Now → is / are. Before → was / were. Nothing else in the sentence changes.",
        },
      ),
      MS(
        [
          [
            "Was you at the party?",
            "Were you at the party?",
            "you always takes were — in questions too. Was fits I, he, she and it only.",
          ],
          [
            "I were at home yesterday.",
            "I was at home yesterday.",
            "I takes was. Only you, we and they take were.",
          ],
          [
            "They was tired after the game.",
            "They were tired after the game.",
            "They means more than one person → were.",
          ],
          [
            "She don't was happy.",
            "She wasn't happy.",
            "Be makes its own negative: was + not = wasn't. do never helps be.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "The past is your friend",
        "The present of be has three forms: am, is, are. The past has only two: was and were. And was sounds the same for I, he, she and it. Less to remember — and the flip and the short answers work exactly like Lesson 2.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Last month was a big month for Ali. His school was one hundred years old. The party was on Friday. The students were in the garden. Ali's grandmother was there. “Were you nervous?” she asked. “No, I wasn't,” said Ali. “I was happy!” The food was great, and the day was long. It was a beautiful party.",
          task: "Read the text two times. Then find three was-sentences and two were-sentences.",
        },
        writing: {
          task: "Write four sentences about yesterday: where you were, how you were, who was with you. Add one question with was or were.",
          guide: ["Yesterday I was ______.", "The food was ______.", "We were ______.", "Were you ______?"],
          model: "Yesterday I was at home. The food was good. My brothers were with me. Were you at school?",
        },
        listening: {
          script:
            "Where were you yesterday? I was at my grandmother's home. Was your sister there? No, she wasn't. She was at school. Were your cousins there? Yes, they were!",
          task: "Listen. Who was at the grandmother's home?",
        },
        speaking: {
          task: "Tell a partner three things about last week. Use was and were at least once each. Then ask one question: Were you…?",
          frames: ["Last week I was ______.", "We were ______.", "It wasn't ______.", "Were you ______?"],
          checklist: [
            "I used was and were.",
            "I said a time word: yesterday, last week…",
            "I asked one question with was or were.",
          ],
        },
      }),
      LSP(
        [
          gls("Was and were are the past of be."),
          gls("Be makes questions by itself; other verbs need do."),
          gls("day"),
          gls("week"),
          gls("year"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Was and were are the past of be.",
        "I, he, she and it take was; you, we and they take were.",
        "Negatives: wasn't, weren't. Questions flip: Was he…? Were you…?",
        "Time words put the sentence in the past: yesterday, last week, last year.",
        "you always takes were — even for one person.",
      ]),
      RV(
        [
          {
            question: "Which pronoun replaces “my grandmother” as a subject?",
            options: ["she", "her", "they"],
            correctIndex: 0,
            explanation: "My grandmother is one woman → she, the subject pronoun.",
            from: "Chapter 11 · Lesson 1",
          },
          {
            question: "“The children are happy.” How many children are happy?",
            options: ["one", "more than one", "none"],
            correctIndex: 1,
            explanation: "Children is a plural noun, so be becomes are.",
            from: "Chapter 10 · Lesson 2",
          },
          {
            question: "In “Ali reads books.”, what is “books”?",
            options: ["the subject", "the verb", "the object"],
            correctIndex: 2,
            explanation: "Books receives the action — the object comes after the verb.",
            from: "Chapter 09 · Lesson 2",
          },
        ],
        { title: "Look back — check your base", intro: "Three quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "You ask about ONE other person yesterday: “Where ___ Sara?” Which past form fits?",
            [
              ["a", "were"],
              ["b", "was"],
              ["c", "is"],
            ],
            "b",
            fbx(
              "was",
              "One girl, past time → was. “Where was Sara?”",
              "were fits you, we and they; is is present — yesterday needs the past.",
              { english: "Where was Ali yesterday? He was at home.", translation: "One boy, past time → was." },
            ),
            { hints: ["Count the people, then check the time: now or before?"] },
          ),
          FB(
            "Complete with the past of be.",
            "We ___ at school yesterday.",
            ["were"],
            fb(
              "were",
              "we → were in the past. Yesterday tells you the time.",
              "was never fits we; are is present.",
            ),
            { hints: ["Think of you, we and they in the past."] },
          ),
          MATCH(
            "Match each question to its short answer.",
            [
              ["q1", "Was she at home?"],
              ["q2", "Were you there?"],
              ["q3", "Was it cold?"],
            ],
            [
              ["a1", "Yes, I was."],
              ["a2", "Yes, she was."],
              ["a3", "Yes, it was."],
            ],
            [
              ["q1", "a2"],
              ["q2", "a1"],
              ["q3", "a3"],
            ],
            fb(
              "Was she at home? → Yes, she was. · Were you there? → Yes, I was. · Was it cold? → Yes, it was.",
              "A short answer echoes the past verb of its question — was or were.",
              "The pronoun changes too: “you” in the question becomes “I” in the answer.",
            ),
            { hints: ["The pronoun changes: “you” in a question becomes “I” in the answer."] },
          ),
          LIS(
            "Listen and answer.",
            "Where were you last Friday? We were at the market with my uncle. The fruit was cheap.",
            "Where were they last Friday?",
            ["at the market", "the market", "At the market.", "They were at the market."],
            fb(
              "They were at the market.",
              "The question and the answer both use were — the past of be for we and they.",
              "The fruit was cheap — but the place is the answer here.",
            ),
            { hints: ["Listen for the place words after “were”."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which sentence is correct?",
            [
              ["a", "You was kind yesterday."],
              ["b", "You were kind yesterday."],
              ["c", "You are kind yesterday."],
            ],
            "b",
            fb("You were kind yesterday.", "you → were, always — and yesterday asks for the past.", "was fits I, he, she and it; are is present."),
          ),
          CORR(
            "Find and correct the mistake.",
            "Was you at the party?",
            ["Were you at the party?"],
            fb(
              "Were you at the party?",
              "you takes were — even in questions, even for one person.",
              "Was fits I, he, she and it only.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "I wasn't at school yesterday.",
            ["I wasn't at school yesterday."],
            fb(
              "I wasn't at school yesterday.",
              "wasn't = was not. The apostrophe replaces the o.",
              "Keep the n and the t together: wasn't, one small word.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Yesterday report",
      instructions:
        "Write five sentences about yesterday: where you were, how you were, who was with you, what was good, and what was not good. Use was and were at least once each, and include one question. Example: “Yesterday I was at the park. My friends were with me.”",
      minWords: 18,
      maxWords: 60,
    },
    homework: [
      "Say where you were at three times yesterday: morning, afternoon, evening.",
      "Ask one person: “Were you tired yesterday?” Answer with a short answer.",
      "Find one old photo and say two past sentences about it: “I was… We were…”",
    ],
  },

  // =========================================================================
  // Lesson 4 — Have and Has
  // =========================================================================
  {
    slug: "ch-12-l-04",
    minutes: 20,
    description:
      "The ownership verb: I have, she has. Talk about your family and your things — and ask “Do you have…?” questions.",
    outcomes: [
      "Use have and has correctly with all pronouns",
      "Talk about your family and your possessions",
      "Ask questions with “Do you have…?” and “Does…have…?”",
      "Understand “Have you got…?” when you hear it",
    ],
    blocks: [
      LI(
        "Now meet the second engine: have. Be says who you are. Have says what is yours. You have a family. You have a phone. You have two eyes! And one small change separates the forms: I have, but she has.",
        [
          "You know the possessive words my, your, his and her (Chapter 11).",
          "You know singular means one and plural means more than one (Chapter 10).",
          "You can introduce your family with “This is my…” (Chapter 06).",
        ],
      ),
      vocGlossary("Ownership words you already know", [
        { word: "my", partOfSpeech: "adjective", definition: "It shows that a thing belongs to the speaker." },
        { word: "your", partOfSpeech: "adjective", definition: "It shows that a thing belongs to the person you talk to." },
        { word: "his", partOfSpeech: "adjective", definition: "It shows that a thing belongs to one male person." },
        { word: "her", partOfSpeech: "adjective", definition: "It shows that a thing belongs to one female person." },
        { word: "our", partOfSpeech: "adjective", definition: "It shows that a thing belongs to us." },
        { word: "their", partOfSpeech: "adjective", definition: "It shows that a thing belongs to them." },
      ]),
      H("The verb of ownership"),
      T(
        "Look around you. You have a phone. You have a family. You have two eyes! English uses have for all of this. And here is the trick: I have, but she has. One small s for one other person.",
      ),
      {
        type: "definition",
        term: "have / has",
        partOfSpeech: "verb",
        definition:
          "Have shows that something belongs to someone. With he, she and it, have becomes has.",
        example: {
          english: "She has a new phone.",
          translation: "has = have for one other person. The s marks the owner.",
        },
      },
      ST(
        "Say what is yours in three steps",
        [
          {
            title: "Step 1 — Choose the owner",
            text: "Start with the owner: I, my sister, we, they.",
            examples: [{ english: "My sister …", note: "One owner — a girl." }],
          },
          {
            title: "Step 2 — Choose have or has",
            text: "I, you, we and they take have. He, she and it take has.",
            examples: [
              { english: "My sister has …", note: "One girl → has." },
              { english: "My sisters have …", note: "More than one → have." },
            ],
          },
          {
            title: "Step 3 — Add the thing",
            text: "Add the thing with a or a number: a dog, two brothers, rice.",
            examples: [
              { english: "My sister has a dog.", note: "a + one thing." },
              { english: "We have rice at home.", note: "Food counts too — have is not only for objects." },
            ],
          },
        ],
      ),
      GR(
        "The have/has rule",
        "I, you, we and they have. He, she and it has. Questions and negatives call do: Do you have…? She doesn't have…",
        [
          { english: "I have two brothers.", translation: "I → have." },
          { english: "He has a red bag.", translation: "he → has. The s marks one other person." },
          { english: "Do you have a pen? — Yes, I do.", translation: "The question calls do; have stays plain." },
        ],
        [
          "In “Does she have a car?”, have loses its s — the s moves into does. Never “Does she has…?”",
        ],
      ),
      TB(
        "have and has across the owners",
        ["Owner", "Verb", "Example"],
        [
          ["I / you / we / they", "have", "We have a big garden."],
          ["he / she / it", "has", "He has a black cat."],
          ["one name (Sara, Ali)", "has", "Sara has a new phone."],
          ["two names or things", "have", "Ali and Sara have one bicycle."],
        ],
        "One owner who is not you → has. Everything else → have.",
      ),
      AU(
        "Listen: have and has",
        "I have. You have. He has. She has. It has. We have. They have. Now with things: I have a pen. She has a book. They have a car.",
        0.85,
      ),
      AU(
        "Listen: have questions",
        "Do you have a pen? Yes, I do. Does she have a dog? No, she doesn't. We have a big class. Our teacher has twenty students!",
        0.9,
      ),
      EXD(
        "Having things, family and food",
        [
          { english: "I have one sister and two brothers.", note: "Family counting with have — your first have-sentence.", domain: "family" },
          { english: "She has a red bag and a new phone.", note: "One girl → has. Two things, no problem.", domain: "technology" },
          { english: "We have bread and milk at home.", note: "Food you own — have works without a or numbers.", domain: "food" },
          { english: "Does your school have a library? — Yes, it does.", note: "Places can own things too: it has a library.", domain: "education" },
          { english: "They have a small shop in our street.", note: "Two people → have.", domain: "shopping" },
          { english: "My uncle has a black horse.", note: "Animals are owned with have — one uncle → has.", domain: "nature" },
          { english: "I don't have my keys today.", note: "Negative: don't have. Lost things, calm voice.", domain: "everyday" },
          { english: "Do you have a smaller shirt? — No, we don't.", note: "The shopping question of your life — do + have.", domain: "shopping" },
          { english: "He has a busy day tomorrow.", note: "have for time and plans too — not only things.", domain: "work" },
        ],
        "Ownership is everywhere — things, people, food, time. One verb covers it all.",
      ),
      US(
        [
          {
            situation: "Borrowing in class",
            example: "“Do you have a pen? — Yes, I do. Here it is.”",
            note: "The most useful classroom question in English.",
          },
          {
            situation: "At the market",
            example: "“Do you have fresh eggs? — Yes, we do.”",
            note: "Shop talk runs on do + have.",
          },
          {
            situation: "First-meeting small talk",
            example: "“Do you have brothers or sisters? — I have one brother.”",
            note: "Family questions open friendships.",
          },
          {
            situation: "At the doctor",
            example: "“Do you have a fever? — No, I don't.”",
            note: "Doctors ask about symptoms with do + have.",
          },
          {
            situation: "Showing a photo",
            example: "“My grandmother has twenty chickens!”",
            note: "One grandmother → has. Surprise people with your numbers.",
          },
        ],
        "Where have lives",
        "From shops to doctors to first meetings — ownership talk is daily talk.",
      ),
      DL(
        "The pen problem",
        "Omar forgets his pen. Sara and Bilal help.",
        [
          ["Omar", "Sara, do you have a pen? My pen is at home."],
          ["Sara", "No, I don't. But Bilal has two pens."],
          ["Omar", "Bilal! Do you have a pen for me?"],
          ["Bilal", "Yes, I do! Here — the red one."],
          ["Omar", "Thank you! Do you have paper too?"],
          ["Bilal", "No, I don't. But the teacher has paper. Ask her!"],
          ["Sara", "And Omar — you have your books, yes?"],
          ["Omar", "Yes, my books are here. Thank you, Bilal!"],
        ],
      ),
      CMP(
        "“Do you have…?” or “Have you got…?”",
        ["Do you have…? (your form)", "Have you got…? (British)"],
        [
          ["The words", "do + have: Do you have a pen?", "have + got: Have you got a pen?"],
          ["Where you hear it", "Everywhere: books, films, America, India", "Very common in Britain"],
          ["The answer", "Yes, I do. / No, I don't.", "Yes, I have. / No, I haven't."],
          ["Your choice", "Use this one — it always works", "Understand it; use it if you like"],
        ],
        {
          intro: "Films and British books say “Have you got…?”. Do not let it confuse you — it asks the same thing.",
          verdict:
            "Build your questions with do and does: Do you have…? Does she have…? When you hear “Have you got…?”, you now know it means the same.",
        },
      ),
      MS(
        [
          [
            "She have a dog.",
            "She has a dog.",
            "One other person → has. The s belongs in has, and it never disappears in statements.",
          ],
          [
            "Does she has a car?",
            "Does she have a car?",
            "does carries the s, so have stays plain. Never two s-forms in one question.",
          ],
          [
            "He is have a bike.",
            "He has a bike.",
            "Never put be and have together. Ownership needs have alone.",
          ],
          [
            "She's a dog.",
            "She has a dog.",
            "She's means she is — “She's a dog” calls the girl a dog! Ownership needs has.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "has is have plus one s",
        "Here is the whole secret of have: add s for one other person. She has. My father has. The cat has. No s for I, you, we and they. You know this s already from Chapter 10: one book, two books. The s marks “not me, not many — just one other”.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My family has a small shop. My mother and father work there. We have bread, milk, rice and eggs. I have one job after school: I open the shop door! My sister has a bigger job — she counts the money. Our shop doesn't have a name. “Do you have everything?” the customers ask. Yes! We have everything.",
          task: "Read the text two times. Then find two has-sentences and one don't-sentence.",
        },
        writing: {
          task: "Write six sentences about your family and your things. Use I have…, My [person] has… and We have… Add one question with Do you have…?",
          guide: ["I have ______.", "My ______ has ______.", "We have ______.", "Do you have ______?"],
          model: "I have a red bag. My father has a car. We have a small garden. Do you have a pet?",
        },
        listening: {
          script:
            "Do you have a pet? Yes, I do! I have a cat. Does your brother have a pet? No, he doesn't. But my grandmother has three chickens and a dog. The dog has big ears!",
          task: "Listen. Which animals do they talk about?",
        },
        speaking: {
          task: "Tell a partner three things you have and three things you don't have. Then ask: Do you have…?",
          frames: ["I have ______.", "I don't have ______.", "My ______ has ______.", "Do you have ______?"],
          checklist: [
            "I used have and has correctly.",
            "I made one negative with don't have.",
            "I asked one Do you have…? question.",
          ],
        },
      }),
      LSP(
        [
          gls("Have and has show possession."),
          gls("My, your, his and her show who owns something."),
          gls("singular"),
          gls("plural"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Have shows ownership: things, family, food, even time.",
        "I, you, we and they have. He, she and it has.",
        "Questions and negatives call do: Do you have…? She doesn't have…",
        "In does-questions, have loses its s: Does she have…?",
        "“Have you got…?” means the same — understand it, use the do-form.",
      ]),
      RV(
        [
          {
            question: "Which word shows the bag belongs to a woman: “___ bag is new.”?",
            options: ["his", "her", "its"],
            correctIndex: 1,
            explanation: "her matches a female owner — the owner decides, not the bag.",
            from: "Chapter 11 · Lesson 3",
          },
          {
            question: "How many things is “two boxes”?",
            options: ["one", "two", "zero"],
            correctIndex: 1,
            explanation: "Two is more than one, so the noun takes the plural form: boxes.",
            from: "Chapter 10 · Lesson 2",
          },
          {
            question: "In “I read a book.”, what is “a book”?",
            options: ["the subject", "the object", "a question"],
            correctIndex: 1,
            explanation: "The book receives the action — it is the object, after the verb.",
            from: "Chapter 09 · Lesson 2",
          },
        ],
        { title: "Look back — check your base", intro: "Three quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "Your mother is one person. Which sentence is correct?",
            [
              ["a", "My mother have a car."],
              ["b", "My mother has a car."],
              ["c", "My mother is have a car."],
            ],
            "b",
            fbx(
              "My mother has a car.",
              "My mother is one other person → she → has.",
              "have fits I, you, we and they; “is have” puts two verbs together.",
              { english: "My father has a bicycle.", translation: "One man → has. Add s for one other person." },
            ),
            { hints: ["Is the owner one person or more? Count first."] },
          ),
          FB(
            "Complete with have or has.",
            "He ___ a black cat.",
            ["has"],
            fb(
              "has",
              "he → has. One small s for one other person.",
              "have is for I, you, we and they.",
            ),
            { hints: ["One other person — he, she or it. The form ends with the s sound."] },
          ),
          MATCH(
            "Match each question to its short answer.",
            [
              ["q1", "Do you have a pen?"],
              ["q2", "Does she have a pen?"],
              ["q3", "Do they have a car?"],
            ],
            [
              ["a1", "Yes, she does."],
              ["a2", "Yes, I do."],
              ["a3", "No, they don't."],
            ],
            [
              ["q1", "a2"],
              ["q2", "a1"],
              ["q3", "a3"],
            ],
            fb(
              "Do you have a pen? → Yes, I do. · Does she have a pen? → Yes, she does. · Do they have a car? → No, they don't.",
              "Short answers echo the helper do or does — never have.",
              "“Yes, I have.” sounds wrong after a do-question.",
            ),
            { hints: ["The helper at the start of the question comes back in the answer."] },
          ),
          LIS(
            "Listen and answer.",
            "Do you have a dog? No, I don't. I have a cat. Does your sister have a pet? Yes, she does. She has a fish.",
            "What pet does the sister have?",
            ["a fish", "fish", "She has a fish."],
            fb(
              "She has a fish.",
              "Listen after “Yes, she does.” — the true fact follows the short answer.",
              "The cat belongs to the speaker, not the sister.",
            ),
            { hints: ["The sister's answer comes after “Yes, she does.”"] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which question is correct?",
            [
              ["a", "Does he has a phone?"],
              ["b", "Does he have a phone?"],
              ["c", "Do he have a phone?"],
            ],
            "b",
            fb("Does he have a phone?", "does carries the s, so have stays plain after it.", "“Does he has” doubles the s; “Do he” mixes the pronoun."),
          ),
          REORD(
            "Make the sentence.",
            "She has a red bag.",
            fb(
              "She has a red bag.",
              "The order is: owner + has + a + the thing.",
              "have never follows he, she or it in the present.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "Sara have two brothers.",
            ["Sara has two brothers."],
            fb(
              "Sara has two brothers.",
              "Sara is one person → she → has.",
              "have fits I, you, we and they.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "Do you have a pen?",
            ["Do you have a pen?"],
            fb(
              "Do you have a pen?",
              "Questions with have call do to the front — and have stays plain.",
              "have keeps its place after you; only do moves.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Possession survey",
      instructions:
        "Write six sentences about what you and your family have. Use “I have…”, “My [person] has…” and “We have…” Include one question with “Do you have…?” or “Does…have…?” Example: “I have a red bag. My father has a car.”",
      minWords: 18,
      maxWords: 60,
    },
    homework: [
      "List five things you have and five things you don't have. Say each list out loud.",
      "Ask two people one question: “Do you have a pet?” Note their short answers.",
      "Walk through one room of your home and say five have/has sentences about what you see.",
    ],
  },

  // =========================================================================
  // Lesson 5 — Do and Does
  // =========================================================================
  {
    slug: "ch-12-l-05",
    minutes: 25,
    description:
      "The verb with two jobs: do your homework (main verb) and Do you like tea? (helper). Short answers echo do or does — never the main verb.",
    outcomes: [
      "Use do and does as main verbs",
      "Recognise do and does as helping verbs",
      "Give short answers with do and does",
      "Choose between be and do for questions",
    ],
    blocks: [
      LI(
        "Do is the worker of English. Sometimes do is the action itself: I do my homework. Sometimes do only helps: Do you like tea? One word, two jobs. You will learn to see the difference — and to answer the short way: Yes, I do.",
        [
          "You know action words like eat, read and play (Chapter 07).",
          "You can use he, she and it correctly for people and things (Chapter 11).",
          "You can give short answers with be: Yes, I am (Lesson 2).",
        ],
      ),
      vocGlossary("Words for this lesson", [
        { word: "auxiliary verb", partOfSpeech: "noun", definition: "A helping verb. It stands in front of another verb to make questions and negatives." },
        { word: "action word", partOfSpeech: "noun", definition: "A word for something people do: eat, run, read, play." },
        { word: "short answer", partOfSpeech: "noun", definition: "A quick answer that repeats the helping verb: Yes, I do. No, she doesn't." },
        { word: "question", partOfSpeech: "noun", definition: "A sentence that asks, and ends with a question mark." },
      ]),
      H("The verb with two jobs"),
      T(
        "I do my homework. Here, do is the action — the homework is the thing you do. Do you like tea? Here, do helps like make a question. One word, two jobs. English loves this trick.",
      ),
      {
        type: "definition",
        term: "auxiliary verb",
        partOfSpeech: "noun",
        definition:
          "An auxiliary verb is a helping verb. It stands in front of another verb to make questions and negatives. Do and does are helpers.",
        example: {
          english: "Does she work here? — Yes, she does.",
          translation: "does helps work ask its question — the action stays with work.",
        },
      },
      ST(
        "Question or not? Decide in three steps",
        [
          {
            title: "Step 1 — Find the main verb",
            text: "Read the sentence. What is the real idea? Is it be? Is it an action word like eat or work?",
            examples: [
              { english: "She works at night. / She is at home.", note: "works = action. is = being verb." },
            ],
          },
          {
            title: "Step 2 — Choose the machine",
            text: "Is the verb be? Flip it — no do. Is it an action word? Call do or does to the front.",
            examples: [
              { english: "Is she at home?", note: "be flips alone — Lesson 2." },
              { english: "Does she work at night?", note: "does arrives; work stays plain." },
            ],
          },
          {
            title: "Step 3 — Answer with the helper",
            text: "Echo the verb at the front of the question: Yes, she is. Or: Yes, she does. Never repeat the main verb.",
            examples: [
              { english: "Does she work here? — Yes, she does.", note: "Not “Yes, she works.” The helper comes back." },
            ],
          },
        ],
      ),
      GR(
        "The short-answer rule",
        "Echo the verb at the front of the question — be or do/does. Yes, I am. No, she isn't. Yes, I do. No, he doesn't. Never repeat the main verb.",
        [
          { english: "Do you like tea? — Yes, I do.", translation: "do comes back — never like." },
          { english: "Does he play cricket? — No, he doesn't.", translation: "doesn't = does not." },
          { english: "Is she happy? — Yes, she is.", translation: "be questions echo be." },
        ],
        [
          "With be, the helper IS the whole verb: Is she happy? → Yes, she is. There is no second verb to avoid.",
        ],
      ),
      TB(
        "The two jobs of do",
        ["Job", "What it means", "Example"],
        [
          ["Main verb — tasks", "do = the thing itself", "I do my homework every day."],
          ["Main verb — routines", "do + the shopping, the dishes", "She does the shopping on Fridays."],
          ["Helping verb — questions", "do/does + plain verb", "Do you like rice?"],
          ["Helping verb — negatives", "don't/doesn't + plain verb", "He doesn't eat meat."],
        ],
        "One word, two jobs — the sentence shows which job do is doing.",
      ),
      AU(
        "Listen: short answers with do",
        "Do you like tea? Yes, I do. Does she work? No, she doesn't. Do we play? Yes, we do. Does he run? Yes, he does. Say the short answers with me.",
        0.85,
      ),
      AU(
        "Listen: do as the main verb",
        "What do you do? I do my homework. Then I do the shopping for my mother. What does your father do? He does the same!",
        0.9,
      ),
      EXD(
        "Both jobs of do in real life",
        [
          { english: "I do my homework after school.", note: "Main verb: the homework is the thing you do.", domain: "education" },
          { english: "She does the shopping every Friday.", note: "Main verb: do + the shopping — a routine.", domain: "shopping" },
          { english: "Do you like cricket? — Yes, I do.", note: "Helper do; the short answer echoes do.", domain: "sport" },
          { english: "He doesn't eat meat.", note: "Helper does in the negative: doesn't + plain verb.", domain: "food" },
          { english: "What does your mother do? — She's a nurse.", note: "The job question! do is the main verb — asked with does.", domain: "work" },
          { english: "Do you play with your brother? — No, I don't.", note: "Short negative answer: I don't.", domain: "family" },
          { english: "Does your phone work? — Yes, it does.", note: "Things take does too: the phone → it.", domain: "technology" },
          { english: "We do yoga in the park on Sundays.", note: "Main verb do + an activity: yoga, sport, homework.", domain: "health" },
          { english: "Do your friends speak English? — Yes, they do.", note: "Helper do with they; speak stays plain.", domain: "social" },
        ],
        "Nine sentences, two jobs — watch do work and watch do help.",
      ),
      US(
        [
          {
            situation: "The job question",
            example: "“What do you do? — I'm a student.”",
            note: "The most common question in adult English. do is the main verb, helped by do.",
          },
          {
            situation: "At a friend's home",
            example: "“Do you eat rice with your hands? — Yes, I do!”",
            note: "Food habits asked with do + eat.",
          },
          {
            situation: "Making weekend plans",
            example: "“What do you do on Sundays? — I do nothing!”",
            note: "The answer uses do as the main verb — a small joke English speakers love.",
          },
          {
            situation: "Class check-in",
            example: "“Do you understand? — Yes, we do.”",
            note: "Teachers check with do; you answer short.",
          },
          {
            situation: "Helping at home",
            example: "“Who does the dishes? — I do!”",
            note: "do the dishes, do the cleaning — housework runs on do.",
          },
        ],
        "Where do lives",
        "From job interviews to kitchen sinks — do is working everywhere.",
      ),
      DL(
        "What do you do?",
        "Two new friends on a bus ride.",
        [
          ["Hina", "So, Adnan — what do you do?"],
          ["Adnan", "I'm a student. I do my homework in the morning, and I help my father in the afternoon."],
          ["Hina", "What does your father do?"],
          ["Adnan", "He has a fruit shop. He does everything — buying, selling, cleaning!"],
          ["Hina", "And your mother? Does she work at the shop too?"],
          ["Adnan", "No, she doesn't. She's a teacher."],
          ["Hina", "Do you like the shop work?"],
          ["Adnan", "Yes, I do! I don't get money — but I get free apples!"],
        ],
      ),
      CMP(
        "“Is she happy?” or “Does she happy?”",
        ["be — for who, how, where", "do — for actions"],
        [
          ["The idea", "happy describes her — no action", "work is an action she does"],
          ["The question", "Is she happy?", "Does she work?"],
          ["The mistake", "—", "“Does she happy?” is impossible: happy is not an action"],
          ["The short answer", "Yes, she is.", "Yes, she does."],
        ],
        {
          intro: "Describing words (happy, tired, ready) need be. Action words (work, eat, play) need do.",
          verdict:
            "Look at the word after the subject. A describing word → be. An action word → do or does. This one check fixes half of all beginner questions.",
        },
      ),
      MS(
        [
          [
            "Does she happy?",
            "Is she happy?",
            "Happy describes — it needs be, not do. do only helps action verbs.",
          ],
          [
            "Do you like tea? — Yes, I like.",
            "Do you like tea? — Yes, I do.",
            "A short answer echoes the helper do — never the main verb like.",
          ],
          [
            "He don't like rice.",
            "He doesn't like rice.",
            "One other person → doesn't. don't fits I, you, we and they.",
          ],
          [
            "Does she works here?",
            "Does she work here?",
            "does carries the s; work stays plain. One s per sentence.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "One verb at the front — only one",
        "“Does she is happy?” “Do you are tired?” — both impossible. Be flips alone; do helps action verbs. Two verbs at the front of a question is always wrong.",
      ),
      N(
        "Why helpers exist",
        "Try to flip an action verb: “Like you tea?” — impossible! English action verbs cannot move to the front. So do and does step in and do the moving for them. In Lesson 2, be flipped alone. Action verbs send their helper instead.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Ammar does a lot. He does his homework at four. He does the shopping at five. He does the dishes after dinner! Does he play? Yes, he does — cricket, every evening. “Do you rest?” his mother asks. “No, I don't!” he laughs. Ammar doesn't stop.",
          task: "Read the text two times. Then count the sentences where do is the MAIN verb.",
        },
        writing: {
          task: "Write three sentences with do or does as the MAIN verb, and three questions where do or does is only the HELPER. Label each one: main or helper.",
          guide: ["I do ______. (main)", "She does ______. (main)", "Do you ______? (helper)", "Does he ______? (helper)"],
          model: "I do my homework. (main) She does the cooking. (main) Do you play cricket? (helper) Does he work? (helper)",
        },
        listening: {
          script:
            "Do you do sport? Yes, I do. I do karate. Does your sister do sport? No, she doesn't. She does music. What does your brother do? He does nothing — he sleeps!",
          task: "Listen. Who does nothing?",
        },
        speaking: {
          task: "Ask a partner four questions: two with be (Are you…? Is your…?) and two with do (Do you…? Does your…?). Answer every question with a short answer.",
          frames: ["Are you ______?", "Do you ______?", "Does your ______ ______?", "Yes, I am. / Yes, I do. / No, I don't."],
          checklist: [
            "I flipped be with no do.",
            "I called do and does for action verbs.",
            "All my short answers echoed the first verb of the question.",
          ],
        },
      }),
      LSP(
        [
          gls("Do and does help other verbs make questions."),
          gls("auxiliary verb"),
          gls("short answer"),
          gls("Every sentence needs a verb."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "do is the main verb in: do homework, do the shopping, do the dishes.",
        "do and does are helpers in questions and negatives with action verbs: Do you like tea?",
        "Short answers echo the helper: Yes, I do. No, she doesn't — never the main verb.",
        "Describing words need be, not do: Is she happy? — never “Does she happy?”",
        "In does-questions and doesn't-negatives, the main verb stays plain.",
      ]),
      RV(
        [
          {
            question: "Which one is an action word?",
            options: ["happy", "sleep", "small"],
            correctIndex: 1,
            explanation: "Sleep names an action — action words are verbs.",
            from: "Chapter 07 · Lesson 3",
          },
          {
            question: "Which word fits: “Ali and ___ are friends.”?",
            options: ["I", "me", "my"],
            correctIndex: 0,
            explanation: "The subject of the sentence is “Ali and I” — subject pronouns come before the verb.",
            from: "Chapter 11 · Lesson 1",
          },
          {
            question: "Which number comes after nineteen?",
            options: ["twenty", "twelve", "ten"],
            correctIndex: 0,
            explanation: "Nineteen, twenty — your number words from the vocabulary chapter.",
            from: "Chapter 06 · Lesson 4",
          },
        ],
        { title: "Look back — check your base", intro: "Three quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "Which short answer fits: “Does he work here?”",
            [
              ["a", "Yes, he does."],
              ["b", "Yes, he works."],
              ["c", "Yes, he is."],
            ],
            "a",
            fbx(
              "Yes, he does.",
              "Echo the helper does — never the main verb, never be.",
              "“He works” repeats the main verb; “he is” brings be into a do-question.",
              { english: "Does she teach? — Yes, she does.", translation: "does comes back; teach stays away." },
            ),
            { hints: ["Say the first word of the question again after “Yes”."] },
          ),
          FB(
            "Complete the short answer.",
            "Do you like mangoes? — Yes, I ___.",
            ["do"],
            fb(
              "do",
              "The short answer echoes do from the question.",
              "“Yes, I like” repeats the main verb — stop after the helper.",
            ),
            { hints: ["The helper comes first in the question. Say it again."] },
          ),
          MATCH(
            "Match each question to its short answer.",
            [
              ["q1", "Is she a teacher?"],
              ["q2", "Do you play cricket?"],
              ["q3", "Does he eat rice?"],
            ],
            [
              ["a1", "Yes, he does."],
              ["a2", "Yes, she is."],
              ["a3", "Yes, I do."],
            ],
            [
              ["q1", "a2"],
              ["q2", "a3"],
              ["q3", "a1"],
            ],
            fb(
              "Is she a teacher? → Yes, she is. · Do you play cricket? → Yes, I do. · Does he eat rice? → Yes, he does.",
              "Echo the verb at the front: be or do/does.",
              "Never repeat the main verb in a short answer.",
            ),
            { hints: ["Match the first verb of each question to its echo."] },
          ),
          LIS(
            "Listen and answer.",
            "Does your father work on Sundays? No, he doesn't. He works on Saturdays. Does your mother work? Yes, she does. She's a doctor.",
            "Does the father work on Sundays?",
            ["No, he doesn't.", "No.", "he doesn't"],
            fb(
              "No, he doesn't.",
              "The short answer echoes does from the question: doesn't.",
              "He does work — but on Saturdays, not Sundays.",
            ),
            { hints: ["Listen for the day at the start, then the echo."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which question is correct?",
            [
              ["a", "Does she happy?"],
              ["b", "Is she happy?"],
              ["c", "Do she happy?"],
            ],
            "b",
            fb("Is she happy?", "happy describes her, so be carries the question.", "do and does never help a describing word."),
          ),
          CORR(
            "Find and correct the mistake.",
            "Do you like tea? — Yes, I like.",
            ["Do you like tea? — Yes, I do.", "Yes, I do."],
            fb(
              "Yes, I do.",
              "Short answers echo the helper do, not the main verb like.",
              "“Yes, I like.” leaves the sentence half-open — English closes it with do.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "Does he do his homework at night?",
            ["Does he do his homework at night?"],
            fb(
              "Does he do his homework at night?",
              "Two do-words in one question: the helper first, then the main verb.",
              "After the helper does, the main verb stays plain: do.",
            ),
            { skill: "listening" },
          ),
          REORD(
            "Make the sentence.",
            "He doesn't eat meat.",
            fb(
              "He doesn't eat meat.",
              "doesn't + plain verb: the s lives inside does.",
              "Never “He doesn't eats meat.” — one s per sentence.",
            ),
            { skill: "grammar" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Do duty",
      instructions:
        "Write six sentences: three with do or does as the MAIN verb (do homework, do the shopping…) and three questions where do or does is only the HELPER. Mark each sentence: main or helper. Example: “I do my homework. (main) Do you like cricket? (helper)”",
      minWords: 18,
      maxWords: 60,
    },
    homework: [
      "Ask three people one question with do or does. Write their short answers.",
      "Say your day with do: “I do my homework. I do the dishes.” Use do as the main verb three times.",
      "Listen for the job question today: “What do you do?” Answer it about yourself, out loud.",
    ],
  },

  // =========================================================================
  // Lesson 6 — The Three Verbs Together and Chapter Review
  // =========================================================================
  {
    slug: "ch-12-l-06",
    minutes: 25,
    description:
      "The chapter finale: be, have and do in one real conversation. Choose the right engine for each idea, then review all of Chapter 12.",
    outcomes: [
      "Combine be, have and do in one conversation",
      "Choose the right verb for each idea",
      "Ask and answer questions with all three verbs",
      "Review the forms from Chapter 12",
    ],
    blocks: [
      LI(
        "Three verbs, one conversation. Be says who you are. Have says what is yours. Do does the work, and do asks the questions. In this lesson all three engines run together — the way real people speak. Then you review the whole chapter.",
        [
          "You know the subject pronouns I, you, he, she, it, we, they (Chapter 11).",
          "You know that every sentence needs a verb (Chapter 08).",
          "You can use am/is/are, was/were, have/has and do/does (Lessons 1–5).",
        ],
      ),
      vocGlossary("The three engine verbs", [
        { word: "being verb", partOfSpeech: "noun", definition: "be: who, how or where someone is. Am, is, are, was, were." },
        { word: "auxiliary verb", partOfSpeech: "noun", definition: "A helping verb: do and does make questions and negatives for action verbs." },
        { word: "short answer", partOfSpeech: "noun", definition: "A quick answer that echoes the first verb: Yes, I am. Yes, I do." },
        { word: "contraction", partOfSpeech: "noun", definition: "A short form like I'm, isn't, don't — with an apostrophe for the missing letters." },
      ]),
      H("Three engines, one speaker"),
      T(
        "One person, three verbs. You are a student — that is be. You have a family — that is have. You do your homework — that is do. Real conversation uses all three in five sentences. Learn to hear each engine.",
      ),
      TB(
        "The chooser table",
        ["Your idea", "Verb", "Example"],
        [
          ["who, how or where someone is", "be", "She is a nurse. They were at home."],
          ["something belongs to someone", "have", "He has a car. We have rice."],
          ["an action or activity", "do (main verb)", "I do my homework."],
          ["questions and negatives of action verbs", "do (helper)", "Do you like tea? He doesn't eat meat."],
        ],
        "Find your idea in the left column — the verb follows.",
      ),
      ST(
        "Choose your engine in three steps",
        [
          {
            title: "Step 1 — Say the idea in your own words",
            text: "What do you want to say? A description? An ownership? An action?",
            examples: [{ english: "(think) my father — his job", note: "This is a description: what he IS." }],
          },
          {
            title: "Step 2 — Pick the engine",
            text: "Description → be. Ownership → have or has. Action → the action verb, with do for questions and negatives.",
            examples: [
              { english: "My father is a driver.", note: "be carries the job." },
              { english: "My father has a bus.", note: "have carries the thing." },
            ],
          },
          {
            title: "Step 3 — Check questions and negatives",
            text: "be flips alone. have and action verbs call do or does.",
            examples: [
              { english: "Is your father a driver? — Yes, he is.", note: "be flips by itself." },
              { english: "Does he have a bus? — Yes, he does.", note: "have calls does in questions." },
            ],
          },
        ],
      ),
      GR(
        "The three verbs in one rule",
        "be = who, how, where. have = ownership. do = actions, and the helper for questions and negatives. be makes its own questions; everything else calls do.",
        [
          { english: "I am Ali. I have a dog. I do my homework.", translation: "All three engines in three short sentences." },
          { english: "Are you a student? Do you have a pen? Does he do sport?", translation: "Each question uses its own machine." },
        ],
        [
          "have can also ask with got: “Have you got a pen?” — same meaning, British flavour.",
        ],
      ),
      AU(
        "Listen: the three verbs ask",
        "Are you new here? Yes, I am. Do you have the class list? Yes, I do. Is she your sister? No, she isn't. Does he do sport? Yes, he does. Three verbs — one conversation.",
        0.85,
      ),
      AU(
        "Listen: a real first meeting",
        "Hello! I'm Nina. Are you new? Yes, I am. I'm Omar. Do you have a pen? Yes, I do. Is your sister in this class? No, she isn't. She's in class two. Was the test hard? No, it wasn't!",
        0.9,
      ),
      EXD(
        "All three verbs across life",
        [
          { english: "I'm Omar. I'm from Egypt, and I'm twelve.", note: "be: name, place, age — the opening of every friendship.", domain: "social" },
          { english: "We have a small shop, and I have one brother.", note: "have: family and things in one breath.", domain: "family" },
          { english: "Do you have this book in blue? — No, we don't.", note: "Shopping runs on do + have.", domain: "shopping" },
          { english: "I do my homework at eight, then I do the dishes.", note: "do: two main-verb jobs in one evening.", domain: "home" },
          { english: "Was the test hard? — No, it wasn't. But it was long!", note: "Past be in a school chat — flip and short answer.", domain: "education" },
          { english: "She has a new phone. Does it work? — Yes, it does.", note: "have + the do-helper in two sentences.", domain: "technology" },
          { english: "We were at the match on Friday. It was great!", note: "Past memories with was and were.", domain: "sport" },
          { english: "Do you eat rice every day? — Yes, I do. I don't eat bread.", note: "do-helper positive and negative, back to back.", domain: "food" },
          { english: "He does the cleaning at the hospital at night.", note: "do + a work routine — the night shift.", domain: "work" },
        ],
        "Nine sentences, three engines, nine parts of life — this is how the chapter sounds in the wild.",
      ),
      US(
        [
          {
            situation: "First day at a new job",
            example: "“Hi! I'm Bilal. I'm the new cook. Is this my place? — Yes, it is.”",
            note: "Introduce with be, check with a flipped be-question.",
          },
          {
            situation: "Meeting the neighbours",
            example: "“Welcome! Are you from this city? — No, we aren't. We're from Multan.”",
            note: "One be-question after another — small talk is be-talk.",
          },
          {
            situation: "At the bus stop",
            example: "“Is the bus late? — It always is! Do you have the time? — Yes, it's half past nine.”",
            note: "be, do and have inside three short sentences.",
          },
          {
            situation: "After a party",
            example: "“Wasn't the food great? — Yes, it was! Who made the rice? — I did!”",
            note: "Past be plus do as a one-word answer.",
          },
          {
            situation: "A video call with grandparents",
            example: "“Are you well, Dadi? — Yes, we are! How was your week? — Busy!”",
            note: "Present be and past be in one call.",
          },
        ],
        "One conversation, three engines",
        "Native speakers mix the verbs without thinking. Now you can hear them switch.",
      ),
      DL(
        "The new classmate",
        "A new student meets a classmate on the first morning.",
        [
          ["Nina", "Hi! Are you new here?"],
          ["Omar", "Yes, I am. I'm Omar. I'm from Egypt."],
          ["Nina", "Welcome, Omar! I'm Nina. Do you have the class list?"],
          ["Omar", "Yes, I do. But I don't have a pen."],
          ["Nina", "Here — this pen is a gift. What does your father do?"],
          ["Omar", "He's an engineer. He has his own company."],
          ["Nina", "That's great! I want to be an engineer too. Are the teachers kind here?"],
          ["Omar", "Yes, they are. And the students are friendly."],
          ["Nina", "We were all new last year. It's easy here — you'll see."],
        ],
      ),
      CMP(
        "Which engine do you need?",
        ["be (who, how, where)", "have and do (own and act)"],
        [
          ["The idea", "A description: She is tall. It was cold.", "Ownership: She has a dog. Action: They do yoga."],
          ["Questions", "Flips alone: Is she tall? Was it cold?", "Call do: Does she have a dog? Do they do yoga?"],
          ["Negatives", "be + not: She isn't tall.", "don't/doesn't: She doesn't have a dog."],
          ["Short answers", "Yes, she is. No, it wasn't.", "Yes, she does. No, they don't."],
        ],
        {
          intro: "One decision — description or not? — and the whole machine follows.",
          verdict:
            "A describing word after the subject → be. Owning or doing → have and do, with do or does for questions and negatives.",
        },
      ),
      MS(
        [
          [
            "She have a dog.",
            "She has a dog.",
            "One other person → has. The s never disappears in statements.",
          ],
          [
            "Do you are ready?",
            "Are you ready?",
            "be never needs do — be flips alone. One verb at the front, never two.",
          ],
          [
            "Was you there?",
            "Were you there?",
            "you takes were in the past — always, even in questions.",
          ],
          [
            "Does she like tea? — Yes, she likes.",
            "Does she like tea? — Yes, she does.",
            "Short answers echo the helper does — never the main verb.",
          ],
        ],
        "The mistakes this chapter was built to kill",
      ),
      N(
        "The 1-2-3 of any new sentence",
        "Before you speak, ask three fast questions. One: is it a description? Use be. Two: is it ownership? Use have or has. Three: is it an action? Use the action verb — and call do or does for questions and negatives. Three questions, three verbs, all of English.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Hello! My name is Amna. I am thirteen, and I am from Karachi. My family is big: I have three brothers and two sisters. My father has a fruit shop, and my mother is a teacher. I do a lot at home: I do my homework, and on Saturdays I do the shopping with my father. Was last year hard? Yes, it was — my school was closed. But we were happy, and now the school is open again. Do you want to be my friend?",
          task: "Read the text two times. Then find one sentence for each engine: be, have, do.",
        },
        writing: {
          task: "Write your self-introduction with all three verbs: be at least twice, have at least twice and do at least once. Add one question for your reader.",
          guide: ["I am ______.", "I have ______.", "My ______ has ______.", "I do ______.", "Do you ______?"],
          model:
            "I am Sara. I am twelve. I have one brother. My school has a big garden. I do my homework at night. Do you like cricket?",
        },
        listening: {
          script:
            "Are you new? Yes, I am. Do you have a pen? Yes, I do. Is your sister here? No, she isn't. Does she do sport? Yes, she does. Was the test easy? No, it wasn't!",
          task: "Listen. Which verb asks each question: be or do?",
        },
        speaking: {
          task: "Have one short conversation with a partner. Use each engine at least once: be, have, do. Ask at least two questions and give short answers.",
          frames: ["Are you ______?", "Do you have ______?", "What do you do?", "Yes, I am. / Yes, I do."],
          checklist: [
            "I used all three verbs.",
            "I asked at least two questions.",
            "My short answers echoed the first verb of each question.",
          ],
        },
      }),
      LSP(
        [
          gls("Am, is and are are the present of the verb be."),
          gls("Have and has show possession."),
          gls("Do and does help other verbs make questions."),
          gls("Be makes questions by itself; other verbs need do."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "be carries who, how and where: I am a student. She was tired.",
        "have carries ownership: I have two brothers. He has a car.",
        "do is both a main verb (do homework) and the helper (Do you like tea?).",
        "be flips alone; have and action verbs call do or does.",
        "Short answers echo the first verb: Yes, I am. Yes, I do. No, she doesn't.",
      ]),
      RV(
        [
          {
            question: "Which word completes: “The children ___ in the garden.”? (now)",
            options: ["is", "are", "am"],
            correctIndex: 1,
            explanation: "Children is a plural noun, so be becomes are.",
            from: "Chapter 10 · Lesson 2",
          },
          {
            question: "Which word points at a thing FAR from you?",
            options: ["this", "that", "these"],
            correctIndex: 1,
            explanation: "that is far away; this is near. Words with t = distant.",
            from: "Chapter 11 · Lesson 4",
          },
          {
            question: "In “Ali reads a book.”, which word is the action word?",
            options: ["Ali", "reads", "book"],
            correctIndex: 1,
            explanation: "Reads names the action — action words are verbs.",
            from: "Chapter 07 · Lesson 3",
          },
          {
            question: "Which order is correct English?",
            options: ["Ali reads books.", "Reads Ali books.", "Books reads Ali."],
            correctIndex: 0,
            explanation: "Subject, verb, object — the fixed English word order.",
            from: "Chapter 09 · Lesson 4",
          },
        ],
        { title: "Chapter review — check your base", intro: "Four quick questions from earlier chapters before the final practice." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          RD(
            "Read and answer.",
            "The three verbs at the shop",
            "Sara is at her uncle's shop. The shop is small, but it has everything. “Do you have rice?” an old man asks. “Yes, we do,” says Sara. “And are the eggs fresh?” “They are from this morning!” Sara is happy. She does this work every Saturday, and she loves it.",
            "Which small verb starts the old man's first question?",
            [
              ["a", "Do"],
              ["b", "Are"],
              ["c", "Does"],
            ],
            "a",
            fb(
              "Do",
              "“Do you have rice?” — do stands at the front and helps have ask its question.",
              "The sentence is about owning rice, not about who or where — so be does not carry it.",
            ),
            { skill: "reading", hints: ["Look at the very first word of the old man's question."] },
          ),
          MCQ(
            "Your friend's mother is ONE person, and you ask about her car. Which question is correct?",
            [
              ["a", "Does she has a car?"],
              ["b", "Does she have a car?"],
              ["c", "Is she have a car?"],
            ],
            "b",
            fbx(
              "Does she have a car?",
              "does carries the s; have stays plain after it.",
              "“Does she has” doubles the s; be never joins have.",
              { english: "Does he have a bicycle? — Yes, he does.", translation: "One helper does + plain have + short answer does." },
            ),
            { hints: ["One person → the helper with the s. Now what happens to have?"] },
          ),
          FB(
            "Complete the short answer.",
            "Are you tired? — Yes, I ___.",
            ["am"],
            fb(
              "am",
              "Short answers echo be: the question asks with are + you, and the answer says I + am.",
              "“Yes, I.” is not English — the verb must come back.",
            ),
            { hints: ["The pronoun in the answer is I. Which form of be belongs to it?"] },
          ),
          LIS(
            "Listen and answer.",
            "Are you a student? Yes, I am. Do you have brothers? Yes, I do. We have one brother. Was he at school today? No, he wasn't. He's at home.",
            "Where is the brother today?",
            ["at home", "home", "He's at home.", "He is at home."],
            fb(
              "He's at home.",
              "The last sentence answers it — with is, the present of be.",
              "He wasn't at school — but he is at home now.",
            ),
            { hints: ["The answer is at the very end — after “No, he wasn't.”"] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which sentence is correct?",
            [
              ["a", "She have a dog."],
              ["b", "She has a dog."],
              ["c", "She is have a dog."],
            ],
            "b",
            fb("She has a dog.", "One other person → has. Never be + have together.", "have fits I, you, we and they; “is have” joins two verbs."),
          ),
          CORR(
            "Find and correct the mistake.",
            "Do you are ready?",
            ["Are you ready?"],
            fb(
              "Are you ready?",
              "be flips alone — do never helps be.",
              "ready describes you, so be carries the whole question by itself.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "I have a pen, but I don't have paper.",
            ["I have a pen, but I don't have paper."],
            fb(
              "I have a pen, but I don't have paper.",
              "have for ownership; don't have for the negative — do helps have say no.",
              "have cannot make its own negative here: don't arrives to help.",
            ),
            { skill: "listening" },
          ),
          REORD(
            "Make the question.",
            "Does she do the shopping on Fridays?",
            fb(
              "Does she do the shopping on Fridays?",
              "Helper does first, then the subject, then do as the main verb.",
              "Two different do-jobs inside one small question.",
            ),
            { skill: "grammar" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Three-verb self-introduction",
      instructions:
        "Write a self-introduction of five or six sentences. Use be at least twice, have at least twice and do at least once. Include one question for your reader. Example: “I am Sara. I am twelve. I have one brother. My school has a big garden. I do my homework at night. Do you like cricket?”",
      minWords: 30,
      maxWords: 90,
    },
    homework: [
      "Record yourself speaking for one minute about you: your name, your family, your things, your week. Use all three verbs: be, have, do.",
      "Take one page from an English book or app. Find five verbs — which ones are be, have or do?",
      "Write one question for each engine — Are you…?, Do you have…?, Do you like…? — and ask them to someone today.",
    ],
  },
];
