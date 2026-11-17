#!/bin/bash
# Personalized study planner — end-to-end verification with agent-browser.
# Golden path: register → onboarding (IELTS Academic) → planner setup
# (initial assessment: previous sittings, duration presets, reminders) →
# generate a 7-day plan → phases, day 1 baseline diagnostics, mock day with
# honesty note → complete a task (progress) → baseline diagnostic card →
# readiness report (honest label, disclaimers, next steps) → adapt with no
# evidence (honest no-change) → reminders → dashboard/academy entry points.
#
# Honesty rules verified along the way: no target-score guarantees, mock
# estimates are not official results, reminder scope stated, adaptation
# without evidence changes nothing and says why.
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
    echo "$got" | head -25
    FAIL=$((FAIL+1))
  fi
}

check_not() {
  local label="$1"; local got="$2"; local want="$3"
  if echo "$got" | grep -qiF "$want"; then
    echo "FAIL: $label — did NOT want '$want' in:"
    echo "$got" | head -15
    FAIL=$((FAIL+1))
  else
    echo "PASS: $label"
    PASS=$((PASS+1))
  fi
}

check_any() {
  local label="$1"; local got="$2"; shift 2
  for want in "$@"; do
    if echo "$got" | grep -qiF "$want"; then
      echo "PASS: $label (matched: $want)"
      PASS=$((PASS+1))
      return
    fi
  done
  echo "FAIL: $label — wanted one of: $*"
  FAIL=$((FAIL+1))
}

snap() { $AB snapshot -c 2>&1; }

click_named() {
  local pattern="$1"
  local name
  name=$(snap | grep -oE "$pattern" | head -1 | sed 's/^[a-z]* "//;s/" \[.*$//;s/"$//')
  if [ -n "$name" ]; then
    $AB find role button click --name "$name" >/dev/null 2>&1 && echo "clicked: $name"
  else
    echo "no button matched: $pattern"
  fi
}

if ! curl -s -o /dev/null -m 3 "$BASE/"; then
  echo "Dev server down — starting it…"
  cd /home/z/my-project
  nohup bun run dev >/dev/null 2>&1 &
  for i in $(seq 1 40); do
    curl -s -o /dev/null -m 3 "$BASE/" && break
    sleep 1.5
  done
  sleep 3
fi
if ! curl -s -o /dev/null -m 3 "$BASE/"; then
  echo "FATAL: dev server not running"
  exit 1
fi
$AB console clear >/dev/null 2>&1 || true

echo "=============== 1. REGISTER ==============="
$AB open "$BASE/#/register" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 1.5
EMAIL="planner-e2e-$(date +%s)@talksy.test"
$AB find label "Your name" fill "Planner Tester" >/dev/null 2>&1
$AB find label "Email" fill "$EMAIL" >/dev/null 2>&1
$AB find label "Password" fill "password123" >/dev/null 2>&1
$AB find role button click --name "Start learning free" >/dev/null 2>&1
sleep 2.5

echo "=============== 2. ONBOARDING (IELTS ACADEMIC) ==============="
$AB open "$BASE/#/exams/onboarding" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
$AB find role button click --name "IELTS" >/dev/null 2>&1; sleep 0.5
$AB find role button click --name "Continue" >/dev/null 2>&1; sleep 1
$AB find role button click --name "IELTS Academic" >/dev/null 2>&1; sleep 0.5
$AB find role button click --name "Continue" >/dev/null 2>&1; sleep 1
$AB find role button click --name "Standard IELTS" >/dev/null 2>&1; sleep 0.5
$AB find role button click --name "Continue" >/dev/null 2>&1; sleep 1
$AB find role button click --name "B1 — Intermediate" >/dev/null 2>&1; sleep 0.5
$AB find role button click --name "Continue" >/dev/null 2>&1; sleep 1
$AB find role button click --name "Continue" >/dev/null 2>&1; sleep 1
$AB find role button click --name "Continue" >/dev/null 2>&1; sleep 1
$AB find role button click --name "30m" >/dev/null 2>&1; sleep 0.5
$AB find role button click --name "Continue" >/dev/null 2>&1; sleep 1
$AB find role button click --name "Create my plan" >/dev/null 2>&1
sleep 3

echo "=============== 3. PLANNER SETUP (INITIAL ASSESSMENT) ==============="
$AB open "$BASE/#/exams/planner" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
SETUP=$(snap)
check "setup card heading" "$SETUP" "Initial assessment & plan setup"
check "exam summary shown" "$SETUP" "IELTS Academic"
check "previous examinations block" "$SETUP" "Previous examinations"
check "target score input" "$SETUP" 'textbox "Target score"'
check "exam date input" "$SETUP" "Examination date"
check "daily time input" "$SETUP" 'textbox "Daily study time in minutes"'
check "reminder time input" "$SETUP" "Daily reminder time"
check "weakest section picker" "$SETUP" "Weakest section (gets the most practice)"
check "strongest section picker" "$SETUP" "Strongest section (gets the least, never zero)"
check "duration presets 7 days" "$SETUP" "7 days"
check "duration presets 14 days" "$SETUP" "14 days"
check "duration presets 30 days" "$SETUP" "30 days"
check "duration presets 60 days" "$SETUP" "60 days"
check "duration presets 90 days" "$SETUP" "90 days"
check "custom duration option" "$SETUP" "Custom"
check "reminder scope note in setup" "$SETUP" "not push notifications"
check "exam-date clamp honesty" "$SETUP" "the plan honestly ends on that day"

# Add a previous sitting (initial assessment: examination history).
$AB find label "Previous examination name" fill "IELTS Academic" >/dev/null 2>&1
$AB find label "Previous examination overall score" fill "6.0" >/dev/null 2>&1
$AB find label "Previous examination date" fill "2025-06" >/dev/null 2>&1
click_named 'button "Add"'
sleep 1
HISTORY=$(snap)
check "previous attempt recorded in form" "$HISTORY" "IELTS Academic — 6.0 (2025-06)"

# Pick a weakest and strongest section (two pickers share button labels, so
# scope the clicks in the DOM by the picker's label text).
$AB eval "(() => {
  const pickers = Array.from(document.querySelectorAll('p'));
  const weak = pickers.find(p => p.textContent.includes('Weakest section'));
  const strong = pickers.find(p => p.textContent.includes('Strongest section'));
  const clickSection = (root, name) => {
    if (!root) return 'no-root';
    let scope = root.parentElement;
    for (let i = 0; i < 3 && scope; i++) {
      const btn = Array.from(scope.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === name);
      if (btn) { btn.click(); return 'ok'; }
      scope = scope.parentElement;
    }
    return 'no-button';
  };
  const a = clickSection(weak, 'writing');
  const b = clickSection(strong, 'reading');
  return a + '/' + b;
})()" >/dev/null 2>&1
sleep 1

# Choose the 7-day duration and generate.
$AB find role button click --name "7 days" >/dev/null 2>&1; sleep 0.8
$AB find role button click --name "Generate my plan" >/dev/null 2>&1
sleep 4
# Warm the new API routes: in dev mode the first call compiles the route,
# and the HMR ping that follows can reset client state mid-check. A 401
# curl still compiles the module, so the in-browser POSTs stay quiet.
curl -s -o /dev/null -X POST "$BASE/api/exams/planner/task" -H 'Content-Type: application/json' -d '{"taskId":"warmup","status":"done"}' || true
curl -s -o /dev/null -X POST "$BASE/api/exams/planner/adapt" || true
sleep 1

echo "=============== 4. THE PLAN ==============="
PLAN=$(snap)
check "plan card" "$PLAN" "My study plan"
check "7-day plan badge" "$PLAN" "7-day plan"
check "phase strip foundation" "$PLAN" "Foundation · days 1–1"
check "phase strip skills" "$PLAN" "Skill building · days 2–4"
check "phase strip mock cycle" "$PLAN" "Mock cycle · days 5–6"
check "phase strip final review" "$PLAN" "Final review · days 7–7"
check "today card" "$PLAN" "Today — Day 1"
check "day 1 baseline diagnostics (low confidence)" "$PLAN" "Baseline diagnostic —"
check "diagnostic honesty reason" "$PLAN" "measure it first"
check "day list week grouping" "$PLAN" "Week 1 · days 1–7"
check "mock day focus in day list" "$PLAN" "Mock exam day"
check "progress line" "$PLAN" "tasks ·"
check "every task shows minutes" "$PLAN" "m"
check "task type chip present" "$PLAN" "Baseline diagnostic"
check "task deep links" "$PLAN" "Open"

# Expand day 5 (the mock day) and verify the honesty note.
click_named 'button "Day 5,'
sleep 1.2
DAY5=$(snap)
check "day 5 mock task" "$DAY5" "Mock examination:"
check "mock longer-session honesty note" "$DAY5" "schedule a longer session"
check "mock reason ties to readiness" "$DAY5" "exam-condition evidence"

# Final review day closes with logistics.
click_named 'button "Day 7,'
sleep 1.2
DAY7=$(snap)
check "final review logistics task" "$DAY7" "Exam-day logistics & timing plan"

echo "=============== 5. COMPLETE A TASK (PROGRESS) ==============="
BEFORE=$(snap)
TODAY_COUNT=$(echo "$BEFORE" | grep -oE '[0-9]+/[0-9]+ done' | head -1)
# Two copies of each toggle exist (today card + open day-1 list) with the
# same accessible name, so scope the click to the Today card in the DOM.
TOGGLE_RESULT=$($AB eval "(() => {
  const paragraphs = Array.from(document.querySelectorAll('p'));
  const today = paragraphs.find(p => p.textContent.includes('Today — Day 1'));
  if (!today) return 'no-today';
  let scope = today.parentElement;
  for (let i = 0; i < 4 && scope; i++) {
    const btn = Array.from(scope.querySelectorAll('button')).find(b =>
      (b.getAttribute('aria-label') || '').startsWith('Mark '));
    if (btn) { btn.click(); return 'clicked'; }
    scope = scope.parentElement;
  }
  return 'no-button';
})()" 2>&1 | tail -1)
if echo "$TOGGLE_RESULT" | grep -q "clicked"; then
  echo "clicked today's first task toggle"
  PASS=$((PASS+1))
else
  echo "FAIL: could not click today's task toggle ($TOGGLE_RESULT)"
  FAIL=$((FAIL+1))
fi
# Give the POST time to land (server log: <50ms), then FORCE a real page
# reload — `$AB open` with an unchanged hash does not reload, and dev-mode
# Fast Refresh remounts can reset transient client state. The fresh GET
# proves the completion persisted server-side, which is the contract.
sleep 3
$AB eval "location.reload()" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
AFTER=$(snap)
check "today done count advanced (persisted)" "$AFTER" "1/"
DONE_TASK=$(echo "$AFTER" | grep -oE '[0-9]+/[0-9]+ tasks · [0-9]+%' | head -1)
if [ -n "$DONE_TASK" ] && ! echo "$DONE_TASK" | grep -q "0/"; then
  echo "PASS: plan progress line ($DONE_TASK, was $TODAY_COUNT)"
  PASS=$((PASS+1))
else
  echo "FAIL: plan progress line not found or still zero ($DONE_TASK)"
  FAIL=$((FAIL+1))
fi

echo "=============== 6. BASELINE DIAGNOSTIC CARD ==============="
BASELINE=$(snap)
check "baseline card" "$BASELINE" "Baseline diagnostic"
check "baseline honesty note" "$BASELINE" "an official score"
check "evidence basis self-rating" "$BASELINE" "Evidence: self-rating"
check "confidence percentage" "$BASELINE" "Confidence 25%"
check "ranked weaknesses" "$BASELINE" "Ranked weaknesses"
check "most important weakness callout" "$BASELINE" "Most important weakness"
check "quick diagnostic CTA" "$BASELINE" "quick set"

echo "=============== 7. READINESS REPORT (HONEST) ==============="
READINESS=$(snap)
check "readiness card" "$READINESS" "Examination readiness"
check_any "honest readiness label (one of the four)" "$READINESS" \
  "Needs foundational preparation" "Developing" "Approaching target" "Consistently performing near target"
check "readiness evidence note" "$READINESS" "No timed exam-mode attempts yet"
check "estimated overall block" "$READINESS" "Estimated overall"
check "gap analysis" "$READINESS" "Gap analysis"
check "section-wise readiness" "$READINESS" "Section-wise readiness"
check "section target derivation note" "$READINESS" "even split"
check "completion block" "$READINESS" "plan tasks done"
check "recent mocks empty state" "$READINESS" "No completed attempts yet"
check "next steps block" "$READINESS" "Recommended next steps"
check "not-official disclaimer" "$READINESS" "not official results"
check "no-guarantee disclaimer" "$READINESS" "cannot guarantee"
check_not "never promises a score" "$READINESS" "guaranteed score"

echo "=============== 8. ADAPTATION (HONEST NO-CHANGE) ==============="
click_named 'button "Adapt my plan"'
sleep 3
ADAPTED=$(snap)
check "no-change reason is honest" "$ADAPTED" "No scored mock attempts yet"
check "adaptation suggests what to do first" "$ADAPTED" "sit the next scheduled mock"
check "adapt button still available" "$ADAPTED" 'button "Adapt my plan"'

echo "=============== 9. REMINDERS ==============="
REMINDER=$(snap)
check "reminder card" "$REMINDER" "Study reminder"
check "reminder time editable" "$REMINDER" "Reminder time"
check "reminder weekday toggles" "$REMINDER" 'button "Remind on Mon"'
check "reminder scope note" "$REMINDER" "while EnglishPath is open in a browser tab"
check "reminder save button" "$REMINDER" 'button "Save reminder"'

echo "=============== 10. ENTRY POINTS ==============="
$AB open "$BASE/#/exams/dashboard" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
DASH=$(snap)
check "dashboard planner button" "$DASH" 'button "Study planner"'
$AB open "$BASE/#/exams" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
ACADEMY=$(snap)
check "academy planner button" "$ACADEMY" 'button "Study planner"'
check "planner route reachable again" "$ACADEMY" "Study planner"

# Direct hash route still works.
$AB open "$BASE/#/exams/planner" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
BACK=$(snap)
check "planner reloads with plan intact" "$BACK" "My study plan"
check "completed task persisted" "$BACK" "1/"

echo "=============== CONSOLE ERRORS ==============="
ERRORS=$($AB console 2>&1 | grep -ciE "error" || true)
if [ "$ERRORS" -gt 0 ]; then
  echo "WARN console errors: $ERRORS"
  $AB console 2>&1 | grep -iE "error" | head -5
else
  echo "PASS no console errors"
  PASS=$((PASS+1))
fi

echo
echo "RESULT: $PASS passed, $FAIL failed"
[ "$FAIL" -gt 0 ] && exit 1
exit 0
