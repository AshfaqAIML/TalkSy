/**
 * Skill profiler — each major skill gets its OWN progress profile.
 *
 * Honesty rules:
 *  - A learner may be strong in reading and weak in speaking; the profiles
 *    make that visible instead of averaging it away.
 *  - "Status" describes PRACTICE VOLUME, never ability or level.
 *  - Accuracy is only shown where answers are objectively graded, and every
 *    accuracy number carries a `basis` label saying what it measures.
 *  - Writing (rubric) and speaking (transcript-match) scores are never
 *    presented as "accuracy" — their profiles carry explicit caveats.
 */

import { vocabWords } from "@/data/vocabulary";
import { readingTexts } from "@/data/reading";
import { listeningActivities } from "@/data/listening";
import { speakingActivities } from "@/data/speaking";
import { writingAssignments } from "@/data/writing";
import { courses } from "@/data/progress";
import {
  PROGRESS_SKILLS,
  SKILL_LABELS,
  type ProgressFacts,
  type ProgressSkill,
  type SkillAccuracy,
  type SkillProfile,
  type SkillStatus,
  type SkillTrend,
} from "@/data/progress";

const DAY_MS = 86_400_000;

function pct(correct: number, total: number): number | null {
  return total > 0 ? Math.round((correct / total) * 100) : null;
}

function accuracyOf(correct: number, total: number, basis: string): SkillAccuracy | null {
  if (total === 0) return null;
  return { correct, total, pct: pct(correct, total), basis };
}

function statusFor(events: number, lastActiveAt: Date | null, now: Date): SkillStatus {
  if (events === 0 || !lastActiveAt) return "not-started";
  if (events >= 50 && now.getTime() - lastActiveAt.getTime() <= 30 * DAY_MS) return "consistent";
  if (events >= 10) return "building";
  return "exploring";
}

/** Compare a recent 14-day window with the previous 14 days. */
function trendFrom(
  recent: { correct: number; total: number } | null,
  prior: { correct: number; total: number } | null,
  recentMin = 5,
  priorMin = 5,
): SkillTrend {
  if (!recent || recent.total < recentMin) return "insufficient";
  if (!prior || prior.total < priorMin) return "new";
  const recentPct = (recent.correct / recent.total) * 100;
  const priorPct = (prior.correct / prior.total) * 100;
  const delta = recentPct - priorPct;
  if (delta >= 5) return "improving";
  if (delta <= -5) return "declining";
  return "steady";
}

function lastOf(dates: (Date | null | undefined)[]): Date | null {
  const valid = dates.filter((d): d is Date => d !== null && d !== undefined);
  return valid.length ? new Date(Math.max(...valid.map((d) => d.getTime()))) : null;
}

function windowStats(
  rows: { at: Date; correct: boolean }[],
  now: Date,
): { recent: { correct: number; total: number }; prior: { correct: number; total: number } } {
  const recent: { correct: number; total: number } = { correct: 0, total: 0 };
  const prior: { correct: number; total: number } = { correct: 0, total: 0 };
  for (const row of rows) {
    const age = now.getTime() - row.at.getTime();
    if (age <= 14 * DAY_MS) {
      recent.total += 1;
      if (row.correct) recent.correct += 1;
    } else if (age <= 28 * DAY_MS) {
      prior.total += 1;
      if (row.correct) prior.correct += 1;
    }
  }
  return { recent, prior };
}

function daysSince(date: Date | null, now: Date): number | null {
  return date ? Math.floor((now.getTime() - date.getTime()) / DAY_MS) : null;
}

// ---------------------------------------------------------------------------
// Individual skill profiles
// ---------------------------------------------------------------------------

function vocabularyProfile(facts: ProgressFacts): SkillProfile {
  const reviews = facts.vocabGradedReviews;
  const correctReviews = reviews.filter((r) => r.correct).length;
  // Lesson exercises tagged "vocabulary" are verified practice too.
  const exercises = facts.exerciseAttempts.filter((a) => a.skill === "vocabulary");
  const lastActiveAt = lastOf([
    reviews[reviews.length - 1]?.createdAt ?? null,
    facts.vocabChallenges[facts.vocabChallenges.length - 1]?.completedAt ?? null,
    facts.vocabSentences[facts.vocabSentences.length - 1]?.createdAt ?? null,
    exercises[exercises.length - 1]?.createdAt ?? null,
  ]);
  const practiceEvents =
    reviews.length + facts.vocabChallenges.length + facts.vocabSentences.length + exercises.length;
  const learned = facts.vocabWords.filter((w) => w.totalReviews >= 1).length;
  const mastered = facts.vocabWords.filter((w) => w.status === "mastered").length;
  const difficult = facts.vocabWords.filter((w) => w.isDifficult || w.lapses >= 2).length;
  const dueNow = facts.vocabWords.filter(
    (w) => w.dueAt !== null && w.dueAt.getTime() <= facts.now.getTime(),
  ).length;
  const { recent, prior } = windowStats(
    reviews.map((r) => ({ at: r.createdAt, correct: r.correct })),
    facts.now,
  );

  // Accuracy: review retention when reviews exist (the meaningful retention
  // metric); otherwise lesson-exercise accuracy, clearly relabelled.
  const accuracy =
    reviews.length > 0
      ? accuracyOf(correctReviews, reviews.length, "graded word reviews")
      : exercises.length > 0
        ? accuracyOf(
            exercises.filter((a) => a.isCorrect).length,
            exercises.length,
            "graded vocabulary exercises",
          )
        : null;

  const strengths: string[] = [];
  if (mastered > 0) strengths.push(`${mastered} word${mastered === 1 ? "" : "s"} at mastered level`);
  if (reviews.length >= 20) {
    strengths.push(`${Math.round((correctReviews / reviews.length) * 100)}% of your graded reviews correct`);
  }

  const focus: string[] = [];
  if (dueNow > 0) focus.push(`${dueNow} word${dueNow === 1 ? "" : "s"} due for review now`);
  if (difficult > 0) focus.push(`${difficult} word${difficult === 1 ? "" : "s"} flagged as difficult or lapsed`);

  return {
    skill: "vocabulary",
    label: SKILL_LABELS.vocabulary,
    status: statusFor(practiceEvents, lastActiveAt, facts.now),
    practiceEvents,
    lastActiveAt: lastActiveAt?.toISOString() ?? null,
    daysSinceActive: daysSince(lastActiveAt, facts.now),
    accuracy,
    completion: { done: learned, total: vocabWords.length, label: "words learned (reviewed at least once)" },
    trend: trendFrom(recent, prior),
    strengths,
    focus,
    notes: ["Retention is measured on your own graded reviews — not on how often you opened a word."],
  };
}

function grammarProfile(facts: ProgressFacts): SkillProfile {
  const attempts = facts.exerciseAttempts.filter((a) => a.skill === "grammar");
  const correct = attempts.filter((a) => a.isCorrect).length;
  const clinic = facts.clinicSentences;
  const clean = clinic.filter((s) => s.issuesCount === 0).length;
  const lastActiveAt = lastOf([
    attempts[attempts.length - 1]?.createdAt ?? null,
    clinic[clinic.length - 1]?.createdAt ?? null,
  ]);
  const grammarLessonSlugs = new Set(
    courses.filter((c) => c.levelId === "grammar-core").flatMap((c) => c.lessonSlugs),
  );
  const grammarLessonsDone = facts.lessons.filter(
    (l) => l.completedAt && grammarLessonSlugs.has(l.slug),
  ).length;
  const { recent, prior } = windowStats(
    attempts.map((a) => ({ at: a.createdAt, correct: a.isCorrect })),
    facts.now,
  );

  // Most frequent clinic error categories (top 2 with ≥2 occurrences).
  const categoryCounts = new Map<string, number>();
  for (const sentence of clinic) {
    for (const category of sentence.categories) {
      categoryCounts.set(category, (categoryCounts.get(category) ?? 0) + 1);
    }
  }
  const topCategories = [...categoryCounts.entries()]
    .filter(([, count]) => count >= 2)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2);

  const strengths: string[] = [];
  if (clean >= 3) strengths.push(`${clean} clinic sentence${clean === 1 ? "" : "s"} with no issues found`);
  if (attempts.length >= 20 && correct / attempts.length >= 0.8) {
    strengths.push(`${Math.round((correct / attempts.length) * 100)}% correct on ${attempts.length} grammar exercises`);
  }

  return {
    skill: "grammar",
    label: SKILL_LABELS.grammar,
    status: statusFor(attempts.length + clinic.length, lastActiveAt, facts.now),
    practiceEvents: attempts.length + clinic.length,
    lastActiveAt: lastActiveAt?.toISOString() ?? null,
    daysSinceActive: daysSince(lastActiveAt, facts.now),
    accuracy: accuracyOf(correct, attempts.length, "graded grammar exercises"),
    completion: { done: grammarLessonsDone, total: grammarLessonSlugs.size, label: "Grammar School & Sentence Lab lessons" },
    trend: trendFrom(recent, prior),
    strengths,
    focus: topCategories.map(([category, count]) => `Error Clinic: “${category}” in ${count} sentence${count === 1 ? "" : "s"}`),
    notes: [],
  };
}

function readingProfile(facts: ProgressFacts): SkillProfile {
  const attempts = facts.readingAttempts;
  const correct = attempts.filter((a) => a.isCorrect).length;
  const completed = facts.readingProgress.filter((r) => r.completedAt).length;
  const lastActiveAt = lastOf([
    attempts[attempts.length - 1]?.createdAt ?? null,
    facts.readingRunsPassed[facts.readingRunsPassed.length - 1]?.completedAt ?? null,
    facts.readingProgress[0]?.completedAt ?? null,
    facts.readingProgress[0]?.updatedAt ?? null,
  ]);
  const { recent, prior } = windowStats(
    attempts.map((a) => ({ at: a.createdAt, correct: a.isCorrect })),
    facts.now,
  );

  // Per-comprehension-skill breakdown (only with a meaningful sample).
  const bySkill = new Map<string, { correct: number; total: number }>();
  for (const attempt of attempts) {
    const bucket = bySkill.get(attempt.skill) ?? { correct: 0, total: 0 };
    bucket.total += 1;
    if (attempt.isCorrect) bucket.correct += 1;
    bySkill.set(attempt.skill, bucket);
  }
  const ranked = [...bySkill.entries()].filter(([, v]) => v.total >= 4).sort(
    (a, b) => b[1].correct / b[1].total - a[1].correct / a[1].total,
  );
  const best = ranked[0];
  const worst = ranked.length >= 2 ? ranked[ranked.length - 1] : null;

  const strengths: string[] = [];
  if (best) {
    strengths.push(`${best[0]} questions: ${Math.round((best[1].correct / best[1].total) * 100)}% (${best[1].correct}/${best[1].total})`);
  }
  const focus: string[] = [];
  if (worst && worst[1].correct / worst[1].total < 0.7) {
    focus.push(`${worst[0]} questions: ${Math.round((worst[1].correct / worst[1].total) * 100)}% (${worst[1].correct}/${worst[1].total})`);
  }
  const inProgress = facts.readingProgress.filter((r) => !r.completedAt).length;
  if (inProgress > 0) focus.push(`${inProgress} text${inProgress === 1 ? "" : "s"} started but not finished`);

  return {
    skill: "reading",
    label: SKILL_LABELS.reading,
    status: statusFor(attempts.length + facts.readingRunsPassed.length, lastActiveAt, facts.now),
    practiceEvents: attempts.length + facts.readingRunsPassed.length,
    lastActiveAt: lastActiveAt?.toISOString() ?? null,
    daysSinceActive: daysSince(lastActiveAt, facts.now),
    accuracy: accuracyOf(correct, attempts.length, "graded comprehension answers"),
    completion: { done: completed, total: readingTexts.length, label: "reading texts completed" },
    trend: trendFrom(recent, prior),
    strengths,
    focus,
    notes: [],
  };
}

function listeningProfile(facts: ProgressFacts): SkillProfile {
  const attempts = facts.listeningAttempts;
  const correct = attempts.filter((a) => a.isCorrect).length;
  // Lesson dictation/listening exercises are verified listening practice too.
  const exercises = facts.exerciseAttempts.filter((a) => a.skill === "listening");
  const completed = facts.listeningProgress.filter((p) => p.completedAt).length;
  const firstTry = facts.listeningProgress.reduce((sum, p) => sum + p.firstTryCount, 0);
  const lastActiveAt = lastOf([
    attempts[attempts.length - 1]?.createdAt ?? null,
    exercises[exercises.length - 1]?.createdAt ?? null,
    facts.listeningProgress[0]?.completedAt ?? null,
    facts.listeningProgress[0]?.updatedAt ?? null,
  ]);
  const accuracyRows = attempts.length > 0 ? attempts : exercises;
  const { recent, prior } = windowStats(
    accuracyRows.map((a) => ({ at: a.createdAt, correct: a.isCorrect })),
    facts.now,
  );

  const strengths: string[] = [];
  if (firstTry > 0) strengths.push(`${firstTry} exercise${firstTry === 1 ? "" : "s"} correct on the first try`);
  const focus: string[] = [];
  const inProgress = facts.listeningProgress.filter((p) => !p.completedAt).length;
  if (inProgress > 0) focus.push(`${inProgress} activit${inProgress === 1 ? "y" : "ies"} started but not finished`);

  return {
    skill: "listening",
    label: SKILL_LABELS.listening,
    status: statusFor(attempts.length + exercises.length, lastActiveAt, facts.now),
    practiceEvents: attempts.length + exercises.length,
    lastActiveAt: lastActiveAt?.toISOString() ?? null,
    daysSinceActive: daysSince(lastActiveAt, facts.now),
    accuracy: accuracyOf(
      accuracyRows.filter((a) => a.isCorrect).length,
      accuracyRows.length,
      attempts.length > 0 ? "graded listening answers" : "graded listening exercises",
    ),
    completion: { done: completed, total: listeningActivities.length, label: "listening activities completed" },
    trend: trendFrom(recent, prior),
    strengths,
    focus,
    notes: [],
  };
}

function speakingProfile(facts: ProgressFacts): SkillProfile {
  const attempts = facts.speakingAttempts;
  const conversations = facts.conversationsCompleted;
  const pronunciation = facts.pronunciationAttempts;
  // Lesson speak-response exercises are verified speaking practice too.
  const exercises = facts.exerciseAttempts.filter((a) => a.skill === "speaking");
  const completed = facts.speakingProgress.filter((p) => p.completedAt).length;
  const tasksPassed = facts.speakingProgress.reduce((sum, p) => sum + p.tasksPassedCount, 0);
  const lastActiveAt = lastOf([
    attempts[attempts.length - 1]?.createdAt ?? null,
    conversations[conversations.length - 1]?.completedAt ?? null,
    pronunciation[pronunciation.length - 1]?.createdAt ?? null,
    exercises[exercises.length - 1]?.createdAt ?? null,
  ]);
  const practiceMs = attempts.reduce((sum, a) => sum + a.durationMs, 0);
  const practiceEvents = attempts.length + conversations.length + pronunciation.length + exercises.length;

  // Trend on the measured rubric score (clearly labelled — not "accuracy").
  const scoreRows = attempts.map((a) => ({ at: a.createdAt, correct: a.score >= 70 }));
  const { recent, prior } = windowStats(scoreRows, facts.now);
  const trend = trendFrom(recent, prior, 3, 3);

  const strengths: string[] = [];
  if (tasksPassed > 0) strengths.push(`${tasksPassed} speaking task${tasksPassed === 1 ? "" : "s"} passed`);
  if (conversations.length > 0) strengths.push(`${conversations.length} conversation${conversations.length === 1 ? "" : "s"} finished`);
  if (practiceMs >= 60_000) strengths.push(`${Math.round(practiceMs / 60_000)} min of recorded practice`);
  const focus: string[] = [];
  const unpassed = facts.speakingProgress.filter((p) => !p.completedAt && p.tasksPassedCount > 0).length;
  if (unpassed > 0) focus.push(`${unpassed} activit${unpassed === 1 ? "y" : "ies"} with tasks still to pass`);

  return {
    skill: "speaking",
    label: SKILL_LABELS.speaking,
    status: statusFor(practiceEvents, lastActiveAt, facts.now),
    practiceEvents,
    lastActiveAt: lastActiveAt?.toISOString() ?? null,
    daysSinceActive: daysSince(lastActiveAt, facts.now),
    // Deliberately null: speaking scores are transcript-based, not graded
    // accuracy — presenting them as "accuracy" would mislead.
    accuracy: null,
    completion: { done: completed, total: speakingActivities.length, label: "speaking activities completed" },
    trend,
    strengths,
    focus,
    notes: [
      "Speaking scores compare what a recogniser heard with the target — they are not pronunciation grades, and accents are not penalised.",
    ],
  };
}

function writingProfile(facts: ProgressFacts): SkillProfile {
  const submissions = facts.writingSubmissions;
  // Lesson write-response exercises are verified writing practice too.
  const exercises = facts.exerciseAttempts.filter((a) => a.skill === "writing");
  const completed = facts.writingProgress.filter((p) => p.completedAt).length;
  const lastActiveAt = lastOf([
    submissions[submissions.length - 1]?.createdAt ?? null,
    exercises[exercises.length - 1]?.createdAt ?? null,
    facts.writingProgress[0]?.completedAt ?? null,
    facts.writingProgress[0]?.updatedAt ?? null,
  ]);

  // Improvement: first vs latest submission per assignment.
  const byAssignment = new Map<string, typeof submissions>();
  for (const s of submissions) {
    const list = byAssignment.get(s.assignmentId) ?? [];
    list.push(s);
    byAssignment.set(s.assignmentId, list);
  }
  let improved = 0;
  let bestDelta = 0;
  for (const list of byAssignment.values()) {
    if (list.length < 2) continue;
    const sorted = [...list].sort((a, b) => a.version - b.version);
    const delta = Math.round(sorted[sorted.length - 1].overall - sorted[0].overall);
    if (delta > 0) improved += 1;
    if (delta > bestDelta) bestDelta = delta;
  }

  // Trend on the rubric score.
  const scoreRows = submissions.map((s) => ({ at: s.createdAt, correct: s.passed }));
  const { recent, prior } = windowStats(scoreRows, facts.now);
  const trend = trendFrom(recent, prior, 2, 2);

  const strengths: string[] = [];
  if (improved > 0) strengths.push(`${improved} assignment${improved === 1 ? "" : "s"} improved across versions (best gain +${bestDelta})`);
  if (submissions.length > 0) {
    const words = submissions.reduce((sum, s) => sum + s.wordCount, 0);
    strengths.push(`${words.toLocaleString("en")} words submitted in total`);
  }
  const focus: string[] = [];
  const belowThreshold = facts.writingProgress.filter((p) => !p.completedAt && p.submissionsCount > 0).length;
  if (belowThreshold > 0) {
    focus.push(`${belowThreshold} assignment${belowThreshold === 1 ? "" : "s"} below the pass threshold — feedback is waiting`);
  }

  return {
    skill: "writing",
    label: SKILL_LABELS.writing,
    status: statusFor(submissions.length + exercises.length, lastActiveAt, facts.now),
    practiceEvents: submissions.length + exercises.length,
    lastActiveAt: lastActiveAt?.toISOString() ?? null,
    daysSinceActive: daysSince(lastActiveAt, facts.now),
    // Deliberately null: writing is graded on a rubric, not right/wrong.
    accuracy: null,
    completion: { done: completed, total: writingAssignments.length, label: "writing assignments completed" },
    trend,
    strengths,
    focus,
    notes: [
      "Writing scores come from the 10-dimension rubric. They are separate from your exercise accuracy and are never averaged into it.",
    ],
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function buildSkillProfiles(facts: ProgressFacts): SkillProfile[] {
  const builders: Record<ProgressSkill, (f: ProgressFacts) => SkillProfile> = {
    vocabulary: vocabularyProfile,
    grammar: grammarProfile,
    reading: readingProfile,
    listening: listeningProfile,
    speaking: speakingProfile,
    writing: writingProfile,
  };
  return PROGRESS_SKILLS.map((skill) => builders[skill](facts));
}

/** Practice-mix radar data: share of learning points per skill (not ability). */
export function practiceMix(facts: ProgressFacts): { skill: ProgressSkill; label: string; points: number }[] {
  const totals = new Map<ProgressSkill, number>();
  for (const event of facts.events) {
    if (event.skill) totals.set(event.skill, (totals.get(event.skill) ?? 0) + event.points);
  }
  return PROGRESS_SKILLS.map((skill) => ({
    skill,
    label: SKILL_LABELS[skill],
    points: totals.get(skill) ?? 0,
  }));
}
