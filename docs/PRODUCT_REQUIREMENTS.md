# TalkSy — Product Requirements Document

| | |
| --- | --- |
| **Product** | TalkSy — a digital English academy |
| **Version** | 2.0 (supersedes the v1 compact requirement tables; legacy IDs mapped in Appendix A) |
| **Status** | Approved baseline for Stage 3+ planning |
| **Owner** | Product (senior PM, ed-tech) with Principal Architect |
| **Tagline** | From your first English word to confident communication |

> **Positioning.** TalkSy is not a grammar website. It is a **digital English academy**
> that continuously **teaches, assesses, guides and supports** individual learners —
> from their first English word to independent communication.
>
> **Naming.** The product is **TalkSy**. The former working name "EnglishPath" is
> retired; any historical reference to it means TalkSy.

---

## 0. How to read this document

- **Status** per feature: **Live** (built and browser-verified through Stage 2) ·
  **Partial** (core exists, expansion specified) · **Planned** (specified, not built).
- **Priority**: **P0** = core academy promise, ships first · **P1** = key
  differentiators · **P2** = scale, operations and future revenue expansion.
- **Academy loop tag** — every feature serves at least one stage of the loop
  defined in §1.3: Teach · Practice · Assess · Revise · Guide.
- Requirement IDs (`FR-XXX-nn`) are stable and referenced by the implementation
  roadmap and code-review checklists.
- Success metrics (§9) measure **learning outcomes and durable engagement —
  never time spent on the platform**.

---

## 1. Product vision

### 1.1 The destination

An absolute beginner enters TalkSy with almost no English. The academy takes
them, step by measurable step, to an **independent English communicator** —
operationally defined as a solid CEFR B1 graduate with a clear runway to B2:

- understands the main points of clear standard speech on familiar matters;
- handles most situations of daily life, travel and study;
- produces simple connected text and describes experiences, events, dreams and opinions;
- interacts with reasonable fluency, without strain for either party.

B1 is the graduation bar ("independent user"); B2 is the stretch destination
("confident, natural communication"). A1–C1 courseware provides the full ladder.

### 1.2 The eight abilities

Every learner journey develops eight tracked abilities. The platform reports
progress along each one — this is the ability model that lesson content,
exercises, assessments and the progress centre all share.

| # | Ability | The learner can… | Primarily trained in |
| --- | --- | --- | --- |
| 1 | **Reading** | read and understand graded texts, from signs to articles | Lesson passages · Reading Room (F09) |
| 2 | **Writing** | write words → sentences → paragraphs → short essays | Lesson exercises · Writing Studio (F12) |
| 3 | **Listening comprehension** | follow speech from slow clear audio to natural pace | Dialogues · Listening Lab (F10) |
| 4 | **Speaking confidence** | produce spoken English aloud, graded supportively | Lesson speaking · Speaking Lab (F11) · AI Tutor (F13) |
| 5 | **Grammar understanding** | understand and apply structures correctly in context | Lesson grammar · Grammar School (F06) |
| 6 | **Vocabulary knowledge** | acquire, retain and actively use words | Vocab cards · Vocabulary Builder (F08) · Revision (F15) |
| 7 | **Sentence construction** | build well-formed sentences from ideas | Order/fill exercises · Sentence Laboratory (F07) |
| 8 | **Practical communication** | handle real situations: greetings, shopping, interviews, email | Dialogues · role-plays · scenario practice · AI Tutor (F13) |

> **Data-model note (FR-CURR-08).** The current content model tags lessons with
> four skills (reading/writing/listening/speaking). Release R1 extends the tag
> set to the full eight-ability model; existing content is back-filled.

### 1.3 The Academy Loop (core product mechanic)

TalkSy behaves like a continuous teaching loop rather than a content library:

```
        ┌──────────────────────────────────────────────┐
        ▼                                              │
   1. TEACH ──► 2. PRACTICE ──► 3. ASSESS ──► 4. REVISE ──► 5. GUIDE ─┘
 structured    active production   immediate      spaced repetition   roadmap,
 lessons       speak + write        feedback       weakest first       next step,
                                                          AI tutor support
```

1. **Teach** — structured lessons: vocabulary in situations, grammar in context, model dialogues.
2. **Practice** — the learner *produces*: speaks, writes, builds sentences. Watching is never enough.
3. **Assess** — every answer is graded with an explanation; periodic assessments measure real growth.
4. **Revise** — vocabulary and grammar resurface on a spaced schedule, weakest items first.
5. **Guide** — the roadmap, the "one clear next step" and the AI tutor keep the learner on the path — then the loop advances to the next rung.

A grammar website only does step 1. TalkSy runs the whole loop, continuously,
for each individual learner.

### 1.4 Product principles (unchanged, inherited)

1. **Honest progress** — every number shown to a learner is derived from real,
   recorded work; XP is computed server-side and cannot be inflated.
2. **One clear next step** — at any moment the learner knows exactly what to do next.
3. **Skills, not screens** — design is judged by practice produced, never time-on-app.
4. **Respect the learner** — simple-English explanations, no dark patterns, graceful fallbacks.
5. **Content as craft** — original, level-appropriate, versioned, test-gated content.
6. **Free foundations** (new) — basic beginner learning is never paywalled (§8).

### 1.5 Relationship to existing documentation

This PRD governs product scope. It sits above and feeds:
[PRODUCT_VISION.md](PRODUCT_VISION.md) · [LEARNING_METHODOLOGY.md](LEARNING_METHODOLOGY.md) ·
[CURRICULUM_BLUEPRINT.md](CURRICULUM_BLUEPRINT.md) · [TECHNICAL_ARCHITECTURE.md](TECHNICAL_ARCHITECTURE.md) ·
[IMPLEMENTATION_ROADMAP.md](IMPLEMENTATION_ROADMAP.md). The engineering roadmap is
re-baselined against §13 release trains at each stage kickoff.

---

## 2. Target user personas

Eight personas cover the learner spectrum. Each is summarised with the seven
required attributes and feeds feature design, prioritisation and metric
interpretation. (CEFR levels are used as shorthand; personas are archetypes,
not exhaustive segments.)

### P1 · "Farida" — the absolute beginner

> Farida, 34, recently relocated to an English-speaking country. She knows
> "hello" and "thank you" and gets anxious when anyone speaks to her in English.

| Attribute | Farida |
| --- | --- |
| **Current ability** | Pre-A1/A1. Passive vocabulary < 100 words; cannot form a sentence; limited confidence even with the alphabet and numbers. |
| **Biggest difficulties** | Fear of starting; not knowing what to learn first; everything feels overwhelming; afraid of being judged when speaking. |
| **Learning motivation** | Daily-life independence: shopping, the doctor, her children's school, basic conversation with neighbours. |
| **Typical study habits** | Short 10–15 minute sessions, evenings on her phone; abandons anything that feels like school homework; benefits from streaks and visible small wins. |
| **Preferred learning environment** | Mobile-first, simple uncluttered UI, very slow and clear audio, private practice without an audience. |
| **Expected outcomes (≈3 months)** | Greet and introduce herself; understand numbers, prices and time; handle a simple shopping exchange; read signs and simple forms. |
| **Relevant platform features** | A1 curriculum & lesson player (F05) · diagnostic that starts at zero (F14) · Listening Lab slow replay (F10) · Speaking Lab with private self-assessment fallback (F11) · streaks & daily goal (F03/F17) · AI Tutor for "no question is too small" (F13). |

### P2 · "Samir" — understands English but cannot speak

> Samir, 27, learned English for 12 years in school. He reads tech articles
> fluently but freezes when a colleague asks him a question.

| Attribute | Samir |
| --- | --- |
| **Current ability** | A2–B1 receptive (reading/listening), A1 productive. Large passive vocabulary; strong grammar knowledge on paper. |
| **Biggest difficulties** | Speaking anxiety; mentally translating before speaking; no safe place to practise; pronunciation embarrassment; hesitation and silence. |
| **Learning motivation** | Career advancement — meetings, stand-ups and client calls are where he is judged. |
| **Typical study habits** | Consumes content (videos, articles, podcasts) but avoids production; studies in bursts before scary events like interviews. |
| **Preferred learning environment** | Private, judgement-free practice space; headphones + phone; repeat-after-me formats; measurable speaking milestones. |
| **Expected outcomes (≈4–6 months)** | Hold a 5-minute conversation; answer common workplace questions aloud without freezing; order food and make appointments by phone. |
| **Relevant platform features** | Speaking Lab shadowing & repetition drills (F11) · dialogue repeat-after-me in lessons (F05) · AI Tutor conversation practice (F13) · Listening Lab at natural pace (F10) · speaking-confidence achievements (F17). |

### P3 · "Grace" — weak grammar

> Grace, 29, speaks fluently-ish but her emails are embarrassing: "I have went
> to the meeting yesterday." Her fossilised errors never get corrected.

| Attribute | Grace |
| --- | --- |
| **Current ability** | B1 vocabulary and fluency, A2 grammar accuracy. Errors are fossilised — she does not hear them anymore. |
| **Biggest difficulties** | Tense consistency; articles (a/an/the); prepositions; word order; error blindness — needs targeted correction, not more rules. |
| **Learning motivation** | Professional credibility in writing and speech; possibly IELTS 6.5 in the future. |
| **Typical study habits** | Reads grammar rules, understands them, forgets under pressure; needs drills that force correct production and feedback that names *her* error. |
| **Preferred learning environment** | Desktop, structured lessons, clear explanations, progress visible per grammar point. |
| **Expected outcomes (≈3–4 months)** | Emails without tense/article errors; consciously self-corrects top 5 fossilised patterns; measurable grammar accuracy gain. |
| **Relevant platform features** | Grammar School reference + targeted drills (F06) · Sentence Laboratory error-correction mode (F07) · immediate feedback with explanations (F05) · Revision system resurfacing failed grammar (F15) · Progress Centre per-ability trends (F16). |

### P4 · "Min-Jun" — speaks well, struggles with writing

> Min-Jun, 31, learned English orally while working abroad. He is the chattiest
> person in the meeting — and the most afraid of the follow-up email.

| Attribute | Min-Jun |
| --- | --- |
| **Current ability** | B1 speaking and listening, A2 writing. Spelling, punctuation and paragraph structure were never formally taught. |
| **Biggest difficulties** | Spelling; punctuation; paragraph organisation; formal vs casual register; writing feels slow and humiliating compared to speaking. |
| **Learning motivation** | Professional emails, reports and eventually a university application essay. |
| **Typical study habits** | On-the-go learner; voice notes, not typing; avoids writing tasks unless scaffolded tightly. |
| **Preferred learning environment** | Mix of phone (drafting) and desktop (editing); templates and model answers; feedback on *his own* text. |
| **Expected outcomes (≈3–4 months)** | Write a clear 5-sentence professional email; structure a simple paragraph; self-edit for the top 3 writing errors. |
| **Relevant platform features** | Writing Studio scaffolded → guided → free tasks (F12) · Sentence Laboratory (F07) · Grammar School writing-focused points (F06) · AI Tutor draft feedback (F13). |

### P5 · "Ana" — preparing for higher education

> Ana, 22, has a conditional university offer: she needs to reach B2+/IELTS 6.5
> before September. She is disciplined and wants measurable milestones.

| Attribute | Ana |
| --- | --- |
| **Current ability** | B1 solid. Needs B2+: academic vocabulary, long texts, essay structure, lecture-style listening. |
| **Biggest difficulties** | Academic vocabulary range; reading long texts under time pressure; organising essays; listening to fast extended speech; exam technique. |
| **Learning motivation** | University admission — high stakes, hard deadline, willing to pay for outcome. |
| **Typical study habits** | 60+ minutes daily, tracks progress in a spreadsheet, wants mock tests with scores and a study plan she can trust. |
| **Preferred learning environment** | Desktop, long sessions, notes, dashboards, progress data, quiet assessment conditions. |
| **Expected outcomes (≈4–6 months)** | Pass entrance/IELTS at target; read academic texts efficiently; write a structured 250-word essay; follow 10-minute lectures. |
| **Relevant platform features** | B2/C1 curriculum (F02) · Reading Room academic texts (F09) · Writing Studio essay tasks (F12) · Assessments incl. mock tests (F14) · Progress Centre measurable milestones (F16) · paid Academic English course (§8). |

### P6 · "Ibrahim" — job seeker preparing for interviews

> Ibrahim, 25, has three interviews next month. His English is okay in casual
> chat, but "Tell me about yourself" in English keeps him up at night.

| Attribute | Ibrahim |
| --- | --- |
| **Current ability** | A2–B1 general; interview-specific performance is the bottleneck, not general English. |
| **Biggest difficulties** | Structuring answers (STAR); professional vocabulary; talking about himself; phone/video interview listening; time-boxed pressure. |
| **Learning motivation** | A job offer — a concrete, time-boxed goal with a hard deadline. |
| **Typical study habits** | Intensive bursts; scenario practice; rehearses answers out loud; wants feedback on *this week's* interview, not a 6-month syllabus. |
| **Preferred learning environment** | Phone + desktop mix, evenings, scenario simulations, recordings of himself. |
| **Expected outcomes (≈4–6 weeks)** | Deliver a 2-minute structured self-introduction; answer the 15 most common interview questions fluently; survive a mock interview. |
| **Relevant platform features** | Speaking Lab scenario practice (F11) · AI Tutor mock-interview mode (F13) · Listening Lab workplace dialogues (F10) · B1 work-themed units (F02) · paid Interview English course (§8). |

### P7 · "Priya" — the busy working professional

> Priya, 38, leads a distributed team. Her English is functional but she wants
> to sound credible in front of clients — and she has 20 minutes a day, on a train.

| Attribute | Priya |
| --- | --- |
| **Current ability** | B1 functional. Gaps: email tone, meeting small talk, precise vocabulary, presentations. |
| **Biggest difficulties** | No time; fragmented attention; needs business-appropriate register, not textbook English. |
| **Learning motivation** | Promotion and credibility with international colleagues; not exam-driven. |
| **Typical study habits** | 15–20 minute commute sessions on mobile; consistency via daily goal; drops anything that demands an hour. |
| **Preferred learning environment** | Mobile-first with occasional desktop; offline-tolerant; short complete units; streaks and daily goal keep her honest. |
| **Expected outcomes (≈6 months, slow burn)** | Participate actively in meetings; write polite, well-toned emails; handle small talk; give a short presentation. |
| **Relevant platform features** | Daily goal & dashboard (F03) · micro-lesson continuity (F05) · Listening Lab meeting audio (F10) · Writing Studio email templates (F12) · AI Tutor anytime Q&A (F13) · premium tier for depth (§8). |

### P8 · "Felix" — the intermediate learner seeking fluency

> Felix, 20, has been "intermediate" for three years across four apps. He wants
> to break the plateau and actually get good.

| Attribute | Felix |
| --- | --- |
| **Current ability** | B1–B2 plateau. Comfortable but fossilised; limited idiomatic range; speaks slowly and carefully. |
| **Biggest difficulties** | Plateau — intermediate content is too easy, advanced content too hard; fossilised errors; small vocabulary gaps block precision; speaking speed. |
| **Learning motivation** | Near-native confidence; nuance, style, humour; personal growth rather than a deadline. |
| **Typical study habits** | Self-directed; mixes apps, podcasts, series; abandons products that don't challenge him; wants a structured path to C1. |
| **Preferred learning environment** | Any device; desktop for serious writing; wants honest difficulty, no sugar-coating. |
| **Expected outcomes (≈12 months)** | Break the plateau; C1-level range; discuss abstract topics; understand fast native speech with nuance. |
| **Relevant platform features** | B2/C1 curriculum (F02) · advanced Reading Room (F09) · Revision targeting fossilised errors (F15) · AI Tutor free conversation (F13) · Assessments proving growth (F14). |

### 2.9 Persona → priority matrix (input to §11)

| Feature (§4) | P1 Farida | P2 Samir | P3 Grace | P4 Min-Jun | P5 Ana | P6 Ibrahim | P7 Priya | P8 Felix |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Lesson player | ●● | ● | ● | ● | ● | ● | ●● | ● |
| Grammar School | ○ | ● | ●● | ● | ● | ○ | ● | ● |
| Sentence Lab | ● | ● | ●● | ●● | ● | ○ | ○ | ● |
| Vocabulary Builder | ●● | ● | ● | ● | ●● | ● | ● | ●● |
| Reading Room | ● | ● | ● | ● | ●● | ○ | ● | ●● |
| Listening Lab | ●● | ●● | ● | ● | ●● | ● | ●● | ●● |
| Speaking Lab | ●● | ●● | ○ | ○ | ● | ●● | ● | ●● |
| Writing Studio | ○ | ● | ●● | ●● | ●● | ● | ●● | ● |
| AI Tutor | ● | ●● | ●● | ●● | ● | ●● | ●● | ●● |
| Assessments | ● | ● | ● | ● | ●● | ● | ○ | ●● |

●● = primary driver of value · ● = meaningful value · ○ = occasional value.
Farida's column is protected by the free-tier guarantee (§8) — the absolute
beginner must never hit a paywall.

---

## 3. Product differentiation

Seven pillars, each with its promise, the mechanism that delivers it, and how
it is enforced (test, gate or metric — not a marketing claim).

### 3.1 Structured learning — "a learner never has to guess what to study next"

- **Mechanism:** course roadmap with sequential unlocking (Live); diagnostic
  placement sets the entry point (F14, R1); dashboard "Continue your path"
  shows the single next lesson; every screen has exactly one primary action.
- **Enforced by:** UI review rule — any screen with two competing primary CTAs
  fails review; placement/roadmap acceptance criteria in F04/F14.

### 3.2 Personalised teaching — lessons adapt to learner proficiency

- **Mechanism:** diagnostic assessment chooses the starting rung; revision
  engine targets each learner's weakest words and grammar first (Leitner
  strength, Live); exercise selection within practice adapts by ability mix;
  level-appropriate feedback wording.
- **Enforced by:** practice quiz ordering is server-computed and
  weakest-first (Live); personalisation metrics in §9 (assessment improvement).

### 3.3 Practical learning — every grammar concept connects to real sentences and conversations

- **Mechanism:** content authoring rules — every grammar point ships with
  examples in real situations; every unit theme is a real-life domain
  (greetings, shopping, interviews); dialogues model the target language in use.
- **Enforced by:** curriculum content gates (test-enforced anatomy, CURRICULUM_BLUEPRINT §gates) — a grammar section with no in-context examples cannot merge.

### 3.4 Active production — learners must speak and write, not just watch

- **Mechanism:** every lesson includes listening *and speaking* exercises
  (test-enforced, Live); construction exercises (fill, order, match) force
  production, not recognition; Writing Studio and Speaking Lab extend
  production depth (R2); there is no video-only content.
- **Enforced by:** content gate "listen + speak in every lesson" (Live);
  speaking-participation and writing-submission metrics (§9).

### 3.5 Immediate feedback — what is correct, what is incorrect, and why

- **Mechanism:** every graded answer returns correctness + an explanation
  (Live); speech attempts get similarity scoring with near-miss feedback
  (Live); AI Tutor explains errors in the learner's own context (R3);
  assessments return per-item explanations, not just scores.
- **Enforced by:** exercise authoring rule — explanations are required on
  gradable exercise types (content gate); feedback latency ≤ 1s after answer.

### 3.6 Continuous revision — previously learned vocabulary and grammar are revisited

- **Mechanism:** Leitner strength 0–5 per word updated by every real answer
  (Live); practice quizzes already target weakest words first (Live); R1/R3
  upgrade this to scheduled spaced repetition (SM-2-style intervals) plus
  grammar-point revision, interleaved into the path — not a separate chore.
- **Enforced by:** vocabulary-retention metric (§9) — words reaching strength ≥ 3
  must still be retained 30 days later.

### 3.7 AI support — learners can ask questions and practise at any time

- **Mechanism:** AI Tutor (F13, R3) — grammar Q&A ("why is it *went* not
  *went-ed*?"), conversation practice with gentle correction, writing feedback,
  interview simulation. Server-side only; quota per tier (§8).
- **Enforced by guardrails (non-negotiable):** the AI informs and coaches but
  **never awards XP or completion** — only server-side graders do (honest
  progress); answers ground in TalkSy curriculum content where possible;
  low-confidence grammar answers fall back to curated Grammar School pages;
  quota enforcement is server-side.

---

## 4. Complete feature inventory

Nineteen features. Each specification defines purpose, functionality, users,
dependencies, acceptance criteria, priority and status. Feature priorities feed
§11; release assignments feed §13.

### F01 · Public website

**Academy loop:** Guide (acquisition) · **Status:** Partial (landing Live) · **Priority:** P1

- **Purpose.** Explain the academy, show the curriculum honestly, and convert
  visitors into registered learners without overpromising.
- **Functionality.** Landing page with hero, method explanation, live listening
  sample, curriculum preview (Live). Planned: pricing page (§8), FAQ, persona
  entry points ("I understand but can't speak"), testimonials (real learners
  only), legal pages (privacy, terms), SEO structure.
- **Users.** Anonymous visitors (all personas pre-registration).
- **Dependencies.** Brand assets (Live); pricing model (§8, R4); production
  deployment for real routing/SEO (sandbox constrains to the single route —
  see §10 constraints).
- **Acceptance criteria.**
  - Given a first-time visitor, when the landing page loads, then the value
    proposition, a working audio sample and a single primary CTA ("Start
    learning free") are visible without scrolling on mobile.
  - Given the curriculum preview, when a level is shown as available, then the
    lesson count is real (no fake content claims) — matches catalogue data.
  - Pricing page (when shipped) clearly states the free-forever guarantee for
    beginner learning (§8.2) above the fold.

### F02 · Course catalogue

**Academy loop:** Guide · **Status:** Live · **Priority:** P0

- **Purpose.** Present the full A1–C1 ladder with units, lessons, honest status
  and per-learner lock state — the map of the academy.
- **Functionality.** Level tabs with status ("available"/"in development");
  units with lesson cards (skills, minutes, vocab/exercise counts, best score,
  lock state); deep links to lessons; completed lessons always reopenable.
  Planned: premium badges on premium lesson variants (§8); ability coverage
  per unit (8-ability model).
- **Users.** All learners (Farida → Felix).
- **Dependencies.** Curriculum data model (Live); entitlement service for
  premium badges (R4, §8).
- **Acceptance criteria.**
  - Given an unauthenticated visitor, when browsing the catalogue, then all
    A1/A2 lessons are visible with zero paywall prompts.
  - Given a learner with 5 completed lessons, when opening the catalogue, then
    exactly the next lesson in sequence shows as the unlocked continuation and
    later lessons show locked with a clear reason.
  - In-development levels never show fake lesson counts.

### F03 · Student dashboard

**Academy loop:** Guide · **Status:** Live · **Priority:** P0

- **Purpose.** The learner's home: today's direction, real statistics, one
  clear next action.
- **Functionality.** Greeting; "Continue your path" card with the single next
  lesson; daily-goal ring (minutes, learner-set); streak; weekly XP chart from
  real activity; level progress; quick-practice shortcut. Planned (R3): ability
  radar (8 abilities), revision-due count, assessment history, goal suggestions
  from real pace.
- **Users.** All learners; core environment for Priya (commute) and Farida
  (small wins).
- **Dependencies.** Progress engine (Live); assessments & revision scheduling
  for the R3 widgets (F14/F15).
- **Acceptance criteria.**
  - Every number on the dashboard is derivable from recorded user events
    (server-authoritative) — no client-supplied stats.
  - Given a learner with revision items due, when the dashboard loads, then a
    revision CTA appears with a count and links to the review session (R3).
  - Dashboard meaningful content loads < 2s on 3G-fast; skeletons while loading.

### F04 · Course roadmap

**Academy loop:** Guide · **Status:** Live · **Priority:** P0

- **Purpose.** The structured path itself: what to study next, what is done,
  what is ahead — the anti-"guess what to study" device.
- **Functionality.** Sequential unlocking within a level (Live); completed
  lessons stay open for review forever (Live); placement results set the entry
  point (R1); level exit gates (assessment, R1); cross-level progression
  (A2 finish → B1 unlock prompt).
- **Users.** All learners; make-or-break for Farida (P1) and Ana (P5).
- **Dependencies.** Lesson completion records (Live); placement + exit tests
  (F14).
- **Acceptance criteria.**
  - Given any authenticated learner, when they finish the current lesson, then
    the next lesson unlocks immediately and the completion screen links to it.
  - Given a placement result at unit n, when entering the roadmap, then units
    < n are unlocked-but-not-completed (reviewable), unit n is the active
    next step (R1).
  - No learner can reach lesson content out of order via URL manipulation
    (server-enforced lock, Live).

### F05 · Lesson player

**Academy loop:** Teach · Practice · Assess · **Status:** Live · **Priority:** P0

- **Purpose.** The classroom: the seven-beat lesson arc that delivers
  teach → practice → immediate feedback in 8–12 minutes.
- **Functionality.** Arc: vocab cards → dialogue (two voices, slow replay) →
  grammar → passage → mixed exercises (mcq, fill, order, match, listen, speak
  — Live) → completion screen with honest XP/accuracy. Planned: `write`
  exercise type (R2, F12); ability tags per exercise (R1); per-exercise
  explanation display is Live.
- **Users.** All learners — the primary daily touchpoint for everyone.
- **Dependencies.** Curriculum content (Live); Web Speech API; writing grader
  design for the `write` type (F12).
- **Acceptance criteria.**
  - Given any lesson, when played end-to-end, then the learner has read, heard,
    spoken and constructed English (content gate: listen + speak mandatory).
  - Given a wrong answer, when the exercise supports explanations, then the
    learner sees *why* the answer is wrong within 1s, before continuing.
  - Given a completed lesson, when XP is awarded, then it matches server-side
    computation from recorded attempts (Live; regression-tested).
  - Retry is always allowed; XP for an exercise is credited only on first
    correct attempt (Live).

### F06 · Grammar school

**Academy loop:** Teach · Revise · **Status:** Planned (R2) · **Priority:** P1

- **Purpose.** A browsable, level-indexed grammar reference where every concept
  is explained in simple English *and* shown in real sentences and dialogues —
  plus targeted drills. Not a wall of rules.
- **Functionality.** Grammar points organised by CEFR level and topic (tenses,
  articles, conditionals…); each point: plain-English explanation → 5+
  in-context examples → common mistakes → 2–3 linked lessons and drills;
  two-way links (lesson grammar sections → school page, school page → lessons);
  search; "my weak points" view driven by the learner's real errors (F15);
  revision drills assignable from a grammar point.
- **Users.** Grace (P3, primary), Min-Jun (P4), Ana (P5), Samir (P2).
- **Dependencies.** Curriculum grammar data (Live, extended to standalone
  articles); error data from ExerciseAttempt (Live) for weak-point views; CMS
  (F18) for authoring at scale.
- **Acceptance criteria.**
  - Given a grammar point page, when rendered, then it contains at least 5
    in-context example sentences and links to ≥ 1 lesson that teaches it.
  - Given a learner with ≥ 10 recorded errors on a grammar topic, when opening
    "my weak points", then that topic appears with a one-click drill.
  - Grammar search returns relevant points for plain-English queries
    ("why i went vs i have went") via keyword/topic synonyms (v1; semantic
    search may come with AI Tutor, R3).

### F07 · Sentence laboratory

**Academy loop:** Practice · Assess · **Status:** Planned (R2) · **Priority:** P1

- **Purpose.** The sentence gym: deliberate practice for sentence construction
  — the bridge between knowing words and communicating ideas.
- **Functionality.** Exercise families: pattern drills (substitution tables),
  transformation (affirmative → negative → question), expansion (add adverb,
  connect clauses), error correction (fix the broken sentence — targets
  fossilised errors), word-order building (extends Live `order` type),
  dictation-from-audio (listen then build). Difficulty adapts by level and
  learner ability mix; every attempt feeds the ability model and revision.
- **Users.** Grace (P3, primary), Min-Jun (P4), Farida (P1).
- **Dependencies.** Sentence exercise data model; grading via existing
  text-matching (Live); ability model (FR-CURR-08).
- **Acceptance criteria.**
  - Given a transformation task, when the learner builds the target sentence,
    then grading is punctuation/case-tolerant and explains the rule on error.
  - Given 3 consecutive correct attempts on a pattern, when the engine selects
    the next item, then difficulty increases (adaptive step-up).
  - Error-correction items used in drills are drawn from the learner's real
    error distribution where sufficient data exists.

### F08 · Vocabulary builder

**Academy loop:** Teach · Revise · **Status:** Partial (cards + strength Live) · **Priority:** P1

- **Purpose.** The learner's word bank: every word encountered, its strength,
  and what to review — vocabulary made visible and durable.
- **Functionality.** Vocab cards in lessons (Live); per-word strength 0–5
  updated by real answers (Live); practice quizzes weakest-first (Live).
  Planned: standalone word-bank browser (by unit/level/strength), search,
  example sentences with audio, "learned vs learning vs review-due" summary,
  strength history, ability-model integration, spaced-revision scheduling
  (F15).
- **Users.** All learners; primary for Farida (P1) and Ana (P5, academic
  vocabulary).
- **Dependencies.** VocabularyProgress data (Live); TTS for word audio (Live);
  revision scheduler (F15, R1).
- **Acceptance criteria.**
  - Given the word bank, when opened, then every word shows term, meaning,
    example, source lesson and current strength.
  - Given a word at strength 5, when the learner answers wrong in review, then
    strength drops and the word re-enters the review queue (Live behaviour,
    exposed in UI).
  - Word list virtualises smoothly at 500+ words (performance gate, §7).

### F09 · Reading room

**Academy loop:** Teach · Practice · **Status:** Planned (R2; passages Live inside lessons) · **Priority:** P1

- **Purpose.** A graded reading library that builds reading stamina — from A1
  signs and notes to B2+ articles — with comprehension checks and read-along
  audio.
- **Functionality.** Library organised by level and topic (daily life, work,
  travel, academic); each text: graded length by level, comprehension
  questions (reuse mcq/fill), read-along TTS highlighting, new-word tap
  (definition + add to word bank); estimated reading time; progress tracking
  (texts read); academic corner for Ana (B2+).
- **Users.** Ana (P5, primary), Felix (P8), Farida (P1, short texts).
- **Dependencies.** Passage content model (Live, extended); TTS (Live); word
  bank integration (F08); content pipeline (CMS at scale, F18).
- **Acceptance criteria.**
  - Given an A1 text, when displayed, then sentence length and vocabulary are
    within A1 graded-reader limits (content gate, test-enforced).
  - Given any text, when a learner taps an underlined word, then a definition
    in level-appropriate English appears with an option to review it later.
  - Comprehension score feeds reading-ability tracking, not lesson XP (honest
    separation: reading room is practice).

### F10 · Listening lab

**Academy loop:** Teach · Practice · **Status:** Partial (dialogue player + listen exercises Live) · **Priority:** P1

- **Purpose.** A dedicated listening gym: graded audio from slow-and-clear to
  natural-speed, with deliberate-listening tools.
- **Functionality.** In lessons (Live): dialogue line-by-line player, two
  voices, slow replay, listen exercises. Planned standalone lab: audio library
  by level/speed; modes — listen & choose, listen & type (dictation), listen &
  build (sentence reconstruction); adjustable playback speed; per-line replay;
  transcripts reveal-on-demand (never before answering); workplace scenarios
  for Priya/Ibrahim; lecture-style extended audio for Ana (B2+).
- **Users.** Samir (P2, primary), Priya (P7), Ibrahim (P6), Ana (P5), Felix (P8).
- **Dependencies.** TTS (Live); dictation grading via text matching (Live);
  ability model; content pipeline.
- **Acceptance criteria.**
  - Given a dictation item, when the learner types what they hear, then grading
    is case/punctuation-tolerant and near-misses get specific feedback
    ("missing final -s").
  - Given any listening item, when the transcript is available, then it stays
    hidden until the answer is submitted or "give up" is pressed.
  - Audio plays without external services or keys (Web Speech API, Live
    constraint preserved).

### F11 · Speaking lab

**Academy loop:** Practice · Assess · **Status:** Partial (speak exercises + recognition Live) · **Priority:** P1

- **Purpose.** A safe, private space to build speaking confidence — repetition,
  shadowing, pronunciation work and scenario rehearsal.
- **Functionality.** In lessons (Live): speak exercises with SpeechRecognition
  similarity grading + self-assessment fallback. Planned standalone lab:
  shadowing mode (repeat after the model, compare similarity score);
  pronunciation drills (minimal pairs, problematic sounds by first-language
  group); scenario practice (order coffee, job interview, doctor visit — with
  AI role-play, R3); recording playback ("hear yourself"); speaking streak
  minutes; recognition-unavailable fallback always present.
- **Users.** Samir (P2, primary), Farida (P1), Ibrahim (P6), Felix (P8).
- **Dependencies.** SpeechRecognition + similarity scoring (Live); AI Tutor for
  role-play (F13, R3); scenario content.
- **Acceptance criteria.**
  - Given a browser without SpeechRecognition, when the learner opens any
    speaking task, then a self-assessment fallback keeps the task completable
    (Live behaviour preserved everywhere).
  - Given a shadowing attempt, when scored ≥ threshold, then the learner sees
    the score and the misrecognised words highlighted.
  - Speaking practice never reduces accuracy metrics or gates lesson XP
    (honest-progress rule, Live).

### F12 · Writing studio

**Academy loop:** Practice · Assess · **Status:** Planned (R2) · **Priority:** P1

- **Purpose.** Take learners from writing words to writing paragraphs and
  short essays, with scaffolded tasks and layered feedback.
- **Functionality.** Three ladders: **scaffolded** (guided sentence writing —
  model + prompts), **guided** (short paragraph with structure hints and word
  bank), **free** (task prompt: email, message, opinion paragraph, essay).
  Feedback layers: (1) server checks (length, required elements, target
  vocabulary used), (2) rubric self-assessment checklist, (3) AI feedback
  (tone, clarity, grammar patterns — informative, R3), (4) optionally
  resubmit-and-compare. Level-appropriate task types (A1 messages → B2 essays);
  writing history with growth view.
- **Users.** Min-Jun (P4, primary), Grace (P3), Priya (P7, emails), Ana (P5, essays).
- **Dependencies.** `write` exercise type (FR-LES-07); text-matching checks
  (Live); AI feedback service (F13, R3); ability model.
- **Acceptance criteria.**
  - Given a scaffolded task, when submitted, then server checks pass/fail each
    requirement with actionable messages (no bare "incorrect").
  - Given a free-writing task, when submitted, then it is saved to writing
    history and XP reflects completion + requirements met — **AI assessment
    alone never awards XP** (honest-progress rule).
  - Given a writing submission, when AI feedback is unavailable or low
    confidence, then the rubric self-assessment path remains fully usable.
  - Writing tasks include realistic genres: message, email, review, opinion
    paragraph, essay (by level).

### F13 · AI tutor

**Academy loop:** Guide · Practice · Assess (informative only) · **Status:** Planned (R3) · **Priority:** P1

- **Purpose.** The always-available tutor: ask anything, practise conversation,
  get writing feedback, rehearse interviews — the "support" in the academy
  promise.
- **Functionality.** Chat interface (text; voice round-trip where speech APIs
  allow); modes: **ask** (grammar/vocab questions, grounded in TalkSy
  curriculum content where possible), **practise** (role-play conversations at
  the learner's level, gentle correction), **writing coach** (feedback on
  Writing Studio drafts), **interview simulator** (question → answer →
  structured feedback). Conversation difficulty adapts to learner level;
  session history; escalate-to-curriculum links ("this is taught in lesson
  a1-2-3"); per-tier daily quotas (§8).
- **Users.** All personas; primary for Samir (P2), Grace (P3), Min-Jun (P4),
  Ibrahim (P6).
- **Dependencies.** Server-side LLM access (z-ai sdk, server-only — §10
  constraints); curriculum content index for grounding; entitlement/quotas
  (§8); conversation content safety filters.
- **Acceptance criteria.**
  - Given any AI interaction, when the learner earns progress, then XP comes
    only from server graders — the AI can suggest, never award (enforced in
    code review + tests).
  - Given a grammar question covered by Grammar School, when the tutor answers,
    then the answer includes a link to the curated page (grounding).
  - Given quota exhaustion, when the learner sends another message, then a
    clear message explains the limit and resets daily — no silent failures.
  - Tutor replies at the learner's level (A1 questions get A1-level answers —
    simple words, short sentences).

### F14 · Assessments

**Academy loop:** Assess · Guide · **Status:** Planned (R1) · **Priority:** P0

- **Purpose.** Measure real ability honestly: place learners correctly, check
  understanding, certify growth — the assessment backbone of an academy.
- **Functionality.** Four assessment types: (1) **diagnostic placement** —
  adaptive ~24-item test (grammar/vocab/listening) across A1→B1 bands, places
  learner at the first unit where accuracy < 70%; (2) **unit checkpoints** —
  short quizzes gating unit completion (mastery-based); (3) **level exit
  tests** — can-do aligned tests certifying level completion (feeds §9 metric
  10); (4) **progress assessments** — optional periodic re-measurement showing
  growth. Server-scored; per-item explanations after submission; results feed
  the roadmap, revision system and progress centre.
- **Users.** All learners; critical for Ana (P5) and Felix (P8); placement
  protects Samir (P2) from re-doing A1.
- **Dependencies.** Assessment item bank (content pipeline); roadmap unlock
  logic (F04); ability model; PlacementAttempt data model (new).
- **Acceptance criteria.**
  - Placement never marks lessons complete; skipped lessons become
    unlocked-but-not-completed, reviewable forever.
  - Given synthetic ability profiles, when placement runs, then the assigned
    entry unit matches the profile's true band (tested across ≥ 5 profiles).
  - Given an exit test, when passed at threshold, then the level shows
    "completed with certificate" and the next level's first unit unlocks.
  - All assessment scoring is server-side; item explanations show after
    submission only.

### F15 · Revision system

**Academy loop:** Revise · **Status:** Partial (weakest-first quizzes Live) · **Priority:** P0**

- **Purpose.** Make learning durable: schedule reviews at the edge of
  forgetting, interleaved, weakest-first — the anti-plateau engine.
- **Functionality.** Live: vocabulary strength (Leitner 0–5), practice quizzes
  targeting weakest words first. Planned: SM-2-style spaced intervals per word
  and per grammar point; "review due" queue surfaced on dashboard; interleaved
  review sessions (words + grammar + construction mixed); revision reminders
  (opt-in); error-driven resurfacing (items answered wrong return sooner);
  retention measurement powering §9 metric 9.
- **Users.** All learners — the retention engine for everyone, especially
  Grace (fossilised errors) and Felix (plateau).
- **Dependencies.** VocabularyProgress + ExerciseAttempt data (Live);
  scheduler; grammar-point mapping (F06); notifications (opt-in only).
- **Acceptance criteria.**
  - Given a word last reviewed n days ago with strength s, when the scheduler
    picks review items, then the interval follows the SM-2-style table
    (deterministic, testable) — weakest and most-overdue first.
  - Given a review session, when an item is answered correctly twice in a row,
    then its interval extends (and vice versa).
  - No revision feature ever gates access to new lessons — revision is woven
    into the path, not a toll booth.

### F16 · Progress centre

**Academy loop:** Guide · Assess · **Status:** Partial (dashboard stats Live) · **Priority:** P1

- **Purpose.** Answer "what do I actually know?" with honest, per-ability,
  longitudinal data — the evidence room of the academy.
- **Functionality.** Live: XP, streak, accuracy, weekly activity, level
  progress, daily goal. Planned: 8-ability radar and per-ability trend lines;
  vocabulary retention summary (learned/learning/due); assessment history with
  score progression; writing portfolio growth; speaking-minutes (practice
  volume, clearly labelled practice); per-exercise-type accuracy; goal-setting
  recommendations from real pace; exportable progress summary.
- **Users.** Ana (P5, primary), Priya (P7), Felix (P8) — the data-motivated.
- **Dependencies.** Progress engine (Live); ability model (R1); assessments
  (F14); analytics events (F19).
- **Acceptance criteria.**
  - Every chart carries a plain-English caption of what the number means and
    how it is computed (honesty rule).
  - Given 30 days of activity, when the progress centre loads, then ability
    trends show real deltas (e.g., "grammar accuracy +9% this month").
  - Speaking minutes are labelled as practice volume and never blended into
    accuracy (honest-progress rule, Live).

### F17 · Achievement system

**Academy loop:** Guide (motivation) · **Status:** Planned (R3) · **Priority:** P2**

- **Purpose.** Mark real milestones with real evidence — competence made
  visible; no cosmetic gamification.
- **Functionality.** Evidence-based achievements only: curriculum milestones
  ("first lesson", "A1 complete"), vocabulary depth ("100 words at strength
  ≥ 3"), consistency ("7-day streak"), production courage ("first spoken
  answer", "10 minutes of speaking practice"), assessment wins ("placement
  done", "level certified"); achievement page with evidence links (which
  lesson/answer earned it); shareable progress card (opt-in, contains real
  stats); streak-freeze (1/week, earned not bought, R5 engagement stage).
- **Users.** All; motivational anchors for Farida (P1) and Priya (P7).
- **Dependencies.** Progress engine + attempts data (Live); achievements
  evaluation job (server-side, deterministic).
- **Acceptance criteria.**
  - Every achievement is derivable from recorded user events — achievements
    computed server-side, impossible to fake via client.
  - No achievement (or lack of one) ever gates access to learning content.
  - Achievements never use variable-reward/randomised loot mechanics.

### F18 · Administrative CMS

**Academy loop:** internal (content operations) · **Status:** Planned (R5) · **Priority:** P2**

- **Purpose.** Let the content team author, review, version and publish
  curriculum and library content safely — without engineers in the loop.
- **Functionality.** Authoring for lessons, grammar articles, reading texts,
  assessment items (structured forms over the existing typed content model);
  draft → review → publish workflow with version history and rollback; content
  preview against the real lesson player; integrity gates run pre-publish
  (same rules as tests); user management (roles: admin, author, reviewer);
  feature flags and staged rollout of new levels; moderation queue for
  user-visible content flags.
- **Users.** Admins, content authors, reviewers (internal team).
- **Dependencies.** Content data model (Live — content-as-code today; CMS
  writes to the same shape); auth roles (extend Live auth); publishing
  pipeline.
- **Acceptance criteria.**
  - Given a draft lesson, when published, then it passes all curriculum
    integrity gates — publish is blocked on any gate failure.
  - Given published content, when rolled back, then learners' progress data
    (by stable ids) remains intact (id-stability rule, Live).
  - Authors cannot publish without independent review (two-person rule).

### F19 · Analytics

**Academy loop:** internal (product intelligence) · **Status:** Planned (R5) · **Priority:** P2**

- **Purpose.** Instrument the academy honestly: learning outcomes, funnels,
  content difficulty calibration and the §9 success metrics — privacy-first.
- **Functionality.** Event pipeline (server-side events from real actions —
  lesson completed, exercise answered, speaking attempt, submission); §9
  metric dashboards (onboarding funnel, retention cohorts, per-exercise-type
  accuracy, content item difficulty stats — p-values per item for calibration,
  AI tutor usage vs learning outcomes); cohort analysis; no session-duration
  success reporting (§9 anti-metrics); data export for analysis; admin-only
  access.
- **Users.** Product, content and engineering teams (internal).
- **Dependencies.** Event schema design; ExerciseAttempt/content data (Live);
  privacy review (§7).
- **Acceptance criteria.**
  - Given the §9 metric definitions, when analytics loads, then each metric is
    computed exactly as specified in §9 (single source of truth).
  - Analytics never records raw answer text, audio, or free-writing content —
    events carry ids, types, outcomes and counts only.
  - Item difficulty report flags any exercise with first-attempt accuracy
    < 30% or > 95% for content review (miscalibration detector).

---

## 5. User stories

Key stories by epic. Acceptance criteria live in the §4 feature specs; story
IDs are referenced by sprint planning. (P-numbers refer to §2 personas.)

### Epic A · Onboarding & guidance

| ID | Story | Persona | Priority |
| --- | --- | --- | --- |
| US-101 | As a new learner, I want a diagnostic that finds my level, so that I don't waste time on material I already know. | Samir, Ana | P0 |
| US-102 | As a new learner, I want to skip the diagnostic, so that I can start learning immediately and take it later. | Farida | P0 |
| US-103 | As a learner, I want to always see my single next lesson, so that I never wonder what to study. | All | P0 |
| US-104 | As a visitor, I want to sample a lesson without registering, so that I can judge the quality first. | All | P1 |
| US-105 | As a learner, I want my dashboard to show what's due for review, so that revisiting is one tap away. | Grace, Felix | P1 |

### Epic B · Core learning loop

| ID | Story | Persona | Priority |
| --- | --- | --- | --- |
| US-201 | As a learner, I want every lesson to mix reading, listening, speaking and writing, so that I build all abilities together. | All | P0 |
| US-202 | As a learner, I want wrong answers explained, so that mistakes become lessons. | All | P0 |
| US-203 | As a learner, I want to retry exercises freely, so that I can practice to mastery — while XP stays honest. | All | P0 |
| US-204 | As a learner, I want to hear any sentence spoken aloud, so that I connect spelling and sound. | Farida, Samir | P0 |
| US-205 | As a learner, I want slow replay on audio, so that fast speech doesn't exclude me. | Farida | P1 |
| US-206 | As a learner, I want unit checkpoints, so that I know I've truly mastered a unit before moving on. | Ana, Grace | P1 |
| US-207 | As a learner, I want to download my progress summary, so that I can show a teacher or employer what I've done. | Ana, Priya | P2 |

### Epic C · Skills labs

| ID | Story | Persona | Priority |
| --- | --- | --- | --- |
| US-301 | As a speaker-anxious learner, I want private speaking drills with similarity feedback, so that I can practise without judgment. | Samir, Farida | P1 |
| US-302 | As a learner, I want shadowing exercises where I compare my speech to a model, so that I hear my own progress. | Samir, Felix | P1 |
| US-303 | As a learner with weak writing, I want scaffolded writing tasks, so that I'm never staring at a blank page. | Min-Jun, Farida | P1 |
| US-304 | As a professional, I want email-writing practice with tone feedback, so that my work messages land well. | Priya, Min-Jun | P1 |
| US-305 | As a learner, I want graded reading with tap-to-define words, so that reading builds vocabulary painlessly. | Ana, Farida | P1 |
| US-306 | As a learner, I want dictation exercises, so that my ears and spelling improve together. | Min-Jun, Grace | P1 |
| US-307 | As a grammar-weak learner, I want drills that fix my specific fossilised errors, so that practice targets my gaps. | Grace | P1 |
| US-308 | As a learner, I want a browsable grammar reference linked to my lessons, so that I can look things up and return to my path. | Grace, Ana | P1 |

### Epic D · Assessment & revision

| ID | Story | Persona | Priority |
| --- | --- | --- | --- |
| US-401 | As a learner, I want spaced reviews of my weakest words, so that I don't forget what I learned. | All | P0 |
| US-402 | As a plateaued learner, I want progress re-assessments, so that I can see real growth and trust the path. | Felix, Ana | P1 |
| US-403 | As a learner, I want level exit tests, so that finishing a level means something provable. | Ana, Felix | P1 |
| US-404 | As a learner, I want assessment results to adjust my path, so that the academy adapts to me. | All | P1 |

### Epic E · AI support

| ID | Story | Persona | Priority |
| --- | --- | --- | --- |
| US-501 | As a learner, I want to ask grammar questions any time, so that confusion doesn't wait for tomorrow. | Grace, Samir | P1 |
| US-502 | As a hesitant speaker, I want conversation practice with a patient AI partner, so that I can build fluency privately. | Samir, Ibrahim | P1 |
| US-503 | As a job seeker, I want interview simulations with structured feedback, so that the real interview isn't my first rehearsal. | Ibrahim | P1 |
| US-504 | As a writer, I want feedback on my drafts, so that I improve from my own sentences. | Min-Jun, Priya | P1 |
| US-505 | As a free learner, I want a clear daily AI quota, so that I know exactly what's free and what isn't. | All | P1 |

### Epic F · Progress & motivation

| ID | Story | Persona | Priority |
| --- | --- | --- | --- |
| US-601 | As a learner, I want per-ability progress tracking, so that I know my strengths and gaps honestly. | Ana, Grace | P1 |
| US-602 | As a learner, I want milestones that reflect real achievement, so that motivation is earned, not gamed. | Farida, Priya | P2 |
| US-603 | As a learner, I want a daily goal I set myself, so that study fits my life. | Priya, Farida | P0 (Live) |
| US-604 | As a returning learner, I want a gentle re-entry (streak preserved fairly, clear next step), so that a missed day doesn't end my journey. | All | P1 |

### Epic G · Business & access

| ID | Story | Persona | Priority |
| --- | --- | --- | --- |
| US-701 | As a beginner, I want the full beginner path free forever, so that cost never blocks my first year of English. | Farida | P0 (guarantee) |
| US-702 | As a committed learner, I want a premium tier with deeper practice and AI, so that I can invest in faster progress. | Ana, Priya | P1 |
| US-703 | As an outcome-focused learner, I want to buy a specific advanced course (interviews, academic English), so that I pay for my exact goal. | Ibrahim, Ana | P1 |
| US-704 | As a subscriber, I want to manage/cancel my subscription self-serve, so that I stay in control. | All paid | P1 |

### Epic H · Operations

| ID | Story | Persona | Priority |
| --- | --- | --- | --- |
| US-801 | As a content author, I want a review-and-publish workflow with integrity gates, so that bad content can't reach learners. | Internal | P2 |
| US-802 | As a product owner, I want honest success-metric dashboards, so that decisions follow learning outcomes, not vanity numbers. | Internal | P2 |
| US-803 | As an admin, I want feature flags per level/feature, so that rollout is controlled and reversible. | Internal | P2 |

---

## 6. Functional requirements

Grouped by domain. Status reflects the platform at Stage 2. Priorities feed §11.

### 6.1 Accounts & access (FR-AUTH)

| ID | Requirement | Priority | Status |
| --- | --- | --- | --- |
| FR-AUTH-01 | Email + password registration, zod validation shared client/server | P0 | Live |
| FR-AUTH-02 | Passwords hashed with scrypt; constant-time verification | P0 | Live |
| FR-AUTH-03 | Opaque DB-persisted sessions; httpOnly cookie; 30-day expiry; server-side invalidation on sign-out | P0 | Live |
| FR-AUTH-04 | Duplicate email registration → 409 with friendly message | P0 | Live |
| FR-AUTH-05 | Password change (requires current password); account deletion with cascading data removal | P0 | Live |
| FR-AUTH-06 | Email verification + password reset (requires mail transport) | P1 | Planned |
| FR-AUTH-07 | Rate limiting on auth endpoints (brute-force protection) | P1 | Planned |
| FR-AUTH-08 | Role model extension: `learner` (default), `author`, `reviewer`, `admin` (for CMS, R5) | P2 | Planned |

### 6.2 Curriculum & content (FR-CURR)

| ID | Requirement | Priority | Status |
| --- | --- | --- | --- |
| FR-CURR-01 | CEFR A1–C1 ladder; levels honestly marked available / in-development; no fake content | P0 | Live (A1, A2) |
| FR-CURR-02 | Sequential lesson unlocking; completed lessons reviewable forever; server-enforced | P0 | Live |
| FR-CURR-03 | Lesson anatomy per blueprint (vocab, dialogue, grammar, passage, ≥ 7 exercises, listen + speak mandatory) — test-enforced | P0 | Live |
| FR-CURR-04 | Stable content ids (lessonSlug, exerciseId, wordId) — never renamed (DB keys) | P0 | Live |
| FR-CURR-05 | B1 curriculum: 6 units × 3 lessons, original content | P0 | Planned (R1) |
| FR-CURR-06 | B2 curriculum: 6 units × 3 lessons | P1 | Planned (R4) |
| FR-CURR-07 | C1 curriculum: 6 units × 3 lessons | P2 | Planned (R6) |
| FR-CURR-08 | Eight-ability tagging on lessons and exercises (extends the 4-skill model); A1/A2 content back-filled | P0 | Planned (R1) |
| FR-CURR-09 | Premium content variants + advanced courses modelled in the content registry with tier metadata | P1 | Planned (R4) |

### 6.3 Lesson player & exercises (FR-LES)

| ID | Requirement | Priority | Status |
| --- | --- | --- | --- |
| FR-LES-01 | Seven-beat lesson arc; 8–12 minutes; progress indicator; exit/resume | P0 | Live |
| FR-LES-02 | Exercise types: mcq, fill, order, match, listen, speak | P0 | Live |
| FR-LES-03 | `write` exercise type (scaffolded/guided tasks inside lessons; ties to F12) | P1 | Planned (R2) |
| FR-LES-04 | Immediate correctness + explanation feedback (≤ 1s) on gradable types | P0 | Live |
| FR-LES-05 | Forgiving grading: case/punctuation-tolerant, typographic apostrophes, article tolerance | P0 | Live |
| FR-LES-06 | Server-authoritative XP: +10 per exercise (first correct only), +20 lesson bonus (once); accuracy excludes speaking | P0 | Live |
| FR-LES-07 | Free retry on any exercise without XP farming | P0 | Live |
| FR-LES-08 | Dialogue player: two voices, per-line replay, slow mode | P0 | Live |
| FR-LES-09 | Recognition-unavailable fallback for all speaking exercises | P0 | Live |

### 6.4 Skills labs (FR-LAB)

| ID | Requirement | Priority | Status |
| --- | --- | --- | --- |
| FR-LAB-01 | Grammar School: level/topic-indexed points; ≥ 5 in-context examples; linked lessons; search | P1 | Planned (R2) |
| FR-LAB-02 | Grammar School "my weak points" from real error data; one-click drills | P1 | Planned (R2) |
| FR-LAB-03 | Sentence Lab: pattern, transformation, expansion, error-correction, order, dictation families | P1 | Planned (R2) |
| FR-LAB-04 | Sentence Lab adaptive difficulty (step-up after 3 correct; step-down after 2 wrong) | P1 | Planned (R2) |
| FR-LAB-05 | Vocabulary Builder: word bank browser with strength, search, audio, source links; virtualised ≥ 500 words | P1 | Planned (R2) |
| FR-LAB-06 | Reading Room: graded library by level/topic; comprehension checks; read-along TTS; tap-to-define; word-bank integration | P1 | Planned (R2) |
| FR-LAB-07 | Reading Room academic corner (B2+ extended texts) | P1 | Planned (R4) |
| FR-LAB-08 | Listening Lab: standalone graded audio library; choose/type/build modes; speed control; transcript reveal-after-answer | P1 | Planned (R2) |
| FR-LAB-09 | Speaking Lab: shadowing with similarity scores + misrecognised-word highlight; pronunciation drills (minimal pairs); scenario practice; recording playback | P1 | Planned (R2/R3) |
| FR-LAB-10 | Writing Studio: scaffolded → guided → free ladders by level; realistic genres (message → essay); server requirement checks; rubric self-assessment; AI feedback (informative); writing history | P1 | Planned (R2) |

### 6.5 AI tutor (FR-AIT)

| ID | Requirement | Priority | Status |
| --- | --- | --- | --- |
| FR-AIT-01 | Modes: ask, practise (role-play), writing coach, interview simulator | P1 | Planned (R3) |
| FR-AIT-02 | Server-side only execution (SDK never ships to client) | P0 | Planned |
| FR-AIT-03 | Curriculum grounding: answers link to Grammar School / lessons where applicable | P1 | Planned (R3) |
| FR-AIT-04 | Level-appropriate responses (answer at the learner's CEFR level) | P1 | Planned (R3) |
| FR-AIT-05 | Honest-progress guardrail: AI never awards XP/completion — server graders only | P0 (rule) | Enforced in design |
| FR-AIT-06 | Per-tier daily quotas, server-enforced, clear exhaustion messaging, daily reset | P1 | Planned (R3) |
| FR-AIT-07 | Content safety filters + low-confidence fallback to curated content | P1 | Planned (R3) |
| FR-AIT-08 | Session history retained per learner; deletable with account | P1 | Planned (R3) |

### 6.6 Assessment (FR-ASM)

| ID | Requirement | Priority | Status |
| --- | --- | --- | --- |
| FR-ASM-01 | Diagnostic placement: adaptive ~24 items across A1→B1; entry = first unit with accuracy < 70%; skippable | P0 | Planned (R1) |
| FR-ASM-02 | Placement unlocks-but-never-completes; skipped lessons reviewable | P0 | Planned (R1) |
| FR-ASM-03 | Unit checkpoints: mastery quizzes gating unit completion | P1 | Planned (R1) |
| FR-ASM-04 | Level exit tests: can-do aligned; certification on pass; next-level unlock | P1 | Planned (R1) |
| FR-ASM-05 | Progress assessments: periodic re-measurement; growth deltas in progress centre | P1 | Planned (R3) |
| FR-ASM-06 | All scoring server-side; per-item explanations post-submission only | P0 | Planned (R1) |
| FR-ASM-07 | Assessment item bank versioned like curriculum; calibration via analytics (F19) | P2 | Planned (R5) |

### 6.7 Revision (FR-REV)

| ID | Requirement | Priority | Status |
| --- | --- | --- | --- |
| FR-REV-01 | Vocabulary strength 0–5 updated by every real answer (+1 correct / −1 wrong, clamped) | P0 | Live |
| FR-REV-02 | Practice quizzes target weakest words first (server-ordered) | P0 | Live |
| FR-REV-03 | SM-2-style spaced scheduling per word and grammar point; deterministic and testable | P0 | Planned (R1) |
| FR-REV-04 | Review-due queue surfaced on dashboard; interleaved review sessions | P1 | Planned (R3) |
| FR-REV-05 | Error-driven resurfacing: wrong answers shorten intervals | P1 | Planned (R3) |
| FR-REV-06 | Revision never gates new-lesson access | P0 (rule) | Live (by design) |

### 6.8 Progress & motivation (FR-PRG / FR-ACH)

| ID | Requirement | Priority | Status |
| --- | --- | --- | --- |
| FR-PRG-01 | Dashboard: streak (≥ 1 lesson or ≥ 3 exercises/day), daily goal ring, weekly XP, level progress — all server-derived | P0 | Live |
| FR-PRG-02 | 8-ability radar + per-ability trends in progress centre | P1 | Planned (R3) |
| FR-PRG-03 | Assessment history + score progression; writing portfolio; per-exercise-type accuracy | P1 | Planned (R3) |
| FR-PRG-04 | Exportable progress summary (learner-owned data) | P2 | Planned (R5) |
| FR-ACH-01 | Evidence-based achievements only; server-computed; never content-gating; no loot mechanics | P2 | Planned (R3) |
| FR-ACH-02 | Streak freeze: 1/week, earned by activity (not purchasable) | P2 | Planned (R5) |

### 6.9 Business & entitlements (FR-BIZ)

| ID | Requirement | Priority | Status |
| --- | --- | --- | --- |
| FR-BIZ-01 | Tier model: Free · Premium (individual) · Course purchases · Institutional (future) — entitlements enforced server-side only | P0 (R4) | Planned |
| FR-BIZ-02 | Free-forever guarantee: full A1 + A2 core path, practice, vocab, grammar school, basic progress — never paywalled | P0 (guarantee) | Live in effect |
| FR-BIZ-03 | Premium subscription: premium lesson variants, advanced labs depth, higher AI quota, advanced analytics | P1 | Planned (R4) |
| FR-BIZ-04 | Advanced courses (one-time purchase): Interview English, Academic English, Business English — outcome-oriented bundles | P1 | Planned (R4+) |
| FR-BIZ-05 | AI quotas per tier (§8.3); enforcement + clear messaging | P1 | Planned (R3) |
| FR-BIZ-06 | Payment provider integration + webhooks → entitlement updates (provider decision at R4; not available in sandbox) | P1 | Planned (R4) |
| FR-BIZ-07 | Self-serve subscription management (change/cancel; access continues to paid-for period end) | P1 | Planned (R4) |
| FR-BIZ-08 | Institutional accounts: seat management, teacher dashboard, assignments, cohort analytics, SSO — design-ready, build-gated | P2 | Planned (R6) |

### 6.10 Platform & operations (FR-PLT)

| ID | Requirement | Priority | Status |
| --- | --- | --- | --- |
| FR-PLT-01 | Single visible route with hash navigation (environment constraint); production deployment lifts it for marketing routes | P0 | Live (constraint) |
| FR-PLT-02 | CMS: draft → review → publish; integrity gates pre-publish; version history + rollback; two-person publish rule | P2 | Planned (R5) |
| FR-PLT-03 | Analytics event pipeline (server-side, ids/outcomes only) + §9 metric dashboards + item calibration reports | P2 | Planned (R5) |
| FR-PLT-04 | Feature flags for staged rollout of levels/features | P2 | Planned (R4) |
| FR-PLT-05 | Data export + full deletion (GDPR): learner-owned data out; account deletion cascades everything (already Live) | P1 | Partial (deletion Live; export Planned R5) |
| FR-PLT-06 | English-medium product; UI copy in simple English; code stays i18n-ready (no hardcoded concatenations) | P1 | Live (discipline) |

---

## 7. Non-functional requirements

| Domain | ID | Requirement | Target / gate |
| --- | --- | --- | --- |
| Performance | NFR-01 | API p95 latency (read endpoints, warm) | < 300 ms (baseline measured at R1) |
| Performance | NFR-02 | First meaningful paint on 3G-fast, dashboard | < 2 s; skeletons while loading |
| Performance | NFR-03 | Word-bank list at 500+ items | smooth virtualised scrolling (no long-frame > 100 ms) |
| Availability | NFR-04 | Uptime target (production) | 99.5% monthly; graceful degradation when speech APIs unavailable |
| Security | NFR-05 | OWASP baseline: parameterised queries (Prisma), zod validation on all inputs, security headers, secrets server-side only, no PII in logs | Continuous; audit per stage |
| Security | NFR-06 | Auth hardening: rate limiting (FR-AUTH-07), session pruning, secure cookie flags | R1 |
| Privacy | NFR-07 | GDPR posture: minimal PII (email, name), data export, full cascade deletion, no data selling, analytics events carry ids/outcomes only | Export by R5; deletion Live |
| Privacy | NFR-08 | Speech audio never leaves the browser (Web Speech API); AI conversations sent only on explicit user action | Live / by design |
| Accessibility | NFR-09 | WCAG 2.1 AA: keyboard operability, visible focus, aria labels on icon controls, status regions, ≥ 44 px touch targets, color never sole meaning-carrier | Audit every stage (Live discipline) |
| Compatibility | NFR-10 | Browser matrix: Chrome/Edge full (TTS + recognition); Safari TTS + recognition where supported; Firefox TTS with self-assessment fallback | Fallback mandatory everywhere |
| Responsive | NFR-11 | 375 px → desktop; no horizontal overflow; sticky-footer discipline | Verified per stage |
| Observability | NFR-12 | Structured logging (Live); error boundaries (Live); metric dashboards (R5) | Continuous |
| Maintainability | NFR-13 | TypeScript strict, zero lint warnings, content integrity tests green — enforced at every stage checkpoint | Live (Stage 2 gates) |
| Scalability | NFR-14 | PostgreSQL-portable schema (no SQLite-isms); migration rehearsal before institutional scale | Config-only switch (ADR-6) |
| Cost control | NFR-15 | AI spend caps: per-user daily quotas + global budget alerting; free tier bounded by design | R3 |
| Content integrity | NFR-16 | Curriculum integrity gates test-enforced; publish blocked on failure (CMS) | Live (tests) / R5 (CMS) |

---

## 8. Business and access model

### 8.1 Architecture principles

1. **The free guarantee is structural, not promotional.** Basic beginner
   learning (full A1 + A2 core path) is free forever. No paywall, no trial
   timer, no "free lesson of the day" mechanics on beginner content.
2. **Monetisation sells depth and outcomes, not the fundamentals.** Premium
   variants and advanced courses target learners with concrete goals
   (interviews, academia, career) — personas P5–P8 — who receive clear value
   for money.
3. **Entitlements are server-side.** The client renders state; the server
   gates. No client-trusted premium checks, ever.
4. **AI is metered.** AI support is genuinely useful and genuinely costly;
   quotas keep the free tier sustainable and the paid tier honest.

### 8.2 Tiers

| Tier | Price | Includes | Never includes |
| --- | --- | --- | --- |
| **Free** | €0 forever | Full A1 + A2 core curriculum; lesson player with all exercise types; practice quizzes + revision basics; vocabulary builder (core); grammar school reference; reading room (core texts); listening + speaking labs (browser-speech features); basic progress centre; achievements; small AI daily quota (§8.3) | — |
| **Premium** (individual subscription, monthly/annual) | set at R4 pricing study | Everything in Free; premium lesson variants (richer practice sets, extended dialogues); advanced lab content (lecture audio, academic texts, essay tasks); higher AI quota; advanced progress analytics; offline lesson packs | No paywall on core path; no ads; no data selling |
| **Advanced courses** (one-time purchase) | per course | Outcome-oriented bundles beyond the core path: Interview English (P6), Academic English / IELTS-track (P5), Business English (P7). Multi-lesson, scenario-heavy, certificate on completion | Required for basic learning — never |
| **Institutional** (future, R6 pilot) | per-seat licensing | Classroom accounts; teacher dashboard (assignments, progress review); cohort analytics; SSO; admin seat management | Individual-learner data exposure without consent |

### 8.3 AI usage limits (model)

| Tier | AI interactions / day | Rationale |
| --- | --- | --- |
| Free | ~10 (message-level, lab attempts excluded from count where they are core practice) | Meaningful daily help without unlimited cost exposure |
| Premium | ~100 (fair-use) | Effectively unbounded for serious study, bounded for cost safety |
| Institutional | Pooled per-seat quota + school-level cap | Predictable billing |

Quota rules: server-enforced; counts reset daily (UTC); exhaustion messages
state the reset time and the tier that raises it; quota state is visible
in-app (no silent throttling). Exact numbers are launch parameters, tuned
against real cost data at R3, then locked at R4 pricing.

### 8.4 Payment and entitlements (R4)

- Payment provider selected at R4 (not available in the current sandbox —
  see §10); integration via server-side checkout + webhooks → entitlement
  service updates.
- Entitlement model: `user → active entitlements[]` (tier, course ids, expiry);
  every gated API route checks entitlements server-side; client receives
  entitlement state via `/api/auth/me` payload for UI rendering only.
- Refunds/cancellations: access continues to period end; downloaded content
  remains accessible read-only.

### 8.5 Institutional & classroom (R6 pilot)

Design-ready from R4 (role model, cohort data structures), built at R6:
teacher dashboards (assign units, review progress), class codes for joining,
cohort analytics, SSO (school identity providers), seat administration. Pilot
with 1–3 partner schools/academies; revenue model per-seat annual licensing.

### 8.6 Conversion principles

- Upgrade prompts appear only in **context of advanced value** ("unlock
  lecture-length listening"), never inside the free beginner path.
- Free tier is never degraded to force conversion (no artificial friction).
- The pricing page leads with the free-forever guarantee (F01 AC).

---

## 9. Success metrics

**Governing principle: time on platform is not learning success.** No metric
below uses session duration as a success signal, and no OKR rewards raw
time-on-app. (The learner-facing daily goal in *minutes* is a self-set
commitment device — it is a feature, not a company KPI.) Targets are initial
hypotheses, calibrated after the first real cohorts (R1); each metric has an
owner and a review cadence.

| # | Metric | Definition (formula) | Source | Initial target | Cadence |
| --- | --- | --- | --- | --- | --- |
| 1 | **Onboarding completion** | % of registrations that complete profile + start first lesson within 24 h of registering | Auth + lesson events | ≥ 70% | weekly |
| 2 | **Diagnostic completion** | % of new learners who complete the placement diagnostic in their first session (of those offered) | Assessment events | ≥ 60% | weekly |
| 3 | **Lesson completion** | completed lessons ÷ started lessons, 7-day window per learner cohort | LessonCompletion | ≥ 55% | weekly |
| 4 | **Exercise accuracy** | first-attempt correct rate, tracked **per exercise type and level** (diagnostic band 70–85%; < 60% flags content too hard; > 95% flags too easy) | ExerciseAttempt | 70–85% band | weekly |
| 5 | **7-day retention** | % of first-active-day learners active again during days 6–8 | Activity events | ≥ 40% | weekly |
| 6 | **30-day retention** | % of first-active-day learners active during days 28–32 | Activity events | ≥ 20% | monthly |
| 7 | **Speaking participation** | % of active learners completing ≥ 1 speaking exercise or lab drill in a given active week | Speaking attempt events | ≥ 50% | weekly |
| 8 | **Writing submission frequency** | median writing submissions per active learner per month (Writing Studio + in-lesson write exercises) | Submission events | ≥ 4 | monthly |
| 9 | **Vocabulary retention** | % of words that reached strength ≥ 3 and are still ≥ 3 when tested 30 days later (via scheduled review performance) | VocabularyProgress + review events | ≥ 70% | monthly |
| 10 | **Assessment improvement** | median score gain between a learner's level-entry (placement band) and level exit test, in percentage points; secondary: movement across CEFR sub-bands | Assessment results | +15 pp or ≥ 1 sub-band per level | per cohort |

### 9.1 Anti-metrics (explicitly rejected)

Session duration, pages viewed, videos/audio played without answering, and
raw DAU are **diagnostics, never success metrics**. No dashboard presents
them as achievement, and no team OKR is built on them. Metrics 3, 4, 9 and 10
are the learning-truth core: if they rise while usage stays flat, TalkSy is
succeeding.

### 9.2 Guardrail metrics

- Free-tier learner lesson completion must not differ from paid by more than
  10 pp (free path quality guard, §8).
- AI quota exhaustion rate on free tier < 30% of active days (if learners
  constantly hit the wall, the quota is wrong — revisit §8.3).
- Assessment retake abandonment < 20% (exit tests must feel fair, not punishing).

---

## 10. Dependencies

### 10.1 Internal (feature dependencies)

| Depends on | Blocking | Notes |
| --- | --- | --- |
| Content model + integrity gates (Live) | All content features; CMS (F18) | Already enforced by tests |
| 8-ability model (FR-CURR-08) | Sentence Lab adaptivity, progress radar, assessment reporting | R1 prerequisite |
| Assessment backbone (F14, R1) | Placement, exit certification, metric 10, roadmap entry-point logic | |
| Revision scheduler (FR-REV-03) | Retention metric 9, dashboard due-queue, interleaved sessions | |
| AI service (server-side SDK) | AI Tutor (F13), AI writing feedback, interview simulator, Speaking Lab role-play | Server-only constraint |
| Entitlement service (R4) | Premium tiers, courses, AI quotas, premium badges in catalogue | Payment provider needed for billing only — entitlement logic can ship first |
| Analytics event pipeline (F19) | §9 dashboards, item calibration, cohort analysis | |

### 10.2 External

| Dependency | Status | Impact if unavailable |
| --- | --- | --- |
| Web Speech API (TTS + recognition) | Available (browser-built) | Fallbacks already Live; labs degrade to text/self-assessment modes |
| Server-side LLM (z-ai sdk) | Available in environment (server-only) | AI Tutor postponed; all other features unaffected |
| Payment provider | **Not available in sandbox** | Billing deferred to production deployment (R4); entitlement architecture ships ahead of it |
| Mail transport | Not configured | Email verification/reset deferred (FR-AUTH-06) |
| PostgreSQL (production) | Schema portable (Live) | Migration is config change; rehearsal scheduled R6 |

### 10.3 Environmental constraints (current deployment)

- Single user-visible route (`/`) with hash navigation — production deployment
  lifts this for real marketing routes/SEO (F01 full version).
- SQLite-only Prisma in sandbox; schema is PostgreSQL-portable by design.
- Port 3000 behind gateway; any realtime services must run as mini-services
  addressed via the gateway convention.

---

## 11. Priorities

**Definitions.** **P0** — the academy promise: without it TalkSy is not a
coherent learning product; ships in the earliest release that can hold it.
**P1** — differentiation: features that make TalkSy meaningfully better than
alternatives for the target personas. **P2** — scale and operations:
features that grow revenue, efficiency or institutional reach.

| Feature | Priority | Release | | Feature | Priority | Release |
| --- | --- | --- | --- | --- | --- | --- |
| F02 Catalogue | P0 | Live | | F10 Listening Lab | P1 | R2 |
| F03 Dashboard | P0 | Live | | F11 Speaking Lab | P1 | R2/R3 |
| F04 Roadmap | P0 | Live | | F12 Writing Studio | P1 | R2 |
| F05 Lesson player | P0 | Live | | F13 AI Tutor | P1 | R3 |
| F14 Assessments | P0 | R1 | | F16 Progress centre | P1 | R3 |
| F15 Revision system | P0 | R1 | | F17 Achievements | P2 | R3 |
| B1 curriculum (FR-CURR-05) | P0 | R1 | | F01 Public website (full) | P1 | R4 |
| Ability model (FR-CURR-08) | P0 | R1 | | B2 curriculum | P1 | R4 |
| F06 Grammar School | P1 | R2 | | Subscriptions + courses (FR-BIZ) | P1 | R4 |
| F07 Sentence Lab | P1 | R2 | | F18 CMS | P2 | R5 |
| F08 Vocabulary Builder | P1 | R2 | | F19 Analytics | P2 | R5 |
| F09 Reading Room | P1 | R2 | | C1 curriculum | P2 | R6 |
| | | | | Institutional accounts | P2 | R6 |

**Sequencing rule.** P0 items are strictly ordered (learning loop →
assessment → B1); P1 items may parallelise across content and engineering
tracks; P2 items never preempt a P0/P1 in the same release.

---

## 12. Risks

| # | Risk | Prob. | Impact | Mitigation |
| --- | --- | --- | --- | --- |
| 1 | **AI cost overrun** on free tier | Medium | High | Server-side quotas (§8.3); global budget alerts (NFR-15); quota parameters tunable without release; monitor exhaustion guardrail (§9.2) |
| 2 | **AI hallucination** in grammar answers | Medium | High (trust) | Curriculum grounding (FR-AIT-03); low-confidence fallback to curated Grammar School; "verify against lesson" links; sample-based answer QA each release |
| 3 | **Speech recognition variance** by browser/OS harms perceived quality | Medium | Medium | Self-assessment fallback everywhere (Live); similarity thresholds tuned per language length; never XP-gating (Live) |
| 4 | **Content throughput** (54+ lessons + labs + item bank) is the critical path | High | High | Blueprint anatomy + test gates make authoring mechanical; CMS (R5) removes engineering bottleneck; one level per release train |
| 5 | **Scope creep** across 19 features | High | Medium | This PRD is the scope contract; P0/P1/P2 discipline (§11); roadmap re-baselining only at stage kickoffs |
| 6 | **Freemium tension** — conversion pressure eroding the free guarantee | Medium | High (brand) | Free guarantee is structural (§8.1); guardrail metric (§9.2); pricing page leads with the guarantee |
| 7 | **Payment integration unavailable in sandbox** | Certain (env) | Medium | Entitlement architecture ships first (R3/R4); billing wires in at production deployment |
| 8 | **Retention plateau at A2→B1 gap** (classic ESL cliff) | Medium | High | R1 assessments show growth; revision engine (FR-REV-03); B1 content lands before A2 cohort arrives; metric 5/6 watch |
| 9 | **Writing assessment trust** (AI-only grading would be dishonest) | Medium | Medium | Honest-progress rule: server checks + rubric self-assessment carry XP; AI feedback informative only (F12 AC) |
| 10 | **GDPR/privacy exposure** via analytics or AI logs | Low-Med | High | Events carry ids/outcomes only (F19 AC); no raw text/audio logging (NFR-07/08); deletion cascade Live; privacy review per release |
| 11 | **Browser API deprecation** (Web Speech) | Low | Medium | Isolated behind `src/lib/speech.ts` (Live); pluggable design allows server TTS/ASR substitution without product changes |
| 12 | **Single-route constraint** limits SEO/marketing growth | Certain (env) | Medium | Production deployment lifts (§10.3); landing optimised in-sandbox; SEO roadmap at R4 |

---

## 13. Release milestones

Release trains map onto the engineering stages in
[IMPLEMENTATION_ROADMAP.md](IMPLEMENTATION_ROADMAP.md) (re-baselined at each
stage kickoff; the stage meta-rule holds — no new stage with unresolved
critical errors). Each train exits only when its acceptance criteria, the
§9-relevant instrumentation, and the standing checklist
(`tsc` 0 errors · lint 0 warnings · tests green · browser E2E · checkpoint
commit) pass.

| Train | Theme | Scope (features / FRs) | Exit criteria (headline) |
| --- | --- | --- | --- |
| **R0** ✅ | Platform foundation | Auth, A1 + A2, lesson player, listening/speaking, progress engine, practice, dashboard, profile (+ Stage 2 hardening & rebrand) | Delivered through Stage 2 (commit `1df3831`) |
| **R1** | The honest path completes | B1 curriculum (FR-CURR-05) · assessment backbone: placement, checkpoints, exit tests (F14) · 8-ability model · revision scheduling v1 (FR-REV-03) | 54-lesson gates green; placement verified on ≥ 5 synthetic profiles; metrics 1–4 instrumented; B1 walkthrough E2E both themes + mobile |
| **R2** | The production engine | Grammar School (F06) · Sentence Lab (F07) · Vocabulary Builder full (F08) · Reading Room (F09) · Listening Lab (F10) · Speaking Lab core (F11) · Writing Studio (F12) + `write` exercise type | Every lab usable end-to-end with honest XP; labs degrade gracefully without speech APIs; speaking/writing metrics (7–8) instrumented |
| **R3** | The guided academy | AI Tutor (F13) with quotas · progress centre full (F16) · achievements (F17) · revision v2 (interleaved, dashboard queue, FR-REV-04/05) | AI guardrails verified (never awards XP; grounding links; quota UX); metric 9 measurable; AI cost guardrails live |
| **R4** | The sustainable academy | B2 curriculum · entitlement service + tiers + subscriptions (FR-BIZ-01..07) · premium lesson variants · advanced course #1 (Interview English) · public website full (F01) · feature flags | Free-guarantee guardrail passing (§9.2); checkout + entitlements E2E (or staged behind production flag if sandbox blocks billing); pricing study locked |
| **R5** | The operating academy | CMS (F18) · analytics (F19) + §9 dashboards · item calibration loop · engagement stage (leaderboards, streak freeze — subordinate to learning) | Two-person publish workflow live; metrics computed exactly per §9; calibration report driving ≥ 1 content fix cycle |
| **R6** | Mastery & institutions | C1 curriculum · institutional pilot (seats, teacher dashboard, assignments, cohort analytics, SSO) · PostgreSQL migration rehearsal · progress export (FR-PRG-04) | Pilot with ≥ 1 partner; migration rehearsal passes on a staging copy; institutional consent model reviewed |

**Milestone honesty rules.** A train ships with features marked live or
planned — never partially claimed; any slipped item moves forward visibly in
this table and the roadmap. Beginner free-tier access is re-verified as an
acceptance criterion of every release from R4 onward.

---

## Appendix A · Legacy requirement ID mapping (v1 → v2)

The v1 compact tables used domain-prefixed IDs referenced by other documents.
They resolve as follows (all remain valid reference points):

| v1 ID | v2 location | Status carried forward |
| --- | --- | --- |
| AUTH-1..5 | FR-AUTH-01..04, FR-AUTH-05 | Live |
| AUTH-6 (email flows) | FR-AUTH-06 | Planned |
| AUTH-7 (rate limiting) | FR-AUTH-07 | Planned |
| CURR-1..4 | FR-CURR-01..04 | Live |
| CURR-5 (B1) | FR-CURR-05 → R1 | Planned |
| CURR-6 (B2) | FR-CURR-06 → R4 | Planned |
| CURR-7 (C1) | FR-CURR-07 → R6 | Planned |
| CURR-8 (placement) | FR-ASM-01/02 → R1 | Planned |
| CURR-9 (exit tests) | FR-ASM-04 → R1 | Planned |
| SKIL-1..3 | FR-LES-08, FR-LES-02, FR-LES-09 | Live |
| SKIL-4 (writing) | F12 + FR-LES-03 → R2 | Planned |
| SKIL-5 (extended reading) | FR-LAB-06/07 | Planned |
| PROG-1..9 | FR-LES-06, FR-REV-01/02, FR-PRG-01 | Live |
| PROG-10 (leaderboards) | Engagement scope, R5 | Planned |
| PROF-1..4 | FR-AUTH-05 + profile scope | Live |
| NFR-1..10 (v1) | §7 (renumbered; content integrity now NFR-16) | Live / as specified |

## Appendix B · Current platform state (Stage 2 baseline)

Live today: authentication (scrypt + DB sessions) · A1 + A2 curricula (36
original lessons) · lesson player (7-beat arc, 6 exercise types) · listening
(TTS, two voices, slow replay) · speaking (recognition grading + fallback) ·
honest progress engine (server XP-once, accuracy excluding speaking, Leitner
vocab strength, meaningful-day streaks) · practice quizzes (weakest-first) ·
dashboard (real stats, goal ring, weekly XP) · profile (name, goal, password,
deletion) · light/dark themes, responsive 375 px+, hash deep links · quality
gates (strict TS, zero-warning lint, 35 tests, error boundaries, validated
env, structured logging, security headers). See
[REPOSITORY_AUDIT.md](REPOSITORY_AUDIT.md).

## Appendix C · Glossary

- **Ability model** — the eight tracked abilities (§1.2) shared by content,
  assessments and reporting.
- **Academy Loop** — Teach → Practice → Assess → Revise → Guide (§1.3).
- **Honest progress** — every learner-facing number derived server-side from
  recorded events; the client cannot inflate it.
- **Leitner strength** — 0–5 per-word mastery score updated by real answers.
- **SM-2-style scheduling** — spaced repetition intervals that grow with
  consecutive correct reviews.
- **Premium variant** — an enhanced version of a lesson (deeper practice
  sets); the standard lesson always remains available.
- **Advanced course** — a paid, outcome-oriented bundle beyond the core path.
- **Entitlement** — a server-side grant (tier, course, quota) attached to a
  user; the single source of access truth.


