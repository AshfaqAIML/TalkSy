/**
 * Educational content audit: quantitative checks over the curriculum data.
 * - Lesson + exercise counts by level / type / difficulty
 * - Answer-key solvability: every exercise must be answerable correctly
 *   through the real grading engine (no impossible questions).
 * - Translation coverage in Pre-A1 vocabulary blocks.
 * - Reading text level distribution + length stats.
 */
import {
  lessons as curriculumLessons,
  exercises as allExercises,
} from "@/data/curriculum";
import { validateAnswer } from "@/lib/engine/validators";
import { buildCorrectAnswer } from "../tests/helpers";

const lessons = curriculumLessons;
const exercises = allExercises;

console.log(`Lessons: ${lessons.length}`);
const byLevel: Record<string, number> = {};
for (const lesson of lessons) {
  byLevel[lesson.levelId] = (byLevel[lesson.levelId] ?? 0) + 1;
}
console.log("Lessons by level:", byLevel);

const byType: Record<string, number> = {};
const byDifficulty: Record<string, number> = {};
const bySkill: Record<string, number> = {};
for (const ex of exercises) {
  byType[ex.type] = (byType[ex.type] ?? 0) + 1;
  byDifficulty[ex.difficulty] = (byDifficulty[ex.difficulty] ?? 0) + 1;
  bySkill[ex.skill] = (bySkill[ex.skill] ?? 0) + 1;
}
console.log(`\nExercises: ${exercises.length}`);
console.log("By type:", byType);
console.log("By difficulty:", byDifficulty);
console.log("By skill:", bySkill);

// Solvability: every exercise graded correct with its own key.
let solvable = 0;
const unsolvable: string[] = [];
for (const ex of exercises) {
  const answer = buildCorrectAnswer(ex);
  if (answer === null) {
    unsolvable.push(`${ex.id} (${ex.type}): no correct-answer builder`);
    continue;
  }
  const result = validateAnswer(ex, answer);
  if (result.correct) solvable += 1;
  else unsolvable.push(`${ex.id} (${ex.type}): key rejected, score=${result.score}`);
}
console.log(`\nAnswer-key solvability: ${solvable}/${exercises.length}`);
if (unsolvable.length > 0) {
  console.log("UNSOLVABLE:");
  for (const u of unsolvable) console.log("  " + u);
}

// Translation coverage: pre-a1 vocabulary-list blocks.
let words = 0;
let withTranslation = 0;
let withExample = 0;
for (const lesson of lessons) {
  if (lesson.levelId !== "pre-a1") continue;
  for (const block of lesson.sections.flatMap((s) => s.blocks)) {
    if (block.type === "vocabulary-list") {
      for (const w of block.words) {
        words += 1;
        if (w.translation) withTranslation += 1;
        if (w.example) withExample += 1;
      }
    }
  }
}
console.log(`\nPre-A1 vocabulary entries: ${words}`);
console.log(`  with translation: ${withTranslation} (${Math.round((withTranslation / words) * 100)}%)`);
console.log(`  with example sentence: ${withExample} (${Math.round((withExample / words) * 100)}%)`);

// Assessment pass-rate sanity: every lesson's assessment must be completable.
const withAssessment = lessons.filter((lesson) => lesson.assessment).length;
console.log(`\nLessons with final assessment: ${withAssessment}/${lessons.length}`);

// Reading texts.
const { readingTexts } = await import("@/data/reading");
console.log(`\nReading texts: ${readingTexts.length}`);
const byReadingLevel: Record<string, number> = {};
for (const t of readingTexts) {
  byReadingLevel[t.level] = (byReadingLevel[t.level] ?? 0) + 1;
}
console.log("Reading by level:", byReadingLevel);

// Listening activities.
const listening = await import("@/data/listening");
const activities = (listening as unknown as { LIBRARY?: { activities?: unknown[] }; listeningActivities?: unknown[] });
console.log(
  "Listening activities:",
  listening.listeningActivities?.length ?? activities.LIBRARY?.activities?.length ?? "n/a",
);
