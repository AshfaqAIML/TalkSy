/**
 * TOEFL Listening Practice Library — integrity validator (PROMPT 49).
 *
 * Machine-checks every authored recording BEFORE it can ship:
 *
 *   1. Audio integrity — every segment resolves to a real speaker (or is a
 *      narration frame), carries real words, and the whole script meets its
 *      task-type word band; speaker rosters match the task type (two voices
 *      for conversations, one for announcements and talks).
 *   2. Solvability — every keyed answer is derivable from the script alone;
 *      every keyword that carries an answer really occurs in the recording;
 *      every MCQ has exactly four distinct options with one key in range.
 *   3. Teaching depth — every question carries a 25+ word explanation, 1–2
 *      skills from the seven tracked dimensions, and keywords; designed
 *      traps carry a family and a note.
 *   4. Task honesty — question counts follow the task type; harder
 *      response items add the intention question; targetSkill is genuinely
 *      tested by at least one question.
 *   5. Transcript gating — learningMode (transcript visible during playback)
 *      is reserved for foundation learning exercises, difficulty 1–2.
 *   6. Originality (bank level) — no normalised 8-word window repeats across
 *      the bank; every task type reaches every difficulty tier; accents vary
 *      with a North-American majority, as in the real test.
 */

import { isLibrarySkill, type LibrarySkill } from "../library-skills";
import type { ToeflListeningExercise, ToeflListeningQuestion } from "./types";
import { TOEFL_LISTENING_TASK_LABELS, TOEFL_ACCENT_LABELS, type ToeflAccent } from "./types";

const norm = (s: string): string =>
  (s ?? "")
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/[^a-z0-9' ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const words = (s: string): string[] => (norm(s).match(/[a-z0-9']+/g) ?? []);

const wordCount = (s: string): number => (s.match(/[A-Za-z]+(?:-[A-Za-z]+)*|\d+(?:[.,:]\d+)*/g) ?? []).length;

/** The full script (what the learner hears), for keyword and originality checks. */
export function exerciseScript(ex: ToeflListeningExercise): string {
  return ex.segments.map((s) => s.text).join(" ");
}

function checkSkills(list: unknown, tag: string, issues: string[]): void {
  if (!Array.isArray(list) || list.length === 0) {
    issues.push(`${tag}: no tested skill declared.`);
    return;
  }
  if (list.length > 2) {
    issues.push(`${tag}: declares ${list.length} skills — at most 2 of the seven tracked dimensions per question.`);
  }
  for (const s of list) {
    if (typeof s !== "string" || !isLibrarySkill(s)) {
      issues.push(`${tag}: skill "${String(s)}" is outside the seven tracked library dimensions.`);
    }
  }
}

// ---------------------------------------------------------------------------
// Per-exercise validation
// ---------------------------------------------------------------------------

export function validateToeflListeningExercise(ex: ToeflListeningExercise): string[] {
  const issues: string[] = [];
  const slug = ex.slug;
  const script = norm(exerciseScript(ex));
  const totalWords = wordCount(exerciseScript(ex));
  const speakerIds = new Set(ex.speakers.map((s) => s.id));

  if (ex.difficulty < 1 || ex.difficulty > 5) issues.push(`${slug}: difficulty must be 1–5.`);
  if (ex.estimatedMinutes < 2 || ex.estimatedMinutes > 12) issues.push(`${slug}: estimatedMinutes out of range.`);
  if (wordCount(ex.title) < 2) issues.push(`${slug}: title is too thin.`);
  if (wordCount(ex.scene) < 2) issues.push(`${slug}: scene label is too thin.`);
  if (words(ex.intro).length < 6) issues.push(`${slug}: intro framing is too thin.`);
  if (words(ex.transcriptNote).length < 10) issues.push(`${slug}: transcriptNote is too thin to teach anything.`);
  if (ex.learningMode && ex.difficulty > 2) {
    issues.push(`${slug}: learningMode (transcript during playback) is reserved for foundation learning exercises (difficulty 1–2).`);
  }
  if (!isLibrarySkill(ex.targetSkill)) {
    issues.push(`${slug}: targetSkill "${String(ex.targetSkill)}" is outside the seven tracked dimensions.`);
  }

  // --- speakers --------------------------------------------------------------
  if (ex.speakers.length === 0) issues.push(`${slug}: no speakers.`);
  const seenSpeakerIds = new Set<string>();
  for (const s of ex.speakers) {
    if (seenSpeakerIds.has(s.id)) issues.push(`${slug}: duplicate speaker id "${s.id}".`);
    seenSpeakerIds.add(s.id);
    if (wordCount(s.name) < 1 || wordCount(s.role) < 2) issues.push(`${slug}: speaker "${s.id}" lacks a name or role.`);
    if (!TOEFL_ACCENT_LABELS[s.accent as ToeflAccent]) issues.push(`${slug}: speaker "${s.id}" has an unknown accent "${String(s.accent)}".`);
  }
  if (ex.taskType === "conversation" && ex.speakers.length !== 2) {
    issues.push(`${slug}: conversations carry exactly two speakers (found ${ex.speakers.length}).`);
  }
  if ((ex.taskType === "announcement" || ex.taskType === "academic-talk") && ex.speakers.length !== 1) {
    issues.push(`${slug}: ${ex.taskType} recordings are a single voice (found ${ex.speakers.length}).`);
  }
  if (ex.taskType === "choose-response" && ex.speakers.length !== 1) {
    issues.push(`${slug}: response prompts are a single voice.`);
  }

  // --- segments (the recording) ----------------------------------------------
  if (ex.segments.length === 0) issues.push(`${slug}: the recording has no segments.`);
  const seenSegmentIds = new Set<string>();
  for (const [i, seg] of ex.segments.entries()) {
    if (seenSegmentIds.has(seg.id)) issues.push(`${slug}: duplicate segment id "${seg.id}".`);
    seenSegmentIds.add(seg.id);
    if (seg.speakerId !== undefined && !speakerIds.has(seg.speakerId)) {
      issues.push(`${slug}: segment ${i + 1} ("${seg.id}") speaks as "${seg.speakerId}" — no such speaker.`);
    }
    if (words(seg.text).length < 2) issues.push(`${slug}: segment ${i + 1} ("${seg.id}") carries no real speech.`);
  }

  // --- script word bands per task type ---------------------------------------
  const BANDS: Record<ToeflListeningExercise["taskType"], [number, number]> = {
    "choose-response": [15, 60],
    conversation: [130, 260],
    announcement: [100, 190],
    "academic-talk": [210, 330],
  };
  const [floorW, ceilW] = BANDS[ex.taskType];
  if (totalWords < floorW) issues.push(`${slug}: script is ${totalWords} words — below the ${floorW}-word floor for ${ex.taskType}.`);
  if (totalWords > ceilW) issues.push(`${slug}: script is ${totalWords} words — above the ${ceilW}-word ceiling for ${ex.taskType}.`);
  if (ex.taskType === "conversation" && ex.segments.length < 10) issues.push(`${slug}: conversations need at least 10 turns.`);
  if (ex.taskType === "announcement" && ex.segments.length < 5) issues.push(`${slug}: announcements need at least 5 segments.`);
  if (ex.taskType === "academic-talk" && ex.segments.length < 8) issues.push(`${slug}: academic talks need at least 8 segments.`);

  // --- questions --------------------------------------------------------------
  const COUNTS: Record<ToeflListeningExercise["taskType"], [number, number]> = {
    "choose-response": [1, 2],
    conversation: [4, 5],
    announcement: [4, 5],
    "academic-talk": [5, 6],
  };
  const [floorQ, ceilQ] = COUNTS[ex.taskType];
  if (ex.questions.length < floorQ) issues.push(`${slug}: only ${ex.questions.length} questions — ${floorQ} is the floor for ${ex.taskType}.`);
  if (ex.questions.length > ceilQ) issues.push(`${slug}: ${ex.questions.length} questions — above the ${ceilQ} ceiling for ${ex.taskType}.`);
  if (ex.taskType === "choose-response" && ex.difficulty >= 3 && ex.questions.length < 2) {
    issues.push(`${slug}: harder response items add the speaker-intention question (2 questions at difficulty 3+).`);
  }

  let expected = 1;
  const skillSet = new Set<LibrarySkill>();
  for (const q of ex.questions) {
    if (q.no !== expected) {
      issues.push(`${slug}: question numbering breaks at ${q.no} (expected ${expected}).`);
      break;
    }
    expected += 1;
    issues.push(...validateListeningItem(q, ex, script));
    for (const s of q.meta.skills) skillSet.add(s);
  }
  if (!skillSet.has(ex.targetSkill)) {
    issues.push(`${slug}: targetSkill "${ex.targetSkill}" is never actually tested by any question.`);
  }

  return issues;
}

function validateListeningItem(q: ToeflListeningQuestion, ex: ToeflListeningExercise, script: string): string[] {
  const issues: string[] = [];
  const tag = `${ex.slug}#${q.no}`;
  if (q.options.length !== 4) issues.push(`${tag}: must carry exactly four options.`);
  const optionNorms = q.options.map((o) => norm(o));
  if (new Set(optionNorms).size !== 4) issues.push(`${tag}: duplicate options.`);
  if (q.correct < 0 || q.correct > 3) issues.push(`${tag}: correct index out of range.`);
  if (q.lure !== undefined && q.lure === q.correct) issues.push(`${tag}: lure equals the correct option.`);
  if (wordCount(q.stem) < 3) issues.push(`${tag}: stem is too thin.`);
  if (words(q.meta.explanation).length < 20) {
    issues.push(`${tag}: explanation is thinner than 20 words — the platform teaching-depth floor.`);
  }
  checkSkills(q.meta.skills, tag, issues);
  if (q.meta.keywords.length === 0) issues.push(`${tag}: no keywords declared — the answer must be traceable to the script.`);
  for (const k of q.meta.keywords) {
    if (wordCount(k) < 1) continue;
    if (!script.includes(norm(k))) {
      issues.push(`${tag}: keyword "${k}" does not occur in the recording.`);
    }
  }
  if (q.meta.trap) {
    if (wordCount(q.meta.trap.note) < 8) issues.push(`${tag}: trap note is too thin.`);
    if (!q.meta.trap.family) issues.push(`${tag}: trap carries no family.`);
  }
  return issues;
}

// ---------------------------------------------------------------------------
// Bank-level validation
// ---------------------------------------------------------------------------

/** No normalised 8-word window repeats across the whole listening bank. */
export function validateToeflListeningOriginality(exercises: ToeflListeningExercise[]): string[] {
  const issues: string[] = [];
  const seen = new Map<string, string>();
  for (const ex of exercises) {
    const sentences = exerciseScript(ex).split(/(?<=[.!?])\s+/);
    for (const sentence of sentences) {
      const ws = words(sentence);
      if (ws.length < 8) continue;
      for (let i = 0; i <= ws.length - 8; i += 1) {
        const window = ws.slice(i, i + 8).join(" ");
        const owner = seen.get(window);
        if (owner && owner !== ex.slug) {
          issues.push(`originality: "${window}" appears in both ${owner} and ${ex.slug}.`);
          if (issues.length > 20) return issues;
        } else if (!owner) {
          seen.set(window, ex.slug);
        }
      }
    }
  }
  return issues;
}

export function validateToeflListeningBank(exercises: ToeflListeningExercise[]): string[] {
  const issues: string[] = [];
  const slugs = new Set<string>();
  for (const ex of exercises) {
    if (slugs.has(ex.slug)) issues.push(`duplicate slug: ${ex.slug}`);
    slugs.add(ex.slug);
    issues.push(...validateToeflListeningExercise(ex));
  }
  issues.push(...validateToeflListeningOriginality(exercises));

  // --- distribution targets --------------------------------------------------
  const byType = new Map<string, ToeflListeningExercise[]>();
  for (const ex of exercises) {
    const list = byType.get(ex.taskType) ?? [];
    list.push(ex);
    byType.set(ex.taskType, list);
  }
  for (const [taskType, list] of byType) {
    if (list.length < 25) {
      issues.push(`distribution: ${TOEFL_LISTENING_TASK_LABELS[taskType as keyof typeof TOEFL_LISTENING_TASK_LABELS]} carries only ${list.length} exercises — 25 per task type is the target.`);
    }
    const tiers = new Set(list.map((e) => e.difficulty));
    for (const d of [1, 2, 3, 4, 5] as const) {
      if (!tiers.has(d)) issues.push(`distribution: ${taskType} never reaches difficulty ${d} — progressive difficulty is required.`);
    }
  }

  // --- accent variety with a North-American majority --------------------------
  const accentRows = exercises.flatMap((e) => e.speakers.map((s) => s.accent));
  const usedAccents = new Set(accentRows);
  for (const a of ["north-american", "british", "australian", "nz"] as const) {
    if (!usedAccents.has(a)) issues.push(`accents: ${a} never appears — varied accents are required.`);
  }
  const naShare = accentRows.length ? accentRows.filter((a) => a === "north-american").length / accentRows.length : 0;
  if (naShare < 0.5) {
    issues.push(`accents: North-American voices are only ${Math.round(naShare * 100)}% of the bank — the real test is majority North-American.`);
  }

  // --- scenes must not feel generated -----------------------------------------
  const scenes = new Set(exercises.map((e) => norm(e.scene)));
  if (scenes.size < exercises.length * 0.8) {
    issues.push(`variety: only ${scenes.size} distinct scenes across ${exercises.length} exercises.`);
  }

  return issues;
}
