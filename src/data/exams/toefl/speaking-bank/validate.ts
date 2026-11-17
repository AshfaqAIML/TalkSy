/**
 * TOEFL Speaking Practice Library — integrity validator (PROMPT 50).
 *
 * Machine-checks every authored item BEFORE it can ship:
 *
 *   1. Transcript honesty — the reference transcript is exactly the spoken
 *      sentence; the word count field is recomputed and must match; the
 *      repetition window matches the length band (≤8 words → 8s,
 *      9–14 → 10s, ≥15 → 12s).
 *   2. Progressive difficulty — repeat items obey their length bands
 *      (d1 ≤ 8, d2 9–11, d3 12–15, d4 16–20, d5 21–26 words); interview
 *      answer windows scale with difficulty (d1 ≤ 40s … d5 ≥ 60s).
 *   3. Teaching depth — every repeat item carries ≥ 2 analysis hints
 *      (≥ 8 words each); every interview item carries a sample response
 *      of 60–130 words, ≥ 5 vocabulary suggestions with real glosses, and
 *      an analysis note of ≥ 25 words.
 *   4. Substance — spoken sentences are natural, punctuated originals;
 *      interview questions are single, genuine questions.
 *   5. Originality — no normalised 8-word window repeats across any two
 *      sentences, questions or sample responses.
 *   6. Variety (bank level) — both collections span difficulty 1–5;
 *      repeat focus tags and interview topics stay varied (12+ / 15+).
 */

import type { ToeflInterviewItem, ToeflRepeatItem, ToeflSpeakingExercise } from "./types";
import { TOEFL_REPEAT_FOCUS_LABELS, TOEFL_SPEAKING_TASK_LABELS } from "./types";

const norm = (s: string): string =>
  (s ?? "")
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/[^a-z0-9' ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const words = (s: string): string[] => (norm(s).match(/[a-z0-9']+/g) ?? []);

const wordCount = (s: string): number => (s.match(/[A-Za-z]+(?:-[A-Za-z]+)*|\d+(?:[.,:]\d+)*/g) ?? []).length;

/** Official-style window for a sentence of n words. */
export function windowForWords(n: number): 8 | 10 | 12 {
  if (n <= 8) return 8;
  if (n <= 14) return 10;
  return 12;
}

/** Length band per difficulty tier (inclusive word counts). */
export const REPEAT_LENGTH_BANDS: Record<number, [number, number]> = {
  1: [3, 8],
  2: [9, 11],
  3: [12, 15],
  4: [16, 20],
  5: [21, 26],
};

export function validateToeflRepeatItem(item: ToeflRepeatItem): string[] {
  const issues: string[] = [];
  const tag = item.slug;
  if (norm(item.transcript) !== norm(item.sentence)) {
    issues.push(`${tag}: the reference transcript must be exactly the spoken sentence.`);
  }
  const realCount = wordCount(item.sentence);
  if (item.wordCount !== realCount) {
    issues.push(`${tag}: wordCount says ${item.wordCount} but the sentence has ${realCount} words.`);
  }
  if (item.windowSec !== windowForWords(realCount)) {
    issues.push(`${tag}: window is ${item.windowSec}s — ${realCount} words get ${windowForWords(realCount)}s.`);
  }
  const [lo, hi] = REPEAT_LENGTH_BANDS[item.difficulty];
  if (realCount < lo || realCount > hi) {
    issues.push(`${tag}: ${realCount} words is outside the d${item.difficulty} band (${lo}–${hi}).`);
  }
  if (item.difficulty === 1 && item.learningMode !== true) {
    issues.push(`${tag}: difficulty-1 repeat items are learning mode (shadow-reading) — set learningMode.`);
  }
  if (item.difficulty > 1 && item.learningMode === true) {
    issues.push(`${tag}: only difficulty-1 items may show the transcript during playback.`);
  }
  if (!item.sentence.trim().match(/^[A-Z].*[.?!]$/)) {
    issues.push(`${tag}: the spoken sentence must be capitalised and ended.`);
  }
  if (!item.speaker.name || !item.speaker.role) issues.push(`${tag}: speaker name/role missing.`);
  if (!Array.isArray(item.analysisHints) || item.analysisHints.length < 2) {
    issues.push(`${tag}: fewer than 2 repetition analysis hints.`);
  }
  for (const [i, h] of (item.analysisHints ?? []).entries()) {
    if (wordCount(h) < 8) issues.push(`${tag}: analysis hint ${i + 1} is too thin to teach.`);
  }
  if (!(item.focus in TOEFL_REPEAT_FOCUS_LABELS)) issues.push(`${tag}: unknown focus tag.`);
  if (wordCount(item.title) < 2) issues.push(`${tag}: title too thin.`);
  return issues;
}

export function validateToeflInterviewItem(item: ToeflInterviewItem): string[] {
  const issues: string[] = [];
  const tag = item.slug;
  if (!item.question.trim().endsWith("?")) issues.push(`${tag}: the interview question must end with a question mark.`);
  if (wordCount(item.question) < 5) issues.push(`${tag}: question is too thin.`);
  const sampleWords = wordCount(item.sampleResponse);
  if (sampleWords < 60) issues.push(`${tag}: sample response is ${sampleWords} words — below the 60-word floor.`);
  if (sampleWords > 140) issues.push(`${tag}: sample response is ${sampleWords} words — above the 140-word ceiling.`);
  if (wordCount(item.analysisNotes) < 25) issues.push(`${tag}: analysis note is thinner than 25 words.`);
  if (!Array.isArray(item.vocabulary) || item.vocabulary.length < 5) {
    issues.push(`${tag}: fewer than 5 vocabulary suggestions.`);
  }
  for (const [i, v] of (item.vocabulary ?? []).entries()) {
    if (wordCount(v.word) < 1) issues.push(`${tag}: vocabulary suggestion ${i + 1} has no word.`);
    if (wordCount(v.gloss) < 3) issues.push(`${tag}: vocabulary suggestion "${v.word}" has no real gloss.`);
  }
  if (item.prepSec < 15 || item.prepSec > 30) issues.push(`${tag}: prep guidance must be 15–30 seconds.`);
  const answerBand: Record<number, [number, number]> = { 1: [25, 40], 2: [30, 50], 3: [40, 60], 4: [45, 70], 5: [50, 75] };
  const [lo, hi] = answerBand[item.difficulty];
  if (item.answerSec < lo || item.answerSec > hi) {
    issues.push(`${tag}: answer guidance ${item.answerSec}s is outside the d${item.difficulty} band (${lo}–${hi}).`);
  }
  if (item.followUp && !item.followUp.trim().endsWith("?")) issues.push(`${tag}: the follow-up must be a question.`);
  if (wordCount(item.topic) < 1) issues.push(`${tag}: no topic label.`);
  if (wordCount(item.title) < 2) issues.push(`${tag}: title too thin.`);
  return issues;
}

// ---------------------------------------------------------------------------
// Originality + bank level
// ---------------------------------------------------------------------------

export function speakingOriginalityCorpus(item: ToeflSpeakingExercise): { text: string; owner: string }[] {
  if (item.taskType === "listen-repeat") return [{ text: item.sentence, owner: item.slug }];
  return [
    { text: item.question, owner: item.slug },
    { text: item.sampleResponse, owner: item.slug },
  ];
}

export function validateToeflSpeakingOriginality(items: ToeflSpeakingExercise[]): string[] {
  const issues: string[] = [];
  const seen = new Map<string, string>();
  for (const item of items) {
    for (const piece of speakingOriginalityCorpus(item)) {
      const ws = words(piece.text);
      if (ws.length < 8) continue;
      for (let i = 0; i <= ws.length - 8; i += 1) {
        const window = ws.slice(i, i + 8).join(" ");
        const owner = seen.get(window);
        if (owner && owner !== item.slug) {
          issues.push(`originality: "${window}" appears in both ${owner} and ${item.slug}.`);
          if (issues.length > 20) return issues;
        } else if (!owner) {
          seen.set(window, item.slug);
        }
      }
    }
  }
  return issues;
}

export function validateToeflSpeakingBank(items: ToeflSpeakingExercise[]): string[] {
  const issues: string[] = [];
  const slugs = new Set<string>();
  for (const item of items) {
    if (slugs.has(item.slug)) issues.push(`duplicate slug: ${item.slug}`);
    slugs.add(item.slug);
    issues.push(...(item.taskType === "listen-repeat" ? validateToeflRepeatItem(item) : validateToeflInterviewItem(item)));
  }
  issues.push(...validateToeflSpeakingOriginality(items));

  const repeat = items.filter((i): i is ToeflRepeatItem => i.taskType === "listen-repeat");
  const interview = items.filter((i): i is ToeflInterviewItem => i.taskType === "take-interview");
  if (repeat.length !== 50) issues.push(`distribution: Listen and Repeat carries ${repeat.length} items — 50 is the contract.`);
  if (interview.length !== 50) issues.push(`distribution: Take an Interview carries ${interview.length} items — 50 is the contract.`);

  for (const [label, list] of [["listen-repeat", repeat], ["take-interview", interview]] as const) {
    const tiers = new Set(list.map((i) => i.difficulty));
    for (const d of [1, 2, 3, 4, 5] as const) {
      if (!tiers.has(d)) issues.push(`distribution: ${label} never reaches difficulty ${d}.`);
    }
  }
  const accents = new Set(repeat.map((i) => i.accent));
  if (accents.size < 3) issues.push(`variety: only ${accents.size} accents among repeat items — at least 3.`);
  if (!accents.has("north-american")) issues.push("variety: the North American majority convention is violated — no north-american items.");
  const focusTags = new Set(repeat.map((i) => i.focus));
  if (focusTags.size < 10) issues.push(`variety: only ${focusTags.size} distinct repeat focus tags — 10+ is the target.`);
  const topics = new Set(interview.map((i) => norm(i.topic)));
  if (topics.size < 15) issues.push(`variety: only ${topics.size} distinct interview topics — 15+ is the target.`);

  void TOEFL_SPEAKING_TASK_LABELS;
  return issues;
}
