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
  Difficulty,
  Exercise,
  SafeExercise,
  Skill,
} from "@/data/curriculum/types";

// ---------------------------------------------------------------------------
// Roles, statuses, workflow
// ---------------------------------------------------------------------------

export type CmsRole = "student" | "editor" | "teacher" | "admin";
export type AccountStatus = "active" | "suspended";

/** Working-copy workflow state of courses and lessons. */
export type CmsWorkflowStatus = "draft" | "review" | "approved";

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
  items: { english: string; translation: string }[];
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
  | CmsDialogueBlock
  | CmsImageBlock
  | CmsAudioBlock
  | CmsPracticeBlock
  | CmsAssignmentBlock
  | CmsHomeworkBlock
  | CmsNoteBlock
  | CmsWarningBlock;

export type CmsBlockType = CmsBlock["type"];

export const CMS_BLOCK_TYPES: CmsBlockType[] = [
  "heading",
  "text",
  "definition",
  "example",
  "table",
  "vocabulary-list",
  "grammar-rule",
  "dialogue",
  "image",
  "audio",
  "practice",
  "assignment",
  "homework",
  "note",
  "warning",
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
  dialogue: { label: "Dialogue", description: "Conversation lines" },
  image: { label: "Image", description: "Upload or link a picture" },
  audio: { label: "Audio", description: "Uploaded audio or spoken text" },
  practice: { label: "Exercises", description: "Questions from the question bank" },
  assignment: { label: "Assignment", description: "Reflective writing task" },
  homework: { label: "Homework", description: "Self-study task list" },
  note: { label: "Note", description: "Highlight an aside" },
  warning: { label: "Warning", description: "Common-mistake alert" },
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
    case "dialogue":
      return { type: "dialogue", lines: [{ speaker: "A", text: "" }] };
    case "image":
      return { type: "image", src: "", alt: "" };
    case "audio":
      return { type: "audio", mode: "tts", text: "", rate: 0.9 };
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
