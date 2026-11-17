#!/bin/bash
# TalkSy authentication security E2E (audit S1/S2 + S6 first-login gate).
# Covers: login lockout with 429 + Retry-After, token-based password reset
# through the UI (link delivered via the server log), first-login gate for
# seeded staff (UI gate + CMS API 403 password_change_required + session
# revocation on change), and anti-enumeration on the forgot endpoint.
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

# Deterministic start: staff on the public defaults + gate armed, no
# leftover throttle counters (development fixture).
bun scripts/reset-staff-passwords.ts >/dev/null 2>&1

TS=$(date +%s)
VICTIM="sec-e2e-$TS@talksy.test"
JAR=/tmp/sec-e2e-jar.txt
rm -f "$JAR"

echo "=============== 1. S1 LOGIN LOCKOUT (API) ==============="
REG=$(curl -s -X POST "$BASE/api/auth/register" -H 'content-type: application/json' \
  -d "{\"email\":\"$VICTIM\",\"name\":\"Sec E2E\",\"password\":\"password123\"}" -w "\n%{http_code}")
check "victim registered" "$REG" "201"

for i in 1 2 3 4 5; do
  CODE=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$BASE/api/auth/login" \
    -H 'content-type: application/json' \
    -d "{\"email\":\"$VICTIM\",\"password\":\"wrong-$i\"}")
  check "wrong login $i → 401" "$CODE" "401"
done

SIXTH=$(curl -s -D /tmp/sec-e2e-h6.txt -X POST "$BASE/api/auth/login" \
  -H 'content-type: application/json' \
  -d "{\"email\":\"$VICTIM\",\"password\":\"password123\"}" -w "\n%{http_code}")
check "6th attempt with CORRECT password → 429" "$SIXTH" "429"
check "locked message shown" "$SIXTH" "Too many attempts"
check "Retry-After header present" "$(grep -i 'retry-after' /tmp/sec-e2e-h6.txt)" "retry-after"

# Clear the counters (dev fixture also wipes them) — the lock must lift.
bun scripts/reset-staff-passwords.ts >/dev/null 2>&1
RECOVER=$(curl -s -X POST "$BASE/api/auth/login" -H 'content-type: application/json' \
  -d "{\"email\":\"$VICTIM\",\"password\":\"password123\"}" -w "\n%{http_code}")
check "login works after the lock lifts" "$RECOVER" "200"

echo "=============== 2. S2 PASSWORD RESET (log delivery + UI) ==============="
KNOWN_MSG=$(curl -s -X POST "$BASE/api/auth/forgot" -H 'content-type: application/json' \
  -d "{\"email\":\"$VICTIM\"}")
check "forgot answers 200 generic" "$KNOWN_MSG" '"ok":true'
check_not "forgot response leaks no link" "$KNOWN_MSG" "#/reset/"
check_not "forgot response leaks no token" "$KNOWN_MSG" "tokenHash"

# The link is delivered through the server log (this deployment has no email).
sleep 1
LINK=$(grep "link generated for $VICTIM" dev.log | tail -1 | grep -o 'http[^ ]*')
check "reset link logged for delivery" "$LINK" "/#/reset/"
TOKEN=${LINK##*/}
if echo -n "$TOKEN" | grep -qE '^[0-9a-f]{48}$'; then
  echo "PASS: link carries a 48-hex token"
  PASS=$((PASS+1))
else
  echo "FAIL: link carries a 48-hex token — got: '$TOKEN'"
  FAIL=$((FAIL+1))
fi

$AB open "about:blank" >/dev/null 2>&1
$AB cookies clear >/dev/null 2>&1
$AB open "$LINK" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
wait_for "Set a new password" || echo "WARN: reset form slow to appear"
RESETFORM=$(snap)
check "reset view explains single use" "$RESETFORM" "only once"
$AB find label "New password" fill "FreshStart!2026" >/dev/null 2>&1
$AB find label "Confirm new password" fill "FreshStart!2026" >/dev/null 2>&1
$AB find role button click --name "Save new password" >/dev/null 2>&1
wait_for "Welcome back" || echo "WARN: back to login slow"
AFTER_RESET=$(snap)
check "redirected to login after reset" "$AFTER_RESET" "Welcome back"

# The old token is single-use; the old password is dead.
REUSE=$(curl -s -X POST "$BASE/api/auth/reset" -H 'content-type: application/json' \
  -d "{\"token\":\"$TOKEN\",\"newPassword\":\"Other!2345x\"}" -w "\n%{http_code}")
check "token reuse rejected 400" "$REUSE" "400"
OLDPW=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$BASE/api/auth/login" \
  -H 'content-type: application/json' -d "{\"email\":\"$VICTIM\",\"password\":\"password123\"}")
check "old password no longer logs in" "$OLDPW" "401"

# UI login with the new password.
$AB find label "Email" fill "$VICTIM" >/dev/null 2>&1
$AB find label "Password" fill "FreshStart!2026" >/dev/null 2>&1
$AB press Enter >/dev/null 2>&1
sleep 2.5
NEWLOGIN=$(snap)
check "login with reset password works" "$NEWLOGIN" "Sec E2E"

echo "=============== 3. FIRST-LOGIN GATE (UI + CMS API) ==============="
# Arm the staff gate deterministically.
bun scripts/reset-staff-passwords.ts >/dev/null 2>&1

FLAGGED=$(curl -s -c "$JAR" -X POST "$BASE/api/auth/login" -H 'content-type: application/json' \
  -d '{"email":"admin@talksy.app","password":"Admin1234!"}' -w "\n%{http_code}")
check "admin logs in with the default" "$FLAGGED" "200"
check "login response carries the flag" "$FLAGGED" '"mustChangePassword":true'

GATED_API=$(curl -s -b "$JAR" "$BASE/api/cms/admin/stats" -w "\n%{http_code}")
check "CMS API gated while flagged (403)" "$GATED_API" "403"
check "gate error code" "$GATED_API" "password_change_required"

$AB open "about:blank" >/dev/null 2>&1
$AB cookies clear >/dev/null 2>&1
$AB open "$BASE/#/login" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
wait_for "Log in to continue" || true
$AB find label "Email" fill "admin@talksy.app" >/dev/null 2>&1
$AB find label "Password" fill "Admin1234!" >/dev/null 2>&1
$AB press Enter >/dev/null 2>&1
wait_for "Choose a new password" || echo "WARN: gate slow to appear"
GATE1=$(snap)
check "gate shown after staff login" "$GATE1" "Choose a new password"

# Navigating anywhere else must NOT escape the gate.
$AB open "$BASE/#/admin" >/dev/null 2>&1
sleep 2
GATE2=$(snap)
check "gate holds on #/admin" "$GATE2" "Choose a new password"
check_not "no admin dashboard while gated" "$GATE2" "Content management"

# Complete the gate through the UI.
$AB find label "Current password" fill "Admin1234!" >/dev/null 2>&1
$AB find label "New password" fill "E2eAdmin!2026" >/dev/null 2>&1
$AB find label "Confirm new password" fill "E2eAdmin!2026" >/dev/null 2>&1
$AB find role button click --name "Save new password" >/dev/null 2>&1
wait_not "Choose a new password" || echo "WARN: gate release slow"
RELEASED=$(snap)
check_not "gate released" "$RELEASED" "Choose a new password"

# The pre-change API session (curl jar) must be revoked by the change.
REVOKED=$(curl -s -b "$JAR" -o /dev/null -w "%{http_code}" "$BASE/api/cms/admin/stats")
check "other sessions revoked by the change" "$REVOKED" "401"

# A fresh login with the new password unlocks the CMS API again.
UNLOCKED=$(curl -s -c "$JAR" -X POST "$BASE/api/auth/login" -H 'content-type: application/json' \
  -d '{"email":"admin@talksy.app","password":"E2eAdmin!2026"}' -w "\n%{http_code}")
check "fresh login with the new password" "$UNLOCKED" "200"
check "flag cleared in response" "$UNLOCKED" '"mustChangePassword":false'
STATS=$(curl -s -b "$JAR" -o /dev/null -w "%{http_code}" "$BASE/api/cms/admin/stats")
check "CMS API unlocked after the change" "$STATS" "200"

echo "=============== 4. ANTI-ENUMERATION (forgot) ==============="
UNKNOWN_MSG=$(curl -s -X POST "$BASE/api/auth/forgot" -H 'content-type: application/json' \
  -d "{\"email\":\"nobody-$TS@talksy.test\"}")
check "unknown email also 200 generic" "$UNKNOWN_MSG" '"ok":true'
check "identical message for unknown email" "$UNKNOWN_MSG" "$KNOWN_MSG"
check_not "unknown response leaks no link" "$UNKNOWN_MSG" "#/reset/"

echo ""
echo "============================================"
echo "AUTH SECURITY E2E RESULT: $PASS passed, $FAIL failed"
echo "============================================"

# Leave deterministic state for the next suite (staff armed, counters clean).
bun scripts/reset-staff-passwords.ts >/dev/null 2>&1
[ "$FAIL" -eq 0 ]
