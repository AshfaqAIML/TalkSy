/**
 * IELTS Academy blueprint — variant track modules.
 *
 * Academic Reading and Writing (IA-M3/M4/M5) live in the
 * `ielts-academy-academic` course; General Training Reading and Writing
 * (IG-M3/M4/M5) live in `ielts-academy-general-training`. The two tracks
 * never share Reading or Writing content — separate lessons, separate
 * question banks, separate mocks (test-enforced bank separation).
 */

import { C, L, type ModulePlan } from "./types";

// ---------------------------------------------------------------------------
// IA-M3 — Academic Reading Mastery
// ---------------------------------------------------------------------------

const IA_M3: ModulePlan = {
  code: "IA-M3",
  slug: "module-3a-academic-reading",
  title: "Module 3 — Academic Reading Mastery",
  academy: "ielts",
  courses: ["ielts-academy-academic"],
  pathways: ["ielts-academic"],
  replaces: ["module-3a-academic-reading"],
  description:
    "The Reading Masterclass (PROMPT 45): the fifteen foundation skills — the paper and its arithmetic, the three reading speeds, claim-and-support, paraphrase, context vocabulary, inference, the writer's opinion, purpose and tone, reference chains and paragraph architecture — then all thirteen official question types, each on a seven-component structure (definition, instructions, solving strategy, worked example, trap catalogue, guided and independent practice, per-item explanations), with original passages across the ten taught subjects and no specialist knowledge assumed.",
  learningObjectives: [
    "Deploy the skim-scan-close-read sequence and the question-order rule on academic prose",
    "Separate claims from support, read implied meaning in one licensed step, and track the writer's voice against reported voices",
    "Apply every verdict, matching and completion type with its dedicated method, from True/False/Not Given boundaries to diagram anchoring",
    "Copy answers from the passage inside printed word limits, letter-exact, and repair them in the sweep",
    "Hold the 18/18/20 budget with the never-leave-a-blank protocol under real passages",
  ],
  prerequisites: ["I-M1"],
  entryLevel: "B1+",
  estimatedHours: 6.5,
  chapters: [
    C("reading-foundations", "Reading foundations: the fifteen skills", [
      L("ielts-areading-test", "Understanding the reading test", 12, "The paper's shape, the order rule and its exceptions", ["reading strategies"], "existing"),
      L("ielts-areading-time", "Reading time management", 14, "18/18/20 + sweep; two-minute ceiling; no blanks", ["time management"], "existing"),
      L("ielts-areading-skimming", "Skimming", 12, "The sixty-second paragraph map", ["skimming"], "existing"),
      L("ielts-areading-scanning", "Scanning", 12, "Shapes, synonym conversion, order-bounded hunts", ["scanning"], "existing"),
      L("ielts-areading-intensive", "Intensive reading", 12, "Claims, grammar fit, qualifiers on two or three lines", ["close reading"], "existing"),
      L("ielts-areading-main-ideas", "Identifying main ideas", 12, "Five claim positions and the deletion test", ["main ideas"], "existing"),
      L("ielts-areading-supporting-details", "Locating supporting details", 12, "Figures, examples, mechanisms, concessions", ["supporting details"], "existing"),
      L("ielts-areading-paraphrase", "Understanding paraphrasing", 13, "Synonym chains, grammar flips, reorders; echoes deceive", ["paraphrase"], "existing"),
      L("ielts-areading-vocabulary", "Vocabulary in context", 12, "The unknown-word protocol and exact copying", ["vocabulary"], "existing"),
      L("ielts-areading-inference", "Inference", 13, "The one-step rule, triggers, the reverse test", ["inference"], "existing"),
      L("ielts-areading-opinion", "The writer's opinion", 12, "Four voices, attribution frames, endorsements", ["opinion"], "existing"),
      L("ielts-areading-purpose", "The writer's purpose", 12, "Function verbs, audience from address and assumption", ["purpose"], "existing"),
      L("ielts-areading-tone", "Tone", 11, "The tone thermometer and the quotable-line test", ["tone"], "existing"),
      L("ielts-areading-reference", "Reference words", 11, "Backwards resolution, kind-matching, qualifier inheritance", ["reference"], "existing"),
      L("ielts-areading-paragraphs", "Paragraph organisation", 12, "Four patterns, linker families, deviations", ["paragraph structure"], "existing"),
    ]),
    C("question-types", "Every question type in depth", [
      L("ielts-areading-multiple-choice", "Multiple choice", 14, "Locate-predict-match-verify; edited echoes", ["multiple choice"], "existing"),
      L("ielts-areading-true-false-not-given", "True / False / Not Given", 14, "The boundary rule: located contradiction vs silence", ["True/False/Not Given"], "existing"),
      L("ielts-areading-yes-no-not-given", "Yes / No / Not Given", 13, "Views verdicts, endorsement, label discipline", ["Yes/No/Not Given"], "existing"),
      L("ielts-areading-matching-headings", "Matching headings", 14, "Claim paraphrase, support test, spare audit", ["matching headings"], "existing"),
      L("ielts-areading-matching-information", "Matching information", 13, "Rarest elements, support content, reuse licence", ["matching information"], "existing"),
      L("ielts-areading-matching-features", "Matching features", 13, "Feature inventories, both-handles attribution", ["matching features"], "existing"),
      L("ielts-areading-matching-endings", "Matching sentence endings", 12, "Grammar screening, logic fit, verification", ["matching sentence endings"], "existing"),
      L("ielts-areading-sentence-completion", "Sentence completion", 12, "Grammar prediction, order ratchet, copy exact", ["sentence completion"], "existing"),
      L("ielts-areading-summary-completion", "Summary completion", 13, "The synopsis map, paraphrase chains, strict limits", ["summary completion"], "existing"),
      L("ielts-areading-note-completion", "Note completion", 12, "Label anchoring, telegraphic grammar", ["note completion"], "existing"),
      L("ielts-areading-table-completion", "Table completion", 12, "Header predictions, printed-cell anchors, formats", ["table completion"], "existing"),
      L("ielts-areading-flowchart-completion", "Flowchart completion", 12, "Stage markers, arrow discipline, slot classes", ["flowchart completion"], "existing"),
      L("ielts-areading-diagram-labelling", "Diagram labelling", 12, "Caption anchors, the description's tour", ["diagram labelling"], "existing"),
    ]),
  ],
  practiceActivities: [
    "Passage library runs: any of the ten academic passages in practice or 20-minute timed mode",
    "Two full Academic simulations (official 60-minute clock, three passages each)",
    "Type-specific blocks inside every passage set, matching the lesson being studied",
    "Reading Room argumentative-prose bridging per pathway steps",
  ],
  assessments: [
    "Per-lesson bank questions with why-wrong feedback",
    "Full simulations scored item-by-item with the reading error taxonomy",
    "Performance dashboard: accuracy by type and section, vocabulary and inference logs, mistake-driven lesson recommendations",
  ],
  completionCriteria: [
    "All 28 lessons completed with bank questions attempted",
    "One full Academic simulation attempted and reviewed with evidence highlighted",
  ],
};

// ---------------------------------------------------------------------------
// IA-M4 — Academic Writing Task 1
// ---------------------------------------------------------------------------

const IA_M4: ModulePlan = {
  code: "IA-M4",
  slug: "module-4a-writing-task-1",
  title: "Module 4 — Academic Writing Task 1",
  academy: "ielts",
  courses: ["ielts-academy-academic"],
  pathways: ["ielts-academic"],
  replaces: ["module-4a-academic-writing (v1, absorbed by the PROMPT 46 masterclass)"],
  description:
    "The Writing Masterclass (PROMPT 46) for the report and its foundations: the eleven writing crafts — instructions, requirements, planning, paragraphs, grammar, vocabulary, cohesion, coherence, punctuation, sentence variety, time — then one masterclass lesson per visual family (bar, line, pie, table, mixed, process, map) on the ten-component structure from analysing the visual to avoiding irrelevant data, each with an original worked mini-model.",
  learningObjectives: [
    "Decode any Writing rubric and analyse its requirements before writing a word",
    "Plan, paragraph and punctuate with the accuracy and range the criteria reward",
    "Write the ten-component Task 1 method for every visual family: analyse, select, compare, organise, overview, detail",
    "Produce introductions that paraphrase and overviews that stand alone",
    "Hold the 20-minute budget and the 150-word floor under exam conditions",
  ],
  prerequisites: ["I-M1"],
  entryLevel: "B1+ (concurrent with I-M9 language chapters recommended)",
  estimatedHours: 6,
  chapters: [
    C("awriting-foundations", "Writing foundations", [
      L("ielts-awriting-instructions", "Understanding task instructions", 14, "The rubric decoded verb by verb; word limits as scoring rules", ["task analysis"], "existing"),
      L("ielts-awriting-requirements", "Analysing question requirements", 14, "Topic, instruction and scope; counting the deliverables", ["task analysis"], "existing"),
      L("ielts-awriting-planning", "Planning", 16, "The two-minute Task 1 plan; overview before detail", ["planning"], "existing"),
      L("ielts-awriting-paragraphs", "Paragraph organisation", 15, "One controlling idea; POINT–EXPLAIN–EXAMPLE; architecture per task", ["paragraph organisation"], "existing"),
      L("ielts-awriting-grammar", "Grammar accuracy", 16, "The highest-value accuracy rules; the error-log method", ["grammar accuracy"], "existing"),
      L("ielts-awriting-vocabulary", "Vocabulary", 15, "Precision over decoration; trend verbs, stance and collocation", ["vocabulary"], "existing"),
      L("ielts-awriting-cohesion", "Cohesion", 15, "Cohesive devices by function; reference chains; linker discipline", ["cohesion"], "existing"),
      L("ielts-awriting-coherence", "Coherence", 14, "The one-thread response; ordering principles; the so-what test", ["coherence"], "existing"),
      L("ielts-awriting-punctuation", "Punctuation", 13, "Sentence boundaries; the comma splice and its fixes; apostrophes", ["punctuation"], "existing"),
      L("ielts-awriting-sentence-variety", "Sentence variety", 14, "The simple/compound/complex mix the examiner can see", ["sentence variety"], "existing"),
      L("ielts-awriting-time", "Time management", 13, "20 + 40 arithmetic; budgets, checking protocols, emergencies", ["time management"], "existing"),
    ]),
    C("awriting-task1", "Every visual family", [
      L("ielts-awriting-t1-bar", "Task 1 — Bar charts", 16, "Ranking language; grouped series; the ten-component method", ["bar charts", "graph interpretation", "overviews"], "existing"),
      L("ielts-awriting-t1-line", "Task 1 — Line graphs", 16, "Direction and degree vocabulary; anchors, crossings, turning points", ["line graphs", "trends"], "existing"),
      L("ielts-awriting-t1-pie", "Task 1 — Pie charts", 15, "Proportion language; comparing two pies category by category", ["pie charts", "comparison"], "existing"),
      L("ielts-awriting-t1-table", "Task 1 — Tables", 15, "Mixed units discipline; clusters and outliers; state verbs", ["tables", "data selection"], "existing"),
      L("ielts-awriting-t1-mixed", "Task 1 — Mixed charts", 16, "Two visuals, one story; linking data across panels without double-reporting", ["mixed charts", "introductions"], "existing"),
      L("ielts-awriting-t1-process", "Task 1 — Process diagrams", 16, "The passive report; sequencing devices; linear and cyclical processes", ["process diagrams"], "existing"),
      L("ielts-awriting-t1-map", "Task 1 — Maps", 16, "The language of change; positions and directions; comparing eras", ["maps"], "existing"),
    ]),
  ],
  practiceActivities: [
    "Writing studio task library: 8 Academic Task 1 assignments (one per visual family plus a second bar chart) in timed or untimed mode",
    "Overview-sentence drills: select the valid overview, reject the decoys",
    "Level-sample study: compare the band-estimate samples against your own attempt after submission",
  ],
  assessments: [
    "Bank questions on chart language and overview validity",
    "Timed Task 1 studio submissions evaluated on all four criteria with per-criterion feedback",
  ],
  completionCriteria: [
    "All 18 lessons completed with bank questions attempted",
    "Three timed Task 1 studio submissions evaluated and reviewed",
  ],
};

// ---------------------------------------------------------------------------
// IA-M5 — Academic Writing Task 2
// ---------------------------------------------------------------------------

const IA_M5: ModulePlan = {
  code: "IA-M5",
  slug: "module-5a-writing-task-2",
  title: "Module 5 — Academic Writing Task 2",
  academy: "ielts",
  courses: ["ielts-academy-academic"],
  pathways: ["ielts-academic"],
  replaces: ["module-4a-academic-writing (Task 2 unit, absorbed by the PROMPT 46 masterclass)"],
  description:
    "The Writing Masterclass (PROMPT 46) for the band-deciding essay: one masterclass lesson per essay family — opinion, discussion, advantages and disadvantages, problem and solution, cause and effect, two-part and direct questions — each teaching the ten craft points from understanding the question to avoiding repetition, with fully planned prompts and worked mini-models. Closes with the assessment lessons: the four criteria decoded honestly, and model answers studied at different levels.",
  learningObjectives: [
    "Identify the essay family and its deliverables in ninety seconds",
    "Choose and hold a position, then build body paragraphs that prove it",
    "Write every family's skeleton: opinion, discussion, weighing, matched problem-solution, both parts, direct answers",
    "Read the four criteria and self-assess against them with band estimates honestly framed",
    "Study model answers at different levels without memorising them",
  ],
  prerequisites: ["I-M1"],
  entryLevel: "B1+ (Task 2 carries double weight — prioritise it if time is short)",
  estimatedHours: 6,
  chapters: [
    C("awriting-task2", "Every essay family", [
      L("ielts-awriting-t2-opinion", "Task 2 — Opinion essays", 17, "The thesis that survives four paragraphs; strong vs partly-agreeing", ["opinion essays", "essay planning", "thesis statements"], "existing"),
      L("ielts-awriting-t2-discussion", "Task 2 — Discussion essays", 17, "Both views fairly, your verdict up front", ["discussion essays", "coherence"], "existing"),
      L("ielts-awriting-t2-advantages", "Task 2 — Advantages and disadvantages", 16, "Weighing language and the verdict requirement", ["advantages and disadvantages", "topic sentences"], "existing"),
      L("ielts-awriting-t2-problem-solution", "Task 2 — Problem and solution", 16, "Both parts delivered; solutions matched to problems", ["problem and solution", "supporting arguments", "examples"], "existing"),
      L("ielts-awriting-t2-cause-effect", "Task 2 — Cause and effect", 16, "Root causes vs triggers; effect chains; both halves budgeted", ["cause and effect"], "existing"),
      L("ielts-awriting-t2-two-part", "Task 2 — Two-part questions", 16, "Part one in body one, part two in body two; the turn sentence", ["two-part questions", "conclusions"], "existing"),
      L("ielts-awriting-t2-direct", "Task 2 — Direct questions", 15, "Answer-as-thesis; depth over lists", ["direct questions"], "existing"),
    ]),
    C("awriting-assessment", "Assessment and model answers", [
      L("ielts-awriting-criteria", "How examiners score your writing", 15, "The four criteria and how they combine — estimates honestly framed", ["assessment criteria"], "existing"),
      L("ielts-awriting-models", "Studying model answers at different levels", 14, "Reverse-engineer, borrow scaffolding, never memorise", ["model answers"], "existing"),
    ]),
  ],
  practiceActivities: [
    "Writing studio: 7 Academic Task 2 assignments, one per essay family, timed on the 40-minute clock",
    "Thesis and paragraph-plan drills before full essays",
    "Level-sample comparison after each submission (band-estimate samples with per-criterion justifications)",
  ],
  assessments: [
    "Bank questions on essay families and structure",
    "Timed Task 2 studio submissions evaluated on all four criteria with per-criterion feedback",
  ],
  completionCriteria: [
    "All 9 lessons completed with bank questions attempted",
    "Three timed Task 2 studio submissions evaluated and reviewed",
  ],
};

// ---------------------------------------------------------------------------
// IG-M3 — General Training Reading Mastery
// ---------------------------------------------------------------------------

const IG_M3: ModulePlan = {
  code: "IG-M3",
  slug: "module-3g-gt-reading",
  title: "Module 3 — General Training Reading Mastery",
  academy: "ielts",
  courses: ["ielts-academy-general-training"],
  pathways: ["ielts-general-training"],
  replaces: ["module-3g-gt-reading"],
  description:
    "The GT Reading academy (PROMPT 45, Part C): the three sections and their 15/20/25 budget, the practical-reading craft of notices, advertisements, instructions, workplace documents and informational texts — headline bait versus small-print answers, the modal-verb method for policies, format-aware reading for leaflets and multi-text sets — and the full Academic protocol applied to Section 3's longer general-interest passages. Distinct content and bank from Academic Reading — never reused.",
  learningObjectives: [
    "Navigate the three GT sections and budget 15/20/25 minutes across them",
    "Read notices and advertisements for their exception clauses, conditions and contact rules",
    "Follow instructions by steps, gates and bans, and extract obligations from workplace documents through the modal-verb method",
    "Read informational texts by their format — headings, boxes, bullets — and harvest half-permissions whole",
    "Apply the full reading protocol to Section 3's feature passages, with attribution frames on quotes and tone read from the asides",
  ],
  prerequisites: ["I-M1"],
  entryLevel: "B1+",
  estimatedHours: 2.5,
  chapters: [
    C("gt-reading-practical", "Practical reading, section by section", [
      L("ielts-greading-test", "Understanding the GT Reading paper", 12, "Three sections; the 15/20/25 budget; what transfers from Academic", ["reading strategies"], "existing"),
      L("ielts-greading-notices", "Section 1: reading notices", 11, "Headline bait, small-print answers, conditional numbers", ["notices"], "existing"),
      L("ielts-greading-advertisements", "Section 1: reading advertisements", 11, "Offers, conditions, triggers and contact rules", ["advertisements"], "existing"),
      L("ielts-greading-instructions", "Section 2: following instructions", 11, "Steps, gates, bans — sequence discipline", ["instructions"], "existing"),
      L("ielts-greading-workplace", "Section 2: workplace documents", 12, "The modal-verb method: must, may, only, within", ["workplace documents"], "existing"),
      L("ielts-greading-informational", "Everyday informational texts", 11, "Format maps, half-permissions, multi-text spans", ["everyday texts", "general informational texts"], "existing"),
      L("ielts-greading-longer", "Section 3: longer general-interest passages", 13, "The full protocol on feature prose; quotes and asides", ["general-interest passages"], "existing"),
    ]),
  ],
  practiceActivities: [
    "GT passage library runs: notices, advertisements, guides, instructions and policies in practice or timed mode",
    "One full GT simulation on the official 60-minute clock (Sections 1–3)",
    "Reading Room general-interest bridging activity per pathway steps",
  ],
  assessments: [
    "Per-lesson bank questions with why-wrong feedback",
    "GT simulation scored item-by-item with the reading error taxonomy",
  ],
  completionCriteria: [
    "All 7 lessons completed with bank questions attempted",
    "One timed GT simulation attempted and reviewed",
  ],
};

// ---------------------------------------------------------------------------
// IG-M4 — General Training Writing Task 1 (letters)
// ---------------------------------------------------------------------------

const IG_M4: ModulePlan = {
  code: "IG-M4",
  slug: "module-4g-writing-task-1",
  title: "Module 4 — General Training Writing Task 1: The Letter",
  academy: "ielts",
  courses: ["ielts-academy-general-training"],
  pathways: ["ielts-general-training"],
  replaces: ["module-4g-gt-writing (v1, absorbed by the PROMPT 46 masterclass)"],
  description:
    "The Writing Masterclass (PROMPT 46) for the letter and its foundations: the eleven writing crafts taught through GT eyes — letters and everyday essays, register and bullets — then the complete letter course: the three registers (formal, semi-formal, informal), the six purposes (complaints, requests, invitations, apologies, explanations, suggestions) and the cross-cutting crafts of tone and organisation, every lesson built around an original model letter.",
  learningObjectives: [
    "Analyse the situation, recipient and bullets to select the correct register before writing",
    "Write formal, semi-formal and informal openings and closings without register clashes",
    "Handle all six letter purposes with the set phrases and softening each deserves",
    "Control the tone dial and keep one register from greeting to sign-off",
    "Organise the universal skeleton: purpose line, one paragraph per bullet, forward-looking close",
  ],
  prerequisites: ["I-M1"],
  entryLevel: "B1+",
  estimatedHours: 6.5,
  chapters: [
    C("gwriting-foundations", "Writing foundations", [
      L("ielts-gwriting-instructions", "Understanding task instructions", 14, "Letter rubrics and essay questions decoded; bullets as the spine", ["task analysis"], "existing"),
      L("ielts-gwriting-requirements", "Analysing question requirements", 14, "Situation, audience, purpose, bullets — before a word is written", ["task analysis"], "existing"),
      L("ielts-gwriting-planning", "Planning", 16, "The two-minute letter plan; the four-minute essay plan", ["planning"], "existing"),
      L("ielts-gwriting-paragraphs", "Paragraph organisation", 15, "Letter anatomy beside essay architecture", ["paragraph organisation"], "existing"),
      L("ielts-gwriting-grammar", "Grammar accuracy", 16, "Contractions by register; tense for past situations; the error log", ["grammar accuracy"], "existing"),
      L("ielts-gwriting-vocabulary", "Vocabulary", 15, "Register-matched vocabulary: the formal shelf and the warm-friend shelf", ["vocabulary", "register"], "existing"),
      L("ielts-gwriting-cohesion", "Cohesion", 15, "Moving between bullets gracefully; linkers by register", ["cohesion"], "existing"),
      L("ielts-gwriting-coherence", "Coherence", 14, "The one-thread letter; the reader's-questions test", ["coherence"], "existing"),
      L("ielts-gwriting-punctuation", "Punctuation", 13, "Frame commas; the splice and its fixes; apostrophes by register", ["punctuation"], "existing"),
      L("ielts-gwriting-sentence-variety", "Sentence variety", 14, "Range in a register-appropriate key; questions to a friend", ["sentence variety"], "existing"),
      L("ielts-gwriting-time", "Time management", 13, "The GT 60 minutes; bullet sweeps; under-length mathematics", ["time management"], "existing"),
    ]),
    C("gwriting-letters", "The letter course", [
      L("ielts-gwriting-formal", "Formal letters", 16, "Dear Sir or Madam; no contractions; set formal phrases", ["formal letters"], "existing"),
      L("ielts-gwriting-semi-formal", "Semi-formal letters", 15, "Known reader, polite but personal; selective contractions", ["semi-formal letters"], "existing"),
      L("ielts-gwriting-informal", "Informal letters", 15, "Dear + first name; contractions expected; warm but organised", ["informal letters"], "existing"),
      L("ielts-gwriting-complaint", "Writing complaints", 15, "Facts, impact, remedy — firm without aggression", ["complaints"], "existing"),
      L("ielts-gwriting-request", "Making requests", 15, "Context before the ask; the would/could politeness ladder", ["requests"], "existing"),
      L("ielts-gwriting-invitation", "Invitations", 14, "What-when-where early; enthusiasm by register", ["invitations"], "existing"),
      L("ielts-gwriting-apology", "Apologies", 14, "Acknowledge, explain without excusing, offer repair", ["apologies"], "existing"),
      L("ielts-gwriting-explanation", "Explanations", 14, "The reader's three questions as paragraph logic", ["explanations"], "existing"),
      L("ielts-gwriting-suggestion", "Suggestions", 14, "Acknowledge, propose specifically, anticipate objections", ["suggestions"], "existing"),
      L("ielts-gwriting-tone", "Tone", 15, "The tone dial; consistency; spotting and fixing register breaks", ["tone"], "existing"),
      L("ielts-gwriting-letter-organisation", "Letter organisation", 15, "The universal skeleton; paragraph-per-bullet; length control", ["letter organisation"], "existing"),
    ]),
  ],
  practiceActivities: [
    "Writing studio: 6 GT letter assignments covering all six purposes and all three registers, timed or untimed",
    "Tone-choice drills and register diagnostics from the lessons",
    "Level-sample study after submission (band-estimate samples with per-criterion justifications)",
  ],
  assessments: [
    "Bank questions on register decisions and purpose language",
    "Timed letters evaluated on all four criteria — task achievement in the GT letter sense (purpose, tone, bullets)",
  ],
  completionCriteria: [
    "All 22 lessons completed with bank questions attempted",
    "Three timed letters submitted, evaluated and reviewed",
  ],
};

// ---------------------------------------------------------------------------
// IG-M5 — General Training Writing Task 2
// ---------------------------------------------------------------------------

const IG_M5: ModulePlan = {
  code: "IG-M5",
  slug: "module-5g-writing-task-2",
  title: "Module 5 — General Training Writing Task 2: The Everyday Essay",
  academy: "ielts",
  courses: ["ielts-academy-general-training"],
  pathways: ["ielts-general-training"],
  replaces: ["module-4g-gt-writing (Task 2 lesson, absorbed by the PROMPT 46 masterclass)"],
  description:
    "The Writing Masterclass (PROMPT 46) for the GT essay: the seven essay families — opinion, discussion, advantages and disadvantages, problem and solution, cause and effect, two-part and direct questions — on everyday topics in a semi-formal register, each teaching the ten craft points with worked mini-models, closing with the assessment lesson that decodes the criteria including the GT letter's task-achievement criterion. Authored fresh for this track, never reused Academic lessons.",
  learningObjectives: [
    "Plan a GT essay in four minutes around a clear position on an everyday topic",
    "Write all seven essay families with GT topics and semi-formal register",
    "Support arguments with everyday, concrete examples rather than academic citations",
    "Read the four criteria — task achievement for the letter, task response for the essay — as honest estimates",
    "Hold the 40-minute budget and 250-word floor with GT-specific timed practice",
  ],
  prerequisites: ["I-M1"],
  entryLevel: "B1+",
  estimatedHours: 4.5,
  chapters: [
    C("gwriting-task2", "The everyday essay", [
      L("ielts-gwriting-t2-opinion", "GT Task 2 — Opinion essays", 16, "Stated position; reasons from daily life", ["opinion essays", "GT essay craft"], "existing"),
      L("ielts-gwriting-t2-discussion", "GT Task 2 — Discussion essays", 16, "Two-view fairness; the verdict up front", ["discussion essays"], "existing"),
      L("ielts-gwriting-t2-advantages", "GT Task 2 — Advantages and disadvantages", 15, "Weighing everyday arrangements; the verdict requirement", ["advantages and disadvantages"], "existing"),
      L("ielts-gwriting-t2-problem-solution", "GT Task 2 — Problem and solution", 15, "Everyday problems; matched fixes with feasibility notes", ["problem and solution"], "existing"),
      L("ielts-gwriting-t2-cause-effect", "GT Task 2 — Cause and effect", 15, "Everyday causes; effect chains; both halves", ["cause and effect"], "existing"),
      L("ielts-gwriting-t2-two-part", "GT Task 2 — Two-part questions", 15, "Part one in body one; the turn sentence; word-budget symmetry", ["two-part questions"], "existing"),
      L("ielts-gwriting-t2-direct", "GT Task 2 — Direct questions", 14, "Answer-as-thesis; depth over lists", ["direct questions"], "existing"),
    ]),
    C("gwriting-assessment", "Assessment", [
      L("ielts-gwriting-criteria", "How examiners score your letter and essay", 15, "The four criteria with the GT task-achievement specifics — honestly framed", ["assessment criteria"], "existing"),
    ]),
  ],
  practiceActivities: [
    "Writing studio: 4 GT everyday-essay assignments timed on the 40-minute clock",
    "Register diagnostics: keeping contractions out of the essay but alive in the right letters",
    "Level-sample comparison after each submission",
  ],
  assessments: [
    "Bank questions on GT essay structure and register (GT bank)",
    "Timed GT essays evaluated on all four criteria with per-criterion feedback",
  ],
  completionCriteria: [
    "All 8 lessons completed with bank questions attempted",
    "Two timed GT essays submitted, evaluated and reviewed",
  ],
};

export const IELTS_TRACK_MODULES: ModulePlan[] = [IA_M3, IA_M4, IA_M5, IG_M3, IG_M4, IG_M5];
