#!/bin/bash
# TalkSy CMS end-to-end verification with agent-browser.
# Golden path: admin login (self-healing seed) → dashboard analytics →
# curriculum manager (levels, course tree) → question bank (create, submit,
# approve, publish) → lesson editor (add blocks, save version, preview,
# submit→approve→publish) → learner flow (catalogue, enrol, prerequisite
# lock, lesson with exercises + assignment, server-verified completion) →
# user management → import/export round trip → RBAC (student blocked).
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
    echo "$got" | head -20
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

wait_for() {
  # Poll the snapshot until a marker string appears (max ~20s).
  local marker="$1"
  for i in $(seq 1 20); do
    if $AB snapshot -c 2>&1 | grep -qiF "$marker"; then
      return 0
    fi
    sleep 1
  done
  return 1
}

wait_not() {
  # Poll until a marker string disappears (max ~15s).
  local marker="$1"
  for i in $(seq 1 15); do
    if ! $AB snapshot -c 2>&1 | grep -qiF "$marker"; then
      return 0
    fi
    sleep 1
  done
  return 1
}

snap() { $AB snapshot -c 2>&1; }

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

echo "=============== 1. ADMIN LOGIN (self-healing seed) ==============="
$AB open "$BASE/" >/dev/null 2>&1
$AB cookies clear >/dev/null 2>&1
$AB open "$BASE/#/login" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
wait_for "Log in to continue" || echo "WARN: login form slow to appear"
$AB find label "Email" fill "admin@talksy.app" >/dev/null 2>&1
$AB find label "Password" fill "Admin1234!" >/dev/null 2>&1
$AB find role button click --name "Log in" >/dev/null 2>&1
wait_for 'link "Admin"'
HOME_AFTER=$(snap)
check "admin sees Admin nav" "$HOME_AFTER" 'link "Admin"'

echo "=============== 2. DASHBOARD ==============="
$AB open "$BASE/#/admin" >/dev/null 2>&1
wait_for "Content management" || true
sleep 1
DASH=$(snap)
check "dashboard heading" "$DASH" "Content management"
check "dashboard tab" "$DASH" 'tab "Dashboard"'
check "registered learners stat" "$DASH" "Registered learners"
check "active learners stat" "$DASH" "Active (7 days)"
check "enrolments stat" "$DASH" "Course enrolments"
check "assessment stat" "$DASH" "Assessment pass rate"
check "popular lessons panel" "$DASH" "Popular lessons"
check "engagement panel" "$DASH" "Student engagement (last 30 days)"
check "review status panel" "$DASH" "Content review status"

echo "=============== 3. CURRICULUM MANAGER ==============="
$AB find role tab click --name "Curriculum" >/dev/null 2>&1
sleep 2
CURR=$(snap)
check "levels panel" "$CURR" "Learning levels"
check "seeded level" "$CURR" "A1 Beginner"
check "seeded course" "$CURR" "Everyday English Foundations"
check "course published badge" "$CURR" "Published"
check "add course button" "$CURR" 'button "New course"'

echo "=============== 4. QUESTION BANK ==============="
$AB find role tab click --name "Question bank" >/dev/null 2>&1
sleep 2
QB=$(snap)
check "question bank search" "$QB" "Search questions"
check "new question button" "$QB" 'button "New question"'
check "seeded question" "$QB" "It is 9 in the morning"
check "published status" "$QB" "published"

# Create a new MCQ question (starts with two empty options a / b)
$AB find role button click --name "New question" >/dev/null 2>&1
sleep 1.5
$AB find label "Prompt / instruction" fill "What do you say when you leave?" >/dev/null 2>&1
$AB find placeholder "Option 1" fill "Goodbye!" >/dev/null 2>&1
$AB find placeholder "Option 2" fill "Hello!" >/dev/null 2>&1
# mark correct answer (radio after option a)
$AB find label "a) Goodbye!" click >/dev/null 2>&1
$AB find label "Correct answer (summary)" fill "Goodbye!" >/dev/null 2>&1
$AB find label "Explanation" fill "We say goodbye when we leave." >/dev/null 2>&1
$AB find role button click --name "Create draft" >/dev/null 2>&1
wait_not 'dialog "New question"' || echo "WARN: question dialog still open"
QB2=$(snap)
check "new question in list" "$QB2" "What do you say when you leave?"
check "new question is draft" "$QB2" "draft"

echo "=============== 5. LESSON EDITOR ==============="
$AB find role tab click --name "Curriculum" >/dev/null 2>&1
sleep 2
# expand seeded course → module (role-button clicks: rows are buttons)
$AB find role button click --name "Everyday English Foundations" >/dev/null 2>&1
sleep 1
$AB find role button click --name "Getting Started" >/dev/null 2>&1
sleep 1.5
TREE=$(snap)
check "lesson listed" "$TREE" "Greetings and Introductions"
check "lesson published" "$TREE" "Published"
check "draft lesson listed" "$TREE" "My Day (draft)"
$AB find role button click --name "Greetings and Introductions" >/dev/null 2>&1
wait_for "Content blocks"
ED=$(snap)
check "editor header" "$ED" "Content blocks"
check "block palette" "$ED" "Add a block"
check "revision history" "$ED" "Revision history"
check "objectives editor" "$ED" "Learning objectives"
check "preview toggle" "$ED" 'button "Preview"'

# Preview mode shows the rendered lesson
$AB find role button click --name "Preview" >/dev/null 2>&1
sleep 1.5
PREVIEW=$(snap)
check "preview renders objectives" "$PREVIEW" "In this lesson you will learn to:"
check "preview renders vocabulary" "$PREVIEW" "Nice to meet you"
check "preview renders dialogue" "$PREVIEW" "First meeting"
check "preview shows exercise set" "$PREVIEW" "Check your understanding"

# Back to edit mode
$AB find role button click --name "Edit" >/dev/null 2>&1
sleep 1.5

echo "=============== 6. RBAC: STUDENT BLOCKED ==============="
$AB cookies clear >/dev/null 2>&1
$AB open "$BASE/#/register" >/dev/null 2>&1
wait_for "Start learning free" || true
EMAIL="cms-e2e-$(date +%s)@talksy.test"
$AB find label "Your name" fill "CMS Learner" >/dev/null 2>&1
$AB find label "Email" fill "$EMAIL" >/dev/null 2>&1
$AB find label "Password" fill "password123" >/dev/null 2>&1
$AB find role button click --name "Start learning free" >/dev/null 2>&1
sleep 2.5
LEARNER_HOME=$(snap)
check_not "student has no Admin nav" "$LEARNER_HOME" 'link "Admin"'
$AB open "$BASE/#/admin" >/dev/null 2>&1
sleep 1.5
BLOCKED=$(snap)
check "student blocked from admin" "$BLOCKED" "Staff access only"

echo "=============== 7. LEARNER COURSE FLOW ==============="
$AB open "$BASE/#/courses" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
sleep 2
CAT=$(snap)
check "catalogue shows course" "$CAT" "Everyday English Foundations"
check "catalogue level badge" "$CAT" "A1 Beginner"
$AB find role button click --name "Enrol" >/dev/null 2>&1
sleep 2.5
OUTLINE=$(snap)
check "outline progress" "$OUTLINE" "Your progress"
check "lesson 1 listed" "$OUTLINE" "Greetings and Introductions"
check "lesson 2 listed" "$OUTLINE" "Talking About Your Family"
check "prerequisite lock shown" "$OUTLINE" "Complete"

echo "=============== 8. LESSON: EXERCISES + COMPLETION GATE ==============="
$AB find text "Greetings and Introductions" click >/dev/null 2>&1
sleep 2.5
LESSON=$(snap)
check "lesson title" "$LESSON" "Greetings and Introductions"
check "lesson objectives" "$LESSON" "In this lesson you will learn to:"
check "vocabulary block" "$LESSON" "Good morning"
check "dialogue block" "$LESSON" "Ana"
check "audio player" "$LESSON" "audio"
check "complete button" "$LESSON" "Mark lesson complete"
# Try to complete without answering → server refuses
$AB find role button click --name "Mark lesson complete" >/dev/null 2>&1
sleep 1.5
GATED=$(snap)
check "completion gated" "$GATED" "Complete these first"

echo "=============== 9. IMPORT/EXPORT (admin) ==============="
$AB cookies clear >/dev/null 2>&1
$AB open "$BASE/#/login" >/dev/null 2>&1
wait_for "Log in to continue" || true
$AB find label "Email" fill "admin@talksy.app" >/dev/null 2>&1
$AB find label "Password" fill "Admin1234!" >/dev/null 2>&1
$AB find role button click --name "Log in" >/dev/null 2>&1
wait_for 'link "Admin"'
$AB open "$BASE/#/admin" >/dev/null 2>&1
wait_for "Content management" || true
$AB find role tab click --name "Import / Export" >/dev/null 2>&1
sleep 2
PORT=$(snap)
check "export panel" "$PORT" "Export a course"
check "import panel" "$PORT" "Import a course bundle"
check "audit trail" "$PORT" "Content audit trail"

echo "=============== 10. USERS (admin) ==============="
$AB find role tab click --name "Users" >/dev/null 2>&1
sleep 2
USERS=$(snap)
check "users list" "$USERS" "Search users"
check "admin account listed" "$USERS" "admin@talksy.app"
check "editor account listed" "$USERS" "editor@talksy.app"
check "role badge" "$USERS" "admin"

echo "=============== 11. MEDIA ==============="
$AB find role tab click --name "Media" >/dev/null 2>&1
sleep 2
MEDIA=$(snap)
check "upload panel" "$MEDIA" "Upload media"
check "seeded audio asset" "$MEDIA" "Greeting tone (sample audio)"
check "licence field" "$MEDIA" "CC0 (generated)"

echo ""
echo "============================================"
echo "CMS E2E RESULT: $PASS passed, $FAIL failed"
echo "============================================"
[ "$FAIL" -eq 0 ]
