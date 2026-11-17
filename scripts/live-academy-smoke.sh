#!/usr/bin/env bash
# PROMPT 41 live smoke: what does the Exam Academy actually serve right now?
BASE=http://localhost:3000
J=/tmp/p41-cookies.txt
rm -f $J
echo "== login =="
curl -s -c $J -X POST $BASE/api/auth/login -H 'Content-Type: application/json' -d '{"email":"demo@talksy.app","password":"demo1234"}' | head -c 200; echo
echo "== /api/exams/overview =="
curl -s -b $J $BASE/api/exams/overview | head -c 500; echo
echo "== /api/exams/mocks =="
curl -s -b $J $BASE/api/exams/mocks | head -c 300; echo
echo "== /api/exams/pathway?exam=IELTS&variant=ACADEMIC =="
curl -s -b $J "$BASE/api/exams/pathway?exam=IELTS&variant=ACADEMIC" | head -c 300; echo
echo "== /api/exams/pathway?exam=TOEFL_IBT&variant=STANDARD =="
curl -s -b $J "$BASE/api/exams/pathway?exam=TOEFL_IBT&variant=STANDARD" | head -c 300; echo
echo "== /api/exams/dashboard =="
curl -s -b $J $BASE/api/exams/dashboard | head -c 300; echo
echo "== catalogue search: IELTS =="
curl -s -b $J "$BASE/api/catalogue?q=ielts" | head -c 400; echo
echo "== catalogue search: TOEFL =="
curl -s -b $J "$BASE/api/catalogue?q=toefl" | head -c 400; echo
echo "== course detail: ielts-academy-core =="
curl -s -b $J "$BASE/api/cms/courses/ielts-academy-core" | head -c 300; echo
echo "== pathway TOEFL phases =="
curl -s -b $J "$BASE/api/exams/pathway?exam=TOEFL_IBT&variant=STANDARD" | python3 -c "import json,sys; d=json.load(sys.stdin); print('modules:', [m['title'] for m in d['pathway']['modules']]); print('steps:', sum(len(m['steps']) for m in d['pathway']['modules']))"
echo "== mock player data (answer keys stripped?) =="
MOCKID=$(curl -s -b $J $BASE/api/exams/mocks | python3 -c "import json,sys; d=json.load(sys.stdin); print([m['id'] for m in d['mocks'] if m['examKey']=='TOEFL_IBT'][0])")
curl -s -b $J "$BASE/api/exams/mocks/$MOCKID" | python3 -c "
import json,sys
d=json.load(sys.stdin)
sec=d['mock']['sections'][0]
q=sec['questions'][0]
print('TOEFL mock:', d['mock']['title'], '| sections:', len(d['mock']['sections']), '| Q section0:', len(sec['questions']))
print('question has answer key?', 'answer' in q, '| keys in payload?', 'answer' in q.get('payload',{}))
print('types:', sorted({qq['type'] for s in d['mock']['sections'] for qq in s['questions']}))
"
echo "== IELTS lesson player =="
curl -s -b $J "$BASE/api/cms/lessons/ielts-speaking-part2" | python3 -c "
import json,sys
d=json.load(sys.stdin)
l=d['lesson']
print('lesson:', l['slug'], '| title:', l['title'], '| status:', l['status'], l.get('live'), '| minutes:', l.get('estimatedMinutes'))
print('blocks:', len(l['blocks']), '| exercises:', sum(len(b.get('exerciseIds',[])) if 'exerciseIds' in b else 0 for b in l['blocks']))
"
echo "== catalogue IELTS search =="
curl -s -b $J "$BASE/api/catalogue?q=ielts" | python3 -c "
import json,sys
d=json.load(sys.stdin)
print('courses matching ielts:', [c['slug'] for c in d.get('courses',[])][:8])
print('hubs:', [h['title'] for h in d.get('hubs',[])][:6])
"
