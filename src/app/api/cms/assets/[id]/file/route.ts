import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";

export const runtime = "nodejs";

type Ctx = { params: Promise<{ id: string }> };

/**
 * GET /api/cms/assets/[id]/file — stream a stored media file to any
 * authenticated user (learners need this for lesson audio/images).
 */
export async function GET(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return Response.json({ error: "Please log in." }, { status: 401 });
  const { id } = await ctx.params;
  if (!/^[a-z0-9]+$/i.test(id)) return Response.json({ error: "Bad id." }, { status: 400 });

  const asset = await db.cmsAsset.findUnique({ where: { id } });
  if (!asset) return Response.json({ error: "Not found." }, { status: 404 });

  const mediaDir = join(process.cwd(), "db", "media");
  const entries = await readdir(mediaDir).catch(() => []);
  const name = entries.find((e) => e.startsWith(`${id}.`));
  if (!name) return Response.json({ error: "File missing." }, { status: 404 });

  const bytes = await readFile(join(mediaDir, name));
  return new Response(new Uint8Array(bytes), {
    status: 200,
    headers: {
      "content-type": asset.mimeType,
      "content-length": String(bytes.byteLength),
      "cache-control": "private, max-age=3600",
    },
  });
}
