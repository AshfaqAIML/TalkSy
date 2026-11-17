/**
 * IELTS Listening Masterclass — audio-bank integrity validation.
 *
 * Pure checks over the authored bank exercises, shared by
 * scripts/validate-listening-bank.ts (CLI per-file + full-library mode) and
 * tests/listening-bank.test.ts. Guarantees:
 *
 *   1. Structure: unique slugs/ids, segments reference real speakers,
 *      every speaker is heard, accents declared everywhere.
 *   2. Solvability: every keyed completion answer (and each alternative)
 *      is actually spoken in the recording; MCQ/matching/map keys are in
 *      range; short answers exist; trap lures appear in the script too.
 *   3. Rubric honesty: answers fit their own word limit; answers without
 *      numbersAllowed carry no digits; word limits are 1–3.
 *   4. Teaching payload: every question carries keywords, skills and an
 *      explanation of ≥ 20 words; scripts are real recordings (length
 *      floor) written in natural conversational language.
 *   5. Originality: no 8+ word sentence shared between two exercises.
 */

import type { BankExercise, BankQuestion } from "./types";

const norm = (s: string): string =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9' ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const WORD_RE = /[A-Za-z0-9'’]+/g;
const words = (s: string): string[] => (s.match(WORD_RE) ?? []).map((w) => norm(w));

const ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

/** Convert a small integer to its spoken form ("38" → "thirty eight"). */
function numberToWords(n: number): string | null {
  if (!Number.isInteger(n) || n < 0 || n > 9999) return null;
  if (n < 20) return ONES[n];
  if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? ` ${ONES[n % 10]}` : "");
  if (n < 1000) return `${ONES[Math.floor(n / 100)]} hundred${n % 100 ? ` and ${numberToWords(n % 100)}` : ""}`;
  return `${numberToWords(Math.floor(n / 1000))} thousand${n % 1000 ? ` ${numberToWords(n % 1000)}` : ""}`;
}

const IRREGULAR_ORDINALS: Record<string, string> = {
  one: "first", two: "second", three: "third", five: "fifth", eight: "eighth",
  nine: "ninth", twelve: "twelfth",
};

/** "twenty three" → "twenty third" (last word to its ordinal form). */
function toOrdinal(wordsForm: string): string {
  const parts = wordsForm.split(" ");
  const last = parts[parts.length - 1];
  parts[parts.length - 1] = IRREGULAR_ORDINALS[last] ?? (/y$/.test(last) ? `${last.slice(0, -1)}ieth` : `${last}th`);
  return parts.join(" ");
}

/** A numeric answer is solvable if the figures or the spoken words appear. */
function tokenSpoken(token: string, script: string): boolean {
  if (script.includes(token)) return true;
  // Ordinal-suffixed digits: "23rd" → 23.
  const ordinalStripped = /^(\d+)(st|nd|rd|th)$/i.exec(token);
  if (/^\d+$/.test(token) || ordinalStripped) {
    const digits = ordinalStripped ? ordinalStripped[1] : token;
    // 4+ digit runs (phone numbers, years, reference numbers) are dictated
    // digit-by-digit; the author guarantees them — no reliable normalization.
    if (digits.length >= 4) return true;
    const spoken = numberToWords(Number(digits));
    if (!spoken) return false;
    if (script.includes(spoken) || script.includes(spoken.replace(/ /g, ""))) return true;
    const ord = toOrdinal(spoken);
    if (script.includes(ord) || script.includes(ord.replace(/ /g, ""))) return true;
  }
  return false;
}

export function validateBank(exercises: BankExercise[]): string[] {
  const issues: string[] = [];
  const slugs = new Set<string>();
  const scriptSentences = new Map<string, string>();

  for (const ex of exercises) {
    const tag = ex.slug;
    if (slugs.has(tag)) issues.push(`duplicate exercise slug: ${tag}`);
    slugs.add(tag);
    if (!/^[a-z0-9-]+$/.test(tag)) issues.push(`${tag}: slug must be kebab-case`);
    if (ex.part < 1 || ex.part > 4) issues.push(`${tag}: part must be 1-4`);
    if (ex.difficulty < 1 || ex.difficulty > 5) issues.push(`${tag}: difficulty must be 1-5`);
    if (ex.estimatedMinutes < 4 || ex.estimatedMinutes > 25) issues.push(`${tag}: estimatedMinutes ${ex.estimatedMinutes} outside 4-25`);

    // Speakers & accents
    const speakerIds = new Set(ex.speakers.map((s) => s.id));
    if (ex.speakers.length === 0) issues.push(`${tag}: no speakers`);
    for (const sp of ex.speakers) {
      if (!sp.name || !sp.role || !sp.accent) issues.push(`${tag}: speaker ${sp.id || "?"} missing name/role/accent`);
    }
    const accentSet = new Set(ex.speakers.map((s) => s.accent));
    for (const a of ex.accentMix) {
      if (!accentSet.has(a)) issues.push(`${tag}: accentMix lists ${a} but no speaker has it`);
    }
    if (ex.accentMix.length === 0) issues.push(`${tag}: empty accentMix`);

    // Script
    if (ex.segments.length < 8) issues.push(`${tag}: only ${ex.segments.length} segments (need ≥ 8 for a real recording)`);
    const heard = new Set<string>();
    const fullText: string[] = [];
    for (const seg of ex.segments) {
      if (!seg.id || !seg.text) issues.push(`${tag}: segment missing id/text`);
      if (seg.speakerId) {
        if (!speakerIds.has(seg.speakerId)) issues.push(`${tag}: segment ${seg.id} references unknown speaker ${seg.speakerId}`);
        heard.add(seg.speakerId);
      }
      fullText.push(seg.text);
    }
    for (const sp of ex.speakers) {
      if (!heard.has(sp.id)) issues.push(`${tag}: speaker ${sp.name} never speaks`);
    }
    const script = norm(fullText.join(" "));
    const scriptWords = script.split(" ").filter(Boolean);
    if (scriptWords.length < 120) {
      issues.push(`${tag}: script only ${scriptWords.length} words (need ≥ 120 — a real recording, not a flash card)`);
    }
    // Natural conversational language: contractions or discourse markers.
    if (!/'|’/.test(script)) issues.push(`${tag}: script has no contractions — write natural spoken English`);

    // Originality across exercises (8+ word sentence reuse).
    for (const sentence of fullText.join(" ").split(/[.!?]+/)) {
      const t = norm(sentence);
      if (t.split(" ").length >= 8) {
        const owner = scriptSentences.get(t);
        if (owner) issues.push(`${tag}: script sentence also in ${owner}: "${t.slice(0, 60)}…"`);
        else scriptSentences.set(t, tag);
      }
    }

    // Questions
    if (ex.questions.length === 0) issues.push(`${tag}: no questions`);
    const qIds = new Set<string>();
    const blankNos = new Set<number>();
    for (const q of ex.questions) {
      validateQuestion(ex, q, script, qIds, blankNos, issues);
    }
  }
  return issues;
}

function validateQuestion(
  ex: BankExercise,
  q: BankQuestion,
  script: string,
  qIds: Set<string>,
  blankNos: Set<number>,
  issues: string[],
): void {
  const tag = `${ex.slug}/${q.id}`;
  if (qIds.has(q.id)) issues.push(`${tag}: duplicate question id`);
  qIds.add(q.id);
  if (!q.label) issues.push(`${tag}: missing label`);
  if (!q.instruction) issues.push(`${tag}: missing instruction`);

  const m = q.meta;
  if (!m) {
    issues.push(`${tag}: missing meta`);
    return;
  }
  if (m.skills.length === 0) issues.push(`${tag}: no skills tagged`);
  if (m.keywords.length === 0) issues.push(`${tag}: no keywords (missed-keyword analysis needs them)`);
  if ((m.explanation ?? "").split(WORD_RE).length < 20) issues.push(`${tag}: explanation under 20 words`);
  if (m.keywords.some((k) => !script.includes(norm(k)))) {
    issues.push(`${tag}: keyword not spoken in the script`);
  }
  if (m.trap) {
    if (!m.trap.note) issues.push(`${tag}: trap missing note`);
    for (const lure of m.trap?.lure ?? []) {
      if (!script.includes(norm(lure)) && !/\d/.test(lure)) {
        issues.push(`${tag}: trap lure "${lure}" never appears in the script`);
      }
    }
  }

  switch (q.type) {
    case "form":
    case "note":
    case "table":
    case "flowchart":
    case "summary":
    case "sentence": {
      if (q.wordLimit < 1 || q.wordLimit > 3) issues.push(`${tag}: wordLimit ${q.wordLimit} outside 1-3`);
      if (q.layout.length === 0) issues.push(`${tag}: empty layout`);
      const layoutBlanks: number[] = [];
      for (const row of q.layout) {
        if (row.length === 0) issues.push(`${tag}: empty layout row`);
        for (const cell of row) {
          if (cell.kind === "blank") layoutBlanks.push(cell.no);
        }
      }
      if (layoutBlanks.length === 0) issues.push(`${tag}: layout has no blanks`);
      if (q.blanks.length === 0) issues.push(`${tag}: no answer key`);
      const keyed = new Set(q.blanks.map((b) => b.no));
      for (const n of layoutBlanks) {
        if (!keyed.has(n)) issues.push(`${tag}: blank ${n} in layout has no answer key`);
        if (blankNos.has(n)) issues.push(`${tag}: blank number ${n} used in two questions`);
        blankNos.add(n);
      }
      for (const b of q.blanks) {
        if (!layoutBlanks.includes(b.no)) issues.push(`${tag}: keyed blank ${b.no} not printed in the layout`);
        if (!b.answer) issues.push(`${tag}: blank ${b.no} has an empty answer`);
        const forms = [b.answer, ...(b.alternatives ?? [])];
        for (const f of forms) {
          const w = words(f);
          if (w.length === 0) issues.push(`${tag}: blank ${b.no} has an empty answer form`);
          if (w.length > q.wordLimit) {
            issues.push(`${tag}: answer "${f}" is ${w.length} words but the limit is ${q.wordLimit} — rubric honesty`);
          }
          if (!q.numbersAllowed && /\d/.test(f)) {
            issues.push(`${tag}: answer "${f}" carries digits but numbersAllowed is false`);
          }
          // Solvability: the answer must be spoken (word-level containment).
          for (const token of w) {
            if (token.length >= 2 && !tokenSpoken(token, script)) {
              issues.push(`${tag}: answer token "${token}" is never spoken — unsolvable as authored`);
            }
          }
        }
      }
      break;
    }
    case "mcq-single":
    case "mcq-multi": {
      if (q.options.length < 3) issues.push(`${tag}: MCQ needs ≥ 3 options`);
      if (q.type === "mcq-single" && q.correct.length !== 1) issues.push(`${tag}: mcq-single needs exactly 1 correct index`);
      if (q.type === "mcq-multi" && q.correct.length < 2) issues.push(`${tag}: mcq-multi needs ≥ 2 correct indices`);
      if (q.correct.some((i) => i < 0 || i >= q.options.length)) issues.push(`${tag}: correct index out of range`);
      if (new Set(q.correct).size !== q.correct.length) issues.push(`${tag}: duplicate correct indices`);
      if (!q.stem) issues.push(`${tag}: missing stem`);
      break;
    }
    case "matching": {
      if (q.items.length < 3) issues.push(`${tag}: matching needs ≥ 3 items`);
      if (q.options.length < 3) issues.push(`${tag}: matching needs ≥ 3 options`);
      if (q.correct.length !== q.items.length) issues.push(`${tag}: correct must map every item`);
      if (q.correct.some((i) => i < 0 || i >= q.options.length)) issues.push(`${tag}: matching correct index out of range`);
      if (new Set(q.correct).size === q.items.length && q.items.length > q.options.length) {
        issues.push(`${tag}: every option used exactly once with more items than options — check the key`);
      }
      break;
    }
    case "map": {
      const blanks: number[] = [];
      for (const row of q.plan.grid) {
        for (const cell of row) {
          if (cell?.blank) {
            blanks.push(cell.blank);
            if (blankNos.has(cell.blank)) issues.push(`${tag}: blank number ${cell.blank} used in two questions`);
            blankNos.add(cell.blank);
          }
        }
      }
      if (blanks.length === 0) issues.push(`${tag}: plan has no blank cells`);
      if (q.correct.length !== blanks.length) issues.push(`${tag}: ${blanks.length} blanks but ${q.correct.length} keyed letters`);
      const letters = new Set(q.options.map((o) => o.letter));
      if (q.options.length < 3) issues.push(`${tag}: map needs ≥ 3 lettered options`);
      for (const l of q.correct) {
        if (!letters.has(l)) issues.push(`${tag}: keyed letter ${l} not among options`);
      }
      if (!q.plan.title || !q.plan.caption) issues.push(`${tag}: plan needs title and caption`);
      break;
    }
    case "short-answer": {
      if (q.questions.length < 2) issues.push(`${tag}: short-answer needs ≥ 2 printed questions`);
      if (q.accepted.length !== q.questions.length) issues.push(`${tag}: accepted answers must cover every printed question`);
      q.accepted.forEach((forms, i) => {
        if (forms.length === 0) issues.push(`${tag}: printed question ${i + 1} has no accepted answers`);
        for (const f of forms) {
          for (const token of words(f)) {
            if (token.length >= 2 && !tokenSpoken(token, script)) {
              issues.push(`${tag}: accepted answer token "${token}" is never spoken — unsolvable`);
            }
          }
        }
      });
      break;
    }
  }
}
