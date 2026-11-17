/**
 * Examination content governance — the shared contract (PROMPT 55).
 *
 * The governance layer unifies every examination content entity (lessons,
 * questions, exercises, mocks, courses, pathways, rubrics, audio, passages,
 * model answers, specifications) under one six-stage approval pipeline:
 *
 *   draft → educational review → examination review → answer validation
 *         → approved → published
 *
 * Three truths are kept deliberately separate so each stays honest:
 *   - delivery (CmsLesson.live, MockTestQuestion.contentStatus, …) answers
 *     "can learners see this right now?";
 *   - governance status (this pipeline) answers "how far has this content
 *     travelled through human approval?";
 *   - provenance answers "who wrote it?" — every TalkSy original item is
 *     honestly labelled ai-generated until a human reworks it.
 *
 * The house rule (PROMPT 55 §3): AI-generated content never automatically
 * receives human-approved status. `humanApproved` defaults to false, flips
 * to true only through an explicit teacher-or-above action in workflow.ts,
 * and no seeder, AI pipeline or import path may create an override row.
 */

// ---------------------------------------------------------------------------
// Pipeline states
// ---------------------------------------------------------------------------

export const GOVERNANCE_STATUSES = [
  "draft",
  "educational-review",
  "examination-review",
  "answer-validation",
  "approved",
  "published",
] as const;
export type GovernanceStatus = (typeof GOVERNANCE_STATUSES)[number];

export const GOVERNANCE_STATUS_LABELS: Record<GovernanceStatus, string> = {
  draft: "Draft",
  "educational-review": "Educational review",
  "examination-review": "Examination review",
  "answer-validation": "Answer validation",
  approved: "Approved",
  published: "Published",
};

export const GOVERNANCE_STATUS_ORDER: Record<GovernanceStatus, number> =
  Object.fromEntries(GOVERNANCE_STATUSES.map((s, i) => [s, i])) as Record<
    GovernanceStatus,
    number
  >;

/** The three middle stages — content sitting here is "pending review". */
export const REVIEW_STAGE_STATUSES: GovernanceStatus[] = [
  "educational-review",
  "examination-review",
  "answer-validation",
];

// ---------------------------------------------------------------------------
// Workflow actions
// ---------------------------------------------------------------------------

export const GOVERNANCE_ACTIONS = [
  "submit", // draft → educational review (editor submits for review)
  "educational-approve", // educational review → examination review (teacher)
  "examination-approve", // examination review → answer validation (teacher)
  "validate-answers", // answer validation → approved (teacher; engine-gated)
  "publish", // approved → published (admin)
  "unpublish", // published → approved (admin)
  "reject", // any review stage → draft (teacher, with a note)
] as const;
export type GovernanceAction = (typeof GOVERNANCE_ACTIONS)[number];

export const GOVERNANCE_ACTION_LABELS: Record<GovernanceAction, string> = {
  submit: "Submit for educational review",
  "educational-approve": "Pass educational review",
  "examination-approve": "Pass examination review",
  "validate-answers": "Validate answers & approve",
  publish: "Publish",
  unpublish: "Unpublish",
  reject: "Reject to draft",
};

/** Minimum CMS role per action (rbac.ts hierarchy editor < teacher < admin). */
export const GOVERNANCE_ACTION_MIN_ROLE: Record<
  GovernanceAction,
  "editor" | "teacher" | "admin"
> = {
  submit: "editor",
  "educational-approve": "teacher",
  "examination-approve": "teacher",
  "validate-answers": "teacher",
  publish: "admin",
  unpublish: "admin",
  reject: "teacher",
};

/** The states each action may start from — the no-skips human chain.
 * Reject also reaches approved/published content: pulling live material
 * back to draft when scrutiny fails it is a legitimate teacher action. */
export const GOVERNANCE_ACTION_FROM: Record<GovernanceAction, GovernanceStatus[]> = {
  submit: ["draft"],
  "educational-approve": ["educational-review"],
  "examination-approve": ["examination-review"],
  "validate-answers": ["answer-validation"],
  publish: ["approved"],
  unpublish: ["published"],
  reject: [
    "educational-review",
    "examination-review",
    "answer-validation",
    "approved",
    "published",
  ],
};

/** The state each action lands in. */
export const GOVERNANCE_ACTION_TO: Record<GovernanceAction, GovernanceStatus> = {
  submit: "educational-review",
  "educational-approve": "examination-review",
  "examination-approve": "answer-validation",
  "validate-answers": "approved",
  publish: "published",
  unpublish: "approved",
  reject: "draft",
};

/**
 * Every action that advances content into or through a human stage requires
 * an accountable reviewer note (≥ GOVERNANCE_NOTE_MIN_LENGTH characters).
 * This is the accountability floor for ALL content — and part of the hard
 * rule that makes automatic human approval of AI-generated content
 * impossible: no code path performs these actions, only authenticated
 * staff do.
 */
export const GOVERNANCE_NOTE_MIN_LENGTH = 10;

// ---------------------------------------------------------------------------
// Provenance
// ---------------------------------------------------------------------------

export const GOVERNANCE_PROVENANCES = [
  "ai-generated",
  "ai-assisted",
  "human-authored",
] as const;
export type GovernanceProvenance = (typeof GOVERNANCE_PROVENANCES)[number];

export const GOVERNANCE_PROVENANCE_LABELS: Record<GovernanceProvenance, string> = {
  "ai-generated": "AI-generated",
  "ai-assisted": "AI-assisted (human reworked)",
  "human-authored": "Human-authored",
};

// ---------------------------------------------------------------------------
// Content registry — the entity types administrators manage (PROMPT 55 §1)
// ---------------------------------------------------------------------------

export const GOVERNANCE_ENTITY_TYPES = [
  "examination", // IELTS, TOEFL iBT (informational root)
  "spec", // examination version / specification (own lifecycle, listed here)
  "pathway", // preparation pathway
  "course", // academy course (CMS course in a collection)
  "module", // course module
  "chapter", // course chapter (CMS unit)
  "lesson", // lesson (CMS lesson in an academy course)
  "exercise", // practice exercise (CMS question / practice-library bank item)
  "question", // mock examination question (MockTestQuestion)
  "audio", // uploaded audio asset
  "passage", // reading passage (practice-library reading sets)
  "model-answer", // reference model answers & samples (writing/speaking banks)
  "rubric", // scoring rubric
  "mock", // mock examination
] as const;
export type GovernanceEntityType = (typeof GOVERNANCE_ENTITY_TYPES)[number];

export const GOVERNANCE_ENTITY_LABELS: Record<GovernanceEntityType, string> = {
  examination: "Examinations",
  spec: "Examination versions",
  pathway: "Preparation pathways",
  course: "Courses",
  module: "Modules",
  chapter: "Chapters",
  lesson: "Lessons",
  exercise: "Exercises",
  question: "Questions",
  audio: "Audio",
  passage: "Passages",
  "model-answer": "Model answers",
  rubric: "Rubrics",
  mock: "Mock examinations",
};

/** Entity types whose six-stage transitions are governed here. Examinations
 * and specifications keep their own lifecycles (the exam registry and the
 * spec versioning workflow in the blueprints tab) and are listed for
 * visibility and completeness tracking. */
export const TRANSITIONABLE_ENTITY_TYPES: GovernanceEntityType[] = [
  "pathway",
  "course",
  "module",
  "chapter",
  "lesson",
  "exercise",
  "question",
  "audio",
  "passage",
  "model-answer",
  "rubric",
  "mock",
];

export interface GovernanceEntityDto {
  entityType: GovernanceEntityType;
  /** Stable key — lesson slug, question id, "bank:<itemId>", asset id… */
  entityKey: string;
  title: string;
  /** Context line, e.g. "IELTS · Academic Reading · reading set 04". */
  subtitle: string;
  examKey: "IELTS" | "TOEFL_IBT" | null;
  /** Effective pipeline status (override row wins over the derived default). */
  status: GovernanceStatus;
  provenance: GovernanceProvenance;
  humanApproved: boolean;
  /** Delivery truth from the owning system — can learners see it now? */
  live: boolean;
  /** Raw status in the owning system (reviewStatus / contentStatus / …). */
  sourceStatus: string;
  /** Owning system: cms | mock-library | practice-library | spec | pathway | asset. */
  source: string;
  /** Learner deep link where one exists (bank items, mocks, lessons). */
  href?: string;
  /** Latest governance note (override row), shown in the registry. */
  note?: string;
  updatedAt?: string;
  meta: Record<string, string | number | boolean>;
}

export interface GovernanceRegistryResult {
  entities: GovernanceEntityDto[];
  total: number;
  page: number;
  pageCount: number;
  pageSize: number;
  countsByType: Record<GovernanceEntityType, number>;
  countsByStatus: Record<GovernanceStatus, number>;
}

export interface GovernanceRegistryFilters {
  entityType?: GovernanceEntityType;
  status?: GovernanceStatus;
  /** Filter to content not yet human-approved. */
  unapprovedOnly?: boolean;
  /** Filter to content that is live while never human-approved. */
  liveUnapprovedOnly?: boolean;
  q?: string;
  page?: number;
  pageSize?: number;
}

// ---------------------------------------------------------------------------
// Question validation (PROMPT 55 §4) — the eight mandated categories
// ---------------------------------------------------------------------------

export const VALIDATION_CATEGORIES = [
  "missing-answer-key", // Missing answer keys
  "multiple-correct", // Multiple correct possibilities
  "incorrect-answer", // Correct answers (key present but not actually valid)
  "broken-audio", // Broken audio
  "invalid-passage-ref", // Invalid passage references
  "invalid-question-type", // Incorrect question types
  "duplicate-question", // Duplicate questions
  "outdated-format", // Outdated examination formats
] as const;
export type ValidationCategory = (typeof VALIDATION_CATEGORIES)[number];

export const VALIDATION_CATEGORY_LABELS: Record<ValidationCategory, string> = {
  "missing-answer-key": "Missing answer keys",
  "multiple-correct": "Multiple correct possibilities",
  "incorrect-answer": "Incorrect answers",
  "broken-audio": "Broken audio",
  "invalid-passage-ref": "Invalid passage references",
  "invalid-question-type": "Incorrect question types",
  "duplicate-question": "Duplicate questions",
  "outdated-format": "Outdated examination formats",
};

export type ValidationSeverity = "blocking" | "warning";

export interface ValidationIssue {
  category: ValidationCategory;
  severity: ValidationSeverity;
  /** The entity the issue is reported on: question | exercise | lesson | mock | spec | audio. */
  entityType: "question" | "exercise" | "lesson" | "mock" | "spec" | "audio";
  entityKey: string;
  title: string;
  evidence: string;
  suggestion: string;
}

export interface GovernanceValidationReport {
  issues: ValidationIssue[];
  byCategory: Record<ValidationCategory, number>;
  blockingCount: number;
  warningCount: number;
  checked: {
    mockQuestions: number;
    cmsExercises: number;
    lessons: number;
    audioAssets: number;
    specs: number;
    practiceLibraryItems: number;
  };
  generatedAt: string;
}

// ---------------------------------------------------------------------------
// Completeness (PROMPT 55 §7)
// ---------------------------------------------------------------------------

export type LessonCompleteness = "complete" | "partial" | "placeholder";

export interface LessonCompletenessDto {
  slug: string;
  title: string;
  completeness: LessonCompleteness;
  reasons: string[];
  blockCount: number;
  exerciseCount: number;
  objectivesCount: number;
  hasPractice: boolean;
  hasSummary: boolean;
  humanApproved: boolean;
  live: boolean;
}

export const READINESS_DIMENSIONS = [
  "lessons-complete",
  "practice",
  "answer-keys",
  "assessments",
  "learning-outcomes",
  "review-status",
] as const;
export type ReadinessDimensionKey = (typeof READINESS_DIMENSIONS)[number];

export interface CourseReadinessDimensionDto {
  key: ReadinessDimensionKey;
  label: string;
  pass: boolean;
  detail: string;
}

export type CourseReadinessLevel = "ready" | "needs-attention" | "not-ready";

export interface CourseReadinessDto {
  courseSlug: string;
  courseTitle: string;
  examKey: "IELTS" | "TOEFL_IBT" | null;
  collectionName: string;
  live: boolean;
  lessons: {
    total: number;
    complete: number;
    partial: number;
    placeholder: number;
  };
  dimensions: CourseReadinessDimensionDto[];
  blockers: string[];
  readiness: CourseReadinessLevel;
  summary: string;
}

// ---------------------------------------------------------------------------
// Analytics (PROMPT 55 §6) — the ten mandated metrics
// ---------------------------------------------------------------------------

export interface LearnerErrorPatternDto {
  /** Stable pattern key, e.g. "skill:paraphrase" or "reading-error:trap". */
  pattern: string;
  label: string;
  occurrences: number;
  exam: string | null;
  section: string | null;
}

export interface GovernanceAnalyticsDto {
  /** 1–3. Total / complete / placeholder lessons (partial reported too). */
  lessons: {
    total: number;
    complete: number;
    partial: number;
    placeholder: number;
  };
  /** 4. Pending reviews — entities sitting in the three review stages. */
  pendingReviews: number;
  /** Effective pipeline distribution across every registry entity. */
  statusDistribution: Record<GovernanceStatus, number>;
  /** 5. Published questions (mock questions + CMS exercises, by source). */
  publishedQuestions: {
    mockQuestions: number;
    cmsExercises: number;
    total: number;
  };
  /** 6. Missing answer keys (from the validation engine). */
  missingAnswerKeys: number;
  /** 7. Outdated content (retired-spec mocks, retired task types, overdue specs). */
  outdatedContent: {
    mocksOnRetiredSpecs: number;
    questionsWithRetiredTypes: number;
    specsPastReviewDate: number;
    total: number;
  };
  /** 8. Audio without transcripts (uploaded assets; synthesized bank audio
   *     always carries its transcript by design). */
  audioWithoutTranscripts: number;
  audioTotal: number;
  /** 9. Mock examinations by status. */
  mockExaminations: {
    total: number;
    published: number;
    draft: number;
    archived: number;
  };
  /** 10. Learner error patterns (skill gaps + error taxonomies + evaluation
   *      weakness areas), most frequent first. */
  learnerErrorPatterns: LearnerErrorPatternDto[];
  /** Honesty extra: live entities that have never been human-approved. */
  liveWithoutHumanApproval: number;
  generatedAt: string;
}

export interface GovernanceOverviewDto {
  analytics: GovernanceAnalyticsDto;
  readiness: CourseReadinessDto[];
  validation: {
    byCategory: Record<ValidationCategory, number>;
    blockingCount: number;
    warningCount: number;
  };
}
