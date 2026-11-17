/**
 * Validate the exam-academy content against the v3 textbook standard
 * (PROMPT 43) and print a depth report. Read-only.
 *
 *   bun scripts/validate-exam-textbook.ts
 */
import { validateTextbook, TEXTBOOK_VERSION, TEXTBOOK_DATE, TEXTBOOK_MANIFEST } from "@/data/exam-academy/textbook-standard";

const result = validateTextbook();
const delivered = TEXTBOOK_MANIFEST.filter((r) => r.status === "delivered");
const planned = TEXTBOOK_MANIFEST.filter((r) => r.status === "planned");

console.log(`Exam Academy Textbook Standard v${TEXTBOOK_VERSION} (${TEXTBOOK_DATE})`);
console.log("=".repeat(72));
console.log(
  `Chapters delivered: ${result.stats.chaptersDelivered}/${result.stats.chaptersPlanned} · planned: ${planned.length}`,
);
console.log(
  `Lessons checked: ${result.stats.lessonsChecked} · questions checked: ${result.stats.questionsChecked}`,
);
console.log(
  `Teaching words across delivered lessons: ${result.stats.teachingWords} (avg ${Math.round(result.stats.teachingWords / Math.max(1, result.stats.lessonsChecked))}/lesson)`,
);
console.log(`Worked examples: ${result.stats.exampleItems}`);
console.log("");
console.log("Delivered chapters:");
for (const row of delivered) {
  console.log(`  ${row.moduleCode}/${row.chapterSlug} — ${row.chapterTitle} (batch ${row.batch}, ${row.deliveredAt}) · ${row.lessons.length} lessons`);
}
console.log("");
if (result.issues.length === 0) {
  console.log("Validation: 0 issues — every delivered lesson meets the v3 textbook standard.");
} else {
  console.log(`Validation: ${result.issues.length} ISSUE(S):`);
  for (const issue of result.issues.slice(0, 80)) console.log(`  - ${issue}`);
  if (result.issues.length > 80) console.log(`  … and ${result.issues.length - 80} more`);
  process.exitCode = 1;
}
