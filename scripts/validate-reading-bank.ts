/**
 * IELTS Reading Masterclass — passage-bank integrity validator CLI
 * (PROMPT 45, Part D).
 *
 *   bun scripts/validate-reading-bank.ts
 *
 * Exit code 0 = clean, 1 = issues found. The same validator powers the
 * masterclass test suite; this CLI is the authoring-time check.
 */

import { READING_BANK, READING_SIMULATIONS, readingSimulationStats, validateReadingBank } from "../src/data/exams/ielts/reading-bank";

const issues = validateReadingBank(READING_BANK);

const academic = READING_BANK.filter((e) => e.variant === "academic");
const gt = READING_BANK.filter((e) => e.variant === "gt");
const items = READING_BANK.reduce((a, e) => a + e.questions.reduce((n, q) => {
  switch (q.type) {
    case "multiple-choice": return n + q.items.length;
    case "multiple-choice-multi": return n + Math.max(q.correct.length, 1);
    case "true-false-not-given":
    case "yes-no-not-given": return n + q.statements.length;
    case "matching-headings":
    case "matching-information":
    case "matching-features":
    case "matching-sentence-endings": return n + q.items.length;
    default: return n + q.blanks.length;
  }
}, 0), 0);
const words = READING_BANK.reduce((a, e) => a + e.blocks.flatMap((b) => b.paragraphs).join(" ").split(/\s+/).filter(Boolean).length, 0);
const glossary = READING_BANK.reduce((a, e) => a + e.glossary.length, 0);

console.log(`Reading bank: ${READING_BANK.length} exercises (${academic.length} Academic / ${gt.length} GT) · ${items} answerable items · ~${words} passage words · ${glossary} glossary entries`);
console.log(`Simulations: ${READING_SIMULATIONS.map((s) => `${s.slug} (${readingSimulationStats(s).questions}q)`).join(" · ")}`);

if (issues.length > 0) {
  console.error(`\n${issues.length} issue(s):`);
  for (const issue of issues) console.error(`  - ${issue}`);
  process.exit(1);
}
console.log("\nValidation: 0 issues — the reading bank is structurally sound.");
