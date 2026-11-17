import { TOEFL_LISTENING_BANK, validateToeflListeningBank, listeningBankStats, listeningQuestionCount } from "../src/data/exams/toefl/listening-bank";
import { validateToeflListeningExercise, exerciseScript } from "../src/data/exams/toefl/listening-bank";
const wc = (s: string) => (s.match(/[A-Za-z]+(?:-[A-Za-z]+)*|\d+(?:[.,:]\d+)*/g) ?? []).length;
let bad = 0;
for (const ex of TOEFL_LISTENING_BANK) {
  const issues = validateToeflListeningExercise(ex);
  if (issues.length) { bad++; console.log(`${ex.slug} d${ex.difficulty} ${wc(exerciseScript(ex))}w — ISSUES:`); for (const i of issues) console.log("   ", i); }
}
console.log("bank size:", TOEFL_LISTENING_BANK.length, "| questions:", listeningQuestionCount());
console.log("stats:", JSON.stringify(listeningBankStats()));
const issues = validateToeflListeningBank(TOEFL_LISTENING_BANK);
console.log(issues.length === 0 ? "BANK VALID — 0 issues" : "BANK ISSUES:");
for (const i of issues) console.log("  ", i);
console.log(bad === 0 ? "ALL EXERCISES CLEAN" : `${bad} exercises with issues`);
