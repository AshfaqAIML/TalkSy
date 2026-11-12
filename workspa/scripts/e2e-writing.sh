#!/bin/bash
# TalkSy Writing Studio end-to-end verification with agent-browser.
# Golden path: register → hub (4 tiers, 31 assignments, separate-scores note)
# → editor: instructions, counters, autosave → submit → measured rubric +
# teaching issues → revise → resubmit → version comparison → guided
# beginner flow → history → responsiveness.
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

# ---------------------------------------------------------------------------
if ! curl -s -o /dev/null -m 3 "$BASE/"; then
  echo "Dev server down — starting it…"
  cd /home/z/my-project
  nohup bun run dev >/dev/null 2>&1 &
  for i in $(seq 1 40); do
    if curl -s -o /dev/null -m 3 "$BASE/"; then
      echo "Dev server ready after ${i}x1.5s"
      break
    fi
    sleep 1.5
  done
  sleep 3
fi
if ! curl -s -o /dev/null -m 3 "$BASE/"; then
  echo "FATAL: dev server did not come up"
  exit 1
fi
$AB console clear >/dev/null 2>&1 || true

echo "=============== 1. HOME + NAV ==============="
$AB open "$BASE/" >/dev/null 2>&1
$AB cookies clear >/dev/null 2>&1
$AB open "$BASE/" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 1
HOME_SNAP=$(snap)
check "home writing card" "$HOME_SNAP" "31 assignments · 4 tiers · 10-dimension rubric"
check "home writing copy" "$HOME_SNAP" "revision mode and version comparison"
check "nav link Writing Studio" "$HOME_SNAP" 'link "Writing Studio"'

echo "=============== 2. REGISTER ==============="
$AB open "$BASE/#/register" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 1
EMAIL="writer-e2e-$(date +%s)@talksy.test"
$AB find label "Your name" fill "Writing Tester" >/dev/null 2>&1
$AB find label "Email" fill "$EMAIL" >/dev/null 2>&1
$AB find label "Password" fill "password123" >/dev/null 2>&1
$AB find role button click --name "Start learning free" >/dev/null 2>&1
sleep 2.5
AFTER_REG_URL=$($AB get url 2>&1)
check "register redirects to library" "$AFTER_REG_URL" "#/library"

echo "=============== 3. WRITING HUB ==============="
$AB open "$BASE/#/writing" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
HUB=$(snap)
check "hub title" "$HUB" "Writing Studio"
check "separate-scores note" "$HUB" "kept separate from your general proficiency"
check "beginner tier" "$HUB" "Letters, words and your first sentences"
check "elementary tier" "$HUB" "Write about yourself, your family"
check "intermediate tier" "$HUB" "Paragraphs, stories, letters, emails"
check "advanced tier" "$HUB" "Reports, arguments and analysis"
check "beginner card" "$HUB" "Alphabet Writing"
check "advanced card" "$HUB" "Professional Communication"
ASSIGNMENT_CARDS=$(echo "$HUB" | grep -cE 'heading ".+" \[level=3')
check "31 assignment cards" "$ASSIGNMENT_CARDS" "31"

echo "=============== 4. EDITOR: FREE TASK ==============="
$AB open "$BASE/#/writing/a/self-introduction-writing" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 3
ED=$(snap)
check "editor title" "$ED" "Self-Introduction"
check "assignment instructions" "$ED" "Your assignment"
check "instruction steps" "$ED" "Sentence 1: your name"
check "word target" "$ED" "25–120 words"
check "aim to cover" "$ED" "Aim to cover"
check "word counter" "$ED" "words"
check "character counter" "$ED" "characters"
check "autosave indicator" "$ED" "Autosave on"
check "writing area" "$ED" "Writing area"
check "submit button" "$ED" "Submit for feedback"
check "how you'll be scored" "$ED" "How you'll be scored"
check "hints button" "$ED" "Show hints"

# Type a first (weak) draft and watch autosave.
$AB find label "Writing area" fill "my name is tomas i are 23 years old i from chile i like play football becouse is fun" >/dev/null 2>&1
sleep 3
SAVED=$(snap)
check "autosave saved state" "$SAVED" "Saved"
check "words to minimum" "$SAVED" "more words to reach the minimum"

# Submit v1 (the AI coach adds a few seconds).
$AB find role button click --name "Submit for feedback" >/dev/null 2>&1
for i in $(seq 1 12); do
  sleep 2.5
  if $AB snapshot -c 2>&1 | grep -q "Writing rubric"; then break; fi
done
FB=$(snap)
check "feedback rubric section" "$FB" "Writing rubric"
check "rubric is measured (not AI)" "$FB" "computed from your text by fixed rules"
check "grammar dimension" "$FB" "Grammar"
check "coherence dimension" "$FB" "Coherence"
check "relevance dimension" "$FB" "Relevance"
check "issues that teach" "$FB" "Issues that teach"
check "issue contract: why" "$FB" "Concept:"
check "revise button" "$FB" "Revise this piece"
check "words in verdict" "$FB" "words"

echo "=============== 5. REVISION + COMPARISON ==============="
$AB find role button click --name "Revise this piece" >/dev/null 2>&1
sleep 1.5
REV=$(snap)
check "revision mode banner" "$REV" "Revision mode"
check "revision submit button" "$REV" "Submit revised version"

# Rewrite the draft properly.
$AB find label "Writing area" fill "My name is Tomas and I am twenty-three years old. I come from Santiago, a big city in Chile, where I live with my mother and my sister. I like playing football with my friends, and I love cooking on Sundays. I am learning English because I want to travel for my job one day." >/dev/null 2>&1
sleep 2.5
$AB find role button click --name "Submit revised version" >/dev/null 2>&1
for i in $(seq 1 12); do
  sleep 2.5
  if $AB snapshot -c 2>&1 | grep -q "Version 1 → 2"; then break; fi
done
FB2=$(snap)
check "version comparison section" "$FB2" "Version 1 → 2"
check "comparison overall delta" "$FB2" "Overall"
check "comparison words delta" "$FB2" "Words"
$AB find text "Version 1 → 2" click >/dev/null 2>&1
sleep 1
FB2X=$(snap)
check "side-by-side texts" "$FB2X" "Version 1 ·"
check "submission history" "$FB2" "Submission history"
check "history version 2" "$FB2" "Version 2"

echo "=============== 6. GUIDED BEGINNER FLOW ==============="
$AB open "$BASE/#/writing/a/rearranging-words" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 3
GD=$(snap)
check "guided title" "$GD" "Rearranging Words"
check "guided instruction" "$GD" "Type the sentence with the words in the correct order"
check "mixed words shown" "$GD" "Mixed: is / my / this / book"
check "check answers button" "$GD" "Check my answers"

# Fill all four items: 3 correct, 1 wrong.
$AB find label "Answer for item 1" fill "this is my book" >/dev/null 2>&1
$AB find label "Answer for item 2" fill "we live in london" >/dev/null 2>&1
$AB find label "Answer for item 3" fill "you like coffee do" >/dev/null 2>&1
$AB find label "Answer for item 4" fill "school is not open today" >/dev/null 2>&1
$AB find role button click --name "Check my answers" >/dev/null 2>&1
sleep 3
GR=$(snap)
check "guided score shown" "$GR" "3/4 correct"
check "guided pass (75 < 80)" "$GR" "80% needed"
check "correct item verdict" "$GR" "Correct!"
check "near-miss feedback" "$GR" "Not yet"
check "teaching reveal" "$GR" "Present simple questions"

echo "=============== 7. RESPONSIVENESS ==============="
$AB set viewport 390 844 >/dev/null 2>&1
$AB open "$BASE/#/writing" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
MOBILE=$(snap)
check "mobile: writing hub renders" "$MOBILE" "Writing Studio"
$AB set viewport 1280 800 >/dev/null 2>&1

echo "=============== 8. CONSOLE + ERRORS ==============="
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
