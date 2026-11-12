/// <reference types="bun-types" />
import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import { POST as registerRoute } from "@/app/api/auth/register/route";
import { GET as modesRoute } from "@/app/api/tutor/modes/route";
import { GET as contextRoute } from "@/app/api/tutor/context/route";
import {
  GET as listRoute,
  POST as createRoute,
  DELETE as deleteAllRoute,
} from "@/app/api/tutor/conversations/route";
import {
  GET as getRoute,
  PATCH as patchRoute,
  DELETE as deleteRoute,
} from "@/app/api/tutor/conversations/[id]/route";
import { POST as messagesRoute } from "@/app/api/tutor/conversations/[id]/messages/route";
import { setLlmProviderOverride } from "@/lib/llm";
import { FakeLlmProvider } from "@/lib/llm/testing";
import { db } from "@/lib/db";
import { TUTOR_LIMITS } from "@/lib/tutor/service";

const BASE = "http://127.0.0.1:3000";

function request(path: string, init: RequestInit = {}): Request {
  return new Request(`${BASE}${path}`, init);
}

function ctx(id: string): { params: Promise<{ id: string }> } {
  return { params: Promise.resolve({ id }) };
}

function extractCookies(res: Response): string {
  const setCookie =
    typeof res.headers.getSetCookie === "function"
      ? res.headers.getSetCookie()
      : [res.headers.get("set-cookie") ?? ""].filter(Boolean);
  return setCookie.map((cookie: string) => cookie.split(";")[0]).join("; ");
}

function jsonBody(body: unknown, cookie?: string, method = "POST"): RequestInit {
  return {
    method,
    headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) },
    body: JSON.stringify(body),
  };
}

async function registerTestUser(): Promise<string> {
  const email = `tutor-${Date.now()}-${Math.floor(Math.random() * 10000)}@talksy.test`;
  const res = await registerRoute(
    request("/api/auth/register", jsonBody({ email, name: "Tutor Tester", password: "password123" })),
  );
  expect(res.status).toBe(201);
  return extractCookies(res);
}

interface SseEvents {
  meta: Record<string, unknown>[];
  deltas: string[];
  done: Record<string, unknown> | null;
  error: { message?: string } | null;
}

function parseSse(text: string): SseEvents {
  const events: SseEvents = { meta: [], deltas: [], done: null, error: null };
  for (const raw of text.split("\n\n")) {
    let event = "";
    const dataLines: string[] = [];
    for (const line of raw.split("\n")) {
      if (line.startsWith("event: ")) event = line.slice(7).trim();
      else if (line.startsWith("data: ")) dataLines.push(line.slice(6));
    }
    if (dataLines.length === 0) continue;
    let payload: unknown;
    try {
      payload = JSON.parse(dataLines.join("\n"));
    } catch {
      continue;
    }
    if (event === "meta") events.meta.push(payload as Record<string, unknown>);
    else if (event === "delta") {
      const text = (payload as { text?: string }).text ?? "";
      events.deltas.push(text);
    } else if (event === "done") events.done = payload as Record<string, unknown>;
    else if (event === "error") events.error = payload as { message?: string };
  }
  return events;
}

const TUTOR_REPLY = [
  "Good try! You are talking about yesterday — the past.",
  "We say: I went to school yesterday.",
  "Past actions take the past form of the verb: go → went.",
].join("\n");

const fake = new FakeLlmProvider({
  deltas: ["Good try! ", "We say: I went to school yesterday. ", "Past actions take the past form."],
});

beforeAll(() => {
  setLlmProviderOverride(fake);
});

afterAll(() => {
  setLlmProviderOverride(null);
});

describe("tutor API", () => {
  it("requires login for every route", async () => {
    expect((await modesRoute(request("/api/tutor/modes"))).status).toBe(401);
    expect((await listRoute(request("/api/tutor/conversations"))).status).toBe(401);
    expect(
      (await createRoute(request("/api/tutor/conversations", jsonBody({ mode: "grammar" })))).status,
    ).toBe(401);
    expect((await getRoute(request("/api/tutor/conversations/x"), ctx("x"))).status).toBe(401);
    expect(
      (
        await messagesRoute(
          request("/api/tutor/conversations/x/messages", jsonBody({ content: "hi" })),
          ctx("x"),
        )
      ).status,
    ).toBe(401);
    expect((await contextRoute(request("/api/tutor/context?mode=grammar"))).status).toBe(401);
  });

  it("serves the nine modes without leaking prompt material", async () => {
    const cookie = await registerTestUser();
    const res = await modesRoute(request("/api/tutor/modes", { headers: { cookie } }));
    expect(res.status).toBe(200);
    const data = (await res.json()) as {
      modes: { id: string; label: string; starters: string[] }[];
      usage: { requests: number; limit: number };
      limits: { maxMessageChars: number; dailyRequests: number };
    };
    expect(data.modes).toHaveLength(9);
    expect(data.modes.map((m) => m.id)).toContain("doubt");
    expect(data.modes.map((m) => m.id)).toContain("interview");
    expect(data.usage.requests).toBe(0);
    expect(data.usage.limit).toBe(TUTOR_LIMITS.dailyRequests);
    const serialized = JSON.stringify(data);
    expect(serialized).not.toContain("persona");
    expect(serialized).not.toContain("greeting");
    expect(serialized).not.toContain("You are the");
  });

  it("rejects unknown modes and bad lesson refs", async () => {
    const cookie = await registerTestUser();
    const badMode = await createRoute(
      request("/api/tutor/conversations", jsonBody({ mode: "weather" }, cookie)),
    );
    expect(badMode.status).toBe(400);

    const badRef = await createRoute(
      request("/api/tutor/conversations", jsonBody({ mode: "doubt", lessonRef: "javascript:alert(1)" }, cookie)),
    );
    expect(badRef.status).toBe(400);
  });

  it("creates a conversation with a canned (non-AI) greeting", async () => {
    const cookie = await registerTestUser();
    const res = await createRoute(
      request("/api/tutor/conversations", jsonBody({ mode: "grammar" }, cookie)),
    );
    expect(res.status).toBe(201);
    const data = (await res.json()) as {
      conversation: { mode: string; modeLabel: string; title: string; messageCount: number; includeContext: boolean };
      messages: { role: string; content: string; greeting: boolean }[];
    };
    expect(data.conversation.mode).toBe("grammar");
    expect(data.conversation.modeLabel).toBe("Grammar Teacher");
    expect(data.conversation.includeContext).toBe(true);
    expect(data.messages).toHaveLength(1);
    expect(data.messages[0].role).toBe("tutor");
    expect(data.messages[0].greeting).toBe(true);
    expect(data.messages[0].content).toContain("Grammar Teacher");
  });

  it("streams a full SSE exchange and persists both messages", async () => {
    const cookie = await registerTestUser();
    const created = await createRoute(
      request("/api/tutor/conversations", jsonBody({ mode: "grammar" }, cookie)),
    );
    const { conversation } = (await created.json()) as {
      conversation: { id: string };
    };

    const res = await messagesRoute(
      request(
        `/api/tutor/conversations/${conversation.id}/messages`,
        jsonBody({ content: "I am go to school yesterday." }, cookie),
      ),
      ctx(conversation.id),
    );
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toContain("text/event-stream");

    const events = parseSse(await res.text());
    expect(events.error).toBeNull();
    expect(events.meta).toHaveLength(1);
    expect(events.meta[0].mode).toBe("grammar");
    expect(typeof events.meta[0].learnerMessageId).toBe("string");
    expect(events.deltas.join("")).toContain("I went to school yesterday.");
    expect(events.done).not.toBeNull();
    expect(events.done?.tutorMessageId).toBeTruthy();
    expect(events.done?.requestsUsedToday).toBe(1);

    // Both messages persisted, greeting kept.
    const loaded = await getRoute(
      request(`/api/tutor/conversations/${conversation.id}`, { headers: { cookie } }),
      ctx(conversation.id),
    );
    const loadedData = (await loaded.json()) as {
      conversation: { title: string; messageCount: number };
      messages: { role: string; content: string }[];
    };
    expect(loadedData.messages).toHaveLength(3); // greeting + learner + tutor
    expect(loadedData.messages[1].content).toBe("I am go to school yesterday.");
    expect(loadedData.messages[2].content).toContain("I went to school yesterday.");
    // Conversation titled from the first learner message.
    expect(loadedData.conversation.title).toBe("I am go to school yesterday.");

    // The system prompt carried the learner context (level line).
    expect(fake.calls.length).toBeGreaterThan(0);
    const lastCall = fake.calls[fake.calls.length - 1];
    expect(lastCall.system).toContain("TEACHING MODE — Grammar Teacher");
    expect(lastCall.system).toContain("LEARNER CONTEXT");
    expect(lastCall.system).toContain("Level: beginner");
    expect(lastCall.messages[lastCall.messages.length - 1].content).toBe(
      "I am go to school yesterday.",
    );
  });

  it("rate-limits rapid consecutive messages", async () => {
    const cookie = await registerTestUser();
    const created = await createRoute(
      request("/api/tutor/conversations", jsonBody({ mode: "conversation" }, cookie)),
    );
    const { conversation } = (await created.json()) as { conversation: { id: string } };

    const first = await messagesRoute(
      request(
        `/api/tutor/conversations/${conversation.id}/messages`,
        jsonBody({ content: "Hello!" }, cookie),
      ),
      ctx(conversation.id),
    );
    expect(first.status).toBe(200);

    const second = await messagesRoute(
      request(
        `/api/tutor/conversations/${conversation.id}/messages`,
        jsonBody({ content: "Hi again!" }, cookie),
      ),
      ctx(conversation.id),
    );
    expect(second.status).toBe(429);
  });

  it("enforces the daily request cap", async () => {
    const cookie = await registerTestUser();
    const userRes = await db.session.findFirstOrThrow({
      where: { user: { email: { contains: "tutor-" } } },
      orderBy: { createdAt: "desc" },
      include: { user: true },
    });
    const today = new Date().toISOString().slice(0, 10);
    await db.tutorUsage.upsert({
      where: { userId: userRes.user.id },
      create: { userId: userRes.user.id, day: today, requests: TUTOR_LIMITS.dailyRequests },
      update: { day: today, requests: TUTOR_LIMITS.dailyRequests },
    });

    const created = await createRoute(
      request("/api/tutor/conversations", jsonBody({ mode: "grammar" }, cookie)),
    );
    const { conversation } = (await created.json()) as { conversation: { id: string } };
    const res = await messagesRoute(
      request(
        `/api/tutor/conversations/${conversation.id}/messages`,
        jsonBody({ content: "hello" }, cookie),
      ),
      ctx(conversation.id),
    );
    expect(res.status).toBe(429);
    const body = (await res.json()) as { error: string };
    expect(body.error).toContain("used all");
  });

  it("validates message content", async () => {
    const cookie = await registerTestUser();
    const created = await createRoute(
      request("/api/tutor/conversations", jsonBody({ mode: "sentence" }, cookie)),
    );
    const { conversation } = (await created.json()) as { conversation: { id: string } };

    const empty = await messagesRoute(
      request(
        `/api/tutor/conversations/${conversation.id}/messages`,
        jsonBody({ content: "   " }, cookie),
      ),
      ctx(conversation.id),
    );
    expect(empty.status).toBe(400);

    const tooLong = await messagesRoute(
      request(
        `/api/tutor/conversations/${conversation.id}/messages`,
        jsonBody({ content: "x".repeat(TUTOR_LIMITS.maxMessageChars + 1) }, cookie),
      ),
      ctx(conversation.id),
    );
    expect(tooLong.status).toBe(400);
  });

  it("keeps conversations private between learners", async () => {
    const cookieA = await registerTestUser();
    const cookieB = await registerTestUser();
    const created = await createRoute(
      request("/api/tutor/conversations", jsonBody({ mode: "writing" }, cookieA)),
    );
    const { conversation } = (await created.json()) as { conversation: { id: string } };

    expect(
      (await getRoute(request(`/api/tutor/conversations/${conversation.id}`, { headers: { cookie: cookieB } }), ctx(conversation.id))).status,
    ).toBe(404);
    expect(
      (
        await patchRoute(
          request(`/api/tutor/conversations/${conversation.id}`, jsonBody({ includeContext: false }, cookieB)),
          ctx(conversation.id),
        )
      ).status,
    ).toBe(404);
    expect(
      (
        await messagesRoute(
          request(`/api/tutor/conversations/${conversation.id}/messages`, jsonBody({ content: "hi" }, cookieB)),
          ctx(conversation.id),
        )
      ).status,
    ).toBe(404);
    expect(
      (
        await deleteRoute(
          request(`/api/tutor/conversations/${conversation.id}`, { method: "DELETE", headers: { cookie: cookieB } }),
          ctx(conversation.id),
        )
      ).status,
    ).toBe(404);

    // The owner still sees it.
    expect(
      (await getRoute(request(`/api/tutor/conversations/${conversation.id}`, { headers: { cookie: cookieA } }), ctx(conversation.id))).status,
    ).toBe(200);
  });

  it("toggles context sharing and changes the prompt accordingly", async () => {
    const cookie = await registerTestUser();
    const created = await createRoute(
      request("/api/tutor/conversations", jsonBody({ mode: "vocabulary" }, cookie)),
    );
    const { conversation } = (await created.json()) as { conversation: { id: string } };

    // Share context: the prompt carries the learner record block.
    // (Consume the SSE body fully — finalize runs inside the stream, so the
    // tutor reply is only persisted once the body has been read.)
    const first = await messagesRoute(
      request(
        `/api/tutor/conversations/${conversation.id}/messages`,
        jsonBody({ content: "What does commute mean?" }, cookie),
      ),
      ctx(conversation.id),
    );
    expect(first.status).toBe(200);
    expect(parseSse(await first.text()).done).not.toBeNull();
    const withContext = fake.calls[fake.calls.length - 1].system;
    expect(withContext).toContain("LEARNER CONTEXT (this learner's own TalkSy record");

    // Backdate the whole first exchange to dodge the rate limit, then turn
    // sharing off.
    await db.tutorMessage.updateMany({
      where: { conversationId: conversation.id },
      data: { createdAt: new Date(Date.now() - 60_000) },
    });

    const patched = await patchRoute(
      request(`/api/tutor/conversations/${conversation.id}`, jsonBody({ includeContext: false }, cookie)),
      ctx(conversation.id),
    );
    expect(patched.status).toBe(200);
    const patchedData = (await patched.json()) as { conversation: { includeContext: boolean } };
    expect(patchedData.conversation.includeContext).toBe(false);

    const second = await messagesRoute(
      request(
        `/api/tutor/conversations/${conversation.id}/messages`,
        jsonBody({ content: "Another word please?" }, cookie),
      ),
      ctx(conversation.id),
    );
    expect(second.status).toBe(200);
    const withoutContext = fake.calls[fake.calls.length - 1].system;
    expect(withoutContext).toContain("chosen NOT to share their learning record");
    expect(withoutContext).not.toContain("Recent mistakes");
  });

  it("removes the failed learner message when the provider errors", async () => {
    const cookie = await registerTestUser();
    const created = await createRoute(
      request("/api/tutor/conversations", jsonBody({ mode: "reading" }, cookie)),
    );
    const { conversation } = (await created.json()) as { conversation: { id: string } };

    setLlmProviderOverride(new FakeLlmProvider({ error: "network" }));
    const res = await messagesRoute(
      request(
        `/api/tutor/conversations/${conversation.id}/messages`,
        jsonBody({ content: "Explain however" }, cookie),
      ),
      ctx(conversation.id),
    );
    expect(res.status).toBe(200);
    const events = parseSse(await res.text());
    expect(events.error).not.toBeNull();
    expect(events.done).toBeNull();
    expect(events.error?.message).toContain("could not be reached");
    setLlmProviderOverride(fake);

    // History is back to just the greeting — no orphan learner message.
    const loaded = await getRoute(
      request(`/api/tutor/conversations/${conversation.id}`, { headers: { cookie } }),
      ctx(conversation.id),
    );
    const loadedData = (await loaded.json()) as { messages: unknown[] };
    expect(loadedData.messages).toHaveLength(1);
  });

  it("serves the privacy context preview", async () => {
    const cookie = await registerTestUser();
    const res = await contextRoute(
      request("/api/tutor/context?mode=grammar", { headers: { cookie } }),
    );
    expect(res.status).toBe(200);
    const data = (await res.json()) as { level: string; text: string };
    expect(data.level).toBe("beginner");
    expect(data.text).toContain("Level: beginner");

    const badMode = await contextRoute(
      request("/api/tutor/context?mode=nope", { headers: { cookie } }),
    );
    expect(badMode.status).toBe(400);
  });

  it("lists, deletes and clears conversations", async () => {
    const cookie = await registerTestUser();
    const first = await createRoute(
      request("/api/tutor/conversations", jsonBody({ mode: "grammar" }, cookie)),
    );
    const second = await createRoute(
      request("/api/tutor/conversations", jsonBody({ mode: "interview" }, cookie)),
    );
    const { conversation: c1 } = (await first.json()) as { conversation: { id: string } };
    const { conversation: c2 } = (await second.json()) as { conversation: { id: string } };

    const listed = await listRoute(request("/api/tutor/conversations", { headers: { cookie } }));
    const listData = (await listed.json()) as { conversations: { id: string }[] };
    expect(listData.conversations).toHaveLength(2);

    const deleted = await deleteRoute(
      request(`/api/tutor/conversations/${c1.id}`, { method: "DELETE", headers: { cookie } }),
      ctx(c1.id),
    );
    expect(deleted.status).toBe(200);
    expect(
      (await getRoute(request(`/api/tutor/conversations/${c1.id}`, { headers: { cookie } }), ctx(c1.id))).status,
    ).toBe(404);

    const cleared = await deleteAllRoute(
      request("/api/tutor/conversations", { method: "DELETE", headers: { cookie } }),
    );
    expect(cleared.status).toBe(200);
    const after = await listRoute(request("/api/tutor/conversations", { headers: { cookie } }));
    const afterData = (await after.json()) as { conversations: unknown[] };
    expect(afterData.conversations).toHaveLength(0);
    expect(
      (await getRoute(request(`/api/tutor/conversations/${c2.id}`, { headers: { cookie } }), ctx(c2.id))).status,
    ).toBe(404);
  });
});
