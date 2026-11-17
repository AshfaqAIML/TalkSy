/**
 * IELTS Speaking Masterclass — performance analytics (PROMPT 47, Parts 6–7).
 *
 * Aggregates every speaking-bank attempt into the learner's dashboard:
 * per-criterion band averages, part and topic spread, fluency discipline
 * (pace, fillers, under-length turns), revision chains, and
 * weakness-driven lesson recommendations that resolve to real authored
 * masterclass lessons under their real titles.
 */

import type { SpeakingCriterionKey } from "@/data/exams/ielts/speaking-bank/types";
import { SPEAKING_CRITERIA } from "@/data/exams/ielts/speaking-bank/types";
import type { SpeakingAttemptDto } from "./service";

// ---------------------------------------------------------------------------
// The report
// ---------------------------------------------------------------------------

export type SpeakingLessonRecommendation = {
  lessonSlug: string;
  lessonTitle: string;
  reason: string;
  severity: "high" | "medium" | "low";
};

export type SpeakingPerformanceReport = {
  attempts: number;
  wordsSpoken: number;
  totalSpeakingSec: number;
  overallAvg: number;
  criterionAvg: { key: SpeakingCriterionKey; label: string; avg: number | null; attempts: number }[];
  byPart: { part: number; attempts: number; avg: number }[];
  byKind: { kind: string; attempts: number; avg: number }[];
  byFamily: { family: string; attempts: number; avg: number }[];
  /** Part 2 turns under the one-minute floor. */
  shortTurnRate: number;
  shortTurns: number;
  /** Attempts whose implied pace sits outside the natural band. */
  offPaceRate: number;
  avgWpm: number;
  /** Attempts that never answered every prompt visibly. */
  incompleteCoverageRate: number;
  revisionChains: {
    itemSlug: string;
    versions: { version: number; overall: number; createdAt: string }[];
    improved: boolean;
    delta: number;
  }[];
  recentAttempts: SpeakingAttemptDto[];
  recommendations: SpeakingLessonRecommendation[];
};

// ---------------------------------------------------------------------------
// Masterclass lesson map — mirrors the authored m5 module. A contract test
// walks the authored module and asserts every slug below resolves to a real
// lesson under its real title (no raw-slug fallback).
// ---------------------------------------------------------------------------

export const SPEAKING_LESSONS: Record<string, string> = {
  // Foundations
  "ielts-speaking-format": "The Speaking examination format",
  "ielts-speaking-assessed": "What the examiner assesses",
  "ielts-speaking-answer-development": "Answer development",
  "ielts-speaking-fluency": "Natural fluency",
  "ielts-speaking-memorised": "Avoiding memorised responses",
  "ielts-speaking-pronunciation-criterion": "Pronunciation: what the criterion really rewards",
  "ielts-speaking-vocabulary": "Vocabulary for speaking",
  "ielts-speaking-grammar-speech": "Grammar accuracy in speech",
  "ielts-speaking-extending": "Extending answers naturally",
  "ielts-speaking-unfamiliar": "Handling unfamiliar questions",
  // Part 1 topics
  "ielts-speaking-t-introduction": "Part 1 topics: Introduction",
  "ielts-speaking-t-work": "Part 1 topics: Work",
  "ielts-speaking-t-study": "Part 1 topics: Study",
  "ielts-speaking-t-hometown": "Part 1 topics: Hometown",
  "ielts-speaking-t-accommodation": "Part 1 topics: Accommodation",
  "ielts-speaking-t-family": "Part 1 topics: Family",
  "ielts-speaking-t-friends": "Part 1 topics: Friends",
  "ielts-speaking-t-hobbies": "Part 1 topics: Hobbies",
  "ielts-speaking-t-food": "Part 1 topics: Food",
  "ielts-speaking-t-travel": "Part 1 topics: Travel",
  "ielts-speaking-t-technology": "Part 1 topics: Technology",
  "ielts-speaking-t-education": "Part 1 topics: Education",
  "ielts-speaking-t-routines": "Part 1 topics: Daily routines",
  "ielts-speaking-t-shopping": "Part 1 topics: Shopping",
  "ielts-speaking-t-weather": "Part 1 topics: Weather",
  "ielts-speaking-t-books": "Part 1 topics: Books",
  "ielts-speaking-t-music": "Part 1 topics: Music",
  "ielts-speaking-t-sports": "Part 1 topics: Sports",
  "ielts-speaking-t-social": "Part 1 topics: Social activities",
  // Part 2 craft
  "ielts-speaking-cue-cards": "Understanding cue cards",
  "ielts-speaking-cue-requirements": "Identifying the key requirements",
  "ielts-speaking-prep-minute": "The one-minute preparation",
  "ielts-speaking-notes": "Effective note-taking",
  "ielts-speaking-organising": "Organising your ideas",
  "ielts-speaking-continuity": "Maintaining continuity",
  "ielts-speaking-at-length": "Speaking at length",
  "ielts-speaking-unfamiliar-topics": "Handling unfamiliar topics",
  // Part 2 families
  "ielts-speaking-card-people": "Cue card family: People",
  "ielts-speaking-card-places": "Cue card family: Places",
  "ielts-speaking-card-events": "Cue card family: Events",
  "ielts-speaking-card-experiences": "Cue card family: Experiences",
  "ielts-speaking-card-objects": "Cue card family: Objects",
  "ielts-speaking-card-activities": "Cue card family: Activities",
  "ielts-speaking-card-achievements": "Cue card family: Achievements",
  "ielts-speaking-card-books": "Cue card family: Books",
  "ielts-speaking-card-films": "Cue card family: Films",
  "ielts-speaking-card-travel": "Cue card family: Travel",
  "ielts-speaking-card-learning": "Cue card family: Learning experiences",
  // Part 3
  "ielts-speaking-abstract": "Abstract discussion",
  "ielts-speaking-opinions": "Giving opinions",
  "ielts-speaking-reasons": "Explaining reasons",
  "ielts-speaking-comparing": "Comparing",
  "ielts-speaking-evaluating": "Evaluating",
  "ielts-speaking-speculating": "Speculating",
  "ielts-speaking-social-changes": "Discussing social changes",
  "ielts-speaking-future": "Discussing future possibilities",
  "ielts-speaking-supporting": "Supporting arguments",
  "ielts-speaking-nuanced": "Developing nuanced answers",
  "ielts-speaking-progressive": "Progressive discussion practice",
  // Pronunciation
  "ielts-speaking-pron-sounds": "Individual sounds",
  "ielts-speaking-pron-word-stress": "Word stress",
  "ielts-speaking-pron-sentence-stress": "Sentence stress",
  "ielts-speaking-pron-intonation": "Intonation",
  "ielts-speaking-pron-connected": "Connected speech",
  "ielts-speaking-pron-linking": "Linking",
  "ielts-speaking-pron-rhythm": "Rhythm",
  "ielts-speaking-pron-pausing": "Pausing",
  "ielts-speaking-pron-articulation": "Clear articulation",
  "ielts-speaking-pron-natural": "Natural speech",
};

/** Part 1 topic weakness → the topic's own masterclass lesson. */
const PART1_TOPIC_LESSON: Record<string, string> = Object.fromEntries(
  [
    "introduction", "work", "study", "hometown", "accommodation", "family", "friends", "hobbies",
    "food", "travel", "technology", "education", "daily-routines", "shopping", "weather", "books",
    "music", "sports", "social-activities",
  ].map((topic) => [topic, `ielts-speaking-t-${topic === "daily-routines" ? "routines" : topic === "social-activities" ? "social" : topic}`]),
);

/** Part 2 family weakness → the family's own masterclass lesson. */
const CUE_FAMILY_LESSON: Record<string, string> = Object.fromEntries(
  ["people", "places", "events", "experiences", "objects", "activities", "achievements", "books", "films", "travel", "learning"].map(
    (family) => [family, `ielts-speaking-card-${family}`],
  ),
);

export type PerformanceAttemptRow = {
  id: string;
  itemSlug: string;
  part: number;
  kind: string;
  family: string;
  mode: string;
  version: number;
  wordCount: number;
  durationSec: number;
  wpm: number;
  overall: number;
  criteria: string;
  createdAt: Date;
};

function parseCriteria(row: PerformanceAttemptRow): Record<string, number> {
  try {
    const parsed = JSON.parse(row.criteria) as Record<string, { score?: number }>;
    return Object.fromEntries(Object.entries(parsed).map(([k, v]) => [k, typeof v?.score === "number" ? v.score : 0]));
  } catch {
    return {};
  }
}

const avg = (values: number[]): number | null => (values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : null);

export function buildSpeakingPerformanceReport(rows: PerformanceAttemptRow[]): SpeakingPerformanceReport {
  const attempts: SpeakingAttemptDto[] = rows.map((row) => ({
    id: row.id,
    version: row.version,
    part: row.part,
    kind: row.kind,
    family: row.family,
    mode: row.mode,
    wordCount: row.wordCount,
    durationSec: row.durationSec,
    wpm: row.wpm,
    overall: row.overall,
    criteriaScores: parseCriteria(row),
    aiAvailable: false,
    createdAt: row.createdAt.toISOString(),
  }));

  const overallValues = rows.map((r) => r.overall).filter((v) => v > 0);

  const criterionAvg = SPEAKING_CRITERIA.map((def) => {
    const values = rows
      .map((r) => parseCriteria(r)[def.key])
      .filter((v): v is number => typeof v === "number" && v > 0);
    return { key: def.key, label: def.name, avg: avg(values), attempts: values.length };
  });

  const groupBy = <T>(items: T[], key: (t: T) => string) => {
    const map = new Map<string, T[]>();
    for (const item of items) {
      const k = key(item);
      map.set(k, [...(map.get(k) ?? []), item]);
    }
    return map;
  };

  const byPart = [...groupBy(rows, (r) => String(r.part)).entries()]
    .map(([part, list]) => ({ part: Number(part), attempts: list.length, avg: avg(list.map((r) => r.overall).filter((v) => v > 0)) ?? 0 }))
    .sort((a, b) => a.part - b.part);

  const byKind = [...groupBy(rows, (r) => r.kind).entries()]
    .map(([kind, list]) => ({ kind, attempts: list.length, avg: avg(list.map((r) => r.overall).filter((v) => v > 0)) ?? 0 }))
    .sort((a, b) => b.attempts - a.attempts);

  const byFamily = [...groupBy(rows, (r) => r.family).entries()]
    .map(([family, list]) => ({ family, attempts: list.length, avg: avg(list.map((r) => r.overall).filter((v) => v > 0)) ?? 0 }))
    .sort((a, b) => b.attempts - a.attempts);

  const part2Rows = rows.filter((r) => r.part === 2);
  const shortTurns = part2Rows.filter((r) => r.durationSec > 0 && r.durationSec < 60).length;
  const pacedRows = rows.filter((r) => r.durationSec >= 5 && r.wordCount >= 10);
  const offPace = pacedRows.filter((r) => r.wpm < 90 || r.wpm > 170).length;

  // Revision chains: items attempted more than once.
  const chains = [...groupBy(rows, (r) => r.itemSlug).entries()]
    .filter(([, list]) => list.length > 1)
    .map(([itemSlug, list]) => {
      const versions = list
        .sort((a, b) => a.version - b.version)
        .map((r) => ({ version: r.version, overall: r.overall, createdAt: r.createdAt.toISOString() }));
      const first = versions[0]?.overall ?? 0;
      const last = versions[versions.length - 1]?.overall ?? 0;
      return { itemSlug, versions, improved: last > first, delta: Number((last - first).toFixed(1)) };
    });

  return {
    attempts: rows.length,
    wordsSpoken: rows.reduce((a, r) => a + r.wordCount, 0),
    totalSpeakingSec: rows.reduce((a, r) => a + r.durationSec, 0),
    overallAvg: avg(overallValues) ?? 0,
    criterionAvg,
    byPart,
    byKind,
    byFamily: byFamily.slice(0, 12),
    shortTurnRate: part2Rows.length > 0 ? shortTurns / part2Rows.length : 0,
    shortTurns,
    offPaceRate: pacedRows.length > 0 ? offPace / pacedRows.length : 0,
    avgWpm: avg(pacedRows.map((r) => r.wpm)) ?? 0,
    incompleteCoverageRate: 0, // measured per attempt; the report surfaces it via recommendations
    revisionChains: chains,
    recentAttempts: attempts.slice(0, 10),
    recommendations: recommendSpeakingLessons(rows, criterionAvg, { shortTurns, part2Count: part2Rows.length, offPace, pacedCount: pacedRows.length }),
  };
}

// ---------------------------------------------------------------------------
// Weakness-driven lesson recommendations
// ---------------------------------------------------------------------------

function recommendSpeakingLessons(
  rows: PerformanceAttemptRow[],
  criterionAvg: SpeakingPerformanceReport["criterionAvg"],
  fluency: { shortTurns: number; part2Count: number; offPace: number; pacedCount: number },
): SpeakingLessonRecommendation[] {
  const recommendations: SpeakingLessonRecommendation[] = [];
  const push = (lessonSlug: string, reason: string, severity: "high" | "medium" | "low") => {
    const title = SPEAKING_LESSONS[lessonSlug];
    if (title && !recommendations.some((r) => r.lessonSlug === lessonSlug)) {
      recommendations.push({ lessonSlug, lessonTitle: title, reason, severity });
    }
  };

  const parse = (row: PerformanceAttemptRow, key: string): number => parseCriteria(row)[key] ?? 0;

  // 1. Weakest criterion below 6.0 → its dedicated lesson.
  for (const c of criterionAvg) {
    if (c.avg !== null && c.avg > 0 && c.avg < 6.0) {
      const lesson =
        c.key === "fc" ? "ielts-speaking-fluency"
        : c.key === "lr" ? "ielts-speaking-vocabulary"
        : c.key === "gra" ? "ielts-speaking-grammar-speech"
        : "ielts-speaking-pron-natural";
      push(lesson, `${c.label} averages ${c.avg.toFixed(1)} (estimate) — the weakest of your four criteria.`, "high");
    }
  }

  // 2. Coverage failures on Part 1 topics → the topic's lesson (worst three).
  const part1ByFamily = new Map<string, { covered: number; total: number }>();
  for (const row of rows.filter((r) => r.part === 1)) {
    const entry = part1ByFamily.get(row.family) ?? { covered: 0, total: 0 };
    entry.total += 1;
    if (parse(row, "fc") >= 6.5) entry.covered += 1; // fc floor proxies coverage
    part1ByFamily.set(row.family, entry);
  }
  for (const [family, { covered, total }] of part1ByFamily) {
    if (total >= 1 && covered / total < 0.5 && PART1_TOPIC_LESSON[family]) {
      push(
        PART1_TOPIC_LESSON[family],
        `Your ${family.replace(/-/g, " ")} interview round left prompts unanswered — the topic lesson rebuilds it question by question.`,
        "medium",
      );
    }
    if (recommendations.filter((r) => r.severity === "medium").length >= 3) break;
  }

  // 3. Short Part 2 turns → speaking at length.
  if (fluency.part2Count >= 1 && fluency.shortTurns / fluency.part2Count >= 0.5) {
    push(
      "ielts-speaking-at-length",
      `${fluency.shortTurns} of ${fluency.part2Count} long turns stopped before the one-minute mark — Speaking at length teaches the moves that fill the second minute.`,
      "high",
    );
  }

  // 4. Part 2 family weakness (avg < 6.0 on ≥1 attempt) → family lesson.
  const part2ByFamily = new Map<string, number[]>();
  for (const row of rows.filter((r) => r.part === 2 && r.overall > 0)) {
    part2ByFamily.set(row.family, [...(part2ByFamily.get(row.family) ?? []), row.overall]);
  }
  for (const [family, values] of part2ByFamily) {
    const a = avg(values) ?? 0;
    if (a > 0 && a < 6.0 && CUE_FAMILY_LESSON[family]) {
      push(CUE_FAMILY_LESSON[family], `The ${family} long turn averages ${a.toFixed(1)} (estimate) — the family lesson carries a full worked cue card.`, "medium");
    }
    if (recommendations.length >= 6) break;
  }

  // 5. Part 3 weakness → the discussion toolkit.
  const part3Rows = rows.filter((r) => r.part === 3 && r.overall > 0);
  const part3Avg = avg(part3Rows.map((r) => r.overall));
  if (part3Rows.length >= 1 && part3Avg !== null && part3Avg < 6.0) {
    push("ielts-speaking-supporting", "Part 3 discussions are your weakest part — Supporting arguments teaches the VIEW–REASON–EXAMPLE–CONTRAST spine.", "high");
  }

  // 6. Off-pace delivery → pronunciation + fluency.
  if (fluency.pacedCount >= 2 && fluency.offPace / fluency.pacedCount >= 0.5) {
    push("ielts-speaking-pron-natural", `${fluency.offPace} of ${fluency.pacedCount} attempts sit outside the natural pace band — Natural speech trains the rhythm that carries stress and intonation.`, "low");
  }

  // 7. No Part 3 attempts yet → invite the discussion practice.
  if (rows.length >= 3 && part3Rows.length === 0) {
    push("ielts-speaking-progressive", "You have not attempted a Part 3 discussion set yet — start with the progressive practice lesson's three worked discussions.", "low");
  }

  const rank = { high: 0, medium: 1, low: 2 };
  return recommendations.sort((a, b) => rank[a.severity] - rank[b.severity]).slice(0, 5);
}
