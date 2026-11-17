/**
 * GT Writing Task 1 — the letter, part one (letters batch A).
 *
 * The three registers and the first three purposes: formal, semi-formal
 * and informal letters, then complaints, requests and invitations. Each
 * lesson runs the eight-component structure — the register or purpose
 * defined, the situation read, the skeleton built, the language shelf
 * stocked, the worked model letter taken apart, why the model works, the
 * trap catalogue, and a second situation planned from scratch — and every
 * worked model is a complete letter at exam length.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const gwritingLettersLessonsA: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-formal",
    title: "Formal letters",
    description:
      "The register of institutions: writing to a reader you have never met. The two greeting-and-sign-off pairs, the impersonal opening, the fixed phrases that carry requests and unwelcome news, and a straight ban on contractions — closed with a complete model letter to a festival office.",
    objectives: [
      "choose the greeting-and-sign-off pair that matches the recipient before any other sentence exists",
      "open with an impersonal purpose statement — I am writing to... — never a self-introduction",
      "deploy the fixed formal phrases as whole chunks, reproduced exactly as printed",
      "keep the letter contraction-free and address-free while still sounding human",
    ],
    minutes: 16,
    blocks: [
      {
        type: "lesson-intro",
        text: "Formal letters travel to readers you have never met: a company's customer care desk, a council office, a festival volunteer team with no name attached. This is the most rule-bound of the three registers — two legal greeting-and-sign-off pairs, a shelf of fixed phrases, and a straight ban on contractions — which makes it the easiest to train and the easiest to check. The lesson installs the rules, walks a complete letter to a festival office, and finishes with a second situation planned from scratch.",
        beforeYouStart: [
          "You can find the three ingredients of a GT Task 1 prompt: the situation, the recipient and the bullet points.",
          "You know the register is chosen while reading the prompt, never repaired afterwards.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "General Training Writing Task 1 — formal letters go to offices, companies and institutions with no named reader"],
          ["Task & question types", "One prompt: a situation, three bullet points, a recipient type; at least 150 words in about 20 minutes"],
          ["What is assessed", "Tone consistency — greeting, vocabulary and sign-off must agree — with full bullet coverage close behind"],
          ["Why this matters", "A mixed pair such as 'Dear Sir or Madam' closed with 'Best wishes' reads as an error within seconds, and the trained pairs are free marks on every formal prompt"],
        ],
      },
      { type: "heading", text: "Component 1 — The formal register defined" },
      {
        type: "text",
        text: "Formal is the register of distance. You use it whenever the reader is unknown — a head office, a lost-property office, a newspaper — or known only as a name on a letterhead. Two greeting-and-sign-off pairs cover every case. When the prompt gives no name, write 'Dear Sir or Madam' and close 'Yours faithfully', signing your full name underneath. When the prompt names a person you have never met — 'Write to the manager, Ms Marchetti' — greet 'Dear Ms Marchetti' and close 'Yours sincerely'. Crossing the wires between the two pairs is the most visible error in General Training Task 1, and it costs nothing to avoid: the pair is settled before the first sentence exists. Two further rules complete the frame. No addresses: the exam never asks for them, and copying a textbook envelope only spends the clock. And no contractions anywhere — 'I am writing', never 'I'm writing' — because every shortened form whispers intimacy, and intimacy is the one thing this register refuses.",
      },
      { type: "heading", text: "Component 2 — Reading the situation" },
      {
        type: "steps",
        title: "The three questions, in order",
        intro: "Formal or not, the prompt is read the same way: recipient, purpose, bullets.",
        steps: [
          { title: "Step 1: Who is on the envelope?", text: "The recipient decides the register before any vocabulary is chosen. A head office with no name anywhere takes 'Dear Sir or Madam'; a named stranger takes 'Dear Ms' plus her surname. If the prompt names nobody, the faithful pair is already fixed.", examples: [{ english: "'Write to the head office of the company.' — no name given, so the letter runs from 'Dear Sir or Madam' to 'Yours faithfully'.", note: "The pair is a reading decision, not a writing decision." }] },
          { title: "Step 2: What is the letter for?", text: "Name the purpose in one word — complaining, requesting, informing, explaining, inviting — because the purpose picks the paragraph order and the phrase shelf. A request letter that borrows a complaint's volume has misread its own job.", examples: [{ english: "The festival letter informs and asks; it never raises its voice, because nothing in it has gone wrong.", note: "Purpose sets the temperature." }] },
          { title: "Step 3: What exactly do the bullets demand?", text: "Each bullet is a paragraph contract, so underline its verb: describe, explain, say, ask. 'Describe some relevant experience' wants facts about you; 'ask two questions' wants question marks. The verb is the paragraph's brief.", examples: [{ english: "Bullet three reads 'ask two questions about arrangements' — so the paragraph must end in two question marks, not one vague enquiry.", note: "Count the deliverables the bullet prints." }] },
          { title: "Step 4: What will the reader need that the bullets don't mention?", text: "Order numbers, dates, deadlines for the reply: the credibility details. A formal office answers letters that give it something to act on, and the details are what make the letter answerable.", examples: [{ english: "'I would appreciate a reply before the end of the month' gives the office a date to work to and the writer transport to arrange.", note: "A dated close is a service to both sides." }] },
        ],
      },
      { type: "heading", text: "Component 3 — The skeleton" },
      {
        type: "steps",
        title: "The five moves, top to bottom",
        intro: "Every formal letter wears the same five-part frame:",
        steps: [
          { title: "Move 1: The greeting", text: "Chosen from the pair table while reading the prompt: 'Dear Sir or Madam' for a stranger institution, 'Dear Ms Marchetti' for a named stranger. Nothing else is legal." },
          { title: "Move 2: The purpose sentence", text: "'I am writing to...' states the business in the first line. The formal reader is busy, and the formal writer never makes a reader wait for the point." },
          { title: "Move 3: The bullet paragraphs", text: "One paragraph per bullet, in the order printed. Each opens with its own job — the experience, the preference, the questions — and none of them borrows another's clothes." },
          { title: "Move 4: The close", text: "A single courteous sentence that looks forward: 'I look forward to your reply.' The close never introduces new business, and it never apologises for existing." },
          { title: "Move 5: The sign-off", text: "The pair's second half, then the name the register demands: 'Yours faithfully' over the full name, or 'Yours sincerely' over the full name. The signature is part of the register, not an afterthought." },
        ],
      },
      { type: "heading", text: "Component 4 — The language shelf" },
      {
        type: "example",
        title: "The formal shelf, phrase by phrase",
        items: [
          { english: "I am writing to enquire about the volunteer programme advertised on your website.", note: "The impersonal opener: the business in the first line, with no 'My name is...' introductions anywhere.", domain: "work" },
          { english: "Further to your message of 3 March, I am confirming my availability for the festival weekend.", note: "'Further to' picks up an existing thread, and the printed date anchors it; the chunk is learned as one block.", domain: "everyday" },
          { english: "I would be grateful if you could let me know what stewards are expected to wear.", note: "The all-purpose formal request: one fixed chunk carries the whole ask without a single modal gymnastic.", domain: "work" },
          { english: "I regret to inform you that I shall be unable to attend the interview on Thursday 14th.", note: "The fixed carrier of unwelcome news: 'regret' keeps the voice level exactly when the content is not.", domain: "exam" },
          { english: "This matter has caused me considerable inconvenience, and I trust it will be resolved without further delay.", note: "Measured displeasure in one sentence: strong content, level voice — the seed of every strong complaint.", domain: "school" },
          { english: "Should you require any further information, please do not hesitate to contact me.", note: "The inverted 'Should you...' pattern is a formal ornament worth owning whole; rebuilt word by word it usually wobbles.", domain: "everyday" },
          { english: "I look forward to your reply at your earliest convenience. Yours faithfully, Kavita Nair", note: "The close that looks forward, and the faithful pair's second half over the full name.", domain: "exam" },
        ],
      },
      { type: "heading", text: "Component 5 — The worked model letter" },
      {
        type: "four-skills",
        title: "Worked model — the festival steward's letter",
        reading: {
          text: "The prompt as printed: 'You have been accepted as a volunteer steward at a weekend book festival organised by a charity in your town. The festival office has asked all stewards to write in before the event. In your letter, you should: describe some relevant experience you have; say which of the two shifts you would prefer; ask two questions about arrangements for volunteers.' The office message carries no name, so the envelope carries no name either.",
          task: "Before writing: name the register, the pair, and the job of each of the three paragraphs.",
        },
        writing: {
          task: "You have been accepted as a volunteer steward at a weekend book festival organised by a charity in your town. The festival office has asked all stewards to write in before the event. In your letter: describe some relevant experience you have; say which of the two shifts you would prefer; ask two questions about arrangements for volunteers. Write at least 150 words. You do NOT need to write any addresses.",
          guide: [
            "Greeting: Dear Sir or Madam, — no name is given, and the pair is settled now, not at the end",
            "Opening: I am writing further to your message of 3 March, which asked ...",
            "Experience: For the past two years I have helped at ..., where my duties included ...",
            "Preference: If possible, I would be grateful if you could assign me to the Saturday shift, as ...",
            "Questions: could you please let me know ..., and whether ...?",
            "Close and sign-off: I would appreciate a reply before the end of the month ... Yours faithfully, + full name",
          ],
          model:
            "Dear Sir or Madam,\n\nI am writing further to your message of 3 March, which asked all volunteer stewards to confirm their arrangements before the festival.\n\nI have some experience of this kind of work. For the past two years I have helped at my children's school fair, where my duties included directing visitors and managing the entrance table. Last summer I also assisted at a charity fun run, checking tickets at one of the gates.\n\nI am available on either day of the festival weekend. If possible, I would be grateful if you could assign me to the Saturday shift, as I have a family commitment on the Sunday morning.\n\nFinally, could you please let me know what stewards are expected to wear, and whether a parking space is available near the main entrance? I would appreciate a reply before the end of the month so that I can arrange my transport.\n\nYours faithfully,\nKavita Nair",
        },
        listening: {
          script:
            "No name on the office message, so this is formal from the first line: 'Dear Sir or Madam', and the only possible close is 'Yours faithfully' with my full name underneath. Three bullets, three paragraphs, in the order printed. Experience first — the school fair and the fun run are enough, two sentences each at most, because an office skims. Preference second — Saturday, and one honest reason; a formal letter states a reason, it never apologises for having one. Questions third — clothing and parking, both practical, both answerable by an office in a single reply. The phrases are chosen before drafting: 'I would be grateful if you could' for the shift, 'could you please let me know' for the questions. And the last check before writing: not one contraction anywhere, and no address block — the clock is for the letter, not the envelope.",
          task: "Listen once, then say which pair the tutor settled on and which two fixed phrases were picked before drafting.",
        },
        speaking: {
          task: "Tell a partner the plan for this letter in forty-five seconds: the pair, the three paragraphs, the two fixed phrases.",
          frames: [
            "There's no name on the prompt, so the pair is ...",
            "Paragraph one covers the first bullet, which asks for ...",
            "For the preference I'll use the fixed phrase ...",
            "The close looks forward: I would appreciate a reply ...",
          ],
          checklist: [
            "Did I settle the sign-off pair before anything else?",
            "Did I keep every bullet in the printed order?",
            "Did I catch myself before any contraction?",
          ],
        },
      },
      { type: "heading", text: "Component 6 — Why this model works" },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Register", "One pair from greeting to signature — 'Dear Sir or Madam' to 'Yours faithfully' — with not a contraction or an address block in sight"],
          ["Bullet coverage", "Experience, shift preference and two questions each own a paragraph, in the order printed — nothing asked for is missing, and nothing extra is volunteered"],
          ["Organisation", "The opening states the business in one sentence, so the reader never wonders why the letter exists"],
          ["Language", "Fixed chunks — 'I am writing further to', 'I would be grateful if you could' — do their jobs exactly as printed, at speed"],
          ["Tone", "Personal facts — the children's fair, the Sunday commitment — are delivered impersonally: the content is human, the voice stays level"],
        ],
      },
      { type: "heading", text: "Component 7 — Common mistakes" },
      {
        type: "mistakes",
        title: "The formal-letter trap catalogue",
        items: [
          { wrong: "Dear Sir, I'm writing about the festival steward job.", right: "Dear Sir or Madam, I am writing about the festival steward post.", reason: "'Dear Sir' alone is a fading half-greeting, and 'I'm' breaks the register the greeting promised; the pair and the contraction ban are settled together, in the same second." },
          { wrong: "Dear Sir or Madam, ... Best wishes, Kavita", right: "Dear Sir or Madam, ... Yours faithfully, Kavita Nair", reason: "The sign-off must complete the pair the greeting began; 'Best wishes' is informal furniture standing in a formal room." },
          { wrong: "Hello! My name is Kavita and I want to ask some things about the festival.", right: "I am writing to ask two questions about arrangements for volunteer stewards.", reason: "Formal letters open with the business, never a self-introduction; 'I am writing to...' is the door this reader expects." },
          { wrong: "Send me the details ASAP as I'm really busy this month.", right: "I would appreciate a reply before the end of the month, as I need to arrange my transport.", reason: "Commands and urgency belong to text messages; in a formal letter a deadline is stated as a request with a reason attached." },
        ],
      },
      { type: "heading", text: "Component 8 — Practice planning" },
      {
        type: "steps",
        title: "Plan a second formal letter — the lost wallet",
        intro:
          "The situation: 'You left a wallet on the last bus home on Friday night. The transport company runs a lost-property office, and the prompt gives no name. In your letter, you should: describe the wallet and its contents; say exactly when and where you lost it; ask what you should do next.' Plan, never draft:",
        steps: [
          { title: "Step 1: Fix the frame first", text: "No name means the faithful pair, signed with the full name. The route number and the date are the credibility details, so they go on the plan before anything else.", examples: [{ english: "Plan line one: 'the 21:40 from the square, Friday the 9th' — the office can trace a bus from that.", note: "Evidence before prose." }] },
          { title: "Step 2: Turn the bullets into paragraph jobs", text: "Bullet one is description: brown leather, cards, a photo of a dog in the inside pocket — the contents listed, because that is how offices match property to owners. Bullet two is the timeline: the bus, the stop, the hour. Bullet three is the ask: how to claim, and what proof they will want.", examples: [{ english: "'Ask what you should do next' becomes two questions: how to claim, and what identification they need.", note: "One bullet can hold two asks; count them." }] },
          { title: "Step 3: Pre-select the phrases", text: "One opener — 'I am writing to report' — one request chunk, and the close that looks forward. Choosing them on the plan keeps the drafting fast and the register level.", examples: [{ english: "'I would be grateful if you could let me know how to claim the wallet' — picked on the plan, not hunted for mid-draft.", note: "The shelf is chosen before the paragraph is written." }] },
          { title: "Step 4: Name the bans", text: "No contractions, no addresses, no invented first name for the reader, and no apology for the trouble of writing. The plan ends with the pair written out in full.", examples: [{ english: "Plan line last: 'Dear Sir or Madam → Yours faithfully, full name' — the frame is the last thing checked and the first thing used.", note: "Bans are easiest to keep when they are written down." }] },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read for the name: no name means the faithful pair, a named stranger means the sincere pair — settled before the first sentence exists"],
          ["While the clock runs", "Write the bullet paragraphs in the printed order; if wording dries up, return to the shelf, never to improvisation"],
          ["If you are stuck", "Write the paragraph you can already phrase — usually the middle bullet — and let its phrasing suggest the opening"],
          ["Final minutes", "Sweep for contractions and for the pair: greeting, sign-off and the name underneath must agree before the pen goes down"],
        ],
      },
      {
        type: "summary",
        points: [
          "No name to write to means 'Dear Sir or Madam' closing 'Yours faithfully'; a named stranger means 'Dear Ms Marchetti' closing 'Yours sincerely' — each greeting owns one sign-off, always.",
          "The opening states the business: 'I am writing to...' — never a self-introduction, never a remark about the weather.",
          "Fixed phrases are shelves, not suggestions: 'I would be grateful if you could', 'I regret to inform you', 'Should you require...'.",
          "Contractions and address blocks are banned; the clock belongs to the letter, not to the envelope.",
          "Each bullet owns one paragraph in the order printed, and the close looks forward — never back, never sideways.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per foundations lesson.",
        items: [
          { question: "What three ingredients does every General Training Task 1 prompt hand the writer?", options: ["A situation, a recipient and three bullet points", "A chart, a title and a pair of axes", "A model letter, a word count and a signature"], correctIndex: 0, explanation: "The three ingredients decide everything that follows: the recipient picks the register, the situation picks the purpose, and the bullets pick the paragraphs.", from: "Understanding task instructions" },
          { question: "When must a letter's register be chosen?", options: ["While reading the prompt — before the first sentence exists", "At the sign-off, once the length is known", "During the final check, if any time is left over"], correctIndex: 0, explanation: "A register chosen late leaks: greeting, vocabulary and sign-off must agree from the first line, so the pair is settled before drafting starts.", from: "Tone" },
          { question: "How are fixed phrases best learned and used?", options: ["As whole chunks, reproduced exactly as printed", "Word by word, so they can be rebuilt at will", "Only when no everyday phrase will do"], correctIndex: 0, explanation: "A fixed chunk used exactly as printed is both accurate and fast; rebuilding it word by word invites the small errors the eye no longer catches.", from: "Vocabulary" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "The prompt ends: 'Write a letter to the head office of the company. You do not know the name of anyone there.' Which pair is correct?",
        hints: ["Does the prompt give you any name to write to?"],
        options: [
          { id: "a", text: "Dear Sir or Madam → Yours faithfully, then your full name." },
          { id: "b", text: "Dear Manager → Yours truly, then your first name." },
          { id: "c", text: "Dear Sir or Madam → Yours sincerely, then your surname alone." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Dear Sir or Madam → Yours faithfully, then your full name.",
          "No name anywhere means the faithful pair: 'Dear Sir or Madam' closes with 'Yours faithfully' and the full name underneath, and the whole thing is settled before any other sentence is written.",
          "(b) invents a title no real letter uses and a sign-off no pair owns; (c) pairs the right greeting with the wrong partner — the half-pair is the classic slip.",
        ),
        tags: ["gwriting", "letters", "formal", "pairs"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. You have been offered an interview in another city on a date you can no longer manage, and you write to the office that arranged it. No name appears anywhere in the prompt.",
        hints: ["The opening should state the letter's business in one impersonal line."],
        passageTitle: "The unwelcome-news letter",
        passage:
          "Four openings are suggested by classmates. (1) 'Hi there! Bad news I'm afraid — Thursday is going to be tricky for me, sorry about that.' (2) 'I regret to inform you that I shall be unable to attend the interview on Thursday 14th, and I apologise for any inconvenience caused.' (3) 'I am Kavita, the candidate for the assistant role, and I wanted to reach out regarding the interview day.' (4) 'Just a quick line about Thursday — basically it's a no from me, hope that's ok!'",
        question: "Which numbered opening belongs in the letter?",
        options: [
          { id: "a", text: "Opening (1)" },
          { id: "b", text: "Opening (2)" },
          { id: "c", text: "Opening (3)" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Opening (2)",
          "'I regret to inform you' is the fixed carrier of unwelcome news: it states the fact, holds the apology to one clause, and keeps the voice level for a reader the writer has never met.",
          "(1) and (4) break register twice over — contractions and chat; (3) opens with a self-introduction, which a formal letter never makes.",
        ),
        tags: ["gwriting", "letters", "formal", "openers"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Which sentence could sit anywhere in a formal letter without breaking register?",
        hints: [],
        options: [
          { id: "a", text: "I'd love it if you could send the details over when you get a sec." },
          { id: "b", text: "I would be grateful if you could confirm the arrangements at your earliest convenience." },
          { id: "c", text: "I'm really sorry but I can't make Thursday work, I'm afraid." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "I would be grateful if you could confirm the arrangements at your earliest convenience.",
          "The fixed request chunk carries courtesy in its bones: no contraction, no chat, no urgency — exactly the furniture this register was built from.",
          "(a) and (c) are friendly, contracted and casual — three strikes this register never forgives in one sentence.",
        ),
        tags: ["gwriting", "letters", "formal", "register"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Complete the fixed request chunk.",
        sentence: "If possible, I would be grateful if you could ___ me to the Saturday shift, as I have a family commitment on the Sunday.",
        acceptedAnswers: ["assign", "allocate", "move"],
        hints: [],
        feedback: fb(
          "assign / allocate / move",
          "The chunk 'I would be grateful if you could' wants a plain verb of allocation after it; 'assign' does the asking without a single extra word of politeness, because the chunk has already carried it.",
          "Verbs of feeling or thanking, such as 'delight' or 'appreciate', do not fit the slot — the gratitude is already inside the chunk.",
        ),
        tags: ["gwriting", "letters", "formal", "requests"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. The pair table.",
        question: "Name the two legal formal sign-offs, and the greeting each one pairs with.",
        acceptedAnswers: [
          "'Yours faithfully' pairs with 'Dear Sir or Madam'; 'Yours sincerely' pairs with 'Dear Mr' or 'Dear Ms' plus a surname",
          "'Yours faithfully' goes with 'Dear Sir or Madam', and 'Yours sincerely' goes with a named greeting like 'Dear Ms Marchetti'",
          "'Yours faithfully' belongs to 'Dear Sir or Madam'; 'Yours sincerely' belongs to 'Dear Mr/Ms' and the surname",
        ],
        keywords: ["faithfully", "sincerely"],
        hints: [],
        feedback: fb(
          "'Yours faithfully' pairs with 'Dear Sir or Madam'; 'Yours sincerely' pairs with 'Dear Mr/Ms + surname'.",
          "The pairs are fixed furniture: the faithful close answers a greeting with no name in it, and the sincere close answers a named one — neither ever swaps partners.",
          "An answer that swaps the partners has memorised the vocabulary and missed the pairing, which is the error an examiner sees first.",
        ),
        tags: ["gwriting", "letters", "formal", "pairs"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Which sentence has no place in a formal letter?",
        hints: [],
        options: [
          { id: "a", text: "Please do not hesitate to contact me should you require further details." },
          { id: "b", text: "Just give me a ring whenever you like, I'm around most days." },
          { id: "c", text: "I look forward to your reply at your earliest convenience." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Just give me a ring whenever you like, I'm around most days.",
          "A contraction, a command and an open-ended invitation: the sentence is a text message wearing a stamp, and formal readers notice the disguise immediately.",
          "(a) and (c) are fixed formal furniture of exactly the kind this lesson shelves — inverted, courteous, and level.",
        ),
        tags: ["gwriting", "letters", "formal", "register"],
      }),
    ],
    homework: [
      "Collect five formal prompts from your practice materials and write only their first and last lines — greeting, purpose sentence, close, sign-off — ninety seconds each.",
      "Take any formal letter you have written and sweep it twice: once for contractions, once for the pair, marking every hit in the margin.",
    ],
    assignment: {
      title: "Write a formal letter",
      instructions:
        "Using the lost-wallet situation planned in this lesson (or any formal prompt from your practice materials), write the complete letter: the faithful or sincere pair as the prompt demands, an impersonal opening, one paragraph per bullet in the order printed, the fixed phrases from the shelf, and a close that looks forward. No contractions, no addresses — and check the pair one last time before you finish.",
      minWords: 150,
      maxWords: 200,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-semi-formal",
    title: "Semi-formal letters",
    description:
      "The middle register: letters to a landlord, a manager, a tutor — someone known by name or role, addressed by surname and closed 'Yours sincerely'. Warmth allowed, contractions selective, and a complete model that thanks a first-aid tutor and borrows her training kit.",
    objectives: [
      "greet a known professional by surname — Dear Mrs Fernandes — and close with Yours sincerely",
      "blend one line of genuine personal contact into an otherwise business-like letter",
      "use contractions selectively: freely in the warm lines, sparingly in the request",
      "combine thanking and requesting in one letter without letting either crowd the other",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "Semi-formal letters travel to people you know in a professional or civic role: the landlord who books the boiler visit, the tutor who runs the evening class, the neighbour you nod to but have never invited in. The relationship is real, so the letter may be warm — but the address is still by surname, and the close is still 'Yours sincerely'. The craft is the dial: personal enough to feel written by a human, professional enough to sit on a working desk. This lesson sets the dial, then proves it with a complete letter that thanks a first-aid tutor and asks to borrow her training kit.",
        beforeYouStart: [
          "You can choose a letter's register from the recipient before writing.",
          "You know the two formal pairs, and why neither quite fits a reader you actually know.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "General Training Writing Task 1 — semi-formal letters dominate the everyday prompts: landlords, managers, tutors, neighbours"],
          ["Task & question types", "One prompt: a situation, three bullet points, a named or role-known recipient; at least 150 words in about 20 minutes"],
          ["What is assessed", "Tone control inside politeness — warmth without intimacy — plus bullet coverage and clean paragraphing"],
          ["Why this matters", "Stiff is easy and sloppy is easy; the marks come from being simultaneously courteous and human, and that mix is trained, not guessed"],
        ],
      },
      { type: "heading", text: "Component 1 — The semi-formal register defined" },
      {
        type: "text",
        text: "Semi-formal is the register of a working relationship. The reader has a name — 'Write to your landlord, Ms Havel' — or a role you address directly — 'Write to your course tutor'. The greeting takes the surname: 'Dear Mrs Fernandes', 'Dear Ms Havel'. Never 'Dear Sir or Madam', because you know who she is; and never 'Dear Sandhya', because you do not know her that well, and the examiner would read the first name as a slip. The sign-off is 'Yours sincerely', with a first name or full name beneath — a first name is legal here because the relationship is real. Inside the frame lives the dial. Personal facts are welcome: the course you shared, the garden you both tend. Light contractions appear in the warm lines and thin out in the request. Phrasal verbs return — 'sort out', 'put off' — where a formal letter would insist on 'arrange' and 'postpone'. And one rule survives from the formal shelf unchanged: the letter still opens by stating its business, because a professional reader, however friendly, is still a busy one.",
      },
      { type: "heading", text: "Component 2 — Reading the situation" },
      {
        type: "steps",
        title: "The three questions, semi-formal edition",
        intro: "The recipient is known, so the questions are about degree:",
        steps: [
          { title: "Step 1: How well do you actually know them?", text: "A nodding acquaintance and two years of Tuesday classes are both semi-formal, but they sit at different points of the dial. Warmth is rationed by the relationship, not by the writer's mood.", examples: [{ english: "'Write to your tutor, who has taught you for two years' — the human line is earned; 'Write to a neighbour you have never properly spoken to' — courteous, neutral, and no warmer.", note: "The dial has positions, not just an on switch." }] },
          { title: "Step 2: What is the purpose mix?", text: "This lesson's model carries two purposes at once — thanking and requesting — so both verbs must be announced early, or one silently eats the other. Name the mix before drafting and the paragraphs keep their proportions.", examples: [{ english: "'I'm writing to thank you again for the course, and to ask a small favour connected with it' — both jobs named in one breath.", note: "Two purposes, one opening sentence." }] },
          { title: "Step 3: What do the bullets need in feeling terms?", text: "A thank-you bullet wants specifics — one remembered moment — and a request bullet wants logistics: what is asked, collected when, returned by when. Read each bullet for its emotional temperature as well as its content.", examples: [{ english: "Bullet one, 'thank her for something specific', is asking for a moment from the course, not a paragraph of general praise.", note: "Specific is the bullet's hidden word." }] },
          { title: "Step 4: What shared history can one sentence carry?", text: "One authentic detail — the session she taught on the doorstep, the week she covered your class — does more work than three lines of general gratitude. Choose it before drafting, because under pressure writers reach for platitudes.", examples: [{ english: "The café story the tutor told during the choking session: one detail, instantly hers, unrepeatable in anyone else's letter.", note: "Authentic detail is the currency of this register." }] },
        ],
      },
      { type: "heading", text: "Component 3 — The skeleton" },
      {
        type: "steps",
        title: "The five moves, semi-formal edition",
        intro: "The frame barely changes from the formal lesson — only its temperature does:",
        steps: [
          { title: "Move 1: The greeting", text: "Dear plus title plus surname: 'Dear Mrs Fernandes'. The surname is the register's flag, and it flies from the first line." },
          { title: "Move 2: The human line", text: "One sentence of contact — 'I hope you are well since the end of the course.' Powerful, welcome, and limited to one; a second line of small talk starts spending the reader's patience." },
          { title: "Move 3: The purpose", text: "Both verbs in the opening breath: 'I'm writing to thank you... and to ask...' The contraction is legal here, and the reader holds both jobs in mind from the start." },
          { title: "Move 4: The bullet paragraphs", text: "Thanks with its specific moment first; the plan that gives the request its context second; the ask with its own logistics third. Each paragraph still owns exactly one bullet." },
          { title: "Move 5: The close and sign-off", text: "A last line of gratitude or looking forward, then 'Yours sincerely' and a first name or full name — the writer's choice, because the relationship is real." },
        ],
      },
      { type: "heading", text: "Component 4 — The language shelf" },
      {
        type: "example",
        title: "The semi-formal shelf, phrase by phrase",
        items: [
          { english: "I hope you are well since the end of the course — the term seems to have flown by.", note: "The one-line human touch: contact before business, and never more than a line.", domain: "school" },
          { english: "I'm writing to thank you again for the first-aid weekend — the session on the recovery position has stayed with me.", note: "The purpose sentence carries both verbs early: thanks first, the ask promised in the same breath.", domain: "school" },
          { english: "Would it be possible to borrow the projector over the half-term week?", note: "The polite ask in its shortest form: a question mark does the softening that volume never should.", domain: "work" },
          { english: "We could collect the kit on the Friday and bring it back first thing on the Monday.", note: "A request that specifies its own logistics answers the reader's next question before she can ask it.", domain: "everyday" },
          { english: "I'd really appreciate it if you could let me know by the end of the week.", note: "The contraction sits in the warmth, the deadline stays plain — the dial captured in a single sentence.", domain: "work" },
          { english: "Just to confirm, we're meeting the engineer at the flat on Tuesday at nine.", note: "The checking-in chunk: casual furniture, still on surname terms with the reader.", domain: "everyday" },
          { english: "Thanks again for everything — the course wouldn't have run without you. Yours sincerely, Ruben Castell", note: "The close for a known professional: gratitude that sounds like a person, sign-off that still means business.", domain: "exam" },
        ],
      },
      { type: "heading", text: "Component 5 — The worked model letter" },
      {
        type: "four-skills",
        title: "Worked model — the tutor's training kit",
        reading: {
          text: "The prompt as printed: 'You recently completed a weekend first-aid course at your community centre, taught by Mrs Fernandes. She has told participants that the training materials may be borrowed. You are now helping to run a practice evening for neighbours. In your letter, you should: thank her for something specific from the course; explain what your neighbourhood group is planning; ask to borrow the training kit, saying when you would collect and return it.' The reader is named, so the greeting takes her surname.",
          task: "Before writing: place the dial — how warm can this letter be? — and name the two purposes in one sentence.",
        },
        writing: {
          task: "You recently completed a weekend first-aid course at your community centre, taught by Mrs Fernandes. She has told participants that the training materials may be borrowed. You are now helping to run a practice evening for neighbours. In your letter: thank her for something specific from the course; explain what your neighbourhood group is planning; ask to borrow the training kit, saying when you would collect and return it. Write at least 150 words. You do NOT need to write any addresses.",
          guide: [
            "Greeting: Dear Mrs Fernandes, — the surname, because you know her name but not her kitchen",
            "Human line: I hope you are well since the end of the course ...",
            "Both purposes early: I'm writing to thank you again for ..., and to ask a small favour connected with it",
            "The specific thanks: the session on choking, with the practice dummy ...",
            "The plan as context: six of us from the course live in the same street, and we've decided ...",
            "The ask with logistics: Would it be possible to borrow the kit for that evening? We could collect it on the Friday and return it on the Monday ...",
            "Close and sign-off: Thank you again for such a practical course. I look forward to hearing from you. Yours sincerely,",
          ],
          model:
            "Dear Mrs Fernandes,\n\nI hope you are well since the end of the course. I'm writing to thank you again for the first-aid weekend in March, and to ask a small favour connected with it.\n\nThe session on choking has stayed with me — the practice dummy made it real — and your story about the café incident is the reason half the street now knows the recovery position.\n\nI'm glad to say the training is already being passed on. Six of us from the course live in the same street, and we've decided to run a short practice evening for our neighbours next month, covering the recovery position and basic bandaging.\n\nWould it be possible to borrow the training kit for that evening? We could collect it from the centre on the Friday and return it first thing on the Monday, and we would take great care of it.\n\nThank you again for such an enjoyable and practical course. I look forward to hearing from you.\n\nYours sincerely,\nRuben Castell",
        },
        listening: {
          script:
            "The reader has a name and a role, so: surname greeting, 'Yours sincerely' at the end, and a dial set to warm-but-professional. Two purposes share this letter, and the trick is to announce both in the opening breath — thank you again for the course, and ask a small favour — because then the paragraphs can take one purpose each without the reader ever losing the thread. The thanks must be specific: one moment from the course, the dummy session, maybe the café story. General gratitude is noise; a remembered moment is a compliment only this writer could write. The request carries its own logistics — what we want, which evening, collected Friday, back Monday — which answers her questions before she can ask them. Contractions: yes in the warm lines, thinning out inside the ask. And the last line returns to gratitude, so the letter ends on the relationship, not on the errand.",
          task: "Listen once, then say how both purposes were announced in one breath, and what logistics the request carried.",
        },
        speaking: {
          task: "Explain the plan for this letter to a partner in forty-five seconds: the dial position, the two purposes, the specific thanks.",
          frames: [
            "The reader is my tutor, so the greeting is ... and the dial sits at ...",
            "The opening names both purposes: thanking her for ..., and asking about ...",
            "The thanks will be specific: the moment when ...",
            "The request carries its own logistics: collect on ..., return by ...",
          ],
          checklist: [
            "Did the greeting take the surname?",
            "Did both purposes appear in the opening breath?",
            "Did the request answer the reader's next question in advance?",
          ],
        },
      },
      { type: "heading", text: "Component 6 — Why this model works" },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Register", "Surname greeting, 'Yours sincerely' beneath — warm in the thanks, business-like in the ask, with the dial held steady between them"],
          ["Bullet coverage", "The specific moment from the course, the neighbourhood plan, and the kit with its own logistics — a paragraph each, printed order kept"],
          ["Organisation", "Both purposes are announced in the first breath, so the reader files the letter under two jobs and never loses either of them"],
          ["Language", "Contractions in the human lines — 'I'm', 'we've' — and plain precision inside the request: 'Would it be possible to...'"],
          ["Tone", "The personal detail — the café story, the same street — earns the warmth; the logistics earn the professional's yes"],
        ],
      },
      { type: "heading", text: "Component 7 — Common mistakes" },
      {
        type: "mistakes",
        title: "The semi-formal trap catalogue",
        items: [
          { wrong: "Dear Madam, I am writing to express my gratitude pursuant to your recent instructional programme.", right: "Dear Mrs Fernandes, I'm writing to thank you again for the first-aid weekend.", reason: "'Dear Madam' is for readers whose names you do not know, and 'pursuant to' is a suit worn to a picnic — two mistakes at once, in opposite directions." },
          { wrong: "I am most grateful for the instruction you delivered during the aforementioned course.", right: "The session on choking has stayed with me — the practice dummy made it real.", reason: "General gratitude in office language thanks nobody; one remembered moment, in a human voice, is what a tutor actually reads and believes." },
          { wrong: "I was wondering whether perhaps you might possibly consider lending us the kit, if that's alright, though completely no worries if not!", right: "Would it be possible to borrow the training kit for that evening?", reason: "Begging is politeness collapsed: one clear question with its own logistics is more courteous than a paragraph of apologies." },
          { wrong: "Cheers, Ruben.", right: "Yours sincerely, Ruben Castell", reason: "'Cheers' is a note pinned to a noticeboard; however friendly the relationship, this letter closes with the pair's second half." },
        ],
      },
      { type: "heading", text: "Component 8 — Practice planning" },
      {
        type: "steps",
        title: "Plan a second semi-formal letter — the boiler inspection",
        intro:
          "The situation: 'Your landlord, Ms Havel, has asked tenants to agree a time for the annual inspection, which takes about an hour. In your letter, you should: suggest one weekday morning that suits you; mention that you will be working from home that week anyway; ask whether the engineer needs anything moved in advance.' Plan, never draft:",
        steps: [
          { title: "Step 1: Place the dial", text: "Known by name and two years of tenancy: surname greeting, 'Yours sincerely', and warmth allowed in exactly one line. The working-from-home fact is personal and also useful — that is the ideal semi-formal detail.", examples: [{ english: "'I'll be working from home that week anyway' — one fact that is both human contact and practical information.", note: "The best details do two jobs." }] },
          { title: "Step 2: Turn the bullets into jobs", text: "Bullet one is a suggestion with a time attached — Tuesday morning, between nine and eleven — not a vague openness. Bullet two is the reason the suggestion is easy to grant. Bullet three is one practical question: cupboard cleared, meter accessible.", examples: [{ english: "'Suggest one weekday morning' becomes 'Tuesday between nine and eleven' — a suggestion you can diary is a suggestion.", note: "Specific to the hour, polite to the minute." }] },
          { title: "Step 3: Pre-select the phrases", text: "The checking-in chunk, the polite question, and a close that looks forward to the visit. Picked on the plan, they keep the letter short and the register even.", examples: [{ english: "'Would it help if the cupboard under the stairs was cleared the night before?' — a question that offers, not one that asks.", note: "Semi-formal questions often carry their own answer." }] },
          { title: "Step 4: Check the pair and the name", text: "Dear Ms Havel closes 'Yours sincerely', with any comfortable form of the writer's name beneath. The pair is written on the plan before the paragraphs are drafted, so it cannot drift.", examples: [{ english: "Plan line last: 'Dear Ms Havel → Yours sincerely' — the frame settles the letter's temperature in advance.", note: "The pair is the plan's first line and last check." }] },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Name the relationship in one phrase — 'my tutor of two terms' — and set the dial: warmth rationed by how well you actually know them"],
          ["While the clock runs", "Announce both purposes in the opening breath whenever a letter carries two; the paragraphs then never compete for space"],
          ["If you are stuck", "Write the specific detail you genuinely remember — a moment, a place, a shared task — and the paragraph grows around it"],
          ["Final minutes", "Read the greeting and sign-off aloud together; then sweep for begging in the request and stiffness in the thanks"],
        ],
      },
      {
        type: "summary",
        points: [
          "Semi-formal is a working relationship: greet by surname, close 'Yours sincerely', and let one line of real contact do the warming.",
          "A letter with two purposes announces both in the opening breath, then gives each purpose its own paragraph.",
          "Specific gratitude outperforms general praise: one remembered moment is worth three lines of thanks.",
          "Contractions thin out as the letter moves from warmth towards request; the ask itself stays plain and fully spelt.",
          "The request answers the reader's next question — what, when, collected and returned by when — before it can be asked.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per foundations lesson.",
        items: [
          { question: "What must be true of a letter's register from the first line to the last?", options: ["Consistent — chosen while reading, held until the sign-off", "As formal as the vocabulary can make it", "Adjusted once the draft is finished"], correctIndex: 0, explanation: "A register that shifts mid-letter leaks: greeting, vocabulary and sign-off have to agree, so the choice is made once, early, and then held.", from: "Tone" },
          { question: "What does question analysis turn the three bullet points into?", options: ["A paragraph plan — one job per bullet, kept in printed order", "A choice of the two most comfortable bullets", "A word-count budget for each bullet"], correctIndex: 0, explanation: "The bullets are the letter's contract: each one becomes a paragraph with one job, and the printed order is the paragraph order.", from: "Analysing question requirements" },
          { question: "Which greeting suits a reader you know by name but not by kitchen?", options: ["Dear Mrs Fernandes — the surname", "Dear Sir or Madam — the safe fallback", "Dear Priya — the friendly opener"], correctIndex: 0, explanation: "You know her name, so the no-name greeting is wrong; you do not know her socially, so the first name is a slip — the surname is exactly right.", from: "Tone" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "The prompt reads: 'Write to your landlord, Ms Havel, to arrange the annual inspection.' Which greeting and close are correct?",
        hints: ["Is her name printed in the prompt?"],
        options: [
          { id: "a", text: "Dear Ms Havel, ... Yours sincerely," },
          { id: "b", text: "Dear Sir or Madam, ... Yours faithfully," },
          { id: "c", text: "Dear Havel, ... Best wishes," },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Dear Ms Havel, ... Yours sincerely,",
          "Her name is printed, so the no-name greeting would be odd — and 'Dear Havel' drops the title, which English never does. The sincere pair answers a named reader.",
          "(b) greets her as a stranger the prompt says she is not; (c) loses the title and closes with furniture from a different room.",
        ),
        tags: ["gwriting", "letters", "semi-formal", "pairs"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. A classmate drafted the request paragraph of the tutor letter. Read it, then choose the sentence that should replace the underlined ask.",
        hints: ["One clear question with its own logistics beats a paragraph of apologies."],
        passageTitle: "The borrowing paragraph",
        passage:
          "Draft: 'So anyway the kit — I was wondering whether perhaps you might possibly consider lending it to us for the evening, if that's completely alright, though obviously no worries at all if not, I totally understand, it's just it would make everything much easier, sorry to ask!' The classmate needs one sentence that carries the ask and its logistics.",
        question: "Which sentence should carry the ask?",
        options: [
          { id: "a", text: "Would it be possible to borrow the training kit for that evening? We could collect it on the Friday and return it on the Monday." },
          { id: "b", text: "Please lend us the kit as soon as you can, we really need it by Friday at the latest." },
          { id: "c", text: "The kit would be nice if you have it, whenever is easiest for you, no rush at all." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Would it be possible to borrow the training kit for that evening? We could collect it on the Friday and return it on the Monday.",
          "The ask rides one rung of the ladder, and the logistics answer the reader's next question before she can ask it — collected Friday, back Monday, all in the same breath as the request.",
          "(b) commands and sets a deadline the reader never agreed to; (c) is so vague the reader must write back with questions.",
        ),
        tags: ["gwriting", "letters", "semi-formal", "requests"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Where do contractions belong in a semi-formal letter?",
        hints: [],
        options: [
          { id: "a", text: "In the warm lines — thanks, contact, news — and thinning out inside the request." },
          { id: "b", text: "Nowhere: semi-formal is formal with a smile, and full forms only." },
          { id: "c", text: "Everywhere: once you know the reader's name, anything goes." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "In the warm lines — thanks, contact, news — and thinning out inside the request.",
          "The dial is the whole craft: 'I'm writing to thank you' sounds like a person; 'Would it be possible to borrow' sounds like a professional — the same letter carries both.",
          "(b) writes a formal letter wearing someone else's name; (c) drifts into chat, which is where semi-formal letters go to die.",
        ),
        tags: ["gwriting", "letters", "semi-formal", "register"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Complete the polite ask.",
        sentence: "Would it be ___ to borrow the training kit for that evening? We could collect it on the Friday and return it on the Monday.",
        acceptedAnswers: ["possible"],
        hints: [],
        feedback: fb(
          "possible",
          "'Would it be possible to' is the shortest rung of the ladder that still counts as polite: the question mark does the softening, and the logistics sentence does the persuading.",
          "Alternatives like 'okay' or 'alright' drop the register a floor; the fixed chunk wants its fixed word.",
        ),
        tags: ["gwriting", "letters", "semi-formal", "requests"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Two purposes, one letter.",
        question: "When a letter carries two purposes — thanking and requesting, say — where must both be announced?",
        acceptedAnswers: [
          "in the opening breath — one sentence naming both verbs, so each purpose can then take its own paragraph",
          "in the first sentence or two: both verbs named early, then one purpose per paragraph",
          "early, in the opening: thanks and the ask both signalled before the paragraphs begin",
        ],
        keywords: ["opening", "paragraph"],
        hints: [],
        feedback: fb(
          "In the opening breath — one sentence naming both verbs, then one purpose per paragraph.",
          "Announced late, the second purpose reads as an afterthought bolted on; announced early, the reader files the letter under both jobs and loses neither.",
          "Answers that let the request 'surprise' the reader at the end have written one letter and half of another.",
        ),
        tags: ["gwriting", "letters", "semi-formal", "structure"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Which line of thanks would a tutor actually believe?",
        hints: [],
        options: [
          { id: "a", text: "I am most grateful for the instruction you delivered during the aforementioned course." },
          { id: "b", text: "Thank you for a very informative and enjoyable course, which was both informative and enjoyable." },
          { id: "c", text: "The session on choking has stayed with me — the practice dummy made it real." },
        ],
        correctOptionId: "c",
        feedback: fb(
          "The session on choking has stayed with me — the practice dummy made it real.",
          "Only a writer who sat in that room could write that sentence; specificity is what makes gratitude credible, and credibility is what makes it a compliment.",
          "(a) is office language thanking nobody in particular, and (b) says 'informative and enjoyable' twice — praise on a loop.",
        ),
        tags: ["gwriting", "letters", "semi-formal", "gratitude"],
      }),
    ],
    homework: [
      "Collect three semi-formal prompts — a landlord, a manager, a tutor — and write only their opening breath: human line plus both purposes, two sentences each.",
      "Take any letter you have written to a real professional and mark every contraction: warm lines and request lines, then rebalance the dial.",
    ],
    assignment: {
      title: "Write a semi-formal letter",
      instructions:
        "Using the boiler-inspection situation planned in this lesson (or any semi-formal prompt from your practice materials), write the complete letter: the surname greeting and sincere close, one human line only, the suggestion specified to the hour, the practical question with its own offer, and a close that looks forward to the visit. Keep the dial steady — warm in one line, business-like in the rest.",
      minWords: 150,
      maxWords: 200,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-informal",
    title: "Informal letters",
    description:
      "The register of friendship: Dear plus a first name, contractions expected, warm openers and chatty closers — while the three bullets still quietly run the paragraphing. Complete model letter: an apology for silence, a bundle of news, and an invitation to stay.",
    objectives: [
      "greet a friend by first name and close with Take care, / Love, / Best, plus your first name",
      "open warmly in one line, then reach the letter's business without a page of weather",
      "use contractions and everyday phrasal verbs as the default, not the exception",
      "cover excuse, news and invitation in one friendly letter that still reads organised",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "Informal letters go to friends and family — the people whose first names you use without thinking. The register is relaxed, but it is not lawless: the exam still wants every bullet covered, in order, in readable paragraphs, and it still punishes register errors — a 'Yours faithfully' to a friend is as wrong as a 'Dear Sir' at a birthday party. The craft is chatty discipline: contractions everywhere, warmth everywhere, and underneath it all the same five-part frame a formal letter wears. This lesson stocks the informal shelf, then writes a complete letter to a friend — an apology for silence, a bundle of news, and an invitation to stay.",
        beforeYouStart: [
          "You can set a letter's register from the recipient before writing.",
          "You know the formal and semi-formal pairs, and why neither belongs in a letter to a friend.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "General Training Writing Task 1 — informal letters serve the social prompts: friends, cousins, penfriends"],
          ["Task & question types", "One prompt: a situation, three bullet points, a friend or relative as recipient; at least 150 words in about 20 minutes"],
          ["What is assessed", "A consistent friendly register with the bullets still covered — chatty voice, organised paragraphs"],
          ["Why this matters", "Candidates relax too far: one unparagraphed blob, or formal furniture leaking in; relaxed discipline keeps the marks either error would lose"],
        ],
      },
      { type: "heading", text: "Component 1 — The informal register defined" },
      {
        type: "text",
        text: "Informal is the register of intimacy. The reader is a friend or a relative: 'Write to your friend Kofi', 'Write to your cousin'. The greeting is the first name and nothing else — 'Dear Kofi,' — because a surname between friends would be a joke, and in an exam it reads as a slip. The sign-off is any warm close — 'Take care,', 'Love,', 'Best,' — with your first name beneath. Inside the frame, contractions are expected ('I'm', 'we've', 'can't'), phrasal verbs return ('sort out', 'pop round'), exclamation marks are legal in small doses, and everyday images do the work that formal letters give to fixed phrases. What does not change is the architecture. The bullets still take a paragraph each, in the order printed. The letter still gets to its point quickly — a warm line, then business. And the reader must still be able to find each bullet without digging: chatty is a voice, never an excuse.",
      },
      { type: "heading", text: "Component 2 — Reading the situation" },
      {
        type: "steps",
        title: "The three questions, informal edition",
        intro: "Known by heart — but read with the same discipline:",
        steps: [
          { title: "Step 1: How close is close?", text: "A best friend since school and an aunt you see twice a year are both informal, but the aunt wants gentler warmth and less slang. The first name is the register; the relationship sets its temperature.", examples: [{ english: "'Write to an old friend you haven't seen for a year' — warm, teasing, one exclamation allowed; 'Write to your grandmother' — warm, respectful, and no slang at all.", note: "Informal has a dial too." }] },
          { title: "Step 2: What is the purpose mix?", text: "This model carries three at once — an excuse, some news, an invitation — and the printed order is the paragraph order: apology first, news second, invitation last, each in its own paragraph.", examples: [{ english: "Three bullets, three paragraphs: sorry — here's what's new — now come and see it.", note: "The mix names the letter's shape." }] },
          { title: "Step 3: Which bullet deserves the most space?", text: "The news bullet is the fattest by right — it is the letter's reason for existing. The excuse should be two sentences, honest and over; an apology that runs a paragraph becomes the story.", examples: [{ english: "One line — 'the new job swallowed my first month whole' — is a complete apology: reason given, no drama.", note: "Short excuses read as honest ones." }] },
          { title: "Step 4: What would you actually say on the phone?", text: "The letter is that call, written down and organised. If a sentence would sound staged on the phone, it will read staged on the page.", examples: [{ english: "'I trust this finds you well' — nobody says that to a friend; 'How have you been?' is the same sentence in this register's voice.", note: "The phone test catches formal furniture instantly." }] },
        ],
      },
      { type: "heading", text: "Component 3 — The skeleton" },
      {
        type: "steps",
        title: "The five moves, informal edition",
        intro: "The frame is identical to the formal lesson's; only the furniture changes:",
        steps: [
          { title: "Move 1: The greeting", text: "Dear plus first name, with a comma: 'Dear Kofi,'. Nothing else is on offer — no titles, no surnames, no 'Dear Friend'." },
          { title: "Move 2: The warm opener", text: "One line that opens the conversation: 'How have you been?' or 'It was great to hear from you.' Then straight to the letter's first job." },
          { title: "Move 3: The bullet paragraphs", text: "The excuse, short and honest; the news, fattest, in concrete details; the invitation, with a suggested date and its own logistics." },
          { title: "Move 4: The chatty close", text: "A line that looks forward — 'Let me know what suits you' — or sends love, or both. The close is where the friendship shows." },
          { title: "Move 5: The sign-off", text: "Any warm close plus your first name: 'Take care, Marta', 'Love, Marta', 'Best, Marta'. The pair is first name to first name, matching the greeting." },
        ],
      },
      { type: "heading", text: "Component 4 — The language shelf" },
      {
        type: "example",
        title: "The informal shelf, phrase by phrase",
        items: [
          { english: "How have you been? It was great to hear from you — sorry it's taken me so long to reply.", note: "Warmth first, with the apology folded inside it: one line does both jobs without a formal bone in its body.", domain: "everyday" },
          { english: "The new job swallowed my first month whole — I was at my desk until eight most evenings.", note: "A chatty excuse with a picture in it: 'swallowed whole' is the everyday image this register lives on.", domain: "work" },
          { english: "We've got a small flat on the top floor — creaky stairs, a view of the fishing boats, and a bakery on the corner.", note: "Three concrete details beat any quantity of 'it's really nice'; the reader can see the place.", domain: "everyday" },
          { english: "You'll never believe what happened at the market on Saturday.", note: "The suspense opener: legal here, a disaster anywhere else — use it once per letter, at most.", domain: "social" },
          { english: "Anyway, the real news is that we've finally set a date.", note: "'Anyway' is the chatty turnstile: it closes one subject and opens the next without a single formal linker.", domain: "social" },
          { english: "Why not aim for the last weekend of the month? The trains are quiet and the sofa bed has your name on it.", note: "An invitation phrased as a suggestion — questions invite, and 'your name on it' is the personal reason.", domain: "travel" },
          { english: "Take care, and give my love to everyone at home. Marta", note: "The informal pair: any warm close plus the first name; 'give my love' is the family postscript this register owns.", domain: "everyday" },
        ],
      },
      { type: "heading", text: "Component 5 — The worked model letter" },
      {
        type: "four-skills",
        title: "Worked model — news for an old friend",
        reading: {
          text: "The prompt as printed: 'You have just moved to a new city because of your job. An old friend has written asking how you are settling in, and your reply is overdue. In your letter, you should: apologise for the delay and explain why; describe the place where you now live; invite your friend to come and stay for a weekend.' The reader is a friend, so the register is settled by the first name.",
          task: "Before writing: name the three purposes and the order they arrive in, and decide which paragraph earns the most space.",
        },
        writing: {
          task: "You have just moved to a new city because of your job. An old friend has written asking how you are settling in, and your reply is overdue. In your letter: apologise for the delay and explain why; describe the place where you now live; invite your friend to come and stay for a weekend. Write at least 150 words. You do NOT need to write any addresses.",
          guide: [
            "Greeting: Dear Kofi, — the first name, because that is what friends are called",
            "Warm opener plus apology: How have you been? ... sorry it's taken me so long to reply",
            "The excuse, short and honest: the new job swallowed my first month whole ...",
            "The news in concrete details: top floor of an old house near the harbour — creaky stairs, a view of the fishing boats, a bakery on the corner",
            "The invitation with a date: come and stay — why not aim for the last weekend of the month?",
            "Chatty close and sign-off: Let me know what suits and I'll meet you at the station. Take care, ... Love, + first name",
          ],
          model:
            "Dear Kofi,\n\nHow have you been? It was great to hear from you — and I'm sorry it's taken me so long to reply. The new job swallowed my first month whole: I was at my desk until eight most evenings, and the box marked 'kettle' stayed unpacked for a fortnight.\n\nI'm slowly winning, though. We've got a small flat on the top floor of an old house near the harbour — creaky stairs, a view of the fishing boats, and a bakery on the corner that opens at six. At weekends the whole street turns into a market, so the smell of bread and coffee drifts up to the window.\n\nNow the important part: come and stay! There's a sofa bed with your name on it, the harbour ferry does day trips along the coast, and I'd love to show you the market before the crowds arrive. Why not aim for the last weekend of the month?\n\nLet me know what suits and I'll meet you at the station. Take care, and give my love to your folks.\n\nLove,\nMarta",
        },
        listening: {
          script:
            "A friend, so the register is settled before the ink moves: first name in, warm close out, contractions everywhere between. Three bullets, and each one is a paragraph — apology first, and short: one honest reason, no drama, because an excuse that runs long starts sounding like an excuse. News second, and this is the fat paragraph: not 'the area is nice', which says nothing, but three things you can see — the stairs, the boats, the bakery. If the reader can picture the flat, the paragraph has done its job. Invitation third, and it must sound like a friend asking: a suggestion with a date attached, 'the last weekend of the month', plus one line that says why them — the sofa bed with your name on it. The phone test runs all the way through: if I wouldn't say it to Kofi down a phone line, it doesn't go in the letter. And the close sends love, because that is what this register is for.",
          task: "Listen once, then say which paragraph earned the most space, and why the apology stayed short.",
        },
        speaking: {
          task: "Describe the plan for this letter to a partner in forty-five seconds: the three purposes, the fat paragraph, the phone test.",
          frames: [
            "The reader is a friend, so the pair is ...",
            "Paragraph one apologises in one line, because ...",
            "The news paragraph works by concrete details: the ..., the ... and the ...",
            "The invitation carries a date and a personal reason: ...",
          ],
          checklist: [
            "Did every paragraph own exactly one bullet?",
            "Would each line survive the phone test?",
            "Is there one warm close and my first name beneath it?",
          ],
        },
      },
      { type: "heading", text: "Component 6 — Why this model works" },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Register", "First-name greeting, 'Love,' beneath, contractions throughout — and not one piece of formal furniture anywhere in the house"],
          ["Bullet coverage", "Apology with its reason, the place in three visible details, the invitation with a suggested date — a paragraph each, printed order kept"],
          ["Organisation", "The warm opener is a single line, then business; 'Now the important part:' hands the reader to the invitation without a formal linker"],
          ["Language", "Everyday images — 'swallowed my month whole', 'the sofa bed with your name on it' — carry the warmth that adjectives never could"],
          ["Tone", "The apology is honest and brief; the invitation sounds like a friend asking, not a hotel promoting"],
        ],
      },
      { type: "heading", text: "Component 7 — Common mistakes" },
      {
        type: "mistakes",
        title: "The informal trap catalogue",
        items: [
          { wrong: "Dear Mr Osei, I am writing to inform you that I have relocated to a new city.", right: "Dear Kofi, ... I've finally moved — you'll be the first to hear how it's going.", reason: "A surname and an official announcement to a friend is the register reversed; the first name and the contraction are the entire point of this room." },
          { wrong: "I am writing to express my gratitude for your recent correspondence.", right: "It was great to hear from you — sorry I've been so slow to reply.", reason: "Formal chunks leak into informal letters when a writer panics; the shelf here is warm openers, not office language." },
          { wrong: "I regret to inform you that I have not yet replied due to pressures of work.", right: "Sorry it's taken me so long — the new job swallowed my first month whole.", reason: "'I regret to inform you' is for hospitals and head offices; a friend gets the apology in the same breath as the excuse, with a picture in it." },
          { wrong: "Yours faithfully, Marta.", right: "Love, Marta", reason: "The faithful pair belongs to strangers; a friend's letter ends with any warm close and a first name, matching the first name it began with." },
        ],
      },
      { type: "heading", text: "Component 8 — Practice planning" },
      {
        type: "steps",
        title: "Plan a second informal letter — the pottery disaster",
        intro:
          "The situation: 'You have started evening pottery classes, and an old friend, Mireia, has been abroad for months. Your class exhibition is in June. In your letter, you should: explain why you went quiet for a month; describe your first class disaster; invite Mireia to the exhibition evening. Plan, never draft:",
        steps: [
          { title: "Step 1: Set the register by the relationship", text: "An old friend: first name in, warm close out, contractions as the default. One exclamation per paragraph is the ceiling, and slang is rationed by how Mireia actually talks.", examples: [{ english: "'Dear Mireia,' to 'Love,' — the frame settled in two seconds, all of it gained back in comfort.", note: "The register decision is the cheapest one on the page." }] },
          { title: "Step 2: Budget the bullets", text: "The excuse gets two sentences with a picture in them — 'the kiln deadline ate April'. The disaster gets the fat paragraph, told properly: what you made, what went wrong, what the tutor said. The invitation carries the date, the place, and one line about why Mireia specifically should come.", examples: [{ english: "'My first bowl came out shaped like a boot' — the disaster in one image; the paragraph then tells the rest around it.", note: "One picture per paragraph is plenty." }] },
          { title: "Step 3: Choose the images", text: "Everyday pictures outperform adjectives in this register: a boot-shaped bowl beats 'it did not go well'. Pick the images on the plan, not mid-draft.", examples: [{ english: "The exhibition invitation line: 'there will be wine, and at least one thing I am not ashamed of' — warmth with a laugh in it.", note: "Humour is legal here; it is still on the plan." }] },
          { title: "Step 4: Write the pair and the close", text: "Dear Mireia, to Love, or Take care,, plus the first name. The last line mentions the exhibition date so the letter ends looking forward, not backwards.", examples: [{ english: "'The exhibition opens on the 14th — say you'll come' — the reply is asked for, in this register's own voice.", note: "Informal letters still ask for the answer." }] },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Say the recipient's name aloud — first name means informal — then set the temperature by how close you actually are"],
          ["While the clock runs", "Give each bullet its paragraph; when the news runs long, cut adjectives and keep the concrete details"],
          ["If you are stuck", "Write what you would say on the phone, then organise it — chatty first, tidy second"],
          ["Final minutes", "Sweep for formal furniture — 'I am writing to', 'Yours faithfully', 'I regret' — and swap in the warm shelf"],
        ],
      },
      {
        type: "summary",
        points: [
          "First name in, warm close out: 'Dear Kofi' to 'Love, Marta', with contractions everywhere between.",
          "The bullets still rule: apology, news and invitation each take a paragraph, in the order printed.",
          "Concrete details do the work of adjectives: the bakery on the corner beats 'the area is nice'.",
          "The warm opener is one line; the letter reaches its business immediately after.",
          "Chatty is a voice, never an excuse: the reader must find each bullet without digging.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per foundations lesson.",
        items: [
          { question: "How does the tone lesson describe a register error?", options: ["Furniture from the wrong room — a formal chunk in a friendly letter, or the reverse", "A spelling mistake in the greeting", "A paragraph shorter than two sentences"], correctIndex: 0, explanation: "Register errors are visible mismatches: the reader notices the room before the sentence, which is why the pair and the vocabulary have to agree.", from: "Tone" },
          { question: "What does question analysis turn the three bullets into?", options: ["A paragraph plan, one job per bullet, in printed order", "A ranking of the bullets by difficulty", "A single combined paragraph"], correctIndex: 0, explanation: "Every letter in this module runs on the same contract: three bullets, three paragraph jobs, printed order — informal changes the voice, never the plan.", from: "Analysing question requirements" },
          { question: "Which close belongs under 'Dear Kofi,'?", options: ["Love, followed by the writer's first name", "Yours faithfully, followed by the full name", "Yours sincerely, followed by a surname"], correctIndex: 0, explanation: "The informal pair runs first name to first name: any warm close plus the writer's first name, matching the greeting it answers.", from: "Tone" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "The prompt reads: 'Write to your friend Kofi, who has asked how you are settling in.' Which greeting and close are correct?",
        hints: ["What do you actually call your friends?"],
        options: [
          { id: "a", text: "Dear Kofi, ... Love," },
          { id: "b", text: "Dear Mr Kofi, ... Yours sincerely," },
          { id: "c", text: "Dear Sir or Madam, ... Yours faithfully," },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Dear Kofi, ... Love,",
          "Friends get first names and warm closes: 'Dear Kofi,' opens, any of 'Take care,' / 'Love,' / 'Best,' closes, with the writer's first name beneath.",
          "(b) hangs a title on a first name, which English never does; (c) greets a friend as a stranger, which is the register exactly reversed.",
        ),
        tags: ["gwriting", "letters", "informal", "pairs"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. A classmate drafted the opening of a letter to an old friend. Read it, then choose the line that should lead the reply.",
        hints: ["The phone test: would you say it to a friend, or to an office?"],
        passageTitle: "The stalled opening",
        passage:
          "Draft: 'Dear Odile, I am writing to inform you that I have relocated to a new city pursuant to a change of employment. I trust this finds you well. Please accept my apologies for the delay in my correspondence.' The classmate wants one line that opens the letter properly instead.",
        question: "Which line should open the reply?",
        options: [
          { id: "a", text: "How have you been? It was great to hear from you — sorry it's taken me so long to reply." },
          { id: "b", text: "I am pleased to report that the relocation proceeded satisfactorily, and I remain at your disposal." },
          { id: "c", text: "Greetings, friend! Long time no see, as they say, ha! Anyway, write back soon, yeah?" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "How have you been? It was great to hear from you — sorry it's taken me so long to reply.",
          "One line does three jobs: warmth ('great to hear from you'), contact ('how have you been?') and the apology folded inside — all in the voice a friend would recognise down a phone line.",
          "(b) is a formal letter wearing a friend's name; (c) has the warmth but no content — chatty without the business.",
        ),
        tags: ["gwriting", "letters", "informal", "openers"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Which sentence does the most work in an informal letter?",
        hints: [],
        options: [
          { id: "a", text: "The flat is very nice and the area is also nice, it is all generally pleasant." },
          { id: "b", text: "We've got a small flat on the top floor — creaky stairs, a view of the fishing boats, and a bakery on the corner." },
          { id: "c", text: "I am residing in accommodation of a satisfactory standard in a convenient location." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "We've got a small flat on the top floor — creaky stairs, a view of the fishing boats, and a bakery on the corner.",
          "Three concrete details let the reader see the place; in the informal register, pictures outperform every adjective, and the contraction keeps the voice honest.",
          "(a) says 'nice' twice and 'pleasant' once — praise with nothing in it; (c) is a formal letter reporting to a head office.",
        ),
        tags: ["gwriting", "letters", "informal", "detail"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Complete the warm opener.",
        sentence: "It was great to hear from you — sorry it's ___ me so long to reply; the new job swallowed my first month whole.",
        acceptedAnswers: ["taken"],
        hints: [],
        feedback: fb(
          "taken",
          "'Sorry it's taken me so long' folds a full apology into half a line: the reason rides in the next clause, and the register stays warm throughout.",
          "Forms of 'be' ('been') break the idiom — the chunk is 'take (someone) time', past participle 'taken'.",
        ),
        tags: ["gwriting", "letters", "informal", "openers"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Chatty is a voice, not an excuse.",
        question: "Whatever the register, what two things must an informal letter still deliver, like any other Task 1 letter?",
        acceptedAnswers: [
          "every bullet covered in its own paragraph, in the printed order — inside a consistent friendly register",
          "all three bullets, one paragraph each in order, held inside a warm register that never breaks",
          "full bullet coverage in ordered paragraphs, with the friendly voice held steady from greeting to close",
        ],
        keywords: ["bullet", "paragraph"],
        hints: [],
        feedback: fb(
          "Every bullet covered in its own paragraph, in the printed order — inside a consistent friendly register.",
          "The examiner marks the friendly letter on the same contract as the formal one: coverage and organisation first, register as the voice that carries them.",
          "Answers about 'sounding casual' alone have kept the voice and lost the letter.",
        ),
        tags: ["gwriting", "letters", "informal", "coverage"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Which sentence has no place in a letter to a friend?",
        hints: [],
        options: [
          { id: "a", text: "Anyway, the real news is that we've finally set a date." },
          { id: "b", text: "I regret to inform you that I have not yet replied due to pressures of work." },
          { id: "c", text: "Why not aim for the last weekend of the month?" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "I regret to inform you that I have not yet replied due to pressures of work.",
          "'I regret to inform you' belongs to head offices delivering unwelcome news; a friend gets the apology in the same breath as the excuse, with a picture in it.",
          "(a) is the chatty turnstile doing cohesive work, and (c) is an invitation phrased as a suggestion — both exactly this register's furniture.",
        ),
        tags: ["gwriting", "letters", "informal", "register"],
      }),
    ],
    homework: [
      "Collect three informal prompts and write only their openers and closes — warm line, apology or news in one breath, sign-off — ninety seconds each.",
      "Take a letter you have written to a friend and run the phone test line by line: mark anything you would never say aloud, then rewrite it warm.",
    ],
    assignment: {
      title: "Write an informal letter",
      instructions:
        "Using the pottery-exhibition situation planned in this lesson (or any informal prompt from your practice materials), write the complete letter: first-name greeting and warm close, one-line opener, the excuse short and honest, the disaster in concrete details, the invitation with its date and one line about why this friend specifically should come. Contractions throughout, formal furniture nowhere — and each bullet still in its own paragraph.",
      minWords: 150,
      maxWords: 200,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-complaint",
    title: "Writing complaints",
    description:
      "The firm-but-courteous complaint: facts first, impact second, remedy third — the order that keeps a reader cooperative. Complaint vocabulary at level volume, deadlines without threats, and a complete model letter to a retailer's head office about a printer that never worked.",
    objectives: [
      "order a complaint as facts, then impact, then remedy — never the reverse",
      "quote dates, reference numbers and failed calls as evidence, not as narrative",
      "deploy complaint vocabulary — faulty, unacceptable, refund, compensation — at level volume",
      "state the remedy as one dated request the reader can grant in a sentence",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "A complaint is a letter that must win something: a refund, a repair, an apology, a change of policy. The reader who can grant it is also the reader the anger must not alienate, so the craft is an order of operations. Facts first: what happened, when, with the reference numbers attached. Impact second: the measured sentence that names what the failure cost you. Remedy third: exactly what you want done, and by when. Melodrama spends the reader's goodwill; vagueness wastes it; the trained order earns it. This lesson builds the sequence, the vocabulary shelf, and a complete complaint about a printer that never worked.",
        beforeYouStart: [
          "You can choose and hold a letter's register from the recipient.",
          "You know the fixed phrases that carry unwelcome news at level volume.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "General Training Writing Task 1 — complaints appear across the registers, most often to a company's head office or a named manager"],
          ["Task & question types", "One prompt: a situation, three bullets — typically the fault, the effect and the demand — at least 150 words in about 20 minutes"],
          ["What is assessed", "Tone under pressure: measured language that insists without ever raising its voice"],
          ["Why this matters", "Untrained complaints narrate feelings; trained ones present a case — and the second is the one that gets the refund and the marks"],
        ],
      },
      { type: "heading", text: "Component 1 — The purpose defined: facts, impact, remedy" },
      {
        type: "text",
        text: "The sequence is the lesson. Facts: the letter opens with the item and the fault — 'I am writing to complain about a laser printer (order number 88412) purchased on 12 April, which has proved faulty since the day it arrived.' Dates, reference numbers, the calls made and the promises given: each is evidence, and evidence is what separates a complaint from a grumble. Impact: one measured paragraph on the consequences — 'I have had to pay for library printing and hand in one assignment late' — with the inconvenience named at level volume, because the moment the volume rises the reader stops deciding and starts defending. Remedy: a closing paragraph that asks for one thing, precisely, with a date — 'a full refund, including the toner and the library charges, within fourteen days'. The order matters in both directions: a letter that opens with its feelings has spent its evidence before presenting any.",
      },
      { type: "heading", text: "Component 2 — Reading the situation and choosing the register" },
      {
        type: "steps",
        title: "The three questions, complaint edition",
        intro: "The reading routine is unchanged — only the stakes feel higher:",
        steps: [
          { title: "Step 1: Who receives the complaint?", text: "A head office with no name takes the faithful pair; a named manager takes the sincere pair with her surname. The register is chosen first, as in every letter, because anger is no excuse for a mixed pair.", examples: [{ english: "'Write to the head office of the company' — no name, so 'Dear Sir or Madam' to 'Yours faithfully', however the writer feels.", note: "Register survives bad news." }] },
          { title: "Step 2: Which bullet is facts, which is impact, which is remedy?", text: "Complaint prompts almost always print them in that order, and the paragraphs follow the printed order like any other letter. Read each bullet for its genre: describe wants evidence, explain wants consequences, say what you want wants the ask.", examples: [{ english: "Bullet three, 'say what you want the company to do', is one ask with one date — not a wish list.", note: "The last bullet is a contract." }] },
          { title: "Step 3: What is the evidence list?", text: "Before drafting: the order number, the purchase date, the fault described plainly, every call made — with dates and what was promised — and any appointment that failed. The list is the letter's ammunition, and it is written in the margin, not invented mid-paragraph.", examples: [{ english: "'Two calls, both promising a callback, neither kept' — six words that do the work of a furious paragraph.", note: "Evidence compresses; emotion expands." }] },
          { title: "Step 4: What is the one remedy?", text: "Pick a single ask and attach a date to it. A reader grants one thing faster than three; a letter that demands a refund, a replacement, an apology and a voucher has given the reader a menu instead of an instruction.", examples: [{ english: "'Collect the printer and issue a full refund, including the toner and the library charges, within fourteen days' — one ask, three costs inside it, one deadline.", note: "One ask can carry several costs." }] },
        ],
      },
      { type: "heading", text: "Component 3 — The skeleton" },
      {
        type: "steps",
        title: "The five moves of a complaint",
        intro: "The standard frame, wearing its sternest suit:",
        steps: [
          { title: "Move 1: The greeting", text: "The pair the register demands — faithful for an unnamed office, sincere for a named manager — held steady no matter how the writer feels." },
          { title: "Move 2: The opening", text: "One sentence that names the item, the fault and the reference number: 'I am writing to complain about...'. The reader learns the whole case in the first line." },
          { title: "Move 3: The facts paragraph", text: "Purchase, fault, what you did, what they failed to do — in date order, in the plainest possible language, with every promise broken quoted plainly." },
          { title: "Move 4: The impact paragraph", text: "The shortest paragraph in the letter: consequences in two concrete clauses — money, time, marks — and not one adjective of feeling." },
          { title: "Move 5: The remedy and the close", text: "One ask, one date, then a courteous line that keeps the pressure: 'I trust this matter will be resolved without further delay.' The sign-off completes the pair." },
        ],
      },
      { type: "heading", text: "Component 4 — The language shelf" },
      {
        type: "example",
        title: "The complaint shelf, phrase by phrase",
        items: [
          { english: "The machine has proved faulty since the day it arrived.", note: "'Faulty' states the defect as a verdict; 'broken' complains, 'faulty' files a claim.", domain: "exam" },
          { english: "Despite two calls to your service line, I have received no response.", note: "'Despite' packs the whole runaround into one word: effort made, nothing returned.", domain: "work" },
          { english: "This level of service is unacceptable.", note: "The strongest sentence on the shelf, and still level: 'unacceptable' judges the service, never the person.", domain: "exam" },
          { english: "I am entitled to a full refund under the terms of the warranty.", note: "'Entitled' grounds the demand in rules rather than feelings — the word that turns a wish into a case.", domain: "everyday" },
          { english: "I have had to pay for library printing and hand in one assignment late, which has already affected my marks.", note: "Impact in two concrete clauses — money and marks; the facts carry the volume, so the adjectives can stay home.", domain: "school" },
          { english: "I would ask you to collect the printer and issue a full refund within fourteen days.", note: "The remedy sentence: one ask, one deadline, in that order — 'I would ask' is firm without a single raised voice.", domain: "work" },
          { english: "I trust this matter will be resolved without further delay. Yours faithfully, Jonathan Reyes", note: "The courteous close that keeps the pressure: trust, not threat — the last line a cooperative reader needs.", domain: "exam" },
        ],
      },
      { type: "heading", text: "Component 5 — The worked model letter" },
      {
        type: "four-skills",
        title: "Worked model — the printer that never worked",
        reading: {
          text: "The prompt as printed: 'Two months ago you bought a printer from an online retailer so that you could print study materials for an evening course. It has never worked properly, and a warranty repair visit was cancelled without notice. Write to the retailer's customer care department. In your letter, you should: describe the fault and what has happened since delivery; explain how the problem has affected your studies; say what you want the company to do and by when.' No name is given, so the faithful pair runs from edge to edge.",
          task: "Before writing: build the evidence list — dates, numbers, calls, the cancelled visit — and decide the one remedy.",
        },
        writing: {
          task: "Two months ago you bought a printer from an online retailer so that you could print study materials for an evening course. It has never worked properly, and a warranty repair visit was cancelled without notice. Write to the retailer's customer care department. In your letter: describe the fault and what has happened since delivery; explain how the problem has affected your studies; say what you want the company to do and by when. Write at least 150 words. You do NOT need to write any addresses.",
          guide: [
            "Greeting: Dear Sir or Madam, — no name given, faithful pair, held however the writer feels",
            "Opening: I am writing to complain about a laser printer (order number 88412) purchased from your website on 12 April ...",
            "The facts in date order: the set-up, the toner replaced at your own expense, two calls and the promised callback, the engineer who never came",
            "The impact, shortest paragraph: library printing, one assignment late, marks already affected",
            "The one remedy: collect the printer and issue a full refund, including the toner and the library charges, within fourteen days",
            "Close and sign-off: I trust this matter will be resolved without further delay ... Yours faithfully, + full name",
          ],
          model:
            "Dear Sir or Madam,\n\nI am writing to complain about a laser printer (order number 88412) purchased from your website on 12 April, which has proved faulty since the day it arrived.\n\nDespite careful set-up, the machine jams after every few sheets and leaves grey smudges across each page. I followed the troubleshooting guide, replaced the toner at my own expense, and telephoned your service line twice; on both occasions I was promised a callback that never came. A repair visit was then arranged for 7 June under the warranty, but the engineer did not arrive and no one contacted me.\n\nThe consequences have been serious. I am preparing for an evening course, and because I have no working printer I have had to pay for library printing and hand in one assignment late, which has already affected my marks.\n\nI would therefore ask you to collect the printer and issue a full refund, including the cost of the toner and the library charges, within fourteen days of this letter.\n\nI trust this matter will be resolved without further delay, and I look forward to your prompt reply.\n\nYours faithfully,\nJonathan Reyes",
        },
        listening: {
          script:
            "A complaint is a case, so the planning is a list, not a mood. Evidence first, in the margin: order number 88412, purchased 12 April, fault from day one — jams and grey smudges. Two calls, both promised a callback, neither kept. A repair visit on the 7th of June, engineer never arrived, no one contacted me. That list is the whole first paragraph, and it takes thirty seconds to write because it is already in date order. Impact next, and deliberately the shortest paragraph in the letter: library printing paid for, one assignment handed in late, marks already affected — two clauses, no adjectives of feeling, because the facts carry the volume. Remedy last, and only one: collect the printer, refund everything including the toner and the library charges, fourteen days. Not three asks competing — one ask the reader can grant in a single sentence. The register is the faithful pair, held from 'Dear Sir or Madam' to 'Yours faithfully', because anger is the worst editor of register.",
          task: "Listen once, then say which paragraph was deliberately the shortest, and why the remedy was one ask and not three.",
        },
        speaking: {
          task: "Present the case for this letter to a partner in sixty seconds: the evidence list, the two-clause impact, the one dated remedy.",
          frames: [
            "The case rests on four facts: the order, the fault, the calls, and the visit that failed",
            "The impact paragraph is two clauses: ..., and ...",
            "The remedy is one ask: ..., by ...",
            "The close trusts rather than threatens: I trust this matter will be ...",
          ],
          checklist: [
            "Did every fact carry a date or a number?",
            "Did the impact paragraph stay free of adjectives of feeling?",
            "Is the remedy one ask with one date?",
          ],
        },
      },
      { type: "heading", text: "Component 6 — Why this model works" },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Register", "The faithful pair from 'Dear Sir or Madam' to 'Yours faithfully', with the whole letter at the same level of formality between them"],
          ["Bullet coverage", "The fault, the consequences and the demand each own a paragraph, in the order printed — the reader can grant the remedy without hunting for it"],
          ["Organisation", "Facts arrive in date order as evidence; the impact paragraph is the shortest, because measured also means brief"],
          ["Language", "'Faulty', 'unacceptable', 'entitled' — verdicts at level volume, with not one adjective of feeling in the letter"],
          ["Tone", "The close trusts rather than threatens; the pressure lives in the deadline, never in the adjectives"],
        ],
      },
      { type: "heading", text: "Component 7 — Common mistakes" },
      {
        type: "mistakes",
        title: "The complaint trap catalogue",
        items: [
          { wrong: "This is an absolute disgrace and I am disgusted by your shameful company!", right: "This level of service is unacceptable, and I trust it will be resolved without further delay.", reason: "Melodrama reads as loss of control: the moment the letter shouts, the reader stops deciding and starts defending — the level verdict outperforms the insult every time." },
          { wrong: "Your products are rubbish and always have been.", right: "The machine jams after every few sheets and leaves grey smudges across each page.", reason: "A verdict without evidence is a grumble; the specific fault, dated and described, is a case the reader can act on." },
          { wrong: "I expect you to sort this out soon.", right: "I would ask you to collect the printer and issue a full refund within fourteen days.", reason: "'Sort this out' asks for nothing; a remedy must name the action and the date, or the reader has nothing to grant." },
          { wrong: "I am writing to say that unfortunately there is a bit of a problem with my order.", right: "I am writing to complain about a laser printer (order number 88412) purchased on 12 April.", reason: "'A bit of a problem' understates the case into the wastepaper basket; the opening should carry the item, the fault and the reference number." },
        ],
      },
      { type: "heading", text: "Component 8 — Practice planning" },
      {
        type: "steps",
        title: "Plan a second complaint — the birthday photographs",
        intro:
          "The situation: 'Last month you paid Framfield Studios, a local photographer, to cover your grandmother's eightieth birthday party. The photographs arrived three weeks after the promised date, and half of them are out of focus. In your letter, you should: describe the service you paid for and what was delivered; explain the impact on the family; state the remedy you want.' Plan, never draft:",
        steps: [
          { title: "Step 1: Register first, feelings second", text: "The studio owner is known by name — Mrs Oduya — so the sincere pair with her surname, and warmth rationed by professionalism. The register survives the bad news, exactly as it did in the formal model.", examples: [{ english: "'Dear Mrs Oduya' to 'Yours sincerely' — the pair held steady while the content stays firm.", note: "Anger is the worst editor of register." }] },
          { title: "Step 2: The evidence list", text: "The booking date, the price agreed, the delivery date promised, the delivery date kept, the focus fault — written in the margin before any prose exists. The list is the letter's ammunition.", examples: [{ english: "'Booked 4 May, promised for the 31st, arrived the 21st of the next month, half out of focus' — the whole case in one margin line.", note: "Evidence compresses; emotion expands." }] },
          { title: "Step 3: Impact at level volume", text: "The family's only complete group photograph of the grandmother with all four grandchildren is one of the blurred ones. State it once, plainly, and let the fact carry the volume — no adjectives of feeling anywhere near it.", examples: [{ english: "'The one photograph with all four grandchildren in it is among the blurred half' — the impact sentence needs nothing added.", note: "One true sentence outranks a paragraph of upset." }] },
          { title: "Step 4: The one remedy", text: "A partial refund of the fee, plus a framed reprint of the two sharpest group photographs, by a named date — one ask the owner can grant in a sentence, not a menu of demands.", examples: [{ english: "'A partial refund and one framed reprint of the sharp group photographs, by the end of the month' — two costs inside one ask.", note: "The ask is a single instruction." }] },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "List the evidence in the margin — dates, references, calls, failed appointments — because a complaint without evidence is a mood"],
          ["While the clock runs", "Write the facts paragraph in date order and the impact paragraph in the fewest words that still count"],
          ["If you are stuck", "Return to the evidence list; the next sentence is almost always the next date"],
          ["Final minutes", "Check that the remedy names one action and one date, and that no adjective of feeling survived the draft"],
        ],
      },
      {
        type: "summary",
        points: [
          "Facts, impact, remedy — in that order; the sequence is the argument.",
          "Evidence is the complaint's currency: dates, reference numbers, calls made and promises broken.",
          "Impact is measured in consequences — money, time, marks — never in adjectives of feeling.",
          "The remedy is one ask with one date; three asks compete, one ask gets granted.",
          "The courteous close keeps the pressure: it trusts, and never threatens.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per foundations lesson.",
        items: [
          { question: "What does the tone lesson say about strong feelings in a letter that must win something?", options: ["Name the feeling's consequences instead of raising the volume", "Let the anger show once, then apologise for it", "Hide the feeling entirely and pretend nothing is wrong"], correctIndex: 0, explanation: "Measured language keeps the reader deciding instead of defending; the consequences carry the volume that adjectives of feeling would only spend.", from: "Tone" },
          { question: "What does question analysis turn the three bullets of a complaint prompt into?", options: ["A paragraph plan — fault, effect, demand — in printed order", "A choice between the two strongest grievances", "One combined paragraph of general dissatisfaction"], correctIndex: 0, explanation: "The bullets are the letter's contract like any other: each takes a paragraph in the order printed, whatever the writer's temperature.", from: "Analysing question requirements" },
          { question: "Which word turns a wish into a case in the remedy paragraph?", options: ["'Entitled' — grounded in rules, not feelings", "'I would love' — warm but unenforceable", "'I regret' — for unwelcome news, not for demands"], correctIndex: 0, explanation: "'Entitled' anchors the demand in the warranty or the agreement; feelings ask, rules compel — and the reader knows the difference.", from: "Vocabulary" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "A complaint letter is assembled in which order?",
        hints: ["What does the reader need before being asked for anything?"],
        options: [
          { id: "a", text: "Facts first, then impact, then the remedy." },
          { id: "b", text: "The remedy first, to grab attention, then the story." },
          { id: "c", text: "The feelings first, so the reader understands the mood." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Facts first, then impact, then the remedy.",
          "Evidence before emotion, emotion before the ask: a reader who has seen the case in date order is already half-persuaded by the time the remedy arrives.",
          "(b) demands a refund the reader has no reason to grant yet; (c) hands the reader a mood with no case attached to it.",
        ),
        tags: ["gwriting", "letters", "complaint", "order"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Two classmates wrote impact sentences for the printer complaint. Read both, then choose the one that belongs in the letter.",
        hints: ["Impact is measured in consequences — money, time, marks — not in adjectives of feeling."],
        passageTitle: "The impact sentence",
        passage:
          "Situation: because the printer never worked, the writer paid for library printing and handed in one assignment late. Version A: 'I am utterly devastated and furious beyond words — this has ruined my whole semester and frankly your company should be ashamed!' Version B: 'I have had to pay for library printing and hand in one assignment late, which has already affected my marks.'",
        question: "Which version belongs in the letter?",
        options: [
          { id: "a", text: "Version A" },
          { id: "b", text: "Version B" },
          { id: "c", text: "Neither — impact should be left out of a complaint." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Version B",
          "Two concrete clauses — money and marks — carry all the volume the paragraph needs; the reader stops deciding the moment the letter starts shouting.",
          "(a) spends the reader's goodwill on the writer's feelings; (c) forgets that the middle bullet asks for exactly this paragraph.",
        ),
        tags: ["gwriting", "letters", "complaint", "impact"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Which opening sentence carries the strongest case?",
        hints: [],
        options: [
          { id: "a", text: "I am writing to complain about a laser printer (order number 88412) purchased on 12 April, which has proved faulty since the day it arrived." },
          { id: "b", text: "I am writing to say that unfortunately there is a bit of a problem with my order." },
          { id: "c", text: "Your company has let me down again and again and I have had enough!" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "I am writing to complain about a laser printer (order number 88412) purchased on 12 April, which has proved faulty since the day it arrived.",
          "Item, reference number, date and verdict in one sentence: the reader learns the whole case in the first line, which is exactly what a busy complaints desk hopes for.",
          "(b) understates the case into the wastepaper basket, and (c) opens with feelings the reader has no case to attach them to.",
        ),
        tags: ["gwriting", "letters", "complaint", "openers"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Complete the remedy sentence.",
        sentence: "The machine has proved faulty since the day it arrived, so I would ask you to collect it and issue a full ___ within fourteen days.",
        acceptedAnswers: ["refund"],
        hints: [],
        feedback: fb(
          "refund",
          "The remedy sentence wants the noun that names the action: 'issue a full refund' — one ask, one deadline, and the verb 'issue' already implies the company's part in it.",
          "'Sorry' or 'apology' would name the wrong remedy; the letter has already accepted that words are not what it is asking for.",
        ),
        tags: ["gwriting", "letters", "complaint", "remedy"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. The order of operations.",
        question: "Name the three moves of a complaint letter, in the order they arrive.",
        acceptedAnswers: [
          "facts first, then impact, then the remedy",
          "state the facts, then the consequences, then what you want done",
          "the evidence, then the impact on you, then the single dated remedy",
        ],
        keywords: ["facts", "impact", "remedy"],
        hints: [],
        feedback: fb(
          "Facts first, then impact, then the remedy.",
          "The sequence is the argument: evidence persuades, consequences justify, and the remedy arrives once the reader is already half-convinced.",
          "Answers that put the remedy or the feelings first have spent the case before presenting it.",
        ),
        tags: ["gwriting", "letters", "complaint", "order"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Which sentence keeps a complaint cooperative?",
        hints: [],
        options: [
          { id: "a", text: "I trust this matter will be resolved without further delay." },
          { id: "b", text: "Sort it out immediately or I will be contacting a lawyer." },
          { id: "c", text: "I suppose I shouldn't really complain, it's not that important." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "I trust this matter will be resolved without further delay.",
          "The close that trusts keeps the pressure and the reader's goodwill at once: it expects action, and it leaves the reader free to provide it.",
          "(b) turns a case into a fight the reader must win, and (c) withdraws the case the evidence had already built.",
        ),
        tags: ["gwriting", "letters", "complaint", "tone"],
      }),
    ],
    homework: [
      "Collect three complaint prompts and write only their evidence lists — dates, references, calls, failed appointments — one margin column each.",
      "Take any complaint letter you have written and highlight every adjective of feeling; replace each with the concrete consequence it was standing in for.",
    ],
    assignment: {
      title: "Write a letter of complaint",
      instructions:
        "Using the birthday-photographs situation planned in this lesson (or any complaint prompt from your practice materials), write the complete letter: the pair the register demands, an opening that names the item and the fault with its reference details, the evidence paragraph in date order, the impact paragraph in two concrete clauses, and one remedy with one date. No melodrama, no threats — and the close trusts rather than threatens.",
      minWords: 150,
      maxWords: 200,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-request",
    title: "Making requests",
    description:
      "Asking for information or action: context before the ask, the would/could politeness ladder, the exact specification — what, which day, by when — and gratitude that lands. Complete model letter: a shift swap asked of a manager.",
    objectives: [
      "give the reader the context before the ask — never a bare request",
      "climb the politeness ladder one rung at a time: Could you possibly...? / Would it be possible...? / I would appreciate it if...",
      "specify the request exactly: what is needed, which day, and by when an answer is required",
      "end with gratitude earned by how easy the letter made it to say yes",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "A request is a letter that asks a busy person for something — information, permission, a change, a favour — and its success is decided by the order of its sentences. Context first: the reader needs the situation before the ask, or the ask arrives with no reason attached to it. Then the request itself, softened by the would/could ladder and specified to the day: not 'some time next week', but 'the last Saturday of next month'. Then the offer that makes yes cheaper, and the by-when that lets both sides plan. Gratitude comes last, where it lands. This lesson builds the ladder, the specification habit, and a complete model that asks a manager for a shift swap.",
        beforeYouStart: [
          "You can set a letter's register from the recipient before writing.",
          "You know the fixed polite chunks of the shelves, and how they soften an ask.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "General Training Writing Task 1 — request letters travel across the registers: a manager (semi-formal), an office (formal), a friend (informal)"],
          ["Task & question types", "One prompt: a situation, three bullets — typically the context, the ask and the arrangement — at least 150 words in about 20 minutes"],
          ["What is assessed", "Politeness with precision: the ask must be courteous, exact and easy to grant"],
          ["Why this matters", "A vague request forces the reader to write back with questions; a specified one gets a one-line yes — which is also what the examiner rewards"],
        ],
      },
      { type: "heading", text: "Component 1 — The purpose defined: context, ask, offer, by-when" },
      {
        type: "text",
        text: "The request letter runs on a simple economy: the reader's yes is cheaper when the letter has already answered every question the yes would raise. Context comes first — a sentence or two of situation that makes the ask make sense: 'my cousin's wedding has just been confirmed for that date'. The ask itself climbs the politeness ladder — 'Could you possibly...?', 'Would it be possible to...?', 'I would appreciate it if you could...' — and one rung is enough: two rungs in one sentence is begging. Then the specification: the exact day, the exact swap, the exact information wanted. Then the offer — what the writer will do to make it easy: 'I'd happily cover the early delivery that week'. The by-when closes the business ('by the end of this week'), and gratitude lands in the last line, after it has been earned. A request that follows the economy reads as considerate; one that ignores it reads as work.",
      },
      { type: "heading", text: "Component 2 — Reading the situation" },
      {
        type: "steps",
        title: "The three questions, request edition",
        intro: "The routine never changes; the request adds one question of its own:",
        steps: [
          { title: "Step 1: Who is being asked?", text: "A manager takes the sincere pair and a surname; an office takes the faithful pair; a friend takes a first name and a warm close. The register sets which rung of the ladder the ask may stand on.", examples: [{ english: "'Write to your manager, Ms Danso' — the sincere pair, one human line, and an ask that never begs.", note: "The ladder has rungs for every register." }] },
          { title: "Step 2: Which bullets are context, which is the ask?", text: "Request prompts usually print the context first and the ask second, and the paragraphs follow the printed order. Read each bullet for its genre: explain wants the situation, ask wants the specification.", examples: [{ english: "'Ask for a change to your shift' becomes one sentence: which shift, for which date, swapped with what.", note: "The ask bullet is a specification sheet." }] },
          { title: "Step 3: What will make yes easier?", text: "The offer: what the writer can do, give up or arrange — covering another shift, coming early, bringing equipment. Requests that carry their own solution are granted faster than requests that only present problems.", examples: [{ english: "'I'd happily cover the early delivery that week' — the give sitting beside the ask in the same paragraph.", note: "The offer halves the reader's work." }] },
          { title: "Step 4: What does the writer need in order to plan?", text: "The by-when. Without it the request floats: the writer cannot book travel, the reader cannot diary the change, and the letter ends without its business being closed.", examples: [{ english: "'Could you let me know by the end of this week?' — a deadline that serves both sides, stated as a question.", note: "The by-when is part of the ask, not an afterthought." }] },
        ],
      },
      { type: "heading", text: "Component 3 — The skeleton" },
      {
        type: "steps",
        title: "The five moves of a request",
        intro: "The standard frame, at its most considerate:",
        steps: [
          { title: "Move 1: The greeting", text: "The pair the register demands — and, in the semi-formal room, one human line before any business." },
          { title: "Move 2: The context paragraph", text: "The situation that makes the ask reasonable, told in a sentence or two — the wedding, the course, the trip. The reader decides here whether the ask deserves a hearing." },
          { title: "Move 3: The ask paragraph", text: "One rung of the ladder, the specification, and the offer: which day, what change, what the writer gives back. All three in one paragraph, none of them competing." },
          { title: "Move 4: The by-when", text: "A deadline stated as a question or a courteous line, with the reason attached: 'so that I can confirm travel with my family'." },
          { title: "Move 5: Gratitude and sign-off", text: "Thanks that acknowledge the reader's situation — 'I know it's a busy season' — then the pair's second half and the name." },
        ],
      },
      { type: "heading", text: "Component 4 — The language shelf" },
      {
        type: "example",
        title: "The request shelf, phrase by phrase",
        items: [
          { english: "Could you possibly hold the room until Friday?", note: "The top rung of the ladder: 'possibly' doubles the courtesy of a question that is already asking.", domain: "work" },
          { english: "Would it be possible to move the visit to the Sunday morning instead?", note: "'Instead' hands the reader a ready alternative — requests that carry their own solution are answered faster.", domain: "everyday" },
          { english: "I would appreciate it if you could confirm by the end of the week.", note: "The flat, adult rung: no question mark, maximum courtesy, and a deadline riding inside the courtesy.", domain: "work" },
          { english: "If it's any help, we could bring our own chairs and table.", note: "The offer: readers grant the easiest available version of yes, and the offer builds it for them.", domain: "social" },
          { english: "I'd be grateful if you could let me know one way or the other by the 14th.", note: "'One way or the other' releases the reader from having to say yes — which, paradoxically, makes yes more likely.", domain: "everyday" },
          { english: "To make up the difference, I'd happily cover the early delivery that week.", note: "The compensation offer in a shift swap: the give balanced against the ask, in the same breath.", domain: "work" },
          { english: "Thank you in advance — I know it's a busy season for you. Yours sincerely, Luca Moreau", note: "Gratitude that lands: it acknowledges the reader's situation instead of taking the favour for granted.", domain: "exam" },
        ],
      },
      { type: "heading", text: "Component 5 — The worked model letter" },
      {
        type: "four-skills",
        title: "Worked model — the wedding and the rota",
        reading: {
          text: "The prompt as printed: 'You work part-time in a bookshop. Your cousin's wedding has just been confirmed for the last Saturday of next month — a day you are normally rostered to work. Write to your manager, Ms Danso. In your letter, you should: explain the situation and why the day matters to you; request a specific change to your shift; suggest how you would make up the time, and say when you need an answer.' The reader is named, so the sincere pair runs under one human line.",
          task: "Before writing: name the rung, the specification and the offer — and decide the by-when and its reason.",
        },
        writing: {
          task: "You work part-time in a bookshop. Your cousin's wedding has just been confirmed for the last Saturday of next month — a day you are normally rostered to work. Write to your manager, Ms Danso. In your letter: explain the situation and why the day matters to you; request a specific change to your shift; suggest how you would make up the time, and say when you need an answer. Write at least 150 words. You do NOT need to write any addresses.",
          guide: [
            "Greeting and human line: Dear Ms Danso, ... I hope you had a good break over the bank holiday",
            "The context: the wedding is confirmed for the last Saturday of next month, and ...",
            "The ask on one rung: I would be very grateful if I could be excused from that shift, or moved to the Friday evening or the Sunday instead",
            "The offer: to make up the difference, I'd happily cover the early delivery that week ...",
            "The by-when with its reason: could you let me know by the end of this week? That would give me time to ...",
            "Gratitude and sign-off: Thank you very much — I really appreciate you considering this. Yours sincerely, + name",
          ],
          model:
            "Dear Ms Danso,\n\nI hope you had a good break over the bank holiday. I'm writing about the rota for the last Saturday of next month, and I'd like to ask a favour connected with it.\n\nMy cousin's wedding has just been confirmed for that date. I've been asked to read a poem at the ceremony — my grandmother's request, and she doesn't take no for an answer — so I would be very grateful if I could be excused from that Saturday shift, or moved to the Friday evening or the Sunday instead.\n\nTo make up the difference, I'd happily cover the early stock delivery on two mornings that week, or take on the late closing shift the following Saturday, whichever helps the rota most. Sana has already said she would swap with me if that makes the schedule easier.\n\nCould you let me know your decision by the end of this week? That would give me time to confirm travel with my family and hand over anything on my Saturday list in good time.\n\nThank you very much — I really appreciate you considering this.\n\nYours sincerely,\nLuca Moreau",
        },
        listening: {
          script:
            "A request is a letter that has already answered its own questions, so the plan is four lines. Context: the wedding, on the last Saturday of next month, and one line that says why the day matters — the poem, the grandmother's request; a reason with a smile in it, but a reason. The ask, on one rung of the ladder only: 'I would be very grateful if' — and then the specification: excused from the Saturday, or moved to the Friday evening, or the Sunday; three versions of yes, offered ready-made. The offer: cover the early delivery twice that week, or take the late closing the following Saturday — the give named beside the ask, so the reader weighs them together. The by-when: end of this week, with its reason — travel to confirm with the family. And gratitude last, one line, because the letter has already made yes cheap; the thanks just acknowledges it. One rung per ask, one paragraph per bullet, and not one sentence of begging anywhere.",
          task: "Listen once, then name the rung the ask stood on, and the three versions of yes the specification offered.",
        },
        speaking: {
          task: "Walk a partner through this request in sixty seconds: context, rung, specification, offer, by-when.",
          frames: [
            "The context paragraph explains ..., because the reader needs it before the ask",
            "The ask stands on one rung: ...",
            "The specification offers three versions of yes: ..., ..., or ...",
            "The by-when is ..., and its reason is ...",
          ],
          checklist: [
            "Did the context arrive before the ask?",
            "Did the ask use exactly one rung of the ladder?",
            "Does the by-when carry its reason?",
          ],
        },
      },
      { type: "heading", text: "Component 6 — Why this model works" },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Register", "Surname greeting, 'Yours sincerely' beneath — a human line, then business, with contractions thinning as the letter gets serious"],
          ["Bullet coverage", "The situation, the specific change and the make-up arrangement each own a paragraph, in the order printed"],
          ["Organisation", "Context arrives before the ask, so the request never has to explain itself; the by-when closes the letter's business"],
          ["Language", "One rung per ask — 'I would be very grateful if' — with the offer ('I'd happily cover') making yes cheaper"],
          ["Tone", "The poem line earns the smile, the deadline keeps it professional — a favour asked like a colleague, not begged like a stranger"],
        ],
      },
      { type: "heading", text: "Component 7 — Common mistakes" },
      {
        type: "mistakes",
        title: "The request trap catalogue",
        items: [
          { wrong: "I need Saturday off. Let me know asap.", right: "I'm writing about the rota for the last Saturday of next month; I'd like to ask a favour connected with it.", reason: "A bare request with no context reads as a demand note; the reader needs the situation first, and 'asap' is not a date." },
          { wrong: "I know this is a huge imposition and I completely understand if you'd rather not, it's just that I feel terrible even asking.", right: "I would be very grateful if I could be excused from that shift, or moved to the Friday evening instead.", reason: "Begging spends the reader's goodwill on the writer's nerves; one courteous rung with an alternative is politer than a paragraph of apologies." },
          { wrong: "Sometime that week would be great, or whenever suits you really.", right: "Could you let me know your decision by the end of this week?", reason: "'Sometime' pushes the planning onto the reader; a specified request names the day and the deadline, which is also what the examiner rewards." },
          { wrong: "Cheers, Luca.", right: "Yours sincerely, Luca Moreau", reason: "However warmly the favour was asked, the manager is still a manager: the semi-formal letter closes with the pair's second half and a name it can file." },
        ],
      },
      { type: "heading", text: "Component 8 — Practice planning" },
      {
        type: "steps",
        title: "Plan a second request — the garden centre",
        intro:
          "The situation: 'Your gardening club — twelve members — wants to visit Ahn's Garden Centre one Sunday morning before opening hours, to photograph the stock and buy in bulk for the club's autumn plot. In your letter to the owner, Mr Ahn, you should: explain what the club is and why his centre; ask for the visit, with a date and numbers; say when you need an answer, and ask about parking.' Plan, never draft:",
        steps: [
          { title: "Step 1: Register and reader", text: "A named owner known only by role: the sincere pair, one human line at most, and an ask that never begs. Mr Ahn runs a business, so every question must be easy to answer with a line.", examples: [{ english: "'Dear Mr Ahn' to 'Yours sincerely' — the frame settled first, the favour designed inside it.", note: "The register sets the rung before the ask is written." }] },
          { title: "Step 2: Context before the ask", text: "One paragraph on the club — what it is, how many members, why his centre specifically — before any question appears. The context is the case for the request; without it the ask is just an interruption.", examples: [{ english: "'We buy as a club every autumn, and your centre is the only one that stocks the heritage seed range' — the reason his answer should be yes.", note: "Flattery is context only when it is specific." }] },
          { title: "Step 3: The ask, specified", text: "Sunday 12 October, eight to ten in the morning, twelve members, three cars — each question in its own sentence, so the owner can answer with yes or no, not with an essay.", examples: [{ english: "'Sunday 12 October, 8 to 10 a.m., twelve members' — the visit is specified to the half-hour and the head-count.", note: "Specification is a service to the reader." }] },
          { title: "Step 4: The by-when, with its reason", text: "An answer by the end of September, because the club needs to print the schedule; the reason is the club's calendar, not the writer's convenience. Gratitude lands in the last line, after the letter has made yes cheap.", examples: [{ english: "'By the end of September, so that the schedule can go to the printer' — a deadline the reader can respect because it is explained.", note: "Every by-when rides on a reason." }] },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Name the reader and the rung — manager, office or friend sets the ladder — then list what the yes needs: date, numbers, deadline"],
          ["While the clock runs", "Context paragraph first, ask paragraph second; if the ask is long, split it into one question per sentence"],
          ["If you are stuck", "Write the offer — what you can do to make it easy — and the ask will finish itself around it"],
          ["Final minutes", "Check the by-when appears once with its reason; then read the gratitude line: does it acknowledge the reader, or only the writer's relief?"],
        ],
      },
      {
        type: "summary",
        points: [
          "Context before the ask: a request that explains itself is granted; one that doesn't is queried.",
          "One rung of the ladder per ask — 'Could you possibly', 'I would appreciate it if' — because two rungs is begging.",
          "Specify to the day: the date, the numbers, and the deadline for the answer.",
          "The offer makes yes cheaper: cover a shift, bring chairs, come early — the give sits beside the ask.",
          "Gratitude lands last, once the letter has already made it easy to grant.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per foundations lesson.",
        items: [
          { question: "What does the tone lesson call politeness that overdoes itself?", options: ["Begging — two rungs of the ladder where one would do", "Formality — the safest register in any letter", "Brevity — short requests read as rude"], correctIndex: 0, explanation: "Politeness past its proper level stops being courtesy and becomes a burden the reader has to console the writer out of; one rung, cleanly placed, is the mark of control.", from: "Tone" },
          { question: "In a request prompt, what does question analysis separate first?", options: ["The context from the ask — which paragraph explains and which requests", "The greeting from the sign-off", "The reader's name from the reader's role"], correctIndex: 0, explanation: "The bullets print the context before the ask, and the paragraphs follow: the explanation paragraph earns the request paragraph its hearing.", from: "Analysing question requirements" },
          { question: "Which sentence specifies a request to the expected standard?", options: ["Could you let me know by Friday the 14th, either way?", "Let me know sometime soon if that's ok.", "I'd love it if something could be arranged at some point."], correctIndex: 0, explanation: "The specification carries the day, the date and the freedom to refuse: 'either way' releases the reader, which is what makes the deadline polite.", from: "Vocabulary" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "Why does a request letter open with the context rather than the ask?",
        hints: ["What has the reader got before the first sentence is read?"],
        options: [
          { id: "a", text: "Because the ask makes sense only once the reader knows the situation behind it." },
          { id: "b", text: "Because delays flatter the reader and build suspense." },
          { id: "c", text: "Because the exam deducts marks for early asks." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Because the ask makes sense only once the reader knows the situation behind it.",
          "A request with context reads as a case; without context it reads as a demand. The context paragraph is where the reader decides whether the ask deserves a hearing.",
          "(b) is decoration mistaken for strategy, and (c) is folklore — the rule is about persuasion, not about the clock.",
        ),
        tags: ["gwriting", "letters", "request", "order"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Read the draft ask below, then choose the sentence that should carry the favour instead.",
        hints: ["One rung of the ladder, with the specification riding beside it."],
        passageTitle: "The over-apologetic ask",
        passage:
          "Draft: 'I am so, so sorry to bother you with this, and I fully understand if it's impossible, and please don't feel any pressure at all, I honestly hate myself for even asking, but is there any chance at all that maybe, possibly, someone could perhaps cover that Saturday? No worries either way, honestly!' The manager just needs one sentence that carries the ask.",
        question: "Which sentence should carry the ask?",
        options: [
          { id: "a", text: "I would be very grateful if I could be excused from that Saturday shift, or moved to the Friday evening or the Sunday instead." },
          { id: "b", text: "If it's not too much trouble, and only if you're sure, and only if it's convenient, might I possibly be permitted to perhaps be absent?" },
          { id: "c", text: "I won't be in on Saturday — family thing. I'll make it up some other time, details to follow." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "I would be very grateful if I could be excused from that Saturday shift, or moved to the Friday evening or the Sunday instead.",
          "One rung of the ladder, three versions of yes offered ready-made: the reader can grant the nearest one without writing back a single question.",
          "(b) is the draft's begging compressed but still begging; (c) announces instead of asking, and defers the offer the bullet asked for.",
        ),
        tags: ["gwriting", "letters", "request", "ladder"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Which line is the offer that makes yes cheaper?",
        hints: [],
        options: [
          { id: "a", text: "If it's any help, we could bring our own chairs and table." },
          { id: "b", text: "We would also need chairs and a table, preferably nice ones." },
          { id: "c", text: "Chairs and tables have always been a problem, but never mind." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "If it's any help, we could bring our own chairs and table.",
          "The offer answers the question the ask would otherwise raise: readers grant the easiest available version of yes, and the offer builds that version for them in advance.",
          "(b) adds demands instead of removing them, and (c) raises a problem it then abandons — the opposite of an offer.",
        ),
        tags: ["gwriting", "letters", "request", "offer"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Complete the ladder chunk.",
        sentence: "I would ___ it if you could confirm by the end of the week, either way.",
        acceptedAnswers: ["appreciate"],
        hints: [],
        feedback: fb(
          "appreciate",
          "'I would appreciate it if you could' is the flat, adult rung of the ladder: no question mark, full courtesy, and the deadline riding inside the chunk itself.",
          "'Enjoy' or 'like' in that slot breaks the fixed phrase — the chunk is learned whole or not at all.",
        ),
        tags: ["gwriting", "letters", "request", "ladder"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. The specification.",
        question: "Name the three things a specified request always carries, beyond the courtesy.",
        acceptedAnswers: [
          "what is wanted, exactly when, and by when an answer is needed",
          "the ask itself, the precise day or date, and the deadline for the reply",
          "what is being requested, the date it concerns, and the by-when for the decision",
        ],
        keywords: ["when", "answer"],
        hints: [],
        feedback: fb(
          "What is wanted, exactly when, and by when an answer is needed.",
          "The specification is a service to the reader: the day can be diaried, the numbers counted, and the deadline planned around — courtesy without precision just moves the work back onto the reader.",
          "Answers that stop at 'being polite' have kept the manner and lost the means of granting.",
        ),
        tags: ["gwriting", "letters", "request", "specification"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Which close makes gratitude land?",
        hints: [],
        options: [
          { id: "a", text: "Thank you in advance — I know it's a busy season for you." },
          { id: "b", text: "Thanks in advance! (You'd better say yes, ha.)" },
          { id: "c", text: "I thank you for your consideration in this matter at this time." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Thank you in advance — I know it's a busy season for you.",
          "Gratitude lands when it acknowledges the reader's situation, not just the writer's relief; the busy-season clause is what makes the thanks feel observed rather than routine.",
          "(b) converts thanks into pressure, and (c) is a ceremony of words that thanks nobody in particular.",
        ),
        tags: ["gwriting", "letters", "request", "gratitude"],
      }),
    ],
    homework: [
      "Collect three request prompts and write only their ask paragraphs: one rung, the specification, the offer — no context, no close.",
      "Take any request letter you have written and highlight the by-when; if it lacks a reason, add the reason and watch the sentence change temperature.",
    ],
    assignment: {
      title: "Write a request letter",
      instructions:
        "Using the garden-centre situation planned in this lesson (or any request prompt from your practice materials), write the complete letter: the pair the register demands, the context paragraph before the ask, the ask on exactly one rung of the ladder, the specification to the day and the head-count, the offer that makes yes cheaper, and the by-when with its reason. Gratitude lands last — after the letter has made it easy to grant.",
      minWords: 150,
      maxWords: 200,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-invitation",
    title: "Invitations",
    description:
      "Inviting someone to something: the what-when-where core stated early, enthusiasm calibrated to the register, the logistics a guest actually needs, and a reply-by date with its reason. Complete model letter: a lake day for a friend; planning case: a retirement dinner for a regional director.",
    objectives: [
      "state what, when and where inside the first two paragraphs — before anything else competes",
      "calibrate enthusiasm to the register: gushing for a friend, measured warmth for a professional",
      "volunteer the logistics — transport, timing, what to bring — so the guest asks no questions back",
      "ask for a reply by a date, and give the reason for the date",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "An invitation is a letter that wants a yes — and the yes arrives faster when the letter answers the three questions every guest asks in the first five seconds: what is it, when is it, and where? State the core early, then calibrate the enthusiasm: a best friend's lake day can open with an exclamation; a manager's retirement dinner opens with measured warmth and a reason that guest specifically should come. Then the logistics — the train that gets there for ten, the blanket to bring, the forecast — and finally the reply-by date, with the reason for the date: 'the cheap tickets go up after the 14th'. This lesson builds the calibration, the logistics habit, and a complete model invitation to a friend.",
        beforeYouStart: [
          "You can set a letter's register from the recipient before writing.",
          "You know how to hold one register from greeting to sign-off without drifting.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "General Training Writing Task 1 — invitations appear in the informal register (friends) and the semi-formal (colleagues and neighbours you know)"],
          ["Task & question types", "One prompt: a situation, three bullet points — typically the occasion, the practical details and the reply — at least 150 words in about 20 minutes"],
          ["What is assessed", "Tone calibrated to the relationship: one skeleton serving very different warmth levels"],
          ["Why this matters", "Most candidates can be warm; the marks come from matching the warmth to the reader — and from logistics the guest can actually use"],
        ],
      },
      { type: "heading", text: "Component 1 — The purpose defined: core, calibration, logistics, reply-by" },
      {
        type: "text",
        text: "An invitation runs on four deliverables. The core: what, when and where, stated inside the first two paragraphs, because every other sentence in the letter is decoration until the guest knows the event exists. The calibration: enthusiasm matched to the relationship — a friend is told 'it wouldn't be the same without you', a professional senior is told 'we should be delighted if you could join us', and swapping those two sentences between readers is a register error in either direction. The logistics: transport, timing, what to bring — volunteered, not waited for, because a guest who has to ask questions back has been sent half an invitation. And the reply-by: a date with its reason attached ('the cheap tickets go up after the 14th'), so the deadline reads as helpful rather than demanding. The personal reason is the content that scores: an invitation informs, but the reason this guest specifically should come is what makes it an invitation at all.",
      },
      { type: "heading", text: "Component 2 — Reading the situation" },
      {
        type: "steps",
        title: "The three questions, invitation edition",
        intro: "The routine, with the guest at the centre of it:",
        steps: [
          { title: "Step 1: Who is the invitee?", text: "A friend takes a first name and full warmth; a professional senior takes a surname and measured delight. The relationship decides the temperature before a single sentence is written, exactly as in every other letter.", examples: [{ english: "'Invite your friend Juno' — exclamation legal, 'Love,' at the end; 'Invite the regional director, Ms Okonjo' — delight expressed, exclamation withheld.", note: "Calibration is decided at the reading stage." }] },
          { title: "Step 2: What is the occasion, and what is its real content?", text: "The occasion names the event; the real content is the reason this guest should come — the shared history, the thing the day loses without them. Name both, because the second is what the invitation is for.", examples: [{ english: "'A day at the lake' is the occasion; 'it wouldn't be the same without you' is the content.", note: "The reason is the invitation's payload." }] },
          { title: "Step 3: What logistics will the guest actually need?", text: "Times, transport, what to bring, the weather — the questions the guest would otherwise have to ask back. Volunteering them is the difference between an invitation and a hint.", examples: [{ english: "'The morning train gets us there for ten' — the transport answered before it is asked.", note: "Logistics are a gift, not a chore." }] },
          { title: "Step 4: What is the reply-by date, and why?", text: "Every invitation ends by asking for the answer, with a date and a reason for the date. 'Let me know whenever' leaves the planner without a plan — a guest respects a deadline that is explained.", examples: [{ english: "'By the 14th, because the cheap tickets go up after that' — the reason turns the deadline into a service.", note: "The reply-by is the invitation's last deliverable." }] },
        ],
      },
      { type: "heading", text: "Component 3 — The skeleton" },
      {
        type: "steps",
        title: "The five moves of an invitation",
        intro: "The standard frame, wearing its party clothes:",
        steps: [
          { title: "Move 1: The greeting", text: "The pair the register demands: first name and warmth for a friend, surname and restraint for a professional." },
          { title: "Move 2: The occasion", text: "The reason for the letter, stated with its date inside the first two paragraphs — 'a day at Ellermere Lake on Saturday the 21st'." },
          { title: "Move 3: The plan paragraph", text: "The core expanded: what happens, in order, with the transport built in. The guest should be able to picture the day." },
          { title: "Move 4: The logistics paragraph", text: "What to bring, what to expect, the forecast — each item volunteered with its reason, so the guest replies with an answer instead of a question." },
          { title: "Move 5: The reply-by and sign-off", text: "The date, the reason for the date, one warm closing line — 'say yes!' or 'we should be delighted' — then the pair's second half." },
        ],
      },
      { type: "heading", text: "Component 4 — The language shelf" },
      {
        type: "example",
        title: "The invitation shelf, phrase by phrase",
        items: [
          { english: "Guess what — the last essay went in this morning, so my studies are officially finished!", note: "The exclamation that earns its place: one per opening, and never in the semi-formal version of the letter.", domain: "study" },
          { english: "We'd love you to come — it wouldn't be the same without you.", note: "The personal reason is the content that scores: the guest is wanted, not merely informed.", domain: "social" },
          { english: "The plan is a day at Ellermere Lake on Saturday the 21st: the morning train gets us there for ten.", note: "What, when, where and the transport in one sentence — the core stated as the paragraph's first job.", domain: "travel" },
          { english: "We should be delighted if you could join us for dinner at the riverside room at seven.", note: "The semi-formal rung: delight expressed, exclamation withheld — the same warmth at lower volume.", domain: "work" },
          { english: "Could you bring the big striped blanket? Mine went missing at the last beach trip.", note: "The what-to-bring ask with a reason attached — guests bring things willingly when they know why.", domain: "everyday" },
          { english: "Let me know by the 14th and I'll book the seats — the cheap tickets go up after that.", note: "The reply-by date with its reason: a deadline the guest can respect because it is explained.", domain: "travel" },
          { english: "It's been far too long — say yes!", note: "The informal close that asks for the answer; the semi-formal version would end with anticipation instead.", domain: "social" },
        ],
      },
      { type: "heading", text: "Component 5 — The worked model letter" },
      {
        type: "four-skills",
        title: "Worked model — the lake day",
        reading: {
          text: "The prompt as printed: 'In three weeks' time you will finish your studies, and you have decided to mark the occasion with a day out at a lake outside the city. Write to a friend. In your letter, you should: describe what you have planned, saying when and where; give the practical details the friend needs — transport, timing, what to bring; ask for a reply by a certain date.' The guest is a friend, so the register runs warm from the first name to the close.",
          task: "Before writing: name the core, the personal reason, the two logistics items, and the reply-by date with its reason.",
        },
        writing: {
          task: "In three weeks' time you will finish your studies, and you have decided to mark the occasion with a day out at a lake outside the city. Write to a friend. In your letter: describe what you have planned, saying when and where; give the practical details the friend needs — transport, timing, what to bring; ask for a reply by a certain date. Write at least 150 words. You do NOT need to write any addresses.",
          guide: [
            "Greeting: Dear Juno, — first name in, one exclamation to open and no more",
            "The occasion with its core: a day at Ellermere Lake on Saturday the 21st — and it wouldn't be the same without you",
            "The plan in order: the morning train for ten, a kayak for an hour or two, a picnic spot on the north shore",
            "The logistics volunteered: the striped blanket (mine went missing) and sunscreen (the forecast is glorious)",
            "The reply-by with its reason: let me know by the 14th — the cheap tickets go up after that",
            "Warm close and sign-off: it's been far too long — say yes! Love, + first name",
          ],
          model:
            "Dear Juno,\n\nGuess what — the last essay went in this morning, so my studies are officially finished! To celebrate, I'm planning a day at Ellermere Lake on Saturday the 21st, and it wouldn't be the same without you.\n\nThe plan is simple: the morning train gets us there for ten, we hire a kayak for an hour or two, and I've found a spot on the north shore for a picnic. There's an ice-cream farm on the walk back, which I'm told does a honey flavour you can't get anywhere else.\n\nTwo practical things. Could you bring the big striped blanket? Mine went missing at the last beach trip, and you're the only person I know with a proper one. Sunscreen too — the forecast is glorious.\n\nThe cheap tickets go up after the 14th, so let me know by then and I'll book the seats. It's been far too long — say yes!\n\nLove,\nNadia",
        },
        listening: {
          script:
            "An invitation lives or dies in its first two paragraphs, so the plan starts there. The core: a day at Ellermere Lake, Saturday the 21st — what, when, where, inside the first two paragraphs, with the transport built into the same sentence: the morning train, there for ten. The personal reason: 'it wouldn't be the same without you' — one line, and the guest stops being an audience and becomes the point of the day. Then the plan in order — kayak, picnic spot on the north shore, the ice-cream farm on the way back — one detail that gives the day its colour. The logistics get their own paragraph: the blanket, because mine went missing, and sunscreen, because the forecast is glorious; each item carries its reason, so nothing sounds like a list of chores. The reply-by is the 14th, and the reason is the reason: the cheap tickets go up after that. One exclamation in the whole letter, and the last line asks for the answer.",
          task: "Listen once, then say what the personal reason was, and why the reply-by date was the 14th.",
        },
        speaking: {
          task: "Pitch this invitation to a partner in sixty seconds: the core, the reason, the logistics, the reply-by.",
          frames: [
            "The core is ..., on ..., at ...",
            "The personal reason is the line: ...",
            "The logistics are volunteered: the ..., and the ...",
            "The reply-by is ..., because ...",
          ],
          checklist: [
            "Did what, when and where arrive inside the first two paragraphs?",
            "Did every logistics item carry its reason?",
            "Does the reply-by date come with its own explanation?",
          ],
        },
      },
      { type: "heading", text: "Component 6 — Why this model works" },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Register", "First-name greeting, 'Love,' beneath, one exclamation in the whole letter — warmth held at friend level throughout"],
          ["Bullet coverage", "The plan with its when and where, the practical details, and the reply by a date — a paragraph each, printed order kept"],
          ["Organisation", "What, when and where arrive inside the first two paragraphs; the logistics have their own paragraph, announced as 'Two practical things.'"],
          ["Language", "'It wouldn't be the same without you' gives the personal reason; the honey-flavour detail gives the day its colour"],
          ["Tone", "The reply-by date comes with its reason — the tickets — so the deadline reads as helpful, never as demanding"],
        ],
      },
      { type: "heading", text: "Component 7 — Common mistakes" },
      {
        type: "mistakes",
        title: "The invitation trap catalogue",
        items: [
          { wrong: "So anyway, loads has happened, the lake thing is on the 21st I think, more later!", right: "I'm planning a day at Ellermere Lake on Saturday the 21st — the morning train gets us there for ten.", reason: "The core buried under chat is the classic invitation failure: what, when and where must be findable in the first two paragraphs, not mined from the middle." },
          { wrong: "We should be most grateful should you deign to attend our humble gathering.", right: "We'd love you to come — it wouldn't be the same without you.", reason: "Ceremonial furniture aimed at a friend is a register error in reverse: warmth calibrated to the relationship is the entire skill." },
          { wrong: "Bring stuff. You know what kind of stuff.", right: "Could you bring the big striped blanket and sunscreen? The forecast is glorious.", reason: "A guest who has to guess the logistics asks questions instead of answering the invitation; what-to-bring is named, with reasons." },
          { wrong: "Let me know whenever.", right: "Let me know by the 14th and I'll book the seats — the cheap tickets go up after that.", reason: "'Whenever' leaves the planner without a plan; a reply-by date with its reason gets the answer while the tickets are still cheap." },
        ],
      },
      { type: "heading", text: "Component 8 — Practice planning" },
      {
        type: "steps",
        title: "Plan a second invitation — the retirement dinner",
        intro:
          "The situation: 'Your manager of eight years, Mr Ibarra, retires in June. The staff have arranged a farewell dinner at a riverside restaurant on the Friday of his last week, and you have been asked to write the invitation to the regional director, Ms Okonjo, who worked with Mr Ibarra for a decade but rarely visits your branch. In your letter, you should: invite her and say why she particularly should come; give the practical details — day, time, place, parking; ask for a reply by a date.' Plan, never draft:",
        steps: [
          { title: "Step 1: Calibrate first", text: "A professional senior: the sincere pair with her surname, measured warmth, and not one exclamation anywhere. The letter is warmer than business and cooler than friendship — and it stays there.", examples: [{ english: "'Dear Ms Okonjo' to 'Yours sincerely' — delight expressed in words, never in punctuation.", note: "The calibration is set before drafting." }] },
          { title: "Step 2: The reason she specifically should come", text: "The decade of shared projects with Mr Ibarra — one authentic sentence, hers alone. A general tribute could be sent to anyone; the specific memory is what makes it an invitation rather than an announcement.", examples: [{ english: "'The decade she and Mr Ibarra spent rebuilding the regional network' — the reason no other guest shares.", note: "The personal reason is the payload." }] },
          { title: "Step 3: The logistics, complete", text: "Friday 26 June, seven for half past, the riverside room, the staff car park at the rear, vegetarian options on request — every question she might ask back, answered in advance in its own sentence.", examples: [{ english: "'Seven for half past seven, riverside room, staff car park at the rear' — times, place and parking in one margin line.", note: "Logistics are volunteered, never waited for." }] },
          { title: "Step 4: The reply-by with its reason", text: "Numbers to the restaurant by the 12th, because the catering count has to close; the reason is the kitchen's calendar, not the writer's convenience. The close expresses anticipation, and the pair completes the letter.", examples: [{ english: "'By the 12th, so the kitchen can close the count' — a deadline the guest can respect because it is explained.", note: "Every reply-by rides on a reason." }] },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Name the relationship and set the warmth level; then list the guest's three questions — what, when, where — and the logistics that follow them"],
          ["While the clock runs", "State the core early and keep the enthusiasm inside the level you chose; one exclamation per letter is the ceiling"],
          ["If you are stuck", "Write the logistics paragraph — times, transport, what to bring — and the occasion will reappear around it"],
          ["Final minutes", "Check the reply-by date has its reason, and that no ceremonial furniture leaked into a friendly letter, or the reverse"],
        ],
      },
      {
        type: "summary",
        points: [
          "What, when, where — stated inside the first two paragraphs, before anything else competes for the guest's attention.",
          "Enthusiasm is calibrated: gushing for a friend, measured warmth for a professional — the skeleton never changes.",
          "The personal reason is the content that scores: the guest is wanted, not merely informed.",
          "Logistics are volunteered — times, transport, what to bring — each with its reason, so the guest asks no questions back.",
          "The reply-by date comes with its reason; a deadline explained is a deadline respected.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per foundations lesson.",
        items: [
          { question: "What must enthusiasm in a letter be matched to?", options: ["The relationship — calibrated, not uniform", "The occasion — bigger events need louder letters", "The examiner — who rewards the strongest feelings"], correctIndex: 0, explanation: "Warmth out of proportion to the relationship reads as an error in either direction: the tone lesson trains the dial, not the volume.", from: "Tone" },
          { question: "What does question analysis turn an invitation prompt's bullets into?", options: ["Occasion, logistics and reply — one paragraph each, in printed order", "A single friendly paragraph with everything mixed", "A choice of the two most exciting details"], correctIndex: 0, explanation: "The bullets are the letter's contract as always: the occasion paragraph, the logistics paragraph and the reply, each in its place.", from: "Analysing question requirements" },
          { question: "Why do concrete details outperform strong adjectives?", options: ["Specific pictures persuade; generic praise is noise", "Adjectives are grammatically risky", "Examiners dislike all feeling"], correctIndex: 0, explanation: "The honey-flavour detail and the sofa-bed line do the work that 'it will be great' never could — precision reads as sincerity.", from: "Vocabulary" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "What must an invitation state inside its first two paragraphs?",
        hints: ["What are the three things a guest asks in the first five seconds?"],
        options: [
          { id: "a", text: "What it is, when it is, and where it is." },
          { id: "b", text: "The full guest list and the seating plan." },
          { id: "c", text: "An apology for the short notice." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "What it is, when it is, and where it is.",
          "Every other sentence is decoration until the guest knows the event exists: the core lands early, with the transport often built into the same sentence.",
          "(b) is information the guest never asked for, and (c) is an apology no bullet requested.",
        ),
        tags: ["gwriting", "letters", "invitation", "core"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Read the two openings below, both written for the retirement dinner described in this lesson, then choose the one that belongs.",
        hints: ["Calibration: how warm may a letter to a regional director actually be?"],
        passageTitle: "Two openings, one dinner",
        passage:
          "Situation: the staff have arranged a farewell dinner for Mr Ibarra, and the invitation goes to the regional director, Ms Okonjo, who worked with him for a decade. Opening A: 'Dear Ms Okonjo, We should be delighted if you could join us for dinner at the riverside room at seven on Friday 26 June — Mr Ibarra's last week deserves the colleagues who built it with him.' Opening B: 'Dear Okonjo, Massive news — Ibarra's finally escaping! There's a do on the Friday, should be a laugh, come if you like, more details to follow I guess!'",
        question: "Which opening belongs in the letter?",
        options: [
          { id: "a", text: "Opening A" },
          { id: "b", text: "Opening B" },
          { id: "c", text: "Neither — a retirement dinner needs no invitation letter." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Opening A",
          "Measured warmth at semi-formal level: the sincere pair, the core with its date and time inside the first sentence, and the reason she specifically should come — the colleagues who built it with him.",
          "(b) greets a professional senior by bare surname, drifts into chat, and buries the core — three register errors in four lines.",
        ),
        tags: ["gwriting", "letters", "invitation", "calibration"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Which line gives the personal reason that makes an invitation an invitation?",
        hints: [],
        options: [
          { id: "a", text: "We'd love you to come — it wouldn't be the same without you." },
          { id: "b", text: "The event will commence at the previously stated time." },
          { id: "c", text: "There will be food, and also drinks, and possibly some music." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "We'd love you to come — it wouldn't be the same without you.",
          "The personal reason is the payload: it converts an announcement into an invitation, and it is the one sentence no other guest's letter could contain.",
          "(b) is an announcement, and (c) is an inventory — neither tells the guest why them.",
        ),
        tags: ["gwriting", "letters", "invitation", "reason"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Complete the reply-by line.",
        sentence: "Let me know by the 14th and I'll ___ the seats — the cheap tickets go up after that.",
        acceptedAnswers: ["book", "reserve"],
        hints: [],
        feedback: fb(
          "book / reserve",
          "The reply-by line carries the action the writer will take once the answer arrives: booking, and the reason for the date — the tickets — rides in the same breath.",
          "Verbs of hoping or wanting ('try', 'love') leave the deadline without its consequence, which is the reason the date exists.",
        ),
        tags: ["gwriting", "letters", "invitation", "reply-by"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. The guest's three questions.",
        question: "Name the three questions every guest asks in the first five seconds, which the invitation must answer early.",
        acceptedAnswers: [
          "what is it, when is it, and where is it",
          "what, when and where — the event, the date, the place",
          "what the occasion is, when it happens, and where it happens",
        ],
        keywords: ["what", "when", "where"],
        hints: [],
        feedback: fb(
          "What is it, when is it, and where is it.",
          "The core is a service to the guest: until those three are settled, every other sentence — the news, the colour, the warmth — is decoration.",
          "Answers listing logistics first have the supporting cast on stage before the play exists.",
        ),
        tags: ["gwriting", "letters", "invitation", "core"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Which reply-by line gets the answer?",
        hints: [],
        options: [
          { id: "a", text: "Let me know by the 14th and I'll book the seats — the cheap tickets go up after that." },
          { id: "b", text: "Please respond at your earliest convenience in due course." },
          { id: "c", text: "Let me know whenever — no rush at all, honestly." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Let me know by the 14th and I'll book the seats — the cheap tickets go up after that.",
          "A dated ask with its reason converts the deadline into a service: the guest respects the 14th because the reason is standing in plain sight next to it.",
          "(b) is a ceremony of words with no date in it, and (c) hands the planning to the guest — the opposite of an invitation's job.",
        ),
        tags: ["gwriting", "letters", "invitation", "reply-by"],
      }),
    ],
    homework: [
      "Collect three invitation prompts at three warmth levels — a friend, a neighbour, a professional — and write only their core sentences: what, when, where, plus transport.",
      "Take any invitation you have written and add the reason to every logistics item; then check the reply-by date carries its own.",
    ],
    assignment: {
      title: "Write an invitation",
      instructions:
        "Using the retirement-dinner situation planned in this lesson (or any invitation prompt from your practice materials), write the complete letter: the pair the register demands, the core with what, when and where inside the first two paragraphs, the personal reason this guest specifically should come, the logistics volunteered with their reasons, and a reply-by date with the reason for the date. Calibrate the warmth to the relationship — and one exclamation is the ceiling, even for a friend.",
      minWords: 150,
      maxWords: 200,
    },
  },
];
