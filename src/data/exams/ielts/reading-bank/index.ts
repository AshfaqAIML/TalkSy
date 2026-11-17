/**
 * IELTS Reading Masterclass — the passage bank index (PROMPT 45, Part D).
 *
 * Eighteen original exercises: ten Academic passages covering the ten
 * taught subjects, and eight General Training text sets covering the
 * practical text types of Sections 1–3. Three timed full-length
 * simulations (Part E) are composed from the library — each is honestly
 * labelled with its real question count and runs on the official
 * 60-minute clock.
 */

import { acWater, acBarcode } from "./academic-a";
import { acReadingWars, acBeavers } from "./academic-b";
import { acAntikythera, acGorilla } from "./academic-c";
import { acPlacebo, acTraffic } from "./academic-d";
import { acThirdPlaces, acTallWood } from "./academic-e";
import { gtNotices, gtAds, gtBramble } from "./gt-a";
import { gtReturns, gtHolidays, gtWarehouse } from "./gt-b";
import { gtLighthouses, gtDenim } from "./gt-c";
import { acadFExercises } from "./acad-f";
import { acadGExercises } from "./acad-g";
import { acadHExercises } from "./acad-h";
import { acadIExercises } from "./acad-i";
import { acadJExercises } from "./acad-j";
import { gtDExercises } from "./gt-d";
import { gtEExercises } from "./gt-e";
import { gtFExercises } from "./gt-f";
import { gtGExercises } from "./gt-g";
import { gtHExercises } from "./gt-h";
import { gtIExercises } from "./gt-i";
import { gtJExercises } from "./gt-j";
import type { ReadingExercise, ReadingSimulation } from "./types";

export const READING_BANK: ReadingExercise[] = [
  // Academic — the ten taught subjects, spread across the three sections.
  acWater, // science, section 1
  acBarcode, // technology, section 1
  acReadingWars, // education, section 3
  acBeavers, // environment, section 2
  acAntikythera, // history, section 3
  acGorilla, // psychology, section 2
  acPlacebo, // medicine, section 3
  acTraffic, // economics, section 2
  acThirdPlaces, // society, section 3
  acTallWood, // architecture, section 3
  // General Training — the practical text types of the three sections.
  gtNotices, // section 1, notices
  gtAds, // section 1, advertisements
  gtBramble, // section 1, general informational texts
  gtReturns, // section 2, instructions
  gtHolidays, // section 2, workplace documents
  gtWarehouse, // section 2, workplace documents
  gtLighthouses, // section 3, longer general-interest passages
  gtDenim, // section 3, longer general-interest passages
  // PROMPT 54 expansion — forty further Academic passages (batches F–J)
  // and forty-two further General Training text sets (batches D–J).
  ...acadFExercises,
  ...acadGExercises,
  ...acadHExercises,
  ...acadIExercises,
  ...acadJExercises,
  ...gtDExercises,
  ...gtEExercises,
  ...gtFExercises,
  ...gtGExercises,
  ...gtHExercises,
  ...gtIExercises,
  ...gtJExercises,
];

export function readingExerciseBySlug(slug: string): ReadingExercise | undefined {
  return READING_BANK.find((e) => e.slug === slug);
}

/** True word count of the passage (all blocks joined) — computed, never authored. */
export function readingWordCount(exercise: ReadingExercise): number {
  const text = exercise.blocks.flatMap((b) => b.paragraphs).join(" ");
  return (text.match(/[A-Za-z]+(?:-[A-Za-z]+)*|\d+(?:[.,:]\d+)*/g) ?? []).length;
}

// ---------------------------------------------------------------------------
// Timed full-length simulations (Part E) — composed from library passages.
// Question counts are computed from the real content and printed on the
// hub cards, never faked to hit 40.
// ---------------------------------------------------------------------------

export function readingSimulationStats(sim: ReadingSimulation): { passages: number; questions: number } {
  const passages = sim.passageSlugs
    .map((slug) => readingExerciseBySlug(slug))
    .filter((e): e is ReadingExercise => Boolean(e));
  return {
    passages: passages.length,
    questions: passages.reduce((a, p) => a + p.questions.reduce(countGroupItems, 0), 0),
  };
}

export function countGroupItems(total: number, q: ReadingExercise["questions"][number]): number {
  switch (q.type) {
    case "multiple-choice":
      return total + q.items.length;
    case "multiple-choice-multi":
      return total + (q.correct.length > 1 ? q.correct.length : 1);
    case "true-false-not-given":
    case "yes-no-not-given":
      return total + q.statements.length;
    case "matching-headings":
    case "matching-information":
    case "matching-features":
    case "matching-sentence-endings":
      return total + q.items.length;
    default:
      return total + q.blanks.length;
  }
}

export const READING_SIMULATIONS: ReadingSimulation[] = [
  {
    slug: "reading-sim-academic-1",
    title: "IELTS Reading Full Simulation — Academic 1",
    variant: "academic",
    passageSlugs: ["ielts-rb-ac-water", "ielts-rb-ac-beavers", "ielts-rb-ac-antikythera"],
    timeLimitSec: 60 * 60,
    description:
      "Three unseen-in-combination passages in official section order — an accessible science opener, a mid-test environment case study, and a challenging history finale. One hour, no dictionary, answers typed as you read.",
  },
  {
    slug: "reading-sim-academic-2",
    title: "IELTS Reading Full Simulation — Academic 2",
    variant: "academic",
    passageSlugs: ["ielts-rb-ac-barcode", "ielts-rb-ac-traffic", "ielts-rb-ac-reading-wars"],
    timeLimitSec: 60 * 60,
    description:
      "The second academic set: a narrative technology opener, an economics argument with headings, and an education debate that tests Yes/No/Not Given discipline at full difficulty.",
  },
  {
    slug: "reading-sim-gt-1",
    title: "IELTS Reading Full Simulation — General Training",
    variant: "gt",
    passageSlugs: ["ielts-rb-gt-notices", "ielts-rb-gt-ads", "ielts-rb-gt-holidays", "ielts-rb-gt-lighthouses"],
    timeLimitSec: 60 * 60,
    description:
      "The official GT shape: Section 1's short practical texts, a Section 2 workplace policy, and a Section 3 general-interest passage — with the 15/20/25 minute budget the GT course teaches.",
  },
];

export function readingSimulationBySlug(slug: string): ReadingSimulation | undefined {
  return READING_SIMULATIONS.find((s) => s.slug === slug);
}

export * from "./types";
export { validateReadingBank, validateReadingExercise } from "./validate";
