/**
 * PROMPT 57 production — Batch 5, Chapter 14: Questions and Negative Sentences.
 *
 * Every lesson below is rewritten to the full v2 teaching standard:
 * lesson introduction + prerequisites, concept explanation, step-by-step
 * teaching, rules and patterns, 8+ worked examples with teaching notes,
 * real-life usage, comparison, common mistakes (wrong → right → reason),
 * guided practice (with hints), independent practice (no hints),
 * four-skill integration, validated Urdu/Hindi support, summary,
 * revision questions from earlier lessons, assignment and homework.
 *
 * This is the chapter where the learner starts ASKING. Yes/no questions
 * run on the two machines from Chapter 12 (be flips alone; every other
 * verb borrows do/does), WH-questions add the eight question words in one
 * fixed order (QASM: question word + auxiliary + subject + main verb),
 * and the conversion drill trains statement → question in both directions.
 * Negatives are consolidated, imperatives arrive as the shortest sentences
 * in English, and the chapter closes with polite real-world asking
 * (Excuse me… / Can you…? / please) plus the chapter review. Question
 * intonation is teaching content, not decoration: yes/no questions rise,
 * WH-questions fall. Every classic beginner error — "Where you live?",
 * "Do you ready?", "Does she works?", "Yes, I like." — is prevented with
 * a reason, not just a correction.
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

export const ch14Upgrades: LessonUpgrade[] = [
  // =========================================================================
  // Lesson 1 — Yes/No Questions
  // =========================================================================
  {
    slug: "ch-14-l-01",
    minutes: 25,
    description:
      "Build yes/no questions with both machines — be flips alone, action verbs borrow do and does — then answer the short way: Yes, I do. No, she isn't.",
    outcomes: [
      "Choose between the flip (be) and do/does (action verbs) in one look",
      "Build yes/no questions with be and do/does",
      "Answer with short answers that echo the first verb",
      "Use rising intonation on yes/no questions",
    ],
    blocks: [
      LI(
        "You already own two asking machines. Be flips to the front: Are you tired? Do helps action verbs: Do you like tea? This lesson puts both machines side by side. You will choose the right one fast — and answer the short way.",
        [
          "You can flip be to ask a question: She is here. → Is she here? (Chapter 12 · Lesson 2)",
          "You know do and does help action verbs: Do you work? Does she work? (Chapter 13 · Lesson 5)",
          "You can answer be-questions the short way: Yes, I am. No, she isn't. (Chapter 12 · Lesson 2)",
        ],
      ),
      vocGlossary("Words for this lesson", [
        { word: "yes/no question", partOfSpeech: "noun", definition: "A question with only two possible answers: yes or no." },
        { word: "short answer", partOfSpeech: "noun", definition: "A quick answer that repeats the first verb of the question: Yes, I do." },
        { word: "auxiliary verb", partOfSpeech: "noun", definition: "The little helper verb at the front of a question: be, do or does." },
        { word: "question", partOfSpeech: "noun", definition: "A sentence that asks, and ends with a question mark." },
        { word: "answer", partOfSpeech: "noun", definition: "What you say after a question — yes, no, or real information." },
      ]),
      H("One decision, two machines"),
      T(
        "Some questions flip be. Some questions borrow do. How do you choose? Look at the verb of the statement. Is be already there? Flip it. Is it an action word like eat, play or work? Call do or does to the front. One look. One decision. One question.",
      ),
      {
        type: "definition",
        term: "yes/no question",
        partOfSpeech: "noun",
        definition:
          "A yes/no question has only two possible answers: yes or no. It starts with be (Are you…?) or with do/does (Do you…?).",
        example: {
          english: "Do you like mangoes? — Yes, I do.",
          translation: "The answer is yes or no — and the short answer echoes the helper do.",
        },
      },
      ST(
        "Ask a yes/no question in three steps",
        [
          {
            title: "Step 1 — Look at the verb",
            text: "Is it be (am, is, are)? Or is it an action verb (eat, work, play)?",
            examples: [
              { english: "She is a doctor. → be", note: "be is in the sentence — it will flip." },
              { english: "She works in a shop. → action", note: "No be here — works needs a helper." },
            ],
          },
          {
            title: "Step 2 — Move the first verb to the front",
            text: "Be flips alone. Action verbs send do or does instead. Use does only for he, she and it.",
            examples: [
              { english: "She is a doctor. → Is she a doctor?", note: "be flips alone — never with do." },
              { english: "She works in a shop. → Does she work in a shop?", note: "does carries the s; work stays plain." },
            ],
          },
          {
            title: "Step 3 — Answer short",
            text: "Repeat the first verb of the question. Be: Yes, she is. Do: Yes, she does. Never repeat the main verb.",
            examples: [
              { english: "Does she work here? — Yes, she does.", note: "Echo the helper — not the words work and here." },
            ],
          },
        ],
      ),
      GR(
        "The yes/no question rule (present)",
        "be in the sentence → flip it alone: Are you ready? No be → do/does + subject + base verb: Do you like tea? Does he live here? Short answers echo the first verb: Yes, I am. / Yes, I do.",
        [
          { english: "Are you ready?", translation: "ready describes you — be carries the whole question." },
          { english: "Does he live here?", translation: "he + action verb → does; live loses nothing because does took the s." },
          { english: "Do they work on Sundays?", translation: "they → do. The base verb never changes with do." },
        ],
        [
          "Short answers never repeat the main verb: “Yes, I do.” — never “Yes, I like.”",
        ],
      ),
      TB(
        "One idea, both machines",
        ["Statement", "With be", "With do/does"],
        [
          ["She is tired.", "Is she tired?", "— (tired is not an action)"],
          ["She likes music.", "— (no be in the statement)", "Does she like music?"],
          ["They are at home.", "Are they at home?", "—"],
          ["They live near here.", "—", "Do they live near here?"],
        ],
        "be flips alone. Action verbs call do or does — and the s moves into does.",
      ),
      AU(
        "Listen: yes/no questions rise",
        "Are you ready? Do you like tea? Does she work here? Is he a student? Do they live near here? Listen to the end of every question — the voice goes UP.",
        0.85,
      ),
      AU(
        "Listen: questions and short answers",
        "Do you speak English? Yes, I do. Are you a student? Yes, I am. Does your brother work? No, he doesn't. Is your mother a teacher? Yes, she is.",
        0.9,
      ),
      EXD(
        "Yes/no questions in real life",
        [
          { english: "Do you live near the school? — Yes, I do.", note: "live is an action verb, so do helps. The short answer echoes do.", domain: "everyday" },
          { english: "Is this seat free? — Yes, it is.", note: "this + is → flip is. One seat → it in the answer.", domain: "travel" },
          { english: "Does the shop open on Sundays? — No, it doesn't.", note: "The shop is one thing → does. open stays plain after it.", domain: "shopping" },
          { english: "Are you from Egypt? — No, I'm not. I'm from Pakistan.", note: "be flips; a short no can grow into the true fact.", domain: "social" },
          { english: "Do your parents work on Saturdays? — Yes, they do.", note: "Parents means more than one person → do, not does.", domain: "family" },
          { english: "Does your phone have a good camera? — Yes, it does.", note: "have borrows does: does … have. Two verbs, one question.", domain: "technology" },
          { english: "Is the rice ready? — Almost!", note: "Real life can answer a yes/no question without yes or no.", domain: "food" },
          { english: "Do you play cricket after school? — No, we don't.", note: "play is an action; we → don't in the short answer.", domain: "sport" },
          { english: "Are you tired today? — Yes, I am.", note: "Tired describes you, so be carries the question alone.", domain: "health" },
        ],
        "Nine questions from nine parts of life — and every one starts with be, do or does.",
      ),
      US(
        [
          {
            situation: "Meeting a new classmate",
            example: "“Do you like football? — Yes, I do!”",
            note: "The fastest friendship question in English.",
          },
          {
            situation: "On the bus",
            example: "“Is this seat free? — Yes, it is.”",
            note: "Flip is — and sit down.",
          },
          {
            situation: "At the shop door",
            example: "“Are you open? — No, we aren't. Come back at nine.”",
            note: "you (the shop team) → are → aren't in the answer.",
          },
          {
            situation: "First day at work",
            example: "“Do you work here? — Yes, I do. Come with me.”",
            note: "Checking people's place with do + work.",
          },
          {
            situation: "At the doctor",
            example: "“Do you sleep well? — No, I don't.”",
            note: "Doctors ask with do because sleep is an action verb.",
          },
        ],
        "Where yes/no questions live",
        "These questions open every conversation — buses, shops, doctors and new friends.",
      ),
      DL(
        "Two new friends",
        "Nina meets Omar on his first day at a new school.",
        [
          ["Nina", "Hello! Are you new here?"],
          ["Omar", "Yes, I am. I'm Omar. I'm from Egypt."],
          ["Nina", "Welcome, Omar! Do you have the class list?"],
          ["Omar", "Yes, I do. But I don't have a pen."],
          ["Nina", "Here — take my pen. Do you like cricket?"],
          ["Omar", "Yes, I do! We play it in Egypt too."],
          ["Nina", "Is your English class in room four?"],
          ["Omar", "I think so. Are you in class four too?"],
          ["Nina", "Yes, I am! Come — we're late."],
        ],
      ),
      CMP(
        "“Are you ready?” or “Do you ready?”",
        ["be-questions: flip alone", "do-questions: borrow a helper"],
        [
          ["The verb", "be is already in the sentence: am, is, are", "an action verb: eat, work, play, like"],
          ["The question", "Are you ready? Is she tired?", "Do you like tea? Does she work?"],
          ["The classic mistake", "“Do you ready?” is impossible", "“Like you tea?” is impossible — action verbs cannot lead"],
          ["Short answers", "Yes, I am. No, she isn't.", "Yes, I do. No, she doesn't."],
        ],
        {
          intro: "The number one question mistake in English: putting do in front of be.",
          verdict:
            "See be in the sentence? Flip it — never add do. See an action verb? Send do or does to the front. One helper at the front, never two.",
        },
      ),
      MS(
        [
          [
            "Do you are ready?",
            "Are you ready?",
            "Be never needs do. The verb are flips to the front by itself — one verb at the front, never two.",
          ],
          [
            "Does she likes music?",
            "Does she like music?",
            "Does already carries the s. After does, the main verb always stays in its base form.",
          ],
          [
            "Do you like tea? — Yes, I like.",
            "Do you like tea? — Yes, I do.",
            "Short answers echo the helper do — never the main verb. Save like for the long answer: Yes, I like tea.",
          ],
          [
            "You are ready?",
            "Are you ready?",
            "For a real question, flip be. Statement order with a question mark sounds like surprise — not a real information question.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Hear the question in the voice",
        "Written English shows the question mark. Spoken English shows the question in your voice. Yes/no questions rise at the end. Say “Are you ready?” two ways: flat, then rising. The rising one sounds like a real question. That is why the audio blocks matter — listen, then copy.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Sara is new in the class. “Are you from Lahore?” asks Nina. “No, I'm not. I'm from Karachi,” says Sara. “Do you like cricket?” “Yes, I do! I play every Friday.” “Does your sister play too?” “No, she doesn't. She watches.” The two girls talk all morning.",
          task: "Read the text two times. Then find two be-questions and two do-questions.",
        },
        writing: {
          task: "Write four yes/no questions for a new friend. Use be at least once and do/does at least twice. Answer your own questions with short answers.",
          guide: ["Are you ______?", "Do you like ______?", "Does your ______ ______?", "Yes, I am. / Yes, I do. / No, she doesn't."],
          model: "Are you from this city? Yes, I am. Do you like mangoes? Yes, I do. Does your father work here? No, he doesn't.",
        },
        listening: {
          script:
            "Do you have a pen? Yes, I do. Is it new? Yes, it is. Does your sister have one? No, she doesn't. Are you ready for the test? No, I'm not!",
          task: "Listen. Which questions use be, and which use do or does?",
        },
        speaking: {
          task: "Ask a partner four yes/no questions — two with be, two with do or does. Answer with short answers. Then swap roles.",
          frames: ["Are you ______?", "Do you ______?", "Does your ______ ______?", "Yes, I am. / Yes, I do. / No, I don't."],
          checklist: [
            "I flipped be when be was in the sentence.",
            "I used do/does with action verbs.",
            "My voice rose at the end of each question.",
          ],
        },
      }),
      LSP(
        [
          gls("yes/no question"),
          gls("short answer"),
          gls("Be makes questions by itself; other verbs need do."),
          gls("Do and does help other verbs make questions."),
          gls("Questions end with a question mark."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "be in the sentence? Flip it alone: Are you ready?",
        "Action verb? Use do/does + subject + base verb: Do you like tea?",
        "does carries the s: Does she work? — never “Does she works?”",
        "Short answers echo the first verb: Yes, I am. No, she doesn't.",
        "Yes/no questions rise at the end — your voice goes up.",
      ]),
      RV(
        [
          {
            question: "Which sentence flips be correctly?",
            options: ["She is happy. → Is she happy?", "She is happy. → Does she is happy?", "She is happy. → Does she happy?"],
            correctIndex: 0,
            explanation: "Be flips alone: Is she happy? do never helps be.",
            from: "Chapter 12 · Lesson 2",
          },
          {
            question: "He is one boy. Which question is correct?",
            options: ["Do he work on Sundays?", "Does he work on Sundays?", "Is he work on Sundays?"],
            correctIndex: 1,
            explanation: "he + action verb → does + he + base verb.",
            from: "Chapter 13 · Lesson 5",
          },
          {
            question: "“I don't drink coffee.” What kind of sentence is this?",
            options: ["a question", "a negative sentence", "a command"],
            correctIndex: 1,
            explanation: "don't makes the present simple negative — it says what is not true.",
            from: "Chapter 13 · Lesson 4",
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
            "Your friend's father is ONE person, and he plays cricket. Which question is correct?",
            [
              ["a", "Does he plays cricket?"],
              ["b", "Does he play cricket?"],
              ["c", "Do he play cricket?"],
            ],
            "b",
            fbx(
              "Does he play cricket?",
              "One other person → the helper does. And after does, the main verb always stays plain.",
              "“Does he plays” doubles the s; “Do he” uses the wrong helper for one person.",
              { english: "Does she like music? — Yes, she does.", translation: "does carries the s; like stays plain; the answer echoes does." },
            ),
            { hints: ["One other person needs the helper with the s. Now what happens to the main verb after it?"] },
          ),
          FB(
            "Complete the question.",
            "___ you like mangoes?",
            ["Do"],
            fb(
              "Do",
              "The subject is you, so the helper is do: do + you + like.",
              "does fits only he, she and it; be cannot help an action verb like like.",
            ),
            { hints: ["The subject is you. Which helper fits I, you, we and they?"] },
          ),
          MATCH(
            "Match each question to its short answer.",
            [
              ["q1", "Are you a student?"],
              ["q2", "Does she work here?"],
              ["q3", "Do they live near here?"],
            ],
            [
              ["a1", "Yes, I am."],
              ["a2", "No, she doesn't."],
              ["a3", "Yes, they do."],
            ],
            [
              ["q1", "a1"],
              ["q2", "a2"],
              ["q3", "a3"],
            ],
            fb(
              "Are you a student? → Yes, I am. · Does she work here? → No, she doesn't. · Do they live near here? → Yes, they do.",
              "A short answer repeats the first verb of the question — be echoes be, do echoes do.",
              "Mixing the machines breaks the answer: “Yes, I do” after an are-question is impossible.",
            ),
            { hints: ["Listen to the first word of each question. The answer repeats it."] },
          ),
          LIS(
            "Listen and answer.",
            "Do you live near the school? No, I don't. I live near the park.",
            "Where does the person live?",
            ["near the park", "Near the park", "the park"],
            fb(
              "near the park",
              "First comes the short answer no — then the true fact after it: I live near the park.",
              "The person does NOT live near the school — listen for what follows the short answer.",
            ),
            { hints: ["The answer comes after the short answer no."] },
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
              ["a", "Do you are hungry?"],
              ["b", "Are you hungry?"],
              ["c", "Is you hungry?"],
            ],
            "b",
            fb("Are you hungry?", "Hungry describes you, so be carries the question — and you takes are.", "“Do you are” puts two verbs at the front; “Is you” mixes the forms."),
          ),
          REORD(
            "Make the question.",
            "Does your sister work here?",
            fb(
              "Does your sister work here?",
              "QASM for yes/no questions without a question word: helper + subject + main verb + the rest.",
              "The helper always comes before the subject in a question.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "Does she works in a bank?",
            ["Does she work in a bank?"],
            fb(
              "Does she work in a bank?",
              "The s moves into does — one s per question. After does, the main verb is always plain.",
              "“Does she works” doubles the s: does and works cannot both carry it.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the question you hear.",
            "Do you live near here?",
            ["Do you live near here?"],
            fb(
              "Do you live near here?",
              "do + you + live: the standard yes/no question with an action verb.",
              "Don't forget the question mark — questions end with it.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Five yes/no questions",
      instructions:
        "Write five yes/no questions for a new classmate. Use be at least once, do at least once and does at least once. Then answer them as if you were the classmate — with short answers. Example: “Are you from this city? — Yes, I am. Do you like cricket? — Yes, I do.”",
      minWords: 20,
      maxWords: 70,
    },
    homework: [
      "Ask three yes/no questions to someone today — and answer their questions with short answers too.",
      "Take any page from this course. Find three questions. Which ones flip be? Which ones use do or does?",
      "Practise your voice: say “Are you ready?” five times. Make your voice rise on ready.",
    ],
  },

  // =========================================================================
  // Lesson 2 — WH-Questions
  // =========================================================================
  {
    slug: "ch-14-l-02",
    minutes: 30,
    description:
      "Meet the eight question words — what, where, when, who, why, how, which, whose — and the one QASM order that builds every WH-question: question word + auxiliary + subject + main verb.",
    outcomes: [
      "Name the eight question words and say what each one asks for",
      "Build WH-questions in QASM order",
      "Choose between who (the person) and whose (the owner)",
      "Use falling intonation on WH-questions",
    ],
    blocks: [
      LI(
        "Yes/no questions are small doors: the answer is yes or no. WH-questions are big doors. The answer can be a thing, a place, a time, a person, a reason, a way, a choice or an owner. This lesson gives you the eight keys — and the one order that opens them all.",
        [
          "You can ask yes/no questions with be and do/does (Chapter 14 · Lesson 1).",
          "You know be flips alone: Is she happy? (Chapter 12 · Lesson 2)",
          "You know do and does + subject + base verb: Do you work? (Chapter 13 · Lesson 5)",
        ],
      ),
      vocGlossary("The eight question words", [
        { word: "what", partOfSpeech: "question word", definition: "Asks about things, actions and information in general." },
        { word: "where", partOfSpeech: "question word", definition: "Asks about places." },
        { word: "when", partOfSpeech: "question word", definition: "Asks about time." },
        { word: "who", partOfSpeech: "question word", definition: "Asks about people." },
        { word: "why", partOfSpeech: "question word", definition: "Asks about reasons." },
        { word: "how", partOfSpeech: "question word", definition: "Asks about the way something happens." },
        { word: "which", partOfSpeech: "question word", definition: "Asks for one choice from a small set." },
        { word: "whose", partOfSpeech: "question word", definition: "Asks who owns something." },
      ]),
      H("Eight words, one order"),
      T(
        "English has eight big question words. Each one asks for different information. But they all share one order. Learn the order once. Then all eight words work for you.",
      ),
      {
        type: "definition",
        term: "question word",
        partOfSpeech: "noun",
        definition:
          "A question word starts a WH-question and tells the listener what information you want: what, where, when, who, why, how, which, whose.",
        example: {
          english: "Where do you live?",
          translation: "where asks for a place — the answer will be a place, like In Lahore.",
        },
      },
      ST(
        "Build a WH-question in four steps (QASM)",
        [
          {
            title: "Step 1 — Choose the question word (Q)",
            text: "What do you want to know? A place? Use where. A time? Use when. A reason? Use why.",
            examples: [
              { english: "____ does the class start? → When", note: "You ask about time, so the question word is when." },
            ],
          },
          {
            title: "Step 2 — Add the auxiliary (A)",
            text: "Be flips alone. Action verbs borrow do — or does for he, she and it.",
            examples: [
              { english: "Where is the bank?", note: "be is the helper — no do needed." },
              { english: "Where does he work?", note: "does arrives with the s; work stays plain." },
            ],
          },
          {
            title: "Step 3 — Add the subject (S)",
            text: "The person or thing you ask about: you, he, the bus, your sister.",
            examples: [
              { english: "When does the bus leave?", note: "the bus is the subject — right after does." },
            ],
          },
          {
            title: "Step 4 — Add the main verb and the rest (M)",
            text: "Finish with the action and the details. End with a question mark.",
            examples: [
              { english: "Why do you study English? — Because I like it.", note: "Because-answers match why-questions." },
            ],
          },
        ],
      ),
      GR(
        "The QASM rule",
        "WH-question = Question word + Auxiliary (be or do/does) + Subject + Main verb + the rest. The auxiliary always comes before the subject: Where do you live?",
        [
          { english: "Where do you live?", translation: "where (Q) + do (A) + you (S) + live (M). One order for all eight words." },
          { english: "When is the party?", translation: "when (Q) + is (A) + the party (S). No main verb — be carries the idea." },
          { english: "Why does she cry?", translation: "QASM with does: the s lives in does, and cry stays plain." },
        ],
        [
          "Subject questions skip the helper: “Who lives here?” — who IS the subject, so the verb needs no do.",
        ],
      ),
      TB(
        "The eight question words",
        ["Word", "Asks about", "Question", "Answer gives"],
        [
          ["what", "things, actions", "What is your name?", "a thing — My name is Sara."],
          ["where", "places", "Where do you live?", "a place — In Lahore."],
          ["when", "time", "When does class start?", "a time — At nine."],
          ["who", "people", "Who is your teacher?", "a person — Mr Khan."],
          ["why", "reasons", "Why do you study English?", "a reason — Because I like it."],
          ["how", "the way", "How do you go to work?", "a way — By bus."],
          ["which", "one from a set", "Which colour do you want?", "a choice — The blue one."],
          ["whose", "ownership", "Whose pen is this?", "an owner — It's Ali's."],
        ],
        "Eight words, eight kinds of information — but only one order.",
      ),
      AU(
        "Listen: WH-questions fall",
        "Where do you live? What is your name? When does class start? Who is your teacher? Why do you study English? How do you go to work? Listen to the end — the voice falls down.",
        0.85,
      ),
      AU(
        "Listen: questions and answers",
        "What is your name? — My name is Sara. Where do you live? — In Lahore. When does the class start? — At nine. How do you go to work? — By bus.",
        0.9,
      ),
      EXD(
        "The eight words at work",
        [
          { english: "What do you eat for breakfast? — Bread and eggs.", note: "what + do + you + eat. The answer is a thing.", domain: "food" },
          { english: "Where does your uncle live? — In Multan.", note: "Asks for a place. does because uncle is one man.", domain: "family" },
          { english: "When is your English class? — On Mondays.", note: "be carries the idea — no action verb, no do.", domain: "education" },
          { english: "How do you go to school? — I walk.", note: "how asks the way. The answer names the way.", domain: "travel" },
          { english: "Which shirt do you want? — The white one.", note: "which asks for one from a set you can see.", domain: "shopping" },
          { english: "Why does he work at night? — Because the shop is open late.", note: "why asks the reason; because gives it.", domain: "work" },
          { english: "Whose phone is this? — It's my sister's.", note: "whose asks the owner. The 's shows the owner.", domain: "home" },
          { english: "Who do you play with on Sundays? — My cousins.", note: "who here receives the action: who + do + you + play.", domain: "sport" },
          { english: "How is your grandmother? — She's well, thank you.", note: "how + be asks about health and feelings.", domain: "health" },
        ],
        "Every question follows QASM — only the first word changes.",
      ),
      US(
        [
          {
            situation: "Lost in the street",
            example: "“Excuse me, where is the station? — Go straight, then turn left.”",
            note: "where is the survival question of travel.",
          },
          {
            situation: "A new classmate",
            example: "“What's your name? Where are you from?”",
            note: "The first two questions of every friendship.",
          },
          {
            situation: "At the market",
            example: "“Which apples do you want? — The red ones.”",
            note: "which points at the set in front of you.",
          },
          {
            situation: "Making plans",
            example: "“When is the football match? — On Saturday.”",
            note: "when sets the time of every plan.",
          },
          {
            situation: "A curious child",
            example: "“Why is the sky blue? — Because of the light!”",
            note: "why questions everything — and be flips after it.",
          },
        ],
        "Where WH-questions live",
        "Each question word hunts one kind of information. Choose the word, and the answer follows.",
      ),
      DL(
        "The new student",
        "Nina helps Omar on his first morning.",
        [
          ["Nina", "Hello! I'm Nina. What's your name?"],
          ["Omar", "Hi, Nina. I'm Omar."],
          ["Nina", "Where are you from, Omar?"],
          ["Omar", "I'm from Egypt. My father works here."],
          ["Nina", "What does he do?"],
          ["Omar", "He's an engineer. He builds bridges."],
          ["Nina", "Wow! When does your class start?"],
          ["Omar", "At nine. And where is room four?"],
          ["Nina", "Come with me! It's this way."],
        ],
      ),
      CMP(
        "Who or whose?",
        ["who = the person", "whose = the owner"],
        [
          ["Meaning", "Asks about a person: Who is that?", "Asks who owns a thing: Whose bag is that?"],
          ["The answer", "A person: “My teacher.”", "An owner: “It's Sara's.”"],
          ["The sound", "who rhymes with you", "whose rhymes with shoes"],
          ["The trap", "Who cannot own anything", "Whose never asks for a name — only for the owner"],
        ],
        {
          intro: "Two little words, one letter different — and completely different jobs.",
          verdict:
            "Asking about a person → who. Asking about an owner → whose. Who is that girl? Whose bag is this?",
        },
      ),
      MS(
        [
          [
            "Where you live?",
            "Where do you live?",
            "The action verb cannot lead alone. Action verbs borrow do: QASM — where + do + you + live.",
          ],
          [
            "Who is your name?",
            "What is your name?",
            "Names are things, not people. what asks for things; who asks for people.",
          ],
          [
            "Why she is tired?",
            "Why is she tired?",
            "After the question word, the helper comes before the subject: why + is + she.",
          ],
          [
            "Where does he lives?",
            "Where does he live?",
            "The s moves into does — after does, the main verb is always plain.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "Subject questions are different",
        "“Who lives here?” has no do or does. Why? The question word IS the subject. Who lives here? — My aunt. Compare the object question: Who do you know here? — My aunt. Same word, two jobs: subject who takes the verb alone; object who needs do.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Omar is new in the city. Every morning he asks questions. “Where is the bus stop?” “When does school start?” His friend Nina answers. “The bus stop is near the shop. School starts at eight.” On Friday, Omar knows the answers himself. “How do you know the city now?” Nina laughs. “I ask questions!” says Omar.",
          task: "Read the text two times. Find three WH-questions. Which word starts each one?",
        },
        writing: {
          task: "Write six questions about a friend's day. Use six different question words. Do not answer them — your partner answers.",
          guide: ["What do you ______?", "Where do you ______?", "When does your ______?", "Why do you ______?", "How do you ______?", "Who do you ______?"],
          model: "What do you eat for breakfast? Where do you study? When does your English class start?",
        },
        listening: {
          script:
            "Where does Nadia work? She works in a hospital. When does she start? She starts at eight. How does she go there? She goes by bus. Who works with her? Her friend Zara.",
          task: "Listen. Write the four question words you hear.",
        },
        speaking: {
          task: "Interview a partner with four different question words. Answer with real information — a thing, a place, a time and a way.",
          frames: ["What ______?", "Where ______?", "When ______?", "How ______?"],
          checklist: [
            "I used four different question words.",
            "My helper came before the subject.",
            "My voice fell at the end of each question.",
          ],
        },
      }),
      LSP(
        [
          gls("question word"),
          gls("what"),
          gls("where"),
          gls("when"),
          gls("who"),
          gls("why"),
          gls("how"),
          gls("which"),
          gls("whose"),
          gls("Questions end with a question mark."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Eight question words: what, where, when, who, why, how, which, whose.",
        "Each word hunts different information — a thing, place, time, person, reason, way, choice or owner.",
        "WH-questions follow QASM: question word + auxiliary + subject + main verb.",
        "The helper comes before the subject: Why is she tired? — never “Why she is tired?”",
        "WH-questions fall at the end — your voice goes down.",
        "Subject questions skip the helper: Who lives here?",
      ]),
      RV(
        [
          {
            question: "“Does she work on Sundays?” What kind of question is this?",
            options: ["a WH-question", "a yes/no question", "a negative sentence"],
            correctIndex: 1,
            explanation: "do/does + subject starts a yes/no question — no question word in front.",
            from: "Chapter 13 · Lesson 5",
          },
          {
            question: "Which verb can flip to the front of a question ALONE?",
            options: ["be", "play", "eat"],
            correctIndex: 0,
            explanation: "Be flips alone: Is she ready? Action verbs need do or does.",
            from: "Chapter 12 · Lesson 2",
          },
          {
            question: "In “Ali reads a book.”, which word is the action word?",
            options: ["Ali", "reads", "book"],
            correctIndex: 1,
            explanation: "Reads names the action — action words are verbs.",
            from: "Chapter 07 · Lesson 3",
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
            "You want to know the TIME your class starts. Which question is correct?",
            [
              ["a", "When does your class start?"],
              ["b", "When your class starts?"],
              ["c", "Where does your class start?"],
            ],
            "a",
            fbx(
              "When does your class start?",
              "Time questions start with when, then the helper does, then the subject — QASM.",
              "The verb cannot lead alone; and where asks about places, not times.",
              { english: "When does the bus leave? — At nine.", translation: "when + does + the bus + leave: time question, QASM order." },
            ),
            { hints: ["Time questions start with one special word. Then the helper, then the subject."] },
          ),
          FB(
            "Complete the question about a PLACE.",
            "___ do you live?",
            ["Where"],
            fb(
              "Where",
              "where asks for a place — the answer will be a place, like In Lahore.",
              "when asks about time and who asks about people; neither fits a place.",
            ),
            { hints: ["Think of the word that hunts for a place."] },
          ),
          REORD(
            "Put the words in QASM order.",
            "Why does she study English?",
            fb(
              "Why does she study English?",
              "QASM: question word (why) + helper (does) + subject (she) + main verb (study) + the rest.",
              "The helper always stands between the question word and the subject.",
            ),
            { hints: ["First the question word, then the helper, then the person, then the action."] },
          ),
          LIS(
            "Listen and answer.",
            "When does the bus leave? At nine. Where does it go? To the city. Who drives it? Mr Ali.",
            "Where does the bus go?",
            ["to the city", "To the city", "the city"],
            fb(
              "to the city",
              "The where-question hunts for a place — and the answer names it: to the city.",
              "At nine answers the time question, and Mr Ali answers the person question.",
            ),
            { hints: ["Listen for the answer right after the second question."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which question asks about the OWNER of the pen?",
            [
              ["a", "Who pen is this?"],
              ["b", "Whose pen is this?"],
              ["c", "Which pen is this?"],
            ],
            "b",
            fb("Whose pen is this?", "Whose asks who owns the pen — the answer is an owner, like It's Sara's.", "who asks about a person, not an owner; which asks for a choice from a set."),
          ),
          REORD(
            "Make the question.",
            "Where does your sister work?",
            fb(
              "Where does your sister work?",
              "QASM with does: where + does + your sister + work.",
              "One s per question — it lives inside does.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "Why she is tired?",
            ["Why is she tired?"],
            fb(
              "Why is she tired?",
              "After the question word, the helper comes first: why + is + she.",
              "Statement order after the question word is the most common WH-mistake.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the question you hear.",
            "When is the football match?",
            ["When is the football match?"],
            fb(
              "When is the football match?",
              "when + is + the match: be is the helper, so no do appears.",
              "The match is one thing → is, not are.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "The eight angles",
      instructions:
        "Choose one activity you do (for example play football). Write six WH-questions about it with six different question words — what, where, when, who, why, how — and answer each one. Example: “When do I play? On Saturdays.”",
      minWords: 25,
      maxWords: 85,
    },
    homework: [
      "Ask someone three WH-questions today. Write down their answers.",
      "Look at a food packet or an app screen. Write two questions about it: one with what, one with how.",
      "Say the eight question words out loud, in order, twice: what, where, when, who, why, how, which, whose.",
    ],
  },

  // =========================================================================
  // Lesson 3 — Question Formation Practice
  // =========================================================================
  {
    slug: "ch-14-l-03",
    minutes: 25,
    description:
      "Turn statements into questions and questions back into statements — the conversion skill that keeps real conversation moving, plus subject questions like “Who lives here?”",
    outcomes: [
      "Convert statements into yes/no questions with be and do/does",
      "Convert statements into WH-questions by replacing the target information",
      "Turn questions back into statements",
      "Build subject questions (Who lives here?) without do",
    ],
    blocks: [
      LI(
        "You own both asking machines now. This lesson drives them in both directions. Turn a statement into a question. Turn a question back into a statement. This is the skill behind every real conversation. Someone gives you a fact. You ask about it.",
        [
          "You can build yes/no questions with be and do/does (Chapter 14 · Lesson 1).",
          "You can build WH-questions in QASM order (Chapter 14 · Lesson 2).",
          "You know the present simple: habits with -s for he, she and it (Chapter 13 · Lesson 2).",
        ],
      ),
      vocGlossary("Words for this lesson", [
        { word: "statement", partOfSpeech: "noun", definition: "A sentence that tells something. It ends with a full stop." },
        { word: "question", partOfSpeech: "noun", definition: "A sentence that asks. It ends with a question mark." },
        { word: "question word", partOfSpeech: "noun", definition: "The first word of a WH-question: what, where, when, who, why, how, which, whose." },
        { word: "auxiliary verb", partOfSpeech: "noun", definition: "The little helper verb at the front of a question: be, do or does." },
        { word: "word order", partOfSpeech: "noun", definition: "The fixed position of words in an English sentence." },
      ]),
      H("Two directions, one skill"),
      T(
        "A statement gives information. A question asks for it. Moving between them is easy when you see the pieces. The verb moves to the front. The subject follows it. Everything else stays almost in place.",
      ),
      {
        type: "definition",
        term: "statement",
        partOfSpeech: "noun",
        definition:
          "A statement says something is true: She works in a bank. A question borrows the same words and changes the order: Does she work in a bank?",
        example: {
          english: "They are at home. → Are they at home?",
          translation: "The words stay. Only be moves — from the middle to the front.",
        },
      },
      ST(
        "Turn a statement into a question in three steps",
        [
          {
            title: "Step 1 — Find the verb",
            text: "Look for be first. If there is no be, find the action verb.",
            examples: [
              { english: "They are at home. → are", note: "be — it will flip." },
              { english: "He gets up at six. → gets up", note: "Action verb — it needs do or does." },
            ],
          },
          {
            title: "Step 2 — Move the front piece",
            text: "Be jumps to the front. An action verb sends do or does instead — and drops its own s.",
            examples: [
              { english: "They are at home. → Are they at home?", note: "Only be moves; nothing else changes." },
              { english: "He gets up at six. → Does he get up at six?", note: "does arrives; gets gives up its s." },
            ],
          },
          {
            title: "Step 3 — Add the question word for WH",
            text: "Choose the information you want. Put the question word in front. Remove that information from the sentence.",
            examples: [
              { english: "She works in a bank. → Where does she work?", note: "The place in a bank is gone — where asks for it." },
            ],
          },
        ],
      ),
      GR(
        "Statement → question, both machines",
        "be: She is tired. → Is she tired? Action verb: She works here. → Does she work here? WH: put the question word first and remove the information it hunts for: She works in a bank. → Where does she work?",
        [
          { english: "You like mangoes. → Do you like mangoes?", translation: "you → do; the base verb never changes with you." },
          { english: "The shop opens at nine. → When does the shop open?", translation: "The time at nine disappears — when asks for it." },
          { english: "Does she work here? → She works here.", translation: "Backwards: the helper goes home and the s returns to works." },
        ],
        [
          "Going back to a statement, the s comes back: Does he work? → He works. The helper carries the s only in questions and negatives.",
        ],
      ),
      TB(
        "One statement, three moves",
        ["Statement", "Yes/No question", "WH-question"],
        [
          ["She works in a bank.", "Does she work in a bank?", "Where does she work?"],
          ["They are at home.", "Are they at home?", "Where are they?"],
          ["He gets up at six.", "Does he get up at six?", "When does he get up?"],
          ["The children play in the park.", "Do the children play in the park?", "Where do the children play?"],
        ],
        "The statement keeps its words. Only the verb moves — and the question word replaces the information it hunts for.",
      ),
      AU(
        "Listen: statement to question",
        "She works in a bank. Does she work in a bank? Where does she work? They are at home. Are they at home? Where are they? Hear the verb move to the front.",
        0.85,
      ),
      AU(
        "Listen: the question game",
        "I get up at six. Really? When do you get up? At six! Do you always get up early? Yes, I do. Why do you get up so early? Because I go running.",
        0.9,
      ),
      EXD(
        "Conversions in real life",
        [
          { english: "You like mangoes. → Do you like mangoes?", note: "you → do. The base verb never changes with you.", domain: "food" },
          { english: "My sister is a nurse. → Is your sister a nurse?", note: "be flips — and my becomes your when you ask me.", domain: "family" },
          { english: "The shop opens at nine. → When does the shop open?", note: "The time nine disappears — when hunts for it.", domain: "shopping" },
          { english: "He lives near the station. → Does he live near the station?", note: "he → does; lives drops the s.", domain: "travel" },
          { english: "They study at the library. → Where do they study?", note: "The place is gone — where asks for it. they → do.", domain: "education" },
          { english: "This is Sara's bag. → Whose bag is this?", note: "The owner's name disappears — whose asks for it.", domain: "everyday" },
          { english: "We watch the match on Fridays. → What do you watch on Fridays?", note: "what hunts for the thing. we becomes you in the question.", domain: "sport" },
          { english: "My phone doesn't work. → Why doesn't your phone work?", note: "Negative questions exist! doesn't stays right behind why.", domain: "technology" },
          { english: "The baby cries at night. → Why does the baby cry?", note: "why hunts the reason — and does keeps the s for the baby.", domain: "health" },
        ],
        "Statements from life — and the questions that grow out of them.",
      ),
      US(
        [
          {
            situation: "Curious about a classmate",
            example: "“I have two brothers.” → “Do you have sisters too?”",
            note: "Hear a fact, ask the next question. This is conversation.",
          },
          {
            situation: "Planning together",
            example: "“The class starts at nine.” → “Where does it start?”",
            note: "One statement can grow several questions.",
          },
          {
            situation: "Checking a fact",
            example: "“The shop isn't open.” → “Is it open on Sundays?”",
            note: "Flip be again to check the details.",
          },
          {
            situation: "At the doctor",
            example: "“I don't sleep well.” → “Do you drink tea at night?”",
            note: "The doctor converts your fact into the next question.",
          },
          {
            situation: "Small talk at work",
            example: "“I work from home.” → “Do you like it?”",
            note: "The shortest conversion — and the friendliest.",
          },
        ],
        "The conversion habit",
        "Facts come in statements. Curiosity turns them into questions. That is how talk never stops.",
      ),
      DL(
        "The question game",
        "Nina and Omar play a conversion game after class.",
        [
          ["Nina", "Let's play the question game. I say a statement, you make a question."],
          ["Omar", "OK! Go."],
          ["Nina", "“My father works in a hospital.”"],
          ["Omar", "Does your father work at night?"],
          ["Nina", "Good question! No, he works in the morning. Now you say a statement."],
          ["Omar", "“I play cricket on Saturdays.”"],
          ["Nina", "Who do you play with?"],
          ["Omar", "My cousins. This game is easy!"],
          ["Nina", "Then why do you always win, Omar?"],
        ],
      ),
      CMP(
        "Subject questions: “Who lives here?” or “Who do you know?”",
        ["who = the subject", "who = the object"],
        [
          ["Meaning", "Who does the action: Who lives here?", "Who receives the action: Who do you know here?"],
          ["The helper", "No do — the verb carries itself: who + lives", "do arrives: who + do + you + know"],
          ["The -s", "he/she-style s on the verb: Who lives here? Who works there?", "No s on the main verb: Who do you know?"],
          ["The answer", "A person as doer: “My aunt.”", "A person as receiver: “My friend Zara.”"],
        ],
        {
          intro: "The trickiest corner of WH-questions: who can be the subject or the object.",
          verdict:
            "Ask WHO does it → who + verb, no do: Who lives here? Ask WHO receives it → who + do + person + verb: Who do you know?",
        },
      ),
      MS(
        [
          [
            "Where she works?",
            "Where does she work?",
            "QASM: where + does + she + work. The helper always stands before the subject.",
          ],
          [
            "What means this word?",
            "What does this word mean?",
            "means cannot lead the question. does takes the s; mean stays plain.",
          ],
          [
            "Does he gets up early?",
            "Does he get up early?",
            "One s per question — it lives in does. The main verb goes back to its base form.",
          ],
          [
            "You are from Egypt?",
            "Are you from Egypt?",
            "For a real information question, flip be. Statement order with a question mark sounds like surprise.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Why train both directions?",
        "When you listen, people give you statements. When you speak, you want details. Convert fast, and every answer gives you the next question. Statement in, question out — that is the engine of conversation."
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Ravi's cousin Priya visits the city. She asks questions all day. “Does the market open on Sundays?” “When does the last bus leave?” “Where is the big library?” Ravi answers everything. In the evening Priya says, “Your city is easy!” “No,” laughs Ravi. “Your questions are good.”",
          task: "Read the text. Find two yes/no questions and two WH-questions.",
        },
        writing: {
          task: "Write three statements about your week. Under each statement, write one yes/no question and one WH-question that grow from it.",
          guide: ["I play ______ on ______.", "Do you ______?", "When do you ______?"],
          model: "I cook dinner on Sundays. Do you cook? What do you cook?",
        },
        listening: {
          script:
            "My brother works at night. Does he work at night? Yes, he does. When does he start? At ten. Where does he work? In a hospital.",
          task: "Listen. Which question asks about time?",
        },
        speaking: {
          task: "Play the question game with a partner. One says a statement, the other makes a question from it. Swap after three turns.",
          frames: ["Do you ______?", "Does your ______ ______?", "Where do you ______?", "When do you ______?"],
          checklist: [
            "I used the right helper for each subject.",
            "The main verb stayed plain after do and does.",
            "My question word replaced the information I wanted.",
          ],
        },
      }),
      LSP(
        [
          gls("statement"),
          gls("question"),
          gls("question word"),
          gls("auxiliary verb"),
          gls("Be makes questions by itself; other verbs need do."),
          gls("English word order is subject, verb, object."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "be statements flip: They are at home. → Are they at home?",
        "Action statements borrow do/does — and the s moves into does: He works → Does he work?",
        "WH-questions replace the information they hunt for: She works in a bank. → Where does she work?",
        "Questions go back to statements the same way, backwards — and the s returns to the verb.",
        "Subject questions skip do: Who lives here? — the verb carries itself.",
      ]),
      RV(
        [
          {
            question: "Which sentence has correct English order?",
            options: ["Reads she books.", "She reads books.", "Books she reads."],
            correctIndex: 1,
            explanation: "Statements follow subject, verb, object — the order every question is built on.",
            from: "Chapter 09 · Lesson 4",
          },
          {
            question: "He is one man. Which form of be fits him?",
            options: ["are", "is", "am"],
            correctIndex: 1,
            explanation: "One man → he → is. The flip will move that is to the front.",
            from: "Chapter 12 · Lesson 1",
          },
          {
            question: "“She doesn't eat meat.” What is true about the verb eat?",
            options: ["It takes an s.", "It is in the base form.", "It comes before doesn't."],
            correctIndex: 1,
            explanation: "doesn't carries the s; the main verb stays plain — in negatives and in questions.",
            from: "Chapter 13 · Lesson 4",
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
            "The statement is “She works in a bank.” Which WH-question asks about the PLACE?",
            [
              ["a", "Where does she work?"],
              ["b", "When does she work?"],
              ["c", "What does she work?"],
            ],
            "a",
            fbx(
              "Where does she work?",
              "The place words in a bank disappear, and where hunts for them: QASM — where + does + she + work.",
              "when hunts for time; what hunts for things — neither fits a place.",
              { english: "He lives near the station. → Where does he live?", translation: "The place near the station disappears — where asks for it." },
            ),
            { hints: ["Which question word hunts for a place? Watch the place words vanish."] },
          ),
          FB(
            "Complete the yes/no question.",
            "They live near the school. → ___ they live near the school?",
            ["Do"],
            fb(
              "Do",
              "They belongs to the do-team: I, you, we, they → do + subject + base verb.",
              "does fits only he, she and it; be never helps an action verb like live.",
            ),
            { hints: ["They belongs to the same helper team as I, you and we."] },
          ),
          REORD(
            "Put the words in QASM order to ask about the time.",
            "When does the class start?",
            fb(
              "When does the class start?",
              "QASM: when + does + the class + start. The time information is gone — the question hunts for it.",
              "The helper stands between the question word and the subject.",
            ),
            { hints: ["Question word first, then the helper, then the class."] },
          ),
          CORR(
            "Fix the question.",
            "Where you work?",
            ["Where do you work?"],
            fb(
              "Where do you work?",
              "The action verb needs its helper between the question word and the subject: where + do + you + work.",
              "“Where you work?” sounds like statement order — the most common street mistake in English.",
            ),
            { hints: ["An action verb needs its helper between the question word and you."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which question grows correctly from “He gets up at six.”?",
            [
              ["a", "When he gets up?"],
              ["b", "When does he get up?"],
              ["c", "When do he get up?"],
            ],
            "b",
            fb("When does he get up?", "The time at six disappears; does arrives with the s, and gets becomes get.", "Statement order cannot ask; and he takes does, not do."),
          ),
          REORD(
            "Make the question.",
            "What does this word mean?",
            fb(
              "What does this word mean?",
              "QASM: what + does + this word + mean. The s lives in does, not in mean.",
              "The main verb never takes the s in a question — the helper holds it.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "What means this word?",
            ["What does this word mean?"],
            fb(
              "What does this word mean?",
              "means cannot lead the question — does takes the s and mean goes plain.",
              "The verb always needs its helper in a question, even short ones.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the question you hear.",
            "Where does your father work?",
            ["Where does your father work?"],
            fb(
              "Where does your father work?",
              "where + does + your father + work: QASM with does for one man.",
              "One s per question — it lives inside does.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Conversion table",
      instructions:
        "Write three statements about your week (for example “I play football on Fridays.”). Convert each into a yes/no question AND a WH-question — nine items total. Then answer all three WH-questions. Example: “I play football on Fridays. Do I play on Fridays? When do I play? On Fridays.”",
      minWords: 20,
      maxWords: 75,
    },
    homework: [
      "Listen to one real conversation today — family, shop or video. Write down two questions you hear.",
      "Write five statements about your family. Convert two of them into questions.",
      "Play the question game with a friend: statements in, questions out, five rounds.",
    ],
  },

  // =========================================================================
  // Lesson 4 — Negatives Review and Imperatives
  // =========================================================================
  {
    slug: "ch-14-l-04",
    minutes: 25,
    description:
      "Say no with don't, doesn't, isn't and aren't — then command, instruct, warn and suggest with imperatives: Open the door. Don't worry. Let's go.",
    outcomes: [
      "Form positive and negative imperatives with the base verb",
      "Soften instructions into polite requests with please",
      "Make we-suggestions with Let's",
      "Tell imperative Don't apart from present simple don't and doesn't",
    ],
    blocks: [
      LI(
        "You know how to say no: don't, doesn't, isn't, aren't. Now meet the shortest sentences in English: imperatives. No subject. Just the verb. Open the door. Don't worry. Sit down, please. Small sentences — big power.",
        [
          "You can make negatives with don't and doesn't + base verb (Chapter 13 · Lesson 4).",
          "You can make be-negatives with isn't, aren't and I'm not (Chapter 12 · Lesson 2).",
          "You know the base form of verbs: eat, work, play (Chapter 13 · Lesson 2).",
        ],
      ),
      vocGlossary("Words for this lesson", [
        { word: "imperative", partOfSpeech: "noun", definition: "A sentence that gives an order, an instruction, advice or a warning. It uses the base verb with no subject." },
        { word: "polite", partOfSpeech: "adjective", definition: "Speaking in a way that shows respect and care for the other person." },
        { word: "request", partOfSpeech: "noun", definition: "A polite ask for help or for something." },
        { word: "command", partOfSpeech: "noun", definition: "An order. Commands can be kind or hard — please makes the difference." },
      ]),
      H("The sentence with no subject"),
      T(
        "Look at this sentence: Open the door. Where is the subject? There isn't one! Imperatives talk directly to you. The word you is hiding — understood, never spoken. The verb comes first, in its base form.",
      ),
      {
        type: "definition",
        term: "imperative",
        partOfSpeech: "noun",
        definition:
          "An imperative starts with the base verb and has no subject. It gives an order, an instruction, a request or a warning: Stop! Listen carefully. Don't touch that.",
        example: {
          english: "Don't be late!",
          translation: "Don't + be + late. Even be follows don't in imperatives — never “Don't late!”",
        },
      },
      ST(
        "Build imperatives in three steps",
        [
          {
            title: "Step 1 — Start with the base verb",
            text: "No to, no -s, no subject. Just the verb.",
            examples: [
              { english: "Open the window.", note: "open — base form, nothing added." },
              { english: "Listen and repeat.", note: "Two verbs, two beats — the classic classroom instruction." },
            ],
          },
          {
            title: "Step 2 — Add the details",
            text: "Say what, where or when.",
            examples: [
              { english: "Turn left at the corner.", note: "Left tells what; at the corner tells where." },
            ],
          },
          {
            title: "Step 3 — Choose the tone",
            text: "Add please to soften. Add Don't to forbid. Add Let's to invite.",
            examples: [
              { english: "Please help me with this bag.", note: "please can sit at the front or the end." },
              { english: "Don't touch that!", note: "Don't + base verb — the negative imperative." },
            ],
          },
        ],
      ),
      GR(
        "The imperative rule",
        "Imperative = base verb + the rest. No subject. Negative: Don't + base verb. Soften with please: Please sit down. / Sit down, please. Suggest together with Let's + verb: Let's go.",
        [
          { english: "Take one pill every morning.", translation: "A doctor's instruction — base verb take, no subject." },
          { english: "Don't be late!", translation: "Don't + be — even be follows don't in imperatives." },
          { english: "Let's play football!", translation: "Let's = let us: a suggestion for you and me together." },
        ],
        [
          "The negative of be is special: Don't be late! — never “Don't late!” and never “Doesn't be late!”",
        ],
      ),
      TB(
        "Imperatives in real life",
        ["Context", "Examples"],
        [
          ["Classroom instructions", "Open your books. Listen and repeat. Don't write yet."],
          ["Directions", "Go straight. Turn right at the bank. Don't take the motorway."],
          ["Recipes and how-to", "Boil the water. Add the rice. Don't use too much salt."],
          ["Requests", "Please help me. Please wait here."],
          ["Warnings", "Don't touch that! Don't run near the pool!"],
        ],
        "One form — orders, instructions, requests, suggestions and warnings.",
      ),
      AU(
        "Listen: the teacher's voice",
        "Open your books. Listen and repeat. Don't write yet. Work in pairs. Please sit down. Don't touch that! Hear the verbs lead.",
        0.85,
      ),
      AU(
        "Listen: making tea",
        "First, boil the water. Then warm the pot. Add the tea. Wait three minutes. Don't move the pot. Pour, and enjoy!",
        0.9,
      ),
      EXD(
        "Imperatives at work",
        [
          { english: "Please close the window. It's cold.", note: "please + close — a request, not an order.", domain: "home" },
          { english: "Turn left at the traffic lights, then go straight.", note: "Directions are imperative chains.", domain: "travel" },
          { english: "Don't eat in the library, please.", note: "Don't and please can share one sentence.", domain: "education" },
          { english: "Wash your hands before dinner.", note: "Family rules are often imperatives — no please needed with family.", domain: "family" },
          { english: "Take two eggs and mix them with the milk.", note: "Recipes speak in imperatives only.", domain: "food" },
          { english: "Please show me the blue shirt.", note: "Shopping requests: please + show + me + the thing.", domain: "shopping" },
          { english: "Don't use your phone in the meeting.", note: "Workplace rules — don't + base verb.", domain: "work" },
          { english: "Stretch before you run, and don't forget your water.", note: "Coach talk: advice in imperative form.", domain: "sport" },
          { english: "Take this medicine twice a day. Don't stop early.", note: "Doctor's orders: the clearest imperatives in life.", domain: "health" },
        ],
        "Nine places where the shortest sentences do the biggest jobs.",
      ),
      US(
        [
          {
            situation: "In class",
            example: "“Open your books to page ten. Listen and repeat.”",
            note: "The teacher's day is built from imperatives.",
          },
          {
            situation: "Giving directions to a taxi",
            example: "“Go straight, please. Turn right at the shop.”",
            note: "please keeps you polite in a moving car.",
          },
          {
            situation: "Helping at home",
            example: "“Wash the fruit, please. Don't use the hot water.”",
            note: "Instructions and warnings in one breath.",
          },
          {
            situation: "Warning a child",
            example: "“Stop! Don't run near the road!”",
            note: "Warnings drop please — speed matters more.",
          },
          {
            situation: "Making a plan with a friend",
            example: "“Let's go to the park. Let's take our bikes.”",
            note: "Let's makes a we-suggestion.",
          },
        ],
        "Where imperatives live",
        "One little form runs classrooms, kitchens, roads and warnings.",
      ),
      DL(
        "Cooking with Dadi",
        "Sara learns to cook rice with her grandmother.",
        [
          ["Dadi", "Come here, Sara. Wash your hands first."],
          ["Sara", "OK, Dadi. They are clean now."],
          ["Dadi", "Good. Boil the water — but don't use too much."],
          ["Sara", "Like this?"],
          ["Dadi", "Perfect. Now add the rice. Stir slowly."],
          ["Sara", "Stir… slowly… like this?"],
          ["Dadi", "Yes! Don't rush. Good rice needs time."],
          ["Sara", "And salt, Dadi?"],
          ["Dadi", "A little. Taste it. And don't tell your mother — she always uses too much!"],
        ],
      ),
      CMP(
        "“Don't worry!” or “He doesn't worry”?",
        ["Don't + verb (imperative)", "don't/doesn't + verb (present simple)"],
        [
          ["Who it talks to", "You — directly: Don't worry!", "He, she, they…: He doesn't worry."],
          ["The subject", "No subject — the hidden you", "A real subject stands in front"],
          ["The helper", "Always Don't — for everyone", "don't or doesn't, by subject"],
          ["The job", "Stops someone doing something now", "Says what is not true or not a habit"],
        ],
        {
          intro: "Both use don't. Only one has a subject — and that changes everything.",
          verdict:
            "Talking TO someone → Don't + verb: Don't touch! Talking ABOUT someone → subject + don't/doesn't: She doesn't touch that button.",
        },
      ),
      MS(
        [
          [
            "Doesn't touch that!",
            "Don't touch that!",
            "Imperatives talk to the hidden you — and for you the negative is always Don't. doesn't needs he, she or it in front.",
          ],
          [
            "Not worry!",
            "Don't worry!",
            "The negative imperative is Don't + base verb — the bare word not cannot make a sentence.",
          ],
          [
            "Don't late!",
            "Don't be late!",
            "Late is a describing word. It needs be: Don't be + describing word.",
          ],
          [
            "Opens the door, please.",
            "Open the door, please.",
            "Imperatives use the base verb. No s — there is no he or she here, only the hidden you.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "Orders and politeness",
        "“Give me water” is correct English — but to a stranger it sounds hard. Add please, or ask a question instead: “Can you help me, please?” The imperative is not rude. Bare imperatives to strangers can be. Choose your tone by your listener.",
      ),
      N(
        "Let's — the together imperative",
        "Let's means let us: I invite you and me to do one thing. Let's go. Let's practise. Let's not argue. One small word turns an order into an invitation — and invitations make friends."
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Mango shake — easy! Peel the mango. Cut it into pieces. Put the pieces in the jug. Add cold milk and a little sugar. Don't fill the jug to the top. Mix for one minute. Pour into two glasses. Share with your sister — but don't tell her how easy it is!",
          task: "Read the recipe two times. How many imperatives can you find? Which one is negative?",
        },
        writing: {
          task: "Write instructions for a small job you know: making tea, washing a bike, or getting to your house. Use four positive imperatives, one Don't and one Let's.",
          guide: ["First, ______.", "Then ______.", "Next, ______.", "Don't ______!", "Let's ______!"],
          model: "First, boil the water. Then add the tea. Wait two minutes. Don't move the pot. Pour and drink. Let's have tea together!",
        },
        listening: {
          script: "Stand up, please. Come to the front. Don't run. Open the door. Look at the board. Sit down, please.",
          task: "Listen. Which instruction is negative?",
        },
        speaking: {
          task: "Give a partner three instructions for a simple job. Use please once and Don't once. Your partner does the actions or says them.",
          frames: ["First, ______.", "Then ______.", "Don't ______!", "Let's ______!"],
          checklist: [
            "I used base verbs with no subject.",
            "I used Don't + base verb for the negative.",
            "I softened one instruction with please.",
          ],
        },
      }),
      LSP(
        [
          gls("imperative"),
          gls("polite"),
          gls("request"),
          gls("An imperative gives an order or instruction."),
          gls("Please makes a request polite."),
          gls("Don't and doesn't make negatives in the present simple."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Imperatives start with the base verb and have no subject: Open the door.",
        "Negative imperative: Don't + base verb — Don't worry! For everyone, always Don't.",
        "please softens an instruction into a request: Please help me. / Help me, please.",
        "Let's + verb makes a suggestion for us together: Let's go.",
        "Don't touch! (to you) is different from She doesn't touch it. (about her).",
      ]),
      RV(
        [
          {
            question: "Which negative sentence is correct?",
            options: ["She don't like tea.", "She doesn't like tea.", "She not like tea."],
            correctIndex: 1,
            explanation: "he, she and it → doesn't + base verb.",
            from: "Chapter 13 · Lesson 4",
          },
          {
            question: "“They aren't at school.” What does aren't mean?",
            options: ["are not", "is not", "do not"],
            correctIndex: 0,
            explanation: "aren't = are not — be + not for more than one.",
            from: "Chapter 12 · Lesson 2",
          },
          {
            question: "Which sentence is correct?",
            options: ["I has a phone.", "I have a phone.", "I am have a phone."],
            correctIndex: 1,
            explanation: "I → have. Never be + have together.",
            from: "Chapter 12 · Lesson 4",
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
            "Your friend is worried before a test. What do you say?",
            [
              ["a", "Doesn't worry!"],
              ["b", "Don't worry!"],
              ["c", "Not worry!"],
            ],
            "b",
            fbx(
              "Don't worry!",
              "You are talking TO your friend — the imperative negative is Don't + base verb, for everyone.",
              "doesn't needs he, she or it in front; the bare word not cannot make a sentence.",
              { english: "Don't be late! Please come at eight.", translation: "Don't + be + describing word: the negative imperative of be." },
            ),
            { hints: ["You are talking TO your friend. Which negative fits the hidden you?"] },
          ),
          FB(
            "Complete the classroom instruction.",
            "Sit ___, please.",
            ["down"],
            fb(
              "down",
              "Sit down is a fixed pair of words — the everyday classroom instruction, softened with please.",
              "Stand up is the opposite pair; up does not fit sit.",
            ),
            { hints: ["A two-word instruction — the opposite of stand up."] },
          ),
          REORD(
            "Make the polite instruction.",
            "Please open your books.",
            fb(
              "Please open your books.",
              "please can lead the sentence: softener + base verb + the things.",
              "The base verb takes no s — the hidden you never adds one.",
            ),
            { hints: ["Start with the magic word, then the verb, then the things."] },
          ),
          LIS(
            "Listen and answer.",
            "Stand up. Open the window. Don't sit down yet. Now sit down, please.",
            "What is the ONE negative instruction?",
            ["Don't sit down yet", "Don't sit down", "don't sit down"],
            fb(
              "Don't sit down yet",
              "Don't + base verb forbids the action — sit down comes later, as a positive instruction with please.",
              "Stand up and open the window are positive instructions.",
            ),
            { hints: ["Listen for the word that forbids an action."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which instruction is correct?",
            [
              ["a", "Don't be late!"],
              ["b", "Don't late!"],
              ["c", "Doesn't be late!"],
            ],
            "a",
            fb("Don't be late!", "Late is a describing word, so it needs be: Don't + be + late.", "“Don't late” loses be; “Doesn't be” gives the imperative a he/she helper it cannot take."),
          ),
          REORD(
            "Make the suggestion for us both.",
            "Let's play football after school.",
            fb(
              "Let's play football after school.",
              "Let's + base verb turns an order into an invitation for you and me.",
              "The verb after Let's stays in its base form.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Fix the instruction.",
            "Wash the fruit and doesn't use soap.",
            ["Wash the fruit and don't use soap."],
            fb(
              "Wash the fruit and don't use soap.",
              "Both halves talk to the hidden you — so both use the base verb, and the negative is don't.",
              "doesn't belongs to he, she and it — never to an instruction.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the warning you hear.",
            "Please don't touch the wet paint.",
            ["Please don't touch the wet paint."],
            fb(
              "Please don't touch the wet paint.",
              "please and Don't can share one sentence: soft words and a real warning together.",
              "The verb after Don't stays plain — touch, never touches.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Instruction sheet",
      instructions:
        "Write instructions for a simple task you know well (making tea, using an app, or getting to your house). Use four positive imperatives, one negative with Don't, and one Let's sentence at the end. Example: “Boil the water. Add the tea. Wait two minutes. Don't move the pot. Pour and drink. Let's have tea together!”",
      minWords: 15,
      maxWords: 55,
    },
    homework: [
      "Give two polite instructions with please today — at home, in class or in a shop.",
      "Write one warning with Don't for a place you know: the kitchen, the road, the pool.",
      "Find three imperatives around you — on packets, signs or apps — and copy them.",
    ],
  },

  // =========================================================================
  // Lesson 5 — Asking for Information in Real Life and Chapter Review
  // =========================================================================
  {
    slug: "ch-14-l-05",
    minutes: 30,
    description:
      "Take your questions into the street — Excuse me, please and Can you…? at shops, stations and classrooms — then review the whole question system of Chapter 14.",
    outcomes: [
      "Ask for information politely in five everyday situations",
      "Open with Excuse me and soften requests with please and Can you…?",
      "Understand short real-life answers: times, places, people",
      "Answer the Chapter 14 review questions",
    ],
    blocks: [
      LI(
        "Questions are not only grammar. They are survival tools. This lesson takes your questions into the street: shops, stations, buses and classrooms. You will learn the polite openers. Then you will review the whole chapter.",
        [
          "You know the present simple for facts and schedules: The bus leaves at eight. (Chapter 13 · Lesson 1)",
          "You can make negatives with don't and doesn't (Chapter 13 · Lesson 4).",
          "You can ask yes/no and WH-questions in QASM order (Chapter 14 · Lessons 1–2).",
        ],
      ),
      vocGlossary("Words for this lesson", [
        { word: "information", partOfSpeech: "noun", definition: "Facts you want to know: times, prices, places, names." },
        { word: "polite", partOfSpeech: "adjective", definition: "Speaking with respect — soft words for strangers and busy people." },
        { word: "request", partOfSpeech: "noun", definition: "A polite ask for help or for something." },
        { word: "shop", partOfSpeech: "noun", definition: "A place that sells things — the first place you ask questions." },
      ]),
      H("Questions that open doors"),
      T(
        "Grammar is the engine. Politeness is the key. A stranger stops for Excuse me. They may walk past a hard, fast question. Three small tools change everything: Excuse me, please and a kind voice.",
      ),
      {
        type: "definition",
        term: "request",
        partOfSpeech: "noun",
        definition:
          "A request asks for help in a polite way. Softeners make it kind: Excuse me…, Can you…?, please. Compare: Give me water. / Can you give me water, please?",
        example: {
          english: "Excuse me, where is the bank, please?",
          translation: "Opener + QASM question + softener — the full polite package.",
        },
      },
      ST(
        "Ask for information politely in four steps",
        [
          {
            title: "Step 1 — Open politely",
            text: "Say Excuse me first. It stops a stranger gently.",
            examples: [
              { english: "Excuse me…", note: "The magic opener of the English-speaking street." },
            ],
          },
          {
            title: "Step 2 — Ask your question",
            text: "Use the machines you know: Where is…? When does…? Does this bus stop at…?",
            examples: [
              { english: "Excuse me, where is the station?", note: "Opener + WH-question — the classic combination." },
            ],
          },
          {
            title: "Step 3 — Soften with please or Can you",
            text: "Add please at the end, or wrap the request in Can you…?",
            examples: [
              { english: "Can you help me, please?", note: "A question is softer than an order — even a small one." },
            ],
          },
          {
            title: "Step 4 — Close with thanks",
            text: "Say Thank you. Then smile. Help comes faster next time.",
            examples: [
              { english: "Thank you very much!", note: "Politeness is a circle — it comes back." },
            ],
          },
        ],
      ),
      GR(
        "The politeness rule",
        "Direct questions are correct — but strangers like soft words. Open with Excuse me. Add please to requests. Prefer Can you…? to bare imperatives. “Excuse me, where is the bank?” is polite. “Where is the bank?” is neutral. “Bank?” is not.",
        [
          { english: "Excuse me, when does the next train leave?", translation: "Opener + QASM question — perfect street English." },
          { english: "Can you help me, please?", translation: "A request wrapped in a question — much softer than Help me." },
          { english: "What time does the shop open?", translation: "QASM with does — the shop is one thing." },
        ],
        [
          "With friends and family you can drop Excuse me. Politeness grows with the distance between you and the listener.",
        ],
      ),
      TB(
        "Five places, five polite questions",
        ["Place", "Polite question"],
        [
          ["Street", "Excuse me, where is the bank, please?"],
          ["Station", "Excuse me, when does the next train leave?"],
          ["Shop", "Excuse me, what time do you close?"],
          ["Classroom", "Can you repeat that, please?"],
          ["Bus", "Does this bus go to the city centre?"],
        ],
        "The same grammar you already own — with polite clothes on.",
      ),
      AU(
        "Listen: polite questions in the street",
        "Excuse me, where is the station? Excuse me, when does the next train leave? Can you help me, please? Does this bus go to the centre? Listen: the voice falls gently at the end.",
        0.85,
      ),
      AU(
        "Listen: at the station",
        "Excuse me, when does the next train leave? At ten past two, from platform three. Thank you! Does it stop at Central Station? Yes, it does.",
        0.9,
      ),
      EXD(
        "Real questions for real places",
        [
          { english: "Excuse me, where is the station? — Go straight, then turn left.", note: "Opener + where-question. Strangers help when you open softly.", domain: "travel" },
          { english: "What time do you close on Saturdays? — At eight.", note: "QASM with do — you for the whole shop team.", domain: "shopping" },
          { english: "Excuse me, Miss, when does the class start? — At nine, in room four.", note: "Teachers answer politely asked questions first.", domain: "education" },
          { english: "Excuse me, is the kitchen open? — Yes, until ten.", note: "be flips after Excuse me — the machine does not change.", domain: "food" },
          { english: "Excuse me, where is the pharmacy? — Next to the bank.", note: "The most important travel question of all.", domain: "health" },
          { english: "Does Mr Ali work today? — No, he doesn't. He works on Mondays.", note: "does + work — the helper carries the question about one man.", domain: "work" },
          { english: "Whose bag is this? Is it yours? — No, it isn't. It's my sister's.", note: "Two machines in one polite moment: whose + flip.", domain: "family" },
          { english: "Where do the boys play cricket? — In the park, after school.", note: "where + do + the boys + play — a plural subject.", domain: "sport" },
          { english: "Excuse me, how does this machine work? — Put the ticket in, then take it out.", note: "how asks for the way — even machines explain politely.", domain: "technology" },
        ],
        "Nine places, nine questions — all built from the grammar you already own.",
      ),
      US(
        [
          {
            situation: "Lost in a new city",
            example: "“Excuse me, where is the station, please? — Go straight and turn right.”",
            note: "Opener + question + softener: the full polite package.",
          },
          {
            situation: "At the ticket window",
            example: "“When does the next train leave? — At ten past two, platform three.”",
            note: "A QASM question gets an answer with real details.",
          },
          {
            situation: "In a shop",
            example: "“Excuse me, do you have this shirt in blue? — Let me see… yes!”",
            note: "do + you + have — checking what a shop owns.",
          },
          {
            situation: "In class",
            example: "“Can you repeat that, please? — Of course.”",
            note: "The classroom question you will use most.",
          },
          {
            situation: "Meeting a neighbour",
            example: "“Do you live near here? — Yes, next door!”",
            note: "Small talk starts with small yes/no questions.",
          },
        ],
        "The asking map",
        "Same machines everywhere — only the openers and softeners change with the place.",
      ),
      DL(
        "At the station",
        "A traveller asks for information at a busy station.",
        [
          ["Traveller", "Excuse me, when does the next train leave?"],
          ["Officer", "At ten past two, from platform three."],
          ["Traveller", "Thank you. Does it stop at Central Station?"],
          ["Officer", "Yes, it does. It's the third stop."],
          ["Traveller", "And how much is a ticket?"],
          ["Officer", "Twelve pounds. The machine is over there."],
          ["Traveller", "Excuse me, where is platform three?"],
          ["Officer", "Through that door, then turn right."],
          ["Traveller", "Thank you very much!"],
          ["Officer", "Have a good trip!"],
        ],
      ),
      CMP(
        "Direct or polite?",
        ["Direct (correct, but hard)", "Polite (ready for strangers)"],
        [
          ["Order", "Give me water.", "Can you give me water, please?"],
          ["Question", "Where is the bank?", "Excuse me, where is the bank, please?"],
          ["Request", "Help me.", "Excuse me, can you help me, please?"],
          ["With friends", "Fine — friends forgive speed", "Fine too — politeness never hurts"],
        ],
        {
          intro: "The same request, two temperatures. Both are correct English — but one opens doors faster.",
          verdict:
            "With friends, direct is fine. With strangers and busy people, add Excuse me, please and Can you…? — three words, ten times more help.",
        },
      ),
      MS(
        [
          [
            "Give me water.",
            "Can you give me water, please?",
            "Bare imperatives to strangers sound hard. A question with please asks; an order demands.",
          ],
          [
            "What time the shop opens?",
            "What time does the shop open?",
            "The helper is missing: what time + does + the shop + open. The s moves into does.",
          ],
          [
            "Does the train stops here?",
            "Does the train stop here?",
            "One s per question — does already carries it. The main verb stays plain.",
          ],
          [
            "Do you like tea? — Yes, I like.",
            "Do you like tea? — Yes, I do.",
            "Short answers echo the helper. Save the main verb for the long answer: Yes, I like tea.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "The answer side",
        "Asking is half the job. Answers come in pieces: “At ten past two, from platform three.” Listen for the time after when-questions, the place after where-questions, and the person after who-questions. The question word tells you what to listen for."
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Amna visits her aunt in the city — alone, for the first time. At the station she asks, “Excuse me, when does the next train leave?” “At eleven,” says the officer. On the train she asks a woman, “Does this train stop at Green Park?” “Yes, it does. I get off there too.” At the shop she asks, “What time do you close?” “At six, dear.” Amna smiles. Her questions work everywhere.",
          task: "Read the text. Find three polite questions. Which openers and softeners do you see?",
        },
        writing: {
          task: "Write a six-line conversation at a place you know — a station, a shop or a street. Use Excuse me once, a yes/no question once, a WH-question once and one please.",
          guide: ["Excuse me, where is ______?", "When does ______?", "Do you have ______?", "Thank you!"],
          model: "Excuse me, where is the ticket office? It's over there. When does the next bus leave? At nine. Do you have change, please? Yes, I do. Thank you!",
        },
        listening: {
          script:
            "Excuse me, where is the bus stop? It's near the bank. When does the last bus leave? At ten. Does it stop at the market? Yes, it does. Thank you!",
          task: "Listen. Where is the bus stop, and when does the last bus leave?",
        },
        speaking: {
          task: "Role-play with a partner: a traveller and a station officer. Ask three questions — one where, one when, one yes/no. Use Excuse me and please. Then swap roles.",
          frames: ["Excuse me, where is ______?", "When does ______ leave?", "Does this ______ go to ______?", "Thank you very much!"],
          checklist: [
            "I opened with Excuse me.",
            "My questions followed QASM.",
            "I said please or thank you.",
          ],
        },
      }),
      LSP(
        [
          gls("polite"),
          gls("request"),
          gls("information"),
          gls("Please makes a request polite."),
          gls("Questions end with a question mark."),
          gls("Do and does help other verbs make questions."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Open politely: Excuse me… stops a stranger gently.",
        "Ask with the grammar you own: Where is…? When does…? Do you have…?",
        "Soften requests: Can you help me, please? — questions are softer than orders.",
        "Close with Thank you. Politeness comes back.",
        "The question word tells you what to listen for in the answer.",
      ]),
      RV(
        [
          {
            question: "“Do you like mangoes?” — Which short answer is correct?",
            options: ["Yes, I like.", "Yes, I do.", "Yes, I am."],
            correctIndex: 1,
            explanation: "Short answers echo the helper do — never the main verb, never be.",
            from: "Chapter 14 · Lesson 1",
          },
          {
            question: "QASM: which word comes right after the question word?",
            options: ["the subject", "the helping verb", "the main verb"],
            correctIndex: 1,
            explanation: "Question word + auxiliary + subject + main verb: Where do you live?",
            from: "Chapter 14 · Lesson 2",
          },
          {
            question: "Your little brother runs near the road. What do you shout?",
            options: ["Doesn't run!", "Not run!", "Don't run!"],
            correctIndex: 2,
            explanation: "Negative imperative: Don't + base verb — for the hidden you.",
            from: "Chapter 14 · Lesson 4",
          },
          {
            question: "Which question is correct?",
            options: ["Do you are ready?", "Are you ready?", "Is you ready?"],
            correctIndex: 1,
            explanation: "Be flips alone — never with do. And you takes are.",
            from: "Chapter 12 · Lesson 2",
          },
          {
            question: "Which helper fits he, she and it?",
            options: ["do", "does", "am"],
            correctIndex: 1,
            explanation: "Third person singular takes does — the s lives inside it.",
            from: "Chapter 13 · Lesson 5",
          },
        ],
        { title: "Chapter 14 review — the question system", intro: "Five quick questions: three from this chapter, two from its foundations." },
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
            "The new market",
            "Bilal is new in the city. He needs bread. At the market he asks, “Excuse me, where is the bread shop?” A man says, “Turn right, near the fruit.” At the shop Bilal asks, “What time do you close?” “At seven,” says the shopkeeper. “Do you have fresh bread?” “Yes, we do!” Bilal buys two pieces and says, “Thank you!”",
            "Which question checks what the shop OWNS?",
            [
              ["a", "Where is the bread shop?"],
              ["b", "What time do you close?"],
              ["c", "Do you have fresh bread?"],
            ],
            "c",
            fb(
              "Do you have fresh bread?",
              "do + you + have asks what the shop owns — the yes/no question of shops.",
              "The where-question hunts a place; the time-question hunts a closing time.",
            ),
            { skill: "reading", hints: ["One question starts with a helper and asks what the shop has."] },
          ),
          MCQ(
            "You need help in the street. Which is the most polite?",
            [
              ["a", "Help me."],
              ["b", "Can you help me, please?"],
              ["c", "You help me now."],
            ],
            "b",
            fbx(
              "Can you help me, please?",
              "A question plus please is the polite package — strangers stop for it.",
              "Bare imperatives to strangers sound hard, even when the grammar is correct.",
              { english: "Excuse me, can you help me, please?", translation: "Opener + request question + softener: three soft words, one kind sentence." },
            ),
            { hints: ["A question plus the softener word wins."] },
          ),
          FB(
            "Complete the polite opener.",
            "___ me, where is the station?",
            ["Excuse"],
            fb(
              "Excuse",
              "Excuse me opens the question gently — the first tool of street politeness.",
              "Starting straight with the question is correct but neutral; to a busy stranger it can feel hard.",
            ),
            { hints: ["The magic first word when you stop a stranger."] },
          ),
          LIS(
            "Listen and answer.",
            "Excuse me, when does the next bus leave? At ten past three. Does it stop at the school? Yes, it does.",
            "When does the bus leave?",
            ["at ten past three", "At ten past three", "ten past three"],
            fb(
              "at ten past three",
              "The when-question hunts for time — and the answer gives it first.",
              "The yes/no question that follows does not change the time.",
            ),
            { hints: ["Listen for the time right after the first question."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which question asks about the TIME the shop opens?",
            [
              ["a", "Where does the shop open?"],
              ["b", "When does the shop open?"],
              ["c", "Who opens the shop?"],
            ],
            "b",
            fb("When does the shop open?", "when hunts for time — the answer will be a time, like At nine.", "where hunts for places; who hunts for people."),
          ),
          REORD(
            "Make the polite question.",
            "Excuse me, where is the station?",
            fb(
              "Excuse me, where is the station?",
              "Opener + where + is + the station: politeness and QASM in one sentence.",
              "The opener comes first — before the question word.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Fix the question.",
            "What time the shop opens?",
            ["What time does the shop open?"],
            fb(
              "What time does the shop open?",
              "The helper does must stand between the question words and the subject: what time + does + the shop + open.",
              "Statement order with a question mark is the most common asking mistake on the street.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the question you hear.",
            "Can you help me, please?",
            ["Can you help me, please?"],
            fb(
              "Can you help me, please?",
              "A request wrapped in a question, with please at the end — the politest line in this chapter.",
              "Don't forget the comma before please at the end of a sentence.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "The real-world interview",
      instructions:
        "Write a six-question interview for a visitor to your town. Use where, when, what, how, why and one do/does question — and make at least two questions polite with Excuse me or please. Then answer the interview as the visitor. Example: “Excuse me, where do you come from? When do you travel? What do you want to see? How do you like our food? Why do you visit small towns? Do you need a guide?”",
      minWords: 30,
      maxWords: 100,
    },
    homework: [
      "Visit a real or imaginary information desk. Ask three polite questions out loud — with Excuse me and please.",
      "Write the four questions you need for your next trip: a place, a time, a Do you have…? check and one Can you…?",
      "Review the chapter: say the eight question words and the QASM order from memory.",
    ],
  },
];
