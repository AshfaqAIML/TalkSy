import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { db } from "@/lib/db";
import {
  DEFAULT_TUTOR_PREFERENCES,
  validatedPreferences,
} from "@/lib/tutor/context";

/**
 * GET  /api/tutor/preferences — the learner's teaching preferences
 *       (PROMPT 38 §5), or the defaults when never set.
 * PUT   /api/tutor/preferences — validate and save. Every value is checked
 *       server-side; invalid values are rejected with a clear message.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const row = await db.tutorSettings.findUnique({ where: { userId: user.id } });
  return json({
    preferences: row ? validatedPreferences(row) : DEFAULT_TUTOR_PREFERENCES,
    isDefault: row === null,
  });
}

interface PutBody {
  replyLength?: unknown;
  practiceAppetite?: unknown;
  correctionStyle?: unknown;
}

const REPLY_LENGTHS = ["brief", "normal", "thorough"] as const;
const APPETITES = ["fewer", "normal", "more"] as const;
const CORRECTIONS = ["immediate", "note-first"] as const;

function oneOf<T extends string>(value: unknown, allowed: readonly T[]): T | null {
  return typeof value === "string" && (allowed as readonly string[]).includes(value)
    ? (value as T)
    : null;
}

export async function PUT(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson<PutBody>(req);
  if (!body) return jsonError("Send the preference values.", 400);

  const replyLength = oneOf(body.replyLength, REPLY_LENGTHS);
  const practiceAppetite = oneOf(body.practiceAppetite, APPETITES);
  const correctionStyle = oneOf(body.correctionStyle, CORRECTIONS);
  if (!replyLength || !practiceAppetite || !correctionStyle) {
    return jsonError(
      "Preferences must be: replyLength (brief|normal|thorough), practiceAppetite (fewer|normal|more), correctionStyle (immediate|note-first).",
      422,
    );
  }

  await db.tutorSettings.upsert({
    where: { userId: user.id },
    create: { userId: user.id, replyLength, practiceAppetite, correctionStyle },
    update: { replyLength, practiceAppetite, correctionStyle },
  });

  const row = await db.tutorSettings.findUnique({ where: { userId: user.id } });
  return json({
    preferences: row ? validatedPreferences(row) : DEFAULT_TUTOR_PREFERENCES,
  });
}
