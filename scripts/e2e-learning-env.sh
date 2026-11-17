#!/usr/bin/env bash
# Student learning environment E2E (single call: server + browser).
#
# Covers the four deliverables with a real learner account and real rows:
#   1. Dashboard — every section populated from actual user data.
#   2. Roadmap — pathway states, current marker, planned levels.
#   3. Course catalogue — filters + search; course overview pages.
#   4. Continuity — partial lesson tracked, resume restores position and
#      answers across exit/refresh/back-forward; nothing re-asked.
# Then mobile (375px) and dark-mode checks.
#
# Lesson flow reference (p1-1-1, 38 steps — verified via buildLessonFlow):
#   steps 1–18 content · exercises: ex1@19 ex2@20 ex3@21(fill"hello")
#   ex4@22 ex5@23 ex6@24(fill"hello") ex7@25(speak) ex8@26 ex9@27(listen)
#   passage@28 · ex10@29 ex11@30(fill"friends") ex12@31(write)
#   mistakes@32 revision@33 · ex13@34 ex14@35 ex15@36(fill"yes") ex16@37
#   homework@38.
set -u

cd /home/z/my-project
SHOTS=download/talksy-learning-env/screenshots
mkdir -p "$SHOTS"

# ---- dev server ---------------------------------------------------------
if ! curl -s -o /dev/null http://127.0.0.1:3000/ --max-time 3; then
  (bun run dev > /dev/null 2>&1 &)
  for i in $(seq 1 60); do
    curl -s -o /dev/null http://127.0.0.1:3000/ --max-time 2 && break
    sleep 2
  done
fi
sleep 2
curl -s -o /dev/null -w "server: %{http_code}\n" http://127.0.0.1:3000/ --max-time 20

B="http://127.0.0.1:3000"
FAILS=0
agent-browser set viewport 1440 900 > /dev/null 2>&1
agent-browser cookies clear > /dev/null 2>&1
# clean slate for per-lesson state (debug sessions may leave stale keys)
agent-browser eval "Object.keys(localStorage).filter(k=>k.startsWith('talksy.lp.')).forEach(k=>localStorage.removeItem(k))" > /dev/null 2>&1

snap()  { agent-browser snapshot -c 2>/dev/null; }
snapr() { agent-browser snapshot -c 2>/dev/null; }
# Whole-line matching, then ref extraction — tolerant of a11y attributes
# like [disabled], [checked], [pressed], [expanded] between name and ref.
name_ref() {
  local needle="$1" attempt line ref
  for attempt in 1 2 3; do
    line=$(snapr | grep -F "$needle" | head -1)
    if [ -n "$line" ]; then
      ref=$(echo "$line" | grep -oE 'e[0-9]+' | tail -1)
      if [ -n "$ref" ]; then echo "$ref"; return 0; fi
    fi
    sleep 1.5
  done
  return 1
}
ref_of() { name_ref "$1"; }
radio_ref() {
  local attempt line ref
  for attempt in 1 2 3; do
    line=$(snapr | grep -E 'radio "' | head -1)
    if [ -n "$line" ]; then
      ref=$(echo "$line" | grep -oE 'e[0-9]+' | tail -1)
      if [ -n "$ref" ]; then echo "$ref"; return 0; fi
    fi
    sleep 1.5
  done
  return 1
}
click_ref() {
  local r; r=$(ref_of "$1")
  if [ -z "$r" ]; then
    # fallback: Playwright text selector on the accessible name
    local label; label=$(echo "$1" | sed -E 's/^(button|textbox|radio) "(.*)"$/\2/')
    agent-browser click "text=$label" > /dev/null 2>&1 && return 0
    echo "MISSING REF: $1"; FAILS=$((FAILS+1)); return 1
  fi
  agent-browser click "@$r" > /dev/null 2>&1
}
click_id() { agent-browser click "@$1" > /dev/null 2>&1; }
shot() { agent-browser screenshot "$SHOTS/$1" > /dev/null 2>&1; }
check() { # $1 label, $2 haystack, $3 needle
  if echo "$2" | grep -qF "$3"; then echo "PASS: $1"; else echo "FAIL: $1"; FAILS=$((FAILS+1)); fi
}
check_absent() { # $1 label, $2 haystack, $3 needle (must NOT appear)
  if echo "$2" | grep -qF "$3"; then echo "FAIL: $1"; FAILS=$((FAILS+1)); else echo "PASS: $1"; fi
}
wait_app() { agent-browser wait --load networkidle > /dev/null 2>&1; sleep 3; }

# ---- 1. register a fresh learner ---------------------------------------
agent-browser open "$B/register" > /dev/null 2>&1
wait_app
EMAIL="learner$(date +%s)@talksy.test"
NR=$(ref_of 'textbox "Your name"'); ER=$(ref_of 'textbox "you@example.com"'); PR=$(ref_of 'textbox "Choose a strong password"')
agent-browser fill "@$NR" "Maya Learner" > /dev/null 2>&1
agent-browser fill "@$ER" "$EMAIL" > /dev/null 2>&1
agent-browser fill "@$PR" "learn-env-1" > /dev/null 2>&1
click_ref 'button "Create account"'
sleep 6

# ---- 2. fresh dashboard: honest zeros ----------------------------------
agent-browser open "$B/app#/dashboard" > /dev/null 2>&1
wait_app
D=$(snap)
check "fresh dashboard greets by name" "$D" "Hello, Maya"
check "fresh dashboard shows current level P1" "$D" "Foundations"
check "fresh dashboard shows position Lesson 1 of 30" "$D" "Lesson 1 of 30"
check "fresh dashboard zeros lessons 0/66" "$D" "0/66"
check "fresh today's plan offers first lesson" "$D" "Start: Understanding English"
check "fresh skills show honest empty state" "$D" "No listening exercises recorded yet"
check "fresh vocabulary empty copy" "$D" "Words you meet in lessons appear here"
shot 01-dashboard-fresh.png

# ---- 3. fresh roadmap ----------------------------------------------------
agent-browser open "$B/app#/roadmap" > /dev/null 2>&1
wait_app
R=$(snap)
check "roadmap shows overall position" "$R" "Lesson 1 of 66"
check "roadmap current unit marker" "$R" "You are here"
check "roadmap journey stage Alphabet" "$R" "Alphabet"
check "roadmap planned levels honest" "$R" "In development"
check "roadmap first unit 0/5 lessons" "$R" "0/5 lessons"
shot 02-roadmap-fresh.png

# ---- 4. catalogue + search + filters ------------------------------------
agent-browser open "$B/app#/courses" > /dev/null 2>&1
wait_app
C=$(snap)
check "catalogue counts 18 courses" "$C" "18 of 18 courses"
check "catalogue shows first course" "$C" "First Steps with English"
check "catalogue locked course badge" "$C" "Locked"
click_ref 'button "A1 · Beginner'
sleep 1.5
C2=$(snap)
check "filter by level A1 → 6 courses" "$C2" "6 of 18 courses"
check_absent "A1 filter hides P1 courses" "$C2" "First Steps with English"
click_ref 'button "Clear filters"'
sleep 1
SR=$(ref_of 'searchbox "Search courses"')
agent-browser fill "@$SR" "travel" > /dev/null 2>&1
sleep 1.5
C3=$(snap)
check "search travel → 1 course" "$C3" "1 of 18 courses"
check "search finds Travel and Transport" "$C3" "Take buses, trains and planes in English"
shot 03-courses-filter-search.png

# open the locked a2-4 course overview
click_ref 'button "Travel and Transport'
wait_app
CO=$(snap)
check "locked course page shows banner" "$CO" "This course is locked"
check "locked course lists prerequisite" "$CO" "Unlocks after Daily Life in Depth"
check "locked course still shows modules" "$CO" "Lessons in this course"
shot 04-course-locked.png

# ---- 5. lesson continuity: partial → exit → resume ----------------------
agent-browser open "$B/app#/lesson/p1-1-1" > /dev/null 2>&1
wait_app
L=$(snap)
check "lesson opens with unit context" "$L" "First Steps with English"
check "lesson opens at step 1 (progress 0%)" "$L" "Lesson progress 0%"

# fill answers in flow order: ex3 "hello", ex6 "hello", ex11 "friends", ex15 "yes"
FILL_Q=("hello" "hello" "friends" "yes")

answer_current_exercise() {
  local S; S=$(snap)
  if echo "$S" | grep -qF 'button "Show the model answer"'; then
    local TR; TR=$(ref_of 'textbox "Your written answer"')
    agent-browser fill "@$TR" "Hello" > /dev/null 2>&1
    click_ref 'button "Show the model answer"'
    sleep 1
    click_ref 'button "My answer is close"'
  elif echo "$S" | grep -qF 'button "I said it clearly"'; then
    click_ref 'button "I said it clearly"'
  elif echo "$S" | grep -qF 'button "Start recording"'; then
    # mic UI present (speech recognition advertised): trigger it, then wait
    # bounded for either a transcript result or the self-assess fallback.
    click_ref 'button "Start recording"'
    local w S2
    for w in 1 2 3 4 5 6; do
      sleep 1.5
      S2=$(snap)
      if echo "$S2" | grep -qF 'button "Continue"'; then return 0; fi
      if echo "$S2" | grep -qF 'button "I said it clearly"'; then
        click_ref 'button "I said it clearly"'
        return 0
      fi
    done
  elif echo "$S" | grep -qF 'textbox "Your answer"'; then
    local FR ANS
    FR=$(ref_of 'textbox "Your answer"')
    ANS="${FILL_Q[0]}"
    FILL_Q=("${FILL_Q[@]:1}")
    agent-browser fill "@$FR" "$ANS" > /dev/null 2>&1
    click_ref 'button "Check"'
  else
    local RR; RR=$(radio_ref) || { echo "no radio found"; FAILS=$((FAILS+1)); return 1; }
    click_id "$RR"
    click_ref 'button "Check"'
  fi
}

# Walk to the first exercise (18 content steps), answering nothing.
for i in $(seq 1 22); do
  S=$(snap)
  if echo "$S" | grep -qF 'button "Check"'; then break; fi
  if echo "$S" | grep -qF 'button "Start recording"'; then break; fi
  if echo "$S" | grep -qF 'button "I said it clearly"'; then break; fi
  if echo "$S" | grep -qF 'button "Show the model answer"'; then break; fi
  if echo "$S" | grep -qF 'textbox "Your answer"'; then break; fi
  click_ref 'button "Continue"'
  sleep 0.5
done
S=$(snap)
check "reached first exercise at step 19 (47%)" "$S" "Lesson progress 47%"
check "guided phase label shows" "$S" "Guided practice"

# Answer exactly three exercises, exiting right after the third is recorded.
for i in 1 2 3; do
  answer_current_exercise
  sleep 0.8
  if [ "$i" -lt 3 ]; then click_ref 'button "Continue"'; sleep 0.5; fi
done

S=$(snap)
check "third exercise answered inline" "$S" "Answer recorded"
click_ref 'button "Exit lesson"'
wait_app
CU=$(snap)
check "curriculum shows in-progress badge" "$CU" "In progress · 3 answered"
check "curriculum keeps lock rule for p1-1-2" "$CU" "First Words"

# dashboard resume card from real attempts
agent-browser open "$B/app#/dashboard" > /dev/null 2>&1
wait_app
DR=$(snap)
check "dashboard resume card headline" "$DR" "Continue where you left off"
check "dashboard resume cites real progress" "$DR" "3 of 16 exercises answered"
check "today's plan offers resume" "$DR" "Resume: Understanding English"
shot 05-dashboard-inprogress.png

# localStorage saved the position
LS=$(agent-browser eval "JSON.stringify(Object.keys(localStorage).filter(k=>k.startsWith('talksy.lp.')))" 2>/dev/null)
check "lesson state persisted locally" "$LS" "p1-1-1"

# reopen the lesson: position + answers restored after a real reload
agent-browser open "$B/app#/lesson/p1-1-1" > /dev/null 2>&1
wait_app
agent-browser reload > /dev/null 2>&1
wait_app
LR=$(snap)
check "resume restores position 21 (53%)" "$LR" "Lesson progress 53%"
check "resume shows recorded answer" "$LR" "Answer recorded"
click_ref 'button "Back"'
sleep 1
LB=$(snap)
check "back keeps answer state (ex2 at 50%)" "$LB" "Lesson progress 50%"
check "backed-into exercise still answered" "$LB" "Answer recorded"
click_ref 'button "Continue"'
sleep 1
LF=$(snap)
check "forward returns to saved step (53%)" "$LF" "Lesson progress 53%"
shot 06-lesson-resumed.png

# ---- 6. finish the lesson through the real UI ---------------------------
# remaining fills in flow order: ex6 "hello", ex11 "friends", ex15 "yes"
# The footer is the source of truth: an unanswered exercise replaces the
# Continue button with the hint; content steps and answered exercises (incl.
# speak, whose answered state has no "Answer recorded" text) show Continue.
for i in $(seq 1 100); do
  S=$(snap)
  if echo "$S" | grep -qF "Lesson complete!"; then break; fi
  if echo "$S" | grep -qF 'button "Finish lesson"'; then
    click_ref 'button "Finish lesson"'
    sleep 2.5
    continue
  fi
  if echo "$S" | grep -qF 'button "Continue"'; then
    click_ref 'button "Continue"'
    sleep 0.4
    continue
  fi
  # no Continue → an unanswered exercise on the current step
  answer_current_exercise
  sleep 0.8
  V=$(snap)
  if ! echo "$V" | grep -qF 'button "Continue"'; then
    echo "WARN: answer not registered at iteration $i — state: $(echo "$V" | grep -oE 'progressbar "[^"]*"' | head -1)"
    answer_current_exercise
    sleep 0.8
  fi
  sleep 0.4
done

DONE=$(snap)
if ! echo "$DONE" | grep -qF "Lesson complete!"; then
  echo "--- DEBUG: loop ended without completion; page state:"
  echo "$DONE" | grep -E 'progressbar|button "(Continue|Check|Finish|Back)"|Answer recorded' | head -10
  echo "url: $(agent-browser get url 2>/dev/null)"
fi
check "completion screen shows real summary" "$DONE" "Accuracy"
check "completion screen XP earned" "$DONE" "XP earned"
shot 07-lesson-complete.png

# state cleared after completion
LS2=$(agent-browser eval "JSON.stringify(Object.keys(localStorage).filter(k=>k.startsWith('talksy.lp.')))" 2>/dev/null)
if echo "$LS2" | grep -qF "p1-1-1"; then echo "FAIL: lesson state not cleared after completion"; FAILS=$((FAILS+1)); else echo "PASS: lesson state cleared after completion"; fi

# ---- 7. dashboard with real data ----------------------------------------
agent-browser open "$B/app#/dashboard" > /dev/null 2>&1
wait_app
DA=$(snap)
check "dashboard current level after lesson" "$DA" "Lesson 2 of 30"
check "dashboard lessons completed 1/66" "$DA" "1/66"
check "grammar card shows real accuracy" "$DA" "first-try accuracy"
check "listening card populated" "$DA" "2 attempts across 2 exercises"
check "speaking card practice recorded" "$DA" "practice recorded"
check "writing card self-assessed note" "$DA" "Self-assessed practice — recorded, never scored."
check "vocabulary counts from real rows" "$DA" "8 words encountered"
check "upcoming reviews honest (none due)" "$DA" "Nothing due right now"
check "weekly target from own goal" "$DA" "10 min × 7 days"
check "weekly lessons counter" "$DA" "1 lesson"
check "course progress P1 1/30" "$DA" "1/30"
shot 08-dashboard-realdata.png

# ---- 8. roadmap after completion ----------------------------------------
agent-browser open "$B/app#/roadmap" > /dev/null 2>&1
wait_app
RA=$(snap)
check "roadmap advanced to lesson 2 of 66" "$RA" "Lesson 2 of 66"
check "roadmap unit shows 1/5 lessons" "$RA" "1/5 lessons"
check_absent "roadmap stale in-progress badge gone" "$RA" "exercises in progress"
check "roadmap current unit marker after lesson" "$RA" "Current"
shot 09-roadmap-after.png

# ---- 9. catalogue + course overview states after completion --------------
agent-browser open "$B/app#/courses" > /dev/null 2>&1
wait_app
CA=$(snap)
check "p1-1 in-progress badge after one lesson" "$CA" "In progress"
click_ref 'button "First Steps with English'
wait_app
CD=$(snap)
check "course p1-1 in-progress banner" "$CD" "In progress"
check "course p1-1 progress 1 of 5" "$CD" "1 of 5 lessons complete"
check "course p1-1 best average shown" "$CD" "Average best score"
check "course p1-1 modules show best scores" "$CD" "Best "
check "course p1-1 objectives listed" "$CD" "What you'll learn"
shot 10-course-p1-1-completed.png

agent-browser open "$B/app#/course/p1-2" > /dev/null 2>&1
wait_app
CP=$(snap)
check "course p1-2 locked banner (unit not finished)" "$CP" "This course is locked"
check "course p1-2 prerequisite label" "$CP" "Unlocks after First Steps with English"
check_absent "course p1-2 has no start CTA while locked" "$CP" "Start lesson"
check "course p1-2 skills developed" "$CP" "SKILLS DEVELOPED"
check "course p1-2 assessment info" "$CP" "ASSESSMENT"
shot 11-course-p1-2.png

# ---- 10. mobile 375px ----------------------------------------------------
agent-browser set viewport 375 812 > /dev/null 2>&1
declare -a PAGES=("dashboard" "roadmap" "courses" "course/p1-2" "lesson/p1-1-2")
declare -a NAMES=("12-dashboard-mobile" "13-roadmap-mobile" "14-courses-mobile" "15-course-mobile" "16-lesson-mobile")
for idx in "${!PAGES[@]}"; do
  agent-browser open "$B/app#/${PAGES[$idx]}" > /dev/null 2>&1
  wait_app
  shot "${NAMES[$idx]}.png"
  OF=$(agent-browser eval "document.documentElement.scrollWidth <= window.innerWidth" 2>/dev/null)
  if [ "$OF" = "true" ]; then echo "PASS: no horizontal overflow on ${PAGES[$idx]} (375px)"; else echo "FAIL: horizontal overflow on ${PAGES[$idx]} (375px)"; FAILS=$((FAILS+1)); fi
done
MN=$(snap)
check "mobile bottom nav has Roadmap" "$MN" "ROADMAP"

# ---- 11. dark mode --------------------------------------------------------
agent-browser set viewport 1440 900 > /dev/null 2>&1
agent-browser set media dark > /dev/null 2>&1
agent-browser open "$B/app#/dashboard" > /dev/null 2>&1
wait_app
shot 17-dashboard-dark.png
agent-browser open "$B/app#/roadmap" > /dev/null 2>&1
wait_app
shot 18-roadmap-dark.png
agent-browser set media light > /dev/null 2>&1

# ---- dev.log sanity ------------------------------------------------------
if grep -qiE "error|warn" dev.log 2>/dev/null; then
  grep -iE "error|warn" dev.log | grep -viE "chunk|favicon|Compiled|compiling" | head -5
fi

echo "--------------------------------------------------"
if [ "$FAILS" -eq 0 ]; then echo "RESULT: all checks passed"; else echo "RESULT: $FAILS check(s) failed"; exit 1; fi
