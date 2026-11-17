#!/bin/bash
# TalkSy Grammar School & Sentence Lab — end-to-end verification.
# Covers: grammar hub, tense explorer, error clinic (check + history +
# recommendations), POS lesson rendering, lab hub + stages, sentence-build
# interaction with structure inspection, and challenge mode.
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

norm() { sed 's/^ *- StaticText "//; s/"$//' | tr '\n' ' ' | tr -s ' '; }
snap() { $AB snapshot -c 2>&1; }
click_text() { $AB find text "$1" click 2>&1 | tail -1; }

echo "=============== 1. HOME → GRAMMAR LINKS ==============="
$AB open "$BASE/" >/dev/null 2>&1
$AB cookies clear >/dev/null 2>&1
$AB open "$BASE/" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 1
HOME_SNAP=$(snap)
check "home shows Grammar School section" "$HOME_SNAP" "Grammar School"
check "home shows Sentence Lab card" "$HOME_SNAP" "Sentence Lab"
check "nav has Grammar School" "$HOME_SNAP" "Grammar School"
check "nav has Sentence Lab" "$HOME_SNAP" "Sentence Lab"

echo "=============== 2. GRAMMAR HUB ==============="
$AB open "$BASE/#/grammar" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 1.5
HUB=$(snap)
check "hub title" "$HUB" "Grammar School"
check "hub: tense explorer card" "$HUB" "Tense Explorer"
check "hub: error clinic card" "$HUB" "Grammar Error Clinic"
check "hub: sentence lab card" "$HUB" "Sentence Lab"
for pos in Nouns Pronouns Verbs Adjectives Adverbs Prepositions Conjunctions Interjections; do
  check "hub: $pos module card" "$HUB" "$pos"
done
check "hub: nouns lesson link" "$HUB" "Open lesson"

echo "=============== 3. TENSE EXPLORER ==============="
$AB open "$BASE/#/grammar/tenses" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 1.5
TE=$(snap)
check "explorer title" "$TE" "Tense Explorer"
check "explorer: present simple chip" "$TE" "Present Simple"
check "explorer: future perfect continuous chip" "$TE" "Future Perfect Continuous"
# Default comparison present simple vs present continuous.
check "comparison: meaning row" "$TE" "Meaning"
check "comparison: structure row" "$TE" "Structure"
check "comparison: helping verbs row" "$TE" "Helping verbs"
check "comparison: WH-questions row" "$TE" "WH-questions"
check "comparison: time expressions row" "$TE" "Time expressions"
check "comparison: works in a bank example" "$TE" "She works in a bank."
check "comparison: is working example" "$TE" "She is working right now."

# Switch the second tense to past simple.
$AB find text "Past Simple" click >/dev/null 2>&1
sleep 1.5
TE2=$(snap)
check "comparison updates: past simple example" "$TE2" "She worked late yesterday."
check "comparison updates: did question" "$TE2" "Did she work late?"

echo "=============== 4. ERROR CLINIC (login + check) ==============="
TS=$(date +%s)
EMAIL="grammar-e2e-${TS}@talksy.test"
$AB open "$BASE/#/register" >/dev/null 2>&1
sleep 1.5
$AB find label "Your name" fill "Grammar Tester" >/dev/null 2>&1
$AB find label "Email" fill "$EMAIL" >/dev/null 2>&1
$AB find label "Password" fill "password123" >/dev/null 2>&1
$AB find role button click --name "Start learning free" >/dev/null 2>&1
sleep 2.5

$AB open "$BASE/#/grammar/clinic" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 1.5
CLINIC=$(snap)
check "clinic title" "$CLINIC" "Grammar Error Clinic"

# Check a sentence with multiple errors (use the built-in example button).
$AB find text "She play the piano every day" click >/dev/null 2>&1
sleep 0.5
$AB find role button click --name "Check my sentence" >/dev/null 2>&1
sleep 2
RESULT=$(snap)
check "clinic: issue count shown" "$RESULT" "Found"
check "clinic: corrected sentence" "$(echo "$RESULT" | norm)" "She plays the piano every day."
check "clinic: category badge (third person)" "$RESULT" "Third person -s"
check "clinic: explanation shown" "$RESULT" "he/she/it takes a verb ending"
check "clinic: recommended lesson link" "$RESULT" "Practise this"

# Clean sentence.
$AB find role textbox fill --name "Your sentence" "She works in a bank." >/dev/null 2>&1
sleep 0.5
$AB find role button click --name "Check my sentence" >/dev/null 2>&1
sleep 2
CLEAN=$(snap)
check "clinic: clean sentence accepted" "$CLEAN" "Perfect — no problems found!"

# History & recurring categories.
HIST=$(snap)
check "clinic: recurring errors panel" "$HIST" "Your recurring errors"
check "clinic: recommended lessons panel" "$HIST" "Recommended for you"
check "clinic: recent submissions" "$HIST" "Recent submissions"

echo "=============== 5. POS LESSON (pos-module rendering) ==============="
$AB open "$BASE/#/lesson/grammar-pos-1" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
POS=$(snap)
check "pos lesson title" "$POS" "Nouns & Pronouns"
check "pos module: definition" "$POS" "A noun is a word for a person, place, thing or idea"
check "pos module: purpose" "$POS" "Why we need it"
check "pos module: categories" "$POS" "Countable vs. uncountable"
check "pos module: highlighted example" "$POS" "The dog is sleeping."
check "pos module: common mistakes" "$POS" "I have two book."
check "pos module: skill activities" "$POS" "Skill-based activities"
check "pos module: lab activity badge" "$POS" "Sentence Lab"

echo "---- anatomy block in POS lesson ----"
ANAT=$(snap)
check "anatomy: pattern chip" "$ANAT" "S + V + O"
check "anatomy: tap-a-word hint" "$ANAT" "Tap any word to inspect its grammatical role"
check "anatomy: hear sentence button" "$ANAT" "Hear the sentence"
# Click a token to inspect its role (scoped to the anatomy widget).
$AB eval "(() => {
  const widget = document.querySelector('[aria-label=\"Sentence words with grammatical roles\"]');
  if (!widget) return 'nowidget';
  const tokens = [...widget.querySelectorAll('button')];
  if (tokens[1]) { tokens[1].click(); return 'clicked'; }
  return 'notokens';
})()" >/dev/null 2>&1
sleep 1
TOKEN=$(snap)
check "anatomy: token inspection opens" "$TOKEN" "who reads"

echo "=============== 6. TENSE LESSON (comparison block) ==============="
$AB open "$BASE/#/lesson/grammar-tenses-past" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
TENSE=$(snap)
check "tense lesson title" "$TENSE" "Past Tenses Compared"
check "tense comparison block title" "$TENSE" "Compare: Past Simple ↔ Past Continuous"
check "photo vs film metaphor" "$TENSE" "The photo vs. the film"

echo "=============== 7. SENTENCE LAB HUB ==============="
$AB open "$BASE/#/lab" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
LAB=$(snap)
check "lab title" "$LAB" "Sentence Construction Laboratory"
check "lab: stage 1" "$LAB" "Word Recognition"
check "lab: stage 2" "$LAB" "Basic Structure"
check "lab: stage 3" "$LAB" "Sentence Types"
check "lab: stage 4" "$LAB" "Sentence Polarity"
check "lab: stage 5" "$LAB" "Sentence Expansion"
check "lab: stage 6" "$LAB" "Sentence Combination"
check "lab: stage 7" "$LAB" "Sentence Transformation"
check "lab: expansion subtitle" "$LAB" "I read an interesting book every evening"
check "lab: timed challenge badge" "$LAB" "timed challenge"

echo "=============== 8. LAB STAGE 2: SENTENCE BUILD ==============="
$AB open "$BASE/#/lesson/lab-2-basic-structure" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
L2=$(snap)
check "lab2: title" "$L2" "Stage 2: Basic Structure"
check "lab2: S+V anatomy" "$L2" "Pattern 1 — S + V"
check "lab2: S+V+O anatomy" "$L2" "Pattern 2 — S + V + O"
check "lab2: S+V+C anatomy" "$L2" "Pattern 3 — S + V + C"
check "lab2: object vs complement warning" "$L2" "Object vs. complement"

echo "---- build 'Sara reads books.' tile by tile ----"
$AB find text "Practice" click >/dev/null 2>&1 || true
sleep 1
# Find the first sentence-build exercise and click its tiles in order.
for word in "Sara" "reads" "books" "."; do
  $AB eval "(() => {
    const cards = document.querySelectorAll('[data-exercise-id]');
    const card = cards[0];
    if (!card) return 'nocard';
    const buttons = [...card.querySelectorAll('button')];
    const tile = buttons.find(b => b.textContent.trim() === '${word}' && b.closest('.flex-wrap'));
    if (tile) { tile.click(); return 'clicked'; }
    return 'notfound';
  })()" >/dev/null 2>&1
  sleep 0.4
done
sleep 0.5
BUILT=$(snap)
check "sentence build: hear-my-sentence button appears" "$BUILT" "Hear my sentence"
$AB find role button click --name "Check answer" >/dev/null 2>&1
sleep 2
SB_RESULT=$(snap)
check "sentence build: correct feedback" "$SB_RESULT" "Correct"
check "sentence build: structure inspection shown" "$SB_RESULT" "Inspect the sentence structure"
check "sentence build: anatomy pattern in feedback" "$SB_RESULT" "S + V + O"

echo "---- alternative answer: 'She reads a book.' ----"
$AB open "$BASE/#/lesson/grammar-pos-1" >/dev/null 2>&1
sleep 2
$AB eval "(() => {
  const nav = [...document.querySelectorAll('nav[aria-label=\"Lesson outline\"] button, button')];
  const target = nav.find(b => /Pronouns/.test(b.textContent) && b.closest('nav'));
  if (target) { target.click(); return 'clicked'; }
  return 'notfound';
})()" >/dev/null 2>&1
sleep 2
POS2=$(snap)
check "pronouns practice visible" "$POS2" "with a pronoun"

echo "=============== 9. CHALLENGE MODE (untimed) ==============="
$AB open "$BASE/#/lesson/lab-1-word-recognition" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
click_text "Challenge" >/dev/null 2>&1
sleep 1.5
CH=$(snap)
check "challenge intro card" "$CH" "Word-recognition challenge"
check "challenge: untimed badge" "$CH" "Untimed"
check "challenge: accuracy note" "$CH" "Accuracy decides your score"
$AB find role button click --name "Start challenge" >/dev/null 2>&1
sleep 2
RUN=$(snap)
check "challenge question 1" "$(echo "$RUN" | norm)" "Question 1 of 3"

# Answer question 1 (drag-drop: async placement — React needs a tick between
# picking an item and placing it in a category).
$AB eval "(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const card = document.querySelector('[data-exercise-id]');
  if (!card) return 'nocard';
  const click = (txt) => {
    const el = [...card.querySelectorAll('button')].find(
      (b) => b.textContent.trim() === txt && !b.disabled && b.offsetParent,
    );
    if (el) { el.click(); return true; }
    return false;
  };
  const pairs = [['friend','Subject'],['sent','Verb'],['letters','Object'],['best','Modifier'],['two','Modifier']];
  let placed = 0;
  for (const [item, cat] of pairs) {
    click(item);
    await sleep(250);
    if (click(cat)) placed++;
    await sleep(150);
  }
  return 'placed ' + placed;
})()" >/dev/null 2>&1
sleep 2
CHECK_BTN=$($AB eval "(() => {
  const card = document.querySelector('[data-exercise-id]');
  const btn = [...card.querySelectorAll('button')].find(b => /Check/.test(b.textContent));
  if (btn && !btn.disabled) { btn.click(); return 'checked'; }
  return 'disabled:' + (btn ? btn.disabled : 'nobtn');
})()" 2>&1 | tail -1)
echo "check button state: $CHECK_BTN"
sleep 2
CH1=$(snap)
check "challenge: feedback after answer" "$(echo "$CH1" | norm)" "Correct"
$AB find role button click --name "Next question" >/dev/null 2>&1
sleep 1.5
CH2=$(snap)
check "challenge: advanced to question 2" "$(echo "$CH2" | norm)" "Question 2 of 3"

echo "=============== 10. LAB STAGE 5 (expansion) + STAGE 7 (transformation) ==============="
$AB open "$BASE/#/lesson/lab-5-expansion" >/dev/null 2>&1
sleep 2
L5=$(snap)
check "lab5: the famous expansion example" "$L5" "I read an interesting book every evening."
check "lab5: full tree anatomy" "$L5" "The full tree, colour-coded"

$AB open "$BASE/#/lesson/lab-7-transformation" >/dev/null 2>&1
sleep 2
L7A=$(snap)
check "lab7: three structures table" "$L7A" "The three structures"
check "lab7: complex sentence anatomy" "$L7A" "A complex sentence, dissected"
# Navigate to section 2 (voice & speech).
$AB eval "(() => {
  const target = [...document.querySelectorAll('button')].find(b => /Active\/passive & direct\/indirect/.test(b.textContent) && b.closest('nav'));
  if (target) { target.click(); return 'clicked'; }
  return 'notfound';
})()" >/dev/null 2>&1
sleep 2
L7=$(snap)
check "lab7: active to passive rule" "$L7" "Active → passive"
check "lab7: direct to indirect rule" "$L7" "Direct → indirect speech"
# Navigate to section 3 (practice & challenge).
$AB eval "(() => {
  const target = [...document.querySelectorAll('button')].find(b => /Practice & challenge/.test(b.textContent) && b.closest('nav'));
  if (target) { target.click(); return 'clicked'; }
  return 'notfound';
})()" >/dev/null 2>&1
sleep 2
L7C=$(snap)
check "lab7: timed master challenge" "$L7C" "Master transformer — timed"
check "lab7: transform practice block" "$L7C" "Transform!"

echo "=============== 11. LIBRARY INTEGRATION ==============="
$AB open "$BASE/#/library" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
LIB=$(snap)
check "library: grammar core level" "$LIB" "Grammar Core · School & Lab"
check "library: grammar school unit" "$LIB" "Grammar School · Parts of Speech"
check "library: sentence lab unit" "$LIB" "Sentence Construction Laboratory"
check "library: tenses unit" "$LIB" "Grammar School · Tenses"
LAB_LESSONS=$(echo "$LIB" | grep -cF 'Stage ')
check "library: 7 lab stage lessons" "$LAB_LESSONS" "7"

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

$AB close >/dev/null 2>&1
echo ""
echo "=========================================="
echo "GRAMMAR E2E RESULT: $PASS passed, $FAIL failed"
echo "=========================================="
