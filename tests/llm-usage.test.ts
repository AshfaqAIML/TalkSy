/// <reference types="bun-types" />
import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import { db } from "@/lib/db";
import { withUsageLogging, llmUsageSummary, estimateTokens } from "@/lib/llm/usage";
import { FakeLlmProvider } from "@/lib/llm/testing";
import { LlmError, type LlmRequest } from "@/lib/llm/provider";
import { POST as registerRoute } from "@/app/api/auth/register/route";
import { GET as meRoute } from "@/app/api/auth/me/route";

const BASE = "http://127.0.0.1:3000";

const REQ: LlmRequest = {
  system: "s".repeat(100),
  messages: [{ role: "user", content: "u".repeat(50) }],
};

async function registerTestUser(): Promise<string> {
  const email = `llm-usage-${Date.now()}-${Math.floor(Math.random() * 10000)}@talksy.test`;
  const res = await registerRoute(
    new Request(`${BASE}/api/auth/register`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, name: "Usage Tester", password: "password123" }),
    }),
  );
  expect(res.status).toBe(201);
  const cookie = (res.headers.get("set-cookie") ?? "").split(";")[0];
  const me = await meRoute(new Request(`${BASE}/api/auth/me`, { headers: { cookie } }));
  const body = (await me.json()) as { user: { id: string } | null };
  if (!body.user) throw new Error("auth/me failed");
  return body.user.id;
}

// Clean the rows this suite writes so later summary counts stay deterministic.
const writtenIds: string[] = [];

describe("withUsageLogging (monitoring — PROMPT 38 §9)", () => {
  let userId: string;

  beforeAll(async () => {
    userId = await registerTestUser();
  });

  afterAll(async () => {
    if (writtenIds.length > 0) {
      await db.llmCallLog.deleteMany({ where: { id: { in: writtenIds } } });
    }
    await db.llmCallLog.deleteMany({ where: { userId } });
  });

  it("logs an ok row per successful call (measurements only, never content)", async () => {
    const provider = withUsageLogging(new FakeLlmProvider({ reply: "All good." }), {
      feature: "tutor",
      userId,
      tag: "grammar",
    });
    await expect(provider.complete(REQ)).resolves.toBe("All good.");
    const rows = await db.llmCallLog.findMany({ where: { userId, feature: "tutor" } });
    expect(rows.length).toBeGreaterThanOrEqual(1);
    const row = rows[0];
    writtenIds.push(row.id);
    expect(row.status).toBe("ok");
    expect(row.provider).toBe("fake");
    expect(row.tag).toBe("grammar");
    expect(row.inputChars).toBe(REQ.system.length + 50);
    expect(row.outputChars).toBe("All good.".length);
    expect(row.estTokens).toBe(Math.ceil((row.inputChars + row.outputChars) / 4));
    expect(row.latencyMs).toBeGreaterThanOrEqual(0);
    // Content is never stored — the row carries no prompt text.
    expect(JSON.stringify(row)).not.toContain("test tutor");
    expect(JSON.stringify(row)).not.toContain("All good.");
  });

  it("logs failures with their honest kind", async () => {
    const provider = withUsageLogging(
      new FakeLlmProvider({ error: "timeout" }),
      { feature: "writing-coach", userId },
    );
    await expect(provider.complete(REQ)).rejects.toThrow(LlmError);
    const rows = await db.llmCallLog.findMany({ where: { userId, feature: "writing-coach" } });
    expect(rows.length).toBeGreaterThanOrEqual(1);
    writtenIds.push(rows[0].id);
    expect(rows[0].status).toBe("timeout");
    expect(rows[0].outputChars).toBe(0);
  });

  it("aggregates a 14-day summary for the staff dashboard", async () => {
    const provider = withUsageLogging(new FakeLlmProvider({ reply: "ok" }), {
      feature: "exam-grade",
      userId,
    });
    await provider.complete(REQ);
    const rows = await db.llmCallLog.findMany({ where: { userId, feature: "exam-grade" } });
    writtenIds.push(...rows.map((r) => r.id));

    const summary = await llmUsageSummary(14);
    const examRow = summary.rows.find((r) => r.feature === "exam-grade");
    expect(examRow).toBeDefined();
    expect(examRow?.ok).toBeGreaterThanOrEqual(1);
    expect(summary.totals.calls).toBeGreaterThanOrEqual(1);
  });

  it("never breaks the reply when a log write fails", async () => {
    // A logging failure must be swallowed: a non-existent userId violates the
    // foreign key, so the write errors while the call still returns its text.
    const provider = withUsageLogging(new FakeLlmProvider({ reply: "still fine" }), {
      feature: "speaking-partner",
      userId: "nonexistent-user-for-fk-failure",
      tag: "fk-test",
    });
    await expect(provider.complete(REQ)).resolves.toBe("still fine");
    const rows = await db.llmCallLog.findMany({ where: { tag: "fk-test" } });
    expect(rows).toHaveLength(0); // the failing write stored nothing
  });

  it("estimates tokens honestly (~4 chars/token, never a billing figure)", () => {
    expect(estimateTokens(0)).toBe(0);
    expect(estimateTokens(7)).toBe(2);
    expect(estimateTokens(400)).toBe(100);
  });
});
