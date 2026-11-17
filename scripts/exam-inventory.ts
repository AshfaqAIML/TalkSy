/**
 * Dump the authored exam-academy course inventory (modules → units → lessons)
 * and the live-database footprint, so content batches can be planned against
 * real structure (PROMPT 43 workflow, step 0 of every batch).
 *
 *   bun scripts/exam-inventory.ts
 */
import { PrismaClient } from "@prisma/client";
import { IELTS_COURSES } from "../src/data/exams/ielts";
import { TOEFL_COURSES } from "../src/data/exams/toefl";

const db = new PrismaClient();

function pad(n: number, w = 2) {
  return String(n).padStart(w, " ");
}

console.log("=== Authored inventory ===");
for (const course of [...IELTS_COURSES, ...TOEFL_COURSES]) {
  console.log(`\nCOURSE ${course.slug} — ${course.title}`);
  for (const mod of course.modules) {
    console.log(`  MODULE ${mod.slug} — ${mod.title}`);
    for (const unit of mod.units) {
      console.log(`    UNIT ${unit.slug} — ${unit.title}`);
      for (const l of unit.lessons) {
        console.log(`      ${pad(l.minutes)}min  ${l.slug} — ${l.title} [${l.blocks.length} blocks, ${(l.questions ?? []).length} q, hw:${(l.homework ?? []).length}, asg:${l.assignment ? 1 : 0}]`);
      }
    }
  }
}

console.log("\n=== Live database footprint ===");
const lessons = await db.cmsLesson.findMany({
  where: { OR: [{ slug: { startsWith: "ielts-" } }, { slug: { startsWith: "toefl-" } }] },
  select: { slug: true, live: true, status: true, reviewStatus: true, estimatedMinutes: true, unitId: true },
  orderBy: { slug: "asc" },
});
const moduleRows = await db.cmsModule.findMany({
  where: { OR: [{ course: { slug: "ielts-academy-core" } }, { course: { slug: "ielts-academy-academic" } }, { course: { slug: "ielts-academy-general-training" } }, { course: { slug: "toefl-ibt-academy" } }] },
  include: { course: { select: { slug: true } }, units: { include: { lessons: { select: { slug: true } } } } },
});
console.log(`exam lessons in DB: ${lessons.length}`);
const byModule = new Map<string, { count: number; units: Set<string> }>();
for (const mod of moduleRows) {
  const key = `${mod.course.slug}/${mod.slug}`;
  const count = mod.units.reduce((a, u) => a + u.lessons.length, 0);
  byModule.set(key, { count, units: new Set(mod.units.map((u) => u.slug)) });
}
for (const [key, v] of [...byModule.entries()].sort()) {
  console.log(`  ${String(v.count).padStart(3)} lessons / ${v.units.size} units — ${key}`);
}
const moduleIds = new Set(moduleRows.map((m) => m.id));
const units = await db.cmsUnit.findMany({
  where: { lessons: { none: {} } },
  select: { slug: true, moduleId: true },
});
const emptyExamUnits = units.filter((u) => moduleIds.has(u.moduleId));
console.log(`empty exam units in DB: ${emptyExamUnits.length}${emptyExamUnits.length ? " → " + emptyExamUnits.map((u) => u.slug).join(", ") : ""}`);
const notLive = lessons.filter((l) => !l.live || l.status !== "approved").map((l) => l.slug);
console.log(`exam lessons not live/approved: ${notLive.length}${notLive.length ? " → " + notLive.join(", ") : ""}`);
db.$disconnect();
