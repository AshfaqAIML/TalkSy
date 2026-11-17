/**
 * Evaluator registry — the rubric knowledge base.
 *
 * Before ANY evaluation runs, the engine must know exactly which exam,
 * section, task and rubric it is judging. This file is that knowledge:
 * one profile per supported evaluation task, each carrying the official
 * criterion names, the score scale, task framing for the AI prompt and
 * the learning-loop tags used to map weaknesses onto existing EnglishPath
 * lessons.
 *
 * Sources for the criterion sets and scale shapes:
 *   - IELTS Writing/Speaking assessment criteria (public band descriptors,
 *     ielts.org) — Task achievement (T1) / Task response (T2),
 *     Coherence & cohesion, Lexical resource, Grammatical range & accuracy;
 *     speaking: Fluency & coherence, Lexical resource, Grammatical range &
 *     accuracy, Pronunciation. Bands 0–9, half steps.
 *   - TOEFL iBT 2026 writing/speaking tasks (ets.org) — Build a Sentence
 *     (exact-marked reconstruction), Write an Email, Academic Discussion,
 *     Listen & Repeat, Take an Interview. Rubric levels 1–5 per task;
 *     the 1–6 section band is NOT promised here (safeguard: no ETS score
 *     predictions).
 */

import type { ScaleInfo } from "./types";
import type { EmailPayload, DiscussionPayload, ListenRepeatPayload, SentenceReconstructionPayload, SpeakingTaskPayload, WritingTaskPayload } from "../types";

// ---------------------------------------------------------------------------
// Keys
// ---------------------------------------------------------------------------

export const EVALUATOR_KEYS = [
  "IELTS_WRITING_ACADEMIC_T1",
  "IELTS_WRITING_ACADEMIC_T2",
  "IELTS_WRITING_GT_T1",
  "IELTS_WRITING_GT_T2",
  "IELTS_SPEAKING",
  "TOEFL_WRITING_SENTENCE",
  "TOEFL_WRITING_EMAIL",
  "TOEFL_WRITING_DISCUSSION",
  "TOEFL_SPEAKING_LISTEN_REPEAT",
  "TOEFL_SPEAKING_INTERVIEW",
] as const;
export type EvaluatorKey = (typeof EVALUATOR_KEYS)[number];

/** Question types that can receive an AI evaluation layer. */
export const EVALUATION_ELIGIBLE_TYPES = [
  "WRITING_TASK",
  "EMAIL_WRITING",
  "DISCUSSION_TASK",
  "SPEAKING_TASK",
  "LISTEN_REPEAT",
  "SENTENCE_RECONSTRUCTION",
] as const;

export function isEvaluationEligibleType(questionType: string): boolean {
  return (EVALUATION_ELIGIBLE_TYPES as readonly string[]).includes(questionType);
}

// ---------------------------------------------------------------------------
// Criteria definitions (official names; tags map to lesson bridge rules)
// ---------------------------------------------------------------------------

export type EvaluatorCriterion = {
  key: string;
  name: string;
  /** What this criterion measures — shown to learners and the AI. */
  description: string;
  /** Anchor descriptors for the AI prompt (high / mid / low). */
  anchors: { high: string; mid: string; low: string };
  /** Learning-loop tags (vocabulary shared with recommend.ts BRIDGE_RULES). */
  tags: string[];
};

const TASK_ACHIEVEMENT_T1: EvaluatorCriterion = {
  key: "task-achievement",
  name: "Task achievement",
  description:
    "Does the report select and present the key features of the visual material, with a clear overview, accurate data and appropriate detail? (Academic Task 1 / General Training letters)",
  anchors: {
    high: "Covers all requirements; presents a clear overview of main trends/differences/stages; key features are selected and highlighted; data is accurate and well-illustrated.",
    mid: "Presents some key features but the overview may be missing or unclear; detail may be inappropriate or inaccurate in places.",
    low: "Details are mechanical or irrelevant; no clear overview; data is frequently inaccurate or omitted.",
  },
  tags: ["task-response", "detail"],
};

const TASK_RESPONSE_T2: EvaluatorCriterion = {
  key: "task-response",
  name: "Task response",
  description:
    "Does the essay fully address every part of the question, present a clear position and develop it with relevant, extended support?",
  anchors: {
    high: "Fully addresses all parts of the task; a clear, well-developed position with relevant, extended and well-supported ideas.",
    mid: "Addresses the task but development is uneven; position is present but conclusions may be unclear or support thin in places.",
    low: "Only partially addresses the task; position unclear or unsupported; content may be thin or irrelevant.",
  },
  tags: ["task-response"],
};

const COHERENCE_COHESION: EvaluatorCriterion = {
  key: "coherence-cohesion",
  name: "Coherence and cohesion",
  description:
    "Is the response organised logically with clear progression, sensible paragraphing and well-used cohesive devices?",
  anchors: {
    high: "Sequences information and ideas logically; manages all aspects of cohesion well; paragraphing is logical and supportive of the argument.",
    mid: "Generally organised with sensible progression, but cohesive devices are sometimes mechanical or misused; paragraphing not always logical.",
    low: "Little organisation; linking devices are rare, wrong or repetitive; the reader struggles to follow.",
  },
  tags: ["coherence", "cohesion", "structure"],
};

const LEXICAL_RESOURCE: EvaluatorCriterion = {
  key: "lexical-resource",
  name: "Lexical resource",
  description:
    "Range of vocabulary, precision of word choice and collocation, and control of spelling and word formation.",
  anchors: {
    high: "Wide, precise, natural vocabulary including less common items and skilful paraphrase; rare slips only.",
    mid: "Adequate range with attempts at less common vocabulary, but mixed success; noticeable repetition or word-choice errors.",
    low: "Very limited vocabulary, heavily repeated; word choice and spelling errors often strain meaning.",
  },
  tags: ["vocabulary", "lexical", "word-choice"],
};

const GRAMMAR_RANGE: EvaluatorCriterion = {
  key: "grammatical-range",
  name: "Grammatical range and accuracy",
  description:
    "Variety of sentence structures (simple to complex) and how frequently errors occur or impede meaning.",
  anchors: {
    high: "Wide range of structures with flexible use; the majority of sentences are error-free.",
    mid: "Mix of simple and complex forms; errors exist but rarely reduce understanding.",
    low: "Very few structures attempted; frequent errors regularly impede meaning.",
  },
  tags: ["grammar", "range", "accuracy", "sentence"],
};

const FLUENCY_COHERENCE: EvaluatorCriterion = {
  key: "fluency-coherence",
  name: "Fluency and coherence",
  description:
    "Willingness to speak at length, pace, self-repetition and self-correction, and how logically ideas connect in speech.",
  anchors: {
    high: "Speaks at length with little effort; ideas flow and connect naturally.",
    mid: "Willing to speak, but repetition, self-correction or slower linking show effort.",
    low: "Frequent long pauses and restarts; ideas connect only in the simplest way.",
  },
  tags: ["fluency", "coherence"],
};

const SPEAKING_LEXICAL: EvaluatorCriterion = {
  ...LEXICAL_RESOURCE,
  description:
    "Range of vocabulary for the topic, paraphrase ability, and control of idiomatic language in speech.",
};

const SPEAKING_PRONUNCIATION: EvaluatorCriterion = {
  key: "pronunciation",
  name: "Pronunciation",
  description:
    "Intelligibility, stress, rhythm and intonation. Accent itself is never an error — only features that make listening hard are noted.",
  anchors: {
    high: "Effortless to understand; intonation and stress are precise and convey meaning.",
    mid: "Generally clear; some sounds or stress patterns need occasional listener effort.",
    low: "Often hard to understand; frequent listener effort needed.",
  },
  tags: ["pronunciation"],
};

const TOEFL_TASK_COMPLETION: EvaluatorCriterion = {
  key: "task-completion",
  name: "Task completion and relevance",
  description: "Are all required parts of the task covered (bullets, question points) and is everything relevant?",
  anchors: {
    high: "Every required element is addressed clearly and fully.",
    mid: "Most elements addressed, but one is thin, vague or partly off-topic.",
    low: "Key elements missing or largely irrelevant.",
  },
  tags: ["task-response"],
};

const TOEFL_ORGANIZATION: EvaluatorCriterion = {
  key: "organization",
  name: "Organisation and clarity",
  description: "Is the response clearly organised and easy to follow — greeting/purpose/body/closing for emails, clear position + support for discussion posts?",
  anchors: {
    high: "Clear, logical structure throughout; the reader never has to re-read.",
    mid: "Recognisable organisation despite some lapses or missing transitions.",
    low: "Disconnected ideas; no apparent organisation.",
  },
  tags: ["coherence", "structure", "organization"],
};

const TOEFL_LANGUAGE_USE: EvaluatorCriterion = {
  key: "language-use",
  name: "Language use (grammar)",
  description: "Grammatical accuracy and variety for the task, including sentence correctness for reconstructed sentences.",
  anchors: {
    high: "Effective, varied structures; occasional minor errors only.",
    mid: "Fair control; errors noticeable but meaning stays clear.",
    low: "Very limited control; errors frequently obscure meaning.",
  },
  tags: ["grammar", "sentence"],
};

const TOEFL_VOCABULARY_TONE: EvaluatorCriterion = {
  key: "vocabulary-tone",
  name: "Vocabulary and tone",
  description: "Word choice, precision and register/tone appropriate to the audience (professor, classmates).",
  anchors: {
    high: "Precise, natural word choice in a consistent, appropriate tone.",
    mid: "Adequate word choice; tone mostly appropriate with slips.",
    low: "Very limited or inappropriate vocabulary/register.",
  },
  tags: ["vocabulary", "word-choice"],
};

const TOEFL_COMPLETENESS: EvaluatorCriterion = {
  key: "completeness",
  name: "Response completeness",
  description: "How much of the required response was actually produced (all words of the target sentence repeated; all parts of the interview answer).",
  anchors: {
    high: "The full required response is present.",
    mid: "Most of the response is present; small parts missing.",
    low: "Large parts of the required response are missing.",
  },
  tags: ["task-response"],
};

const TOEFL_SENTENCE_ACCURACY: EvaluatorCriterion = {
  key: "sentence-accuracy",
  name: "Sentence accuracy",
  description: "Exactness of the rebuilt/repeated sentence against the target (machine-measured word match).",
  anchors: {
    high: "Every target word present in the right form.",
    mid: "Most words present; a few missing or changed.",
    low: "Many words missing, changed or extra.",
  },
  tags: ["sentence", "grammar"],
};

const TOEFL_FLUENCY_PACE: EvaluatorCriterion = {
  key: "fluency-pace",
  name: "Fluency and pace",
  description:
    "Delivery smoothness: pace (measured words per minute when the recording length is known), pausing, restarts and self-correction — judged from effort, never from accent.",
  anchors: {
    high: "Speech flows at a natural pace with only occasional hesitation; pauses serve meaning.",
    mid: "Generally steady, but noticeable pauses, restarts or self-correction slow the delivery.",
    low: "Frequent long pauses or restarts make the delivery effortful to follow.",
  },
  tags: ["fluency", "pronunciation"],
};

// ---------------------------------------------------------------------------
// Scales
// ---------------------------------------------------------------------------

const BAND_SCALE: ScaleInfo = { kind: "BAND", min: 0, max: 9, step: 0.5, unit: "band" };
const TOEFL_LEVEL_SCALE: ScaleInfo = { kind: "TOEFL_LEVEL", min: 1, max: 5, step: 0.5, unit: "task level" };
const ACCURACY_SCALE: ScaleInfo = { kind: "ACCURACY", min: 0, max: 100, step: 1, unit: "% accurate" };

// ---------------------------------------------------------------------------
// Profiles
// ---------------------------------------------------------------------------

export type EvaluatorProfile = {
  key: EvaluatorKey;
  examKey: "IELTS" | "TOEFL_IBT";
  examLabel: string;
  section: "writing" | "speaking";
  /** Short human name, e.g. "IELTS Academic Task 1". */
  taskLabel: string;
  /** What this task is, for the AI prompt. */
  framing: string;
  /** What a strong response does — coaching anchor for the AI prompt. */
  strongResponse: string;
  scale: ScaleInfo;
  criteria: EvaluatorCriterion[];
  /** Expected minimum words (writing) or words spoken (speaking), if any. */
  minWordsDefault: number | null;
  /** ExamRubric taskKey for the full descriptor ladder (optional enrichment). */
  rubricTaskKey: string | null;
};

export const EVALUATOR_PROFILES: Record<EvaluatorKey, EvaluatorProfile> = {
  IELTS_WRITING_ACADEMIC_T1: {
    key: "IELTS_WRITING_ACADEMIC_T1",
    examKey: "IELTS",
    examLabel: "IELTS Academic",
    section: "writing",
    taskLabel: "IELTS Academic Task 1 (report)",
    framing:
      "IELTS Academic Writing Task 1: the learner summarises and reports the key features of visual material (chart, graph, table, process) in their own words. Never opinions — only what the data shows.",
    strongResponse:
      "A strong Task 1 opens by paraphrasing the task, gives a clear overview of the main trend/difference/stage, then selects and illustrates 2–3 key features with accurate data, in 150+ words.",
    scale: BAND_SCALE,
    criteria: [TASK_ACHIEVEMENT_T1, COHERENCE_COHESION, LEXICAL_RESOURCE, GRAMMAR_RANGE],
    minWordsDefault: 150,
    rubricTaskKey: "ielts.writing",
  },
  IELTS_WRITING_ACADEMIC_T2: {
    key: "IELTS_WRITING_ACADEMIC_T2",
    examKey: "IELTS",
    examLabel: "IELTS Academic",
    section: "writing",
    taskLabel: "IELTS Academic Task 2 (essay)",
    framing:
      "IELTS Academic Writing Task 2: a discursive essay responding to a point of view, argument or problem. The learner must give their own opinion and support it.",
    strongResponse:
      "A strong Task 2 addresses every part of the question, states a clear position, and develops body paragraphs with relevant, extended support, in 250+ words.",
    scale: BAND_SCALE,
    criteria: [TASK_RESPONSE_T2, COHERENCE_COHESION, LEXICAL_RESOURCE, GRAMMAR_RANGE],
    minWordsDefault: 250,
    rubricTaskKey: "ielts.writing",
  },
  IELTS_WRITING_GT_T1: {
    key: "IELTS_WRITING_GT_T1",
    examKey: "IELTS",
    examLabel: "IELTS General Training",
    section: "writing",
    taskLabel: "IELTS General Training Task 1 (letter)",
    framing:
      "IELTS General Training Writing Task 1: a letter responding to a given situation, covering three bullet points in a consistent, appropriate tone.",
    strongResponse:
      "A strong GT Task 1 opens with a purpose ('I am writing to…'), covers all three bullet points clearly, keeps a consistent tone (formal/semi-formal/informal) and closes appropriately, in 150+ words.",
    scale: BAND_SCALE,
    criteria: [TASK_ACHIEVEMENT_T1, COHERENCE_COHESION, LEXICAL_RESOURCE, GRAMMAR_RANGE],
    minWordsDefault: 150,
    rubricTaskKey: "ielts.writing",
  },
  IELTS_WRITING_GT_T2: {
    key: "IELTS_WRITING_GT_T2",
    examKey: "IELTS",
    examLabel: "IELTS General Training",
    section: "writing",
    taskLabel: "IELTS General Training Task 2 (essay)",
    framing:
      "IELTS General Training Writing Task 2: a discursive essay (often a problem/solution or advantages/disadvantages type) with the learner's own views.",
    strongResponse:
      "A strong GT Task 2 addresses every part of the question, states a clear position, and develops ideas with relevant support, in 250+ words.",
    scale: BAND_SCALE,
    criteria: [TASK_RESPONSE_T2, COHERENCE_COHESION, LEXICAL_RESOURCE, GRAMMAR_RANGE],
    minWordsDefault: 250,
    rubricTaskKey: "ielts.writing",
  },
  IELTS_SPEAKING: {
    key: "IELTS_SPEAKING",
    examKey: "IELTS",
    examLabel: "IELTS Speaking",
    section: "speaking",
    taskLabel: "IELTS Speaking (interview format)",
    framing:
      "IELTS Speaking (Parts 1–3): a recorded interview. The learner answers questions about familiar topics, speaks at length on a topic card, and discusses abstract ideas.",
    strongResponse:
      "A strong speaking answer extends responses well beyond one sentence, stays relevant, connects ideas naturally, and uses a range of vocabulary and structures.",
    scale: BAND_SCALE,
    criteria: [FLUENCY_COHERENCE, SPEAKING_LEXICAL, GRAMMAR_RANGE, SPEAKING_PRONUNCIATION],
    minWordsDefault: null,
    rubricTaskKey: "ielts.speaking",
  },
  TOEFL_WRITING_SENTENCE: {
    key: "TOEFL_WRITING_SENTENCE",
    examKey: "TOEFL_IBT",
    examLabel: "TOEFL iBT 2026",
    section: "writing",
    taskLabel: "TOEFL Writing — Build a Sentence",
    framing:
      "TOEFL 2026 Build a Sentence: the learner rebuilds a grammatical sentence from scrambled chunks while preserving the original meaning. This item is exact-marked: accuracy is machine-measured, and the evaluation adds grammar and clarity coaching.",
    strongResponse:
      "A strong reconstruction uses all needed chunks exactly once, preserves the original meaning, and produces a fully grammatical sentence.",
    scale: ACCURACY_SCALE,
    criteria: [TOEFL_SENTENCE_ACCURACY, TOEFL_LANGUAGE_USE],
    minWordsDefault: null,
    rubricTaskKey: null,
  },
  TOEFL_WRITING_EMAIL: {
    key: "TOEFL_WRITING_EMAIL",
    examKey: "TOEFL_IBT",
    examLabel: "TOEFL iBT 2026",
    section: "writing",
    taskLabel: "TOEFL Writing — Write an Email",
    framing:
      "TOEFL 2026 Write an Email: the learner writes a short, fast email (about 5 minutes) to a professor or peer, covering three bullet points in an appropriate tone.",
    strongResponse:
      "A strong email opens with a greeting and purpose, covers all three bullets in order, keeps the tone appropriate to the reader, and closes politely — concise, no essay-style introduction.",
    scale: TOEFL_LEVEL_SCALE,
    criteria: [TOEFL_TASK_COMPLETION, TOEFL_ORGANIZATION, TOEFL_LANGUAGE_USE, TOEFL_VOCABULARY_TONE],
    minWordsDefault: 80,
    rubricTaskKey: "toefl.writing",
  },
  TOEFL_WRITING_DISCUSSION: {
    key: "TOEFL_WRITING_DISCUSSION",
    examKey: "TOEFL_IBT",
    examLabel: "TOEFL iBT 2026",
    section: "writing",
    taskLabel: "TOEFL Writing — Academic Discussion",
    framing:
      "TOEFL 2026 Academic Discussion: an online discussion with a professor's prompt and classmate posts; the learner adds their own contribution, engaging with the discussion.",
    strongResponse:
      "A strong contribution states a clear position, engages with at least one classmate's post (agree/extend/challenge respectfully), and gives a relevant reason or example, in about 100 words.",
    scale: TOEFL_LEVEL_SCALE,
    criteria: [TOEFL_TASK_COMPLETION, TOEFL_ORGANIZATION, TOEFL_LANGUAGE_USE, TOEFL_VOCABULARY_TONE],
    minWordsDefault: 100,
    rubricTaskKey: "toefl.writing",
  },
  TOEFL_SPEAKING_LISTEN_REPEAT: {
    key: "TOEFL_SPEAKING_LISTEN_REPEAT",
    examKey: "TOEFL_IBT",
    examLabel: "TOEFL iBT 2026",
    section: "speaking",
    taskLabel: "TOEFL Speaking — Listen and Repeat",
    framing:
      "TOEFL 2026 Listen and Repeat: the learner hears a sentence once and repeats it aloud within a short window. Completeness and accuracy are machine-measured from the transcript; the evaluation adds pronunciation guidance.",
    strongResponse:
      "A strong repetition includes every word of the target sentence, in order, clearly enough for a listener to follow.",
    scale: ACCURACY_SCALE,
    criteria: [TOEFL_COMPLETENESS, TOEFL_SENTENCE_ACCURACY],
    minWordsDefault: null,
    rubricTaskKey: null,
  },
  TOEFL_SPEAKING_INTERVIEW: {
    key: "TOEFL_SPEAKING_INTERVIEW",
    examKey: "TOEFL_IBT",
    examLabel: "TOEFL iBT 2026",
    section: "speaking",
    taskLabel: "TOEFL Speaking — Take an Interview",
    framing:
      "TOEFL 2026 Take an Interview: the learner answers interview questions with short recorded spoken responses (personal experience, opinion, summary, narrative, abstract).",
    strongResponse:
      "A strong interview answer is relevant, complete, fluent and well-organised, with enough language to judge vocabulary and grammar.",
    scale: TOEFL_LEVEL_SCALE,
    criteria: [
      TOEFL_COMPLETENESS,
      { ...TOEFL_ORGANIZATION, name: "Organisation and development" },
      TOEFL_LANGUAGE_USE,
      TOEFL_VOCABULARY_TONE,
      TOEFL_FLUENCY_PACE,
    ],
    minWordsDefault: null,
    rubricTaskKey: "toefl.speaking",
  },
};

// ---------------------------------------------------------------------------
// Task resolution: exam + section + question + payload → evaluator profile
// ---------------------------------------------------------------------------

export type ResolvedTask = {
  profile: EvaluatorProfile;
  /** Concrete task title for this instance, e.g. "Task 1 — pie charts". */
  taskTitle: string;
  /** Task prompt/context text (already assembled from the payload). */
  promptText: string;
  /** The payload itself, for deterministic checks. */
  payload: Record<string, unknown>;
};

function asRecord(payload: unknown): Record<string, unknown> {
  return typeof payload === "object" && payload !== null ? (payload as Record<string, unknown>) : {};
}

/**
 * Resolve which evaluator (if any) applies to a question. Returns null for
 * question types this system does not evaluate (objective reading/listening
 * items, dictation) — the caller must not invent feedback for them.
 */
export function resolveEvaluator(input: {
  examKey: string;
  variant: string;
  section: string;
  questionType: string;
  payload: unknown;
  stem?: string | null;
}): ResolvedTask | null {
  const payload = asRecord(input.payload);
  const isIELTS = input.examKey === "IELTS";
  const isTOEFL = input.examKey === "TOEFL_IBT";

  const part = typeof payload.part === "string" ? payload.part : "";

  if (isIELTS && input.section === "writing") {
    if (input.questionType === "EMAIL_WRITING") {
      // IELTS letters are authored with the email payload (situation + bullets + tone).
      const p = payload as unknown as EmailPayload;
      return {
        profile: EVALUATOR_PROFILES.IELTS_WRITING_GT_T1,
        taskTitle: part || "General Training Task 1 — letter",
        promptText: [
          `Situation: ${p.situation ?? ""}`,
          `Cover ALL three bullet points: ${(p.bullets ?? []).map((b) => `• ${b}`).join(" ")}`,
          `Tone: ${p.tone ?? "semi-formal"}`,
        ].join("\n"),
        payload,
      };
    }
    if (input.questionType === "WRITING_TASK") {
      const isTask2 = /^task\s*2/i.test(part) || /task\s*2/i.test(input.stem ?? "");
      const p = payload as unknown as WritingTaskPayload;
      let profile: EvaluatorProfile;
      if (isTask2) {
        profile = input.variant === "GENERAL_TRAINING"
          ? EVALUATOR_PROFILES.IELTS_WRITING_GT_T2
          : EVALUATOR_PROFILES.IELTS_WRITING_ACADEMIC_T2;
      } else {
        profile = input.variant === "GENERAL_TRAINING"
          ? EVALUATOR_PROFILES.IELTS_WRITING_GT_T1
          : EVALUATOR_PROFILES.IELTS_WRITING_ACADEMIC_T1;
      }
      return {
        profile,
        taskTitle: part || (isTask2 ? "Task 2 — essay" : "Task 1 — report"),
        promptText: [p.prompt ?? "", p.supporting ? `Supporting material: ${p.supporting}` : ""]
          .filter(Boolean)
          .join("\n"),
        payload,
      };
    }
    return null;
  }

  if (isIELTS && input.section === "speaking" && input.questionType === "SPEAKING_TASK") {
    const p = payload as unknown as SpeakingTaskPayload;
    return {
      profile: EVALUATOR_PROFILES.IELTS_SPEAKING,
      taskTitle: part || "Speaking task",
      promptText: [
        p.prompt ?? "",
        `Preparation: ${p.prepSec ?? 30}s — speak for about ${p.speakSec ?? 60}s.`,
      ].join("\n"),
      payload,
    };
  }

  if (isTOEFL && input.section === "writing") {
    if (input.questionType === "SENTENCE_RECONSTRUCTION") {
      const p = payload as unknown as SentenceReconstructionPayload;
      return {
        profile: EVALUATOR_PROFILES.TOEFL_WRITING_SENTENCE,
        taskTitle: part || "Build a Sentence",
        promptText: [p.cue ?? "", `Available chunks: ${(p.scrambled ?? []).join(" | ")}`]
          .filter(Boolean)
          .join("\n"),
        payload,
      };
    }
    if (input.questionType === "EMAIL_WRITING") {
      const p = payload as unknown as EmailPayload;
      return {
        profile: EVALUATOR_PROFILES.TOEFL_WRITING_EMAIL,
        taskTitle: part || "Write an Email",
        promptText: [
          `Situation: ${p.situation ?? ""}`,
          `Cover ALL three bullet points: ${(p.bullets ?? []).map((b) => `• ${b}`).join(" ")}`,
          `Tone: ${p.tone ?? "semi-formal"}`,
        ].join("\n"),
        payload,
      };
    }
    if (input.questionType === "DISCUSSION_TASK") {
      const p = payload as unknown as DiscussionPayload;
      return {
        profile: EVALUATOR_PROFILES.TOEFL_WRITING_DISCUSSION,
        taskTitle: part || "Academic Discussion",
        promptText: [
          `Professor's prompt: ${p.prompt ?? ""}`,
          `Classmate posts: ${(p.posts ?? []).map((post) => `${post.author}: ${post.text}`).join(" / ")}`,
        ].join("\n"),
        payload,
      };
    }
    return null;
  }

  if (isTOEFL && input.section === "speaking") {
    if (input.questionType === "LISTEN_REPEAT") {
      const p = payload as unknown as ListenRepeatPayload;
      return {
        profile: EVALUATOR_PROFILES.TOEFL_SPEAKING_LISTEN_REPEAT,
        taskTitle: part || "Listen and Repeat",
        promptText: `Target sentence to repeat: "${p.sentence ?? ""}" (recording window ${p.windowSec ?? 10}s).`,
        payload,
      };
    }
    if (input.questionType === "SPEAKING_TASK") {
      const p = payload as unknown as SpeakingTaskPayload;
      return {
        profile: EVALUATOR_PROFILES.TOEFL_SPEAKING_INTERVIEW,
        taskTitle: part || "Interview question",
        promptText: [
          p.prompt ?? "",
          `Preparation: ${p.prepSec ?? 15}s — speak for about ${p.speakSec ?? 45}s.`,
        ].join("\n"),
        payload,
      };
    }
  }

  return null;
}

/** Human label for a stored evaluator key (history views). */
export function evaluatorLabel(key: string): string {
  const profile = (EVALUATOR_PROFILES as Record<string, EvaluatorProfile | undefined>)[key];
  return profile ? profile.taskLabel : key;
}
