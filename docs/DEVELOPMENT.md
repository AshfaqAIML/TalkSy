# Development Guide

Local setup, daily commands, database workflow and troubleshooting for
EnglishPath. Product overview: [README](../README.md). Contribution process:
[CONTRIBUTING.md](CONTRIBUTING.md).

## Prerequisites

- Bun 1.1+ (recommended) or Node.js 20+
- A modern browser — Web Speech features need Chrome, Edge or Safari;
  `localhost` counts as a secure context, so microphone and speech
  recognition work in local development

## Setup

```bash
bun install

# DATABASE_URL is the only required variable — use an ABSOLUTE path.
# (Prisma resolves relative SQLite paths against prisma/, which surprises people.)
echo "DATABASE_URL=file:$(pwd)/db/custom.db" > .env

bun run db:push     # create/sync the schema at db/custom.db
bun run db:seed     # optional: pre-create the demo learner
bun run dev         # http://localhost:3000 — logs to dev.log
```

`db/` is gitignored. On a brand-new database, the **first login** triggers the
self-healing seed (staff accounts + starter course). If the first login
attempt fails with "incorrect", log in again — the seed was created between
the two attempts. Demo learner: `demo@talksy.app` / `demo1234`.

## Commands

All scripts come from `package.json` — nothing here is invented:

| Command | What it does |
| --- | --- |
| `bun run dev` | dev server on port 3000, output teed to `dev.log` |
| `bun run build` | production build → `.next/standalone` (copies static + public in) |
| `bun run start` | `NODE_ENV=production bun .next/standalone/server.js` |
| `bun run lint` | ESLint over the repository |
| `bun run test` | pushes the schema to `db/test.db`, then runs the 343 unit/route tests |
| `bun run db:push` | apply `prisma/schema.prisma` to the dev database (no migration history) |
| `bun run db:generate` | regenerate the Prisma client |
| `bun run db:migrate` | `prisma migrate dev` (development migrations) |
| `bun run db:reset` | `prisma migrate reset` |
| `bun run db:seed` | seed the demo learner (`scripts/seed.ts`) |
| `bunx tsc --noEmit` | TypeScript strict check — the gate that matters |

## Database workflow

- **Dev database:** `db/custom.db` (path from `.env`). Schema changes go
  through `bun run db:push` — this project is schema-first without a
  migration history in development.
- **Test database:** `db/test.db`. The `test` script sets
  `DATABASE_URL=file:…/db/test.db` and pushes the schema itself. If tests
  fail with table-not-found, a stray `DATABASE_URL` is overriding it.
- **Production:** create a migration history once and `prisma migrate deploy`
  every release, after a backup. Full guide: [DEPLOYMENT.md](DEPLOYMENT.md).
- 52 models live in `prisma/schema.prisma`: users/sessions, per-skill
  progress, tutor conversations, CMS content with versioning.

After any schema change, **restart the dev server**: a long-running server
holds a stale Prisma client and will 500 on the next query.

## Testing

Unit and route tests (`bun run test`) run against an isolated `db/test.db`
— they never touch your dev data.

End-to-end suites drive the real UI through `agent-browser` (accessible
names, not pixel matching). Each suite starts the dev server if it is down:

| Suite | Covers |
| --- | --- |
| `./scripts/e2e.sh` | register/login/logout, lessons, exercises, assessments |
| `./scripts/e2e-cms.sh` | admin CMS workflow, RBAC, versioning, import/export, learner delivery |
| `./scripts/e2e-vocabulary.sh` | Word World, SRS scheduling, challenges |
| `./scripts/e2e-grammar.sh` | Grammar School, Sentence Lab |
| `./scripts/e2e-reading-listening.sh` | Reading Room, Listening Lab |
| `./scripts/e2e-speaking.sh` | consent, transcription contract, privacy deletion |
| `./scripts/e2e-writing.sh` | submission, feedback, revision comparison |
| `./scripts/e2e-tutor.sh` | nine modes, privacy refusals, limits, streaming |
| `./scripts/e2e-progress.sh` | analytics, revision scheduler, achievements |

Audit tooling:

- `bun scripts/edu-audit.ts` — content audit; proves every answer key is
  solvable through the real grading engine (186/186).
- `bun scripts/ai-reliability.ts` — live LLM teaching-quality checks (needs
  the dev server running).
- `bun scripts/contrast-audit.ts` — WCAG contrast for the theme (light/dark).
- `bash scripts/perf-measure.sh` — page and API latency measurements.

## Content as code

Learning content ships as typed data under `src/data/<skill>/`, registered in
each skill's `index.ts`, which also runs integrity validation at import time.
To add a lesson or activity: add the typed object, register it, and extend
the matching test file. Educators who prefer not to touch code can author the
same content at runtime in the CMS — both channels feed the same grading
engine.

## UI conventions

- shadcn/ui (New York) primitives; Tailwind CSS 4.
- Hash routing on a single public route — see
  [ADR-003-hash-routing.md](ADR-003-hash-routing.md).
- Accessibility bar: labelled controls, `focus-visible` rings, WCAG AA
  contrast in both themes, `prefers-reduced-motion`, responsive 375–1920 px.
- Speech: use the shared hooks (`use-speech`, `use-recorder`); never persist
  recordings.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| `500` on login after a schema change | The dev server holds a stale Prisma client — restart `bun run dev`. |
| Admin login says "incorrect" on a fresh DB | Log in twice: the first call provisions the self-healing seed. |
| Tests fail with table-not-found | `bun run test` pushes the schema to `db/test.db` first; make sure no stray `DATABASE_URL` overrides it. |
| Microphone or speech recognition missing | Browsers require user consent and a secure context (localhost counts). |
| E2E "page errors" flake once | Re-run; transient dev-server recompiles can emit console noise. |
| Audio upload rejected | Max 25 MB; MIME must be `audio/*` or `image/*`. |
| Tutor says "needs a moment" | Per-user throttle: 1 message / 1.5 s, 60 / day. |
| Relative `DATABASE_URL` points at `prisma/` | Use an absolute `file:` path in `.env`. |

## FAQ

**Why SQLite?** One file, zero setup, and the write volume of a learning app
suits it. It is single-writer: run one instance, or move to Postgres by
changing the Prisma provider ([DEPLOYMENT.md](DEPLOYMENT.md) §7).

**Why server-side grading?** The client never receives answer keys, so
practice and assessments stay honest, and measured results stay
authoritative. See the README's
[Learning and Assessment Pipeline](../README.md#learning-and-assessment-pipeline).

**Why hash routing?** One deployable entry point that behaves like a
multi-page app — [ADR-003](ADR-003-hash-routing.md).
