/**
 * TOEFL iBT Academy blueprint — the complete seven-module programme for the
 * format in force since 21 January 2026 (PROMPT 42 PART B).
 *
 * Foundation facts (verified against ets.org, retrieved 2026-11-12/14 — see
 * the active TOEFL_IBT/STANDARD specification in scripts/seed-exams.ts):
 *   Reading    50 items, ~30 min, two-stage adaptive — Complete the Words,
 *              Read in Daily Life, Read an Academic Passage.
 *   Listening  47 items, ~29 min, two-stage adaptive, forward-only — Listen
 *              and Choose a Response, Listen to a Conversation, Listen to an
 *              Announcement, Listen to an Academic Talk.
 *   Speaking   11 items, ~8 min — Listen and Repeat (7 sentences, 8/10/12s
 *              windows) + Take an Interview (4 items).
 *   Writing    12 items, ~23 min — Build a Sentence (10), Write an Email,
 *              Write for an Academic Discussion.
 *   ~90 minutes of timed sections; allow ~2 hours overall. Scoring: four
 *   section bands 1.0–6.0 in half steps; overall = average of the four,
 *   rounded to the nearest half band (ETS example: 5.125 → 5.0); CEFR level
 *   printed on the report; comparable 0–120 score dual-reported during the
 *   2026–2028 transition. No pass mark — institutions set minimums.
 *
 * All 46 lessons are now authored and delivered at the v3 textbook
 * standard (T-M1 in batch 3; T-M2–T-M7 in batch 8, PROMPT 48 — the
 * complete TOEFL iBT 2026 Masterclass). The v1 academy had zero TOEFL
 * lessons (TOEFL_CONTENT_AUDIT.md §3.4); this module set superseded the
 * six-module sketch in CONTENT_REPLACEMENT_PLAN.md S1.
 */

import { C, L, type ModulePlan, type PathwayPlan, type TopicRequirement } from "./types";

// ---------------------------------------------------------------------------
// T-M1 — TOEFL Fundamentals
// ---------------------------------------------------------------------------

const T_M1: ModulePlan = {
  code: "T-M1",
  slug: "toefl-module-1-fundamentals",
  title: "Module 1 — TOEFL Fundamentals",
  academy: "toefl",
  courses: ["toefl-ibt-academy"],
  pathways: ["toefl-ibt"],
  replaces: [],
  description:
    "Orientation for the 2026 TOEFL iBT: what the test is and who accepts it, the current four-section format with its new task types, how the 1–6 band scale and adaptive delivery actually work, what a score report contains, and how to manage preparation time, section clocks and test day (test centre or Home Edition).",
  learningObjectives: [
    "Describe the 2026 TOEFL iBT section by section: item counts, timings, task types and the ~2-hour total",
    "Explain two-stage adaptive Reading and Listening and what adaptivity means for strategy",
    "Read a TOEFL score report: 1–6 section bands, overall = mean rounded to the nearest half band, CEFR level and the transition-period 0–120 comparison",
    "Plan preparation with the diagnose → language → technique → mock-cycle method and a dated study plan",
    "Budget section clocks (~30/~29/~8/~23 minutes) and prepare test-day logistics for both delivery options",
  ],
  prerequisites: ["none"],
  entryLevel: "B1 recommended (A2/B1 learners bridge through the core English programme first)",
  estimatedHours: 3.5,
  chapters: [
    C("toefl-orientation", "The test and the 2026 format", [
      L("toefl-what-and-why", "What is TOEFL iBT and who needs it?", 12, "Purpose, who accepts it, how it differs from IELTS at a glance", ["test overview"], "existing"),
      L("toefl-format-2026", "The 2026 format, section by section", 15, "Reading 50 items, Listening 47, Speaking 11, Writing 12; the new task types; ~2 hours end to end; test centre or Home Edition", ["current examination format"], "existing"),
      L("toefl-adaptive-testing", "Adaptive testing: how the test adjusts to you", 12, "Two-stage adaptive Reading and Listening; routing module then lower- or upper-difficulty module; why question counts and time can vary", ["adaptive testing introduction"], "existing"),
    ]),
    C("toefl-scores", "The 1–6 band scale and your score report", [
      L("toefl-band-scale", "The 1–6 band scale", 14, "Half-point steps; overall = average of four section bands rounded to the nearest half band (5.125 → 5.0); CEFR printed on the report; no pass mark", ["score reporting"], "existing"),
      L("toefl-score-reports", "Score reports, MyBest and the 0–120 transition", 12, "Section bands + overall + CEFR; MyBest superscoring across valid tests; dual reporting of a comparable 0–120 score during 2026–2028; scores within ~72 hours; two-year validity", ["score reporting"], "existing"),
    ]),
    C("toefl-strategy", "Strategy, time and test day", [
      L("toefl-preparation-strategy", "Preparation strategy: how this Academy works", 14, "The diagnose → language → technique → mock-cycle method applied to the 2026 format", ["test overview"], "existing"),
      L("toefl-time-management", "Time management across the sections", 12, "Section budgets (~30/~29/~8/~23 minutes), per-item pacing, and the sweep habit for adaptive sections", ["time management"], "existing"),
      L("toefl-test-day", "Test-day preparation", 12, "Test centre vs Home Edition; check-in and ID; rules; what to do when the clock is running", ["test-day preparation"], "existing"),
    ]),
  ],
  practiceActivities: [
    "Baseline diagnostic: one untimed TOEFL sample mock (2026 format) to anchor the study plan",
    "Band-scale worksheet: computing overall bands with the rounding rule on sample section scores",
    "Bank questions on format, scoring and delivery (auto-graded)",
  ],
  assessments: [
    "Bank questions per lesson with full feedback payloads",
    "Baseline mock attempt recorded and reviewed",
  ],
  completionCriteria: [
    "All 8 lessons completed with bank questions attempted",
    "Baseline diagnostic attempt recorded",
    "Target band, test date and daily minutes set in the study planner",
  ],
};

// ---------------------------------------------------------------------------
// T-M2 — Reading
// ---------------------------------------------------------------------------

const T_M2: ModulePlan = {
  code: "T-M2",
  slug: "toefl-module-2-reading",
  title: "Module 2 — Reading",
  academy: "toefl",
  courses: ["toefl-ibt-academy"],
  pathways: ["toefl-ibt"],
  replaces: [],
  description:
    "The 2026 Reading section: up to 50 adaptive items in ~30 minutes across the three official task types. Learners master Complete-the-Words technique (context plus morphology to restore masked letters), everyday-text reading (Read in Daily Life), academic-passage comprehension (Read an Academic Passage), and the vocabulary, main-idea, detail and inference skills underneath all three.",
  learningObjectives: [
    "Describe the Reading section's structure, item mix (30 Complete-the-Words + 20 comprehension) and two-stage adaptive flow",
    "Restore masked words using context, collocation and morphology at section pace",
    "Extract information fast from everyday texts (schedules, notices, messages) and academic passages alike",
    "Determine vocabulary meaning in context, including word forms and academic word families",
    "Identify main ideas and supporting details and make defensible inferences in academic prose",
  ],
  prerequisites: ["T-M1"],
  entryLevel: "B1",
  estimatedHours: 3.5,
  chapters: [
    C("toefl-reading-overview", "The section", [
      L("toefl-reading-overview", "Understanding the Reading section", 12, "50 items, ~30 minutes, two-stage adaptive; 30 Complete-the-Words + 20 comprehension; pacing both modules", ["reading section structure"], "existing"),
    ]),
    C("toefl-reading-tasks", "The three task types", [
      L("toefl-reading-complete-words", "Complete the Words", 15, "Restoring c___ / hipp___ style masks with context, collocation and morphology; when to guess and move on", ["Complete the Words"], "existing"),
      L("toefl-reading-daily-life", "Read in Daily Life", 14, "Everyday and campus texts: schedules, notices, messages; quick comprehension with selective attention", ["Read in Daily Life"], "existing"),
      L("toefl-reading-academic-passage", "Read an Academic Passage", 15, "Academic text structure; single-answer and select-two comprehension items; eliminating near-miss options", ["Read an Academic Passage"], "existing"),
    ]),
    C("toefl-reading-skills", "Reading skills", [
      L("toefl-reading-vocabulary", "Vocabulary in context and word forms", 14, "Meaning from context; word families and affixation; the forms an academic word takes across a text", ["vocabulary in context", "word forms"], "existing"),
      L("toefl-reading-ideas-details", "Main ideas and supporting details", 14, "Thesis and topic sentences in academic prose; how details serve claims; text comprehension at pace", ["main ideas", "supporting details", "text comprehension"], "existing"),
      L("toefl-reading-inference", "Inference", 14, "What the author implies but does not state; testing an inference against the passage; resisting outside knowledge", ["inference"], "existing"),
      L("toefl-reading-academic-vocabulary", "Academic vocabulary", 12, "The academic word stock that recurs across TOEFL passages; building it from the common curriculum's Word World sets", ["academic vocabulary"], "existing"),
    ]),
  ],
  practiceActivities: [
    "Complete-the-Words drills from the drill pool at increasing speed",
    "Everyday-text and academic-passage question sets (TOEFL bank)",
    "Word World academic word-set bridging per pathway steps",
    "Reading section mock at official timing and item counts",
  ],
  assessments: [
    "Bank questions per lesson with why-wrong feedback",
    "Timed Reading section mock: raw score converted to an indicative 1–6 band (practice conversion, honestly labelled)",
  ],
  completionCriteria: [
    "All 8 lessons completed with bank questions attempted",
    "One timed Reading section mock attempted and reviewed",
  ],
};

// ---------------------------------------------------------------------------
// T-M3 — Listening
// ---------------------------------------------------------------------------

const T_M3: ModulePlan = {
  code: "T-M3",
  slug: "toefl-module-3-listening",
  title: "Module 3 — Listening",
  academy: "toefl",
  courses: ["toefl-ibt-academy"],
  pathways: ["toefl-ibt"],
  replaces: [],
  description:
    "The 2026 Listening section: up to 47 forward-only adaptive items in ~29 minutes across four task types. Learners practise predicting responses before hearing options, following conversations and announcements, and taking usable notes on academic talks — while tuning into the natural spoken English (reductions, discourse markers) the recordings actually use.",
  learningObjectives: [
    "Describe the Listening section's structure, forward-only rule and adaptive flow",
    "Choose the pragmatic response to everyday exchanges (Listen and Choose a Response)",
    "Follow two-party conversations and public announcements for purpose, detail and change",
    "Listen to academic talks for main ideas, supporting details and speaker intent, with a working note system",
    "Cope with natural speech: reductions, hesitations and discourse markers under exam timing",
  ],
  prerequisites: ["T-M1"],
  entryLevel: "B1",
  estimatedHours: 4,
  chapters: [
    C("toefl-listening-overview", "The section", [
      L("toefl-listening-overview", "Understanding the Listening section", 12, "47 items, ~29 minutes, forward-only, two-stage adaptive; why prediction replaces replay", ["listening section structure"], "existing"),
    ]),
    C("toefl-listening-tasks", "The four task types", [
      L("toefl-listening-choose-response", "Listen and Choose a Response", 14, "Predicting the pragmatic reply; register and appropriateness over literal matching", ["Listen and Choose a Response"], "existing"),
      L("toefl-listening-conversation", "Listen to a Conversation", 14, "Two-party campus and service conversations: purpose, negotiation, corrections and outcomes", ["Listen to a Conversation"], "existing"),
      L("toefl-listening-announcement", "Listen to an Announcement", 12, "Public announcements and instructions: key facts, changes and who-should-do-what", ["Listen to an Announcement"], "existing"),
      L("toefl-listening-academic-talk", "Listen to an Academic Talk", 15, "Lecture-style talks: structure signposts, examples, attitude and concluding claims", ["Listen to an Academic Talk"], "existing"),
    ]),
    C("toefl-listening-skills", "Listening skills", [
      L("toefl-listening-intent", "Speaker intent and stance", 14, "Why something is said: suggesting, conceding, objecting, hedging; tone cues", ["speaker intent"], "existing"),
      L("toefl-listening-ideas-details", "Main ideas and supporting details", 14, "Tracking the spine of a talk while catching the numbers, names and examples that questions target", ["main ideas", "supporting details"], "existing"),
      L("toefl-listening-inference", "Inference", 14, "What follows from what was said; the boundary between implication and assumption", ["inference"], "existing"),
      L("toefl-listening-note-taking", "Note-taking", 14, "A two-column note system that survives forward-only delivery; abbreviations; notes that answer questions", ["note-taking"], "existing"),
      L("toefl-listening-natural-speech", "Natural spoken English", 12, "Reductions, contractions, hesitations and discourse markers in fast connected speech", ["natural spoken English"], "existing"),
    ]),
  ],
  practiceActivities: [
    "Response-prediction drills from the drill pool",
    "Conversation and announcement question sets (TOEFL bank)",
    "Listening Lab bridging activities per pathway steps",
    "Listening section mock at official timing",
  ],
  assessments: [
    "Bank questions per lesson with why-wrong feedback",
    "Timed Listening section mock: raw score converted to an indicative 1–6 band (practice conversion, honestly labelled)",
  ],
  completionCriteria: [
    "All 10 lessons completed with bank questions attempted",
    "One timed Listening section mock attempted and reviewed",
  ],
};

// ---------------------------------------------------------------------------
// T-M4 — Writing
// ---------------------------------------------------------------------------

const T_M4: ModulePlan = {
  code: "T-M4",
  slug: "toefl-module-4-writing",
  title: "Module 4 — Writing",
  academy: "toefl",
  courses: ["toefl-ibt-academy"],
  pathways: ["toefl-ibt"],
  replaces: [],
  description:
    "The 2026 Writing section: 12 items in ~23 minutes. Learners rebuild scrambled sentences correctly and fast (Build a Sentence), write a fit-for-purpose email in the right tone (Write an Email), and add a substantive post to an academic discussion (Write for an Academic Discussion) — with the grammar, syntax and academic vocabulary the scoring guides reward.",
  learningObjectives: [
    "Describe the Writing section's structure: 10 Build-a-Sentence items plus one email and one discussion task in ~23 minutes",
    "Rebuild sentences from scrambled parts at speed with correct order, agreement and cohesion",
    "Write structured emails with appropriate tone for everyday and campus situations",
    "Contribute to an academic discussion: state a position, react to classmates, support with reasons",
    "Control grammar, syntax and academic vocabulary under the section clock",
  ],
  prerequisites: ["T-M1"],
  entryLevel: "B1",
  estimatedHours: 3,
  chapters: [
    C("toefl-writing-overview", "The section", [
      L("toefl-writing-overview", "Understanding the Writing section", 12, "12 items, ~23 minutes; 10 reconstruction items plus an email and an academic discussion; rated against scoring guides", ["writing section structure"], "existing"),
    ]),
    C("toefl-build-sentence", "Build a Sentence", [
      L("toefl-writing-build-sentence", "Build a Sentence: order and speed", 15, "Sentence order from scrambled parts; 10 items in roughly 10 minutes; checking without re-reading everything", ["Build a Sentence", "sentence order"], "existing"),
      L("toefl-writing-syntax", "Grammar and syntax for reconstruction", 14, "Agreement, tense consistency, modifiers and connectors as ordering clues; the error types that break rebuilt sentences", ["grammar and syntax"], "existing"),
    ]),
    C("toefl-email", "Write an Email", [
      L("toefl-writing-email", "Write an Email: structure and tone", 14, "Greeting, purpose, request, close; matching tone to recipient and situation; everyday and campus scenarios", ["Write an Email", "email structure", "appropriate tone"], "existing"),
    ]),
    C("toefl-discussion", "Write for an Academic Discussion", [
      L("toefl-writing-discussion", "Write for an Academic Discussion", 15, "State a position, react to classmates' posts, support with reasons; the discussion-post register", ["Write for an Academic Discussion", "expressing opinions", "supporting arguments"], "existing"),
      L("toefl-writing-language", "Academic vocabulary for the written tasks", 12, "Precise verbs, stance language and connectors for email and discussion writing", ["academic vocabulary"], "existing"),
    ]),
  ],
  practiceActivities: [
    "Sentence-reconstruction drills at increasing speed (10-item sets)",
    "Timed email assignments from the TOEFL bank",
    "AI Tutor academic-discussion exchanges with evaluation against the writing rubric",
  ],
  assessments: [
    "Bank questions per lesson with why-wrong feedback",
    "One timed Writing section mock: reconstruction accuracy plus rubric-evaluated email and discussion",
  ],
  completionCriteria: [
    "All 6 lessons completed with bank questions attempted",
    "One timed Writing section mock attempted and reviewed",
  ],
};

// ---------------------------------------------------------------------------
// T-M5 — Speaking
// ---------------------------------------------------------------------------

const T_M5: ModulePlan = {
  code: "T-M5",
  slug: "toefl-module-5-speaking",
  title: "Module 5 — Speaking",
  academy: "toefl",
  courses: ["toefl-ibt-academy"],
  pathways: ["toefl-ibt"],
  replaces: [],
  description:
    "The 2026 Speaking section: 11 items in ~8 minutes — seven Listen-and-Repeat sentences inside 8/10/12-second windows, then a four-question interview. Learners train listening accuracy and speech reproduction, pronunciation and intelligibility (accent-safe), and the short-complete-fluent interview answer with relevant vocabulary.",
  learningObjectives: [
    "Describe the Speaking section's structure: 7 Listen-and-Repeat items with their recording windows plus 4 interview items",
    "Repeat heard sentences accurately — full meaning, key words in place — inside the window",
    "Produce intelligible speech: stress, rhythm and clarity without abandoning your accent",
    "Answer interview questions with short, complete, fluent responses that stay on topic",
    "Deploy relevant vocabulary and stable grammar in spontaneous spoken answers",
  ],
  prerequisites: ["T-M1"],
  entryLevel: "B1",
  estimatedHours: 2.5,
  chapters: [
    C("toefl-speaking-overview", "The section", [
      L("toefl-speaking-overview", "Understanding the Speaking section", 12, "11 items, ~8 minutes; 7 Listen-and-Repeat (8/10/12-second windows) + 4 interview items; rated against scoring guides", ["speaking section structure"], "existing"),
    ]),
    C("toefl-listen-repeat", "Listen and Repeat", [
      L("toefl-speaking-listen-repeat", "Listen and Repeat: accuracy in the window", 15, "Listening accuracy; chunking sentences; reproducing them fully inside 8/10/12 seconds", ["Listen and Repeat", "listening accuracy", "speech reproduction"], "existing"),
      L("toefl-speaking-pronunciation", "Pronunciation and intelligibility", 14, "Stress, rhythm and word-level clarity that stay intelligible without forcing a native accent", ["pronunciation", "intelligibility"], "existing"),
    ]),
    C("toefl-interview", "Take an Interview", [
      L("toefl-speaking-interview", "Take an Interview: short, complete, fluent", 15, "Answer development under the clock; one idea per answer; bridging instead of silence", ["Take an Interview", "answer development", "fluency"], "existing"),
      L("toefl-speaking-interview-language", "Grammar and vocabulary in interview answers", 12, "Stable tense control and topic-relevant vocabulary in spontaneous speech", ["grammar", "relevant vocabulary"], "existing"),
    ]),
  ],
  practiceActivities: [
    "Listen-and-Repeat drills with the official 8/10/12-second windows",
    "AI Tutor interview simulations with rotating question families",
    "Recording and self-review against the speaking rubric (Delivery / Language use / Topic development)",
  ],
  assessments: [
    "Bank questions per lesson with why-wrong feedback",
    "One timed Speaking section mock evaluated with the speaking rubric",
  ],
  completionCriteria: [
    "All 5 lessons completed with bank questions attempted",
    "One timed Speaking section mock attempted and reviewed",
  ],
};

// ---------------------------------------------------------------------------
// T-M6 — Grammar and Vocabulary
// ---------------------------------------------------------------------------

const T_M6: ModulePlan = {
  code: "T-M6",
  slug: "toefl-module-6-language",
  title: "Module 6 — TOEFL Grammar and Vocabulary",
  academy: "toefl",
  courses: ["toefl-ibt-academy"],
  pathways: ["toefl-ibt"],
  replaces: [],
  description:
    "The language engine behind every TOEFL section. Learners build academic word families, the sentence structure that Build a Sentence tests directly, grammar accuracy with a falling error rate, the collocations and paraphrasing that reading and listening items assume, and the natural academic register the scoring guides describe.",
  learningObjectives: [
    "Grow academic word families and recognise their forms across sections",
    "Build and repair English sentence structure (the exact skill Build a Sentence grades)",
    "Cut recurring grammar errors with an error-budget habit",
    "Use high-frequency academic collocations and paraphrase faithfully",
    "Communicate in natural academic English rather than translated or memorised phrasing",
  ],
  prerequisites: ["T-M1"],
  entryLevel: "B1 (concurrent with the section modules)",
  estimatedHours: 2.5,
  chapters: [
    C("toefl-language-words", "Academic words", [
      L("toefl-language-word-families", "Academic word families", 14, "The stock that recurs in TOEFL passages and prompts; one family, many forms", ["academic word families"], "existing"),
      L("toefl-language-collocations", "Collocations", 12, "Verb+noun and adjective+noun partnerships that reading items test and writing tasks reward", ["collocations"], "existing"),
    ]),
    C("toefl-language-sentences", "Sentence craft", [
      L("toefl-language-sentence-structure", "Sentence structure", 14, "Clause combination, modification and parallelism — building and rebuilding sentences deliberately", ["sentence structure"], "existing"),
      L("toefl-language-grammar-accuracy", "Grammar accuracy", 14, "The error budget: counting and cutting errors per task; the self-correction habit", ["grammar accuracy"], "existing"),
    ]),
    C("toefl-language-expression", "Expression", [
      L("toefl-language-paraphrasing", "Paraphrasing", 12, "Restating academic sentences without distortion — the skill behind reading, listening and writing items alike", ["paraphrasing"], "existing"),
      L("toefl-language-academic-communication", "Natural academic communication", 12, "Register, stance and conversational academic English for the discussion and interview tasks", ["natural academic communication"], "existing"),
    ]),
  ],
  practiceActivities: [
    "Word World academic word sets bridged per pathway steps",
    "Grammar Clinic error-correction sessions on the learner's own recorded mistakes",
    "Sentence building and rebuilding in the Sentence Lab bridging activity",
  ],
  assessments: [
    "Bank questions across all language lessons",
    "Error-budget review across the learner's recent mock and assignment errors",
  ],
  completionCriteria: [
    "All 6 lessons completed with bank questions attempted",
    "Personal error log reviewed at least once with the AI Tutor",
  ],
};

// ---------------------------------------------------------------------------
// T-M7 — Full TOEFL Practice
// ---------------------------------------------------------------------------

const T_M7: ModulePlan = {
  code: "T-M7",
  slug: "toefl-module-7-practice",
  title: "Module 7 — Full TOEFL Practice",
  academy: "toefl",
  courses: ["toefl-ibt-academy"],
  pathways: ["toefl-ibt"],
  replaces: [],
  description:
    "The practice system that turns study into a score: task-based exercises per item type, section tests at official timing, adaptive practice simulations that mirror the two-stage design, full mock tests end to end, and the performance reports that convert every attempt into next week's plan.",
  learningObjectives: [
    "Operate the mock library: task drills, section tests, adaptive simulations and full mocks",
    "Sit a full four-section mock (~2 hours) under exam conditions and hold section budgets",
    "Read a performance report: section bands, overall with the rounding rule, error patterns by item type",
    "Convert any report into a dated revision plan targeting the weakest item types",
  ],
  prerequisites: ["section-modules"],
  entryLevel: "B1 (after the four section modules)",
  estimatedHours: 2,
  chapters: [
    C("toefl-practice-system", "The practice system", [
      L("toefl-practice-mocks-guide", "The mock system: modes, kinds and cadence", 12, "Timed vs untimed; task drills → section tests → adaptive simulations → full mocks; the accelerating cadence to test day", ["task-based exercises", "section tests", "full mock tests"], "existing"),
    ]),
    C("toefl-adaptive-practice", "Adaptive practice", [
      L("toefl-practice-adaptive", "Practising with adaptive simulations", 12, "How two-stage adaptive practice mirrors the real test; treating the routing module seriously; pacing when items get harder", ["adaptive practice simulations"], "existing"),
    ]),
    C("toefl-performance", "Performance reports", [
      L("toefl-practice-analysis", "Reading your performance report", 14, "Section bands and the rounding rule on your own numbers; error taxonomy by item type; building the next-week plan; when a mock indicates readiness", ["performance reports"], "existing"),
    ]),
  ],
  practiceActivities: [
    "Task-based exercise sets per item type from the TOEFL bank",
    "Section tests for every section at official timing and item counts",
    "Adaptive practice simulations (routing → difficulty module)",
    "Full mock cycle: untimed baseline → timed sittings under exam conditions",
    "AI Tutor review sessions turning reports into next-week plans",
  ],
  assessments: [
    "At least two timed full mocks (four sections, ~2 hours each) with per-item explanations",
    "Post-mock review completed for every sitting",
  ],
  completionCriteria: [
    "All 3 lessons completed with bank questions attempted",
    "At least two timed full-mock attempts with reviews recorded",
    "A final revision plan dated to the test date",
  ],
};

export const TOEFL_MODULES: ModulePlan[] = [T_M1, T_M2, T_M3, T_M4, T_M5, T_M6, T_M7];

// ---------------------------------------------------------------------------
// Prompt-mandated topic coverage (PROMPT 42 PART B) — validated by
// scripts/validate-exam-blueprint.ts.
// ---------------------------------------------------------------------------

export const TOEFL_TOPIC_REQUIREMENTS: TopicRequirement[] = [
  {
    moduleCode: "T-M1",
    source: "PROMPT 42 — TOEFL Fundamentals",
    topics: ["test overview", "current examination format", "score reporting", "adaptive testing introduction", "test-day preparation", "time management"],
  },
  {
    moduleCode: "T-M2",
    source: "PROMPT 42 — Reading",
    topics: [
      "Complete the Words",
      "Read in Daily Life",
      "Read an Academic Passage",
      "vocabulary in context",
      "word forms",
      "text comprehension",
      "main ideas",
      "supporting details",
      "inference",
      "academic vocabulary",
    ],
  },
  {
    moduleCode: "T-M3",
    source: "PROMPT 42 — Listening",
    topics: [
      "Listen and Choose a Response",
      "Listen to a Conversation",
      "Listen to an Announcement",
      "Listen to an Academic Talk",
      "speaker intent",
      "main ideas",
      "supporting details",
      "inference",
      "note-taking",
      "natural spoken English",
    ],
  },
  {
    moduleCode: "T-M4",
    source: "PROMPT 42 — Writing",
    topics: [
      "Build a Sentence",
      "sentence order",
      "grammar and syntax",
      "Write an Email",
      "email structure",
      "appropriate tone",
      "Write for an Academic Discussion",
      "expressing opinions",
      "supporting arguments",
      "academic vocabulary",
    ],
  },
  {
    moduleCode: "T-M5",
    source: "PROMPT 42 — Speaking",
    topics: [
      "Listen and Repeat",
      "listening accuracy",
      "speech reproduction",
      "pronunciation",
      "intelligibility",
      "Take an Interview",
      "answer development",
      "fluency",
      "grammar",
      "relevant vocabulary",
    ],
  },
  {
    moduleCode: "T-M6",
    source: "PROMPT 42 — TOEFL Grammar and Vocabulary",
    topics: ["academic word families", "sentence structure", "grammar accuracy", "collocations", "paraphrasing", "natural academic communication"],
  },
  {
    moduleCode: "T-M7",
    source: "PROMPT 42 — Full TOEFL Practice",
    topics: ["task-based exercises", "section tests", "adaptive practice simulations", "full mock tests", "performance reports"],
  },
];

// ---------------------------------------------------------------------------
// Course and pathway configuration
// ---------------------------------------------------------------------------

/** The new TOEFL course + CMS level (mirrors IELTS_LEVEL / CourseSpec shapes). */
export const TOEFL_COURSE_PLAN = {
  course: {
    slug: "toefl-ibt-academy",
    title: "TOEFL iBT Academy — 2026 Format Programme",
    description:
      "The complete TOEFL iBT preparation programme for the format in force since 21 January 2026: fundamentals, Reading, Listening, Writing, Speaking, grammar and vocabulary, and full examination practice. Aimed at B1+ learners; A2/B1 learners bridge through the core English programme first.",
  },
  level: {
    slug: "toefl-preparation",
    name: "TOEFL iBT Preparation",
    description:
      "The TOEFL iBT Academy: seven modules covering the 2026 format end to end, from the adaptive Reading and Listening sections to the Listen-and-Repeat/Interview speaking design and the Build-a-Sentence/Email/Academic-Discussion writing design.",
    order: 3,
  },
} as const;

export const TOEFL_PATHWAY: PathwayPlan = {
  key: "toefl-ibt",
  title: "TOEFL iBT Preparation Pathway (2026 format)",
  summary:
    "Seven modules in the PROMPT 42 structure: Fundamentals, Reading, Listening, Writing, Speaking, Grammar and Vocabulary, and Full TOEFL Practice — all built around the format effective 21 January 2026, with bridging steps into the common English curriculum and a mock cycle on the TOEFL bank.",
  modules: ["T-M1", "T-M2", "T-M3", "T-M4", "T-M5", "T-M6", "T-M7"],
  configuration: [
    "Course: toefl-ibt-academy (all seven modules) under the new toefl-preparation CMS level",
    "Specification: TOEFL_IBT/STANDARD active version (currently v1, effective 2026-01-21, format-verified against ets.org)",
    "Question and mock banks: TOEFL only — never mixed with IELTS pools (integrity rule)",
    "Rubrics: toefl.writing (Development / Organization / Language use) and toefl.speaking (Delivery / Language use / Topic development), 6→1 ladders",
    "Practice conversions for indicative 1–6 bands are labelled as EnglishPath practice estimates (ETS publishes no raw-to-band table)",
    "Score targets: TOEFL_SCORE_TARGETS in score-pathways.ts (Bands 3.0 → 6.0 with the ETS 0–120 concordance)",
  ],
};
