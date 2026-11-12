/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import {
  measureTranscript,
  wordsPerMinute,
  fillersPerMinute,
} from "@/lib/speaking/measure";
import {
  gradeSpeakingAttempt,
  selfAssessedAttempt,
  scoreMatch,
  gradePronunciationMatch,
  OPEN_PASS_SCORE,
  MATCH_PASS_SCORE,
} from "@/lib/speaking/feedback";
import {
  scriptedPartnerReply,
  measureConversation,
  fallbackConversationFeedback,
  buildPartnerSystemPrompt,
  coercePublic,
} from "@/lib/speaking/conversation";
import { getSpeakingActivity } from "@/data/speaking";
import { conversationScenarios } from "@/data/speaking/scenarios";
import type { SpeakingActivity } from "@/data/speaking/types";

const activity = (slug: string): SpeakingActivity => {
  const found = getSpeakingActivity(slug);
  if (!found) throw new Error(`missing activity ${slug}`);
  return found;
};

describe("transcript measurement", () => {
  it("counts words, sentences and estimates unpunctuated speech", () => {
    const punctuated = measureTranscript("I am Sam. I am from Peru. I like tea.");
    expect(punctuated.wordCount).toBe(10);
    expect(punctuated.sentenceCount).toBe(3);
    expect(punctuated.sentenceCountEstimated).toBe(false);

    const spoken = measureTranscript("i wake up at seven then i eat breakfast and then i go to work");
    expect(spoken.sentenceCountEstimated).toBe(true);
    expect(spoken.sentenceCount).toBeGreaterThanOrEqual(2);
  });

  it("finds fillers", () => {
    const metrics = measureTranscript("um I think uh maybe you know it is kind of nice");
    expect(metrics.fillerCount).toBeGreaterThanOrEqual(4);
    expect(metrics.fillersFound).toContain("um");
    expect(metrics.fillersFound).toContain("you know");
  });

  it("detects repeated phrases", () => {
    const metrics = measureTranscript(
      "I want to say that I want to say that again and again",
    );
    expect(metrics.repeatedPhrases.some((p) => p.includes("i want to"))).toBe(true);
  });

  it("computes pace from duration", () => {
    expect(wordsPerMinute(100, 60_000)).toBe(100);
    expect(wordsPerMinute(100, 0)).toBe(0);
    expect(fillersPerMinute(5, 60_000)).toBe(5);
    expect(fillersPerMinute(5, 0)).toBe(0);
  });
});

describe("match task grading (repeat / read aloud)", () => {
  const task = activity("repeat-a-word").tasks[0];
  if (task.type !== "match") throw new Error("expected match task");

  it("scores an exact take as a full match", () => {
    const result = gradeSpeakingAttempt(task, "Hello", 2000, true);
    expect(result.overall).toBe(100);
    expect(result.passed).toBe(true);
    expect(result.measured.intelligibility?.available).toBe(true);
    expect(result.measured.intelligibility?.matchScore).toBe(1);
  });

  it("penalises missing and extra words honestly", () => {
    const result = gradeSpeakingAttempt(task, "yellow banana", 3000, true);
    expect(result.overall).toBeLessThan(70);
    expect(result.passed).toBe(false);
    expect(result.measured.intelligibility?.matchScore).toBeLessThan(0.7);
  });

  it("typed input never claims a recognition-based intelligibility signal", () => {
    const result = gradeSpeakingAttempt(task, "hello", 2000, false);
    expect(result.measured.intelligibility?.available).toBe(false);
    expect(result.measured.intelligibility?.note).toContain("Typed input");
  });

  it("uses word-overlap scoring with order tolerance", () => {
    const match = scoreMatch("my name is Ana", "Ana is my name");
    expect(match.matchScore).toBe(1); // same words, different order — still understood
  });
});

describe("open task rubric", () => {
  const intro = activity("introduce-yourself");
  const task = intro.tasks[0];
  if (task.type !== "open") throw new Error("expected open task");

  const goodAnswer =
    "My name is Sofia. I am twenty four years old. I am from Mexico. I like music and I love cooking with my family every weekend.";

  it("scores a strong answer across every measured dimension", () => {
    const result = gradeSpeakingAttempt(task, goodAnswer, 25_000, true);
    const scores = result.measured.scores;
    expect(Object.keys(scores)).toHaveLength(6);
    expect(result.measured.wordCount).toBe(26);
    expect(result.measured.wordsPerMinute).toBe(62);
    expect(result.measured.checklistCoverage).toBe(1);
    expect(scores.relevance).toBeGreaterThanOrEqual(60);
    expect(scores.completeness).toBeGreaterThanOrEqual(80);
    expect(result.passed).toBe(true);
    expect(result.overall).toBeGreaterThanOrEqual(OPEN_PASS_SCORE);
  });

  it("keeps measured results separate from AI suggestions in the DTO shape", () => {
    const result = gradeSpeakingAttempt(task, goodAnswer, 25_000, true);
    // The grader returns ONLY measured data — AI suggestions never touch it.
    expect("suggestions" in result.measured).toBe(false);
    expect(result.measured.selfAssessed).toBe(false);
  });

  it("penalises off-topic and incomplete answers deterministically", () => {
    const weak = gradeSpeakingAttempt(task, "The weather is nice today.", 8000, true);
    expect(weak.measured.checklistCoverage).toBeLessThan(0.5);
    expect(weak.overall).toBeLessThan(weak.overall + 1); // deterministic smoke
    expect(weak.passed).toBe(false);

    const again = gradeSpeakingAttempt(task, "The weather is nice today.", 8000, true);
    expect(again.overall).toBe(weak.overall); // same input → same score
  });

  it("grammar dimension reuses the clinic rules but ignores speech artefacts", () => {
    const withIssues = gradeSpeakingAttempt(
      task,
      "My name is Sofia. I am twenty years. She like music. I am from Mexico and I like cooking.",
      20_000,
      true,
    );
    expect(
      withIssues.measured.grammarIssues.every(
        (issue) => issue.category !== "punctuation" && issue.category !== "capitalization",
      ),
    ).toBe(true);
    expect(withIssues.measured.scores.grammar ?? 100).toBeLessThan(100);
  });

  it("self-assessed attempts pass without inventing measurements", () => {
    const result = selfAssessedAttempt(12_000);
    expect(result.passed).toBe(true);
    expect(result.measured.selfAssessed).toBe(true);
    expect(result.measured.wordCount).toBe(0);
    expect(Object.keys(result.measured.scores)).toHaveLength(0);
    expect(result.overall).toBe(0);
  });

  it("fluency rewards a healthy pace and penalises filler floods", () => {
    const calm = gradeSpeakingAttempt(task, goodAnswer, 12_000, true);
    const flood = gradeSpeakingAttempt(
      task,
      "um My name is Sofia uh and um I am you know twenty four years old and uh I am from Mexico and um I like music and um I love cooking you know with my family um every weekend.",
      60_000,
      true,
    );
    expect(flood.measured.fillerCount).toBeGreaterThan(4);
    expect(
      (flood.measured.scores.fluency ?? 100) < (calm.measured.scores.fluency ?? 0),
    ).toBe(true);
  });
});

describe("pronunciation match", () => {
  it("reports transcript match only when a recogniser ran", () => {
    const heard = gradePronunciationMatch("ship, sheep, sit, seat", "ship sheep sit seat", true);
    expect(heard.matchScore).toBeGreaterThanOrEqual(0.9);
    expect(heard.note).toContain("not phoneme accuracy");

    const selfOnly = gradePronunciationMatch("ship, sheep", "", false);
    expect(selfOnly.matchScore).toBe(-1);
    expect(selfOnly.note).toContain("self-assessed");
  });
});

describe("conversation engine (scripted fallback)", () => {
  const scenario = conversationScenarios[0];

  it("the scripted partner advances through authored turns", () => {
    const spec = scenario.levels[0];
    const first = scriptedPartnerReply(spec, 1, "Hi Maya, my name is Tom.");
    expect(first).toBe(spec.fallbackTurns[0]);
    const second = scriptedPartnerReply(spec, 2, "I am from Brazil.");
    expect(second).toBe(spec.fallbackTurns[1]);
  });

  it("short learner replies get an acknowledgment so the flow stays alive", () => {
    const spec = scenario.levels[0];
    const reply = scriptedPartnerReply(spec, 1, "Yes.");
    expect(spec.acknowledgments.some((ack) => reply.startsWith(ack))).toBe(true);
  });

  it("never runs past the authored script", () => {
    const spec = scenario.levels[0];
    const far = scriptedPartnerReply(
      spec,
      50,
      "That is really everything I wanted to tell you today, thank you.",
    );
    expect(far).toBe(spec.fallbackTurns[spec.fallbackTurns.length - 1]);
  });

  it("measures goal coverage, questions and turns deterministically", () => {
    const turns = [
      { role: "partner" as const, text: "Hi! I'm Maya." },
      { role: "learner" as const, text: "Hi Maya, my name is Tom and I am from Brazil. Where are you from?" },
      { role: "partner" as const, text: "I'm from Ireland. Why are you learning English?" },
      { role: "learner" as const, text: "I am learning English because I want to travel for my job." },
    ];
    const measured = measureConversation(turns, scenario, 120_000);
    expect(measured.learnerTurns).toBe(2);
    expect(measured.questionsAsked).toBeGreaterThanOrEqual(1);
    expect(measured.goalKeywordsHit).toContain("name");
    expect(measured.goalCoverage).toBeGreaterThan(0);
    expect(measured.score).toBeGreaterThan(0);
  });

  it("the fallback report is built entirely from measured data", () => {
    const turns = [
      { role: "partner" as const, text: "Hi! I'm Maya." },
      { role: "learner" as const, text: "Hi, my name is Tom. I am from Brazil. Where are you from?" },
      { role: "partner" as const, text: "Ireland! Why English?" },
      { role: "learner" as const, text: "Because I want to travel. Do you like it here?" },
    ];
    const spec = scenario.levels[0];
    const measured = measureConversation(turns, scenario, 90_000);
    const report = fallbackConversationFeedback(scenario, spec, turns, measured);
    expect(report.strongPoints.length).toBeGreaterThan(0);
    expect(report.followUpTask).toContain(scenario.title);
    expect(report.mistakes.every((m) => m.correction.length > 0)).toBe(true);
  });

  it("builds a system prompt that forbids mid-conversation corrections", () => {
    const spec = scenario.levels[1];
    const prompt = buildPartnerSystemPrompt(scenario, spec);
    expect(prompt).toContain("NEVER correct");
    expect(prompt).toContain(scenario.partner.name);
    expect(prompt).toContain(spec.partnerInstructions);
  });
});

describe("conversation AI feedback parsing (defensive)", () => {
  it("accepts fenced JSON and extracts the structured report", () => {
    const parsed = coercePublic(`Sure! Here is the report:
\`\`\`json
{"strongPoints": ["Great questions"], "mistakes": [{"said": "I am agree", "correction": "I agree", "note": "agree is a verb"}], "betterAlternatives": [], "newVocabulary": [{"word": "keen", "meaning": "enthusiastic", "example": "I am keen to learn"}], "revisionFocus": ["past tense"], "followUpTask": "Redo the scenario."}
\`\`\``);
    expect(parsed).not.toBeNull();
    expect(parsed?.strongPoints[0]).toBe("Great questions");
    expect(parsed?.mistakes[0].correction).toBe("I agree");
  });

  it("rejects malformed or empty payloads", () => {
    expect(coercePublic("no json here")).toBeNull();
    expect(coercePublic('{"strongPoints": []}')).toBeNull();
  });
});
