import { z } from "zod";

/**
 * TalkSy environment validation (server-side only).
 *
 * Usage: `import { env } from "@/lib/env"` — reading `process.env` directly
 * is reserved for this module. Validation fails fast at first access with a
 * message that names the missing variable, instead of surfacing as a cryptic
 * Prisma/network error later.
 *
 * Optional variables get typed defaults here so consumers never branch on
 * undefined. Keep this list in sync with `.env.example`.
 */

const serverEnvSchema = z.object({
  /** SQLite connection string (path is relative to the repo root). */
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required (see .env.example)"),
  /** Set to "1" to keep debug-level logs in production. */
  TALKSY_DEBUG: z.string().optional().default("0"),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;

let cached: ServerEnv | null = null;

/** Validated server environment. Throws on the first invalid access. */
export function getServerEnv(): ServerEnv {
  if (cached) return cached;
  const parsed = serverEnvSchema.safeParse(process.env);
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    throw new Error(
      `Invalid environment: ${issue?.message ?? "unknown error"} ` +
        `(received DATABASE_URL=${process.env.DATABASE_URL ? "<set>" : "<missing>"})`
    );
  }
  cached = parsed.data;
  return cached;
}
