/**
 * Content-sync-only script (no reference-data seeding).
 *
 * Run: bun scripts/sync-content.ts  (or: bun run db:sync)
 *
 * Re-syncs the relational content mirror from the TypeScript curriculum.
 * Use after editing content files; the seed script runs this too.
 */

import { db } from "../src/lib/db";
import { syncCurriculumContent } from "../src/server/modules/admin/content-sync";

syncCurriculumContent()
  .then((result) => {
    console.log(
      `Content sync complete: ${result.lessons} lessons · ${result.exercises} exercises · ` +
        `${result.vocabulary} vocabulary · ${result.assessments} assessments · ` +
        `${result.newVersions} new versions · ${result.durationMs}ms` +
        (result.retired.lessons.length || result.retired.exercises.length
          ? ` · retired: ${result.retired.lessons.length} lessons, ${result.retired.exercises.length} exercises`
          : "")
    );
  })
  .catch((err) => {
    console.error("Content sync failed:", err);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
