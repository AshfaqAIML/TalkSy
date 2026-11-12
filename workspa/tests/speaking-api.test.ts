/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { POST as registerRoute } from "@/app/api/auth/register/route";
import { GET as libraryRoute } from "@/app/api/speaking/library/route";
import { GET as activityRoute } from "@/app/api/speaking/activities/[slug]/route";
import { POST as settingsRoute } from "@/app/api/speaking/settings/route";
import { POST as attemptRoute } from "@/app/api/speaking/attempt/route";
import { POST as transcribeRoute } from "@/app/api/speaking/transcribe/route";
import { GET as scenarioRoute } from "@/app/api/speaking/scenarios/[slug]/route";
import { POST as startConversationRoute } from "@/app/api/speaking/conversations/route";
import { POST as turnRoute } from "@/app/api/speaking/conversations/[id]/turn/route";
import { POST as finishRoute } from "@/app/api/speaking/conversations/[id]/finish/route";
import { POST as pronunciationRoute } from "@/app/api/speaking/pronunciation/route";
import { POST as deleteHistoryRoute } from "@/app/api/speaking/history/delete/route";

const BASE = "http://127.0.0.1:3000";

function request(path: string, init: RequestInit = {}): Request {
  return new Request(`${BASE}${path}`, init);
}

function ctx<T extends Record<string, string>>(params: T): { params: Promise<T> } {
  return { params: Promise.resolve(params) };
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

async function registerTestUser(): Promise<string> {
  const email = `speaker-${Date.now()}-${Math.floor(Math.random() * 10000)}@talksy.test`;
  const res = await registerRoute(
    request("/api/auth/register", jsonBody({ email, name: "Speaker", password: "password123" })),
  );
  expect(res.status).toBe(201);
  return extractCookies(res);
}

describe("speaking API golden path", () => {
  it("requires login for every route", async () => {
    expect((await libraryRoute(request("/api/speaking/library"))).status).toBe(401);
    expect(
      (await activityRoute(request("/api/speaking/activities/daily-routine"), ctx({ slug: "daily-routine" }))).status,
    ).toBe(401);
    expect(
      (await attemptRoute(request("/api/speaking/attempt", jsonBody({ slug: "daily-routine", taskId: "dr1", mode: "self-assessed" })))).status,
    ).toBe(401);
    expect(
      (await transcribeRoute(request("/api/speaking/transcribe", jsonBody({ audioBase64: "x" })))).status,
    ).toBe(401);
  });

  it("serves the library: 22 activities, 11 scenarios, settings, pronunciation", async () => {
    const cookie = await registerTestUser();
    const res = await libraryRoute(request("/api/speaking/library", { headers: { cookie } }));
    expect(res.status).toBe(200);
    const library = (await res.json()) as {
      activities: { slug: string; progress: unknown }[];
      scenarios: { slug: string; levels: unknown[] }[];
      pronunciation: { items: unknown[]; categories: unknown[] };
      settings: { provider: string; retentionDays: number; consented: boolean };
      capabilities: { serverTranscription: boolean; maxRecordingSeconds: number };
    };
    expect(library.activities).toHaveLength(22);
    expect(library.scenarios).toHaveLength(11);
    expect(library.pronunciation.items.length).toBeGreaterThanOrEqual(24);
    expect(library.settings.consented).toBe(false);
    expect(library.capabilities.maxRecordingSeconds).toBe(180);
    // No progress rows just from browsing.
    expect(library.activities.every((a) => a.progress === null)).toBe(true);
  });

  it("serves activity bundles without model answers or grading keywords", async () => {
    const cookie = await registerTestUser();
    const res = await activityRoute(
      request("/api/speaking/activities/introduce-yourself", { headers: { cookie } }),
      ctx({ slug: "introduce-yourself" }),
    );
    expect(res.status).toBe(200);
    const bundle = (await res.json()) as {
      activity: { tasks: Record<string, unknown>[] };
    };
    for (const task of bundle.activity.tasks) {
      expect("modelAnswer" in task).toBe(false);
      if (task.type === "open") {
        const checklist = task.checklist as Record<string, unknown>[];
        expect(checklist.every((point) => !("anyOf" in point))).toBe(true);
      }
    }
    expect(
      (
        await activityRoute(
          request("/api/speaking/activities/none", { headers: { cookie } }),
          ctx({ slug: "none" }),
        )
      ).status,
    ).toBe(404);
  });

  it("gates audio transcription behind explicit consent", async () => {
    const cookie = await registerTestUser();
    const denied = await transcribeRoute(
      request("/api/speaking/transcribe", jsonBody({ audioBase64: "eA==" }, cookie)),
    );
    expect(denied.status).toBe(403);

    const consent = await settingsRoute(
      request("/api/speaking/settings", jsonBody({ consent: true }, cookie)),
    );
    expect(consent.status).toBe(200);
    const { settings } = (await consent.json()) as { settings: { consented: boolean } };
    expect(settings.consented).toBe(true);

    // After consent, malformed audio is handled as a graceful failure.
    const empty = await transcribeRoute(
      request("/api/speaking/transcribe", jsonBody({ audioBase64: "" }, cookie)),
    );
    expect(empty.status).toBe(200);
    const body = (await empty.json()) as { error: string; message: string };
    expect(body.error).toBe("empty");
  });

  it("grades a typed (manual) attempt, tracks progress and never auto-completes", async () => {
    const cookie = await registerTestUser();
    const activitySlug = "repeat-a-word";

    // First task of the activity, typed correctly → passes.
    const pass = await attemptRoute(
      request(
        "/api/speaking/attempt",
        jsonBody(
          {
            slug: activitySlug,
            taskId: "rw1",
            mode: "transcript",
            provider: "manual",
            transcript: "hello",
            durationMs: 2000,
          },
          cookie,
        ),
      ),
    );
    expect(pass.status).toBe(200);
    const passed = (await pass.json()) as {
      passed: boolean;
      overall: number;
      measured: { intelligibility: { available: boolean } | null };
      suggestions: unknown;
      progress: { passedCount: number; totalTasks: number; status: string };
    };
    expect(passed.passed).toBe(true);
    // Typed input → no recognition-based intelligibility claim.
    expect(passed.measured.intelligibility?.available).toBe(false);
    // Manual provider → no AI suggestions were requested.
    expect(passed.suggestions).toBeNull();
    expect(passed.progress.passedCount).toBe(1);
    expect(passed.progress.status).toBe("in-progress");

    // A failing attempt does not advance completion.
    const fail = await attemptRoute(
      request(
        "/api/speaking/attempt",
        jsonBody(
          {
            slug: activitySlug,
            taskId: "rw2",
            mode: "transcript",
            provider: "manual",
            transcript: "completely different words that do not match",
            durationMs: 2000,
          },
          cookie,
        ),
      ),
    );
    const failed = (await fail.json()) as { passed: boolean; progress: { passedCount: number } };
    expect(failed.passed).toBe(false);
    expect(failed.progress.passedCount).toBe(1);

    // Self-assessed pass counts (honest fallback) but does not complete the
    // activity while a task remains unpassed.
    const selfPass = await attemptRoute(
      request(
        "/api/speaking/attempt",
        jsonBody(
          { slug: activitySlug, taskId: "rw2", mode: "self-assessed", durationMs: 4000 },
          cookie,
        ),
      ),
    );
    const selfResult = (await selfPass.json()) as {
      passed: boolean;
      measured: { selfAssessed: boolean };
      progress: { passedCount: number; status: string };
    };
    expect(selfResult.passed).toBe(true);
    expect(selfResult.measured.selfAssessed).toBe(true);
    expect(selfResult.progress.passedCount).toBe(2);
    expect(selfResult.progress.status).toBe("in-progress");

    // Completing the final task completes the activity.
    const finalPass = await attemptRoute(
      request(
        "/api/speaking/attempt",
        jsonBody(
          { slug: activitySlug, taskId: "rw3", mode: "self-assessed", durationMs: 4000 },
          cookie,
        ),
      ),
    );
    const finalResult = (await finalPass.json()) as {
      progress: { passedCount: number; status: string };
    };
    expect(finalResult.progress.passedCount).toBe(3);
    expect(finalResult.progress.status).toBe("completed");

    // No transcript → rejected.
    const invalid = await attemptRoute(
      request(
        "/api/speaking/attempt",
        jsonBody(
          { slug: activitySlug, taskId: "rw1", mode: "transcript", provider: "manual", transcript: "  " },
          cookie,
        ),
      ),
    );
    expect(invalid.status).toBe(400);
  });

  it("stores no transcript when retention is set to zero", async () => {
    const cookie = await registerTestUser();
    await settingsRoute(
      request("/api/speaking/settings", jsonBody({ retentionDays: 0 }, cookie)),
    );
    const res = await attemptRoute(
      request(
        "/api/speaking/attempt",
        jsonBody(
          {
            slug: "introduce-yourself",
            taskId: "iy1",
            mode: "transcript",
            provider: "manual",
            transcript: "My name is Test. I am thirty years old. I am from Lima. I like football.",
            durationMs: 10_000,
          },
          cookie,
        ),
      ),
    );
    expect(res.status).toBe(200);
    // Verify in the database that the attempt row exists with an empty transcript.
    const { PrismaClient } = await import("@prisma/client");
    const db = new PrismaClient();
    const rows = await db.speakingAttempt.findMany();
    const mine = rows.filter((r) => r.activityId.includes("introduce"));
    expect(mine.length).toBeGreaterThan(0);
    expect(mine.every((r) => r.transcript === "")).toBe(true);
    await db.$disconnect();
  });

  it("runs a scripted conversation end-to-end with a measured report", async () => {
    const cookie = await registerTestUser();

    const scenarioRes = await scenarioRoute(
      request("/api/speaking/scenarios/meeting-a-new-person", { headers: { cookie } }),
      ctx({ slug: "meeting-a-new-person" }),
    );
    expect(scenarioRes.status).toBe(200);
    const bundle = (await scenarioRes.json()) as {
      scenario: { title: string; levels: { fallbackTurns?: unknown }[] };
    };
    // Fallback script lines never reach the client.
    expect(
      bundle.scenario.levels.every((level) => !("fallbackTurns" in level)),
    ).toBe(true);

    const startRes = await startConversationRoute(
      request(
        "/api/speaking/conversations",
        jsonBody({ slug: "meeting-a-new-person", level: "beginner", engine: "scripted" }, cookie),
      ),
    );
    expect(startRes.status).toBe(200);
    const start = (await startRes.json()) as {
      session: { id: string; engine: string; turns: { role: string; text: string }[] };
    };
    expect(start.session.engine).toBe("scripted");
    expect(start.session.turns[0].role).toBe("partner");

    // Two learner turns.
    const turn1 = await turnRoute(
      request(
        `/api/speaking/conversations/${start.session.id}/turn`,
        jsonBody({ text: "Hi Maya! My name is Tom and I am from Brazil. Where are you from?" }, cookie),
      ),
      ctx({ id: start.session.id }),
    );
    expect(turn1.status).toBe(200);
    const reply1 = (await turn1.json()) as { reply: string; learnerTurnCount: number; canFinish: boolean };
    expect(reply1.learnerTurnCount).toBe(1);
    expect(reply1.reply.length).toBeGreaterThan(0);
    expect(reply1.canFinish).toBe(false);

    const turn2 = await turnRoute(
      request(
        `/api/speaking/conversations/${start.session.id}/turn`,
        jsonBody({ text: "I am learning English because I want to travel for my job. Do you like languages?" }, cookie),
      ),
      ctx({ id: start.session.id }),
    );
    const reply2 = (await turn2.json()) as { canFinish: boolean };
    expect(reply2.canFinish).toBe(true);

    // Finish → measured report + deterministic feedback (scripted engine).
    const finishRes = await finishRoute(
      request(`/api/speaking/conversations/${start.session.id}/finish`, { method: "POST", headers: { cookie } }),
      ctx({ id: start.session.id }),
    );
    expect(finishRes.status).toBe(200);
    const report = (await finishRes.json()) as {
      measured: { learnerTurns: number; questionsAsked: number; score: number };
      feedback: { strongPoints: string[]; followUpTask: string };
      feedbackSource: string;
      engine: string;
    };
    expect(report.measured.learnerTurns).toBe(2);
    expect(report.measured.questionsAsked).toBeGreaterThanOrEqual(1);
    expect(report.feedback.strongPoints.length).toBeGreaterThan(0);
    expect(report.feedback.followUpTask.length).toBeGreaterThan(0);
    expect(report.feedbackSource).toBe("measured");
    expect(report.engine).toBe("scripted");

    // Finishing twice is rejected.
    const again = await finishRoute(
      request(`/api/speaking/conversations/${start.session.id}/finish`, { method: "POST", headers: { cookie } }),
      ctx({ id: start.session.id }),
    );
    expect(again.status).toBe(400);
  });

  it("rejects finishing a conversation with no learner turns", async () => {
    const cookie = await registerTestUser();
    const startRes = await startConversationRoute(
      request(
        "/api/speaking/conversations",
        jsonBody({ slug: "shopping", level: "intermediate", engine: "scripted" }, cookie),
      ),
    );
    const start = (await startRes.json()) as { session: { id: string } };
    const finishRes = await finishRoute(
      request(`/api/speaking/conversations/${start.session.id}/finish`, { method: "POST", headers: { cookie } }),
      ctx({ id: start.session.id }),
    );
    expect(finishRes.status).toBe(400);
  });

  it("records pronunciation takes with self-rating and match scoring", async () => {
    const cookie = await registerTestUser();
    const res = await pronunciationRoute(
      request(
        "/api/speaking/pronunciation",
        jsonBody(
          {
            itemId: "pron-stress-banana",
            transcript: "banana tomorrow important computer",
            hadStt: true,
            selfRating: 4,
          },
          cookie,
        ),
      ),
    );
    expect(res.status).toBe(200);
    const body = (await res.json()) as {
      matchScore: number;
      heard: string;
      note: string;
      selfRating: number;
    };
    expect(body.matchScore).toBe(1);
    expect(body.note).toContain("not phoneme accuracy");
    expect(body.selfRating).toBe(4);

    // Self-assessed take (no recogniser).
    const selfOnly = await pronunciationRoute(
      request(
        "/api/speaking/pronunciation",
        jsonBody({ itemId: "pron-int-questions", selfRating: 3 }, cookie),
      ),
    );
    const selfBody = (await selfOnly.json()) as { matchScore: number };
    expect(selfBody.matchScore).toBe(-1);

    // Unknown item.
    expect(
      (
        await pronunciationRoute(
          request("/api/speaking/pronunciation", jsonBody({ itemId: "nope" }, cookie)),
        )
      ).status,
    ).toBe(404);
  });

  it("deletes the entire speaking history", async () => {
    const cookie = await registerTestUser();
    await attemptRoute(
      request(
        "/api/speaking/attempt",
        jsonBody(
          { slug: "repeat-a-word", taskId: "rw1", mode: "self-assessed", durationMs: 1000 },
          cookie,
        ),
      ),
    );
    const before = await libraryRoute(request("/api/speaking/library", { headers: { cookie } }));
    const beforeBody = (await before.json()) as { stats: { attempts: number } };
    expect(beforeBody.stats.attempts).toBe(1);

    const deleted = await deleteHistoryRoute(
      request("/api/speaking/history/delete", { method: "POST", headers: { cookie } }),
    );
    expect(deleted.status).toBe(200);

    const after = await libraryRoute(request("/api/speaking/library", { headers: { cookie } }));
    const afterBody = (await after.json()) as {
      stats: { attempts: number };
      activities: { progress: unknown }[];
    };
    expect(afterBody.stats.attempts).toBe(0);
    expect(afterBody.activities.every((a) => a.progress === null)).toBe(true);
  });
});
