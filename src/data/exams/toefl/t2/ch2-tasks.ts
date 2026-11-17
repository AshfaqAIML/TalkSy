/**
 * TOEFL iBT Academy — Module 2, Reading (T-M2, PROMPT 48, Task 2).
 *
 * Chapter 2 — The three task types (3 lessons): Complete the Words,
 * Read in Daily Life, and Read an Academic Passage. Authored at the v3
 * textbook standard (src/data/exam-academy/textbook-standard.ts).
 *
 * Every worked text, item, option and explanation below is original
 * material written for this platform in the style of the current test; no
 * official ETS item, passage or preparation material is reproduced. The
 * timed mock and drill library that these lessons point to lives in
 * src/data/exams/toefl/mocks-reading.ts (PROMPT 48, Task 5); raw-to-band
 * conversions anywhere in this module are practice estimates, honestly
 * labelled, because ETS publishes no public conversion table.
 */

import type { LessonSpec } from "../../ielts/types";
import { ex, fb } from "../../ielts/types";

export const T2_CH2: LessonSpec[] = [
  {
    slug: "toefl-reading-complete-words",
    title: "Complete the Words",
    description:
      "The section's largest family: short texts in which roughly ten words have had letters removed. You rebuild each masked word from three kinds of evidence — context, collocation and morphology — inside a two-pass budget that knows when to guess and move.",
    objectives: [
      "restore masked words by combining context, collocation and word-form evidence",
      "use the slot's grammar to exclude wrong candidates before counting letters",
      "apply the two-pass budget and the guess-and-flag rule when a mask refuses to resolve",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "About thirty of the section's items are Complete the Words: short texts in which roughly ten words appear with letters removed — a campus notice about the c___ gym, a wildlife line about hipp___ — and you type each missing word back into place. The task wears the costume of a spelling quiz, but it is a reading test in disguise: the sentence around every mask names the meaning, the habitual partnerships name the word, and the visible letters name the form. This lesson installs the three-source method, the two-pass budget, and the rule that tells you when to type a best guess and move.",
        beforeYouStart: [
          "You know the section's item mix and per-item average from the overview lesson.",
          "You can read a short B1-level paragraph at study speed without translating every line.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — the largest single family: about 30 of the up-to-50 items"],
          ["Task & question types", "Complete the Words: a short text in which about ten words have letters missing, restored by typing"],
          ["What is assessed", "Combining context, collocation and word-formation evidence to rebuild a word the text has masked"],
          ["Why this matters", "Drilled candidates run these items in seconds and bank the time for the academic passage — the family is the section's time supplier"],
        ],
      },
      { type: "heading", text: "What the task actually asks" },
      {
        type: "text",
        text: "Each item presents a short text — a paragraph of everyday, campus or general-academic English — with about ten words damaged: letters removed, typically with the opening letter or letters left visible. Your job is to type each full word. Three kinds of evidence do the work. The context names the meaning the gap must carry. The collocation — the company words keep — narrows a fitting meaning to the word that usually holds it. And the morphology, the visible letters plus the endings and prefixes a slot allows, pins the form. A mask solved by all three at once takes seconds; a mask argued with takes minutes the section does not have.",
      },
      {
        type: "definition",
        term: "masked word",
        partOfSpeech: "noun phrase",
        definition: "A word in a Complete the Words text whose letters have been removed while its opening letters remain visible, restored by combining meaning, partnership and form evidence.",
        example: {
          english: "In 'the c___ gym opens at seven', the visible c, the campus setting and the noun slot after 'the' all point to campus.",
          translation: "",
        },
      },
      {
        type: "steps",
        title: "The three-source method",
        intro: "Work every mask through the same short sequence until the sequence runs itself.",
        steps: [
          {
            title: "Read for gist first",
            text: "Read the whole sentence — and skim the surrounding text — before touching the gap. The sentence's job names the missing word's job, and the text's topic halves the candidate list before any letter is counted.",
            examples: [
              {
                english: "A paragraph about library fines makes 'the libr___ will waive the charge' a one-candidate mask: librarian.",
                note: "Topic is the first filter, not the last.",
              },
            ],
          },
          {
            title: "Fix the slot's grammar",
            text: "Identify what the gap must be: a verb after a subject, an adjective before a noun, a noun after 'the'. The slot's syntax excludes whole families of wrong answers before meaning is even consulted.",
            examples: [
              {
                english: "After 'may', only a base-form verb fits: 'may r___' becomes renew or request, never renewal.",
                note: "The word before the gap is a grammatical instruction.",
              },
            ],
          },
          {
            title: "Listen for the partnership",
            text: "Words keep habitual company: heavy traffic, draw a conclusion, a valid passport. When a collocation fits the visible letters, it is almost always the intended word, because texts are written in phrases rather than in single words.",
            examples: [
              {
                english: "'Thank you v___ much' restores very on partnership alone — hardly any other adverb holds that place.",
                note: "Collocation is memory doing reading's work.",
              },
            ],
          },
          {
            title: "Check the form, then commit",
            text: "Confirm the ending the sentence demands — plural, past tense, -ing — count it against the visible letters, type the full word, and move. Two calm passes is the ceiling; a refusing mask gets a best guess and, where the interface allows, a flag.",
            examples: [
              {
                english: "The slot 'the storms d___ the harbour' wants a past verb: damaged, destroyed, deluged all fit; type the one the sentence's strength selects and move.",
                note: "Commitment is part of the technique.",
              },
            ],
          },
        ],
      },
      {
        type: "comparison",
        title: "Two kinds of evidence, two kinds of mask",
        columns: ["Meaning-led masks (context and collocation)", "Form-led masks (morphology and syntax)"],
        rows: [
          {
            aspect: "What solves them",
            left: "The sentence's sense or an idiom's fixed partnership supplies the word almost whole.",
            right: "The slot's grammar and the visible letters supply the form; meaning only chooses among the forms that fit.",
          },
          {
            aspect: "A worked case",
            left: "'She gave a pres___ on glacier retreat' → presentation: the noun after 'a' and the lecture context hand it over.",
            right: "'The glacier has adv___ steadily' → advanced: the present-perfect slot forces the past participle shape.",
          },
          {
            aspect: "Typical failure",
            left: "Choosing a same-meaning word the partnership does not hold — 'speech' where 'presentation' belongs.",
            right: "Right root, wrong ending — 'advance' or 'advancing' where 'advanced' is required.",
          },
          {
            aspect: "Repair",
            left: "Re-read the neighbouring clause and ask which word this writer would actually use.",
            right: "Re-check the words around the gap for tense, number and voice before typing.",
          },
        ],
        verdict: "Strong mask-solvers read meaning first and check form last — the reverse order spends seconds the section needs elsewhere.",
      },
      {
        type: "example",
        title: "Masks, solved out loud",
        items: [
          {
            english: "Residents are asked to r___ bins to the kerb by seven — restored: return, on the partnership 'return to the kerb' and the notice's pattern of instructions.",
            note: "The collocation selects return over reach or remove, which fit the letters but not the habit.",
            domain: "everyday",
          },
          {
            english: "Wildlife texts bring the famous hipp___: the visible letters, the river setting and the animal topic leave hippos as the only reading that makes sense.",
            note: "A mask can be solved by topic plus letters when the field is narrow enough.",
            domain: "study",
          },
          {
            english: "The lecture hall was so q___ that a dropped pencil echoed — restored: quiet, because the result clause names its cause.",
            note: "Cause-and-effect clauses are context clues wearing lab coats.",
            domain: "study",
          },
          {
            english: "You must c___ your registration before Friday — restored: complete, the partner 'registration' usually keeps in campus prose.",
            note: "Confirm also fits the letters; the stronger partnership decides.",
            domain: "campus",
          },
          {
            english: "A manager s___ the meeting to Friday so the whole team could attend — restored: shifted, because 'shift to a day' is the partnership and the past slot demands the -ed form.",
            note: "Two legal candidates (moved, shifted) is normal; type the more idiomatic and move.",
            domain: "work",
          },
          {
            english: "A candidate meets 'the results were s___ by post' and types send — the passive slot wanted sent; the meaning was right, the form was not.",
            note: "Form errors are this family's most common leak.",
            domain: "exam",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Mask mistakes corrected",
        items: [
          {
            wrong: "Any word matching the visible letters earns the mark, so I type the first fit.",
            right: "The intended word is the one the sentence's meaning and partnerships select among the fits — near-miss words that merely share letters lose the item.",
            reason: "The task reads like a spelling exercise but scores like a reading exercise: evidence, not the alphabet, picks the word.",
          },
          {
            wrong: "I will stay on a mask until the word comes to me.",
            right: "Two calm passes, then a best guess, a flag where the interface allows it, and forward motion.",
            reason: "The family's value is the time it supplies to the rest of the section; a defended mask burns the supply at its source.",
          },
          {
            wrong: "I will memorise long word lists to prepare for the masks.",
            right: "Prepare with texts: read short everyday and academic paragraphs and practise predicting words from their sentences and slots.",
            reason: "Masks are solved in context, so the trainable skill is context-reading — the vocabulary lessons later in this module build exactly that.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "One text, every mask",
        reading: {
          text: "Campus notice: The west parking lot will close for repaving on Monday. Drivers must r___ their vehicles to the east lot before eight. Permits remain v___ in both lots all term. Ques___ about access should go to the facilities office, which is op___ weekdays until six. We ap___ the disruption and expect the work to finish w___ two weeks. Cars left in the west lot after the d___ will be towed at the owner's exp___ .",
          task: "Solve each mask in the reading tab before opening the writing tab.",
        },
        writing: {
          task: "Choose any three masks from the notice above. For each, write one sentence naming the restored word and the single piece of evidence that most selected it — meaning, partnership or form.",
          guide: [
            "Mask one: the word is ___, and the evidence was ___ (the sentence's sense, the partnership, or the slot's grammar).",
            "Mask two: name the visible letters you used and what they excluded.",
            "Mask three: name a word that also fit the letters and say why it lost.",
            "Close with one sentence on which evidence source you trust fastest, and why.",
          ],
          model:
            "First mask: relocate — the partnership 'relocate vehicles to' holds in campus prose, and the 're' plus the verb slot after 'must' frame it. Second mask: valid — the notice says permits remain usable everywhere, and 'remain valid' is the fixed expression; 'vacant' fits the letters but fails the meaning of usable. Third mask: open — the office-hours sentence needs an adjective after 'is', and the 'op' plus the hours sense leave open. I trust partnerships fastest, because they arrive whole.",
        },
        listening: {
          script:
            "Tutor: Take this one: 'The librarian asked students to r___ the books within two weeks.' Walk me through it. Student: The sentence is about borrowing, so the verb is probably about giving books back — return. Tutor: And the letters? Student: R matches. And after 'to' it must be the base form, so 'returned' is out. Tutor: Right — meaning gave you the word, and the slot gave you the form. Now the harder one: 'Fines are w___ for first-year students.' Student: Waived — 'waive a fine' is the fixed phrase, and the library context plus the w make it the only real candidate. Tutor: Notice what you just did: two different evidence sources, same speed.",
          task: "Which two evidence sources did the student use, and which source solved the second mask?",
        },
        speaking: {
          task: "Explain the three-source method to a partner in under a minute, using one mask of your own invention as the worked case.",
          frames: [
            "Every mask is solved by three sources: …",
            "My example is '…', where the meaning tells me…",
            "The partnership narrows it to…",
            "And the slot's grammar fixes the…",
          ],
          checklist: [
            "Did I name all three sources in order?",
            "Did my worked case use at least two of them?",
            "Did I state the two-pass budget and the guess rule?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "One mask per short paragraph keeps every claim about evidence attached to a concrete word, so the reasoning can be audited line by line."],
          ["Grammar", "Each explanation cites the slot before citing the word — base form after 'to', adjective after 'is' — which is the grammar the method actually runs on."],
          ["Vocabulary", "Evidence vocabulary is used exactly as taught: partnership, slot, form, candidate — giving the learner names for moves they already make instinctively."],
          ["Coherence", "The model ends by ranking the sources, converting three isolated solutions into a personal strategy the learner can reuse under pressure."],
          ["Task fulfilment", "Three masks restored, three pieces of evidence named, one defeated alternative shown — every instruction in the writing task is answered with an example."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Accept the family's job: read for gist, fix the slot, hear the partnership, check the form, commit — and hold the two-pass ceiling in mind."],
          ["While the clock runs", "Run masks at the family's speed, not the section's average; every second saved here is a second the academic passage will spend."],
          ["If you are stuck", "After two calm passes, type the best-fitting candidate, flag the item if the interface allows, and move — the sweep or a later glance settles it."],
          ["Final minutes", "Return to flagged masks with fresh eyes; a second look after other items resolves more masks than a third look in the moment ever did."],
        ],
      },
      {
        type: "summary",
        points: [
          "Complete the Words presents short texts with about ten masked words each and asks you to type the full word back.",
          "Three sources solve every mask: context names the meaning, collocation names the habitual partner, morphology and the slot fix the form.",
          "Read the sentence and skim the topic before counting letters — topic halves the candidates before the alphabet begins.",
          "The slot's grammar is an instruction: the words before and after the gap state the part of speech and the ending required.",
          "Two calm passes, then a best guess and forward motion — the family supplies time to the rest of the section, and defended masks spend it at the source.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item from the overview lesson and two from the Fundamentals module.",
        items: [
          {
            question: "How many of the section's items belong to Complete the Words?",
            options: ["About thirty", "About ten", "All fifty"],
            correctIndex: 0,
            explanation: "Thirty masked-word items on short texts, with twenty comprehension items beside them — the split the overview lesson placed on the card.",
            from: "toefl-reading-overview",
          },
          {
            question: "Which sections of TOEFL iBT are two-stage adaptive?",
            options: ["Reading and Listening", "Writing and Speaking", "None of them"],
            correctIndex: 0,
            explanation: "The two receptive sections adapt in two stages; the productive sections keep a fixed shape.",
            from: "toefl-format-2026",
          },
          {
            question: "What should a difficulty spike in module two be read as?",
            options: ["Placement information — usually an upper routing", "A failure signal demanding immediate guesses", "A technical fault to report"],
            correctIndex: 0,
            explanation: "The engine raises difficulty for candidates it measures as strong; panic converts good news into lost minutes.",
            from: "toefl-adaptive-testing",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "What is the first move on any Complete the Words text?",
        hints: ["Evidence before letters."],
        options: [
          { id: "a", text: "Count the missing letters and list every word that fits them." },
          { id: "b", text: "Read the sentence and skim the surrounding text for gist and topic." },
          { id: "c", text: "Type the first word that matches the visible letters." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Read the sentence and skim the surrounding text for gist and topic.",
          "Topic and sentence meaning halve the candidate list before any letter is counted — which is why meaning-first mask-solvers finish faster than letter-first solvers.",
          "Listing letter-fits (a) inverts the method; typing the first fit (c) is how near-miss words lose items.",
        ),
        tags: ["toefl", "reading", "complete-words"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Restore the mask, then say what solved it.",
        hints: ["What partner does 'a conclusion' usually keep?"],
        passageTitle: "One masked line",
        passage:
          "The review panel met for a final time. After two hours of debate, the members were able to dr___ a conclusion the whole committee could sign: the pilot programme should continue for a second year with additional funding.",
        question: "Which word restores the mask, and on what evidence?",
        options: [
          { id: "a", text: "draw — because 'draw a conclusion' is the fixed partnership that both the slot and the letters fit" },
          { id: "b", text: "draft — because it also begins with dr and means a kind of document" },
          { id: "c", text: "drive — because debate implies pushing the conclusion forward" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "draw — because 'draw a conclusion' is the fixed partnership that both the slot and the letters fit",
          "The object 'a conclusion' keeps the verb draw in academic prose, the base-form slot after 'were able to' accepts it, and the shared-verdict meaning confirms it — three sources agreeing at once.",
          "'Draft a conclusion' is possible English, but the committee signed the conclusion, not a text; 'drive' lacks both the partnership and the noun's usual verb.",
        ),
        tags: ["toefl", "reading", "complete-words"],
      }),
      ex({
        type: "sentence-build",
        difficulty: "easy",
        skill: "reading",
        prompt: "Guided practice. Assemble the method's order from the tiles.",
        hints: ["Start with 'Meaning'."],
        tiles: ["Meaning", "first,", "partnership", "second,", "form", "third."],
        acceptedSentences: ["Meaning first, partnership second, form third."],
        feedback: fb(
          "Meaning first, partnership second, form third.",
          "The three sources arrive in reliability order: context names what the gap means, collocation names which word holds that meaning, and form evidence confirms the ending — reversing the order spends seconds on letters before sense.",
          "Any order starting with form works only when the mask is easy, which is exactly when the order does not matter.",
        ),
        tags: ["toefl", "reading", "complete-words"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "reading",
        prompt: "Independent practice. Complete the task fact.",
        hints: [],
        sentence: "Each Complete the Words text presents a short passage with about ___ words missing letters.",
        acceptedAnswers: ["ten", "10"],
        feedback: fb(
          "Ten",
          "The family's texts are short and carry about ten masks each, so a full item is a paragraph of evidence rather than a single isolated gap.",
          "Twenty masks per text would leave too little context to restore anything; three would make the family trivial.",
        ),
        tags: ["toefl", "reading", "complete-words"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Independent practice. Name the three sources of evidence for restoring a masked word, in the order this lesson teaches them.",
        hints: [],
        question: "List the three evidence sources in the taught order.",
        acceptedAnswers: [
          "context, collocation and morphology",
          "meaning, partnership and form",
          "context, collocation, morphology",
          "meaning first, partnership second, form third",
        ],
        keywords: ["context", "collocation", "morphology"],
        feedback: fb(
          "Context, collocation and morphology.",
          "Meaning names the job, partnership names the usual holder of that job, and form evidence — visible letters plus the slot's grammar — fixes the exact shape to type.",
          "Lists that stop at two sources leave the form check to chance, which is where most near-miss errors live.",
        ),
        tags: ["toefl", "reading", "complete-words"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A mask has survived two calm passes. What does the method prescribe?",
        hints: [],
        options: [
          { id: "a", text: "A third pass, because persistence is the skill being tested." },
          { id: "b", text: "Type the best-fitting candidate, flag the item if the interface allows, and move on." },
          { id: "c", text: "Skip it silently and leave the gap empty for the sweep to discover." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Type the best-fitting candidate, flag the item if the interface allows, and move on.",
          "A best-fitting guess can score, an empty gap cannot, and the flag preserves a calm second look for the sweep — the rule that keeps one stubborn mask from taxing three easier items.",
          "A third pass (a) spends the family's time supply at its source; an empty skip (c) discards the free expected value the sweep exists to collect.",
        ),
        tags: ["toefl", "reading", "complete-words"],
      }),
    ],
    homework: [
      "Take any short paragraph you read this week, mask six words by covering their middles, and restore them tomorrow — the delay trains the evidence habit rather than memory.",
      "In your next timed Complete-the-Words drill from the platform's TOEFL mock library, log how many masks you solved on first pass; the number tells you whether to drill partnerships or word forms next.",
    ],
    assignment: {
      title: "Mask detective",
      instructions:
        "Restore the five masks in this campus email — 'Hi all, the department has pos___ the deadline for abstract subm___ to the tenth. Please att___ your draft as a PDF, since other form___ cause printing problems at our end. The committee will con___ every submission by Friday.' — and write one sentence per mask naming the restored word and the evidence that selected it.",
      minWords: 60,
      maxWords: 160,
    },
  },
  {
    slug: "toefl-reading-daily-life",
    title: "Read in Daily Life",
    description:
      "The faster comprehension task type: schedules, notices, announcements and messages, answered question-first with selective attention. The routine, the genre zones, and the exception check that protects every answer.",
    objectives: [
      "run the question-first routine on everyday and campus texts",
      "use each genre's structure — columns, bullets, newest lines — as scanning zones",
      "verify located lines against their neighbours to catch exception clauses",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "The twenty comprehension items in Reading are shared between two task types, and the faster of them is Read in Daily Life: short everyday and campus texts — schedules, notices, announcements, messages — each carrying a question whose answer sits near the surface. Nothing here is academic: a gym timetable, a professor's email, a poster about a blocked stairwell. The skill being measured is selective attention: deciding what you need before you read, finding it fast, and leaving the rest of the text unread without guilt. This lesson installs the question-first routine and the exception check that protects it.",
        beforeYouStart: [
          "You can read short notices and schedules in English at B1 speed.",
          "You know the section's item mix and where this family sits inside it.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — one of the two comprehension task types inside the twenty non-mask items"],
          ["Task & question types", "Read in Daily Life: everyday and campus texts (schedules, notices, messages, announcements) with information questions"],
          ["What is assessed", "Locating the exact information a question needs in a short practical text, at speed, without reading everything"],
          ["Why this matters", "These are the section's cheapest minutes: drilled selective attention banks time for the academic passage"],
        ],
      },
      { type: "heading", text: "The texts you will meet" },
      {
        type: "text",
        text: "The family draws on the printed matter of ordinary life. A schedule lists times, days and exceptions. A notice states a rule, a change or a restriction, usually with a date and an authority at the bottom. An announcement tells a group what is happening, to whom, when and where. A message — email, text or app post — carries a request, a change of plan or an instruction between people. All four put their facts on the surface, but all four also hide traps in the same three places: the exception clause, the qualifier, and the line printed after the one you wanted.",
      },
      {
        type: "definition",
        term: "selective attention",
        partOfSpeech: "noun phrase",
        definition: "The reading move of deciding what information is needed before looking, then letting the eyes find that information while the rest of the text stays unread.",
        example: {
          english: "Asked when the pool closes on Fridays, a reader goes to the Friday column, reads '22:00 (summer only)', and takes 22:00 with its condition attached — having read nothing else on the page.",
          translation: "",
        },
      },
      {
        type: "steps",
        title: "The question-first routine",
        intro: "Five moves, in the same order every time.",
        steps: [
          {
            title: "Read the question before the text",
            text: "The question names the target: a time, a place, a rule, a person. With the target named, the text becomes a lookup table instead of a reading assignment.",
            examples: [
              {
                english: "'Which lot may visitors use after six?' sends the eyes hunting a visitor line and a time, ignoring permits, fines and history.",
                note: "The question is the map.",
              },
            ],
          },
          {
            title: "Predict the answer's shape",
            text: "Decide what the answer will look like before finding it: a day, a room number, a fee, a yes or no. Prediction makes verification instant, because a mismatch of shape is visible before a mismatch of content.",
            examples: [
              {
                english: "The question 'What must students bring?' predicts a short list of objects — so the eye stops on nouns like card and receipt.",
                note: "Shape first, content second.",
              },
            ],
          },
          {
            title: "Scan by zones",
            text: "Schedules answer in columns and rows; notices in bold lines and bullet points; messages in the first and last lines. Scan the structure the genre provides instead of reading left to right like a story.",
            examples: [
              {
                english: "A bus timetable question about Sundays is answered in the Sunday column alone — three seconds, no sentence ever read whole.",
                note: "Genre knowledge is scanning speed.",
              },
            ],
          },
          {
            title: "Verify on the exact line",
            text: "Read the located line and its neighbour at word level. This is where exceptions live: 'except', 'unless', 'before', 'only', 'summer only'. The general rule and its exception usually sit one line apart, on purpose.",
            examples: [
              {
                english: "A notice reading 'The lab is open daily 9–18' continues 'except public holidays' on the next line — the second line carries the answer to 'Is the lab open on 1 May?'",
                note: "Verification is one line, not one page.",
              },
            ],
          },
          {
            title: "Answer and move",
            text: "Type the answer in the shape the item asks for and leave the text immediately; other questions may return to it, but the routine restarts from the question, never from the top of the text.",
            examples: [
              {
                english: "Two minutes for a daily-life set is generous; anything slower means reading is doing attention's job.",
                note: "Cheap minutes are the family's whole purpose.",
              },
            ],
          },
        ],
      },
      {
        type: "comparison",
        title: "Cover to cover versus question-first",
        columns: ["Cover-to-cover reading", "Question-first selective attention"],
        rows: [
          {
            aspect: "Order of operations",
            left: "Read every line in order, hold it all in mind, then meet the question.",
            right: "Read the question, name the target, and let the genre's structure carry the eyes to it.",
          },
          {
            aspect: "Cost",
            left: "Uniform time per text, regardless of what is asked.",
            right: "Time scaled to the question — seconds for a lookup, longer only when verification demands it.",
          },
          {
            aspect: "Failure mode",
            left: "Fatigue and slow drift; by the third text, every notice blurs into the others.",
            right: "Missing an exception clause when verification is skipped — the reason the fourth move exists.",
          },
          {
            aspect: "Where it belongs",
            left: "Leisure reading, and small texts you will be questioned on in detail.",
            right: "Every daily-life item in this section, and most practical reading in working life.",
          },
        ],
        verdict: "The section has priced these texts for selective attention; paying cover-to-cover prices buys nothing the items ask for.",
      },
      {
        type: "example",
        title: "Everyday texts, read the fast way",
        items: [
          {
            english: "Library notice: 'Short-loan items are due back within 24 hours; standard loans run three weeks.' Question: how long is a standard loan? Three weeks, located in the second clause.",
            note: "Two clauses, two rules — the question selects the second.",
            domain: "campus",
          },
          {
            english: "Timetable line: 'Weekend service every 20 minutes until 22:00, then hourly.' Question: a 23:15 departure? It runs hourly — the clause after the comma modifies the one before it.",
            note: "Time clauses chain: read to the end of the chain.",
            domain: "everyday",
          },
          {
            english: "Professor's message: 'Since the server is down, upload your essays to the portal by Friday noon instead.' Question: where do essays go? The portal — 'instead' kills the earlier instruction.",
            note: "'Instead' is a correction marker; the newest instruction wins.",
            domain: "campus",
          },
          {
            english: "Gym announcement: 'Pool closed 6–8 May for maintenance; aqua classes move to Studio 2 all week.' Question: where is Tuesday's aqua class? Studio 2.",
            note: "The second sentence answers a question the first sentence never mentions.",
            domain: "everyday",
          },
          {
            english: "Work rota: 'Kasia: Mon 14–22 this week only; from 12 May, Mon 9–17.' Question: Kasia's permanent Monday start? Nine — 'this week only' detaches the first entry from the future.",
            note: "Schedules speak in dated rules; match dates before numbers.",
            domain: "work",
          },
          {
            english: "A candidate reads the visitor line, answers 'P lot after 18:00', and moves on in forty seconds — the whole set of daily-life questions costs less than one academic-passage item.",
            note: "Banked seconds are the family's product.",
            domain: "exam",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Everyday-reading mistakes corrected",
        items: [
          {
            wrong: "Short texts deserve a full read because there is so little of them.",
            right: "Read the question first and let it steer; the text's brevity is what makes selective attention nearly free.",
            reason: "Twenty comprehension items share one clock — minutes spent reading unasked-for rules are minutes the academic passage will miss.",
          },
          {
            wrong: "The first matching number or day I see is the answer.",
            right: "Verify on the exact line and read its neighbour for exceptions before answering.",
            reason: "Daily-life texts are built so that the general rule and its exception sit close together; the trap is positional, not linguistic.",
          },
          {
            wrong: "Messages can be skimmed for gist like passages.",
            right: "Messages are read for instructions: who wants what, by when, and what changed.",
            reason: "The item asks about the request or the change, and both usually live in the newest sentence — gist reading averages away exactly that detail.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "One notice, four skills",
        reading: {
          text: "Hall notice: Hot water will be off in Block C on Saturday 14 March from 8:00 to about 16:00 while a pump is replaced. Showers in the sports centre remain open all day; residents may use them free of charge on presentation of their key card. Laundry machines in Block C will be unusable until Sunday morning. Questions: facilities desk, ground floor, weekdays 9–17.",
          task: "Before the writing tab, answer silently: when does the water come back, and what must a resident show at the sports centre?",
        },
        writing: {
          task: "Write a 50–90 word message to a flatmate who was away when this notice appeared, relaying everything that affects their Saturday.",
          guide: [
            "Open with the one-line headline: no hot water, Block C, Saturday 14 March.",
            "Give the two facts a flatmate acts on: showers open free at the sports centre with a key card; laundry unusable until Sunday morning.",
            "Add the contact line in your own words.",
            "Keep the register casual but complete — every fact earns its place.",
          ],
          model:
            "Heads up for Saturday the fourteenth: Block C has no hot water from eight in the morning to about four while they replace a pump. You can still shower — the sports centre's showers stay open all day, and they are free that day if you show your key card. The laundry machines are off too until Sunday morning, so do your washing before Saturday or after the weekend. If anything is unclear, the facilities desk on the ground floor handles questions on weekdays, nine to five.",
        },
        listening: {
          script:
            "Announcement, spoken: Attention all members: this Saturday the main pool is closed for the whole day for a filming project. Swim training moves to the north pool at the usual times, except the seven a.m. session, which is cancelled. The café stays open. We apologise for the disruption and thank you for your patience.",
          task: "Listen and answer: where has training moved, and which session is cancelled?",
        },
        speaking: {
          task: "Relay the hall notice aloud to a partner as if leaving a voice note, in under forty seconds.",
          frames: [
            "Quick note about Saturday — the …",
            "Two things affect you: the showers…, and the laundry…",
            "You'll need your …",
            "If anything's unclear, contact …",
          ],
          checklist: [
            "Did the relay carry the date and both restrictions?",
            "Did it include the key-card condition?",
            "Did it stay under forty seconds?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "The message leads with the headline, then the two actionable facts, then the contact — the order a reader under time pressure consumes information."],
          ["Grammar", "Short imperative and declarative sentences ('You can still shower', 'The laundry machines are off') match spoken-message grammar rather than notice-board formality."],
          ["Vocabulary", "Everyday register throughout — 'heads up', 'do your washing' — while the facts keep the notice's own precision: dates, times, the key-card condition."],
          ["Coherence", "Each sentence adds one fact a flatmate can act on, so nothing needs rereading and nothing important is buried mid-paragraph."],
          ["Task fulfilment", "All four notice facts appear — outage window, free showers, key card, laundry dates — plus the contact line the task asked the writer to keep."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Accept the family's deal: question first, target named, zones scanned — and expect an exception clause near every general rule."],
          ["While the clock runs", "Match the question's shape to the genre's structure: columns for schedules, bullets for notices, the newest line for messages."],
          ["If you are stuck", "Re-read the question for the exact target word — most 'stuck' daily-life items are being answered for a slightly different question than the one asked."],
          ["Final minutes", "Sweep the family's items by re-verifying one line each: the located line plus its neighbour, where every exception hides."],
        ],
      },
      {
        type: "summary",
        points: [
          "Read in Daily Life carries the everyday texts — schedules, notices, announcements and messages — with answers on the surface.",
          "Run the question-first routine: read the question, predict the answer's shape, scan the genre's zones, verify the exact line, answer and move.",
          "Verification is one line plus its neighbour — exception words like 'except', 'unless' and 'only' sit exactly there.",
          "In messages, the newest instruction wins: 'instead', 'from' and 'this week only' detach old rules from new ones.",
          "The family's product is banked time: minutes saved here are minutes the academic passage will spend.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item from each of the module's earlier lessons and one from Fundamentals.",
        items: [
          {
            question: "How many comprehension items does the Reading section carry?",
            options: ["Twenty, across Read in Daily Life and Read an Academic Passage", "Fifty, all comprehension", "Ten, all on everyday texts"],
            correctIndex: 0,
            explanation: "Twenty comprehension items share the section with about thirty Complete the Words items.",
            from: "toefl-reading-overview",
          },
          {
            question: "What is the ceiling on effort for a single stubborn mask?",
            options: ["Two calm passes, then a best guess and a flag", "As long as it takes", "One pass, then skip it empty"],
            correctIndex: 0,
            explanation: "The guess can score and the blank cannot; the flag preserves a calm second look for the sweep.",
            from: "toefl-reading-complete-words",
          },
          {
            question: "Which section habit does the Fundamentals pacing card assign to the end of each module?",
            options: ["A sweep that fills every blank", "A rest before the next section", "A reread of the hardest passage"],
            correctIndex: 0,
            explanation: "The sweep collects the free expected value of guessing — no wrong-answer penalty exists in the section.",
            from: "toefl-time-management",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Read the notice and answer with the exception in mind.",
        hints: ["Find the general rule first, then read one line past it."],
        passageTitle: "Lab access",
        passage:
          "The computer laboratory is open daily from 9:00 to 21:00 for all enrolled students. Access after 21:00 requires a night permit from the security office. On public holidays the laboratory closes at 14:00, and the weekend before each exam period it opens two hours early, at 7:00.",
        question: "A student wants to work in the laboratory on a public holiday morning at 10:00. Is that possible?",
        options: [
          { id: "a", text: "Yes — holiday closing is 14:00, so a 10:00 arrival falls inside the opening hours." },
          { id: "b", text: "No — holidays close the laboratory entirely." },
          { id: "c", text: "Yes, but only with a night permit." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Yes — holiday closing is 14:00, so a 10:00 arrival falls inside the opening hours.",
          "The holiday rule modifies the closing time, not the opening, so a morning visit is unaffected — the exception clause governs the whole of the holiday, and 10:00 sits inside it.",
          "Option (b) invents a closure the notice never states; a night permit (c) concerns access after 21:00, which a morning visit never touches.",
        ),
        tags: ["toefl", "reading", "daily-life"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Guided practice. Listen to the announcement and type the answer.",
        hints: ["The exception is a room that keeps its old rule."],
        audioText:
          "Attention, library users: from Monday, group study rooms must be booked online at least a day in advance. Walk-in bookings will no longer be accepted. The silent reading room on floor three is unaffected and remains first-come, first-served.",
        question: "Which room keeps working without a booking?",
        acceptedAnswers: [
          "the silent reading room",
          "the silent reading room on floor three",
          "silent reading room",
          "floor three silent reading room",
        ],
        keywords: ["silent", "reading", "room"],
        feedback: fb(
          "The silent reading room on floor three.",
          "The announcement changes one rule — online booking for group rooms — and explicitly exempts the silent reading room, making it the one space still open without a reservation.",
          "Group study rooms are exactly the spaces the new booking rule governs, so any answer naming them reverses the exemption.",
        ),
        tags: ["toefl", "reading", "daily-life"],
      }),
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "Independent practice. What does 'selective attention' mean in this lesson?",
        hints: [],
        options: [
          { id: "a", text: "Reading only the bold text and ignoring everything else." },
          { id: "b", text: "Deciding what information is needed before looking, then finding it while the rest stays unread." },
          { id: "c", text: "Concentrating hardest on the longest sentence in the text." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Deciding what information is needed before looking, then finding it while the rest stays unread.",
          "The question names the target, the genre's structure steers the eyes, and verification covers one line — reading less is a method, not negligence.",
          "Bold-only reading (a) skips the exception clauses verification exists for; longest-sentence focus (c) mistakes length for importance.",
        ),
        tags: ["toefl", "reading", "daily-life"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Independent practice. Name the five moves of the question-first routine in order.",
        hints: [],
        question: "List the routine's five moves in one short answer.",
        acceptedAnswers: [
          "read the question, predict the shape, scan by zones, verify the line, answer and move",
          "question, prediction, zones, verification, answer",
          "read the question first, predict the answer's shape, scan the genre's zones, verify the exact line, answer and move",
        ],
        keywords: ["question", "predict", "scan", "verify", "answer"],
        feedback: fb(
          "Read the question, predict the shape, scan by zones, verify the line, answer and move.",
          "The five moves scale the cost of every daily-life item to its question — seconds for lookups, a little longer when an exception clause needs reading — which is how the family banks time.",
          "Lists that swap verification for rereading pay cover-to-cover prices for question-first work.",
        ),
        tags: ["toefl", "reading", "daily-life"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "reading",
        prompt: "Independent practice. Complete the verification rule.",
        hints: [],
        sentence: "Verification reads the located line plus its ___ , because exception words such as 'except' and 'only' usually sit one line away from the general rule.",
        acceptedAnswers: ["neighbour", "neighbor", "neighbouring line", "next line"],
        feedback: fb(
          "Its neighbour.",
          "Daily-life texts pair rules with exceptions at close range, so the line after a located rule is where the answer's condition hides — reading it is the whole of verification.",
          "Answers naming the whole text restore cover-to-cover reading, the habit this lesson retires.",
        ),
        tags: ["toefl", "reading", "daily-life"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A message reads: 'Upload your essay to the portal by Friday noon instead of the class drive.' What does 'instead of' tell you?",
        hints: [],
        options: [
          { id: "a", text: "The portal instruction replaces the class-drive instruction — the newest instruction wins." },
          { id: "b", text: "Both routes remain open until Friday." },
          { id: "c", text: "The class drive is broken and cannot be repaired." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The portal instruction replaces the class-drive instruction — the newest instruction wins.",
          "Correction markers like 'instead of' detach the old rule from the new one, and message items ask about exactly this newest-instruction fact.",
          "Option (b) averages two rules into one that matches neither; option (c) invents a cause the message never states.",
        ),
        tags: ["toefl", "reading", "daily-life"],
      }),
    ],
    homework: [
      "Collect three real everyday texts this week — a schedule, a notice, a message — and write one question per text whose answer sits in an exception clause.",
      "Run your next daily-life practice set question-first with a timer, and log the seconds per item; the number should fall before your accuracy does.",
    ],
    assignment: {
      title: "Everyday text brief",
      instructions:
        "Using the hall notice in this lesson's reading tab as your source, write a 60–140 word note for your residence's group chat explaining the Saturday arrangements, what residents should do about showers and laundry, and one question you would still ask the facilities desk.",
      minWords: 60,
      maxWords: 140,
    },
  },
  {
    slug: "toefl-reading-academic-passage",
    title: "Read an Academic Passage",
    description:
      "The deeper comprehension task type: a longer academic text with single-answer and select-two items. The structural map that speeds the passage up, the near-miss catalogue, and the word-level verification that kills almost-right options.",
    objectives: [
      "build a structural map of an academic passage from topic sentences and the closing line",
      "answer single-answer and select-two items by predicting, locating and verifying",
      "eliminate the four near-miss option types: true-but-unasked, overstatement, outside fact and half-pair",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "The other comprehension task type is Read an Academic Passage: a longer text in the register of university reading, with items that ask what the passage says, how it is built, and what follows from it. Two item formats appear: single-answer items, where one option is correct, and select-two items, where exactly two options must be chosen. The passage is where the section's banked minutes get spent, and where its most expensive errors live — options that are true but unasked for, or half right. This lesson teaches the structural map that speeds the passage up, and the elimination routine that kills near-miss options.",
        beforeYouStart: [
          "You have completed the daily-life lesson and its question-first routine.",
          "You can read a multi-paragraph B1+ text without translating sentence by sentence.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — the deeper of the two comprehension task types inside the twenty non-mask items"],
          ["Task & question types", "Read an Academic Passage: single-answer comprehension items and select-two items on a longer academic text"],
          ["What is assessed", "Understanding of a passage's claims, structure, stated detail and implications, at the pace the clock allows"],
          ["Why this matters", "This family spends the minutes the other two bank, and near-miss options make it the section's main source of lost marks"],
        ],
      },
      { type: "heading", text: "What an academic passage is made of" },
      {
        type: "text",
        text: "Academic prose is built to be navigable. An opening paragraph frames a topic and usually states or approaches a thesis — the passage's central claim. Each body paragraph opens with a topic sentence making one claim, then serves that claim with evidence, examples or concessions. Transitions — however, moreover, in contrast, as a result — mark the argument's turns. Reading the first sentence of each paragraph plus the passage's final sentence yields a map of the whole in well under two minutes, and the map converts every item from a search into a lookup.",
      },
      {
        type: "definition",
        term: "select-two item",
        partOfSpeech: "noun phrase",
        definition: "A comprehension item whose options contain exactly two passage-supported answers; both must be selected for the item to score.",
        example: {
          english: "An item reading 'Select the two sentences the passage uses to support its claim about urban cooling' expects two options grounded in the text and rewards only the pair.",
          translation: "",
        },
      },
      {
        type: "steps",
        title: "Map, locate, verify",
        intro: "The passage routine in five moves.",
        steps: [
          {
            title: "Map before touching items",
            text: "Read the first sentence of each paragraph and the passage's final sentence; note each paragraph's topic in three words. The map costs under two minutes and pays for itself on the first item it routes.",
            examples: [
              {
                english: "A four-paragraph passage maps to: phenomenon, cause, objection, verdict — and an item about the objection goes straight to paragraph three.",
                note: "Maps turn passages into filing cabinets.",
              },
            ],
          },
          {
            title: "Read the item and predict",
            text: "Restate what the item asks in your own words before reading the options; a prediction held in mind protects against options that answer a different question than the one printed.",
            examples: [
              {
                english: "'What does the passage suggest about early maps?' becomes 'opinion of old maps' — and options about modern mapping stop competing.",
                note: "Prediction is the shield against near-misses.",
              },
            ],
          },
          {
            title: "Locate the evidence zone",
            text: "Use the map to go to the paragraph the item names or implies; an item's evidence almost always sits in one paragraph, not spread across the passage.",
            examples: [
              {
                english: "An item about a study's method belongs to the paragraph whose map note says 'method' — no other paragraph needs reading.",
                note: "The map is the locator.",
              },
            ],
          },
          {
            title: "Verify every word of the option",
            text: "Match the option's claim against the located lines word by word: quantities, qualifiers, time frames and subjects must all be earned. An option that overstates, narrows or widens the text fails even when its topic is right.",
            examples: [
              {
                english: "The text says 'some coastal cities'; an option saying 'most coastal cities' shares the topic and the tense — and fails on one quantifier.",
                note: "One wrong word is a wrong option.",
              },
            ],
          },
          {
            title: "Handle select-two by independence",
            text: "Judge each option on its own evidence, select the two the passage supports, and stop; select-two items score as pairs, and a third selection is a wrong answer, not insurance.",
            examples: [
              {
                english: "Four options, two supported: the reader who treats each alone picks the pair without being pulled by the two near-misses.",
                note: "Independence is the whole strategy.",
              },
            ],
          },
        ],
      },
      {
        type: "table",
        title: "The near-miss catalogue",
        headers: ["Near-miss type", "How it looks right", "How it dies"],
        rows: [
          ["True but unasked for", "States something the passage really says, on a different question from the one asked.", "Re-read the item's question and your prediction; the option is answering yesterday's question."],
          ["The overstatement", "Takes a qualified claim and drops its qualifier — some becomes most, may becomes will.", "Return to the located line and restore every quantifier the option smoothed away."],
          ["The outside fact", "True in the world, familiar from outside reading, and never stated in the passage.", "Ask where in the passage the claim lives; if no line earns it, it dies."],
          ["The half-pair", "On a select-two item, one genuinely supported option beside one near-miss.", "Score each option independently; pairs are earned, never assumed."],
        ],
        caption: "Name the trap in front of you before testing it — each type has its own death.",
      },
      {
        type: "comparison",
        title: "Two formats, one routine",
        columns: ["Single-answer items", "Select-two items"],
        rows: [
          {
            aspect: "What is wanted",
            left: "Exactly one option supported by the passage.",
            right: "Exactly two options supported by the passage, chosen as a pair.",
          },
          {
            aspect: "Elimination shape",
            left: "Three near-misses to kill, one survivor.",
            right: "Two near-misses to kill, two survivors — judged independently, never as a set.",
          },
          {
            aspect: "Cost of a mistake",
            left: "One wrong selection loses the item.",
            right: "One wrong selection loses the item — there is no half credit for a half pair.",
          },
          {
            aspect: "Time feel",
            left: "Faster; one verification pass.",
            right: "Longer; budget a second verification pass and accept it.",
          },
        ],
        verdict: "The routine is identical — map, predict, locate, verify — and only the counting differs: one supported option or two.",
      },
      {
        type: "example",
        title: "Near-misses at work",
        items: [
          {
            english: "Passage: 'Some volunteers reported improved sleep.' Item: What did the study find? Option: 'Most volunteers slept better after the programme.' — true in spirit, dead on a quantifier.",
            note: "Some is not most; verification catches it in one word.",
            domain: "exam",
          },
          {
            english: "An item asks why the canal was abandoned; an option correctly describes when the canal was abandoned. Same topic, wrong question.",
            note: "True-but-unasked is the most popular near-miss in this family.",
            domain: "exam",
          },
          {
            english: "A reader who knows beavers transform rivers meets the option 'beavers were reintroduced in 1998' and trusts it on world knowledge; the passage never dates any reintroduction.",
            note: "Outside knowledge feels like evidence and scores like invention.",
            domain: "study",
          },
          {
            english: "A select-two item on a passage about leaf colour: two supported facts about pigments, two near-misses about weather; the independent reader banks the pair in ninety seconds.",
            note: "Pairs are won by scoring options one at a time.",
            domain: "exam",
          },
          {
            english: "A candidate maps a five-paragraph passage in one hundred seconds and answers six of its eight items from the map plus one verification read each.",
            note: "The map is the family's engine; the reading it replaces is the time it saves.",
            domain: "study",
          },
          {
            english: "A seminar leader asks what a paper's second paragraph contributes; a student who knows the map answers 'the counter-argument' without rereading.",
            note: "Structural reading serves coursework the same way.",
            domain: "work",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Passage mistakes corrected",
        items: [
          {
            wrong: "An option that states something true from the passage must be the answer.",
            right: "The answer is the option that answers the question asked — truth is necessary and nowhere near sufficient.",
            reason: "True-but-unasked options are written precisely for readers who verify content but never re-check the question.",
          },
          {
            wrong: "On select-two items I will choose the strongest option and hope one is enough.",
            right: "Select exactly two: score every option independently and commit to the pair the passage supports.",
            reason: "The format scores pairs, so a lone correct selection earns nothing a blank would not.",
          },
          {
            wrong: "I will read the passage thoroughly first so the items feel easier.",
            right: "Map the structure first, then let each item send you to its paragraph for one verification read.",
            reason: "Thorough first reading pays cover-to-cover prices for information the map provides in two minutes, and memory fades before the last items anyway.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "One passage, four skills",
        reading: {
          text: "Citizen science and urban heat. (1) In many cities, volunteers now tape sensors to their balconies, and the resulting maps of street-by-street temperature are changing municipal policy. (2) The practice succeeds because cities are unevenly hot: two streets a hundred metres apart can differ by several degrees, and official stations are too few to see the pattern. (3) Skeptics note that volunteer equipment varies and placement favours balconies over parks, which can bias the picture. (4) Even so, the data's density has let several cities target tree-planting where the sensors say heat concentrates, and the trees, in turn, are beginning to show up in the measurements themselves.",
          task: "Before the writing tab, note each paragraph's job in three words: phenomenon, cause, objection, verdict — then check yourself.",
        },
        writing: {
          task: "In 60–100 words, state the passage's thesis and the job paragraph 3 does in the argument, quoting or naming one phrase as evidence for each.",
          guide: [
            "Sentence one: the thesis — what the passage as a whole claims about volunteer sensing.",
            "Sentence two: paragraph 3's job — the objection it voices and the signal words that mark it.",
            "Cite a phrase that carries each claim ('too few to see the pattern', 'Skeptics note').",
            "Keep to two claims; do not summarise the whole passage.",
          ],
          model:
            "The passage's thesis is that volunteer temperature sensing is dense enough to change municipal policy: official stations are 'too few to see the pattern' that cheap balcony sensors reveal. Paragraph 3 does the argument's concession work: it voices the objection that equipment varies and placement favours balconies over parks, marked by the signal 'Skeptics note'. The passage then answers the objection in paragraph 4, where the same dense data guides tree-planting — the policy change the thesis promised.",
        },
        listening: {
          script:
            "Tutor: Walk me through how you handled the select-two item. Student: The item asked for the two things the passage says about official weather stations. Tutor: And? Student: I scored each option alone. One said stations are too few to see street-level patterns — that's in paragraph two, supported. One said stations are deliberately hidden — nothing in the passage, outside knowledge. One said station data costs cities too much — never mentioned. One said sensors simply outperform stations everywhere — the passage says denser, not better, and only for this purpose. Tutor: So your pair? Student: The 'too few' option and the one about stations missing differences between nearby streets — both earned by the same located line.",
          task: "Which two options did the student select, and which near-miss type was 'stations are deliberately hidden'?",
        },
        speaking: {
          task: "Explain the map-locate-verify routine to a partner in under a minute, using the citizen-science passage as your worked case.",
          frames: [
            "First I map by reading …",
            "For the item about paragraph three, my prediction was …",
            "The near-miss I killed was …, because …",
            "So the routine turns every item into …",
          ],
          checklist: [
            "Did I describe the map's two sources — first sentences and the final sentence?",
            "Did I name one near-miss type and its death?",
            "Did I state how select-two options are scored?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Two claims, two sentences, two citations — the model mirrors the structural reading it describes, so its own shape teaches the map."],
          ["Grammar", "Reporting verbs ('voices', 'claims', 'marks') attribute each claim to its paragraph, keeping the writer's voice out of the passage's argument."],
          ["Vocabulary", "Argument vocabulary does precise work — thesis, concession, objection, signal — the same terms the comprehension items trade in."],
          ["Coherence", "The closing sentence links paragraph 3's objection to paragraph 4's answer, showing the argument as a structure rather than a list of topics."],
          ["Task fulfilment", "The thesis is stated, paragraph 3's job is named with evidence, and the quoted phrases anchor both claims to the text as instructed."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Draw the map first: first sentence of every paragraph, the final sentence, one three-word note per paragraph — before any item is read."],
          ["While the clock runs", "Predict each item's question before its options; verify located lines word by word, and let the map — not memory — steer you back."],
          ["If you are stuck", "Name the near-miss type in front of you; true-but-unasked, overstatement, outside fact and half-pair each have their own test."],
          ["Final minutes", "Return to flagged items with the map still in view; a fresh verification of one line beats a reread of the passage."],
        ],
      },
      {
        type: "summary",
        points: [
          "Academic passages are navigable by structure: a thesis, paragraph topic sentences, transitions and a closing verdict.",
          "Map first — first sentences plus the final sentence — then let each item send you to one paragraph for one verification read.",
          "Single-answer items want the one option the passage supports; select-two items want exactly two, scored independently as a pair.",
          "Near-misses come in four kinds: true-but-unasked, the overstatement, the outside fact and the half-pair — each dies to a specific check.",
          "Verification is word-level: quantifiers, qualifiers, time frames and subjects must all be earned by the located line.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item from each of the module's earlier lessons.",
        items: [
          {
            question: "How do the twenty comprehension items divide?",
            options: ["Between Read in Daily Life and Read an Academic Passage", "All on academic passages", "All on everyday texts"],
            correctIndex: 0,
            explanation: "The two comprehension task types share the twenty items — daily life for speed, academic passages for depth.",
            from: "toefl-reading-overview",
          },
          {
            question: "What selects the intended word when two candidates fit a mask's letters?",
            options: ["The sentence's meaning and habitual partnerships", "The longer word", "Alphabetical order"],
            correctIndex: 0,
            explanation: "Evidence, not spelling length, picks between legal candidates — the mask lesson's core rule.",
            from: "toefl-reading-complete-words",
          },
          {
            question: "In the daily-life routine, what happens between scanning and answering?",
            options: ["Verification on the exact line and its neighbour", "A full reread of the text", "A note summarising the notice"],
            correctIndex: 0,
            explanation: "Verification is where exception clauses are caught — one line plus its neighbour, then the answer.",
            from: "toefl-reading-daily-life",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Use the map, then answer.",
        hints: ["Which paragraph voices the objection, and what does the next one do with it?"],
        passageTitle: "Citizen science and urban heat",
        passage:
          "In many cities, volunteers now tape sensors to their balconies, and the resulting maps of street-by-street temperature are changing municipal policy. The practice succeeds because cities are unevenly hot: two streets a hundred metres apart can differ by several degrees, and official stations are too few to see the pattern. Skeptics note that volunteer equipment varies and placement favours balconies over parks, which can bias the picture. Even so, the data's density has let several cities target tree-planting where the sensors say heat concentrates, and the trees, in turn, are beginning to show up in the measurements themselves.",
        question: "How does the passage treat the objection raised in its third paragraph?",
        options: [
          { id: "a", text: "It ignores the objection and continues with new evidence." },
          { id: "b", text: "It concedes the objection and answers it with the policy results the data has already produced." },
          { id: "c", text: "It rejects the objection by proving volunteer equipment equals official equipment." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "It concedes the objection and answers it with the policy results the data has already produced.",
          "Paragraph 4's 'Even so' accepts paragraph 3's bias point and answers it functionally: dense data is already guiding tree-planting, and the trees are now visible in the measurements — concession followed by practical answer.",
          "Ignoring (a) misses the 'Even so' turn; proving equipment equal (c) claims a comparison the passage never makes.",
        ),
        tags: ["toefl", "reading", "academic-passage"],
      }),
      ex({
        type: "multi-select",
        difficulty: "hard",
        skill: "reading",
        prompt: "Guided practice. Select-two: choose the two statements the passage supports about official weather stations.",
        hints: ["Score each option alone against paragraph two."],
        options: [
          { id: "a", text: "They are too few to detect street-by-street temperature patterns." },
          { id: "b", text: "They are deliberately hidden from the public." },
          { id: "c", text: "They can miss temperature differences between streets a hundred metres apart." },
          { id: "d", text: "They have been replaced by balcony sensors in several cities." },
        ],
        correctOptionIds: ["a", "c"],
        feedback: fb(
          "They are too few to detect street-by-street temperature patterns, and they can miss temperature differences between streets a hundred metres apart.",
          "Both selections are earned by paragraph two's located line — 'two streets a hundred metres apart can differ by several degrees, and official stations are too few to see the pattern' — one claim about count, one about resolution, both verified word by word.",
          "'Deliberately hidden' (b) is an outside fact the passage never states; 'replaced' (d) overstates a passage that describes supplementing official stations, not replacing them.",
        ),
        tags: ["toefl", "reading", "academic-passage"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Independent practice. An option states something the passage truly says — but about a different question. What is this near-miss called, and what kills it?",
        hints: [],
        options: [
          { id: "a", text: "An overstatement; it dies when quantifiers are restored." },
          { id: "b", text: "True but unasked for; it dies when the item's question is re-read against your prediction." },
          { id: "c", text: "An outside fact; it dies when no located line earns it." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "True but unasked for; it dies when the item's question is re-read against your prediction.",
          "Content verification alone cannot kill this near-miss, because the content is genuinely in the passage — only the question, restated as a prediction before reading the options, exposes the mismatch.",
          "Overstatements (a) die on restored quantifiers and outside facts (c) on missing evidence — different tests for different traps.",
        ),
        tags: ["toefl", "reading", "academic-passage"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Independent practice. Name the four near-miss types in this lesson's catalogue.",
        hints: [],
        question: "List the four near-miss types in one short answer.",
        acceptedAnswers: [
          "true but unasked for, the overstatement, the outside fact and the half-pair",
          "true but unasked, overstatement, outside fact, half-pair",
          "unasked truth, overstatement, outside knowledge, half pair",
        ],
        keywords: ["unasked", "overstatement", "outside", "half"],
        feedback: fb(
          "True but unasked for, the overstatement, the outside fact and the half-pair.",
          "Each type has its own test — the question re-read, the restored quantifier, the missing located line, and independent scoring — and naming the trap in front of you is half of killing it.",
          "Any list that merges the outside fact with the overstatement loses the two different checks that separate them.",
        ),
        tags: ["toefl", "reading", "academic-passage"],
      }),
      ex({
        type: "read-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Map the passage, then answer.",
        hints: [],
        passageTitle: "Faster post, faster promises",
        passage:
          "When the postal service introduced daily deliveries in the 1850s, letter writers began to expect replies within days rather than weeks. Historians describe an etiquette of promptness that spread with the penny post: an unanswered letter became a small social debt. The telegraph then compressed the expectation again — a message that crossed a country in minutes demanded, some complained, an answer within the hour. Each speed-up re-taught the same lesson: the medium does not merely carry the message, it resets the audience's clock.",
        question: "Which statement best expresses the passage's main claim?",
        options: [
          { id: "a", text: "The telegraph was more important than the penny post." },
          { id: "b", text: "Each new communication medium changes how quickly audiences expect a response." },
          { id: "c", text: "Nineteenth-century letter writers were in constant debt." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Each new communication medium changes how quickly audiences expect a response.",
          "The passage's final sentence states the thesis directly — the medium 'resets the audience's clock' — and the two historical cases exist to support it, which is why (b) is the map-level claim rather than a paragraph-level fact.",
          "Option (a) ranks two cases the passage presents as parallel; option (c) takes a metaphor about social obligation literally.",
        ),
        tags: ["toefl", "reading", "academic-passage"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "reading",
        prompt: "Independent practice. Complete the routine.",
        hints: [],
        sentence: "On a select-two item, score every option ___ before choosing the pair.",
        acceptedAnswers: ["independently", "on its own", "alone"],
        feedback: fb(
          "Independently.",
          "Select-two items score as pairs, and pairs are earned one option at a time — assuming a set because two options look related is how the half-pair trap wins.",
          "Scoring options as a group lets a supported option carry a near-miss with it, which loses the item exactly as a blank would.",
        ),
        tags: ["toefl", "reading", "academic-passage"],
      }),
    ],
    homework: [
      "Take one academic passage from your practice library, write the three-word map beside it, and answer its items using only the map plus one verification read each — then compare your accuracy with your last cover-to-cover attempt.",
      "From the same passage, collect three options you rejected and label each with its near-miss type from the catalogue.",
    ],
    assignment: {
      title: "Thesis and trap report",
      instructions:
        "Using the citizen-science passage from this lesson's reading tab, write 60–140 words stating (1) the passage's thesis in one sentence, (2) the job paragraph two does, and (3) one near-miss option you could imagine on an item about this passage — name its type and the check that kills it.",
      minWords: 60,
      maxWords: 140,
    },
  },
];
