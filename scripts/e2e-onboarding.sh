#!/usr/bin/env bash
# Guided onboarding + adaptive placement E2E (single call: server + browser).
#
# Full journey as a real learner:
#   register → welcome → questionnaire (8 inputs) → adaptive assessment
#   (answered all-wrong → beginner path with early stopping, writing 2-phase,
#   speaking skipped) → result screen → accept plan → dashboard.
#   Then: zero-beginner shortcut (second user), DB persistence, mobile checks.
set -u

cd /home/z/my-project
SHOTS=download/talksy-onboarding/screenshots
mkdir -p "$SHOTS"

# ---- dev server ---------------------------------------------------------
if ! curl -s -o /dev/null http://127.0.0.1:3000/ --max-time 3; then
  (bun run dev > /dev/null 2>&1 &)
  for i in $(seq 1 45); do
    curl -s -o /dev/null http://127.0.0.1:3000/ --max-time 2 && break
    sleep 2
  done
fi
sleep 2
curl -s -o /dev/null -w "server: %{http_code}\n" http://127.0.0.1:3000/ --max-time 20

B="http://127.0.0.1:3000"
agent-browser set viewport 1440 900 > /dev/null 2>&1
agent-browser cookies clear > /dev/null 2>&1

snap()  { agent-browser snapshot -c 2>/dev/null; }
snapr() { agent-browser snapshot -i -c 2>/dev/null; }
ref_of() { snapr | grep -oE '(textbox|button) "[^"]*" \[ref=e[0-9]+\]' | grep -F "$1" | grep -oE 'e[0-9]+' | head -1; }
click_ref() { local r; r=$(ref_of "$1"); if [ -n "$r" ]; then agent-browser click "@$r" > /dev/null 2>&1; else echo "MISSING REF: $1"; fi; }
shot() { agent-browser screenshot "$SHOTS/$1" > /dev/null 2>&1; }

# ---- 1. register → lands on welcome --------------------------------------
agent-browser open "$B/register" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 3
EMAIL="onb$(date +%s)@talksy.test"
NR=$(ref_of 'textbox "Your name"'); ER=$(ref_of 'textbox "you@example.com"'); PR=$(ref_of 'textbox "Choose a strong password"'); CR=$(ref_of 'button "Create account"')
agent-browser fill "@$NR" "Onboarding Tester" > /dev/null 2>&1
agent-browser fill "@$ER" "$EMAIL" > /dev/null 2>&1
agent-browser fill "@$PR" "onboarding-test-1" > /dev/null 2>&1
agent-browser click "@$CR" > /dev/null 2>&1
sleep 8
W=$(snap)
echo "$W" | grep -q "find your perfect starting point" && echo "register → welcome screen: OK" || echo "register → welcome screen: FAILED"
shot 01-welcome.png

# ---- 2. welcome → questionnaire ------------------------------------------
click_ref "Let's begin — about me"
sleep 3
Q=$(snap)
echo "$Q" | grep -q "Why are you learning English?" && echo "questionnaire step 1: OK" || echo "questionnaire step 1: FAILED"
shot 02-questionnaire-step1.png

click_ref "Work or career"
click_ref "Travel"
click_ref "I can make simple sentences"
click_ref "10 minutes"
click_ref "Simple English (recommended)"
sleep 1
click_ref "Continue"
sleep 2.5
Q2=$(snap)
echo "$Q2" | grep -q "How do you feel about English?" && echo "questionnaire step 2: OK" || echo "questionnaire step 2: FAILED"
shot 03-questionnaire-step2.png

# four confidence answers: "A little" ×4 (one per skill card)
for i in 1 2 3 4; do
  A=$(snapr | grep -F 'button "A little"' | grep -oE 'e[0-9]+' | sed -n "${i}p")
  [ -n "$A" ] && agent-browser click "@$A" > /dev/null 2>&1
  sleep 0.4
done
sleep 1
click_ref "Save and continue to the check"
sleep 4
P=$(snap)
echo "$P" | grep -qi "Your English check" && echo "placement player: OK" || echo "placement player: FAILED"
shot 04-placement-first-item.png

# ---- 3. assessment: answer everything WRONG (beginner + early stopping) ---
MCQ_CLICKS=0
guard=0
while [ $guard -lt 80 ]; do
  guard=$((guard+1))
  S=$(snap)
  if echo "$S" | grep -q "what we learned about you"; then
    echo "assessment finished after $MCQ_CLICKS MCQ answers (guard=$guard)"
    break
  fi
  if echo "$S" | grep -q "Would you like to try speaking?"; then
    click_ref "Skip speaking"; sleep 1.5; continue
  fi
  if echo "$S" | grep -q "I've finished"; then
    TA=$(snapr | grep -F 'textbox "Your writing"' | grep -oE 'e[0-9]+' | head -1)
    [ -n "$TA" ] && agent-browser fill "@$TA" "My name is Tester. I like test." > /dev/null 2>&1
    click_ref "I've finished"; sleep 1.5
    F=$(snapr | grep -F "couldn" | grep -oE 'e[0-9]+' | head -1)
    [ -n "$F" ] && agent-browser click "@$F" > /dev/null 2>&1
    sleep 1.5; continue
  fi
  # MCQ: the first answer option (options are buttons named by their text)
  OPT=$(snapr | grep -oE 'button "[^"]+" \[ref=e[0-9]+\]' \
       | grep -vE 'Check|Continue|Play audio|Play the audio|Skip|Try again|Start from|check anyway|later' \
       | head -1 | grep -oE 'e[0-9]+')
  if [ -n "$OPT" ]; then
    agent-browser click "@$OPT" > /dev/null 2>&1; sleep 0.5
    click_ref "Check"; sleep 1.2
    click_ref "Continue"; sleep 1.2
    MCQ_CLICKS=$((MCQ_CLICKS+1))
  else
    echo "no option visible (guard=$guard) — waiting"; sleep 1
  fi
done

R=$(snap)
echo "$R" | grep -qi "learner profile" && echo "result screen: OK" || echo "result screen: FAILED"
echo "$R" | grep -q "Not assessed" && echo "skipped speaking → Not assessed: OK" || echo "speaking state: check"
REC_LEVEL=$(echo "$R" | grep -oE "We recommend starting with (P1|A1|A2)" | grep -oE "(P1|A1|A2)" | head -1)
[ -n "$REC_LEVEL" ] && echo "recommendation present ($REC_LEVEL): OK" || echo "recommendation: FAILED"
shot 05-result-beginner.png

# Expected first-lesson title for the recommended level (from the curriculum source).
FIRST_LESSON=$(bun -e '
import { availableLevels } from "./src/data/curriculum/index";
const level = availableLevels.find(l => l.code === process.argv[1]);
console.log(level.units[0].lessons[0].title);
' "$REC_LEVEL" 2>/dev/null)
echo "expected continue lesson: $FIRST_LESSON"

# Beginner early-stop sanity: with everything wrong, each objective skill asks
# exactly 2 items → at most 8 MCQ answers before writing.
[ "$MCQ_CLICKS" -le 8 ] && echo "early stopping honoured ($MCQ_CLICKS MCQs): OK" || echo "early stopping: TOO MANY ($MCQ_CLICKS)"

# ---- 4. accept plan → dashboard ------------------------------------------
click_ref "Accept my plan"
sleep 7
D=$(snap)
echo "$D" | grep -qiE "Hello, Onboarding|Continue your path" && echo "accept → dashboard: OK" || echo "accept → dashboard: FAILED"
echo "$D" | grep -q "$FIRST_LESSON" && echo "dashboard continues at recommended lesson ($FIRST_LESSON): OK" || echo "dashboard continue lesson: FAILED"
shot 06-dashboard-with-plan.png

# ---- 5. zero-beginner shortcut (second user) ------------------------------
agent-browser cookies clear > /dev/null 2>&1
agent-browser open "$B/register" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 3
EMAIL2="zero$(date +%s)@talksy.test"
NR=$(ref_of 'textbox "Your name"'); ER=$(ref_of 'textbox "you@example.com"'); PR=$(ref_of 'textbox "Choose a strong password"'); CR=$(ref_of 'button "Create account"')
agent-browser fill "@$NR" "Zero Beginner" > /dev/null 2>&1
agent-browser fill "@$ER" "$EMAIL2" > /dev/null 2>&1
agent-browser fill "@$PR" "zero-beginner-1" > /dev/null 2>&1
agent-browser click "@$CR" > /dev/null 2>&1
sleep 8
click_ref "Let's begin — about me"
sleep 3
click_ref "Just for me"
click_ref "I'm starting from zero"
click_ref "10 minutes"
click_ref "Simple English (recommended)"
sleep 0.5
click_ref "Continue"; sleep 2
for i in 1 2 3 4; do
  A=$(snapr | grep -F 'button "Not yet"' | grep -oE 'e[0-9]+' | sed -n "${i}p")
  [ -n "$A" ] && agent-browser click "@$A" > /dev/null 2>&1
  sleep 0.4
done
click_ref "Save and continue to the check"
sleep 4
Z=$(snap)
echo "$Z" | grep -q "starting from zero — wonderful" && echo "zero-beginner shortcut offered: OK" || echo "zero shortcut: FAILED"
shot 07-zero-choice.png
click_ref "Start from the alphabet"
sleep 5
ZR=$(snap)
echo "$ZR" | grep -q "Your path is ready" && echo "zero shortcut → plan ready: OK" || echo "zero plan: FAILED"
click_ref "Start learning"; sleep 6
ZD=$(snap)
echo "$ZD" | grep -qiE "Hello, Zero|Continue your path" && echo "zero user → dashboard: OK" || echo "zero dashboard: FAILED"

# ---- 6. database persistence ----------------------------------------------
DBCHECK=$(bun -e '
const {PrismaClient} = require("@prisma/client");
const db = new PrismaClient();
async function main(){
  const u1 = await db.user.findUnique({where:{email:process.argv[1]}});
  const attempts = await db.placementAttempt.count({where:{userId:u1.id, status:"COMPLETED"}});
  const answers = await db.placementAnswer.count({where:{attempt:{userId:u1.id}}});
  const plan = await db.learningPlan.findFirst({where:{userId:u1.id, status:"ACCEPTED"}});
  const profile = await db.learnerProfile.findUnique({where:{userId:u1.id}});
  const line1 = JSON.stringify({completedAttempts: attempts, answerRows: answers, planStart: plan?.startLessonSlug ?? null, dailyMinutes: profile?.dailyMinutes ?? null, purposesSaved: JSON.parse(profile?.purposesJson ?? "[]").length});
  const u2 = await db.user.findUnique({where:{email:process.argv[2]}});
  const plan2 = await db.learningPlan.findFirst({where:{userId:u2.id, status:"ACCEPTED"}});
  const line2 = JSON.stringify({user2PlanStart: plan2?.startLessonSlug ?? null, withoutAssessment: JSON.parse(plan2?.adjustmentsJson ?? "{}").withoutAssessment === true});
  console.log(line1); console.log(line2);
  await db.$disconnect();
}
main().catch(e=>{console.error(e.message); process.exit(1)});' "$EMAIL" "$EMAIL2" 2>/dev/null)
echo "db: $DBCHECK"

# ---- 7. mobile spot check ---------------------------------------------------
agent-browser set viewport 390 844 > /dev/null 2>&1
agent-browser open "$B/app#/welcome" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 3
shot 08-welcome-mobile.png
agent-browser set viewport 1440 900 > /dev/null 2>&1

# ---- 8. console errors -------------------------------------------------------
ERRS=$(agent-browser errors 2>/dev/null | grep -vc "^[[:space:]]*$" || true)
echo "page errors: $ERRS"
[ "$ERRS" -gt 0 ] && agent-browser errors 2>/dev/null | head -8

echo "=== ONBOARDING E2E DONE ==="
ls -la "$SHOTS"
