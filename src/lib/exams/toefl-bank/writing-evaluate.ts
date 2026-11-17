/**
 * TOEFL Writing Practice Library — the deterministic evaluation engine plus
 * the AI coaching layer (PROMPT 50).
 *
 * Every Write an Email and Write for an Academic Discussion submission is
 * analysed by this rule-based layer FIRST: measured metrics (length against
 * the task's word band, key-point coverage, greeting/sign-off or engagement
 * and position markers, paragraphing, linker variety, sentence range,
 * register markers, error patterns, lexical spread) are turned into four
 * criterion estimates — Task response, Organization & development, Language
 * accuracy, Lexical range — each 1.0–6.0, each with feedback lines citing
 * measured evidence, and each explicitly labelled an EDUCATIONAL ESTIMATE.
 * The overall is the mean of the four.
 *
 * This engine does NOT claim to replicate official ETS scoring; every number
 * it produces is an educational estimate and the disclaimers ship with every
 * report. An optional AI layer (through the provider seam — tests install a
 * fake, deployments without credentials degrade gracefully) then ADDS
 * coaching commentary and an improved example of the learner's own response;
 * it never overrides the deterministic scores.
 */

import type { ToeflDiscussionTask, ToeflEmailTask } from "@/data/exams/toefl/writing-bank";
import { TOEFL_WRITING_DISCLAIMERS } from "@/data/exams/toefl/writing-bank";

// ---------------------------------------------------------------------------
// Text utilities
// ---------------------------------------------------------------------------

const WORD_RE = /[A-Za-z0-9]+(?:[.,:'’-][A-Za-z0-9]+)*/g;

export function splitParagraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
}

export function splitSentences(text: string): string[] {
  const out: string[] = [];
  for (const paragraph of splitParagraphs(text)) {
    const parts = paragraph
      .split(/(?<=[.!?])\s+(?=[A-Z0-9"'“(])/)
      .map((s) => s.trim())
      .filter(Boolean);
    for (const p of parts) out.push(p);
  }
  return out;
}

const words = (s: string): string[] => s.match(WORD_RE) ?? [];
const wc = (s: string): number => words(s).length;

function stem(word: string): string {
  return word.toLowerCase().replace(/(ing|ed|es|s|ion|ions|ly|ment|ness)$/i, "");
}

function containsStem(haystack: string[], needle: string): boolean {
  const target = stem(needle);
  if (target.length < 3) return haystack.some((w) => w.toLowerCase() === needle.toLowerCase());
  return haystack.some((w) => stem(w) === target);
}

// ---------------------------------------------------------------------------
// Metrics
// ---------------------------------------------------------------------------

export type WritingMetrics = {
  wordCount: number;
  paragraphCount: number;
  sentenceCount: number;
  meanSentenceLength: number;
  sentenceLengthRange: number;
  /** How many of the task's key points the response visibly covers (0–1). */
  keyPointCoverage: number;
  coveredKeyPoints: number;
  totalKeyPoints: number;
  linkerVariety: number;
  /** email: has greeting + sign-off; discussion: engages a classmate + states a position. */
  genreMarkers: { greeting: boolean; signOff: boolean; engagesClassmate: boolean; statesPosition: boolean };
  withinWordBand: boolean;
  errorFlags: string[];
  typeTokenRatio: number;
  taskType: "write-email" | "academic-discussion";
};

const LINKERS = [
  "however", "therefore", "for example", "for instance", "although", "because", "in addition",
  "furthermore", "on the other hand", "as a result", "which is why", "instead", "meanwhile",
  "first", "second", "finally", "overall", "in conclusion",
];

const POSITION_MARKERS = ["i believe", "i think", "in my opinion", "i agree", "i disagree", "my position", "i would argue", "to me"];

const GREETING_RE = /^\s*(dear|hi|hello|good morning|good afternoon|good evening)\b/i;
const SIGNOFF_RE = /\b(kind regards|best regards|regards|sincerely|yours sincerely|thank you|thanks|best wishes|many thanks)\b/i;

function detectErrorFlags(sentences: string[], text: string): string[] {
  const flags: string[] = [];
  if (/\bi\b/.test(text)) flags.push("lowercase i");
  if (/\bcould of\b|\bshould of\b|\bwould of\b/i.test(text)) flags.push("could/should/would of");
  if (/\bdont\b|\bcant\b|\bwont\b|\bdoesnt\b|\bisnt\b/i.test(text)) flags.push("missing apostrophe in contraction");
  const long = sentences.filter((s) => wc(s) > 45);
  if (long.length > 0) flags.push(`${long.length} very long sentence(s) over 45 words`);
  const fused = sentences.filter((s) => /^[a-z]/.test(s));
  if (fused.length > 0) flags.push(`${fused.length} sentence(s) not starting with a capital`);
  if (/\s{2,}/.test(text)) flags.push("double spaces");
  const splices = sentences.filter((s) => /,\s+(?:i|we|they|he|she|it)\s+(?:am|is|are|was|were|have|has|had|will|do|does|did)\b/.test(s) && wc(s) > 18);
  if (splices.length > 0) flags.push(`${splices.length} possible comma splice(s)`);
  return flags;
}

export function measureWritingResponse(task: ToeflEmailTask | ToeflDiscussionTask, response: string): WritingMetrics {
  const ws = words(response);
  const sentences = splitSentences(response);
  const paragraphs = splitParagraphs(response);
  const lengths = sentences.map((s) => wc(s));
  const lower = response.toLowerCase();
  const wsLower = ws.map((w) => w.toLowerCase());

  let covered = 0;
  for (const kp of task.keyPoints) {
    const kpWords = words(kp).filter((w) => w.length > 3);
    if (kpWords.length === 0) continue;
    const hits = kpWords.filter((w) => containsStem(wsLower, w)).length;
    if (hits / kpWords.length >= 0.4) covered += 1;
  }

  const linkerVariety = LINKERS.filter((l) => lower.includes(l)).length;
  const unique = new Set(wsLower).size;

  let genreMarkers: WritingMetrics["genreMarkers"];
  if (task.taskType === "write-email") {
    genreMarkers = {
      greeting: GREETING_RE.test(response),
      signOff: SIGNOFF_RE.test(response),
      engagesClassmate: false,
      statesPosition: false,
    };
  } else {
    const names = task.studentPosts.map((s) => s.name.toLowerCase());
    genreMarkers = {
      greeting: false,
      signOff: false,
      engagesClassmate: names.some((n) => lower.includes(n)),
      statesPosition: POSITION_MARKERS.some((m) => lower.includes(m)),
    };
  }

  return {
    wordCount: ws.length,
    paragraphCount: paragraphs.length,
    sentenceCount: sentences.length,
    meanSentenceLength: sentences.length ? ws.length / sentences.length : 0,
    sentenceLengthRange: lengths.length ? Math.max(...lengths) - Math.min(...lengths) : 0,
    keyPointCoverage: task.keyPoints.length ? covered / task.keyPoints.length : 0,
    coveredKeyPoints: covered,
    totalKeyPoints: task.keyPoints.length,
    linkerVariety,
    genreMarkers,
    withinWordBand: ws.length >= task.wordBand.min && ws.length <= task.wordBand.max,
    errorFlags: detectErrorFlags(sentences, response),
    typeTokenRatio: ws.length ? unique / ws.length : 0,
    taskType: task.taskType,
  };
}

// ---------------------------------------------------------------------------
// Criterion reports (1.0–6.0 educational estimates)
// ---------------------------------------------------------------------------

export type CriterionFeedbackLine = { kind: "strength" | "issue" | "neutral"; text: string };

export type WritingCriterionReport = {
  key: "task" | "organization" | "accuracy" | "lexis";
  name: string;
  /** 1.0–6.0 in 0.5 steps — an educational estimate, never an ETS score. */
  score: number;
  feedback: CriterionFeedbackLine[];
};

export type WritingAiCommentary = {
  summary: string;
  strengths: string[];
  weaknesses: string[];
  errors: { original: string; correction: string; note: string }[];
  improvements: string[];
  improvedExample: string;
};

export type WritingEvaluation = {
  status: "complete" | "insufficient";
  criteria: WritingCriterionReport[];
  /** Mean of the criteria, 1.0–6.0 — an educational estimate. */
  overall: number;
  overallLabel: string;
  metrics: WritingMetrics;
  strengths: string[];
  improvements: string[];
  disclaimers: string[];
  aiAvailable: boolean;
  aiCommentary: WritingAiCommentary | null;
};

const clampScore = (n: number): number => Math.max(1, Math.min(6, Math.round(n * 2) / 2));

function taskCriterion(m: WritingMetrics, task: ToeflEmailTask | ToeflDiscussionTask): WritingCriterionReport {
  const feedback: CriterionFeedbackLine[] = [];
  let score = 3;

  if (m.taskType === "write-email") {
    if (m.genreMarkers.greeting) { score += 0.5; feedback.push({ kind: "strength", text: "The email opens with a greeting, which the recipient expects." }); }
    else { score -= 1; feedback.push({ kind: "issue", text: "No greeting was detected — open with Dear/Hello plus the recipient's name." }); }
    if (m.genreMarkers.signOff) { score += 0.5; feedback.push({ kind: "strength", text: "A polite sign-off closes the email." }); }
    else { score -= 0.5; feedback.push({ kind: "issue", text: "No sign-off was detected — close with Kind regards or similar." }); }
  } else {
    if (m.genreMarkers.engagesClassmate) { score += 0.5; feedback.push({ kind: "strength", text: "The post engages a named classmate, which this task explicitly rewards." }); }
    else { score -= 1; feedback.push({ kind: "issue", text: "Neither classmate is addressed by name — engagement is half of this task." }); }
    if (m.genreMarkers.statesPosition) { score += 0.5; feedback.push({ kind: "strength", text: "A clear position marker states where you stand." }); }
    else { score -= 0.5; feedback.push({ kind: "issue", text: "No position marker found — say I agree/I believe early." }); }
  }

  if (m.keyPointCoverage >= 0.99) { score += 1.5; feedback.push({ kind: "strength", text: `All ${m.totalKeyPoints} key points are visibly covered.` }); }
  else if (m.keyPointCoverage >= 0.66) { score += 0.5; feedback.push({ kind: "issue", text: `${m.totalKeyPoints - m.coveredKeyPoints} of the ${m.totalKeyPoints} key points is not clearly covered.` }); }
  else if (m.keyPointCoverage >= 0.34) { score -= 0.5; feedback.push({ kind: "issue", text: `Only ${m.coveredKeyPoints} of ${m.totalKeyPoints} key points are clearly covered.` }); }
  else { score -= 1.5; feedback.push({ kind: "issue", text: "Most key points are missing — re-read the requirements before writing." }); }

  const band = task.wordBand;
  if (m.withinWordBand) { score += 0.5; feedback.push({ kind: "strength", text: `Length (${m.wordCount} words) sits inside the ${band.min}–${band.max} word band.` }); }
  else if (m.wordCount < band.min) { score -= 1; feedback.push({ kind: "issue", text: `${m.wordCount} words is under the ${band.min}-word floor — develop each point further.` }); }
  else { feedback.push({ kind: "neutral", text: `${m.wordCount} words runs past the ${band.max}-word ceiling; tighter is safer under time pressure.` }); }

  return { key: "task", name: "Task response", score: clampScore(score), feedback };
}

function organizationCriterion(m: WritingMetrics): WritingCriterionReport {
  const feedback: CriterionFeedbackLine[] = [];
  let score = 3;

  if (m.paragraphCount >= 2) { score += 0.5; feedback.push({ kind: "strength", text: `${m.paragraphCount} paragraphs separate purpose, content and close.` }); }
  else { score -= 0.5; feedback.push({ kind: "issue", text: "The response is one block — split purpose, development and close." }); }

  if (m.linkerVariety >= 3) { score += 1; feedback.push({ kind: "strength", text: `${m.linkerVariety} different linking expressions guide the reader.` }); }
  else if (m.linkerVariety === 0) { score -= 1; feedback.push({ kind: "issue", text: "No linking expressions detected — connect your ideas explicitly." }); }
  else { feedback.push({ kind: "issue", text: "Only one or two linkers — variety signals control." }); }

  if (m.sentenceLengthRange >= 8 && m.meanSentenceLength <= 28) { score += 0.5; feedback.push({ kind: "strength", text: "Sentence lengths vary naturally, which keeps the prose readable." }); }
  else if (m.meanSentenceLength > 28) { score -= 0.5; feedback.push({ kind: "issue", text: `Average sentence length is ${Math.round(m.meanSentenceLength)} words — break some sentences up.` }); }

  return { key: "organization", name: "Organization & development", score: clampScore(score), feedback };
}

function accuracyCriterion(m: WritingMetrics): WritingCriterionReport {
  const feedback: CriterionFeedbackLine[] = [];
  let score = 4;

  if (m.errorFlags.length === 0) { score += 1; feedback.push({ kind: "strength", text: "No mechanical error patterns were detected." }); }
  else {
    score -= Math.min(2, m.errorFlags.length * 0.5);
    for (const f of m.errorFlags.slice(0, 4)) feedback.push({ kind: "issue", text: `Detected: ${f}.` });
  }
  const veryLong = m.errorFlags.filter((f) => f.includes("very long")).length;
  if (veryLong > 1) score -= 0.5;

  return { key: "accuracy", name: "Language accuracy", score: clampScore(score), feedback };
}

function lexisCriterion(m: WritingMetrics): WritingCriterionReport {
  const feedback: CriterionFeedbackLine[] = [];
  let score = 3;

  if (m.typeTokenRatio >= 0.55 && m.wordCount >= 60) { score += 1; feedback.push({ kind: "strength", text: "Vocabulary shows healthy variety for the length." }); }
  else if (m.typeTokenRatio < 0.45 && m.wordCount >= 60) { score -= 0.5; feedback.push({ kind: "issue", text: "Word repetition is high — reach for more precise alternatives." }); }
  else { feedback.push({ kind: "neutral", text: "Add a few topic-specific words to lift the range." }); }

  if (m.wordCount >= 90 && m.typeTokenRatio >= 0.5) score += 0.5;

  return { key: "lexis", name: "Lexical range", score: clampScore(score), feedback };
}

// ---------------------------------------------------------------------------
// The AI layer (provider seam — optional, never overrides)
// ---------------------------------------------------------------------------

async function aiWritingCommentary(
  task: ToeflEmailTask | ToeflDiscussionTask,
  response: string,
  overall: number,
): Promise<WritingAiCommentary | null> {
  try {
    const { getLlmProvider } = await import("@/lib/llm");
    const { withUsageLogging } = await import("@/lib/llm/usage");
    const provider = withUsageLogging(getLlmProvider(), { feature: "toefl-writing-library" });
    const reply = await provider.complete({
      system: [
        "You are an experienced TOEFL iBT Writing coach reviewing a learner's email or discussion-post response.",
        "A rule-based engine has already measured the response and produced criterion estimates; your job is ONLY a coaching layer — do not assign or promise scores, and never claim to replicate official ETS scoring.",
        "Reply with ONLY a JSON object:",
        `{"summary": "<three sentences: what genuinely worked, what limits it, the single highest-value lift>", "strengths": ["<two specific strengths, quoting the learner's own words where useful>"], "weaknesses": ["<two specific weaknesses>"], "errors": [{"original": "<a short exact quote from the response with a language error>", "correction": "<the corrected version>", "note": "<one sentence explaining the rule>"}], "improvements": ["<three concrete, doable revisions>"], "improvedExample": "<a revised version of 60-120 words of the learner's own response, keeping their ideas but lifting the language — not a completely new text>"}`,
        "If the response has no clear language errors, return an empty errors array. Keep every string under 700 characters.",
      ].join("\n"),
      messages: [
        {
          role: "user",
          content: [
            `TASK TYPE: ${task.taskType === "write-email" ? `Write an Email (${task.purpose}) to the ${task.recipient}` : "Write for an Academic Discussion"}`,
            `KEY POINTS TO COVER: ${task.keyPoints.join(" | ")}`,
            `MEASURED: the engine's overall educational estimate is ${overall.toFixed(1)} of 6.`,
            `LEARNER RESPONSE:\n${response.slice(0, 6000)}`,
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
// Entry point
// ---------------------------------------------------------------------------

export async function evaluateWritingResponse(
  task: ToeflEmailTask | ToeflDiscussionTask,
  response: string,
): Promise<WritingEvaluation> {
  const metrics = measureWritingResponse(task, response);

  if (metrics.wordCount < Math.max(20, Math.round(task.wordBand.min * 0.4))) {
    return {
      criteria: [],
      overall: 0,
      overallLabel: "Too short to evaluate",
      metrics,
      strengths: [],
      improvements: [
        `Write at least ${task.wordBand.min} words before the engine can say anything useful — the measured floor is ${Math.max(20, Math.round(task.wordBand.min * 0.4))}.`,
      ],
      disclaimers: TOEFL_WRITING_DISCLAIMERS,
      status: "insufficient",
      aiAvailable: false,
      aiCommentary: null,
    };
  }

  const criteria = [
    taskCriterion(metrics, task),
    organizationCriterion(metrics),
    accuracyCriterion(metrics),
    lexisCriterion(metrics),
  ];
  const overall = clampScore(criteria.reduce((a, c) => a + c.score, 0) / criteria.length);

  const strengths = criteria
    .flatMap((c) => c.feedback.filter((f) => f.kind === "strength").map((f) => `${c.name}: ${f.text}`))
    .slice(0, 5);
  const improvements = criteria
    .flatMap((c) => c.feedback.filter((f) => f.kind === "issue").map((f) => `${c.name}: ${f.text}`))
    .slice(0, 6);

  const ai = await aiWritingCommentary(task, response, overall);

  return {
    criteria,
    overall,
    overallLabel: `Estimated level ${overall.toFixed(1)} of 6 (educational estimate)`,
    metrics,
    strengths,
    improvements,
    disclaimers: TOEFL_WRITING_DISCLAIMERS,
    status: "complete",
    aiAvailable: ai !== null,
    aiCommentary: ai,
  };
}
