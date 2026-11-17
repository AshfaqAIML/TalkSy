/**
 * TOEFL Reading and Listening Practice Library — CLI validator (PROMPT 49).
 *
 * Runs the full integrity, distribution and originality checks over both
 * banks and prints a production report. Exits non-zero on any issue.
 */
import { TOEFL_READING_BANK, validateToeflReadingBank, readingBankStats, readingBankSubjects } from "../src/data/exams/toefl/reading-bank";
import { TOEFL_LISTENING_BANK, validateToeflListeningBank, listeningBankStats, listeningQuestionCount } from "../src/data/exams/toefl/listening-bank";

const lines: string[] = [];
const wc = (s: string) => (s.match(/[A-Za-z]+(?:-[A-Za-z]+)*|\d+(?:[.,:]\d+)*/g) ?? []).length;

lines.push("=== TOEFL READING PRACTICE LIBRARY ===");
const rIssues = validateToeflReadingBank(TOEFL_READING_BANK);
for (const i of rIssues) lines.push(`  ✗ ${i}`);
if (rIssues.length === 0) lines.push("  ✓ all integrity, distribution and originality checks passed");
const rs = readingBankStats();
lines.push(`  exercises: ${rs.total} | complete-words ${rs["complete-words"]} | daily-life ${rs["daily-life"]} | academic ${rs["academic-passage"]}`);
const rsubs = readingBankSubjects();
lines.push(`  variety: ${rsubs.completeWords.length} topics, ${rsubs.dailyLife.length} text kinds, ${rsubs.academic.length} subjects`);

lines.push("=== TOEFL LISTENING PRACTICE LIBRARY ===");
const lIssues = validateToeflListeningBank(TOEFL_LISTENING_BANK);
for (const i of lIssues) lines.push(`  ✗ ${i}`);
if (lIssues.length === 0) lines.push("  ✓ all integrity, distribution and originality checks passed");
const ls = listeningBankStats();
lines.push(`  exercises: ${ls.total} | questions: ${listeningQuestionCount()} | choose-response ${ls["choose-response"]} | conversations ${ls.conversation} | announcements ${ls.announcement} | talks ${ls["academic-talk"]}`);

const perExercise = [...TOEFL_READING_BANK, ...TOEFL_LISTENING_BANK];
const totalIssues = rIssues.length + lIssues.length;
lines.push(`=== SUMMARY: ${perExercise.length} exercises, ${totalIssues} issues ===`);
console.log(lines.join("\n"));
if (totalIssues > 0) process.exit(1);
