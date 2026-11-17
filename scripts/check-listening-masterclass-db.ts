/**
 * Post-resume verification for the IELTS Listening Masterclass (PROMPT 44):
 * confirm the live dev database serves the 31-lesson masterclass, the nine
 * new listening mocks, and the demo attempts behind the performance engine.
 *
 * Usage: DATABASE_URL=file:/home/z/my-project/db/custom.db bun scripts/check-listening-masterclass-db.ts
 */
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  const moduleRow = await db.cmsModule.findUnique({
    where: { slug: "module-2-listening" },
    select: { id: true },
  });
  const units = await db.cmsUnit.findMany({
    where: { moduleId: moduleRow?.id ?? "none" },
    select: { id: true, slug: true, title: true, lessons: { select: { slug: true, live: true, reviewStatus: true } } },
    orderBy: { order: "asc" },
  });
  let liveTotal = 0;
  for (const u of units) {
    const live = u.lessons.filter((l) => l.live);
    liveTotal += live.length;
    console.log(`  ${u.slug} — ${u.title}: ${live.length}/${u.lessons.length} live lessons`);
  }
  console.log(`module-2-listening: ${units.length} chapters, ${liveTotal} live lessons (target 31)`);
  const statuses = new Map<string, number>();
  for (const u of units) for (const l of u.lessons) statuses.set(l.reviewStatus, (statuses.get(l.reviewStatus) ?? 0) + 1);
  console.log("review statuses:", Object.fromEntries(statuses));

  const allLive = await db.cmsLesson.count({ where: { live: true } });
  const archived = await db.cmsLesson.count({ where: { live: false } });
  console.log(`all CMS lessons: ${allLive} live, ${archived} archived (superseded, never deleted)`);

  const mocks = await db.mockTest.findMany({
    where: { status: "published" },
    select: { id: true, title: true, kind: true, lengthLabel: true },
    orderBy: { createdAt: "asc" },
  });
  const listening = mocks.filter((m) => /listening/i.test(m.title));
  console.log(`published mocks: ${mocks.length} total | ${listening.length} listening-titled`);
  for (const m of listening) console.log(`  - [${m.kind}/${m.lengthLabel}] ${m.title}`);

  const attempts = await db.listeningBankAttempt.count();
  const responses = await db.listeningBankResponse.count();
  const demo = await db.listeningBankAttempt.count({ where: { user: { email: "demo@talksy.app" } } });
  console.log(`listening bank attempts: ${attempts} total (${demo} demo) | ${responses} graded responses`);

  await db.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
