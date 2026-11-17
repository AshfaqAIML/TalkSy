/// <reference types="bun-types" />
/**
 * PROMPT 51 — Professional Mock Examination Engine.
 *
 * Covers the four new practice modes (topic-specific, weakness-based,
 * diagnostic, adaptive), the extended result report (task-type performance,
 * time utilisation, diagnostic profile), the unfinished-attempt lifecycle
 * (abandon: answers preserved, never scored, no report, no answer key), and
 * the honesty contract of the new surfaces — including the adaptive note
 * that TalkSy's heuristic is not ETS's proprietary algorithm.
 *
 * Database fixtures live on TOEFL_IBT/STANDARD (no other suite uses that
 * exam), so the published pool these tests assemble from is fully isolated.
 */

import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import { db } from "@/lib/db";
import { POST as registerRoute } from "@/app/api/auth/register/route";
import { GET as topicGetRoute, POST as topicPostRoute } from "@/app/api/exams/practice/topic/route";
import { GET as weaknessGetRoute, POST as weaknessPostRoute } from "@/app/api/exams/practice/weakness/route";
import { POST as diagnosticRoute } from "@/app/api/exams/practice/diagnostic/route";
import { POST as adaptiveRoute } from "@/app/api/exams/practice/adaptive/route";
import { POST as abandonRoute } from "@/app/api/exams/attempts/[id]/abandon/route";
import {
  ASSEMBLED_SET_KINDS,
  ATTEMPT_MODES,
  attemptModeLabel,
  isTimedMode,
  normalizeAttemptMode,
} from "@/lib/exams/types";
import { INTEGRITY_ADAPTIVE_NOTE } from "@/lib/exams/integrity";
import {
  abandonAttempt,
  getAttemptResult,
  getSafeMockTest,
  revealAnswer,
  saveResponse,
  startAttempt,
  submitAttempt,
} from "@/lib/exams/mock-engine";
import {
  buildAdaptivePractice,
  buildDiagnosticAssessment,
  buildTopicPractice,
  calibrateAdaptive,
  topicCatalog,
  weaknessProfile,
  buildWeaknessPractice,
} from "@/lib/exams/practice-modes";
import { listAttemptHistory } from "@/lib/exams/history";

// ---------------------------------------------------------------------------
// Pure mode-catalogue behaviour
// ---------------------------------------------------------------------------

describe("PROMPT 51 mode catalogue", () => {
  it("offers the ten examination modes", () => {
    expect(ATTEMPT_MODES).toHaveLength(10);
    for (const mode of ["full_mock", "section", "timed", "untimed", "topic", "weakness", "diagnostic", "adaptive", "mistakes", "custom"] as const) {
      expect(ATTEMPT_MODES).toContain(mode);
    }
  });

  it("normalises and labels the new modes", () => {
    expect(normalizeAttemptMode("topic")).toBe("topic");
    expect(normalizeAttemptMode("weakness")).toBe("weakness");
    expect(normalizeAttemptMode("diagnostic")).toBe("diagnostic");
    expect(normalizeAttemptMode("adaptive")).toBe("adaptive");
    expect(attemptModeLabel("topic")).toBe("Topic-specific practice");
    expect(attemptModeLabel("weakness")).toBe("Weakness-based practice");
    expect(attemptModeLabel("diagnostic")).toBe("Diagnostic assessment");
    expect(attemptModeLabel("adaptive")).toBe("Adaptive practice");
  });

  it("derives timed-ness for the new modes", () => {
    // Topic practice: free learning by default, clocks on request.
    expect(isTimedMode("topic")).toBe(false);
    expect(isTimedMode("topic", true)).toBe(true);
    // Weakness practice is untimed remediation.
    expect(isTimedMode("weakness")).toBe(false);
    expect(isTimedMode("weakness", true)).toBe(false);
    // A diagnostic is always sat under timing.
    expect(isTimedMode("diagnostic")).toBe(true);
    expect(isTimedMode("diagnostic", false)).toBe(true);
    // Adaptive runs default to clocks, learner may switch them off.
    expect(isTimedMode("adaptive")).toBe(true);
    expect(isTimedMode("adaptive", false)).toBe(false);
  });

  it("shares one assembled-kind list across engine, admin and launcher", () => {
    expect(ASSEMBLED_SET_KINDS).toHaveLength(9);
    for (const kind of ["section", "timed", "untimed", "topic", "weakness", "diagnostic", "adaptive", "mistakes", "custom"] as const) {
      expect(ASSEMBLED_SET_KINDS).toContain(kind);
    }
  });

  it("carries the adaptive honesty note", () => {
    expect(INTEGRITY_ADAPTIVE_NOTE).toContain("not ETS's proprietary adaptive algorithm");
  });
});

// ---------------------------------------------------------------------------
// Database fixtures (isolated on TOEFL_IBT / STANDARD)
// ---------------------------------------------------------------------------

const EXAM: { examKey: "TOEFL_IBT"; variant: "STANDARD" } = { examKey: "TOEFL_IBT", variant: "STANDARD" };
const SPEC_TASK_TYPES = [
  { type: "MCQ_SINGLE", label: "Listen and choose a response", description: "", objective: true },
  { type: "TFNG", label: "True / False / Not Given", description: "", objective: true },
  { type: "DICTATION", label: "Listen and Repeat", description: "", objective: true },
];

const fixture = {
  userId: "",
  mockId: "",
  specId: "",
  questionIds: [] as Array<{ id: string; section: "reading" | "listening"; type: string; skills: string[]; answer: string; difficulty: number }>,
  assembledMockIds: [] as string[],
  secondUserId: "",
};

async function ensureSpec(): Promise<string> {
  const existing = await db.testSpecification.findFirst({
    where: { examKey: EXAM.examKey, variant: EXAM.variant, status: "active" },
  });
  if (existing) return existing.id;
  const row = await db.testSpecification.create({
    data: {
      examKey: EXAM.examKey,
      variant: EXAM.variant,
      name: "TOEFL iBT",
      version: 1,
      status: "active",
      effectiveDate: new Date("2026-01-21"),
      lastReviewedAt: new Date(),
      sections: JSON.stringify([
        { key: "listening", label: "Listening", timingSec: 1500, questionCount: 28, taskTypes: [], directions: "" },
        { key: "reading", label: "Reading", timingSec: 1500, questionCount: 20, taskTypes: [], directions: "" },
        { key: "writing", label: "Writing", timingSec: 1500, questionCount: 2, taskTypes: [], directions: "" },
        { key: "speaking", label: "Speaking", timingSec: 900, questionCount: 4, taskTypes: [], directions: "" },
      ]),
      scoringModel: JSON.stringify({
        kind: "TOEFL_BAND_1_6",
        unit: "band",
        rawToScore: {},
        overallRule: "AVERAGE_ROUNDED_NEAREST_HALF",
        minSectionScore: 1,
        maxSectionScore: 6,
        validityMonths: 24,
      }),
      taskTypes: JSON.stringify(SPEC_TASK_TYPES),
      sourceRefs: JSON.stringify([{ label: "ETS official", url: "https://www.ets.org/toefl/", retrievedAt: "2026-11-12" }]),
    },
  });
  return row.id;
}

async function seedFixtureMock(specId: string): Promise<string> {
  const mock = await db.mockTest.create({
    data: {
      examKey: EXAM.examKey,
      variant: EXAM.variant,
      specId,
      title: "P51 Fixture Library Mock",
      kind: "full",
      lengthLabel: "fixture",
      status: "published",
      description: "Fixture. Original EnglishPath practice material — not an official paper.",
    },
  });
  const reading = await db.mockTestSection.create({
    data: { mockTestId: mock.id, key: "reading", title: "Reading", timingSec: 1500, order: 1 },
  });
  const listening = await db.mockTestSection.create({
    data: { mockTestId: mock.id, key: "listening", title: "Listening", timingSec: 1500, order: 2 },
  });

  const plan: Array<{ section: string; type: string; skills: string[]; difficulty: number; answer: string; payload: string; points: number }> = [];
  // Reading: 6 detail MCQs (difficulty 1–3), 4 paraphrase MCQs (3–5), 2 inference TFNG.
  for (let index = 0; index < 6; index += 1) {
    plan.push({
      section: reading.id, type: "MCQ_SINGLE", skills: ["detail"], difficulty: 1 + (index % 3),
      answer: JSON.stringify({ option: 0 }), payload: JSON.stringify({ options: ["correct", "lure", "lure"] }), points: 1,
    });
  }
  for (let index = 0; index < 4; index += 1) {
    plan.push({
      section: reading.id, type: "MCQ_SINGLE", skills: ["paraphrase"], difficulty: 3 + (index % 3),
      answer: JSON.stringify({ option: 0 }), payload: JSON.stringify({ options: ["correct", "lure", "lure"] }), points: 1,
    });
  }
  for (let index = 0; index < 2; index += 1) {
    plan.push({
      section: reading.id, type: "TFNG", skills: ["inference"], difficulty: 3,
      answer: JSON.stringify({ value: 0 }), payload: JSON.stringify({ statement: `Statement ${index}.`, labels: ["True", "False", "Not Given"] }), points: 1,
    });
  }
  // Listening: 4 paraphrase MCQs, 3 detail dictations.
  for (let index = 0; index < 4; index += 1) {
    plan.push({
      section: listening.id, type: "MCQ_SINGLE", skills: ["paraphrase"], difficulty: 2,
      answer: JSON.stringify({ option: 0 }), payload: JSON.stringify({ options: ["correct", "lure", "lure"] }), points: 1,
    });
  }
  for (let index = 0; index < 3; index += 1) {
    plan.push({
      section: listening.id, type: "DICTATION", skills: ["detail"], difficulty: 4,
      answer: JSON.stringify({ text: "The library closes at nine." }), payload: JSON.stringify({ audioScript: "The library closes at nine." }), points: 1,
    });
  }

  let readingOrder = 0;
  let listeningOrder = 0;
  for (const item of plan) {
    const isReading = item.section === reading.id;
    const row = await db.mockTestQuestion.create({
      data: {
        sectionId: item.section,
        order: isReading ? (readingOrder += 1) : (listeningOrder += 1),
        type: item.type,
        stem: null,
        payload: item.payload,
        answer: item.answer,
        points: item.points,
        skills: JSON.stringify(item.skills),
        difficulty: item.difficulty,
        explanation: "Fixture explanation.",
        source: "original-practice",
        contentStatus: "published",
      },
    });
    fixture.questionIds.push({
      id: row.id,
      section: isReading ? "reading" : "listening",
      type: item.type,
      skills: item.skills,
      answer: item.answer,
      difficulty: item.difficulty,
    });
  }
  return mock.id;
}

beforeAll(async () => {
  fixture.specId = await ensureSpec();
  fixture.mockId = await seedFixtureMock(fixture.specId);
  const user = await db.user.create({
    data: { email: `p51-${Date.now()}@talksy.test`, name: "P51 Learner", passwordHash: "x" },
  });
  fixture.userId = user.id;
  const secondUser = await db.user.create({
    data: { email: `p51-cold-${Date.now()}@talksy.test`, name: "P51 Cold Start", passwordHash: "x" },
  });
  fixture.secondUserId = secondUser.id;
});

afterAll(async () => {
  // Attempts/responses cascade with the users; sections/questions with the mocks.
  await db.user.deleteMany({ where: { id: { in: [fixture.userId, fixture.secondUserId] } } });
  await db.user.deleteMany({ where: { email: { contains: "p51-api" } } });
  await db.mockTest.deleteMany({ where: { id: { in: [...fixture.assembledMockIds, fixture.mockId] } } });
  await db.testSpecification.deleteMany({ where: { id: fixture.specId } });
});

/** Answer every objective fixture question: wrong on "detail" MCQs, right elsewhere. */
async function answerAttemptProfile(attemptId: string, profile: "weak-detail" | "perfect") {
  for (const question of fixture.questionIds) {
    let answer: unknown;
    if (question.type === "MCQ_SINGLE") {
      const wrongForDetail = profile === "weak-detail" && question.skills.includes("detail");
      answer = { option: wrongForDetail ? 1 : 0 };
    } else if (question.type === "TFNG") {
      answer = { value: profile === "perfect" ? 0 : 1 };
    } else {
      answer = { text: profile === "perfect" ? "The library closes at nine." : "wrong transcript" };
    }
    await saveResponse(attemptId, question.id, answer, { timeDeltaSec: 30 });
  }
}

// ---------------------------------------------------------------------------
// Topic-specific practice
// ---------------------------------------------------------------------------

describe("topic-specific practice", () => {
  it("catalogues topics from the published pool with counts and sections", async () => {
    const topics = await topicCatalog(EXAM.examKey, EXAM.variant);
    const detail = topics.find((t) => t.skill === "detail");
    const paraphrase = topics.find((t) => t.skill === "paraphrase");
    expect(detail).toBeDefined();
    expect(detail!.count).toBe(9);
    expect(detail!.sections).toContain("reading");
    expect(detail!.sections).toContain("listening");
    expect(detail!.label).toBe("Detail spotting");
    expect(paraphrase!.count).toBe(8);
    // Skills with fewer than three items stay out of the catalogue.
    expect(topics.find((t) => t.skill === "inference")).toBeUndefined();
  });

  it("assembles a set whose every item carries the chosen topic", async () => {
    const set = await buildTopicPractice({ ...EXAM, topic: "paraphrase", count: 6 });
    expect(set).not.toBeNull();
    fixture.assembledMockIds.push(set!.mockId);
    expect(set!.itemCount).toBe(6);

    const safe = await getSafeMockTest(set!.mockId);
    expect(safe).not.toBeNull();
    expect(safe!.kind).toBe("topic");
    const items = safe!.sections.flatMap((section) => section.questions);
    expect(items.length).toBe(6);
    // Integrity: the answer key never reaches the client, in payload or column.
    expect(JSON.stringify(safe)).not.toContain("\"answer\"");
    for (const item of items) {
      expect(item.type).toBe("MCQ_SINGLE");
      expect(item.payload).toEqual({ options: ["correct", "lure", "lure"] });
    }
  });

  it("returns null for an unknown topic", async () => {
    const set = await buildTopicPractice({ ...EXAM, topic: "no-such-topic" });
    expect(set).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// Weakness-based practice
// ---------------------------------------------------------------------------

describe("weakness-based practice", () => {
  it("refuses to assemble without enough graded history (cold start guidance)", async () => {
    const profile = await weaknessProfile(fixture.secondUserId, EXAM.examKey, EXAM.variant);
    expect(profile.hasEnoughEvidence).toBe(false);
    expect(profile.evidenceItems).toBe(0);
    const set = await buildWeaknessPractice({ userId: fixture.secondUserId, ...EXAM });
    expect("empty" in set && set.empty).toBe(true);
    expect("empty" in set ? set.reason : "").toContain("diagnostic");
  });

  it("profiles the weakest skills from graded history and targets them", async () => {
    // Sit a graded run: everything right except the "detail" MCQs.
    const attempt = await startAttempt(fixture.userId, fixture.mockId, "full_mock", true);
    expect(attempt).not.toBeNull();
    await answerAttemptProfile(attempt!.id, "weak-detail");
    const submitted = await submitAttempt(attempt!.id);
    expect(submitted).not.toBeNull();

    const profile = await weaknessProfile(fixture.userId, EXAM.examKey, EXAM.variant);
    expect(profile.evidenceItems).toBe(19);
    expect(profile.hasEnoughEvidence).toBe(true);
    const weakest = profile.weakestSkills[0];
    expect(weakest.skill).toBe("detail");
    // detail: 9 items (6 MCQs + 3 dictations), all answered wrong → 0%.
    expect(weakest.total).toBe(9);
    expect(weakest.correct).toBe(0);

    const set = await buildWeaknessPractice({ userId: fixture.userId, ...EXAM, count: 8 });
    expect("empty" in set).toBe(false);
    if (!("empty" in set)) {
      fixture.assembledMockIds.push(set.mockId);
      expect(set.itemCount).toBeGreaterThan(0);
      const safe = await getSafeMockTest(set.mockId);
      expect(safe!.kind).toBe("weakness");
      expect(JSON.stringify(safe)).not.toContain("\"answer\"");
    }
  });
});

// ---------------------------------------------------------------------------
// Diagnostic assessment
// ---------------------------------------------------------------------------

describe("diagnostic assessment", () => {
  it("assembles a balanced timed sample and clocks scaled to the sample length", async () => {
    const set = await buildDiagnosticAssessment({ ...EXAM, perSection: 4 });
    expect(set).not.toBeNull();
    fixture.assembledMockIds.push(set!.mockId);

    const safe = await getSafeMockTest(set!.mockId);
    expect(safe!.kind).toBe("diagnostic");
    const reading = safe!.sections.find((section) => section.key === "reading");
    const listening = safe!.sections.find((section) => section.key === "listening");
    // Only sections with pool items are probed; writing/speaking have none here.
    expect(safe!.sections.map((section) => section.key).sort()).toEqual(["listening", "reading"]);
    expect(reading!.questions.length).toBe(4);
    expect(listening!.questions.length).toBe(4);
    // Round-robin across task types: reading probes MCQ_SINGLE and TFNG.
    expect(new Set(reading!.questions.map((question) => question.type))).toContain("TFNG");
    // Scaled clocks: 4 of 20 official questions → 300s, never below 120s.
    expect(reading!.timingSec).toBe(300);
    expect(listening!.timingSec).toBeGreaterThanOrEqual(120);
    expect(reading!.timingSec).toBeLessThanOrEqual(1500);
    expect(JSON.stringify(safe)).not.toContain("\"answer\"");
  });

  it("produces a diagnostic profile on submission (practice estimate, never official)", async () => {
    const set = await buildDiagnosticAssessment({ ...EXAM, perSection: 4 });
    fixture.assembledMockIds.push(set!.mockId);
    const attempt = await startAttempt(fixture.userId, set!.mockId, "diagnostic", true);
    expect(attempt!.mode).toBe("diagnostic");
    expect(attempt!.timed).toBe(true);

    // Answer every objective item correctly.
    const safe = await getSafeMockTest(set!.mockId);
    for (const section of safe!.sections) {
      for (const question of section.questions) {
        if (question.type === "MCQ_SINGLE") await saveResponse(attempt!.id, question.id, { option: 0 });
        else if (question.type === "TFNG") await saveResponse(attempt!.id, question.id, { value: 0 });
        else await saveResponse(attempt!.id, question.id, { text: "The library closes at nine." });
      }
    }
    await submitAttempt(attempt!.id);
    const result = await getAttemptResult(attempt!.id, fixture.userId);
    expect(result).not.toBeNull();
    expect(result!.mode).toBe("diagnostic");
    expect(result!.diagnosticProfile).not.toBeNull();
    const profile = result!.diagnosticProfile!;
    expect(profile.sections.length).toBe(2);
    for (const row of profile.sections) {
      expect(row.estimatedScore).toBeGreaterThanOrEqual(1);
      expect(row.estimatedScore).toBeLessThanOrEqual(6);
      expect(row.accuracy).toBeGreaterThan(0.9);
    }
    expect(profile.summary).toContain("practice estimate");
    expect(result!.integrityNote).toContain("not an official");
  });

  it("keeps the diagnostic profile off non-diagnostic attempts", async () => {
    const history = await listAttemptHistory(fixture.userId);
    const graded = history.attempts.find(
      (entry) => !entry.unfinished && entry.totalScore !== null && entry.mode !== "diagnostic",
    );
    expect(graded).toBeDefined();
    const result = await getAttemptResult(graded!.attemptId, fixture.userId);
    expect(result!.diagnosticProfile).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// Adaptive practice
// ---------------------------------------------------------------------------

describe("adaptive practice (TalkSy heuristic, never ETS's)", () => {
  it("cold-starts conservatively without history", async () => {
    const calibration = await calibrateAdaptive(fixture.secondUserId, EXAM.examKey, EXAM.variant);
    expect(calibration.evidenceItems).toBe(0);
    expect(calibration.targetDifficulty).toBe(2);
    expect(calibration.reason).toContain("Not much history");
  });

  it("steers difficulty up from a strong run and down from a weak one", async () => {
    // Strong run: everything right at mixed difficulty.
    const strong = await startAttempt(fixture.userId, fixture.mockId, "adaptive", true);
    await answerAttemptProfile(strong!.id, "perfect");
    await submitAttempt(strong!.id);
    const up = await calibrateAdaptive(fixture.userId, EXAM.examKey, EXAM.variant, strong!.id);
    expect(up.recentAccuracy).toBe(1);
    expect(up.targetDifficulty).toBeGreaterThanOrEqual(3);

    // Weak run: everything wrong.
    const weak = await startAttempt(fixture.userId, fixture.mockId, "adaptive", true);
    await answerAttemptProfile(weak!.id, "weak-detail");
    // Overwrite the remaining right answers from the profile with wrong ones.
    for (const question of fixture.questionIds) {
      if (question.type === "MCQ_SINGLE") await saveResponse(weak!.id, question.id, { option: 2 });
      else if (question.type === "TFNG") await saveResponse(weak!.id, question.id, { value: 2 });
      else await saveResponse(weak!.id, question.id, { text: "no" });
    }
    await submitAttempt(weak!.id);
    const down = await calibrateAdaptive(fixture.userId, EXAM.examKey, EXAM.variant, weak!.id);
    expect(down.recentAccuracy).toBeLessThan(0.2);
    expect(down.targetDifficulty).toBeLessThan(up.targetDifficulty);
  });

  it("assembles near the calibrated tier with the honesty note attached", async () => {
    const set = await buildAdaptivePractice({ userId: fixture.secondUserId, ...EXAM, count: 6, timed: false });
    expect(set).not.toBeNull();
    fixture.assembledMockIds.push(set!.mockId);
    const safe = await getSafeMockTest(set!.mockId);
    expect(safe!.kind).toBe("adaptive");
    expect(safe!.description).toContain("not ETS's proprietary adaptive algorithm");
    expect(JSON.stringify(safe)).not.toContain("\"answer\"");
    // Cold start targets tier 2: every item within one tier of it.
    const items = safe!.sections.flatMap((section) => section.questions);
    expect(items.length).toBe(6);
    for (const item of items) {
      expect(item.difficulty).toBeGreaterThanOrEqual(1);
      expect(item.difficulty).toBeLessThanOrEqual(3);
    }
  });
});

// ---------------------------------------------------------------------------
// Results: task performance and time utilisation
// ---------------------------------------------------------------------------

describe("extended result report", () => {
  it("breaks performance down by task type with spec labels, and tracks time per section", async () => {
    const attempt = await startAttempt(fixture.userId, fixture.mockId, "full_mock", true);
    await answerAttemptProfile(attempt!.id, "weak-detail");
    await submitAttempt(attempt!.id);
    const result = await getAttemptResult(attempt!.id, fixture.userId);
    expect(result).not.toBeNull();

    // Task performance: labels come from the pinned spec's catalogue.
    const mcq = result!.taskPerformance.find((row) => row.type === "MCQ_SINGLE");
    expect(mcq).toBeDefined();
    expect(mcq!.label).toBe("Listen and choose a response");
    expect(mcq!.total).toBe(14);
    expect(mcq!.correct).toBe(8); // 4 reading paraphrase + 4 listening paraphrase right, 6 detail wrong
    expect(mcq!.maxPoints).toBe(14);
    expect(mcq!.avgTimeSec).toBe(30);
    const dictation = result!.taskPerformance.find((row) => row.type === "DICTATION");
    expect(dictation!.label).toBe("Listen and Repeat");
    expect(dictation!.correct).toBe(0); // the weak-detail profile misses all three

    // Time utilisation: one row per section, tracked seconds vs the clock.
    const reading = result!.timeUtilisation.find((row) => row.section === "reading");
    expect(reading).toBeDefined();
    expect(reading!.allottedSec).toBe(1500);
    expect(reading!.trackedSec).toBe(360); // 12 questions × 30 tracked seconds
    expect(reading!.utilisation).toBeLessThanOrEqual(1);
    expect(reading!.pace).toBe("under");
    expect(result!.timeUtilisation.length).toBe(2);
  });
});

// ---------------------------------------------------------------------------
// Unfinished attempts (abandon lifecycle)
// ---------------------------------------------------------------------------

describe("unfinished attempts", () => {
  it("abandons with answers preserved, never scored, no report, no answer key", async () => {
    const attempt = await startAttempt(fixture.userId, fixture.mockId, "full_mock", true);
    const first = fixture.questionIds[0];
    const second = fixture.questionIds[1];
    await saveResponse(attempt!.id, first.id, { option: 0 });
    await saveResponse(attempt!.id, second.id, { option: 1 });

    const result = await abandonAttempt(attempt!.id, fixture.userId);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.savedResponses).toBe(2);
      expect(result.status).toBe("abandoned");
    }

    // The stored responses survive.
    const stored = await db.mockTestResponse.count({ where: { attemptId: attempt!.id } });
    expect(stored).toBe(2);

    // No result report — the answer key stays unreachable.
    expect(await getAttemptResult(attempt!.id, fixture.userId)).toBeNull();
    // Cannot submit or reveal afterwards.
    expect(await submitAttempt(attempt!.id)).toBeNull();
    const reveal = await revealAnswer(attempt!.id, fixture.userId, first.id);
    expect(reveal.ok).toBe(false);

    // The attempt is recorded in history as unfinished, without a score.
    const history = await listAttemptHistory(fixture.userId);
    const entry = history.attempts.find((row) => row.attemptId === attempt!.id);
    expect(entry).toBeDefined();
    expect(entry!.unfinished).toBe(true);
    expect(entry!.status).toBe("abandoned");
    expect(entry!.totalScore).toBeNull();

    // Double abandon is refused.
    const again = await abandonAttempt(attempt!.id, fixture.userId);
    expect(again.ok).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// API routes
// ---------------------------------------------------------------------------

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

describe("practice-mode API routes", () => {
  it("guards every new endpoint behind login", async () => {
    const topicList = await topicGetRoute(request("/api/exams/practice/topic?exam=TOEFL_IBT&variant=STANDARD"));
    expect(topicList.status).toBe(401);
    const topicPost = await topicPostRoute(request("/api/exams/practice/topic", jsonBody({ examKey: "TOEFL_IBT", variant: "STANDARD", topic: "detail" })));
    expect(topicPost.status).toBe(401);
    const weaknessGet = await weaknessGetRoute(request("/api/exams/practice/weakness?exam=TOEFL_IBT&variant=STANDARD"));
    expect(weaknessGet.status).toBe(401);
    const weaknessPost = await weaknessPostRoute(request("/api/exams/practice/weakness", jsonBody({ examKey: "TOEFL_IBT", variant: "STANDARD" })));
    expect(weaknessPost.status).toBe(401);
    const diagnostic = await diagnosticRoute(request("/api/exams/practice/diagnostic", jsonBody({ examKey: "TOEFL_IBT", variant: "STANDARD" })));
    expect(diagnostic.status).toBe(401);
    const adaptive = await adaptiveRoute(request("/api/exams/practice/adaptive", jsonBody({ examKey: "TOEFL_IBT", variant: "STANDARD" })));
    expect(adaptive.status).toBe(401);
    const abandon = await abandonRoute(request("/api/exams/attempts/whatever/abandon", { method: "POST" }), ctx({ id: "whatever" }));
    expect(abandon.status).toBe(401);
  });

  it("serves the topic catalogue and starts a topic set", async () => {
    const cookie = await registerTestUser("p51-api");
    const list = await topicGetRoute(
      request("/api/exams/practice/topic?exam=TOEFL_IBT&variant=STANDARD", { headers: { cookie } }),
    );
    expect(list.status).toBe(200);
    const listBody = (await list.json()) as { topics: Array<{ skill: string; label: string; count: number }> };
    const detail = listBody.topics.find((topic) => topic.skill === "detail");
    expect(detail).toBeDefined();
    expect(detail!.count).toBe(9);

    const res = await topicPostRoute(
      request("/api/exams/practice/topic", jsonBody({ examKey: "TOEFL_IBT", variant: "STANDARD", topic: "detail", count: 5 }, cookie)),
    );
    expect(res.status).toBe(201);
    const body = (await res.json()) as { mockId: string; itemCount: number; attempt: { id: string; mode: string; timed: boolean } };
    fixture.assembledMockIds.push(body.mockId);
    expect(body.itemCount).toBe(5);
    expect(body.attempt.mode).toBe("topic");
    expect(body.attempt.timed).toBe(false); // topic drills default to untimed learning

    const badTopic = await topicPostRoute(
      request("/api/exams/practice/topic", jsonBody({ examKey: "TOEFL_IBT", variant: "STANDARD", topic: "" }, cookie)),
    );
    expect(badTopic.status).toBe(422);
  });

  it("previews the weakness profile and refuses cold-start assembly with 409", async () => {
    const cookie = await registerTestUser("p51-api-cold");
    const preview = await weaknessGetRoute(
      request("/api/exams/practice/weakness?exam=TOEFL_IBT&variant=STANDARD", { headers: { cookie } }),
    );
    expect(preview.status).toBe(200);
    const body = (await preview.json()) as { profile: { hasEnoughEvidence: boolean; evidenceItems: number } };
    expect(body.profile.hasEnoughEvidence).toBe(false);
    expect(body.profile.evidenceItems).toBe(0);

    const res = await weaknessPostRoute(
      request("/api/exams/practice/weakness", jsonBody({ examKey: "TOEFL_IBT", variant: "STANDARD" }, cookie)),
    );
    expect(res.status).toBe(409);
    const error = (await res.json()) as { error: string };
    expect(error.error).toContain("diagnostic");
  });

  it("starts a diagnostic assessment under timing", async () => {
    const cookie = await registerTestUser("p51-api-diag");
    const res = await diagnosticRoute(
      request("/api/exams/practice/diagnostic", jsonBody({ examKey: "TOEFL_IBT", variant: "STANDARD" }, cookie)),
    );
    expect(res.status).toBe(201);
    const body = (await res.json()) as { mockId: string; itemCount: number; attempt: { mode: string; timed: boolean } };
    fixture.assembledMockIds.push(body.mockId);
    expect(body.attempt.mode).toBe("diagnostic");
    expect(body.attempt.timed).toBe(true);
  });

  it("starts adaptive practice with the honesty note in the response", async () => {
    const cookie = await registerTestUser("p51-api-adaptive");
    const res = await adaptiveRoute(
      request("/api/exams/practice/adaptive", jsonBody({ examKey: "TOEFL_IBT", variant: "STANDARD", count: 6 }, cookie)),
    );
    expect(res.status).toBe(201);
    const body = (await res.json()) as { mockId: string; attempt: { id: string; mode: string }; adaptiveNote: string };
    fixture.assembledMockIds.push(body.mockId);
    expect(body.attempt.mode).toBe("adaptive");
    expect(body.adaptiveNote).toContain("not ETS's proprietary adaptive algorithm");
  });

  it("abandons an in-progress attempt through the route with answers preserved", async () => {
    const cookie = await registerTestUser("p51-api-abandon");
    const user = await db.user.findFirst({ where: { email: { contains: "p51-api-abandon" } } });
    expect(user).not.toBeNull();
    const attempt = await startAttempt(user!.id, fixture.mockId, "full_mock", true);
    expect(attempt).not.toBeNull();
    const first = fixture.questionIds[0];
    await saveResponse(attempt!.id, first.id, { option: 0 });

    const res = await abandonRoute(
      request(`/api/exams/attempts/${attempt!.id}/abandon`, { method: "POST", headers: { cookie } }),
      ctx({ id: attempt!.id }),
    );
    expect(res.status).toBe(200);
    const body = (await res.json()) as { abandoned: boolean; savedResponses: number; note: string };
    expect(body.abandoned).toBe(true);
    expect(body.savedResponses).toBe(1);
    expect(body.note).toContain("preserved");
  });
});
