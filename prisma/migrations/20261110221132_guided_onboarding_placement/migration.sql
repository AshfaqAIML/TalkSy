-- CreateTable
CREATE TABLE "LearnerProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "purposesJson" TEXT NOT NULL DEFAULT '[]',
    "overallAbility" INTEGER NOT NULL DEFAULT 0,
    "speakingConfidence" INTEGER NOT NULL DEFAULT 0,
    "readingConfidence" INTEGER NOT NULL DEFAULT 0,
    "writingConfidence" INTEGER NOT NULL DEFAULT 0,
    "listeningConfidence" INTEGER NOT NULL DEFAULT 0,
    "dailyMinutes" INTEGER NOT NULL DEFAULT 10,
    "explanationLanguage" TEXT NOT NULL DEFAULT 'simple-english',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "LearnerProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PlacementAttempt" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "audioAvailable" BOOLEAN NOT NULL DEFAULT true,
    "stateJson" TEXT NOT NULL DEFAULT '{}',
    "resultsJson" TEXT,
    "recommendedLevelCode" TEXT,
    "recommendedLessonSlug" TEXT,
    "startedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" DATETIME,
    CONSTRAINT "PlacementAttempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PlacementAnswer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "attemptId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "tier" INTEGER NOT NULL,
    "correct" BOOLEAN,
    "response" TEXT,
    "selfRating" INTEGER,
    "skipped" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "PlacementAnswer_attemptId_fkey" FOREIGN KEY ("attemptId") REFERENCES "PlacementAttempt" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LearningPlan" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "attemptId" TEXT,
    "status" TEXT NOT NULL,
    "startLevelCode" TEXT NOT NULL,
    "startLessonSlug" TEXT NOT NULL,
    "adjustmentsJson" TEXT NOT NULL DEFAULT '{}',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "LearningPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "LearningPlan_attemptId_fkey" FOREIGN KEY ("attemptId") REFERENCES "PlacementAttempt" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "LearnerProfile_userId_key" ON "LearnerProfile"("userId");

-- CreateIndex
CREATE INDEX "LearnerProfile_userId_idx" ON "LearnerProfile"("userId");

-- CreateIndex
CREATE INDEX "PlacementAttempt_userId_status_idx" ON "PlacementAttempt"("userId", "status");

-- CreateIndex
CREATE INDEX "PlacementAttempt_userId_completedAt_idx" ON "PlacementAttempt"("userId", "completedAt");

-- CreateIndex
CREATE INDEX "PlacementAnswer_attemptId_skill_idx" ON "PlacementAnswer"("attemptId", "skill");

-- CreateIndex
CREATE UNIQUE INDEX "PlacementAnswer_attemptId_itemId_key" ON "PlacementAnswer"("attemptId", "itemId");

-- CreateIndex
CREATE INDEX "LearningPlan_userId_status_idx" ON "LearningPlan"("userId", "status");
