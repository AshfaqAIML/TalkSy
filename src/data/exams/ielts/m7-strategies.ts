/**
 * Module 7 — Exam Strategies (shared by both variants).
 *
 * Time management, instruction reading, answer selection, common mistakes,
 * difficult questions, exam-day preparation and review strategy. Each
 * lesson is short by design: these are habits to rehearse inside mocks,
 * not content to memorise.
 */

import type { ModuleSpec } from "./types";
import { ex, fb } from "./types";

export const module7Strategies: ModuleSpec = {
  slug: "module-7-exam-strategies",
  title: "Module 7 — Exam Strategies",
  description:
    "The strategy layer that converts language into marks under exam conditions: time management, understanding instructions, answer selection, avoiding the classic mistakes, handling questions you cannot crack, exam-day preparation, and the review loop that feeds every next cycle.",
  units: [
    {
      slug: "strategy",
      title: "Strategy",
      description: "Habits rehearsed in mocks, not notes read the night before.",
      lessons: [
        {
          slug: "ielts-strategy-instructions",
          title: "Understanding instructions",
          description: "The rubric is worth marks: word limits, 'choose TWO letters', True vs Yes, and the conventions of answer format.",
          objectives: [
            "Read instruction lines as scoring rules",
            "Apply word-limit conventions (hyphens, numbers as figures)",
            "Distinguish True/False/Not Given from Yes/No/Not Given tasks",
          ],
          minutes: 12,
          blocks: [
            { type: "heading", text: "Instructions are questions in disguise" },
            {
              type: "table",
              title: "Rubric lines and what they decide",
              headers: ["You read…", "It means…"],
              rows: [
                ["Write NO MORE THAN TWO WORDS AND/OR A NUMBER", "Three words = zero for that item, however correct"],
                ["Choose TWO letters (A–E)", "Both required; there is no partial credit"],
                ["Do the following statements agree with the information…", "TRUE/FALSE/NOT GIVEN — about FACTS in the text"],
                ["Do the following statements reflect the claims of the writer…", "YES/NO/NOT GIVEN — about the WRITER'S VIEWS; 'Not Given' means the writer expresses no view"],
                ["Complete the summary using words from the passage", "Answers must come from the text — and fit the summary's grammar"],
              ],
              caption: "Every one of these lines has silently decided marks before you answered anything.",
            },
            {
              type: "grammar-rule",
              title: "Answer-format conventions",
              rule: "Numbers may be figures or words when a number is allowed ('6' or 'six' both score). Hyphenated words count as one word ('part-time'). Do not add words the limit cannot afford; when two forms are possible, prefer the one the recording or passage actually used.",
              explanation:
                "These conventions apply across Listening and Reading. They are scoring rules, not preferences.",
              examples: [
                { english: "Limit ONE WORD: answer 'check-in' ✓ (one hyphenated word); 'the check in' ✗", translation: "'check-in' vale; 'the check in' no." },
              ],
              exceptions: ["Contracted forms are not tested as answers."],
            },
            {
              type: "warning",
              title: "The True/Yes confusion",
              text: "TRUE/FALSE/NOT GIVEN tests factual claims against the text. YES/NO/NOT GIVEN asks about the WRITER's opinion: 'Yes' = the writer would agree, 'No' = the writer would disagree, 'Not Given' = the writer takes no position. Answering a Yes/No task with True/False scores zero even when the judgement is right.",
            },
            {
              type: "example",
              title: "One instruction line, answered two ways",
              items: [
                { english: "Text: 'The museum closed its photography gallery in March; the director called it a temporary measure.' Item: 'The photography gallery will definitely reopen.' Under TRUE/FALSE/NOT GIVEN: NOT GIVEN — no reopening fact appears. Under YES/NO/NOT GIVEN (claims of the writer): also NO — 'temporary' signals the director's view that it will reopen, so the writer would disagree with 'definitely'.", note: "The same item flips label families depending on the rubric line — which is exactly why the instruction is read before the item.", domain: "travel" },
                { english: "Rubric: 'Write NO MORE THAN TWO WORDS AND/OR A NUMBER'. Recording: 'Your follow-up appointment is on the 12th of June, at the main clinic.' Item: 'Date of follow-up appointment: ___'. Written as 'the 12th of June' the answer is four words and scores zero; written as '12 June' it is one word plus a number and scores in full.", note: "Numbers count as numbers, not words, and articles count as words — the cheapest repair in IELTS is deleting 'the' and 'of' before you confirm a completion answer.", domain: "health" },
                { english: "Rubric: 'Write ONE WORD ONLY'. Recording: 'It's not a full-time programme — it runs as a part-time course over two years.' Item: 'The course is offered on a ___ basis.' The answer 'part-time' is ONE word (the hyphen makes it one); 'part time' written as two words breaks the limit and scores zero.", note: "Hyphenated compounds count as one word — but only the hyphen earns that: the convention is a scoring rule, so the hyphen itself is worth a mark.", domain: "education" },
                { english: "Rubric: 'Which TWO facilities are mentioned by the receptionist? Choose TWO letters (A–E).' Options: (A) swimming pool (B) sauna (C) café (D) squash courts (E) physiotherapy room. The candidate hears the café clearly, half-hears something about courts, and writes only (C) — which scores zero, because one letter of two is not half credit. The disciplined move: (C) plus your best-evidence second letter.", note: "'Choose TWO letters' carries no partial credit — a certain one plus a guessed one outscores a certain one alone by exactly the probability of the guess.", domain: "sport" },
                { english: "Rubric: 'Complete the summary using words taken from the passage.' Passage: 'The river valley was once a patchwork of family farms.' Summary item: 'The valley consisted of a patchwork of ___.' The passage's words are 'family farms' — plural; a candidate who copies 'family farm' has used only passage words and still scores nothing.", note: "'Words from the passage' must also fit the summary's grammar: number and part of speech belong to the answer, not to the decoration.", domain: "nature" },
                { english: "Block header: 'Do the following statements reflect the claims of the writer?' Item: 'Remote work damages team innovation.' The passage argues the opposite — the writer calls such fears overblown. The candidate's judgement ('disagree') is exactly right, and the answer 'FALSE' still scores zero, because this block answers YES / NO / NOT GIVEN.", note: "A correct judgement in the wrong label family scores like a wrong one, item after item — read the header before the first item, not after the mistake.", domain: "work" },
              ],
            },
            {
              type: "mistakes",
              title: "Instruction errors that cost marks before the answer is even judged",
              items: [
                { wrong: "Writing 'the 12th of June' under 'NO MORE THAN ONE WORD AND/OR A NUMBER'.", right: "12 June", reason: "Word limits are scoring rules, not advice: articles and prepositions count as words, and one word over the limit converts a correct answer into zero." },
                { wrong: "Answering a 'claims of the writer' block with TRUE / FALSE.", right: "YES / NO — the label family the header names.", reason: "TRUE/FALSE judges facts in the text; YES/NO judges the writer's views — a right judgement in the wrong family scores nothing, item after item down the block." },
                { wrong: "Copying 'family farm' from the passage into a summary slot that needs a plural.", right: "family farms", reason: "'Words from the passage' must still fit the summary's grammar: the number of the noun is part of the answer, and the final sweep's noun-number check exists for exactly this." },
                { wrong: "Writing one letter under 'Choose TWO letters (A–E)' because the second pick feels like a guess.", right: "Two letters, always — the second being your best-evidence pick.", reason: "Two-letter items carry no partial credit: one letter scores zero, so a disciplined guess beats a blank by exactly its probability — the no-blank rule in miniature." },
              ],
            },
            {
              type: "summary",
              points: [
                "Instruction lines are scoring rules in disguise: word limits and letter counts decide marks before you answer.",
                "'NO MORE THAN TWO WORDS AND/OR A NUMBER' exceeded by one word = zero for that item, however correct.",
                "Numbers may be figures or words; hyphenated words count as one; prefer the form the source used.",
                "TRUE/FALSE/NOT GIVEN judges facts in the text; YES/NO/NOT GIVEN judges the writer's views — never mix the label families.",
                "'Words from the passage' means the answer must both come from the text and fit the summary's grammar.",
              ],
            },
          ],
          questions: [
            ex({
              type: "mcq",
              difficulty: "medium",
              skill: "reading",
              prompt: "The rubric says 'Write ONE WORD ONLY'. You write 'very expensive'. What happens?",
              hints: ["Limits are absolute."],
              options: [
                { id: "a", text: "Half credit, since 'expensive' is in there." },
                { id: "b", text: "Zero — the limit is a scoring rule, not advice." },
                { id: "c", text: "Full credit if the meaning is right." },
              ],
              correctOptionId: "b",
              feedback: fb(
                "Zero.",
                "Exceeding a word limit kills the item. If the key is 'expensive', write 'expensive' — never decorate answers.",
              ),
              tags: ["strategy", "word-limits"],
            }),
            ex({
              type: "fill-blank",
              difficulty: "medium",
              skill: "reading",
              prompt: "Task-type identification. A question block begins: 'Do the following statements reflect the claims of the writer?' Complete the label set you must use: '___ / ___ / Not Given'.",
              sentence: "The three labels are: ___ (write the first label only).",
              acceptedAnswers: ["Yes", "YES"],
              hints: ["Claims of the writer → opinions → Yes/No, not True/False."],
              feedback: fb(
                "Yes (with No and Not Given).",
                "Writer's claims → YES/NO/NOT GIVEN. Facts about the world in the text → TRUE/FALSE/NOT GIVEN. Confusing the two families costs every item in the block.",
              ),
              tags: ["strategy", "tfng", "ynng"],
            }),
          ],
          homework: [
            "In your next mock, read every instruction line out loud before answering — mark any item where the rubric changed your answer.",
          ],
        },
        {
          slug: "ielts-strategy-answering",
          title: "Answer selection strategies",
          description: "Elimination, distractor-awareness, educated guessing — and why blanks are always wrong.",
          objectives: [
            "Eliminate MCQ options on evidence, not feeling",
            "Guess with discipline when knowledge runs out",
            "Leave no item blank, ever",
          ],
          minutes: 10,
          blocks: [
            { type: "heading", text: "The no-blank rule" },
            {
              type: "text",
              text: "IELTS has no penalty for wrong answers: a blank scores exactly zero, a guess scores its true probability. In a three-option MCQ, a pure guess scores 33%; after eliminating one distractor, 50%. On the computer-delivered test, use the review screen to sweep every gap in the final minutes. An unanswerable item gets your best-fitting guess — every time, without guilt.",
            },
            {
              type: "table",
              title: "Elimination tests for MCQ options",
              headers: ["Test", "Ask yourself"],
              rows: [
                ["Scope test", "Does the option overstate (all/never/only) beyond the text?"],
                ["Who test", "Is this the OTHER person's view, or an abandoned plan?"],
                ["Paraphrase test", "Is it a true rephrasing, or the passage's words rearranged into a false claim?"],
                ["Extreme test", "Is the tone more certain than the source ('proves' vs 'suggests')?"],
              ],
              caption: "Cross an option out the MOMENT it fails a test — on paper or in your head, never 'at the end'.",
            },
            {
              type: "note",
              title: "Guessing with discipline",
              text: "A trained guess is not random: pick the option whose MEANING survives your paraphrase of the question. If two options remain, choose the one that is a paraphrase rather than the one that echoes the passage's exact words — verbatim options are distractors more often than paraphrased ones.",
            },
            {
              type: "example",
              title: "A worked elimination",
              items: [
                { english: "Question: 'What does the speaker value about the new library?' Options: (A) it copies a famous design (B) it stays open late (C) the reading rooms are quiet. Passage cue: 'unlike most civic buildings, which close at six, this one keeps its lights on until midnight — and the silence up on the top floor is extraordinary'.", note: "(A) fails the paraphrase test (no copying mentioned). (B) is a true paraphrase of 'keeps its lights on until midnight'. (C) echoes the passage's word 'silence' but the speaker values it — keep both (B) and (C)? The question asks what is valued: the cue sentence stresses the late hours with 'unlike most civic buildings', so (B) is the best-supported answer.", domain: "education" },
                { english: "Question: 'What did volunteers report?' Options: (A) severe headaches in all cases (B) mild headaches in some cases (C) no side effects at all. Passage: 'Some participants reported mild headaches, which cleared within a day.' (A) fails the scope test — 'severe' and 'all' turn the passage's hedged claim up to full volume; (C) contradicts it outright; (B) keeps both hedges and matches.", note: "Run the scope test first: distractors are routinely built from the passage's own words with the volume turned up — 'some/mild/may' becomes 'all/severe/proven'.", domain: "health" },
                { english: "Question: 'What is the council's position on the night market?' Options: (A) extend it (B) end it (C) move it. Passage: 'The scheme's original designer, now retired, insists the market has run its course; the council, however, has voted to extend it for two more summers.' The designer's 'run its course' is (B) — the OTHER person's view; 'however' plus 'has voted' marks the council's position as (A).", note: "The who test: passages quote opponents, predecessors and abandoned plans precisely because their views make convincing wrong options — name whose voice the sentence belongs to before matching it.", domain: "social" },
                { english: "Question: 'Why did tourism to the coast grow?' Options: (A) the new airport made access easier (B) a weaker currency made the coast cheaper for overseas visitors. Passage: 'Tourism boomed after the airport opened — though the main driver, economists agree, was the devaluation that made the coast a bargain for foreign travellers.' (A) is the passage's most quotable phrase rearranged into the wrong claim; (B) paraphrases 'devaluation… a bargain' into the actual driver.", note: "The paraphrase test: an option can borrow every one of its words from the passage and still assert the wrong thing — test what the option CLAIMS, not which of its words appear in the passage.", domain: "travel" },
                { english: "Question: 'What does the study claim about screen time?' Options: (A) screen time has been proven to cause sleep loss (B) screen time may be linked to sleep loss. Passage: 'The findings hint at an association between evening screen use and shorter sleep.' (A) fails the extreme test twice — 'proven' outruns 'hint', and 'cause' outruns 'association'; (B) keeps the study's own caution.", note: "The extreme test: an option's certainty has to match the source's — 'proves / cause / always' versus 'hints / may / linked' is the whole distance between a right and a wrong answer.", domain: "technology" },
                { english: "Two options survive elimination. Recording: 'What decided the move, honestly, wasn't the rent — though that helped — it was the commute: two hours a day I just couldn't get back.' Question: 'What was the speaker's main reason for moving?' (A) the rent (B) the daily travel time. (A) is the recording's own word, explicitly demoted by 'wasn't'; (B) paraphrases 'two hours a day I couldn't get back' — and when two survive, the paraphrase beats the echo.", note: "The trained-guess habit in one line: prefer the option whose MEANING survives your paraphrase of the question over the one that echoes the source's exact words.", domain: "home" },
              ],
            },
            {
              type: "mistakes",
              title: "Selection errors that cost items you had already solved",
              items: [
                { wrong: "Leaving an item blank because a guess might be wrong.", right: "Enter your best-fitting guess — every item, every time.", reason: "There is no penalty for wrong answers: a blank scores exactly zero, and after one elimination a guess on a four-option item is worth a third of a mark you are otherwise donating back." },
                { wrong: "Picking an option because its words appear word-for-word in the passage.", right: "Pick the option whose meaning matches the passage's claim.", reason: "Verbatim echoes are distractors more often than paraphrases: the paraphrase test convicts options that borrow the passage's vocabulary to assert something it does not." },
                { wrong: "Eliminating an option because 'it sounds wrong'.", right: "Eliminate only when the option fails a named test — scope, who, paraphrase or tone.", reason: "Feeling-based elimination deletes right answers you happen to dislike; evidence-based elimination deletes wrong answers the passage convicts — same effort, different casualties." },
                { wrong: "In the final sweep, changing a marked answer on a vague hunch.", right: "Change an answer only when you can name the reason — a misread number, a missed correction, a broken word limit.", reason: "Sweep changes are for errors you can point at; hunch-swapping converts solved items into lost ones, which is the exact opposite of what the sweep is for." },
              ],
            },
            {
              type: "summary",
              points: [
                "The no-blank rule: IELTS has no wrong-answer penalty — a blank scores zero, a guess scores its true probability.",
                "Eliminate on evidence with the four tests: scope, who, paraphrase and tone — cross an option out the moment it fails.",
                "When two options remain, prefer the paraphrase over the verbatim echo: word-for-word matches are distractors more often than rephrasings.",
                "A trained guess uses any signal you have; a random letter is the last resort, not the default.",
                "Use the review screen's final sweep to convert every remaining blank into a best-fit guess.",
              ],
            },
          ],
          questions: [
            ex({
              type: "mcq",
              difficulty: "medium",
              skill: "reading",
              prompt: "You have 20 seconds left and two unknown items. The correct behaviour is…",
              hints: ["What does a blank score?"],
              options: [
                { id: "a", text: "Leave them blank — a wrong guess might look careless." },
                { id: "b", text: "Enter your best-fitting guess for each; blanks score zero and there is no penalty for wrong answers." },
                { id: "c", text: "Enter the same letter for both and hope." },
              ],
              correctOptionId: "b",
              feedback: fb(
                "Guess both, best-fit first.",
                "The scoring table is flat: wrong costs nothing, blank costs the item. 'Same letter for both' is worse than best-fit guessing only when you have any signal at all — use the paraphrase test.",
              ),
              tags: ["strategy", "guessing"],
            }),
          ],
          homework: ["In your next mock, mark every item you guessed; after grading, check how many guesses scored."],
        },
        {
          slug: "ielts-strategy-mistakes",
          title: "Avoiding common mistakes",
          description: "The ten errors that cost the most marks — and their one-line fixes.",
          objectives: [
            "Recognise the classic error families",
            "Attach a fix to each",
            "Run a personal pre-submit checklist",
          ],
          minutes: 12,
          blocks: [
            { type: "heading", text: "The top ten" },
            {
              type: "table",
              title: "Mistake → fix",
              headers: ["#", "Mistake", "Fix"],
              rows: [
                ["1", "Exceeding word limits", "Count words before confirming; cut articles first"],
                ["2", "Answering a later-corrected item with the first version", "Take the speaker's FINAL position; the latest word wins"],
                ["3", "True/Yes family mix-ups", "Read 'claims of the writer' → Yes/No/Not Given"],
                ["4", "Polishing Task 1 past 20 minutes", "Hard cap at 20:00; switch mid-sentence if needed"],
                ["5", "Writing the passage's words as an MCQ answer because they sound right", "Test the MEANING, not the echo"],
                ["6", "Singular/plural mismatches in completion", "Check every noun's number in the final sweep"],
                ["7", "Missing a bullet in Task 1 letters/reports", "Checklist pass over the prompt before submitting"],
                ["8", "Position wobble in Task 2", "One position, stated in the intro, defended throughout"],
                ["9", "Freezing on a hard item and losing the next three", "Mark, move, return — the recording will not wait"],
                ["10", "No final two-minute sweep", "Reserve it in every section; fill, fix numbers, verify limits"],
              ],
              caption: "Print this table. Score your next mock against it: which three did YOU commit?",
            },
            {
              type: "note",
              title: "Turn the table into a checklist",
              text: "After every mock, open this lesson, tick the mistakes you made, and write the fix into your error log. Ten rows, three passes per month — most candidates discover that 70% of their lost marks come from just two rows.",
            },
            {
              type: "example",
              title: "One mock, three rows, one cause",
              items: [
                { english: "A candidate's report: two word-limit zeroes (#1), one True/Yes mix-up (#3), and noun-number slips in three completion items (#6). Surface pattern: three different mistakes. Underlying cause: no final two-minute sweep (#10) — a sweep would have caught the limits and the noun numbers.", note: "Fix the row that causes the others: reserving the sweep repairs three rows at once.", domain: "education" },
                { english: "Recording: 'The fitness class runs on Thursday — sorry, let me correct that — Wednesday, starting at six.' Item: 'Class day: ___'. The weak log entry reads 'wrote Thursday; wrong'. The behavioural entry reads: 'Thursday = first mention; 'sorry, let me correct that' = override flag; FIX: on hearing an apology or 'actually', overwrite the answer immediately.'", note: "Mistake #2 is not a hearing problem, it is a flag problem — corrections are ANNOUNCED ('sorry', 'actually', 'well, no'), so the log entry should name the flag you ignored, not the word you misheard.", domain: "sport" },
                { english: "Form item: 'Number of guests at the dinner: ___'. Recording: 'we were eight in total'. The candidate writes 'eight guest': the number is right, the plural is missing, the item scores zero. Log entry: 'didn't SEE — FIX: every completion noun gets a number check against the sentence around it, in the final sweep.'", note: "Mistake #6 lives in the last letter of the answer — the sweep habit repairs it at zero cost in knowledge, which is why it earns a whole row of the table.", domain: "social" },
                { english: "Report extract: Task 1 finished at 26 minutes, Task 2 at 178 words, Task 2 criterion comment 'position clear but development incomplete'. Sorted honestly: didn't FINISH. The fix is not 'write faster' but a rule — hard cap at 20:00 on Task 1, switch mid-sentence if needed — because a finished Task 2 earns more than a polished Task 1.", note: "Mistake #4 is repaired by timed practice in section mocks, not by language study: the bucket names the medicine, and this bucket's medicine is a clock.", domain: "education" },
                { english: "MCQ: 'Who funded the gallery's new wing?' Options: (A) the council (B) a private donor (C) ticket sales. Passage: 'The wing was paid for by the council — not, as the plaques suggest, by the private donor whose name stands over the door.' The candidate picks (B), the famous name. Log entry: 'didn't SEE — option echoed the passage's most prominent words; FIX: when an option repeats the passage verbatim, re-read what the sentence actually asserts.'", note: "Mistake #5 is manufactured: test writers park the passage's most quotable phrase inside the wrong option precisely to collect candidates who match words instead of meaning.", domain: "travel" },
                { english: "Essay extract — introduction: 'I largely agree that remote work benefits companies.' Conclusion: 'Both views carry weight, and it is hard to give a final answer.' Task Response comment: 'position not maintained'. Log entry: 'didn't SEE — my conclusion abandoned my introduction; FIX: the conclusion restates the introduction's position, even after a concession paragraph.'", note: "Mistake #8 is invisible while you write it — the pre-submit checklist question 'does my last paragraph agree with my first?' catches it in ten seconds.", domain: "work" },
              ],
            },
            {
              type: "mistakes",
              title: "Meta-mistakes: how the review of mistakes itself goes wrong",
              items: [
                { wrong: "Logging the cause of every lost mark as 'careless'.", right: "Sort each error into didn't KNOW / didn't SEE / didn't FINISH before writing any fix.", reason: "'Careless' names no behaviour you can change; the three buckets each point at a different medicine — language study, technique drills, timed practice — and the wrong medicine is the classic wasted week." },
                { wrong: "Re-reading the whole mock transcript cover to cover the evening after the test.", right: "Run the five-step review within 24 hours: report cold, sort, name the pattern, one fix, booked re-test.", reason: "Unsorted re-reading re-samples the same errors; the pattern step — 'what do five of these six errors share?' — is what converts three hours of mock into one sentence of next week's plan." },
                { wrong: "Re-testing a failed question type by sitting another full mock immediately.", right: "Drill the failed type within the week, then re-test THAT type in a section mock.", reason: "Another full mock burns three hours to re-prove the weakness exists; the drill targets the mechanism and the section re-test verifies the repair at a fraction of the cost." },
                { wrong: "Skipping the review after a mock that felt good.", right: "Review every mock — especially to audit the marks you gained by guessing.", reason: "Marks won by guessing are unowned skills: only the review separates what you can reproduce on demand from what the exam lent you, and test day does not lend." },
              ],
            },
            {
              type: "summary",
              points: [
                "Ten error families cause most lost marks: limits, corrections, label families, timing, echo-answers, noun numbers, missed bullets, position wobble, freezing, and no final sweep.",
                "The speaker's FINAL position wins — corrections ('well, actually…') override the first claim.",
                "The final two-minute sweep is the highest-leverage habit on the list: it repairs limits, numbers and blanks in one pass.",
                "Score every mock against the ten-row table: most candidates find 70% of lost marks come from just two rows.",
                "Tick your rows, write the fixes into your error log, and re-test the same question type within a week.",
              ],
            },
          ],
          questions: [
            ex({
              type: "mcq",
              difficulty: "medium",
              skill: "listening",
              prompt: "The recording says: 'The tour runs daily — well, weekdays only, actually; weekends we run private groups instead.' The question asks 'How often does the public tour run?' What do you answer?",
              hints: ["Which statement is the final position?"],
              options: [
                { id: "a", text: "Daily — it was said first and clearly." },
                { id: "b", text: "Weekdays only — the correction overrides the first claim." },
                { id: "c", text: "Weekends only, because private groups matter more." },
              ],
              correctOptionId: "b",
              feedback: fb(
                "Weekdays only.",
                "'Actually' flags the correction (mistake #2). The latest qualified claim is the answer; the weekend sentence is about a different service (a distractor).",
              ),
              tags: ["strategy", "mistakes", "corrections"],
            }),
          ],
          homework: ["Score your last mock against the ten-row table; write your top two rows into your error log."],
        },
        {
          slug: "ielts-strategy-difficult",
          title: "Handling difficult questions",
          description: "Unknown words, impossible items, and the mid-test panic protocol.",
          objectives: [
            "Work around unknown vocabulary using structure",
            "Apply the mark-move-return loop",
            "Reset after a bad section instead of cascading",
          ],
          minutes: 10,
          blocks: [
            { type: "heading", text: "Unknown words: decode, do not surrender" },
            {
              type: "text",
              text: "In Reading, an unknown word is usually decodable from its parts: prefix (mis-, over-, under-), suffix (-tion, -ive, -less) and the sentence's grammar around it ('a ___ of complaints' must be a countable noun). In Listening, unknown words arrive with intonation and context — the sentence around them usually defines them. If a word stays opaque, its ROLE in the sentence is often enough to answer the question.",
            },
            { type: "heading", text: "The mark-move-return loop" },
            {
              type: "table",
              title: "Three steps, ten seconds each",
              headers: ["Step", "Action"],
              rows: [
                ["MARK", "Flag the item (review screen) and write your best guess now — never leave it empty at this point"],
                ["MOVE", "Next question immediately; in Listening the recording has already moved — so must you"],
                ["RETURN", "In the final sweep, revisit flags with fresh eyes; change the answer only with a reason"],
              ],
              caption: "The loop protects the three items AFTER the hard one, which are usually easy.",
            },
            {
              type: "warning",
              title: "Panic protocol",
              text: "If a section collapses (you lost your place, three gaps in a row): stop for one breath, read the next question's content words, wait for THAT idea in the audio, and re-anchor there. One lost item is a mark; three lost minutes is a section. In Reading/Writing, the same reset is: look at the clock, re-budget, continue.",
            },
            {
              type: "example",
              title: "Decoding an unknown word in place",
              items: [
                { english: "Passage: 'The scheme was denounced as regressive, since it charged the same fee to every household regardless of income.' Question: 'Critics said the fee system was…' You do not know 'regressive'.", note: "The sentence does the decoding: 'since' gives the cause — same fee for rich and poor — so the critics' complaint is that it hits poorer households harder. Answer 'unfair to poorer households' without ever translating 'regressive'.", domain: "home" },
                { english: "Passage: 'Officials admitted the report overstated the health risks.' You do not know 'overstated'. The parts do the work: 'over-' means too much, 'stated' means claimed — the officials are admitting the report claimed more danger than the evidence supports, so an item asking whether the report's figures were exaggerated now answers itself.", note: "Decode from parts first: over- / under- / mis- name direction and degree — 'overstated', 'underreported' and 'misquoted' become answerable claims without a dictionary.", domain: "health" },
                { english: "Listening item: 'HR received a ___ of complaints about the new roster.' You do not know the answer word, but the slot defines its shape: after 'a' and before 'of complaints' it must be a singular countable noun — almost certainly a quantity metaphor. When the recording says 'a flood of complaints', the word you had half-predicted is suddenly easy to catch.", note: "The gap's grammar is a prediction machine: part of speech plus the pattern ('a ___ of X') narrows the candidates enough that the recording only has to confirm the word, not teach it.", domain: "work" },
                { english: "Recording: 'We ended up in a small pensión — a family-run guesthouse, really — two streets from the port.' You do not know 'pensión', and you do not need to: the speaker glosses it in place. Item: 'Type of accommodation: ___' answers 'guesthouse' from the definition, not from the unknown word.", note: "In Listening, unknown words arrive with their own gloss more often than not — apposition ('— a …, really —') and 'which is' are the two most common defining frames; keep listening through them.", domain: "travel" },
                { english: "Reading, item 17 of 40: the sentence holding the answer is impenetrable. The loop, run correctly: MARK — flag the item and enter your best guess from the surrounding sentences; MOVE — item 18 is a vocabulary match you can do in twenty seconds, and you do it now; RETURN — the sweep gives item 17 thirty fresh seconds and a rule: change the answer only with a reason.", note: "The loop is sequencing, not surrender: item 18 was worth exactly as much as item 17, and the candidate who fights 17 to the death loses both.", domain: "education" },
                { english: "Listening Part 3: you lose your place and three gaps pass unanswered. The protocol, run correctly: one breath, not three; read the NEXT question's content words ('leisure centre — pool closure — reopening date'); wait for that idea in the audio; re-anchor there and take the remaining items. Cost of the protocol: the three lost items. Cost of not running it: the rest of the section.", note: "One lost item is a mark; three lost minutes is a section — the panic protocol trades a small certain loss for the prevention of a large one.", domain: "sport" },
              ],
            },
            {
              type: "mistakes",
              title: "How one hard item becomes a lost section",
              items: [
                { wrong: "Stopping at the unknown word and re-reading its sentence until the clock burns.", right: "Decode from parts and grammar; if it stays opaque, use its ROLE in the sentence and move on.", reason: "Unknown single words almost never decide an item — but a word you fight for three minutes decides the five items after it, which is the real trade." },
                { wrong: "Freezing on the gap you just missed, then missing the next two while you grieve it.", right: "Mark, move, return — flag and guess now, next item immediately, revisit in the sweep.", reason: "The loop exists to protect the items AFTER the hard one, which are usually easy: one abandoned gap costs a mark, an abandoned minute costs three." },
                { wrong: "After losing your place, guessing forward at random to 'catch up' with the recording.", right: "Re-anchor: one breath, read the next question's content words, wait for that idea, reconnect there.", reason: "Unanchored guessing samples at random; the panic protocol reconnects you to the audio at a known point and caps the loss at the items already gone." },
                { wrong: "Translating an unknown word in your head mid-sentence while the recording continues.", right: "Keep listening — the sentence around the word usually defines it.", reason: "The recording runs once: the seconds spent translating are the exact seconds the definition is spoken in, and the definition is always worth more than the translation." },
              ],
            },
            {
              type: "summary",
              points: [
                "Unknown single words almost never decide an item — unknown SENTENCES do, and only if you let them.",
                "Decode from parts (prefix/suffix) and from the grammar around the gap; the word's ROLE is often enough to answer.",
                "The mark-move-return loop: flag and guess now, move immediately, return in the sweep with fresh eyes.",
                "The loop's real job is protecting the three items AFTER the hard one, which are usually easy.",
                "Panic protocol: one breath, read the next question's content words, re-anchor on that idea — one lost item is a mark, three lost minutes is a section.",
              ],
            },
          ],
          questions: [
            ex({
              type: "mcq",
              difficulty: "medium",
              skill: "reading",
              prompt: "The passage contains: 'The policy was widely criticised for its deleterious effects on small suppliers.' You do not know 'deleterious'. What is the best move?",
              hints: ["What does the surrounding criticism tell you?"],
              options: [
                { id: "a", text: "Skip every question that involves the word." },
                { id: "b", text: "Infer from context: 'widely criticised for its ___ effects' → the effects were harmful; answer accordingly." },
                { id: "c", text: "Panic and reread the whole passage." },
              ],
              correctOptionId: "b",
              feedback: fb(
                "Infer harmful from context.",
                "The sentence's stance (criticised for) plus the noun pattern does the decoding. Unknown single words almost never decide an item — unknown SENTENCES do, and only if you let them.",
              ),
              tags: ["strategy", "vocabulary", "inference"],
            }),
          ],
          homework: ["Find one hard item in your last mock and write the three-step loop as you would have run it."],
        },
        {
          slug: "ielts-strategy-review",
          title: "Review strategies",
          description: "The loop that turns every mock into the next half band.",
          objectives: [
            "Run the five-step post-mock review",
            "Keep an error log that actually changes behaviour",
            "Space your revision instead of stacking it",
          ],
          minutes: 12,
          blocks: [
            { type: "heading", text: "The five-step post-mock review" },
            {
              type: "table",
              title: "Do this within 24 hours of every mock",
              headers: ["Step", "Action"],
              rows: [
                ["1 — Read the report cold", "Section bands, criterion comments, skill gaps — before defending yourself"],
                ["2 — Sort every error", "Three buckets: didn't KNOW (language) / didn't SEE (technique) / didn't FINISH (time)"],
                ["3 — Name the pattern", "If three errors share one cause, that cause is your next study block"],
                ["4 — Write one fix", "One sentence per error, actionable this week ('check noun numbers in the final sweep')"],
                ["5 — Book the re-test", "Re-attempt the same question TYPE within a week, not the whole mock immediately"],
              ],
              caption: "A mock without a review is just an expensive quiz.",
            },
            {
              type: "note",
              title: "The error log",
              text: "Keep one page: date, section, what I wrote, what was correct, the bucket, the fix. Review the log — not the mock — before your next test. EnglishPath's mock reports give you the material; the log makes it behavioural.",
            },
            {
              type: "warning",
              title: "Spacing beats stacking",
              text: "Re-drilling the same question type five times in one evening feels productive and transfers almost nothing. Space the re-test across days; the AI Tutor can schedule a follow-up drill on your gap for you.",
            },
            {
              type: "example",
              title: "The five steps on a real report",
              items: [
                { english: "Report: Listening 6.5, Reading 6.0, all four number/spelling errors in Part 1, one True/Yes mix-up. Step 2 sorting: number spelling = didn't KNOW; label mix-up = didn't SEE; nothing = didn't FINISH. Step 3 pattern: five of six errors are Part 1 form-completion mechanics. Step 4 fix: 'drill numbers-and-spelling three times this week, then one Part 1 section mock'. Step 5: re-test that drill family in seven days.", note: "The review converts a three-hour mock into one sentence of next week's plan — that is its entire purpose.", domain: "education" },
                { english: "Error-log page: 'Listening Part 1, item 3 — wrote accomodation; key accommodation.' Bucket: didn't KNOW — the recording was perfectly clear; the spelling was not. Fix, one sentence: 'Drill the double-letter spellings (accommodation, necessary, tomorrow) three times this week; re-test in a Part 1 section mock on Friday.'", note: "A KNOW error is a missing language fact, and its medicine is exposure and drilling — no technique fix will spell the word for you.", domain: "travel" },
                { english: "Error-log page: 'Listening Part 2, item 9 — wrote Friday; key Saturday. Recording said Friday first, then 'actually, let's say Saturday'.' Bucket: didn't SEE — the English was inside you; the correction flag was not. Fix: 'On hearing 'actually' or 'sorry', overwrite the previous answer immediately — the latest claim wins.'", note: "SEE errors are technique errors: drills fix them, vocabulary lists do not — which is why the bucket comes before the fix in every log line.", domain: "social" },
                { english: "Error-log page: 'Writing Task 2 — 181 words, one-sentence conclusion, Task Response comment: underdeveloped.' Bucket: didn't FINISH (Task 1 took 32 minutes). Fix: 'Three section mocks this fortnight with a hard 20:00 cap on Task 1.' Note what the fix does NOT contain: no grammar, no vocabulary — the bucket named the medicine, and this bucket's medicine is a clock.", note: "FINISH errors are solved by timed practice alone; treating them with language study is the wasted week this lesson warns about, in its purest form.", domain: "education" },
                { english: "Three log lines from one mock: (1) 'wrote three years instead of three-year course' (2) 'missed the plural on visits' (3) 'summary answer copied as farm; slot needed farms'. Different items, one pattern: noun-number checking. Step 3 output: 'Next study block = one ten-minute noun-number drill; sweep rule = every completion noun gets a number check.'", note: "Individually the three errors look like bad luck; named as one pattern they become one fix — which is why the log is kept as short lines, not paragraphs.", domain: "work" },
                { english: "The re-test schedule for a failed True/False/Not Given block: drill the type once on Monday, once on Thursday, then re-test the TYPE — not the whole mock — in the following week's section mock. The temptation is five drills tonight; tonight's fifth drill feels the most productive of all, and transfers the least.", note: "Spacing beats stacking: the same practice sets spread across days outperform the same sets stacked in one evening — the schedule, not the volume, is what changes.", domain: "education" },
              ],
            },
            {
              type: "mistakes",
              title: "Review errors that keep mocks expensive",
              items: [
                { wrong: "Opening the review by defending yourself: 'I knew that one — I just misread it.'", right: "Read the report cold first — bands, criterion comments, gaps — then talk.", reason: "The report is data, not a verdict: 'I knew it' is really a bucket claim (KNOW versus SEE), and step 2 can only sort it honestly once step 1 has been read without pleading." },
                { wrong: "Treating a didn't-FINISH error with vocabulary study.", right: "Match the medicine to the bucket: FINISH → timed practice, SEE → technique drills, KNOW → language study.", reason: "The buckets exist because their medicines differ: a time error drilled with flashcards returns next mock unchanged, which is the wasted week in its purest form." },
                { wrong: "Stacking: re-drilling the failed question type five times in one evening.", right: "Space the re-test across days and re-test the type within the week.", reason: "Stacked drilling feels productive and transfers almost nothing — spacing is what turns practice into behaviour you can reproduce under the clock." },
                { wrong: "Reviewing the mock, then re-sitting the SAME full mock to fix the score.", right: "Re-test the failed question TYPE in fresh material within a week.", reason: "A re-sat mock measures memory, not repair; only fresh material of the same type shows whether the fix actually stuck." },
              ],
            },
            {
              type: "summary",
              points: [
                "A mock without a review is just an expensive quiz — the review within 24 hours is where the band moves.",
                "The five steps: read the report cold, sort every error into KNOW/SEE/FINISH, name the pattern, write one actionable fix, book the type re-test.",
                "Three error buckets need three different medicines: language study, technique drills, timed practice.",
                "The error log (date, section, what I wrote, what was correct, bucket, fix) is reviewed before every test — not the mock itself.",
                "Spacing beats stacking: re-test the question type across days, never five times in one evening.",
              ],
            },
          ],
          questions: [
            ex({
              type: "match",
              difficulty: "medium",
              skill: "reading",
              prompt: "Sort each error into its bucket.",
              leftItems: [
                { id: "l1", text: "You wrote 'accomodation' — spelling you did not know you lacked" },
                { id: "l2", text: "You answered the abandoned alternative, not the final correction" },
                { id: "l3", text: "Task 2 was 180 words because Task 1 ate 30 minutes" },
              ],
              rightItems: [
                { id: "r1", text: "didn't KNOW (language)" },
                { id: "r2", text: "didn't SEE (technique)" },
                { id: "r3", text: "didn't FINISH (time)" },
              ],
              pairs: [
                { leftId: "l1", rightId: "r1" },
                { leftId: "l2", rightId: "r2" },
                { leftId: "l3", rightId: "r3" },
              ],
              hints: ["Which bucket is about knowledge, which about habits, which about the clock?"],
              feedback: fb(
                "Spelling → KNOW; abandoned alternative → SEE (technique); 180-word Task 2 → FINISH (time).",
                "Each bucket has a different medicine: language study, technique drills, timed practice. Treating a time error with more vocabulary study is the classic wasted week.",
              ),
              tags: ["strategy", "review", "buckets"],
            }),
          ],
          homework: ["Run the five-step review on your most recent mock tonight, and write your first error-log page."],
        },
      ],
    },
  ],
};

/**
 * Module 8 orientation (one lesson; the mock library itself is the module).
 */
export const module8Mocks: ModuleSpec = {
  slug: "module-8-mocks",
  title: "Module 8 — IELTS Mock Examinations",
  description:
    "How to use the EnglishPath mock library: full simulations, section mocks and question-type drills, in timed and untimed modes, with band-scored reports and performance tracking.",
  units: [
    {
      slug: "mock-system",
      title: "Using the mock library",
      description: "One lesson, then a hundred hours of practice.",
      lessons: [
        {
          slug: "ielts-mocks-guide",
          title: "The mock system: modes, kinds and cadence",
          description: "What each mock kind trains, when to use timed vs untimed, and the cadence that peaks on test day.",
          objectives: [
            "Choose the right mock kind for each study phase",
            "Use timed and untimed modes for what each is good at",
            "Follow the accelerating cadence to your exam date",
          ],
          minutes: 12,
          blocks: [
            { type: "heading", text: "Three kinds, three jobs" },
            {
              type: "table",
              title: "The library",
              headers: ["Kind", "Contains", "Best for"],
              rows: [
                ["Drill", "One question type, 4–10 items", "Technique repair the day after a mock exposes it"],
                ["Section mock", "One full section at official timing", "Time-budget training for a single paper"],
                ["Full mock", "All four sections in one sitting", "Stamina, switching costs, test-day rehearsal"],
              ],
              caption: "Academic and General Training have separate banks for Reading and Writing; Listening and Speaking mocks exist in both variants' libraries.",
            },
            { type: "heading", text: "Two modes, two purposes" },
            {
              type: "table",
              title: "Timed vs untimed",
              headers: ["Mode", "What it is for", "What it is NOT for"],
              rows: [
                ["Untimed (practice)", "Studying the questions; reading feedback; learning question types", "Predicting your band — untimed scores are labelled and excluded from exam-condition estimates"],
                ["Timed (exam)", "Building pace, budgets and test-day stamina", "Learning new question types (no time to study them)"],
              ],
              caption: "Every report is labelled with its mode. Your dashboard prefers timed evidence when estimating your bands.",
            },
            {
              type: "grammar-rule",
              title: "The cadence rule",
              rule: "Start with one diagnostic full mock (untimed, then timed a few days later). Run drills and section mocks through the middle of your preparation. In the final third, sit a full timed mock roughly weekly, accelerating to twice in the last ten days — always followed within 24 hours by the five-step review.",
              explanation:
                "EnglishPath's study plan schedules this automatically from your exam date and daily minutes: early mocks are spaced out, final-month mocks crowd in.",
              examples: [
                { english: "8 weeks out: 1 full + 2 section mocks. 4 weeks out: 1 full + drills per weakness. 10 days out: 2 fulls, 48h apart.", translation: "A 8 semanas: 1 mock completo; a 4 semanas: 1 completo + drills; a 10 días: 2 completos con 48 h de diferencia." },
              ],
              exceptions: ["Never sit two full mocks back to back on the same day — fatigue mocks the wrong behaviour."],
            },
            {
              type: "note",
              title: "How scoring works here",
              text: "Objective items (Listening/Reading, and completion questions) are marked instantly with the practice raw→band tables. Writing and Speaking are graded against the public band descriptors — AI-assisted with teacher review where available — and the report shows per-criterion feedback exactly like the Module 6 ladder.",
            },
            {
              type: "warning",
              title: "All questions are original",
              text: "Every item in the library is original EnglishPath practice material written in the style of the exam. It is not, and never claims to be, an official IELTS paper — and no copyrighted book or past-paper material is reproduced anywhere on this platform.",
            },
            {
              type: "example",
              title: "One study month, correctly assembled",
              items: [
                { english: "Week 1: untimed full mock (diagnostic) + five-step review. Weeks 2–3: two section mocks on the weakest section, one drill per exposed question type, lessons in between. Week 4: timed full mock, review, and a re-test of every question type that failed in week 1.", note: "Diagnose → repair → re-test: the cadence rule in miniature. Notice no week contains two full mocks before the final ten days.", domain: "education" },
                { english: "Report extract: Listening 7.0 overall, but all four map-labelling items wrong. The wrong next move: another full Listening mock 'to see if it was a bad day' — three hours that re-sample everything. The right move: the map-labelling drill (one question type, a handful of items) tomorrow, then a map item inside the next section mock.", note: "Drills repair technique; full mocks re-sample it — the library's three kinds exist so the smallest tool can answer the smallest problem at the smallest cost.", domain: "travel" },
                { english: "You have never met flow-chart completion before. Sitting it first in TIMED mode is a category error: the clock leaves no room to study the question's shape, so you measure panic, not ability. The sequence that works: untimed attempt with the feedback open (learn the type), then the same type timed inside a section mock (learn the pace).", note: "Timed mode trains pace, untimed mode trains understanding — using each for the other's job fails at both, which is why every report is labelled with its mode.", domain: "education" },
                { english: "Exam booked for twelve weeks' time, around a full-time job. The cadence assembled from the rule: now — one diagnostic full mock, untimed; weeks 1–8 — section mocks on the two weakest papers and a drill on every exposed question type; weeks 9–11 — one timed full per week, each followed within 24 hours by the five-step review; final ten days — two fulls, 48 hours apart, then rest.", note: "The cadence is a shape, not a menu: diagnose early, repair in the middle, rehearse at the end — and no week before the final third contains two full mocks.", domain: "work" },
                { english: "A candidate sits the full mock split across two evenings: Listening tonight, Reading and Writing tomorrow. The report is labelled timed, but the full mock's main product — stamina, the switching costs of the whole sitting — was never trained. The fix: one uninterrupted block, papers in order, review within 24 hours.", note: "Full mocks exist to rehearse what section mocks cannot: the fatigue and switching costs of the whole sitting — split it, and you have three section mocks wearing one label.", domain: "health" },
                { english: "Two reports on the dashboard: an untimed Reading practice at 7.5, and last week's timed full mock at 6.5 on the same section. Deciding 'my reading is fine' from the untimed score is reading the dashboard upside down — untimed scores are labelled and excluded from exam-condition estimates precisely because unlimited minutes are not test conditions.", note: "Untimed scores diagnose, timed scores predict: the dashboard prefers timed evidence for band estimates, and so should every study decision you make from a report.", domain: "education" },
              ],
            },
            {
              type: "mistakes",
              title: "Mock-cycle mistakes that waste the library",
              items: [
                { wrong: "Sitting two full mocks back to back on the same day to 'get used to the fatigue'.", right: "One full mock per sitting; two fulls only in the final ten days, 48 hours apart.", reason: "Fatigue mocks the wrong behaviour: the second same-day mock measures exhaustion, not English — the cadence rule caps fulls at one per sitting for exactly this reason." },
                { wrong: "Feeding untimed practice scores into your band estimate.", right: "Estimate from timed evidence; use untimed scores to study question types.", reason: "Untimed scores are labelled and excluded from exam-condition estimates for a reason: unlimited minutes are not test conditions, and planning around them overstates what the clock will allow." },
                { wrong: "Answering an exposed weakness with another full mock.", right: "Drill the exposed question type, then re-test it in a section mock.", reason: "A full mock re-samples the weakness at three hours' cost; the drill targets the mechanism and the section mock verifies the repair at a fraction of the price." },
                { wrong: "Skipping the five-step review after a mock that 'went fine'.", right: "Every mock gets the review within 24 hours — the good ones included.", reason: "A mock without a review is an expensive quiz: marks won by guessing are invisible until the review sorts them into buckets, and unowned marks do not reproduce on test day." },
              ],
            },
            {
              type: "summary",
              points: [
                "Three mock kinds, three jobs: drills repair technique, section mocks train a paper's time budget, full mocks build stamina and test-day rehearsal.",
                "Untimed mode is for studying question types; timed mode is for pace and stamina — untimed scores are labelled and excluded from exam-condition estimates.",
                "The cadence rule: one diagnostic full mock, drills and section mocks through the middle, weekly full mocks in the final third, twice in the last ten days.",
                "Every mock is followed within 24 hours by the five-step review — a mock without a review is an expensive quiz.",
                "All material is original EnglishPath practice content, honestly labelled — never an official paper, never reproduced copyrighted material.",
              ],
            },
          ],
          questions: [
            ex({
              type: "mcq",
              difficulty: "medium",
              skill: "reading",
              prompt: "Your mock report shows Listening 6.5 but every wrong item was a numbers/spelling item. What is the correct next action?",
              hints: ["Match the fix to the bucket."],
              options: [
                { id: "a", text: "Sit another full mock immediately." },
                { id: "b", text: "Run the numbers-and-spelling drill, then re-test that question type in a section mock." },
                { id: "c", text: "Study grammar for a week." },
              ],
              correctOptionId: "b",
              feedback: fb(
                "Drill the exposed weakness, then re-test it.",
                "Diagnose → technique → re-test. Another full mock would just re-sample the same weakness and burn three hours.",
              ),
              tags: ["mocks", "cadence"],
            }),
            ex({
              type: "mcq",
              difficulty: "easy",
              skill: "reading",
              prompt: "Which mode builds test-day stamina?",
              hints: ["Stamina needs the clock."],
              options: [
                { id: "a", text: "Untimed practice with the questions open." },
                { id: "b", text: "Full mocks in timed mode, full sitting, followed by the review." },
                { id: "c", text: "Reading the feedback without re-testing." },
              ],
              correctOptionId: "b",
              feedback: fb(
                "Full timed mocks.",
                "Stamina is a timed, full-length behaviour. Untimed mode is for studying; it can never train pace.",
              ),
              tags: ["mocks", "modes"],
            }),
          ],
          homework: [
            "Open the mock library and find: one drill for your weakest question type, one section mock, and both full mocks for your variant.",
            "Book your diagnostic: sit a full mock untimed this week, timed next week.",
          ],
        },
      ],
    },
  ],
};
