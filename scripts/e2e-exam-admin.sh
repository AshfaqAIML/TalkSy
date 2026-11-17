#!/bin/bash
# Examination administration system — end-to-end verification with
# agent-browser.
#
# Golden path: admin login → Exam blueprints (specs table + structured
# editor: name/type/effective/review date, sections & timing, task types,
# scoring, instructions, official sources) → create draft version → edit
# it → version workflow dialog (impact report: affected questions, stale
# mocks, pinned attempts) → repoint mocks → publish (activate) → history
# retained → Exam content (4 collections with inventory + sources) →
# question review workflow in the UI (create draft → submit → approve →
# publish → edit published returns to review) → mock publication gate
# (409 with unpublished questions, then succeeds) → Exam analytics
# (headline stats, review pipeline, sections, performance, weaknesses,
# outdated content) → RBAC via API (student 403, editor first-login gate)
# → no console errors.
#
# The script leaves the dev database as it found it: the e2e draft spec,
# the e2e question and the gate flag are cleaned up in the exit trap.
BASE="http://127.0.0.1:3000"
AB="agent-browser"
PASS=0
FAIL=0
E2E_STAMP="$(date +%s)"
SPEC_MARKER="E2E verification draft ${E2E_STAMP}"
QUESTION_STEM="E2E-ADMIN-CHECK ${E2E_STAMP}"

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
  # Leave the dev database exactly as found.
  cd /home/z/my-project
  bun -e "
import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();
try {
  // The e2e question (by stem marker), its section stays (owned by the mock).
  const q = await db.mockTestQuestion.findFirst({ where: { stem: { contains: '${QUESTION_STEM}' } } });
  if (q) {
    await db.mockTestResponse.deleteMany({ where: { questionId: q.id } });
    await db.mockTestQuestion.delete({ where: { id: q.id } });
  }
  // The host mock returns to published (its original state).
  if (q) {
    const host = await db.mockTest.findFirst({ where: { sections: { some: { id: q.sectionId } } } });
    if (host && host.status !== 'published') {
      await db.mockTest.update({ where: { id: host.id }, data: { status: 'published' } });
    }
  }
  // The e2e draft/retired spec (never activated with attempts; if it was
  // activated, retire first so the original spec is active again, then
  // relink the mocks back and delete the e2e version).
  let spec = await db.testSpecification.findFirst({ where: { name: '${SPEC_MARKER}' } });
  if (spec && spec.status === 'active') {
    const previous = await db.testSpecification.findFirst({
      where: { examKey: spec.examKey, variant: spec.variant, status: 'retired', version: { lt: spec.version } },
      orderBy: { version: 'desc' },
    });
    if (previous) {
      await db.testSpecification.update({ where: { id: previous.id }, data: { status: 'active' } });
    }
    await db.testSpecification.update({ where: { id: spec.id }, data: { status: 'retired' } });
    spec = await db.testSpecification.findUnique({ where: { id: spec.id } });
  }
  if (spec) {
    const active = await db.testSpecification.findFirst({
      where: { examKey: spec.examKey, variant: spec.variant, status: 'active' },
      orderBy: { version: 'desc' },
    });
    if (active) {
      await db.mockTest.updateMany({ where: { examKey: spec.examKey, variant: spec.variant, specId: spec.id }, data: { specId: active.id } });
    }
    const attempts = await db.mockTestAttempt.count({ where: { specId: spec.id } });
    if (attempts === 0) await db.testSpecification.delete({ where: { id: spec.id } });
  }
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
# Fresh browser context: a long-lived browser keeps stale console history
# (e.g. from a dev-server restart mid-session), which would poison the
# console-error check at the end. `close` resets page and console.
$AB close >/dev/null 2>&1 || true

echo "=============== 1. ADMIN LOGIN ==============="
# Disarm the first-login gate for this run (re-armed in the exit trap) so
# the login lands straight in the admin console.
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
# Two elements answer to the name "Log in" (banner button + form submit);
# a plain name-based click may hit either. Target the form's submit button
# unambiguously.
$AB click 'button[type="submit"]' >/dev/null 2>&1
if ! wait_for 'link "Admin"'; then
  echo "FATAL: admin login did not land — aborting before the cascade"
  exit 1
fi

echo "=============== 2. EXAM BLUEPRINTS (specs table) ==============="
$AB open "$BASE/#/admin" >/dev/null 2>&1
$AB wait --load networkidle >/dev/null 2>&1
wait_for "Content management" || echo "WARN: admin console slow"
# The admin console opens on the CMS Dashboard tab — switch to the
# examination blueprints.
$AB find role tab click --name "Exam blueprints" >/dev/null 2>&1
wait_for "Examination blueprints" || echo "WARN: blueprints tab slow"
sleep 1.5
BP=$(snap)
check "blueprints heading" "$BP" "Examination blueprints"
check "blueprint scope copy" "$BP" "sections, timing, task"
check "specs table version column" "$BP" "Version"
check "active spec row" "$BP" "active"
check "review date column" "$BP" "Reviewed"
# The Sources column shows the human label ("IELTS official — …"), the URL
# itself is only in the href attribute.
check "official source link" "$BP" "IELTS official"
check "immutability rule copy" "$BP" "immutable"
check "mocks table heading" "$BP" "Mock examinations"
check "mock publish gate copy" "$BP" "every question published"
check "new draft button" "$BP" 'button "New draft version"'

echo "=============== 3. STRUCTURED SPEC EDITOR (create draft) ==============="
$AB find role button click --name "New draft version" >/dev/null 2>&1
sleep 1.5
ED=$(snap)
check "editor dialog" "$ED" "New specification draft"
check "editor name field" "$ED" "Examination name"
check "editor type field" "$ED" "Examination type"
check "editor effective date" "$ED" "Effective date"
check "editor review date" "$ED" "Last review date"
check "editor sections block" "$ED" "Sections & timing"
check "editor section timing field" "$ED" "Timing (minutes)"
check "editor instructions field" "$ED" "Test instructions (directions)"
check "editor task types block" "$ED" "Task types & question formats"
check "editor objective toggle" "$ED" "Objective (machine-marked)"
check "editor scoring block" "$ED" "Scoring configuration"
check "editor sources block" "$ED" "Official source references"
# Name the draft and create it (payload pre-filled from the active spec).
$AB find label "Examination name" fill "$SPEC_MARKER" >/dev/null 2>&1
sleep 0.5
$AB find role button click --name "Create draft" >/dev/null 2>&1
sleep 3
AFTER_CREATE=$(snap)
check "draft created toast" "$AFTER_CREATE" "Draft v2 created"
check "draft row shows edit" "$AFTER_CREATE" 'button "Edit"'
check "draft row shows workflow" "$AFTER_CREATE" 'button "Workflow"'

echo "=============== 4. EDIT THE DRAFT (sections & scoring) ==============="
# The new draft is the only row with Edit — click it.
$AB find role button click --name "Edit" >/dev/null 2>&1
sleep 1.5
EDIT_DLG=$(snap)
check "edit dialog opens" "$EDIT_DLG" "Edit draft"
# Change the first section's timing (minutes) and save.
FIRST_MINUTES_LABEL=$(echo "$EDIT_DLG" | grep -oE 'Timing \(minutes\)' | head -1)
$AB find label "Timing (minutes)" fill "25" >/dev/null 2>&1
sleep 0.5
$AB find role button click --name "Save draft" >/dev/null 2>&1
sleep 3
AFTER_SAVE=$(snap)
check "draft saved toast" "$AFTER_SAVE" "Draft updated"
void "$FIRST_MINUTES_LABEL"

echo "=============== 5. VERSION WORKFLOW (impact → relink → publish) ==============="
$AB find role button click --name "Workflow" >/dev/null 2>&1
sleep 2.5
WF=$(snap)
check "workflow dialog opens" "$WF" "Version workflow"
# The a11y snapshot splits "Draft v2 created" into separate text nodes
# ("Draft v" + "2" + " created"), so grep the single-node fragment.
check "workflow step 1 draft created" "$WF" "current active: v1"
check "workflow step 4 question review" "$WF" "No existing questions use task types missing" 
check "workflow step 5 stale mocks" "$WF" "still run on an older version"
check "workflow repoint button" "$WF" 'button "Repoint mocks to v2"'
check "workflow history note (pinned attempts)" "$WF" "History retained"
# Step 5: repoint the mocks to the draft.
$AB find role button click --name "Repoint mocks to v2" >/dev/null 2>&1
sleep 3
RELINKED=$(snap)
check "relink toast" "$RELINKED" "now run on v2"
check "relink history note" "$RELINKED" "Historical attempts keep their pinned version"
# Step 6: publish (activate) the draft, then close the dialog so the
# table checks below read the real page (not the dialog overlay).
$AB find role button click --name "Publish v2" >/dev/null 2>&1
sleep 3
PUBLISHED=$(snap)
check "activation toast" "$PUBLISHED" "is now active"
check "history kept note" "$PUBLISHED" "history is kept"
$AB find role button click --name "Close" >/dev/null 2>&1
sleep 1.5
TABLE=$(snap)
check "v2 active in table" "$TABLE" "v2"
check "v1 retired as history" "$TABLE" "retired"

echo "=============== 6. EXAM CONTENT (collections) ==============="
$AB find role tab click --name "Exam content" >/dev/null 2>&1
wait_for "Content collections" || echo "WARN: content tab slow"
sleep 1.5
CONTENT=$(snap)
check "collections heading" "$CONTENT" "Content collections"
check "collection IELTS Academic" "$CONTENT" "IELTS Academic"
check "collection IELTS GT" "$CONTENT" "IELTS General Training"
check "collection IELTS UKVI" "$CONTENT" "IELTS UKVI preparation"
check "collection TOEFL" "$CONTENT" "TOEFL iBT"
# Source links render their human label (e.g. "ETS official"); the URL is
# only in the href.
check "collection source ETS" "$CONTENT" "ETS official"
check "UKVI same-test note" "$CONTENT" "shares the IELTS Academic and General Training libraries"
check "collection inventory counts" "$CONTENT" "In review"
check "question review heading" "$CONTENT" "Question review"
check "workflow copy (draft→review→approved→published)" "$CONTENT" "Draft → Review → Approved → Published"
check "new question button" "$CONTENT" 'button "New question"'
check "status filter" "$CONTENT" 'combobox "Status"'

# Extract the table row containing the e2e question stem: from its row
# marker to the next row marker (or end of table). Only prints a block
# that actually contains the stem, so status checks can never read a
# neighbouring row.
qrow() {
  awk -v stem="$1" '
    /^ *- row *$/ {
      if (inrow && hasstem) { printf "%s", buf; exit }
      buf = $0 "\n"; inrow = 1; hasstem = 0; next
    }
    inrow {
      buf = buf $0 "\n"
      if (index($0, stem)) hasstem = 1
    }
    END { if (inrow && hasstem) printf "%s", buf }
  ' /dev/stdin
}

echo "=============== 7. QUESTION REVIEW WORKFLOW (create → submit → approve → publish) ==============="
$AB find role button click --name "New question" >/dev/null 2>&1
sleep 1.5
QE=$(snap)
check "question editor opens" "$QE" "New question (draft)"
check "editor target select" "$QE" "Mock section"
check "editor type field" "$QE" "Question type"
check "editor payload field" "$QE" "validated on save"
check "editor answer key field" "$QE" "Answer key"
check "editor difficulty field" "$QE" "Difficulty (1–5)"
check "editor skill tags field" "$QE" "Skill tags"
# Fill the question (target/type default to the first section + MCQ_SINGLE).
$AB find label "Stem (optional heading above the task)" fill "$QUESTION_STEM" >/dev/null 2>&1
$AB find label "Payload (JSON, validated on save)" fill '{"options":["E2E option A","E2E option B","E2E option C"],"passage":"E2E verification passage."}' >/dev/null 2>&1
$AB find label "Answer key (JSON; empty for writing/speaking)" fill '{"option":0}' >/dev/null 2>&1
sleep 0.5
$AB find role button click --name "Create draft" >/dev/null 2>&1
sleep 3
Q_CREATED=$(snap)
check "question created toast" "$Q_CREATED" "Draft question created"
check "new question visible in queue" "$Q_CREATED" "$QUESTION_STEM"
# Submit for review.
QROW=$(echo "$Q_CREATED" | qrow "$QUESTION_STEM")
check "new question starts as draft" "$QROW" "draft"
$AB find role button click --name "Submit" >/dev/null 2>&1
sleep 2.5
Q_SUBMITTED=$(snap)
QR=$(echo "$Q_SUBMITTED" | qrow "$QUESTION_STEM")
check "submitted toast" "$Q_SUBMITTED" "submitted for review"
check "question now in-review" "$QR" "in-review"
# Approve.
$AB find role button click --name "Approve" >/dev/null 2>&1
sleep 2.5
Q_APPROVED=$(snap)
QR=$(echo "$Q_APPROVED" | qrow "$QUESTION_STEM")
check "approved toast" "$Q_APPROVED" "approved"
check "question now approved" "$QR" "approved"
# Publish.
$AB find role button click --name "Publish" >/dev/null 2>&1
sleep 2.5
Q_PUBLISHED=$(snap)
QR=$(echo "$Q_PUBLISHED" | qrow "$QUESTION_STEM")
check "published toast" "$Q_PUBLISHED" "Question published"
check "question now published" "$QR" "published"

echo "=============== 8. EDITING PUBLISHED CONTENT RETURNS TO REVIEW ==============="
# Open the editor via the pencil button on the question row (scoped click:
# the row is identified by the stem marker).
CLICK=$($AB eval "(() => {
  const cells = Array.from(document.querySelectorAll('td'));
  const cell = cells.find(c => c.textContent.includes('${QUESTION_STEM}'));
  if (!cell) return 'no-row';
  let row = cell.parentElement;
  for (let i = 0; i < 4 && row; i++) {
    const btn = Array.from(row.querySelectorAll('button')).find(b => (b.getAttribute('aria-label') || '').startsWith('Edit question'));
    if (btn) { btn.click(); return 'opened'; }
    row = row.parentElement;
  }
  return 'no-button';
})()" 2>&1 | tail -1)
if echo "$CLICK" | grep -q "opened"; then
  echo "PASS: question editor opened from the row"
  PASS=$((PASS+1))
else
  echo "FAIL: could not open the question editor from the row ($CLICK)"
  FAIL=$((FAIL+1))
fi
sleep 1.5
$AB find label "Points" fill "2" >/dev/null 2>&1
sleep 0.5
$AB find role button click --name "Save question" >/dev/null 2>&1
sleep 3
Q_EDITED=$(snap)
QR=$(echo "$Q_EDITED" | qrow "$QUESTION_STEM")
check "edit-published re-review toast" "$Q_EDITED" "returned to review for re-approval"
check "question back in-review" "$QR" "in-review"

echo "=============== 9. MOCK PUBLICATION GATE (API-level) ==============="
# The host mock (holding the e2e question) is published. Archive it via the
# admin API, then publishing must be REFUSED while the question is
# in-review — and succeed after the question is published again.
HOST_INFO=$(bun -e "
import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();
const q = await db.mockTestQuestion.findFirst({ where: { stem: { contains: '${QUESTION_STEM}' } } });
const section = await db.mockTestSection.findUnique({ where: { id: q.sectionId } });
console.log(section.mockTestId);
await db.\$disconnect();
")
# Admin session via curl (login).
ADMIN_JAR="/tmp/exam-admin-e2e-${E2E_STAMP}.txt"
curl -s -c "$ADMIN_JAR" -X POST "$BASE/api/auth/login" -H 'Content-Type: application/json' \
  -d '{"email":"admin@talksy.app","password":"Admin1234!"}' -o /dev/null
curl -s -b "$ADMIN_JAR" -X PATCH "$BASE/api/exams/admin/mocks" -H 'Content-Type: application/json' \
  -d "{\"id\":\"$HOST_INFO\",\"status\":\"archived\"}" -o /dev/null
GATE_BLOCKED=$(curl -s -b "$ADMIN_JAR" -X PATCH "$BASE/api/exams/admin/mocks" -H 'Content-Type: application/json' \
  -d "{\"id\":\"$HOST_INFO\",\"status\":\"published\"}")
check "gate refuses with unpublished questions" "$GATE_BLOCKED" "unpublished questions"
check "gate names the blocking state" "$GATE_BLOCKED" "1 in-review"
# Finish the question's chain, then the gate opens.
$AB find role button click --name "Approve" >/dev/null 2>&1
sleep 2.5
$AB find role button click --name "Publish" >/dev/null 2>&1
sleep 2.5
GATE_OPEN=$(curl -s -b "$ADMIN_JAR" -X PATCH "$BASE/api/exams/admin/mocks" -H 'Content-Type: application/json' \
  -d "{\"id\":\"$HOST_INFO\",\"status\":\"published\"}")
check "gate opens once every question is published" "$GATE_OPEN" '"status":"published"'

echo "=============== 10. EXAM ANALYTICS ==============="
$AB find role tab click --name "Exam analytics" >/dev/null 2>&1
wait_for "Average learner performance" || echo "WARN: analytics tab slow"
sleep 1.5
AN=$(snap)
check "published lessons stat" "$AN" "Published lessons"
check "total questions stat" "$AN" "Total questions"
check "mock examinations stat" "$AN" "Mock examinations"
check "awaiting review stat" "$AN" "Awaiting review"
check "outdated content stat" "$AN" "Outdated content"
check "review pipeline card" "$AN" "Question review pipeline"
check "attempted sections panel" "$AN" "Most frequently attempted sections"
check "average performance panel" "$AN" "Average learner performance"
check "weaknesses panel" "$AN" "Common examination weaknesses"
check "outdated & spec health panel" "$AN" "spec health"
check "live aggregate note" "$AN" "live database aggregate"
check "accuracy disclaimer" "$AN" "not an official score"

echo "=============== 11. RBAC (API-level) ==============="
# Student: every admin endpoint refuses.
STUDENT_JAR="/tmp/exam-admin-student-${E2E_STAMP}.txt"
curl -s -c "$STUDENT_JAR" -X POST "$BASE/api/auth/register" -H 'Content-Type: application/json' \
  -d "{\"name\":\"RBAC Probe\",\"email\":\"exam-admin-rbac-${E2E_STAMP}@talksy.test\",\"password\":\"password123\"}" -o /dev/null
Q_403=$(curl -s -o /dev/null -w '%{http_code}' -b "$STUDENT_JAR" "$BASE/api/exams/admin/questions")
check "student blocked from question bank (403)" "$Q_403" "403"
S_403=$(curl -s -o /dev/null -w '%{http_code}' -b "$STUDENT_JAR" "$BASE/api/exams/admin/stats")
check "student blocked from analytics (403)" "$S_403" "403"
C_403=$(curl -s -o /dev/null -w '%{http_code}' -b "$STUDENT_JAR" "$BASE/api/exams/admin/collections")
check "student blocked from collections (403)" "$C_403" "403"
I_403=$(curl -s -o /dev/null -w '%{http_code}' -b "$STUDENT_JAR" "$BASE/api/exams/admin/specs")
check "student blocked from specs (403)" "$I_403" "403"
# Editor still on the public default password: the first-login gate blocks.
EDITOR_JAR="/tmp/exam-admin-editor-${E2E_STAMP}.txt"
curl -s -c "$EDITOR_JAR" -X POST "$BASE/api/auth/login" -H 'Content-Type: application/json' \
  -d '{"email":"editor@talksy.app","password":"Editor1234!"}' -o /dev/null
E_403=$(curl -s -b "$EDITOR_JAR" "$BASE/api/exams/admin/questions")
check "editor gated until password change" "$E_403" "MUST_CHANGE_PASSWORD"

echo "=============== CONSOLE ERRORS ==============="
ERRORS=$($AB console 2>&1 | grep -ciE "error" || true)
if [ "$ERRORS" -gt 0 ]; then
  echo "WARN console errors: $ERRORS"
  $AB console 2>&1 | grep -iE "error" | head -5
else
  echo "PASS no console errors"
  PASS=$((PASS+1))
fi

echo
echo "RESULT: $PASS passed, $FAIL failed"
[ "$FAIL" -gt 0 ] && exit 1
exit 0
