/**
 * IELTS Writing Masterclass — task bank content model (PROMPT 46, Part E).
 *
 * Every task is an ORIGINAL writing assignment authored for this platform:
 * a prompt (with its chart data, letter situation or essay question), the
 * requirements a complete response must cover, the author's planning notes,
 * a full model answer, the eight-element analysis (paragraph-by-paragraph,
 * vocabulary, grammar, coherence, alternative expressions, common
 * mistakes), a topic vocabulary bank, and — for the flagship tasks —
 * additional samples at different proficiency levels whose band comments
 * are justified against the public descriptors and clearly labelled as
 * educational estimates, never official scores.
 *
 * Four channels of task, exactly as the prompt separates them:
 *   Academic Task 1  — the visual report (7 visual families)
 *   Academic Task 2  — the academic essay (7 essay families)
 *   General Training Task 1 — the letter (3 registers × 6 purposes)
 *   General Training Task 2 — the everyday essay (the same 7 families
 *                             on everyday prompts, semi-formal register)
 *
 * Nothing here is official IELTS examination content; all tasks are TalkSy
 * original practice material written in the style of the test.
 */

// ---------------------------------------------------------------------------
// Channels, task types, families
// ---------------------------------------------------------------------------

export type WritingChannel = "academic" | "gt";

/** Task 1 = the visual report (Academic) or the letter (GT); Task 2 = essay. */
export type WritingTaskType = "task-1" | "task-2";

/** Academic Task 1 visual families (PROMPT 46, Part B). */
export type WritingVisualFamily =
  | "bar"
  | "line"
  | "pie"
  | "table"
  | "mixed"
  | "process"
  | "map";

/** Task 2 essay families (PROMPT 46, Part C) — both channels. */
export type WritingEssayFamily =
  | "opinion"
  | "discussion"
  | "advantages-disadvantages"
  | "problem-solution"
  | "cause-effect"
  | "two-part"
  | "direct-questions";

/** General Training Task 1 letter registers (PROMPT 46, Part D). */
export type WritingLetterRegister = "formal" | "semi-formal" | "informal";

/** General Training Task 1 letter purposes (PROMPT 46, Part D). */
export type WritingLetterPurpose =
  | "complaint"
  | "request"
  | "invitation"
  | "apology"
  | "explanation"
  | "suggestion";

export type WritingFamily =
  | WritingVisualFamily
  | WritingEssayFamily
  | WritingLetterPurpose;

export const WRITING_FAMILY_LABELS: Record<WritingFamily, string> = {
  bar: "Bar chart",
  line: "Line graph",
  pie: "Pie chart",
  table: "Table",
  mixed: "Mixed charts",
  process: "Process diagram",
  map: "Map",
  opinion: "Opinion essay",
  discussion: "Discussion essay",
  "advantages-disadvantages": "Advantages and disadvantages",
  "problem-solution": "Problem and solution",
  "cause-effect": "Cause and effect",
  "two-part": "Two-part question",
  "direct-questions": "Direct questions",
  complaint: "Complaint letter",
  request: "Request letter",
  invitation: "Invitation letter",
  apology: "Apology letter",
  explanation: "Explanation letter",
  suggestion: "Suggestion letter",
};

export type WritingDifficulty = 1 | 2 | 3 | 4 | 5;

export const WRITING_DIFFICULTY_LABELS: Record<WritingDifficulty, "foundation" | "standard" | "advanced"> = {
  1: "foundation",
  2: "foundation",
  3: "standard",
  4: "advanced",
  5: "advanced",
};

// ---------------------------------------------------------------------------
// The visuals (Academic Task 1) — structured data rendered as SVG client-side
// ---------------------------------------------------------------------------

export type WritingVisualSeries = {
  name: string;
  /** One value per category / x-point; null = not shown. */
  values: Array<number | null>;
};

/** Bar chart: categories on x, one or more series, optional grouped years. */
export interface WritingBarVisual {
  kind: "bar";
  title: string;
  unit: string;
  xLabel: string;
  yLabel: string;
  categories: string[];
  series: WritingVisualSeries[];
  /** True for horizontal bars (e.g. long category labels). */
  horizontal?: boolean;
}

export interface WritingLineVisual {
  kind: "line";
  title: string;
  unit: string;
  xLabel: string;
  yLabel: string;
  /** Evenly spaced x points, e.g. years or months. */
  xPoints: string[];
  series: WritingVisualSeries[];
}

export interface WritingPieVisual {
  kind: "pie";
  title: string;
  /** Usually "%" — printed beside values. */
  unit: string;
  /** One pie = one period/category; two pies compare two of them. */
  pies: { caption: string; slices: { label: string; value: number }[] }[];
}

export interface WritingTableVisual {
  kind: "table";
  title: string;
  unit: string;
  rowLabel: string;
  columnLabels: string[];
  rows: { label: string; values: Array<number | string> }[];
  /** Footnote printed under the table (units clarifications, sources). */
  note?: string;
}

/** Mixed chart: an explicit bar + line (or bar + pie) pair sharing a topic. */
export interface WritingMixedVisual {
  kind: "mixed";
  title: string;
  unit: string;
  bar: WritingBarVisual;
  second: WritingLineVisual | WritingPieVisual;
}

export interface WritingProcessVisual {
  kind: "process";
  title: string;
  /** Numbered stages rendered left-to-right (wrapping) with arrows. */
  stages: { label: string; caption: string }[];
  /** e.g. "The process is cyclical." */
  note?: string;
}

export interface WritingMapVisual {
  kind: "map";
  title: string;
  beforeTitle: string;
  afterTitle: string;
  /** Two grids of the SAME shape; null = empty ground. */
  before: (WritingMapCell | null)[][];
  after: (WritingMapCell | null)[][];
  note?: string;
}

export interface WritingMapCell {
  label: string;
}

export type WritingVisual =
  | WritingBarVisual
  | WritingLineVisual
  | WritingPieVisual
  | WritingTableVisual
  | WritingMixedVisual
  | WritingProcessVisual
  | WritingMapVisual;

// ---------------------------------------------------------------------------
// Requirements — what a complete response must cover (evaluation hints,
// revealed after submission; the keyword lists stay server-side)
// ---------------------------------------------------------------------------

export interface WritingRequirement {
  key: string;
  /** Plain-language statement, e.g. "States the overall trend". */
  description: string;
  /**
   * Word stems a satisfying response tends to contain (matched loosely,
   * case-insensitive, suffix-insensitive). Never shown before submission.
   */
  keywords: string[];
}

// ---------------------------------------------------------------------------
// The eight-element model analysis (PROMPT 46, Part E)
// ---------------------------------------------------------------------------

export interface WritingModelAnalysis {
  /** Paragraph-by-paragraph analysis: one entry per model paragraph. */
  paragraphByParagraph: { role: string; analysis: string }[];
  /** Vocabulary explanation: the model's load-bearing words and phrases. */
  vocabulary: { term: string; note: string }[];
  /** Grammar analysis: structures used and why they fit the task. */
  grammar: { feature: string; example: string; note: string }[];
  /** Coherence analysis: the thread that makes the whole hang together. */
  coherence: string;
  /** Alternative expressions: same idea, different words. */
  alternativeExpressions: { insteadOf: string; use: string }[];
  /** Common mistakes candidates make on exactly this task. */
  commonMistakes: { wrong: string; right: string; reason: string }[];
}

// ---------------------------------------------------------------------------
// Level samples — different proficiency levels (PROMPT 46, Part E)
// ---------------------------------------------------------------------------

export interface WritingLevelSample {
  /**
   * Honest band estimate label, e.g. "Band 6.0 estimate". These are
   * educational estimates by the author, never official IELTS scores.
   */
  bandEstimate: string;
  paragraphs: string[];
  wordCount: number;
  /** Per-criterion justification against the public descriptors. */
  justification: { criterion: string; note: string }[];
}

// ---------------------------------------------------------------------------
// Planning notes (Part E: "planning notes" before every model answer)
// ---------------------------------------------------------------------------

export interface WritingPlanningNotes {
  heading: string;
  notes: string[];
}

// ---------------------------------------------------------------------------
// The task
// ---------------------------------------------------------------------------

export interface WritingBankTask {
  slug: string;
  title: string;
  channel: WritingChannel;
  taskType: WritingTaskType;
  family: WritingFamily;
  /**
   * PROMPT 54 tier: "flagship" (default) tasks carry the full teaching
   * payload including two level samples; "practice" tasks carry a complete
   * but leaner payload (compact analysis, no level samples) so the
   * expansion library can reach its size targets without thinning any
   * single element below its teaching floor.
   */
  tier?: "flagship" | "practice";
  /**
   * PROMPT 54 question-bank domain: one of the twelve unified topic
   * domains. Optional for the original flagship tasks (the unified adapter
   * resolves those through a curated map); every task added by the PROMPT
   * 54 expansion sets it explicitly.
   */
  topic?: import("../../question-bank/topics").BankTopicDomain;
  /** General Training letters only: the taught register. */
  register?: WritingLetterRegister;
  difficulty: WritingDifficulty;
  /** Official timing: 20 minutes (Task 1) or 40 minutes (Task 2). */
  estimatedMinutes: number;
  /** Official floors: 150 words (Task 1) or 250 words (Task 2). */
  wordMinimum: number;
  timeLimitSec: number;
  /** The printed rubric, exactly as the candidate reads it. */
  prompt: string;
  /** GT Task 1 only: the three bullet points from the rubric. */
  bullets?: string[];
  /** Academic Task 1 only: the visual's data (rendered as an SVG client-side). */
  visual?: WritingVisual;
  /** The situation context for GT letters (who you are, who reads it). */
  situation?: string;
  /** What a complete response must cover — server-side evaluation hints. */
  requirements: WritingRequirement[];
  planningNotes: WritingPlanningNotes[];
  modelAnswer: {
    paragraphs: string[];
    wordCount: number;
    /**
     * Honest label for the model's own level, e.g. "Band 8.0–8.5 estimate —
     * an educational estimate, not an official score."
     */
    bandEstimate: string;
  };
  analysis: WritingModelAnalysis;
  /** Flagship tasks carry samples at two further proficiency levels. */
  levelSamples: WritingLevelSample[];
  /** Topic vocabulary: revealed after submission with the model. */
  vocabularyBank: { word: string; partOfSpeech: string; meaning: string }[];
  source: string;
}

export const WRITING_BANK_SOURCE_NOTE =
  "Original TalkSy practice material written in the style of the IELTS Writing test — not an official IELTS examination task.";

// ---------------------------------------------------------------------------
// Criterion names (PROMPT 46, Part G) — the first criterion changes per task
// ---------------------------------------------------------------------------

export type WritingCriterionKey = "task" | "cc" | "lr" | "gra";

export type WritingCriterionDefinition = {
  key: WritingCriterionKey;
  name: string;
  /** One-line public-descriptor summary the feedback quotes back to. */
  descriptor: string;
};

export function writingCriteriaFor(task: Pick<WritingBankTask, "channel" | "taskType">): WritingCriterionDefinition[] {
  // General Training Task 1 is a letter: its first criterion is Task
  // Achievement (the purpose-and-tone criterion the GT rubric applies).
  // Essays (Task 2, both channels) are scored on Task Response.
  const first: WritingCriterionDefinition =
    task.taskType === "task-1"
      ? {
          key: "task",
          name: "Task Achievement",
          descriptor:
            "Task Achievement: the response covers the task requirements, presents a clear purpose or overview with key features, and extends and supports the main points.",
        }
      : {
          key: "task",
          name: "Task Response",
          descriptor:
            "Task Response: the essay addresses all parts of the task, presents a clear position throughout, and develops main ideas with support and examples.",
        };
  return [
    first,
    {
      key: "cc",
      name: "Coherence and Cohesion",
      descriptor:
        "Coherence and Cohesion: the response organises information clearly, progresses logically, uses cohesive devices appropriately and paragraphs purposefully.",
    },
    {
      key: "lr",
      name: "Lexical Resource",
      descriptor:
        "Lexical Resource: the response uses a wide vocabulary resource, with flexibility and precision, rare errors and good control of spelling and word formation.",
    },
    {
      key: "gra",
      name: "Grammatical Range and Accuracy",
      descriptor:
        "Grammatical Range and Accuracy: the response uses a wide range of structures, the majority error-free, with punctuation and grammar managed well.",
    },
  ];
}
