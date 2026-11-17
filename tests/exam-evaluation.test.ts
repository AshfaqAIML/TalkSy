/// <reference types="bun-types" />
/**
 * AI-assisted writing & speaking evaluation system tests.
 *
 * Covers the full contract:
 *   - task resolution (exam type + section + task + rubric before ANY
 *     evaluation — the ten evaluator profiles, correct criterion naming,
 *     non-evaluable types rejected);
 *   - the deterministic layer (verified facts + rule-based heuristics);
 *   - the engine's hard rules: no score without an explanation, evidence
 *     quotes must exist in the response, scores clamped to the task scale,
 *     AI failure degrades to a checks-only partial report, too-short
 *     responses refuse to estimate;
 *   - the safeguard copy: never an official score, accents never errors,
 *     limitations stated honestly;
 *   - the learning loop: weaknesses mapped to existing EnglishPath lessons,
 *     revision guidance, improvement tracking;
 *   - persistence: create → revise → chain → comparison, plus ownership
 *     and non-evaluable question refusals.
 */

import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import { db } from "@/lib/db";
import { setLlmProviderOverride, type LlmProvider, type LlmRequest } from "@/lib/llm";
import {
  EVALUATION_ELIGIBLE_TYPES,
  EVALUATOR_KEYS,
  EVALUATOR_PROFILES,
  isEvaluationEligibleType,
  resolveEvaluator,
} from "@/lib/exams/evaluation/tasks";
import { runDeterministicAnalysis } from "@/lib/exams/evaluation/checks";
import {
  analyzePace,
  analyzePunctuation,
  analyzeRepetition,
  analyzeSentenceStructure,
  hesitationMarkers,
} from "@/lib/exams/evaluation/analysis";
import { buildEvaluationPrompt } from "@/lib/exams/evaluation/prompts";
import { evaluateResponse } from "@/lib/exams/evaluation/engine";
import {
  buildRevisionExercise,
  buildWeaknesses,
  compareEvaluations,
  lessonRefsFor,
} from "@/lib/exams/evaluation/learning-loop";
import {
  createEvaluation,
  evaluationOverview,
  getEvaluationChain,
  listEvaluations,
  reviewEvaluation,
  reviseEvaluation,
} from "@/lib/exams/evaluation/service";
import {
  EVALUATION_ACCENT_NOTE,
  EVALUATION_HUMAN_REVIEW_NOTE,
  EVALUATION_SCORE_DISCLAIMER,
  PROVENANCE_LEGEND,
} from "@/lib/exams/evaluation/types";

// ---------------------------------------------------------------------------
// Shared fixture text
// ---------------------------------------------------------------------------

const GOOD_LETTER = `Dear Sir or Madam,

I am writing to complain about the heating system in my flat at 12 Rosewood Lane. Since the beginning of last month the radiators have produced no warmth at all, which is a serious problem in winter.

The broken heating affects my family in several ways. My daughter's bedroom gets so cold that she has caught two colds this month, and we now use the living room as the only warm space. I have also had to buy two electric heaters, which is expensive.

I would therefore like to request that you send an engineer to repair the system before the end of next week. I am available any weekday afternoon, and I can be at the flat to let the engineer in if you tell me the day in advance.

I look forward to your prompt reply and a quick solution to this problem.

Yours faithfully,
Anna Kowalski`;

const WEAK_LETTER = "The heating is broken. Please fix it soon. It is very cold every night and my children cannot sleep well.";

const GT_EMAIL_PAYLOAD = {
  situation: "Write to your landlord about a broken heating system.",
  bullets: [
    "describe the problem with the heating",
    "explain how it affects your family",
    "request a repair by the end of next week",
  ],
  tone: "formal",
  minWords: 150,
  suggestedMinutes: 20,
  rubricKey: "ielts.writing",
  part: "GT Task 1 — formal complaint",
};

// ---------------------------------------------------------------------------
// Fake evaluator provider: extracts the response from the prompt and quotes
// its first sentence, so evidence-in-response rules are testable.
// ---------------------------------------------------------------------------

function responseFromPrompt(req: LlmRequest): string {
  const last = req.messages[req.messages.length - 1]?.content ?? "";
  const match = last.match(/"""\n([\s\S]*?)\n"""/);
  return match ? match[1] : "";
}

function firstSentence(text: string): string {
  return (text.split(/(?<=[.!?])\s/)[0] ?? text).trim();
}

const fakeEvaluator: LlmProvider = {
  name: "fake-evaluator",
  complete: async (req) => {
    const response = responseFromPrompt(req);
    const quote = firstSentence(response);
    return JSON.stringify({
      overall: { score: 6.4, explanation: "The response addresses the task with mostly controlled language." },
      criteria: [
        {
          key: "task-achievement",
          score: 6.2,
          explanation: "All three bullet points are addressed clearly.",
          evidence: [
            { quote, note: "The purpose is stated up front." },
            { quote: "THIS QUOTE IS NOT IN THE RESPONSE AT ALL", note: "bogus evidence" },
          ],
        },
        { key: "coherence-cohesion", score: 7.4, explanation: "Clear paragraphing and sensible progression." },
        { key: "lexical-resource", score: 12, explanation: "Wide, precise vocabulary for the topic." },
        { key: "grammatical-range", score: 5.0, explanation: "" },
      ],
      grammarCorrections: [
        { original: quote.slice(0, 20), corrected: `${quote.slice(0, 20)} (fixed)`, explanation: "A test correction." },
      ],
      vocabulary: [{ original: "cold", suggestion: "freezing", reason: "Stronger collocation for complaints." }],
      sentenceFeedback: [
        { quote, comment: "Clear, purposeful opening.", kind: "strength" },
        { quote: "NOT PRESENT EITHER", comment: "bogus", kind: "issue" },
      ],
      missingRequirements: ["A clearer deadline for the repair."],
      organisation: [{ issue: "The second paragraph is thin.", suggestion: "Add one concrete example." }],
      recommendations: ["Practise one formal complaint letter per week."],
      developmentSuggestions: ["Extend the final request with a consequence."],
      pronunciation: [{ aspect: "Word stress", note: "Check the stress on 'engineer'." }],
      irrelevantContent: [
        { quote, note: "This sentence drifts from the task focus." },
        { quote: "OFF-TOPIC QUOTE THAT NEVER EXISTED", note: "bogus" },
      ],
      modelResponse: {
        text: "Dear Sir or Madam, I am writing to complain about the heating system in my flat, which has produced no warmth since the beginning of last month. This has affected my family seriously: my daughter has caught two colds and we have bought expensive electric heaters. I would therefore like to request a repair by the end of next week, and I am available any weekday afternoon. I look forward to your prompt reply. Yours faithfully, A. Kowalski",
        note: "Notice the purpose-first opening and the one-paragraph-per-bullet structure.",
      },
    });
  },
  stream: async function* () {
    yield "{}";
  },
};

const throwingProvider: LlmProvider = {
  name: "throwing",
  complete: async () => {
    throw new Error("provider unavailable");
  },
  stream: async function* () {
    throw new Error("provider unavailable");
  },
};

// ---------------------------------------------------------------------------
// Pure: task resolution
// ---------------------------------------------------------------------------

describe("evaluator task resolution (know the exam, section, task, rubric first)", () => {
  it("registers exactly the ten supported evaluator profiles", () => {
    expect(EVALUATOR_KEYS).toHaveLength(10);
    for (const key of EVALUATOR_KEYS) {
      expect(EVALUATOR_PROFILES[key].key).toBe(key);
    }
  });

  it("resolves every IELTS writing/speaking task shape", () => {
    expect(
      resolveEvaluator({
        examKey: "IELTS",
        variant: "ACADEMIC",
        section: "writing",
        questionType: "WRITING_TASK",
        payload: { prompt: "Describe the table.", part: "Task 1 — describing a table", minWords: 150, rubricKey: "ielts.writing" },
      })?.profile.key,
    ).toBe("IELTS_WRITING_ACADEMIC_T1");

    expect(
      resolveEvaluator({
        examKey: "IELTS",
        variant: "ACADEMIC",
        section: "writing",
        questionType: "WRITING_TASK",
        payload: { prompt: "Discuss both views.", part: "Task 2 — discursive essay", minWords: 250, rubricKey: "ielts.writing" },
      })?.profile.key,
    ).toBe("IELTS_WRITING_ACADEMIC_T2");

    expect(
      resolveEvaluator({
        examKey: "IELTS",
        variant: "GENERAL_TRAINING",
        section: "writing",
        questionType: "EMAIL_WRITING",
        payload: GT_EMAIL_PAYLOAD,
      })?.profile.key,
    ).toBe("IELTS_WRITING_GT_T1");

    expect(
      resolveEvaluator({
        examKey: "IELTS",
        variant: "GENERAL_TRAINING",
        section: "writing",
        questionType: "WRITING_TASK",
        payload: { prompt: "Advantages of city life?", part: "Task 2 — advantages/disadvantages essay", minWords: 250 },
      })?.profile.key,
    ).toBe("IELTS_WRITING_GT_T2");

    expect(
      resolveEvaluator({
        examKey: "IELTS",
        variant: "ACADEMIC",
        section: "speaking",
        questionType: "SPEAKING_TASK",
        payload: { prompt: "Describe a place you relax.", prepSec: 30, speakSec: 60, rubricKey: "ielts.speaking" },
      })?.profile.key,
    ).toBe("IELTS_SPEAKING");
  });

  it("resolves every TOEFL 2026 task shape", () => {
    expect(
      resolveEvaluator({
        examKey: "TOEFL_IBT",
        variant: "STANDARD",
        section: "writing",
        questionType: "SENTENCE_RECONSTRUCTION",
        payload: { cue: "Original: …", scrambled: ["a", "b", "c"], answer: { text: "the registrar requires approval" } },
      })?.profile.key,
    ).toBe("TOEFL_WRITING_SENTENCE");

    expect(
      resolveEvaluator({
        examKey: "TOEFL_IBT",
        variant: "STANDARD",
        section: "writing",
        questionType: "EMAIL_WRITING",
        payload: { situation: "Seminar moved online.", bullets: ["a", "b", "c"], tone: "semi-formal", minWords: 100 },
      })?.profile.key,
    ).toBe("TOEFL_WRITING_EMAIL");

    expect(
      resolveEvaluator({
        examKey: "TOEFL_IBT",
        variant: "STANDARD",
        section: "writing",
        questionType: "DISCUSSION_TASK",
        payload: { prompt: "Should universities cap tuition?", posts: [{ author: "Maya", text: "Yes, because…" }] },
      })?.profile.key,
    ).toBe("TOEFL_WRITING_DISCUSSION");

    expect(
      resolveEvaluator({
        examKey: "TOEFL_IBT",
        variant: "STANDARD",
        section: "speaking",
        questionType: "LISTEN_REPEAT",
        payload: { sentence: "The library opens at nine on weekdays.", windowSec: 8 },
      })?.profile.key,
    ).toBe("TOEFL_SPEAKING_LISTEN_REPEAT");

    expect(
      resolveEvaluator({
        examKey: "TOEFL_IBT",
        variant: "STANDARD",
        section: "speaking",
        questionType: "SPEAKING_TASK",
        payload: { prompt: "Describe a skill you learned recently.", prepSec: 15, speakSec: 45 },
      })?.profile.key,
    ).toBe("TOEFL_SPEAKING_INTERVIEW");
  });

  it("uses the official criterion names per task (Task achievement vs Task response)", () => {
    const t1 = EVALUATOR_PROFILES.IELTS_WRITING_ACADEMIC_T1.criteria.map((c) => c.name);
    expect(t1).toEqual(["Task achievement", "Coherence and cohesion", "Lexical resource", "Grammatical range and accuracy"]);

    const t2 = EVALUATOR_PROFILES.IELTS_WRITING_ACADEMIC_T2.criteria.map((c) => c.name);
    expect(t2[0]).toBe("Task response");

    const speaking = EVALUATOR_PROFILES.IELTS_SPEAKING.criteria.map((c) => c.name);
    expect(speaking).toEqual([
      "Fluency and coherence",
      "Lexical resource",
      "Grammatical range and accuracy",
      "Pronunciation",
    ]);
  });

  it("refuses non-evaluable question types instead of inventing feedback", () => {
    expect(
      resolveEvaluator({ examKey: "IELTS", variant: "ACADEMIC", section: "reading", questionType: "MCQ_SINGLE", payload: {} }),
    ).toBeNull();
    expect(
      resolveEvaluator({ examKey: "TOEFL_IBT", variant: "STANDARD", section: "listening", questionType: "DICTATION", payload: {} }),
    ).toBeNull();
    expect(
      resolveEvaluator({ examKey: "IELTS", variant: "ACADEMIC", section: "writing", questionType: "FILL_BLANK", payload: {} }),
    ).toBeNull();
    for (const type of ["MCQ_SINGLE", "DICTATION", "TFNG", "FILL_BLANK"]) {
      expect(isEvaluationEligibleType(type)).toBe(false);
    }
    for (const type of EVALUATION_ELIGIBLE_TYPES) {
      expect(isEvaluationEligibleType(type)).toBe(true);
    }
  });

  it("gives IELTS band scales to IELTS tasks and level/accuracy scales to TOEFL tasks", () => {
    expect(EVALUATOR_PROFILES.IELTS_WRITING_GT_T1.scale).toEqual({ kind: "BAND", min: 0, max: 9, step: 0.5, unit: "band" });
    expect(EVALUATOR_PROFILES.TOEFL_WRITING_EMAIL.scale).toEqual({ kind: "TOEFL_LEVEL", min: 1, max: 5, step: 0.5, unit: "task level" });
    expect(EVALUATOR_PROFILES.TOEFL_WRITING_SENTENCE.scale.kind).toBe("ACCURACY");
    expect(EVALUATOR_PROFILES.TOEFL_SPEAKING_LISTEN_REPEAT.scale.kind).toBe("ACCURACY");
  });
});

// ---------------------------------------------------------------------------
// Pure: deterministic checks
// ---------------------------------------------------------------------------

describe("deterministic task-requirement checks", () => {
  const gtResolved = resolveEvaluator({
    examKey: "IELTS",
    variant: "GENERAL_TRAINING",
    section: "writing",
    questionType: "EMAIL_WRITING",
    payload: GT_EMAIL_PAYLOAD,
  })!;

  it("passes a complete GT letter on every check", () => {
    const analysis = runDeterministicAnalysis(gtResolved, GOOD_LETTER, { transcriptSource: "typed" });
    const failed = analysis.checks.filter((c) => !c.passed).map((c) => c.id);
    expect(failed).toEqual([]);
    expect(analysis.metrics.wordCount).toBeGreaterThanOrEqual(150);
    expect(analysis.checks.find((c) => c.id === "greeting")?.provenance).toBe("RULE_BASED");
  });

  it("flags a thin letter: under length, no greeting/sign-off/purpose, bullets missing", () => {
    const analysis = runDeterministicAnalysis(gtResolved, WEAK_LETTER, { transcriptSource: "typed" });
    const failed = new Set(analysis.checks.filter((c) => !c.passed).map((c) => c.id));
    expect(failed.has("word-count")).toBe(true);
    expect(failed.has("greeting")).toBe(true);
    expect(failed.has("signoff")).toBe(true);
    expect(failed.has("purpose")).toBe(true);
    expect([...failed].filter((id) => id.startsWith("bullet-")).length).toBe(3);
  });

  it("detects the Academic Task 1 overview and data references", () => {
    const resolved = resolveEvaluator({
      examKey: "IELTS",
      variant: "ACADEMIC",
      section: "writing",
      questionType: "WRITING_TASK",
      payload: { prompt: "Describe the chart.", part: "Task 1 — chart", minWords: 150 },
    })!;
    const withOverview =
      "The chart shows electricity production between 2000 and 2020.\n\nOverall, solar power rose sharply while coal fell by 40 per cent, and by 2020 solar had reached 300 gigawatt hours.";
    const analysis = runDeterministicAnalysis(resolved, withOverview, { transcriptSource: "typed" });
    expect(analysis.checks.find((c) => c.id === "overview")?.passed).toBe(true);
    expect(analysis.checks.find((c) => c.id === "data-reference")?.passed).toBe(true);
    expect(analysis.checks.find((c) => c.id === "paragraphing")?.passed).toBe(true);
  });

  it("flags Task 2 essays with no position and one block paragraph", () => {
    const resolved = resolveEvaluator({
      examKey: "IELTS",
      variant: "ACADEMIC",
      section: "writing",
      questionType: "WRITING_TASK",
      payload: { prompt: "Some people think…", part: "Task 2 — essay", minWords: 250 },
    })!;
    const text =
      "City life is expensive. Rent is high and transport costs money every day. There are also many good things about cities such as jobs and hospitals and museums and restaurants that people enjoy visiting at weekends with families and friends regularly.";
    const analysis = runDeterministicAnalysis(resolved, text, { transcriptSource: "typed" });
    expect(analysis.checks.find((c) => c.id === "position")?.passed).toBe(false);
    expect(analysis.checks.find((c) => c.id === "paragraphing")?.passed).toBe(false);
  });

  it("detects discussion engagement with a classmate's name", () => {
    const resolved = resolveEvaluator({
      examKey: "TOEFL_IBT",
      variant: "STANDARD",
      section: "writing",
      questionType: "DISCUSSION_TASK",
      payload: { prompt: "Should tuition be capped?", posts: [{ author: "Maya", text: "Yes." }, { author: "Daniel", text: "No." }] },
    })!;
    const engaged = "I believe tuition should be capped. As Maya said, costs have doubled, and I would add that debt limits career choices after graduation.";
    const analysis = runDeterministicAnalysis(resolved, engaged, { transcriptSource: "typed" });
    expect(analysis.checks.find((c) => c.id === "discussion-engagement")?.passed).toBe(true);
    expect(analysis.checks.find((c) => c.id === "position")?.passed).toBe(true);
  });

  it("machine-matches listen-and-repeat sentences and reports missed words", () => {
    const resolved = resolveEvaluator({
      examKey: "TOEFL_IBT",
      variant: "STANDARD",
      section: "speaking",
      questionType: "LISTEN_REPEAT",
      payload: { sentence: "The library opens at nine on weekdays.", windowSec: 8 },
    })!;
    const analysis = runDeterministicAnalysis(resolved, "the library opens at nine", { transcriptSource: "browser-stt" });
    const matchCheck = analysis.checks.find((c) => c.id === "repeat-match");
    expect(matchCheck).toBeDefined();
    expect(matchCheck!.passed).toBe(false);
    expect(matchCheck!.provenance).toBe("VERIFIED");
    expect(matchCheck!.detail).toContain("weekdays");
  });

  it("flags fillers, repetition and short spoken answers in interview transcripts", () => {
    const resolved = resolveEvaluator({
      examKey: "TOEFL_IBT",
      variant: "STANDARD",
      section: "speaking",
      questionType: "SPEAKING_TASK",
      payload: { prompt: "Talk about a skill you learned.", prepSec: 15, speakSec: 45 },
    })!;
    const transcript =
      "Um, I really enjoy cooking, you know, because it helps me relax after work. I usually cook, I usually cook rice with vegetables and some chicken.";
    const analysis = runDeterministicAnalysis(resolved, transcript, { transcriptSource: "browser-stt", audioSec: 20 });
    const failed = new Set(analysis.checks.filter((c) => !c.passed).map((c) => c.id));
    expect(failed.has("fillers")).toBe(true);
    expect(failed.has("repetition")).toBe(true);
    expect(failed.has("spoken-length")).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Engine (fake provider installed)
// ---------------------------------------------------------------------------

const gtTask = () =>
  resolveEvaluator({
    examKey: "IELTS",
    variant: "GENERAL_TRAINING",
    section: "writing",
    questionType: "EMAIL_WRITING",
    payload: GT_EMAIL_PAYLOAD,
  })!;

describe("evaluation engine (with fake AI provider)", () => {
  beforeAll(() => setLlmProviderOverride(fakeEvaluator));
  afterAll(() => setLlmProviderOverride(null));

  it("produces a complete IELTS evaluation: overall + criteria + checks + learning loop", async () => {
    const { result, status } = await evaluateResponse({
      resolved: gtTask(),
      response: GOOD_LETTER,
      transcriptSource: "typed",
    });
    expect(status).toBe("complete");
    expect(result.aiAvailable).toBe(true);
    expect(result.overall).not.toBeNull();
    expect(result.overall!.provenance).toBe("ESTIMATED");
    expect(result.overall!.label).toMatch(/^Estimated band /);
    expect(result.overall!.explanation.length).toBeGreaterThan(10);
    expect(result.criteria.map((c) => c.key)).toEqual([
      "task-achievement",
      "coherence-cohesion",
      "lexical-resource",
    ]);
  });

  it("enforces the no-score-without-explanation rule (drops the silent criterion)", async () => {
    const { result } = await evaluateResponse({ resolved: gtTask(), response: GOOD_LETTER, transcriptSource: "typed" });
    // grammatical-range came back with an empty explanation → dropped.
    expect(result.criteria.find((c) => c.key === "grammatical-range")).toBeUndefined();
    for (const criterion of result.criteria) {
      expect(criterion.explanation.length).toBeGreaterThan(0);
    }
  });

  it("keeps only evidence quotes that exist verbatim in the response", async () => {
    const { result } = await evaluateResponse({ resolved: gtTask(), response: GOOD_LETTER, transcriptSource: "typed" });
    const evidence = result.criteria.flatMap((c) => c.evidence);
    expect(evidence.length).toBe(1);
    expect(GOOD_LETTER).toContain(evidence[0].quote);
  });

  it("clamps out-of-scale scores to the band scale and rounds to half bands", async () => {
    const { result } = await evaluateResponse({ resolved: gtTask(), response: GOOD_LETTER, transcriptSource: "typed" });
    const lexical = result.criteria.find((c) => c.key === "lexical-resource")!;
    expect(lexical.score).toBe(9); // the model said 12 → clamped
    const coherence = result.criteria.find((c) => c.key === "coherence-cohesion")!;
    expect(coherence.score).toBe(7.5); // 7.4 → nearest half band
    // Overall = mean of surviving criteria (6.0 + 7.5 + 9.0)/3 = 7.5.
    expect(result.overall!.score).toBe(7.5);
  });

  it("drops grammar corrections and sentence feedback whose quotes are absent", async () => {
    const { result } = await evaluateResponse({ resolved: gtTask(), response: GOOD_LETTER, transcriptSource: "typed" });
    for (const correction of result.grammarCorrections) {
      expect(GOOD_LETTER.toLowerCase()).toContain(correction.original.toLowerCase().slice(0, 15));
    }
    expect(result.sentenceFeedback.length).toBe(1);
    expect(GOOD_LETTER).toContain(result.sentenceFeedback[0].quote);
  });

  it("maps weaknesses onto existing EnglishPath lessons with valid app routes", async () => {
    const { result } = await evaluateResponse({ resolved: gtTask(), response: WEAK_LETTER, transcriptSource: "typed" });
    expect(result.weaknesses.length).toBeGreaterThan(0);
    const withLessons = result.weaknesses.filter((w) => w.lessons.length > 0);
    expect(withLessons.length).toBeGreaterThan(0);
    for (const weakness of withLessons) {
      for (const lesson of weakness.lessons) {
        expect(lesson.href.startsWith("#/")).toBe(true);
        expect(lesson.title.length).toBeGreaterThan(3);
      }
    }
    expect(result.revisionGuidance).toMatch(/^Revise your response/);
  });

  it("returns a VERIFIED machine-measured overall for accuracy tasks (no AI score)", async () => {
    const resolved = resolveEvaluator({
      examKey: "TOEFL_IBT",
      variant: "STANDARD",
      section: "speaking",
      questionType: "LISTEN_REPEAT",
      payload: { sentence: "The library opens at nine on weekdays.", windowSec: 8 },
    })!;
    const { result, status } = await evaluateResponse({
      resolved,
      response: "the library opens at nine on weekdays",
      transcriptSource: "browser-stt",
    });
    expect(status).toBe("complete");
    expect(result.overall!.provenance).toBe("VERIFIED");
    expect(result.overall!.score).toBe(100);
    const accuracy = result.criteria.find((c) => c.key === "sentence-accuracy")!;
    expect(accuracy.provenance).toBe("VERIFIED");
    expect(accuracy.score).toBe(100);
  });

  it("states the accent rule in speaking prompts and the variety rule in writing prompts", () => {
    const speakingPrompt = buildEvaluationPrompt({
      resolved: resolveEvaluator({
        examKey: "IELTS",
        variant: "ACADEMIC",
        section: "speaking",
        questionType: "SPEAKING_TASK",
        payload: { prompt: "Describe a hobby.", prepSec: 30, speakSec: 60 },
      })!,
      response: "I enjoy painting because it calms me down after a long day at work and lets me use my hands.",
      analysis: runDeterministicAnalysis(
        resolveEvaluator({
          examKey: "IELTS",
          variant: "ACADEMIC",
          section: "speaking",
          questionType: "SPEAKING_TASK",
          payload: { prompt: "Describe a hobby.", prepSec: 30, speakSec: 60 },
        })!,
        "I enjoy painting because it calms me down after a long day at work and lets me use my hands.",
        { transcriptSource: "browser-stt" },
      ),
      match: null,
      transcriptSource: "browser-stt",
      audioSec: 30,
      rubricText: null,
      isRevision: false,
      priorWeaknesses: [],
    });
    expect(speakingPrompt.system).toContain("Accents are not errors");
    expect(speakingPrompt.system).toContain("never be marked down");

    const writingPrompt = buildEvaluationPrompt({
      resolved: gtTask(),
      response: GOOD_LETTER,
      analysis: runDeterministicAnalysis(gtTask(), GOOD_LETTER, { transcriptSource: "typed" }),
      match: null,
      transcriptSource: "typed",
      audioSec: null,
      rubricText: null,
      isRevision: false,
      priorWeaknesses: [],
    });
    expect(writingPrompt.system).toContain("regional language varieties");
    expect(writingPrompt.system).toContain("Never claim to predict the official result exactly");
  });

  it("always carries the safeguard disclaimers, whatever the status", async () => {
    const complete = await evaluateResponse({ resolved: gtTask(), response: GOOD_LETTER, transcriptSource: "typed" });
    for (const result of [complete.result]) {
      expect(result.disclaimers).toContain(EVALUATION_SCORE_DISCLAIMER);
      expect(result.disclaimers).toContain(EVALUATION_HUMAN_REVIEW_NOTE);
      expect(EVALUATION_SCORE_DISCLAIMER).toContain("not an official IELTS band or ETS score");
    }
    const speaking = await evaluateResponse({
      resolved: resolveEvaluator({
        examKey: "IELTS",
        variant: "ACADEMIC",
        section: "speaking",
        questionType: "SPEAKING_TASK",
        payload: { prompt: "Describe a hobby.", prepSec: 30, speakSec: 60 },
      })!,
      response: "I enjoy painting because it calms me down after a long day at work, and it lets me make things with my hands, which I find very satisfying indeed.",
      transcriptSource: "browser-stt",
    });
    expect(speaking.result.disclaimers).toContain(EVALUATION_ACCENT_NOTE);
  });

  it("refuses to estimate responses that are too short to judge", async () => {
    const { result, status } = await evaluateResponse({
      resolved: gtTask(),
      response: "Broken heating. Please fix.",
      transcriptSource: "typed",
    });
    expect(status).toBe("insufficient");
    expect(result.overall).toBeNull();
    expect(result.criteria).toEqual([]);
    expect(result.limitations.some((l) => l.includes("too short"))).toBe(true);
  });

  it("explains the transcript limitation honestly when the source is unknown", async () => {
    const { result } = await evaluateResponse({
      resolved: resolveEvaluator({
        examKey: "IELTS",
        variant: "ACADEMIC",
        section: "speaking",
        questionType: "SPEAKING_TASK",
        payload: { prompt: "Describe a hobby.", prepSec: 30, speakSec: 60 },
      })!,
      response: "I enjoy painting because it calms me down after a long day at work, and it lets me make things with my hands, which I find very satisfying indeed.",
      transcriptSource: "unknown",
    });
    expect(result.limitations.some((l) => l.includes("source was not recorded"))).toBe(true);
  });
});

describe("evaluation engine degradation (AI unavailable)", () => {
  beforeAll(() => setLlmProviderOverride(throwingProvider));
  afterAll(() => setLlmProviderOverride(null));

  it("degrades to a checks-only partial report instead of failing", async () => {
    const { result, status } = await evaluateResponse({
      resolved: gtTask(),
      response: WEAK_LETTER,
      transcriptSource: "typed",
    });
    expect(status).toBe("partial");
    expect(result.aiAvailable).toBe(false);
    expect(result.overall).toBeNull();
    expect(result.criteria).toEqual([]);
    expect(result.checks.length).toBeGreaterThan(0);
    expect(result.grammarCorrections.every((c) => c.provenance === "RULE_BASED")).toBe(true);
    expect(result.limitations.some((l) => l.includes("AI evaluation layer was unavailable"))).toBe(true);
    expect(result.disclaimers).toContain(EVALUATION_SCORE_DISCLAIMER);
    // The learning loop still works from failed checks.
    expect(result.weaknesses.length).toBeGreaterThan(0);
    expect(result.revisionGuidance).not.toBeNull();
  });
});

// ---------------------------------------------------------------------------
// Learning loop (pure)
// ---------------------------------------------------------------------------

describe("learning loop", () => {
  it("maps weakness tags to existing bridge-rule lessons without duplication", () => {
    const lessons = lessonRefsFor("writing", ["grammar", "accuracy"]);
    expect(lessons.length).toBeGreaterThan(0);
    expect(lessons.every((l) => l.href.startsWith("#/"))).toBe(true);
    const hrefs = lessons.map((l) => l.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it("ranks criterion weaknesses by severity and caps the list", () => {
    const weaknesses = buildWeaknesses({
      profile: EVALUATOR_PROFILES.IELTS_WRITING_ACADEMIC_T2,
      criteria: [
        { key: "task-response", name: "Task response", score: 4, maxScore: 9, unit: "band", explanation: "Thin.", evidence: [], provenance: "AI_GENERATED" },
        { key: "coherence-cohesion", name: "Coherence and cohesion", score: 6, maxScore: 9, unit: "band", explanation: "Mechanical.", evidence: [], provenance: "AI_GENERATED" },
        { key: "lexical-resource", name: "Lexical resource", score: 8, maxScore: 9, unit: "band", explanation: "Strong.", evidence: [], provenance: "AI_GENERATED" },
      ],
      checks: [],
      grammarCorrectionCount: 0,
      vocabularyCount: 0,
      missingRequirements: [],
      organisationCount: 0,
      irrelevantCount: 0,
      wordCount: 280,
    });
    expect(weaknesses[0].severity).toBe("major");
    expect(weaknesses[0].area).toBe("task-response");
    expect(weaknesses.some((w) => w.area === "lexical-resource")).toBe(false); // 8.0 → not a weakness
    expect(weaknesses.length).toBeLessThanOrEqual(5);
  });

  it("tracks improvement between evaluations with deltas and resolved weaknesses", () => {
    const base = {
      evaluatorKey: "IELTS_WRITING_GT_T1",
      examKey: "IELTS" as const,
      examLabel: "IELTS General Training",
      section: "writing" as const,
      taskTitle: "GT Task 1",
      taskLabel: "GT Task 1",
      createdAt: new Date().toISOString(),
      overall: { score: 5, maxScore: 9, unit: "band", label: "Estimated band 5.0", explanation: "x", provenance: "ESTIMATED" as const },
      criteria: [
        { key: "task-achievement", name: "Task achievement", score: 4.5, maxScore: 9, unit: "band", explanation: "a", evidence: [], provenance: "AI_GENERATED" as const },
        { key: "coherence-cohesion", name: "Coherence and cohesion", score: 5.5, maxScore: 9, unit: "band", explanation: "b", evidence: [], provenance: "AI_GENERATED" as const },
      ],
      checks: [],
      grammarCorrections: [],
      vocabulary: [],
      sentenceFeedback: [],
      missingRequirements: [],
      organisation: [],
      recommendations: [],
      transcript: null,
      transcriptSource: "typed" as const,
      wordCount: 120,
      pronunciation: [],
      developmentSuggestions: [],
      weaknesses: [
        { area: "task-achievement", label: "Task achievement", severity: "major" as const, evidence: "e", lessons: [], practice: [] },
        { area: "coherence-cohesion", label: "Coherence", severity: "moderate" as const, evidence: "e", lessons: [], practice: [] },
      ],
      revisionGuidance: null,
      revisionExercise: null,
      irrelevantContent: [],
      modelResponse: null,
      confidence: { level: "higher" as const, reasons: ["test fixture"] },
      limitations: [],
      disclaimers: [],
      aiAvailable: true,
    };
    const revised = {
      ...base,
      overall: { ...base.overall!, score: 6.5, label: "Estimated band 6.5" },
      criteria: [
        { ...base.criteria[0], score: 6.0 },
        { ...base.criteria[1], score: 7.0 },
      ],
      wordCount: 165,
      weaknesses: [base.weaknesses[1]],
    };
    const comparison = compareEvaluations(base, revised, { baseId: "b1", revisedId: "r1" });
    expect(comparison.overallDelta).toBe(1.5);
    expect(comparison.baseId).toBe("b1");
    expect(comparison.revisedId).toBe("r1");
    expect(comparison.criteria.find((c) => c.key === "task-achievement")!.delta).toBe(1.5);
    expect(comparison.resolvedWeaknesses).toEqual(["task-achievement"]);
    expect(comparison.remainingWeaknesses).toEqual(["coherence-cohesion"]);
    expect(comparison.wordCountBefore).toBe(120);
    expect(comparison.wordCountAfter).toBe(165);
  });

  it("documents the provenance legend with all five labels", () => {
    expect(PROVENANCE_LEGEND.map((l) => l.label)).toEqual([
      "VERIFIED",
      "RULE_BASED",
      "AI_GENERATED",
      "ESTIMATED",
      "HUMAN_REVIEWED",
    ]);
    for (const entry of PROVENANCE_LEGEND) {
      expect(entry.meaning.length).toBeGreaterThan(20);
    }
  });
});

// ---------------------------------------------------------------------------
// Persistence (service) — fixtures created and cleaned up by this suite
// ---------------------------------------------------------------------------

const fixtures: { userId?: string; mockIds?: string[]; attemptIds?: string[]; evaluationIds?: string[] } = {};

async function createFixture() {
  const spec =
    (await db.testSpecification.findFirst({ where: { examKey: "IELTS", variant: "GENERAL_TRAINING" } })) ??
    (await db.testSpecification.create({
      data: {
        examKey: "IELTS",
        variant: "GENERAL_TRAINING",
        name: "IELTS General Training",
        version: 1,
        status: "active",
        effectiveDate: new Date("2026-07-01"),
        lastReviewedAt: new Date(),
        sections: JSON.stringify([
          { key: "writing", label: "General Training Writing", timingSec: 3600, questionCount: 2, taskTypes: [], directions: "" },
        ]),
        scoringModel: JSON.stringify({ kind: "IELTS_BAND", unit: "band", rawToScore: {}, overallRule: "AVERAGE_ROUNDED_NEAREST_HALF", minSectionScore: 0, maxSectionScore: 9, validityMonths: 24 }),
        taskTypes: JSON.stringify([{ type: "EMAIL_WRITING", label: "Letter", description: "", objective: false, rubricKey: "ielts.writing" }]),
        sourceRefs: JSON.stringify([{ label: "IELTS official", url: "https://ielts.org/", retrievedAt: "2026-11-12" }]),
      },
    }));
  const mock = await db.mockTest.create({
    data: {
      examKey: "IELTS",
      variant: "GENERAL_TRAINING",
      specId: spec.id,
      title: `Evaluation fixture ${Date.now()}`,
      kind: "section",
      lengthLabel: "sample",
      status: "published",
      description: "Fixture. Original EnglishPath practice material — not an official paper.",
    },
  });
  const writing = await db.mockTestSection.create({
    data: { mockTestId: mock.id, key: "writing", title: "Writing", timingSec: 1200, order: 1 },
  });
  const letter = await db.mockTestQuestion.create({
    data: {
      sectionId: writing.id,
      order: 1,
      type: "EMAIL_WRITING",
      stem: null,
      payload: JSON.stringify(GT_EMAIL_PAYLOAD),
      answer: null,
      points: 0,
      skills: JSON.stringify(["task-response", "tone"]),
      difficulty: 3,
      explanation: null,
      source: "original-practice",
      contentStatus: "published",
    },
  });
  const mcq = await db.mockTestQuestion.create({
    data: {
      sectionId: writing.id,
      order: 2,
      type: "MCQ_SINGLE",
      stem: null,
      payload: JSON.stringify({ options: ["a", "b", "c"] }),
      answer: JSON.stringify({ option: 1 }),
      points: 1,
      skills: JSON.stringify(["detail"]),
      difficulty: 2,
      explanation: null,
      source: "original-practice",
      contentStatus: "published",
    },
  });
  const attempt = await db.mockTestAttempt.create({
    data: { userId: fixtures.userId!, mockTestId: mock.id, specId: spec.id, mode: "untimed", timed: false },
  });
  return { mock, letter, mcq, attempt };
}

describe("evaluation service (persistence + integration)", () => {
  beforeAll(async () => {
    setLlmProviderOverride(fakeEvaluator);
    const user = await db.user.create({
      data: { email: `eval-test-${Date.now()}@talksy.app`, name: "Eval Test", passwordHash: "x:y", role: "student" },
    });
    fixtures.userId = user.id;
  });

  afterAll(async () => {
    setLlmProviderOverride(null);
    // Mocks first (cascades sections/questions/attempts); the user delete
    // then cascades every remaining attempt and evaluation row (including
    // revision chains — deleting a base evaluation cascades its revisions).
    for (const id of fixtures.mockIds ?? []) {
      await db.mockTest.delete({ where: { id } }).catch(() => undefined);
    }
    if (fixtures.userId) {
      await db.user.delete({ where: { id: fixtures.userId } }).catch(() => undefined);
    }
  });

  it("creates a full evaluation from a mock question, then lists it", async () => {
    const fixture = await createFixture();
    fixtures.mockIds = [...(fixtures.mockIds ?? []), fixture.mock.id];
    fixtures.attemptIds = [...(fixtures.attemptIds ?? []), fixture.attempt.id];

    const outcome = await createEvaluation(fixtures.userId!, {
      attemptId: fixture.attempt.id,
      questionId: fixture.letter.id,
      text: GOOD_LETTER,
      transcriptSource: "typed",
    });
    expect(outcome.ok).toBe(true);
    if (!outcome.ok) return;
    fixtures.evaluationIds = [...(fixtures.evaluationIds ?? []), outcome.evaluation.id];
    expect(outcome.evaluation.evaluatorKey).toBe("IELTS_WRITING_GT_T1");
    expect(outcome.evaluation.status).toBe("complete");
    expect(outcome.evaluation.result.overall).not.toBeNull();
    expect(outcome.evaluation.inputText).toBe(GOOD_LETTER);

    const listed = await listEvaluations(fixtures.userId!, { questionId: fixture.letter.id });
    expect(listed.some((e) => e.id === outcome.evaluation.id)).toBe(true);
  });

  it("refuses to evaluate objective question types", async () => {
    const fixture = await createFixture();
    fixtures.mockIds = [...(fixtures.mockIds ?? []), fixture.mock.id];
    fixtures.attemptIds = [...(fixtures.attemptIds ?? []), fixture.attempt.id];
    const outcome = await createEvaluation(fixtures.userId!, {
      attemptId: fixture.attempt.id,
      questionId: fixture.mcq.id,
      text: "a",
      transcriptSource: "typed",
    });
    expect(outcome.ok).toBe(false);
    if (!outcome.ok) expect(outcome.reason).toContain("does not have a writing/speaking evaluator");
  });

  it("runs the revision loop: revise → chain → tracked improvement", async () => {
    const fixture = await createFixture();
    fixtures.mockIds = [...(fixtures.mockIds ?? []), fixture.mock.id];
    fixtures.attemptIds = [...(fixtures.attemptIds ?? []), fixture.attempt.id];

    const base = await createEvaluation(fixtures.userId!, {
      attemptId: fixture.attempt.id,
      questionId: fixture.letter.id,
      text: WEAK_LETTER,
      transcriptSource: "typed",
    });
    expect(base.ok).toBe(true);
    if (!base.ok) return;
    fixtures.evaluationIds = [...(fixtures.evaluationIds ?? []), base.evaluation.id];

    const revision = await reviseEvaluation(fixtures.userId!, base.evaluation.id, {
      text: GOOD_LETTER,
      transcriptSource: "typed",
    });
    expect(revision.ok).toBe(true);
    if (!revision.ok) return;
    fixtures.evaluationIds = [...(fixtures.evaluationIds ?? []), revision.evaluation.id];
    expect(revision.evaluation.isRevision).toBe(true);
    expect(revision.evaluation.revisionOfId).toBe(base.evaluation.id);
    expect(revision.comparison.wordCountAfter).toBeGreaterThanOrEqual(150);

    const chain = await getEvaluationChain(fixtures.userId!, revision.evaluation.id);
    expect(chain.ok).toBe(true);
    if (!chain.ok) return;
    expect(chain.chain.length).toBe(2);
    expect(chain.comparison).not.toBeNull();
    expect(chain.comparison!.revisedId).toBe(revision.evaluation.id);
  });

  it("supports free evaluations with an honest free-task limitation", async () => {
    const outcome = await createEvaluation(fixtures.userId!, {
      evaluatorKey: "IELTS_SPEAKING",
      text: "I really enjoy cooking because it helps me relax after work, and I usually cook rice with vegetables and chicken for my family in the evening.",
      transcriptSource: "browser-stt",
      audioSec: 30,
    });
    expect(outcome.ok).toBe(true);
    if (!outcome.ok) return;
    fixtures.evaluationIds = [...(fixtures.evaluationIds ?? []), outcome.evaluation.id];
    expect(outcome.evaluation.evaluatorKey).toBe("IELTS_SPEAKING");
    expect(outcome.evaluation.result.limitations.some((l) => l.includes("Free evaluation"))).toBe(true);
    expect(outcome.evaluation.result.transcript).not.toBeNull();
  });

  it("rejects evaluations for another learner's attempt", async () => {
    const fixture = await createFixture();
    fixtures.mockIds = [...(fixtures.mockIds ?? []), fixture.mock.id];
    fixtures.attemptIds = [...(fixtures.attemptIds ?? []), fixture.attempt.id];
    const stranger = await db.user.create({
      data: { email: `eval-stranger-${Date.now()}@talksy.app`, name: "Stranger", passwordHash: "x:y", role: "student" },
    });
    const outcome = await createEvaluation(stranger.id, {
      attemptId: fixture.attempt.id,
      questionId: fixture.letter.id,
      text: GOOD_LETTER,
      transcriptSource: "typed",
    });
    await db.user.delete({ where: { id: stranger.id } }).catch(() => undefined);
    expect(outcome.ok).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Language analysis (PROMPT 52 dimensions) — sentence structure, punctuation,
// repetition, pace & pauses
// ---------------------------------------------------------------------------

describe("language analysis: sentence structure", () => {
  it("passes a varied, well-punctuated text", () => {
    const clean = [
      "The chart illustrates electricity production between 2000 and 2020.",
      "Overall, output rose steadily in every country shown.",
      "While Norway started highest at 120 terawatt hours, Portugal began at just 40.",
      "By the end of the period, the gap had narrowed considerably because Portuguese generation grew quickly.",
      "In contrast, Norwegian output grew slowly, which surprised many analysts at the time.",
    ].join(" ");
    const findings = analyzeSentenceStructure(clean);
    expect(findings.check).not.toBeNull();
    expect(findings.check!.passed).toBe(true);
    expect(findings.runOnCount).toBe(0);
    expect(findings.fragmentCount).toBe(0);
  });

  it("flags run-on sentences that pack too many clauses", () => {
    const runOn = `Sales increased in every quarter. The team celebrated and the managers prepared a report and the clients asked for details and the board scheduled a meeting and everyone agreed that the results were excellent because the market had grown quickly while competitors struggled. Nobody expected such a strong year.`;
    const findings = analyzeSentenceStructure(runOn);
    expect(findings.check).not.toBeNull();
    expect(findings.check!.passed).toBe(false);
    expect(findings.check!.detail).toContain("run-on");
    expect(findings.runOnCount).toBeGreaterThanOrEqual(1);
  });

  it("flags likely sentence fragments (no finite verb)", () => {
    const fragmentary = `The results very surprising. Everyone in the room quiet for a moment. Then the manager explained the reasons behind the numbers.`;
    const findings = analyzeSentenceStructure(fragmentary);
    expect(findings.fragmentCount).toBeGreaterThanOrEqual(2);
  });

  it("flags monotone sentence openings", () => {
    const monotone = `The chart shows sales. The chart covers five years. The chart uses solid colours. The chart appeared in the annual report. Sales rose quickly after 2010 because demand grew in Asia.`;
    const findings = analyzeSentenceStructure(monotone);
    expect(findings.repeatedOpenings).toBe("the chart");
  });
});

describe("language analysis: punctuation", () => {
  it("flags missing terminal punctuation, lowercase starts, comma splices and apostrophes together", () => {
    const messy = `the heating was broken in January. I called the office twice, they never replied. I dont think the staff read my messages. This is unacceptable!!`;
    const findings = analyzePunctuation(messy);
    expect(findings.check).not.toBeNull();
    expect(findings.check!.passed).toBe(false);
    expect(findings.lowercaseStarts).toBeGreaterThanOrEqual(1);
    expect(findings.commaSplices).toBeGreaterThanOrEqual(1);
    expect(findings.missingApostrophes).toContain("don't");
    expect(findings.doubleExclamations).toBeGreaterThanOrEqual(2);
  });

  it("does not flag correct comma patterns (conjunctions and relative clauses)", () => {
    const correct = `I stayed home, and my sister went out. The chart, which shows sales, is clear. Because it rained, we cancelled the trip. After the meeting, everyone relaxed.`;
    const findings = analyzePunctuation(correct);
    expect(findings.commaSplices).toBe(0);
    expect(findings.missingApostrophes).toHaveLength(0);
    expect(findings.check?.passed ?? true).toBe(true);
  });
});

describe("language analysis: repetition (writing)", () => {
  it("flags repeated content phrases and over-used words", () => {
    let text = "";
    for (let i = 0; i < 10; i++) {
      text += `Sales increased sharply in this region. The increase surprised the analysts. `;
    }
    const findings = analyzeRepetition(text);
    expect(findings.check).not.toBeNull();
    expect(findings.check!.passed).toBe(false);
    expect(findings.repeatedPhrases.length).toBeGreaterThan(0);
    expect(findings.overusedWords.some((w) => w.word === "sales" || w.word === "increase" || w.word === "increased")).toBe(true);
  });

  it("passes varied text", () => {
    const varied = `The chart illustrates electricity production. Overall, output climbed steadily across the period. Norway began highest, while Portugal started near zero. By 2020 the gap had narrowed considerably. Portuguese generation grew quickly after 2010, overtaking several neighbours. Analysts described the trend as remarkable.`;
    const findings = analyzeRepetition(varied);
    expect(findings.check?.passed ?? true).toBe(true);
    expect(findings.overusedWords).toHaveLength(0);
  });
});

describe("language analysis: pace and pauses (speaking)", () => {
  it("measures a natural pace as passed", () => {
    const words = Array.from({ length: 60 }, (_, i) => `word${i}`).join(" ");
    const findings = analyzePace(
      { wordCount: 60, wordsPerMinute: 120, fillerCount: 0, fillersFound: [], repeatedPhrases: [], sentenceCount: 5, paragraphCount: 1, uniqueWordRatio: 0.9, fillersPerMinute: 0, avgSentenceWords: 12 },
      30,
    );
    expect(findings.check).not.toBeNull();
    expect(findings.check!.passed).toBe(true);
    expect(findings.check!.provenance).toBe("VERIFIED");
    expect(findings.wpm).toBe(120);
    expect(words.length).toBeGreaterThan(0); // sanity: fixture built
  });

  it("flags a very slow pace as likely long pauses", () => {
    const findings = analyzePace(
      { wordCount: 30, wordsPerMinute: 40, fillerCount: 0, fillersFound: [], repeatedPhrases: [], sentenceCount: 4, paragraphCount: 1, uniqueWordRatio: 0.9, fillersPerMinute: 0, avgSentenceWords: 8 },
      45,
    );
    expect(findings.check).not.toBeNull();
    expect(findings.check!.passed).toBe(false);
    expect(findings.check!.detail).toContain("pauses");
  });

  it("produces no pace check without a recording duration", () => {
    const findings = analyzePace(
      { wordCount: 30, wordsPerMinute: null, fillerCount: 0, fillersFound: [], repeatedPhrases: [], sentenceCount: 4, paragraphCount: 1, uniqueWordRatio: 0.9, fillersPerMinute: null, avgSentenceWords: 8 },
      null,
    );
    expect(findings.check).toBeNull();
    expect(findings.interpretation).toBe("no-duration");
  });

  it("counts hesitation markers in transcripts", () => {
    expect(hesitationMarkers("Well... I think um the chart shows uh a rise")).toBeGreaterThanOrEqual(3);
    expect(hesitationMarkers("The chart shows a clear rise over the period.")).toBe(0);
  });
});

describe("TOEFL interview criteria include fluency (PROMPT 52)", () => {
  it("defines five criteria including Fluency and pace for Take an Interview", () => {
    const profile = EVALUATOR_PROFILES.TOEFL_SPEAKING_INTERVIEW;
    expect(profile.criteria).toHaveLength(5);
    expect(profile.criteria.some((c) => c.key === "fluency-pace" && c.name === "Fluency and pace")).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Engine: new feedback elements — irrelevant content, model response,
// revision exercise, confidence
// ---------------------------------------------------------------------------

describe("engine: irrelevant content, model response, revision exercise, confidence", () => {
  beforeAll(() => {
    setLlmProviderOverride(fakeEvaluator);
  });
  afterAll(() => {
    setLlmProviderOverride(null);
  });

  it("keeps only irrelevant-content quotes that exist in the response", async () => {
    const { result } = await evaluateResponse({
      resolved: {
        profile: EVALUATOR_PROFILES.IELTS_WRITING_GT_T1,
        taskTitle: "GT Task 1",
        promptText: "Situation + bullets",
        payload: {},
      },
      response: GOOD_LETTER,
      transcriptSource: "typed",
    });
    expect(result.irrelevantContent).toHaveLength(1);
    expect(result.irrelevantContent[0]!.quote).toBe(firstSentence(GOOD_LETTER));
    // ...and the relevance weakness is derived from it.
    expect(result.weaknesses.some((w) => w.area === "relevance" && w.label === "Off-task content")).toBe(true);
  });

  it("carries the AI model response for scored tasks with the study-example framing", async () => {
    const { result } = await evaluateResponse({
      resolved: {
        profile: EVALUATOR_PROFILES.IELTS_WRITING_GT_T1,
        taskTitle: "GT Task 1",
        promptText: "Situation + bullets",
        payload: {},
      },
      response: GOOD_LETTER,
      transcriptSource: "typed",
    });
    expect(result.modelResponse).not.toBeNull();
    expect(result.modelResponse!.provenance).toBe("AI_GENERATED");
    expect(result.modelResponse!.text).toContain("Dear Sir or Madam");
    expect(result.modelResponse!.note.length).toBeGreaterThan(0);
  });

  it("uses the machine-known target sentence as the VERIFIED model for accuracy tasks", async () => {
    const resolved = resolveEvaluator({
      examKey: "TOEFL_IBT",
      variant: "ACADEMIC",
      section: "writing",
      questionType: "SENTENCE_RECONSTRUCTION",
      payload: {
        cue: "Rebuild the sentence.",
        scrambled: ["the library", "before class", "she returned", "the book to", "started"],
        answer: { text: "She returned the book to the library before class started." },
        part: "Build a Sentence",
      },
    });
    expect(resolved).not.toBeNull();
    if (!resolved) return;
    const { result } = await evaluateResponse({
      resolved,
      response: "She returned the book to the library before class started.",
      transcriptSource: "typed",
    });
    expect(result.modelResponse).not.toBeNull();
    expect(result.modelResponse!.provenance).toBe("VERIFIED");
    expect(result.modelResponse!.text).toBe("She returned the book to the library before class started.");
    expect(result.overall?.provenance).toBe("VERIFIED");
  });

  it("builds a structured revision exercise from this evaluation's findings", async () => {
    const { result } = await evaluateResponse({
      resolved: {
        profile: EVALUATOR_PROFILES.IELTS_WRITING_GT_T1,
        taskTitle: "GT Task 1",
        promptText: "Situation + bullets",
        payload: {},
      },
      response: WEAK_LETTER,
      transcriptSource: "typed",
    });
    expect(result.revisionExercise).not.toBeNull();
    expect(result.revisionExercise!.steps.length).toBeGreaterThanOrEqual(2);
    expect(result.revisionExercise!.steps.length).toBeLessThanOrEqual(6);
    expect(result.revisionExercise!.title).toContain("IELTS General Training Task 1");
    expect(result.revisionExercise!.focusAreas.length).toBeGreaterThan(0);
    // Concrete: the under-length finding becomes an expansion step.
    expect(result.revisionExercise!.steps.some((s) => s.includes("Expand the response"))).toBe(true);
  });

  it("downgrades confidence when criterion estimates disagree strongly", async () => {
    const { result } = await evaluateResponse({
      resolved: {
        profile: EVALUATOR_PROFILES.IELTS_WRITING_GT_T1,
        taskTitle: "GT Task 1",
        promptText: "Situation + bullets",
        payload: {},
      },
      response: GOOD_LETTER,
      transcriptSource: "typed",
    });
    // The fake returns 6.2 / 7.4 / 9.0 — a 2.8-band spread.
    expect(result.confidence.level).toBe("lower");
    expect(result.confidence.reasons.some((r) => r.includes("disagree"))).toBe(true);
    expect(result.limitations.some((l) => l.includes("Lower confidence"))).toBe(true);
  });

  it("caps confidence at moderate for speaking judged from a typed transcript", async () => {
    const { result } = await evaluateResponse({
      resolved: {
        profile: EVALUATOR_PROFILES.IELTS_SPEAKING,
        taskTitle: "Speaking Part 2",
        promptText: "Describe a place you like.",
        payload: {},
      },
      response:
        "I really enjoy cooking because it helps me relax after work, and I usually cook rice with vegetables and chicken for my family in the evening, which everyone enjoys.",
      transcriptSource: "typed",
    });
    expect(result.confidence.level).not.toBe("higher");
    expect(result.confidence.reasons.some((r) => r.includes("transcript"))).toBe(true);
    expect(result.limitations.some((l) => l.toLowerCase().includes("pause and pace analysis needs the recording duration"))).toBe(true);
  });

  it("prompts the AI for the new fields with the irrelevance and model-response rules", async () => {
    const { system } = buildEvaluationPrompt({
      resolved: {
        profile: EVALUATOR_PROFILES.IELTS_WRITING_ACADEMIC_T2,
        taskTitle: "Task 2",
        promptText: "Some people believe…",
        payload: {},
      },
      response: "Some response long enough to evaluate properly with several sentences and vocabulary.",
      analysis: runDeterministicAnalysis(
        {
          profile: EVALUATOR_PROFILES.IELTS_WRITING_ACADEMIC_T2,
          taskTitle: "Task 2",
          promptText: "Some people believe…",
          payload: {},
        },
        "Some response long enough to evaluate properly with several sentences and vocabulary. It continues with more detail to give the analyser something to work with. A third sentence arrives for structure.",
      ),
      match: null,
      transcriptSource: "typed",
      audioSec: null,
      rubricText: null,
      isRevision: false,
      priorWeaknesses: [],
    });
    expect(system).toContain("irrelevantContent");
    expect(system).toContain("modelResponse");
    expect(system).toContain("never invent irrelevance");
    expect(system).toContain("study example");
  });
});

// ---------------------------------------------------------------------------
// Revision exercise builder (pure)
// ---------------------------------------------------------------------------

describe("revision exercise builder (pure)", () => {
  const emptyLanguage = {
    sentenceStructure: { check: null, longestSentenceWords: 0, fragmentCount: 0, runOnCount: 0, repeatedOpenings: null, complexSentenceRatio: null },
    punctuation: { check: null, missingTerminal: 0, lowercaseStarts: 0, commaSplices: 0, missingApostrophes: [], doubleExclamations: 0 },
    repetition: { check: null, repeatedPhrases: [], overusedWords: [] },
    pace: { check: null, wpm: null, interpretation: "no-duration" as const },
    hesitationMarkers: 0,
  };

  it("returns null when there is nothing to fix", () => {
    const exercise = buildRevisionExercise({
      profile: EVALUATOR_PROFILES.IELTS_WRITING_GT_T1,
      weaknesses: [],
      grammarCorrections: [],
      checks: [],
      language: emptyLanguage,
    });
    expect(exercise).toBeNull();
  });

  it("turns grammar corrections into re-write steps (rule-based first)", () => {
    const exercise = buildRevisionExercise({
      profile: EVALUATOR_PROFILES.IELTS_WRITING_GT_T1,
      weaknesses: [],
      grammarCorrections: [
        { original: "I am agree", corrected: "I agree", explanation: "Agree is a verb.", provenance: "RULE_BASED" },
        { original: "he go", corrected: "he goes", explanation: "Third person -s.", provenance: "RULE_BASED" },
      ],
      checks: [],
      language: emptyLanguage,
    });
    expect(exercise).not.toBeNull();
    expect(exercise!.steps[0]).toContain("I am agree");
    expect(exercise!.steps[0]).toContain("I agree");
  });

  it("turns failed punctuation checks into concrete punctuation steps", () => {
    const exercise = buildRevisionExercise({
      profile: EVALUATOR_PROFILES.IELTS_WRITING_GT_T1,
      weaknesses: [],
      grammarCorrections: [],
      checks: [
        { id: "punctuation", label: "Punctuation and mechanics", passed: false, detail: "findings", provenance: "RULE_BASED" },
      ],
      language: {
        ...emptyLanguage,
        punctuation: { ...emptyLanguage.punctuation, missingTerminal: 2, commaSplices: 1, missingApostrophes: ["don't", "can't"] },
      },
    });
    expect(exercise).not.toBeNull();
    expect(exercise!.steps.some((s) => s.includes("end every sentence"))).toBe(true);
    expect(exercise!.steps.some((s) => s.includes("comma splice"))).toBe(true);
    expect(exercise!.steps.some((s) => s.includes("don't"))).toBe(true);
  });

  it("ends with a compare-with-the-model step adapted to the section", () => {
    const speaking = buildRevisionExercise({
      profile: EVALUATOR_PROFILES.IELTS_SPEAKING,
      weaknesses: [{ area: "fluency", label: "Pace and pauses", severity: "moderate", evidence: "e", lessons: [], practice: [] }],
      grammarCorrections: [],
      checks: [],
      language: emptyLanguage,
    });
    expect(speaking).not.toBeNull();
    expect(speaking!.steps[speaking!.steps.length - 1]).toContain("aloud");
  });
});

// ---------------------------------------------------------------------------
// Service: task-prompt free evaluations, overview rollup, human review
// ---------------------------------------------------------------------------

describe("evaluation service: prompts, overview and human review (PROMPT 52)", () => {
  beforeAll(async () => {
    setLlmProviderOverride(fakeEvaluator);
    const user = await db.user.create({
      data: { email: `eval52-${Date.now()}@talksy.app`, name: "Eval P52", passwordHash: "x:y", role: "student" },
    });
    fixtures.userId = user.id;
  });

  afterAll(async () => {
    setLlmProviderOverride(null);
    if (fixtures.userId) {
      await db.user.delete({ where: { id: fixtures.userId } }).catch(() => undefined);
    }
  });

  it("uses the supplied task prompt and drops the free-task limitation", async () => {
    const outcome = await createEvaluation(fixtures.userId!, {
      evaluatorKey: "IELTS_WRITING_ACADEMIC_T2",
      taskPrompt: "Some people think universities should only offer places to students with the highest exam marks. Discuss both views and give your own opinion.",
      text: `Universities select students in many different ways, and the fairest method is debated everywhere. In my opinion, academic results matter, but they should not be the only criterion.

Supporters of exam-based admission argue that scores are objective and comparable. Because every candidate sits the same paper, universities can rank applicants fairly, which protects the process from bias. Furthermore, demanding high marks ensures that students can cope with difficult courses.

However, other abilities matter too. A student with slightly lower grades but strong motivation may contribute more to a university community than a brilliant but passive candidate. Many successful professionals, for example, were average students who later developed excellent practical skills through clubs, volunteering and work experience.

In my view, a balanced approach is best: universities should consider exam results first, but they should also interview candidates or review their portfolios, because numbers alone cannot capture creativity, persistence or kindness.

In conclusion, while high exam marks guarantee a basic level of academic skill, admissions teams should weigh personal qualities alongside them, and I believe this produces both stronger students and a fairer system.`,
      transcriptSource: "typed",
    });
    expect(outcome.ok).toBe(true);
    if (!outcome.ok) return;
    fixtures.evaluationIds = [...(fixtures.evaluationIds ?? []), outcome.evaluation.id];
    expect(outcome.evaluation.evaluatorKey).toBe("IELTS_WRITING_ACADEMIC_T2");
    expect(outcome.evaluation.result.limitations.some((l) => l.includes("Free evaluation"))).toBe(false);
    expect(outcome.evaluation.result.modelResponse).not.toBeNull();
    expect(outcome.evaluation.review.status).toBe("not_reviewed");
  });

  it("marks an evaluation human-reviewed without touching the AI report, and resets on revision", async () => {
    const base = await createEvaluation(fixtures.userId!, {
      evaluatorKey: "IELTS_SPEAKING",
      taskPrompt: "Describe a skill you learned recently.",
      text: "I recently learned to bake bread at home, which was harder than I expected because the dough needs careful attention, and my first two loaves were dense, but after watching tutorials I understood the kneading rhythm and now my bread rises properly every weekend.",
      transcriptSource: "browser-stt",
      audioSec: 35,
    });
    expect(base.ok).toBe(true);
    if (!base.ok) return;
    fixtures.evaluationIds = [...(fixtures.evaluationIds ?? []), base.evaluation.id];

    // Short notes are refused.
    const short = await reviewEvaluation(base.evaluation.id, { role: "teacher" }, "ok");
    expect(short.ok).toBe(false);

    const reviewed = await reviewEvaluation(base.evaluation.id, { role: "teacher" }, "Good fluency overall — watch the long third sentence and use 'which' less. The band estimate looks about right to me.");
    expect(reviewed.ok).toBe(true);
    if (!reviewed.ok) return;
    expect(reviewed.evaluation.review.status).toBe("human_reviewed");
    expect(reviewed.evaluation.review.reviewerRole).toBe("teacher");
    expect(reviewed.evaluation.review.reviewerNote).toContain("Good fluency");
    expect(reviewed.evaluation.review.reviewedAt).not.toBeNull();
    // The AI report was not altered by the review.
    expect(reviewed.evaluation.result.overall).toEqual(base.evaluation.result.overall);

    // A revision starts its own review lifecycle (not inherited).
    const revision = await reviseEvaluation(fixtures.userId!, base.evaluation.id, {
      text: "I recently learned to bake bread at home. It was harder than I expected because the dough needs careful attention. My first two loaves were dense. After watching tutorials, I understood the kneading rhythm, and now my bread rises properly every weekend.",
      transcriptSource: "typed",
    });
    expect(revision.ok).toBe(true);
    if (!revision.ok) return;
    fixtures.evaluationIds = [...(fixtures.evaluationIds ?? []), revision.evaluation.id];
    expect(revision.evaluation.review.status).toBe("not_reviewed");
  });

  it("returns an overview with per-evaluator improvement rollups", async () => {
    // The previous tests created: one ACADEMIC_T2 root, one SPEAKING root + revision.
    const overview = await evaluationOverview(fixtures.userId!);
    const t2 = overview.improvement.find((i) => i.evaluatorKey === "IELTS_WRITING_ACADEMIC_T2");
    expect(t2).toBeDefined();
    expect(t2!.attempts).toBe(1);
    expect(t2!.chains).toBe(1);
    expect(t2!.label).toContain("Academic Task 2");
    expect(t2!.firstOverall).not.toBeNull();

    const speaking = overview.improvement.find((i) => i.evaluatorKey === "IELTS_SPEAKING");
    expect(speaking).toBeDefined();
    expect(speaking!.attempts).toBe(2);
    expect(speaking!.chains).toBe(1);
    expect(overview.evaluations.length).toBeGreaterThan(0);
    expect(overview.totalEvaluations).toBeGreaterThanOrEqual(3);
    // Every rollup row carries the never-an-official-score unit context.
    expect(["band", "task level", "level", "% accurate"]).toContain(speaking!.unit);
  });
});
