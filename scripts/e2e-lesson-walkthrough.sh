#!/usr/bin/env bash
# E2E walkthrough of lesson a1-1-1 via agent-browser CLI (v3).
# Handles: vocab/dialogue/grammar (Continue), mcq (radio), fill (textbox),
# order (word buttons), match (pairs), speak (mic + self-assess fallback),
# and stops at the completion screen.

set -u

snap() { agent-browser snapshot -i -c 2>/dev/null; }

get_ref() {
  snap | grep -oE "\"[^\"]*\" \[ref=e[0-9]+\]" | grep -F "$1" | grep -oE 'e[0-9]+' | head -1
}

click_pat() {  # click first button whose full label matches grep -F pattern, then wait
  local ref
  ref=$(get_ref "$1")
  [ -n "$ref" ] && agent-browser click "@$ref" >/dev/null 2>&1 && agent-browser wait 350 >/dev/null 2>&1
}

for i in $(seq 1 90); do
  if agent-browser snapshot -c 2>/dev/null | grep -q "Lesson complete\|Lesson reviewed"; then
    echo "COMPLETION SCREEN REACHED (iteration $i)"
    break
  fi

  current=$(snap)

  if echo "$current" | grep -q 'Match all pairs'; then
    # ---- match exercise (its Check button is labelled "Match all pairs (N/M)") ----
    pairs=("good morning:12 p.m." "good afternoon:6 p.m." "good evening:after 6" "good night:sleep")
    for pair in "${pairs[@]}"; do
      click_pat "${pair%%:*}"
      click_pat "${pair##*:}"
    done
    agent-browser wait 300 >/dev/null 2>&1
    click_pat '"Check"'
  elif echo "$current" | grep -q '"Check"'; then
    # ---- an exercise with a Check button is active ----
    if echo "$current" | grep -qE 'radio "[^"]+" \[checked=false, ref=e[0-9]+\]'; then
      ref=$(echo "$current" | grep -oE 'radio "[^"]+" \[checked=false, ref=e[0-9]+\]' | grep -oE 'e[0-9]+' | head -1)
      agent-browser click "@$ref" >/dev/null 2>&1
      agent-browser wait 250 >/dev/null 2>&1
      click_pat '"Check"'
    elif echo "$current" | grep -q 'textbox "Your answer"'; then
      ref=$(echo "$current" | grep -oE 'textbox "Your answer" \[ref=e[0-9]+\]' | grep -oE 'e[0-9]+' | head -1)
      agent-browser fill "@$ref" "night" >/dev/null 2>&1
      agent-browser wait 250 >/dev/null 2>&1
      click_pat '"Check"'
    else
      # order exercise: build the answer words, then Check
      for word in "Nice" "to" "meet" "you"; do
        wref=$(snap | grep -oE "button \"$word\" \[ref=e[0-9]+\]" | grep -oE 'e[0-9]+' | head -1)
        [ -n "$wref" ] && agent-browser click "@$wref" >/dev/null 2>&1
        agent-browser wait 120 >/dev/null 2>&1
      done
      click_pat '"Check"'
    fi
  else
    # ---- no Check button: content step, speak step, or answered exercise ----
    if echo "$current" | grep -qE 'button "I said it clearly" \[ref=e[0-9]+\]$'; then
      # enabled self-assessment button (speak fallback, unanswered)
      click_pat '"I said it clearly"'
    elif echo "$current" | grep -qE 'button "Start recording" \[ref=e[0-9]+\]'; then
      # enabled mic button
      mref=$(echo "$current" | grep -oE 'button "Start recording" \[ref=e[0-9]+\]' | grep -oE 'e[0-9]+' | head -1)
      agent-browser click "@$mref" >/dev/null 2>&1
      agent-browser wait 3000 >/dev/null 2>&1
      sref=$(get_ref "I said it clearly")
      if [ -z "$sref" ]; then
        agent-browser wait 10000 >/dev/null 2>&1
        sref=$(get_ref "I said it clearly")
      fi
      [ -n "$sref" ] && agent-browser click "@$sref" >/dev/null 2>&1 && agent-browser wait 400 >/dev/null 2>&1
    else
      click_pat 'Continue'
    fi
  fi
  agent-browser wait 250 >/dev/null 2>&1
done

echo "=== final state ==="
agent-browser get url
agent-browser snapshot -c 2>/dev/null | grep -E "XP earned|Accuracy|Best score|heading \"Lesson" | head -8
