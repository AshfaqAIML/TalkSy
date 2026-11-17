/**
 * PROMPT 38 §8 — AI quality control for tutor replies.
 *
 * A deterministic, rule-based pass over every tutor reply BEFORE it is
 * stored. Pure functions, unit-tested; failures never block a reply — they
 * clean it:
 *
 *   1. PROFICIENCY-CLAIM GUARD — the tutor must never present an AI remark
 *      as a verified/certified result. Sentences claiming certified levels,
 *      official scores or guaranteed outcomes are stripped; if stripping
 *      empties the reply, the claim phrases are redacted instead.
 *
 *   2. GRAMMAR CROSS-CHECK (as far as practical) — when the tutor teaches a
 *      correction, the corrected text is re-checked with the app's
 *      rule-based grammar checker. A correction that the deterministic
 *      checker still flags is recorded as a `qc-grammar-mismatch` flag
 *      (surfaced in message meta for auditing) — it is NOT shown to the
 *      learner as an error, and the reply stands.
 *
 *   3. LENGTH CAP — the stored reply is capped (flagged `overlength`).
 *
 * Flags are for logs and meta — never a learner-facing error state.
 */

import { checkSentence } from "@/lib/grammar/checker";

export type QcFlag = "proficiency-claim" | "qc-grammar-mismatch" | "overlength";

export interface TutorReplyValidation {
  /** The reply to store (cleaned + capped). */
  cleaned: string;
  flags: QcFlag[];
  /** How many sentences were stripped for proficiency claims. */
  strippedSentences: number;
  /** Corrections the rule-based checker still flags (audit trail). */
  grammarMismatches: { correction: string; categories: string[] }[];
}

/**
 * Phrases that turn an AI remark into a claim of a verified result. Focused
 * by design: broad patterns would strip honest teaching sentences.
 */
const CLAIM_PATTERNS: RegExp[] = [
  /\bcertified (?:your |one'?s )?(?:english |proficiency |level )?(?:at|as|level)/i,
  /\b(?:your |this |that )?(?:level|proficiency|band|score) (?:is|has been) (?:verified|certified|official)/i,
  /\bverified (?:your |the )?(?:level|proficiency|score|band)/i,
  /\bofficial (?:score|level|result|certificate)/i,
  /\bofficially (?:scored|graded|certified|assessed)/i,
  /\bguaranteed? (?:you|your|that)/i,
  /\bcounts? as an? (?:official|verified|certified)/i,
  /\bi (?:have )?certified\b/i,
  /\bthis is (?:your |an? )?(?:final|official|verified) (?:level|score|result)/i,
  /\bcertificate-level result\b/i,
];

/** Formatting-only categories — never count as a grammar mismatch in a quote fragment. */
const QUOTE_SAFE_CATEGORIES = new Set(["punctuation", "capitalization"]);

function splitSentences(text: string): string[] {
  return text
    .split(/\n{2,}/) // paragraphs first
    .flatMap((paragraph) =>
      paragraph
        // Mark sentence breaks after . ! ? — optionally followed by a
        // closing quote — so quoted teaching sentences never glue to the
        // sentence after them.
        .replace(/([.!?])(["”"’]?)\s+/g, "$1$2\u0000")
        .split("\u0000"),
    )
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0);
}

/** Extract the tutor's corrected sentences: text after → quotes and "We say:" quotes. */
export function extractCorrections(reply: string): string[] {
  const corrections: string[] = [];
  const afterArrow = /→\s*["“]([^"”]{4,200})["”]/g;
  const weSay =
    /(?:[Ww]e say|correct(?:ed)? version(?:\s+is)?|correction is|say it like this|proper version)\s*:?\s*["“]([^"”]{4,200})["”]/g;
  for (const pattern of [afterArrow, weSay]) {
    let match: RegExpExecArray | null;
    while ((match = pattern.exec(reply)) !== null) {
      const candidate = match[1].trim().replace(/\s+/g, " ");
      if (candidate.split(" ").length >= 2) corrections.push(candidate);
    }
  }
  return [...new Set(corrections)].slice(0, 6);
}

/**
 * Validate and clean a tutor reply. Never throws; a reply that somehow
 * cleans to empty keeps its original text with claims redacted.
 */
export function validateTutorReply(
  reply: string,
  opts: { maxChars?: number } = {},
): TutorReplyValidation {
  const maxChars = opts.maxChars ?? 4000;
  const flags: QcFlag[] = [];
  const stripped = splitSentences(reply).filter(
    (sentence) => !CLAIM_PATTERNS.some((pattern) => pattern.test(sentence)),
  );
  const strippedSentences = splitSentences(reply).length - stripped.length;
  if (strippedSentences > 0) flags.push("proficiency-claim");

  let cleaned = stripped.join(" ").replace(/\s+/g, " ").trim();
  if (splitSentences(reply).length > 0 && cleaned.length === 0) {
    // Everything was a claim: redact phrase-level on the original instead.
    cleaned = reply;
    for (const pattern of CLAIM_PATTERNS) {
      cleaned = cleaned.replace(pattern, "an informal estimate (not a verified result)");
    }
    cleaned = cleaned.replace(/\s+/g, " ").trim();
  }

  // Grammar cross-check on the tutor's own corrections.
  const grammarMismatches: { correction: string; categories: string[] }[] = [];
  for (const correction of extractCorrections(reply)) {
    const result = checkSentence(correction);
    const categories = result.issues
      .map((issue) => issue.category)
      .filter((category) => !QUOTE_SAFE_CATEGORIES.has(category));
    const duplicateFree = [...new Set(categories)];
    if (duplicateFree.length > 0) {
      grammarMismatches.push({ correction, categories: duplicateFree });
    }
  }
  if (grammarMismatches.length > 0) flags.push("qc-grammar-mismatch");

  if (cleaned.length > maxChars) {
    cleaned = `${cleaned.slice(0, maxChars - 1).trimEnd()}…`;
    flags.push("overlength");
  }

  return { cleaned, flags, strippedSentences, grammarMismatches };
}
