// Flashcard data for the Sinhala practice app. Romanised Sinhala only.
//
// Each card: id (unique, never reused), category, en, si (primary form),
// alt (other accepted spellings), note (optional, shown on reveal),
// source ("pack", "web" or "ai"; "web" and "ai" show an "unverified" label).

window.CATEGORIES = [
  "Phrases",
  "Pronouns",
  "Basics",
  "Numbers",
  "Family and people",
  "Food and drink",
  "Places",
  "Time",
  "Describing words",
  "Verbs",
  "Verb negatives",
  "Countries and nationalities",
  "Sentences"
];

window.VOCAB = [

  // ---- Phrases (pack section 1) ----
  { id: "phr-aayubowan", category: "Phrases", en: "Hello", si: "Aayubowan", alt: ["Ayubowan"], note: "", source: "pack" },
  { id: "phr-hambawunaata-sathutui", category: "Phrases", en: "Nice to meet you", si: "Hambawunaata sathutui", alt: [], note: "", source: "pack" },
  { id: "phr-sthuthi", category: "Phrases", en: "Thank you", si: "Sthuthi", alt: ["Isthuthi"], note: "", source: "pack" },
  { id: "phr-bohoma-sthuthi", category: "Phrases", en: "Thank you very much", si: "Bohoma sthuthi", alt: ["Bohoma isthuthi"], note: "", source: "pack" },
  { id: "phr-eka-sulu-deyak", category: "Phrases", en: "You're welcome", si: "Eka sulu deyak", alt: [], note: "", source: "pack" },
  { id: "phr-samaawenna", category: "Phrases", en: "Sorry", si: "Samaawenna", alt: [], note: "", source: "pack" },
  { id: "phr-ekata-kamak-naa", category: "Phrases", en: "It's okay", si: "Ekata kamak naa", alt: ["Ekata kamak nahaa"], note: "", source: "pack" },
  { id: "phr-oyaata-kohomada", category: "Phrases", en: "How are you?", si: "Oyaata kohomada?", alt: [], note: "", source: "pack" },
  { id: "phr-gihin-ennam", category: "Phrases", en: "Bye", si: "Gihin ennam", alt: [], note: "Check which is said by the person leaving", source: "pack" },
  { id: "phr-gihin-enna", category: "Phrases", en: "Bye (other form)", si: "Gihin enna", alt: [], note: "Check which is said by the person leaving", source: "pack" },

  // ---- Pronouns (pack section 2) ----
  { id: "pron-mama", category: "Pronouns", en: "I", si: "mama", alt: [], note: "", source: "pack" },
  { id: "pron-oyaa", category: "Pronouns", en: "You", si: "oyaa", alt: [], note: "", source: "pack" },
  { id: "pron-eyaa", category: "Pronouns", en: "He / She", si: "eyaa", alt: [], note: "", source: "pack" },
  { id: "pron-ohu", category: "Pronouns", en: "He", si: "ohu", alt: [], note: "", source: "pack" },
  { id: "pron-aya", category: "Pronouns", en: "She", si: "aya", alt: [], note: "", source: "pack" },
  { id: "pron-api", category: "Pronouns", en: "We", si: "api", alt: [], note: "", source: "pack" },
  { id: "pron-oyaalaa", category: "Pronouns", en: "You all", si: "oyaalaa", alt: [], note: "", source: "pack" },
  { id: "pron-eyaalaa", category: "Pronouns", en: "They", si: "eyaalaa", alt: [], note: "", source: "pack" },

  // ---- Basics (pack section 3) ----
  { id: "basic-ow", category: "Basics", en: "Yes", si: "ow", alt: ["ou"], note: "", source: "pack" },
  { id: "basic-naa", category: "Basics", en: "No", si: "naa", alt: ["nahaa"], note: "In nahaa, the 'a' sounds like the 'a' in apple", source: "pack" },
  { id: "basic-hari", category: "Basics", en: "Okay / correct", si: "hari", alt: [], note: "", source: "pack" },
  { id: "basic-subha", category: "Basics", en: "Good (written language)", si: "subha", alt: [], note: "", source: "pack" },
  { id: "basic-bohoma", category: "Basics", en: "Very", si: "bohoma", alt: [], note: "", source: "pack" },
  { id: "basic-mokakda", category: "Basics", en: "What?", si: "mokakda?", alt: [], note: "", source: "pack" },
  { id: "basic-koheda", category: "Basics", en: "Where?", si: "koheda?", alt: [], note: "", source: "pack" },
  { id: "basic-kohomada", category: "Basics", en: "How", si: "kohomada", alt: [], note: "", source: "pack" },
  { id: "basic-ethakota", category: "Basics", en: "Then", si: "ethakota", alt: [], note: "", source: "pack" },
  { id: "basic-dan", category: "Basics", en: "Now / currently", si: "d(a)n", alt: ["dan"], note: "", source: "pack" },
  { id: "basic-eth", category: "Basics", en: "But", si: "eth", alt: [], note: "", source: "pack" },
  { id: "basic-hondin", category: "Basics", en: "Well / fine", si: "hondin", alt: [], note: "From the 'how are you' dialogue", source: "pack" },
  { id: "basic-hondai", category: "Basics", en: "Good / fine (reaction)", si: "hondai", alt: [], note: "", source: "pack" },
  { id: "basic-oyaata", category: "Basics", en: "To you", si: "oyaata", alt: [], note: "", source: "pack" },
  { id: "basic-mage", category: "Basics", en: "My", si: "mage", alt: [], note: "", source: "pack" },
  { id: "basic-oyaage", category: "Basics", en: "Your", si: "oyaage", alt: [], note: "", source: "pack" },
  { id: "basic-hamu-weema", category: "Basics", en: "Meet", si: "hamu weema", alt: [], note: "", source: "pack" },
  { id: "basic-sathutak", category: "Basics", en: "Pleasure", si: "sathutak", alt: [], note: "", source: "pack" },
  { id: "basic-nama", category: "Basics", en: "Name", si: "nama", alt: [], note: "", source: "pack" },
  { id: "basic-ingriisi", category: "Basics", en: "English (language)", si: "Ingriisi", alt: [], note: "", source: "pack" },

  // ---- Family and people (pack section 3) ----
  { id: "fam-yaaluwaa", category: "Family and people", en: "Friend", si: "yaaluwaa", alt: [], note: "", source: "pack" },
  { id: "fam-ammaa", category: "Family and people", en: "Mother", si: "ammaa", alt: ["amma"], note: "", source: "pack" },
  { id: "fam-thaaththa", category: "Family and people", en: "Father", si: "thaaththa", alt: [], note: "", source: "pack" },

  // ---- Food and drink (pack section 3) ----
  { id: "food-bath", category: "Food and drink", en: "Rice", si: "bath", alt: [], note: "", source: "pack" },
  { id: "food-palathuru", category: "Food and drink", en: "Fruit", si: "palathuru", alt: [], note: "", source: "pack" },
  { id: "food-wathura", category: "Food and drink", en: "Water", si: "wathura", alt: [], note: "", source: "pack" },
  { id: "food-the", category: "Food and drink", en: "Tea", si: "thé", alt: ["the"], note: "", source: "pack" },

  // ---- Places (pack section 3) ----
  { id: "place-kadaya", category: "Places", en: "Shop", si: "kadaya", alt: [], note: "", source: "pack" },
  { id: "place-iskolaya", category: "Places", en: "School", si: "iskolaya", alt: [], note: "", source: "pack" },
  { id: "place-rata", category: "Places", en: "Country", si: "rata", alt: [], note: "", source: "pack" },

  // ---- Verbs (pack section 4) ----
  { id: "verb-kanawaa", category: "Verbs", en: "To eat", si: "kanawaa", alt: [], note: "", source: "pack" },
  { id: "verb-bonawaa", category: "Verbs", en: "To drink", si: "bonawaa", alt: [], note: "", source: "pack" },
  { id: "verb-yanawaa", category: "Verbs", en: "To go", si: "yanawaa", alt: [], note: "", source: "pack" },
  { id: "verb-enawaa", category: "Verbs", en: "To come", si: "enawaa", alt: [], note: "", source: "pack" },
  { id: "verb-dannawaa", category: "Verbs", en: "To know", si: "dannawaa", alt: [], note: "", source: "pack" },
  { id: "verb-igena-gannawaa", category: "Verbs", en: "To learn / study", si: "igena gannawaa", alt: [], note: "", source: "pack" },
  { id: "verb-wada-karanawaa", category: "Verbs", en: "To work", si: "wada karanawaa", alt: ["w(a)da karanawaa"], note: "wada = work, karanawaa = to do", source: "pack" },
  { id: "verb-uyanawaa", category: "Verbs", en: "To cook", si: "uyanawaa", alt: [], note: "", source: "pack" },
  { id: "verb-innawaa", category: "Verbs", en: "To be / to live (in a place)", si: "innawaa", alt: [], note: "", source: "pack" },
  { id: "verb-travel-karanawaa", category: "Verbs", en: "To travel", si: "travel karanawaa", alt: [], note: "", source: "pack" },

  // ---- Countries and nationalities (pack section 5) ----
  { id: "ctry-indiyaawa", category: "Countries and nationalities", en: "India", si: "Indiyaawa", alt: [], note: "", source: "pack" },
  { id: "ctry-sri-lankaawa", category: "Countries and nationalities", en: "Sri Lanka", si: "Sri Lankaawa", alt: [], note: "", source: "pack" },
  { id: "ctry-engalanthaya", category: "Countries and nationalities", en: "England", si: "Engalanthaya", alt: [], note: "", source: "pack" },
  { id: "ctry-amerikaawa", category: "Countries and nationalities", en: "USA / America", si: "(A)merikaawa", alt: ["Amerikaawa"], note: "", source: "pack" },
  { id: "ctry-australiyaawa", category: "Countries and nationalities", en: "Australia", si: "Australiyaawa", alt: [], note: "", source: "pack" },
  { id: "ctry-chiinaya", category: "Countries and nationalities", en: "China", si: "Chiinaya", alt: [], note: "", source: "pack" },
  { id: "ctry-rusiyaawa", category: "Countries and nationalities", en: "Russia", si: "Rusiyaawa", alt: [], note: "", source: "pack" },
  { id: "ctry-germaniya", category: "Countries and nationalities", en: "Germany", si: "Germaniya", alt: [], note: "", source: "pack" },
  { id: "ctry-sri-lankaawe", category: "Countries and nationalities", en: "In Sri Lanka / of Sri Lanka", si: "Sri Lankaawe", alt: [], note: "", source: "pack" },
  { id: "ctry-lankaawe-kenek", category: "Countries and nationalities", en: "A Sri Lankan (a person of Sri Lanka)", si: "Lankaawe kenek", alt: [], note: "", source: "pack" },
  { id: "ctry-sri-lankaawe-minissu", category: "Countries and nationalities", en: "People of Sri Lanka", si: "Sri Lankaawe minissu", alt: [], note: "", source: "pack" },
  { id: "ctry-amerikaawe-kenek", category: "Countries and nationalities", en: "An American", si: "(A)merikaawe kenek", alt: ["Amerikaawe kenek"], note: "", source: "pack" },
  { id: "ctry-indiyaawe-kenek", category: "Countries and nationalities", en: "An Indian", si: "Indiyaawe kenek", alt: [], note: "", source: "pack" },
  { id: "ctry-engalanthaye-kenek", category: "Countries and nationalities", en: "An English person", si: "Engalanthaye kenek", alt: [], note: "", source: "pack" },
  { id: "ctry-germaniye-kenek", category: "Countries and nationalities", en: "A German", si: "Germaniye kenek", alt: [], note: "", source: "pack" },
  { id: "ctry-chiinaye-kenek", category: "Countries and nationalities", en: "A Chinese person", si: "Chiinaye kenek", alt: [], note: "", source: "pack" },

  // ---- Sentences (pack section 7 table) ----
  { id: "sent-oyaage-rata-mokakda", category: "Sentences", en: "What's your country?", si: "Oyaage rata mokakda?", alt: [], note: "", source: "pack" },
  { id: "sent-mage-rata-sri-lankaawa", category: "Sentences", en: "My country is Sri Lanka.", si: "Mage rata Sri Lankaawa.", alt: [], note: "", source: "pack" },
  { id: "sent-oyaa-kohenda", category: "Sentences", en: "Where are you from?", si: "Oyaa kohenda?", alt: [], note: "", source: "pack" },
  { id: "sent-oyaa-koheda", category: "Sentences", en: "Where are you?", si: "Oyaa koheda?", alt: [], note: "", source: "pack" },
  { id: "sent-oyaage-nama-mokakda", category: "Sentences", en: "What's your name?", si: "Oyaage nama mokakda?", alt: [], note: "", source: "pack" },
  { id: "sent-mage-nama-nimal", category: "Sentences", en: "My name is Nimal.", si: "Mage nama Nimal.", alt: [], note: "", source: "pack" },
  { id: "sent-hondin-innawaa", category: "Sentences", en: "I'm well (fine).", si: "Hondin innawaa.", alt: [], note: "", source: "pack" },
  { id: "sent-mama-lankaawe-kenek", category: "Sentences", en: "I'm Sri Lankan.", si: "Mama Lankaawe kenek.", alt: [], note: "", source: "pack" },
  { id: "sent-mama-amerikaawe-kenek", category: "Sentences", en: "I'm American.", si: "Mama (A)merikaawe kenek.", alt: ["Mama Amerikaawe kenek."], note: "", source: "pack" },
  { id: "sent-mama-indiyaawe-kenek", category: "Sentences", en: "I'm Indian.", si: "Mama Indiyaawe kenek.", alt: [], note: "", source: "pack" },
  { id: "sent-mama-dan-lankaawe-wada-karanawaa", category: "Sentences", en: "I'm currently working in Sri Lanka.", si: "Mama d(a)n Lankaawe w(a)da karanawaa.", alt: ["Mama dan Lankaawe wada karanawaa."], note: "", source: "pack" },
  { id: "sent-mama-dan-chiinaye-igena-gannawaa", category: "Sentences", en: "I'm currently studying in China.", si: "Mama d(a)n Chiinaye igena gannawaa.", alt: ["Mama dan Chiinaye igena gannawaa."], note: "", source: "pack" },
  { id: "sent-eyaa-dan-engalanthaye-innawaa", category: "Sentences", en: "He / She is currently living in England.", si: "Eyaa d(a)n Engalanthaye innawaa.", alt: ["Eyaa dan Engalanthaye innawaa."], note: "", source: "pack" },
  { id: "sent-mage-ammaa-amerikaawe-wada-karanawaa", category: "Sentences", en: "My mother works in America.", si: "Mage ammaa (A)merikaawe w(a)da karanawaa.", alt: ["Mage ammaa Amerikaawe wada karanawaa.", "Mage amma Amerikaawe wada karanawaa."], note: "", source: "pack" },
  { id: "sent-mama-bath-kanawaa", category: "Sentences", en: "I eat rice.", si: "Mama bath kanawaa.", alt: [], note: "", source: "pack" },

  // ================================================================
  // Additions (vocab_additions.md). Unverified: source is "web" or "ai".
  // ================================================================

  // ---- Numbers ----
  { id: "num-eka", category: "Numbers", en: "One", si: "eka", alt: [], note: "", source: "web" },
  { id: "num-deka", category: "Numbers", en: "Two", si: "deka", alt: [], note: "", source: "web" },
  { id: "num-thuna", category: "Numbers", en: "Three", si: "thuna", alt: ["tuna"], note: "", source: "web" },
  { id: "num-hathara", category: "Numbers", en: "Four", si: "hathara", alt: ["hatara"], note: "", source: "web" },
  { id: "num-paha", category: "Numbers", en: "Five", si: "paha", alt: [], note: "", source: "web" },
  { id: "num-haya", category: "Numbers", en: "Six", si: "haya", alt: [], note: "", source: "web" },
  { id: "num-hatha", category: "Numbers", en: "Seven", si: "hatha", alt: ["hata"], note: "", source: "web" },
  { id: "num-ata", category: "Numbers", en: "Eight", si: "ata", alt: [], note: "", source: "ai" },
  { id: "num-namaya", category: "Numbers", en: "Nine", si: "namaya", alt: [], note: "", source: "ai" },
  { id: "num-dahaya", category: "Numbers", en: "Ten", si: "dahaya", alt: [], note: "", source: "web" },

  // ---- Family and people ----
  { id: "fam-ayyaa", category: "Family and people", en: "Older brother", si: "ayyaa", alt: ["aiyya", "ayya"], note: "Sinhala has no single word for \"brother\"; it depends on age", source: "web" },
  { id: "fam-malli", category: "Family and people", en: "Younger brother", si: "malli", alt: [], note: "", source: "ai" },
  { id: "fam-akkaa", category: "Family and people", en: "Older sister", si: "akkaa", alt: ["akka", "akki"], note: "", source: "web" },
  { id: "fam-nangi", category: "Family and people", en: "Younger sister", si: "nangi", alt: [], note: "", source: "web" },
  { id: "fam-lamayaa", category: "Family and people", en: "Child", si: "lamayaa", alt: ["lamaya"], note: "", source: "ai" },
  { id: "fam-puthaa", category: "Family and people", en: "Son", si: "puthaa", alt: [], note: "", source: "ai" },
  { id: "fam-duwa", category: "Family and people", en: "Daughter", si: "duwa", alt: [], note: "", source: "ai" },
  { id: "fam-aachchi", category: "Family and people", en: "Grandmother", si: "aachchi", alt: [], note: "", source: "ai" },
  { id: "fam-seeya", category: "Family and people", en: "Grandfather", si: "seeya", alt: [], note: "", source: "ai" },
  { id: "fam-pawula", category: "Family and people", en: "Family", si: "pawula", alt: [], note: "", source: "ai" },

  // ---- Food and drink ----
  { id: "food-kaema", category: "Food and drink", en: "Food", si: "kaema", alt: ["kæma"], note: "", source: "ai" },
  { id: "food-kiri", category: "Food and drink", en: "Milk", si: "kiri", alt: [], note: "", source: "ai" },
  { id: "food-kopi", category: "Food and drink", en: "Coffee", si: "kopi", alt: [], note: "", source: "ai" },
  { id: "food-paan", category: "Food and drink", en: "Bread", si: "paan", alt: [], note: "", source: "ai" },
  { id: "food-maalu", category: "Food and drink", en: "Fish", si: "maalu", alt: [], note: "", source: "ai" },
  { id: "food-mas", category: "Food and drink", en: "Meat", si: "mas", alt: [], note: "", source: "ai" },
  { id: "food-biththara", category: "Food and drink", en: "Egg", si: "biththara", alt: [], note: "", source: "ai" },
  { id: "food-elawalu", category: "Food and drink", en: "Vegetables", si: "elawalu", alt: ["elavalu"], note: "", source: "ai" },
  { id: "food-seeni", category: "Food and drink", en: "Sugar", si: "seeni", alt: [], note: "", source: "ai" },
  { id: "food-lunu", category: "Food and drink", en: "Salt", si: "lunu", alt: [], note: "", source: "ai" },

  // ---- Places ----
  { id: "place-gedara", category: "Places", en: "Home / house", si: "gedara", alt: [], note: "", source: "ai" },
  { id: "place-kaaryaalaya", category: "Places", en: "Office", si: "kaaryaalaya", alt: [], note: "", source: "ai" },
  { id: "place-nagaraya", category: "Places", en: "Town / city", si: "nagaraya", alt: [], note: "", source: "ai" },
  { id: "place-muhuda", category: "Places", en: "Sea", si: "muhuda", alt: [], note: "", source: "ai" },

  // ---- Time ----
  { id: "time-ada", category: "Time", en: "Today", si: "ada", alt: [], note: "", source: "ai" },
  { id: "time-heta", category: "Time", en: "Tomorrow", si: "heta", alt: [], note: "", source: "ai" },
  { id: "time-iiye", category: "Time", en: "Yesterday", si: "iiye", alt: ["eeye"], note: "", source: "ai" },
  { id: "time-passe", category: "Time", en: "Later", si: "passe", alt: [], note: "", source: "ai" },
  { id: "time-hamadaama", category: "Time", en: "Every day", si: "h(a)madaama", alt: ["hamadaama", "hæmadaama"], note: "", source: "ai" },
  { id: "time-dawasa", category: "Time", en: "Day", si: "dawasa", alt: ["davasa"], note: "", source: "ai" },

  // ---- Describing words ----
  { id: "desc-loku", category: "Describing words", en: "Big", si: "loku", alt: [], note: "", source: "ai" },
  { id: "desc-podi", category: "Describing words", en: "Small", si: "podi", alt: [], note: "", source: "ai" },
  { id: "desc-narakai", category: "Describing words", en: "Bad", si: "narakai", alt: [], note: "Pairs with hondai (good)", source: "ai" },
  { id: "desc-rasnei", category: "Describing words", en: "Hot (weather)", si: "rasnei", alt: ["rasnai"], note: "", source: "ai" },
  { id: "desc-seethalai", category: "Describing words", en: "Cold", si: "seethalai", alt: [], note: "", source: "ai" },
  { id: "desc-rasai", category: "Describing words", en: "Tasty", si: "rasai", alt: [], note: "", source: "ai" },
  { id: "desc-lassanai", category: "Describing words", en: "Beautiful / lovely", si: "lassanai", alt: [], note: "Appears in the pack's reading text but isn't taught there", source: "ai" },
  { id: "desc-aluth", category: "Describing words", en: "New", si: "aluth", alt: [], note: "", source: "ai" },
  { id: "desc-parana", category: "Describing words", en: "Old (things)", si: "parana", alt: [], note: "", source: "ai" },

  // ---- Verbs ----
  { id: "verb-kathaa-karanawaa", category: "Verbs", en: "To speak", si: "kathaa karanawaa", alt: [], note: "Same pattern as wada karanawaa", source: "ai" },
  { id: "verb-kiyanawaa", category: "Verbs", en: "To say / tell", si: "kiyanawaa", alt: [], note: "", source: "ai" },
  { id: "verb-balanawaa", category: "Verbs", en: "To look / watch", si: "balanawaa", alt: [], note: "", source: "ai" },
  { id: "verb-kiyawanawaa", category: "Verbs", en: "To read", si: "kiyawanawaa", alt: ["kiyavanawaa"], note: "", source: "ai" },
  { id: "verb-liyanawaa", category: "Verbs", en: "To write", si: "liyanawaa", alt: [], note: "", source: "ai" },
  { id: "verb-nidaagannawaa", category: "Verbs", en: "To sleep", si: "nidaagannawaa", alt: [], note: "", source: "ai" },
  { id: "verb-denawaa", category: "Verbs", en: "To give", si: "denawaa", alt: [], note: "", source: "ai" },
  { id: "verb-gannawaa", category: "Verbs", en: "To take", si: "gannawaa", alt: [], note: "", source: "ai" },

  // ---- Verb negatives (present tense): replace -nawaa with -nne naa ----
  { id: "neg-kanne-naa", category: "Verb negatives", en: "Don't eat", si: "kanne naa", alt: ["kanne nae"], note: "From kanawaa", source: "web" },
  { id: "neg-bonne-naa", category: "Verb negatives", en: "Don't drink", si: "bonne naa", alt: ["bonne nae"], note: "From bonawaa", source: "ai" },
  { id: "neg-yanne-naa", category: "Verb negatives", en: "Don't go", si: "yanne naa", alt: ["yanne nae"], note: "From yanawaa", source: "ai" },
  { id: "neg-enne-naa", category: "Verb negatives", en: "Don't come", si: "enne naa", alt: ["enne nae"], note: "From enawaa", source: "ai" },
  { id: "neg-danne-naa", category: "Verb negatives", en: "Don't know", si: "danne naa", alt: ["danne nae"], note: "From dannawaa", source: "ai" },
  { id: "neg-igena-ganne-naa", category: "Verb negatives", en: "Don't learn / study", si: "igena ganne naa", alt: [], note: "From igena gannawaa", source: "ai" },
  { id: "neg-wada-karanne-naa", category: "Verb negatives", en: "Don't work", si: "wada karanne naa", alt: [], note: "From wada karanawaa", source: "ai" },
  { id: "neg-uyanne-naa", category: "Verb negatives", en: "Don't cook", si: "uyanne naa", alt: [], note: "From uyanawaa", source: "ai" },
  { id: "neg-inne-naa", category: "Verb negatives", en: "Don't live / am not (in a place)", si: "inne naa", alt: [], note: "From innawaa", source: "ai" },

  // ---- Phrases (additions) ----
  { id: "phr-karunaakarala", category: "Phrases", en: "Please", si: "karunaakarala", alt: ["karunakarala", "karunaakara"], note: "", source: "web" },
  { id: "phr-meeka-kiiyada", category: "Phrases", en: "How much is this?", si: "meeka kiiyada?", alt: ["meeka keeyada"], note: "", source: "web" },
  { id: "phr-mata-therenne-naa", category: "Phrases", en: "I don't understand", si: "mata therenne naa", alt: ["mata therenne nae"], note: "Uses mata (\"to me\"), not mama", source: "web" },
  { id: "phr-sinhala-danna-naa", category: "Phrases", en: "I don't speak Sinhala", si: "Sinhala danna naa", alt: ["Sinhala danne naa"], note: "Elsewhere the negative ends -nne naa (danne naa, don't know), so check which is right", source: "web" },
  { id: "phr-hemin-kiyanna", category: "Phrases", en: "Please speak slowly", si: "karunaakarala hemin kiyanna", alt: [], note: "", source: "web" },
  { id: "phr-aayeth-kiyanna", category: "Phrases", en: "Please say that again", si: "aayeth kiyanna", alt: [], note: "", source: "ai" },
  { id: "phr-mata-oonee", category: "Phrases", en: "I want …", si: "mata … oonee", alt: ["mata … one"], note: "Uses mata, not mama", source: "ai" },
  { id: "phr-mata-epaa", category: "Phrases", en: "I don't want it", si: "mata epaa", alt: [], note: "", source: "ai" },
  { id: "phr-bil-eka-denna", category: "Phrases", en: "The bill, please", si: "bil eka denna", alt: [], note: "", source: "web" },
  { id: "phr-karunaakarala-mata-wathura-denna", category: "Phrases", en: "Please give me water", si: "karunaakarala mata wathura denna", alt: [], note: "", source: "web" },

  // ---- Sentences (additions, present tense) ----
  { id: "sent-mama-the-bonawaa", category: "Sentences", en: "I drink tea.", si: "Mama thé bonawaa.", alt: ["Mama the bonawaa."], note: "", source: "ai" },
  { id: "sent-mama-bath-kanne-naa", category: "Sentences", en: "I don't eat rice.", si: "Mama bath kanne naa.", alt: [], note: "", source: "ai" },
  { id: "sent-api-kadayata-yanawaa", category: "Sentences", en: "We go to the shop.", si: "Api kadayata yanawaa.", alt: [], note: "", source: "ai" },
  { id: "sent-eyaa-iskolayata-yanawaa", category: "Sentences", en: "He / she goes to school.", si: "Eyaa iskolayata yanawaa.", alt: [], note: "", source: "ai" },
  { id: "sent-mage-yaaluwaa-lankaawata-enawaa", category: "Sentences", en: "My friend is coming to Sri Lanka.", si: "Mage yaaluwaa Lankaawata enawaa.", alt: ["Mage yaaluwaa Sri Lankaawata enawaa."], note: "", source: "ai" },
  { id: "sent-mama-danne-naa", category: "Sentences", en: "I don't know.", si: "Mama danne naa.", alt: [], note: "", source: "ai" },
  { id: "sent-eyaalaa-kopi-bonne-naa", category: "Sentences", en: "They don't drink coffee.", si: "Eyaalaa kopi bonne naa.", alt: [], note: "", source: "ai" },
  { id: "sent-mage-thaaththa-bath-uyanawaa", category: "Sentences", en: "My father cooks rice.", si: "Mage thaaththa bath uyanawaa.", alt: [], note: "", source: "ai" },
  { id: "sent-mama-sinhala-igena-gannawaa", category: "Sentences", en: "I'm learning Sinhala.", si: "Mama Sinhala igena gannawaa.", alt: [], note: "", source: "ai" },
  { id: "sent-oyaa-the-bonawaada", category: "Sentences", en: "Do you drink tea?", si: "Oyaa thé bonawaada?", alt: ["Oyaa the bonawaada?"], note: "Question marker -da", source: "ai" },
  { id: "sent-mama-engalanthaye-innawaa", category: "Sentences", en: "I live in England.", si: "Mama Engalanthaye innawaa.", alt: [], note: "Same pattern as pack section 7", source: "ai" },
  { id: "sent-eyaa-ada-wada-karanne-naa", category: "Sentences", en: "He / she doesn't work today.", si: "Eyaa ada wada karanne naa.", alt: [], note: "", source: "ai" }

];
