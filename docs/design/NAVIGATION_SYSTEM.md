# TalkSy Navigation & Content Discovery — PROMPT 31

The global navigation, mega-menu, search and command-palette system. Everything
in the navigation maps to a **real, working destination**; the test suite
(`tests/navigation.test.ts`, `tests/search.test.ts`) guards that contract.

## Information architecture

Six primary categories, defined once in `src/lib/navigation.ts` and rendered by
`SiteHeader` (desktop ≥lg) and `MobileNav` (sheet below lg):

| Category | Items | Real destinations |
| --- | --- | --- |
| **Learn** | Learn English from Zero · Beginner English · Intermediate English · Advanced English · Complete Learning Paths | `#/library/pre-a1`, `#/library/a1`, `#/library/grammar-core`, `#/exams`, `#/library` |
| **Grammar** | Parts of Speech · Sentence Formation · Tenses · Types of Sentences · Advanced Grammar | `#/grammar`, `#/lab`, `#/grammar/tenses`, `#/lesson/lab-3-sentence-types`, `#/grammar/clinic` |
| **Courses** | All Courses · Beginner Courses · Spoken English · Writing Skills · Vocabulary Courses | `#/courses`, `#/courses/level/a1-beginner`, `#/speaking`, `#/writing`, `#/vocabulary` |
| **Practice** | Speaking Lab · Listening Lab · Reading Room · Writing Studio · Sentence Builder · Vocabulary Practice | `#/speaking`, `#/listening`, `#/reading`, `#/writing`, `#/lab`, `#/vocabulary/challenges` |
| **AI Tools** | AI English Tutor · Sentence Corrector · Writing Assistant · Conversation Simulator | `#/tutor`, `#/grammar/clinic`, `#/tutor/m/writing`, `#/tutor/m/conversation` |
| **Resources** | Grammar Guides · Vocabulary Lists · Everyday English · Learning Tips | `#/grammar`, `#/vocabulary/explore`, `#/course/everyday-english-foundations`, `#/tips` |

Honesty rules baked into the data:

- Every href round-trips through `parseHash`/`routeToHash` (test-enforced).
- Counts in descriptions ("22 activities", "135 words", "31 guided
  assignments"…) are asserted against the content modules in tests.
- Featured lesson labels must equal the real lesson titles.
- Cross-linked surfaces (Speaking reachable from Courses and Practice)
  resolve their *active* state to the owning category via
  `CATEGORY_PRECEDENCE`.

## Mega menus (`src/components/site/MegaMenu.tsx`)

Radix `DropdownMenu` per category: category tagline, item grid (icon +
label + difficulty badge + description; icons colour-coded by the PROMPT 28
`--skill-*` tokens, with per-item overrides), a featured rail and quick
links. The **Courses** rail is rendered live from
`/api/cms/courses/public` (skeleton while loading, static fallback on
error). Keyboard: arrows, Home/End, typeahead, Escape (Radix); menus close
on hash navigation via remount keys.

## Router extensions (`src/hooks/use-hash-route.ts`)

- `#/library/<level>` — focus one curriculum level (LibraryView filters + breadcrumb).
- `#/courses/level/<slug>` — catalogue filter (`a1-beginner`, `ielts-preparation`).
- `#/tutor/m/<modeId>` — deep-links a tutor mode; TutorView auto-starts that teacher's conversation.
- `#/tips` — the Learning Tips resource page (`StaticPages.TipsView`).

## Search & command palette

- **Index** — built server-side in `src/lib/search/build-index.ts`:
  545 entries across 13 categories (paths, lessons, exercises, grammar,
  vocabulary, reading, listening, speaking, writing, courses — including
  their chapters — exam prep, AI tools, pages). The DB pass indexes every
  live course, unit (chapter) and published lesson. Served by
  `GET /api/search/index` (dynamic, no-store). Grading data (answers,
  hints) is never copied into an entry; the 40 spare "bank" exercises are
  excluded because they have no route destination.
- **Matcher** — `src/lib/search/match.ts`: tokenised substring scoring with
  phrase priority, per-category caps, merged highlight ranges. Pure and
  dependency-free.
- **Palette** — `src/components/site/CommandPalette.tsx` on `cmdk`
  (`Ctrl/Cmd+K`, also from the header search trigger, the mobile drawer and
  the account menu). Idle state: quick actions (continue learning from real
  `/api/progress`, dashboard, grammar, vocabulary, speaking, AI tutor),
  recent pages, recent searches (localStorage, clearable), browse
  destinations. Query state: filter chips, results grouped by category with
  highlighted matches, loading skeleton while the index fetches, honest
  empty state.

## Breadcrumbs (`src/components/site/Breadcrumbs.tsx`)

`PageBreadcrumbs` is used in every complex learning area:

- Curriculum lessons: Learning path › level › Unit n › lesson
- Course outline: Courses › course
- Course lessons: Courses › course › unit (chapter) › lesson
- Practice detail views: hub › activity / text / scenario / assignment

## Mobile (`src/components/site/MobileNav.tsx`)

Right-side sheet: search entry point, one accordion per category (44px+
touch rows with icon, label, difficulty badge, description), quick links,
auth CTAs when signed out. Controlled dismissal: link tap, route change,
Escape, overlay and close button.

## Verification

- 536 tests green (33 new: navigation integrity, honest counts, router deep
  links, search coverage/scoring/highlighting incl. the live catalogue).
- Visual: 17 screenshots in `docs/design/assets/talksy-nav/` (header at
  1440px, three mega menus, palette idle/search/filter/empty/recents,
  mobile header + drawer, breadcrumbs, dark mode) — VLM-checked.
- Keyboard: Enter opens menus, arrows move, Escape closes; palette is fully
  operable with ↑/↓/↵/Esc.
