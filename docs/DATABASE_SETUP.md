# TalkSy — Database Setup & Operations Guide

TalkSy uses **Prisma 6** with **SQLite** by default (a PostgreSQL switch is
a datasource change — the schema avoids SQLite-specific features). The
database carries a dual mandate: user state (accounts, sessions, progress,
attempts) and the relational content mirror (course → level → module →
unit → lesson → exercises + answer keys + governance).

## Quick start (fresh environment)

```bash
# 1. Install dependencies
bun install

# 2. Configure the environment
cp .env.example .env        # then check DATABASE_URL

# 3. Create the database schema + seed reference data + content sync
bun run db:setup            # = prisma migrate deploy && bun scripts/seed.ts

# 4. Start the app
bun run dev                 # http://localhost:3000
```

`bun run db:setup` is idempotent and safe to re-run.

## Commands

| Command | What it does |
| --- | --- |
| `bun run db:setup` | Apply all migrations + seed (roles, languages, statuses, achievements, demo users) + content sync |
| `bun run db:migrate` | `prisma migrate dev` — create/apply migrations in development |
| `bun run db:deploy` | `prisma migrate deploy` — apply pending migrations (production) |
| `bun run db:seed` | Seed reference data + demo users + content sync (idempotent) |
| `bun run db:sync` | Content sync ONLY (after editing TypeScript content files) |
| `bun run db:reset` | `prisma migrate reset` — drop everything, re-apply migrations, re-seed |
| `bun run db:generate` | Regenerate the Prisma client after schema edits |
| `bun run db:push` | ⚠ `prisma db push` — prototype only; prefer migrations (history in `prisma/migrations/`) |

## Environment

`.env` (see `.env.example`):

```ini
DATABASE_URL=file:/home/z/my-project/db/custom.db

# Optional seed overrides (dev defaults shown — CHANGE BEFORE REAL DEPLOYMENT)
# SEED_ADMIN_PASSWORD=talksy-admin-dev
# SEED_TEACHER_PASSWORD=talksy-teacher-dev
# SEED_STUDENT_PASSWORD=talksy-student-dev
```

The `db/` directory is git-ignored. SQLite needs no server; the file is
created on first migration.

## Migrations

History lives in `prisma/migrations/`:

| Migration | Contents |
| --- | --- |
| `*_backend_foundation` | Full 55-model schema: identity, curriculum mirror, content, activities, progress, AI persistence, governance |
| `*_revision_item_composite_unique` | Widens `RevisionItem.itemKey` from globally-unique to per-user composite unique `(userId, itemKey)` |

Workflow for schema changes:

```bash
# edit prisma/schema.prisma, then:
bun run db:migrate -- --name <descriptive_name>   # creates + applies a migration
bunx tsc --noEmit                                  # client types regenerate automatically
```

Notes:

- `prisma migrate dev` needs an interactive terminal when a migration
  could lose data (e.g. dropping a unique constraint). In non-interactive
  environments, write the migration SQL by hand under
  `prisma/migrations/<timestamp>_<name>/migration.sql` (SQLite table
  rebuild pattern) and run `bun run db:deploy`.
- Enums are Prisma-level on SQLite (stored as strings).
- Foreign keys are enforced (Prisma enables the SQLite pragma).

## Seed data

`bun scripts/seed.ts` seeds, idempotently:

1. **Roles** — student (10), teacher (20), content_reviewer (30), admin (100).
2. **Learning languages** — en (active) + es/fr/ar/zh/hi/pt.
3. **Publication statuses** — draft → in-editorial-review → expert-reviewed
   → published → retired.
4. **Achievement catalogue** — 14 achievements across LESSONS/STREAK/XP/
   VOCABULARY/LEVEL categories.
5. **Demo accounts** (dev only): `admin@talksy.dev`,
   `teacher@talksy.dev`, `student@talksy.dev` with the documented dev
   passwords. In production the demo users are skipped unless
   `SEED_DEMO_USERS=1`.
6. **Content sync** — the full curriculum mirror (see below).
7. **Demo enrollment** — the student account is enrolled in the course.

## Content sync (TypeScript → relational mirror)

The authoring source of truth is the TypeScript curriculum under
`src/data/curriculum` + `src/data/catalogue` (content-as-code, versioned
in git). The sync materialises it into the database:

```bash
bun run db:sync        # after editing content files, or
POST /api/v1/admin/sync  # as an admin, at runtime
```

Guarantees:

- **Idempotent** — upserts keyed by stable business ids
  (`p1-1-1`, `p1-1-1-ex3`, `p1-1-1-w2`); re-running changes nothing.
- **No deletes** — content that disappears from the source is marked
  `RETIRED`; learner progress referencing it stays intact.
- **Drift detection** — a stable content hash per versioned entity;
  changed content bumps a semver `ContentVersion` row with a changelog.
- **Governance mirrored** — every lesson gets a `ContentReview` row:
  AI-assisted drafts are stored as `draft` with `isAiAssisted = true`.
  The admin API blocks transitions to `expert-reviewed`/`published`
  for AI-assisted content and audit-logs every change.

Current mirror volume: 66 lessons · 802 exercises · 978 answer keys ·
480 vocabulary · 66 lesson-check assessments · 335 sections ·
102 prerequisite edges · 619 audio assets · 101 content versions.

## Content versioning & review workflow

1. Author content in TypeScript; the content validator
   (`src/data/curriculum/validate.ts`, run by `bun test`) enforces the
   17-section template and draft status.
2. `bun run db:sync` (or the admin endpoint) records versions.
3. A human ESL reviewer works through `download/talksy-p1-review/`.
4. An editor moves reviews via `PATCH /api/v1/admin/content/reviews/[id]`:
   `draft` → `in-editorial-review`. **`expert-reviewed`/`published`
   require non-AI authorship** — the API refuses (409) for AI-assisted
   drafts and writes the refusal to the audit log.

## Backup & reset

```bash
cp db/custom.db db/custom.$(date +%F).backup   # SQLite backup = file copy
bun run db:reset                                # full reset (drops all data)
```

Resetting deletes user accounts and progress (dev data only). The
content mirror rebuilds automatically from the TypeScript source during
the seed that `db:reset` runs.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| `Role seed data is missing` on register | Run `bun run db:seed` (roles must exist before any user) |
| v1 lesson routes 404 everywhere | Content mirror empty — run `bun run db:sync` |
| `P1003: Database file does not exist` | Run `bun run db:setup`, check `DATABASE_URL` |
| Non-interactive `migrate dev` error | Hand-write the migration SQL (see Migrations) then `bun run db:deploy` |
| Prisma client out of sync with schema | `bun run db:generate` |
