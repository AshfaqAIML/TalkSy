/**
 * TOEFL Writing and Speaking Practice Library (PROMPT 50) — contract tests.
 *
 *   1. Volume and distribution: 200 writing exercises (100 Build a Sentence
 *      across five focuses, 60 emails across six purposes, 40 discussion
 *      boards) and 100 speaking items (50 Listen and Repeat, 50 Take an
 *      Interview), all through the integrity validators.
 *   2. Safe projections: answer keys, model responses, teaching kits,
 *      reference transcripts (locked repeat items) and sample interview
 *      responses never leave the server before submission.
 *   3. Grading and evaluation: the sentence error taxonomy, the email /
 *      discussion four-criterion educational estimates, and the repetition
 *      analysis (word-level accuracy, pacing verdicts).
 *   4. Performance reports: focus profiles, criteria trends, repetition
 *      accuracy by tier, recommendations.
 *   5. Pathway: library steps resolve to the library route with real slugs.
 *   6. API: listing, detail, draft roundtrip and submit endpoints (auth-gated;
 *      teaching kit and transcripts revealed on submit only).
 */

import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import { FakeLlmProvider } from "@/lib/llm/testing";
import { setLlmProviderOverride } from "@/lib/llm";
import {
  TOEFL_WRITING_BANK,
  validateToeflWritingBank,
  writingExerciseBySlug,
  type ToeflSentenceExercise,
  type ToeflEmailTask,
  type ToeflDiscussionTask,
} from "@/data/exams/toefl/writing-bank";
import {
  TOEFL_SPEAKING_BANK,
  validateToeflSpeakingBank,
  speakingExerciseBySlug,
  type ToeflRepeatItem,
  type ToeflInterviewItem,
} from "@/data/exams/toefl/speaking-bank";
import { toeflPathway } from "@/data/exams/toefl/pathway";
import { hrefForStep } from "@/lib/exams/pathways";
import {
  toSafeWritingExercise,
  gradeSentenceExercise,
  type SentenceSubmission,
} from "@/lib/exams/toefl-bank/writing";
import { evaluateWritingResponse } from "@/lib/exams/toefl-bank/writing-evaluate";
import { toSafeSpeakingExercise } from "@/lib/exams/toefl-bank/speaking";
import { analyzeRepetition } from "@/lib/exams/toefl-bank/speaking-evaluate";
import {
  buildWritingPerformanceReport,
  buildSpeakingPerformanceReport,
} from "@/lib/exams/toefl-bank/ws-performance";

// Deterministic AI layer for the whole suite: every evaluation gets a valid
// coaching commentary, instantly, with no network access (platform seam).
const AI_COACHING_REPLY = JSON.stringify({
  summary: "Your response states its purpose early and covers the key points clearly. The register suits the recipient well. The highest-value lift is separating the main points into short paragraphs so none gets lost.",
  strengths: ["The opening states the purpose directly.", "The closing is polite and complete."],
  weaknesses: ["One key point is buried inside a long sentence.", "The supporting reason arrives late."],
  errors: [{ original: "I am writing about the essay due next Friday", correction: "I am writing about the essay that is due next Friday", note: "A relative clause clarifies which essay." }],
  improvements: ["Split the main points into separate paragraphs.", "Name the module in the first line.", "Close with one specific request."],
  improvedExample: "Dear Professor Alvarado,\n\nI am writing about the essay due next Friday for your module. Could you confirm whether the portal closes at noon or at 23:59 that day? I would also be grateful to know how the late penalty is applied.",
});

beforeAll(() => {
  setLlmProviderOverride(new FakeLlmProvider({ reply: AI_COACHING_REPLY }));
});
afterAll(() => {
  setLlmProviderOverride(null);
});

// ---------------------------------------------------------------------------
// 1. Volume and distribution
// ---------------------------------------------------------------------------

describe("TOEFL writing & speaking library — volume and distribution (PROMPT 50)", () => {
  it("passes the full writing bank validator (200 exercises)", () => {
    expect(validateToeflWritingBank(TOEFL_WRITING_BANK)).toEqual([]);
    expect(TOEFL_WRITING_BANK).toHaveLength(200);
    const byType = TOEFL_WRITING_BANK.reduce<Record<string, number>>((acc, ex) => {
      acc[ex.taskType] = (acc[ex.taskType] ?? 0) + 1;
      return acc;
    }, {});
    expect(byType["build-sentence"]).toBe(100);
    expect(byType["write-email"]).toBe(60);
    expect(byType["academic-discussion"]).toBe(40);
  });

  it("carries exactly 20 sentence exercises per focus across all tiers", () => {
    const focuses = ["word-order", "grammar", "clause-structure", "completeness", "punctuation"] as const;
    for (const focus of focuses) {
      const list = TOEFL_WRITING_BANK.filter((ex) => ex.taskType === "build-sentence" && ex.focus === focus);
      expect(list).toHaveLength(20);
      const tiers = new Set(list.map((e) => e.difficulty));
      expect(tiers.size).toBe(5);
    }
  });

  it("carries 10 emails per purpose and 5 difficulty tiers overall", () => {
    const purposes = ["enquiry", "request", "explanation", "scheduling", "problem", "suggestion"] as const;
    for (const purpose of purposes) {
      const list = TOEFL_WRITING_BANK.filter((ex) => ex.taskType === "write-email" && ex.purpose === purpose);
      expect(list).toHaveLength(10);
      expect(new Set(list.map((e) => e.difficulty)).size).toBeGreaterThanOrEqual(4);
    }
    const emailTiers = new Set(TOEFL_WRITING_BANK.filter((e) => e.taskType === "write-email").map((e) => e.difficulty));
    expect(emailTiers.size).toBe(5);
    const discTiers = new Set(TOEFL_WRITING_BANK.filter((e) => e.taskType === "academic-discussion").map((e) => e.difficulty));
    expect(discTiers.size).toBe(5);
  });

  it("every writing exercise carries the nine mandated teaching fields with real depth", () => {
    const failures: string[] = [];
    for (const ex of TOEFL_WRITING_BANK) {
      if (ex.instructions.split(/\s+/).length < 15) failures.push(`${ex.slug}: instructions`);
      if (ex.taskRequirements.length < 3) failures.push(`${ex.slug}: requirements`);
      if (!ex.timeGuidance) failures.push(`${ex.slug}: time guidance`);
      if (ex.modelResponse.split(/\s+/).length < 30) failures.push(`${ex.slug}: model response`);
      if (ex.responseAnalysis.split(/\s+/).length < 30) failures.push(`${ex.slug}: analysis`);
      if (ex.usefulExpressions.length < 3) failures.push(`${ex.slug}: expressions`);
      if (ex.grammarObservations.length < 2) failures.push(`${ex.slug}: grammar`);
      if (ex.commonMistakes.length < 2) failures.push(`${ex.slug}: mistakes`);
      if (ex.independentAssignment.split(/\s+/).length < 15) failures.push(`${ex.slug}: assignment`);
    }
    expect(failures).toEqual([]);
  });

  it("passes the full speaking bank validator (100 items)", () => {
    expect(validateToeflSpeakingBank(TOEFL_SPEAKING_BANK)).toEqual([]);
    expect(TOEFL_SPEAKING_BANK).toHaveLength(100);
    const repeat = TOEFL_SPEAKING_BANK.filter((i) => i.taskType === "listen-repeat");
    const interview = TOEFL_SPEAKING_BANK.filter((i) => i.taskType === "take-interview");
    expect(repeat).toHaveLength(50);
    expect(interview).toHaveLength(50);
    expect(new Set(repeat.map((i) => i.difficulty)).size).toBe(5);
    expect(new Set(interview.map((i) => i.difficulty)).size).toBe(5);
  });

  it("repeat items have accurate transcripts, matching windows and progressive length", () => {
    for (const item of TOEFL_SPEAKING_BANK.filter((i): i is ToeflRepeatItem => i.taskType === "listen-repeat")) {
      expect(item.transcript).toBe(item.sentence);
      const words = item.sentence.split(/\s+/).length;
      expect(item.wordCount).toBe(words);
      const expectedWindow = words <= 8 ? 8 : words <= 14 ? 10 : 12;
      expect(item.windowSec).toBe(expectedWindow);
      if (item.difficulty === 1) expect(item.learningMode).toBe(true);
      else expect(item.learningMode ?? false).toBe(false);
    }
    const d1 = TOEFL_SPEAKING_BANK.filter((i): i is ToeflRepeatItem => i.taskType === "listen-repeat" && i.difficulty === 1);
    const d5 = TOEFL_SPEAKING_BANK.filter((i): i is ToeflRepeatItem => i.taskType === "listen-repeat" && i.difficulty === 5);
    const avg = (list: typeof d1) => list.reduce((a, b) => a + b.wordCount, 0) / list.length;
    expect(avg(d5)).toBeGreaterThan(avg(d1) + 5);
  });

  it("interview items carry sample responses, vocabulary and time guidance", () => {
    for (const item of TOEFL_SPEAKING_BANK.filter((i): i is ToeflInterviewItem => i.taskType === "take-interview")) {
      expect(item.question.endsWith("?")).toBe(true);
      expect(item.sampleResponse.split(/\s+/).length).toBeGreaterThanOrEqual(60);
      expect(item.vocabulary.length).toBeGreaterThanOrEqual(5);
      expect(item.prepSec).toBeGreaterThanOrEqual(15);
      expect(item.answerSec).toBeGreaterThanOrEqual(25);
      expect(item.analysisNotes.split(/\s+/).length).toBeGreaterThanOrEqual(25);
    }
    const topics = new Set(TOEFL_SPEAKING_BANK.filter((i): i is ToeflInterviewItem => i.taskType === "take-interview").map((i) => i.topic.toLowerCase()));
    expect(topics.size).toBeGreaterThanOrEqual(15);
  });
});

// ---------------------------------------------------------------------------
// 2. Safe projections
// ---------------------------------------------------------------------------

describe("TOEFL writing & speaking library — safe projections", () => {
  it("strips sentence answers, models and kits from Build a Sentence", () => {
    const ex = writingExerciseBySlug("toefl-wb-sent-01") as ToeflSentenceExercise;
    const safe = toSafeWritingExercise(ex);
    expect(safe.taskType).toBe("build-sentence");
    const raw = JSON.stringify(safe);
    for (const item of ex.items) {
      expect(raw).not.toContain(item.answer);
      if (item.source) expect(raw).not.toContain(item.source);
    }
    expect(raw).not.toContain(ex.modelResponse);
    expect(raw).not.toContain(ex.responseAnalysis);
    expect(raw).not.toContain(ex.independentAssignment);
    expect((safe as { items: unknown[] }).items).toHaveLength(ex.items.length);
  });

  it("strips model responses and kits from email and discussion tasks", () => {
    const email = writingExerciseBySlug("toefl-wb-email-01") as ToeflEmailTask;
    const emailSafe = toSafeWritingExercise(email);
    expect(emailSafe.taskType).toBe("write-email");
    expect(JSON.stringify(emailSafe)).not.toContain(email.modelResponse);
    expect(JSON.stringify(emailSafe)).toContain(email.scenario.slice(0, 20));

    const disc = writingExerciseBySlug("toefl-wb-disc-01") as ToeflDiscussionTask;
    const discSafe = toSafeWritingExercise(disc);
    expect(discSafe.taskType).toBe("academic-discussion");
    expect(JSON.stringify(discSafe)).not.toContain(disc.modelResponse);
    expect(JSON.stringify(discSafe)).toContain(disc.professorPrompt.slice(0, 20));
  });

  it("locks repeat transcripts above d1 and interview sample responses", () => {
    const locked = speakingExerciseBySlug("toefl-sb-rep-20") as ToeflRepeatItem;
    const lockedSafe = toSafeSpeakingExercise(locked);
    expect(lockedSafe.taskType).toBe("listen-repeat");
    expect((lockedSafe as { transcript: string | null }).transcript).toBeNull();
    expect(lockedSafe).toHaveProperty("sentence"); // the audio definition ships

    const open = speakingExerciseBySlug("toefl-sb-rep-01") as ToeflRepeatItem;
    const openSafe = toSafeSpeakingExercise(open);
    expect((openSafe as { transcript: string | null }).transcript).toBe(open.transcript);

    const interview = speakingExerciseBySlug("toefl-sb-int-01") as ToeflInterviewItem;
    const interviewSafe = toSafeSpeakingExercise(interview);
    expect(interviewSafe.taskType).toBe("take-interview");
    expect(JSON.stringify(interviewSafe)).not.toContain(interview.sampleResponse);
    expect(JSON.stringify(interviewSafe)).not.toContain(interview.analysisNotes);
    expect(JSON.stringify(interviewSafe)).toContain(interview.question);
  });
});

// ---------------------------------------------------------------------------
// 3. Grading and evaluation
// ---------------------------------------------------------------------------

/** Segment order that reproduces the keyed answer. */
function correctOrder(segments: string[], answer: string): number[] {
  return segments
    .map((s, i) => ({ s, i }))
    .sort((a, b) => answer.toLowerCase().indexOf(a.s.toLowerCase()) - answer.toLowerCase().indexOf(b.s.toLowerCase()))
    .map((x) => x.i);
}

describe("TOEFL writing & speaking library — grading and evaluation", () => {
  it("grades Build a Sentence: reorder, word-order errors, missed items", () => {
    const ex = writingExerciseBySlug("toefl-wb-sent-01") as ToeflSentenceExercise;
    const answers: Record<string, string | number[]> = {};
    const firstText = ex.items.findIndex((it) => it.kind !== "reorder");
    ex.items.forEach((it, idx) => {
      if (it.kind === "reorder" && it.segments) {
        answers[String(it.no)] = idx === 0 ? [...correctOrder(it.segments, it.answer)].reverse() : idx === 1 ? [] : correctOrder(it.segments, it.answer);
      } else {
        answers[String(it.no)] = idx === firstText ? "" : it.answer;
      }
    });
    const graded = gradeSentenceExercise(ex, { mode: "practice", answers, timeSpentSec: 120 });
    expect(graded.totalItems).toBe(ex.items.length);
    expect(graded.correctItems).toBe(ex.items.length - 2);
    expect(graded.items[0].errorType).toBe("word-order");
    expect(graded.items[1].errorType).toBe("missed");
    expect(graded.focusCounts[ex.focus].total).toBe(ex.items.length);
    expect(graded.focusCounts[ex.focus].correct).toBe(ex.items.length - 2);
  });

  it("grades punctuate items on the marks themselves", () => {
    const punct = TOEFL_WRITING_BANK.find(
      (ex): ex is ToeflSentenceExercise => ex.taskType === "build-sentence" && ex.focus === "punctuation",
    )!;
    const item = punct.items.find((it) => it.kind === "punctuate")!;
    const stripped = item.answer.replace(/[.,;:!?']/g, "").replace(/\s+/g, " ").trim();
    const answers: Record<string, string | number[]> = { [String(item.no)]: stripped };
    const graded = gradeSentenceExercise(punct, { mode: "practice", answers, timeSpentSec: 30 });
    const result = graded.items.find((i) => i.no === item.no)!;
    expect(result.correct).toBe(false);
    expect(result.errorType).toBe("punctuation");
  });

  it("evaluates an email: the model response scores complete with high coverage", async () => {
    const email = writingExerciseBySlug("toefl-wb-email-01") as ToeflEmailTask;
    const evaluation = await evaluateWritingResponse(email, email.modelResponse);
    expect(evaluation.status).toBe("complete");
    expect(evaluation.criteria).toHaveLength(4);
    expect(evaluation.overall).toBeGreaterThanOrEqual(3.5);
    expect(evaluation.overallLabel).toContain("educational estimate");
    expect(evaluation.disclaimers.length).toBeGreaterThan(0);
    expect(evaluation.metrics.coveredKeyPoints).toBeGreaterThanOrEqual(2);
    expect(evaluation.aiAvailable).toBe(true);
    expect(evaluation.aiCommentary?.improvedExample ?? "").toContain("Dear Professor");
  });

  it("evaluates a too-short response as insufficient, never a score", async () => {
    const disc = writingExerciseBySlug("toefl-wb-disc-01") as ToeflDiscussionTask;
    const evaluation = await evaluateWritingResponse(disc, "I agree with the previous post entirely.");
    expect(evaluation.status).toBe("insufficient");
    expect(evaluation.overall).toBe(0);
    expect(evaluation.criteria).toEqual([]);
  });

  it("analyses repetition: perfect, imperfect and over-window takes", () => {
    const reference = "The library closes at midnight during the final examination week.";
    const perfect = analyzeRepetition(reference, reference, 6, 10);
    expect(perfect.accuracy).toBe(1);
    expect(perfect.matched).toBe(perfect.referenceWords);
    expect(perfect.verdict).toBe("test-ready");

    const dropped = analyzeRepetition(reference, "The library closes at midnight during the week.", 6, 10);
    expect(dropped.accuracy).toBeLessThan(1);
    expect(dropped.accuracy).toBeGreaterThanOrEqual(0.6);
    expect(dropped.problemWords.length).toBeGreaterThan(0);
    expect(dropped.verdict).not.toBe("test-ready");

    const slow = analyzeRepetition(reference, reference, 14, 10);
    expect(slow.withinWindow).toBe(false);
    expect(slow.verdict).not.toBe("test-ready");
  });

  it("analyses word-order slips in repetition via the LCS alignment", () => {
    const reference = "Bring a pencil, an eraser, and your student card.";
    const scrambled = analyzeRepetition(reference, "Bring an eraser, a pencil, and your student card.", 5, 8);
    expect(scrambled.accuracy).toBeLessThan(1);
    expect(scrambled.longestRun).toBeLessThan(scrambled.referenceWords);
  });
});

// ---------------------------------------------------------------------------
// 4. Performance reports
// ---------------------------------------------------------------------------

describe("TOEFL writing & speaking library — performance reports", () => {
  it("aggregates writing focus tallies and criteria trends", () => {
    const rows = [
      {
        id: "w1", exerciseSlug: "toefl-wb-sent-01", taskType: "build-sentence", difficulty: 1, mode: "practice",
        totalQuestions: 5, correctCount: 3,
        focusCounts: JSON.stringify({ "word-order": { total: 5, correct: 3 } }),
        errorCounts: JSON.stringify({ correct: 3, "word-order": 2 }),
        measured: "{}", overall: 0, criteria: "[]", timeSpentSec: 100, createdAt: new Date("2026-11-01T10:00:00Z"),
      },
      {
        id: "w2", exerciseSlug: "toefl-wb-email-01", taskType: "write-email", difficulty: 1, mode: "practice",
        totalQuestions: 0, correctCount: 0, focusCounts: "{}", errorCounts: "{}",
        measured: "{}", overall: 4.5,
        criteria: JSON.stringify([
          { key: "task", name: "Task response", score: 4.5 },
          { key: "organization", name: "Organization & development", score: 4.0 },
          { key: "accuracy", name: "Language accuracy", score: 5.0 },
          { key: "lexis", name: "Lexical range", score: 4.5 },
        ]),
        timeSpentSec: 500, createdAt: new Date("2026-11-02T10:00:00Z"),
      },
    ];
    const report = buildWritingPerformanceReport(rows as never);
    expect(report.attempts).toBe(2);
    expect(report.sentenceAttempts).toBe(1);
    expect(report.evaluatedAttempts).toBe(1);
    expect(report.accuracy).toBe(0.6);
    const wordOrder = report.focusProfile.find((f) => f.focus === "word-order")!;
    expect(wordOrder.total).toBe(5);
    expect(wordOrder.correct).toBe(3);
    expect(report.criteriaTrend).toHaveLength(4);
    expect(report.evaluatedOverall.mean).toBeCloseTo(4.5);
    expect(report.recommendations.length).toBeGreaterThan(0);
  });

  it("aggregates speaking repetition accuracy and interview criteria", () => {
    const rows = [
      {
        id: "s1", itemSlug: "toefl-sb-rep-01", kind: "listen-repeat", topic: "time-markers", difficulty: 1, mode: "practice",
        wordCount: 8, durationSec: 6, measured: JSON.stringify({ accuracy: 1, withinWindow: true }),
        overall: 1, criteria: "[]", timeSpentSec: 6, createdAt: new Date("2026-11-01T10:00:00Z"),
      },
      {
        id: "s2", itemSlug: "toefl-sb-rep-20", kind: "listen-repeat", topic: "time-markers", difficulty: 3, mode: "practice",
        wordCount: 12, durationSec: 12, measured: JSON.stringify({ accuracy: 0.75, withinWindow: false }),
        overall: 0.75, criteria: "[]", timeSpentSec: 12, createdAt: new Date("2026-11-02T10:00:00Z"),
      },
      {
        id: "s3", itemSlug: "toefl-sb-int-01", kind: "take-interview", topic: "Study plans", difficulty: 1, mode: "practice",
        wordCount: 90, durationSec: 45, measured: "{}", overall: 4,
        criteria: JSON.stringify([{ key: "response", name: "Answer & relevance", score: 4 }]),
        timeSpentSec: 45, createdAt: new Date("2026-11-03T10:00:00Z"),
      },
    ];
    const report = buildSpeakingPerformanceReport(rows as never);
    expect(report.attempts).toBe(3);
    expect(report.repeatAttempts).toBe(2);
    expect(report.interviewAttempts).toBe(1);
    expect(report.repeatMeanAccuracy).toBeCloseTo(0.875);
    expect(report.repeatWithinWindowRate).toBe(0.5);
    expect(report.byTier.find((t) => t.tier === 3)!.meanAccuracy).toBeCloseTo(0.75);
    expect(report.criteriaTrend[0].name).toBe("Answer & relevance");
  });
});

// ---------------------------------------------------------------------------
// 5. Pathway integration
// ---------------------------------------------------------------------------

describe("TOEFL writing & speaking library — pathway integration", () => {
  it("resolves library steps to the library route", () => {
    expect(hrefForStep("library", null)).toBe("#/exams/toefl/library");
    expect(hrefForStep("library", "toefl-wb-sent-01")).toBe("#/exams/toefl/library/toefl-wb-sent-01");
    expect(hrefForStep("library", "toefl-sb-rep-01")).toBe("#/exams/toefl/library/toefl-sb-rep-01");
  });

  it("every library refId in the TOEFL pathway exists in the live banks", async () => {
    const librarySteps = toeflPathway.modules.flatMap((m) => m.steps.filter((s) => s.refType === "library"));
    expect(librarySteps.length).toBeGreaterThanOrEqual(10);
    const { readingExerciseBySlug } = await import("@/data/exams/toefl/reading-bank");
    const { listeningExerciseBySlug } = await import("@/data/exams/toefl/listening-bank");
    const dangling = librarySteps.filter(
      (s) =>
        !writingExerciseBySlug(s.refId ?? "") &&
        !speakingExerciseBySlug(s.refId ?? "") &&
        !readingExerciseBySlug(s.refId ?? "") &&
        !listeningExerciseBySlug(s.refId ?? ""),
    );
    expect(dangling.map((d) => d.label)).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// 6. API routes
// ---------------------------------------------------------------------------

describe("TOEFL writing & speaking library — API", () => {
  it("lists the public writing index without model responses", async () => {
    const { GET } = await import("@/app/api/exams/toefl/writing/bank/route");
    const res = await GET(new Request("http://127.0.0.1:3000/x"));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.total).toBe(200);
    const raw = JSON.stringify(data.exercises);
    expect(raw).not.toContain("Dear");
    const filtered = await GET(new Request("http://127.0.0.1:3000/x?task=write-email&purpose=enquiry"));
    const fdata = await filtered.json();
    expect(fdata.total).toBe(10);
  });

  it("serves a safe writing detail and rejects anonymous submission", async () => {
    const { GET } = await import("@/app/api/exams/toefl/writing/bank/[slug]/route");
    const detail = await GET(new Request("http://127.0.0.1:3000/x"), { params: Promise.resolve({ slug: "toefl-wb-sent-01" }) });
    expect(detail.status).toBe(200);
    const dj = await detail.json();
    expect(JSON.stringify(dj.exercise)).not.toContain("The registrar posts");

    const { POST } = await import("@/app/api/exams/toefl/writing/bank/[slug]/submit/route");
    const anon = await POST(new Request("http://127.0.0.1:3000/x", { method: "POST", body: "{}", headers: { "content-type": "application/json" } }), { params: Promise.resolve({ slug: "toefl-wb-sent-01" }) });
    expect(anon.status).toBe(401);
  });

  it("grades a sentence submission, reveals the kit and records the attempt", async () => {
    const { POST: registerRoute } = await import("@/app/api/auth/register/route");
    const email = `toefl-ws-${Date.now()}-${Math.floor(Math.random() * 10000)}@talksy.test`;
    const reg = await registerRoute(new Request("http://127.0.0.1:3000/api/auth/register", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, name: "WS Test", password: "password123" }) }));
    expect(reg.status).toBe(201);
    const cookie = reg.headers.getSetCookie?.().map((c) => c.split(";")[0]).join("; ") ?? "";

    const ex = writingExerciseBySlug("toefl-wb-sent-01") as ToeflSentenceExercise;
    const answers: Record<string, string | number[]> = {};
    for (const it of ex.items) {
      answers[String(it.no)] = it.kind === "reorder" && it.segments ? correctOrder(it.segments, it.answer) : it.answer;
    }
    const { POST: submit } = await import("@/app/api/exams/toefl/writing/bank/[slug]/submit/route");
    const res = await submit(
      new Request("http://127.0.0.1:3000/x", { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ mode: "practice", answers, timeSpentSec: 180 }) }),
      { params: Promise.resolve({ slug: "toefl-wb-sent-01" }) },
    );
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.result.correctItems).toBe(data.result.totalItems);
    expect(data.kit.modelResponse.length).toBeGreaterThan(0);
    expect(data.kit.independentAssignment.length).toBeGreaterThan(0);

    const { GET: performance } = await import("@/app/api/exams/toefl/writing/performance/route");
    const perf = await performance(new Request("http://127.0.0.1:3000/x", { headers: { cookie } }));
    expect(perf.status).toBe(200);
    const perfJson = await perf.json();
    expect(perfJson.report.attempts).toBe(1);
    expect(perfJson.report.sentenceAttempts).toBe(1);
    expect(perfJson.report.focusProfile.find((f: { focus: string }) => f.focus === "word-order").total).toBe(ex.items.length);
  });

  it("round-trips an email draft and evaluates the submitted email", async () => {
    const { POST: registerRoute } = await import("@/app/api/auth/register/route");
    const email = `toefl-ws-d-${Date.now()}-${Math.floor(Math.random() * 10000)}@talksy.test`;
    const reg = await registerRoute(new Request("http://127.0.0.1:3000/api/auth/register", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, name: "WS Draft", password: "password123" }) }));
    const cookie = reg.headers.getSetCookie?.().map((c) => c.split(";")[0]).join("; ") ?? "";

    const { PUT, GET, DELETE } = await import("@/app/api/exams/toefl/writing/bank/[slug]/draft/route");
    const ctx = { params: Promise.resolve({ slug: "toefl-wb-email-01" }) };
    const put = await PUT(new Request("http://127.0.0.1:3000/x", { method: "PUT", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ content: "Dear Professor Alvarado, I am writing about" }) }), ctx);
    expect(put.status).toBe(200);
    const got = await GET(new Request("http://127.0.0.1:3000/x", { headers: { cookie } }), ctx);
    const gj = await got.json();
    expect(gj.draft.content).toContain("Dear Professor Alvarado");
    expect(gj.draft.wordCount).toBeGreaterThan(3);
    const del = await DELETE(new Request("http://127.0.0.1:3000/x", { method: "DELETE", headers: { cookie } }), ctx);
    expect(del.status).toBe(200);

    const task = writingExerciseBySlug("toefl-wb-email-01") as ToeflEmailTask;
    const { POST: submit } = await import("@/app/api/exams/toefl/writing/bank/[slug]/submit/route");
    const res = await submit(
      new Request("http://127.0.0.1:3000/x", { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ mode: "practice", response: task.modelResponse, timeSpentSec: 480 }) }),
      { params: Promise.resolve({ slug: "toefl-wb-email-01" }) },
    );
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.evaluation.status).toBe("complete");
    expect(data.evaluation.criteria).toHaveLength(4);
    expect(data.evaluation.disclaimers.join(" ")).toContain("educational estimates");
    expect(data.kit.modelResponse).toBe(task.modelResponse);
  });

  it("lists the public speaking index without sample responses", async () => {
    const { GET } = await import("@/app/api/exams/toefl/speaking/bank/route");
    const res = await GET(new Request("http://127.0.0.1:3000/x"));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.total).toBe(100);
    const interviewSample = speakingExerciseBySlug("toefl-sb-int-01") as ToeflInterviewItem;
    expect(JSON.stringify(data.exercises)).not.toContain(interviewSample.sampleResponse.slice(0, 30));
    const filtered = await GET(new Request("http://127.0.0.1:3000/x?task=listen-repeat&focus=numbers"));
    const fdata = await filtered.json();
    expect(fdata.exercises.every((e: { focus?: string }) => e.focus === "numbers")).toBe(true);
  });

  it("analyses a repeat submission and reveals the transcript; evaluates an interview answer", async () => {
    const { POST: registerRoute } = await import("@/app/api/auth/register/route");
    const email = `toefl-sb-${Date.now()}-${Math.floor(Math.random() * 10000)}@talksy.test`;
    const reg = await registerRoute(new Request("http://127.0.0.1:3000/api/auth/register", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, name: "SB Test", password: "password123" }) }));
    const cookie = reg.headers.getSetCookie?.().map((c) => c.split(";")[0]).join("; ") ?? "";

    const repeat = speakingExerciseBySlug("toefl-sb-rep-20") as ToeflRepeatItem;
    const { POST: submit } = await import("@/app/api/exams/toefl/speaking/bank/[slug]/submit/route");
    const rres = await submit(
      new Request("http://127.0.0.1:3000/x", { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ mode: "practice", transcript: repeat.sentence, durationSec: Math.min(repeat.windowSec, 6) }) }),
      { params: Promise.resolve({ slug: repeat.slug }) },
    );
    expect(rres.status).toBe(200);
    const rdata = await rres.json();
    expect(rdata.analysis.accuracy).toBeGreaterThan(0.9);
    expect(rdata.review.transcript).toBe(repeat.transcript);
    expect(rdata.review.analysisHints.length).toBeGreaterThanOrEqual(2);

    const interview = speakingExerciseBySlug("toefl-sb-int-01") as ToeflInterviewItem;
    const ires = await submit(
      new Request("http://127.0.0.1:3000/x", { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ mode: "practice", transcript: interview.sampleResponse, durationSec: 40 }) }),
      { params: Promise.resolve({ slug: interview.slug }) },
    );
    expect(ires.status).toBe(200);
    const idata = await ires.json();
    expect(idata.evaluation.status).toBe("complete");
    expect(idata.evaluation.criteria).toHaveLength(4);
    expect(idata.evaluation.disclaimers.join(" ")).toContain("educational estimate");
    expect(idata.review.sampleResponse).toBe(interview.sampleResponse);

    const { GET: performance } = await import("@/app/api/exams/toefl/speaking/performance/route");
    const perf = await performance(new Request("http://127.0.0.1:3000/x", { headers: { cookie } }));
    expect(perf.status).toBe(200);
    const perfJson = await perf.json();
    expect(perfJson.report.attempts).toBe(2);
    expect(perfJson.report.repeatAttempts).toBe(1);
    expect(perfJson.report.interviewAttempts).toBe(1);
    expect(perfJson.report.recommendations.length).toBeGreaterThan(0);
  });
});
