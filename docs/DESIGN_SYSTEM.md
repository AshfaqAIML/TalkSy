# TalkSy — Design System

**Warm paper, lagoon teal, deep ink, amber milestones.** The feeling of a
well-made workbook brought to a screen — editorial warmth where the brand
speaks (headings, covers, celebrations), and focused SaaS clarity where the
learner works (exercises, lists, forms).

- **Living style guide:** run the app and open `#/design` — every token and
  component on that page is the real, live implementation.
- **Single source of truth:** `src/app/globals.css` (tokens) mirrored by
  `src/lib/ds/tokens.ts` for JS contexts. `tests/design-system.test.ts`
  verifies the two never drift and that every text pair passes WCAG.
- **Component library:** shadcn/ui primitives (`src/components/ui/*`)
  re-skinned entirely by tokens, plus TalkSy composites in `src/components/ds/*`.

---

## 1. Brand

| | |
| --- | --- |
| **Name** | TalkSy — never "TalkSY", "Talksy" or the retired "EnglishPath" |
| **Tagline** | "From your first English word to confident communication." |
| **Mark** | A speech bubble whose trail rises from three small dots ("first words", also the typing dots of a conversation) to an **amber waypoint** (the destination). Talk + path. |
| **Wordmark** | "TalkSy" in Fraunces 600, closed by the amber waypoint as a full stop. |
| **Voice** | Encouraging, plain, honest. "Your streak is 4 days", never "🔥🔥 BLAZING!". Numbers get context: "12 of 18 lessons · 67%". |

**Brand values → design decisions**

| Value | How the design expresses it |
| --- | --- |
| Growth | rising trail motif, progress rings, phase colours that accumulate |
| Confidence | generous whitespace, one primary action per region, honest empty states |
| Simplicity | one accent colour for action, restrained semantics, 4px spacing grid |
| Learning | editorial serif headings, workbook paper, phase-coded practice |
| Achievement | amber XP, milestone dots, quiet celebrations (spring, never confetti-storms) |
| Approachability | warm off-white canvas, friendly sans, soft radii, humane microcopy |
| Professional quality | AA+ contrast gates in CI, consistent states, reduced-motion support |

**Logo usage.** Lockup = mark + wordmark (app chrome, footer). Mark alone
when < 48px or in the sidebar rail. Clear space = the mark's dot diameter.
Never stretch, recolour, outline or add shadows to the mark. The favicon
(`public/icon.svg`) is the canonical flat version.

---

## 2. Colour

Two complete themes (light = workbook paper, dark = evening study). Raw
scales are exposed as Tailwind utilities (`text-ink-700`, `bg-sand-100`,
`bg-phase-speaking/10`, …) and mapped onto the shadcn semantic variables
(`bg-primary`, `text-muted-foreground`, …) that the component library uses.

### Brand — lagoon teal (action, focus, progress)

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `brand-50/100` | `#f0faf8` / `#d9f2ee` | deep tints | soft chips, tinted fills |
| `brand-200/300` | `#b0e5dd` / `#7dd2c5` | — | decorative, progress tracks |
| `brand-500` | `#269a8d` | `#3ba392` | charts, illustrations |
| `brand-600` = `primary` | `#177e76` | `#4ec5b4` | **solid interactive** (5.0:1 on white) |
| `brand-700` | `#12655f` | `#74d6c6` | hover, links on paper (6.6:1) |

### Ink — deep navy-teal (text hierarchy)

| Token | Light | Ratio on paper | Use |
| --- | --- | --- | --- |
| `ink-900` | `#122730` | 14.6:1 (AAA) | headings, primary text |
| `ink-800` | `#1c3a45` | 11.3:1 | emphasis |
| `ink-700` | `#2c4c58` | 8.7:1 | body text |
| `ink-600` | `#46626d` | 6.2:1 | secondary text |
| `ink-500` = `muted-foreground` | `#59737e` | 4.7:1 (AA) | meta text, captions |
| `ink-400` | `#7a919b` | — | placeholders, disabled (large text only) |

### Paper & sand — warm surfaces

`paper` `#faf8f2` (page) · `sand-50` `#fcfbf7` (raised) · `sand-100`
`#f4f1e9` (fills, stripes) · `sand-200` `#ebe7db` (hover fills, chips) ·
`line` `#e5e0d3` (borders) · `line-strong` `#cfc8b6` (inputs, strong
dividers). Cards and popovers sit on pure white in light, raised forest in
dark.

### Status semantics (never cross-wire)

| Meaning | Scale | Solid (light) | Text on paper |
| --- | --- | --- | --- |
| Success / correct | Grove | `grove-600` `#2f7f4c` | `grove-700` `#256a40` |
| Achievement / XP | Sun | `gold` `#f0b84a` + `gold-foreground` `#3a2b05` | `sun-700` `#8f6113` |
| Danger / error | Clay | `clay-600` `#bb3a34` | `clay-700` `#9a2f2a` |

### Phase palette — the educational signature

Each of the seven exercise phases owns one muted hue (all ≥4.5:1 with white
text in light, luminous on dark). Used for phase badges, exercise accents
and progress fills — colour + icon + label always travel together.

| Phase | Light | Icon (lucide) |
| --- | --- | --- |
| guided | `#177e76` teal | Compass |
| independent | `#6f5493` plum | Footprints |
| speaking | `#b34f47` coral | Mic |
| listening | `#96661a` amber | Headphones |
| reading | `#a65a32` terracotta | BookOpen |
| writing | `#2f7f4c` grove | PenLine |
| assessment | `#3d5a66` slate | ClipboardCheck |

### Charts

`chart-1..6` = teal, grove, sun, coral, plum, slate (`CHART_PALETTE` in
`src/lib/ds/tokens.ts`). Recharts theming lives in `ds/charts.tsx`.

### Rules

1. **Never hardcode hex values** in components — token utilities only. New
   colours enter through `globals.css` + `tokens.ts` (the test suite
   enforces the sync).
2. Colour never carries meaning alone — pair with icon and text.
3. Both themes are first-class; check every surface in light **and** dark.
4. No indigo/blue accents (product constraint); the primary is teal by
   design.

---

## 3. Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display & headings | **Fraunces** (static 400–700, self-hosted) | 600 default | editorial warmth; `font-display` |
| UI & body | **Plus Jakarta Sans** (variable, self-hosted) | 200–800 (400/500/600 used) | friendly, highly legible; `font-sans` |
| South Asian scripts | **Noto Sans** Devanagari / Bengali / Tamil (self-hosted) | 400, 500–700 | per-glyph fallback via `unicode-range`; also `.font-l1` |
| Code / kbd | system mono stack | — | `font-mono` |

Type scale (semantic utilities: `text-display-xl` … `text-micro`):

| Token | Size / line | Tracking | Use |
| --- | --- | --- | --- |
| `text-display-2xl` | 56 / 1.05 | −2.0% | marketing hero |
| `text-display-xl` | 44 / 1.08 | −1.8% | landing sections |
| `text-display-lg` | 36 / 1.12 | −1.5% | page titles (h1) |
| `text-heading-lg` | 28 / 1.18 | −1.0% | h2 |
| `text-heading-md` | 22 / 1.25 | −0.8% | h3 |
| `text-heading-sm` | 18 / 1.35 | 0 | h4, UI titles (sans) |
| `text-body-lg` | 17 / 1.65 | 0 | reading content (passages, dialogues) |
| `text-body` | 16 / 1.55 | 0 | interface body |
| `text-body-sm` | 14 / 1.5 | 0 | dense UI, cards |
| `text-caption` | 13 / 1.45 | 0 | meta, helper text |
| `text-micro` | 11 / 1.4 | +9% | overlines (`.overline-label`, uppercases) |

Rules: serif for display/h1/h2 and editorial moments; sans for h3+ and all
UI. Reading content caps at `max-w-2xl` (672px). Numbers that matter get
`tabular-nums`. Indic scripts: never uppercase or letter-space; extra
line-height for stacked diacritics (`:lang()` rules in globals.css).
Body text never below 13px.

---

## 4. Space, radius, elevation

- **Spacing:** 4px grid. Cards `p-5`/`p-6`; section gaps `space-y-8`;
  tight groups `gap-2`/`gap-3`; page padding `px-4 sm:px-6`.
- **Radius:** `sm` 12px (inputs, chips interior) · `md` 14px (buttons) ·
  `lg` 16px (default) · `xl` 20px (cards, dialogs) · `2xl` 24px · `full`
  (pills, avatars).
- **Shadows:** warm ink-tinted, two-layer, never coloured, never on text —
  `xs → xl` (`--shadow-*`). Depth also comes from borders (`--line`).
- **Z-index:** dropdown 30 · sticky 40 · overlay 50 · modal 60 · toast 70
  (`--z-*`).
- **Breakpoints:** `sm` 640 · `md` 768 · `lg` 1024 (sidebar appears, bottom
  nav hides) · `xl` 1280 (lesson vocabulary rail appears) · `2xl` 1536.

---

## 5. Motion

Durations: `fast` 150ms · `base` 200ms · `slow` 300ms · `slower` 450ms.
Easings: `ease-out-quint` (enter), `ease-out-expo` (large surfaces),
`ease-in-out-soft`. Springs: gentle (feedback) and snappy (press) — see
`src/lib/ds/motion.ts` for the shared variants (`enterExit`,
`pageTransition`, `staggerList`, `pressable`, `feedbackPop`, `celebrate`).

Principles: enters rise 8px and settle; exits are fast fades that never
block the next action; hover changes colour/shadow (not layout); press
scales to 0.98; staggers cap at ~6 items. `prefers-reduced-motion`
collapses everything to opacity (global CSS rule + `motion-reduce:`
utilities). Never animate numbers that weren't earned.

---

## 6. Components

Primitives (buttons, inputs, tabs, dialogs, tooltips, dropdowns, tables,
toasts, …) come from **shadcn/ui** and are styled only by tokens. TalkSy
composites live in **`src/components/ds/`** (barrel: `@/components/ds`):

| Component | Purpose | File |
| --- | --- | --- |
| `LogoMark` / `Wordmark` / `LogoLockup` / `LogoLink` | brand assets | `brand.tsx` |
| `LoadingButton` / `IconButton` | pending state; labelled icon actions | `buttons.tsx` |
| `Kbd` / `UserAvatar` | keyboard hints; initials + presence | `primitives.tsx` |
| `Field` / `SearchInput` / `FilterChips` / `SegmentedControl` | labelled forms, search, filters | `forms.tsx` |
| `StatusBadge` / `PhaseBadge` / `DraftBadge` / `LevelChip` | identity & status | `badges.tsx` |
| `SectionHeading` / `InteractiveCard` | editorial headings; hover-lift cards | `cards.tsx` |
| `ProgressBar` / `ProgressRing` / `StepDots` / `DoneRoundel` | progress in every shape | `progress.tsx` |
| `CourseCard` / `LessonCard` | curriculum surfaces | `course-card.tsx`, `lesson-card.tsx` |
| `AnswerFeedback` | correct / incorrect / partial + explanation | `feedback.tsx` |
| `EmptyState` (+ 4 spot illustrations) | honest emptiness with a next step | `empty-state.tsx` |
| `CardSkeleton` / `ListSkeleton` / `StatSkeleton` / `ChartSkeleton` / `PlayerSkeleton` | loading mirrors the real layout | `skeletons.tsx` |
| `AudioPlayer` | TTS: play/stop, speed, replay (Web Speech) | `audio-player.tsx` |
| `MicControl` | recording state machine + honest fallback | `mic-control.tsx` |
| `Sparkline` / `MiniBars` / `DonutStat` / `WeeklyBars` | charts (SVG + themed Recharts) | `charts.tsx` |
| `DataTable` | records with zebra/empty states | `tables.tsx` |
| `notify` | semantic toasts (success/error/info) | `notifications.tsx` |

**Every interactive component ships:** default, hover, focus-visible,
active, disabled, and (where relevant) loading/selected states. Icon-only
controls always carry `aria-label`. Status regions use `role="status"` and
announce politely.

**Feedback patterns**

| Situation | Pattern |
| --- | --- |
| Correct answer | `AnswerFeedback` state=correct (grove, check, explanation) |
| Wrong answer | `AnswerFeedback` state=incorrect + the model answer + retry note |
| Almost | `AnswerFeedback` state=partial (sun) |
| Async action | `LoadingButton` spinner, disabled while pending |
| Page load | skeleton mirroring the real layout |
| Empty | `EmptyState` with spot illustration + next step |
| Action feedback | `notify.*` toast |
| Fatal render | error boundary card with "Try again" / "Go home" |

---

## 7. Application shell

Two chromes on one hash router (ADR-3, single Next.js route `/`):

- **Marketing chrome** (`Header`/`Footer`): landing, auth, `#/design`, and
  the curriculum preview for signed-out visitors.
- **App chrome** (signed-in learning surfaces): collapsible left sidebar
  (264px ↔ 76px rail, persisted in localStorage, tooltips when collapsed),
  sticky 60px topbar (search trigger, XP chip, theme toggle, account menu),
  content column. Below `lg`: compact topbar + navigation drawer (Sheet)
  and a bottom bar with the four primary destinations (44px+ targets,
  safe-area aware). **⌘K / Ctrl+K** opens the command palette (quick
  actions + full lesson search). Lesson screens add a **contextual right
  rail** at `xl+` — lesson facts and the vocabulary list with per-word
  audio.

Layout constants live in `LAYOUT` (`src/lib/ds/tokens.ts`). Content column
`max-w-6xl`; reading surfaces `max-w-2xl`.

---

## 8. Accessibility standards

- Semantic landmarks (`header`, `nav`, `main`, `aside`, `footer`); one `h1`
  per view.
- Focus is always visible: 2px brand ring, 2px offset (`:focus-visible`
  global rule). Dialogs trap focus (Radix).
- Keyboard: full tab order, `⌘K` palette, `Esc` closes, skip-link ready.
- Contrast: AA minimum for all text pairs, AAA for body ink — **enforced in
  `tests/design-system.test.ts` for both themes**, including the seven
  phase colours.
- `prefers-reduced-motion` collapses all animation; touch targets ≥44px on
  mobile; language attributes (`lang="hi/bn/ta"`) on L1 content.

---

## 9. Do / Don't

- **Do** reach for a DS component before building new UI; extend the DS in
  `src/components/ds/` when a pattern repeats.
- **Do** check both themes and the `#/design` page when touching tokens.
- **Don't** introduce decorative gradients, glassmorphism, drop shadows on
  text, or new accent colours.
- **Don't** use emoji as UI icons (spot illustrations and lucide only).
- **Don't** hand-roll primitives shadcn already provides.
- **Don't** ship a colour change without its contrast-gate update.
