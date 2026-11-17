#!/usr/bin/env python3
"""Verify WCAG contrast for the candidate TalkSy premium palette (Prompt 28)."""

def hex_to_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i+2], 16) / 255 for i in (0, 2, 4))

def lin(c):
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4

def lum(rgb):
    r, g, b = rgb
    return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)

def contrast(fg_hex, bg_hex):
    l1, l2 = lum(hex_to_rgb(fg_hex)), lum(hex_to_rgb(bg_hex))
    hi, lo = max(l1, l2), min(l1, l2)
    return (hi + 0.05) / (lo + 0.05)

pairs = [
    # LIGHT THEME
    ("L fg on bg",          "#1B2540", "#FAFAF8", 4.5),
    ("L fg on card",        "#1B2540", "#FFFFFF", 4.5),
    ("L muted-fg on bg",    "#5A6274", "#FAFAF8", 4.5),
    ("L muted-fg on card",  "#5A6274", "#FFFFFF", 4.5),
    ("L primary-fg on primary (navy btn)", "#FFFFFF", "#0B1F46", 4.5),
    ("L secondary-fg on secondary", "#1B3A6B", "#EDF1F8", 4.5),
    ("L accent-fg on accent", "#14376B", "#E8F0FB", 4.5),
    ("L link blue on card", "#1668C4", "#FFFFFF", 4.5),
    ("L success text on card", "#15803D", "#FFFFFF", 4.5),
    ("L warning text on card", "#B45309", "#FFFFFF", 4.5),
    ("L error text on card",   "#B91C1C", "#FFFFFF", 4.5),
    ("L info text on card",    "#0369A1", "#FFFFFF", 4.5),
    ("L ring on bg (UI 3:1)",  "#1E88E5", "#FAFAF8", 3.0),
    # DARK THEME
    ("D fg on bg",          "#E9EEF8", "#0A1526", 4.5),
    ("D fg on card",        "#E9EEF8", "#101E38", 4.5),
    ("D muted-fg on bg",    "#9AA8C3", "#0A1526", 4.5),
    ("D muted-fg on card",  "#9AA8C3", "#101E38", 4.5),
    ("D primary-fg on primary (blue btn)", "#FFFFFF", "#1668C4", 4.5),
    ("D secondary-fg on secondary", "#DCE6F7", "#1B2C4E", 4.5),
    ("D accent-fg on accent", "#D7E6FB", "#16294A", 4.5),
    ("D link on card",      "#6FB3F2", "#101E38", 4.5),
    ("D success text on card", "#4ADE80", "#101E38", 4.5),
    ("D warning text on card", "#FBBF24", "#101E38", 4.5),
    ("D error text on card",   "#F87171", "#101E38", 4.5),
    ("D info text on card",    "#38BDF8", "#101E38", 4.5),
    ("D ring on bg (UI 3:1)",  "#4D9FEA", "#0A1526", 3.0),
    # gold on navy (exam/hero accents)
    ("Gold on navy deep",   "#FFC247", "#0B1F46", 4.5),
    ("White on navy deep",  "#FFFFFF", "#0B1F46", 4.5),
    # gradient text safety: violet on white
    ("Violet-600 on card",  "#7C3AED", "#FFFFFF", 4.5),
    ("Indigo-600 on card",  "#4F46E5", "#FFFFFF", 4.5),
    ("Orange-700 on card",  "#C2410C", "#FFFFFF", 4.5),
]

allpass = True
for name, fg, bg, need in pairs:
    r = contrast(fg, bg)
    ok = "PASS" if r >= need else "FAIL"
    if r < need: allpass = False
    print(f"{ok}  {r:5.2f}:1 (need {need})  {name}  {fg} on {bg}")
print("\nALL PASS" if allpass else "\nSOME FAILED")
