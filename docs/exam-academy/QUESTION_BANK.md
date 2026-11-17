# TALK SY Original Examination Question Bank (PROMPT 54)

One searchable, machine-validated registry over every original practice
item in both examinations — connected to the lessons, players and mock
examinations that already serve them.

**Status: validated · 950 items · `bun scripts/validate-exam-question-bank.ts` reports 0 issues**

## What was built

### 1. The IELTS banks grew to the PROMPT 54 first-release targets

| Bank | Before | After | Expansion |
| --- | --- | --- | --- |
| Listening | 16 recordings | **100** | 84 new across Parts 1–4 (21 per part), all four accents, every official question family, difficulty 1–5 |
| Reading | 18 exercises | **100** | 40 further Academic passages (batches F–J) + 42 further GT text sets (batches D–J) — 50 Academic / 50 GT |
| Writing | 25 flagship tasks | **100** | 75 practice-tier tasks across the four channels (AT1 28, AT2 25, GT1 26, GT2 21) |
| Speaking | 51 items | **150** | 19 second Part-1 interview rounds, 50 further practice cue cards, 30 further Part-3 discussion sets |

Every expansion item is **original** (8+-word-window originality is
validator-enforced across the whole bank), carries the full teaching
payload of its bank (answer keys, keywords, designed traps, evidence
quotes, explanations, rubric reference examples), and passes the bank's
own integrity validator before it can ship.

### 2. The TOEFL banks (already at target from PROMPT 49/50)

Reading 100 · Listening 100 · Writing 200 · Speaking 100 — organised by
the current TOEFL iBT task types exactly as PROMPT 54 lists them
(Complete the Words / Read in Daily Life / Read an Academic Passage ·
Listen and Choose a Response / Conversation / Announcement / Academic
Talk · Build a Sentence / Write an Email / Write for an Academic
Discussion · Listen and Repeat / Take an Interview).

### 3. The unified question-bank layer (`src/data/exams/question-bank/`)

Eight adapters project every item onto the fifteen mandated fields:

> Unique ID · Examination · Examination version · Section · Question
> type · Difficulty · Topic · Instructions · Question content · Correct
> answer where applicable · Detailed explanation · Skill assessed ·
> Estimated completion time · Review status

plus the writing/speaking honesty layer: those items carry their
**scoring-rubric criterion names** and a **reference-example marker**
(`answerModel: "rubric"`) — they are never treated as ordinary
multiple-choice questions. Listening/Reading (and the machine-target
TOEFL Build a Sentence / Listen and Repeat) are `answerModel: "keyed"`:
a server-side answer key exists but never enters the public projection.

Key modules:

- `topics.ts` — the twelve mandated topic domains (Science, Technology,
  Education, Environment, Culture, Society, History, Health, Economics,
  Everyday communication, University life, Workplace situations).
- `topic-map.ts` — curated domain maps for the pre-PROMPT-54 flagship
  items (never guessed at runtime) + a deterministic keyword classifier
  for the TOEFL banks' own free-form topic labels.
- `types.ts` — the unified record, filters, facets.
- `index.ts` — the adapters, `QUESTION_BANK` (950 items), search with
  facets and pagination, `questionBankStats`, `validateUnifiedBank` (the
  machine QC gate), and the version-honesty rules (IELTS Reading/Writing
  split Academic vs General Training; Listening/Speaking are marked
  `common`; TOEFL pins `toefl-2026`).

### 4. Search API

`GET /api/exams/bank` — free-text search (`q`) plus filters
(`exam`, `version`, `section`, `type`, `difficulty`, `topic`, `skill`),
pagination (`page`, `pageSize` up to 100), `facets=1` (facet counts
computed against the active filters, each dimension excluding its own),
`stats=1` (whole-bank statistics + the size targets). The response is
public-safe by construction — a dedicated test asserts no
answer-side field (`correct`, `answer`, `blanks`, `keywords`, `lure`,
`accepted`, `modelAnswer`) ever appears.

### 5. The browser UI

`#/exams/bank` — the searchable question-bank browser:

- a stats strip with the eight banks and their targets (clickable as
  filters),
- debounced free-text search + exam / section chips + version / topic /
  difficulty / task-family selects, all driven by server facets,
- result cards carrying the full fifteen-field record: badges (exam ·
  version · difficulty · topic domain · keyed vs rubric-assessed), the
  official task family, the summary, item count, estimated minutes,
  review status, skills, and the rubric criteria where applicable,
- **Open practice** deep links straight into each item's real player
  (`#/exams/listening/practice/…`, `#/exams/reading/library/…`,
  `#/exams/writing/studio/…`, `#/exams/speaking/practice/…`,
  `#/exams/toefl/library/…`),
- the original-material disclaimer on every page.

Registered in the hash router (`exams-bank`), the Exam Academy quick
actions, the navigation active-states and the command-palette search
index.

## Connection map (the PROMPT 54 deliverable)

- **Lessons** → every item deep-links into its masterclass player, where
  the lesson layer (PROMPTs 44–50) teaches the task family it belongs to.
- **Practice** → the players are the practice engines: graded
  submissions, evidence-quoted review, performance reports, adaptive
  recommendations.
- **Mock examinations** → the PROMPT 51 engine's question pool and the
  PROMPT 53 coach's weakness detection consume the same banks; the
  question bank adds the cross-examination search and organisation
  layer on top.

## Quality control (machine-enforced)

`bun scripts/validate-exam-question-bank.ts` (also
`bun run validate:exambank`) runs, in order:

1. the four IELTS bank validators (originality windows, answer-key
   honesty, word-limit honesty, rubric floors, coverage contracts),
2. the four TOEFL bank validators,
3. the unified contract: unique IDs, fifteen-field completeness, the
   twelve-domain variety contract **per examination**, the size targets,
   the writing/speaking rubric contract, version honesty, href
   well-formedness, and the TalkSy-original source note on every item.

Grammar, ambiguity, difficulty and relevance are enforced inside the
individual bank validators (explanation floors, designed-trap
taxonomies, distribution checks); duplication is enforced three ways
(slug uniqueness, prompt uniqueness, 8+-word-window originality).

## Tests

`tests/exam-question-bank.test.ts` — 13 tests: registry contract,
fifteen-field completeness, the never-multiple-choice rubric contract,
twelve-domain variety per examination, version honesty, deep-link
resolution, search/facet behaviour, and the public API route including
the answer-leak guard. The four masterclass suites carry the updated
count assertions (100/100/100/150).
