/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { hashPassword, verifyPassword } from "@/lib/auth";
import { POST as loginRoute } from "@/app/api/auth/login/route";
import { ensureDemoUser, DEMO_EMAIL, DEMO_PASSWORD } from "@/lib/demo-user";
import { db } from "@/lib/db";

const BASE = "http://127.0.0.1:3000";

describe("password hashing (scrypt)", () => {
  it("hashes and verifies a password", () => {
    const hash = hashPassword("demo1234");
    expect(hash).toContain(":");
    expect(hash).not.toContain("demo1234");
    expect(verifyPassword("demo1234", hash)).toBe(true);
    expect(verifyPassword("wrong-password", hash)).toBe(false);
  });

  it("produces a different salt per call", () => {
    expect(hashPassword("same")).not.toBe(hashPassword("same"));
  });

  it("rejects malformed stored hashes", () => {
    expect(verifyPassword("x", "garbage")).toBe(false);
    expect(verifyPassword("x", "")).toBe(false);
  });
});

describe("self-healing demo account", () => {
  it("recreates the demo learner after a database wipe", async () => {
    // Simulate an environment-driven reset: remove the demo user, then log
    // in with the advertised credentials — the account must come back.
    await db.user.deleteMany({ where: { email: DEMO_EMAIL } });

    const res = await loginRoute(
      new Request(`${BASE}/api/auth/login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: DEMO_EMAIL, password: DEMO_PASSWORD }),
      }),
    );
    expect(res.status).toBe(200);
    const body = (await res.json()) as { user: { email: string; name: string } };
    expect(body.user.email).toBe(DEMO_EMAIL);
    expect(body.user.name).toBe("Demo Learner");

    // The account really exists in the database now.
    const restored = await ensureDemoUser();
    expect(restored.email).toBe(DEMO_EMAIL);

    // A second login works without recreating anything.
    const again = await loginRoute(
      new Request(`${BASE}/api/auth/login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: DEMO_EMAIL, password: DEMO_PASSWORD }),
      }),
    );
    expect(again.status).toBe(200);
  });

  it("still rejects a wrong password for the demo email", async () => {
    const res = await loginRoute(
      new Request(`${BASE}/api/auth/login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: DEMO_EMAIL, password: "not-the-demo" }),
      }),
    );
    expect(res.status).toBe(401);
  });
});
