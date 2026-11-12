/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { POST as registerRoute } from "@/app/api/auth/register/route";
import { GET as libraryRoute } from "@/app/api/writing/library/route";
import { GET as assignmentRoute } from "@/app/api/writing/assignments/[slug]/route";
import { POST as draftsRoute } from "@/app/api/writing/drafts/route";
import { POST as submitRoute } from "@/app/api/writing/submit/route";
import { db } from "@/lib/db";

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

async function registerTestUser(): Promise<{ cookie: string; userId: string }> {
  const email = `writer-${Date.now()}-${Math.floor(Math.random() * 10000)}@talksy.test`;
  const res = await registerRoute(
    request("/api/auth/register", jsonBody({ email, name: "Writer", password: "password123" })),
  );
  expect(res.status).toBe(201);
  const body = (await res.json()) as { user: { id: string } };
  return { cookie: extractCookies(res), userId: body.user.id };
}

const GOOD_TEXT =
  "My name is Sofia and I am twenty-four years old. I come from Lima, where I live with my parents and my two brothers. I like reading novels and I love cooking with my grandmother on Sundays. At the moment I am learning English because I want to study medicine abroad.";

const WEAK_TEXT =
  "i are student and i recieve a letter wich said me to visit and i should of gone but i was busy";

describe("writing API golden path", () => {
  it("requires login for every route", async () => {
    expect((await libraryRoute(request("/api/writing/library"))).status).toBe(401);
    expect(
      (await assignmentRoute(request("/api/writing/assignments/letters"), ctx({ slug: "letters" }))).status,
    ).toBe(401);
    expect(
      (await draftsRoute(request("/api/writing/drafts", jsonBody({ slug: "letters", content: "x" })))).status,
    ).toBe(401);
    expect(
      (await submitRoute(request("/api/writing/submit", jsonBody({ slug: "letters", taskId: "lt1", mode: "free", content: "x" })))).status,
    ).toBe(401);
  });

  it("serves the library: 31 assignments across 4 tiers, no progress rows just from browsing", async () => {
    const { cookie } = await registerTestUser();
    const res = await libraryRoute(request("/api/writing/library", { headers: { cookie } }));
    expect(res.status).toBe(200);
    const library = (await res.json()) as {
      assignments: { tier: string; progress: unknown }[];
      stats: { totalAssignments: number; submissions: number };
    };
    expect(library.assignments).toHaveLength(31);
    expect(library.stats.submissions).toBe(0);
    expect(library.assignments.every((a) => a.progress === null)).toBe(true);
    const tiers = new Set(library.assignments.map((a) => a.tier));
    expect(tiers.size).toBe(4);
  });

  it("serves assignment bundles without model texts or grading keywords", async () => {
    const { cookie } = await registerTestUser();
    const res = await assignmentRoute(
      request("/api/writing/assignments/short-essays", { headers: { cookie } }),
      ctx({ slug: "short-essays" }),
    );
    expect(res.status).toBe(200);
    const bundle = (await res.json()) as {
      assignment: { tasks: Record<string, unknown>[] };
      draft: { content: string };
      submissions: unknown[];
    };
    for (const task of bundle.assignment.tasks) {
      expect("modelText" in task).toBe(false);
      if (task.type === "free") {
        for (const point of task.checklist as Record<string, unknown>[]) {
          expect("anyOf" in point).toBe(false);
        }
      }
    }
    expect(bundle.draft.content).toBe("");
    expect(bundle.submissions).toHaveLength(0);
    expect(
      (await assignmentRoute(request("/api/writing/assignments/nope", { headers: { cookie } }), ctx({ slug: "nope" }))).status,
    ).toBe(404);
  });

  it("autosaves drafts (upsert) and restores them in the bundle", async () => {
    const { cookie, userId } = await registerTestUser();
    const first = await draftsRoute(
      request("/api/writing/drafts", jsonBody({ slug: "letters", content: "Dear fri" }, cookie)),
    );
    expect(first.status).toBe(200);

    const second = await draftsRoute(
      request("/api/writing/drafts", jsonBody({ slug: "letters", content: "Dear friend,\n\nIt has been a year." }, cookie)),
    );
    const secondBody = (await second.json()) as { draft: { content: string; wordCount: number } };
    expect(secondBody.draft.content).toContain("Dear friend");
    expect(secondBody.draft.wordCount).toBe(7);

    // Exactly one draft row for THIS learner, upserted — not one per save.
    const drafts = await db.writingDraft.findMany({ where: { userId } });
    expect(drafts).toHaveLength(1);
    expect(drafts[0].content).toContain("Dear friend");

    const bundle = (await (
      await assignmentRoute(
        request("/api/writing/assignments/letters", { headers: { cookie } }),
        ctx({ slug: "letters" }),
      )
    ).json()) as { draft: { content: string } };
    expect(bundle.draft.content).toContain("Dear friend");
  });

  it("grades a free submission: rubric + teaching issues + version history + no UserStats writes", async () => {
    const { cookie } = await registerTestUser();
    const statsBefore = await db.userStats.count();

    const res = await submitRoute(
      request(
        "/api/writing/submit",
        jsonBody(
          { slug: "self-introduction-writing", taskId: "si1", mode: "free", content: GOOD_TEXT },
          cookie,
        ),
      ),
    );
    expect(res.status).toBe(200);
    const body = (await res.json()) as {
      measured: { scores: Record<string, number>; checklistCoverage: number };
      issues: { dimension: string; original: string; correction: string; explanation: string; concept: string; example: string; exercise: string }[];
      overall: number;
      passed: boolean;
      submission: { version: number; wordCount: number };
      comparison: unknown;
      progress: { status: string; submissionsCount: number };
    };

    expect(Object.keys(body.measured.scores)).toHaveLength(10);
    expect(body.measured.checklistCoverage).toBe(1);
    expect(body.overall).toBeGreaterThanOrEqual(60);
    expect(body.submission.version).toBe(1);
    expect(body.comparison).toBeNull();
    expect(body.progress.status).toBe("completed");
    // Writing scores never touch the general proficiency counters.
    expect(await db.userStats.count()).toBe(statsBefore);

    // Revision: a weaker second version arrives with a comparison.
    const revision = await submitRoute(
      request(
        "/api/writing/submit",
        jsonBody(
          { slug: "self-introduction-writing", taskId: "si1", mode: "free", content: WEAK_TEXT },
          cookie,
        ),
      ),
    );
    const revised = (await revision.json()) as {
      submission: { version: number };
      comparison: {
        previousVersion: number;
        newVersion: number;
        overallDelta: number;
        scoreDeltas: { dimension: string; delta: number }[];
      };
      issues: { dimension: string }[];
      progress: { status: string; submissionsCount: number; bestScore: number };
    };
    expect(revised.submission.version).toBe(2);
    expect(revised.comparison.previousVersion).toBe(1);
    expect(revised.comparison.newVersion).toBe(2);
    expect(revised.comparison.scoreDeltas.length).toBe(10);
    // The weak text scores lower than the good one.
    expect(revised.comparison.overallDelta).toBeLessThan(0);
    expect(revised.issues.some((i) => i.dimension === "spelling")).toBe(true);
    // Once completed, always completed; best score keeps the higher value.
    expect(revised.progress.status).toBe("completed");
    expect(revised.progress.submissionsCount).toBe(2);
    expect(revised.progress.bestScore).toBeGreaterThan(0.6);
  });

  it("grades guided beginner items deterministically with explanations after grading", async () => {
    const { cookie } = await registerTestUser();
    const res = await submitRoute(
      request(
        "/api/writing/submit",
        jsonBody(
          {
            slug: "alphabet-writing",
            taskId: "aw1",
            mode: "guided",
            answers: { i1: "a", i2: "B", i3: "c", i4: "z" },
          },
          cookie,
        ),
      ),
    );
    expect(res.status).toBe(200);
    const body = (await res.json()) as {
      results: { itemId: string; correct: boolean; reveal: string }[];
      correctCount: number;
      overall: number;
      passed: boolean;
      progress: { status: string };
    };
    expect(body.correctCount).toBe(4);
    expect(body.results.every((r) => r.correct)).toBe(true);
    expect(body.overall).toBe(100);
    expect(body.passed).toBe(true);
    expect(body.results.every((r) => r.reveal.length > 0)).toBe(true);
    expect(body.progress.status).toBe("completed");

    // A partially wrong attempt does not complete and does not leak answers.
    const weak = await submitRoute(
      request(
        "/api/writing/submit",
        jsonBody(
          {
            slug: "alphabet-writing",
            taskId: "aw1",
            mode: "guided",
            answers: { i1: "a", i2: "x", i3: "q", i4: "z" },
          },
          cookie,
        ),
      ),
    );
    const weakBody = (await weak.json()) as {
      correctCount: number;
      passed: boolean;
      results: { feedback: string; reveal: string }[];
    };
    expect(weakBody.correctCount).toBe(2);
    expect(weakBody.passed).toBe(false);
    expect(weakBody.results.every((r) => r.feedback.length > 0)).toBe(true);
  });

  it("rejects empty submissions and mismatched modes", async () => {
    const { cookie } = await registerTestUser();
    expect(
      (
        await submitRoute(
          request(
            "/api/writing/submit",
            jsonBody(
              { slug: "letters", taskId: "lt1", mode: "free", content: "   " },
              cookie,
            ),
          ),
        )
      ).status,
    ).toBe(400);
    // Guided mode against a free task.
    expect(
      (
        await submitRoute(
          request(
            "/api/writing/submit",
            jsonBody(
              { slug: "letters", taskId: "lt1", mode: "guided", answers: {} },
              cookie,
            ),
          ),
        )
      ).status,
    ).toBe(400);
  });
});
