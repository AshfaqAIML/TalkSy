/**
 * PROMPT 35 batch 2 verification: confirm the CH-04/CH-05 lessons carry the
 * full v2 teaching structure into the dev database (db/custom.db).
 *
 * Run: bun scripts/check-v2-batch2-db.ts
 */
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const SLUGS = [
  "ch-04-l-01", "ch-04-l-02", "ch-04-l-03", "ch-04-l-04", "ch-04-l-05", "ch-04-l-06",
  "ch-05-l-01", "ch-05-l-02", "ch-05-l-03", "ch-05-l-04", "ch-05-l-05",
];

const REQUIRED = [
  "steps",
  "usage",
  "comparison",
  "mistakes",
  "four-skills",
  "language-support",
  "revision",
  "summary",
];

let failures = 0;

for (const slug of SLUGS) {
  const lesson = await db.cmsLesson.findUnique({
    where: { slug },
    include: { blocks: { orderBy: { order: "asc" } } },
  });
  if (!lesson) {
    console.log(`✗ ${slug}: lesson missing from DB`);
    failures += 1;
    continue;
  }
  const blocks = lesson.blocks.map((b) => {
    const data = JSON.parse(b.data as string) as Record<string, unknown>;
    return { order: b.order, type: data.type as string, data };
  });
  const types = blocks.map((b) => b.type);

  const problems: string[] = [];
  if (types[0] !== "lesson-intro") problems.push("first block is not lesson-intro");
  for (const required of REQUIRED) {
    if (!types.includes(required)) problems.push(`missing ${required}`);
  }
  if (!types.includes("grammar-rule") && !types.includes("table")) {
    problems.push("no grammar-rule or table block");
  }

  // Practice sets: guided with hints, independent without.
  const practice = blocks.filter((b) => b.type === "practice");
  const guided = practice.filter((b) => b.data.variant === "guided");
  const independent = practice.filter((b) => b.data.variant === "independent");
  if (guided.length < 1) problems.push("no guided practice set");
  if (independent.length < 1) problems.push("no independent practice set");

  // Worked examples (example blocks + step examples) >= 8.
  const exampleItems = blocks
    .filter((b) => b.type === "example")
    .flatMap((b) => ((b.data.items as unknown[]) ?? []) as unknown[]);
  const stepExamples = blocks
    .filter((b) => b.type === "steps")
    .flatMap((b) =>
      (((b.data.steps as { examples?: unknown[] }[]) ?? []) ?? []).flatMap(
        (s) => s.examples ?? [],
      ),
    );
  if (exampleItems.length + stepExamples.length < 8) {
    problems.push(`only ${exampleItems.length + stepExamples.length} worked examples`);
  }

  // Assignment + homework blocks.
  if (!types.includes("assignment")) problems.push("no assignment block");
  if (!types.includes("homework")) problems.push("no homework block");

  // Honest review state.
  if (lesson.reviewStatus !== "ai-reviewed") {
    problems.push(`reviewStatus=${lesson.reviewStatus}`);
  }

  if (problems.length > 0) {
    failures += 1;
    console.log(`✗ ${slug} (${lesson.title}): ${problems.join("; ")}`);
  } else {
    console.log(
      `✓ ${slug} (${lesson.title}) — ${blocks.length} blocks, ` +
        `${exampleItems.length}+${stepExamples.length} examples, ` +
        `${guided.length} guided + ${independent.length} independent sets, ${lesson.reviewStatus}`,
    );
  }
}

console.log(
  failures === 0
    ? `\nAll ${SLUGS.length} batch-2 lessons carry the full v2 structure in the DB.`
    : `\n${failures}/${SLUGS.length} lessons failed the structure check.`,
);
await db.$disconnect();
process.exit(failures === 0 ? 0 : 1);
