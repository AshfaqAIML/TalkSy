/// <reference types="bun-types" />
/**
 * IELTS Speaking Masterclass tests (PROMPT 47).
 *
 *   1. Bank integrity: all 51 authored items pass validateSpeakingBank
 *      (seven-element cue-card payload, Part 1 set structure, Part 3
 *      escalation, originality, practice-library dimensions).
 *   2. Coverage: 19/19 Part 1 topics, 11/11 flagship families, 11/11
 *      practice families, 10 Part 3 sets — plus the five organisation
 *      dimensions (part, topic, difficulty, proficiency, skill).
 *   3. Safe projection: model answers, guidance, sample responses,
 *      planning notes, analyses and requirement keywords never reach the
 *      client payload.
 *   4. Accent-neutral contract: no bank item ties a national accent to a
 *      higher score (PROMPT 47 Part 5).
 *   5. Evaluation engine: every flagship sample response evaluates ≥ 7.0,
 *      every Part 1 weak/improved pair ranks weak < improved, the
 *      insufficient path refuses too-short transcripts, sentence
 *      corrections fire on spoken error patterns, pronunciation
 *      observations are replay checks (never verdicts), and estimates are
 *      labelled as estimates.
 *   6. Curriculum: the 69 masterclass lessons land in the authored module
 *      with the six chapters; the four v1 lessons are absorbed.
 *   7. Performance engine: aggregation + weakness-driven recommendations
 *      that resolve to authored lessons under their real titles.
 */

import { describe, expect, it } from "bun:test";
import {
  SPEAKING_BANK,
  SPEAKING_CUE_CARDS,
  SPEAKING_PART1_SETS,
  SPEAKING_PART3_SETS,
  SPEAKING_PRACTICE_CUE_CARDS,
  speakingBankStats,
  speakingItemBySlug,
  validateSpeakingBank,
} from "@/data/exams/ielts/speaking-bank";
import {
  SPEAKING_PART1_TOPICS,
  SPEAKING_CUE_FAMILIES,
  speakingItemPart,
} from "@/data/exams/ielts/speaking-bank/types";
import { module5Speaking } from "@/data/exams/ielts/m5-speaking";
import { setLlmProviderOverride, type LlmProvider } from "@/lib/llm";
import {
  countWords,
  evaluateSpeaking,
  minimumReliableWords,
  SPOKEN_ERROR_PATTERNS,
} from "@/lib/exams/speaking-bank/evaluate";
import { toSafeSpeakingItem } from "@/lib/exams/speaking-bank/service";
import {
  buildSpeakingPerformanceReport,
  SPEAKING_LESSONS,
  type PerformanceAttemptRow,
} from "@/lib/exams/speaking-bank/performance";

// The AI commentary layer is enrichment-only; tests pin the deterministic
// report by making the provider deterministically unavailable.
const unavailable: LlmProvider = {
  name: "test-unavailable",
  async complete() {
    throw new Error("provider unavailable in tests");
  },
  async *stream() {
    throw new Error("provider unavailable in tests");
  },
};
setLlmProviderOverride(unavailable);

describe("IELTS Speaking Masterclass — practice bank (PROMPT 47, Parts 2–3, 8; PROMPT 54 expansion)", () => {
  it("all one hundred and fifty items pass integrity validation", () => {
    const issues = validateSpeakingBank();
    expect(issues).toEqual([]);
  });

  it("covers every taught topic, every description family and all five organisation dimensions", () => {
    const stats = speakingBankStats();
    // PROMPT 54 target: 150 speaking prompts.
    expect(stats.total).toBe(150);
    expect(stats.part1).toBe(38);
    expect(stats.part2Flagship).toBe(11);
    expect(stats.part2Practice).toBe(61);
    expect(stats.part3).toBe(40);
    expect(stats.topicsCovered).toBe(19);
    expect(stats.familiesCovered).toBe(11);

    // The five PART 8 dimensions are present on every single item.
    for (const item of SPEAKING_BANK) {
      expect([1, 2, 3]).toContain(speakingItemPart(item));
      expect([1, 2, 3, 4, 5]).toContain(item.difficulty);
      expect(["foundation", "intermediate", "advanced"]).toContain(item.proficiency);
      expect(["fluency", "development", "lexical", "grammar", "pronunciation", "interaction"]).toContain(item.skill);
    }

    // Difficulty and proficiency actually spread.
    expect(new Set(SPEAKING_BANK.map((i) => i.difficulty)).size).toBeGreaterThanOrEqual(3);
    expect(Object.keys(stats.byProficiency).length).toBe(3);
    expect(Object.keys(stats.bySkill).length).toBeGreaterThanOrEqual(4);
  });

  it("every Part 1 topic and cue-card family is covered by the PROMPT 54 contract", () => {
    // PROMPT 54: every taught topic carries its flagship round plus one
    // second interview round (1–2 sets, never three).
    const topicCounts = new Map<string, number>();
    for (const set of SPEAKING_PART1_SETS) {
      topicCounts.set(set.topic, (topicCounts.get(set.topic) ?? 0) + 1);
    }
    for (const topic of SPEAKING_PART1_TOPICS) {
      const n = topicCounts.get(topic) ?? 0;
      expect(n).toBeGreaterThanOrEqual(1);
      expect(n).toBeLessThanOrEqual(2);
    }
    // Flagship cue cards stay exactly one per family.
    const flagship = SPEAKING_CUE_CARDS.map((c) => c.family);
    expect([...flagship].sort()).toEqual([...SPEAKING_CUE_FAMILIES].sort());
    // The practice layer covers every family at least once (61 cards).
    const practiceFamilies = new Set(SPEAKING_PRACTICE_CUE_CARDS.map((c) => c.family));
    for (const family of SPEAKING_CUE_FAMILIES) {
      expect(practiceFamilies.has(family)).toBe(true);
    }
  });

  it("flagship cue cards carry the complete seven-element teaching payload", () => {
    for (const card of SPEAKING_CUE_CARDS) {
      expect(card.bullets).toHaveLength(3);
      expect(card.extension).toMatch(/^and explain/i);
      expect(card.planningNotes.length).toBeGreaterThanOrEqual(3);
      expect(card.vocabularySuggestions.length).toBeGreaterThanOrEqual(8);
      expect(countWords(card.sampleResponse.transcript)).toBeGreaterThanOrEqual(220);
      expect(card.sampleResponse.wordCount).toBe(countWords(card.sampleResponse.transcript));
      expect(card.sampleResponse.bandEstimate).toMatch(/estimate/i);
      expect(card.responseAnalysis.length).toBeGreaterThanOrEqual(5);
      expect(card.alternativeApproaches.length).toBeGreaterThanOrEqual(3);
      expect(card.followUp.roundingQuestions.length).toBeGreaterThanOrEqual(2);
      expect(card.followUp.practice.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("practice cue cards never carry a model — independent practice only", () => {
    for (const card of SPEAKING_PRACTICE_CUE_CARDS) {
      const serialised = JSON.stringify(card);
      expect(serialised).not.toContain("modelAnswer");
      expect(serialised).not.toContain("sampleResponse");
      expect(card.vocabularyHints.length).toBeGreaterThanOrEqual(6);
      expect(card.roundingQuestions.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("Part 3 sets escalate accessible → abstract → speculative", () => {
    const order = { accessible: 0, abstract: 1, speculative: 2 };
    for (const set of SPEAKING_PART3_SETS) {
      expect(set.questions).toHaveLength(4);
      const levels = set.questions.map((q) => order[q.level]);
      for (let i = 1; i < levels.length; i++) {
        expect(levels[i]).toBeGreaterThanOrEqual(levels[i - 1]);
      }
      expect(set.questions[set.questions.length - 1].level).toBe("speculative");
    }
  });

  it("safe projection strips every teaching payload and answer-side hint", () => {
    for (const item of SPEAKING_BANK) {
      const safe = toSafeSpeakingItem(item);
      const serialised = JSON.stringify(safe);
      expect(serialised).not.toContain('"modelAnswer"');
      expect(serialised).not.toContain('"weak"');
      expect(serialised).not.toContain('"improved"');
      expect(serialised).not.toContain('"guidance"');
      expect(serialised).not.toContain('"expected"');
      expect(serialised).not.toContain('"sampleResponse"');
      expect(serialised).not.toContain('"planningNotes"');
      expect(serialised).not.toContain('"responseAnalysis"');
      expect(serialised).not.toContain('"requirements"');
      expect(serialised).not.toContain('"keywords"');
      expect(serialised).not.toContain("Band 8.0 estimate");
      // The questions or card itself travel (they ARE the task).
      if (item.kind === "part1" || item.kind === "part3") {
        expect(safe.questions?.length).toBe(item.questions.length);
        expect(safe.questions?.[0].question).toBe(item.questions[0].question);
      } else {
        expect(safe.card?.task).toBe(item.task);
        expect(safe.card?.bullets).toEqual(item.bullets);
      }
    }
  });

  it("is accent-neutral: no item ties a national accent to a higher score", () => {
    for (const item of SPEAKING_BANK) {
      const issues = JSON.stringify(item);
      // The forbidden claim: a named accent is worth more / required / better.
      expect(issues).not.toMatch(/(British|American) accent[^"!?.]*(higher|better|best|require|need|prefer|superior|more score)/i);
      expect(issues).not.toMatch(/(higher|better|best|superior) [^"!?.]*(British|American) accent/i);
    }
  });
});

describe("IELTS Speaking Masterclass — evaluation engine (PROMPT 47, Part 7)", () => {
  it("scores every flagship sample response as a complete evaluation ≥ 7.0", async () => {
    for (const card of SPEAKING_CUE_CARDS) {
      const result = await evaluateSpeaking(card, {
        answers: [card.sampleResponse.transcript],
        durationSec: card.sampleResponse.durationEstimateSec,
      });
      expect(result.status).toBe("complete");
      expect(result.criteria.map((c) => c.name)).toEqual([
        "Fluency and Coherence",
        "Lexical Resource",
        "Grammatical Range and Accuracy",
        "Pronunciation",
      ]);
      expect(result.overall).toBeGreaterThanOrEqual(7.0);
      expect(result.overallLabel).toContain("educational estimate");
      for (const criterion of result.criteria) {
        expect(criterion.score).toBeGreaterThanOrEqual(4);
        expect(criterion.score).toBeLessThanOrEqual(9);
        expect((criterion.score * 2) % 1).toBe(0); // 0.5 steps
        expect(criterion.feedback.length).toBeGreaterThan(0);
      }
    }
  }, 60000);

  it("ranks every Part 1 weak answer set below the improved set", async () => {
    for (const set of SPEAKING_PART1_SETS) {
      const weakResult = await evaluateSpeaking(set, {
        answers: set.questions.map((q) => q.weak),
        durationSec: 20,
      });
      const improvedResult = await evaluateSpeaking(set, {
        answers: set.questions.map((q) => q.improved),
        durationSec: 60,
      });
      expect(improvedResult.overall).toBeGreaterThan(weakResult.overall);
    }
  }, 60000);

  it("refuses too-short transcripts with the insufficient path", async () => {
    const card = speakingItemBySlug("ielts-sb-p2-people")!;
    const result = await evaluateSpeaking(card, { answers: ["I know a person."], durationSec: 5 });
    expect(result.status).toBe("insufficient");
    expect(result.criteria).toHaveLength(0);
    expect(result.improvements[0]).toContain(String(minimumReliableWords(card)));
  });

  it("produces sentence corrections for spoken error patterns", async () => {
    const set = speakingItemBySlug("ielts-sb-p1-work")!;
    if (set.kind !== "part1") throw new Error("expected part1 set");
    const messy = set.questions.map(
      () =>
        "I am agree with this, and I collect many informations since three years at the weekend, so that is why I like it.",
    );
    const result = await evaluateSpeaking(set, { answers: messy, durationSec: 90 });
    expect(result.status).toBe("complete");
    expect(result.extras.sentenceCorrections.length).toBeGreaterThanOrEqual(3);
    for (const correction of result.extras.sentenceCorrections) {
      expect(correction.reason.length).toBeGreaterThan(5);
      expect(correction.right).not.toBe(correction.wrong);
    }
  });

  it("pronunciation feedback arrives as honest replay checks, never verdicts", async () => {
    const card = speakingItemBySlug("ielts-sb-p2-places")!;
    if (card.kind !== "cue-card") throw new Error("expected cue card");
    const result = await evaluateSpeaking(card, {
      answers: [card.sampleResponse.transcript],
      durationSec: card.sampleResponse.durationEstimateSec,
    });
    const pron = result.criteria.find((c) => c.key === "pron")!;
    expect(pron.feedback.some((f) => f.text.includes("cannot hear"))).toBe(true);
    expect(result.disclaimers.join(" ")).toContain("cannot hear your recording");
    for (const observation of result.extras.pronunciationObservations) {
      expect(observation.checkThis.length).toBeGreaterThan(10);
    }
    // The accent-neutral stance is restated on every pronunciation report.
    expect(pron.feedback.some((f) => f.text.includes("ANY accent"))).toBe(true);
  });

  it("fluency feedback and improved-response examples are always present", async () => {
    const set = speakingItemBySlug("ielts-sb-p1-hometown")!;
    if (set.kind !== "part1") throw new Error("expected part1 set");
    const thinAnswers = set.questions.map((q) => q.weak);
    const result = await evaluateSpeaking(set, { answers: thinAnswers.map((w) => `${w} because it is nice.`), durationSec: 45 });
    expect(result.status).toBe("complete");
    expect(result.extras.fluencyFeedback.length).toBeGreaterThanOrEqual(3);
    expect(result.extras.improvedResponses.length).toBeGreaterThanOrEqual(1);
  });

  it("evidence is quoted verbatim from the transcript", async () => {
    const card = speakingItemBySlug("ielts-sb-p2-events")!;
    if (card.kind !== "cue-card") throw new Error("expected cue card");
    const result = await evaluateSpeaking(card, {
      answers: [card.sampleResponse.transcript],
      durationSec: card.sampleResponse.durationEstimateSec,
    });
    for (const criterion of result.criteria) {
      if (criterion.evidence[0]) {
        expect(card.sampleResponse.transcript).toContain(criterion.evidence[0].quote.slice(0, 40));
      }
    }
  });

  it("the spoken error pattern catalogue detects its own patterns", () => {
    const samples: [RegExp, string][] = [
      [SPOKEN_ERROR_PATTERNS.find((p) => p.id === "agree")!.test, "Honestly, I am agree that reading matters."],
      [SPOKEN_ERROR_PATTERNS.find((p) => p.id === "informations")!.test, "I found many useful informations there."],
      [SPOKEN_ERROR_PATTERNS.find((p) => p.id === "did-went")!.test, "Last summer we did went to the coast."],
      [SPOKEN_ERROR_PATTERNS.find((p) => p.id === "in-weekend")!.test, "I usually relax in the weekend."],
    ];
    for (const [re, sentence] of samples) {
      expect(re.test(sentence)).toBe(true);
    }
    // And does not fire on clean sentences.
    expect(SPOKEN_ERROR_PATTERNS.find((p) => p.id === "agree")!.test.test("I agree that reading matters.")).toBe(false);
    expect(SPOKEN_ERROR_PATTERNS.find((p) => p.id === "did-went")!.test.test("We did go to the coast.")).toBe(false);
  });
});

describe("IELTS Speaking Masterclass — curriculum (PROMPT 47, Parts 1–5)", () => {
  it("delivers the 69-lesson masterclass across six chapters", () => {
    expect(module5Speaking.slug).toBe("module-5-speaking");
    const bySlug = new Map(module5Speaking.units.map((u) => [u.slug, u.lessons.length]));
    expect(bySlug.get("speaking-foundations")).toBe(10);
    expect(bySlug.get("speaking-part1-topics")).toBe(19);
    expect(bySlug.get("speaking-part2-craft")).toBe(8);
    expect(bySlug.get("speaking-part2-cards")).toBe(11);
    expect(bySlug.get("speaking-part3-discussion")).toBe(11);
    expect(bySlug.get("speaking-pronunciation")).toBe(10);
    const total = module5Speaking.units.reduce((a, u) => a + u.lessons.length, 0);
    expect(total).toBe(69);
  });

  it("absorbs the four v1 lessons — their slugs no longer appear", () => {
    const slugs = new Set(module5Speaking.units.flatMap((u) => u.lessons.map((l) => l.slug)));
    for (const old of ["ielts-speaking-overview", "ielts-speaking-part1", "ielts-speaking-part2", "ielts-speaking-part3"]) {
      expect(slugs.has(old)).toBe(false);
    }
  });

  it("the nineteen Part 1 topic lessons match the bank's nineteen topics", () => {
    const topicLessons = module5Speaking.units.find((u) => u.slug === "speaking-part1-topics")!.lessons;
    expect(topicLessons).toHaveLength(19);
    // Every bank Part 1 set has a matching topic lesson by construction of
    // the shared topic keys; assert a few spot pairs.
    expect(topicLessons.some((l) => l.slug === "ielts-speaking-t-hometown")).toBe(true);
    expect(topicLessons.some((l) => l.slug === "ielts-speaking-t-social")).toBe(true);
    expect(topicLessons.some((l) => l.slug === "ielts-speaking-t-routines")).toBe(true);
  });
});

describe("IELTS Speaking Masterclass — performance engine (Parts 6–7)", () => {
  const baseRow = (over: Partial<PerformanceAttemptRow>): PerformanceAttemptRow => ({
    id: `row-${Math.random().toString(36).slice(2)}`,
    itemSlug: "ielts-sb-p1-hometown",
    part: 1,
    kind: "part1",
    family: "hometown",
    mode: "simulation",
    version: 1,
    wordCount: 120,
    durationSec: 120,
    wpm: 120,
    overall: 6.0,
    criteria: JSON.stringify({ fc: { score: 5.0 }, lr: { score: 6.0 }, gra: { score: 6.0 }, pron: { score: 6.5 } }),
    createdAt: new Date(),
    ...over,
  });

  it("aggregates attempts, criterion averages, revision chains and discipline", () => {
    const rows = [
      baseRow({ version: 1, overall: 5.5, itemSlug: "ielts-sb-p1-hometown" }),
      baseRow({ version: 2, overall: 6.5, itemSlug: "ielts-sb-p1-hometown" }),
      baseRow({ part: 2, kind: "cue-card", family: "people", itemSlug: "ielts-sb-p2-people", durationSec: 45, wpm: 60 }),
      baseRow({ part: 3, kind: "part3", family: "technology and daily life", itemSlug: "ielts-sb-p3-technology" }),
    ];
    const report = buildSpeakingPerformanceReport(rows);
    expect(report.attempts).toBe(4);
    expect(report.criterionAvg).toHaveLength(4);
    expect(report.byPart.map((p) => p.part)).toEqual([1, 2, 3]);
    expect(report.revisionChains).toHaveLength(1);
    expect(report.revisionChains[0].improved).toBe(true);
    expect(report.revisionChains[0].delta).toBe(1.0);
    // The 45-second Part 2 turn is flagged as short.
    expect(report.shortTurns).toBe(1);
  });

  it("recommends lessons that resolve to real authored titles", () => {
    const rows = [
      baseRow({ overall: 4.5, criteria: JSON.stringify({ fc: { score: 4.0 }, lr: { score: 5.0 }, gra: { score: 4.5 }, pron: { score: 5.0 } }) }),
      baseRow({ overall: 4.0, part: 2, kind: "cue-card", family: "places", itemSlug: "ielts-sb-p2-places", durationSec: 40, criteria: JSON.stringify({ fc: { score: 4.0 }, lr: { score: 4.5 }, gra: { score: 4.0 }, pron: { score: 4.5 } }) }),
    ];
    const report = buildSpeakingPerformanceReport(rows);
    expect(report.recommendations.length).toBeGreaterThan(0);
    for (const rec of report.recommendations) {
      // Real lesson, real title, no raw-slug fallback (the PROMPT 44 lesson).
      expect(SPEAKING_LESSONS[rec.lessonSlug]).toBe(rec.lessonTitle);
      expect(module5Speaking.units.some((u) => u.lessons.some((l) => l.slug === rec.lessonSlug && l.title === rec.lessonTitle))).toBe(true);
    }
    // A weak FC average recommends the fluency lesson; a short Part 2 turn
    // recommends Speaking at length.
    const slugs = report.recommendations.map((r) => r.lessonSlug);
    expect(slugs).toContain("ielts-speaking-fluency");
    expect(slugs).toContain("ielts-speaking-at-length");
  });

  it("every SPEAKING_LESSONS entry exists in the authored module under that exact title", () => {
    const authored = new Map(
      module5Speaking.units.flatMap((u) => u.lessons.map((l) => [l.slug, l.title] as const)),
    );
    for (const [slug, title] of Object.entries(SPEAKING_LESSONS)) {
      expect(authored.get(slug)).toBe(title);
    }
    // The map is complete: every authored speaking lesson is mapped.
    expect(Object.keys(SPEAKING_LESSONS)).toHaveLength(authored.size);
  });
});
