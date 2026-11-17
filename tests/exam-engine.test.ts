/// <reference types="bun-types" />
/**
 * Shared examination-engine tests: the six practice modes, navigation
 * policies, the new objective types (dictation, listen-and-repeat), answer
 * formatting, untimed reveal, practice-set assembly, history trends and
 * same-version comparisons, and the integrity contract.
 *
 * Database-backed cases create their own fixtures (the test database ships
 * empty by design) and clean up afterwards.
 */

import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import { db } from "@/lib/db";
import { setLlmProviderOverride, type LlmProvider } from "@/lib/llm";
import { EXAM_META } from "../scripts/exam-content-meta";
import { IELTS_MOCK_LIBRARY } from "@/data/exams/ielts/mocks";
import {
  INTEGRITY_CONTENT_NOTE,
  INTEGRITY_SCORE_NOTE,
  INTEGRITY_SIMULATION_NOTE,
  INTEGRITY_TRADEMARK_NOTE,
} from "@/lib/exams/integrity";
import {
  ATTEMPT_MODES,
  attemptModeLabel,
  isTimedMode,
  normalizeAttemptMode,
} from "@/lib/exams/types";
import {
  describeCorrectAnswer,
  describeGivenAnswer,
  gradeObjectiveQuestion,
  isObjectiveType,
  revealAnswer,
  saveResponse,
  startAttempt,
  submitAttempt,
  getAttemptResult,
} from "@/lib/exams/mock-engine";
import { DEFAULT_NAVIGATION, effectivePolicy } from "@/lib/exams/navigation";
import {
  buildCustomPractice,
  buildMistakesPractice,
  buildSectionPractice,
} from "@/lib/exams/practice-sets";
import { compareAttempts, listAttemptHistory } from "@/lib/exams/history";

// ---------------------------------------------------------------------------
// Pure engine behaviour
// ---------------------------------------------------------------------------

describe("practice modes", () => {
  it("normalises legacy exam/practice values onto the six-mode model", () => {
    expect(normalizeAttemptMode("exam")).toBe("exam");
    expect(normalizeAttemptMode("practice")).toBe("practice");
    expect(normalizeAttemptMode("full_mock")).toBe("full_mock");
    expect(normalizeAttemptMode("custom")).toBe("custom");
    expect(normalizeAttemptMode("nonsense")).toBe("exam");
    expect(normalizeAttemptMode(undefined)).toBe("exam");
  });

  it("labels every mode, legacy included", () => {
    expect(attemptModeLabel("full_mock")).toBe("Full mock examination");
    expect(attemptModeLabel("untimed")).toBe("Untimed learning practice");
    expect(attemptModeLabel("mistakes")).toBe("Previous mistakes practice");
    expect(attemptModeLabel("exam")).toBe("Full mock examination");
    expect(attemptModeLabel("practice")).toBe("Untimed learning practice");
    expect(attemptModeLabel("never-seen")).toBe("Full mock examination");
  });

  it("derives timed-ness for every mode", () => {
    expect(isTimedMode("exam")).toBe(true);
    expect(isTimedMode("practice")).toBe(false);
    expect(isTimedMode("full_mock")).toBe(true);
    expect(isTimedMode("section")).toBe(true);
    expect(isTimedMode("timed")).toBe(true);
    expect(isTimedMode("untimed")).toBe(false);
    expect(isTimedMode("mistakes")).toBe(false);
    expect(isTimedMode("custom", false)).toBe(false);
    expect(isTimedMode("custom", true)).toBe(true);
    // PROMPT 51 modes: topic (learning default), weakness (remediation),
    // diagnostic (always an assessment), adaptive (clocks by default).
    expect(isTimedMode("topic")).toBe(false);
    expect(isTimedMode("topic", true)).toBe(true);
    expect(isTimedMode("weakness")).toBe(false);
    expect(isTimedMode("diagnostic")).toBe(true);
    expect(isTimedMode("adaptive", false)).toBe(false);
    expect(ATTEMPT_MODES).toHaveLength(10);
  });
});

describe("navigation policies (spec-driven, exam-timing aware)", () => {
  it("follows the spec policy exactly under exam timing", () => {
    const ieltsListening = effectivePolicy(
      { withinSection: "free", allowBackToSection: false, flagForReview: true, replayAudio: false },
      true,
    );
    expect(ieltsListening).toEqual({
      withinSection: "free",
      allowBackToSection: false,
      flagForReview: true,
      replayAudio: false,
      timed: true,
    });

    const toeflListening = effectivePolicy(
      { withinSection: "forward_only", allowBackToSection: false, flagForReview: false, replayAudio: false },
      true,
    );
    expect(toeflListening.withinSection).toBe("forward_only");
    expect(toeflListening.flagForReview).toBe(false);
    expect(toeflListening.replayAudio).toBe(false);
  });

  it("never allows audio replay under exam timing, even if misconfigured", () => {
    const sloppy = effectivePolicy(
      { withinSection: "free", allowBackToSection: false, flagForReview: true, replayAudio: true },
      true,
    );
    expect(sloppy.replayAudio).toBe(false);
  });

  it("relaxes navigation and replay for untimed learning runs", () => {
    const untimed = effectivePolicy(DEFAULT_NAVIGATION, false);
    expect(untimed.withinSection).toBe("free");
    expect(untimed.allowBackToSection).toBe(true);
    expect(untimed.replayAudio).toBe(true);
    expect(untimed.timed).toBe(false);
  });
});

describe("dictation and listen-and-repeat grading", () => {
  const dictationPayload = JSON.stringify({
    audioScript: "The course starts on the fourteenth of March.",
  });
  const repeatPayload = JSON.stringify({ sentence: "The library opens at eight.", windowSec: 8 });

  it("marks dictation with punctuation and case tolerance", () => {
    const key = JSON.stringify({ text: "The course starts on the fourteenth of March." });
    expect(
      gradeObjectiveQuestion("DICTATION", dictationPayload, key, JSON.stringify({ text: "the course starts on the fourteenth of march" }), 2),
    ).toEqual({ awarded: 2, correct: true });
    expect(
      gradeObjectiveQuestion("DICTATION", dictationPayload, key, JSON.stringify({ text: "The course starts on the fourteenth of May." }), 2),
    ).toEqual({ awarded: 0, correct: false });
  });

  it("marks listen-and-repeat on exact repetition of the typed transcript", () => {
    const key = JSON.stringify({ text: "The library opens at eight." });
    expect(
      gradeObjectiveQuestion("LISTEN_REPEAT", repeatPayload, key, JSON.stringify({ text: "The library opens at 8." }), 5),
    ).toEqual({ awarded: 0, correct: false });
    expect(
      gradeObjectiveQuestion("LISTEN_REPEAT", repeatPayload, key, JSON.stringify({ text: "the library opens at eight" }), 5),
    ).toEqual({ awarded: 5, correct: true });
  });

  it("treats both as objective and rubric tasks as constructed", () => {
    expect(isObjectiveType("DICTATION")).toBe(true);
    expect(isObjectiveType("LISTEN_REPEAT")).toBe(true);
    expect(isObjectiveType("EMAIL_WRITING")).toBe(false);
    expect(isObjectiveType("DISCUSSION_TASK")).toBe(false);
    expect(isObjectiveType("SPEAKING_TASK")).toBe(false);
  });
});

describe("answer formatting for post-submission review", () => {
  const mcqPayload = JSON.stringify({ options: ["Train", "Bus", "Tram"], passage: "", audioScript: "" });
  const tfngPayload = JSON.stringify({ statement: "s", labels: ["True", "False", "Not Given"] });
  const blankPayload = JSON.stringify({ context: "c ___", blanks: [{ answer: "Birchwood" }], words: 2 });

  it("formats MCQ and TFNG answers as their option text", () => {
    expect(describeGivenAnswer("MCQ_SINGLE", mcqPayload, JSON.stringify({ option: 1 }))).toBe("Bus");
    expect(describeGivenAnswer("MCQ_SINGLE", mcqPayload, null)).toBe(null);
    expect(describeGivenAnswer("TFNG", tfngPayload, JSON.stringify({ value: 2 }))).toBe("Not Given");
    expect(describeCorrectAnswer("MCQ_SINGLE", mcqPayload, JSON.stringify({ option: 2 }))).toBe("Tram");
  });

  it("formats completion answers as the key list", () => {
    expect(describeCorrectAnswer("FILL_BLANK", blankPayload, JSON.stringify({ blanks: [{ answer: "Birchwood" }] }))).toBe("Birchwood");
    expect(describeGivenAnswer("FILL_BLANK", blankPayload, JSON.stringify({ blanks: ["birch wood"] }))).toBe("birch wood");
    expect(describeGivenAnswer("FILL_BLANK", blankPayload, JSON.stringify({ blanks: [""] }))).toBe("—");
  });

  it("returns null keys for constructed responses", () => {
    expect(describeCorrectAnswer("WRITING_TASK", JSON.stringify({ prompt: "p" }), null)).toBe(null);
    expect(describeGivenAnswer("EMAIL_WRITING", JSON.stringify({ situation: "s" }), JSON.stringify({ text: "Dear Sir…" }))).toBe("Dear Sir…");
  });
});

describe("integrity contract", () => {
  it("carries the four honesty statements", () => {
    expect(INTEGRITY_CONTENT_NOTE).toContain("not an official IELTS paper or ETS test");
    expect(INTEGRITY_SCORE_NOTE).toContain("not an official IELTS or ETS score");
    expect(INTEGRITY_SIMULATION_NOTE).toContain("Practice simulation");
    expect(INTEGRITY_TRADEMARK_NOTE).toContain("not affiliated with");
  });

  it("labels every mock description as original practice material", () => {
    for (const mock of IELTS_MOCK_LIBRARY) {
      expect(mock.description).toContain("Original EnglishPath practice material");
    }
  });
});

describe("question enrichment coverage (library + inline maps)", () => {
  it("gives every library question an explanation, inline or via the map", () => {
    const missing: string[] = [];
    for (const mock of IELTS_MOCK_LIBRARY) {
      const meta = EXAM_META[mock.title] ?? {};
      for (const section of mock.sections) {
        for (const question of section.questions) {
          const inline = question.explanation;
          const mapped = meta[`${section.key}:${question.order}`]?.explanation;
          if (!inline && !mapped) {
            missing.push(`${mock.title} ${section.key}:${question.order}`);
          }
          const difficulty = question.difficulty ?? meta[`${section.key}:${question.order}`]?.difficulty;
          if (!difficulty || difficulty < 1 || difficulty > 5) {
            missing.push(`${mock.title} ${section.key}:${question.order} (difficulty)`);
          }
        }
      }
    }
    expect(missing).toEqual([]);
  });

  it("covers the two inline seed mocks (16 + 16 questions)", () => {
    expect(Object.keys(EXAM_META["IELTS Academic Sample Mock 1"] ?? {})).toHaveLength(16);
    expect(Object.keys(EXAM_META["TOEFL iBT Sample Mock 1 (2026 format)"] ?? {})).toHaveLength(16);
  });
});

// ---------------------------------------------------------------------------
// Database-backed behaviour (fixtures created and cleaned up here)
// ---------------------------------------------------------------------------

const fixtures: { userId?: string; mockIds?: string[]; attemptIds?: string[] } = {};
const fakeProvider: LlmProvider = {
  name: "fake-exam-grader",
  complete: async () =>
    JSON.stringify({
      score: 6,
      criteria: [{ name: "Task achievement", score: 6, comment: "Covers all bullets." }],
      summary: "Solid practice response.",
    }),
  stream: async function* () {
    yield JSON.stringify({ score: 6, criteria: [], summary: "" });
  },
};

async function createFixtureMock(examKey: "IELTS" | "TOEFL_IBT", variant: string, title: string) {
  const spec = await db.testSpecification.findFirst({ where: { examKey, variant } });
  const mock = await db.mockTest.create({
    data: {
      examKey,
      variant,
      specId: spec?.id ?? "missing",
      title,
      kind: "drill",
      lengthLabel: "sample",
      status: "published",
      description: "Fixture. Original EnglishPath practice material — not an official paper.",
    },
  });
  const reading = await db.mockTestSection.create({
    data: { mockTestId: mock.id, key: "reading", title: "Reading", timingSec: 600, order: 1 },
  });
  const writing = await db.mockTestSection.create({
    data: { mockTestId: mock.id, key: "writing", title: "Writing", timingSec: 600, order: 2 },
  });
  const questions: Array<{ id: string; section: string; order: number; type: string; points: number; difficulty: number; answer: string | null; payload: string }> = [];
  const seedQuestions = [
    { section: reading.id, order: 1, type: "MCQ_SINGLE", points: 1, difficulty: 2, answer: JSON.stringify({ option: 1 }), payload: JSON.stringify({ options: ["a", "b", "c"] }) },
    { section: reading.id, order: 2, type: "MCQ_SINGLE", points: 1, difficulty: 4, answer: JSON.stringify({ option: 0 }), payload: JSON.stringify({ options: ["x", "y", "z"] }) },
    { section: reading.id, order: 3, type: "DICTATION", points: 2, difficulty: 3, answer: JSON.stringify({ text: "The fee is two hundred pounds." }), payload: JSON.stringify({ audioScript: "The fee is two hundred pounds." }) },
    { section: writing.id, order: 1, type: "EMAIL_WRITING", points: 0, difficulty: 3, answer: null, payload: JSON.stringify({ situation: "Write to your landlord about a broken heating system.", bullets: ["describe", "effect", "request"], tone: "formal", minWords: 150, suggestedMinutes: 20, rubricKey: "ielts.writing" }) },
  ];
  for (const question of seedQuestions) {
    const row = await db.mockTestQuestion.create({
      data: {
        sectionId: question.section,
        order: question.order,
        type: question.type,
        stem: null,
        payload: question.payload,
        answer: question.answer,
        points: question.points,
        skills: JSON.stringify(["detail"]),
        difficulty: question.difficulty,
        explanation: "Fixture explanation.",
        source: "original-practice",
        contentStatus: "published",
      },
    });
    questions.push({ id: row.id, section: question.section === reading.id ? "reading" : "writing", order: question.order, type: question.type, points: question.points, difficulty: question.difficulty, answer: question.answer, payload: question.payload });
  }
  return { mock, reading, writing, questions };
}

beforeAll(async () => {
  setLlmProviderOverride(fakeProvider);
  // A spec row so assembled sets pin something real.
  const existing = await db.testSpecification.findFirst({ where: { examKey: "IELTS", variant: "ACADEMIC" } });
  if (!existing) {
    await db.testSpecification.create({
      data: {
        examKey: "IELTS",
        variant: "ACADEMIC",
        name: "IELTS Academic",
        version: 1,
        status: "active",
        effectiveDate: new Date("2026-07-01"),
        lastReviewedAt: new Date(),
        sections: JSON.stringify([
          { key: "listening", label: "Listening", timingSec: 1800, questionCount: 40, taskTypes: [], directions: "" },
          { key: "reading", label: "Academic Reading", timingSec: 3600, questionCount: 40, taskTypes: [], directions: "" },
          { key: "writing", label: "Academic Writing", timingSec: 3600, questionCount: 2, taskTypes: [], directions: "" },
          { key: "speaking", label: "Speaking", timingSec: 780, questionCount: 3, taskTypes: [], directions: "" },
        ]),
        scoringModel: JSON.stringify({ kind: "IELTS_BAND", unit: "band", rawToScore: {}, overallRule: "AVERAGE_ROUNDED_NEAREST_HALF", minSectionScore: 0, maxSectionScore: 9, validityMonths: 24 }),
        taskTypes: JSON.stringify([{ type: "MCQ_SINGLE", label: "Multiple choice", description: "", objective: true }]),
        sourceRefs: JSON.stringify([{ label: "IELTS official", url: "https://ielts.org/", retrievedAt: "2026-11-12" }]),
      },
    });
  }
  const user = await db.user.create({
    data: { email: `engine-test-${Date.now()}@talksy.app`, name: "Engine Test", passwordHash: "x:y", role: "student" },
  });
  fixtures.userId = user.id;
});

afterAll(async () => {
  setLlmProviderOverride(null);
  if (fixtures.attemptIds) {
    for (const id of fixtures.attemptIds) await db.mockTestAttempt.delete({ where: { id } }).catch(() => undefined);
  }
  if (fixtures.mockIds) {
    for (const id of fixtures.mockIds) await db.mockTest.delete({ where: { id } }).catch(() => undefined);
  }
  if (fixtures.userId) {
    await db.user.delete({ where: { id: fixtures.userId } }).catch(() => undefined);
  }
});

describe("practice-set assembly", () => {
  it("builds a section set from the published pool", async () => {
    const created = await createFixtureMock("IELTS", "ACADEMIC", `Fixture section pool ${Date.now()}`);
    fixtures.mockIds = fixtures.mockIds ?? [];
    fixtures.mockIds.push(created.mock.id);
    const set = await buildSectionPractice({ examKey: "IELTS", variant: "ACADEMIC", section: "reading", timed: true });
    expect(set).not.toBeNull();
    expect(set!.itemCount).toBeGreaterThanOrEqual(3);
    const assembled = await db.mockTest.findUnique({ where: { id: set!.mockId }, include: { sections: { include: { questions: true } } } });
    expect(assembled?.sections.every((section) => section.key === "reading")).toBe(true);
    expect(assembled?.sections[0].questions.every((question) => question.explanation !== null)).toBe(true);
  });

  it("filters custom practice by difficulty and type", async () => {
    const set = await buildCustomPractice({
      examKey: "IELTS",
      variant: "ACADEMIC",
      types: ["DICTATION"],
      difficultyMin: 3,
      difficultyMax: 3,
      count: 5,
      timed: true,
      minutes: 10,
    });
    expect(set).not.toBeNull();
    const assembled = await db.mockTest.findUnique({ where: { id: set!.mockId }, include: { sections: { include: { questions: true } } } });
    const questions = assembled?.sections.flatMap((section) => section.questions) ?? [];
    expect(questions.length).toBeGreaterThan(0);
    expect(questions.every((question) => question.type === "DICTATION")).toBe(true);
    expect(questions.every((question) => question.difficulty === 3)).toBe(true);
  });

  it("collects previous mistakes: wrong, unanswered and low rubric items", async () => {
    const created = await createFixtureMock("IELTS", "ACADEMIC", `Fixture mistakes pool ${Date.now()}`);
    fixtures.mockIds!.push(created.mock.id);
    fixtures.attemptIds = fixtures.attemptIds ?? [];

    // A submitted attempt with: Q1 wrong, Q2 correct, Q3 unanswered, email graded 6.0 (above threshold → not a mistake).
    const attempt = await startAttempt(fixtures.userId!, created.mock.id, "full_mock", true);
    fixtures.attemptIds.push(attempt!.id);
    await saveResponse(attempt!.id, created.questions[0].id, { option: 0 }); // wrong (key is 1)
    await saveResponse(attempt!.id, created.questions[1].id, { option: 0 }); // correct
    await saveResponse(attempt!.id, created.questions[3].id, { text: "Dear Sir or Madam, I am writing about the heating. It has not worked for three weeks, which makes the flat very cold at night. I have emailed twice and called once, but nothing has changed. Could you please send an engineer by the end of next week? I am happy to be at home any weekday afternoon. Yours faithfully, A Tenant." });
    // Q3 (dictation) left unanswered. Submitting grades everything (fake
    // provider) and stores autoScore/rubricScore for the mistakes builder.
    await submitAttempt(attempt!.id);

    const set = await buildMistakesPractice({ userId: fixtures.userId!, examKey: "IELTS", variant: "ACADEMIC", limit: 10 });
    if ("empty" in set) throw new Error("expected mistakes, got empty");
    const assembled = await db.mockTest.findUnique({ where: { id: set.mockId }, include: { sections: { include: { questions: true } } } });
    const pickedTypes = (assembled?.sections.flatMap((section) => section.questions) ?? []).map((question) => question.type);
    expect(pickedTypes).toContain("MCQ_SINGLE"); // the wrong one
    expect(pickedTypes).toContain("DICTATION"); // the unanswered one
    expect(pickedTypes).not.toContain("EMAIL_WRITING"); // rubric 6.0 → above the 0.6 threshold
  });
});

describe("untimed learning reveal", () => {
  it("reveals answered objective items in untimed mode only", async () => {
    const created = await createFixtureMock("IELTS", "ACADEMIC", `Fixture reveal ${Date.now()}`);
    fixtures.mockIds!.push(created.mock.id);
    const untimed = await startAttempt(fixtures.userId!, created.mock.id, "untimed", false);
    fixtures.attemptIds!.push(untimed!.id);
    // A separate mock for the timed attempt: one in-progress attempt per mock
    // per learner, so the timed refusal needs its own fixture.
    const timedFixture = await createFixtureMock("IELTS", "ACADEMIC", `Fixture reveal timed ${Date.now()}`);
    fixtures.mockIds!.push(timedFixture.mock.id);
    const timed = await startAttempt(fixtures.userId!, timedFixture.mock.id, "timed", true);
    fixtures.attemptIds!.push(timed!.id);

    await saveResponse(untimed!.id, created.questions[0].id, { option: 1 });
    const revealed = await revealAnswer(untimed!.id, fixtures.userId!, created.questions[0].id);
    expect(revealed.ok).toBe(true);
    if (revealed.ok) {
      expect(revealed.verdict).toBe("correct");
      expect(revealed.explanation).toBe("Fixture explanation.");
      expect(revealed.correctAnswer).toBe("b");
    }

    // Refused: before answering, under exam timing, for rubric tasks.
    const beforeAnswer = await revealAnswer(untimed!.id, fixtures.userId!, created.questions[1].id);
    expect(beforeAnswer.ok).toBe(false);
    await saveResponse(timed!.id, timedFixture.questions[0].id, { option: 1 });
    const timedRefusal = await revealAnswer(timed!.id, fixtures.userId!, timedFixture.questions[0].id);
    expect(timedRefusal.ok).toBe(false);
    await saveResponse(untimed!.id, created.questions[3].id, { text: "Dear Sir…" });
    const rubricRefusal = await revealAnswer(untimed!.id, fixtures.userId!, created.questions[3].id);
    expect(rubricRefusal.ok).toBe(false);
  });
});

describe("answer persistence contract (regression: time-only saves)", () => {
  it("a flag/time-only PATCH never overwrites the stored answer", async () => {
    const created = await createFixtureMock("IELTS", "ACADEMIC", `Fixture persistence ${Date.now()}`);
    fixtures.mockIds!.push(created.mock.id);
    const attempt = await startAttempt(fixtures.userId!, created.mock.id, "untimed", false);
    fixtures.attemptIds!.push(attempt!.id);

    // Answer saved, then several time-only flushes arrive (the player sends
    // these every 1.5s while the learner sits on a question).
    await saveResponse(attempt!.id, created.questions[0].id, { option: 1 });
    for (let tick = 0; tick < 3; tick += 1) {
      await saveResponse(attempt!.id, created.questions[0].id, undefined, { timeDeltaSec: 5 });
    }
    const row = await db.mockTestResponse.findUnique({
      where: { attemptId_questionId: { attemptId: attempt!.id, questionId: created.questions[0].id } },
    });
    expect(row?.answer).toBe(JSON.stringify({ option: 1 }));
    expect(row?.timeSpentSec).toBe(15);

    // An explicit null still clears the answer.
    await saveResponse(attempt!.id, created.questions[0].id, null);
    const cleared = await db.mockTestResponse.findUnique({
      where: { attemptId_questionId: { attemptId: attempt!.id, questionId: created.questions[0].id } },
    });
    expect(cleared?.answer).toBe("null");
  });
});

describe("submission, results and history", () => {
  it("produces a full result DTO with inspection detail and integrity note", async () => {
    const created = await createFixtureMock("IELTS", "ACADEMIC", `Fixture result ${Date.now()}`);
    fixtures.mockIds!.push(created.mock.id);
    const attempt = await startAttempt(fixtures.userId!, created.mock.id, "full_mock", true);
    fixtures.attemptIds!.push(attempt!.id);
    await saveResponse(attempt!.id, created.questions[0].id, { option: 0 }, { timeDeltaSec: 7, flagged: true }); // wrong + flagged
    await saveResponse(attempt!.id, created.questions[3].id, { text: "Dear Sir or Madam, I am writing about the heating. It has not worked for three weeks, which makes the flat very cold at night. I have emailed twice and called once, but nothing has changed. Could you please send an engineer by the end of next week? I am happy to be at home any weekday afternoon. Yours faithfully, A Tenant." });

    const result = await submitAttempt(attempt!.id);
    expect(result).not.toBeNull();
    expect(result!.modeLabel).toBe("Full mock examination");
    expect(result!.timed).toBe(true);
    expect(result!.integrityNote).toBe(INTEGRITY_SCORE_NOTE);
    expect(result!.unansweredCount).toBe(2); // dictation + one MCQ never answered
    expect(result!.timeSpentSec).not.toBeNull();
    const wrong = result!.questionResults.find((q) => q.questionId === created.questions[0].id);
    expect(wrong?.correct).toBe(false);
    expect(wrong?.givenAnswer).toBe("a");
    expect(wrong?.correctAnswer).toBe("b");
    expect(wrong?.flagged).toBe(true);
    expect(wrong?.explanation).toBe("Fixture explanation.");
    const email = result!.questionResults.find((q) => q.questionId === created.questions[3].id);
    expect(email?.constructedFeedback?.score).toBe(6);
    expect(result!.recommendations.length).toBeGreaterThan(0);

    const reread = await getAttemptResult(attempt!.id, fixtures.userId!);
    expect(reread!.questionResults.length).toBe(4);
  });

  it("trends exam-condition runs and refuses cross-version comparisons", async () => {
    const created = await createFixtureMock("IELTS", "ACADEMIC", `Fixture history ${Date.now()}`);
    fixtures.mockIds!.push(created.mock.id);
    const first = await startAttempt(fixtures.userId!, created.mock.id, "full_mock", true);
    fixtures.attemptIds!.push(first!.id);
    await saveResponse(first!.id, created.questions[0].id, { option: 1 });
    await saveResponse(first!.id, created.questions[1].id, { option: 0 });
    await submitAttempt(first!.id);

    const second = await startAttempt(fixtures.userId!, created.mock.id, "full_mock", true);
    fixtures.attemptIds!.push(second!.id);
    await saveResponse(second!.id, created.questions[0].id, { option: 1 });
    await saveResponse(second!.id, created.questions[1].id, { option: 0 });
    await saveResponse(second!.id, created.questions[2].id, { text: "The fee is two hundred pounds." });
    await submitAttempt(second!.id);

    const history = await listAttemptHistory(fixtures.userId!, { examKey: "IELTS", variant: "ACADEMIC" });
    const trend = history.trends.find((series) => series.examKey === "IELTS");
    expect(trend).toBeDefined();
    expect(trend!.attemptsCounted).toBeGreaterThanOrEqual(2);
    expect(trend!.improvement).not.toBeNull();

    const comparison = await compareAttempts(fixtures.userId!, first!.id, second!.id);
    expect(comparison.ok).toBe(true);
    if (comparison.ok) {
      expect(comparison.questionDiff?.sameMock).toBe(true);
      expect(comparison.questionDiff?.improved).toBeGreaterThanOrEqual(1);
    }

    // A different spec version is refused.
    const otherSpec = await db.testSpecification.findFirst({ where: { examKey: "IELTS", variant: "ACADEMIC" }, orderBy: { version: "desc" } });
    const bumped = await db.testSpecification.create({
      data: {
        examKey: "IELTS",
        variant: "ACADEMIC",
        name: "IELTS Academic",
        version: (otherSpec?.version ?? 1) + 1,
        status: "draft",
        effectiveDate: new Date(),
        lastReviewedAt: new Date(),
        sections: otherSpec?.sections ?? JSON.stringify([{ key: "reading", label: "Reading", timingSec: 600, questionCount: 0, taskTypes: [], directions: "" }]),
        scoringModel: otherSpec?.scoringModel ?? JSON.stringify({ kind: "IELTS_BAND", unit: "band", rawToScore: {}, overallRule: "AVERAGE_ROUNDED_NEAREST_HALF", minSectionScore: 0, maxSectionScore: 9, validityMonths: 24 }),
        taskTypes: otherSpec?.taskTypes ?? JSON.stringify([{ type: "MCQ_SINGLE", label: "Multiple choice", description: "", objective: true }]),
        sourceRefs: otherSpec?.sourceRefs ?? JSON.stringify([{ label: "IELTS official", url: "https://ielts.org/", retrievedAt: "2026-11-12" }]),
      },
    });
    const created2 = await createFixtureMock("IELTS", "ACADEMIC", `Fixture history v2 ${Date.now()}`);
    fixtures.mockIds!.push(created2.mock.id);
    await db.mockTest.update({ where: { id: created2.mock.id }, data: { specId: bumped.id } });
    const third = await startAttempt(fixtures.userId!, created2.mock.id, "full_mock", true);
    fixtures.attemptIds!.push(third!.id);
    await saveResponse(third!.id, created2.questions[0].id, { option: 1 });
    await submitAttempt(third!.id);
    const refused = await compareAttempts(fixtures.userId!, first!.id, third!.id);
    expect(refused.ok).toBe(false);
    // Remove the v2 mock before its spec row, or the FK complains.
    await db.mockTest.delete({ where: { id: created2.mock.id } }).catch(() => undefined);
    fixtures.mockIds = fixtures.mockIds!.filter((id) => id !== created2.mock.id);
    await db.testSpecification.delete({ where: { id: bumped.id } });
  });
});
