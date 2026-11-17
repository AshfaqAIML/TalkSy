/**
 * Listening-bank integrity validator (PROMPT 44 authoring workflow).
 *
 * Usage:
 *   bun scripts/validate-listening-bank.ts                      — whole library
 *   bun scripts/validate-listening-bank.ts src/.../part1.ts     — one file
 *
 * Exit code 0 = clean, 1 = issues found. The same pure validator backs
 * tests/listening-bank.test.ts.
 */

import { validateBank } from "../src/data/exams/ielts/listening-bank/validate";
import type { BankExercise } from "../src/data/exams/ielts/listening-bank/types";

async function load(): Promise<BankExercise[]> {
  const arg = process.argv[2];
  if (arg) {
    const mod = await import(arg.startsWith(".") || arg.startsWith("/") ? arg : `../${arg.replace(/^src\//, "src/")}`);
    const out: BankExercise[] = [];
    for (const value of Object.values(mod)) {
      if (Array.isArray(value) && value.length > 0 && "slug" in value[0] && "segments" in value[0]) {
        out.push(...(value as BankExercise[]));
      }
    }
    return out;
  }
  const mod = await import("../src/data/exams/ielts/listening-bank/index");
  return mod.LISTENING_BANK as BankExercise[];
}

const exercises = await load();
const issues = validateBank(exercises);

const questionCount = exercises.reduce((a, e) => a + e.questions.length, 0);
const blankCount = exercises.reduce(
  (a, e) =>
    a +
    e.questions.reduce((b, q) => {
      if ("blanks" in q) return b + q.blanks.length;
      if (q.type === "short-answer") return b + q.questions.length;
      if (q.type === "map") return b + q.plan.grid.flat().filter((c) => c?.blank).length;
      return b;
    }, 0),
  0,
);

console.log(`Listening bank: ${exercises.length} exercises · ${questionCount} question groups · ${blankCount} answerable items`);
if (issues.length > 0) {
  console.error(`\n✗ ${issues.length} issue(s):`);
  for (const issue of issues) console.error(`  - ${issue}`);
  process.exit(1);
}
console.log("✓ listening bank passes integrity validation");
