/**
 * TOEFL iBT Academy — Module 7, Full Practice (T-M7, PROMPT 48 Task 9).
 *
 * Authored at the v3 textbook standard (PROMPT 43). Single-file pattern per
 * t1-fundamentals.ts; validated by scripts/check-lesson-file.ts (module code
 * T-M7, non-orientation floors: ≥ 500 teaching words, ≥ 10 blocks per lesson).
 *
 * Format facts verified against official ETS pages and the platform's own
 * mock library (retrieved 2026-11-15):
 *   Reading    50 items, ~30 min, two-stage adaptive.
 *   Listening  47 items, ~29 min, two-stage adaptive, forward-only.
 *   Writing    12 items, ~23 min, linear — 10 sentence reconstructions +
 *              Write an Email + Write for an Academic Discussion.
 *   Speaking   11 items, ~8 min, linear — 7 Listen-and-Repeat sentences
 *              (8/10/12-second windows) + 4 Take-an-Interview items.
 *   ~90 minutes of timed sections; ~2 hours end to end; 1.0–6.0 section
 *   bands in half steps; overall = average of the four rounded to the
 *   nearest half band (ETS example: 5.125 → 5.0); CEFR printed; comparable
 *   0–120 dual-reported during the 2026–2028 transition; MyBest; no pass mark.
 *
 * Honesty rules this module must carry (and does, in the lessons themselves):
 *   - TalkSy's adaptive simulation mirrors the two-stage STRUCTURE of the real
 *     Reading and Listening sections with a simple fixed rule (≥ 60% of Stage 1
 *     raw points → Upper module; below → Lower module). That threshold is a
 *     PRACTICE ADAPTATION, not the official ETS routing algorithm — ETS
 *     publishes no routing algorithm, and the lessons say so explicitly.
 *   - Mock section bands are converted by a PRACTICE conversion table and are
 *     labelled practice estimates; ETS publishes no raw-to-band table, so no
 *     mock band is ever presented as an official conversion.
 *   - The comparable legacy 0–120 figure on practice reports is approximate
 *     and labelled as such.
 *   - In the real test the routing module counts toward your score exactly
 *     like module two — the lessons never let learners treat Stage 1 casually.
 */

import type { ModuleSpec } from "../ielts/types";
import { ex, fb } from "../ielts/types";

export const TOEFL_T7_PRACTICE: ModuleSpec = {
  slug: "toefl-module-7-practice",
  title: "Module 7 — Full TOEFL Practice",
  description:
    "The practice system that turns study into a score: task-based exercises per item type, section tests at official timing, adaptive practice simulations that mirror the two-stage design, full mock tests end to end, and the performance reports that convert every attempt into next week's plan.",
  units: [
    {
      slug: "toefl-practice-system",
      title: "The practice system",
      description:
        "Matching each kind of practice to the week that needs it, from single-task drills to full sittings.",
      lessons: [
        {
          slug: "toefl-practice-mocks-guide",
          title: "The mock system: modes, kinds and cadence",
          description:
            "The six practice modes and what each is for; the ladder that runs from task drills through section tests and adaptive simulations to full mocks; and the cadence that accelerates as test day approaches.",
          objectives: [
            "match each practice mode to the job it does best in a given week",
            "climb the ladder from task drills through section tests and simulations to full mocks",
            "run an accelerating cadence that peaks in the final fortnight",
            "review every attempt before the next one is booked",
          ],
          minutes: 12,
          blocks: [
            {
              type: "lesson-intro",
              text: "Knowing the format earns nothing by itself; practice under the right conditions converts knowledge into a band. This lesson maps the platform's six practice modes, walks the TOEFL titles currently sitting in the mock library, and sets the cadence rule for the final weeks: the closer the test, the more each session must resemble the real sitting.",
              beforeYouStart: [
                "You can recite the 2026 format card: item counts, timings and task families per section.",
                "You can hold a section budget inside a clock from the time-management lesson.",
              ],
            },
            {
              type: "table",
              title: "Examination relevance",
              headers: ["Aspect", "This lesson"],
              rows: [
                ["Section", "All four — full mocks run every section; drills and section tests train them one at a time"],
                ["Task & question types", "Every official task type can be drilled in isolation, then reassembled under exam clocks"],
                ["What is assessed", "The test never grades mode choice — it grades the routines the right mode installs"],
                ["Why this matters", "Mode choice decides whether a session teaches content, trains routine or measures readiness, and mixing those jobs wastes weeks"],
              ],
            },
            { type: "heading", text: "Six modes, six jobs" },
            {
              type: "text",
              text: "The mock library offers six modes, and each exists for a different week of work. Full mock examination sits a library mock under the official section clocks. Section-wise practice assembles a single section from the question pool. Timed practice runs a custom selection inside a minute budget you set. Untimed learning practice takes the clocks off and checks your answer after each item. Previous mistakes practice resurfaces exactly the items you got wrong or skipped, and custom practice filters the pool by section, task type and difficulty so you can build a surgical set.",
            },
            {
              type: "table",
              title: "The six practice modes at a glance",
              headers: ["Mode", "What it does", "Reach for it when"],
              rows: [
                ["Full mock examination", "A whole library mock under official section clocks", "You need a measurement, not a lesson"],
                ["Section-wise practice", "One section assembled from the question pool", "One section is clearly holding the rest back"],
                ["Timed practice", "A custom selection inside a fixed minute budget", "The content is learned but the routine is not automatic"],
                ["Untimed learning practice", "No clocks, per-item answer checking as you go", "You are still learning how a task type works"],
                ["Previous mistakes practice", "Replays exactly the items you got wrong or skipped", "A report has just shown you where the leaks are"],
                ["Custom practice", "Filters on sections, task types and difficulty", "You want one precise set, such as hard masks only"],
              ],
            },
            {
              type: "steps",
              title: "The ladder from drill to full mock",
              intro: "Each rung has one job; climb them in order and never let a clock land on an unlearned task.",
              steps: [
                {
                  title: "Drill the task untimed",
                  text: "Learn the task type with the clocks off, checking the answer after every item until the technique makes sense without help.",
                  examples: [
                    { english: "Twenty Complete-the-Words masks in untimed learning practice, one answer check after each item.", note: "Teaching mode: understanding is the goal, so the clocks stay off.", domain: "study" },
                  ],
                },
                {
                  title: "Move the same drill under a clock",
                  text: "Once the technique is stable, run the identical selection inside a minute budget until the routine fits it without thinking.",
                  examples: [
                    { english: "The same twenty masks inside a ten-minute timed practice budget.", note: "Automation mode: the content is known; now the routine must fit the budget.", domain: "study" },
                  ],
                },
                {
                  title: "Sit the whole section at official timing",
                  text: "A section mock puts one paper together at its real item count and its real clock, which is the first honest measurement of that section.",
                  examples: [
                    { english: "TOEFL Reading Section Mock (2026 format) 1 — official item count inside roughly thirty minutes.", note: "Measurement mode: the whole section under the clock it will meet on test day.", domain: "exam" },
                  ],
                },
                {
                  title: "Add adaptivity and endurance",
                  text: "The adaptive simulation family rehearses the two-stage routing, and the full mock chains all four sections at official counts into one sitting.",
                  examples: [
                    { english: "TOEFL iBT Full Mock (2026 format) 1 — all four sections, about ninety minutes of timed sections.", note: "Rehearsal mode: routing plus the endurance of a full sitting.", domain: "exam" },
                  ],
                },
                {
                  title: "Review before anything else is booked",
                  text: "The sitting produces data and the review converts it; until the review exists, the next session has nothing to build on.",
                  examples: [
                    { english: "Ten minutes on the per-item explanations, then previous mistakes practice on every miss.", note: "The review is the only part of a mock that changes next week.", domain: "review" },
                  ],
                },
              ],
            },
            { type: "heading", text: "What is sitting in the library" },
            {
              type: "text",
              text: "The TOEFL shelf holds a sample-length full mock for baselines, section mocks for each paper, one full mock at official counts and the adaptive simulation family. The Reading and Listening section mocks run at official item counts — about thirty and about twenty-nine minutes respectively. Both Writing section mocks carry the official twelve items: ten sentence reconstructions plus the email and the academic discussion. The Speaking section mock carries the official eleven: seven Listen-and-Repeat sentences in eight-, ten- and twelve-second windows plus four interview items. The full mock puts all four sections together at official counts, and the simulations layer the two-stage routing structure on top for the adaptive pair.",
            },
            { type: "heading", text: "The cadence rule" },
            {
              type: "text",
              text: "Cadence is how often each kind of practice occurs, and it accelerates toward the date. Early weeks are untimed and drill-shaped: content first, clocks later. Middle weeks add section tests at official timing and a first taste of adaptivity. The final fortnight is mock-shaped: full sittings at official counts, each one followed by a review the same day, with short drill blocks between them. A useful frame is that drills teach, tests measure and mocks rehearse — and the closer the date, the more rehearsal matters. New content discovered in the last fortnight stays undiscovered; the budget works around it.",
            },
            {
              type: "example",
              title: "Choosing the mode, week by week",
              items: [
                { english: "Week two, still fighting the mask technique: untimed learning practice on Complete the Words, answer checked after each item.", note: "Clocks stay off while the content is unfamiliar — that is this mode's entire job.", domain: "study" },
                { english: "Week four, the technique is stable but slow: the same selection inside a ten-minute timed practice budget.", note: "The clock enters only after the content is already learned.", domain: "study" },
                { english: "A report lists eleven wrong items and two skips in Listening; the next session is previous mistakes practice on exactly those thirteen.", note: "Mistakes practice is the report's follow-up appointment, item for item.", domain: "review" },
                { english: "Speaking worries her most, so she runs section-wise practice on the Speaking paper twice a week between full mocks.", note: "A weak section can absorb extra reps without paying for a two-hour sitting each time.", domain: "exam" },
                { english: "Two weeks out, the schedule flips: a full mock on Saturday, its review on Sunday, short drill blocks midweek.", note: "The final fortnight belongs to rehearsal, not new content.", domain: "planning" },
                { english: "He wants only hard sentence reconstructions: custom practice filtered to Writing, task type reconstruction, difficulty hard.", note: "Custom practice exists for exactly this kind of surgical selection.", domain: "study" },
              ],
            },
            {
              type: "mistakes",
              title: "Practice-mode mistakes corrected",
              items: [
                { wrong: "I will sit a full mock every day from week one, because that is what serious candidates do.", right: "Open with untimed drills, add clocks once the content is learned, and keep full mocks for the final weeks.", reason: "Full mocks measure; they do not teach. Measuring a beginner daily produces anxiety and no new skill — the ladder exists because each rung does a different job." },
                { wrong: "Timed practice is where I should learn the task types.", right: "Learn task types in untimed learning practice; use timed practice to automate content you already know.", reason: "A clock on an unlearned task measures panic rather than progress, which is why the modes are ordered the way they are." },
                { wrong: "The mock is finished when the clock stops.", right: "The sitting produces data and the review converts it; nothing further gets booked until the review is written.", reason: "Skipping the review leaves every error in place, so the next sitting repeats it — the review is the only step that changes next week." },
              ],
            },
            {
              type: "four-skills",
              title: "One Saturday mock, four skills",
              reading: {
                text: "A candidate named Ifeoma sat her first full mock on a whim after two weeks of drills, scored lower than the drills had predicted, and decided the format was impossible. Reading her report afterwards told a different story: no section had ever been practised under a clock, so Reading ate her buffer and the three sections behind it inherited the panic. The mock had not measured her English at all — it had measured her routines, and those had never been installed.",
                task: "Explain what the sitting actually measured, and which mode should have come before it.",
              },
              writing: {
                task: "Write the review note you would leave yourself after that sitting: three sentences — the finding, the next mode, and the reason it comes next.",
                guide: [
                  "Open with the finding, not the feeling: name the section and the routine that failed.",
                  "Name the next mode precisely — section test, timed drill or mistakes practice.",
                  "Close with the date of the next sitting so the note is checkable.",
                  "Avoid the word 'just'; plans built on 'just practise more' change nothing.",
                ],
                model: "Reading consumed nearly half the section budget, so the clock routine — not the English — is the finding. Next session is section-wise practice on the Reading paper at official timing, then timed drills on the other three sections. The next full mock is in ten days, and it will be judged on the budgets, not the band.",
              },
              listening: {
                script: "Coach: Here is the rule for your final fortnight. Saturday you sit the full mock at official counts — no pauses, no phone. Sunday you review it: every item, every explanation, then previous mistakes practice on everything you missed. Midweek, short drills — thirty minutes, no more. Then the second full mock, then review again. Rehearsal first, new content never: if a task type is still unknown two weeks out, it stays unknown, and you budget around it.",
                task: "Which two kinds of session fill the final fortnight, and what happens to new content in that window?",
              },
              speaking: {
                task: "Say aloud, in under thirty seconds, your current week's plan: which mode, which days, and what the review habit looks like.",
                frames: [
                  "This week my main mode is … , because …",
                  "On … I sit a … , and the day after I …",
                  "Nothing further gets booked until the … is written.",
                ],
                checklist: [
                  "Did I name a mode and a reason in the same breath?",
                  "Did I put the review after the sitting, not before the next one?",
                  "Did I avoid promising new content in the final fortnight?",
                ],
              },
            },
            {
              type: "table",
              title: "Why this model works",
              headers: ["Aspect", "What the model does"],
              rows: [
                ["Sequencing", "Each rung of the ladder is trained before the next is loaded, so a clock never lands on an unlearned task."],
                ["Separation of jobs", "Drills teach, tests measure and mocks rehearse; keeping the three apart stops a measurement being mistaken for a lesson."],
                ["Honest data", "Full mocks are reserved for readiness questions, so their bands mean something when they are finally read."],
                ["Closed loop", "Every sitting is followed by review and mistakes practice, which is the mechanism that actually moves the band."],
                ["Cadence", "Frequency rises as the date nears, matching the real test's demand for endurance over novelty."],
              ],
            },
            {
              type: "table",
              title: "Examination strategy",
              headers: ["Moment", "Do this"],
              rows: [
                ["Before you start", "Name the job of today's session — teach, train or measure — and pick the mode that does that job."],
                ["While the clock runs", "In timed modes the budget is the task: when it expires, the item is flagged and the routine moves on."],
                ["If you are stuck", "If a mode keeps producing the same errors, drop a rung and work that task type untimed until the routine exists."],
                ["Final minutes", "In the last fortnight, protect the mock shape — official counts, no pausing, and a review the same day."],
              ],
            },
            {
              type: "summary",
              points: [
                "Six modes serve six jobs: full mocks measure, section tests isolate, timed practice automates, untimed learning teaches, mistakes practice retrains and custom practice selects.",
                "The ladder runs from untimed drills through timed drills and section tests to adaptive simulations and full mocks.",
                "The library holds a sample-length full mock, section mocks for all four papers at official counts, a full mock and the two-stage adaptive simulation family.",
                "The cadence accelerates: drills early, section tests in the middle weeks, full mocks plus reviews through the final fortnight.",
                "No sitting counts until it is reviewed — the report, not the clock, ends the session.",
              ],
            },
            {
              type: "revision",
              title: "Recall check",
              intro: "One item per earlier lesson in the fundamentals module.",
              items: [
                { question: "Roughly how many minutes of the real test are timed sections?", options: ["About 90", "About 30", "About 23"], correctIndex: 0, explanation: "About ninety minutes of timed sections, roughly two hours end to end once instructions and breaks are counted in.", from: "toefl-format-2026 · The 2026 format, section by section" },
                { question: "A per-item budget exists mainly to…", options: ["stop one stubborn item starving the rest of the section", "reward early finishing", "make the items easier"], correctIndex: 0, explanation: "Budgets spread time across task families so nothing starves; the time-management lesson built them section by section.", from: "toefl-time-management · Time management across the sections" },
                { question: "Which two sections adapt in two stages?", options: ["Reading and Listening", "Writing and Speaking", "None of them"], correctIndex: 0, explanation: "The adaptive pair routes through two modules; the simulation family covered in the next lesson rehearses exactly that shape.", from: "toefl-adaptive-testing · Adaptive testing: how the test adjusts to you" },
              ],
            },
          ],
          questions: [
            ex({
              type: "mcq",
              difficulty: "easy",
              skill: "reading",
              prompt: "A report has just listed every item you got wrong or skipped. Which mode retrains exactly those items next?",
              hints: ["One mode exists solely for this job."],
              options: [
                { id: "a", text: "Custom practice with every filter wide open" },
                { id: "b", text: "Previous mistakes practice" },
                { id: "c", text: "A fresh full mock examination" },
              ],
              correctOptionId: "b",
              feedback: fb(
                "Previous mistakes practice",
                "The mode resurfaces precisely the items you failed or skipped, so the retraining session matches the report item for item and nothing new is mixed in until those are clean.",
                "Custom practice could rebuild the set by hand and a new full mock measures instead of retraining — only one mode does this job natively.",
              ),
              tags: ["toefl", "practice"],
            }),
            ex({
              type: "multi-select",
              difficulty: "medium",
              skill: "reading",
              prompt: "Select every correct statement about the six practice modes.",
              hints: [],
              options: [
                { id: "a", text: "Untimed learning practice checks answers per item with the clocks off" },
                { id: "b", text: "Timed practice runs a custom selection inside a minute budget" },
                { id: "c", text: "Section-wise practice assembles one section from the question pool" },
                { id: "d", text: "Full mock examination removes the section clocks so you can learn comfortably" },
              ],
              correctOptionIds: ["a", "b", "c"],
              feedback: fb(
                "Statements a, b and c",
                "The first three describe the modes exactly as they behave. A full mock runs under the official section clocks — removing clocks is the untimed learning mode's job, which is why (d) contradicts that mode's whole purpose.",
                "Full mocks exist to measure under real conditions; treating them as comfort modes is the classic mix-up this lesson exists to prevent.",
              ),
              tags: ["toefl", "practice"],
            }),
            ex({
              type: "read-answer",
              difficulty: "medium",
              skill: "reading",
              prompt: "Read the candidate's logged week, then answer.",
              hints: ["Ask what job each session is doing that day."],
              passageTitle: "A week of practice, logged",
              passage: "Monday: Complete the Words in untimed learning practice — the mask technique still needs thinking through, and checking each answer after the item is the point. Wednesday: the same selection inside a ten-minute budget, because the technique is now stable and the routine is not. Saturday: the full mock at official counts, followed on Sunday by previous mistakes practice on the fourteen items the report flagged.",
              question: "Why does the Monday session keep its clocks off?",
              options: [
                { id: "a", text: "The task type is still being learned, so the session teaches rather than measures" },
                { id: "b", text: "Untimed items score more highly than timed items" },
                { id: "c", text: "The platform does not allow clocks on that task type" },
              ],
              correctOptionId: "a",
              feedback: fb(
                "The task type is still being learned, so the session teaches rather than measures",
                "The clock arrives on Wednesday because the content is already learned and the target has switched to routine; Monday's job is understanding, and a clock there would measure panic instead.",
                "Untimed practice carries no scoring bonus and no task type is clock-barred — the mode follows the job, never the calendar.",
              ),
              tags: ["toefl", "practice"],
            }),
            ex({
              type: "short-answer",
              difficulty: "medium",
              skill: "reading",
              prompt: "In one phrase: what turns a finished sitting into a finished study session?",
              hints: [],
              question: "What must happen after the clock stops, before anything else is booked?",
              acceptedAnswers: ["the review", "a review of the report", "reviewing every item with its explanation", "the post-mock review"],
              keywords: ["review"],
              feedback: fb(
                "The review",
                "The sitting produces the data and the review converts it into next week's plan; every platform report ends in a Focus-next summary precisely so the review has somewhere to start.",
                "Booking again without reviewing leaves every error in place, so the same mistakes simply resurface in the next sitting.",
              ),
              tags: ["toefl", "practice"],
            }),
            ex({
              type: "mcq",
              difficulty: "hard",
              skill: "reading",
              prompt: "Two weeks before test day, a candidate discovers a task type she has never drilled. What does the cadence rule advise?",
              hints: [],
              options: [
                { id: "a", text: "Start learning the new task type immediately, replacing the mocks" },
                { id: "b", text: "Let it stay unfamiliar, budget around it, and keep the mock shape intact" },
                { id: "c", text: "Cancel the test date" },
              ],
              correctOptionId: "b",
              feedback: fb(
                "Let it stay unfamiliar, budget around it, and keep the mock shape intact",
                "The final fortnight belongs to rehearsal: a brand-new task type cannot be both learned and automated in two weeks, so the budget absorbs it and the full mocks continue on schedule.",
                "Swapping mocks for new content trades the only rehearsal window for a lesson that will not be automatic in time.",
              ),
              tags: ["toefl", "practice"],
            }),
            ex({
              type: "fill-blank",
              difficulty: "easy",
              skill: "reading",
              prompt: "Complete the library fact.",
              hints: ["Official counts across all four sections together."],
              sentence: "The full mock runs all four sections at official item counts — about ___ minutes of timed sections.",
              acceptedAnswers: ["90", "ninety"],
              feedback: fb(
                "90",
                "Roughly ninety minutes of timed sections in total: Reading about thirty, Listening about twenty-nine, Speaking about eight, Writing about twenty-three — about two hours end to end with instructions and breaks.",
                "Thirty is the Reading section alone and twenty-three is Writing; the figure belongs to all four sections added together.",
              ),
              tags: ["toefl", "practice"],
            }),
          ],
          homework: [
            "Write this week's practice plan in three lines — one teach session, one train session, one measure session — each named with its mode.",
            "Open the mock library, read every TOEFL title currently on the shelf, and note which one your next review will book.",
          ],
        },
      ],
    },
    {
      slug: "toefl-adaptive-practice",
      title: "Adaptive practice",
      description:
        "Rehearsing the two-stage shape before the real test performs it on you, and reading the branch as information rather than judgement.",
      lessons: [
        {
          slug: "toefl-practice-adaptive",
          title: "Practising with adaptive simulations",
          description:
            "How the simulation family mirrors the two-stage design of the real adaptive sections: Stage 1 routing, the fixed sixty-percent branch to the Upper or Lower module, why that threshold is a practice adaptation and not the ETS routing algorithm, why Stage 1 is fully scored, and how to pace when module two turns harder.",
          objectives: [
            "describe the two-stage shape the simulations mirror, stage by stage",
            "apply the Stage 1 branch rule while stating honestly that it is a practice adaptation",
            "treat the routing module as a fully scored module in every simulation",
            "hold per-item budgets when module two arrives harder",
          ],
          minutes: 12,
          blocks: [
            {
              type: "lesson-intro",
              text: "The real Reading and Listening sections do not sit still: a first module decides how hard your second module will be. TalkSy's adaptive simulation family rehearses that shape — Stage 1 routes you, Stage 2 loads at the difficulty you earned — with one honest difference you must be able to state out loud: the branch rule here is a fixed practice threshold, not the unpublished engine ETS runs. This lesson walks the flow, the rule and the pacing.",
              beforeYouStart: [
                "You know from the fundamentals module which two sections are two-stage adaptive.",
                "You can hold a per-item budget inside a section clock under pressure.",
              ],
            },
            {
              type: "table",
              title: "Examination relevance",
              headers: ["Aspect", "This lesson"],
              rows: [
                ["Section", "Reading and Listening — the two sections whose real versions adapt"],
                ["Task & question types", "Routing items first, then an Upper or Lower module from the same task families"],
                ["What is assessed", "Both modules feed your marks in the real test, exactly as module two does"],
                ["Why this matters", "Rehearsing the two-stage shape removes the shock when the real sitting changes gear"],
              ],
            },
            { type: "heading", text: "Two stages, honestly described" },
            {
              type: "text",
              text: "The official design is simple to state: every candidate meets a first module, and performance on it sends the second module lower or higher in difficulty. What ETS never publishes is the routing calculation itself. The simulation family mirrors the structure with a rule you can check: score sixty percent or more of the raw points on Stage 1 and the Upper module follows; below sixty percent, the Lower module loads instead. That threshold is a practice adaptation — a fixed, visible stand-in for an engine nobody outside ETS can copy. Rehearsing against a visible rule trains the habit; on test day, the habit is what travels.",
            },
            {
              type: "steps",
              title: "A two-stage flow walkthrough",
              intro: "One simulation from launch to report, in four moves.",
              steps: [
                {
                  title: "Sit Stage 1 as if it were the section",
                  text: "Stage 1 is the routing module — Reading and Listening routing items, delivered first and scored in full. Run your drilled routine from the very first item: no warm-up mindset, no energy-saving.",
                  examples: [
                    { english: "Stage 1 opens at the same pace as any section mock: routine, budget, flag.", note: "In the real test the routing module counts toward your score exactly like module two.", domain: "exam" },
                  ],
                },
                {
                  title: "Let the branch compute",
                  text: "At sixty percent of the raw points or above, the Upper module loads; below the line, the Lower module loads instead. The branch is arithmetic here and opaque on test day, which is why the routine, not the rule, is what you train.",
                  examples: [
                    { english: "Raw points at 64%: the Upper module loads and the task families arrive harder.", note: "Sixty-four percent clears the fixed practice threshold with room to spare.", domain: "exam" },
                  ],
                },
                {
                  title: "Meet module two at its own difficulty",
                  text: "The Upper module's items run harder and the Lower module's run kinder, but both are a complete second half, and in a real sitting both halves carry equal weight in your marks.",
                  examples: [
                    { english: "A Lower-module branch still ends with a full second module that counts in full.", note: "The branch is a difficulty match, never a verdict.", domain: "study" },
                  ],
                },
                {
                  title: "Read hard items as placement",
                  text: "When module two bites harder, that is the system telling you that you routed upward. Keep the per-item budget, flag whatever refuses to resolve, and let the sweep close the section.",
                  examples: [
                    { english: "Masks that resist in module two get flagged, not fought — the sweep exists for them.", note: "Harder items later are a placement signal, not a failure message.", domain: "exam" },
                  ],
                },
              ],
            },
            {
              type: "comparison",
              title: "The simulation beside the real thing",
              columns: ["Adaptive simulation (TalkSy)", "Official TOEFL section"],
              rows: [
                { aspect: "Shape", left: "Two stages: a routing module, then a matched-difficulty module", right: "The same two-stage design, delivered live" },
                { aspect: "Branch rule", left: "Fixed and public: sixty percent of Stage 1 raw points sends you up", right: "An internal calculation ETS does not publish" },
                { aspect: "Scoring weight", left: "Both stages feed your marks in the practice report", right: "The routing module counts toward your score like any other module" },
                { aspect: "What it is for", left: "Installs the routine: full effort on Stage 1, calm pacing through the branch", right: "Places you at the difficulty that measures you best" },
              ],
              verdict: "The simulation copies the structure and the pressure honestly, and says so about the one thing it cannot copy.",
            },
            {
              type: "warning",
              title: "The costliest misunderstanding",
              text: "In the real test, the routing module is scored like module two — nothing about it is a warm-up. Holding energy back on Stage 1 to spend later is spending the branch itself: a weaker Stage 1 sends the engine a weaker signal, and the difficulty you meet afterwards is computed from what you actually did.",
            },
            {
              type: "example",
              title: "Stage 1 scores and where they branch",
              items: [
                { english: "Marta takes 66% of the Stage 1 raw points; the Upper module loads and its masks run noticeably longer.", note: "Sixty-six percent clears the fixed threshold, so module two arrives harder exactly as designed.", domain: "exam" },
                { english: "Devon takes 58% and meets the Lower module; he trains that module as seriously as any Upper session.", note: "A Lower branch is a difficulty match for today, not a label for always.", domain: "exam" },
                { english: "Sara lands on exactly 60% of the raw points and the Upper module loads — the rule reads sixty percent or more.", note: "The boundary itself belongs to the upper side of the branch.", domain: "study" },
                { english: "Ravi coasted through Stage 1 to save something for later; his 47% routed him lower than any full-effort run had ever done.", note: "Energy saved on Stage 1 buys a weaker branch — the simulation makes the trade visible.", domain: "exam" },
                { english: "Nadia's module two filled with longer Complete-the-Words masks; she logged the rise as evidence of routing upward and kept her budget flat.", note: "Reading harder items as placement is the pacing skill this family exists to build.", domain: "study" },
                { english: "Two months of weekly simulations turned Tomas's branch anxiety into boredom — by test day the gear change felt like weather.", note: "Exposure is the whole point: the shape stops being news.", domain: "everyday" },
              ],
            },
            {
              type: "mistakes",
              title: "Adaptivity mistakes corrected",
              items: [
                { wrong: "Stage 1 is a warm-up, so I will hold something back for module two.", right: "Stage 1 is fully scored and decides the difficulty of everything after it — full routine from item one.", reason: "Holding back spends the branch itself: the routing signal is computed from what you did, and what you did was deliberately less." },
                { wrong: "The sixty-percent rule is how ETS routes candidates.", right: "The sixty-percent threshold is a fixed practice adaptation; ETS's routing algorithm is internal and unpublished.", reason: "Conflating the two turns a visible rehearsal rule into a claim about the real engine — the honest version trains the habit while labelling the mechanism." },
                { wrong: "Harder items in module two mean the simulation has judged me weak.", right: "Harder module-two items usually mean you branched upward — placement information, not a verdict.", reason: "Upper modules are reached by performing well; misreading the rise as failure converts good news into lost composure and slower pacing." },
                { wrong: "A Lower-module branch means the session was wasted.", right: "The Lower module is a complete second half that counts and trains at today's matched difficulty.", reason: "Difficulty matching is the design working: training where you actually are beats drowning where you are not." },
              ],
            },
            {
              type: "four-skills",
              title: "One branch, four skills",
              reading: {
                text: "A candidate named Kwame read his simulation report and found a line no fixed mock had ever printed: Stage 2 loaded at Lower difficulty following Stage 1 performance. His first reaction was embarrassment — until he compared the two halves. Stage 1 had cost him the branch: three rushed items at the opening, the exact warm-up mindset the warning block describes. Module two, taken at the matched difficulty, had been his cleanest half-hour of the week. The report had not ranked him; it had located the leak.",
                task: "Which half located the leak, and what produced the branch that caused it?",
              },
              writing: {
                task: "Write the three-sentence note Kwame should pin above his desk before the next simulation: the finding, the fix, and the target.",
                guide: [
                  "Open with the mechanism: name the half that cost the branch, not the feeling it produced.",
                  "State the fix as a routine — first-item behaviour, budget, flagging — never as 'try harder'.",
                  "Close with a number: the Stage 1 raw-point percentage the next run aims at.",
                  "Keep every sentence checkable against the next report.",
                ],
                model: "Stage 1's first three items were rushed, and that cost the branch — the Lower module was earned by the opening, not by ability. The fix is routine-shaped: drilled pace from item one, the per-item budget untouched, and flags instead of fights. The next simulation targets sixty-five percent of Stage 1 raw points, reviewed against this one on Sunday.",
              },
              listening: {
                script: "Coach: Two things happen in a simulation that never happen in a fixed mock. First, the branch — Stage 1 ends, and the difficulty you meet afterwards is the difficulty you earned, so the opening is never a warm-up. Second, the shift — module two changes gear, and if it feels harder, that is usually you having gone up, not down. Your job in the room is unchanged: budget per item, flag what stalls, sweep at the end. The simulation is not testing your luck; it is rehearsing your habits under a gear change.",
                task: "According to the coach, what does a harder module two usually mean, and what is the job in the room?",
              },
              speaking: {
                task: "Explain the branch rule aloud in under forty seconds, including the honesty clause that it is a practice adaptation rather than the ETS algorithm.",
                frames: [
                  "Stage 1 routes me: sixty percent of the raw points or more loads the Upper module.",
                  "That threshold is a practice rule — the ETS routing algorithm itself is unpublished.",
                  "If module two feels harder, I read that as placement, not as a verdict.",
                  "My routine in the room is the one thing the branch cannot change.",
                ],
                checklist: [
                  "Did I state the threshold and its direction in one breath?",
                  "Did I include the honesty clause about the unpublished algorithm?",
                  "Did I finish with what stays constant when the gear changes?",
                ],
              },
            },
            {
              type: "table",
              title: "Why this model works",
              headers: ["Aspect", "What the model does"],
              rows: [
                ["Structural honesty", "Copies the two-stage shape and the scoring weight of both modules while labelling the one rule it cannot copy."],
                ["Full-effort Stage 1", "Trains the opening as a scored half — the part fixed mocks cannot touch, because they never branch."],
                ["Visible arithmetic", "A published threshold lets you check the branch yourself, so the lesson stays about routine, not mystery."],
                ["Calm under the shift", "Repeated exposure to the gear change converts difficulty spikes into placement information."],
                ["Transfer", "What travels to test day is the habit — budgets, flags, sweeps — because the engine there is unseen."],
              ],
            },
            {
              type: "table",
              title: "Examination strategy",
              headers: ["Moment", "Do this"],
              rows: [
                ["Before you start", "Read the simulation titles in the library and note which stage each one covers before launching anything."],
                ["While the clock runs", "Run Stage 1 at drilled pace; when module two changes gear, keep the per-item budget and treat the rise as placement."],
                ["If you are stuck", "An item that refuses to resolve is flagged, not fought — the sweep closes the section either way."],
                ["Final minutes", "Check the branch against your own arithmetic before leaving the report — sixty percent or more went up."],
              ],
            },
            {
              type: "summary",
              points: [
                "The simulation family mirrors the real two-stage design: Stage 1 routes, Stage 2 loads at the earned difficulty.",
                "The branch rule here is fixed and public — sixty percent of Stage 1 raw points loads the Upper module — and it is a practice adaptation, not the unpublished ETS routing algorithm.",
                "Stage 1 is fully scored in the real test; holding back spends the branch itself.",
                "Harder module-two items are usually evidence of routing upward — read them as placement and keep the budget.",
                "A Lower branch is a difficulty match, never a verdict — the module still counts in full.",
              ],
            },
            {
              type: "revision",
              title: "Recall check",
              intro: "One item per earlier lesson in the fundamentals module.",
              items: [
                { question: "Which sections adapt in two stages?", options: ["Reading and Listening", "Speaking and Writing", "Reading only"], correctIndex: 0, explanation: "The adaptive pair routes through two modules; the simulation family rehearses exactly their shape.", from: "toefl-adaptive-testing · Adaptive testing: how the test adjusts to you" },
                { question: "In the real test, the routing module's contribution to your marks is…", options: ["Scored like module two", "Ignored by the scoring engine", "Halved for fairness"], correctIndex: 0, explanation: "The routing module counts toward your score exactly like module two — which is why Stage 1 can never be a warm-up.", from: "toefl-adaptive-testing · Adaptive testing: how the test adjusts to you" },
                { question: "The Listening section is…", options: ["Forward-only", "Replayable at will", "Paused between items"], correctIndex: 0, explanation: "Forward-only delivery means prediction and commitment replace replay, inside the same two-stage shape.", from: "toefl-format-2026 · The 2026 format, section by section" },
              ],
            },
          ],
          questions: [
            ex({
              type: "mcq",
              difficulty: "easy",
              skill: "reading",
              prompt: "Stage 1 raw points land at 61%. Which module loads next?",
              hints: ["The rule reads 'sixty percent or more'."],
              options: [
                { id: "a", text: "The Lower module, because 61 is close to the line" },
                { id: "b", text: "The Upper module, because the threshold is sixty percent or more" },
                { id: "c", text: "Neither — the simulation ends at Stage 1" },
              ],
              correctOptionId: "b",
              feedback: fb(
                "The Upper module, because the threshold is sixty percent or more",
                "Sixty-one percent sits on the upper side of the fixed practice threshold, so the Upper module loads and module two arrives harder — the boundary itself belongs to the upper branch.",
                "Closeness to the line changes nothing, and Stage 2 always loads: one half never stands alone in a two-stage design.",
              ),
              tags: ["toefl", "adaptive"],
            }),
            ex({
              type: "multi-select",
              difficulty: "medium",
              skill: "reading",
              prompt: "Select every correct statement about the adaptive simulation.",
              hints: [],
              options: [
                { id: "a", text: "Stage 1 is the routing module, covering Reading and Listening routing items" },
                { id: "b", text: "The branch rule is a fixed practice threshold, not the ETS routing algorithm" },
                { id: "c", text: "In the real test, the routing module counts toward your score" },
                { id: "d", text: "A Lower-module branch means the session failed" },
              ],
              correctOptionIds: ["a", "b", "c"],
              feedback: fb(
                "Statements a, b and c",
                "The first three statements are the lesson's core facts. A Lower branch is a difficulty match, not a failure — the module still counts in full, which is why (d) is the invention.",
                "Reading the branch as a verdict is the costliest misunderstanding this family exists to train out.",
              ),
              tags: ["toefl", "adaptive"],
            }),
            ex({
              type: "read-answer",
              difficulty: "medium",
              skill: "reading",
              prompt: "Read the extract, then answer.",
              hints: ["What does a difficulty rise usually signal in a two-stage design?"],
              passageTitle: "Nadia's module two",
              passage: "Somewhere past the middle of her simulation, the Complete-the-Words masks started running three and four lines long, and the academic vocabulary in them thickened. Nadia's first instinct was to panic — she wrote 'getting harder, am I dropping?' in the margin. Then she remembered the walkthrough: in a two-stage design, the second module's difficulty is matched to what the first module earned. She kept her per-item budget flat, flagged the two masks that refused to resolve, and finished the section with four minutes to sweep.",
              question: "What does the rise in difficulty usually signal here?",
              options: [
                { id: "a", text: "That she routed upward — placement information, not a verdict" },
                { id: "b", text: "That the platform is malfunctioning" },
                { id: "c", text: "That she should abandon her budget and slow down" },
              ],
              correctOptionId: "a",
              feedback: fb(
                "That she routed upward — placement information, not a verdict",
                "Upper modules are reached by performing well, so a harder module two is usually good news wearing an uncomfortable disguise; the response is a flat budget, flags where needed and the sweep.",
                "The platform simply matched difficulty to Stage 1, and abandoning the budget is exactly the composure loss the misreading produces.",
              ),
              tags: ["toefl", "adaptive"],
            }),
            ex({
              type: "short-answer",
              difficulty: "medium",
              skill: "reading",
              prompt: "In one phrase: according to the lesson, what does saving energy on Stage 1 actually spend?",
              hints: [],
              question: "What does holding back on the routing module cost?",
              acceptedAnswers: ["the branch itself", "the branch", "the routing decision"],
              keywords: ["branch", "routing"],
              feedback: fb(
                "The branch itself",
                "The routing signal is computed from what you actually did, so deliberate restraint on Stage 1 sends a weaker signal and buys a weaker module — the simulation makes the trade visible in one report.",
                "Energy saved never reaches module two intact: it is spent at the branch, where it decides the difficulty of everything after it.",
              ),
              tags: ["toefl", "adaptive"],
            }),
            ex({
              type: "mcq",
              difficulty: "hard",
              skill: "reading",
              prompt: "A candidate treats Stage 1 casually, takes 47% of the raw points, and meets the Lower module. What is the honest reading of the report?",
              hints: [],
              options: [
                { id: "a", text: "The ability was lower all along, and the branch is final" },
                { id: "b", text: "The opening earned the branch — the module still counts, and the next run starts at full routine" },
                { id: "c", text: "The simulation should be restarted until the branch is favourable" },
              ],
              correctOptionId: "b",
              feedback: fb(
                "The opening earned the branch — the module still counts, and the next run starts at full routine",
                "The branch was computed from what was actually done, so the fix is a routine, not a restart: full-effort Stage 1 next time, and the Lower module trained seriously in the meantime.",
                "Nothing about a branch is final and restarting to shop for a favourable one rehearses nothing the real test will offer.",
              ),
              tags: ["toefl", "adaptive"],
            }),
            ex({
              type: "fill-blank",
              difficulty: "easy",
              skill: "reading",
              prompt: "Complete the branch rule.",
              hints: ["The threshold is sixty percent of Stage 1 raw points."],
              sentence: "Score sixty percent or more of the Stage 1 raw points and the ___ module loads; below the line, the Lower module loads instead.",
              acceptedAnswers: ["Upper", "upper"],
              feedback: fb(
                "Upper",
                "The fixed practice threshold reads sixty percent or more upward and everything below it downward — a rule stated openly here precisely because the ETS routing algorithm it stands in for is unpublished.",
                "Lower belongs to the below-the-line side of the rule; swapping the two halves inverts the whole branch.",
              ),
              tags: ["toefl", "adaptive"],
            }),
          ],
          homework: [
            "Run one adaptive simulation this week and write down your Stage 1 raw-point percentage before checking which module loaded.",
            "Write one sentence you will say to yourself when module two turns harder, and rehearse it aloud until it is automatic.",
          ],
        },
      ],
    },
    {
      slug: "toefl-performance",
      title: "Performance reports",
      description:
        "Turning every attempt's data into a dated plan and a defensible booking decision.",
      lessons: [
        {
          slug: "toefl-practice-analysis",
          title: "Reading your performance report",
          description:
            "Every attempt ends in a report: section bands from the practice conversion table, the rounding rule applied to your own numbers, the error taxonomy that names which item types leak, the next-week plan that fixes them, and the stability signal that says a real sitting is worth booking.",
          objectives: [
            "read every field of a post-mock report and say what each one is for",
            "compute your overall band from section bands with the rounding rule",
            "label practice bands honestly as estimates rather than official conversions",
            "turn an error taxonomy into a dated next-week plan",
            "apply the two-mock stability test before booking a real sitting",
          ],
          minutes: 14,
          blocks: [
            {
              type: "lesson-intro",
              text: "A mock that ends at the clock is half a session; the other half is reading. Every sitting on this platform ends in a performance report: section bands, an overall, a comparable legacy figure, per-item explanations and a Focus-next summary. This lesson teaches you to read all of it — compute the overall yourself, sort the errors by item type, and finish with a next-week plan that the following mock can grade.",
              beforeYouStart: [
                "You can compute overall bands with the nearest-half rounding rule.",
                "You know from the fundamentals module what a score report does and does not contain.",
              ],
            },
            {
              type: "table",
              title: "Examination relevance",
              headers: ["Aspect", "This lesson"],
              rows: [
                ["Section", "All four — every section band on a mock report is converted from that section's raw score"],
                ["Task & question types", "The error taxonomy lists them by name, from Complete the Words to academic discussion"],
                ["What is assessed", "The report converts raw performance into practice bands and into an error pattern by item type"],
                ["Why this matters", "Plans built from overall bands alone repeat the same errors; plans built from item-type patterns end them"],
              ],
            },
            { type: "heading", text: "What the report shows" },
            {
              type: "text",
              text: "Four section bands on the one-to-six scale, each converted from that section's raw score by a practice conversion table — honestly labelled as an estimate, because ETS publishes no raw-to-band table for anyone to copy. The overall band is the average of the four, rounded to the nearest half band, computed exactly as on a real report; during the 2026–2028 transition a comparable legacy 0–120 figure is printed alongside it, approximate and labelled as such. Below the bands sit per-item explanations, and a Focus-next summary names the weak areas together with the error pattern each item type shows. Mistakes practice then retrains exactly those items.",
            },
            {
              type: "warning",
              title: "Practice bands are estimates",
              text: "The conversion from your raw score to a band is a practice table, labelled as a practice estimate on every report this platform produces. ETS publishes no raw-to-band conversion, so no platform — this one included — can promise you an official band from a mock. Read mock bands as honest estimates for planning, and expect the real sitting to land near them rather than on them.",
            },
            {
              type: "steps",
              title: "From report to next-week plan",
              intro: "Four moves, in order, every time a report opens.",
              steps: [
                {
                  title: "Verify the overall yourself",
                  text: "Add the four bands, divide by four, and round to the nearer half step before looking at the printed overall — a mismatch means a slip somewhere, and finding it is the point of the check.",
                  examples: [
                    { english: "5.5 + 5.0 + 5.0 + 4.5 = 20.0; 20.0 ÷ 4 = 5.0; the printed overall reads 5.0 and the check closes.", note: "This average landed exactly on a half step, so no rounding was needed.", domain: "study" },
                  ],
                },
                {
                  title: "Read the rounding on your own numbers",
                  text: "Fractions travel to the nearer half step in both directions — the ETS worked example is an average of 5.125 printing as 5.0, and your reports will show the same rule on your own figures.",
                  examples: [
                    { english: "5.5 + 5.0 + 5.0 + 5.0 = 20.5; 20.5 ÷ 4 = 5.125; the overall prints 5.0.", note: "The ETS example on your own numbers: 5.125 sits nearer 5.0 than to 5.5.", domain: "study" },
                  ],
                },
                {
                  title: "Sort errors by item type",
                  text: "Focus next has already grouped them; read the groups rather than the total. Six errors inside one family is a routine problem, while six spread across six families is usually a pacing problem.",
                  examples: [
                    { english: "Focus next: six wrong Listen-to-an-Announcement items, all of them on numbers and times.", note: "A clustered pattern names the drill; a scattered pattern names the clock.", domain: "review" },
                  ],
                },
                {
                  title: "Schedule the retraining and date it",
                  text: "Mistakes practice on every flagged item, drills on the named family, then the next sitting — with its date written down, because a plan without dates is a mood.",
                  examples: [
                    { english: "Monday mistakes practice, Wednesday announcement drills, Saturday the next full mock.", note: "The mock at the end is what grades the plan.", domain: "planning" },
                  ],
                },
              ],
            },
            {
              type: "example",
              title: "Report readings, worked",
              items: [
                { english: "R 5.5, L 5.0, S 5.0, W 4.5 — sum 20.0, average 5.0, overall 5.0 with no rounding needed.", note: "An average that lands on a half step prints exactly as computed.", domain: "study" },
                { english: "R 5.5, L 5.0, S 5.0, W 4.0 — sum 19.5, average 4.875, overall 5.0: the nearer half step is 5.0 at 0.125 away against 0.375.", note: "Nearest-half rounding in the upward direction, the mirror of the ETS example 5.125 → 5.0 in the downward one.", domain: "study" },
                { english: "R 4.5, L 5.0, S 4.5, W 5.0 — sum 19.0, average 4.75, an exact tie between 4.5 and 5.0; the printed overall reads 5.0 and the printed figure is the truth.", note: "Exact ties are rare, and when one lands the report settles it — never argue rounding from memory.", domain: "study" },
                { english: "Overall 5.0 printed, Writing 4.0, requirement 'overall 5.0 with no section below 4.5' — the condition fails on the section floor even though the average clears.", note: "Floors are checked per section; a clearing average rescues nothing that sits below the line.", domain: "education" },
                { english: "Focus next: errors cluster on Listen-and-Choose-a-Response and on sentence reconstruction — so the coming week is mistakes practice plus drills on those two families only.", note: "The taxonomy names the drill; an overall band never could.", domain: "review" },
                { english: "Mock one: R 5.0, L 4.5, S 5.0, W 4.5. Mock two a fortnight later: R 5.0, L 5.0, S 5.0, W 4.5 — stable, no section more than half a band under target, so the real sitting is booked.", note: "Stability across two consecutive full mocks is the readiness signal, not one good day.", domain: "planning" },
              ],
            },
            { type: "heading", text: "The readiness signal" },
            {
              type: "text",
              text: "Readiness is not a feeling and it is not a single good mock. The signal is stability: section bands that hold across two consecutive full mocks, with no section sitting more than half a band below target. One strong sitting proves a good day; two in a row prove a routine. When the signal appears, book the real test; when it does not, the gap between the two reports names exactly what the coming week trains.",
            },
            {
              type: "mistakes",
              title: "Report-reading mistakes corrected",
              items: [
                { wrong: "My mock's 5.5 is the band ETS will hand me.", right: "Mock bands are practice estimates from a labelled conversion table; expect the real sitting to land near them, not on them.", reason: "No platform owns an official raw-to-band conversion because ETS publishes none, so treating an estimate as a promise sets a target the real report was never guaranteed to hit." },
                { wrong: "The overall band tells me what to practise next.", right: "The error taxonomy by item type tells you; the overall only says how the last sitting went.", reason: "An overall is an average of everything and therefore names nothing, while six errors inside one task family is the sentence that writes next week's plan." },
                { wrong: "One strong mock means I am ready, so I will book the test.", right: "Readiness is stability across two consecutive full mocks with no section more than half a band below target.", reason: "A single sitting measures one day; the booking decision needs a routine, and only repetition can show one." },
                { wrong: "The comparable 0–120 figure on the report is an exact conversion.", right: "The legacy figure is approximate and labelled as such — a bridge for receivers still quoting the old scale.", reason: "During the 2026–2028 transition the figure exists for compatibility rather than precision; quoting it as exact transfers the error to whoever reads it." },
              ],
            },
            {
              type: "four-skills",
              title: "One report, four skills",
              reading: {
                text: "A candidate named Lena finished her second full mock, saw the overall print 5.0 — a half step up from the previous sitting — and screenshotted it before reading further. The page she skipped held the actual news: eight of her eleven errors sat inside two task families, and both were families she had never drilled because they felt fine. The overall had risen on the averaging; the error pattern was unchanged, and the third mock repeated it almost item for item.",
                task: "What did the screenshot hide, and which part of the report would have shown it?",
              },
              writing: {
                task: "Write your own next-week plan from your most recent report — or from Lena's if you have sat none yet: the two weakest item families, the mode that retrains each, and the date of the next sitting.",
                guide: [
                  "Quote the report first: name the two item families with their error counts.",
                  "Give each family one session and one mode — mistakes practice, drills or a section test.",
                  "Date every session, and name the day the next mock happens.",
                  "End with the number the next report should move — an item-type error count, not just a band.",
                ],
                model: "The report shows five errors on Listen-to-an-Academic-Talk items and four on sentence reconstruction, clustered on the longest masks. Monday and Wednesday are mistakes practice on those nine items; Friday drills academic-talk detail questions for twenty minutes. The next full mock is booked for Saturday week, and its report will be judged on whether those two error counts fall — the overall band is just the average that follows them.",
              },
              listening: {
                script: "Coach: Read the report in this order. Bands first, but only for thirty seconds — they are the average, and averages name nothing. Then Focus next, which is the actual lesson: it tells you which item types leaked and how. Then the per-item explanations for the flagged ones only. Last, the plan: two families, two sessions, one date. And the readiness rule stands — stability across two consecutive full mocks, no section more than half a band under target. One good mock is a good day. Two in a row is a routine, and routines are what you can book on.",
                task: "In what order does the coach read a report, and what is the readiness rule?",
              },
              speaking: {
                task: "Summarise your latest report aloud in under forty-five seconds: bands, the two leaking families, and the dated plan.",
                frames: [
                  "The sitting printed … , and the overall reads … after rounding.",
                  "Focus next puts my leaks in … and … , which together hold … errors.",
                  "So next week is … on Monday and … on Wednesday.",
                  "The next mock is on … , and it will be judged on … .",
                ],
                checklist: [
                  "Did I quote the report before interpreting it?",
                  "Did I name item families rather than whole sections?",
                  "Did every session get a date and a mode?",
                ],
              },
            },
            {
              type: "table",
              title: "Why this model works",
              headers: ["Aspect", "What the model does"],
              rows: [
                ["Report-first", "Quoting the report before interpreting it keeps the plan anchored to data the platform actually printed."],
                ["Item-type resolution", "Error patterns by task family name the drill, where an overall band averages everything and therefore names nothing."],
                ["Honest labels", "Practice bands and the legacy figure are labelled estimates, so plans rest on what the data can actually support."],
                ["Dated actions", "Every session carries a mode and a date, which is what makes the plan checkable by the next mock."],
                ["Stability rule", "Two consecutive full mocks, no section more than half a band below target — a routine rather than a good day."],
              ],
            },
            {
              type: "table",
              title: "Examination strategy",
              headers: ["Moment", "Do this"],
              rows: [
                ["Before you start", "Fix the reading order — bands, Focus next, flagged explanations, plan — before the report opens."],
                ["While the clock runs", "Nothing to do mid-sitting; the report is produced afterwards, and honest data is the whole reward."],
                ["If you are stuck", "If the taxonomy looks scattered across families, suspect pacing rather than knowledge, and drill the clock instead of the content."],
                ["Final minutes", "Before booking anything, apply the stability test to the last two full mocks — never to the last one alone."],
              ],
            },
            {
              type: "summary",
              points: [
                "Every mock ends in a report: section bands, the overall with the rounding rule, a labelled comparable 0–120 figure, per-item explanations and a Focus-next summary.",
                "Section bands come from a practice conversion table, labelled as estimates — ETS publishes no raw-to-band conversion for anyone to copy.",
                "The overall is the average of the four, rounded to the nearer half step; verify it by hand on every report.",
                "The error taxonomy by item type writes the next-week plan: mistakes practice on flagged items, drills on the named families, a dated next sitting.",
                "Readiness is stability across two consecutive full mocks with no section more than half a band below target — never one good day.",
              ],
            },
            {
              type: "revision",
              title: "Recall check",
              intro: "One item per earlier lesson in the fundamentals module.",
              items: [
                { question: "During 2026–2028, score reports carry…", options: ["A comparable 0–120 figure alongside the bands", "Bands only", "CEFR levels only"], correctIndex: 0, explanation: "A comparable legacy figure is dual-reported through the transition for receivers still quoting the old scale.", from: "toefl-score-reports · Score reports, MyBest and the 0–120 transition" },
                { question: "The overall band is…", options: ["The average of the four sections, rounded to the nearest half band", "The best section band", "The median section band"], correctIndex: 0, explanation: "Average first, then nearest-half rounding — the computation this lesson runs on your own mock numbers.", from: "toefl-band-scale · The 1–6 band scale" },
                { question: "Which two sections adapt in two stages?", options: ["Reading and Listening", "Writing and Speaking", "None of them"], correctIndex: 0, explanation: "The adaptive pair — the simulations rehearsing their shape were the previous lesson's subject.", from: "toefl-adaptive-testing · Adaptive testing: how the test adjusts to you" },
              ],
            },
          ],
          questions: [
            ex({
              type: "mcq",
              difficulty: "medium",
              skill: "reading",
              prompt: "A mock prints R 5.5, L 5.0, S 5.0, W 4.0. What overall should appear on the report?",
              hints: ["Add the bands, divide by four, then take the nearer half step."],
              options: [
                { id: "a", text: "4.5" },
                { id: "b", text: "5.0" },
                { id: "c", text: "5.5" },
              ],
              correctOptionId: "b",
              feedback: fb(
                "5.0",
                "The sum is 19.5 and the average 4.875, which sits 0.125 from 5.0 and 0.375 from 4.5 — the nearer half step is 5.0, the same nearest-half rule the ETS example of 5.125 → 5.0 shows in the other direction.",
                "4.5 rounds away from the nearer half step, and 5.5 would need an average near 5.375 rather than 4.875.",
              ),
              tags: ["toefl", "reports"],
            }),
            ex({
              type: "multi-select",
              difficulty: "medium",
              skill: "reading",
              prompt: "Select every correct statement about mock performance reports.",
              hints: [],
              options: [
                { id: "a", text: "Section bands are converted from raw scores by a practice table, labelled as estimates" },
                { id: "b", text: "The overall is the average of the four, rounded to the nearest half band" },
                { id: "c", text: "Focus next summarises weak areas with error patterns by item type" },
                { id: "d", text: "The comparable 0–120 figure is an exact official conversion" },
              ],
              correctOptionIds: ["a", "b", "c"],
              feedback: fb(
                "Statements a, b and c",
                "The first three statements describe the report exactly as it behaves. The legacy figure is approximate and labelled as such — a bridge for receivers still quoting the old scale — which is why (d) is the invention.",
                "Treating a compatibility figure as an exact conversion transfers the error to whoever reads it, which is why it is labelled on every report.",
              ),
              tags: ["toefl", "reports"],
            }),
            ex({
              type: "read-answer",
              difficulty: "medium",
              skill: "reading",
              prompt: "Read the report extract, then answer.",
              hints: ["A clustered pattern and a scattered pattern name different problems."],
              passageTitle: "Focus next, verbatim",
              passage: "Focus next: eleven errors this sitting. Eight sit in two task families — five on Listen-to-an-Announcement items, all involving numbers and times, and three on sentence reconstruction, all on masks longer than three lines. The remaining three errors are scattered across three other families with no pattern between them. Overall band 5.0, a half step up from the previous sitting.",
              question: "What should the coming week train, and why those targets?",
              options: [
                { id: "a", text: "The two clustered families — because a clustered pattern names a drill, while the scattered three point at pacing" },
                { id: "b", text: "Everything equally, because eleven errors is eleven errors" },
                { id: "c", text: "Nothing — the overall rose, so the plan is working" },
              ],
              correctOptionId: "a",
              feedback: fb(
                "The two clustered families — because a clustered pattern names a drill, while the scattered three point at pacing",
                "Five errors on one family all involving numbers is a routine problem with a named drill; three errors across three families is the signature of a clock problem, not a content problem.",
                "Spreading effort equally ignores where the leaks actually are, and a rising overall can hide an unchanged error pattern — which is exactly what the next mock will expose.",
              ),
              tags: ["toefl", "reports"],
            }),
            ex({
              type: "short-answer",
              difficulty: "medium",
              skill: "reading",
              prompt: "In one phrase: what signal says a real sitting is worth booking?",
              hints: [],
              question: "What must the last two full mocks show before you book the test?",
              acceptedAnswers: ["stability across two consecutive full mocks", "stable bands across two consecutive full mocks", "two consecutive full mocks with no section more than half a band below target"],
              keywords: ["stability", "consecutive", "two"],
              feedback: fb(
                "Stability across two consecutive full mocks",
                "One strong sitting proves a good day; two in a row, with no section more than half a band below target, prove a routine — and routines, unlike good days, are what you can book on.",
                "A single good mock is the classic false positive: it measures one day and says nothing about the next.",
              ),
              tags: ["toefl", "reports"],
            }),
            ex({
              type: "mcq",
              difficulty: "hard",
              skill: "reading",
              prompt: "Lena's overall rose half a band while her error pattern stayed identical. What does that prove?",
              hints: [],
              options: [
                { id: "a", text: "The rise came from the averaging, and the plan must still be written from the taxonomy" },
                { id: "b", text: "She is ready, because the overall is the requirement currency" },
                { id: "c", text: "The report is wrong and should be recomputed" },
              ],
              correctOptionId: "a",
              feedback: fb(
                "The rise came from the averaging, and the plan must still be written from the taxonomy",
                "An overall is an average of everything and names nothing; her third mock repeated the error pattern almost item for item, which is why the plan comes from Focus next rather than from the headline number.",
                "The report is arithmetically sound — the mistake was reading the average as if it were a plan.",
              ),
              tags: ["toefl", "reports"],
            }),
            ex({
              type: "fill-blank",
              difficulty: "easy",
              skill: "reading",
              prompt: "Complete the computation rule.",
              hints: ["Half steps are the units of the scale."],
              sentence: "The overall band is the average of the four section bands, rounded to the nearest ___ band.",
              acceptedAnswers: ["half", "half-band"],
              feedback: fb(
                "half",
                "Nearest-half rounding in both directions — upward from 4.875 to 5.0, downward from 5.125 to 5.0 — is the one computation to run by hand on every mock report.",
                "Whole-band rounding would leave most averages stranded between steps; the scale moves in halves.",
              ),
              tags: ["toefl", "reports"],
            }),
          ],
          assignment: {
            title: "Write your next-week plan",
            instructions:
              "Turn your most recent mock report — or the sample report in this lesson if you have sat none yet — into a next-week plan. Quote the two weakest item families with their error counts, give each family one session and one practice mode, date every session, and name the day of the next sitting together with the number its report should move.",
            minWords: 50,
            maxWords: 200,
          },
          homework: [
            "Open your latest mock report and verify its overall by hand: add the four bands, divide by four, and round to the nearer half step.",
            "Copy the Focus-next summary into your planner and mark which items go to mistakes practice and which to drills, with a date on each.",
          ],
        },
      ],
    },
  ],
};
