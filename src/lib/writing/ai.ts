/**
 * Writing AI coach — the clearly-labeled second feedback layer.
 *
 * A language model reviews the learner's text and returns TEACHING points
 * (issue: original/correction/explanation/concept/example/exercise) and
 * strengths — never a rewritten paragraph. Its output is stored and shown
 * separately from the measured rubric, labeled with a disclaimer, and
 * parsed defensively: any failure degrades silently to measured-only
 * feedback so the studio never breaks.
 */

import ZAI from "z-ai-web-dev-sdk";
import type {
  FreeWritingTask,
  WritingAiFeedback,
  WritingIssue,
} from "@/data/writing/types";
import { AI_WRITING_DISCLAIMER, type WritingDimension } from "@/data/writing/types";

const AI_TIMEOUT_MS = 15_000;

const DIMENSIONS: WritingDimension[] = [
  "grammar",
  "sentence-structure",
  "spelling",
  "punctuation",
  "word-choice",
  "vocabulary",
  "clarity",
  "coherence",
  "organisation",
  "relevance",
];

async function zaiCompletion(system: string, user: string): Promise<string | null> {
  try {
    const zai = await ZAI.create();
    const completion = await Promise.race([
      zai.chat.completions.create({
        messages: [
          { role: "assistant", content: system },
          { role: "user", content: user },
        ],
        thinking: { type: "disabled" },
      }),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("ai-timeout")), AI_TIMEOUT_MS),
      ),
    ]);
    const content = completion.choices[0]?.message?.content;
    return content && content.trim().length > 0 ? content.trim() : null;
  } catch {
    return null;
  }
}

function parseJson(text: string): unknown {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const candidate = fenced ? fenced[1] : text;
  const start = candidate.indexOf("{");
  const end = candidate.lastIndexOf("}");
  if (start === -1 || end <= start) return null;
  try {
    return JSON.parse(candidate.slice(start, end + 1));
  } catch {
    return null;
  }
}

function coerceIssue(raw: unknown): WritingIssue | null {
  if (typeof raw !== "object" || raw === null) return null;
  const r = raw as Record<string, unknown>;
  const original = String(r.original ?? "").trim();
  const correction = String(r.correction ?? "").trim();
  const explanation = String(r.explanation ?? "").trim();
  if (!original || !correction || !explanation) return null;
  const dimension = DIMENSIONS.includes(r.dimension as WritingDimension)
    ? (r.dimension as WritingDimension)
    : "grammar";
  return {
    id: `ai-${Math.random().toString(36).slice(2, 9)}`,
    dimension,
    source: "ai",
    original: original.slice(0, 160),
    correction: correction.slice(0, 400),
    explanation: explanation.slice(0, 400),
    concept: String(r.concept ?? "Writing skill").slice(0, 120),
    example: String(r.example ?? "—").slice(0, 300),
    exercise: String(r.exercise ?? "Practise this point once more.").slice(0, 300),
  };
}

function coerceFeedback(parsed: unknown): WritingAiFeedback | null {
  if (typeof parsed !== "object" || parsed === null) return null;
  const p = parsed as Record<string, unknown>;
  const issues = Array.isArray(p.issues)
    ? p.issues.map(coerceIssue).filter((i): i is WritingIssue => i !== null).slice(0, 6)
    : [];
  const strengths = Array.isArray(p.strengths)
    ? p.strengths.filter((s): s is string => typeof s === "string").slice(0, 4)
    : [];
  const notes = Array.isArray(p.notes)
    ? p.notes.filter((s): s is string => typeof s === "string").slice(0, 4)
    : [];
  if (issues.length === 0 && strengths.length === 0 && notes.length === 0) return null;
  return {
    source: "ai",
    disclaimer: AI_WRITING_DISCLAIMER,
    strengths,
    notes,
    issues,
  };
}

/** Defensive payload parsing, also used by tests. */
export function coercePublic(text: string): WritingAiFeedback | null {
  return coerceFeedback(parseJson(text));
}

/**
 * Ask the AI coach to review a submission. Returns null on ANY failure —
 * the caller proceeds with measured feedback alone. Tests run with
 * NODE_ENV=test and stay fully offline/deterministic (measured-only).
 */
export async function aiWritingFeedback(
  task: FreeWritingTask,
  text: string,
  isRevision: boolean,
): Promise<WritingAiFeedback | null> {
  if (process.env.NODE_ENV === "test") return null;
  const system = [
    "You are an expert English writing teacher reviewing a learner's text.",
    "ABSOLUTE RULES:",
    "1. NEVER rewrite the learner's whole text. Teach with specific, small points.",
    "2. Every issue must contain: original (a SHORT quote from their text), correction, explanation (why), concept (the grammar/writing concept), example (an additional example sentence, not from their text), exercise (one concrete practice task).",
    "3. Maximum 4 issues, only the most instructive ones. Maximum 3 strengths and 2 notes.",
    "4. Judge structure and language, never the writer. No praise inflation: strengths must be specific.",
    "5. Treat regional varieties (British/American/Indian/etc.) as correct; do not 'correct' them.",
    "6. Reply with ONLY a JSON object.",
  ].join("\n");

  const user = [
    `Task: ${task.title}`,
    `Prompt: ${task.prompt}`,
    `Minimum words: ${task.minWords}. Expected paragraphs: ${task.expectedParagraphs?.min ?? "-"}–${task.expectedParagraphs?.max ?? "-"}.`,
    isRevision ? "This is a REVISED submission — acknowledge what improved where you can." : "",
    "",
    "Learner text:",
    text,
    "",
    'JSON shape: {"strengths": ["specific strength"], "notes": ["short coaching note"], "issues": [{"dimension": "one of ' + DIMENSIONS.join("|") + '", "original": "quote", "correction": "fix", "explanation": "why", "concept": "name of the concept", "example": "extra example", "exercise": "practice task"}]}',
  ].join("\n");

  const reply = await zaiCompletion(system, user);
  if (!reply) return null;
  return coerceFeedback(parseJson(reply));
}
