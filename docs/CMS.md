# Educational Content Management System

The CMS lets authorised educators manage TalkSy's curriculum, lesson library,
question bank and vocabulary without touching application code. This document
maps each PROMPT 39 requirement to its implementation.

## §1 Curriculum manager

Levels → Courses → Modules → Units (chapters) → Lessons → Blocks, with
learning objectives, prerequisites, chapter tests and learning resources
(media assets) — all database-backed, edited through the admin Curriculum tab
and its API (`/api/cms/admin/{levels,courses,modules,units,lessons}`).

Reordering: every entity carries an `order` column; PATCH accepts `order`
and the tree is always served sorted. Units map 1:1 to the 56-chapter
programme (slug `ch-XX`), so reordering lessons inside a unit reorders the
chapter's lesson sequence.

## §2 Visual lesson editor

The LessonEditor authors blocks from the `CMS_BLOCK_TYPES` palette; the
preview uses the SAME component (`CmsBlockView`) as the learner lesson
player, so published content renders identically — preview consistency is
guaranteed by construction, not by a second renderer.

Block kinds: headings, paragraphs, definitions, examples, grammar tables,
vocabulary lists, sentence diagrams, comparisons, dialogues, images, audio
(tts or uploaded asset), videos (external links; YouTube/Vimeo embed
automatically, anything else renders a safe link card), practice exercises
(question bank), homework, summaries, plus lesson-intro / steps / usage /
mistakes / four-skills / revision / language-support kinds.

PROMPT 39 additions: `sentence-diagram` (labelled parts over a line, ≥2
parts + the full sentence required) and `video` (http(s) URL + title
required; nothing is uploaded or stored).

## §3 Question bank management

The Questions tab and `/api/cms/admin/questions` support add / edit options /
set the correct answer / explanations / difficulty (easy–challenge) /
chapter + lesson assignment / preview. Answer accuracy is reviewed through
the QC validator (`validate-questionbank`, run in CI and the admin UI):
question–answer consistency, single-correct-option rules, no leaks — errors
block publishing.

## §4 Content production pipeline

Curriculum planning (the programme definition + unit creation)
→ Draft lesson (editor)
→ Educational review (`submit` → review, with teacher notes)
→ Grammar & exercise validation (block validation on save; the bank QC gate
  on publish attempts)
→ Approval (`approve` — requires the teacher role or above)
→ Publication (`publish` — admin only; `live` flag gates learner visibility)
→ Learner feedback (§8 analytics: most-attempted lessons, common mistakes,
  poor completion, revision flags)
→ Revision (edit → re-review → re-publish; every save appends an immutable
  version snapshot).

Every transition is recorded in `CmsAuditLog`.

## §5 Content versioning

`CmsLessonVersion` / `CmsQuestionVersion` snapshot every save. Attempts pin
the question version they were graded against (`questionVersionId`), so
historical learner results stay meaningful when content is revised later —
editing a question never rewrites its past attempts.

## §6 Vocabulary management

The admin Vocabulary tab (`/api/cms/admin/vocabulary`) manages extension
words: create / edit / approve / delete, bulk import (JSON array, max 500
rows) and export. Every row is validated server-side on create, edit AND
import — the seven required fields: word, definition, part of speech,
example, pronunciation (stress notation), translation, difficulty. Imports
report per-row errors; duplicates are skipped; valid rows land as drafts.

Approval is a separate editorial step. Approved entries are merged into the
learner Word Explorer (search + word detail) in the "extension" bucket with
`mx-` ids; drafts are invisible. The core 135-word library stays
content-as-code — the table adds to it, never rewrites it.

Known boundary: SRS reviews and challenges currently operate on the core
library; extension words are browseable (list + detail) first.

## §7 Audio and media management

The Media tab uploads assets (`CmsAsset`): audio and image files with
title, MIME type, size, duration, **transcript**, language, pronunciation
guide, **licence**, **source** attribution and optional related-lesson
linkage. Audio blocks reference assets by id; transcripts ship with the
asset metadata, never inside learner prompts.

## §8 Content analytics

The Dashboard tab (`/api/cms/admin/stats`) shows, from live database
aggregates only:

- published lessons and lessons awaiting review (workflow counts);
- content coverage by proficiency level (courses / chapters / lessons vs
  live per level);
- exercises available (published bank questions + attached practice);
- most attempted lessons (core + CMS, by distinct learners);
- common learner mistakes (Error Clinic categories + practice-report
  mistake categories);
- lessons with poor completion (≥5 learners, <40% completing);
- content requiring revision (poor completion or ≥40% wrong answers), each
  row carrying its reasons.

## §9 Import and export

The Import/Export tab (`/api/cms/admin/import`, `/export`) round-trips
structured course JSON. Imported data runs the full validation chain before
anything can be published — validation failures are reported per row and
never reach learners.

## §10 Role management

| PROMPT 39 role | TalkSy role | Permissions |
| --- | --- | --- |
| Administrator | `admin` | everything, incl. publish, unpublish, user management, import/export |
| Curriculum Manager | `teacher` | review/approve content, analytics, vocabulary |
| Educator | `editor` | author lessons/questions, upload media, manage vocabulary |
| Reviewer | `teacher` (review step) | the `submit → approve` review workflow with notes |
| Student | `student` | learner access only; every admin route rejects them |

Enforced server-side by `requireStaff` on every admin route (401 anonymous,
403 student) plus the route guard in the app shell.

## Verification

- `tests/cms.test.ts` — CMS validation, RBAC, workflow, and the PROMPT 39
  additions (sentence-diagram/video block validation, defaults, content
  health analytics).
- `tests/vocab-admin.test.ts` — vocabulary validation, bulk import with
  per-row errors, approve → Word Explorer merge (list + detail), edit
  revalidation, export, bulk actions.

## §11 Examination content governance (PROMPT 55)

The examination academies add their own governance layer on top of this CMS:
a six-stage approval pipeline (draft → educational review → examination
review → answer validation → approved → published), an eight-category
question validation engine, specification review-due dates, the ten mandated
content-analytics metrics and a course completeness dashboard — plus four
new lesson-authoring block kinds (grammar tables, reading passages, model
answers, transcripts). See
**[docs/exam-academy/CONTENT_GOVERNANCE.md](exam-academy/CONTENT_GOVERNANCE.md)**.
The layer lives in `src/lib/exams/governance/` with its admin tab
(`GovernanceTab.tsx`), API routes under `/api/exams/admin/governance/` and
tests in `tests/exam-governance.test.ts`.
