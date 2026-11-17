#!/bin/bash
# VLM analysis — authenticated learning views.
set -u
analyze() {
  z-ai vision -p "$2" -i "$1" -o "$3" 2>/dev/null > /dev/null
  python3 -c "
import json
with open('$3') as f: d = json.load(f)
print(d['choices'][0]['message']['content'])"
}

echo "=========== DASHBOARD (logged in) ==========="
analyze /tmp/render/talksy-dashboard.png "Audit this logged-in learner dashboard. Check: hero/stats, continue-learning card, path stepper, skill tiles, activity feed, recommendations, spacing, consistency, anything broken/clipped/misaligned. Rate 1-10. Concise." /tmp/render/a-dashboard2.json

echo "=========== LESSON PLAYER (logged in) ==========="
analyze /tmp/render/talksy-lesson-player.png "Audit this lesson player. Check: header/meta, content blocks, typography, exercises, section navigation, progress, Ask-tutor affordance, anything broken/clipped. Rate 1-10. Concise." /tmp/render/a-lesson2.json

echo "=========== TUTOR (logged in) ==========="
analyze /tmp/render/talksy-tutor.png "Audit this AI tutor hub. Check: mode cards/grid, For-you recommendations panel, preferences, conversation list, visual hierarchy, anything broken/clipped/misaligned. Rate 1-10. Concise." /tmp/render/a-tutor2.json

echo "=========== PRACTICE (logged in) ==========="
analyze /tmp/render/talksy-practice.png "Audit this practice hub. Check: session type cards, adaptive difficulty card, history, tabs, anything broken/clipped/misaligned. Rate 1-10. Concise." /tmp/render/a-practice2.json

echo "=========== PROGRESS (logged in) ==========="
analyze /tmp/render/talksy-progress.png "Audit this progress analytics page. Check: charts/stat cards, skill breakdowns, milestones, visual hierarchy, anything broken/clipped/misaligned. Rate 1-10. Concise." /tmp/render/a-progress2.json
