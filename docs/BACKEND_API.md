# TalkSy — Backend API Reference (v1)

The v1 API is the backend foundation of TalkSy: a modular, role-aware,
Zod-validated JSON API under `/api/v1/*`, serving the relational content
mirror, learner progress, revision scheduling, AI-service persistence and
content administration. The stage-1 UI keeps using the legacy `/api/*`
routes until it migrates; both share the same session cookie.

- Conventions: [below](#conventions)
- Database setup: [docs/DATABASE_SETUP.md](./DATABASE_SETUP.md)
- Architecture: [docs/TECHNICAL_ARCHITECTURE.md](./TECHNICAL_ARCHITECTURE.md)

## Conventions

### Base URL & content type

All endpoints are `http(s)://<host>/api/v1/...`, request and response
bodies are `application/json`.

### Response envelope

```jsonc
// success
{ "ok": true, "data": { ... } }

// success, paginated
{ "ok": true, "data": [ ... ],
  "meta": { "page": 1, "pageSize": 20, "total": 66, "totalPages": 4 } }

// error
{ "ok": false,
  "error": { "code": "LESSON_LOCKED", "message": "Finish the prerequisite lessons first.",
             "details": [{ "slug": "p1-1-1", "title": "Understanding English" }] } }
```

### Error codes

| Code | HTTP | Meaning |
| --- | --- | --- |
| `VALIDATION_ERROR` | 422 | Body/query failed Zod validation (`details` lists per-field issues) |
| `UNAUTHENTICATED` | 401 | No session / bad credentials |
| `FORBIDDEN` | 403 | Role too low, another user's resource, or not enrolled |
| `NOT_FOUND` | 404 | Unknown resource |
| `CONFLICT` | 409 | Duplicate email/enrollment, resubmitted attempt, governance block |
| `LESSON_LOCKED` | 403 | Prerequisites not met (`details` lists unmet lessons) |
| `ATTEMPTS_EXCEEDED` | 409 | Assessment attempt limit reached |
| `CONTENT_NOT_SYNCED` | 503 | Content mirror empty — run the sync |
| `INTERNAL_ERROR` | 500 | Logged server-side, never leaked |

### Pagination

List endpoints accept `?page=<int>&pageSize=<int>` (default page 1,
pageSize 20, pageSize clamped to 1–100) and return the `meta` block.

### Authentication & roles

Sessions are opaque tokens in the `talksy_session` httpOnly cookie
(scrypt password hashing; 30-day expiry). Roles are hierarchical by rank:
`student` (10) < `teacher` (20) < `content_reviewer` (30) < `admin` (100).
`requireRole("content_reviewer")` admits content reviewers AND admins.

### Security invariants

- Every request body/query is Zod-validated.
- Learner data is always scoped to the session user — user ids from the
  client are never trusted (IDOR prevention; ownership is enforced on
  every mutation).
- **Answer keys never leave the server.** Exercise/assessment GETs return
  display payloads only; correctness is decided server-side on attempt.
- AI-assisted content can never be marked `expert-reviewed` or
  `published` (enforced in the review service + audited).

---

## Endpoints

### Authentication — `src/server/modules/auth`

| Endpoint | Method | Auth | Description |
| --- | --- | --- | --- |
| `/api/v1/auth/register` | POST | — | `{name, email, password}` → 201 `{user}` (always role `student`; creates profile + preferences; logs `ACCOUNT_CREATED`) |
| `/api/v1/auth/login` | POST | — | `{email, password}` → `{user}` |
| `/api/v1/auth/logout` | POST | session | `{loggedOut: true}` |
| `/api/v1/auth/me` | GET | session | `{user, profile, preferences, streak}` |

### Profile — `src/server/modules/users`

| Endpoint | Method | Description |
| --- | --- | --- |
| `/api/v1/profile` | GET / PATCH | Own profile. PATCH: `{name?, dailyGoalMinutes?, displayName?, bio?, country?, timezone?, targetCefrLevel?, nativeLanguageCode?}` (null clears) |
| `/api/v1/profile/preferences` | PATCH | `{theme?, notificationsEnabled?, audioRate?, subtitlesDefault?, weeklyProgressEmail?}` |

### Courses, curriculum & enrollment — `src/server/modules/curriculum`

| Endpoint | Method | Description |
| --- | --- | --- |
| `/api/v1/courses` | GET | Courses with levels + counts (session required) |
| `/api/v1/courses/[slug]` | GET | Full tree: levels → units (with module axis) → lesson counts |
| `/api/v1/lessons` | GET | Paginated lesson cards. `?level=P1&search=nouns&page=&pageSize=` |
| `/api/v1/lessons/[slug]` | GET | Full lesson detail: sections (17-section template), objectives, vocabulary (+audio), dialogue, passage, exercises (**answer-free**), prerequisites, `locked` + `unlockRequirements`, own completion state, assessments |
| `/api/v1/enrollments` | GET / POST | POST `{courseSlug}` → 201 first time, 200 idempotent after |

**Lesson unlocking** — a lesson is unlocked when every prerequisite row
(SEQUENTIAL chain across the course + EXPLICIT dependencies) has a
`LessonCompletion` for the session user. The first lesson has none.
Attempts/assessments on locked lessons return `LESSON_LOCKED`.

### Exercises — `src/server/modules/exercises` + `core/evaluation`

| Endpoint | Method | Description |
| --- | --- | --- |
| `/api/v1/exercises/[id]` | GET | One exercise by business id (e.g. `p1-1-1-ex1`), safe payload (options, order tokens, listen text, speak target), **no keys**. Requires unlocked lesson. |
| `/api/v1/exercises/[id]/attempt` | POST | `{answer: string\|number}` or `{answers: [{question, answer}]}` (match) or `{}` (speak/write). Evaluates server-side → `{correct, explanation, perQuestion, selfAssessModel, transcriptSimilarity, xpAwarded, wordStrength, nextReviewAt}`. Requires unlocked + enrolled. |

Evaluation semantics (mirrors the stage-1 client grader):
MCQ/listen-choice = option index; fill/listen-type = case/punctuation-tolerant
`textMatches` against the accepted list; order = token sequence; match =
every pair; **speak/write are self-assessed** (`correct: null`, model
answer revealed after submission — they never count towards accuracy).
One transaction records: attempt row, XP (first-correct-only, +10),
DailyActivity, SkillProgress, VocabularyProgress (Leitner ±1),
RevisionItem (SM-2 schedule), LearningStreak, LearningActivity,
achievement unlocks.

### Assessments — `src/server/modules/assessments`

| Endpoint | Method | Description |
| --- | --- | --- |
| `/api/v1/assessments/[slug]` | GET | e.g. `p1-1-1-check` → questions (from exercises, answer-free), `passScore`, `attemptsUsed`, `maxAttempts`. Unlock + enrollment enforced. |
| `/api/v1/assessments/[slug]/attempts` | POST | Start attempt → 201 `{id, status, startedAt}` (body `{}`) |
| `/api/v1/assessments/[slug]/attempts` | GET | Own attempt history (paginated) |
| `/api/v1/assessments/attempts/[id]/submit` | POST | `{answers: [{question, answer?, answers?}]}` → grade, score %, `passed`, per-question reveals; passing a LESSON_CHECK completes the lesson (XP bonus, unlock next). Resubmit → 409. |

### Progress — `src/server/modules/progress`

| Endpoint | Method | Description |
| --- | --- | --- |
| `/api/v1/progress/summary` | GET | xp, streak, per-level completion, six skills (zero-filled, with accuracy), vocabulary stats, last 10 activities |
| `/api/v1/progress/lessons` | GET | Paginated lesson progress merge. `?level=P1` |
| `/api/v1/progress/skills` | GET | Skill rows + accuracy |

### Vocabulary — `src/server/modules/vocabulary`

| Endpoint | Method | Description |
| --- | --- | --- |
| `/api/v1/vocabulary` | GET | Paginated. `?search=&level=&lessonSlug=` — includes own progress per word |
| `/api/v1/vocabulary/[wordId]` | GET | Detail by business id (e.g. `p1-1-1-w4`): word, audio, lesson, examples, own progress |

### Revision — `src/server/modules/revision`

| Endpoint | Method | Description |
| --- | --- | --- |
| `/api/v1/revision/due` | GET | Items due now (`?limit=`, default 20, max 50) with vocabulary payload |
| `/api/v1/revision/review` | POST | `{itemKey, correct}` → SM-2-lite reschedule `{nextReviewAt, intervalDays, strength}`; unknown/foreign item → 404 |
| `/api/v1/revision/stats` | GET | `{dueNow, dueToday, upcoming7Days, mastered, total}` |

Scheduling: correct → repetition ladder 1d / 3d / ×ease (ease +0.05,
cap 2.8); wrong → reset to 1d, lapse counted, ease −0.2 (floor 1.3).
Mastered = 4+ repetitions and interval ≥ 14d.

### Audio — `src/server/modules/audio`

| Endpoint | Method | Description |
| --- | --- | --- |
| `/api/v1/audio/lessons/[slug]` | GET | TTS manifest for the Web Speech API: words, exercise sentences, dialogue lines (with stable per-speaker `voiceIndex`), passage |

### AI services — `src/server/modules/ai`

Rule-based, deterministic, honestly labelled — no LLM provider is wired
in; the persistence layer is ready for one.

| Endpoint | Method | Description |
| --- | --- | --- |
| `/api/v1/ai/tutor/conversations` | GET / POST | Own conversations (paginated) / create (`{lessonSlug?, title?}`) |
| `/api/v1/ai/tutor/conversations/[id]` | GET | With messages (own only) |
| `/api/v1/ai/tutor/conversations/[id]/messages` | POST | `{content}` → user message + rule-based coach reply (lesson vocab/objectives or due words + next lesson). Replies end with “— TalkSy study coach (rule-based)”. |
| `/api/v1/ai/writing/submissions` | GET / POST | POST `{exerciseId?, lessonSlug?, text}` → automatic checks (capitalisation, punctuation, length, sentence stats, model-answer similarity when linked), strengths/improvements, score; model answer revealed after submission |
| `/api/v1/ai/speaking/submissions` | GET / POST | POST `{exerciseId?, lessonSlug?, transcript?, durationMs?}` → similarity score vs the exercise target text, word-match ratio, banded tips |

### Administration — `src/server/modules/admin` (+ `analytics`)

Role-gated (`content_reviewer` minimum for content routes, `admin` for
the rest; hierarchy admits admins everywhere).

| Endpoint | Method | Role | Description |
| --- | --- | --- | --- |
| `/api/v1/admin/sync` | POST | admin | Re-run the content sync (TypeScript → mirror). Audit-logged. Takes a few seconds. |
| `/api/v1/admin/content/versions` | GET | reviewer | Paginated `ContentVersion` list. `?type=LESSON&…` |
| `/api/v1/admin/content/reviews` | GET | reviewer | Paginated `ContentReview` list. `?status=draft` |
| `/api/v1/admin/content/reviews/[id]` | PATCH | reviewer | `{statusKey, reviewNotes?}` — governance: AI-assisted content → `expert-reviewed`/`published` is **409-blocked**; every change is audit-logged |
| `/api/v1/admin/audit-logs` | GET | admin | Paginated audit trail. `?entityType=&action=` |
| `/api/v1/admin/users` | GET | admin | Paginated user list (`?search=`), no password hashes |
| `/api/v1/admin/stats` | GET | admin | Analytics: users (total/active today/7d/by role), learning totals, attempts-by-day (14d), completions by level, accuracy by exercise type, hardest exercises |

---

## Module map

```
src/server/
  core/         api.ts (envelope, errors, pagination, route wrapper)
                guards.ts (session + role guards, IDOR asserts)
                evaluation.ts (server-authoritative grading, safe payloads)
                srs.ts (SM-2-lite scheduling)
  modules/
    auth/         register, login, logout (roles + activity)
    users/        profile + preferences
    curriculum/   courses, lessons, unlocking, enrollment, exercise loading
    content/      (content-as-code stays in src/data — mirror read via curriculum)
    exercises/    attempt flow (thin; core logic in core/evaluation + progress)
    assessments/  lesson checks: start/submit/history, lesson completion
    progress/     activity.ts (event stream), service.ts (outcome transaction,
                  lesson completion, achievements), queries.ts (summaries)
    vocabulary/   listing + detail with learner progress
    revision/     due queue + SM-2 review loop + stats
    audio/        TTS manifests
    ai/           tutor, writing, speaking (rule-based, honest)
    analytics/    admin stats aggregations
    admin/        content-sync.ts (TS → DB mirror) + governance service
```

## Testing

- Unit: `bun test` — evaluation matrix, SM-2 properties, API conventions
  (`tests/backend-*.test.ts`, 40 assertions) + 70 stage-1/curriculum tests.
- End-to-end: `bash scripts/e2e-backend.sh` — 54 checks covering the full
  flow: register → enroll → locked/unlocked lessons → attempts →
  assessment pass → progress → revision → vocabulary → AI → governance
  (including the AI-content publish block and admin audit trail).

## Onboarding & placement

| Method | Route | Description |
| --- | --- | --- |
| GET | `/api/v1/onboarding/state` | Onboarding progress: questionnaire, attempt status, latest results, active plan |
| GET | `/api/v1/onboarding/questionnaire` | The learner's saved questionnaire answers |
| POST | `/api/v1/onboarding/questionnaire` | Save/re-save the questionnaire (also updates the daily goal) |
| POST | `/api/v1/placement/attempts` | Start or resume an adaptive placement attempt |
| GET | `/api/v1/placement/attempts/current` | Current step of the in-progress (or latest completed) attempt |
| POST | `/api/v1/placement/attempts/{id}/submit` | Advance the attempt — discriminated body: `mcq` / `writing-text` / `self-rating` / `speaking-opt-in` / `speaking` / `skip-speaking` / `skip-skill` |
| GET | `/api/v1/placement/plan` | Latest completed results (result-screen revisits) |
| POST | `/api/v1/placement/plan` | Accept the recommended path, or adjust to P1/A1/A2 |
| DELETE | `/api/v1/placement/plan` | Restart the path (archives the plan; learner retakes placement) |

See [ONBOARDING_PLACEMENT.md](ONBOARDING_PLACEMENT.md) for the adaptive
engine, question bank and placement rules.
