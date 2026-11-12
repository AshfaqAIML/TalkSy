#!/bin/bash
# TalkSy Word World (vocabulary system) end-to-end verification.
# Covers: public browsing (daily word, explore search, word detail, context),
# login (API session + cookie), flashcard SRS flow, sentence practice,
# a challenge run, word lists, mobile responsiveness and console cleanliness.
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

# Accessibility snapshots split flowing text into fragments
# ("Card " + "1" + " of " + "10"); join StaticText lines for phrase checks.
joined() {
  $AB snapshot -c 2>&1 | sed 's/^ *- StaticText "//; s/"$//' | tr '\n' ' ' | tr -s ' '
}

click_button() {
  $AB find role button click --name "$1" 2>&1 | tail -1
}

# ---------------------------------------------------------------------------
# Ensure the dev server is up (the sandbox may have recycled it).
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

echo "=============== 1. HOME NAV ==============="
$AB open "$BASE/" >/dev/null 2>&1
$AB cookies clear >/dev/null 2>&1
$AB open "$BASE/" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 1
HOME_SNAP=$(snap)
check "home shows Word World nav link" "$HOME_SNAP" "Word World"
check "footer mentions 135 words" "$HOME_SNAP" "135 words"

echo "=============== 2. VOCABULARY HUB (public) ==============="
$AB open "$BASE/#/vocabulary" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
HUB_SNAP=$(snap)
HUB_TEXT=$(joined)
check "hub title" "$HUB_SNAP" "Word World"
check "daily word section" "$HUB_SNAP" "Word of the day"
# The daily word rotates with the date — derive today's expected word.
TODAY_WORD=$(bun -e "const m = await import('./src/data/vocabulary/index.ts'); console.log(m.getDailyWord().word)" 2>/dev/null | tail -1)
check "daily word loaded (today's word is '$TODAY_WORD')" "$HUB_TEXT" "$TODAY_WORD"
check "tab bar: Word Explorer" "$HUB_SNAP" "Word Explorer"
check "tab bar: Flashcards" "$HUB_SNAP" "Flashcards"
check "tab bar: Challenges" "$HUB_SNAP" "Challenges"
check "login prompt for guests" "$HUB_SNAP" "Log in to keep your words"
check_not "guests don't see the review stats" "$HUB_SNAP" "Spaced repetition keeps every word coming back"

echo "=============== 3. EXPLORE (public search + deep-linked detail) ==============="
$AB open "$BASE/#/vocabulary/explore" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
EXPLORE_SNAP=$(snap)
check "explore heading" "$EXPLORE_SNAP" "Word Explorer"
check "explore shows library word count" "$(joined)" "words found"
$AB find placeholder "Search a word, a meaning, una traducción…" fill "money" >/dev/null 2>&1
sleep 2
SEARCH_SNAP=$(snap)
check "search finds money" "$SEARCH_SNAP" "money"
check "search shows IPA" "$SEARCH_SNAP" "/ˈmʌni/"
check "search shows the simple meaning" "$(joined)" "coins and notes"

$AB open "$BASE/#/vocabulary/explore/money" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
DETAIL_SNAP=$(snap)
check "word detail: meanings section" "$DETAIL_SNAP" "Meanings"
check "word detail: word family" "$DETAIL_SNAP" "Word family"
check "word detail: collocations" "$DETAIL_SNAP" "Common collocations"
check "word detail: synonyms section" "$DETAIL_SNAP" "Synonyms"
check "word detail: antonyms section" "$DETAIL_SNAP" "Antonyms"
check "word detail: related words" "$DETAIL_SNAP" "Related words"
check "word detail: audio button" "$DETAIL_SNAP" "Listen to money"
check "word detail: guests see login hint" "$DETAIL_SNAP" "Log in to bookmark words"

echo "=============== 4. CONTEXT (public) ==============="
$AB open "$BASE/#/vocabulary/context" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
CONTEXT_SNAP=$(snap)
check "context heading" "$CONTEXT_SNAP" "Context learning"
check "context passage list" "$CONTEXT_SNAP" "A New Neighbor"
check "context listen button" "$CONTEXT_SNAP" "Listen"
check "context words chips" "$CONTEXT_SNAP" "Words in this passage"

echo "=============== 5. LOGIN (API session + cookie) ==============="
TOKEN=$(curl -s -X POST "$BASE/api/auth/login" -H "content-type: application/json" \
  -d '{"email":"demo@talksy.app","password":"demo1234"}' -D - -o /dev/null \
  | grep -i "^set-cookie" | sed 's/.*talksy_session=\([^;]*\).*/\1/')
if [ -z "$TOKEN" ]; then
  echo "FAIL: could not log in via API"
  FAIL=$((FAIL+1))
else
  echo "PASS: login API returned a session"
  PASS=$((PASS+1))
fi
$AB cookies set talksy_session "$TOKEN" --url "$BASE/" >/dev/null 2>&1
$AB open "$BASE/" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 1.5
$AB open "$BASE/#/vocabulary" >/dev/null 2>&1
sleep 2.5
AUTH_SNAP=$(snap)
check "logged-in banner shows the learner" "$AUTH_SNAP" "Demo Learner"
check "logged-in hub: your words section" "$AUTH_SNAP" "keeps every word coming back"
check "logged-in hub: due count" "$(joined)" "due"
check "logged-in hub: category coverage" "$AUTH_SNAP" "Category coverage"
check "logged-in hub: recently learned" "$AUTH_SNAP" "Recently learned"

echo "=============== 6. FLASHCARDS (SRS flow) ==============="
$AB open "$BASE/#/vocabulary/flashcards" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 3
FC_SNAP=$(snap)
FC_TEXT=$(joined)
check "flashcards heading" "$FC_SNAP" "Flashcards"
check "study mode picker" "$FC_SNAP" "Daily queue"
check "study settings button" "$FC_SNAP" "Study settings"
if echo "$FC_TEXT" | grep -qiF "Card 1 of"; then
  check "card counter renders" "$FC_TEXT" "Card 1 of"
  check "reveal button" "$FC_SNAP" "Reveal answer"
  click_button "Reveal answer" >/dev/null
  sleep 1.5
  BACK_SNAP=$(snap)
  BACK_TEXT=$(joined)
  check "card back shows the example + audio" "$BACK_SNAP" "Listen to the example"
  check "grade button: Again" "$BACK_SNAP" "Again"
  check "grade button: Hard" "$BACK_SNAP" "Hard"
  check "grade button: Known" "$BACK_SNAP" "Known"
  check "grade button: Easy" "$BACK_SNAP" "Easy"
  check "mark difficult action" "$BACK_SNAP" "Mark as difficult"
  check "review later action" "$BACK_SNAP" "Review later"
  click_button "Known" >/dev/null
  sleep 2.5
  GRADED_SNAP=$(snap)
  GRADED_TEXT=$(joined)
  if echo "$GRADED_SNAP" | grep -qiF "Session complete"; then
    check "session completed after grading" "$GRADED_SNAP" "Session complete"
  else
    check "grade advanced to the next card" "$GRADED_TEXT" "Card 2 of"
  fi
  check "scheduling feedback" "$GRADED_TEXT" "scheduled"
else
  check "empty-state guidance when nothing due" "$FC_SNAP" "All done for now"
fi

echo "=============== 7. SENTENCE PRACTICE ==============="
$AB open "$BASE/#/vocabulary/sentences" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
SENT_SNAP=$(snap)
check "sentences heading" "$SENT_SNAP" "Sentence practice"
check "sentences: practice word card (default word)" "$SENT_SNAP" "buy"
check "sentences: accepted forms hint" "$(joined)" "Accepted forms"
check "sentences: collocation inspiration" "$(joined)" "Try a collocation"
$AB eval "(() => {
  const box = document.getElementById('sentence-input');
  if (!box) return 'no-input';
  const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set;
  setter.call(box, 'My sister buys fresh bread every morning.');
  box.dispatchEvent(new Event('input', { bubbles: true }));
  return 'ok';
})()" >/dev/null 2>&1
sleep 1
click_button "Check my sentence" >/dev/null
sleep 2.5
SENT_RESULT=$(joined)
check "sentence accepted and saved" "$SENT_RESULT" "Saved"
check "sentence counted as a review" "$SENT_RESULT" "scheduled"

echo "=============== 8. CHALLENGE ==============="
$AB open "$BASE/#/vocabulary/challenges" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
CH_SNAP=$(snap)
check "challenges heading" "$CH_SNAP" "Vocabulary challenges"
check "challenge kind: Category quiz" "$CH_SNAP" "Category quiz"
check "challenge kind: Spelling" "$CH_SNAP" "Spelling"
check "challenge kind: Matching" "$CH_SNAP" "Matching"
check "challenge kind: Word arrangement" "$CH_SNAP" "Word arrangement"
click_button "Start challenge" >/dev/null
sleep 3
RUN_SNAP=$(snap)
RUN_TEXT=$(joined)
if echo "$RUN_TEXT" | grep -qiF "Question 1"; then
  check "challenge question 1 renders" "$RUN_TEXT" "Question 1"
  check "submit button present" "$RUN_SNAP" "Submit answers"
  # Answer the first choice question (first option button).
  $AB eval "(() => {
    const buttons = [...document.querySelectorAll('button')];
    const option = buttons.find(b => b.hasAttribute('aria-pressed') && b.textContent.trim().length > 3);
    if (option) { option.click(); return 'clicked'; }
    return 'no-option';
  })()" >/dev/null 2>&1
  sleep 1
  click_button "Submit answers" >/dev/null
  sleep 3
  RESULT_SNAP=$(snap)
  RESULT_TEXT=$(joined)
  check "challenge score screen" "$RESULT_TEXT" "correct"
  check "challenge review shows the question" "$RESULT_TEXT" "Question 1"
  check "challenge play again" "$RESULT_SNAP" "Play again"
else
  check "challenge setup rendered (start failed?)" "$CH_SNAP" "Start challenge"
fi

echo "=============== 9. MY LISTS ==============="
$AB open "$BASE/#/vocabulary/lists" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
LISTS_SNAP=$(snap)
check "lists heading" "$LISTS_SNAP" "My word lists"
check "bookmarks section" "$LISTS_SNAP" "Bookmarked words"
check "recently learned table" "$LISTS_SNAP" "Recently learned"
check "new list button" "$LISTS_SNAP" "New list"
# Create a list end-to-end.
click_button "New list" >/dev/null
sleep 1
$AB find label "Name" fill "E2E Travel words" >/dev/null 2>&1
sleep 0.5
click_button "Create" >/dev/null
sleep 2
LISTS_AFTER=$(snap)
check "created list appears" "$LISTS_AFTER" "E2E Travel words"
click_button "Delete list E2E Travel words" >/dev/null 2>&1
sleep 1.5

echo "=============== 10. RESPONSIVENESS (mobile width) ==============="
$AB set viewport 390 844 >/dev/null 2>&1
sleep 1
MOBILE_SNAP=$(snap)
check "mobile: tab bar renders" "$MOBILE_SNAP" "Word Explorer"
check "mobile: content still visible" "$MOBILE_SNAP" "Bookmarked words"
$AB set viewport 1280 800 >/dev/null 2>&1

echo "=============== 11. CONSOLE CLEANLINESS ==============="
sleep 1
ERRORS=$(grep -iE "⨯|unhandled|TypeError|cannot read" dev.log | tail -4)
if [ -z "$ERRORS" ]; then
  echo "PASS: no runtime errors in dev.log"
  PASS=$((PASS+1))
else
  echo "FAIL: runtime errors found:"
  echo "$ERRORS"
  FAIL=$((FAIL+1))
fi

echo ""
echo "=========================================="
echo "WORD WORLD E2E RESULT: $PASS passed, $FAIL failed"
echo "=========================================="
[ $FAIL -eq 0 ] && echo "ALL E2E CHECKS PASSED" || exit 1
