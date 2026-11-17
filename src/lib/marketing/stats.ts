/**
 * Real, derived product statistics for the public site.
 *
 * Every number the marketing pages show is computed here from the actual
 * curriculum source (`src/data/curriculum`) at render time — counts can
 * never drift from reality, and nothing is hand-typed or embellished.
 * `tests/marketing-content.test.ts` re-derives and asserts these values.
 */

import { curriculum, availableLevels, totalLessonCount } from "@/data/curriculum";

interface LessonLike {
  minutes?: number;
  vocab: unknown[];
  exercises: unknown[];
  dialogue?: { lines: unknown[] } | unknown[];
}

function allUnits() {
  return availableLevels.flatMap((level) => level.units);
}

function allLessons() {
  return allUnits().flatMap((unit) => unit.lessons);
}

function dialogueLineCount(lesson: LessonLike): number {
  const dialogue = lesson.dialogue;
  if (!dialogue) return 0;
  if (Array.isArray(dialogue)) return dialogue.length;
  return Array.isArray(dialogue.lines) ? dialogue.lines.length : 0;
}

function computeStats() {
  const lessons = allLessons();
  const exercises = lessons.reduce((sum, l) => sum + l.exercises.length, 0);
  const words = lessons.reduce((sum, l) => sum + l.vocab.length, 0);
  const minutes = lessons.reduce((sum, l) => sum + (l.minutes ?? 0), 0);
  const dialogueLines = lessons.reduce((sum, l) => sum + dialogueLineCount(l as LessonLike), 0);
  return {
    /** Complete lessons available today (P1 + A1 + A2). */
    lessons: totalLessonCount,
    units: allUnits().length,
    levels: availableLevels.length,
    levelsPlanned: curriculum.filter((l) => l.status !== "available").length,
    exercises,
    words,
    minutes,
    /** Rounded study time in hours (lessons are 8–12 minutes by design). */
    hours: Math.round((minutes / 60) * 10) / 10,
    dialogueLines,
  };
}

export const siteStats = computeStats();

/** Levels with real content, for pathway listings. */
export const liveLevels = availableLevels.map((level) => ({
  code: level.code,
  name: level.name,
  cefrLabel: level.cefrLabel,
  tagline: level.tagline,
  description: level.description,
  unitTitles: level.units.map((u) => u.title),
  unitCount: level.units.length,
  lessonCount: level.units.reduce((sum, u) => sum + u.lessons.length, 0),
}));

/** Roadmap levels — description only, honestly labelled as "in development". */
export const plannedLevels = curriculum
  .filter((l) => l.status !== "available")
  .map((l) => ({
    code: l.code,
    name: l.name,
    cefrLabel: l.cefrLabel,
    tagline: l.tagline,
    description: l.description,
  }));
