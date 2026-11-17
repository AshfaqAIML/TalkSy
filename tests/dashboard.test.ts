/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { GET as dashboardRoute } from "@/app/api/progress/dashboard/route";
import { parseHash, routeToHash, type AppRoute } from "@/hooks/use-hash-route";
import { buildDashboard } from "@/lib/progress/dashboard";
import type { DashboardDto } from "@/data/progress/dashboard";
import { PrismaClient } from "@prisma/client";

const BASE = "http://127.0.0.1:3000";
const db = new PrismaClient();

function request(path: string, init: RequestInit = {}): Request {
  return new Request(`${BASE}${path}`, init);
}

function extractCookies(res: Response): string {
  const setCookie =
    typeof res.headers.getSetCookie === "function"
      ? res.headers.getSetCookie()
      : [res.headers.get("set-cookie") ?? ""].filter(Boolean);
  return setCookie.map((cookie: string) => cookie.split(";")[0]).join("; ");
}

let lastEmail = "";

async function registerTestUser(name = "Dashboard Learner"): Promise<string> {
  const { POST: registerRoute } = await import("@/app/api/auth/register/route");
  lastEmail = `dash-${Date.now()}-${Math.floor(Math.random() * 10000)}@talksy.test`;
  const res = await registerRoute(
    request("/api/auth/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: lastEmail, name, password: "password123" }),
    }),
  );
  expect(res.status).toBe(201);
  return extractCookies(res);
}

async function lastUserId(): Promise<string> {
  const user = await db.user.findUnique({ where: { email: lastEmail } });
  if (!user) throw new Error("test user vanished");
  return user.id;
}

async function getDashboard(cookie: string): Promise<DashboardDto> {
  const res = await dashboardRoute(
    request("/api/progress/dashboard", { headers: { cookie } }),
  );
  expect(res.status).toBe(200);
  return (await res.json()) as DashboardDto;
}

/** Every href the dashboard emits must be a real, round-trippable route. */
function expectValidHref(href: string) {
  expect(href.startsWith("#/")).toBe(true);
  const route = parseHash(href) as AppRoute;
  expect(route.name).not.toBe("home"); // silent home fallback = broken link
  expect(routeToHash(route)).toBe(href);
}

// ---------------------------------------------------------------------------
// Router
// ---------------------------------------------------------------------------

describe("dashboard — routing", () => {
  it("parses #/dashboard as its own workspace route", () => {
    expect(parseHash("#/dashboard")).toEqual({ name: "dashboard" });
    expect(parseHash("#/dashboard/")).toEqual({ name: "dashboard" });
    expect(routeToHash({ name: "dashboard" })).toBe("#/dashboard");
  });

  it("keeps #/progress as the separate analytics route", () => {
    expect(parseHash("#/progress")).toEqual({ name: "progress", tab: undefined });
    expect(parseHash("#/progress/skills")).toEqual({
      name: "progress",
      tab: "skills",
    });
  });
});

// ---------------------------------------------------------------------------
// API surface
// ---------------------------------------------------------------------------

describe("dashboard — API", () => {
  it("requires a session", async () => {
    const res = await dashboardRoute(request("/api/progress/dashboard"));
    expect(res.status).toBe(401);
  });

  it("returns an honest fresh-learner workspace", async () => {
    const cookie = await registerTestUser("Fresh Starter");
    const dto = await getDashboard(cookie);

    // §1 header — level is the honest starting point, not a fabricated level.
    expect(dto.learner.name).toBe("Fresh Starter");
    expect(dto.level.lessonsCompleted).toBe(0);
    expect(dto.level.label).toContain("Pre-A1");
    expect(dto.level.detail).toContain("starts at the very beginning");
    expect(dto.streak.current).toBe(0);
    expect(dto.streak.activeToday).toBe(false);
    expect(dto.target.dailyPoints).toBe(30);
    expect(dto.target.todayPoints).toBe(0);
    expect(dto.target.metToday).toBe(false);
    expect(dto.notifications).toEqual([]);

    // §2 — nothing in progress: an honest start state, not a fake resume.
    expect(dto.continue).toBeNull();
    expect(dto.nextUp).not.toBeNull();
    expect(dto.nextUp!.href).toBe("#/lesson/p1-1-1");
    expect(dto.nextUp!.reason.length).toBeGreaterThan(20);

    // §3 — the flagship path with zero progress.
    expect(dto.path).not.toBeNull();
    expect(dto.path!.pct).toBe(0);
    expect(dto.path!.totalLessons).toBeGreaterThan(0);
    const contentSteps = dto.path!.steps.filter((s) => s.kind !== "practice");
    expect(contentSteps.length).toBeGreaterThanOrEqual(3);
    expect(contentSteps[0].status).toBe("active"); // first step is where you start
    expect(contentSteps.slice(1).every((s) => s.status === "upcoming")).toBe(true);

    // §4 — the plan starts small and honest.
    expect(dto.plan.length).toBeGreaterThanOrEqual(2);
    for (const item of dto.plan) {
      expect(item.done).toBe(false); // nothing verified yet
      expectValidHref(item.href);
      expect(item.title.length).toBeGreaterThan(3);
    }
    expect(dto.planNote).not.toBeNull();

    // §5 — six honest skill profiles.
    expect(dto.skills).toHaveLength(6);
    for (const skill of dto.skills) {
      expect(skill.status).toBe("not-started");
      expect(skill.accuracy).toBeNull();
    }

    // §6 — no activity yet.
    expect(dto.recentActivity).toEqual([]);

    // §7 — recommendations always explain why.
    expect(dto.recommendations.length).toBeGreaterThan(0);
    for (const rec of dto.recommendations) {
      expect(rec.purpose.length).toBeGreaterThan(20);
      expectValidHref(rec.href);
    }

    // §8 — milestones present, locked, with real progress counters.
    expect(dto.achievements.unlocked).toBe(0);
    expect(dto.milestones.length).toBeGreaterThan(0);
    for (const m of dto.milestones) {
      expect(m.unlocked).toBe(false);
      expectValidHref("#/progress/awards");
    }
  });

  it("resumes a curriculum lesson with course, chapter and section context", async () => {
    await registerTestUser("Resume Learner");
    const userId = await lastUserId();
    // p1-1-1 completed, p1-1-2 half-done.
    await db.lessonProgress.create({
      data: {
        userId,
        lessonSlug: "p1-1-1",
        status: "completed",
        sectionsCompleted: "[]",
        completedAt: new Date(),
      },
    });
    await db.lessonProgress.create({
      data: {
        userId,
        lessonSlug: "p1-1-2",
        status: "in-progress",
        sectionsCompleted: JSON.stringify(["word-list", "examples"]),
        lastSectionId: "examples",
      },
    });

    const dto = await buildDashboard(userId);

    // §2 — resume EXACTLY where they left off.
    expect(dto.continue).not.toBeNull();
    expect(dto.continue!.source).toBe("curriculum");
    expect(dto.continue!.contextTitle).toBe("Pre-A1 · First Words");
    expect(dto.continue!.contextHref).toBe("#/library/pre-a1");
    expect(dto.continue!.chapterTitle).toBe("Unit 1 · Hello, World!");
    expect(dto.continue!.lessonHref).toBe("#/lesson/p1-1-2");
    expect(dto.continue!.progressLabel).toBe("2 of 3 sections");
    expect(dto.continue!.progressPct).toBe(67);

    // nextUp moves past the completed lesson.
    expect(dto.nextUp!.href).toBe("#/lesson/p1-1-2");

    // §1 — the working level reflects one completed lesson.
    expect(dto.level.lessonsCompleted).toBe(1);
    expect(dto.level.detail).toContain("1 of");

    // §3 — the active path computes real progress from the same rows.
    expect(dto.path!.completedLessons).toBe(1);
    expect(dto.path!.pct).toBeGreaterThan(0);
    const firstStep = dto.path!.steps.find((s) => s.kind !== "practice")!;
    expect(firstStep.completedLessons).toBe(1);

    // §8 — First Lesson milestone unlocked by the verified completion.
    const firstLesson = dto.milestones.find((m) => m.id === "first-lesson");
    expect(firstLesson?.unlocked).toBe(true);

    // Every emitted href is a real route.
    expectValidHref(dto.continue!.lessonHref);
    expectValidHref(dto.continue!.contextHref);
    for (const step of dto.path!.steps) expectValidHref(step.href);
  });

  it("prefers the most recently touched lesson across curriculum and CMS", async () => {
    await registerTestUser("CMS Resume Learner");
    const userId = await lastUserId();

    // A live CMS course with one lesson, enrolled, opened more recently
    // than the curriculum lesson.
    const earlier = new Date(Date.now() - 3 * 60 * 60 * 1000);
    const later = new Date(Date.now() - 30 * 60 * 1000);
    const course = await db.cmsCourse.create({
      data: {
        slug: `dash-resume-${Date.now()}`,
        title: "Dashboard Resume Course",
        description: "Seeded for the dashboard test",
        status: "approved",
        live: true,
      },
    });
    const module_ = await db.cmsModule.create({
      data: { courseId: course.id, slug: `dash-mod-${Date.now()}`, title: "M1", order: 1 },
    });
    const unit = await db.cmsUnit.create({
      data: { moduleId: module_.id, slug: `dash-unit-${Date.now()}`, title: "Getting Started", order: 1 },
    });
    const lesson = await db.cmsLesson.create({
      data: {
        unitId: unit.id,
        slug: `dash-lesson-${Date.now()}`,
        title: "Seeded Dashboard Lesson",
        status: "approved",
        live: true,
        version: 1,
        publishedVersion: 1,
        publishedAt: new Date(),
      },
    });
    await db.cmsEnrolment.create({ data: { userId, courseId: course.id } });
    await db.lessonProgress.create({
      data: {
        userId,
        lessonSlug: "p1-1-1",
        status: "in-progress",
        sectionsCompleted: "[]",
        updatedAt: earlier,
      },
    });
    await db.cmsLessonProgress.create({
      data: { userId, lessonId: lesson.id, status: "in-progress", updatedAt: later },
    });

    try {
      const dto = await buildDashboard(userId);
      expect(dto.continue).not.toBeNull();
      expect(dto.continue!.source).toBe("cms");
      expect(dto.continue!.contextTitle).toBe("Dashboard Resume Course");
      expect(dto.continue!.chapterTitle).toBe("Getting Started");
      expect(dto.continue!.lessonTitle).toBe("Seeded Dashboard Lesson");
      expect(dto.continue!.lessonHref).toBe(`#/course-lesson/${lesson.slug}`);
      expect(dto.continue!.progressPct).toBeNull(); // CMS tracks status, not % — honest
      // nextUp still follows the curriculum path.
      expect(dto.nextUp!.href).toBe("#/lesson/p1-1-1");
      expectValidHref(dto.continue!.lessonHref);
    } finally {
      // The seeded course is NOT user-owned — delete it explicitly so the
      // shared test database stays clean for catalogue live-course counts.
      await db.user.delete({ where: { id: userId } }).catch(() => {}); // cascades
      await db.cmsCourse.delete({ where: { id: course.id } }).catch(() => {}); // cascades
    }
  });

  it("marks plan items done only from today's verified events", async () => {
    await registerTestUser("Today Learner");
    const userId = await lastUserId();

    // Verified events TODAY: a correct grammar exercise and vocab reviews.
    await db.exerciseAttempt.create({
      data: {
        userId,
        exerciseId: "p1-1-1-mcq-1",
        lessonSlug: "p1-1-1",
        type: "mcq",
        difficulty: "easy",
        skill: "grammar",
        isCorrect: true,
        createdAt: new Date(),
      },
    });
    await db.vocabProgress.create({
      data: {
        userId,
        wordId: "hello",
        status: "learning",
        totalReviews: 1,
        correctReviews: 1,
        firstSeenAt: new Date(),
        lastReviewedAt: new Date(),
        dueAt: new Date(Date.now() + 3 * 86_400_000), // not due today
      },
    });
    await db.vocabReviewLog.create({
      data: {
        userId,
        wordId: "hello",
        source: "flashcard",
        action: "grade",
        rating: "good",
        correct: true,
        wasNew: true,
        createdAt: new Date(),
      },
    });

    const dto = await buildDashboard(userId);

    // Daily target counts today's verified points.
    expect(dto.target.todayPoints).toBeGreaterThan(0);

    // Vocabulary plan item is DONE (reviewed today, nothing due).
    const vocabItem = dto.plan.find((p) => p.category === "vocabulary")!;
    expect(vocabItem.done).toBe(true);
    expect(vocabItem.doneLabel).toContain("today");

    // The continue item is never falsely done while the lesson is unfinished.
    const continueItem = dto.plan.find((p) => p.category === "continue");
    expect(continueItem).toBeDefined();
    expect(continueItem!.done).toBe(false);

    // Streak reflects today's activity.
    expect(dto.streak.activeToday).toBe(true);
    expect(dto.streak.current).toBe(1);

    // §6 — the verified events appear in the activity feed.
    expect(dto.recentActivity.length).toBeGreaterThanOrEqual(2);
    for (const item of dto.recentActivity) {
      expect(item.label.length).toBeGreaterThan(3);
    }

    // Grammar practice done today → plan item (if recommended) is done.
    const grammarItem = dto.plan.find((p) => p.category === "grammar");
    if (grammarItem) expect(grammarItem.done).toBe(true);
  });

  it("surfaces honest notifications from real learner state", async () => {
    await registerTestUser("Notify Learner");
    const userId = await lastUserId();

    // A due word (SRS due in the past) + a stalled writing submission.
    await db.vocabProgress.create({
      data: {
        userId,
        wordId: "thank-you",
        status: "reviewing",
        totalReviews: 2,
        correctReviews: 1,
        firstSeenAt: new Date(Date.now() - 7 * 86_400_000),
        lastReviewedAt: new Date(Date.now() - 3 * 86_400_000),
        dueAt: new Date(Date.now() - 86_400_000), // due yesterday
      },
    });
    await db.writingProgress.create({
      data: {
        userId,
        assignmentId: "wrt-beg-alphabet",
        tier: "beginner",
        status: "in-progress",
        bestScore: 0.55,
        lastScore: 0.55,
        submissionsCount: 1,
        updatedAt: new Date(),
      },
    });

    const dto = await buildDashboard(userId);
    const kinds = dto.notifications.map((n) => n.kind);
    expect(kinds).toContain("vocabulary");
    expect(kinds).toContain("writing");
    for (const n of dto.notifications) {
      expect(n.title.length).toBeGreaterThan(5);
      expectValidHref(n.href);
    }

    // §4 — due words become an actionable plan item, not done.
    const vocabPlan = dto.plan.find((p) => p.category === "vocabulary")!;
    expect(vocabPlan.done).toBe(false);
    expect(vocabPlan.title).toMatch(/Review \d+ due word/);
  });
});
