#!/usr/bin/env bash
# PROMPT 51 end-to-end smoke against the live dev server (db/custom.db).
set -euo pipefail
BASE="http://localhost:3000"
JAR="/tmp/p51-cookies.txt"
rm -f "$JAR"

EMAIL="p51-smoke-$(date +%s)@talksy.test"
step() { printf '\n== %s ==\n' "$1"; }

step "register a learner"
curl -s -c "$JAR" -H 'content-type: application/json' \
  -d "{\"email\":\"$EMAIL\",\"name\":\"P51 Smoke\",\"password\":\"password123\"}" \
  -o /tmp/p51-reg.json -w "status %{http_code}\n" "$BASE/api/auth/register"

step "topic catalogue (IELTS Academic)"
curl -s -b "$JAR" "$BASE/api/exams/practice/topic?exam=IELTS&variant=ACADEMIC" \
  -o /tmp/p51-topics.json -w "status %{http_code}\n"
python3 -c "
import json
topics = json.load(open('/tmp/p51-topics.json'))['topics']
print('topics:', len(topics))
for t in topics[:5]: print(' -', t['skill'], '→', t['label'], f\"({t['count']} items, {','.join(t['sections'])})\")
"

step "topic catalogue (TOEFL iBT)"
curl -s -b "$JAR" "$BASE/api/exams/practice/topic?exam=TOEFL_IBT&variant=STANDARD" \
  -o /tmp/p51-topics-t.json -w "status %{http_code}\n"
python3 -c "
import json
topics = json.load(open('/tmp/p51-topics-t.json'))['topics']
print('topics:', len(topics))
for t in topics[:5]: print(' -', t['skill'], '→', t['label'], f\"({t['count']} items)\")
"

step "start topic-specific practice (timed off)"
curl -s -b "$JAR" -H 'content-type: application/json' \
  -d '{"examKey":"IELTS","variant":"ACADEMIC","topic":"detail","count":6,"timed":false}' \
  -o /tmp/p51-topic.json -w "status %{http_code}\n" "$BASE/api/exams/practice/topic"
python3 -c "
import json; d = json.load(open('/tmp/p51-topic.json'))
print('mockId', d['mockId'][:8], '· items', d['itemCount'], '· mode', d['attempt']['mode'], '· timed', d['attempt']['timed'])
"

step "weakness preview (cold start)"
curl -s -b "$JAR" "$BASE/api/exams/practice/weakness?exam=IELTS&variant=ACADEMIC" \
  -o /tmp/p51-weak.json -w "status %{http_code}\n"
python3 -c "
import json; p = json.load(open('/tmp/p51-weak.json'))['profile']
print('evidence', p['evidenceItems'], '· enough?', p['hasEnoughEvidence'])
"

step "weakness assembly must be refused (409) on cold start"
curl -s -b "$JAR" -H 'content-type: application/json' \
  -d '{"examKey":"IELTS","variant":"ACADEMIC"}' \
  -o /tmp/p51-weak-post.json -w "status %{http_code}\n" "$BASE/api/exams/practice/weakness"
python3 -c "
import json; print(json.load(open('/tmp/p51-weak-post.json'))['error'][:110])
"

step "start diagnostic assessment (timed by design)"
curl -s -b "$JAR" -H 'content-type: application/json' \
  -d '{"examKey":"IELTS","variant":"ACADEMIC"}' \
  -o /tmp/p51-diag.json -w "status %{http_code}\n" "$BASE/api/exams/practice/diagnostic"
python3 -c "
import json; d = json.load(open('/tmp/p51-diag.json'))
print('mockId', d['mockId'][:8], '· items', d['itemCount'], '· mode', d['attempt']['mode'], '· timed', d['attempt']['timed'])
import sys; open('/tmp/p51-diag-attempt','w').write(d['attempt']['id'])
"

step "start adaptive practice (honesty note travels)"
curl -s -b "$JAR" -H 'content-type: application/json' \
  -d '{"examKey":"TOEFL_IBT","variant":"STANDARD","count":8}' \
  -o /tmp/p51-adaptive.json -w "status %{http_code}\n" "$BASE/api/exams/practice/adaptive"
python3 -c "
import json; d = json.load(open('/tmp/p51-adaptive.json'))
print('items', d['itemCount'], '· mode', d['attempt']['mode'])
print('note:', d['adaptiveNote'][:100])
open('/tmp/p51-adaptive-attempt','w').write(d['attempt']['id'])
"

step "abandon the adaptive attempt (responses preserved)"
ADAPTIVE_ID=$(cat /tmp/p51-adaptive-attempt)
curl -s -b "$JAR" -X POST -o /tmp/p51-abandon.json -w "status %{http_code}\n" \
  "$BASE/api/exams/attempts/$ADAPTIVE_ID/abandon"
python3 -c "
import json; d = json.load(open('/tmp/p51-abandon.json'))
print('abandoned:', d['abandoned'], '· saved responses:', d['savedResponses'])
"

step "abandoned attempt exposes no result report (answer key unreachable)"
curl -s -b "$JAR" -o /tmp/p51-result-gone.json -w "status %{http_code}\n" \
  "$BASE/api/exams/attempts/$ADAPTIVE_ID/result"

step "history records the unfinished attempt"
curl -s -b "$JAR" "$BASE/api/exams/history" -o /tmp/p51-history.json -w "status %{http_code}\n"
python3 -c "
import json
entries = json.load(open('/tmp/p51-history.json'))['history']['attempts']
unfinished = [e for e in entries if e.get('unfinished')]
print('attempts:', len(entries), '· unfinished:', len(unfinished))
for e in unfinished[:3]: print(' -', e['status'], '·', e['modeLabel'], '·', e['scoreDisplay'])
"

step "diagnostic golden path: fetch mock, answer everything, submit, inspect the profile"
DIAG_ID=$(cat /tmp/p51-diag-attempt)
curl -s -b "$JAR" "$BASE/api/exams/attempts/$DIAG_ID" -o /tmp/p51-diag-attempt.json
python3 - <<'EOF'
import json, urllib.request

BASE = "http://localhost:3000"
jar = open("/tmp/p51-cookies.txt").read()
cookie = "; ".join(l.split("\t")[-1] for l in jar.strip().split("\n") if "session" in l)

attempt = json.load(open("/tmp/p51-diag-attempt.json"))
mock_id = attempt["attempt"]["mockTestId"]
req = urllib.request.Request(f"{BASE}/api/exams/mocks/{mock_id}", headers={"cookie": cookie})
mock = json.load(urllib.request.urlopen(req))["mock"]

answered = 0
for section in mock["sections"]:
    for q in section["questions"]:
        t = q["type"]
        if t == "MCQ_SINGLE": a = {"option": 0}
        elif t == "MCQ_MULTI": a = {"options": [0]}
        elif t == "TFNG": a = {"value": 0}
        elif t == "MATCHING":
            payload = q["payload"]
            a = {"pairs": {i["id"]: payload["options"][0]["id"] for i in payload["items"]}}
        elif t in ("COMPLETE_WORDS",): a = {"words": ["placeholder"] * len(q["payload"].get("words", []))}
        elif t == "FILL_BLANK":
            a = {"blanks": [""] * len(q["payload"].get("blanks", []))}
        elif t in ("DICTATION", "LISTEN_REPEAT", "SENTENCE_RECONSTRUCTION"): a = {"text": "smoke"}
        else: a = {"text": "Smoke response for the diagnostic assessment, written to exercise the writing editor."}
        body = json.dumps({"questionId": q["id"], "answer": a, "timeDeltaSec": 20}).encode()
        req = urllib.request.Request(
            f"{BASE}/api/exams/attempts/{open('/tmp/p51-diag-attempt').read().strip()}",
            data=body, headers={"cookie": cookie, "content-type": "application/json"}, method="PATCH")
        urllib.request.urlopen(req)
        answered += 1
print("answered", answered, "questions")

req = urllib.request.Request(
    f"{BASE}/api/exams/attempts/{open('/tmp/p51-diag-attempt').read().strip()}/submit",
    data=b"", headers={"cookie": cookie}, method="POST")
result = json.load(urllib.request.urlopen(req))["result"]

print("status:", result["status"], "· mode:", result["mode"], "· timed:", result["timed"])
print("overall:", result["scoreDisplay"])
print("task performance rows:", len(result["taskPerformance"]))
for row in result["taskPerformance"][:6]:
    print(f" - {row['label']}: {row['correct']}/{row['total']} · avg {row['avgTimeSec']}s")
print("time utilisation:")
for row in result["timeUtilisation"]:
    print(f" - {row['section']}: {row['trackedSec']}s tracked / {row['allottedSec']}s allotted · {row['pace']}")
profile = result["diagnosticProfile"]
print("diagnostic profile sections:", [(s["section"], s["estimatedScore"]) for s in profile["sections"]])
print("weakest skills:", [(s["label"], f\"{s['correct']}/{s['total']}\") for s in profile["weakestSkills"]])
print("summary:", profile["summary"][:170])
print("integrity:", result["integrityNote"][:80])
EOF
