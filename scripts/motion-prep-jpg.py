#!/usr/bin/env python3
"""Prepare motion-release screenshots for VLM analysis (downscale, split tall pages)."""
from PIL import Image
import os

SRC = "/home/z/my-project/docs/design/assets/motion"
DST = "/tmp/motion-jpg"
os.makedirs(DST, exist_ok=True)

MAXW = 760
SEG_H = 3200
OVERLAP = 120

for f in sorted(os.listdir(SRC)):
    if not f.endswith(".png"):
        continue
    im = Image.open(f"{SRC}/{f}").convert("RGB")
    w, h = im.size
    if w > MAXW:
        nh = round(h * MAXW / w)
        im = im.resize((MAXW, nh), Image.LANCZOS)
        w, h = im.size
    base = f.replace(".png", "")
    if h <= SEG_H + 300:
        im.save(f"{DST}/{base}.jpg", "JPEG", quality=74)
        print(f"{base}.jpg  {w}x{h}")
    else:
        segs = (h + SEG_H - 1) // SEG_H
        for i in range(segs):
            top = max(0, i * SEG_H - (OVERLAP if i else 0))
            bottom = min(h, (i + 1) * SEG_H)
            crop = im.crop((0, top, w, bottom))
            crop.save(f"{DST}/{base}-p{i+1}.jpg", "JPEG", quality=74)
            print(f"{base}-p{i+1}.jpg  {w}x{bottom-top}")
print("DONE")
