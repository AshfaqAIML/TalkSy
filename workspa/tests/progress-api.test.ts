/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { POST as registerRoute } from "@/app/api/auth/register/route";
import { GET as overviewRoute } from "@/app/api/progression/overview/route";
import { POST as goalsRoute } from "@/app/api/progression/goals/route";
import { POST as confidenceRoute } from "@/app/api/progression/confidence/route";
import { POST as seenRoute } from "@/app/api/progression/achievements/seen/route";
import { achievements } from "@/data/progress";

const BASE = "http://127.0.0.1:3000";

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

function jsonBody(body: unknown, cookie?: string, method = "POST"): RequestInit {
  return {
    method,
    headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) },
    body: JSON.stringify(body),
  };
}

let lastEmail = "";

async function registerTestUser(name = "Progress Learner"): Promise<string> {
  lastEmail = `progress-${Date.now()}-${Math.floor(Math.random() * 10000)}@talksy.test`;
  const res = await registerRoute(
    request("/api/auth/register", jsonBody({ email: lastEmail, name, password: "password123" })),
  );
  expect(res.status).toBe(201);
  return extractCookies(res);
}

async function lastUserId(): Promise<string> {
  const { PrismaClient } = await import("@prisma/client");
  const db = new PrismaClient();
  const user = await db.user.findUnique({ where: { email: lastEmail } });
  await db.$disconnect();
  if (!user) throw new Error("test user vanished");
  return user.id;
}

async function getOverview(cookie: string) {
  const res = await overviewRoute(request("/api/progression/overview", { headers: { cookie } }));
  expect(res.status).toBe(200);
  return (await res.json()) as Awaited<
    ReturnType<typeof import("@/lib/progress/service").getProgressOverview>
  >;
}

describe("progression API", () => {
  it("requires a session for every endpoint", async () => {
    expect((await overviewRoute(request("/api/progression/overview"))).status).toBe(401);
    expect(
      (await goalsRoute(request("/api/progression/goals", jsonBody({ dailyPoints: 40 })))).status,
    ).toBe(401);
    expect(
      (
        await confidenceRoute(
          request("/api/progression/confidence", jsonBody({ lessonSlug: "p1-1-1", confidence: 3 })),
        )
      ).status,
    ).toBe(401);
    expect(
      (await seenRoute(request("/api/progression/achievements/seen", jsonBody({ ids: ["x"] })))).status,
    ).toBe(401);
  });

  it("returns an honest empty overview for a fresh learner", async () => {
    const cookie = await registerTestUser();
    const overview = await getOverview(cookie);

    expect(overview.points.total).toBe(0);
    expect(overview.goals).toEqual({
      dailyPoints: 30,
      weeklyPoints: 150,
      todayProgress: 0,
      weekProgress: 0,
    });
    expect(overview.streak.current).toBe(0);
    expect(overview.streak.streakNote).toContain("never remove");
    expect(overview.lessons.completed).toBe(0);
    expect(overview.skills.length).toBe(6);
    for (const skill of overview.skills) {
      expect(skill.status).toBe("not-started");
      expect(skill.accuracy).toBeNull();
    }
    // All achievements present, none unlocked, milestones show progress UI.
    expect(overview.achievements.totalCount).toBe(achievements.length);
    expect(overview.achievements.unlockedCount).toBe(0);
    expect(overview.achievements.milestoneCount.total).toBeGreaterThanOrEqual(7);
    expect(overview.certificates.earned).toEqual([]);
    expect(overview.recommendations.length).toBeGreaterThan(0);
    // Fresh learner gets a "start next lesson" recommendation with a purpose.
    const next = overview.recommendations.find((r) => r.kind === "next-lesson");
    expect(next?.purpose.length ?? 0).toBeGreaterThan(20);
  });

  it("computes points from verified activity and exposes honest skill profiles", async () => {
    const cookie = await registerTestUser();
    const { PrismaClient } = await import("@prisma/client");
    const db = new PrismaClient();
    const userId = await lastUserId();

    for (let i = 0; i < 4; i++) {
      await db.exerciseAttempt.create({
        data: {
          userId,
          exerciseId: "p1-1-1-mcq-1",
          lessonSlug: "p1-1-1",
          type: "mcq",
          difficulty: "easy",
          skill: "vocabulary",
          isCorrect: i < 3,
          createdAt: new Date(),
        },
      });
    }
    await db.$disconnect();

    const overview = await getOverview(cookie);
    // 3 correct exercises x 2 points.
    expect(overview.points.total).toBe(6);
    const vocabulary = overview.skills.find((s) => s.skill === "vocabulary")!;
    expect(vocabulary.status).toBe("exploring");
    expect(vocabulary.accuracy).not.toBeNull();
    expect(vocabulary.accuracy!.pct).toBe(75);
    expect(vocabulary.accuracy!.basis).toBe("graded vocabulary exercises"); // MCQ answers, honestly labelled
    // Exercises feed practice events; accuracy basis stays per-skill honest.
    const reading = overview.skills.find((s) => s.skill === "reading")!;
    expect(reading.status).toBe("not-started");
    // Activity feed lists the verified events with labels.
    expect(overview.recentActivity.length).toBe(3);
    expect(overview.recentActivity[0].points).toBe(2);
  });

  it("awards no points or achievements for lessons merely opened", async () => {
    const cookie = await registerTestUser();
    const { PrismaClient } = await import("@prisma/client");
    const db = new PrismaClient();
    const userId = await lastUserId();
    await db.lessonProgress.create({
      data: {
        userId,
        lessonSlug: "p1-1-1",
        status: "in-progress", // opened, NOT completed
        sectionsCompleted: "[]",
      },
    });
    await db.$disconnect();

    const overview = await getOverview(cookie);
    expect(overview.points.total).toBe(0);
    expect(overview.achievements.unlockedCount).toBe(0);
    expect(overview.lessons.inProgress).toBe(1);
  });

  it("persists goals with server-side clamping", async () => {
    const cookie = await registerTestUser();

    const ok = await goalsRoute(
      request("/api/progression/goals", jsonBody({ dailyPoints: 45, weeklyPoints: 220 }, cookie)),
    );
    expect(ok.status).toBe(200);
    const overview = await getOverview(cookie);
    expect(overview.goals.dailyPoints).toBe(45);
    expect(overview.goals.weeklyPoints).toBe(220);

    // Out-of-range values are clamped into range, not rejected.
    const clamped = await goalsRoute(
      request("/api/progression/goals", jsonBody({ dailyPoints: 99999, weeklyPoints: 5 }, cookie)),
    );
    expect(clamped.status).toBe(200);
    const body = (await clamped.json()) as { goals: { dailyPoints: number; weeklyPoints: number } };
    expect(body.goals.dailyPoints).toBeLessThanOrEqual(200);
    expect(body.goals.weeklyPoints).toBeGreaterThanOrEqual(50);

    const invalid = await goalsRoute(
      request("/api/progression/goals", jsonBody({ dailyPoints: "abc" }, cookie)),
    );
    expect(invalid.status).toBe(400);
  });

  it("stores self-reported confidence and rejects invalid input", async () => {
    const cookie = await registerTestUser();

    const ok = await confidenceRoute(
      request("/api/progression/confidence", jsonBody({ lessonSlug: "p1-1-1", confidence: 2 }, cookie)),
    );
    expect(ok.status).toBe(200);

    const unknown = await confidenceRoute(
      request("/api/progression/confidence", jsonBody({ lessonSlug: "not-a-lesson", confidence: 3 }, cookie)),
    );
    expect(unknown.status).toBe(400);

    const outOfRange = await confidenceRoute(
      request("/api/progression/confidence", jsonBody({ lessonSlug: "p1-1-1", confidence: 9 }, cookie)),
    );
    expect(outOfRange.status).toBe(400);

    // The rating reaches the revision scheduler input.
    const overview = await getOverview(cookie);
    expect(overview.revision.confidenceLessons.length).toBe(0); // lesson not completed yet
  });

  it("unlocks achievements from verified completions and marks them seen", async () => {
    const cookie = await registerTestUser();
    const { PrismaClient } = await import("@prisma/client");
    const db = new PrismaClient();
    const userId = await lastUserId();
    await db.lessonProgress.create({
      data: {
        userId,
        lessonSlug: "p1-1-1",
        status: "completed",
        sectionsCompleted: JSON.stringify(["greeting-words", "first-dialogue", "how-are-you", "introduce-yourself"]),
        completedAt: new Date(),
      },
    });
    await db.$disconnect();

    const overview = await getOverview(cookie);
    expect(overview.achievements.unlockedCount).toBeGreaterThanOrEqual(1);
    const firstLesson = overview.achievements.all.find((a) => a.id === "first-lesson");
    expect(firstLesson?.unlocked).toBe(true);
    expect(firstLesson?.unlockedAt).not.toBeNull();
    expect(overview.achievements.unseenCount).toBeGreaterThanOrEqual(1);
    expect(overview.points.total).toBe(20);

    // Point totals include the completion; the milestone is recent.
    expect(overview.achievements.recentUnlocks[0].id).toBe("first-lesson");

    const seen = await seenRoute(
      request(
        "/api/progression/achievements/seen",
        jsonBody({ ids: overview.achievements.all.filter((a) => a.unlocked).map((a) => a.id) }, cookie),
      ),
    );
    expect(seen.status).toBe(200);
    const after = await getOverview(cookie);
    expect(after.achievements.unseenCount).toBe(0);
    // Unlock date survives marking seen.
    expect(after.achievements.all.find((a) => a.id === "first-lesson")?.unlockedAt).toBe(
      firstLesson?.unlockedAt,
    );
  });

  it("issues a certificate when a full course unit is completed", async () => {
    const cookie = await registerTestUser();
    const { PrismaClient } = await import("@prisma/client");
    const db = new PrismaClient();
    const userId = await lastUserId();
    // Pre-A1 · Unit 1 = p1-1-1, p1-1-2, p1-1-3
    for (const slug of ["p1-1-1", "p1-1-2", "p1-1-3"]) {
      await db.lessonProgress.create({
        data: {
          userId,
          lessonSlug: slug,
          status: "completed",
          sectionsCompleted: "[]",
          completedAt: new Date(),
        },
      });
    }
    await db.$disconnect();

    const overview = await getOverview(cookie);
    expect(overview.certificates.earned.length).toBe(1);
    const cert = overview.certificates.earned[0];
    expect(cert.courseId).toBe("pre-a1:1");
    expect(cert.kind).toBe("unit");
    expect(cert.code).toMatch(/^TSY-[0-9A-F]{8}$/);
    expect(cert.lessonsCompleted).toBe(3);
    expect(cert.title).toContain("Hello, World!");

    // Idempotent: a second load does not duplicate the certificate.
    const again = await getOverview(cookie);
    expect(again.certificates.earned.length).toBe(1);

    // Unit certificate only — the whole-level achievement needs every lesson.
    expect(again.achievements.all.find((a) => a.id === "course-pre-a1")?.unlocked).toBe(false);
    expect(again.certificates.inProgress.every((c) => c.lessonsCompleted < c.lessonsTotal)).toBe(true);
  });
});
