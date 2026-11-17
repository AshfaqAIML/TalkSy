/**
 * Exam Academy curriculum blueprint — assembly and computed statistics.
 *
 * Single source of truth for the target-state IELTS and TOEFL academies
 * (PROMPT 42). Docs in docs/exam-academy/*_CURRICULUM_BLUEPRINT.md are
 * GENERATED from this data by scripts/generate-blueprint-docs.ts.
 */

import type { ModulePlan, PathwayPlan, TopicRequirement } from "./types";
import { BLUEPRINT_DATE, BLUEPRINT_VERSION } from "./types";
import { IELTS_MODULES, IELTS_PATHWAYS, IELTS_TOPIC_REQUIREMENTS } from "./ielts";
import { TOEFL_MODULES, TOEFL_PATHWAY, TOEFL_TOPIC_REQUIREMENTS } from "./toefl";

export const ALL_MODULES: ModulePlan[] = [...IELTS_MODULES, ...TOEFL_MODULES];
export const ALL_PATHWAYS: PathwayPlan[] = [...IELTS_PATHWAYS, TOEFL_PATHWAY];
export const ALL_TOPIC_REQUIREMENTS: TopicRequirement[] = [
  ...IELTS_TOPIC_REQUIREMENTS,
  ...TOEFL_TOPIC_REQUIREMENTS,
];

export { BLUEPRINT_VERSION, BLUEPRINT_DATE };
export { IELTS_MODULES, IELTS_PATHWAYS, IELTS_TOPIC_REQUIREMENTS, UKVI_GUIDANCE } from "./ielts";
export { TOEFL_MODULES, TOEFL_PATHWAY, TOEFL_TOPIC_REQUIREMENTS, TOEFL_COURSE_PLAN } from "./toefl";
export {
  IELTS_SCORE_TARGETS,
  TOEFL_SCORE_TARGETS,
  TOEFL_ETS_CONCORDANCE,
  TOEFL_BELOW_TARGET_NOTE,
  SCORE_DISCLAIMER,
} from "./score-pathways";
export type { IeltsScoreTarget, ToeflScoreTarget } from "./score-pathways";
export type { ModulePlan, PathwayPlan, TopicRequirement, LessonPlan, ChapterPlan } from "./types";

// ---------------------------------------------------------------------------
// Computed statistics
// ---------------------------------------------------------------------------

export type ModuleStats = {
  code: string;
  slug: string;
  title: string;
  courses: string[];
  pathways: string[];
  chapters: number;
  lessons: number;
  existingLessons: number;
  newLessons: number;
  minutes: number;
  estimatedHours: number;
};

export function moduleStats(mod: ModulePlan): ModuleStats {
  const lessons = mod.chapters.flatMap((c) => c.lessons);
  return {
    code: mod.code,
    slug: mod.slug,
    title: mod.title,
    courses: [...mod.courses],
    pathways: [...mod.pathways],
    chapters: mod.chapters.length,
    lessons: lessons.length,
    existingLessons: lessons.filter((l) => l.origin === "existing").length,
    newLessons: lessons.filter((l) => l.origin === "new").length,
    minutes: lessons.reduce((a, l) => a + l.minutes, 0),
    estimatedHours: mod.estimatedHours,
  };
}

export type PathwayStats = {
  key: string;
  title: string;
  modules: ModuleStats[];
  lessons: number;
  existingLessons: number;
  newLessons: number;
  minutes: number;
  estimatedHours: number;
};

export function pathwayStats(pathway: PathwayPlan): PathwayStats {
  const byCode = new Map(ALL_MODULES.map((m) => [m.code, m]));
  const modules = pathway.modules.map((code) => {
    const mod = byCode.get(code);
    if (!mod) throw new Error(`Unknown module code in pathway ${pathway.key}: ${code}`);
    return moduleStats(mod);
  });
  const sum = (sel: (m: ModuleStats) => number) => modules.reduce((a, m) => a + sel(m), 0);
  return {
    key: pathway.key,
    title: pathway.title,
    modules,
    lessons: sum((m) => m.lessons),
    existingLessons: sum((m) => m.existingLessons),
    newLessons: sum((m) => m.newLessons),
    minutes: sum((m) => m.minutes),
    estimatedHours: sum((m) => m.estimatedHours),
  };
}

export function blueprintSummary() {
  const pathwaySummaries = ALL_PATHWAYS.map(pathwayStats);
  const toeflModules = ALL_MODULES.filter((m) => m.academy === "toefl");
  return {
    version: BLUEPRINT_VERSION,
    date: BLUEPRINT_DATE,
    moduleDefinitions: ALL_MODULES.length,
    lessonDefinitions: ALL_MODULES.reduce((a, m) => a + m.chapters.flatMap((c) => c.lessons).length, 0),
    existingLessons: ALL_MODULES.reduce(
      (a, m) => a + m.chapters.flatMap((c) => c.lessons).filter((l) => l.origin === "existing").length,
      0,
    ),
    newLessons: ALL_MODULES.reduce(
      (a, m) => a + m.chapters.flatMap((c) => c.lessons).filter((l) => l.origin === "new").length,
      0,
    ),
    newTeachingMinutes: ALL_MODULES.reduce(
      (a, m) => a + m.chapters.flatMap((c) => c.lessons).filter((l) => l.origin === "new").reduce((b, l) => b + l.minutes, 0),
      0,
    ),
    toeflNewLessons: toeflModules.reduce((a, m) => a + m.chapters.flatMap((c) => c.lessons).length, 0),
    pathways: pathwaySummaries,
  };
}
