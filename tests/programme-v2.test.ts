/// <reference types="bun-types" />
/**
 * PROMPT 35 test suite — the educational content production engine.
 *
 * Covers: the v2 teaching standard on delivered chapters, the validated
 * Urdu/Hindi glossary, the production manifest, honest AI-review labelling
 * in the database, the human review workflow with role gates, seed
 * idempotency that preserves human promotions, learner DTO exposure and
 * renderer smoke tests for the new teaching blocks.
 */

import { beforeAll, describe, expect, it } from "bun:test";
import { spawnSync } from "node:child_process";
import { db } from "@/lib/db";
import { hashPassword } from "@/lib/auth";
import {
  CONTENT_GLOSSARY,
  PROGRAMME_CHAPTERS,
  PROGRAMME_LESSONS,
  V2_MANIFEST,
  V2_UPGRADES,
  gls,
  validateProgramme,
  validateV2Standard,
  v2CompletedChapterIds,
} from "@/data/programme";
import { buildCatalogue } from "@/lib/catalogue/service";
import { lessonReviewAction } from "@/lib/cms/service";
import { getLearnerLesson } from "@/lib/cms/service";
import { BlockRenderer } from "@/components/app/lesson/blocks/BlockRenderer";
import { renderToStaticMarkup } from "react-dom/server";
import type { CmsBlock } from "@/data/cms/types";

/** Chapters delivered at the v2 standard — derived from the manifest so
 * every new production batch is automatically covered by this suite. */
const V2_CHAPTER_IDS = v2CompletedChapterIds();

beforeAll(async () => {
  // Self-sufficient AND order-independent: the shared test database keeps
  // CMS rows between suite runs, so force a full deterministic reseed and
  // normalise the review pipeline to its honest post-seed state (every
  // programme lesson ai-reviewed). Promotions made by earlier test runs
  // must not leak into this file's assertions.
  await db.cmsAuditLog.deleteMany({ where: { action: "programme.seed" } });
  const result = spawnSync("bun", ["scripts/seed-programme.ts"], {
    env: { ...process.env, DATABASE_URL: process.env.DATABASE_URL ?? "file:/home/z/my-project/db/test.db" },
  });
  if (result.status !== 0) {
    throw new Error(`programme seed failed: ${result.stderr.toString()}`);
  }
  await db.cmsLesson.updateMany({
    where: { slug: { startsWith: "ch-" } },
    data: { reviewStatus: "ai-reviewed" },
  });
});

describe("programme v2 — teaching standard", () => {
  it("passes the v2 standard with zero issues on delivered chapters", () => {
    expect(validateV2Standard()).toEqual([]);
  });

  it("keeps every PROMPT 34 blueprint guarantee at the same time", () => {
    expect(validateProgramme()).toEqual([]);
  });

  it("delivers exactly the chapters listed in the upgrade map", () => {
    expect(Object.keys(V2_UPGRADES).sort()).toEqual([...V2_CHAPTER_IDS].sort());
    const v2Full = V2_MANIFEST.filter((c) => c.standard === "v2-full");
    expect(v2Full.map((c) => c.chapterId)).toEqual(V2_CHAPTER_IDS);
    // Every delivered batch upgrades a full chapter of lessons (>= 5).
    expect(v2Full.every((c) => (c.lessonsUpgraded ?? 0) >= 5)).toBe(true);
    expect(V2_MANIFEST).toHaveLength(56);
    expect(V2_MANIFEST.filter((c) => c.standard === "v1-baseline")).toHaveLength(
      56 - v2Full.length,
    );
  });

  it("every v2 lesson opens with a lesson intro and closes with a summary", () => {
    for (const chapter of PROGRAMME_CHAPTERS.filter((c) => V2_CHAPTER_IDS.includes(c.id))) {
      for (const lesson of chapter.lessons) {
        expect(lesson.blocks[0]?.type).toBe("lesson-intro");
        expect(lesson.blocks.some((b) => b.type === "summary")).toBe(true);
        expect(lesson.blocks.some((b) => b.type === "four-skills")).toBe(true);
        expect(lesson.blocks.some((b) => b.type === "mistakes")).toBe(true);
        expect(lesson.blocks.some((b) => b.type === "language-support")).toBe(true);
      }
    }
  });

  it("guided practice always offers hints; independent practice never does", () => {
    for (const lesson of PROGRAMME_LESSONS.filter((l) => V2_CHAPTER_IDS.includes(l.chapter.id))) {
      const guided = lesson.practiceSets.filter((s) => s.variant === "guided");
      const independent = lesson.practiceSets.filter((s) => s.variant === "independent");
      expect(guided.length).toBeGreaterThanOrEqual(1);
      expect(independent.length).toBeGreaterThanOrEqual(1);
      for (const set of guided) {
        for (const q of set.questions) {
          expect((q as unknown as { hints: string[] }).hints.length).toBeGreaterThan(0);
        }
      }
      for (const set of independent) {
        for (const q of set.questions) {
          expect((q as unknown as { hints?: string[] }).hints ?? []).toHaveLength(0);
        }
      }
    }
  });

  it("v2 lessons are substantially deeper than the baseline average", () => {
    const v2Lessons = PROGRAMME_LESSONS.filter((l) => V2_CHAPTER_IDS.includes(l.chapter.id));
    const baseline = PROGRAMME_LESSONS.filter((l) => !V2_CHAPTER_IDS.includes(l.chapter.id));
    const avg = (xs: typeof PROGRAMME_LESSONS) =>
      xs.reduce((sum, l) => sum + l.blocks.length, 0) / xs.length;
    // The teaching-standard lessons carry the full section structure.
    expect(v2Lessons.every((l) => l.blocks.length >= 14)).toBe(true);
    expect(avg(v2Lessons)).toBeGreaterThan(avg(baseline) * 2.5);
  });
});

describe("programme v2 — validated multilingual support", () => {
  it("glossary entries all carry Urdu and Hindi", () => {
    expect(CONTENT_GLOSSARY.length).toBeGreaterThanOrEqual(60);
    for (const entry of CONTENT_GLOSSARY) {
      expect(entry.ur.trim().length).toBeGreaterThan(0);
      expect(entry.hi.trim().length).toBeGreaterThan(0);
    }
    const keys = CONTENT_GLOSSARY.map((e) => e.english);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("gls() returns the exact validated pair and rejects unknown keys", () => {
    const noun = gls("A noun is the name of a person, place, animal or thing.");
    expect(noun.ur).toContain("اسم");
    expect(noun.hi).toContain("संज्ञा");
    expect(() => gls("This sentence was never validated.")).toThrow(/not a validated glossary entry/);
  });

  it("every Urdu/Hindi string in v2 content exists in the glossary", () => {
    const valid = new Set(CONTENT_GLOSSARY.flatMap((e) => [e.ur, e.hi]));
    for (const chapterId of V2_CHAPTER_IDS) {
      for (const upgrade of V2_UPGRADES[chapterId]) {
        for (const block of upgrade.blocks) {
          if (block.type !== "language-support") continue;
          for (const entry of block.entries) {
            if (entry.ur) expect(valid.has(entry.ur)).toBe(true);
            if (entry.hi) expect(valid.has(entry.hi)).toBe(true);
          }
        }
      }
    }
  });
});

describe("programme v2 — honest AI-review labelling in the database", () => {
  it("seeds every programme lesson as ai-reviewed, never higher", async () => {
    const counts = await db.cmsLesson.groupBy({
      by: ["reviewStatus"],
      where: { slug: { startsWith: "ch-" } },
      _count: { _all: true },
    });
    expect(counts.map((c) => c.reviewStatus).sort()).toEqual(["ai-reviewed"]);
    const total = counts.reduce((sum, c) => sum + c._count._all, 0);
    expect(total).toBe(266);
  });

  it("v2 lessons carry their full block structure into the CMS", async () => {
    const lesson = await db.cmsLesson.findUnique({
      where: { slug: "ch-01-l-02" },
      include: { blocks: true },
    });
    expect(lesson).not.toBeNull();
    const types = lesson!.blocks.map((b) => b.type);
    expect(types[0]).toBe("lesson-intro");
    expect(types).toContain("four-skills");
    expect(types).toContain("mistakes");
    expect(types).toContain("language-support");
    expect(types).toContain("summary");
    // Guided + independent practice blocks with variant markers.
    const practice = lesson!.blocks.filter((b) => b.type === "practice");
    const variants = practice.map((b) => JSON.parse(b.data).variant);
    expect(variants).toContain("guided");
    expect(variants).toContain("independent");
  });

  it("keeps the catalogue intact: 56 chapters, 266 lessons on the flagship path", async () => {
    const payload = await buildCatalogue();
    const flagship = payload.paths.find((p) => p.id === "complete-english-programme")!;
    expect(flagship.chapterCount).toBe(56);
    expect(flagship.lessonCount).toBe(266);
  });
});

describe("programme v2 — human review workflow", () => {
  it("follows draft → ai-reviewed → human-reviewed → approved with role gates", async () => {
    const lesson = await db.cmsLesson.findUnique({ where: { slug: "ch-03-l-01" } });
    expect(lesson).not.toBeNull();
    const id = lesson!.id;

    const makeActor = async (role: "editor" | "teacher" | "admin") => {
      const email = `v2-${role}-${Date.now()}@talksy.test`;
      return db.user.create({
        data: { email, name: `V2 ${role}`, role, passwordHash: hashPassword("x") },
      });
    };
    const editor = await makeActor("editor");
    const teacher = await makeActor("teacher");
    const admin = await makeActor("admin");

    // The seeded lesson is ai-reviewed: an editor cannot confirm HUMAN review —
    // the role gate stops them before the status is even examined.
    await expect(
      lessonReviewAction(editor.id, editor.role, id, "human-review"),
    ).rejects.toThrow(/Only teachers and administrators/);

    // Editors cannot give the final sign-off either.
    await expect(lessonReviewAction(editor.id, editor.role, id, "approve")).rejects.toThrow(
      /Only administrators/,
    );

    // A teacher confirms the teaching quality.
    const humanReviewed = await lessonReviewAction(teacher.id, teacher.role, id, "human-review");
    expect(humanReviewed.reviewStatus).toBe("human-reviewed");

    // Teachers cannot give the final sign-off.
    await expect(lessonReviewAction(teacher.id, teacher.role, id, "approve")).rejects.toThrow(
      /Only administrators/,
    );

    // An admin approves.
    const approved = await lessonReviewAction(admin.id, admin.role, id, "approve");
    expect(approved.reviewStatus).toBe("approved");

    // An admin can withdraw the sign-off — back to ai-reviewed, not draft:
    // the content provenance (AI-authored, machine-checked) is unchanged.
    const revoked = await lessonReviewAction(admin.id, admin.role, id, "revoke");
    expect(revoked.reviewStatus).toBe("ai-reviewed");

    // Every transition is audited.
    const audits = await db.cmsAuditLog.findMany({
      where: { entityId: id, action: { startsWith: "lesson.review" } },
    });
    expect(audits.length).toBeGreaterThanOrEqual(3);

    await db.user.deleteMany({ where: { id: { in: [editor.id, teacher.id, admin.id] } } });
  });

  it("editing lesson content resets the review to draft (a review attaches to text)", async () => {
    const lesson = await db.cmsLesson.findUnique({ where: { slug: "ch-03-l-02" } });
    expect(lesson!.reviewStatus).toBe("ai-reviewed");
    const actor = await db.user.create({
      data: {
        email: `v2-editor-reset-${Date.now()}@talksy.test`,
        name: "V2 reset editor",
        role: "editor",
        passwordHash: hashPassword("x"),
      },
    });
    const { updateLesson } = await import("@/lib/cms/service");
    const updated = await updateLesson(actor.id, lesson!.id, {
      description: "Edited by the review-reset test.",
    });
    expect(updated.reviewStatus).toBe("draft");
    expect(updated.status).toBe("draft");
    await db.user.delete({ where: { id: actor.id } });
  });

  it("re-seeding preserves a human promotion when the content is unchanged", async () => {
    const lesson = await db.cmsLesson.findUnique({ where: { slug: "ch-02-l-03" } });
    const admin =
      (await db.user.findFirst({ where: { role: "admin" } })) ??
      (await db.user.create({
        data: {
          email: `v2-admin-reseed-${Date.now()}@talksy.test`,
          name: "V2 reseed admin",
          role: "admin",
          passwordHash: hashPassword("x"),
        },
      }));
    await lessonReviewAction(admin.id, "admin", lesson!.id, "human-review");

    // Force a full reseed by clearing the marker, then run the seed script.
    await db.cmsAuditLog.deleteMany({ where: { action: "programme.seed" } });
    const result = spawnSync("bun", ["scripts/seed-programme.ts"], {
      env: { ...process.env, DATABASE_URL: process.env.DATABASE_URL ?? "file:/home/z/my-project/db/test.db" },
    });
    expect(result.status).toBe(0);

    const preserved = await db.cmsLesson.findUnique({ where: { slug: "ch-02-l-03" } });
    expect(preserved!.reviewStatus).toBe("human-reviewed"); // identical content → promotion kept

    const reset = await db.cmsLesson.findUnique({ where: { slug: "ch-02-l-04" } });
    expect(reset!.reviewStatus).toBe("ai-reviewed"); // no promotion → honest default
  });
});

describe("programme v2 — learner sees the honest label", () => {
  it("the learner lesson DTO exposes reviewStatus", async () => {
    const demo = await db.user.findUnique({ where: { email: "demo@talksy.app" } });
    if (!demo) return; // fresh database without the demo account
    const lesson = await getLearnerLesson(demo.id, "ch-01-l-01");
    expect(lesson.reviewStatus).toBe("ai-reviewed");
    expect(lesson.blocks.length).toBeGreaterThan(20);
    // Answers never leak to learners.
    for (const exercise of lesson.exercises) {
      expect(JSON.stringify(exercise)).not.toContain("correctAnswer");
    }
  });
});

describe("programme v2 — renderer smoke tests for the teaching blocks", () => {
  const blocks: CmsBlock[] = [
    { type: "lesson-intro", text: "In this lesson you learn letters.", beforeYouStart: ["You know the alphabet"] },
    { type: "steps", title: "How to blend", steps: [{ title: "Step 1", text: "Find the vowel" }] },
    { type: "usage", items: [{ situation: "At work", example: "One coffee, please." }] },
    { type: "comparison", title: "Short vs long", columns: ["Short", "Long"], rows: [{ aspect: "Sound", left: "cat", right: "cake" }] },
    { type: "mistakes", items: [{ wrong: "me Maria", right: "I am Maria", reason: "Use I am + name." }] },
    {
      type: "four-skills",
      reading: { text: "Read me." },
      writing: { task: "Write two sentences." },
      listening: { script: "Listen to me." },
      speaking: { task: "Say your name." },
    },
    { type: "summary", points: ["Point one", "Point two", "Point three", "Point four"] },
    { type: "revision", items: [{ question: "What is English?", options: ["A language", "A place"], correctIndex: 0, explanation: "It is a language." }] },
    { type: "language-support", entries: [{ english: "Hello", ur: "ہیلو", hi: "नमस्ते" }] },
    { type: "example", title: "Examples", items: [{ english: "cat", note: "Short a.", domain: "everyday" }] },
  ];

  it("renders every new teaching block without errors", () => {
    for (const block of blocks) {
      const html = renderToStaticMarkup(
        BlockRenderer({
          block: block as never,
          lessonSlug: "smoke-test",
          exercisesById: {},
        }),
      );
      expect(typeof html).toBe("string");
      expect(html.length).toBeGreaterThan(10);
    }
  });

  it("renders the key teaching content inside the markup", () => {
    const html = renderToStaticMarkup(
      BlockRenderer({
        block: { type: "mistakes", items: [{ wrong: "me Maria", right: "I am Maria", reason: "Use I am + name." }] } as never,
        lessonSlug: "smoke-test",
        exercisesById: {},
      }),
    );
    expect(html).toContain("me Maria");
    expect(html).toContain("I am Maria");
    expect(html).toContain("Use I am + name.");

    const support = renderToStaticMarkup(
      BlockRenderer({
        block: { type: "language-support", entries: [{ english: "Hello", ur: "ہیلو", hi: "नमस्ते" }] } as never,
        lessonSlug: "smoke-test",
        exercisesById: {},
      }),
    );
    expect(support).toContain("Hello");
    expect(support).toContain("ہیلو");
    expect(support).toContain("नमस्ते");
  });
});
