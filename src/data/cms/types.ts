/**
 * CMS content model.
 *
 * The CMS stores curriculum in the database and is managed by staff through
 * the admin UI — no source-code changes needed to add content. Blocks reuse
 * the same shapes as the code-based curriculum (src/data/curriculum/types.ts)
 * so the shared BlockRenderer renders both; the CMS adds three authoring
 * kinds the code model lacks: asset-backed audio, assignment and richer
 * image references.
 */

import type {
  DetailedExample,
  Difficulty,
  Exercise,
  FourSkillsBlock,
  LanguageSupportBlock,
  LessonIntroBlock,
  MistakesBlock,
  RevisionBlock,
  SafeExercise,
  Skill,
  StepsBlock,
  SummaryBlock,
  ComparisonBlock,
  UsageBlock,
} from "@/data/curriculum/types";

// ---------------------------------------------------------------------------
// Roles, statuses, workflow
// ---------------------------------------------------------------------------

export type CmsRole = "student" | "editor" | "teacher" | "admin";
export type AccountStatus = "active" | "suspended";

/** Working-copy workflow state of courses and lessons. */
export type CmsWorkflowStatus = "draft" | "review" | "approved";

/**
 * Educational content-review status (PROMPT 35 production pipeline).
 * AI-authored content enters as "ai-reviewed" at best — it is NEVER
 * auto-labelled human-reviewed or approved. Human promotion happens
 * through explicit staff actions; "published" is the derived terminal
 * state (approved review + live).
 */
export type CmsReviewStatus =
  | "draft"
  | "ai-reviewed"
  | "human-reviewed"
  | "approved";

export const CMS_REVIEW_STATUSES: CmsReviewStatus[] = [
  "draft",
  "ai-reviewed",
  "human-reviewed",
  "approved",
];

export const REVIEW_STATUS_LABEL: Record<
  CmsReviewStatus | "published",
  string
> = {
  draft: "Draft",
  "ai-reviewed": "AI-reviewed",
  "human-reviewed": "Human-reviewed",
  approved: "Approved",
  published: "Published",
};

/** Question-bank lifecycle (published = attachable & servable). */
export type CmsQuestionStatus =
  | "draft"
  | "review"
  | "approved"
  | "published"
  | "retired";

/** Workflow action names (server-side transition guards). */
export type CmsAction =
  | "submit" // draft → review
  | "approve" // review → approved
  | "reject" // review → draft (with note)
  | "publish" // approved → live (admins only)
  | "unpublish"; // live → not live (admins only)

// ---------------------------------------------------------------------------
// CMS lesson blocks (authoring kinds)
// ---------------------------------------------------------------------------

export interface CmsTextBlock {
  type: "text";
  text: string;
  translation?: string;
}

export interface CmsHeadingBlock {
  type: "heading";
  text: string;
  translation?: string;
}

export interface CmsDefinitionBlock {
  type: "definition";
  term: string;
  partOfSpeech?: string;
  definition: string;
  translation?: string;
  example?: { english: string; translation: string };
}

export interface CmsExampleBlock {
  type: "example";
  title?: string;
  items: DetailedExample[];
  note?: string;
}

export interface CmsTableBlock {
  type: "table";
  title?: string;
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface CmsVocabularyBlock {
  type: "vocabulary-list";
  title?: string;
  words: {
    word: string;
    partOfSpeech: string;
    definition: string;
    translation: string;
    example?: { english: string; translation: string };
  }[];
}

export interface CmsGrammarBlock {
  type: "grammar-rule";
  title: string;
  rule: string;
  explanation?: string;
  examples: { english: string; translation: string }[];
  exceptions?: string[];
}

/**
 * Grammar table (PROMPT 55 §2): a conjugation / declension / pattern table
 * with a teaching note — the exam-lesson authoring kind for systematic
 * grammar contrasts (person × tense, singular/plural, verb patterns…).
 */
export interface CmsGrammarTableBlock {
  type: "grammar-table";
  title: string;
  headers: string[];
  rows: string[][];
  note?: string;
}

/**
 * Reading passage (PROMPT 55 §2): an exam-style text with its source line —
 * the passage a lesson's questions are built on.
 */
export interface CmsPassageBlock {
  type: "passage";
  title: string;
  source?: string;
  paragraphs: string[];
  note?: string;
}

/**
 * Model answer (PROMPT 55 §2): a reference response at a stated level
 * (e.g. "Band 8.0 model answer") with examiner-style annotations.
 */
export interface CmsModelAnswerBlock {
  type: "model-answer";
  label: string;
  body: string[];
  annotations?: string[];
  taskRef?: string;
}

/**
 * Transcript (PROMPT 55 §2): the verbatim text of a recording, displayed
 * as a follow-along script — optionally linked to an audio asset.
 */
export interface CmsTranscriptBlock {
  type: "transcript";
  title?: string;
  lines: { speaker?: string; text: string }[];
  audioAssetId?: string;
}

export interface CmsDialogueBlock {
  type: "dialogue";
  title?: string;
  context?: string;
  lines: { speaker: string; text: string; translation?: string }[];
}

export interface CmsImageBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
  /** Present when the image is an uploaded asset (src = asset file URL). */
  assetId?: string;
}

/**
 * Audio: either browser speech synthesis of `text` (rate-adjustable, like the
 * code-based lessons) or an uploaded asset from the audio manager.
 */
export interface CmsSentenceDiagramBlock {
  type: "sentence-diagram";
  /** The full sentence the diagram dissects. */
  sentence: string;
  translation?: string;
  /** Labelled slots, e.g. Subject / Verb / Object / Complement. */
  parts: { label: string; text: string }[];
}

export interface CmsVideoBlock {
  type: "video";
  /** External video URL (YouTube/Vimeo watch or embed links are embedded;
   * anything else renders as a safe link card). No uploads are stored. */
  url: string;
  title: string;
  note?: string;
}

export interface CmsAudioBlock {
  type: "audio";
  label?: string;
  mode: "tts" | "asset";
  text?: string;
  rate?: number;
  translation?: string;
  audioAssetId?: string;
  assetTitle?: string;
}

/** A set of question-bank questions rendered as interactive exercises. */
export interface CmsPracticeBlock {
  type: "practice";
  title?: string;
  exerciseIds: string[];
  /** Guided sets offer hints per question; independent sets hold answers back. */
  variant?: "guided" | "independent";
  /** One-line teaching note shown under the set title. */
  note?: string;
}

/** A free-writing task; learners must submit before completing the lesson. */
export interface CmsAssignmentBlock {
  type: "assignment";
  title: string;
  instructions: string;
  minWords: number;
  maxWords: number;
}

export interface CmsHomeworkBlock {
  type: "homework";
  title?: string;
  tasks: string[];
}

export interface CmsNoteBlock {
  type: "note";
  title?: string;
  text: string;
}

export interface CmsWarningBlock {
  type: "warning";
  title?: string;
  text: string;
}

export type CmsBlock =
  | CmsTextBlock
  | CmsHeadingBlock
  | CmsDefinitionBlock
  | CmsExampleBlock
  | CmsTableBlock
  | CmsVocabularyBlock
  | CmsGrammarBlock
  | CmsGrammarTableBlock
  | CmsPassageBlock
  | CmsModelAnswerBlock
  | CmsTranscriptBlock
  | CmsDialogueBlock
  | CmsImageBlock
  | CmsAudioBlock
  | CmsPracticeBlock
  | CmsAssignmentBlock
  | CmsHomeworkBlock
  | CmsNoteBlock
  | CmsWarningBlock
  | CmsSentenceDiagramBlock
  | CmsVideoBlock
  | LessonIntroBlock
  | StepsBlock
  | UsageBlock
  | ComparisonBlock
  | MistakesBlock
  | FourSkillsBlock
  | SummaryBlock
  | RevisionBlock
  | LanguageSupportBlock;

export type CmsBlockType = CmsBlock["type"];

export const CMS_BLOCK_TYPES: CmsBlockType[] = [
  "heading",
  "text",
  "definition",
  "example",
  "table",
  "vocabulary-list",
  "grammar-rule",
  "grammar-table",
  "passage",
  "model-answer",
  "transcript",
  "dialogue",
  "sentence-diagram",
  "image",
  "audio",
  "video",
  "practice",
  "assignment",
  "homework",
  "note",
  "warning",
  "lesson-intro",
  "steps",
  "usage",
  "comparison",
  "mistakes",
  "four-skills",
  "summary",
  "revision",
  "language-support",
];

/** Authoring metadata for the block palette (admin UI). */
export const CMS_BLOCK_META: Record<
  CmsBlockType,
  { label: string; description: string }
> = {
  heading: { label: "Heading", description: "Section title" },
  text: { label: "Paragraph", description: "Explanatory text" },
  definition: { label: "Definition", description: "Term + meaning + example" },
  example: { label: "Examples", description: "Translated example pairs" },
  table: { label: "Table", description: "Rows and columns" },
  "vocabulary-list": { label: "Vocabulary", description: "Word list with translations" },
  "grammar-rule": { label: "Grammar explanation", description: "Rule + examples + exceptions" },
  "grammar-table": { label: "Grammar table", description: "Conjugation/pattern table with a teaching note" },
  passage: {
    label: "Reading passage",
    description: "An exam-style text with source line — build questions on it",
  },
  "model-answer": {
    label: "Model answer",
    description: "A reference response at a stated level, with annotations",
  },
  transcript: {
    label: "Transcript",
    description: "Verbatim recording script for follow-along listening",
  },
  dialogue: { label: "Dialogue", description: "Conversation lines" },
  "sentence-diagram": {
    label: "Sentence diagram",
    description: "A sentence split into labelled parts (subject, verb, object…)",
  },
  image: { label: "Image", description: "Upload or link a picture" },
  audio: { label: "Audio", description: "Uploaded audio or spoken text" },
  video: {
    label: "Video",
    description: "External video link (YouTube/Vimeo embeds automatically)",
  },
  practice: { label: "Exercises", description: "Questions from the question bank" },
  assignment: { label: "Assignment", description: "Reflective writing task" },
  homework: { label: "Homework", description: "Self-study task list" },
  note: { label: "Note", description: "Highlight an aside" },
  warning: { label: "Warning", description: "Common-mistake alert" },
  "lesson-intro": {
    label: "Lesson introduction",
    description: "What the lesson studies + before-you-start recap",
  },
  steps: { label: "Step-by-step teaching", description: "A concept broken into small steps" },
  usage: { label: "Real-life usage", description: "Where the concept appears in communication" },
  comparison: { label: "Comparison", description: "Two similar concepts side by side" },
  mistakes: { label: "Common mistakes", description: "Wrong sentence, correction, reason" },
  "four-skills": { label: "Four skills", description: "Reading + writing + listening + speaking tasks" },
  summary: { label: "Summary", description: "Key takeaways" },
  revision: { label: "Revision quiz", description: "Recall questions from earlier chapters" },
  "language-support": { label: "Language support", description: "Validated Urdu/Hindi glosses" },
};

/** Default empty block payload for each type (palette "Add" action). */
export function defaultCmsBlock(type: CmsBlockType): CmsBlock {
  switch (type) {
    case "heading":
      return { type: "heading", text: "New section" };
    case "text":
      return { type: "text", text: "" };
    case "definition":
      return { type: "definition", term: "", partOfSpeech: "", definition: "" };
    case "example":
      return { type: "example", items: [{ english: "", translation: "" }] };
    case "table":
      return { type: "table", headers: ["", ""], rows: [["", ""]] };
    case "vocabulary-list":
      return {
        type: "vocabulary-list",
        words: [{ word: "", partOfSpeech: "", definition: "", translation: "" }],
      };
    case "grammar-rule":
      return {
        type: "grammar-rule",
        title: "",
        rule: "",
        examples: [{ english: "", translation: "" }],
      };
    case "grammar-table":
      return {
        type: "grammar-table",
        title: "",
        headers: ["Person", "Affirmative", "Negative", "Question"],
        rows: [["", "", "", ""]],
      };
    case "passage":
      return { type: "passage", title: "", paragraphs: [""] };
    case "model-answer":
      return { type: "model-answer", label: "", body: [""], annotations: [] };
    case "transcript":
      return { type: "transcript", lines: [{ text: "" }] };
    case "dialogue":
      return { type: "dialogue", lines: [{ speaker: "A", text: "" }] };
    case "image":
      return { type: "image", src: "", alt: "" };
    case "audio":
      return { type: "audio", mode: "tts", text: "", rate: 0.9 };
    case "sentence-diagram":
      return {
        type: "sentence-diagram",
        sentence: "",
        parts: [
          { label: "Subject", text: "" },
          { label: "Verb", text: "" },
        ],
      };
    case "video":
      return { type: "video", url: "", title: "", note: "" };
    case "practice":
      return { type: "practice", exerciseIds: [] };
    case "assignment":
      return {
        type: "assignment",
        title: "",
        instructions: "",
        minWords: 40,
        maxWords: 150,
      };
    case "homework":
      return { type: "homework", tasks: [""] };
    case "note":
      return { type: "note", title: "Note", text: "" };
    case "warning":
      return { type: "warning", title: "Watch out", text: "" };
    case "lesson-intro":
      return { type: "lesson-intro", text: "", beforeYouStart: [] };
    case "steps":
      return { type: "steps", title: "", steps: [{ title: "", text: "" }] };
    case "usage":
      return { type: "usage", items: [{ situation: "", example: "" }] };
    case "comparison":
      return {
        type: "comparison",
        title: "",
        columns: ["First concept", "Second concept"],
        rows: [{ aspect: "", left: "", right: "" }],
      };
    case "mistakes":
      return { type: "mistakes", items: [{ wrong: "", right: "", reason: "" }] };
    case "four-skills":
      return {
        type: "four-skills",
        reading: { text: "" },
        writing: { task: "" },
        listening: { script: "" },
        speaking: { task: "" },
      };
    case "summary":
      return { type: "summary", points: [""] };
    case "revision":
      return {
        type: "revision",
        items: [{ question: "", options: ["", ""], correctIndex: 0, explanation: "" }],
      };
    case "language-support":
      return { type: "language-support", entries: [{ english: "" }] };
  }
}

// ---------------------------------------------------------------------------
// Admin DTOs
// ---------------------------------------------------------------------------

export interface CmsLevelDto {
  id: string;
  slug: string;
  name: string;
  description: string;
  order: number;
}

export interface CmsLessonSummaryDto {
  id: string;
  slug: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  order: number;
  status: CmsWorkflowStatus;
  /** Educational content-review status (draft → ai-reviewed → …). */
  reviewStatus: CmsReviewStatus;
  live: boolean;
  version: number;
  publishedVersion: number | null;
  blockCount: number;
  prerequisiteSlugs: string[];
}

export interface CmsUnitDto {
  id: string;
  slug: string;
  title: string;
  description: string;
  order: number;
  lessons: CmsLessonSummaryDto[];
}

export interface CmsModuleDto {
  id: string;
  slug: string;
  title: string;
  description: string;
  order: number;
  units: CmsUnitDto[];
}

export interface CmsCourseDto {
  id: string;
  slug: string;
  title: string;
  description: string;
  levelId: string | null;
  levelName: string | null;
  status: CmsWorkflowStatus;
  live: boolean;
  order: number;
  enrolmentCount: number;
  modules: CmsModuleDto[];
}

export interface CmsCourseTreeDto {
  levels: CmsLevelDto[];
  courses: CmsCourseDto[];
}

export interface CmsLessonVersionDto {
  id: string;
  version: number;
  changeNote: string;
  changedByEmail: string | null;
  createdAt: string;
}

export interface CmsLessonDetailDto {
  id: string;
  slug: string;
  title: string;
  description: string;
  objectives: string[];
  estimatedMinutes: number;
  order: number;
  status: CmsWorkflowStatus;
  reviewStatus: CmsReviewStatus;
  live: boolean;
  version: number;
  publishedVersion: number | null;
  unitId: string;
  courseSlug: string;
  courseTitle: string;
  blocks: (CmsBlock & { id: string })[];
  prerequisites: { id: string; slug: string; title: string }[];
  /** Full exercises referenced by practice blocks (staff only — has answers). */
  exercises: Exercise[];
  versions: CmsLessonVersionDto[];
}

export interface CmsQuestionVersionDto {
  id: string;
  version: number;
  changeNote: string;
  changedByEmail: string | null;
  createdAt: string;
}

export interface CmsQuestionDto {
  id: string;
  slug: string;
  type: string;
  skill: Skill | string;
  difficulty: Difficulty | string;
  prompt: string;
  tags: string[];
  status: CmsQuestionStatus;
  version: number;
  updatedAt: string;
  /** Full exercise payload — visible to staff only (includes answers). */
  exercise: Exercise;
  versions: CmsQuestionVersionDto[];
  attemptCount: number;
  correctCount: number;
}

export interface CmsAssetDto {
  id: string;
  kind: "audio" | "image";
  title: string;
  fileName: string;
  mimeType: string;
  sizeBytes: number;
  durationSeconds: number | null;
  transcript: string;
  language: string;
  pronunciation: string;
  licence: string;
  source: string;
  relatedLessonId: string | null;
  relatedLessonTitle: string | null;
  createdAt: string;
  fileUrl: string;
}

export interface CmsAdminUserDto {
  id: string;
  email: string;
  name: string | null;
  role: CmsRole;
  status: AccountStatus;
  createdAt: string;
  lastActiveDay: string | null;
  lessonsCompleted: number;
  totalAttempts: number;
  accuracy: number | null;
  cmsEnrolments: number;
  cmsLessonsCompleted: number;
}

export interface CmsAuditEntryDto {
  id: string;
  action: string;
  entityType: string;
  entityId: string;
  actorEmail: string | null;
  detail: Record<string, unknown>;
  createdAt: string;
}

// ---------------------------------------------------------------------------
// Dashboard analytics DTO (every number is a real database aggregate)
// ---------------------------------------------------------------------------

export interface CmsCountByStatus {
  draft: number;
  review: number;
  approved: number;
  live: number;
}

export interface CmsStatsDto {
  totalLearners: number;
  activeLearners7d: number;
  activeLearners30d: number;
  courseEnrolments: number;
  cmsLessonsCompleted: number;
  coreLessonsCompleted: number;
  platformAttempts: number;
  platformAccuracy: number | null; // 0..1 across all graded exercises
  assessmentPassRate: number | null; // 0..1 completed AssessmentResults
  cmsQuestionAccuracy: number | null; // 0..1 attempts with source = "cms"
  engagement: {
    attempts30d: number;
    writingSubmissions30d: number;
    tutorMessages30d: number;
    speakingAttempts30d: number;
    avgAttemptsPerActiveLearner: number | null;
  };
  popularCoreLessons: { slug: string; learners: number; completions: number }[];
  popularCmsLessons: {
    slug: string;
    title: string;
    learners: number;
    completions: number;
  }[];
  contentStatus: {
    courses: CmsCountByStatus;
    lessons: CmsCountByStatus;
    questions: { draft: number; review: number; approved: number; published: number; retired: number };
  };
  enrolmentsByCourse: { courseTitle: string; learners: number }[];
  /** PROMPT 39 §8 — content coverage by proficiency level. */
  contentCoverage: {
    levelId: string;
    levelName: string;
    courses: number;
    coursesLive: number;
    chapters: number;
    lessons: number;
    lessonsLive: number;
  }[];
  /** PROMPT 39 §8 — most common learner mistake categories (platform-wide). */
  commonMistakes: { category: string; count: number }[];
  /** PROMPT 39 §8 — CMS lessons with real learners but poor completion. */
  poorCompletionLessons: {
    slug: string;
    title: string | null;
    learners: number;
    completions: number;
    completionRate: number;
  }[];
  /** PROMPT 39 §8 — lessons flagged for revision, each with its reasons. */
  needsRevision: { slug: string; title: string | null; reasons: string[] }[];
}

// ---------------------------------------------------------------------------
// Learner DTOs (published content only — grading data never leaves the server)
// ---------------------------------------------------------------------------

export interface CmsLearnerLessonBlockDto {
  id: string;
  block: CmsBlock;
}

export interface CmsLearnerLessonDto {
  slug: string;
  title: string;
  description: string;
  objectives: string[];
  estimatedMinutes: number;
  courseSlug: string;
  courseTitle: string;
  unitTitle: string;
  version: number;
  /** Honest content provenance label shown to learners. */
  reviewStatus: CmsReviewStatus;
  blocks: CmsLearnerLessonBlockDto[];
  /** Sanitised exercises referenced by practice blocks (answers stripped). */
  exercises: SafeExercise[];
  /** Assignment blocks already submitted by this learner. */
  submittedBlockIds: string[];
  progress: { status: "in-progress" | "completed"; completedAt: string | null };
  prerequisitesMet: boolean;
  missingPrerequisites: { slug: string; title: string }[];
  nextLessonSlug: string | null;
  prevLessonSlug: string | null;
}

export interface CmsLearnerCourseLessonDto {
  slug: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  live: true;
  completed: boolean;
  inProgress: boolean;
  locked: boolean;
  lockedBy: { slug: string; title: string }[];
  prerequisiteSlugs: string[];
  /** Chapter (CMS unit) the lesson belongs to — used for outline grouping. */
  unitTitle: string;
  unitOrder: number;
}

export interface CmsLearnerCourseDto {
  slug: string;
  title: string;
  description: string;
  levelName: string | null;
  enrolled: boolean;
  lessons: CmsLearnerCourseLessonDto[];
  completedCount: number;
  totalLessons: number;
}

export interface CmsCatalogueCourseDto {
  slug: string;
  title: string;
  description: string;
  levelName: string | null;
  enrolled: boolean;
  lessonCount: number;
  learnerCount: number;
}

/**
 * Anonymous projection of the published catalogue — used by the public
 * homepage. Same live-database figures as the learner catalogue, minus any
 * per-user state (there is no user yet to be enrolled or not).
 */
export interface CmsPublicCatalogueCourseDto {
  slug: string;
  title: string;
  description: string;
  levelName: string | null;
  lessonCount: number;
  learnerCount: number;
}

// ---------------------------------------------------------------------------
// Import / export bundle
// ---------------------------------------------------------------------------

export interface CmsExportBundle {
  format: "talksy-cms-export";
  version: 1;
  exportedAt: string;
  course: {
    slug: string;
    title: string;
    description: string;
    levelSlug: string | null;
    levelName: string | null;
    status: CmsWorkflowStatus;
    live: boolean;
    modules: {
      slug: string;
      title: string;
      description: string;
      units: {
        slug: string;
        title: string;
        description: string;
        lessons: {
          slug: string;
          title: string;
          description: string;
          objectives: string[];
          estimatedMinutes: number;
          blocks: { id: string; type: string; data: Record<string, unknown> }[];
          prerequisites: string[]; // lesson slugs within the bundle
        }[];
      }[];
    }[];
  };
  questions: {
    slug: string;
    type: string;
    skill: string;
    difficulty: string;
    prompt: string;
    tags: string[];
    status: CmsQuestionStatus;
    exercise: Exercise; // includes answers — staff-only artefact
  }[];
}

export interface CmsImportIssue {
  path: string;
  message: string;
}

export interface CmsImportPreview {
  ok: boolean;
  errors: CmsImportIssue[];
  warnings: CmsImportIssue[];
  summary: {
    courseTitle: string;
    modules: number;
    units: number;
    lessons: number;
    blocks: number;
    questions: number;
    newQuestionSlugs: string[];
    renamedSlugs: { original: string; imported: string }[];
  };
}
