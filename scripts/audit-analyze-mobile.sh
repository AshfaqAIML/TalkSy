#!/bin/bash
# VLM responsive audit.
set -u
analyze() {
  z-ai vision -p "$2" -i "$1" -o "$3" 2>/dev/null > /dev/null
  python3 -c "
import json
with open('$3') as f: d = json.load(f)
print(d['choices'][0]['message']['content'])"
}

echo "=========== MOBILE HOME 390 ==========="
analyze /tmp/render/mob-home.png "Mobile (390px) audit of this homepage: 1) horizontal overflow? 2) text clipping? 3) broken grids? 4) overlapping components? 5) unusable controls? 6) is the nav accessible (hamburger)? Answer each briefly. VERDICT: PASS or FAIL." /tmp/render/a-mob-home.json

echo "=========== MOBILE DASHBOARD 390 ==========="
analyze /tmp/render/mob-dashboard.png "Mobile (390px) audit of this learner dashboard: horizontal overflow, text clipping, broken grids, overlapping components, unusable controls? Answer briefly. VERDICT: PASS or FAIL." /tmp/render/a-mob-dash.json

echo "=========== MOBILE COURSES 390 ==========="
analyze /tmp/render/mob-courses.png "Mobile (390px) audit of this course catalogue: horizontal overflow, text clipping, broken grids, overlapping components, unusable filter controls? Answer briefly. VERDICT: PASS or FAIL." /tmp/render/a-mob-courses.json

echo "=========== MOBILE LESSON 390 ==========="
analyze /tmp/render/mob-lesson.png "Mobile (390px) audit of this lesson player: horizontal overflow, text clipping, broken layouts, overlapping components, readable typography? Answer briefly. VERDICT: PASS or FAIL." /tmp/render/a-mob-lesson.json

echo "=========== MOBILE TUTOR 390 ==========="
analyze /tmp/render/mob-tutor.png "Mobile (390px) audit of this AI tutor hub: horizontal overflow, text clipping, broken grids, overlapping components, unusable controls? Answer briefly. VERDICT: PASS or FAIL." /tmp/render/a-mob-tutor.json

echo "=========== MOBILE VOCAB 390 ==========="
analyze /tmp/render/mob-vocab.png "Mobile (390px) audit of this vocabulary page: horizontal overflow, text clipping, tab overflow handling, broken grids? Answer briefly. VERDICT: PASS or FAIL." /tmp/render/a-mob-vocab.json

echo "=========== 360px HOME ==========="
analyze /tmp/render/s360-home.png "Small mobile (360px) audit: horizontal overflow, text clipping, cramped controls? VERDICT: PASS or FAIL + issues." /tmp/render/a-360-home.json

echo "=========== 360px DASHBOARD ==========="
analyze /tmp/render/s360-dashboard.png "Small mobile (360px) audit: horizontal overflow, text clipping, cramped controls? VERDICT: PASS or FAIL + issues." /tmp/render/a-360-dash.json

echo "=========== 360px LESSON ==========="
analyze /tmp/render/s360-lesson.png "Small mobile (360px) audit of lesson player: horizontal overflow, text clipping? VERDICT: PASS or FAIL + issues." /tmp/render/a-360-lesson.json

echo "=========== TABLET 768 COURSES ==========="
analyze /tmp/render/tab-courses.png "Tablet (768px) audit of course catalogue: layout balance, overflow, filter bar usability? VERDICT: PASS or FAIL + issues." /tmp/render/a-tab-courses.json

echo "=========== TABLET 768 DASHBOARD ==========="
analyze /tmp/render/tab-dashboard.png "Tablet (768px) audit of dashboard: layout balance, overflow? VERDICT: PASS or FAIL + issues." /tmp/render/a-tab-dash.json
