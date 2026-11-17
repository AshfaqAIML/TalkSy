/*
  Widen the RevisionItem uniqueness from a global unique on itemKey to a
  per-user composite unique (userId, itemKey). Manual migration: SQLite
  cannot drop an inline UNIQUE constraint without a table rebuild, and
  Prisma Migrate requires an interactive TTY to confirm it.
*/
PRAGMA foreign_keys=OFF;

-- RedefineTables
DROP INDEX IF EXISTS "RevisionItem_itemKey_key";
DROP INDEX IF EXISTS "RevisionItem_userId_dueAt_idx";
CREATE TABLE "new_RevisionItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "itemKey" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "vocabularyId" TEXT,
    "dueAt" DATETIME NOT NULL,
    "intervalDays" REAL NOT NULL DEFAULT 1,
    "easeFactor" REAL NOT NULL DEFAULT 2.5,
    "repetitions" INTEGER NOT NULL DEFAULT 0,
    "lapses" INTEGER NOT NULL DEFAULT 0,
    "lastOutcome" BOOLEAN,
    "lastReviewedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "RevisionItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "RevisionItem_vocabularyId_fkey" FOREIGN KEY ("vocabularyId") REFERENCES "Vocabulary" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_RevisionItem" ("id", "userId", "itemKey", "itemType", "vocabularyId", "dueAt", "intervalDays", "easeFactor", "repetitions", "lapses", "lastOutcome", "lastReviewedAt", "createdAt")
SELECT "id", "userId", "itemKey", "itemType", "vocabularyId", "dueAt", "intervalDays", "easeFactor", "repetitions", "lapses", "lastOutcome", "lastReviewedAt", "createdAt" FROM "RevisionItem";
DROP TABLE "RevisionItem";
ALTER TABLE "new_RevisionItem" RENAME TO "RevisionItem";

-- CreateIndex
CREATE UNIQUE INDEX "RevisionItem_userId_itemKey_key" ON "RevisionItem"("userId", "itemKey");

-- CreateIndex
CREATE INDEX "RevisionItem_userId_dueAt_idx" ON "RevisionItem"("userId", "dueAt");

PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
