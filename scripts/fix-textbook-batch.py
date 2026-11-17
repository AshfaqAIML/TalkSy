#!/usr/bin/env python3
"""
Batch repair for v3 textbook standard validator findings (run once).

A. mcq/read-answer/grammar-identify: sync feedback.correctAnswer with the
   keyed option's exact text (the option text is the answer's display form).
B. Practice split: in named lessons, blank the hints of enough hinted
   questions to leave exactly two independent items (guided stays >= 2).

All edits are planned against original offsets, then applied bottom-up.
"""
import re

FILES = [
    "src/data/exams/ielts/m1-intro.ts",
    "src/data/exams/ielts/m2-listening.ts",
    "src/data/exams/toefl/t1-fundamentals.ts",
]

STRIP_TARGETS = {
    "ielts-academic-vs-gt", "ielts-four-skills-format", "ielts-band-scoring",
    "ielts-preparation-strategy", "ielts-strategy-time", "ielts-computer-based",
    "ielts-listening-completion", "ielts-listening-sentence-summary",
    "ielts-listening-overview", "ielts-listening-parts-guide",
    "toefl-band-scale", "toefl-time-management", "toefl-adaptive-testing",
    "ielts-listening-accents",
}

HINT_LINE = re.compile(r'hints: \["(?:[^"\\]|\\.)*"\],')
EMPTY = "hints: [],"
SLUG_BEFORE = re.compile(r'slug: "([a-z0-9-]+)"')


def ex_spans(s):
    """(start, end) of every ex({ ... }) call, in document order."""
    spans = []
    i = 0
    while True:
        m = re.compile(r"ex\(\{$", re.M).search(s, i)
        if not m:
            return spans
        depth, j = 1, m.end()
        while j < len(s):
            if s[j] == "{":
                depth += 1
            elif s[j] == "}":
                depth -= 1
                if depth <= 0:
                    break
            j += 1
        spans.append((m.start(), j + 1))
        i = j + 1


def owner_lesson(s, pos):
    idx = s.rfind('slug: "', 0, pos)
    if idx == -1:
        return None
    e = s.find('"', idx + 7)
    return s[idx + 7: e]


def plan_and_apply(path):
    s = open(path, encoding="utf-8").read()
    edits = []  # (start, end, replacement)

    # A: correctAnswer sync
    sync = 0
    for start, end in ex_spans(s):
        block = s[start:end]
        if not any(t in block for t in ('"mcq"', '"read-answer"', '"grammar-identify"')):
            continue
        m = re.search(r'correctOptionId: "([^"]+)"', block)
        if not m:
            continue
        opt = re.search(
            r'\{ id: "%s", text: "((?:[^"\\]|\\.)*)"' % re.escape(m.group(1)), block
        )
        if not opt:
            continue
        correct = opt.group(1)
        fb = re.search(r'feedback: fb\(\n\s*"((?:[^"\\]|\\.)*)"', block)
        if not fb or fb.group(1) == correct:
            continue
        bstart, bend = start + fb.start(1), start + fb.end(1)
        edits.append((bstart, bend, correct))
        sync += 1

    # B: hints strip — group exercise blocks by lesson
    by_lesson = {}
    for start, end in ex_spans(s):
        lesson = owner_lesson(s, start)
        if lesson in STRIP_TARGETS:
            by_lesson.setdefault(lesson, []).append((start, end))

    stripped = 0
    for lesson, spans in by_lesson.items():
        blocks = [(a, b, s[a: b]) for a, b in spans]
        unhinted = sum(1 for _, _, b in blocks if 'hints: ["' not in b and "hints: []" in b)
        hinted = [t for t in blocks if 'hints: ["' in t[2]]
        need = 2 - unhinted
        for a, b, blk in hinted[: max(0, need)]:
            nb = HINT_LINE.sub(EMPTY, blk, count=1)
            if nb != blk:
                edits.append((a, b, nb))
                stripped += 1

    if not edits:
        return 0, 0
    for start, end, rep in sorted(edits, reverse=True):
        s = s[:start] + rep + s[end:]
    open(path, "w", encoding="utf-8").write(s)
    return sync, stripped


total_a = total_b = 0
for f in FILES:
    a, b = plan_and_apply(f)
    total_a += a
    total_b += b
    print(f"{f}: correctAnswer synced x{a}, hints blanked x{b}")
print(f"TOTAL: {total_a} syncs, {total_b} strips")
