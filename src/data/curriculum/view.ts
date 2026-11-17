import type { CourseLevel, CourseLesson } from "./types";
import { p1Units } from "./p1";
import { a1Unit1 } from "./a1-unit1";
import { a1Unit2 } from "./a1-unit2";
import { a1Unit3 } from "./a1-unit3";
import { a1Unit4 } from "./a1-unit4";
import { a1Unit5 } from "./a1-unit5";
import { a1Unit6 } from "./a1-unit6";
import { a2Unit1 } from "./a2-unit1";
import { a2Unit2 } from "./a2-unit2";
import { a2Unit3 } from "./a2-unit3";
import { a2Unit4 } from "./a2-unit4";
import { a2Unit5 } from "./a2-unit5";
import { a2Unit6 } from "./a2-unit6";

/**
 * Curriculum view layer — the learner-facing course path.
 *
 * The unit content itself lives in the data files (`p1/`, `a1-unit*.ts`,
 * `a2-unit*.ts`); this module assembles it into the level path the app
 * delivers (curriculum, dashboard, roadmap, course catalogue, marketing
 * statistics) with honest availability flags: every "available" level
 * contains real, complete lessons; "in-development" levels contain none
 * and are never counted in any lesson statistic.
 */

const P1: CourseLevel = {
  code: "P1",
  name: "Pre-A1 · Foundations",
  cefrLabel: "Pre-A1",
  tagline: "From your very first English word to your first full sentences.",
  description:
    "The complete beginner course: the alphabet and its sounds, phonics, word families, nouns, verbs and pronouns, first sentences, and your first real conversations — thirty fully-taught lessons in six units.",
  status: "available",
  units: p1Units,
};

const A1: CourseLevel = {
  code: "A1",
  name: "A1 · Building Blocks",
  cefrLabel: "A1",
  tagline: "Your first grammar and your first real conversations.",
  description:
    "Everyday English from greetings and introductions to daily routines, shopping, work, study and free time — with dialogues, grammar focuses and practice exercises in every lesson.",
  status: "available",
  units: [a1Unit1, a1Unit2, a1Unit3, a1Unit4, a1Unit5, a1Unit6],
};

const A2: CourseLevel = {
  code: "A2",
  name: "A2 · Growing Skills",
  cefrLabel: "A2",
  tagline: "Describe your world, tell stories and handle real situations.",
  description:
    "Elementary English for real situations: describing people and places, talking about the past and present, daily life in depth, travel, health and clear communication.",
  status: "available",
  units: [a2Unit1, a2Unit2, a2Unit3, a2Unit4, a2Unit5, a2Unit6],
};

const B1: CourseLevel = {
  code: "B1",
  name: "B1 · Threshold",
  cefrLabel: "B1",
  tagline: "Opinions, stories and connected everyday communication.",
  description:
    "Intermediate English: express opinions with reasons, tell longer stories, handle most travel and work situations, and write connected paragraphs. In development.",
  status: "in-development",
  units: [],
};

const B2: CourseLevel = {
  code: "B2",
  name: "B2 · Vantage",
  cefrLabel: "B2",
  tagline: "Confident, fluent communication on almost any topic.",
  description:
    "Upper-intermediate English: argue a point with nuance, understand the main ideas of complex text, and interact with native speakers without strain. In development.",
  status: "in-development",
  units: [],
};

const C1: CourseLevel = {
  code: "C1",
  name: "C1 · Advanced",
  cefrLabel: "C1",
  tagline: "Fluency and precision for academic and professional life.",
  description:
    "Advanced English: use the language flexibly and effectively for social, academic and professional purposes, with clear, well-structured expression. In development.",
  status: "in-development",
  units: [],
};

/** The full learner path — available levels first, in-development last. */
export const curriculum: CourseLevel[] = [P1, A1, A2, B1, B2, C1];

/** Levels with real, delivered content today. */
export const availableLevels: CourseLevel[] = curriculum.filter(
  (level) => level.status === "available"
);

/** Every lesson across the available levels, in course order. */
export const allCourseLessons: CourseLesson[] = availableLevels.flatMap((level) =>
  level.units.flatMap((unit) => unit.lessons)
);

/** Total number of lessons a learner can study today. */
export const totalLessonCount: number = allCourseLessons.length;

/** Ordered lesson slugs within one level (course order). Empty for unknown codes. */
export function orderedLessonSlugs(levelCode: string): string[] {
  const level = curriculum.find((l) => l.code === levelCode);
  if (!level) return [];
  return level.units.flatMap((unit) => unit.lessons.map((lesson) => lesson.slug));
}

/**
 * 0-based position of a lesson slug across the whole available path
 * (P1 → A1 → A2), or null when the slug is not an available lesson.
 */
export function globalLessonIndex(slug: string): number | null {
  const index = allCourseLessons.findIndex((lesson) => lesson.slug === slug);
  return index === -1 ? null : index;
}
