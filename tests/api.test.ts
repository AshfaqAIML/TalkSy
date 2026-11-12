/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { POST as registerRoute } from "@/app/api/auth/register/route";
import { POST as loginRoute } from "@/app/api/auth/login/route";
import { POST as logoutRoute } from "@/app/api/auth/logout/route";
import { GET as meRoute } from "@/app/api/auth/me/route";
import { GET as curriculumRoute } from "@/app/api/curriculum/route";
import { GET as lessonRoute } from "@/app/api/curriculum/[slug]/route";
import { POST as attemptRoute } from "@/app/api/exercises/attempt/route";
import { POST as stateRoute } from "@/app/api/lessons/[slug]/state/route";
import { POST as startAssessmentRoute } from "@/app/api/assessments/route";
import { POST as submitAssessmentRoute } from "@/app/api/assessments/[id]/submit/route";
import { GET as progressRoute } from "@/app/api/progress/route";
import { GET as statsRoute } from "@/app/api/stats/route";
import { getExercise, getExercisesByIds, getLesson } from "@/data/curriculum";
import { buildCorrectAnswer } from "./helpers";

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
  return setCookie
    .map((cookie: string) => cookie.split(";")[0])
    .join("; ");
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

async function registerTestUser(): Promise<{ cookie: string; email: string }> {
  const email = `test-${Date.now()}-${Math.floor(Math.random() * 10000)}@talksy.test`;
  const res = await registerRoute(
    request("/api/auth/register", jsonBody({ email, name: "Test Learner", password: "password123" })),
  );
  expect(res.status).toBe(201);
  return { cookie: extractCookies(res), email };
}

describe("auth API", () => {
  it("registers, logs in, resolves me and logs out", async () => {
    const { cookie, email } = await registerTestUser();

    const meRes = await meRoute(request("/api/auth/me", { headers: { cookie } }));
    const me = (await meRes.json()) as { user: { email: string } | null };
    expect(me.user?.email).toBe(email);

    const loginRes = await loginRoute(
      request("/api/auth/login", jsonBody({ email, password: "password123" })),
    );
    expect(loginRes.status).toBe(200);
    const loginCookie = extractCookies(loginRes);
    expect(loginCookie).toContain("talksy_session=");

    const wrongLogin = await loginRoute(
      request("/api/auth/login", jsonBody({ email, password: "nope-nope" })),
    );
    expect(wrongLogin.status).toBe(401);

    const logoutRes = await logoutRoute(
      request("/api/auth/logout", { method: "POST", headers: { cookie: loginCookie } }),
    );
    expect(logoutRes.status).toBe(200);

    const meAfter = await meRoute(
      request("/api/auth/me", { headers: { cookie: extractCookies(logoutRes) } }),
    );
    const after = (await meAfter.json()) as { user: unknown };
    expect(after.user).toBeNull();
  });

  it("rejects invalid registrations", async () => {
    const badEmail = await registerRoute(
      request("/api/auth/register", jsonBody({ email: "not-an-email", name: "A", password: "password123" })),
    );
    expect(badEmail.status).toBe(422);

    const shortPassword = await registerRoute(
      request("/api/auth/register", jsonBody({ email: "ok@ok.com", name: "Ab", password: "short" })),
    );
    expect(shortPassword.status).toBe(422);
  });
});

describe("curriculum API", () => {
  it("returns the level/unit/lesson tree with totals", async () => {
    const res = await curriculumRoute();
    expect(res.status).toBe(200);
    const data = (await res.json()) as {
      levels: { id: string; units: { lessons: unknown[] }[] }[];
      totals: { lessons: number; blockTypes: number; exerciseTypes: number };
    };
    expect(data.levels.map((l) => l.id)).toEqual([
      "pre-a1",
      "a1",
      "grammar-core",
      "a2",
    ]);
    expect(data.totals.lessons).toBe(20);
    expect(data.totals.blockTypes).toBe(20);
    expect(data.totals.exerciseTypes).toBe(16);
  });

  it("404s for unknown lessons", async () => {
    const res = await lessonRoute(request("/api/curriculum/nope"), ctx({ slug: "nope" }));
    expect(res.status).toBe(404);
  });
});

describe("lesson + exercise + assessment flow (the golden path)", () => {
  it("walks a learner from open to completed lesson", async () => {
    const { cookie } = await registerTestUser();

    // --- 1. Open the lesson ----------------------------------------------
    const openRes = await lessonRoute(
      request("/api/curriculum/p1-1-1", { headers: { cookie } }),
      ctx({ slug: "p1-1-1" }),
    );
    expect(openRes.status).toBe(200);
    const opened = (await openRes.json()) as {
      lesson: { slug: string };
      exercises: { id: string }[];
      progress: { status: string; sectionsCompleted: string[] } | null;
      completion: { completed: boolean; sectionsDone: number; sectionsTotal: number };
    };
    // No auto-mastery: opening initializes in-progress, never completed.
    expect(opened.progress?.status).toBe("in-progress");
    expect(opened.progress?.sectionsCompleted).toEqual([]);
    expect(opened.completion.completed).toBe(false);
    expect(opened.completion.sectionsDone).toBe(0);
    // Sanitized exercises never leak the answer key.
    const rawExercises = opened.exercises as unknown as Record<string, unknown>[];
    for (const ex of rawExercises) {
      expect(ex.feedback).toBeUndefined();
      expect(ex.correctOptionId).toBeUndefined();
      expect(ex.acceptedAnswers).toBeUndefined();
    }

    // --- 2. Attempt an exercise: wrong, then retry correct ---------------
    const wrongRes = await attemptRoute(
      request(
        "/api/exercises/attempt",
        jsonBody(
          {
            exerciseId: "p1-1-1-mcq-1",
            lessonSlug: "p1-1-1",
            answer: { optionId: "a" },
            hintsUsed: 1,
            durationMs: 4200,
          },
          cookie,
        ),
      ),
    );
    expect(wrongRes.status).toBe(200);
    const wrong = (await wrongRes.json()) as {
      correct: boolean;
      points: number;
      feedback: { correctAnswer: string; whyWrong?: string; grammarRule?: unknown };
    };
    expect(wrong.correct).toBe(false);
    expect(wrong.points).toBe(0);
    expect(wrong.feedback.correctAnswer).toBe("Good morning");
    expect(wrong.feedback.whyWrong).toBeTruthy();

    const rightRes = await attemptRoute(
      request(
        "/api/exercises/attempt",
        jsonBody(
          {
            exerciseId: "p1-1-1-mcq-1",
            lessonSlug: "p1-1-1",
            answer: { optionId: "b" },
            hintsUsed: 1,
            durationMs: 9000,
          },
          cookie,
        ),
      ),
    );
    const right = (await rightRes.json()) as { correct: boolean; points: number; totalPoints: number };
    expect(right.correct).toBe(true);
    expect(right.points).toBe(10);
    expect(right.totalPoints).toBe(10);

    // Requires auth.
    const anonAttempt = await attemptRoute(
      request(
        "/api/exercises/attempt",
        jsonBody({ exerciseId: "p1-1-1-mcq-1", lessonSlug: "p1-1-1", answer: { optionId: "b" } }),
      ),
    );
    expect(anonAttempt.status).toBe(401);

    // Unknown exercise.
    const ghostAttempt = await attemptRoute(
      request(
        "/api/exercises/attempt",
        jsonBody({ exerciseId: "ghost", lessonSlug: "p1-1-1", answer: {} }, cookie),
      ),
    );
    expect(ghostAttempt.status).toBe(404);

    // --- 3. Complete every section ----------------------------------------
    const lesson = getLesson("p1-1-1")!;
    for (const section of lesson.sections) {
      const res = await stateRoute(
        request("/api/lessons/p1-1-1/state", jsonBody({ action: "complete-section", sectionId: section.id }, cookie)),
        ctx({ slug: "p1-1-1" }),
      );
      expect(res.status).toBe(200);
    }

    // All sections done but assessment not passed → still not completed.
    const midState = (await (
      await stateRoute(
        request("/api/lessons/p1-1-1/state", jsonBody({ action: "position", sectionId: "first-dialogue" }, cookie)),
        ctx({ slug: "p1-1-1" }),
      )
    ).json()) as { completion: { completed: boolean; sectionsDone: number } };
    expect(midState.completion.sectionsDone).toBe(4);
    expect(midState.completion.completed).toBe(false);

    // Forged section id is rejected.
    const forged = await stateRoute(
      request("/api/lessons/p1-1-1/state", jsonBody({ action: "complete-section", sectionId: "hack" }, cookie)),
      ctx({ slug: "p1-1-1" }),
    );
    expect(forged.status).toBe(422);

    // Bookmark + note.
    const bookmarked = (await (
      await stateRoute(
        request("/api/lessons/p1-1-1/state", jsonBody({ action: "bookmark", bookmarked: true }, cookie)),
        ctx({ slug: "p1-1-1" }),
      )
    ).json()) as { progress: { bookmarked: boolean } };
    expect(bookmarked.progress.bookmarked).toBe(true);

    const noted = await stateRoute(
      request("/api/lessons/p1-1-1/state", jsonBody({ action: "note", sectionId: "first-dialogue", content: "Review replies!" }, cookie)),
      ctx({ slug: "p1-1-1" }),
    );
    expect(noted.status).toBe(200);

    // --- 4. Start and pass the assessment ----------------------------------
    const startRes = await startAssessmentRoute(
      request("/api/assessments", jsonBody({ lessonSlug: "p1-1-1" }, cookie)),
    );
    expect(startRes.status).toBe(201);
    const started = (await startRes.json()) as {
      assessmentId: string;
      passScore: number;
      total: number;
      questions: { id: string }[];
    };
    expect(started.total).toBe(5);
    expect(started.passScore).toBe(0.7);
    expect(started.questions).toHaveLength(5);
    // No grading data in assessment questions either.
    for (const q of started.questions as unknown as Record<string, unknown>[]) {
      expect(q.feedback).toBeUndefined();
    }

    const questions = getExercisesByIds(started.questions.map((q) => q.id));
    const answers = questions.map((q) => ({
      exerciseId: q.id,
      answer: buildCorrectAnswer(q),
    }));

    const submitRes = await submitAssessmentRoute(
      request(`/api/assessments/${started.assessmentId}/submit`, jsonBody({ answers }, cookie)),
      ctx({ id: started.assessmentId }),
    );
    expect(submitRes.status).toBe(200);
    const submitted = (await submitRes.json()) as {
      summary: { scorePercent: number; passed: boolean; total: number; correct: number; byDifficulty: unknown[]; bySkill: unknown[]; recommendation: string };
      review: { exerciseId: string; correct: boolean; feedback: { correctAnswer: string } }[];
      completion: { completed: boolean; sectionsDone: number };
    };
    expect(submitted.summary.scorePercent).toBe(100);
    expect(submitted.summary.passed).toBe(true);
    expect(submitted.summary.correct).toBe(5);
    expect(submitted.summary.byDifficulty.length).toBeGreaterThan(0);
    expect(submitted.summary.bySkill.length).toBeGreaterThan(0);
    expect(submitted.review).toHaveLength(5);
    expect(submitted.completion.completed).toBe(true);

    // Double submission is blocked.
    const doubleSubmit = await submitAssessmentRoute(
      request(`/api/assessments/${started.assessmentId}/submit`, jsonBody({ answers }, cookie)),
      ctx({ id: started.assessmentId }),
    );
    expect(doubleSubmit.status).toBe(409);

    // --- 5. Progress shows the completed lesson ----------------------------
    const progressRes = await progressRoute(request("/api/progress", { headers: { cookie } }));
    const progress = (await progressRes.json()) as {
      items: { lessonSlug: string; status: string; bookmarked: boolean; completion: { completed: boolean } }[];
    };
    const mine = progress.items.find((i) => i.lessonSlug === "p1-1-1");
    expect(mine?.status).toBe("completed");
    expect(mine?.bookmarked).toBe(true);
    expect(mine?.completion.completed).toBe(true);

    // --- 6. Stats reflect every attempt ------------------------------------
    const statsRes = await statsRoute(request("/api/stats", { headers: { cookie } }));
    const stats = (await statsRes.json()) as {
      totals: { attempts: number; correct: number; accuracy: number; hintsUsed: number; streakDays: number };
      byType: Record<string, { attempts: number; correct: number }>;
      assessments: { lessonSlug: string; passed: boolean }[];
    };
    // 2 practice attempts + 5 assessment attempts.
    expect(stats.totals.attempts).toBe(7);
    expect(stats.totals.correct).toBe(6);
    expect(stats.totals.hintsUsed).toBe(2);
    expect(stats.totals.streakDays).toBe(1);
    // Type buckets add up to the same total (2 practice mcq + the random draw).
    const bucketTotal = Object.values(stats.byType).reduce((sum, b) => sum + b.attempts, 0);
    expect(bucketTotal).toBe(7);
    expect(stats.byType.mcq.attempts).toBeGreaterThanOrEqual(2);
    expect(stats.assessments[0].lessonSlug).toBe("p1-1-1");
    expect(stats.assessments[0].passed).toBe(true);
  });

  it("keeps a failing assessment from completing the lesson", async () => {
    const { cookie } = await registerTestUser();
    const lesson = getLesson("p1-1-2")!;

    for (const section of lesson.sections) {
      await stateRoute(
        request("/api/lessons/p1-1-2/state", jsonBody({ action: "complete-section", sectionId: section.id }, cookie)),
        ctx({ slug: "p1-1-2" }),
      );
    }

    const started = (await (
      await startAssessmentRoute(
        request("/api/assessments", jsonBody({ lessonSlug: "p1-1-2" }, cookie)),
      )
    ).json()) as { assessmentId: string; questions: { id: string }[] };

    // Answer everything wrong.
    const answers = started.questions.map((q) => ({
      exerciseId: q.id,
      answer: { definitely: "wrong" },
    }));
    const submitted = (await (
      await submitAssessmentRoute(
        request(`/api/assessments/${started.assessmentId}/submit`, jsonBody({ answers }, cookie)),
        ctx({ id: started.assessmentId }),
      )
    ).json()) as { summary: { passed: boolean; scorePercent: number }; completion: { completed: boolean } };

    expect(submitted.summary.passed).toBe(false);
    expect(submitted.summary.scorePercent).toBe(0);
    expect(submitted.completion.completed).toBe(false);
  });
});

describe("exercise grading parity", () => {
  it("the specific exercises used by the flow respond as expected", () => {
    const mcq = getExercise("p1-1-1-mcq-1")!;
    expect(mcq.type).toBe("mcq");
    expect(mcq.difficulty).toBe("easy");
  });
});
