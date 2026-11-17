/// <reference types="bun-types" />
/**
 * IELTS Speaking Masterclass — API golden path (PROMPT 47, Parts 6–8).
 *
 * The speaking routes against a real test database: the practice-library
 * index, the safe item bundle, the simulation bundle, submit with the
 * four-criterion evaluation and revealed teaching content, the performance
 * report, and the past-attempt reopen. The AI commentary seam is pinned to
 * "unavailable" so the deterministic report is what is asserted.
 */

import { afterAll, describe, expect, it } from "bun:test";
import { POST as registerRoute } from "@/app/api/auth/register/route";
import { GET as bankRoute } from "@/app/api/exams/speaking/bank/route";
import { GET as itemRoute } from "@/app/api/exams/speaking/bank/[slug]/route";
import { POST as submitRoute } from "@/app/api/exams/speaking/bank/[slug]/submit/route";
import { GET as performanceRoute } from "@/app/api/exams/speaking/performance/route";
import { GET as attemptRoute } from "@/app/api/exams/speaking/attempts/[attemptId]/route";
import { GET as simulationRoute } from "@/app/api/exams/speaking/simulation/route";
import { setLlmProviderOverride, type LlmProvider } from "@/lib/llm";
import { speakingItemBySlug } from "@/data/exams/ielts/speaking-bank";

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

describe("speaking API golden path", () => {
  it("requires login for submit, performance and reopen — never for browsing or simulation", async () => {
    const list = await bankRoute(request("/api/exams/speaking/bank"));
    expect(list.status).toBe(200);

    const item = await itemRoute(request("/api/exams/speaking/bank/ielts-sb-p1-hometown"), ctx({ slug: "ielts-sb-p1-hometown" }));
    expect(item.status).toBe(200);

    const sim = await simulationRoute(request("/api/exams/speaking/simulation"));
    expect(sim.status).toBe(200);

    const submit = await submitRoute(
      request("/api/exams/speaking/bank/ielts-sb-p1-hometown/submit", jsonBody({ mode: "practice", answers: ["one"], durationSec: 10 })),
      ctx({ slug: "ielts-sb-p1-hometown" }),
    );
    expect(submit.status).toBe(401);

    const perf = await performanceRoute(request("/api/exams/speaking/performance"));
    expect(perf.status).toBe(401);

    const attempt = await attemptRoute(request("/api/exams/speaking/attempts/whatever"), ctx({ attemptId: "whatever" }));
    expect(attempt.status).toBe(401);
  });

  it("serves an honest, leak-free library index", async () => {
    const res = await bankRoute(request("/api/exams/speaking/bank"));
    expect(res.status).toBe(200);
    const body = (await res.json()) as {
      items: Array<{ slug: string; part: number; difficulty: number; proficiency: string; skill: string }>;
      stats: { total: number; part1: number; part2Flagship: number; part2Practice: number; part3: number };
    };
    // PROMPT 54 expansion: 150 speaking items.
    expect(body.items).toHaveLength(150);
    expect(body.stats.total).toBe(150);
    expect(body.stats.part1).toBe(38);
    expect(body.stats.part2Flagship).toBe(11);
    expect(body.stats.part2Practice).toBe(61);
    expect(body.stats.part3).toBe(40);
    const serialised = JSON.stringify(body);
    expect(serialised).not.toContain('"modelAnswer"');
    expect(serialised).not.toContain('"sampleResponse"');
    expect(serialised).not.toContain('"weak"');
    expect(serialised).not.toContain("Band 8.0 estimate");
  });

  it("serves the safe item bundle with attempt history but without teaching content", async () => {
    const res = await itemRoute(request("/api/exams/speaking/bank/ielts-sb-p2-people"), ctx({ slug: "ielts-sb-p2-people" }));
    expect(res.status).toBe(200);
    const body = (await res.json()) as { item: Record<string, unknown>; attempts: unknown[] };
    expect(body.item.slug).toBe("ielts-sb-p2-people");
    const card = body.item.card as { task: string; bullets: string[]; prepSec: number };
    expect(card.task).toContain("Describe a person");
    expect(card.bullets).toHaveLength(3);
    expect(card.prepSec).toBe(60);
    expect(Array.isArray(body.attempts)).toBe(true);
    const serialised = JSON.stringify(body);
    expect(serialised).not.toContain("sampleResponse");
    expect(serialised).not.toContain("planningNotes");
    expect(serialised).not.toContain("responseAnalysis");
    expect(serialised).not.toContain("requirements");
  });

  it("404s unknown items", async () => {
    const res = await itemRoute(request("/api/exams/speaking/bank/not-a-real-item"), ctx({ slug: "not-a-real-item" }));
    expect(res.status).toBe(404);
  });

  it("assembles a three-part simulation bundle with examiner scripts", async () => {
    const res = await simulationRoute(request("/api/exams/speaking/simulation?difficulty=3"));
    expect(res.status).toBe(200);
    const body = (await res.json()) as {
      bundle: { part1: { part: number }; part2: { part: number; card: unknown }; part3: { part: number } };
      examiner: Record<string, string>;
    };
    expect(body.bundle.part1.part).toBe(1);
    expect(body.bundle.part2.card).toBeDefined();
    expect(body.bundle.part3.part).toBe(3);
    expect(body.examiner.opening).toContain("full name");
    expect(body.examiner.part2Lead).toContain("one minute");
    expect(body.examiner.closing).toContain("end of the speaking test");
  });

  it("rejects malformed submissions", async () => {
    const cookie = await registerTestUser("spk-malformed");
    const wrongCount = await submitRoute(
      request("/api/exams/speaking/bank/ielts-sb-p1-hometown/submit", jsonBody({ mode: "practice", answers: ["only one"], durationSec: 30 }, cookie)),
      ctx({ slug: "ielts-sb-p1-hometown" }),
    );
    expect(wrongCount.status).toBe(400);

    const badBody = await submitRoute(
      request("/api/exams/speaking/bank/ielts-sb-p1-hometown/submit", { method: "POST", headers: { "content-type": "application/json", cookie }, body: "{not json" }),
      ctx({ slug: "ielts-sb-p1-hometown" }),
    );
    expect(badBody.status).toBe(400);

    const unknown = await submitRoute(
      request("/api/exams/speaking/bank/not-a-real-item/submit", jsonBody({ mode: "practice", answers: ["x"], durationSec: 10 }, cookie)),
      ctx({ slug: "not-a-real-item" }),
    );
    expect(unknown.status).toBe(404);
  });

  it("evaluates a Part 1 submission with all four criteria and revealed teaching content, then versions re-attempts", async () => {
    const cookie = await registerTestUser("spk-part1");
    const set = speakingItemBySlug("ielts-sb-p1-hometown")!;
    if (set.kind !== "part1") throw new Error("expected part1 set");
    const answers = set.questions.map((q) => q.modelAnswer);

    const first = await submitRoute(
      request("/api/exams/speaking/bank/ielts-sb-p1-hometown/submit", jsonBody({ mode: "simulation", answers, durationSec: 200 }, cookie)),
      ctx({ slug: "ielts-sb-p1-hometown" }),
    );
    expect(first.status).toBe(200);
    const firstBody = (await first.json()) as {
      attemptId: string;
      version: number;
      evaluation: { status: string; criteria: Array<{ name: string; score: number }>; overallLabel: string; extras: Record<string, unknown[]> };
      review: { requirements: { met: boolean }[]; weakImproved: unknown[]; vocabulary: unknown[] };
      history: { version: number }[];
    };
    expect(firstBody.version).toBe(1);
    expect(firstBody.evaluation.status).toBe("complete");
    expect(firstBody.evaluation.criteria.map((c) => c.name)).toEqual([
      "Fluency and Coherence",
      "Lexical Resource",
      "Grammatical Range and Accuracy",
      "Pronunciation",
    ]);
    expect(firstBody.evaluation.overallLabel).toContain("educational estimate");
    expect(firstBody.evaluation.extras.fluencyFeedback.length).toBeGreaterThan(0);
    expect(firstBody.review.requirements).toHaveLength(5);
    expect(firstBody.review.weakImproved).toHaveLength(5);
    expect(firstBody.review.vocabulary.length).toBeGreaterThanOrEqual(6);
    expect(firstBody.history).toHaveLength(1);

    // A second submission on the same item chains as version 2.
    const improvedAnswers = set.questions.map((q) => q.improved);
    const second = await submitRoute(
      request("/api/exams/speaking/bank/ielts-sb-p1-hometown/submit", jsonBody({ mode: "practice", answers: improvedAnswers, durationSec: 160 }, cookie)),
      ctx({ slug: "ielts-sb-p1-hometown" }),
    );
    expect(second.status).toBe(200);
    const secondBody = (await second.json()) as { version: number; history: { version: number }[] };
    expect(secondBody.version).toBe(2);
    expect(secondBody.history.map((h) => h.version)).toEqual([1, 2]);

    // The past attempt reopens with the stored evaluation.
    const reopened = await attemptRoute(
      request(`/api/exams/speaking/attempts/${firstBody.attemptId}`, { headers: { cookie } }),
      ctx({ attemptId: firstBody.attemptId }),
    );
    expect(reopened.status).toBe(200);
    const reopenedBody = (await reopened.json()) as {
      attempt: { transcript: string; itemSlug: string };
      evaluation: { criteria: Array<{ key: string }>; extras: { fluencyFeedback: string[] } };
    };
    expect(reopenedBody.attempt.itemSlug).toBe("ielts-sb-p1-hometown");
    expect(reopenedBody.attempt.transcript).toContain(set.questions[0].modelAnswer.slice(0, 20));
    expect(reopenedBody.evaluation.criteria).toHaveLength(4);
    expect(reopenedBody.evaluation.extras.fluencyFeedback.length).toBeGreaterThan(0);

    // Owner scoping: another user's attempt id 404s.
    const stranger = await registerTestUser("spk-stranger");
    const denied = await attemptRoute(
      request(`/api/exams/speaking/attempts/${firstBody.attemptId}`, { headers: { cookie: stranger } }),
      ctx({ attemptId: firstBody.attemptId }),
    );
    expect(denied.status).toBe(404);
  });

  it("evaluates a Part 2 long turn against the official window and reveals the seven-element payload", async () => {
    const cookie = await registerTestUser("spk-part2");
    const card = speakingItemBySlug("ielts-sb-p2-people")!;
    if (card.kind !== "cue-card") throw new Error("expected cue card");

    const res = await submitRoute(
      request(
        "/api/exams/speaking/bank/ielts-sb-p2-people/submit",
        jsonBody({ mode: "simulation", answers: [card.sampleResponse.transcript], durationSec: card.sampleResponse.durationEstimateSec }, cookie),
      ),
      ctx({ slug: "ielts-sb-p2-people" }),
    );
    expect(res.status).toBe(200);
    const body = (await res.json()) as {
      evaluation: { overall: number; metrics: { coverage: number; durationSec: number } };
      review: { requirements: { met: boolean }[]; planningNotes: unknown[]; sampleResponse: { bandEstimate: string }; responseAnalysis: unknown[]; alternativeApproaches: unknown[]; followUp: { roundingQuestions: string[] } };
    };
    expect(body.evaluation.overall).toBeGreaterThanOrEqual(7.0);
    expect(body.evaluation.metrics.coverage).toBe(1);
    expect(body.review.requirements.length).toBeGreaterThanOrEqual(5);
    expect(body.review.requirements.every((r) => r.met)).toBe(true);
    expect(body.review.planningNotes.length).toBeGreaterThanOrEqual(3);
    expect(body.review.sampleResponse.bandEstimate).toMatch(/estimate/i);
    expect(body.review.responseAnalysis.length).toBeGreaterThanOrEqual(5);
    expect(body.review.alternativeApproaches.length).toBeGreaterThanOrEqual(3);
    expect(body.review.followUp.roundingQuestions.length).toBeGreaterThanOrEqual(2);
  });

  it("builds the performance report with part spread, chains and resolving recommendations", async () => {
    const cookie = await registerTestUser("spk-perf");
    const p1 = speakingItemBySlug("ielts-sb-p1-hometown")!;
    const p2 = speakingItemBySlug("ielts-sb-p2-people")!;
    if (p1.kind !== "part1" || p2.kind !== "cue-card") throw new Error("unexpected kinds");

    await submitRoute(
      request("/api/exams/speaking/bank/ielts-sb-p1-hometown/submit", jsonBody({ mode: "simulation", answers: p1.questions.map((q) => q.modelAnswer), durationSec: 200 }, cookie)),
      ctx({ slug: "ielts-sb-p1-hometown" }),
    );
    await submitRoute(
      request("/api/exams/speaking/bank/ielts-sb-p2-people/submit", jsonBody({ mode: "simulation", answers: [p2.sampleResponse.transcript], durationSec: p2.sampleResponse.durationEstimateSec }, cookie)),
      ctx({ slug: "ielts-sb-p2-people" }),
    );

    const res = await performanceRoute(request("/api/exams/speaking/performance", { headers: { cookie } }));
    expect(res.status).toBe(200);
    const body = (await res.json()) as {
      report: {
        attempts: number;
        wordsSpoken: number;
        criterionAvg: Array<{ key: string; avg: number | null }>;
        byPart: { part: number }[];
        recommendations: { lessonSlug: string; lessonTitle: string }[];
      };
    };
    expect(body.report.attempts).toBe(2);
    expect(body.report.wordsSpoken).toBeGreaterThan(200);
    expect(body.report.criterionAvg.map((c) => c.key)).toEqual(["fc", "lr", "gra", "pron"]);
    expect(body.report.byPart.map((p) => p.part).sort()).toEqual([1, 2]);
    for (const rec of body.report.recommendations) {
      expect(rec.lessonTitle.length).toBeGreaterThan(3);
    }
  });
});
