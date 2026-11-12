# TalkSy Vocabulary System — "Word World"

A complete, data-driven vocabulary learning system: a Word Explorer database,
six learning modes, six challenge types and a configurable spaced-repetition
scheduler. **Content is code** — nothing is hardcoded per page; every view is
rendered from the typed word database.

```
src/data/vocabulary/            ← content as code
  types.ts                      ← the content model (words, categories, context, challenges)
  categories.ts                 ← 12 categories · 36 subcategories
  words/*.ts                    ← the Word Explorer database (135 words, 12 files)
  context.ts                    ← 12 context passages (dialogues & paragraphs)
  index.ts                      ← registry: lookup, search, daily word, validation

src/lib/vocab/                  ← isomorphic engines
  srs.ts                        ← configurable spaced-repetition scheduler + daily queue
  challenges.ts                 ← 6 challenge kinds: generate (seeded) + grade (server-side)
  sentences.ts                  ← sentence-practice checker (inflections, anti-copy)
  review-service.ts             ← DB orchestration: grades, snoozes, difficulty flags, logs
  annotate.ts / dto.ts          ← learner annotations + shared DTOs

src/app/api/vocabulary/         ← 14 route groups (see below)
src/components/app/vocabulary/  ← the Word World UI (8 tabs, one renderer per mode)
```

## Word Explorer

Every entry in `src/data/vocabulary/words/` carries the full explorer record:

| Field | Example |
| --- | --- |
| word · pronunciation (IPA) · part of speech | `borrow` · `/ˈbɑːroʊ/` · `verb` |
| simple English meaning · support meaning (Spanish) | "to take and use something…" · `tomar prestado` |
| example sentence (EN + ES) | "Can I borrow your pen?" |
| synonyms / antonyms (+ `antonymNote` when no opposite exists) | `take` / `lend, return` |
| word family | `borrower (n.)`, `borrowing (n.)` |
| common collocations | `borrow money`, `borrow a car` |
| difficulty | `easy · medium · hard · challenge` |
| related words | links to other entries (validated, bidirectional) |

**Audio** is generated with the browser's speech synthesis (Web Speech API) —
every word, example, collocation and context passage has a play button, at the
learner's chosen speech rate. Zero external services, zero API keys.

## Modes (`#/vocabulary`)

| Tab | What it does |
| --- | --- |
| **Today** | Daily Word (deterministic — same word for everyone each day, 7-day archive), due-count summary, new-word budget, accuracy, recently learned, category coverage |
| **Word Explorer** | Search (English, Spanish, synonyms, collocations), filters (category, subcategory, difficulty, learning status), sorts (A–Z, level, recently studied, due soonest), pagination, full word sheet |
| **Flashcards** | Front: word + audio. Back: meaning, translation, example, synonyms/antonyms. Actions: **Again / Hard / Known / Easy**, **Mark as difficult**, **Review later** (snooze). Study modes: daily queue, category, list, bookmarks, difficult, everything |
| **Context** | 12 short dialogues & paragraphs with target words highlighted inline (inflection-aware), full-passage audio, translation toggle, follow-up prompts |
| **Relationships** | A word's whole web: synonyms, antonyms, related library entries (clickable), word family, collocations |
| **Sentences** | Write your own sentence with a word; the checker verifies real usage (inflections + irregulars), blocks copied examples, coaches capitals/punctuation. A valid sentence counts as a successful review |
| **Challenges** | 6 kinds generated fresh from the database: category quiz (mixed), word meanings, spelling (listen & type), word arrangement, contextual usage, matching |
| **My Lists** | Bookmarks, personal word lists (create/rename/delete/add/remove/study), recently learned table |

## Spaced repetition (`src/lib/vocab/srs.ts`)

An SM-2-inspired scheduler, **fully configurable per learner**
(`PUT /api/vocabulary/settings`, clamped server-side):

`newPerDay` · `reviewsPerDay` · `learningStepMinutes` · `graduateIntervalDays`
· `easyBonus` · `hardFactor` · ease bounds & deltas · `lapseFactor`
· `difficultFactor` · `performanceWeight` · `masterRepetitions`
· `masterIntervalDays` · `maxIntervalDays`

Intervals consider all required factors:

- **Correctness** — the rating (`again / hard / good / easy`).
- **Number of reviews** — learning steps → graduation → review intervals;
  `repetitions` feeds the mastery threshold.
- **Previous performance** — the recent-accuracy factor (±`performanceWeight`)
  scales the next interval.
- **User difficulty rating** — words the learner flagged grow
  `difficultFactor`× slower.
- **Recall interval** — the previous interval is the base for the next one.

**No one-shot mastery — ever.** "Mastered" requires
`masterRepetitions` consecutive successful reviews (minimum 2, enforced by
`resolveSrsConfig`) **and** a `masterIntervalDays` interval; even then the word
keeps being scheduled (intervals capped at `maxIntervalDays`), and any `again`
immediately demotes it to learning with a lapse. Covered by tests.

The **daily revision queue** (`planDailySession`) serves overdue learning cards
first, then most-overdue reviews (capped by `reviewsPerDay`), then new words up
to the remaining daily budget. Only *graded* introductions consume the budget.

## Persistence (Prisma)

| Table | Stores |
| --- | --- |
| `VocabProgress` | per-user-per-word SRS state: status, repetitions, streak, lapses, ease, interval, dueAt, difficulty flag, review counts |
| `VocabReviewLog` | every action (grade/snooze/flag) with source, result and interval before/after — powers budgets, performance factors and history |
| `VocabBookmark` | bookmarked words |
| `WordList` / `WordListItem` | personal word lists |
| `VocabSentence` | sentence-practice submissions with checker feedback |
| `VocabChallengeRun` | challenge runs: kind, seed, category, score, per-item detail |
| `VocabSettings` | per-learner SRS config overrides (JSON) |

Progress rows are only created on the **first real learner action** — never by
just opening a page.

## API

| Route | Purpose |
| --- | --- |
| `GET /api/vocabulary/words` (+ filters, sorts, user statuses) | search & list |
| `GET /api/vocabulary/words/[id]` | full record + related words + context passages |
| `GET /api/vocabulary/categories` · `GET /api/vocabulary/daily` | public browsing data |
| `GET /api/vocabulary/flashcards?study=queue\|category:x\|list:x\|bookmarks\|difficult\|all` | session builder |
| `POST /api/vocabulary/review` | `grade \| known \| snooze \| flag` |
| `GET /api/vocabulary/overview` | learner dashboard numbers |
| `GET/POST/DELETE /api/vocabulary/bookmarks` · `…/lists[/id]` | bookmarks & word lists |
| `GET/POST /api/vocabulary/sentences` | sentence practice + history |
| `POST /api/vocabulary/challenges` → `POST …/[id]/submit` | start (seeded) → grade (server-side) |
| `GET/PUT/DELETE /api/vocabulary/settings` | SRS configuration |

**Security**: challenge items are generated deterministically from a server
stored seed and regenerated at submit time — the client never receives answer
keys, and options are shuffled so the correct answer has no fixed position.
Grading happens exclusively on the server; correct answers feed the SRS as
`good`, mistakes as `again`.

## Testing & verification

- `bun run test` — 123 tests including: database integrity (all fields,
  referential links, categories, context texts), SRS behavior (no one-shot
  mastery, learning steps, graduation, mastery thresholds, lapse demotion,
  ease clamping, difficulty & performance factors, queue budgets, config
  clamping), challenge determinism/grading/shuffled options, sentence
  checking (inflections, irregulars, anti-copy, warnings) and a full
  vocabulary API golden path (flashcards → grades → overview → bookmarks →
  lists → sentences → challenges → settings → auth guards).
- `scripts/e2e-vocabulary.sh` — agent-browser end-to-end suite: public
  browsing, deep links, login, the flashcard SRS flow, sentence submission,
  a challenge run, list creation, mobile responsiveness and console
  cleanliness.
