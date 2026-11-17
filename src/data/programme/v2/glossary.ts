/**
 * Validated multilingual glossary (PROMPT 35).
 *
 * Every Urdu/Hindi string that appears in programme content MUST come from
 * this list — the authoring helper `gls()` looks entries up by their English
 * key and throws on anything missing, so unvalidated translations can never
 * reach the database. English remains the primary learning language; these
 * glosses are optional support for Urdu- and Hindi-speaking beginners.
 *
 * Translations are hand-written in standard educational register (Urdu in
 * Nastaliq script, Hindi in Devanagari) and reviewed as part of the
 * production checklist. Machine translation is never used.
 */

export interface GlossaryEntry {
  /** English source string (the lookup key). */
  english: string;
  /** Urdu gloss (اردو، Nastaliq script). */
  ur: string;
  /** Hindi gloss (हिन्दी, Devanagari script). */
  hi: string;
}

export const CONTENT_GLOSSARY: GlossaryEntry[] = [
  // ---- Core terminology -------------------------------------------------
  { english: "language", ur: "زبان", hi: "भाषा" },
  { english: "English", ur: "انگریزی", hi: "अंग्रेज़ी" },
  { english: "word", ur: "لفظ", hi: "शब्द" },
  { english: "letter", ur: "حرف", hi: "अक्षर" },
  { english: "sentence", ur: "جملہ", hi: "वाक्य" },
  { english: "alphabet", ur: "حروفِ تہجی", hi: "वर्णमाला" },
  { english: "vowel", ur: "حرفِ علت", hi: "स्वर" },
  { english: "consonant", ur: "حرفِ صامت", hi: "व्यंजन" },
  { english: "capital letter", ur: "بڑا حرف", hi: "बड़ा अक्षर" },
  { english: "small letter", ur: "چھوٹا حرف", hi: "छोटा अक्षर" },
  { english: "noun", ur: "اسم", hi: "संज्ञा" },
  { english: "verb", ur: "فعل", hi: "क्रिया" },
  { english: "adjective", ur: "صفت", hi: "विशेषण" },
  { english: "pronoun", ur: "ضمیر", hi: "सर्वनाम" },
  { english: "name", ur: "نام", hi: "नाम" },
  { english: "person", ur: "شخص", hi: "व्यक्ति" },
  { english: "place", ur: "جگہ", hi: "स्थान" },
  { english: "animal", ur: "جانور", hi: "जानवर" },
  { english: "thing", ur: "چیز", hi: "वस्तु" },
  { english: "sound", ur: "آواز", hi: "आवाज़" },
  { english: "example", ur: "مثال", hi: "उदाहरण" },
  { english: "practice", ur: "مشق", hi: "अभ्यास" },
  { english: "mistake", ur: "غلطی", hi: "गलती" },
  { english: "correct", ur: "درست", hi: "सही" },
  { english: "question", ur: "سوال", hi: "प्रश्न" },
  { english: "answer", ur: "جواب", hi: "जवाब" },
  { english: "number", ur: "عدد", hi: "संख्या" },
  { english: "colour", ur: "رنگ", hi: "रंग" },
  { english: "day", ur: "دن", hi: "दिन" },
  { english: "week", ur: "ہفتہ", hi: "सप्ताह" },
  { english: "month", ur: "مہینہ", hi: "महीना" },
  { english: "year", ur: "سال", hi: "साल" },
  { english: "family", ur: "خاندان", hi: "परिवार" },
  { english: "friend", ur: "دوست", hi: "दोस्त" },
  { english: "school", ur: "اسکول", hi: "स्कूल" },
  { english: "teacher", ur: "استاد", hi: "अध्यापक" },
  { english: "student", ur: "طالبِ علم", hi: "छात्र" },
  { english: "book", ur: "کتاب", hi: "किताब" },
  { english: "spelling", ur: "ہجے", hi: "वर्तनी" },
  { english: "short vowel", ur: "مختصر حرفِ علت", hi: "लघु स्वर" },
  { english: "long vowel", ur: "طویل حرفِ علت", hi: "दीर्घ स्वर" },
  { english: "word family", ur: "خاندانِ الفاظ", hi: "शब्द परिवार" },
  { english: "syllable", ur: "تقطیعِ کلمہ", hi: "शब्दांश" },

  // ---- Key teaching sentences (CH-01 – CH-04) ---------------------------
  {
    english: "English is a language. People speak it in many countries.",
    ur: "انگریزی ایک زبان ہے۔ لوگ بہت سے ممالک میں اسے بولتے ہیں۔",
    hi: "अंग्रेज़ी एक भाषा है। लोग कई देशों में इसे बोलते हैं।",
  },
  {
    english: "Communication means sharing ideas with other people.",
    ur: "رابطے کا مطلب دوسروں کے ساتھ خیالات کا تبادلہ کرنا ہے۔",
    hi: "संवाद का अर्थ है दूसरों के साथ विचारों का आदान-प्रदान करना।",
  },
  {
    english: "Listening, speaking, reading and writing are the four skills.",
    ur: "سننا، بولنا، پڑھنا اور لکھنا چار مہارتیں ہیں۔",
    hi: "सुनना, बोलना, पढ़ना और लिखना चार कौशल हैं।",
  },
  {
    english: "Spoken English is the English you hear.",
    ur: "بولی جانے والی انگریزی وہ ہے جو آپ سنتے ہیں۔",
    hi: "बोली जाने वाली अंग्रेज़ी वह है जो आप सुनते हैं।",
  },
  {
    english: "Written English is the English you read.",
    ur: "لکھی جانے والی انگریزی وہ ہے جو آپ پڑھتے ہیں۔",
    hi: "लिखी जाने वाली अंग्रेज़ी वह है जो आप पढ़ते हैं।",
  },
  {
    english: "A word is one or more letters with a meaning.",
    ur: "لفظ ایک یا زیادہ حروف کا ایسا مجموعہ ہے جس کا کوئی مطلب ہوتا ہے۔",
    hi: "शब्द एक या अधिक अक्षरों का ऐसा समूह है जिसका कोई अर्थ होता है।",
  },
  {
    english: "A sentence is a group of words that expresses a complete idea.",
    ur: "جملہ الفاظ کا ایسا مجموعہ ہے جو ایک مکمل خیال ظاہر کرے۔",
    hi: "वाक्य शब्दों का ऐसा समूह है जो एक पूरा विचार व्यक्त करता है।",
  },
  {
    english: "The English alphabet has 26 letters.",
    ur: "انگریزی حروفِ تہجی میں ۲۶ حروف ہیں۔",
    hi: "अंग्रेज़ी वर्णमाला में 26 अक्षर होते हैं।",
  },
  {
    english: "Every sentence starts with a capital letter.",
    ur: "ہر جملہ بڑے حرف سے شروع ہوتا ہے۔",
    hi: "हर वाक्य बड़े अक्षर से शुरू होता है।",
  },
  {
    english: "A noun is the name of a person, place, animal or thing.",
    ur: "اسم کسی شخص، جگہ، جانور یا چیز کے نام کو کہتے ہیں۔",
    hi: "संज्ञा किसी व्यक्ति, स्थान, जानवर या वस्तु के नाम को कहते हैं।",
  },
  {
    english: "Use a capital letter for the names of people and places.",
    ur: "لوگوں اور جگہوں کے ناموں کے لیے بڑا حرف استعمال کریں۔",
    hi: "लोगों और स्थानों के नाम के लिए बड़ा अक्षर प्रयोग करें।",
  },
  {
    english: "The word 'I' is always a capital letter.",
    ur: "لفظ 'I' ہمیشہ بڑے حرف سے لکھا جاتا ہے۔",
    hi: "शब्द 'I' हमेशा बड़े अक्षर से लिखा जाता है।",
  },
  {
    english: "The vowels are A, E, I, O and U.",
    ur: "حروفِ علت یہ ہیں: A، E، I، O اور U۔",
    hi: "स्वर अक्षर हैं: A, E, I, O और U।",
  },
  {
    english: "Consonants are all the other letters.",
    ur: "باقی تمام حروف حروفِ صامت ہیں۔",
    hi: "बाकी सभी अक्षर व्यंजन हैं।",
  },
  {
    english: "A short vowel makes a quick sound.",
    ur: "مختصر حرفِ علت ایک جلدی آواز بناتا ہے۔",
    hi: "लघु स्वर एक छोटी ध्वनि बनाता है।",
  },
  {
    english: "A long vowel says its own name.",
    ur: "طویل حرفِ علت اپنا نام بولتا ہے۔",
    hi: "दीर्घ स्वर अपना ही नाम बोलता है।",
  },
  {
    english: "Every word needs at least one vowel.",
    ur: "ہر لفظ میں کم از کم ایک حرفِ علت ضروری ہوتا ہے۔",
    hi: "हर शब्द में कम से कम एक स्वर ज़रूरी होता है।",
  },
  {
    english: "Listen first, then speak.",
    ur: "پہلے سنیں، پھر بولیں۔",
    hi: "पहले सुनिए, फिर बोलिए।",
  },
  {
    english: "Read the sentence out loud.",
    ur: "جملے زور سے پڑھیں۔",
    hi: "वाक्य ज़ोर से पढ़िए।",
  },
  {
    english: "A letter has a name and a sound.",
    ur: "ہر حرف کا ایک نام اور ایک آواز ہوتی ہے۔",
    hi: "हर अक्षर का एक नाम और एक ध्वनि होती है।",
  },
  {
    english: "A small mistake is not a problem. Keep trying.",
    ur: "چھوٹی غلطی کوئی مسئلہ نہیں۔ کوشش جاری رکھیں۔",
    hi: "छोटी गलती कोई समस्या नहीं है। कोशिश करते रहिए।",
  },
  {
    english: "Practice a little every day.",
    ur: "ہر دن تھوڑی مشق کریں۔",
    hi: "हर दिन थोड़ा अभ्यास करें।",
  },
  {
    english: "Sounds join together to make words.",
    ur: "آوازیں مل کر الفاظ بناتی ہیں۔",
    hi: "ध्वनियाँ मिलकर शब्द बनाती हैं।",
  },
  {
    english: "Letters join together to make words.",
    ur: "حروف مل کر الفاظ بناتے ہیں۔",
    hi: "अक्षर मिलकर शब्द बनाते हैं।",
  },
  {
    english: "Words join together to make sentences.",
    ur: "الفاظ مل کر جملے بناتے ہیں۔",
    hi: "शब्द मिलकर वाक्य बनाते हैं।",
  },

  // ---- Phonics terminology (CH-04 – CH-05) --------------------------------
  { english: "phonics", ur: "فونکس (حروف اور آوازوں کا تعلق)", hi: "फ़ोनिक्स (अक्षर और ध्वनि का संबंध)" },
  { english: "first sound", ur: "پہلی آواز", hi: "पहली ध्वनि" },
  { english: "last sound", ur: "آخری آواز", hi: "अंतिम ध्वनि" },
  { english: "to blend", ur: "آوازیں ملانا", hi: "ध्वनियाँ मिलाना" },
  { english: "to segment", ur: "آوازیں الگ کرنا", hi: "ध्वनियों को अलग करना" },
  { english: "rhyme", ur: "قافیہ", hi: "तुक" },
  { english: "digraph", ur: "ڈائیگراف (دو حروف، ایک آواز)", hi: "डिग्राफ (दो अक्षर, एक ध्वनि)" },
  { english: "beat", ur: "تھاپ", hi: "ताल" },

  // ---- Key teaching sentences (CH-04 – CH-05) -----------------------------
  {
    english: "Phonics connects letters to sounds.",
    ur: "فونکس حروف کو آوازوں سے جوڑتا ہے۔",
    hi: "फ़ोनिक्स अक्षरों को ध्वनियों से जोड़ता है।",
  },
  {
    english: "Reading uses letter sounds, not letter names.",
    ur: "پڑھنے کے لیے حروف کی آوازیں کام آتی ہیں، نہ کہ ان کے نام۔",
    hi: "पढ़ने के लिए अक्षरों की ध्वनियाँ काम आती हैं, न कि उनके नाम।",
  },
  {
    english: "Say the word slowly and listen for the first sound.",
    ur: "لفظ آہستہ بولیں اور پہلی آواز کو سنیں۔",
    hi: "शब्द धीरे बोलिए और पहली ध्वनि को सुनिए।",
  },
  {
    english: "Words that rhyme end with the same sound.",
    ur: "قافیہ ملانے والے الفاظ ایک ہی آواز پر ختم ہوتے ہیں۔",
    hi: "तुक वाले शब्द एक ही ध्वनि पर समाप्त होते हैं।",
  },
  {
    english: "Join the sounds to read the word.",
    ur: "لفظ پڑھنے کے لیے آوازیں ملا دیں۔",
    hi: "शब्द पढ़ने के लिए ध्वनियों को मिला दीजिए।",
  },
  {
    english: "Segment the word to spell it.",
    ur: "لفظ لکھنے کے لیے اس کی آوازیں الگ کریں۔",
    hi: "शब्द लिखने کे लिए उसकी ध्वनियों को अलग कीजिए।",
  },
  {
    english: "Guessing is not reading.",
    ur: "اندازہ لگانا پڑھنا نہیں ہے۔",
    hi: "अंदाज़ा लगाना पढ़ना नहीं है।",
  },
  {
    english: "Trust your ears, not your eyes.",
    ur: "اپنے کانوں کا بھروسہ کریں، آنکھوں کا نہیں۔",
    hi: "अपने कानों का भरोसा कीजिए, आँखों का नहीं।",
  },
  {
    english: "Do not add an extra vowel to a consonant sound.",
    ur: "کسی صامت آواز کے ساتھ اضافی حرفِ علت نہ لگائیں۔",
    hi: "किसी व्यंजन ध्वनि के साथ अतिरिक्त स्वर न जोड़ें।",
  },
  {
    english: "A word family shares the same ending.",
    ur: "ایک خاندان کے تمام الفاظ ایک ہی آخر پر ختم ہوتے ہیں۔",
    hi: "एक परिवार के सभी शब्द एक ही अंत पर समाप्त होते हैं।",
  },
  {
    english: "Two letters can make one sound.",
    ur: "دو حروف مل کر ایک آواز بناتے ہیں۔",
    hi: "दो अक्षर मिलकर एक ध्वनि बनाते हैं।",
  },
  {
    english: "A syllable is one beat of a word.",
    ur: "لفظ کی ایک تھاپ کو سلیبل کہتے ہیں۔",
    hi: "शब्द की एक ताल को शब्दांश कहते हैं।",
  },
  {
    english: "Clap once for each beat.",
    ur: "ہر تھاپ پر ایک تالی بجائیں۔",
    hi: "हर ताल पर एक ताली बजाइए।",
  },
  {
    english: "Read the word in one look.",
    ur: "لفظ کو ایک ہی نظر میں پڑھیں۔",
    hi: "शब्द को एक ही नज़र में पढ़िए।",
  },
  {
    english: "Say it slowly first, then fast.",
    ur: "پہلے آہستہ بولیں، پھر تیز۔",
    hi: "पहले धीरे बोलिए, फिर तेज़।",
  },
  {
    english: "In a blend, each letter keeps its own sound.",
    ur: "ملے ہوئے حروف اپنی الگ آوازیں رکھتے ہیں۔",
    hi: "मिले हुए अक्षर अपनी अलग ध्वनियाँ रखते हैं।",
  },

  // ---- First vocabulary words (CH-06) --------------------------------------
  { english: "mother", ur: "ماں", hi: "माँ" },
  { english: "father", ur: "باپ", hi: "पिता" },
  { english: "sister", ur: "بہن", hi: "बहन" },
  { english: "brother", ur: "بھائی", hi: "भाई" },
  { english: "grandmother", ur: "دادی / نانی", hi: "दादी / नानी" },
  { english: "grandfather", ur: "دادا / نانا", hi: "दादा / नाना" },
  { english: "son", ur: "بیٹا", hi: "बेटा" },
  { english: "daughter", ur: "بیٹی", hi: "बेटी" },
  { english: "uncle", ur: "چچا / ماموں", hi: "चाचा / मामा" },
  { english: "aunt", ur: "چچی / خالہ", hi: "चाची / खाला" },
  { english: "cousin", ur: "کزن (مامے بھائی وغیرہ)", hi: "कज़िन (ममेरा भाई आदि)" },
  { english: "man", ur: "آدمی", hi: "आदमी" },
  { english: "woman", ur: "عورت", hi: "औरत" },
  { english: "boy", ur: "لڑکا", hi: "लड़का" },
  { english: "girl", ur: "لڑکی", hi: "लड़की" },
  { english: "baby", ur: "شیر خوار بچہ", hi: "शिशु" },
  { english: "cat", ur: "بلی", hi: "बिल्ली" },
  { english: "dog", ur: "کتا", hi: "कुत्ता" },
  { english: "bird", ur: "پرندہ", hi: "पक्षी" },
  { english: "fish", ur: "مچھلی", hi: "मछली" },
  { english: "horse", ur: "گھوڑا", hi: "घोड़ा" },
  { english: "cow", ur: "گائے", hi: "गाय" },
  { english: "sheep", ur: "بھیڑ", hi: "भेड़" },
  { english: "lion", ur: "شیر", hi: "शेर" },
  { english: "elephant", ur: "ہاتھی", hi: "हाथी" },
  { english: "monkey", ur: "بندر", hi: "बंदर" },
  { english: "food", ur: "کھانا", hi: "खाना" },
  { english: "bread", ur: "روٹی", hi: "रोटी" },
  { english: "milk", ur: "دودھ", hi: "दूध" },
  { english: "rice", ur: "چاول", hi: "चावल" },
  { english: "water", ur: "پانی", hi: "पानी" },
  { english: "egg", ur: "انڈا", hi: "अंडा" },
  { english: "apple", ur: "سیب", hi: "सेब" },
  { english: "fruit", ur: "پھل", hi: "फल" },
  { english: "red", ur: "سرخ", hi: "लाल" },
  { english: "blue", ur: "نیلا", hi: "नीला" },
  { english: "green", ur: "سبز", hi: "हरा" },
  { english: "yellow", ur: "زرد", hi: "पीला" },
  { english: "black", ur: "سیاہ", hi: "काला" },
  { english: "white", ur: "سفید", hi: "सफ़ेद" },
  { english: "one", ur: "ایک", hi: "एक" },
  { english: "two", ur: "دو", hi: "दो" },
  { english: "three", ur: "تین", hi: "तीन" },
  { english: "four", ur: "چار", hi: "चार" },
  { english: "five", ur: "پانچ", hi: "पाँच" },
  { english: "six", ur: "چھ", hi: "छह" },
  { english: "seven", ur: "سات", hi: "सात" },
  { english: "eight", ur: "آٹھ", hi: "आठ" },
  { english: "nine", ur: "نو", hi: "नौ" },
  { english: "ten", ur: "دس", hi: "दस" },
  { english: "eleven", ur: "گیارہ", hi: "ग्यारह" },
  { english: "twelve", ur: "بارہ", hi: "बारह" },
  { english: "thirteen", ur: "تیرہ", hi: "तेरह" },
  { english: "fourteen", ur: "چودہ", hi: "चौदह" },
  { english: "fifteen", ur: "پندرہ", hi: "पंद्रह" },
  { english: "sixteen", ur: "سولہ", hi: "सोलह" },
  { english: "seventeen", ur: "سترہ", hi: "सत्रह" },
  { english: "eighteen", ur: "اٹھارہ", hi: "अठारह" },
  { english: "nineteen", ur: "انیس", hi: "उन्नीस" },
  { english: "twenty", ur: "بیس", hi: "बीस" },
  { english: "home", ur: "گھر", hi: "घर" },
  { english: "chair", ur: "کرسی", hi: "कुर्सी" },
  { english: "table", ur: "میز", hi: "मेज़" },
  { english: "door", ur: "دروازہ", hi: "दरवाज़ा" },
  { english: "window", ur: "کھڑکی", hi: "खिड़की" },
  { english: "bag", ur: "بستہ", hi: "बस्ता" },
  { english: "pen", ur: "قلم", hi: "कलम" },
  { english: "pencil", ur: "پنسل", hi: "पेंसिल" },
  { english: "to eat", ur: "کھانا (فعل)", hi: "खाना (क्रिया)" },
  { english: "to drink", ur: "پینا", hi: "पीना" },
  { english: "to read", ur: "پڑھنا", hi: "पढ़ना" },
  { english: "to write", ur: "لکھنا", hi: "लिखना" },
  { english: "to sleep", ur: "سونا", hi: "सोना" },
  { english: "to run", ur: "دوڑنا", hi: "दौड़ना" },
  { english: "to walk", ur: "چلنا", hi: "चलना" },
  { english: "to play", ur: "کھیلنا", hi: "खेलना" },
  { english: "to sit", ur: "بیٹھنا", hi: "बैठना" },
  { english: "to stand", ur: "کھڑا ہونا", hi: "खड़ा होना" },
  { english: "to open", ur: "کھولنا", hi: "खोलना" },
  { english: "to close", ur: "بند کرنا", hi: "बंद करना" },
  { english: "to listen", ur: "سننا", hi: "सुनना" },
  { english: "to speak", ur: "بولنا", hi: "बोलना" },
  { english: "to see", ur: "دیکھنا", hi: "देखना" },
  { english: "to come", ur: "آنا", hi: "आना" },
  { english: "to go", ur: "جانا", hi: "जाना" },

  // ---- Key teaching sentences (CH-06) ---------------------------------------
  {
    english: "This is my mother.",
    ur: "یہ میری ماں ہیں۔",
    hi: "यह मेरी माँ हैं।",
  },
  {
    english: "I have one sister and two brothers.",
    ur: "میری ایک بہن اور دو بھائی ہیں۔",
    hi: "मेरी एक बहन और दो भाई हैं।",
  },
  {
    english: "Who is this? — This is my grandfather.",
    ur: "یہ کون ہیں؟ — یہ میرے دادا ہیں۔",
    hi: "यह कौन हैं? — यह मेरे दादा हैं।",
  },
  {
    english: "I like cats.",
    ur: "مجھے بلیاں پسند ہیں۔",
    hi: "मुझे बिल्लियाँ पसंद हैं।",
  },
  {
    english: "What is it? — It is a bird.",
    ur: "یہ کیا ہے؟ — یہ ایک پرندہ ہے۔",
    hi: "यह क्या है? — यह एक पक्षी है।",
  },
  {
    english: "Numbers tell us how many.",
    ur: "اعداد ہمیں بتاتے ہیں کہ کتنے ہیں۔",
    hi: "संख्याएँ हमें बताती हैं कि कितने हैं।",
  },
  {
    english: "Every colour has a name.",
    ur: "ہر رنگ کا ایک نام ہوتا ہے۔",
    hi: "हर रंग का एक नाम होता है।",
  },
  {
    english: "Action words tell us what people do.",
    ur: "فعل کے الفاظ ہمیں بتاتے ہیں کہ لوگ کیا کرتے ہیں۔",
    hi: "क्रिया के शब्द हमें बताते हैं कि लोग क्या करते हैं।",
  },
  {
    english: "Learn the words in small groups, not in one long list.",
    ur: "الفاظ چھوٹے چھوٹے گروپوں میں یاد کریں، ایک طویل فہرست میں نہیں۔",
    hi: "शब्द छोटे-छोटे समूहों में याद कीजिए, एक लंबी सूची में नहीं।",
  },
  {
    english: "Say each new word out loud.",
    ur: "ہر نیا لفظ بلند آواز میں بولیں۔",
    hi: "हर नए शब्द को ज़ोर से बोलिए।",
  },
  {
    english: "Use each new word in a sentence today.",
    ur: "ہر نیا لفظ آج ایک جملے میں استعمال کریں۔",
    hi: "हर नए शब्द को आज एक वाक्य में प्रयोग कीजिए।",
  },

  // ---- Word-category terminology (CH-07 – CH-08) ----------------------------
  { english: "naming word", ur: "اسم (نام بتانے والا لفظ)", hi: "संज्ञा (नाम बताने वाला शब्द)" },
  { english: "action word", ur: "فعل (کار بتانے والا لفظ)", hi: "क्रिया (काम बताने वाला शब्द)" },
  { english: "describing word", ur: "صفت (صفت بتانے والا لفظ)", hi: "विशेषण (गुण बताने वाला शब्द)" },
  { english: "word class", ur: "قسمِ لفظ", hi: "शब्द वर्ग" },
  { english: "subject", ur: "فاعل", hi: "कर्ता" },
  { english: "object", ur: "مفعول", hi: "कर्म" },
  { english: "singular", ur: "واحد", hi: "एकवचन" },
  { english: "plural", ur: "جمع", hi: "बहुवचन" },
  { english: "full stop", ur: "نقطہ", hi: "पूर्ण विराम" },
  { english: "question mark", ur: "سوال کا نشان", hi: "प्रश्न चिह्न" },
  { english: "word order", ur: "ترتیبِ الفاظ", hi: "शब्द क्रम" },
  { english: "complete sentence", ur: "مکمل جملہ", hi: "पूर्ण वाक्य" },

  // ---- Key teaching sentences (CH-07 – CH-08) --------------------------------
  {
    english: "Naming words are called nouns.",
    ur: "نام بتانے والے الفاظ کو اسم کہتے ہیں۔",
    hi: "नाम बताने वाले शब्दों को संज्ञा कहते हैं।",
  },
  {
    english: "Action words are called verbs.",
    ur: "کام بتانے والے الفاظ کو فعل کہتے ہیں۔",
    hi: "काम बताने वाले शब्दों को क्रिया कहते हैं।",
  },
  {
    english: "Describing words are called adjectives.",
    ur: "صفت بتانے والے الفاظ کو صفت کہتے ہیں۔",
    hi: "गुण बताने वाले शब्दों को विशेषण कहते हैं।",
  },
  {
    english: "Words that replace nouns are called pronouns.",
    ur: "اسم کی جگہ لینے والے الفاظ کو ضمیر کہتے ہیں۔",
    hi: "संज्ञा की जगह लेने वाले शब्दों को सर्वनाम कहते हैं।",
  },
  {
    english: "He, she and it replace naming words.",
    ur: "he، she اور it اسم کی جگہ لیتے ہیں۔",
    hi: "he, she और it संज्ञा की जगह लेते हैं।",
  },
  {
    english: "Every sentence needs a verb.",
    ur: "ہر جملے میں ایک فعل ضروری ہوتا ہے۔",
    hi: "हर वाक्य में एक क्रिया ज़रूरी होती है।",
  },
  {
    english: "A full stop ends a sentence.",
    ur: "جملہ ایک نقطے پر ختم ہوتا ہے۔",
    hi: "वाक्य एक पूर्ण विराम पर समाप्त होता है।",
  },
  {
    english: "The subject tells us who does the action.",
    ur: "فاعل بتاتا ہے کہ کام کون کرتا ہے۔",
    hi: "कर्ता बताता है कि काम कौन करता है।",
  },
  {
    english: "English word order is subject, verb, object.",
    ur: "انگریزی جملوں کی ترتیب ہے: فاعل، فعل، مفعول۔",
    hi: "अंग्रेज़ी वाक्यों का क्रम है: कर्ता, क्रिया, कर्म।",
  },
  {
    english: "A sentence without a verb is not a sentence.",
    ur: "بغیر فعل کا جملہ جملہ نہیں ہوتا۔",
    hi: "बिना क्रिया का वाक्य वाक्य नहीं होता।",
  },
  {
    english: "Read the sentence and find the verb.",
    ur: "جملہ پڑھیں اور فعل ڈھونڈیں۔",
    hi: "वाक्य पढ़िए और क्रिया खोजिए।",
  },
  {
    english: "Say the sentence out loud and listen for the verb.",
    ur: "جملہ بلند آواز میں بولیں اور فعل کو سن کر پہچانیں۔",
    hi: "वाक्य ज़ोर से बोलिए और क्रिया को सुनकर पहचानिए।",
  },

  // ---- Pronouns and possessives (CH-11, requested by CH-06/07 authors) ------
  { english: "I", ur: "میں", hi: "मैं" },
  { english: "you", ur: "تم / آپ", hi: "तुम / आप" },
  { english: "he", ur: "وہ (مذکر)", hi: "वह (पुल्लिंग)" },
  { english: "she", ur: "وہ (مؤنث)", hi: "वह (स्त्रीलिंग)" },
  { english: "it", ur: "یہ (بے جان)", hi: "यह (निर्जीव)" },
  { english: "we", ur: "ہم", hi: "हम" },
  { english: "they", ur: "وہ لوگ", hi: "वे लोग" },
  { english: "me", ur: "مجھے", hi: "मुझे" },
  { english: "him", ur: "اُسے (مذکر)", hi: "उसे (पुल्लिंग)" },
  { english: "her", ur: "اُسے / اُس کی (مؤنث)", hi: "उसे / उसकी (स्त्रीलिंग)" },
  { english: "us", ur: "ہمیں", hi: "हमें" },
  { english: "them", ur: "اُنہیں", hi: "उन्हें" },
  { english: "my", ur: "میرا / میری", hi: "मेरा / मेरी" },
  { english: "your", ur: "تمہارا / آپ کا", hi: "तुम्हारा / आपका" },
  { english: "his", ur: "اُس کا (مذکر)", hi: "उसका (पुल्लिंग)" },
  { english: "its", ur: "اِس کا (بے جان)", hi: "इसका (निर्जीव)" },
  { english: "our", ur: "ہمارا / ہماری", hi: "हमारा / हमारी" },
  { english: "their", ur: "اُن کا / اُن کی", hi: "उनका / उनकी" },
  { english: "mine", ur: "میرا (ضمیر)", hi: "मेरा (सर्वनाम)" },
  { english: "yours", ur: "تمہارا (ضمیر)", hi: "तुम्हारा (सर्वनाम)" },
  { english: "hers", ur: "اُس کی (ضمیر)", hi: "उसकी (सर्वनाम)" },
  { english: "theirs", ur: "اُن کا (ضمیر)", hi: "उनका (सर्वनाम)" },
  { english: "this", ur: "یہ (قریب)", hi: "यह (पास)" },
  { english: "that", ur: "وہ (دور)", hi: "वह (दूर)" },
  { english: "these", ur: "یہ (قریب، جمع)", hi: "ये (पास, बहुवचन)" },
  { english: "those", ur: "وہ (دور، جمع)", hi: "वे (दूर, बहुवचन)" },

  // ---- Basic adjectives and remaining colours (CH-06/07/15, requested) ------
  { english: "big", ur: "بڑا", hi: "बड़ा" },
  { english: "small", ur: "چھوٹا", hi: "छोटा" },
  { english: "tall", ur: "لمبا (قد)", hi: "लंबा (कद)" },
  { english: "short", ur: "چھوٹا (قد)", hi: "नाटा (कद)" },
  { english: "young", ur: "جوان", hi: "जवान" },
  { english: "old", ur: "بوڑھا / پرانا", hi: "बूढ़ा / पुराना" },
  { english: "new", ur: "نیا", hi: "नया" },
  { english: "hot", ur: "گرم", hi: "गर्म" },
  { english: "cold", ur: "ٹھنڈا", hi: "ठंडा" },
  { english: "happy", ur: "خوش", hi: "खुश" },
  { english: "sad", ur: "اداس", hi: "उदास" },
  { english: "kind", ur: "مہربان", hi: "दयालु" },
  { english: "fast", ur: "تیز", hi: "तेज़" },
  { english: "slow", ur: "آہستہ", hi: "धीमा" },
  { english: "busy", ur: "مصروف", hi: "व्यस्त" },
  { english: "heavy", ur: "بھاری", hi: "भारी" },
  { english: "beautiful", ur: "خوبصورت", hi: "सुंदर" },
  { english: "long", ur: "لمبا", hi: "लंबा" },
  { english: "orange", ur: "نارنجی", hi: "नारंगी" },
  { english: "brown", ur: "بھورا", hi: "भूरा" },
  { english: "pink", ur: "گلابی", hi: "गुलाबी" },
  { english: "purple", ur: "بنفشی", hi: "बैंगनी" },
  { english: "grey", ur: "خاکستری", hi: "सलेटी" },
  { english: "zero", ur: "صفر", hi: "शून्य" },

  // ---- Everyday words CH-06 authors requested (CH-16/18 need them) ---------
  { english: "banana", ur: "کیلا", hi: "केला" },
  { english: "cheese", ur: "پنیر", hi: "पनीर" },
  { english: "phone", ur: "فون", hi: "फ़ोन" },
  { english: "key", ur: "چابی", hi: "चाबी" },
  { english: "paper", ur: "کاغذ", hi: "काग़ज़" },
  { english: "kitchen", ur: "باورچی خانہ", hi: "रसोई" },
  { english: "bedroom", ur: "سونے کا کمرہ", hi: "शयनकक्ष" },
  { english: "bathroom", ur: "غسل خانہ", hi: "स्नानघर" },
  { english: "bed", ur: "بستر", hi: "बिस्तर" },
  { english: "television", ur: "ٹیلی ویژن", hi: "टेलीविज़न" },
  { english: "garden", ur: "باغ", hi: "बगीचा" },
  { english: "to work", ur: "کام کرنا", hi: "काम करना" },
  { english: "city", ur: "شہر", hi: "शहर" },
  { english: "street", ur: "گلی", hi: "गली" },
  { english: "room", ur: "کمرہ", hi: "कमरा" },

  // ---- Sentence-grammar terminology (CH-08/09, requested) -------------------
  { english: "predicate", ur: "خبر", hi: "विधेय" },
  { english: "complement", ur: "مکمل", hi: "पूरक" },
  { english: "pattern", ur: "نقشہ", hi: "पैटर्न" },
  { english: "transitive verb", ur: "متعدی فعل", hi: "सकर्मक क्रिया" },
  { english: "direct object", ur: "مفعولِ صریح", hi: "प्रत्यक्ष कर्म" },
  { english: "fragment", ur: "ادھورا جملہ", hi: "अधूरा वाक्य" },
  { english: "statement", ur: "بیانیہ جملہ", hi: "विधान वाक्य" },
  { english: "command", ur: "حکم", hi: "आदेश" },
  { english: "being verb", ur: "فعلِ ہونا (be)", hi: "होने की क्रिया (be)" },
  { english: "exclamation mark", ur: "علامتِ تعجب (!)", hi: "विस्मयादिबोधक चिह्न (!)" },
  { english: "end mark", ur: "جملے کا آخری نشان", hi: "वाक्य का अंतिम चिह्न" },
  { english: "paragraph", ur: "پیراگراف", hi: "अनुच्छेद" },
  { english: "auxiliary verb", ur: "فعلِ معاون", hi: "सहायक क्रिया" },
  { english: "short answer", ur: "مختصر جواب", hi: "लघु उत्तर" },
  { english: "contraction", ur: "مختصر شکل", hi: "संक्षिप्त रूप" },

  // ---- Noun and article terminology (CH-10) ----------------------------------
  { english: "proper noun", ur: "اسمِ خاص", hi: "व्यक्तिवाचक संज्ञा" },
  { english: "common noun", ur: "اسمِ عام", hi: "जातिवाचक संज्ञा" },
  { english: "article", ur: "حرفِ تعریف (a, an, the)", hi: "आर्टिकल (a, an, the)" },
  { english: "countable noun", ur: "گننے کے قابل اسم", hi: "गणनीय संज्ञा" },
  { english: "uncountable noun", ur: "غیر قابلِ شمار اسم", hi: "अगणनीय संज्ञा" },
  { english: "irregular plural", ur: "بے قاعدہ جمع", hi: "अनियमित बहुवचन" },

  // ---- Pronoun grammar terminology (CH-11) -----------------------------------
  { english: "subject pronoun", ur: "فاعلی ضمیر", hi: "कर्तृवाचक सर्वनाम" },
  { english: "object pronoun", ur: "مفعولی ضمیر", hi: "कर्मवाचक सर्वनाम" },
  { english: "possessive adjective", ur: "ملکیت بتانے والا لفظ", hi: "स्वामित्व बताने वाला शब्द" },
  { english: "possessive pronoun", ur: "ضمیرِ ملکیت", hi: "स्वामित्व सर्वनाम" },
  { english: "demonstrative", ur: "اشارتی ضمیر", hi: "संकेतवाचक सर्वनाम" },

  // ---- Key teaching sentences (CH-09 – CH-12) --------------------------------
  {
    english: "The predicate tells us what the subject does.",
    ur: "خبر بتاتی ہے کہ فاعل کیا کرتا ہے۔",
    hi: "विधेय बताता है कि कर्ता क्या करता है।",
  },
  {
    english: "A sentence has a subject and a predicate.",
    ur: "ہر جملے میں فاعل اور خبر ہوتی ہے۔",
    hi: "हर वाक्य में कर्ता और विधेय होते हैं।",
  },
  {
    english: "Some verbs act on an object.",
    ur: "کچھ افعال مفعول پر اثر ڈالتے ہیں۔",
    hi: "कुछ क्रियाएँ कर्म पर असर डालती हैं।",
  },
  {
    english: "Adjectives go before nouns in English.",
    ur: "انگریزی میں صفت اسم سے پہلے آتی ہے۔",
    hi: "अंग्रेज़ी में विशेषण संज्ञा से पहले आता है।",
  },
  {
    english: "Singular means one. Plural means more than one.",
    ur: "واحد کا مطلب ایک ہے۔ جمع کا مطلب ایک سے زیادہ۔",
    hi: "एकवचन का अर्थ एक है। बहुवचन का अर्थ एक से अधिक।",
  },
  {
    english: "Use a before consonant sounds and an before vowel sounds.",
    ur: "کانسنٹ آوازوں سے پہلے a اور واول آوازوں سے پہلے an لگائیں۔",
    hi: "व्यंजन ध्वनि से पहले a और स्वर ध्वनि से पहले an लगाइए।",
  },
  {
    english: "The points at one specific thing.",
    ur: "the کسی ایک خاص چیز کی طرف اشارہ کرتا ہے۔",
    hi: "the किसी एक विशेष चीज़ की ओर संकेत करता है।",
  },
  {
    english: "Pronouns replace nouns so we do not repeat them.",
    ur: "ضمیر اسم کی جگہ لیتا ہے تاکہ بار بار دہرایا نہ جائے۔",
    hi: "सर्वनाम संज्ञा की जगह लेता है ताकि बार-बार दोहराया न जाए।",
  },
  {
    english: "My, your, his and her show who owns something.",
    ur: "my، your، his اور her ملکیت بتاتے ہیں۔",
    hi: "my, your, his और her स्वामित्व बताते हैं।",
  },
  {
    english: "This and that point at things.",
    ur: "this قریب کی چیز کی طرف اور that دور کی چیز کی طرف اشارہ کرتا ہے۔",
    hi: "this पास की चीज़ की ओर और that दूर की चीज़ की ओर संकेत करता है।",
  },
  {
    english: "Am, is and are are the present of the verb be.",
    ur: "am، is اور are فعل be کی زمانہ حال کی شکلیں ہیں۔",
    hi: "am, is और are क्रिया be के वर्तमान रूप हैं।",
  },
  {
    english: "Be makes questions by itself; other verbs need do.",
    ur: "فعل be خود سے سوال بناتا ہے؛ باقی افعال کے لیے do چاہیے۔",
    hi: "क्रिया be अपने आप प्रश्न बनाती है; अन्य क्रियाओं के लिए do चाहिए।",
  },
  {
    english: "Was and were are the past of be.",
    ur: "was اور were فعل be کی ماضی کی شکلیں ہیں۔",
    hi: "was और were क्रिया be के भूत रूप हैं।",
  },
  {
    english: "Have and has show possession.",
    ur: "have اور has ملکیت ظاہر کرتے ہیں۔",
    hi: "have और has स्वामित्व दर्शाते हैं।",
  },
  {
    english: "Do and does help other verbs make questions.",
    ur: "do اور does باقی افعال کے سوال بنانے میں مدد کرتے ہیں۔",
    hi: "do और does अन्य क्रियाओं के प्रश्न बनाने में मदद करते हैं।",
  },

  // ---- Wave-2 author requests (CH-09/11/12) ----------------------------------
  { english: "intransitive verb", ur: "لازم فعل", hi: "अकर्मक क्रिया" },
  { english: "adverb", ur: "ظرف", hi: "क्रियाविशेषण" },
  { english: "ours", ur: "ہمارا (ضمیر)", hi: "हमारा (सर्वनाम)" },
  { english: "children", ur: "بچے", hi: "बच्चे" },
  { english: "women", ur: "عورتیں", hi: "औरतें" },
  { english: "men", ur: "آدمی (جمع)", hi: "आदमी (बहुवचन)" },
  { english: "feet", ur: "پاؤں", hi: "पैर" },
  { english: "teeth", ur: "دانت", hi: "दाँत" },
  { english: "people", ur: "لوگ", hi: "लोग" },
  { english: "mice", ur: "چوہے", hi: "चूहे" },
  { english: "some", ur: "کچھ", hi: "कुछ" },
  { english: "any", ur: "کوئی بھی", hi: "कोई भी" },
  { english: "hour", ur: "گھنٹہ", hi: "घंटा" },
  { english: "university", ur: "جامعہ", hi: "विश्वविद्यालय" },
  { english: "yesterday", ur: "کل (ماضی)", hi: "बीता हुआ कल" },
  { english: "tired", ur: "تھکا ہوا", hi: "थका हुआ" },
  { english: "ready", ur: "تیار", hi: "तैयार" },
  { english: "to be", ur: "ہونا", hi: "होना" },
  { english: "to have", ur: "کے پاس ہونا (ملکیت)", hi: "के पास होना (स्वामित्व)" },
  { english: "to do", ur: "کرنا", hi: "करना" },

  // ---- Present simple terminology and routine words (CH-13) ------------------
  { english: "present simple", ur: "فعلِ حال سادہ (present simple)", hi: "सामान्य वर्तमान काल (present simple)" },
  { english: "third person", ur: "تیسری شخص (واحد)", hi: "तृतीय पुरुष (एकवचन)" },
  { english: "frequency adverb", ur: "ظرفِ تکرار", hi: "आवृत्ति क्रियाविशेषण" },
  { english: "habit", ur: "عادت", hi: "आदत" },
  { english: "routine", ur: "روزانہ معمول", hi: "दिनचर्या" },
  { english: "every day", ur: "ہر روز", hi: "हर रोज़" },
  { english: "always", ur: "ہمیشہ", hi: "हमेशा" },
  { english: "usually", ur: "عموماً", hi: "आम तौर पर" },
  { english: "often", ur: "اکثر", hi: "अक्सर" },
  { english: "sometimes", ur: "کبھی کبھی", hi: "कभी-कभी" },
  { english: "never", ur: "کبھی نہیں", hi: "कभी नहीं" },
  { english: "morning", ur: "صبح", hi: "सुबह" },
  { english: "afternoon", ur: "دوپہر", hi: "दोपहर" },
  { english: "evening", ur: "شام", hi: "शाम" },
  { english: "night", ur: "رات", hi: "रात" },
  { english: "weekend", ur: "اختتامِ ہفتہ", hi: "सप्ताहांत" },
  { english: "Monday", ur: "پیر", hi: "सोमवार" },
  { english: "Tuesday", ur: "منگل", hi: "मंगलवार" },
  { english: "Wednesday", ur: "بدھ", hi: "बुधवार" },
  { english: "Thursday", ur: "جمعرات", hi: "गुरुवार" },
  { english: "Friday", ur: "جمعہ", hi: "शुक्रवार" },
  { english: "Saturday", ur: "ہفتہ", hi: "शनिवार" },
  { english: "Sunday", ur: "اتوار", hi: "रविवार" },
  { english: "to get up", ur: "صبح اٹھنا", hi: "सुबह उठना" },
  { english: "to study", ur: "پڑھائی کرنا", hi: "पढ़ाई करना" },
  { english: "to watch", ur: "دیکھنا (فعل)", hi: "देखना (क्रिया)" },
  { english: "to cook", ur: "پکانا", hi: "पकाना" },
  { english: "to clean", ur: "صاف کرنا", hi: "साफ़ करना" },
  { english: "to help", ur: "مدد کرنا", hi: "मदद करना" },
  { english: "to want", ur: "چاہنا", hi: "चाहना" },
  { english: "to need", ur: "ضرورت ہونا", hi: "ज़रूरत होना" },
  { english: "to live", ur: "رہنا", hi: "रहना" },
  { english: "job", ur: "نوکری", hi: "नौकरी" },
  { english: "breakfast", ur: "ناشتہ", hi: "नाश्ता" },
  { english: "lunch", ur: "دوپہر کا کھانا", hi: "दोपहर का खाना" },
  { english: "dinner", ur: "رات کا کھانا", hi: "रात का खाना" },

  // ---- Question terminology and WH words (CH-14) -------------------------------
  { english: "yes/no question", ur: "ہاں / نہ سوال", hi: "हाँ / नहीं प्रश्न" },
  { english: "question word", ur: "سوال کا لفظ", hi: "प्रश्नवाचक शब्द" },
  { english: "imperative", ur: "حکمی جملہ", hi: "आज्ञावाचक वाक्य" },
  { english: "polite", ur: "شائستہ", hi: "शिष्ट" },
  { english: "request", ur: "درخواست", hi: "निवेदन" },
  { english: "information", ur: "معلومات", hi: "जानकारी" },
  { english: "what", ur: "کیا", hi: "क्या" },
  { english: "where", ur: "کہاں", hi: "कहाँ" },
  { english: "when", ur: "کب", hi: "कब" },
  { english: "who", ur: "کون", hi: "कौन" },
  { english: "why", ur: "کیوں", hi: "क्यों" },
  { english: "how", ur: "کیسے", hi: "कैसे" },
  { english: "which", ur: "کون سا", hi: "कौन सा" },
  { english: "whose", ur: "کس کا", hi: "किसका" },

  // ---- Adjective and adverb words (CH-15) --------------------------------------
  { english: "adverb of manner", ur: "ظرفِ کیفیت", hi: "ढंग बताने वाला शब्द" },
  { english: "adjective order", ur: "ترتیبِ صفات", hi: "विशेषण क्रम" },
  { english: "expensive", ur: "مہنگا", hi: "महँगा" },
  { english: "cheap", ur: "سستا", hi: "सस्ता" },
  { english: "clean", ur: "صاف", hi: "साफ़" },
  { english: "dirty", ur: "گندا", hi: "गंदा" },
  { english: "quiet", ur: "خاموش", hi: "शांत" },
  { english: "noisy", ur: "شور مچانے والا", hi: "शोर मचाने वाला" },
  { english: "easy", ur: "آسان", hi: "आसान" },
  { english: "difficult", ur: "مشکل", hi: "कठिन" },
  { english: "strong", ur: "مضبوط", hi: "मज़बूत" },
  { english: "weak", ur: "کمزور", hi: "कमज़ोर" },
  { english: "famous", ur: "مشہور", hi: "प्रसिद्ध" },
  { english: "delicious", ur: "لذیذ", hi: "स्वादिष्ट" },
  { english: "well", ur: "اچھی طرح", hi: "अच्छी तरह" },
  { english: "badly", ur: "بری طرح", hi: "बुरी तरह" },
  { english: "quickly", ur: "جلدی", hi: "जल्दी" },
  { english: "slowly", ur: "آہستہ آہستہ", hi: "धीरे-धीरे" },
  { english: "carefully", ur: "احتیاط سے", hi: "ध्यान से" },
  { english: "loudly", ur: "بلند آواز سے", hi: "ज़ोर से" },
  { english: "hard", ur: "محنت سے", hi: "मेहनत से" },
  { english: "together", ur: "ایک ساتھ", hi: "एक साथ" },

  // ---- Prepositions and quantity (CH-16) ----------------------------------------
  { english: "preposition", ur: "حرفِ جار", hi: "संबंधबोधक शब्द" },
  { english: "in", ur: "میں", hi: "में" },
  { english: "on", ur: "پر", hi: "पर" },
  { english: "under", ur: "کے نیچے", hi: "के नीचे" },
  { english: "next to", ur: "کے بغل میں", hi: "के बगल में" },
  { english: "between", ur: "کے درمیان", hi: "के बीच" },
  { english: "behind", ur: "کے پیچھے", hi: "के पीछे" },
  { english: "in front of", ur: "کے سامنے", hi: "के सामने" },
  { english: "near", ur: "کے قریب", hi: "के पास" },
  { english: "into", ur: "کے اندر", hi: "के अंदर" },
  { english: "out of", ur: "کے باہر", hi: "से बाहर" },
  { english: "across", ur: "کے پار", hi: "के पार" },
  { english: "through", ur: "کے ذریعے", hi: "के द्वारा" },
  { english: "park", ur: "پارک", hi: "पार्क" },
  { english: "shop", ur: "دکان", hi: "दुकान" },

  // ---- Key teaching sentences (CH-13 – CH-16) -----------------------------------
  {
    english: "The present simple describes habits and routines.",
    ur: "فعلِ حال سادہ عادتوں اور روزمرہ معمولات بیان کرتا ہے۔",
    hi: "सामान्य वर्तमान काल आदतों और दिनचर्या बताता है।",
  },
  {
    english: "Third person singular adds -s in the present simple.",
    ur: "فعلِ حال سادہ میں تیسری شخص واحد کے ساتھ -s لگتا ہے۔",
    hi: "सामान्य वर्तमान काल में तृतीय पुरुष एकवचन के साथ -s जुड़ता है।",
  },
  {
    english: "Don't and doesn't make negatives in the present simple.",
    ur: "فعلِ حال سادہ میں منفی کے لیے don't اور doesn't آتے ہیں۔",
    hi: "सामान्य वर्तमान काल में नकारात्मक के लिए don't और doesn't आते हैं।",
  },
  {
    english: "Frequency adverbs tell us how often.",
    ur: "ظرفِ تکرار بتاتا ہے کہ کوئی کام کتنی بار ہوتا ہے۔",
    hi: "आवृत्ति क्रियाविशेषण बताता है कि कोई काम कितनी बार होता है।",
  },
  {
    english: "Adverbs of frequency go before the main verb.",
    ur: "ظرفِ تکرار فعلِ اصلی سے پہلے آتا ہے۔",
    hi: "आवृत्ति क्रियाविशेषण मुख्य क्रिया से पहले आता है।",
  },
  {
    english: "Questions end with a question mark.",
    ur: "سوال علامتِ سوال پر ختم ہوتا ہے۔",
    hi: "प्रश्न प्रश्न-चिह्न पर समाप्त होता है।",
  },
  {
    english: "An imperative gives an order or instruction.",
    ur: "حکمی جملہ حکم یا ہدایت دیتا ہے۔",
    hi: "आज्ञावाचक वाक्य आदेश या निर्देश देता है।",
  },
  {
    english: "Please makes a request polite.",
    ur: "please کہنے سے درخواست شائستہ ہو جاتی ہے۔",
    hi: "please कहने से निवेदन शिष्ट हो जाता है।",
  },
  {
    english: "Adjectives describe nouns; adverbs describe verbs.",
    ur: "صفت اسم کی صفت کرتی ہے؛ ظرف فعل کی۔",
    hi: "विशेषण संज्ञा का गुण बताता है; क्रियाविशेषण क्रिया का।",
  },
  {
    english: "Many adverbs end in -ly.",
    ur: "بہت سے ظروف -ly پر ختم ہوتے ہیں۔",
    hi: "बहुत से क्रियाविशेषण -ly पर समाप्त होते हैं।",
  },
  {
    english: "Prepositions show place, time and movement.",
    ur: "حروفِ جار جگہ، وقت اور حرکت ظاہر کرتے ہیں۔",
    hi: "संबंधबोधक शब्द स्थान, समय और गति दर्शाते हैं।",
  },
  {
    english: "There is and there are say what exists.",
    ur: "there is اور there are بتاتے ہیں کہ کیا موجود ہے۔",
    hi: "there is और there are बताते हैं कि क्या मौजूद है।",
  },
  {
    english: "We say in July, on Monday, at six o'clock.",
    ur: "ہم کہتے ہیں: in July، on Monday، at six o'clock۔",
    hi: "हम कहते हैं: in July, on Monday, at six o'clock।",
  },
  {
    english: "Use some in positive sentences and any in questions and negatives.",
    ur: "منفی اور سوال کے جملوں میں any، مثبت جملوں میں some استعمال کریں۔",
    hi: "सकारात्मक वाक्यों में some तथा प्रश्नों और निषेधों में any का प्रयोग कीजिए।",
  },

  // ---- Wave-3 author requests (CH-14/15/16) ----------------------------------
  { english: "please", ur: "براہِ کرم", hi: "कृपया" },
  { english: "excuse me", ur: "معذرت", hi: "माफ़ कीजिए" },
  { english: "thank you", ur: "شکریہ", hi: "धन्यवाद" },
  { english: "sorry", ur: "معافی", hi: "माफ़ कीजिए" },
  { english: "how much", ur: "کتنے", hi: "कितने" },
  { english: "what time", ur: "کیا وقت", hi: "क्या समय" },
  { english: "hungry", ur: "بھوکا", hi: "भूखा" },
  { english: "open", ur: "کھلا", hi: "खुला" },
  { english: "quietly", ur: "خاموشی سے", hi: "चुपचाप" },
  { english: "happily", ur: "خوشی سے", hi: "खुशी से" },
  { english: "clearly", ur: "واضح طور پر", hi: "साफ़ तौर पर" },
  { english: "fresh", ur: "تازہ", hi: "ताज़ा" },
  { english: "at", ur: "پر (وقت کے لیے)", hi: "पर (समय के लिए)" },
  { english: "to", ur: "کی طرف", hi: "की ओर" },
  { english: "o'clock", ur: "بجے", hi: "बजे" },
  { english: "bank", ur: "بینک", hi: "बैंक" },
  { english: "café", ur: "کیفے", hi: "कैफ़े" },
  { english: "bridge", ur: "پل", hi: "पुल" },
  { english: "station", ur: "اسٹیشن", hi: "स्टेशन" },
  { english: "map", ur: "نقشہ", hi: "नक्शा" },
  { english: "beside", ur: "کے بغل میں", hi: "के बगल में" },
  { english: "along", ur: "کے ساتھ ساتھ", hi: "के साथ-साथ" },

  // ---- Present continuous words (CH-17) ----------------------------------------
  { english: "present continuous", ur: "فعلِ حال جاری (present continuous)", hi: "वर्तमान काल (जारी) (present continuous)" },
  { english: "action", ur: "عمل", hi: "कार्य" },
  { english: "right now", ur: "اِسی وقت", hi: "अभी इसी वक़्त" },
  { english: "now", ur: "اب", hi: "अब" },
  { english: "to make", ur: "بنانا", hi: "बनाना" },
  { english: "to rain", ur: "بارش ہونا", hi: "बारिश होना" },
  { english: "to laugh", ur: "ہنسنا", hi: "हँसना" },
  { english: "to cry", ur: "رونا", hi: "रोना" },
  { english: "to sing", ur: "گانا گانا", hi: "गाना गाना" },
  { english: "to dance", ur: "ناچنا", hi: "नाचना" },
  { english: "to wait", ur: "انتظار کرنا", hi: "इंतज़ार करना" },
  { english: "to wear", ur: "پہننا", hi: "पहनना" },

  // ---- Social words (CH-18) ------------------------------------------------------
  { english: "country", ur: "ملک", hi: "देश" },
  { english: "to meet", ur: "ملنا", hi: "मिलना" },

  // ---- Key teaching sentences (CH-17 – CH-18) ------------------------------------
  {
    english: "The present continuous describes actions happening now.",
    ur: "فعلِ حال جاری اِسی وقت ہونے والے کام بیان کرتا ہے۔",
    hi: "वर्तमान काल (जारी) अभी हो रहे काम बताता है।",
  },
  {
    english: "Use am, is or are with a verb ending in -ing.",
    ur: "am، is یا are کے ساتھ -ing پر ختم ہونے والا فعل لگائیں۔",
    hi: "am, is या are के साथ -ing पर समाप्त होने वाली क्रिया लगाइए।",
  },
  {
    english: "The present simple is for habits; the present continuous is for now.",
    ur: "فعلِ حال سادہ عادتوں کے لیے؛ فعلِ حال جاری اِسی وقت کے لیے۔",
    hi: "सामान्य वर्तमान काल आदतों के लिए; वर्तमान काल (जारी) अभी के लिए।",
  },
  {
    english: "Read the whole sentence before you choose the tense.",
    ur: "زمانہ چننے سے پہلے پورا جملہ پڑھیں۔",
    hi: "काल चुनने से पहले पूरा वाक्य पढ़िए।",
  },
  {
    english: "Nice to meet you.",
    ur: "آپ سے مل کر خوشی ہوئی۔",
    hi: "आपसे मिलकर खुशी हुई।",
  },
  {
    english: "How are you? — I am fine, thank you.",
    ur: "آپ کیسے ہیں؟ — میں خوش ہوں، شکریہ۔",
    hi: "आप कैसे हैं? — मैं ठीक हूँ, धन्यवाद।",
  },
  {
    english: "Where are you from? — I am from Pakistan.",
    ur: "آپ کہاں کے ہیں؟ — میں پاکستان سے ہوں۔",
    hi: "आप कहाँ के हैं? — मैं पाकिस्तान से हूँ।",
  },
  {
    english: "What do you do? — I am a student.",
    ur: "آپ کیا کام کرتے ہیں؟ — میں طالبِ علم ہوں۔",
    hi: "आप क्या काम करते हैं? — मैं छात्र हूँ।",
  },
  {
    english: "My name is Sara.",
    ur: "میرا نام سارہ ہے۔",
    hi: "मेरा नाम सारा है।",
  },
];

const GLOSSARY_MAP = new Map(CONTENT_GLOSSARY.map((e) => [e.english, e]));

/**
 * Authoring helper: look up a validated glossary entry by its English key.
 * Throws when the entry is missing, so no unvalidated translation can be
 * committed unnoticed.
 */
export function gls(english: string): { english: string; ur: string; hi: string } {
  const entry = GLOSSARY_MAP.get(english);
  if (!entry) {
    throw new Error(
      `[glossary] "${english}" is not a validated glossary entry. Add it to src/data/programme/v2/glossary.ts with hand-checked Urdu and Hindi before using it in content.`,
    );
  }
  return { english: entry.english, ur: entry.ur, hi: entry.hi };
}

/** All valid translation strings (for validator cross-checks). */
export function glossaryTranslationSet(): Set<string> {
  const set = new Set<string>();
  for (const e of CONTENT_GLOSSARY) {
    set.add(e.ur);
    set.add(e.hi);
  }
  return set;
}
