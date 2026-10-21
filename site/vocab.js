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
  { id: "sent-mama-bath-kanawaa", category: "Sentences", en: "I eat rice.", si: "Mama bath kanawaa.", alt: [], note: "", source: "pack" }

];
