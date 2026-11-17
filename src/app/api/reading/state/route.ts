import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { getReadingText } from "@/data/reading";
import {
  ensureReadingProgress,
  recomputeReadingCompletion,
  toReadingProgressDto,
} from "@/lib/reading/service";

/**
 * POST /api/reading/state — progress actions on a reading text:
 *  - { action: "paragraph-read", paragraphId }  → mark a paragraph as read
 *  - { action: "position", paragraphId }        → save the current paragraph
 *  - { action: "bookmark", bookmarked }         → toggle the whole-text bookmark
 *  - { action: "paragraph-bookmark", paragraphId } → toggle a paragraph bookmark
 * Completion is recomputed server-side after every action (no auto-mastery).
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson<{
    slug?: string;
    action?: string;
    paragraphId?: string;
    bookmarked?: boolean;
  }>(req);
  if (!body || typeof body.slug !== "string") return jsonError("Invalid request body.", 400);

  const text = getReadingText(body.slug);
  if (!text) return jsonError("Reading text not found.", 404);
  if (!body.action) return jsonError("Missing action.", 400);

  const row = await ensureReadingProgress(user.id, text.id);

  switch (body.action) {
    case "paragraph-read": {
      const paragraphId = body.paragraphId;
      if (typeof paragraphId !== "string") return jsonError("Missing paragraphId.", 400);
      if (!text.paragraphs.some((p) => p.id === paragraphId)) {
        return jsonError("Unknown paragraph.", 400);
      }
      let read: string[] = [];
      try {
        read = JSON.parse(row.paragraphsRead) as string[];
      } catch {
        read = [];
      }
      if (!read.includes(paragraphId)) read.push(paragraphId);
      await db.readingProgress.update({
        where: { id: row.id },
        data: {
          paragraphsRead: JSON.stringify(read),
          lastParagraphId: paragraphId,
        },
      });
      break;
    }
    case "position": {
      const paragraphId = body.paragraphId;
      if (typeof paragraphId !== "string") return jsonError("Missing paragraphId.", 400);
      if (!text.paragraphs.some((p) => p.id === paragraphId)) {
        return jsonError("Unknown paragraph.", 400);
      }
      await db.readingProgress.update({
        where: { id: row.id },
        data: { lastParagraphId: paragraphId },
      });
      break;
    }
    case "bookmark": {
      await db.readingProgress.update({
        where: { id: row.id },
        data: { bookmarked: Boolean(body.bookmarked) },
      });
      break;
    }
    case "paragraph-bookmark": {
      const paragraphId = body.paragraphId;
      if (typeof paragraphId !== "string") return jsonError("Missing paragraphId.", 400);
      if (!text.paragraphs.some((p) => p.id === paragraphId)) {
        return jsonError("Unknown paragraph.", 400);
      }
      const existing = await db.readingBookmark.findUnique({
        where: {
          userId_textId_paragraphId: {
            userId: user.id,
            textId: text.id,
            paragraphId,
          },
        },
      });
      if (existing) {
        await db.readingBookmark.delete({ where: { id: existing.id } });
      } else {
        await db.readingBookmark.create({
          data: { userId: user.id, textId: text.id, paragraphId },
        });
      }
      break;
    }
    default:
      return jsonError("Unknown action.", 400);
  }

  const updated = await recomputeReadingCompletion(user.id, text);
  const bookmarks = await db.readingBookmark.findMany({
    where: { userId: user.id, textId: text.id },
  });

  return json({
    progress: toReadingProgressDto(updated, text),
    paragraphBookmarks: bookmarks.map((b) => b.paragraphId),
  });
}
