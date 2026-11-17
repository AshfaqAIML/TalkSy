/**
 * Validate the Exam Academy curriculum blueprint and print a workload report.
 * Read-only; used by PROMPT 42 delivery and the test chain.
 *
 *   bun scripts/validate-exam-blueprint.ts
 */

import { validateBlueprint } from "@/data/exam-academy/validate";
import { blueprintSummary } from "@/data/exam-academy";

const result = validateBlueprint();
const summary = blueprintSummary();

console.log(`Exam Academy Curriculum Blueprint v${summary.version} (${summary.date})`);
console.log("=".repeat(72));
console.log(
  `Module definitions: ${result.stats.modules}   Lesson definitions: ${result.stats.lessons}   ` +
    `(existing ${result.stats.existingLessons} / new ${result.stats.newLessons})`,
);
console.log(`Live v1 IELTS lessons placed (nothing dropped, nothing duplicated): ${result.stats.liveIeltsLessonsPlaced}`);
console.log(`Prompt-mandated topics checked: ${result.stats.topicRequirementsChecked}`);
console.log(`New teaching minutes to author: ${summary.newTeachingMinutes} (~${(summary.newTeachingMinutes / 60).toFixed(1)} h)`);
console.log("");
console.log("Pathways:");
for (const p of summary.pathways) {
  console.log(
    `  ${p.key.padEnd(24)} ${p.modules.length} modules · ${p.lessons} lessons ` +
      `(${p.existingLessons} existing + ${p.newLessons} new) · ${p.minutes} min teaching · ~${p.estimatedHours} h study`,
  );
  for (const m of p.modules) {
    console.log(
      `      ${m.code.padEnd(6)} ${m.title.padEnd(58)} ${String(m.lessons).padStart(2)} lessons ` +
        `(${m.existingLessons}E+${m.newLessons}N) ${String(m.minutes).padStart(4)} min`,
    );
  }
}
console.log("");
if (result.issues.length === 0) {
  console.log("Validation: 0 issues — blueprint is structurally sound.");
} else {
  console.log(`Validation: ${result.issues.length} ISSUE(S):`);
  for (const issue of result.issues) console.log(`  - ${issue}`);
  process.exitCode = 1;
}
