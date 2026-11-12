import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { getListeningActivity } from "@/data/listening";
import { toSafeListeningExercise } from "@/lib/listening/grade";
import { ensureListeningProgress, toListeningProgressDto } from "@/lib/listening/service";

/**
 * GET /api/listening/activities/[slug] — the full activity bundle: the audio
 * script (segments = what is spoken), sanitised exercises (grading data
 * stripped, options/items shuffled deterministically) and the learner's
 * progress. The transcript itself is only included when it is unlocked
 * (policy "open", or the activity is completed); otherwise the client
 * receives null and a locked flag. Requires login.
 */
export async function GET(
  req: Request,
  ctx: { params: Promise<{ slug: string }> },
) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const { slug } = await ctx.params;
  const activity = getListeningActivity(slug);
  if (!activity) return jsonError("Listening activity not found.", 404);

  const row = await ensureListeningProgress(user.id, activity.id);
  const progress = toListeningProgressDto(row, activity);

  return json({
    activity: {
      id: activity.id,
      slug: activity.slug,
      stage: activity.stage,
      title: activity.title,
      description: activity.description,
      estimatedMinutes: activity.estimatedMinutes,
      tags: activity.tags ?? [],
      speakers: activity.speakers ?? null,
      // Segment texts power the on-device TTS playback (like the lesson
      // engine's dictation audioText) — the UI hides the transcript display
      // until unlocked; grading data is never included.
      segments: activity.segments.map((segment) => ({
        id: segment.id,
        speakerId: segment.speakerId ?? null,
        text: segment.text,
        translation: segment.translation ?? null,
      })),
      transcriptPolicy: activity.transcriptPolicy,
      audio: activity.audio,
      exercises: activity.exercises.map((exercise) =>
        toSafeListeningExercise(exercise, `practice:${user.id}:${exercise.id}`),
      ),
    },
    progress,
  });
}
