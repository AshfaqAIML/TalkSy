/**
 * Seeds the International Exam Preparation Academy (Division C):
 *   1. Test specifications — IELTS Academic, IELTS General Training,
 *      TOEFL iBT (current formats, official source references).
 *   2. Assessment rubrics for constructed-response tasks.
 *   3. IELTS + TOEFL preparation pathways (steps reference the COMMON
 *      curriculum — no duplication).
 *   4. One sample-length mock test per exam (original practice content,
 *      NOT official questions).
 *
 * Run: bun scripts/seed-exams.ts
 *
 * Idempotency: specs are updated in place when content changes; pathways
 * are rebuilt (step progress resets — this is a setup script); mocks are
 * created only if a mock with the same title does not exist.
 *
 * Trademarks: IELTS is jointly owned by the British Council, IDP: IELTS
 * Australia and Cambridge University Press & Assessment; TOEFL and TOEFL
 * iBT are registered trademarks of ETS. EnglishPath is not affiliated
 * with, endorsed by or associated with any of them. All practice
 * questions below are original materials written for this platform.
 */

import { PrismaClient } from "@prisma/client";
import { IELTS_COURSES, IELTS_LEVEL } from "../src/data/exams/ielts";
import { TOEFL_COURSES, TOEFL_LEVEL } from "../src/data/exams/toefl";
import { TOEFL_MOCK_LIBRARY } from "../src/data/exams/toefl/mocks";
import { IELTS_MOCK_LIBRARY, type MockSeed as IeltsMockSeed } from "../src/data/exams/ielts/mocks";
import { ieltsAcademicPathway, ieltsGeneralPathway } from "../src/data/exams/ielts/pathways";
import { toeflPathway } from "../src/data/exams/toefl/pathway";
import type { ExerciseSpec } from "../src/data/exams/ielts/types";
import { EXAM_META } from "./exam-content-meta";
import type { BankAnswerPayload } from "../src/lib/exams/listening-bank/service";

const db = new PrismaClient();

const TODAY = new Date();
const REVIEWED = new Date("2026-11-12");

// ---------------------------------------------------------------------------
// 1. Test specifications
// ---------------------------------------------------------------------------

type SpecSectionSeed = {
  key: string;
  label: string;
  timingSec: number;
  questionCount: number;
  taskTypes: string[];
  directions: string;
  adaptive?: string;
  delivery?: string;
  /** Player navigation policy (mirrors the real computer-delivered test). */
  navigation?: {
    withinSection: "free" | "forward_only";
    allowBackToSection?: boolean;
    flagForReview?: boolean;
    replayAudio?: boolean;
  };
};

type SpecSeed = {
  examKey: string;
  variant: string;
  name: string;
  effectiveDate: Date;
  sections: SpecSectionSeed[];
  scoringModel: {
    kind: "IELTS_BAND" | "TOEFL_BAND_1_6";
    unit: string;
    rawToScore: Record<string, Array<{ min: number; band: number }>>;
    overallRule: "AVERAGE_ROUNDED_HALF_UP" | "AVERAGE_ROUNDED_NEAREST_HALF";
    minSectionScore: number;
    maxSectionScore: number;
    validityMonths: number;
    transitionNote?: string;
  };
  taskTypes: unknown[];
  sourceRefs: unknown[];
  notes: string;
};

const IELTS_LISTENING_SECTION: SpecSectionSeed = {
  key: "listening",
  label: "Listening",
  timingSec: 1800,
  questionCount: 40,
  taskTypes: [
    "Multiple choice",
    "Matching",
    "Plan/map/diagram labelling",
    "Form/note/table/flow-chart/summary completion",
    "Sentence completion",
    "Short-answer questions",
  ],
  directions:
    "Four recorded texts: a conversation in an everyday social context, a monologue in an everyday social context, a conversation in an educational or training context, and a monologue on an academic subject. Each part is heard once only; recordings use a range of accents (British, Australian, New Zealand, North American).",
  delivery:
    "Approximately 30 minutes. Since mid-2026 IELTS is computer-delivered only: you type answers as you go and get about 2 minutes to check at the end. (The 10-minute transfer time applied only to the paper test, which was withdrawn.)",
  navigation: { withinSection: "free", allowBackToSection: false, flagForReview: true, replayAudio: false },
};

const IELTS_SPEAKING_SECTION: SpecSectionSeed = {
  key: "speaking",
  label: "Speaking",
  timingSec: 780,
  questionCount: 3,
  taskTypes: ["Part 1: Introduction and interview", "Part 2: Individual long turn (cue card)", "Part 3: Two-way discussion"],
  directions:
    "Part 1 (4–5 min): general questions about yourself. Part 2 (3–4 min): you speak for 1–2 minutes on a cue-card topic after 1 minute of preparation. Part 3 (4–5 min): a discussion of more abstract ideas linked to the Part 2 topic.",
  delivery:
    "11–14 minutes, recorded, with a certified examiner — in person or by live video call on the computer-delivered and online tests.",
  navigation: { withinSection: "free", allowBackToSection: false, flagForReview: true, replayAudio: false },
};

const ieltsRawToScoreListening = [
  { min: 39, band: 9 }, { min: 37, band: 8.5 }, { min: 35, band: 8 }, { min: 32, band: 7.5 },
  { min: 30, band: 7 }, { min: 26, band: 6.5 }, { min: 23, band: 6 }, { min: 18, band: 5.5 },
  { min: 16, band: 5 }, { min: 13, band: 4.5 }, { min: 10, band: 4 }, { min: 8, band: 3.5 }, { min: 0, band: 3 },
];
const ieltsRawToScoreAcademicReading = [
  { min: 39, band: 9 }, { min: 37, band: 8.5 }, { min: 33, band: 8 }, { min: 30, band: 7.5 },
  { min: 27, band: 7 }, { min: 23, band: 6.5 }, { min: 19, band: 6 }, { min: 15, band: 5.5 },
  { min: 13, band: 5 }, { min: 10, band: 4.5 }, { min: 8, band: 4 }, { min: 6, band: 3.5 }, { min: 0, band: 3 },
];
const ieltsRawToScoreGtReading = [
  { min: 40, band: 9 }, { min: 38, band: 8.5 }, { min: 35, band: 8 }, { min: 32, band: 7.5 },
  { min: 29, band: 7 }, { min: 26, band: 6.5 }, { min: 22, band: 6 }, { min: 18, band: 5.5 },
  { min: 15, band: 5 }, { min: 12, band: 4.5 }, { min: 9, band: 4 }, { min: 6, band: 3.5 }, { min: 0, band: 3 },
];

const IELTS_SOURCES = [
  { label: "IELTS official — Academic test format", url: "https://ielts.org/take-a-test/test-types/ielts-academic-test", retrievedAt: "2026-11-12", note: "Section timings and question counts." },
  { label: "IELTS official — Academic Writing test format", url: "https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-writing", retrievedAt: "2026-11-12", note: "Task wording, word minimums, 20/40-minute split, Task 2 double weighting, four marking criteria." },
  { label: "IELTS official — Academic Reading test format", url: "https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-reading", retrievedAt: "2026-11-12", note: "3 passages, 2150–2750 words, the official question-type list." },
  { label: "IELTS official — General Training Writing test format", url: "https://ielts.org/take-a-test/test-types/ielts-general-training-test/ielts-general-training-format-writing", retrievedAt: "2026-11-12", note: "Letter situation + three bullet points; semi-formal/neutral Task 2 essay; Task 2 double weighting." },
  { label: "IELTS official — General Training Reading test format", url: "https://ielts.org/take-a-test/test-types/ielts-general-training-test/ielts-general-training-format-reading", retrievedAt: "2026-11-12", note: "Section 1 (2–3 short everyday texts), Section 2 (two work-related texts), Section 3 (one longer general-interest text)." },
  {
    label: "IELTS official — Updates to IELTS test delivery",
    url: "https://ielts.org/news-and-insights/updates-to-ielts-test-delivery",
    retrievedAt: "2026-11-12",
    note: "From mid-2026 IELTS is no longer offered as a paper-based test: all tests are computer-delivered; a Writing on Paper option is available in selected markets (handwritten Writing answers, rest on computer); One Skill Retake must use the same delivery mode as the original test; earlier paper-based results stay valid for the usual two years; UKVI SELT is fully digital.",
  },
  {
    label: "IELTS official — Tests for UK Visas and Immigration",
    url: "https://ielts.org/take-a-test/test-types/ielts-tests-for-uk-visas-and-immigration",
    retrievedAt: "2026-11-12",
    note: "SELT approval, in-person requirement at official IELTS for UKVI centres, Life Skills A1/A2/B1 (Listening and Speaking, Pass), four-skill minimums: 4.0 per component (B1), 5.5 per component (B2), 7.0 per component (C1).",
  },
  {
    label: "IELTS official — IELTS One Skill Retake",
    url: "https://ielts.org/take-a-test/booking-your-test/one-skill-retake",
    retrievedAt: "2026-11-12",
    note: "Widely available in many countries; confirm availability with your test centre and acceptance with your receiving organisation before booking.",
  },
  { label: "British Council — IELTS test format guide", url: "https://takeielts.britishcouncil.org/what-is-ielts/how-it-works/test-format", retrievedAt: "2026-11-12", note: "2h45m total: Listening 30 min, Reading 60 min, Writing 60 min, Speaking 11–14 min." },
];

const ieltsAcademic: SpecSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  name: "IELTS Academic",
  effectiveDate: new Date("2026-07-01"),
  sections: [
    IELTS_LISTENING_SECTION,
    {
      key: "reading",
      label: "Academic Reading",
      timingSec: 3600,
      questionCount: 40,
      taskTypes: [
        "Multiple choice",
        "Identifying information (True/False/Not Given)",
        "Identifying the writer's views/claims (Yes/No/Not Given)",
        "Matching information / headings / features / sentence endings",
        "Sentence/note/table/summary/flow-chart/diagram completion",
        "Short-answer questions",
      ],
      directions:
        "Three long academic-style passages (total 2,150–2,750 words) with 40 questions in 60 minutes. Computer-delivered since mid-2026: answers are typed directly, with no separate transfer time.",
      navigation: { withinSection: "free", allowBackToSection: false, flagForReview: true, replayAudio: false },
    },
    {
      key: "writing",
      label: "Academic Writing",
      timingSec: 3600,
      questionCount: 2,
      taskTypes: [
        "Task 1 — describe some visual information in your own words (a graph, table, chart or diagram; one or more graphs/charts/tables, or a diagram of an object, device, process or event), at least 150 words (≈20 minutes)",
        "Task 2 — discuss a point of view, argument or problem: present a solution, justify an opinion, compare and contrast evidence, or evaluate and challenge an argument, at least 250 words (≈40 minutes, weighted twice as heavily)",
      ],
      directions:
        "Academic or semi-formal/neutral style; full sentences, no opinions in Task 1. Responses are assessed against the public writing band descriptors (Task Achievement, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy).",
      navigation: { withinSection: "free", allowBackToSection: false, flagForReview: true, replayAudio: false },
    },
    IELTS_SPEAKING_SECTION,
  ],
  scoringModel: {
    kind: "IELTS_BAND",
    unit: "band",
    rawToScore: {
      listening: ieltsRawToScoreListening,
      reading: ieltsRawToScoreAcademicReading,
    },
    overallRule: "AVERAGE_ROUNDED_NEAREST_HALF",
    minSectionScore: 0,
    maxSectionScore: 9,
    validityMonths: 24,
    transitionNote:
      "Paper-based IELTS was withdrawn from mid-2026; every IELTS is now computer-delivered, with a Writing on Paper option (handwritten Writing answers) in selected markets. Earlier paper-based results remain valid for the usual two years.",
  },
  taskTypes: [
    { type: "MCQ_SINGLE", label: "Multiple choice (one answer)", description: "Choose one option from three (A–C) or four (A–D) possibilities.", objective: true },
    { type: "MCQ_MULTI", label: "Multiple choice (multiple answers)", description: "Choose two or three letters from a list.", objective: true },
    { type: "TFNG", label: "True / False / Not Given — and Yes / No / Not Given", description: "Decide whether a statement agrees with the text (True / Yes), contradicts it (False / No) or is not covered (Not Given).", objective: true },
    { type: "MATCHING", label: "Matching", description: "Match items (headings, information, features, sentence endings) to options.", objective: true },
    { type: "FILL_BLANK", label: "Completion (form / note / table / summary / sentence)", description: "Fill gaps with words from the text or the audio script, respecting word limits.", objective: true },
    { type: "WRITING_TASK", label: "Writing task", description: "Constructed response graded against the IELTS writing band descriptors.", objective: false, rubricKey: "ielts.writing" },
    { type: "SPEAKING_TASK", label: "Speaking part", description: "Constructed response graded against the IELTS speaking band descriptors.", objective: false, rubricKey: "ielts.speaking" },
  ],
  sourceRefs: IELTS_SOURCES,
  notes:
    "Format data verified against the official IELTS pages on 2026-11-12, including the mid-2026 withdrawal of the paper-based test. Raw→band tables are the practice-test conversions published with official IELTS practice materials; live test forms vary slightly.",
};

const ieltsGeneral: SpecSeed = {
  ...ieltsAcademic,
  variant: "GENERAL_TRAINING",
  name: "IELTS General Training",
  sections: [
    IELTS_LISTENING_SECTION,
    {
      key: "reading",
      label: "General Training Reading",
      timingSec: 3600,
      questionCount: 40,
      taskTypes: [
        "Section 1 — everyday texts (Section 1 may contain two or three short texts or several shorter texts: notices, advertisements, timetables)",
        "Section 2 — work-related texts (two texts: job descriptions, contracts, staff development and policies)",
        "Section 3 — one longer, more complex general-interest text",
        "Multiple choice, True/False/Not Given, matching, completion types",
      ],
      directions:
        "Three sections of authentic everyday and work-related English with 40 questions in 60 minutes. Computer-delivered since mid-2026: answers are typed directly, with no separate transfer time.",
      navigation: { withinSection: "free", allowBackToSection: false, flagForReview: true, replayAudio: false },
    },
    {
      key: "writing",
      label: "General Training Writing",
      timingSec: 3600,
      questionCount: 2,
      taskTypes: [
        "Task 1 — respond to a given situation with a letter (personal, semi-formal or formal in style) covering the three bullet points on the task card, at least 150 words (≈20 minutes)",
        "Task 2 — semi-formal/neutral discursive essay of a minimum of 250 words (≈40 minutes, weighted twice as heavily)",
      ],
      directions:
        "Task 2 carries twice the weight of Task 1. Responses are assessed against the public writing band descriptors (Task Achievement, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy).",
      navigation: { withinSection: "free", allowBackToSection: false, flagForReview: true, replayAudio: false },
    },
    IELTS_SPEAKING_SECTION,
  ],
  scoringModel: {
    ...ieltsAcademic.scoringModel,
    rawToScore: {
      listening: ieltsRawToScoreListening,
      reading: ieltsRawToScoreGtReading,
    },
  },
  taskTypes: [
    ...ieltsAcademic.taskTypes,
    {
      type: "EMAIL_WRITING",
      label: "Letter writing (GT Task 1)",
      description: "Respond to a given situation with a personal, semi-formal or formal letter covering three bullet points, at least 150 words.",
      objective: false,
      rubricKey: "ielts.writing",
    },
  ],
};

// New TOEFL iBT format, in force since 21 January 2026.
const toeflIbt: SpecSeed = {
  examKey: "TOEFL_IBT",
  variant: "STANDARD",
  name: "TOEFL iBT (2026 format)",
  effectiveDate: new Date("2026-01-21"),
  sections: [
    {
      key: "reading",
      label: "Reading",
      timingSec: 1800,
      questionCount: 50,
      taskTypes: [
        "Complete the Words (vocabulary-in-context completion)",
        "Read in Daily Life (everyday passages)",
        "Read an Academic Passage (comprehension, single and multiple answer)",
      ],
      directions:
        "Academic and everyday reading passages with up to 50 items: 30 Complete-the-Words items and 20 comprehension items, worth 35 raw points.",
      adaptive: "Two-stage adaptive: a routing module first, then a lower- or upper-difficulty module based on your performance.",
      delivery: "Up to ~30 minutes.",
      navigation: { withinSection: "free", allowBackToSection: false, flagForReview: false, replayAudio: false },
    },
    {
      key: "listening",
      label: "Listening",
      timingSec: 1740,
      questionCount: 47,
      taskTypes: [
        "Listen and Choose a Response (single best reply)",
        "Listen to a Conversation",
        "Listen to an Announcement",
        "Listen to an Academic Talk",
      ],
      directions:
        "Conversations, announcements and academic talks with up to 47 items, worth 35 raw points.",
      adaptive: "Two-stage adaptive: a routing module first, then a lower- or upper-difficulty module based on your performance.",
      delivery: "Up to ~29 minutes.",
      navigation: { withinSection: "forward_only", allowBackToSection: false, flagForReview: false, replayAudio: false },
    },
    {
      key: "speaking",
      label: "Speaking",
      timingSec: 480,
      questionCount: 11,
      taskTypes: [
        "Listen and Repeat (7 sentences — 8, 10 and 12-second recording windows)",
        "Take an Interview — short spoken responses (4 items)",
      ],
      directions:
        "Seven Listen-and-Repeat sentences (say each aloud within its window) followed by a four-question interview; worth 55 raw points. Constructed responses are AI-scored with human quality control.",
      delivery: "Approximately 8 minutes, linear (not adaptive).",
      navigation: { withinSection: "free", allowBackToSection: false, flagForReview: false, replayAudio: false },
    },
    {
      key: "writing",
      label: "Writing",
      timingSec: 1380,
      questionCount: 12,
      taskTypes: [
        "Build a Sentence (sentence reconstruction, 10 items)",
        "Write an Email",
        "Write for an Academic Discussion",
      ],
      directions:
        "Ten Build-a-Sentence (sentence reconstruction) items, one email task and one academic discussion response, worth 20 raw points.",
      delivery: "Approximately 23 minutes, linear (not adaptive).",
      navigation: { withinSection: "free", allowBackToSection: false, flagForReview: false, replayAudio: false },
    },
  ],
  scoringModel: {
    kind: "TOEFL_BAND_1_6",
    unit: "band",
    rawToScore: {
      reading: [
        { min: 33, band: 6 }, { min: 29, band: 5.5 }, { min: 26, band: 5 }, { min: 22, band: 4.5 },
        { min: 19, band: 4 }, { min: 15, band: 3.5 }, { min: 12, band: 3 }, { min: 8, band: 2.5 },
        { min: 5, band: 2 }, { min: 2, band: 1.5 }, { min: 0, band: 1 },
      ],
      listening: [
        { min: 33, band: 6 }, { min: 29, band: 5.5 }, { min: 26, band: 5 }, { min: 22, band: 4.5 },
        { min: 19, band: 4 }, { min: 15, band: 3.5 }, { min: 12, band: 3 }, { min: 8, band: 2.5 },
        { min: 5, band: 2 }, { min: 2, band: 1.5 }, { min: 0, band: 1 },
      ],
      speaking: [
        { min: 50, band: 6 }, { min: 44, band: 5.5 }, { min: 39, band: 5 }, { min: 33, band: 4.5 },
        { min: 28, band: 4 }, { min: 22, band: 3.5 }, { min: 17, band: 3 }, { min: 11, band: 2.5 },
        { min: 6, band: 2 }, { min: 3, band: 1.5 }, { min: 0, band: 1 },
      ],
      writing: [
        { min: 18, band: 6 }, { min: 16, band: 5.5 }, { min: 14, band: 5 }, { min: 12, band: 4.5 },
        { min: 10, band: 4 }, { min: 8, band: 3.5 }, { min: 7, band: 3 }, { min: 5, band: 2.5 },
        { min: 3, band: 2 }, { min: 2, band: 1.5 }, { min: 0, band: 1 },
      ],
    },
    overallRule: "AVERAGE_ROUNDED_NEAREST_HALF",
    minSectionScore: 1,
    maxSectionScore: 6,
    validityMonths: 24,
    transitionNote:
      "Score reports dual-report the 1–6 band scale and a comparable legacy 0–120 score during the 2026–2028 transition. Overall = average of the four section bands, rounded to the nearest half band.",
  },
  taskTypes: [
    { type: "COMPLETE_WORDS", label: "Complete the Words", description: "Complete words whose letters are partly given, using context.", objective: true },
    { type: "MCQ_SINGLE", label: "Multiple choice — single answer", description: "Traditional comprehension item.", objective: true },
    { type: "MCQ_MULTI", label: "Multiple choice — select 2", description: "Choose the two options that answer the question.", objective: true },
    { type: "SENTENCE_RECONSTRUCTION", label: "Sentence reconstruction", description: "Rebuild a grammatical sentence from scrambled parts while preserving meaning.", objective: true },
    {
      type: "LISTEN_REPEAT",
      label: "Listen and Repeat",
      description: "Listen to a sentence once, then repeat it aloud within the recording window. Marked on exact repetition.",
      objective: true,
      rubricKey: "toefl.speaking",
    },
    { type: "WRITING_TASK", label: "Academic written response", description: "Constructed response to an academic prompt.", objective: false, rubricKey: "toefl.writing" },
    {
      type: "EMAIL_WRITING",
      label: "Write an Email",
      description: "A short email responding to an everyday or campus situation.",
      objective: false,
      rubricKey: "toefl.writing",
    },
    {
      type: "DISCUSSION_TASK",
      label: "Academic Discussion",
      description: "Add your own post to an online academic discussion: state a position and react to classmates.",
      objective: false,
      rubricKey: "toefl.writing",
    },
    { type: "SPEAKING_TASK", label: "Interview speaking item", description: "Short spoken response in the interview format.", objective: false, rubricKey: "toefl.speaking" },
  ],
  sourceRefs: [
    { label: "ETS — TOEFL iBT test content", url: "https://www.ets.org/toefl/test-takers/ibt/about/content.html", retrievedAt: "2026-11-16", note: "Section structure, item counts, official task-family names (Complete the Words / Read in Daily Life / Read an Academic Passage; Listen and Choose a Response / Conversation / Announcement / Academic Talk; Build a Sentence / Write an Email / Write for an Academic Discussion; Listen and Repeat / Take an Interview) and adaptive delivery (2026 format, in force 21 Jan 2026)." },
    { label: "ETS — TOEFL iBT understanding scores", url: "https://www.ets.org/toefl/test-takers/ibt/scores/understand-scores.html", retrievedAt: "2026-11-16", note: "1–6 band scale in half-point increments since 21 Jan 2026; overall = average of the four sections rounded to the nearest half band; comparable 0–120 overall during a two-year transition period." },
    { label: "ETS — TOEFL iBT score scale update (institutions)", url: "https://www.ets.org/toefl/institutions/ibt/score-scale-update.html", retrievedAt: "2026-11-12", note: "CEFR alignment and transition-period dual reporting with the legacy 0–120 scale." },
  ],
  notes:
    "ETS does not publish raw-to-band conversion tables (official scoring is item-response based); the tables above are EnglishPath practice conversions used to give learners indicative bands.",
};

/**
 * Spec seeding follows the same workflow as the admin UI: when the desired
 * content differs from the stored latest version, a NEW version is created
 * and activated; the previously active row retires automatically (its
 * history and any attempts pinned to it are preserved). Unchanged specs
 * are left completely alone.
 */
async function seedSpecs() {
  const seeds = [ieltsAcademic, ieltsGeneral, toeflIbt];
  for (const seed of seeds) {
    const existing = await db.testSpecification.findFirst({
      where: { examKey: seed.examKey, variant: seed.variant },
      orderBy: { version: "desc" },
    });
    const payload = {
      sections: JSON.stringify(seed.sections),
      scoringModel: JSON.stringify(seed.scoringModel),
      taskTypes: JSON.stringify(seed.taskTypes),
      sourceRefs: JSON.stringify(seed.sourceRefs),
    };
    const notes = seed.notes;
    // PROMPT 55 §5 — planned re-verification date: the spec's own validity
    // window counted from its effective date. Analytics surface "review
    // due / overdue" from this field.
    const reviewDueAt = new Date(seed.effectiveDate);
    reviewDueAt.setMonth(reviewDueAt.getMonth() + seed.scoringModel.validityMonths);
    if (!existing) {
      await db.testSpecification.create({
        data: {
          examKey: seed.examKey,
          variant: seed.variant,
          name: seed.name,
          version: 1,
          status: "active",
          effectiveDate: seed.effectiveDate,
          lastReviewedAt: REVIEWED,
          reviewDueAt,
          notes,
          ...payload,
        },
      });
      console.log(`[specs] created ${seed.name} v1 (active)`);
      continue;
    }
    const unchanged =
      existing.status === "active" &&
      existing.sections === payload.sections &&
      existing.scoringModel === payload.scoringModel &&
      existing.taskTypes === payload.taskTypes &&
      existing.sourceRefs === payload.sourceRefs &&
      existing.notes === notes &&
      existing.name === seed.name &&
      Math.abs(existing.effectiveDate.getTime() - seed.effectiveDate.getTime()) < 86_400_000;
    if (unchanged) {
      // Backfill the PROMPT 55 review-due date on specs created before it
      // existed (keeps existing rows untouched otherwise).
      if (!existing.reviewDueAt) {
        await db.testSpecification.update({
          where: { id: existing.id },
          data: { reviewDueAt },
        });
      }
      console.log(`[specs] ${seed.name} v${existing.version} already current`);
      continue;
    }
    // New version: the previous active row retires, attempts keep their pin.
    const version = existing.version + 1;
    if (existing.status === "active") {
      await db.testSpecification.update({
        where: { id: existing.id },
        data: { status: "retired" },
      });
    }
    await db.testSpecification.create({
      data: {
        examKey: seed.examKey,
        variant: seed.variant,
        name: seed.name,
        version,
        status: "active",
        effectiveDate: seed.effectiveDate,
        lastReviewedAt: REVIEWED,
        reviewDueAt,
        notes,
        ...payload,
      },
    });
    console.log(
      `[specs] ${seed.name}: content changed → v${version} created and activated (v${existing.version} retired)`,
    );
  }
}

// ---------------------------------------------------------------------------
// 2. Rubrics
// ---------------------------------------------------------------------------

const RUBRICS = [
  {
    examKey: "IELTS",
    taskKey: "ielts.writing",
    title: "IELTS Writing band descriptors — full practice ladder (bands 9–1, four criteria)",
    scale: [
      { score: 9, criteria: [
        { name: "Task achievement (T1) / Task response (T2)", descriptor: "Fully satisfies every requirement of the task; a wide-ranging, well-developed response with ideas expanded and supported in detail." },
        { name: "Coherence & cohesion", descriptor: "Skilful paragraphing; cohesion is used so naturally that the writing flows effortlessly; sequencing is flawless." },
        { name: "Lexical resource", descriptor: "Wide, precise and natural vocabulary, including idiomatic items; rare slips in word choice or collocation only." },
        { name: "Grammatical range & accuracy", descriptor: "Full flexible range of structures, including sophisticated complexes; errors occur only as rare slips." },
      ] },
      { score: 8, criteria: [
        { name: "Task achievement (T1) / Task response (T2)", descriptor: "Covers all requirements of the task; the response is well developed with clear position and relevant support — a position stays consistent throughout." },
        { name: "Coherence & cohesion", descriptor: "Information and ideas are sequenced smoothly; cohesive devices are used well, with only occasional over- or under-use." },
        { name: "Lexical resource", descriptor: "Broad vocabulary used flexibly to convey precise meanings; occasional errors in word choice or spelling do not impede communication." },
        { name: "Grammatical range & accuracy", descriptor: "Wide range of structures with flexible use; the majority of sentences are error-free, and errors are minor." },
      ] },
      { score: 7, criteria: [
        { name: "Task achievement (T1) / Task response (T2)", descriptor: "Addresses all parts of the task; presents a clear position throughout, extended and supported by relevant evidence (T2) or well-selected key features (T1)." },
        { name: "Coherence & cohesion", descriptor: "Logically organised with clear progression throughout; flexible use of linkers, with occasional over- or under-use." },
        { name: "Lexical resource", descriptor: "Good range of vocabulary with attempts at less common items; occasional errors in word choice, collocation or spelling." },
        { name: "Grammatical range & accuracy", descriptor: "Variety of complex structures; frequent error-free sentences; remaining errors rarely reduce understanding." },
      ] },
      { score: 6, criteria: [
        { name: "Task achievement (T1) / Task response (T2)", descriptor: "Addresses the requirements of the task; the response is relevant with a position, but development may be uneven or conclusions unclear in places." },
        { name: "Coherence & cohesion", descriptor: "Generally well organised with a sensible overall progression; cohesive devices link ideas but are sometimes mechanical or misused." },
        { name: "Lexical resource", descriptor: "Adequate range for the task; attempts less common vocabulary but with mixed success; errors in word formation and spelling are noticeable." },
        { name: "Grammatical range & accuracy", descriptor: "Mix of simple and complex sentence forms; errors in grammar and punctuation exist but meaning is still clear." },
      ] },
      { score: 5, criteria: [
        { name: "Task achievement (T1) / Task response (T2)", descriptor: "Only partially addresses the task; format or register may be inconsistent, and key content may be thin or somewhat repetitive." },
        { name: "Coherence & cohesion", descriptor: "Some organisation is visible, but links between ideas can fail, and paragraphing may not always be logical." },
        { name: "Lexical resource", descriptor: "Limited but serviceable range; noticeable repetition; errors in word choice and spelling are frequent enough to strain the reader." },
        { name: "Grammatical range & accuracy", descriptor: "Limited range of structures; attempts complex sentences often go wrong; simple sentences are mostly accurate." },
      ] },
      { score: 4, criteria: [
        { name: "Task achievement (T1) / Task response (T2)", descriptor: "Attempts the task but does not adequately cover it; much of the content may be irrelevant, thin or hard to follow." },
        { name: "Coherence & cohesion", descriptor: "Some information is present but the overall progression is unclear; linking devices are rare, wrong or repetitive." },
        { name: "Lexical resource", descriptor: "Very basic vocabulary, often repeated; errors in word choice and spelling are frequent and can obscure meaning." },
        { name: "Grammatical range & accuracy", descriptor: "Very few sentence forms; even simple structures carry frequent errors; errors regularly impede meaning." },
      ] },
      { score: 3, criteria: [
        { name: "Task achievement (T1) / Task response (T2)", descriptor: "Does not adequately address the task; little relevant content reaches the reader." },
        { name: "Coherence & cohesion", descriptor: "Little or no apparent organisation; the reader has to work hard to find any thread." },
        { name: "Lexical resource", descriptor: "Extremely limited vocabulary; errors dominate and meaning frequently collapses." },
        { name: "Grammatical range & accuracy", descriptor: "Attempts simple structures that fail as often as they succeed." },
      ] },
      { score: 2, criteria: [
        { name: "Task achievement (T1) / Task response (T2)", descriptor: "The response is barely related to the task; almost none of the required content is present." },
        { name: "Coherence & cohesion", descriptor: "Very little control of organisation; text is a loose sequence of fragments rather than a message." },
        { name: "Lexical resource", descriptor: "An extremely limited range of words; spelling and word formation show essentially no control." },
        { name: "Grammatical range & accuracy", descriptor: "Sentence forms appear only as isolated phrases; no reliable control of even simple structures." },
      ] },
      { score: 1, criteria: [
        { name: "Task achievement (T1) / Task response (T2)", descriptor: "The response is completely unrelated to the task." },
        { name: "Coherence & cohesion", descriptor: "Fails to communicate any message." },
        { name: "Lexical resource", descriptor: "Only isolated words or memorised phrases; nothing rateable beyond them." },
        { name: "Grammatical range & accuracy", descriptor: "Cannot use sentence forms at all." },
      ] },
    ],
    sourceRefs: [
      { label: "IELTS — understand your score (public band descriptors)", url: "https://ielts.org/take-a-test/your-results/understand-your-ielts-score" },
    ],
  },
  {
    examKey: "IELTS",
    taskKey: "ielts.speaking",
    title: "IELTS Speaking band descriptors — full practice ladder (bands 9–1, four criteria)",
    scale: [
      { score: 9, criteria: [
        { name: "Fluency & coherence", descriptor: "Speaks effortlessly and at natural length; ideas are developed fully with natural, sophisticated cohesion." },
        { name: "Lexical resource", descriptor: "Precise, idiomatic vocabulary used flexibly and effectively on any topic." },
        { name: "Grammatical range & accuracy", descriptor: "Full flexible range of structures, used consistently accurately." },
        { name: "Pronunciation", descriptor: "Effortless to understand throughout; intonation and stress are precise and convey subtle meaning." },
      ] },
      { score: 8, criteria: [
        { name: "Fluency & coherence", descriptor: "Speaks smoothly with little searching for language; develops topics coherently and at length." },
        { name: "Lexical resource", descriptor: "Broad, precise vocabulary including less common and idiomatic items; occasional small slips only." },
        { name: "Grammatical range & accuracy", descriptor: "Wide range of structures flexibly used; most sentences are error-free and slips are minor." },
        { name: "Pronunciation", descriptor: "Clear throughout; a full range of pronunciation features is used, with occasional lapses." },
      ] },
      { score: 7, criteria: [
        { name: "Fluency & coherence", descriptor: "Speaks at length without noticeable effort or loss of coherence; links ideas logically." },
        { name: "Lexical resource", descriptor: "Uses vocabulary flexibly, including some less common and idiomatic items; occasional inaccuracies in word choice." },
        { name: "Grammatical range & accuracy", descriptor: "Range of complex structures with frequent accuracy; errors are minor and rarely obscure meaning." },
        { name: "Pronunciation", descriptor: "Clear throughout; shows a range of pronunciation features though not always fully controlled." },
      ] },
      { score: 6, criteria: [
        { name: "Fluency & coherence", descriptor: "Willing to speak at length but repetition or self-correction and slower linking sometimes give away effort; a range of connectives is used, not always naturally." },
        { name: "Lexical resource", descriptor: "Enough vocabulary for detail on familiar and some unfamiliar topics; meaning is clear though flexibility is limited." },
        { name: "Grammatical range & accuracy", descriptor: "Mix of simple and complex forms with reasonable accuracy; complex attempts carry errors that rarely block meaning." },
        { name: "Pronunciation", descriptor: "Generally clear; some sounds or stress patterns require occasional listener effort." },
      ] },
      { score: 5, criteria: [
        { name: "Fluency & coherence", descriptor: "Usually keeps going but relies on prepared phrases, repetition and self-correction; progress is slow on less familiar topics." },
        { name: "Lexical resource", descriptor: "Adequate for familiar topics; struggles to paraphrase unfamiliar material." },
        { name: "Grammatical range & accuracy", descriptor: "Mostly basic sentence forms with reasonable control; limited range, errors are frequent on anything complex." },
        { name: "Pronunciation", descriptor: "Generally intelligible; noticeable effort needed from the listener at times." },
      ] },
      { score: 4, criteria: [
        { name: "Fluency & coherence", descriptor: "Frequent long pauses and restarts; connects ideas only in the simplest way." },
        { name: "Lexical resource", descriptor: "Simple vocabulary used with limited success; cannot usually paraphrase." },
        { name: "Grammatical range & accuracy", descriptor: "Basic forms only; errors are frequent and often make the message hard to follow." },
        { name: "Pronunciation", descriptor: "Often hard to understand; first-language features are strong." },
      ] },
      { score: 3, criteria: [
        { name: "Fluency & coherence", descriptor: "Only simple connected speech; pauses dominate." },
        { name: "Lexical resource", descriptor: "Very limited vocabulary; frequent breakdowns in meaning." },
        { name: "Grammatical range & accuracy", descriptor: "Basic structures attempted with frequent failure." },
        { name: "Pronunciation", descriptor: "Frequently unintelligible." },
      ] },
      { score: 2, criteria: [
        { name: "Fluency & coherence", descriptor: "Speaks with long pauses; has limited ability to link even simple sentences; responses are minimal." },
        { name: "Lexical resource", descriptor: "Enough isolated words for basic needs; paraphrase is not attempted." },
        { name: "Grammatical range & accuracy", descriptor: "Produces basic sentence forms with some success, but any complexity causes breakdown." },
        { name: "Pronunciation", descriptor: "Speech is often unintelligible; heavy first-language influence throughout." },
      ] },
      { score: 1, criteria: [
        { name: "Fluency & coherence", descriptor: "No communication is possible; no rateable flow of speech." },
        { name: "Lexical resource", descriptor: "Isolated words or memorised phrases only." },
        { name: "Grammatical range & accuracy", descriptor: "No rateable control of sentence forms." },
        { name: "Pronunciation", descriptor: "Speech cannot be assessed beyond isolated sounds." },
      ] },
    ],
    sourceRefs: [
      { label: "IELTS — understand your score (public band descriptors)", url: "https://ielts.org/take-a-test/your-results/understand-your-ielts-score" },
    ],
  },
  {
    examKey: "TOEFL_IBT",
    taskKey: "toefl.writing",
    title: "TOEFL iBT writing rubric — 1–6 band scale (summary)",
    scale: [
      { score: 6, criteria: [
        { name: "Development", descriptor: "Ideas fully developed with relevant support and detail." },
        { name: "Organization", descriptor: "Clear, logical progression; unified and cohesive." },
        { name: "Language use", descriptor: "Effective, varied vocabulary and grammar; occasional minor errors." },
      ] },
      { score: 5, criteria: [
        { name: "Development", descriptor: "Well developed with mostly relevant support." },
        { name: "Organization", descriptor: "Generally well organized with clear connections." },
        { name: "Language use", descriptor: "Good control of language; errors do not obscure meaning." },
      ] },
      { score: 4, criteria: [
        { name: "Development", descriptor: "Adequately developed; some elaboration." },
        { name: "Organization", descriptor: "Recognizable organization despite some lapses." },
        { name: "Language use", descriptor: "Fair control; errors noticeable but meaning clear." },
      ] },
      { score: 3, criteria: [
        { name: "Development", descriptor: "Partly developed; limited support." },
        { name: "Organization", descriptor: "Some organization; connections often unclear." },
        { name: "Language use", descriptor: "Limited range; errors sometimes obscure meaning." },
      ] },
      { score: 2, criteria: [
        { name: "Development", descriptor: "Little development; mostly vague statements." },
        { name: "Organization", descriptor: "Rarely organized; ideas disconnected." },
        { name: "Language use", descriptor: "Very limited control; errors frequently obscure meaning." },
      ] },
      { score: 1, criteria: [
        { name: "Development", descriptor: "Almost no development of the topic." },
        { name: "Organization", descriptor: "No apparent organization." },
        { name: "Language use", descriptor: "Language mostly incomprehensible or irrelevant." },
      ] },
    ],
    sourceRefs: [{ label: "ETS — TOEFL iBT scoring (writing)", url: "https://www.ets.org/toefl/test-takers/ibt/scores/understand-scores.html" }],
  },
  {
    examKey: "TOEFL_IBT",
    taskKey: "toefl.speaking",
    title: "TOEFL iBT interview speaking rubric — 1–6 band scale (summary)",
    scale: [
      { score: 6, criteria: [
        { name: "Delivery", descriptor: "Smooth, effortless flow; clear speech throughout." },
        { name: "Language use", descriptor: "Effective word choice and varied structures." },
        { name: "Topic development", descriptor: "Responses fully address the item with clear support." },
      ] },
      { score: 5, criteria: [
        { name: "Delivery", descriptor: "Generally smooth delivery; occasional hesitation or repetition does not obscure meaning." },
        { name: "Language use", descriptor: "Fairly effective word choice; good control of both simple and common complex structures." },
        { name: "Topic development", descriptor: "Responses are complete and relevant, with mostly appropriate elaboration." },
      ] },
      { score: 4, criteria: [
        { name: "Delivery", descriptor: "Mostly clear; minor pauses do not impede understanding." },
        { name: "Language use", descriptor: "Generally effective; some errors remain." },
        { name: "Topic development", descriptor: "Responses mostly complete and relevant." },
      ] },
      { score: 3, criteria: [
        { name: "Delivery", descriptor: "Understandable but requires listener effort." },
        { name: "Language use", descriptor: "Basic structures and vocabulary mostly controlled." },
        { name: "Topic development", descriptor: "Ideas present but thinly elaborated." },
      ] },
      { score: 2, criteria: [
        { name: "Delivery", descriptor: "Frequent breakdowns in speech." },
        { name: "Language use", descriptor: "Limited accuracy; meaning often obscured." },
        { name: "Topic development", descriptor: "Little relevant content." },
      ] },
      { score: 1, criteria: [
        { name: "Delivery", descriptor: "Very hard to understand or no response." },
        { name: "Language use", descriptor: "Insufficient language to evaluate." },
        { name: "Topic development", descriptor: "No relevant response to the item." },
      ] },
    ],
    sourceRefs: [{ label: "ETS — TOEFL iBT scoring (speaking)", url: "https://www.ets.org/toefl/test-takers/ibt/scores/understand-scores.html" }],
  },
];

async function seedRubrics() {
  for (const rubric of RUBRICS) {
    await db.examRubric.upsert({
      where: { examKey_taskKey: { examKey: rubric.examKey, taskKey: rubric.taskKey } },
      create: {
        examKey: rubric.examKey,
        taskKey: rubric.taskKey,
        title: rubric.title,
        scale: JSON.stringify(rubric.scale),
        sourceRefs: JSON.stringify(rubric.sourceRefs),
      },
      update: {
        title: rubric.title,
        scale: JSON.stringify(rubric.scale),
        sourceRefs: JSON.stringify(rubric.sourceRefs),
      },
    });
  }
  console.log(`[rubrics] ${RUBRICS.length} rubrics upserted`);
}

// ---------------------------------------------------------------------------
// 3. Mock tests (ORIGINAL practice content — not official questions)
// ---------------------------------------------------------------------------

type QuestionSeed = {
  order: number;
  type: string;
  stem?: string;
  payload: unknown;
  answer?: unknown;
  points?: number;
  skills?: string[];
  /** 1-5, 1 = foundation (A2-B1) … 5 = advanced (C1-C2). */
  difficulty?: number;
  /** Post-submission teaching note for this item. */
  explanation?: string;
  /** Provenance of the item. */
  source?: string;
  /** draft | in-review | published. */
  contentStatus?: string;
  /** PROMPT 44: audio-part group — questions sharing a group hear one
   *  section-level recording (used by the listening simulations). */
  group?: string;
};

type SectionSeed = {
  key: string;
  title: string;
  directions?: string;
  timingSec: number;
  questions: QuestionSeed[];
  /** PROMPT 44: part-level recordings for listening simulations. */
  audioParts?: Array<{ key: string; label: string; script: string; directions?: string }>;
};

type MockSeed = {
  examKey: string;
  variant: string;
  title: string;
  kind: string;
  lengthLabel: string;
  description: string;
  sections: SectionSeed[];
};

// ---- IELTS Academic sample mock -------------------------------------------

const IELTS_READING_PASSAGE = `The Return of the Urban Bee

For most of the twentieth century, cities were considered biological deserts for pollinators. Yet recent surveys across European and North American cities have found bee species richness that rivals, and sometimes exceeds, that of the surrounding countryside. In Berlin, researchers counted over 260 wild bee species within the city limits — more than were recorded in the agricultural land beyond its suburbs.

The explanation lies partly in how modern agriculture has changed. Intensive rural landscapes now tend to be dominated by a single crop, which flowers for only a short window each year. Urban environments, by contrast, are mosaics: private gardens, balconies, parks, railway embankments and abandoned lots each host different plants, so nectar and pollen are available from early spring to late autumn. A study in Melbourne found that the average suburban garden offered a far longer flowering season than any nearby farm.

Cities are also, unexpectedly, safer. Pesticide use is lower in parks and gardens than on commercial farmland, and urban temperatures run one or two degrees warmer, extending the season for cold-sensitive species. Honeybees kept by city beekeepers consistently produce more honey per hive than their rural counterparts.

There are limits, however. Ground-nesting bees — roughly three quarters of all wild species — struggle in cities, where bare soil is scarce and heavily compacted. Urban conservation programmes therefore increasingly focus on leaving unmown strips and sandy banks in parks rather than simply planting more flowers. The urban bee, it turns out, is not one story but many.`;

const ieltsMock: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "IELTS Academic Sample Mock 1",
  kind: "full",
  lengthLabel: "sample",
  description:
    "A four-section sample-length simulation: shortened Listening, Reading, Writing and Speaking sections with official timings per section. Original EnglishPath practice material — not an official IELTS test.",
  sections: [
    {
      key: "listening",
      title: "Listening (sample: Parts 1–2)",
      directions:
        "You will hear a library membership conversation (Part 1) and a museum announcement (Part 2). Use the audio player to hear each recording once, then answer. Official time: 30 minutes for 40 questions; this sample has 6 questions.",
      timingSec: 1800,
      questions: [
        {
          order: 1,
          type: "FILL_BLANK",
          stem: "Questions 1–3. Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            context: "Greenfield Library — new membership form\nFull name: Marta Nowak\nAddress: 42 ___ Avenue, Greenfield\nPhone: 07___ 515 882 (mobile)\nProof of identity: ___ and a utility bill",
            blanks: [
              { answer: "Birchwood", alternatives: ["birch wood"] },
              { answer: "9", alternatives: ["nine"], numbers: true },
              { answer: "passport", alternatives: [] },
            ],
            words: 3,
          },
          answer: { blanks: [{ answer: "Birchwood" }, { answer: "9", numbers: true }, { answer: "passport" }] },
          points: 3,
          skills: ["detail", "spelling", "numbers"],
          ...{},
        },
        {
          order: 2,
          type: "MCQ_SINGLE",
          stem: "Question 4. Choose the correct letter, A, B or C.",
          payload: {
            passage: "",
            audioScript:
              "WOMAN: The standard membership is free, but you'll need to bring two documents. The premium membership costs twelve pounds a year and lets you borrow up to ten items at a time — standard members can borrow four.",
            options: [
              "Standard members may borrow four items at a time.",
              "Premium membership costs twelve pounds a month.",
              "The woman is applying for premium membership.",
            ],
          },
          answer: { option: 0 },
          skills: ["detail"],
        },
        {
          order: 3,
          type: "MCQ_SINGLE",
          stem: "Question 5. Choose the correct letter, A, B or C.",
          payload: {
            audioScript:
              "Welcome to the Riverdale Museum. The new bee exhibition, which opened last Tuesday, runs until the end of next month. Guided tours leave from the main hall every hour on the hour — but please note there is no 2 p.m. tour on Sundays.",
            options: [
              "The bee exhibition closes next Tuesday.",
              "Tours run every hour including 2 p.m. on Sundays.",
              "The exhibition is still open for at least several weeks.",
            ],
          },
          answer: { option: 2 },
          skills: ["detail", "paraphrase"],
        },
        {
          order: 4,
          type: "FILL_BLANK",
          stem: "Question 6. Complete the sentence below. Write ONE WORD ONLY.",
          payload: {
            context: "School groups must book the workshop at least ___ days in advance.",
            blanks: [{ answer: "ten", alternatives: ["10"], numbers: true }],
            words: 1,
          },
          answer: { blanks: [{ answer: "ten", numbers: true }] },
          skills: ["numbers", "detail"],
        },
      ],
    },
    {
      key: "reading",
      title: "Academic Reading (sample: 1 passage)",
      directions:
        "Read the passage and answer questions 1–8. Official time: 60 minutes for 40 questions over three passages; this sample has one passage.",
      timingSec: 3600,
      questions: [
        {
          order: 1,
          type: "MCQ_SINGLE",
          stem: "Question 1. Choose the correct letter, A, B, C or D.",
          payload: {
            passage: IELTS_READING_PASSAGE,
            options: [
              "Rural farmland usually offers flowers for longer than suburban gardens.",
              "Berlin has more wild bee species than the farmland around it.",
              "Modern farms grow several crops that flower at different times.",
              "City beekeepers harvest less honey per hive than rural ones.",
            ],
          },
          answer: { option: 1 },
          skills: ["detail", "main-idea"],
        },
        {
          order: 2,
          type: "MCQ_SINGLE",
          stem: "Question 2. Choose the correct letter, A, B, C or D.",
          payload: {
            options: [
              "Warmer urban temperatures shorten the flowering season.",
              "Pesticides are used more heavily in parks than on farms.",
              "Urban warmth can help cold-sensitive species stay active longer.",
              "Cities are colder than the surrounding countryside in summer.",
            ],
          },
          answer: { option: 2 },
          skills: ["inference"],
        },
        {
          order: 3,
          type: "TFNG",
          stem: "Questions 3–5. Do the following statements agree with the information in the passage?",
          payload: {
            statement: "Ground-nesting bees make up about three quarters of wild bee species.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 0 },
          skills: ["detail"],
        },
        {
          order: 4,
          type: "TFNG",
          payload: {
            statement: "The Melbourne study showed farm flowering seasons were longer than garden seasons.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 1 },
          skills: ["detail", "paraphrase"],
        },
        {
          order: 5,
          type: "TFNG",
          payload: {
            statement: "Berlin's bee population has doubled since 2000.",
            labels: ["True", "False", "Not Given"],
          },
          answer: { value: 2 },
          skills: ["detail"],
        },
        {
          order: 6,
          type: "MATCHING",
          stem: "Question 6. Which paragraph contains the following information? Choose ONE paragraph (A–D) for the statement.",
          payload: {
            prompt: "A reason why cities can support bees across a long season.",
            items: [{ id: "s1", text: "Different planted spaces flower at different times." }],
            options: [
              { id: "A", text: "Paragraph A (introduction and Berlin survey)" },
              { id: "B", text: "Paragraph B (urban mosaics vs single crops)" },
              { id: "C", text: "Paragraph C (city safety and warmth)" },
              { id: "D", text: "Paragraph D (limits and ground-nesters)" },
            ],
          },
          answer: { pairs: { s1: "B" } },
          skills: ["scan", "detail"],
        },
        {
          order: 7,
          type: "FILL_BLANK",
          stem: "Questions 7–8. Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.",
          payload: {
            context:
              "Urban conservation now favours leaving strips of unmown grass and ___ banks rather than only planting more flowers, because most wild bees nest in the ___ , which cities rarely leave bare.",
            blanks: [
              { answer: "sandy", alternatives: [] },
              { answer: "ground", alternatives: ["soil"] },
            ],
            words: 1,
          },
          answer: { blanks: [{ answer: "sandy" }, { answer: "ground" }] },
          points: 2,
          skills: ["paraphrase", "detail"],
        },
      ],
    },
    {
      key: "writing",
      title: "Academic Writing (Tasks 1–2)",
      directions:
        "You have 60 minutes for both tasks. Spend about 20 minutes on Task 1 and 40 minutes on Task 2. Task 2 carries twice the weight.",
      timingSec: 3600,
      questions: [
        {
          order: 1,
          type: "WRITING_TASK",
          payload: {
            prompt:
              "The table below shows the number of bicycle-sharing trips (in millions) taken in four cities during 2022 and 2024. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
            supporting:
              "City | 2022 | 2024\nAmsterdam | 4.1 | 4.6\nParis | 6.8 | 9.3\nSeoul | 2.5 | 6.1\nToronto | 1.2 | 1.9\n(Average daily hire time: 14 min in 2022, 19 min in 2024)",
            minWords: 150,
            suggestedMinutes: 20,
            rubricKey: "ielts.writing",
            part: "Task 1 — describing a table",
          },
          points: 0,
          skills: ["task-response", "coherence", "grammar", "lexical"],
        },
        {
          order: 2,
          type: "WRITING_TASK",
          payload: {
            prompt:
              "Some people believe that a university education should be free for everyone because society benefits from educated citizens. Others argue that students should pay at least part of the cost. Discuss both views and give your own opinion.",
            minWords: 250,
            suggestedMinutes: 40,
            rubricKey: "ielts.writing",
            part: "Task 2 — discursive essay",
          },
          points: 0,
          skills: ["task-response", "coherence", "grammar", "lexical"],
        },
      ],
    },
    {
      key: "speaking",
      title: "Speaking (Parts 1–3)",
      directions:
        "This sample records your answers as notes and grades them against the speaking band descriptors. In the real test you speak to an examiner for 11–14 minutes.",
      timingSec: 900,
      questions: [
        {
          order: 1,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 1 — Let's talk about where you live. Do you live in a house or an apartment? What do you like about the area? Would you like to move somewhere else in the future?",
            prepSec: 0,
            speakSec: 90,
            rubricKey: "ielts.speaking",
            part: "Part 1 — introduction and interview",
          },
          points: 0,
          skills: ["fluency", "vocabulary"],
        },
        {
          order: 2,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 2 — Describe a skill you learned outside school or work. You should say: what the skill is, why you decided to learn it, how you learned it, and how you feel about it now. You have 1 minute to prepare and should speak for 1–2 minutes.",
            prepSec: 60,
            speakSec: 120,
            rubricKey: "ielts.speaking",
            part: "Part 2 — individual long turn",
          },
          points: 0,
          skills: ["fluency", "coherence", "vocabulary"],
        },
        {
          order: 3,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Part 3 — Should practical skills be taught alongside academic subjects? Why do some adults stop learning new skills? Does technology make learning skills easier or lazier?",
            prepSec: 10,
            speakSec: 120,
            rubricKey: "ielts.speaking",
            part: "Part 3 — two-way discussion",
          },
          points: 0,
          skills: ["fluency", "coherence", "grammar"],
        },
      ],
    },
  ],
};

// ---- TOEFL iBT sample mock (2026 format) -----------------------------------

const TOEFL_READING_PASSAGE = `Sleep and the Sorting Brain

For decades, scientists viewed sleep as a passive shutdown. Modern research paints a very different picture: while you sleep, your brain is intensely busy filing the day's experiences. During deep sleep, a slow electrical rhythm sweeps across the cortex about once per second. Each wave appears to move memories out of the hippocampus — the brain's temporary storage area — into the cortex, where they become part of long-term knowledge.

The process is selective. In one experiment, students who slept after studying a list of words remembered emotionally significant words better than neutral ones. Sleep, it seems, tags what matters. A separate finding is even more striking: the brain replays the day's events at high speed during dreaming sleep, almost like a coach reviewing game footage.

This research has practical consequences. Students who sacrifice sleep before an exam may be cutting the very hours in which learning is consolidated. Rather than an extra hour of revision, the evidence suggests, the last thing a well-prepared brain needs is a full night of rest.`;

const toeflMock: MockSeed = {
  examKey: "TOEFL_IBT",
  variant: "STANDARD",
  title: "TOEFL iBT Sample Mock 1 (2026 format)",
  kind: "full",
  lengthLabel: "sample",
  description:
    "A four-section sample-length simulation of the TOEFL iBT 2026 format: Complete-the-Words and comprehension reading, listen-and-choose items, interview speaking, and sentence reconstruction plus an academic response. Original EnglishPath practice material — not an official ETS test.",
  sections: [
    {
      key: "reading",
      title: "Reading (sample: 1 passage)",
      directions:
        "Read the passage. Items 1–3 are Complete-the-Words; items 4–7 are comprehension questions; item 8 asks you to select two answers. Official section: up to ~30 minutes, up to 50 items (two-stage adaptive).",
      timingSec: 1800,
      questions: [
        {
          order: 1,
          type: "COMPLETE_WORDS",
          stem: "Items 1–3. Complete the words using context from the passage.",
          payload: {
            context:
              "The passage says that during deep sleep a slow electrical rhythm sweeps across the c___ once per second, moving memories out of the hipp___ , the brain's temporary st___ area.",
            words: [
              { masked: "c___", answer: "cortex" },
              { masked: "hipp___", answer: "hippocampus" },
              { masked: "st___", answer: "storage" },
            ],
          },
          answer: { words: ["cortex", "hippocampus", "storage"], answer: "cortex hippocampus storage" },
          points: 3,
          skills: ["academic-vocab", "context"],
        },
        {
          order: 2,
          type: "MCQ_SINGLE",
          stem: "Item 4.",
          payload: {
            passage: TOEFL_READING_PASSAGE,
            options: [
              "The hippocampus stores memories permanently.",
              "Slow cortical waves appear to move memories toward the cortex.",
              "Dreaming sleep happens before deep sleep.",
              "The brain is inactive during deep sleep.",
            ],
          },
          answer: { option: 1 },
          skills: ["detail"],
        },
        {
          order: 3,
          type: "MCQ_SINGLE",
          stem: "Item 5. According to paragraph 3, what does the evidence suggest students should do before an exam?",
          payload: {
            options: [
              "Revise all night.",
              "Review notes during deep sleep.",
              "Get a full night of sleep.",
              "Study emotionally neutral words.",
            ],
          },
          answer: { option: 2 },
          skills: ["inference", "paraphrase"],
        },
        {
          order: 4,
          type: "MCQ_SINGLE",
          stem: "Item 6. Which sentence best expresses the essential information in the sentence 'Sleep, it seems, tags what matters.'?",
          payload: {
            options: [
              "Sleep labels important information for later retention.",
              "Sleep causes students to forget emotional events.",
              "Sleeping brains cannot distinguish word lists.",
              "Tags are attached to dreams during experiments.",
            ],
          },
          answer: { option: 0 },
          skills: ["paraphrase", "main-idea"],
        },
        {
          order: 5,
          type: "MCQ_MULTI",
          stem: "Item 7. Select the TWO findings described in the passage. Choose 2 answers.",
          payload: {
            options: [
              "The brain replays daily events quickly during dreaming sleep.",
              "Students who sleep remember neutral words better than emotional ones.",
              "A slow rhythm crosses the cortex roughly once per second in deep sleep.",
              "Caffeine improves memory consolidation.",
            ],
            choose: 2,
          },
          answer: { options: [0, 2] },
          points: 2,
          skills: ["detail", "main-idea"],
        },
      ],
    },
    {
      key: "listening",
      title: "Listening (sample: 1 conversation, 1 lecture)",
      directions:
        "Listen to each recording once and answer. Official section: up to ~29 minutes, up to 47 items (two-stage adaptive).",
      timingSec: 1740,
      questions: [
        {
          order: 1,
          type: "MCQ_SINGLE",
          stem: "Conversation — Item 1. Why does the student go to the registrar's office?",
          payload: {
            audioScript:
              "STUDENT: Hi — I need to switch my Tuesday chemistry lab to the Thursday section. My schedule changed at work. REGISTRAR: I can do that, but Thursday labs meet at 8 a.m. — the only slot with space left. You'll also need your advisor to approve the change in the portal first.",
            options: [
              "To complain about his chemistry grade",
              "To change his lab section",
              "To apply for a job",
              "To meet his advisor",
            ],
          },
          answer: { option: 1 },
          skills: ["main-idea"],
        },
        {
          order: 2,
          type: "MCQ_SINGLE",
          stem: "Conversation — Item 2. What must the student do before the change is made?",
          payload: {
            options: [
              "Get advisor approval in the portal",
              "Pay a lab change fee",
              "Email the chemistry professor",
              "Attend the 8 a.m. lab once",
            ],
          },
          answer: { option: 0 },
          skills: ["detail"],
        },
        {
          order: 3,
          type: "MCQ_SINGLE",
          stem: "Lecture — Item 3. What is the lecture mainly about?",
          payload: {
            audioScript:
              "PROFESSOR: Today we're looking at camouflage in the open ocean. Unlike coral reefs, the open ocean has nowhere to hide. So midwater animals use a strategy called countershading: dark on top, light below. From above, the dark back blends with the deep; from below, the pale belly blends with the bright surface. Some squid go further — they host light-producing bacteria that exactly match the down-welling light, erasing their silhouette entirely.",
            options: [
              "How coral reef fish find shelter",
              "Countershading and bioluminescence in open-ocean animals",
              "The hunting habits of squid",
              "How bacteria produce light in the deep sea",
            ],
          },
          answer: { option: 1 },
          skills: ["main-idea", "academic-vocab"],
        },
        {
          order: 4,
          type: "MCQ_SINGLE",
          stem: "Lecture — Item 4. Why does the professor mention squid?",
          payload: {
            options: [
              "To compare reef and open-ocean camouflage",
              "To give an example of an animal that erases its silhouette using light",
              "To argue that countershading is inefficient",
              "To describe the squid's hunting strategy",
            ],
          },
          answer: { option: 1 },
          skills: ["organization", "inference"],
        },
      ],
    },
    {
      key: "writing",
      title: "Writing (sample: sentence reconstruction + 1 academic response)",
      directions:
        "Official section: ~23 minutes, 12 items — 10 sentence-reconstruction items and 2 academic responses. This sample has 3 reconstruction items and 1 response.",
      timingSec: 1380,
      questions: [
        {
          order: 1,
          type: "SENTENCE_RECONSTRUCTION",
          stem: "Item 1. Reconstruct the sentence: preserve the original meaning with correct grammar.",
          payload: {
            cue: "Original: The findings suggest that sleep is essential for memory.",
            scrambled: ["memory", "essential", "the findings", "is essential for", "suggest that", "sleep", "is", "for memory"],
            answer: "the findings suggest that sleep is essential for memory",
          },
          answer: { text: "the findings suggest that sleep is essential for memory", answer: "the findings suggest that sleep is essential for memory" },
          points: 2,
          skills: ["sentence", "grammar"],
        },
        {
          order: 2,
          type: "SENTENCE_RECONSTRUCTION",
          stem: "Item 2. Reconstruct the sentence.",
          payload: {
            cue: "Original: Students who cut sleep before exams may harm their results.",
            scrambled: ["students", "before exams", "may harm", "who cut sleep", "their results", "may", "harm"],
            answer: "students who cut sleep before exams may harm their results",
          },
          answer: { text: "students who cut sleep before exams may harm their results", answer: "students who cut sleep before exams may harm their results" },
          points: 2,
          skills: ["sentence", "grammar"],
        },
        {
          order: 3,
          type: "SENTENCE_RECONSTRUCTION",
          stem: "Item 3. Reconstruct the sentence.",
          payload: {
            cue: "Original: Open-ocean animals cannot hide behind rocks or reefs.",
            scrambled: ["animals", "cannot", "behind rocks or reefs", "open-ocean", "hide", "open-ocean animals", "hide behind"],
            answer: "open-ocean animals cannot hide behind rocks or reefs",
          },
          answer: { text: "open-ocean animals cannot hide behind rocks or reefs", answer: "open-ocean animals cannot hide behind rocks or reefs" },
          points: 2,
          skills: ["sentence", "grammar"],
        },
        {
          order: 4,
          type: "WRITING_TASK",
          payload: {
            prompt:
              "Writing for an academic discussion. Professor Cruz asks: 'Should universities replace some final exams with continuous assessment projects?' Student A argues projects measure real understanding better than one-off exams. Student B argues exams guarantee fairness and comparability across students. Write your own response to the discussion: state your position clearly, support it with reasons, and react to at least one of the students' points.",
            supporting:
              "Student A (Mei): 'Projects show what we can actually do with knowledge — exams just show memorisation under pressure.'\nStudent B (Daniel): 'Projects can be unfair — group work and outside help blur who did the work. Exams are the same for everyone.'",
            minWords: 100,
            suggestedMinutes: 10,
            rubricKey: "toefl.writing",
            part: "Academic discussion response",
          },
          points: 0,
          skills: ["task-response", "coherence", "grammar", "lexical"],
        },
      ],
    },
    {
      key: "speaking",
      title: "Speaking (sample: interview items)",
      directions:
        "Official section: ~8 minutes, 11 short interview items. This sample has 3 items. Prepare briefly, then record your response (your notes/transcript will be graded against the interview rubric).",
      timingSec: 480,
      questions: [
        {
          order: 1,
          type: "SPEAKING_TASK",
          payload: {
            prompt: "Describe a place you visited that made a strong impression on you. What did you see, and why did it impress you?",
            prepSec: 15,
            speakSec: 45,
            rubricKey: "toefl.speaking",
            part: "Interview item 1 — personal experience",
          },
          points: 0,
          skills: ["fluency", "vocabulary"],
        },
        {
          order: 2,
          type: "SPEAKING_TASK",
          payload: {
            prompt: "Some people prefer to plan every detail of a trip; others prefer to decide as they go. Which approach do you prefer, and why?",
            prepSec: 15,
            speakSec: 45,
            rubricKey: "toefl.speaking",
            part: "Interview item 2 — opinion",
          },
          points: 0,
          skills: ["fluency", "coherence"],
        },
        {
          order: 3,
          type: "SPEAKING_TASK",
          payload: {
            prompt: "A friend asks you to explain, briefly, why sleep matters for studying. Summarize the key idea in your own words.",
            prepSec: 20,
            speakSec: 45,
            rubricKey: "toefl.speaking",
            part: "Interview item 3 — summarize",
          },
          points: 0,
          skills: ["coherence", "paraphrase"],
        },
      ],
    },
  ],
};

// ---- TOEFL Speaking section mock (2026 format: Listen and Repeat + interview) ----

const toeflSpeakingMock2026: MockSeed = {
  examKey: "TOEFL_IBT",
  variant: "STANDARD",
  title: "TOEFL Speaking Section Mock (2026 format) 1",
  kind: "section",
  lengthLabel: "sample",
  description:
    "Full-length Speaking simulation of the 2026 format: seven Listen-and-Repeat sentences with the official 8/10/12-second windows, then a four-question interview. Original EnglishPath practice material — not an official ETS test.",
  sections: [
    {
      key: "speaking",
      title: "Speaking (2026 format: full 11 items)",
      directions:
        "Official: about 8 minutes, 11 items — 7 Listen-and-Repeat sentences (8-second windows for items 1–2, 10 seconds for 3–5, 12 seconds for 6–7), then a 4-question interview. Listen once, repeat aloud within the window, then type what you said so it can be marked. Interviews are rubric-graded.",
      timingSec: 480,
      questions: [
        {
          order: 1,
          type: "LISTEN_REPEAT",
          stem: "Item 1. Listen and repeat (8-second window).",
          payload: { sentence: "The library opens at eight on weekdays.", windowSec: 8 },
          answer: { text: "The library opens at eight on weekdays." },
          points: 5,
          skills: ["delivery", "pronunciation"],
          difficulty: 2,
          explanation:
            "The recording says 'The library opens at eight on weekdays.' Repetition is marked on exact wording — 'at eight' not 'at 8 a.m.' — and the window is 8 seconds, so answer as soon as the audio ends.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 2,
          type: "LISTEN_REPEAT",
          stem: "Item 2. Listen and repeat (8-second window).",
          payload: { sentence: "I'd like to change my flight to Friday morning.", windowSec: 8 },
          answer: { text: "I'd like to change my flight to Friday morning." },
          points: 5,
          skills: ["delivery", "pronunciation"],
          difficulty: 2,
          explanation:
            "Correct: 'I'd like to change my flight to Friday morning.' The contraction 'I'd' must be there — 'I would' also matches in sound, but the day marker 'Friday morning' is the part most often dropped.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 3,
          type: "LISTEN_REPEAT",
          stem: "Item 3. Listen and repeat (10-second window).",
          payload: { sentence: "Could you tell me where the registrar's office is?", windowSec: 10 },
          answer: { text: "Could you tell me where the registrar's office is?" },
          points: 5,
          skills: ["delivery", "pronunciation", "grammar"],
          difficulty: 3,
          explanation:
            "Correct: 'Could you tell me where the registrar's office is?' The indirect question keeps statement order ('where the registrar's office is'), not question order — that embedded word order is the point of this item.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 4,
          type: "LISTEN_REPEAT",
          stem: "Item 4. Listen and repeat (10-second window).",
          payload: { sentence: "The experiment failed because the samples were contaminated.", windowSec: 10 },
          answer: { text: "The experiment failed because the samples were contaminated." },
          points: 5,
          skills: ["delivery", "academic-vocab"],
          difficulty: 3,
          explanation:
            "Correct: 'The experiment failed because the samples were contaminated.' 'Contaminated' carries the causal chain; repeating 'were dirty' instead loses the technical word the section is testing.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 5,
          type: "LISTEN_REPEAT",
          stem: "Item 5. Listen and repeat (10-second window).",
          payload: { sentence: "My advisor suggested that I take the statistics course next semester.", windowSec: 10 },
          answer: { text: "My advisor suggested that I take the statistics course next semester." },
          points: 5,
          skills: ["delivery", "grammar"],
          difficulty: 4,
          explanation:
            "Correct: 'My advisor suggested that I take the statistics course next semester.' The subjunctive 'that I take' (bare infinitive after 'suggested') is the grammar target — 'that I took' or 'to take' both miss it.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 6,
          type: "LISTEN_REPEAT",
          stem: "Item 6. Listen and repeat (12-second window).",
          payload: { sentence: "The professor postponed the deadline until the end of next week.", windowSec: 12 },
          answer: { text: "The professor postponed the deadline until the end of next week." },
          points: 5,
          skills: ["delivery", "detail"],
          difficulty: 4,
          explanation:
            "Correct: 'The professor postponed the deadline until the end of next week.' Two time expressions ('until', 'the end of next week') must both survive; swapping in 'this week' is the usual slip.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 7,
          type: "LISTEN_REPEAT",
          stem: "Item 7. Listen and repeat (12-second window).",
          payload: { sentence: "According to the survey, most students prefer continuous assessment to final exams.", windowSec: 12 },
          answer: { text: "According to the survey, most students prefer continuous assessment to final exams." },
          points: 5,
          skills: ["delivery", "detail", "academic-vocab"],
          difficulty: 4,
          explanation:
            "Correct: 'According to the survey, most students prefer continuous assessment to final exams.' Longest sentence in the set: the reporting frame 'According to the survey' and the comparison 'to final exams' are the two halves people drop under time pressure.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 8,
          type: "SPEAKING_TASK",
          payload: {
            prompt: "Tell me about a place you go to when you need to relax. What is it, and why does it work for you?",
            prepSec: 5,
            speakSec: 30,
            rubricKey: "toefl.speaking",
            part: "Interview item 1 — personal",
          },
          answer: null,
          points: 0,
          skills: ["fluency", "vocabulary"],
          difficulty: 3,
          explanation:
            "A 30-second interview answer needs one place, two concrete reasons and a closing sentence — name the place immediately instead of warming up.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 9,
          type: "SPEAKING_TASK",
          payload: {
            prompt: "Do you think students today read fewer books than before? Give a reason for your view.",
            prepSec: 5,
            speakSec: 30,
            rubricKey: "toefl.speaking",
            part: "Interview item 2 — opinion",
          },
          answer: null,
          points: 0,
          skills: ["fluency", "coherence"],
          difficulty: 3,
          explanation:
            "State your position in the first sentence, then one supporting reason with an example. Hedging for 15 seconds ('it depends…') is the classic interview mistake.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 10,
          type: "SPEAKING_TASK",
          payload: {
            prompt: "Describe a skill you learned recently and how you learned it.",
            prepSec: 5,
            speakSec: 30,
            rubricKey: "toefl.speaking",
            part: "Interview item 3 — narrative",
          },
          answer: null,
          points: 0,
          skills: ["fluency", "coherence"],
          difficulty: 3,
          explanation:
            "Use past tense consistently for the story and present for what it's like now; sequence markers ('first', 'then', 'eventually') carry the narrative marks.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 11,
          type: "SPEAKING_TASK",
          payload: {
            prompt: "Some people say examinations motivate learning; others disagree. What do you think, and why?",
            prepSec: 5,
            speakSec: 30,
            rubricKey: "toefl.speaking",
            part: "Interview item 4 — abstract",
          },
          answer: null,
          points: 0,
          skills: ["fluency", "coherence", "argument"],
          difficulty: 4,
          explanation:
            "Abstract items are judged on argument shape: claim, one reason, one concession ('although…'), restated claim. 30 seconds fits exactly that — no room for examples.",
          source: "original-practice",
          contentStatus: "published",
        },
      ],
    },
  ],
};

// ---- TOEFL Writing section mock (2026 format: reconstruction + email + discussion) ----

const toeflWritingMock2026: MockSeed = {
  examKey: "TOEFL_IBT",
  variant: "STANDARD",
  title: "TOEFL Writing Section Mock (2026 format) 1",
  kind: "section",
  lengthLabel: "sample",
  description:
    "Writing simulation of the 2026 format: six sentence-reconstruction items, one Write-an-Email task and one Academic Discussion response. Original EnglishPath practice material — not an official ETS test.",
  sections: [
    {
      key: "writing",
      title: "Writing (2026 format)",
      directions:
        "Official: about 23 minutes, 12 items — 10 sentence-reconstruction items, one email and one academic discussion response. This sample carries 6 reconstruction items plus both written tasks. Reconstruction is exact-marked; the email and discussion are rubric-graded.",
      timingSec: 1380,
      questions: [
        {
          order: 1,
          type: "SENTENCE_RECONSTRUCTION",
          stem: "Item 1. Reconstruct the sentence.",
          payload: {
            cue: "Original: The registrar requires approval before the change is processed.",
            scrambled: ["the registrar", "approval", "requires", "before", "the change", "is processed", "before the change"],
            answer: "the registrar requires approval before the change is processed",
          },
          answer: { text: "the registrar requires approval before the change is processed", answer: "the registrar requires approval before the change is processed" },
          points: 2,
          skills: ["sentence", "grammar"],
          difficulty: 3,
          explanation:
            "Correct: 'The registrar requires approval before the change is processed.' Passive 'is processed' must follow the time clause; 'before the change' is a distractor chunk that ends mid-phrase.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 2,
          type: "SENTENCE_RECONSTRUCTION",
          stem: "Item 2. Reconstruct the sentence.",
          payload: {
            cue: "Original: Researchers found that sleep consolidates emotional memories.",
            scrambled: ["researchers", "that sleep", "found", "emotional memories", "consolidates", "that", "sleep"],
            answer: "researchers found that sleep consolidates emotional memories",
          },
          answer: { text: "researchers found that sleep consolidates emotional memories", answer: "researchers found that sleep consolidates emotional memories" },
          points: 2,
          skills: ["sentence", "grammar"],
          difficulty: 3,
          explanation:
            "Correct: 'Researchers found that sleep consolidates emotional memories.' The trap chunks 'that sleep' and 'that' force you to pick the reporting clause 'found that' before the subject 'sleep'.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 3,
          type: "SENTENCE_RECONSTRUCTION",
          stem: "Item 3. Reconstruct the sentence.",
          payload: {
            cue: "Original: The committee will announce its decision by the end of the month.",
            scrambled: ["the committee", "by the end", "will announce", "its decision", "by", "of the month"],
            answer: "the committee will announce its decision by the end of the month",
          },
          answer: { text: "the committee will announce its decision by the end of the month", answer: "the committee will announce its decision by the end of the month" },
          points: 2,
          skills: ["sentence", "grammar"],
          difficulty: 2,
          explanation:
            "Correct: 'The committee will announce its decision by the end of the month.' The deadline phrase reassembles as 'by the end of the month' — 'by the end' alone is the incomplete distractor.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 4,
          type: "SENTENCE_RECONSTRUCTION",
          stem: "Item 4. Reconstruct the sentence.",
          payload: {
            cue: "Original: Students who plan their revision carefully usually perform better.",
            scrambled: ["students", "carefully", "who plan", "usually", "their revision", "perform better", "their"],
            answer: "students who plan their revision carefully usually perform better",
          },
          answer: { text: "students who plan their revision carefully usually perform better", answer: "students who plan their revision carefully usually perform better" },
          points: 2,
          skills: ["sentence", "grammar"],
          difficulty: 4,
          explanation:
            "Correct: 'Students who plan their revision carefully usually perform better.' The relative clause 'who plan their revision' must wrap around 'carefully' before the adverb 'usually' — three chunks compete for the middle.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 5,
          type: "SENTENCE_RECONSTRUCTION",
          stem: "Item 5. Reconstruct the sentence.",
          payload: {
            cue: "Original: Countershading makes open-ocean animals harder to see.",
            scrambled: ["countershading", "harder", "makes", "to see", "open-ocean animals", "harder to"],
            answer: "countershading makes open-ocean animals harder to see",
          },
          answer: { text: "countershading makes open-ocean animals harder to see", answer: "countershading makes open-ocean animals harder to see" },
          points: 2,
          skills: ["sentence", "grammar"],
          difficulty: 3,
          explanation:
            "Correct: 'Countershading makes open-ocean animals harder to see.' 'Harder to see' is an indivisible result complement — 'harder' alone or 'to see' alone breaks the causative structure.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 6,
          type: "SENTENCE_RECONSTRUCTION",
          stem: "Item 6. Reconstruct the sentence.",
          payload: {
            cue: "Original: The survey results suggest that most commuters would switch to cycling.",
            scrambled: ["the survey results", "that most", "suggest", "would switch", "commuters", "to cycling", "most"],
            answer: "the survey results suggest that most commuters would switch to cycling",
          },
          answer: { text: "the survey results suggest that most commuters would switch to cycling", answer: "the survey results suggest that most commuters would switch to cycling" },
          points: 2,
          skills: ["sentence", "grammar"],
          difficulty: 4,
          explanation:
            "Correct: 'The survey results suggest that most commuters would switch to cycling.' 'That most' and 'most' both appear; only 'that most commuters' as one clause gives the reported claim its subject.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 7,
          type: "EMAIL_WRITING",
          stem: "Item 7. Write an Email (about 5 minutes).",
          payload: {
            situation:
              "Your professor has moved next week's seminar online because of a campus event. Write an email to the professor.",
            bullets: [
              "ask one clear question about the new arrangement",
              "explain how the change affects you",
              "offer to help with anything needed for the online session",
            ],
            tone: "semi-formal",
            minWords: 100,
            suggestedMinutes: 5,
            rubricKey: "toefl.writing",
            part: "Write an Email — seminar moved online",
          },
          answer: null,
          points: 0,
          skills: ["task-response", "tone", "coherence"],
          difficulty: 3,
          explanation:
            "A strong email opens with a greeting and purpose ('I'm writing about…'), covers all three bullets in order, and closes with a polite request — under 5 minutes, so no long introduction. 'Dear Professor + surname' keeps the semi-formal register.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 8,
          type: "DISCUSSION_TASK",
          stem: "Item 8. Academic Discussion (about 10 minutes).",
          payload: {
            prompt:
              "Professor Osei asks: 'Should first-year university students be required to live on campus?' Add your post to the discussion.",
            posts: [
              { author: "Priya", text: "Campus living builds friendships in the first term — commuters miss the evening events where those bonds form." },
              { author: "Marco", text: "Rent off campus is far cheaper in most cities; forcing students into halls adds debt, not community." },
            ],
            minWords: 100,
            suggestedMinutes: 10,
            rubricKey: "toefl.writing",
            part: "Academic discussion response",
          },
          answer: null,
          points: 0,
          skills: ["task-response", "coherence", "argument"],
          difficulty: 4,
          explanation:
            "The discussion format needs: your position, engagement with at least one classmate by name ('While Marco is right about cost…'), one supporting reason, and a wrap-up line — about 120–150 words in 10 minutes.",
          source: "original-practice",
          contentStatus: "published",
        },
      ],
    },
  ],
};

async function seedMocks() {
  const allMocks: Array<MockSeed | IeltsMockSeed> = [
    ieltsMock,
    toeflMock,
    toeflSpeakingMock2026,
    toeflWritingMock2026,
    ...IELTS_MOCK_LIBRARY,
    ...TOEFL_MOCK_LIBRARY,
  ];
  for (const mockSeed of allMocks) {
    const existing = await db.mockTest.findFirst({
      where: { examKey: mockSeed.examKey, title: mockSeed.title },
    });
    if (existing) {
      console.log(`[mocks] "${mockSeed.title}" already exists — skipped`);
      continue;
    }
    const spec = await db.testSpecification.findFirst({
      where: { examKey: mockSeed.examKey, variant: mockSeed.variant, status: "active" },
      orderBy: { version: "desc" },
    });
    if (!spec) throw new Error(`No active spec for ${mockSeed.examKey}`);
    const mock = await db.mockTest.create({
      data: {
        examKey: mockSeed.examKey,
        variant: mockSeed.variant,
        specId: spec.id,
        title: mockSeed.title,
        kind: mockSeed.kind,
        lengthLabel: mockSeed.lengthLabel,
        status: "published",
        description: mockSeed.description,
      },
    });
    for (const [index, sectionSeed] of mockSeed.sections.entries()) {
      const section = await db.mockTestSection.create({
        data: {
          mockTestId: mock.id,
          key: sectionSeed.key,
          title: sectionSeed.title,
          directions: sectionSeed.directions ?? null,
          timingSec: sectionSeed.timingSec,
          order: index + 1,
          // PROMPT 44: listening simulations store their per-part recordings
          // in the section payload — one script shared by a question group.
          ...(sectionSeed.audioParts && sectionSeed.audioParts.length > 0
            ? { payload: JSON.stringify({ audioParts: sectionSeed.audioParts }) }
            : {}),
        },
      });
      for (const questionSeed of sectionSeed.questions) {
        await db.mockTestQuestion.create({
          data: {
            sectionId: section.id,
            order: questionSeed.order,
            type: questionSeed.type,
            stem: questionSeed.stem ?? null,
            payload: JSON.stringify(questionSeed.payload),
            answer: questionSeed.answer ? JSON.stringify(questionSeed.answer) : null,
            points: questionSeed.points ?? 1,
            skills: JSON.stringify(questionSeed.skills ?? []),
            difficulty: questionSeed.difficulty ?? 2,
            explanation: questionSeed.explanation ?? null,
            source: questionSeed.source ?? "original-practice",
            contentStatus: questionSeed.contentStatus ?? "published",
            groupTag: questionSeed.group ?? null,
          },
        });
      }
    }
    console.log(`ocks] created "${mockSeed.title}" (${mockSeed.sections.length} sections)`);
  }

  // Spec version changes retire the previous TestSpecification. Published
  // library mocks must follow the active spec so new attempts sit on the
  // current format; historical attempts keep their own pinned specId
  // (MockTestAttempt.specId "survives spec updates" by design). Relink only
  // when the section structure is compatible (same keys + timing) - a
  // structural change must NOT be silently relinked.
  const publishedMocks = await db.mockTest.findMany({
    where: { status: "published" },
  });
  for (const mock of publishedMocks) {
    const pinned = await db.testSpecification.findUnique({ where: { id: mock.specId } });
    if (!pinned || pinned.status === "active") continue;
    const active = await db.testSpecification.findFirst({
      where: { examKey: mock.examKey, variant: mock.variant, status: "active" },
      orderBy: { version: "desc" },
    });
    if (!active) continue;
    const pinnedSections = JSON.parse(pinned.sections) as Array<{ key: string; timingSec: number }>;
    const activeSections = JSON.parse(active.sections) as Array<{ key: string; timingSec: number }>;
    const compatible =
      pinnedSections.length === activeSections.length &&
      pinnedSections.every((s, i) => s.key === activeSections[i].key && s.timingSec === activeSections[i].timingSec);
    if (!compatible) continue;
    await db.mockTest.update({ where: { id: mock.id }, data: { specId: active.id } });
    console.log(
      `ocks] relinked "${mock.title}" from retired spec v${pinned.version} to active v${active.version} (structure identical; attempt pins preserved)`,
    );
  }
}

// ---------------------------------------------------------------------------
// 4. Pathways (reference the COMMON curriculum — no duplication)
// ---------------------------------------------------------------------------

type StepSeed = {
  label: string;
  refType: string;
  refId?: string;
  examSection?: string;
  focus?: string;
  minutes?: number;
};

type ModuleSeed = { title: string; goal: string; steps: StepSeed[] };


async function seedPathways() {
  const pathways: Array<{ examKey: string; variant: string; title: string; summary: string; modules: ModuleSeed[] }> = [
    {
      examKey: ieltsAcademicPathway.examKey,
      variant: ieltsAcademicPathway.variant,
      title: ieltsAcademicPathway.title,
      summary: ieltsAcademicPathway.summary,
      modules: ieltsAcademicPathway.modules,
    },
    {
      examKey: ieltsGeneralPathway.examKey,
      variant: ieltsGeneralPathway.variant,
      title: ieltsGeneralPathway.title,
      summary: ieltsGeneralPathway.summary,
      modules: ieltsGeneralPathway.modules,
    },
    {
      examKey: toeflPathway.examKey,
      variant: toeflPathway.variant,
      title: toeflPathway.title,
      summary: toeflPathway.summary,
      modules: toeflPathway.modules,
    },
  ];

  for (const pathwaySeed of pathways) {
    const existing = await db.examPathway.findFirst({
      where: { examKey: pathwaySeed.examKey, variant: pathwaySeed.variant },
    });
    if (existing) {
      // Rebuild content; step progress cascades (this is a setup script).
      await db.examPathway.delete({ where: { id: existing.id } });
    }
    const pathway = await db.examPathway.create({
      data: {
        examKey: pathwaySeed.examKey,
        variant: pathwaySeed.variant,
        title: pathwaySeed.title,
        summary: pathwaySeed.summary,
        status: "published",
      },
    });
    for (const [moduleIndex, moduleSeed] of pathwaySeed.modules.entries()) {
      const pathwayModule = await db.examPathwayModule.create({
        data: {
          pathwayId: pathway.id,
          title: moduleSeed.title,
          goal: moduleSeed.goal,
          order: moduleIndex + 1,
        },
      });
      for (const [stepIndex, stepSeed] of moduleSeed.steps.entries()) {
        await db.examPathwayStep.create({
          data: {
            moduleId: pathwayModule.id,
            order: stepIndex + 1,
            label: stepSeed.label,
            refType: stepSeed.refType,
            refId: stepSeed.refId ?? null,
            examSection: stepSeed.examSection ?? null,
            focus: stepSeed.focus ?? null,
            minutes: stepSeed.minutes ?? 20,
          },
        });
      }
    }
    console.log(`[pathways] rebuilt "${pathwaySeed.title}" (${pathwaySeed.modules.length} phases)`);
  }
}

// ---------------------------------------------------------------------------
// Verify curriculum references actually exist (fail loudly on drift)
// ---------------------------------------------------------------------------

/** Pathway steps from the data modules (single source of truth). */
function allPathwayModules() {
  return [
    ...ieltsAcademicPathway.modules,
    ...ieltsGeneralPathway.modules,
    ...toeflPathway.modules,
  ];
}

async function verifyReferences() {
  const { readingTexts } = await import("../src/data/reading");
  const { listeningActivities } = await import("../src/data/listening");
  const { speakingActivities } = await import("../src/data/speaking");
  const { writingAssignments } = await import("../src/data/writing");
  const { vocabCategories } = await import("../src/data/vocabulary");

  const readingSlugs = new Set(readingTexts.map((p) => p.slug));
  const listeningSlugs = new Set(listeningActivities.map((a) => a.slug));
  const speakingIds = new Set(speakingActivities.map((a) => a.id));
  const speakingSlugs = new Set(speakingActivities.map((a) => a.slug));
  const writingSlugs = new Set(writingAssignments.map((a) => a.slug));
  const vocabIds = new Set(vocabCategories.map((c) => c.id));
  // Speaking steps reference activity slugs (`#/speaking/activity/<slug>`).
  const speakingPool = new Set([...speakingIds, ...speakingSlugs]);

  const errors: string[] = [];
  const check = (refType: string, refId: string, pool: Set<string>, poolName: string) => {
    if (!pool.has(refId)) errors.push(`${refType} ref "${refId}" not found in ${poolName}`);
  };
  for (const pathwayModule of allPathwayModules()) {
    for (const step of pathwayModule.steps) {
      if (!step.refId) continue;
      if (step.refType === "reading") check("reading", step.refId, readingSlugs, "src/data/reading");
      else if (step.refType === "listening") check("listening", step.refId, listeningSlugs, "src/data/listening");
      else if (step.refType === "speaking") check("speaking", step.refId, speakingPool, "src/data/speaking");
      else if (step.refType === "writing") check("writing", step.refId, writingSlugs, "src/data/writing");
      else if (step.refType === "vocabulary") check("vocabulary", step.refId, vocabIds, "src/data/vocabulary");
      // "curriculum" refs (IELTS Academy lessons) are verified against the
      // database in verifyCurriculumRefs() AFTER seedIeltsCms() has run.
    }
  }
  if (errors.length > 0) {
    console.error("[verify] curriculum reference errors:\n" + errors.map((e) => `  - ${e}`).join("\n"));
    process.exit(1);
  }
  console.log("[verify] all static pathway references exist");
}

/** "curriculum" refs point at CMS lessons seeded by seedIeltsCms — verify them in the DB. */
async function verifyCurriculumRefs() {
  const curriculumRefs = new Set<string>();
  for (const pathwayModule of allPathwayModules()) {
    for (const step of pathwayModule.steps) {
      if (step.refType === "curriculum" && step.refId) curriculumRefs.add(step.refId);
    }
  }
  const lessons = await db.cmsLesson.findMany({
    where: { slug: { in: [...curriculumRefs] } },
    select: { slug: true, status: true, live: true },
  });
  const found = new Map(lessons.map((l) => [l.slug, l]));
  const errors: string[] = [];
  for (const slug of curriculumRefs) {
    const row = found.get(slug);
    if (!row) errors.push(`curriculum ref "${slug}" has no CMS lesson`);
    else if (!row.live || row.status !== "approved") errors.push(`curriculum ref "${slug}" is not live/approved`);
  }
  if (errors.length > 0) {
    console.error("[verify] IELTS Academy lesson reference errors:\n" + errors.map((e) => `  - ${e}`).join("\n"));
    process.exit(1);
  }
  console.log(`[verify] all ${curriculumRefs.size} pathway IELTS-lesson references exist and are live`);
}

// ---------------------------------------------------------------------------
// 5. IELTS Academy CMS courses (the 8 teaching modules)
// ---------------------------------------------------------------------------

/**
 * Idempotent upserts: existing rows are updated in place (blocks replaced,
 * version bumped, immutable snapshots kept) so enrolments, progress and
 * exercise-attempt history survive reseeding.
 */
async function seedAcademyCms(
  levelSpec: { slug: string; name: string; description: string; order: number },
  courses: typeof IELTS_COURSES,
  prefix: string,
): Promise<void> {
  const admin = (await db.user.findUnique({ where: { email: "admin@talksy.app" } })) ?? null;

  // Level
  let level = await db.cmsLevel.findUnique({ where: { slug: levelSpec.slug } });
  const levelData = {
    name: levelSpec.name,
    description: levelSpec.description,
    order: levelSpec.order,
  };
  if (!level) {
    level = await db.cmsLevel.create({ data: { slug: levelSpec.slug, ...levelData } });
  } else if (
    level.name !== levelData.name ||
    level.description !== levelData.description ||
    level.order !== levelData.order
  ) {
    level = await db.cmsLevel.update({ where: { id: level.id }, data: levelData });
  }

  for (const courseSpec of courses) {
    let course = await db.cmsCourse.findUnique({ where: { slug: courseSpec.slug } });
    const courseData = {
      title: courseSpec.title,
      description: courseSpec.description,
      levelId: level.id,
      status: "approved",
      live: true,
    };
    if (!course) {
      course = await db.cmsCourse.create({ data: { slug: courseSpec.slug, ...courseData, createdById: admin?.id ?? null } });
    } else if (
      course.title !== courseData.title ||
      course.description !== courseData.description ||
      course.levelId !== level.id
    ) {
      course = await db.cmsCourse.update({ where: { id: course.id }, data: courseData });
    }

    for (const [moduleIndex, moduleSpec] of courseSpec.modules.entries()) {
      let moduleRow = await db.cmsModule.findUnique({ where: { slug: moduleSpec.slug } });
      const moduleData = { title: moduleSpec.title, description: moduleSpec.description, order: moduleIndex + 1 };
      if (!moduleRow) {
        moduleRow = await db.cmsModule.create({ data: { courseId: course.id, slug: moduleSpec.slug, ...moduleData } });
      } else if (
        moduleRow.title !== moduleData.title ||
        moduleRow.description !== moduleData.description ||
        moduleRow.order !== moduleData.order ||
        moduleRow.courseId !== course.id
      ) {
        moduleRow = await db.cmsModule.update({
          where: { id: moduleRow.id },
          data: { ...moduleData, courseId: course.id },
        });
      }

      for (const [unitIndex, unitSpec] of moduleSpec.units.entries()) {
        let unitRow = await db.cmsUnit.findUnique({ where: { slug: unitSpec.slug } });
        const unitData = { title: unitSpec.title, description: unitSpec.description, order: unitIndex + 1 };
        if (!unitRow) {
          unitRow = await db.cmsUnit.create({ data: { moduleId: moduleRow.id, slug: unitSpec.slug, ...unitData } });
        } else if (
          unitRow.title !== unitData.title ||
          unitRow.description !== unitData.description ||
          unitRow.order !== unitData.order ||
          unitRow.moduleId !== moduleRow.id
        ) {
          unitRow = await db.cmsUnit.update({
            where: { id: unitRow.id },
            data: { ...unitData, moduleId: moduleRow.id },
          });
        }

        for (const [lessonIndex, lessonSpec] of unitSpec.lessons.entries()) {
          await upsertIeltsLesson(unitRow.id, lessonSpec, lessonIndex + 1, admin?.id ?? null);
        }
      }
    }

    // PROMPT 44 retire step: masterclass restructures (e.g. the 12-lesson
    // I-M2 becoming the 31-lesson Listening Masterclass) leave authored
    // lessons that are absorbed by new ones. Archive (never delete —
    // progress history survives) seeder-owned lessons under these modules
    // whose slug dropped out of the spec.
    const specLessonSlugs = new Set<string>();
    for (const courseSpec of courses) {
      for (const mod of courseSpec.modules) {
        for (const unit of mod.units) {
          for (const lesson of unit.lessons) specLessonSlugs.add(lesson.slug);
        }
      }
    }
    const courseModuleSlugs = courses.flatMap((c) => c.modules.map((m) => m.slug));
    const stale = await db.cmsLesson.findMany({
      where: {
        live: true,
        slug: { startsWith: prefix },
        unit: { module: { slug: { in: courseModuleSlugs } } },
      },
      select: { id: true, slug: true },
    });
    const toArchive = stale.filter((l) => !specLessonSlugs.has(l.slug));
    if (toArchive.length > 0) {
      await db.cmsLesson.updateMany({
        where: { id: { in: toArchive.map((l) => l.id) } },
        data: { live: false },
      });
      console.log(`[${prefix}-cms] archived ${toArchive.length} superseded lesson(s): ${toArchive.map((l) => l.slug).join(", ")}`);
    }
  }

  // Enrol the demo learner so enrolment analytics have real data.
  const demo = await db.user.findUnique({ where: { email: "demo@talksy.app" } });
  if (demo) {
    for (const courseSpec of courses) {
      const course = await db.cmsCourse.findUnique({ where: { slug: courseSpec.slug } });
      if (!course) continue;
      const existing = await db.cmsEnrolment.findFirst({ where: { userId: demo.id, courseId: course.id } });
      if (!existing) await db.cmsEnrolment.create({ data: { userId: demo.id, courseId: course.id } });
    }
  }

  const [lessons, blocks, questions] = await Promise.all([
    db.cmsLesson.count({ where: { slug: { startsWith: prefix } } }),
    db.cmsLessonBlock.count({ where: { lesson: { slug: { startsWith: prefix } } } }),
    db.cmsQuestion.count({ where: { slug: { startsWith: prefix } } }),
  ]);
  console.log(`[${prefix}-cms] ${courses.length} courses · ${lessons} lessons live · ${blocks} blocks · ${questions} bank questions`);
}

async function upsertIeltsLesson(
  unitId: string,
  spec: {
    slug: string;
    title: string;
    description: string;
    objectives: string[];
    minutes: number;
    blocks: unknown[];
    questions?: ExerciseSpec[];
    assignment?: { title: string; instructions: string; minWords: number; maxWords: number };
    homework?: string[];
  },
  order: number,
  adminId: string | null,
): Promise<void> {
  // 1. Question bank rows first (slugs are stable: <lesson>-q<n>).
  const questionIds: string[] = [];
  for (const [qi, question] of (spec.questions ?? []).entries()) {
    const slug = `${spec.slug}-q${qi + 1}`;
    const existing = await db.cmsQuestion.findUnique({ where: { slug } });
    if (!existing) {
      const created = await db.cmsQuestion.create({
        data: {
          slug,
          type: question.type,
          skill: question.skill,
          difficulty: question.difficulty,
          prompt: question.prompt,
          tags: JSON.stringify(question.tags ?? []),
          data: JSON.stringify({ ...question, id: "pending" }),
          status: "published",
          version: 1,
          createdById: adminId,
        },
      });
      const exercise = { ...question, id: created.id };
      await db.cmsQuestion.update({ where: { id: created.id }, data: { data: JSON.stringify(exercise) } });
      await db.cmsQuestionVersion.create({
        data: {
          questionId: created.id,
          version: 1,
          snapshot: JSON.stringify({
            type: question.type,
            skill: question.skill,
            difficulty: question.difficulty,
            prompt: question.prompt,
            tags: question.tags ?? [],
            data: exercise,
          }),
          changedById: adminId,
          changeNote: "IELTS Academy seed",
        },
      });
      questionIds.push(created.id);
    } else {
      const nextData = JSON.stringify({ ...question, id: existing.id });
      if (existing.data === nextData && existing.status === "published") {
        questionIds.push(existing.id);
        continue;
      }
      const version = existing.version + 1;
      await db.cmsQuestion.update({
        where: { id: existing.id },
        data: {
          type: question.type,
          skill: question.skill,
          difficulty: question.difficulty,
          prompt: question.prompt,
          tags: JSON.stringify(question.tags ?? []),
          data: nextData,
          status: "published",
          version,
        },
      });
      await db.cmsQuestionVersion.create({
        data: {
          questionId: existing.id,
          version,
          snapshot: JSON.stringify({
            type: question.type,
            skill: question.skill,
            difficulty: question.difficulty,
            prompt: question.prompt,
            tags: question.tags ?? [],
            data: { ...question, id: existing.id },
          }),
          changedById: adminId,
          changeNote: "IELTS Academy seed update",
        },
      });
      questionIds.push(existing.id);
    }
  }

  // 2. Compose the block list: teaching blocks + practice + assignment + homework.
  const blocks: Array<Record<string, unknown>> = [...(spec.blocks as Array<Record<string, unknown>>)];
  // PROMPT 43 v3 standard: questions split into a GUIDED set (progressive
  // hints available) and an INDEPENDENT set (no hints — answers held back),
  // rendered as two practice blocks after the teaching blocks.
  const guidedIds = questionIds.filter((_, i) => (((spec.questions ?? [])[i] as { hints?: string[] } | undefined)?.hints ?? []).length > 0);
  const independentIds = questionIds.filter((id) => !guidedIds.includes(id));
  if (guidedIds.length > 0) {
    blocks.push({ type: "practice", title: "Guided practice — hints available", variant: "guided", note: "Reveal a hint only if you need it; each hint is more specific than the last.", exerciseIds: guidedIds });
  }
  if (independentIds.length > 0) {
    blocks.push({ type: "practice", title: "Independent practice — exam style", variant: "independent", note: "No hints here. Answer as you would in the test; explanations arrive after you submit.", exerciseIds: independentIds });
  }
  if (spec.assignment) {
    blocks.push({
      type: "assignment",
      title: spec.assignment.title,
      instructions: spec.assignment.instructions,
      minWords: spec.assignment.minWords,
      maxWords: spec.assignment.maxWords,
    });
  }
  if (spec.homework && spec.homework.length > 0) {
    blocks.push({ type: "homework", title: "Before your next session", tasks: spec.homework });
  }

  // 3. Upsert the lesson row + blocks + immutable version snapshot.
  const existing = await db.cmsLesson.findUnique({ where: { slug: spec.slug } });
  // Review status follows the same honesty convention as the core programme
  // seeder: seeded content is AI-authored platform material, never silently
  // "draft" while live; a previously human-reviewed lesson keeps its badge
  // only while its content is unchanged.
  const existingLessonBlocks = existing
    ? await db.cmsLessonBlock.findMany({ where: { lessonId: existing.id }, orderBy: { order: "asc" } })
    : [];
  const existingBlocksJson = JSON.stringify(
    existingLessonBlocks.map((b) => ({ order: b.order, type: b.type, data: JSON.parse(b.data) })),
  );
  const nextBlocksJson = JSON.stringify(blocks.map((b, i) => ({ order: i, type: b.type as string, data: b })));
  const contentUnchanged = existing !== null && existingBlocksJson === nextBlocksJson;
  const reviewStatus =
    contentUnchanged && (existing!.reviewStatus === "human-reviewed" || existing!.reviewStatus === "approved")
      ? existing!.reviewStatus
      : "ai-reviewed";
  const common = {
    unitId,
    title: spec.title,
    description: spec.description,
    objectives: JSON.stringify(spec.objectives),
    estimatedMinutes: spec.minutes,
    order,
    status: "approved",
    reviewStatus,
    live: true,
  };
  let lessonId: string;
  let version: number;
  if (!existing) {
    const created = await db.cmsLesson.create({
      data: {
        slug: spec.slug,
        ...common,
        version: 1,
        publishedVersion: 1,
        publishedAt: new Date(),
        createdById: adminId,
      },
    });
    lessonId = created.id;
    version = 1;
  } else {
    lessonId = existing.id;
    version = existing.version + 1;
    await db.cmsLesson.update({
      where: { id: existing.id },
      data: { ...common, version, publishedVersion: version, publishedAt: new Date() },
    });
    await db.cmsLessonBlock.deleteMany({ where: { lessonId } });
  }
  if (blocks.length > 0) {
    await db.cmsLessonBlock.createMany({
      data: blocks.map((b, i) => ({
        lessonId,
        order: i,
        type: b.type as string,
        data: JSON.stringify(b),
      })),
    });
  }
  await db.cmsLessonVersion.create({
    data: {
      lessonId,
      version,
      snapshot: JSON.stringify({
        title: spec.title,
        description: spec.description,
        objectives: spec.objectives,
        estimatedMinutes: spec.minutes,
        blocks: blocks.map((b, i) => ({ id: `${spec.slug}-b${i + 1}`, type: b.type, data: b })),
      }),
      changedById: adminId,
      changeNote: existing ? "IELTS Academy seed update" : "IELTS Academy seed",
    },
  });
}

/**
 * PROMPT 44: demo account practice history for the masterclass performance
 * dashboard. Three audio-bank attempts with deliberately different error
 * profiles (strong, spelling-heavy, distractor-prone), graded through the
 * REAL engine so the taxonomy rows are authentic. Idempotent: skipped once
 * the demo learner has any bank attempt.
 */
async function seedDemoListeningBankAttempts(): Promise<void> {
  const demo = await db.user.findUnique({ where: { email: "demo@talksy.app" } });
  if (!demo) return;
  const existing = await db.listeningBankAttempt.count({ where: { userId: demo.id } });
  if (existing > 0) {
    console.log("[listening-bank-demo] demo attempts already present — skipped");
    return;
  }

  const { LISTENING_BANK, bankExerciseBySlug } = await import("../src/data/exams/ielts/listening-bank/index");
  const { gradeExercise, recordBankAttempt } = await import("../src/lib/exams/listening-bank/service");

  /** Build an answer payload for one question with the chosen error style. */
  const answerFor = (
    q: (typeof LISTENING_BANK)[number]["questions"][number],
    style: "correct" | "misspell" | "lure" | "miss" | "wrong",
  ): BankAnswerPayload => {
    const misspell = (s: string) => (s.length > 4 ? `${s.slice(0, -2)}${s.slice(-1)}${s.slice(-2, -1)}` : `${s}e`);
    switch (q.type) {
      case "form":
      case "note":
      case "table":
      case "flowchart":
      case "summary":
      case "sentence": {
        const blanks: Record<string, string> = {};
        for (const [index, blank] of q.blanks.entries()) {
          if (style === "miss" && index === q.blanks.length - 1) continue; // leave blank
          if (style === "misspell" && index === 0) {
            blanks[String(blank.no)] = misspell(blank.answer);
          } else if (style === "lure" && index === 1 && q.meta.trap?.lure?.[0]) {
            blanks[String(blank.no)] = q.meta.trap.lure[0];
          } else if (style === "wrong" && index === q.blanks.length - 1) {
            blanks[String(blank.no)] = `${blank.answer} x`;
          } else {
            blanks[String(blank.no)] = blank.answer;
          }
        }
        return { format: "completion", blanks };
      }
      case "mcq-single":
        return { format: "mcq", option: style === "correct" ? q.correct[0] : (q.correct[0] + 1) % q.options.length };
      case "mcq-multi":
        return {
          format: "mcq-multi",
          options: style === "correct" ? q.correct : [q.correct[0], (q.correct[0] + 2) % q.options.length],
        };
      case "matching":
        return {
          format: "matching",
          pairs: q.items.map((_, i) => (style === "correct" || i > 0 ? q.correct[i] : (q.correct[i] + 1) % q.options.length)),
        };
      case "map":
        return {
          format: "map",
          labels:
            style === "correct"
              ? q.correct
              : q.correct.map((l, i) => (i === 0 ? String.fromCharCode(l.charCodeAt(0) + 1) : l)),
        };
      case "short-answer":
        return {
          format: "short-answer",
          answers: q.accepted.map((forms, i) =>
            style === "miss" && i === q.accepted.length - 1 ? "" : style === "misspell" && i === 0 ? misspell(forms[0]) : forms[0],
          ),
        };
    }
  };

  const plans: Array<{ slug: string; styles: Array<"correct" | "misspell" | "lure" | "miss" | "wrong">; time: number }> = [
    { slug: "ielts-lb-p1-library", styles: ["correct", "misspell"], time: 402 },
    { slug: "ielts-lb-p2-event", styles: ["correct", "correct", "lure"], time: 511 },
    { slug: "ielts-lb-p3-fieldwork", styles: ["misspell", "wrong", "miss"], time: 648 },
  ];

  for (const plan of plans) {
    const exercise = bankExerciseBySlug(plan.slug) ?? LISTENING_BANK.find((e) => e.slug === plan.slug);
    if (!exercise) continue;
    const answers: Record<string, BankAnswerPayload> = {};
    for (const [index, question] of exercise.questions.entries()) {
      answers[question.id] = answerFor(question, plan.styles[index % plan.styles.length]);
    }
    const graded = gradeExercise(exercise, { mode: "exam", answers, timeSpentSec: plan.time });
    await recordBankAttempt(demo.id, exercise, { mode: "exam", answers, timeSpentSec: plan.time }, graded);
  }
  console.log(`[listening-bank-demo] seeded ${plans.length} demo attempts with mixed error profiles`);
}

async function seedDemoWritingBankAttempts(): Promise<void> {
  const demo = await db.user.findUnique({ where: { email: "demo@talksy.app" } });
  if (!demo) return;
  const existing = await db.writingBankAttempt.count({ where: { userId: demo.id } });
  if (existing > 0) {
    console.log("[writing-bank-demo] demo attempts already present — skipped");
    return;
  }

  const { writingTaskBySlug } = await import("../src/data/exams/ielts/writing-bank/index");
  const { submitWritingTask } = await import("../src/lib/exams/writing-bank/service");
  // Keep seeding fast and deterministic: the AI commentary layer is
  // enrichment-only, so the demo attempts are seeded with the deterministic
  // report (aiAvailable: false — an honest value, never a fake commentary).
  const { setLlmProviderOverride } = await import("../src/lib/llm");
  setLlmProviderOverride({
    name: "seed-unavailable",
    async complete() {
      throw new Error("provider unavailable during seeding");
    },
    async *stream() {
      throw new Error("provider unavailable during seeding");
    },
  });

  // A realistic demo history: a strong first attempt on the bar-chart
  // exemplar, a revision of it, a weak letter attempt (under length, tone
  // slips) and a solid everyday essay — so the performance dashboard has
  // revision chains, family spread and discipline flags to show.
  const plans: Array<{ slug: string; mode: "exam" | "practice"; time: number; use: "model" | "weak"; task: 1 | 2 }> = [
    { slug: "ielts-wb-at1-bar-cycling", mode: "exam", time: 1030, use: "model", task: 1 },
    { slug: "ielts-wb-at1-bar-cycling", mode: "practice", time: 840, use: "model", task: 1 },
    { slug: "ielts-wb-gt1-complaint-hotel", mode: "exam", time: 480, use: "weak", task: 1 },
    { slug: "ielts-wb-gt2-opinion-sundays", mode: "exam", time: 2210, use: "model", task: 2 },
  ];

  for (const plan of plans) {
    const task = writingTaskBySlug(plan.slug);
    if (!task) continue;
    const source = plan.use === "model" ? task.modelAnswer.paragraphs : task.levelSamples[0].paragraphs;
    await submitWritingTask(demo.id, task, {
      mode: plan.mode,
      content: source.join("\n\n"),
      timeSpentSec: plan.time,
    });
  }
  console.log(`[writing-bank-demo] seeded ${plans.length} demo writing attempts (mixed profiles + one revision chain)`);
}

async function seedDemoSpeakingBankAttempts(): Promise<void> {
  const demo = await db.user.findUnique({ where: { email: "demo@talksy.app" } });
  if (!demo) return;
  const existing = await db.speakingBankAttempt.count({ where: { userId: demo.id } });
  if (existing > 0) {
    console.log("[speaking-bank-demo] demo attempts already present — skipped");
    return;
  }

  const { speakingItemBySlug } = await import("../src/data/exams/ielts/speaking-bank/index");
  const { submitSpeakingItem } = await import("../src/lib/exams/speaking-bank/service");
  // Honest deterministic-only demo attempts (same convention as writing).
  const { setLlmProviderOverride } = await import("../src/lib/llm");
  setLlmProviderOverride({
    name: "seed-unavailable",
    async complete() {
      throw new Error("provider unavailable during seeding");
    },
    async *stream() {
      throw new Error("provider unavailable during seeding");
    },
  });

  // A realistic demo history: a strong Part 1 round on the hometown set,
  // a revision of it, a full two-minute flagship long turn, and a Part 3
  // discussion set — so the performance dashboard has re-attempt chains,
  // part spread and fluency discipline to show.
  const part1Set = speakingItemBySlug("ielts-sb-p1-hometown");
  if (part1Set && part1Set.kind === "part1") {
    const modelAnswers = part1Set.questions.map((q) => q.modelAnswer);
    const improvedAnswers = part1Set.questions.map((q) => q.improved);
    await submitSpeakingItem(demo.id, part1Set, { mode: "simulation", answers: modelAnswers, durationSec: 210 });
    await submitSpeakingItem(demo.id, part1Set, { mode: "practice", answers: improvedAnswers, durationSec: 185 });
  }

  const cueCard = speakingItemBySlug("ielts-sb-p2-people");
  if (cueCard && cueCard.kind === "cue-card") {
    await submitSpeakingItem(demo.id, cueCard, {
      mode: "simulation",
      answers: [cueCard.sampleResponse.transcript],
      durationSec: cueCard.sampleResponse.durationEstimateSec,
    });
  }

  const part3Set = speakingItemBySlug("ielts-sb-p3-technology");
  if (part3Set && part3Set.kind === "part3") {
    await submitSpeakingItem(demo.id, part3Set, {
      mode: "simulation",
      answers: part3Set.questions.map((q) => q.modelAnswer),
      durationSec: 260,
    });
  }
  console.log("[speaking-bank-demo] seeded 4 demo speaking attempts (three parts + one re-attempt chain)");
}

async function main() {
  await verifyReferences();
  await seedSpecs();
  await seedRubrics();
  await seedAcademyCms(IELTS_LEVEL, IELTS_COURSES, "ielts-");
  await seedAcademyCms(TOEFL_LEVEL, TOEFL_COURSES, "toefl-");
  await seedMocks();
  await migrateLegacyAttempts();
  await enrichExistingQuestions();
  await seedDemoListeningBankAttempts();
  await seedDemoWritingBankAttempts();
  await seedDemoSpeakingBankAttempts();
  await seedPathways();
  await verifyCurriculumRefs();
  const counts = {
    specs: await db.testSpecification.count(),
    rubrics: await db.examRubric.count(),
    mocks: await db.mockTest.count(),
    questions: await db.mockTestQuestion.count(),
    pathways: await db.examPathway.count(),
    steps: await db.examPathwayStep.count(),
  };
  console.log("[done]", JSON.stringify(counts));
}

/** Move pre-engine attempts onto the six-mode model (values only). */
async function migrateLegacyAttempts(): Promise<void> {
  const examRuns = await db.mockTestAttempt.updateMany({
    where: { mode: "exam" },
    data: { mode: "full_mock", timed: true },
  });
  const practiceRuns = await db.mockTestAttempt.updateMany({
    where: { mode: "practice" },
    data: { mode: "untimed", timed: false },
  });
  if (examRuns.count > 0 || practiceRuns.count > 0) {
    console.log(
      `[attempts] migrated ${examRuns.count} timed + ${practiceRuns.count} untimed attempt(s) to the six-mode model`,
    );
  }
}

/** Backfill difficulty + explanations onto question rows that lack them. */
async function enrichExistingQuestions(): Promise<void> {
  const mocks = await db.mockTest.findMany({
    include: {
      sections: { include: { questions: { select: { id: true, order: true } } } },
    },
  });
  let applied = 0;
  let unmatched = 0;
  for (const mock of mocks) {
    const meta = EXAM_META[mock.title];
    if (!meta) continue;
    for (const section of mock.sections) {
      for (const question of section.questions) {
        const entry = meta[`${section.key}:${question.order}`];
        if (!entry) {
          unmatched += 1;
          continue;
        }
        const row = await db.mockTestQuestion.findUnique({
          where: { id: question.id },
          select: { explanation: true },
        });
        if (!row || row.explanation != null) continue;
        await db.mockTestQuestion.update({
          where: { id: question.id },
          data: { difficulty: entry.difficulty, explanation: entry.explanation },
        });
        applied += 1;
      }
    }
  }
  console.log(
    `[meta] enrichment applied to ${applied} question(s)` +
      (unmatched > 0 ? `; ${unmatched} key(s) unmatched` : ""),
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => db.$disconnect());
