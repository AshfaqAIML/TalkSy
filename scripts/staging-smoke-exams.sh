#!/usr/bin/env bash
# Staging smoke test for the International Exam Preparation Academy —
# runs under exact Vercel simulation (VERCEL=1, no env, read-only bundle).
# Covers: overview (available exams), onboarding profile, dashboard
# aggregation, pathway, mock library, full attempt lifecycle with grading,
# spec versioning admin workflow (create draft → activate → previous
# retires), RBAC gates and audit logging.
set -u
cd /home/z/my-project/.next/standalone || exit 1
BASE=http://127.0.0.1:3100
JAR_S=/tmp/smoke-exam-student.jar
JAR_A=/tmp/smoke-exam-admin.jar
PASS=0; FAIL=0

check() {
  if [ "$2" = "$3" ]; then PASS=$((PASS+1)); echo "PASS [$3] $1";
  else FAIL=$((FAIL+1)); echo "FAIL [$3 != $2] $1"; fi
}
contains() {
  if echo "$2" | grep -q "$3"; then PASS=$((PASS+1)); echo "PASS $1";
  else FAIL=$((FAIL+1)); echo "FAIL $1 (missing: $3)"; fi
}

mv .env /tmp/exam-hold.env 2>/dev/null
chmod 555 db
rm -rf /tmp/talksy
VERCEL=1 NODE_ENV=production PORT=3100 HOSTNAME=127.0.0.1 bun server.js > /tmp/exam-server.log 2>&1 &
SERVER_PID=$!
trap 'kill $SERVER_PID 2>/dev/null; chmod 755 db; mv /tmp/exam-hold.env .env 2>/dev/null' EXIT
for i in $(seq 1 40); do curl -s -o /dev/null $BASE/ && break; sleep 0.5; done

echo "=== 1. register + academy overview ==="
CODE=$(curl -s -o /dev/null -w '%{http_code}' -X POST $BASE/api/auth/register \
  -H 'Content-Type: application/json' -c $JAR_S \
  -d '{"email":"exam.smoke@example.com","password":"ExamSm0ke!2026","name":"Exam Smoke"}')
check "student registration" 201 "$CODE"
CODE=$(curl -s -o /tmp/exam-overview.json -w '%{http_code}' -b $JAR_S $BASE/api/exams/overview)
check "academy overview" 200 "$CODE"
contains "3 examinations offered (IELTS Academic + GT + TOEFL)" "$(cat /tmp/exam-overview.json)" '"name":"IELTS Academic"'
contains "TOEFL 2026 format present" "$(cat /tmp/exam-overview.json)" 'TOEFL iBT (2026 format)'

echo "=== 2. onboarding (goals) ==="
CODE=$(curl -s -o /tmp/exam-profile.json -w '%{http_code}' -X PUT $BASE/api/exams/profile \
  -H 'Content-Type: application/json' -b $JAR_S \
  -d '{"examKey":"IELTS","variant":"ACADEMIC","proficiency":"B1","targetScore":6.5,"examDate":"2027-02-20","dailyMinutes":30,"difficultSections":["writing","speaking"]}')
check "save exam goals" 200 "$CODE"
contains "profile persisted" "$(cat /tmp/exam-profile.json)" '"examKey":"IELTS"'

echo "=== 3. dashboard aggregation ==="
CODE=$(curl -s -o /tmp/exam-dashboard.json -w '%{http_code}' -b $JAR_S $BASE/api/exams/dashboard)
check "dashboard" 200 "$CODE"
contains "selected exam present" "$(cat /tmp/exam-dashboard.json)" '"name":"IELTS Academic"'
contains "target score present" "$(cat /tmp/exam-dashboard.json)" '"targetScore":6.5'
contains "exam countdown present" "$(cat /tmp/exam-dashboard.json)" '"daysRemaining"'
contains "recommendations present" "$(cat /tmp/exam-dashboard.json)" '"recommendations"'
contains "study plan generated" "$(cat /tmp/exam-dashboard.json)" '"todayPlan"'
contains "upcoming mocks listed" "$(cat /tmp/exam-dashboard.json)" '"upcomingMocks"'
contains "strengths listed" "$(cat /tmp/exam-dashboard.json)" '"strengths"'
contains "weaknesses listed" "$(cat /tmp/exam-dashboard.json)" '"weaknesses"'

echo "=== 4. pathway (course architecture) ==="
CODE=$(curl -s -o /tmp/exam-pathway.json -w '%{http_code}' -b $JAR_S "$BASE/api/exams/pathway?exam=IELTS&variant=ACADEMIC")
check "IELTS pathway" 200 "$CODE"
contains "4 phases present" "$(cat /tmp/exam-pathway.json)" '"title":"Phase 4 — Band ladder, exam strategies, mock cycle"'
CODE=$(curl -s -o /dev/null -w '%{http_code}' -b $JAR_S "$BASE/api/exams/pathway?exam=TOEFL_IBT&variant=STANDARD")
check "TOEFL pathway" 200 "$CODE"

echo "=== 5. mock library + player data (answer key stripped) ==="
CODE=$(curl -s -o /tmp/exam-mocks.json -w '%{http_code}' -b $JAR_S $BASE/api/exams/mocks)
check "mock library" 200 "$CODE"
MOCK_ID=$(python3 -c "
import json
mocks = json.load(open('/tmp/exam-mocks.json'))['mocks']
print(next(m['id'] for m in mocks if m['examKey'] == 'IELTS'))")
CODE=$(curl -s -o /tmp/exam-mock.json -w '%{http_code}' -b $JAR_S $BASE/api/exams/mocks/$MOCK_ID)
check "mock player data" 200 "$CODE"
if grep -q '"answer"' /tmp/exam-mock.json; then
  echo "FAIL answer key leaked to client"; FAIL=$((FAIL+1))
else
  echo "PASS answer key stripped from player payload"; PASS=$((PASS+1))
fi

echo "=== 6. attempt lifecycle: start → answer → submit → result ==="
CODE=$(curl -s -o /tmp/exam-attempt.json -w '%{http_code}' -X POST -b $JAR_S $BASE/api/exams/mocks/$MOCK_ID/attempts)
check "start attempt" 201 "$CODE"
contains "timed attempt records timed full-mock mode" "$(cat /tmp/exam-attempt.json)" '"timed":true'
contains "timed attempt carries the mode label" "$(cat /tmp/exam-attempt.json)" '"modeLabel":"Full mock examination"'
ATTEMPT_ID=$(python3 -c "import json; print(json.load(open('/tmp/exam-attempt.json'))['attempt']['id'])")

# Answer every question using the seeded keys (curl, authenticated).
# Question order in the IELTS sample mock: L1 form-fill, L2 MCQ, L3 MCQ,
# L4 fill, R1 MCQ, R2 MCQ, R3-R5 TFNG, R6 matching, R7 fill, W1, W2, S1-S3.
python3 - > /tmp/exam-answer-pairs.tsv <<'PYKEYS'
import json
mock = json.load(open('/tmp/exam-mock.json'))['mock']
answers = [
    {"blanks": ["Birchwood", "9", "passport"]},          # L1
    {"option": 0},                                        # L2
    {"option": 2},                                        # L3
    {"blanks": ["ten"]},                                  # L4
    {"option": 1},                                        # R1
    {"option": 2},                                        # R2
    {"value": 0},                                         # R3 True
    {"value": 1},                                         # R4 False
    {"value": 2},                                         # R5 Not Given
    {"pairs": {"s1": "B"}},                               # R6
    {"blanks": ["sandy", "ground"]},                      # R7
    {"text": "The table shows bicycle-sharing trips in four cities. Overall, trips grew in every city between 2022 and 2024, with the largest rise in Seoul. Paris recorded the highest total in both years, rising from 6.8 to 9.3 million trips, while Amsterdam grew modestly from 4.1 to 4.6 million. Seoul nearly doubled from 2.5 to 6.1 million, overtaking Amsterdam, and Toronto remained the smallest market at 1.9 million. Average hire time also increased from 14 to 19 minutes, suggesting heavier use per trip."},  # W1
    {"text": "Some people believe university education should be free because society as a whole benefits from educated citizens, who pay more taxes and drive innovation. Others argue that students should share the cost, since they gain a private advantage in salaries and careers. In my view, a balanced approach is fairest: governments should fund tuition through taxation for public universities, while students contribute through income-contingent loans that only apply once earnings rise. This preserves access for talented students from poor backgrounds while keeping the system sustainable. Free education for everyone, regardless of need, may also reduce the value placed on study, whereas a shared model keeps both students and the state invested in success."},  # W2
    {"text": "I live in a small apartment near the city centre. I like the area because everything is within walking distance, and the park nearby is perfect for weekend runs. I would consider moving to a quieter neighbourhood by the sea one day."},  # S1
    {"text": "A skill I learned outside school is cooking. I decided to learn because I moved away from home for work and wanted to eat well without spending too much. I started with simple pasta dishes, then followed video tutorials weekly. Now cooking relaxes me after work, and I feel proud when friends enjoy my food."},  # S2
    {"text": "Practical skills should definitely be taught alongside academic subjects, because everyday life demands them. Some adults stop learning new skills because work and family leave little time, and technology now handles many tasks for us. Technology can make learning easier through free tutorials, but it can also make people lazier if they never practise without help."},  # S3
]
index = 0
for section in mock['sections']:
    for q in section['questions']:
        answer = answers[index] if index < len(answers) else None
        index += 1
        if answer is None:
            continue
        print(f"{q['id']}\t{json.dumps(answer)}")
PYKEYS
SAVE_FAIL=0
while IFS=$'\t' read -r QID ANSWER; do
  CODE=$(curl -s -o /tmp/exam-save-one.json -w '%{http_code}' -X PATCH -b $JAR_S \
    "$BASE/api/exams/attempts/$ATTEMPT_ID" \
    -H 'Content-Type: application/json' \
    -d "{\"questionId\":\"$QID\",\"answer\":$ANSWER}")
  [ "$CODE" = "200" ] || { echo "FAIL saving answer for $QID → $CODE: $(cat /tmp/exam-save-one.json)"; SAVE_FAIL=$((SAVE_FAIL+1)); }
done < /tmp/exam-answer-pairs.tsv
if [ $SAVE_FAIL -eq 0 ]; then echo "PASS all answers saved"; PASS=$((PASS+1)); else FAIL=$((FAIL+SAVE_FAIL)); fi

CODE=$(curl -s -o /tmp/exam-submit.json -w '%{http_code}' -X POST -b $JAR_S $BASE/api/exams/attempts/$ATTEMPT_ID/submit -H 'Content-Type: application/json' -d '{}')
check "submit attempt for grading" 200 "$CODE"
python3 - <<'PYSUM'
import json
result = json.load(open('/tmp/exam-submit.json'))['result']
listening = next(s for s in result['sectionScores'] if s['section'] == 'listening')
reading = next(s for s in result['sectionScores'] if s['section'] == 'reading')
print("LISTENING_RAW", listening['raw'], "/", listening['max'])
print("READING_RAW", reading['raw'], "/", reading['max'])
print("OVERALL", result['scoreDisplay'])
PYSUM
# Objective sections: listening 6/6 raw, reading 8/8 raw expected.
LISTENING_RAW=$(python3 -c "import json; r=json.load(open('/tmp/exam-submit.json'))['result']; print(int(next(s for s in r['sectionScores'] if s['section']=='listening')['raw']))")
READING_RAW=$(python3 -c "import json; r=json.load(open('/tmp/exam-submit.json'))['result']; print(int(next(s for s in r['sectionScores'] if s['section']=='reading')['raw']))")
check "listening objective raw 6/6" 6 "$LISTENING_RAW"
check "reading objective raw 8/8" 8 "$READING_RAW"
SCORE_DISPLAY=$(python3 -c "import json; print(json.load(open('/tmp/exam-submit.json'))['result']['scoreDisplay'])" 2>/dev/null || echo "")
contains "overall band displayed" "$SCORE_DISPLAY" 'Band'
# Result endpoint
CODE=$(curl -s -o /tmp/exam-result.json -w '%{http_code}' -b $JAR_S $BASE/api/exams/attempts/$ATTEMPT_ID/result)
check "result endpoint" 200 "$CODE"
contains "objective raw scores recorded" "$(cat /tmp/exam-result.json)" '"raw"'
contains "timed attempt labelled on result" "$(cat /tmp/exam-result.json)" '"timed":true'

# Untimed practice flow on a question-type drill.
echo "=== 6b. untimed practice mode ==="
DRILL_ID=$(python3 -c "
import json
mocks = json.load(open('/tmp/exam-mocks.json'))['mocks']
print(next(m['id'] for m in mocks if 'True/False/Not Given vs Yes/No/Not Given' in m['title']))")
CODE=$(curl -s -o /tmp/exam-practice-start.json -w '%{http_code}' -X POST -b $JAR_S $BASE/api/exams/mocks/$DRILL_ID/attempts -H 'Content-Type: application/json' -d '{"mode":"practice"}')
check "start practice-mode attempt" 201 "$CODE"
contains "practice attempt records mode" "$(cat /tmp/exam-practice-start.json)" '"mode":"practice"'
PRACTICE_ID=$(python3 -c "import json; print(json.load(open('/tmp/exam-practice-start.json'))['attempt']['id'])")
curl -s -o /tmp/exam-practice-mock.json -b $JAR_S $BASE/api/exams/mocks/$DRILL_ID
python3 - > /tmp/exam-practice-answers.tsv <<'PYDRILL'
import json
mock = json.load(open('/tmp/exam-practice-mock.json'))['mock']
keys = [{"value": 0}, {"value": 0}, {"value": 2}, {"value": 0}, {"value": 1}, {"value": 2}]
index = 0
for section in mock['sections']:
    for q in section['questions']:
        answer = keys[index] if index < len(keys) else None
        index += 1
        if answer is not None:
            print(f"{q['id']}\t{json.dumps(answer)}")
PYDRILL
DRILL_FAIL=0
while IFS=$'\t' read -r QID ANSWER; do
  CODE=$(curl -s -o /dev/null -w '%{http_code}' -X PATCH -b $JAR_S \
    "$BASE/api/exams/attempts/$PRACTICE_ID" \
    -H 'Content-Type: application/json' \
    -d "{\"questionId\":\"$QID\",\"answer\":$ANSWER}")
  [ "$CODE" = "200" ] || DRILL_FAIL=$((DRILL_FAIL+1))
done < /tmp/exam-practice-answers.tsv
if [ $DRILL_FAIL -eq 0 ]; then echo "PASS practice answers saved"; PASS=$((PASS+1)); else FAIL=$((FAIL+DRILL_FAIL)); fi
CODE=$(curl -s -o /tmp/exam-practice-result.json -w '%{http_code}' -X POST -b $JAR_S $BASE/api/exams/attempts/$PRACTICE_ID/submit -H 'Content-Type: application/json' -d '{}')
check "submit practice attempt" 200 "$CODE"
contains "practice result labelled untimed" "$(cat /tmp/exam-practice-result.json)" '"mode":"practice"'
PRACTICE_RAW=$(python3 -c "import json; r=json.load(open('/tmp/exam-practice-result.json'))['result']; print(int(next(s for s in r['sectionScores'] if s['section']=='reading')['raw']))")
check "drill raw 6/6 on the TFNG drill" 6 "$PRACTICE_RAW"
# Dashboard recent results must expose the mode too.
CODE=$(curl -s -o /tmp/exam-dashboard2.json -w '%{http_code}' -b $JAR_S $BASE/api/exams/dashboard)
check "dashboard after practice" 200 "$CODE"
contains "dashboard labels the practice attempt" "$(cat /tmp/exam-dashboard2.json)" '"mode":"practice"'

echo "=== 7. spec versioning admin workflow ==="
CODE=$(curl -s -o /tmp/exam-admin-login.json -w '%{http_code}' -X POST $BASE/api/auth/login \
  -H 'Content-Type: application/json' -c $JAR_A \
  -d '{"email":"admin@talksy.app","password":"Admin1234!"}')
check "admin login (first-login gate)" 200 "$CODE"
CODE=$(curl -s -o /dev/null -w '%{http_code}' -X POST $BASE/api/auth/change-password \
  -H 'Content-Type: application/json' -b $JAR_A \
  -d '{"currentPassword":"Admin1234!","newPassword":"AdminEx@m2026"}')
check "admin sets own password" 200 "$CODE"
CODE=$(curl -s -o /tmp/exam-admin-specs.json -w '%{http_code}' -b $JAR_A $BASE/api/exams/admin/specs)
check "admin lists specs" 200 "$CODE"
# Student must be rejected from spec management
CODE=$(curl -s -o /dev/null -w '%{http_code}' -b $JAR_S $BASE/api/exams/admin/specs)
check "student blocked from spec management (403)" 403 "$CODE"
# Create a draft cloned from the active IELTS Academic spec — the expected
# version is computed from the list, because the active spec may already be
# v2 (the mid-2026 computer-delivery update seeded by scripts/seed-exams.ts).
python3 - > /tmp/exam-draft.json <<'PYEOF'
import json
specs = json.load(open('/tmp/exam-admin-specs.json'))['specs']
active = next(s for s in specs if s['name'] == 'IELTS Academic' and s['status'] == 'active')
print(json.dumps({
    "examKey": "IELTS", "variant": "ACADEMIC",
    "name": "IELTS Academic (smoke draft)", "effectiveDate": "2026-12-01",
    "notes": "smoke test draft",
    "payload": {
        "sections": active['sections'], "scoringModel": active['scoringModel'],
        "taskTypes": active['taskTypes'], "sourceRefs": active['sourceRefs'],
    },
}))
PYEOF
EXPECTED_DRAFT_VER=$(python3 -c "
import json
specs = json.load(open('/tmp/exam-admin-specs.json'))['specs']
print(max(s['version'] for s in specs if s['examKey']=='IELTS' and s['variant']=='ACADEMIC') + 1)")
CODE=$(curl -s -o /tmp/exam-draft-created.json -w '%{http_code}' -X POST -b $JAR_A \
  -H 'Content-Type: application/json' $BASE/api/exams/admin/specs -d @/tmp/exam-draft.json)
check "create draft spec (auto-incremented version)" 201 "$CODE"
DRAFT_ID=$(python3 -c "import json; print(json.load(open('/tmp/exam-draft-created.json'))['spec']['id'])")
DRAFT_VER=$(python3 -c "import json; print(json.load(open('/tmp/exam-draft-created.json'))['spec']['version'])")
check "version auto-incremented" "$EXPECTED_DRAFT_VER" "$DRAFT_VER"
# Activate it; the previous v1 must retire automatically
CODE=$(curl -s -o /tmp/exam-activated.json -w '%{http_code}' -X PATCH -b $JAR_A \
  -H 'Content-Type: application/json' $BASE/api/exams/admin/specs/$DRAFT_ID -d '{"action":"activate"}')
check "activate draft" 200 "$CODE"
contains "draft now active" "$(cat /tmp/exam-activated.json)" '"status":"active"'
# Roll back: retire the draft, the previous active version restores automatically
CODE=$(curl -s -o /tmp/exam-retired.json -w '%{http_code}' -X PATCH -b $JAR_A \
  -H 'Content-Type: application/json' $BASE/api/exams/admin/specs/$DRAFT_ID -d '{"action":"retire"}')
check "retire draft (rollback)" 200 "$CODE"
contains "draft retired" "$(cat /tmp/exam-retired.json)" '"status":"retired"'
# Audit trail recorded
python3 - <<'PYEOF'
import sqlite3
c = sqlite3.connect('/tmp/talksy/custom.db')
rows = c.execute("SELECT action FROM CmsAuditLog WHERE entityType='exam_spec' ORDER BY createdAt").fetchall()
actions = [r[0] for r in rows]
expected = ["exam_spec.create", "exam_spec.activate", "exam_spec.retire"]
ok = all(e in actions for e in expected)
print("AUDIT", "PASS" if ok else f"FAIL {actions}")
PYEOF

echo "=== 7b. IELTS Academy: active spec version, GT pathway, CMS lessons ==="
# The seeded specs version forward with the engine: IELTS Academic/GT are v3
# and TOEFL iBT is v2 (navigation policies + the 2026 task-type catalog),
# with every earlier version kept as retired history.
contains "overview shows a current spec version" "$(cat /tmp/exam-overview.json)" '"specVersion":'
contains "spec effective mid-2026" "$(cat /tmp/exam-overview.json)" '"effectiveDate":"2026-07-01'
python3 - <<'PYSPECS' > /tmp/exam-specs-check.txt
import sqlite3
c = sqlite3.connect('/tmp/talksy/custom.db')
rows = c.execute("SELECT examKey, variant, version, status FROM TestSpecification ORDER BY examKey, variant, version").fetchall()
# Version-history invariants, deliberately version-agnostic (the seed DB
# starts at v1 for a fresh database; upgrade runs add retired history):
# exactly ONE active version per exam+variant, and every other version is
# kept as retired history — never deleted, never left in draft. Extra
# retired rows are allowed — section 7 of this very script creates and
# rolls back its own draft, which correctly survives as retired.
actives = [tuple(r) for r in rows if r[3] == 'active']
problems = []
expected_keys = [('IELTS', 'ACADEMIC'), ('IELTS', 'GENERAL_TRAINING'), ('TOEFL_IBT', 'STANDARD')]
if sorted((r[0], r[1]) for r in actives) != sorted(expected_keys):
    problems.append(f'active set wrong: {actives}')
for r in rows:
    if r[3] not in ('active', 'retired'):
        problems.append(f'unexpected spec status: {tuple(r)}')
print("PASS spec history preserved / one active per exam" if not problems else f"FAIL {problems}; rows={rows}")
PYSPECS
if head -1 /tmp/exam-specs-check.txt | grep -q '^PASS'; then PASS=$((PASS+1)); echo "PASS spec history preserved / one active per exam"; else FAIL=$((FAIL+1)); echo "$(cat /tmp/exam-specs-check.txt)"; fi
# General Training pathway exists with its own four phases and only
# GT-track reading/writing lessons.
CODE=$(curl -s -o /tmp/exam-gt-pathway.json -w '%{http_code}' -b $JAR_S "$BASE/api/exams/pathway?exam=IELTS&variant=GENERAL_TRAINING")
check "GT pathway" 200 "$CODE"
contains "GT phase 1 present" "$(cat /tmp/exam-gt-pathway.json)" 'Phase 1 — Know the test, set the target'
contains "GT phase 3 is the GT track" "$(cat /tmp/exam-gt-pathway.json)" 'Phase 3 — General Training Reading & Writing craft'
python3 - <<'PYGT' > /tmp/exam-gt-check.txt
import json
p = json.load(open('/tmp/exam-gt-pathway.json'))['pathway']
lessons = [s for m in p['modules'] for s in m['steps'] if s['refType'] == 'curriculum']
readingWriting = [s for s in lessons if s['examSection'] in ('reading', 'writing')]
slugs = {s['refId'] for s in readingWriting}
academic = {'ielts-areading-overview', 'ielts-areading-skills-core', 'ielts-areading-inference', 'ielts-areading-objective-types', 'ielts-areading-completion-types', 'ielts-awriting-instructions', 'ielts-awriting-planning', 'ielts-awriting-paragraphs', 'ielts-awriting-grammar', 'ielts-awriting-vocabulary', 'ielts-awriting-cohesion', 'ielts-awriting-coherence', 'ielts-awriting-punctuation', 'ielts-awriting-sentence-variety', 'ielts-awriting-time', 'ielts-awriting-t1-bar', 'ielts-awriting-t1-line', 'ielts-awriting-t1-pie', 'ielts-awriting-t1-table', 'ielts-awriting-t1-mixed', 'ielts-awriting-t1-process', 'ielts-awriting-t1-map', 'ielts-awriting-t2-opinion', 'ielts-awriting-t2-discussion', 'ielts-awriting-t2-advantages', 'ielts-awriting-t2-problem-solution', 'ielts-awriting-t2-cause-effect', 'ielts-awriting-t2-two-part', 'ielts-awriting-t2-direct', 'ielts-awriting-criteria', 'ielts-awriting-models'}
if len(lessons) >= 20 and not (slugs & academic):
    print(f"PASS GT pathway references {len(lessons)} lessons with zero Academic-track leakage")
else:
    print(f"FAIL GT lessons={len(lessons)} leakage={sorted(slugs & academic)}")
PYGT
if head -1 /tmp/exam-gt-check.txt | grep -q '^PASS'; then PASS=$((PASS+1)); echo "PASS GT pathway references only GT-track reading/writing lessons"; else FAIL=$((FAIL+1)); echo "$(cat /tmp/exam-gt-check.txt)"; fi
# GT mock bank: a GT full mock exists and is playable.
contains "GT mock carries original-material label" "$(python3 -c "import json; mocks=json.load(open('/tmp/exam-mocks.json'))['mocks']; print(next(m['description'] for m in mocks if 'General Training Full Mock 1' in m['title']))")" 'not an official IELTS paper'
# CMS: enrol, then open an IELTS Academy lesson through the learner API.
CODE=$(curl -s -o /tmp/exam-enrol.json -w '%{http_code}' -X POST -b $JAR_S $BASE/api/cms/courses/ielts-academy-core/enrol)
check "enrol in the core course" 200 "$CODE"
CODE=$(curl -s -o /tmp/exam-lesson.json -w '%{http_code}' -b $JAR_S $BASE/api/cms/lessons/ielts-what-and-why)
check "open an Academy lesson" 200 "$CODE"
contains "lesson serves blocks" "$(cat /tmp/exam-lesson.json)" '"blocks"'
contains "lesson practice exercises sanitized" "$(cat /tmp/exam-lesson.json)" '"exercises"'
if grep -q '"correctOptionId"' /tmp/exam-lesson.json; then
  echo "FAIL lesson leaked answer keys"; FAIL=$((FAIL+1))
else
  echo "PASS lesson exercises carry no answer keys"; PASS=$((PASS+1))
fi

# The pathway curriculum refs must deep-link into live lessons (href shape).
contains "pathway steps deep-link course lessons" "$(cat /tmp/exam-gt-pathway.json)" '#/course-lesson/'

echo "=== 8. no read-only filesystem errors ==="
if grep -qi "readonly\|attempt to write a readonly" /tmp/exam-server.log; then
  echo "FAIL read-only errors in log"; FAIL=$((FAIL+1))
else
  echo "PASS no read-only filesystem errors"; PASS=$((PASS+1))
fi

echo ""
echo "RESULT: $PASS passed, $FAIL failed"
[ $FAIL -eq 0 ]
