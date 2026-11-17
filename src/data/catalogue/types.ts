/**
 * TalkSy curriculum catalogue type system.
 *
 * The catalogue is the complete dependency-aware structure of the TalkSy
 * English program:
 *
 *   Course → Learning Level (Stage) → Module → Unit → Lesson → Practice → Assessment
 *
 * It is the single source of truth for WHAT is taught, in WHAT order, with
 * WHICH prerequisites. Full lesson content (exercises, dialogues, passages)
 * is authored per release train against these specs (see
 * docs/CURRICULUM_BLUEPRINT.md for the lesson anatomy and content gates).
 *
 * ID rules (stable — used as database import keys; never rename):
 *   course id:  "talksy-complete-english"
 *   stage id:   "st{nn}"                       e.g. "st04"
 *   module id:  "st{nn}-m{nn}"                 e.g. "st04-m02"
 *   unit id:    "st{nn}-m{nn}-u{nn}"           e.g. "st04-m02-u03"
 *   lesson id:  "st{nn}-m{nn}-u{nn}-l{nn}"     e.g. "st04-m02-u03-l01"
 *   vocab id:   "{unit id}-w{nn}"              e.g. "st02-m03-u02-w01"
 *
 * Derived assessment nodes (used by the dependency graph):
 *   unit checkpoint: "{unit id}-checkpoint"
 *   module exit:     "{module id}-exit"
 *   stage exit:      "{stage id}-exit"
 */

export type Cefr = "Pre-A1" | "A1" | "A2" | "B1" | "B2" | "C1";

export type Skill = "reading" | "writing" | "listening" | "speaking";

export const SKILLS: readonly Skill[] = ["reading", "writing", "listening", "speaking"] as const;

export const CEFR_BANDS: readonly Cefr[] = ["Pre-A1", "A1", "A2", "B1", "B2", "C1"] as const;

/** A single lesson specification (10–15 minutes of core teaching). */
export interface LessonSpec {
  id: string;
  title: string;
  cefr: Cefr;
  /** estimated completion time in minutes (8–15) */
  minutes: number;
  /** 1–3 learner-facing objectives */
  objectives: string[];
  /** 2–4 topic keywords covered */
  topics: string[];
  /** practice activity descriptors (the Practice layer of the hierarchy) */
  practice: string[];
  /** lesson-level mastery criterion (what "done and understood" means) */
  assessment: string;
  /** four-skill connections */
  skills: Skill[];
  /**
   * Explicit prerequisite lesson ids. Omitted means "the previous lesson in
   * sequence" (within a unit, or the previous unit's checkpoint at a unit
   * boundary). Only set when a lesson deviates from the default chain.
   */
  prerequisites?: string[];
}

/** Mastery gate at the end of every unit. */
export interface UnitCheckpoint {
  /** what the learner must demonstrate */
  criteria: string;
  /** pass threshold in percent */
  passThreshold: number;
}

export interface UnitSpec {
  id: string;
  title: string;
  lessons: LessonSpec[];
  checkpoint: UnitCheckpoint;
}

export interface ModuleSpec {
  id: string;
  title: string;
  description: string;
  /**
   * Knowledge dependencies on earlier catalogue nodes (module/stage exits).
   * These document what each module genuinely builds on. The strict level
   * chain lives on the stage; knowledge deps drive diagnostics and the
   * "recommended after" UI affordance.
   */
  entryRequirements?: string[];
  units: UnitSpec[];
}

/** Certification gate at the end of every learning level (stage). */
export interface ExitAssessment {
  id: string;
  title: string;
  criteria: string;
  passThreshold: number;
  /** minutes (15–30) */
  minutes: number;
  /** catalogue nodes unlocked by passing (normally the next stage) */
  unlocks: string[];
}

export interface StageSpec {
  id: string;
  order: number;
  title: string;
  /** CEFR band range covered, e.g. "A1 → B2" */
  cefr: string;
  goal: string;
  /** strict prerequisites (catalogue node ids) — the level chain */
  entryRequirements: string[];
  modules: ModuleSpec[];
  exitAssessment: ExitAssessment;
}

export interface CourseSpec {
  id: string;
  title: string;
  tagline: string;
  description: string;
  version: string;
  contentLicence: string;
  stages: string[];
}

/* ------------------------------------------------------------------ */
/* Vocabulary item standard (Stage 2 thematic sets and beyond)          */
/* ------------------------------------------------------------------ */

/**
 * Every vocabulary item in the catalogue carries these fields. "Audio
 * pronunciation" is TTS-driven (Web Speech API — no external keys).
 * `translations` is the optional support-language layer, injected per
 * market/locale and empty by default. `revisionStatus` is the import-time
 * default only — the live, per-learner status is VocabularyProgress.strength
 * (Leitner 0–5) in the database.
 */
export interface VocabItemSpec {
  id: string;
  word: string;
  /** IPA transcription, or null where unavailable */
  phonetic: string | null;
  audio: { source: "tts"; text: string; speed: "normal" | "slow" };
  definition: string;
  /** optional support-language translations, keyed by ISO locale */
  translations: Record<string, string>;
  example: string;
  pos: string;
  relatedWords: string[];
  collocations: string[];
  difficulty: Cefr;
  /** import-time default; live state = VocabularyProgress.strength per learner */
  revisionStatus: "new";
}

export interface VocabThemeSpec {
  /** unit id this theme belongs to */
  unitId: string;
  title: string;
  items: VocabItemSpec[];
}

/* ------------------------------------------------------------------ */
/* Legacy content mapping (a1-x / a2-x slugs → catalogue ids)          */
/* ------------------------------------------------------------------ */

export interface LegacyMappingEntry {
  legacySlug: string;
  legacyTitle: string;
  /** catalogue lesson id(s) that re-receive the legacy content */
  targets: string[];
  note: string;
}

export interface LegacyMapping {
  description: string;
  entries: LegacyMappingEntry[];
}

/* ------------------------------------------------------------------ */
/* Dependency graph (materialised)                                      */
/* ------------------------------------------------------------------ */

export type GraphNodeKind =
  | "course"
  | "stage"
  | "module"
  | "unit"
  | "lesson"
  | "checkpoint"
  | "exit";

export interface GraphNode {
  id: string;
  kind: GraphNodeKind;
  label: string;
  cefr?: string;
  minutes?: number;
}

export type GraphEdgeKind =
  /** default in-sequence chain (lesson → lesson, checkpoint gates next unit) */
  | "sequence"
  /** strict level-chain prerequisites (stage entry requirements) */
  | "entry"
  /** documented knowledge dependencies (modules/levels) */
  | "knowledge";

export interface GraphEdge {
  from: string;
  to: string;
  kind: GraphEdgeKind;
}

export interface DependencyGraph {
  nodes: GraphNode[];
  edges: GraphEdge[];
  stats: {
    stages: number;
    modules: number;
    units: number;
    lessons: number;
    checkpoints: number;
    exitAssessments: number;
    coreMinutes: number;
    assessmentMinutes: number;
  };
}
