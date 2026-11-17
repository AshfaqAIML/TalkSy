/**
 * PROMPT 36 — assessment reports.
 *
 * One report shape for every session (practice and graded alike):
 *   correct answers · incorrect answers · accuracy · topic-wise performance ·
 *   mistake categories · recommended lessons · previous attempts.
 */

import type { PracticeMode, SessionConfig } from "./types";
import { areaOf, AREA_LABELS, AREA_SHORT, type AssessmentArea, ASSESSMENT_AREAS } from "./areas";
import type { BankQuestion } from "./bank";

export interface ReportFeedback {
  correctAnswer: string;
  explanation: string;
  whyWrong?: string;
  grammarRule?: { title: string; rule: string };
  similarExample?: { english: string; translation: string };
  revisionLesson?: { slug: string; title?: string; reason: string };
}

export interface ReportItem {
  exerciseId: string;
  type: string;
  area: AssessmentArea;
  areaLabel: string;
  difficulty: string;
  chapterSlug: string;
  lessonSlug: string;
  topic: string;
  prompt: string;
  correct: boolean;
  invalid: boolean;
  unanswered: boolean;
  score: number;
  submitted: unknown;
  feedback: ReportFeedback;
}

export interface BucketRow {
  key: string;
  label: string;
  attempts: number;
  correct: number;
}

export interface MistakeCategoryRow {
  category: string;
  count: number;
  hint: string;
}

export interface RecommendedLessonRow {
  slug: string;
  title: string;
  reason: string;
  missCount: number;
}

export interface PreviousAttemptRow {
  id: string;
  scorePercent: number;
  passed: boolean | null;
  completedAt: string;
}

export interface PracticeReport {
  mode: PracticeMode;
  scorePercent: number;
  passed: boolean | null;
  passMarkPercent: number | null;
  total: number;
  correct: number;
  incorrect: number;
  invalidCount: number;
  unansweredCount: number;
  hintsUsed: number;
  items: ReportItem[];
  byArea: BucketRow[];
  byTopic: BucketRow[];
  byDifficulty: BucketRow[];
  mistakeCategories: MistakeCategoryRow[];
  recommendedLessons: RecommendedLessonRow[];
  /** Areas the pool could not measure (honest gaps, shown in the report). */
  missingAreas: AssessmentArea[];
  previousAttempts: PreviousAttemptRow[];
  recommendation: string;
}

export interface GradedInput {
  exerciseId: string;
  submitted: unknown;
  correct: boolean;
  invalid: boolean;
  score: number;
  /** True when the question was never answered (practice-style finish). */
  unanswered?: boolean;
}

export interface BuildReportInput {
  mode: PracticeMode;
  config: SessionConfig;
  pool: BankQuestion[];
  graded: GradedInput[];
  passed: boolean | null;
  passScore: number | null;
  hintsUsed: number;
  previousAttempts: PreviousAttemptRow[];
  /** Lesson titles for recommended lessons (programme lesson slug → title). */
  lessonTitles: Map<string, string>;
}

function bucketize(
  items: ReportItem[],
  keyOf: (item: ReportItem) => string | null,
  labelOf: (key: string) => string,
): BucketRow[] {
  const map = new Map<string, { attempts: number; correct: number }>();
  for (const item of items) {
    const key = keyOf(item);
    if (key === null) continue;
    const entry = map.get(key) ?? { attempts: 0, correct: 0 };
    entry.attempts += 1;
    if (item.correct) entry.correct += 1;
    map.set(key, entry);
  }
  return [...map.entries()]
    .map(([key, v]) => ({ key, label: labelOf(key), ...v }))
    .sort((a, b) => b.attempts - a.attempts || a.label.localeCompare(b.label));
}

/** Build the full report payload for one completed session. */
export function buildReport(input: BuildReportInput): PracticeReport {
  const { mode, pool, graded, passScore, hintsUsed, previousAttempts } = input;
  const poolById = new Map(pool.map((q) => [q.id, q]));
  const gradedById = new Map(graded.map((g) => [g.exerciseId, g]));

  const items: ReportItem[] = pool.map((q) => {
    const result = gradedById.get(q.id);
    const area = areaOf({ type: q.exercise.type, skill: q.exercise.skill });
    const feedback = (q.exercise as { feedback?: unknown }).feedback as
      | ReportFeedback
      | undefined;
    return {
      exerciseId: q.id,
      type: q.exercise.type,
      area,
      areaLabel: AREA_LABELS[area],
      difficulty: q.exercise.difficulty,
      chapterSlug: q.chapterSlug,
      lessonSlug: q.lessonSlug,
      topic: q.topic,
      prompt: q.exercise.prompt,
      correct: result?.correct ?? false,
      invalid: result?.invalid ?? false,
      unanswered: result?.unanswered ?? result === undefined,
      score: result?.score ?? 0,
      submitted: result?.submitted ?? null,
      feedback: {
        correctAnswer: feedback?.correctAnswer ?? "",
        explanation: feedback?.explanation ?? "",
        whyWrong: feedback?.whyWrong,
        grammarRule: feedback?.grammarRule,
        similarExample: feedback?.similarExample,
        revisionLesson:
          feedback?.revisionLesson && feedback.revisionLesson.slug
            ? {
                slug: feedback.revisionLesson.slug,
                title:
                  feedback.revisionLesson.title ??
                  input.lessonTitles.get(feedback.revisionLesson.slug) ??
                  feedback.revisionLesson.slug,
                reason: feedback.revisionLesson.reason,
              }
            : undefined,
      },
    };
  });

  const total = items.length;
  const correct = items.filter((i) => i.correct).length;
  const invalidCount = items.filter((i) => i.invalid).length;
  const unansweredCount = items.filter((i) => i.unanswered).length;
  const incorrect = total - correct;
  const scorePercent = total === 0 ? 0 : Math.round((correct / total) * 100);
  const passMarkPercent = passScore === null ? null : Math.round(passScore * 100);
  const passed = input.passed;

  // Topic-wise / area-wise / difficulty-wise performance.
  const byArea = bucketize(
    items,
    (i) => i.area,
    (key) => AREA_SHORT[key as AssessmentArea] ?? key,
  );
  const byTopic = bucketize(items, (i) => i.topic || null, (key) => key);
  const byDifficulty = bucketize(items, (i) => i.difficulty, (key) => key);

  // Mistake categories: why answers went wrong, in learner language.
  const mistakeCategories: MistakeCategoryRow[] = [];
  const wrongItems = items.filter((i) => !i.correct);
  const invalidItems = wrongItems.filter((i) => i.invalid);
  const unansweredItems = wrongItems.filter((i) => i.unanswered);
  const plainWrong = wrongItems.filter((i) => !i.invalid && !i.unanswered);
  if (invalidItems.length > 0) {
    mistakeCategories.push({
      category: "Answer in the wrong format",
      count: invalidItems.length,
      hint: "The answer could not be read — check the format the question asks for.",
    });
  }
  if (unansweredItems.length > 0) {
    mistakeCategories.push({
      category: "Not answered",
      count: unansweredItems.length,
      hint: "Unanswered questions count as incorrect — attempt everything.",
    });
  }
  for (const area of ASSESSMENT_AREAS) {
    const count = plainWrong.filter((i) => i.area === area).length;
    if (count > 0) {
      mistakeCategories.push({
        category: `${AREA_LABELS[area]} errors`,
        count,
        hint: `Wrong answers in ${AREA_SHORT[area].toLowerCase()} — revise the linked lessons below.`,
      });
    }
  }

  // Recommended lessons: where to go back to, ranked by misses.
  const lessonMap = new Map<string, { missCount: number; reason: string; title: string }>();
  for (const item of wrongItems) {
    const revision = item.feedback.revisionLesson;
    const slug = revision?.slug ?? item.lessonSlug;
    const title =
      revision?.title ??
      input.lessonTitles.get(slug) ??
      lessonMap.get(slug)?.title ??
      slug;
    const reason =
      revision?.reason ??
      `You missed ${item.topic || "this topic"} questions from this lesson's chapter.`;
    const entry = lessonMap.get(slug) ?? { missCount: 0, reason, title };
    entry.missCount += 1;
    lessonMap.set(slug, entry);
  }
  const recommendedLessons: RecommendedLessonRow[] = [...lessonMap.entries()]
    .map(([slug, v]) => ({
      slug,
      title: v.title,
      reason: v.reason,
      missCount: v.missCount,
    }))
    .sort((a, b) => b.missCount - a.missCount);

  // Honest gaps: areas this session could not measure.
  const missingAreas = ASSESSMENT_AREAS.filter(
    (a) => !items.some((i) => i.area === a),
  );

  // Human recommendation line.
  const weakAreas = byArea
    .filter((row) => row.correct < row.attempts)
    .sort((a, b) => a.correct / a.attempts - b.correct / b.attempts)
    .slice(0, 2)
    .map((row) => row.label.toLowerCase());
  let recommendation: string;
  if (total === 0) {
    recommendation = "No questions were drawn for this session.";
  } else if (passed === true) {
    recommendation =
      incorrect === 0
        ? "Perfect score — every learning objective of this scope is demonstrated."
        : `You passed with ${scorePercent}%. Review the ${incorrect} question${incorrect === 1 ? "" : "s"} you missed${weakAreas.length ? ` (especially ${weakAreas.join(" and ")})` : ""}, then move on.`;
  } else if (passed === false) {
    recommendation =
      passMarkPercent !== null
        ? `You scored ${scorePercent}% against a ${passMarkPercent}% pass mark. Work through the recommended lessons below, then retake — this is exactly how the material sticks.`
        : `You scored ${scorePercent}%. Work through the recommended lessons below and try again.`;
  } else {
    recommendation =
      correct === total
        ? `All ${total} answers correct — consider a harder mode or the next chapter.`
        : `${correct} of ${total} correct (${scorePercent}%)${weakAreas.length ? `. Watch ${weakAreas.join(" and ")} — the recommended lessons below target them` : ""}. Every attempt is already saved to your history.`;
  }

  return {
    mode,
    scorePercent,
    passed,
    passMarkPercent,
    total,
    correct,
    incorrect,
    invalidCount,
    unansweredCount,
    hintsUsed,
    items,
    byArea,
    byTopic,
    byDifficulty,
    mistakeCategories,
    recommendedLessons,
    missingAreas,
    previousAttempts,
    recommendation,
  };
}
