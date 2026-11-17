# Contributing to EnglishPath

Thanks for contributing. This document covers code, educational content and
documentation contributions. For local setup and daily commands, see
[DEVELOPMENT.md](DEVELOPMENT.md). For the product overview, start at the
[README](../README.md).

## Ground rules

These are the project's engineering guarantees. A change that breaks one of
them will not be merged, whatever else it improves.

1. **Answers are graded server-side only.** Answer keys, accepted answers and
   grading keywords must never reach the client. New exercise payloads go
   through the engine's sanitiser, and a test must assert the client never
   sees grading data.
2. **Measured results never mix with AI output.** Deterministic scores and AI
   suggestions are separate channels; AI suggestions always carry a
   disclaimer. Never blend an LLM opinion into a score.
3. **Privacy-first speech.** Never persist recordings. Transcripts follow the
   retention setting (0–365 days) and must remain deletable. The microphone
   requires explicit consent.
4. **Honest documentation.** Never claim an unimplemented feature, invented
   number, fake badge or future work as present. If you touch the README, run
   `python3 scripts/validate-readme.py`.
5. **No secrets in code.** AI/DB credentials live in server-side configuration
   only. The z-ai SDK may be imported only inside `src/lib/**` server modules.

## Workflow

1. Fork or branch from `main` (`feat/…`, `fix/…`, `docs/…` — short-lived).
2. Keep commits in the repository's style: `Area: imperative summary`, e.g.
   `Writing Studio: progressive writing environment with structured feedback`
   or `Docs: EnglishPath README, contributing and development guides`.
3. Make the quality gates green **before** opening a pull request:

   ```bash
   bunx tsc --noEmit   # 0 errors
   bun run lint        # 0 errors and warnings
   bun run test        # 343 unit/route tests green (uses db/test.db)
   ./scripts/e2e-<area>.sh   # every E2E suite your change touches
   ```

4. Open the pull request with: what changed, why, how it was tested, and any
   documentation you updated.

## Pull-request checklist

- [ ] `bunx tsc --noEmit` clean
- [ ] `bun run lint` clean
- [ ] `bun run test` green
- [ ] Affected E2E suite(s) green (requires the `agent-browser` CLI; suites
      start the dev server themselves)
- [ ] New learner-visible strings are labelled and translated where the
      feature already ships translations
- [ ] New API routes scope queries by `userId` and validate payloads with
      actionable messages
- [ ] UI changes keep the accessibility bar: labelled controls,
      `focus-visible` rings, WCAG AA contrast in light and dark,
      `prefers-reduced-motion`, no horizontal overflow 375–1920 px
- [ ] Documentation updated (`docs/<area>.md` and/or README), with no
      unverified claims

## Code style

- TypeScript strict; no implicit `any`; public APIs are typed.
- React 19 function components; shadcn/ui primitives for new UI.
- Prisma only — no string SQL in application code.
- Hand-written payload validators with actionable messages (Zod is a
  dependency but is not currently imported; do not claim it in docs).

## Adding educational content

There are two channels, by design:

- **Runtime (preferred for staff):** author lessons and questions in the CMS
  (`/#/admin`). Editors draft, teachers approve, admins publish. Every save
  creates an immutable version snapshot; historical assessment data is never
  rewritten.
- **Content as code (preferred for the core library):** add typed data under
  `src/data/<skill>/` and register it in the skill's `index.ts` registry. The
  registry runs integrity validation at import time.

Either way, the educational bar is enforced by `scripts/edu-audit.ts`:

- every question must be solvable through the real grading engine — no
  impossible items;
- difficulty is tagged and the overall curve stays balanced;
- support translations are Spanish today; add new translations with the
  existing `TranslationPair` pattern.

## Reporting issues

Include: what you did, what you expected, what happened, the output of
`bun run test` and of the relevant E2E suite, and your browser for anything
speech- or audio-related.
