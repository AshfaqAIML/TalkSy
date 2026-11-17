#!/usr/bin/env bash
# P1 structured-lesson smoke test (single call: server + browser, because the
# sandbox reaps background processes between tool calls).
#
# Verifies: registration → P1 lesson opens → structured renderers (intro with
# draft badge + objectives, concept, teach steps) → phase label on first
# exercise → zero console errors.

set -u
PASS=0; FAIL=0
ok()   { echo "PASS: $1"; PASS=$((PASS+1)); }
bad()  { echo "FAIL: $1"; FAIL=$((FAIL+1)); }

cleanup() { pkill -f "next dev" 2>/dev/null; }
trap cleanup EXIT

# ---- 1. start dev server --------------------------------------------------
cd /home/z/my-project
bun run dev > /dev/null 2>&1 &
for i in $(seq 1 40); do
  curl -s -o /dev/null http://127.0.0.1:3000/ --max-time 2 && break
  sleep 2
done
sleep 2
curl -s -o /dev/null -w "" http://127.0.0.1:3000/ --max-time 10 || { bad "server did not start"; exit 1; }
ok "dev server up"

# ---- 2. register a fresh user ----------------------------------------------
ref_of() { agent-browser snapshot -i -c 2>/dev/null | grep -oE '(textbox|button) "[^"]*" \[ref=e[0-9]+\]' | grep -F "$1" | grep -oE 'e[0-9]+' | head -1; }
agent-browser open "http://127.0.0.1:3000/#/register" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 3
EMAIL="smoke$(date +%s)@talksy.test"
if agent-browser snapshot -c 2>/dev/null | grep -q 'textbox "Your name"'; then
  NR=$(ref_of 'textbox "Your name"'); ER=$(ref_of 'textbox "you@example.com"'); PR=$(ref_of 'textbox "Choose a strong password"'); CR=$(ref_of 'button "Create account"')
  echo "refs: name=$NR email=$ER pass=$PR create=$CR"
  [ -n "$NR" ] && [ -n "$ER" ] && [ -n "$PR" ] && [ -n "$CR" ] && ok "register form found" || bad "register form fields not found"
  agent-browser fill "@$NR" "P1 Smoke Tester" > /dev/null 2>&1
  agent-browser fill "@$ER" "$EMAIL" > /dev/null 2>&1
  agent-browser fill "@$PR" "smoke-test-123" > /dev/null 2>&1
  agent-browser click "@$CR" > /dev/null 2>&1
  sleep 5
  DASH=$(agent-browser snapshot -c 2>/dev/null | grep -ciE "dashboard|continue learning|welcome back|your path" || true)
  [ "$DASH" -gt 0 ] && ok "registered + logged in ($EMAIL)" || bad "registration did not reach dashboard"
else
  ok "already authenticated from a previous run (register form hidden)"
fi

# ---- 3. open P1 lesson p1-1-1 ----------------------------------------------
agent-browser open "http://127.0.0.1:3000/#/lesson/p1-1-1" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 4
S=$(agent-browser snapshot -c 2>/dev/null)
echo "$S" | grep -q "Welcome to this lesson" && ok "intro step (section 1) renders" || bad "intro step missing"
echo "$S" | grep -qi "Draft content" && ok "draft-content governance badge shown" || bad "draft badge missing"
echo "$S" | grep -q "By the end of this lesson" && ok "objectives (section 2) render" || bad "objectives missing"
echo "$S" | grep -q "Before you start, you should know" || echo "note: p1-1-1 has no prerequisites (expected, first lesson)"
agent-browser screenshot /tmp/render/p1-intro-step.png > /dev/null 2>&1 || agent-browser screenshot /home/z/my-project/scripts/p1-intro-step.png > /dev/null 2>&1

# ---- 4. continue to concept + teach steps ----------------------------------
click_continue() {
  local r
  r=$(agent-browser snapshot -i -c 2>/dev/null | grep -oE 'button "Continue" \[ref=e[0-9]+\]' | grep -oE 'e[0-9]+' | head -1)
  [ -n "$r" ] && agent-browser click "@$r" > /dev/null 2>&1
}
for i in $(seq 1 10); do
  click_continue
  sleep 1
done
S=$(agent-browser snapshot -c 2>/dev/null)
echo "$S" | grep -qiE "Step [0-9]" && ok "teach steps (section 5) render" || bad "teach steps not reached"
agent-browser screenshot /tmp/render/p1-teach-step.png > /dev/null 2>&1

# ---- 5. continue to first exercise (phase label check) ----------------------
# remaining teach steps + examples + dialogue + real-life, then guided practice
for i in $(seq 1 14); do
  S=$(agent-browser snapshot -c 2>/dev/null)
  if echo "$S" | grep -q "Guided practice"; then break; fi
  click_continue
  sleep 1
done
S=$(agent-browser snapshot -c 2>/dev/null)
echo "$S" | grep -q "Guided practice" && ok "exercise phase label 'Guided practice' (section 8) renders" || bad "guided practice not reached"
agent-browser screenshot /tmp/render/p1-guided-exercise.png > /dev/null 2>&1

# ---- 6. console errors -------------------------------------------------------
ERRS=$(agent-browser errors 2>/dev/null | grep -vc "^\s*$" || true)
[ "$ERRS" -eq 0 ] && ok "zero page errors" || { bad "$ERRS page errors"; agent-browser errors 2>/dev/null | head -5; }

echo ""
echo "=== SMOKE RESULT: $PASS pass, $FAIL fail ==="
exit $FAIL
