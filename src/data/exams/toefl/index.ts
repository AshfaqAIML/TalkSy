/**
 * TOEFL iBT Academy — authored course data (PROMPT 43 textbook programme).
 *
 * The TOEFL blueprint (src/data/exam-academy/toefl.ts, PROMPT 42) defines the
 * seven-module target structure. Content is delivered chapter by chapter in
 * production batches (docs/exam-academy/TEXTBOOK_PRODUCTION.md); this index
 * grows as batches land. Every lesson follows the v3 textbook standard
 * (src/data/exam-academy/textbook-standard.ts) and is seeded into the CMS by
 * scripts/seed-exams.ts — idempotent upserts, `ai-reviewed` honesty convention.
 *
 * Authoring types are shared with the IELTS Academy sources (the shapes are
 * academy-independent); re-exported here so TOEFL files import from "./".
 */

import type { CourseSpec } from "../ielts/types";
import { ex, fb } from "../ielts/types";
import { TOEFL_T1_FUNDAMENTALS } from "./t1-fundamentals";
import { TOEFL_T2_READING } from "./t2-reading";
import { TOEFL_T3_LISTENING } from "./t3-listening";
import { TOEFL_T4_WRITING } from "./t4-writing";
import { TOEFL_T5_SPEAKING } from "./t5-speaking";
import { TOEFL_T6_LANGUAGE } from "./t6-language";
import { TOEFL_T7_PRACTICE } from "./t7-practice";

export { ex, fb };
export type {
  CourseSpec,
  ModuleSpec,
  UnitSpec,
  LessonSpec,
  ExerciseSpec,
} from "../ielts/types";

/** Shared CMS level for the TOEFL Academy course. */
export const TOEFL_LEVEL = {
  slug: "toefl-preparation",
  name: "TOEFL Preparation",
  description:
    "The complete TOEFL iBT Academy for the format in force since 21 January 2026: fundamentals, Reading, Listening, Writing, Speaking, language craft and the full-practice cycle. Aimed at B1+ learners preparing for TOEFL iBT.",
  order: 3,
} as const;

/** The TOEFL iBT Academy course (grows as production batches land). */
export const TOEFL_COURSES: CourseSpec[] = [
  {
    slug: "toefl-ibt-academy",
    title: "TOEFL iBT Academy",
    description:
      "Complete preparation for TOEFL iBT on the current (2026) format: the 1–6 band scale, the adaptive Reading and Listening sections, Listen-and-Repeat and interview speaking, sentence reconstruction, email and academic-discussion writing, plus the language craft and mock cycle behind every section band.",
    levelSlug: TOEFL_LEVEL.slug,
    modules: [
      TOEFL_T1_FUNDAMENTALS,
      TOEFL_T2_READING,
      TOEFL_T3_LISTENING,
      TOEFL_T4_WRITING,
      TOEFL_T5_SPEAKING,
      TOEFL_T6_LANGUAGE,
      TOEFL_T7_PRACTICE,
    ],
  },
];
