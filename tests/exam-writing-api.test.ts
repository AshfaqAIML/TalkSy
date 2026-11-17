/// <reference types="bun-types" />
/**
 * IELTS Writing Masterclass — API golden path (PROMPT 46, Parts E–G).
 *
 * The five writing routes against a real test database: the library index,
 * the safe task bundle, draft autosave, submit with the four-criterion
 * evaluation and revealed teaching content, the performance report, and
 * the past-attempt reopen. The AI commentary seam is pinned to
 * "unavailable" so the deterministic report is what is asserted.
 */

import { afterAll, describe, expect, it } from "bun:test";
import { POST as registerRoute } from "@/app/api/auth/register/route";
import { GET as bankRoute } from "@/app/api/exams/writing/bank/route";
import { GET as taskRoute } from "@/app/api/exams/writing/bank/[slug]/route";
import { POST as draftRoute } from "@/app/api/exams/writing/bank/[slug]/draft/route";
import { POST as submitRoute } from "@/app/api/exams/writing/bank/[slug]/submit/route";
import { GET as performanceRoute } from "@/app/api/exams/writing/performance/route";
import { GET as attemptRoute } from "@/app/api/exams/writing/attempts/[attemptId]/route";
import { setLlmProviderOverride, type LlmProvider } from "@/lib/llm";

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

async function registerTestUser(name: string): Promise<string> {
  const email = `${name}-${Date.now()}-${Math.floor(Math.random() * 10000)}@talksy.test`;
  const res = await registerRoute(
    request("/api/auth/register", jsonBody({ email, name, password: "password123" })),
  );
  expect(res.status).toBe(201);
  return extractCookies(res);
}

// The AI layer is enrichment-only: pin it unavailable so every assertion
// below tests the deterministic report that always stands alone.
const unavailable: LlmProvider = {
  name: "test-unavailable",
  async complete() {
    throw new Error("provider unavailable in tests");
  },
  async *stream() {
    throw new Error("provider unavailable in tests");
  },
};
setLlmProviderOverride(unavailable);
afterAll(() => setLlmProviderOverride(null));

/** A complete Band-6-ish bar-chart response to the cycling task. */
const CYCLING_RESPONSE = [
  "The chart compares the proportion of commuters who cycled to work in five European cities in 2009 and 2019.",
  "Overall, cycling to work increased in every city over the decade, and Amsterdam and Copenhagen stayed clearly ahead of the other three.",
  "In Amsterdam, roughly a third of commuters already cycled in 2009, and the share rose six percentage points to 38% by 2019. Copenhagen followed a similar path, increasing from 26% to 31%, so both cities remained far above the rest.",
  "The remaining three cities started far lower but grew fastest in relative terms. Berlin rose from 12% to 18%, Lyon nearly doubled from 8% to 14%, and Manchester more than doubled from 4% to 9%, although it stayed the lowest of the five.",
].join("\n\n");

/** A deliberately weaker response: short, error-laden, no overview. */
const WEAK_RESPONSE = [
  "The chart show the percentage of people who use bicycle to go work in five citys in 2009 and 2019.",
  "Amsterdam have the most cyclists in both years. There is many people cycling in Copenhagen also, it is 26% and then 31%. Berlin is more higher in 2019 then before.",
  "Lyon and Manchester is smaller but they double. Manchester is lowest city in the chart.",
].join("\n\n");

describe("writing API golden path", () => {
  it("requires login for drafts, submit, performance and reopen — never for browsing", async () => {
    const list = await bankRoute(request("/api/exams/writing/bank"));
    expect(list.status).toBe(200);

    const task = await taskRoute(request("/api/exams/writing/bank/ielts-wb-at1-bar-cycling"), ctx({ slug: "ielts-wb-at1-bar-cycling" }));
    expect(task.status).toBe(200);

    const draft = await draftRoute(
      request("/api/exams/writing/bank/ielts-wb-at1-bar-cycling/draft", jsonBody({ content: "Dear…" })),
      ctx({ slug: "ielts-wb-at1-bar-cycling" }),
    );
    expect(draft.status).toBe(401);

    const submit = await submitRoute(
      request("/api/exams/writing/bank/ielts-wb-at1-bar-cycling/submit", jsonBody({ mode: "exam", content: CYCLING_RESPONSE, timeSpentSec: 900 })),
      ctx({ slug: "ielts-wb-at1-bar-cycling" }),
    );
    expect(submit.status).toBe(401);

    const perf = await performanceRoute(request("/api/exams/writing/performance"));
    expect(perf.status).toBe(401);

    const attempt = await attemptRoute(request("/api/exams/writing/attempts/whatever"), ctx({ attemptId: "whatever" }));
    expect(attempt.status).toBe(401);
  });

  it("lists the library with honest stats across the four channels", async () => {
    const res = await bankRoute(request("/api/exams/writing/bank"));
    const data = (await res.json()) as {
      tasks: Array<{ slug: string; channel: string; taskType: string; source: string; wordMinimum: number; timeLimitSec: number }>;
      stats: { total: number; academicTask1: number; academicTask2: number; gtTask1: number; gtTask2: number; withLevelSamples: number };
    };
    // PROMPT 54 expansion: 100 tasks — 25 flagship (full level ladder)
    // plus 75 practice-tier tasks.
    expect(data.stats).toEqual({ total: 100, academicTask1: 28, academicTask2: 25, gtTask1: 26, gtTask2: 21, withLevelSamples: 25 });
    for (const t of data.tasks) {
      expect(t.source).toContain("not an official IELTS examination task");
      expect(t.timeLimitSec).toBe(t.taskType === "task-1" ? 1200 : 2400);
      expect(t.wordMinimum).toBe(t.taskType === "task-1" ? 150 : 250);
    }
    const serialised = JSON.stringify(data);
    expect(serialised).not.toContain("modelAnswer");
    expect(serialised).not.toContain("bandEstimate");
  });

  it("serves the task bundle with a leak-free payload", async () => {
    const res = await taskRoute(request("/api/exams/writing/bank/ielts-wb-gt1-complaint-hotel"), ctx({ slug: "ielts-wb-gt1-complaint-hotel" }));
    expect(res.status).toBe(200);
    const data = (await res.json()) as { task: Record<string, unknown>; draft: unknown; attempts: unknown[] };
    expect(data.task.register).toBe("formal");
    expect(data.task.bullets).toHaveLength(3);
    expect(data.draft).toBeNull();
    expect(data.attempts).toEqual([]);
    const serialised = JSON.stringify(data);
    for (const banned of ["modelAnswer", "planningNotes", "levelSamples", "vocabularyBank", "keywords", "commonMistakes", "alternativeExpressions"]) {
      expect(serialised).not.toContain(`"${banned}"`);
    }

    const missing = await taskRoute(request("/api/exams/writing/bank/does-not-exist"), ctx({ slug: "does-not-exist" }));
    expect(missing.status).toBe(404);
  });

  it("autosaves and reloads a draft per learner per task", async () => {
    const cookie = await registerTestUser("writer-draft");
    const save = await draftRoute(
      request("/api/exams/writing/bank/ielts-wb-at1-bar-cycling/draft", jsonBody({ content: CYCLING_RESPONSE.slice(0, 120) }, cookie)),
      ctx({ slug: "ielts-wb-at1-bar-cycling" }),
    );
    expect(save.status).toBe(200);
    const saved = (await save.json()) as { draft: { wordCount: number } };
    expect(saved.draft.wordCount).toBeGreaterThan(10);

    const reload = await taskRoute(
      request("/api/exams/writing/bank/ielts-wb-at1-bar-cycling", { headers: { cookie } }),
      ctx({ slug: "ielts-wb-at1-bar-cycling" }),
    );
    const data = (await reload.json()) as { draft: { content: string } | null };
    expect(data.draft?.content).toContain("The chart compares");
  });

  it("submits a strong response: four criteria, revealed review payload, version 1", async () => {
    const cookie = await registerTestUser("writer-strong");
    const res = await submitRoute(
      request("/api/exams/writing/bank/ielts-wb-at1-bar-cycling/submit", jsonBody({ mode: "exam", content: CYCLING_RESPONSE, timeSpentSec: 1050 }, cookie)),
      ctx({ slug: "ielts-wb-at1-bar-cycling" }),
    );
    expect(res.status).toBe(200);
    const data = (await res.json()) as {
      attemptId: string;
      version: number;
      evaluation: {
        criteria: Array<{ key: string; name: string; score: number; feedback: unknown[] }>;
        overall: number;
        overallLabel: string;
        status: string;
        aiAvailable: boolean;
        disclaimers: string[];
      };
      review: {
        requirements: { met: boolean }[];
        planningNotes: unknown[];
        modelAnswer: { paragraphs: string[]; wordCount: number };
        analysis: { commonMistakes: unknown[] };
        levelSamples: unknown[];
        vocabularyBank: unknown[];
      };
      history: unknown[];
    };

    expect(data.version).toBe(1);
    expect(data.evaluation.status).toBe("complete");
    expect(data.evaluation.criteria).toHaveLength(4);
    expect(data.evaluation.criteria[0].name).toBe("Task Achievement");
    expect(data.evaluation.criteria.map((c) => c.name).slice(1)).toEqual([
      "Coherence and Cohesion",
      "Lexical Resource",
      "Grammatical Range and Accuracy",
    ]);
    expect(data.evaluation.overall).toBeGreaterThanOrEqual(6.5);
    expect(data.evaluation.overallLabel).toContain("educational estimate");
    expect(data.evaluation.aiAvailable).toBe(false);
    expect(data.evaluation.disclaimers.length).toBeGreaterThanOrEqual(3);
    // The review payload is revealed exactly now.
    expect(data.review.requirements.length).toBeGreaterThanOrEqual(4);
    expect(data.review.requirements.some((r) => r.met)).toBe(true);
    expect(data.review.planningNotes.length).toBeGreaterThanOrEqual(3);
    expect(data.review.modelAnswer.paragraphs.length).toBe(4);
    expect(data.review.analysis.commonMistakes.length).toBeGreaterThanOrEqual(3);
    expect(data.review.levelSamples).toHaveLength(2);
    expect(data.review.vocabularyBank.length).toBeGreaterThanOrEqual(5);
    expect(data.history).toHaveLength(1);
  });

  it("submits a weak response and caps it lower than the strong one", async () => {
    const cookie = await registerTestUser("writer-weak");
    const strong = await submitRoute(
      request("/api/exams/writing/bank/ielts-wb-at1-bar-cycling/submit", jsonBody({ mode: "practice", content: CYCLING_RESPONSE, timeSpentSec: 2400 }, cookie)),
      ctx({ slug: "ielts-wb-at1-bar-cycling" }),
    );
    const weak = await submitRoute(
      request("/api/exams/writing/bank/ielts-wb-at1-bar-cycling/submit", jsonBody({ mode: "practice", content: WEAK_RESPONSE, timeSpentSec: 600 }, cookie)),
      ctx({ slug: "ielts-wb-at1-bar-cycling" }),
    );
    const strongData = (await strong.json()) as { evaluation: { overall: number } };
    const weakData = (await weak.json()) as {
      version: number;
      evaluation: { overall: number; criteria: Array<{ feedback: Array<{ kind: string; text: string }> }>; improvements: string[] };
      review: { requirements: { met: boolean }[] };
    };
    expect(weakData.version).toBe(2); // revisions are versioned
    expect(weakData.evaluation.overall).toBeLessThan(strongData.evaluation.overall);
    // The weak response must produce issue feedback mentioning the word floor.
    const flat = weakData.evaluation.criteria.flatMap((c) => c.feedback.map((f) => f.text));
    expect(flat.some((t) => t.includes("150-word floor"))).toBe(true);
    expect(weakData.review.requirements.some((r) => !r.met)).toBe(true);
  });

  it("aggregates the performance report with recommendations that resolve", async () => {
    const cookie = await registerTestUser("writer-perf");
    await submitRoute(
      request("/api/exams/writing/bank/ielts-wb-gt1-complaint-hotel/submit", jsonBody({ mode: "exam", content: WEAK_RESPONSE, timeSpentSec: 400 }, cookie)),
      ctx({ slug: "ielts-wb-gt1-complaint-hotel" }),
    );
    await submitRoute(
      request("/api/exams/writing/bank/ielts-wb-at2-opinion-museums/submit", jsonBody({ mode: "exam", content: WEAK_RESPONSE, timeSpentSec: 700 }, cookie)),
      ctx({ slug: "ielts-wb-at2-opinion-museums" }),
    );

    const res = await performanceRoute(request("/api/exams/writing/performance", { headers: { cookie } }));
    expect(res.status).toBe(200);
    const data = (await res.json()) as {
      report: {
        attempts: number;
        underLengthAttempts: number;
        byFamily: { family: string }[];
        recommendations: { lessonSlug: string; lessonTitle: string; severity: string }[];
      };
    };
    expect(data.report.attempts).toBe(2);
    expect(data.report.underLengthAttempts).toBe(2); // both under their floors
    const families = data.report.byFamily.map((f) => f.family);
    expect(families).toContain("complaint");
    expect(families).toContain("opinion");
    for (const rec of data.report.recommendations) {
      expect(rec.lessonTitle).not.toBe(rec.lessonSlug);
      expect(rec.severity).toMatch(/^(high|medium|low)$/);
    }
  });

  it("reopens a past attempt for its owner and 404s for anyone else", async () => {
    const owner = await registerTestUser("writer-owner");
    const submit = await submitRoute(
      request("/api/exams/writing/bank/ielts-wb-gt2-opinion-sundays/submit", jsonBody({ mode: "exam", content: CYCLING_RESPONSE, timeSpentSec: 1500 }, owner)),
      ctx({ slug: "ielts-wb-gt2-opinion-sundays" }),
    );
    const { attemptId } = (await submit.json()) as { attemptId: string };

    const reopened = await attemptRoute(request(`/api/exams/writing/attempts/${attemptId}`, { headers: { cookie: owner } }), ctx({ attemptId }));
    expect(reopened.status).toBe(200);
    const data = (await reopened.json()) as {
      attempt: { taskSlug: string; version: number; criteriaScores: Record<string, number> };
      evaluation: { criteria: Array<{ key: string; score: number }> };
      task: { title: string; modelAnswer: { paragraphs: string[] } } | null;
    };
    expect(data.attempt.taskSlug).toBe("ielts-wb-gt2-opinion-sundays");
    expect(data.evaluation.criteria).toHaveLength(4);
    expect(data.evaluation.criteria[0].score).toBeGreaterThan(0);
    expect(data.task?.modelAnswer.paragraphs.length).toBeGreaterThan(0);

    const stranger = await registerTestUser("writer-stranger");
    const denied = await attemptRoute(request(`/api/exams/writing/attempts/${attemptId}`, { headers: { cookie: stranger } }), ctx({ attemptId }));
    expect(denied.status).toBe(404);
  });

  it("rejects malformed submissions", async () => {
    const cookie = await registerTestUser("writer-bad");
    const noBody = await submitRoute(
      request("/api/exams/writing/bank/ielts-wb-at1-bar-cycling/submit", jsonBody({ mode: "exam" }, cookie)),
      ctx({ slug: "ielts-wb-at1-bar-cycling" }),
    );
    expect(noBody.status).toBe(400);

    const badTask = await submitRoute(
      request("/api/exams/writing/bank/not-a-task/submit", jsonBody({ mode: "exam", content: "x", timeSpentSec: 10 }, cookie)),
      ctx({ slug: "not-a-task" }),
    );
    expect(badTask.status).toBe(404);
  });
});
