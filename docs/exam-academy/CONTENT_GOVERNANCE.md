# Examination Content Governance & Quality Assurance (PROMPT 55)

Professional content management, review, validation, version management and
completeness tracking for the IELTS and TOEFL academies.

**Entry point:** Admin → **Governance** tab (`#/admin`). Everything is also
available as an API (`/api/exams/admin/governance*`) and a CLI validator
(`bun run validate:examgov`).

```
src/lib/exams/governance/
  types.ts         the contract: six-stage pipeline, eight validation
                   categories, readiness dimensions, analytics DTOs
  registry.ts      the content registry (fourteen entity types) + derived
                   pipeline statuses + staff overrides
  workflow.ts      the approval state machine (role gates, notes, gates)
  validate.ts      the question validation engine (eight categories)
  completeness.ts  lesson classification + course readiness
  analytics.ts     the ten mandated content metrics + learner error patterns
```

---

## 1. Content management — the registry

One registry lists every entity administrators manage, with its delivery
truth, pipeline status, provenance and deep links:

| Entity | Source | Count (dev) |
| --- | --- | --- |
| Examinations | static roots | 2 |
| Examination versions | `TestSpecification` rows | 3 |
| Preparation pathways | `ExamPathway` | 3 |
| Courses | academy `CmsCourse`s (incl. `toefl-ibt-academy`) | 4 |
| Modules / Chapters | `CmsModule` / `CmsUnit` under those courses | 10 / 38 |
| Lessons | `CmsLesson` under those courses | 294 |
| Exercises | CMS questions + the 950 practice-library items | 950+ |
| Questions | `MockTestQuestion` (curated mocks) | 268 |
| Audio | `CmsAsset` (kind audio) | live count |
| Passages | reading sets from both banks | 200 |
| Model answers | writing/speaking reference examples | 339 |
| Rubrics | `ExamRubric` | 4 |
| Mock examinations | `MockTest` (curated kinds) | 22 |

Two truths sit side by side on every row: **delivery** (can learners see it
now?) and **governance** (how far through human approval has it travelled?).
A registry row can be live *and* still sit at `draft` in the pipeline — that
is the honest description of AI-generated content that has never been
human-reviewed.

## 2. Content authoring — the educational lesson editor

The CMS lesson editor (`#/admin` → Curriculum → lesson) gained four
authoring kinds, completing the PROMPT 55 element list:

| Element | Block kind |
| --- | --- |
| Headings | `heading` |
| Paragraphs | `text` |
| Examples | `example` |
| Grammar tables | `grammar-table` **(new)** |
| Vocabulary | `vocabulary-list` |
| Passages | `passage` **(new)** |
| Audio | `audio` (uploaded asset or spoken text) |
| Transcripts | `transcript` **(new)** |
| Question blocks | `practice` (question-bank exercises) |
| Model answers | `model-answer` **(new)** |
| Answer explanations | per-exercise explanations + model-answer annotations |
| Homework | `homework` |
| Summary | `summary` |

All four new kinds validate on save, render in the learner player
(`CmsBlockViews`), and have full editors (`BlockEditor`).

## 3. Content approval — the six-stage pipeline

```
draft → educational review → examination review → answer validation
      → approved → published
```

| Action | From → To | Min role |
| --- | --- | --- |
| `submit` | draft → educational review | editor |
| `educational-approve` | educational review → examination review | teacher |
| `examination-approve` | examination review → answer validation | teacher |
| `validate-answers` | answer validation → approved | teacher (engine-gated) |
| `publish` | approved → published | admin |
| `unpublish` | published → approved | admin |
| `reject` | any review stage, approved or published → draft | teacher |

**The AI rule.** AI-generated content never automatically receives
human-approved status:

- override rows (`ExamContentReview`) are written **only** by explicit staff
  actions in `workflow.ts` — never by seeders, imports or AI pipelines;
- `humanApproved` defaults to `false` and flips to `true` only through the
  teacher-or-above `validate-answers` / `publish` actions;
- every advancing action requires an accountable reviewer note (≥ 10 chars);
- the state machine has no skips — there is no path from draft straight to
  approved or published;
- if the source content is edited after an approval, the override is demoted
  to draft and flagged (`edited since approval`) — approval never silently
  survives a content change.

The pipeline is an *approval* overlay; delivery systems (`CmsLesson.live`,
`MockTestQuestion.contentStatus`, …) remain the delivery truth. The
dashboard's **"live, never human-approved"** metric makes the gap visible
(2 058 live entities today — all TalkSy-original AI content) so staff can
walk items through retrospective review.

## 4. Question validation — eight categories

`runQuestionValidation()` scans the mock library, the CMS exercises, lesson
blocks, audio assets, specifications and (as machine-checked upstream
counts) the 950 practice-library items:

| Category | Blocking when | Examples |
| --- | --- | --- |
| Missing answer keys | live content | objective question with null/empty key |
| Multiple correct possibilities | always | identical MCQ options; all-keyed MCQ_MULTI; TFNG value outside labels |
| Incorrect answers | always | keyed option index out of range; empty blank keys; MATCHING pairs to unknown ids |
| Broken audio | live content | listening section with no recordings; audio block referencing a missing asset; asset file missing from disk |
| Invalid passage references | live content | reading question with no passage, no stem and no section passage; FILL_BLANK without `___` markers; practice blocks referencing missing exercises |
| Incorrect question types | always | a type neither the engine can grade nor any spec catalog lists |
| Duplicate questions | warning | same stem + content signature (rubric wording and boilerplate prompts never collide) |
| Outdated examination formats | warning | type retired from the active spec catalog; published mock pinned to a retired spec; spec past its review date |

**Blocking issues refuse the `validate-answers` sign-off** — the engine runs
scoped to the exact entity being approved (a question, exercise, lesson,
mock, course or audio asset).

## 5. Specification versioning

`TestSpecification` already carried version, effective date, official
sources, section structure, task types, timing and scoring model; PROMPT 55
adds **`reviewDueAt`** — the planned re-verification date (seeded as
effective date + the spec's own validity window). Analytics and the
validation engine surface "review overdue" specs as outdated content.

When a provider changes the format: draft a new spec version, review the
impact report, relink mocks — **historical attempts keep their pinned
`specId` forever** (`MockTestAttempt.specId`), so scores remain interpretable
under the format they were sat under. The 7-step format-change workflow
lives in the Exam blueprints tab.

## 6. Content analytics — ten metrics

`GET /api/exams/admin/governance` returns, computed live from real data:

1. Total lessons · 2. Complete lessons · 3. Placeholder lessons (+ partial)
4. Pending reviews (pipeline distribution across all entities)
5. Published questions (mock + lesson exercises)
6. Missing answer keys · 7. Outdated content (retired-spec mocks,
retired-type items, overdue specs) · 8. Audio without transcripts
9. Mock examinations by status
10. **Learner error patterns** — skill gaps on wrongly-answered mock
questions, the reading/listening error taxonomies (traps, distractors,
spelling, inference…), TOEFL bank responses and PROMPT 52 evaluator weakness
areas, most frequent first.

Plus the honesty extra: **live but never human-approved**.

## 7. Completeness dashboard

A course is **ready** only when all six dimensions pass — chapter records
existing is never enough:

| Dimension | Passes when |
| --- | --- |
| Complete lessons | every lesson is genuinely complete (≥ 3 teaching blocks + practice + ≥ 2 objectives + summary + duration); zero placeholders, zero partials |
| Appropriate practice | every lesson carries answerable practice (exercises, assignment, revision or homework) |
| Verified answer keys | the validation engine finds no missing/invalid keys in the course's exercises |
| Relevant assessments | assessment chapter(s) exist or published mocks exist for the exam |
| Learning outcomes | every lesson declares objectives |
| Review status | every lesson is human-approved |

Readiness levels: **ready** (all pass) · **needs-attention** (only
assessments or review-status fail — process, not substance) · **not-ready**
(any substance dimension fails), each with named blockers.

Current honest verdict on the dev data: all four academy courses are
**not-ready** — 50 lessons are partial, and none of the 294 AI-generated
lessons has been human-approved yet. That is the backlog the governance tab
exists to work through.

---

## API

| Route | Method | Auth | Purpose |
| --- | --- | --- | --- |
| `/api/exams/admin/governance` | GET | editor+ | analytics + readiness + validation summary |
| `/api/exams/admin/governance/registry` | GET | editor+ | paged registry (`entityType`, `status`, `q`, `unapprovedOnly`, `liveUnapprovedOnly`, `page`, `pageSize`) |
| `/api/exams/admin/governance/validation` | GET | editor+ | full report (`category`, `severity` filters) |
| `/api/exams/admin/governance/[entityType]/[entityKey]/action` | POST | per action | pipeline transition (`{ action, note }`) |

Every transition is audit-logged to `CmsAuditLog` as
`governance.<action>` on entity `governance:<entityType>:<entityKey>`.

## Machine checks

```bash
bun run validate:examgov        # full battery against the dev DB
bun test tests/exam-governance.test.ts   # 32 tests: workflow, AI rule,
                                         # eight categories, completeness,
                                         # registry, analytics, API safety
```
