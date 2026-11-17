/**
 * Revision scheduler — plans WHAT to revise and WHEN, transparently.
 *
 * Every item is scored from the five scheduling factors required by the
 * product spec:
 *   1. previous performance  (best verified score / accuracy for the item)
 *   2. number of attempts    (practised-but-not-passing rises in priority)
 *   3. time since last revision
 *   4. difficulty            (harder content gets a small priority boost)
 *   5. self-reported confidence (1-5, learner's own rating)
 *
 * The urgency formula and the reason string are derived from the SAME
 * numbers, so the explanation always matches the schedule. Everything is
 * deterministic: same history → same plan.
 */

import { getReadingTextById } from "@/data/reading";
import { getListeningActivityById } from "@/data/listening";
import { speakingActivities } from "@/data/speaking";
import { writingAssignments } from "@/data/writing";
import { getLesson } from "@/data/curriculum";
import { courses, type ProgressFacts, type RevisionItem, type RevisionPlan } from "@/data/progress";

const DAY_MS = 86_400_000;

function daysSince(date: Date | null | undefined, now: Date): number | null {
  return date ? Math.floor((now.getTime() - date.getTime()) / DAY_MS) : null;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * Urgency 0-100 from the scheduling factors. Weights (documented contract):
 *   performance gap 45 · recency 30 · confidence gap 25 (+ bonuses)
 */
function urgencyScore(input: {
  performance: number | null; // 0-100, higher = better
  daysSince: number | null;
  staleAfterDays: number;
  confidence: number | null; // 1-5
  attempts: number;
  stillPassing: boolean; // false = not yet passed/completed
  difficulty: string | null;
}): number {
  const performanceGap = input.performance === null ? 35 : clamp(100 - input.performance, 0, 100);
  const recency =
    input.daysSince === null ? 1 : clamp(input.daysSince / input.staleAfterDays, 0, 1);
  const confidenceGap = input.confidence === null ? 0.6 : (5 - input.confidence) / 4;
  let score = performanceGap * 0.45 + recency * 30 + confidenceGap * 25;
  if (!input.stillPassing && input.attempts >= 2) score += 10; // repeated attempts, still not passing
  if (input.difficulty === "hard" || input.difficulty === "challenge") score += 5;
  if (input.difficulty === "advanced" || input.difficulty === "intermediate") score += 3;
  return Math.round(clamp(score, 0, 100));
}

function describeFactors(factors: {
  performance: number | null;
  attempts: number;
  daysSince: number | null;
  confidence: number | null;
  difficulty: string | null;
}): string[] {
  const parts: string[] = [];
  if (factors.performance !== null) parts.push(`best ${factors.performance}%`);
  if (factors.attempts > 0) parts.push(`${factors.attempts} attempt${factors.attempts === 1 ? "" : "s"}`);
  if (factors.daysSince !== null) {
    parts.push(factors.daysSince === 0 ? "practised today" : `${factors.daysSince} day${factors.daysSince === 1 ? "" : "s"} since last practice`);
  }
  if (factors.confidence !== null) parts.push(`confidence ${factors.confidence}/5`);
  if (factors.difficulty) parts.push(factors.difficulty);
  return parts;
}

function makeItem(input: {
  kind: RevisionItem["kind"];
  id: string;
  title: string;
  href: string;
  status: "due" | "soon";
  urgency: number;
  reason: string;
  factors: RevisionItem["factors"];
}): RevisionItem {
  return { ...input };
}

// ---------------------------------------------------------------------------

export function buildRevisionPlan(facts: ProgressFacts): RevisionPlan {
  const now = facts.now;
  const due: RevisionItem[] = [];
  const soon: RevisionItem[] = [];

  // --- 1. Vocabulary (SRS-driven) -------------------------------------------
  const dueWords = facts.vocabWords.filter((w) => w.dueAt !== null && w.dueAt.getTime() <= now.getTime());
  if (dueWords.length > 0) {
    const overdue = dueWords.filter((w) => w.dueAt!.getTime() <= now.getTime() - DAY_MS).length;
    due.push(
      makeItem({
        kind: "vocabulary",
        id: "vocabulary:due",
        title: `Review ${dueWords.length} due word${dueWords.length === 1 ? "" : "s"}`,
        href: "#/vocabulary/today",
        status: "due",
        urgency: 92,
        reason:
          overdue > 0
            ? `Spaced repetition: ${dueWords.length} words are due today and ${overdue} are already overdue — reviewing now keeps them in long-term memory.`
            : `Spaced repetition: ${dueWords.length} words are due today — reviewing now keeps them in long-term memory.`,
        factors: {
          performance: null,
          attempts: facts.vocabGradedReviews.length,
          daysSince: daysSince(facts.vocabWords.find((w) => w.lastReviewedAt)?.lastReviewedAt, now),
          confidence: null,
          dueAt: dueWords[0]?.dueAt?.toISOString() ?? null,
          difficulty: null,
        },
      }),
    );
  }

  // Difficult words (flagged or lapsed) that are not yet due → "soon".
  const difficultSoon = facts.vocabWords
    .filter(
      (w) =>
        (w.isDifficult || w.lapses >= 2) &&
        !(w.dueAt !== null && w.dueAt.getTime() <= now.getTime()),
    )
    .sort((a, b) => b.lapses - a.lapses)
    .slice(0, 3);
  for (const word of difficultSoon) {
    const since = daysSince(word.lastReviewedAt, now);
    soon.push(
      makeItem({
        kind: "vocabulary",
        id: `vocabulary:${word.wordId}`,
        title: `Extra practice: “${word.term}”`,
        href: "#/vocabulary/flashcards",
        status: "soon",
        urgency: clamp(40 + word.lapses * 10, 0, 100),
        reason: `You marked “${word.term}” as difficult${word.lapses > 0 ? ` and lapsed ${word.lapses} time${word.lapses === 1 ? "" : "s"}` : ""} — a little extra practice between scheduled reviews helps.`,
        factors: {
          performance: word.totalReviews > 0 ? Math.round((word.correctReviews / word.totalReviews) * 100) : null,
          attempts: word.totalReviews,
          daysSince: since,
          confidence: null,
          dueAt: word.dueAt?.toISOString() ?? null,
          difficulty: null,
        },
      }),
    );
  }

  // --- 2. Grammar lessons ------------------------------------------------------
  const grammarSlugs = new Set(
    courses.filter((c) => c.levelId === "grammar-core").flatMap((c) => c.lessonSlugs),
  );
  for (const lesson of facts.lessons) {
    if (!grammarSlugs.has(lesson.slug)) continue;
    const attemptsForLesson = facts.exerciseAttempts.filter((a) => a.lessonSlug === lesson.slug);
    const bestAssessment = facts.assessmentResults
      .filter((r) => r.lessonSlug === lesson.slug)
      .reduce((best, r) => Math.max(best, r.score), 0);
    const lessonAccuracy =
      attemptsForLesson.length > 0
        ? Math.round(
            (attemptsForLesson.filter((a) => a.isCorrect).length / attemptsForLesson.length) * 100,
          )
        : null;
    const performance = bestAssessment > 0 ? Math.round(bestAssessment * 100) : lessonAccuracy;
    const lastActivity = lastDate(
      attemptsForLesson[attemptsForLesson.length - 1]?.createdAt ?? null,
      lesson.completedAt,
      lesson.updatedAt,
    );
    const since = daysSince(lastActivity, now);
    if (since === null || since < 7) continue;
    const confidence = facts.confidence[lesson.slug] ?? null;
    const needsWork =
      (performance !== null && performance < 85) || (confidence !== null && confidence <= 2);
    if (!needsWork && since < 14) continue; // strong + recent: no item
    const difficulty = commonDifficulty(attemptsForLesson.map((a) => a.difficulty));
    const urgency = urgencyScore({
      performance,
      daysSince: since,
      staleAfterDays: 21,
      confidence,
      attempts: attemptsForLesson.length,
      stillPassing: true,
      difficulty,
    });
    const factors = {
      performance,
      attempts: attemptsForLesson.length,
      daysSince: since,
      confidence,
      dueAt: null,
      difficulty,
    };
    const summary = describeFactors(factors).join(" · ");
    const item = makeItem({
      kind: "grammar-lesson",
      id: `grammar-lesson:${lesson.slug}`,
      title: `Revise: ${lesson.title}`,
      href: `#/lesson/${lesson.slug}`,
      status: needsWork ? "due" : "soon",
      urgency: needsWork ? Math.max(urgency, 55) : Math.min(urgency, 54),
      reason: needsWork
        ? `${summary}. Revisiting this lesson now, while it is still fresh, costs far less effort than relearning it later.`
        : `${summary}. A short maintenance review keeps this grammar ready to use.`,
      factors,
    });
    (needsWork ? due : soon).push(item);
  }

  // --- 3. Reading texts ---------------------------------------------------------
  for (const row of facts.readingProgress) {
    const text = getReadingTextById(row.textId);
    const since = daysSince(row.updatedAt, now);
    if (row.status === "completed") {
      const performance = Math.round(row.bestRunScore * 100);
      if (performance >= 80 || since === null || since < 10) continue;
      const factors = {
        performance,
        attempts: facts.readingRunsPassed.filter((r) => r.textId === row.textId).length,
        daysSince: since,
        confidence: null,
        dueAt: null,
        difficulty: text?.level ?? null,
      };
      const urgency = urgencyScore({
        performance,
        daysSince: since,
        staleAfterDays: 30,
        confidence: null,
        attempts: factors.attempts,
        stillPassing: true,
        difficulty: text?.level ?? null,
      });
      soon.push(
        makeItem({
          kind: "reading-text",
          id: `reading-text:${row.textId}`,
          title: `Re-read: ${row.title}`,
          href: `#/reading/${text?.slug ?? ""}`,
          status: "soon",
          urgency: Math.min(urgency, 54),
          reason: `${describeFactors(factors).join(" · ")}. Your comprehension score on this text was ${performance}% — one more pass would consolidate it.`,
          factors,
        }),
      );
    } else if (since !== null && since >= 7) {
      due.push(
        makeItem({
          kind: "reading-text",
          id: `reading-text:${row.textId}`,
          title: `Finish reading: ${row.title}`,
          href: `#/reading/${text?.slug ?? ""}`,
          status: "due",
          urgency: 60,
          reason: `You started this text ${since} days ago but have not finished it — completing the comprehension check closes the loop on what you read.`,
          factors: {
            performance: null,
            attempts: 0,
            daysSince: since,
            confidence: null,
            dueAt: null,
            difficulty: text?.level ?? null,
          },
        }),
      );
    }
  }

  // --- 4. Listening activities ---------------------------------------------------
  for (const row of facts.listeningProgress) {
    const activity = getListeningActivityById(row.activityId);
    const since = daysSince(row.updatedAt, now);
    if (row.status !== "completed" && since !== null && since >= 7) {
      due.push(
        makeItem({
          kind: "listening-activity",
          id: `listening-activity:${row.activityId}`,
          title: `Finish listening: ${row.title}`,
          href: `#/listening/${activity?.slug ?? ""}`,
          status: "due",
          urgency: 58,
          reason: `You started this activity ${since} days ago — ${row.completedCount} of its exercises are already correct; finishing it locks in the skill.`,
          factors: {
            performance: null,
            attempts: facts.listeningAttempts.filter((a) => a.activityId === row.activityId).length,
            daysSince: since,
            confidence: null,
            dueAt: null,
            difficulty: activity?.stage ?? null,
          },
        }),
      );
    }
  }

  // --- 5. Speaking activities ------------------------------------------------------
  for (const row of facts.speakingProgress) {
    const activity = speakingActivities.find((a) => a.id === row.activityId);
    const since = daysSince(row.updatedAt, now);
    if (row.status !== "completed" && row.attemptsCount > 0 && since !== null && since >= 5) {
      due.push(
        makeItem({
          kind: "speaking-activity",
          id: `speaking-activity:${row.activityId}`,
          title: `Keep going: ${row.title}`,
          href: `#/speaking/activity/${activity?.slug ?? ""}`,
          status: "due",
          urgency: 62,
          reason: `You passed ${row.tasksPassedCount} of the tasks after ${row.attemptsCount} attempt${row.attemptsCount === 1 ? "" : "s"} — the remaining tasks are within reach while it is still fresh.`,
          factors: {
            performance: Math.round(row.bestScore * 100),
            attempts: row.attemptsCount,
            daysSince: since,
            confidence: null,
            dueAt: null,
            difficulty: row.tier,
          },
        }),
      );
    } else if (row.status === "completed" && since !== null && since >= 21) {
      soon.push(
        makeItem({
          kind: "speaking-activity",
          id: `speaking-activity:${row.activityId}`,
          title: `Keep warm: ${row.title}`,
          href: `#/speaking/activity/${activity?.slug ?? ""}`,
          status: "soon",
          urgency: 35,
          reason: `You completed this ${since} days ago. Speaking fades faster than other skills — an occasional re-run keeps it available.`,
          factors: {
            performance: Math.round(row.bestScore * 100),
            attempts: row.attemptsCount,
            daysSince: since,
            confidence: null,
            dueAt: null,
            difficulty: row.tier,
          },
        }),
      );
    }
  }

  // --- 6. Writing assignments --------------------------------------------------------
  for (const row of facts.writingProgress) {
    if (row.status === "completed" || row.submissionsCount === 0) continue;
    const assignment = writingAssignments.find((a) => a.id === row.assignmentId);
    const lastSubmission = facts.writingSubmissions
      .filter((s) => s.assignmentId === row.assignmentId)
      .pop();
    const since = daysSince(lastSubmission?.createdAt ?? row.updatedAt, now);
    const performance = lastSubmission
      ? Math.round(lastSubmission.overall)
      : Math.round(row.bestScore * 100);
    const factors = {
      performance,
      attempts: row.submissionsCount,
      daysSince: since,
      confidence: null,
      dueAt: null,
      difficulty: row.tier,
    };
    due.push(
      makeItem({
        kind: "writing-assignment",
        id: `writing-assignment:${row.assignmentId}`,
        title: `Revise with feedback: ${row.title}`,
        href: `#/writing/a/${assignment?.slug ?? ""}`,
        status: "due",
        urgency: urgencyScore({
          performance,
          daysSince: since,
          staleAfterDays: 14,
          confidence: null,
          attempts: row.submissionsCount,
          stillPassing: false,
          difficulty: row.tier,
        }),
        reason: `Your latest version scored ${performance}% against the rubric and structured feedback is waiting — one focused revision is the fastest way to lock in the lesson.`,
        factors,
      }),
    );
  }

  due.sort((a, b) => b.urgency - a.urgency);
  soon.sort((a, b) => b.urgency - a.urgency);

  // Confidence rating targets: completed lessons (curriculum + grammar).
  const confidenceLessons = facts.lessons
    .filter((l) => l.completedAt)
    .slice(0, 20)
    .map((l) => ({
      slug: l.slug,
      title: getLesson(l.slug)?.title ?? l.title,
      confidence: facts.confidence[l.slug] ?? null,
    }));

  return {
    due: due.slice(0, 8),
    soon: soon.slice(0, 8),
    counts: { due: due.length, soon: soon.length, vocabularyDue: dueWords.length },
    confidenceLessons,
  };
}

// ---------------------------------------------------------------------------

function lastDate(...dates: (Date | null | undefined)[]): Date | null {
  const valid = dates.filter((d): d is Date => d !== null && d !== undefined);
  return valid.length ? new Date(Math.max(...valid.map((d) => d.getTime()))) : null;
}

function commonDifficulty(values: string[]): string | null {
  if (values.length === 0) return null;
  const counts = new Map<string, number>();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
}
