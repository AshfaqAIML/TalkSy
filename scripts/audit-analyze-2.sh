#!/bin/bash
# Batch VLM analysis — learning core + tools.
set -u
analyze() {
  z-ai vision -p "$2" -i "$1" -o "$3" 2>/dev/null > /dev/null
  python3 -c "
import json
with open('$3') as f: d = json.load(f)
print(d['choices'][0]['message']['content'])"
}

echo "=========== DASHBOARD ==========="
analyze /tmp/render/talksy-dashboard.png "Audit this learner dashboard of an English learning platform. Check: hero/stat cards, continue-learning card, learning path stepper, skill tiles, activity feed, visual consistency, spacing, anything broken/clipped/misaligned or empty-looking. Rate design polish 1-10. Be specific and concise." /tmp/render/a-dashboard.json

echo "=========== LESSON PLAYER ==========="
analyze /tmp/render/talksy-lesson-player.png "Audit this lesson player page. Check: lesson header, content block rendering, typography, exercise/interactive elements, navigation between sections, progress indicator, anything broken/clipped/misaligned. Rate design polish 1-10. Be specific and concise." /tmp/render/a-lesson.json

echo "=========== GRAMMAR SCHOOL ==========="
analyze /tmp/render/talksy-grammar.png "Audit this grammar school hub page. Check: module cards, navigation, visual hierarchy, badges, anything broken/clipped/misaligned. Rate design polish 1-10. Be specific and concise." /tmp/render/a-grammar.json

echo "=========== SENTENCE LAB ==========="
analyze /tmp/render/talksy-lab.png "Audit this sentence builder lab page. Check: activity cards, tabs, interactive affordances, visual hierarchy, anything broken/clipped/misaligned. Rate design polish 1-10. Be specific and concise." /tmp/render/a-lab.json

echo "=========== VOCABULARY ==========="
analyze /tmp/render/talksy-vocabulary.png "Audit this vocabulary builder page. Check: word cards, stats, tabs, search, visual hierarchy, anything broken/clipped/misaligned. Rate design polish 1-10. Be specific and concise." /tmp/render/a-vocab.json
