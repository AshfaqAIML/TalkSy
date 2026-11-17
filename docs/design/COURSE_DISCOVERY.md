# TalkSy Course Discovery Ecosystem — PROMPT 32

The discovery layer rebuilt around **content formats**: one server-built
catalogue, nine category hubs, a learning-path interface and computed
recommendations. Every figure shown is derived from the real content
sources — the test suite (`tests/catalogue.test.ts`, 19 tests) enforces it.

## The seven content formats (§1)

Built by `src/lib/catalogue/service.ts` into `CatalogueItem`s — each format
has its own card presentation (`CatalogueCards.tsx`):

| Format | Presentation | Real source |
| --- | --- | --- |
| **A · Learning paths** | Featured: gradient icon, chapters · lessons · duration, progress bar, prerequisites | 5 curated defs (`paths.ts`) composing curriculum levels + live CMS courses + practice |
| **B · Complete courses** | Standard: two-column metadata grid (chapters, lessons, duration, skills), enrolment progress | Live CMS courses from the database |
| **C · Short lessons** | Compact rows: level, duration, source, prerequisite notes | 20 curriculum lessons + every live CMS lesson (with real `CmsPrerequisite` titles) |
| **D · Grammar guides** | Compact reference cards | 8 parts-of-speech modules + Complete Tense Comparison (12 tenses) + Sentence Structure Reference |
| **E · Practice labs** | Count-forward cards with real activity counts | Sentence Builder (7 stages), Vocabulary Practice (6 challenge types), Spelling Practice (135 words), Grammar Correction (Error Clinic), Listening Comprehension (18), Reading Room (21), Writing Studio (31), Speaking Lab (22), Pronunciation Training (26 drills) |
| **F · Conversation simulators** | Partner cards: AI partner name + Beg·Int·Adv | All 11 role-play scenarios (Meeting Someone, Shopping, Restaurant, Job Interview, Telephone, …) |
| **G · Completed learning** | Section with review chips + course rows | The signed-in user's actual `LessonProgress` / `CmsLessonProgress` / enrolment rows |

The prompt's example titles map to real content: "English from Zero to
Confident Communication", "Beginner to Elementary English", "Complete
English Grammar", "Spoken English Development", "Academic and Professional
Writing" (paths); "Preposition Usage Guide", "Complete Tense Comparison",
"Sentence Structure Reference" (guides); "Sentence Builder", "Vocabulary
Practice", "Grammar Correction", "Listening Comprehension", "Spelling
Practice" (labs); "Meeting Someone", "Shopping", "Job Interview",
"Telephone Conversation" (simulators).

## Category hubs (§2) — `#/hub/<id>`

Nine hubs (`src/lib/catalogue/hubs.ts`): Beginner English, Grammar,
Vocabulary, Sentence Formation, Spoken English, Reading, Writing,
Listening, Pronunciation. Each serves: attractive intro, description,
learning outcomes, curated featured items, **chapters & lessons from the
hub's real source** (curriculum units / word lists / reading categories /
writing tiers / listening stages / scenario groups / pronunciation
categories), practice activities and recommended resources — all pulled
from `/api/catalogue/hub/<id>`, never duplicated frontend arrays.

## Cards, filters, recommendations (§3–§5)

- **Cards** carry real metadata: title, description, level, chapter count,
  lesson count, estimated duration (summed from lesson minutes), skill
  categories, completion status, prerequisites. Featured / standard /
  compact tiers render differently per format.
- **Filters** (`FilterBar.tsx`): level, topic, skill, difficulty, duration
  and completion status (auth-gated) — options derived from the items
  themselves; multi-level items ("Beg–Adv") match every level.
- **Recommendations** (`/api/catalogue/recommendations`): every reason is
  computed — continue where you left off (most recent in-progress lesson),
  next lesson in the learning path, weakest measured skill (UserStats
  bySkill, ≥10 attempts), most frequent Error Clinic mistake (mapped via
  `CATEGORY_LESSONS`), and course follow-ups (enrolled/finished → next).
  Anonymous visitors get honest starting points. No popularity counters,
  no review scores — asserted in tests.

## Content structure (§6)

One server builder, one API surface:

- `GET /api/catalogue` — paths + items + completed (auth-aware)
- `GET /api/catalogue/hub/<id>` — hub content
- `GET /api/catalogue/recommendations` — recommendation cards

Curated layers (`paths.ts`, `hubs.ts`) contain only composition ids and
editorial copy — no content duplication. Router additions:
`#/paths[/<id>]`, `#/hub/<id>`; `#/courses` is now the full catalogue
(CMS-only view retired); `#/courses/level/<slug>` presets the level filter.

## Verification

- 555 tests green (19 new: format coverage, metadata integrity, honest
  counts vs. the data modules, path composition, hub content for all nine
  hubs, recommendations from fixture progress/stats/clinic rows, router).
- Visual: 16 screenshots in `docs/design/assets/talksy-catalogue/`
  (catalogue hero/sections/filters, grammar + pronunciation hubs, path
  list/detail with real progress, signed-in recommendations, mobile 390px)
  — VLM-checked; a nowrap-truncation overflow at 390px was found and fixed.
