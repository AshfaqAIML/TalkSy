#!/bin/bash
# Responsive audit screenshots at mobile widths.
set -u
OUT=/tmp/render

reshot() { # name url width height
  agent-browser set viewport "$3" "$4" > /dev/null 2>&1
  agent-browser open "$2" > /dev/null 2>&1
  agent-browser reload > /dev/null 2>&1
  sleep 3
  agent-browser wait --load networkidle > /dev/null 2>&1
  sleep 1
  agent-browser screenshot "$OUT/$1.png" > /dev/null 2>&1
  echo "shot $1"
}

# demo cookie is already set
reshot mob-home "http://localhost:3000/#/" 390 844
reshot mob-dashboard "http://localhost:3000/#/dashboard" 390 844
reshot mob-courses "http://localhost:3000/#/courses" 390 844
reshot mob-lesson "http://localhost:3000/#/course-lesson/ch-01-l-02" 390 844
reshot mob-tutor "http://localhost:3000/#/tutor" 390 844
reshot mob-vocab "http://localhost:3000/#/vocabulary" 390 844

reshot s360-home "http://localhost:3000/#/" 360 780
reshot s360-dashboard "http://localhost:3000/#/dashboard" 360 780
reshot s360-lesson "http://localhost:3000/#/course-lesson/ch-01-l-02" 360 780

# tablet 768
reshot tab-courses "http://localhost:3000/#/courses" 768 1024
reshot tab-dashboard "http://localhost:3000/#/dashboard" 768 1024

# back to desktop
agent-browser set viewport 1440 900 > /dev/null 2>&1
echo "RESPONSIVE SHOTS DONE"
