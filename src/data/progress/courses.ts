/**
 * Course definitions for certificates and the "grammar course" milestone.
 *
 * A course is either a curriculum UNIT ("Pre-A1 · Unit 1 — Hello, World!")
 * or a whole LEVEL. A course is complete ONLY when every one of its lessons
 * has a verified completion (LessonProgress.completedAt) — opening a lesson
 * never counts.
 *
 * Derived from src/data/curriculum so it can never drift from the real path.
 */

import { levels } from "@/data/curriculum";
import type { LevelId } from "@/data/curriculum/types";

export interface CourseDef {
  id: string;
  kind: "unit" | "level";
  title: string;
  levelId: LevelId;
  lessonSlugs: string[];
}

function buildCourses(): CourseDef[] {
  const courses: CourseDef[] = [];
  for (const level of levels) {
    if (level.units.length === 0) continue; // "coming soon" levels award nothing
    const levelLessons: string[] = [];
    for (const unit of level.units) {
      const unitId = `${level.id}:${unit.number}`;
      courses.push({
        id: unitId,
        kind: "unit",
        title: `${level.name.split(" · ")[0]} · ${unit.title}`,
        levelId: level.id,
        lessonSlugs: unit.lessonSlugs,
      });
      levelLessons.push(...unit.lessonSlugs);
    }
    courses.push({
      id: level.id,
      kind: "level",
      title: `${level.name} — Complete`,
      levelId: level.id,
      lessonSlugs: levelLessons,
    });
  }
  return courses;
}

export const courses: CourseDef[] = buildCourses();

const courseById = new Map(courses.map((c) => [c.id, c]));

export function getCourse(id: string): CourseDef | undefined {
  return courseById.get(id);
}

/** Courses that belong to Grammar School / Sentence Lab (the "grammar courses"). */
export function grammarCourseIds(): string[] {
  return courses.filter((c) => c.levelId === "grammar-core").map((c) => c.id);
}

/** How many of a course's lessons are completed, given the completed set. */
export function courseCompletion(
  course: CourseDef,
  completedSlugs: Set<string>,
): { completed: number; total: number; done: boolean } {
  const completed = course.lessonSlugs.filter((slug) => completedSlugs.has(slug)).length;
  return { completed, total: course.lessonSlugs.length, done: completed === course.lessonSlugs.length };
}
