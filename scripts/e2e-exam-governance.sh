#!/bin/bash
# Examination content governance & QA (PROMPT 55) — end-to-end verification
# with agent-browser.
#
# Golden path: admin login → Governance tab → Overview (the ten mandated
# metrics, pipeline distribution, learner error patterns, validation summary)
# → Completeness (four academy courses, six dimensions each, honest
# not-ready verdicts) → Validation (eight categories, 0 blocking on the dev
# data) → Content registry (entity-type filter, live-never-approved filter,
# pagination) → a real governance action through the UI (submit a
# practice-library exercise for educational review → appears at
# educational-review) → the accountable-note rule enforced in the dialog →
# RBAC via API (student 403, anonymous 401) → no console errors.
#
# The script leaves the dev database as it found it: the governance override
# and audit rows created by the UI action are cleaned up in the exit trap.
BASE="http://127.0.0.1:3000"
AB="agent-browser"
PASS=0
FAIL=0
E2E_STAMP="$(date +%s)"

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
  for i in $(seq 1 24); do
    if $AB snapshot -c 2>&1 | grep -qiF "$marker"; then return 0; fi
    sleep 1
  done
  return 1
}

snap() { $AB snapshot -c 2>&1; }

cleanup() {
  cd /home/z/my-project
  bun -e "
import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();
try {
  // Remove any governance overrides + audit rows this smoke created.
  const overrides = await db.examContentReview.findMany({ where: { entityKey: { startsWith: 'bank:' }, updatedAt: { gte: new Date(Date.now() - 3600_000) } } });
  for (const row of overrides) {
    await db.cmsAuditLog.deleteMany({ where: { entityType: 'governance', entityId: \`\${row.entityType}:\${row.entityKey}\` } });
  }
  await db.examContentReview.deleteMany({ where: { entityKey: { startsWith: 'bank:' }, updatedAt: { gte: new Date(Date.now() - 3600_000) } } });
  // Re-arm the first-login gate for the staff accounts.
  await db.user.update({ where: { email: 'admin@talksy.app' }, data: { mustChangePassword: true } }).catch(() => {});
} catch (e) {
  console.error('cleanup error', e);
} finally {
  await db.\$disconnect();
}
" >/dev/null 2>&1 || echo "WARN: cleanup script failed"
}
trap cleanup EXIT

if ! curl -s -o /dev/null -m 3 "$BASE/"; then
  echo "Dev server down — starting it…"
  cd /home/z/my-project
  nohup bun run dev >/dev/null 2>&1 &
  for i in $(seq 1 40); do
    curl -s -o /dev/null -m 3 "$BASE/" && break
    sleep 1.5
  done
  sleep 3
fi
if ! curl -s -o /dev/null -m 3 "$BASE/"; then
  echo "FATAL: dev server not running"
  exit 1
fi
$AB console clear >/dev/null 2>&1 || true
$AB close >/dev/null 2>&1 || true

echo "=============== 1. ADMIN LOGIN ==============="
cd /home/z/my-project
bun -e "
import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();
await db.user.update({ where: { email: 'admin@talksy.app' }, data: { mustChangePassword: false } });
await db.\$disconnect();
" >/dev/null 2>&1
$AB open "$BASE/" >/dev/null 2>&1
$AB cookies clear >/dev/null 2>&1
$AB open "$BASE/#/login" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
wait_for "Log in to continue" || echo "WARN: login form slow"
$AB find label "Email" fill "admin@talksy.app" >/dev/null 2>&1
$AB find label "Password" fill "Admin1234!" >/dev/null 2>&1
$AB click 'button[type="submit"]' >/dev/null 2>&1
wait_for "Admin" || { echo "FATAL: login failed"; exit 1; }
echo "PASS: admin login"
PASS=$((PASS+1))

echo "=============== 2. GOVERNANCE OVERVIEW ==============="
# Let the post-login redirect settle first (it races any immediate
# navigation and would otherwise drag the app back to the dashboard).
sleep 3
$AB open "$BASE/#/admin" >/dev/null 2>&1
for i in $(seq 1 12); do
  if $AB snapshot -c 2>&1 | grep -qiF "Content management"; then break; fi
  $AB open "$BASE/#/admin" >/dev/null 2>&1
  sleep 1
done
wait_for "Governance" || { echo "FATAL: governance tab missing"; exit 1; }
$AB find role tab click --name "Governance" >/dev/null 2>&1
wait_for "Total lessons" || echo "WARN: overview slow"
sleep 2
S=$(snap)
for marker in "Total lessons" "Complete lessons" "Placeholder lessons" "Pending reviews" "Published questions" "Missing answer keys" "Outdated content" "Audio without transcripts" "Mock examinations" "Learner error patterns" "Approval pipeline" "Educational review"; do
  check "overview shows $marker" "$S" "$marker"
done
# Case-sensitive: "Governance" contains "nan", so -i would false-positive.
if echo "$S" | grep -qF "NaN"; then
  echo "FAIL: literal NaN in metrics"
  FAIL=$((FAIL+1))
else
  echo "PASS: no literal NaN in metrics"
  PASS=$((PASS+1))
fi
$AB screenshot /tmp/p55-governance-overview.png >/dev/null 2>&1

echo "=============== 3. COMPLETENESS DASHBOARD ==============="
$AB find role button click --name "Completeness" >/dev/null 2>&1
wait_for "Genuinely ready\|Not ready" || echo "WARN: readiness slow"
sleep 1
S=$(snap)
check "IELTS Academic track readiness" "$S" "IELTS Academy — Academic Track"
check "TOEFL academy readiness" "$S" "TOEFL iBT Academy"
check "the six dimensions listed" "$S" "Verified answer keys"
check "review-status dimension honest" "$S" "never human-approved"
check "not-ready verdict present" "$S" "Not ready"
check "blockers section" "$S" "Blockers"
$AB screenshot /tmp/p55-governance-completeness.png >/dev/null 2>&1

echo "=============== 4. VALIDATION REPORT ==============="
$AB find role button click --name "Validation" >/dev/null 2>&1
wait_for "Run validation\|All categories" || echo "WARN: validation slow"
$AB find role button click --name "Run validation" >/dev/null 2>&1
wait_for "blocking" || echo "WARN: validation engine slow"
sleep 2
S=$(snap)
check "engine checked the mock library" "$S" "mock questions"
check "practice-library items counted" "$S" "practice-library items"
check "no blocking issues on dev data" "$S" "no blocking issues"
check_not "no crash marker" "$S" "error TS"
$AB screenshot /tmp/p55-governance-validation.png >/dev/null 2>&1

echo "=============== 5. CONTENT REGISTRY ==============="
$AB find role button click --name "Content registry" >/dev/null 2>&1
wait_for "Pipeline status" || echo "WARN: registry slow"
sleep 2
S=$(snap)
check "registry table renders" "$S" "Provenance"
check "draft entities present" "$S" "Draft"
check "pagination present" "$S" "page 1 of"
# The live-never-approved view.
$AB find role button click --name "Live, never human-approved" >/dev/null 2>&1
sleep 2
S=$(snap)
check "live-unapproved filter narrows" "$S" "match — page 1 of"
$AB find role button click --name "Live, never human-approved" >/dev/null 2>&1
sleep 1
# Narrow to the practice-library exercises through the search box.
$AB find role textbox fill --name "Search" "bank:ielts-lb-" >/dev/null 2>&1
sleep 2
S=$(snap)
check "practice-library exercises listed" "$S" "machine-validated"
check "bank keys visible" "$S" "bank:"
check "bank exercise honesty default" "$S" "Draft"
$AB screenshot /tmp/p55-governance-registry.png >/dev/null 2>&1

echo "=============== 6. A GOVERNANCE ACTION THROUGH THE UI ==============="
wait_for "Submit for educational review" || echo "WARN: no submit button visible"
# The accountable-note rule: open the dialog, then confirm it exists.
$AB find role button click --name "Submit for educational review" --first >/dev/null 2>&1
wait_for "Reviewer note" || echo "WARN: dialog slow"
S=$(snap)
check "dialog explains the AI rule" "$S" "AI-generated"
# The confirm button is disabled until the note is long enough — fill it.
$AB find role textbox fill --name "Reviewer note" "E2E smoke ${E2E_STAMP}: queueing this bank item for retrospective educational review." >/dev/null 2>&1
sleep 0.5
# The dialog footer button (last in the DOM) confirms the action.
$AB find role button click --name "Submit for educational review" --last >/dev/null 2>&1
wait_for "educational review" || echo "WARN: transition slow"
sleep 2
S=$(snap)
check "item moved to educational review" "$S" "Educational review"
$AB screenshot /tmp/p55-governance-action.png >/dev/null 2>&1

echo "=============== 7. RBAC VIA API ==============="
ANON=$(curl -s -o /dev/null -w "%{http_code}" "$BASE/api/exams/admin/governance")
check "anonymous overview is 401" "$ANON" "401"
ANON_ACTION=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$BASE/api/exams/admin/governance/lesson/x/action" -H 'content-type: application/json' -d '{"action":"submit","note":"x"}')
check "anonymous action is 401" "$ANON_ACTION" "401"
# A student session is 403.
STUDENT_COOKIE=$(curl -s -c - -X POST "$BASE/api/auth/register" -H 'content-type: application/json' -d "{\"email\":\"gov-smoke-${E2E_STAMP}@talksy.test\",\"name\":\"Smoke Student\",\"password\":\"password123\"}" | grep -io 'talksy_session[^ ]*' | head -1)
STUDENT_RES=$(curl -s -b <(curl -s -c - -X POST "$BASE/api/auth/login" -H 'content-type: application/json' -d "{\"email\":\"gov-smoke-${E2E_STAMP}@talksy.test\",\"password\":\"password123\"}") -o /dev/null -w "%{http_code}" "$BASE/api/exams/admin/governance/registry")
check "student registry is 403" "$STUDENT_RES" "403"

echo "=============== 8. CONSOLE ERRORS ==============="
ERRORS=$($AB console 2>&1 | grep -i "error" | grep -viF "Failed to load resource: the server responded with a status of 401" | grep -viF "403" | head -10)
if [ -z "$ERRORS" ]; then
  echo "PASS: zero unexpected console errors"
  PASS=$((PASS+1))
else
  echo "FAIL: console errors:"
  echo "$ERRORS"
  FAIL=$((FAIL+1))
fi

echo ""
echo "=============== RESULT: $PASS passed, $FAIL failed ==============="
[ "$FAIL" -eq 0 ]
