/**
 * TalkSy structured logger.
 *
 * Single sanctioned console touchpoint (enforced by ESLint `no-console`
 * warnings everywhere else). API routes and server modules log through
 * this wrapper so output stays greppable and level-filterable:
 *
 *   logger.debug("quiz generated", { count, weakestFirst: true }); // dev only
 *   logger.info("lesson completed", { userId, lessonSlug });
 *   logger.warn("speech api unavailable");                          // no stack
 *   logger.error("completion write failed", err);                   // with stack
 *
 * Levels: debug < info < warn < error. DEBUG output is compiled out in
 * production unless TALKSY_DEBUG=1 (see src/lib/env.ts).
 */

export type LogLevel = "debug" | "info" | "warn" | "error";

const LEVEL_ORDER: Record<LogLevel, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
};

function minLevel(): LogLevel {
  if (process.env.TALKSY_DEBUG === "1") return "debug";
  return process.env.NODE_ENV === "production" ? "info" : "debug";
}

function emit(level: LogLevel, message: string, meta?: unknown): void {
  if (LEVEL_ORDER[level] < LEVEL_ORDER[minLevel()]) return;

  const payload: Record<string, unknown> = {
    ts: new Date().toISOString(),
    level,
    msg: message,
  };
  if (meta !== undefined) {
    payload.meta = meta instanceof Error ? { name: meta.name, message: meta.message } : meta;
  }
  const line = JSON.stringify(payload);

  if (level === "error") console.error(line);
  else if (level === "warn") console.warn(line);
  else console.log(line);
}

export const logger = {
  debug: (message: string, meta?: unknown) => emit("debug", message, meta),
  info: (message: string, meta?: unknown) => emit("info", message, meta),
  warn: (message: string, meta?: unknown) => emit("warn", message, meta),
  error: (message: string, meta?: unknown) => emit("error", message, meta),
};
