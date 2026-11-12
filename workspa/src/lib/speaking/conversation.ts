/**
 * Conversation simulator engine.
 *
 * The partner role is played by a language model through the z-ai SDK
 * ("ai" engine). Every AI call is wrapped with a timeout and a graceful
 * fallback to the authored per-scenario script ("scripted" engine), so a
 * network or API failure never breaks a conversation mid-flow — the learner
 * simply continues with the scripted partner.
 *
 * In-conversation the partner NEVER corrects the learner (by design: no
 * interruptions). All coaching happens in the end-of-conversation report:
 * a measured section (deterministic, from the transcripts) and an AI coach
 * section (clearly labeled, parsed defensively, with a deterministic
 * fallback report when the model is unreachable or returns malformed JSON).
 */

import ZAI from "z-ai-web-dev-sdk";
import type {
  ConversationCoachFeedback,
  ConversationLevel,
  ConversationMeasured,
  ConversationScenario,
  ScenarioLevelSpec,
  AiCoachSuggestions,
} from "@/data/speaking/types";
import { measureTranscript } from "./measure";
import { grammarForSpeech } from "./feedback";

export type ConversationTurn = { role: "partner" | "learner"; text: string };

const AI_TIMEOUT_MS = 30_000;

// ---------------------------------------------------------------------------
// AI partner turn
// ---------------------------------------------------------------------------

function levelBriefing(level: ConversationLevel): string {
  switch (level) {
    case "beginner":
      return "The learner is a beginner (Pre-A1/A1). Keep your own English very simple and slow.";
    case "intermediate":
      return "The learner is intermediate (A2/B1). Use everyday vocabulary and a natural but moderate pace.";
    case "advanced":
      return "The learner is advanced (B2/C1). Speak naturally and quickly, with idioms where fitting.";
  }
}

export function buildPartnerSystemPrompt(
  scenario: ConversationScenario,
  spec: ScenarioLevelSpec,
): string {
  return [
    `You are role-playing as ${scenario.partner.name}, ${scenario.partner.role}.`,
    `Setting: ${scenario.setting}`,
    `Your goal is to play this role realistically while the learner practises English.`,
    levelBriefing(spec.level),
    spec.partnerInstructions,
    "STRICT RULES:",
    "1. Stay in character at all times. Never mention being an AI or a language exercise.",
    "2. NEVER correct the learner's English or comment on their mistakes — that happens in a separate report after the conversation. Just respond naturally to what they mean.",
    "3. Keep each reply to 1–3 sentences (4 max at beginner level: shorter, simpler sentences).",
    "4. Ask exactly one question or prompt per reply so the learner has something to respond to.",
    "5. If the learner writes something hard to understand, gently ask them to clarify — in character.",
    `6. Aim for about ${spec.turnsTarget} exchanges. When the conversation naturally completes, close it warmly.`,
  ].join("\n");
}

async function zaiCompletion(system: string, messages: { role: "user" | "assistant"; content: string }[]): Promise<string | null> {
  try {
    const zai = await ZAI.create();
    const completion = await Promise.race([
      zai.chat.completions.create({
        // The SDK expects the system prompt in an 'assistant' message first.
        messages: [
          { role: "assistant", content: system },
          ...messages.slice(-16),
        ],
        thinking: { type: "disabled" },
      }),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("ai-timeout")), AI_TIMEOUT_MS),
      ),
    ]);
    const content = completion.choices[0]?.message?.content;
    if (!content || content.trim().length === 0) return null;
    return content.trim();
  } catch {
    return null;
  }
}

/** Ask the AI partner for the next line. Returns null on any failure. */
export async function aiPartnerReply(
  scenario: ConversationScenario,
  spec: ScenarioLevelSpec,
  turns: ConversationTurn[],
): Promise<string | null> {
  const system = buildPartnerSystemPrompt(scenario, spec);
  const messages = turns.map((turn) => ({
    role: turn.role === "partner" ? ("assistant" as const) : ("user" as const),
    content: turn.text,
  }));
  const reply = await zaiCompletion(system, messages);
  if (!reply) return null;
  // Trim any accidental meta-commentary the model might add.
  const cleaned = reply
    .split("\n")
    .filter((line) => !/^\s*\(|role|scene|director/i.test(line) || line.length > 400)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned.length > 0 ? cleaned.slice(0, 600) : null;
}

// ---------------------------------------------------------------------------
// Scripted fallback partner
// ---------------------------------------------------------------------------

function acknowledgementFor(spec: ScenarioLevelSpec, learnerText: string): string {
  const list = spec.acknowledgments;
  if (list.length === 0) return "";
  // Deterministic pick seeded by the learner's words.
  let hash = 0;
  for (const char of learnerText.toLowerCase()) {
    hash = (hash * 31 + char.charCodeAt(0)) % 997;
  }
  return list[hash % list.length];
}

/**
 * Deterministic scripted partner. Turn index = how many learner turns have
 * happened; the authored list carries the conversation; short learner
 * replies get an extra acknowledgment so the flow still feels alive.
 */
export function scriptedPartnerReply(
  spec: ScenarioLevelSpec,
  learnerTurnCount: number,
  learnerText: string,
): string {
  const last = spec.fallbackTurns[spec.fallbackTurns.length - 1] ?? "Thank you for chatting with me!";
  const line = spec.fallbackTurns[Math.min(learnerTurnCount - 1, spec.fallbackTurns.length - 1)] ?? last;
  const wordCount = learnerText.split(/\s+/).filter(Boolean).length;
  const ack = wordCount > 0 && wordCount < 4 ? `${acknowledgementFor(spec, learnerText)} ` : "";
  return `${ack}${line}`;
}

export function scriptedClosing(spec: ScenarioLevelSpec): string {
  return spec.fallbackTurns[spec.fallbackTurns.length - 1] ?? "Thank you for the conversation!";
}

// ---------------------------------------------------------------------------
// Measured conversation statistics
// ---------------------------------------------------------------------------

export function measureConversation(
  turns: ConversationTurn[],
  scenario: ConversationScenario,
  durationMs: number,
): ConversationMeasured {
  const learnerTurns = turns.filter((t) => t.role === "learner");
  const fullText = learnerTurns.map((t) => t.text).join(" ");
  const metrics = measureTranscript(fullText);
  const grammar = grammarForSpeech(fullText, metrics.wordCount);

  const lower = ` ${fullText.toLowerCase()} `;
  const goalHit = scenario.goalKeywords.filter((keyword) =>
    lower.includes(keyword.toLowerCase()),
  );

  const questionsAsked = learnerTurns.filter((t) =>
    /\?|\b(what|how|why|when|where|who|which|do you|did you|are you|can you|could you|would you|is it|does)\b/i.test(
      t.text,
    ),
  ).length;

  const goalCoverage =
    scenario.goalKeywords.length === 0
      ? 0
      : Math.round((goalHit.length / scenario.goalKeywords.length) * 100) / 100;

  // Score: goal coverage is the heart; questions and volume support it.
  const turnScore = Math.min(1, learnerTurns.length / 4);
  const score = Math.round(
    (goalCoverage * 55 + turnScore * 25 + Math.min(1, questionsAsked / 2) * 20) * 100,
  ) / 100;

  return {
    turns: turns.length,
    learnerTurns: learnerTurns.length,
    wordCount: metrics.wordCount,
    avgWordsPerTurn:
      learnerTurns.length === 0
        ? 0
        : Math.round((metrics.wordCount / learnerTurns.length) * 10) / 10,
    durationMs,
    fillerCount: metrics.fillerCount,
    grammarIssues: grammar.issues.length,
    questionsAsked,
    goalKeywordsHit: goalHit,
    goalCoverage,
    score: Math.min(1, score),
  };
}

// ---------------------------------------------------------------------------
// End-of-conversation feedback
// ---------------------------------------------------------------------------

function parseJsonBlock(text: string): unknown {
  // Models sometimes wrap JSON in fences or prose — extract the first {...} block.
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

function coerceFeedback(parsed: unknown): ConversationCoachFeedback | null {
  if (typeof parsed !== "object" || parsed === null) return null;
  const p = parsed as Record<string, unknown>;
  if (!Array.isArray(p.strongPoints) || p.strongPoints.length === 0) return null;
  const strings = (value: unknown): string[] =>
    Array.isArray(value) ? value.filter((x): x is string => typeof x === "string") : [];
  return {
    strongPoints: strings(p.strongPoints).slice(0, 5),
    mistakes: Array.isArray(p.mistakes)
      ? p.mistakes
          .filter((m): m is Record<string, unknown> => typeof m === "object" && m !== null)
          .map((m) => ({
            said: String(m.said ?? ""),
            correction: String(m.correction ?? ""),
            note: String(m.note ?? ""),
          }))
          .filter((m) => m.said && m.correction)
          .slice(0, 5)
      : [],
    betterAlternatives: Array.isArray(p.betterAlternatives)
      ? p.betterAlternatives
          .filter((m): m is Record<string, unknown> => typeof m === "object" && m !== null)
          .map((m) => ({ instead: String(m.instead ?? ""), say: String(m.say ?? "") }))
          .filter((m) => m.instead && m.say)
          .slice(0, 5)
      : [],
    newVocabulary: Array.isArray(p.newVocabulary)
      ? p.newVocabulary
          .filter((m): m is Record<string, unknown> => typeof m === "object" && m !== null)
          .map((m) => ({
            word: String(m.word ?? ""),
            meaning: String(m.meaning ?? ""),
            example: String(m.example ?? ""),
          }))
          .filter((m) => m.word)
          .slice(0, 6)
      : [],
    revisionFocus: strings(p.revisionFocus).slice(0, 4),
    followUpTask: typeof p.followUpTask === "string" ? p.followUpTask : "",
  };
}

export function buildFeedbackPrompt(
  scenario: ConversationScenario,
  spec: ScenarioLevelSpec,
  turns: ConversationTurn[],
): { system: string; user: string } {
  const transcript = turns
    .map((t) => `${t.role === "partner" ? scenario.partner.name : "Learner"}: ${t.text}`)
    .join("\n");
  return {
    system:
      "You are an expert spoken-English coach reviewing a role-play conversation transcript. You are honest but encouraging. You never comment on pronunciation at phoneme level (only the transcript is available) and you never treat a regional accent as an error. Reply with ONLY a JSON object.",
    user: [
      `Scenario: ${scenario.title} (${scenario.learnerGoal})`,
      `Learner level: ${spec.level}.`,
      "",
      "Transcript:",
      transcript,
      "",
      'Reply with this exact JSON shape (no extra text):',
      `{"strongPoints": ["2-4 specific things the learner did well"],
"mistakes": [{"said": "the learner's exact words", "correction": "corrected version", "note": "why"}],
"betterAlternatives": [{"instead": "what the learner said or lacked", "say": "a more natural expression"}],
"newVocabulary": [{"word": "useful word or phrase from this scenario", "meaning": "short meaning", "example": "example sentence"}],
"revisionFocus": ["1-3 concrete things to practise next"],
"followUpTask": "one concrete practice task for tomorrow, 1-2 sentences"}`,
    ].join("\n"),
  };
}

/** AI coach report; null on any failure (caller falls back to deterministic). */
export async function aiConversationFeedback(
  scenario: ConversationScenario,
  spec: ScenarioLevelSpec,
  turns: ConversationTurn[],
): Promise<ConversationCoachFeedback | null> {
  const { system, user } = buildFeedbackPrompt(scenario, spec, turns);
  const reply = await zaiCompletion(system, [{ role: "user", content: user }]);
  if (!reply) return null;
  return coerceFeedback(parseJsonBlock(reply));
}

/** Parse a coach-report JSON payload defensively (also used by tests). */
export function coercePublic(text: string): ConversationCoachFeedback | null {
  return coerceFeedback(parseJsonBlock(text));
}

/** Deterministic report from measured data (used when AI is unavailable). */
export function fallbackConversationFeedback(
  scenario: ConversationScenario,
  spec: ScenarioLevelSpec,
  turns: ConversationTurn[],
  measured: ConversationMeasured,
): ConversationCoachFeedback {
  const strongPoints: string[] = [];
  if (measured.learnerTurns >= spec.turnsTarget) {
    strongPoints.push(`You kept the conversation going for ${measured.learnerTurns} turns — great stamina.`);
  } else if (measured.learnerTurns >= 3) {
    strongPoints.push(`You completed ${measured.learnerTurns} exchanges without giving up.`);
  }
  if (measured.questionsAsked > 0) {
    strongPoints.push(`You asked ${measured.questionsAsked} question${measured.questionsAsked === 1 ? "" : "s"} — questions keep conversations alive.`);
  }
  if (measured.goalCoverage >= 0.6) {
    strongPoints.push("You covered most of the scenario goal.");
  }
  if (measured.avgWordsPerTurn >= 12) {
    strongPoints.push(`Your answers averaged ${measured.avgWordsPerTurn} words — full, developed turns.`);
  }
  if (strongPoints.length === 0) {
    strongPoints.push("You showed up and spoke — that is how speaking improves.");
  }

  const learnerText = turns.filter((t) => t.role === "learner").map((t) => t.text).join(" ");
  const grammar = grammarForSpeech(learnerText, measured.wordCount);
  const mistakes = grammar.issues.map((issue) => ({
    said: issue.original,
    correction: issue.corrected,
    note: issue.explanation,
  }));

  const unusedPhrases = spec.suggestedPhrases.filter(
    (phrase) => !learnerText.toLowerCase().includes(phrase.toLowerCase().replace(/[.…]/g, "").split(" ")[0]),
  );
  const betterAlternatives = unusedPhrases.slice(0, 3).map((phrase) => ({
    instead: "a phrase you did not use",
    say: phrase,
  }));

  const missedGoals = scenario.goalKeywords.filter(
    (keyword) => !measured.goalKeywordsHit.includes(keyword),
  );
  const revisionFocus: string[] = [];
  if (missedGoals.length > 0) {
    revisionFocus.push(`Aim to cover these parts of the goal next time: ${missedGoals.slice(0, 4).join(", ")}.`);
  }
  if (measured.fillerCount > 4) {
    revisionFocus.push("Practise pausing silently instead of using fillers (um, uh).");
  }
  if (measured.questionsAsked === 0) {
    revisionFocus.push("Ask at least one question back — conversations are two-way.");
  }
  if (revisionFocus.length === 0) {
    revisionFocus.push("Try the next difficulty level of this scenario.");
  }

  const nextLevel: Record<ConversationLevel, string> = {
    beginner: "intermediate",
    intermediate: "advanced",
    advanced: "the same scenario, but leading the conversation yourself",
  };

  return {
    strongPoints: strongPoints.slice(0, 4),
    mistakes,
    betterAlternatives,
    newVocabulary: [],
    revisionFocus: revisionFocus.slice(0, 3),
    followUpTask: `Redo "${scenario.title}" tomorrow${spec.level !== "advanced" ? ` at ${nextLevel[spec.level]} level` : ""}, aiming to use one of the suggested phrases and ask at least two questions.`,
  };
}

// ---------------------------------------------------------------------------
// AI coach suggestions for single speaking attempts
// ---------------------------------------------------------------------------

export async function aiAttemptSuggestions(
  prompt: string,
  targetBrief: string,
  transcript: string,
): Promise<AiCoachSuggestions | null> {
  const system = [
    "You are a spoken-English coach. You see ONE task prompt and ONE learner transcript.",
    "Rules: suggest better NATURAL expressions; give at most 4 notes; never claim to analyse pronunciation at phoneme level (you only see text); never treat a regional accent as an error; reply with ONLY a JSON object.",
  ].join(" ");
  const user = [
    `Task: ${prompt}`,
    targetBrief,
    `Learner transcript: "${transcript}"`,
    "",
    'JSON shape: {"betterExpressions": [{"instead": "learner phrasing (or empty for a gap)", "say": "more natural version"}], "notes": ["short coach notes"]}',
  ].join("\n");

  const reply = await zaiCompletion(system, [{ role: "user", content: user }]);
  if (!reply) return null;
  const parsed = parseJsonBlock(reply);
  if (typeof parsed !== "object" || parsed === null) return null;
  const p = parsed as Record<string, unknown>;
  const betterExpressions = Array.isArray(p.betterExpressions)
    ? p.betterExpressions
        .filter((m): m is Record<string, unknown> => typeof m === "object" && m !== null)
        .map((m) => ({ instead: String(m.instead ?? ""), say: String(m.say ?? "") }))
        .filter((m) => m.say)
        .slice(0, 4)
    : [];
  const notes = Array.isArray(p.notes)
    ? p.notes.filter((n): n is string => typeof n === "string").slice(0, 4)
    : [];
  if (betterExpressions.length === 0 && notes.length === 0) return null;
  return {
    source: "ai",
    disclaimer:
      "Generated by an AI coach from your transcript. Ideas to consider, not measured results.",
    betterExpressions,
    notes,
  };
}
