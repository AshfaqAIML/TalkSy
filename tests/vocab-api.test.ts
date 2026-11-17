/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { POST as registerRoute } from "@/app/api/auth/register/route";
import { GET as wordsRoute } from "@/app/api/vocabulary/words/route";
import { GET as wordDetailRoute } from "@/app/api/vocabulary/words/[id]/route";
import { GET as categoriesRoute } from "@/app/api/vocabulary/categories/route";
import { GET as dailyRoute } from "@/app/api/vocabulary/daily/route";
import { GET as flashcardsRoute } from "@/app/api/vocabulary/flashcards/route";
import { POST as reviewRoute } from "@/app/api/vocabulary/review/route";
import { GET as overviewRoute } from "@/app/api/vocabulary/overview/route";
import { GET as bookmarksGetRoute, POST as bookmarksPostRoute } from "@/app/api/vocabulary/bookmarks/route";
import { GET as listsGetRoute, POST as listsPostRoute } from "@/app/api/vocabulary/lists/route";
import {
  GET as listDetailRoute,
  POST as listAddRoute,
  DELETE as listDeleteRoute,
  PATCH as listPatchRoute,
} from "@/app/api/vocabulary/lists/[id]/route";
import { GET as sentencesGetRoute, POST as sentencesPostRoute } from "@/app/api/vocabulary/sentences/route";
import {
  GET as challengeHistoryRoute,
  POST as challengeStartRoute,
} from "@/app/api/vocabulary/challenges/route";
import { POST as challengeSubmitRoute } from "@/app/api/vocabulary/challenges/[id]/submit/route";
import {
  GET as settingsGetRoute,
  PUT as settingsPutRoute,
  DELETE as settingsDeleteRoute,
} from "@/app/api/vocabulary/settings/route";
import { getVocabWord, vocabWords } from "@/data/vocabulary";

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
    headers: {
      "content-type": "application/json",
      ...(cookie ? { cookie } : {}),
    },
    body: JSON.stringify(body),
  };
}

async function registerTestUser(): Promise<string> {
  const email = `vocab-${Date.now()}-${Math.floor(Math.random() * 10000)}@talksy.test`;
  const res = await registerRoute(
    request("/api/auth/register", jsonBody({ email, name: "Vocab Learner", password: "password123" })),
  );
  expect(res.status).toBe(201);
  return extractCookies(res);
}

describe("vocabulary public API", () => {
  it("serves categories with counts and context info", async () => {
    const res = await categoriesRoute();
    expect(res.status).toBe(200);
    const data = (await res.json()) as {
      categories: { id: string; total: number; contextCount: number; subcategories: unknown[] }[];
    };
    expect(data.categories).toHaveLength(12);
    const food = data.categories.find((c) => c.id === "food");
    expect(food?.total).toBe(11);
    expect(food?.contextCount).toBeGreaterThanOrEqual(1);
    expect(food!.subcategories.length).toBeGreaterThanOrEqual(2);
  });

  it("serves a deterministic daily word with an archive", async () => {
    const res = await dailyRoute(request("/api/vocabulary/daily"));
    expect(res.status).toBe(200);
    const data = (await res.json()) as {
      today: { word: { id: string }; dateKey: string };
      archive: { word: { id: string } }[];
    };
    expect(getVocabWord(data.today.word.id)).toBeDefined();
    expect(data.archive).toHaveLength(6);
  });

  it("searches and filters words (public, unannotated)", async () => {
    const res = await wordsRoute(
      request("/api/vocabulary/words?q=money&limit=5"),
    );
    expect(res.status).toBe(200);
    const data = (await res.json()) as {
      words: { word: { id: string }; bookmarked: boolean; progress: unknown }[];
      total: number;
    };
    expect(data.words[0].word.id).toBe("money");
    expect(data.words[0].bookmarked).toBe(false);
    expect(data.words[0].progress).toBeNull();

    const category = await wordsRoute(request("/api/vocabulary/words?category=travel"));
    const travelData = (await category.json()) as { words: { word: { categoryId: string } }[] };
    expect(travelData.words.every((w) => w.word.categoryId === "travel")).toBe(true);
  });

  it("serves full word details with related words and context items", async () => {
    const res = await wordDetailRoute(request("/api/vocabulary/words/buy"), ctx({ id: "buy" }));
    expect(res.status).toBe(200);
    const data = (await res.json()) as {
      word: { id: string; synonyms: string[]; antonyms: string[]; wordFamily: unknown[]; collocations: unknown[] };
      relatedWords: { word: { id: string } }[];
      contextItems: { id: string }[];
    };
    expect(data.word.id).toBe("buy");
    expect(data.word.antonyms).toContain("sell");
    expect(data.relatedWords.length).toBeGreaterThan(0);

    // Words that context passages teach link back to those passages.
    const menuRes = await wordDetailRoute(request("/api/vocabulary/words/menu"), ctx({ id: "menu" }));
    const menuData = (await menuRes.json()) as { contextItems: { id: string }[] };
    expect(menuData.contextItems.map((c) => c.id)).toContain("ctx-coffee-shop");

    const missing = await wordDetailRoute(request("/api/vocabulary/words/nope"), ctx({ id: "nope" }));
    expect(missing.status).toBe(404);
  });
});

describe("vocabulary learner API (golden path)", () => {
  it("full journey: flashcards → grades → overview → bookmarks → lists → sentences → challenges → settings", async () => {
    const cookie = await registerTestUser();

    // --- Flashcards: a fresh learner gets the daily queue with new words ----
    const flashRes = await flashcardsRoute(
      request("/api/vocabulary/flashcards?study=queue", { headers: { cookie } }),
    );
    expect(flashRes.status).toBe(200);
    const session = (await flashRes.json()) as {
      cards: { word: { id: string }; isNew: boolean }[];
      meta: { newRemaining: number; total: number };
    };
    expect(session.cards.length).toBe(10); // default newPerDay
    expect(session.cards.every((c) => c.isNew)).toBe(true);

    // Auth is required.
    const anonFlash = await flashcardsRoute(request("/api/vocabulary/flashcards"));
    expect(anonFlash.status).toBe(401);

    // --- Grade the first card "good" — must NOT be mastered -----------------
    const firstWord = session.cards[0].word.id;
    const gradeRes = await reviewRoute(
      request("/api/vocabulary/review", jsonBody({ action: "grade", wordId: firstWord, rating: "good", source: "flashcard" }, cookie)),
    );
    expect(gradeRes.status).toBe(200);
    const graded = (await gradeRes.json()) as { progress: { status: string; repetitions: number }; dueLabel: string };
    expect(graded.progress.status).toBe("learning"); // one correct ≠ mastery
    expect(graded.progress.repetitions).toBe(1);

    // --- "again" on the second card creates a lapse ------------------------
    const secondWord = session.cards[1].word.id;
    const againRes = await reviewRoute(
      request("/api/vocabulary/review", jsonBody({ action: "grade", wordId: secondWord, rating: "again", source: "flashcard" }, cookie)),
    );
    const again = (await againRes.json()) as { progress: { status: string; lapses: number } };
    expect(again.progress.status).toBe("learning");
    expect(again.progress.lapses).toBe(1);

    // --- Snooze + difficulty flag are non-grading actions -------------------
    const snoozeRes = await reviewRoute(
      request("/api/vocabulary/review", jsonBody({ action: "snooze", wordId: session.cards[2].word.id, hours: 2 }, cookie)),
    );
    expect(snoozeRes.status).toBe(200);
    const flagRes = await reviewRoute(
      request("/api/vocabulary/review", jsonBody({ action: "flag", wordId: session.cards[3].word.id, difficult: true }, cookie)),
    );
    expect(flagRes.status).toBe(200);

    // --- Overview reflects the graded words ---------------------------------
    const overviewRes = await overviewRoute(request("/api/vocabulary/overview", { headers: { cookie } }));
    expect(overviewRes.status).toBe(200);
    const overview = (await overviewRes.json()) as {
      totals: { learning: number; difficult: number; library: number };
      newToday: number;
      accuracy: { reviews: number };
      recentWords: { word: { id: string } }[];
    };
    expect(overview.totals.learning).toBeGreaterThanOrEqual(4);
    expect(overview.totals.difficult).toBe(1);
    // Only graded reviews consume the daily new-word budget (snooze/flag don't).
    expect(overview.newToday).toBe(2);
    expect(overview.accuracy.reviews).toBe(2); // the two flashcard grades so far
    expect(overview.recentWords.length).toBeGreaterThan(0);

    // --- Bookmarks toggle -----------------------------------------------------
    const bookmarkRes = await bookmarksPostRoute(
      request("/api/vocabulary/bookmarks", jsonBody({ wordId: "cook" }, cookie)),
    );
    expect(bookmarkRes.status).toBe(200);
    expect(((await bookmarkRes.json()) as { bookmarked: boolean }).bookmarked).toBe(true);
    const bookmarksList = await bookmarksGetRoute(
      request("/api/vocabulary/bookmarks", { headers: { cookie } }),
    );
    const bookmarkData = (await bookmarksList.json()) as { words: { word: { id: string } }[] };
    expect(bookmarkData.words.map((w) => w.word.id)).toContain("cook");

    // --- Word lists: create → add → list → remove ---------------------------
    const createRes = await listsPostRoute(
      request("/api/vocabulary/lists", jsonBody({ name: "Kitchen words", description: "cooking at home" }, cookie)),
    );
    expect(createRes.status).toBe(201);
    const list = ((await createRes.json()) as { list: { id: string; name: string } }).list;
    expect(list.name).toBe("Kitchen words");

    const addRes = await listAddRoute(
      request(`/api/vocabulary/lists/${list.id}`, jsonBody({ wordId: "kitchen" }, cookie)),
      ctx({ id: list.id }),
    );
    expect(addRes.status).toBe(200);
    const listDetailRes = await listDetailRoute(
      request(`/api/vocabulary/lists/${list.id}`, { headers: { cookie } }),
      ctx({ id: list.id }),
    );
    const listDetail = (await listDetailRes.json()) as { words: { word: { id: string } }[] };
    expect(listDetail.words.map((w) => w.word.id)).toContain("kitchen");

    const patchRes = await listPatchRoute(
      request(`/api/vocabulary/lists/${list.id}`, jsonBody({ name: "Kitchen & food" }, cookie, "PATCH")),
      ctx({ id: list.id }),
    );
    expect(((await patchRes.json()) as { list: { name: string } }).list.name).toBe("Kitchen & food");

    const removeRes = await listDeleteRoute(
      request(`/api/vocabulary/lists/${list.id}?wordId=kitchen`, { method: "DELETE", headers: { cookie } }),
      ctx({ id: list.id }),
    );
    expect(removeRes.status).toBe(200);

    // --- Sentence practice: valid + invalid ----------------------------------
    const validSentence = await sentencesPostRoute(
      request("/api/vocabulary/sentences", jsonBody({ wordId: "cook", sentence: "My father cooks dinner every Friday." }, cookie)),
    );
    expect(validSentence.status).toBe(200);
    const validData = (await validSentence.json()) as {
      valid: boolean;
      issues: { code: string }[];
      progress: { repetitions: number } | null;
    };
    expect(validData.valid).toBe(true);
    expect(validData.progress?.repetitions).toBeGreaterThanOrEqual(1); // counted as a review

    const invalidSentence = await sentencesPostRoute(
      request("/api/vocabulary/sentences", jsonBody({ wordId: "cook", sentence: "I like pizza." }, cookie)),
    );
    const invalidData = (await invalidSentence.json()) as { valid: boolean; issues: { code: string }[] };
    expect(invalidData.valid).toBe(false);
    expect(invalidData.issues.map((i) => i.code)).toContain("missing-word");

    const copiedSentence = await sentencesPostRoute(
      request("/api/vocabulary/sentences", jsonBody({ wordId: "cook", sentence: "Dad cooks dinner on Fridays." }, cookie)),
    );
    const copiedData = (await copiedSentence.json()) as { valid: boolean; issues: { code: string }[] };
    expect(copiedData.valid).toBe(false);
    expect(copiedData.issues.map((i) => i.code)).toContain("copied-example");

    const sentenceHistory = await sentencesGetRoute(
      request("/api/vocabulary/sentences?wordId=cook", { headers: { cookie } }),
    );
    const historyData = (await sentenceHistory.json()) as { sentences: unknown[] };
    expect(historyData.sentences).toHaveLength(3);

    // --- Challenges: start → submit → verify grading + SRS ------------------
    const startRes = await challengeStartRoute(
      request("/api/vocabulary/challenges", jsonBody({ kind: "category-quiz", categoryId: "food", size: 8 }, cookie)),
    );
    expect(startRes.status).toBe(201);
    const run = (await startRes.json()) as {
      runId: string;
      items: {
        id: string;
        type: string;
        wordId?: string;
        wordIds?: string[];
        options?: { id: string; text: string }[];
        audioText?: string;
        tokens?: string[];
      }[];
    };
    expect(run.items.length).toBe(8);

    // Build a half-correct answer set from the word data (no answer key sent).
    const words = new Map(vocabWords.map((w) => [w.id, w]));
    const answers: Record<string, unknown> = {};
    run.items.forEach((item, index) => {
      if (item.type === "meaning") {
        const entry = words.get(item.wordId!)!;
        answers[item.id] = { type: "meaning", optionId: item.options!.find((o) => o.text === entry.meaning)?.id ?? "x" };
      } else if (item.type === "contextual-usage") {
        const entry = words.get(item.wordId!)!;
        answers[item.id] = index % 2 === 0
          ? { type: "contextual-usage", optionId: item.options!.find((o) => o.text === entry.word)?.id ?? "x" }
          : { type: "contextual-usage", optionId: item.options![0].id }; // may be right or wrong
      } else if (item.type === "spelling") {
        answers[item.id] = index % 2 === 0
          ? { type: "spelling", text: words.get(item.wordId!)!.word }
          : { type: "spelling", text: "zzzzz" };
      } else if (item.type === "arrangement") {
        answers[item.id] = { type: "arrangement", tokens: words.get(item.wordId!)!.example.english.split(" ") };
      } else if (item.type === "matching") {
        answers[item.id] = {
          type: "matching",
          pairs: item.wordIds!.map((wordId) => ({ leftId: `w-${wordId}`, rightId: `m-${wordId}` })),
        };
      }
    });

    const submitRes = await challengeSubmitRoute(
      request(`/api/vocabulary/challenges/${run.runId}/submit`, jsonBody({ answers, durationMs: 45000 }, cookie)),
      ctx({ id: run.runId }),
    );
    expect(submitRes.status).toBe(200);
    const submitted = (await submitRes.json()) as {
      total: number;
      correct: number;
      score: number;
      results: { correct: boolean; explanation: string }[];
      graded: { wordId: string; correct: boolean }[];
    };
    expect(submitted.total).toBe(run.items.length);
    expect(submitted.correct).toBeGreaterThan(0);
    expect(submitted.correct).toBeLessThan(submitted.total); // half-correct by design
    expect(submitted.graded.length).toBeGreaterThan(0);
    expect(submitted.results.every((r) => r.explanation.length > 0)).toBe(true);

    // Double submission is rejected.
    const doubleSubmit = await challengeSubmitRoute(
      request(`/api/vocabulary/challenges/${run.runId}/submit`, jsonBody({ answers: {} }, cookie)),
      ctx({ id: run.runId }),
    );
    expect(doubleSubmit.status).toBe(409);

    // History shows the completed run.
    const historyRes = await challengeHistoryRoute(
      request("/api/vocabulary/challenges", { headers: { cookie } }),
    );
    const history = (await historyRes.json()) as { runs: { id: string; kind: string; total: number }[] };
    expect(history.runs).toHaveLength(1);
    expect(history.runs[0].kind).toBe("category-quiz");

    // --- SRS settings: read, clamp, reset ------------------------------------
    const settingsRes = await settingsGetRoute(request("/api/vocabulary/settings", { headers: { cookie } }));
    const defaults = (await settingsRes.json()) as { config: { newPerDay: number; masterRepetitions: number } };
    expect(defaults.config.newPerDay).toBe(10);
    expect(defaults.config.masterRepetitions).toBeGreaterThanOrEqual(2);

    const putRes = await settingsPutRoute(
      request("/api/vocabulary/settings", jsonBody({ overrides: { newPerDay: 5, masterRepetitions: 1, evil: "hack" } }, cookie, "PUT")),
    );
    const updated = (await putRes.json()) as { config: { newPerDay: number; masterRepetitions: number } };
    expect(updated.config.newPerDay).toBe(5);
    expect(updated.config.masterRepetitions).toBeGreaterThanOrEqual(2); // clamped, never 1

    // The new daily budget applies to the next flashcard session.
    const newBudget = await flashcardsRoute(
      request("/api/vocabulary/flashcards?study=queue", { headers: { cookie } }),
    );
    const budgetSession = (await newBudget.json()) as { meta: { newRemaining: number } };
    expect(budgetSession.meta.newRemaining).toBeLessThanOrEqual(5);

    const resetRes = await settingsDeleteRoute(
      request("/api/vocabulary/settings", { method: "DELETE", headers: { cookie } }),
    );
    const reset = (await resetRes.json()) as { config: { newPerDay: number } };
    expect(reset.config.newPerDay).toBe(10);

    // --- Auth guards -----------------------------------------------------------
    const guardChecks = await Promise.all([
      reviewRoute(request("/api/vocabulary/review", jsonBody({ action: "grade", wordId: "buy", rating: "good" }))),
      overviewRoute(request("/api/vocabulary/overview")),
      listsPostRoute(request("/api/vocabulary/lists", jsonBody({ name: "x" }))),
      sentencesPostRoute(request("/api/vocabulary/sentences", jsonBody({ wordId: "buy", sentence: "I buy milk." }))),
      challengeStartRoute(request("/api/vocabulary/challenges", jsonBody({ kind: "meaning" }))),
      settingsPutRoute(request("/api/vocabulary/settings", jsonBody({ overrides: {} }, undefined, "PUT"))),
    ]);
    for (const res of guardChecks) {
      expect(res.status).toBe(401);
    }
  });

  it("serves annotated words for logged-in learners (progress + bookmarks)", async () => {
    const cookie = await registerTestUser();
    await reviewRoute(
      request("/api/vocabulary/review", jsonBody({ action: "grade", wordId: "buy", rating: "good" }, cookie)),
    );
    const res = await wordsRoute(
      request("/api/vocabulary/words?q=buy", { headers: { cookie } }),
    );
    const data = (await res.json()) as {
      words: { word: { id: string }; progress: { status: string; repetitions: number } | null }[];
    };
    expect(data.words[0].progress?.status).toBe("learning");
    expect(data.words[0].progress?.repetitions).toBe(1);
  });

  it("rejects unknown words, kinds and actions", async () => {
    const cookie = await registerTestUser();
    const unknownWord = await reviewRoute(
      request("/api/vocabulary/review", jsonBody({ action: "grade", wordId: "not-a-word", rating: "good" }, cookie)),
    );
    expect(unknownWord.status).toBe(404);

    const badRating = await reviewRoute(
      request("/api/vocabulary/review", jsonBody({ action: "grade", wordId: "buy", rating: "perfect" }, cookie)),
    );
    expect(badRating.status).toBe(400);

    const badAction = await reviewRoute(
      request("/api/vocabulary/review", jsonBody({ action: "explode", wordId: "buy" }, cookie)),
    );
    expect(badAction.status).toBe(400);

    const badKind = await challengeStartRoute(
      request("/api/vocabulary/challenges", jsonBody({ kind: "nonsense" }, cookie)),
    );
    expect(badKind.status).toBe(400);

    const badCategory = await challengeStartRoute(
      request("/api/vocabulary/challenges", jsonBody({ kind: "meaning", categoryId: "nope" }, cookie)),
    );
    expect(badCategory.status).toBe(404);
  });
});
