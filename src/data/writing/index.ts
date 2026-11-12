/**
 * Writing Studio registry + integrity rules.
 *
 * Pure data lookup for the API routes and tests — validateWritingContent()
 * re-asserts every invariant at test time.
 */

import { beginnerWritingAssignments } from "./assignments-beginner";
import { elementaryWritingAssignments } from "./assignments-elementary";
import { intermediateWritingAssignments } from "./assignments-intermediate";
import { advancedWritingAssignments } from "./assignments-advanced";
import type {
  GuidedItem,
  SafeWritingAssignment,
  WritingAssignment,
  WritingTaskKind,
  WritingTier,
} from "./types";

export const writingAssignments: WritingAssignment[] = [
  ...beginnerWritingAssignments,
  ...elementaryWritingAssignments,
  ...intermediateWritingAssignments,
  ...advancedWritingAssignments,
];

export function getWritingAssignment(slug: string): WritingAssignment | null {
  return writingAssignments.find((a) => a.slug === slug) ?? null;
}

export function getWritingTask(assignment: WritingAssignment, taskId: string) {
  return assignment.tasks.find((t) => t.id === taskId) ?? null;
}

// ---------------------------------------------------------------------------
// Client-safe sanitisation (model texts + grading keywords stripped)
// ---------------------------------------------------------------------------

export function toSafeWritingAssignment(assignment: WritingAssignment): SafeWritingAssignment {
  return {
    ...assignment,
    tasks: assignment.tasks.map((task) => {
      if (task.type === "guided") {
        return {
          ...task,
          items: task.items.map(({ id, prompt, audioText, display, format }) => ({
            id,
            prompt,
            ...(audioText ? { audioText } : {}),
            ...(display ? { display } : {}),
            format,
          })),
        };
      }
      const { modelText: _m, modelTextNotes: _n, checklist, conventions, ...rest } = task;
      return {
        ...rest,
        checklist: checklist.map(({ id, label }) => ({ id, label })),
        ...(conventions
          ? { conventions: conventions.map(({ id, label }) => ({ id, label })) }
          : {}),
      };
    }),
  };
}

// ---------------------------------------------------------------------------
// Required kinds (enforced by tests)
// ---------------------------------------------------------------------------

export const REQUIRED_WRITING_KINDS: WritingTaskKind[] = [
  "alphabet-writing",
  "spelling",
  "copying-vocabulary",
  "completing-words",
  "constructing-sentences",
  "rearranging-words",
  "affirmative-sentences",
  "negative-sentences",
  "writing-questions",
  "self-introduction",
  "family-descriptions",
  "daily-routine-writing",
  "describing-place",
  "describing-object",
  "connected-sentences",
  "paragraph-construction",
  "descriptive-writing",
  "narrative-writing",
  "personal-experiences",
  "letters",
  "emails",
  "summaries",
  "short-essays",
  "formal-letters",
  "professional-emails",
  "reports",
  "argumentative-essays",
  "opinion-writing",
  "analytical-writing",
  "structured-reports",
  "professional-communication-writing",
];

export interface WritingIntegrityIssue {
  scope: string;
  message: string;
}

function checkGuidedItem(
  item: GuidedItem,
  scope: string,
  issues: WritingIntegrityIssue[],
): void {
  if (item.acceptedAnswers.length === 0) {
    issues.push({ scope, message: `${item.id} has no accepted answers` });
  }
  if (!item.prompt.trim()) {
    issues.push({ scope, message: `${item.id} has an empty prompt` });
  }
  if (!item.explanation.trim()) {
    issues.push({ scope, message: `${item.id} has no explanation` });
  }
}

export function validateWritingContent(): WritingIntegrityIssue[] {
  const issues: WritingIntegrityIssue[] = [];
  const seenSlugs = new Set<string>();
  const seenKinds = new Set<WritingTaskKind>();

  for (const assignment of writingAssignments) {
    const scope = `assignment ${assignment.slug}`;
    if (seenSlugs.has(assignment.slug)) {
      issues.push({ scope, message: "Duplicate slug" });
    }
    seenSlugs.add(assignment.slug);
    seenKinds.add(assignment.kind);

    if (assignment.tasks.length === 0) {
      issues.push({ scope, message: "No tasks" });
      continue;
    }
    const taskIds = new Set<string>();
    for (const task of assignment.tasks) {
      if (taskIds.has(task.id)) {
        issues.push({ scope, message: `Duplicate task id ${task.id}` });
      }
      taskIds.add(task.id);

      if (task.type === "guided") {
        if (task.items.length === 0) {
          issues.push({ scope, message: `Task ${task.id} has no items` });
        }
        for (const item of task.items) {
          checkGuidedItem(item, `${scope}/${task.id}`, issues);
        }
      } else {
        if (task.minWords <= 0 || task.maxWords < task.minWords) {
          issues.push({ scope, message: `Task ${task.id} has invalid word limits` });
        }
        if (!task.modelText.trim()) {
          issues.push({ scope, message: `Task ${task.id} has no model text` });
        }
        if (task.checklist.length === 0) {
          issues.push({ scope, message: `Task ${task.id} has no checklist` });
        }
        for (const point of task.checklist) {
          if (point.anyOf.length === 0) {
            issues.push({
              scope,
              message: `Task ${task.id} checklist point ${point.id} has no keywords`,
            });
          }
        }
      }
    }
  }

  for (const kind of REQUIRED_WRITING_KINDS) {
    if (!seenKinds.has(kind)) {
      issues.push({ scope: "assignments", message: `Missing required kind ${kind}` });
    }
  }

  return issues;
}

export type { WritingTier };
