/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { POST as registerRoute } from "@/app/api/auth/register/route";
import { GET as libraryRoute } from "@/app/api/listening/library/route";
import { GET as activityRoute } from "@/app/api/listening/activities/[slug]/route";
import { POST as checkRoute } from "@/app/api/listening/check/route";
import { getListeningActivity, listeningActivities } from "@/data/listening";
import type { ListeningExercise } from "@/data/listening/types";

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
  const email = `listener-${Date.now()}-${Math.floor(Math.random() * 10000)}@talksy.test`;
  const res = await registerRoute(
    request("/api/auth/register", jsonBody({ email, name: "Listener", password: "password123" })),
  );
  expect(res.status).toBe(201);
  return extractCookies(res);
}

function correctAnswerFor(exercise: ListeningExercise): unknown {
  switch (exercise.format) {
    case "listen-select":
    case "speaker-identify":
    case "specific-info":
    case "overall-meaning":
      return { format: "choice", optionId: exercise.correctOptionId };
    case "listen-complete":
      return {
        format: "complete",
        blanks: Object.fromEntries(
          exercise.blanks.map((blank) => [blank.id, blank.acceptedAnswers[0]]),
        ),
      };
    case "listen-arrange":
      return { format: "arrange", order: exercise.correctOrder };
    default:
      return { format: "text", text: exercise.acceptedAnswers[0] };
  }
}

describe("listening API golden path", () => {
  it("requires login for every route", async () => {
    expect((await libraryRoute(request("/api/listening/library"))).status).toBe(401);
    expect(
      (await activityRoute(request("/api/listening/activities/greeting-phrases"), ctx({ slug: "greeting-phrases" }))).status,
    ).toBe(401);
    expect(
      (await checkRoute(
        request("/api/listening/check", jsonBody({ slug: "greeting-phrases", exerciseId: "x1", answer: null })),
      )).status,
    ).toBe(401);
  });

  it("lists the nine stages and serves a locked-activity bundle without grading data", async () => {
    const cookie = await registerTestUser();

    const libraryRes = await libraryRoute(request("/api/listening/library", { headers: { cookie } }));
    expect(libraryRes.status).toBe(200);
    const library = (await libraryRes.json()) as {
      stages: { id: string }[];
      activities: { slug: string; formats: string[]; progress: unknown }[];
    };
    expect(library.stages).toHaveLength(9);
    expect(library.activities.length).toBe(listeningActivities.length);
    expect(library.activities.every((a) => a.progress === null)).toBe(true);

    const activityRes = await activityRoute(
      request("/api/listening/activities/greeting-phrases", { headers: { cookie } }),
      ctx({ slug: "greeting-phrases" }),
    );
    expect(activityRes.status).toBe(200);
    const bundle = (await activityRes.json()) as {
      activity: {
        segments: { id: string; text: string }[];
        exercises: Record<string, unknown>[];
        transcriptPolicy: string;
      };
      progress: { status: string; transcriptUnlocked: boolean; completedCount: number };
    };
    expect(bundle.activity.segments.length).toBeGreaterThanOrEqual(4);
    for (const exercise of bundle.activity.exercises) {
      expect(exercise["correctOptionId"]).toBeUndefined();
      expect(exercise["correctOrder"]).toBeUndefined();
      expect(exercise["acceptedAnswers"]).toBeUndefined();
      expect(exercise["feedback"]).toBeUndefined();
      if (exercise["format"] === "listen-complete") {
        const blanks = exercise["blanks"] as { id: string }[];
        expect(blanks.every((b) => Object.keys(b).length === 1)).toBe(true);
      }
    }
    // Locked activity: opening it does not complete or unlock anything.
    expect(bundle.activity.transcriptPolicy).toBe("locked");
    expect(bundle.progress.status).toBe("in-progress");
    expect(bundle.progress.transcriptUnlocked).toBe(false);

    const missing = await activityRoute(
      request("/api/listening/activities/nope", { headers: { cookie } }),
      ctx({ slug: "nope" }),
    );
    expect(missing.status).toBe(404);
  });

  it("grades checks, tracks first-try scores, completes the activity and unlocks the transcript", async () => {
    const cookie = await registerTestUser();
    const activity = getListeningActivity("greeting-phrases")!;
    const first = activity.exercises[0];

    // A wrong first attempt is recorded; the exercise is not completed.
    const wrongAnswer =
      first.format === "listen-select" || first.format === "specific-info" || first.format === "overall-meaning" || first.format === "speaker-identify"
        ? { format: "choice", optionId: first.options.find((o) => o.id !== first.correctOptionId)!.id }
        : { format: "text", text: "not right" };
    const wrongRes = await checkRoute(
      request(
        "/api/listening/check",
        jsonBody({ slug: "greeting-phrases", exerciseId: first.id, answer: wrongAnswer }, cookie),
      ),
    );
    expect(wrongRes.status).toBe(200);
    const wrong = (await wrongRes.json()) as {
      correct: boolean;
      feedback: { correctAnswer: string; revealSegments: string[] };
      progress: { exercisesCompleted: string[]; status: string; transcriptUnlocked: boolean };
    };
    expect(wrong.correct).toBe(false);
    expect(wrong.feedback.revealSegments.length).toBeGreaterThan(0); // per-exercise reveal
    expect(wrong.progress.exercisesCompleted).toEqual([]);
    expect(wrong.progress.transcriptUnlocked).toBe(false);

    // Retry correctly: completed, but NOT first-try → score below 100%.
    const retryRes = await checkRoute(
      request(
        "/api/listening/check",
        jsonBody({ slug: "greeting-phrases", exerciseId: first.id, answer: correctAnswerFor(first) }, cookie),
      ),
    );
    const retry = (await retryRes.json()) as {
      correct: boolean;
      progress: { exercisesCompleted: string[]; scorePercent: number };
    };
    expect(retry.correct).toBe(true);
    expect(retry.progress.exercisesCompleted).toEqual([first.id]);

    // Solve every remaining exercise correctly on the first try.
    for (const exercise of activity.exercises.slice(1)) {
      const res = await checkRoute(
        request(
          "/api/listening/check",
          jsonBody({ slug: "greeting-phrases", exerciseId: exercise.id, answer: correctAnswerFor(exercise) }, cookie),
        ),
      );
      expect(res.status).toBe(200);
    }

    const finalRes = await activityRoute(
      request("/api/listening/activities/greeting-phrases", { headers: { cookie } }),
      ctx({ slug: "greeting-phrases" }),
    );
    const final = (await finalRes.json()) as {
      progress: {
        status: string;
        completedCount: number;
        totalExercises: number;
        scorePercent: number;
        transcriptUnlocked: boolean;
        completedAt: string | null;
      };
    };
    expect(final.progress.status).toBe("completed");
    expect(final.progress.completedCount).toBe(final.progress.totalExercises);
    expect(final.progress.completedAt).not.toBeNull();
    expect(final.progress.transcriptUnlocked).toBe(true); // unlocked on completion
    expect(final.progress.scorePercent).toBe(
      Math.round(((activity.exercises.length - 1) / activity.exercises.length) * 100),
    );
  });

  it("keeps open-policy transcripts visible from the start", async () => {
    const cookie = await registerTestUser();
    const res = await activityRoute(
      request("/api/listening/activities/first-letter-sounds", { headers: { cookie } }),
      ctx({ slug: "first-letter-sounds" }),
    );
    const bundle = (await res.json()) as {
      activity: { transcriptPolicy: string };
      progress: { transcriptUnlocked: boolean; status: string };
    };
    expect(bundle.activity.transcriptPolicy).toBe("open");
    expect(bundle.progress.transcriptUnlocked).toBe(true);
    expect(bundle.progress.status).toBe("in-progress"); // open transcript ≠ completed
  });

  it("grades speaker identification from a multi-voice conversation", async () => {
    const cookie = await registerTestUser();
    const activity = getListeningActivity("ordering-at-a-cafe")!;
    const exercise = activity.exercises.find((e) => e.format === "speaker-identify")!;

    const res = await checkRoute(
      request(
        "/api/listening/check",
        jsonBody({ slug: "ordering-at-a-cafe", exerciseId: exercise.id, answer: correctAnswerFor(exercise) }, cookie),
      ),
    );
    const data = (await res.json()) as {
      correct: boolean;
      feedback: { correctAnswer: string; revealSegments: string[] };
    };
    expect(data.correct).toBe(true);
    expect(data.feedback.correctAnswer).toBe("The barista");
    expect(data.feedback.revealSegments.length).toBeGreaterThan(0);
  });
});
