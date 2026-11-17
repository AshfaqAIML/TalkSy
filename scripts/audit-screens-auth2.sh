#!/bin/bash
# Re-screenshot authenticated views with the cookie-injection + reload pattern.
set -u
OUT=/tmp/render

shot() {
  local name="$1" url="$2"
  agent-browser open "$url" > /dev/null 2>&1
  agent-browser reload > /dev/null 2>&1
  sleep 3
  agent-browser wait --load networkidle > /dev/null 2>&1
  sleep 1
  agent-browser screenshot "$OUT/$name.png" > /dev/null 2>&1
  echo "shot $name"
}

shot talksy-dashboard "http://localhost:3000/#/dashboard"
shot talksy-lesson-player "http://localhost:3000/#/course-lesson/ch-01-l-02"
shot talksy-vocabulary "http://localhost:3000/#/vocabulary"
shot talksy-tutor "http://localhost:3000/#/tutor"
shot talksy-practice "http://localhost:3000/#/practice"
shot talksy-progress "http://localhost:3000/#/progress"
shot talksy-reading "http://localhost:3000/#/reading"
shot talksy-listening "http://localhost:3000/#/listening"
shot talksy-speaking "http://localhost:3000/#/speaking"
shot talksy-writing "http://localhost:3000/#/writing"
shot talksy-grammar "http://localhost:3000/#/grammar"
shot talksy-lab "http://localhost:3000/#/lab"

# admin state: swap cookie
curl -s -i -X POST http://localhost:3000/api/auth/login -H "content-type: application/json" -d '{"email":"admin@talksy.app","password":"Admin1234!"}' 2>/dev/null | grep -i "^set-cookie" | sed 's/.*talksy_session=\([^;]*\).*/\1/' > /tmp/admin-token.txt
ATOK=$(cat /tmp/admin-token.txt)
agent-browser cookies clear > /dev/null 2>&1
agent-browser cookies set talksy_session "$ATOK" --url http://localhost:3000 > /dev/null 2>&1
shot talksy-admin "http://localhost:3000/#/admin"

# back to demo for later checks
curl -s -i -X POST http://localhost:3000/api/auth/login -H "content-type: application/json" -d '{"email":"demo@talksy.app","password":"demo1234"}' 2>/dev/null | grep -i "^set-cookie" | sed 's/.*talksy_session=\([^;]*\).*/\1/' > /tmp/demo-token.txt
DTOK=$(cat /tmp/demo-token.txt)
agent-browser cookies clear > /dev/null 2>&1
agent-browser cookies set talksy_session "$DTOK" --url http://localhost:3000 > /dev/null 2>&1
echo "ALL AUTH VIEWS DONE"
