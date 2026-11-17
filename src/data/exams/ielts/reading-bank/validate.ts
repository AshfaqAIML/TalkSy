/**
 * IELTS Reading Masterclass — passage bank integrity validator (PROMPT 45).
 *
 * Machine-checks every authored exercise BEFORE it can ship:
 *
 *   1. Solvability — every keyed completion answer (and every accepted
 *      alternative) literally appears in the passage text; every evidence
 *      quote is a verbatim substring of the paragraph it cites.
 *   2. Rubric honesty — question numbering runs 1..N continuously across
 *      groups; word limits actually fit the keyed answers; True/False/Not
 *      Given statements only carry TRUE/FALSE/NOT GIVEN (Yes/No/Not Given
 *      likewise); matching grids have exactly one unused option when the
 *      rubric promises one.
 *   3. Teaching depth — every item's explanation ≥ 20 words; every exercise
 *      carries a glossary whose words appear in the passage.
 *   4. Substance — Academic and GT Section 3 passages meet the official
 *      word-count band; GT Section 1–2 text sets meet their own floor.
 *   5. Originality — no normalised 8-word window is repeated across the
 *      library (all passages are distinct originals).
 */

import type {
  ReadingExercise,
  ReadingQuestion,
  ReadingQuestionMeta,
} from "./types";

const norm = (s: string): string =>
  (s ?? "")
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/[^a-z0-9' ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const words = (s: string): string[] => (norm(s).match(/[a-z0-9']+/g) ?? []);

const wordCount = (s: string): number => (s.match(/[A-Za-z]+(?:-[A-Za-z]+)*|\d+(?:[.,:]\d+)*/g) ?? []).length;

const passageText = (ex: ReadingExercise): string =>
  ex.blocks.flatMap((b) => b.paragraphs).join(" ");

const paragraphText = (ex: ReadingExercise, block: number, paragraph: number): string | null => {
  const b = ex.blocks[block];
  if (!b) return null;
  return b.paragraphs[paragraph] ?? null;
};

/** Item numbers a group occupies, in order (for the continuity check). */
function groupNumbers(q: ReadingQuestion, start: number): number[] {
  switch (q.type) {
    case "multiple-choice":
      return q.items.map((_, i) => start + i);
    case "multiple-choice-multi":
      // "Choose TWO letters" occupies two printed numbers but grades as one.
      return q.correct.length > 1 ? Array.from({ length: q.correct.length }, (_, i) => start + i) : [start];
    case "true-false-not-given":
    case "yes-no-not-given":
      return q.statements.map((_, i) => start + i);
    case "matching-headings":
    case "matching-information":
    case "matching-features":
    case "matching-sentence-endings":
      return q.items.map((_, i) => start + i);
    default:
      return q.blanks.map((b) => b.no);
  }
}

function metaOf(q: ReadingQuestion): ReadingQuestionMeta[] {
  switch (q.type) {
    case "multiple-choice":
      return q.items.map((i) => i.meta);
    case "multiple-choice-multi":
      return [q.meta];
    case "true-false-not-given":
    case "yes-no-not-given":
      return q.statements.map((s) => s.meta);
    case "matching-headings":
    case "matching-information":
    case "matching-features":
    case "matching-sentence-endings":
      return q.items.map((i) => i.meta);
    default:
      return q.blanks.map((b) => b.meta);
  }
}

function checkMeta(meta: ReadingQuestionMeta, tag: string, issues: string[], seenEvidence: Set<string>): void {
  if (words(meta.explanation).length < 20) {
    issues.push(`${tag}: explanation is thinner than 20 words — teaching depth floor.`);
  }
  if (meta.skills.length === 0) issues.push(`${tag}: no tested skills declared.`);
  if (meta.evidence.length === 0) {
    issues.push(`${tag}: no passage evidence — the review system has nothing to point at.`);
  }
  for (const ev of meta.evidence) {
    if (seenEvidence.has(ev.quote)) continue; // same evidence reused inside one item is fine
    seenEvidence.add(ev.quote);
  }
}

export function validateReadingExercise(ex: ReadingExercise): string[] {
  const issues: string[] = [];
  const slug = ex.slug;
  const text = norm(passageText(ex));

  // --- passage substance ---------------------------------------------------
  const totalWords = wordCount(passageText(ex));
  if (ex.variant === "academic" && totalWords < 550) {
    issues.push(`${slug}: Academic passage is ${totalWords} words — below the 550-word floor.`);
  }
  if (ex.variant === "gt" && ex.section === 3 && totalWords < 550) {
    issues.push(`${slug}: GT Section 3 passage is ${totalWords} words — below the 550-word floor.`);
  }
  if (ex.variant === "gt" && ex.section <= 2 && totalWords < 220) {
    issues.push(`${slug}: GT Section ${ex.section} text set is ${totalWords} words — below the 220-word floor.`);
  }
  if (ex.blocks.length === 0) issues.push(`${slug}: no text blocks.`);
  for (const [bi, b] of ex.blocks.entries()) {
    if (words(b.heading).length < 2) issues.push(`${slug}: block ${bi} heading is empty.`);
    if (b.paragraphs.length === 0) issues.push(`${slug}: block ${bi} has no paragraphs.`);
    for (const [pi, p] of b.paragraphs.entries()) {
      if (wordCount(p) < 15) issues.push(`${slug}: block ${bi} paragraph ${pi} is too thin to be a real paragraph.`);
    }
  }

  // --- glossary -------------------------------------------------------------
  if (ex.glossary.length < 5) issues.push(`${slug}: glossary has fewer than 5 entries.`);
  for (const g of ex.glossary) {
    if (words(g.definition).length < 3) issues.push(`${slug}: glossary entry "${g.word}" has no real definition.`);
    const w = norm(g.word).replace(/^the /, "");
    if (!text.includes(w)) {
      issues.push(`${slug}: glossary word "${g.word}" does not appear in the passage.`);
    }
  }

  // --- questions ------------------------------------------------------------
  if (ex.questions.length < 2) issues.push(`${slug}: fewer than 2 question groups — not a realistic set.`);
  let expected = 1;
  const totalParagraphs = ex.blocks.reduce((a, b) => a + b.paragraphs.length, 0);

  for (const q of ex.questions) {
    const numbers = groupNumbers(q, expected);
    for (const n of numbers) {
      if (n !== expected) {
        issues.push(`${slug}/${q.id}: question numbering breaks at ${n} (expected ${expected}).`);
        break;
      }
      expected += 1;
    }

    const metas = metaOf(q);
    const seenEvidence = new Set<string>();
    metas.forEach((meta, i) => checkMeta(meta, `${slug}/${q.id}#${i + 1}`, issues, seenEvidence));

    // Evidence quotes must be verbatim substrings of the cited paragraph.
    for (const meta of metas) {
      for (const ev of meta.evidence) {
        const p = paragraphText(ex, ev.block, ev.paragraph);
        if (p === null) {
          issues.push(`${slug}/${q.id}: evidence cites block ${ev.block} paragraph ${ev.paragraph} — out of range.`);
        } else if (!norm(p).includes(norm(ev.quote))) {
          issues.push(`${slug}/${q.id}: evidence quote "${ev.quote.slice(0, 60)}…" is not verbatim in block ${ev.block} paragraph ${ev.paragraph}.`);
        }
      }
    }

    switch (q.type) {
      case "sentence-completion":
      case "summary-completion":
      case "note-completion":
      case "table-completion":
      case "flowchart-completion":
      case "diagram-labelling": {
        const layoutBlanks = q.type === "diagram-labelling"
          ? q.plan.grid.flat().filter((c): c is NonNullable<typeof c> => Boolean(c?.blank)).map((c) => c.blank as number)
          : q.layout.flat().filter((c) => c.kind === "blank").map((c) => (c as { kind: "blank"; no: number }).no);
        const keyed = q.blanks.map((b) => b.no);
        if (layoutBlanks.length !== keyed.length) {
          issues.push(`${slug}/${q.id}: layout has ${layoutBlanks.length} blanks but ${keyed.length} answers are keyed.`);
        }
        const limit = q.type === "diagram-labelling" ? 3 : q.wordLimit;
        for (const b of q.blanks) {
          // The keyed answer must be copied from the passage; alternatives
          // exist for FORMAT tolerance (spacing, digits, time notation) and
          // are checked for the word limit only.
          if (!text.includes(norm(b.answer))) {
            issues.push(`${slug}/${q.id} blank ${b.no}: keyed answer "${b.answer}" does not appear in the passage.`);
          }
          if (wordCount(b.answer) > limit) {
            issues.push(`${slug}/${q.id} blank ${b.no}: answer "${b.answer}" breaks its own ${limit}-word limit.`);
          }
          for (const alt of b.alternatives ?? []) {
            if (wordCount(alt) > limit) {
              issues.push(`${slug}/${q.id} blank ${b.no}: alternative "${alt}" breaks the ${limit}-word limit.`);
            }
          }
        }
        break;
      }
      case "multiple-choice": {
        q.items.forEach((item, i) => {
          if (item.options.length < 3) issues.push(`${slug}/${q.id} item ${i + 1}: fewer than 3 options.`);
          if (item.correct < 0 || item.correct >= item.options.length) {
            issues.push(`${slug}/${q.id} item ${i + 1}: correct index out of range.`);
          }
          if (item.lure !== undefined && item.lure === item.correct) {
            issues.push(`${slug}/${q.id} item ${i + 1}: lure equals the correct option.`);
          }
        });
        break;
      }
      case "multiple-choice-multi": {
        if (q.correct.length < 2) issues.push(`${slug}/${q.id}: multi-choice needs at least two correct letters.`);
        if (new Set(q.correct).size !== q.correct.length) issues.push(`${slug}/${q.id}: duplicate correct letters.`);
        if ((q.lures ?? []).some((l) => q.correct.includes(l))) {
          issues.push(`${slug}/${q.id}: a lure is also a keyed answer.`);
        }
        break;
      }
      case "true-false-not-given":
      case "yes-no-not-given": {
        const allowed = q.type === "true-false-not-given" ? ["TRUE", "FALSE", "NOT GIVEN"] : ["YES", "NO", "NOT GIVEN"];
        q.statements.forEach((s, i) => {
          if (!allowed.includes(s.answer)) {
            issues.push(`${slug}/${q.id} statement ${i + 1}: "${s.answer}" is not a legal label for ${q.type}.`);
          }
          if (s.lure !== undefined && !allowed.includes(s.lure)) {
            issues.push(`${slug}/${q.id} statement ${i + 1}: lure "${s.lure}" is not a legal label for ${q.type}.`);
          }
          if (s.lure === s.answer) issues.push(`${slug}/${q.id} statement ${i + 1}: lure equals the answer.`);
        });
        break;
      }
      case "matching-headings":
      case "matching-information":
      case "matching-features":
      case "matching-sentence-endings": {
        if (q.items.length < 3) issues.push(`${slug}/${q.id}: fewer than 3 matching items.`);
        if (q.options.length < q.items.length) {
          issues.push(`${slug}/${q.id}: fewer options (${q.options.length}) than items (${q.items.length}).`);
        }
        q.items.forEach((item, i) => {
          if (item.correct < 0 || item.correct >= q.options.length) {
            issues.push(`${slug}/${q.id} item ${i + 1}: correct option out of range.`);
          }
          if (item.lure !== undefined && item.lure === item.correct) {
            issues.push(`${slug}/${q.id} item ${i + 1}: lure equals the correct option.`);
          }
        });
        if (q.type === "matching-headings" || q.type === "matching-sentence-endings") {
          // Headings/ending banks carry exactly one extra option; every keyed
          // answer must be distinct across items.
          const used = q.items.map((i) => i.correct);
          if (new Set(used).size !== used.length) {
            issues.push(`${slug}/${q.id}: ${q.type} reuses an option although the rubric forbids reuse.`);
          }
          if (q.extraOption && q.options.length !== q.items.length + 1) {
            issues.push(`${slug}/${q.id}: promises one unused option but options=${q.options.length}, items=${q.items.length}.`);
          }
        }
        if (q.type === "matching-information") {
          for (const opt of q.options) {
            if (!/^[A-Z]$/.test(opt)) {
              issues.push(`${slug}/${q.id}: matching-information options must be single paragraph letters, found "${opt}".`);
            }
          }
          if (q.options.length > totalParagraphs) {
            issues.push(`${slug}/${q.id}: ${q.options.length} letter options but the passage has ${totalParagraphs} paragraphs.`);
          }
        }
        break;
      }
    }
  }

  if (expected - 1 < 8) issues.push(`${slug}: only ${expected - 1} answerable items — a real passage set carries more.`);
  return issues;
}

/** Cross-passage originality: no normalised 8-word window repeats. */
export function validateReadingBankOriginality(exercises: ReadingExercise[]): string[] {
  const issues: string[] = [];
  const seen = new Map<string, string>();
  for (const ex of exercises) {
    const sentences = ex.blocks
      .flatMap((b) => b.paragraphs)
      .join(" ")
      .split(/(?<=[.!?])\s+/);
    for (const sentence of sentences) {
      const ws = words(sentence);
      if (ws.length < 8) continue;
      for (let i = 0; i <= ws.length - 8; i += 1) {
        const window = ws.slice(i, i + 8).join(" ");
        const owner = seen.get(window);
        if (owner && owner !== ex.slug) {
          issues.push(`originality: "${window}" appears in both ${owner} and ${ex.slug}.`);
          if (issues.length > 20) return issues;
        } else if (!owner) {
          seen.set(window, ex.slug);
        }
      }
    }
  }
  return issues;
}

export function validateReadingBank(exercises: ReadingExercise[]): string[] {
  const issues: string[] = [];
  const slugs = new Set<string>();
  for (const ex of exercises) {
    if (slugs.has(ex.slug)) issues.push(`duplicate slug: ${ex.slug}`);
    slugs.add(ex.slug);
    issues.push(...validateReadingExercise(ex));
  }
  issues.push(...validateReadingBankOriginality(exercises));
  return issues;
}
