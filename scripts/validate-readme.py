#!/usr/bin/env python3
"""Structural README validator for the EnglishPath repository.

Checks performed (no external linter required):
  1. headings exist; GitHub-style anchors are derived from them; no duplicates
  2. every internal link (#...) resolves to a derived anchor
  3. relative links and images resolve to real files
  4. code fences are balanced
  5. mermaid blocks: known diagram type, balanced quotes, no tabs,
     balanced subgraph/end in flowcharts, strict erDiagram relation syntax
  6. every `bun run X` command exists in package.json scripts
  7. the environment-variable table lists exactly the implemented variables

Exit code 0 = clean; 1 = problems found.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
README = ROOT / "README.md"

problems: list[str] = []


def problem(msg: str) -> None:
    problems.append(msg)


# ---------------------------------------------------------------------------
# 1. Headings and anchors (GitHub slug rules)
# ---------------------------------------------------------------------------

def github_slug(heading: str) -> str:
    text = heading.strip().lower()
    text = re.sub(r"[^\w\s-]", "", text)  # drop punctuation (word chars keep)
    text = re.sub(r"[\s]+", "-", text)  # spaces -> hyphens
    return text


def check_headings(lines: list[str]) -> dict[str, int]:
    anchors: dict[str, int] = {}
    in_fence = False
    for lineno, line in enumerate(lines, 1):
        if line.lstrip().startswith("```"):
            in_fence = not in_fence
            continue
        if in_fence:
            continue
        match = re.match(r"^(#{1,6})\s+(.+)$", line)
        if match:
            slug = github_slug(match.group(2))
            if not slug:
                problem(f"line {lineno}: heading produces an empty anchor")
            if slug in anchors:
                problem(f"line {lineno}: duplicate anchor #{slug}")
            anchors.setdefault(slug, lineno)
    if not anchors:
        problem("no headings found")
    return anchors


# ---------------------------------------------------------------------------
# 2 + 3. Links and images
# ---------------------------------------------------------------------------

LINK_RE = re.compile(r"(?<!\!)\[([^\]]*)\]\(([^)]+)\)")
IMAGE_RE = re.compile(r"!\[([^\]]*)\]\(([^)]+)\)")


def check_links(lines: list[str], anchors: dict[str, int]) -> None:
    in_fence = False
    for lineno, line in enumerate(lines, 1):
        if line.lstrip().startswith("```"):
            in_fence = not in_fence
            continue
        if in_fence:
            continue
        for match in IMAGE_RE.finditer(line):
            target = match.group(2).strip()
            if target.startswith(("http://", "https://", "mailto:")):
                continue
            path = target.split("#")[0]
            if not path:
                problem(f"line {lineno}: image link has no path")
                continue
            if not (ROOT / path).exists():
                problem(f"line {lineno}: image '{path}' does not exist")
        for match in LINK_RE.finditer(line):
            target = match.group(2).strip()
            if target.startswith(("http://", "https://", "mailto:")):
                continue
            if target.startswith("#"):
                slug = target[1:]
                if slug not in anchors:
                    problem(f"line {lineno}: link to unknown anchor #{slug}")
                continue
            path = target.split("#")[0]
            if not path:
                problem(f"line {lineno}: link has no path")
                continue
            if not (ROOT / path).exists():
                problem(f"line {lineno}: link target '{path}' does not exist")


# ---------------------------------------------------------------------------
# 4 + 5. Fences and mermaid structure
# ---------------------------------------------------------------------------

DIAGRAM_TYPES = (
    "flowchart",
    "graph",
    "sequenceDiagram",
    "erDiagram",
    "stateDiagram",
    "stateDiagram-v2",
    "classDiagram",
    "pie",
    "gantt",
    "journey",
)

ER_OPS = [
    "||--o{",
    "||--||",
    "||--o|",
    "||--|}",
    "}|--o{",
    "}|--o|",
    "}|--||",
    "}|--|{",
    "}o--o{",
    "}o--||",
    "--",
]

ER_LINE = re.compile(
    r"^\s*\w+\s+(" + "|".join(re.escape(op) for op in ER_OPS) + r")\s+\w+\s*:\s*\"[^\"]*\"\s*$"
)


def check_fences(lines: list[str]) -> None:
    fence_re = re.compile(r"^(\s*)```(\S*)\s*$")
    open_fences = 0
    blocks: list[tuple[int, list[str], str]] = []
    current: list[str] = []
    start = 0
    lang = ""
    for lineno, line in enumerate(lines, 1):
        match = fence_re.match(line)
        if match:
            if open_fences == 0:
                open_fences = 1
                current = []
                start = lineno
                lang = match.group(2)
            else:
                open_fences = 0
                blocks.append((start, current, lang))
            continue
        if open_fences:
            current.append(line)
    if open_fences:
        problem("unbalanced code fence: a block is never closed")

    for start, body, lang in blocks:
        if lang == "mermaid":
            check_mermaid(start, body)


def check_mermaid(start: int, body: list[str]) -> None:
    non_empty = [line for line in body if line.strip()]
    if not non_empty:
        problem(f"mermaid block at line {start}: empty")
        return
    first = non_empty[0].strip()
    if not first.startswith(DIAGRAM_TYPES):
        problem(f"mermaid block at line {start}: unknown diagram type '{first.split()[0]}'")
        return
    kind = first.split()[0]
    subgraph_depth = 0
    for offset, raw in enumerate(body):
        line = raw.rstrip("\n")
        lineno = start + 1 + offset
        if "\t" in line:
            problem(f"mermaid line {lineno}: tab character (breaks GitHub rendering)")
        if line.count('"') % 2 != 0:
            problem(f"mermaid line {lineno}: unbalanced double quotes")
        stripped = line.strip()
        if not stripped or stripped.startswith("%%"):
            continue
        if kind in ("flowchart", "graph"):
            if re.match(r"^subgraph\b", stripped):
                subgraph_depth += 1
            elif re.match(r"^end\b", stripped):
                subgraph_depth -= 1
                if subgraph_depth < 0:
                    problem(f"mermaid line {lineno}: 'end' without matching 'subgraph'")
        elif kind == "erDiagram":
            if stripped == first:
                continue  # the declaration line, not a relation
            if not ER_LINE.match(stripped):
                problem(f"mermaid line {lineno}: not a valid erDiagram relation: {stripped[:60]}")
    if kind in ("flowchart", "graph") and subgraph_depth != 0:
        problem(f"mermaid block at line {start}: {subgraph_depth} unclosed subgraph(s)")


# ---------------------------------------------------------------------------
# 6. Commands referenced vs package.json
# ---------------------------------------------------------------------------

def check_commands(lines: list[str]) -> None:
    package = json.loads((ROOT / "package.json").read_text())
    scripts = set(package.get("scripts", {}).keys())
    known = scripts | {"tsc"}
    in_fence = False
    for lineno, line in enumerate(lines, 1):
        if line.lstrip().startswith("```"):
            in_fence = not in_fence
            continue
        if in_fence:
            continue
        for match in re.finditer(r"\bbun run ([a-z:-]+)\b", line):
            name = match.group(1)
            if name not in known:
                problem(f"line {lineno}: 'bun run {name}' is not a package.json script")


# ---------------------------------------------------------------------------
# 7. Environment variables
# ---------------------------------------------------------------------------

IMPLEMENTED_ENV = {"DATABASE_URL", "PORT", "NODE_ENV"}


def check_env(lines: list[str]) -> None:
    text = "\n".join(lines)
    section = re.search(
        r"^## Environment Variables\s*$([\s\S]*?)(?=^## )", text, re.MULTILINE
    )
    if not section:
        problem("missing '## Environment Variables' section")
        return
    body = section.group(1)
    found = set(re.findall(r"^\| `([A-Z_]+)`", body, re.MULTILINE))
    if not found:
        problem("environment table: no variables found")
    invented = found - IMPLEMENTED_ENV
    for name in sorted(invented):
        problem(f"environment table lists '{name}' which is not an implemented variable")
    for name in sorted(IMPLEMENTED_ENV - found):
        problem(f"environment table is missing implemented variable '{name}'")


# ---------------------------------------------------------------------------

def main() -> int:
    if not README.exists():
        print("FAIL: README.md does not exist at the repository root")
        return 1
    lines = README.read_text(encoding="utf-8").splitlines()
    anchors = check_headings(lines)
    check_links(lines, anchors)
    check_fences(lines)
    check_commands(lines)
    check_env(lines)

    if problems:
        print(f"FAIL: {len(problems)} problem(s) in README.md")
        for item in problems:
            print(f"  - {item}")
        return 1
    print(
        f"OK: README.md — {len(anchors)} anchors, links resolve, "
        "fences balanced, mermaid structurally valid, commands and env vars verified"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
