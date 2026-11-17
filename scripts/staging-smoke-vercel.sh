#!/usr/bin/env bash
# Staging smoke test — simulates the Vercel serverless environment exactly:
#   - VERCEL=1 (db.ts stages the bundled seed DB in /tmp)
#   - no DATABASE_URL / no .env in the deployment
#   - read-only bundle directory (chmod 555 on the bundled db/)
# Covers: register, login, content API, S1 login lockout, S2 token-based
# password reset, first-login change-password gate (staff) + CMS API gate.
set -u
cd /home/z/my-project/.next/standalone || exit 1
BASE=http://127.0.0.1:3100
JAR_A=/tmp/smoke-student.jar
JAR_B=/tmp/smoke-admin.jar
PASS=0; FAIL=0

check() { # check <desc> <expected> <actual>
  if [ "$2" = "$3" ]; then PASS=$((PASS+1)); echo "PASS [$3] $1";
  else FAIL=$((FAIL+1)); echo "FAIL [$3 != $2] $1"; fi
}

# --- simulate Vercel ---
mv .env /tmp/smoke-hold.env 2>/dev/null
chmod 555 db
rm -rf /tmp/talksy
VERCEL=1 NODE_ENV=production PORT=3100 HOSTNAME=127.0.0.1 bun server.js > /tmp/smoke-server.log 2>&1 &
SERVER_PID=$!
trap 'kill $SERVER_PID 2>/dev/null; chmod 755 db; mv /tmp/smoke-hold.env .env 2>/dev/null' EXIT
for i in $(seq 1 40); do
  curl -s -o /dev/null $BASE/ && break; sleep 0.5
done

echo "=== 1. register (write path — the original 500) ==="
CODE=$(curl -s -o /tmp/reg.json -w '%{http_code}' -X POST $BASE/api/auth/register \
  -H 'Content-Type: application/json' -c $JAR_A \
  -d '{"email":"smoke.vercel@example.com","password":"Smoke1234!","name":"Smoke Test"}')
check "student registration" 201 "$CODE"
grep -q '"user"' /tmp/reg.json && echo "PASS user object returned" || echo "FAIL user object missing"

echo "=== 2. login ==="
CODE=$(curl -s -o /dev/null -w '%{http_code}' -X POST $BASE/api/auth/login \
  -H 'Content-Type: application/json' -c $JAR_A \
  -d '{"email":"smoke.vercel@example.com","password":"Smoke1234!"}')
check "student login" 200 "$CODE"

echo "=== 3. seeded content serves (read path) ==="
CODE=$(curl -s -o /tmp/vocab.json -w '%{http_code}' -b $JAR_A $BASE/api/vocabulary/categories)
check "vocabulary categories (seeded data)" 200 "$CODE"

echo "=== 4. first-login change-password gate (staff) ==="
CODE=$(curl -s -o /tmp/admin-login.json -w '%{http_code}' -X POST $BASE/api/auth/login \
  -H 'Content-Type: application/json' -c $JAR_B \
  -d '{"email":"admin@talksy.app","password":"Admin1234!"}')
check "admin login with default password" 200 "$CODE"
grep -q '"mustChangePassword":true' /tmp/admin-login.json \
  && echo "PASS gate flag present" || { echo "FAIL gate flag missing"; FAIL=$((FAIL+1)); }
CODE=$(curl -s -o /tmp/cms-gate.json -w '%{http_code}' -b $JAR_B $BASE/api/cms/admin/stats)
check "CMS blocked before password change (403)" 403 "$CODE"
CODE=$(curl -s -o /dev/null -w '%{http_code}' -X POST $BASE/api/auth/change-password \
  -H 'Content-Type: application/json' -b $JAR_B \
  -d '{"currentPassword":"Admin1234!","newPassword":"AdminSm0ke!2024"}')
check "admin changes password" 200 "$CODE"
CODE=$(curl -s -o /dev/null -w '%{http_code}' -b $JAR_B $BASE/api/cms/admin/stats)
check "CMS accessible after password change" 200 "$CODE"

echo "=== 5. S1 login lockout (5 failures -> lock) ==="
for i in 1 2 3 4 5; do
  curl -s -o /dev/null -X POST $BASE/api/auth/login \
    -H 'Content-Type: application/json' \
    -d '{"email":"editor@talksy.app","password":"wrong-password"}'
done
CODE=$(curl -s -o /tmp/locked.json -w '%{http_code}' -X POST $BASE/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"editor@talksy.app","password":"Editor1234!"}')
check "6th attempt with CORRECT password is locked (429)" 429 "$CODE"

echo "=== 6. S2 token-based password reset ==="
CODE=$(curl -s -o /dev/null -w '%{http_code}' -X POST $BASE/api/auth/forgot \
  -H 'Content-Type: application/json' \
  -d '{"email":"teacher@talksy.app"}')
check "forgot-password accepted" 200 "$CODE"
sleep 1
TOKEN=$(grep -o '#/reset/[0-9a-f]\{48\}' /tmp/smoke-server.log | tail -1 | cut -d/ -f3)
if [ -n "$TOKEN" ]; then
  echo "PASS reset token delivered via server log"
  PASS=$((PASS+1))
else
  echo "FAIL no reset token found in server log"; FAIL=$((FAIL+1))
fi
CODE=$(curl -s -o /dev/null -w '%{http_code}' -X POST $BASE/api/auth/reset \
  -H 'Content-Type: application/json' \
  -d "{\"token\":\"$TOKEN\",\"newPassword\":\"TeacherSm0ke!2024\"}")
check "reset with token" 200 "$CODE"
CODE=$(curl -s -o /dev/null -w '%{http_code}' -X POST $BASE/api/auth/reset \
  -H 'Content-Type: application/json' \
  -d "{\"token\":\"$TOKEN\",\"newPassword\":\"AnotherPass!2345\"}")
check "token is single-use (second attempt rejected)" 400 "$CODE"
CODE=$(curl -s -o /dev/null -w '%{http_code}' -X POST $BASE/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"teacher@talksy.app","password":"TeacherSm0ke!2024"}')
check "login with reset password" 200 "$CODE"

echo "=== 7. no writes hit the read-only bundle ==="
if grep -q "readonly\|read-only\|attempt to write" /tmp/smoke-server.log; then
  echo "FAIL server logged read-only errors:"; tail -5 /tmp/smoke-server.log; FAIL=$((FAIL+1))
else
  echo "PASS no read-only filesystem errors"; PASS=$((PASS+1))
fi

echo ""
echo "RESULT: $PASS passed, $FAIL failed"
[ $FAIL -eq 0 ]
