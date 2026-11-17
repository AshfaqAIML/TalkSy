/**
 * PROMPT 54 — TALK SY Original Examination Question Bank validator.
 *
 * Machine-checks the unified bank and every underlying content bank:
 *
 *   1. The four IELTS banks run their own integrity validators
 *      (originality windows, answer-key honesty, rubric floors, coverage
 *      contracts) — the same gates the masterclass tests enforce.
 *   2. The four TOEFL banks run their own validators.
 *   3. The unified registry validates the fifteen-field contract: unique
 *      IDs, field completeness, the twelve-domain variety contract, the
 *      per-examination size targets, the writing/speaking rubric contract
 *      and the version-honesty rules.
 *
 * Exit code 0 = clean, 1 = issues found.
 *
 * Run: bun scripts/validate-exam-question-bank.ts
 */

import {
  QUESTION_BANK,
  questionBankStats,
  validateUnifiedBank,
  BANK_SIZE_TARGETS,
  BANK_TOPIC_LABELS,
} from "../src/data/exams/question-bank";
import { validateBank as validateIeltsListening } from "../src/data/exams/ielts/listening-bank";
import { LISTENING_BANK } from "../src/data/exams/ielts/listening-bank";
import { validateReadingBank } from "../src/data/exams/ielts/reading-bank";
import { READING_BANK } from "../src/data/exams/ielts/reading-bank";
import { validateWritingBank } from "../src/data/exams/ielts/writing-bank";
import { WRITING_BANK } from "../src/data/exams/ielts/writing-bank";
import {
  SPEAKING_PART1_SETS,
  SPEAKING_CUE_CARDS,
  SPEAKING_PRACTICE_CUE_CARDS,
  SPEAKING_PART3_SETS,
} from "../src/data/exams/ielts/speaking-bank";
import { validateSpeakingBank as validateIeltsSpeakingRaw } from "../src/data/exams/ielts/speaking-bank/validate";
import { validateToeflReadingBank } from "../src/data/exams/toefl/reading-bank/validate";
import { TOEFL_READING_BANK } from "../src/data/exams/toefl/reading-bank";
import { validateToeflListeningBank } from "../src/data/exams/toefl/listening-bank/validate";
import { TOEFL_LISTENING_BANK } from "../src/data/exams/toefl/listening-bank";
import { validateToeflWritingBank } from "../src/data/exams/toefl/writing-bank/validate";
import { TOEFL_WRITING_BANK } from "../src/data/exams/toefl/writing-bank";
import { validateToeflSpeakingBank } from "../src/data/exams/toefl/speaking-bank/validate";
import { TOEFL_SPEAKING_BANK } from "../src/data/exams/toefl/speaking-bank";

const fail = (message: string): never => {
  console.error(`✗ ${message}`);
  process.exit(1);
};

// 1. The underlying banks run their own integrity validators.
const bankChecks: [string, string[]][] = [
  ["IELTS Listening bank", validateIeltsListening(LISTENING_BANK)],
  ["IELTS Reading bank", validateReadingBank(READING_BANK)],
  ["IELTS Writing bank", validateWritingBank(WRITING_BANK)],
  [
    "IELTS Speaking bank",
    validateIeltsSpeakingRaw(
      SPEAKING_PART1_SETS,
      SPEAKING_CUE_CARDS,
      SPEAKING_PRACTICE_CUE_CARDS,
      SPEAKING_PART3_SETS,
    ).map((issue) => `${issue.item}: ${issue.problem}`),
  ],
  ["TOEFL Reading bank", validateToeflReadingBank(TOEFL_READING_BANK)],
  ["TOEFL Listening bank", validateToeflListeningBank(TOEFL_LISTENING_BANK)],
  ["TOEFL Writing bank", validateToeflWritingBank(TOEFL_WRITING_BANK)],
  ["TOEFL Speaking bank", validateToeflSpeakingBank(TOEFL_SPEAKING_BANK)],
];

for (const [label, issues] of bankChecks) {
  if (issues.length > 0) {
    console.error(`${label}: ${issues.length} issue(s)`);
    for (const issue of issues.slice(0, 12)) console.error(`  - ${typeof issue === "string" ? issue : JSON.stringify(issue)}`);
    if (issues.length > 12) console.error(`  … and ${issues.length - 12} more`);
    process.exit(1);
  }
  console.log(`✓ ${label} passes its integrity validation`);
}

// 2. The unified registry's own contract.
const unifiedIssues = validateUnifiedBank();
if (unifiedIssues.length > 0) {
  console.error(`Unified question bank: ${unifiedIssues.length} issue(s)`);
  for (const issue of unifiedIssues.slice(0, 20)) console.error(`  - ${issue}`);
  process.exit(1);
}

// 3. The report.
const stats = questionBankStats();
console.log("");
console.log("TALK SY Original Examination Question Bank — validated");
console.log(`  Total items: ${stats.total}`);
for (const [key, target] of Object.entries(BANK_SIZE_TARGETS)) {
  const [exam, section] = key.split("/");
  const label = `${exam.toUpperCase()} ${section[0].toUpperCase()}${section.slice(1)}`;
  const actual = stats.byExamSection[key] ?? 0;
  console.log(`  ${label.padEnd(16)} ${String(actual).padStart(4)} items (target ${target})`);
}
console.log(`  Answer-keyed: ${stats.keyed} · Rubric-assessed: ${stats.rubric}`);
console.log(`  Review status: ${Object.entries(stats.byReviewStatus).map(([k, v]) => `${k} ${v}`).join(", ")}`);
console.log("  Topic domains:");
for (const [topic, count] of Object.entries(stats.byTopic).sort((a, b) => b[1] - a[1])) {
  console.log(`    ${(BANK_TOPIC_LABELS as Record<string, string>)[topic]?.padEnd(22)} ${String(count).padStart(4)}`);
}
console.log("");
console.log(`✓ all ${stats.total} items pass the unified PROMPT 54 contract`);
void QUESTION_BANK;
