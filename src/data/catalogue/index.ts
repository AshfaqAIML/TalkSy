/**
 * TalkSy curriculum catalogue — assembly and dependency graph.
 *
 * Assembles the ten learning levels (stages) of the TalkSy Complete English
 * program, computes program statistics and materialises the full dependency
 * graph (lesson → checkpoint → module exit → stage exit, with the strict
 * level chain and documented knowledge dependencies).
 *
 * The JSON files in this directory are the source of truth and are shaped for
 * database import. Invariant tests live in tests/catalogue.test.ts.
 */

import courseJson from "./course.json";
import st01 from "./st01-foundations.json";
import st02 from "./st02-word-building.json";
import st03 from "./st03-sentence-foundation.json";
import st04 from "./st04-complete-grammar.json";
import st05 from "./st05-sentence-types.json";
import st06 from "./st06-reading-development.json";
import st07 from "./st07-writing-development.json";
import st08 from "./st08-spoken-english.json";
import st09 from "./st09-listening-pronunciation.json";
import st10 from "./st10-advanced-communication.json";
import familyTheme from "./vocabulary/theme-family.json";
import technologyTheme from "./vocabulary/theme-technology.json";
import legacyMappingJson from "./legacy-mapping.json";
import type {
  CourseSpec,
  DependencyGraph,
  GraphEdge,
  GraphNode,
  LessonSpec,
  StageSpec,
  VocabThemeSpec,
  LegacyMapping,
} from "./types";

export * from "./types";

export const course = courseJson as CourseSpec;

export const stages: StageSpec[] = [
  st01 as StageSpec,
  st02 as StageSpec,
  st03 as StageSpec,
  st04 as StageSpec,
  st05 as StageSpec,
  st06 as StageSpec,
  st07 as StageSpec,
  st08 as StageSpec,
  st09 as StageSpec,
  st10 as StageSpec,
];

export const vocabularyThemes: VocabThemeSpec[] = [
  familyTheme as VocabThemeSpec,
  technologyTheme as VocabThemeSpec,
];

export const legacyMapping = legacyMappingJson as LegacyMapping;

/* ------------------------------------------------------------------ */
/* Flat accessors                                                      */
/* ------------------------------------------------------------------ */

export interface CatalogueLesson extends LessonSpec {
  stageId: string;
  moduleId: string;
  unitId: string;
}

/** Every lesson in the catalogue, in program order, with its parents. */
export function allLessons(): CatalogueLesson[] {
  const out: CatalogueLesson[] = [];
  for (const stage of stages) {
    for (const mod of stage.modules) {
      for (const unit of mod.units) {
        for (const lesson of unit.lessons) {
          out.push({ ...lesson, stageId: stage.id, moduleId: mod.id, unitId: unit.id });
        }
      }
    }
  }
  return out;
}

export function findLesson(id: string): CatalogueLesson | undefined {
  return allLessons().find((l) => l.id === id);
}

export interface CatalogueStats {
  stages: number;
  modules: number;
  units: number;
  lessons: number;
  checkpoints: number;
  exitAssessments: number;
  coreMinutes: number;
  assessmentMinutes: number;
  lessonsByCefr: Record<string, number>;
}

export function catalogueStats(): CatalogueStats {
  const stats: CatalogueStats = {
    stages: stages.length,
    modules: 0,
    units: 0,
    lessons: 0,
    checkpoints: 0,
    exitAssessments: 0,
    coreMinutes: 0,
    assessmentMinutes: 0,
    lessonsByCefr: {},
  };
  for (const stage of stages) {
    stats.exitAssessments += 1;
    stats.assessmentMinutes += stage.exitAssessment.minutes;
    stats.modules += stage.modules.length;
    for (const mod of stage.modules) {
      for (const unit of mod.units) {
        stats.units += 1;
        stats.checkpoints += 1;
        for (const lesson of unit.lessons) {
          stats.lessons += 1;
          stats.coreMinutes += lesson.minutes;
          stats.lessonsByCefr[lesson.cefr] = (stats.lessonsByCefr[lesson.cefr] ?? 0) + 1;
        }
      }
    }
  }
  return stats;
}

/* ------------------------------------------------------------------ */
/* Dependency graph materialisation                                    */
/* ------------------------------------------------------------------ */

/**
 * Materialises the complete dependency graph:
 *
 * - `sequence` edges: lesson → next lesson; last lesson → unit checkpoint;
 *   unit checkpoint → next unit's first lesson (within a module); last unit
 *   checkpoint → module exit; module exit → next module's first unit; last
 *   module exit → stage exit.
 * - `entry` edges: a stage's entryRequirements (the previous stage exit) →
 *   the stage's first lesson; plus each lesson's explicit `prerequisites`.
 * - `knowledge` edges: module entryRequirements (documented dependencies)
 *   → the module's first unit.
 *
 * The graph is acyclic by construction; tests verify it.
 */
export function buildDependencyGraph(): DependencyGraph {
  const nodes: GraphNode[] = [
    { id: course.id, kind: "course", label: course.title },
  ];
  const edges: GraphEdge[] = [];

  for (const stage of stages) {
    nodes.push({ id: stage.id, kind: "stage", label: stage.title, cefr: stage.cefr });

    const previousModuleExits: string[] = [];
    for (const mod of stage.modules) {
      nodes.push({ id: mod.id, kind: "module", label: mod.title });

      const previousCheckpoints: string[] = [];
      for (const unit of mod.units) {
        nodes.push({ id: unit.id, kind: "unit", label: unit.title });
        const checkpointId = `${unit.id}-checkpoint`;
        nodes.push({ id: checkpointId, kind: "checkpoint", label: `${unit.title} — checkpoint` });

        let previousLessonId: string | null = null;
        for (const lesson of unit.lessons) {
          nodes.push({
            id: lesson.id,
            kind: "lesson",
            label: lesson.title,
            cefr: lesson.cefr,
            minutes: lesson.minutes,
          });
          if (previousLessonId) {
            edges.push({ from: previousLessonId, to: lesson.id, kind: "sequence" });
          } else {
            // First lesson of a unit: gated by the previous unit's checkpoint
            // (or by module entry for the first unit).
            for (const from of previousCheckpoints) {
              edges.push({ from, to: lesson.id, kind: "sequence" });
            }
            if (previousCheckpoints.length === 0) {
              for (const from of previousModuleExits) {
                edges.push({ from, to: lesson.id, kind: "sequence" });
              }
            }
            // Explicit lesson-level prerequisites (deviations from the chain).
            for (const from of lesson.prerequisites ?? []) {
              edges.push({ from, to: lesson.id, kind: "entry" });
            }
          }
          previousLessonId = lesson.id;
        }

        // Last lesson gates the unit checkpoint.
        if (previousLessonId) {
          edges.push({ from: previousLessonId, to: checkpointId, kind: "sequence" });
        }
        previousCheckpoints.push(checkpointId);
      }

      // Last unit checkpoint gates the module exit.
      const moduleExitId = `${mod.id}-exit`;
      nodes.push({ id: moduleExitId, kind: "exit", label: `${mod.title} — module complete` });
      const lastCheckpoint = previousCheckpoints[previousCheckpoints.length - 1];
      if (lastCheckpoint) {
        edges.push({ from: lastCheckpoint, to: moduleExitId, kind: "sequence" });
      }
      // Documented knowledge dependencies.
      for (const from of mod.entryRequirements ?? []) {
        edges.push({ from, to: mod.id, kind: "knowledge" });
      }
      previousModuleExits.push(moduleExitId);
    }

    // Last module exit gates the stage exit assessment.
    const exitId = stage.exitAssessment.id;
    nodes.push({ id: exitId, kind: "exit", label: stage.exitAssessment.title, cefr: stage.cefr, minutes: stage.exitAssessment.minutes });
    const lastModuleExit = previousModuleExits[previousModuleExits.length - 1];
    if (lastModuleExit) {
      edges.push({ from: lastModuleExit, to: exitId, kind: "sequence" });
    }
    // Strict level chain: stage entry requirements gate the first lesson.
    const firstLessonId = stage.modules[0]?.units[0]?.lessons[0]?.id;
    if (firstLessonId) {
      for (const from of stage.entryRequirements) {
        edges.push({ from, to: firstLessonId, kind: "entry" });
      }
    }
    // Exit unlocks point forward (consistency is asserted in tests).
    for (const to of stage.exitAssessment.unlocks) {
      if (to !== "program-completion") {
        edges.push({ from: exitId, to: to, kind: "entry" });
      }
    }
  }

  const stats = catalogueStats();
  return { nodes, edges, stats };
}

/** Kahn topological check — returns true when the graph is acyclic. */
export function graphIsAcyclic(graph: DependencyGraph): boolean {
  const indegree = new Map<string, number>();
  for (const node of graph.nodes) indegree.set(node.id, 0);
  for (const edge of graph.edges) {
    if (indegree.has(edge.to)) indegree.set(edge.to, (indegree.get(edge.to) ?? 0) + 1);
  }
  const queue = [...indegree.entries()].filter(([, d]) => d === 0).map(([id]) => id);
  let processed = 0;
  while (queue.length > 0) {
    const current = queue.pop() as string;
    processed += 1;
    for (const edge of graph.edges) {
      if (edge.from !== current) continue;
      const next = (indegree.get(edge.to) ?? 0) - 1;
      indegree.set(edge.to, next);
      if (next === 0) queue.push(edge.to);
    }
  }
  return processed === graph.nodes.length;
}
