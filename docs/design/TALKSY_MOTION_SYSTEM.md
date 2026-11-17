# TalkSy Motion & Interaction System

> **Version 1.0** — the interaction layer of the [TalkSy Design System](TALKSY_DESIGN_SYSTEM.md).
> Implementation: `src/lib/motion.ts` (tokens & variants) · `src/components/motion.tsx` (reusable components) · the motion-utilities layer of `src/app/globals.css` · `src/components/ui/cards.tsx` (card library).
> Engine: **Framer Motion 12** (already a dependency) for orchestrated/scroll-aware motion; **CSS keyframes** for self-contained loops. 502 tests green.

---

## 1. Motion philosophy

Motion in TalkSy exists to **explain state, direct attention and confirm action** — never to decorate. Five rules:

1. **Animate `transform` and `opacity` only.** No width/height/top/left animations outside the Radix accordion height keyframes (which are height-based by design and cheap, single-element).
2. **Stay in the duration band.** UI feedback 120–240ms, entrances ≤ 360ms, decorative loops ≥ 2s. Nothing loops faster than the 1s equalizer bar (audio-semantic).
3. **One hero moment per view.** A gradient pan, a floating chip set or an animated border — never all three. The rest of the page stays calm.
4. **Reduced motion is a first-class state.** `MotionProvider` mounts `<MotionConfig reducedMotion="user">`, so every Framer variant degrades to an instant state change; the global CSS rule does the same for keyframe classes.
5. **Honesty carries into motion.** Counters animate only real numbers; skeletons match the layout they replace; success bursts fire only on server-verified results.

## 2. Motion tokens

Two halves of one system — JS and CSS values are the same curves.

| Token | JS (`src/lib/motion.ts`) | CSS (`globals.css`) | Use |
|---|---|---|---|
| Duration fast | `motionDurations.fast` 180ms | `--duration-fast` 150ms | Hover, press, colour fades |
| Duration base | `motionDurations.base` 240ms | `--duration-base` 200ms | Entrances, card lifts |
| Duration slow | `motionDurations.slow` 360ms | `--duration-slow` 320ms | Section reveals, route transitions |
| Ease out | `easeOut = [0.22, 1, 0.36, 1]` | `--ease-out` | Everything default |
| Ease spring | `easeSpring = [0.34, 1.56, 0.64, 1]` | `--ease-spring` | Pop moments |
| Spring (FM) | `transitions.spring` (stiffness 420, damping 30) | — | Panel/canvas movement |
| Pop (FM) | `transitions.pop` (stiffness 500, damping 22) | — | Correct-answer check, unlock |
| Stagger step | `STAGGER_STEP` 30ms, capped at 10 items | `.stagger-in` 30ms, capped at 10 | Grids and lists |

Preset transitions: `transitions.fast / base / slow / spring / pop`. Viewport preset: `viewportOnce` (`once: true`, 12% bottom margin) — every scroll reveal uses it, so nothing re-animates on scroll-up.

## 3. Framer Motion layer

**Variants** (`src/lib/motion.ts`): `fadeUp` (default entrance), `fadeIn` (overlays/swaps), `scaleIn` (popovers/badges), `routeEnter` (route content), `staggerContainer(delayChildren?)` + `staggerItem`, `successPop`, `incorrectShake`, `unlockReveal`.

**Components** (`src/components/motion.tsx`):

| Component | Purpose | Typical use |
|---|---|---|
| `MotionProvider` | `<MotionConfig reducedMotion="user">` app-wide | Root layout (mounted) |
| `Reveal` | Fade-rise once on scroll into view | Landing sections |
| `StaggerGroup` + `StaggerItem` | Orchestrated sibling appearance — **mount mode by default** (content is never left invisible in print/PDF/find-in-page); `scroll` mode for below-the-fold decorative groups only | Feature grids, award grids |
| `RouteTransition` | Keyed entrance for hash-route views (8px rise, 240ms) | `page.tsx` main content |
| `Float` | ±6px 6s decorative drift (reduced-motion aware) | Hero proof chips, gradient blobs |
| `SuccessBurst` | Spring-pop check mark | Correct exercise answers |
| `UnlockReveal` | Rise + settle for unlocked achievements | Awards tab |
| `CountUp` | requestAnimationFrame counter over real values | Landing stat tiles |

Route keying rule: the key is `route.name` + primary param (slug/attemptId/id) — so **tab switches inside a view never remount or re-animate**, only real view changes get the entrance. The shell scrolls to top on route-key change only.

## 4. CSS utility layer (globals.css)

| Class | Effect | Restraint |
|---|---|---|
| `.press` | `scale(0.97)` on `:active`, 150ms | Buttons, chips, tiles |
| `.card-interactive` | −2px lift + border/shadow 200ms, press settle | Standard interactive card hover |
| `.stagger-in` | Children rise in, 30ms steps, capped at 10 (set `--stagger-i` per child) | Simple lists without Framer |
| `.flash-success` | Green ring pulse, once | Exercise graded correct |
| `.unlock-glow` | Gold ring settles 900ms | Newly unlocked achievement |
| `.float-y` / `.float-y-slow` | ±6px drift, 6s / 9s | Decorative only |
| `.gradient-pan` | 200% background-position pan, 14s | One feature panel per view |
| `.skeleton-shimmer` | Brand-tinted sweep 2.2s | All skeleton loading |
| `.mic-live` | Recording halo 1.8s (follows `--incorrect`) | Active recording dot |
| `.eq-bar` | Equalizer bar 1s, per-bar `--bar-i` phase offset | Audio "now playing" |
| `@keyframes accordion-down/up` | Radix height animation (280ms/240ms) | Fixes previously dead classes |
| `@keyframes progress-slide` | Indeterminate bar sweep 1.4s | `<Progress indeterminate>` |

All are disabled under `prefers-reduced-motion` by the global rule.

## 5. Component states (the 8-state contract)

| State | Mechanism (updated in this release) |
|---|---|
| Default | Token styles (design system §7) |
| Hover | `.card-interactive` (cards) · `hover:bg-accent` (rows, table rows 150ms) · arrow-slide-in (CTA cards) · icon-tile scale-105 (skill cards) |
| Focus-visible | 2px `--ring` outline, 2px offset (base layer) — unchanged, verified both themes |
| Active/pressed | `.press` scale-0.97 on every Button, chip and card; neutralised when disabled |
| Disabled | `opacity-50` + pointer-events none + **press suppressed** |
| Loading | `Button loading` prop (spinner + `aria-busy`), `Skeleton*` composites, `Progress indeterminate` |
| Success | `--correct` panel + `flash-success` + `SuccessBurst` spring |
| Error | `--incorrect` panel + `incorrectShake` variant (reserved; current views use the tinted panel + retry) |

## 6. Card library (nine standardised experiences)

All in `src/components/ui/cards.tsx` — presentational, token-based, honest metadata only (level, lesson count, estimated time, difficulty, completion, skills; **no fabricated ratings or counts**). Interactive cards are real `<button>` elements.

| Variant | Signature elements | Live usage |
|---|---|---|
| `FeaturedLearningCard` | Deep-gradient panel, gradient-pan, eyebrow chip, meta row, white CTA | Library — "Continue / start your next lesson" |
| `CourseCard` | Icon tile, level badge, meta row (lessons · minutes · learners), progress bar, dual CTA | Courses catalogue |
| `CompactLessonCard` | Status disc (done/active/next), duration + completion, lock reason | Course outline lesson list |
| `SkillCard` | Skill-hue icon tile (scales on hover), eyebrow, arrow slide-in | Home — Grammar/Labs + four skill labs |
| `ProgressCard` | Big tabular number, optional bar/ring, icon tile | Dashboard stat contexts |
| `AiTutorCard` | Deep-gradient signature panel, mode chips, floating blobs | Home — AI Tutor section |
| `RecommendedContentCard` | Reason chip (from the recommender's own kind taxonomy), title, purpose, action | Progress — Recommended for you |
| `AchievementCard` | Gold-gradient medal tile (`unlock-glow` when new), progress or earned date, locked variant | Progress — Awards tab |
| `ResourceCard` | Level badge, meta row, completed/bookmarked/illustrated states | Reading Room text grid |

Metadata atoms — `MetaRow`, `MetaItem` (icon + tabular-nums), `LevelBadge`, `DifficultyBadge` (semantic ramp), `CompletionBadge`, `SkillTag` (skill palette), `CardProgressBar` — are exported for reuse in smaller surfaces.

Other standardised primitives added this release: `SearchInput` (icon, clear button, focus glow — Word Explorer), `EmptyState` (icon tile, honest copy, recovery action), `NotificationItem` (tone-mapped attention rows — Revision queue), `ProgressRing` (animated stroke, 700ms), `SkeletonCard/SkeletonGrid/SkeletonListRow/SkeletonText`.

## 7. Micro-interaction catalogue

| Moment | Mechanism | Where |
|---|---|---|
| Card hover | `.card-interactive` lift + border tint + arrow slide | All card surfaces |
| Button hover/press | Shadow step + `.press` | Global Button |
| Navigation transitions | `RouteTransition` keyed fade-rise + scroll-to-top | App shell |
| Menu opening | Radix `data-state` + tw-animate fade/zoom/slide (dropdown, mega menu, dialog, sheet) | Global |
| Mega menu | Two-column Practice panel with skill-tinted tiles; chevron rotates with `[data-state=open]` | Desktop nav (fixes W1 truncation: 12 flat links → 5–7 top-level) |
| Accordion expansion | Real height keyframes via `--radix-accordion-content-height` | Accordion primitive |
| Progress changes | Bar fill 500ms transform; ring stroke 700ms; goals rings animate on refresh | Progress, Reading, Courses, Awards |
| Exercise success | `flash-success` card pulse + `SuccessBurst` spring + points | ExerciseRunner (server-verified only) |
| Achievement unlocking | Staggered reveal + `unlock-glow` on unseen unlocks + toast | Awards tab |
| Search results | Result count re-animates per query; result grid re-staggers per query/filter/page | Word Explorer |
| Loading states | Shimmer skeleton grids matching final layout (no spinners left in catalogue/library/reading) | Library, Courses, Reading, Progress, Exams |
| Audio playing | 4-bar equalizer, animates only while `status === "playing"` | Listening audio player |
| Recording | `mic-live` halo dot + live level meter | Speaking recorder |
| Staggered appearance | `StaggerGroup` (Framer) or `.stagger-in` (CSS), 30ms steps capped at 10 | Landing grids, awards, catalogues, mobile nav |
| Decorative float | `Float` / `.float-y` on hero chips & gradient blobs (desktop only) | Landing hero, tutor panel |
| Animated gradient | `.gradient-pan` 14s — one panel per view | Featured + tutor cards |

## 8. Performance & accessibility

- **Reduced motion, twice:** `MotionConfig reducedMotion="user"` (JS) + the global CSS `prefers-reduced-motion` kill-switch (keyframes). Verified: entrances become instant states, loops stop, no content is hidden by animation.
- **Print/PDF safety:** scroll-gated entrances force their final state under `@media print` (globals.css); primary content grids use mount-mode stagger so nothing can ever rest at opacity 0.
- **Compositor-only properties** except the two intentional height animations (accordion — single element, 280ms) and SVG stroke-dashoffset transitions.
- **`whileInView` with `once: true`** everywhere — observers detach after first reveal; long lists never re-animate on scroll-back.
- **Stagger cap at 10 items** (both engines) — a 135-word grid resolves no slower than a 6-card grid.
- **No animation on the mobile checklist:** floating chips hidden below `sm`; backdrop blur confined to the sticky header and glass surfaces; equalizer/eq bars are 4 DOM nodes of 3px width.
- **Focus never moves with motion:** focus outlines are drawn by the base layer, not by animated pseudo-elements; `scroll-margin-top` keeps anchored targets clear of the sticky header.
- **Sound-free:** all feedback is visual; toasts remain the only overlay channel.

## 9. How to consume

```tsx
import { Reveal, StaggerGroup, StaggerItem, SuccessBurst } from "@/components/motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
// CSS: className="card-interactive press stagger-in gradient-pan skeleton-shimmer"
```

Rules: never invent durations or easings at the call site — use the tokens. Never add a new looping animation shorter than 1s without a semantic reason. Interactive surfaces get `.press`; interactive cards get `.card-interactive`. Loading replaces content with a `Skeleton*` shape of the same geometry. Success feedback fires only on server-verified results.
