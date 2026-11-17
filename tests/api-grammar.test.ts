/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { POST as clinicPostRoute, GET as clinicGetRoute } from "@/app/api/grammar/clinic/route";
import { POST as attemptRoute } from "@/app/api/exercises/attempt/route";
import { POST as registerRoute } from "@/app/api/auth/register/route";
import { buildCorrectAnswer } from "./helpers";
import { getExercisesByIds } from "@/data/curriculum";

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

function jsonBody(body: unknown, cookie?: string): RequestInit {
  return {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(cookie ? { cookie } : {}),
    },
    body: JSON.stringify(body),
  };
}

async function registerTestUser(): Promise<string> {
  const email = `clinic-${Date.now()}-${Math.floor(Math.random() * 10000)}@talksy.test`;
  const res = await registerRoute(
    request("/api/auth/register", jsonBody({ email, name: "Clinic Tester", password: "password123" })),
  );
  expect(res.status).toBe(201);
  return extractCookies(res);
}

describe("Grammar Error Clinic API", () => {
  it("requires authentication", async () => {
    const res = await clinicPostRoute(
      request("/api/grammar/clinic", jsonBody({ sentence: "i are happy" })),
    );
    expect(res.status).toBe(401);
  });

  it("checks, corrects and stores a submission, then reports recurring categories", async () => {
    const cookie = await registerTestUser();

    // Submit two sentences with article + agreement errors.
    const first = await clinicPostRoute(
      request("/api/grammar/clinic", jsonBody({ sentence: "i are happy" }, cookie)),
    );
    expect(first.status).toBe(200);
    const firstData = (await first.json()) as {
      corrected: string;
      clean: boolean;
      issues: { category: string; explanation: string }[];
      categories: string[];
    };
    expect(firstData.corrected).toBe("I am happy.");
    expect(firstData.clean).toBe(false);
    expect(firstData.categories).toContain("subject-verb-agreement");
    expect(firstData.issues[0].explanation.length).toBeGreaterThan(5);

    const second = await clinicPostRoute(
      request("/api/grammar/clinic", jsonBody({ sentence: "she have a apple" }, cookie)),
    );
    expect(second.status).toBe(200);

    // Clean sentence.
    const clean = await clinicPostRoute(
      request("/api/grammar/clinic", jsonBody({ sentence: "She works in a bank." }, cookie)),
    );
    const cleanData = (await clean.json()) as { clean: boolean; issues: unknown[] };
    expect(cleanData.clean).toBe(true);
    expect(cleanData.issues).toEqual([]);

    // History: 3 submissions, recurring categories, recommended lessons.
    const historyRes = await clinicGetRoute(
      request("/api/grammar/clinic", { headers: { cookie } }),
    );
    expect(historyRes.status).toBe(200);
    const history = (await historyRes.json()) as {
      submissions: { sentence: string; corrected: string; categories: string[] }[];
      recurring: { category: string; count: number }[];
      recommendedLessons: { slug: string }[];
    };
    expect(history.submissions).toHaveLength(3);
    expect(history.submissions[0].sentence).toBe("She works in a bank.");
    expect(
      history.recurring.some((r) => r.category === "subject-verb-agreement"),
    ).toBe(true);
    // Agreement errors recommend the present-tenses lesson.
    expect(
      history.recommendedLessons.some((l) => l.slug === "grammar-tenses-present"),
    ).toBe(true);
    // Article errors recommend the nouns lesson.
    expect(history.recommendedLessons.some((l) => l.slug === "grammar-pos-1")).toBe(true);
  });

  it("rejects empty and oversized sentences", async () => {
    const cookie = await registerTestUser();
    const empty = await clinicPostRoute(
      request("/api/grammar/clinic", jsonBody({ sentence: "   " }, cookie)),
    );
    expect(empty.status).toBe(422);
    const huge = await clinicPostRoute(
      request("/api/grammar/clinic", jsonBody({ sentence: "x".repeat(600) }, cookie)),
    );
    expect(huge.status).toBe(422);
  });
});

describe("sentence-build attempts via the exercise API", () => {
  it("grades sentence-build answers and returns the structure after grading", async () => {
    const cookie = await registerTestUser();

    // Correct submission → structure attached for inspection.
    const correct = await attemptRoute(
      request(
        "/api/exercises/attempt",
        jsonBody(
          {
            exerciseId: "lab2-2-sb",
            lessonSlug: "lab-2-basic-structure",
            answer: { tokens: ["Sara", "reads", "books", "."] },
            hintsUsed: 0,
            durationMs: 8000,
          },
          cookie,
        ),
      ),
    );
    expect(correct.status).toBe(200);
    const correctData = (await correct.json()) as {
      correct: boolean;
      structure?: { pattern: string; tokens: { text: string }[] };
    };
    expect(correctData.correct).toBe(true);
    expect(correctData.structure?.pattern).toBe("S + V + O");

    // Wrong submission → structure still available for learning.
    const wrong = await attemptRoute(
      request(
        "/api/exercises/attempt",
        jsonBody(
          {
            exerciseId: "lab2-2-sb",
            lessonSlug: "lab-2-basic-structure",
            answer: { tokens: ["Sara", "reads", "book", "."] },
            hintsUsed: 1,
            durationMs: 12000,
          },
          cookie,
        ),
      ),
    );
    const wrongData = (await wrong.json()) as { correct: boolean; structure?: unknown };
    expect(wrongData.correct).toBe(false);
    expect(wrongData.structure).toBeDefined();
  });

  it("records challenge-context attempts", async () => {
    const cookie = await registerTestUser();
    const exercises = getExercisesByIds(["lab1-2-mcq", "lab1-3-match"]);
    for (const exercise of exercises) {
      const res = await attemptRoute(
        request(
          "/api/exercises/attempt",
          jsonBody(
            {
              exerciseId: exercise.id,
              lessonSlug: "lab-1-word-recognition",
              answer: buildCorrectAnswer(exercise),
              hintsUsed: 0,
              durationMs: 5000,
              context: "challenge",
            },
            cookie,
          ),
        ),
      );
      expect(res.status).toBe(200);
      expect(((await res.json()) as { correct: boolean }).correct).toBe(true);
    }
  });
});
