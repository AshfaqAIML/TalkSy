/**
 * Deterministic language analysis for written and spoken responses
 * (PROMPT 52 evaluation dimensions).
 *
 * These functions extend the task-requirement checks in checks.ts with the
 * sentence-level, punctuation, repetition and pace dimensions the
 * examination criteria actually judge:
 *
 *   - Sentence structure: sentence-length profile, fragment candidates,
 *     run-on candidates, sentence-opening monotony, complexity mix.
 *   - Punctuation: missing terminal punctuation, lowercase sentence
 *     starts, comma-splice candidates, doubled punctuation/spaces,
 *     missing apostrophes in common contractions, register-inappropriate
 *     exclamation marks.
 *   - Repetition (writing): repeated content phrases and over-used
 *     content words, on top of the shared unique-word ratio.
 *   - Pace & pauses (speaking): words-per-minute interpretation when the
 *     recording duration is known — the closest honest proxy for pause
 *     analysis available without studio-grade audio analysis; hesitation
 *     markers in the transcript itself.
 *
 * Every check is deterministic and explainable; the AI layer receives the
 * results as authoritative facts and must not contradict them. Thresholds
 * are deliberately conservative: a heuristic that flags a correct sentence
 * teaches the wrong lesson, so each check only fires when the evidence is
 * strong, and every detail line says exactly what was measured.
 */

import type { EvaluationCheck } from "./types";
import type { ResponseMetrics } from "./checks";

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

const STOPWORDS = new Set([
  "the", "a", "an", "and", "or", "but", "of", "to", "in", "on", "for", "with", "at", "by",
  "from", "about", "as", "is", "are", "was", "were", "be", "been", "being", "have", "has",
  "had", "do", "does", "did", "will", "would", "can", "could", "should", "may", "might",
  "your", "you", "i", "we", "they", "he", "she", "it", "my", "our", "their", "this", "that",
  "these", "those", "there", "here", "what", "which", "who", "whom", "whose", "when",
  "where", "why", "how", "not", "no", "yes", "so", "if", "than", "then", "also", "very",
]);

/** Split into sentence candidates on terminal punctuation or newlines. */
function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function words(text: string): string[] {
  return text.toLowerCase().replace(/[^a-z0-9'\s]/g, " ").split(/\s+/).filter(Boolean);
}

function wordCount(text: string): number {
  return words(text).length;
}

/**
 * Finite-verb markers — used (conservatively) for fragment detection.
 * Closed-class auxiliaries plus the most common English lexical verbs; a
 * 5+ word "sentence" containing none of them is very likely a fragment.
 */
const VERB_MARKERS =
  /\b(is|are|was|were|am|be|been|being|has|have|had|do|does|did|will|would|can|cannot|could|should|shall|may|might|must|goes|go|went|gone|comes|come|came|makes|make|made|takes|take|took|taken|gives|give|gave|shows|show|showed|shown|says|say|said|tells|tell|told|thinks|think|thought|believes|believe|believed|knows|know|knew|known|wants|want|wanted|needs|need|needed|uses|use|used|helps|help|helped|works|work|worked|lives|live|lived|gets|get|got|feels|feel|felt|looks|look|looked|seems|seem|seemed|provides|provide|provided|costs|cost|spent|spends|spend|illustrates|illustrate|illustrated|presents|present|presented|displays|display|displayed|depicts|depict|depicted|describes|describe|described|compares|compare|compared|covers|cover|covered|includes|include|included|increases|increase|increased|decreases|decrease|decreased|rises|rise|rose|risen|falls|fall|fell|fallen|grows|grow|grew|grown|starts|start|started|begins|begin|began|begun|ends|end|ended|reaches|reach|reached|remains|remain|remained|stays|stay|stayed|becomes|become|became|changes|change|changed|surprised|surprises|surprise|climbed|climbs|climb|narrowed|narrows|narrow|overtook|overtakes|overtake|produces|produce|produced|caught|catch|catches|bought|buy|buys|sold|sell|sells|taught|teach|teaches|slept|sleep|sleeps|found|finds|find|puts|put|keeps|keep|kept|leaves|leave|left|means|mean|meant|sees|see|saw|seen|asks|ask|asked|tries|try|tried|calls|call|called|builds|build|built|sends|send|sent|writes|write|wrote|written|speaks|speak|spoke|reads|read|learns|learn|learned|leads|lead|led|stops|stop|stopped|follows|follow|followed|watches|watch|watched|understands|understand|understood|expects|expect|expected|decides|decide|decided|suggests|suggest|suggested|offers|offer|offered|loves|love|loved|likes|like|liked|prefers|prefer|preferred|plans|plan|planned|prepares|prepare|prepared|repairs|repair|repaired|returns|return|returned|replies|reply|replied|requests|request|requested|receives|receive|received|arrives|arrive|arrived|moves|move|moved|brings|bring|brought|holds|hold|held|adds|add|added|removes|remove|removed|completes|complete|completed|finishes|finish|finished|passes|pass|passed|fails|fail|failed|wins|win|won|loses|lose|lost|earns|earn|earned|pays|pay|paid|chooses|choose|chose|chosen|shares|share|shared|visits|visit|visited|travels|travel|travelled|traveled|breaks|break|broke|broken|applies|apply|applied|deserves|deserve|deserved|matters|matter|mattered|protects|protect|protected|reveals|reveal|revealed|argues|argue|argued|counts|count|counted|considers|consider|considered|supports|support|supported|contributes|contribute|contributed|develops|develop|developed|measures|measure|measured|prepares|prepare|sits|sit|sat|admits|admit|admitted)\b/i;

/**
 * Clause-boundary markers for run-on detection. Coordinating conjunctions
 * (and/but/or/so/yet) only count when a subject follows — "creativity and
 * persistence" is not a clause boundary, "…, and it produces…" is. The
 * preposition "for" is excluded ("for example" would otherwise inflate
 * the count).
 */
const CLAUSE_MARKER_RE =
  /\b(because|although|while|whereas|since|when|if|unless|before|after|however|therefore|moreover|furthermore|which|who|that)\b|\b(and|but|or|so|yet)\s+(i|we|they|he|she|it|you|this|that|these|those|the|a|an|my|our|their|his|her|its)\b/gi;

function countClauseBoundaries(sentence: string): number {
  return sentence.match(CLAUSE_MARKER_RE)?.length ?? 0;
}

// ---------------------------------------------------------------------------
// Sentence structure (writing)
// ---------------------------------------------------------------------------

export type SentenceStructureFindings = {
  check: EvaluationCheck | null;
  longestSentenceWords: number;
  fragmentCount: number;
  runOnCount: number;
  repeatedOpenings: string | null;
  complexSentenceRatio: number | null;
};

export function analyzeSentenceStructure(text: string): SentenceStructureFindings {
  const sentences = splitSentences(text);
  const findings: string[] = [];
  let passed = true;

  // Longest sentence (fact, always safe to state when notable).
  const lengths = sentences.map((s) => wordCount(s));
  const longest = lengths.length > 0 ? Math.max(...lengths) : 0;
  let runOnCount = 0;
  for (const sentence of sentences) {
    const clauses = countClauseBoundaries(sentence);
    if (wordCount(sentence) >= 45 || clauses >= 4) runOnCount += 1;
  }
  if (runOnCount > 0) {
    passed = false;
    findings.push(
      `${runOnCount} run-on candidate${runOnCount === 1 ? "" : "s"} (${longest} words in the longest sentence) — sentences that pack many clauses are hard to follow; split them.`,
    );
  } else if (longest > 60) {
    passed = false;
    findings.push(`the longest sentence runs to ${longest} words — consider splitting it.`);
  }

  // Fragment candidates: a "sentence" of 5+ words with NO finite-verb
  // marker anywhere. Conservative by design — greetings, sign-offs and
  // short labels are skipped via the word floor and the comma-salutation
  // exclusion.
  let fragmentCount = 0;
  for (const sentence of sentences) {
    if (wordCount(sentence) < 5) continue; // greetings/sign-offs are fine
    if (/[,]$/.test(sentence.trim())) continue; // salutation/sign-off line
    if (!VERB_MARKERS.test(sentence)) fragmentCount += 1;
  }
  if (fragmentCount > 0) {
    passed = false;
    findings.push(
      `${fragmentCount} possible sentence fragment${fragmentCount === 1 ? "" : "s"} (a full sentence needs a finite verb).`,
    );
  }

  // Sentence-opening monotony: the same FIRST TWO WORDS opening 4+ sentences
  // ("The chart…" four times) reads as mechanical. Two-word keys avoid
  // false positives from common single openers ("I am… / I have…").
  const openingCounts = new Map<string, number>();
  for (const sentence of sentences) {
    const first = words(sentence).slice(0, 2);
    if (first.length < 2) continue;
    const key = first.join(" ");
    openingCounts.set(key, (openingCounts.get(key) ?? 0) + 1);
  }
  let repeatedOpenings: string | null = null;
  for (const [key, count] of openingCounts) {
    if (count >= 4) {
      repeatedOpenings = key;
      break;
    }
  }
  if (repeatedOpenings) {
    const count = openingCounts.get(repeatedOpenings) ?? 0;
    passed = false;
    findings.push(
      `${count} sentences open with the same words ("${repeatedOpenings}…") — vary your openings to lift the coherence score.`,
    );
  }

  // Complexity mix: share of sentences containing a subordinator or
  // relative pronoun (a range of 20–70% is healthy variety for exam writing).
  const complex = sentences.filter((s) =>
    /\b(which|who|that|because|although|while|whereas|since|when|if|unless|whereas|so that|in order to|despite|whereas)\b/i.test(s),
  ).length;
  const complexRatio = sentences.length > 0 ? complex / sentences.length : 0;
  if (sentences.length >= 5 && (complexRatio < 0.15 || complexRatio > 0.85)) {
    passed = false;
    findings.push(
      complexRatio < 0.15
        ? "almost every sentence is simple — add some complex sentences (because / which / although) to show grammatical range."
        : "almost every sentence is complex — mix in a few short, simple sentences for clarity and rhythm.",
    );
  }

  const check: EvaluationCheck | null =
    sentences.length >= 3
      ? {
          id: "sentence-structure",
          label: `Sentence structure (${sentences.length} sentences, ${longest} words longest)`,
          passed,
          detail: passed
            ? `Checked ${sentences.length} sentences: no run-ons, fragments or repetitive openings found, and the simple/complex mix looks varied.`
            : `Rule-based findings: ${findings.join(" ")}`,
          provenance: "RULE_BASED",
        }
      : null;

  return {
    check,
    longestSentenceWords: longest,
    fragmentCount,
    runOnCount,
    repeatedOpenings,
    complexSentenceRatio: sentences.length > 0 ? complexRatio : null,
  };
}

// ---------------------------------------------------------------------------
// Punctuation (writing)
// ---------------------------------------------------------------------------

const CONTRACTION_FIXES: Array<{ wrong: RegExp; right: string }> = [
  { wrong: /\bdont\b/i, right: "don't" },
  { wrong: /\bcant\b/i, right: "can't" },
  { wrong: /\bwont\b/i, right: "won't" },
  { wrong: /\bdoesnt\b/i, right: "doesn't" },
  { wrong: /\bdidnt\b/i, right: "didn't" },
  { wrong: /\bim\b/i, right: "I'm" },
  { wrong: /\bive\b/i, right: "I've" },
  { wrong: /\b youre \b/i, right: "you're" },
  { wrong: /\btheyre\b/i, right: "they're" },
  { wrong: /\bisnt\b/i, right: "isn't" },
  { wrong: /\barent\b/i, right: "aren't" },
  { wrong: /\bwasnt\b/i, right: "wasn't" },
  { wrong: /\bwerent\b/i, right: "weren't" },
  { wrong: /\bhasnt\b/i, right: "hasn't" },
  { wrong: /\bhavent\b/i, right: "haven't" },
  { wrong: /\bcouldnt\b/i, right: "couldn't" },
  { wrong: /\bshouldnt\b/i, right: "shouldn't" },
  { wrong: /\bwouldnt\b/i, right: "wouldn't" },
];

export type PunctuationFindings = {
  check: EvaluationCheck | null;
  missingTerminal: number;
  lowercaseStarts: number;
  commaSplices: number;
  missingApostrophes: string[];
  doubleExclamations: number;
};

export function analyzePunctuation(text: string): PunctuationFindings {
  const lines = text.split(/\n/).map((l) => l.trim()).filter(Boolean);
  const findings: string[] = [];
  let passed = true;

  // Missing terminal punctuation: lines that look like full sentences
  // (5+ words with a verb marker) but end without . ! ? or : or , sequences.
  let missingTerminal = 0;
  for (const line of lines) {
    if (wordCount(line) >= 5 && VERB_MARKERS.test(line) && !/[.!?:;]["')\]]?$/.test(line)) {
      missingTerminal += 1;
    }
  }
  if (missingTerminal > 0) {
    passed = false;
    findings.push(
      `${missingTerminal} sentence${missingTerminal === 1 ? "" : "s"} end without terminal punctuation (., ! or ?).`,
    );
  }

  // Lowercase sentence starts: after a sentence-ending mark, plus a
  // lowercase start of the whole response.
  let lowercaseStarts = 0;
  const afterTerminal = text.split(/(?<=[.!?])\s+/);
  for (const sentence of afterTerminal) {
    const trimmed = sentence.trim();
    if (trimmed.length > 3 && /^[a-z]/.test(trimmed)) lowercaseStarts += 1;
  }
  const textStart = text.trimStart();
  if (textStart.length > 10 && /^[a-z]/.test(textStart)) lowercaseStarts += 1;
  if (lowercaseStarts > 0) {
    passed = false;
    findings.push(`${lowercaseStarts} sentence${lowercaseStarts === 1 ? "" : "s"} start with a lowercase letter.`);
  }

  // Comma-splice candidates: a comma followed directly by a new subject +
  // finite verb, WITHOUT a conjunction or relative pronoun. Correct patterns
  // ("..., and we went" / "..., which shows…") are excluded by design.
  const SPLICE_SAFE_WORDS = new Set([
    "and", "but", "or", "so", "yet", "for", "nor", // coordinating conjunctions
    "which", "who", "whom", "whose", "where", "when", "that", // relative pronouns
    "because", "although", "while", "whereas", "since", "if", "unless", // subordinators
    "before", "after", "as", "though", "so", "in", "on", "at", "to", "for", "with", "from",
    "however", "therefore", "moreover", "furthermore", "instead", "meanwhile", "otherwise",
    "then", "also", "too", "just", "not", "no", "now", "still", "thus", "hence", "indeed",
  ]);
  const SPLICE_VERBS = new Set([
    "is", "are", "was", "were", "am", "has", "have", "had", "will", "would", "can", "could",
    "should", "may", "might", "do", "does", "did", "went", "goes", "go", "came", "come",
    "makes", "make", "takes", "take", "gives", "give", "shows", "show", "said", "says",
    "think", "thinks", "believe", "believes", "know", "knows", "want", "wants", "need",
    "needs", "use", "uses", "help", "helps", "work", "works", "live", "lives", "get", "gets",
    "feel", "feels", "look", "looks", "seem", "seems", "provide", "provides", "cost",
    "costs", "spend", "spends", "increase", "increases", "decreases", "decreases", "rose",
    "fell", "increased", "decreased", "bought", "sold", "found", "started", "finished",
    "reply", "replies", "replied", "answer", "answers", "answered", "agree", "agrees",
    "agreed", "disagree", "disagrees", "plan", "plans", "planned", "prefer", "prefers",
    "preferred", "love", "loves", "liked", "like", "visit", "visits", "visited",
  ]);
  let commaSplices = 0;
  for (const line of lines) {
    const segments = line.split(",");
    for (let i = 1; i < segments.length; i++) {
      const seg = words(segments[i] ?? "");
      const first = seg[0];
      if (!first) continue;
      if (SPLICE_SAFE_WORDS.has(first)) continue;
      // A splice needs TWO independent clauses: the text BEFORE the comma
      // must also contain a verb. Introductory phrases ("In conclusion, I
      // believe…", "Overall, output rose…") have no verb before the comma
      // and are therefore never splices.
      const before = segments[i - 1] ?? "";
      const beforeHasVerb =
        VERB_MARKERS.test(before) || words(before).some((w) => SPLICE_VERBS.has(w));
      if (!beforeHasVerb) continue;
      // Subject candidates: pronouns or a capitalized word (proper noun).
      const pronouns = new Set(["i", "we", "they", "he", "she", "it", "you", "this", "that", "these", "those", "there"]);
      const isSubject = pronouns.has(first) || /^[A-Z]/.test((segments[i] ?? "").trim().charAt(0));
      if (!isSubject) continue;
      // The finite verb may sit within the first three words (adverbs like
      // "never" often sit between subject and verb: "…, they never replied").
      const verbWindow = seg.slice(1, 4);
      if (verbWindow.some((w) => SPLICE_VERBS.has(w))) commaSplices += 1;
    }
  }
  if (commaSplices > 0) {
    passed = false;
    findings.push(
      `${commaSplices} possible comma splice${commaSplices === 1 ? "" : "s"} (two full sentences joined by only a comma — use a full stop, semicolon or conjunction).`,
    );
  }

  // Missing apostrophes in common contractions.
  const missingApostrophes: string[] = [];
  for (const { wrong, right } of CONTRACTION_FIXES) {
    if (wrong.test(text)) missingApostrophes.push(right);
  }
  if (missingApostrophes.length > 0) {
    passed = false;
    findings.push(`missing apostrophe(s): ${missingApostrophes.slice(0, 5).join(", ")}.`);
  }

  // Exclamation overuse for exam register.
  const exclamations = (text.match(/!/g) ?? []).length;
  if (exclamations > 1) {
    passed = false;
    findings.push(
      `${exclamations} exclamation marks — exam writing is formal; one at most (better: none).`,
    );
  }

  // Doubled punctuation / triple spaces (mechanical slips).
  const doubles = (text.match(/[!?]{2,}|\.{4,}| {3,}/g) ?? []).length;
  if (doubles > 0) {
    passed = false;
    findings.push(`${doubles} doubled punctuation or extra-space slip${doubles === 1 ? "" : "s"}.`);
  }

  const check: EvaluationCheck | null =
    wordCount(text) >= 25
      ? {
          id: "punctuation",
          label: "Punctuation and mechanics",
          passed,
          detail: passed
            ? "No punctuation problems found by the rule engine (sentence punctuation, capitalisation, apostrophes, comma splices)."
            : `Rule-based findings: ${findings.join(" ")}`,
          provenance: "RULE_BASED",
        }
      : null;

  return {
    check,
    missingTerminal,
    lowercaseStarts,
    commaSplices,
    missingApostrophes,
    doubleExclamations: exclamations,
  };
}

// ---------------------------------------------------------------------------
// Repetition (writing)
// ---------------------------------------------------------------------------

export type RepetitionFindings = {
  check: EvaluationCheck | null;
  repeatedPhrases: string[];
  overusedWords: Array<{ word: string; count: number }>;
};

export function analyzeRepetition(text: string): RepetitionFindings {
  const tokens = words(text);
  const findings: string[] = [];
  let passed = true;

  // Repeated content phrases: 3-word n-grams appearing 2+ times.
  const ngramCounts = new Map<string, number>();
  for (let i = 0; i + 3 <= tokens.length; i++) {
    const gram = tokens.slice(i, i + 3);
    if (gram.every((w) => STOPWORDS.has(w))) continue;
    const key = gram.join(" ");
    ngramCounts.set(key, (ngramCounts.get(key) ?? 0) + 1);
  }
  const repeatedPhrases = [...ngramCounts.entries()]
    .filter(([, count]) => count >= 2)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([phrase, count]) => `"${phrase}" (×${count})`);
  if (repeatedPhrases.length > 0) {
    passed = false;
    findings.push(`repeated phrase${repeatedPhrases.length === 1 ? "" : "s"}: ${repeatedPhrases.join(", ")}.`);
  }

  // Over-used content words (5+ occurrences, 60+ word responses).
  const contentCounts = new Map<string, number>();
  for (const token of tokens) {
    if (token.length < 4 || STOPWORDS.has(token)) continue;
    contentCounts.set(token, (contentCounts.get(token) ?? 0) + 1);
  }
  const overusedWords = [...contentCounts.entries()]
    .filter(([, count]) => count >= 5)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([word, count]) => ({ word, count }));
  if (tokens.length >= 60 && overusedWords.length > 0) {
    passed = false;
    findings.push(
      `over-used word${overusedWords.length === 1 ? "" : "s"}: ${overusedWords.map((w) => `"${w.word}" ×${w.count}`).join(", ")} — vary your vocabulary.`,
    );
  }

  const check: EvaluationCheck | null =
    tokens.length >= 40
      ? {
          id: "repetition",
          label: "Repetition and vocabulary variety",
          passed,
          detail: passed
            ? "No repeated phrases or heavily over-used words found — vocabulary use looks varied."
            : `Rule-based findings: ${findings.join(" ")}`,
          provenance: "RULE_BASED",
        }
      : null;

  return { check, repeatedPhrases, overusedWords };
}

// ---------------------------------------------------------------------------
// Pace & pauses (speaking, when the recording duration is known)
// ---------------------------------------------------------------------------

export type PaceFindings = {
  check: EvaluationCheck | null;
  wpm: number | null;
  interpretation: "measured" | "no-duration";
};

/**
 * Pace analysis: conversational English runs about 100–180 words per minute.
 * Below ~85 wpm the recording almost certainly contains long pauses; above
 * ~195 wpm it is rushed. This is a proxy measured from the transcript and
 * the duration — honest about what it can and cannot see.
 */
export function analyzePace(metrics: ResponseMetrics, audioSec: number | null): PaceFindings {
  if (!audioSec || audioSec < 2 || metrics.wordsPerMinute === null) {
    return { check: null, wpm: null, interpretation: "no-duration" };
  }
  const wpm = metrics.wordsPerMinute;
  let passed = true;
  let detail: string;
  if (wpm < 85) {
    passed = false;
    detail = `Measured: about ${Math.round(wpm)} words per minute over ${Math.round(audioSec)}s of audio — well below typical conversational pace (100–180 wpm), which usually means long pauses or frequent restarts. Pausing occasionally to think is normal; aim to reduce silent gaps.`;
  } else if (wpm > 195) {
    passed = false;
    detail = `Measured: about ${Math.round(wpm)} words per minute over ${Math.round(audioSec)}s — faster than typical conversational pace (100–180 wpm). Very fast delivery can blur word endings and stress; give key ideas a little room.`;
  } else {
    detail = `Measured: about ${Math.round(wpm)} words per minute over ${Math.round(audioSec)}s — inside the natural conversational range (100–180 wpm), so pause length is unlikely to be hurting your fluency score.`;
  }
  return {
    check: {
      id: "pace-pauses",
      label: `Pace and pauses (≈${Math.round(wpm)} wpm)`,
      passed,
      detail,
      provenance: "VERIFIED",
    },
    wpm,
    interpretation: "measured",
  };
}

/** Hesitation markers visible in the transcript itself (ellipses, mhm etc.). */
export function hesitationMarkers(text: string): number {
  return (text.match(/\.\.\.|…|\b(uh+|um+|erm+|hmm+|mhm)\b/gi) ?? []).length;
}
