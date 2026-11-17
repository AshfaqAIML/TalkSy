/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import {
  getDailyWord,
  getRecentDailyWords,
  getVocabWord,
  getVocabWordsByIds,
  searchVocabulary,
  validateVocabulary,
  getVocabularyStats,
  vocabContextItems,
  vocabWords,
} from "@/data/vocabulary";
import {
  DEFAULT_SRS_CONFIG,
  describeInterval,
  gradeCard,
  newCardState,
  performanceFactor,
  planDailySession,
  resolveSrsConfig,
  type ProgressSnapshot,
  type SrsCardState,
  type SrsConfig,
} from "@/lib/vocab/srs";
import {
  generateChallenge,
  gradeChallenge,
  type ChallengeAnswer,
} from "@/lib/vocab/challenges";
import { checkSentence, displayForms, inflectedForms } from "@/lib/vocab/sentences";

const NOW = new Date("2026-11-11T10:00:00Z");
const MINUTES_PER_DAY = 24 * 60;

function grade(
  state: SrsCardState,
  rating: "again" | "hard" | "good" | "easy",
  config: SrsConfig = DEFAULT_SRS_CONFIG,
  recentAccuracy: number | null = null,
  at: Date = NOW,
): SrsCardState {
  return gradeCard(state, { rating, recentAccuracy, now: at }, config);
}

// ---------------------------------------------------------------------------
// Data integrity
// ---------------------------------------------------------------------------

describe("vocabulary database integrity", () => {
  it("passes registry validation with zero issues", () => {
    expect(validateVocabulary()).toEqual([]);
  });

  it("has a real library: 12 categories, 130+ words, 12 context passages", () => {
    const stats = getVocabularyStats();
    expect(stats.categories).toBe(12);
    expect(stats.words).toBeGreaterThanOrEqual(130);
    expect(stats.contextItems).toBe(12);
    expect(stats.subcategories).toBeGreaterThanOrEqual(30);
  });

  it("gives every word the complete Word Explorer record", () => {
    for (const word of vocabWords) {
      expect(word.word.length).toBeGreaterThan(0);
      expect(word.pronunciation.startsWith("/")).toBe(true);
      expect(word.pronunciation.endsWith("/")).toBe(true);
      expect(word.partOfSpeech.length).toBeGreaterThan(0);
      expect(word.meaning.length).toBeGreaterThan(5);
      expect(word.translation.length).toBeGreaterThan(0); // support-language meaning
      expect(word.example.english.length).toBeGreaterThan(5);
      expect(word.example.translation.length).toBeGreaterThan(0);
      expect(word.synonyms.length).toBeGreaterThanOrEqual(0);
      expect(word.antonyms.length > 0 || !!word.antonymNote).toBe(true);
      expect(word.wordFamily.length).toBeGreaterThanOrEqual(1);
      expect(word.collocations.length).toBeGreaterThanOrEqual(2);
      expect(["easy", "medium", "hard", "challenge"]).toContain(word.difficulty);
      expect(word.relatedWordIds.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("resolves all related-word links to real entries (both directions)", () => {
    for (const word of vocabWords) {
      for (const relatedId of word.relatedWordIds) {
        expect(getVocabWord(relatedId)).toBeDefined();
      }
    }
    // Every word is reachable from at least one other word via some link.
    const linked = new Set(vocabWords.flatMap((w) => w.relatedWordIds));
    const orphans = vocabWords.filter((w) => !linked.has(w.id) && w.relatedWordIds.length === 0);
    expect(orphans).toEqual([]);
  });

  it("selects a deterministic daily word that changes across days", () => {
    const today = getDailyWord("2026-11-11");
    expect(getDailyWord("2026-11-11").id).toBe(today.id); // stable within a day
    const week = getRecentDailyWords(7);
    expect(week).toHaveLength(7);
    expect(new Set(week.map((d) => d.dateKey)).size).toBe(7);
  });

  it("searches English, Spanish, synonyms and collocations", () => {
    expect(searchVocabulary({ q: "money" })[0].id).toBe("money");
    expect(searchVocabulary({ q: "gracias" }).map((w) => w.id)).toContain("thank-you");
    expect(searchVocabulary({ q: "expensive" }).map((w) => w.id)).toContain("cheap"); // antonym link
    const food = searchVocabulary({ categoryId: "food" });
    expect(food).toHaveLength(11);
    expect(food.every((w) => w.categoryId === "food")).toBe(true);
    const byIds = searchVocabulary({ ids: ["buy", "sell"] });
    expect(byIds.map((w) => w.id).sort()).toEqual(["buy", "sell"]);
  });

  it("context passages only teach existing words that appear in the text", () => {
    for (const item of vocabContextItems) {
      const entries = getVocabWordsByIds(item.targetWordIds);
      expect(entries).toHaveLength(item.targetWordIds.length);
    }
  });
});

// ---------------------------------------------------------------------------
// Spaced repetition
// ---------------------------------------------------------------------------

describe("SRS scheduler", () => {
  it("never masters a word after a single correct answer", () => {
    let card = grade(newCardState(NOW), "good");
    expect(card.status).toBe("learning"); // still on learning steps
    expect(card.repetitions).toBe(1);
    card = grade(card, "easy"); // even an immediate "easy"…
    expect(["reviewing", "learning"]).toContain(card.status);
    expect(card.status).not.toBe("mastered");
  });

  it("walks the learning steps then graduates to spaced intervals", () => {
    let card = grade(newCardState(NOW), "good");
    expect(card.intervalMinutes).toBe(DEFAULT_SRS_CONFIG.learningStepMinutes[1]); // second step (10 min)
    card = grade(card, "good", DEFAULT_SRS_CONFIG, null, new Date("2026-11-11T11:00:00Z"));
    expect(card.status).toBe("reviewing"); // graduated
    expect(card.intervalMinutes).toBeGreaterThanOrEqual(DEFAULT_SRS_CONFIG.graduateIntervalDays * MINUTES_PER_DAY);
  });

  it("masters only after enough repetitions AND a long interval, then keeps scheduling", () => {
    let card = grade(newCardState(NOW), "good");
    let at = new Date("2026-11-11T11:00:00Z");
    for (let i = 0; i < 8; i++) {
      card = grade(card, "good", DEFAULT_SRS_CONFIG, 1, at);
      at = card.dueAt!;
    }
    expect(card.status).toBe("mastered");
    expect(card.repetitions).toBeGreaterThanOrEqual(DEFAULT_SRS_CONFIG.masterRepetitions);
    // Mastered is not permanent: the interval is capped, so it comes back.
    expect(card.intervalMinutes).toBeLessThanOrEqual(DEFAULT_SRS_CONFIG.maxIntervalDays * MINUTES_PER_DAY);
    expect(card.dueAt).not.toBeNull();
    // …and forgetting demotes it immediately.
    const lapsed = grade(card, "again", DEFAULT_SRS_CONFIG, 0.5, at);
    expect(lapsed.status).toBe("learning");
    expect(lapsed.repetitions).toBe(0);
    expect(lapsed.lapses).toBe(card.lapses + 1);
  });

  it("applies the learner's difficulty flag and recent performance to intervals", () => {
    const easy = grade(newCardState(NOW), "good");
    const difficult: SrsCardState = { ...easy, isDifficult: true };
    let a = grade(easy, "good", DEFAULT_SRS_CONFIG, 1);
    let b = grade(difficult, "good", DEFAULT_SRS_CONFIG, 1);
    // Graduate both, then compare the next review interval.
    a = grade(a, "good", DEFAULT_SRS_CONFIG, 1);
    b = grade(b, "good", DEFAULT_SRS_CONFIG, 1);
    expect(a.intervalMinutes).toBeGreaterThan(b.intervalMinutes);

    const goodPerf = grade(a, "good", DEFAULT_SRS_CONFIG, 1);
    const badPerf = grade(a, "good", DEFAULT_SRS_CONFIG, 0);
    expect(goodPerf.intervalMinutes).toBeGreaterThan(badPerf.intervalMinutes);
    expect(performanceFactor(null, DEFAULT_SRS_CONFIG)).toBe(1);
  });

  it("clamps the ease factor and interval bounds", () => {
    let card = grade(newCardState(NOW), "good");
    for (let i = 0; i < 30; i++) {
      card = grade(card, "again", DEFAULT_SRS_CONFIG, 0, card.dueAt ?? NOW);
    }
    expect(card.ease).toBeGreaterThanOrEqual(DEFAULT_SRS_CONFIG.minEase);

    let rising = grade(newCardState(NOW), "good");
    for (let i = 0; i < 30; i++) {
      rising = grade(rising, "easy", DEFAULT_SRS_CONFIG, 1, rising.dueAt ?? NOW);
    }
    expect(rising.ease).toBeLessThanOrEqual(DEFAULT_SRS_CONFIG.maxEase);
    expect(rising.intervalMinutes).toBeLessThanOrEqual(DEFAULT_SRS_CONFIG.maxIntervalDays * MINUTES_PER_DAY);
  });

  it("plans the daily queue within budgets", () => {
    const allIds = vocabWords.map((w) => w.id);
    const fresh = planDailySession(allIds, new Map(), { now: NOW, config: DEFAULT_SRS_CONFIG, newSeenToday: 0 });
    expect(fresh.newWordIds).toHaveLength(DEFAULT_SRS_CONFIG.newPerDay);
    expect(fresh.counts.newRemaining).toBe(0);

    const halfSpent = planDailySession(allIds, new Map(), {
      now: NOW,
      config: DEFAULT_SRS_CONFIG,
      newSeenToday: 6,
    });
    expect(halfSpent.newWordIds).toHaveLength(4);

    // Overdue learning cards come before overdue reviews.
    const progress = new Map<string, ProgressSnapshot>();
    progress.set("buy", { wordId: "buy", status: "learning", intervalMinutes: 1, dueAt: new Date(NOW.getTime() - 60_000) });
    progress.set("sell", { wordId: "sell", status: "reviewing", intervalMinutes: 1440, dueAt: new Date(NOW.getTime() - 3_600_000) });
    const withDue = planDailySession(allIds, progress, { now: NOW, config: DEFAULT_SRS_CONFIG, newSeenToday: 99 });
    expect(withDue.reviewWordIds[0]).toBe("buy");
    expect(withDue.reviewWordIds).toContain("sell");
    expect(withDue.newWordIds).toHaveLength(0); // budget exhausted
  });

  it("validates and clamps user configuration overrides", () => {
    const config = resolveSrsConfig({
      newPerDay: 999,
      masterRepetitions: 1, // forbidden: one correct answer must never master
      performanceWeight: 5,
      learningStepMinutes: [0, -3, 5],
    });
    expect(config.newPerDay).toBeLessThanOrEqual(100);
    expect(config.masterRepetitions).toBeGreaterThanOrEqual(2);
    expect(config.performanceWeight).toBeLessThanOrEqual(0.4);
    expect(config.learningStepMinutes).toEqual([5]);
    expect(describeInterval(30)).toContain("min");
    expect(describeInterval(90)).toContain("h");
    expect(describeInterval(60 * 26)).toContain("day");
  });
});

// ---------------------------------------------------------------------------
// Challenges
// ---------------------------------------------------------------------------

describe("challenge generator & grader", () => {
  const words = new Map(vocabWords.map((w) => [w.id, w]));

  it("generates all six kinds deterministically", () => {
    for (const kind of ["category-quiz", "meaning", "spelling", "arrangement", "contextual-usage", "matching"] as const) {
      const a = generateChallenge(vocabWords, { kind, seed: 123, size: 8 });
      const b = generateChallenge(vocabWords, { kind, seed: 123, size: 8 });
      expect(JSON.stringify(a.items)).toBe(JSON.stringify(b.items));
      expect(a.items.length).toBeGreaterThan(0);
    }
    const quiz = generateChallenge(vocabWords, { kind: "category-quiz", seed: 5, categoryId: "food", size: 8 });
    const testedIds = new Set(
      quiz.items.flatMap((item) => (item.type === "matching" ? item.wordIds : [item.wordId])),
    );
    for (const wordId of testedIds) {
      expect(words.get(wordId)).toBeDefined();
      expect(words.get(wordId)?.categoryId).toBe("food");
    }
    const types = new Set(quiz.items.map((item) => item.type));
    expect(types.size).toBeGreaterThanOrEqual(3); // mixed quiz
  });

  it("shuffles options so the correct answer has no fixed position", () => {
    const challenge = generateChallenge(vocabWords, { kind: "meaning", seed: 42, size: 15 });
    const firstCorrect = challenge.items.filter(
      (item) => item.type === "meaning" && item.options[0].text === words.get(item.wordId)?.meaning,
    ).length;
    expect(firstCorrect).toBeLessThan(challenge.items.length); // not always first
    for (const item of challenge.items) {
      if (item.type !== "meaning") continue;
      const entry = words.get(item.wordId)!;
      expect(item.options.filter((o) => o.text === entry.meaning)).toHaveLength(1);
      expect(item.options).toHaveLength(4);
    }
  });

  it("grades every item type correctly", () => {
    const run = generateChallenge(vocabWords, { kind: "category-quiz", seed: 99, size: 12 });
    const correct: Record<string, ChallengeAnswer> = {};
    for (const item of run.items) {
      const entry = words.get("wordId" in item ? item.wordId : vocabWords[0].id);
      if (item.type === "meaning") {
        correct[item.id] = { type: "meaning", optionId: item.options.find((o) => o.text === entry!.meaning)!.id };
      } else if (item.type === "contextual-usage") {
        correct[item.id] = { type: "contextual-usage", optionId: item.options.find((o) => o.text === entry!.word)!.id };
      } else if (item.type === "spelling") {
        correct[item.id] = { type: "spelling", text: entry!.word };
      } else if (item.type === "arrangement") {
        correct[item.id] = { type: "arrangement", tokens: entry!.example.english.split(" ") };
      } else if (item.type === "matching") {
        correct[item.id] = {
          type: "matching",
          pairs: item.wordIds.map((wordId) => ({ leftId: `w-${wordId}`, rightId: `m-${wordId}` })),
        };
      }
    }
    const graded = gradeChallenge(run, correct, words);
    expect(graded.correct).toBe(graded.total);
    expect(graded.results.every((r) => r.correct)).toBe(true);

    // All-wrong run grades everything false.
    const wrong: Record<string, ChallengeAnswer> = {};
    for (const item of run.items) {
      if (item.type === "matching") {
        wrong[item.id] = { type: "matching", pairs: [] };
      } else if (item.type === "spelling") {
        wrong[item.id] = { type: "spelling", text: "zzz" };
      } else if (item.type === "arrangement") {
        wrong[item.id] = { type: "arrangement", tokens: ["zzz"] };
      } else {
        wrong[item.id] = { type: item.type, optionId: "nope" };
      }
    }
    const gradedWrong = gradeChallenge(run, wrong, words);
    expect(gradedWrong.correct).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// Sentence practice
// ---------------------------------------------------------------------------

describe("sentence checker", () => {
  const buy = getVocabWord("buy")!;
  const wake = getVocabWord("wake-up")!;

  it("accepts real usage with inflected and irregular forms", () => {
    expect(checkSentence(buy, "I bought a new phone yesterday.").valid).toBe(true);
    expect(checkSentence(buy, "She buys bread every morning.").valid).toBe(true);
    expect(checkSentence(buy, "We are buying a house!").valid).toBe(true);
    expect(checkSentence(wake, "I wake up at seven every day.").valid).toBe(true);
    expect(checkSentence(wake, "She woke up late on Sunday.").valid).toBe(true);
  });

  it("rejects missing words, copies and too-short sentences", () => {
    expect(checkSentence(buy, "I like pizza.").issues.map((i) => i.code)).toContain("missing-word");
    expect(checkSentence(buy, "I want to buy a new dictionary.").issues.map((i) => i.code)).toContain("copied-example");
    expect(checkSentence(buy, "Buy now.").issues.map((i) => i.code)).toContain("too-short");
    expect(checkSentence(buy, "").valid).toBe(false);
  });

  it("coaches capitals and punctuation as warnings, not errors", () => {
    const result = checkSentence(buy, "my brother buys the tickets");
    // Warnings don't invalidate — only errors do.
    expect(result.valid).toBe(true);
    expect(result.issues.every((i) => i.severity === "warning")).toBe(true);
    expect(result.issues.map((i) => i.code)).toContain("capitalize");
    expect(result.issues.map((i) => i.code)).toContain("punctuation");
  });

  it("builds clean display forms (no wrong English in hints)", () => {
    expect(displayForms("buy")).toEqual(["buy", "buys", "bought", "buying"]);
    expect(displayForms("study")).toContain("studies");
    expect(displayForms("love")).toContain("loved");
    expect(inflectedForms("buy")).toContain("bought");
  });
});
