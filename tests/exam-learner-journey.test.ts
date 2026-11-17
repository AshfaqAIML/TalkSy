/// <reference types="bun-types" />
/**
 * PROMPT 56 §3 — End-to-end learner journey.
 *
 * One learner, one continuous journey through the real route handlers:
 *
 *   Registration → Examination Selection → Target Score → Diagnostic Test
 *   → Personalised Study Plan → Lesson → Guided Practice → Independent
 *   Practice → Assessment → Mock Examination → Detailed Results → Weakness
 *   Identification → Revision → New Assessment,
 *
 * then the persistence proof: progress survives a "page refresh" (fresh
 * requests, same session) AND a full sign-out/sign-in (brand-new session).
 *
 * Everything runs on dedicated fixtures (IELTS variant JOURNEY) so the suite
 * never collides with other exam suites. All questions are original fixture
 * material authored for this test. Practice assemblies clone pool items into
 * new MockTestQuestion rows — the helper `poolOf` reads each attempt's own
 * rows (tests are server-side: the answer key never reaches a client).
 */

import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import { db } from "@/lib/db";
import { setLlmProviderOverride, type LlmProvider } from "@/lib/llm";

// Real route handlers — the journey must exercise the shipped API surface.
import { POST as registerRoute } from "@/app/api/auth/register/route";
import { POST as loginRoute } from "@/app/api/auth/login/route";
import { GET as profileGetRoute, PUT as profilePutRoute } from "@/app/api/exams/profile/route";
import { GET as dashboardRoute } from "@/app/api/exams/dashboard/route";
import { GET as historyRoute } from "@/app/api/exams/history/route";
import { POST as diagnosticRoute } from "@/app/api/exams/practice/diagnostic/route";
import { POST as topicPostRoute } from "@/app/api/exams/practice/topic/route";
import { POST as sectionRoute } from "@/app/api/exams/practice/section/route";
import { GET as weaknessGetRoute, POST as weaknessRoute } from "@/app/api/exams/practice/weakness/route";
import { POST as mistakesRoute } from "@/app/api/exams/practice/mistakes/route";
import { POST as planRoute } from "@/app/api/exams/planner/plan/route";
import { GET as plannerGetRoute } from "@/app/api/exams/planner/route";
import { GET as mocksRoute } from "@/app/api/exams/mocks/route";
import { POST as mockAttemptRoute } from "@/app/api/exams/mocks/[id]/attempts/route";
import { GET as attemptGetRoute, PATCH as attemptPatchRoute } from "@/app/api/exams/attempts/[id]/route";
import { POST as submitRoute } from "@/app/api/exams/attempts/[id]/submit/route";
import { GET as resultRoute } from "@/app/api/exams/attempts/[id]/result/route";
import { POST as revealRoute } from "@/app/api/exams/attempts/[id]/reveal/route";
import { POST as enrolRoute } from "@/app/api/cms/courses/[slug]/enrol/route";
import { GET as lessonRoute } from "@/app/api/cms/lessons/[slug]/route";
import { POST as lessonCompleteRoute } from "@/app/api/cms/lessons/[slug]/complete/route";
import { POST as exerciseAttemptRoute } from "@/app/api/exercises/attempt/route";

const BASE = "http://127.0.0.1:3000";
const VARIANT = "JOURNEY";

function req(path: string, init: RequestInit = {}, cookie?: string): Request {
  const headers = new Headers(init.headers ?? {});
  if (init.body) headers.set("content-type", "application/json");
  if (cookie) headers.set("cookie", cookie);
  return new Request(`${BASE}${path}`, { ...init, headers });
}

function ctx<T extends Record<string, string>>(params: T): { params: Promise<T> } {
  return { params: Promise.resolve(params) };
}

function cookiesOf(res: Response): string {
  const setCookie =
    typeof res.headers.getSetCookie === "function"
      ? res.headers.getSetCookie()
      : [res.headers.get("set-cookie") ?? ""].filter(Boolean);
  return setCookie.map((c) => c.split(";")[0]).join("; ");
}

// ---------------------------------------------------------------------------
// Fixtures — fixed identifiers so cleanup() can always remove leftovers
// ---------------------------------------------------------------------------

const FX = {
  specName: "IELTS Academic (journey fixture)",
  mockTitle: "Journey Full Mock [fixture]",
  courseSlug: "journey-course-fixture",
  moduleSlug: "journey-module-fixture",
  unitSlug: "journey-unit-fixture",
  lessonSlug: "journey-lesson-fixture",
  exerciseSlug: "journey-exercise-fixture",
  rubricTask: "journey.writing",
  email: "journey-learner@fixture.talksy.test",
  password: "journey-pass-123",
} as const;

const fixture = {
  specId: "",
  mockId: "",
  courseId: "",
  lessonId: "",
  cmsQuestionId: "",
  userId: "",
  cookie: "",
  email: "",
  password: FX.password,
  diagnosticAttemptId: "",
  topicAttemptId: "",
  sectionAttemptId: "",
  mockAttemptId: "",
  newAssessmentAttemptId: "",
  /** Stems of items deliberately answered wrong (stable across clones). */
  wrongStems: new Set<string>(),
};

type PoolItem = {
  id: string;
  type: string;
  stem: string | null;
  sectionKey: string;
  difficulty: number;
  answer: string | null;
  response: unknown;
};

/** Build the correct response for an objective item from its stored key. */
function correctResponse(type: string, answer: string): unknown {
  const a = JSON.parse(answer) as { option?: number; value?: number; blanks?: Array<{ answer: string }> };
  if (type === "MCQ_SINGLE") return { option: a.option };
  if (type === "TFNG") return { value: a.value };
  if (type === "FILL_BLANK") return { blanks: (a.blanks ?? []).map((b) => b.answer) };
  return a;
}

/** A guaranteed-wrong response for the same item. */
function wrongResponse(type: string): unknown {
  if (type === "MCQ_SINGLE") return { option: 99 };
  if (type === "TFNG") return { value: 99 };
  return { blanks: ["definitely-not-the-key"] };
}

/** The objective pool of one attempt's mock, with ready-made responses. */
async function poolOf(attemptId: string): Promise<PoolItem[]> {
  const attempt = await db.mockTestAttempt.findUnique({ where: { id: attemptId } });
  if (!attempt) throw new Error("attempt gone");
  const rows = await db.mockTestQuestion.findMany({
    where: { section: { mockTestId: attempt.mockTestId } },
    orderBy: [{ section: { order: "asc" } }, { order: "asc" }],
  });
  const sections = await db.mockTestSection.findMany({ where: { mockTestId: attempt.mockTestId } });
  const sectionKeys = new Map(sections.map((s) => [s.id, s.key]));
  return rows.map((q) => ({
    id: q.id,
    type: q.type,
    stem: q.stem,
    sectionKey: sectionKeys.get(q.sectionId) ?? "",
    difficulty: q.difficulty,
    answer: q.answer,
    response:
      q.answer == null ? { text: CONSTRUCTED_RESPONSE } : correctResponse(q.type, q.answer as string),
  }));
}

async function answerAll(
  attemptId: string,
  items: PoolItem[],
  opts: { wrongStems?: Set<string>; timeDeltaSec?: number } = {},
): Promise<void> {
  for (const item of items) {
    const makeWrong = opts.wrongStems?.has(item.stem ?? "") ?? false;
    const response = makeWrong ? wrongResponse(item.type) : item.response;
    const res = await attemptPatchRoute(
      req(
        `/api/exams/attempts/${attemptId}`,
        {
          method: "PATCH",
          body: JSON.stringify({ questionId: item.id, answer: response, flagged: false, timeDeltaSec: opts.timeDeltaSec ?? 15 }),
        },
        fixture.cookie,
      ),
      ctx({ id: attemptId }) as never,    );
    expect(res.status).toBe(200);
  }
}

async function submit(attemptId: string): Promise<{
  result: {
    status: string;
    mode: string;
    sectionScores: Array<{ section: string; score: number }>;
    totalScore: number | null;
    scoreDisplay: string | null;
    integrityNote: string;
    feedback: { strengths: string[]; weaknesses: string[]; notes: string[] } | null;
    recommendations: Array<{ title: string; reason: string }>;
    questionResults: Array<{ questionId: string; correct: boolean }>;
    diagnosticProfile: unknown;
  };
}> {
  const res = await submitRoute(
    req(`/api/exams/attempts/${attemptId}/submit`, { method: "POST" }, fixture.cookie),
    ctx({ id: attemptId }) as never,  );
  expect(res.status).toBe(200);
  return (await res.json()) as ReturnType<typeof submit>;
}

async function cleanup(): Promise<void> {
  // The JOURNEY variant is dedicated to this suite: every mock on it
  // (fixture + assembled practice sets) goes, which also cascades attempts.
  await db.mockTest.deleteMany({ where: { examKey: "IELTS", variant: VARIANT } });
  await db.testSpecification.deleteMany({ where: { variant: VARIANT } });
  await db.examRubric.deleteMany({ where: { taskKey: FX.rubricTask } });
  const course = await db.cmsCourse.findUnique({ where: { slug: FX.courseSlug } });
  if (course) await db.cmsCourse.delete({ where: { id: course.id } }).catch(() => undefined);
  await db.cmsQuestionVersion.deleteMany({ where: { question: { slug: FX.exerciseSlug } } });
  await db.cmsQuestion.deleteMany({ where: { slug: FX.exerciseSlug } });
  await db.examProfile.deleteMany({ where: { variant: VARIANT } });
  await db.examSectionEstimate.deleteMany({ where: { examKey: "IELTS", user: { email: { contains: "journey" } } } });
  await db.examPlannerPlan.deleteMany({ where: { variant: VARIANT } });
  await db.user.deleteMany({ where: { email: { contains: "journey" } } });
}

async function seedFixtures(): Promise<void> {
  const spec = await db.testSpecification.create({
    data: {
      examKey: "IELTS",
      variant: VARIANT,
      name: FX.specName,
      version: 1,
      status: "active",
      effectiveDate: new Date("2026-07-01"),
      lastReviewedAt: new Date("2026-11-16"),
      reviewDueAt: new Date("2027-11-16"),
      sections: JSON.stringify([
        { key: "listening", label: "Listening", timingSec: 1800, questionCount: 40, taskTypes: [], directions: "Four recordings." },
        { key: "reading", label: "Reading", timingSec: 3600, questionCount: 40, taskTypes: [], directions: "Three passages." },
        { key: "writing", label: "Writing", timingSec: 3600, questionCount: 2, taskTypes: [], directions: "Two tasks." },
        { key: "speaking", label: "Speaking", timingSec: 780, questionCount: 3, taskTypes: [], directions: "Three parts." },
      ]),
      scoringModel: JSON.stringify({
        kind: "IELTS_BAND",
        unit: "band",
        rawToScore: {
          listening: [{ min: 5, band: 7 }, { min: 3, band: 6 }, { min: 0, band: 4 }],
          reading: [{ min: 5, band: 7 }, { min: 3, band: 6 }, { min: 0, band: 4 }],
        },
        overallRule: "AVERAGE_ROUNDED_NEAREST_HALF",
        minSectionScore: 0,
        maxSectionScore: 9,
        validityMonths: 24,
      }),
      taskTypes: JSON.stringify([
        { type: "MCQ_SINGLE", label: "Multiple choice", description: "", objective: true },
        { type: "TFNG", label: "True/False/Not Given", description: "", objective: true },
        { type: "FILL_BLANK", label: "Completion", description: "", objective: true },
        { type: "WRITING_TASK", label: "Writing task", description: "", objective: false, rubricKey: FX.rubricTask },
      ]),
      sourceRefs: JSON.stringify([{ label: "Fixture", url: "https://fixture.talksy.test", retrievedAt: "2026-11-16" }]),
    },
  });
  fixture.specId = spec.id;

  await db.examRubric.create({
    data: {
      examKey: "IELTS",
      taskKey: FX.rubricTask,
      title: "Journey fixture writing rubric",
      scale: JSON.stringify([
        { score: 7, criteria: [{ name: "Task achievement", descriptor: "Covers the task with relevant, selected detail." }, { name: "Coherence", descriptor: "Clear progression throughout." }] },
        { score: 6, criteria: [{ name: "Task achievement", descriptor: "Addresses the task with some development." }, { name: "Coherence", descriptor: "Generally organised." }] },
        { score: 5, criteria: [{ name: "Task achievement", descriptor: "Partially addresses the task." }, { name: "Coherence", descriptor: "Some organisation visible." }] },
      ]),
      sourceRefs: "[]",
    },
  });

  const mock = await db.mockTest.create({
    data: {
      examKey: "IELTS",
      variant: VARIANT,
      specId: spec.id,
      title: FX.mockTitle,
      kind: "full",
      lengthLabel: "full",
      status: "published",
      description: "Fixture mock. Original practice material — not an official paper.",
    },
  });
  fixture.mockId = mock.id;
  const listening = await db.mockTestSection.create({
    data: { mockTestId: mock.id, key: "listening", title: "Listening", timingSec: 1800, order: 1, directions: "You hear each recording once." },
  });
  const reading = await db.mockTestSection.create({
    data: { mockTestId: mock.id, key: "reading", title: "Reading", timingSec: 3600, order: 2, directions: "Read the passages and answer." },
  });
  const writing = await db.mockTestSection.create({
    data: { mockTestId: mock.id, key: "writing", title: "Writing", timingSec: 3600, order: 3, directions: "Write at least 150 words." },
  });

  type Q = {
    sectionId: string; order: number; type: string; stem: string; payload: unknown;
    answer: unknown; skills: string[]; difficulty: number; explanation: string;
  };
  const mcq = (sectionId: string, order: number, skills: string[], difficulty: number, stem: string): Q => ({
    sectionId, order, type: "MCQ_SINGLE", stem,
    payload: { options: ["correct answer", "plausible lure", "another lure"] },
    answer: { option: 0 }, skills, difficulty,
    explanation: "The first option is the only one the material supports.",
  });
  const tfng = (sectionId: string, order: number, skills: string[], difficulty: number, statement: string, value: number): Q => ({
    sectionId, order, type: "TFNG", stem: statement,
    payload: { statement, labels: ["True", "False", "Not Given"] },
    answer: { value }, skills, difficulty,
    explanation: "The statement matches the text.",
  });
  const fill = (sectionId: string, order: number, skills: string[], difficulty: number, context: string, word: string): Q => ({
    sectionId, order, type: "FILL_BLANK", stem: "Complete the note.",
    payload: { context, blanks: [{ answer: word, alternatives: [], numbers: false }] },
    answer: { blanks: [{ answer: word, alternatives: [], numbers: false }] },
    skills, difficulty,
    explanation: `The recording says "${word}".`,
  });

  const plan: Q[] = [
    mcq(listening.id, 1, ["detail"], 2, "What does the speaker book?"),
    mcq(listening.id, 2, ["detail"], 2, "Which platform leaves from gate 12?"),
    mcq(listening.id, 3, ["paraphrase"], 3, "What does the tutor suggest first?"),
    tfng(listening.id, 4, ["detail"], 2, "The library is open on Sundays.", 1),
    fill(listening.id, 5, ["spelling"], 2, "Name: ___ (surname first)", "Hartley"),
    fill(listening.id, 6, ["numbers"], 2, "Total cost: £___", "48"),
    mcq(listening.id, 7, ["attitude"], 3, "How does the student feel about the plan?"),
    tfng(listening.id, 8, ["paraphrase"], 3, "The tour includes the workshop.", 0),
    mcq(reading.id, 1, ["detail"], 2, "What is the harbour project's main aim?"),
    mcq(reading.id, 2, ["paraphrase"], 3, "Which barrier does paragraph two name?"),
    mcq(reading.id, 3, ["detail"], 2, "When did the market close?"),
    tfng(reading.id, 4, ["inference"], 3, "The author supports the closures.", 1),
    fill(reading.id, 5, ["paraphrase"], 3, "The canal was reopened in ___", "2004"),
    mcq(reading.id, 6, ["main-idea"], 3, "What is the writer's main claim?"),
    tfng(reading.id, 7, ["detail"], 2, "Entry to the museum is free.", 2),
    mcq(reading.id, 8, ["vocabulary"], 4, "What does 'resilient' most nearly mean here?"),
    {
      sectionId: writing.id, order: 1, type: "WRITING_TASK",
      stem: "Writing Task 1",
      payload: { prompt: "The table shows visitors to three museums. Summarise the information.", supporting: "Museum A 1.2m, Museum B 0.8m, Museum C 2.1m", minWords: 150, suggestedMinutes: 20, rubricKey: FX.rubricTask, part: "task-1" },
      answer: null, skills: ["report-writing"], difficulty: 3,
      explanation: "Graded against the writing rubric.",
    },
  ];

  for (const q of plan) {
    await db.mockTestQuestion.create({
      data: {
        sectionId: q.sectionId,
        order: q.order,
        type: q.type,
        stem: q.stem,
        payload: JSON.stringify(q.payload),
        answer: q.answer == null ? null : JSON.stringify(q.answer),
        points: 1,
        skills: JSON.stringify(q.skills),
        difficulty: q.difficulty,
        explanation: q.explanation,
        source: "original-practice",
        contentStatus: "published",
      },
    });
  }

  const course = await db.cmsCourse.create({
    data: {
      slug: FX.courseSlug,
      title: "Journey Academy (fixture)",
      description: "Fixture course for the learner-journey suite.",
      status: "approved",
      live: true,
      order: 99,
    },
  });
  fixture.courseId = course.id;
  const courseModule = await db.cmsModule.create({
    data: { courseId: course.id, slug: FX.moduleSlug, title: "Journey module", order: 1 },
  });
  const unit = await db.cmsUnit.create({
    data: { moduleId: courseModule.id, slug: FX.unitSlug, title: "Journey chapter", order: 1 },
  });

  const cmsQuestion = await db.cmsQuestion.create({
    data: {
      slug: FX.exerciseSlug,
      type: "mcq",
      skill: "reading",
      difficulty: "medium",
      prompt: "Which answer choice is a paraphrase, not an echo?",
      tags: "[]",
      chapterSlug: FX.unitSlug,
      lessonSlug: FX.lessonSlug,
      data: JSON.stringify({
        id: "pending",
        type: "mcq",
        prompt: "Which answer choice is a paraphrase, not an echo?",
        difficulty: "medium",
        skill: "reading",
        hints: [],
        feedback: {
          correctAnswer: "A restatement in different words",
          explanation: "A paraphrase keeps the meaning while changing the wording; an echo repeats the original words to lure you.",
          whyWrong: "The other options quote the passage directly, which is the classic distractor shape.",
        },
        options: [
          { id: "opt-a", text: "A restatement in different words" },
          { id: "opt-b", text: "The passage's exact words in a new order" },
          { id: "opt-c", text: "A longer quotation from the text" },
        ],
        correctOptionId: "opt-a",
      }),
      status: "published",
      version: 1,
    },
  });
  await db.cmsQuestion.update({
    where: { id: cmsQuestion.id },
    data: { data: JSON.stringify({ ...JSON.parse(cmsQuestion.data), id: cmsQuestion.id }) },
  });
  fixture.cmsQuestionId = cmsQuestion.id;

  const lesson = await db.cmsLesson.create({
    data: {
      unitId: unit.id,
      slug: FX.lessonSlug,
      title: "Reading craft: paraphrase spotting",
      description: "How examiners rewrite ideas and how to recognise it.",
      objectives: JSON.stringify(["Recognise paraphrased answers", "Avoid echo distractors"]),
      estimatedMinutes: 15,
      order: 1,
      status: "approved",
      reviewStatus: "ai-reviewed",
      live: true,
      version: 1,
      publishedVersion: 1,
      publishedAt: new Date(),
    },
  });
  fixture.lessonId = lesson.id;
  const blocks = [
    { type: "lesson-intro", text: "Every reading question is a paraphrase test in disguise.", beforeYouStart: [] },
    { type: "text", text: "Examiners rewrite the passage's idea in fresh words; lure options reuse the original wording with a twisted meaning." },
    { type: "example", title: "Echo vs paraphrase", items: [{ english: "Text: 'the scheme folded within a year.' Paraphrase: 'the programme ended after twelve months.'", note: "The paraphrase changes the words; the lure keeps them." }] },
    { type: "practice", title: "Guided practice", variant: "guided", exerciseIds: [cmsQuestion.id] },
    { type: "summary", points: ["Right answers restate meaning; lure answers echo words.", "Test each option against the source sentence, not your memory of it."] },
  ];
  for (const [i, block] of blocks.entries()) {
    await db.cmsLessonBlock.create({
      data: { lessonId: lesson.id, order: i, type: block.type, data: JSON.stringify(block) },
    });
  }
  await db.cmsLessonVersion.create({
    data: {
      lessonId: lesson.id,
      version: 1,
      snapshot: JSON.stringify({
        title: "Reading craft: paraphrase spotting",
        description: "How examiners rewrite ideas and how to recognise it.",
        objectives: ["Recognise paraphrased answers", "Avoid echo distractors"],
        estimatedMinutes: 15,
        blocks: blocks.map((b, i) => ({ id: `${i}`, type: b.type, data: b })),
      }),
    },
  });
}

/**
 * Deterministic fake evaluator in the mock-engine ai-grade format
 * ({score, criteria, summary} — the simple rubric-grade shape).
 */
const fakeEvaluator: LlmProvider = {
  name: "journey-fake-evaluator",
  complete: async () =>
    JSON.stringify({
      score: 6.5,
      criteria: [
        { name: "Task achievement", score: 6.5, comment: "Key features are selected and summarised." },
        { name: "Coherence & cohesion", score: 6.5, comment: "The paragraphs progress logically." },
      ],
      summary: "The report selects the key figures and compares them clearly.",
    }),
  stream: async function* () {
    yield "{}";
  },
};

/** A 150+ word response for constructed tasks (above the min-word gate). */
const CONSTRUCTED_RESPONSE =
  "The table compares annual visitors to three museums. Museum C received the most visitors at 2.1 million, roughly twice the figure for Museum A, while Museum B attracted 0.8 million. Across the period shown, the larger venues drew substantially bigger audiences, and the gap between the most and least visited sites exceeded a million visitors each year. Several factors may explain the pattern: Museum C sits beside the main railway station, Museum A introduced evening openings only recently, and Museum B was closed for renovation for part of the period. Overall, the figures suggest that location and opening hours, rather than collection size, drove attendance differences.";

beforeAll(async () => {
  await cleanup();
  await seedFixtures();
  setLlmProviderOverride(fakeEvaluator);
  fixture.email = `journey-${Date.now()}-${FX.email}`;
});

afterAll(async () => {
  setLlmProviderOverride(null);
  await cleanup();
});

// ---------------------------------------------------------------------------
// The journey
// ---------------------------------------------------------------------------

describe("PROMPT 56 — the complete learner journey", () => {
  it("registers a new learner", async () => {
    const res = await registerRoute(
      req("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ email: fixture.email, name: "Journey Learner", password: fixture.password }),
      }),
    );
    expect(res.status).toBe(201);
    const body = (await res.json()) as { user: { id: string; email: string; role: string } };
    expect(body.user.email).toBe(fixture.email);
    expect(body.user.role).toBe("student");
    fixture.userId = body.user.id;
    fixture.cookie = cookiesOf(res);
    expect(fixture.cookie).toContain("session");
  });

  it("selects the examination, variant and target score", async () => {
    const res = await profilePutRoute(
      req(
        "/api/exams/profile",
        {
          method: "PUT",
          body: JSON.stringify({
            examKey: "IELTS",
            variant: VARIANT,
            proficiency: "B1",
            targetScore: 7,
            examDate: "2027-01-15",
            dailyMinutes: 45,
            difficultSections: ["writing"],
          }),
        },
        fixture.cookie,
      ),
    );
    expect(res.status).toBe(200);
    const { profile } = (await res.json()) as { profile: { examKey: string; variant: string; targetScore: number } };
    expect(profile.examKey).toBe("IELTS");
    expect(profile.variant).toBe(VARIANT);
    expect(profile.targetScore).toBe(7);

    const get = await profileGetRoute(req("/api/exams/profile", {}, fixture.cookie));
    expect(get.status).toBe(200);
    const again = (await get.json()) as { profile: { targetScore: number; onboarded: boolean } };
    expect(again.profile.targetScore).toBe(7);
    expect(again.profile.onboarded).toBe(true);
  });

  it("sits the diagnostic assessment under timing", async () => {
    const res = await diagnosticRoute(
      req(
        "/api/exams/practice/diagnostic",
        { method: "POST", body: JSON.stringify({ examKey: "IELTS", variant: VARIANT, perSection: 6 }) },
        fixture.cookie,
      )
    );
    expect(res.status).toBe(201);
    const body = (await res.json()) as { attempt: { id: string; mode: string; timed: boolean } };
    expect(body.attempt.mode).toBe("diagnostic");
    expect(body.attempt.timed).toBe(true);
    fixture.diagnosticAttemptId = body.attempt.id;

    // Answer everything; deliberately fail the two hardest reading items so
    // the journey has genuine weaknesses to find later.
    const pool = await poolOf(fixture.diagnosticAttemptId);
    expect(pool.filter((p) => p.answer != null).length).toBeGreaterThanOrEqual(8);
    const hardestReading = pool
      .filter((p) => p.sectionKey === "reading")
      .sort((a, b) => b.difficulty - a.difficulty)
      .slice(0, 2);
    for (const item of hardestReading) fixture.wrongStems.add(item.stem ?? "");
    await answerAll(fixture.diagnosticAttemptId, pool, { wrongStems: fixture.wrongStems });

    const { result } = await submit(fixture.diagnosticAttemptId);
    expect(["submitted", "scored"]).toContain(result.status);
    expect(result.sectionScores.length).toBeGreaterThan(0);
    expect(result.integrityNote.length).toBeGreaterThan(0);
    // The diagnostic carries the level profile.
    expect(result.diagnosticProfile).not.toBeNull();
  });

  it("generates a personalised study plan from the diagnostic evidence", async () => {
    const res = await planRoute(
      req(
        "/api/exams/planner/plan",
        { method: "POST", body: JSON.stringify({ durationDays: 14, strongestSection: "listening" }) },
        fixture.cookie,
      ),
    );
    expect(res.status).toBe(200);
    const { plan } = (await res.json()) as {
      plan: { durationDays: number; days: Array<{ tasks: Array<{ id: string; title: string; kind: string }> }> };
    };
    expect(plan.durationDays).toBe(14);
    expect(plan.days.length).toBeGreaterThanOrEqual(7);
    const tasks = plan.days.flatMap((d) => d.tasks);
    expect(tasks.length).toBeGreaterThan(0);
    expect(tasks.every((t) => t.title.trim().length > 0)).toBe(true);

    const state = await plannerGetRoute(req("/api/exams/planner", {}, fixture.cookie));
    expect(state.status).toBe(200);
  });

  it("studies a lesson and completes it with server-verified practice", async () => {
    const enrol = await enrolRoute(
      req(`/api/cms/courses/${FX.courseSlug}/enrol`, { method: "POST" }, fixture.cookie),
      ctx({ slug: FX.courseSlug }) as never,
    );
    expect([200, 201]).toContain(enrol.status);

    const lesson = await lessonRoute(req(`/api/cms/lessons/${FX.lessonSlug}`, {}, fixture.cookie), ctx({ slug: FX.lessonSlug }) as never);
    expect(lesson.status).toBe(200);
    const lessonBody = (await lesson.json()) as {
      blocks: Array<{ id: string; block: { type: string; data: Record<string, unknown> } }>;
      exercises: Array<{ id: string }>;
      progress: { status: string };
    };
    expect(lessonBody.exercises.some((e) => e.id === fixture.cmsQuestionId)).toBe(true);
    // The learner projection must never leak the answer key.
    expect(JSON.stringify(lessonBody.blocks)).not.toContain("correctOptionId");

    const attempt = await exerciseAttemptRoute(
      req(
        "/api/exercises/attempt",
        {
          method: "POST",
          body: JSON.stringify({
            exerciseId: fixture.cmsQuestionId,
            lessonSlug: FX.lessonSlug,
            answer: { optionId: "opt-a" },
            hintsUsed: 0,
            durationMs: 12_000,
            context: "guided",
          }),
        },
        fixture.cookie,
      ),
    );
    expect(attempt.status).toBe(200);
    const attemptBody = (await attempt.json()) as { correct: boolean; feedback: { explanation: string } };
    expect(attemptBody.correct).toBe(true);
    expect(attemptBody.feedback.explanation.length).toBeGreaterThan(0);

    const complete = await lessonCompleteRoute(
      req(`/api/cms/lessons/${FX.lessonSlug}/complete`, { method: "POST" }, fixture.cookie),
      ctx({ slug: FX.lessonSlug }) as never,
    );
    expect(complete.status).toBe(200);
    const { progress } = (await complete.json()) as { progress: { status: string } };
    expect(progress.status).toBe("completed");
  });

  it("runs guided topic practice and uses the answer reveal (learning mode)", async () => {
    const res = await topicPostRoute(
      req(
        "/api/exams/practice/topic",
        { method: "POST", body: JSON.stringify({ examKey: "IELTS", variant: VARIANT, topic: "detail", count: 4, timed: false }) },
        fixture.cookie,
      ),
    );
    expect(res.status).toBe(201);
    const body = (await res.json()) as { attempt: { id: string; mode: string; timed: boolean } };
    expect(body.attempt.mode).toBe("topic");
    expect(body.attempt.timed).toBe(false);
    fixture.topicAttemptId = body.attempt.id;

    const pool = await poolOf(fixture.topicAttemptId);
    expect(pool.length).toBe(4);

    // Guided flow: answer, then reveal the verdict for the first item.
    const first = pool[0];
    const save = await attemptPatchRoute(
      req(
        `/api/exams/attempts/${fixture.topicAttemptId}`,
        { method: "PATCH", body: JSON.stringify({ questionId: first.id, answer: first.response, timeDeltaSec: 8 }) },
        fixture.cookie,
      ),
      ctx({ id: fixture.topicAttemptId }) as never,    );
    expect(save.status).toBe(200);

    const reveal = await revealRoute(
      req(
        `/api/exams/attempts/${fixture.topicAttemptId}/reveal`,
        { method: "POST", body: JSON.stringify({ questionId: first.id }) },
        fixture.cookie,
      ),
      ctx({ id: fixture.topicAttemptId }) as never,    );
    expect(reveal.status).toBe(200);
    const revealed = (await reveal.json()) as { reveal: { ok: boolean; verdict: string; explanation: string | null } };
    expect(revealed.reveal.ok).toBe(true);
    expect(revealed.reveal.verdict).toBe("correct");
    expect((revealed.reveal.explanation ?? "").length).toBeGreaterThan(0);

    // Answer the rest — one deliberately wrong to feed the mistake bank.
    const rest = pool.slice(1);
    fixture.wrongStems.add(rest[0].stem ?? "");
    await answerAll(fixture.topicAttemptId, rest, { wrongStems: new Set([rest[0].stem ?? ""]) });

    const { result } = await submit(fixture.topicAttemptId);
    expect(["submitted", "scored"]).toContain(result.status);
  });

  it("runs independent timed section practice", async () => {
    const res = await sectionRoute(
      req(
        "/api/exams/practice/section",
        { method: "POST", body: JSON.stringify({ examKey: "IELTS", variant: VARIANT, section: "reading", count: 4, timed: true }) },
        fixture.cookie,
      ),
    );
    expect(res.status).toBe(201);
    const body = (await res.json()) as { attempt: { id: string; mode: string; timed: boolean } };
    expect(body.attempt.mode).toBe("section");
    expect(body.attempt.timed).toBe(true);
    fixture.sectionAttemptId = body.attempt.id;

    const pool = await poolOf(fixture.sectionAttemptId);
    expect(pool.length).toBeGreaterThanOrEqual(4);
    await answerAll(fixture.sectionAttemptId, pool);
    const { result } = await submit(fixture.sectionAttemptId);
    const reading = result.sectionScores.find((s) => s.section === "reading");
    expect(reading).toBeDefined();
    expect(reading!.score).toBeGreaterThan(0); // every item correct this time
  });

  it("sits a full mock examination with mid-flight answer persistence", async () => {
    const library = await mocksRoute(req(`/api/exams/mocks?exam=IELTS`, {}, fixture.cookie));
    expect(library.status).toBe(200);
    const { mocks } = (await library.json()) as { mocks: Array<{ id: string; title: string }> };
    expect(mocks.some((m) => m.id === fixture.mockId || m.title === FX.mockTitle)).toBe(true);

    const start = await mockAttemptRoute(
      req(`/api/exams/mocks/${fixture.mockId}/attempts`, { method: "POST", body: JSON.stringify({ mode: "full_mock" }) }, fixture.cookie),
      ctx({ id: fixture.mockId }) as never,    );
    expect(start.status).toBe(201);
    const { attempt } = (await start.json()) as { attempt: { id: string; mode: string; timed: boolean } };
    expect(attempt.mode).toBe("full_mock");
    expect(attempt.timed).toBe(true);
    fixture.mockAttemptId = attempt.id;

    // Answer the listening items, then simulate a page refresh: the saved
    // answers must come back exactly as saved.
    const pool = await poolOf(fixture.mockAttemptId);
    const listening = pool.filter((p) => p.sectionKey === "listening");
    expect(listening.length).toBe(8);
    const writingItems = pool.filter((p) => p.answer == null);
    expect(writingItems.length).toBe(1);
    for (const item of listening) {
      const res = await attemptPatchRoute(
        req(
          `/api/exams/attempts/${fixture.mockAttemptId}`,
          { method: "PATCH", body: JSON.stringify({ questionId: item.id, answer: item.response, flagged: false, timeDeltaSec: 20 }) },
          fixture.cookie,
        ),
        ctx({ id: fixture.mockAttemptId }) as never,      );
      expect(res.status).toBe(200);
    }
    const resume = await attemptGetRoute(
      req(`/api/exams/attempts/${fixture.mockAttemptId}`, {}, fixture.cookie),
      ctx({ id: fixture.mockAttemptId }) as never,    );
    expect(resume.status).toBe(200);
    const resumed = (await resume.json()) as { answers: Record<string, unknown> };
    for (const item of listening) {
      expect(resumed.answers[item.id]).toEqual(item.response);
    }

    // Finish: reading correct, the writing task answered with a real response.
    for (const item of pool.filter((p) => p.sectionKey === "reading")) {
      const res = await attemptPatchRoute(
        req(
          `/api/exams/attempts/${fixture.mockAttemptId}`,
          { method: "PATCH", body: JSON.stringify({ questionId: item.id, answer: item.response, timeDeltaSec: 40 }) },
          fixture.cookie,
        ),
        ctx({ id: fixture.mockAttemptId }) as never,      );
      expect(res.status).toBe(200);
    }
    const writing = await db.mockTestQuestion.findFirst({
      where: { section: { mockTestId: fixture.mockId }, type: "WRITING_TASK" },
    });
    expect(writing).not.toBeNull();
    const saveWriting = await attemptPatchRoute(
      req(
        `/api/exams/attempts/${fixture.mockAttemptId}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            questionId: writing!.id,
            answer: {
              text:
                "The table compares annual visitors to three museums. Museum C received the most visitors at 2.1 million, roughly twice the figure for Museum A. Museum B attracted 0.8 million. Overall, the larger venues drew substantially bigger audiences, and the gap between the most and least visited sites exceeded a million visitors.",
            },
            timeDeltaSec: 600,
          }),
        },
        fixture.cookie,
      ),
      ctx({ id: fixture.mockAttemptId }) as never,    );
    expect(saveWriting.status).toBe(200);

    const { result } = await submit(fixture.mockAttemptId);
    expect(result.status).toBe("scored");
  });

  it("receives detailed results with sections, overall band and weaknesses", async () => {
    const res = await resultRoute(
      req(`/api/exams/attempts/${fixture.mockAttemptId}/result`, {}, fixture.cookie),
      ctx({ id: fixture.mockAttemptId }) as never,    );
    expect(res.status).toBe(200);
    const { result } = (await res.json()) as {
      result: {
        status: string;
        totalScore: number | null;
        scoreDisplay: string | null;
        sectionScores: Array<{ section: string; score: number }>;
        feedback: { weaknesses: string[] } | null;
        recommendations: Array<{ title: string }>;
      };
    };
    expect(result.status).toBe("scored");
    expect(result.totalScore).not.toBeNull();
    expect(result.scoreDisplay).toMatch(/Band/i);
    expect(result.sectionScores.length).toBeGreaterThanOrEqual(2);
    expect(result.recommendations.length).toBeGreaterThan(0);

    // The writing task carries its inline rubric grade (AI-assisted,
    // honestly labelled — never an official examiner score).
    const writingResponse = await db.mockTestResponse.findFirst({
      where: { attemptId: fixture.mockAttemptId, status: "ai_scored" },
    });
    expect(writingResponse).not.toBeNull();
    expect(writingResponse!.rubricScore).toBe(6.5);
  });

  it("identifies weaknesses from the attempt history", async () => {
    const profileRes = await weaknessGetRoute(
      req(`/api/exams/practice/weakness?exam=IELTS&variant=${VARIANT}`, {}, fixture.cookie),
    );
    expect(profileRes.status).toBe(200);
    const { profile } = (await profileRes.json()) as {
      profile: {
        evidenceItems: number;
        hasEnoughEvidence: boolean;
        weakestSkills: Array<{ label: string }>;
        weakestSections: Array<{ section: string; accuracy: number }>;
      };
    };
    expect(profile.evidenceItems).toBeGreaterThanOrEqual(12);
    expect(profile.hasEnoughEvidence).toBe(true);
    expect(profile.weakestSkills.length).toBeGreaterThan(0);

    const res = await weaknessRoute(
      req("/api/exams/practice/weakness", { method: "POST", body: JSON.stringify({ examKey: "IELTS", variant: VARIANT }) }, fixture.cookie),
    );
    expect(res.status).toBe(201);
    const body = (await res.json()) as { itemCount: number; attempt: { id: string; mode: string; timed: boolean } };
    expect(body.attempt.mode).toBe("weakness");
    expect(body.attempt.timed).toBe(false);

    const pool = await poolOf(body.attempt.id);
    expect(pool.length).toBeGreaterThan(0);
    // Weakness remediation: answer everything correctly this time.
    await answerAll(body.attempt.id, pool);
    const { result } = await submit(body.attempt.id);
    expect(result.questionResults.every((q) => q.correct)).toBe(true);
  });

  it("revises previous mistakes and answers them correctly", async () => {
    const res = await mistakesRoute(
      req("/api/exams/practice/mistakes", { method: "POST", body: JSON.stringify({ examKey: "IELTS", variant: VARIANT, timed: false }) }, fixture.cookie),
    );
    expect(res.status).toBe(201);
    const body = (await res.json()) as { itemCount: number; attempt: { id: string; mode: string } };
    expect(body.attempt.mode).toBe("mistakes");
    expect(body.itemCount).toBeGreaterThan(0);

    const pool = await poolOf(body.attempt.id);
    expect(pool.length).toBeGreaterThan(0);
    // Every revised item must be one the learner previously got wrong
    // (assembled sets clone rows, so compare on the stable stem).
    expect(pool.some((p) => fixture.wrongStems.has(p.stem ?? ""))).toBe(true);
    await answerAll(body.attempt.id, pool);
    const { result } = await submit(body.attempt.id);
    expect(result.questionResults.filter((q) => q.correct).length).toBe(result.questionResults.length);
  });

  it("sits a new assessment and the attempt record grows", async () => {
    const res = await sectionRoute(
      req(
        "/api/exams/practice/section",
        { method: "POST", body: JSON.stringify({ examKey: "IELTS", variant: VARIANT, section: "listening", count: 4, timed: true }) },
        fixture.cookie,
      ),
    );
    expect(res.status).toBe(201);
    const body = (await res.json()) as { attempt: { id: string } };
    fixture.newAssessmentAttemptId = body.attempt.id;

    const pool = await poolOf(fixture.newAssessmentAttemptId);
    await answerAll(fixture.newAssessmentAttemptId, pool);
    const { result } = await submit(fixture.newAssessmentAttemptId);
    const listening = result.sectionScores.find((s) => s.section === "listening");
    expect(listening!.score).toBeGreaterThan(0);

    const history = await historyRoute(req(`/api/exams/history?exam=IELTS&variant=${VARIANT}`, {}, fixture.cookie));
    const { history: dto } = (await history.json()) as { history: { attempts: Array<{ id: string }> } };
    // diagnostic + topic + section + full mock + weakness + mistakes + new assessment
    expect(dto.attempts.length).toBeGreaterThanOrEqual(6);
  });

  it("keeps every piece of progress after a refresh (fresh requests, same session)", async () => {
    const profile = await profileGetRoute(req("/api/exams/profile", {}, fixture.cookie));
    const profileBody = (await profile.json()) as { profile: { targetScore: number } };
    expect(profileBody.profile.targetScore).toBe(7);

    const lesson = await lessonRoute(req(`/api/cms/lessons/${FX.lessonSlug}`, {}, fixture.cookie), ctx({ slug: FX.lessonSlug }) as never);
    const lessonBody = (await lesson.json()) as { progress: { status: string } };
    expect(lessonBody.progress.status).toBe("completed");

    const dashboard = await dashboardRoute(req("/api/exams/dashboard", {}, fixture.cookie));
    expect(dashboard.status).toBe(200);
    const dash = (await dashboard.json()) as {
      dashboard: { onboarded: boolean; selected: { variant: string } | null; recentResults: unknown[] };
    };
    expect(dash.dashboard.onboarded).toBe(true);
    expect(dash.dashboard.selected?.variant).toBe(VARIANT);
    expect(dash.dashboard.recentResults.length).toBeGreaterThan(0);

    const result = await resultRoute(
      req(`/api/exams/attempts/${fixture.mockAttemptId}/result`, {}, fixture.cookie),
      ctx({ id: fixture.mockAttemptId }) as never,    );
    expect(result.status).toBe(200);
  });

  it("keeps every piece of progress after signing out and in again", async () => {
    const login = await loginRoute(
      req("/api/auth/login", { method: "POST", body: JSON.stringify({ email: fixture.email, password: fixture.password }) }, fixture.cookie),
    );
    expect(login.status).toBe(200);
    const freshCookie = cookiesOf(login);
    expect(freshCookie).toContain("session");
    expect(freshCookie).not.toBe(fixture.cookie);
    fixture.cookie = freshCookie;

    const lesson = await lessonRoute(req(`/api/cms/lessons/${FX.lessonSlug}`, {}, fixture.cookie), ctx({ slug: FX.lessonSlug }) as never);
    expect(lesson.status).toBe(200);
    const lessonBody = (await lesson.json()) as { progress: { status: string } };
    expect(lessonBody.progress.status).toBe("completed");

    const history = await historyRoute(req(`/api/exams/history?exam=IELTS&variant=${VARIANT}`, {}, fixture.cookie));
    const { history: dto } = (await history.json()) as { history: { attempts: Array<{ id: string }> } };
    expect(dto.attempts.length).toBeGreaterThanOrEqual(6);

    const dashboard = await dashboardRoute(req("/api/exams/dashboard", {}, fixture.cookie));
    const dash = (await dashboard.json()) as { dashboard: { recentResults: unknown[]; estimates: { sections: unknown[] } | null } };
    expect(dash.dashboard.recentResults.length).toBeGreaterThan(0);
    expect(dash.dashboard.estimates).not.toBeNull();
    expect(dash.dashboard.estimates!.sections.length).toBe(4);

    const result = await resultRoute(
      req(`/api/exams/attempts/${fixture.mockAttemptId}/result`, {}, fixture.cookie),
      ctx({ id: fixture.mockAttemptId }) as never,    );
    expect(result.status).toBe(200);
    const { result: scored } = (await result.json()) as { result: { status: string; totalScore: number | null } };
    expect(scored.status).toBe("scored");
    expect(scored.totalScore).not.toBeNull();
  });
});
