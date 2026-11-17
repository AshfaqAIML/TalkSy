/**
 * Generates docs/CURRICULUM_CATALOGUE.md from the catalogue data files.
 * The data in src/data/catalogue is the source of truth; this document is
 * its human-readable rendering — regenerate after any catalogue change.
 *
 * Run: bun scripts/generate-catalogue-doc.ts
 */

import { writeFileSync } from "fs";
import { join } from "path";
import {
  course,
  stages,
  catalogueStats,
  vocabularyThemes,
  legacyMapping,
} from "../src/data/catalogue";

function esc(text: string): string {
  return text.replace(/\|/g, "\\|");
}

function stageSection(stage: (typeof stages)[number]): string {
  const lines: string[] = [];
  const lessons = stage.modules.reduce(
    (sum, m) => sum + m.units.reduce((s, u) => s + u.lessons.length, 0),
    0
  );
  const units = stage.modules.reduce((sum, m) => sum + m.units.length, 0);
  const minutes = stage.modules.reduce(
    (sum, m) => sum + m.units.reduce((s, u) => s + u.lessons.reduce((t, l) => t + l.minutes, 0), 0),
    0
  );

  lines.push(`### ${stage.id.toUpperCase()} · ${stage.title} — ${esc(stage.cefr)}`);
  lines.push("");
  lines.push(`> **Goal.** ${esc(stage.goal)}`);
  lines.push("");
  lines.push(
    `**Entry requirements:** ${
      stage.entryRequirements.length > 0 ? stage.entryRequirements.join(", ") : "none (program start)"
    } · **Modules:** ${stage.modules.length} · **Units:** ${units} · **Lessons:** ${lessons} · **Core time:** ~${Math.round(minutes / 6) / 10}h`
  );
  lines.push("");

  for (const mod of stage.modules) {
    lines.push(`#### ${mod.id.toUpperCase()} — ${esc(mod.title)}`);
    lines.push("");
    lines.push(`*${esc(mod.description)}*`);
    if (mod.entryRequirements && mod.entryRequirements.length > 0) {
      lines.push("");
      lines.push(`*Knowledge dependencies: ${mod.entryRequirements.join(", ")}.*`);
    }
    lines.push("");
    for (const unit of mod.units) {
      lines.push(`**${unit.id.toUpperCase()} · ${esc(unit.title)}**`);
      lines.push("");
      lines.push("| Lesson | Title | CEFR | Min | Skills |");
      lines.push("| --- | --- | --- | --- | --- |");
      for (const lesson of unit.lessons) {
        lines.push(
          `| \`${lesson.id}\` | ${esc(lesson.title)} — ${lesson.objectives
            .slice(0, 2)
            .map(esc)
            .join("; ")} | ${lesson.cefr} | ${lesson.minutes} | ${lesson.skills.join(", ")} |`
        );
      }
      lines.push("");
      lines.push(
        `*Checkpoint (pass ≥ ${unit.checkpoint.passThreshold}%): ${esc(unit.checkpoint.criteria)}.*`
      );
      lines.push("");
    }
  }

  lines.push(
    `> **${stage.exitAssessment.title}** (\`${stage.exitAssessment.id}\`, ${
      stage.exitAssessment.minutes
    } min, pass ≥ ${stage.exitAssessment.passThreshold}%, unlocks ${stage.exitAssessment.unlocks.join(", ")}): ${esc(
      stage.exitAssessment.criteria
    )}`
  );
  lines.push("");
  return lines.join("\n");
}

function main(): void {
  const stats = catalogueStats();
  const byCefr = stats.lessonsByCefr;
  const parts: string[] = [];

  parts.push(`# TalkSy — Curriculum Catalogue

> **Naming.** The product is **TalkSy**. The former working name "EnglishPath" is retired; any historical reference to it means TalkSy.

| | |
| --- | --- |
| **Course** | ${course.title} (\`${course.id}\`) v${course.version} |
| **Structure** | Course → Learning Level (Stage) → Module → Unit → Lesson → Practice → Assessment |
| **Scale** | ${stats.stages} levels · ${stats.modules} modules · ${stats.units} units · ${stats.lessons} lessons · ${Math.round(stats.coreMinutes / 6) / 10}h core + ${Math.round(stats.assessmentMinutes / 6) / 10}h assessment |
| **CEFR span** | Pre-A1 → C1 (lessons: ${Object.entries(byCefr).map(([k, v]) => `${k} ${v}`).join(" · ")}) |
| **Source of truth** | \`src/data/catalogue/*.json\` (database-import shaped) · full graph: \`src/data/catalogue/dependency-graph.json\` |
| **Licence** | ${course.contentLicence} |

---

## 1. Purpose and how to read this document

This catalogue is the **complete, dependency-aware educational structure** of the TalkSy English program: every learning level, module, unit and lesson from absolute zero to C1, with objectives, prerequisites, durations, practice composition, assessment criteria and four-skill connections.

It specifies WHAT is taught, in WHAT order, and what must be demonstrated before content unlocks. Full lesson content (vocab cards, dialogues, passages, exercise instances) is authored per release train against these specifications, following the lesson anatomy and integrity gates in [CURRICULUM_BLUEPRINT.md](CURRICULUM_BLUEPRINT.md).

**Design position.** TalkSy is a digital English academy, not a grammar website. Stages 1–5 build the language system (literacy → words → sentences → complete grammar → sentence control); stages 6–9 apply it across the four skills; stage 10 integrates it into advanced communication. Every lesson mixes skills and requires real production — watching is never enough.

## 2. The learning pathway

\`\`\`
Core Language Spine (strictly sequential)          Skills Tracks (parallel-eligible)
ST01 Absolute Zero → ST02 Words → ST03 Sentences   after ST05, in any order / concurrently:
→ ST04 Complete Grammar → ST05 Sentence Types        ST06 Reading · ST07 Writing
                                                      ST08 Speaking · ST09 Listening
                                                    then: ST10 Advanced Communication → C1
\`\`\`

- **Stages 1–5 — the spine.** Each stage certifies through an exit assessment (≥ 75%) that unlocks the next. Lessons chain through unit checkpoints; nothing unlocks early.
- **Stages 6–9 — the skills tracks.** Unlocked together by the ST05 exit. Their modules carry *knowledge dependencies* on earlier stages (documented per module below) which drive placement diagnostics and the "recommended after" affordance — the tracks may be taken in any order or concurrently.
- **Stage 10 — integration.** Requires the spine and the four tracks; completing it certifies the program at C1.

![Curriculum dependency map](assets/curriculum-dependency-graph.png)

**CEFR mapping and PRD alignment.** Completing ST01–ST05 plus the mid-band modules of the tracks corresponds to the PRD's B1 curriculum (FR-CURR-05); the upper-band modules and ST10-M01/M02 correspond to B2 (FR-CURR-06); full program completion corresponds to C1 (FR-CURR-07). Requirement IDs refer to [PRODUCT_REQUIREMENTS.md](PRODUCT_REQUIREMENTS.md).

## 3. Assessment architecture

| Layer | What it is | Threshold | Gates |
| --- | --- | --- | --- |
| Lesson practice | The exercise set inside every lesson (all four skills per the methodology) | ≥ 70% first-attempt target | Lesson completion |
| Unit checkpoint | Mastery quiz at the end of every unit (${stats.checkpoints} total) | ≥ 80% | Next unit |
| Stage exit test | Certification at the end of every level (${stats.exitAssessments} total) | ≥ 75% | Next stage (tracks: ST05 → ST06–ST09 → ST10) |
| Program completion | ST10 exit assessment | ≥ 75% | TalkSy Complete English certificate (C1) |

**Unlock rule.** A lesson unlocks only when all prerequisite nodes are satisfied: the previous lesson, gated by the unit checkpoint, chained through module exits to the stage exit, and the strict stage entry requirements. **Diagnostic override:** a placement assessment (PRD FR-ASM-01) that demonstrates mastery at or above a node's band unlocks that node — and everything it gates — without marking anything complete (honest-progress rule). Skipped content stays open for review forever.

**Honesty rules carried through.** Speaking is practice, never a quiz penalty; pronunciation is graded for intelligibility, never native-likeness; meaning-first — every grammar item asks what the sentence communicates, not only its form; English spelling patterns are taught together with their exceptions, never as a perfectly regular system.

## 4. Content standards

**Lesson anatomy** (authored per release train): 6–10 vocab items · dialogue (two voices, slow replay) · grammar in context · optional passage · ≥ 7 exercises covering mcq, fill, order, match, listen, speak (listen + speak mandatory in every lesson — test-enforced) · 8–15 minutes. Practice descriptors in the catalogue (e.g. \`transformation-drill\`, \`role-play\`, \`dictation\`) define the exercise mix each lesson must implement.

**Tense coverage.** Every tense unit spans two lessons — *Form and Meaning* (structure, affirmative, negative, interrogative, WH-questions, verb forms, auxiliary verbs) and *Use and Practice* (meaning and use, time expressions, everyday examples, dialogue examples, common mistakes, translation exercises, sentence transformation, speaking and writing practice) — so all fifteen required attributes are covered for each of the twelve tenses, always meaning-first.

**Vocabulary standard — every item carries 12 fields.** Word · phonetic (IPA where available) · audio pronunciation (TTS, no external keys) · simple-English definition · optional support-language translation · example sentence · part of speech · related words · common collocations · difficulty (CEFR) · revision status (import-time \`new\`; live status is the per-learner Leitner strength in \`VocabularyProgress\`) · stable id (\`{unitId}-w{nn}\`). Two exemplar theme sets are fully authored to this standard: Family (\`vocabulary/theme-family.json\`, 16 items) and Technology (\`vocabulary/theme-technology.json\`, 12 items). Sample item:

\`\`\`json
${JSON.stringify(vocabularyThemes[0].items[1], null, 2)}
\`\`\`

## 5. Stage catalogue

${stages.map((stage) => stageSection(stage)).join("\n---\n\n")}

## 6. Legacy content mapping

The 36 lessons of the original A1/A2 curriculum map into this catalogue as follows (full detail in \`legacy-mapping.json\`; completion records migrate with the first target id, so no learner loses credit):

| Legacy lesson | Legacy title | Catalogue target(s) |
| --- | --- | --- |
${legacyMapping.entries
  .map((e) => `| \`${e.legacySlug}\` | ${esc(e.legacyTitle)} | ${e.targets.map((t) => `\`${t}\``).join(", ")} |`)
  .join("\n")}

## 7. Database import notes

- **Files.** One JSON per stage (\`st01\`–\`st10\`) + \`course.json\` + \`vocabulary/*.json\` + \`legacy-mapping.json\` + the generated \`dependency-graph.json\` (full materialised graph: ${stats.lessons} lesson nodes, ${stats.checkpoints} checkpoint nodes, module and stage exits, sequence/entry/knowledge edges — validated acyclic).
- **Keys.** All ids (\`st{nn}-m{nn}-u{nn}-l{nn}\`, vocab \`-w{nn}\`) are stable and must never be renamed — they are the foreign keys of \`LessonCompletion\`, \`ExerciseAttempt\` and \`VocabularyProgress\`.
- **Invariants.** \`tests/catalogue.test.ts\` (22 tests) enforces: unique ids, prerequisite resolution, acyclicity, the strict stage chain, checkpoint and exit coverage, lesson metadata completeness, the vocabulary 12-field standard, and the completeness of the legacy mapping.
- **Validation command.** \`bun test\` runs the catalogue suite together with the existing curriculum tests.

---

*Generated from the catalogue data by \`scripts/generate-catalogue-doc.ts\` — regenerate after any data change.*
`);

  const outPath = join(new URL("../docs/", import.meta.url).pathname, "CURRICULUM_CATALOGUE.md");
  writeFileSync(outPath, parts.join(""));
  console.log(
    `CURRICULUM_CATALOGUE.md written: ${stats.stages} stages, ${stats.modules} modules, ${stats.units} units, ${stats.lessons} lessons`
  );
}

main();
