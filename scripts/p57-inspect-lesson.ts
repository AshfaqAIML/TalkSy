#!/usr/bin/env bun
/**
 * PROMPT 57 calibration probe: dump one live lesson's blocks end-to-end so a
 * human can judge DEPTH (not structure). Usage:
 *   bun scripts/p57-inspect-lesson.ts <lesson-slug>
 * Without a slug, lists the shortest 15 live lessons by total block words.
 */
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const words = (t: string | null | undefined) =>
  (t ?? "").split(/\s+/).filter(Boolean).length;

function blockWords(b: { type: string; data: string }) {
  try {
    const d = JSON.parse(b.data);
    let n = 0;
    const walk = (v: unknown): void => {
      if (typeof v === "string") n += words(v);
      else if (Array.isArray(v)) v.forEach(walk);
      else if (v && typeof v === "object") Object.values(v).forEach(walk);
    };
    walk(d);
    return n;
  } catch {
    return 0;
  }
}

async function main() {
  const slug = process.argv[2];
  if (slug) {
    const lesson = await db.cmsLesson.findUnique({
      where: { slug },
      include: { blocks: { orderBy: { order: "asc" } } },
    });
    if (!lesson) {
      console.error("no such lesson:", slug);
      process.exit(1);
    }
    console.log(
      `LESSON ${lesson.slug} — "${lesson.title}" (${lesson.estimatedMinutes} min, status=${lesson.status}, review=${lesson.reviewStatus}, live=${lesson.live})`,
    );
    console.log(`DESCRIPTION: ${lesson.description}`);
    console.log(`OBJECTIVES: ${lesson.objectives}`);
    console.log(
      `BLOCKS: ${lesson.blocks.length}, total block words = ${lesson.blocks.reduce((s, b) => s + blockWords(b), 0)}`,
    );
    for (const b of lesson.blocks) {
      console.log(`\n--- [#${b.order}] ${b.type} ---`);
      const d = JSON.parse(b.data);
      console.log(JSON.stringify(d, null, 1));
    }
    return;
  }
  // Rank live lessons by depth risk: fewest words first.
  const lessons = await db.cmsLesson.findMany({
    where: { live: true },
    include: { blocks: true },
  });
  const rows = lessons
    .map((l) => ({
      slug: l.slug,
      title: l.title,
      blocks: l.blocks.length,
      words: l.blocks.reduce((s, b) => s + blockWords(b), 0),
      minutes: l.estimatedMinutes,
    }))
    .sort((a, b) => a.words - b.words);
  console.log(`Live lessons: ${lessons.length}`);
  console.log("\nSHORTEST 20 (depth-risk first):");
  for (const r of rows.slice(0, 20))
    console.log(
      `${String(r.words).padStart(6)}w ${String(r.blocks).padStart(3)}b ${String(r.minutes).padStart(3)}m  ${r.slug} — ${r.title.slice(0, 60)}`,
    );
  console.log("\nLONGEST 5:");
  for (const r of rows.slice(-5))
    console.log(`${String(r.words).padStart(6)}w ${String(r.blocks).padStart(3)}b ${r.slug} — ${r.title.slice(0, 60)}`);
  const total = rows.reduce((s, r) => s + r.words, 0);
  const avg = Math.round(total / rows.length);
  console.log(`\nTotal ${total} words · avg ${avg} words/lesson · median ${rows[Math.floor(rows.length / 2)].words}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
