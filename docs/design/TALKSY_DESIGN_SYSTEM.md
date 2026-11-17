# TalkSy Design System

> **Version 1.0 — Premium International EdTech** · Implemented in `src/app/globals.css`, `src/app/layout.tsx` and the shared component layer.
> Companion documents: [`REFERENCE_AUDIT.md`](REFERENCE_AUDIT.md) · [`REDESIGN_STRATEGY.md`](REDESIGN_STRATEGY.md) · [`UX_IMPROVEMENT_BACKLOG.md`](UX_IMPROVEMENT_BACKLOG.md)
> Verification evidence: [`assets/system/`](assets/system/) (17 screenshots, light + dark, desktop + mobile) · `scripts/contrast-audit.ts` (24/24 pairs pass WCAG AA in both themes) · 502 unit tests green.

---

## 1. Brand identity

| Element | Value |
|---|---|
| Product name | **TalkSy** (unchanged) |
| Slogan | **Learn. Practice. Speak. Excel.** |
| Primary message | **From your first English word to confident communication.** |
| Logo | Preserved: graduation-cap mark in a navy rounded tile + "Talk**Sy**" wordmark (Sy in brand blue). See `TalkSyLogo` in `src/app/page.tsx`. |
| Personality | Confidence · Learning · Intelligence · Progress · Communication · Approachability · Professional quality |
| Voice | Warm, honest, precise — never salesy, never guarantees outcomes |

The brand expresses "a warm, well-lit study room": calm navy surfaces, one luminous blue lamp, progress visible on the wall.

## 2. Colour system

### 2.1 Brand primitives (pinned hex — do not re-derive)

| Token | Value | Role |
|---|---|---|
| `--brand-navy` | `#0B1F46` | Ink & primary actions (light), deep surface anchor |
| `--brand-blue` | `#1E88E5` | Interactive accent, focus, links, gradients |
| `--brand-cyan` | `#06B6D4` | Fresh accent, gradient stop, listening skill |
| `--brand-orange` | `#FF8A00` | Energy accent (decorative), speaking skill family |
| `--brand-gold` | `#FFC247` | Achievement accent, exam division kinship, on-navy highlights |
| `--brand-indigo` / `--brand-indigo-soft` | `#4F46E5` / `#818CF8` | Gradient midpoints |
| `--brand-violet` / `--brand-violet-soft` | `#8B5CF6` / `#C4B5FD` | Gradient endpoints, writing skill family |

### 2.2 Gradient system (restrained)

| Token | Definition | Use |
|---|---|---|
| `--gradient-brand` | `135° #1E88E5 → #4F46E5 → #8B5CF6` | Signature blue-indigo-violet; feature surfaces, animated borders |
| `--gradient-deep` | `135° #0B1F46 → #1668C4` | Navy-to-blue hero panels (AI Tutor section) |
| `--gradient-fresh` | `135° #06B6D4 → #1E88E5` | Cyan-to-blue accents |
| `--gradient-warm` | `135° #FF8A00 → #FFC247` | Achievement/gold moments |
| `--gradient-text` | `120° #1668C4 → #4F46E5 → #7C3AED` | **Text-safe** variant — every stop ≥ 4.5:1 on white; the only gradient allowed on text, display headings only |

Rule: gradients appear on **at most one hero/feature surface per view**. Body text, buttons and cards stay solid.

### 2.3 Light theme (default)

| Category | Token | Value | Notes |
|---|---|---|---|
| Background | `--background` | `#FAFAF8` | Warm paper — readable neutral for long study sessions |
| Foreground | `--foreground` | `#1B2540` | Navy ink, 14.5:1 on background |
| Card / Popover | `--card` / `--popover` | `#FFFFFF` | Pure white surfaces on warm paper |
| Primary | `--primary` / `-foreground` | `#0B1F46` / `#FFFFFF` | Navy buttons & links (16.2:1) |
| Secondary | `--secondary` / `-foreground` | `#EDF1F8` / `#1B3A6B` | Cool blue-gray chips, hover surfaces |
| Muted | `--muted` / `--muted-foreground` | `#F1F2F5` / `#5A6274` | Quiet text 5.9:1 |
| Accent | `--accent` / `-foreground` | `#E8F0FB` / `#14376B` | Light-blue hover/accent surface |
| Border / Input | `--border` / `--input` | `#E5E7EC` / `#D9DDE5` | Hairline structure |
| Ring | `--ring` | `#1E88E5` | Brand-blue focus ring (3.5:1 UI) |
| Destructive | `--destructive` / `-foreground` | `#DC2626` / `#FFFFFF` | Errors, destructive actions |

### 2.4 Dark theme

| Category | Token | Value | Notes |
|---|---|---|---|
| Background | `--background` | `#0A1526` | Deep navy canvas |
| Foreground | `--foreground` | `#E9EEF8` | Blue-tinted white, 15.7:1 |
| Card / Popover | `--card` / `--popover` | `#101E38` / `#142442` | Layered navy surfaces |
| Primary | `--primary` / `-foreground` | `#4D9FEA` / `#06122A` | **Luminous blue + deep-navy text** — solves the two-role problem: as text 5.9–6.5:1 on every surface, as a button 6.6:1 |
| Secondary | `--secondary` / `-foreground` | `#1B2C4E` / `#DCE6F7` | Elevated navy chip |
| Muted | `--muted` / `--muted-foreground` | `#18263F` / `#9AA8C3` | 6.9:1 on card |
| Accent | `--accent` / `-foreground` | `#16294A` / `#D7E6FB` | Luminous hover surface |
| Border / Input | `--border` / `--input` | `white 10%` / `white 14%` | Translucent hairlines |
| Ring | `--ring` | `#4D9FEA` | Matches primary |

### 2.5 Semantic status (both themes, AA as text on cards)

| Status | Light | Dark | Use |
|---|---|---|---|
| `--success` / `-foreground` | `#15803D` / white | `#4ADE80` / `#052E12` | Completed, published, verified |
| `--warning` / `-foreground` | `#B45309` / white | `#FBBF24` / `#3B2A05` | Locked, in-review, needs attention |
| `--info` / `-foreground` | `#0369A1` / white | `#38BDF8` / `#082F49` | Informational, approved |
| `--correct` / `-foreground` | `#15803D` / white | `#4ADE80` / `#052E12` | Grading: correct answers |
| `--incorrect` / `-foreground` | `#B91C1C` / white | `#F87171` / `#2B0808` | Grading: wrong answers |

Pattern: **tinted chip** = `bg-success/10 text-success`; **solid badge** = `bg-success text-success-foreground`. Difficulty ramp: easy `success` → medium `warning` → hard `incorrect` → challenge `destructive`.

### 2.6 Skill palette (one hue per skill, everywhere)

| Skill | Light | Dark | Family |
|---|---|---|---|
| `--skill-reading` | `#1668C4` | `#6FB3F2` | Brand blue |
| `--skill-listening` | `#0E7490` | `#22D3EE` | Cyan |
| `--skill-speaking` | `#C2410C` | `#FB923C` | Warm orange |
| `--skill-writing` | `#7C3AED` | `#A78BFA` | Violet |
| `--skill-vocabulary` | `#4F46E5` | `#818CF8` | Indigo |
| `--skill-grammar` | `#A16207` | `#FCD34D` | Gold |

### 2.7 Grammatical role palette (Grammar School / Sentence Lab)

Content roles get hue; **function words are deliberately neutral** (they recede — mirroring the linguistic content/function distinction):

| Role | Light / Dark |
|---|---|
| subject / verb / object / complement / modifier / auxiliary | `--role-subject` `#1668C4/#6FB3F2` · `--role-verb` `#7C3AED/#A78BFA` · `--role-object` `#15803D/#4ADE80` · `--role-complement` `#4F46E5/#818CF8` · `--role-modifier` `#C2410C/#FB923C` · `--role-auxiliary` `#A16207/#FCD34D` |
| negation / question-word | `--role-negation` `#B91C1C/#F87171` · `--role-question` `#0E7490/#22D3EE` |
| determiner / preposition / conjunction / punctuation | neutral `muted` tokens |

### 2.8 Accent budget (the restraint rule)

Colour appears in **pills, dots, icon tiles and glows — never as large fills**. Per view: one primary hue (brand blue/navy) + semantic pills + skill tints. If a screen needs more than three hue families to explain itself, redesign the screen.

## 3. Themes

| | Light (default) | Dark |
|---|---|---|
| Canvas | Warm paper `#FAFAF8` | Deep navy `#0A1526` |
| Surfaces | White cards, blue-gray chips | Layered navy, translucent hairlines |
| Primary action | Navy `#0B1F46` + white | Luminous blue `#4D9FEA` + deep navy |
| Highlights | Blue links, skill tints | Luminous blues/violets, gold on navy |
| Shadows | Navy-tinted elevation | Near-black depth + colored glows |

Implementation: `next-themes` `ThemeProvider` (class strategy, light default, system-aware) mounted in `layout.tsx`; toggle in the header (`ThemeToggle`). All tokens flip automatically — **components never need `dark:` pairs for token-based colors**.

## 4. Typography

| Role | Font | Weight/size | Class |
|---|---|---|---|
| Display (landing hero) | Poppins | 700 · 52px · -0.02em | `text-display` |
| Page titles (H1) | Poppins | 700 · 30px · tracking-tight | `text-3xl font-bold` (auto Poppins via base layer) |
| Section headings (H2) | Poppins | 600–700 · 20–24px | `text-xl/2xl font-semibold` |
| Card titles (H3) | Poppins | 600 · 16px | `text-base font-semibold` |
| Body & UI | Inter | 400–500 · 14–15px | `text-sm` / `text-[15px]` |
| Small instructional | Inter | 500 · 12–13px | `text-xs/text-[13px]` |
| Captions / meta | Inter | 500 · 12px · `tabular-nums` | `text-xs tabular-nums` |
| Eyebrow | Inter | 600 · 11–12px · uppercase · 0.08em | `text-xs font-semibold uppercase tracking-wide text-primary` |
| Phonetic / linguistic data | Geist Mono | 400–600 · 12–13px | `font-mono` (IPA, structures, timers, codes) |

Loaded via `next/font/google` (`Inter`, `Poppins` 500–800, `Geist_Mono`), self-hosted at build, `display: swap`. Headings get Poppins automatically from the base layer; use `font-heading` explicitly when a non-heading element needs it.

Rules: one eyebrow recipe (above) · body text never below 12px · long-form reading measure ≤ 66ch (`--measure`) · numbers in data contexts always `tabular-nums`.

## 5. Design tokens

All tokens live in `src/app/globals.css` and are exposed as Tailwind utilities through the `@theme inline` mapping (`--color-success` → `bg-success`/`text-success`/`border-success`, `--shadow-glow-blue` → `shadow-glow-blue`, `--font-heading` → `font-heading`, …).

| Category | Tokens |
|---|---|
| **Spacing** | Tailwind 0.25rem scale; semantic rhythm: view header `py-8`, sections `gap-8`, landing `py-16/24`, cards `p-5`, rows `p-4`, lists `gap-2` |
| **Radius** | `--radius: 0.75rem` base → controls `rounded-lg`, cards `rounded-xl`, feature panels `rounded-2xl`, pills `rounded-full` |
| **Borders** | hairline `border` (1px `--border`); emphasis via `border-primary/25`, status via `border-success/30` etc. |
| **Shadows** | `--shadow-xs sm md lg xl 2xl` (navy-tinted light / near-black dark) |
| **Elevation glows** | `--shadow-glow-blue` · `--shadow-glow-violet` · `--shadow-glow-gold` — accent moments only |
| **Transitions** | `--duration-fast 150ms` · `--duration-base 200ms` · `--duration-slow 320ms` |
| **Easing** | `--ease-out cubic-bezier(0.22,1,0.36,1)` · `--ease-spring cubic-bezier(0.34,1.56,0.64,1)` |
| **Breakpoints** | `sm 640` · `md 768` · `lg 1024` · `xl 1280` · `2xl 1536` (px) |
| **Layout widths** | `--container-page 72rem` · `--container-narrow 64rem` · `--container-reading 56rem` · `--container-text 42rem` · `--measure 66ch` |
| **Typography** | `--font-inter` · `--font-poppins` · `--font-geist-mono` · `--text-display` |
| **Colour** | brand 9 · theme 40 · semantic 10 · skill 12 · role 16 · chart 10 (§2) |

## 6. Signature visual effects

A restrained, reusable collection (classes in `@layer components`). **Interaction, motion and the card library live in the companion [`TALKSY_MOTION_SYSTEM.md`](TALKSY_MOTION_SYSTEM.md) (`src/lib/motion.ts` + `src/components/motion.tsx` + `src/components/ui/cards.tsx`).**

| Class | Effect | Restraint rule |
|---|---|---|
| `.ambient-glow` | Soft blue/violet/cyan radial wash behind a hero | **One per page** (hero only) |
| `.text-gradient` | Blue→indigo→violet gradient text | Display headings ≥ `text-3xl` only |
| `.bg-gradient-brand/deep/fresh/warm` | Gradient surfaces | One feature surface per view |
| `.gradient-border` | Static gradient border (padding-box trick) | Feature cards |
| `.gradient-border-animated` | Rotating conic gradient border (8s) | **One element per view** (landing tutor mockup) |
| `.mesh-subtle` | 28px two-tone dot mesh | Quiet section differentiation |
| `.surface-glass` | 78% card + 14px backdrop blur | Over ambient/mesh backdrops or nav overlays only |
| `.lift-hover` | -2px translate + shadow/border transition (200ms ease-out) | Standard interactive card hover — superseded by `.card-interactive` (adds press) in the motion system |
| `.progress-shimmer` | Sweeping highlight on busy progress bars | Determinate busy states |
| `.section-enter` | 10px fade-rise on mount (320ms) | View roots, once per mount |
| `.pulse-soft` | 2.4s opacity pulse | Live/status dots only |

All effects are disabled under `prefers-reduced-motion` (global rule). Nothing blinks, nothing loops faster than 2s except the 8s border rotation.

## 7. Component states

Every interactive component supports the full state matrix:

| State | Mechanism |
|---|---|
| Default | Token styles (above) |
| Hover | `.lift-hover` for cards; `hover:bg-accent` for rows/items; `hover:border-primary/40` for selectable cards |
| Focus / Focus-visible | 2px `--ring` outline, 2px offset (base layer `:focus-visible` rule) — visible in both themes |
| Active/pressed | `active:scale-[0.98]` where tactile (buttons) |
| Disabled | `disabled:opacity-60` + `cursor-not-allowed`; never below 60% opacity |
| Loading | `Skeleton` grids for content, `Loader2` spinners in buttons, `.progress-shimmer` for determinate bars |
| Success | `--correct`/`--success` tokens: tinted panel `bg-correct/5 border-correct/40` + `CheckCircle2` |
| Error | `--incorrect`/`--destructive` tokens: tinted panel + `XCircle` + recovery action |

Grading semantics are now unified: **correct = `--correct` green, wrong = `--incorrect` red** — identical in lessons, reading, listening, exams (was 4 different systems; see migration status §9).

## 8. Responsive design

| Breakpoint | Layout |
|---|---|
| ≥1280 (xl) | Full nav + 3-col feature grids, 2-col hero (text + product panel) |
| 1024–1279 (lg) | Nav condenses; feature grids 2–3 col; lesson aside becomes sticky column |
| 768–1023 (md) | 2-col grids; nav → hamburger Sheet; lesson aside → Sheet drawer |
| 640–767 (sm) | Stacked cards; hero mockup below text; floating chips hidden |
| <640 | Single column; reading measure full-width with `px-4`; touch targets ≥44px |

Reading comfort on small screens: body ≥14px, `--measure` respected in reader views, `scroll-margin-top` keeps anchored content clear of the sticky header, horizontal scroll confined to intentional strips (tab bars) — **no accidental horizontal overflow** (verified at 390px).

## 9. Implementation status

**Live in the application (this release):**
- Complete token system in `globals.css` (both themes, all categories above) — every token-based component restyles automatically.
- Poppins + Inter + Geist Mono via `next/font`; ThemeProvider + header `ThemeToggle`; metadata with the new slogan.
- App shell: logo (navy tile, blue "Sy"), branded active nav states, footer slogan.
- Landing page rebuilt on the system: ambient-glow hero, gradient display heading, CSS tutor-chat product panel with animated gradient border, skill-tinted feature tiles, deep-gradient AI Tutor panel with mode chips.
- Semantic migration (from the audit's flagged list): course/CMS completed badges, lesson difficulty ramp, grading correct/incorrect, progress status/trend/chart colors, grammar role palette (11 raw hues → 8 role tokens + neutral function words), admin workflow/role/status badges, challenge/assessment verdict panels, tense helping-verb chips, media-block pyramid + video gradients, speaking figure plate.
- `scripts/contrast-audit.ts` rewritten for both themes: **24/24 pairs pass WCAG AA**.

**Deliberately unchanged:** the Exam Academy's navy-gold dark sub-brand (already harmonious with the new palette; tokenization is backlog item P1-11).

**Remaining migration (tracked in [`UX_IMPROVEMENT_BACKLOG.md`](UX_IMPROVEMENT_BACKLOG.md)):** residual raw hues in lower-traffic surfaces (listening/writing pass-fail panels, vocab flashcard grade buttons, exam division internals) — P0-2 tail; `PageHeader` extraction — P1-1; typography scale enforcement — P1-2.

**Motion & interaction release (see [`TALKSY_MOTION_SYSTEM.md`](TALKSY_MOTION_SYSTEM.md)):** Framer Motion 12 layer with reduced-motion config; Practice mega menu fixing the nav-overflow audit finding (W1/P0-1); nine-variant card library (`ui/cards.tsx`); standardised skeletons, search input, empty states, notification rows and progress rings; micro-interactions for exercise success, achievement unlocks, search results, audio playback and recording.

**How to consume:** never hardcode hex or Tailwind palette hues in components. Use `bg-primary`, `text-success`, `bg-skill-reading/10`, `border-role-verb/30`, `shadow-glow-blue`, `font-heading`, `.lift-hover`, `.text-gradient` … — if a value you need is missing, add a token here first, then use its utility.
