#!/bin/bash
# PROMPT 40 screen-by-screen audit screenshot runner.
# Usage: bash scripts/audit-screens.sh
set -u
OUT=/tmp/render
mkdir -p "$OUT"

shot() { # name url [wait_ms]
  local name="$1" url="$2" w="${3:-2500}"
  agent-browser open "$url" > /dev/null 2>&1
  sleep 2
  agent-browser wait --load networkidle > /dev/null 2>&1
  sleep 1
  agent-browser screenshot "$OUT/$name.png" > /dev/null 2>&1
  echo "shot $name"
}

# ---- anonymous state ----
shot talksy-register "http://localhost:3000/#/register"
shot talksy-courses "http://localhost:3000/#/courses"
shot talksy-course-detail "http://localhost:3000/#/course/english-from-zero"
shot talksy-paths "http://localhost:3000/#/paths"

# ---- demo learner state (login via API inside browser context) ----
agent-browser open "http://localhost:3000/#/" > /dev/null 2>&1
sleep 1
agent-browser eval "fetch('/api/auth/login',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({email:'demo@talksy.app',password:'demo1234'})}).then(r=>r.status)" > /dev/null 2>&1
sleep 1
shot talksy-dashboard "http://localhost:3000/#/dashboard"
shot talksy-lesson-player "http://localhost:3000/#/course-lesson/ch-01-l-02"
shot talksy-grammar "http://localhost:3000/#/grammar"
shot talksy-lab "http://localhost:3000/#/lab"
shot talksy-vocabulary "http://localhost:3000/#/vocabulary"
shot talksy-reading "http://localhost:3000/#/reading"
shot talksy-listening "http://localhost:3000/#/listening"
shot talksy-speaking "http://localhost:3000/#/speaking"
shot talksy-writing "http://localhost:3000/#/writing"
shot talksy-tutor "http://localhost:3000/#/tutor"
shot talksy-practice "http://localhost:3000/#/practice"
shot talksy-progress "http://localhost:3000/#/progress"

# ---- admin state ----
agent-browser eval "fetch('/api/auth/logout',{method:'POST'})" > /dev/null 2>&1
sleep 1
agent-browser eval "fetch('/api/auth/login',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({email:'admin@talksy.app',password:'Admin1234!'})}).then(r=>r.status)" > /dev/null 2>&1
sleep 1
shot talksy-admin "http://localhost:3000/#/admin"
echo "ALL DONE"
