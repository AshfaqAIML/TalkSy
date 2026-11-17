/**
 * Builds src/data/catalogue/dependency-graph.json — the full materialised
 * dependency graph of the TalkSy curriculum catalogue (all lesson, checkpoint,
 * module-exit and stage-exit nodes with sequence / entry / knowledge edges).
 *
 * Deterministic output (no timestamps) so it can be committed and diffed.
 * Run: bun scripts/build-catalogue-graph.ts
 */

import { writeFileSync } from "fs";
import { join } from "path";
import { buildDependencyGraph } from "../src/data/catalogue";

const graph = buildDependencyGraph();
const outPath = join(new URL("../src/data/catalogue/", import.meta.url).pathname, "dependency-graph.json");
writeFileSync(outPath, JSON.stringify(graph, null, 2) + "\n");

console.log(
  `dependency-graph.json written: ${graph.nodes.length} nodes, ${graph.edges.length} edges ` +
    `(${graph.stats.lessons} lessons, ${graph.stats.checkpoints} checkpoints, ` +
    `${graph.stats.exitAssessments} stage exits, ${Math.round(graph.stats.coreMinutes / 60)}h core)`
);
