#!/usr/bin/env python3
"""Fix unescaped inner double quotes in curriculum data string literals.

Rewrites lines like:
    prompt: "Complete: "There ___ three rooms." (hint)",
to:
    prompt: "Complete: \u201cThere ___ three rooms.\u201d (hint)",
"""
import re
import glob

OPEN, CLOSE = "\u201c", "\u201d"

for path in sorted(glob.glob("src/data/curriculum/*.ts")):
    with open(path, encoding="utf-8") as fh:
        lines = fh.read().split("\n")
    changed = 0
    for idx, line in enumerate(lines):
        stripped = line.strip()
        m = re.match(r'^(\w+):\s+"(.*)",?$', stripped)
        if not m:
            continue
        key, val = m.group(1), m.group(2)
        if '"' not in val:
            continue
        # Alternate inner quotes open/close
        out = []
        is_open = True
        for ch in val:
            if ch == '"':
                out.append(OPEN if is_open else CLOSE)
                is_open = not is_open
            else:
                out.append(ch)
        new_val = "".join(out)
        indent = line[: len(line) - len(line.lstrip())]
        trailing = "," if stripped.endswith(",") else ""
        new_line = f'{indent}{key}: "{new_val}"{trailing}'
        if new_line != line:
            lines[idx] = new_line
            changed += 1
    if changed:
        with open(path, "w", encoding="utf-8") as fh:
            fh.write("\n".join(lines))
        print(f"{path}: fixed {changed} lines")
