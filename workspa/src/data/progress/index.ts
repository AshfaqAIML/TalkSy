/**
 * Learning Progression registry + integrity validation.
 *
 * Content is code: the achievement catalog and course list live here and are
 * validated by tests (and below) so the product can never ship a broken or
 * misleading achievement.
 */

import { achievements, getAchievement, ACHIEVEMENT_ICON_NAMES, MILESTONE_IDS } from "./achievements";
import { courses, getCourse, grammarCourseIds, courseCompletion } from "./courses";

export * from "./types";
export { achievements, getAchievement, ACHIEVEMENT_ICON_NAMES, MILESTONE_IDS };
export type { AchievementIcon } from "./achievements";
export { courses, getCourse, grammarCourseIds, courseCompletion };

export interface ProgressionIntegrityIssue {
  code: string;
  message: string;
}

export function validateProgressionContent(): ProgressionIntegrityIssue[] {
  const issues: ProgressionIntegrityIssue[] = [];
  const add = (code: string, message: string) => issues.push({ code, message });

  // --- achievements ---
  const ids = new Set<string>();
  for (const achievement of achievements) {
    if (ids.has(achievement.id)) {
      add("duplicate-achievement-id", `Achievement id "${achievement.id}" is used more than once.`);
    }
    ids.add(achievement.id);

    if (!achievement.title.trim()) add("empty-title", `Achievement "${achievement.id}" has no title.`);
    if (!achievement.description.trim()) {
      add("empty-description", `Achievement "${achievement.id}" has no description.`);
    }
    if (!achievement.requirement.trim()) {
      add("empty-requirement", `Achievement "${achievement.id}" has no verification statement.`);
    }
    if (!ACHIEVEMENT_ICON_NAMES.includes(achievement.icon as (typeof ACHIEVEMENT_ICON_NAMES)[number])) {
      add("unknown-icon", `Achievement "${achievement.id}" uses unknown icon "${achievement.icon}".`);
    }
    if (typeof achievement.verify !== "function") {
      add("missing-verify", `Achievement "${achievement.id}" has no verify predicate.`);
    }
    if (achievement.kind === "milestone" && achievement.category !== "milestones") {
      add("milestone-category", `Milestone "${achievement.id}" must use the "milestones" category.`);
    }
  }

  // --- required milestones from the product specification ---
  const requiredMilestones = [
    "first-100-words",
    "first-50-sentences",
    "first-paragraph",
    "first-conversation",
    "first-writing-assignment",
    "first-grammar-course",
    "first-speaking-task",
  ];
  for (const id of requiredMilestones) {
    if (!MILESTONE_IDS.includes(id)) {
      add("missing-milestone", `Required milestone "${id}" is not defined.`);
    }
  }

  // --- courses ---
  const courseIds = new Set<string>();
  for (const course of courses) {
    if (courseIds.has(course.id)) add("duplicate-course-id", `Course id "${course.id}" repeats.`);
    courseIds.add(course.id);
    if (course.lessonSlugs.length === 0) {
      add("empty-course", `Course "${course.id}" has no lessons.`);
    }
    if (course.kind === "unit" && !course.id.includes(":")) {
      add("bad-unit-id", `Unit course "${course.id}" must look like "<level>:<number>".`);
    }
    if (course.kind === "level" && course.id.includes(":")) {
      add("bad-level-id", `Level course "${course.id}" must be a bare level id.`);
    }
  }
  for (const levelId of ["pre-a1", "a1", "grammar-core"]) {
    if (!courses.some((c) => c.kind === "level" && c.levelId === levelId)) {
      add("missing-level-course", `Level "${levelId}" has no certificate course.`);
    }
  }

  return issues;
}
