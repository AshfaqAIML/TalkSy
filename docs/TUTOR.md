# AI Tutor — Central Intelligence Layer

The AI Tutor is TalkSy's central teaching intelligence: nine distinct tutor
modes, each a different teacher (not a chatbot with an English system
prompt), integrated with the learner's verified educational context and
streaming replies live.

## The nine modes

| Mode | Teacher | Teaches |
| --- | --- | --- |
| `grammar` | Grammar Teacher | Rules: meaning → form → examples → common mistake → practice |
| `vocabulary` | Vocabulary Teacher | Definitions, pronunciation (stress), usage, collocations, register |
| `sentence` | Sentence Teacher | Sentence construction, step by step, with reusable patterns |
| `conversation` | Conversation Partner | Natural conversation; a gentle "Quick note:" after each reply |
| `writing` | Writing Teacher | Evaluates writing, teaches the spot — never rewrites the paragraph |
| `listening` | Listening Assistant | Listening strategies and exercise explanations |
| `reading` | Reading Assistant | Passages, inference and vocabulary in context |
| `interview` | Interview Coach | One question at a time; content + language feedback; mock interviews |
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
6. **Honesty** — never present uncertain AI explanations as verified
   educational facts; say when unsure; never invent rules or origins.
7. **Privacy & safety** — only this learner's own record; never request
   sensitive personal information; stay on English learning.
8. **Reply format** — short paragraphs, no markdown soup, quote-then-fix.

## Learner context (`src/lib/tutor/context.ts`)

Assembled from the learner's own verified record only (every query is
userId-scoped; another learner's data is never read):

- derived level (deterministic rules over verified completions, vocabulary
  and accuracy — a brand-new learner is a beginner)
- current lesson, most recent activity, learning goals
- learned vocabulary (counts + recent words)
- recent mistakes (Grammar Error Clinic + wrong exercise answers)
- recent assessment results, latest writing submission

Lesson-linked conversations (Doubt Solver, Writing/Listening/Reading
assistants) also resolve a **lesson reference** — `lesson:<slug>`,
`reading:<id>`, `listening:<id>`, `speaking:<slug>`, `writing:<slug>` — into
safe prompt lines. Grading secrets (model answers, correct options,
listening transcripts) are never included.

Deep links: `#/tutor/lesson/lesson:p1-1-1` (from the lesson player's
"Ask tutor" button) preselects the Doubt Solver with the lesson attached.

## Privacy controls

- **Per-conversation context switch** — "Share my learning context" can be
  turned off; the prompt then omits the record entirely.
- **"What the tutor sees"** — `/api/tutor/context` shows the exact text sent
  to the model, live.
- **Deletion** — per-conversation and delete-all, both confirmed in the UI;
  hard deletes, immediately.
- Greetings are canned (never AI-generated) and labeled as the opening
  message.

## Provider-independent LLM layer (`src/lib/llm/`)

- `provider.ts` — the `LlmProvider` contract (complete + stream) and
  `LlmError` (timeout / network / empty / unavailable, each with a
  user-presentable message).
- `zai-provider.ts` — the z-ai SDK implementation. The system prompt rides
  as the first assistant message (established app convention); streaming
  decodes the SDK's SSE byte stream defensively (`parseSseDeltas`: partial
  lines, junk, `[DONE]`, both delta and message shapes) with an idle
  timeout between chunks.
- `testing.ts` — `FakeLlmProvider` scripts replies/failures and records
  every request, so tests assert on the exact prompts without network.
- `index.ts` — `getLlmProvider()`; tests may install an override.

## Limits and integrity (`src/lib/tutor/service.ts`)

| Limit | Value |
| --- | --- |
| Message length | 2,000 characters |
| Daily requests per learner | 60 (counted only on successful completions) |
| Minimum interval between requests | 1.5 s (the canned greeting never anchors it) |
| History window | 30 messages / ~14k characters |
| Stored reply cap | 4,000 characters |

Send pipeline: `prepareTutorSend` (validate → rate-limit → persist learner
message → build prompt + windowed history) → provider stream →
`finalizeTutorSend` (persist reply, bump usage, title the conversation from
the first message). On provider failure `abortTutorSend` removes the failed
learner message and the client restores the draft — a failed send never
pollutes history. The stream finalizes server-side even if the client
navigates away mid-reply.

**Integrity:** tutor chats never write UserStats, points or achievements —
chatting is practice, not verified learning, and the progression system only
counts graded activity.

## API

| Route | Purpose |
| --- | --- |
| `GET /api/tutor/modes` | Nine modes (client-safe) + usage + limits |
| `GET/POST/DELETE /api/tutor/conversations` | List / create / delete all |
| `GET/PATCH/DELETE /api/tutor/conversations/[id]` | Load / context toggle / delete one |
| `POST /api/tutor/conversations/[id]/messages` | SSE stream: `meta` → `delta`* → `done` \| `error` |
| `GET /api/tutor/context?mode=&lesson=` | Privacy preview of the exact context text |

All routes require login; ownership is enforced on every operation (another
learner's id is a 404, never a leak).

## Storage (Prisma)

- `TutorConversation` — mode, lessonRef, includeContext, title.
- `TutorMessage` — role, content, meta (greeting flag); userId denormalised
  for rate limits and bulk deletion.
- `TutorUsage` — one row per learner; daily request/char counters, reset
  when the day changes.

## Verification

- Unit: `tests/tutor-content.test.ts`, `tutor-prompts.test.ts`,
  `tutor-llm.test.ts`, `tutor-context.test.ts`, `tutor-api.test.ts`
  (54 tests; API tests run against the fake provider).
- E2E: `scripts/e2e-tutor.sh` — 76 checks: nine modes, live corrective
  teaching ("I am go to school yesterday." → "went to school"), streaming,
  history, usage, context toggle, privacy preview, doubt solver + lesson
  deep links, deletion, SSE format, rate limits, demo account health.
