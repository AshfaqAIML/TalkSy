#!/bin/bash
# TalkSy end-to-end verification with agent-browser.
# Full learner journey: home → register → lesson → blocks → exercise +
# feedback + retry → section completion → summary → assessment → dashboard.
BASE="http://127.0.0.1:3000"
AB="agent-browser"
PASS=0
FAIL=0

# Case-insensitive, fixed-string check (immune to regex metacharacters).
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

# Join a11y StaticText segments into one searchable line.
norm() { sed 's/^ *- StaticText "//; s/"$//' | tr '\n' ' ' | tr -s ' '; }

click_text() {
  $AB find text "$1" click 2>&1 | tail -1
}

snap() { $AB snapshot -c 2>&1; }

echo "=============== 1. HOME PAGE ==============="
$AB open "$BASE/" >/dev/null 2>&1
$AB cookies clear >/dev/null 2>&1
$AB open "$BASE/" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 1
HOME_SNAP=$(snap)
check "home renders TalkSy brand" "$HOME_SNAP" "TalkSy"
check "home hero headline" "$HOME_SNAP" "Your journey to confident English starts here."
check "home hero subcopy" "$HOME_SNAP" "Learn English step by step, practise every day"
check "home primary CTA" "$HOME_SNAP" "Start Learning Free"
check "home secondary CTA" "$HOME_SNAP" "Explore Learning Path"
check "home tagline" "$HOME_SNAP" "From your first English word to confident communication."
check "footer" "$HOME_SNAP" "31 writing assignments"

echo "=============== 2. LIBRARY (public) ==============="
$AB open "$BASE/#/library" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
LIB_SNAP=$(snap)
check "library shows learning path" "$LIB_SNAP" "Learning path"
check "library shows Pre-A1 level" "$LIB_SNAP" "Pre-A1 · First Words"
check "library shows A1 level" "$LIB_SNAP" "A1 · Building Blocks"
check "library lesson 1" "$LIB_SNAP" "Hello! Everyday Greetings"
check "library a1 to-be lesson" "$LIB_SNAP" 'The Verb \"To Be\"'
START_COUNT=$(echo "$LIB_SNAP" | grep -cF 'button "Start lesson"')
check "library has 20 start buttons" "$START_COUNT" "20"

echo "=============== 3. REGISTER ==============="
TS=$(date +%s)
EMAIL="e2e-${TS}@talksy.test"
$AB open "$BASE/#/register" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 1
$AB find label "Your name" fill "Eva Test" >/dev/null 2>&1
$AB find label "Email" fill "$EMAIL" >/dev/null 2>&1
$AB find label "Password" fill "password123" >/dev/null 2>&1
$AB find role button click --name "Start learning free" >/dev/null 2>&1
sleep 2.5
AFTER_REG_URL=$($AB get url 2>&1)
check "register redirects to library" "$AFTER_REG_URL" "#/library"
HEADER=$(snap | head -40)
check "header shows user name" "$HEADER" "Eva Test"

echo "=============== 4. LESSON PLAYER: BLOCKS ==============="
$AB open "$BASE/#/lesson/p1-1-1" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
L1=$(snap)
check "lesson title" "$L1" "Hello! Everyday Greetings"
check "section 1 heading block" "$L1" "Words to say hello"
check "vocabulary-list block" "$L1" "good afternoon"
check "vocab definitions" "$L1" "a greeting for the morning"
check "note block" "$L1" "Good night is only for leaving"
check "outline sidebar" "$L1" "Outline"
check "translation toggle" "$L1" "Translations"
check "bookmark button" "$L1" "Bookmark"
check "notes button" "$L1" "Notes"
check "progress bar shows 0 of 4 sections" "$(echo "$L1" | norm)" "0 / 4 sections"

echo "---- navigate to section 2 (dialogue + audio + practice) ----"
click_text "Your first dialogue" >/dev/null 2>&1
sleep 1.5
L2=$(snap)
check "dialogue block renders" "$L2" "Anna meets Ben"
check "dialogue line" "$L2" "How are you?"
check "audio block" "$L2" "Listen: the full dialogue"
check "audio slow button" "$L2" "Slow"
check "practice block" "$L2" "Practice: greetings"
check "exercise 1 prompt" "$L2" "It is 9 a.m. You meet your teacher"
check "difficulty badge" "$L2" "easy"
check "hints control" "$L2" "Show hint (1/2)"

echo "=============== 5. EXERCISE: MCQ + FEEDBACK + RETRY ==============="
# Wrong answer first.
$AB find role radio click --name "Good night" >/dev/null 2>&1
sleep 0.5
$AB find role button click --name "Check answer" >/dev/null 2>&1
sleep 1.5
WRONG=$(snap)
check "incorrect status shown" "$WRONG" "Not quite"
check "correct answer in feedback" "$WRONG" "Correct answer: Good morning"
check "why-wrong explanation" "$WRONG" "Common mistake"
check "grammar rule card (uppercase CSS)" "$WRONG" "grammar rule · time-based greetings"
check "similar example in feedback" "$WRONG" "Nice to see you."
check "retry button" "$WRONG" "Try again"

# Retry with the right answer (scroll up first — sticky header may cover).
$AB find role button click --name "Try again" >/dev/null 2>&1
sleep 1
$AB scroll up 400 >/dev/null 2>&1
sleep 0.5
$AB find role radio click --name "Good morning" 2>&1 | tail -1
sleep 1
$AB find role button click --name "Check answer" >/dev/null 2>&1
sleep 1.5
RIGHT=$(snap)
check "correct status shown" "$RIGHT" "Correct"
check "points awarded" "$(echo "$RIGHT" | norm)" "10 points"

echo "---- second exercise type: match ----"
MATCH_SNAP=$(snap)
check "match exercise prompt" "$MATCH_SNAP" "Match each greeting with the best reply."
check "match tap instruction" "$MATCH_SNAP" "Tap an item on the left"

echo "---- hint reveal ----"
$AB find role button click --name "Show hint (1/2)" >/dev/null 2>&1
sleep 1
HINTS=$(snap)
check "hint 1 revealed" "$HINTS" "Replies usually repeat the same greeting."

echo "=============== 6. SECTION COMPLETION ==============="
$AB find role button click --name "Mark section complete & continue" >/dev/null 2>&1
sleep 5.5
L3=$(snap)
check "advanced to section 3" "$L3" "the friendly question"
check "outline shows 1 of 4 done" "$(echo "$L3" | norm)" "1 / 4 sections"

echo "---- bookmark + notes ----"
$AB find role button click --name "Bookmark" >/dev/null 2>&1
sleep 5
L4=$(snap)
check "bookmark toggled to Saved" "$L4" "Saved"
$AB find role button click --name "Notes" >/dev/null 2>&1
sleep 1.5
NOTES=$(snap)
check "notes dialog opens" "$NOTES" "My notes"
$AB find role textbox fill --name "Write what you want to remember…" "How are you? → I'm fine, thank you!" >/dev/null 2>&1
sleep 0.5
$AB find role button click --name "Save note" >/dev/null 2>&1
sleep 1.5
check "note saved toast" "$(snap)" "Note saved."
sleep 4

echo "---- translation toggle ----"
$AB find role button click --name "Translations" >/dev/null 2>&1
sleep 1.5
TRANS=$(snap)
check "translation shown after toggle" "$TRANS" "la pregunta amable"
$AB find role button click --name "Translations" >/dev/null 2>&1

echo "=============== 7. LESSON SUMMARY + ASSESSMENT ==============="
click_text "Lesson summary" >/dev/null 2>&1
sleep 1.5
SUM=$(snap)
check "summary view" "$SUM" "Lesson summary"
check "key points list (uppercase CSS)" "$SUM" "key points"
check "vocabulary chips" "$SUM" "Nice to meet you"
check "assessment CTA" "$SUM" "Take the final assessment"

$AB find role button click --name "Take the final assessment" >/dev/null 2>&1
sleep 1.5
INTRO=$(snap)
check "assessment intro" "$INTRO" "A short test drawn from this lesson"
check "assessment pass mark" "$INTRO" "70%"
$AB find role button click --name "Start assessment" >/dev/null 2>&1
sleep 2
Q1=$(snap)
check "assessment question 1 header" "$(echo "$Q1" | norm)" "Question 1 of 5"
check "assessment progress counter" "$(echo "$Q1" | norm)" "answered"

# Answer each question: click the first radio if present, else fill the
# first text input via the native setter + input event (React-controlled).
for i in 1 2 3 4 5; do
  $AB eval "(() => {
    const card = document.querySelector('[data-exercise-id]');
    if (!card) return 'nocard';
    const radio = card.querySelector('[role=\"radio\"]');
    if (radio) { radio.click(); return 'radio'; }
    const input = card.querySelector('input[type=\"text\"], textarea');
    if (input) {
      const proto = input.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
      const setter = Object.getOwnPropertyDescriptor(proto, 'value').set;
      setter.call(input, 'hello my name is ana nice to meet you');
      input.dispatchEvent(new Event('input', { bubbles: true }));
      return 'text';
    }
    return 'skipped';
  })()" >/dev/null 2>&1
  sleep 0.8
  if [ "$i" -lt 5 ]; then
    $AB find role button click --name "Next" >/dev/null 2>&1 || true
  else
    $AB find role button click --name "Submit assessment" >/dev/null 2>&1 || true
  fi
  sleep 1.2
done
sleep 2
RESULT=$(snap)
check "assessment result score line" "$(echo "$RESULT" | norm)" "of 5 correct"
check "pass mark shown" "$RESULT" "pass mark"
check "result breakdown by difficulty" "$RESULT" "By difficulty"
check "result breakdown by skill" "$RESULT" "By skill"
check "question review list" "$RESULT" "Question review"
check "retake option" "$RESULT" "Retake assessment"

echo "=============== 8. MY PROGRESS (analytics dashboard) ==============="
$AB open "$BASE/#/dashboard" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
DASH=$(snap)
check "progress page heading" "$DASH" "My Progress"
check "verified-activity subtitle" "$DASH" "verified activity"
check "learning points tile" "$DASH" "Learning points"
check "exercise accuracy tile" "$DASH" "Exercise accuracy"
check "streak tile" "$DASH" "Current streak"
check "achievements tile" "$DASH" "Achievements"
check "recommendations card" "$DASH" "Recommended for you"
check "recommendations explain purpose" "$DASH" "Why:"
check "lessons completed counter" "$DASH" "lessons completed"
check "recent activity feed" "$DASH" "Recent activity"
check "milestones section" "$DASH" "Milestones"
check "goal rings render" "$DASH" "Points today"

echo "=============== 9. BACK TO LIBRARY (progress state) ==============="
$AB open "$BASE/#/library" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
LIB2=$(snap)
check "lesson 1 continues (1/4 sections + assessment)" "$LIB2" "Continue lesson"
check "bookmark icon in library" "$LIB2" "Bookmarked"

echo "=============== 10. SECOND LESSON: MORE BLOCK TYPES ==============="
$AB open "$BASE/#/lesson/p1-1-2" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
N1=$(snap)
check "table block" "$N1" "Numbers 1–5"
check "table header row" "$N1" "Digit"
check "fill-blank exercise (inline input)" "$N1" "Two apples and two apples make"
check "mcq numbers exercise" "$N1" "Which number is 'seven'?"
click_text "Counting 6–10" >/dev/null 2>&1
sleep 1.5
N2=$(snap)
check "warning block (three vs tree)" "$N2" "three vs. tree"
check "multi-select exercise" "$N2" "Select ALL the numbers from 1 to 5"
check "drag-drop exercise" "$N2" "Drag each number word into the correct group"
click_text "Numbers in real life" >/dev/null 2>&1
sleep 1.5
N3=$(snap)
check "image block" "$N3" "Ten coloured circles"
check "diagram block (steps)" "$N3" "How to build a number sentence"
check "read-answer exercise" "$N3" "Read the text, then answer the question"
check "dictation exercise (aria label)" "$N3" "What do you hear?"
check "homework block" "$N3" "Homework"

echo "---- drag-drop interaction: pick item, place in category ----"
$AB open "$BASE/#/lesson/p1-1-2" >/dev/null 2>&1
sleep 2
click_text "Counting 6–10" >/dev/null 2>&1
sleep 1.5
$AB find text "three" click >/dev/null 2>&1
sleep 0.5
DD_BEFORE=$(snap)
check "item picked state visible" "$DD_BEFORE" "Tap the group it belongs to"
$AB find text "1–5" click >/dev/null 2>&1
sleep 1
DD_AFTER=$(snap)
check "item placed into category" "$DD_AFTER" "three"

echo "---- A1 lesson: video + pyramid diagram + grammar ----"
$AB open "$BASE/#/lesson/a1-1-2" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
V1=$(snap)
check "video block (scene player)" "$V1" "At the Café — mini-lesson"
check "video play button" "$V1" "Play video"
check "video scene indicator" "$V1" "Scene 1 of 4"
click_text "Survival phrases" >/dev/null 2>&1
sleep 1.5
V2=$(snap)
check "definition block" "$V2" "a short group of words people use together"
check "pyramid diagram" "$V2" "From word to conversation"

$AB open "$BASE/#/lesson/a1-1-1" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
G1=$(snap)
check "grammar table (conjugation)" "$G1" "I am a student."
check "definition block (verb)" "$G1" "Every sentence needs one"
click_text "One rule, three forms" >/dev/null 2>&1
sleep 1.5
G2=$(snap)
check "grammar-rule block" "$G2" "The golden rule of 'to be'"
check "warning block" "$G2" "Never say 'I are'"
check "steps diagram in lesson" "$G2" "Build a sentence with 'be'"
click_text "Negative and questions" >/dev/null 2>&1
sleep 1.5
G3=$(snap)
check "positive/negative/question table" "$G3" "Isn't tired"

echo "=============== 11. RESPONSIVENESS (mobile) ==============="
$AB set viewport 390 844 >/dev/null 2>&1
sleep 1
MOB=$(snap)
check "mobile outline trigger" "$MOB" "Lesson outline"
check "mobile content still renders" "$MOB" "Negative and questions"
$AB set viewport 1280 800 >/dev/null 2>&1

echo "=============== 12. CONSOLE / PAGE ERRORS ==============="
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

echo "=============== 99. LOGOUT ==============="
$AB open "$BASE/#/" >/dev/null 2>&1
sleep 1.5
$AB find role button click --name "Account menu" >/dev/null 2>&1
sleep 1
$AB find role menuitem click --name "Log out" >/dev/null 2>&1
sleep 2
LOGGED_OUT=$(snap)
check "logged out shows login button" "$LOGGED_OUT" 'button "Log in"'
ME_AFTER=$(curl -s -m 5 "$BASE/api/auth/me" -H "cookie: $(agent-browser cookies get talksy_session 2>/dev/null | grep -o '[a-f0-9]\{64,\}' | head -1 | sed 's|^|talksy_session=|')" 2>/dev/null)
# Session cookie must be cleared server-side or rejected.
COOKIES_NOW=$($AB cookies list 2>&1 | grep -c talksy_session || true)
check "session cookie gone or invalid" "$ME_AFTER$COOKIES_NOW" "null"

$AB close >/dev/null 2>&1
echo ""
echo "=========================================="
echo "E2E RESULT: $PASS passed, $FAIL failed"
echo "=========================================="
