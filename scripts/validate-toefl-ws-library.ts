/**
 * PROMPT 50 — TOEFL Writing and Speaking Practice Library: full integrity
 * validation. Machine-checks all 200 writing exercises and all 100 speaking
 * items (per-exercise integrity, bank distribution, cross-bank originality)
 * and prints the delivery summary.
 */

import {
  TOEFL_WRITING_BANK,
  validateToeflWritingBank,
  writingBankStats,
  writingBankVariety,
} from "../src/data/exams/toefl/writing-bank";
import {
  TOEFL_SPEAKING_BANK,
  validateToeflSpeakingBank,
  speakingBankStats,
  speakingBankVariety,
} from "../src/data/exams/toefl/speaking-bank";

function run() {
  console.log("=== TOEFL WRITING PRACTICE LIBRARY (PROMPT 50) ===");
  const wIssues = validateToeflWritingBank(TOEFL_WRITING_BANK);
  if (wIssues.length === 0) {
    console.log("  ✓ all integrity, distribution and originality checks passed");
  } else {
    console.log(`  ✗ ${wIssues.length} issue(s):`);
    for (const i of wIssues) console.log("    -", i);
  }
  const wStats = writingBankStats();
  console.log(`  exercises: ${wStats.total} | build-sentence ${wStats["build-sentence"]} | write-email ${wStats["write-email"]} | academic-discussion ${wStats["academic-discussion"]}`);
  const wVar = writingBankVariety();
  console.log(`  variety: ${wVar.focuses.length} sentence focuses, ${wVar.purposes.length} email purposes, ${wVar.recipients.length} recipients, ${wVar.disciplines.length} discussion disciplines`);

  console.log("=== TOEFL SPEAKING PRACTICE LIBRARY (PROMPT 50) ===");
  const sIssues = validateToeflSpeakingBank(TOEFL_SPEAKING_BANK);
  if (sIssues.length === 0) {
    console.log("  ✓ all integrity, distribution and originality checks passed");
  } else {
    console.log(`  ✗ ${sIssues.length} issue(s):`);
    for (const i of sIssues) console.log("    -", i);
  }
  const sStats = speakingBankStats();
  console.log(`  items: ${sStats.total} | listen-repeat ${sStats["listen-repeat"]} | take-interview ${sStats["take-interview"]}`);
  const sVar = speakingBankVariety();
  console.log(`  variety: ${sVar.accents.length} accents, ${sVar.focusTags.length} repeat focus tags, ${sVar.topics.length} interview topics`);

  const total = TOEFL_WRITING_BANK.length + TOEFL_SPEAKING_BANK.length;
  const issues = wIssues.length + sIssues.length;
  console.log(`=== SUMMARY: ${total} exercises/items, ${issues} issues ===`);
  if (issues > 0) process.exit(1);
}

run();
