# TalkSy Final Redesign & Product Quality Audit (PROMPT 40)

Date: 2026-11-14
Scope: full integration audit of the redesigned TalkSy platform — visual consistency, reference comparison, screen-by-screen review, educational quality, functional testing, responsive testing, accessibility, performance, cleanup — with every fix verified by the test suite, live smoke tests and VLM screenshot review.

**Headline result: 714 tests green, `tsc --noEmit` clean, `eslint` clean, production build successful, question-bank QC clean (717 published questions, 0 errors), programme data validation 0 issues.**

---

## 1. Design improvements made in this audit

| # | Issue found (where) | Root cause | Fix |
|---|---|---|---|
| 1 | "Ctrl K" keyboard badge wrapped to two lines inside the header search trigger (all pages) | `kbd` could break at the space when the nav squeezed the button | `whitespace-nowrap shrink-0` on the badge (`SiteHeader.tsx`) |
| 2 | Search placeholder clipped ("Search lesso…") at 1440px | Placeholder text longer than the `xl:w-52` trigger | Shortened to "Search…" |
| 3 | Admin CMS tab bar: "Users" and "Import / Export" wrapped **outside** the pill container background (read as broken) | `TabsList` fixed `h-9` does not grow when `flex-wrap` wraps; triggers also stretched via `flex-1` | `h-auto flex-wrap` + `[&>[data-slot=tabs-trigger]]:flex-none` on the list (`AdminView.tsx`); verified fixed by re-screenshot |
| 4 | Dashboard learning-path carousel (768px): cards cut off with no scroll affordance | Snap carousel had no visual hint | Right-edge gradient fade below `lg` (`dashboard/sections.tsx`) |
| 5 | Homepage hero copy clipped at 360px ("impro…" / "confidence to" cut at viewport edge) | The product-preview card's mono IPA token `/həˈloʊ/` (cannot wrap) forced the implicit grid track to 383px > viewport | `min-w-0` on both hero grid tracks (`HomeView.tsx`); verified column now 328px at 360px, no overflow |
| 6 | Library page claimed "A2 · Coming soon — we are building A2 right now" | Outdated: the 56-chapter programme fully covers A2 (chapters 19–28, Elementary English) | Honest redirect card: "A2 lives in the Core English Programme" with a link to `#/courses/level/a2` (`LibraryView.tsx`, `data/curriculum`) |
| 7 | Anonymous visitor opening a course detail saw a bare red "Please log in." error (no course info, no CTA) — inconsistent with the public catalogue | `/api/cms/courses/[slug]` returned 401 for everyone | Public course outline for anonymous visitors (lessons listed, `enrolled: false`, progress omitted); enrol CTA routes logged-out users to login instead of a 401 toast (`getLearnerCourse`, `CoursesViews.tsx`) |
| 8 | Deep-linking a lesson while logged out showed the same bare 401 | Same gating family | Lesson player error state now offers "Log in or sign up" when the error is an auth error and no user is present |

No gradient/skeuomorphism/stock-photo regressions were found; the design language (navy/blue/violet/cyan/orange brand, Poppins + Inter, 9-variant card library, reduced-motion-aware motion system) is applied consistently across all 18 audited screens.

## 2. Functional fixes

| # | Issue | Fix |
|---|---|---|
| 9 | Test suite intermittently failed with 429s: the suite registers ~154 users per run, tripping the 120-per-15-min per-IP register throttle mid-run (lock then bled into isolated reruns) | Register limit now overridable via `AUTH_REGISTER_LIMIT` (default 120 unchanged); the test chain sets 1000. Suite: 687 → 714 tests green |
| 10 | Daily Word archive showed "thirsty" twice in one week | Independent per-day hashing collided (~15% chance within 7 days over 135 words). Replaced with a fixed seeded shuffle + one-slot-per-calendar-day stepping: same word for everyone on a date, different word every day, no repeat until the whole library cycles. Verified 14/14 unique |
| 11 | Five PROMPT 34 seed questions stored answer/explanation at the top level instead of the required nested `feedback` payload — their runtime answer feedback was broken (undefined) and they crashed QC | Migrated all 5 DB rows to the nested structure (with version bump), fixed the seed source, and hardened `qc.ts` to skip gracefully when `feedback` is absent |
| 12 | `match-pronoun-be` hint 1 revealed the complete answer ("I → am, you → are") — PROMPT 36 hint red line | Replaced with two progressive, non-revealing hints (seed + live DB); question-bank QC now fully clean |
| 13 | `validate-questionbank.ts` misreported validator crashes as "data payload is not valid JSON" | JSON.parse failures and validator exceptions are now reported separately |
| 14 | Adaptive-difficulty reason quoted the same percentage twice ("recent half (80%) is not below the earlier one (80%)") — read like a copy bug | Equal halves now render as "your accuracy has been steady at 80%" (`practice/trend.ts`) |

## 3. Reference comparison (dev-path-orpin.vercel.app)

DevPath (reference): dark charcoal system, Inter/Geist typography, amber→pink gradient headline, white pill CTA, 3-column dark cards, ⌘K affordances — rated **7.5/10** (cohesive and disciplined; familiar Linear/Vercel template; hero text-heavy).

TalkSy: **7.5/10 on the same rubric** with its own identity — light-first navy/violet brand with dot-grid texture, split hero with a product-mockup preview card (shows real lesson titles and states, not stock art), stat row with verifiable numbers, gradient "Confident English" emphasis. Both platforms tie on polish; TalkSy differentiates through the honest-numbers contract (every count on the page is verifiable against shipped content) and deeper in-app functionality (19 exercise types, 10 tutor modes, four labs). Remaining edge for DevPath: animation density and social proof in the hero — noted as future work, not a regression.

## 4. Screen-by-screen audit (18 screens, VLM-reviewed at 1440px)

Homepage, Registration, Course catalogue, Course detail (pre- and post-fix), Learning paths, Dashboard (logged in), Lesson player, Grammar School, Sentence Builder, Vocabulary Builder, Reading Room, Listening Lab, Speaking Lab, Writing Studio, AI Tutor, Practice hub, Progress analytics, Admin CMS.

Screen-level scores from the VLM principal-designer pass: 6.5–7.5/10 across screens (register 7, catalogue 7, paths 7, dashboard 7, lesson player 7.5, grammar 7, sentence lab 6.5, vocabulary 7.5, listening 7, speaking 7.5, writing 7, tutor 6→grid verified intact, practice 7, progress 7, admin 6→tabs fixed, course detail 3→**fixed** to a full public outline). All "clipped/missing" reports were re-verified by zoomed crops; the recurring floating "N" button was confirmed to be the Next.js dev-tools overlay (dev-only, not present in production builds).

## 5. Educational quality

- **Curriculum**: 6 levels (Pre-A1 → C1), 56 chapters, 266 lessons, 2,685 blocks, ~105.3 hours. Validation: **0 issues** (sequence, prerequisites, chapter completeness, lesson depth markers, terminology).
- **v2 teaching standard**: 5/56 chapters (CH-01 … CH-05) carry the full 15-part structure (24 blocks audited in CH-01-L-01: intro → concept → table → audio → examples → dialogue → steps → comparison → notes → common mistakes → four-skills → language support → summary → practice → assignment → homework). 51 chapters remain on the v1 baseline — expansion batches 3–17 are planned, **not claimed as done**.
- **Absolute-beginner experience**: CH-01-L-01 has no prerequisites, 4 clear objectives, embedded audio, language-support block (Urdu/Hindi), 7 published questions, AI-reviewed status honestly labelled.
- **Question bank**: 717 published questions (712 with chapter metadata, 717 with topic tags); every chapter 1–56 has ≥5 questions; all seven assessment areas covered per course; DB QC **clean** after fixing the five legacy payloads and one answer-revealing hint.
- **Skill strands per level** (from validation output) show deliberate four-skill integration; B1's listening (6) and pronunciation (2) strand counts are thin relative to reading/writing — recorded below as a content risk.

## 6. Functional testing

- 714 automated tests across 49 files (auth & security incl. throttling, catalogue, CMS authoring + RBAC + publishing, practice sessions + adaptive engine, four labs' APIs, vocabulary incl. daily word, tutor incl. QC guards, exams, progress, navigation, search index).
- Live smoke (this audit): login/admin login, catalogue (331 items), public course outline (post-fix), tutor conversation creation with mode validation (correct 400 on unknown mode), search index (823 entries, client-side filtering by design), audio asset routes, anonymous + authenticated rendering of every audited screen.
- Previously verified in PROMPTs 34–39 and unchanged: enrolment, lesson completion, exercise submission & feedback, dashboard persistence, writing autosave, admin publishing, AI-usage logging.

## 7. Responsive testing

Screenshots at 1440 (18 screens), 768 (catalogue, dashboard), 390 (home, dashboard, catalogue, lesson, tutor, vocabulary), 360 (home, dashboard, lesson). Fixes shipped: hero overflow at 360 (#5), carousel affordance at 768 (#4). All PASS after fixes except items attributable to the dev overlay. Vocabulary tabs use the scrollable-chip mobile pattern (acceptable; noted).

## 8. Accessibility

- Colour contrast: computed from the design tokens — muted foreground 5.85:1 (light bg), 5.42:1 (hero tint), 7.63:1 (dark bg); primary/foreground pairs verified AA previously (24/24) and spot-checked again.
- Semantic landmarks present (header/nav/main/footer, single h1) — verified at runtime; 324 aria-labels; sr-only loading/status announcements; focus-visible indicators across the UI kit and confirmed live.
- Reduced motion: dedicated `prefers-reduced-motion` block in globals.css plus motion-system awareness in animated components.
- Keyboard: Ctrl/Cmd+K palette, roving nav, tested in the navigation suites.

## 9. Performance

- Production build: successful in ~34s (single warning: `@property` at-rule unknown to LightningCSS — valid CSS, harmless).
- JS payload: ~3.5MB raw / **803KB gzip total**; the main chunk is 540KB gzip. The single large chunk is architectural: the hash-routed SPA renders all 120 routes from one entry and ships the "content-is-code" datasets (77 legacy lessons, grammar, IELTS banks) to the client. Recorded as a known limitation; route-level code splitting would be the lever if mobile bandwidth becomes a target.
- Server-side: API routes remain thin; catalogue/search indexes are computed per request with no grading data; no N+1 patterns found in the audited paths.

## 10. Cleanup

Removed/corrected: fake "Coming soon" state, legacy answer payloads, answer-revealing hint, misleading QC error labels, one-off debug scripts. Scanned and clean: no `console.log` in `src`, no placeholder images, no Lorem text, no unreferenced component files, no dead routes (all router names render), eslint/tsc zero issues.

## 11. Completed chapters & lessons (as of this audit)

- Chapters: **56/56** published with lessons, prerequisites and chapter tests.
- Lessons: **266 programme lessons** live (+77 legacy short lessons in Grammar School/Library, +288 catalogue lesson entries including labs/simulators). 5 chapters at the v2 teaching depth.
- Questions: **717 published**; hours of instruction: **~105.3**.

## 12. Tested routes

All 18 audited screens above, plus hash deep links `#/library/<level>`, `#/courses/level/<slug>`, `#/tutor/m/<mode>`, `#/practice`, `#/practice/s/<id>`, `#/tips` (covered by the navigation test suite), and the public API surface used by each screen.

## 13. Remaining limitations (stated honestly)

1. **Content depth**: 51/56 chapters are on the v1 baseline; v2 batches 3–17 are planned, not implemented.
2. **B1 strand balance**: listening (6) and pronunciation (2) strands are thin vs reading (33)/writing (35).
3. **AI tutor**: requires a configured provider (`AI_PROVIDER` env, server-side key). Without a key the UI degrades honestly; no provider is hardcoded.
4. **Bundle size**: single 540KB-gzip main chunk (hash SPA + client-side content).
5. **Media**: audio assets are generated/synthetic tones with transcripts (CC0), not human studio recordings; video blocks accept external links/embeds only, nothing is uploaded.
6. **SQLite**: single-file database suits the current scale; concurrent write-heavy deployments would need Postgres.
7. **Dev overlay**: the "N" floating button seen in screenshots is Next.js dev tools — it does not exist in production builds.

## 14. Known issues & technical risks

- The test suite raises `AUTH_REGISTER_LIMIT=1000`; production keeps the real 120/15-min cap (security behaviour unchanged).
- The 5 migrated questions carry a bumped version; historical attempts remain pinned to the versions they were graded against (by design).
- Hash routing means no SSR/SEO for deep content pages; the public marketing pages are server-rendered.
- If the register-throttle env var is set to an invalid value it silently falls back to 120 (safe default).

## 15. Verdict

TalkSy now ships a coherent, accessible, premium-feeling design system across every audited screen, an honest public discovery funnel (catalogue → course outline → login gate), a 56-chapter curriculum with clean QC, and a fully green 714-test engineering baseline. The platform looks beautiful, feels consistent, and teaches English with verified answer keys and honest progress claims; the remaining gaps are content depth (51 chapters on the baseline standard), provider configuration for the AI layer, and bundle splitting — all documented above rather than hidden.
