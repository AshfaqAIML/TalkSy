# Analysis: "Request failed (500)." error on registration

## Problem
Users get "Request failed (500)." when trying to register at https://talksy-peach.vercel.app/#/register

## Root Cause
The **DATABASE_URL** in `.env` is set to a local SQLite path:
```
DATABASE_URL=file:/home/z/my-project/db/custom.db
```

This path **does not exist** in the Vercel production environment, causing all database operations to fail with a 500 error.

## How the error flows

1. User submits the registration form at `#/register`
2. Frontend calls `POST /api/auth/register` (via `src/lib/client/api.ts` `register` function)
3. The `request()` function fetches the endpoint and checks the response
4. The server-side `register` route in `src/app/api/auth/register/route.ts` tries to:
   - Parse the request body
   - Validate email/password/name
   - Check for existing user
   - **Create user via `db.user.create()`** ← **Fails here**
   - Create session via `createSession()`
5. Because the SQLite database path is invalid in production, `db.user.create()` throws an error
6. No try-catch wraps the route handler, so the error becomes a 500 HTTP response
7. The client's `request()` function sees `res.status === 500` and the response body doesn't have an "error" field, so it returns `"Request failed (500)."`

## Key code paths

### Register route (src/app/api/auth/register/route.ts, lines 15-55)
- No try-catch block around the handler
- Calls `db.user.create()` and `createSession()` which fail when DB is unreachable
- Any unhandled exception → 500 error

### Client request (src/lib/client/api.ts, lines 243-263)
```typescript
if (!res.ok) {
  const message =
    typeof data?.error === "string" ? data.error : `Request failed (${res.status}).`;
  return { ok: false, error: message, status: res.status };
}
```
- When `res.status === 500` and the JSON body has no `error` field → "Request failed (500)."

### Database config (src/lib/db.ts, .env)
```
DATABASE_URL=file:/home/z/my-project/db/custom.db
```
- This is a **local development path** only
- Vercel production environment cannot resolve `/home/z/my-project/db/custom.db`

## Quick fixes

### 1. For production/Vercel deployment
- Use a **PostgreSQL database** (recommended) or a cloud SQLite service
- Set the `DATABASE_URL` environment variable in Vercel to the production connection string
- Example for PlanetScale/Turso: `DATABASE_URL="mysql://..."` or `postgresql://...`
- Example for Neon: `DATABASE_URL="postgresql://ep-name:password@aws.neon.tech/db?sslmode=..."

### 2. Add error handling to the register route
Wrap the handler in a try-catch to return a proper error response instead of a 500 crash:

```typescript
export async function POST(req: Request) {
  try {
    // ... existing logic ...
  } catch (error) {
    console.error("Registration error:", error)
    return jsonError("Failed to create account. Please try again.", 500)
  }
}
```

### 3. Verify Vercel environment variables
- Go to Vercel Dashboard → Settings → Environment Variables
- Add `DATABASE_URL` with your production database connection string
- Redeploy the site

### 4. For local development
- Ensure the SQLite database file path exists, or use a different DATABASE_URL
- Run `bun run db:push` or `prisma migrate reset` to set up the database

## Related notes
- The login route also has the same DATABASE_URL dependency, so login would fail similarly
- The demo login (`demo@talksy.app` / `demo1234`) has self-healing logic (`ensureDemoUser()`), but it also requires a working database connection
- Consider adding a try-catch to all API route handlers for better error messages