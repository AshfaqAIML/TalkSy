import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { getSpeakingSettings } from "@/lib/speaking/service";
import { transcribeWithServer } from "@/lib/speaking/stt";

/**
 * POST /api/speaking/transcribe — convert a submitted recording into a
 * transcript using the configured server STT provider.
 *
 * Privacy: audio is held in memory for this request only. It is never
 * written to disk or the database — the response contains text alone.
 * Consent is required before the server will accept audio at all.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const settings = await getSpeakingSettings(user.id);
  if (!settings.consented) {
    return jsonError(
      "Microphone consent is required before submitting audio. Accept the privacy notice in Speaking Lab settings first.",
      403,
    );
  }
  if (settings.provider === "manual") {
    return jsonError("Typed responses mode is active — transcription is disabled.", 400);
  }

  const body = await readJson<{ audioBase64?: unknown }>(req);
  if (!body || typeof body.audioBase64 !== "string") {
    return jsonError("Send { audioBase64 } with the recording.", 400);
  }

  const result = await transcribeWithServer(body.audioBase64);
  if (!result.ok) {
    return json({ error: result.error, message: result.message }, 200);
  }
  return json({ transcript: result.transcript, provider: "server" });
}
