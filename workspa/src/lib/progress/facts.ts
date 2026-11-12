/**
 * Facts engine — the real progress engine.
 *
 * One function collects EVERY verified learner action from the database and
 * derives the whole progression snapshot:
 *
 *   - learning points (deterministic replay of POINT_RULES over history,
 *     with per-day caps and once-per-subject awards — idempotent by
 *     construction, so points can never drift or be farmed by re-opening)
 *   - daily activity, streaks (descriptive, never punitive)
 *   - weekly series for the analytics charts
 *
 * INTEGRITY: only graded answers, passed runs, submissions and completions
 * become events. Opening content writes nothing, so nothing can be derived.
 */

import { db } from "@/lib/db";
import { getLesson } from "@/data/curriculum";
import { getVocabWord } from "@/data/vocabulary";
import { getReadingTextById } from "@/data/reading";
import { getListeningActivityById } from "@/data/listening";
import { speakingActivities, getConversationScenario } from "@/data/speaking";
import { MATCH_PASS_SCORE, OPEN_PASS_SCORE } from "@/lib/speaking/feedback";
import { writingAssignments } from "@/data/writing";
import { splitSentencesStrict } from "@/lib/writing/analyze";
import {
  POINT_RULES,
  type DailyActivity,
  type DerivedEvent,
  type ProgressFacts,
  type ProgressSkill,
  type WeeklyBucket,
} from "@/data/progress";

// ---------------------------------------------------------------------------
// Small utilities
// ---------------------------------------------------------------------------

function dayKey(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function addDaysKey(day: string, n: number): string {
  const d = new Date(`${day}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

/** Monday-based week start key for a date. */
function weekKey(d: Date): string {
  const day = d.getUTCDay();
  const back = (day + 6) % 7; // Monday = 0
  return addDaysKey(dayKey(d), -back);
}

function parseJsonArray(raw: string): string[] {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((s) => typeof s === "string") : [];
  } catch {
    return [];
  }
}

function parseJsonLength(raw: string): number {
  return parseJsonArray(raw).length;
}

function daysBetween(a: Date, b: Date): number {
  return Math.floor((b.getTime() - a.getTime()) / 86_400_000);
}

// ---------------------------------------------------------------------------
// Points derivation
// ---------------------------------------------------------------------------

interface CandidateEvent {
  at: Date;
  source: keyof typeof POINT_RULES;
  skill: ProgressSkill | null;
  label: string;
  /** Subject key for once-per-subject awards (null = every event counts). */
  subject: string | null;
}

/**
 * Apply POINT_RULES to candidate events: daily caps + once-per-subject.
 * Candidates must already be sorted ascending by `at` per source.
 */
export function deriveEvents(candidates: CandidateEvent[]): DerivedEvent[] {
  const awarded: DerivedEvent[] = [];
  const dayCount = new Map<string, number>(); // `${source}:${day}` -> events today
  const awardedSubjects = new Set<string>(); // `${source}:${subject}`

  for (const candidate of candidates) {
    const rule = POINT_RULES[candidate.source];
    if (rule.oncePerSubject) {
      if (candidate.subject === null) continue; // defensive: once-rules need subjects
      const key = `${candidate.source}:${candidate.subject}`;
      if (awardedSubjects.has(key)) continue;
      awardedSubjects.add(key);
    }
    if (rule.capPerDay !== null) {
      const key = `${candidate.source}:${dayKey(candidate.at)}`;
      const used = dayCount.get(key) ?? 0;
      if (used >= rule.capPerDay) continue;
      dayCount.set(key, used + 1);
    }
    awarded.push({
      at: candidate.at,
      source: candidate.source,
      points: rule.points,
      skill: candidate.skill,
      label: candidate.label,
    });
  }
  return awarded;
}

function pushCandidates(
  list: CandidateEvent[],
  source: keyof typeof POINT_RULES,
  rows: { at: Date; label?: string; subject?: string | null }[],
  skill: ProgressSkill | null,
) {
  for (const row of rows) {
    list.push({
      at: row.at,
      source,
      skill,
      label: row.label ?? POINT_RULES[source].label,
      subject: row.subject ?? null,
    });
  }
}

// ---------------------------------------------------------------------------
// Streaks
// ---------------------------------------------------------------------------

export function computeStreak(dayKeys: string[], now: Date): {
  current: number;
  longest: number;
  activeDays: number;
  lastActiveDay: string | null;
} {
  if (dayKeys.length === 0) {
    return { current: 0, longest: 0, activeDays: 0, lastActiveDay: null };
  }
  const sorted = [...dayKeys].sort();
  let longest = 1;
  let run = 1;
  for (let i = 1; i < sorted.length; i++) {
    run = sorted[i - 1] === addDaysKey(sorted[i], -1) ? run + 1 : 1;
    if (run > longest) longest = run;
  }
  const today = dayKey(now);
  const yesterday = addDaysKey(today, -1);
  const last = sorted[sorted.length - 1];
  let current = 0;
  if (last === today || last === yesterday) {
    current = 1;
    let i = sorted.length - 1;
    while (i > 0 && sorted[i - 1] === addDaysKey(sorted[i], -1)) {
      current += 1;
      i -= 1;
    }
  }
  return { current, longest, activeDays: sorted.length, lastActiveDay: last };
}

// ---------------------------------------------------------------------------
// Series
// ---------------------------------------------------------------------------

function buildDailyActivity(
  pointsByDay: Map<string, { points: number; events: number }>,
  now: Date,
): DailyActivity[] {
  const out: DailyActivity[] = [];
  const today = dayKey(now);
  for (let i = 83; i >= 0; i--) {
    const day = addDaysKey(today, -i);
    out.push({ day, points: pointsByDay.get(day)?.points ?? 0, events: pointsByDay.get(day)?.events ?? 0 });
  }
  return out;
}

function buildWeekly(events: DerivedEvent[], now: Date): WeeklyBucket[] {
  const thisWeek = weekKey(now);
  const weeks: string[] = [];
  for (let i = 11; i >= 0; i--) weeks.push(addDaysKey(thisWeek, -7 * i));

  const byWeek = new Map<string, DerivedEvent[]>();
  for (const event of events) {
    const key = weekKey(event.at);
    const list = byWeek.get(key) ?? [];
    list.push(event);
    byWeek.set(key, list);
  }
  return weeks.map((weekStart) => {
    const list = byWeek.get(weekStart) ?? [];
    const bySkill: Partial<Record<ProgressSkill, number>> = {};
    for (const event of list) {
      if (event.skill) bySkill[event.skill] = (bySkill[event.skill] ?? 0) + event.points;
    }
    return {
      weekStart,
      points: list.reduce((sum, e) => sum + e.points, 0),
      events: list.length,
      bySkill,
      exerciseAccuracy: null,
      exerciseAttempts: 0,
      reviewRetention: null,
      reviewCount: 0,
    };
  });
}

// ---------------------------------------------------------------------------
// Fact collection
// ---------------------------------------------------------------------------

export async function collectFacts(userId: string): Promise<ProgressFacts> {
  const now = new Date();

  const [
    lessonRows,
    exerciseRows,
    assessmentRows,
    vocabRows,
    reviewRows,
    sentenceRows,
    challengeRows,
    clinicRows,
    readingProgressRows,
    readingRunRows,
    readingAttemptRows,
    listeningProgressRows,
    listeningAttemptRows,
    speakingProgressRows,
    speakingAttemptRows,
    conversationRows,
    pronunciationRows,
    writingProgressRows,
    writingSubmissionRows,
    goalsRow,
    confidenceRows,
  ] = await Promise.all([
    db.lessonProgress.findMany({ where: { userId } }),
    db.exerciseAttempt.findMany({
      where: { userId },
      select: {
        id: true, exerciseId: true, lessonSlug: true, type: true, skill: true,
        isCorrect: true, difficulty: true, createdAt: true,
      },
    }),
    db.assessmentResult.findMany({
      where: { userId, status: "completed" },
      select: { lessonSlug: true, score: true, passed: true, completedAt: true },
    }),
    db.vocabProgress.findMany({ where: { userId } }),
    db.vocabReviewLog.findMany({
      where: { userId, action: "grade", correct: { not: null } },
      select: { wordId: true, correct: true, createdAt: true },
    }),
    db.vocabSentence.findMany({
      where: { userId },
      select: { wordId: true, valid: true, createdAt: true },
    }),
    db.vocabChallengeRun.findMany({
      where: { userId, status: "completed" },
      select: { id: true, kind: true, correct: true, total: true, completedAt: true },
    }),
    db.grammarClinicSubmission.findMany({
      where: { userId },
      select: { id: true, issues: true, categories: true, createdAt: true },
    }),
    db.readingProgress.findMany({ where: { userId } }),
    db.readingRun.findMany({
      where: { userId, status: "completed", passed: true },
      select: { id: true, textId: true, score: true, completedAt: true },
    }),
    db.readingAttempt.findMany({
      where: { userId },
      select: { questionId: true, skill: true, isCorrect: true, createdAt: true },
    }),
    db.listeningProgress.findMany({ where: { userId } }),
    db.listeningAttempt.findMany({
      where: { userId },
      select: { id: true, activityId: true, exerciseId: true, isCorrect: true, createdAt: true },
    }),
    db.speakingProgress.findMany({ where: { userId } }),
    db.speakingAttempt.findMany({
      where: { userId },
      select: {
        id: true, activityId: true, taskId: true, kind: true, provider: true,
        score: true, selfAssessed: true, durationMs: true, createdAt: true,
      },
    }),
    db.conversationSession.findMany({
      where: { userId, status: "completed" },
      select: { id: true, scenarioId: true, turns: true, completedAt: true },
    }),
    db.pronunciationAttempt.findMany({
      where: { userId },
      select: { id: true, itemId: true, category: true, matchScore: true, createdAt: true },
    }),
    db.writingProgress.findMany({ where: { userId } }),
    db.writingSubmission.findMany({
      where: { userId },
      select: {
        id: true, assignmentId: true, version: true, content: true,
        overall: true, passed: true, wordCount: true, createdAt: true,
      },
    }),
    db.learnerGoals.findUnique({ where: { userId } }),
    db.lessonConfidence.findMany({ where: { userId } }),
  ]);

  // ----- lessons -----------------------------------------------------------
  const lessons: ProgressFacts["lessons"] = lessonRows
    .map((row) => {
      const lesson = getLesson(row.lessonSlug);
      return {
        slug: row.lessonSlug,
        title: lesson?.title ?? row.lessonSlug,
        levelId: lesson?.levelId ?? null,
        status: row.status === "completed" ? ("completed" as const) : ("in-progress" as const),
        sectionsDone: parseJsonArray(row.sectionsCompleted).length,
        sectionsTotal: lesson ? lesson.sections.length : 0,
        updatedAt: row.updatedAt,
        completedAt: row.completedAt,
      };
    })
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
  const lessonsCompletedCount = lessons.filter((l) => l.completedAt).length;

  // ----- exercises ----------------------------------------------------------
  const exerciseAttempts: ProgressFacts["exerciseAttempts"] = exerciseRows
    .map((row) => ({
      id: row.id,
      exerciseId: row.exerciseId,
      lessonSlug: row.lessonSlug,
      type: row.type,
      skill: (["vocabulary", "grammar", "reading", "listening", "speaking", "writing"] as const).includes(
        row.skill as ProgressSkill,
      )
        ? (row.skill as ProgressSkill)
        : "vocabulary",
      isCorrect: row.isCorrect,
      difficulty: row.difficulty,
      createdAt: row.createdAt,
    }))
    .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());

  // ----- assessments --------------------------------------------------------
  const assessmentResults: ProgressFacts["assessmentResults"] = assessmentRows
    .filter((r): r is typeof r & { completedAt: Date } => r.completedAt !== null)
    .map((row) => ({
      lessonSlug: row.lessonSlug,
      score: row.score,
      passed: row.passed,
      completedAt: row.completedAt,
    }))
    .sort((a, b) => a.completedAt.getTime() - b.completedAt.getTime());
  const firstPassedByLesson = new Map<string, Date>();
  for (const row of assessmentResults) {
    if (!row.passed || !row.completedAt) continue;
    if (!firstPassedByLesson.has(row.lessonSlug)) firstPassedByLesson.set(row.lessonSlug, row.completedAt);
  }
  const assessmentsPassed = [...firstPassedByLesson.entries()]
    .map(([lessonSlug, completedAt]) => ({ lessonSlug, completedAt }))
    .sort((a, b) => a.completedAt.getTime() - b.completedAt.getTime());

  // ----- vocabulary ---------------------------------------------------------
  const vocabWords: ProgressFacts["vocabWords"] = vocabRows
    .map((row) => ({
      wordId: row.wordId,
      term: getVocabWord(row.wordId)?.word ?? row.wordId,
      status: (["learning", "reviewing", "mastered"] as const).includes(row.status as "learning")
        ? (row.status as "learning" | "reviewing" | "mastered")
        : "learning",
      totalReviews: row.totalReviews,
      correctReviews: row.correctReviews,
      lapses: row.lapses,
      isDifficult: row.isDifficult,
      dueAt: row.dueAt,
      lastReviewedAt: row.lastReviewedAt,
      firstSeenAt: row.firstSeenAt,
    }))
    .sort((a, b) => a.firstSeenAt.getTime() - b.firstSeenAt.getTime());

  const vocabGradedReviews: ProgressFacts["vocabGradedReviews"] = reviewRows
    .map((row) => ({ wordId: row.wordId, correct: Boolean(row.correct), createdAt: row.createdAt }))
    .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());

  const vocabSentences: ProgressFacts["vocabSentences"] = sentenceRows
    .map((row) => ({ wordId: row.wordId, valid: row.valid, createdAt: row.createdAt }))
    .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());

  const vocabChallenges: ProgressFacts["vocabChallenges"] = challengeRows
    .filter((r) => r.completedAt)
    .map((row) => ({
      id: row.id,
      kind: row.kind,
      correct: row.correct,
      total: row.total,
      completedAt: row.completedAt!,
    }))
    .sort((a, b) => a.completedAt.getTime() - b.completedAt.getTime());

  // ----- grammar clinic -----------------------------------------------------
  const clinicSentences: ProgressFacts["clinicSentences"] = clinicRows.map((row) => ({
    id: row.id,
    issuesCount: parseJsonArray(row.issues).length,
    categories: parseJsonArray(row.categories),
    createdAt: row.createdAt,
  })).sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());

  // ----- reading --------------------------------------------------------------
  const readingProgress: ProgressFacts["readingProgress"] = readingProgressRows
    .map((row) => ({
      textId: row.textId,
      title: getReadingTextById(row.textId)?.title ?? row.textId,
      status: row.status === "completed" ? ("completed" as const) : ("in-progress" as const),
      bestRunScore: row.bestRunScore,
      updatedAt: row.updatedAt,
      completedAt: row.completedAt,
    }))
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());

  const readingRunsPassed: ProgressFacts["readingRunsPassed"] = readingRunRows
    .filter((r) => r.completedAt)
    .map((row) => ({ id: row.id, textId: row.textId, score: row.score, completedAt: row.completedAt! }))
    .sort((a, b) => a.completedAt.getTime() - b.completedAt.getTime());

  const readingAttempts: ProgressFacts["readingAttempts"] = readingAttemptRows
    .map((row) => ({
      questionId: row.questionId,
      skill: row.skill,
      isCorrect: row.isCorrect,
      createdAt: row.createdAt,
    }))
    .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());

  // ----- listening ------------------------------------------------------------
  const listeningProgress: ProgressFacts["listeningProgress"] = listeningProgressRows
    .map((row) => ({
      activityId: row.activityId,
      title: getListeningActivityById(row.activityId)?.title ?? row.activityId,
      status: row.status === "completed" ? ("completed" as const) : ("in-progress" as const),
      bestScore: row.bestScore,
      updatedAt: row.updatedAt,
      completedAt: row.completedAt,
      firstTryCount: parseJsonLength(row.firstTryCorrect),
      completedCount: parseJsonLength(row.exercisesCompleted),
    }))
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());

  const listeningAttempts: ProgressFacts["listeningAttempts"] = listeningAttemptRows
    .map((row) => ({
      id: row.id,
      activityId: row.activityId,
      exerciseId: row.exerciseId,
      isCorrect: row.isCorrect,
      createdAt: row.createdAt,
    }))
    .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());

  // ----- speaking ---------------------------------------------------------------
  const speakingTaskType = new Map<string, "match" | "open">(); // `${activityId}:${taskId}`
  for (const activity of speakingActivities) {
    for (const task of activity.tasks) {
      speakingTaskType.set(`${activity.id}:${task.id}`, task.type === "match" ? "match" : "open");
    }
  }

  const speakingProgress: ProgressFacts["speakingProgress"] = speakingProgressRows
    .map((row) => ({
      activityId: row.activityId,
      title: speakingActivities.find((a) => a.id === row.activityId)?.title ?? row.activityId,
      tier: row.tier,
      status: row.status === "completed" ? ("completed" as const) : ("in-progress" as const),
      bestScore: row.bestScore,
      attemptsCount: row.attemptsCount,
      tasksPassedCount: parseJsonLength(row.tasksPassed),
      updatedAt: row.updatedAt,
      completedAt: row.completedAt,
    }))
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());

  const speakingAttempts: ProgressFacts["speakingAttempts"] = speakingAttemptRows
    .map((row) => ({
      id: row.id,
      activityId: row.activityId,
      taskId: row.taskId,
      score: row.score,
      selfAssessed: row.selfAssessed,
      durationMs: row.durationMs,
      createdAt: row.createdAt,
    }))
    .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());

  const conversationsCompleted: ProgressFacts["conversationsCompleted"] = conversationRows
    .filter((r) => r.completedAt)
    .map((row) => ({
      id: row.id,
      scenarioId: row.scenarioId,
      title: getConversationScenario(row.scenarioId)?.title ?? row.scenarioId,
      turnsCount: parseJsonLength(row.turns),
      completedAt: row.completedAt!,
    }))
    .sort((a, b) => a.completedAt.getTime() - b.completedAt.getTime());

  const pronunciationAttempts: ProgressFacts["pronunciationAttempts"] = pronunciationRows
    .map((row) => ({
      id: row.id,
      itemId: row.itemId,
      category: row.category,
      matchScore: row.matchScore,
      createdAt: row.createdAt,
    }))
    .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());

  // ----- writing ---------------------------------------------------------------
  const writingProgress: ProgressFacts["writingProgress"] = writingProgressRows
    .map((row) => ({
      assignmentId: row.assignmentId,
      title: writingAssignments.find((a) => a.id === row.assignmentId)?.title ?? row.assignmentId,
      tier: row.tier,
      status: row.status === "completed" ? ("completed" as const) : ("in-progress" as const),
      bestScore: row.bestScore,
      submissionsCount: row.submissionsCount,
      updatedAt: row.updatedAt,
      completedAt: row.completedAt,
    }))
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());

  const writingSubmissions: ProgressFacts["writingSubmissions"] = writingSubmissionRows
    .map((row) => ({
      id: row.id,
      assignmentId: row.assignmentId,
      title: writingAssignments.find((a) => a.id === row.assignmentId)?.title ?? row.assignmentId,
      version: row.version,
      overall: row.overall,
      passed: row.passed,
      wordCount: row.wordCount,
      sentenceCount: splitSentencesStrict(row.content).length,
      createdAt: row.createdAt,
    }))
    .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());

  // ----- sentence constructions (verified) -------------------------------------
  const sentenceConstructions: Date[] = [
    ...exerciseAttempts
      .filter((a) => (a.type === "sentence-build" || a.type === "rearrange") && a.isCorrect)
      .map((a) => a.createdAt),
    ...vocabSentences.filter((s) => s.valid).map((s) => s.createdAt),
  ].sort((a, b) => a.getTime() - b.getTime());

  // ----- learner-set state --------------------------------------------------
  const confidence: Record<string, number> = {};
  for (const row of confidenceRows) {
    if (row.confidence >= 1 && row.confidence <= 5) confidence[row.lessonSlug] = row.confidence;
  }

  // ----- points (deterministic replay) ---------------------------------------
  const candidates: CandidateEvent[] = [];

  // exercise-correct events carry the attempt's own skill.
  for (const attempt of exerciseAttempts) {
    if (!attempt.isCorrect) continue;
    candidates.push({
      at: attempt.createdAt,
      source: "exercise-correct",
      skill: attempt.skill,
      label: `Correct exercise · ${getLesson(attempt.lessonSlug)?.title ?? attempt.lessonSlug}`,
      subject: null,
    });
  }

  pushCandidates(
    candidates,
    "assessment-passed",
    assessmentsPassed.map((a) => ({
      at: a.completedAt,
      subject: a.lessonSlug,
      label: `Assessment passed · ${getLesson(a.lessonSlug)?.title ?? a.lessonSlug}`,
    })),
    null,
  );

  pushCandidates(
    candidates,
    "lesson-completed",
    lessons
      .filter((l) => l.completedAt)
      .map((l) => ({ at: l.completedAt!, subject: l.slug, label: `Lesson completed · ${l.title}` })),
    null,
  );

  pushCandidates(
    candidates,
    "vocab-review-correct",
    vocabGradedReviews.filter((r) => r.correct).map((r) => ({ at: r.createdAt })),
    "vocabulary",
  );

  pushCandidates(
    candidates,
    "vocab-challenge-completed",
    vocabChallenges.map((c) => ({ at: c.completedAt })),
    "vocabulary",
  );

  pushCandidates(
    candidates,
    "vocab-sentence-valid",
    vocabSentences.filter((s) => s.valid).map((s) => ({ at: s.createdAt })),
    "vocabulary",
  );

  pushCandidates(
    candidates,
    "clinic-sentence",
    clinicSentences.map((s) => ({ at: s.createdAt })),
    "grammar",
  );

  pushCandidates(
    candidates,
    "reading-run-passed",
    readingRunsPassed.map((r) => ({ at: r.completedAt })),
    "reading",
  );

  pushCandidates(
    candidates,
    "reading-text-completed",
    readingProgress
      .filter((r) => r.completedAt)
      .map((r) => ({ at: r.completedAt!, subject: r.textId, label: `Reading completed · ${r.title}` })),
    "reading",
  );

  pushCandidates(
    candidates,
    "listening-correct",
    listeningAttempts.filter((a) => a.isCorrect).map((a) => ({ at: a.createdAt })),
    "listening",
  );

  pushCandidates(
    candidates,
    "listening-activity-completed",
    listeningProgress
      .filter((p) => p.completedAt)
      .map((p) => ({ at: p.completedAt!, subject: p.activityId, label: `Listening completed · ${p.title}` })),
    "listening",
  );

  // Speaking task passes: first passing attempt per (activity, task). A pass is
  // a score at/above the deterministic pass bar for the task type, or an
  // honest self-assessed pass.
  const passedTaskSubjects = new Set<string>();
  const speakingTaskCandidates: { at: Date; subject: string; label: string }[] = [];
  for (const attempt of speakingAttempts) {
    const subject = `${attempt.activityId}:${attempt.taskId}`;
    if (passedTaskSubjects.has(subject)) continue;
    const taskType = speakingTaskType.get(subject) ?? "open";
    const bar = taskType === "match" ? MATCH_PASS_SCORE : OPEN_PASS_SCORE;
    if (attempt.selfAssessed || attempt.score >= bar) {
      passedTaskSubjects.add(subject);
      const activity = speakingProgress.find((p) => p.activityId === attempt.activityId);
      speakingTaskCandidates.push({
        at: attempt.createdAt,
        subject,
        label: `Speaking task passed · ${activity?.title ?? attempt.activityId}`,
      });
    }
  }
  pushCandidates(candidates, "speaking-task-passed", speakingTaskCandidates, "speaking");

  pushCandidates(
    candidates,
    "speaking-activity-completed",
    speakingProgress
      .filter((p) => p.completedAt)
      .map((p) => ({ at: p.completedAt!, subject: p.activityId, label: `Speaking activity completed · ${p.title}` })),
    "speaking",
  );

  pushCandidates(
    candidates,
    "conversation-completed",
    conversationsCompleted.map((c) => ({ at: c.completedAt, label: `Conversation finished · ${c.title}` })),
    "speaking",
  );

  pushCandidates(
    candidates,
    "pronunciation-attempt",
    pronunciationAttempts.map((a) => ({ at: a.createdAt })),
    "speaking",
  );

  pushCandidates(
    candidates,
    "writing-submitted",
    writingSubmissions.map((s) => ({ at: s.createdAt, label: `Writing submitted · ${s.title}` })),
    "writing",
  );

  pushCandidates(
    candidates,
    "writing-assignment-completed",
    writingProgress
      .filter((p) => p.completedAt)
      .map((p) => ({ at: p.completedAt!, subject: p.assignmentId, label: `Writing assignment completed · ${p.title}` })),
    "writing",
  );

  candidates.sort((a, b) => a.at.getTime() - b.at.getTime());
  const events = deriveEvents(candidates);

  // ----- daily points / streak ------------------------------------------------
  const pointsByDayMap = new Map<string, { points: number; events: number }>();
  for (const event of events) {
    const key = dayKey(event.at);
    const entry = pointsByDayMap.get(key) ?? { points: 0, events: 0 };
    entry.points += event.points;
    entry.events += 1;
    pointsByDayMap.set(key, entry);
  }
  const pointsByDay: Record<string, number> = {};
  for (const [key, value] of pointsByDayMap) pointsByDay[key] = value.points;

  const streak = computeStreak([...pointsByDayMap.keys()], now);
  const dailyActivity = buildDailyActivity(pointsByDayMap, now);
  const weekly = buildWeekly(events, now);

  // Enrich weekly buckets with accuracy series.
  for (const bucket of weekly) {
    const weekStart = bucket.weekStart;
    const weekEnd = addDaysKey(weekStart, 7);
    const inWeek = (d: Date) => {
      const key = dayKey(d);
      return key >= weekStart && key < weekEnd;
    };
    const exercises = exerciseAttempts.filter((a) => inWeek(a.createdAt));
    if (exercises.length > 0) {
      bucket.exerciseAttempts = exercises.length;
      bucket.exerciseAccuracy = Math.round(
        (exercises.filter((a) => a.isCorrect).length / exercises.length) * 100,
      );
    }
    const reviews = vocabGradedReviews.filter((r) => inWeek(r.createdAt));
    if (reviews.length > 0) {
      bucket.reviewCount = reviews.length;
      bucket.reviewRetention = Math.round(
        (reviews.filter((r) => r.correct).length / reviews.length) * 100,
      );
    }
  }

  const todayKey = dayKey(now);
  const thisWeekKey = weekKey(now);
  const pointsToday = pointsByDay[todayKey] ?? 0;
  const pointsThisWeek = Object.entries(pointsByDay)
    .filter(([day]) => day >= thisWeekKey)
    .reduce((sum, [, points]) => sum + points, 0);

  return {
    userId,
    now,
    lessons,
    lessonsCompletedCount,
    exerciseAttempts,
    assessmentsPassed,
    assessmentResults,
    vocabWords,
    vocabGradedReviews,
    vocabSentences,
    vocabChallenges,
    clinicSentences,
    readingProgress,
    readingRunsPassed,
    readingAttempts,
    listeningProgress,
    listeningAttempts,
    speakingProgress,
    speakingAttempts,
    conversationsCompleted,
    pronunciationAttempts,
    writingProgress,
    writingSubmissions,
    sentenceConstructions,
    goals: {
      dailyPoints: goalsRow?.dailyPoints ?? 30,
      weeklyPoints: goalsRow?.weeklyPoints ?? 150,
    },
    confidence,
    events,
    pointsTotal: events.reduce((sum, e) => sum + e.points, 0),
    pointsToday,
    pointsThisWeek,
    pointsByDay,
    dailyActivity,
    weekly,
    streak,
  };
}

/** Exposed for the skill profiler: full days between two dates. */
export function fullDaysBetween(a: Date, b: Date): number {
  return Math.max(0, daysBetween(a, b));
}
