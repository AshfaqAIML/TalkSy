-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "dailyGoalMinutes" INTEGER NOT NULL DEFAULT 10,
    "xp" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "roleId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "UserRole" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserRole" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rank" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "displayName" TEXT,
    "avatarUrl" TEXT,
    "bio" TEXT,
    "country" TEXT,
    "timezone" TEXT,
    "nativeLanguageId" INTEGER,
    "targetCefrLevel" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserProfile_nativeLanguageId_fkey" FOREIGN KEY ("nativeLanguageId") REFERENCES "LearningLanguage" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserPreference" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "theme" TEXT NOT NULL DEFAULT 'system',
    "notificationsEnabled" BOOLEAN NOT NULL DEFAULT true,
    "audioRate" REAL NOT NULL DEFAULT 0.92,
    "subtitlesDefault" BOOLEAN NOT NULL DEFAULT true,
    "weeklyProgressEmail" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserPreference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LearningLanguage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nativeName" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "tagline" TEXT,
    "description" TEXT NOT NULL,
    "languageId" INTEGER NOT NULL,
    "version" TEXT NOT NULL DEFAULT '1.0.0',
    "status" TEXT NOT NULL DEFAULT 'PUBLISHED',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Course_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "LearningLanguage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LearningLevel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "courseId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cefrLabel" TEXT NOT NULL,
    "tagline" TEXT,
    "description" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'AVAILABLE',
    CONSTRAINT "LearningLevel_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CurriculumModule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "courseId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "sortOrder" INTEGER NOT NULL,
    CONSTRAINT "CurriculumModule_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Unit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "levelId" TEXT NOT NULL,
    "moduleId" TEXT,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    CONSTRAINT "Unit_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "LearningLevel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Unit_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "CurriculumModule" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Lesson" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "unitId" TEXT NOT NULL,
    "levelId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "description" TEXT NOT NULL,
    "minutes" INTEGER NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PUBLISHED',
    "isStructured" BOOLEAN NOT NULL DEFAULT false,
    "skillsJson" TEXT NOT NULL DEFAULT '[]',
    "sourceType" TEXT NOT NULL DEFAULT 'TYPESCRIPT',
    "sourceFile" TEXT NOT NULL,
    "contentVersion" TEXT NOT NULL DEFAULT '1.0.0',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Lesson_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lesson_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "LearningLevel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LessonPrerequisite" (
    "lessonId" TEXT NOT NULL,
    "prerequisiteLessonId" TEXT NOT NULL,
    "kind" TEXT NOT NULL,

    PRIMARY KEY ("lessonId", "prerequisiteLessonId"),
    CONSTRAINT "LessonPrerequisite_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LessonPrerequisite_prerequisiteLessonId_fkey" FOREIGN KEY ("prerequisiteLessonId") REFERENCES "Lesson" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LessonSection" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lessonId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "contentJson" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    CONSTRAINT "LessonSection_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LearningObjective" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "skill" TEXT
);

-- CreateTable
CREATE TABLE "LessonObjective" (
    "lessonId" TEXT NOT NULL,
    "objectiveId" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,

    PRIMARY KEY ("lessonId", "objectiveId"),
    CONSTRAINT "LessonObjective_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LessonObjective_objectiveId_fkey" FOREIGN KEY ("objectiveId") REFERENCES "LearningObjective" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GrammarTopic" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "friendlyName" TEXT,
    "definition" TEXT
);

-- CreateTable
CREATE TABLE "LessonGrammarTopic" (
    "lessonId" TEXT NOT NULL,
    "topicId" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'PRACTISES',

    PRIMARY KEY ("lessonId", "topicId"),
    CONSTRAINT "LessonGrammarTopic_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LessonGrammarTopic_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "GrammarTopic" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Vocabulary" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "wordId" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,
    "term" TEXT NOT NULL,
    "pos" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "example" TEXT NOT NULL,
    "cefrLevel" TEXT,
    "sortOrder" INTEGER NOT NULL,
    CONSTRAINT "Vocabulary_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ExampleSentence" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lessonId" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "note" TEXT,
    "sortOrder" INTEGER NOT NULL,
    CONSTRAINT "ExampleSentence_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Dialogue" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lessonId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "context" TEXT NOT NULL,
    CONSTRAINT "Dialogue_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DialogueLine" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dialogueId" TEXT NOT NULL,
    "speaker" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    CONSTRAINT "DialogueLine_dialogueId_fkey" FOREIGN KEY ("dialogueId") REFERENCES "Dialogue" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ReadingPassage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lessonId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "wordCount" INTEGER NOT NULL,
    CONSTRAINT "ReadingPassage_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AudioAsset" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lessonId" TEXT NOT NULL,
    "vocabularyId" TEXT,
    "exerciseId" TEXT,
    "kind" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'en-GB',
    "rate" REAL NOT NULL DEFAULT 0.92,
    "speaker" TEXT,
    "sortOrder" INTEGER,
    CONSTRAINT "AudioAsset_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AudioAsset_vocabularyId_fkey" FOREIGN KEY ("vocabularyId") REFERENCES "Vocabulary" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "AudioAsset_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LessonResource" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lessonId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT,
    "description" TEXT,
    "sortOrder" INTEGER NOT NULL,
    CONSTRAINT "LessonResource_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "exerciseId" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "phase" TEXT,
    "prompt" TEXT NOT NULL,
    "audioText" TEXT,
    "wordId" TEXT,
    "isGradable" BOOLEAN NOT NULL DEFAULT true,
    "payloadJson" TEXT NOT NULL DEFAULT '{}',
    "sortOrder" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PUBLISHED',
    CONSTRAINT "Exercise_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ExerciseQuestion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "exerciseId" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    CONSTRAINT "ExerciseQuestion_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AnswerOption" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "questionId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    CONSTRAINT "AnswerOption_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "ExerciseQuestion" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AnswerKey" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "questionId" TEXT NOT NULL,
    "keyType" TEXT NOT NULL,
    "correctIndex" INTEGER,
    "answerText" TEXT,
    "acceptedJson" TEXT,
    "explanation" TEXT,
    "modelAnswer" TEXT,
    CONSTRAINT "AnswerKey_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "ExerciseQuestion" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Assignment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lessonId" TEXT NOT NULL,
    "kind" TEXT NOT NULL DEFAULT 'HOMEWORK',
    "taskText" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    CONSTRAINT "Assignment_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Assessment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "lessonId" TEXT,
    "title" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "passScore" INTEGER NOT NULL DEFAULT 60,
    "maxAttempts" INTEGER,
    "timeLimitMinutes" INTEGER,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Assessment_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AssessmentQuestion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "assessmentId" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 1,
    "sortOrder" INTEGER NOT NULL,
    CONSTRAINT "AssessmentQuestion_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "Assessment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AssessmentQuestion_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AssessmentAttempt" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "assessmentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'IN_PROGRESS',
    "startedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "submittedAt" DATETIME,
    "score" INTEGER,
    "maxScore" INTEGER,
    "passed" BOOLEAN,
    "answersJson" TEXT,
    CONSTRAINT "AssessmentAttempt_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "Assessment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AssessmentAttempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Enrollment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "enrolledAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" DATETIME,
    CONSTRAINT "Enrollment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Enrollment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LessonCompletion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "lessonSlug" TEXT NOT NULL,
    "bestScore" INTEGER NOT NULL DEFAULT 0,
    "timesCompleted" INTEGER NOT NULL DEFAULT 1,
    "lastCompletedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "LessonCompletion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ExerciseAttempt" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "lessonSlug" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "wordId" TEXT,
    "correct" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ExerciseAttempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SkillProgress" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "xp" INTEGER NOT NULL DEFAULT 0,
    "practiceCount" INTEGER NOT NULL DEFAULT 0,
    "correctCount" INTEGER NOT NULL DEFAULT 0,
    "lastPractisedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SkillProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VocabularyProgress" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "wordId" TEXT NOT NULL,
    "strength" INTEGER NOT NULL DEFAULT 0,
    "correctCount" INTEGER NOT NULL DEFAULT 0,
    "wrongCount" INTEGER NOT NULL DEFAULT 0,
    "lastReviewedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "VocabularyProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "VocabularyProgress_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Vocabulary" ("wordId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RevisionItem" (
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

-- CreateTable
CREATE TABLE "LearningActivity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "lessonSlug" TEXT,
    "exerciseId" TEXT,
    "assessmentId" TEXT,
    "metadataJson" TEXT,
    "occurredAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "LearningActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LearningStreak" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "currentDays" INTEGER NOT NULL DEFAULT 0,
    "longestDays" INTEGER NOT NULL DEFAULT 0,
    "lastActiveDate" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "LearningStreak_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "threshold" INTEGER NOT NULL,
    "icon" TEXT
);

-- CreateTable
CREATE TABLE "UserAchievement" (
    "userId" TEXT NOT NULL,
    "achievementId" TEXT NOT NULL,
    "unlockedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("userId", "achievementId"),
    CONSTRAINT "UserAchievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserAchievement_achievementId_fkey" FOREIGN KEY ("achievementId") REFERENCES "Achievement" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TutorConversation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "lessonSlug" TEXT,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "TutorConversation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TutorMessage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "conversationId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "TutorMessage_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "TutorConversation" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WritingSubmission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "exerciseId" TEXT,
    "lessonSlug" TEXT,
    "promptText" TEXT,
    "text" TEXT NOT NULL,
    "wordCount" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'SUBMITTED',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "WritingSubmission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WritingFeedback" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "submissionId" TEXT NOT NULL,
    "overallScore" INTEGER,
    "summary" TEXT NOT NULL,
    "strengthsJson" TEXT NOT NULL DEFAULT '[]',
    "improvementsJson" TEXT NOT NULL DEFAULT '[]',
    "checksJson" TEXT NOT NULL DEFAULT '{}',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "WritingFeedback_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "WritingSubmission" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SpeakingSubmission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "exerciseId" TEXT,
    "lessonSlug" TEXT,
    "promptText" TEXT,
    "expectedText" TEXT,
    "transcript" TEXT,
    "durationMs" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'SUBMITTED',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SpeakingSubmission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SpeakingFeedback" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "submissionId" TEXT NOT NULL,
    "similarityScore" REAL,
    "wordMatchRatio" REAL,
    "summary" TEXT NOT NULL,
    "tipsJson" TEXT NOT NULL DEFAULT '[]',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SpeakingFeedback_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "SpeakingSubmission" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PublicationStatus" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ContentVersion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "contentType" TEXT NOT NULL,
    "contentKey" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "contentHash" TEXT NOT NULL,
    "changelog" TEXT,
    "createdFrom" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ContentReview" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "contentVersionId" TEXT NOT NULL,
    "statusId" INTEGER NOT NULL,
    "authoredBy" TEXT NOT NULL,
    "isAiAssisted" BOOLEAN NOT NULL DEFAULT false,
    "catalogueTargetsJson" TEXT NOT NULL DEFAULT '[]',
    "reviewNotes" TEXT,
    "reviewerId" TEXT,
    "reviewedAt" DATETIME,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ContentReview_contentVersionId_fkey" FOREIGN KEY ("contentVersionId") REFERENCES "ContentVersion" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ContentReview_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "PublicationStatus" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ContentReview_reviewerId_fkey" FOREIGN KEY ("reviewerId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "actorId" TEXT,
    "action" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "metadataJson" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AuditLog_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "token" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DailyActivity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "xpEarned" INTEGER NOT NULL DEFAULT 0,
    "lessonsCompleted" INTEGER NOT NULL DEFAULT 0,
    "exercisesCompleted" INTEGER NOT NULL DEFAULT 0,
    "minutesPractised" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "DailyActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_roleId_idx" ON "User"("roleId");

-- CreateIndex
CREATE INDEX "User_status_idx" ON "User"("status");

-- CreateIndex
CREATE UNIQUE INDEX "UserRole_key_key" ON "UserRole"("key");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userId_key" ON "UserProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserPreference_userId_key" ON "UserPreference"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "LearningLanguage_code_key" ON "LearningLanguage"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Course_slug_key" ON "Course"("slug");

-- CreateIndex
CREATE INDEX "Course_languageId_idx" ON "Course"("languageId");

-- CreateIndex
CREATE INDEX "Course_status_idx" ON "Course"("status");

-- CreateIndex
CREATE UNIQUE INDEX "LearningLevel_code_key" ON "LearningLevel"("code");

-- CreateIndex
CREATE INDEX "LearningLevel_courseId_idx" ON "LearningLevel"("courseId");

-- CreateIndex
CREATE INDEX "LearningLevel_status_idx" ON "LearningLevel"("status");

-- CreateIndex
CREATE UNIQUE INDEX "CurriculumModule_code_key" ON "CurriculumModule"("code");

-- CreateIndex
CREATE INDEX "CurriculumModule_courseId_idx" ON "CurriculumModule"("courseId");

-- CreateIndex
CREATE UNIQUE INDEX "Unit_slug_key" ON "Unit"("slug");

-- CreateIndex
CREATE INDEX "Unit_levelId_idx" ON "Unit"("levelId");

-- CreateIndex
CREATE INDEX "Unit_moduleId_idx" ON "Unit"("moduleId");

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_slug_key" ON "Lesson"("slug");

-- CreateIndex
CREATE INDEX "Lesson_unitId_idx" ON "Lesson"("unitId");

-- CreateIndex
CREATE INDEX "Lesson_levelId_idx" ON "Lesson"("levelId");

-- CreateIndex
CREATE INDEX "Lesson_status_idx" ON "Lesson"("status");

-- CreateIndex
CREATE INDEX "LessonPrerequisite_prerequisiteLessonId_idx" ON "LessonPrerequisite"("prerequisiteLessonId");

-- CreateIndex
CREATE INDEX "LessonSection_lessonId_idx" ON "LessonSection"("lessonId");

-- CreateIndex
CREATE UNIQUE INDEX "LessonSection_lessonId_type_key" ON "LessonSection"("lessonId", "type");

-- CreateIndex
CREATE UNIQUE INDEX "LearningObjective_code_key" ON "LearningObjective"("code");

-- CreateIndex
CREATE INDEX "LessonObjective_objectiveId_idx" ON "LessonObjective"("objectiveId");

-- CreateIndex
CREATE UNIQUE INDEX "GrammarTopic_slug_key" ON "GrammarTopic"("slug");

-- CreateIndex
CREATE INDEX "LessonGrammarTopic_topicId_idx" ON "LessonGrammarTopic"("topicId");

-- CreateIndex
CREATE UNIQUE INDEX "Vocabulary_wordId_key" ON "Vocabulary"("wordId");

-- CreateIndex
CREATE INDEX "Vocabulary_lessonId_idx" ON "Vocabulary"("lessonId");

-- CreateIndex
CREATE INDEX "Vocabulary_term_idx" ON "Vocabulary"("term");

-- CreateIndex
CREATE INDEX "ExampleSentence_lessonId_idx" ON "ExampleSentence"("lessonId");

-- CreateIndex
CREATE UNIQUE INDEX "Dialogue_lessonId_key" ON "Dialogue"("lessonId");

-- CreateIndex
CREATE UNIQUE INDEX "DialogueLine_dialogueId_sortOrder_key" ON "DialogueLine"("dialogueId", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "ReadingPassage_lessonId_key" ON "ReadingPassage"("lessonId");

-- CreateIndex
CREATE INDEX "AudioAsset_lessonId_idx" ON "AudioAsset"("lessonId");

-- CreateIndex
CREATE INDEX "AudioAsset_vocabularyId_idx" ON "AudioAsset"("vocabularyId");

-- CreateIndex
CREATE INDEX "LessonResource_lessonId_idx" ON "LessonResource"("lessonId");

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_exerciseId_key" ON "Exercise"("exerciseId");

-- CreateIndex
CREATE INDEX "Exercise_lessonId_idx" ON "Exercise"("lessonId");

-- CreateIndex
CREATE INDEX "Exercise_type_idx" ON "Exercise"("type");

-- CreateIndex
CREATE UNIQUE INDEX "ExerciseQuestion_exerciseId_sortOrder_key" ON "ExerciseQuestion"("exerciseId", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "AnswerOption_questionId_sortOrder_key" ON "AnswerOption"("questionId", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "AnswerKey_questionId_key" ON "AnswerKey"("questionId");

-- CreateIndex
CREATE INDEX "Assignment_lessonId_idx" ON "Assignment"("lessonId");

-- CreateIndex
CREATE UNIQUE INDEX "Assessment_slug_key" ON "Assessment"("slug");

-- CreateIndex
CREATE INDEX "Assessment_lessonId_idx" ON "Assessment"("lessonId");

-- CreateIndex
CREATE INDEX "AssessmentQuestion_exerciseId_idx" ON "AssessmentQuestion"("exerciseId");

-- CreateIndex
CREATE UNIQUE INDEX "AssessmentQuestion_assessmentId_sortOrder_key" ON "AssessmentQuestion"("assessmentId", "sortOrder");

-- CreateIndex
CREATE INDEX "AssessmentAttempt_userId_assessmentId_idx" ON "AssessmentAttempt"("userId", "assessmentId");

-- CreateIndex
CREATE INDEX "AssessmentAttempt_assessmentId_submittedAt_idx" ON "AssessmentAttempt"("assessmentId", "submittedAt");

-- CreateIndex
CREATE INDEX "Enrollment_courseId_idx" ON "Enrollment"("courseId");

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_userId_courseId_key" ON "Enrollment"("userId", "courseId");

-- CreateIndex
CREATE INDEX "LessonCompletion_userId_idx" ON "LessonCompletion"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "LessonCompletion_userId_lessonSlug_key" ON "LessonCompletion"("userId", "lessonSlug");

-- CreateIndex
CREATE INDEX "ExerciseAttempt_userId_lessonSlug_idx" ON "ExerciseAttempt"("userId", "lessonSlug");

-- CreateIndex
CREATE INDEX "ExerciseAttempt_userId_exerciseId_idx" ON "ExerciseAttempt"("userId", "exerciseId");

-- CreateIndex
CREATE UNIQUE INDEX "SkillProgress_userId_skill_key" ON "SkillProgress"("userId", "skill");

-- CreateIndex
CREATE INDEX "VocabularyProgress_userId_idx" ON "VocabularyProgress"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "VocabularyProgress_userId_wordId_key" ON "VocabularyProgress"("userId", "wordId");

-- CreateIndex
CREATE UNIQUE INDEX "RevisionItem_itemKey_key" ON "RevisionItem"("itemKey");

-- CreateIndex
CREATE INDEX "RevisionItem_userId_dueAt_idx" ON "RevisionItem"("userId", "dueAt");

-- CreateIndex
CREATE INDEX "LearningActivity_userId_occurredAt_idx" ON "LearningActivity"("userId", "occurredAt");

-- CreateIndex
CREATE INDEX "LearningActivity_type_occurredAt_idx" ON "LearningActivity"("type", "occurredAt");

-- CreateIndex
CREATE UNIQUE INDEX "LearningStreak_userId_key" ON "LearningStreak"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Achievement_code_key" ON "Achievement"("code");

-- CreateIndex
CREATE INDEX "TutorConversation_userId_updatedAt_idx" ON "TutorConversation"("userId", "updatedAt");

-- CreateIndex
CREATE INDEX "TutorMessage_conversationId_createdAt_idx" ON "TutorMessage"("conversationId", "createdAt");

-- CreateIndex
CREATE INDEX "WritingSubmission_userId_createdAt_idx" ON "WritingSubmission"("userId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "WritingFeedback_submissionId_key" ON "WritingFeedback"("submissionId");

-- CreateIndex
CREATE INDEX "SpeakingSubmission_userId_createdAt_idx" ON "SpeakingSubmission"("userId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "SpeakingFeedback_submissionId_key" ON "SpeakingFeedback"("submissionId");

-- CreateIndex
CREATE UNIQUE INDEX "PublicationStatus_key_key" ON "PublicationStatus"("key");

-- CreateIndex
CREATE INDEX "ContentVersion_contentKey_idx" ON "ContentVersion"("contentKey");

-- CreateIndex
CREATE INDEX "ContentVersion_contentType_createdAt_idx" ON "ContentVersion"("contentType", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "ContentVersion_contentType_contentKey_version_key" ON "ContentVersion"("contentType", "contentKey", "version");

-- CreateIndex
CREATE UNIQUE INDEX "ContentReview_contentVersionId_key" ON "ContentReview"("contentVersionId");

-- CreateIndex
CREATE INDEX "ContentReview_statusId_idx" ON "ContentReview"("statusId");

-- CreateIndex
CREATE INDEX "AuditLog_entityType_entityId_idx" ON "AuditLog"("entityType", "entityId");

-- CreateIndex
CREATE INDEX "AuditLog_createdAt_idx" ON "AuditLog"("createdAt");

-- CreateIndex
CREATE INDEX "AuditLog_actorId_idx" ON "AuditLog"("actorId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_token_key" ON "Session"("token");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");

-- CreateIndex
CREATE INDEX "DailyActivity_userId_date_idx" ON "DailyActivity"("userId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "DailyActivity_userId_date_key" ON "DailyActivity"("userId", "date");
