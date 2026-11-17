#!/usr/bin/env python3
"""
Insert `hints: [],` into ex({...}) exercise specs that lack a `hints` property.

The v3 textbook standard (PROMPT 43) splits practice into guided questions
(with progressive hints) and independent questions (no hints). The shared
ExerciseSpec type requires `hints`, so independent questions carry `hints: []`.
This script adds the field to any `ex({ ... })` call missing it, right after
its `prompt:` line, preserving indentation.

    python3 scripts/add-missing-hints.py <file.ts>...
"""
import re
import sys

EX_START = re.compile(r"^(\s*)ex\(\{$")
PROMPT_LINE = re.compile(r"^(\s+)(prompt|question): ")


def process(path: str) -> int:
    with open(path, encoding="utf-8") as fh:
        lines = fh.readlines()
    out: list[str] = []
    i = 0
    inserted = 0
    while i < len(lines):
        line = lines[i]
        if EX_START.match(line):
            # capture the ex({ ... }) block by brace depth from "ex({"
            depth = 1
            j = i + 1
            block: list[str] = []
            while j < len(lines):
                depth += lines[j].count("{") - lines[j].count("}")
                block.append(lines[j])
                if depth <= 0:
                    break
                j += 1
            block_text = "".join(block)
            if "hints" not in block_text:
                # insert after the first prompt/question property line
                for k, b in enumerate(block):
                    if PROMPT_LINE.match(b) and "question" not in b.split(":")[0]:
                        # `prompt:` only (read-answer/mcq prompts; `question:` is a sub-field)
                        indent = re.match(r"^(\s+)", b).group(1)
                        block.insert(k + 1, f"{indent}hints: [],\n")
                        inserted += 1
                        break
            out.append(line)
            out.extend(block)
            i = j + 1
        else:
            out.append(line)
            i += 1
    if inserted:
        with open(path, "w", encoding="utf-8") as fh:
            fh.writelines(out)
    return inserted


def main() -> None:
    total = 0
    for path in sys.argv[1:]:
        n = process(path)
        total += n
        print(f"{path}: inserted hints: [] into {n} exercise(s)")
    print(f"total: {total}")


if __name__ == "__main__":
    main()
