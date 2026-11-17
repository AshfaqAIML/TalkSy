import { z } from "zod";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { writingExerciseBySlug } from "@/data/exams/toefl/writing-bank";
import { getWritingDraft, upsertWritingDraft, deleteWritingDraft } from "@/lib/exams/toefl-bank/writing";

type Ctx = { params: Promise<{ slug: string }> };

const upsertSchema = z.object({ content: z.string().max(40000) });

/**
 * The email/discussion draft store behind the player's autosave loop.
 *
 * GET    — the current draft (content + word count), or null.
 * PUT    — upsert the draft.
 * DELETE — discard it.
 */
export async function GET(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Log in to keep drafts.", 401);
  const { slug } = await ctx.params;
  const ex = writingExerciseBySlug(slug);
  if (!ex) return jsonError("Exercise not found.", 404);
  const draft = await getWritingDraft(user.id, slug);
  return json({ draft });
}

export async function PUT(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Log in to keep drafts.", 401);
  const { slug } = await ctx.params;
  const ex = writingExerciseBySlug(slug);
  if (!ex) return jsonError("Exercise not found.", 404);
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonError("Invalid JSON body.", 400);
  }
  const parsed = upsertSchema.safeParse(body);
  if (!parsed.success) return jsonError("Invalid draft.", 400);
  const draft = await upsertWritingDraft(user.id, slug, parsed.data.content);
  return json({ draft });
}

export async function DELETE(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Log in to keep drafts.", 401);
  const { slug } = await ctx.params;
  await deleteWritingDraft(user.id, slug);
  return json({ ok: true });
}
