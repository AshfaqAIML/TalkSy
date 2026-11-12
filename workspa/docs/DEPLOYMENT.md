# TalkSy — Deployment & Operations Guide

This guide covers everything needed to run TalkSy in production: environment,
database lifecycle, backups, logging, monitoring, error tracking, deployment
and rollback.

## 1. Requirements

- Node.js 20+ (or Bun 1.1+)
- SQLite 3 (bundled with the OS; no separate database server)
- ~200 MB disk for the app plus room for `db/` growth and `db/media/` uploads
- TLS termination in front of the app (reverse proxy or platform ingress)

## 2. Environment variables

Copy `.env.example` to `.env`:

| Variable | Required | Notes |
| --- | --- | --- |
| `DATABASE_URL` | yes | SQLite file path, e.g. `file:/srv/talksy/db/custom.db`. Keep it on a persistent volume. |

The AI features (tutor LLM, speech-to-text) use a server-side SDK that reads
its provider credentials from its own configuration file on the server
(`.z-ai-config`, gitignored). Never expose those credentials to the client —
the code imports the SDK only inside `src/lib/**` server modules.

## 3. Database lifecycle

### Schema migrations (production)

Development used `prisma db push` (fast, no migration history). For
production, create a migration history once and apply it on every release:

```bash
# One-time: generate the initial migration from the current schema
bunx prisma migrate dev --name init --create-only   # review the SQL
bunx prisma migrate dev                             # apply locally

# Every release (does not run the app's seed logic):
bunx prisma migrate deploy
```

`prisma migrate deploy` is idempotent and safe to run from the release
pipeline. Always take a backup (§4) before deploying a migration.

### Seeding

Two seed mechanisms exist, both idempotent:

1. **Content-as-code library** (lessons, exercises, reading/listening/
   speaking/writing content): compiled into the app; no seeding step needed.
2. **Self-healing seed** (`src/lib/cms/seed.ts`, called by the login route):
   creates the staff accounts and the starter CMS course on first login if
   missing. Staff accounts:

   | Account | Password | Role |
   | --- | --- | --- |
   | `admin@talksy.app` | `Admin1234!` | administrator |
   | `editor@talksy.app` | `Editor1234!` | content editor |
   | `teacher@talksy.app` | `Teacher1234!` | teacher/reviewer |

   **Change these passwords immediately after the first production login**
   (an admin can suspend/recreate accounts in the CMS user manager).

Optional manual seed script: `bun scripts/seed.ts` (demo data for staging).

## 4. Backup strategy

Everything user-generated lives in two places: the SQLite file and
`db/media/` (uploaded audio/images). Back up both.

```bash
# Consistent SQLite backup (safe while the app runs):
bunx prisma db execute --stdin <<< "VACUUM INTO '/backups/talksy-$(date +%F).db';"

# Or with the sqlite3 CLI if installed:
sqlite3 /srv/talksy/db/custom.db ".backup '/backups/talksy-$(date +%F).db'"

# Media files:
rsync -a /srv/talksy/db/media/ /backups/media/

# Example nightly cron (02:30, keep 14 days):
30 2 * * *  sqlite3 /srv/talksy/db/custom.db ".backup '/backups/talksy-$(date +\%F).db'" && rsync -a /srv/talksy/db/media/ /backups/media/ && find /backups -name 'talksy-*.db' -mtime +14 -delete
```

Test restores quarterly: stop the app, replace the db file, start, and spot
check logins + one lesson completion.

## 5. Logging

- The dev script tees output to `dev.log`. In production, run the server
  under a process manager that captures stdout/stderr (systemd, Docker,
  PM2…). Next.js logs requests and uncaught errors to stdout.
- SQLite/Prisma query errors are logged by Prisma to stderr.
- Content workflow changes (publish, approve, role changes…) are recorded in
  the `CmsAuditLog` table, viewable in the CMS "Import / Export" tab.

Known limitation: there is no structured JSON logging or request IDs yet —
grep-friendly plain text only.

## 6. Monitoring & health checks

- `GET /api` returns `{ ok: true, uptimeSeconds, timestamp }` — unauthenticated
  and cheap; point your uptime monitor (UptimeRobot, platform probe, curl
  cron) at it.
- The CMS admin dashboard (`/#/admin`, staff login required) shows real
  database aggregates: registered/active learners, enrolments, lesson
  completions, assessment pass rate, engagement and content review status.

Known limitation: no metrics export (Prometheus etc.) and no error tracking
(Sentry etc.) yet. Adding `@sentry/nextjs` is the recommended first step for
error tracking.

## 7. Deployment

```bash
bun install                # install dependencies
bunx prisma generate       # build the Prisma client
bunx prisma migrate deploy # apply migrations (after §4 backup!)
bun run build              # production build (creates .next/standalone)
cp -r .next/static .next/standalone/.next/ && cp -r public .next/standalone/
NODE_ENV=production PORT=3000 bun .next/standalone/server.js
```

Put a TLS-terminating proxy in front (Caddy/Nginx/platform ingress) and set
the `Secure` attribute on the session cookie for HTTPS deployments
(`src/lib/auth.ts`, `buildSessionCookie`).

Zero-downtime note: with a single SQLite file, run one app instance, or put
the database on a shared volume with WAL mode and accept SQLite's single
writer. For multi-instance deployments, migrate to Postgres by changing the
Prisma `datasource` provider and re-running migrations.

## 8. Rollback procedure

1. **Application rollback**: `git revert <bad-commit>` (or deploy the
   previous release) and re-run §7. The app is stateless — nothing else to do.
2. **Migration rollback**: Prisma migrations are forward-only. Restore the
   database from the pre-deployment backup (§4): stop the app, replace the
   db file, start. Content and user data return to the backup point.
3. **Content rollback (no downtime)**: CMS content is versioned — open the
   lesson/question in the admin CMS and restore the previous version. This
   never touches historical assessment data.
4. Verify after rollback: `GET /api` returns ok; log in; open one lesson;
   complete one exercise.
