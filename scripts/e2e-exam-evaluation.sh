#!/bin/bash
# AI-assisted evaluation system — end-to-end verification with agent-browser.
# Golden path: register → GT writing mock (untimed) → answer the letter task
# → submit → result view → open the evaluation panel → run the evaluation →
# inspect the report (provenance labels, disclaimers, checks, learning loop)
# → submit a revision → tracked improvement.
#
# The report renders in one of two honest modes depending on AI availability:
#   complete (AI + verified checks) or partial (checks only, limitation
# stated). Both must carry the safeguard copy and the learning loop.
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

check_either() {
  local label="$1"; local got="$2"; local a="$3"; local b="$4"
  if echo "$got" | grep -qiF "$a" || echo "$got" | grep -qiF "$b"; then
    echo "PASS: $label"
    PASS=$((PASS+1))
  else
    echo "FAIL: $label — wanted '$a' or '$b' in:"
    echo "$got" | head -25
    FAIL=$((FAIL+1))
  fi
}

snap() { $AB snapshot -c 2>&1; }

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
EMAIL="eval-e2e-$(date +%s)@talksy.test"
$AB find label "Your name" fill "Eval Tester" >/dev/null 2>&1
$AB find label "Email" fill "$EMAIL" >/dev/null 2>&1
$AB find label "Password" fill "password123" >/dev/null 2>&1
$AB find role button click --name "Start learning free" >/dev/null 2>&1
sleep 2.5

echo "=============== 2. GT WRITING MOCK (UNTIMED) ==============="
$AB open "$BASE/#/exams/mocks" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
LIB=$(snap)
check "GT writing mock in library" "$LIB" "IELTS General Training Writing Section Mock 1"
# Start the GT writing mock untimed. The a11y refs are ambiguous between
# sibling cards, so the click is scoped in the DOM: find the card heading,
# walk up to the card root, click ITS Untimed button.
CLICK_RESULT=$($AB eval "(() => {
  const headings = Array.from(document.querySelectorAll('h3'));
  const heading = headings.find(h => h.textContent.includes('IELTS General Training Writing Section Mock 1'));
  if (!heading) return 'no-heading';
  let node = heading;
  while (node && node !== document.body) {
    const buttons = node.querySelectorAll ? Array.from(node.querySelectorAll('button')) : [];
    const untimed = buttons.find(b => b.textContent.trim() === 'Untimed');
    if (untimed && node.querySelector('h3') === heading) { untimed.click(); return 'clicked'; }
    node = node.parentElement;
  }
  return 'no-button';
})()" 2>&1 | tail -1)
if echo "$CLICK_RESULT" | grep -q "clicked"; then
  echo "clicked GT writing card's Untimed button"
else
  echo "FAIL: could not click the GT writing card's Untimed button ($CLICK_RESULT)"
  FAIL=$((FAIL+1))
fi
sleep 4

echo "=============== 3. ANSWER THE LETTER TASK ==============="
DIRECTIONS=$(snap)
check "player directions card" "$DIRECTIONS" "Section 1 of"
START_NAME=$(echo "$DIRECTIONS" | grep -oE 'button "Start section[^"]*"' | head -1 | sed 's/^[a-z]* "//;s/" \[.*$//;s/"$//')
if [ -n "$START_NAME" ]; then
  $AB find role button click --name "$START_NAME" >/dev/null 2>&1
  echo "clicked: $START_NAME"
else
  echo "FAIL: no Start section button"
  FAIL=$((FAIL+1))
fi
sleep 2.5
PLAYER=$(snap)
check "letter task prompt visible" "$PLAYER" "Write a letter to the club secretary"
$AB find label "Your essay response" fill "I moved to Greenford last month and I want to join the sports club, but the website still lists last year's prices and the old opening hours, so I am not sure what is true now. Could you please tell me the current membership fee and whether the swimming pool is open on Sunday mornings? I would also like to know if there is a beginners tennis group I could join." >/dev/null 2>&1
sleep 3
FILLED=$(snap)
check "letter word counter live" "$FILLED" "words (minimum"
$AB find role button click --name "Next question" >/dev/null 2>&1
sleep 2
$AB find label "Your essay response" fill "Some people think shops should open on public holidays because families have free time to shop together, but I believe workers deserve these days off to rest, so on balance the advantages do not outweigh the disadvantages for the people who work in shops." >/dev/null 2>&1
sleep 2.5

echo "=============== 4. SUBMIT → RESULT ==============="
$AB find role button click --name "Submit for grading" >/dev/null 2>&1
sleep 2
DIALOG=$(snap)
check "submit confirmation dialog" "$DIALOG" "Submit for grading?"
$AB find role button click --name "Submit for grading" >/dev/null 2>&1
# The submit itself AI-grades both constructed responses, which can take
# 30-60s with a live provider — wait for the result view, not a fixed sleep.
$AB wait --text "Estimated overall result" --timeout 120000 >/dev/null 2>&1 || true
sleep 3
RESULT=$(snap)
check "result heading" "$RESULT" "Estimated overall result"
check "result integrity note" "$RESULT" "not an official IELTS or ETS score"
check "letter row in review" "$RESULT" "writing task"

echo "=============== 5. EVALUATION PANEL — LETTER ==============="
# Rows auto-expand when the submit-time AI grade marks a constructed
# response below par, so clicks must be state-aware: expand Q1 (the
# letter), collapse Q2, making the evaluation button unambiguous.
ROW_STATE=$($AB eval "(() => {
  const rows = Array.from(document.querySelectorAll('button[aria-expanded]'));
  const q1 = rows.find(b => b.textContent.includes('Q1'));
  const q2 = rows.find(b => b.textContent.includes('Q2'));
  if (!q1) return 'no-q1-row';
  if (q1.getAttribute('aria-expanded') === 'false') q1.click();
  if (q2 && q2.getAttribute('aria-expanded') === 'true') q2.click();
  return 'ok';
})()" 2>&1 | tail -1)
if echo "$ROW_STATE" | grep -q "ok"; then
  echo "letter row expanded (state-aware)"
else
  echo "FAIL: could not expand the letter row ($ROW_STATE)"
  FAIL=$((FAIL+1))
fi
sleep 2.5
EXPANDED=$(snap)
check "evaluation panel present" "$EXPANDED" "AI evaluation"
check "get-evaluation CTA" "$EXPANDED" 'button "Get AI evaluation"'
check "your answer shown" "$EXPANDED" "Your answer:"
$AB find role button click --name "Get AI evaluation" >/dev/null 2>&1
# The AI layer may take up to 45s when a provider is reachable; without
# credentials the provider fails fast and the partial report renders.
$AB wait --text "Task-requirement checks" --timeout 60000 >/dev/null 2>&1 || true
sleep 3
EVAL=$(snap)
check "evaluation report rendered" "$EVAL" "AI evaluation"
check "letter rubric resolved (GT Task 1 letter)" "$EVAL" "IELTS General Training Task 1 (letter)"
check_either "evaluation completed in a documented mode" "$EVAL" "Criterion estimates" "checks only — AI unavailable"
check "task-requirement checks section" "$EVAL" "Task-requirement checks"
check "word-count check visible" "$EVAL" "Length ("
check "verified provenance badge" "$EVAL" "VERIFIED"
check "learning loop section" "$EVAL" "Your learning loop"
check "lesson mapping in weaknesses" "$EVAL" "Grammar School"
check "revision guidance offered" "$EVAL" "Revise your response addressing these points"
check "score disclaimer present" "$EVAL" "not an official IELTS band or ETS score"
check "human-teacher note present" "$EVAL" "human review"

echo "=============== 6. PROVENANCE LEGEND ==============="
$AB find role button click --name "How to read these labels" >/dev/null 2>&1
sleep 1.5
LEGEND=$(snap)
check "legend opens" "$LEGEND" "Measured fact from your response"
check "legend documents AI feedback" "$LEGEND" "quoting your own words as evidence"
check "legend documents estimates" "$LEGEND" "never an official IELTS band or ETS score"

echo "=============== 7. REVISION LOOP — TRACKED IMPROVEMENT ==============="
$AB find role button click --name "Revise this response" >/dev/null 2>&1
sleep 1.5
REV_OPEN=$(snap)
check "revision editor opens" "$REV_OPEN" 'textbox "Revised response"'
$AB find label "Revised response" fill "Dear Sir or Madam,

I am writing to ask about membership of Greenford Sports Club, because I have just moved to the area and the club website appears to be out of date.

Firstly, the site lists last year's membership fees, so could you please tell me the current price for an adult annual membership and whether there is a discount for new residents? Secondly, the opening hours shown online do not mention weekends, and I would like to know whether the swimming pool is available on Sunday mornings, as that is the most convenient time for me.

Finally, I would be grateful if you could let me know whether the club runs a beginners tennis group this autumn. I played a little at university and would love to join a friendly group rather than individual lessons.

I look forward to your reply and to becoming a member of the club.

Yours faithfully,
Anna Kowalski" >/dev/null 2>&1
sleep 2
$AB find role button click --name "Submit revision for re-evaluation" >/dev/null 2>&1
$AB wait --text "Improvement tracked" --timeout 60000 >/dev/null 2>&1 || true
sleep 3
REVISED=$(snap)
check "improvement tracked panel" "$REVISED" "Improvement tracked"
check "revision chain chips" "$REVISED" "Revisions:"
check "greeting check now passes" "$REVISED" "Opens with a greeting"

echo "=============== 8. ESSAY PANEL ALSO ELIGIBLE ==============="
# State-aware again: collapse the letter row, expand the essay row.
ROW_STATE=$($AB eval "(() => {
  const rows = Array.from(document.querySelectorAll('button[aria-expanded]'));
  const q1 = rows.find(b => b.textContent.includes('Q1'));
  const q2 = rows.find(b => b.textContent.includes('Q2'));
  if (!q2) return 'no-q2-row';
  if (q1 && q1.getAttribute('aria-expanded') === 'true') q1.click();
  if (q2.getAttribute('aria-expanded') === 'false') q2.click();
  return 'ok';
})()" 2>&1 | tail -1)
if echo "$ROW_STATE" | grep -q "ok"; then
  echo "essay row expanded (state-aware)"
else
  echo "FAIL: could not expand the essay row ($ROW_STATE)"
  FAIL=$((FAIL+1))
fi
sleep 3
ESSAY=$(snap)
check "essay evaluation panel present" "$ESSAY" "AI evaluation"
check "essay revision CTA" "$ESSAY" 'button "Get AI evaluation"'
# Evaluate the essay too — the panel must resolve its OWN rubric (Task 2),
# not the letter's, proving per-task rubric understanding in the browser.
$AB find role button click --name "Get AI evaluation" >/dev/null 2>&1
$AB wait --text "Rubric applied" --timeout 60000 >/dev/null 2>&1 || true
sleep 3
ESSAY_EVAL=$(snap)
check "essay rubric resolved (Task 2, not the letter)" "$ESSAY_EVAL" "IELTS General Training Task 2 (essay)"
check "essay report rendered" "$ESSAY_EVAL" "Task-requirement checks"

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
