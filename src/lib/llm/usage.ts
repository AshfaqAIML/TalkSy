/**
 * Usage monitoring + token management for every provider call — PROMPT 38 §9.
 *
 * `withUsageLogging` wraps any LlmProvider so each call writes one
 * `LlmCallLog` row: which feature, which provider, latency, a character-based
 * TOKEN ESTIMATE (clearly labeled as an estimate — providers do not report
 * token usage uniformly, and we never present these numbers as metered
 * billing figures), and the outcome kind. Logging failures are swallowed:
 * monitoring must never break a live reply.
 *
 * Rows never store prompt or reply content — measurements only.
 */

import { db } from "@/lib/db";
import { LlmError, type LlmProvider, type LlmRequest } from "./provider";

/** Honest character-based estimate (~4 chars/token). Never a billing figure. */
export function estimateTokens(chars: number): number {
  return Math.ceil(Math.max(0, chars) / 4);
}

export interface UsageLogMeta {
  /** Which AI feature made the call (tutor, writing-coach, …). */
  feature: string;
  /** The learner on whose behalf (nullable for system jobs). */
  userId?: string | null;
  /** Small context tag — tutor mode, scenario, section. Never content. */
  tag?: string | null;
}

interface LogRow {
  feature: string;
  provider: string;
  status: string;
  inputChars: number;
  outputChars: number;
  estTokens: number;
  latencyMs: number;
  userId?: string | null;
  tag?: string | null;
}

async function writeLog(row: LogRow): Promise<void> {
  try {
    await db.llmCallLog.create({
      data: {
        feature: row.feature,
        provider: row.provider,
        status: row.status,
        inputChars: row.inputChars,
        outputChars: row.outputChars,
        estTokens: row.estTokens,
        latencyMs: row.latencyMs,
        userId: row.userId ?? null,
        tag: row.tag ?? null,
      },
    });
  } catch {
    // Monitoring must never break the reply path.
  }
}

function inputCharsOf(req: LlmRequest): number {
  return req.system.length + req.messages.reduce((sum, m) => sum + m.content.length, 0);
}

function statusOf(error: unknown): string {
  if (error instanceof LlmError) return error.kind;
  return "network";
}

/**
 * Wrap a provider with per-call usage logging. The wrapper is transparent:
 * same name, same results, same thrown errors — plus one LlmCallLog row per
 * call (ok or failure).
 */
export function withUsageLogging(provider: LlmProvider, meta: UsageLogMeta): LlmProvider {
  return {
    name: provider.name,

    async complete(req: LlmRequest): Promise<string> {
      const startedAt = Date.now();
      const inputChars = inputCharsOf(req);
      try {
        const out = await provider.complete(req);
        await writeLog({
          feature: meta.feature,
          provider: provider.name,
          status: "ok",
          inputChars,
          outputChars: out.length,
          estTokens: estimateTokens(inputChars + out.length),
          latencyMs: Date.now() - startedAt,
          userId: meta.userId ?? null,
          tag: meta.tag ?? null,
        });
        return out;
      } catch (error) {
        await writeLog({
          feature: meta.feature,
          provider: provider.name,
          status: statusOf(error),
          inputChars,
          outputChars: 0,
          estTokens: estimateTokens(inputChars),
          latencyMs: Date.now() - startedAt,
          userId: meta.userId ?? null,
          tag: meta.tag ?? null,
        });
        throw error;
      }
    },

    async *stream(req: LlmRequest): AsyncGenerator<string> {
      const startedAt = Date.now();
      const inputChars = inputCharsOf(req);
      let outputChars = 0;
      try {
        for await (const delta of provider.stream(req)) {
          outputChars += delta.length;
          yield delta;
        }
        await writeLog({
          feature: meta.feature,
          provider: provider.name,
          status: "ok",
          inputChars,
          outputChars,
          estTokens: estimateTokens(inputChars + outputChars),
          latencyMs: Date.now() - startedAt,
          userId: meta.userId ?? null,
          tag: meta.tag ?? null,
        });
      } catch (error) {
        await writeLog({
          feature: meta.feature,
          provider: provider.name,
          status: statusOf(error),
          inputChars,
          outputChars,
          estTokens: estimateTokens(inputChars + outputChars),
          latencyMs: Date.now() - startedAt,
          userId: meta.userId ?? null,
          tag: meta.tag ?? null,
        });
        throw error;
      }
    },
  };
}

// ---------------------------------------------------------------------------
// Summary for the staff AI-usage dashboard
// ---------------------------------------------------------------------------

export interface UsageDayRow {
  day: string; // YYYY-MM-DD
  feature: string;
  provider: string;
  calls: number;
  ok: number;
  errors: number;
  estTokens: number;
  avgLatencyMs: number;
}

export interface UsageSummary {
  days: number;
  windowStart: string;
  rows: UsageDayRow[];
  totals: { calls: number; ok: number; errors: number; estTokens: number };
  errorKinds: { kind: string; count: number }[];
}

/** Aggregate the last `days` days of calls per feature+provider+day. */
export async function llmUsageSummary(days = 14): Promise<UsageSummary> {
  const windowMs = Math.max(1, days) * 86_400_000;
  const since = new Date(Date.now() - windowMs);
  const rows = await db.llmCallLog.findMany({
    where: { createdAt: { gte: since } },
    orderBy: { createdAt: "asc" },
  });

  const grouped = new Map<string, UsageDayRow & { latencySum: number }>();
  const errorKinds = new Map<string, number>();
  const totals = { calls: 0, ok: 0, errors: 0, estTokens: 0 };

  for (const row of rows) {
    const day = row.createdAt.toISOString().slice(0, 10);
    const key = `${day}|${row.feature}|${row.provider}`;
    let bucket = grouped.get(key);
    if (!bucket) {
      bucket = {
        day,
        feature: row.feature,
        provider: row.provider,
        calls: 0,
        ok: 0,
        errors: 0,
        estTokens: 0,
        avgLatencyMs: 0,
        latencySum: 0,
      };
      grouped.set(key, bucket);
    }
    bucket.calls += 1;
    bucket.estTokens += row.estTokens;
    bucket.latencySum += row.latencyMs;
    if (row.status === "ok") {
      bucket.ok += 1;
    } else {
      bucket.errors += 1;
      errorKinds.set(row.status, (errorKinds.get(row.status) ?? 0) + 1);
    }
    totals.calls += 1;
    totals.estTokens += row.estTokens;
    if (row.status === "ok") totals.ok += 1;
    else totals.errors += 1;
  }

  const summary: UsageSummary = {
    days,
    windowStart: since.toISOString(),
    rows: [...grouped.values()]
      .map(({ latencySum, ...rest }) => ({
        ...rest,
        avgLatencyMs: rest.calls > 0 ? Math.round(latencySum / rest.calls) : 0,
      }))
      .sort((a, b) => (a.day === b.day ? a.feature.localeCompare(b.feature) : a.day < b.day ? 1 : -1)),
    totals,
    errorKinds: [...errorKinds.entries()]
      .map(([kind, count]) => ({ kind, count }))
      .sort((a, b) => b.count - a.count),
  };
  return summary;
}
