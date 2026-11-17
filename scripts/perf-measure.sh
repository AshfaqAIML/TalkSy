#!/bin/bash
# Performance measurement: server start → warm-up → timed requests, all in
# one invocation (the sandbox recycles background processes between calls).
BASE="http://127.0.0.1:3000"
cd /home/z/my-project

start_server() {
  nohup bun run dev > /dev/null 2>&1 &
  for i in $(seq 1 40); do
    curl -s -o /dev/null -m 3 "$BASE/" && return 0
    sleep 2
  done
  echo "FATAL: no server"; exit 1
}

curl -s -o /dev/null -m 3 "$BASE/" || start_server
# Warm the compiler for the routes we measure.
curl -s -o /dev/null -m 30 "$BASE/"
sleep 1

echo "=== Cold-ish page load (compile cached) ==="
curl -s -o /dev/null -w "GET / : %{time_total}s (HTTP %{http_code}, %{size_download} bytes)\n" -m 30 "$BASE/"

echo "=== Public APIs (unauthenticated expected) ==="
for ep in /api/curriculum /api/auth/me /api/vocabulary/library; do
  curl -s -o /dev/null -w "GET $ep : %{time_total}s (HTTP %{http_code}, %{size_download} bytes)\n" -m 30 "$BASE$ep"
done

echo "=== Authenticated APIs (admin) ==="
COOKIE=$(curl -s -m 10 -X POST "$BASE/api/auth/login" -H "content-type: application/json" \
  -d '{"email":"admin@talksy.app","password":"Admin1234!"}' -D - -o /dev/null \
  | grep -i set-cookie | sed 's/set-cookie: //I; s/;.*//' | head -1)
if [ -z "$COOKIE" ]; then echo "login failed"; exit 1; fi
for ep in /api/cms/admin/stats /api/cms/admin/courses /api/cms/admin/questions /api/cms/admin/users /api/cms/admin/assets; do
  curl -s -o /dev/null -w "GET $ep : %{time_total}s (HTTP %{http_code}, %{size_download} bytes)\n" -m 30 "$BASE$ep" -H "cookie: $COOKIE"
done

echo "=== Learner APIs (demo learner) ==="
DCOOKIE=$(curl -s -m 10 -X POST "$BASE/api/auth/login" -H "content-type: application/json" \
  -d '{"email":"demo@talksy.app","password":"demo1234"}' -D - -o /dev/null \
  | grep -i set-cookie | sed 's/set-cookie: //I; s/;.*//' | head -1)
if [ -n "$DCOOKIE" ]; then
  for ep in "/api/progress" "/api/vocabulary/overview" "/api/stats" "/api/cms/courses"; do
    curl -s -o /dev/null -w "GET $ep : %{time_total}s (HTTP %{http_code}, %{size_download} bytes)\n" -m 30 "$BASE$ep" -H "cookie: $DCOOKIE"
  done
else
  echo "demo login failed"
fi

echo "=== Static asset sample ==="
CHUNK=$(ls .next/static/chunks/*.js 2>/dev/null | head -3)
for f in $CHUNK; do
  echo "$(basename $f): $(du -h "$f" | cut -f1)"
done
TOTAL=$(du -sh .next/static 2>/dev/null | cut -f1)
echo ".next/static total: $TOTAL (dev build — production is smaller)"
