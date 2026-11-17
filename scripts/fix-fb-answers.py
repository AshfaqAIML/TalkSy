"""Fix fb() correctAnswer to match the keyed option text (v3 rule).

For every mcq / read-answer exercise in a lesson file, set the first
argument of fb(...) to the exact text of the keyed option.
"""

import re
import sys

path = sys.argv[1]
src = open(path).read()

# Split into exercise chunks at "ex({" boundaries.
ex_start = re.compile(r"ex\(\{")
pos = 0
out = []
fixed = 0

while True:
    m = ex_start.search(src, pos)
    if not m:
        out.append(src[pos:])
        break
    out.append(src[pos : m.start()])
    # Find the matching closing "})" for this ex block by brace counting.
    i = m.end()
    depth = 1
    while depth > 0:
        ch = src[i]
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
        i += 1
    # consume trailing ")"
    j = i
    while src[j] in " \n\t":
        j += 1
    if src[j] == ")":
        i = j + 1
    block = src[m.start() : i]

    qtype = re.search(r'type: "([a-z-]+)"', block)
    if qtype and qtype.group(1) in ("mcq", "read-answer"):
        correct_id = re.search(r'correctOptionId: "([a-z])"', block)
        options = re.findall(r'\{ id: "([a-z])", text: "((?:[^"\\]|\\.)*)" \}', block)
        if correct_id:
            ctext = None
            for oid, otext in options:
                if oid == correct_id.group(1):
                    ctext = otext
                    break
            if ctext is not None:
                # Replace the first fb("...") argument.
                fb_match = re.search(r"fb\(\n?\s*((?:\"(?:[^\"\\]|\\.)*\")|'(?:[^'\\]|\\.)*')", block)
                if fb_match:
                    old = fb_match.group(1)
                    new = f'"{ctext}"'
                    if old != new:
                        block = block[: fb_match.start(1)] + new + block[fb_match.end(1) :]
                        fixed += 1
    out.append(block)
    pos = i

open(path, "w").write("".join(out))
print(f"fixed {fixed} fb() correctAnswer fields in {path}")
