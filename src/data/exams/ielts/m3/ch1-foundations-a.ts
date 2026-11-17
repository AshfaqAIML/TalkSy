/**
 * Chapter 1A — Reading foundations (PROMPT 45, Part A).
 *
 * The first four of fifteen foundation lessons: the test itself, the
 * sixty-minute arithmetic, skimming and scanning. Every strategy is taught
 * on worked passage material — never as abstract advice.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const foundationsLessonsA: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-areading-test",
    title: "Understanding the reading test",
    description:
      "Three passages, forty questions, sixty minutes and no answer sheet to transfer to — the format facts that decide how every minute is spent.",
    objectives: [
      "recite the structure of the Academic Reading paper and its official question-type list",
      "explain the question-order rule and its two exceptions",
      "state what the General Training paper shares with Academic and where it differs",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "IELTS Reading gives you sixty minutes, three passages and forty questions — and, unlike the paper test of the past, no transfer time at the end. Everything you write must be written during the hour. That single fact, more than any vocabulary list, decides your band: candidates who know the paper's shape spend their minutes on questions, while candidates who don't spend them on discovery. This lesson installs the shape.",
        beforeYouStart: [
          "You have met the four IELTS sections in the Fundamentals module.",
          "You can read a dense paragraph of general English at B1+ speed.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — 3 passages, 40 questions, 60 minutes, no transfer time"],
          ["Task & question types", "Thirteen official types across choice, identifying, matching and completion families"],
          ["What is assessed", "Locating detail, following argument, recognising writer's stance and reading for gist — at speed"],
          ["Why this matters", "Knowing the paper's structure converts discovery time into answering time: the format itself is worth marks"],
        ],
      },
      { type: "heading", text: "The paper, section by section" },
      {
        type: "table",
        title: "What the three passages hold",
        headers: ["Passage", "Character", "Typical load"],
        rows: [
          ["Passage 1", "Accessible, often descriptive or narrative — the warm-up", "12–14 questions, mixed types"],
          ["Passage 2", "Denser, usually argumentative or explanatory", "12–14 questions, often matching + completion"],
          ["Passage 3", "The hardest: abstract argument, academic register", "12–14 questions, often headings + verdict tasks"],
        ],
        caption: "Passages total roughly 2,150–2,750 words. No specialist knowledge is ever assumed — every answer is in the text.",
      },
      {
        type: "text",
        text: "The General Training paper keeps the clock and the question count but changes the material: Section 1 carries two or three short practical texts (notices, advertisements, timetables), Section 2 two work-related documents, and Section 3 one longer general-interest passage. The technique lessons in this module apply to both papers; the pacing does not — GT rewards speed on Sections 1–2, and its own module teaches that budget.",
      },
      { type: "heading", text: "The question-order rule — and its two exceptions" },
      {
        type: "steps",
        title: "How answers are distributed",
        steps: [
          { title: "Within a question group, answers follow the passage", text: "A block of True/False/Not Given statements tracks the text from top to bottom: the answer to statement 2 sits after the answer to statement 1 and before statement 3. This is your rescue rope when lost.", examples: [{ english: "Statement 3 was located in paragraph C; statement 4 must therefore live in paragraph C, D or E — never in paragraph A.", note: "Order turns search into a bounded hunt." }] },
          { title: "Across groups on one passage, order usually holds", text: "Question groups are generally laid out in passage order, so your last located answer for one group is often near the first answer of the next. Use it to skip whole paragraphs.", examples: [{ english: "Group 1 ended in paragraph C; begin hunting group 2's first item at paragraph D.", note: "Works often, not always — confirm by content." }] },
          { title: "Exception one: global questions", text: "Matching headings, choosing a title and 'main idea' questions cover the WHOLE passage — they do not follow the order rule and are best answered last, when the passage is familiar.", examples: [{ english: "The headings task sits at the top of the page; answer it after the detail tasks, using your map of the passage.", note: "Global first is the classic time sink." }] },
          { title: "Exception two: reusable matching banks", text: "Matching-information banks explicitly allow 'any letter more than once', and answers can cluster: three statements may all live in one paragraph. Never assume each letter is used once.", examples: [{ english: "Statements 5, 7 and 8 all cite paragraph D — the reuse note printed it in the rubric.", note: "Read the rubric's reuse rule every time." }] },
        ],
      },
      {
        type: "example",
        title: "The shape in action — a miniature paper",
        items: [
          { english: "Passage 1, 'The quiet strangeness of water' (science, accessible): Questions 1–5 True/False/Not Given, 6–9 sentence completion, 10–12 multiple choice.", note: "Three groups, thirteen items, answers running down the passage.", domain: "exam" },
          { english: "Passage 2, 'Re-wilding the rivers' (environment, stakeholder argument): Questions 1–5 matching features, 6–9 True/False/Not Given, 10–13 flowchart.", note: "The argument's stakeholders become the matching bank.", domain: "exam" },
          { english: "Passage 3, 'The Antikythera mechanism' (history, dense): Questions 1–4 diagram labelling, 5–8 True/False/Not Given, 9–13 table completion.", note: "A dated narrative invites table and timeline questions.", domain: "exam" },
          { english: "A candidate reads the questions first for Passage 1 only, then skims each passage before answering — 16/18/20 with a sweep.", note: "The format-conscious budget, taught in the next lesson.", domain: "study" },
          { english: "Another candidate starts each passage by answering the headings block first, reading every paragraph twice before touching detail questions.", note: "The most expensive habit the format punishes.", domain: "exam" },
          { english: "On the GT paper, a candidate treats Section 1's four advertisements as one long passage and reads them in order, top to bottom, before looking at questions.", note: "GT Section 1 is a lookup task — the course teaches question-first scanning there.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Format mistakes corrected",
        items: [
          { wrong: "I will write my answers on the question paper and transfer them in the last five minutes.", right: "Type every answer in place as you go; the transfer window belonged to the retired paper format.", reason: "Sixty minutes is all the time there is — a transfer plan gives away five minutes of checking for a ritual the test abolished." },
          { wrong: "All thirteen question types appear on every passage.", right: "Each passage carries three or four types; the thirteen-type list is the whole paper's repertoire.", reason: "Expecting diagram labelling on every passage wastes preparation time on the wrong worry." },
          { wrong: "The three passages get harder, so I will read the third one first while I am fresh.", right: "Attempt passages in order; the budget lesson's 18/18/20 already gives the hardest passage your freshest minutes.", reason: "Order-jumping breaks the warm-up the paper is designed around and invites clock catastrophe." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Recite the paper's shape: three passages, forty questions, sixty minutes, thirteen types in the bank, no transfer time."],
          ["While the clock runs", "Track where each group's answers live; let the order rule bound your searches; answer global questions last."],
          ["If you are stuck", "Name the type you are stuck on and recall its lesson; every type in this module has a dedicated method."],
          ["Final minutes", "Sweep for blanks — an unanswered question is a guaranteed zero, and no penalty exists for guessing."],
        ],
      },
      {
        type: "summary",
        points: [
          "Three passages, forty questions, sixty minutes, no transfer time: answers are typed in place as you read.",
          "Within a group, answers follow passage order; across groups it usually holds — with global questions and reusable matching banks as the exceptions.",
          "The thirteen official types spread across the paper, three or four per passage, never all at once.",
          "General Training keeps the clock and the types but reorganises the material into two short-text sections and one long passage.",
          "No specialist knowledge is assumed: every answer is in the text, which is why technique lessons, not subject lessons, raise bands.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "How long is the Reading paper, and how many questions does it carry?", options: ["60 minutes, 40 questions", "30 minutes, 40 questions", "60 minutes, 30 questions"], correctIndex: 0, explanation: "Sixty minutes and forty questions — with no transfer time at the end, since the paper test was withdrawn.", from: "The examination format, section by section" },
          { question: "Which two sections are identical across the Academic and General Training variants?", options: ["Reading and Writing", "Listening and Speaking", "None"], correctIndex: 1, explanation: "Listening and Speaking are identical; Reading and Writing are the variant-specific sections.", from: "IELTS Academic or General Training?" },
          { question: "Which question family ignores the answer-order rule?", options: ["Matching headings", "Sentence completion", "True/False/Not Given"], correctIndex: 0, explanation: "Headings, titles and main-idea questions are global — they cover whole paragraphs and follow no passage order.", from: "The question-order rule — and its two exceptions" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "How many minutes does the Academic Reading paper allow, and what happens after them?",
        hints: ["The clock is the whole story — think about what does NOT happen at the end."],
        options: [
          { id: "a", text: "60 minutes, followed by ten minutes to transfer answers." },
          { id: "b", text: "60 minutes, after which the test simply ends — answers are typed in place during the hour." },
          { id: "c", text: "54 minutes plus 6 minutes of transfer time." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "60 minutes, after which the test simply ends — answers are typed in place during the hour.",
          "The transfer window belonged to the paper test, which was withdrawn; planning around it gives away minutes the computer-delivered test never returns.",
          "(a) describes the retired format; (c) invents a split that exists nowhere.",
        ),
        tags: ["areading", "format"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "A True/False/Not Given block has statements 1–6. You located statements 1 and 2 in paragraphs B and C. Where should you look first for statement 3?",
        hints: ["Apply the within-group order rule."],
        options: [
          { id: "a", text: "Paragraph A, in case the answers loop back." },
          { id: "b", text: "From paragraph C onwards — the answer sits after statement 2's location." },
          { id: "c", text: "Nowhere in particular: verdict statements are scattered randomly." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "From paragraph C onwards — the answer sits after statement 2's location.",
          "Answers within one group follow passage order, so statement 3 lives at or after statement 2's paragraph — the rule that bounds every search you make.",
          "(a) contradicts the order rule; (c) is true only of matching banks that print a reuse note.",
        ),
        tags: ["areading", "order-rule"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Independent practice. Name the two exceptions to the answer-order rule taught in this lesson.",
        question: "Which two kinds of task ignore the passage-order rule? (Name them in a short phrase.)",
        acceptedAnswers: ["global questions and reusable matching banks", "global questions (headings, titles, main idea) and matching with reuse", "headings or main-idea questions, and matching banks allowing letter reuse", "global tasks and reusable matching"],
        keywords: ["global", "matching", "reuse"],
        hints: [],
        feedback: fb(
          "Global questions (headings, titles, main-idea) and matching banks that allow reuse.",
          "Global tasks cover whole paragraphs rather than a located line, and reusable matching banks can cluster several answers in one paragraph — both break the top-to-bottom pattern the other types follow.",
          "Anything naming only one exception is incomplete: both were taught with worked examples.",
        ),
        tags: ["areading", "order-rule"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Independent practice. The General Training Reading paper differs from Academic in that it…",
        hints: [],
        options: [
          { id: "a", text: "uses different question types and a shorter clock." },
          { id: "b", text: "keeps the clock and question types but organises the material into two short practical sections and one long passage." },
          { id: "c", text: "is only for candidates below band 5." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "keeps the clock and question types but organises the material into two short practical sections and one long passage.",
          "GT reorganises the reading into Section 1's short practical texts, Section 2's workplace documents and Section 3's long general-interest passage — the pacing changes, the technique does not.",
          "(a) is wrong on both counts; (c) confuses variant with level.",
        ),
        tags: ["areading", "gt"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Complete the format fact.",
        question: "The three Academic passages total roughly how many words? (Write the two numbers, smallest first, separated by a dash.)",
        acceptedAnswers: ["2150-2750", "2,150-2,750", "2150 - 2750"],
        keywords: ["2150", "2750"],
        hints: [],
        feedback: fb(
          "2,150–2,750 words.",
          "The band is worth knowing: it sets your skim-and-scan rhythm, and it tells you that no passage asks for more than about nine hundred words of actual reading.",
          "Any wider range mis-states the paper's official word count.",
        ),
        tags: ["areading", "format"],
      }),
    ],
    homework: [
      "Open the Reading Masterclass passage library, read the card of one Academic passage and write down which three question types it carries and which of them is global.",
      "From memory, write the paper's shape on one line (passages, questions, minutes, transfer time) and check it against this lesson before your next study session.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-areading-time",
    title: "Reading time management",
    description:
      "The 18/18/20 budget with a sweep, the ninety-second-per-question arithmetic, triage by question type, and the never-leave-a-blank rule.",
    objectives: [
      "apply the 18/18/20 + sweep budget across the three passages",
      "triage a mixed page by doing location tasks before global tasks",
      "execute the final sweep and the no-blank rule under pressure",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Sixty minutes, forty questions: that is ninety seconds per question, and a passage finished at minute forty is a band rescued. Reading time management is not a soft skill bolted onto the paper — it is a reading skill in its own right, tested on every page, because the paper is deliberately too dense to read word-by-word in the time given. This lesson installs the budget, the triage and the recovery protocol that keep the clock working for you.",
        beforeYouStart: [
          "You know the paper's shape from the previous lesson.",
          "You have attempted at least one full passage, timed or untimed.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — the sixty-minute clock across all three passages"],
          ["Task & question types", "Triage by type: locating tasks first, global tasks last, every type assigned its time box"],
          ["What is assessed", "Nothing directly — and everything indirectly: the clock bounds every other skill"],
          ["Why this matters", "Most lost marks in Reading are lost to time, not comprehension: a perfect reader with a broken budget scores below a good reader with a working one"],
        ],
      },
      { type: "heading", text: "The budget" },
      {
        type: "table",
        title: "18 / 18 / 20 + sweep",
        headers: ["Minutes", "Spent on", "What it buys"],
        rows: [
          ["0–18", "Passage 1 and its 12–14 questions", "The accessible passage banked early, confidence intact"],
          ["18–36", "Passage 2 and its questions", "The dense middle passage with full attention"],
          ["36–56", "Passage 3 and its questions", "The hardest passage gets the largest single block"],
          ["56–60", "The sweep", "Blanks filled, limits checked, spelling confirmed"],
        ],
        caption: "General Training runs its own version: roughly 15 / 20 / 25 — short-text speed early buys time for Section 3.",
      },
      {
        type: "text",
        text: "Treat the numbers as tripwires, not gospel. The principle they encode is the one that scores: each passage owns a bounded block, the block ends even if the passage does not, and the last four minutes belong to the whole paper, not to the question you happen to be kissing when they arrive.",
      },
      { type: "heading", text: "The arithmetic of ninety seconds" },
      {
        type: "steps",
        title: "Where a question's minutes actually go",
        steps: [
          { title: "Locating costs more than deciding", text: "Most of a question's ninety seconds is spent FINDING the two or three lines that settle it, not choosing among the options. Budget your scanning instinct accordingly: a full minute of hunting followed by a fifteen-second decision is the healthy shape.", examples: [{ english: "A candidate spends 75 seconds finding the paragraph and 10 seconds matching the paraphrase — then wonders why 'slow reading' was never the problem.", note: "Speed lives in location, not in eye movement over options." }] },
          { title: "Two minutes is the ceiling for any single item", text: "When a question passes two minutes, it has become a time sink. Mark it, walk away, and let the sweep or a second visit settle it. One abandoned question costs one mark; one defended sink costs three or four.", examples: [{ english: "Question 17 resists for two minutes; the candidate marks it, moves on, and clears 18–22 comfortably before returning.", note: "The mark you leave is recoverable; the minutes are not." }] },
          { title: "Cheap questions first inside a passage", text: "Within a passage, work the locating tasks (completion, verdict, detail matching) before the global ones (headings, titles). The locating tasks build your map; the global tasks then cost a quarter of the time.", examples: [{ english: "Headings attempted first: two passes over the passage. Headings attempted last: one pass, using the map the detail questions already drew.", note: "Triage is a within-passage decision, not only a between-passage one." }] },
          { title: "The sweep is a checklist, not a mood", text: "Minutes 56–60 have a fixed job list: every question has SOMETHING typed, every completion respects its word limit, every copied word is spelled as the passage spells it. Run the list in order and the sweep cannot degrade into re-reading.", examples: [{ english: "A sweep fills three blanks with best guesses, repairs two word-limit breaches and fixes one copied misspelling — three marks recovered in four minutes.", note: "Recovered marks are the cheapest marks on the paper." }] },
        ],
      },
      {
        type: "example",
        title: "Budgets under pressure — six scenarios",
        items: [
          { english: "Passage 1 finished at minute 14 — two minutes banked for Passage 3's headings block.", note: "Early speed is currency, not a licence to slow down.", domain: "exam" },
          { english: "Passage 2 still unfinished at minute 36: the candidate marks the last four questions and moves on, returning at minute 52.", note: "The block boundary is enforced even mid-passage.", domain: "exam" },
          { english: "A matching-information bank allows letter reuse; the candidate budgets it as one block of location hunts, not fourteen independent searches.", note: "Type-aware budgeting beats item-count arithmetic.", domain: "exam" },
          { english: "During study practice, a learner writes the clock time beside every question for a whole passage and discovers the true cost of its two sink questions.", note: "Measurement first: you cannot budget what you have never timed.", domain: "study" },
          { english: "A candidate leaves four questions blank 'to avoid wrong answers' — and forgets the paper has no penalty for guessing.", note: "A blank and a wrong guess score identically: zero and zero. The guess has upside.", domain: "exam" },
          { english: "The sweep catches that answer 31 was typed as two words against a ONE WORD ONLY limit.", note: "Word-limit repair is the sweep's highest-yield item.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Time mistakes corrected",
        items: [
          { wrong: "I will give each passage exactly twenty minutes.", right: "Run 18/18/20 + sweep: the early passages are cheaper, and the sweep needs its own protected minutes.", reason: "A flat budget starves the sweep and the hardest passage simultaneously." },
          { wrong: "If a question takes five minutes but I get it right, that is a good trade.", right: "Two minutes per item is the ceiling; a defended sink costs three or four neighbouring questions.", reason: "Marks per minute, not marks per question, is the currency of the paper." },
          { wrong: "I left six blanks because guessing feels dishonest.", right: "Fill every blank in the sweep — there is no penalty for a wrong answer, so a guess is free expected value.", reason: "The scoring table makes blanks strictly worse than guesses; protocol beats temperament here." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Write the tripwires in your head: 18, 36, 56 — three block boundaries and a sweep."],
          ["While the clock runs", "Locate before you decide; two minutes per item; global tasks after locating tasks within each passage."],
          ["If you are stuck", "Mark, move, return. The question will still exist at minute 52; the minutes will not."],
          ["Final minutes", "Run the sweep checklist: no blanks, no broken limits, no misspelled copies."],
        ],
      },
      {
        type: "summary",
        points: [
          "The budget is 18/18/20 with a four-minute sweep — tripwires, not gospel, enforced at the boundaries.",
          "Ninety seconds per question is the arithmetic; locating eats most of it, so speed lives in scanning.",
          "Two minutes is any item's ceiling: mark, move, return — one abandoned question costs less than one defended sink.",
          "Inside a passage, do locating tasks before global tasks: the detail questions draw the map the headings task then reads.",
          "The sweep is a fixed checklist — blanks filled, limits respected, spelling confirmed — and it runs on the whole paper's behalf.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "Which passage gets the largest single block under the taught budget?", options: ["Passage 1", "Passage 2", "Passage 3"], correctIndex: 2, explanation: "20 minutes for the hardest passage, after 18 and 18 — and four protected sweep minutes follow it.", from: "Understanding the reading test" },
          { question: "Within one question group, answers follow the passage's order — which lesson installed that rule?", options: ["Understanding the reading test", "Skimming", "Vocabulary in context"], correctIndex: 0, explanation: "The question-order rule and its exceptions were taught in the format lesson and power every budget decision here.", from: "Understanding the reading test" },
          { question: "What does the sweep do with a question you never located?", options: ["Leaves it blank honestly", "Types a best guess", "Erases your other answers"], correctIndex: 1, explanation: "No penalty for wrong answers exists, so the sweep fills every blank with the best available guess.", from: "The never-leave-a-blank rule" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "What is the taught budget for the three Academic passages?",
        hints: ["Three unequal blocks — and something protected at the end."],
        options: [
          { id: "a", text: "20 / 20 / 20 with no sweep." },
          { id: "b", text: "18 / 18 / 20 plus a four-minute sweep." },
          { id: "c", text: "15 / 20 / 25 with a ten-minute review." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "18 / 18 / 20 plus a four-minute sweep.",
          "The accessible first passage is banked early, the hardest passage gets the biggest block, and the sweep's checklist — blanks, limits, spelling — owns the final four minutes.",
          "(a) leaves nothing for the sweep; (c) is the General Training budget, not the Academic one.",
        ),
        tags: ["areading", "time"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. A question has been running for two minutes with no located evidence. The protocol says…",
        hints: ["Compare the cost of one abandoned question with the cost of three defended ones."],
        options: [
          { id: "a", text: "push on — the question must be worth it if it is this hard." },
          { id: "b", text: "mark it, move to the next question, and return only if minutes remain." },
          { id: "c", text: "abandon the whole passage and start the next one." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "mark it, move to the next question, and return only if minutes remain.",
          "Two minutes is the ceiling: one abandoned question costs at most one mark, but defending a sink costs the three or four questions after it — the arithmetic is unforgiving.",
          "(a) is the sink itself; (c) overreacts — the boundary is the question, not the passage.",
        ),
        tags: ["areading", "time"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Inside one passage, in what order do you work the task types, and why?",
        question: "Which tasks come first inside a passage — locating tasks or global tasks — and what do the earlier tasks build for the later ones?",
        acceptedAnswers: ["locating tasks first; they build a map of the passage that makes the global tasks cheap", "locating first because they draw the map the headings task then uses", "locating tasks, because they build your paragraph map", "locating first, global last, because detail questions draw the map"],
        keywords: ["locating", "map", "global"],
        hints: ["What does a completed completion block leave behind for a headings block?"],
        feedback: fb(
          "Locating tasks first; they draw the passage map the global tasks then read.",
          "A completion or verdict block forces you through the paragraphs in order, so the headings task arrives with half its work done — global-first is the classic double-read.",
          "Any answer that schedules headings first reverses the economy the lesson demonstrated with numbers.",
        ),
        tags: ["areading", "time", "triage"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Ninety seconds per question is the arithmetic. Where do most of a question's seconds actually go?",
        hints: [],
        options: [
          { id: "a", text: "Reading the four options carefully and comparing them." },
          { id: "b", text: "Deciding between the last two candidates after the evidence is found." },
          { id: "c", text: "Locating the two or three passage lines that settle the question." },
        ],
        correctOptionId: "c",
        feedback: fb(
          "Locating the two or three passage lines that settle the question.",
          "A healthy question spends most of its budget FINDING its evidence and only a fraction deciding on it — which is why the scanning lesson, not the reading-speed lesson, is the next skill in this chapter.",
          "(a) and (b) describe the cheap tail of the process, not its expensive head.",
        ),
        tags: ["areading", "time"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. The sweep's checklist has three fixed jobs. Name them.",
        question: "List the three sweep jobs in one short answer (separate them with commas).",
        acceptedAnswers: ["fill blanks, check word limits, confirm spelling of copied words", "blanks, word limits, spelling", "fill every blank, repair word-limit breaches, fix misspelled copies", "no blanks, limits respected, spelling confirmed"],
        keywords: ["blank", "limit", "spelling"],
        hints: [],
        feedback: fb(
          "Fill blanks, repair word limits, confirm spelling.",
          "Those three jobs are the highest-yield marks on the paper because they need no new comprehension — only a checklist run against work already done.",
          "Answers naming re-reading or relaxation have confused the sweep with a mood.",
        ),
        tags: ["areading", "time", "sweep"],
      }),
    ],
    homework: [
      "Take any library passage under its 20-minute timed run and write the clock time beside every question as you finish it; circle your two most expensive items.",
      "Before your next full simulation, recite the four tripwires (18, 36, 56, sweep) from memory and check them against this lesson.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-areading-skimming",
    title: "Skimming",
    description:
      "The sixty-second map of a passage: what to read, what to skip, and how a skim converts every later question into a bounded search.",
    objectives: [
      "skim a full passage for gist in sixty to ninety seconds",
      "build a one-line-per-paragraph map while skimming",
      "decide when a skim is worth its minute and when it is not",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Skimming is the fastest reading you will ever do on purpose: a deliberate, structured sweep that takes in a passage's topic and shape while skipping most of its words. It is not lazy reading — it is targeted reading, done to answer one question (what is this passage, and how is it organised?) before the real questions arrive. A minute of skimming saves five, because every question you answer afterwards starts from a map instead of a blank page.",
        beforeYouStart: [
          "You can identify a topic sentence when one is pointed out to you.",
          "You know the paper's three-passage shape from the format lesson.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — the opening minute of every passage"],
          ["Task & question types", "Feeds every type: headings and titles directly; locating tasks through the paragraph map"],
          ["What is assessed", "Reading for gist — the tested ability to grasp a passage's general content quickly"],
          ["Why this matters", "The skim converts a passage from unknown territory into a marked map: every later search starts warm"],
        ],
      },
      { type: "heading", text: "What a skim actually reads" },
      {
        type: "steps",
        title: "The sixty-second skim, move by move",
        steps: [
          { title: "Read the title and any subheading — slowly", text: "The title is the passage's thesis compressed to five words, written by the same author whose paragraphs you are about to meet. Spend a full five seconds on it and predict what the passage will argue.", examples: [{ english: "'Tall wood' predicts construction technology and probably a benefits-and-doubts structure — before a single paragraph is read.", note: "A title read well is the cheapest prediction on the paper." }] },
          { title: "Read each paragraph's first sentence at full attention", text: "Academic writers front-load: the first sentence carries the paragraph's claim, and the rest supports it. Read first sentences properly and the supporting sentences can be skipped on the first pass.", examples: [{ english: "'A beaver's dam is not a wall but a filter.' — one sentence, and the paragraph's whole argument is in hand.", note: "First sentences are the highest-density lines in the passage." }] },
          { title: "Sample the last sentence when the first is thin", text: "Some paragraphs build to a claim (concession, evidence, verdict). If the first sentence is a question, an example or someone else's view, jump to the last sentence for the paragraph's real destination.", examples: [{ english: "First sentence: 'It is often claimed that…' — the writer's own claim arrives at the end, and that is the line to take.", note: "Concession paragraphs are the skim's one special case." }] },
          { title: "Write the map as you go", text: "Beside each paragraph (or mentally, on screen), drop three or four words of gist: 'beavers extinct', 'trial measured floods', 'farmers object'. The map is the skim's product — without it, the skim was just fast reading.", examples: [{ english: "Six paragraphs, six three-word notes — and a matching-headings block later answers itself from the notes alone.", note: "The map outlives the skim and serves every question." }] },
        ],
      },
      {
        type: "table",
        title: "Skim vs its two neighbours",
        headers: ["Mode", "Eyes do", "You get", "Takes"],
        rows: [
          ["Skimming", "First/last sentences, title, structure words", "Topic + paragraph map", "60–90 seconds"],
          ["Scanning", "Hunting shapes: capitals, digits, italics", "The LINE holding a fact", "Seconds per hit"],
          ["Close reading", "Every word of two or three located lines", "The answer itself", "Only after locating"],
        ],
        caption: "The three modes are a sequence, not a menu: skim once, scan per question, close-read on contact.",
      },
      {
        type: "example",
        title: "Skims on real passage shapes",
        items: [
          { english: "'The quiet strangeness of water': title read, eight first sentences read, map = 'strange liquid / ice floats / hydrogen bonds / four degrees / life / solvent / rules / conclusion' — 70 seconds.", note: "A physics passage reduced to eight sticky notes.", domain: "exam" },
          { english: "'The reading wars': the first paragraph's first sentence contrasts speech with reading; the map opens 'speech natural, reading taught' — the debate's axis located before any detail.", note: "Argumentative passages surrender their axis in paragraph one.", domain: "exam" },
          { english: "A candidate skims the Antikythera passage and writes 'found by divers / split open / X-rayed / what dials did / unknown maker / unique / still studied' — the timeline falls out of the first sentences.", note: "Narrative histories map onto chronology almost for free.", domain: "exam" },
          { english: "A learner skims the same passage twice in practice and compares the two maps — the second map catches two paragraphs the first mislabelled.", note: "Skim quality is trainable; measure it with the map.", domain: "study" },
          { english: "On GT Section 1, a candidate glances at four advertisements for one second each — enough to know which ad is which, because the questions will name the product.", note: "Short practical texts need a glance, not a skim.", domain: "exam" },
          { english: "A candidate skips the skim on Passage 3 'to save time' and re-reads the passage four times across its thirteen questions.", note: "The minute not spent on the skim is spent four times later.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Skimming mistakes corrected",
        items: [
          { wrong: "Skimming means reading everything, just quickly.", right: "Skimming means reading selected lines at full attention and skipping the rest entirely.", reason: "Reading everything fast is exhausting and yields nothing — selection is the skill, speed is only its by-product." },
          { wrong: "I skim after answering the questions, as a check.", right: "Skim first: the map is what makes the questions cheap, so it belongs at the passage's opening minute.", reason: "A post-hoc skim confirms what you know; a pre-skim changes what you have to do." },
          { wrong: "A skim should let me answer detail questions directly.", right: "A skim locates territory, not evidence: detail answers still need the scan-and-close-read sequence.", reason: "Expecting gist-level reading to produce detail-level answers is how skimmers over-trust their maps and guess." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Decide the skim's output in advance: one three-word note per paragraph, plus a one-line guess at the passage's argument."],
          ["While the clock runs", "Title slowly, first sentences properly, last sentences on concessions — and the map written, not remembered."],
          ["If you are stuck", "If a paragraph refuses to map, note its first concrete noun and move on; the questions will bring you back with purpose."],
          ["Final minutes", "Never skim during the sweep — the sweep's jobs are blanks, limits and spelling, not comprehension."],
        ],
      },
      {
        type: "summary",
        points: [
          "A skim is 60–90 seconds of selected reading: title at full attention, each paragraph's first sentence, last sentences on concession paragraphs.",
          "The skim's product is the map — three or four gist words per paragraph — not a feeling of familiarity.",
          "Skim, scan, close-read is a fixed sequence: the map bounds the scans; the scan bounds the close read.",
          "Argumentative passages surrender their axis in paragraph one; narrative passages map onto chronology for free.",
          "GT Section 1's short texts need a glance, not a skim; save the full protocol for Sections 2–3 and the Academic passages.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "Which parts of a paragraph does the skim read at full attention?", options: ["Every second line", "The first sentence, plus the last on concession paragraphs", "Only the final sentence"], correctIndex: 1, explanation: "Academic writers front-load claims in first sentences; concession paragraphs are the special case where the claim lands at the end.", from: "The sixty-second skim, move by move" },
          { question: "The time lesson set a ceiling of two minutes per question. How long is a skim?", options: ["60–90 seconds, once per passage", "Two minutes per paragraph", "As long as it takes"], correctIndex: 0, explanation: "The skim is a passage-level investment of 60–90 seconds that repays itself across every question that follows.", from: "Reading time management" },
          { question: "Which reading mode follows a successful scan?", options: ["Another scan", "Close reading of the located lines", "A fresh skim"], correctIndex: 1, explanation: "Skim → scan → close-read is the fixed sequence; each mode narrows the territory the next one works on.", from: "Skim vs its two neighbours" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "What is the product of a skim?",
        hints: ["What should exist afterwards that did not exist before?"],
        options: [
          { id: "a", text: "A general feeling of familiarity with the passage." },
          { id: "b", text: "A written paragraph map — a few gist words per paragraph — plus the passage's argument." },
          { id: "c", text: "The answers to the passage's global questions." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A written paragraph map — a few gist words per paragraph — plus the passage's argument.",
          "The skim exists to produce three or four gist words per paragraph and a one-line guess at the argument — artefacts that serve every later question, unlike familiarity, which fades and deceives.",
          "(a) is what skims feel like when done wrong; (c) overreaches — global questions still need the map applied carefully.",
        ),
        tags: ["areading", "skimming"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Skim this paragraph by the taught protocol, then answer.",
        hints: ["The first sentence is a concession — where does the claim actually land?"],
        passageTitle: "Skim drill",
        passage: "It is often said that the city's tram network lost money from the day it opened. The books tell a subtler story. Operating costs were indeed higher than fares for most of the network's first decade, but the ledgers exclude the land sales that the lines made possible: every extension raised the value of the fields it crossed, and the city sold those fields at prices the trams had created.",
        question: "In three or four words, what is this paragraph's real claim?",
        options: [
          { id: "a", text: "The trams lost money from day one — as is often said." },
          { id: "b", text: "The trams were profitable once land gains are counted." },
          { id: "c", text: "The city kept two sets of books." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The trams were profitable once land gains are counted.",
          "The first sentence reports a common view; the paragraph's own claim arrives at the end — higher land values created by the lines repaid the operating losses. A skim that trusted the first sentence alone would map the paragraph backwards.",
          "(a) is the reported view the paragraph exists to correct; (c) mistakes 'the ledgers exclude' for deception.",
        ),
        tags: ["areading", "skimming", "concession"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. A paragraph opens with a question ('Could the reef be farmed sustainably?'). Where does the skim look for that paragraph's claim?",
        hints: ["A question is an opener, not a claim — where do question-led paragraphs land?"],
        options: [
          { id: "a", text: "In the question itself, which is what the paragraph is about." },
          { id: "b", text: "In the paragraph's last sentence, where question-led paragraphs usually deliver their answer." },
          { id: "c", text: "Nowhere: question-led paragraphs cannot be skimmed." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "In the paragraph's last sentence, where question-led paragraphs usually deliver their answer.",
          "Question-led paragraphs are the concession pattern's cousin: the opening poses, the closing resolves. The skim samples the last sentence for the resolution and maps the paragraph by it.",
          "(a) gives the topic but not the claim — a map of topics cannot answer headings questions.",
        ),
        tags: ["areading", "skimming"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. You skim a passage and afterwards cannot say what any paragraph was about. Diagnose the failure.",
        question: "In one sentence: what did the skim most likely do wrong — and what should it have produced?",
        acceptedAnswers: ["it read everything quickly instead of selected lines, and produced no written map", "it produced a feeling instead of a map; it should leave three or four gist words per paragraph", "it skipped the map and trusted familiarity; it should write gist notes per paragraph", "it read all words fast rather than first sentences properly, and no map was written"],
        keywords: ["map", "gist", "first sentence"],
        hints: [],
        feedback: fb(
          "It read everything fast and produced no map.",
          "The classic skim failure is speed without selection and familiarity without artefact — the cure is structural: first sentences at full attention, and gist notes written per paragraph.",
          "Answers blaming reading speed alone miss the structural point: selection and the map are the skim.",
        ),
        tags: ["areading", "skimming"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. When is a skim NOT worth its minute?",
        hints: [],
        options: [
          { id: "a", text: "On GT Section 1's short notices and advertisements, which are glance-then-locate texts." },
          { id: "b", text: "On any passage longer than five paragraphs." },
          { id: "c", text: "Whenever the passage carries a matching-headings block." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "On GT Section 1's short notices and advertisements, which are glance-then-locate texts.",
          "The short practical texts of GT Section 1 are lookup material — a one-second glance to know which text is which, then question-first scanning. The full skim protocol belongs to passages, and (c) has it exactly backwards: headings blocks are the skim's best customer.",
          "(b) invents a length limit that exists nowhere in the method.",
        ),
        tags: ["areading", "skimming", "gt"],
      }),
    ],
    homework: [
      "Skim one library passage with a timer set to ninety seconds, write its paragraph map, then check the map against the passage — label any paragraph your map got wrong.",
      "Skim a second passage and, before answering anything, try the passage's headings block from the map alone; count how many headings the map settled.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-areading-scanning",
    title: "Scanning",
    description:
      "Hunting for shapes, not meanings: how trained eyes find the two lines that settle a question in seconds — digits, capitals, italics and the zigzag sweep.",
    objectives: [
      "scan for digits, capitalised names, dates and italics at several lines per second",
      "convert a question into its scan target before the eyes move",
      "combine scanning with the order rule to bound every search",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Scanning is the skill the clock respects most: eyes moving down a page of print at several lines per second, hunting for a SHAPE — a number, a name, a date — while the mind holds a single target and ignores everything else. It feels mechanical because it is mechanical, and that is its power: scanning does not need to understand the passage, only to find landmarks in it. Every locating question on the paper begins with a scan, and every scan begins with a question converted into a target.",
        beforeYouStart: [
          "You know the skim-scan-close-read sequence from the previous lesson.",
          "You can hold a three-word target in mind without re-reading the question.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — the locating move inside every question's budget"],
          ["Task & question types", "Powering completion, verdict, detail-matching and multiple-choice items alike"],
          ["What is assessed", "Reading for detail: finding specific information in a dense text at speed"],
          ["Why this matters", "Locating eats most of each question's ninety seconds — the skill that speeds location speeds everything"],
        ],
      },
      { type: "heading", text: "Convert, then hunt" },
      {
        type: "steps",
        title: "The scan, move by move",
        steps: [
          { title: "Convert the question into a scan target", text: "Before your eyes touch the passage, name what you are hunting in the passage's own likely vocabulary: a year, a mineral, a person, a measurement. The target is a word-SHAPE plus a meaning stub — 'a number near a date', 'the word for a gear part'.", examples: [{ english: "'In which decade was the code patented?' converts to: hunt the digits 18xx/19xx — then read the line.", note: "The conversion is the skill; the hunt is only fast eyes." }] },
          { title: "Prefer unmissable shapes: digits and capitals", text: "Numbers, dates, capitalised names and italicised terms are visually loud — they cannot be skimmed past accidentally. When a question offers a year, a name or a figure, hunt that first and let the surrounding lines do the rest.", examples: [{ english: "A matching-features item names three researchers; the scan hunts their capitalised surnames and lands on each in under a second.", note: "Proper nouns are the scanner's best friends." }] },
          { title: "Sweep in a zigzag, top to bottom, once", text: "Move your eyes down the page in a deliberate zigzag — line, gap, line — covering two or three lines per sweep, and do not loop back mid-scan: a completed sweep that missed means the target's wording, not the direction, needs changing.", examples: [{ english: "The scan for 'thirty per cent' misses; the second sweep hunts 'a third' — a paraphrase-aware target — and lands.", note: "A miss is feedback about the target, not a reason to read the passage." }] },
          { title: "Stop on contact, then close-read", text: "The moment the shape appears, stop scanning entirely: the next move is two or three lines of close reading around the hit, comparing meaning, not vocabulary, with the question. Scanning past your own target is the classic double-cost error.", examples: [{ english: "The digit '1973' appears; the candidate stops, reads its sentence, and matches the question's 'adopted the standard' to the line's 'the industry adopted'.", note: "Contact ends the scan and starts the decision." }] },
        ],
      },
      {
        type: "table",
        title: "Scan targets by question family",
        headers: ["The question mentions…", "Hunt first for…"],
        rows: [
          ["A date, decade or period", "Digits: 1973, 1870s, sixteenth century"],
          ["A person, group or institution", "Capitalised names — the surname, the agency, the journal"],
          ["A quantity or measurement", "Digits with units: 20 kg, ninety per cent, four degrees"],
          ["A concept (no obvious shape)", "The concept's noun family — and be ready to re-hunt its synonyms"],
        ],
        caption: "Concept-only targets are the hardest scans: expect to convert synonyms on the first miss, exactly as the zigzag step teaches.",
      },
      {
        type: "example",
        title: "Scans on real material",
        items: [
          { english: "Question: 'What did the radiographs of 1971 reveal?' — the scan hunts '1971', lands mid-paragraph, and the close read takes ten seconds.", note: "A dated question is a gift-wrapped scan target.", domain: "exam" },
          { english: "Question: 'Who worried about salmon migration?' — the scan hunts 'salmon', lands in the objections paragraph, then close-reads the sentence for the group's name.", note: "Hunt the rare word; read for the common one.", domain: "exam" },
          { english: "A candidate scanning for 'expensive' misses twice, converts to the passage's own 'the barrier is the balance sheet', and lands immediately on a paraphrase-aware second sweep.", note: "The library's passages train exactly this conversion reflex.", domain: "study" },
          { english: "In the barcode passage, a candidate scans for '1994' to locate the quick-response code's paragraph — bypassing six paragraphs of narrative.", note: "Digits let the scanner skip whole pages lawfully.", domain: "exam" },
          { english: "A learner practises scanning the library's beaver passage for 'crest', 'gaps' and 'attenuation' — three targets, three hits, each confirmed by a two-line close read.", note: "Multiple-target drills build the hold-two-things muscle.", domain: "study" },
          { english: "A candidate scans for a target found in the QUESTIONS twice and the passage never — forgetting that questions paraphrase.", note: "Question wording is the wrong dialect: it is written to differ from the passage's.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Scanning mistakes corrected",
        items: [
          { wrong: "If my first sweep misses, I should read the paragraph properly.", right: "Convert the target — hunt the question's synonyms, not its exact words — and sweep again; reading is the last resort, not the second.", reason: "A miss almost always means the passage paraphrased the concept; the scan's job is to speak both dialects." },
          { wrong: "I scan with my finger moving line by line so I miss nothing.", right: "Scan in zigzag bands of two or three lines; line-by-line tracking is close reading wearing a disguise.", reason: "The point of scanning is speed through safe territory; line-by-line motion surrenders exactly that speed." },
          { wrong: "When I see a number that looks right, I answer from it immediately.", right: "Stop on contact and close-read the sentence: numbers repeat, and the wrong 1973 is the classic near-miss.", reason: "Digits locate candidates, not answers — the close read is where the question is actually settled." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Name the target out of the question: its shape (digit, capital, unit) and its meaning stub."],
          ["While the clock runs", "One zigzag sweep per target; convert synonyms on a miss; stop dead on contact."],
          ["If you are stuck", "Apply the order rule to bound the sweep — hunt below the last located answer, not the whole passage."],
          ["Final minutes", "The sweep never scans: blanks, limits, spelling only."],
        ],
      },
      {
        type: "summary",
        points: [
          "Every locating question starts with a conversion: question wording becomes a shape-plus-meaning scan target.",
          "Digits, capitals, units and italics are unmissable shapes — hunt them first whenever the question supplies them.",
          "Sweep once, in zigzag bands, without looping back; a miss is feedback that the target needs synonym conversion.",
          "Contact stops the scan dead: two or three lines of close reading decide the answer, never the shape alone.",
          "The order rule bounds every hunt — scan below your last located answer, not the whole passage again.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "What immediately follows a successful scan?", options: ["Another scan with a new target", "Close reading of the two or three lines around the hit", "A fresh skim of the passage"], correctIndex: 1, explanation: "The skim-scan-close-read sequence is fixed: contact with the target hands over to close reading, where meaning settles the question.", from: "Skimming" },
          { question: "How does the time lesson's arithmetic explain scanning's importance?", options: ["Most of a question's ninety seconds goes to locating, not deciding", "Scoring is based on scanning speed", "The sweep is a scanning exercise"], correctIndex: 0, explanation: "Because locating dominates each question's budget, the skill that speeds location — scanning — speeds the whole paper.", from: "Reading time management" },
          { question: "A scan for the question's exact words keeps missing. Why?", options: ["The passage is too hard", "Questions paraphrase — hunt the synonyms, not the question's dialect", "The zigzag is too wide"], correctIndex: 1, explanation: "Question wording is deliberately rephrased; a miss means the target needs synonym conversion, not slower eyes.", from: "The scan, move by move" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "What does a scan hunt for?",
        hints: ["Think about what eyes can catch at three lines per second."],
        options: [
          { id: "a", text: "The meaning of every sentence, processed at speed." },
          { id: "b", text: "Shapes — digits, capitals, units, italics — attached to a meaning stub from the question." },
          { id: "c", text: "The passage's main ideas, sampled paragraph by paragraph." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Shapes — digits, capitals, units, italics — attached to a meaning stub from the question.",
          "Scanning is mechanical by design: visually loud landmarks — numbers, names, dates — caught at speed, with just enough meaning attached to know when to stop. Meaning in full arrives only in the close read.",
          "(a) describes close reading; (c) describes skimming.",
        ),
        tags: ["areading", "scanning"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. A question asks: 'Which group reported damage to field banks?' What is the best FIRST scan target?",
        hints: ["Hunt the rare word, not the common one."],
        options: [
          { id: "a", text: "The word 'group'." },
          { id: "b", text: "The word 'damage'." },
          { id: "c", text: "The phrase 'field banks' — rare, concrete, and almost certainly the passage's own wording." },
        ],
        correctOptionId: "c",
        feedback: fb(
          "The phrase 'field banks' — rare, concrete, and almost certainly the passage's own wording.",
          "Rare concrete phrases are usually lifted from the passage itself, so they make perfect scan targets; common words like 'group' and 'damage' appear a dozen times and waste sweeps.",
          "(a) and (b) are frequency traps: the more often a word appears, the worse it locates.",
        ),
        tags: ["areading", "scanning", "targets"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Your sweep for 'nineteen-year cycle' finds nothing. What is the NEXT move?",
        question: "In one short sentence: after a miss, what do you change before sweeping again?",
        acceptedAnswers: ["convert the target to its synonyms and sweep again", "hunt the concept's synonyms, not the question's words", "convert the target — hunt synonyms of the concept", "re-target: hunt the passage's own wording for the concept"],
        keywords: ["synonym", "convert", "target"],
        hints: ["A miss is feedback about the target, not about your eyes."],
        feedback: fb(
          "Convert the target to synonyms and sweep again.",
          "Questions paraphrase, so the first target speaks the wrong dialect; the trained response is conversion — hunt the concept's other words — and only then, if the second sweep misses too, fall back to reading.",
          "Answers that jump straight to reading the paragraph have skipped the scan's built-in second chance.",
        ),
        tags: ["areading", "scanning"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A matching-information statement reads: 'the environmental argument and the objections to it'. Your scan should…",
        hints: [],
        options: [
          { id: "a", text: "hunt the word 'environmental' and stop at its first appearance." },
          { id: "b", text: "hunt 'environmental' and 'sustainable' (plus kin), collecting every hit, then close-read each to find where argument AND objection meet." },
          { id: "c", text: "skip scanning: this is a global question." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "hunt 'environmental' and 'sustainable' (plus kin), collecting every hit, then close-read each to find where argument AND objection meet.",
          "Concept-only targets scatter: the scan collects every occurrence of the concept's word family, and the close read — not the scan — decides which paragraph hosts both halves of the statement. Stopping at the first hit is how attribution errors are made.",
          "(a) is the first-hit trap; (c) misfiles the type — matching-information items are located, not global.",
        ),
        tags: ["areading", "scanning", "matching-information"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Your last located answer sat in paragraph D. The next question's target could be anywhere. What does the order rule let you do?",
        hints: [],
        options: [
          { id: "a", text: "Scan from paragraph A again for safety." },
          { id: "b", text: "Scan from paragraph D onwards first — answers within a group run downwards." },
          { id: "c", text: "Scan only the final paragraph." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Scan from paragraph D onwards first — answers within a group run downwards.",
          "The order rule turns the passage into a ratchet: each located answer raises the floor for the next search, so you never re-scan territory you have already mined.",
          "(a) re-pays for ground the ratchet already cleared; (c) over-narrows before the rule's bounds are proven.",
        ),
        tags: ["areading", "scanning", "order-rule"],
      }),
    ],
    homework: [
      "Take any library passage and, without answering anything, scan for five question targets you invent from its card (a date, a name, a unit, a rare phrase, a concept) — note your hit time for each.",
      "In your next timed passage, mark every question where the FIRST sweep missed and write down the synonym conversion that the second sweep used.",
    ],
  },
];
