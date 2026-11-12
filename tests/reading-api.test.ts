/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { POST as registerRoute } from "@/app/api/auth/register/route";
import { GET as libraryRoute } from "@/app/api/reading/library/route";
import { GET as textRoute } from "@/app/api/reading/texts/[slug]/route";
import { POST as stateRoute } from "@/app/api/reading/state/route";
import { POST as checkRoute } from "@/app/api/reading/check/route";
import { POST as runStartRoute } from "@/app/api/reading/runs/route";
import { POST as runSubmitRoute } from "@/app/api/reading/runs/[id]/submit/route";
import { getReadingText, readingTexts } from "@/data/reading";
import type { ReadingQuestion } from "@/data/reading/types";

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

function correctAnswerFor(question: ReadingQuestion): unknown {
  switch (question.format) {
    case "choice":
      return { format: "choice", optionId: question.correctOptionId };
    case "sequence":
      return { format: "sequence", order: question.correctOrder };
    default:
      return { format: "short-text", text: question.acceptedAnswers[0] };
  }
}

describe("reading API golden path", () => {
  it("requires login for every route", async () => {
    expect((await libraryRoute(request("/api/reading/library"))).status).toBe(401);
    expect((await textRoute(request("/api/reading/texts/mias-day"), ctx({ slug: "mias-day" }))).status).toBe(401);
    expect(
      (await stateRoute(request("/api/reading/state", jsonBody({ slug: "mias-day", action: "bookmark", bookmarked: true })))).status,
    ).toBe(401);
    expect(
      (await checkRoute(request("/api/reading/check", jsonBody({ slug: "mias-day", questionId: "q1", answer: null })))).status,
    ).toBe(401);
  });

  it("lists the library and serves a full text bundle without grading data", async () => {
    const cookie = await registerTestUser();

    const libraryRes = await libraryRoute(request("/api/reading/library", { headers: { cookie } }));
    expect(libraryRes.status).toBe(200);
    const library = (await libraryRes.json()) as {
      levels: unknown[];
      texts: { slug: string; progress: unknown }[];
      skillStats: unknown[];
    };
    expect(library.levels).toHaveLength(4);
    expect(library.texts.length).toBe(readingTexts.length);
    expect(library.texts.every((t) => t.progress === null)).toBe(true);

    const textRes = await textRoute(request("/api/reading/texts/mias-day", { headers: { cookie } }), ctx({ slug: "mias-day" }));
    expect(textRes.status).toBe(200);
    const bundle = (await textRes.json()) as {
      text: {
        paragraphs: { id: string }[];
        glossary: { term: string }[];
        questions: Record<string, unknown>[];
      };
      progress: { status: string; readCount: number; bookmarked: boolean };
      paragraphBookmarks: string[];
    };
    expect(bundle.text.paragraphs.length).toBe(6);
    expect(bundle.text.glossary.length).toBeGreaterThan(0);
    expect(bundle.text.questions.length).toBeGreaterThanOrEqual(5);
    for (const question of bundle.text.questions) {
      expect(question["correctOptionId"]).toBeUndefined();
      expect(question["correctOrder"]).toBeUndefined();
      expect(question["acceptedAnswers"]).toBeUndefined();
      expect(question["feedback"]).toBeUndefined();
    }
    // Opening a text creates an in-progress row only — never completion.
    expect(bundle.progress.status).toBe("in-progress");
    expect(bundle.progress.readCount).toBe(0);

    const missing = await textRoute(request("/api/reading/texts/nope", { headers: { cookie } }), ctx({ slug: "nope" }));
    expect(missing.status).toBe(404);
  });

  it("tracks paragraphs, bookmarks and reading progress (no auto-mastery)", async () => {
    const cookie = await registerTestUser();
    const text = getReadingText("mias-day")!;

    // Reading paragraphs is tracked but does not complete the text.
    for (const paragraph of text.paragraphs) {
      const res = await stateRoute(
        request("/api/reading/state", jsonBody({ slug: "mias-day", action: "paragraph-read", paragraphId: paragraph.id }, cookie)),
      );
      expect(res.status).toBe(200);
    }
    const afterRead = (await (
      await textRoute(request("/api/reading/texts/mias-day", { headers: { cookie } }), ctx({ slug: "mias-day" }))
    ).json()) as { progress: { readCount: number; status: string; totalParagraphs: number } };
    expect(afterRead.progress.readCount).toBe(afterRead.progress.totalParagraphs);
    expect(afterRead.progress.status).toBe("in-progress"); // no passed run yet!

    // Whole-text bookmark.
    const bookmarkRes = await stateRoute(
      request("/api/reading/state", jsonBody({ slug: "mias-day", action: "bookmark", bookmarked: true }, cookie)),
    );
    expect(((await bookmarkRes.json()) as { progress: { bookmarked: boolean } }).progress.bookmarked).toBe(true);

    // Paragraph bookmark (toggle on, then off).
    const on = await stateRoute(
      request("/api/reading/state", jsonBody({ slug: "mias-day", action: "paragraph-bookmark", paragraphId: "p2" }, cookie)),
    );
    expect(((await on.json()) as { paragraphBookmarks: string[] }).paragraphBookmarks).toEqual(["p2"]);
    const off = await stateRoute(
      request("/api/reading/state", jsonBody({ slug: "mias-day", action: "paragraph-bookmark", paragraphId: "p2" }, cookie)),
    );
    expect(((await off.json()) as { paragraphBookmarks: string[] }).paragraphBookmarks).toEqual([]);

    // Unknown paragraph ids are rejected.
    const bad = await stateRoute(
      request("/api/reading/state", jsonBody({ slug: "mias-day", action: "paragraph-read", paragraphId: "zzz" }, cookie)),
    );
    expect(bad.status).toBe(400);
  });

  it("grades practice checks with full feedback", async () => {
    const cookie = await registerTestUser();
    const text = getReadingText("mias-day")!;
    const question = text.questions.find((q) => q.format === "choice")!;

    const wrongOption = question.options.find((o) => o.id !== question.correctOptionId)!;
    const wrongRes = await checkRoute(
      request(
        "/api/reading/check",
        jsonBody({ slug: "mias-day", questionId: question.id, answer: { format: "choice", optionId: wrongOption.id } }, cookie),
      ),
    );
    expect(wrongRes.status).toBe(200);
    const wrong = (await wrongRes.json()) as { correct: boolean; feedback: { correctAnswer: string; explanation: string } };
    expect(wrong.correct).toBe(false);
    expect(wrong.feedback.correctAnswer.length).toBeGreaterThan(0);
    expect(wrong.feedback.explanation.length).toBeGreaterThan(0);

    const rightRes = await checkRoute(
      request(
        "/api/reading/check",
        jsonBody({ slug: "mias-day", questionId: question.id, answer: correctAnswerFor(question) }, cookie),
      ),
    );
    expect(((await rightRes.json()) as { correct: boolean }).correct).toBe(true);

    // Skill stats appear in the library after attempts.
    const libraryRes = await libraryRoute(request("/api/reading/library", { headers: { cookie } }));
    const library = (await libraryRes.json()) as { skillStats: { skill: string; attempts: number }[] };
    const detail = library.skillStats.find((s) => s.skill === "detail");
    expect(detail?.attempts).toBeGreaterThanOrEqual(2);
  });

  it("runs the full comprehension check: pass → completion, retry → best score", async () => {
    const cookie = await registerTestUser();
    const text = getReadingText("mias-day")!;

    // Read every paragraph first.
    for (const paragraph of text.paragraphs) {
      await stateRoute(
        request("/api/reading/state", jsonBody({ slug: "mias-day", action: "paragraph-read", paragraphId: paragraph.id }, cookie)),
      );
    }

    // Start a run.
    const startRes = await runStartRoute(
      request("/api/reading/runs", jsonBody({ slug: "mias-day" }, cookie)),
    );
    expect(startRes.status).toBe(200);
    const start = (await startRes.json()) as {
      runId: string;
      passScore: number;
      total: number;
      questions: { id: string }[];
    };
    expect(start.total).toBe(text.questions.length);
    expect(start.questions).toHaveLength(text.questions.length);

    // Submit a failing run: every answer wrong where possible.
    const wrongAnswers: Record<string, unknown> = {};
    for (const question of text.questions) {
      if (question.format === "choice") {
        const wrongOption = question.options.find((o) => o.id !== question.correctOptionId)!;
        wrongAnswers[question.id] = { format: "choice", optionId: wrongOption.id };
      } else if (question.format === "sequence") {
        wrongAnswers[question.id] = { format: "sequence", order: [...question.correctOrder].reverse() };
      } else {
        wrongAnswers[question.id] = { format: "short-text", text: "definitely not it" };
      }
    }
    const failRes = await runSubmitRoute(
      request(`/api/reading/runs/${start.runId}/submit`, jsonBody({ answers: wrongAnswers }, cookie)), ctx({ id: start.runId }),
    );
    expect(failRes.status).toBe(200);
    const failed = (await failRes.json()) as {
      summary: { passed: boolean; correct: number };
      progress: { status: string; bestRunScore: number; runsCompleted: number };
    };
    expect(failed.summary.passed).toBe(false);
    expect(failed.progress.status).toBe("in-progress"); // not passed → no completion
    expect(failed.progress.runsCompleted).toBe(1);

    // A second run with every answer correct completes the text.
    const secondRes = await runStartRoute(
      request("/api/reading/runs", jsonBody({ slug: "mias-day" }, cookie)),
    );
    const second = (await secondRes.json()) as { runId: string };
    const answers: Record<string, unknown> = {};
    for (const question of text.questions) {
      answers[question.id] = correctAnswerFor(question);
    }
    const passRes = await runSubmitRoute(
      request(`/api/reading/runs/${second.runId}/submit`, jsonBody({ answers }, cookie)), ctx({ id: second.runId }),
    );
    const passed = (await passRes.json()) as {
      summary: { passed: boolean; scorePercent: number; bySkill: { skill: string; correct: number }[]; recommendation: string };
      review: { questionId: string; correct: boolean; submittedDescription: string; feedback: { correctAnswer: string } }[];
      progress: { status: string; bestRunScore: number; completedAt: string | null };
    };
    expect(passed.summary.passed).toBe(true);
    expect(passed.summary.scorePercent).toBe(100);
    expect(passed.summary.bySkill.length).toBeGreaterThan(0);
    expect(passed.summary.recommendation.length).toBeGreaterThan(0);
    expect(passed.review).toHaveLength(text.questions.length);
    expect(passed.review.every((item) => item.correct)).toBe(true);
    expect(passed.progress.status).toBe("completed");
    expect(passed.progress.completedAt).not.toBeNull();
    expect(passed.progress.bestRunScore).toBe(1);

    // Double submission is rejected.
    const again = await runSubmitRoute(
      request(`/api/reading/runs/${second.runId}/submit`, jsonBody({ answers }, cookie)), ctx({ id: second.runId }),
    );
    expect(again.status).toBe(400);

    // The library now shows the completed text.
    const libraryRes = await libraryRoute(request("/api/reading/library", { headers: { cookie } }));
    const library = (await libraryRes.json()) as {
      texts: { slug: string; progress: { status: string; bestRunScore: number } | null }[];
    };
    const mine = library.texts.find((t) => t.slug === "mias-day");
    expect(mine?.progress?.status).toBe("completed");
  });
});
