#!/bin/bash
# TalkSy Speaking Lab end-to-end verification with agent-browser.
# Golden path: register → hub (tabs, tiers, scenarios, pronunciation) →
# settings (consent, provider, retention, privacy copy) → activity flow with
# the typed fallback (headless has no mic): measured feedback, no AI claims →
# open-task with model answer reveal → pronunciation practice →
# conversation simulator (AI partner with automatic scripted fallback) →
# end-of-conversation report → history delete.
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

joined() {
  $AB snapshot -c 2>&1 | sed 's/^ *- StaticText "//; s/"$//' | tr '\n' ' ' | tr -s ' '
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
$AB console clear >/dev/null 2>&1 || true

echo "=============== 1. HOME + NAV ==============="
$AB open "$BASE/" >/dev/null 2>&1
$AB cookies clear >/dev/null 2>&1
$AB open "$BASE/" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 1
HOME_SNAP=$(snap)
check "home speaking card" "$HOME_SNAP" "22 activities · 11 conversations · 4 pronunciation sets"
check "home speaking copy" "$HOME_SNAP" "Your audio is never stored"
check "nav link Speaking Lab" "$HOME_SNAP" 'link "Speaking Lab"'

echo "=============== 2. REGISTER ==============="
$AB open "$BASE/#/register" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 1
EMAIL="speaker-e2e-$(date +%s)@talksy.test"
$AB find label "Your name" fill "Speaking Tester" >/dev/null 2>&1
$AB find label "Email" fill "$EMAIL" >/dev/null 2>&1
$AB find label "Password" fill "password123" >/dev/null 2>&1
$AB find role button click --name "Start learning free" >/dev/null 2>&1
sleep 2.5
AFTER_REG_URL=$($AB get url 2>&1)
check "register redirects to library" "$AFTER_REG_URL" "#/library"

echo "=============== 3. HUB: PRACTICE TAB ==============="
$AB open "$BASE/#/speaking" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
HUB=$(snap)
check "hub title" "$HUB" "Speaking Lab"
check "hub privacy line" "$HUB" "your audio is never stored"
check "practice tab" "$HUB" 'tab "Practice"'
check "conversations tab" "$HUB" 'tab "Conversations"'
check "pronunciation tab" "$HUB" 'tab "Pronunciation"'
check "settings tab" "$HUB" 'tab "Settings"'
check "beginner tier" "$HUB" "First words out loud"
check "intermediate tier" "$HUB" "Pictures, past events, stories"
check "advanced tier" "$HUB" "Debates, interviews, presentations"
check "beginner activity card" "$HUB" "Repeat a Word"
check "advanced activity card" "$HUB" "Professional Communication"
ACTIVITY_CARDS=$(echo "$HUB" | grep -cE 'heading ".+" \[level=3')
check_count "22 activity cards" "$ACTIVITY_CARDS" "22"

echo "=============== 4. CONVERSATIONS TAB ==============="
$AB find role tab click --name "Conversations" >/dev/null 2>&1
sleep 1.5
CONV=$(snap)
check "conversations intro" "$CONV" "The AI partner plays their role"
check "scenario meeting a new person" "$CONV" "Meeting a New Person"
check "scenario doctor" "$CONV" "Visiting a Doctor"
check "scenario interview" "$CONV" "Attending an Interview"
check "scenario host family" "$CONV" "Introducing Yourself"
check "scenario workplace" "$CONV" "Workplace Discussions"
SCENARIO_CARDS=$(echo "$CONV" | grep -cE 'heading ".+" \[level=3')
check_count "11 scenario cards" "$SCENARIO_CARDS" "11"

echo "=============== 5. PRONUNCIATION TAB ==============="
$AB find role tab click --name "Pronunciation" >/dev/null 2>&1
sleep 1.5
PRON=$(snap)
check "stress category" "$PRON" "Word stress"
check "sounds category" "$PRON" "Sound differences"
check "rhythm category" "$PRON" "Sentence rhythm"
check "intonation category" "$PRON" "Intonation"
check "pronunciation honesty note" "$PRON" "not a pronunciation score"

echo "=============== 6. SETTINGS: CONSENT + PROVIDERS + RETENTION ==============="
$AB find role tab click --name "Settings" >/dev/null 2>&1
sleep 1.5
SETTINGS=$(snap)
check "settings consent pending" "$SETTINGS" "Microphone & privacy"
check "settings provider list" "$SETTINGS" "In-browser recognition"
check "settings retention" "$SETTINGS" "Transcript retention"
check "settings delete history" "$SETTINGS" "Delete my speaking history"
check "privacy bullet audio never stored" "$SETTINGS" "Audio is never stored on the TalkSy server"

# Accept the consent dialog.
$AB find role button click --name "Review & accept the notice" >/dev/null 2>&1
sleep 1
$AB find role button click --name "I understand — enable the microphone" >/dev/null 2>&1
sleep 2
SETTINGS_AFTER=$(snap)
check "consent granted message" "$SETTINGS_AFTER" "You have accepted the microphone & privacy notice"
check "consent granted explainer" "$SETTINGS_AFTER" "Recording still starts only when you press Record"

echo "=============== 7. MATCH ACTIVITY (typed fallback) ==============="
$AB open "$BASE/#/speaking/activity/repeat-a-word" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
ACT=$(snap)
check "activity title" "$ACT" "Repeat a Word"
check "activity beginner badge" "$ACT" "Beginner"
check "task progress" "$ACT" "0/3 tasks passed"
check "match prompt" "$ACT" "Say it as accurately as you can"
check "target text visible" "$ACT" "hello"
check "hear the model button" "$ACT" "Hear the model"
check "recorder panel" "$ACT" "Your take"
check "recorder privacy note" "$ACT" "Recording starts only when you press Record"
check "typed fallback link" "$ACT" "Prefer to type what you said"

# Switch to typed mode and submit the exact target word.
$AB find role button click --name "Prefer to type what you said?" >/dev/null 2>&1
sleep 1
$AB find textarea "Type the words you just said" fill "hello" >/dev/null 2>&1 || \
  $AB find label "Your spoken answer, typed" fill "hello" >/dev/null 2>&1
$AB find role button click --name "Submit take" >/dev/null 2>&1
sleep 2.5
FB=$(snap)
check "feedback verdict passed" "$FB" "Passed — well spoken"
check "measured results section" "$FB" "Measured results"
check "measured label (no AI)" "$FB" "no AI involved"
check "typed intelligibility honesty" "$FB" "Typed input — no recognition was run"
check "progress advanced to 1/3" "$FB" "1/3 tasks passed"
check_not "no AI section for typed input" "$FB" "AI coach suggestions"
check "try again button" "$FB" "Try this task again"

echo "=============== 8. OPEN ACTIVITY (model answer reveal) ==============="
$AB open "$BASE/#/speaking/activity/introduce-yourself" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
OPEN=$(snap)
check "open activity title" "$OPEN" "Introduce Yourself"
check "open prompt cues" "$OPEN" "Talking points"
check "checklist guidance" "$OPEN" "Aim to cover"
check "checklist name point" "$OPEN" "You said your name"
check "hints button" "$OPEN" "Show hints"

$AB find role button click --name "Prefer to type what you said?" >/dev/null 2>&1
sleep 1
GOOD_ANSWER="My name is Sofia. I am twenty four years old. I am from Mexico. I like music and I love cooking with my family."
$AB find textarea "Type the words you just said" fill "$GOOD_ANSWER" >/dev/null 2>&1 || \
  $AB find label "Your spoken answer, typed" fill "$GOOD_ANSWER" >/dev/null 2>&1
$AB find role button click --name "Submit take" >/dev/null 2>&1
sleep 2.5
OFB=$(snap)
check "open feedback dimensions" "$OFB" "Response relevance"
check "open feedback fluency" "$OFB" "Fluency indicators"
check "open feedback completeness" "$OFB" "Completeness"
check "checklist covered 100" "$OFB" "100% covered"
check "model answer section" "$OFB" "Model answer"
check "model answer reveal button" "$OFB" "Show model answer"

$AB find role button click --name "Show model answer" >/dev/null 2>&1
sleep 1
MODEL=$(snap)
check "model answer text" "$MODEL" "My name is Sofia."
check "model answer listen" "$MODEL" "Listen to the model"

echo "=============== 9. PRONUNCIATION PRACTICE ==============="
$AB open "$BASE/#/speaking/pronunciation" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
PRON_HUB=$(snap)
check "pronunciation hub loads" "$PRON_HUB" "Word stress"
# Open the first stress item.
$AB find role button click --name "PHO-to-graph family Explain" >/dev/null 2>&1 || \
  $AB find text "PHO-to-graph family" click >/dev/null 2>&1
sleep 1.5
ITEM=$(snap)
check "item target text" "$ITEM" "photograph, photography, photographic"
check "item visual cue" "$ITEM" "PHO-to-graph · pho-TO-gra-phy"
check "item model audio" "$ITEM" "Hear the model (slow)"

# Typed fallback take.
$AB find role button click --name "Type what I said instead" >/dev/null 2>&1
sleep 1
$AB find textarea "Type what you said" fill "photograph photography photographic" >/dev/null 2>&1 || \
  $AB find label "Typed take" fill "photograph photography photographic" >/dev/null 2>&1
$AB find role button click --name "Save typed take" >/dev/null 2>&1
sleep 2
PRES=$(snap)
check "pronunciation typed result saved" "$PRES" "Saved — self-assessed take"

echo "=============== 10. CONVERSATION SIMULATOR ==============="
$AB open "$BASE/#/speaking/conversation/meeting-a-new-person" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
CS=$(snap)
check "scenario title" "$CS" "Meeting a New Person"
check "scenario partner" "$CS" "Maya, a friendly visitor at a language exchange evening"
check "scenario goal" "$CS" "Your goal"
check "difficulty picker" "$CS" "Choose the difficulty — the partner adapts to your level"
check "start button" "$CS" "Start the conversation"

$AB find role button click --name "Start the conversation" >/dev/null 2>&1
sleep 3
THREAD=$(snap)
check "conversation thread opens with exit" "$THREAD" 'button "Exit"'
check "partner opening line" "$THREAD" "I'm Maya"
check "turn counter" "$THREAD" "of your turns"
check "speak reply button" "$THREAD" "Speak your reply"
check "end conversation disabled hint" "$THREAD" "Say at least two lines"

# Type the first reply.
$AB find role button click --name "Type my reply instead" >/dev/null 2>&1
sleep 1
$AB find textarea "Your typed reply" fill "Hi Maya! My name is Tom and I am from Brazil. Where are you from?" >/dev/null 2>&1 || \
  $AB find label "Your typed reply" fill "Hi Maya! My name is Tom and I am from Brazil. Where are you from?" >/dev/null 2>&1
$AB find role button click --name "Send" >/dev/null 2>&1
sleep 8
T1=$(snap)
check "learner turn shown" "$T1" "Hi Maya! My name is Tom"
check "partner replied (any text)" "$(echo "$T1" | grep -cF 'Listen')" "1"

# Second reply.
$AB find textarea "Your typed reply" fill "I am learning English because I want to travel for my job. Do you like languages?" >/dev/null 2>&1 || \
  $AB find label "Your typed reply" fill "I am learning English because I want to travel for my job. Do you like languages?" >/dev/null 2>&1
$AB find role button click --name "Send" >/dev/null 2>&1
sleep 8
T2=$(snap)

# Finish and get the report.
$AB find role button click --name "End conversation & get feedback" >/dev/null 2>&1
sleep 10
REPORT=$(snap)
check "report title" "$REPORT" "Conversation report"
check "report measured stats" "$REPORT" "Measured results"
check "report your turns stat" "$REPORT" "Your turns"
check "report goal coverage" "$REPORT" "Goal coverage"
check "report coach feedback" "$REPORT" "Coach feedback"
check "report strong points" "$REPORT" "Strong points"
check "report accent disclaimer" "$REPORT" "Accents are not errors"
check "report follow-up task" "$REPORT" "Follow-up practice task"
check "practise again button" "$REPORT" "Practise this scenario again"

echo "=============== 11. SETTINGS: DELETE HISTORY ==============="
$AB open "$BASE/#/speaking/settings" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
DEL=$(snap)
check "delete section present" "$DEL" "Delete my speaking history"
$AB find role button click --name "Delete everything" >/dev/null 2>&1
sleep 1.5
$AB find role button click --name "Delete everything" >/dev/null 2>&1
sleep 2
HUB_AFTER=$(snap)
check "history delete toast" "$HUB_AFTER" "deleted"

echo "=============== 12. RESPONSIVENESS ==============="
$AB set viewport 390 844 >/dev/null 2>&1
$AB open "$BASE/#/speaking" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
MOBILE=$(snap)
check "mobile: speaking hub renders" "$MOBILE" "Speaking Lab"
check "mobile: tabs render" "$MOBILE" "Practice"
$AB set viewport 1280 800 >/dev/null 2>&1

echo "=============== 13. CONSOLE + ERRORS ==============="
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
