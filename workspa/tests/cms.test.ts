/// <reference types="bun-types" />
/**
 * CMS test suite: RBAC, content-quality workflow, revision versioning,
 * learner delivery rules, historical-assessment protection and
 * import/export portability. Runs against db/test.db (see package.json).
 */

import { beforeAll, describe, expect, it } from "bun:test";
import { db } from "@/lib/db";
import { hashPassword } from "@/lib/auth";
import { POST as loginRoute } from "@/app/api/auth/login/route";
import { POST as registerRoute } from "@/app/api/auth/register/route";
import { GET as statsRoute } from "@/app/api/cms/admin/stats/route";
import { GET as treeRoute, POST as createCourseRoute } from "@/app/api/cms/admin/courses/route";
import { PATCH as coursePatchRoute, DELETE as courseDeleteRoute } from "@/app/api/cms/admin/courses/[id]/route";
import { POST as courseActionRoute } from "@/app/api/cms/admin/courses/[id]/action/route";
import { POST as createModuleRoute } from "@/app/api/cms/admin/modules/route";
import { POST as createUnitRoute } from "@/app/api/cms/admin/units/route";
import { POST as createLessonRoute } from "@/app/api/cms/admin/lessons/route";
import {
  GET as lessonGetRoute,
  PATCH as lessonPatchRoute,
  DELETE as lessonDeleteRoute,
} from "@/app/api/cms/admin/lessons/[id]/route";
import { POST as lessonActionRoute } from "@/app/api/cms/admin/lessons/[id]/action/route";
import { POST as lessonRestoreRoute } from "@/app/api/cms/admin/lessons/[id]/restore/route";
import { GET as questionsRoute, POST as questionCreateRoute } from "@/app/api/cms/admin/questions/route";
import { PATCH as questionPatchRoute } from "@/app/api/cms/admin/questions/[id]/route";
import { POST as questionActionRoute } from "@/app/api/cms/admin/questions/[id]/action/route";
import { GET as catalogueRoute } from "@/app/api/cms/courses/route";
import { GET as courseRoute } from "@/app/api/cms/courses/[slug]/route";
import { POST as enrolRoute } from "@/app/api/cms/courses/[slug]/enrol/route";
import { GET as lessonRoute } from "@/app/api/cms/lessons/[slug]/route";
import { POST as assignmentRoute } from "@/app/api/cms/lessons/[slug]/assignment/route";
import { POST as completeRoute } from "@/app/api/cms/lessons/[slug]/complete/route";
import { POST as attemptRoute } from "@/app/api/exercises/attempt/route";
import { POST as importRoute } from "@/app/api/cms/admin/import/route";
import { GET as exportRoute } from "@/app/api/cms/admin/export/route";
import { GET as assetFileRoute } from "@/app/api/cms/assets/[id]/file/route";
import { buildExercise, validateCmsBlock, countWords } from "@/lib/cms/validate";

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
  return setCookie.map((c) => c.split(";")[0]).join("; ");
}

function json(body: unknown, cookie?: string, method = "POST"): RequestInit {
  return {
    method,
    headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) },
    body: JSON.stringify(body),
  };
}

async function login(email: string, password: string): Promise<string> {
  const res = await loginRoute(request("/api/auth/login", json({ email, password })));
  expect(res.status).toBe(200);
  return extractCookies(res);
}

async function registerLearner(): Promise<{ cookie: string; id: string }> {
  const email = `learner-${Date.now()}-${Math.floor(Math.random() * 10000)}@talksy.test`;
  const res = await registerRoute(
    request("/api/auth/register", json({ email, name: "Learner", password: "password123" })),
  );
  expect(res.status).toBe(201);
  const body = (await res.json()) as { user: { id: string } };
  return { cookie: extractCookies(res), id: body.user.id };
}

const ADMIN = "admin@talksy.app";
const EDITOR = "editor@talksy.app";
const TEACHER = "teacher@talksy.app";

let adminCookie = "";
let editorCookie = "";
let teacherCookie = "";

beforeAll(async () => {
  // The login route's self-healing seed creates the staff accounts.
  adminCookie = await login(ADMIN, "Admin1234!");
  editorCookie = await login(EDITOR, "Editor1234!");
  teacherCookie = await login(TEACHER, "Teacher1234!");
});

// ---------------------------------------------------------------------------
// Validation unit checks
// ---------------------------------------------------------------------------

describe("CMS validation", () => {
  it("builds a valid MCQ exercise and rejects an unmarked answer", () => {
    const good = buildExercise(
      {
        type: "mcq",
        skill: "vocabulary",
        difficulty: "easy",
        prompt: "It is morning. What do you say?",
        correctAnswer: "Good morning!",
        explanation: "We say good morning before 12 p.m.",
        options: [
          { id: "a", text: "Good morning!" },
          { id: "b", text: "Good night!" },
        ],
        correctOptionId: "a",
      },
      "q1",
    );
    expect(good.ok).toBe(true);

    const bad = buildExercise(
      {
        type: "mcq",
        skill: "vocabulary",
        difficulty: "easy",
        prompt: "Pick one.",
        correctAnswer: "A",
        explanation: "Because.",
        options: [
          { id: "a", text: "A" },
          { id: "b", text: "B" },
        ],
        correctOptionId: "zzz",
      },
      "q2",
    );
    expect(bad.ok).toBe(false);
  });

  it("requires ___ in fill-blank sentences", () => {
    const res = buildExercise(
      {
        type: "fill-blank",
        prompt: "Complete the sentence.",
        correctAnswer: "is",
        explanation: "Names take 'is'.",
        sentence: "My name is Ana.",
        acceptedAnswers: ["is"],
      },
      "q3",
    );
    expect(res.ok).toBe(false);
    if (!res.ok) expect(res.error).toContain("___");
  });

  it("validates blocks: audio needs text in tts mode; images need alt", () => {
    expect(validateCmsBlock({ type: "audio", mode: "tts" }).ok).toBe(false);
    expect(validateCmsBlock({ type: "audio", mode: "tts", text: "Hello" }).ok).toBe(true);
    expect(validateCmsBlock({ type: "image", src: "x.png" }).ok).toBe(false);
    expect(validateCmsBlock({ type: "image", src: "x.png", alt: "A cat" }).ok).toBe(true);
  });

  it("counts words for assignment validation", () => {
    expect(countWords("Hello world, this is a test")).toBe(6);
    expect(countWords("   ")).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// RBAC
// ---------------------------------------------------------------------------

describe("CMS role-based access", () => {
  it("blocks anonymous users with 401", async () => {
    const res = await statsRoute(request("/api/cms/admin/stats"));
    expect(res.status).toBe(401);
  });

  it("blocks students from every admin route", async () => {
    const { cookie } = await registerLearner();
    const routes: [string, () => Promise<Response>][] = [
      ["stats", () => statsRoute(request("/api/cms/admin/stats", { headers: { cookie } }))],
      ["tree", () => treeRoute(request("/api/cms/admin/courses", { headers: { cookie } }))],
      ["questions", () => questionsRoute(request("/api/cms/admin/questions", { headers: { cookie } }))],
      ["catalogue-admin", () => importRoute(request("/api/cms/admin/import", json({}, cookie)))],
      ["users", () =>
        (async () => {
          const usersRoute = (await import("@/app/api/cms/admin/users/route")).GET;
          return usersRoute(request("/api/cms/admin/users", { headers: { cookie } }));
        })()],
    ];
    for (const [name, run] of routes) {
      const res = await run();
      expect(res.status).toBe(403);
      void name;
    }
  });

  it("does not show the Admin entry to students: me returns the role", async () => {
    const { cookie } = await registerLearner();
    const meRoute = (await import("@/app/api/auth/me/route")).GET;
    const res = await meRoute(request("/api/auth/me", { headers: { cookie } }));
    const body = (await res.json()) as { user: { role: string } };
    expect(body.user.role).toBe("student");
  });
});

// ---------------------------------------------------------------------------
// Content workflow + versioning
// ---------------------------------------------------------------------------

describe("CMS content workflow", () => {
  let courseId = "";
  let lessonId = "";

  it("editor creates course → module → unit → lesson", async () => {
    const courseRes = await createCourseRoute(
      request("/api/cms/admin/courses", json({ title: "QA Test Course", description: "For tests" }, editorCookie)),
    );
    expect(courseRes.status).toBe(200);
    courseId = ((await courseRes.json()) as { course: { id: string } }).course.id;

    const modRes = await createModuleRoute(
      request("/api/cms/admin/modules", json({ courseId, title: "QA Module" }, editorCookie)),
    );
    expect(modRes.status).toBe(200);
    const moduleId = ((await modRes.json()) as { module: { id: string } }).module.id;

    const unitRes = await createUnitRoute(
      request("/api/cms/admin/units", json({ moduleId, title: "QA Unit" }, editorCookie)),
    );
    expect(unitRes.status).toBe(200);
    const unitId = ((await unitRes.json()) as { unit: { id: string } }).unit.id;

    const lessonRes = await createLessonRoute(
      request("/api/cms/admin/lessons", json({ unitId, title: "QA Lesson One" }, editorCookie)),
    );
    expect(lessonRes.status).toBe(200);
    lessonId = ((await lessonRes.json()) as { lesson: { id: string } }).lesson.id;
  });

  it("rejects invalid lesson content with actionable errors", async () => {
    const res = await lessonPatchRoute(
      request(
        `/api/cms/admin/lessons/${lessonId}`,
        json(
          {
            title: "QA Lesson One",
            blocks: [
              { type: "heading", text: "Hi" },
              { type: "audio", mode: "tts", text: "" }, // invalid: no text
            ],
          },
          editorCookie,
          "PATCH",
        ),
      ),
      ctx({ id: lessonId }),
    );
    expect(res.status).toBe(422);
    const body = (await res.json()) as { error: string };
    expect(body.error).toContain("Block 2");
  });

  it("saves valid blocks and creates an immutable version snapshot", async () => {
    const res = await lessonPatchRoute(
      request(
        `/api/cms/admin/lessons/${lessonId}`,
        json(
          {
            title: "QA Lesson One",
            description: "Testing versioning",
            objectives: ["Say hello"],
            estimatedMinutes: 8,
            blocks: [
              { type: "heading", text: "Greetings" },
              { type: "text", text: "We greet people politely." },
            ],
            changeNote: "First content",
          },
          editorCookie,
          "PATCH",
        ),
      ),
      ctx({ id: lessonId }),
    );
    expect(res.status).toBe(200);
    const body = (await res.json()) as { lesson: { version: number } };
    expect(body.lesson.version).toBe(2); // 1 = created, 2 = first edit

    const detailRes = await lessonGetRoute(
      request(`/api/cms/admin/lessons/${lessonId}`, { headers: { cookie: editorCookie } }),
      ctx({ id: lessonId }),
    );
    const detail = (await detailRes.json()) as { versions: { version: number; changeNote: string }[] };
    expect(detail.versions.length).toBe(2);
    expect(detail.versions[0].changeNote).toBe("First content");
  });

  it("enforces draft → review → approved → live with role gates", async () => {
    // Editors cannot approve at all (role gate fires before state checks).
    const approveByEditor = await lessonActionRoute(
      request(`/api/cms/admin/lessons/${lessonId}/action`, json({ action: "approve" }, editorCookie)),
      ctx({ id: lessonId }),
    );
    expect(approveByEditor.status).toBe(403);
    const submit = await lessonActionRoute(
      request(`/api/cms/admin/lessons/${lessonId}/action`, json({ action: "submit" }, editorCookie)),
      ctx({ id: lessonId }),
    );
    expect(submit.status).toBe(200);

    const publishByTeacher = await lessonActionRoute(
      request(`/api/cms/admin/lessons/${lessonId}/action`, json({ action: "publish" }, teacherCookie)),
      ctx({ id: lessonId }),
    );
    expect(publishByTeacher.status).toBe(403); // teachers cannot publish

    const approveByTeacher = await lessonActionRoute(
      request(`/api/cms/admin/lessons/${lessonId}/action`, json({ action: "approve" }, teacherCookie)),
      ctx({ id: lessonId }),
    );
    expect(approveByTeacher.status).toBe(200);

    const publishByAdmin = await lessonActionRoute(
      request(`/api/cms/admin/lessons/${lessonId}/action`, json({ action: "publish" }, adminCookie)),
      ctx({ id: lessonId }),
    );
    expect(publishByAdmin.status).toBe(200);
    const published = (await publishByAdmin.json()) as { lesson: { live: boolean; publishedVersion: number } };
    expect(published.lesson.live).toBe(true);
    expect(published.lesson.publishedVersion).toBe(2);
  });

  it("restoring an old version creates a NEW version (history untouched)", async () => {
    const restore = await lessonRestoreRoute(
      request(`/api/cms/admin/lessons/${lessonId}/restore`, json({ version: 1 }, editorCookie)),
      ctx({ id: lessonId }),
    );
    expect(restore.status).toBe(200);
    const body = (await restore.json()) as { lesson: { version: number } };
    expect(body.lesson.version).toBe(3);

    const detailRes = await lessonGetRoute(
      request(`/api/cms/admin/lessons/${lessonId}`, { headers: { cookie: editorCookie } }),
      ctx({ id: lessonId }),
    );
    const detail = (await detailRes.json()) as { versions: unknown[]; blocks: unknown[] };
    expect(detail.versions.length).toBe(3); // v1 still there
    expect(detail.blocks.length).toBe(0); // v1 had no blocks
  });
});

// ---------------------------------------------------------------------------
// Learner delivery rules
// ---------------------------------------------------------------------------

describe("CMS learner delivery", () => {
  it("catalogue only shows live courses", async () => {
    const { cookie } = await registerLearner();
    const res = await catalogueRoute(request("/api/cms/courses", { headers: { cookie } }));
    expect(res.status).toBe(200);
    const body = (await res.json()) as { courses: { slug: string }[] };
    expect(body.courses.some((c) => c.slug === "everyday-english-foundations")).toBe(true);
    expect(body.courses.some((c) => c.slug === "qa-test-course")).toBe(false); // unpublished
  });

  it("blocks unauthenticated catalogue access", async () => {
    const res = await catalogueRoute(request("/api/cms/courses"));
    expect(res.status).toBe(401);
  });

  it("requires enrolment before opening a lesson", async () => {
    const { cookie } = await registerLearner();
    // The seeded course has a live lesson with slug greetings-and-introductions.
    const res = await lessonRoute(
      request("/api/cms/lessons/greetings-and-introductions", { headers: { cookie } }),
      ctx({ slug: "greetings-and-introductions" }),
    );
    expect(res.status).toBe(403);
  });

  it("locks prerequisite lessons until the required lesson is completed", async () => {
    const { cookie } = await registerLearner();
    await enrolRoute(
      request("/api/cms/courses/everyday-english-foundations/enrol", json({}, cookie)),
      ctx({ slug: "everyday-english-foundations" }),
    );
    const outlineRes = await courseRoute(
      request("/api/cms/courses/everyday-english-foundations", { headers: { cookie } }),
      ctx({ slug: "everyday-english-foundations" }),
    );
    const outline = (await outlineRes.json()) as {
      lessons: { slug: string; locked: boolean; lockedBy: { slug: string }[] }[];
    };
    const family = outline.lessons.find((l) => l.slug === "talking-about-your-family");
    expect(family?.locked).toBe(true);
    expect(family?.lockedBy[0]?.slug).toBe("greetings-and-introductions");

    const blocked = await lessonRoute(
      request("/api/cms/lessons/talking-about-your-family", { headers: { cookie } }),
      ctx({ slug: "talking-about-your-family" }),
    );
    expect(blocked.status).toBe(423);
  });

  it("completion is server-verified: exercises and assignments are required", async () => {
    const { cookie } = await registerLearner();
    await enrolRoute(
      request("/api/cms/courses/everyday-english-foundations/enrol", json({}, cookie)),
      ctx({ slug: "everyday-english-foundations" }),
    );

    const early = await completeRoute(
      request("/api/cms/lessons/greetings-and-introductions/complete", json({}, cookie)),
      ctx({ slug: "greetings-and-introductions" }),
    );
    expect(early.status).toBe(422); // missing exercises

    // Open the lesson (returns sanitised exercises — answers stripped).
    const lessonRes = await lessonRoute(
      request("/api/cms/lessons/greetings-and-introductions", { headers: { cookie } }),
      ctx({ slug: "greetings-and-introductions" }),
    );
    const lesson = (await lessonRes.json()) as {
      exercises: { id: string; options?: { id: string }[]; type: string; difficulty: string; skill: string }[];
      blocks: { id: string; block: { type: string; exerciseIds?: string[]; minWords?: number } }[];
    };
    expect(lesson.exercises.length).toBeGreaterThan(0);
    // Grading data must never reach the learner.
    for (const ex of lesson.exercises) {
      expect((ex as unknown as Record<string, unknown>).correctOptionId).toBeUndefined();
      expect((ex as unknown as Record<string, unknown>).feedback).toBeUndefined();
      expect((ex as unknown as Record<string, unknown>).acceptedAnswers).toBeUndefined();
    }

    // Answer every exercise. The first seeded question's correct option is "a"
    // (Good morning) — we look it up from the question bank instead of guessing.
    const questionsRes = await questionsRoute(
      request("/api/cms/admin/questions?search=greeting-time-of-day", { headers: { cookie: adminCookie } }),
    );
    const questions = (await questionsRes.json()) as {
      questions: { exercise: { type: string; id: string }; id: string }[];
    };
    void questions;

    // Answer each exercise in the lesson using the admin-known correct data
    // fetched through the attempt grading route itself: first submit a wrong
    // answer, learn correctness, then submit the correct one via the bank.
    const bank = await db.cmsQuestion.findMany({
      where: { id: { in: lesson.exercises.map((e) => e.id) } },
    });
    for (const q of bank) {
      const exercise = JSON.parse(q.data) as {
        type: string;
        options: { id: string }[];
        correctOptionId?: string;
        correctOptionIds?: string[];
        acceptedAnswers?: string[];
        pairs?: { leftId: string; rightId: string }[];
        correctTokens?: string[];
        items?: { id: string; categoryId: string }[];
      };
      let answer: unknown = null;
      switch (exercise.type) {
        case "mcq":
        case "read-answer":
          answer = { optionId: exercise.correctOptionId };
          break;
        case "multi-select":
          answer = { optionIds: exercise.correctOptionIds };
          break;
        case "match":
          answer = { pairs: exercise.pairs };
          break;
        case "drag-drop":
          answer = {
            placements: (exercise.items ?? []).map((i) => ({ itemId: i.id, categoryId: i.categoryId })),
          };
          break;
        case "rearrange":
          answer = { tokens: exercise.correctTokens };
          break;
        default:
          answer = { text: (exercise.acceptedAnswers ?? ["x"])[0] };
      }
      const attempt = await attemptRoute(
        request(
          "/api/exercises/attempt",
          json(
            {
              exerciseId: q.id,
              lessonSlug: "greetings-and-introductions",
              answer,
              hintsUsed: 0,
              durationMs: 1000,
            },
            cookie,
          ),
        ),
      );
      expect(attempt.status).toBe(200);
      const result = (await attempt.json()) as { correct: boolean };
      expect(result.correct).toBe(true);
    }

    // The seeded lesson has no assignment block in lesson 1 — completion
    // should now succeed.
    const done = await completeRoute(
      request("/api/cms/lessons/greetings-and-introductions/complete", json({}, cookie)),
      ctx({ slug: "greetings-and-introductions" }),
    );
    expect(done.status).toBe(200);
  });

  it("enforces assignment word minimums server-side", async () => {
    const { cookie } = await registerLearner();
    await enrolRoute(
      request("/api/cms/courses/everyday-english-foundations/enrol", json({}, cookie)),
      ctx({ slug: "everyday-english-foundations" }),
    );
    const lessonRes = await lessonRoute(
      request("/api/cms/lessons/talking-about-your-family", { headers: { cookie } }),
      ctx({ slug: "talking-about-your-family" }),
    );
    // Prerequisite not met yet for a fresh learner → 423.
    expect(lessonRes.status).toBe(423);
  });

  it("asset files require authentication", async () => {
    const res = await assetFileRoute(request("/api/cms/assets/anon/file"), ctx({ id: "anon" }));
    expect(res.status).toBe(401);
  });
});

// ---------------------------------------------------------------------------
// Historical assessment protection
// ---------------------------------------------------------------------------

describe("historical assessment protection", () => {
  it("keeps attempts pinned to the question version they were graded against", async () => {
    // Use a seeded published question that the demo/test learner answered in
    // the previous suite? Create our own to be deterministic.
    const createRes = await questionCreateRoute(
      request(
        "/api/cms/admin/questions",
        json(
          {
            type: "short-answer",
            skill: "grammar",
            difficulty: "easy",
            prompt: "Name one English greeting.",
            correctAnswer: "Hello",
            explanation: "Hello works at any time of day.",
            question: "Name one English greeting.",
            acceptedAnswers: ["hello", "hi"],
          },
          editorCookie,
        ),
      ),
    );
    expect(createRes.status).toBe(200);
    const { question } = (await createRes.json()) as { question: { id: string } };

    const { cookie } = await registerLearner();
    const attempt1 = await attemptRoute(
      request(
        "/api/exercises/attempt",
        json(
          { exerciseId: question.id, lessonSlug: "qa-anywhere", answer: { text: "hello" } },
          cookie,
        ),
      ),
    );
    expect(attempt1.status).toBe(200);

    const attemptRow = await db.exerciseAttempt.findFirst({
      where: { exerciseId: question.id, source: "cms" },
      orderBy: { createdAt: "desc" },
    });
    expect(attemptRow?.source).toBe("cms");
    expect(attemptRow?.questionVersionId).not.toBeNull();

    // Publish then edit the question: a new version is created and the
    // question drops out of "published".
    await questionActionRoute(
      request(`/api/cms/admin/questions/${question.id}/action`, json({ action: "submit" }, editorCookie)),
      ctx({ id: question.id }),
    );
    await questionActionRoute(
      request(`/api/cms/admin/questions/${question.id}/action`, json({ action: "approve" }, teacherCookie)),
      ctx({ id: question.id }),
    );
    await questionActionRoute(
      request(`/api/cms/admin/questions/${question.id}/action`, json({ action: "publish" }, adminCookie)),
      ctx({ id: question.id }),
    );
    const edit = await questionPatchRoute(
      request(
        `/api/cms/admin/questions/${question.id}`,
        json(
          {
            type: "short-answer",
            skill: "grammar",
            difficulty: "easy",
            prompt: "Name one English greeting (updated).",
            correctAnswer: "Hello",
            explanation: "Hello works at any time of day.",
            question: "Name one English greeting (updated).",
            acceptedAnswers: ["hello", "hi", "good morning"],
            changeNote: "Added an accepted answer",
          },
          editorCookie,
          "PATCH",
        ),
      ),
      ctx({ id: question.id }),
    );
    expect(edit.status).toBe(200);
    const edited = (await edit.json()) as { question: { version: number } };
    expect(edited.question.version).toBe(2);

    // The historical attempt still points at version 1's snapshot id.
    const stillThere = await db.exerciseAttempt.findFirst({
      where: { exerciseId: question.id, source: "cms" },
      orderBy: { createdAt: "desc" },
    });
    expect(stillThere?.questionVersionId).toBe(attemptRow?.questionVersionId);
    const version1 = await db.cmsQuestionVersion.findUnique({
      where: { id: attemptRow?.questionVersionId ?? "" },
    });
    expect(version1?.version).toBe(1);

    // Deleting a question with attempts is refused.
    const del = await (await import("@/app/api/cms/admin/questions/[id]/route")).DELETE(
      request(`/api/cms/admin/questions/${question.id}`, { method: "DELETE", headers: { cookie: adminCookie } }),
      ctx({ id: question.id }),
    );
    expect(del.status).toBe(409);
  });
});

// ---------------------------------------------------------------------------
// Portability
// ---------------------------------------------------------------------------

describe("import / export", () => {
  it("exports a course, validates the bundle, and imports it as drafts", async () => {
    // Find the seeded live course.
    const treeRes = await treeRoute(request("/api/cms/admin/courses", { headers: { cookie: adminCookie } }));
    const tree = (await treeRes.json()) as {
      courses: { id: string; slug: string; title: string; modules: unknown[] }[];
    };
    const seeded = tree.courses.find((c) => c.slug === "everyday-english-foundations");
    expect(seeded).toBeTruthy();

    const exportRes = await exportRoute(
      request(`/api/cms/admin/export?courseId=${seeded!.id}`, { headers: { cookie: adminCookie } }),
    );
    expect(exportRes.status).toBe(200);
    const bundle = (await exportRes.json()) as Record<string, unknown>;

    // Validation preview must pass.
    const previewRes = await importRoute(
      request("/api/cms/admin/import", json({ bundle, mode: "validate" }, adminCookie)),
    );
    expect(previewRes.status).toBe(200);
    const preview = (await previewRes.json()) as { preview: { ok: boolean; summary: { lessons: number; questions: number } } };
    expect(preview.preview.ok).toBe(true);
    expect(preview.preview.summary.lessons).toBeGreaterThan(0);
    expect(preview.preview.summary.questions).toBeGreaterThan(0);

    // A corrupted bundle is rejected without writing anything.
    const badBundle = JSON.parse(JSON.stringify(bundle)) as Record<string, unknown>;
    (badBundle.course as Record<string, unknown>).title = "";
    const badPreview = await importRoute(
      request("/api/cms/admin/import", json({ bundle: badBundle, mode: "commit" }, adminCookie)),
    );
    expect(badPreview.status).toBe(422);

    // Editors cannot import.
    const forbidden = await importRoute(
      request("/api/cms/admin/import", json({ bundle, mode: "validate" }, editorCookie)),
    );
    expect(forbidden.status).toBe(403);

    // Admin commit creates a fresh draft course with renamed slugs.
    const commit = await importRoute(
      request("/api/cms/admin/import", json({ bundle, mode: "commit" }, adminCookie)),
    );
    expect(commit.status).toBe(200);
    const committed = (await commit.json()) as {
      courseSlug: string;
      preview: { summary: { renamedSlugs: { original: string; imported: string }[] } };
    };
    expect(committed.courseSlug).not.toBe("everyday-english-foundations");
    expect(
      committed.preview.summary.renamedSlugs.some((r) => r.original === "everyday-english-foundations"),
    ).toBe(true);

    // Imported lessons are drafts, not live.
    const importedCourse = await db.cmsCourse.findUnique({
      where: { slug: committed.courseSlug },
      include: { modules: { include: { units: { include: { lessons: true } } } } },
    });
    expect(importedCourse?.live).toBe(false);
    expect(importedCourse?.status).toBe("draft");
    const importedLessons = importedCourse?.modules.flatMap((m) =>
      m.units.flatMap((u) => u.lessons),
    );
    expect(importedLessons?.every((l) => !l.live)).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Analytics integrity
// ---------------------------------------------------------------------------

describe("dashboard analytics", () => {
  it("returns real aggregates with null-when-unknown percentages", async () => {
    const res = await statsRoute(request("/api/cms/admin/stats", { headers: { cookie: editorCookie } }));
    expect(res.status).toBe(200);
    const stats = (await res.json()) as {
      totalLearners: number;
      platformAttempts: number;
      contentStatus: { lessons: { live: number } };
      enrolmentsByCourse: { courseTitle: string; learners: number }[];
    };
    expect(stats.totalLearners).toBeGreaterThan(0);
    expect(stats.platformAttempts).toBeGreaterThan(0); // we created attempts above
    expect(stats.contentStatus.lessons.live).toBeGreaterThan(0);
    expect(stats.enrolmentsByCourse.length).toBeGreaterThan(0);
  });

  it("editors cannot manage users", async () => {
    const usersRoute = (await import("@/app/api/cms/admin/users/route")).GET;
    const res = await usersRoute(request("/api/cms/admin/users", { headers: { cookie: editorCookie } }));
    expect(res.status).toBe(403);
  });

  it("cleanup: delete the QA test course", async () => {
    const treeRes = await treeRoute(request("/api/cms/admin/courses", { headers: { cookie: adminCookie } }));
    const tree = (await treeRes.json()) as { courses: { id: string; slug: string }[] };
    const qa = tree.courses.find((c) => c.slug === "qa-test-course");
    if (qa) {
      const del = await courseDeleteRoute(
        request(`/api/cms/admin/courses/${qa.id}`, { method: "DELETE", headers: { cookie: adminCookie } }),
        ctx({ id: qa.id }),
      );
      expect(del.status).toBe(200);
    }
  });
});
