#!/bin/bash
# TalkSy Learning Progression System E2E.
# Covers: honest empty states → goals editing → tab deep links → real
# activity through the product's own APIs → populated analytics dashboard →
# scheduler + awards rendering → mobile + console cleanliness.
BASE="http://127.0.0.1:3000"
AB="agent-browser"
PASS=0
FAIL=0

check() {
  local label="$1"; local got="$2"; local want="$3"
  if echo "$got" | grep -qiF "$want"; then
    echo "PASS: $label"
    PASS=$((PASS+1))
  else
    echo "FAIL: $label — wanted '$want' in:"
    echo "$got" | head -40
    FAIL=$((FAIL+1))
  fi
}

norm() { sed 's/^ *- StaticText "/; s/"$//' | tr '\n' ' ' | tr -s ' '; }

click_text() {
  $AB find text "$1" click 2>&1 | tail -1
}

snap() { $AB snapshot -c 2>&1; }

$AB set viewport 1280 800 >/dev/null 2>&1

echo "=============== 1. FRESH LEARNER: HONEST EMPTY STATES ==============="
TS=$(date +%s)
EMAIL="progress-${TS}@talksy.test"
$AB open "$BASE/#/register" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 1
$AB find label "Your name" fill "Priya Progress" >/dev/null 2>&1
$AB find label "Email" fill "$EMAIL" >/dev/null 2>&1
$AB find label "Password" fill "password123" >/dev/null 2>&1
$AB find role button click --name "Start learning free" >/dev/null 2>&1
sleep 2.5

$AB open "$BASE/#/progress" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
OV=$(snap)
check "progress page heading" "$OV" "My Progress"
check "verified-activity promise" "$OV" "verified activity"
check "learning points tile" "$OV" "Learning points"
check "exercise accuracy tile (no data yet)" "$OV" "no graded answers yet"
check "streak tile" "$OV" "Current streak"
check "non-punitive streak note" "$OV" "never remove"
check "recommendations card" "$OV" "Recommended for you"
check "first recommendation is a next lesson" "$OV" "Start:"
check "recommendation purpose" "$OV" "Why:"
check "milestones section" "$OV" "Milestones"
check "milestone: first 100 words" "$OV" "First 100 Words"
check "milestone: first paragraph" "$OV" "First Paragraph"
check "milestone: first conversation" "$OV" "First Conversation"
check "no certificates yet (honest empty)" "$OV" "No certificates yet"
check "goal rings at zero" "$OV" "Points today"

echo "=============== 2. GOALS EDITOR ==============="
click_text "Edit goals" >/dev/null 2>&1
sleep 1
GOALS=$(snap)
check "goal editor opens" "$GOALS" "Save"
$AB find label "Daily point goal" fill "25" >/dev/null 2>&1
$AB find label "Weekly point goal" fill "120" >/dev/null 2>&1
click_text "Save" >/dev/null 2>&1
sleep 2
SAVED=$(snap)
check "goals saved toast" "$SAVED" "Goals updated"
check "daily ring shows new target" "$SAVED" "/ 25"
# Persisted across navigation:
$AB open "$BASE/#/library" >/dev/null 2>&1
sleep 1.5
$AB open "$BASE/#/progress" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
check "goals persist after reload" "$(snap)" "/ 25"

echo "=============== 3. SKILLS TAB: EMPTY + DEEP LINK ==============="
$AB open "$BASE/#/progress/skills" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
SK=$(snap)
check "skills tab renders (deep link)" "$SK" "Where your practice goes"
check "empty practice mix chart" "$SK" "No practice data yet"
check "vocabulary card" "$SK" "Vocabulary"
check "speaking card" "$SK" "Speaking"
check "not-started label (never 0%)" "$SK" "Not started"
check "speaking caveat shown" "$SK" "not pronunciation grades"
check "writing caveat shown" "$SK" "never averaged"

echo "=============== 4. CHARTS TAB: EMPTY ==============="
$AB open "$BASE/#/progress/activity" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
CH=$(snap)
check "heatmap card" "$CH" "Activity over the last 12 weeks"
check "empty charts honesty" "$CH" "first activity"

echo "=============== 5. REVISION TAB: SCHEDULER EXPLANATION ==============="
$AB open "$BASE/#/progress/revision" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
RV=$(snap)
check "scheduler explains its five factors" "$RV" "previous performance"
check "confidence factor named" "$RV" "self-reported confidence"
check "nothing due for a fresh learner" "$RV" "Nothing due right now"
check "confidence needs a completed lesson" "$RV" "Complete a lesson first"
check "confidence is never a score" "$RV" "never shown as a performance score"

echo "=============== 6. AWARDS TAB: INTEGRITY STATEMENTS ==============="
$AB open "$BASE/#/progress/awards" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
AW=$(snap)
check "awards tab renders" "$AW" "Milestones"
check "verification statements visible" "$AW" "Verified when"
check "no certificates yet" "$AW" "No certificates yet"

echo "=============== 7. REAL ACTIVITY VIA PRODUCT APIS ==============="
TOKEN=$(curl -s -X POST "$BASE/api/auth/login" -H "content-type: application/json" \
  -d "{\"email\":\"$EMAIL\",\"password\":\"password123\"}" -D - -o /dev/null \
  | grep -i "^set-cookie" | sed 's/.*talksy_session=\([^;]*\).*/\1/')
if [ -z "$TOKEN" ]; then
  echo "FAIL: could not log in via API"
  FAIL=$((FAIL+1))
else
  echo "PASS: login API returned a session"
  PASS=$((PASS+1))
fi
# 3 correct + 1 wrong graded exercise, 1 correct sentence construction.
for i in 1 2 3; do
  curl -s -X POST "$BASE/api/exercises/attempt" -H "content-type: application/json" \
    -H "cookie: talksy_session=$TOKEN" \
    -d '{"exerciseId":"p1-1-1-mcq-1","lessonSlug":"p1-1-1","answer":{"optionId":"b"},"hintsUsed":0,"durationMs":5000}' \
    -o /dev/null
done
curl -s -X POST "$BASE/api/exercises/attempt" -H "content-type: application/json" \
  -H "cookie: talksy_session=$TOKEN" \
  -d '{"exerciseId":"p1-1-1-mcq-1","lessonSlug":"p1-1-1","answer":{"optionId":"a"},"hintsUsed":0,"durationMs":5000}' \
  -o /dev/null
curl -s -X POST "$BASE/api/exercises/attempt" -H "content-type: application/json" \
  -H "cookie: talksy_session=$TOKEN" \
  -d '{"exerciseId":"p1-1-1-rearrange-1","lessonSlug":"p1-1-1","answer":{"tokens":["how","are","you","?"]},"hintsUsed":0,"durationMs":8000}' \
  -o /dev/null
sleep 1

echo "=============== 8. POPULATED DASHBOARD ==============="
$AB open "$BASE/#/progress" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
POV=$(snap)
check "exercise accuracy now computed (4 of 5)" "$POV" "of 5 answers"
check "accuracy percentage shown" "$POV" "80%"
check "recent activity feed lists verified events" "$POV" "Recent activity"
check "activity entry: correct exercise" "$POV" "Correct exercise"
check "learning points tile populated" "$POV" "Learning points"
check "streak active today" "$POV" "day"
check "practised-today streak note" "$POV" "streak is safe"

echo "---- skills tab with data ----"
$AB open "$BASE/#/progress/skills" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
PSK=$(snap)
check "practice mix chart now renders" "$PSK" "compared with your most-practised skill"
check "chart labelled as time-share, not ability" "$PSK" "not how good you are"
check "vocabulary accuracy with honest basis" "$PSK" "graded vocabulary exercises"
check "grammar skill exploring" "$PSK" "Exploring"
check "reading still not started" "$PSK" "Not started"

echo "---- charts tab with data ----"
$AB open "$BASE/#/progress/activity" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
PCH=$(snap)
check "weekly points chart" "$PCH" "Learning points per week"
check "accuracy trend chart" "$PCH" "Accuracy over time"
check "chart sample-size disclosure" "$PCH" "Sample sizes"

echo "---- awards with progress ----"
$AB open "$BASE/#/progress/awards" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
PAW=$(snap)
check "first-50-sentences milestone progress" "$PAW" "1/50"

echo "=============== 9. DEMO ACCOUNT DASHBOARD ==============="
$AB cookies clear >/dev/null 2>&1
DEMO_TOKEN=$(curl -s -X POST "$BASE/api/auth/login" -H "content-type: application/json" \
  -d '{"email":"demo@talksy.app","password":"demo1234"}' -D - -o /dev/null \
  | grep -i "^set-cookie" | sed 's/.*talksy_session=\([^;]*\).*/\1/')
if [ -z "$DEMO_TOKEN" ]; then
  echo "FAIL: demo login failed"
  FAIL=$((FAIL+1))
else
  echo "PASS: demo login (self-healing account)"
  PASS=$((PASS+1))
fi
$AB cookies set talksy_session "$DEMO_TOKEN" --url "$BASE/" >/dev/null 2>&1
$AB open "$BASE/#/progress" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
DOV=$(snap)
check "demo dashboard renders" "$DOV" "My Progress"
check "demo tabs present" "$DOV" "Revision"
check "demo awards tab present" "$DOV" "Awards"
check "demo recommendations render" "$DOV" "Recommended for you"

echo "=============== 10. MOBILE ==============="
$AB set viewport 390 844 >/dev/null 2>&1
$AB open "$BASE/#/progress" >/dev/null 2>&1
sleep 2.5
MOBILE=$(snap)
check "mobile: progress page renders" "$MOBILE" "My Progress"
check "mobile: tabs render" "$MOBILE" "Overview"
$AB set viewport 1280 800 >/dev/null 2>&1

echo "=============== 11. CONSOLE + ERRORS ==============="
ERRORS=$($AB errors 2>&1)
if [ -z "$(echo "$ERRORS" | grep -v '^$')" ]; then
  echo "PASS: no page errors during E2E"
  PASS=$((PASS+1))
else
  echo "FAIL: page errors:"
  echo "$ERRORS" | head -10
  FAIL=$((FAIL+1))
fi
CONSOLE=$($AB console 2>&1 | grep -i "error" | grep -v "Failed to load resource" | head -5)
if [ -z "$CONSOLE" ]; then
  echo "PASS: no console errors during E2E"
  PASS=$((PASS+1))
else
  echo "FAIL: console errors:"
  echo "$CONSOLE"
  FAIL=$((FAIL+1))
fi

$AB close >/dev/null 2>&1

echo
echo "=============================================="
echo "RESULTS: $PASS passed, $FAIL failed"
echo "=============================================="
[ "$FAIL" -eq 0 ] && echo "ALL E2E CHECKS PASSED"
exit $FAIL
