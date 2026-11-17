/**
 * Examination content governance — content analytics (PROMPT 55 §6).
 *
 * The ten mandated metrics, every number a real aggregate:
 *
 *    1. Total lessons            6. Missing answer keys
 *    2. Complete lessons         7. Outdated content
 *    3. Placeholder lessons      8. Audio without transcripts
 *    4. Pending reviews          9. Mock examinations
 *    5. Published questions     10. Learner error patterns
 *
 * Learner error patterns aggregate the richest per-question error data the
 * platform records: skill tags on wrongly-answered mock questions, the
 * reading/listening error taxonomies (spelling, traps, distractors,
 * inference, vocabulary, missed keywords…), TOEFL bank responses and the
 * PROMPT 52 evaluation weakness areas — most frequent first, each labelled
 * with the exam and section it came from.
 *
 * Nothing here is cached or estimated: metrics that cannot be computed are
 * zero only because the underlying rows do not exist.
 */

import { db } from "@/lib/db";
import { ASSEMBLED_SET_KINDS } from "../types";
import { buildGovernanceEntities } from "./registry";
import { runQuestionValidation } from "./validate";
import { buildCourseReadiness } from "./completeness";
import {
  GOVERNANCE_STATUSES,
  type CourseReadinessDto,
  type GovernanceAnalyticsDto,
  type GovernanceValidationReport,
  type LearnerErrorPatternDto,
} from "./types";

// ---------------------------------------------------------------------------
// Learner error patterns
// ---------------------------------------------------------------------------

const ERROR_TYPE_LABELS: Record<string, string> = {
  spelling: "Spelling errors in one-word answers",
  "word-limit": "Word-limit violations",
  trap: "Traps fallen for (reading)",
  distractor: "Distractors chosen (listening)",
  inference: "Inference mistakes",
  vocabulary: "Vocabulary gaps",
  missed: "Missed keywords",
  wrong: "Wrong answers (other)",
  unanswered: "Unanswered questions",
};

function skillLabel(tag: string): string {
  return `Skill gap — ${tag.replace(/[-_]/g, " ")}`;
}

async function collectLearnerErrorPatterns(): Promise<LearnerErrorPatternDto[]> {
  const counts = new Map<string, LearnerErrorPatternDto & { _exam: string | null }>();

  const bump = (entry: {
    pattern: string;
    label: string;
    exam: string | null;
    section: string | null;
  }) => {
    const existing = counts.get(entry.pattern);
    if (existing) {
      existing.occurrences += 1;
    } else {
      counts.set(entry.pattern, {
        pattern: entry.pattern,
        label: entry.label,
        occurrences: 1,
        exam: entry.exam,
        section: entry.section,
        _exam: entry.exam,
      });
    }
  };

  /** Set the absolute count for a taxonomy pattern (groupBy rows). */
  const setCount = (entry: {
    pattern: string;
    label: string;
    exam: string | null;
    section: string | null;
    count: number;
  }) => {
    counts.set(entry.pattern, {
      pattern: entry.pattern,
      label: entry.label,
      occurrences: entry.count,
      exam: entry.exam,
      section: entry.section,
      _exam: entry.exam,
    });
  };

  // 1. Skill tags on wrongly-answered mock questions (PROMPT 51 engine).
  const responses = await db.mockTestResponse.findMany({
    where: {
      attempt: { status: { in: ["submitted", "scored"] } },
      autoScore: { not: null },
    },
    select: {
      autoScore: true,
      question: {
        select: {
          points: true,
          skills: true,
          section: { select: { key: true, mockTest: { select: { examKey: true } } } },
        },
      },
    },
    take: 20000,
  });
  for (const response of responses) {
    if (response.autoScore === null || response.autoScore >= response.question.points) continue;
    let skills: string[] = [];
    try {
      skills = JSON.parse(response.question.skills) as string[];
    } catch {
      continue;
    }
    const exam = response.question.section.mockTest.examKey === "TOEFL_IBT" ? "TOEFL iBT" : "IELTS";
    for (const tag of skills.slice(0, 4)) {
      bump({
        pattern: `skill:${tag}`,
        label: skillLabel(tag),
        exam,
        section: response.question.section.key,
      });
    }
  }

  // 2. Reading bank error taxonomy.
  const readingErrors = await db.readingBankResponse.groupBy({
    by: ["errorType"],
    _count: { _all: true },
    where: { errorType: { not: "correct" } },
  });
  for (const row of readingErrors) {
    setCount({
      pattern: `reading-error:${row.errorType}`,
      label: ERROR_TYPE_LABELS[row.errorType] ?? `Reading error — ${row.errorType}`,
      exam: "IELTS",
      section: "reading",
      count: row._count._all,
    });
  }

  // 3. Listening bank error taxonomy.
  const listeningErrors = await db.listeningBankResponse.groupBy({
    by: ["errorType"],
    _count: { _all: true },
    where: { errorType: { not: "correct" } },
  });
  for (const row of listeningErrors) {
    setCount({
      pattern: `listening-error:${row.errorType}`,
      label: ERROR_TYPE_LABELS[row.errorType] ?? `Listening error — ${row.errorType}`,
      exam: "IELTS",
      section: "listening",
      count: row._count._all,
    });
  }

  // 4. TOEFL reading + listening taxonomies.
  const toeflReading = await db.toeflReadingBankResponse.groupBy({
    by: ["errorType"],
    _count: { _all: true },
    where: { errorType: { not: "correct" } },
  });
  for (const row of toeflReading) {
    setCount({
      pattern: `toefl-reading-error:${row.errorType}`,
      label: `${ERROR_TYPE_LABELS[row.errorType] ?? `Error — ${row.errorType}`} (TOEFL reading)`,
      exam: "TOEFL iBT",
      section: "reading",
      count: row._count._all,
    });
  }
  const toeflListening = await db.toeflListeningBankResponse.groupBy({
    by: ["errorType"],
    _count: { _all: true },
    where: { errorType: { not: "correct" } },
  });
  for (const row of toeflListening) {
    setCount({
      pattern: `toefl-listening-error:${row.errorType}`,
      label: `${ERROR_TYPE_LABELS[row.errorType] ?? `Error — ${row.errorType}`} (TOEFL listening)`,
      exam: "TOEFL iBT",
      section: "listening",
      count: row._count._all,
    });
  }

  // 5. PROMPT 52 evaluation weakness areas (writing/speaking).
  const evaluations = await db.mockEvaluation.findMany({
    select: { result: true, examKey: true, section: true },
    take: 2000,
  });
  for (const evaluation of evaluations) {
    try {
      const result = JSON.parse(evaluation.result) as {
        weaknesses?: Array<{ area?: string; label?: string }>;
      };
      for (const weakness of result.weaknesses ?? []) {
        const area = weakness.area ?? weakness.label;
        if (!area) continue;
        bump({
          pattern: `evaluation:${area}`,
          label: weakness.label ? `${weakness.label} (evaluator finding)` : `Evaluator finding — ${area.replace(/[-_]/g, " ")}`,
          exam: evaluation.examKey === "TOEFL_IBT" ? "TOEFL iBT" : "IELTS",
          section: evaluation.section,
        });
      }
    } catch {
      // malformed result rows are skipped
    }
  }

  return [...counts.values()]
    .map(({ _exam, ...rest }) => rest)
    .sort((a, b) => b.occurrences - a.occurrences)
    .slice(0, 12);
}

// ---------------------------------------------------------------------------
// The analytics aggregate
// ---------------------------------------------------------------------------

export async function getGovernanceAnalytics(inputs?: {
  readiness?: CourseReadinessDto[];
  validation?: GovernanceValidationReport;
}): Promise<GovernanceAnalyticsDto> {
  const [readiness, validation] = await Promise.all([
    inputs?.readiness ?? buildCourseReadiness(),
    inputs?.validation ?? runQuestionValidation(),
  ]);

  // 1–3. Lesson metrics from the completeness engine.
  const lessons = readiness.reduce(
    (acc, course) => ({
      total: acc.total + course.lessons.total,
      complete: acc.complete + course.lessons.complete,
      partial: acc.partial + course.lessons.partial,
      placeholder: acc.placeholder + course.lessons.placeholder,
    }),
    { total: 0, complete: 0, partial: 0, placeholder: 0 },
  );

  // 4. Pending reviews + status distribution across the whole registry.
  const { byType } = await buildGovernanceEntities();
  const statusDistribution = Object.fromEntries(
    GOVERNANCE_STATUSES.map((s) => [s, 0]),
  ) as Record<(typeof GOVERNANCE_STATUSES)[number], number>;
  let liveWithoutHumanApproval = 0;
  for (const type of Object.keys(byType) as Array<keyof typeof byType>) {
    for (const entity of byType[type]) {
      statusDistribution[entity.status] += 1;
      if (entity.live && !entity.humanApproved) liveWithoutHumanApproval += 1;
    }
  }
  const pendingReviews =
    statusDistribution["educational-review"] +
    statusDistribution["examination-review"] +
    statusDistribution["answer-validation"];

  // 5. Published questions by source.
  const [publishedMockQuestions, publishedCmsExercises] = await Promise.all([
    db.mockTestQuestion.count({
      where: {
        contentStatus: "published",
        section: { mockTest: { kind: { notIn: [...ASSEMBLED_SET_KINDS] } } },
      },
    }),
    db.cmsQuestion.count({ where: { status: "published" } }),
  ]);

  // 6. Missing answer keys (from the validation engine).
  const missingAnswerKeys = validation.byCategory["missing-answer-key"];

  // 7. Outdated content.
  const mocksOnRetiredSpecs = await db.mockTest.count({
    where: {
      status: "published",
      kind: { notIn: [...ASSEMBLED_SET_KINDS] },
      spec: { status: { not: "active" } },
    },
  });
  const questionsWithRetiredTypes = validation.byCategory["outdated-format"];
  const specsPastReviewDate = await db.testSpecification.count({
    where: { status: "active", reviewDueAt: { lt: new Date() } },
  });

  // 8. Audio without transcripts (uploaded assets; synthesized bank audio
  //    always carries its transcript by design).
  const [audioTotal, audioWithoutTranscripts] = await Promise.all([
    db.cmsAsset.count({ where: { kind: "audio" } }),
    db.cmsAsset.count({ where: { kind: "audio", transcript: "" } }),
  ]);

  // 9. Mock examinations.
  const mockRows = await db.mockTest.groupBy({
    by: ["status"],
    _count: { _all: true },
    where: { kind: { notIn: [...ASSEMBLED_SET_KINDS] } },
  });
  const mockExaminations = { total: 0, published: 0, draft: 0, archived: 0 };
  for (const row of mockRows) {
    mockExaminations.total += row._count._all;
    if (row.status === "published") mockExaminations.published = row._count._all;
    if (row.status === "draft") mockExaminations.draft = row._count._all;
    if (row.status === "archived") mockExaminations.archived = row._count._all;
  }

  // 10. Learner error patterns.
  const learnerErrorPatterns = await collectLearnerErrorPatterns();

  return {
    lessons,
    pendingReviews,
    statusDistribution,
    publishedQuestions: {
      mockQuestions: publishedMockQuestions,
      cmsExercises: publishedCmsExercises,
      total: publishedMockQuestions + publishedCmsExercises,
    },
    missingAnswerKeys,
    outdatedContent: {
      mocksOnRetiredSpecs,
      questionsWithRetiredTypes,
      specsPastReviewDate,
      total: mocksOnRetiredSpecs + questionsWithRetiredTypes + specsPastReviewDate,
    },
    audioWithoutTranscripts,
    audioTotal,
    mockExaminations,
    learnerErrorPatterns,
    liveWithoutHumanApproval,
    generatedAt: new Date().toISOString(),
  };
}
