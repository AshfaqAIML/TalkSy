/**
 * TALK SY Original Examination Question Bank — the unified, searchable
 * registry across both examinations (PROMPT 54).
 *
 * One safe public record for every practice item in the eight content
 * banks:
 *
 *   IELTS Listening  100   TOEFL Reading  100
 *   IELTS Reading    100   TOEFL Listening 100
 *   IELTS Writing    100   TOEFL Writing  200
 *   IELTS Speaking   150   TOEFL Speaking 100
 *                      — 950 items in total —
 *
 * The adapters read each masterclass bank's own richly-validated content
 * and project it onto the fifteen mandated fields, resolving the unified
 * topic domain from the item's explicit field first and the curated
 * legacy maps second. Nothing answer-side (keys, lures, models, keyword
 * lists, evidence) ever enters this projection — the playable content
 * stays in its owning bank behind the established safe projections.
 *
 * Writing and Speaking items carry their scoring-rubric criteria and a
 * reference-example marker instead of an answer key, exactly as PROMPT 54
 * requires: they are never treated as ordinary multiple-choice questions.
 *
 * validateUnifiedBank is the machine QC gate: uniqueness, field
 * completeness, the twelve-domain variety contract, the per-examination
 * size targets and the writing/speaking rubric contract.
 */

import { LISTENING_BANK, QUESTION_TYPE_LABELS as LISTENING_TYPE_LABELS } from "../ielts/listening-bank";
import type { BankExercise, BankQuestion } from "../ielts/listening-bank/types";
import {
  READING_BANK,
  countGroupItems,
} from "../ielts/reading-bank";
import { READING_QUESTION_TYPE_LABELS } from "../ielts/reading-bank/types";
import { WRITING_BANK, writingTaskBySlug } from "../ielts/writing-bank";
import {
  WRITING_FAMILY_LABELS,
  writingCriteriaFor,
} from "../ielts/writing-bank/types";
import {
  SPEAKING_BANK,
  SPEAKING_PART1_SETS,
  SPEAKING_CUE_CARDS,
  SPEAKING_PRACTICE_CUE_CARDS,
  SPEAKING_PART3_SETS,
  speakingItemPart,
} from "../ielts/speaking-bank";
import {
  SPEAKING_PART1_TOPIC_LABELS,
  SPEAKING_CUE_FAMILY_LABELS,
  SPEAKING_SKILL_LABELS,
  SPEAKING_CRITERIA,
} from "../ielts/speaking-bank/types";
import { TOEFL_READING_BANK } from "../toefl/reading-bank";
import { TOEFL_READING_TASK_LABELS } from "../toefl/reading-bank/types";
import { TOEFL_LISTENING_BANK } from "../toefl/listening-bank";
import { TOEFL_LISTENING_TASK_LABELS } from "../toefl/listening-bank/types";
import { TOEFL_WRITING_BANK } from "../toefl/writing-bank";
import {
  TOEFL_WRITING_TASK_LABELS,
  TOEFL_SENTENCE_FOCUS_LABELS,
  TOEFL_EMAIL_PURPOSE_LABELS,
} from "../toefl/writing-bank/types";
import { TOEFL_SPEAKING_BANK } from "../toefl/speaking-bank";
import {
  TOEFL_SPEAKING_TASK_LABELS,
  TOEFL_INTERVIEW_CRITERIA,
} from "../toefl/speaking-bank/types";
import { LIBRARY_SKILL_LABELS } from "../toefl/library-skills";
import type { ToeflReadingExercise } from "../toefl/reading-bank/types";
import type { ToeflListeningExercise } from "../toefl/listening-bank/types";
import type { ToeflWritingExercise } from "../toefl/writing-bank/types";
import type { ToeflSpeakingExercise } from "../toefl/speaking-bank/types";
import { BANK_TOPIC_LABELS, type BankTopicDomain } from "./topics";
import {
  IELTS_LISTENING_TOPICS,
  IELTS_READING_TOPICS,
  IELTS_WRITING_TOPICS,
  SPEAKING_PART1_TOPIC_DOMAINS,
  SPEAKING_CUE_FAMILY_DOMAINS,
  IELTS_SPEAKING_PART3_TOPICS,
  classifyToeflTopic,
} from "./topic-map";
import type {
  AnswerModel,
  QuestionBankFacets,
  QuestionBankFilters,
  QuestionBankResult,
  UnifiedBankItem,
  UnifiedDifficulty,
  UnifiedSection,
} from "./types";
import { VERSION_LABELS } from "./types";

export * from "./types";
export * from "./topics";

// ---------------------------------------------------------------------------
// Item-count helpers
// ---------------------------------------------------------------------------

function listeningItemCount(q: BankQuestion): number {
  switch (q.type) {
    case "mcq-single":
    case "mcq-multi":
      return 1;
    case "matching":
      return q.items.length;
    case "map":
      return q.correct.length;
    case "short-answer":
      return q.questions.length;
    default:
      return q.blanks.length;
  }
}

// ---------------------------------------------------------------------------
// IELTS adapters
// ---------------------------------------------------------------------------

function ieltsListeningItems(): UnifiedBankItem[] {
  return LISTENING_BANK.map((ex: BankExercise): UnifiedBankItem => {
    const typeKeys: string[] = [];
    const typeLabels: string[] = [];
    const skills = new Set<string>();
    let itemCount = 0;
    for (const q of ex.questions) {
      if (!typeKeys.includes(q.type)) {
        typeKeys.push(q.type);
        typeLabels.push(LISTENING_TYPE_LABELS[q.type]);
      }
      itemCount += listeningItemCount(q);
      for (const s of q.meta.skills) skills.add(s);
    }
    const context = ex.part <= 2 ? "social context" : "academic context";
    return {
      id: ex.slug,
      exam: "ielts",
      version: "common",
      section: "listening",
      questionType: typeLabels.join(" + "),
      questionTypeKey: typeKeys.join("+"),
      difficulty: ex.difficulty,
      topic: ex.topic ?? IELTS_LISTENING_TOPICS[ex.slug] ?? "everyday",
      topicDetail: `Part ${ex.part} recording`,
      instructions: ex.questions[0]?.instruction ?? ex.intro,
      summary: `A Part ${ex.part} ${context} recording — ${ex.title.toLowerCase()} — with ${itemCount} questions across ${typeLabels.join(" and ").toLowerCase()}.`,
      itemCount,
      answerModel: "keyed",
      hasExplanation: true,
      skills: [...skills],
      estimatedMinutes: ex.estimatedMinutes,
      reviewStatus: "ai-reviewed",
      href: `#/exams/listening/practice/${ex.slug}`,
      source: ex.source,
    };
  });
}

function ieltsReadingItems(): UnifiedBankItem[] {
  return READING_BANK.map((ex): UnifiedBankItem => {
    const typeKeys: string[] = [];
    const typeLabels: string[] = [];
    const skills = new Set<string>();
    for (const q of ex.questions) {
      if (!typeKeys.includes(q.type)) {
        typeKeys.push(q.type);
        typeLabels.push(READING_QUESTION_TYPE_LABELS[q.type]);
      }
      const collect = (meta: { skills: string[] } | undefined) => {
        if (meta) for (const s of meta.skills) skills.add(s);
      };
      if ("items" in q && q.items) for (const it of q.items) collect(it.meta as { skills: string[] });
      if ("statements" in q && q.statements) for (const st of q.statements) collect(st.meta as { skills: string[] });
      if ("blanks" in q && q.blanks) for (const b of q.blanks) collect(b.meta as { skills: string[] });
      if ("meta" in q) collect((q as { meta?: { skills: string[] } }).meta);
    }
    const itemCount = ex.questions.reduce(countGroupItems, 0);
    return {
      id: ex.slug,
      exam: "ielts",
      version: ex.variant === "gt" ? "general-training" : "academic",
      section: "reading",
      questionType: typeLabels.join(" + "),
      questionTypeKey: typeKeys.join("+"),
      difficulty: ex.difficulty,
      topic: ex.topic ?? IELTS_READING_TOPICS[ex.slug] ?? "everyday",
      topicDetail: ex.subject,
      instructions: ex.intro,
      summary: ex.objective,
      itemCount,
      answerModel: "keyed",
      hasExplanation: true,
      skills: [...skills],
      estimatedMinutes: ex.estimatedMinutes,
      reviewStatus: "ai-reviewed",
      href: `#/exams/reading/library/${ex.slug}`,
      source: ex.source,
    };
  });
}

function ieltsWritingItems(): UnifiedBankItem[] {
  return WRITING_BANK.map((task): UnifiedBankItem => {
    const familyLabel = WRITING_FAMILY_LABELS[task.family] ?? task.family;
    const criteria = writingCriteriaFor(task);
    return {
      id: task.slug,
      exam: "ielts",
      version: task.channel === "gt" ? "general-training" : "academic",
      section: "writing",
      questionType: familyLabel,
      questionTypeKey: task.family,
      difficulty: task.difficulty,
      topic: task.topic ?? IELTS_WRITING_TOPICS[task.slug] ?? "society",
      topicDetail: `${familyLabel}${task.register ? ` (${task.register})` : ""}`,
      instructions: task.prompt,
      summary: `A ${familyLabel.toLowerCase()} assignment — at least ${task.wordMinimum} words in ${task.estimatedMinutes} minutes.`,
      itemCount: 1,
      answerModel: "rubric",
      hasExplanation: true,
      skills: criteria.map((c) => c.name),
      estimatedMinutes: task.estimatedMinutes,
      reviewStatus: "ai-reviewed",
      rubricCriteria: criteria.map((c) => c.name),
      hasReferenceExample: true,
      href: `#/exams/writing/studio/${task.slug}`,
      source: task.source,
    };
  });
}

function ieltsSpeakingItems(): UnifiedBankItem[] {
  const out: UnifiedBankItem[] = [];
  for (const item of SPEAKING_BANK) {
    const part = speakingItemPart(item);
    const base = {
      exam: "ielts" as const,
      version: "common" as const,
      section: "speaking" as const,
      difficulty: item.difficulty,
      estimatedMinutes:
        item.kind === "cue-card" || item.kind === "practice-cue-card"
          ? 3
          : part === 1
            ? 4
            : 5,
      reviewStatus: "ai-reviewed" as const,
      source: item.source,
    };
    if (item.kind === "part1") {
      const domain =
        item.domain ?? SPEAKING_PART1_TOPIC_DOMAINS[item.topic] ?? "everyday";
      out.push({
        ...base,
        id: item.slug,
        questionType: "Part 1 interview",
        questionTypeKey: "part1-interview",
        topic: domain,
        topicDetail: SPEAKING_PART1_TOPIC_LABELS[item.topic],
        instructions: item.framing,
        summary: `A Part 1 interview round on ${SPEAKING_PART1_TOPIC_LABELS[item.topic].toLowerCase()} — ${item.questions.length} examiner questions with guidance and model answers.`,
        itemCount: item.questions.length,
        answerModel: "rubric",
        hasExplanation: true,
        skills: [SPEAKING_SKILL_LABELS[item.skill]],
        rubricCriteria: SPEAKING_CRITERIA.map((c) => c.name),
        hasReferenceExample: true,
        href: `#/exams/speaking/practice/${item.slug}`,
      });
    } else if (item.kind === "cue-card") {
      out.push({
        ...base,
        id: item.slug,
        questionType: "Part 2 cue card",
        questionTypeKey: "part2-cue-card",
        topic: item.domain ?? SPEAKING_CUE_FAMILY_DOMAINS[item.family] ?? "everyday",
        topicDetail: SPEAKING_CUE_FAMILY_LABELS[item.family],
        instructions: item.task,
        summary: `A Part 2 cue card (${SPEAKING_CUE_FAMILY_LABELS[item.family].toLowerCase()}) — one minute to prepare, up to two to speak, with a full teaching payload.`,
        itemCount: 1,
        answerModel: "rubric",
        hasExplanation: true,
        skills: [SPEAKING_SKILL_LABELS[item.skill]],
        rubricCriteria: SPEAKING_CRITERIA.map((c) => c.name),
        hasReferenceExample: true,
        href: `#/exams/speaking/practice/${item.slug}`,
      });
    } else if (item.kind === "practice-cue-card") {
      out.push({
        ...base,
        id: item.slug,
        questionType: "Part 2 cue card (unseen)",
        questionTypeKey: "part2-cue-card-practice",
        topic: item.domain ?? SPEAKING_CUE_FAMILY_DOMAINS[item.family] ?? "everyday",
        topicDetail: SPEAKING_CUE_FAMILY_LABELS[item.family],
        instructions: item.task,
        summary: `An unseen Part 2 cue card (${SPEAKING_CUE_FAMILY_LABELS[item.family].toLowerCase()}) for independent simulation rounds — prompt and vocabulary hints only.`,
        itemCount: 1,
        answerModel: "rubric",
        hasExplanation: true,
        skills: [SPEAKING_SKILL_LABELS[item.skill]],
        rubricCriteria: SPEAKING_CRITERIA.map((c) => c.name),
        hasReferenceExample: false,
        href: `#/exams/speaking/practice/${item.slug}`,
      });
    } else {
      out.push({
        ...base,
        id: item.slug,
        questionType: "Part 3 discussion",
        questionTypeKey: "part3-discussion",
        topic: item.domain ?? IELTS_SPEAKING_PART3_TOPICS[item.slug] ?? classifyToeflTopic(item.theme),
        topicDetail: item.theme,
        instructions: item.progression,
        summary: `A Part 3 discussion set on ${item.theme.toLowerCase()} — ${item.questions.length} questions escalating from accessible to speculative.`,
        itemCount: item.questions.length,
        answerModel: "rubric",
        hasExplanation: true,
        skills: [SPEAKING_SKILL_LABELS[item.skill]],
        rubricCriteria: SPEAKING_CRITERIA.map((c) => c.name),
        hasReferenceExample: true,
        href: `#/exams/speaking/practice/${item.slug}`,
      });
    }
  }
  return out;
}

// ---------------------------------------------------------------------------
// TOEFL adapters
// ---------------------------------------------------------------------------

function toeflReadingItems(): UnifiedBankItem[] {
  return TOEFL_READING_BANK.map((ex: ToeflReadingExercise): UnifiedBankItem => {
    const taskLabel = TOEFL_READING_TASK_LABELS[ex.taskType];
    const skills = new Set<string>();
    let topicLabel = "";
    if (ex.taskType === "complete-words") {
      topicLabel = ex.topic;
      for (const q of ex.questions) for (const s of q.meta.skills) skills.add(s);
    } else if (ex.taskType === "daily-life") {
      topicLabel = ex.textKind;
      for (const q of ex.questions) for (const s of q.meta.skills) skills.add(s);
    } else {
      topicLabel = ex.subject;
      for (const q of ex.questions) for (const s of q.meta.skills) skills.add(s);
    }
    const skillLabels = [...skills].map((s) => LIBRARY_SKILL_LABELS[s as keyof typeof LIBRARY_SKILL_LABELS] ?? s);
    const summary =
      ex.taskType === "complete-words"
        ? `A ${topicLabel.toLowerCase()} passage with ${ex.questions.length} missing words to restore from a word bank.`
        : ex.taskType === "daily-life"
          ? `A ${topicLabel.toLowerCase()} from ${ex.scene} with ${ex.questions.length} multiple-choice questions.`
          : `A ${topicLabel.toLowerCase()} academic passage with ${ex.questions.length} multiple-choice questions.`;
    return {
      id: ex.slug,
      exam: "toefl",
      version: "toefl-2026",
      section: "reading",
      questionType: taskLabel,
      questionTypeKey: ex.taskType,
      difficulty: ex.difficulty,
      topic: classifyToeflTopic(topicLabel, ex.title, ex.taskType === "daily-life" ? ex.scene : ""),
      topicDetail: topicLabel,
      instructions: `Read the text and answer the questions — the ${taskLabel.toLowerCase()} task type from the current TOEFL iBT Reading section.`,
      summary,
      itemCount: ex.questions.length,
      answerModel: "keyed",
      hasExplanation: true,
      skills: skillLabels,
      estimatedMinutes: ex.estimatedMinutes,
      reviewStatus: "ai-reviewed",
      href: `#/exams/toefl/library/${ex.slug}`,
      source: ex.source,
    };
  });
}

function toeflListeningItems(): UnifiedBankItem[] {
  return TOEFL_LISTENING_BANK.map((ex: ToeflListeningExercise): UnifiedBankItem => {
    const taskLabel = TOEFL_LISTENING_TASK_LABELS[ex.taskType];
    const skills = new Set<string>([LIBRARY_SKILL_LABELS[ex.targetSkill]]);
    for (const q of ex.questions) {
      for (const s of q.meta.skills) skills.add(LIBRARY_SKILL_LABELS[s]);
    }
    return {
      id: ex.slug,
      exam: "toefl",
      version: "toefl-2026",
      section: "listening",
      questionType: taskLabel,
      questionTypeKey: ex.taskType,
      difficulty: ex.difficulty,
      topic: classifyToeflTopic(ex.scene, ex.title, ex.taskType),
      topicDetail: ex.scene,
      instructions: ex.intro,
      summary: `${taskLabel} — a recording set in ${ex.scene}, with ${ex.questions.length} question${ex.questions.length === 1 ? "" : "s"}.`,
      itemCount: ex.questions.length,
      answerModel: "keyed",
      hasExplanation: true,
      skills: [...skills],
      estimatedMinutes: ex.estimatedMinutes,
      reviewStatus: "ai-reviewed",
      href: `#/exams/toefl/library/${ex.slug}`,
      source: ex.source,
    };
  });
}

const TOEFL_WRITING_RUBRIC = [
  "Task response",
  "Organization & development",
  "Language accuracy",
  "Lexical range",
];

function toeflWritingItems(): UnifiedBankItem[] {
  return TOEFL_WRITING_BANK.map((ex: ToeflWritingExercise): UnifiedBankItem => {
    if (ex.taskType === "build-sentence") {
      const focusLabel = TOEFL_SENTENCE_FOCUS_LABELS[ex.focus];
      return {
        id: ex.slug,
        exam: "toefl",
        version: "toefl-2026",
        section: "writing",
        questionType: TOEFL_WRITING_TASK_LABELS["build-sentence"],
        questionTypeKey: ex.taskType,
        difficulty: ex.difficulty,
        topic: classifyToeflTopic(focusLabel, ex.title),
        topicDetail: focusLabel,
        instructions: `Build grammatical sentences — reorder, repair or complete the segments to match the target sentence.`,
        summary: `${ex.items.length} sentence-building exercises focused on ${focusLabel.toLowerCase()}.`,
        itemCount: ex.items.length,
        answerModel: "keyed",
        hasExplanation: true,
        skills: [focusLabel],
        estimatedMinutes: ex.estimatedMinutes,
        reviewStatus: "ai-reviewed",
        hasReferenceExample: true,
        href: `#/exams/toefl/library/${ex.slug}`,
        source: ex.source,
      };
    }
    if (ex.taskType === "write-email") {
      const purposeLabel = TOEFL_EMAIL_PURPOSE_LABELS[ex.purpose];
      return {
        id: ex.slug,
        exam: "toefl",
        version: "toefl-2026",
        section: "writing",
        questionType: TOEFL_WRITING_TASK_LABELS["write-email"],
        questionTypeKey: ex.taskType,
        difficulty: ex.difficulty,
        topic: classifyToeflTopic(ex.recipient, ex.title, purposeLabel),
        topicDetail: `${purposeLabel} to a ${ex.recipient.toLowerCase()}`,
        instructions: `Write an email in response to the situation — the Write an Email task from the current TOEFL iBT Writing section.`,
        summary: `A ${purposeLabel.toLowerCase()} email to a ${ex.recipient.toLowerCase()} — timed writing assessed against four criteria.`,
        itemCount: 1,
        answerModel: "rubric",
        hasExplanation: true,
        skills: TOEFL_WRITING_RUBRIC,
        estimatedMinutes: ex.estimatedMinutes,
        reviewStatus: "ai-reviewed",
        rubricCriteria: TOEFL_WRITING_RUBRIC,
        hasReferenceExample: true,
        href: `#/exams/toefl/library/${ex.slug}`,
        source: ex.source,
      };
    }
    return {
      id: ex.slug,
      exam: "toefl",
      version: "toefl-2026",
      section: "writing",
      questionType: TOEFL_WRITING_TASK_LABELS["academic-discussion"],
      questionTypeKey: ex.taskType,
      difficulty: ex.difficulty,
      topic: classifyToeflTopic(ex.discipline, ex.title),
      topicDetail: ex.discipline,
      instructions: `Read the professor's prompt and two classmates' posts, then add your own contribution to the academic discussion.`,
      summary: `An academic discussion board in ${ex.discipline.toLowerCase()} — timed writing assessed against four criteria.`,
      itemCount: 1,
      answerModel: "rubric",
      hasExplanation: true,
      skills: TOEFL_WRITING_RUBRIC,
      estimatedMinutes: ex.estimatedMinutes,
      reviewStatus: "ai-reviewed",
      rubricCriteria: TOEFL_WRITING_RUBRIC,
      hasReferenceExample: true,
      href: `#/exams/toefl/library/${ex.slug}`,
      source: ex.source,
    };
  });
}

function toeflSpeakingItems(): UnifiedBankItem[] {
  return TOEFL_SPEAKING_BANK.map((ex: ToeflSpeakingExercise): UnifiedBankItem => {
    if (ex.taskType === "listen-repeat") {
      return {
        id: ex.slug,
        exam: "toefl",
        version: "toefl-2026",
        section: "speaking",
        questionType: TOEFL_SPEAKING_TASK_LABELS["listen-repeat"],
        questionTypeKey: ex.taskType,
        difficulty: ex.difficulty,
        topic: classifyToeflTopic(ex.sentence),
        topicDetail: ex.speaker.role,
        instructions: `Listen to the sentence and repeat it exactly within the ${ex.windowSec}-second window.`,
        summary: `Repeat a ${ex.wordCount}-word sentence within ${ex.windowSec} seconds — accuracy is measured word by word.`,
        itemCount: 1,
        answerModel: "keyed",
        hasExplanation: true,
        skills: ["Repetition accuracy", "Pronunciation"],
        estimatedMinutes: 1,
        reviewStatus: "ai-reviewed",
        hasReferenceExample: true,
        href: `#/exams/toefl/library/${ex.slug}`,
        source: ex.source,
      };
    }
    return {
      id: ex.slug,
      exam: "toefl",
      version: "toefl-2026",
      section: "speaking",
      questionType: TOEFL_SPEAKING_TASK_LABELS["take-interview"],
      questionTypeKey: ex.taskType,
      difficulty: ex.difficulty,
      topic: classifyToeflTopic(ex.topic, ex.question),
      topicDetail: ex.topic,
      instructions: `${ex.question} — prepare for ${ex.prepSec} seconds, then answer for about ${ex.answerSec} seconds.`,
      summary: `An interview question on ${ex.topic.toLowerCase()} — ${ex.prepSec}s preparation, ~${ex.answerSec}s answer, assessed against four criteria.`,
      itemCount: 1,
      answerModel: "rubric",
      hasExplanation: true,
      skills: TOEFL_INTERVIEW_CRITERIA.map((c) => c.label),
      estimatedMinutes: 2,
      reviewStatus: "ai-reviewed",
      rubricCriteria: TOEFL_INTERVIEW_CRITERIA.map((c) => c.label),
      hasReferenceExample: true,
      href: `#/exams/toefl/library/${ex.slug}`,
      source: ex.source,
    };
  });
}

// ---------------------------------------------------------------------------
// The bank
// ---------------------------------------------------------------------------

function buildUnifiedBank(): UnifiedBankItem[] {
  return [
    ...ieltsListeningItems(),
    ...ieltsReadingItems(),
    ...ieltsWritingItems(),
    ...ieltsSpeakingItems(),
    ...toeflReadingItems(),
    ...toeflListeningItems(),
    ...toeflWritingItems(),
    ...toeflSpeakingItems(),
  ];
}

/** The complete unified question bank — 950 public-safe records. */
export const QUESTION_BANK: UnifiedBankItem[] = buildUnifiedBank();

export function bankItemById(id: string): UnifiedBankItem | undefined {
  return QUESTION_BANK.find((i) => i.id === id);
}

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------

const SECTION_ORDER: Record<UnifiedSection, number> = {
  listening: 0,
  reading: 1,
  writing: 2,
  speaking: 3,
};

function matchesQuery(item: UnifiedBankItem, q: string): boolean {
  const needle = q.toLowerCase();
  return (
    item.id.includes(needle) ||
    item.questionType.toLowerCase().includes(needle) ||
    item.topicDetail.toLowerCase().includes(needle) ||
    item.summary.toLowerCase().includes(needle) ||
    item.instructions.toLowerCase().includes(needle) ||
    BANK_TOPIC_LABELS[item.topic].toLowerCase().includes(needle) ||
    item.skills.some((s) => s.toLowerCase().includes(needle))
  );
}

export function searchQuestionBank(
  filters: QuestionBankFilters,
  page = 1,
  pageSize = 24,
): QuestionBankResult {
  let items = QUESTION_BANK;
  if (filters.q?.trim()) items = items.filter((i) => matchesQuery(i, filters.q!.trim()));
  if (filters.exam) items = items.filter((i) => i.exam === filters.exam);
  if (filters.version) items = items.filter((i) => i.version === filters.version);
  if (filters.section) items = items.filter((i) => i.section === filters.section);
  if (filters.questionType) {
    items = items.filter((i) => i.questionType.split(" + ").includes(filters.questionType!));
  }
  if (filters.difficulty) items = items.filter((i) => i.difficulty === filters.difficulty);
  if (filters.topic) items = items.filter((i) => i.topic === filters.topic);
  if (filters.skill) {
    items = items.filter((i) => i.skills.some((s) => s.toLowerCase() === filters.skill!.toLowerCase()));
  }

  const sorted = [...items].sort((a, b) => {
    if (a.exam !== b.exam) return a.exam === "ielts" ? -1 : 1;
    if (a.section !== b.section) return SECTION_ORDER[a.section] - SECTION_ORDER[b.section];
    if (a.difficulty !== b.difficulty) return a.difficulty - b.difficulty;
    return a.id.localeCompare(b.id);
  });

  const total = sorted.length;
  const pages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), pages);
  const start = (safePage - 1) * pageSize;
  return {
    items: sorted.slice(start, start + pageSize),
    total,
    page: safePage,
    pageSize,
    pages,
  };
}

const SECTION_LABELS: Record<UnifiedSection, string> = {
  listening: "Listening",
  reading: "Reading",
  writing: "Writing",
  speaking: "Speaking",
};

const EXAM_LABELS = { ielts: "IELTS", toefl: "TOEFL" } as const;
const DIFFICULTY_LABELS: Record<UnifiedDifficulty, string> = {
  1: "1 · Foundation",
  2: "2 · Foundation",
  3: "3 · Standard",
  4: "4 · Advanced",
  5: "5 · Advanced",
};

function facetCount<T extends string>(values: T[]): { value: T; count: number }[] {
  const counts = new Map<T, number>();
  for (const v of values) counts.set(v, (counts.get(v) ?? 0) + 1);
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([value, count]) => ({ value, count }));
}

/** Facets computed on the CURRENTLY FILTERED set (minus the facet's own
 *  dimension), so counts stay meaningful while drilling down. */
export function questionBankFacets(active: QuestionBankFilters = {}): QuestionBankFacets {
  const apply = (drop: keyof QuestionBankFilters) => {
    const f: QuestionBankFilters = { ...active };
    delete f[drop];
    let items = QUESTION_BANK;
    if (f.q?.trim()) items = items.filter((i) => matchesQuery(i, f.q!.trim()));
    if (f.exam) items = items.filter((i) => i.exam === f.exam);
    if (f.version) items = items.filter((i) => i.version === f.version);
    if (f.section) items = items.filter((i) => i.section === f.section);
    if (f.questionType) items = items.filter((i) => i.questionType.split(" + ").includes(f.questionType!));
    if (f.difficulty) items = items.filter((i) => i.difficulty === f.difficulty);
    if (f.topic) items = items.filter((i) => i.topic === f.topic);
    if (f.skill) items = items.filter((i) => i.skills.some((s) => s.toLowerCase() === f.skill!.toLowerCase()));
    return items;
  };

  const byExam = apply("exam");
  const byVersion = apply("version");
  const bySection = apply("section");
  const byType = apply("questionType");
  const byTopic = apply("topic");
  const byDifficulty = apply("difficulty");
  const bySkill = apply("skill");

  // One facet entry per official task-family LABEL: the same family
  // (e.g. Sentence completion) legitimately lives in several banks under
  // different machine keys, and the learner should see — and filter by —
  // the one official name.
  const typeCounts = new Map<string, number>();
  for (const item of byType) {
    for (const label of new Set(item.questionType.split(" + "))) {
      typeCounts.set(label, (typeCounts.get(label) ?? 0) + 1);
    }
  }

  const skillCounts = new Map<string, number>();
  for (const item of bySkill) for (const s of item.skills) skillCounts.set(s, (skillCounts.get(s) ?? 0) + 1);

  return {
    exams: facetCount(byExam.map((i) => i.exam)).map((f) => ({ ...f, label: EXAM_LABELS[f.value] })),
    versions: facetCount(byVersion.map((i) => i.version)).map((f) => ({
      ...f,
      label: VERSION_LABELS[f.value],
    })),
    sections: facetCount(bySection.map((i) => i.section)).map((f) => ({
      ...f,
      label: SECTION_LABELS[f.value],
    })),
    questionTypes: [...typeCounts.entries()]
      .map(([value, count]) => ({ value, label: value, count }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label)),
    topics: facetCount(byTopic.map((i) => i.topic)).map((f) => ({
      ...f,
      label: BANK_TOPIC_LABELS[f.value],
    })),
    difficulties: ([1, 2, 3, 4, 5] as UnifiedDifficulty[])
      .map((d) => ({ value: d, count: byDifficulty.filter((i) => i.difficulty === d).length }))
      .map((f) => ({ ...f, label: DIFFICULTY_LABELS[f.value] })),
    skills: [...skillCounts.entries()]
      .map(([value, count]) => ({ value, label: value, count }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label)),
  };
}

// ---------------------------------------------------------------------------
// Stats + validation (the machine QC gate)
// ---------------------------------------------------------------------------

export function questionBankStats(): {
  total: number;
  byExamSection: Record<string, number>;
  byTopic: Record<string, number>;
  byReviewStatus: Record<string, number>;
  keyed: number;
  rubric: number;
} {
  const byExamSection: Record<string, number> = {};
  const byTopic: Record<string, number> = {};
  const byReviewStatus: Record<string, number> = {};
  for (const item of QUESTION_BANK) {
    const key = `${item.exam}/${item.section}`;
    byExamSection[key] = (byExamSection[key] ?? 0) + 1;
    byTopic[item.topic] = (byTopic[item.topic] ?? 0) + 1;
    byReviewStatus[item.reviewStatus] = (byReviewStatus[item.reviewStatus] ?? 0) + 1;
  }
  return {
    total: QUESTION_BANK.length,
    byExamSection,
    byTopic,
    byReviewStatus,
    keyed: QUESTION_BANK.filter((i) => i.answerModel === "keyed").length,
    rubric: QUESTION_BANK.filter((i) => i.answerModel === "rubric").length,
  };
}

/** The PROMPT 54 initial-content targets. */
export const BANK_SIZE_TARGETS: Record<string, number> = {
  "ielts/listening": 100,
  "ielts/reading": 100,
  "ielts/writing": 100,
  "ielts/speaking": 150,
  "toefl/reading": 100,
  "toefl/listening": 100,
  "toefl/writing": 100,
  "toefl/speaking": 100,
};

export function validateUnifiedBank(): string[] {
  const issues: string[] = [];
  const ids = new Set<string>();

  for (const item of QUESTION_BANK) {
    if (ids.has(item.id)) issues.push(`duplicate id across the bank: ${item.id}`);
    ids.add(item.id);

    if (!item.id || !/^[a-z0-9-]+$/.test(item.id)) issues.push(`${item.id}: malformed id`);
    if (!item.instructions || item.instructions.trim().length < 5) issues.push(`${item.id}: missing instructions`);
    if (!item.summary || item.summary.trim().length < 10) issues.push(`${item.id}: missing question-content summary`);
    if (item.itemCount < 1) issues.push(`${item.id}: itemCount below 1`);
    if (item.difficulty < 1 || item.difficulty > 5) issues.push(`${item.id}: difficulty outside 1-5`);
    if (item.estimatedMinutes < 1 || item.estimatedMinutes > 60) issues.push(`${item.id}: estimated minutes outside 1-60`);
    if (item.skills.length === 0) issues.push(`${item.id}: no skills assessed`);
    if (!BANK_TOPIC_LABELS[item.topic]) issues.push(`${item.id}: unknown topic domain "${item.topic}"`);
    if (!item.questionType) issues.push(`${item.id}: missing question type`);
    if (!item.source.toLowerCase().includes("original talksy practice material")) {
      issues.push(`${item.id}: source note must label the item as TalkSy original practice content`);
    }
    if (!item.href.startsWith("#/exams/")) issues.push(`${item.id}: href does not deep-link into a player`);
    if (item.reviewStatus !== "ai-reviewed" && item.reviewStatus !== "human-reviewed") {
      issues.push(`${item.id}: missing review status`);
    }

    // Writing and Speaking are never ordinary multiple-choice items.
    if (item.section === "writing" || item.section === "speaking") {
      if (item.answerModel === "rubric" && (!item.rubricCriteria || item.rubricCriteria.length < 3)) {
        issues.push(`${item.id}: rubric-assessed item without its scoring rubric criteria`);
      }
      if (item.answerModel === "keyed" && item.rubricCriteria) {
        issues.push(`${item.id}: keyed item must not claim a rubric`);
      }
    } else if (item.answerModel !== "keyed") {
      issues.push(`${item.id}: ${item.section} items must be answer-keyed`);
    }
  }

  // Size targets (the PROMPT 54 first-release contract).
  const stats = questionBankStats();
  for (const [key, target] of Object.entries(BANK_SIZE_TARGETS)) {
    const actual = stats.byExamSection[key] ?? 0;
    if (actual < target) issues.push(`size target missed: ${key} has ${actual}, target ${target}`);
  }

  // The twelve mandated topic domains must be covered by BOTH examinations.
  for (const exam of ["ielts", "toefl"] as const) {
    const covered = new Set(QUESTION_BANK.filter((i) => i.exam === exam).map((i) => i.topic));
    for (const domain of Object.keys(BANK_TOPIC_LABELS) as BankTopicDomain[]) {
      if (!covered.has(domain)) issues.push(`topic variety broken: ${exam} never covers "${domain}"`);
    }
  }

  // Version honesty: IELTS reading/writing split; listening/speaking common.
  for (const item of QUESTION_BANK) {
    if (item.exam === "toefl" && item.version !== "toefl-2026") issues.push(`${item.id}: TOEFL item must pin the 2026 version`);
    if (item.exam === "ielts") {
      if ((item.section === "reading" || item.section === "writing") && item.version === "common") {
        issues.push(`${item.id}: IELTS ${item.section} must declare its variant`);
      }
      if ((item.section === "listening" || item.section === "speaking") && item.version !== "common") {
        issues.push(`${item.id}: IELTS ${item.section} is common to both variants`);
      }
    }
  }

  return issues;
}
