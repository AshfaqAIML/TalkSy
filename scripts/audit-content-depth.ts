#!/usr/bin/env bun
/**
 * PROMPT 57 — educational depth audit.
 *
 * Unlike the PROMPT 56 structural completeness audit (which checks that
 * sections EXIST), this measures whether a lesson genuinely teaches:
 * real explanation volume, worked examples with notes, mistake analysis,
 * practice with explanations, and honest depth-per-minute ratios.
 *
 * Usage:
 *   bun scripts/audit-content-depth.ts            # audit the dev database
 *   bun scripts/audit-content-depth.ts --json     # machine-readable output
 */
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
const JSON_MODE = process.argv.includes("--json");

const words = (t: string | null | undefined) =>
  (t ?? "").split(/\s+/).filter(Boolean).length;

interface Signals {
  teachingWords: number; // explanation-type blocks only
  totalWords: number; // everything
  workedExamples: number; // example items across example/usage/steps blocks
  examplesWithNotes: number;
  domains: Set<string>;
  mistakeItems: number; // wrong→right→reason triples
  practiceQuestions: number; // questions in practice blocks
  practiceWithExplanations: number; // attached exercise rows with explanation
  revisionItems: number;
  audioBlocks: number;
  fourSkills: boolean;
  summaryPoints: number;
  tableRows: number;
  dialogueLines: number;
}

function collect(block: { type: string; data: string }, s: Signals): void {
  let d: Record<string, unknown>;
  try {
    d = JSON.parse(block.data);
  } catch {
    return;
  }
  const countWords = (v: unknown): number => {
    if (typeof v === "string") return words(v);
    if (Array.isArray(v)) return v.reduce<number>((n, x) => n + countWords(x), 0);
    if (v && typeof v === "object") return countWords(Object.values(v));
    return 0;
  };
  s.totalWords += countWords(d);
  switch (block.type) {
    case "text":
    case "lesson-intro":
    case "note":
    case "grammar-rule":
      s.teachingWords += countWords(d);
      break;
    case "steps":
      s.teachingWords += countWords((d as { steps?: unknown }).steps);
      for (const st of ((d as { steps?: Record<string, unknown>[] }).steps ?? []))
        for (const ex of ((st as { examples?: unknown[] }).examples ?? [])) {
          s.workedExamples += 1;
          if ((ex as { note?: string }).note) s.examplesWithNotes += 1;
        }
      break;
    case "example":
    case "usage":
      for (const it of ((d as { items?: Record<string, unknown>[] }).items ?? [])) {
        s.workedExamples += 1;
        if ((it as { note?: string }).note) s.examplesWithNotes += 1;
        const dom = (it as { domain?: string }).domain;
        if (dom) s.domains.add(dom);
      }
      break;
    case "mistakes":
      s.mistakeItems += ((d as { items?: unknown[] }).items ?? []).length;
      s.teachingWords += countWords(d);
      break;
    case "comparison":
    case "table":
      s.teachingWords += countWords(d);
      s.tableRows += ((d as { rows?: unknown[] }).rows ?? []).length;
      break;
    case "dialogue":
      s.dialogueLines += ((d as { lines?: unknown[] }).lines ?? []).length;
      break;
    case "audio":
      s.audioBlocks += 1;
      break;
    case "four-skills":
      s.fourSkills = true;
      break;
    case "revision":
      s.revisionItems += ((d as { items?: unknown[] }).items ?? []).length;
      break;
    case "summary":
      s.summaryPoints += ((d as { points?: unknown[] }).points ?? []).length;
      break;
    case "practice":
      s.practiceQuestions += ((d as { exerciseIds?: unknown[] }).exerciseIds ?? []).length;
      break;
  }
}

interface LessonVerdict {
  slug: string;
  course: string;
  title: string;
  minutes: number;
  totalWords: number;
  teachingWords: number;
  workedExamples: number;
  examplesWithNotes: number;
  domains: number;
  mistakeItems: number;
  practiceQuestions: number;
  practiceWithExplanations: number;
  revisionItems: number;
  audioBlocks: number;
  fourSkills: boolean;
  summaryPoints: number;
  /** words of teaching material per declared study minute */
  depthRatio: number;
  issues: string[];
}

async function main(): Promise<void> {
  const lessons = await db.cmsLesson.findMany({
    where: { live: true },
    include: {
      blocks: { orderBy: { order: "asc" } },
      unit: { include: { module: { include: { course: true } } } },
    },
  });
  const exerciseIds = new Set<string>();
  for (const l of lessons)
    for (const b of l.blocks)
      if (b.type === "practice")
        try {
          for (const id of (JSON.parse(b.data) as { exerciseIds?: string[] }).exerciseIds ?? [])
            exerciseIds.add(id);
        } catch {}
  const exercises = await db.cmsQuestion.findMany({
    where: { id: { in: [...exerciseIds] } },
    select: { id: true, data: true },
  });
  const explanationById = new Map<string, { explanation: string; hints: number }>();
  for (const q of exercises) {
    try {
      const d = JSON.parse(q.data) as {
        feedback?: { explanation?: string };
        hints?: unknown[];
      };
      explanationById.set(q.id, {
        explanation: d.feedback?.explanation ?? "",
        hints: (d.hints ?? []).length,
      });
    } catch {}
  }

  const verdicts: LessonVerdict[] = [];
  for (const l of lessons) {
    const s: Signals = {
      teachingWords: 0,
      totalWords: 0,
      workedExamples: 0,
      examplesWithNotes: 0,
      domains: new Set(),
      mistakeItems: 0,
      practiceQuestions: 0,
      practiceWithExplanations: 0,
      revisionItems: 0,
      audioBlocks: 0,
      fourSkills: false,
      summaryPoints: 0,
      tableRows: 0,
      dialogueLines: 0,
    };
    for (const b of l.blocks) collect(b, s);
    let practiceAttached = 0;
    for (const b of l.blocks)
      if (b.type === "practice")
        try {
          for (const id of (JSON.parse(b.data) as { exerciseIds?: string[] }).exerciseIds ?? []) {
            practiceAttached += 1;
            if ((explanationById.get(id)?.explanation ?? "").trim().length >= 25)
              s.practiceWithExplanations += 1;
          }
        } catch {}
    const issues: string[] = [];
    const v: LessonVerdict = {
      slug: l.slug,
      course: l.unit.module.course.slug,
      title: l.title,
      minutes: l.estimatedMinutes,
      totalWords: s.totalWords,
      teachingWords: s.teachingWords,
      workedExamples: s.workedExamples,
      examplesWithNotes: s.examplesWithNotes,
      domains: s.domains.size,
      mistakeItems: s.mistakeItems,
      practiceQuestions: s.practiceQuestions,
      practiceWithExplanations: s.practiceWithExplanations,
      revisionItems: s.revisionItems,
      audioBlocks: s.audioBlocks,
      fourSkills: s.fourSkills,
      summaryPoints: s.summaryPoints,
      depthRatio: l.estimatedMinutes > 0 ? Math.round(s.totalWords / l.estimatedMinutes) : 0,
      issues,
    };
    // ---- Depth gates (a lesson fails any one of these) ----
    if (practiceAttached === 0) issues.push("no answerable practice attached");
    else if (s.practiceWithExplanations < practiceAttached)
      issues.push(`practice explanations missing or thin (${s.practiceWithExplanations}/${practiceAttached})`);
    if (s.workedExamples < 6) issues.push(`only ${s.workedExamples} worked examples (need 6+)`);
    if (s.examplesWithNotes < 4) issues.push(`only ${s.examplesWithNotes} examples carry teaching notes`);
    if (s.mistakeItems < 3) issues.push(`only ${s.mistakeItems} common-mistake analyses (need 3+)`);
    if (s.teachingWords < 120) issues.push(`teaching material too thin (${s.teachingWords} words)`);
    if (v.depthRatio < 8) issues.push(`depth ${v.depthRatio}w/min — a learner cannot study ${l.estimatedMinutes} min on this`);
    if (!s.fourSkills && l.unit.module.course.slug.includes("academy") === false && s.dialogueLines === 0 && s.audioBlocks === 0)
      issues.push("no listening/speaking material (no audio, dialogue or four-skills)");
    verdicts.push(v);
  }

  const failing = verdicts.filter((v) => v.issues.length > 0);
  const byCourse = new Map<string, LessonVerdict[]>();
  for (const v of verdicts) byCourse.set(v.course, [...(byCourse.get(v.course) ?? []), v]);

  if (JSON_MODE) {
    console.log(
      JSON.stringify(
        {
          date: new Date().toISOString(),
          totalLive: verdicts.length,
          passing: verdicts.length - failing.length,
          failing: failing.length,
          byCourse: [...byCourse.entries()].map(([course, list]) => ({
            course,
            live: list.length,
            failing: list.filter((v) => v.issues.length > 0).length,
            avgWords: Math.round(list.reduce((s, v) => s + v.totalWords, 0) / list.length),
          })),
          failures: failing.map((v) => ({ slug: v.slug, issues: v.issues })),
        },
        null,
        2,
      ),
    );
    return;
  }

  console.log(`EDUCATIONAL DEPTH AUDIT — ${new Date().toISOString()}`);
  console.log(`Live lessons: ${verdicts.length} · passing all depth gates: ${verdicts.length - failing.length} · failing: ${failing.length}`);
  console.log("");
  for (const [course, list] of [...byCourse.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    const fail = list.filter((v) => v.issues.length > 0);
    const avg = Math.round(list.reduce((s, v) => s + v.totalWords, 0) / list.length);
    console.log(
      `  ${course.padEnd(34)} ${String(list.length).padStart(3)} live · avg ${String(avg).padStart(5)}w · failing depth: ${String(fail.length).padStart(3)}`,
    );
    for (const v of fail.slice(0, 4))
      console.log(`      ${v.slug} (${v.totalWords}w/${v.minutes}m): ${v.issues.join("; ")}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
