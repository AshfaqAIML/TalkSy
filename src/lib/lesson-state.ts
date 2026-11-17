"use client";

/**
 * Per-lesson player state persistence (continuity).
 *
 * The lesson player stores, for each user and lesson:
 *   - the step the learner reached, and
 *   - every exercise answer (result + the input that produced it)
 * so leaving and reopening a lesson — or refreshing the page — resumes
 * exactly where the learner left off, with nothing re-asked.
 *
 * Storage is localStorage (device-local, no round-trip). The server knows
 * which exercises were attempted (ExerciseAttempt rows) and serves those
 * ids with the lesson; the player uses them as the cross-device fallback
 * when no local state exists.
 */

export interface ExerciseRecord {
  /** true once checked — locks the exercise UI */
  answered: boolean;
  /** the graded outcome (speak/write are self-assessed, still boolean) */
  correct: boolean | null;
  /** the learner's input, so returning to the step shows their own work */
  input?: unknown;
}

export interface LessonState {
  version: 1;
  stepIndex: number;
  answers: Record<string, ExerciseRecord>;
  savedAt: number;
}

const PREFIX = "talksy.lp.";

function storageKey(userId: string, slug: string): string {
  return `${PREFIX}${userId}.${slug}`;
}

function isRecord(value: unknown): value is ExerciseRecord {
  if (typeof value !== "object" || value === null) return false;
  const rec = value as Partial<ExerciseRecord>;
  return typeof rec.answered === "boolean";
}

/** Loads and validates saved state; null when absent or malformed. */
export function loadLessonState(userId: string, slug: string): LessonState | null {
  try {
    const raw = window.localStorage.getItem(storageKey(userId, slug));
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return null;
    const state = parsed as Partial<LessonState>;
    if (state.version !== 1) return null;
    if (typeof state.stepIndex !== "number" || !Number.isInteger(state.stepIndex) || state.stepIndex < 0) {
      return null;
    }
    const answers: Record<string, ExerciseRecord> = {};
    if (state.answers && typeof state.answers === "object") {
      for (const [id, rec] of Object.entries(state.answers)) {
        if (isRecord(rec)) answers[id] = rec;
      }
    }
    return { version: 1, stepIndex: state.stepIndex, answers, savedAt: state.savedAt ?? 0 };
  } catch {
    return null;
  }
}

export function saveLessonState(userId: string, slug: string, state: LessonState): void {
  try {
    window.localStorage.setItem(storageKey(userId, slug), JSON.stringify(state));
  } catch {
    /* storage full or unavailable — continuity degrades to server fallback */
  }
}

/** Removes saved state (lesson finished — nothing left to resume). */
export function clearLessonState(userId: string, slug: string): void {
  try {
    window.localStorage.removeItem(storageKey(userId, slug));
  } catch {
    /* ignore */
  }
}
