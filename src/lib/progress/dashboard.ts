/**
 * Student dashboard service (PROMPT 33) — the personal learning workspace.
 *
 * One orchestration point behind GET /api/progress/dashboard. It composes
 * the verified-activity pipeline (facts → skills → revision →
 * recommendations → achievements) with the catalogue (learning-path progress)
 * and live lesson rows (continue-learning context), then derives the daily
 * plan and notifications. Every value is computed — nothing is invented,
 * and "done" plan items always trace to a verified event from today.
 */

import { db } from "@/lib/db";
import { getCurriculumPath, getLesson, levels } from "@/data/curriculum";
import { buildCatalogue } from "@/lib/catalogue/service";
import type {
  AchievementView,
  ProgressSkill,
  Recommendation,
} from "@/data/progress";
import type {
  ContinueTarget,
  DashboardDto,
  DashboardLevel,
  DashboardNotificationItem,
  DashboardPath,
  DashboardPathStep,
  DashboardStreak,
  DashboardTarget,
  NextUpTarget,
  TodayPlanItem,
} from "@/data/progress/dashboard";
import { collectFacts } from "./facts";
import { buildSkillProfiles } from "./skills";
import { buildRevisionPlan } from "./revision";
import { buildRecommendations } from "./recommendations";
import { evaluateAchievements } from "./service";

// ---------------------------------------------------------------------------
// Continue learning — resume EXACTLY where the learner left off
// ---------------------------------------------------------------------------

/** curriculum slug → { level, unit } context. */
function locateCurriculumLesson(slug: string) {
  for (const level of levels) {
    for (const unit of level.units) {
      if (unit.lessonSlugs.includes(slug)) {
        return { level, unit };
      }
    }
  }
  return null;
}

async function buildContinueTarget(userId: string): Promise<ContinueTarget | null> {
  const [curriculumRows, cmsRows] = await Promise.all([
    db.lessonProgress.findMany({
      where: { userId, status: "in-progress" },
      orderBy: { updatedAt: "desc" },
    }),
    db.cmsLessonProgress.findMany({
      where: { userId, status: "in-progress" },
      orderBy: { updatedAt: "desc" },
      include: {
        lesson: {
          include: { unit: { include: { module: { include: { course: true } } } } },
        },
      },
    }),
  ]);

  type Candidate = { target: ContinueTarget; updatedAt: Date };
  const candidates: Candidate[] = [];

  for (const row of curriculumRows) {
    const lesson = getLesson(row.lessonSlug);
    const location = locateCurriculumLesson(row.lessonSlug);
    if (!lesson || !location) continue;
    let sectionsDone = 0;
    try {
      sectionsDone = (JSON.parse(row.sectionsCompleted) as string[]).length;
    } catch {
      sectionsDone = 0;
    }
    const sectionsTotal = lesson.sections.length;
    candidates.push({
      updatedAt: row.updatedAt,
      target: {
        source: "curriculum",
        contextTitle: location.level.name,
        contextHref: `#/library/${location.level.id}`,
        chapterTitle: `Unit ${location.unit.number} · ${location.unit.title}`,
        lessonTitle: lesson.title,
        lessonHref: `#/lesson/${row.lessonSlug}`,
        progressLabel: `${sectionsDone} of ${sectionsTotal} sections`,
        progressPct: sectionsTotal > 0 ? Math.round((sectionsDone / sectionsTotal) * 100) : null,
        updatedISO: row.updatedAt.toISOString(),
        estimatedMinutes: lesson.estimatedMinutes ?? null,
      },
    });
  }

  for (const row of cmsRows) {
    const { lesson } = row;
    if (!lesson.live) continue;
    const course = lesson.unit.module.course;
    if (!course.live) continue;
    candidates.push({
      updatedAt: row.updatedAt,
      target: {
        source: "cms",
        contextTitle: course.title,
        contextHref: `#/course/${course.slug}`,
        chapterTitle: lesson.unit.title,
        lessonTitle: lesson.title,
        lessonHref: `#/course-lesson/${lesson.slug}`,
        progressLabel: "Opened — exercises still to finish",
        progressPct: null,
        updatedISO: row.updatedAt.toISOString(),
        estimatedMinutes: lesson.estimatedMinutes ?? null,
      },
    });
  }

  if (candidates.length === 0) return null;
  candidates.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
  return candidates[0].target;
}

// ---------------------------------------------------------------------------
// Working level — position on the curriculum path (never a certified level)
// ---------------------------------------------------------------------------

function buildLevelSummary(
  completedSlugs: Set<string>,
  startedSlugs: Set<string>,
): DashboardLevel {
  const path = getCurriculumPath();
  let working: { name: string; done: number; total: number } | null = null;

  for (const level of levels) {
    const slugs = level.units.flatMap((u) => u.lessonSlugs);
    if (slugs.length === 0) continue; // A2 "coming soon" has no lessons yet
    const done = slugs.filter((s) => completedSlugs.has(s)).length;
    const started = slugs.some((s) => startedSlugs.has(s));
    if (done < slugs.length) {
      // First incomplete level that has activity — otherwise keep the very
      // first level as the starting point for brand-new learners.
      if (done > 0 || started) {
        working = { name: level.name, done, total: slugs.length };
        break;
      }
      working ??= { name: level.name, done, total: slugs.length };
    }
  }
  working ??= {
    name: levels[levels.length - 1]?.name ?? "Curriculum complete",
    done: 1,
    total: 1,
  };

  const completedTotal = path.filter((s) => completedSlugs.has(s)).length;
  return {
    label: working.name,
    detail:
      completedTotal === 0
        ? "Your journey starts at the very beginning"
        : `${working.done} of ${working.total} lessons completed in this level`,
    basis: "Based on lessons you have completed — not a certified exam level.",
    lessonsCompleted: completedTotal,
    lessonsTotal: path.length,
  };
}

// ---------------------------------------------------------------------------
// Active learning path (§3) — visual progression with real completion
// ---------------------------------------------------------------------------

function stepLessonsCompleted(step: {
  chapters: { lessons: { completion: string | null }[] }[] | null;
}) {
  return (
    step.chapters?.reduce(
      (sum, c) => sum + c.lessons.filter((l) => l.completion === "completed").length,
      0,
    ) ?? 0
  );
}

function pickActivePath(
  paths: Awaited<ReturnType<typeof buildCatalogue>>["paths"],
): DashboardPath | null {
  if (paths.length === 0) return null;

  // Active path = the one with the most completed lessons; ties prefer the
  // featured flagship, then declaration order. New learners get the flagship.
  const chosen = paths
    .map((p, index) => ({
      p,
      index,
      score: p.progress?.completed ?? -1,
      featured: p.featured ? 1 : 0,
    }))
    .sort((a, b) => b.score - a.score || b.featured - a.featured || a.index - b.index)[0].p;

  const contentSteps = chosen.steps.filter((s) => s.kind !== "practice");
  const allContentDone =
    contentSteps.length > 0 &&
    contentSteps.every(
      (s) => s.lessonCount > 0 && stepLessonsCompleted(s) >= s.lessonCount,
    );

  let activeAssigned = false;
  const steps: DashboardPathStep[] = chosen.steps.map((step) => {
    if (step.kind === "practice") {
      return {
        id: `${chosen.id}:${step.title}`,
        title: step.title,
        description: step.description,
        kind: step.kind,
        optional: true,
        href: step.href,
        // Optional reinforcement — becomes the active focus only when every
        // content step is already complete.
        status: allContentDone && !activeAssigned ? "active" : "optional",
        completedLessons: 0,
        totalLessons: 0,
      };
    }
    const completed = stepLessonsCompleted(step);
    const done = step.lessonCount > 0 && completed >= step.lessonCount;
    let status: DashboardPathStep["status"];
    if (done) {
      status = "completed";
    } else if (!activeAssigned) {
      // The first unfinished content step is where the learner works now.
      status = "active";
      activeAssigned = true;
    } else {
      status = "upcoming";
    }
    return {
      id: `${chosen.id}:${step.title}`,
      title: step.title,
      description: step.description,
      kind: step.kind,
      optional: false,
      href: step.href,
      status,
      completedLessons: completed,
      totalLessons: step.lessonCount,
    };
  });

  const completedLessons = chosen.progress?.completed ?? 0;
  const totalLessons = chosen.progress?.total ?? chosen.lessonCount;
  return {
    id: chosen.id,
    title: chosen.title,
    href: chosen.href,
    steps,
    completedLessons,
    totalLessons,
    pct: totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0,
  };
}

// ---------------------------------------------------------------------------
// Today's learning plan (§4) — verified done-states only
// ---------------------------------------------------------------------------

const SKILL_HUBS: Record<ProgressSkill, { href: string; place: string }> = {
  vocabulary: { href: "#/vocabulary/today", place: "Word World" },
  grammar: { href: "#/grammar", place: "Grammar School" },
  reading: { href: "#/reading", place: "Reading Room" },
  listening: { href: "#/listening", place: "Listening Lab" },
  speaking: { href: "#/speaking", place: "Speaking Lab" },
  writing: { href: "#/writing", place: "Writing Studio" },
};

function buildTodayPlan(
  facts: Awaited<ReturnType<typeof collectFacts>>,
  recommendations: Recommendation[],
  continueTarget: ContinueTarget | null,
  nextUp: NextUpTarget | null,
): { items: TodayPlanItem[]; note: string | null } {
  const items: TodayPlanItem[] = [];
  const today = facts.now.toISOString().slice(0, 10);
  const todayEvents = facts.events.filter((e) => e.at.toISOString().slice(0, 10) === today);
  const eventsTodayFor = (skill: ProgressSkill) =>
    todayEvents.filter((e) => e.skill === skill);
  const completedLessonToday = todayEvents.some((e) => e.source === "lesson-completed");

  // 1 — Continue / start the current lesson (always first).
  if (continueTarget) {
    items.push({
      id: "plan-continue",
      category: "continue",
      title: `Finish: ${continueTarget.lessonTitle}`,
      detail: `${continueTarget.progressLabel} in ${continueTarget.chapterTitle}`,
      href: continueTarget.lessonHref,
      done: false,
      doneLabel: null,
      estimatedMinutes: Math.max(
        5,
        continueTarget.estimatedMinutes !== null
          ? Math.round(continueTarget.estimatedMinutes * 0.5)
          : 10,
      ),
    });
  } else if (completedLessonToday && nextUp) {
    items.push({
      id: "plan-next-lesson",
      category: "continue",
      title: `Lesson done — next up: ${nextUp.title}`,
      detail: "You already completed a lesson today. This one is ready when you are.",
      href: nextUp.href,
      done: true,
      doneLabel: "Lesson completed today",
      estimatedMinutes: null,
    });
  } else if (nextUp) {
    items.push({
      id: "plan-start-lesson",
      category: "continue",
      title: `Learn one lesson: ${nextUp.title}`,
      detail: nextUp.reason,
      href: nextUp.href,
      done: false,
      doneLabel: null,
      estimatedMinutes: 15,
    });
  }

  // 2 — Vocabulary (spaced repetition is the daily backbone).
  const dueNow = facts.vocabWords.filter(
    (w) => w.dueAt !== null && w.dueAt.getTime() <= facts.now.getTime(),
  ).length;
  const reviewsToday = facts.vocabGradedReviews.filter(
    (r) => r.createdAt.toISOString().slice(0, 10) === today,
  ).length;
  const newWordsToday = facts.vocabWords.filter(
    (w) => w.firstSeenAt.toISOString().slice(0, 10) === today,
  ).length;
  if (dueNow > 0) {
    items.push({
      id: "plan-vocab-review",
      category: "vocabulary",
      title: `Review ${dueNow} due word${dueNow === 1 ? "" : "s"}`,
      detail: "Spaced repetition — reviewing near the due date moves words into long-term memory.",
      href: "#/vocabulary/today",
      done: false,
      doneLabel: null,
      estimatedMinutes: Math.min(15, Math.max(3, dueNow)),
    });
  } else if (reviewsToday > 0 || newWordsToday > 0) {
    items.push({
      id: "plan-vocab-done",
      category: "vocabulary",
      title: "Vocabulary practised today",
      detail: `${reviewsToday} review${reviewsToday === 1 ? "" : "s"} and ${newWordsToday} new word${newWordsToday === 1 ? "" : "s"} so far — nothing is due right now.`,
      href: "#/vocabulary/today",
      done: true,
      doneLabel: "Reviews completed today",
      estimatedMinutes: null,
    });
  } else if (facts.vocabWords.length === 0) {
    items.push({
      id: "plan-vocab-first",
      category: "vocabulary",
      title: "Learn your first words",
      detail: "Start with a small batch — daily short sessions beat cramming.",
      href: "#/vocabulary/today",
      done: false,
      doneLabel: null,
      estimatedMinutes: 5,
    });
  } else {
    items.push({
      id: "plan-vocab-grow",
      category: "vocabulary",
      title: "Learn a few new words",
      detail: `Nothing is due — grow beyond the ${facts.vocabWords.length} words you know.`,
      href: "#/vocabulary/today",
      done: false,
      doneLabel: null,
      estimatedMinutes: 5,
    });
  }

  // 3 — Grammar: the engine's targeted grammar recommendation.
  const grammarRec = recommendations.find((r) => r.kind === "grammar-practice");
  if (grammarRec) {
    const grammarDone = eventsTodayFor("grammar").length > 0;
    items.push({
      id: "plan-grammar",
      category: "grammar",
      title: grammarRec.title,
      detail: grammarRec.purpose,
      href: grammarRec.href,
      done: grammarDone,
      doneLabel: grammarDone ? "Grammar practice done today" : null,
      estimatedMinutes: 10,
    });
  }

  // 4 — One skill activity for the most neglected skill (real hub href).
  const skillActivity: Record<ProgressSkill, number> = {
    vocabulary: facts.vocabGradedReviews.length,
    grammar: facts.exerciseAttempts.filter((a) => a.skill === "grammar").length,
    reading: facts.readingAttempts.length,
    listening: facts.listeningAttempts.length,
    speaking:
      facts.speakingAttempts.length +
      facts.conversationsCompleted.length +
      facts.pronunciationAttempts.length,
    writing: facts.writingSubmissions.length,
  };
  const PRODUCTIVE_FIRST: ProgressSkill[] = [
    "speaking",
    "listening",
    "reading",
    "writing",
  ];
  const neglected = PRODUCTIVE_FIRST.map((skill) => ({
    skill,
    events: skillActivity[skill],
    today: eventsTodayFor(skill).length,
  })).sort((a, b) => a.events - b.events || a.today - b.today)[0];
  if (neglected && neglected.events < 12) {
    const hub = SKILL_HUBS[neglected.skill];
    const verbs: Record<string, { title: string; detail: string; minutes: number }> = {
      speaking: {
        title: "Speak for five minutes",
        detail: "Record answers in the Speaking Lab or finish a role-play — out loud is what makes it stick.",
        minutes: 5,
      },
      listening: {
        title: "Practise listening",
        detail: "One short activity in the Listening Lab trains your ear for real speech.",
        minutes: 10,
      },
      reading: {
        title: "Complete a reading activity",
        detail: "A short text with comprehension questions in the Reading Room.",
        minutes: 10,
      },
      writing: {
        title: "Write a short paragraph",
        detail: "Draft and submit in the Writing Studio — structured feedback on every dimension.",
        minutes: 15,
      },
    };
    const verb = verbs[neglected.skill];
    const recForSkill = recommendations.find(
      (r) =>
        (neglected.skill === "speaking" && r.kind === "speaking-challenge") ||
        (neglected.skill === "writing" && r.kind === "writing-assignment") ||
        (neglected.skill === "grammar" && r.kind === "grammar-practice"),
    );
    items.push({
      id: `plan-skill-${neglected.skill}`,
      category: neglected.skill,
      title: verb.title,
      detail: verb.detail,
      href: recForSkill?.href ?? hub.href,
      done: neglected.today > 0,
      doneLabel: neglected.today > 0 ? `${hub.place} activity done today` : null,
      estimatedMinutes: verb.minutes,
    });
  }

  const itemsCapped = items.slice(0, 6);
  // New learners get a warm, honest note — the plan fills in with activity.
  const note =
    facts.pointsTotal === 0 && facts.lessonsCompletedCount === 0
      ? "Your plan grows with you — finish your first lesson and it fills in automatically."
      : null;
  return { items: itemsCapped, note };
}

// ---------------------------------------------------------------------------
// Notifications (§1) — computed, never decorative
// ---------------------------------------------------------------------------

async function buildNotifications(
  userId: string,
  achievementViews: AchievementView[],
  facts: Awaited<ReturnType<typeof collectFacts>>,
  revisionDueCount: number,
): Promise<DashboardNotificationItem[]> {
  const notifications: DashboardNotificationItem[] = [];

  const unseen = achievementViews.filter((a) => a.unlocked && !a.seen);
  if (unseen.length > 0) {
    notifications.push({
      id: "notif-achievements",
      kind: "achievements",
      title: `${unseen.length} new achievement${unseen.length === 1 ? "" : "s"} to see`,
      detail: unseen
        .slice(0, 3)
        .map((a) => a.title)
        .join(", "),
      href: "#/progress/awards",
    });
  }

  if (revisionDueCount > 0) {
    notifications.push({
      id: "notif-revision",
      kind: "revision",
      title: `${revisionDueCount} item${revisionDueCount === 1 ? "" : "s"} due for revision`,
      detail: "Short scheduled sessions keep earlier work fresh.",
      href: "#/progress/revision",
    });
  }

  const vocabDue = facts.vocabWords.filter(
    (w) => w.dueAt !== null && w.dueAt.getTime() <= facts.now.getTime(),
  ).length;
  if (vocabDue > 0) {
    notifications.push({
      id: "notif-vocab",
      kind: "vocabulary",
      title: `${vocabDue} word${vocabDue === 1 ? "" : "s"} ready for review`,
      detail: "A few minutes in Word World clears the queue.",
      href: "#/vocabulary/today",
    });
  }

  const stalled = facts.writingProgress.find(
    (p) => !p.completedAt && p.submissionsCount > 0,
  );
  if (stalled) {
    notifications.push({
      id: "notif-writing",
      kind: "writing",
      title: `Feedback waiting on “${stalled.title}”`,
      detail: `Your last version scored ${Math.round(stalled.bestScore * 100)}% — revise it with the feedback.`,
      href: "#/writing",
    });
  }

  return notifications.slice(0, 4);
}

// ---------------------------------------------------------------------------
// Next up (§2 secondary) — what follows the current work
// ---------------------------------------------------------------------------

function buildNextUp(
  facts: Awaited<ReturnType<typeof collectFacts>>,
  recommendations: Recommendation[],
): NextUpTarget | null {
  const completedSlugs = new Set(
    facts.lessons.filter((l) => l.completedAt).map((l) => l.slug),
  );
  const nextSlug = getCurriculumPath().find((slug) => !completedSlugs.has(slug));
  const lesson = nextSlug ? getLesson(nextSlug) : undefined;
  if (lesson) {
    const location = levels
      .flatMap((l) => l.units.flatMap((u) => u.lessonSlugs.map((s) => ({ l, s }))))
      .find((x) => x.s === lesson.slug);
    return {
      title: lesson.title,
      href: `#/lesson/${lesson.slug}`,
      levelLabel: location?.l.name ?? null,
      reason:
        completedSlugs.size === 0
          ? "The first lesson on your learning path — no English needed to start."
          : `The next lesson on your path — it builds on the ${completedSlugs.size} lesson${completedSlugs.size === 1 ? "" : "s"} you have completed.`,
    };
  }
  // Curriculum path complete — surface the strongest recommendation instead.
  const rec = recommendations.find((r) => r.kind !== "revision");
  if (rec) {
    return { title: rec.title, href: rec.href, levelLabel: null, reason: rec.purpose };
  }
  return null;
}

// ---------------------------------------------------------------------------
// Main builder
// ---------------------------------------------------------------------------

export async function buildDashboard(userId: string): Promise<DashboardDto> {
  const [facts, user] = await Promise.all([
    collectFacts(userId),
    db.user.findUnique({ where: { id: userId }, select: { name: true } }),
  ]);

  const [skills, revision, achievementViews, catalogue] = await Promise.all([
    buildSkillProfiles(facts),
    buildRevisionPlan(facts),
    evaluateAchievements(userId, facts),
    buildCatalogue(userId),
  ]);
  const recommendations = buildRecommendations(facts, revision);

  const completedSlugs = new Set(
    facts.lessons.filter((l) => l.completedAt).map((l) => l.slug),
  );
  const startedSlugs = new Set(facts.lessons.map((l) => l.slug));

  const [continueTarget] = await Promise.all([buildContinueTarget(userId)]);
  const nextUp = buildNextUp(facts, recommendations);
  const path = pickActivePath(catalogue.paths);
  const plan = buildTodayPlan(facts, recommendations, continueTarget, nextUp);
  const notifications = await buildNotifications(
    userId,
    achievementViews,
    facts,
    revision.counts.due,
  );

  const todayKey = facts.now.toISOString().slice(0, 10);
  const activeToday = facts.streak.lastActiveDay === todayKey;
  const streak: DashboardStreak = {
    current: facts.streak.current,
    longest: facts.streak.longest,
    activeToday,
    note: activeToday
      ? facts.streak.current === 1
        ? "First day of a new streak — see you tomorrow."
        : "Practised today — this streak is safe."
      : facts.streak.current > 0
        ? "One short activity today extends the streak. Skip it? Nothing is lost."
        : "Learn on any two consecutive days to start a streak.",
  };

  const target: DashboardTarget = {
    dailyPoints: facts.goals.dailyPoints,
    todayPoints: facts.pointsToday,
    weeklyPoints: facts.goals.weeklyPoints,
    weekPoints: facts.pointsThisWeek,
    metToday: facts.pointsToday >= facts.goals.dailyPoints,
  };

  // Milestones: recently unlocked first, then the locked ones closest to
  // completion — a "first 100 words 62/100" card motivates; a distant
  // "0/250 correct" one does not.
  const milestones = achievementViews.filter((a) => a.kind === "milestone");
  const unlockedMilestones = milestones
    .filter((m) => m.unlocked)
    .sort((a, b) => (b.unlockedAt ?? "").localeCompare(a.unlockedAt ?? ""));
  const lockedMilestones = milestones
    .filter((m) => !m.unlocked)
    .sort((a, b) => {
      const pa = mRatio(a);
      const pb = mRatio(b);
      return pb - pa;
    });
  const topMilestones = [...unlockedMilestones, ...lockedMilestones].slice(0, 6);

  return {
    fetchedAt: facts.now.toISOString(),
    learner: { name: user?.name ?? null },
    level: buildLevelSummary(completedSlugs, startedSlugs),
    streak,
    target,
    notifications,
    continue: continueTarget,
    nextUp,
    path,
    plan: plan.items,
    planNote: plan.note,
    skills,
    recentActivity: [...facts.events]
      .slice(-12)
      .reverse()
      .map((event) => ({
        at: event.at.toISOString(),
        label: event.label,
        points: event.points,
        skill: event.skill,
      })),
    recommendations: recommendations.slice(0, 4),
    milestones: topMilestones,
    achievements: {
      unlocked: achievementViews.filter((a) => a.unlocked).length,
      total: achievementViews.length,
      unseen: achievementViews.filter((a) => a.unlocked && !a.seen).length,
    },
  };
}

function mRatio(a: AchievementView): number {
  if (!a.progress) return -1;
  return a.progress.current / Math.max(1, a.progress.target);
}
