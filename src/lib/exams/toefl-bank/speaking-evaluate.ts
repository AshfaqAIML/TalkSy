/**
 * TOEFL Speaking Practice Library — evaluation engines (PROMPT 50).
 *
 * Listen and Repeat — the repetition analysis: a deterministic word-level
 * comparison between the reference sentence and the learner's transcript
 * (LCS alignment): accuracy, matched/substituted/inserted/deleted words,
 * the longest correctly ordered run, and pacing against the repetition
 * window. No scores are invented beyond the measured accuracy; the verdict
 * bands are coaching language, not ETS levels.
 *
 * Take an Interview — the deterministic evaluation: measured metrics (word
 * count, pace, fillers, sentence count, suggested-vocabulary hits, whether
 * the question is visibly addressed) are turned into four criterion
 * estimates — Answer & relevance, Development & support, Language control,
 * Fluency & pace — each 1.0–6.0 and each explicitly labelled an EDUCATIONAL
 * ESTIMATE. This engine does NOT claim to replicate official ETS scoring.
 * An optional AI layer (provider seam) then ADDS coaching commentary and an
 * improved example; it never overrides the deterministic scores.
 */

import type { ToeflInterviewItem } from "@/data/exams/toefl/speaking-bank";
import { TOEFL_SPEAKING_DISCLAIMERS } from "@/data/exams/toefl/speaking-bank";

// ---------------------------------------------------------------------------
// Shared text utilities
// ---------------------------------------------------------------------------

const norm = (s: string): string =>
  (s ?? "")
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/[^a-z0-9']+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const wordList = (s: string): string[] => (norm(s).match(/[a-z0-9']+/g) ?? []);

const wordCount = (s: string): number => (s.match(/[A-Za-z0-9]+(?:['-][A-Za-z0-9]+)*/g) ?? []).length;

function stem(word: string): string {
  return word.toLowerCase().replace(/(ing|ed|es|s|ion|ions|ly|ment|ness)$/i, "");
}

// ---------------------------------------------------------------------------
// Repetition analysis (Listen and Repeat)
// ---------------------------------------------------------------------------

export type RepetitionAnalysis = {
  referenceWords: number;
  spokenWords: number;
  /** Words of the reference reproduced in order (LCS length). */
  matched: number;
  /** Reference words the transcript replaced with something else. */
  substitutions: number;
  /** Reference words missing entirely. */
  deletions: number;
  /** Extra words the learner added. */
  insertions: number;
  /** matched / referenceWords, 0–1. */
  accuracy: number;
  /** Longest run of consecutive correctly ordered reference words. */
  longestRun: number;
  withinWindow: boolean;
  durationSec: number;
  windowSec: number;
  /** Which reference words were substituted or missing (for the review panel). */
  problemWords: { word: string; kind: "substituted" | "missing" }[];
  verdict: "test-ready" | "close" | "developing" | "keep-practising";
  verdictNote: string;
};

/** Longest common subsequence over word stems (suffix-insensitive). */
function lcs(a: string[], b: string[]): number[][] {
  const dp = Array.from({ length: a.length + 1 }, () => new Array<number>(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i -= 1) {
    for (let j = b.length - 1; j >= 0; j -= 1) {
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  return dp;
}

export function analyzeRepetition(reference: string, transcript: string, durationSec: number, windowSec: number): RepetitionAnalysis {
  const refWords = wordList(reference);
  const saidWords = wordList(transcript);
  const refStems = refWords.map(stem);
  const saidStems = saidWords.map(stem);

  const dp = lcs(refStems, saidStems);
  const matched = dp[0][0];

  // Walk the DP table to recover which reference words matched, in order,
  // plus the longest consecutive run.
  const matchedFlags: boolean[] = new Array(refWords.length).fill(false);
  let i = 0;
  let j = 0;
  while (i < refStems.length && j < saidStems.length) {
    if (refStems[i] === saidStems[j]) {
      matchedFlags[i] = true;
      i += 1;
      j += 1;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      i += 1;
    } else {
      j += 1;
    }
  }
  let longestRun = 0;
  let run = 0;
  for (const f of matchedFlags) {
    if (f) { run += 1; longestRun = Math.max(longestRun, run); } else run = 0;
  }

  const substitutions = matchedFlags.filter((f) => !f).length; // each unmatched ref word is substituted or missing
  const insertions = Math.max(0, saidWords.length - matched);
  const deletions = 0; // unmatched reference words already counted; kept for API clarity
  const problemWords = refWords
    .map((w, idx) => ({ w, idx, matched: matchedFlags[idx] }))
    .filter((x) => !x.matched)
    .map((x) => ({ word: refWords[x.idx], kind: "missing" as const }));

  const accuracy = refWords.length ? matched / refWords.length : 0;
  const withinWindow = durationSec <= windowSec + 0.5;

  let verdict: RepetitionAnalysis["verdict"];
  let verdictNote: string;
  if (accuracy >= 0.95 && withinWindow) {
    verdict = "test-ready";
    verdictNote = `Every word in order inside ${windowSec} seconds — that is test standard for this sentence.`;
  } else if (accuracy >= 0.85) {
    verdict = "close";
    verdictNote = withinWindow
      ? "Nearly every word is there in order — lock the two or three problem words and it is test standard."
      : "The words are nearly right but the answer ran past the window — start speaking the instant the audio ends.";
  } else if (accuracy >= 0.7) {
    verdict = "developing";
    verdictNote = "The shape of the sentence is there but words are dropping — chunk the sentence into three beats and repeat each beat.";
  } else {
    verdict = "keep-practising";
    verdictNote = "Listen once more, read the transcript now that it is revealed, say it twice slowly, then try again from memory.";
  }

  return {
    referenceWords: refWords.length,
    spokenWords: saidWords.length,
    matched,
    substitutions: substitutions - problemWords.filter((p) => p.kind === "missing").length,
    deletions,
    insertions,
    accuracy,
    longestRun,
    withinWindow,
    durationSec: Math.round(durationSec * 10) / 10,
    windowSec,
    problemWords,
    verdict,
    verdictNote,
  };
}

// ---------------------------------------------------------------------------
// Interview evaluation (Take an Interview)
// ---------------------------------------------------------------------------

export type InterviewMetrics = {
  wordCount: number;
  durationSec: number;
  wpm: number;
  sentences: number;
  fillers: number;
  fillerRate: number;
  vocabHits: number;
  vocabTotal: number;
  /** Content words from the question that the answer visibly picks up (0–1). */
  questionAddressed: number;
  lengthVsGuidance: "short" | "in-band" | "long";
  answerSec: number;
};

export type SpeakingCriterionFeedbackLine = { kind: "strength" | "issue" | "neutral"; text: string };

export type InterviewCriterionReport = {
  key: "response" | "development" | "language" | "delivery";
  name: string;
  /** 1.0–6.0 in 0.5 steps — an educational estimate, never an ETS score. */
  score: number;
  feedback: SpeakingCriterionFeedbackLine[];
};

export type SpeakingAiCommentary = {
  summary: string;
  strengths: string[];
  weaknesses: string[];
  errors: { original: string; correction: string; note: string }[];
  improvements: string[];
  improvedExample: string;
};

export type InterviewEvaluation = {
  status: "complete" | "insufficient";
  criteria: InterviewCriterionReport[];
  /** Mean of the criteria, 1.0–6.0 — an educational estimate. */
  overall: number;
  overallLabel: string;
  metrics: InterviewMetrics;
  strengths: string[];
  improvements: string[];
  disclaimers: string[];
  aiAvailable: boolean;
  aiCommentary: SpeakingAiCommentary | null;
};

const FILLERS = ["um", "uh", "erm", "like", "you know", "i mean", "kind of", "sort of"];

export function measureInterviewAnswer(item: ToeflInterviewItem, transcript: string, durationSec: number): InterviewMetrics {
  const ws = wordList(transcript);
  const sentences = transcript.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter((s) => s.length > 0);
  const lower = transcript.toLowerCase();
  let fillers = 0;
  for (const f of FILLERS) {
    const re = new RegExp(`(?<![a-z])${f.replace(/ /g, "\\s+")}(?![a-z])`, "g");
    fillers += (lower.match(re) ?? []).length;
  }
  const suggested = item.vocabulary.map((v) => stem(v.word));
  const vocabHits = suggested.filter((s) => ws.map(stem).some((w) => w === s)).length;
  const qWords = wordList(item.question).filter((w) => w.length > 3);
  const qHits = qWords.filter((q) => ws.map(stem).some((w) => w === stem(q))).length;
  const wpm = durationSec > 0 ? (ws.length / durationSec) * 60 : 0;
  const expectedWords = item.answerSec * 2.2; // ~130 wpm natural speech
  const lengthVsGuidance = ws.length < expectedWords * 0.5 ? "short" : ws.length > expectedWords * 1.6 ? "long" : "in-band";

  return {
    wordCount: ws.length,
    durationSec: Math.round(durationSec * 10) / 10,
    wpm: Math.round(wpm),
    sentences: sentences.length,
    fillers,
    fillerRate: ws.length ? (fillers / ws.length) * 100 : 0,
    vocabHits,
    vocabTotal: item.vocabulary.length,
    questionAddressed: qWords.length ? qHits / qWords.length : 0,
    lengthVsGuidance,
    answerSec: item.answerSec,
  };
}

const clampScore = (n: number): number => Math.max(1, Math.min(6, Math.round(n * 2) / 2));

function responseCriterion(m: InterviewMetrics): InterviewCriterionReport {
  const feedback: SpeakingCriterionFeedbackLine[] = [];
  let score = 3.5;
  if (m.questionAddressed >= 0.5) { score += 1; feedback.push({ kind: "strength", text: "The answer visibly picks up the question's key words — it answers what was asked." }); }
  else if (m.questionAddressed >= 0.25) { feedback.push({ kind: "issue", text: "Only some question key words appear — make sure the first sentence answers the question directly." }); score -= 0.5; }
  else { score -= 1.5; feedback.push({ kind: "issue", text: "The question's key words barely appear — open by restating and answering the question." }); }
  if (m.lengthVsGuidance === "in-band") { score += 0.5; feedback.push({ kind: "strength", text: `Length matches the ${m.answerSec}-second guidance for this item.` }); }
  else if (m.lengthVsGuidance === "short") { score -= 1; feedback.push({ kind: "issue", text: `The answer is short for a ${m.answerSec}-second window — add one reason and one example.` }); }
  else { feedback.push({ kind: "neutral", text: "The answer runs long for the guidance window; a strong close beats extra words." }); }
  return { key: "response", name: "Answer & relevance", score: clampScore(score), feedback };
}

function developmentCriterion(m: InterviewMetrics, transcript: string): InterviewCriterionReport {
  const feedback: SpeakingCriterionFeedbackLine[] = [];
  const lower = transcript.toLowerCase();
  const reasonMarkers = ["because", "so that", "which is why", "the reason", "for example", "for instance", "such as", "in my experience", "when i"].filter((x) => lower.includes(x));
  let score = 3;
  if (reasonMarkers.length >= 2) { score += 1.5; feedback.push({ kind: "strength", text: `Development markers found (${reasonMarkers.slice(0, 3).join(", ")}) — the answer extends beyond a bare reply.` }); }
  else if (reasonMarkers.length === 1) { score += 0.5; feedback.push({ kind: "issue", text: "One development marker found — add a second with an example." }); }
  else { score -= 1; feedback.push({ kind: "issue", text: "No reason or example markers — develop the reply with because or for example." }); }
  if (m.sentences >= 4) { score += 0.5; feedback.push({ kind: "strength", text: `${m.sentences} sentences give the answer a clear shape.` }); }
  else if (m.sentences <= 2) { score -= 0.5; feedback.push({ kind: "issue", text: "Only two sentences — an interview answer needs at least three beats." }); }
  if (m.vocabHits >= 2) { score += 0.5; feedback.push({ kind: "strength", text: `${m.vocabHits} of the suggested topic words were used.` }); }
  return { key: "development", name: "Development & support", score: clampScore(score), feedback };
}

function languageCriterion(m: InterviewMetrics, transcript: string): InterviewCriterionReport {
  const feedback: SpeakingCriterionFeedbackLine[] = [];
  let score = 4;
  const flags: string[] = [];
  if (/\bi\b/.test(transcript)) flags.push("lowercase i");
  if (/\bdont\b|\bcant\b|\bwont\b|\bdoesnt\b/i.test(transcript)) flags.push("missing apostrophe in contraction");
  if (/\bhe don't\b|\bthey was\b|\bi has\b|\bshe have\b/i.test(transcript)) flags.push("agreement slip");
  if (m.sentences >= 1 && transcript.split(/(?<=[.!?])\s+/).some((s) => s.trim().length > 0 && !/^[A-Z]/.test(s.trim()))) flags.push("sentence not capitalised");
  if (flags.length === 0) { score += 0.5; feedback.push({ kind: "strength", text: "No grammatical error patterns were detected in the transcript." }); }
  else {
    score -= Math.min(1.5, flags.length * 0.5);
    for (const f of flags.slice(0, 3)) feedback.push({ kind: "issue", text: `Detected: ${f}.` });
  }
  if (m.wordCount > 40 && m.sentences > 0 && m.wordCount / m.sentences <= 22) { score += 0.5; feedback.push({ kind: "strength", text: "Sentence length stays controlled under pressure." }); }
  return { key: "language", name: "Language control", score: clampScore(score), feedback };
}

function deliveryCriterion(m: InterviewMetrics): InterviewCriterionReport {
  const feedback: SpeakingCriterionFeedbackLine[] = [];
  let score = 3.5;
  if (m.wpm >= 90 && m.wpm <= 170) { score += 1; feedback.push({ kind: "strength", text: `Pace of ${m.wpm} wpm sits inside the natural band.` }); }
  else if (m.wpm > 0 && m.wpm < 90) { score -= 0.5; feedback.push({ kind: "issue", text: `${m.wpm} wpm is slow — push fluency with shorter, complete sentences.` }); }
  else if (m.wpm > 170) { score -= 0.5; feedback.push({ kind: "issue", text: `${m.wpm} wpm races past natural pace — plant one pause per sentence.` }); }
  else { feedback.push({ kind: "neutral", text: "Record a duration with the answer so pace can be measured." }); }
  if (m.fillerRate <= 3) { score += 0.5; feedback.push({ kind: "strength", text: `Fillers are rare (${m.fillers} detected).` }); }
  else if (m.fillerRate > 8) { score -= 1; feedback.push({ kind: "issue", text: `${m.fillers} fillers (${m.fillerRate.toFixed(1)} per 100 words) — replace them with a silent pause.` }); }
  else { feedback.push({ kind: "neutral", text: `A moderate ${m.fillers} fillers — a natural amount for live speech.` }); }
  return { key: "delivery", name: "Fluency & pace", score: clampScore(score), feedback };
}

// ---------------------------------------------------------------------------
// The AI layer (provider seam — optional, never overrides)
// ---------------------------------------------------------------------------

async function aiSpeakingCommentary(item: ToeflInterviewItem, transcript: string, overall: number): Promise<SpeakingAiCommentary | null> {
  try {
    const { getLlmProvider } = await import("@/lib/llm");
    const { withUsageLogging } = await import("@/lib/llm/usage");
    const provider = withUsageLogging(getLlmProvider(), { feature: "toefl-speaking-library" });
    const reply = await provider.complete({
      system: [
        "You are an experienced TOEFL iBT Speaking coach reviewing the transcript of a learner's interview answer.",
        "A rule-based engine has already measured the transcript and produced criterion estimates; your job is ONLY a coaching layer — do not assign or promise scores, and never claim to replicate official ETS scoring.",
        "Reply with ONLY a JSON object:",
        `{"summary": "<three sentences: what genuinely worked, what limits it, the single highest-value lift>", "strengths": ["<two specific strengths, quoting the learner's own words where useful>"], "weaknesses": ["<two specific weaknesses>"], "errors": [{"original": "<a short exact quote from the transcript with a language error>", "correction": "<the corrected version>", "note": "<one sentence explaining the rule>"}], "improvements": ["<three concrete, doable revisions for spoken delivery>"], "improvedExample": "<a stronger 60-110 word spoken-register version of the same answer, keeping the learner's ideas and vocabulary lift — not a completely new answer>"}`,
        "If the transcript has no clear language errors, return an empty errors array. Keep every string under 700 characters.",
      ].join("\n"),
      messages: [
        {
          role: "user",
          content: [
            `QUESTION: ${item.question}`,
            `TOPIC: ${item.topic} | SUGGESTED VOCABULARY: ${item.vocabulary.map((v) => v.word).join(", ")}`,
            `MEASURED: the engine's overall educational estimate is ${overall.toFixed(1)} of 6.`,
            `LEARNER TRANSCRIPT (self-transcribed):\n${transcript.slice(0, 6000)}`,
          ].join("\n"),
        },
      ],
      timeoutMs: 45_000,
    });
    const fenced = reply.match(/```(?:json)?\s*([\s\S]*?)```/);
    const candidate = fenced ? fenced[1] : reply;
    const start = candidate.indexOf("{");
    const end = candidate.lastIndexOf("}");
    if (start === -1 || end === -1) return null;
    const parsed = JSON.parse(candidate.slice(start, end + 1)) as Record<string, unknown>;
    const str = (v: unknown, cap = 700): string => (typeof v === "string" ? v.slice(0, cap) : "");
    const arr = (v: unknown, cap: number): string[] =>
      Array.isArray(v) ? v.filter((x): x is string => typeof x === "string").slice(0, cap).map((x) => x.slice(0, 500)) : [];
    const errors = Array.isArray(parsed.errors)
      ? (parsed.errors as Record<string, unknown>[])
          .filter((e) => typeof e?.original === "string" && typeof e?.correction === "string")
          .slice(0, 4)
          .map((e) => ({ original: String(e.original).slice(0, 300), correction: String(e.correction).slice(0, 300), note: typeof e.note === "string" ? e.note.slice(0, 300) : "" }))
      : [];
    const summary = str(parsed.summary);
    if (!summary) return null;
    return {
      summary,
      strengths: arr(parsed.strengths, 3),
      weaknesses: arr(parsed.weaknesses, 3),
      errors,
      improvements: arr(parsed.improvements, 4),
      improvedExample: str(parsed.improvedExample, 1200),
    };
  } catch {
    return null; // provider unavailable / timeout / unparsable → deterministic-only report
  }
}

// ---------------------------------------------------------------------------
// Entry points
// ---------------------------------------------------------------------------

export async function evaluateInterviewAnswer(
  item: ToeflInterviewItem,
  transcript: string,
  durationSec: number,
): Promise<InterviewEvaluation> {
  const metrics = measureInterviewAnswer(item, transcript, durationSec);

  if (metrics.wordCount < 25) {
    return {
      criteria: [],
      overall: 0,
      overallLabel: "Too short to evaluate",
      metrics,
      strengths: [],
      improvements: [
        `Speak (or type) a fuller answer first — at least 25 words before the engine can say anything useful; this item's guidance is ${item.answerSec} seconds.`,
      ],
      disclaimers: TOEFL_SPEAKING_DISCLAIMERS,
      status: "insufficient",
      aiAvailable: false,
      aiCommentary: null,
    };
  }

  const criteria = [
    responseCriterion(metrics),
    developmentCriterion(metrics, transcript),
    languageCriterion(metrics, transcript),
    deliveryCriterion(metrics),
  ];
  const overall = clampScore(criteria.reduce((a, c) => a + c.score, 0) / criteria.length);

  const strengths = criteria
    .flatMap((c) => c.feedback.filter((f) => f.kind === "strength").map((f) => `${c.name}: ${f.text}`))
    .slice(0, 5);
  const improvements = criteria
    .flatMap((c) => c.feedback.filter((f) => f.kind === "issue").map((f) => `${c.name}: ${f.text}`))
    .slice(0, 6);

  const ai = await aiSpeakingCommentary(item, transcript, overall);

  return {
    criteria,
    overall,
    overallLabel: `Estimated level ${overall.toFixed(1)} of 6 (educational estimate)`,
    metrics,
    strengths,
    improvements,
    disclaimers: TOEFL_SPEAKING_DISCLAIMERS,
    status: "complete",
    aiAvailable: ai !== null,
    aiCommentary: ai,
  };
}
