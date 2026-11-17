/**
 * Examination content governance & QA validator (PROMPT 55).
 *
 * Runs the full governance battery against the database in DATABASE_URL
 * (defaults to the dev database):
 *
 *   1. the question validation engine — all eight mandated categories;
 *   2. the content registry — every entity type must resolve;
 *   3. course completeness — readiness for every academy course;
 *   4. the ten mandated analytics metrics.
 *
 * Exit code 1 when any BLOCKING validation issue is found; warnings are
 * reported but do not fail the run (they are surfaced on the dashboard).
 *
 *   bun run validate:examgov
 *   DATABASE_URL=file:./db/test.db bun run validate:examgov
 */

import { PrismaClient } from "@prisma/client";
import { runQuestionValidation } from "../src/lib/exams/governance/validate";
import { queryGovernanceRegistry } from "../src/lib/exams/governance/registry";
import { buildCourseReadiness } from "../src/lib/exams/governance/completeness";
import { getGovernanceAnalytics } from "../src/lib/exams/governance/analytics";
import {
  VALIDATION_CATEGORY_LABELS,
  GOVERNANCE_ENTITY_LABELS,
  GOVERNANCE_STATUSES,
  GOVERNANCE_STATUS_LABELS,
  type ValidationCategory,
} from "../src/lib/exams/governance/types";

const db = new PrismaClient();

async function main() {
  console.log("TalkSy examination content governance validator (PROMPT 55)\n");

  // --- 1. Question validation ---------------------------------------------
  const report = await runQuestionValidation();
  console.log("== Question validation (eight categories) ==");
  console.log(
    `   checked: ${report.checked.mockQuestions} mock questions · ${report.checked.cmsExercises} lesson exercises · ${report.checked.lessons} lessons · ${report.checked.audioAssets} audio assets · ${report.checked.specs} specs · ${report.checked.practiceLibraryItems} practice-library items (machine-validated upstream)`,
  );
  for (const category of Object.keys(VALIDATION_CATEGORY_LABELS) as ValidationCategory[]) {
    const count = report.byCategory[category];
    console.log(`   ${count === 0 ? "✔" : "✖"} ${VALIDATION_CATEGORY_LABELS[category]}: ${count}`);
  }
  console.log(`   → ${report.blockingCount} blocking, ${report.warningCount} warning\n`);

  const blocking = report.issues.filter((issue) => issue.severity === "blocking");
  for (const issue of blocking.slice(0, 30)) {
    console.log(`   [BLOCKING] ${issue.category} · ${issue.title}`);
    console.log(`              ${issue.evidence}`);
  }
  if (blocking.length > 30) console.log(`   … +${blocking.length - 30} more blocking issues`);

  // --- 2. Content registry --------------------------------------------------
  const registry = await queryGovernanceRegistry({ pageSize: 1 });
  console.log("== Content registry ==");
  for (const [type, count] of Object.entries(registry.countsByType)) {
    console.log(`   ${GOVERNANCE_ENTITY_LABELS[type as keyof typeof GOVERNANCE_ENTITY_LABELS]}: ${count}`);
  }
  const pipeline = GOVERNANCE_STATUSES.map(
    (status) => `${GOVERNANCE_STATUS_LABELS[status]} ${registry.countsByStatus[status]}`,
  ).join(" · ");
  console.log(`   pipeline: ${pipeline}\n`);

  // --- 3. Course completeness ----------------------------------------------
  console.log("== Course completeness ==");
  const readiness = await buildCourseReadiness();
  for (const course of readiness) {
    console.log(
      `   ${course.readiness === "ready" ? "✔" : course.readiness === "needs-attention" ? "!" : "✖"} ${course.courseTitle} — ${course.readiness} (${course.lessons.complete}/${course.lessons.total} lessons complete, ${course.lessons.placeholder} placeholder)`,
    );
    for (const dimension of course.dimensions.filter((d) => !d.pass)) {
      console.log(`        ✖ ${dimension.label}: ${dimension.detail}`);
    }
  }
  console.log("");

  // --- 4. Analytics ---------------------------------------------------------
  console.log("== Content analytics (ten mandated metrics) ==");
  const analytics = await getGovernanceAnalytics({ readiness, validation: report });
  console.log(`   lessons: ${analytics.lessons.total} total · ${analytics.lessons.complete} complete · ${analytics.lessons.partial} partial · ${analytics.lessons.placeholder} placeholder`);
  console.log(`   pending reviews: ${analytics.pendingReviews}`);
  console.log(`   published questions: ${analytics.publishedQuestions.total} (${analytics.publishedQuestions.mockQuestions} mock + ${analytics.publishedQuestions.cmsExercises} lesson exercises)`);
  console.log(`   missing answer keys: ${analytics.missingAnswerKeys}`);
  console.log(`   outdated content: ${analytics.outdatedContent.total} (mocks on retired specs ${analytics.outdatedContent.mocksOnRetiredSpecs} · retired-type items ${analytics.outdatedContent.questionsWithRetiredTypes} · specs past review date ${analytics.outdatedContent.specsPastReviewDate})`);
  console.log(`   audio without transcripts: ${analytics.audioWithoutTranscripts}/${analytics.audioTotal}`);
  console.log(`   mock examinations: ${analytics.mockExaminations.total} (${analytics.mockExaminations.published} published · ${analytics.mockExaminations.draft} draft · ${analytics.mockExaminations.archived} archived)`);
  console.log(`   learner error patterns: ${analytics.learnerErrorPatterns.slice(0, 5).map((p) => `${p.label} ×${p.occurrences}`).join("; ") || "none recorded yet"}`);
  console.log(`   live but never human-approved: ${analytics.liveWithoutHumanApproval}\n`);

  // --- Verdict ---------------------------------------------------------------
  if (report.blockingCount > 0) {
    console.log(`FAILED: ${report.blockingCount} blocking issue(s) must be fixed before answer-validation sign-offs can pass.`);
    process.exitCode = 1;
  } else {
    console.log("OK: no blocking issues — the governance pipeline can sign off answer validation.");
  }
}

main()
  .catch((error) => {
    console.error("governance validator failed:", error);
    process.exitCode = 1;
  })
  .finally(() => db.$disconnect());
