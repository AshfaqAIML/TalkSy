/**
 * Speaking practice-bank checker (PROMPT 47 authoring workflow).
 *
 * Validates the assembled IELTS Speaking practice bank — all 51 items —
 * against the speaking-bank standard: the seven-element cue-card payload,
 * Part 1 set structure, Part 3 escalation, originality, accent neutrality
 * and the practice-library dimensions.
 *
 * Usage:
 *   bun scripts/check-speaking-bank.ts                — validate the whole bank
 *   bun scripts/check-speaking-bank.ts <file.ts>      — validate one batch file
 */

import { validateSpeakingItem } from "../src/data/exams/ielts/speaking-bank/validate";
import { validateSpeakingBank } from "../src/data/exams/ielts/speaking-bank/index";
import { SPEAKING_BANK, speakingBankStats } from "../src/data/exams/ielts/speaking-bank/index";
import type { SpeakingBankItem } from "../src/data/exams/ielts/speaking-bank/types";

const file = process.argv[2];

if (file) {
  const mod = await import(file.startsWith(".") || file.startsWith("/") ? file : file.replace(/^src\//, "src/"));
  const items: SpeakingBankItem[] = [];
  for (const value of Object.values(mod)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item && typeof item === "object" && "slug" in item && "kind" in item) {
          items.push(item as SpeakingBankItem);
        }
      }
    }
  }
  if (items.length === 0) {
    console.error(`✗ ${file}: no exported speaking-bank items found`);
    process.exit(1);
  }
  let issues = 0;
  for (const item of items) {
    const found = validateSpeakingItem(item);
    if (found.length > 0) {
      console.log(`✗ ${item.slug}: ${found.length} issue(s)`);
      for (const issue of found) console.log(`    - ${issue.problem}`);
      issues += found.length;
    } else {
      console.log(`✓ ${item.slug} — clean`);
    }
  }
  console.log(`${issues === 0 ? "✓" : "✗"} ${file}: ${items.length} item(s), ${issues} issue(s)`);
  process.exit(issues === 0 ? 0 : 1);
}

const issues = validateSpeakingBank();
const stats = speakingBankStats();
console.log("IELTS Speaking Masterclass — practice bank integrity");
console.log("=".repeat(64));
console.log(
  `Items: ${stats.total} — Part 1 sets ${stats.part1}, flagship cue cards ${stats.part2Flagship},` +
    ` practice cue cards ${stats.part2Practice}, Part 3 sets ${stats.part3}`,
);
console.log(
  `Coverage: ${stats.topicsCovered}/19 Part 1 topics, ${stats.familiesCovered}/11 cue-card families`,
);
console.log(`Proficiency spread: ${JSON.stringify(stats.byProficiency)}`);
console.log(`Skill spread: ${JSON.stringify(stats.bySkill)}`);
console.log(`Authored items scanned: ${SPEAKING_BANK.length}`);
console.log("");
if (issues.length === 0) {
  console.log("Validation: 0 issues — the bank meets the speaking-masterclass standard.");
} else {
  console.log(`Validation: ${issues.length} ISSUE(S):`);
  for (const issue of issues.slice(0, 100)) console.log(`  - ${issue.item}: ${issue.problem}`);
  if (issues.length > 100) console.log(`  … and ${issues.length - 100} more`);
  process.exitCode = 1;
}
