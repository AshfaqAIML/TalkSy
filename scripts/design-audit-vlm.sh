#!/usr/bin/env bash
# VLM design analysis batches for the TalkSy redesign audit
set -u
J=/tmp/audit-jpg
OUT=/tmp/audit-vlm
mkdir -p "$OUT"

run() { # run <name> <prompt> <images...>
  local name="$1"; local prompt="$2"; shift 2
  local args=()
  for img in "$@"; do args+=(-i "$img"); done
  z-ai vision -p "$prompt" "${args[@]}" -o "$OUT/$name.json" >/dev/null 2>&1 || echo "FAIL $name"
  echo "== $name done"
}

REF_PROMPT='You are a principal UI/UX designer auditing a reference website (DevPath, a developer-education platform) to extract its design language. These are full-page screenshots at 1440px desktop width (some are cropped segments). Analyze and report in structured markdown:
1. FIRST IMPRESSION: describe the overall visual mood and polish (dark/light, depth, density).
2. COLOR: background layers (page/surface/card), text colors, accent colors (name approximate hex values), how accents are applied (chips, badges, buttons, icons, glows).
3. GRADIENTS & GLOW: where gradients/glows appear, their direction, opacity, purpose.
4. TYPOGRAPHY: heading scale (approx px), weights, letter-spacing, any distinctive type treatments, body text size/color.
5. CARDS: anatomy (image? icon? title? metadata row? progress?), border radius, borders, shadows, hover affordances.
6. NAVIGATION & LAYOUT: header anatomy, hero structure, section rhythm.
7. CONTENT DISCOVERY: how content is organized (categories, counts, filters, trending rows, saved items).
8. DETAILS that make it feel premium: micro-interactions, badges, separators, icon usage, empty space discipline.
Be specific and concrete; mention approximate values. This is inspiration research, not criticism.'

TS_PROMPT='You are a principal UI/UX designer performing a critical visual audit of TalkSy, an English-learning web app (light theme, green accent). These are full-page desktop screenshots (1440px). Identify CONCRETE visual weaknesses with locations. For each image report in structured markdown:
1. FIRST IMPRESSION: mood, polish level (1-10), does it feel like a finished product?
2. WEAKNESSES: poor hierarchy, weak typography, generic/uniform cards, excessive or inconsistent spacing, empty/wasted space, low-contrast or muddy colors, inconsistent radii/borders/shadows, missing hover affordances, visual noise, anything unfinished.
3. STRENGTHS: what already works well.
4. QUICK WINS: the 2-3 highest-impact visual improvements for this screen.
Be blunt and specific. Reference visible sections by name.'

case "${1:-all}" in
ref1)
  run ref-landing "$REF_PROMPT" $J/reference/01-home-1440.jpg $J/reference/10-home-light-1440.jpg $J/reference/09-search-modal-1440.jpg $J/reference/15-footer-1440.jpg ;;
ref2)
  run ref-catalogue "$REF_PROMPT" $J/reference/04-courses-1440.jpg $J/reference/08-course-detail-1440.jpg $J/reference/02-masterclass-1440.jpg $J/reference/03-roadmaps-1440.jpg ;;
ref3)
  run ref-responsive "$REF_PROMPT" $J/reference/11-home-1280.jpg $J/reference/12-home-768.jpg $J/reference/13-home-390-p1.jpg $J/reference/13-home-390-p2.jpg $J/reference/14-mobile-nav-390.jpg $J/reference/07-library-1440.jpg ;;
ts1)
  run ts-main "$TS_PROMPT" $J/talksy/01-home-1440.jpg $J/talksy/02-library-1440.jpg $J/talksy/03-courses-1440.jpg $J/talksy/12-login-1440.jpg ;;
ts2)
  run ts-hubs "$TS_PROMPT" $J/talksy/04-grammar-1440.jpg $J/talksy/05-vocabulary-1440.jpg $J/talksy/06-reading-1440.jpg $J/talksy/10-tutor-1440.jpg ;;
ts3)
  run ts-learn "$TS_PROMPT" $J/talksy/17-lesson-1440.jpg $J/talksy/13-progress-1440.jpg $J/talksy/11-exam-academy-1440.jpg $J/talksy/14-exam-dashboard-1440.jpg ;;
ts4)
  run ts-extra "$TS_PROMPT" $J/talksy/16-exam-mocks-1440-p1.jpg $J/talksy/18-admin-1440.jpg $J/talksy/19-home-390-p1.jpg $J/talksy/23-mobile-nav-390.jpg ;;
all)
  echo "run individually: ref1 ref2 ref3 ts1 ts2 ts3 ts4" ;;
esac
