/**
 * Adaptive placement engine — pure functions, no I/O.
 *
 * DESIGN (the assessment rules):
 *   1. Everyone starts at tier 1 (simple questions). Difficulty rises only
 *      with performance — a learner who cannot answer is never dragged
 *      through an advanced test: two wrong answers end the skill.
 *   2. Each objective skill climbs a 3-tier ladder, up to 3 items per tier.
 *      A tier is passed at ≥2 correct; it is failed (early exit) as soon as
 *      2 wrong make passing impossible.
 *   3. Outcome per skill:
 *        no tier passed  → BEGINNER
 *        tier 1 passed   → DEVELOPING
 *        tier 2+ passed  → DEMONSTRATED COMPETENCE
 *      Writing/speaking are single self-assessed prompts (tier chosen from
 *      earlier results); skipping or unavailability → NOT ASSESSED.
 *   4. The recommended starting point is the weakest of the assessed core
 *      skills (vocabulary, grammar) plus reading and listening if taken —
 *      a skill can lower the start, never raise it. Self-assessed writing
 *      and speaking never gate the path; they feed the narrative.
 */

import {
  OBJECTIVE_SKILLS,
  SKILL_ORDER,
  objectiveItems,
  writingPromptForTier,
  speakingPromptForTier,
  type PlacementItem,
  type PlacementSkill,
  type PlacementTier,
  type SkillLevel,
} from "@/data/placement";

export interface SkillLadderState {
  skill: PlacementSkill;
  tier: PlacementTier;
  /** item ids asked in the current tier, in order */
  askedThisTier: string[];
  correctThisTier: number;
  wrongThisTier: number;
  /** item ids asked in the whole skill, in order */
  askedTotal: string[];
  correctTotal: number;
  /** set when the skill ladder ends */
  outcome: SkillLevel | null;
}

export interface EngineState {
  skillIndex: number;
  ladders: Partial<Record<PlacementSkill, SkillLadderState>>;
  /** writing/speaking: single prompt id + submitted flag */
  production: Partial<Record<"writing" | "speaking", { itemId: string; done: boolean; skipped: boolean }>>;
  /** set when the whole assessment ends */
  finished: boolean;
}

export interface EngineContext {
  /** TTS playback available in the learner's browser (affects listening). */
  audioAvailable: boolean;
}

/* ------------------------------------------------------------------ */
/* Seeded selection — deterministic per attempt, varied across attempts */
/* ------------------------------------------------------------------ */

/** Deterministic 32-bit hash (FNV-1a) → seeded PRNG (mulberry32). */
function seedFrom(seed: string): () => number {
  let h = 0x811c9dc5;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  let a = h >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Stable seeded shuffle (Fisher–Yates) of a list of items. */
function shuffled<T>(items: T[], seed: string): T[] {
  const rand = seedFrom(seed);
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/* ------------------------------------------------------------------ */
/* State construction                                                  */
/* ------------------------------------------------------------------ */

export function createEngineState(_ctx: EngineContext): EngineState {
  const ladders: EngineState["ladders"] = {};
  for (const skill of OBJECTIVE_SKILLS) {
    ladders[skill] = freshLadder(skill);
  }
  return { skillIndex: 0, ladders, production: {}, finished: false };
}

function freshLadder(skill: PlacementSkill): SkillLadderState {
  return {
    skill,
    tier: 1,
    askedThisTier: [],
    correctThisTier: 0,
    wrongThisTier: 0,
    askedTotal: [],
    correctTotal: 0,
    outcome: null,
  };
}

/* ------------------------------------------------------------------ */
/* Reading the engine: what comes next?                                */
/* ------------------------------------------------------------------ */

export type NextStep =
  | { kind: "skill-intro"; skill: "writing" | "speaking" }
  | { kind: "item"; item: PlacementItem }
  | { kind: "writing-prompt"; itemId: string }
  | { kind: "speaking-choice" }
  | { kind: "speaking-prompt"; itemId: string }
  | { kind: "finished" };

/**
 * Resolves what the player should show next. Skipping rules:
 *   - listening is skipped when audio is unavailable (not_assessed);
 *   - the whole test may be skipped ("start from zero") — finished immediately.
 */
export function nextStep(state: EngineState, seed: string, ctx: EngineContext): NextStep {
  if (state.finished) return { kind: "finished" };

  const current = SKILL_ORDER[state.skillIndex];
  if (!current) return { kind: "finished" };

  // Listening without audio → not assessed, move on.
  if (current === "listening" && !ctx.audioAvailable) {
    const ladder = state.ladders.listening!;
    ladder.outcome = "not_assessed";
    state.skillIndex += 1;
    return nextStep(state, seed, ctx);
  }

  if (isObjectiveSkill(current)) {
    const ladder = state.ladders[current]!;
    const item = pickItem(ladder, seed);
    if (!item) {
      // Defensive: a valid bank always concludes a tier before the pool
      // runs dry (tests enforce ≥3 items per tier). If it ever happens,
      // close the skill on what was achieved instead of looping.
      ladder.outcome = ladder.outcome ?? outcomeForTiersPassed(ladder.tier - 1);
      state.skillIndex += 1;
      return nextStep(state, seed, ctx);
    }
    // The client shows a friendly skill intro itself when this is the
    // skill's first item (askedTotal empty) — no server round-trip needed.
    return { kind: "item", item };
  }

  if (current === "writing") {
    const entry = state.production.writing;
    if (!entry) {
      return { kind: "skill-intro", skill: "writing" };
    }
    if (entry.skipped || entry.done) {
      state.skillIndex += 1;
      return nextStep(state, seed, ctx);
    }
    return { kind: "writing-prompt", itemId: entry.itemId };
  }

  // speaking
  const entry = state.production.speaking;
  if (!entry) {
    return { kind: "skill-intro", skill: "speaking" };
  }
  if (entry.skipped) {
    state.skillIndex += 1;
    return nextStep(state, seed, ctx);
  }
  if (!entry.done) {
    return { kind: "speaking-prompt", itemId: entry.itemId };
  }
  state.skillIndex += 1;
  return nextStep(state, seed, ctx);
}

function isObjectiveSkill(skill: PlacementSkill): boolean {
  return (OBJECTIVE_SKILLS as string[]).includes(skill);
}

/** Picks the next unasked item of the ladder's current tier (seeded order). */
function pickItem(ladder: SkillLadderState, seed: string): PlacementItem | null {
  const pool = shuffled(
    objectiveItems(ladder.skill, ladder.tier),
    `${seed}:${ladder.skill}:t${ladder.tier}`
  );
  const item = pool.find((i) => !ladder.askedThisTier.includes(i.id));
  return item ?? null;
}

/* ------------------------------------------------------------------ */
/* Writing the engine: submitting answers                              */
/* ------------------------------------------------------------------ */

/**
 * Records an objective answer and advances the ladder:
 *   - 2 wrong in a tier  → tier failed → skill ends with current outcome;
 *   - 2–3 correct in a tier (≥2 of ≤3) → tier passed → next tier or outcome;
 *   - 3 asked with 1 correct → tier failed (cannot reach 2).
 */
export function recordObjectiveAnswer(
  state: EngineState,
  skill: PlacementSkill,
  itemId: string,
  correct: boolean
): void {
  const ladder = state.ladders[skill];
  if (!ladder || ladder.outcome) return;
  ladder.askedThisTier.push(itemId);
  ladder.askedTotal.push(itemId);
  if (correct) {
    ladder.correctThisTier += 1;
    ladder.correctTotal += 1;
  } else {
    ladder.wrongThisTier += 1;
  }

  const tierFailed = ladder.wrongThisTier >= 2 || ladder.askedThisTier.length >= 3;
  const tierPassed = ladder.correctThisTier >= 2;

  if (tierPassed || tierFailed) {
    advanceLadder(state, ladder, tierPassed);
  }
}

function advanceLadder(state: EngineState, ladder: SkillLadderState, tierPassed: boolean): void {
  if (!tierPassed) {
    // Outcome = tiers fully passed before this one.
    ladder.outcome = outcomeForTiersPassed(ladder.tier - 1);
    state.skillIndex += 1;
    return;
  }
  if (ladder.tier >= 3) {
    ladder.outcome = "competent";
    state.skillIndex += 1;
    return;
  }
  ladder.tier = (ladder.tier + 1) as PlacementTier;
  ladder.askedThisTier = [];
  ladder.correctThisTier = 0;
  ladder.wrongThisTier = 0;
}

function outcomeForTiersPassed(tiersPassed: number): SkillLevel {
  if (tiersPassed <= 0) return "beginner";
  if (tiersPassed === 1) return "developing";
  return "competent";
}

/** Skips the current objective skill (not_assessed) — e.g. listening without audio. */
export function skipCurrentSkill(state: EngineState, _ctx: EngineContext): void {
  const current = SKILL_ORDER[state.skillIndex];
  if (!current) return;
  if (isObjectiveSkill(current)) {
    const ladder = state.ladders[current]!;
    if (!ladder.outcome) ladder.outcome = "not_assessed";
  }
  state.skillIndex += 1;
}

/* ------------------------------------------------------------------ */
/* Writing & speaking (production)                                     */
/* ------------------------------------------------------------------ */

export type ProductionSelfRating = 0 | 1 | 2; // 0 weakest → 2 strongest

/**
 * Registers the writing phase: the prompt tier follows the learner's
 * apparent ability — the weakest of vocabulary and grammar results so far
 * (beginner → tier 1, developing → tier 2, competent → tier 3).
 */
export function prepareWritingPrompt(state: EngineState): string {
  const tier = productionTier(state);
  const prompt = writingPromptForTier(tier);
  if (!state.production.writing) {
    state.production.writing = { itemId: prompt.id, done: false, skipped: false };
  }
  return state.production.writing.itemId;
}

/** Registers the speaking prompt (chosen when the learner opts in). */
export function prepareSpeakingPrompt(state: EngineState): string {
  const tier = productionTier(state);
  const prompt = speakingPromptForTier(tier);
  if (!state.production.speaking) {
    state.production.speaking = { itemId: prompt.id, done: false, skipped: false };
  }
  return state.production.speaking.itemId;
}

/** Weakest of the assessed core skills, mapped to a production prompt tier. */
function productionTier(state: EngineState): PlacementTier {
  const core: SkillLevel[] = ["vocabulary", "grammar"].map(
    (s) => state.ladders[s as PlacementSkill]?.outcome ?? "not_assessed"
  );
  const weakest = core
    .filter((l) => l !== "not_assessed")
    .sort((a, b) => levelOrdinal(a) - levelOrdinal(b))[0];
  if (weakest === undefined || weakest === "beginner") return 1;
  if (weakest === "developing") return 2;
  return 3;
}

/** Self-rating (0..2) → skill level for writing/speaking. */
export function selfRatingToLevel(rating: ProductionSelfRating): SkillLevel {
  if (rating === 0) return "beginner";
  if (rating === 1) return "developing";
  return "competent";
}

/* ------------------------------------------------------------------ */
/* Scoring: results + recommendation                                   */
/* ------------------------------------------------------------------ */

export interface SkillResult {
  skill: PlacementSkill;
  level: SkillLevel;
  /** objective skills: items asked/correct; production: null */
  asked: number | null;
  correct: number | null;
  selfRating: ProductionSelfRating | null;
}

export interface PlacementRecommendation {
  levelCode: "P1" | "A1" | "A2";
  lessonSlug: string;
  reason: string;
}

export interface PlacementResults {
  skills: SkillResult[];
  recommendation: PlacementRecommendation;
  narrative: string[];
}

export function levelOrdinal(level: SkillLevel): number {
  return { not_assessed: 0, beginner: 1, developing: 2, competent: 3 }[level];
}

/** The weakest assessed objective skill decides the starting point. */
export function computeRecommendation(skills: SkillResult[]): PlacementRecommendation {
  const gating = skills.filter(
    (s) =>
      (s.skill === "vocabulary" || s.skill === "grammar" || s.skill === "reading" || s.skill === "listening") &&
      s.level !== "not_assessed"
  );
  const weakest = gating.sort((a, b) => levelOrdinal(a.level) - levelOrdinal(b.level))[0];

  if (!weakest || weakest.level === "beginner") {
    return {
      levelCode: "P1",
      lessonSlug: "p1-1-1",
      reason:
        "starting gently from the alphabet and first words — the safest place to build real sentences",
    };
  }
  if (weakest.level === "developing") {
    return {
      levelCode: "A1",
      lessonSlug: "a1-1-1",
      reason: "beginning with first conversations — greetings, introductions and everyday words you can use immediately",
    };
  }
  return {
    levelCode: "A2",
    lessonSlug: "a2-1-1",
    reason: "starting with everyday situations — you already have the basics, so we'll put them to work",
  };
}

/** Assembles the final results: per-skill levels + supportive narrative. */
export function buildResults(input: {
  ladders: EngineState["ladders"];
  writingLevel: SkillLevel | null; // null when skipped
  speakingLevel: SkillLevel | null; // null when skipped/declined
}): PlacementResults {
  const skills: SkillResult[] = OBJECTIVE_SKILLS.map((skill) => {
    const ladder = input.ladders[skill]!;
    return {
      skill,
      level: ladder.outcome ?? "not_assessed",
      asked: ladder.askedTotal.length,
      correct: ladder.correctTotal,
      selfRating: null,
    };
  });
  if (input.writingLevel) {
    skills.push({ skill: "writing", level: input.writingLevel, asked: null, correct: null, selfRating: null });
  } else {
    skills.push({ skill: "writing", level: "not_assessed", asked: null, correct: null, selfRating: null });
  }
  if (input.speakingLevel) {
    skills.push({ skill: "speaking", level: input.speakingLevel, asked: null, correct: null, selfRating: null });
  } else {
    skills.push({ skill: "speaking", level: "not_assessed", asked: null, correct: null, selfRating: null });
  }

  const recommendation = computeRecommendation(skills);
  const narrative = buildNarrative(skills, recommendation);
  return { skills, recommendation, narrative };
}

/**
 * The learner-facing narrative. Simple English, supportive, specific —
 * modelled on: “Your reading is at an elementary level. Your sentence
 * construction needs improvement. We recommend beginning with sentence
 * patterns and basic grammar.”
 */
export function buildNarrative(
  skills: SkillResult[],
  recommendation: PlacementRecommendation
): string[] {
  const bySkill = new Map(skills.map((s) => [s.skill, s]));
  const lines: string[] = [];

  const vocab = bySkill.get("vocabulary");
  const grammar = bySkill.get("grammar");
  const reading = bySkill.get("reading");
  const listening = bySkill.get("listening");
  const writing = bySkill.get("writing");
  const speaking = bySkill.get("speaking");

  // Vocabulary + grammar lines.
  if (vocab && vocab.level !== "not_assessed") {
    if (vocab.level === "competent") {
      lines.push("You know a good range of everyday words — a strong base to build on.");
    } else if (vocab.level === "developing") {
      lines.push("You know many everyday words, and your vocabulary is growing well.");
    } else {
      lines.push("You are at the start of your word journey — perfect, that's exactly what the first lessons are for.");
    }
  }
  if (grammar && grammar.level !== "not_assessed") {
    if (grammar.level === "competent") {
      lines.push("Your sentence construction is solid — you can put ideas together correctly.");
    } else if (grammar.level === "developing") {
      lines.push("Your sentence construction needs a little support, so your plan includes extra sentence patterns.");
    } else {
      lines.push("Your sentence construction needs improvement, so we recommend beginning with sentence patterns and basic grammar.");
    }
  }

  // Reading / listening lines.
  if (reading && reading.level !== "not_assessed") {
    if (reading.level === "competent") {
      lines.push("Your reading is at an elementary-to-intermediate level — you understood the harder passages.");
    } else if (reading.level === "developing") {
      lines.push("Your reading is at an elementary level: you follow simple texts well.");
    } else {
      lines.push("Your reading is at a beginner level — short, simple texts are the right place to start.");
    }
  }
  if (listening && listening.level === "not_assessed") {
    lines.push("We couldn't play audio in your browser, so we left listening for your lessons to show us.");
  } else if (listening && listening.level !== "not_assessed") {
    if (listening.level === "competent") {
      lines.push("Your listening is strong — you caught details even in the faster clip.");
    } else if (listening.level === "developing") {
      lines.push("You understand slow, clear English well — exactly what everyday listening practice will grow.");
    } else {
      lines.push("Listening is easiest to grow with daily practice — every TalkSy lesson reads its words and dialogues aloud.");
    }
  }

  // Writing / speaking lines (self-assessed).
  if (writing && writing.level !== "not_assessed") {
    if (writing.level === "competent") {
      lines.push("Your writing already connects ideas clearly.");
    } else if (writing.level === "developing") {
      lines.push("Your writing is developing — short sentences first, then paragraphs.");
    } else {
      lines.push("Your writing is at the beginning — the sentence builder in each lesson will help a lot.");
    }
  }
  if (speaking && speaking.level === "not_assessed") {
    lines.push("You chose not to use the microphone — that's completely fine. Your lessons still include speaking practice whenever you're ready.");
  } else if (speaking && speaking.level !== "not_assessed") {
    if (speaking.level === "competent") {
      lines.push("Your speaking is confident — you said the sentences clearly.");
    } else if (speaking.level === "developing") {
      lines.push("Your speaking is developing — gentle daily practice out loud will make it feel natural.");
    } else {
      lines.push("Speaking out loud can feel scary — your plan starts with easy repeat-after-me moments, in private.");
    }
  }

  // Recommendation.
  const levelNames: Record<"P1" | "A1" | "A2", string> = {
    P1: "Foundations",
    A1: "Beginner",
    A2: "Elementary",
  };
  lines.push(
    `We recommend starting with ${recommendation.levelCode} · ${levelNames[recommendation.levelCode]} — ${recommendation.reason}.`
  );

  return lines;
}

/* ------------------------------------------------------------------ */
/* Serialization                                                       */
/* ------------------------------------------------------------------ */

export function serializeState(state: EngineState): string {
  return JSON.stringify(state);
}

export function deserializeState(json: string): EngineState {
  const parsed = JSON.parse(json) as EngineState;
  // Defensive defaults so older/partial states never crash the engine.
  const ladders: EngineState["ladders"] = {};
  for (const skill of OBJECTIVE_SKILLS) {
    ladders[skill] = { ...freshLadder(skill), ...parsed.ladders?.[skill] };
  }
  return {
    skillIndex: parsed.skillIndex ?? 0,
    ladders,
    production: parsed.production ?? {},
    finished: parsed.finished ?? false,
  };
}
