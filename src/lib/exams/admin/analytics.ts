/**
 * Examination admin analytics.
 *
 * Every number is a real database aggregate — nothing estimated, cached or
 * hardcoded; metrics that cannot be computed are null (the UI shows "—").
 *
 * Dashboard contract:
 *   - Total published lessons (CMS lessons in exam collections, live)
 *   - Total questions (by review state) + mock examinations (by status)
 *   - Content awaiting review (draft/in-review/approved questions, draft specs)
 *   - Outdated content (mocks on retired specs, questions whose type left
 *     the active catalog, specs not reviewed in 12 months)
 *   - Most frequently attempted sections (attempt volume + distinct learners)
 *   - Average learner performance (mean autoScore/points, overall, by
 *     section and by exam)
 *   - Common examination weaknesses (skill tags on wrong answers)
 */

import { db } from "@/lib/db";
import { getActiveSpec } from "../specs";
import { ASSEMBLED_SET_KINDS } from "../types";
import { COLLECTIONS } from "./collections";
import { QUESTION_REVIEW_STATES, type ExamAdminStatsDto, type QuestionReviewState } from "./types";

const ASSEMBLED_KINDS = ASSEMBLED_SET_KINDS;
const SPEC_STALE_MONTHS = 12;

export async function getExamAdminStats(): Promise<ExamAdminStatsDto> {
  const staleCutoff = new Date();
  staleCutoff.setMonth(staleCutoff.getMonth() - SPEC_STALE_MONTHS);

  // --- Content totals -----------------------------------------------------
  const [liveExamLessons, questionsByStatusRows, mocksByStatusRows, rubricCount] =
    await Promise.all([
      // Live lessons in exam-collection courses.
      db.cmsLesson.count({
        where: {
          live: true,
          unit: { module: { course: { slug: { in: [...new Set(COLLECTIONS.flatMap((c) => c.courseSlugs))] } } } },
        },
      }),
      db.mockTestQuestion.groupBy({
        by: ["contentStatus"],
        _count: { _all: true },
        where: { section: { mockTest: { kind: { notIn: ASSEMBLED_KINDS as unknown as string[] } } } },
      }),
      db.mockTest.groupBy({
        by: ["status"],
        _count: { _all: true },
        where: { kind: { notIn: ASSEMBLED_KINDS as unknown as string[] } },
      }),
      db.examRubric.count(),
    ]);

  const questionsByStatus = Object.fromEntries(
    QUESTION_REVIEW_STATES.map((state) => [state, 0]),
  ) as Record<QuestionReviewState, number>;
  let questionsTotal = 0;
  for (const row of questionsByStatusRows) {
    questionsTotal += row._count._all;
    if ((QUESTION_REVIEW_STATES as readonly string[]).includes(row.contentStatus)) {
      questionsByStatus[row.contentStatus as QuestionReviewState] = row._count._all;
    }
  }

  const mocksByStatus: Record<string, number> = {};
  let curatedMockCount = 0;
  for (const row of mocksByStatusRows) {
    mocksByStatus[row.status] = row._count._all;
    curatedMockCount += row._count._all;
  }

  // Lessons per collection (for the collection cards).
  const lessonsByCollection: ExamAdminStatsDto["content"]["lessonsByCollection"] = [];
  for (const collection of COLLECTIONS) {
    const count = collection.courseSlugs.length
      ? await db.cmsLesson.count({
          where: {
            live: true,
            unit: { module: { course: { slug: { in: collection.courseSlugs } } } },
          },
        })
      : 0;
    lessonsByCollection.push({ collection: collection.name, liveLessons: count });
  }

  // --- Review queue -------------------------------------------------------
  const draftSpecs = await db.testSpecification.count({ where: { status: "draft" } });
  const questionsAwaiting = questionsByStatus.draft;
  const questionsInReview = questionsByStatus["in-review"];
  const questionsApproved = questionsByStatus.approved;

  // --- Outdated content ---------------------------------------------------
  const activeSpecs = await Promise.all(
    (
      [
        { examKey: "IELTS", variant: "ACADEMIC" },
        { examKey: "IELTS", variant: "GENERAL_TRAINING" },
        { examKey: "TOEFL_IBT", variant: "STANDARD" },
      ] as const
    ).map((combo) => getActiveSpec(combo.examKey, combo.variant)),
  );
  const present = activeSpecs.filter((spec) => spec !== null);
  const activeSpecIds = new Set(present.map((spec) => spec.id));

  // Mocks pinned to a spec that is no longer active (draft mocks on old
  // versions are fine; published ones are the outdated surface).
  const curatedMocks = await db.mockTest.findMany({
    where: { kind: { notIn: ASSEMBLED_KINDS as unknown as string[] } },
    include: { spec: { select: { version: true, status: true } } },
    orderBy: { title: "asc" },
  });
  const mocksOnRetiredSpecs = curatedMocks
    .filter((mock) => mock.status === "published" && !activeSpecIds.has(mock.specId))
    .map((mock) => ({
      id: mock.id,
      title: mock.title,
      specVersion: mock.spec.version,
      status: mock.status,
    }));

  // Questions whose type is no longer in the active catalog for their exam.
  let questionsWithRetiredTypes = 0;
  for (const spec of present) {
    const catalogTypes = spec.taskTypes.map((task) => task.type);
    questionsWithRetiredTypes += await db.mockTestQuestion.count({
      where: {
        type: { notIn: catalogTypes },
        contentStatus: "published",
        section: {
          mockTest: {
            examKey: spec.examKey,
            variant: spec.variant,
            kind: { notIn: ASSEMBLED_KINDS as unknown as string[] },
          },
        },
      },
    });
  }

  const staleSpecs = await db.testSpecification.findMany({
    where: { status: "active", lastReviewedAt: { lt: staleCutoff } },
    orderBy: { lastReviewedAt: "asc" },
    select: { id: true, name: true, version: true, lastReviewedAt: true },
  });

  // --- Sections & performance --------------------------------------------
  // Attempt volume per section key: every graded response is one question
  // attempt inside a mock attempt.
  const responseRows = await db.mockTestResponse.findMany({
    where: { attempt: { status: { in: ["submitted", "scored"] } } },
    select: {
      attempt: { select: { userId: true } },
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

  const sectionVolume = new Map<string, { attempts: number; learners: Set<string> }>();
  const sectionPerformance = new Map<string, { awarded: number; points: number; responses: number }>();
  const examPerformance = new Map<string, { awarded: number; points: number; responses: number }>();
  const weaknessCounts = new Map<string, { occurrences: number; sampleSection: string }>();

  let totalAwarded = 0;
  let totalPoints = 0;
  let totalResponses = 0;

  for (const row of responseRows) {
    const sectionKey = row.question.section.key;
    const examKey = row.question.section.mockTest.examKey;

    const volume = sectionVolume.get(sectionKey) ?? { attempts: 0, learners: new Set<string>() };
    volume.attempts += 1;
    volume.learners.add(row.attempt.userId);
    sectionVolume.set(sectionKey, volume);

    // Objective performance only (constructed responses carry no autoScore).
    if (row.autoScore !== null && row.question.points > 0) {
      totalAwarded += row.autoScore;
      totalPoints += row.question.points;
      totalResponses += 1;

      const sectionPerf = sectionPerformance.get(sectionKey) ?? { awarded: 0, points: 0, responses: 0 };
      sectionPerf.awarded += row.autoScore;
      sectionPerf.points += row.question.points;
      sectionPerf.responses += 1;
      sectionPerformance.set(sectionKey, sectionPerf);

      const examPerf = examPerformance.get(examKey) ?? { awarded: 0, points: 0, responses: 0 };
      examPerf.awarded += row.autoScore;
      examPerf.points += row.question.points;
      examPerf.responses += 1;
      examPerformance.set(examKey, examPerf);

      // Weaknesses: skill tags on wrong answers.
      if (row.autoScore < row.question.points) {
        try {
          const skills = JSON.parse(row.question.skills) as string[];
          for (const tag of skills) {
            const entry = weaknessCounts.get(tag) ?? { occurrences: 0, sampleSection: sectionKey };
            entry.occurrences += 1;
            weaknessCounts.set(tag, entry);
          }
        } catch {
          // skills is optional metadata — skip malformed rows.
        }
      }
    }
  }

  const distinctAttemptCount = await db.mockTestAttempt.count({
    where: { status: { in: ["submitted", "scored"] } },
  });

  const sections = [...sectionVolume.entries()]
    .map(([section, value]) => ({
      section,
      attempts: value.attempts,
      distinctLearners: value.learners.size,
    }))
    .sort((a, b) => b.attempts - a.attempts);

  const averageAccuracy = totalResponses > 0 ? totalAwarded / totalPoints : null;

  const bySection = [...sectionPerformance.entries()]
    .map(([section, value]) => ({
      section,
      accuracy: value.responses > 0 ? value.awarded / value.points : null,
      responses: value.responses,
    }))
    .sort((a, b) => b.responses - a.responses);

  const byExam = [...examPerformance.entries()]
    .map(([exam, value]) => ({
      exam,
      accuracy: value.responses > 0 ? value.awarded / value.points : null,
      responses: value.responses,
    }))
    .sort((a, b) => b.responses - a.responses);

  const weaknesses = [...weaknessCounts.entries()]
    .map(([tag, value]) => ({ tag, occurrences: value.occurrences, sampleSection: value.sampleSection }))
    .sort((a, b) => b.occurrences - a.occurrences)
    .slice(0, 8);

  return {
    content: {
      publishedLessons: liveExamLessons,
      lessonsByCollection,
      questionsByStatus,
      questionsTotal,
      mocksByStatus,
      curatedMockCount,
      rubrics: rubricCount,
    },
    review: {
      questionsAwaiting,
      questionsInReview,
      questionsApproved,
      draftSpecs,
      awaitingTotal: questionsAwaiting + questionsInReview + questionsApproved + draftSpecs,
    },
    outdated: {
      mocksOnRetiredSpecs,
      questionsWithRetiredTypes,
      specsStaleReview: staleSpecs.map((spec) => ({
        id: spec.id,
        name: spec.name,
        version: spec.version,
        lastReviewedAt: spec.lastReviewedAt.toISOString(),
      })),
      outdatedTotal: mocksOnRetiredSpecs.length + questionsWithRetiredTypes + staleSpecs.length,
    },
    sections,
    performance: {
      attempts: distinctAttemptCount,
      responses: responseRows.length,
      averageAccuracy,
      bySection,
      byExam,
    },
    weaknesses,
    generatedAt: new Date().toISOString(),
  };
}
