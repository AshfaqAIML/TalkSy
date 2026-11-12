/**
 * Progression service — one orchestration point for the analytics dashboard.
 *
 * GET /api/progression/overview is computed here:
 *   facts (verified activity) → skill profiles + revision plan +
 *   recommendations + achievements (persisted unlocks) + certificates.
 *
 * Writes are idempotent: unlock/certificate rows are created once and keep
 * their original earned-at dates. Goals and confidence are the only
 * learner-set inputs, and they never affect measured performance.
 */

import { randomBytes } from "node:crypto";
import { db } from "@/lib/db";
import { getLesson, getCurriculumPath } from "@/data/curriculum";
import {
  achievements,
  courseCompletion,
  courses,
  getAchievement,
  type AchievementView,
  type ActivityFeedItem,
  type CertificateDto,
  type CertificateProgress,
  type ProgressOverviewDto,
  type RevisionPlan,
  type WritingAssignmentProgression,
} from "@/data/progress";
import { collectFacts } from "./facts";
import { buildSkillProfiles } from "./skills";
import { buildRevisionPlan } from "./revision";
import { buildRecommendations } from "./recommendations";

// ---------------------------------------------------------------------------
// Achievements
// ---------------------------------------------------------------------------

async function evaluateAchievements(userId: string, facts: Awaited<ReturnType<typeof collectFacts>>) {
  const existing = await db.achievementUnlock.findMany({ where: { userId } });
  const byId = new Map(existing.map((row) => [row.achievementId, row]));

  const views: AchievementView[] = [];
  for (const def of achievements) {
    const state = def.verify(facts);
    const row = byId.get(def.id);
    if (state.unlocked && !row) {
      // First evaluation that sees the requirement met — persist the REAL
      // earned date derived from the qualifying event.
      const created = await db.achievementUnlock.create({
        data: {
          userId,
          achievementId: def.id,
          unlockedAt: state.unlockedAt ? new Date(state.unlockedAt) : new Date(),
        },
      });
      byId.set(def.id, created);
    }
    const unlockRow = byId.get(def.id);
    const unlocked = Boolean(unlockRow) || state.unlocked;
    views.push({
      id: def.id,
      kind: def.kind,
      title: def.title,
      description: def.description,
      requirement: def.requirement,
      category: def.category,
      icon: def.icon,
      unlocked,
      unlockedAt: unlockRow?.unlockedAt.toISOString() ?? state.unlockedAt,
      seen: Boolean(unlockRow?.seenAt),
      progress: unlocked ? null : state.progress,
    });
  }
  return views;
}

// ---------------------------------------------------------------------------
// Certificates
// ---------------------------------------------------------------------------

function certificateCode(): string {
  return `TSY-${randomBytes(4).toString("hex").toUpperCase()}`;
}

async function issueCertificates(userId: string, completedSlugs: Set<string>) {
  const existing = await db.certificate.findMany({ where: { userId } });
  const existingIds = new Set(existing.map((c) => c.courseId));

  for (const course of courses) {
    const completion = courseCompletion(course, completedSlugs);
    if (!completion.done || existingIds.has(course.id)) continue;
    let issued = false;
    for (let attempt = 0; attempt < 3 && !issued; attempt++) {
      try {
        await db.certificate.create({
          data: {
            userId,
            courseId: course.id,
            kind: course.kind,
            title: course.title,
            code: certificateCode(),
            lessonsCompleted: completion.completed,
          },
        });
        issued = true;
      } catch {
        // code collision — retry with a fresh code
      }
    }
  }

  const rows = await db.certificate.findMany({
    where: { userId },
    orderBy: { issuedAt: "desc" },
  });
  const earned: CertificateDto[] = rows.map((row) => ({
    id: row.id,
    courseId: row.courseId,
    kind: row.kind === "level" ? "level" : "unit",
    title: row.title,
    code: row.code,
    lessonsCompleted: row.lessonsCompleted,
    issuedAt: row.issuedAt.toISOString(),
  }));
  return earned;
}

function certificateProgress(completedSlugs: Set<string>): CertificateProgress[] {
  return courses
    .filter((course) => course.kind === "unit") // levels surface via their units
    .map((course) => {
      const completion = courseCompletion(course, completedSlugs);
      return {
        courseId: course.id,
        title: course.title,
        lessonsCompleted: completion.completed,
        lessonsTotal: completion.total,
      };
    })
    .filter((course) => course.lessonsCompleted > 0 && course.lessonsCompleted < course.lessonsTotal)
    .sort((a, b) => b.lessonsCompleted / b.lessonsTotal - a.lessonsCompleted / a.lessonsTotal)
    .slice(0, 4);
}

// ---------------------------------------------------------------------------
// Series
// ---------------------------------------------------------------------------

function writingProgression(facts: Awaited<ReturnType<typeof collectFacts>>): WritingAssignmentProgression[] {
  const byAssignment = new Map<string, typeof facts.writingSubmissions>();
  for (const submission of facts.writingSubmissions) {
    const list = byAssignment.get(submission.assignmentId) ?? [];
    list.push(submission);
    byAssignment.set(submission.assignmentId, list);
  }
  const out: WritingAssignmentProgression[] = [];
  for (const [assignmentId, list] of byAssignment) {
    const sorted = [...list].sort((a, b) => a.version - b.version);
    const first = sorted[0];
    const last = sorted[sorted.length - 1];
    out.push({
      assignmentId,
      title: first.title,
      firstScore: Math.round(first.overall),
      lastScore: Math.round(last.overall),
      delta: Math.round(last.overall - first.overall),
      submissions: sorted.map((s) => ({
        version: s.version,
        overall: Math.round(s.overall),
        passed: s.passed,
        at: s.createdAt.toISOString(),
      })),
    });
  }
  return out.sort((a, b) => b.submissions[b.submissions.length - 1].at.localeCompare(a.submissions[a.submissions.length - 1].at)).slice(0, 8);
}

function vocabularySummary(facts: Awaited<ReturnType<typeof collectFacts>>) {
  const statusCounts = { learning: 0, reviewing: 0, mastered: 0 };
  for (const word of facts.vocabWords) statusCounts[word.status] += 1;
  const reviews = facts.vocabGradedReviews;
  const correct = reviews.filter((r) => r.correct).length;
  return {
    statusCounts,
    dueNow: facts.vocabWords.filter((w) => w.dueAt !== null && w.dueAt.getTime() <= facts.now.getTime()).length,
    difficult: facts.vocabWords.filter((w) => w.isDifficult || w.lapses >= 2).length,
    retention: {
      pct: reviews.length > 0 ? Math.round((correct / reviews.length) * 100) : null,
      correct,
      total: reviews.length,
    },
  };
}

// ---------------------------------------------------------------------------
// Overview
// ---------------------------------------------------------------------------

export async function getProgressOverview(userId: string): Promise<ProgressOverviewDto> {
  const [facts, user] = await Promise.all([
    collectFacts(userId),
    db.user.findUnique({ where: { id: userId }, select: { name: true } }),
  ]);

  const [skills, revision, achievementViews] = await Promise.all([
    buildSkillProfiles(facts),
    buildRevisionPlan(facts),
    evaluateAchievements(userId, facts),
  ]);
  const recommendations = buildRecommendations(facts, revision);

  const completedSlugs = new Set(facts.lessons.filter((l) => l.completedAt).map((l) => l.slug));
  const certificatesEarned = await issueCertificates(userId, completedSlugs);

  const path = getCurriculumPath();
  const nextSlug = path.find((slug) => !completedSlugs.has(slug));
  const continueLesson = facts.lessons
    .filter((l) => !l.completedAt && l.sectionsDone > 0)
    .sort((a, b) => b.sectionsDone - a.sectionsDone || b.updatedAt.getTime() - a.updatedAt.getTime())[0];

  const todayKey = facts.now.toISOString().slice(0, 10);
  const streakNote =
    facts.streak.current === 0
      ? "Learn on any two consecutive days to start a streak. Missed days never remove points, badges or progress."
      : facts.streak.lastActiveDay === todayKey
        ? "Practised today — this streak is safe."
        : "Practised yesterday — one short activity today extends the streak. And if you skip it? Nothing is lost.";

  // Overall exercise accuracy: objectively graded answers only. Writing
  // exercises are excluded by design (rubric, not right/wrong) — the number
  // is labelled and never mixed with other scales.
  const gradedExercises = facts.exerciseAttempts.filter((a) => a.skill !== "writing");
  const exerciseBySkill: Record<string, { correct: number; total: number }> = {};
  for (const attempt of gradedExercises) {
    const bucket = exerciseBySkill[attempt.skill] ?? { correct: 0, total: 0 };
    bucket.total += 1;
    if (attempt.isCorrect) bucket.correct += 1;
    exerciseBySkill[attempt.skill] = bucket;
  }
  const exercisesCorrect = gradedExercises.filter((a) => a.isCorrect).length;

  const recentActivity: ActivityFeedItem[] = [...facts.events]
    .slice(-15)
    .reverse()
    .map((event) => ({
      at: event.at.toISOString(),
      label: event.label,
      points: event.points,
      skill: event.skill,
    }));

  const unlockedViews = achievementViews.filter((a) => a.unlocked);
  const recentUnlocks = [...unlockedViews]
    .sort((a, b) => (b.unlockedAt ?? "").localeCompare(a.unlockedAt ?? ""))
    .slice(0, 5);
  const milestones = achievementViews.filter((a) => a.kind === "milestone");

  return {
    fetchedAt: facts.now.toISOString(),
    learner: { name: user?.name ?? null },
    points: {
      total: facts.pointsTotal,
      today: facts.pointsToday,
      thisWeek: facts.pointsThisWeek,
      byDay: facts.dailyActivity,
    },
    goals: {
      dailyPoints: facts.goals.dailyPoints,
      weeklyPoints: facts.goals.weeklyPoints,
      todayProgress: facts.pointsToday,
      weekProgress: facts.pointsThisWeek,
    },
    streak: { ...facts.streak, streakNote },
    exercises: {
      correct: exercisesCorrect,
      total: gradedExercises.length,
      pct: gradedExercises.length > 0 ? Math.round((exercisesCorrect / gradedExercises.length) * 100) : null,
      bySkill: exerciseBySkill,
    },
    lessons: {
      completed: facts.lessonsCompletedCount,
      inProgress: facts.lessons.filter((l) => !l.completedAt).length,
      total: path.length,
      nextLesson: nextSlug
        ? { slug: nextSlug, title: getLesson(nextSlug)?.title ?? nextSlug }
        : null,
      continueLesson: continueLesson
        ? {
            slug: continueLesson.slug,
            title: continueLesson.title,
            sectionsDone: continueLesson.sectionsDone,
            sectionsTotal: continueLesson.sectionsTotal,
          }
        : null,
    },
    skills,
    series: {
      weekly: facts.weekly,
      writing: writingProgression(facts),
      vocabulary: vocabularySummary(facts),
    },
    recommendations,
    revision,
    achievements: {
      all: achievementViews,
      unlockedCount: unlockedViews.length,
      totalCount: achievementViews.length,
      milestoneCount: {
        unlocked: milestones.filter((m) => m.unlocked).length,
        total: milestones.length,
      },
      recentUnlocks,
      unseenCount: unlockedViews.filter((a) => !a.seen).length,
    },
    certificates: {
      earned: certificatesEarned,
      inProgress: certificateProgress(completedSlugs),
    },
    recentActivity,
  };
}

// ---------------------------------------------------------------------------
// Learner-set state
// ---------------------------------------------------------------------------

export const GOAL_LIMITS = { dailyMin: 10, dailyMax: 200, weeklyMin: 50, weeklyMax: 1000 };

export async function setGoals(
  userId: string,
  input: { dailyPoints?: unknown; weeklyPoints?: unknown },
): Promise<{ dailyPoints: number; weeklyPoints: number }> {
  const clamp = (value: unknown, min: number, max: number): number | null => {
    const num = typeof value === "number" ? value : Number(value);
    if (!Number.isFinite(num)) return null;
    return Math.round(Math.max(min, Math.min(max, num)));
  };
  const daily = input.dailyPoints === undefined ? undefined : clamp(input.dailyPoints, GOAL_LIMITS.dailyMin, GOAL_LIMITS.dailyMax);
  const weekly = input.weeklyPoints === undefined ? undefined : clamp(input.weeklyPoints, GOAL_LIMITS.weeklyMin, GOAL_LIMITS.weeklyMax);
  if (daily === null || weekly === null) {
    throw new Error("Goals must be numbers within the allowed range.");
  }

  const existing = await db.learnerGoals.findUnique({ where: { userId } });
  const data = {
    dailyPoints: daily ?? existing?.dailyPoints ?? 30,
    weeklyPoints: weekly ?? existing?.weeklyPoints ?? 150,
  };
  if (existing) {
    await db.learnerGoals.update({ where: { userId }, data });
  } else {
    await db.learnerGoals.create({ data: { userId, ...data } });
  }
  return data;
}

export async function setConfidence(
  userId: string,
  lessonSlug: string,
  confidence: number,
): Promise<void> {
  if (!getLesson(lessonSlug)) throw new Error("Unknown lesson.");
  const value = Math.round(confidence);
  if (!Number.isInteger(value) || value < 1 || value > 5) {
    throw new Error("Confidence must be between 1 and 5.");
  }
  await db.lessonConfidence.upsert({
    where: { userId_lessonSlug: { userId, lessonSlug } },
    create: { userId, lessonSlug, confidence: value },
    update: { confidence: value },
  });
}

export async function markAchievementsSeen(
  userId: string,
  ids: string[],
): Promise<void> {
  const valid = ids.filter((id) => getAchievement(id) !== undefined);
  if (valid.length === 0) return;
  await db.achievementUnlock.updateMany({
    where: { userId, achievementId: { in: valid }, seenAt: null },
    data: { seenAt: new Date() },
  });
}

/** Revision plan alone (used by tests and future module integrations). */
export async function getRevisionPlan(userId: string): Promise<RevisionPlan> {
  const facts = await collectFacts(userId);
  return buildRevisionPlan(facts);
}
