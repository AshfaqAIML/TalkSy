import {
  PROGRAMME_CHAPTERS,
  PROGRAMME_LEVELS,
  PROGRAMME_LESSONS,
  V2_MANIFEST,
  programmeTotals,
  strandCoverage,
  validateProgramme,
  validateV2Standard,
} from "../src/data/programme";

const issues = validateProgramme();
const v2Issues = validateV2Standard();
console.log("Issues:", issues.length + v2Issues.length);
for (const i of [...issues, ...v2Issues].slice(0, 40)) {
  console.log(` - ${i.path}: ${i.message}`);
}
console.log("Totals:", JSON.stringify(programmeTotals()));
for (const level of PROGRAMME_LEVELS) {
  const chapters = PROGRAMME_CHAPTERS.filter((c) => c.levelId === level.id).length;
  const lessons = PROGRAMME_LESSONS.filter((l) => l.chapter.levelId === level.id).length;
  console.log(
    `${level.cefr}: ${chapters} chapters, ${lessons} lessons, strands=${JSON.stringify(strandCoverage(level.id))}`,
  );
}

// PROMPT 35 production manifest — the honest state of every chapter.
const v2Full = V2_MANIFEST.filter((c) => c.standard === "v2-full");
const baseline = V2_MANIFEST.filter((c) => c.standard === "v1-baseline");
console.log(
  `\nv2 production: ${v2Full.length}/56 chapters at the full teaching standard (${v2Full
    .map((c) => c.chapterId)
    .join(", ")}), ${baseline.length} chapters on the v1 baseline (batches ${baseline[0]?.batch}–${baseline[baseline.length - 1]?.batch} planned).`,
);
for (const c of v2Full) {
  console.log(
    `  ${c.chapterId} · ${c.title} — ${c.lessonsUpgraded} lessons upgraded (batch ${c.batch}, ${c.producedAt})`,
  );
}
