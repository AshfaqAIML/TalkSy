#!/usr/bin/env python3
"""
Codemod: vary the correct-answer position across the placement bank.

Every objective item was authored with answerIndex: 0 (the answer listed
first). For assessment validity the correct option must sit at varied
positions. This script rotates each item's options array so the answer
lands at position (item_index_in_file * 7 + 3) % len(options), rewriting
options order and answerIndex in place.
"""

import re
import sys

FILES = [
    "src/data/placement/vocabulary.ts",
    "src/data/placement/grammar.ts",
    "src/data/placement/reading.ts",
    "src/data/placement/listening.ts",
]

def split_top_level(s: str):
    """Split a TS array body on top-level commas (quote-aware)."""
    parts, buf, quote, depth = [], "", None, 0
    i = 0
    while i < len(s):
        ch = s[i]
        if quote:
            buf += ch
            if ch == "\\":
                buf += s[i + 1] if i + 1 < len(s) else ""
                i += 2
                continue
            if ch == quote:
                quote = None
        else:
            if ch in ('"', "'"):
                quote = ch
                buf += ch
            elif ch == "[":
                depth += 1
                buf += ch
            elif ch == "]":
                depth -= 1
                buf += ch
            elif ch == "," and depth == 0:
                parts.append(buf.strip())
                buf = ""
            else:
                buf += ch
        i += 1
    if buf.strip():
        parts.append(buf.strip())
    return parts

for path in FILES:
    src = open(path).read()
    # Work item by item: each objective item block spans from `id:` to its closing `},`
    item_pattern = re.compile(
        r'(\{\s*\n\s*id: "(?P<id>[^"]+)",.*?options: \[(?P<options>.*?)\],\s*\n\s*answerIndex: )(?P<idx>\d+)',
        re.DOTALL,
    )

    counter = 0
    changed = 0

    def rotate(match: re.Match) -> str:
        global counter, changed
        options_src = match.group("options")
        old_idx = int(match.group("idx"))
        options = split_top_level(options_src)
        n = len(options)
        if n < 2:
            counter += 1
            return match.group(0)
        # Deterministic varied position, skipping the old position.
        target = (counter * 7 + 3) % n
        if target == old_idx:
            target = (target + 1) % n
        # Rotate so that the old answer lands at `target`.
        answer = options[old_idx]
        rest = [o for i, o in enumerate(options) if i != old_idx]
        new_options = rest[:target] + [answer] + rest[target:]
        # Reassemble with the original formatting style (one per line if multiline).
        if "\n" in options_src:
            body = "\n      " + ",\n      ".join(new_options) + ",\n    "
        else:
            body = ", ".join(new_options)
        counter += 1
        if new_options != options:
            changed += 1
        return match.group(1).replace(
            match.group("options"), body
        ) + str(target)

    new_src = item_pattern.sub(rotate, src)
    open(path, "w").write(new_src)
    print(f"{path}: rotated {counter} items ({changed} changed)")

print("done")
