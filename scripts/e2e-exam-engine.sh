#!/bin/bash
# Examination-engine end-to-end verification with agent-browser.
# Golden path: register → Academy (UKVI card) → onboarding (UKVI delivery
# step) → dashboard → practice launcher (six modes) → untimed learning
# session (answer, flag, per-item reveal) → submit confirmation → result
# (inspection, recommendations, integrity note) → history view → TOEFL
# realism checks (forward-only listening, no flag control).
#
# Interaction rules learned from the a11y tree: mixed JSX expressions split
# into separate text nodes, so checks use single-node phrases; dynamic button
# names (timings) are extracted from the live snapshot before clicking.
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
    echo "FAIL: $label — '$want' should NOT be present"
    FAIL=$((FAIL+1))
  else
    echo "PASS: $label"
    PASS=$((PASS+1))
  fi
}

snap() { $AB snapshot -c 2>&1; }

# Extract an accessible name from the live snapshot and click it.
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

echo "=============== 1. ACADEMY LANDING (UKVI PATHWAY) ==============="
$AB open "$BASE/#/exams" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
ACADEMY=$(snap)
check "academy hero" "$ACADEMY" "Your target score has a plan behind it"
check "TOEFL 2026 card" "$ACADEMY" "TOEFL iBT (2026 format)"
check "UKVI pathway card" "$ACADEMY" "IELTS for UKVI (Academic or General Training)"
check "UKVI same-test note" "$ACADEMY" "format, timing and difficulty"
check "trademark note" "$ACADEMY" "not affiliated with, endorsed by or associated"

echo "=============== 2. REGISTER ==============="
$AB open "$BASE/#/register" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 1
EMAIL="engine-e2e-$(date +%s)@talksy.test"
$AB find label "Your name" fill "Engine Tester" >/dev/null 2>&1
$AB find label "Email" fill "$EMAIL" >/dev/null 2>&1
$AB find label "Password" fill "password123" >/dev/null 2>&1
$AB find role button click --name "Start learning free" >/dev/null 2>&1
sleep 2.5

echo "=============== 3. ONBOARDING (incl. UKVI delivery step) ==============="
$AB open "$BASE/#/exams/onboarding" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
$AB find role button click --name "IELTS" >/dev/null 2>&1; sleep 0.5
$AB find role button click --name "Continue" >/dev/null 2>&1; sleep 1
$AB find role button click --name "IELTS Academic" >/dev/null 2>&1; sleep 0.5
$AB find role button click --name "Continue" >/dev/null 2>&1; sleep 1
DELIVERY=$(snap)
check "delivery step asks about UKVI" "$DELIVERY" "Are you taking IELTS for a UK visa (UKVI)?"
check "delivery same-test note" "$DELIVERY" "It changes how you book and where you sit it, not how you prepare."
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
DASH=$(snap)
check "dashboard opens" "$DASH" "Current estimate"
check "dashboard history button" "$DASH" 'button "History"'

echo "=============== 4. PRACTICE-MODE LAUNCHER (six modes) ==============="
$AB open "$BASE/#/exams/mocks" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
LAUNCHER=$(snap)
check "launcher card" "$LAUNCHER" "Start a practice session"
check "full mock tab" "$LAUNCHER" 'tab "Full mock"'
check "section tab" "$LAUNCHER" 'tab "Section-wise"'
check "timed tab" "$LAUNCHER" 'tab "Timed"'
check "untimed tab" "$LAUNCHER" 'tab "Untimed learning"'
check "mistakes tab" "$LAUNCHER" 'tab "Previous mistakes"'
check "custom tab" "$LAUNCHER" 'tab "Custom"'
check "library shows original-material note" "$LAUNCHER" "original EnglishPath practice materials"
check "history link" "$LAUNCHER" 'button "History & trends"'

echo "=============== 5. UNTIMED LEARNING SESSION (reveal + flag) ==============="
$AB find role tab click --name "Untimed learning" >/dev/null 2>&1; sleep 0.8
UNT=$(snap)
check "untimed learning copy" "$UNT" "answer checking is enabled in the player"
$AB find role button click --name "Start session" >/dev/null 2>&1
sleep 4
DIRECTIONS=$(snap)
check "player directions card" "$DIRECTIONS" "Section 1 of"
click_named 'button "Start section[^"]*"'
sleep 2.5
PLAYER=$(snap)
check "status line" "$PLAYER" "Question 1 of"
check "progress bar present" "$PLAYER" "progressbar"
check "difficulty shown" "$PLAYER" "difficulty"
check "flag control present (IELTS)" "$PLAYER" 'button "Flag for review"'

# Answer the current question whatever its type (FILL_BLANK inputs, MCQ
# radios, dictation textbox — one of them is always present).
ANSWERED=0
S=$(snap)
if echo "$S" | grep -q 'textbox "Blank 1"'; then
  $AB find label "Blank 1" fill "birchwood" >/dev/null 2>&1 && ANSWERED=1
elif echo "$S" | grep -q "textbox \"Dictation transcript\""; then
  $AB find label "Dictation transcript" fill "The fee is two hundred pounds." >/dev/null 2>&1 && ANSWERED=1
elif echo "$S" | grep -q 'radio "'; then
  RADIO=$(echo "$S" | grep -oE 'radio "[^"]+"' | head -1 | sed 's/radio "//;s/"$//')
  $AB find role radio click --name "$RADIO" >/dev/null 2>&1 && ANSWERED=1
elif echo "$S" | grep -q 'textbox "Word 1"'; then
  $AB find label "Word 1" fill "cortex" >/dev/null 2>&1 && ANSWERED=1
fi
sleep 2.5
ANS=$(snap)
if [ "$ANSWERED" = "1" ]; then
  check "answered state registered" "$ANS" "1 answered"
else
  check "answered state registered" "$ANS" "answered"
fi
check "check-answer button after answering" "$ANS" 'button "Check this answer"'
$AB find role button click --name "Check this answer" >/dev/null 2>&1
sleep 2.5
REVEALED=$(snap)
check "reveal verdict panel" "$REVEALED" "marks."
check "reveal answer key" "$REVEALED" "Answer:"

echo "=============== 6. SUBMIT WITH CONFIRMATION → RESULT ==============="
# Walk to the last section via the section nav, then through its questions.
for SEC in Speaking Writing Reading Listening; do
  S=$(snap)
  if echo "$S" | grep -q "button \"$SEC\""; then
    $AB find role button click --name "$SEC" >/dev/null 2>&1
    sleep 1.5
    SD=$(snap)
    if echo "$SD" | grep -qE 'button "Start section'; then
      click_named 'button "Start section[^"]*"'
      sleep 2
    fi
    break
  fi
done
# Advance within the section to its last question.
for i in $(seq 1 15); do
  S=$(snap)
  if echo "$S" | grep -q 'button "Next question"'; then
    $AB find role button click --name "Next question" >/dev/null 2>&1
    sleep 1.2
  else
    break
  fi
done
PRE_SUBMIT=$(snap)
if echo "$PRE_SUBMIT" | grep -q 'button "Submit for grading"'; then
  $AB find role button click --name "Submit for grading" >/dev/null 2>&1
elif echo "$PRE_SUBMIT" | grep -q 'button "Submit early"'; then
  $AB find role button click --name "Submit early" >/dev/null 2>&1
fi
sleep 2
DIALOG=$(snap)
check "submit confirmation dialog" "$DIALOG" "Submit for grading?"
check "dialog counts unanswered" "$DIALOG" "will be marked unanswered"
check "dialog integrity note" "$DIALOG" "Practice simulation"
$AB find role button click --name "Submit for grading" >/dev/null 2>&1
sleep 5
RESULT=$(snap)
check "result heading" "$RESULT" "Estimated overall result"
check "result integrity note" "$RESULT" "not an official IELTS or ETS score"
check "result mode label" "$RESULT" "Untimed learning practice"
check "result unanswered count" "$RESULT" "unanswered"
check "review each answer" "$RESULT" "Review each answer"
check "answer inspection shows key" "$RESULT" "Correct answer:"
check "improvement recommendations" "$RESULT" "Improvement recommendations"
check "practice-these-mistakes CTA" "$RESULT" "Practice these mistakes"

echo "=============== 7. HISTORY VIEW ==============="
$AB open "$BASE/#/exams/history" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
HIST=$(snap)
check "history heading" "$HIST" "History & trends"
check "history intro (trends rule)" "$HIST" "Trend lines count exam-condition runs only"
check "compare heading" "$HIST" "Compare two attempts"
check "attempt listed for comparison" "$HIST" "untimed learning practice"

echo "=============== 8. TOEFL REALISM (forward-only, no flags) ==============="
$AB open "$BASE/#/exams/mocks" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
$AB find role tab click --name "TOEFL iBT" >/dev/null 2>&1; sleep 1.5
TOEFL_LIB=$(snap)
check "TOEFL 2026 speaking mock in library" "$TOEFL_LIB" "TOEFL Speaking Section Mock (2026 format) 1"
check "TOEFL 2026 writing mock in library" "$TOEFL_LIB" "TOEFL Writing Section Mock (2026 format) 1"
# Start the legacy-pinned sample mock timed: its player policy must fall
# forward to the active 2026 spec (v1 pin has no navigation field).
click_named 'button "Start timed"'
sleep 3.5
TD=$(snap)
check "TOEFL player loads timed" "$TD" "Full mock examination"
click_named 'button "Start section[^"]*"'
sleep 2.5
TR=$(snap)
check_not "no flag control on TOEFL reading" "$TR" "Flag for review"
# Listening is the forward-only section.
$AB find role button click --name "Listening" >/dev/null 2>&1
sleep 1.5
TL_DIR=$(snap)
check "TOEFL listening directions reached" "$TL_DIR" "Listening"
check "forward-only note in TOEFL listening directions" "$TL_DIR" "only moves forward"
click_named 'button "Start section[^"]*"'
sleep 2.5
TL=$(snap)
check_not "no flag control in TOEFL listening" "$TL" "Flag for review"
check_not "forward-only hides the question grid" "$TL" 'navigation "Questions"'

echo "=============== 9. DASHBOARD RECENT-RESULT MODE LABELS ==============="
$AB open "$BASE/#/exams/dashboard" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
DASH2=$(snap)
check "recent results section" "$DASH2" "Recent mock results"
check "mode badge on recent result" "$DASH2" "untimed learning practice"

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
