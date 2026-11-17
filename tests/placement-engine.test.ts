/**
 * Adaptive placement engine — scoring logic, ladder transitions, early
 * stops, outcome mapping, placement rules and narrative generation.
 */

import { describe, expect, it } from "bun:test";
import {
  buildNarrative,
  buildResults,
  computeRecommendation,
  createEngineState,
  deserializeState,
  nextStep,
  prepareSpeakingPrompt,
  prepareWritingPrompt,
  recordObjectiveAnswer,
  selfRatingToLevel,
  serializeState,
  skipCurrentSkill,
  type EngineContext,
  type EngineState,
  type SkillResult,
} from "@/server/modules/placement/engine";
import { findItem, isObjective, objectiveItems } from "@/data/placement";
import type { PlacementSkill } from "@/data/placement";

const CTX: EngineContext = { audioAvailable: true };

/** Answers every item the ladder offers, right or wrong by predicate. */
function runLadder(
  state: EngineState,
  seed: string,
  shouldFail: (skill: PlacementSkill, tier: number) => boolean
): { askedBySkill: Record<string, number> } {
  const askedBySkill: Record<string, number> = {};
  let guard = 0;
  while (guard++ < 200) {
    const step = nextStep(state, seed, CTX);
    if (step.kind === "finished") break;
    if (step.kind === "item" && isObjective(step.item)) {
      const { skill, tier } = step.item;
      askedBySkill[skill] = (askedBySkill[skill] ?? 0) + 1;
      const fail = shouldFail(skill, tier);
      recordObjectiveAnswer(state, skill, step.item.id, !fail);
      continue;
    }
    if (step.kind === "skill-intro" && step.skill === "writing") {
      prepareWritingPrompt(state);
      state.production.writing!.done = true;
      state.production.writing!.skipped = true;
      continue;
    }
    if (step.kind === "speaking-choice") {
      state.production.speaking = { itemId: "skipped", done: false, skipped: true };
      continue;
    }
    if (step.kind === "writing-prompt" || step.kind === "speaking-prompt") {
      throw new Error("unexpected production prompt in ladder run");
    }
  }
  return { askedBySkill };
}

describe("engine — adaptive ladders", () => {
  it("a perfect run climbs to tier 3 and asks few items (2 per tier)", () => {
    const state = createEngineState(CTX);
    const { askedBySkill } = runLadder(state, "seed-perfect", () => false);
    // 2 correct per tier ends the tier immediately → 6 items per skill.
    expect(askedBySkill.vocabulary).toBe(6);
    expect(askedBySkill.grammar).toBe(6);
    expect(state.ladders.vocabulary?.outcome).toBe("competent");
    expect(state.ladders.grammar?.outcome).toBe("competent");
  });

  it("a learner who fails everything stops after 2 items per skill (never forced onward)", () => {
    const state = createEngineState(CTX);
    const { askedBySkill } = runLadder(state, "seed-zero", () => true);
    // Two wrong answers end the skill — the beginner is never dragged on.
    expect(askedBySkill.vocabulary).toBe(2);
    expect(askedBySkill.grammar).toBe(2);
    expect(state.ladders.vocabulary?.outcome).toBe("beginner");
    expect(state.ladders.grammar?.outcome).toBe("beginner");
  });

  it("tier 1 passed + tier 2 failed → developing", () => {
    const state = createEngineState(CTX);
    runLadder(state, "seed-mixed", (skill, tier) => tier >= 2);
    expect(state.ladders.vocabulary?.outcome).toBe("developing");
    expect(state.ladders.grammar?.outcome).toBe("developing");
  });

  it("a 1-of-3 tier asks the tiebreaker third item", () => {
    const state = createEngineState(CTX);
    const ladder = state.ladders.vocabulary!;
    const tier1 = objectiveItems("vocabulary", 1);
    // First item wrong, next two right → 3 asked, 2 correct → tier passed.
    recordObjectiveAnswer(state, "vocabulary", tier1[0].id, false);
    expect(ladder.askedThisTier).toHaveLength(1);
    recordObjectiveAnswer(state, "vocabulary", tier1[1].id, true);
    expect(ladder.askedThisTier).toHaveLength(2); // 1-1: the tiebreaker is needed
    recordObjectiveAnswer(state, "vocabulary", tier1[2].id, true);
    // Tier passed → moved to tier 2 and the per-tier counters reset.
    expect(ladder.tier).toBe(2);
    expect(ladder.askedTotal).toHaveLength(3);
    expect(ladder.askedThisTier).toHaveLength(0);
    expect(ladder.correctTotal).toBe(2);
  });

  it("listening without audio is skipped as not_assessed and never asks items", () => {
    const ctxNoAudio: EngineContext = { audioAvailable: false };
    const state = createEngineState(ctxNoAudio);
    let sawListeningItem = false;
    let guard = 0;
    while (guard++ < 100) {
      const step = nextStep(state, "seed-audio", ctxNoAudio);
      if (step.kind === "finished") break;
      if (step.kind === "item" && step.item.skill === "listening") sawListeningItem = true;
      if (step.kind === "item" && isObjective(step.item)) {
        recordObjectiveAnswer(state, step.item.skill, step.item.id, true);
        continue;
      }
      if (step.kind === "skill-intro" && step.skill === "writing") {
        prepareWritingPrompt(state);
        state.production.writing!.done = true;
        state.production.writing!.skipped = true;
        continue;
      }
      if (step.kind === "speaking-choice") {
        state.production.speaking = { itemId: "skipped", done: false, skipped: true };
        continue;
      }
    }
    expect(sawListeningItem).toBe(false);
    expect(state.ladders.listening?.outcome).toBe("not_assessed");
  });
});

describe("engine — production phases", () => {
  function stateWithCore(vocab: "beginner" | "developing" | "competent", grammar: typeof vocab) {
    const state = createEngineState(CTX);
    state.ladders.vocabulary!.outcome = vocab;
    state.ladders.grammar!.outcome = grammar;
    state.skillIndex = 4; // writing phase
    return state;
  }

  it("the writing prompt tier follows the weakest core skill", () => {
    const state = stateWithCore("competent", "beginner");
    const itemId = prepareWritingPrompt(state);
    expect(findItem(itemId)?.tier).toBe(1); // grammar is beginner → tier 1

    const state2 = stateWithCore("developing", "competent");
    const itemId2 = prepareWritingPrompt(state2);
    expect(findItem(itemId2)?.tier).toBe(2);

    const state3 = stateWithCore("competent", "competent");
    const itemId3 = prepareWritingPrompt(state3);
    expect(findItem(itemId3)?.tier).toBe(3);
  });

  it("the speaking prompt tier matches the writing logic", () => {
    const state = stateWithCore("competent", "competent");
    const itemId = prepareSpeakingPrompt(state);
    expect(findItem(itemId)?.skill).toBe("speaking");
    expect(findItem(itemId)?.tier).toBe(3);
  });

  it("self-ratings map to levels", () => {
    expect(selfRatingToLevel(0)).toBe("beginner");
    expect(selfRatingToLevel(1)).toBe("developing");
    expect(selfRatingToLevel(2)).toBe("competent");
  });
});

describe("engine — placement rules (recommendation)", () => {
  const skill = (s: PlacementSkill, level: SkillResult["level"]): SkillResult => ({
    skill: s,
    level,
    asked: 3,
    correct: 2,
    selfRating: null,
  });

  it("no assessed skills → start at P1 (gentle default)", () => {
    const rec = computeRecommendation([
      skill("vocabulary", "not_assessed"),
      skill("grammar", "not_assessed"),
      skill("reading", "not_assessed"),
      skill("listening", "not_assessed"),
      skill("writing", "not_assessed"),
      skill("speaking", "not_assessed"),
    ]);
    expect(rec.levelCode).toBe("P1");
    expect(rec.lessonSlug).toBe("p1-1-1");
  });

  it("any core beginner → P1, even with strong reading", () => {
    const rec = computeRecommendation([
      skill("vocabulary", "developing"),
      skill("grammar", "beginner"),
      skill("reading", "competent"),
      skill("listening", "developing"),
    ]);
    expect(rec.levelCode).toBe("P1");
  });

  it("core at developing → A1", () => {
    const rec = computeRecommendation([
      skill("vocabulary", "developing"),
      skill("grammar", "developing"),
      skill("reading", "competent"),
      skill("listening", "not_assessed"),
    ]);
    expect(rec.levelCode).toBe("A1");
    expect(rec.lessonSlug).toBe("a1-1-1");
  });

  it("all core competent → A2", () => {
    const rec = computeRecommendation([
      skill("vocabulary", "competent"),
      skill("grammar", "competent"),
      skill("reading", "competent"),
      skill("listening", "competent"),
    ]);
    expect(rec.levelCode).toBe("A2");
  });

  it("a weak secondary skill can lower the start, never raise it", () => {
    const lowered = computeRecommendation([
      skill("vocabulary", "competent"),
      skill("grammar", "competent"),
      skill("reading", "beginner"),
      skill("listening", "competent"),
    ]);
    expect(lowered.levelCode).toBe("P1");

    const raised = computeRecommendation([
      skill("vocabulary", "beginner"),
      skill("grammar", "developing"),
      skill("reading", "competent"),
      skill("listening", "not_assessed"),
    ]);
    expect(raised.levelCode).toBe("P1");
  });

  it("writing and speaking never gate the starting level", () => {
    const rec = computeRecommendation([
      skill("vocabulary", "competent"),
      skill("grammar", "competent"),
      skill("reading", "competent"),
      skill("listening", "competent"),
      skill("writing", "beginner"),
      skill("speaking", "not_assessed"),
    ]);
    expect(rec.levelCode).toBe("A2");
  });
});

describe("engine — results & narrative", () => {
  it("buildResults carries all six skills and the recommendation", () => {
    const ladders = createEngineState(CTX).ladders;
    ladders.vocabulary!.outcome = "developing";
    ladders.grammar!.outcome = "developing";
    ladders.reading!.outcome = "beginner";
    ladders.listening!.outcome = "not_assessed";
    const results = buildResults({ ladders, writingLevel: "developing", speakingLevel: null });

    expect(results.skills).toHaveLength(6);
    expect(results.skills.find((s) => s.skill === "writing")?.level).toBe("developing");
    expect(results.skills.find((s) => s.skill === "speaking")?.level).toBe("not_assessed");
    // grammar+vocab developing, reading beginner → P1.
    expect(results.recommendation.levelCode).toBe("P1");
  });

  it("the narrative is supportive, specific and mentions the recommendation", () => {
    const lines = buildNarrative(
      [
        { skill: "vocabulary", level: "developing", asked: 5, correct: 3, selfRating: null },
        { skill: "grammar", level: "beginner", asked: 2, correct: 0, selfRating: null },
        { skill: "reading", level: "not_assessed", asked: 0, correct: 0, selfRating: null },
        { skill: "listening", level: "not_assessed", asked: 0, correct: 0, selfRating: null },
        { skill: "writing", level: "not_assessed", asked: null, correct: null, selfRating: null },
        { skill: "speaking", level: "not_assessed", asked: null, correct: null, selfRating: null },
      ],
      { levelCode: "P1", lessonSlug: "p1-1-1", reason: "starting gently" }
    );
    const text = lines.join(" ");
    // Specific, plain-English feedback (the brief's example tone).
    expect(text).toContain("everyday words");
    expect(text).toContain("sentence construction needs improvement");
    expect(text).toContain("We recommend starting with P1");
    // Supportive, never harsh.
    expect(text).not.toMatch(/failed|poor|bad at/i);
  });

  it("skipped speaking gets an explicit, friendly mention", () => {
    const lines = buildNarrative(
      [
        { skill: "vocabulary", level: "beginner", asked: 2, correct: 0, selfRating: null },
        { skill: "grammar", level: "beginner", asked: 2, correct: 0, selfRating: null },
        { skill: "reading", level: "not_assessed", asked: 0, correct: 0, selfRating: null },
        { skill: "listening", level: "not_assessed", asked: 0, correct: 0, selfRating: null },
        { skill: "writing", level: "not_assessed", asked: null, correct: null, selfRating: null },
        { skill: "speaking", level: "not_assessed", asked: null, correct: null, selfRating: null },
      ],
      { levelCode: "P1", lessonSlug: "p1-1-1", reason: "starting gently" }
    );
    expect(lines.join(" ")).toContain("completely fine");
  });
});

describe("engine — persistence", () => {
  it("state survives serialize → deserialize without drift", () => {
    const state = createEngineState(CTX);
    runLadder(state, "seed-roundtrip", (skill, tier) => tier === 2);
    const restored = deserializeState(serializeState(state));
    expect(restored.skillIndex).toBe(state.skillIndex);
    expect(restored.ladders.vocabulary?.outcome).toBe(state.ladders.vocabulary?.outcome);
    expect(restored.ladders.vocabulary?.askedTotal).toEqual(state.ladders.vocabulary?.askedTotal);
    // And it keeps running from the same place.
    expect(serializeState(restored)).toBe(serializeState(state));
  });

  it("a skipped objective skill moves the flow on", () => {
    const state = createEngineState(CTX);
    state.skillIndex = 2; // reading
    skipCurrentSkill(state, CTX);
    expect(state.ladders.reading?.outcome).toBe("not_assessed");
    expect(state.skillIndex).toBe(3);
  });
});
