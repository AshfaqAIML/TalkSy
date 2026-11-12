/**
 * Progress engine — server-authoritative lesson completion rules.
 *
 * Core invariant (product rule): opening a lesson NEVER awards completion or
 * mastery. A lesson is "completed" only when every section has been
 * explicitly marked complete by the learner, and (when the lesson has an
 * assessment) at least one assessment run has been passed.
 */

import type { Lesson } from "@/data/curriculum/types";

export interface ProgressSnapshot {
  lessonSlug: string;
  status: "in-progress" | "completed";
  sectionsCompleted: string[];
  lastSectionId: string | null;
  bookmarked: boolean;
  completedAt: Date | string | null;
}

export interface AssessmentOutcome {
  lessonSlug: string;
  passed: boolean;
}

/** Section ids the lesson declares, in order. */
export function lessonSectionIds(lesson: Lesson): string[] {
  return lesson.sections.map((s) => s.id);
}

/**
 * Derive completion. `progress` may be null (never opened) — in which case
 * the lesson is simply not started, never completed.
 */
export function computeLessonStatus(
  lesson: Lesson,
  progress: Pick<ProgressSnapshot, "sectionsCompleted"> | null,
  passedAssessment: boolean,
): { completed: boolean; sectionsDone: number; sectionsTotal: number } {
  const sectionIds = lessonSectionIds(lesson);
  const done = new Set(progress?.sectionsCompleted ?? []);
  const sectionsDone = sectionIds.filter((id) => done.has(id)).length;
  const allSectionsDone = sectionsDone === sectionIds.length && sectionIds.length > 0;
  const needsAssessment = Boolean(lesson.assessment);
  const completed = allSectionsDone && (!needsAssessment || passedAssessment);
  return { completed, sectionsDone, sectionsTotal: sectionIds.length };
}

/** Serialize/deserialize the JSON sectionsCompleted column. */
export function parseSectionsCompleted(raw: string): string[] {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((s) => typeof s === "string") : [];
  } catch {
    return [];
  }
}

/** Opening a lesson initializes progress WITHOUT any completion. */
export function initialProgress(lessonSlug: string): {
  lessonSlug: string;
  status: "in-progress";
  sectionsCompleted: string;
} {
  return { lessonSlug, status: "in-progress", sectionsCompleted: "[]" };
}

/**
 * Validate that a section belongs to the lesson (guards the API against
 * forged section ids).
 */
export function isValidSectionId(lesson: Lesson, sectionId: string): boolean {
  return lessonSectionIds(lesson).includes(sectionId);
}
