/**
 * PROMPT 48 data repair: backfill the engine's dual-key answer shape
 * ({ text, answer }) on SENTENCE_RECONSTRUCTION questions of the two
 * TOEFL mocks seeded before the contract was discovered.
 *
 * Why: mock-engine.ts reads `answer.answer ?? answer.words` for
 * SENTENCE_RECONSTRUCTION. The two early mocks were seeded with either no
 * question-level answer (sample mock 1) or `{ text }` only (writing mock 1),
 * which made those items unscoreable — and an empty submission could match
 * the empty target for full marks. seedMocks() skips mocks that already
 * exist, so the rows are repaired here instead.
 *
 * Run against the same DATABASE_URL as the seeder:
 *   DATABASE_URL=file:/home/z/my-project/db/custom.db bun scripts/fix-toefl-mock-answers.ts
 */
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const TITLES = [
  "TOEFL iBT Sample Mock 1 (2026 format)",
  "TOEFL Writing Section Mock (2026 format) 1",
];

async function main() {
  let repaired = 0;
  let alreadyOk = 0;
  for (const title of TITLES) {
    const mock = await db.mockTest.findFirst({ where: { title } });
    if (!mock) {
      console.log(`[fix] "${title}" not present — nothing to do`);
      continue;
    }
    const sections = await db.mockTestSection.findMany({ where: { mockTestId: mock.id } });
    for (const section of sections) {
      const questions = await db.mockTestQuestion.findMany({
        where: { sectionId: section.id, type: "SENTENCE_RECONSTRUCTION" },
        orderBy: { order: "asc" },
      });
      for (const question of questions) {
        const payload = JSON.parse(question.payload) as { answer?: string };
        const target = payload.answer;
        if (!target) {
          console.warn(`[fix] ${title} #${question.order}: payload.answer missing — left untouched`);
          continue;
        }
        const current = question.answer ? (JSON.parse(question.answer) as { answer?: string }) : null;
        if (current?.answer === target) {
          alreadyOk += 1;
          continue;
        }
        await db.mockTestQuestion.update({
          where: { id: question.id },
          data: { answer: JSON.stringify({ text: target, answer: target }) },
        });
        repaired += 1;
      }
    }
  }
  console.log(`[fix] repaired ${repaired} SENTENCE_RECONSTRUCTION answer key(s); ${alreadyOk} already correct`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => db.$disconnect());
