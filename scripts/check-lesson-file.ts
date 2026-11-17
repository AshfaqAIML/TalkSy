/**
 * Batch lesson checker (PROMPT 44 authoring workflow).
 *
 * Validates every exported LessonSpec[] in a content file against the full
 * v3 textbook standard — the same per-lesson rules the manifest integration
 * test enforces, runnable while a batch is still being written.
 *
 * Usage: bun scripts/check-lesson-file.ts src/data/exams/ielts/m2/ch2-skills-a.ts [moduleCode]
 *   moduleCode defaults to "I-M2" (non-orientation floors: 500 teaching words).
 *
 * Exit code 0 = clean, 1 = issues found.
 */

import { validateLessonsStandalone } from "../src/data/exam-academy/textbook-standard";
import type { LessonSpec } from "../src/data/exams/ielts/types";

const file = process.argv[2];
const moduleCode = process.argv[3] ?? "I-M2";

if (!file) {
  console.error("usage: bun scripts/check-lesson-file.ts <file.ts> [moduleCode]");
  process.exit(1);
}

const mod = await import(file.startsWith(".") || file.startsWith("/") ? file : `../${file.replace(/^src\//, "src/")}`);

const batches: { name: string; lessons: LessonSpec[] }[] = [];
for (const [key, value] of Object.entries(mod)) {
  if (Array.isArray(value) && value.length > 0 && typeof value[0] === "object" && value[0] !== null && "slug" in value[0] && "blocks" in value[0]) {
    batches.push({ name: key, lessons: value as LessonSpec[] });
  }
  // ModuleSpec exports (units → lessons) are also accepted.
  if (value && typeof value === "object" && !Array.isArray(value) && "units" in (value as Record<string, unknown>)) {
    const m = value as { units: { lessons: LessonSpec[] }[] };
    const lessons = m.units.flatMap((u) => u.lessons ?? []);
    if (lessons.length > 0) batches.push({ name: key, lessons });
  }
}

if (batches.length === 0) {
  console.error(`✗ ${file}: no exported LessonSpec[] array found (export a const array of lessons)`);
  process.exit(1);
}

let totalLessons = 0;
let allIssues: string[] = [];
for (const batch of batches) {
  const { issues, stats } = validateLessonsStandalone(batch.lessons, moduleCode);
  totalLessons += stats.lessonsChecked;
  console.log(
    `[${batch.name}] ${stats.lessonsChecked} lessons · ${stats.teachingWords} teaching words · ${stats.questionsChecked} questions · ${stats.exampleItems} example items`,
  );
  allIssues = allIssues.concat(issues);
}

if (allIssues.length > 0) {
  console.error(`\n✗ ${allIssues.length} issue(s) in ${file}:`);
  for (const issue of allIssues) console.error(`  - ${issue}`);
  process.exit(1);
}
console.log(`✓ ${file}: ${totalLessons} lessons pass the v3 textbook standard (${moduleCode} floors)`);
