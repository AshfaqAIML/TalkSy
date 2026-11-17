import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { createAsset, listAssets } from "@/lib/cms/service";
import { requireStaff } from "@/lib/cms/rbac";
import { jsonError } from "@/lib/api-helpers";

export const runtime = "nodejs";

const MAX_BYTES = 25 * 1024 * 1024; // 25 MB
const ALLOWED_MIME = /^(audio|image)\//;

/** GET /api/cms/admin/assets?kind=audio|image — media library. */
export async function GET(req: Request) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  const url = new URL(req.url);
  const kind = url.searchParams.get("kind") ?? undefined;
  return Response.json({ assets: await listAssets(kind) });
}

/**
 * POST /api/cms/admin/assets — upload an audio/image file (multipart form).
 * Fields: file, title, transcript, language, pronunciation, licence, source,
 * relatedLessonId, durationSeconds (computed client-side from decoding).
 */
export async function POST(req: Request) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return jsonError("Expected a multipart upload.", 400);
  }
  const file = form.get("file");
  if (!(file instanceof File)) return jsonError("No file was uploaded.", 422);
  if (file.size === 0) return jsonError("The file is empty.", 422);
  if (file.size > MAX_BYTES) return jsonError("Files must be 25 MB or smaller.", 413);
  if (!ALLOWED_MIME.test(file.type)) {
    return jsonError("Only audio and image files can be uploaded.", 415);
  }

  const kind = file.type.startsWith("audio/") ? "audio" : "image";
  const title = String(form.get("title") ?? "").trim() || file.name;
  const durationRaw = Number(form.get("durationSeconds"));
  const relatedLessonId = String(form.get("relatedLessonId") ?? "").trim() || null;

  const bytes = Buffer.from(await file.arrayBuffer());
  const asset = await createAsset(user.id, {
    kind,
    title,
    fileName: file.name,
    mimeType: file.type,
    sizeBytes: file.size,
    durationSeconds: Number.isFinite(durationRaw) && durationRaw > 0 ? durationRaw : null,
    transcript: String(form.get("transcript") ?? "").trim(),
    language: String(form.get("language") ?? "en").trim(),
    pronunciation: String(form.get("pronunciation") ?? "").trim(),
    licence: String(form.get("licence") ?? "").trim(),
    source: String(form.get("source") ?? "").trim(),
    relatedLessonId,
  });

  const ext = file.name.includes(".") ? file.name.split(".").pop()!.slice(0, 8) : kind === "audio" ? "mp3" : "png";
  const mediaDir = join(process.cwd(), "db", "media");
  mkdirSync(mediaDir, { recursive: true });
  writeFileSync(join(mediaDir, `${asset.id}.${ext}`), bytes);

  return Response.json({ asset: { ...asset, fileUrl: `/api/cms/assets/${asset.id}/file` } });
}
