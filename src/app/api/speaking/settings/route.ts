import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { getSpeakingSettings, updateSpeakingSettings } from "@/lib/speaking/service";
import { normalizeProvider } from "@/data/speaking";

/**
 * POST /api/speaking/settings — update the STT provider, transcript
 * retention, and (once, explicitly) microphone + privacy consent.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson<{
    provider?: string;
    retentionDays?: number;
    consent?: boolean;
  }>(req);
  if (!body) return jsonError("Invalid request body.", 400);

  if (
    body.provider !== undefined &&
    typeof body.provider !== "string"
  ) {
    return jsonError("Provider must be a string.", 400);
  }
  if (
    body.retentionDays !== undefined &&
    typeof body.retentionDays !== "number"
  ) {
    return jsonError("Retention must be a number of days.", 400);
  }
  if (body.consent !== undefined && body.consent !== true) {
    return jsonError("Consent can only be granted (true).", 400);
  }

  const settings = await updateSpeakingSettings(user.id, {
    provider: body.provider ? normalizeProvider(body.provider) : undefined,
    retentionDays: typeof body.retentionDays === "number" ? body.retentionDays : undefined,
    consent: body.consent === true ? true : undefined,
  });
  return json({ settings });
}

/** GET /api/speaking/settings — current settings + consent state. */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const settings = await getSpeakingSettings(user.id);
  return json({ settings });
}
