# TalkSy Visual & Functional Audit — Reference Analysis

> **Status:** Evidence base for the redesign strategy. No application code was modified.
> **Method:** full UI-code audit of both design systems (file:line evidence), 24 full-page screenshots of the running TalkSy app (desktop 1440 + mobile 390, student + admin roles), 15 screenshots of the reference site at 1440/1280/768/390, CSS token extraction via computed styles, and structured visual analysis of every captured screen. Evidence assets: [`assets/talksy/`](assets/talksy/), [`assets/reference/`](assets/reference/).

---

## Part 1 — Current TalkSy State

### 1.1 Inventory of audited surfaces

| Surface | Route / file | Screenshot |
|---|---|---|
| Landing page | `HomeView.tsx` | `assets/talksy/01-home-1440.jpg` |
| Navigation & footer | `src/app/page.tsx` | all captures (header visible) |
| Course catalogue | `courses/CoursesViews.tsx` | `assets/talksy/03-courses-1440.jpg` |
| Student dashboard | `progress/ProgressDashboardView.tsx` | `assets/talksy/13-progress-1440.jpg` |
| Learning roadmap | `LibraryView.tsx` | `assets/talksy/02-library-1440.jpg` |
| Lesson player | `lesson/LessonPlayer.tsx` | `assets/talksy/17-lesson-1440.jpg` |
| Grammar pages | `grammar/*.tsx` | `assets/talksy/04-grammar-1440.jpg` |
| Vocabulary | `vocabulary/*.tsx` | `assets/talksy/05-vocabulary-1440.jpg` |
| Speaking interface | `speaking/*.tsx` | `assets/talksy/08-speaking-1440.jpg` |
| Listening interface | `listening/*.tsx` | `assets/talksy/07-listening-1440.jpg` |
| Writing interface | `writing/*.tsx` | `assets/talksy/09-writing-1440.jpg` |
| AI tutor | `tutor/*.tsx` | `assets/talksy/10-tutor-1440.jpg` |
| Authentication | `AuthView.tsx` | `assets/talksy/12-login-1440.jpg` |
| Admin dashboard | `admin/AdminView.tsx` | `assets/talksy/18-admin-1440.jpg`, `18b-admin-curriculum-1440.jpg` |
| Exam division (Division C) | `exams/*.tsx` | `assets/talksy/11-exam-academy-1440.jpg`, `14-exam-dashboard-1440.jpg`, `15-exam-planner-1440.jpg`, `16-exam-mocks-1440-p1.jpg` |
| Mobile layout | — | `assets/talksy/19-home-390.jpg` – `23-mobile-nav-390.jpg` |

### 1.2 What already works (keep)

- **Disciplined token foundation.** `globals.css` defines a complete, warm, well-chosen palette (cream background `oklch(0.985 0.006 90)`, deep green primary `oklch(0.46 0.085 165)`) with a consistent radius base (`0.625rem`) — a real identity, warmer and friendlier than the reference's neutral grayscale.
- **Strong a11y baseline.** Skip link (`page.tsx:222`), aria-labels on all nav controls, `prefers-reduced-motion` honoured (`globals.css:137`), 44px touch targets in exercises (`choice-inputs.tsx:20`), `scroll-margin-top` for the sticky header.
- **AI Tutor area is visually clean** — pure token usage, no hardcoded hues (the cleanest module in the app).
- **Word World "Word of the Day" hero** (`TodayTab.tsx:85-110`) — big word, mono IPA, gradient panel: the strongest single component design in the product.
- **Mono font usage is purposeful** — IPA transcriptions, grammar structures, timers, certificate codes: a consistent, learnable convention.
- **Functional depth is ahead of its clothes.** 120 routes, 437 unit tests, six practice laboratories, exam engine — the redesign is a presentation-layer task, not a rebuild.

### 1.3 Cross-cutting weaknesses (quantified)

**W1 — Desktop navigation overflows its container (visible defect).**
13 links at `gap-0.5` inside a hidden-scrollbar `overflow-x-auto` strip (`page.tsx:234`). The links measure ~1,250px against ~800px of available width, so at **1440px the nav clips mid-label — screenshots show "Listening La(b)"** on every desktop page. No scroll affordance exists; users cannot discover half the product (Reading Room, Listening Lab, Writing Studio, AI Tutor, Progress) without knowing to drag an invisible scrollbar.

**W2 — Four page-title scales for the same role.**
Hero H1 `text-4xl/5xl` (`HomeView.tsx:64`), library `text-3xl` (`LibraryView.tsx:69`), courses `text-2xl` (`CoursesViews.tsx:61`), auth `text-xl` — plus 5 different view-header recipes across 15 views (audit table in §1.4). No shared `<PageHeader>`; icon tiles vary `size-10 rounded-xl` vs `size-12 rounded-2xl`; top padding varies `py-8`/`py-10`/`pt-6`.

**W3 — 14 hardcoded Tailwind hue families beyond the tokens.**
amber ×42 files, emerald ×40, rose ×13, sky ×9, red ×9, violet ×8, orange ×6, teal ×4, plus slate ×12 as a parallel "exam" palette. Worst single file: `ExamPlannerView.tsx` mixes 11 families; `grammar/roles.ts` color-codes 11 hues. "Correct" alone is expressed four ways (`text-primary` in lessons, `text-emerald-600` in listening, `text-emerald-300` in exams, emerald-300 borders in reading) and "done/complete" renders in **two different greens on the same screen** (`CoursesViews.tsx:214` `bg-emerald-600` beside token-primary circles).

**W4 — Four card idioms, four hover languages.**
(a) shadcn `Card` (no hover on catalogue/auth/CMS cards), (b) custom tiles `rounded-2xl … hover:border-primary/50 hover:shadow-md` (HomeView), (c) list rows with bg-tint hover only (`CoursesViews.tsx:208`), (d) exam cards — no shadows at all, slate borders. Card padding runs 4 densities (`p-4`, `p-4 sm:p-5`, `p-5`, `px-6`); radius runs 3 tiers on one page (HomeView feature Card `rounded-xl` next to sibling tiles `rounded-2xl`).

**W5 — Uniform card monotony without states.**
The learning path renders ~20 identical white cards, each ending in an identical saturated green button — a "green wall" with no numbering, no completed/locked/in-progress states, and orphan cards in ragged grids (`assets/talksy/02-library-1440.jpg`). The landing page repeats the same eyebrow+title+muted-paragraph tile **8 times** across 4 sections with no featured/hero card in any grid, and no imagery anywhere in the product (zero screenshots, illustrations or photos — the flagship "Your AI Tutor" section is a text-only panel, `assets/talksy/01-home-1440.jpg`).

**W6 — Empty, error and loading states are weak and inconsistent.**
Reading Room and AI Tutor logged-out states are a floating card in a ~70%-empty viewport (`assets/talksy/06-reading-1440.jpg`, `10-tutor-1440.jpg`) — no preview, no secondary CTA. Error states duplicate their own heading text ("Lesson not found" / "Lesson not found.") with one recovery link (`assets/talksy/17-lesson-1440.jpg` was captured with a bad slug; the state itself is real — `LessonPlayer.tsx` renders `max-w-2xl` text + one button). Three competing loading idioms: spinner+caption (`LibraryView.tsx:48`), bare `<p>Loading…` (`CoursesViews.tsx:68`), Skeletons (everywhere else). The Exam Academy cards render as **empty dark boxes until spec data arrives** — no skeleton (`assets/talksy/11-exam-academy-1440.jpg` first capture vs. verified content after 2.5s wait) — a perceived-as-broken state on slow connections.

**W7 — Exam division ignores the design system.**
~250 hardcoded slate/amber utilities across 9 files wrap every exam view in an always-dark `bg-slate-950` skin (`ExamAcademyView.tsx:4-8` documents this as intentional). Consequences: theme tokens bypassed, two accent systems in one header bar (green "Start free" + amber "Exam Academy" pill, `page.tsx:187`), and a visual break that reads as "a different app" rather than a premium division. Within the division, `ExamMocksView.tsx` stacks ~25 single-column cards in a ~750px column with ~50% dead horizontal space, inconsistent CTA placement (buttons top-right on most cards, stacked-below on others), and 10,000px+ of ungrouped, unfilterable scroll (`assets/talksy/16-exam-mocks-1440.jpg`).

**W8 — Micro-quality defects that read as unfinished.**
- Progress dashboard toast clips the sticky header (`assets/talksy/13-progress-1440.jpg`).
- Streak widget typo "Noting is lost" (should be "Nothing").
- AssessmentFlow review renders raw `JSON.stringify` of learner answers (`AssessmentFlow.tsx:270`).
- Conflicting utility classes at `interactive-inputs.tsx:211` (duplicate `bg-*`/`text-*`, the primary tint is dead).
- Marketing copy drift: "15 exercise types" (`layout.tsx:19`) vs "16" (`HomeView.tsx:31`); "20 lessons" vs "4+2 live" (`HomeView.tsx:88/362`); footer stats hand-maintained (`page.tsx:429`).
- Favicon loads from an external CDN while `public/logo.svg` sits unused (`layout.tsx:22`).
- Dead code: `.dark` token block + scattered `dark:` utilities but no ThemeProvider mounted; 8 dead `group` classes with no `group-hover:` rules (HomeView tiles) — polish other hubs already have (`GrammarHubView.tsx:53`).
- Progress dashboard renders a blank page when logged out (`ProgressDashboardView.tsx:88` `return null`).

### 1.4 Per-surface findings (condensed)

| Surface | Polish | Key findings (evidence) |
|---|---|---|
| Landing | 6/10 | 8 identical tiles in 4 grids, zero imagery, duplicate tutor CTAs, hero `max-w-5xl` vs sections `max-w-6xl` width jump, "0 words forgotten" as a headline stat, Levels section is a dead end (no CTA) and omits the Grammar Core level that carries 14/20 lessons |
| Navigation | 3/10 | W1 overflow + truncation; two active-state systems (solid `bg-secondary` vs amber pill); mobile Sheet "Home" link has no active state and different padding |
| Course catalogue | 5/10 | Cards have no hover lift; locked lessons use bare `text-amber-700` (no dark variant); `max-w-4xl` container narrower than every other view; two "completed" badge systems |
| Student dashboard | 6.5/10 | 10+ same-weight white cards (no hierarchy); milestones 2-col grid leaves an orphan cell; three different greens/teals in progress bars; 7 identical activity rows ungrouped; certificates card mostly empty |
| Learning roadmap | 5/10 | W5 monotony; "Coming soon" A2 slab; unit headers default-looking; meta row mixes 3 chip systems |
| Lesson player | 7/10 | Best structure (sticky aside, mobile Sheet, progress ring) but header packs 5 controls + Select in one row; exercise prompts drift `text-sm` vs `mt-4 font-semibold` across runners; emoji icon system (🔊💡⚠️) mixed with lucide icons |
| Grammar | 5.5/10 | Parts-of-speech grid uses 11 arbitrary saturated pill colors clashing with the muted brand; duplicate graduation-cap icon next to the logo's identical cap; three different "open" CTA labels ("Open explorer/clinic", "Enter the lab") |
| Vocabulary | 7/10 | Best page (strong hero); 8 equal-weight tabs overflow; "Log in" card floats in a dead band; translation string bug ("con sed" rendered bare); español toggle is an orphan control |
| Reading/Listening/Speaking/Writing hubs | 3–7/10 | Reading + Tutor logged-out = near-empty pages; all four share recipe (c) headers but drift on container widths (`max-w-5xl` vs `6xl`) and stat chips |
| AI tutor | 7/10 | Cleanest token usage; logged-out state is the empty-template problem; usage pill orphaned |
| Auth | 7/10 | Solid card, labeled inputs, demo button; `text-xl` title off-scale; no brand imagery |
| Admin | 7/10 | Competent but flat: uniform KPI cards ("—" shown as a giant em-dash stat), heavy borders + zero shadows, enrolment bars have unreadable labels, "Import / Export" tab floats detached; role badges solid emerald/amber/orange off-token |
| Exam division | 5/10 | W7; planner mixes 11 hue families; academy hero headline wraps orphaned ("behind it." alone on line 2); trademark disclaimer wall |
| Mobile | 6/10 | Good Sheet nav, horizontal tab scroll; landing stacks 6 identical full-width cards with 120px+ gaps; footer stats line becomes a 6-line wall; ConversationView thread capped at `max-h-[46vh]` |

---

## Part 2 — Reference Site Analysis

**Site:** `dev-path-orpin.vercel.app` (DevPath — developer masterclasses, roadmaps, courses, resources, simulators). Captured at **1440 / 1280 / 768 / 390px** (`assets/reference/01-home-1440.jpg` … `15-footer-1440.jpg`). Its architecture: a **single-page catalogue** — the home page *is* the library; nav links are `?category=` filters; detail views open as overlays; a ⌘K command palette augments navigation.

### 2.1 The seventeen dimensions

1. **Palette.** Neutral-grayscale backbone (page `#0a0a0a`, surfaces `#141414–#1a1a1a`, hairline borders `#262626`, text `#f5f5f5/#a3a3a3/#737373`) with a **strict accent budget**: colour appears only in ~11px pills, dots and badges — orange/amber `#f97316` (primary accent, active nav, hero highlight), emerald `#10b981` (New badges, live dots, step chips), rose `#ef4444` (Advanced), gold `#eab308` (Featured ⭐), violet/blue/pink reserved for topic tags. **Buttons stay neutral**; colour never floods a surface.
2. **Background treatments.** Layered elevation: page → card → hero panel, each one lightness step apart. Plus a signature **diagonal sheen** (3–6% opacity light sweep) on every card — one repeated texture unifying the whole site.
3. **Gradients.** Always atmospheric and contained in rounded surfaces: hero corner-washes (amber top-left → teal bottom-right at 10–25%), icon-tile backlights, a horizontal gradient strip on the library banner. Computed-style scan found 12+ corner-glow gradients of the exact form `linear-gradient(to right bottom, <accent>/0.15 0%, transparent 50%)`.
4. **Typography.** Inter-like sans, system stack (no webfont); H1 ~56–72px/700–800 with tight tracking and a **gradient-text + underline accent on the key phrase**; section H2 ~28–32px; card titles 15–17px/600; body 13–14px `#9a9a9a`; **monospace for all metadata** (counts, durations, tags) — a precision signal; eyebrows 11–12px uppercase, `0.1–0.15em` tracking. Every description is 2-line clamped, keeping grid edges perfectly aligned.
5. **Heading hierarchy.** Eyebrow → H2 + right-aligned context caption ("most viewed this cycle") → card grid. Section headers carry a 2–3px orange left bar as a repeated motif; the "colored `|` before section icon" is a signature.
6. **Card design.** Two archetypes, both disciplined: **category cards** (emoji icon tile with glow → title → bold count + gray noun → one-liner) and **resource cards** (badge row: difficulty pill + Featured ⭐ → title → 2-line desc → divider → mono metadata row → bookmark count + views). Radius 12–16px; 1px border; depth via sheen not shadow.
7. **Borders & shadows.** Hairline borders, no at-rest drop shadows; the only shadows found are **colored glows** (accent at low alpha) — shadows are used as *light*, not as elevation.
8. **Hover effects.** Subtle: border-lighten + surface lift + sheen intensify (implied by the texture); bookmark icon per card for a persistent micro-action.
9. **Navigation.** Compact bar: logo → 6 links (two with tiny teal "New" superscript chips) → search pill with ⌘K kbd → icon cluster (library, theme toggle, admin) → bordered "Get the App". Active tab = orange text + underline. Breadcrumb strip under the header ("← All categories › Courses").
10. **Category organisation.** 5 content types, each with a **live count** (15 workshops, 11 roadmaps, 85 courses…), color-coded dots reused across home legend, footer, mobile menu and search — one taxonomy, four surfaces.
11. **Content discovery.** Category hub → "Jump back in" resume strip → "Trending now" (view counts as social proof) → "Editor's picks" (Featured badges) → sticky filter bar in each category (segmented difficulty tabs, Saved count, sort dropdown). Data-honest counts everywhere ("85 mini courses · 85 shown").
12. **Search experience.** Command palette (⌘K): grouped results by category with counts, icons, completion check-marks — power-user UX that also serves as a sitemap. Header search pill advertises it.
13. **Page transitions.** Category switching is client-side filtering (instant); detail views open as overlays over the catalogue; mobile menu is a right drawer with the color-dotted taxonomy + counts.
14. **Interactive components.** Segmented filter tabs with white active pill; bookmark toggles with counters; "New"/"Featured" chips; live status dots (hero pill, footer "150 resources live"); stats-as-identity pattern (bold white number + gray label inline).
15. **Responsive behaviour.** Desktop 3-col grids → tablet 2-col → mobile 1-col with pinned bottom action buttons and a drawer menu. **Defect found:** at 768px the site has a genuine horizontal overflow (scrollWidth 1119 vs viewport 768) — the reference is not flawless and this must not be copied.
16. **Footer.** A working sitemap: 4 columns (brand, Categories *with per-item counts*, Platform, Content Model), a colored-dot legend, a live-status line, and a quiet tech-credit line. It closes the page instead of trailing off.
17. **Visual consistency.** One card anatomy, one badge grammar, one metadata format (mono), one texture (sheen), one accent budget, one taxonomy across all surfaces. Tokens are shadcn-style (same `--radius: .625rem` as TalkSy) — the polish comes from **consistency of application**, not exotic components.

### 2.2 What the reference does that TalkSy doesn't (the essence)

1. **Counts as interface** — every list, nav item, footer link and search group carries a live count, making scale legible and the platform feel alive.
2. **One taxonomy, reused everywhere** — category + difficulty + featured is a single vocabulary across home, filters, cards, footer, mobile.
3. **Accent discipline** — colour is a seasoning (pills, dots, glows), never a surface; neutral surfaces do the structural work.
4. **Signature texture** — one repeated gradient treatment (corner glow / sheen) creates a memorable identity without imagery.
5. **Discovery beyond browse** — trending, editor's picks, resume strip, ⌘K palette: four answer to "what should I do next?"
6. **Metadata typography** — mono, 11–12px, always the same format: reads as precision engineering.

### 2.3 Reference weaknesses (do not copy)

- Horizontal overflow at 768px (verified in DOM).
- Emoji-as-icon dependence (renders inconsistently across platforms; TalkSy already has a proper lucide set).
- Developer-specific mono/terminal flavour — wrong emotional register for language learners.
- Dark-first palette is its identity, not a pattern to transplant; TalkSy's warm cream/green is a differentiator to build on, not replace.

---

## Part 3 — Design Comparison & Adaptation Decisions

Legend for priority: **P0** critical usability/consistency · **P1** main visual/navigation improvements · **P2** advanced interactions & polish · **P3** optional.

| # | Reference pattern | Current TalkSy | Recommended TalkSy improvement | Priority |
|---|---|---|---|---|
| 1 | Compact nav + filter-style category links | 13 overflowing links, clipped labels, hidden scrollbar | Group into **5 destinations** (Learn, Practice, Word World, Exam Academy, Progress) + "More" dropdown; active state = green text + underline; kill hidden-scrollbar strip | **P0** |
| 2 | Live counts on every list/nav/footer item | Hand-maintained footer stats line, drifting copy | Derive counts from data (single source); show per-section counts in nav dropdown, catalogue, footer | P1 |
| 3 | Search pill + ⌘K palette with grouped results | No search at all | Global search over lessons, words, courses, mocks, grammar topics with grouped results and ⌘K hint | P2 |
| 4 | Category hub cards (icon tile → count → one-liner) | 8 identical feature tiles, no counts | Restructure landing around **content-type cards with counts** + one featured product panel (tutor chat mockup) | P1 |
| 5 | Hero: status pill → H1 w/ gradient phrase → CTAs → announcement pill | Textbook hierarchy but no imagery, weak secondary CTA, no proof | Keep hierarchy; add underline/gradient accent on key phrase; add a product-screenshot or chat mockup panel; strengthen outline CTA contrast | P1 |
| 6 | 2-line clamp on all descriptions | Dense 5–7 line muted paragraphs per card | Enforce 2-line clamps (`line-clamp-2`) on all card copy | P1 |
| 7 | Badge grammar: difficulty pill + Featured ⭐, one system | 14 hue families, 4 "correct" styles, 2 greens for "done" | Semantic status tokens (`--success/--warning/--info/--correct/--incorrect`) + **one** SkillPalette (fixed hue per skill); badges always pill + 10–12px | **P0** |
| 8 | Mono metadata rows in a fixed format | Inconsistent meta: mixed chips, icons, plain text | Standard `MetaRow` component: icon + mono/tabular-nums value, one format | P1 |
| 9 | Card anatomy A/B (category vs resource) with divider | 4 card idioms, 4 paddings, 3 radii | One `TileCard` (radius, padding, hover border+shadow) + one `ResourceCard` (badge row → title → clamp → divider → MetaRow) | **P0** |
| 10 | Hover: border-lighten + lift, bookmark on every card | Inconsistent (shadow-only / border+shadow / bg-tint / none) | Single hover recipe: `hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md` + transition | P1 |
| 11 | Corner-glow gradients on hero/icon tiles, one sheen texture | 10 scattered gradients, one blending token green into raw `emerald-800` | One signature treatment: soft **brand-green corner wash** on hero panels + icon-tile backlights; remove ad-hoc gradients | P2 |
| 12 | Trending / Editor's picks / resume strip | Uniform grids, no curation, no "continue" | "Continue learning" strip on home + dashboard; "Most practised this week" row in catalogue | P2 |
| 13 | Sticky filter bar (segmented tabs, saved, sort) | Exam mocks: 25 ungrouped cards, 10k px scroll; catalogue: no filters | Sticky filter bar pattern for mocks (exam type / skill / timed), catalogue (level), vocabulary (category) | **P0** (mocks), P1 (catalogue) |
| 14 | Detail view as overlay with breadcrumbs | Inconsistent back buttons (3 styles) | Breadcrumb strip + unified back affordance | P1 |
| 15 | Footer as sitemap with counts + dot legend + status | 2-line tagline + stats wall | 4-column footer: brand/manifesto, Learn links, Practice links, Exam Academy; counts; honest status line ("free while we grow") | P1 |
| 16 | Icon tiles with glow anchors for sections/empty states | Flat 40px icons floating in empty states | Icon-tile treatment (rounded-xl, primary/10 bg, glow) for headers, empty states, error states | P1 |
| 17 | Progress states everywhere (resume strip, dots, checkmarks) | Learning path: 20 identical cards, no states | Numbered lessons with completed/current/locked states; next-lesson highlighted; others demoted | **P0** |
| 18 | "New" superscript chips on nav items | NEW eyebrows on landing only | Use sparingly for genuinely new features (Planner, Evaluation) | P3 |
| 19 | Theme toggle, dark & light both polished | `.dark` block dead code, no toggle, dark-breakers in 6 files | Decide: complete dark mode (add missing `dark:` pairs, tokenize exam skin) or remove dead code — do not ship half | P3 |
| 20 | Empty states never blank (locked previews, suggestions) | Floating login cards in 70% empty viewports; "0/0/0" admin stats; JSON.stringify in review | Locked/blurred preview grids behind auth gates; suggestion cards on errors; "No data yet" treatments in admin | **P0** |
| 21 | Toasts/overlays never clipped | Achievement toast clips sticky header | Toast offset below header; `--header-height` var | **P0** |
| 22 | Mobile: drawer + pinned bottom actions, 1-col cards | Sheet nav (good); landing = 120px-gap card stack; 6-line footer wall | Compact mobile rhythm (gap-4/6), 2-col stat grids, collapsed footer, bottom pinned "Continue" CTA on home | P1 |

### 3.1 Adaptation decisions

**Adopt (adapted to TalkSy's identity, never copied verbatim):** accent-budget discipline; counts-as-interface; one taxonomy; card anatomy + 2-line clamps; mono/tabular metadata rows; sticky filter bars; progress states; corner-glow hero treatment (in **green**, not amber); footer-as-sitemap; icon-tile anchors; hover recipe; grouped nav with "More"; resume/continue strips; ⌘K search (later phase).

**Explicitly not adopted:** the reference's dark-first canvas (TalkSy keeps its warm cream light theme as the differentiator), its developer/terminal mono-heavy voice, emoji-as-icon system, exact layouts and gradients, its 768px overflow behaviour, and all proprietary identity/branding. DevPath is treated purely as a quality benchmark for organisation and polish.

**Preserved from TalkSy:** logo and wordmark, cream + deep-green brand palette, warm friendly tone, mono-for-IPA convention, a11y baseline, exam division's premium dark skin (retained as an intentional, tokenized sub-brand — see strategy §4.6).
