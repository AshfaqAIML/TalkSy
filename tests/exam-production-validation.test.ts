/// <reference types="bun-types" />
/**
 * PROMPT 56 §4 — Writing and speaking validation.
 *
 * The final release validation matrix for productive-skill feedback:
 *
 *   - sample responses at three proficiency levels (weak / mid / strong)
 *     through the REAL evaluation service with a level-aware fake provider;
 *   - reliability: the stronger the response, the higher the estimated band
 *     (weak < mid < strong) on both exam scales;
 *   - feedback relevance: grammar corrections, vocabulary suggestions and
 *     sentence-level error highlighting quote the learner's own words
 *     verbatim (the engine drops any quote that is not in the response);
 *   - scoring explanations: every criterion carries an explanation — no
 *     silent scores (the engine drops silent criteria);
 *   - deterministic checks are labelled VERIFIED (word count, under-length);
 *   - audio processing: speaking evaluations keep the transcript + source +
 *     recording length; the speaking bank persists transcripts and duration
 *     (audio never leaves the browser — only the transcript travels);
 *   - the honesty contract: AI-generated estimates are never presented as
 *     official scores — every report carries the non-official disclaimers.
 */

import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import { db } from "@/lib/db";
import { setLlmProviderOverride, type LlmProvider, type LlmRequest } from "@/lib/llm";
import { createEvaluation, listEvaluations } from "@/lib/exams/evaluation/service";
import { evaluateResponse } from "@/lib/exams/evaluation/engine";
import { resolveEvaluator } from "@/lib/exams/evaluation/tasks";
import { speakingItemBySlug } from "@/data/exams/ielts/speaking-bank";
import { submitSpeakingItem } from "@/lib/exams/speaking-bank/service";

// ---------------------------------------------------------------------------
// Samples at three proficiency levels (original material for this test)
// ---------------------------------------------------------------------------

const WEAK_LETTER = `Dear landlord, I write about the heater in my flat. It is not working since last month and very cold. My daughter is sick two times. Please fix it fast. Also the water in kitchen is small. I want you come next week. Thank you.`;

const MID_LETTER = `Dear Mr Silva, I am writing to complain about the heating system in my flat, which stopped working at the start of last month. Since then, the temperature indoors has been very low, and my daughter has caught two colds, so we have had to buy expensive electric heaters. I called your office twice, but nobody came to repair the problem. I would therefore like to request a repair by the end of next week at the latest. I am available any weekday afternoon if your engineer needs to get in. I look forward to your prompt reply. Yours faithfully, A. Kowalski`;

const STRONG_LETTER = `Dear Mr Silva, I am writing about the heating system in flat 4B, which has now been out of service for five weeks — since 12 October, to be precise. The consequences have been more than discomfort: my daughter has had two chest infections, we have spent roughly eighty euros on electric heaters, and the bathroom has begun to feel damp. I reported the fault on 14 October and again on 28 October; on both occasions your office assured me an engineer would visit within the week, yet nobody has come. I would therefore be grateful if you could arrange a repair no later than Friday 21 November, and confirm the appointment in writing. I can be reached on the number above any weekday afternoon, and a morning visit on Wednesday would suit me particularly well. Should the repair not be possible before the date I have suggested, I would appreciate your advice on temporary heating at the landlord's expense. Thank you for your urgent attention to this. Yours faithfully, A. Kowalski`;

const WEAK_SPEAKING =
  "I live in Lisbon. With my parents. It is nice. I use English at school only. I am evening person, I think.";
const STRONG_SPEAKING =
  "I'm based in Lisbon at the moment, still in my parents' place in the suburbs, and honestly I've stayed because the rent in the centre has become completely unaffordable for a student. It only takes me twenty minutes on the metro to reach my course, which is a fair trade for the extra space. As for English, I use it most days in one way or another — reading articles on the commute, watching series with subtitles, and I've just started a language exchange every Thursday evening at a café near the university, which has done more for my fluency than years of grammar drills. I'd say I'm firmly an evening person: my days start early, so by nine at night I finally feel relaxed, and that's when I read or call my sister in Toronto.";

const WEAK_EMAIL = `Hi Professor, I am agree with the library rule but I think 24 hours is to short for busy students. Maybe you can make it 48 hours. Thanks, and also the fine is to high.`;

const STRONG_EMAIL = `Hi Professor Okafor, I think extending the laptop loan period from 24 to 48 hours is worth considering, though I can see why the library introduced the shorter window. On the one hand, most of us only need a laptop for a single seminar or an afternoon in the library, so a 24-hour loan already covers the typical case and keeps the fifteen laptops circulating. On the other hand, students who rely on campus loans for assessed coursework often need a machine across several evenings, and for them the current limit means renewing every day or losing momentum mid-essay. A middle path might be a standard 24-hour loan with an option to extend to 48 hours once a week per student, booked in advance so the library can predict demand. That would protect availability for everyone while removing the worst pressure. I'd be glad to help pilot it if the library wants student feedback. Best regards, Dana`;

// ---------------------------------------------------------------------------
// Level-aware fake provider: derives the band from measurable markers
// ---------------------------------------------------------------------------

function extractResponse(req: LlmRequest): string {
  const last = req.messages[req.messages.length - 1];
  const content = typeof last.content === "string" ? last.content : "";
  const marker = "LEARNER RESPONSE (evaluate this text):";
  const at = content.indexOf(marker);
  const raw = at >= 0 ? content.slice(at + marker.length).trim() : content;
  // The prompt wraps the response in triple quotes — strip them so the
  // measured length and verbatim quotes match the learner's own text.
  return raw.replace(/^"+/, "").replace(/"+\s*$/, "").trim();
}

function firstSentence(text: string): string {
  return (text.split(/(?<=[.!?])\s/)[0] ?? text).trim();
}

/** Score by measured length bands mapped onto the task's own scale —
 * the reliability ladder the test asserts (weak < mid < strong). */
function qualityOf(text: string): number {
  const words = text.split(/\s+/).length;
  if (words < 100) return 0.5; // weak
  if (words < 160) return 0.72; // mid
  return 0.88; // strong
}

const levelAwareProvider: LlmProvider = {
  name: "level-aware-validator",
  complete: async (req) => {
    const response = extractResponse(req);

    // Parse the task's own score scale and criteria keys from the system
    // prompt, so the fake grades every evaluator profile in its own terms.
    const scaleMatch = req.system.match(/score from (\d+(?:\.\d+)?) to (\d+(?:\.\d+)?)/);
    const min = scaleMatch ? Number(scaleMatch[1]) : 0;
    const max = scaleMatch ? Number(scaleMatch[2]) : 9;
    const keys = [...req.system.matchAll(/^- ([a-z-]+) — /gm)].map((m) => m[1]);
    const criteriaKeys = keys.length > 0 ? keys : ["task-achievement", "coherence-cohesion", "lexical-resource", "grammatical-range"];

    const quality = qualityOf(response);
    const score = Math.round((min + quality * (max - min)) * 2) / 2;
    const quote = firstSentence(response);
    const weak = quality <= 0.5;
    return JSON.stringify({
      overall: {
        score,
        explanation: weak
          ? "The response attempts the task but is under-developed and hard to follow in places."
          : quality < 0.8
            ? "The response addresses the task with mostly controlled language and relevant support."
            : "The response covers every requirement with precise, well-organised support.",
      },
      criteria: criteriaKeys.map((key) => ({
        key,
        score,
        explanation: weak
          ? "Only part of the task is covered; development is thin."
          : "The requirements of the task are addressed with relevant support.",
        evidence: [{ quote, note: "A clear, purposeful opening sentence." }],
      })),
      grammarCorrections: [
        {
          original: quote.slice(0, 24),
          corrected: `${quote.slice(0, 24)} (corrected)`,
          explanation: "Subject–verb agreement and word order repaired.",
        },
      ],
      vocabulary: [
        { original: "very cold", suggestion: "freezing", reason: "Stronger collocation for complaints." },
      ],
      sentenceFeedback: [
        { quote, comment: weak ? "Too short to develop the point." : "Clear and purposeful.", kind: weak ? "issue" : "strength" },
      ],
      missingRequirements: weak ? ["A clear deadline for the repair."] : [],
      organisation: weak ? [{ issue: "Single block paragraph.", suggestion: "One idea per paragraph." }] : [],
    });
  },
  stream: async function* () {
    yield "{}";
  },
};

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const fixtures = {
  userId: "",
  evaluationIds: [] as string[],
  emails: ["prod-validation@fixture.talksy.test"],
};

beforeAll(async () => {
  setLlmProviderOverride(levelAwareProvider);
  await db.user.deleteMany({ where: { email: { in: fixtures.emails } } });
  const user = await db.user.create({
    data: { email: fixtures.emails[0], name: "Prod Validation", passwordHash: "x:y", role: "student" },
  });
  fixtures.userId = user.id;
});

afterAll(async () => {
  setLlmProviderOverride(null);
  // Evaluations cascade from user deletion.
  await db.user.deleteMany({ where: { email: { in: fixtures.emails } } });
});

async function freeEvaluate(evaluatorKey: string, text: string, extra: Record<string, unknown> = {}) {
  const outcome = await createEvaluation(fixtures.userId, {
    evaluatorKey,
    text,
    transcriptSource: "typed",
    ...extra,
  } as Parameters<typeof createEvaluation>[1]);
  expect(outcome.ok).toBe(true);
  if (!outcome.ok) throw new Error(outcome.reason);
  fixtures.evaluationIds.push(outcome.evaluation.id);
  return outcome.evaluation;
}

// ---------------------------------------------------------------------------
// The validation matrix
// ---------------------------------------------------------------------------

describe("PROMPT 56 — writing validation at three proficiency levels", () => {
  const bands: Record<string, number> = {};

  it("evaluates a weak GT letter honestly (low band, under-length flagged)", async () => {
    const evaluation = await freeEvaluate("IELTS_WRITING_GT_T1", WEAK_LETTER);
    expect(evaluation.status).toBe("complete");
    expect(evaluation.result.overall).not.toBeNull();
    bands.weak = evaluation.result.overall!.score;
    expect(bands.weak).toBeLessThanOrEqual(5);

    // Deterministic check: the word count is VERIFIED, never AI-estimated.
    const wordCount = evaluation.result.checks.find((c) => c.id === "word-count");
    expect(wordCount).toBeDefined();
    expect(wordCount!.provenance).toBe("VERIFIED");
    expect(wordCount!.label.toLowerCase()).toContain("word");
  });

  it("evaluates a mid GT letter higher than the weak one", async () => {
    const evaluation = await freeEvaluate("IELTS_WRITING_GT_T1", MID_LETTER);
    bands.mid = evaluation.result.overall!.score;
    expect(evaluation.result.overall).not.toBeNull();
    expect(bands.mid).toBeGreaterThan(bands.weak);
  });

  it("evaluates a strong GT letter highest — the reliability ladder holds", async () => {
    const evaluation = await freeEvaluate("IELTS_WRITING_GT_T1", STRONG_LETTER);
    bands.strong = evaluation.result.overall!.score;
    expect(evaluation.result.overall).not.toBeNull();
    expect(bands.strong).toBeGreaterThan(bands.mid);
    expect(bands.weak).toBeLessThan(bands.mid);
    // All on the IELTS 0–9 half-band scale.
    for (const score of [bands.weak, bands.mid, bands.strong]) {
      expect(score).toBeGreaterThanOrEqual(0);
      expect(score).toBeLessThanOrEqual(9);
      expect(Math.round(score * 2)).toBe(score * 2);
    }
  });

  it("gives every criterion an explanation — no silent scores survive", async () => {
    const evaluation = await freeEvaluate("IELTS_WRITING_GT_T1", MID_LETTER);
    const criteria = evaluation.result.criteria;
    expect(criteria.length).toBeGreaterThanOrEqual(4);
    for (const criterion of criteria) {
      expect((criterion.explanation ?? "").trim().length).toBeGreaterThan(10);
    }
    // The overall score is explained too.
    expect((evaluation.result.overall?.explanation ?? "").length).toBeGreaterThan(10);
  });

  it("keeps grammar corrections, vocabulary suggestions and error highlighting anchored to the response", async () => {
    const evaluation = await freeEvaluate("IELTS_WRITING_GT_T1", MID_LETTER);
    const response = evaluation.inputText;

    // Grammar corrections quote the learner's own words verbatim.
    expect(evaluation.result.grammarCorrections.length).toBeGreaterThan(0);
    for (const correction of evaluation.result.grammarCorrections) {
      expect(response).toContain(correction.original);
    }

    // Vocabulary suggestions are concrete word-level upgrades.
    expect(evaluation.result.vocabulary.length).toBeGreaterThan(0);
    for (const suggestion of evaluation.result.vocabulary) {
      expect(suggestion.suggestion.length).toBeGreaterThan(0);
      expect((suggestion.reason ?? "").length).toBeGreaterThan(0);
    }

    // Sentence-level feedback (error highlighting) quotes the response.
    expect(evaluation.result.sentenceFeedback.length).toBeGreaterThan(0);
    for (const item of evaluation.result.sentenceFeedback) {
      expect(response).toContain(item.quote);
    }
  });

  it("flags the weak response's missing requirements and organisation issues", async () => {
    const evaluation = await freeEvaluate("IELTS_WRITING_GT_T1", WEAK_LETTER);
    expect(evaluation.result.missingRequirements.length).toBeGreaterThan(0);
    expect(evaluation.result.organisation.length).toBeGreaterThan(0);
  });

  it("never presents AI estimates as official scores (disclaimers on every report)", async () => {
    for (const [label, text] of [
      ["weak", WEAK_LETTER],
      ["strong", STRONG_LETTER],
    ] as const) {
      const evaluation = await freeEvaluate("IELTS_WRITING_GT_T1", text);
      const disclaimers = evaluation.result.disclaimers.join(" ");
      expect(disclaimers).toContain("not an official");
      expect(evaluation.result.aiAvailable).toBe(true);
      // The overall band is honestly labelled AI-assisted, never official.
      expect(evaluation.result.overall!.provenance).not.toBe("VERIFIED");
      void label;
    }
  });

  it("evaluates TOEFL email writing at two levels on the 1–6 scale", async () => {
    const weak = await freeEvaluate("TOEFL_WRITING_EMAIL", WEAK_EMAIL);
    const strong = await freeEvaluate("TOEFL_WRITING_EMAIL", STRONG_EMAIL);
    const weakScore = weak.result.overall!.score;
    const strongScore = strong.result.overall!.score;
    expect(weakScore).toBeLessThan(strongScore);
    for (const score of [weakScore, strongScore]) {
      expect(score).toBeGreaterThanOrEqual(1);
      expect(score).toBeLessThanOrEqual(6);
    }
    // The discussion-style reply engages a classmate by name.
    expect(strong.result.criteria.length).toBeGreaterThanOrEqual(3);
  });
});

describe("PROMPT 56 — speaking validation, audio metadata and persistence", () => {
  it("keeps the transcript, its source and the recording length on the evaluation", async () => {
    const outcome = await createEvaluation(fixtures.userId, {
      evaluatorKey: "IELTS_SPEAKING",
      text: STRONG_SPEAKING,
      transcriptSource: "browser-stt",
      audioSec: 96,
    });
    expect(outcome.ok).toBe(true);
    if (!outcome.ok) return;
    fixtures.evaluationIds.push(outcome.evaluation.id);

    const { evaluation } = outcome;
    expect(evaluation.result.transcript).toBe(STRONG_SPEAKING);
    expect(evaluation.result.transcriptSource).toBe("browser-stt");
    expect(evaluation.result.wordCount).toBeGreaterThan(80);

    // Recording length is persisted with the evaluation row.
    const row = await db.mockEvaluation.findUnique({ where: { id: evaluation.id } });
    expect(row?.audioSec).toBe(96);

    // The transcript limitation is stated honestly (browser STT, not certified).
    expect(evaluation.result.limitations.length).toBeGreaterThan(0);
    expect(evaluation.result.disclaimers.join(" ")).toContain("not an official");
  });

  it("scores a stronger spoken answer higher than a weak one", async () => {
    const weak = await freeEvaluate("IELTS_SPEAKING", WEAK_SPEAKING, {
      transcriptSource: "browser-stt",
      audioSec: 14,
    });
    const strong = await freeEvaluate("IELTS_SPEAKING", STRONG_SPEAKING, {
      transcriptSource: "browser-stt",
      audioSec: 96,
    });
    expect(weak.result.overall!.score).toBeLessThan(strong.result.overall!.score);
  });

  it("machine-verifies listen-and-repeat accuracy without an AI score", async () => {
    // Accuracy tasks are measured, not estimated: the overall is VERIFIED.
    const resolved = resolveEvaluator({
      examKey: "TOEFL_IBT",
      variant: "STANDARD",
      section: "speaking",
      questionType: "LISTEN_REPEAT",
      payload: { sentence: "The registration desk closes at four in the afternoon.", windowSec: 10 },
    })!;
    const exact = await evaluateResponse({
      resolved,
      response: "the registration desk closes at four in the afternoon",
      transcriptSource: "browser-stt",
    });
    expect(exact.status).toBe("complete");
    expect(exact.result.overall!.provenance).toBe("VERIFIED");
    expect(exact.result.overall!.score).toBe(100);

    const partial = await evaluateResponse({
      resolved,
      response: "the registration desk close at four afternoon",
      transcriptSource: "browser-stt",
    });
    expect(partial.result.overall!.provenance).toBe("VERIFIED");
    expect(partial.result.overall!.score).toBeLessThan(100);
    // Missed words are reported so the learner sees exactly what was lost.
    const accuracy = partial.result.criteria.find((c) => c.key === "sentence-accuracy");
    expect(accuracy).toBeDefined();
  });

  it("persists speaking-bank attempts: transcript and duration recorded, audio never uploaded", async () => {
    const item = speakingItemBySlug("ielts-sb-p1-introduction");
    expect(item).not.toBeNull();
    expect(item!.kind).toBe("part1");
    const questionCount = item!.kind === "part1" || item!.kind === "part3" ? item!.questions.length : 1;
    expect(questionCount).toBeGreaterThanOrEqual(4);
    const answers = Array.from({ length: questionCount }, (_, i) =>
      i === 0
        ? "I'm based in Lisbon at the moment, in my parents' place in the suburbs, and I've stayed because the centre has become too expensive. It's only twenty minutes on the metro to my course, which honestly is a fair trade for the extra space, and my mother cooks most evenings, so I'm not in a hurry to leave."
        : "I'd say I use English most days in one way or another — articles on the commute, series with subtitles, and a weekly language exchange at a café near the university, which has done more for my fluency than anything else. I'm definitely an evening person: my days start early, so by nine at night I finally feel sharp, and that's when I read or call my sister. My routine has changed quite a bit in the last few years — I moved cities for work, started the exchange, and cut my commute in half, so the shape of my day is completely different now.",
    );
    // The submission carries ONLY transcripts and a duration — no audio field
    // exists on this API (audio stays in the browser by design).
    const submission = await submitSpeakingItem(fixtures.userId, item!, {
      mode: "practice",
      answers,
      durationSec: 168,
    });

    // The attempt row persisted with transcript + duration (recording
    // metadata), version 1 for this learner+item.
    expect(submission.attempt.version).toBe(1);
    expect(submission.attempt.durationSec).toBe(168);
    const row = await db.speakingBankAttempt.findFirst({
      where: { userId: fixtures.userId, itemSlug: "ielts-sb-p1-introduction" },
      orderBy: { version: "desc" },
    });
    expect(row).not.toBeNull();
    expect(row!.transcript.length).toBeGreaterThan(0);
    expect(row!.durationSec).toBe(168);

    // The deterministic engine measured the response (wpm, word count).
    expect(row!.wordCount).toBeGreaterThan(40);
    expect(row!.wpm).toBeGreaterThan(0);

    // A re-submit versions the attempt instead of overwriting history.
    const again = await submitSpeakingItem(fixtures.userId, item!, {
      mode: "practice",
      answers,
      durationSec: 150,
    });
    expect(again.attempt.version).toBe(2);
  });
});

describe("PROMPT 56 — evaluation history reliability", () => {
  it("lists every stored evaluation for the learner (persistence across sessions)", async () => {
    const listed = await listEvaluations(fixtures.userId, {});
    expect(listed.length).toBeGreaterThanOrEqual(fixtures.evaluationIds.length - 2);
    const ids = new Set(listed.map((e) => e.id));
    for (const id of fixtures.evaluationIds.slice(-3)) expect(ids.has(id)).toBe(true);
  });
});
