# TOEFL Writing and Speaking Practice Library (PROMPT 50)

Delivery record for the TOEFL Writing and Speaking Practice Library — the
practice layer for the productive skills of the current TOEFL iBT format
(in force since 21 January 2026), produced under PROMPT 50. Together with
the PROMPT 49 Reading and Listening library, the TOEFL practice library now
covers all four sections with 400 original exercises and items.

## Contents produced

### Writing practice — 200 original exercises

| Collection | Exercises | Difficulty spread | Variety |
| --- | --- | --- | --- |
| Build a Sentence — word order | 20 | 4/4/4/4/4 across d1–d5 | reorder + misplaced-modifier items |
| Build a Sentence — grammar | 20 | 4/4/4/4/4 | agreement, tense, articles, prepositions, passives, conditionals, reported speech, causatives |
| Build a Sentence — clause structure | 20 | 4/4/4/4/4 | coordination, subordination, relatives, participial links, absolutes |
| Build a Sentence — completeness | 20 | 4/4/4/4/4 | fragments and run-ons repaired |
| Build a Sentence — punctuation | 20 | 4/4/4/4/4 | capitals, commas, apostrophes, semicolons, colons, quotation marks |
| Write an Email | 60 | 8/12/14/14/12 across d1–d5 | 10 per purpose × 6 purposes (enquiry, request, explanation, scheduling, problem, suggestion), 23 distinct recipients |
| Write for an Academic Discussion | 40 | 4/8/12/10/6 across d1–d5 | 19 distinct disciplines, two classmates per board |

Every writing exercise carries the nine mandated teaching fields:
instructions · task requirements · time guidance · model response ·
response analysis · useful expressions · grammar observations · common
mistakes · independent assignment — all revealed only after submission
(validator-enforced depth floors; the model response sits inside the task's
word band). Sentence items additionally carry per-item explanations and
grammar observations with the focus-based error taxonomy
(correct / word-order / grammar / clause / completeness / punctuation /
spelling / missed / wrong).

### Speaking practice — 100 original items

| Collection | Items | Difficulty spread | Details |
| --- | --- | --- | --- |
| Listen and Repeat | 50 | 8/10/12/12/8 across d1–d5 | sentence lengths 3–26 words, repetition windows 8/10/12 s by length, four accents with a North-American majority (28/12/8/2), 12 focus tags, accurate reference transcripts locked until submission (d1 items are learning-mode shadow-reading) |
| Take an Interview | 50 | 8/10/12/12/8 across d1–d5 | 20 distinct topics, preparation guidance 15–30 s, answer windows 25–75 s by tier, sample responses 60–140 words (locked until submission), 5–6 vocabulary suggestions per item (visible during preparation), four feedback criteria |

### AI evaluation (both skills)

Every email, discussion and interview submission is analysed by a
deterministic engine first — measured metrics (word band, key-point
coverage, greeting/sign-off or engagement and position markers,
paragraphing, linker variety, error patterns, pace, fillers,
suggested-vocabulary hits) become four criterion estimates (Task response /
Answer & relevance, Organization & development, Language accuracy /
control, Lexical range / Fluency & pace), each 1.0–6.0 and each explicitly
labelled an educational estimate. The optional AI layer (provider seam)
adds strengths, weaknesses, error spotting with corrections and an improved
example of the learner's own response; it never overrides the deterministic
scores. **None of it claims to replicate official ETS scoring; the
disclaimers ship with every report.** Listen and Repeat uses a fully
deterministic repetition analysis instead (LCS word alignment: accuracy,
substitutions, insertions, longest run, pacing against the window).

## Architecture (the PROMPT 49 four-layer pattern)

- Content: `src/data/exams/toefl/writing-bank/` (16 batch files + types +
  validator + index) and `src/data/exams/toefl/speaking-bank/` (4 batch
  files + types + validator + index).
- Integrity: per-exercise validators (field contract, solvability — reorder
  answers use exactly the scrambled segments, punctuate answers restore
  real marks — plus bank-level distribution and 8-word-window originality)
  — `bun run scripts/validate-toefl-ws-library.ts`: 300 exercises/items,
  0 issues.
- Service: `src/lib/exams/toefl-bank/writing.ts` (safe projections, sentence
  grading, drafts, attempt recording), `writing-evaluate.ts` (deterministic
  evaluation + AI layer), `speaking.ts` (safe projections, repetition
  attempts), `speaking-evaluate.ts` (repetition analysis + interview
  evaluation + AI layer), `ws-performance.ts` (focus profiles, criteria
  trends, repetition accuracy by tier, weakness-driven recommendations).
- API: 9 routes — writing bank (list/detail/submit/draft), speaking bank
  (list/detail/submit), writing and speaking performance. Answer keys,
  model responses, teaching kits, locked transcripts and sample responses
  never leave the server before submission; anonymous submits 401.
- UI: the library hub extended to four sections (Reading · 100, Listening ·
  100, Writing · 200, Speaking · 100) with section-aware skills profiles;
  `ToeflWritingPlayer` (reorder chips, text inputs, scenario cards, word
  band + timer + drafts autosave, criterion report with the AI coaching
  panel, kit reveal) and `ToeflSpeakingPlayer` (speech-synthesis playback
  with accent-matched voices, repetition-window countdown, recording,
  replay + self-transcription, repetition analysis, interview evaluation).
  The learner's audio never leaves the browser — only the transcript
  travels.
- Persistence: Prisma models `ToeflWritingBankAttempt/Response/Draft` and
  `ToeflSpeakingBankAttempt` (keys, models and samples live server-side
  only).
- Search: the library entry updated to cover all four sections
  (`exam:toefl-library`).
- Pathway: the Writing and Speaking phases gained six library steps (10
  library steps total across the TOEFL pathway, 226 steps overall), all
  verified against the live banks.

## Honesty notes

- All 300 new exercises and items are original TalkSy practice material
  written in the style of the test — never official ETS examination
  content.
- Every automated score is an educational estimate produced by TalkSy's
  practice engine; nothing replicates or promises ETS scoring, and the UI
  and reports say so.
- The repeat-item audio model follows the platform convention: the authored
  sentence spoken through on-device speech synthesis with accent-matched
  voices (natural base rate ≈ 0.95). No robotic pre-recorded files.

## Verification

- `bun run scripts/validate-toefl-ws-library.ts` — 300 exercises/items,
  0 issues (integrity, distribution, originality).
- `bun run test` — 887 tests green (26 new: volume/distribution, nine-field
  contract, safe projections, sentence taxonomy, email/discussion
  evaluation, repetition analysis, performance reports, pathway refs, API
  auth + kit reveal + draft roundtrip, with a deterministic fake AI
  provider).
- `tsc --noEmit` clean; `eslint .` clean.
- Live smoke on the dev server: listings 200/100 with filters; safe details
  strip answers/models/transcripts (d1 learning mode exception verified);
  anonymous submit 401; registered sentence submit graded 5/5 with the kit
  revealed; email evaluation complete at 4.0/6 with all four criteria,
  live AI commentary and disclaimers; repeat submission 100 % accuracy,
  test-ready verdict; drafts round-trip; performance reports aggregate
  (focus profiles, repetition accuracy, recommendations); dev DB reseeded
  (pathway rebuilt, 226 steps, all references verified live); library hub
  and all four player types render cleanly in a headless browser.
