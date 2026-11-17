/**
 * Examination administration — shared types, zod schemas and workflow
 * constants.
 *
 * The admin layer enforces the house rules:
 *   - Exam rules are data (specs) — components and services never hardcode
 *     them; every admin write validates against the same zod schemas the
 *     learner-facing engine uses.
 *   - Human approval before publication: question content moves
 *     draft → in-review → approved → published, and each transition is
 *     role-gated (editor submits, teacher approves, admin publishes) and
 *     audit-logged. A mock cannot be published while any of its questions
 *     is not published.
 *   - Specifications are versioned, immutable once published, and pinned
 *     to historical attempts — an active or retired spec is never edited
 *     in place.
 */

import { z } from "zod";
import { questionPayloadSchemas } from "../types";

// ---------------------------------------------------------------------------
// Question review workflow
// ---------------------------------------------------------------------------

export const QUESTION_REVIEW_STATES = [
  "draft",
  "in-review",
  "approved",
  "published",
  "retired",
] as const;
export type QuestionReviewState = (typeof QUESTION_REVIEW_STATES)[number];

export const QUESTION_REVIEW_STATE_LABELS: Record<QuestionReviewState, string> = {
  draft: "Draft",
  "in-review": "In review",
  approved: "Approved",
  published: "Published",
  retired: "Retired",
};

/** Allowed transitions. Enforced in questions.ts, mirrored by the UI. */
export const QUESTION_TRANSITIONS: Record<string, QuestionReviewState> = {
  submit: "in-review",
  approve: "approved",
  reject: "draft",
  publish: "published",
  unpublish: "approved",
  retire: "retired",
};

/** Minimum CMS role per transition (rbac.ts hierarchy editor < teacher < admin). */
export const TRANSITION_MIN_ROLE: Record<string, "editor" | "teacher" | "admin"> = {
  submit: "editor",
  approve: "teacher",
  reject: "teacher",
  publish: "admin",
  unpublish: "admin",
  retire: "admin",
};

/** The states a transition may start from (the human-approval chain). */
export const TRANSITION_FROM_STATE: Record<string, QuestionReviewState[]> = {
  submit: ["draft"],
  approve: ["in-review"],
  reject: ["in-review"],
  publish: ["approved"],
  unpublish: ["published"],
  retire: ["in-review", "approved", "published"],
};

// ---------------------------------------------------------------------------
// Answer-key shapes per objective question type (mirrors the grading engine)
// ---------------------------------------------------------------------------

const answerKeySchemas = {
  MCQ_SINGLE: z.object({ option: z.number().int().nonnegative() }),
  MCQ_MULTI: z.object({ options: z.array(z.number().int().nonnegative()).min(1) }),
  TFNG: z.object({ value: z.number().int().nonnegative() }),
  MATCHING: z.object({ pairs: z.record(z.string(), z.string()) }),
  FILL_BLANK: z.object({
    blanks: z
      .array(
        z.object({
          answer: z.string().min(1),
          alternatives: z.array(z.string()).default([]),
          numbers: z.boolean().default(false),
        }),
      )
      .min(1),
  }),
  COMPLETE_WORDS: z.object({ answer: z.string().min(1) }),
  SENTENCE_RECONSTRUCTION: z.object({ answer: z.string().min(1) }),
  DICTATION: z.object({ text: z.string().min(1) }),
  LISTEN_REPEAT: z.object({ text: z.string().min(1) }),
} as const;

/** Constructed-response types carry no machine answer key. */
export const NO_ANSWER_KEY_TYPES = [
  "WRITING_TASK",
  "EMAIL_WRITING",
  "DISCUSSION_TASK",
  "SPEAKING_TASK",
] as const;

export function validateAnswerKey(type: string, answer: unknown): string | null {
  // A missing key is fine while drafting — publication enforces presence.
  if (answer === null || answer === undefined) return null;
  if ((NO_ANSWER_KEY_TYPES as readonly string[]).includes(type)) {
    return "Constructed-response tasks carry no machine answer key — leave the answer empty.";
  }
  const schema = answerKeySchemas[type as keyof typeof answerKeySchemas];
  if (!schema) {
    // Unknown objective type: accept any JSON object (forward compatibility).
    return typeof answer === "object" && answer !== null
      ? null
      : "The answer key must be a JSON object.";
  }
  const parsed = schema.safeParse(answer);
  return parsed.success ? null : `Invalid answer key for ${type}: ${parsed.error.issues[0]?.message ?? "wrong shape"}`;
}

// ---------------------------------------------------------------------------
// Question create/update input
// ---------------------------------------------------------------------------

export const questionCreateSchema = z.object({
  sectionId: z.string().min(1),
  type: z.string().min(2),
  stem: z.string().nullable().optional(),
  payload: z.unknown(), // validated per type below
  answer: z.unknown().nullable().optional(),
  points: z.number().int().min(0).max(100).default(1),
  difficulty: z.number().int().min(1).max(5).default(2),
  skills: z.array(z.string().min(1).max(40)).max(8).default([]),
  explanation: z.string().nullable().optional(),
  source: z.string().min(2).max(120).default("original-practice"),
  order: z.number().int().min(1).optional(),
});
export type QuestionCreateInput = z.input<typeof questionCreateSchema>;

export const questionUpdateSchema = z.object({
  type: z.string().min(2).optional(),
  stem: z.string().nullable().optional(),
  payload: z.unknown().optional(),
  answer: z.unknown().nullable().optional(),
  points: z.number().int().min(0).max(100).optional(),
  difficulty: z.number().int().min(1).max(5).optional(),
  skills: z.array(z.string().min(1).max(40)).max(8).optional(),
  explanation: z.string().nullable().optional(),
  source: z.string().min(2).max(120).optional(),
  order: z.number().int().min(1).optional(),
});
export type QuestionUpdateInput = z.input<typeof questionUpdateSchema>;

/** Validate a question payload against the type's zod schema (if known). */
export function validateQuestionPayload(type: string, payload: unknown): string | null {
  const schema = questionPayloadSchemas[type as keyof typeof questionPayloadSchemas];
  if (!schema) {
    return typeof payload === "object" && payload !== null
      ? null
      : "The payload must be a JSON object.";
  }
  const parsed = schema.safeParse(payload);
  return parsed.success
    ? null
    : `Invalid payload for ${type}: ${parsed.error.issues
        .slice(0, 2)
        .map((issue) => `${issue.path.join(".") || "root"}: ${issue.message}`)
        .join("; ")}`;
}

export const questionActionSchema = z.object({
  action: z.enum(["submit", "approve", "reject", "publish", "unpublish", "retire"]),
  note: z.string().max(500).default(""),
});

// ---------------------------------------------------------------------------
// DTOs
// ---------------------------------------------------------------------------

export type AdminQuestionDto = {
  id: string;
  sectionId: string;
  mockTestId: string;
  mockTitle: string;
  examKey: string;
  variant: string;
  section: string;
  order: number;
  type: string;
  typeLabel: string;
  stem: string | null;
  preview: string;
  payload: unknown;
  answer: unknown;
  answerLabel: string | null;
  points: number;
  difficulty: number;
  skills: string[];
  explanation: string | null;
  source: string;
  contentStatus: QuestionReviewState;
};

export type CollectionInventoryDto = {
  key: string;
  name: string;
  description: string;
  examKey: string;
  variants: string[];
  delivery: "STANDARD" | "UKVI" | null;
  sourceLabel: string;
  sourceUrl: string;
  note: string | null;
  counts: {
    publishedMocks: number;
    draftMocks: number;
    publishedQuestions: number;
    reviewQuestions: number;
    liveLessons: number;
    rubrics: number;
    pathwaySteps: number;
    specVersion: number | null;
  };
  courses: Array<{ slug: string; title: string; live: boolean }>;
};

export type SpecImpactDto = {
  spec: {
    id: string;
    name: string;
    examKey: string;
    variant: string;
    version: number;
    status: string;
  };
  previousActive: { id: string; version: number } | null;
  /** Question types present in questions but gone from this spec's catalog. */
  removedTaskTypes: Array<{ type: string; questionCount: number }>;
  /** Questions (published) whose type is not in this spec's catalog. */
  affectedQuestions: Array<{
    id: string;
    mockTitle: string;
    type: string;
    contentStatus: string;
  }>;
  affectedQuestionCount: number;
  /** Published mocks still pinned to an older spec version. */
  staleMocks: Array<{ id: string; title: string; specVersion: number }>;
  staleMockCount: number;
  /** Historical attempts keep their pinned spec regardless — stated, not blocked. */
  attemptsOnPreviousSpec: number;
};

export type ExamAdminStatsDto = {
  content: {
    publishedLessons: number;
    lessonsByCollection: Array<{ collection: string; liveLessons: number }>;
    questionsByStatus: Record<QuestionReviewState, number>;
    questionsTotal: number;
    mocksByStatus: Record<string, number>;
    curatedMockCount: number;
    rubrics: number;
  };
  review: {
    questionsAwaiting: number;
    questionsInReview: number;
    questionsApproved: number;
    draftSpecs: number;
    /** Total queue size for the badge. */
    awaitingTotal: number;
  };
  outdated: {
    mocksOnRetiredSpecs: Array<{ id: string; title: string; specVersion: number; status: string }>;
    questionsWithRetiredTypes: number;
    specsStaleReview: Array<{ id: string; name: string; version: number; lastReviewedAt: string }>;
    outdatedTotal: number;
  };
  sections: Array<{ section: string; attempts: number; distinctLearners: number }>;
  performance: {
    attempts: number;
    responses: number;
    /** Mean autoScore/points over objective responses — null when none. */
    averageAccuracy: number | null;
    bySection: Array<{ section: string; accuracy: number | null; responses: number }>;
    byExam: Array<{ exam: string; accuracy: number | null; responses: number }>;
  };
  weaknesses: Array<{ tag: string; occurrences: number; sampleSection: string }>;
  generatedAt: string;
};
