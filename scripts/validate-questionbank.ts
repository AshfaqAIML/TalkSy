/**
 * PROMPT 36 — question-bank QC validator.
 *
 * Validates the authored practice bank (src/data/practice-bank) and, when a
 * database is reachable, every published question in the CMS bank. QC errors
 * are fatal (exit 1); warnings are printed for human review.
 *
 * Run: bun scripts/validate-questionbank.ts          (code bank only)
 *      DATABASE_URL=… bun scripts/validate-questionbank.ts --db
 */

import { PrismaClient } from "@prisma/client";
import { practiceBankForSeed, practiceBankRollup, practiceBankTotals, BANK_MANIFEST_NOTE } from "../src/data/practice-bank";
import { validateQuestion } from "../src/lib/practice/qc";
import { PROGRAMME_LESSONS, PROGRAMME_CHAPTERS } from "../src/data/programme";
import type { Exercise } from "../src/data/curriculum/types";

const withDb = process.argv.includes("--db");

function knownLessonSlugs(): Set<string> {
  return new Set(PROGRAMME_LESSONS.map((l) => l.slug));
}

function run(): number {
  const lessonSlugs = knownLessonSlugs();
  const bank = practiceBankForSeed();
  const errors: string[] = [];
  const warnings: string[] = [];

  // 1. The authored practice bank (code).
  for (const item of bank) {
    const exercise = { ...item.exercise, id: "pending" } as Exercise;
    const result = validateQuestion(
      exercise,
      { knownLessonSlugs: lessonSlugs },
      { slug: item.slug, chapterSlug: item.chapterSlug, lessonSlug: item.lessonSlug, topic: item.topic },
    );
    errors.push(...result.errors);
    warnings.push(...result.warnings);
  }


  const totals = practiceBankTotals();
  console.log(`[questionbank] code bank: ${totals.questions} questions across ${totals.chapters} chapters (${totals.perChapterMin}–${totals.perChapterMax} per chapter)`);
  console.log(`[questionbank] ${BANK_MANIFEST_NOTE}`);
  const rollup = practiceBankRollup();
  for (const row of rollup) {
    console.log(
      `  ${row.chapterSlug}: +${row.authoredHere} authored · lessons ${row.lessons.join(",")} · ${Object.entries(row.byDifficulty).map(([k, v]) => `${k}:${v}`).join(" ")}`,
    );
  }
  if (warnings.length > 0) {
    console.log(`[questionbank] ${warnings.length} warning(s) for human review:`);
    for (const w of warnings.slice(0, 40)) console.log(`  WARN ${w}`);
  }
  if (errors.length > 0) {
    console.error(`[questionbank] ${errors.length} QC ERROR(S) — refusing to publish:`);
    for (const e of errors) console.error(`  ${e}`);
    return 1;
  }
  console.log("[questionbank] QC clean — no errors.");
  return 0;
}

async function runDb(): Promise<number> {
  const db = new PrismaClient();
  const codeExit = run();
  let exit = codeExit;
  try {
    const lessonSlugs = knownLessonSlugs();
    const rows = await db.cmsQuestion.findMany({
      where: { status: "published" },
      select: { id: true, slug: true, type: true, skill: true, difficulty: true, tags: true, data: true, chapterSlug: true, lessonSlug: true },
    });
    let tagged = 0;
    let chapterMeta = 0;
    const errors: string[] = [];
    for (const row of rows) {
      if (row.chapterSlug) chapterMeta += 1;
      try {
        const parsed = JSON.parse(row.tags) as unknown;
        if (Array.isArray(parsed) && parsed.length > 0) tagged += 1;
      } catch { /* empty tags */ }
      let exercise: Exercise;
      try {
        exercise = JSON.parse(row.data) as Exercise;
      } catch {
        errors.push(`[${row.slug}] data payload is not valid JSON`);
        continue;
      }
      if (exercise.id !== row.id) continue;
      try {
        const result = validateQuestion(
          exercise,
          { knownLessonSlugs: lessonSlugs },
          { slug: row.slug, chapterSlug: row.chapterSlug ?? undefined, lessonSlug: row.lessonSlug ?? undefined, topic: undefined },
        );
        errors.push(...result.errors);
      } catch (e) {
        // A validator crash is a validator bug or malformed payload — never
        // misreport it as a JSON error.
        errors.push(`[${row.slug}] validator threw: ${(e as Error).message}`);
      }
    }
    console.log(`[questionbank] db: ${rows.length} published questions · ${chapterMeta} with chapter metadata · ${tagged} with topic tags`);
    if (errors.length > 0) {
      console.error(`[questionbank] ${errors.length} DB QC ERROR(S):`);
      for (const e of errors.slice(0, 30)) console.error(`  ${e}`);
      exit = 1;
    } else {
      console.log("[questionbank] db QC clean.");
    }
  } finally {
    await db.$disconnect();
  }
  return exit;
}

if (withDb) {
  runDb()
    .then((code) => {
      process.exitCode = code;
    })
    .catch((error) => {
      console.error("[questionbank] db validation failed:", error);
      process.exitCode = 1;
    });
} else {
  process.exitCode = run();
}
