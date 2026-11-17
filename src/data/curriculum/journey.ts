import { curriculum, availableLevels } from "./index";
import type { CourseUnit } from "./types";

/**
 * Learning-journey metadata for the roadmap and course catalogue.
 *
 * The unit/course content itself lives in the lesson files; this module adds
 * the thin presentation layer those views need:
 *   - `stage`: where the unit sits on the learner's skill journey
 *     (Alphabet → Phonics → … → Communication), and
 *   - `subjects`: catalogue filter tags derived from the unit's real
 *     teaching content (see each unit's description in the data files).
 *
 * Every entry is editorial metadata about existing, taught content — no
 * lesson content or learner-facing claims are invented here. Tests assert
 * that the map covers every live unit and nothing else.
 */

export interface JourneyEntry {
  /** unit slug, e.g. "p1-1" */
  unitSlug: string;
  /** level code the unit belongs to */
  levelCode: string;
  /** short journey stage shown on the roadmap pathway */
  stage: string;
  /** catalogue subject tags (controlled vocabulary, lowercase) */
  subjects: string[];
}

export const JOURNEY: JourneyEntry[] = [
  // P1 · Foundations (Pre-A1) — letters to first sentences
  { unitSlug: "p1-1", levelCode: "P1", stage: "Alphabet", subjects: ["alphabet", "letters"] },
  { unitSlug: "p1-2", levelCode: "P1", stage: "Phonics", subjects: ["phonics", "vocabulary"] },
  { unitSlug: "p1-3", levelCode: "P1", stage: "Word families", subjects: ["vocabulary", "grammar"] },
  { unitSlug: "p1-4", levelCode: "P1", stage: "Sentences", subjects: ["grammar", "sentences"] },
  { unitSlug: "p1-5", levelCode: "P1", stage: "Grammar", subjects: ["grammar", "sentences", "adjectives"] },
  { unitSlug: "p1-6", levelCode: "P1", stage: "First conversations", subjects: ["questions", "speaking"] },
  // A1 · Beginner — everyday conversations
  { unitSlug: "a1-1", levelCode: "A1", stage: "Greetings", subjects: ["greetings", "numbers"] },
  { unitSlug: "a1-2", levelCode: "A1", stage: "About you", subjects: ["family", "people"] },
  { unitSlug: "a1-3", levelCode: "A1", stage: "Daily life", subjects: ["routines", "food"] },
  { unitSlug: "a1-4", levelCode: "A1", stage: "Out & about", subjects: ["shopping", "time"] },
  { unitSlug: "a1-5", levelCode: "A1", stage: "Work & study", subjects: ["work", "ability"] },
  { unitSlug: "a1-6", levelCode: "A1", stage: "Free time", subjects: ["hobbies", "plans"] },
  // A2 · Elementary — real situations
  { unitSlug: "a2-1", levelCode: "A2", stage: "Describing", subjects: ["description", "people"] },
  { unitSlug: "a2-2", levelCode: "A2", stage: "Tenses", subjects: ["past", "storytelling"] },
  { unitSlug: "a2-3", levelCode: "A2", stage: "Everyday depth", subjects: ["routines", "food"] },
  { unitSlug: "a2-4", levelCode: "A2", stage: "Travel", subjects: ["travel", "transport"] },
  { unitSlug: "a2-5", levelCode: "A2", stage: "Health", subjects: ["health", "body"] },
  { unitSlug: "a2-6", levelCode: "A2", stage: "Communication", subjects: ["writing", "communication"] },
];

/**
 * Planned levels rendered as dashed future milestones on the roadmap.
 * Descriptions come from the level definitions (in-development) — the
 * roadmap shows them honestly labelled, never with lesson counts.
 */
export const PLANNED_JOURNEY = curriculum
  .filter((level) => level.status !== "available")
  .map((level) => ({
    levelCode: level.code,
    levelName: level.name,
    cefrLabel: level.cefrLabel,
    stage:
      level.code === "B1"
        ? "Opinions & stories"
        : level.code === "B2"
          ? "Confident communication"
          : "Fluency & precision",
    description: level.description,
  }));

/* ------------------------------------------------------------------ */
/* Lookups                                                             */
/* ------------------------------------------------------------------ */

const byUnitSlug = new Map(JOURNEY.map((entry) => [entry.unitSlug, entry]));

/** Journey stage label for a unit, or null for unknown slugs. */
export function journeyStageOf(unitSlug: string): string | null {
  return byUnitSlug.get(unitSlug)?.stage ?? null;
}

/** Subject tags for a unit (empty array for unknown slugs). */
export function subjectsOf(unitSlug: string): string[] {
  return byUnitSlug.get(unitSlug)?.subjects ?? [];
}

/** Unique subject tags with counts, for the catalogue filter UI. */
export const SUBJECT_FACETS: { tag: string; courseCount: number }[] = (() => {
  const counts = new Map<string, number>();
  for (const entry of JOURNEY) {
    for (const tag of entry.subjects) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([tag, courseCount]) => ({ tag, courseCount }));
})();

/** The subject tag in display form ("Out & about" style capitalisation). */
export function subjectLabel(tag: string): string {
  const special: Record<string, string> = {
    "out & about": "Out & about",
    "work & study": "Work & study",
  };
  const key = tag.toLowerCase();
  if (special[key]) return special[key];
  return tag.charAt(0).toUpperCase() + tag.slice(1);
}

/* ------------------------------------------------------------------ */
/* Derived course facets (real content counts)                         */
/* ------------------------------------------------------------------ */

export interface UnitFacets {
  unitSlug: string;
  minutes: number;
  lessonCount: number;
  exerciseCount: number;
  vocabCount: number;
  /** per-skill number of lessons that train the skill */
  skills: Record<string, number>;
  /** exercises in the assessment phase (P1) or total exercises (legacy) */
  assessmentCount: number;
}

/**
 * Facet numbers for every live unit, derived from the actual lesson
 * content — used by /api/courses so the catalogue can filter and badge
 * courses without another payload round-trip.
 */
export function unitFacets(): Map<string, UnitFacets> {
  const out = new Map<string, UnitFacets>();
  for (const level of availableLevels) {
    for (const unit of level.units) {
      const lessons = unit.lessons;
      const skills: Record<string, number> = {};
      for (const lesson of lessons) {
        for (const skill of lesson.skills) {
          skills[skill] = (skills[skill] ?? 0) + 1;
        }
      }
      out.set(unit.slug, {
        unitSlug: unit.slug,
        minutes: lessons.reduce((sum, l) => sum + l.minutes, 0),
        lessonCount: lessons.length,
        exerciseCount: lessons.reduce((sum, l) => sum + l.exercises.length, 0),
        vocabCount: lessons.reduce((sum, l) => sum + l.vocab.length, 0),
        skills,
        assessmentCount: lessons.reduce(
          (sum, l) =>
            sum + l.exercises.filter((e) => e.phase === "assessment").length,
          0
        ),
      });
    }
  }
  return out;
}

/** Ordered live units (journey order) with their level context. */
export function orderedLiveUnits(): { unit: CourseUnit; levelCode: string; levelName: string; cefrLabel: string }[] {
  const out: { unit: CourseUnit; levelCode: string; levelName: string; cefrLabel: string }[] = [];
  for (const level of availableLevels) {
    for (const unit of level.units) {
      out.push({
        unit,
        levelCode: level.code,
        levelName: level.name,
        cefrLabel: level.cefrLabel,
      });
    }
  }
  return out;
}
