#!/bin/bash
# PROMPT 58 cycle: run the exact package.json "test" pipeline and log results
set -x
cd /home/z/my-project
export AUTH_REGISTER_LIMIT=1000
export DATABASE_URL=file:/home/z/my-project/db/test.db

bun node_modules/.bin/prisma db push --accept-data-loss > /tmp/p58-test-full.log 2>&1
echo "=== db push done ===" >> /tmp/p58-test-full.log
bun scripts/test-reset.ts >> /tmp/p58-test-full.log 2>&1
echo "=== reset done ===" >> /tmp/p58-test-full.log
bun scripts/seed-programme.ts >> /tmp/p58-test-full.log 2>&1
echo "=== seed done ===" >> /tmp/p58-test-full.log
bun test >> /tmp/p58-test-full.log 2>&1
echo "TESTS_EXIT:$?" >> /tmp/p58-test-full.log
echo "=== all done ===" >> /tmp/p58-test-full.log
