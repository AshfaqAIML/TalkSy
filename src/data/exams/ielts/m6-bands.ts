/**
 * Module 6 — Band Score Development (shared by both variants).
 *
 * Structured learning targets for Band 4, 5, 5.5, 6, 6.5, 7, 7.5, 8,
 * 8.5 and 9, using the official assessment criteria. Writing is evaluated
 * on Task Achievement/Response, Coherence & Cohesion, Lexical Resource and
 * Grammatical Range & Accuracy; Speaking on Fluency & Coherence, Lexical
 * Resource, Grammatical Range & Accuracy and Pronunciation.
 *
 * How half bands arise (taught in the overview): examiners award
 * whole-band criterion scores; the task band is their average, so mixed
 * profiles (6,6,7,7) produce 6.5. Each transition lesson therefore trains
 * the criteria that pull a profile UP across the half-band boundary.
 */

import type { ModuleSpec } from "./types";
import { ex, fb } from "./types";

export const module6Bands: ModuleSpec = {
  slug: "module-6-band-development",
  title: "Module 6 — Band Score Development",
  description:
    "Structured learning targets for every band from 4.0 to 9.0: what exactly changes between each level and the next, judged against the official Writing criteria (Task Achievement/Response, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy) and Speaking criteria (Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy, Pronunciation).",
  units: [
    {
      slug: "band-ladder",
      title: "The band ladder",
      description: "Where the half bands come from, and what moves you up each rung.",
      lessons: [
        {
          slug: "ielts-band-ladder-overview",
          title: "The full ladder: targets from Band 4 to Band 9",
          description: "All ten targets (4 · 5 · 5.5 · 6 · 6.5 · 7 · 7.5 · 8 · 8.5 · 9), the four criteria, and how half bands are born.",
          objectives: [
            "Read the public band descriptors as a training manual",
            "Explain how half bands arise from mixed criterion profiles",
            "Locate your own current profile on the ladder",
          ],
          minutes: 15,
          blocks: [
            { type: "heading", text: "Ten targets, one scale" },
            {
              type: "table",
              title: "The complete target ladder",
              headers: ["Band", "User profile (official CEFR-friendly reading)", "Your training headline"],
              rows: [
                ["4.0", "Limited user: basic competence in familiar situations; frequent errors", "Build full-sentence control; eliminate silence"],
                ["5.0", "Modest user: partial command; keeps going despite errors", "Complete every task; stop dropping requirements"],
                ["5.5", "The 'modest-plus' half step", "Even out the four criteria — kill the weakest one"],
                ["6.0", "Competent user: generally effective despite inaccuracies", "Answer everything; connect everything"],
                ["6.5", "The classic university-requirement half step", "Add precision: less common words, complex forms that WORK"],
                ["7.0", "Good user: operational command of complex language", "Effortless flow; flexible language; error-light"],
                ["7.5", "The 'good-plus' half step", "Consistency: reproduce your best on every page"],
                ["8.0", "Very good user: fully operational with rare errors", "Precision and style; natural cohesion"],
                ["8.5", "The 'very-good-plus' half step", "Polish idiom and effortless range"],
                ["9.0", "Expert user: full, precise, fluent command", "Native-like flexibility — the descriptor ceiling"],
              ],
              caption: "Half bands (5.5, 6.5, 7.5, 8.5) are not separate descriptors — they appear when your criterion scores average between two whole bands.",
            },
            { type: "heading", text: "Where half bands come from" },
            {
              type: "grammar-rule",
              title: "Criterion averaging",
              rule: "Writing and Speaking responses get a whole-band score on EACH criterion. The task band is the average of the four criterion scores — so a profile of 6, 6, 7, 7 averages 6.5. You never 'train the half band'; you lift one or two weak criteria so the average crosses the boundary.",
              explanation:
                "This is why the transition lessons work on the weakest criterion first. Raising one 6 to a 7 converts 6.5 into 7.0; leaving it alone caps you at 6.5 forever.",
              examples: [
                { english: "Writing criteria 7, 6.5→ whole-band equivalents 7, 7, 6, 6 → task band 6.5", translation: "7, 7, 6, 6 → tarea 6.5" },
                { english: "Speaking profile 7, 7, 7, 6 → 6.75 → reported 6.5 (rounded to the nearest half DOWN only in the task band, since 6.75 is closer to 7.0 — check each section's rounding with your mock report)", translation: "Los mocks de EnglishPath muestran el promedio exacto por criterio." },
              ],
              exceptions: ["Section bands on the TRF (L/R/W/S) can be any half band; the OVERALL band averages the four sections and rounds .25/.75 up."],
            },
            { type: "heading", text: "The two criteria sets" },
            {
              type: "table",
              title: "Writing vs Speaking descriptors",
              headers: ["Writing", "Speaking"],
              rows: [
                ["Task Achievement (T1) / Task Response (T2)", "Fluency and Coherence"],
                ["Coherence and Cohesion", "Lexical Resource"],
                ["Lexical Resource", "Grammatical Range and Accuracy"],
                ["Grammatical Range and Accuracy", "Pronunciation"],
              ],
              caption: "Three of the four writing criteria have speaking twins. Train them together and the habits transfer.",
            },
            {
              type: "note",
              title: "Read your own report like an examiner",
              text: "Every EnglishPath mock report shows section bands, the objective raw score and the rubric-graded writing/speaking feedback with per-criterion comments. Map each criterion comment onto this ladder: the lesson to study next is the transition lesson one rung above your weakest criterion.",
            },
            {
              type: "example",
              title: "One idea, three bands (what the ladder looks like on the page)",
              items: [
                { english: "Band 5: Public transport is very important because many people use it every day and it is good for the city.", note: "Adequate meaning, generic vocabulary, no precision — the 'modest' profile.", domain: "travel" },
                { english: "Band 7: Reliable public transport determines whether a city functions: commuters abandon cars only when the alternative is genuinely dependable.", note: "Precise lexis, a clear claim, error-free complex sentence — 'operational command'.", domain: "travel" },
                { english: "Band 9: Public transit is less a service a city offers than a habit it makes possible — and habits, once priced correctly, outlast any subsidy.", note: "Natural, idiomatic, effortless argument — the descriptor ceiling.", domain: "travel" },
                { english: "Band 4: I study English in internet because is easy and I can study in night when I finish my job.", note: "The rung below the trio above: meaning strains under frequent simple-form errors — a dropped subject ('because is easy') and an invented preposition ('in night') — the 'limited user' profile this ladder starts from.", domain: "education" },
                { english: "Band 6: Online study suits people with busy lives because the material is available at any time, although many students miss the support of a real classroom.", note: "A concession and a complex sentence both WORK, with errors that never block meaning — 'generally effective despite inaccuracies', the competent-user rung one step above 5.", domain: "education" },
                { english: "Band 8: For working adults, the real advantage of online study is control, not convenience: the material waits for the learner, while a classroom timetable never does.", note: "Broad, precise lexis carrying its own contrast, and cohesion done by the colon and 'while' instead of linkers — 'fully operational', one rung below the ceiling.", domain: "education" },
              ],
            },
            {
              type: "mistakes",
              title: "Errors that pin whole profiles low — wrong, repaired, and the criterion that prices it",
              items: [
                { wrong: "Public transport is very important for the people because is cheap and is very fast and the people can go to everywhere.", right: "Public transport matters because it is affordable and reliable, so people can reach most places without a car.", reason: "Grammatical Range & Accuracy plus Lexical Resource: a dropped subject ('because is cheap') and recycled 'very + adjective' pairs are frequent errors in simple forms — that error density averages two criteria at 5 and drags the task band down with them." },
                { wrong: "Task 2: 'I agree that cars should be banned from city centres. But also many people need cars. So both views are correct and I cannot decide.'", right: "One position, stated in the introduction, defended in each body paragraph, restated in the conclusion.", reason: "Task Response: Band 5 'addresses the task only partially' and a wobbling position is its signature — fixing the position costs no new language and lifts the criterion a full rung." },
                { wrong: "Cars are bad. Moreover, cars are expensive. Moreover, the traffic is bad. Moreover, people should use buses.", right: "Private cars impose three costs on cities. This burden falls hardest on commuters, which is why better bus services are the first step.", reason: "Coherence & Cohesion: a linker used as decoration while the noun repeats ('cars… cars… traffic') leaves cohesion mechanical, at Band 5–6; the reference chain ('this burden') is the exact device the ladder trains rung by rung." },
                { wrong: "I am agree with this statement.", right: "I agree with this statement.", reason: "Grammar: 'agree' is already a verb in English, so 'am agree' is a form error, not a politeness marker — one such slip per paragraph is enough to hold Grammatical Range & Accuracy at 5 while every other criterion sits at 6, which is precisely how a 5.5 is born." },
              ],
            },
            {
              type: "summary",
              points: [
                "The ladder has ten usable targets (4.0–9.0); half bands are born when your four criterion scores average between two whole bands.",
                "You never train a half band directly — you lift your weakest criterion until the average crosses the boundary.",
                "Writing and Speaking share three of four criteria families: Lexical Resource and Grammar appear in both; train the twins together.",
                "Read every mock report per criterion, not per band: the weakest criterion names the transition lesson to study next.",
                "Overall band = average of the four section bands, rounded to the nearest half with .25/.75 rounded up.",
              ],
            },
          ],
          questions: [
            ex({
              type: "mcq",
              difficulty: "medium",
              skill: "writing",
              prompt: "Your writing criterion scores are 7, 7, 6, 6. What is your task band, and what is the cheapest way to reach 7.0?",
              hints: ["Average the four criteria; then find the weak pair."],
              options: [
                { id: "a", text: "6.5; lift one of the two 6s to a 7 — the average then clears 6.75+." },
                { id: "b", text: "7.0 already; nothing to do." },
                { id: "c", text: "6.0; you must raise all four criteria at once." },
              ],
              correctOptionId: "a",
              feedback: fb(
                "6.5; lift one of the 6s.",
                "(7+7+6+6)/4 = 6.5. Raise ONE weak criterion to 7 → (7+7+7+6)/4 = 6.75 → rounds up to 7.0 in the task band on many forms — and in every case it lifts your ceiling. Training the weakest criterion is the highest-leverage move in IELTS.",
              ),
              tags: ["bands", "half-bands", "averaging"],
            }),
            ex({
              type: "match",
              difficulty: "easy",
              skill: "reading",
              prompt: "Match the band to its official-style profile.",
              leftItems: [
                { id: "l1", text: "5.0 — Modest user" },
                { id: "l2", text: "6.0 — Competent user" },
                { id: "l3", text: "7.0 — Good user" },
                { id: "l4", text: "9.0 — Expert user" },
              ],
              rightItems: [
                { id: "r1", text: "Operational command of complex language, occasional inaccuracies" },
                { id: "r2", text: "Full, precise, fluent command with complete understanding" },
                { id: "r3", text: "Partial command; copes with overall meaning in most situations" },
                { id: "r4", text: "Generally effective despite some inaccuracies; uses complex forms fairly well" },
              ],
              pairs: [
                { leftId: "l1", rightId: "r3" },
                { leftId: "l2", rightId: "r4" },
                { leftId: "l3", rightId: "r1" },
                { leftId: "l4", rightId: "r2" },
              ],
              hints: ["Match the strongest language to 9.0 and the most hedged to 5.0."],
              feedback: fb(
                "5→partial; 6→generally effective; 7→operational with occasional errors; 9→full precise command.",
                "Knowing the profiles lets you sanity-check your mock estimates: if your report says 7 but your writing 'generally holds together with occasional breakdowns', you are looking at 6 behavior.",
              ),
              tags: ["bands", "profiles"],
            }),
          ],
          homework: [
            "Open your latest mock report and write your four writing criteria as numbers; average them by hand.",
            "Circle your single weakest criterion — that decides which transition lesson (below) is yours.",
          ],
        },
        {
          slug: "ielts-band-4-to-5",
          title: "Band 4 → 5: from limited to modest",
          description: "What improvement is needed at every criterion to move off Band 4.",
          objectives: [
            "Recognise the Band 4 signatures in your own work",
            "Apply the specific 4→5 upgrades for Writing and Speaking",
            "Self-check against the 4→5 checklist",
          ],
          minutes: 14,
          blocks: [
            { type: "heading", text: "What Band 4 looks like" },
            {
              type: "text",
              text: "Band 4 writing attempts the task but much of the content is thin, irrelevant or hard to follow; organisation is barely visible; vocabulary is extremely basic and repeated; even simple structures carry frequent errors. Band 4 speaking: frequent long pauses, simple connected speech only, meaning often collapses. If your mock report uses words like 'attempted', 'limited', 'frequent errors that impede meaning' — this is your rung.",
            },
            { type: "heading", text: "The 4→5 upgrades, criterion by criterion" },
            {
              type: "table",
              title: "Writing: Band 4 → Band 5",
              headers: ["Criterion", "Band 4 signature", "Band 5 target — train THIS"],
              rows: [
                ["Task Achievement/Response", "Task barely addressed; content drifts", "Address EVERY bullet/requirement at least once — coverage beats depth at this rung"],
                ["Coherence & Cohesion", "No visible paragraph logic", "One idea per paragraph, in a fixed order: intro → body 1 → body 2 → conclusion"],
                ["Lexical Resource", "The same twenty words recycled", "Learn 30 topic words for YOUR common topics and force yourself to use them"],
                ["Grammar", "Simple sentences that still fail", "Get simple sentences RIGHT first: subject–verb agreement, one tense per sentence, full stops"],
              ],
              caption: "At this rung accuracy of SIMPLE forms matters more than complexity. Complexity built on error stays at 4.",
            },
            {
              type: "table",
              title: "Speaking: Band 4 → Band 5",
              headers: ["Criterion", "Band 4 signature", "Band 5 target"],
              rows: [
                ["Fluency & coherence", "Silence, word searches", "Keep going: memorised linkers (and then / so / because) to chain any three sentences"],
                ["Lexical Resource", "Freezes on missing words", "Paraphrase habit: 'it's a thing you use for…' instead of stopping"],
                ["Grammar", "Fragments", "Whole sentences, even short ones, in a steady tense"],
                ["Pronunciation", "Often unintelligible", "Slow down 20%; finish every word ending (-ed, -s, -th)"],
              ],
            },
            {
              type: "warning",
              title: "The trap at this rung",
              text: "Learners at 4→5 try to impress with long memorised sentences and fail harder: memorised material collapses under real questions. The rung is won with SHORT, correct, connected sentences — then complexity is added at 5→6.",
            },
            {
              type: "example",
              title: "The same answer, before and after the 4→5 repair",
              items: [
                { english: "Band 4 attempt: My city have many traffic and people is go to work with car so the air is not good.", note: "Drifts, agreement breaks, vocabulary exhausted — attempted, not achieved.", domain: "travel" },
                { english: "Band 5 repair: My city has heavy traffic. Many people drive to work alone, so the air quality is poor. Buses are cheap, but they are slow.", note: "Short, correct, connected: one idea per sentence, steady tense, topic words (traffic, air quality).", domain: "travel" },
                { english: "Band 6: Although many commuters still drive, cities that invest in reliable bus services usually see cleaner air and quieter streets, because every new passenger is one fewer car journey.", note: "One band above the target: a concession and a relative clause both land error-free, and 'one fewer car journey' adds the precision Band 5 does not attempt yet — the direction the next rung takes.", domain: "travel" },
                { english: "Band 4 attempt: My mother cook very good and I am liking so much eat with my family in the Sunday.", note: "The same ladder, a second idea: agreement breaks ('mother cook'), a state verb forced into the continuous ('am liking') and an invented preposition ('in the Sunday') — the idea survives, the sentences cannot carry it.", domain: "food" },
                { english: "Band 5 repair: My mother cooks very well. Our family eats together on Sundays, and I always enjoy the meal.", note: "Nothing clever added — only control: one idea per sentence, one steady tense, and topic words (cooks, meal) replacing gestures. This is the whole 4→5 upgrade.", domain: "food" },
                { english: "Band 6: Sunday lunch is the one meal my family never misses: my mother starts cooking in the morning, and by noon the whole flat smells of it.", note: "One band above: the colon and the 'it' reference chain hold three ideas in two sentences with zero errors — 'generally effective' complexity, which is exactly what 4→5 must not rush towards.", domain: "food" },
              ],
            },
            {
              type: "mistakes",
              title: "The errors that pin writing and speaking at Band 4 — wrong, fixed, criterion cost",
              items: [
                { wrong: "My city have many traffic and the people is go to work with car.", right: "My city has heavy traffic, and many people drive to work.", reason: "Grammatical Range & Accuracy: 'have' after a singular subject, 'many traffic' (uncountable) and 'is go' are frequent errors in SIMPLE forms — the Band 4 signature; accurate simple sentences are the entire 4→5 upgrade, complexity can wait." },
                { wrong: "Yesterday I am going to the market and buy some vegetable.", right: "Yesterday I went to the market and bought some vegetables.", reason: "One event, two tenses ('am going' + 'buy') and a missing plural: Band 5 requires one timeline per sentence and parallel verb forms — tense control, not vocabulary, is what this criterion scores at this rung." },
                { wrong: "A Task 1 letter that answers two of the three bullet points, beautifully.", right: "A shorter letter that touches every bullet at least once.", reason: "Task Achievement: Band 5 addresses ALL parts of the task; Band 4 'attempts' it — the criterion scores coverage first, so a polished half-answer still reads as half an answer." },
                { wrong: "Speaking Part 1: [eight seconds of silence] … bus? … transport? … good.", right: "Speaking Part 1: 'The buses in my city are — how do you say — the price is low, and many people use them every day.'", reason: "Fluency & Coherence: long pauses and word-search freezes are the Band 4 profile; the paraphrase habit ('how do you say — the price is low') keeps the turn alive, and a live turn is what Band 5 scores." },
              ],
            },
            {
              type: "summary",
              points: [
                "Band 4 signatures: partial coverage, no visible organisation, extremely basic repeated vocabulary, frequent errors even in simple sentences.",
                "The 4→5 writing upgrade is coverage and order: touch every requirement, one idea per paragraph, a fixed intro–body–conclusion shape.",
                "The 4→5 speaking upgrade is keeping going: memorised linkers to chain sentences, paraphrase instead of freezing, whole sentences in a steady tense.",
                "At this rung, accuracy of SIMPLE forms beats complexity — complexity built on error stays at 4.",
                "Finish every word ending (-ed, -s, -th) and slow down 20%: intelligibility is the pronunciation criterion at this level.",
              ],
            },
          ],
          questions: [
            ex({
              type: "mcq",
              difficulty: "medium",
              skill: "writing",
              prompt: "At the 4→5 rung, which priority is correct?",
              hints: ["What does the ladder table say about accuracy vs complexity?"],
              options: [
                { id: "a", text: "Build impressive complex sentences immediately." },
                { id: "b", text: "Get simple sentences right first; cover every task requirement; add topic vocabulary." },
                { id: "c", text: "Write longer answers — length lifts the band." },
              ],
              correctOptionId: "b",
              feedback: fb(
                "Simple accuracy + full coverage + topic vocabulary.",
                "Length never lifts a band; accuracy of simple forms does. Complexity comes at 5→6, on top of control.",
              ),
              tags: ["bands", "4-to-5"],
            }),
            ex({
              type: "correct-mistake",
              difficulty: "easy",
              skill: "grammar",
              prompt: "Fix the Band-4-style sentence.",
              incorrectSentence: "Yesterday I go to the market and buying vegetable.",
              acceptedAnswers: ["Yesterday I went to the market and bought vegetables", "yesterday i went to the market and bought vegetables", "Yesterday I went to the market and bought some vegetables"],
              hints: ["One tense for yesterday; parallel verbs."],
              feedback: fb(
                "Yesterday I went to the market and bought vegetables.",
                "One timeline, one subject, matching verb forms: this triple-control is exactly the 4→5 writing habit.",
              ),
              tags: ["grammar", "4-to-5"],
            }),
          ],
          homework: [
            "Write five sentences about your weekend; check each for one tense, subject–verb agreement, and a full stop.",
            "Record 60 seconds about your day using only simple sentences spoken slowly and correctly.",
          ],
        },
        {
          slug: "ielts-band-5-to-6",
          title: "Band 5 → 6: from modest to competent",
          description: "The rung most test takers need: complete the task, connect the ideas, extend the language.",
          objectives: [
            "Diagnose 5.0 signatures (partial coverage, mechanical links, repetition)",
            "Apply the 5→6 upgrades per criterion",
            "Know the difference a linking habit makes",
          ],
          minutes: 14,
          blocks: [
            { type: "heading", text: "What separates 5 from 6" },
            {
              type: "text",
              text: "Band 5 does the task PARTIALLY: some bullets missed, positions that wobble, links that fail ('and…and and'), vocabulary adequate but repetitive, complex sentences attempted and usually broken. Band 6 addresses the task, organises visibly, links mechanically but recognisably, and mixes simple with some successful complex forms. The gap is completion and connection, not brilliance.",
            },
            {
              type: "table",
              title: "Writing: Band 5 → Band 6",
              headers: ["Criterion", "Train this"],
              rows: [
                ["Task Achievement/Response", "A checklist pass over the prompt before writing: every bullet / both sides of the discussion / a position that stays fixed"],
                ["Coherence & Cohesion", "Reference chains: 'this approach / such changes / it' instead of repeating the noun; linkers by FUNCTION (adding, contrasting, resulting) not at random"],
                ["Lexical Resource", "Two words per idea: 'big' becomes significant/substantial; 'good at' becomes skilled/competent; collocations over single words"],
                ["Grammar", "Three reliable complex patterns you OWN: relative clause (which…), conditional (if…, …), concession (although…) — deploy each once per task"],
              ],
              caption: "Band 6 = every requirement touched + every paragraph purposeful + three complex patterns that work.",
            },
            {
              type: "table",
              title: "Speaking: Band 5 → Band 6",
              headers: ["Criterion", "Train this"],
              rows: [
                ["Fluency & coherence", "Length without stalling: the three-layer Part 1 answer and four-corner Part 2; linkers used by function"],
                ["Lexical Resource", "Topic vocabulary deployed live (cities: commute, congestion, outskirts); paraphrase when a word fails"],
                ["Grammar", "Same three owned patterns, spoken; self-correct fast and move on ('…or rather, most of them')"],
                ["Pronunciation", "Sentence stress on the KEY word; chunking into thought groups instead of word-by-word delivery"],
              ],
            },
            {
              type: "note",
              title: "The mechanical-link ceiling",
              text: "Many candidates stall at 6.0 for years because 'Firstly, Secondly, Moreover' is doing their cohesion for them. That is exactly what the 6.5→7 lesson repairs: natural reference and progression. Get the mechanical set working at 6 first — it is the scaffolding, not the building.",
            },
            {
              type: "example",
              title: "The 5→6 repair on one paragraph",
              items: [
                { english: "Band 5: Cars are bad. Moreover, cars are expensive. Moreover, the traffic is bad. Moreover, people should use buses.", note: "Mechanical links, repeated noun, no position development — the 'partial command' profile.", domain: "travel" },
                { english: "Band 6: Private cars impose three costs on cities: congestion, pollution and space. This burden falls hardest on commuters, which is why improved bus services, such as dedicated lanes, are the most practical first step.", note: "Reference chain ('this burden'), linkers by function, three owned complex patterns working — 'generally effective'.", domain: "travel" },
                { english: "Band 7: Whatever the upfront cost of dedicated bus lanes, they earn it back within a few years — and unlike new roads, which simply attract more traffic, a dependable network keeps the passengers it wins.", note: "One band above the target: cohesion has left the linkers entirely (a concessive opener, 'unlike…, which…') and the lexis is less common but precise ('earn it back', 'dependable') — error-free flexibility, the 6→7 direction.", domain: "travel" },
                { english: "Band 5: Exams are stress for the students. Moreover, some students are not good in the exams but they are clever. Moreover, exams is not the only way to check the students.", note: "The 5→6 gap in a second idea: 'Moreover' regardless of function, the noun 'exams' in every sentence, an agreement slip ('exams is') — meaning survives, the band does not climb.", domain: "education" },
                { english: "Band 6: Exams create real pressure, and they reward students who can memorise quickly. However, such skills do not always reflect genuine understanding, which is why many schools now combine exams with coursework.", note: "The repair, same idea: 'such skills' is the reference chain, 'however' now carries contrast (a function, not a habit), and the relative clause works — the 'generally effective' profile.", domain: "education" },
                { english: "Band 7: An exam measures what a student can recall alone, under pressure, in two hours — which is one narrow slice of ability, and arguably not the most important one.", note: "One band above: precision ('one narrow slice of ability'), hedging used naturally ('arguably') and cohesion carried by the dash — the rung the 6→7 lesson trains towards.", domain: "education" },
              ],
            },
            {
              type: "mistakes",
              title: "The errors that keep a 5 profile at 5 — wrong, fixed, criterion cost",
              items: [
                { wrong: "A Task 2 answer that covers one side of the discussion well and never mentions the other.", right: "Both sides addressed — even briefly — with one position held from introduction to conclusion.", reason: "Task Response: Band 5 'addresses the task only partially'; a brilliant half-answer scores as half an answer, capping the criterion no matter how strong the language is." },
                { wrong: "Moreover, cars are expensive. Moreover, the traffic is bad. Moreover, people should use buses.", right: "Private cars impose three costs on cities. This burden falls hardest on commuters, which is why better bus services are the first step.", reason: "Coherence & Cohesion: a linker repeated regardless of function is exactly 'mechanical' linking — the Band 5–6 ceiling; the reference chain ('this burden') is the specific device this lesson installs." },
                { wrong: "Pollution is a very big problem in the big cities and it is very bad for the health of the people.", right: "Pollution is a serious problem in major cities and a genuine threat to public health.", reason: "Lexical Resource: 'big / bad / very' recycled is 'adequate but repetitive' — the Band 5 wording; two words per idea (serious, genuine threat) is the 5→6 upgrade." },
                { wrong: "If the government will build more bus lanes, the traffic would be better.", right: "If the government built more bus lanes, traffic would improve.", reason: "Grammatical Range & Accuracy: a conditional attempted and broken ('will' + 'would') is the Band 5 profile of complex forms; at Band 6 the three owned patterns — this one included — come out error-free once each per task." },
              ],
            },
            {
              type: "summary",
              points: [
                "Band 5 does the task partially: missed bullets, wobbling positions, mechanical links, repetitive vocabulary; Band 6 completes and connects.",
                "The task upgrade is a checklist pass over the prompt before writing: every bullet, both sides, one fixed position.",
                "The cohesion upgrade is reference chains (this approach / such changes / it) and linkers chosen by function, not habit.",
                "The vocabulary upgrade is two words per idea (big → significant/substantial) and collocations over single words.",
                "Grammar at 6 means three complex patterns you own — relative clauses, conditionals, concessions — deployed once each per task.",
                "Mechanical linkers are the scaffolding of 6, not the building of 7: they get you here and cap you here.",
              ],
            },
          ],
          questions: [
            ex({
              type: "mcq",
              difficulty: "medium",
              skill: "writing",
              prompt: "A Task 2 answer covers one side of the discussion well, ignores the other side, and repeats 'important' six times. Its most likely ceiling is…",
              hints: ["Partial coverage caps the task criterion."],
              options: [
                { id: "a", text: "8.0 — the language might be strong." },
                { id: "b", text: "Around 5.0–5.5: partial task coverage and repetitive vocabulary cap it regardless of the strong parts." },
                { id: "c", text: "9.0 if there are no grammar errors." },
              ],
              correctOptionId: "b",
              feedback: fb(
                "Around 5.0–5.5.",
                "Task Response at 5 = 'addresses the task only partially'. A brilliant half-answer still scores as half an answer. Coverage first, style later.",
              ),
              tags: ["bands", "5-to-6", "task-response"],
            }),
            ex({
              type: "fill-blank",
              difficulty: "medium",
              skill: "writing",
              prompt: "Reference-chain practice: replace the repetition.",
              sentence: "Many cities ban cars from the centre. ___ measure reduces noise. ( ONE WORD — a referencing word that points back.)",
              acceptedAnswers: ["This", "Such"],
              hints: ["Which single word points back to the whole previous idea?"],
              feedback: fb(
                "This / Such",
                "'This measure…' / 'Such a policy…' replace the noun and create the progression that mechanical linkers cannot. This habit is the 6→7 bridge in Coherence & Cohesion.",
              ),
              tags: ["cohesion", "reference"],
            }),
          ],
          homework: [
            "Take one old Task 2 draft; mark every repeated noun and replace two of them with references (this/such + category noun).",
            "List your three OWNED complex patterns; deliberately use all three in your next writing assignment on the platform.",
          ],
        },
        {
          slug: "ielts-band-6-to-7",
          title: "Band 6 → 7: from competent to good — the classic jump",
          description: "The most-demanded transition in IELTS: precision, natural cohesion, and complex language that actually works.",
          objectives: [
            "Contrast 6 and 7 descriptor language precisely",
            "Train the three 6→7 levers: flexible cohesion, less-common vocabulary, error-light complexity",
            "Convert mechanical habits into natural ones",
          ],
          minutes: 16,
          blocks: [
            { type: "heading", text: "The exact wording gap" },
            {
              type: "table",
              title: "Band 6 vs Band 7 descriptors side by side",
              headers: ["Criterion", "Band 6 says…", "Band 7 says…"],
              rows: [
                ["Task Response (T2)", "addresses the task; position present but development may be uneven", "clear position throughout, extended and supported"],
                ["Coherence & Cohesion", "links sometimes mechanical", "logical progression throughout; flexible use of linkers"],
                ["Lexical Resource", "adequate range; errors in word choice/collocation noticeable", "uses less common items, some idioma; occasional errors only"],
                ["Grammar", "mix of simple and complex; errors exist but meaning clear", "variety of complex structures; FREQUENT error-free sentences"],
              ],
              caption: "Read the two columns aloud: the 7 column adds three words — throughout, flexible, frequent. The jump is consistency, not new grammar.",
            },
            {
              type: "heading", text: "Lever 1: cohesion that cannot be noticed" },
            {
              type: "text",
              text: "At 6, linkers are visible ('Moreover, However'). At 7, cohesion disappears into the prose: referencing (this argument, such measures, the latter), ellipsis ('and, if so, why'), and paragraphs that open by advancing the argument rather than announcing a topic. Test: read only the first sentence of each paragraph — if they do not form a logical chain by themselves, the progression is 6, not 7.",
            },
            { type: "heading", text: "Lever 2: less common vocabulary, used precisely" },
            {
              type: "table",
              title: "Upgrades that examiners actually see",
              headers: ["Band 6 phrase", "Band 7+ replacement"],
              rows: [
                ["very important", "pivotal / a decisive factor"],
                ["a lot of people", "a substantial share of the population"],
                ["good for the economy", "a catalyst for economic growth"],
                ["bad for health", "detrimental to health"],
                ["solve the problem", "address / mitigate the issue"],
              ],
              caption: "Choose six upgrades for YOUR recurring topics and rehearse them until they surface under pressure. Precision beats rarity: a misused 'albeit' costs more than a correct 'although'.",
            },
            { type: "heading", text: "Lever 3: error-free frequency" },
            {
              type: "text",
              text: "The 7 descriptor does not say 'no errors'; it says frequent error-free sentences. That is a rate you can train: keep an error log (Module 7), find your top three error types, and re-check ONLY those during the final two minutes of every practice task. Three error types typically cause 80% of the damage — agreement, articles, and word form.",
            },
            {
              type: "warning",
              title: "Why most candidates stall at 6.5",
              text: "They train new impressive language instead of fixing consistency: the seventh-band answer is the sixth-band answer made reliable. Every mock report's criterion comments name your inconsistency — that list IS your 7.0 study plan.",
            },
            {
              type: "example",
              title: "The 6→7 levers applied to one sentence",
              items: [
                { english: "Band 6: Many people think that the government should give more money to public transport because it is very important for the environment.", note: "Mechanical structure ('many people think that'), generic vocabulary ('give more money', 'very important') — adequate but capped.", domain: "travel" },
                { english: "Band 7: Given that transport accounts for a substantial share of urban emissions, redirecting fuel taxes toward public transit would target the problem at its source.", note: "Flexible cohesion ('given that', 'at its source'), less-common precise lexis ('redirecting', 'substantial share', 'urban emissions'), error-free complexity.", domain: "travel" },
                { english: "Band 8: Redirecting fuel taxes toward public transit would attack urban emissions at their source — and, crucially, the money would follow the commuter rather than the car.", note: "One band above the target: the dash carries the argument without a linker, 'crucially' is native-like emphasis, and 'the commuter rather than the car' persuades through parallelism — style joining accuracy, which is the 7→8 increment.", domain: "travel" },
                { english: "Band 6: Many children use smartphones every day. This is good because they can learn many things, but it is also bad for their eyes and their study.", note: "A second idea, same gap: the sentences are error-free but the argument's vocabulary is generic ('good / bad / many things') — accuracy without precision still caps Lexical Resource at 6.", domain: "technology" },
                { english: "Band 7: Smartphones give children instant access to information, yet the same devices fragment the attention that learning depends on — a trade-off that parents, not manufacturers, are left to manage.", note: "The three levers in one sentence: 'fragment' and 'trade-off' are less-common items used precisely, the dash replaces a signpost word, and every sentence is error-free complex — 'operational command'.", domain: "technology" },
                { english: "Band 8: A child's attention is the one resource the app economy never pays for — which is why 'later, not never' is the argument that keeps winning with parents.", note: "One band above: idiomatic precision ('the app economy never pays for', 'later, not never') with the register carried in rhythm rather than vocabulary — effortless range that 7 reaches only sometimes.", domain: "technology" },
              ],
            },
            {
              type: "mistakes",
              title: "The errors that stall a profile at 6.5 — wrong, fixed, criterion cost",
              items: [
                { wrong: "The government should make a plethora of investments for ameliorate the public transport.", right: "The government should invest heavily in improving public transport.", reason: "Lexical Resource: Band 7 wants less-common items used ACCURATELY — 'a plethora of investments for ameliorate' is rare lexis in broken grammar, and a misused rarity costs more than a correct common word." },
                { wrong: "Prices rose. Moreover, demand fell. However, supply stayed flat. In addition, costs climbed.", right: "Prices rose throughout the period. This trend, compounded by falling demand, left suppliers little room to manoeuvre.", reason: "Coherence & Cohesion: signpost words doing all the linking are 'mechananical' cohesion — the Band 6 ceiling; referencing ('this trend', 'compounded by') is the flexible device 7 is scored on." },
                { wrong: "Every countries have it's own tradition which are important for the people which live there.", right: "Every country has its own traditions, which matter to the people who live there.", reason: "Grammatical Range & Accuracy: three error types in one sentence (agreement, its/it's, 'which' for people) is the error density that holds the criterion at 6 — Band 7 requires frequent error-FREE sentences." },
                { wrong: "Introduction: 'I completely agree.' Conclusion: 'Both views have merit, so it is impossible to decide.'", right: "One position in the introduction, developed in every body paragraph, restated in the conclusion.", reason: "Task Response: 7 demands 'a clear position throughout' — a conclusion that abandons the introduction's position caps the criterion at 6 whatever the language does." },
              ],
            },
            {
              type: "summary",
              points: [
                "The 6→7 jump is consistency, not new grammar: the 7 descriptors add 'throughout', 'flexible' and 'frequent' to the 6 descriptors.",
                "Lever 1 — cohesion that cannot be noticed: referencing, ellipsis and paragraph openers that advance the argument instead of announcing a topic.",
                "Lever 2 — less common vocabulary used precisely: six rehearsed upgrades for your recurring topics beat a dictionary of misused rarities.",
                "Lever 3 — error-free frequency: log your top three error types (typically agreement, articles, word form) and re-check only those in the final two minutes.",
                "Why 6.5 stalls: candidates train impressive new language instead of making the 6-level answer reliable on every page.",
              ],
            },
          ],
          questions: [
            ex({
              type: "mcq",
              difficulty: "hard",
              skill: "writing",
              prompt: "Which sentence pair shows 7-level Coherence & Cohesion rather than 6?",
              hints: ["Look for cohesion that does not rely on signpost words."],
              options: [
                { id: "a", text: "'Prices rose. Moreover, demand fell. However, supply stayed flat.'" },
                { id: "b", text: "'Prices rose throughout the period. This trend, compounded by falling demand, left suppliers little room to manoeuvre.'" },
                { id: "c", text: "'Prices rose and also demand fell and also supply stayed flat.'" },
              ],
              correctOptionId: "b",
              feedback: fb(
                "The referencing version (b).",
                "'This trend' + 'compounded by' weave ideas together without a single signpost word — flexible cohesion is the 7 signature. Option (a) is the mechanical 6; option (c) is a 5.",
              ),
              tags: ["bands", "6-to-7", "cohesion"],
            }),
            ex({
              type: "short-answer",
              difficulty: "hard",
              skill: "writing",
              prompt: "Error-log thinking.",
              question: "Name the three most common error types this lesson says cause most of the damage. (Three words.)",
              acceptedAnswers: ["agreement, articles, word form", "agreement articles word form", "subject-verb agreement, articles, word formation"],
              keywords: ["agreement", "articles"],
              hints: ["One is about matching; one is about a/an/the; one is about -tion/-ive endings."],
              feedback: fb(
                "Agreement, articles, word form.",
                "Your personal top three may differ — the method is what counts: log errors, find the top three, re-check only those in the final minutes.",
              ),
              tags: ["bands", "error-log", "6-to-7"],
            }),
          ],
          homework: [
            "Read only the first sentences of your last essay's paragraphs: do they chain? Rewrite two openers so they advance the argument.",
            "Choose six vocabulary upgrades for your common topics and use all six in your next Writing Studio assignment.",
          ],
        },
        {
          slug: "ielts-band-7-to-8",
          title: "Band 7 → 8: from good to very good",
          description: "Consistency becomes style: effortless flow, broad precise lexis, and sentences that never stumble.",
          objectives: [
            "Identify what 'very good user' adds over 'good user'",
            "Train the 8-level hallmarks: natural idiomatic range, sophisticated cohesion, wide flexible grammar",
            "Understand why 8 is rare and what that means for your plan",
          ],
          minutes: 14,
          blocks: [
            { type: "heading", text: "The 8 signature" },
            {
              type: "text",
              text: "Band 8 writing covers all requirements with well-developed support; sequences smoothly with cohesion used so well it is invisible; deploys broad, precise, often idiomatic vocabulary with only rare slips; and shows a wide range of structures with errors only as rare mistakes. Band 8 speaking flows smoothly with little searching; pronunciation carries a full range of features; language is used flexibly on any topic. In one line: 8 = 7 made effortless and consistent across the WHOLE performance, not the best half of it.",
            },
            {
              type: "table",
              title: "7 → 8 upgrades",
              headers: ["Criterion", "7", "8 — train this"],
              rows: [
                ["Task Response", "clear position, supported", "Every claim gets SPECIFIC support: numbers, named examples, consequences — no generic filler anywhere"],
                ["Coherence & Cohesion", "logical, flexible linkers", "Paragraphs do work: each one has an internal arc (claim → evidence → implication) and the essay reads as one continuous argument"],
                ["Lexical Resource", "less common items, occasional errors", "Idiomatic and precise ('a double-edged sword', 'priced out of the market'); collocations land naturally; near-zero word-choice errors"],
                ["Grammar", "frequent error-free sentences", "MOST sentences error-free; sophisticated forms (inversion, cleft sentences) appear where they earn their place"],
              ],
            },
            {
              type: "note",
              title: "Speaking at 8",
              text: "The tell is pace: 8 speakers think aloud fluently, hedge like native speakers ('arguably', 'if anything'), and their pronunciation carries attitude — stress and intonation that MEAN something. Record yourself; listen for monotone delivery. Flat delivery caps pronunciation at 7 no matter how clear the sounds are.",
            },
            {
              type: "warning",
              title: "The cost of chasing 8",
              text: "Moving 7→8 typically takes longer than 6→7 and cannot be done with templates — templates are the opposite of the descriptor. At this level you improve by writing MORE and reading more, then mining what you read for structures and collocations you can own.",
            },
            {
              type: "example",
              title: "The 7→8 difference in two openers",
              items: [
                { english: "Band 7: Remote work has several advantages for both employees and employers, such as higher productivity and lower costs.", note: "Clear, supported, error-free — but generic: this sentence could open any essay on remote work.", domain: "work" },
                { english: "Band 8: The office, it turns out, was never really about work — it was about supervision — and remote arrangements have quietly exposed the difference.", note: "Specific, idiomatic, carries an argument in the opener itself; style doing the work that word-count used to do.", domain: "work" },
                { english: "Band 9: The office, it turns out, was never about work; it was about watching — and two years of working from home have made that distinction impossible to unsee, whatever the return-to-office memos say.", note: "One band above the target: the hedging ('it turns out', 'whatever the memos say') is woven into the rhythm instead of displayed, and the register never seams — effort has disappeared, which is the whole 8→9 increment.", domain: "work" },
                { english: "Band 7: A sugar tax would probably reduce consumption, because price strongly influences what shoppers buy.", note: "A second idea, same distance: clear, supported and error-free, but the hedging machinery is visible ('would probably', 'strongly') and the sentence could belong to any essay on the topic — good, not yet 8.", domain: "health" },
                { english: "Band 8: A sugar tax works at the margin: it sways the shopper hesitating between the fizzy drink and the water, and leaves the committed buyer to pay for the habit.", note: "The target on the same idea: 'works at the margin' is idiomatic and precise, the colon does cohesive work, and the sentence argues instead of reporting — specific support with style carrying the load.", domain: "health" },
                { english: "Band 9: Tax the drink, not the drinker, and the shelves rearrange themselves — which is the quiet case for letting price, not willpower, carry the public-health load.", note: "One band above: parallelism ('the drink, not the drinker') and idiom ('the shelves rearrange themselves') deployed where they help, register shifting without a seam — natural English that no longer smells of effort.", domain: "health" },
              ],
            },
            {
              type: "mistakes",
              title: "The errors that hold a 7 profile below 8 — wrong, fixed, criterion cost",
              items: [
                { wrong: "This is a very important issue in today's modern world and both sides have their merits.", right: "Delete it; the next sentence should name the actual issue and stake an actual claim.", reason: "Task Response: Band 8 requires every claim to earn specific support — a sentence that could close any essay on any topic is generic filler, and filler anywhere caps the criterion at 7." },
                { wrong: "Remote work plays a crucial role to the companies and makes a big contribution for the productivity.", right: "Remote work plays a crucial role in companies and makes a significant contribution to productivity.", reason: "Lexical Resource: Band 8 allows only rare slips in word choice and collocation — 'role to' and 'contribution for' are collocation errors, and two in one sentence is the 7.5 profile, not the 8." },
                { wrong: "Rarely the benefits of remote work are questioned by managers.", right: "Rarely are the benefits of remote work questioned by managers.", reason: "Grammatical Range & Accuracy: Band 8 needs MOST sentences error-free — an inversion attempted with the wrong word order is still an error; sophistication only counts where it works." },
                { wrong: "A Part 3 answer delivered in one flat rhythm, every word given equal weight.", right: "The same answer with stress landing on the words that carry the position — 'affordable', 'only', 'depends'.", reason: "Pronunciation: Band 8 requires a full range of features used to carry meaning; flat delivery caps the criterion at 7 however clean the individual sounds are." },
              ],
            },
            {
              type: "summary",
              points: [
                "Band 8 = Band 7 made effortless and consistent across the WHOLE performance, not just its best half.",
                "Task: every claim earns specific support — numbers, named examples, consequences — and generic filler disappears entirely.",
                "Cohesion: paragraphs have an internal arc (claim → evidence → implication) and the essay reads as one continuous argument.",
                "Lexis: idiomatic and precise, collocations landing naturally, near-zero word-choice errors; grammar: MOST sentences error-free, sophistication only where it earns its place.",
                "Speaking at 8 is a pace tell: thinking aloud fluently, native-like hedging, and pronunciation that carries meaning.",
                "7→8 takes longer than 6→7 and cannot be templated — it comes from volume plus mining real texts for structures you can own.",
              ],
            },
          ],
          questions: [
            ex({
              type: "mcq",
              difficulty: "hard",
              skill: "writing",
              prompt: "Which behaviour most clearly targets Band 8 rather than 7?",
              hints: ["What does '8 = 7 made consistent' imply?"],
              options: [
                { id: "a", text: "Learn fifty new linkers." },
                { id: "b", text: "Remove generic filler: every claim gets specific support, and most sentences come out error-free on the first pass." },
                { id: "c", text: "Write much longer answers." },
              ],
              correctOptionId: "b",
              feedback: fb(
                "Kill the generic; raise the error-free rate.",
                "8 is 7 applied to every sentence without exception. Length and linker count are 6-level metrics.",
              ),
              tags: ["bands", "7-to-8"],
            }),
          ],
          homework: [
            "Take one essay and delete every generic sentence (one that could appear in any essay on any topic). Count what survives.",
            "Record two minutes on an abstract topic; listen back ONLY for stress and intonation meaning something.",
          ],
        },
        {
          slug: "ielts-band-8-to-9",
          title: "Band 8 → 9: expert command",
          description: "The descriptor ceiling: precise, natural, flexible English under any condition.",
          objectives: [
            "Read the Band 9 descriptors accurately",
            "Understand what 9 demands beyond 8",
            "Set expectations honestly for this rung",
          ],
          minutes: 12,
          blocks: [
            { type: "heading", text: "What 9 actually says" },
            {
              type: "text",
              text: "Band 9 writing fully satisfies all requirements with a wide-ranging, well-developed response; cohesion is skilful and sequencing flawless; vocabulary is wide, precise and natural including idiomatic items, with rare inappropriate use only as slips; grammar shows a full flexible range with consistent accuracy — errors only as slips. Band 9 speaking is effortless: fully developed ideas, natural sophisticated cohesion, precise idiomatic vocabulary, effortless pronunciation. The key word across the descriptors is NATURAL: 9 is language that no longer smells of effort.",
            },
            {
              type: "table",
              title: "8 → 9: the last increments",
              headers: ["Area", "The final polish"],
              rows: [
                ["Register control", "Tone shifts exactly with purpose — formal, neutral, conversational — without a seam"],
                ["Idiom", "Idiomatic English deployed where it helps, never as decoration"],
                ["Cohesion", "Sequencing so smooth the reader never notices the machinery"],
                ["Error profile", "Slips only, self-corrected invisibly"],
              ],
              caption: "9 is not 'more of 8' — it is the disappearance of effort from 8.",
            },
            {
              type: "note",
              title: "Honest expectations",
              text: "Band 9 in writing or speaking is rare even among strong users. If your requirement is 7.0, treat this lesson as a window onto the top of the scale — the 8→9 habits (precision, naturalness, self-correction) still lift every lower band. Train the rung you need; borrow the taste of the rung above.",
            },
            {
              type: "example",
              title: "8→9: where the last increment lives",
              items: [
                { english: "Band 8: The results suggest that the policy was largely successful in reducing congestion.", note: "Precise, hedged, error-free — but the machinery of hedging ('suggest that', 'largely') is still visible.", domain: "travel" },
                { english: "Band 9: Congestion fell — not everywhere, and not evenly, but enough that the policy's critics now argue about its cost rather than its effect.", note: "Hedging woven into rhythm and structure; register shifts without a seam; effort has disappeared.", domain: "travel" },
                { english: "Band 7: The congestion charge seems to have reduced traffic in the city centre.", note: "The rung below, same idea: correct, hedged and connected, but 'seems to have reduced' displays its caution on the surface — a strong 7 whose care is still visible is exactly what 8 polishes away.", domain: "travel" },
                { english: "Band 7: Rewilded rivers can reduce flooding downstream, although the evidence is still limited to a few catchments.", note: "A second idea at the bottom of the trio: precise ('catchments'), error-free, honestly hedged — the 'good user' profile with its caution still on display.", domain: "nature" },
                { english: "Band 8: A rewilded river does quietly what no dredging budget manages loudly: it slows the flood, filters the water and refills the aquifers that intensive farming drained.", note: "The target: idiomatic contrast (quietly/loudly), a colon doing cohesive work, collocations landing ('filters the water', 'refills the aquifers') — precise natural lexis with near-zero slips.", domain: "nature" },
                { english: "Band 9: Give a river back its floodplain and it will do, in a decade, what a century of engineering never managed — which is why the argument has quietly moved from whether to rewild to who pays for the land.", note: "The ceiling: hedging and register woven into rhythm ('from whether… to who…'), sequencing the reader never notices — the disappearance of effort that defines the last rung.", domain: "nature" },
              ],
            },
            {
              type: "mistakes",
              title: "The errors that separate 8 from 9 — wrong, fixed, criterion cost",
              items: [
                { wrong: "It is widely acknowledged by the majority of experts that this phenomenon constitutes a significant challenge.", right: "Most experts now treat the shift less as a crisis than as a rebalancing.", reason: "Lexical Resource: Band 9 vocabulary is 'wide, precise and natural' — inflated register ('constitutes a significant challenge') smells of the thesaurus, and visible effort is the 8 ceiling." },
                { wrong: "At the end of the day, the housing shortage is a double-edged sword, and only time will tell whether the reforms succeed.", right: "For young buyers, the shortage is less a crisis than a closed door: they rent until the numbers change, and the numbers are not changing.", reason: "Idiom at 9 is deployed where it helps, never as decoration — stacked clichés ('at the end of the day', 'only time will tell') are padding, and padding is the opposite of the descriptor's 'natural'." },
                { wrong: "The report shows that congestion has fell by 12% since the charge began.", right: "The report shows that congestion has fallen by 12% since the charge began.", reason: "Grammatical Range & Accuracy: Band 9 allows errors only 'as slips' — 'has fell' is a systematic form error, and systematic errors never read as slips; consistent accuracy is the criterion's final word." },
                { wrong: "Firstly, the policy reduced traffic. Secondly, air quality improved. Furthermore, businesses adapted. In conclusion, the policy succeeded.", right: "Traffic thinned, air quality improved, and businesses adapted — one measure, three effects, and the critics quietly recalibrated.", reason: "Coherence & Cohesion: 9 is 'skilful' cohesion — signposting every sentence is the 6–7 scaffold still showing; at the ceiling, sequencing is something the reader notices only when it is missing." },
              ],
            },
            {
              type: "summary",
              points: [
                "The Band 9 descriptors' key word is NATURAL: language that no longer smells of effort, with slips self-corrected invisibly.",
                "The final increments are register control (tone shifts without a seam), idiom deployed where it helps, sequencing the reader never notices, and a slips-only error profile.",
                "9 is not 'more of 8' — it is the disappearance of effort from 8.",
                "Honest expectation: Band 9 in writing or speaking is rare even among strong users; most requirements sit at 7.0 or below.",
                "Train the rung you need and borrow the taste of the rung above: precision, naturalness and self-correction lift every band.",
              ],
            },
          ],
          questions: [
            ex({
              type: "mcq",
              difficulty: "hard",
              skill: "writing",
              prompt: "Which sentence carries a 9-level feel?",
              hints: ["Look for effort that has become invisible."],
              options: [
                { id: "a", text: "Furthermore, it is widely acknowledged by the majority of experts that this phenomenon constitutes a significant challenge." },
                { id: "b", text: "Most experts now treat the shift less as a crisis than as a rebalancing — one that policy has been slow to catch up with." },
                { id: "c", text: "This is a very important issue which is very important for society." },
              ],
              correctOptionId: "b",
              feedback: fb(
                "Option (b).",
                "Precise lexis ('a rebalancing', 'slow to catch up with'), natural idiom, seamless argument — effort has disappeared. Option (a) is inflated 6–7; option (c) is 5.",
              ),
              tags: ["bands", "8-to-9"],
            }),
          ],
          homework: [
            "Rewrite one paragraph of your best essay aiming only at naturalness; remove every phrase that sounds 'essay-like' but adds nothing.",
          ],
        },
      ],
    },
  ],
};
