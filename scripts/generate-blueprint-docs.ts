/**
 * Generate the Exam Academy curriculum blueprint documents (PROMPT 42) from
 * the versioned data in src/data/exam-academy/.
 *
 *   bun scripts/generate-blueprint-docs.ts
 *
 * Writes:
 *   docs/exam-academy/CURRICULUM_BLUEPRINT.md          (master)
 *   docs/exam-academy/IELTS_CURRICULUM_BLUEPRINT.md    (PART A + PART C)
 *   docs/exam-academy/TOEFL_CURRICULUM_BLUEPRINT.md    (PART B + PART C)
 *
 * The markdown is generated, not hand-edited: change the data, regenerate.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  ALL_MODULES,
  ALL_PATHWAYS,
  ALL_TOPIC_REQUIREMENTS,
  BLUEPRINT_DATE,
  BLUEPRINT_VERSION,
  IELTS_PATHWAYS,
  IELTS_SCORE_TARGETS,
  TOEFL_COURSE_PLAN,
  TOEFL_ETS_CONCORDANCE,
  TOEFL_PATHWAY,
  TOEFL_SCORE_TARGETS,
  UKVI_GUIDANCE,
  blueprintSummary,
  pathwayStats,
  type ModulePlan,
} from "@/data/exam-academy";
import { SCORE_DISCLAIMER, TOEFL_BELOW_TARGET_NOTE } from "@/data/exam-academy/score-pathways";
import { validateBlueprint } from "@/data/exam-academy/validate";

const OUT_DIR = join(import.meta.dir, "..", "docs", "exam-academy");

// ---------------------------------------------------------------------------
// Verified official basis (retrieval dates recorded per row)
// ---------------------------------------------------------------------------

const OFFICIAL_SOURCES = [
  ["IELTS — test format", "https://ielts.org/take-a-test/test-types/ielts-academic-test", "2026-11-14", "Section timings (L ~30 min · R 60 · W 60 · S 11–14), 2 h 45 total, Speaking/Listening identical across variants"],
  ["IELTS — scoring in detail", "https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail", "2026-11-14", "Overall = mean rounded to nearest half (.25/.75 up); official raw anchors; Writing and Speaking criteria"],
  ["IELTS — General Training Reading format", "https://ielts.org/take-a-test/test-types/ielts-general-training-test/ielts-general-training-format-reading", "2026-11-14", "Section 1 (2–3 short texts), Section 2 (two workplace texts), Section 3 (one long text)"],
  ["IELTS — UKVI / Life Skills", "https://ielts.org/take-a-test/test-types/ielts-tests-for-uk-visas-and-immigration", "2026-11-12", "SELT delivery, Life Skills A1/A2/B1, in-person at approved centres"],
  ["TOEFL — test content", "https://www.ets.org/toefl/test-takers/ibt/about/content.html", "2026-11-12 / 2026-11-14", "Section item counts (50/47/11/12), timings (~30/~29/~8/~23 min), official task names, ~2 h total, adaptive delivery"],
  ["TOEFL — understanding scores", "https://www.ets.org/toefl/test-takers/ibt/scores/understand-scores.html", "2026-11-12", "1–6 scale in half steps; overall = mean of four sections rounded to nearest half band (5.125 → 5.0); 0–120 dual reporting 2026–2028"],
  ["TOEFL — score scale update", "https://www.ets.org/toefl/institutions/ibt/score-scale-update.html", "2026-11-12", "Band ↔ retired 0–120/0–30 concordance and CEFR alignment (reproduced in PART D)"],
] as const;

const V1_BASELINE = {
  ielts: { courses: 3, modules: 10, lessons: 55, minutes: 761, mocks: 26, note: "all mocks sample-length (honestly labelled); pathways 68/60 steps" },
  toefl: { courses: 0, modules: 0, lessons: 0, minutes: 0, mocks: 3, note: "zero dedicated lessons; pathway 22 steps, 11 free-text (TOEFL_CONTENT_AUDIT.md)" },
} as const;

// ---------------------------------------------------------------------------
// Rendering helpers
// ---------------------------------------------------------------------------

const bullets = (items: readonly string[]) => items.map((i) => `- ${i}`).join("\n");
const cell = (s: string | number) => String(s).replace(/\|/g, "\\|");
const row = (cells: Array<string | number>) => `| ${cells.map(cell).join(" | ")} |`;

function table(header: string[], rows: Array<Array<string | number>>): string {
  return [row(header), `| ${header.map(() => "---").join(" | ")} |`, ...rows.map(row)].join("\n");
}

function moduleHeader(mod: ModulePlan, withPathways = true): string {
  const bits = [
    `Course${mod.courses.length > 1 ? "s" : ""}: ${mod.courses.join(" + ")}`,
    `Slug: \`${mod.slug}\``,
  ];
  if (withPathways) bits.push(`Pathways: ${mod.pathways.map((p) => (p === "toefl-ibt" ? "TOEFL iBT" : p === "ielts-academic" ? "IELTS Academic" : "IELTS General Training")).join(", ")}`);
  if (mod.replaces.length > 0) bits.push(`Absorbs v1: ${mod.replaces.map((r) => `\`${r}\``).join(", ")}`);
  return `> ${bits.join(" · ")}`;
}

function renderModule(mod: ModulePlan): string {
  const out: string[] = [];
  out.push(`### ${mod.code} — ${mod.title}`);
  out.push("");
  out.push(moduleHeader(mod));
  out.push("");
  out.push(mod.description);
  out.push("");
  out.push("**Learning objectives**");
  out.push("");
  out.push(bullets(mod.learningObjectives));
  out.push("");
  out.push(
    `**Prerequisites:** ${mod.prerequisites.map((p) => (p === "none" ? "none — open entry" : p === "section-modules" ? "the four section modules of your pathway" : p)).join(", ")} · ` +
      `**Entry level:** ${mod.entryLevel} · **Estimated study time:** ~${mod.estimatedHours} h`,
  );
  out.push("");
  mod.chapters.forEach((ch, i) => {
    out.push(`#### Chapter ${i + 1} — ${ch.title} (\`${ch.slug}\`)`);
    out.push("");
    out.push(table(
      ["Lesson", "Min", "Status", "Focus"],
      ch.lessons.map((l) => [
        `\`${l.slug}\` — ${l.title}`,
        l.minutes,
        l.origin === "existing" ? "existing v1" : "**new**",
        l.focus,
      ]),
    ));
    out.push("");
  });
  out.push("**Practice activities**");
  out.push("");
  out.push(bullets(mod.practiceActivities));
  out.push("");
  out.push("**Assessments**");
  out.push("");
  out.push(bullets(mod.assessments));
  out.push("");
  out.push("**Completion criteria**");
  out.push("");
  out.push(bullets(mod.completionCriteria));
  out.push("");
  return out.join("\n");
}

function coverageMatrix(academy: "ielts" | "toefl"): string {
  const reqs = ALL_TOPIC_REQUIREMENTS.filter((r) => {
    const mod = ALL_MODULES.find((m) => m.code === r.moduleCode);
    return mod?.academy === academy;
  });
  const out: string[] = [];
  for (const req of reqs) {
    const mod = ALL_MODULES.find((m) => m.code === req.moduleCode)!;
    const lessons = mod.chapters.flatMap((c) => c.lessons);
    out.push(`**${req.moduleCode} — ${mod.title.replace(/^Module \d+ — /, "")}** (${req.source})`);
    out.push("");
    out.push(table(
      ["Required topic", "Covered by"],
      req.topics.map((topic) => {
        const covering = lessons.filter((l) => l.topics.includes(topic));
        return [topic, covering.map((l) => `\`${l.slug}\``).join(", ") || "— NOT COVERED —"];
      }),
    ));
    out.push("");
  }
  return out.join("\n");
}

function pathwayModuleTable(pathwayKey: string): string {
  const stats = pathwayStats(ALL_PATHWAYS.find((p) => p.key === pathwayKey)!);
  return table(
    ["Code", "Module", "Chapters", "Lessons", "Existing + new", "Lesson min", "Study h"],
    stats.modules.map((m) => [m.code, m.title, m.chapters, m.lessons, `${m.existingLessons}E + ${m.newLessons}N`, m.minutes, m.estimatedHours]),
  );
}

const GENERATED_NOTE = `> Generated from the versioned blueprint data in \`src/data/exam-academy/\` by \`scripts/generate-blueprint-docs.ts\` — edit the data, then regenerate. Structural guarantees (topic coverage, migration mapping, pathway integrity) are enforced by \`scripts/validate-exam-blueprint.ts\` and \`tests/exam-blueprint.test.ts\`.`;

// ---------------------------------------------------------------------------
// Master document
// ---------------------------------------------------------------------------

function renderMaster(): string {
  const s = blueprintSummary();
  const academic = s.pathways.find((p) => p.key === "ielts-academic")!;
  const general = s.pathways.find((p) => p.key === "ielts-general-training")!;
  const toefl = s.pathways.find((p) => p.key === "toefl-ibt")!;

  const migrationRows = ALL_MODULES.filter((m) => m.replaces.length > 0).map((m) => [
    m.code,
    `\`${m.slug}\``,
    m.replaces.map((r) => `\`${r}\``).join(", "),
  ]);

  const sharedNewLessons = ALL_MODULES.filter((m) => m.academy === "ielts" && m.pathways.length === 2)
    .reduce((a, m) => a + m.chapters.flatMap((c) => c.lessons).filter((l) => l.origin === "new").length, 0);
  const uniqueIeltsNew = academic.newLessons + general.newLessons - sharedNewLessons;
  const stageRows = [
    ["S1a (P0)", "TOEFL teaching programme — author T-M1…T-M7", `${toefl.newLessons} new lessons (${toefl.minutes} min) + Reading/Listening section mocks + TOEFL pathway rewritten with real refIds`, "CONTENT_REPLACEMENT_PLAN.md S1 acceptance criteria apply unchanged"],
    ["S1b (P1)", "IELTS v2 restructure — re-parent the 55 lessons into the ten-module structure, retitle modules, dissolve the six absorbed module shells (upserts, no deletions)", "0 new lessons; seeder migration + \`ielts-academy\` test updates", "Validator: all 55 placed exactly once (already green at blueprint level)"],
    ["S1c (P1)", "IELTS depth lessons — author the new lessons across I-M1…IG-M5", `${uniqueIeltsNew} unique new lessons (${academic.newLessons} on the Academic pathway + ${general.newLessons} on GT; ${sharedNewLessons} shared lessons author once)`, "each ≥180 teaching words, ≥5 blocks, 1–3 bank questions with full feedback; includes the S4 thin-lesson depth pass targets"],
    ["S2 (P1)", "Full-length mocks at official counts, both exams", "IELTS: 1 full-length full mock per variant + per-section; TOEFL: full-length (50/47/11/12) + per-section", "\`lengthLabel: \"full\"\` only at official counts (validator rule)"],
    ["S3 (P1)", "Pathway precision — every step a real reference", "rewrite both IELTS pathways to the v2 module map; 0 steps without refId", "pathway walker test"],
    ["S5 (P2)", "Human review pass", "promote a representative sample from ai-reviewed to human-reviewed with change notes", "review chain in admin; no bulk status writes"],
    ["S6 (P3)", "Pool expansion for six-mode assembly", "grow per-section pools until section-wise practice assembles at official length without repetition", "pool-depth metric in scripts/exam-content-audit.ts"],
  ];

  return `# Exam Academy — Curriculum Blueprint v${BLUEPRINT_VERSION}

**Status:** design baseline, approved for staged implementation · **Date:** ${BLUEPRINT_DATE} · **Supersedes:** the v1 module architecture shipped in the current academy (see §3)
${GENERATED_NOTE}

This is the complete educational blueprint for TalkSy's IELTS and TOEFL academies, built on the current official examination specifications. It defines three IELTS preparation pathways (Academic, General Training, and the UKVI delivery-guidance annex), the seven-module TOEFL iBT academy for the format in force since 21 January 2026, per-module specifications (description, objectives, chapters, lessons, prerequisites, study time, practice, assessments, completion criteria), and the score-target pathways from IELTS Band 5.0 to 8.5+ and TOEFL Bands 3.0–6.0.

- **PART A (IELTS) and PART C detail:** \`IELTS_CURRICULUM_BLUEPRINT.md\`
- **PART B (TOEFL) and PART C detail:** \`TOEFL_CURRICULUM_BLUEPRINT.md\`
- **PART D (score targets):** §7 below
- **Companion audits:** \`IELTS_CONTENT_AUDIT.md\`, \`TOEFL_CONTENT_AUDIT.md\`, \`CONTENT_REPLACEMENT_PLAN.md\` (PROMPT 41)

## 1. Official reference basis

The blueprint rests on the providers' own pages (retrieval dates recorded); preparation blogs were used only to cross-check reproductions of ETS-published tables, never as authority. In the application itself, the three active \`TestSpecification\` rows remain the only source of exam rules (the existing ADR).

${table(["Examination", "Official source", "Retrieved", "What it anchors"], OFFICIAL_SOURCES.map((r) => [r[0], r[1], r[2], r[3]]))}

## 2. Design principles

1. **Official specifications are the foundation.** Task types, item counts, timings and scoring rules come from ielts.org and ets.org with recorded retrieval dates. Where a provider publishes no table (TOEFL raw-to-band), the platform's practice conversions are labelled as estimates — never presented as official.
2. **Educational substance before surface.** Every module below is defined with objectives, lessons, practice, assessments and completion criteria before any UI work. PROMPT 41's red line carries forward: no UI cards for content that does not exist.
3. **Honest labelling everywhere.** \`reviewStatus\` never claims human review that did not happen; \`lengthLabel: "full"\` only at official item counts; no guaranteed scores anywhere (see §7 disclaimer).
4. **Shared where the test is shared; distinct where it differs.** IELTS Listening and Speaking are shared across variants (identical tests); Reading and Writing are strictly per track with separate banks (test-enforced). IELTS and TOEFL pools never mix.
5. **Migration without deletion.** All 55 live IELTS lessons are re-parented and kept — the validator asserts every live lesson is placed exactly once, and no TOEFL lesson is marked "existing" (the v1 academy had none).
6. **Machine-checked completeness.** The mandated topic lists are encoded as requirements; \`scripts/validate-exam-blueprint.ts\` fails if any topic lacks a covering lesson. At v${BLUEPRINT_VERSION}: ${ALL_TOPIC_REQUIREMENTS.reduce((a, r) => a + r.topics.length, 0)} topics checked, 0 uncovered.
7. **Original material, trademark discipline.** All mock and practice material is original and labelled "not an official IELTS paper / ETS test"; IELTS and TOEFL are trademarks of their respective owners and are referenced only descriptively.

## 3. Current state → target state

The PROMPT 41 audits established the baseline; nothing there is claimed fixed by this document — the blueprint defines the target the implementation stages build toward.

${table(
  ["Pathway", "v1 (audited)", "v2 (this blueprint)", "New lessons to author"],
  [
    ["IELTS Academic", `${V1_BASELINE.ielts.modules} modules · ${V1_BASELINE.ielts.lessons} lessons · ${V1_BASELINE.ielts.minutes} min · ${V1_BASELINE.ielts.mocks} mocks (sample-length)`, `${academic.modules.length} modules · ${academic.lessons} lessons · ${academic.minutes} min teaching · ~${academic.estimatedHours} h study`, `${academic.newLessons} (31 unique Academic+shared)`],
    ["IELTS General Training", `shares ${V1_BASELINE.ielts.lessons - 8} of the v1 lessons · 8 GT lessons · ${V1_BASELINE.ielts.mocks - 14} GT mocks`, `${general.modules.length} modules · ${general.lessons} lessons · ${general.minutes} min teaching · ~${general.estimatedHours} h study`, `${general.newLessons} (24 incl. shared; 4 GT-unique)`],
    ["TOEFL iBT", `${V1_BASELINE.toefl.lessons} lessons · ${V1_BASELINE.toefl.mocks} mocks · ${V1_BASELINE.toefl.note}`, `${toefl.modules.length} modules · ${toefl.lessons} lessons · ${toefl.minutes} min teaching · ~${toefl.estimatedHours} h study`, `${toefl.newLessons} (all new)`],
  ],
)}

Totals: ${s.moduleDefinitions} module definitions · ${s.lessonDefinitions} lesson definitions (${s.existingLessons} existing + ${s.newLessons} new) · ${s.newTeachingMinutes} new teaching minutes (~${(s.newTeachingMinutes / 60).toFixed(1)} h) to author, plus bank questions (1–3 per lesson), timed assignments, and the S2 mock programme.

## 4. Architecture — connection to the existing TalkSy curriculum system

The blueprint plugs into the existing authored-data → seeder → CMS pipeline unchanged; it adds no new runtime concepts.

**Content pipeline.** Courses are authored as typed data (\`CourseSpec\` → \`ModuleSpec\` → \`UnitSpec\` → \`LessonSpec\` in \`src/data/exams/\`), seeded into the CMS chain (\`CmsCourse\` → \`CmsModule\` → \`CmsUnit\` → \`CmsLesson\` → blocks) by \`scripts/seed-exams.ts\` (idempotent, additive, \`ai-reviewed\` convention), and become editable admin content. Every lesson carries teaching blocks, 1–3 bank questions with full feedback payloads, and where relevant a timed assignment and homework. New lessons follow the S1 authoring conventions (≥180 teaching words, ≥5 blocks, 1–3 questions).

**Course plan (target state).**

${table(
  ["CMS course", "Level", "Modules"],
  [
    ["\`ielts-academy-core\`", "ielts-preparation", "I-M1, I-M2, I-M6, I-M7, I-M8, I-M9, I-M10 (shared across variants)"],
    ["\`ielts-academy-academic\`", "ielts-preparation", "IA-M3, IA-M4, IA-M5"],
    ["\`ielts-academy-general-training\`", "ielts-preparation", "IG-M3, IG-M4, IG-M5"],
    ["\`toefl-ibt-academy\` (new)", "toefl-preparation (new)", "T-M1 … T-M7"],
  ],
)}

**Migration map (re-parenting, never deletion).** Six v1 module shells dissolve as their units/lessons move; four module slugs are retained with retitled numbers. Lesson slugs, blocks, bank questions, assignments and homework are untouched by the restructure.

${table(["Target module", "Target slug", "Absorbs v1"], migrationRows)}

**Practice, mocks and scoring (already built, reused as-is).** The six-mode practice engine assembles section mocks from the published pools; \`MockSeed\` mocks carry difficulty, post-submission explanations, \`source: original-practice\`, \`rubricKey\` on constructed tasks, and server-only answer keys; the evaluation service grades writing/speaking against the \`ielts.writing\`/\`ielts.speaking\` (9→3) and \`toefl.writing\`/\`toefl.speaking\` (6→1) rubrics; band conversions follow the active specifications (IELTS official rounding; TOEFL practice conversions, honestly labelled). \`ExamPathway\` steps reference lessons, labs and mocks by \`refType\`/\`refId\` — S3 makes every step resolve to its exact target.

## 5. IELTS Academy structure (PART A overview)

Three preparation pathways. Academic and General Training each run ten modules in the PROMPT 42 structure; Listening and Speaking (identical tests) plus Fundamentals, the language/band module and Full Examination Practice are shared; Reading and Writing are strictly distinct per track. **IELTS for UKVI** is a delivery-guidance annex, not a parallel curriculum (same test under SELT conditions).

**IELTS Academic pathway** — modules: ${IELTS_PATHWAYS.find((p) => p.key === "ielts-academic")!.modules.join(" → ")}.

${pathwayModuleTable("ielts-academic")}

**IELTS General Training pathway** — modules: ${IELTS_PATHWAYS.find((p) => p.key === "ielts-general-training")!.modules.join(" → ")}.

${pathwayModuleTable("ielts-general-training")}

**IELTS for UKVI — preparation guidance (where applicable).** ${UKVI_GUIDANCE.summary}

${bullets(UKVI_GUIDANCE.guidance)}

Source: ${UKVI_GUIDANCE.sourceLabel} (${UKVI_GUIDANCE.sourceUrl}).

## 6. TOEFL iBT Academy structure (PART B overview)

Built around the format effective **21 January 2026** (verified against ets.org — §1):

${table(
  ["Section", "Items", "Timing", "Task types (official names)", "Delivery"],
  [
    ["Reading", "50", "~30 min", "Complete the Words · Read in Daily Life · Read an Academic Passage", "Two-stage adaptive"],
    ["Listening", "47", "~29 min", "Listen and Choose a Response · Listen to a Conversation · Listen to an Announcement · Listen to an Academic Talk", "Two-stage adaptive, forward-only"],
    ["Speaking", "11", "~8 min", "Listen and Repeat (7 sentences, 8/10/12 s windows) · Take an Interview (4 items)", "Linear"],
    ["Writing", "12", "~23 min", "Build a Sentence (10) · Write an Email · Write for an Academic Discussion", "Linear"],
  ],
)}

~90 minutes of timed sections; allow ~2 hours overall (times and item counts vary as the test adapts). Scoring: section bands 1.0–6.0 in half steps; overall = mean of the four sections rounded to the nearest half band; CEFR printed on the report; a comparable 0–120 score dual-reported during the 2026–2028 transition. No pass mark — institutions set minimums.

**TOEFL iBT pathway** — modules: ${TOEFL_PATHWAY.modules.join(" → ")} · course \`${TOEFL_COURSE_PLAN.course.slug}\` ("${TOEFL_COURSE_PLAN.course.title}") under the new \`${TOEFL_COURSE_PLAN.level.slug}\` level.

${pathwayModuleTable("toefl-ibt")}

## 7. Score target pathways (PART D)

${SCORE_DISCLAIMER}

### IELTS — Band 5.0 → 8.5+

Official raw-score anchors (out of 40, ielts.org): Listening Band 5/6/7/8 = 16/23/30/35 · Academic Reading = 15/23/30/35 · **GT Reading = 15 (Band 4) / 23 (Band 5) / 30 (Band 6) / 35 (Band 7)** — GT needs more raw marks than Academic for the same band. Overall = mean of the four section bands; .25 rounds up to .5, .75 up to the next whole band.

${IELTS_SCORE_TARGETS.map((t) => `**Band ${t.band} — ${t.label} (${t.cefr})** — ${t.typicalRequirement} Entry profile: ${t.entryProfile}. Anchors: ${t.rawAnchors}. Strategy: ${t.sectionStrategy} Emphasis: ${t.emphasisModules.join(", ")} (ladder lesson${t.ladderLessons.length > 1 ? "s" : ""}: ${t.ladderLessons.map((l) => `\`${l}\``).join(", ")}). Practice: ${t.practiceVolume} Estimated effort: **${t.estimatedHours}**.`).join("\n\n")}

### TOEFL iBT — Bands 3.0 → 6.0 on the 1–6 scale

${TOEFL_BELOW_TARGET_NOTE} Overall = mean of the four section bands rounded to the nearest half band (ETS examples: 5.125 → 5.0; 5.25 → 5.5). Reading and Listening are adaptive and machine-scored; Speaking and Writing are rated against the scoring guides.

${TOEFL_SCORE_TARGETS.map((t) => `**Band ${t.band} (${t.cefr}; comparable ${t.legacyTotal})** — ${t.typicalRequirement} Entry profile: ${t.entryProfile}. Strategy: ${t.sectionStrategy} Emphasis: ${t.emphasisModules.join(", ")}. Practice: ${t.practiceVolume} Estimated effort: **${t.estimatedHours}**.`).join("\n\n")}

**ETS concordance — 1–6 bands against the retired 0–120 scale** (dual-reported 2026–2028; reproduced from ETS's published table):

${table(["Band", "CEFR", "Total (0–120)", "Reading", "Listening", "Speaking", "Writing"], TOEFL_ETS_CONCORDANCE.map((c) => [c.band, c.cefr, c.total, c.reading, c.listening, c.speaking, c.writing]))}

## 8. Workload and implementation sequencing

**New lessons by module.**

${table(
  ["Module", "New lessons", "New minutes"],
  ALL_MODULES.map((m) => {
    const lessons = m.chapters.flatMap((c) => c.lessons).filter((l) => l.origin === "new");
    return [`${m.code} — ${m.title}`, lessons.length, lessons.reduce((a, l) => a + l.minutes, 0)];
  }).filter((r) => (r[1] as number) > 0),
)}

**Sequencing** (extends \`CONTENT_REPLACEMENT_PLAN.md\`; priorities preserved, S1's six-module sketch superseded by the PROMPT 42 seven-module structure):

${table(["Stage", "Scope", "Size", "Acceptance"], stageRows.filter((r) => r[2]))}

**Mock and practice requirements (S2).** Current: 26 IELTS mocks (sample-length) + 3 TOEFL mocks, all honestly labelled. Target: IELTS — one full-length mock per variant (Listening 40 items/4 parts; Reading 40 items over 3 passages totalling 2,150–2,750 words Academic / the three official GT sections; Writing 20/40 split; Speaking Parts 1–3) plus full-length section mocks for every section; TOEFL — one full-length mock at official counts (50/47/11/12) plus per-section full-length mocks; both exams keep per-item difficulty, explanations and rubric references on every new item.

## 9. Versioning policy

- This blueprint: semver (\`BLUEPRINT_VERSION\`). MAJOR = module-set/structure changes; MINOR = lessons added or re-parented within the structure; PATCH = wording/minutes corrections. Every change regenerates these documents.
- Examination specifications follow the existing admin versioning workflow (draft → active → retired; attempts pin their spec). If a provider changes format again, the change flows through spec versions and then a blueprint MINOR/MAJOR — never by editing mocks in place.
- The classification scale from PROMPT 41 (A placeholder → E reviewed) still applies to every content item this blueprint produces; nothing is "E" until the S5 human review chain actually runs.
`;
}

// ---------------------------------------------------------------------------
// IELTS document (PART A + PART C detail)
// ---------------------------------------------------------------------------

function renderIelts(): string {
  const ieltsModules = ALL_MODULES.filter((m) => m.academy === "ielts");
  const shared = ieltsModules.filter((m) => m.pathways.length === 2);
  const academic = ieltsModules.filter((m) => m.code.startsWith("IA-"));
  const general = ieltsModules.filter((m) => m.code.startsWith("IG-"));
  const render = (mods: ModulePlan[]) => mods.map(renderModule).join("\n");

  return `# IELTS Academy — Curriculum Blueprint v${BLUEPRINT_VERSION}

**Date:** ${BLUEPRINT_DATE} · PART A (pathways) + PART C (module specifications) · Master document: \`CURRICULUM_BLUEPRINT.md\`
${GENERATED_NOTE}

## 1. Pathway configurations

${IELTS_PATHWAYS.map((p) => `### ${p.title}\n\n${p.summary}\n\n**Module order:** ${p.modules.join(" → ")}\n\n${bullets(p.configuration)}`).join("\n\n")}

### IELTS for UKVI — preparation guidance (where applicable)

${UKVI_GUIDANCE.summary}

${bullets(UKVI_GUIDANCE.guidance)}

Source: ${UKVI_GUIDANCE.sourceLabel} (${UKVI_GUIDANCE.sourceUrl}).

## 2. Shared modules (both pathways — the Listening and Speaking tests are identical across variants)

${render(shared)}

## 3. Academic track modules (IELTS Academic only — distinct content, bank and mocks)

${render(academic)}

## 4. General Training track modules (IELTS General Training only — never reused from Academic)

${render(general)}

## 5. Topic coverage matrix (machine-checked)

Every topic mandated by PROMPT 42 PART A, mapped to the lessons that cover it. \`scripts/validate-exam-blueprint.ts\` fails the build if any row reads NOT COVERED.

${coverageMatrix("ielts")}
`;
}

// ---------------------------------------------------------------------------
// TOEFL document (PART B + PART C detail)
// ---------------------------------------------------------------------------

function renderToefl(): string {
  const toeflModules = ALL_MODULES.filter((m) => m.academy === "toefl");
  return `# TOEFL iBT Academy — Curriculum Blueprint v${BLUEPRINT_VERSION}

**Date:** ${BLUEPRINT_DATE} · PART B (2026-format academy) + PART C (module specifications) · Master document: \`CURRICULUM_BLUEPRINT.md\`
${GENERATED_NOTE}

## 1. Foundation: the format in force since 21 January 2026

Verified against ets.org (test content page, retrieved 2026-11-12 and 2026-11-14; see the active \`TOEFL_IBT/STANDARD\` specification and its source refs). The 2026 task types below are the official names; the platform's internal task-type keys map onto them (\`COMPLETE_WORDS\` → Complete the Words, \`SENTENCE_RECONSTRUCTION\` → Build a Sentence, and so on).

${table(
  ["Section", "Items", "Timing", "Task types (official names)", "Delivery"],
  [
    ["Reading", "50", "~30 min", "Complete the Words · Read in Daily Life · Read an Academic Passage", "Two-stage adaptive"],
    ["Listening", "47", "~29 min", "Listen and Choose a Response · Listen to a Conversation · Listen to an Announcement · Listen to an Academic Talk", "Two-stage adaptive, forward-only"],
    ["Speaking", "11", "~8 min", "Listen and Repeat (7 sentences, 8/10/12 s windows) · Take an Interview (4 items)", "Linear"],
    ["Writing", "12", "~23 min", "Build a Sentence (10) · Write an Email · Write for an Academic Discussion", "Linear"],
  ],
)}

~90 minutes of timed sections; allow ~2 hours overall; item counts and time vary as the test adapts. Scoring: section bands 1.0–6.0 in half steps; overall = mean rounded to the nearest half band; CEFR printed on the report; comparable 0–120 score dual-reported during the 2026–2028 transition; MyBest superscoring across valid tests; scores within ~72 hours; two-year validity; no pass mark.

## 2. Pathway configuration

### ${TOEFL_PATHWAY.title}

${TOEFL_PATHWAY.summary}

**Module order:** ${TOEFL_PATHWAY.modules.join(" → ")}

${bullets(TOEFL_PATHWAY.configuration)}

**Course plan:** \`${TOEFL_COURSE_PLAN.course.slug}\` — "${TOEFL_COURSE_PLAN.course.title}" under the new \`${TOEFL_COURSE_PLAN.level.slug}\` CMS level ("${TOEFL_COURSE_PLAN.level.name}").

${TOEFL_COURSE_PLAN.course.description}

## 3. Modules (all new authoring — the v1 academy had zero TOEFL lessons)

${toeflModules.map(renderModule).join("\n")}

## 4. Topic coverage matrix (machine-checked)

Every topic mandated by PROMPT 42 PART B, mapped to the lessons that cover it. \`scripts/validate-exam-blueprint.ts\` fails the build if any row reads NOT COVERED.

${coverageMatrix("toefl")}
`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const validation = validateBlueprint();
if (validation.issues.length > 0) {
  console.error("Blueprint validation failed — docs not generated:");
  for (const issue of validation.issues) console.error(`  - ${issue}`);
  process.exit(1);
}

mkdirSync(OUT_DIR, { recursive: true });
const docs: Array<[string, string]> = [
  ["CURRICULUM_BLUEPRINT.md", renderMaster()],
  ["IELTS_CURRICULUM_BLUEPRINT.md", renderIelts()],
  ["TOEFL_CURRICULUM_BLUEPRINT.md", renderToefl()],
];
for (const [name, content] of docs) {
  writeFileSync(join(OUT_DIR, name), content, "utf8");
  console.log(`Wrote docs/exam-academy/${name} (${content.split("\n").length} lines)`);
}
console.log(`Blueprint v${BLUEPRINT_VERSION}: ${validation.stats.lessons} lessons (${validation.stats.existingLessons} existing + ${validation.stats.newLessons} new), 0 validation issues.`);
