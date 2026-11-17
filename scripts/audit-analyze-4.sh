#!/bin/bash
# VLM analysis — labs + admin.
set -u
analyze() {
  z-ai vision -p "$2" -i "$1" -o "$3" 2>/dev/null > /dev/null
  python3 -c "
import json
with open('$3') as f: d = json.load(f)
print(d['choices'][0]['message']['content'])"
}

echo "=========== READING ROOM ==========="
analyze /tmp/render/talksy-reading.png "Audit this reading room hub. Check: text cards/list, level bands, recommendations banner, progress, visual hierarchy, anything broken/clipped/misaligned. Rate 1-10. Concise." /tmp/render/a-reading.json

echo "=========== LISTENING LAB ==========="
analyze /tmp/render/talksy-listening.png "Audit this listening lab hub. Check: activity cards, level bands, audio player affordances, history, anything broken/clipped/misaligned. Rate 1-10. Concise." /tmp/render/a-listening.json

echo "=========== SPEAKING LAB ==========="
analyze /tmp/render/talksy-speaking.png "Audit this speaking lab hub. Check: activity cards, level bands, tabs, history, anything broken/clipped/misaligned. Rate 1-10. Concise." /tmp/render/a-speaking.json

echo "=========== WRITING STUDIO ==========="
analyze /tmp/render/talksy-writing.png "Audit this writing studio hub. Check: assignment cards, level bands, drafts, anything broken/clipped/misaligned. Rate 1-10. Concise." /tmp/render/a-writing.json

echo "=========== ADMIN CMS ==========="
analyze /tmp/render/talksy-admin.png "Audit this admin CMS dashboard. Check: analytics cards, content health, navigation, tables, visual hierarchy, anything broken/clipped/misaligned or empty. Rate 1-10. Concise." /tmp/render/a-admin.json
