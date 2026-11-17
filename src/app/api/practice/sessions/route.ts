import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import {
  listSessions,
  startSession,
  PracticeError,
  type StartSessionInput,
} from "@/lib/practice/sessions";
import { MODE_SPECS, PRACTICE_MODE_IDS, type PracticeMode } from "@/lib/practice/types";
import { isDifficulty } from "@/lib/practice/trend";

interface StartBody {
  mode?: unknown;
  config?: unknown;
}

function parseStartBody(body: StartBody | null): StartSessionInput | null {
  if (!body) return null;
  const mode = typeof body.mode === "string" ? body.mode : "";
  if (!(PRACTICE_MODE_IDS as string[]).includes(mode)) return null;
  const rawConfig = (body.config ?? {}) as Record<string, unknown>;
  const config: Record<string, unknown> = {};
  if (typeof rawConfig.chapterSlug === "string" && rawConfig.chapterSlug) {
    config.chapterSlug = rawConfig.chapterSlug;
  }
  if (typeof rawConfig.courseSlug === "string" && rawConfig.courseSlug) {
    config.courseSlug = rawConfig.courseSlug;
  }
  if (typeof rawConfig.count === "number" && Number.isFinite(rawConfig.count)) {
    config.count = Math.max(1, Math.min(40, Math.round(rawConfig.count)));
  }
  if (typeof rawConfig.timeLimitSec === "number" && Number.isFinite(rawConfig.timeLimitSec)) {
    config.timeLimitSec = rawConfig.timeLimitSec;
  }
  // PROMPT 38 §7 — adaptive difficulty preference (validated server-side;
  // the service drops it for fixed-coverage modes).
  if (Array.isArray(rawConfig.difficulty)) {
    const bands = [...new Set(rawConfig.difficulty.filter(isDifficulty))];
    if (bands.length > 0) config.difficulty = bands;
  }
  return { mode: mode as PracticeMode, config };
}

/**
 * POST /api/practice/sessions — start a practice-zone session. The server
 * assembles the questions (never the client), stores the draw, and returns
 * sanitized questions without any grading data.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in to practise.", 401);

  const body = await readJson<StartBody>(req);
  const input = parseStartBody(body);
  if (!input) return jsonError("Unknown practice mode.", 422);

  try {
    const started = await startSession(user.id, input);
    return json(
      {
        ...started,
        modeSpec: MODE_SPECS[input.mode],
      },
      201,
    );
  } catch (error) {
    if (error instanceof PracticeError) {
      return jsonError(error.message, error.status);
    }
    console.error("[practice] start failed:", error);
    return jsonError("Could not start this session. Please try again.", 500);
  }
}

/** GET /api/practice/sessions — the learner's session history. */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const sessions = await listSessions(user.id);
  return json({ sessions });
}
