import { NextResponse } from "next/server";

/**
 * GET /api — lightweight health endpoint for uptime checks and load
 * balancers. Deliberately unauthenticated and free of sensitive data.
 */
export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "talksy",
    uptimeSeconds: Math.round(process.uptime()),
    timestamp: new Date().toISOString(),
  });
}
