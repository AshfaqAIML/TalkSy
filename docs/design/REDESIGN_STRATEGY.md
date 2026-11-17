# TalkSy Redesign Strategy

> **Companion documents:** [`REFERENCE_AUDIT.md`](REFERENCE_AUDIT.md) (evidence base) · [`UX_IMPROVEMENT_BACKLOG.md`](UX_IMPROVEMENT_BACKLOG.md) (execution plan).
> **Scope of this document:** the target visual identity, design tokens, component standards and per-surface concepts. **No application code is changed at this stage.**

---

## 1. Brand foundation — what TalkSy already owns

TalkSy's existing identity is **warm and human**: a cream canvas (`oklch(0.985 0.006 90)`), a deep confident green (`oklch(0.46 0.085 165)`), the graduation-cap mark and the "Talk" + "Sy" wordmark, and a product promise — *from your first English word to confident communication*. This is a differentiator: most edtech is either cold corporate blue or nursery-bright. The redesign **keeps every asset** and makes them work harder.

The identity must communicate:

| Value | Design translation |
|---|---|
| **Confidence** | Decisive hierarchy: one clear primary action per view; strong headline scale; high-contrast type on warm neutrals |
| **Learning** | Progress made visible everywhere: states, counts, streaks, "continue" affordances |
| **Intelligence** | Precision metadata (tabular-nums, mono IPA), data-honest counts, calm surfaces that let content lead |
| **Progress** | Completed/current/locked states, step numbers, growth rings, milestone chips |
| **Communication** | Speech/quote motifs, the tutor conversation surface as a first-class visual object, rounded "voice-bubble" geometry |
| **Approachability** | Warm cream, soft radii, friendly microcopy, never more than one saturated accent per view |
| **Professional quality** | Consistency itself: one card idiom, one badge grammar, one hover recipe — the reference's real lesson |

**Design north star:** *"A warm, well-lit study room — calm surfaces, one green lamp, everything in its place, progress visible on the wall."*

---

## 2. Design token system

### 2.1 Color

Keep the existing token base; extend it with **semantic status colors** and a **fixed skill palette**. All raw Tailwind hues in components are replaced by tokens.

```css
:root {
  /* existing brand — unchanged */
  --background: oklch(0.985 0.006 90);      /* warm cream */
  --primary:     oklch(0.46 0.085 165);     /* deep green */
  --ring:        oklch(0.55 0.09 165);

  /* NEW — semantic status (derived from brand green, warm complements) */
  --success:   oklch(0.55 0.12 155);  --success-foreground:   oklch(0.985 0.005 90);
  --warning:   oklch(0.70 0.13 75);   --warning-foreground:   oklch(0.28 0.05 70);
  --info:      oklch(0.55 0.10 245);  --info-foreground:      oklch(0.985 0.005 90);
  --correct:   oklch(0.55 0.12 155);  /* grading = success green */
  --incorrect: oklch(0.55 0.19 25);   /* grading = warm red, replaces amber-as-wrong */

  /* NEW — fixed skill palette (one hue per skill, used on every surface) */
  --skill-reading:    oklch(0.55 0.11 250);  /* blue  */
  --skill-listening:  oklch(0.55 0.10 200);  /* cyan  */
  --skill-speaking:   oklch(0.60 0.13 45);  /* warm orange */
  --skill-writing:    oklch(0.55 0.12 320);  /* violet */
  --skill-vocabulary: oklch(0.55 0.12 165);  /* brand green */
  --skill-grammar:    oklch(0.50 0.08 80);  /* warm bronze */

  /* NEW — exam division (tokenized navy-gold sub-brand, see §4.6) */
  --exam-bg:    oklch(0.17 0.02 260);  --exam-surface: oklch(0.21 0.02 260);
  --exam-accent: oklch(0.80 0.14 85);  /* gold */
}
```

Rules:
1. **Accent budget:** at most one saturated hue family per view (brand green), plus semantic pills. Color appears in pills, dots, icon tiles and glows — never as large fills (the reference's core discipline).
2. **"Done" is always `--success`**, never a second green; difficulty = `--info`/`--warning`/`--incorrect` tiers; grading = `--correct`/`--incorrect` pair.
3. Charts consume `--skill-*` tokens (kills the hex-color spread in `progress/bits.tsx`).
4. Every raw hue usage (~250 utilities across 14 families) migrates to tokens in P0/P1.

### 2.2 Typography

One type scale, Geist Sans (+ Geist Mono for linguistic data — already a convention):

| Token | Size/weight | Use |
|---|---|---|
| `text-display` | 44–60px / 700 / tracking-tight | Landing hero, Exam Academy hero only |
| `text-h1` | 30px / 700 / tracking-tight | **Every** app view title (kills the 4-size spread) |
| `text-h2` | 20px / 600 | Section headers within views |
| `text-h3` | 16px / 600 | Card titles |
| `text-body` | 14–15px / 400 | Body, descriptions (2-line clamp on cards) |
| `text-meta` | 12–13px / 500, muted | Meta rows — **tabular-nums always** |
| `text-eyebrow` | 11–12px / 600 / uppercase / tracking 0.08em / `--primary` | Section labels — ONE recipe (fixes LibraryView drift) |
| `text-mono-data` | 12–13px mono | IPA, structures, timers, codes, counts |

Ban list: arbitrary `text-[9px…15px]` (~120 usages) migrate to the scale; `text-[10px]`→`text-eyebrow`/`text-meta`.

### 2.3 Spacing & layout

- **Containers:** app views `max-w-6xl`; reading/writing focus views `max-w-5xl`; lesson/course detail `max-w-3xl`; auth `max-w-md`. Documented, no ad-hoc widths.
- **Section rhythm:** view header block `py-8`; between sections `gap-8`; landing sections `py-16` (mobile) / `py-24` (desktop) — one rhythm, not 10/12/14/16/20/24.
- **Card padding:** `p-5` standard, `p-4` compact rows, `p-6 sm:p-8` celebration/hero panels.
- **Grid:** `gap-4` cards; `gap-2` list rows.

### 2.4 Radius, elevation, hover

- **Radius:** controls `rounded-lg`; cards `rounded-xl`; hero/feature panels `rounded-2xl`; pills/dots `rounded-full`. Two visible tiers + pills, no more.
- **Elevation:** border-first. Rest: `border` + no shadow. Hover: `hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md transition-all duration-200`. Overlays: `shadow-lg` (existing primitives).
- **Signature texture (the reference's sheen, TalkSy-ized):** a soft **green corner wash** on hero panels — `linear-gradient(to right bottom, oklch(primary/0.12) 0%, transparent 50%)` — and icon tiles with a faint radial backlight. One texture, reused at every hero. Dark exam surfaces get the same treatment in gold.

### 2.5 Motion

Micro-interactions only, all `prefers-reduced-motion`-safe (existing rule stays):
- `group-hover:translate-x-0.5` on "Open →" links (already exists in GrammarHub — standardize).
- 150–200ms ease-out transitions on hover/focus; section content fades in `animate-in fade-in slide-in-from-bottom-2` on first mount of app views.
- Progress bars animate width changes; rings animate stroke on mount.
- **No page-transition theatrics** — instant hash routing is a feature; polish the *moments*, not the routes.

---

## 3. Component standards (the shared kit)

| Component | Replaces | Spec |
|---|---|---|
| `PageHeader` | 5 hand-rolled recipes | icon tile `size-10 rounded-xl bg-primary/10` + `text-h1` + `text-body muted` description + optional right slot (actions/stats). One component, every view |
| `TileCard` | 4 card idioms | `rounded-xl border bg-card p-5` + standard hover; optional glow variant for feature tiles |
| `ResourceCard` | catalogue/mock/lesson cards | badge row (status pills) → title → 2-line clamp → divider → `MetaRow` (duration, count, skill chip) |
| `MetaRow` | 3 meta systems | icon + `text-meta tabular-nums`, consistent separators |
| `StatTile` | 3 stat recipes | icon tile + big tabular number + label; hero stat variant (2× size) for the one number that matters |
| `StatusPill` | 14 hue families | semantic tokens only; 10–12px; tinted bg (10%) + colored text + optional dot |
| `EmptyState` (promote existing) | 4 shells | icon tile + title + one-line help + primary/secondary actions; used for empty, error **and** logged-out (with locked preview grid variant) |
| `SkeletonGrid` | 3 loading idioms | skeletons everywhere including LibraryView, CoursesViews, Exam cards |
| `LessonPathCard` | uniform library cards | numbered chip (01–20), state styles: completed (muted + ✓ chip), current (green border + glow + filled CTA), locked (dashed + lock icon), meta row |
| `SectionHeader` | drifting H2s | eyebrow + H2 + optional right caption ("12 lessons · 2 units") |

---

## 4. Visual concepts per surface

### 4.1 Main website (landing + navigation + footer)

**Navigation — 5 + More.** Logo · **Learn** · **Practice** · **Word World** · **Exam Academy** (amber chip retained but tokenized) · **More ▾** (Grammar School, Sentence Lab, Reading, Listening, Speaking, Writing, AI Tutor) · search pill (P2) · theme-independent account cluster. Active = green text + 2px underline; mobile Sheet gets the same grouping with section labels and active states.

**Landing — from brochure to storefront.**
- **Hero:** status pill ("● Free while we grow — 437 tests green" honesty signal) → H1 with a **green underline-flourish on the key phrase** ("speak English *confidently*") → 2-line sub → primary "Start free" + strong outline "Explore the learning path" → **product panel**: a framed, slightly rotated screenshot-come-alive of the tutor chat or lesson player with green corner wash (replaces all missing imagery; no stock photos ever).
- **"Five ways in" (category hub, reference pattern #4 adapted):** 5 `TileCard`s — Learning Path (20 lessons), Courses (…), Word World (135 words), Practice Labs (4 labs · 92 activities), Exam Academy (24 mocks) — each: icon tile w/ skill-hue backlight → title → **live count** → one-liner. One card (Exam Academy) featured: `rounded-2xl`, green wash, spans 2 cols on desktop.
- **"How it learns with you"** — 3-step strip (Assess → Practise → Review) with connectors, replacing one of the four identical grids.
- **AI Tutor panel:** real chat mockup (2 bubbles + suggested-mode chips), not a text slab.
- **Proof band:** honest stats row (tests, exercises, mocks) in tabular-nums, no "0 words forgotten".
- **Levels section** becomes a **progression ladder** (Pre-A1 → A2 greyed "building") with per-level counts and CTAs.
- **Footer as sitemap:** 4 columns (TalkSy manifesto, Learn, Practice, Exam Academy) with per-item counts, honest status line, no stats wall.

### 4.2 Learning dashboard (student home + progress)

- **"Continue learning" hero strip** at top: current lesson card with progress bar + time-left estimate + green "Resume" (reference's "Jump back in", in brand voice).
- **Daily plan row** (ties into the new study planner): today's tasks as compact chips with check states.
- **Stat band:** 4 `StatTile`s — streak (flame tile), words learned, activities done, lessons complete — tabular-nums, one hero stat emphasized.
- **Skills radar + activity heatmap** consume `--skill-*` tokens (fixes hex donut/lines).
- Card hierarchy: primary (Continue) full-width with wash; secondary cards plain `TileCard`s; tertiary lists borderless rows. Milestones grid 3-col with no orphan cell; activity grouped by day.
- Progress view logged-out → `EmptyState` with locked preview, never `null`.

### 4.3 Course catalogue

- `PageHeader` + **sticky filter bar**: level segmented tabs + "Has assessment" toggle + sort; per-filter live counts.
- `ResourceCard` grid 2-col (`lg:grid-cols-3` when library grows): level pill (skill-bronze/green), title, 2-line description, MetaRow (lessons · minutes · assessment ✓), enrol state ("Enrolled → Continue" green, "Completed" success chip).
- Course outline pages: breadcrumb strip, unit headers as `SectionHeader` with counts, lesson rows with completed/current/locked states (same `LessonPathCard` language as the learning path — one system).

### 4.4 Learning interface (lesson player + learning path)

- **Learning path:** vertical path per unit — numbered `LessonPathCard`s connected by a subtle dotted line; completed cards mute and collapse meta; **only the current lesson carries the filled green CTA**, all others are outline "Review"/ghost; unit headers get progress rings (reuse `ProgressRing` from bits.tsx — currently used once).
- **Lesson player:** `PageHeader` with lesson number chip; toolbar collapses to icon-only under `lg`; exercise prompts unified at `text-body font-semibold`; option buttons all use the lesson `optionClasses()` (ring → border+bg standard); feedback panel uses `--correct/--incorrect` tokens; emoji icons (🔊💡⚠️) migrate to lucide with the same meaning.
- Celebration screens keep their `p-6 sm:p-8` panels + get the corner wash.

### 4.5 Practice laboratories (Reading · Listening · Speaking · Writing · Grammar · Sentence Lab)

- Shared **LabShell**: `PageHeader` (skill-hue icon tile) + stat strip + activity grid with **level pills using `--skill-*` hue for the level ladder** (not arbitrary emerald/teal/amber/rose).
- Each hub's "open" CTA: one label — **"Open"** + chevron, filled-soft (primary/10) buttons, never ghost-grey-disabled-looking.
- **Logged-out hub pages:** locked preview — 2–3 blurred/faded `ResourceCard`s behind a soft overlay + centered `EmptyState` with "Start free" primary and "Try the demo" outline. No more empty beige voids.
- Recording states (speaking) standardize on `--incorrect`-red pulse; transcripts keep mono; feedback reports use semantic tokens for verdict bands.
- Grammar: the 11-hue role system collapses to a **6-hue grammatical palette** (noun/verb/adjective/adverb/pronoun/function) derived from skill tokens at 3 lightness steps — legible in light mode with dark pairs.

### 4.6 Exam Academy (Division C) & AI Tutor

**Exam Academy keeps its deliberate premium dark sub-brand** — it is a strength (the audit confirms the concept reads "premium"), but it gets **tokenized** (`--exam-*` vars) so it stops bypassing the theme system, and the header pill/CTA harmonize with the global nav (one active-state system).

- **Academy landing:** hero headline rewritten to avoid the orphaned last line ("behind it."); the three pathway cards get **one featured treatment** (gold wash) instead of three identical boxes; "Available examinations" cards get skeletons while specs load (kills the "empty dark boxes" slow-network state); icon-caption trio anchored into a proper card.
- **Mocks library:** sticky filter bar (exam: All/IELTS Academic/IELTS GT/TOEFL · skill · timed/untimed) + **2-col card grid** grouped by exam with section headers + counts; one primary CTA per card ("Start timed"), "Untimed" demoted to text link; spec meta in mono gold.
- **Dashboard/planner:** the 11-family spread collapses to exam tokens + skill palette; score rings + gap bars in gold/emerald on navy, tabular-nums.
- **AI Tutor:** keeps its clean token look; gets a proper empty/first-run state (suggested prompts as chips), typing indicator, and the mobile fallback nav aligned with the desktop sidebar; mode picker chips get icons + hover lift.

### 4.7 Admin

- KPI band: one hero `StatTile` (learners) + 3 compact; "—" replaced by "No data yet" muted state.
- Tables get soft zebra + hover rows; status chips standardized to workflow tokens (draft → outline, review → warning, approved → info, published → success).
- Charts: token colors, labels outside bars, values right-aligned tabular-nums.
- Tab bar including "Import / Export" in one row (no floating tab).

---

## 5. Dark mode strategy

Not in scope for P0–P2. Decision required in P3: either (a) mount `ThemeProvider` and complete the ~6 files of missing `dark:` pairs (grammar roles, ExerciseRunner difficulty, TenseComparison, ChallengeRunner, admin badges, speaking waveform plate) + tokenize exam skin, or (b) delete the dead `.dark` block and stray `dark:` utilities. The audit recommends (a) — the exam division proves dark surfaces suit focused study — but only after the light system is consistent.

## 6. Accessibility guardrails (non-negotiable)

- WCAG AA text contrast on all token pairs (validate with the existing `scripts/contrast-audit.ts`).
- Focus-visible rings (`--ring`) on every interactive element; keyboard path for the new "More" dropdown and ⌘K palette.
- Touch targets ≥44px preserved; new hover lifts never the only affordance.
- `prefers-reduced-motion` rule stays global; corner washes are static (safe).
- Color never the sole signal — pills always pair color with text/icons (already true for aria; keep visual too).

## 7. Rollout sequence

1. **P0 — Fix what's broken** (nav overflow, exam mocks layout, loading skeletons, empty/error states, toast clip, semantic tokens, single card idiom, lesson states). The app *works correctly everywhere* after this phase.
2. **P1 — Make it beautiful** (PageHeader everywhere, landing restructure, catalogue filters, footer sitemap, lab shells + locked previews, hover/texture system, typography scale enforcement).
3. **P2 — Make it alive** (⌘K search, continue/trending strips, micro-interactions, wash texture moments, bookmark/save pattern, mobile rhythm pass).
4. **P3 — Optional depth** (dark mode, New chips, testimonials, animated rings, heatmap polish).

Full itemization with acceptance criteria: [`UX_IMPROVEMENT_BACKLOG.md`](UX_IMPROVEMENT_BACKLOG.md).
