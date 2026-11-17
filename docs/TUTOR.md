# AI Tutor — Central Intelligence Layer

The AI Tutor is TalkSy's central teaching intelligence: ten distinct tutor
modes, each a different teacher (not a chatbot with an English system
prompt), integrated with the learner's verified educational context,
streaming replies live, and quality-controlled before anything is stored.

## The ten modes (PROMPT 38 §1)

| Mode | Teacher | Teaches |
| --- | --- | --- |
| `grammar` | Grammar Teacher | Rules: meaning → form → examples → common mistake → practice |
| `vocabulary` | Vocabulary Teacher | Definitions, pronunciation (stress), usage, collocations, register |
| `sentence` | Sentence Formation Teacher | Sentence construction, step by step, with reusable patterns |
| `conversation` | Speaking Partner | Natural everyday conversation; a gentle "Quick note:" after each reply; invites answering out loud |
| `simulator` | Conversation Simulator | Real-life situations (restaurant, doctor, hotel…) played realistically, then a structured debrief |
| `writing` | Writing Teacher | Evaluates writing, teaches the spot — never rewrites the paragraph |
| `listening` | Listening Assistant | Listening strategies and exercise explanations |
| `reading` | Reading Assistant | Passages, inference and vocabulary in context |
| `interview` | Interview Practice Partner | One question at a time; content + language feedback; mock interviews |
| `doubt` | Doubt Solver | Questions about a specific lesson, grounded in the lesson reference |

Modes are content-as-code in `src/data/tutor/` with a completeness validator
(`validateTutorContent`) that tests run against. `persona` and `greeting`
never leave the server (`toSafeTutorMode` strips them for API payloads).

## Teaching behaviour (the prompt layer)

`src/lib/tutor/prompts.ts` builds the system prompt in layers:

1. **Constitution** — a patient teacher with one job; every reply teaches,
   encourages or guides.
2. **Mode persona** — how this teacher structures every reply.
3. **Level rules** — beginner (very simple English, explain hard words,
   3–6 sentences, always an example, one short question) / intermediate
   (encourage longer answers, improve structure, 2–3 new expressions,
   natural usage) / advanced (detailed discussion, clarity, nuanced
   vocabulary, professional communication).
4. **Corrective protocol** — acknowledge → teach the correction
   ("I went to school yesterday.") → explain the rule → 1–2 practice items.
   Never "that's wrong"; never rewrite the whole paragraph.
5. **Socratic protocol** — guide with one short question at a time when the
   learner is close; at most 2 rounds; give the answer clearly when stuck,
   frustrated or asked; direct questions get direct answers.
6. **Multiple valid answers (PROMPT 38 §8)** — any answer valid in a standard
   variety (British/American spelling, formal/informal alternatives,
   contractions) is CORRECT; regional varieties and accents are legitimate;
   only genuinely ungrammatical text is called a mistake.
7. **Honesty** — never present uncertain AI explanations as verified
   educational facts; say when unsure; never invent rules or origins; never
   present an AI score or level as a verified proficiency result.
8. **Privacy & safety** — only this learner's own record; never request
   sensitive personal information; stay on English learning.
9. **Reply format** — short paragraphs, no markdown soup, quote-then-fix.
10. **Teaching preferences (PROMPT 38 §5)** — the learner's saved preferences
    (reply length, practice appetite, correction style), when set; they
    override the general style rules where they conflict.
11. **Learner context block** (only when the learner shared it).
12. **Lesson reference block** (only when a lesson is linked).

## Learner context (`src/lib/tutor/context.ts`)

Assembled from the learner's own verified record only (every query is
userId-scoped; another learner's data is never read):

- derived level (deterministic rules over verified completions, vocabulary
  and accuracy — a brand-new learner is a beginner)
- current chapter in the 56-chapter programme (`programmePosition`: highest
  engaged chapter, lessons done, in-progress lesson, or the next chapter)
- current lesson, most recent activity, learning goals
- learned vocabulary (counts + recent words) and vocabulary difficulties
  (words lapsed 2+ times or flagged by the learner)
- recent mistakes (Grammar Error Clinic + wrong exercise answers)
- common mistake patterns (Error Clinic categories + practice-report mistake
  categories, ≥2 occurrences)
- recent chapter-test result, assessment results, latest writing submission
- exercise-performance trend (`assessDifficultyTrend` — the same engine the
  Practice Zone uses; never concluded from fewer than 5 attempts)
- recommended next steps with the reason attached to each
- the learner's teaching preferences, when set

Lesson-linked conversations resolve a **lesson reference** into safe prompt
lines: `lesson:<slug>`, `reading:<id>`, `listening:<id>`, `speaking:<slug>`,
`writing:<slug>`, plus the programme kinds (PROMPT 38 §4):
`programme:<ch-XX-l-YY>` (one of the 56-chapter programme's lessons) and
`chapter:<ch-XX>` (a whole programme chapter). Grading secrets (model
answers, correct options, listening transcripts, test answer keys) are never
included.

Deep links: `#/tutor/lesson/lesson:p1-1-1` (from the lesson player's "Ask
tutor" button), `#/tutor/lesson/programme:<slug>` (from programme lesson
players) and `#/tutor/m/<modeId>` (auto-starts that teacher). Every lab
activity view (Reading Room, Listening Lab, Speaking Lab, Writing Studio)
also carries an "Ask tutor" entry point with its activity linked.

## Privacy controls (PROMPT 38 §5)

- **Per-conversation context switch** — "Share my learning context" can be
  turned off; the prompt then omits the record entirely.
- **"What the tutor sees"** — `/api/tutor/context` shows the exact text sent
  to the model, live.
- **Deletion** — per-conversation and delete-all, both confirmed in the UI;
  hard deletes, immediately.
- **Teaching preferences** — `#/tutor` → Preferences (or
  `/api/tutor/preferences`): reply length (brief/normal/thorough), practice
  appetite (fewer/normal/more), correction style (immediate/note-first).
  Validated server-side; injected as a TEACHING PREFERENCES block.
- Greetings are canned (never AI-generated) and labeled as the opening
  message.

## Personalisation (`src/lib/tutor/recommendations.ts` — PROMPT 38 §6)

Deterministic recommendations, every item explaining WHY it was generated
( quoting the learner's own numbers): next chapter (from programme position,
deep-linked to its first lesson), additional practice at the adaptive level,
weak-area revision, due vocabulary reviews, first/next speaking activity,
writing revision. Served by `/api/tutor/recommendations`, shown in the
tutor's "For you" panel, and summarised into the context as
"Recommended next steps".

## Adaptive difficulty (`src/lib/practice/trend.ts` — PROMPT 38 §7)

`assessDifficultyTrend` is shared by the Practice Zone, the tutor context and
the recommendation engine:

- fewer than 5 graded attempts → no suggestion at all, with the reason
  saying exactly that;
- step up needs ≥8 attempts at ≥80% accuracy AND a non-worsening recent
  trend (second half of the window not below the first);
- below 50% steps down; otherwise maintain the band actually practised
  (dominant difficulty of the recent window).

Session configs accept a `difficulty` preference (validated subset of
easy/medium/hard/challenge); it is a PREFERENCE, never a constraint — if it
would leave fewer than 4 questions the pool is kept whole. Chapter tests and
course assessments ignore it (their coverage is fixed by spec). The
Practice Zone hub shows an "Adaptive difficulty" card whose reason quotes
the numbers and links to a Mixed session at the suggested level.

## Reply quality control (`src/lib/tutor/validation.ts` — PROMPT 38 §8)

Every tutor reply passes a deterministic validation BEFORE it is stored:

- **Proficiency-claim guard** — sentences presenting AI remarks as verified
  results ("your level is verified as…", "counts as an official score") are
  stripped; if stripping would empty the reply the phrases are redacted
  instead. Flagged `proficiency-claim` in message meta.
- **Grammar cross-check (as far as practical)** — corrections the tutor
  teaches are re-checked with the app's rule-based grammar checker; a
  disputed correction is recorded as `qc-grammar-mismatch` for auditing —
  never shown to the learner as an error.
- **Length cap** — overlength replies are capped and flagged.

The streamed deltas may contain text quality control later strips; the
STORED version (what the learner sees on reopening) is always the cleaned
one.

## Provider architecture (`src/lib/llm/` — PROMPT 38 §9)

- `provider.ts` — the `LlmProvider` contract (complete + stream) and
  `LlmError` (timeout / network / empty / unavailable / rate-limited, each
  with a user-presentable message).
- `registry.ts` — provider selection from the `AI_PROVIDER` env var.
  Available providers: `zai` (default) and `openai` (any OpenAI-compatible
  REST endpoint via AI_OPENAI_BASE_URL / AI_OPENAI_API_KEY / AI_OPENAI_MODEL
  / AI_OPENAI_NAME). Unknown names fail loudly; a misconfigured provider
  fails as `unavailable` at call time — never a silent fallback.
- `zai-provider.ts` — the z-ai SDK implementation (system prompt as the
  first assistant message; `thinking` disabled).
- `openai-provider.ts` — the OpenAI-compatible REST implementation with
  injectable `fetch` (unit-tested request/response mapping).
- `sse.ts` — the shared defensive SSE decoding (partial lines, junk, both
  delta and message shapes, idle timeout).
- `usage.ts` — `withUsageLogging`: one `LlmCallLog` row per provider call
  (feature, provider, outcome, latency, ~4 chars/token ESTIMATE — never
  presented as metered billing). Measurements only: no prompt or reply
  content is ever stored. Logging failures are swallowed — monitoring must
  never break a reply.
- `index.ts` — `getLlmProvider()`; tests install an override
  (`setLlmProviderOverride`) so no test ever touches the network or a live key.

No AI feature hardcodes a provider: the tutor, the writing coach, the
speaking conversation partner and both exam graders all go through the seam.

## Limits and integrity (`src/lib/tutor/service.ts`)

| Limit | Value |
| --- | --- |
| Message length | 2,000 characters |
| Daily requests per learner | 60 (counted only on successful completions) |
| Minimum interval between requests | 1.5 s (the canned greeting never anchors it) |
| History window | 30 messages / ~14k characters |
| Stored reply cap | 4,000 characters |

Send pipeline: `prepareTutorSend` (validate → rate-limit → persist learner
message → build prompt + windowed history) → provider stream (usage-logged)
→ `finalizeTutorSend` (validate + clean the reply → persist → bump usage →
title the conversation from the first message). On provider failure
`abortTutorSend` removes the failed learner message and the client restores
the draft — a failed send never pollutes history. The stream finalizes
server-side even if the client navigates away mid-reply.

**Integrity:** tutor chats never write UserStats, points or achievements —
chatting is practice, not verified learning, and the progression system only
counts graded activity.

## API

| Route | Purpose |
| --- | --- |
| `GET /api/tutor/modes` | Ten modes (client-safe) + usage + limits |
| `GET/POST/DELETE /api/tutor/conversations` | List / create / delete all |
| `GET/PATCH/DELETE /api/tutor/conversations/[id]` | Load / context toggle / delete one |
| `POST /api/tutor/conversations/[id]/messages` | SSE stream: `meta` → `delta`* → `done` \| `error` |
| `GET /api/tutor/context?mode=&lesson=` | Privacy preview of the exact context text |
| `GET/PUT /api/tutor/preferences` | Read / save teaching preferences (validated) |
| `GET /api/tutor/recommendations` | Personal "For you" items, each with its reason |
| `GET /api/admin/ai-usage` | Staff AI usage monitoring (14-day summary + provider inventory) |

All routes require login; ownership is enforced on every operation (another
learner's id is a 404, never a leak).

## Storage (Prisma)

- `TutorConversation` — mode, lessonRef, includeContext, title.
- `TutorMessage` — role, content, meta (greeting flag; qc flags) ; userId
  denormalised for rate limits and bulk deletion.
- `TutorUsage` — one row per learner; daily request/char counters, reset
  when the day changes.
- `TutorSettings` — per-learner teaching preferences (PROMPT 38 §5).
- `LlmCallLog` — one row per provider call across ALL AI features
  (PROMPT 38 §9): feature, provider, status, chars, token estimate,
  latency. Measurements only.

## Verification

- Unit: `tests/tutor-content.test.ts`, `tutor-prompts.test.ts`,
  `tutor-llm.test.ts`, `tutor-context.test.ts`, `tutor-api.test.ts`,
  `tutor-validation.test.ts`, `llm-registry.test.ts`, `llm-usage.test.ts`,
  `practice-adaptive.test.ts` (API tests run against the fake provider).
- E2E: `scripts/e2e-tutor.sh` — 89 checks: ten modes, live corrective
  teaching ("I am go to school yesterday." → "went to school"), streaming,
  history, usage, context toggle, privacy preview, doubt solver + lesson
  deep links, deletion, SSE format, rate limits, preferences,
  recommendations, claim-stripping, staff-only AI usage, demo account
  health.
