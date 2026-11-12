import { db } from "@/lib/db";
import { getLesson } from "@/data/curriculum";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import {
  computeLessonStatus,
  isValidSectionId,
  parseSectionsCompleted,
} from "@/lib/engine/progress";

interface StateBody {
  action?: unknown;
  sectionId?: unknown;
  bookmarked?: unknown;
  content?: unknown;
}

/**
 * POST /api/lessons/[slug]/state
 * Explicit learner actions on a lesson:
 *  - position: save the current section id.
 *  - complete-section: mark one section complete (idempotent).
 *  - bookmark: toggle bookmark.
 *  - note: save a section note.
 * Completion status is recomputed server-side; opening a lesson never
 * completes it.
 */
export async function POST(
  req: Request,
  ctx: { params: Promise<{ slug: string }> },
) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const { slug } = await ctx.params;
  const lesson = getLesson(slug);
  if (!lesson) return jsonError("Lesson not found.", 404);

  const body = await readJson<StateBody>(req);
  if (!body) return jsonError("Invalid request body.");

  const action = typeof body.action === "string" ? body.action : "";
  const sectionId = typeof body.sectionId === "string" ? body.sectionId : "";

  if (
    (action === "position" || action === "complete-section" || action === "note") &&
    !isValidSectionId(lesson, sectionId)
  ) {
    return jsonError(`Unknown section id "${sectionId}" for lesson ${slug}.`, 422);
  }

  const row =
    (await db.lessonProgress.findUnique({
      where: { userId_lessonSlug: { userId: user.id, lessonSlug: slug } },
    })) ??
    (await db.lessonProgress.create({
      data: { userId: user.id, lessonSlug: slug },
    }));

  let sectionsCompleted = parseSectionsCompleted(row.sectionsCompleted);

  switch (action) {
    case "position": {
      await db.lessonProgress.update({
        where: { id: row.id },
        data: { lastSectionId: sectionId },
      });
      break;
    }
    case "complete-section": {
      if (!sectionsCompleted.includes(sectionId)) {
        sectionsCompleted = [...sectionsCompleted, sectionId];
      }
      await db.lessonProgress.update({
        where: { id: row.id },
        data: { sectionsCompleted: JSON.stringify(sectionsCompleted) },
      });
      break;
    }
    case "bookmark": {
      const bookmarked = body.bookmarked === true;
      await db.lessonProgress.update({
        where: { id: row.id },
        data: { bookmarked },
      });
      break;
    }
    case "note": {
      const content = typeof body.content === "string" ? body.content.slice(0, 4000) : "";
      const existing = await db.lessonNote.findUnique({
        where: {
          userId_lessonSlug_sectionId: {
            userId: user.id,
            lessonSlug: slug,
            sectionId,
          },
        },
      });
      if (content.length === 0) {
        if (existing) {
          await db.lessonNote.delete({ where: { id: existing.id } });
        }
      } else if (existing) {
        await db.lessonNote.update({
          where: { id: existing.id },
          data: { content },
        });
      } else {
        await db.lessonNote.create({
          data: { userId: user.id, lessonSlug: slug, sectionId, content },
        });
      }
      break;
    }
    default:
      return jsonError(
        "Unknown action. Use position | complete-section | bookmark | note.",
        422,
      );
  }

  // Recompute completion after the action.
  const best = await db.assessmentResult.findFirst({
    where: { userId: user.id, lessonSlug: slug, status: "completed" },
    orderBy: { score: "desc" },
  });
  const completion = computeLessonStatus(
    lesson,
    { sectionsCompleted },
    Boolean(best?.passed),
  );

  const status = completion.completed ? "completed" : "in-progress";
  if (status !== row.status) {
    await db.lessonProgress.update({
      where: { id: row.id },
      data: {
        status,
        completedAt: status === "completed" ? new Date() : null,
      },
    });
  }

  const updated = await db.lessonProgress.findUnique({ where: { id: row.id } });

  return json({
    progress: {
      lessonSlug: slug,
      status: updated!.status as "in-progress" | "completed",
      sectionsCompleted,
      lastSectionId: updated!.lastSectionId,
      bookmarked: updated!.bookmarked,
      completedAt: updated!.completedAt?.toISOString() ?? null,
    },
    completion,
  });
}
