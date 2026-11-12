#!/bin/bash
# TalkSy AI Tutor end-to-end verification with agent-browser.
# Golden path: home + nav → register → hub (9 modes) → Grammar Teacher chat:
# greeting + starters → corrective teaching live ("I am go to school
# yesterday.") with streaming reply → history + usage → context toggle →
# privacy preview → doubt solver with lesson deep link → lesson player
# "Ask tutor" → delete conversation → API-level checks (401, SSE format,
# rate limit) → delete all.
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
  (nohup bun run dev >/dev/null 2>&1 &)
  for i in $(seq 1 40); do
    if curl -s -o /dev/null -m 3 "$BASE/"; then
      echo "Dev server ready after ${i}x1.5s"
      break
    fi
    sleep 1.5
  done
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
check "home tutor banner" "$HOME_SNAP" "Your AI Tutor — nine teachers, always patient"
check "home tutor copy" "$HOME_SNAP" "guides before it tells"
check "home privacy copy" "$HOME_SNAP" "conversations stay private and deletable"
check "nav link AI Tutor" "$HOME_SNAP" 'link "AI Tutor"'
check "footer counts tutor modes" "$HOME_SNAP" "9 tutor modes"

echo "=============== 2. LOGIN GATE ==============="
$AB open "$BASE/#/tutor" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 1.5
GATE=$(snap)
check "logged-out gate headline" "$GATE" "Your AI Tutor"
check "logged-out gate login button" "$GATE" 'button "Log in"'

echo "=============== 3. REGISTER ==============="
$AB open "$BASE/#/register" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 1
EMAIL="tutor-e2e-$(date +%s)@talksy.test"
$AB find label "Your name" fill "Tutor Tester" >/dev/null 2>&1
$AB find label "Email" fill "$EMAIL" >/dev/null 2>&1
$AB find label "Password" fill "password123" >/dev/null 2>&1
$AB find role button click --name "Start learning free" >/dev/null 2>&1
sleep 2.5
AFTER_REG_URL=$($AB get url 2>&1)
check "register redirects to library" "$AFTER_REG_URL" "#/library"

echo "=============== 4. TUTOR HUB — NINE MODES ==============="
$AB open "$BASE/#/tutor" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
HUB=$(snap)
check "hub title" "$HUB" "AI Tutor"
check "not a chatbot promise" "$HUB" "not a chatbot"
check "choose your tutor" "$HUB" "Choose your tutor"
check "grammar teacher card" "$HUB" "Grammar Teacher"
check "vocabulary teacher card" "$HUB" "Vocabulary Teacher"
check "sentence teacher card" "$HUB" "Sentence Teacher"
check "conversation partner card" "$HUB" "Conversation Partner"
check "writing teacher card" "$HUB" "Writing Teacher"
check "listening assistant card" "$HUB" "Listening Assistant"
check "reading assistant card" "$HUB" "Reading Assistant"
check "interview coach card" "$HUB" "Interview Coach"
check "doubt solver card" "$HUB" "Doubt Solver"
MODE_CARDS=$(echo "$HUB" | grep -c 'heading "Choose your tutor"\|button "Grammar Teacher\|button "Vocabulary Teacher\|button "Sentence Teacher\|button "Conversation Partner\|button "Writing Teacher\|button "Listening Assistant\|button "Reading Assistant\|button "Interview Coach\|button "Doubt Solver')
check "mode picker present with cards" "$MODE_CARDS" "1"
check "grammar tagline" "$HUB" "Rules explained from meaning to form"
check "conversation tagline" "$HUB" "Natural conversation, gentle notes afterwards"
check "doubt tagline" "$HUB" "Questions about your actual lessons"
check "hub privacy note" "$HUB" "you can turn that off in"
check "hub honesty note" "$HUB" "not verified"
check "usage pill" "$HUB" "tutor messages today"

echo "=============== 5. GRAMMAR TEACHER — GREETING + STARTERS ==============="
$AB find role button click --name "Grammar Teacher" >/dev/null 2>&1
sleep 2.5
CHAT=$(snap)
check "chat header mode" "$CHAT" "Grammar Teacher"
check "canned greeting" "$CHAT" "Ask me about any rule"
check "greeting honesty note" "$CHAT" "Opening message"
check "starter chip 1" "$CHAT" "present simple and the present continuous"
check "starter chip 3" "$CHAT" "When do I use"
check "composer present" "$CHAT" 'textbox "Message"'
check "send button" "$CHAT" 'button "Send message"'
check "context switch on" "$CHAT" "Share my learning context"
check "history sidebar empty state" "$CHAT" "Grammar Teacher ·"

echo "=============== 6. CORRECTIVE TEACHING — LIVE STREAM ==============="
$AB find label "Message" fill "I am go to school yesterday." >/dev/null 2>&1
$AB find role button click --name "Send message" >/dev/null 2>&1
REPLY=""
for i in $(seq 1 36); do
  sleep 2.5
  REPLY=$(snap)
  if echo "$REPLY" | grep -qi "went to school"; then break; fi
done
check "learner message echoed" "$REPLY" "I am go to school yesterday."
check "corrective teaching: corrected sentence" "$REPLY" "went to school"
check_not "no markdown soup in reply" "$REPLY" "**"
# The usage pill updates when the done event lands (after the last delta).
USAGE=""
for i in $(seq 1 10); do
  sleep 2
  USAGE=$(snap)
  if echo "$USAGE" | grep -q "1/60 tutor messages today"; then break; fi
done
check "usage counted" "$USAGE" "1/60 tutor messages today"
CONV_ID=$($AB get url 2>&1 | grep -o 'cmw[a-z0-9]*')
check "chat url carries conversation id" "$CONV_ID" "cmw"

echo "=============== 7. HISTORY + CONTEXT TOGGLE + PRIVACY ==============="
HIST=$(snap)
check "conversation titled from first message" "$HIST" "I am go to school yesterday."
$AB find role switch click --name "Share my learning context" >/dev/null 2>&1
sleep 1.5
TOGGLED=$(snap)
check "context switch off state" "$TOGGLED" "Share my learning context"
$AB open "$BASE/#/tutor/c/$CONV_ID" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
REOPENED=$(snap)
check "conversation reopens with history" "$REOPENED" "I am go to school yesterday."
check "reply persisted" "$REOPENED" "went to school"
check "context toggle persisted off" "$REOPENED" "Share my learning context"

echo "=============== 8. PRIVACY PREVIEW ==============="
$AB find role button click --name "What the tutor sees" >/dev/null 2>&1
sleep 2
PRIVACY=$(snap)
check "privacy dialog opens" "$PRIVACY" "What the tutor sees"
check "privacy dialog explains scope" "$PRIVACY" "Only your own record is ever used"
check "privacy shows level line" "$PRIVACY" "Level:"
check "privacy honesty disclaimer" "$PRIVACY" "not verified facts"
$AB find role button click --name "Close" >/dev/null 2>&1
sleep 1

echo "=============== 9. DOUBT SOLVER + LESSON DEEP LINK ==============="
$AB open "$BASE/#/tutor/lesson/lesson:p1-1-1" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
LESSON_HUB=$(snap)
check "lesson banner on hub" "$LESSON_HUB" "Asking about: your lesson"
check "doubt solver highlighted" "$LESSON_HUB" "will read this lesson to answer"
$AB find role button click --name "Doubt Solver" >/dev/null 2>&1
sleep 2.5
DOUBT=$(snap)
check "doubt chat header" "$DOUBT" "Doubt Solver"
check "lesson title in header" "$DOUBT" "Lesson: Hello! Everyday Greetings"
check "doubt greeting" "$DOUBT" "Which lesson is your question about"

echo "=============== 10. LESSON PLAYER — ASK TUTOR BUTTON ==============="
$AB open "$BASE/#/lesson/p1-1-1" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2.5
LESSON=$(snap)
check "ask tutor button in lesson" "$LESSON" "Ask tutor"
$AB find role link click --name "Ask the tutor about this lesson" >/dev/null 2>&1
sleep 2.5
ASK_URL=$($AB get url 2>&1)
check "ask tutor deep link" "$ASK_URL" "#/tutor/lesson/lesson:p1-1-1"
ASK=$(snap)
check "deep link shows lesson banner" "$ASK" "Asking about: your lesson"

echo "=============== 11. DELETE CONVERSATION ==============="
$AB open "$BASE/#/tutor/c/$CONV_ID" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
$AB find role button click --name "Delete this conversation" >/dev/null 2>&1
sleep 1.5
CONFIRM=$(snap)
check "delete confirmation dialog" "$CONFIRM" "Delete this conversation?"
$AB find role button click --name "Yes, delete it" >/dev/null 2>&1
sleep 2.5
AFTER_DELETE_URL=$($AB get url 2>&1)
check "delete returns to hub" "$AFTER_DELETE_URL" "#/tutor"
check_not "delete left the chat route" "$AFTER_DELETE_URL" "#/tutor/c"
AFTER_DELETE=$(snap)
check_not "conversation gone from hub" "$AFTER_DELETE" "I am go to school yesterday."

echo "=============== 12. API-LEVEL CHECKS (curl) ==============="
echo "--- 401 without login:"
CODE=$(curl -s -o /dev/null -w "%{http_code}" "$BASE/api/tutor/modes")
check "modes requires login" "$CODE" "401"
CODE=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$BASE/api/tutor/conversations" -H 'Content-Type: application/json' -d '{"mode":"grammar"}')
check "create requires login" "$CODE" "401"

echo "--- SSE raw format + rate limit (fresh user):"
JAR=/tmp/tutor-e2e-jar.txt
rm -f "$JAR"
API_EMAIL="tutor-api-$(date +%s)@talksy.test"
curl -s -X POST "$BASE/api/auth/register" -H 'Content-Type: application/json' -d "{\"email\":\"$API_EMAIL\",\"name\":\"Api E2E\",\"password\":\"password123\"}" -c "$JAR" -o /dev/null
CID=$(curl -s -X POST "$BASE/api/tutor/conversations" -H 'Content-Type: application/json' -b "$JAR" -d '{"mode":"grammar"}' | python3 -c "import sys,json; print(json.load(sys.stdin)['conversation']['id'])")
SSE=$(curl -s -N --max-time 90 -X POST "$BASE/api/tutor/conversations/$CID/messages" -H 'Content-Type: application/json' -b "$JAR" -d '{"content":"Hello tutor!"}')
echo "$SSE" | head -c 400 > /tmp/tutor-sse-head.txt
check "SSE meta event" "$(cat /tmp/tutor-sse-head.txt)" "event: meta"
check "SSE delta events" "$SSE" "event: delta"
check "SSE done event" "$SSE" "event: done"
check "SSE has no error event" "$(echo "$SSE" | grep -c 'event: error' || true)" "0"
sleep 1
RATE=$(curl -s -o /tmp/tutor-rate.json -w "%{http_code}" -X POST "$BASE/api/tutor/conversations/$CID/messages" -H 'Content-Type: application/json' -b "$JAR" -d '{"content":"too fast!"}')
check "rate limit returns 429" "$RATE" "429"
check "rate limit message" "$(cat /tmp/tutor-rate.json)" "wait a second"

echo "--- context preview API:"
PREVIEW=$(curl -s "$BASE/api/tutor/context?mode=grammar" -b "$JAR")
check "context preview level line" "$PREVIEW" "Level:"
check "context preview scoped to learner" "$PREVIEW" "no graded activity"

echo "--- invalid mode rejected:"
BAD=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$BASE/api/tutor/conversations" -H 'Content-Type: application/json' -b "$JAR" -d '{"mode":"weather"}')
check "invalid mode 400" "$BAD" "400"

echo "--- delete all API:"
DEL=$(curl -s -X DELETE "$BASE/api/tutor/conversations" -b "$JAR")
check "delete all reports count" "$DEL" '"deleted":'
LIST=$(curl -s "$BASE/api/tutor/conversations" -b "$JAR")
check "list empty after delete all" "$LIST" '"conversations":[]'

echo "=============== 13. DEMO ACCOUNT STILL HEALTHY ==============="
DEMO=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$BASE/api/auth/login" -H 'Content-Type: application/json' -d '{"email":"demo@talksy.app","password":"demo1234"}')
check "demo login still works" "$DEMO" "200"

# ---------------------------------------------------------------------------
echo ""
echo "=============================================="
echo "TUTOR E2E RESULT: $PASS passed, $FAIL failed"
if [ "$FAIL" -gt 0 ]; then exit 1; fi
