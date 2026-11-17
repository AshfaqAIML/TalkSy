#!/bin/bash
# Batch VLM analysis of audit screenshots.
set -u
analyze() { # img prompt out
  z-ai vision -p "$2" -i "$1" -o "$3" 2>/dev/null > /dev/null
  python3 -c "
import json
with open('$3') as f: d = json.load(f)
print(d['choices'][0]['message']['content'])"
}

echo "=========== REGISTER ==========="
analyze /tmp/render/talksy-register.png "Audit this registration page of an English learning platform. Check: form labels, input styling, button consistency, error-prone patterns, spacing rhythm, visual hierarchy, anything broken/clipped/misaligned. Rate design polish 1-10. Be specific and concise." /tmp/render/a-register.json

echo "=========== COURSES CATALOGUE ==========="
analyze /tmp/render/talksy-courses.png "Audit this course catalogue page. Check: card grid alignment, filter bar usability, level badges, hover affordances visible, spacing, typography consistency, anything broken/clipped/overflowing. Rate design polish 1-10. Be specific and concise." /tmp/render/a-courses.json

echo "=========== COURSE DETAIL ==========="
analyze /tmp/render/talksy-course-detail.png "Audit this course detail page. Check: hero/header area, chapter list organization, progress indicators, metadata (duration, lesson count), CTA buttons, spacing, anything broken/clipped. Rate design polish 1-10. Be specific and concise." /tmp/render/a-course-detail.json

echo "=========== LEARNING PATHS ==========="
analyze /tmp/render/talksy-paths.png "Audit this learning paths page. Check: path card designs, step visualization, progress display, visual hierarchy, anything broken/clipped/misaligned. Rate design polish 1-10. Be specific and concise." /tmp/render/a-paths.json
