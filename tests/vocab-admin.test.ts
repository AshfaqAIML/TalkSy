/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { db } from "@/lib/db";
import { hashPassword } from "@/lib/auth";
import { validateVocabRow } from "@/lib/vocab/manage";
import { POST as importRoute } from "@/app/api/cms/admin/vocabulary/import/route";
import { GET as exportRoute } from "@/app/api/cms/admin/vocabulary/export/route";
import {
  GET as listRoute,
  POST as createRoute,
  PATCH as bulkRoute,
} from "@/app/api/cms/admin/vocabulary/route";
import { PATCH as editRoute, DELETE as deleteRoute } from "@/app/api/cms/admin/vocabulary/[id]/route";
import { GET as wordsRoute } from "@/app/api/vocabulary/words/route";
import { GET as wordDetailRoute } from "@/app/api/vocabulary/words/[id]/route";

const BASE = "http://127.0.0.1:3000";

let userCounter = 0;

async function createStaffUser(): Promise<string> {
  userCounter += 1;
  const email = `vocab-admin-${Date.now()}-${userCounter}@talksy.test`;
  const user = await db.user.create({
    data: {
      email,
      name: `Vocab Admin ${userCounter}`,
      passwordHash: hashPassword("password123"),
      role: "editor",
    },
  });
  const token = `tok-${Date.now()}-${userCounter}`;
  await db.session.create({
    data: { token, userId: user.id, expiresAt: new Date(Date.now() + 3600_000) },
  });
  return token;
}

function staffCookie(token: string): Record<string, string> {
  return { cookie: `talksy_session=${token}` };
}

const GOOD_ROW = {
  word: `glossary-${Date.now() % 100000}`,
  partOfSpeech: "noun",
  definition: "A list of special words with their meanings",
  pronunciation: "GLOS-a-ry",
  example: "The glossary explains the hard words.",
  exampleTranslation: "El glosario explica las palabras difíciles.",
  translation: "glosario",
  difficulty: "medium",
};

async function wipeManaged() {
  await db.vocabEntry.deleteMany({ where: { word: { startsWith: "glossary-" } } });
  await db.vocabEntry.deleteMany({ where: { word: { startsWith: "reliably-" } } });
  await db.vocabEntry.deleteMany({ where: { word: "imported-ok" } });
}

describe("validateVocabRow (pure — PROMPT 39 §6)", () => {
  it("accepts a complete row", () => {
    const result = validateVocabRow(GOOD_ROW);
    expect(result.ok).toBe(true);
  });

  it("rejects each invalid field with a specific error", () => {
    const badWord = validateVocabRow({ ...GOOD_ROW, word: "x" });
    expect(badWord.ok).toBe(false);
    if (!badWord.ok) expect(badWord.errors.join(" ")).toContain("word must be 2-40");

    const badPos = validateVocabRow({ ...GOOD_ROW, partOfSpeech: "thing" });
    expect(badPos.ok).toBe(false);
    if (!badPos.ok) expect(badPos.errors.join(" ")).toContain("partOfSpeech must be one of");

    const badDef = validateVocabRow({ ...GOOD_ROW, definition: "hi" });
    expect(badDef.ok).toBe(false);

    const badExample = validateVocabRow({ ...GOOD_ROW, example: "Bad" });
    expect(badExample.ok).toBe(false);
    if (!badExample.ok) expect(badExample.errors.join(" ")).toContain("8-240");

    const badDiff = validateVocabRow({ ...GOOD_ROW, difficulty: "impossible" });
    expect(badDiff.ok).toBe(false);
    if (!badDiff.ok) expect(badDiff.errors.join(" ")).toContain("easy, medium or hard");
  });
});

describe("managed vocabulary admin API (PROMPT 39 §6)", () => {
  it("requires staff for every route", async () => {
    expect((await listRoute(new Request(`${BASE}/api/cms/admin/vocabulary`))).status).toBe(401);
    expect(
      (
        await importRoute(
          new Request(`${BASE}/api/cms/admin/vocabulary/import`, {
            method: "POST",
            body: JSON.stringify([]),
          }),
        )
      ).status,
    ).toBe(401);
    expect((await exportRoute(new Request(`${BASE}/api/cms/admin/vocabulary/export`))).status).toBe(401);
  });

  it("bulk-imports valid rows as drafts, rejects invalid ones with per-row errors, skips duplicates", async () => {
    await wipeManaged();
    const cookie = staffCookie(await createStaffUser());
    const payload = [
      { ...GOOD_ROW, word: "imported-ok" },
      { ...GOOD_ROW, word: "x", definition: "no" }, // invalid on two fields
      { ...GOOD_ROW, word: "imported-ok" }, // duplicate within the batch
    ];
    const res = await importRoute(
      new Request(`${BASE}/api/cms/admin/vocabulary/import`, {
        method: "POST",
        headers: { "content-type": "application/json", ...cookie },
        body: JSON.stringify(payload),
      }),
    );
    expect(res.status).toBe(200);
    const data = (await res.json()) as {
      total: number;
      imported: number;
      skippedDuplicates: number;
      rejected: number;
      rejectedRows: { row: number; errors: string[] }[];
    };
    expect(data.total).toBe(3);
    expect(data.imported).toBe(1);
    expect(data.skippedDuplicates).toBe(1);
    expect(data.rejected).toBe(1);
    expect(data.rejectedRows[0].errors.length).toBeGreaterThanOrEqual(2);

    // Imported row is a draft — invisible to learners until approved.
    const draftRow = await db.vocabEntry.findFirst({ where: { word: "imported-ok" } });
    expect(draftRow?.status).toBe("draft");
    const explorerBefore = await wordsRoute(
      new Request(`${BASE}/api/vocabulary/words?q=imported-ok`),
    );
    const beforeData = (await explorerBefore.json()) as { words: unknown[] };
    const beforeText = JSON.stringify(beforeData);
    expect(beforeText).not.toContain("imported-ok");
  });

  it("approving a row surfaces it in the learner Word Explorer with detail", async () => {
    const cookie = staffCookie(await createStaffUser());
    const row = await db.vocabEntry.findFirst({ where: { word: "imported-ok" } });
    expect(row).not.toBeNull();
    const approved = await editRoute(
      new Request(`${BASE}/api/cms/admin/vocabulary/${row!.id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json", ...cookie },
        body: JSON.stringify({ status: "approved" }),
      }),
      { params: Promise.resolve({ id: row!.id }) },
    );
    expect(approved.status).toBe(200);

    const list = await listRoute(new Request(`${BASE}/api/cms/admin/vocabulary`, { headers: cookie }));
    const listData = (await list.json()) as {
      entries: { id: string; status: string }[];
      totals: { approved: number };
    };
    expect(listData.entries.some((e) => e.id === row!.id && e.status === "approved")).toBe(true);

    // Learner explorer list merge.
    const explorer = await wordsRoute(
      new Request(`${BASE}/api/vocabulary/words?q=imported-ok`),
    );
    const explorerData = (await explorer.json()) as {
      words: { word: { id: string; word: string } }[];
    };
    const found = explorerData.words.find((w) => w.word.id === `mx-${row!.id}`);
    expect(found).toBeDefined();

    // Learner detail route resolves the managed word.
    const detail = await wordDetailRoute(
      new Request(`${BASE}/api/vocabulary/words/mx-${row!.id}`),
      { params: Promise.resolve({ id: `mx-${row!.id}` }) },
    );
    expect(detail.status).toBe(200);
    const detailData = (await detail.json()) as { word: { word: string }; relatedWords: unknown[] };
    expect(detailData.word.word).toBe("imported-ok");
    expect(Array.isArray(detailData.relatedWords)).toBe(true);
  });

  it("editing revalidates the seven fields server-side", async () => {
    const cookie = staffCookie(await createStaffUser());
    const row = await db.vocabEntry.findFirst({ where: { word: "imported-ok" } });
    expect(row).not.toBeNull();
    const bad = await editRoute(
      new Request(`${BASE}/api/cms/admin/vocabulary/${row!.id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json", ...cookie },
        body: JSON.stringify({ definition: "no" }),
      }),
      { params: Promise.resolve({ id: row!.id }) },
    );
    expect(bad.status).toBe(422);
    const good = await editRoute(
      new Request(`${BASE}/api/cms/admin/vocabulary/${row!.id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json", ...cookie },
        body: JSON.stringify({ definition: "A word that was imported through the bulk tool" }),
      }),
      { params: Promise.resolve({ id: row!.id }) },
    );
    expect(good.status).toBe(200);
  });

  it("exports every managed row for round-trip editing", async () => {
    const cookie = staffCookie(await createStaffUser());
    const res = await exportRoute(new Request(`${BASE}/api/cms/admin/vocabulary/export`, { headers: cookie }));
    expect(res.status).toBe(200);
    const data = (await res.json()) as {
      rows: { word: string; status: string; source: string }[];
      count: number;
    };
    expect(data.count).toBe(data.rows.length);
    expect(data.rows.some((r) => r.word === "imported-ok" && r.source === "import")).toBe(true);
  });

  it("bulk PATCH and DELETE work by ids", async () => {
    const cookie = staffCookie(await createStaffUser());
    const create = await createRoute(
      new Request(`${BASE}/api/cms/admin/vocabulary`, {
        method: "POST",
        headers: { "content-type": "application/json", ...cookie },
        body: JSON.stringify({
          word: "reliably-99",
          partOfSpeech: "adverb",
          definition: "In a way you can depend on",
          example: "The bus runs reliably every morning.",
          translation: "de forma fiable",
          difficulty: "hard",
        }),
      }),
    );
    expect(create.status).toBe(201);
    const { entry } = (await create.json()) as { entry: { id: string } };

    const bulk = await bulkRoute(
      new Request(`${BASE}/api/cms/admin/vocabulary`, {
        method: "PATCH",
        headers: { "content-type": "application/json", ...cookie },
        body: JSON.stringify({ ids: [entry.id], status: "approved" }),
      }),
    );
    expect(bulk.status).toBe(200);

    const del = await deleteRoute(
      new Request(`${BASE}/api/cms/admin/vocabulary/${entry.id}`, {
        method: "DELETE",
        headers: cookie,
      }),
      { params: Promise.resolve({ id: entry.id }) },
    );
    expect(del.status).toBe(200);
    await wipeManaged();
  });
});
