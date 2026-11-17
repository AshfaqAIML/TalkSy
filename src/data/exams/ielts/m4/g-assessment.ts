/**
 * GT Writing assessment — how the General Training paper is scored (W-L11).
 *
 * One masterclass lesson closing the GT writing sequence: the four criteria
 * as this paper actually applies them — Task Achievement judging the letter
 * (purpose, tone, bullet coverage), Task Response judging the essay — the
 * shared judges of coherence, vocabulary and grammar, the estimated band
 * profiles, the double weight of Task 2, and the consequences of under-length
 * and missed bullets. All band references are educational estimates
 * paraphrased in plain words; nothing quotes or claims to quote official
 * descriptors.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const gwritingAssessmentLessons: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-criteria",
    title: "How examiners score your letter and essay",
    description:
      "The four judges of General Training writing — Achievement for the letter, Response for the essay, then coherence, vocabulary and grammar for both — with estimated band profiles, the essay's double weight, and the real cost of under-length and missed bullets.",
    objectives: [
      "name the four scoring criteria and the split this paper applies: Achievement for the letter, Response for the essay",
      "describe, in your own words, what estimated band 5, 6 and 7 profiles look like on each criterion",
      "explain the double weight of Task 2 and what it means for the clock",
      "audit a letter for purpose, tone and bullet coverage, and an essay for coverage, position and development",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "General Training writing is marked by four judges at once, and two of them swap names between the tasks. The letter answers to Task Achievement — was the purpose clear from the start, the tone held at one setting, every printed bullet genuinely developed? The essay answers to Task Response — was every printed question answered, the position findable, the ideas extended? Both tasks then face the same three judges of craft: organisation and linking, vocabulary, and grammar. This lesson paraphrases the publicly known approach in plain words — it never quotes official documents, and every band figure anywhere in this academy is a teaching estimate, never a promise about your real test — and turns the whole scheme into a checklist you can draft against.",
        beforeYouStart: [
          "You have written at least one timed letter and one timed essay for this paper.",
          "You know the paper's shape: a letter of 150-plus words in about 20 minutes, an essay of 250-plus in about 40.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "General Training Writing — the scoring scheme behind both the letter and the essay"],
          ["Task & question types", "Every letter (formal, semi-formal or informal) is scored on Task Achievement; every essay family is scored on Task Response; all scripts share the other three criteria"],
          ["What is assessed", "The letter: purpose, tone, bullet coverage. The essay: coverage, position, development. Both: organisation, register-appropriate vocabulary, grammar"],
          ["Why this matters", "You cannot draft strategically toward judges you cannot name — knowing the scheme converts effort into marks on the criterion that is actually asking"],
        ],
      },
      { type: "heading", text: "The four judges and their names" },
      {
        type: "table",
        title: "The criteria in plain words",
        headers: ["Criterion", "What it is asking about"],
        rows: [
          ["Task Achievement — the letter's judge", "Did the letter do the printed job: a purpose visible from the first sentence, a tone matched to its recipient and held to the end, and all three bullets developed rather than mentioned"],
          ["Task Response — the essay's judge", "Did the essay answer everything the prompt printed: every question addressed with real attention, a position stated where one is owed and never abandoned, ideas extended with reasons and examples"],
          ["Coherence and Cohesion", "Is the architecture visible: paragraphs with one job each, a logical route through the material, and linking devices that mark real relations rather than decorate"],
          ["Lexical Resource", "The word store behind both scripts: range, precision, natural collocations — and, on this paper, vocabulary that sits at the right register for the task"],
          ["Grammatical Range and Accuracy", "The sentence machinery: variety of structures attempted, how many sentences run clean, and whether the remaining slips ever block meaning"],
        ],
      },
      { type: "heading", text: "The ladder at a glance" },
      {
        type: "table",
        title: "What climbing looks like (educational estimates)",
        headers: ["Level (estimate)", "What the scripts typically show"],
        rows: [
          ["Band 5 estimate", "Letter: purpose hard to find or arriving late, tone wobbling between registers, at least one bullet touched rather than developed. Essay: parts of the question unanswered, position faint or absent, ideas thin. Organisation: paragraphs present but mechanical, linkers overused or misplaced. Vocabulary: narrow and repetitive, register slips common. Grammar: limited range, frequent slips that make reading hard work"],
          ["Band 6 estimate", "Letter: purpose in the first sentence, tone mostly consistent, all three bullets covered though some thinly. Essay: all parts addressed, position visible though not always steady, ideas relevant with patchy development. Organisation: generally logical, devices present if sometimes mechanical. Vocabulary: adequate range with attempts at precision. Grammar: a genuine mix of simple and complex forms; errors occur but the meaning survives"],
          ["Band 7 estimate", "Letter: purpose unmistakable, one tone held throughout, every bullet developed with detail. Essay: every part answered well, position quotable from the introduction and unchanged at the end, main ideas extended. Organisation: logical sequencing, a range of devices used flexibly. Vocabulary: precise, collocations natural, register well judged. Grammar: varied complex structures, most sentences error-free, remaining slips rarely obscure meaning"],
        ],
      },
      { type: "heading", text: "How the two tasks become one band" },
      {
        type: "text",
        text: "Each task is scored separately on the four criteria, and the commonly described arithmetic is simple: the four numbers combine into that task's band — broadly an average, settled to the nearest half band — and the overall writing result then weighs the essay at roughly twice the letter. The weighting carries a lesson for the clock: an essay estimated at 7 beside a letter estimated at 6 tends to land the overall result around 6.5, while the same marks reversed land lower, and when the hour turns hostile the arithmetic itself tells you which task to protect. Every figure in that sentence is a teaching estimate, but the shape of the arithmetic is public knowledge and worth planning around.",
      },
      { type: "heading", text: "Task Achievement in practice: the letter's three questions" },
      {
        type: "text",
        text: "The judge who reads your letter is asking three questions in order. First, purpose: can the reader tell within a sentence why the letter exists — to complain, request, invite, explain, apologise or suggest? Second, tone: does the register match the recipient, formal for authorities, informal for friends, and does it hold one setting from the salutation to the sign-off? Third, coverage: does every printed bullet receive real development — a situation, a detail, a consequence — rather than a courtesy sentence? The three questions are independent: a beautifully toned letter with an undeveloped bullet has answered two of three, and the criterion records the third.",
      },
      { type: "heading", text: "Task Response in practice: the essay's three questions" },
      {
        type: "text",
        text: "The essay's judge asks a parallel three. First, coverage: can the reader point at the paragraph that answers each printed question — the locatability test you have met in every family lesson? Second, position: where the prompt asks for your view, is it stated in words that can be quoted, advanced by every paragraph and unchanged at the end? Third, development: are the ideas extended with mechanisms and everyday examples rather than named in lists? The families differ in what they owe — a verdict here, two camps there — but the judge's three questions are the same for all of them, and the essay family lessons of this course are, in the end, training for these three lines.",
      },
      { type: "heading", text: "Register runs through everything" },
      {
        type: "text",
        text: "On the General Training paper, register is where the vocabulary judge earns their keep. The letter asks for a register chosen to fit the recipient and held — contractions are correct in a letter to a friend and wrong in a letter to a manager. The essay asks for one voice throughout: semi-formal, uncontracted, precise about everyday things. Most marks lost to register on this paper are lost by drift rather than by choice — the chatty phrase in an essay because the topic felt familiar, the stiff formula in a friendly letter because a template was memorised whole. The fix is a one-line question at the end of every paragraph: whose voice is this, and is it the same voice as the last paragraph?",
      },
      { type: "heading", text: "Length, bullets and the two standing penalties" },
      {
        type: "text",
        text: "Two facts sit outside the criteria's fine print but bite through them. A script under its printed minimum — 150 words for the letter, 250 for the essay — is penalised under the achievement or response criterion, and it also shrinks the evidence the other three judges have to score. And a missed or undeveloped bullet is a missed deliverable, exactly as an unanswered printed question is in the essay: material that is polished but off the task cannot earn the credit its polish deserves, because the judge scores what the script contributes to the job printed, not to the topic in general. The moral of both penalties is the same: coverage at full length feeds the first judge before anything else can matter.",
      },
      { type: "heading", text: "Reading your own paper like an examiner" },
      {
        type: "steps",
        title: "The four-pass self-assessment",
        intro: "One pass per judge, in the order the criteria are named.",
        steps: [
          {
            title: "Pass 1: The job judges",
            text: "Reread only the prompts, then hunt your scripts. Letter: is the purpose in sentence one, the tone one setting, each bullet developed? Essay: is each printed question locatable, the position quotable, the ideas extended? Tick what you can point at; mark what you cannot.",
            examples: [
              {
                english: "Letter audit line: purpose quoted from sentence one; tone held; third bullet developed in one sentence and a half — marked 'thin', the paper's likeliest next draft target.",
                note: "The audit names the exact bullet, not a mood.",
              },
            ],
          },
          {
            title: "Pass 2: The architecture judge",
            text: "Read only your topic sentences, in order, for both scripts. If you can retell the letter's plan from its paragraph openings and the essay's route from its topic sentences, the cohesion judge is seeing what you are. Then scan the linkers for one-trick repetition and for devices that decorate rather than connect.",
            examples: [
              {
                english: "Essay topic sentences retold: why delivery grew, the two engines, the verdict with its dial — the route is visible; but two linkers say 'Moreover' where the logic is contrast.",
                note: "Architecture is judged from the skeleton, not the wallpaper.",
              },
            ],
          },
          {
            title: "Pass 3: The word judge",
            text: "Circle your two most precise word choices and your two riskiest in each script, and check each risky one for register and collocation. On this paper the judge also asks whether the vocabulary suits the task's setting: the friendly letter's warm idiom and the essay's neutral precision are both register wins when they are in the right script.",
            examples: [
              {
                english: "Precise: 'the tone wobbles between registers'. Risky: 'a stringent rule about noise' where 'strict' is the natural partner of 'rule'.",
                note: "The word judge rewards hits, not ambitious misses.",
              },
            ],
          },
          {
            title: "Pass 4: The machinery judge",
            text: "Count the error-free sentences in one body paragraph of the essay and one middle paragraph of the letter, and name the structure types you attempted. Five clean but identical simple sentences are accurate and still capped; a paragraph mixing conditionals, relative clauses and a clean simple closer is what the range half of this judge's name rewards.",
            examples: [
              {
                english: "Letter paragraph, six sentences: four complex and clean, one conditional with a slipped article, one short closer — a solid mix worth repeating deliberately.",
                note: "Variety attempted and mostly landing is the target, not perfection.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Worked example — one paper, four judges" },
      {
        type: "example",
        title: "The judges on real evidence",
        items: [
          {
            english: "A letter to a landlord opens with two sentences of seasonal greetings before its purpose: the Achievement judge is still waiting in paragraph one — the purpose belongs in the first sentence, whatever the warmth of the writer.",
            note: "Purpose is judged by position, not by politeness.",
            domain: "exam",
          },
          {
            english: "A semi-formal complaint closes with 'Cheers, and sort it out soon': one sign-off, and the tone dial the letter held for 150 words visibly breaks at the last line.",
            note: "Tone is a dial held to the final word — endings are where drift shows.",
            domain: "everyday",
          },
          {
            english: "An essay whose second printed question is answered by a single closing line: the Response judge prices the missing half however fine the prose above it, because coverage is locatability, and one line is not a location.",
            note: "The criterion asks where each question was answered, not whether the topic was discussed.",
            domain: "exam",
          },
          {
            english: "A delivery driver's handover note lists the three items the depot asked about; the line that says only 'done' makes the depot call back. Bullets developed or bullets dodged are visible at a glance — and the writing criteria work the same way.",
            note: "Everyday work is full of Task Achievement in miniature.",
            domain: "work",
          },
          {
            english: "A 140-word letter: under the printed minimum, penalised under Achievement, and with thirty fewer words of evidence for the other three judges to score.",
            note: "Length is the cheapest penalty on the paper to avoid — and the most expensive to ignore.",
            domain: "exam",
          },
          {
            english: "An essay about a neighbourhood park that drifts into national environmental policy for a paragraph: the off-topic half earns nothing on Response, however well written, because the judge scores the printed question's answer only.",
            note: "Polish cannot transfer across criteria — or across topics.",
            domain: "community",
          },
          {
            english: "Study ritual: after every timed paper, write one line per judge per task and pin each to a sentence you actually wrote — within a month the pinned sentences pile up into a personal error grammar.",
            note: "Self-assessment with evidence turns abstract criteria into data.",
            domain: "study",
          },
        ],
      },
      { type: "heading", text: "Common traps" },
      {
        type: "mistakes",
        title: "The trap catalogue",
        items: [
          {
            wrong: "The letter is short and the topic is friendly, so a quick, chatty tone everywhere will be fine.",
            right: "Match the tone to the recipient — formal for authorities, informal for friends — and hold that one setting from the first line to the sign-off.",
            reason: "Tone consistency is part of Achievement; a chatty complaint to a manager reads as a register failure the criterion records, however warm the letter's intentions.",
          },
          {
            wrong: "I missed one bullet, but my letter is beautifully written, so the mark should survive.",
            right: "Cover all three bullets, each with real development; beauty cannot pay a debt the task printed.",
            reason: "Each bullet is a deliverable, and an undeveloped bullet holds Achievement down regardless of the language around it — no other criterion can transfer the credit.",
          },
          {
            wrong: "The essay feels harder, so I will spend most of the hour on the letter, where I feel safe.",
            right: "Give the essay its forty minutes: it weighs roughly twice the letter, and minutes moved into it buy more band than minutes spent polishing a finished letter.",
            reason: "The weighting is public knowledge in outline, and it makes the essay the investment whenever the clock turns hostile.",
          },
          {
            wrong: "The higher bands must demand perfect grammar, so I will write only short, safe sentences in both tasks.",
            right: "Attempt varied structures and keep most sentences error-free; accuracy is half the machinery judge's name, and range is the other half.",
            reason: "A script can be entirely accurate and still capped, because range is scored as a partner of accuracy rather than its enemy.",
          },
        ],
      },
      { type: "heading", text: "Model answer across the four skills" },
      {
        type: "four-skills",
        title: "Judging your own paper, worked four ways",
        reading: {
          text: "A candidate's summary of her Saturday morning: 'Letter — to a landlord, about a heater that has been cold for eleven days; I opened with the purpose and kept it courteous, but my third bullet, suggesting a temporary solution, got two lines and a shrug. Essay — the housework discussion; both camps presented, though my opinion only really appeared in the conclusion. Twenty minutes on the letter, thirty-five on the essay, five left over — enough to find two contractions in the essay and none in the letter, which was the informal one.'",
          task: "Read once, then name the criterion each confession touches.",
        },
        writing: {
          task: "Turn judge: take your most recent full practice paper and assess both tasks in one paragraph — an estimated band for each criterion, every estimate backed by a sentence quoted from your own script, and one action per task for next time.",
          guide: [
            "Letter first: quote the purpose sentence, name the tone setting, and give a verdict on how fully each bullet was developed.",
            "Essay second: locate each printed question's answer, quote where the position first appears, and judge the depth of development.",
            "Then the shared judges: retell each script's plan from its openings, check the register question, and count one paragraph's error-free sentences.",
            "Hedge every number as a teaching estimate, and finish in action — one named repair per task.",
          ],
          model: "Reading my letter as a marker, I would estimate Task Achievement around 6: the purpose arrives in the first sentence ('I am writing about the heater on the second floor, which has now been cold for eleven days'), and the tone holds courteous throughout — but the third bullet, suggesting a temporary solution, received a line and a half, and Achievement prices that thinness. The essay I would estimate at 6.5 for Task Response: both camps are developed, though my opinion ('I side with the housework camp, within limits') first appears in the conclusion, so it cannot have been clear throughout. Coherence feels nearer 7 across both scripts: each paragraph owns one job, and the letter's paragraphs track the bullets in order. Lexical Resource sits around 6 — 'problem' appears five times in the letter, though 'faulty' and 'out of order' were precise moments. Grammar: mostly error-free complex sentences, and the letter's conditional ('if the heater could be repaired this week') runs clean; I would estimate 6.5. Actions for next time: state the essay's opinion in the introduction, and give every bullet a minimum of two sentences.",
        },
        listening: {
          script: "When I mark General Training scripts, I read the letter for three things in order: does the purpose arrive early, does the tone hold one setting, and can I point at all three bullets. Then the essay: can I find each printed question's answer, and can I quote the position from the introduction. Language I judge last, sentence by sentence — variety attempted, and variety that mostly worked. And before any of it, I note the word counts, because under length costs before a single criterion is read.",
          task: "Listen once and note the order this marker reads a letter's three checks, and what she notes before reading anything at all.",
        },
        speaking: {
          task: "Explain this paper's scoring scheme to a study partner in sixty seconds — the letter's judge, the essay's judge, the shared three — entirely in your own words, with no claim to official wording.",
          frames: [
            "The letter is judged on…",
            "The essay answers to…",
            "Both tasks then face…",
            "My weakest judge is…, because in my last script…",
          ],
          checklist: [
            "Did you name all four criteria?",
            "Did you keep the Achievement and Response split straight?",
            "Can you name your weakest judge and one action for it?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Evidence-backed verdicts", "Every estimated band is pinned to a sentence quoted from the candidate's own scripts, so the assessment is data rather than mood."],
          ["The GT split honoured", "The letter is judged on purpose, tone and bullets; the essay on coverage, position and development — the assessment names which judge owns which job."],
          ["Weaknesses located precisely", "The late opinion and the thin bullet are each traced to an exact place, so the next draft inherits targets rather than a feeling."],
          ["Honest hedging", "All four verdicts per task read as teaching estimates, and the paragraph closes with one named action for the letter and one for the essay."],
          ["Balanced reading", "Strengths — the clean conditional, the held tone — are found beside the flaws, because one-sided self-scoring teaches nothing in either direction."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Know the four judges and the letter-essay split by heart — you cannot aim a script at criteria you cannot name."],
          ["While the clock runs", "Draft for all judges at once: purpose in sentence one of the letter, position early in the essay, one job per paragraph, register at one setting."],
          ["If you are stuck", "When time runs short, protect the bigger weights: all three bullets in the letter and every printed question in the essay — a complete, plainer script outscores a polished half-answer."],
          ["Final minutes", "Count words first — under length costs before anything else is read — then sweep both scripts for register drift and slipped agreements."],
        ],
      },
      {
        type: "summary",
        points: [
          "The letter answers to Task Achievement: purpose in the first sentence, tone at one setting, all three bullets developed.",
          "The essay answers to Task Response: every printed question answered, a position quotable from the introduction, ideas developed rather than listed.",
          "Both tasks then face the shared judges: coherence and cohesion, lexical resource with register well judged, and grammatical range alongside accuracy.",
          "The essay weighs roughly twice the letter in the overall writing result, and the arithmetic should steer the clock.",
          "Under-length scripts are penalised and missed bullets are missed deliverables; every band figure in this academy is a teaching estimate, never a promise.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "Where must a letter's purpose appear?",
            options: ["In the first sentence, whatever the register", "In the final paragraph", "Nowhere in particular"],
            correctIndex: 0,
            explanation: "Purpose-first is the letter's first law: the reader should know why the letter exists before knowing anything else about it, and the Achievement judge checks exactly that position.",
            from: "Formal letters",
          },
          {
            question: "What does a consistent register demand across a script?",
            options: ["One tone setting, held from the salutation to the sign-off", "Formal language even with friends", "A change of tone in each paragraph"],
            correctIndex: 0,
            explanation: "The dial must hold one position: formal stays formal, informal stays informal, and mixed signals are the most visible tone failure a letter can carry.",
            from: "Tone",
          },
          {
            question: "Each printed question in an essay prompt is what?",
            options: ["A deliverable, locatable in the essay's structure", "A suggestion the writer may take or leave", "A topic to decorate around"],
            correctIndex: 0,
            explanation: "Question analysis turns every printed question into a contract with a paragraph to its name, and the Response criterion audits exactly that locatability.",
            from: "Analysing question requirements",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "How does the scoring scheme treat the two tasks' first criterion?",
        hints: ["Two tasks, two names for the job judge."],
        options: [
          { id: "a", text: "The letter is scored on Task Response; the essay on Task Achievement." },
          { id: "b", text: "The letter is scored on Task Achievement — purpose, tone, bullets — while the essay is scored on Task Response." },
          { id: "c", text: "Both tasks are scored on Task Achievement with no distinction." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The letter is scored on Task Achievement — purpose, tone, bullets — while the essay is scored on Task Response.",
          "The General Training paper splits the first criterion by task: the letter's job is achievement of the printed situation, and the essay's is response to the printed questions. Naming the split is the first step to drafting for the right judge.",
          "(a) swaps the two names; (c) ignores the essay's separate judge altogether.",
        ),
        tags: ["gwriting", "criteria", "achievement-response"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Judge this letter against its printed situation.",
        hints: ["Ask what each of the three printed bullets received."],
        passageTitle: "A letter under inspection",
        passage: "Dear Mr Santos, I am writing about the heater on the second floor, which has not worked since the twelfth of last month. The flat is currently fifteen degrees at night, and my daughter's asthma has worsened since the cold began. I have called your office four times about this. I look forward to your reply. Yours sincerely, R. Vega. [The situation asked her to describe the problem, explain how it affects her, and suggest a solution.]",
        question: "Which deliverable has the letter failed to pay?",
        options: [
          { id: "a", text: "The suggested solution — the third bullet — never appears, so Task Achievement is held down however courteous the prose." },
          { id: "b", text: "The description of the problem." },
          { id: "c", text: "The tone, which is too angry for a landlord." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The suggested solution — the third bullet — never appears, so Task Achievement is held down however courteous the prose.",
          "Two bullets are paid in full: the problem is described with dates, and the effect is named in one cold, concrete sentence. But the situation printed a third deliverable — a suggestion — and its absence is a missed bullet: Achievement records it, and no other criterion can transfer the credit. The repair is one sentence: a temporary heater, a hotel night, a date by which repair is reasonable.",
          "(b) contradicts the letter's own dates; (c) misreads a courteous letter as an angry one.",
        ),
        tags: ["gwriting", "criteria", "bullets"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "easy",
        skill: "writing",
        prompt: "The weighting rule. Complete it.",
        hints: ["How many letters' worth of band does one essay represent?"],
        sentence: "In the overall writing result, Task 2 counts roughly ____ as much as Task 1.",
        acceptedAnswers: ["twice", "double", "two times"],
        feedback: fb(
          "Twice — the essay's double weight.",
          "The weighting is the arithmetic behind every clock decision on this paper: minutes moved into the essay buy more band, and a weak letter costs the overall result less than a weak essay. When the hour turns hostile, the numbers have already told you which task to protect.",
          "'Half' reverses the weighting; 'thrice' invents a number nobody describes.",
        ),
        tags: ["gwriting", "criteria", "weighting"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. A candidate writes a fluent 240-word essay whose opinion appears only in the final paragraph, and a complete, well-toned letter. What is the realistic reading?",
        hints: [],
        options: [
          { id: "a", text: "The whole paper fails, regardless of the letter's quality." },
          { id: "b", text: "The language and organisation judges still score what they can see, but Task Response suffers for the late position — and the ten missing words expose the script to the under-length penalty as well." },
          { id: "c", text: "No consequence, because 240 words is close enough to the minimum." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The language and organisation judges still score what they can see, but Task Response suffers for the late position — and the ten missing words expose the script to the under-length penalty as well.",
          "Criteria are scored separately, which cuts both ways: cohesion, vocabulary and grammar keep earning while the response criterion pays for a position that could not have been clear throughout, and the missing ten words add a separate penalty. Both repairs are cheap — state the opinion in the introduction and write past the minimum — which is the point of knowing the scheme.",
          "(a) invents a fail-switch the scheme does not contain; (c) treats a printed minimum as a suggestion, and minimums are not suggestions.",
        ),
        tags: ["gwriting", "criteria", "penalties"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Define the letter judge's three questions.",
        hints: [],
        question: "In one sentence: what three things does the letter's Task Achievement judge look for beyond bullet coverage?",
        acceptedAnswers: [
          "a purpose that arrives in the first sentence, a tone matched to the recipient, and bullet coverage that is genuine development",
          "purpose stated early, register matched to the recipient and held, and every bullet developed rather than mentioned",
          "an early clear purpose, one consistent tone setting, and all three bullets genuinely developed",
          "purpose in sentence one, tone held throughout, and each bullet developed with detail",
        ],
        keywords: ["purpose", "tone", "bullet"],
        feedback: fb(
          "A purpose that arrives in the first sentence, a tone matched to the recipient and held, and every bullet genuinely developed.",
          "Bullets are the letter's content contract; purpose and tone are its delivery contract, and the judge reads all three: why the letter exists, at what setting it speaks, and whether each printed point was developed rather than merely touched.",
          "Answers naming vocabulary or grammar have drifted to the wrong judges — those score every script, but under their own names.",
        ),
        tags: ["gwriting", "criteria", "achievement"],
      }),
    ],
    assignment: {
      title: "Mark your own last paper",
      instructions:
        "Take your most recent full practice paper, or write one today — a letter and an essay under the clock. For each task, give an estimated band on each of the four criteria and quote the single sentence from your script that decided each estimate; no quote, no score. Finish with one concrete action per task, named after the judge it feeds.",
      minWords: 90,
      maxWords: 200,
    },
    homework: [
      "Write the four criteria at the top of your next practice plan, split by task, and tick each judge only when the plan visibly feeds it.",
      "Take your last letter and circle the sentence that states its purpose, then label each paragraph with the bullet it serves — any paragraph with no label has found its own repair.",
    ],
  },
];
