/**
 * Division C — International Exam Preparation Academy: shared types and
 * zod validation. This file is the single source of truth for every
 * structured JSON column in the exam tables. Nothing else in the app may
 * parse those columns by hand, and no component may hardcode exam rules —
 * the shapes here are what TestSpecification rows must satisfy.
 */

import { z } from "zod";

// ---------------------------------------------------------------------------
// Identity
// ---------------------------------------------------------------------------

export const EXAM_KEYS = ["IELTS", "TOEFL_IBT"] as const;
export type ExamKey = (typeof EXAM_KEYS)[number];

export const EXAM_VARIANTS: Record<ExamKey, readonly string[]> = {
  IELTS: ["ACADEMIC", "GENERAL_TRAINING"],
  TOEFL_IBT: ["STANDARD"],
};

export const EXAM_LABELS: Record<ExamKey, string> = {
  IELTS: "IELTS",
  TOEFL_IBT: "TOEFL iBT",
};

export const VARIANT_LABELS: Record<string, string> = {
  ACADEMIC: "Academic",
  GENERAL_TRAINING: "General Training",
  STANDARD: "Standard",
};

export const SECTION_KEYS = ["listening", "reading", "writing", "speaking"] as const;
export type SectionKey = (typeof SECTION_KEYS)[number];

export const SECTION_LABELS: Record<SectionKey, string> = {
  listening: "Listening",
  reading: "Reading",
  writing: "Writing",
  speaking: "Speaking",
};

export const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2", "UNKNOWN"] as const;
export type CefrLevel = (typeof CEFR_LEVELS)[number];

// ---------------------------------------------------------------------------
// Test specification payload (validated on every admin write + read)
// ---------------------------------------------------------------------------

export const taskTypeSchema = z.object({
  /** Stable type code used by MockTestQuestion.type. */
  type: z.string().min(2),
  label: z.string().min(2),
  description: z.string().default(""),
  /** Objective items are machine-marked; others go to rubric/AI review. */
  objective: z.boolean().default(true),
  /** Rubric taskKey from ExamRubric for constructed responses. */
  rubricKey: z.string().optional(),
});

/**
 * Per-section navigation policy for the mock player. Spec-driven — no
 * component may hardcode exam rules. Omitted on older spec versions
 * (readers fall back to a conservative default via navigation.ts).
 */
export const sectionNavigationSchema = z.object({
  /** How the learner may move between questions inside the section. */
  withinSection: z.enum(["free", "forward_only"]),
  /** Whether a previous (finished/expired) section may be reopened. */
  allowBackToSection: z.boolean().default(false),
  /** Mark-for-review flagging (available on IELTS on computer; not on TOEFL). */
  flagForReview: z.boolean().default(true),
  /** Audio replay inside the section (never allowed under exam timing). */
  replayAudio: z.boolean().default(false),
});
export type SectionNavigation = z.infer<typeof sectionNavigationSchema>;

export const specSectionSchema = z.object({
  key: z.string().min(2),
  label: z.string().min(2),
  /** Official time limit for this section, seconds. */
  timingSec: z.number().int().positive(),
  questionCount: z.number().int().nonnegative().default(0),
  taskTypes: z.array(z.string()).default([]),
  directions: z.string().default(""),
  /** e.g. TOEFL 2026 two-stage adaptive reading/listening modules. */
  adaptive: z.string().optional(),
  /** Delivery note (interview, face-to-face, human raters, …). */
  delivery: z.string().optional(),
  /** Player navigation policy (optional — older specs predate it). */
  navigation: sectionNavigationSchema.optional(),
});

export const rawBandEntrySchema = z.object({
  /** Minimum raw score that still earns `band`. */
  min: z.number().int().nonnegative(),
  band: z.number(),
});

export const scoringModelSchema = z.object({
  /** IELTS_BAND: sections 0–9 half steps. TOEFL_BAND_1_6: sections 1–6. */
  kind: z.enum(["IELTS_BAND", "TOEFL_BAND_1_6"]),
  /** Display unit, e.g. "band". */
  unit: z.string().default("band"),
  /** Per-section raw→score conversion tables (approximate practice tables;
   *  official forms differ slightly — see sourceRefs on the spec). */
  rawToScore: z.record(z.string(), z.array(rawBandEntrySchema)).default({}),
  /** How the overall score is derived from section scores. */
  overallRule: z.enum(["AVERAGE_ROUNDED_HALF_UP", "AVERAGE_ROUNDED_NEAREST_HALF"]),
  /** Section score bounds. */
  minSectionScore: z.number(),
  maxSectionScore: z.number(),
  /** Official score validity in months. */
  validityMonths: z.number().int().positive().default(24),
  /** Transition note (TOEFL dual-reports 0–120 until 2028, …). */
  transitionNote: z.string().optional(),
});

export const sourceRefSchema = z.object({
  label: z.string().min(2),
  url: z.string().url(),
  retrievedAt: z.string(), // ISO date
  note: z.string().optional(),
});

export const specPayloadSchema = z.object({
  sections: z.array(specSectionSchema).min(1),
  scoringModel: scoringModelSchema,
  taskTypes: z.array(taskTypeSchema).min(1),
  sourceRefs: z.array(sourceRefSchema).min(1),
});

export type TaskType = z.infer<typeof taskTypeSchema>;
export type SpecSection = z.infer<typeof specSectionSchema>;
export type ScoringModel = z.infer<typeof scoringModelSchema>;
export type SourceRef = z.infer<typeof sourceRefSchema>;
export type SpecPayload = z.infer<typeof specPayloadSchema>;

export type SpecDto = {
  id: string;
  examKey: ExamKey;
  variant: string;
  name: string;
  version: number;
  status: "draft" | "active" | "retired";
  effectiveDate: string;
  lastReviewedAt: string;
  sections: SpecSection[];
  scoringModel: ScoringModel;
  taskTypes: TaskType[];
  sourceRefs: SourceRef[];
  notes: string | null;
};

// ---------------------------------------------------------------------------
// Profile / estimates / plan
// ---------------------------------------------------------------------------

export const examProfileInputSchema = z.object({
  examKey: z.enum(EXAM_KEYS),
  variant: z.string().default("STANDARD"),
  /** STANDARD, or UKVI when preparing for the in-person SELT delivery. */
  delivery: z.enum(["STANDARD", "UKVI"]).default("STANDARD"),
  proficiency: z.enum(CEFR_LEVELS).default("UNKNOWN"),
  targetScore: z.number().min(0).max(9.5),
  examDate: z.string().nullable().optional(), // ISO date or null
  dailyMinutes: z.number().int().min(10).max(480).default(30),
  difficultSections: z.array(z.enum(SECTION_KEYS)).default([]),
  /** Planner initial-assessment extras (optional; onboarding omits them). */
  strongestSection: z.enum(SECTION_KEYS).nullable().optional(),
  /** Self-reported "if I sat the exam today" score — context, never evidence. */
  currentScoreEstimate: z.number().min(0).max(9.5).nullable().optional(),
  previousAttempts: z
    .array(
      z.object({
        exam: z.string().min(1).max(60),
        overall: z.number().min(0).max(9.5),
        date: z.string().max(20).optional(),
      }),
    )
    .max(10)
    .optional(),
});
export type ExamProfileInput = z.infer<typeof examProfileInputSchema>;

export type SectionEstimateDto = {
  section: SectionKey;
  estimated: number;
  confidence: number;
  strengths: string[];
  weaknesses: string[];
};

export const studyTaskSchema = z.object({
  title: z.string(),
  refType: z.string(),
  refId: z.string().nullable().optional(),
  href: z.string(), // hash route into the common app or the academy
  section: z.string().nullable().optional(),
  minutes: z.number().int().positive(),
  reason: z.string().optional(),
  stepId: z.string().optional(),
  mockTestId: z.string().optional(),
});
export type StudyTask = z.infer<typeof studyTaskSchema>;

export const studyDaySchema = z.object({
  date: z.string(), // YYYY-MM-DD
  minutes: z.number().int(),
  focus: z.string(),
  tasks: z.array(studyTaskSchema),
});
export type StudyDay = z.infer<typeof studyDaySchema>;

export const studyPlanSchema = z.object({
  days: z.array(studyDaySchema),
  nextMockDate: z.string().nullable(),
  notes: z.array(z.string()).default([]),
});
export type StudyPlan = z.infer<typeof studyPlanSchema>;

// ---------------------------------------------------------------------------
// Recommendations (common-English-foundation bridge)
// ---------------------------------------------------------------------------

export type RecommendationDto = {
  title: string;
  reason: string;
  href: string;
  source: string; // which curriculum module the item comes from
  section: SectionKey;
  minutes: number;
};

// ---------------------------------------------------------------------------
// Mock test content
// ---------------------------------------------------------------------------

export const mcqPayloadSchema = z.object({
  options: z.array(z.string()).min(2),
  /** How many correct options must be selected (MCQ_MULTI). */
  choose: z.number().int().min(1).optional(),
  passage: z.string().optional(),
  audioScript: z.string().optional(), // played with browser speech synthesis
});
export const tfngPayloadSchema = z.object({
  statement: z.string(),
  labels: z.array(z.string()).length(3).default(["True", "False", "Not Given"]),
  passage: z.string().optional(),
});
export const matchingPayloadSchema = z.object({
  items: z.array(z.object({ id: z.string(), text: z.string() })).min(2),
  options: z.array(z.object({ id: z.string(), text: z.string() })).min(2),
  prompt: z.string().optional(),
});
export const mapLabelPayloadSchema = z.object({
  /** PROMPT 44: IELTS plan/map labelling — a rendered plan with numbered
   *  blanks plus lettered place options; the recording is section-level
   *  (audioParts) or carried in audioScript for standalone drills. */
  plan: z.object({
    title: z.string().min(3),
    caption: z.string().default(""),
    grid: z.array(z.array(z.union([z.null(), z.object({
      room: z.string(),
      label: z.string().optional(),
      blank: z.number().int().positive().optional(),
    })])).min(1)),
  }),
  options: z.array(z.object({ letter: z.string().min(1).max(2), text: z.string().min(1) })).min(3),
  audioScript: z.string().optional(),
});
export const fillBlankPayloadSchema = z.object({
  context: z.string(), // may contain ___ markers
  blanks: z.array(
    z.object({
      answer: z.string(),
      alternatives: z.array(z.string()).default([]),
      numbers: z.boolean().default(false), // accept digits in words and figures
    }),
  ).min(1),
  words: z.number().int().positive().optional(), // "NO MORE THAN TWO WORDS"
});
export const completeWordsPayloadSchema = z.object({
  context: z.string(),
  words: z.array(
    z.object({
      /** Word with ___ marking the missing part, e.g. "env___ment". */
      masked: z.string(),
      answer: z.string(),
    }),
  ).min(1),
});
export const sentenceReconstructionPayloadSchema = z.object({
  scrambled: z.array(z.string()).min(3),
  answer: z.string(),
  cue: z.string().optional(),
});
export const writingTaskPayloadSchema = z.object({
  prompt: z.string(),
  supporting: z.string().optional(), // data description, reading excerpt…
  minWords: z.number().int().positive().default(150),
  suggestedMinutes: z.number().int().positive().default(20),
  rubricKey: z.string(),
  part: z.string().optional(),
});
export const speakingTaskPayloadSchema = z.object({
  prompt: z.string(),
  prepSec: z.number().int().nonnegative().default(30),
  speakSec: z.number().int().positive().default(60),
  rubricKey: z.string(),
  part: z.string().optional(),
  followUp: z.array(z.string()).default([]),
});

export const dictationPayloadSchema = z.object({
  /** The recording text, played once (browser speech synthesis). */
  audioScript: z.string().min(10),
  prompt: z.string().optional(),
});
export const listenRepeatPayloadSchema = z.object({
  /** The sentence the learner must repeat aloud. */
  sentence: z.string().min(5),
  /** Recording window in seconds (8/10/12 on the real 2026 test). */
  windowSec: z.number().int().positive().default(10),
  context: z.string().optional(),
});
export const emailPayloadSchema = z.object({
  /** GT Task 1 style letter task: situation + three bullet points. */
  situation: z.string().min(10),
  bullets: z.array(z.string()).min(3).max(3),
  tone: z.enum(["formal", "semi-formal", "informal"]),
  minWords: z.number().int().positive().default(150),
  suggestedMinutes: z.number().int().positive().default(20),
  rubricKey: z.string().default("ielts.writing"),
  part: z.string().optional(),
});
export const discussionPayloadSchema = z.object({
  /** TOEFL 2026 Academic Discussion: professor prompt + classmate posts. */
  prompt: z.string().min(10),
  posts: z.array(z.object({ author: z.string().min(1), text: z.string().min(5) })).min(1),
  minWords: z.number().int().positive().default(100),
  suggestedMinutes: z.number().int().positive().default(10),
  rubricKey: z.string().default("toefl.writing"),
  part: z.string().optional(),
});

export const questionPayloadSchemas = {
  MCQ_SINGLE: mcqPayloadSchema,
  MCQ_MULTI: mcqPayloadSchema,
  TFNG: tfngPayloadSchema,
  MATCHING: matchingPayloadSchema,
  MAP_LABEL: mapLabelPayloadSchema,
  FILL_BLANK: fillBlankPayloadSchema,
  COMPLETE_WORDS: completeWordsPayloadSchema,
  SENTENCE_RECONSTRUCTION: sentenceReconstructionPayloadSchema,
  DICTATION: dictationPayloadSchema,
  LISTEN_REPEAT: listenRepeatPayloadSchema,
  WRITING_TASK: writingTaskPayloadSchema,
  EMAIL_WRITING: emailPayloadSchema,
  DISCUSSION_TASK: discussionPayloadSchema,
  SPEAKING_TASK: speakingTaskPayloadSchema,
} as const;

export type QuestionTypeCode = keyof typeof questionPayloadSchemas;
export type McqPayload = z.infer<typeof mcqPayloadSchema>;
export type TfngPayload = z.infer<typeof tfngPayloadSchema>;
export type MatchingPayload = z.infer<typeof matchingPayloadSchema>;
export type FillBlankPayload = z.infer<typeof fillBlankPayloadSchema>;
export type CompleteWordsPayload = z.infer<typeof completeWordsPayloadSchema>;
export type SentenceReconstructionPayload = z.infer<typeof sentenceReconstructionPayloadSchema>;
export type DictationPayload = z.infer<typeof dictationPayloadSchema>;
export type ListenRepeatPayload = z.infer<typeof listenRepeatPayloadSchema>;
export type WritingTaskPayload = z.infer<typeof writingTaskPayloadSchema>;
export type EmailPayload = z.infer<typeof emailPayloadSchema>;
export type DiscussionPayload = z.infer<typeof discussionPayloadSchema>;
export type SpeakingTaskPayload = z.infer<typeof speakingTaskPayloadSchema>;

/** Constructed (non-machine-marked) response types. */
export const CONSTRUCTED_QUESTION_TYPES: readonly string[] = [
  "WRITING_TASK",
  "EMAIL_WRITING",
  "DISCUSSION_TASK",
  "SPEAKING_TASK",
];

export function isConstructedType(type: string): boolean {
  return CONSTRUCTED_QUESTION_TYPES.includes(type);
}

/** PROMPT 44: one recording inside a listening section — a group of
 *  questions hears this script together (part-level audio, played once
 *  under exam timing). Scripts are playback material, not answer keys. */
export type MockAudioPart = {
  key: string;
  label: string;
  script: string;
  directions?: string;
};

/** Question as sent to the player (answer key stripped). */
export type SafeMockQuestion = {
  id: string;
  order: number;
  type: string;
  stem: string | null;
  points: number;
  /** 1–5, 1 = foundation (A2-B1) … 5 = advanced (C1-C2). */
  difficulty: number;
  skills: string[];
  payload: unknown;
  /** PROMPT 44: audio-part group this question belongs to, if any. */
  group?: string | null;
};

export type SafeMockSection = {
  id: string;
  key: SectionKey;
  title: string;
  directions: string | null;
  timingSec: number;
  order: number;
  /** Spec-driven player policy for this section (parsed from the pinned spec). */
  navigation: SectionNavigation;
  /** PROMPT 44: part-level recordings shared by question groups. */
  audioParts?: MockAudioPart[];
  questions: SafeMockQuestion[];
};

export type SafeMockTest = {
  id: string;
  examKey: ExamKey;
  variant: string;
  title: string;
  kind: string;
  lengthLabel: string;
  description: string | null;
  spec: { name: string; version: number; effectiveDate: string };
  /** Honesty note shown in the player chrome. */
  integrityNote: string;
  sections: SafeMockSection[];
};

export type SectionScore = {
  section: SectionKey;
  raw: number;
  max: number;
  score: number; // on the exam's section scale
};

// ---------------------------------------------------------------------------
// Practice modes (engine requirement: selectable modes, PROMPT 51 catalogue)
//
//   full_mock   Full Mock Examination        — official section clocks
//   section     Section-wise Mock Test       — one section from the pool
//   timed       Timed Practice               — custom set under a budget
//   untimed     Untimed Practice             — no clocks, per-item reveal
//   topic       Topic-specific Practice      — items tagged with one topic
//   weakness    Weakness-based Practice      — targets the learner's gaps
//   diagnostic  Diagnostic Assessment        — balanced timed sample + profile
//   adaptive    Adaptive Practice            — difficulty calibrated to the
//                                              learner (TalkSy heuristic only)
//   mistakes    Previous mistakes practice   — retry wrong/skipped items
//   custom      Custom practice              — manual filters
// ---------------------------------------------------------------------------

export const ATTEMPT_MODES = [
  "full_mock",
  "section",
  "timed",
  "untimed",
  "topic",
  "weakness",
  "diagnostic",
  "adaptive",
  "mistakes",
  "custom",
] as const;
export type AttemptModeId = (typeof ATTEMPT_MODES)[number];

/** Kinds of MockTest rows that are assembled per learner on demand (never
 *  part of the authored library). Shared so the engine, admin views and the
 *  launcher cannot drift apart. */
export const ASSEMBLED_SET_KINDS = [
  "section",
  "timed",
  "untimed",
  "topic",
  "weakness",
  "diagnostic",
  "adaptive",
  "mistakes",
  "custom",
] as const;
export type AssembledSetKind = (typeof ASSEMBLED_SET_KINDS)[number];

/** Legacy rows stored "exam" | "practice"; they are normalised on read. */
export const LEGACY_ATTEMPT_MODES = ["exam", "practice"] as const;

export const ATTEMPT_MODE_LABELS: Record<string, string> = {
  full_mock: "Full mock examination",
  section: "Section-wise practice",
  timed: "Timed practice",
  untimed: "Untimed learning practice",
  topic: "Topic-specific practice",
  weakness: "Weakness-based practice",
  diagnostic: "Diagnostic assessment",
  adaptive: "Adaptive practice",
  mistakes: "Previous mistakes practice",
  custom: "Custom practice",
  exam: "Full mock examination", // legacy value
  practice: "Untimed learning practice", // legacy value
};

/** Short one-line descriptions used by the launcher and history views. */
export const ATTEMPT_MODE_DESCRIPTIONS: Record<string, string> = {
  full_mock: "Sit a whole mock under the official section clocks and navigation rules.",
  section: "Every question of one section, assembled from the published pool.",
  timed: "A custom selection under your own minute budget.",
  untimed: "No clocks. Answer, then check each objective item with its explanation.",
  topic: "Items that share one topic or skill tag — drill exactly what you choose.",
  weakness: "Assembled from the skills and task types you perform worst on.",
  diagnostic: "A balanced timed sample across all sections that profiles your level.",
  adaptive: "Difficulty calibrated to your recent accuracy — TalkSy's own heuristic, not ETS's algorithm.",
  mistakes: "Retry the exact questions you previously got wrong or skipped.",
  custom: "Manual filters on sections, task types and difficulty.",
};

/** Normalise any stored/requested mode to its current id (legacy included). */
export function normalizeAttemptMode(value: unknown): AttemptModeId | "exam" | "practice" {
  if (typeof value !== "string") return "exam";
  if ((ATTEMPT_MODES as readonly string[]).includes(value)) return value as AttemptModeId;
  if (value === "practice") return "practice";
  return "exam";
}

/** Human label for any stored mode. */
export function attemptModeLabel(mode: string): string {
  return ATTEMPT_MODE_LABELS[mode] ?? "Full mock examination";
}

/** Whether a stored mode runs the section clocks (legacy values included). */
export function isTimedMode(mode: string, timedColumn?: boolean): boolean {
  if (mode === "exam") return true;
  if (mode === "practice") return false;
  // Learning-oriented modes never run clocks unless explicitly requested.
  if (mode === "untimed" || mode === "mistakes" || mode === "weakness") return false;
  // Topic practice defaults to free learning; the learner may opt into clocks.
  if (mode === "topic") return timedColumn ?? false;
  // A diagnostic assessment is always sat under exam timing.
  if (mode === "diagnostic") return true;
  if (mode === "custom" || mode === "section" || mode === "timed" || mode === "full_mock" || mode === "adaptive") {
    return timedColumn ?? true;
  }
  return timedColumn ?? true;
}

// ---------------------------------------------------------------------------
// Attempt results
// ---------------------------------------------------------------------------

/** Per-question outcome on a submitted attempt, with reviewable detail. */
export type QuestionResult = {
  questionId: string;
  order: number;
  section: SectionKey;
  type: string;
  correct: boolean | null;
  points: number;
  awarded: number;
  skillGaps: string[];
  /** Post-submission teaching note (from the question's enrichment). */
  explanation: string | null;
  /** The learner's answer, formatted for display. */
  givenAnswer: string | null;
  /** The answer key / expected response, revealed after submission. */
  correctAnswer: string | null;
  /** Seconds the learner spent on this question (0 when untracked). */
  timeSpentSec: number;
  flagged: boolean;
  /** Rubric feedback for constructed responses, when graded. */
  constructedFeedback: { score: number; criteria: Array<{ name: string; score: number; comment: string }>; summary: string } | null;
};

/** Performance broken down by task type (one row per question type sat). */
export type TaskPerformance = {
  /** Question type code, e.g. MCQ_SINGLE. */
  type: string;
  /** Official-format label from the pinned spec's task-type catalogue. */
  label: string;
  section: SectionKey;
  total: number;
  /** Objective items marked correct (constructed items excluded). */
  correct: number;
  awarded: number;
  maxPoints: number;
  avgTimeSec: number;
};

/** Time utilisation per section: official clock vs tracked question time. */
export type SectionTimeUtilisation = {
  section: SectionKey;
  /** Official section clock from the pinned spec (seconds). */
  allottedSec: number;
  /** Sum of per-question tracked seconds (player open on that question). */
  trackedSec: number;
  /** trackedSec ÷ allottedSec, clamped to [0, 1]. */
  utilisation: number;
  /** "under" | "on" | "over" — tracked pace relative to the clock. */
  pace: "under" | "on" | "over";
};

/** Skill-tag accuracy profile, shared by diagnostics and weakness practice. */
export type SkillStat = {
  skill: string;
  label: string;
  total: number;
  correct: number;
  accuracy: number;
};

/** Diagnostic assessment profile (mode = "diagnostic" only). */
export type DiagnosticProfile = {
  /** One row per section sat, with the practice band estimate. */
  sections: Array<{
    section: SectionKey;
    /** Practice band estimate on the exam's own scale (never official). */
    estimatedScore: number;
    raw: number;
    max: number;
    accuracy: number;
    /** False when the section carries only rubric-graded tasks — no
     *  objective estimate is possible from the sample. */
    measurable: boolean;
  }>;
  skills: SkillStat[];
  /** Skill tags with the lowest accuracy (enough evidence only). */
  weakestSkills: SkillStat[];
  /** Task types with the lowest accuracy (enough evidence only). */
  weakestTasks: TaskPerformance[];
  /** Plain-language verdict for the learner. */
  summary: string;
};

export type AttemptResultDto = {
  attemptId: string;
  mockTitle: string;
  examKey: ExamKey;
  variant: string;
  spec: { name: string; version: number };
  status: "in_progress" | "submitted" | "scored";
  /** Which of the practice modes produced this attempt (legacy-aware). */
  mode: string;
  modeLabel: string;
  timed: boolean;
  submittedAt: string | null;
  /** Total seconds from start to submission (null while in progress). */
  timeSpentSec: number | null;
  /** Objective items with no (or empty) answer at submission. */
  unansweredCount: number;
  sectionScores: SectionScore[];
  totalScore: number | null;
  scoreDisplay: string | null;
  /** Honesty note attached to every report. */
  integrityNote: string;
  feedback: {
    strengths: string[];
    weaknesses: string[];
    notes: string[];
  } | null;
  /** Bridge into the common curriculum, ranked for this attempt's gaps. */
  recommendations: RecommendationDto[];
  questionResults: QuestionResult[];
  /** PROMPT 51: per-task-type performance (objective items). */
  taskPerformance: TaskPerformance[];
  /** PROMPT 51: per-section time utilisation against the official clocks. */
  timeUtilisation: SectionTimeUtilisation[];
  /** PROMPT 51: diagnostic profile (diagnostic attempts only, else null). */
  diagnosticProfile: DiagnosticProfile | null;
};
