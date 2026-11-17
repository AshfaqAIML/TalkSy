#!/bin/bash
# Re-screenshot authenticated views (dev server restarted, daemon mode).
set -u
OUT=/tmp/render

shot() {
  local name="$1" url="$2"
  agent-browser open "$url" > /dev/null 2>&1
  sleep 3
  agent-browser wait --load networkidle > /dev/null 2>&1
  sleep 1
  agent-browser screenshot "$OUT/$name.png" > /dev/null 2>&1
  echo "shot $name"
}

agent-browser open "http://localhost:3000/#/" > /dev/null 2>&1
sleep 2
agent-browser eval "(async () => { const r = await fetch('/api/auth/login',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({email:'demo@talksy.app',password:'demo1234'})}); return await r.text(); })()" > /dev/null 2>&1
sleep 1
# verify login persisted
agent-browser open "http://localhost:3000/#/dashboard" > /dev/null 2>&1
sleep 3
shot talksy-dashboard "http://localhost:3000/#/dashboard"
shot talksy-lesson-player "http://localhost:3000/#/course-lesson/ch-01-l-02"
shot talksy-vocabulary "http://localhost:3000/#/vocabulary"
shot talksy-tutor "http://localhost:3000/#/tutor"
shot talksy-practice "http://localhost:3000/#/practice"
shot talksy-progress "http://localhost:3000/#/progress"
echo "AUTH VIEWS DONE"
