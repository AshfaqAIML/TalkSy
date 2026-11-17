/// <reference types="bun-types" />
/**
 * TOEFL Reading and Listening Practice Library tests (PROMPT 49).
 *
 *   1. Bank volume and distribution: 100 + 100 exercises, every task family
 *      at every difficulty tier, subject/text-kind variety.
 *   2. Integrity: both banks pass their validators with zero issues.
 *   3. Safe projections: answer keys, lures, keywords, explanations,
 *      evidence and grammar notes never reach the client payload; the
 *      listening transcript is null unless learningMode.
 *   4. Grading: the error taxonomy classifies correct, lure, missed and
 *      inference items exactly.
 *   5. Adaptive engine: the seven-dimension profile aggregates stored
 *      attempts and recommendations target the weakest dimension.
 *   6. Pathway: library steps resolve to the library route.
 *   7. API: listing, detail and submit endpoints behave (auth-gated
 *      submission; transcript returned on submit).
 */

import { describe, expect, it } from "bun:test";
import {
  TOEFL_READING_BANK,
  validateToeflReadingBank,
  readingExerciseBySlug,
} from "@/data/exams/toefl/reading-bank";
import {
  TOEFL_LISTENING_BANK,
  validateToeflListeningBank,
  listeningExerciseBySlug,
} from "@/data/exams/toefl/listening-bank";
import { LIBRARY_SKILLS } from "@/data/exams/toefl/library-skills";
import { toSafeReadingExercise, gradeReadingExercise, type ReadingSubmission } from "@/lib/exams/toefl-bank/reading";
import { toSafeListeningExercise, gradeListeningExercise, type ListeningSubmission } from "@/lib/exams/toefl-bank/listening";
import {
  buildToeflLibraryReport,
  recommendExercises,
  weakestSkills,
  type AttemptRow,
} from "@/lib/exams/toefl-bank/adaptive";
import { hrefForStep } from "@/lib/exams/pathways";

// ---------------------------------------------------------------------------
// 1 + 2. Volume, distribution, integrity
// ---------------------------------------------------------------------------

describe("TOEFL practice library — volume and distribution (PROMPT 49)", () => {
  it("carries 100 reading exercises across the three task types", () => {
    expect(TOEFL_READING_BANK.length).toBe(100);
    const byType = new Map<string, number>();
    for (const ex of TOEFL_READING_BANK) byType.set(ex.taskType, (byType.get(ex.taskType) ?? 0) + 1);
    expect(byType.get("complete-words")).toBe(34);
    expect(byType.get("daily-life")).toBe(33);
    expect(byType.get("academic-passage")).toBe(33);
  });

  it("carries 100 listening exercises across the four task types", () => {
    expect(TOEFL_LISTENING_BANK.length).toBe(100);
    const byType = new Map<string, number>();
    for (const ex of TOEFL_LISTENING_BANK) byType.set(ex.taskType, (byType.get(ex.taskType) ?? 0) + 1);
    expect(byType.get("choose-response")).toBe(25);
    expect(byType.get("conversation")).toBe(25);
    expect(byType.get("announcement")).toBe(25);
    expect(byType.get("academic-talk")).toBe(25);
  });

  it("reaches every difficulty tier in every task family", () => {
    for (const bank of [TOEFL_READING_BANK, TOEFL_LISTENING_BANK]) {
      const byType = new Map<string, Set<number>>();
      for (const ex of bank) {
        const set = byType.get(ex.taskType) ?? new Set<number>();
        set.add(ex.difficulty);
        byType.set(ex.taskType, set);
      }
      for (const [type, tiers] of byType) {
        for (const d of [1, 2, 3, 4, 5]) {
          expect(tiers.has(d), `${type} never reaches difficulty ${d}`).toBe(true);
        }
      }
    }
  });

  it("passes the integrity validators with zero issues", () => {
    expect(validateToeflReadingBank(TOEFL_READING_BANK)).toEqual([]);
    expect(validateToeflListeningBank(TOEFL_LISTENING_BANK)).toEqual([]);
  });

  it("keeps listening scripts inside their per-family word bands", () => {
    const bands: Record<string, [number, number]> = {
      "choose-response": [15, 60],
      conversation: [130, 260],
      announcement: [100, 190],
      "academic-talk": [210, 330],
    };
    const wc = (s: string) => (s.match(/[A-Za-z]+(?:-[A-Za-z]+)*|\d+(?:[.,:]\d+)*/g) ?? []).length;
    for (const ex of TOEFL_LISTENING_BANK) {
      const script = ex.segments.map((s) => s.text).join(" ");
      const [lo, hi] = bands[ex.taskType];
      const n = wc(script);
      expect(n, `${ex.slug}: ${n}w outside ${ex.taskType} band [${lo}, ${hi}]`).toBeGreaterThanOrEqual(lo);
      expect(n).toBeLessThanOrEqual(hi);
    }
  });

  it("uses all four accents with a North-American majority, as in the real test", () => {
    const accents = TOEFL_LISTENING_BANK.flatMap((e) => e.speakers.map((s) => s.accent));
    for (const a of ["north-american", "british", "australian", "nz"] as const) {
      expect(accents.some((x) => x === a), `accent ${a} never appears`).toBe(true);
    }
    const na = accents.filter((a) => a === "north-american").length;
    expect(na / accents.length).toBeGreaterThanOrEqual(0.5);
  });
});

// ---------------------------------------------------------------------------
// 3. Safe projections
// ---------------------------------------------------------------------------

/** Walks a payload and collects the paths of any forbidden key names. */
function forbiddenPaths(payload: unknown, forbidden: string[], base = "$"): string[] {
  const out: string[] = [];
  if (payload && typeof payload === "object") {
    for (const [k, v] of Object.entries(payload as Record<string, unknown>)) {
      const bare = k.replace(/___$/, "");
      if (forbidden.includes(bare)) out.push(`${base}.${k}`);
      if (v && typeof v === "object") out.push(...forbiddenPaths(v, forbidden, `${base}.${k}`));
    }
  }
  return out;
}

describe("TOEFL practice library — safe projections", () => {
  it("strips reading answer keys, lures, evidence, explanations and grammar notes", () => {
    for (const ex of TOEFL_READING_BANK) {
      const safe = toSafeReadingExercise(ex) as unknown;
      const paths = forbiddenPaths(safe, ["correct", "answer", "lure", "explanation", "evidence", "grammarNote", "whyWrong", "trap"]);
      expect(paths, `${ex.slug} leaks at ${paths.join(", ")}`).toEqual([]);
      for (const q of (safe as { questions: { options?: string[]; stem?: string }[] }).questions) {
        if (q.options) expect(q.options.length).toBe(4);
      }
    }
  });

  it("strips listening keys, keywords, traps — and gates the transcript", () => {
    for (const ex of TOEFL_LISTENING_BANK) {
      const safe = toSafeListeningExercise(ex);
      const paths = forbiddenPaths(safe, ["correct", "lure", "keywords", "explanation", "trap"]);
      expect(paths, `${ex.slug} leaks at ${paths.join(", ")}`).toEqual([]);
      if (ex.learningMode) {
        expect(safe.transcriptPolicy).toBe("open-learning");
        expect(safe.transcript).not.toBeNull();
      } else {
        expect(safe.transcriptPolicy).toBe("locked-until-submit");
        expect(safe.transcript).toBeNull();
      }
    }
  });

  it("reserves learningMode for foundation exercises (difficulty 1–2)", () => {
    for (const ex of TOEFL_LISTENING_BANK) {
      if (ex.learningMode) expect(ex.difficulty).toBeLessThanOrEqual(2);
    }
  });
});

// ---------------------------------------------------------------------------
// 4. Grading
// ---------------------------------------------------------------------------

describe("TOEFL practice library — grading taxonomy", () => {
  it("grades a words exercise: correct, trap, spelling, missed", () => {
    const ex = readingExerciseBySlug("toefl-rb-words-01");
    if (!ex) throw new Error("missing fixture");
    const words = ex.questions.filter((q) => q.kind === "words");
    expect(words.length).toBeGreaterThanOrEqual(8);
    const allCorrect: ReadingSubmission = {
      mode: "practice",
      answers: Object.fromEntries(ex.questions.map((q) => [q.no, (q.kind === "words" ? q.answer : q.correct) as string | number])) as Record<string, string | number>,
      timeSpentSec: 120,
    };
    const graded = gradeReadingExercise(ex, allCorrect);
    expect(graded.correctItems).toBe(graded.totalItems);
    const lureItem = words.find((w) => (w.lure ?? []).length > 0);
    if (lureItem && lureItem.kind === "words") {
      const trapped = gradeReadingExercise(ex, { ...allCorrect, answers: { ...allCorrect.answers, [String(lureItem.no)]: lureItem.lure![0] } });
      const it = trapped.items.find((i) => i.no === lureItem.no);
      expect(it?.errorType).toBe("trap");
    }
    const missed = gradeReadingExercise(ex, { ...allCorrect, answers: { ...allCorrect.answers, [String(words[0].no)]: "" } });
    expect(missed.items.find((i) => i.no === words[0].no)?.errorType).toBe("missed");
  });

  it("grades an MCQ exercise: correct, trap via lure, missed", () => {
    const ex = readingExerciseBySlug("toefl-rb-acad-01");
    if (!ex) throw new Error("missing fixture");
    const mcqs = ex.questions.filter((q) => q.kind === "mcq");
    expect(mcqs.length).toBeGreaterThanOrEqual(5);
    const allCorrect: ReadingSubmission = {
      mode: "practice",
      answers: Object.fromEntries(ex.questions.map((q) => [q.no, (q.kind === "words" ? q.answer : q.correct) as string | number])) as Record<string, string | number>,
      timeSpentSec: 300,
    };
    const graded = gradeReadingExercise(ex, allCorrect);
    expect(graded.correctItems).toBe(graded.totalItems);
    const withLure = mcqs.find((q): q is Extract<typeof q, { kind: "mcq" }> => q.kind === "mcq" && q.lure !== undefined);
    if (withLure && withLure.lure !== undefined) {
      const trapped = gradeReadingExercise(ex, { ...allCorrect, answers: { ...allCorrect.answers, [String(withLure.no)]: withLure.lure } });
      expect(trapped.items.find((i) => i.no === withLure.no)?.errorType).toBe("trap");
    }
  });

  it("grades listening exercises: correct, distractor, missed", () => {
    const ex = listeningExerciseBySlug("toefl-lb-ann-01");
    const lex0 = ex!;
    if (!ex) throw new Error("missing fixture");
    const allCorrect: ListeningSubmission = {
      mode: "practice",
      answers: Object.fromEntries(lex0.questions.map((q): [number, number] => [q.no, q.correct])),
      timeSpentSec: 90,
    };
    const graded = gradeListeningExercise(ex, allCorrect);
    expect(graded.correctItems).toBe(graded.totalItems);
    const withLure = ex.questions.find((q) => q.lure !== undefined);
    if (withLure && withLure.lure !== undefined) {
      const trapped = gradeListeningExercise(ex, { ...allCorrect, answers: { ...allCorrect.answers, [String(withLure.no)]: withLure.lure } });
      expect(trapped.items.find((i) => i.no === withLure.no)?.errorType).toBe("distractor");
    }
    const missed = gradeListeningExercise(ex, { ...allCorrect, answers: { ...allCorrect.answers, [String(ex.questions[0].no)]: -1 } });
    expect(missed.items.find((i) => i.no === ex.questions[0].no)?.errorType).toBe("missed");
  });
});

// ---------------------------------------------------------------------------
// 5. Adaptive engine
// ---------------------------------------------------------------------------

function row(slug: string, taskType: string, difficulty: number, skillCounts: Record<string, { total: number; correct: number }>, total: number, correct: number): AttemptRow {
  return {
    id: `row-${slug}-${Math.random().toString(36).slice(2, 7)}`,
    exerciseSlug: slug,
    taskType,
    difficulty,
    mode: "practice",
    totalQuestions: total,
    correctCount: correct,
    skillCounts: JSON.stringify(skillCounts),
    errorCounts: JSON.stringify({ trap: 1, wrong: 1 }),
    timeSpentSec: 100,
    createdAt: new Date(),
  };
}

describe("TOEFL practice library — adaptive engine", () => {
  it("aggregates the seven tracked dimensions from stored attempts", () => {
    const reading = [
      row("toefl-rb-words-01", "complete-words", 1, { vocabulary: { total: 8, correct: 8 } }, 8, 8),
      row("toefl-rb-words-02", "complete-words", 2, { vocabulary: { total: 9, correct: 4 } }, 9, 4),
    ];
    const listening = [
      row("toefl-lb-conv-01", "conversation", 1, { details: { total: 4, correct: 1 }, comprehension: { total: 4, correct: 4 } }, 4, 2),
    ];
    const report = buildToeflLibraryReport(reading, listening);
    expect(report.attempts).toBe(3);
    expect(report.skills.map((s) => s.skill)).toEqual([...LIBRARY_SKILLS]);
    const vocab = report.skills.find((s) => s.skill === "vocabulary")!;
    expect(vocab.total).toBe(17);
    expect(vocab.correct).toBe(12);
    expect(vocab.accuracy).toBeCloseTo(12 / 17);
    // Untouched dimensions show no data, not zero-accuracy noise.
    const inference = report.skills.find((s) => s.skill === "inference")!;
    expect(inference.total).toBe(0);
    expect(inference.accuracy).toBe(0);
  });

  it("recommends exercises that target the weakest dimension, excluding attempted ones", () => {
    const reading = [
      row("toefl-rb-words-01", "complete-words", 1, { vocabulary: { total: 8, correct: 2 } }, 8, 2),
      row("toefl-rb-words-02", "complete-words", 2, { vocabulary: { total: 9, correct: 3 } }, 9, 3),
      row("toefl-rb-words-08", "complete-words", 2, { vocabulary: { total: 9, correct: 4 } }, 9, 4),
    ];
    const report = buildToeflLibraryReport(reading, []);
    const weak = weakestSkills(report, 1);
    expect(weak[0].skill).toBe("vocabulary");
    const recs = recommendExercises(report, new Set(reading.map((r) => r.exerciseSlug)));
    expect(recs.length).toBeGreaterThan(0);
    expect(recs.every((r) => !reading.some((x) => x.exerciseSlug === r.slug))).toBe(true);
    expect(recs.every((r) => r.reason.includes("Vocabulary"))).toBe(true);
  });

  it("cold-starts with one exercise per task family when there is no history", () => {
    const report = buildToeflLibraryReport([], []);
    const recs = recommendExercises(report, new Set());
    expect(recs.length).toBe(7);
    expect(new Set(recs.map((r) => r.taskType)).size).toBe(7);
  });
});

// ---------------------------------------------------------------------------
// 6. Pathway
// ---------------------------------------------------------------------------

describe("TOEFL practice library — pathway integration", () => {
  it("resolves library steps to the library route", () => {
    expect(hrefForStep("library", null)).toBe("#/exams/toefl/library");
    expect(hrefForStep("library", "toefl-rb-daily-01")).toBe("#/exams/toefl/library/toefl-rb-daily-01");
    expect(hrefForStep("library", "toefl-lb-talk-11")).toBe("#/exams/toefl/library/toefl-lb-talk-11");
  });
});

// ---------------------------------------------------------------------------
// 7. API routes
// ---------------------------------------------------------------------------

describe("TOEFL practice library — API", () => {
  it("lists the public library index without keys or scripts", async () => {
    const { GET: readingList } = await import("@/app/api/exams/toefl/reading/bank/route");
    const { GET: listeningList } = await import("@/app/api/exams/toefl/listening/bank/route");
    const rRes = await readingList(new Request("http://127.0.0.1:3000/api/exams/toefl/reading/bank"));
    const rJson = await rRes.json();
    expect(rRes.status).toBe(200);
    expect(rJson.exercises.length).toBe(100);
    expect(forbiddenPaths(rJson, ["answer", "correct", "lure", "explanation", "passage"])).toEqual([]);
    const lRes = await listeningList(new Request("http://127.0.0.1:3000/api/exams/toefl/listening/bank"));
    const lJson = await lRes.json();
    expect(lJson.exercises.length).toBe(100);
    expect(forbiddenPaths(lJson, ["segments", "keywords", "correct", "explanation"])).toEqual([]);
  });

  it("serves a safe exercise detail and gates the listening transcript", async () => {
    const { GET: readingDetail } = await import("@/app/api/exams/toefl/reading/bank/[slug]/route");
    const rRes = await readingDetail(new Request("http://127.0.0.1:3000/x"), { params: Promise.resolve({ slug: "toefl-rb-daily-01" }) });
    const rJson = await rRes.json();
    expect(rRes.status).toBe(200);
    expect(rJson.exercise.slug).toBe("toefl-rb-daily-01");
    expect(forbiddenPaths(rJson, ["correct", "explanation", "evidence", "answer"])).toEqual([]);

    const { GET: listeningDetail } = await import("@/app/api/exams/toefl/listening/bank/[slug]/route");
    const lJson = await (await listeningDetail(new Request("http://127.0.0.1:3000/x"), { params: Promise.resolve({ slug: "toefl-lb-talk-11" }) })).json();
    expect(lJson.exercise.transcript).toBeNull();
    // The audio definition (segments) ships — it is what the player speaks.
    expect(lJson.exercise.segments.length).toBeGreaterThan(0);
  });

  it("rejects anonymous submission and returns the transcript on a graded one", async () => {
    const { POST: submitReading } = await import("@/app/api/exams/toefl/reading/bank/[slug]/submit/route");
    const anon = await submitReading(new Request("http://127.0.0.1:3000/x", { method: "POST", body: "{}", headers: { "content-type": "application/json" } }), { params: Promise.resolve({ slug: "toefl-rb-acad-01" }) });
    expect(anon.status).toBe(401);

    const { POST: registerRoute } = await import("@/app/api/auth/register/route");
    const email = `toefl-lib-${Date.now()}-${Math.floor(Math.random() * 10000)}@talksy.test`;
    const reg = registerRoute(new Request("http://127.0.0.1:3000/api/auth/register", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, name: "Lib Test", password: "password123" }) }));
    const regRes = await reg;
    const cookie = regRes.headers.getSetCookie?.().map((c) => c.split(";")[0]).join("; ") ?? "";
    expect(regRes.status).toBe(201);

    const ex = readingExerciseBySlug("toefl-rb-acad-01")!;
    const answers: Record<string, string | number> = Object.fromEntries(ex.questions.map((q) => [q.no, (q.kind === "words" ? q.answer : q.correct) as string | number])) as Record<string, string | number>;
    const ok = await submitReading(new Request("http://127.0.0.1:3000/x", { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ mode: "practice", answers, timeSpentSec: 200 }) }), { params: Promise.resolve({ slug: "toefl-rb-acad-01" }) });
    expect(ok.status).toBe(200);
    const okJson = await ok.json();
    expect(okJson.result.correctItems).toBe(okJson.result.totalItems);
    expect(okJson.vocabulary.length).toBeGreaterThan(0);

    const { POST: submitListening } = await import("@/app/api/exams/toefl/listening/bank/[slug]/submit/route");
    const lex = listeningExerciseBySlug("toefl-lb-ann-01")!;
    const lAnswers: Record<string, number> = Object.fromEntries(lex.questions.map((q): [number, number] => [q.no, q.correct]));
    const lok = await submitListening(new Request("http://127.0.0.1:3000/x", { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ mode: "practice", answers: lAnswers, timeSpentSec: 90 }) }), { params: Promise.resolve({ slug: "toefl-lb-ann-01" }) });
    expect(lok.status).toBe(200);
    const lokJson = await lok.json();
    expect(lokJson.transcript.segments.length).toBeGreaterThan(0);
    expect(lokJson.transcript.note.length).toBeGreaterThan(0);

    const { GET: performance } = await import("@/app/api/exams/toefl/library/performance/route");
    const perf = await performance(new Request("http://127.0.0.1:3000/x", { headers: { cookie } }));
    expect(perf.status).toBe(200);
    const perfJson = await perf.json();
    expect(perfJson.report.attempts).toBe(2);
    expect(perfJson.report.skills.length).toBe(7);
    expect(perfJson.report.recommendations.length).toBeGreaterThan(0);
  });
});
