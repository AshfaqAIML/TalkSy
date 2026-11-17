/**
 * IELTS Academy authoring types.
 *
 * The 8-module IELTS programme is authored here as typed data and seeded
 * into the CMS (courses → modules → units → lessons → blocks + question
 * bank) by scripts/seed-exams.ts. Authoring lives in code so it is
 * type-checked and reviewable like every other content module; once
 * seeded it is editable by staff in the admin UI like any CMS course.
 *
 * Content rules (enforced by tests/ielts-academy.test.ts):
 *   - every lesson carries real teaching blocks (never an empty shell);
 *   - practice exercises are original EnglishPath material and validate
 *     against the shared Exercise shapes used by the question bank;
 *   - the Academic and General Training tracks share nothing variant-
 *     specific: Listening and Speaking (identical tests) live in the Core
 *     course, Reading and Writing live in their own track course.
 */

import type { CmsBlock } from "@/data/cms/types";
import type { Exercise, Skill, Difficulty } from "@/data/curriculum/types";

/** One question-bank item (the CMS injects the row id as `exercise.id`). */
type DistributiveOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;
export type ExerciseSpec = DistributiveOmit<Exercise, "id">;

export type LessonSpec = {
  slug: string;
  title: string;
  description: string;
  objectives: string[];
  minutes: number;
  /** Teaching blocks (heading/text/table/dialogue/…). The seeder appends the practice, assignment and homework blocks. */
  blocks: CmsBlock[];
  /** Practice questions for this lesson (auto-attached to a final practice block). */
  questions?: ExerciseSpec[];
  /** Free-writing follow-up (becomes an assignment block — required for lesson completion). */
  assignment?: { title: string; instructions: string; minWords: number; maxWords: number };
  /** Self-study follow-up (becomes a homework block). */
  homework?: string[];
};

export type UnitSpec = {
  slug: string;
  title: string;
  description: string;
  lessons: LessonSpec[];
};

export type ModuleSpec = {
  slug: string;
  title: string;
  description: string;
  units: UnitSpec[];
};

export type CourseSpec = {
  slug: string;
  title: string;
  description: string;
  levelSlug: string;
  modules: ModuleSpec[];
};

/** Shared CMS level for the three IELTS Academy courses. */
export const IELTS_LEVEL = {
  slug: "ielts-preparation",
  name: "IELTS Preparation",
  description:
    "The complete IELTS Academy: orientation, Listening and Speaking craft, the Band Score ladder, exam strategies and the mock cycle. Aimed at B1+ learners preparing for IELTS Academic or General Training.",
  order: 2,
} as const;

/** Practice-exercise shorthand builders (keep authoring terse and consistent). */
export function ex(spec: ExerciseSpec): ExerciseSpec {
  return spec;
}

/** Standard feedback block for an exercise (required by the grading engine). */
export function fb(correctAnswer: string, explanation: string, whyWrong?: string) {
  return { correctAnswer, explanation, ...(whyWrong ? { whyWrong } : {}) };
}

export const SKILL_ORDER: Skill[] = ["vocabulary", "grammar", "listening", "speaking", "reading", "writing"];
export type { Skill, Difficulty };
