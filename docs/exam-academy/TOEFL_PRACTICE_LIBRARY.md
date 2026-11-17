# TOEFL Reading and Listening Practice Library (PROMPT 49)

Delivery record for the TOEFL Reading and Listening Practice Library —
the searchable, reusable, adaptive question bank for the current TOEFL iBT
format (in force since 21 January 2026), produced under PROMPT 49.

## Contents produced

### Reading question bank — 100 original exercises

| Task type | Exercises | Difficulty spread | Variety |
| --- | --- | --- | --- |
| Complete the Words | 34 | 7/7/7/7/6 across d1–d5 | 32 distinct topic labels |
| Read in Daily Life | 33 | 7/7/7/6/6 across d1–d5 | 26 distinct text kinds (notices, emails, schedules, signs, adverts, threads, posters, policies, reviews, timetables, forms, newsletters, listings, announcements, FAQs, itineraries, callboards, guides…) |
| Read an Academic Passage | 33 | 5/7/7/7/7 across d1–d5 | 30 distinct subjects (geography, botany, archaeology, history of science, marine biology, history, geology, medicine, zoology, history of education, biology, economics, political science, climatology, psychology, materials, agronomy, ornithology, urban studies, anthropology, computational linguistics, microbiology, astrophysics, economics of defaults, ecology, earth science, complexity, linguistics, sociology, biotechnology, physics, art conservation) |

Every reading item carries: full original text · task instructions ·
questions with exactly one key · detailed explanation (≥ 20 words) ·
vocabulary (a glossary per exercise, revealed after submission) · grammar
observations where relevant · verbatim passage evidence for MCQ items ·
the tested library skill (1–2 of the seven) · difficulty 1–5.

### Listening question bank — 100 original exercises, 410 questions

| Task type | Exercises | Questions | Difficulty spread |
| --- | --- | --- | --- |
| Listen and Choose a Response | 25 | 37 | 5/5/5/5/5 (response items add a speaker-intention question at d3+) |
| Listen to a Conversation | 25 | ~100 | 5/5/5/5/5 |
| Listen to an Announcement | 25 | ~110 | 5/5/5/5/5 |
| Listen to an Academic Talk | 25 | ~163 | 5/5/5/5/5 |

Every listening exercise carries: original script · audio (the recording is
the authored segment list, spoken through on-device speech synthesis with
accent-matched voices, natural base rate 0.95 and per-segment pauses) ·
speaker details (name, role, accent) · natural speech · task instructions ·
questions with exactly one key · correct answers · detailed explanations ·
transcript for post-attempt review · difficulty · target listening skill.
Accents: all four appear (North-American majority 51%, British, Australian,
New Zealand), as in the real test.

### Integrity validation — `scripts/validate-toefl-library.ts`

Machine-checks every exercise BEFORE it can ship:

1. Solvability — every masked word's restoration completes the visible
   stem; every MCQ evidence quote is a verbatim substring of the paragraph
   it cites; every listening keyword occurs in the recording.
2. Rubric honesty — question numbering runs 1..N continuously; exactly
   four distinct options with one key in range; lures never equal keys;
   the seven-dimension skill vocabulary respected (1–2 per question).
3. Teaching depth — explanations meet the platform floor (≥ 20 words);
   every masked word carries a grammar observation; every exercise carries
   a vocabulary glossary whose words occur in the text.
4. Substance — script word bands per task family (responses 15–60,
   conversations 130–260, announcements 100–190, talks 210–330); passage
   word bands (words 85–130, daily life 90–230, academic 300–430).
5. Originality — no normalised 8-word window repeats across the whole
   library (all exercises are distinct originals).
6. Variety — ≥ 30 exercises per reading task type; every difficulty tier
   reached in every family; ≥ 15 distinct topics / ≥ 12 text kinds / ≥ 15
   subjects; all four listening accents with a North-American majority.

Current output: `200 exercises, 0 issues`.

## Transcript gating

The transcript is NOT exposed before the learner completes an assessment.
The safe projection ships the audio definition only; the displayed
transcript is returned by the grading endpoint after submission. The single
exception: exercises flagged `learningMode` (difficulty 1–2), where reading
along is the point — the platform's honest reading of the PROMPT's
learning-exercise clause.

## Adaptive practice — the seven tracked dimensions

Performance is tracked across exactly the seven mandated dimensions:
Vocabulary, Comprehension, Inference, Main ideas, Details, Speaker
intention and Academic listening. Every question in both banks declares
1–2 of these as its tested skills, so per-dimension accuracy is exact at
item level — nothing is inferred from heuristics. `src/lib/exams/toefl-bank/adaptive.ts`
builds the profile from stored attempts (`skillCounts` JSON per attempt)
and recommends exercises that target the learner's weakest dimensions at
their current level, excluding already-attempted exercises and balancing
across task families. Cold start: one foundation exercise per family.
This is TalkSy's practice adaptivity — distinct from ETS's section-level
adaptive delivery, as the academy's honesty notes state throughout.

## Architecture (follows the IELTS bank conventions)

- Content: `src/data/exams/toefl/reading-bank/` (18 files) and
  `src/data/exams/toefl/listening-bank/` (18 files), each with
  `types.ts` + `validate.ts` + `index.ts`.
- Shared taxonomy: `src/data/exams/toefl/library-skills.ts` (the seven
  dimensions, labels, descriptions, `primarySkill`).
- Services: `src/lib/exams/toefl-bank/reading.ts`, `listening.ts`,
  `adaptive.ts` — safe projections, grading with the error taxonomies
  (reading: correct/spelling/trap/inference/vocabulary/missed/wrong;
  listening: correct/distractor/inference/missed/wrong), attempt recording
  with per-skill tallies.
- API: `/api/exams/toefl/reading/bank` (+`/[slug]`, `/submit`),
  `/api/exams/toefl/listening/bank` (+`/[slug]`, `/submit`),
  `/api/exams/toefl/library/performance`. Listings are public and
  support `?q=`, `?task=`, `?difficulty=`, `?skill=`; submissions require
  an account (the performance engine depends on attributed attempts).
- UI: `src/components/app/exams/toefl/` — `ToeflPracticeLibraryView`
  (hub: searchable library with filters + targeted-for-you rail +
  seven-skill profile tabs), `ToeflReadingPlayer` (masked-word inputs and
  MCQ with evidence-quoted review), `ToeflListeningPlayer` (accent-matched
  speech-synthesis sequencer with segment progress, locked transcript,
  revealed with per-item feedback on submit).
- Persistence: Prisma models `ToeflReadingBankAttempt/Response` and
  `ToeflListeningBankAttempt/Response` (answer keys live server-side only).
- Search: the library hub is indexed (`exam:toefl-library`).
- Pathway: the TOEFL pathway's Reading and Listening phases gained six
  library steps (refType `library`), resolved by `hrefForStep`.

## Honesty notes

- All 200 exercises are original TalkSy practice material written in the
  style of the test — never official ETS examination content.
- The audio model is the platform convention established by PROMPT 44/48:
  original scripts spoken through on-device speech synthesis with
  accent-matched voices, natural base rate and per-segment pacing. No
  robotic pre-recorded files; the authored recording definition travels
  with the exercise.
- The seven-skill adaptivity is TalkSy's practice-layer tracking; it is
  not ETS's section-level adaptive test delivery, and the UI says so.

## Verification

- `bun run scripts/validate-toefl-library.ts` — 200 exercises, 0 issues.
- `bun run test` — 861 tests green (19 new: volume/distribution/integrity,
  safe projections, grading taxonomy, transcript gating, adaptive engine,
  pathway, API auth + transcript-on-submit).
- `tsc --noEmit` clean; `eslint .` clean.
- Live smoke: listing/detail/submit routes 200; anonymous submit 401;
  transcript `null` pre-submit, `segments > 0` (the audio), search index
  1151 entries including the library; dev DB reseeded (pathway rebuilt,
  220 steps, all references verified live).
