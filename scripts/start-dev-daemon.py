#!/usr/bin/env python3
"""Start the TalkSy dev server as a fully detached daemon (double-fork + setsid)."""
import os
import subprocess
import sys

LOG = "/home/z/my-project/dev.log"

# Double-fork: child exits, grandchild is reparented to init, fully detached.
if os.fork() > 0:
    sys.exit(0)
os.setsid()
if os.fork() > 0:
    sys.exit(0)

os.chdir("/home/z/my-project")
# Redirect stdio to the dev log (the npm script also tees there)
with open(os.devnull, "r") as devnull_r, open(LOG, "a") as logf:
    os.dup2(devnull_r.fileno(), 0)
    os.dup2(logf.fileno(), 1)
    os.dup2(logf.fileno(), 2)

subprocess.Popen(
    ["bun", "run", "dev"],
    cwd="/home/z/my-project",
    stdin=subprocess.DEVNULL,
    stdout=subprocess.DEVNULL,
    stderr=subprocess.DEVNULL,
    start_new_session=True,
    close_fds=True,
)
print("daemon started", flush=True)
