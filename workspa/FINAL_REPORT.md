# TalkSy — Final Delivery Report

**Date:** 12 November 2026
**Scope:** Full production-readiness audit — functional, educational,
accessibility, performance, security, AI reliability, deployment readiness.
**Method:** Everything below was **actually executed** against the running
application (browser-driven E2E, live API calls, code review). Nothing is
claimed from interface visibility alone.

---

## 1. Verdict

**TalkSy is functionally complete and heavily tested, but NOT yet fully
production-ready.** The learning platform and the administrative CMS work
end-to-end (711 browser checks + 343 unit tests green, all AI behaviour
checks passed), and the educational content is verified solvable. What
blocks a "production-ready" stamp are concrete, listed gaps: no password
recovery, no rate limiting on authentication endpoints, no structured
logging/monitoring/error tracking, and the production build has not been
executed in this environment (see §8). Each gap has a recommended fix.

---

## 2. Completed functionality (tested)

| Area | Status | Evidence |
| --- | --- | --- |
| Account creation / login / logout | ✅ tested | e2e.sh 109 checks incl. register→onboard, login role propagation, logout session invalidation |
| Lesson loading & progression | ✅ tested | e2e.sh; lesson sections, completion server-verified |
| Exercise checking (16 types) | ✅ tested | 186/186 curriculum answer keys provably solvable through the real grading engine |
| Assessment submission | ✅ tested | e2e.sh assessment flow; deterministic selection, pass thresholds |
| Progress persistence | ✅ tested | e2e-progress.sh 62 checks |
| Vocabulary saving + flashcard revision | ✅ tested | e2e-vocabulary.sh 71 checks (SRS scheduling, retention) |
| Reading activities | ✅ tested | e2e-reading-listening.sh 88 checks |
| Listening activities | ✅ tested | same suite |
| Speaking recording | ✅ tested* | e2e-speaking.sh 96 checks. *Headless browsers have no microphone: recording verified via the consent-gated typed-fallback path + server STT contract; mic capture itself was exercised in earlier manual runs |
| Writing submission + revision compare | ✅ tested | e2e-writing.sh 56 checks |
| AI tutor (9 modes) | ✅ tested | e2e-tutor.sh 76 checks + 5/5 live AI reliability checks (§7) |
| Conversation practice | ✅ tested | AI partner with scripted fallback, measured report, privacy deletion |
| Admin content publishing | ✅ tested | e2e-cms.sh 58 checks: workflow draft→review→approve→publish, RBAC, versioning, import/export, learner delivery |
| Admin analytics | ✅ tested | Dashboard figures verified as real DB aggregates; null-when-unknown enforced |
| Content versioning & audit | ✅ tested | Immutable snapshots; attempts pin question versions; restore = new version; delete blocked once answered |

**Test totals at delivery:** 343 unit/route tests (29 files), 709→711 E2E
checks (9 suites), 5 live AI behaviour checks. Two one-off E2E flakes were
observed across ~20 suite runs; both root-caused (date-dependent daily-word
assertion, cross-suite console-buffer contamination) and fixed in the
scripts, with clean re-runs.

## 3. Educational QA findings

- **Curriculum:** 20 lessons (4 Pre-A1, 2 A1, 14 Grammar Core), 186
  exercises, all 16 exercise types, difficulty curve easy 62 / medium 80 /
  hard 34 / challenge 10. 20/20 lessons have final assessments.
- **Answer keys:** 186/186 exercises produce a correct answer accepted by the
  real grading engine — no impossible questions found.
- **Absolute-beginner test (executed):** registered a zero-history learner
  and walked lesson 1 (Pre-A1 "Hello!"): vocabulary presented as word +
  part of speech + translation + simple definition + translated example +
  audio button; dialogues line-by-line with translations and per-line audio;
  a global "Translations" toggle; encouraging copy ("you already know every
  word!"). **A Spanish speaker with almost no English can follow lesson 1
  without external explanations.** Caveats: support translations are Spanish
  only, and the UI chrome (buttons, nav) is English-only — non-Spanish
  beginners need the icons/translation toggle.
- **Reading level appropriateness:** 21 levelled texts (Pre-A1–A2 band) with
  glossaries; comprehension questions carry skill tags.
- **Skill balance:** the core path is grammar-weighted (122/186 grammar
  exercises); vocabulary, reading, listening, speaking and writing depth
  lives in the dedicated environments (135 words / 21 texts / 18 listening /
  22 speaking / 31 writing assignments). Fair by design, worth knowing.
- **CMS starter course:** reviewed block-by-block; grammar ("have/has"),
  translations and question keys verified.

## 4. Accessibility findings

Verified by execution unless noted:

- **Keyboard navigation** — logical tab order, all interactive elements
  reachable and operable; dialogs trap/restore focus (Radix).
- **Skip-to-content link** — added during this audit (was missing) and
  verified focusable before the header.
- **Focus indicators** — `focus-visible:ring-[3px]` on all inputs/buttons.
- **Semantics** — banner/navigation/main landmarks, heading hierarchy,
  dialog/tab/checkbox/radio roles, labelled forms everywhere (E2E drives the
  UI through accessible names).
- **Colour contrast** — all 8 key foreground/background pairs pass WCAG AA in
  the light theme; dark theme passes with margin (computed from the OKLCH
  palette with correct WCAG luminance math — an earlier miscalculation in
  our own audit script was caught and corrected).
- **Error announcements** — toast live region (`role=region`, alt+T
  shortcut) + `aria-invalid` states on inputs.
- **Reduced motion** — `prefers-reduced-motion` guard added during this
  audit (previously absent); only color/spin/pulse animations exist.
- **Responsive** — no horizontal overflow at 375/768/1024/1280/1440/1920px
  (a 62px nav overflow at 1280px was found and fixed during this audit);
  mobile hamburger menu verified.
- **Audio controls** — native `<audio controls>` for uploaded assets;
  labelled play/slow buttons for speech synthesis.
- Remaining: full screen-reader narration (NVDA/JAWS) was not executed in
  this Linux sandbox; Radix primitives provide the semantics but real SR
  passes remain open.

## 5. Security findings

**Solid (verified):**
- scrypt password hashing + opaque 32-byte session tokens in the DB; expired
  and suspended sessions rejected at resolution (suspension logs the user
  out everywhere immediately — tested).
- RBAC enforced **server-side** on every admin route (student 403, anonymous
  401, editor cannot approve/publish, teacher cannot publish — unit-tested
  in tests/cms.test.ts); the client-side gate is cosmetic only.
- Ownership: every learner route scopes queries by `userId`; grading data
  (answer keys, model answers, fallback scripts) stripped server-side —
  verified by tests asserting those fields never appear in client payloads.
- SQL injection: Prisma ORM throughout; zero `$queryRaw`/string SQL in app
  code (one dev-only script uses a tagged raw query).
- XSS: React escaping; the single `dangerouslySetInnerHTML` renders
  first-party authored SVG only (no user input path) — reviewed.
- File uploads: 25 MB cap, `audio/*`|`image/*` MIME allowlist, alphanumeric
  id filenames, served with the stored content type (blocks stored-HTML
  execution).
- Recording privacy: audio never persisted; transcripts retention 0–365
  days with deletion (tested); microphone requires explicit consent (tested).
- Secrets: none in code; AI SDK confined to server modules; `.env` holds
  only `DATABASE_URL`.
- CSRF: all state changes are POST/PATCH/DELETE (no state-changing GETs) and
  the session cookie is `SameSite=Lax`, which blocks cross-site cookie
  submission on those verbs.

**Findings (unfixed — ranked):**

| # | Finding | Severity | Recommendation |
| --- | --- | --- | --- |
| S1 | No rate limiting on `/api/auth/login` / `register` (brute force possible) | **Medium** | Add per-IP + per-account throttling (e.g. 5 attempts/15 min) or a reverse-proxy rule |
| S2 | No password recovery / reset (users who forget cannot recover) | **Medium** | Requires email/SMS infra; token-based reset flow when available |
| S3 | Upload MIME type trusted from the client | Low | Sniff magic bytes server-side; current mitigation: served with stored non-HTML content type |
| S4 | No CSRF tokens (relies on SameSite=Lax) | Low | Add double-submit tokens if older browsers must be supported |
| S5 | Session cookie lacks `Secure` flag (dev is HTTP) | Low | Set in production behind TLS (documented in DEPLOYMENT.md) |
| S6 | Seed staff passwords are public in the repo | Low | Change immediately on first production login (documented) |
| S7 | Media assets readable by any authenticated user by id | Info | Acceptable for shared educational content; add per-lesson scoping if licensing requires |
| S8 | Session tokens stored as plain opaque strings (DB read ⇒ valid session) | Info | Consider hashing tokens at rest |

## 6. Performance findings (dev-mode measurements)

| Metric | Measured |
| --- | --- |
| Page HTML | 27 ms, 56 KB (server-rendered shell) |
| API latency (warm) | 30–130 ms across curriculum/progress/CMS/stats |
| Browser load event (dev) | ~0.7 s |
| Dev JS transfer | 1.6 MB unminified (Turbopack dev) |
| Production bundle | **Not measured** — `next build` is not executable in this sandbox (see §8) |

Notes: no API response caching (all dynamic; audio files cached 1 h private);
analytics uses a fixed parallel query set; known small N+1 in lesson-block
saving (per-question existence checks, N = questions per lesson, ≤ 10) —
harmless at this scale, worth batching if courses grow large. SQLite is
single-writer; multi-instance deployments should move to Postgres
(DEPLOYMENT.md §7).

## 7. AI reliability (live tests, real LLM through the provider layer)

| Check | Result |
| --- | --- |
| Corrects "I am go to school yesterday." | ✅ "We say: I went to school yesterday." + rule + Socratic practice prompt |
| Refuses to reveal other learners' data | ✅ refuses, no emails echoed, redirects to learning |
| Recognises multiple valid forms | ✅ "both are correct" + AmE/BrE nuance |
| Concision (simple definition) | ✅ 65 words with pronunciation + examples |
| Streaming, JSON-defensive parsing, scripted fallbacks, per-user limits (60/day, 1 msg/1.5 s) | ✅ unit + E2E tested; the limiter itself fired during testing and behaved correctly |

Residual AI risks (design-mitigated, not eliminable): the LLM can still
occasionally produce imperfect grammar explanations; mitigations in place —
teacher review workflow for CMS content, disclaimers on AI suggestions,
measured scores never mixed with AI output, and tutor prompts forbid
presenting uncertain rules as facts. Recommend periodic human spot-checks of
tutor transcripts.

## 8. Incomplete functionality (honest list)

1. **Password recovery** — not implemented (S2).
2. **Placement assessment** — not implemented; learners start at Pre-A1 and
   the path is ordered, but there is no adaptive placement test.
3. **Personalised learning path** — recommendations and prerequisite locking
   exist, but they are progress-driven, not placement-driven.
4. **Formal onboarding** — post-registration lands on the learning path; no
   guided tour or goal questionnaire.
5. **Production build** — `bun run build` could not be executed in this
   sandbox environment (dev-server-only delivery); build correctness,
   production bundle size and prod-mode performance are unverified.
6. **Observability** — no structured logging, metrics export or error
   tracking (Sentry-class); only `GET /api` health + audit log.
7. **Screen-reader field testing** (NVDA/JAWS/VoiceOver) not performed.
8. **Speaking microphone capture** verified only through the typed-fallback
   contract in automated runs (headless limitation).
9. **Marketing site** — out of scope (previously deferred by decision).

## 9. External API requirements

- **z-ai SDK (server-side)** — speech-to-text (speaking lab transcription)
  and the LLM (tutor conversations, writing/speaking AI suggestions). Both
  degrade gracefully: scripted conversation fallback, null AI suggestions
  with measured feedback intact, canned tutor replies on failure.
- **Web Speech API (client-side, browser-provided)** — text-to-speech
  everywhere and browser speech recognition where available; a typed
  fallback exists for unsupported browsers.
- No other third-party runtime services; no CDN; the database is a local
  SQLite file.

## 10. Known limitations

- Translations/support language is Spanish only; UI is English-only.
- One SQLite file ⇒ single writer; scale-out needs Postgres.
- CMS content authoring is desktop-oriented (works on mobile, not optimised).
- E2E suites depend on the `agent-browser` CLI and a running dev server.
- The dev sandbox recycles background processes between commands; all audit
  scripts auto-restart the server (an environment property, not an app bug).

## 11. Production readiness checklist

| Item | State |
| --- | --- |
| Environment variables documented (`.env.example`) | ✅ |
| Database migrations + seed commands documented | ✅ (`docs/DEPLOYMENT.md`) |
| Backup strategy + restore recipe | ✅ (nightly cron documented; restore drill documented, not rehearsed here) |
| Logging / monitoring / error tracking | ⚠️ health endpoint + audit log only (§8.6) |
| Deployment documentation | ✅ |
| Rollback procedure (app / database / content) | ✅ documented |
| Auth hardening (rate limits, password reset) | ❌ §5 S1/S2 |
| Production build verified | ❌ §8.5 |
| Accessibility field testing (SR) | ⚠️ §8.7 |
| Functional + educational + AI quality gates | ✅ this report |

**Recommendation:** address S1/S2, run `bun run build` + a staging smoke
test, and add error tracking. With those done, TalkSy is ready for a pilot
with real learners; the content, exercise engine, privacy model and CMS are
already at pilot quality.
