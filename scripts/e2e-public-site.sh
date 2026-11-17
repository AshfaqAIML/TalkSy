#!/usr/bin/env bash
# Public-site E2E verification (single call: server + browser).
#
# 1. Generates the brand PNGs (OG image, manifest icons, apple icon) by
#    screenshotting the exact-size render routes.
# 2. Verifies every public page renders, the register → app flow works,
#    the contact form stores a message, old hash links still resolve,
#    and sitemap/robots respond correctly.
# 3. Captures screenshots for review under /tmp/render.
set -u

cd /home/z/my-project
OUT=/tmp/render
SHOTS=download/talksy-public-site/screenshots
mkdir -p "$OUT" "$SHOTS" public/og

# ---- 1. dev server ---------------------------------------------------------
STARTED=0
if ! curl -s -o /dev/null http://127.0.0.1:3000/ --max-time 3; then
  (bun run dev > /dev/null 2>&1 &)
  STARTED=1
  for i in $(seq 1 45); do
    curl -s -o /dev/null http://127.0.0.1:3000/ --max-time 2 && break
    sleep 2
  done
fi
sleep 2
curl -s -o /dev/null -w "server: %{http_code}\n" http://127.0.0.1:3000/ --max-time 20

B="http://127.0.0.1:3000"
shot() { agent-browser screenshot "$1" > /dev/null 2>&1; }

# ---- 2. brand assets (exact-size renders → PNG) -----------------------------
agent-browser set viewport 1200 630 > /dev/null 2>&1
agent-browser open "$B/og-image" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 2
shot "$OUT/og-image.png"

agent-browser set viewport 512 512 > /dev/null 2>&1
agent-browser open "$B/icon-512" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 1
shot "$OUT/icon-512.png"

agent-browser set viewport 192 192 > /dev/null 2>&1
agent-browser open "$B/icon-192" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 1
shot "$OUT/icon-192.png"

agent-browser set viewport 180 180 > /dev/null 2>&1
agent-browser open "$B/apple-icon" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 1
shot "$OUT/apple-icon.png"

cp "$OUT/og-image.png" public/og/default.png
cp "$OUT/icon-512.png" public/icon-512.png
cp "$OUT/icon-192.png" public/icon-192.png
cp "$OUT/apple-icon.png" public/apple-icon.png

# Validate the PNGs: correct size and not blank (colour variance).
python3 - <<'PY'
from PIL import Image
import sys, collections
specs = [("/tmp/render/og-image.png", 1200, 630), ("/tmp/render/icon-512.png", 512, 512),
         ("/tmp/render/icon-192.png", 192, 192), ("/tmp/render/apple-icon.png", 180, 180)]
ok = True
for path, w, h in specs:
    img = Image.open(path).convert("RGB").resize((min(w, 120), min(h, 120)))
    colors = collections.Counter(img.getdata())
    top = colors.most_common(1)[0][1] / (img.width * img.height)
    size_ok = Image.open(path).size == (w, h)
    varied = len(colors) > 20 and top < 0.98
    print(f"{path}: size={'OK' if size_ok else 'BAD'} colours={len(colors)} dominant={top:.0%} varied={'OK' if varied else 'BLANK?'}")
    ok = ok and size_ok and varied
sys.exit(0 if ok else 1)
PY
ASSETS=$?
[ "$ASSETS" -ne 0 ] && echo "WARN: brand asset validation flagged issues"

# ---- 3. landing (desktop, signed out) ---------------------------------------
agent-browser cookies clear > /dev/null 2>&1
agent-browser set viewport 1440 900 > /dev/null 2>&1
agent-browser open "$B/" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 4
L=$(agent-browser snapshot -c 2>/dev/null)
# Note: overline labels render uppercase in the a11y tree, and the H1 is
# split by the <em> accent — so grep case-insensitively for fragments.
for needle in "journey to" "confident English" "Start Learning Free" "Explore Learning Path" "Learn English step by step" "Words in this lesson" "Words in this lesson"; do
  echo "$L" | grep -iq "$needle" && echo "landing has: $needle" || echo "MISSING on landing: $needle"
done
shot "$SHOTS/01-landing-hero.png"
agent-browser scroll down 900 > /dev/null 2>&1; sleep 2
shot "$SHOTS/02-landing-journey.png"
agent-browser scroll down 2000 > /dev/null 2>&1; sleep 2
shot "$SHOTS/03-landing-experience.png"
agent-browser scroll down 4000 > /dev/null 2>&1; sleep 3
shot "$SHOTS/04-landing-lower.png"

# Interactive sentence builder: tap the four words, then Check.
agent-browser open "$B/" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 3
tap_word() { local r; r=$(agent-browser snapshot -i -c 2>/dev/null | grep -F "button \"Add word $1\"" | grep -oE 'e[0-9]+' | head -1); [ -n "$r" ] && agent-browser click "@$r" > /dev/null 2>&1; }
tap_word "Nice"; tap_word "to"; tap_word "meet"; tap_word "you"
CHECK=$(agent-browser snapshot -i -c 2>/dev/null | grep -F 'button "Check' | grep -oE 'e[0-9]+' | head -1)
[ -n "$CHECK" ] && agent-browser click "@$CHECK" > /dev/null 2>&1
sleep 1
CORRECT=$(agent-browser snapshot -c 2>/dev/null | grep -ci "Correct —" || true)
echo "sentence builder solved interactively: $CORRECT (expect 1)"

# ---- 4. every public page renders ------------------------------------------
check_page() {
  local path="$1" needle="$2" label="$3"
  agent-browser open "$B$path" > /dev/null 2>&1
  agent-browser wait --load networkidle > /dev/null 2>&1
  sleep 2.5
  local S; S=$(agent-browser snapshot -c 2>/dev/null)
  echo "$S" | grep -q "$needle" && echo "$label: OK" || echo "$label: MISSING [$needle]"
}
check_page "/about"      "three failures we set out to fix"  "about"
check_page "/courses"    "One curriculum, from the alphabet" "courses"
check_page "/courses"    "Hello and Goodbye"                 "courses-lesson-listing"
check_page "/methodology" "seven-beat lesson arc"            "methodology"
check_page "/features"   "eight core features"               "features"
check_page "/pricing"    "free forever"                      "pricing"
check_page "/faq"        "Can absolute beginners use TalkSy" "faq"
check_page "/contact"    "Send a message"                    "contact"
check_page "/login"      "Welcome back"                      "login"
check_page "/register"   "Create your free account"          "register"
check_page "/app"        "confident English"                 "app-redirect-to-site"
shot "$SHOTS/05-courses.png"

# Old deep link compatibility: /#/lesson/... forwards into the app.
agent-browser cookies clear > /dev/null 2>&1
agent-browser open "$B/#/lesson/a1-1-1" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 4
HASHREDIR=$(agent-browser snapshot -c 2>/dev/null | grep -ciE "Welcome back|Hello and Goodbye" || true)
echo "old hash link lands in app (login or lesson): $HASHREDIR (expect >0)"

# ---- 5. register → app flow --------------------------------------------------
agent-browser cookies clear > /dev/null 2>&1
agent-browser open "$B/register" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 3
EMAIL="site$(date +%s)@talksy.test"
ref_of() { agent-browser snapshot -i -c 2>/dev/null | grep -oE '(textbox|button) "[^"]*" \[ref=e[0-9]+\]' | grep -F "$1" | grep -oE 'e[0-9]+' | head -1; }
NR=$(ref_of 'textbox "Your name"'); ER=$(ref_of 'textbox "you@example.com"'); PR=$(ref_of 'textbox "Choose a strong password"'); CR=$(ref_of 'button "Create account"')
if [ -n "$NR" ] && [ -n "$ER" ] && [ -n "$PR" ] && [ -n "$CR" ]; then
  agent-browser fill "@$NR" "Site Tester" > /dev/null 2>&1
  agent-browser fill "@$ER" "$EMAIL" > /dev/null 2>&1
  agent-browser fill "@$PR" "site-test-123" > /dev/null 2>&1
  agent-browser click "@$CR" > /dev/null 2>&1
  sleep 7
  D=$(agent-browser snapshot -c 2>/dev/null)
  echo "$D" | grep -qiE "perfect starting point|welcome" && echo "register → welcome onboarding: OK" || echo "register → welcome onboarding: FAILED"
  shot "$SHOTS/06-app-dashboard.png"
else
  echo "register form refs not found (NR=$NR ER=$ER PR=$PR CR=$CR)"
fi

# ---- 6. contact form ---------------------------------------------------------
agent-browser open "$B/contact" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 2.5
CR2=$(ref_of 'textbox "Name"'); CE=$(ref_of 'textbox "Email"')
# The message textarea: find its ref via label "Your message".
CM=$(agent-browser snapshot -i -c 2>/dev/null | grep -F 'textbox "Your message"' | grep -oE 'e[0-9]+' | head -1)
SB=$(ref_of 'button "Send message"')
if [ -n "$CR2" ] && [ -n "$CE" ] && [ -n "$CM" ] && [ -n "$SB" ]; then
  agent-browser fill "@$CR2" "Site Tester" > /dev/null 2>&1
  agent-browser fill "@$CE" "$EMAIL" > /dev/null 2>&1
  agent-browser fill "@$CM" "Hello from the public site E2E run — testing the contact form end to end." > /dev/null 2>&1
  agent-browser click "@$SB" > /dev/null 2>&1
  sleep 3
  SENT=$(agent-browser snapshot -c 2>/dev/null | grep -ci "Message received" || true)
  echo "contact form submitted: $SENT (expect 1)"
else
  echo "contact form refs not found (name=$CR2 email=$CE msg=$CM send=$SB)"
fi

# Contact row really stored?
STORED=$(bun -e 'const {PrismaClient}=require("@prisma/client");const db=new PrismaClient();db.contactMessage.count({where:{email:"'"$EMAIL"'"}}).then(c=>{console.log(c);process.exit(0)}).catch(()=>{console.log("err");process.exit(0)})' 2>/dev/null)
echo "contact rows in db for $EMAIL: $STORED (expect 1)"

# ---- 7. mobile landing + nav --------------------------------------------------
agent-browser set viewport 390 844 > /dev/null 2>&1
agent-browser open "$B/" > /dev/null 2>&1
agent-browser wait --load networkidle > /dev/null 2>&1
sleep 3
shot "$SHOTS/07-landing-mobile.png"
MB=$(agent-browser snapshot -i -c 2>/dev/null | grep -F 'button "Open menu"' | grep -oE 'e[0-9]+' | head -1)
[ -n "$MB" ] && agent-browser click "@$MB" > /dev/null 2>&1
sleep 1
MNAV=$(agent-browser snapshot -c 2>/dev/null | grep -ci "Method" || true)
echo "mobile menu opens with nav: $MNAV (expect >0)"
shot "$SHOTS/08-landing-mobile-menu.png"

# ---- 8. SEO endpoints ---------------------------------------------------------
curl -s "$B/sitemap.xml" | grep -oE "https?://[^<]+" | sed 's#.*/##' | head -12
echo "---"
curl -s "$B/robots.txt"
echo "---"
T=$(curl -s "$B/" | grep -oE "<title>[^<]+</title>")
D=$(curl -s "$B/" | grep -o 'application/ld+json' | wc -l)
echo "landing title: $T"
echo "landing json-ld occurrences: $D (script tags + RSC flight data; expect >=3)"
OG=$(curl -s "$B/" | grep -o 'og:image' | wc -l)
echo "landing og:image tags: $OG (expect >0)"
CANON=$(curl -s "$B/courses" | grep -oE 'rel="canonical" href="[^"]+"' | head -1)
echo "courses canonical: $CANON"

# ---- 9. console errors ----------------------------------------------------------
ERRS=$(agent-browser errors 2>/dev/null | grep -vc "^\s*$" || true)
echo "page errors: $ERRS"
[ "$ERRS" -gt 0 ] && agent-browser errors 2>/dev/null | head -10

echo "=== PUBLIC SITE E2E DONE ==="
ls -la public/og public/icon-512.png public/icon-192.png public/apple-icon.png 2>/dev/null
