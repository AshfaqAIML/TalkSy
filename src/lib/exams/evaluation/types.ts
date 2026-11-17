/**
 * AI-assisted writing & speaking evaluation — shared types and contracts.
 *
 * This module is the single source of truth for the evaluation layer that
 * sits ON TOP of the examination engine: given one learner response to one
 * exam task (IELTS writing/speaking, TOEFL writing/speaking), it produces
 * a structured feedback report that always separates five kinds of
 * information:
 *
 *   VERIFIED     — facts measured from the response (word count, presence
 *                  of a greeting, transcript-match accuracy).
 *   RULE_BASED   — deterministic heuristics (bullet coverage, overview
 *                  detection, the grammar rule engine).
 *   AI_GENERATED — language-model feedback (explanations, coaching).
 *   ESTIMATED    — projected exam performance derived from the above.
 *                  Never an official IELTS band or ETS score.
 *   HUMAN_REVIEWED — a qualified teacher's note added on top of the report
 *                  by staff. The AI report is never altered by it; the
 *                  review is a separate, separately-labelled layer.
 *
 * Hard contracts enforced by the engine and asserted by tests:
 *   1. No score without an explanation — AI items missing explanations are
 *      discarded, and an overall estimate is never emitted bare.
 *   2. Evidence quotes must come from the learner's actual response.
 *   3. Regional accents and English varieties are never treated as errors.
 *   4. Where reliable evaluation is impossible (no audio, response too
 *      short, AI unavailable), the limitation is stated, not hidden.
 *   5. Every report carries the non-official-score disclaimers.
 */

import { z } from "zod";

// ---------------------------------------------------------------------------
// Provenance
// ---------------------------------------------------------------------------

export const PROVENANCE_LABELS = [
  "VERIFIED",
  "RULE_BASED",
  "AI_GENERATED",
  "ESTIMATED",
  "HUMAN_REVIEWED",
] as const;
export type ProvenanceLabel = (typeof PROVENANCE_LABELS)[number];

export const PROVENANCE_LEGEND: Array<{ label: ProvenanceLabel; meaning: string }> = [
  {
    label: "VERIFIED",
    meaning:
      "Measured fact from your response (word count, structure present, transcript-match accuracy). Not an opinion.",
  },
  {
    label: "RULE_BASED",
    meaning:
      "Deterministic check from EnglishPath's rule engines (grammar rules, task-requirement heuristics). No AI involved.",
  },
  {
    label: "AI_GENERATED",
    meaning:
      "Feedback written by the AI evaluation model, quoting your own words as evidence. Coaching, not a measurement.",
  },
  {
    label: "ESTIMATED",
    meaning:
      "Projected exam performance derived from verified checks, rules and AI feedback together. A practice indication only — never an official IELTS band or ETS score.",
  },
  {
    label: "HUMAN_REVIEWED",
    meaning:
      "A qualified teacher has read this evaluation and added their own note. Where the teacher and the AI disagree, the teacher's judgement comes first.",
  },
];

// ---------------------------------------------------------------------------
// Safeguard copy (surfaced on every evaluation; asserted by tests)
// ---------------------------------------------------------------------------

export const EVALUATION_SCORE_DISCLAIMER =
  "This is an AI-assisted practice estimate, not an official IELTS band or ETS score. No system can promise an exact result — treat it as a learning signal.";

export const EVALUATION_HUMAN_REVIEW_NOTE =
  "Preparing for a high-stakes test date? Bring these evaluations to a qualified teacher for human review — AI feedback supports, but never replaces, a trained examiner.";

export const EVALUATION_ACCENT_NOTE =
  "Regional accents and World English varieties (Indian, British, American, Australian, Nigerian and others) are never treated as errors. Pronunciation notes only address features that affect intelligibility for listeners.";

// ---------------------------------------------------------------------------
// Scales
// ---------------------------------------------------------------------------

/** How an evaluator profile expresses scores. */
export const EVALUATION_SCALES = ["BAND", "TOEFL_LEVEL", "ACCURACY"] as const;
export type EvaluationScale = (typeof EVALUATION_SCALES)[number];

export type ScaleInfo = {
  kind: EvaluationScale;
  min: number;
  max: number;
  step: number;
  unit: string; // "band" | "task level" | "accuracy"
};

// ---------------------------------------------------------------------------
// Result DTO
// ---------------------------------------------------------------------------

export type EvidenceQuote = {
  /** Verbatim quote from the learner's response. */
  quote: string;
  note: string;
};

export type CriterionScore = {
  key: string;
  /** Official criterion name, e.g. "Task achievement". */
  name: string;
  score: number;
  maxScore: number;
  unit: string;
  explanation: string;
  evidence: EvidenceQuote[];
  provenance: ProvenanceLabel;
};

export type EvaluationCheck = {
  id: string;
  label: string;
  passed: boolean;
  detail: string;
  /** VERIFIED for exact measurements, RULE_BASED for heuristics. */
  provenance: Exclude<ProvenanceLabel, "AI_GENERATED" | "ESTIMATED" | "HUMAN_REVIEWED">;
};

export type GrammarCorrection = {
  original: string;
  corrected: string;
  explanation: string;
  provenance: ProvenanceLabel;
};

export type VocabularySuggestion = {
  original: string;
  suggestion: string;
  reason: string;
};

export type SentenceFeedback = {
  quote: string;
  comment: string;
  kind: "strength" | "issue" | "neutral";
};

export type OrganisationIssue = {
  issue: string;
  suggestion: string;
};

export type PronunciationGuidance = {
  aspect: string;
  note: string;
};

/** Off-task / irrelevant content flagged with the learner's own words. */
export type IrrelevantContentItem = {
  quote: string;
  note: string;
};

/** A study example written for this task — never "the only correct answer". */
export type ModelResponse = {
  text: string;
  note: string;
  provenance: ProvenanceLabel;
};

/** The structured revision exercise (learning loop, step 4). */
export type RevisionExercise = {
  title: string;
  instructions: string;
  /** Concrete, checkable steps derived from this evaluation. */
  steps: string[];
  /** Weakness labels the exercise targets. */
  focusAreas: string[];
};

/** How reliable this report's estimates are, and why (never fabricated precision). */
export type EvaluationConfidence = {
  level: "higher" | "moderate" | "lower";
  reasons: string[];
};

export type LessonRef = {
  title: string;
  source: string;
  href: string;
  minutes: number;
};

export type WeaknessDto = {
  /** Criterion / area id, e.g. "lexical-resource" or "task-requirements". */
  area: string;
  label: string;
  severity: "major" | "moderate" | "minor";
  evidence: string;
  /** Existing EnglishPath lessons that teach this weakness. */
  lessons: LessonRef[];
  /** Concrete practice suggestions. */
  practice: string[];
};

export type EvaluationOverall = {
  score: number;
  maxScore: number;
  unit: string;
  label: string; // e.g. "Estimated band 6.5" / "Estimated task level 4 / 5" / "88% accurate"
  explanation: string;
  provenance: ProvenanceLabel;
};

export type EvaluationResultDto = {
  evaluatorKey: string;
  examKey: "IELTS" | "TOEFL_IBT";
  examLabel: string;
  section: "writing" | "speaking";
  taskTitle: string;
  /** Short human name, e.g. "IELTS Academic Task 1". */
  taskLabel: string;
  createdAt: string;

  overall: EvaluationOverall | null;
  criteria: CriterionScore[];
  checks: EvaluationCheck[];

  grammarCorrections: GrammarCorrection[];
  vocabulary: VocabularySuggestion[];
  sentenceFeedback: SentenceFeedback[];
  missingRequirements: string[];
  organisation: OrganisationIssue[];
  recommendations: string[];

  /** Speaking only: the transcript used for evaluation + its source. */
  transcript: string | null;
  transcriptSource: "typed" | "browser-stt" | "server-stt" | "unknown";
  /** Measured length of the evaluated response. */
  wordCount: number;
  pronunciation: PronunciationGuidance[];
  /** Speaking only: how to develop the response further. */
  developmentSuggestions: string[];

  weaknesses: WeaknessDto[];
  /** Deterministic instruction for the revision step of the learning loop. */
  revisionGuidance: string | null;
  /** The structured revision exercise (concrete steps, not just advice). */
  revisionExercise: RevisionExercise | null;

  /** Off-task content found in the response (quoted verbatim, with notes). */
  irrelevantContent: IrrelevantContentItem[];
  /** A model response for study, where appropriate for the task type. */
  modelResponse: ModelResponse | null;
  /** How reliable the estimates in this report are. */
  confidence: EvaluationConfidence;

  limitations: string[];
  disclaimers: string[];
  /** False when the AI layer was unavailable and only checks/rules ran. */
  aiAvailable: boolean;
};

export type EvaluationStatus = "complete" | "partial" | "insufficient";

export type StoredEvaluationDto = {
  id: string;
  attemptId: string | null;
  questionId: string | null;
  evaluatorKey: string;
  examKey: string;
  section: string;
  taskTitle: string;
  status: EvaluationStatus;
  isRevision: boolean;
  revisionOfId: string | null;
  createdAt: string;
  /** The evaluated response text (prefills the revision editor). */
  inputText: string;
  result: EvaluationResultDto;
  /** Human-review layer (teacher note added on top; never alters the AI report). */
  review: EvaluationReviewDto;
};

export type EvaluationReviewDto = {
  status: "not_reviewed" | "human_reviewed";
  reviewerRole: string | null;
  reviewerNote: string | null;
  reviewedAt: string | null;
};

export type CriterionDelta = {
  key: string;
  name: string;
  before: number;
  after: number;
  delta: number;
  unit: string;
};

export type EvaluationComparisonDto = {
  baseId: string;
  revisedId: string;
  overallBefore: number | null;
  overallAfter: number | null;
  overallDelta: number | null;
  unit: string;
  criteria: CriterionDelta[];
  resolvedWeaknesses: string[];
  remainingWeaknesses: string[];
  wordCountBefore: number;
  wordCountAfter: number;
};

// ---------------------------------------------------------------------------
// API input schemas
// ---------------------------------------------------------------------------

export const TRANSCRIPT_SOURCES = ["typed", "browser-stt", "server-stt", "unknown"] as const;
export type TranscriptSource = (typeof TRANSCRIPT_SOURCES)[number];

/** Per-evaluator improvement rollup for the learner's history view. */
export type EvaluatorImprovementDto = {
  evaluatorKey: string;
  label: string;
  examKey: string;
  section: string;
  /** Total evaluations (roots + revisions) for this evaluator. */
  attempts: number;
  /** Root chains tracked (a chain = original + its revisions). */
  chains: number;
  firstOverall: number | null;
  latestOverall: number | null;
  /** latest − first, rounded to the scale step; null when either side is missing. */
  overallDelta: number | null;
  unit: string;
  lastAt: string;
};

export type EvaluationOverviewDto = {
  evaluations: StoredEvaluationDto[];
  improvement: EvaluatorImprovementDto[];
  totalEvaluations: number;
};

export const evaluateRequestSchema = z
  .object({
    /** Evaluate an existing mock response (attempt + question). */
    attemptId: z.string().min(5).optional(),
    questionId: z.string().min(5).optional(),
    /** Free evaluation without a mock context (learner picked the task). */
    evaluatorKey: z.string().min(5).optional(),
    /** Optional: the task prompt the learner was given (free evaluations). */
    taskPrompt: z.string().max(4000).optional(),
    /** The response text (or transcript) to evaluate. */
    text: z.string().min(1, "A response is required.").max(20_000),
    transcriptSource: z.enum(TRANSCRIPT_SOURCES).default("typed"),
    audioSec: z.number().min(0).max(1800).optional(),
  })
  .refine(
    (value) => Boolean(value.attemptId && value.questionId) || Boolean(value.evaluatorKey),
    { message: "Provide either attemptId + questionId, or evaluatorKey." },
  );
export type EvaluateRequest = z.infer<typeof evaluateRequestSchema>;

export const reviseRequestSchema = z.object({
  text: z.string().min(1, "A revised response is required.").max(20_000),
  transcriptSource: z.enum(TRANSCRIPT_SOURCES).default("typed"),
  audioSec: z.number().min(0).max(1800).optional(),
});
export type ReviseRequest = z.infer<typeof reviseRequestSchema>;
