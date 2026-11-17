/// <reference types="bun-types" />
/**
 * IELTS Reading Masterclass — API golden path (PROMPT 45, Parts D–F).
 *
 * The five reading routes against a real test database: the library index,
 * a safe exercise payload, submit with the error taxonomy, the performance
 * report, and the past-attempt review that re-opens with evidence.
 */

import { describe, expect, it } from "bun:test";
import { POST as registerRoute } from "@/app/api/auth/register/route";
import { GET as bankRoute } from "@/app/api/exams/reading/bank/route";
import { GET as exerciseRoute } from "@/app/api/exams/reading/bank/[slug]/route";
import { POST as submitRoute } from "@/app/api/exams/reading/bank/[slug]/submit/route";
import { GET as performanceRoute } from "@/app/api/exams/reading/performance/route";
import { GET as reviewRoute } from "@/app/api/exams/reading/review/[attemptId]/route";
import { readingExerciseBySlug } from "@/data/exams/ielts/reading-bank";
import { gradeReadingExercise } from "@/lib/exams/reading-bank/service";

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
  const email = `reader-${Date.now()}-${Math.floor(Math.random() * 10000)}@talksy.test`;
  const res = await registerRoute(
    request("/api/auth/register", jsonBody({ email, name: "Reader", password: "password123" })),
  );
  expect(res.status).toBe(201);
  return extractCookies(res);
}

/** A deliberately mixed-error submission: correct, spelling, trap, missed. */
function mixedAnswers() {
  return {
    q1: { format: "verdict", choices: ["NOT GIVEN", "TRUE", "NOT GIVEN", "TRUE", ""] },
    q2: { format: "completion", blanks: { "6": "flotes", "7": "lattice", "8": "oxygen", "9": "molecules" } },
    q3: { format: "mcq", options: [1, 3, 1] },
  };
}

describe("reading API golden path", () => {
  it("requires login for submit, performance and review — never for browsing", async () => {
    const list = await bankRoute(request("/api/exams/reading/bank"));
    expect(list.status).toBe(200);

    const ex = await exerciseRoute(request("/api/exams/reading/bank/ielts-rb-ac-water"), ctx({ slug: "ielts-rb-ac-water" }));
    expect(ex.status).toBe(200);

    const submit = await submitRoute(
      request("/api/exams/reading/bank/ielts-rb-ac-water/submit", jsonBody({ mode: "exam", answers: mixedAnswers(), timeSpentSec: 600 })),
      ctx({ slug: "ielts-rb-ac-water" }),
    );
    expect(submit.status).toBe(401);

    const perf = await performanceRoute(request("/api/exams/reading/performance"));
    expect(perf.status).toBe(401);

    const review = await reviewRoute(request("/api/exams/reading/review/nonexistent"), ctx({ attemptId: "nonexistent" }));
    expect(review.status).toBe(401);
  });

  it("lists the library with honest card metadata and the three simulations", async () => {
    const res = await bankRoute(request("/api/exams/reading/bank"));
    const data = (await res.json()) as {
      exercises: Array<{ slug: string; variant: string; subject: string; wordCount: number; itemCount: number; glossarySize: number; source: string }>;
      simulations: Array<{ slug: string; passages: number; questions: number; timeLimitSec: number }>;
    };
    // PROMPT 54 expansion: 100 reading exercises (50 Academic / 50 GT).
    expect(data.exercises).toHaveLength(100);
    expect(data.simulations).toHaveLength(3);
    const water = data.exercises.find((e) => e.slug === "ielts-rb-ac-water");
    expect(water?.itemCount).toBe(12);
    expect(water?.glossarySize).toBeGreaterThanOrEqual(5);
    expect(water?.wordCount).toBeGreaterThan(550);
    expect(water?.source).toContain("not an official IELTS examination passage");
    for (const sim of data.simulations) {
      expect(sim.questions).toBeGreaterThan(0);
      expect(sim.timeLimitSec).toBe(3600);
    }
  });

  it("serves a locked exercise bundle without grading data, then grades with the taxonomy", async () => {
    const cookie = await registerTestUser();

    const exRes = await exerciseRoute(
      request("/api/exams/reading/bank/ielts-rb-ac-water", { headers: { cookie } }),
      ctx({ slug: "ielts-rb-ac-water" }),
    );
    expect(exRes.status).toBe(200);
    const payload = (await exRes.json()) as { exercise: Record<string, unknown> };
    const serialised = JSON.stringify(payload);
    expect(serialised).not.toContain('"answer"');
    expect(serialised).not.toContain('"evidence"');
    expect(serialised).not.toContain('"definition"');
    expect((payload.exercise.questions as unknown[]).length).toBe(3);

    const submitRes = await submitRoute(
      request("/api/exams/reading/bank/ielts-rb-ac-water/submit", jsonBody({ mode: "exam", answers: mixedAnswers(), timeSpentSec: 720 }, cookie)),
      ctx({ slug: "ielts-rb-ac-water" }),
    );
    expect(submitRes.status).toBe(200);
    const graded = (await submitRes.json()) as {
      attemptId: string;
      result: { totalItems: number; correctItems: number; errorCounts: Record<string, number>; questions: Array<{ items: Array<{ evidence: unknown[]; glossaryWords: string[] }> }> };
      glossary: unknown[];
    };
    expect(graded.attemptId).toBeTruthy();
    expect(graded.result.totalItems).toBe(12);
    expect(graded.result.errorCounts.spelling).toBe(1);
    expect(graded.result.errorCounts.trap).toBeGreaterThanOrEqual(3);
    expect(graded.result.errorCounts.missed).toBe(1);
    // The review payload arrives with the submission: evidence + glossary revealed.
    expect(graded.glossary.length).toBeGreaterThanOrEqual(5);
    for (const q of graded.result.questions) {
      for (const item of q.items) expect(item.evidence.length).toBeGreaterThan(0);
    }

    // A second, simulation-scoped submission groups under a run id.
    const simRes = await submitRoute(
      request("/api/exams/reading/bank/ielts-rb-ac-water/submit", jsonBody({
        mode: "exam",
        answers: mixedAnswers(),
        timeSpentSec: 500,
        simRunId: "sim-run-test-1",
        simSlug: "reading-sim-academic-1",
        simPart: 1,
      }, cookie)),
      ctx({ slug: "ielts-rb-ac-water" }),
    );
    expect(simRes.status).toBe(200);
  });

  it("builds the performance report and reopens the attempt for review with evidence", async () => {
    const cookie = await registerTestUser();

    // Submit two attempts with distinct error profiles.
    await submitRoute(
      request("/api/exams/reading/bank/ielts-rb-ac-water/submit", jsonBody({ mode: "exam", answers: mixedAnswers(), timeSpentSec: 720 }, cookie)),
      ctx({ slug: "ielts-rb-ac-water" }),
    );
    const gtEx = readingExerciseBySlug("ielts-rb-gt-notices");
    expect(gtEx).toBeDefined();
    const gtAnswers = {
      q1: { format: "verdict", choices: ["TRUE", "FALSE", "FALSE", "TRUE"] },
      q2: { format: "completion", blanks: { "5": "Ferndale", "6": "6.15 pm" } },
      q3: { format: "mcq", options: [1, 2] },
    };
    const gtRes = await submitRoute(
      request("/api/exams/reading/bank/ielts-rb-gt-notices/submit", jsonBody({ mode: "practice", answers: gtAnswers, timeSpentSec: 400 }, cookie)),
      ctx({ slug: "ielts-rb-gt-notices" }),
    );
    expect(gtRes.status).toBe(200);

    const perfRes = await performanceRoute(request("/api/exams/reading/performance", { headers: { cookie } }));
    expect(perfRes.status).toBe(200);
    const { report } = (await perfRes.json()) as {
      report: {
        attempts: number;
        itemsAnswered: number;
        byVariant: Array<{ variant: string; total: number }>;
        byType: Array<{ type: string }>;
        vocabularyDifficulties: Array<{ word: string }>;
        recentAttempts: Array<{ id: string; exerciseSlug: string }>;
        recommendations: Array<{ lessonSlug: string; lessonTitle: string; severity: string }>;
      };
    };
    expect(report.attempts).toBe(2);
    expect(report.itemsAnswered).toBe(20);
    expect(report.byVariant.map((v) => v.variant).sort()).toEqual(["academic", "gt"]);
    expect(report.byType.length).toBeGreaterThanOrEqual(3);
    expect(report.recentAttempts).toHaveLength(2);
    expect(report.recommendations.length).toBeGreaterThan(0);
    for (const rec of report.recommendations) {
      expect(rec.lessonTitle).not.toBe(rec.lessonSlug);
    }

    // Reopen the first attempt for review (Part F): evidence and glossary return.
    const attemptId = report.recentAttempts.find((a) => a.exerciseSlug === "ielts-rb-ac-water")?.id;
    expect(attemptId).toBeTruthy();
    const reviewRes = await reviewRoute(
      request(`/api/exams/reading/review/${attemptId}`, { headers: { cookie } }),
      ctx({ attemptId: attemptId as string }),
    );
    expect(reviewRes.status).toBe(200);
    const review = (await reviewRes.json()) as {
      attempt: { exerciseSlug: string; correctCount: number; totalQuestions: number };
      exercise: { title: string };
      result: { questions: Array<{ items: Array<{ evidence: Array<{ quote: string }>; errorType: string }> }> };
      glossary: Array<{ word: string }>;
    };
    expect(review.attempt.exerciseSlug).toBe("ielts-rb-ac-water");
    expect(review.exercise.title).toContain("water");
    expect(review.glossary.length).toBeGreaterThanOrEqual(5);
    const flatItems = review.result.questions.flatMap((q) => q.items);
    expect(flatItems.length).toBe(12);
    for (const item of flatItems) expect(item.evidence.length).toBeGreaterThan(0);

    // Another user's attempt is invisible.
    const otherCookie = await registerTestUser();
    const denied = await reviewRoute(
      request(`/api/exams/reading/review/${attemptId}`, { headers: { cookie: otherCookie } }),
      ctx({ attemptId: attemptId as string }),
    );
    expect(denied.status).toBe(404);
  });

  it("regrades deterministically: the same answers always produce the same result", async () => {
    const ex = readingExerciseBySlug("ielts-rb-ac-beavers");
    expect(ex).toBeDefined();
    const submission = {
      mode: "exam" as const,
      answers: {
        q1: { format: "matching", pairs: [0, 1, 2, 3, 4] },
        q2: { format: "verdict", choices: ["TRUE", "FALSE", "FALSE", "FALSE"] },
        q3: { format: "completion", blanks: { "10": "mud", "11": "attenuation", "12": "nutrients", "13": "crest" } },
      },
      timeSpentSec: 900,
    };
    const first = gradeReadingExercise(ex!, submission as unknown as Parameters<typeof gradeReadingExercise>[1]);
    const second = gradeReadingExercise(ex!, submission as unknown as Parameters<typeof gradeReadingExercise>[1]);
    expect(JSON.stringify(first)).toBe(JSON.stringify(second));
    expect(first.totalItems).toBe(13);
    expect(first.correctItems).toBe(13);
  });
});
