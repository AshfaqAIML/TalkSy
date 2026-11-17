# EDUCATIONAL DEPTH AUDIT — PROMPT 57

**Date:** 2026-11-16 · **Mandate:** the CRITICAL DEVELOPMENT INSTRUCTION of this phase — no placeholder educational content. This platform must genuinely teach, not merely look like a teaching platform.

---

## 1. What this audit measures (and why it exists)

The PROMPT 56 structural audit (`final-content-audit.ts`) verified that lessons *contain* the required sections. That is necessary but not sufficient: a lesson can carry three thin blocks, a word list without explanations, or practice without teaching notes, and still pass a structural check. This audit (`scripts/audit-content-depth.ts`) measures whether a learner can actually **study** from each live lesson.

A lesson **fails the depth audit** if any of these hold:

| Gate | Threshold | What it catches |
| --- | --- | --- |
| Answerable practice | attached, with explanations ≥25 words on every item | questions without answer explanations; lessons with no practice at all |
| Worked examples | ≥6 total | topic lists without demonstrations |
| Examples with teaching notes | ≥4 | examples shown but never explained ("why it works") |
| Common-mistake analyses | ≥3 wrong → right → **reason** items | "model answers without analytical breakdowns" |
| Teaching material | ≥120 words of explanation-type content | titles + short descriptions |
| Depth per minute | ≥8 words of material per declared study minute | a learner cannot study 25 minutes on 180 words |
| Listening/speaking material | audio, dialogue or four-skills present | silent "reading-only" lessons |

## 2. Headline result

**Before this session: 277 of 531 live lessons passed all depth gates. After: 363 of 531.** Every lesson that fails today fails for one honest, tracked reason: it belongs to the A2–C1 chapters of the core programme that are still at the v1 baseline (see §5). No upgraded course fails.

| Course (live lessons) | Before | After | What changed |
| --- | --- | --- | --- |
| english-from-zero (Pre-A1, CH-01–08) | 1,069w avg · 17 failing | **1,656w avg · 0 failing** | CH-06–08 rewritten at the v2 teaching standard (17 lessons) |
| beginner-english (A1 first half, CH-09–14) | 201w avg · 55 failing | **1,949w avg · 0 failing** | CH-09–12 rewritten at the v2 standard (21 lessons) |
| beginner-english (A1 second half, CH-15–18) | (included above) 55 → | **0 failing** | CH-13–18 rewritten at the v2 standard (22 lessons) |
| everyday-english-foundations (starter) | 199w avg · 2 failing | **898w avg · 0 failing** | both starter lessons rebuilt at full teaching depth |
| ielts-academy-core | 2,179w avg · 12 failing | **2,235w avg · 0 failing** | the 6 band-ladder + 5 strategy + 1 mocks-guide lessons deepened with worked band-contrast examples and wrong→right→reason analyses |
| ielts-academy-academic / GT, toefl-ibt-academy | 0 failing | 0 failing | already deep (avg 2,102–2,759 words); unchanged |
| elementary-english (A2, CH-19–28) | 201w avg · 49 failing | 201w · 49 failing | **still v1-baseline — honestly tracked** |
| intermediate-english (B1, CH-29–38) | 212w avg · 40 failing | 212w · 40 failing | **still v1-baseline** |
| upper-intermediate-english (B2, CH-39–48) | 200w avg · 44 failing | 200w · 44 failing | **still v1-baseline** |
| advanced-communication (C1, CH-49–56) | 180w avg · 35 failing | 180w · 35 failing | **still v1-baseline** |

## 3. What was produced this session

### 3.1 The core English programme: 13 chapters, 72 lessons at the full v2 teaching standard

Batches 3–6 of the production manifest (`src/data/programme/v2/manifest.ts`), each chapter validated by the same rules the live manifest runs (`scripts/p57-check-chapter.ts` → `validateV2LessonsOfChapter`), then registered:

| Batch | Chapters | Lessons | Per-lesson contract (machine-enforced) |
| --- | --- | --- | --- |
| 3 (completes Pre-A1) | CH-06 First Vocabulary · CH-07 Word Categories · CH-08 First Sentences | 17 | lesson-intro with ≥2 prerequisite recaps; step-by-step teaching; ≥1 grammar rule or table; real-life usage; a confusion-preventing comparison; ≥8 worked examples with teaching notes across ≥4 life domains; ≥3 wrong→right→reason mistakes; four-skills integration; glossary-validated Urdu/Hindi support (LSP); revision quiz referencing earlier chapters with explanations; ≥4-point summary; guided practice (hints on every question) + independent practice (no hints) — every question with a feedback explanation; ≥14 blocks; beginner prose limits (≤20 words/sentence average, ≤34 max); zero placeholders |
| 4 (A1 first half) | CH-09 Sentence Structure · CH-10 Nouns and Articles · CH-11 Pronouns and Possessives · CH-12 Be/Have/Do | 21 | same contract; CH-11 now teaches the pronoun paradigm with glossary-backed word support (the glossary gained the full pronoun/possessive paradigm as single-word keys) |
| 5 (A1 grammar core) | CH-13 Present Simple · CH-14 Questions and Negatives · CH-15 Adjectives and Adverbs | 16 | same contract; question intonation and the three -s sounds taught through listening drills |
| 6 (completes A1) | CH-16 Prepositions and There Is/Are · CH-17 Present Continuous · CH-18 Practical Everyday English | 18 | same contract; CH-18 is the A1 capstone: conversation management and the first analysed model paragraph |

Totals: 72 lessons rewritten (of which CH-06–18), ~1,700–2,700 authored lines per chapter, 439→1,237 practice questions in the chapter bank, glossary 95→~300 entries (every Urdu/Hindi string in content is glossary-bound — `gls()` throws on unvalidated translations).

### 3.2 The starter course: both lessons rebuilt at full teaching depth

`greetings-and-introductions` (255w → ~900w, 8 → 15 blocks, 3 → 7 practice exercises) and `talking-about-your-family` (142w → ~900w, 7 → 16 blocks, 2 → 5 exercises) — each now carries worked examples with notes, a confusion comparison, wrong→right→reason mistakes, usage situations, an audio drill, a summary, and a real assignment. The upgrade ships through `upgradeStarterCourseContent()` (in-place block replacement, slug-stable, learner progress preserved, version snapshots appended, republished, review honestly reset to `ai-reviewed`).

### 3.3 The IELTS academy: 12 lessons deepened

The 6 band-ladder transition lessons + 5 strategy lessons + the mocks guide each gained ≥6 worked examples (the "same idea, three bands" pattern: one sentence written at the lower band, the target band and one above, with the mechanism named) and a wrong→right→reason mistakes block (the actual band-dragging errors with criterion reasons). Nothing existing was deleted.

### 3.4 System fixes surfaced by the mandate

- **`validateCmsBlock` now knows the v2 teaching block kinds** (lesson-intro, steps, usage, comparison, mistakes, four-skills, summary, revision, language-support) and accepts the authoring `{ label, text, rate }` audio shape. Before this fix, v2-standard lessons could not be re-saved in the CMS editor, exported or imported — a latent gap the depth work surfaced.
- **The starter-course upgrade path** (`ensureCmsSeed`): existing databases upgrade content in place with a version marker; the published snapshot is repointed (the learner route serves `publishedVersion`), so upgraded content is what learners actually see.
- **`validateV2LessonsOfChapter`** extracted from the manifest validator so chapter files can be validated standalone *before* registration — no weaker copy.

## 4. Verification

- Every chapter: `bun scripts/p57-check-chapter.ts <n>` → `OK` (the same rules the live manifest runs + practice-question QC + the 14-block floor).
- Full suite: `bun run test` — 1,153 pass / 11 fail, every failure pre-existing and outside this scope (8 unique design-token failures documented since PROMPT 52; plus legacy module-load errors in non-exam files). Zero regressions; the CMS completion test was strengthened (assignment now required — server-verified end to end).
- Governance validation (`validate:examgov`): 0 blocking issues. Question-bank validation (`validate:exambank`): 950/950.
- tsc / eslint on every changed file: clean.
- Live smoke (dev server, demo learner): `ch-09-l-01` (v2 programme) — 24 blocks, all 9 teaching kinds render, 8 exercises; `greetings-and-introductions` (starter) — 15 blocks, all kinds render, 7 exercises; `ielts-band-5-to-6` (academy) — example and mistakes blocks present. All through the learner API (published snapshots).

## 5. What remains (honest, tracked — never marked done while it is not)

1. **A2–C1 of the core programme (CH-19–56, 168 live lessons) is still at the v1 baseline.** These are the 49+40+44+35 failing rows in §2. The manifest (`v2/manifest.ts`) tracks every chapter as `v1-baseline` with its planned batch number (7–17). Nothing is marked complete that is not; the completeness dashboard reports the same verdict. **This is the single largest content backlog on the platform.**
2. **Human editorial sign-off: 0** across all content (unchanged from PROMPT 55/56 — the governance pipeline exists; the sign-offs are human work, not engineering).
3. Audio remains speech-synthesis based; AI writing/speaking scores remain practice estimates with disclaimers; no score is ever promised.

## 6. What this report does not claim

- It does not claim the A2–C1 lessons are complete — they are baseline and tracked.
- It does not claim human review — zero sign-offs, honestly reported everywhere.
- It does not claim any exam outcome. No surface promises a score; every estimate is labelled a practice estimate.
