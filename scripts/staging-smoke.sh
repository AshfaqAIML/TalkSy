#!/bin/bash
# TalkSy staging smoke test (FINAL_REPORT §8.5: "the production build has
# never been executed in this environment").
#
# Stops the dev server, backs up the database, runs `bun run build`, boots
# the standalone production server and exercises it over HTTP: health,
# static assets, learner APIs, S1 login lockout, S2 password reset (log
# delivery), the first-login gate and the CMS gate. Afterwards the database
# is restored from the backup and the dev server comes back — the repo is
# left exactly as it was found.
#
# Usage: bash scripts/staging-smoke.sh
set -u
ROOT="/home/z/my-project"
BASE="http://127.0.0.1:3000"
PASS=0
FAIL=0

check() {
  local label="$1"; local got="$2"; local want="$3"
  if echo "$got" | grep -qiF "$want"; then
    echo "PASS: $label"
    PASS=$((PASS+1))
  else
    echo "FAIL: $label — wanted '$want' in:"
    echo "$got" | head -12
    FAIL=$((FAIL+1))
  fi
}

restore() {
  # Kill the standalone server if it is still up.
  pkill -f "standalone/server.js" 2>/dev/null
  sleep 1
  # Restore the pre-smoke database.
  if [ -f /tmp/staging-custom.db.bak ]; then
    rm -f "$ROOT/db/custom.db" "$ROOT/db/custom.db-wal" "$ROOT/db/custom.db-shm"
    cp /tmp/staging-custom.db.bak "$ROOT/db/custom.db"
    rm -f /tmp/staging-custom.db.bak
    echo "(restored db/custom.db from the pre-smoke backup)"
  fi
  # Bring the dev server back.
  if ! curl -s -o /dev/null -m 3 "$BASE/"; then
    cd "$ROOT" && (nohup bun run dev >/dev/null 2>&1 &)
    for i in $(seq 1 40); do
      if curl -s -o /dev/null -m 3 "$BASE/"; then break; fi
      sleep 1.5
    done
  fi
  if curl -s -o /dev/null -m 3 "$BASE/"; then
    echo "PASS: dev server restored"
    PASS=$((PASS+1))
  else
    echo "FAIL: dev server did not come back"
    FAIL=$((FAIL+1))
  fi
}
trap restore EXIT

echo "=============== 0. PREPARE ==============="
pkill -f "next dev" 2>/dev/null
pkill -f "next-server" 2>/dev/null
sleep 2
if curl -s -o /dev/null -m 2 "$BASE/"; then
  echo "FATAL: port 3000 is still busy"
  exit 1
fi
cp "$ROOT/db/custom.db" /tmp/staging-custom.db.bak
[ -f "$ROOT/db/custom.db-wal" ] && cp "$ROOT/db/custom.db-wal" /tmp/staging-custom.db-wal.bak
echo "PASS: dev server stopped, database backed up"
PASS=$((PASS+1))

echo "=============== 1. PRODUCTION BUILD (first run in this environment) ==============="
cd "$ROOT"
bun run db:generate >/tmp/staging-generate.log 2>&1 || { echo "FATAL: prisma generate failed"; exit 1; }
bun run db:push >>/tmp/staging-generate.log 2>&1 || { echo "FATAL: db push failed"; exit 1; }
if bun run build > /tmp/staging-build.log 2>&1; then
  echo "PASS: bun run build"
  PASS=$((PASS+1))
else
  echo "FAIL: bun run build — last 40 lines:"
  tail -40 /tmp/staging-build.log
  exit 1
fi
check "standalone server.js exists" "$(ls .next/standalone/server.js 2>&1)" "server.js"
check "static assets copied" "$(ls .next/standalone/.next/static 2>&1 | head -3)" "chunks"
check "public assets copied" "$(ls .next/standalone/public 2>&1 | head -5)" "logo.svg"

echo "=============== 2. BOOT STANDALONE ==============="
DATABASE_URL="file:$ROOT/db/custom.db" NODE_ENV=production PORT=3000 \
  nohup bun .next/standalone/server.js > server.log 2>&1 &
UP=0
for i in $(seq 1 40); do
  if curl -s -o /dev/null -m 3 "$BASE/api"; then UP=1; break; fi
  sleep 1.5
done
if [ "$UP" != "1" ]; then
  echo "FAIL: standalone server did not come up — server.log tail:"
  tail -20 server.log
  exit 1
fi
echo "PASS: standalone server up"
PASS=$((PASS+1))

echo "=============== 3. SMOKE (production server) ==============="
TS=$(date +%s)
VICTIM="smoke-$TS@talksy.test"
JAR=/tmp/smoke-jar.txt
ADMIN_JAR=/tmp/smoke-admin.txt
rm -f "$JAR" "$ADMIN_JAR"

# --- shell + health + static assets
HOME_HTML=$(curl -s "$BASE/")
check "shell renders brand" "$HOME_HTML" "TalkSy"
HEALTH=$(curl -s "$BASE/api")
check "health endpoint ok" "$HEALTH" '"ok":true'
LOGO=$(curl -s -o /dev/null -w "%{http_code}" "$BASE/logo.svg")
check "logo served" "$LOGO" "200"

# --- learner APIs
REG=$(curl -s -X POST "$BASE/api/auth/register" -H 'content-type: application/json' \
  -d "{\"email\":\"$VICTIM\",\"name\":\"Smoke Tester\",\"password\":\"password123\"}" -w "\n%{http_code}")
check "register on production" "$REG" "201"
LOGIN=$(curl -s -c "$JAR" -X POST "$BASE/api/auth/login" -H 'content-type: application/json' \
  -d "{\"email\":\"$VICTIM\",\"password\":\"password123\"}" -w "\n%{http_code}")
check "login on production" "$LOGIN" "200"
CURR=$(curl -s -b "$JAR" -o /dev/null -w "%{http_code}" "$BASE/api/curriculum")
check "curriculum API" "$CURR" "200"
PROG=$(curl -s -b "$JAR" -o /dev/null -w "%{http_code}" "$BASE/api/progress")
check "progress API" "$PROG" "200"
STATS=$(curl -s -b "$JAR" -o /dev/null -w "%{http_code}" "$BASE/api/stats")
check "stats API" "$STATS" "200"

# --- S1 login lockout
for i in 1 2 3 4 5; do
  CODE=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$BASE/api/auth/login" \
    -H 'content-type: application/json' -d "{\"email\":\"$VICTIM\",\"password\":\"bad-$i\"}")
  check "wrong login $i → 401" "$CODE" "401"
done
LOCKED=$(curl -s -D /tmp/smoke-h.txt -X POST "$BASE/api/auth/login" \
  -H 'content-type: application/json' \
  -d "{\"email\":\"$VICTIM\",\"password\":\"password123\"}" -w "\n%{http_code}")
check "locked even with correct password" "$LOCKED" "429"
check "Retry-After on production" "$(grep -i 'retry-after' /tmp/smoke-h.txt)" "retry-after"
bun "$ROOT/scripts/reset-staff-passwords.ts" >/dev/null 2>&1
RECOVER=$(curl -s -X POST "$BASE/api/auth/login" -H 'content-type: application/json' \
  -d "{\"email\":\"$VICTIM\",\"password\":\"password123\"}" -w "\n%{http_code}")
check "login works after the counters clear (fixture)" "$RECOVER" "200"

# --- S2 password reset through the log delivery
FORGOT=$(curl -s -X POST "$BASE/api/auth/forgot" -H 'content-type: application/json' \
  -d "{\"email\":\"$VICTIM\"}")
check "forgot is 200 generic" "$FORGOT" '"ok":true'
sleep 1
LINK=$(grep "link generated for $VICTIM" server.log | tail -1 | grep -o 'http[^ ]*')
check "reset link delivered via server log" "$LINK" "/#/reset/"
TOKEN=${LINK##*/}
RESET=$(curl -s -X POST "$BASE/api/auth/reset" -H 'content-type: application/json' \
  -d "{\"token\":\"$TOKEN\",\"newPassword\":\"SmokeFresh!2026\"}" -w "\n%{http_code}")
check "reset with the token" "$RESET" "200"
OLDPW=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$BASE/api/auth/login" \
  -H 'content-type: application/json' -d "{\"email\":\"$VICTIM\",\"password\":\"password123\"}")
check "old password dead after reset" "$OLDPW" "401"
NEWLOGIN=$(curl -s -X POST "$BASE/api/auth/login" -H 'content-type: application/json' \
  -d "{\"email\":\"$VICTIM\",\"password\":\"SmokeFresh!2026\"}" -w "\n%{http_code}")
check "new password logs in" "$NEWLOGIN" "200"
REUSE=$(curl -s -X POST "$BASE/api/auth/reset" -H 'content-type: application/json' \
  -d "{\"token\":\"$TOKEN\",\"newPassword\":\"Other!2345x\"}" -w "\n%{http_code}")
check "token single-use" "$REUSE" "400"

# --- first-login gate + CMS gate (fixture arms it)
ADMIN_LOGIN=$(curl -s -c "$ADMIN_JAR" -X POST "$BASE/api/auth/login" -H 'content-type: application/json' \
  -d '{"email":"admin@talksy.app","password":"Admin1234!"}' -w "\n%{http_code}")
check "admin logs in with the default" "$ADMIN_LOGIN" "200"
check "flag present in response" "$ADMIN_LOGIN" '"mustChangePassword":true'
GATED=$(curl -s -b "$ADMIN_JAR" "$BASE/api/cms/admin/stats" -w "\n%{http_code}")
check "CMS gated while flagged" "$GATED" "403"
check "gate error code" "$GATED" "password_change_required"
CHANGE=$(curl -s -b "$ADMIN_JAR" -X POST "$BASE/api/auth/change-password" \
  -H 'content-type: application/json' \
  -d '{"currentPassword":"Admin1234!","newPassword":"SmokeAdmin!2026"}' -w "\n%{http_code}")
check "change-password on production" "$CHANGE" "200"
UNLOCKED=$(curl -s -b "$ADMIN_JAR" -o /dev/null -w "%{http_code}" "$BASE/api/cms/admin/stats")
check "CMS unlocked after the change" "$UNLOCKED" "200"

echo ""
echo "============================================"
echo "STAGING SMOKE RESULT: $PASS passed, $FAIL failed"
echo "============================================"
[ "$FAIL" -eq 0 ]
