# TalkSy Reading Room & Listening Lab

Two dedicated skill-development environments built on the same "content is
code" architecture as the lesson engine: typed content files, one renderer
per environment, one server-side grader, and working persistence.

```
src/data/reading/               ← reading content as code
  types.ts                      ← content model (4 levels, 18 categories, 7 skills)
  beginner/elementary/intermediate/advanced.ts  ← 21 graded texts
  index.ts                      ← registry + integrity validation

src/data/listening/             ← listening content as code
  types.ts                      ← content model (9 stages, 8 exercise formats)
  foundation/everyday/extended/professional.ts ← 18 graded activities
  index.ts                      ← registry + integrity validation

src/lib/reading/                ← grade.ts (grading + sanitisation), service.ts (progress)
src/lib/listening/              ← grade.ts (grading + sanitisation), service.ts (progress)

src/components/app/reading/     ← ReadingRoomView (hub), ReaderView (reader),
                                  QuestionViews (3 formats), ReadingRunner (check)
src/components/app/listening/   ← ListeningLabView (hub), ActivityView,
                                  AudioPlayer (TTS sequencer), ExerciseViews (8 formats)
```

## Reading Room — graded reading library

**Levels & text types.** Four levels, each covering its required categories:

| Level | CEFR | Text types |
| --- | --- | --- |
| Beginner | Pre-A1 | individual words, basic phrases, simple sentences, very short passages, illustrated reading |
| Elementary | A1–A2 | short stories, everyday dialogues, descriptive passages, informational texts |
| Intermediate | A2–B1 | articles, longer stories, explanatory passages, informational texts, opinion passages |
| Advanced | B2–C1 | editorial-style passages, detailed articles, professional documents, complex narratives, analytical texts |

21 texts, every paragraph with a Spanish translation and every text with a
glossary (definitions + translations + examples) and 5–7 comprehension
questions. Two beginner texts are illustrated with original SVGs.

**Reader interface.** Adjustable text size (4 steps), line spacing
(compact/normal/relaxed) and translation toggle (persisted in localStorage);
paragraph navigation with a jump strip, prev/next and auto read-tracking;
clickable words with dictionary lookup (glossary match incl. plural fallback)
and pronunciation playback (on-device TTS); a key-words mode that underlines
every glossary term; bookmarks for the whole text and individual paragraphs;
reading progress (paragraphs read + comprehension score).

**Comprehension assessment.** Three reusable question formats — `choice`,
`sequence` (order the events), `short-text` — mapped onto the seven
comprehension skills: main idea, specific details, vocabulary in context,
inference, sequencing, author's purpose, summarisation. Two flows:

- **Practice** — one question at a time with instant server-graded feedback
  (correct answer, explanation, why-wrong), progressive hints and retry.
- **Comprehension check** — a formal run: every question in one go, no
  feedback during the run, then a summary with score, pass/fail vs. the
  text's pass mark, per-skill breakdown, points, a recommendation and a full
  review with feedback. Retries create fresh runs; only the best score
  counts.

**Security.** The client only receives sanitised questions (no correct
answers, no feedback with the answer inside; options/events shuffled with a
seed stable per run). Grading happens exclusively in
`POST /api/reading/check` (practice) and `/api/reading/runs/[id]/submit`.

## Listening Lab — graded listening activities

**Progression stages (9).** Letter & sound recognition → vocabulary → short
phrases → individual sentences → basic conversations → stories → longer
discussions → natural English → professional communication. Two activities
per stage, 18 total.

**Audio model.** Every activity is an audio *script*: typed segments
(optionally assigned to speakers) played sequentially by on-device speech
synthesis — original TalkSy content, zero external audio services, no API
keys. Authored per-activity speech rate and inter-segment pauses;
multi-speaker activities use different English voices when the browser
provides them. The transcript, exercise set, level and answer key all
reference the same segment ids, keeping the audio ↔ transcript ↔ grading
relationship exact.

**Audio player.** Play/pause (with resume fallback), restart, prev/next
segment, speed adjustment (0.75× / 1× / 1.25× on the authored rate), volume
control, segment-level progress ("segment 3 of 8" + bar), and replay of any
selected section (numbered markers + per-line replay + play-from in the
transcript).

**Exercise formats (8).** `listen-select`, `listen-complete` (fill the
blanks), `listen-arrange` (order words/events), `listen-answer`, `dictation`
(exact transcription with typo tolerance), `speaker-identify` (multi-voice
activities), `specific-info`, `overall-meaning`. Partial credit for
complete/arrange; per-exercise audio replay ("Play the audio") scoped to the
segments the exercise tests.

**Transcript gating.** Activities that assess comprehension lock the
transcript: it stays hidden until every exercise has been answered correctly
at least once. Each exercise's *feedback* reveals exactly the lines it was
based on ("What you heard") — so the transcript unlocks progressively even
before the full reveal. One read-along activity (`first-letter-sounds`, whose
exercises test different words than the script shows) uses an open policy.
When speech synthesis is unavailable (e.g. headless browsers) the transcript
is shown as an accessibility fallback.

## Persistence & completion rules

| Table | Stores |
| --- | --- |
| `ReadingProgress` | per text: paragraphs read, position, bookmark, best run score, run count, status |
| `ReadingBookmark` | paragraph-level bookmarks |
| `ReadingAttempt` | every graded question submission (practice or assessment context) |
| `ReadingRun` | comprehension-check runs: question set, score, pass, per-skill breakdown, review detail |
| `ListeningProgress` | per activity: exercises completed (correct ≥ once), first-try results, score, status |
| `ListeningAttempt` | every graded exercise submission (format, hints used, answer) |

**No auto-mastery** (consistent with the lesson engine):

- A reading text is *completed* only when **all paragraphs are read** AND at
  least one comprehension run **passed**. Opening a text only ever creates an
  in-progress row.
- A listening activity is *completed* only when **every exercise has been
  answered correctly at least once**; the score is the share of exercises
  solved on the first try. Opening an activity changes nothing.

## API

| Route | Purpose |
| --- | --- |
| `GET /api/reading/library` | levels, categories, texts + progress map + per-skill stats |
| `GET /api/reading/texts/[slug]` | full text bundle: paragraphs, glossary, sanitised questions, progress, bookmarks, best run |
| `POST /api/reading/state` | `paragraph-read` / `position` / `bookmark` / `paragraph-bookmark` |
| `POST /api/reading/check` | grade one practice question, persist attempt, return feedback |
| `POST /api/reading/runs` | start a run (sanitised, run-seeded question set) |
| `POST /api/reading/runs/[id]/submit` | grade every answer, finalise run, summary + review + completion |
| `GET /api/listening/library` | stages + activities + progress map |
| `GET /api/listening/activities/[slug]` | activity bundle: segments, sanitised exercises, progress, transcript lock state |
| `POST /api/listening/check` | grade one exercise, update progress/completion, return feedback + reveal |

All routes require login; answers are validated server-side and never
trusted from the client.

## Testing & verification

- `bun run test` — 153 tests, including 30 new: library integrity (unique
  ids, well-formed questions/exercises, category-level mapping, skill and
  format coverage, glossary-in-text, transcript policies), grading for every
  question/exercise format (correct / wrong / malformed / partial credit /
  typo tolerance), sanitisation (no grading data or feedback leaks), and full
  API golden paths (register → read → check → run → completion →
  transcript unlock, including no-auto-mastery assertions).
- `scripts/e2e-reading-listening.sh` — 88 agent-browser checks: home page
  cards, hub filtering, the full reader interface (dictionary, translation,
  text size, bookmarks, paragraph navigation), practice feedback + retry, a
  complete comprehension check to 100% + completion, the listening hub, the
  audio player controls, an open-transcript activity, and a locked activity
  solved end-to-end with transcript unlock, plus responsiveness and console
  cleanliness.
