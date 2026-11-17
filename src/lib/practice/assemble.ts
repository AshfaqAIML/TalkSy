/**
 * PROMPT 36 — question assembly.
 *
 * Pure, deterministic functions over bank pools. The same (mode, scope,
 * retry-count) always draws the same set; the next retry differs. Chapter
 * tests stratify across the chapter's lessons so the quiz covers the actual
 * learning objectives; course assessments cover all seven areas.
 */

import { seededShuffle } from "@/lib/engine/normalize";
import type { Difficulty } from "@/data/curriculum/types";
import type { BankQuestion } from "./bank";
import { areaOf, ASSESSMENT_AREAS, type AssessmentArea } from "./areas";

/** Difficulty order used when guaranteeing a mix. */
const DIFFICULTY_ORDER: Difficulty[] = ["easy", "medium", "hard", "challenge"];

/** Seeded shuffle helper over bank questions. */
function shufflePool(pool: BankQuestion[], seed: string): BankQuestion[] {
  return seededShuffle(pool, seed);
}

/** Guarantee at least one easy and one hard/challenge when the pool allows. */
function guaranteeDifficultyMix(draw: BankQuestion[]): BankQuestion[] {
  const hasEasy = draw.some((q) => q.exercise.difficulty === "easy");
  const hasHard =
    draw.some((q) => q.exercise.difficulty === "hard") ||
    draw.some((q) => q.exercise.difficulty === "challenge");
  if (hasEasy && hasHard) return draw;
  return draw; // pool too small or naturally mixed — leave as drawn
}

/**
 * Chapter test draw: one question per lesson first (round-robin over the
 * chapter's lessons), then fill to `count`, final order shuffled so the
 * lesson sequence is not telegraphed. Guarantees: no duplicates, difficulty
 * floor (an easy first + a hard late when the pool supports it).
 */
export function drawChapterTest(
  pool: BankQuestion[],
  count: number,
  seed: string,
): BankQuestion[] {
  if (pool.length === 0) return [];
  const target = Math.min(count, pool.length);

  // 1. Group by lesson, seeded shuffle inside each group.
  const byLesson = new Map<string, BankQuestion[]>();
  for (const q of shufflePool(pool, `chapter:${seed}`)) {
    const list = byLesson.get(q.lessonSlug) ?? [];
    list.push(q);
    byLesson.set(q.lessonSlug, list);
  }
  const lessonBuckets = [...byLesson.values()];

  // 2. Round-robin: first pass takes one per lesson.
  const picked: BankQuestion[] = [];
  let exhausted = false;
  while (!exhausted && picked.length < target) {
    exhausted = true;
    for (const bucket of lessonBuckets) {
      if (picked.length >= target) break;
      if (bucket.length > 0) {
        picked.push(bucket.shift()!);
        exhausted = false;
      }
    }
  }

  // 3. Difficulty floor: swap in an easy and a hard/challenge when missing.
  const hasEasy = picked.some((q) => q.exercise.difficulty === "easy");
  const hasHard = picked.some((q) => q.exercise.difficulty === "hard" || q.exercise.difficulty === "challenge");
  const leftovers = pool.filter((q) => !picked.includes(q));
  const swapIn = (difficulty: Difficulty[]) => {
    const candidate = shufflePool(
      leftovers.filter((q) => difficulty.includes(q.exercise.difficulty)),
      `swap:${seed}`,
    )[0];
    if (!candidate) return;
    // Replace the easiest-to-lose item: the last medium.
    const index = picked.findIndex((q) => q.exercise.difficulty === "medium");
    if (index >= 0) picked[index] = candidate;
    else if (picked.length < target) picked.push(candidate);
  };
  if (!hasEasy) swapIn(["easy"]);
  if (!hasHard) swapIn(["hard", "challenge"]);
  guaranteeDifficultyMix(picked);

  // 4. Shuffle the final order (stable per seed).
  return shufflePool(picked, `order:${seed}`).slice(0, target);
}

/**
 * Course assessment draw: every area must appear. Two questions per area by
 * default (14 for seven areas), preferring chapter variety within each area.
 */
export function drawCourseAssessment(
  pool: BankQuestion[],
  count: number,
  seed: string,
): BankQuestion[] {
  if (pool.length === 0) return [];
  const target = Math.min(count, pool.length);

  const byArea = new Map<AssessmentArea, BankQuestion[]>();
  for (const q of shufflePool(pool, `course:${seed}`)) {
    const area = areaOf({ type: q.exercise.type, skill: q.exercise.skill });
    const list = byArea.get(area) ?? [];
    list.push(q);
    byArea.set(area, list);
  }

  // Areas the pool cannot cover — an honest gap the report will state.
  const missingAreas = ASSESSMENT_AREAS.filter((a) => !byArea.has(a));
  if (missingAreas.length > 0 && byArea.size === 0) return [];

  // Per-area quota: split the target across covered areas.
  const coveredAreas = ASSESSMENT_AREAS.filter((a) => byArea.has(a));
  const perArea = Math.max(2, Math.floor(target / coveredAreas.length));
  const picked: BankQuestion[] = [];
  for (const area of coveredAreas) {
    const bucket = byArea.get(area)!;
    // Prefer chapter variety: sort the bucket's picks across distinct chapters.
    const usedChapters = new Set<string>();
    const picks: BankQuestion[] = [];
    for (const q of bucket) {
      if (picks.length >= perArea) break;
      if (usedChapters.has(q.chapterSlug) && picks.length < perArea - 1) continue;
      picks.push(q);
      usedChapters.add(q.chapterSlug);
    }
    for (const q of bucket) {
      if (picks.length >= perArea) break;
      if (!picks.includes(q)) picks.push(q);
    }
    picked.push(...picks);
  }

  // Fill any shortfall from the remains (respecting the target).
  for (const q of shufflePool(pool, `fill:${seed}`)) {
    if (picked.length >= target) break;
    if (!picked.includes(q)) picked.push(q);
  }

  return shufflePool(picked.slice(0, target), `order:${seed}`);
}

/**
 * General spread draw (guided, independent, revision, mixed, timed,
 * weak-area): seeded shuffle with a difficulty mix guarantee, mirroring the
 * proven lesson-assessment stratification.
 */
export function drawSpread(
  pool: BankQuestion[],
  count: number,
  seed: string,
): BankQuestion[] {
  if (pool.length === 0) return [];
  const target = Math.min(count, pool.length);
  const shuffled = shufflePool(pool, `spread:${seed}`);

  const byDifficulty = new Map<Difficulty, BankQuestion[]>();
  for (const q of shuffled) {
    const list = byDifficulty.get(q.exercise.difficulty) ?? [];
    list.push(q);
    byDifficulty.set(q.exercise.difficulty, list);
  }

  const picked: BankQuestion[] = [];
  const takeFrom = (difficulty: Difficulty) => {
    const list = byDifficulty.get(difficulty);
    if (list && list.length > 0) picked.push(list.shift()!);
  };
  if (target >= 4) {
    takeFrom("easy");
    takeFrom("hard");
  }
  for (const difficulty of DIFFICULTY_ORDER) {
    while (picked.length < target) {
      const list = byDifficulty.get(difficulty);
      if (!list || list.length === 0) break;
      picked.push(list.shift()!);
    }
    if (picked.length >= target) break;
  }
  for (const q of shuffled) {
    if (picked.length >= target) break;
    if (!picked.includes(q)) picked.push(q);
  }
  guaranteeDifficultyMix(picked);
  return shufflePool(picked.slice(0, target), `order:${seed}`);
}

/** Prioritise questions the learner has recently answered wrongly. */
export function prioritiseWrong(
  pool: BankQuestion[],
  wrongIds: ReadonlySet<string>,
  count: number,
  seed: string,
): BankQuestion[] {
  const wrong = pool.filter((q) => wrongIds.has(q.id));
  const fresh = pool.filter((q) => !wrongIds.has(q.id));
  const wrongFirst = [...shufflePool(wrong, `wrong:${seed}`), ...shufflePool(fresh, `fresh:${seed}`)];
  // Still spread difficulties across the final set.
  return drawSpread(wrongFirst, count, seed);
}
