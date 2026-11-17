# TalkSy UX Improvement Backlog

> Prioritized execution plan derived from [`REFERENCE_AUDIT.md`](REFERENCE_AUDIT.md) and [`REDESIGN_STRATEGY.md`](REDESIGN_STRATEGY.md).
> **Priority definitions**
> **P0 — Critical usability & consistency problems** (users lose functionality or trust)
> **P1 — Main visual & navigation improvements** (the visible redesign)
> **P2 — Advanced interactions & polish** (delight, discovery, motion)
> **P3 — Optional enhancements**
> Effort: **S** ≤ 0.5 day · **M** 1–2 days · **L** 3+ days. All items keep the 437-test suite green.

---

## P0 — Critical usability & consistency

| ID | Item | Evidence | Files | Acceptance criteria | Effort |
|---|---|---|---|---|---|
| P0-1 ✅ *(done — motion release: Practice mega menu, 5–7 top-level links, grouped mobile Sheet)* | **Fix desktop nav overflow** — restructure 13 links into 5 groups (Learn, Practice, Word World, Exam Academy) + "More" dropdown; remove hidden-scrollbar strip; add active underline | Labels clip at 1440px in every screenshot ("Listening La…"); `page.tsx:234` `overflow-x-auto [scrollbar-width:none]`; ~1250px links in ~800px | `src/app/page.tsx`, new `NavMore.tsx` | All destinations reachable at 1280/1440 with zero clipping; keyboard accessible dropdown; mobile Sheet mirrors grouping with active states | M |
| P0-2 ◐ *(core flows done in design-system release; reading/revision/notification rows tokenized in motion release; listening/writing/exam internals remain)* | **Semantic status tokens** — add `--success/--warning/--info/--correct/--incorrect` + `--skill-*` palette; migrate raw hues in core flows (done/correct/difficulty badges) | 14 hue families; "done" = 2 greens on one screen (`CoursesViews.tsx:214`); "correct" = 4 styles (`ExerciseRunner.tsx:283`, `ExerciseViews.tsx:297`, `MockPlayerView.tsx:1457`) | `globals.css`, `CoursesViews`, `CmsBlockViews`, `ExerciseRunner`, `ExerciseViews`, `ReadingRunner`, `FeedbackPanel`, `FeedbackReport`, `bits.tsx` | Zero raw success/difficulty hues in migrated components; one visual meaning per status app-wide; contrast-audit passes | L |
| P0-3 ✅ *(done — motion release: `ui/cards.tsx` library, 9 variants + metadata atoms; `.card-interactive` hover contract)* | **Unify card + hover idioms** — `TileCard`/`ResourceCard` with one radius (xl), one padding (p-5), one hover recipe (`-translate-y-0.5 border-primary/40 shadow-md`) | 4 card idioms, 4 paddings, 3 radii; 4 hover languages (audit §1.3 W4); dead `group` classes ×8 | new `src/components/app/shared/TileCard.tsx`, `HomeView`, `LibraryView`, `CoursesViews`, `CmsBlockViews` | Landing/library/catalogue render from the shared components; hover identical on all interactive cards; no dead classes | M |
| P0-4 | **Lesson states on the learning path** — numbered chips; completed (muted + ✓), current (green border + filled CTA), locked (dashed + lock); demote non-current CTAs to outline | ~20 identical cards, "green wall" of 20 filled buttons; no progress states (`assets/talksy/02-library-1440.jpg`) | `LibraryView.tsx` | States visible at a glance; only current lesson has filled CTA; a11y labels announce state | M |
| P0-5 | **Exam mocks library restructure** — sticky filter bar (exam/skill/timed), 2-col grid grouped by exam with counts, single primary CTA per card, "Untimed" → text link | 25 single-column cards, ~50% dead width, 10k px scroll, inconsistent CTA placement (`assets/talksy/16-exam-mocks-1440.jpg`) | `ExamMocksView.tsx` | Filters prune list instantly; ≤ 2 screens of scroll for any exam; consistent CTA position; works at 390px | M |
| P0-6 ✅ *(done — motion release: SkeletonCard/Grid/ListRow/Text composites with shimmer; Library, Courses, Reading, Progress, Exam Academy)* | **Loading skeletons everywhere** — incl. Exam Academy spec cards, LibraryView, CoursesViews | Exam cards render as empty dark boxes while specs load (verified: content appears only after async fetch); 3 competing loading idioms | `ExamAcademyView.tsx`, `LibraryView.tsx`, `CoursesViews.tsx` + shared `SkeletonGrid` | No view shows a blank/unloaded container for > 150ms without skeleton; one idiom app-wide | S |
| P0-7 | **Empty/error/logged-out states** — promote `EmptyState` (icon tile + help + 2 actions); locked-preview variant for gated hubs; suggestions on errors; replace admin "—" and "0/0/0" walls | Reading/Tutor logged-out = 70% empty page; "Lesson not found" duplicates its own title, 1 recovery path; `ProgressDashboardView.tsx:88` returns `null`; `AssessmentFlow.tsx:270` shows raw JSON | `ReadingRoomView`, `TutorView`, `ListeningLabView`, `SpeakingLabView`, `WritingStudioView`, `ProgressDashboardView`, `LessonPlayer` error branch, `AssessmentFlow`, `admin/DashboardTab` | Every empty/error/gated state has icon + distinct copy + primary & secondary actions; no raw JSON; no blank progress page | M |
| P0-8 | **Visual bug fixes** — toast clipping under sticky header; "Noting is lost" typo; conflicting classes at `interactive-inputs.tsx:211`; native `<select>` vs shadcn Select mix; footer stats line overflow on mobile | `assets/talksy/13-progress-1440.jpg` (toast clip); ProgressDashboardView streak copy; WordDetailSheet:387, ExamMocksView:291 | as listed | Toast fully visible; typo fixed; no duplicate/conflicting utilities; shadcn Select everywhere | S |
| P0-9 | **Copy-truth pass** — sync marketing numbers from data ("15 vs 16 exercise types", "20 lessons vs 6 live"); single source of truth util | `layout.tsx:19` vs `HomeView.tsx:31`; `HomeView.tsx:88/362`; `page.tsx:429` hand-maintained | `layout.tsx`, `HomeView.tsx`, `page.tsx`, new `src/lib/content-stats.ts` | All public counts computed from data; zero hard-coded counts that can drift | S |
| P0-10 ✅ *(done — motion release: catalogue/outline cards rebuilt from library with hover + press; amber hardcodes tokenized)* | **Fix `hover` affordance on catalogue & CMS cards; add missing dark variants on amber lock note** | Catalogue/lesson cards have no lift; `CoursesViews.tsx:231` amber text breaks dark bg | `CoursesViews.tsx`, `CmsBlockViews.tsx` | Cards communicate clickability; lock note readable in both themes | S |

## P1 — Main visual & navigation improvements

| ID | Item | Evidence | Files | Acceptance criteria | Effort |
|---|---|---|---|---|---|
| P1-1 | **`PageHeader` component adopted by all 15 views** — icon tile + `text-h1` + description + right slot; standard `py-8 max-w-6xl` container | 5 competing recipes, 4 title sizes, drifting margins (audit table §1.4) | all view files, new `shared/PageHeader.tsx` | One header anatomy; one H1 size; screenshot diff shows uniform headers across views | M |
| P1-2 | **Typography scale enforcement** — migrate ~120 arbitrary `text-[9–15px]` to scale tokens; standardize eyebrow recipe (`text-xs font-semibold uppercase tracking-wide text-primary`) | ~120 arbitrary sizes; 2 eyebrow recipes; 2 H2 styles | global sweep | Zero arbitrary text sizes outside the documented scale; one eyebrow recipe | M |
| P1-3 | **Landing page restructure** — hero product panel (tutor chat mockup) + green corner wash; "Five ways in" category cards with live counts (one featured 2-col Exam card); 3-step "How it learns" strip; levels → progression ladder; proof band; dead-end sections get CTAs | 8 identical tiles in 4 grids; zero imagery; tutor section is a text slab; Levels omits Grammar Core; "0 words forgotten" stat | `HomeView.tsx` | Page has ≥ 3 distinct section archetypes; every section has a CTA; hero includes product visual; counts derived from data | L |
| P1-4 | **Footer as sitemap** — 4 columns with per-item counts + honest status line; mobile collapse | 2-line tagline + 6-line stats wall on mobile (`page.tsx:423-431`) | `page.tsx` | Sitemap covers all destinations; ≤ 4 lines on mobile; counts from P0-9 util | S |
| P1-5 | **Course catalogue upgrade** — sticky filter bar (level/assessment/sort with counts), `ResourceCard` grid, enrol states, breadcrumb | No filters; no hover; `max-w-4xl` anomaly; 2 completed-badge systems | `CoursesViews.tsx` | Filters work; cards show enrolled/completed states; container harmonized | M |
| P1-6 | **Lab shells for the 6 practice hubs** — shared header/stat-grid shell; level pills from skill palette; "Open" CTA standardized (label + filled-soft style) | 3 different "open" labels (`GrammarHubView`); ghost buttons look disabled; hub widths drift | grammar/reading/listening/speaking/writing/lab views + shared shell | One shell, one CTA grammar; level colors from tokens | M |
| P1-7 | **Locked-preview pattern for gated hub pages** — blurred `ResourceCard`s behind overlay + EmptyState with "Start free"/"Try demo" | Reading/Tutor/Skills logged-out voids (P0-7 sibling, visual layer) | hub views | Value visible before login; conversion moment instead of dead space | S |
| P1-8 | **Grammar role palette** — collapse 11 hues to 6-token grammatical palette with dark pairs | `lib/grammar/roles.ts:17-88` light-only chips break dark mode | `lib/grammar/roles.ts` + consumers | ≤ 6 role colors, AA contrast, dark-mode safe | M |
| P1-9 | **Progress dashboard hierarchy** — hero "Continue" card with wash; stat band hierarchy (one hero stat); milestones 3-col; activity grouped by day; all charts on `--skill-*` tokens | 10 same-weight cards; orphan milestone cell; 3 greens/teals; hex charts (`bits.tsx:101-108`, `ActivityTab.tsx:32`) | `progress/*` | Clear visual hierarchy top→down; no orphan cells; charts follow theme tokens | M |
| P1-10 | **Admin visual pass** — KPI hierarchy + "No data yet" states, zebra tables, workflow chips on tokens, chart label placement, tab row incl. Import/Export | `DashboardTab.tsx` uniform cards, "—" giant stat, unreadable bar labels; floating tab | `admin/*` | KPI hierarchy legible; no raw "—"; tables scannable | M |
| P1-11 | **Exam division tokenization** — `--exam-*` vars replace ~250 slate/amber utilities; header pill harmonized with global active-state system; academy hero copy fix (orphan line) | `ExamAcademyView.tsx:4-8` deliberate but untokenized; two active-state systems in header | `exams/*`, `page.tsx` | Exam views styled via tokens; single nav active grammar; hero reads as designed | M |
| P1-12 | **Mobile rhythm pass** — landing 2-col stat grids + compact gaps; footer collapse; bottom-pinned "Continue" CTA on home; conversation thread height fix | 120px+ gaps, 6-line footer wall, `max-h-[46vh]` thread (`assets/talksy/19-home-390.jpg`, `20-library-390-p1.jpg`, `21-vocabulary-390.jpg`) | `HomeView`, `page.tsx`, `ConversationView` | No orphan whitespace bands; footer ≤ 4 lines; thread uses viewport-relative height comfortably | M |
| P1-13 | **Word World tab restructure** — primary tabs (Today, Explore, Flashcards, Lists) + "More" for Context/Relationships/Sentences/Challenges; stronger active pill; fix translation string ("con sed"); re-anchor login CTA card | 8 equal tabs; broken hero translation string; floating login card (`assets/talksy/05-vocabulary-1440.jpg`) | `vocabulary/*` | ≤ 5 visible tabs; active state unmistakable; hero copy correct | S |

## P2 — Advanced interactions & polish

| ID | Item | Evidence / inspiration | Acceptance criteria | Effort |
|---|---|---|---|---|
| P2-1 | **Global ⌘K search** — lessons, words, courses, mocks, grammar topics; grouped results with counts and ⌘K hint in header search pill | Reference dimension 12; TalkSy has zero search | Search from any view; grouped results; keyboard-first, escape closes; recent saves | L |
| P2-2 | **"Continue learning" + "Most practised this week" strips** on home & dashboard | Reference "Jump back in" / "Trending now" | Resume strip personalized; trending derived from real activity data | M |
| P2-3 | **Signature texture pass** — green corner wash on hero panels + icon-tile backlights; gold variant in exam division; remove remaining ad-hoc gradients (incl. `emerald-800` blend in `media-blocks.tsx:187`) | Strategy §2.4; reference sheen discipline | One documented texture recipe; ≤ 2 gradient styles app-wide | M |
| P2-4 | **Micro-interaction library** — `group-hover:translate-x-0.5` on open-links; bar/ring mount animations; 150–200ms hover transitions; subtle section fade-in on view mount | Dead `group` classes today; GrammarHub already proves the pattern | Shared utilities applied; reduced-motion safe; no layout shift | S |
| P2-5 | **Save/bookmark pattern** — bookmark toggle with count on catalogue/mock/word cards ("Saved" filter) | Reference bookmark counters + "Saved (0)" filter | Bookmark works without navigation; saved filter lists them | M |
| P2-6 | **Tutor first-run & typing experience** — suggested-prompt chips on empty state, typing indicator, message fade-in | Tutor logged-out/empty states plain | First run guides user; feedback during AI latency | S |
| P2-7 | **Breadcrumbs + unified back affordance** on drill-down views (reader, activity, course outline, mock player) | 3 back-button styles today | One breadcrumb/back component; consistent position/labels | S |
| P2-8 | **Vocabulary hero polish** — example-sentence card redesign (remove 70% dead space), history chips dedupe, español toggle re-anchored | `assets/talksy/05-vocabulary-1440.jpg` findings | Balanced hero; no duplicated chips; toggle aligned to header | S |
| P2-9 | **Onboarding polish** — Exam onboarding progress indicator + honest readiness badges with icon tiles | Planner readiness labels already honest — surface them visually | Multi-step flow shows progress; states animate | M |

## P3 — Optional enhancements

| ID | Item | Notes | Effort |
|---|---|---|---|
| P3-1 | **Dark mode decision & delivery** — mount ThemeProvider + complete missing `dark:` pairs (roles.ts, ExerciseRunner, TenseComparison, ChallengeRunner, admin badges, speaking plate) or delete dead code | Strategy §5; exam division unaffected (already dark) | L |
| P3-2 | **"New" chips on nav items** for recently shipped features (Planner, Evaluation) | Reference "New" superscripts — use sparingly | S |
| P3-3 | **Testimonials / learner stories band** on landing | Only with real quotes — honesty rules apply | M |
| P3-4 | **Animated progress rings** on lesson/unit completion; confetti-free celebration variants | Reuse `ProgressRing`; reduced-motion fallback static | S |
| P3-5 | **Heatmap & chart polish** — tooltips, week/month toggle, smoother scales | ActivityTab upgrade | M |
| P3-6 | **Landing "product tour" section** — tabbed screenshots of the six labs | Extends P1-3 hero panel into a section | M |
| P3-7 | **Print/export learner progress report** (PDF) | Teacher-friendly artifact | L |

---

## Definition of done (per item)

1. Visual: matches the token/component standards in `REDESIGN_STRATEGY.md` §2–3.
2. Functional: `bun test` (437 tests) green; affected E2E scripts pass; no new raw hues outside tokens.
3. A11y: keyboard path, focus-visible, contrast ≥ AA, touch targets ≥ 44px, reduced-motion safe.
4. Responsive: verified at 1440 / 1280 / 768 / 390 — **no horizontal overflow** (the reference's own defect is our regression test).
5. Evidence: before/after screenshots added to `docs/design/assets/` for the redesign record.

## Suggested sequencing

**Sprint 1 (P0):** P0-8, P0-9, P0-6 (quick wins) → P0-1 → P0-3 → P0-4 → P0-5 → P0-7 → P0-2 (tokens last, widest blast radius).
**Sprint 2 (P1):** P1-1 (header) → P1-2 (type) → P1-6 (shells) → P1-3 (landing) → P1-5, P1-9, P1-10, P1-11 → P1-4, P1-12, P1-13.
**Sprint 3 (P2):** P2-1 → P2-2 → P2-3/P2-4 → remainder.
**Ongoing (P3):** as capacity allows, P3-1 first if dark mode is wanted.
