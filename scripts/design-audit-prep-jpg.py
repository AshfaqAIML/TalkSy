#!/usr/bin/env python3
"""Prepare screenshots for VLM analysis: downscale to width<=760, split tall pages into segments."""
from PIL import Image
import os

SRC = "/home/z/my-project/docs/design/assets"
DST = "/tmp/audit-jpg"
os.makedirs(DST, exist_ok=True)

MAXW = 760          # target width for desktop shots
SEG_H = 3400        # max segment height after scaling
OVERLAP = 150       # vertical overlap between segments

for d in ["talksy", "reference"]:
    os.makedirs(f"{DST}/{d}", exist_ok=True)
    for f in sorted(os.listdir(f"{SRC}/{d}")):
        if not f.endswith(".png"):
            continue
        im = Image.open(f"{SRC}/{d}/{f}").convert("RGB")
        w, h = im.size
        # mobile shots (390) keep native width; desktop scale to MAXW
        if w > MAXW:
            nh = round(h * MAXW / w)
            im = im.resize((MAXW, nh), Image.LANCZOS)
            w, h = im.size
        base = f.replace(".png", "")
        if h <= SEG_H + 400:
            out = f"{DST}/{d}/{base}.jpg"
            im.save(out, "JPEG", quality=74)
            print(f"{d}/{base}.jpg  {w}x{h}")
        else:
            n = (h + SEG_H - 1) // SEG_H
            for i in range(n):
                top = max(0, i * SEG_H - (OVERLAP if i > 0 else 0))
                bot = min(h, (i + 1) * SEG_H)
                seg = im.crop((0, top, w, bot))
                out = f"{DST}/{d}/{base}-p{i+1}.jpg"
                seg.save(out, "JPEG", quality=74)
                print(f"{d}/{base}-p{i+1}.jpg  {w}x{bot-top}")
print("DONE")
