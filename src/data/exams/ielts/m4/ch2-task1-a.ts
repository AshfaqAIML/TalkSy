/**
 * Chapter 2A — Academic Writing Task 1: the chart families, part one
 * (PROMPT 46, Part B).
 *
 * The first four family masterclasses — bar charts, line graphs, pie charts
 * and tables — each on the ten-component structure: how to analyse the
 * visual, find the main features, select the data, compare, handle trends
 * and rankings, organise the response, write the introduction, write the
 * overview, develop the detail paragraphs, and cut what the frame never
 * asked for.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const awritingTask1LessonsA: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-t1-bar",
    title: "Task 1 — Bar charts",
    description:
      "The family the paper sets most often: reading the bar frame, ranking with state verbs on snapshots and trend verbs across paired years, comparing within groups and between them — and building a four-part report that selects instead of transcribes.",
    objectives: [
      "decode a bar frame in under a minute: subject, units, years and grouping",
      "rank bars with superlatives and comparatives instead of listing them",
      "choose state verbs for snapshot charts and trend verbs for paired years",
      "build a four-part report whose four to six figures each support a claim",
    ],
    minutes: 16,
    blocks: [
      {
        type: "lesson-intro",
        text: "Bar charts are the workhorses of Task 1: they arrive as a single row of bars, as grouped pairs, or as horizontal ribbons, and every variant asks the same two questions — what is being measured, and which bars dominate? This lesson walks one chart family through the ten craft skills of report writing, from reading the frame to cutting the bars that deserve no sentence, and finishes with a full worked model you can take apart sentence by sentence.",
        beforeYouStart: [
          "You know the four-part report shape: introduction, overview, two body paragraphs.",
          "You can paraphrase a rubric without borrowing its wording.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing Task 1 — bars are the family most often set, alone or inside mixed prompts"],
          ["Task & question types", "One prompt: summarise and compare a bar chart in at least 150 words, in about 20 minutes"],
          ["What is assessed", "Task Achievement above all — selection, ranking and grouping — with coherence and range close behind"],
          ["Why this matters", "Bars tempt writers into bar-by-bar transcription; the descriptors reward the selection this lesson trains, and transcription is what holds fluent writers back"],
        ],
      },
      { type: "heading", text: "Component 1 — How to analyse the visual" },
      {
        type: "steps",
        title: "The sixty-second frame",
        intro: "Four questions, answered on the chart itself before any writing:",
        steps: [
          { title: "Step 1: What do the bars measure?", text: "Read the value axis and its units aloud — weekly admissions in thousands, takings in pounds, hours per week. The axis label becomes the subject of half your sentences, so fixing it early prevents drift mid-report.", examples: [{ english: "Value axis: 'admissions (thousands)' — every sentence now reports thousands of admissions, not raw counts or shares.", note: "The axis label is the report's backbone vocabulary." }] },
          { title: "Step 2: One year or several?", text: "Count the years printed in the frame. A single year is a snapshot: levels exist but movement does not, and state verbs are the only legal set. Two or more years license change verbs between the paired bars.", examples: [{ english: "2004 and 2024 sit under each group: a snapshot inside each year, a comparison between the two.", note: "The verb licence is written into the frame itself." }] },
          { title: "Step 3: How are the bars grouped?", text: "Name the grouping axis. A single series ranks one list; a grouped series pairs each category with a year, a gender or a region; horizontal bars usually mean long labels or an explicitly printed ranking.", examples: [{ english: "Four age groups along the bottom, each carrying a pair of bars — one per year.", note: "Grouping decides which comparisons the chart offers." }] },
          { title: "Step 4: Where does the scale start?", text: "Check whether the value axis begins at zero. A truncated axis exaggerates small differences, and a writer who calls a modest gap dramatic has been fooled by geometry rather than data.", examples: [{ english: "An axis starting at 30 makes a 38-versus-34 gap look enormous — the report should still call it modest.", note: "Read the scale before trusting your eyes." }] },
        ],
      },
      { type: "heading", text: "Component 2 — How to identify the main features" },
      {
        type: "text",
        text: "Main features are the chart's headlines, not its cells. For bars, three questions surface them: which bar leads each group? which pair of bars moved most between the years? and which bars barely moved at all? On a chart of cinema admissions by age group, the headlines write themselves — the leadership changed hands from the under-18s to the 18–35 group; three of the four groups grew; the over-60s grew by three quarters yet stayed the smallest. Two or three claims like these, each true across the whole chart, are all the overview needs; every other observation belongs in a body paragraph or nowhere.",
      },
      { type: "heading", text: "Component 3 — How to select important data" },
      {
        type: "text",
        text: "Select figures the way a barrister selects evidence: each one must prove a sentence. The working quota is four to six numbers per report — the two leaders' values, the size of the biggest change, and one representative figure from the middle of the field. On the admissions chart the proof set is 42,000, 15,000, 31,000 and 52,000: together they demonstrate the whole reversal, and nothing else needs quoting. A figure without a claim behind it is decoration; a claim without a figure in front of it is an assertion. The report needs the pair, always.",
      },
      { type: "heading", text: "Component 4 — How to compare information" },
      {
        type: "table",
        title: "Comparison moves for bar charts",
        headers: ["The comparison you need", "Language that carries it"],
        rows: [
          ["Naming the leader", "the tallest bar of the four; the highest figure in the group; leads by a clear margin"],
          ["Naming the runner-up", "the second tallest; the next highest; its nearest rival"],
          ["Inside one group", "nearly twice the figure for; well ahead of the other categories"],
          ["Between the paired years", "by 2024 the younger group had overtaken it; the two groups had swapped places"],
          ["Horizontal bar charts", "first and last on the printed list; the longest bar, sitting at the top of the ranking"],
        ],
      },
      { type: "heading", text: "Component 5 — How to identify trends and rankings" },
      {
        type: "example",
        title: "Bar language that earns its place",
        items: [
          { english: "Café Corner records the week's highest takings, at 4,300 pounds.", note: "A one-week chart has no movement; 'records' holds the bar still while still ranking it.", domain: "everyday" },
          { english: "Admissions in the 36–60 group rose from 25,000 to 34,000 across the two decades.", note: "Change verbs are licensed only because the chart prints two years to move between.", domain: "exam" },
          { english: "Among the four drinks, filter coffee is the second best seller, behind only espresso.", note: "Ranking language does comparative work with one adjective instead of two sentences.", domain: "work" },
          { english: "The horizontal chart lists the ten best-selling paperbacks, with the thriller first and the poetry collection last.", note: "Horizontal bars are a printed ranking: read your sentences in the same order, top to bottom.", domain: "everyday" },
          { english: "Within each region, coastal towns outspend inland ones; between the two survey years, the inland towns closed much of the gap.", note: "'Within' ranks inside a group; 'between' compares the paired bars — a grouped chart offers both.", domain: "study" },
          { english: "The over-60 group, though the smallest throughout, grew by three quarters and was the fastest expanding segment.", note: "Smallest and fastest can be different bars — the superlative you choose depends on the claim.", domain: "exam" },
          { english: "A student circles the tallest and shortest bar in each year before writing, then drafts the overview from the circles alone.", note: "The two circles usually are the whole overview.", domain: "study" },
        ],
      },
      { type: "heading", text: "Component 6 — How to organise the response" },
      {
        type: "steps",
        title: "Organising the bar report",
        intro: "Four moves, in order:",
        steps: [
          { title: "Move 1: The one-sentence introduction", text: "Paraphrase the rubric: same facts, fresh wording, no figures. This sentence is written first precisely because it is the cheapest to get right." },
          { title: "Move 2: The figure-free overview", text: "Two or three pattern-level claims covering the whole chart. Draft it before the bodies: it names the story the bodies must then prove." },
          { title: "Move 3: Bodies grouped by story", text: "Group by the chart's own logic — risers in one paragraph, fallers in the other, or one group per paragraph when the pairs are the point. Never by the bars' printed order." },
          { title: "Move 4: Distribute the figures", text: "Two or three numbers per body, each attached to a claim, so that neither paragraph degenerates into a list with better grammar." },
        ],
      },
      { type: "heading", text: "Component 7 — How to write an introduction" },
      {
        type: "text",
        text: "The introduction is the rubric paraphrased into one sentence: swap 'shows' for 'compares' or 'illustrates', keep the subject, the groups, the unit and the years exactly as printed, and stop. 'The bar chart compares weekly cinema admissions, in thousands, across four age groups in 2004 and 2024.' One sentence, no figures, no opinion, no second sentence — anything longer is borrowing words from the overview, which has its own job to do.",
      },
      { type: "heading", text: "Component 8 — How to write an overview" },
      {
        type: "text",
        text: "The overview states the chart's pattern in two or three claims and carries no figures. It must stand alone: a reader who sees only this paragraph should know the chart's whole story. 'Overall, cinema-going grew in three of the four age groups, while the leadership of the audience passed from the under-18s to the 18–35 group.' The word 'overall' is optional; the level of claim is not — bar-by-bar observations stay in the bodies, and pattern-level claims live here.",
      },
      { type: "heading", text: "Component 9 — How to develop detail paragraphs" },
      {
        type: "four-skills",
        title: "Worked mini-model — cinema admissions by age group",
        reading: {
          text: "The chart's raw material, in words: weekly cinema admissions in 2004 stood at 42,000 for under-18s, 31,000 for the 18–35 group, 25,000 for the 36–60 group and 8,000 for the over-60s. Twenty years later the same four groups recorded 15,000, 52,000, 34,000 and 14,000 respectively. The weekly total across all four groups therefore edged up from 106,000 to 115,000, even as teenage attendance collapsed.",
          task: "Before you write: find the two groups the overview must name, and the four figures the first body paragraph will quote.",
        },
        writing: {
          task: "The bar chart below shows weekly admissions to a city's cinemas, in thousands, broken down by age group, in 2004 and 2024. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write the introduction, the overview and the first body paragraph.",
          guide: [
            "Introduction: The bar chart compares ... across four age groups in ...",
            "Overview: Overall, ... grew in three of the four groups, while the leadership ...",
            "Body opener: In 2004, the under-18s dominated admissions with ...",
            "The reversal: Two decades later the positions had reversed: ...",
          ],
          model:
            "The bar chart compares weekly cinema admissions, in thousands, across four age groups in 2004 and 2024.\n\nOverall, cinema-going grew in three of the four age groups, while the leadership of the audience passed from the under-18s to the 18–35 group.\n\nIn 2004 the under-18s dominated admissions with 42,000, comfortably ahead of the 18–35s on 31,000. Two decades later the positions had reversed: the youngest group had slumped to 15,000, roughly a third of its earlier figure, while young adults had climbed to 52,000 — the tallest bar on the chart, and more than three times the under-18 total.",
        },
        listening: {
          script:
            "Right — sixty seconds of planning before any writing. The frame first: admissions in thousands, two years, four age groups, so this is a grouped chart, and each group holds a pair of bars. The story is not simply that cinema got more popular; the story is the swap at the top. Teenagers were the biggest audience in 2004 and one of the smallest by 2024; young adults went the other way. So the overview names the swap, and the first body paragraph proves it with four figures: forty-two, fifteen, thirty-one and fifty-two. The other two groups get the second paragraph — they both rose, but modestly, and the over-60s stayed smallest. One last check before drafting: verbs. Two separate years, so past simple throughout, and change verbs only between the pairs — never inside a single year.",
          task: "Listen once, then name the four figures the tutor chose and the paragraph each will sit in.",
        },
        speaking: {
          task: "Describe the chart aloud in sixty seconds: one sentence for the frame, two for the story, one for the proof.",
          frames: [
            "The chart compares ... in ... and ...",
            "Overall, the biggest change is ...",
            "In the earlier year, ... stood at ...",
            "By ..., this figure had ...",
          ],
          checklist: [
            "Did I name both years and the unit (thousands)?",
            "Did I rank the groups rather than list them?",
            "Did I keep every verb in the past simple?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Four parts with one job each; the body opens on 2004's leader and closes on the 2024 reversal, so one paragraph carries the whole story"],
          ["Task fulfilment", "The overview names the swap at the top of the audience, and exactly four figures prove it — no bar is described for its own sake"],
          ["Grammar", "Past simple throughout; change verbs only between the paired years; the level of each single year reported with 'stood at'"],
          ["Vocabulary", "Ranking language — dominated, comfortably ahead, the tallest bar — does real comparative work instead of decorating"],
          ["Coherence", "The colon and 'while' weld the two halves of the reversal into one movement the reader can watch happening"],
        ],
      },
      { type: "heading", text: "Component 10 — How to avoid irrelevant data" },
      {
        type: "mistakes",
        title: "The bar-chart trap catalogue",
        items: [
          { wrong: "Cinema admissions increased in 2004, with under-18s at 42,000.", right: "In 2004 the under-18 group stood at 42,000, the tallest bar on the chart.", reason: "A single-year snapshot has no direction to increase along — state verbs report levels, and trend verbs wait for a second year." },
          { wrong: "The amount of cinema admissions rose across the period.", right: "The number of admissions rose across the period.", reason: "'Amount' serves uncountables like money or time; admissions, visitors and viewers are countable — a small, visible, fully avoidable error." },
          { wrong: "Bar one is 42, bar two is 31, bar three is 25 and bar four is 8.", right: "The under-18s led the field at 42,000, with the over-60s last at 8,000 — a gap of more than five to one.", reason: "Transcribing bars in print order lists without selecting; the report's unit of currency is the comparison, not the bar." },
          { wrong: "Streaming clearly became popular because cinema tickets grew expensive.", right: "Streaming's share doubled, while cinema-going fell by nearly two thirds.", reason: "Causes live outside the frame: the report states what the bars show, never why the world moved that way." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Spend the first minute on the frame: what is measured, in which units, one year or several, and how the bars are grouped"],
          ["While the clock runs", "Rank before writing — tallest, shortest and biggest mover in each year; the overview is your ranking turned into prose"],
          ["If you are stuck", "Compare the leader with its nearest rival in one sentence, and a body paragraph will grow around that comparison"],
          ["Final minutes", "Audit the verbs: state verbs inside single years, change verbs only between them, and cut any sentence that explains why"],
        ],
      },
      {
        type: "summary",
        points: [
          "The frame licenses the verbs: one year means state verbs, paired years license change verbs between the bars.",
          "Rank, don't transcribe: tallest, second tallest and smallest carry more marks than a complete inventory of bars.",
          "Grouped charts offer two comparisons — within each group, and between each pair of years — and a strong report uses both.",
          "Four to six figures, each proving a claim: leaders, biggest mover, one mid-field example, nothing more.",
          "No causes, no opinions, no bar-by-bar narration — the descriptors reward selection, and selection is trained, not gifted.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per foundations lesson.",
        items: [
          { question: "What three facts does task analysis extract from a Task 1 rubric before writing?", options: ["The data set, the time frame and the units", "The examiner's wording, its synonyms and its tone", "The chart's colours, legend and title"], correctIndex: 0, explanation: "Task analysis fixes tense, comparison set and vocabulary in one pass — the foundations lesson's whole method.", from: "Understanding task instructions" },
          { question: "How many figures does a full Task 1 report quote, and what must each one do?", options: ["Four to six, each supporting a claim", "Every figure the visual prints", "One figure per paragraph, chosen at random"], correctIndex: 0, explanation: "Selection is the planning skill: each figure is evidence for a sentence's claim, never decoration.", from: "Planning" },
          { question: "What are the four parts of a Task 1 report?", options: ["Introduction, overview, body one, body two", "Introduction, three bodies, conclusion", "Overview, two bodies, summary, recommendation"], correctIndex: 0, explanation: "The four-part shape gives each paragraph one job; a Task 1 conclusion would only repeat the overview.", from: "Paragraph organisation" },
          { question: "Which word class adds rate and degree to a direction verb?", options: ["Adverbs — sharply, gradually, marginally", "Articles — a, an, the", "Pronouns — it, this, that"], correctIndex: 0, explanation: "Adverbs carry how fast and how far; the noun forms, like 'a sharp fall', then vary the sentence pattern.", from: "Vocabulary" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "A bar chart shows hot-drink sales at one café on one Friday in June — four drinks, one day, no other year. Which verb set fits?",
        hints: ["Does the chart contain any time axis to move along?"],
        options: [
          { id: "a", text: "Rose, fell and doubled — every bar chart implies a direction." },
          { id: "b", text: "Stands at, records and is — a one-day chart has levels but no movement to report." },
          { id: "c", text: "Is expected to rise — single-day sales always point forward." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Stands at, records and is — a one-day chart has levels but no movement to report.",
          "The frame licenses the verbs: one day means one set of levels, so state verbs hold each bar still while still allowing ranking and comparison.",
          "(a) invents a timeline the chart never printed; (c) turns a report into a forecast.",
        ),
        tags: ["awriting", "t1", "bar", "state-verbs"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Read this snapshot chart, then choose the sentence that could open its overview.",
        hints: ["An overview names patterns — leaders and gaps — without quoting every figure."],
        passageTitle: "Village bakeries, one Saturday",
        passage:
          "The bar chart shows how many loaves four village bakeries sold on a single Saturday. The Old Mill sold 210 loaves, the Copper Oven 145, Field & Hearth 96, and the Night Bakery 28.",
        question: "Which sentence could open the overview of a report on this chart?",
        options: [
          { id: "a", text: "Overall, the Old Mill out-sold every rival, while the Night Bakery sold less than a seventh of its total." },
          { id: "b", text: "The Old Mill sold 210 loaves, the Copper Oven 145, Field & Hearth 96 and the Night Bakery 28." },
          { id: "c", text: "Bread sales grew steadily across the four bakeries over the Saturday." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Overall, the Old Mill out-sold every rival, while the Night Bakery sold less than a seventh of its total.",
          "The overview names the leader and the scale of the gap in pattern terms; exact figures wait for the body paragraph, and 'grew' would need a time axis the chart does not have.",
          "(b) is body detail — a list with figures; (c) reports direction on a chart that contains none.",
        ),
        tags: ["awriting", "t1", "bar", "overview"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Which sentence uses ranking language most effectively for a four-bar chart?",
        hints: ["Ranking names positions — tallest, second tallest — rather than repeating values."],
        options: [
          { id: "a", text: "The cinema bar is very tall and the radio bar is quite small." },
          { id: "b", text: "Cinema has the tallest bar of the four, streaming the second tallest, and radio the smallest by a distance." },
          { id: "c", text: "Bar one reaches 42, bar two 31, bar three 25 and bar four 8." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Cinema has the tallest bar of the four, streaming the second tallest, and radio the smallest by a distance.",
          "Ranking language names each bar's position in the field, so one sentence compares all four bars and the reader never needs to consult the axis.",
          "(a) measures by feel instead of position; (c) transcribes the axis without comparing anything.",
        ),
        tags: ["awriting", "t1", "bar", "ranking"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Complete the sentence with the ranking word.",
        sentence: "With 42,000 weekly admissions, the under-18 group entered the period with the ___ figure on the chart; twenty years later it recorded the smallest.",
        acceptedAnswers: ["highest", "largest", "biggest", "tallest"],
        hints: [],
        feedback: fb(
          "highest / largest / biggest / tallest",
          "The sentence pairs an opening superlative with a closing one — from highest to smallest is the whole reversal story compressed into a single line.",
          "Words naming direction or change, such as 'growing' or 'rising', miss the ranking job the sentence asks for.",
        ),
        tags: ["awriting", "t1", "bar", "superlatives"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. A grouped bar chart pairs two years for each category.",
        question: "Name the two comparisons a grouped bar chart offers, in one sentence.",
        acceptedAnswers: [
          "within each group the categories can be ranked against each other, and between the paired bars the same category can be compared across the two years",
          "comparing categories within a group, and comparing one category's two bars between the years",
          "within-group ranking of the categories, and between-year comparison of each category's pair of bars",
        ],
        keywords: ["within", "between"],
        hints: [],
        feedback: fb(
          "Within groups, categories rank against each other; between the paired bars, the same category is compared across the years.",
          "The grouping is the chart's second axis: like against like inside a group, and the same group against itself across time — a strong report uses both.",
          "An answer naming only one comparison has left half the chart undescribed.",
        ),
        tags: ["awriting", "t1", "bar", "grouping"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Which sentence has no place in any Task 1 report?",
        hints: [],
        options: [
          { id: "a", text: "The under-18 group, the tallest bar in 2004, had shrunk to the smallest by 2024." },
          { id: "b", text: "Young people clearly lost interest in the cinema during the two decades covered." },
          { id: "c", text: "Weekly admissions across all four groups totalled 115,000 in 2024, up from 106,000 in 2004." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Young people clearly lost interest in the cinema during the two decades covered.",
          "'Lost interest' is a motive the chart cannot show: Task 1 reports measurable quantities, and explanation belongs to essays, not reports.",
          "(a) is a legitimate ranking claim and (c) a legitimate total — both report exactly what the bars measure.",
        ),
        tags: ["awriting", "t1", "bar", "relevance"],
      }),
    ],
    homework: [
      "Collect three bar-chart prompts — one snapshot, one grouped by year, one horizontal — and write only their overview sentences, ninety seconds each and no figures allowed.",
      "Take any grouped bar chart and mark every verb in your next report as state or trend; then re-audit each one against the chart's time axis.",
    ],
    assignment: {
      title: "Write a bar-chart report",
      instructions:
        "Using the cinema-admissions chart from this lesson as your data (or any grouped bar chart from your practice materials), write a full report: a one-sentence paraphrased introduction, a two- or three-claim overview, and two body paragraphs that rank the groups and compare the paired years. Quote no more than six figures, each supporting a claim, and keep every inside-a-year verb a state verb.",
      minWords: 150,
      maxWords: 200,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-t1-line",
    title: "Task 1 — Line graphs",
    description:
      "The change-over-time family: direction, rate and degree vocabulary, anchor points instead of point-by-point narration, honest crossings dated to a window, and the choice between weaving and blocking the body paragraphs.",
    objectives: [
      "deploy direction verbs with adverbs and noun forms without repetition",
      "anchor each line to its start, peak, trough and end instead of narrating every point",
      "report a crossing with its window, its level and the new leader",
      "choose between weaving and blocking body paragraphs to serve the story",
    ],
    minutes: 16,
    blocks: [
      {
        type: "lesson-intro",
        text: "Line graphs are Task 1's biography form: each line is a subject with a life, and the report is the life retold in two paragraphs. The craft is entirely in the compression — most candidates narrate every plotted point and run out of time at halfway, while the trained writer fixes five or six anchors, dates the crossing honestly, and lets the verbs carry the rest. This lesson builds that compression, family by family rule, and ends with a full model you can imitate mechanically.",
        beforeYouStart: [
          "You can name a chart's frame: subject, units and span.",
          "You know the difference between a claim and a figure.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing Task 1 — line graphs appear constantly, most often spanning decades of data"],
          ["Task & question types", "One prompt: report the main changes and compare series across the period, at least 150 words"],
          ["What is assessed", "Direction and rate language, anchor-point selection, and the honest handling of crossings and turning points"],
          ["Why this matters", "Point-by-point narration is this family's signature failure; anchors plus precise trend language are what lift the report above transcription"],
        ],
      },
      { type: "heading", text: "Component 1 — How to analyse the visual" },
      {
        type: "steps",
        title: "Reading the frame of a line graph",
        intro: "The frame of a line graph is almost all in its axes:",
        steps: [
          { title: "Step 1: Fix the time axis", text: "Read the span and the interval between plotted points. Anything you claim — a peak, a crossing, a turning point — happens between printed dates, so it gets reported as a window, never as an invented day.", examples: [{ english: "Points every four years from 2000 to 2024: 'rail overtook the bus between 2012 and 2016', not 'in 2014'.", note: "Windows are honest; invented dates are guesses." }] },
          { title: "Step 2: Fix the level axis", text: "Name the measure and its unit — billions of journeys, thousands of users, per cent of the market — and check where the scale starts. A level axis that begins away from zero exaggerates every wiggle.", examples: [{ english: "Level axis: 'journeys (billions)', starting at zero — the whole rise is real, not magnified.", note: "The unit names the subject of your sentences." }] },
          { title: "Step 3: Identify each line", text: "Each line is one series with its own biography. Name both in full once, then shorten: 'rail' and 'the bus' can carry a whole report after one formal introduction.", examples: [{ english: "Legend: 'passenger journeys by rail' and 'passenger journeys by bus' — introduced in full once, then 'rail' and 'bus'.", note: "Introduce, then abbreviate; never re-expand." }] },
          { title: "Step 4: Mark the geometry", text: "Before writing, note where lines cross, where they run parallel and where they kink. Crossings are the relationship's turning points; kinks are the story's events; parallel stretches are usually the least interesting thing on the page.", examples: [{ english: "One crossing midway, one shared collapse near the end — two events, two potential body paragraphs.", note: "Geometry decides paragraphing before style does." }] },
        ],
      },
      { type: "heading", text: "Component 2 — How to identify the main features" },
      {
        type: "text",
        text: "A line graph's main features are its shapes. Ask four questions: what does each line do overall — climb, fall or flatten? how do the lines relate — which leads, and did the lead change hands? is there an exceptional event, a spike, a collapse, a flat stretch? and where does each line start and finish? On a graph of rail and bus journeys the answers are: rail climbs while bus slides; the bus leads early and rail takes the lead midway; both collapse in 2020; and rail finishes high while bus finishes low. Those four sentences are the report's skeleton, waiting for figures.",
      },
      { type: "heading", text: "Component 3 — How to select important data" },
      {
        type: "text",
        text: "Anchor points replace narration. Each line needs its start, its peak, its trough and its end, and a crossing needs its window and, if the grid allows, its level. The working set for a two-line graph is about six figures: both starting values, the values around the crossing, and both end values. Events in between — peaks and collapses — can be reported proportionally when the quota is full, because a ratio is itself a figure with a claim attached: 'both slumped to roughly half their 2016 levels' costs no number at all.",
      },
      { type: "heading", text: "Component 4 — How to compare information" },
      {
        type: "table",
        title: "Comparison moves for line graphs",
        headers: ["The comparison you need", "Language that carries it"],
        rows: [
          ["One line over time", "climbed from 1.2 billion to 2.6 billion; ended the period on 2.5 billion"],
          ["Line against line", "rail remained ahead of the bus throughout; the two lines moved in opposite directions"],
          ["Rate differences", "climbed twice as fast as its rival; fell more steeply than anything else on the chart"],
          ["The crossing", "rail overtook the bus between 2012 and 2016, by which point the gap had fully reversed"],
          ["Start and end framing", "began the period at 1.2 billion and finished at 2.5 billion, despite the intervening collapse"],
        ],
      },
      { type: "heading", text: "Component 5 — How to identify trends and rankings" },
      {
        type: "example",
        title: "Direction, rate and degree",
        items: [
          { english: "Wind capacity rose sharply for a decade, then plateaued at around 19 gigawatts.", note: "One line can need two verbs: a verb for the climb and another for the flat stretch that followed it.", domain: "work" },
          { english: "Membership dipped in March but recovered by June.", note: "'Dip' names a small, temporary fall — sharper than a slowdown, gentler than a collapse.", domain: "everyday" },
          { english: "Enrolments fluctuated between 400 and 500 for most of the decade.", note: "'Fluctuate' requires movement in both directions; a straight climb never fluctuates, however steep.", domain: "school" },
          { english: "Exports climbed gradually, whereas imports fell marginally.", note: "Adverbs carry rate and degree: 'gradually' says how fast, 'marginally' says how far — two different questions, two different words.", domain: "exam" },
          { english: "The noun forms pack the same information: a sharp fall, a steady recovery, a slight narrowing of the gap.", note: "Verb twice, then switch to the noun form — the standard cure for verb repetition.", domain: "study" },
          { english: "Average rents ended the period almost exactly three times their starting level.", note: "Start-and-end framing compresses a whole line into one clause with a single ratio.", domain: "everyday" },
          { english: "After overtaking diesel in 2019, electric sales never trailed again.", note: "The crossing gets its own clause: who passed whom, and when — the relationship's whole history in miniature.", domain: "exam" },
        ],
      },
      { type: "heading", text: "Component 6 — How to organise the response" },
      {
        type: "steps",
        title: "Block or weave?",
        intro: "Two structures exist; the chart chooses between them:",
        steps: [
          { title: "Move 1: Choose the unit of narration", text: "Blocked structure tells one line's story fully, then the other's. Woven structure moves period by period with both lines in every paragraph. Both are legal; only one is right for your chart." },
          { title: "Move 2: Let the crossing decide", text: "A mid-period crossing wants weaving, because the crossing needs both lines inside one clause. Two distant, parallel lines tolerate blocking — their relationship is distance, not contact." },
          { title: "Move 3: Give each body an anchor set", text: "In the woven plan, body one carries the divergence years with the start values and the crossing; body two carries the exceptional event and the end values. Each body ends with its strongest figure." },
          { title: "Move 4: Keep the overview directional", text: "The overview gives each line its headline and the relationship its history — two sentences maximum, no figures, and no clause a body paragraph will repeat word for word." },
        ],
      },
      { type: "heading", text: "Component 7 — How to write an introduction" },
      {
        type: "text",
        text: "The introduction paraphrases the rubric's span honestly: 'The line graph shows how many passenger journeys were made each year by rail and by bus in one country between 2000 and 2024, in billions.' The span takes 'between...and', both series get named, and the unit travels with the measure. If the graph runs up to the present, the tense plan shifts after this sentence — history takes the past simple, and any state that persists into now may take the present perfect.",
      },
      { type: "heading", text: "Component 8 — How to write an overview" },
      {
        type: "text",
        text: "The overview gives each line its headline and the relationship its history, without figures. 'Overall, rail travel expanded steadily and overtook the declining bus midway through the period, before both modes collapsed in 2020 and recovered only part of the lost ground.' One sentence can carry a line's whole biography when the verbs are precise; a second sentence covers the exceptional event or the end state. What never appears: numbers, causes, and phrases like 'as can be seen', which spend words saying nothing.",
      },
      { type: "heading", text: "Component 9 — How to develop detail paragraphs" },
      {
        type: "four-skills",
        title: "Worked mini-model — rail and bus journeys, 2000–2024",
        reading: {
          text: "Rail journeys, in billions: 1.2 in 2000, 1.5 in 2004, 1.9 in 2008, 2.3 in 2012, 2.6 in 2016, 1.4 in 2020 and 2.5 in 2024. Bus journeys over the same seven dates: 2.9, 2.8, 2.7, 2.5, 2.3, 1.1 and 1.9 billion.",
          task: "Find the four anchor points of each line, and the two printed dates between which the lines cross.",
        },
        writing: {
          task: "The line graph below shows the number of passenger journeys made each year by rail and by bus in one country between 2000 and 2024, in billions. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write the introduction, the overview and the first body paragraph.",
          guide: [
            "Introduction: The line graph shows ... between ... and ..., in ...",
            "Overview: Overall, rail ... while the bus ...; both lines also ...",
            "Body opener: For the first sixteen years, the two lines moved in opposite directions:",
            "Direction plus rate: Rail journeys climbed gradually from ... to ..., while bus travel slipped from ... to ...",
            "The crossing: The gap narrowed until rail finally overtook the bus between ... and ...",
          ],
          model:
            "The line graph shows how many passenger journeys were made each year by rail and by bus in one country between 2000 and 2024, in billions.\n\nOverall, rail travel expanded steadily over the period and overtook the declining bus, before both modes collapsed in 2020 and recovered only part of the lost ground.\n\nFor the first sixteen years of the period the two lines moved in opposite directions. Rail journeys climbed gradually from 1.2 billion in 2000 to 2.6 billion by 2016, while bus travel slipped from 2.9 billion to 2.3 billion over the same years, so the gap between the modes narrowed steadily and rail finally overtook the bus between 2012 and 2016.",
        },
        listening: {
          script:
            "Two lines, twenty-four years, billions of journeys — planning before writing. First, the shape of each life. Rail climbs in a fairly regular staircase until 2016, then a cliff, then a partial climb back. Bus is a gentle slide into 2016, the same cliff, and a weaker climb back. So the overview has two moves: the long divergence with a crossing in the middle, and the shared collapse near the end. My first body paragraph takes the divergence — 2000 to 2016 — because that is where the crossing lives; a second body would take the collapse and the recovery. Anchors only: one point two, two point six, two point nine, two point three, and the crossing window. I will not narrate every four-year step — the reader has eyes, and my job is the shape.",
          task: "Name the two moves the tutor's overview will make, and the window in which the crossing falls.",
        },
        speaking: {
          task: "Speak the story of the two lines in sixty seconds, quoting no more than four figures.",
          frames: [
            "The graph tracks ... and ... over ...",
            "Overall, one line ... while the other ...",
            "The turning point comes midway, when ...",
            "By the end of the period, ... had ...",
          ],
          checklist: [
            "Did every direction verb match the line's actual shape?",
            "Did I name the crossing window rather than guess a year?",
            "Did I resist narrating every data point?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "The body takes the divergence years only; the collapse and recovery would form a clean second paragraph, each body with its own anchors"],
          ["Task fulfilment", "Four figures carry the whole first movement — start values, peak and crossing window — instead of seven narrated data points"],
          ["Grammar", "Past simple for finished history; the crossing dated to a window between printed years rather than an invented moment"],
          ["Vocabulary", "Climbed gradually, slipped, narrowed, overtook — four direction verbs with different subjects, no repetition, each modified where rate matters"],
          ["Coherence", "'While' and 'until' tie the two lines into one relationship, so the paragraph tells a single story rather than two separate biographies"],
        ],
      },
      { type: "heading", text: "Component 10 — How to avoid irrelevant data" },
      {
        type: "mistakes",
        title: "The line-graph trap catalogue",
        items: [
          { wrong: "Rail journeys peaked at their highest peak of 2.6 billion in 2016.", right: "Rail journeys peaked at 2.6 billion in 2016.", reason: "'Peaked' already contains the superlative; the doubled phrase is pure redundancy and reads as padding to an examiner." },
          { wrong: "The figure for bus travel fluctuated between 2.9 and 2.3 billion.", right: "Bus travel declined steadily from 2.9 billion to 2.3 billion.", reason: "Fluctuation demands rises and falls both; a one-way slide is a decline, and the misused verb misreports the line's whole shape." },
          { wrong: "In 2000 there were 1.2 billion rail journeys, in 2004 1.5 billion, in 2008 1.9 billion and in 2012 2.3 billion.", right: "Rail journeys climbed gradually from 1.2 billion in 2000 to 2.3 billion in 2012, gaining between 0.3 and 0.4 billion every four years.", reason: "Point-by-point narration transcribes the axis; anchors plus one rate sentence carry the same information and read like analysis." },
          { wrong: "Journeys collapsed in 2020 because of the global health crisis.", right: "Both lines collapsed in 2020, falling to roughly half their 2016 levels.", reason: "The cause is outside knowledge; the collapse is on the chart. Report the second, and stay silent about the first." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read the axes first: the span and its intervals, the level measure and where its scale starts, and which series each line carries"],
          ["While the clock runs", "Anchor, don't narrate — start, peak, trough, end and the crossing carry the whole story in five or six figures"],
          ["If you are stuck", "Write each line's first and last value beside each other; the period's story is usually the distance between them"],
          ["Final minutes", "Check every direction verb against the line's true shape, and confirm the crossing carries a window, not a guess"],
        ],
      },
      {
        type: "summary",
        points: [
          "Anchor points — start, peak, trough, end, crossing — replace point-by-point narration entirely.",
          "Direction verbs need adverbs of rate and degree, and noun forms rescue the third mention of the same movement.",
          "Crossings are reported as windows between printed dates, with both series and the new leader named.",
          "Weave when the lines interact; block when they run apart — the chart's geometry picks the structure.",
          "Causes of events stay outside the report, however obvious they seem from the year alone.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per foundations lesson.",
        items: [
          { question: "A rubric reads 'The graph shows information about X between 2000 and 2024.' What must the introduction do with it?", options: ["Paraphrase it in one sentence — same facts, fresh wording", "Copy it word for word", "Expand it into three sentences of background"], correctIndex: 0, explanation: "The introduction is a one-sentence paraphrase; copying wastes the easiest transformation on the whole paper.", from: "Understanding task instructions" },
          { question: "What does planning produce before drafting a Task 1 response?", options: ["Two or three headline patterns and the figures that prove them", "A list of every number on the visual", "A rough essay introduction with an opinion"], correctIndex: 0, explanation: "The plan is a ranking of features, not a transcript — anchors are chosen before the first sentence is written.", from: "Planning" },
          { question: "How should the two body paragraphs be filled?", options: ["Each by one data group or story, with its own figures", "Body one with everything, body two with the leftovers", "Alternating single sentences between the groups"], correctIndex: 0, explanation: "Grouping by story keeps like with like; this lesson's divergence-and-collapse split is the rule applied.", from: "Paragraph organisation" },
          { question: "Which noun form pairs with the verb 'to rise sharply'?", options: ["A sharp rise", "A sharply rise", "A rise sharp"], correctIndex: 0, explanation: "The adverb becomes an adjective inside the noun phrase — the standard fix for verb repetition.", from: "Vocabulary" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "A share price rises a little, falls a little, rises again, falls again — repeatedly across the period. One verb names this behaviour?",
        hints: ["The direction keeps reversing — which verb needs movement in both directions?"],
        options: [
          { id: "a", text: "climbed" },
          { id: "b", text: "fluctuated" },
          { id: "c", text: "plummeted" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "fluctuated",
          "Fluctuation is movement in both directions without settling; a one-way line climbs or falls, and a steep one-way fall plummets — neither fits a line that keeps turning.",
          "(a) and (c) each describe one direction only, so neither can carry a line that turns repeatedly.",
        ),
        tags: ["awriting", "t1", "line", "direction-verbs"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Read this two-line description, then choose the sentence that reports the crossing precisely.",
        hints: ["A precise crossing names the year, the level and who led afterwards."],
        passageTitle: "Library loans, 2010–2030",
        passage:
          "The line graph shows annual loans at a city library between 2010 and 2030. E-book loans rose from 2,000 in 2010 to 38,000 in 2030, while paper loans fell from 46,000 to 19,000. The two lines crossed in 2018, when each format recorded 27,000 loans.",
        question: "Which sentence reports the crossing precisely?",
        options: [
          { id: "a", text: "The two formats swapped the lead in 2018, when both recorded 27,000 loans, and e-books led thereafter." },
          { id: "b", text: "E-books were more popular than paper books throughout the whole period." },
          { id: "c", text: "The lines crossed somewhere in the middle of the period." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The two formats swapped the lead in 2018, when both recorded 27,000 loans, and e-books led thereafter.",
          "A crossing sentence needs three parts — the year, the shared level and the new leader — and this option carries all three from the printed data.",
          "(b) contradicts the years before 2018; (c) is a vague gesture where the data supports exactness.",
        ),
        tags: ["awriting", "t1", "line", "crossing"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Rail overtakes bus between 2012 and 2016 on a graph whose points sit four years apart. How should the crossing be reported?",
        hints: ["The chart prints years at intervals — you cannot know the exact crossing month."],
        options: [
          { id: "a", text: "In 2014 the rail line crossed the bus line." },
          { id: "b", text: "Rail overtook the bus between 2012 and 2016, by which point it had moved from 0.2 billion behind to 0.3 billion ahead." },
          { id: "c", text: "The two lines met and crossed each other at some time." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Rail overtook the bus between 2012 and 2016, by which point it had moved from 0.2 billion behind to 0.3 billion ahead.",
          "With four-year intervals the honest crossing is a window, and the two gap figures show the reversal actually happening across it — precision without invention.",
          "(a) invents a date the grid cannot support; (c) wastes the chance to locate the reversal even approximately.",
        ),
        tags: ["awriting", "t1", "line", "crossing"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Complete the sentence.",
        sentence: "Bus journeys never ___ their pre-2020 level, ending the period at 1.9 billion against 2.9 billion at the start.",
        acceptedAnswers: ["regained", "recovered", "reached", "matched"],
        hints: [],
        feedback: fb(
          "regained / recovered / reached / matched",
          "This is the end-point framing sentence: where the line finished against where it began is the most economical summary a line can get.",
          "Verbs of rising, such as 'climbed' or 'grew', clash with 'never', which already blocks the recovery.",
        ),
        tags: ["awriting", "t1", "line", "endpoints"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Anchors, not narration.",
        question: "Name the four anchor points that carry a line's whole story.",
        acceptedAnswers: [
          "the starting point, the peak, the trough and the end point",
          "the start, the peak, the trough and the end",
          "start point, peak, trough and end point",
        ],
        keywords: ["start", "peak", "trough", "end"],
        hints: [],
        feedback: fb(
          "Start, peak, trough and end.",
          "Four positions carry the line's shape; every other plotted point is confirmation, and narrating them all turns analysis into transcription.",
          "Answers listing years instead of positions have confused the axis with the anchors.",
        ),
        tags: ["awriting", "t1", "line", "anchors"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. A two-line graph's lines cross midway through the period. Which organisation serves it best?",
        hints: [],
        options: [
          { id: "a", text: "Woven period by period, so the crossing lands inside one paragraph where both lines share the sentence." },
          { id: "b", text: "Blocked: one line fully in paragraph one, the other fully in paragraph two." },
          { id: "c", text: "One paragraph per data point, naming both values each time." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Woven period by period, so the crossing lands inside one paragraph where both lines share the sentence.",
          "The crossing is the relationship's turning point and needs both lines in one clause; weaving keeps the relationship in view where blocking would split it across a paragraph seam.",
          "(b) is workable for distant, parallel lines but buries a mid-period crossing; (c) is point-by-point transcription.",
        ),
        tags: ["awriting", "t1", "line", "organisation"],
      }),
    ],
    homework: [
      "Write five sentences about any line graph you can find — one each for rise, fall, plateau, dip and fluctuate — checking each verb against the line's true shape.",
      "Convert your five sentences into noun forms, such as 'a sharp rise' or 'a gradual decline', to build a second, repetition-free version of the same description.",
    ],
    assignment: {
      title: "Write a line-graph report",
      instructions:
        "Using the rail-and-bus graph from this lesson as your data (or any two-line graph from your practice materials), write a full report: a paraphrased introduction, an overview giving each line's headline plus the crossing, and two body paragraphs — one for the divergence, one for the collapse and recovery. Use at least four different direction verbs, each modified where rate matters, and date the crossing honestly as a window.",
      minWords: 150,
      maxWords: 200,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-t1-pie",
    title: "Task 1 — Pie charts",
    description:
      "The proportion family: shares that must balance at one hundred, category-by-category comparison across the two charts, fractions as precision instruments, and percentage-point discipline on every change.",
    objectives: [
      "read a pie frame for its whole, its slices and the number of charts",
      "compare two pies category by category, never chart against chart",
      "convert shares into precise fractions where they sharpen a claim",
      "report every share change in percentage points and keep slices summing to one hundred",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "Pie charts look like the friendliest visual on the paper and mark like the strictest, because everything depends on one discipline: shares. A slice is always a share of a named whole, changes between shares are measured in percentage points, and the two charts are compared slice against matching slice. This lesson installs that discipline through the ten components and a complete model, so the difference between a list of percentages and a report about proportions becomes automatic.",
        beforeYouStart: [
          "You know per cent from percentage points in everyday talk.",
          "You can add, subtract and compare two-figure numbers quickly.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing Task 1 — pie charts usually arrive in pairs, one chart per period or per group"],
          ["Task & question types", "One prompt: compare proportions across two moments, at least 150 words in about 20 minutes"],
          ["What is assessed", "Proportion language, category-by-category comparison, and percentage-point accuracy on every movement"],
          ["Why this matters", "Shares are this family's whole vocabulary: confusing points with per cent, or chart with chart, undoes otherwise strong writing"],
        ],
      },
      { type: "heading", text: "Component 1 — How to analyse the visual" },
      {
        type: "steps",
        title: "Reading the frame of a pie chart",
        intro: "Four questions, and the first is the one everyone skips:",
        steps: [
          { title: "Step 1: Name the whole", text: "Ask what the 100 per cent is: household waste, a market's revenue, a day's hours. Every share you report is a share OF this whole, and naming it in the introduction is what separates a report from a list of percentages.", examples: [{ english: "Caption: 'household waste by destination' — so 41 per cent means 41 per cent of all household waste, not of recycling.", note: "The whole is the frame's anchor." }] },
          { title: "Step 2: Count the pies", text: "One pie describes a single distribution; two pies demand comparison — across time or between groups. The count sets your entire verb plan and paragraph plan before you write a word.", examples: [{ english: "Two pies, 2000 and 2024: a before-and-after story with change verbs licensed between them.", note: "Two charts, one comparison." }] },
          { title: "Step 3: List the slices", text: "Check the categories and whether both pies carry the same set. Identical slices make clean pairs; a category appearing in only one pie must be flagged, not silently ignored.", examples: [{ english: "Four destinations on both charts: landfill, recycling, composting, incineration — two-by-four pairs, all comparable.", note: "Matching slices are comparison invitations." }] },
          { title: "Step 4: Check for totals", text: "Captions sometimes print the whole's absolute size — thousands of tonnes, millions of users. If present, shares can be converted into real quantities; if absent, the report stays in percentages and never invents a total.", examples: [{ english: "No total printed: the report speaks only of shares and points, never of tonnes.", note: "Absence of a total is information too." }] },
        ],
      },
      { type: "heading", text: "Component 2 — How to identify the main features" },
      {
        type: "text",
        text: "Pie charts are read for three features: who wears the crown in each chart, how the crown changed hands, and which categories moved most and least. On a pair of waste-stream pies, landfill rules the earlier year with just under two thirds of the whole; by the later year recycling wears the crown with two fifths; and the movers are landfill, down 33 points, and recycling, up 23. The two small streams shift by six and four points and count as stability, not story. Crown, handover, movers — those three observations are the overview's raw material, and not one percentage needs quoting yet.",
      },
      { type: "heading", text: "Component 3 — How to select important data" },
      {
        type: "text",
        text: "The quota survives even here: the leader's before-and-after shares, the biggest mover's pair of values, and at most one further figure if a small slice is the exception worth naming. That is four to six numbers. And every share change must balance: because both pies sum to one hundred, the four movements sum to zero — minus thirty-three, plus twenty-three, plus six and plus four on the waste pies. Arithmetic is part of accuracy, and accuracy is half of Task Achievement.",
      },
      { type: "heading", text: "Component 4 — How to compare information" },
      {
        type: "table",
        title: "Comparison moves for pie charts",
        headers: ["The comparison you need", "Language that carries it"],
        rows: [
          ["Naming a share", "accounts for; makes up; comprises; takes"],
          ["The crown", "the largest single destination; the leading category; the biggest slice of the whole"],
          ["Change in share", "rose from 18 per cent to 41 per cent; a rise of 23 percentage points"],
          ["Fractions as precision", "just under two thirds; one in three; roughly a tenth of the whole"],
          ["A balanced pair", "the two categories moved in opposite directions by comparable magnitudes"],
        ],
      },
      { type: "heading", text: "Component 5 — How to identify trends and rankings" },
      {
        type: "example",
        title: "Proportion language in action",
        items: [
          { english: "Commuting accounts for just under a third of household carbon emissions.", note: "'Accounts for' is the default proportion verb — formal, precise and endlessly reusable across subjects.", domain: "everyday" },
          { english: "Two graduates in five take a first job outside their field of study.", note: "'Two in five' reads faster than 40 per cent and carries exactly the same information.", domain: "school" },
          { english: "Fixed costs make up the bulk of a small café's outgoings, with rent alone comprising a quarter.", note: "'Make up' and 'comprise' let one sentence carry two different shares without repeating a verb.", domain: "work" },
          { english: "One slice — the 4 per cent spent on repairs — is the chart's real story, being the only category that shrank.", note: "A small slice earns a sentence when it is the exception to the chart's pattern.", domain: "exam" },
          { english: "The share of viewers using tablets rose by 9 percentage points, from 12 to 21 per cent.", note: "Points measure the distance between shares; per cent measures growth — confusing them changes the meaning entirely.", domain: "study" },
          { english: "At 26 per cent apiece, the two middle categories together still trail the leader.", note: "Adding shares is legal arithmetic, and comparing the sum against the leader is often the sharpest comparison available.", domain: "exam" },
        ],
      },
      { type: "heading", text: "Component 6 — How to organise the response" },
      {
        type: "steps",
        title: "Organising the pie report",
        intro: "The bodies follow the movement, not the charts:",
        steps: [
          { title: "Move 1: Order the bodies by size of movement", text: "The biggest swap takes the first body paragraph; the smaller movements share the second. Physical chart order — first pie, then second pie — is never the paragraph order." },
          { title: "Move 2: Pair the movers as mirrors", text: "Write the two big movers as mirror sentences: one falls from X to Y, while the other climbs from A to B. The symmetry makes the swap visible without a single connector doing the work." },
          { title: "Move 3: Distribute fractions and figures", text: "Percentages carry the body paragraphs; fractions appear where they sharpen a claim — 'just under two thirds' is more vivid than 64 per cent and no less exact when the claim is approximate." },
          { title: "Move 4: Hold the overview figure-free", text: "The overview names the crown change in claim language only. If a percentage sneaks in, the sentence belongs in a body paragraph instead." },
        ],
      },
      { type: "heading", text: "Component 7 — How to write an introduction" },
      {
        type: "text",
        text: "The introduction names the whole, the number of charts and the two moments: 'The two pie charts compare how household waste was managed in one town in 2000 and 2024, as percentages of the total waste stream.' 'Proportions of', 'percentages of' and 'shares of' are the standard transformations of the rubric's wording, and both years must appear — a two-chart report that names only one year has half its frame missing.",
      },
      { type: "heading", text: "Component 8 — How to write an overview" },
      {
        type: "text",
        text: "The overview names the crown change and nothing numeric: 'Overall, the town shifted from burying most of its waste to recycling it, as landfill lost the dominant position it held at the start of the period.' If two categories simply swap places, one sentence says so; if several move moderately, the overview generalises the direction and the bodies itemise. What the overview never contains: percentages, fractions, causes — and the phrase 'the biggest slice is the biggest', which says nothing twice.",
      },
      { type: "heading", text: "Component 9 — How to develop detail paragraphs" },
      {
        type: "four-skills",
        title: "Worked mini-model — the waste stream in 2000 and 2024",
        reading: {
          text: "In 2000, landfill took 64 per cent of household waste, recycling 18 per cent, composting 10 per cent and incineration 8 per cent. By 2024 the same four destinations took 31, 41, 16 and 12 per cent respectively. Each pie therefore sums to exactly one hundred, and the four movements — minus 33, plus 23, plus 6 and plus 4 — cancel out to zero.",
          task: "Check the arithmetic of both pies, then name the pair of categories the overview must mention.",
        },
        writing: {
          task: "The two pie charts below show how household waste was managed in one town in 2000 and in 2024, as percentages of the total. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write the introduction, the overview and the first body paragraph.",
          guide: [
            "Introduction: The two pie charts compare ... in ... and ...",
            "Overview: Overall, the town shifted from ... to ...",
            "Body opener: The largest reversal affected landfill and recycling.",
            "Points, not per cent: Its share fell from ... to ..., while recycling climbed from ... to ..., a rise of ... percentage points",
            "Small streams: The two smaller destinations grew far more modestly, from ... to ...",
          ],
          model:
            "The two pie charts compare how household waste was managed in one town in 2000 and 2024, as percentages of the total waste stream.\n\nOverall, the town shifted from burying most of its waste to recycling it, as landfill lost the dominant position it held at the start of the period.\n\nThe largest reversal affected landfill and recycling. Landfill's share fell from 64 per cent of the stream to 31 — from just under two thirds to less than a third — while recycling climbed from 18 per cent to 41, a rise of 23 percentage points that carried it past landfill as the leading destination. The two smaller streams grew far more modestly: composting advanced from a tenth to roughly a sixth, and incineration from 8 per cent to 12.",
        },
        listening: {
          script:
            "Pies are shares, so my first question is always the same: what is the whole being divided? Household waste — four destinations, two years. Second question: which slice wears the crown in each pie, and did the crown change hands? It did — landfill to recycling — and that handover is my overview. Now the discipline: shares move in percentage points, and my four movements have to cancel to zero, so minus thirty-three, plus twenty-three, plus six, plus four. In the body I pair the two big movers — landfill and recycling — as mirror sentences, and give each small stream a single clause. And no causes: the charts show where the waste went, not why, and 'awareness' is a word that earns nothing here.",
          task: "Say the tutor's four point-movements back in order, then state the handover in one sentence.",
        },
        speaking: {
          task: "Describe the two pies aloud in sixty seconds, using at least three different proportion expressions.",
          frames: [
            "Each chart divides ... into four ...",
            "Overall, ... overtook ... as the largest ...",
            "... accounted for just under two thirds, but by ... this had fallen to ...",
            "The smaller categories, ... and ..., grew only modestly.",
          ],
          checklist: [
            "Did I compare categories, not charts?",
            "Did every share change appear in percentage points, not per cent?",
            "Did my slices sum to one hundred in each year?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "One body for the big swap, with the small streams reserved for a second paragraph — movement size, not chart order, sets the structure"],
          ["Task fulfilment", "The overview names the crown change without a single figure, and the body carries exactly four percentages plus two fraction renderings"],
          ["Grammar", "Shares move in percentage points — 'a rise of 23 percentage points' — with past simple holding the whole report"],
          ["Vocabulary", "Proportion verbs vary — compare, took, fell, climbed, advanced — so no verb works twice in the same role"],
          ["Coherence", "Landfill and recycling appear as paired mirror sentences, so the swap is felt as a single movement rather than two separate facts"],
        ],
      },
      { type: "heading", text: "Component 10 — How to avoid irrelevant data" },
      {
        type: "mistakes",
        title: "The pie-chart trap catalogue",
        items: [
          { wrong: "Recycling's share rose by 23 per cent to 41 per cent.", right: "Recycling's share rose by 23 percentage points, from 18 to 41 per cent.", reason: "A 23 per cent rise from 18 would end near 22; the slice actually more than doubled — points measure distance between shares, per cent measures growth." },
          { wrong: "The first pie chart is about landfill and the second one is about recycling.", right: "In 2000 landfill dominated the stream; by 2024 recycling had overtaken it.", reason: "Both charts show all four categories — the report compares categories across the two years, never chart against chart." },
          { wrong: "The 2024 pie is much healthier than the 2000 pie.", right: "In 2024, recycling and composting together accounted for 57 per cent, against 28 per cent in 2000.", reason: "'Healthier' is an evaluation the data cannot make; the paired sum makes the same point using figures alone." },
          { wrong: "Landfill fell by 33 per cent over the period.", right: "Landfill's share fell by 33 percentage points, from 64 to 31 per cent.", reason: "The share fell to roughly half its previous level; '33 per cent' would imply an end figure near 43 — the wrong arithmetic entirely." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Name the whole being divided and count the charts: one pie describes, two pies compare — the count sets the verb plan"],
          ["While the clock runs", "Work category by category, crown first, and convert the two or three headline shares into fractions as you draft"],
          ["If you are stuck", "Pair the two biggest movers and write them as mirror sentences — the swap they describe is usually the whole overview"],
          ["Final minutes", "Confirm both pies still sum to one hundred in your prose, and that every movement reads in percentage points"],
        ],
      },
      {
        type: "summary",
        points: [
          "Every slice is a share of a named whole, and the whole belongs in the introduction.",
          "Two pies are compared category by category — chart-against-chart sentences are the family's signature failure.",
          "Percentage points measure the distance between shares; per cent measures growth, and the two never substitute.",
          "Fractions — one in three, just under two thirds — sharpen claims where exact figures would blur them.",
          "A small slice earns a sentence only when it is the exception: the only faller, the fastest riser, the lone survivor of a pattern.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per foundations lesson.",
        items: [
          { question: "The rubric says 'The pie charts show the proportions of...' What do the proportions divide?", options: ["A named whole — the total that all shares sum to", "The average of the two years shown", "Whatever the largest slice represents"], correctIndex: 0, explanation: "Task analysis names the whole first; every share in the report is a share of that whole.", from: "Understanding task instructions" },
          { question: "Which slices earn a sentence in the plan?", options: ["The leader in each year, the biggest mover and any small slice that is the exception", "Every slice, in clockwise order", "Only the largest slice on either chart"], correctIndex: 0, explanation: "Selection rules the pie report: the crown, the movers and the exceptions — the rest is inventory.", from: "Planning" },
          { question: "A two-body split for a two-pie task usually follows what logic?", options: ["Body one: the biggest swap; body two: the smaller movements", "Body one: the first pie; body two: the second pie", "Body one: percentages; body two: fractions"], correctIndex: 0, explanation: "Bodies follow the data's story, never the charts' physical order — chart-by-chart is this family's classic failure.", from: "Paragraph organisation" },
          { question: "Which phrase reports a share change correctly?", options: ["A rise of 15 percentage points", "A rise of 15 per cent of the chart", "A rise of one pie"], correctIndex: 0, explanation: "Percentage points measure the distance between shares — the vocabulary distinction this family is examined on.", from: "Vocabulary" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "Which sentence uses a proportion verb correctly?",
        hints: ["Check each collocation — only one of these is standard English."],
        options: [
          { id: "a", text: "Recycling accounted for 41 per cent of the waste stream." },
          { id: "b", text: "Recycling consisted on 41 per cent of the waste stream." },
          { id: "c", text: "Recycling made up of 41 per cent of the waste stream." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Recycling accounted for 41 per cent of the waste stream.",
          "'Account for', 'make up' and 'comprise' are the standard proportion verbs; 'consisted on' and 'made up of' splice two correct patterns into one wrong hybrid.",
          "(b) and (c) pair verbs with prepositions and particles they do not take — errors that survive in fluent writers' drafts.",
        ),
        tags: ["awriting", "t1", "pie", "proportion-verbs"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Read this two-pie description, then choose the sentence that compares them correctly.",
        hints: ["Compare one category across both years — not one chart against the other."],
        passageTitle: "Household budgets, 1990 and 2020",
        passage:
          "The two pie charts show how a typical household divided its spending in 1990 and 2020. In 1990, food took 33 per cent, housing 22 per cent, other items 30 per cent and transport 15 per cent. By 2020, housing had risen to 33 per cent, food had fallen to 22 per cent, other items stood at 31 per cent and transport at 14 per cent.",
        question: "Which sentence compares the two pies correctly?",
        options: [
          { id: "a", text: "Housing overtook food as the largest item of spending, rising from 22 to 33 per cent while food fell from 33 to 22." },
          { id: "b", text: "The 1990 pie was more balanced and the 2020 pie was more stressful." },
          { id: "c", text: "The first pie shows the 1990 shares and the second pie shows the 2020 shares." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Housing overtook food as the largest item of spending, rising from 22 to 33 per cent while food fell from 33 to 22.",
          "Category-by-category comparison tracks one slice across both years; the swap between housing and food is the chart's main feature and this sentence carries it whole.",
          "(b) evaluates instead of reporting; (c) describes the two charts separately without comparing anything.",
        ),
        tags: ["awriting", "t1", "pie", "comparison"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. One slice shrinks from 4 per cent to 2 per cent — the smallest on either chart. When does it deserve a sentence?",
        hints: ["Selection beats completeness — but small can still be the story."],
        options: [
          { id: "a", text: "Never: slices under five per cent are noise and should be ignored." },
          { id: "b", text: "When it is the exception — the only shrinking slice, or the fastest faller in relative terms — one clause earns its place." },
          { id: "c", text: "Always: a complete report must mention every slice at least twice." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "When it is the exception — the only shrinking slice, or the fastest faller in relative terms — one clause earns its place.",
          "A size threshold is not what decides it; what decides it is whether the small slice is the pattern's exception, because exceptions are exactly what overviews exist to name.",
          "(a) would silence the most interesting movement on some charts; (c) turns selection into inventory.",
        ),
        tags: ["awriting", "t1", "pie", "small-slices"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Complete the sentence with the proportion verb.",
        sentence: "Housing costs ___ for roughly a third of household spending in 2020, up from just over a fifth in 1990.",
        acceptedAnswers: ["accounted"],
        hints: [],
        feedback: fb(
          "accounted",
          "The past of 'account for' is the default proportion verb of Task 1; the fraction phrase 'just over a fifth' sharpens the comparison without adding a second figure.",
          "Forms like 'accounted of' or 'made up for' splice two collocations into one error.",
        ),
        tags: ["awriting", "t1", "pie", "collocation"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Points and multiples.",
        question: "A share moves from 12 per cent to 27 per cent. State the change twice — once in percentage points and once as an approximate multiple.",
        acceptedAnswers: [
          "up 15 percentage points; the share more than doubled",
          "a rise of 15 percentage points, more than doubling the share",
          "15 percentage points higher, roughly double the original share",
        ],
        keywords: ["15", "doubled"],
        hints: [],
        feedback: fb(
          "Up 15 percentage points; the share more than doubled.",
          "Points give the distance between the two shares and the multiple gives the relative size of the change — together they describe any share movement completely.",
          "An answer of '15 per cent' has confused the distance between shares with relative growth.",
        ),
        tags: ["awriting", "t1", "pie", "percentage-points"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Which sentence is the best overview for two waste-stream pies (landfill 64 to 31, recycling 18 to 41, composting 10 to 16, incineration 8 to 12)?",
        hints: [],
        options: [
          { id: "a", text: "Overall, the two pie charts show percentages of waste for the years 2000 and 2024." },
          { id: "b", text: "Overall, landfill gave way to recycling as the leading destination for household waste over the quarter-century." },
          { id: "c", text: "Overall, recycling rose by 23 percentage points, from 18 per cent to 41 per cent." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Overall, landfill gave way to recycling as the leading destination for household waste over the quarter-century.",
          "The overview names the pattern that governs the chart — the crown changing hands — in claim form with no figures; the numbers wait for the body.",
          "(a) describes the charts instead of claiming anything; (c) is body detail with figures, misplaced in the overview.",
        ),
        tags: ["awriting", "t1", "pie", "overview"],
      }),
    ],
    homework: [
      "Take any two-pie prompt and write one mirror-sentence pair for the two biggest movers before anything else — the swap they describe is your overview.",
      "Collect five percentages from any source and express each as both a fraction and a figure, noting where the fraction reads more precisely than the number.",
    ],
    assignment: {
      title: "Write a pie-chart report",
      instructions:
        "Using the waste-stream pies from this lesson as your data (or any two-pie prompt from your practice materials), write a full report: a paraphrased introduction naming the whole, an overview naming the crown change, and two body paragraphs comparing categories across the two years. Report every share change in percentage points, convert at least two shares into fractions, and confirm your slices sum to one hundred in each year.",
      minWords: 150,
      maxWords: 200,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-t1-table",
    title: "Task 1 — Tables",
    description:
      "The densest visual on the paper: reading grids with mixed units, ranking by row and by column, anchoring the report on the biggest number, and turning rows into comparisons instead of inventories.",
    objectives: [
      "read a table's rows, columns and per-column units before writing",
      "rank by row and by column without mixing incommensurable figures",
      "anchor the report on the table's biggest number, its clusters and its outliers",
      "turn rows into comparisons with snapshot state verbs — stands at, records, posts",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "A table is a chart with the graphics stripped out: no bars to rank by eye, no lines to follow, just a grid of numbers that can hide its own pattern. The method that beats it is mechanical — rank each column, compare the rankings, and anchor everything on the biggest number the page holds. This lesson runs that method through the ten components, with a six-city table as the running example and a complete model at the end.",
        beforeYouStart: [
          "You can paraphrase a rubric in one sentence.",
          "You know why a report quotes figures that support claims.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing Task 1 — tables appear alone and inside mixed prompts, often carrying different units per column"],
          ["Task & question types", "One prompt: summarise and compare a table's rows and columns, at least 150 words in about 20 minutes"],
          ["What is assessed", "Ranking across rows and columns, unit discipline, and comparison instead of transcription"],
          ["Why this matters", "Tables are the densest visual on the paper; the ranking method is what keeps 150 words from becoming an inventory of cells"],
        ],
      },
      { type: "heading", text: "Component 1 — How to analyse the visual" },
      {
        type: "steps",
        title: "Reading the frame of a table",
        intro: "Four passes over the grid, none of them writing:",
        steps: [
          { title: "Step 1: Read the title for the time", text: "One year printed in the title means a snapshot, and snapshots take state verbs. Two year-columns license change verbs per column — and only per column, never across the whole grid.", examples: [{ english: "Title: 'six cities: population, commuting and transport, 2022' — one year, so no verb in the report may claim movement.", note: "The title carries the tense plan." }] },
          { title: "Step 2: Read every column header with its unit", text: "Millions, minutes, per cent: each column is a separate measurement world. The header's unit travels with every figure quoted from that column, without exception.", examples: [{ english: "'Average commute (minutes)' — so a body sentence reports 52 minutes, never a bare 52.", note: "A number without its unit is half a number." }] },
          { title: "Step 3: Read the rows as one compared set", text: "The rows — cities, courses, countries — are the set the table compares. Your paragraphs will group these rows, so know them as members of a set rather than as separate lines of text.", examples: [{ english: "Six cities, three measures each: every paragraph groups cities, never measures alone.", note: "Rows are the cast; columns are the plot." }] },
          { title: "Step 4: Find the biggest number on the table", text: "Scan every column and find the largest single figure on the page. It is the anchor: the extreme the first body paragraph is built around, and the reference point every later distance is measured from.", examples: [{ english: "52 minutes, in Ashcombe: the largest figure anywhere on the commuting table, and the first number the report will quote.", note: "The anchor is found by eye, then quoted with its unit." }] },
        ],
      },
      { type: "heading", text: "Component 2 — How to identify the main features" },
      {
        type: "text",
        text: "A table's main features live in its rankings. Rank each column — often in the margin, always before writing — and then compare the rankings: where they agree, the table has a pattern; where they disagree, it has a wrinkle. On a six-city commuting table, all three rankings run in almost perfect step from the biggest city to the smallest, and the single wrinkle is the one small city that out-ranks a smaller neighbour in population yet records both the shorter commute and the lower share. Pattern plus wrinkle: a complete overview, discovered with a pencil before a sentence exists.",
      },
      { type: "heading", text: "Component 3 — How to select important data" },
      {
        type: "text",
        text: "Table selection starts from the biggest number on the page, because the extreme anchors every distance that follows. Around it, quote the runner-up's figures to establish the step down, one mid-table figure to show the gradient, and the small end's pair of values to close the ranking: five or six numbers, each the extreme of its column or a rung in the ladder. What never earns a place: averages of incommensurable columns, means across wildly different rows, and any figure whose only distinction is being printed.",
      },
      { type: "heading", text: "Component 4 — How to compare information" },
      {
        type: "table",
        title: "Comparison moves for tables",
        headers: ["The comparison you need", "Language that carries it"],
        rows: [
          ["Ranking within a column", "the longest commute of the six; the second highest share; ranked last in all three columns"],
          ["Row against row", "Ashcombe's figure is nearly three times Dunhollow's"],
          ["Turning a row into a claim", "for every city except one, longer commutes go with higher public-transport shares"],
          ["Cluster language", "the three largest cities cluster between 38 and 52 minutes"],
          ["Distance language", "a full 33 minutes separates the top and bottom of the commuting column"],
        ],
      },
      { type: "heading", text: "Component 5 — How to identify trends and rankings" },
      {
        type: "example",
        title: "Table language that compares",
        items: [
          { english: "The district records the county's lowest vacancy rate, at 2.1 per cent.", note: "'Records' keeps a snapshot still while still presenting it as a record — the state verb earns its name.", domain: "work" },
          { english: "Average waits stand at just under four minutes at off-peak times.", note: "'Stands at' is the neutral state verb: it claims a level and nothing more, which is exactly what a snapshot supports.", domain: "everyday" },
          { english: "The university posts the highest satisfaction score of the eight surveyed, at 84 per cent.", note: "'Posts' suits results tables — brief and factual, borrowed naturally from the register of results.", domain: "school" },
          { english: "Enrolment ranges from 12 students in Greek to 208 in business studies.", note: "The range sentence turns an entire column into one comparison, extremes included.", domain: "school" },
          { english: "Three of the six cities cluster between 34 and 41 minutes, leaving the extremes well outside that band.", note: "Cluster language groups the middle of the field so the extremes stand out against it.", domain: "exam" },
          { english: "Only one department breaks the pattern: it spends the least per student yet records the best results.", note: "The wrinkle sentence is a comparison wearing a contrast — one sentence, one exception, no inventory.", domain: "study" },
        ],
      },
      { type: "heading", text: "Component 6 — How to organise the response" },
      {
        type: "steps",
        title: "Organising the table report",
        intro: "Rankings first, paragraphs second:",
        steps: [
          { title: "Move 1: Rank every column before writing", text: "Three rankings side by side on the margin. They take ninety seconds, and they contain the overview, the body plan and the wrinkle before a single sentence exists." },
          { title: "Move 2: Let the rankings choose the bodies", text: "Top end of the ranking in one body, bottom end in the other — or, if one column tells the whole story, that column anchors body one while body two handles the rest and the wrinkle." },
          { title: "Move 3: Anchor body one on the biggest number", text: "Quote the anchor with its unit, then measure distances from it: the runner-up, the mid-table step, the gradient. The paragraph becomes a set of distances instead of a list." },
          { title: "Move 4: Give the wrinkle a home", text: "The exception appears briefly in the overview and gets one full sentence in a body — enough to prove you saw it, never enough to hijack the report." },
        ],
      },
      { type: "heading", text: "Component 7 — How to write an introduction" },
      {
        type: "text",
        text: "The introduction paraphrases the table's title, names the rows and lists the columns with their measures: 'The table provides information about six cities, comparing their populations, the average time residents spend commuting, and the proportion of commuters who use public transport.' Units can wait for the bodies, where each figure arrives with its own; the introduction's job is scope — how many of what, measured on which dimensions.",
      },
      { type: "heading", text: "Component 8 — How to write an overview" },
      {
        type: "text",
        text: "The overview states where the rankings agree and names the wrinkle: 'Overall, the three measures move together: the largest cities record both the longest commutes and the highest public-transport shares, although one small city breaks the order.' No figures, no verdict like 'congestion is bad', and no column-by-column summary — the overview is the table's pattern translated into one claim, and the bodies prove it with ranked numbers.",
      },
      { type: "heading", text: "Component 9 — How to develop detail paragraphs" },
      {
        type: "four-skills",
        title: "Worked mini-model — six cities, three measures",
        reading: {
          text: "The six cities, in descending order of population: Ashcombe (5.1 million, 52-minute average commute, 55 per cent public-transport share), Selbyford (3.8 million, 41 minutes, 48 per cent), Marlow Bay (2.5 million, 38 minutes, 35 per cent), Northport (1.2 million, 34 minutes, 22 per cent), Dunhollow (0.9 million, 19 minutes, 9 per cent) and Kestwick (0.6 million, 21 minutes, 12 per cent).",
          task: "Rank the six cities by population, then by commuting time, and name the pair that swaps places between the two rankings.",
        },
        writing: {
          task: "The table below gives information about six cities: their populations, the average time their residents spend commuting, and the proportion of commuters who use public transport. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write the introduction, the overview and the first body paragraph.",
          guide: [
            "Introduction: The table provides information about six cities, comparing ...",
            "Overview: Overall, the three measures move together: ... although one small city ...",
            "Body opener: Ashcombe dominates every column: its 5.1 million residents ...",
            "Second tier: Selbyford and Marlow Bay repeat the pattern one step down, posting ... respectively",
            "The descent: By the time the table reaches ... , both figures have fallen to ...",
          ],
          model:
            "The table provides information about six cities, comparing their populations, the average time residents spend commuting, and the proportion of commuters who use public transport.\n\nOverall, the three measures move together: the largest cities record both the longest commutes and the highest public-transport shares, although one of the two smallest cities breaks the order.\n\nAshcombe dominates every column. Its 5.1 million residents endure the longest average commute in the table, at 52 minutes, and record the highest public-transport share, at 55 per cent. Selbyford and Marlow Bay repeat the pattern one step down, posting commuting times of 41 and 38 minutes with public-transport shares of 48 and 35 per cent respectively, while Northport, at 1.2 million people, stands at 34 minutes and 22 per cent — every step down the population ranking is a step down the other two.",
        },
        listening: {
          script:
            "A table is a chart with the graphics stripped out, so my first job is to rebuild the picture with rankings. Three columns, three separate rankings, six cities — I write them in the margin, smallest to largest, all three beside each other. Then the only question that matters: do the rankings agree? On this table, almost perfectly. Ashcombe is first everywhere; Kestwick and Dunhollow are last everywhere; and there is one wrinkle — Dunhollow is the bigger of the two smallest cities, yet it records the shorter commute and the lower share. That wrinkle gets exactly one sentence. The anchor is fifty-two minutes, the biggest number on the page, and my first body paragraph is built around it, measuring every other city as a distance from Ashcombe. No means, no combined scores: the story is in the rank order, and rank order is free.",
          task: "Repeat the tutor's three steps in order: rank, compare the rankings, name the wrinkle.",
        },
        speaking: {
          task: "Present the table aloud in sixty seconds, as if briefing a colleague who cannot see it.",
          frames: [
            "The table compares six cities on three measures: ...",
            "Overall, the rankings agree: ...",
            "At the top of the table, ... stands at ...",
            "The one exception is ..., which ...",
          ],
          checklist: [
            "Did I rank by column before speaking?",
            "Did I quote each figure with its unit attached?",
            "Did I avoid averaging columns that measure different things?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "The body runs down the ranking from the anchor city, saving the small-city cluster and the wrinkle for a second paragraph"],
          ["Task fulfilment", "Every quoted figure is the extreme of its column or a rung in the ladder — nothing is transcribed merely because it is printed"],
          ["Grammar", "Snapshot state verbs — dominates, records, posts, stands at — replace the trend verbs the table cannot support"],
          ["Vocabulary", "Ranking and distance language — every column, one step down, every step down the population ranking — turns a grid into a narrative"],
          ["Coherence", "The dash-delivered final clause converts the list of cities into a single descending staircase the reader can walk down"],
        ],
      },
      { type: "heading", text: "Component 10 — How to avoid irrelevant data" },
      {
        type: "mistakes",
        title: "The table trap catalogue",
        items: [
          { wrong: "Adding each city's population, minutes and share together gives a single congestion score.", right: "The three columns carry different units — millions, minutes and per cent — so each is ranked separately, never combined.", reason: "Incommensurable units cannot be added: combining them produces a number that means nothing, however carefully the arithmetic is done." },
          { wrong: "The table shows an increase in commuting times across the six cities.", right: "The table compares six cities at a single point in time; every verb is a state verb — stands at, records, posts.", reason: "With no second year there is no direction to report: 'increase' invents a time axis the table never printed." },
          { wrong: "Ashcombe has 5.1 million people, Selbyford 3.8, Marlow Bay 2.5, Northport 1.2, Dunhollow 0.9 and Kestwick 0.6.", right: "The six cities range from Kestwick, at 0.6 million, to Ashcombe, at 5.1 million, with Marlow Bay roughly halfway between.", reason: "Reading the rows aloud transcribes the table; a range with a midpoint turns the same numbers into a comparison." },
          { wrong: "Bigger cities are more congested, so commuting is worse in Ashcombe.", right: "Ashcombe records both the longest average commute and the highest public-transport share, at 52 minutes and 55 per cent.", reason: "'Worse' is a judgement; the table prints times and shares, and the report's job stops at the relationship between them." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read the title, then every column header with its unit — a report built on a misread unit cannot be rescued by good prose"],
          ["While the clock runs", "Rank each column before writing; find where the rankings agree, and give the one disagreement a sentence of its own"],
          ["If you are stuck", "Quote the biggest number on the table with its unit — the anchor sentence starts the first body paragraph by itself"],
          ["Final minutes", "Check that no sentence mixes units, and that snapshot verbs — stands at, records — have replaced any accidental trend verbs"],
        ],
      },
      {
        type: "summary",
        points: [
          "Rank every column in the margin before writing: the rankings hold the pattern, the wrinkle and the paragraph plan.",
          "Units live per column, and figures from different columns are never added, averaged or ranked against each other.",
          "The biggest number on the table anchors the report; every later figure is a distance from it or a rung below it.",
          "Snapshot tables take state verbs — stands at, records, posts — because one year supports no movement.",
          "Turning rows into comparisons — ranges, clusters, ratios, wrinkles — is the difference between a report and a transcription.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per foundations lesson.",
        items: [
          { question: "What does the frame of a table include that single charts lack?", options: ["A unit for every column, sometimes a different one each time", "A legend with colours for every row", "A time axis along the top, always"], correctIndex: 0, explanation: "Tables compress several measurements into one grid; the unit line belongs to the task instructions and must be read first.", from: "Understanding task instructions" },
          { question: "What is the first planning act on a table?", options: ["Ranking each column and noting where the rankings agree", "Adding up all the numbers", "Writing the introduction before looking at the data"], correctIndex: 0, explanation: "Rankings reveal the pattern; totals rarely mean anything when units differ from column to column.", from: "Planning" },
          { question: "How do strong table reports open their body paragraphs?", options: ["With an anchor — the biggest number — and distances measured from it", "With the top-left cell of the table", "With an opinion about the data"], correctIndex: 0, explanation: "The anchor gives the paragraph a centre of gravity; transcribing from the top-left is reading order, not writing order.", from: "Paragraph organisation" },
          { question: "Which verbs suit a one-year table?", options: ["State verbs — stands at, records, posts", "Trend verbs — rose, fell, doubled", "Future verbs — will reach, is projected"], correctIndex: 0, explanation: "Snapshot verbs match a snapshot frame; inventing a time axis is this family's most common error.", from: "Vocabulary" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "A table lists five airports with their passenger totals for 2023 — one column, one year, no earlier figures. Which verb set fits?",
        hints: ["Is there any second year for a change to happen in?"],
        options: [
          { id: "a", text: "Rose, fell and fluctuated — airports always have histories." },
          { id: "b", text: "Stands at, records and posts — the table is a snapshot, so its verbs hold still." },
          { id: "c", text: "Is projected to reach — passenger data always points forward." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Stands at, records and posts — the table is a snapshot, so its verbs hold still.",
          "Snapshot tables take state verbs; trend verbs need a before and an after, and a single column of one year offers neither.",
          "(a) and (c) both import time the table never printed — the classic snapshot error in costume.",
        ),
        tags: ["awriting", "t1", "table", "state-verbs"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Read this small table, then choose the sentence that turns its rows into a comparison.",
        hints: ["A comparison states how figures relate — ratios, gaps, ranks — not just what they are."],
        passageTitle: "Community college, Saturday enrolments",
        passage:
          "The table shows Saturday-course enrolments and fees at a community college. Spanish enrolled 84 students at 95 pounds a term, pottery 61 at 120 pounds, watercolour 45 at 110 pounds, and bridge 12 at 40 pounds.",
        question: "Which sentence turns the table's rows into a comparison?",
        options: [
          { id: "a", text: "Spanish enrols 84 students at 95 pounds, pottery 61 at 120 pounds, watercolour 45 at 110 pounds, and bridge 12 at 40 pounds." },
          { id: "b", text: "Spanish attracts nearly twice the enrolment of watercolour and seven times that of bridge, though pottery charges the highest fee." },
          { id: "c", text: "Bridge is the cheapest course, which explains why it is the smallest." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Spanish attracts nearly twice the enrolment of watercolour and seven times that of bridge, though pottery charges the highest fee.",
          "Ratios convert raw rows into relationships — nearly twice, seven times — and the contrast with the fee ranking adds a second comparison inside one sentence.",
          "(a) transcribes the table without comparing anything; (c) invents a cause and misreads the direction of the relationship.",
        ),
        tags: ["awriting", "t1", "table", "comparison"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. A table holds population (millions), commuting time (minutes) and public-transport share (per cent). Which operation is never legitimate?",
        hints: ["Ask what the three units have in common."],
        options: [
          { id: "a", text: "Ranking the cities separately within each of the three columns." },
          { id: "b", text: "Comparing one city's 52 minutes with another city's 41 minutes." },
          { id: "c", text: "Averaging a city's population, minutes and share into one combined score." },
        ],
        correctOptionId: "c",
        feedback: fb(
          "Averaging a city's population, minutes and share into one combined score.",
          "The columns measure different things in different units; combining them produces a number with no meaning, however carefully it is calculated.",
          "(a) and (b) stay inside single columns, where like is compared with like — the only legal ground in a mixed-unit table.",
        ),
        tags: ["awriting", "t1", "table", "units"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Complete the sentence with a state verb.",
        sentence: "Ashcombe ___ the longest average commute in the table, at 52 minutes — the biggest number on the page.",
        acceptedAnswers: ["records", "posts", "has"],
        hints: [],
        feedback: fb(
          "records / posts / has",
          "State verbs keep a snapshot still while making it count: 'records' and 'posts' both present a level as a plain fact, with no movement implied.",
          "Trend verbs such as 'rose' or 'climbed' would imply a second year the table does not contain.",
        ),
        tags: ["awriting", "t1", "table", "state-verbs"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. The anchor.",
        question: "What is the first number to find on any table, and what job does it do in the report?",
        acceptedAnswers: [
          "the biggest number on the table; it anchors the report and the first body paragraph is built around it",
          "the biggest number on the table, which anchors the first body paragraph",
          "the biggest figure, which becomes the anchor the report is built around",
        ],
        keywords: ["biggest", "anchor"],
        hints: [],
        feedback: fb(
          "The biggest number on the table — it anchors the report.",
          "The largest figure names the extreme the whole ranking hangs from; once the anchor is quoted with its unit, the rest of the paragraph becomes a set of distances from it.",
          "Answers naming the first number printed — the top-left cell — have mistaken reading order for importance.",
        ),
        tags: ["awriting", "t1", "table", "anchor"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Six cities, three measures, one year. Which sentence should open the overview?",
        hints: [],
        options: [
          { id: "a", text: "Overall, the three rankings run in almost perfect step: the largest cities record the longest commutes and the highest public-transport shares." },
          { id: "b", text: "Overall, Ashcombe has 5.1 million people, a 52-minute commute and a 55 per cent public-transport share." },
          { id: "c", text: "Overall, the table is about six cities and their commuting habits." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Overall, the three rankings run in almost perfect step: the largest cities record the longest commutes and the highest public-transport shares.",
          "The overview states the pattern that connects the columns — rankings agreeing — without quoting a figure; the anchor city's numbers belong in the body.",
          "(b) is accurate but is body detail rather than a pattern; (c) labels the table instead of claiming anything about it.",
        ),
        tags: ["awriting", "t1", "table", "overview"],
      }),
    ],
    homework: [
      "Take any table and write its column rankings in the margin before drafting; then write the overview directly from the rankings, not from the cells.",
      "Convert a five-row table into exactly three sentences — one range sentence, one cluster sentence and one wrinkle sentence — with no other figures allowed.",
    ],
    assignment: {
      title: "Write a table report",
      instructions:
        "Using the six-city commuting table from this lesson as your data (or any mixed-unit table from your practice materials), write a full report: a paraphrased introduction, an overview stating where the three rankings agree and naming the wrinkle, and two body paragraphs — one built around the anchor city, one covering the small-city cluster. Rank before you write, keep every verb a state verb, and never combine figures from columns with different units.",
      minWords: 150,
      maxWords: 200,
    },
  },
];
