/**
 * Batch task-bank checker (PROMPT 46 authoring workflow).
 *
 * Validates every exported WritingBankTask in a bank content file against
 * the full writing-bank standard — structure, arithmetic honesty and
 * teaching completeness — runnable while a batch is still being written.
 *
 * Usage: bun scripts/check-writing-bank.ts src/data/exams/ielts/writing-bank/academic-t1-b.ts
 */

import { validateWritingTask } from "../src/data/exams/ielts/writing-bank/validate";
import type { WritingBankTask } from "../src/data/exams/ielts/writing-bank/types";

const file = process.argv[2];

if (!file) {
  console.error("usage: bun scripts/check-writing-bank.ts <file.ts>");
  process.exit(1);
}

const mod = await import(file.startsWith(".") || file.startsWith("/") ? file : `../${file.replace(/^src\//, "src/")}`);

const tasks: WritingBankTask[] = [];
for (const [key, value] of Object.entries(mod)) {
  if (Array.isArray(value)) {
    for (const item of value) {
      if (item && typeof item === "object" && "slug" in item && "modelAnswer" in item) tasks.push(item as WritingBankTask);
    }
  } else if (value && typeof value === "object" && "slug" in (value as Record<string, unknown>) && "modelAnswer" in (value as Record<string, unknown>)) {
    tasks.push(value as WritingBankTask);
  }
}

if (tasks.length === 0) {
  console.error(`✗ ${file}: no exported WritingBankTask found (export const tasks or named task objects)`);
  process.exit(1);
}

let allIssues: string[] = [];
for (const task of tasks) {
  const issues = validateWritingTask(task);
  if (issues.length > 0) {
    console.log(`✗ ${task.slug}: ${issues.length} issue(s)`);
    for (const issue of issues) console.log(`    - ${issue}`);
    allIssues = allIssues.concat(issues);
  } else {
    console.log(`✓ ${task.slug} — clean`);
  }
}
console.log(
  `${allIssues.length === 0 ? "✓" : "✗"} ${file}: ${tasks.length} task(s), ${allIssues.length} issue(s)`,
);
process.exit(allIssues.length === 0 ? 0 : 1);
