#!/usr/bin/env bun
/**
 * PROMPT 57 — standalone v2 chapter validation.
 *
 * Validates a chapter file BEFORE it is registered in the production
 * manifest, using the exact same rules the live manifest validation runs
 * (validateV2LessonsOfChapter — no weaker copy) plus per-question practice
 * QC (validateQuestion) over every guided/independent practice-set question.
 *
 * Usage: bun scripts/p57-check-chapter.ts 6|7|...|56
 * The chapter file must be src/data/programme/v2/ch-<NN>.ts exporting
 * `ch<NN>Upgrades: LessonUpgrade[]`.
 */
import { PROGRAMME_CHAPTERS, validateV2LessonsOfChapter, glossaryTranslationSet } from "../src/data/programme";
import { applyUpgradesToChapter } from "../src/data/programme/v2/manifest";
import { validateQuestion } from "../src/lib/practice/qc";
import type { Exercise } from "../src/data/curriculum/types";

const arg = process.argv[2];
const n = Number(arg);
if (!Number.isInteger(n) || n < 1 || n > 56) {
  console.error("usage: bun scripts/p57-check-chapter.ts <chapter number 1-56>");
  process.exit(2);
}
const id = `CH-${String(n).padStart(2, "0")}`;
const modName = `ch${String(n).padStart(2, "0")}Upgrades`;
const file = `../src/data/programme/v2/ch-${String(n).padStart(2, "0")}`;

const mod = (await import(file)) as Record<string, unknown>;
const upgrades = mod[modName] as unknown[];
if (!Array.isArray(upgrades) || upgrades.length === 0) {
  console.error(`${file} does not export ${modName}[]`);
  process.exit(2);
}

const base = PROGRAMME_CHAPTERS.find((c) => c.id === id);
if (!base) {
  console.error(`chapter ${id} not found in the blueprint`);
  process.exit(2);
}

// 1. Every lesson of the chapter must be covered exactly once.
const slugs = new Set<string>();
const issues: string[] = [];
for (const u of upgrades as { slug?: string }[]) {
  if (!u.slug) issues.push(`upgrade entry without slug: ${JSON.stringify(u).slice(0, 80)}`);
  else if (slugs.has(u.slug)) issues.push(`duplicate upgrade for ${u.slug}`);
  else slugs.add(u.slug);
}
for (const l of base.lessons)
  if (!slugs.has(l.slug)) issues.push(`${id} lesson ${l.slug} ("${l.title}") has NO upgrade — every lesson must be upgraded`);

// 2. Merge + run the live v2 rules.
const merged = applyUpgradesToChapter(base, upgrades as never);
issues.push(
  ...validateV2LessonsOfChapter(merged, glossaryTranslationSet()).map((i) => `${i.path}: ${i.message}`),
);

// 3. Hard depth floor from the test suite: >= 14 blocks per lesson.
for (const l of merged.lessons)
  if (l.blocks.length < 14) issues.push(`${l.slug}: only ${l.blocks.length} blocks (test floor is 14)`);

// 4. Practice-set question QC (grading-structure + key consistency + hints).
for (const l of merged.lessons) {
  for (const [si, set] of l.practiceSets.entries()) {
    if (set.questions.length < 3) issues.push(`${l.slug}: practice[${si}] has ${set.questions.length} questions (min 3)`);
    for (const [qi, q] of set.questions.entries()) {
      const qc = validateQuestion({ ...q, id: `${l.slug}-p${si}q${qi}` } as Exercise, {});
      issues.push(...qc.errors);
    }
  }
}

// 5. Beginner prose check runs inside validateV2LessonsOfChapter (Pre-A1/A1).

if (issues.length > 0) {
  console.error(`FAIL — ${id}: ${issues.length} issue(s)`);
  for (const i of issues) console.error(`  - ${i}`);
  process.exit(1);
}
console.log(
  `OK — ${id}: ${merged.lessons.length} lessons upgraded, ${upgrades.length} upgrade entries, v2 rules + practice QC clean`,
);
process.exit(0);
