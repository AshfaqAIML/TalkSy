#!/bin/bash
# TalkSy Reading Room + Listening Lab end-to-end verification with agent-browser.
# Golden path: register → Reading Room hub → reader interface (settings,
# dictionary, translation, paragraph navigation, bookmarks) → practice
# feedback + retry → formal comprehension check → completion →
# Listening Lab hub → open-transcript activity → locked activity:
# solve every exercise → transcript unlocks.
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
    echo "$got" | head -30
    FAIL=$((FAIL+1))
  fi
}

check_count() {
  local label="$1"; local got="$2"; local want="$3"
  if [ "$got" = "$want" ]; then
    echo "PASS: $label"
    PASS=$((PASS+1))
  else
    echo "FAIL: $label — wanted '$want', got '$got'"
    FAIL=$((FAIL+1))
  fi
}

snap() { $AB snapshot -c 2>&1; }
click_button() { $AB find role button click --name "$1" 2>&1 | tail -1; }
click_radio() { $AB find role radio click --name "$1" 2>&1 | tail -1; }
# Click the first element whose snapshot line matches the pattern — robust
# against name collisions (find-by-name can hit different elements).
click_ref() {
  local pattern="$1"
  local ref
  ref=$(snap | grep -F "$pattern" | head -1 | sed -n 's/.*\[ref=\(e[0-9]*\)\].*/\1/p')
  if [ -n "$ref" ]; then
    $AB click "$ref" 2>&1 | tail -1
  else
    echo "click_ref: no element matches '$pattern'"
  fi
}

echo "=============== 1. HOME: NEW ENVIRONMENTS ==============="
$AB open "$BASE/" >/dev/null 2>&1
$AB cookies clear >/dev/null 2>&1
$AB open "$BASE/" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 1
HOME_SNAP=$(snap)
check "home mentions Reading Room section" "$HOME_SNAP" "Reading · Listening"
check "home reading card" "$HOME_SNAP" "21 texts · 4 levels"
check "home listening card" "$HOME_SNAP" "18 activities · 9 stages"
check "home reading card copy" "$HOME_SNAP" "Adjustable text size"
check "home listening card copy" "$HOME_SNAP" "transcripts that unlock"

echo "=============== 2. REGISTER ==============="
$AB open "$BASE/#/register" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 1
EMAIL="reader-e2e-$(date +%s)@talksy.test"
$AB find label "Your name" fill "Reading Listener" >/dev/null 2>&1
$AB find label "Email" fill "$EMAIL" >/dev/null 2>&1
$AB find label "Password" fill "password123" >/dev/null 2>&1
$AB find role button click --name "Start learning free" >/dev/null 2>&1
sleep 2.5
AFTER_REG_URL=$($AB get url 2>&1)
check "register redirects to library" "$AFTER_REG_URL" "#/library"

echo "=============== 3. READING ROOM HUB ==============="
$AB open "$BASE/#/reading" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
HUB_SNAP=$(snap)
check "hub title" "$HUB_SNAP" "Reading Room"
check "hub level chip beginner" "$HUB_SNAP" "Beginner"
check "hub level chip advanced" "$HUB_SNAP" "Advanced"
check "hub illustrated text" "$HUB_SNAP" "At the Park"
check "hub advanced editorial" "$HUB_SNAP" "The Case for a Four-Day Week"
check "hub professional document text" "$HUB_SNAP" "Hybrid Work Policy"
check "hub stats texts count" "$HUB_SNAP" "texts"

# Level filter narrows the shelf.
$AB find label "Filter: Advanced level" click >/dev/null 2>&1
sleep 1.2
ADV_SNAP=$(snap)
check "advanced filter shows editorial category" "$ADV_SNAP" "Editorial-style passages"
check "advanced filter shows level description" "$ADV_SNAP" "Editorial-style passages, detailed articles, professional documents"
check "advanced filter hides beginner text" "$(echo "$ADV_SNAP" | grep -ciF 'My First Words')" "0"

echo "=============== 4. READER INTERFACE (At the Park) ==============="
$AB open "$BASE/#/reading/at-the-park" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 4
READ_SNAP=$(snap)
check "reader title" "$READ_SNAP" "At the Park"
check "reader level badge" "$READ_SNAP" "Beginner"
check "reader category badge" "$READ_SNAP" "Illustrated"
check "reader toolbar translation" "$READ_SNAP" "Translation"
check "reader toolbar key words" "$READ_SNAP" "Key words"
check "reader paragraph nav" "$READ_SNAP" "Reading progress:"
check "reader illustration caption" "$READ_SNAP" "Look at the picture while you read."
check "reader paragraph 1 region" "$READ_SNAP" 'region "Paragraph 1"'
check "reader clickable word buttons" "$READ_SNAP" 'button "Word: Look"'
check "reader glossary section" "$READ_SNAP" "Glossary"
check "reader glossary entry duck" "$READ_SNAP" "A bird that swims and says 'quack'."
check "reader comprehension header" "$READ_SNAP" "Check your understanding"
check "reader start check card" "$READ_SNAP" "Start the check"

# Text size + line spacing controls are operable (settles the page too).
$AB find role button click --name "Larger text" >/dev/null 2>&1
sleep 0.6
$AB find role button click --name "Smaller text" >/dev/null 2>&1
sleep 0.6
$AB find role button click --name "Relaxed" >/dev/null 2>&1
sleep 0.8
SIZE_SNAP=$(snap)
check "text size controls present" "$SIZE_SNAP" "Line spacing"

# Bookmark the whole text (by ref — paragraph bookmark buttons share the word).
click_ref 'button "Bookmark"' >/dev/null
sleep 1.4
BM_SNAP=$(snap)
check "text bookmarked" "$BM_SNAP" "button \"Bookmarked\""

# Translation toggle reveals Spanish — native DOM click via eval with a
# verify-and-retry (the very first interactions can race page hydration in
# dev mode; a lost click is simply repeated).
toggle_translation() {
  $AB eval "(() => { const b = [...document.querySelectorAll('button')].find(b => (b.textContent||'').trim().startsWith('Translation')); if (b) { b.click(); return 'clicked'; } return 'not-found'; })()" >/dev/null 2>&1
  sleep 1.4
}
# Click, verify the Spanish actually rendered, retry if the click raced
# page hydration in dev mode.
toggle_translation
TRANS_SNAP=$(snap)
if ! echo "$TRANS_SNAP" | grep -qiF "Mira la imagen"; then
  toggle_translation
  TRANS_SNAP=$(snap)
fi
check "translation shown after toggle" "$TRANS_SNAP" "¡Mira la imagen! Tom está en el parque."
toggle_translation
sleep 0.8

# Paragraph navigation marks paragraphs read.
$AB find label "Paragraph 2" click >/dev/null 2>&1
sleep 1.4
NAV_SNAP=$(snap)
check "paragraph read tracked after navigation" "$NAV_SNAP" "1/6 paragraphs"

# Word click → dictionary dialog (word NOT in glossary → fallback).
$AB find text "park" click >/dev/null 2>&1
sleep 1.4
WORD_SNAP=$(snap)
check "dictionary dialog opens for clicked word" "$WORD_SNAP" "not in this text's glossary"
$AB find role button click --name "Close" >/dev/null 2>&1
sleep 1.4

# Word click → dictionary dialog (glossary word, plural → entry fallback).
$AB find text "ducks" click >/dev/null 2>&1
sleep 1.4
DUCK_SNAP=$(snap)
check "dictionary shows duck entry for 'ducks'" "$DUCK_SNAP" "A bird that swims and says 'quack'."
check "dictionary shows translation" "$DUCK_SNAP" "pato"
$AB find role button click --name "Close" >/dev/null 2>&1
sleep 1.4

echo "=============== 5. PRACTICE: FEEDBACK + RETRY ==============="
# First answer wrong (In the lake), then retry correctly.
click_radio "In the lake" >/dev/null
sleep 0.6
click_button "Check answer" >/dev/null
sleep 1.8
WRONG_SNAP=$(snap)
check "wrong practice answer feedback" "$WRONG_SNAP" "Not quite."
check "practice shows correct answer" "$WRONG_SNAP" "Correct answer:"
check "practice shows explanation" "$WRONG_SNAP" "Paragraph 3: 'Tom is sitting under a big tree.'"
check "practice retry button" "$WRONG_SNAP" "Try again"
click_button "Try again" >/dev/null
sleep 1
click_radio "Under a big tree" >/dev/null
sleep 0.6
click_button "Check answer" >/dev/null
sleep 1.8
RIGHT_SNAP=$(snap)
check "correct practice feedback" "$RIGHT_SNAP" "Correct!"

echo "=============== 6. FULL COMPREHENSION CHECK (All About Me) ==============="
$AB open "$BASE/#/reading/all-about-me" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 4

# Read all six paragraphs via the jump strip.
for i in 1 2 3 4 5 6; do
  $AB find label "Paragraph $i" click >/dev/null 2>&1
  sleep 0.7
done
ALLREAD_SNAP=$(snap)
check "all paragraphs read" "$ALLREAD_SNAP" "6/6 paragraphs"

# Start the formal check and answer every question correctly.
click_button "Start the check" >/dev/null
sleep 2
RUN_SNAP=$(snap)
check "check header" "$RUN_SNAP" "Comprehension check · question 1 of 5"
check "practice hidden during the check" "$RUN_SNAP" "practice questions return"
check "no feedback during the check" "$(echo "$RUN_SNAP" | grep -ciF 'Correct!')" "0"

NEXT_REF_PATTERN='button "Next" ['
click_radio "Seven" >/dev/null; sleep 0.8
click_ref "$NEXT_REF_PATTERN" >/dev/null; sleep 1.2
click_radio "Leo's cat" >/dev/null; sleep 0.8
click_ref "$NEXT_REF_PATTERN" >/dev/null; sleep 1.2
click_radio "Two" >/dev/null; sleep 0.8
click_ref "$NEXT_REF_PATTERN" >/dev/null; sleep 1.2
click_radio "A boy tells us about himself" >/dev/null; sleep 0.8
click_ref "$NEXT_REF_PATTERN" >/dev/null; sleep 1.2
$AB find label "Your answer" fill "green" >/dev/null 2>&1; sleep 0.8
click_button "Submit answers" >/dev/null
sleep 3
SUMMARY_SNAP=$(snap)
check "check summary perfect score" "$SUMMARY_SNAP" "100% — Passed!"
check "check summary counts" "$SUMMARY_SNAP" "5 of 5 correct"
check "check per-skill breakdown" "$SUMMARY_SNAP" "Main idea"
check "check review section" "$SUMMARY_SNAP" "Review your answers"
check "text completed badge" "$SUMMARY_SNAP" "Completed"
check "next text card appears" "$SUMMARY_SNAP" "Up next in the Reading Room"

# Back at the hub, the completed text and skill stats now appear.
$AB open "$BASE/#/reading" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
HUB2_SNAP=$(snap)
check "hub now shows comprehension skills" "$HUB2_SNAP" "Your comprehension skills"
check "hub skill accuracy visible" "$HUB2_SNAP" "Main idea"
check "hub completed counter" "$HUB2_SNAP" "completed"

echo "=============== 7. LISTENING LAB HUB ==============="
$AB open "$BASE/#/listening" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
LAB_SNAP=$(snap)
check "lab title" "$LAB_SNAP" "Listening Lab"
check "stage 1 name" "$LAB_SNAP" "Letter & sound recognition"
check "stage 9 name" "$LAB_SNAP" "Professional communication"
check "stage cefr labels" "$LAB_SNAP" "Pre-A1"
check "activity first letter sounds" "$LAB_SNAP" "First Letter Sounds"
check "activity cafe conversation" "$LAB_SNAP" "Ordering at a Café"
check "activity job interview" "$LAB_SNAP" "A Job Interview"
check "activity audio parts metadata" "$LAB_SNAP" "audio parts"

echo "=============== 8. OPEN-TRANSCRIPT ACTIVITY ==============="
$AB open "$BASE/#/listening/first-letter-sounds" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
OPEN_SNAP=$(snap)
check "activity title" "$OPEN_SNAP" "First Letter Sounds"
check "audio player card" "$OPEN_SNAP" "Audio player"
check "player play button" "$OPEN_SNAP" "Play"
check "player speed control" "$OPEN_SNAP" "0.75×"
check "player volume control" "$OPEN_SNAP" "Volume"
check "player segment markers" "$OPEN_SNAP" "Replay segment"
check "open transcript visible" "$OPEN_SNAP" "A is for apple."
check "exercise 1 shown" "$OPEN_SNAP" "Exercise 1 of 4"
check "exercise listen button" "$OPEN_SNAP" "Play the full audio"

echo "=============== 9. LOCKED ACTIVITY: SOLVE EVERYTHING ==============="
$AB open "$BASE/#/listening/greeting-phrases" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
LOCK_SNAP=$(snap)
check "locked transcript notice" "$LOCK_SNAP" "Locked until you finish the exercises"
check "locked transcript explanation" "$LOCK_SNAP" "the transcript stays hidden"

# Exercise 1: choice.
$AB find text "I'm fine, thank you. And you?" click >/dev/null 2>&1; sleep 0.6
click_button "Check answer" >/dev/null; sleep 1.8
EX1_SNAP=$(snap)
check "exercise 1 correct" "$EX1_SNAP" "Correct!"
check "exercise 1 reveal" "$EX1_SNAP" "What you heard"

# Exercise 2: listen-and-complete (two blanks).
$AB find role button click --name "Exercise 2" >/dev/null 2>&1; sleep 1
$AB find label "Blank 1" fill "thank" >/dev/null 2>&1; sleep 0.4
$AB find label "Blank 2" fill "you" >/dev/null 2>&1; sleep 0.4
click_button "Check answer" >/dev/null; sleep 1.8
EX2_SNAP=$(snap)
check "exercise 2 complete correct" "$EX2_SNAP" "Correct!"

# Exercise 3: dictation.
$AB find role button click --name "Exercise 3" >/dev/null 2>&1; sleep 1
$AB find label "Your answer" fill "nice to meet you" >/dev/null 2>&1; sleep 0.4
click_button "Check answer" >/dev/null; sleep 1.8
EX3_SNAP=$(snap)
check "exercise 3 dictation correct" "$EX3_SNAP" "Correct!"

# Exercise 4: choice.
$AB find role button click --name "Exercise 4" >/dev/null 2>&1; sleep 1
$AB find text "Nice to meet you too" click >/dev/null 2>&1; sleep 0.6
click_button "Check answer" >/dev/null; sleep 1.8
EX4_SNAP=$(snap)
check "exercise 4 correct" "$EX4_SNAP" "Correct!"

# Exercise 5: choice → completes the activity and unlocks the transcript.
$AB find role button click --name "Exercise 5" >/dev/null 2>&1; sleep 1
$AB find text "See you later" click >/dev/null 2>&1; sleep 0.6
click_button "Check answer" >/dev/null; sleep 2.2
DONE_SNAP=$(snap)
check "activity completed banner" "$DONE_SNAP" "Completed"
check "first-try score shown" "$DONE_SNAP" "first-try"
check "transcript unlocked show button" "$DONE_SNAP" "Show"
check "all exercises solved counter" "$DONE_SNAP" "5/5 solved"

# Show the transcript: read-along lines with per-line replay.
click_button "Show" >/dev/null
sleep 1.2
TRANS_SNAP=$(snap)
check "unlocked transcript lines" "$TRANS_SNAP" "Good morning! How are you today?"
check "per-line replay buttons" "$TRANS_SNAP" "Replay line"

echo "=============== 10. RESPONSIVENESS ==============="
$AB set viewport 390 844 >/dev/null 2>&1
sleep 1.5
MOBILE_SNAP=$(snap)
check "mobile: activity page renders" "$MOBILE_SNAP" "Greeting People"
check "mobile: still logged in" "$MOBILE_SNAP" "Account menu"
$AB set viewport 1280 800 >/dev/null 2>&1
sleep 0.5

echo "=============== 11. CONSOLE + ERRORS ==============="
ERRORS=$($AB errors 2>&1)
if [ -z "$ERRORS" ]; then
  echo "PASS: no page errors during E2E"
  PASS=$((PASS+1))
else
  echo "FAIL: page errors:"
  echo "$ERRORS" | head -10
  FAIL=$((FAIL+1))
fi

CONSOLE=$($AB console 2>&1 | grep -i " error" | grep -v "Failed to load resource" | head -5)
if [ -z "$CONSOLE" ]; then
  echo "PASS: no console errors during E2E"
  PASS=$((PASS+1))
else
  echo "FAIL: console errors:"
  echo "$CONSOLE"
  FAIL=$((FAIL+1))
fi

echo ""
echo "=============================================="
echo "RESULTS: $PASS passed, $FAIL failed"
if [ "$FAIL" -gt 0 ]; then exit 1; fi
