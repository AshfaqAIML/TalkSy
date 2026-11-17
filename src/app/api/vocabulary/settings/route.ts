import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { DEFAULT_SRS_CONFIG, resolveSrsConfig, type SrsConfigOverrides } from "@/lib/vocab/srs";

/** GET /api/vocabulary/settings — the learner's SRS configuration. */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const row = await db.vocabSettings.findUnique({ where: { userId: user.id } });
  let overrides: SrsConfigOverrides = {};
  if (row) {
    try {
      const parsed = JSON.parse(row.config) as SrsConfigOverrides;
      if (parsed && typeof parsed === "object") overrides = parsed;
    } catch {
      overrides = {};
    }
  }
  return json({ config: resolveSrsConfig(overrides), overrides });
}

interface PutBody {
  overrides?: unknown;
}

/** PUT /api/vocabulary/settings — update SRS config overrides (validated). */
export async function PUT(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson<PutBody>(req);
  if (!body || !body.overrides || typeof body.overrides !== "object" || Array.isArray(body.overrides)) {
    return jsonError("Missing overrides object.", 400);
  }

  // Only accept known, well-typed keys; everything else is ignored.
  const raw = body.overrides as Record<string, unknown>;
  const allowedNumbers: (keyof SrsConfigOverrides)[] = [
    "newPerDay",
    "reviewsPerDay",
    "graduateIntervalDays",
    "easyBonus",
    "hardFactor",
    "minEase",
    "maxEase",
    "easeDeltaAgain",
    "easeDeltaHard",
    "easeDeltaEasy",
    "lapseFactor",
    "difficultFactor",
    "performanceWeight",
    "masterRepetitions",
    "masterIntervalDays",
    "maxIntervalDays",
  ];
  const overrides: Record<string, number | number[]> = {};
  for (const key of allowedNumbers) {
    const value = raw[key];
    if (typeof value === "number" && Number.isFinite(value)) {
      overrides[key] = value;
    }
  }
  if (Array.isArray(raw.learningStepMinutes)) {
    const steps = raw.learningStepMinutes.filter(
      (n): n is number => typeof n === "number" && Number.isFinite(n) && n > 0,
    );
    if (steps.length > 0) overrides.learningStepMinutes = steps;
  }

  // Resolve once so the client immediately sees the clamped result.
  const config = resolveSrsConfig(overrides as SrsConfigOverrides);
  if (config.masterRepetitions < 2) {
    return jsonError("masterRepetitions must be at least 2 — one correct answer can never master a word.", 400);
  }

  await db.vocabSettings.upsert({
    where: { userId: user.id },
    create: { userId: user.id, config: JSON.stringify(overrides) },
    update: { config: JSON.stringify(overrides) },
  });

  return json({ config, overrides });
}

/** DELETE /api/vocabulary/settings — reset to the defaults. */
export async function DELETE(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  await db.vocabSettings.deleteMany({ where: { userId: user.id } });
  return json({ config: DEFAULT_SRS_CONFIG, overrides: {} });
}
