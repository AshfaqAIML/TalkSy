/**
 * README fact sheet — computes every number quoted in the top-level README
 * directly from the repository (no hand-typed counts). Zero-fabrication
 * backbone: if a number in the README disagrees with this output, the
 * README is wrong.
 *
 * Run: bun scripts/readme-facts.ts
 * (Read-only: queries the seed DB with SELECT-like findMany/count only.)
 */

import { PrismaClient } from "@prisma/client";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

import {
  lessons,
  exercises,
  levels,
  getBlockTypeCoverage,
  getExerciseTypeCoverage,
} from "../src/data/curriculum/index";
import {
  vocabCategories,
  vocabWords,
  vocabContextItems,
} from "../src/data/vocabulary/index";
import { readingTexts } from "../src/data/reading/index";
import { listeningActivities } from "../src/data/listening/index";
import {
  speakingActivities,
  conversationScenarios as speakingScenarios,
  pronunciationItems,
} from "../src/data/speaking/index";
import { writingAssignments as writingAssignmentsList } from "../src/data/writing/index";
import { tutorModes } from "../src/data/tutor/index";
import { CMS_BLOCK_TYPES } from "../src/data/cms/types";

const ROOT = join(import.meta.dir, "..");
const db = new PrismaClient();

const count = (x: unknown) => (Array.isArray(x) ? x.length : Number(x));

function walk(dir: string, pred: (p: string) => boolean): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...walk(p, pred));
    else if (pred(p)) out.push(p);
  }
  return out;
}

async function main() {
  const lines: string[] = [];
  const say = (k: string, v: string | number) =>
    lines.push(`${k.padEnd(46)} ${v}`);

  // --- Division A content (content-as-code) -------------------------------
  say("curriculum.lessons", count(lessons));
  say("curriculum.levels", count(levels));
  say("curriculum.exercises", count(exercises));
  const curTypes = readFileSync(
    join(ROOT, "src/data/curriculum/types.ts"),
    "utf8",
  );
  const blockUnion = curTypes.match(
    /export type LessonBlock =\s*([\s\S]*?);/,
  )?.[1];
  const exUnion = curTypes.match(
    /export type ExerciseType =\s*([\s\S]*?);/,
  )?.[1];
  say(
    "curriculum.blockTypes (union members)",
    (blockUnion?.match(/^\s*\| /gm) ?? []).length,
  );
  say(
    "curriculum.exerciseTypes (union members)",
    (exUnion?.match(/"/g) ?? []).length / 2,
  );
  say("cms.blockKinds (CMS lesson editor)", count(CMS_BLOCK_TYPES));
  const blockCoverage = [...getBlockTypeCoverage().keys()];
  const exerciseCoverage = [...getExerciseTypeCoverage().keys()];
  say("curriculum.blockTypes actually used", blockCoverage.length);
  say("curriculum.exerciseTypes actually used", exerciseCoverage.length);

  // --- Vocabulary ----------------------------------------------------------
  say("vocabulary.categories", count(vocabCategories));
  say("vocabulary.words", count(vocabWords));
  say("vocabulary.contextSentences", count(vocabContextItems));

  // --- Reading / Listening / Speaking / Writing ----------------------------
  say("reading.texts", count(readingTexts));
  say("listening.activities", count(listeningActivities));
  say("speaking.activities", count(speakingActivities));
  say("speaking.scenarios", count(speakingScenarios));
  say("speaking.pronunciationItems", count(pronunciationItems));
  say("writing.assignments", count(writingAssignmentsList));
  say("tutor.modes", count(tutorModes));

  // --- Exam academy (seed database) ---------------------------------------
  const specs = await db.testSpecification.findMany({
    select: { examKey: true, variant: true, version: true, status: true },
    orderBy: [{ examKey: "asc" }, { version: "asc" }],
  });
  say("exam.specs (all versions)", specs.length);
  for (const s of specs)
    say(
      `  spec ${s.examKey}/${s.variant || "-"} v${s.version}`,
      s.status,
    );
  say("exam.rubrics", await db.examRubric.count());
  say("exam.pathways", await db.examPathway.count());
  say("exam.pathwayModules", await db.examPathwayModule.count());
  say("exam.pathwaySteps", await db.examPathwayStep.count());
  const stepRefs = await db.examPathwayStep.findMany({
    select: { refType: true },
  });
  const refTypes = new Map<string, number>();
  for (const r of stepRefs)
    refTypes.set(r.refType, (refTypes.get(r.refType) ?? 0) + 1);
  for (const [t, n] of [...refTypes].sort())
    say(`  step refType=${t}`, n);
  say("exam.mockTests", await db.mockTest.count());
  say("exam.mockSections", await db.mockTestSection.count());
  say("exam.mockQuestions", await db.mockTestQuestion.count());
  const mockTitles = await db.mockTest.findMany({
    select: { title: true, status: true },
  });
  for (const m of mockTitles) say(`  mock "${m.title}"`, m.status);
  say("exam.cmsLevels (seeded CMS course levels)", await db.cmsLevel.count());
  say("exam.cmsLessons (seeded CMS lessons)", await db.cmsLesson.count());
  const users = await db.user.count();
  say("seed.users (demo accounts etc.)", users);

  // --- Repository shape ---------------------------------------------------
  const routes = walk(join(ROOT, "src/app/api"), (p) =>
    p.endsWith("route.ts"),
  );
  say("repo.apiRouteHandlers", routes.length);
  const schema = readFileSync(join(ROOT, "prisma/schema.prisma"), "utf8");
  const allModels = [...schema.matchAll(/^model (\w+) \{/gm)].map((m) => m[1]);
  say("repo.prismaModels", allModels.length);
  const cmsModels = allModels.filter((m) => m.startsWith("Cms"));
  const examModels = allModels.filter((m) =>
    /^(Test|Exam|Mock)/.test(m),
  );
  const accountModels = allModels.filter((m) =>
    ["User", "Session", "AuthThrottle", "PasswordResetToken"].includes(m),
  );
  say("repo.prismaModels.cms", cmsModels.length);
  say("repo.prismaModels.examDomain", examModels.length);
  say("repo.prismaModels.accounts", accountModels.length);
  say(
    "repo.prismaModels.learnerActivity",
    allModels.length - cmsModels.length - examModels.length - accountModels.length,
  );
  const testFiles = walk(join(ROOT, "tests"), (p) =>
    /\.(test|spec)\.ts$/.test(p),
  );
  say("repo.testFiles", testFiles.length);
  const e2eScripts = readdirSync(join(ROOT, "scripts")).filter((f) =>
    f.startsWith("e2e"),
  );
  say("repo.e2eScripts", e2eScripts.length);
  const smokeScripts = readdirSync(join(ROOT, "scripts")).filter((f) =>
    f.startsWith("staging-smoke"),
  );
  say("repo.stagingSmokeScripts", smokeScripts.length);
  const uiComponents = walk(join(ROOT, "src/components/ui"), (p) =>
    p.endsWith(".tsx"),
  );
  say("repo.uiComponents", uiComponents.length);
  const featureComponents = walk(join(ROOT, "src/components/app"), (p) =>
    p.endsWith(".tsx"),
  );
  say("repo.featureComponents", featureComponents.length);
  const libModules = walk(join(ROOT, "src/lib"), (p) => p.endsWith(".ts"));
  say("repo.libModules", libModules.length);
  const docs = readdirSync(join(ROOT, "docs")).filter((f) =>
    f.endsWith(".md"),
  );
  say("repo.docsFiles", docs.length);

  // --- Smoke-check totals quoted by smoke scripts -------------------------
  for (const s of [...smokeScripts.map((f) => join(ROOT, "scripts", f))]) {
    const txt = readFileSync(s, "utf8");
    const m = txt.match(/(\d+)\/(\d+)/);
    if (m) say(`  smoke ${s.split("/").pop()}`, `${m[1]}/${m[2]}`);
  }

  console.log(lines.join("\n"));
  await db.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
