/**
 * TOEFL iBT Academy — Module 2, Reading (T-M2, PROMPT 48, Task 2).
 *
 * Chapter 1 — The section (1 lesson). Authored at the v3 textbook standard
 * (src/data/exam-academy/textbook-standard.ts): every lesson is a
 * self-contained teaching resource.
 *
 * Format facts used consistently in this chapter, verified against official
 * ETS pages (see the TOEFL_IBT/STANDARD specification seeded by
 * scripts/seed-exams.ts): the Reading section delivers up to 50 items in
 * about 30 minutes, in two adaptive modules (a routing module first, then a
 * lower- or upper-difficulty module; item counts and timing can vary within
 * the published range); about 30 items are Complete the Words on short texts
 * (each with roughly ten words missing letters) and 20 are comprehension
 * items across Read in Daily Life and Read an Academic Passage (single-answer
 * and select-two). Raw-to-band conversions on this platform are practice
 * estimates; no official ETS content is reproduced anywhere.
 */

import type { LessonSpec } from "../../ielts/types";
import { ex, fb } from "../../ielts/types";

export const T2_CH1: LessonSpec[] = [
  {
    slug: "toefl-reading-overview",
    title: "Understanding the Reading section",
    description:
      "The Reading section on one card: up to fifty items in roughly thirty minutes, two adaptive modules, thirty masked-word items plus twenty comprehension items — and the pacing that holds both modules inside the clock.",
    objectives: [
      "describe the Reading section's structure, item mix and two-stage adaptive flow",
      "explain why the routing module deserves full drilled routine from the first item",
      "apply a per-module pacing plan built on the flag-and-sweep habits",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Reading opens your TOEFL iBT sitting: up to fifty items in roughly thirty minutes, before Listening, Writing and Speaking take their turns. The section is two-stage adaptive, which means the quality of your work in the first module shapes the difficulty of the second. This lesson maps the whole machine — the three task families, the item mix, and the pacing rules that hold both modules inside the clock — so that every technique lesson in this module has a frame to hang on.",
        beforeYouStart: [
          "You can name the four TOEFL sections and their order from the Fundamentals module.",
          "You know that section bands run from 1.0 to 6.0 in half steps and that no pass mark exists.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — the section that opens the test: up to 50 items in about 30 minutes"],
          ["Task & question types", "Complete the Words (about 30 items), plus Read in Daily Life and Read an Academic Passage (20 comprehension items together, single-answer and select-two)"],
          ["What is assessed", "Restoring masked words from evidence, pulling facts from everyday texts, and understanding academic prose at pace"],
          ["Why this matters", "The section is short and adaptive: misjudging its structure loses items to the clock before language ever decides anything"],
        ],
      },
      { type: "heading", text: "What sits in front of you" },
      {
        type: "text",
        text: "Reading is the first timed section of the day, and it is brisk: roughly thirty minutes for up to fifty items, which averages to a little over half a minute per item. The items arrive in three families. About thirty are Complete the Words items: short texts in which roughly ten words have had letters removed, and you rebuild each masked word from the evidence around it. The other twenty are comprehension items, split across two task types — Read in Daily Life, built on everyday and campus texts such as schedules, notices, messages and announcements, and Read an Academic Passage, which sets single-answer and select-two items on a longer academic text. Nothing in the section assumes specialist knowledge; everything assumes fast, targeted reading.",
      },
      {
        type: "table",
        title: "The three families on one card",
        headers: ["Task family", "Share of the section", "What it asks of you", "Working pace"],
        rows: [
          ["Complete the Words", "About 30 items on short texts", "Restore words whose letters have been masked, using context, collocation and word form", "Fast — the technique lesson targets well under the per-item average"],
          ["Read in Daily Life", "Everyday texts within the 20 comprehension items", "Find the exact information a question needs in notices, schedules and messages", "Fast — texts are short and their facts sit on the surface"],
          ["Read an Academic Passage", "Longer academic texts within the 20 comprehension items", "Answer single-answer and select-two items about claims, structure and implication", "Steadier — the passage rewards a structural map before anything else"],
        ],
        caption: "Item counts and exact timing can vary within the published range — the ratios, not the exact numbers, drive your pacing.",
      },
      { type: "heading", text: "The two-stage engine" },
      {
        type: "text",
        text: "The section is delivered in two modules, and it adapts. Every candidate first works through a routing module: a fixed selection of items that is the same for everyone. How you perform there decides the difficulty of your second module, which the engine serves at a lower or an upper level. Two consequences follow for pacing. The routing module is the most consequential stretch of the section, because the engine scores what you actually did, item by item; a careless start changes everything behind it. And a shift in difficulty between modules is placement information: a harder second module usually means you routed upper by performing well, so it deserves steadier reading, not panic.",
      },
      {
        type: "definition",
        term: "routing module",
        partOfSpeech: "noun phrase",
        definition: "The first module of an adaptive section: a fixed selection of items every candidate receives, whose results decide whether the second module is served at lower or upper difficulty.",
        example: {
          english: "A candidate works the routing module at full drilled pace and routes upper; the same candidate coasting through it routes lower and meets an easier second module with a lower ceiling.",
          translation: "",
        },
      },
      {
        type: "steps",
        title: "Pacing both modules",
        intro: "Four habits hold the section together from item one to the final sweep.",
        steps: [
          {
            title: "Give module one full routine",
            text: "No warm-up exists in an adaptive section. Item one influences your routing exactly as much as item forty, so the drilled routine — read, decide, type — starts immediately, not after a settling-in period.",
            examples: [
              {
                english: "A candidate treats the first five items as a rehearsal and misses easy ones; her routing was computed from those very misses.",
                note: "The engine measures behaviour, not intention.",
              },
            ],
          },
          {
            title: "Run the average, not the stopwatch",
            text: "The section averages a little over half a minute per item. Masks and short everyday texts run faster; academic-passage items run slower. Let the average balance the families instead of arguing with each item in turn.",
            examples: [
              {
                english: "Twelve seconds banked on a daily-life notice funds forty extra seconds on a select-two item later in the section.",
                note: "Fast items are currency, not a licence to linger.",
              },
            ],
          },
          {
            title: "Flag anything over budget",
            text: "An item that passes its budget is flagged and left where it is. Three easier items behind it are worth more than one stubborn item in front of you, and the flag guarantees the item a calm second visit.",
            examples: [
              {
                english: "A mask that refuses to resolve in two calm passes is flagged — the sweep, not the struggle, settles it.",
                note: "Sunk minutes never recover items.",
              },
            ],
          },
          {
            title: "Sweep every module's final minute",
            text: "Each module ends with a sweep of everything flagged and blank. No penalty for wrong answers exists, so an empty answer and a wrong one earn exactly the same nothing — fill every item before the module closes.",
            examples: [
              {
                english: "Three flags survive to a sweep: one resolves on second look, two become best guesses — three items scoring where blanks would not.",
                note: "The sweep is pure expected value.",
              },
            ],
          },
        ],
      },
      {
        type: "example",
        title: "Six encounters with the section",
        items: [
          {
            english: "A candidate expecting fifty comprehension passages finds thirty masked words on short texts instead — and clears them with minutes to spare once the method is drilled.",
            note: "The item mix surprises everyone who has not read the format card.",
            domain: "exam",
          },
          {
            english: "A learner converts a practice section's raw score into a band using the platform's practice-estimate table and logs it as 'R 4.5 (practice estimate)', because ETS publishes no public conversion.",
            note: "Honest labelling keeps a study log trustworthy.",
            domain: "study",
          },
          {
            english: "A student reads a residence-hall laundry notice in seconds, because everyday texts place their facts on the surface — exactly the skill Read in Daily Life measures.",
            note: "Speed on short texts is trained, not lucky.",
            domain: "everyday",
          },
          {
            english: "A shift manager scans a rota for one name and one start time, ignoring everything else on the page — selective attention is a workplace skill before it is a test skill.",
            note: "The same move answers daily-life items.",
            domain: "work",
          },
          {
            english: "Halfway through module two the texts grow visibly harder; the candidate recognises an upper routing and slows to a steadier reading pace instead of accelerating into error.",
            note: "Difficulty shifts are information, not verdicts.",
            domain: "exam",
          },
          {
            english: "A learner practises module by module in training — one routing module on Monday, one second module on Wednesday — so the sweep habit is installed at both boundaries.",
            note: "Habits form where they are practised.",
            domain: "study",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Section misunderstandings corrected",
        items: [
          {
            wrong: "Fifty items means fifty passages, so I will read flat out for the whole half hour.",
            right: "Thirty items are masked words on short texts, and the twenty comprehension items sit on short everyday texts plus a small number of academic passages.",
            reason: "Misreading the item mix misallocates the entire clock — the section rewards targeted reading, not page-turning.",
          },
          {
            wrong: "Module one is a gentle warm-up I can use to find my rhythm.",
            right: "The routing module decides the difficulty of everything that follows, so full routine starts at item one.",
            reason: "The engine computes your routing from actual performance; a slow start produces a slow routing, not a warm-up.",
          },
          {
            wrong: "A harder second module means the test is punishing me.",
            right: "An upper routing usually means the engine read your first module as strong — steadier reading is the response it asks for.",
            reason: "Interpreting placement information as failure costs composure, and composure is pacing capital.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "The section, described end to end",
        reading: {
          text: "A candidate's pacing card for Reading reads: module one — full routine from item one, hold the average, flag anything over budget; module two — same routine, whatever difficulty arrives; final minute of each module — sweep every flagged and blank item. Beside the routine sit the three families: about thirty mask items that must run fast, short everyday texts that answer question-first, and academic passages that reward a structural map before any item is touched.",
          task: "Name the three moments on the card and the habit each one protects.",
        },
        writing: {
          task: "In 60–100 words, describe how you will spend the section's half hour: the item mix, the two modules, and where your minutes will go.",
          guide: [
            "Open by naming the section's shape: two modules, three families, up to fifty items.",
            "State the split — about thirty mask items, twenty comprehension — and what each family demands.",
            "Explain what the routing module means for how seriously you take module one.",
            "Close with the flag-and-sweep rule that protects the final minute of each module.",
          ],
          model:
            "My half hour divides into two modules and three families. About thirty items are masked words on short texts; a drilled method makes them fast, so they must never steal minutes. Twenty comprehension items follow: short everyday texts, which I read question-first, and an academic passage, which I map structurally before touching its items. Module one gets the same routine as module two, because it routes the whole section. Anything over budget is flagged, and the last minute of each module sweeps every remaining blank — a guess can score, and a blank cannot.",
        },
        listening: {
          script:
            "Tutor: Before you drill any task family, hold the section's shape in your head. Reading gives you up to fifty items in about thirty minutes, and it splits into two modules. The first module routes you — it is the same mix for everyone, and how you handle it decides whether your second module runs easier or harder. So the first module is not a warm-up; it is the most consequential stretch of the section. Keep one average in mind: a little over half a minute per item across the whole section. Masks run fast, everyday texts run fast, and the academic passage spends what they save. And at the end of each module, sweep: fill every blank, because no penalty for a wrong answer exists.",
          task: "Which two facts does the tutor give about the routing module, and what per-item average does she name?",
        },
        speaking: {
          task: "Explain to a partner, in under a minute, how the Reading section is built and how you will pace it.",
          frames: [
            "The section holds up to…",
            "About thirty of the items are…",
            "The first module matters because…",
            "My final minute in each module goes to…",
          ],
          checklist: [
            "Did I name the item mix and the two modules?",
            "Did I say why the routing module deserves full routine?",
            "Did I state the flag-and-sweep rule?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "The model answer runs shape, then split, then consequence, then rule — so each pacing decision is attached to the part of the section that causes it."],
          ["Grammar", "Present-simple planning verbs ('divides', 'gets', 'is flagged') describe a routine as a fact rather than a hope, which is the register a pacing plan needs."],
          ["Vocabulary", "Section terms do precise work: modules, families, masks, routing, flag, sweep — the vocabulary this lesson defined, each used once where it belongs."],
          ["Coherence", "Cause and effect carry the argument: routing makes module one consequential, fast items fund slow ones, and the sweep exists because blanks cannot score."],
          ["Task fulfilment", "Every element of the question is answered — the mix, the module structure, and a working account of where the half hour actually goes."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Recite the card: up to fifty items, about thirty minutes, two modules, three families, a sweep at each module's end."],
          ["While the clock runs", "Hold the average across item types, flag anything that passes its budget, and keep the routine identical in both modules."],
          ["If you are stuck", "Name the family you are stuck in — masks, everyday texts or the academic passage — and recall its lesson before spending more seconds."],
          ["Final minutes", "Sweep the current module completely: every item carries an answer, because an empty response earns exactly what a wrong one does."],
        ],
      },
      {
        type: "summary",
        points: [
          "Reading runs first in the sitting: up to fifty items in roughly thirty minutes, averaging a little over half a minute per item.",
          "The mix is about thirty Complete the Words items on short texts plus twenty comprehension items across Read in Daily Life and Read an Academic Passage.",
          "The section is two-stage adaptive: a routing module everyone receives decides whether the second module runs lower or upper in difficulty.",
          "Module one deserves full drilled routine, because the engine computes your routing from actual performance on it.",
          "Flag over-budget items and sweep each module's final minute — no wrong-answer penalty exists, so a blank is strictly worse than a guess.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items drawn from the Fundamentals module.",
        items: [
          {
            question: "In what order do the four timed sections arrive?",
            options: ["Reading → Listening → Writing → Speaking", "Listening → Reading → Speaking → Writing", "Writing → Speaking → Reading → Listening"],
            correctIndex: 0,
            explanation: "Reading opens the sitting and Speaking closes it — worth knowing before you plan energy across the roughly ninety timed minutes.",
            from: "toefl-format-2026",
          },
          {
            question: "What does your performance on a routing module decide?",
            options: ["Whether the second module runs lower or upper in difficulty", "Whether your section is scored at all", "The order of the remaining sections"],
            correctIndex: 0,
            explanation: "Two-stage adaptivity routes you by measuring the routing module you share with every other candidate.",
            from: "toefl-adaptive-testing",
          },
          {
            question: "Under the Fundamentals pacing card, one Reading item averages about…",
            options: ["35 seconds", "3 minutes", "12 minutes"],
            correctIndex: 0,
            explanation: "Up to fifty items in about thirty minutes averages roughly thirty-five seconds — masks faster, passage items slower.",
            from: "toefl-time-management",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "Which statement describes the Reading section's item mix?",
        hints: ["Count the families before counting the tasks."],
        options: [
          { id: "a", text: "About thirty Complete the Words items plus twenty comprehension items." },
          { id: "b", text: "Fifty comprehension items with no word restoration at all." },
          { id: "c", text: "Twenty Complete the Words items plus thirty comprehension items." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "About thirty Complete the Words items plus twenty comprehension items.",
          "The thirty masked-word items sit on short texts, and the twenty comprehension items divide between everyday texts and the academic passage — the split that shapes every pacing decision you make.",
          "Fifty comprehension items would leave no room for the mask family the section is known for; thirty comprehension items inverts the real ratio.",
        ),
        tags: ["toefl", "reading", "structure"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "easy",
        skill: "reading",
        prompt: "Complete the structure fact.",
        hints: ["The section's ceiling is a round two-digit number."],
        sentence: "Reading serves up to ___ items in roughly thirty minutes, across two adaptive modules.",
        acceptedAnswers: ["50", "fifty"],
        feedback: fb(
          "Fifty",
          "The ceiling is fifty items in about thirty minutes; exact counts and timing can vary within the published range, which is why ratios rather than exact numbers drive your pacing.",
          "Forty belongs to other reading papers; sixty exceeds the section's published ceiling.",
        ),
        tags: ["toefl", "reading", "structure"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Your second Reading module feels noticeably harder than the first. What is the most accurate reading of that shift?",
        hints: [],
        options: [
          { id: "a", text: "You are failing the section and should guess the rest." },
          { id: "b", text: "You most likely routed upper by performing well on the routing module." },
          { id: "c", text: "The test centre assigned you a defective module." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "You most likely routed upper by performing well on the routing module.",
          "In a two-stage adaptive section, difficulty rises for candidates the engine measures as strong — placement information that calls for steadier reading, not panic.",
          "Treating an upper routing as failure (a) converts good news into lost composure; no mechanism assigns defective modules (c).",
        ),
        tags: ["toefl", "reading", "adaptive"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Independent practice. In one short phrase: what happens in the final minute of each Reading module?",
        hints: [],
        question: "What does the final minute of each module do?",
        acceptedAnswers: [
          "the sweep",
          "a sweep of every flagged and blank item",
          "it sweeps every remaining item",
          "fill every blank and flagged item",
        ],
        keywords: ["sweep", "fill", "blank"],
        feedback: fb(
          "A sweep of every flagged and blank item.",
          "Because no wrong-answer penalty exists, filling every remaining item has positive expected value while a blank has none — the sweep is the habit that collects what the budget left behind.",
          "Answers describing rereading or resting describe habits that leave marks on the table.",
        ),
        tags: ["toefl", "reading", "pacing"],
      }),
      ex({
        type: "read-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Read the case, then answer.",
        hints: [],
        passageTitle: "Jonas's first module",
        passage:
          "Jonas reached item nine of his first module and met a masked word he could not resolve. Determined to master it, he re-read the sentence four times and tried letter combinations for over three minutes. He finished the module's remaining items in a rush with two minutes to spare, and nothing had been flagged because everything had technically been answered.",
        question: "Which two costs did Jonas's three minutes buy?",
        options: [
          { id: "a", text: "A resolved mask and a faster second module." },
          { id: "b", text: "A broken average across the remaining items of the module, plus rushed answers that were never flagged or revisited calmly." },
          { id: "c", text: "Nothing, because he answered every item eventually." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A broken average across the remaining items of the module, plus rushed answers that were never flagged or revisited calmly.",
          "Spending triple the per-item budget on one mask starves the items behind it, and an unflagged rush removes the sweep's chance to recover anything — the two costs that flag-and-move exists to prevent.",
          "Option (a) credits a routing improvement no single mask can produce; option (c) counts completion as if it were accuracy.",
        ),
        tags: ["toefl", "reading", "pacing"],
      }),
    ],
    homework: [
      "Write the section's card from memory — item ceiling, minutes, module structure, family split — then check it against this lesson and note anything you missed.",
      "In your next timed Reading practice, log the clock at the end of each module and count your flags: the two numbers tell you whether the average or the sweep is the habit to drill next.",
    ],
  },
];
