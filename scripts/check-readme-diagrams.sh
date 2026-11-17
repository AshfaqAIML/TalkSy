#!/usr/bin/env bash
# Extract every mermaid block from README.md and render it with mmdc.
# Fails on the first invalid diagram and names the block index.
set -u
README=/home/z/my-project/README.md
OUT=/tmp/mermaid-check
rm -rf "$OUT" && mkdir -p "$OUT"
python3 - "$README" "$OUT" <<'PY'
import re, sys, pathlib
src = pathlib.Path(sys.argv[1]).read_text()
blocks = re.findall(r"```mermaid\n(.*?)```", src, re.S)
print(f"found {len(blocks)} mermaid blocks")
for i, b in enumerate(blocks, 1):
    pathlib.Path(f"{sys.argv[2]}/diag-{i:02d}.mmd").write_text(b)
PY
ok=0
for f in "$OUT"/diag-*.mmd; do
  if mmdc -i "$f" -o "${f%.mmd}.svg" --quiet >/dev/null 2>"$OUT/err.txt"; then
    echo "OK   $(basename "$f")"
    ok=$((ok+1))
  else
    echo "FAIL $(basename "$f")"
    cat "$OUT/err.txt"
  fi
done
echo "rendered $ok diagrams"
