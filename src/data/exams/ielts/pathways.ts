/**
 * IELTS preparation pathways.
 *
 * The pathway is the learner's route through the eight modules: Phase 1
 * (orientation + diagnosis), Phase 2 (Listening & Speaking — identical
 * test for both variants), Phase 3 (Reading & Writing — variant-specific
 * track), Phase 4 (band ladder, strategies and the mock cycle).
 *
 * Every step is a REFERENCE: IELTS Academy lessons (refType "curriculum"
 * → #/course-lesson/<slug>), common-curriculum content in Divisions A/B,
 * or academy-owned drills and mocks. Nothing is duplicated.
 */

export type PathwayStepSeed = {
  label: string;
  refType: string;
  refId?: string;
  examSection?: string;
  focus?: string;
  minutes?: number;
};

export type PathwayModuleSeed = { title: string; goal: string; steps: PathwayStepSeed[] };

// ---------------------------------------------------------------------------
// Shared: Phase 1 (orientation) and Phase 4 (ladder + strategies + mocks)
// ---------------------------------------------------------------------------

const phaseOne: PathwayModuleSeed = {
  title: "Phase 1 — Know the test, set the target",
  goal: "Module 1 in full: which IELTS you need, how it is scored, how it is delivered — then a baseline diagnostic and a realistic target.",
  steps: [
    { label: "Lesson: What is IELTS and who needs it?", refType: "curriculum", refId: "ielts-what-and-why", focus: "Purpose, variants at a glance, the four skills", minutes: 12 },
    { label: "Lesson: Academic or General Training?", refType: "curriculum", refId: "ielts-academic-vs-gt", focus: "Choosing your variant from the receiving organisation's rule", minutes: 12 },
    { label: "Lesson: IELTS for UKVI and Life Skills", refType: "curriculum", refId: "ielts-ukvi-explained", focus: "SELT rules, Life Skills A1/A2/B1, per-component minimums", minutes: 14 },
    { label: "Lesson: The examination format, section by section", refType: "curriculum", refId: "ielts-four-skills-format", focus: "Current computer-delivered format, Writing on Paper, timings", minutes: 15 },
    { label: "Lesson: The band scoring system", refType: "curriculum", refId: "ielts-band-scoring", focus: "Raw→band, the .25/.75 rounding rule, reading a TRF", minutes: 14 },
    { label: "Diagnostic: sit your first full mock untimed", refType: "drill", focus: "Baseline — this number sets your study plan", minutes: 60 },
    { label: "Lesson: Understanding target scores", refType: "curriculum", refId: "ielts-target-scores", focus: "Requirement → safety-margin target → weakest skill first", minutes: 12 },
    { label: "Lesson: Examination registration awareness", refType: "curriculum", refId: "ielts-registration-awareness", focus: "Booking, ID, results timeline, One Skill Retake", minutes: 12 },
    { label: "Lesson: Preparation strategy — how this Academy works", refType: "curriculum", refId: "ielts-preparation-strategy", focus: "The diagnose → language → technique → mock-cycle method", minutes: 14 },
    { label: "Onboarding: set your target, date and daily minutes", refType: "drill", focus: "The dashboard plans itself around these three numbers", minutes: 5 },
  ],
};

function phaseFour(variant: "ACADEMIC" | "GENERAL_TRAINING"): PathwayModuleSeed {
  const fullMock2 =
    variant === "ACADEMIC"
      ? "Academic Full Mock 2 (timed, exam conditions)"
      : "General Training Full Mock 2 (timed, exam conditions)";
  const sectionMocks =
    variant === "ACADEMIC"
      ? "Academic Reading + Writing section mocks (timed)"
      : "GT Reading + Writing section mocks (timed)";
  return {
    title: "Phase 4 — Band ladder, exam strategies, mock cycle",
    goal: "Modules 6, 7 and 8: know exactly what changes between bands, drill the exam strategies, and run the mock cycle to your exam date.",
    steps: [
      { label: "Lesson: The full band ladder (4.0 → 9.0)", refType: "curriculum", refId: "ielts-band-ladder-overview", focus: "All ten targets, how half bands arise, reading your own report", minutes: 15 },
      { label: "Lesson: Band 4 → 5", refType: "curriculum", refId: "ielts-band-4-to-5", focus: "Simple accuracy before complexity", minutes: 14 },
      { label: "Lesson: Band 5 → 6", refType: "curriculum", refId: "ielts-band-5-to-6", focus: "Coverage, connection, three owned complex patterns", minutes: 14 },
      { label: "Lesson: Band 6 → 7 (the classic jump)", refType: "curriculum", refId: "ielts-band-6-to-7", focus: "Flexible cohesion, less-common vocabulary, error-free rate", minutes: 16 },
      { label: "Lesson: Band 7 → 8", refType: "curriculum", refId: "ielts-band-7-to-8", focus: "Consistency becomes style", minutes: 14 },
      { label: "Lesson: Band 8 → 9", refType: "curriculum", refId: "ielts-band-8-to-9", focus: "The descriptor ceiling — train the rung you need", minutes: 12 },
      { label: "Lesson: Time management", refType: "curriculum", refId: "ielts-strategy-time", focus: "18/18/20 + sweep; the 20/40 writing split", minutes: 12 },
      { label: "Lesson: Understanding instructions", refType: "curriculum", refId: "ielts-strategy-instructions", focus: "Word limits, 'choose TWO letters', True vs Yes", minutes: 12 },
      { label: "Lesson: Answer selection strategies", refType: "curriculum", refId: "ielts-strategy-answering", focus: "Elimination, distractors, never leave a blank", minutes: 10 },
      { label: "Lesson: Avoiding common mistakes", refType: "curriculum", refId: "ielts-strategy-mistakes", focus: "The ten-row table — score your next mock against it", minutes: 12 },
      { label: "Lesson: Handling difficult questions", refType: "curriculum", refId: "ielts-strategy-difficult", focus: "Mark → move → return; the panic protocol", minutes: 10 },
      { label: "Lesson: Exam-day preparation", refType: "curriculum", refId: "ielts-strategy-exam-day", focus: "Logistics protect the band you already have", minutes: 10 },
      { label: "Lesson: Review strategies", refType: "curriculum", refId: "ielts-strategy-review", focus: "The five-step post-mock review and the error log", minutes: 12 },
      { label: "Lesson: The mock system — modes, kinds, cadence", refType: "curriculum", refId: "ielts-mocks-guide", focus: "Timed vs untimed; the accelerating cadence", minutes: 12 },
      { label: `Mock cycle: sit ${sectionMocks}`, refType: "drill", focus: "Section budgets under the clock", minutes: 60 },
      { label: `Full simulation: ${fullMock2}`, refType: "drill", focus: "Full sitting, full screen, no interruptions", minutes: 90 },
      { label: "Review your mock errors with the AI Tutor", refType: "tutor", examSection: "writing", focus: "Turn the report's skill gaps into next-week drills", minutes: 25 },
      { label: "Final light review: word lists and error log", refType: "vocabulary", refId: "workplace", focus: "Low-energy consolidation before test day", minutes: 20 },
    ],
  };
}

// ---------------------------------------------------------------------------
// IELTS Academic pathway
// ---------------------------------------------------------------------------

export const ieltsAcademicPathwayModules: PathwayModuleSeed[] = [
  phaseOne,
  {
    title: "Phase 2 — Listening & Speaking craft",
    goal: "Modules 2 and 5 in full, plus the common curriculum's professional audio and speaking activities — the two sections that are identical across variants.",
    steps: [
      { label: "Lesson: Understanding the Listening test", refType: "curriculum", refId: "ielts-listening-overview", examSection: "listening", focus: "Four parts, heard once, two-pass habit", minutes: 12 },
      { label: "Listening Lab: 'A job interview' (professional)", refType: "listening", refId: "a-job-interview", examSection: "listening", focus: "Professional register, detail tracking", minutes: 25 },
      { label: "Lesson: Question instructions and answer limits", refType: "curriculum", refId: "ielts-listening-instructions", examSection: "listening", focus: "Word limits as scoring rules", minutes: 12 },
      { label: "Lesson: Predicting answers", refType: "curriculum", refId: "ielts-listening-predicting", examSection: "listening", focus: "Predict part of speech and content before the audio", minutes: 12 },
      { label: "Lesson: Identifying distractors", refType: "curriculum", refId: "ielts-listening-distractors", examSection: "listening", focus: "The distractor families", minutes: 12 },
      { label: "Drill: numbers, dates and spelling", refType: "drill", examSection: "listening", focus: "Teen vs ty; dictated spellings; word limits", minutes: 15 },
      { label: "Lesson: Spelling requirements", refType: "curriculum", refId: "ielts-listening-spelling", examSection: "listening", focus: "Exact-match answers or zero marks", minutes: 12 },
      { label: "Lesson: Numbers and dates", refType: "curriculum", refId: "ielts-listening-numbers-dates", examSection: "listening", focus: "Formats for dates, times, prices and phone numbers", minutes: 12 },
      { label: "Lesson: Recognising different accents", refType: "curriculum", refId: "ielts-listening-accents", examSection: "listening", focus: "Exposure strategy; what not to do", minutes: 10 },
      { label: "Lesson: Form completion in depth", refType: "curriculum", refId: "ielts-listening-form-completion", examSection: "listening", focus: "The form layout as a prediction machine", minutes: 14 },
      { label: "Lesson: Note completion in depth", refType: "curriculum", refId: "ielts-listening-note-completion", examSection: "listening", focus: "Headings as topic locators", minutes: 14 },
      { label: "Lesson: Multiple choice in depth", refType: "curriculum", refId: "ielts-listening-multiple-choice", examSection: "listening", focus: "Verdicts, not mentions; option paraphrase", minutes: 14 },
      { label: "Lesson: Map and diagram labelling in depth", refType: "curriculum", refId: "ielts-listening-maps-diagrams", examSection: "listening", focus: "Direction language; starting-point discipline", minutes: 14 },
      { label: "Lesson: Part 4 — Academic monologues", refType: "curriculum", refId: "ielts-listening-part4", examSection: "listening", focus: "Ten gaps in one lecture-length hearing", minutes: 14 },
      { label: "Listening Masterclass: audio bank set (Parts 1–2)", refType: "drill", examSection: "listening", focus: "Original recordings with per-item error analysis", minutes: 20 },
      { label: "Section mock: Listening (timed)", refType: "drill", examSection: "listening", focus: "All four parts at official timing", minutes: 30 },
      { label: "Lesson: The Speaking examination format", refType: "curriculum", refId: "ielts-speaking-format", examSection: "speaking", focus: "Three parts, 11–14 recorded minutes, one examiner", minutes: 13 },
      { label: "Lesson: Answer development", refType: "curriculum", refId: "ielts-speaking-answer-development", examSection: "speaking", focus: "The layer method: answer, reason, detail", minutes: 15 },
      { label: "Lesson: Part 1 topics — hometown and work", refType: "curriculum", refId: "ielts-speaking-t-hometown", examSection: "speaking", focus: "Question patterns and developed answers on familiar topics", minutes: 12 },
      { label: "Speaking Masterclass: Part 1 interview round", refType: "drill", examSection: "speaking", focus: "Recorded interview practice with criterion feedback", minutes: 10 },
      { label: "Speaking Lab: guided activity (advanced)", refType: "speaking", refId: "spk-adv-debate", examSection: "speaking", focus: "Extended answers and abstraction — Part 3 prep", minutes: 25 },
      { label: "Lesson: Understanding cue cards", refType: "curriculum", refId: "ielts-speaking-cue-cards", examSection: "speaking", focus: "Card anatomy: task line, prompts, the explain line", minutes: 13 },
      { label: "Lesson: Effective note-taking", refType: "curriculum", refId: "ielts-speaking-notes", examSection: "speaking", focus: "The four-corner note: fragments, never sentences", minutes: 14 },
      { label: "Drill: cue-card long turn", refType: "drill", examSection: "speaking", focus: "One minute of notes, two minutes of speech", minutes: 20 },
      { label: "Lesson: Supporting arguments", refType: "curriculum", refId: "ielts-speaking-supporting", examSection: "speaking", focus: "VIEW → REASON → EXAMPLE → CONTRAST", minutes: 13 },
      { label: "Speaking Masterclass: three-part simulation", refType: "drill", examSection: "speaking", focus: "Full simulation with recording, replay and feedback", minutes: 15 },
    ],
  },
  {
    title: "Phase 3 — Academic Reading & Writing craft",
    goal: "Modules 3A and 4A: every Academic question type and task family, bridged with the common curriculum's advanced texts and studio assignments.",
    steps: [
      { label: "Lesson: Understanding the reading test", refType: "curriculum", refId: "ielts-areading-test", examSection: "reading", focus: "Three passages, official question-type list, 18/18/20", minutes: 12 },
      { label: "Reading Room: 'The case for a four-day week' (advanced)", refType: "reading", refId: "the-case-for-a-four-day-week", examSection: "reading", focus: "Argumentative academic prose", minutes: 30 },
      { label: "Lesson: Skimming", refType: "curriculum", refId: "ielts-areading-skimming", examSection: "reading", focus: "The paragraph map in sixty seconds", minutes: 12 },
      { label: "Lesson: Scanning", refType: "curriculum", refId: "ielts-areading-scanning", examSection: "reading", focus: "Shapes and synonym conversion", minutes: 12 },
      { label: "Lesson: Understanding paraphrasing", refType: "curriculum", refId: "ielts-areading-paraphrase", examSection: "reading", focus: "Answers paraphrase; echoes deceive", minutes: 13 },
      { label: "Drill: TFNG vs YNNG", refType: "drill", examSection: "reading", focus: "The boundary, on one passage", minutes: 15 },
      { label: "Lesson: Matching headings", refType: "curriculum", refId: "ielts-areading-matching-headings", examSection: "reading", focus: "Claims, not vocabulary", minutes: 14 },
      { label: "Lesson: Sentence completion", refType: "curriculum", refId: "ielts-areading-sentence-completion", examSection: "reading", focus: "Grammar prediction; copy within limits", minutes: 12 },
      { label: "Drill: paraphrase recognition", refType: "drill", examSection: "reading", focus: "Faithful paraphrase vs verbatim decoy", minutes: 15 },
      { label: "Section mock: Academic Reading (timed)", refType: "drill", examSection: "reading", focus: "The full type mix under the clock", minutes: 60 },
      { label: "Lesson: Understanding task instructions", refType: "curriculum", refId: "ielts-awriting-instructions", examSection: "writing", focus: "The rubric decoded verb by verb", minutes: 14 },
      { label: "Writing Studio: analytical writing", refType: "writing", refId: "analytical-writing", examSection: "writing", focus: "Describing data and trends — Task 1 skills", minutes: 35 },
      { label: "Lesson: Task 1 — Bar charts", refType: "curriculum", refId: "ielts-awriting-t1-bar", examSection: "writing", focus: "Ranking language; the ten-component method", minutes: 16 },
      { label: "Drill: Task 1 overview sentences", refType: "drill", examSection: "writing", focus: "Select the valid overview, reject the decoys", minutes: 15 },
      { label: "Lesson: Task 1 — Process diagrams and maps", refType: "curriculum", refId: "ielts-awriting-t1-process", examSection: "writing", focus: "The passive report; the language of change", minutes: 16 },
      { label: "Lesson: Task 1 — Maps", refType: "curriculum", refId: "ielts-awriting-t1-map", examSection: "writing", focus: "Comparing eras; positions and directions", minutes: 16 },
      { label: "Lesson: Task 2 — Opinion essays", refType: "curriculum", refId: "ielts-awriting-t2-opinion", examSection: "writing", focus: "The thesis that survives four paragraphs", minutes: 17 },
      { label: "Lesson: Task 2 — Discussion essays", refType: "curriculum", refId: "ielts-awriting-t2-discussion", examSection: "writing", focus: "Both views fairly; your verdict up front", minutes: 17 },
      { label: "Writing Studio: argumentative essays", refType: "writing", refId: "argumentative-essays", examSection: "writing", focus: "Thesis, paragraphing and support — Task 2 skills", minutes: 40 },
      { label: "Lesson: Cohesion", refType: "curriculum", refId: "ielts-awriting-cohesion", examSection: "writing", focus: "Cohesive devices by function; linker discipline", minutes: 15 },
      { label: "Lesson: How examiners score your writing", refType: "curriculum", refId: "ielts-awriting-criteria", examSection: "writing", focus: "The four criteria, honestly framed", minutes: 15 },
      { label: "Grammar Clinic: fix your own recorded errors", refType: "grammar", refId: "clinic", examSection: "writing", focus: "Error-correction habit for Task 2", minutes: 20 },
      { label: "Section mock: Academic Writing (timed, 20/40 split)", refType: "drill", examSection: "writing", focus: "Hold the 20-minute Task 1 cap", minutes: 60 },
    ],
  },
  phaseFour("ACADEMIC"),
];

// ---------------------------------------------------------------------------
// IELTS General Training pathway
// ---------------------------------------------------------------------------

export const ieltsGeneralPathwayModules: PathwayModuleSeed[] = [
  phaseOne,
  {
    title: "Phase 2 — Listening & Speaking craft",
    goal: "Modules 2 and 5 (identical tests across variants), with GT-bank drills and section mocks.",
    steps: [
      { label: "Lesson: Understanding the Listening test", refType: "curriculum", refId: "ielts-listening-overview", examSection: "listening", focus: "Four parts, heard once, two-pass habit", minutes: 12 },
      { label: "Listening Lab: 'Project update meeting' (professional)", refType: "listening", refId: "project-update-meeting", examSection: "listening", focus: "Multi-speaker comprehension", minutes: 25 },
      { label: "Lesson: Question instructions and answer limits", refType: "curriculum", refId: "ielts-listening-instructions", examSection: "listening", focus: "Word limits as scoring rules", minutes: 12 },
      { label: "Lesson: Predicting answers", refType: "curriculum", refId: "ielts-listening-predicting", examSection: "listening", focus: "Predict part of speech and content before the audio", minutes: 12 },
      { label: "Lesson: Identifying distractors", refType: "curriculum", refId: "ielts-listening-distractors", examSection: "listening", focus: "The distractor families", minutes: 12 },
      { label: "Drill: numbers, dates and spelling (GT bank)", refType: "drill", examSection: "listening", focus: "Teen vs ty; dictated spellings; word limits", minutes: 15 },
      { label: "Lesson: Spelling requirements", refType: "curriculum", refId: "ielts-listening-spelling", examSection: "listening", focus: "Exact-match answers or zero marks", minutes: 12 },
      { label: "Lesson: Numbers and dates", refType: "curriculum", refId: "ielts-listening-numbers-dates", examSection: "listening", focus: "Formats for dates, times, prices and phone numbers", minutes: 12 },
      { label: "Lesson: Recognising different accents", refType: "curriculum", refId: "ielts-listening-accents", examSection: "listening", focus: "Exposure strategy", minutes: 10 },
      { label: "Lesson: Form completion in depth", refType: "curriculum", refId: "ielts-listening-form-completion", examSection: "listening", focus: "The form layout as a prediction machine", minutes: 14 },
      { label: "Lesson: Note completion in depth", refType: "curriculum", refId: "ielts-listening-note-completion", examSection: "listening", focus: "Headings as topic locators", minutes: 14 },
      { label: "Lesson: Matching in depth", refType: "curriculum", refId: "ielts-listening-matching", examSection: "listening", focus: "Elimination across speakers", minutes: 14 },
      { label: "Lesson: Map and diagram labelling in depth", refType: "curriculum", refId: "ielts-listening-maps-diagrams", examSection: "listening", focus: "Direction language; starting-point discipline", minutes: 14 },
      { label: "Lesson: Part 2 — The individual speaker", refType: "curriculum", refId: "ielts-listening-part2", examSection: "listening", focus: "Signpost tracking through a monologue", minutes: 14 },
      { label: "Listening Masterclass: audio bank set (Parts 1–2)", refType: "drill", examSection: "listening", focus: "Original recordings with per-item error analysis", minutes: 20 },
      { label: "Section mock: Listening (timed, GT bank)", refType: "drill", examSection: "listening", focus: "All four parts at official timing", minutes: 30 },
      { label: "Lesson: The Speaking examination format", refType: "curriculum", refId: "ielts-speaking-format", examSection: "speaking", focus: "Three parts, four criteria, one examiner", minutes: 13 },
      { label: "Lesson: Answer development", refType: "curriculum", refId: "ielts-speaking-answer-development", examSection: "speaking", focus: "The layer method: answer, reason, detail", minutes: 15 },
      { label: "Lesson: Part 1 topics — work and study", refType: "curriculum", refId: "ielts-speaking-t-work", examSection: "speaking", focus: "Question patterns and developed answers on familiar topics", minutes: 12 },
      { label: "Speaking Masterclass: Part 1 interview round", refType: "drill", examSection: "speaking", focus: "Recorded interview practice with criterion feedback", minutes: 10 },
      { label: "Speaking Lab: guided activity (advanced interview practice)", refType: "speaking", refId: "spk-adv-interview", examSection: "speaking", focus: "Everyday interview fluency", minutes: 25 },
      { label: "Lesson: Understanding cue cards", refType: "curriculum", refId: "ielts-speaking-cue-cards", examSection: "speaking", focus: "Card anatomy: task line, prompts, the explain line", minutes: 13 },
      { label: "Lesson: Effective note-taking", refType: "curriculum", refId: "ielts-speaking-notes", examSection: "speaking", focus: "The four-corner note: fragments, never sentences", minutes: 14 },
      { label: "Drill: cue-card long turn (GT bank)", refType: "drill", examSection: "speaking", focus: "One minute of notes, two minutes of speech", minutes: 20 },
      { label: "Lesson: Supporting arguments", refType: "curriculum", refId: "ielts-speaking-supporting", examSection: "speaking", focus: "VIEW → REASON → EXAMPLE → CONTRAST", minutes: 13 },
      { label: "Speaking Masterclass: three-part simulation", refType: "drill", examSection: "speaking", focus: "Full simulation with recording, replay and feedback", minutes: 15 },
    ],
  },
  {
    title: "Phase 3 — General Training Reading & Writing craft",
    goal: "Modules 3G and 4G: the three GT reading sections and the letter-plus-essay writing programme, with the GT question bank.",
    steps: [
      { label: "Lesson: Understanding the GT Reading paper", refType: "curriculum", refId: "ielts-greading-test", examSection: "reading", focus: "Three sections; the 15/20/25 budget", minutes: 12 },
      { label: "Reading Room: 'Who pays for your coffee' (advanced)", refType: "reading", refId: "who-pays-for-your-coffee", examSection: "reading", focus: "General-interest prose with argument", minutes: 30 },
      { label: "Lesson: Section 1 — reading notices", refType: "curriculum", refId: "ielts-greading-notices", examSection: "reading", focus: "Headline bait vs small print conditions", minutes: 11 },
      { label: "Lesson: Section 1 — reading advertisements", refType: "curriculum", refId: "ielts-greading-advertisements", examSection: "reading", focus: "Offers, conditions and contact rules", minutes: 11 },
      { label: "Lesson: Section 2 — following instructions", refType: "curriculum", refId: "ielts-greading-instructions", examSection: "reading", focus: "Steps, gates and bans", minutes: 11 },
      { label: "Lesson: Section 2 — workplace documents", refType: "curriculum", refId: "ielts-greading-workplace", examSection: "reading", focus: "Modal verbs are the content", minutes: 12 },
      { label: "Lesson: Section 3 — longer general-interest passages", refType: "curriculum", refId: "ielts-greading-longer", examSection: "reading", focus: "The full protocol on feature prose", minutes: 13 },
      { label: "Section mock: GT Reading (timed)", refType: "drill", examSection: "reading", focus: "All three sections under the clock", minutes: 60 },
      { label: "Lesson: Analysing question requirements", refType: "curriculum", refId: "ielts-gwriting-requirements", examSection: "writing", focus: "Situation, audience, purpose, bullets", minutes: 14 },
      { label: "Lesson: Formal letters", refType: "curriculum", refId: "ielts-gwriting-formal", examSection: "writing", focus: "Dear Sir or Madam; set formal phrases", minutes: 16 },
      { label: "Lesson: Writing complaints", refType: "curriculum", refId: "ielts-gwriting-complaint", examSection: "writing", focus: "Facts, impact, remedy — firm without aggression", minutes: 15 },
      { label: "Lesson: Informal letters", refType: "curriculum", refId: "ielts-gwriting-informal", examSection: "writing", focus: "Warm but organised; contractions expected", minutes: 15 },
      { label: "Lesson: Tone", refType: "curriculum", refId: "ielts-gwriting-tone", examSection: "writing", focus: "The tone dial; register consistency", minutes: 15 },
      { label: "Drill: GT letters — choosing the right tone", refType: "drill", examSection: "writing", focus: "Register decisions on five recipients", minutes: 15 },
      { label: "Writing Studio: opinion writing", refType: "writing", refId: "opinion-writing", examSection: "writing", focus: "State and support a position — Task 2 core", minutes: 35 },
      { label: "Lesson: GT Task 2 — Opinion essays", refType: "curriculum", refId: "ielts-gwriting-t2-opinion", examSection: "writing", focus: "Stated position; reasons from daily life", minutes: 16 },
      { label: "Lesson: GT Task 2 — Problem and solution", refType: "curriculum", refId: "ielts-gwriting-t2-problem-solution", examSection: "writing", focus: "Everyday problems; matched fixes", minutes: 15 },
      { label: "Lesson: How examiners score your letter and essay", refType: "curriculum", refId: "ielts-gwriting-criteria", examSection: "writing", focus: "The four criteria with the GT specifics", minutes: 15 },
      { label: "Grammar Clinic: fix your own recorded errors", refType: "grammar", refId: "clinic", examSection: "writing", focus: "Error-correction habit for Task 2", minutes: 20 },
      { label: "Section mock: GT Writing (timed, 20/40 split)", refType: "drill", examSection: "writing", focus: "Letter + essay under the clock", minutes: 60 },
    ],
  },
  phaseFour("GENERAL_TRAINING"),
];

// Pathway definitions consumed by scripts/seed-exams.ts
export const ieltsAcademicPathway = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "IELTS Academic Preparation Pathway",
  summary:
    "A four-phase journey through the eight modules: orientation and diagnosis (Module 1), Listening and Speaking craft (Modules 2 and 5 — identical test across variants), Academic Reading and Writing craft (Modules 3A and 4A), then the band ladder, exam strategies and the mock cycle (Modules 6–8). Every step either teaches technique in the Academy's own lessons or reaches into the common English curriculum — nothing is duplicated.",
  modules: ieltsAcademicPathwayModules,
};

export const ieltsGeneralPathway = {
  examKey: "IELTS",
  variant: "GENERAL_TRAINING",
  title: "IELTS General Training Preparation Pathway",
  summary:
    "The General Training twin, kept fully separate: the same shared orientation and Listening/Speaking craft phases (those tests are identical across variants), then General Training Reading and Writing craft (Modules 3G and 4G) with the GT question bank, and the same band ladder, strategy and mock-cycle finish. Pathways never share variant-specific steps.",
  modules: ieltsGeneralPathwayModules,
};
