#!/usr/bin/env bash
# Design-system visual verification (single call: server + browser).
# Captures the new identity across views, themes and viewports, and
# exercises the registration → dashboard path with the new app shell.
set -u

cd /home/z/my-project
OUT=/tmp/render
mkdir -p "$OUT"

cleanup() { pkill -f "next dev" 2>/dev/null; }
trap cleanup EXIT

# ---- 1. start dev server --------------------------------------------------
bun run dev > /dev/null 2>&1 &
for i in $(seq 1 40); do
  curl -s -o /dev/null http://127.0.0.1:3000/ --max-time 2 && break
  sleep 2
done
sleep 2
curl -s -o /dev/null -w "server: %{http_code}\n" http://127.0.0.1:3000/ --max-time 15

B="http://127.0.0.1:3000"
ref_of() { agent-browser snapshot -i -c 2>/dev/null | grep -oE '(textbox|button) "[^"]*" \[ref=e[0-9]+\]' | grep -F "$1" | grep -oE 'e[0-9]+' | head -1; }
click_ref() { local r; r=$(ref_of "$1"); [ -n "$r" ] && agent-browser click "@$r" > /dev/null 2>&1; }

# ---- 2. landing (desktop, signed out) --------------------------------------
agent-browser set viewport 1440 900 > /dev/null 2>&1
agent-browser cookies clear > /dev/null 2>&1
agent-browser open "$B/#/" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 3
agent-browser screenshot "$OUT/01-landing-desktop.png" > /dev/null 2>&1
echo "shot: landing desktop"

# ---- 3. register a fresh user → dashboard with new shell ----------------
# Full reload first so the SPA store resets along with the cleared cookies.
agent-browser open "$B/" > /dev/null 2>&1
agent-browser reload > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 2
agent-browser open "$B/#/register" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 3
EMAIL="ds$(date +%s)@talksy.test"
if agent-browser snapshot -c 2>/dev/null | grep -q 'textbox "Your name"'; then
  NR=$(ref_of 'textbox "Your name"'); ER=$(ref_of 'textbox "you@example.com"'); PR=$(ref_of 'textbox "Choose a strong password"'); CR=$(ref_of 'button "Create account"')
  agent-browser fill "@$NR" "Design Tester" > /dev/null 2>&1
  agent-browser fill "@$ER" "$EMAIL" > /dev/null 2>&1
  agent-browser fill "@$PR" "design-test-123" > /dev/null 2>&1
  agent-browser click "@$CR" > /dev/null 2>&1
  sleep 6
  DASH=$(agent-browser snapshot -c 2>/dev/null | grep -ciE "dashboard|continue learning|welcome back|your path" || true)
  echo "dashboard after register: $DASH matches (expect >0)"
else
  echo "WARN: register form not visible (session?)"
fi
agent-browser screenshot "$OUT/02-dashboard-light.png" > /dev/null 2>&1
echo "shot: dashboard light"

# ---- 4. dark theme dashboard -------------------------------------------------
click_ref 'button "Toggle theme"'
sleep 2
agent-browser screenshot "$OUT/03-dashboard-dark.png" > /dev/null 2>&1
click_ref 'button "Toggle theme"'
sleep 1

# ---- 5. curriculum -----------------------------------------------------------
agent-browser open "$B/#/curriculum" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 4
agent-browser screenshot "$OUT/04-curriculum.png" > /dev/null 2>&1
echo "shot: curriculum"

# ---- 6. lesson with vocabulary rail (xl) --------------------------------------
agent-browser open "$B/#/lesson/p1-1-1" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 4
RAIL=$(agent-browser snapshot -c 2>/dev/null | grep -ci "words in this lesson" || true)
echo "lesson vocab rail visible: $RAIL (expect 1)"
agent-browser screenshot "$OUT/05-lesson-rail.png" > /dev/null 2>&1
echo "shot: lesson"

# ---- 7. design system guide -----------------------------------------------------
agent-browser open "$B/#/design" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 4
agent-browser screenshot "$OUT/06-design-top.png" > /dev/null 2>&1
agent-browser scroll down 2400 > /dev/null 2>&1
sleep 2
agent-browser screenshot "$OUT/07-design-components.png" > /dev/null 2>&1
agent-browser scroll down 2600 > /dev/null 2>&1
sleep 2
agent-browser screenshot "$OUT/08-design-feedback.png" > /dev/null 2>&1
echo "shot: design guide (3 sections)"

# ---- 8. mobile viewport ----------------------------------------------------------
agent-browser set viewport 390 844 > /dev/null 2>&1
agent-browser open "$B/#/dashboard" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 4
BOTTOMNAV=$(agent-browser snapshot -c 2>/dev/null | grep -ciE "curriculum|practice" || true)
echo "mobile bottom nav present: $BOTTOMNAV (expect >0)"
agent-browser screenshot "$OUT/09-dashboard-mobile.png" > /dev/null 2>&1
agent-browser open "$B/#/" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 3
agent-browser screenshot "$OUT/10-landing-mobile.png" > /dev/null 2>&1
agent-browser open "$B/#/design" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 3
agent-browser screenshot "$OUT/11-design-mobile.png" > /dev/null 2>&1
echo "shot: mobile views"

# ---- 9. console errors --------------------------------------------------------------
ERRS=$(agent-browser errors 2>/dev/null | grep -vc "^\s*$" || true)
echo "page errors: $ERRS"
[ "$ERRS" -gt 0 ] && agent-browser errors 2>/dev/null | head -8

echo "=== VISUAL PASS DONE ==="
ls -la "$OUT"
