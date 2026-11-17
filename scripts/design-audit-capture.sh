#!/usr/bin/env bash
# TalkSy visual audit capture — desktop 1440, authed views, admin, mobile 390
set -u
AB="agent-browser --session talksy"
OUT=/home/z/my-project/docs/design/assets/talksy

shot() { # shot <route> <file> [extra-wait-ms]
  $AB open "http://localhost:3000/#/$1" >/dev/null 2>&1
  $AB wait --load networkidle >/dev/null 2>&1 || true
  [ -n "${3:-}" ] && $AB wait "$3" >/dev/null 2>&1 || true
  $AB screenshot --full "$OUT/$2" >/dev/null 2>&1
  echo "captured $2"
}

echo "== Desktop 1440 public views =="
shot "library"    "02-library-1440.png" 600
shot "courses"    "03-courses-1440.png" 600
shot "grammar"    "04-grammar-1440.png" 600
shot "vocabulary" "05-vocabulary-1440.png" 600
shot "reading"    "06-reading-1440.png" 600
shot "listening"  "07-listening-1440.png" 600
shot "speaking"   "08-speaking-1440.png" 600
shot "writing"    "09-writing-1440.png" 600
shot "tutor"      "10-tutor-1440.png" 800
shot "exams"      "11-exam-academy-1440.png" 600
shot "login"      "12-login-1440.png" 400

echo "== Login as demo student =="
$AB open "http://localhost:3000/#/login" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1 || true
$AB find label "Email" fill "demo@talksy.app" >/dev/null 2>&1 || echo "WARN email fill"
$AB find label "Password" fill "demo1234" >/dev/null 2>&1 || echo "WARN pass fill"
$AB find role button click --name "Log in" >/dev/null 2>&1 || $AB find text "Log in" click >/dev/null 2>&1 || echo "WARN login click"
$AB wait --load networkidle >/dev/null 2>&1 || true
$AB wait 1200 >/dev/null 2>&1 || true
$AB get url

echo "== Authed student views =="
shot "progress"        "13-progress-1440.png" 900
shot "exams/dashboard" "14-exam-dashboard-1440.png" 900
shot "exams/planner"   "15-exam-planner-1440.png" 900
shot "exams/mocks"     "16-exam-mocks-1440.png" 900
shot "lesson/first-steps-01" "17-lesson-1440.png" 900 || true

echo "== Logout, login as admin =="
$AB open "http://localhost:3000/#/" >/dev/null 2>&1
$AB wait 600 >/dev/null 2>&1 || true
# logout via account menu
$AB find role button click --name "Account menu" >/dev/null 2>&1 || echo "WARN account menu"
$AB find text "Log out" click >/dev/null 2>&1 || echo "WARN logout"
$AB wait 800 >/dev/null 2>&1 || true
$AB open "http://localhost:3000/#/login" >/dev/null 2>&1
$AB wait 600 >/dev/null 2>&1 || true
$AB find label "Email" fill "admin@talksy.app" >/dev/null 2>&1 || echo "WARN admin email"
$AB find label "Password" fill "Admin1234!" >/dev/null 2>&1 || echo "WARN admin pass"
$AB find role button click --name "Log in" >/dev/null 2>&1 || $AB find text "Log in" click >/dev/null 2>&1 || echo "WARN admin login"
$AB wait --load networkidle >/dev/null 2>&1 || true
$AB wait 1200 >/dev/null 2>&1 || true
shot "admin" "18-admin-1440.png" 900

echo "== Mobile 390 =="
$AB set viewport 390 844 >/dev/null 2>&1
shot ""              "19-home-390.png" 800
shot "library"       "20-library-390.png" 600
shot "vocabulary"    "21-vocabulary-390.png" 600
shot "exams/dashboard" "22-exam-dashboard-390.png" 900
# mobile nav sheet open
$AB open "http://localhost:3000/#/" >/dev/null 2>&1
$AB wait 800 >/dev/null 2>&1 || true
$AB find role button click --name "Open menu" >/dev/null 2>&1 || echo "WARN menu open"
$AB wait 600 >/dev/null 2>&1 || true
$AB screenshot "$OUT/23-mobile-nav-390.png" >/dev/null 2>&1
echo "captured 23-mobile-nav-390.png"

# restore desktop viewport
$AB set viewport 1440 900 >/dev/null 2>&1
echo "DONE"
