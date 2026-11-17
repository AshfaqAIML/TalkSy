/**
 * TalkSy Exam Academy — Curriculum Blueprint (PROMPT 42).
 *
 * The blueprint is the versioned target-state design of the IELTS and TOEFL
 * academies. It is authored as typed data so that:
 *   - every module, chapter and lesson it defines is machine-checkable
 *     (scripts/validate-exam-blueprint.ts + tests/exam-blueprint.test.ts);
 *   - the 55 lessons already live in the IELTS Academy are mapped, not
 *     duplicated: `origin: "existing"` entries carry the exact slug, title
 *     and minutes of the authored source (src/data/exams/ielts/) and the
 *     validator asserts they match the live data;
 *   - the implementation stages (CONTENT_REPLACEMENT_PLAN.md S1+) author
 *     content INTO this structure instead of re-deciding it.
 *
 * Versioning (semver):
 *   MAJOR — module-set / pathway-structure changes.
 *   MINOR — lessons added or re-parented within the agreed structure.
 *   PATCH — wording, minutes or focus corrections.
 */

export const BLUEPRINT_VERSION = "2.3.0";
export const BLUEPRINT_DATE = "2026-11-15";

export type LessonOrigin = "existing" | "new";

export type PathwayKey = "ielts-academic" | "ielts-general-training" | "toefl-ibt";
export type IeltsPathwayKey = "ielts-academic" | "ielts-general-training";

/** A lesson slot in the target curriculum. */
export type LessonPlan = {
  /** CMS lesson slug. For `existing` lessons this is the live slug, unchanged. */
  slug: string;
  title: string;
  minutes: number;
  /** What the lesson teaches, in one line (mirrors the pathway `focus` style). */
  focus: string;
  /** Curriculum topics this lesson covers (checked against TOPIC_REQUIREMENTS). */
  topics: string[];
  /** existing = authored and live in the CMS (carried from v1 OR delivered by a PROMPT 43 batch); new = still to author. */
  origin: LessonOrigin;
};

export type ChapterPlan = {
  /** CMS unit slug. */
  slug: string;
  title: string;
  lessons: LessonPlan[];
};

export type ModulePlan = {
  /** Blueprint code, e.g. "I-M1", "IA-M3", "IG-M4", "T-M2". */
  code: string;
  /** Target CMS module slug (kept from v1 when the module persists). */
  slug: string;
  title: string;
  academy: "ielts" | "toefl";
  /** CMS course(s) that carry this module in the target state. */
  courses: string[];
  /** Pathways that include this module. */
  pathways: PathwayKey[];
  /** v1 module slugs whose lessons/units are absorbed here (migration map). */
  replaces: string[];
  description: string;
  learningObjectives: string[];
  /** Module codes, "none", or the sentinel "section-modules". */
  prerequisites: string[];
  /** Recommended entry level (CEFR) for productive study. */
  entryLevel: string;
  /** Total estimated study time including practice and assessments (hours). */
  estimatedHours: number;
  chapters: ChapterPlan[];
  practiceActivities: string[];
  assessments: string[];
  completionCriteria: string[];
};

/** Prompt-mandated topics that must be covered by ≥1 lesson of the module. */
export type TopicRequirement = {
  moduleCode: string;
  source: string;
  topics: string[];
};

export type PathwayPlan = {
  key: PathwayKey;
  title: string;
  summary: string;
  /** Module codes in study order. */
  modules: string[];
  /** How this pathway is configured inside the existing system. */
  configuration: string[];
};

/** Terse authoring helpers — keep the module files readable. */
export const L = (
  slug: string,
  title: string,
  minutes: number,
  focus: string,
  topics: string[],
  origin: LessonOrigin = "new",
): LessonPlan => ({ slug, title, minutes, focus, topics, origin });

export const C = (slug: string, title: string, lessons: LessonPlan[]): ChapterPlan => ({
  slug,
  title,
  lessons,
});
