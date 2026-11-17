/**
 * TalkSy Core English Programme — authoring types (PROMPT 34).
 *
 * The complete 56-chapter CEFR-referenced curriculum (Pre-A1 → C1) is
 * authored here as typed, reviewable data and seeded into the CMS
 * (levels → courses → modules → units → lessons → blocks + question bank)
 * by scripts/seed-programme.ts, following the proven IELTS authoring
 * pattern: content lives in code so it is type-checked and reviewable;
 * once seeded it is editable by staff in the admin CMS like any course.
 *
 * CEFR is used as a curriculum reference only — never as a claim of
 * official certification.
 *
 * Data guarantees (enforced by validateProgramme() + tests/programme.test.ts):
 *   - 56 chapters numbered CH-01..CH-56, grouped into six levels
 *     (Pre-A1: 8, A1: 10, A2: 10, B1: 10, B2: 10, C1: 8);
 *   - every chapter is a complete unit: description, objectives,
 *     prerequisites (always earlier chapters), duration, skills, strands,
 *     assessment requirements and completion criteria;
 *   - every lesson carries real teaching blocks, practice, an assignment
 *     and explicit difficulty — never a shell of headings;
 *   - the seven parallel strands (reading, writing, listening, speaking,
 *     pronunciation, vocabulary, communication) are practised at every
 *     level;
 *   - lessons are sequenced: each lesson defaults to requiring the
 *     previous lesson of its chapter, and the first lesson of a chapter
 *     is gated by the prerequisite chapters' final lessons.
 */

import type { CmsBlock } from "@/data/cms/types";
import type { Difficulty, Exercise, Skill } from "@/data/curriculum/types";

/** Blueprint-level skills: the six engine skills plus the two strand-only
 * labels (pronunciation, communication) used for curriculum metadata. */
export type ProgrammeSkill = Skill | "pronunciation" | "communication";

// ---------------------------------------------------------------------------
// Identifiers and enums
// ---------------------------------------------------------------------------

export type ProgrammeLevelId = "pre-a1" | "a1" | "a2" | "b1" | "b2" | "c1";

export const PROGRAMME_LEVEL_IDS: ProgrammeLevelId[] = [
  "pre-a1",
  "a1",
  "a2",
  "b1",
  "b2",
  "c1",
];

/** Continuous parallel practice tracks that run through every level. */
export type Strand =
  | "reading"
  | "writing"
  | "listening"
  | "speaking"
  | "pronunciation"
  | "vocabulary"
  | "communication";

export const STRANDS: Strand[] = [
  "reading",
  "writing",
  "listening",
  "speaking",
  "pronunciation",
  "vocabulary",
  "communication",
];

/** 1–5 lesson difficulty, banded per level (see DIFFICULTY_BANDS). */
export type LessonDifficulty = 1 | 2 | 3 | 4 | 5;

export const DIFFICULTY_BANDS: Record<ProgrammeLevelId, [number, number]> = {
  "pre-a1": [1, 2],
  a1: [1, 2],
  a2: [2, 3],
  b1: [2, 4],
  b2: [3, 4],
  c1: [4, 5],
};

// ---------------------------------------------------------------------------
// Question bank specs (same content model as the shared exercise engine)
// ---------------------------------------------------------------------------

/** One question-bank item; the seeder injects the row id as `exercise.id`. */
type DistributiveOmit<T, K extends PropertyKey> = T extends unknown
  ? Omit<T, K>
  : never;
export type ExerciseSpec = DistributiveOmit<Exercise, "id">;

/** Standard feedback block for an exercise (required by the grading engine). */
export function fb(correctAnswer: string, explanation: string, whyWrong?: string) {
  return { correctAnswer, explanation, ...(whyWrong ? { whyWrong } : {}) };
}

interface QOpts {
  skill?: Skill;
  difficulty?: Difficulty;
  hints?: string[];
  tags?: string[];
}

export function MCQ(
  prompt: string,
  options: [string, string][],
  correctId: string,
  feedback: ReturnType<typeof fb>,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "mcq",
    difficulty: o.difficulty ?? "easy",
    skill: o.skill ?? "grammar",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    options: options.map(([id, text]) => ({ id, text })),
    correctOptionId: correctId,
  };
}

export function FB(
  prompt: string,
  sentence: string,
  acceptedAnswers: string[],
  feedback: ReturnType<typeof fb>,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "fill-blank",
    difficulty: o.difficulty ?? "easy",
    skill: o.skill ?? "grammar",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    sentence,
    acceptedAnswers,
  };
}

export function MATCH(
  prompt: string,
  left: [string, string][],
  right: [string, string][],
  pairs: [string, string][],
  feedback: ReturnType<typeof fb>,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "match",
    difficulty: o.difficulty ?? "easy",
    skill: o.skill ?? "vocabulary",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    leftItems: left.map(([id, text]) => ({ id, text })),
    rightItems: right.map(([id, text]) => ({ id, text })),
    pairs: pairs.map(([leftId, rightId]) => ({ leftId, rightId })),
  };
}

export function REORD(
  prompt: string,
  correctSentence: string,
  feedback: ReturnType<typeof fb>,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "rearrange",
    difficulty: o.difficulty ?? "easy",
    skill: o.skill ?? "grammar",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    correctTokens: correctSentence.split(" "),
    correctSentence,
  };
}

export function CORR(
  prompt: string,
  incorrectSentence: string,
  acceptedAnswers: string[],
  feedback: ReturnType<typeof fb>,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "correct-mistake",
    difficulty: o.difficulty ?? "medium",
    skill: o.skill ?? "grammar",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    incorrectSentence,
    acceptedAnswers,
  };
}

export function RD(
  prompt: string,
  passageTitle: string,
  passage: string,
  question: string,
  options: [string, string][],
  correctId: string,
  feedback: ReturnType<typeof fb>,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "read-answer",
    difficulty: o.difficulty ?? "medium",
    skill: o.skill ?? "reading",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    passageTitle,
    passage,
    question,
    options: options.map(([id, text]) => ({ id, text })),
    correctOptionId: correctId,
  };
}

export function LIS(
  prompt: string,
  audioText: string,
  question: string,
  acceptedAnswers: string[],
  feedback: ReturnType<typeof fb>,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "listen-answer",
    difficulty: o.difficulty ?? "easy",
    skill: o.skill ?? "listening",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    audioText,
    question,
    acceptedAnswers,
  };
}

export function DICT(
  prompt: string,
  audioText: string,
  acceptedAnswers: string[],
  feedback: ReturnType<typeof fb>,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "dictation",
    difficulty: o.difficulty ?? "easy",
    skill: o.skill ?? "listening",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    audioText,
    acceptedAnswers,
  };
}

// ---------------------------------------------------------------------------
// Teaching-block shorthand builders (keep authoring terse and consistent)
// ---------------------------------------------------------------------------

export const H = (text: string): CmsBlock => ({ type: "heading", text });

export const T = (text: string): CmsBlock => ({ type: "text", text });

export const EX = (
  title: string,
  items: [string, string][],
  note?: string,
): CmsBlock => ({
  type: "example",
  title,
  items: items.map(([english, translation]) => ({ english, translation })),
  ...(note ? { note } : {}),
});

export const TB = (
  title: string,
  headers: string[],
  rows: string[][],
  caption?: string,
): CmsBlock => ({
  type: "table",
  title,
  headers,
  rows,
  ...(caption ? { caption } : {}),
});

export const GR = (
  title: string,
  rule: string,
  examples: ([string, string] | { english: string; translation?: string })[],
  exceptions?: string[],
): CmsBlock => ({
  type: "grammar-rule",
  title,
  rule,
  examples: examples.map((ex) =>
    Array.isArray(ex)
      ? { english: ex[0], translation: ex[1] ?? "" }
      : { english: ex.english, translation: ex.translation ?? "" },
  ),
  ...(exceptions ? { exceptions } : {}),
});

export const DL = (
  title: string,
  context: string,
  lines: [string, string][],
): CmsBlock => ({
  type: "dialogue",
  title,
  context,
  lines: lines.map(([speaker, text]) => ({ speaker, text })),
});

export const VOC = (
  title: string,
  words: [string, string, string, string][],
): CmsBlock => ({
  type: "vocabulary-list",
  title,
  words: words.map(([word, partOfSpeech, definition, translation]) => ({
    word,
    partOfSpeech,
    definition,
    translation,
  })),
});

export const N = (title: string, text: string): CmsBlock => ({
  type: "note",
  title,
  text,
});

export const W = (title: string, text: string): CmsBlock => ({
  type: "warning",
  title,
  text,
});

/** Text-to-speech audio block (browser speech synthesis, rate-adjustable). */
export const AU = (label: string, text: string, rate = 0.9): CmsBlock => ({
  type: "audio",
  mode: "tts",
  label,
  text,
  rate,
});

// ---------------------------------------------------------------------------
// Blueprint structures
// ---------------------------------------------------------------------------

/** A free-production task; learners must submit before completing a lesson. */
export interface AssignmentSpec {
  title: string;
  instructions: string;
  minWords: number;
  maxWords: number;
}

/** A practice set rendered as one interactive exercise group.
 * Guided sets must attach hints to every question (validator-enforced);
 * independent sets hold hints back. */
export interface PracticeSetSpec {
  variant?: "guided" | "independent";
  title: string;
  note?: string;
  questions: ExerciseSpec[];
}

/** What the author writes; ids, slugs and the prerequisite chain are derived. */
export interface LessonInput {
  title: string;
  /** One-sentence learner-facing description. */
  blurb: string;
  minutes: number;
  difficulty: LessonDifficulty;
  skills: ProgrammeSkill[];
  strands: Strand[];
  /** Can-do learning outcomes (also stored as the CMS lesson objectives). */
  outcomes: string[];
  blocks: CmsBlock[];
  assignment: AssignmentSpec;
  homework?: string[];
  /** Bank questions for this lesson (normally the chapter review lesson). */
  questions?: ExerciseSpec[];
  /** v2: explicit guided/independent practice sets (replaces `questions`). */
  practiceSets?: PracticeSetSpec[];
  /** Extra prerequisite lesson ids beyond the default chain. */
  extraPrerequisites?: string[];
}

export interface LessonSpec {
  /** Stable lesson id, e.g. "CH-13-L03". */
  id: string;
  /** CMS slug, e.g. "ch-13-l-03". */
  slug: string;
  chapterId: string;
  order: number;
  title: string;
  description: string;
  minutes: number;
  difficulty: LessonDifficulty;
  skills: ProgrammeSkill[];
  strands: Strand[];
  outcomes: string[];
  /** Prerequisite lesson ids: previous lesson in the chapter + extras. */
  prerequisites: string[];
  blocks: CmsBlock[];
  assignment: AssignmentSpec;
  homework: string[];
  questions: ExerciseSpec[];
  /** v2 practice sets; defaults to one plain set from `questions`. */
  practiceSets: PracticeSetSpec[];
}

export interface ChapterInput {
  /** 1–56. */
  number: number;
  title: string;
  description: string;
  objectives: string[];
  /** Prerequisite chapter ids — must all be earlier chapters. */
  prerequisites?: string[];
  /** Estimated total hours; validated against the sum of lesson minutes. */
  hours: number;
  skills: ProgrammeSkill[];
  strands: Strand[];
  assessment: string;
  completion: string;
  /** Content production batch 1–14 (4 chapters per batch). */
  batch: number;
  /** Slug of the module this chapter belongs to (defined per level). */
  module: string;
  lessons: LessonInput[];
}

export interface ChapterSpec {
  /** Stable chapter id, e.g. "CH-13". */
  id: string;
  /** CMS unit slug, e.g. "ch-13". */
  slug: string;
  number: number;
  title: string;
  levelId: ProgrammeLevelId;
  description: string;
  objectives: string[];
  prerequisites: string[];
  estimatedHours: number;
  lessonCount: number;
  skills: ProgrammeSkill[];
  strands: Strand[];
  assessmentRequirements: string;
  completionCriteria: string;
  productionBatch: number;
  moduleSlug: string;
  lessons: LessonSpec[];
}

export interface ModuleDef {
  slug: string;
  title: string;
  description: string;
}

export interface ProgrammeLevelDef {
  id: ProgrammeLevelId;
  /** CmsLevel slug. */
  slug: string;
  /** CmsLevel display name (mapped to the catalogue level vocabulary). */
  name: string;
  cefr: "Pre-A1" | "A1" | "A2" | "B1" | "B2" | "C1";
  /** CmsCourse slug + title for this level's course. */
  courseSlug: string;
  courseTitle: string;
  tagline: string;
  description: string;
  outcomes: string[];
  /** CmsLevel order (negative → the programme sorts first in the catalogue). */
  order: number;
  /** Inclusive chapter-number range [first, last]. */
  chapterRange: [number, number];
  modules: ModuleDef[];
  cefrNote: string;
}

export const CEFR_NOTE =
  "CEFR levels are used as a curriculum reference only. TalkSy does not issue CEFR certifications or official CEFR assessments.";

/**
 * Build a chapter: derives stable lesson ids/slugs, the within-chapter
 * prerequisite chain and the lesson count.
 */
export function chapter(levelId: ProgrammeLevelId, input: ChapterInput): ChapterSpec {
  const id = `CH-${String(input.number).padStart(2, "0")}`;
  const slug = `ch-${String(input.number).padStart(2, "0")}`;
  const lessons: LessonSpec[] = input.lessons.map((lesson, index) => {
    const lessonId = `${id}-L${String(index + 1).padStart(2, "0")}`;
    const prerequisites =
      index === 0
        ? [...(lesson.extraPrerequisites ?? [])]
        : [`${id}-L${String(index).padStart(2, "0")}`];
    for (const extra of lesson.extraPrerequisites ?? []) {
      if (!prerequisites.includes(extra)) prerequisites.push(extra);
    }
    return {
      id: lessonId,
      slug: `${slug}-l-${String(index + 1).padStart(2, "0")}`,
      chapterId: id,
      order: index + 1,
      title: lesson.title,
      description: lesson.blurb,
      minutes: lesson.minutes,
      difficulty: lesson.difficulty,
      skills: lesson.skills,
      strands: lesson.strands,
      outcomes: lesson.outcomes,
      prerequisites,
      blocks: lesson.blocks,
      assignment: lesson.assignment,
      homework: lesson.homework ?? [],
      questions: lesson.questions ?? [],
      practiceSets:
        lesson.practiceSets ??
        (lesson.questions && lesson.questions.length > 0
          ? [{ title: "Check your understanding", questions: lesson.questions }]
          : []),
    };
  });
  return {
    id,
    slug,
    number: input.number,
    title: input.title,
    levelId,
    description: input.description,
    objectives: input.objectives,
    prerequisites: input.prerequisites ?? [],
    estimatedHours: input.hours,
    lessonCount: lessons.length,
    skills: input.skills,
    strands: input.strands,
    assessmentRequirements: input.assessment,
    completionCriteria: input.completion,
    productionBatch: input.batch,
    moduleSlug: input.module,
    lessons,
  };
}
