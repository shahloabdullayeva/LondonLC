// Curated IELTS vocabulary bank — compact format.
// Definitions are fetched at runtime from dictionaryapi.dev.

export type VocabLevel = "B1" | "B2" | "C1" | "C2";
export type VocabSource = "AWL" | "Oxford 3000" | "Oxford 5000" | "IELTS Common";

export type VocabEntry = {
  word: string;
  level: VocabLevel;
  source: VocabSource;
};

// ── B1 ───────────────────────────────────────────────────────
const B1_OX3: string[] = [
  "achieve", "benefit", "consider", "develop", "environment",
  "global", "habit", "improve", "journey", "knowledge",
  "lifestyle", "manage", "necessary", "opinion", "population",
  "quality", "reduce", "solution", "tradition", "vehicle",
  "ability", "advantage", "cause", "create", "demand",
  "effect", "factor", "generation", "increase", "lack",
  "method", "opportunity", "process", "range", "research",
  "society", "suggest", "value", "climate", "community",
  "contain", "discover", "essential", "function", "growth",
  "individual", "involve", "material", "physical", "purpose",
  "relate", "responsible", "situation", "structure", "support",
  "encourage", "establish", "experience", "feature", "habitat",
];

const B1_IELTS: string[] = [
  "commute", "curriculum", "literacy", "nutrition", "renewable",
  "unemployment", "welfare", "automation", "innovation", "workforce",
  "epidemic", "immunity", "pollution", "resource", "transport",
  "volunteer", "ancient", "coastal", "domestic", "rural",
];

// ── B2 ───────────────────────────────────────────────────────
const B2_AWL: string[] = [
  "acquire", "allocate", "approach", "assess", "assume",
  "authority", "capable", "challenge", "circumstances", "communication",
  "complex", "component", "concept", "conduct", "consequence",
  "considerable", "constitute", "consumer", "context", "contribute",
  "controversy", "convert", "data", "define", "demonstrate",
  "derive", "design", "distinct", "distribute", "dominate",
  "economy", "element", "emerge", "enable", "energy",
  "ensure", "estimate", "evidence", "evolve", "export",
  "finance", "focus", "framework", "fund", "generate",
  "guarantee", "hypothesis", "identify", "ideology", "impact",
  "imply", "indicate", "initial", "instance", "integrate",
  "interact", "interpret", "invest", "involve", "isolate",
  "journal", "justify", "layer", "legislate", "liberal",
  "licence", "link", "locate", "maintain", "margin",
  "mature", "mechanism", "media", "mental", "migrate",
  "minimum", "minor", "modify", "monitor", "motive",
  "negotiate", "network", "norm", "notion", "objective",
  "occur", "option", "orient", "outcome", "output",
  "overall", "parallel", "participate", "perceive", "period",
  "perspective", "phase", "philosophy", "policy", "potential",
  "precede", "predict", "primary", "principle", "proceed",
  "professional", "prohibit", "promote", "proportion", "publish",
  "pursue", "range", "react", "recover", "refine",
  "regime", "regulate", "reinforce", "reject", "release",
  "relevant", "reluctant", "rely", "remove", "require",
  "resolve", "resource", "respond", "restore", "restrict",
  "retain", "revenue", "reverse", "revise", "revolution",
  "role", "route", "scheme", "section", "sector",
  "secure", "seek", "select", "sequence", "series",
  "shift", "significant", "similar", "source", "specific",
  "stable", "status", "strategy", "stress", "structure",
  "submit", "subsequent", "substitute", "sufficient", "sum",
  "summary", "supplement", "survey", "sustain", "symbol",
  "target", "task", "team", "technical", "technique",
  "technology", "temporary", "tense", "terminate", "theme",
  "theory", "thereby", "thesis", "topic", "trace",
  "tradition", "transfer", "transform", "trend", "trigger",
  "ultimate", "undergo", "undertake", "uniform", "unique",
  "utilise", "valid", "vary", "version", "violate",
  "visible", "vision", "volume", "voluntary", "welfare",
];

const B2_OX5: string[] = [
  "diverse", "sustain", "urban", "chronic", "inflation",
  "recession", "entrepreneur", "prosperity", "deforestation", "emission",
  "sustainability", "conservation", "stereotype", "censorship", "propaganda",
  "legislation", "scholarship", "vocational", "tuition", "deterrent",
];

const B2_IELTS: string[] = [
  "biodiversity", "infrastructure", "surveillance", "cybersecurity",
  "obsolete", "algorithm", "digitise", "sedentary", "preventive",
  "rehabilitation", "incarceration", "jurisdiction", "remuneration",
  "lucrative", "commuter", "congestion", "fossil", "pesticide",
  "drought", "endangered", "habitat", "species", "vaccine",
  "therapy", "diagnosis", "symptom", "obesity", "hygiene",
  "sanitation", "curriculum", "tutor", "semester", "diploma",
  "undergraduate", "postgraduate", "dissertation", "subsidy", "tariff",
  "GDP", "deficit", "surplus", "commodity", "monopoly",
];

// ── C1 ───────────────────────────────────────────────────────
const C1_AWL: string[] = [
  "advocate", "ambiguous", "analogy", "compensate", "comprise",
  "conform", "contradict", "controversy", "convention", "credible",
  "crucial", "currency", "cycle", "diminish", "discrete",
  "discriminate", "displace", "domain", "draft", "duration",
  "erode", "ethnic", "exploit", "fluctuate", "format",
  "founded", "globe", "grade", "hierarchical", "highlight",
  "implicit", "incidence", "incorporate", "index", "inherent",
  "initiative", "innovation", "input", "insert", "inspect",
  "integral", "integrity", "intelligence", "interval", "invoke",
  "irony", "labour", "levy", "likewise", "logical",
  "magnitude", "manipulate", "medium", "ministry", "mode",
  "mutual", "negate", "offset", "ongoing", "overlap",
  "paradigm", "passive", "phenomenon", "pose", "practitioner",
  "premium", "presume", "prevalent", "prohibit", "prospect",
  "protocol", "radical", "rational", "reluctance", "revenue",
  "rigid", "scenario", "scope", "simulate", "sole",
  "straightforward", "subordinate", "successor", "supplement", "suppress",
  "suspend", "thesis", "tolerance", "transit", "trigger",
  "underlie", "unify", "vehicle", "whereby", "widespread",
];

const C1_OX5: string[] = [
  "compelling", "detrimental", "feasible", "implement", "mitigate",
  "prevalent", "scrutinise", "alleviate", "bolster", "discrepancy",
  "exacerbate", "pertinent", "tenacious", "meticulous", "resilient",
  "nostalgia", "assimilate", "autonomy",
];

// ── C2 ───────────────────────────────────────────────────────
const C2_AWL: string[] = [
  "arbitrary", "coherent", "concurrent", "definitive", "deviate",
  "differentiate", "empirical", "explicit", "finite", "incentive",
  "inclination", "inevitable", "infrastructure", "inherent", "interval",
  "invoke", "mediate", "nucleus", "parameter", "predecessor",
  "preliminary", "rationale", "reluctant", "rhetoric", "subsidiary",
  "thereby", "trace", "undermine", "utilitarian", "whereby",
];

const C2_OX5: string[] = [
  "cogent", "dichotomy", "epitome", "ubiquitous", "quintessential",
  "serendipity", "juxtapose", "ephemeral", "notwithstanding", "pedagogy",
];

// ── Linking & Writing Power Words ────────────────────────────
const WRITING: string[] = [
  "furthermore", "nevertheless", "consequently", "arguably", "undoubtedly",
  "moreover", "conversely", "notwithstanding", "henceforth", "whereby",
  "albeit", "hence", "thus", "whereas", "insofar",
];

// ── Extended B1 (general) ────────────────────────────────────
const B1_EXTRAS: string[] = [
  "accept", "adventure", "annual", "appointment", "average",
  "balance", "behave", "borrow", "budget", "celebrate",
  "challenge", "character", "citizen", "combine", "comfort",
  "communicate", "compare", "compete", "concentrate", "confident",
  "cooperate", "courage", "creative", "crisis", "cultural",
  "decision", "depend", "describe", "determine", "disappear",
  "discuss", "display", "dramatic", "educate", "effort",
  "emotion", "employ", "equal", "escape", "examine",
  "exchange", "expand", "expect", "explain", "familiar",
  "flexible", "gain", "generate", "handle", "healthy",
  "hobby", "honest", "identify", "ignore", "imagine",
  "impress", "include", "independent", "indicate", "influence",
  "inspire", "introduce", "invent", "invest", "investigate",
  "invite", "issue", "judge", "launch", "leadership",
  "likely", "limit", "manufacture", "mention", "message",
  "mobile", "monitor", "motivate", "narrow", "normal",
  "obvious", "occasion", "offer", "operate", "oppose",
  "organise", "patient", "pattern", "peaceful", "perform",
  "permit", "plenty", "polite", "positive", "practise",
  "prefer", "prepare", "prevent", "produce", "progress",
  "promote", "protect", "protest", "proud", "public",
  "punish", "qualify", "quantity", "rapid", "realistic",
];

// ── B2 Environment ───────────────────────────────────────────
const B2_ENV: string[] = [
  "ecosystem", "extinction", "preservation", "landfill", "recycling",
  "atmosphere", "ozone", "reforestation", "erosion", "flood",
  "earthquake", "hurricane", "wildlife", "habitat", "organic",
  "petroleum", "contaminate", "dispose", "glacier", "marine",
  "reservoir", "herbicide", "pesticide", "greenhouse", "sewage",
  "waste", "toxic", "ecological", "carbon", "diesel",
  "mammal", "reptile", "vegetation", "tropical", "biodiverse",
];

// ── B2 Health ────────────────────────────────────────────────
const B2_HEALTH: string[] = [
  "diagnose", "symptom", "therapy", "vaccine", "infection",
  "cholesterol", "obesity", "hygiene", "sanitation", "posture",
  "fatigue", "insomnia", "nutrient", "calorie", "carbohydrate",
  "protein", "metabolism", "immune", "allergy", "disorder",
  "prescription", "surgery", "antibiotic", "dosage", "recovery",
  "wellness", "mental", "emotional", "physical", "anxiety",
  "depression", "stress", "remedy", "cure", "pediatric",
];

// ── B2 Technology ────────────────────────────────────────────
const B2_TECH: string[] = [
  "device", "gadget", "software", "hardware", "platform",
  "interface", "network", "database", "interface", "smartphone",
  "wireless", "broadband", "encryption", "firewall", "backup",
  "upload", "download", "browser", "server", "programmer",
  "developer", "artificial", "automate", "simulate", "virtual",
  "augmented", "pixel", "robot", "drone", "laptop",
];

// ── B2 Education ─────────────────────────────────────────────
const B2_EDU: string[] = [
  "tutor", "semester", "diploma", "graduate", "undergraduate",
  "postgraduate", "syllabus", "seminar", "lecture", "workshop",
  "assignment", "assessment", "deadline", "revision", "notebook",
  "exam", "grade", "mark", "textbook", "thesis",
  "dissertation", "discipline", "subject", "academic", "faculty",
  "classroom", "enrol", "attendance", "scholarship", "bursary",
];

// ── B2 Society & Work ────────────────────────────────────────
const B2_SOCIETY: string[] = [
  "equality", "diversity", "minority", "majority", "citizen",
  "immigrant", "emigrate", "identity", "culture", "heritage",
  "tradition", "ritual", "custom", "generation", "demographic",
  "migration", "integrate", "assimilate", "nationality", "ethnic",
  "religion", "belief", "charity", "volunteer", "activist",
  "campaign", "reform", "policy", "regulation", "bureaucracy",
  "employee", "employer", "recruit", "resign", "promotion",
  "salary", "wage", "pension", "colleague", "workplace",
];

// ── B2 Travel & Tourism ──────────────────────────────────────
const B2_TRAVEL: string[] = [
  "destination", "tourism", "souvenir", "itinerary", "accommodation",
  "passport", "visa", "currency", "cuisine", "landmark",
  "monument", "heritage", "resort", "expedition", "backpack",
  "excursion", "cruise", "voyage", "overseas", "abroad",
  "border", "customs", "duty-free", "exchange", "guide",
];

// ── B2 Food & Agriculture ────────────────────────────────────
const B2_FOOD: string[] = [
  "agriculture", "harvest", "cultivate", "livestock", "dairy",
  "poultry", "grain", "wheat", "rice", "vegetable",
  "fertilizer", "irrigation", "crop", "pasture", "organic",
  "genetically", "processed", "nutrition", "vegan", "vegetarian",
  "spicy", "bland", "bitter", "savoury", "seasoning",
];

// ── C1 Environment ───────────────────────────────────────────
const C1_ENV: string[] = [
  "depletion", "sustainable", "carbon-neutral", "mitigation", "adaptation",
  "acidification", "salinity", "encroachment", "poaching", "degradation",
  "sanctuary", "coral", "mangrove", "wetland", "ecosystem",
  "renewable", "non-renewable", "offset", "biofuel", "hydrocarbon",
  "ozone-layer", "permafrost", "microplastic", "endangered", "indigenous",
];

// ── C1 Health ────────────────────────────────────────────────
const C1_HEALTH: string[] = [
  "contagious", "pathogen", "antibody", "inoculation", "pandemic",
  "outbreak", "epidemiology", "genome", "hereditary", "genetic",
  "malnutrition", "starvation", "ailment", "ventilator", "placebo",
  "consultation", "referral", "prognosis", "terminal", "palliative",
  "rehabilitation", "geriatric", "neurological", "cardiovascular", "respiratory",
];

// ── C1 Technology ────────────────────────────────────────────
const C1_TECH: string[] = [
  "cryptocurrency", "blockchain", "quantum", "nanotechnology", "bioengineering",
  "genome-editing", "biometric", "surveillance", "authentication", "verification",
  "interoperability", "scalability", "latency", "bandwidth", "cloud-computing",
  "machine-learning", "deep-learning", "neural-network", "dataset", "algorithm",
  "automation", "robotics", "prosthetic", "exoskeleton", "telemedicine",
];

// ── C1 Society & Politics ────────────────────────────────────
const C1_SOC: string[] = [
  "ideology", "totalitarian", "authoritarian", "democracy", "oligarchy",
  "populism", "nationalism", "patriotism", "xenophobia", "tolerance",
  "coexistence", "cohesion", "fragmentation", "polarisation", "demagogue",
  "electorate", "suffrage", "referendum", "constituency", "parliamentary",
  "judiciary", "legislature", "executive", "constitution", "amendment",
  "lobby", "caucus", "coalition", "mandate", "sovereignty",
];

// ── C1 Economy ───────────────────────────────────────────────
const C1_ECON: string[] = [
  "consumption", "expenditure", "overhead", "profitability", "turnover",
  "liquidity", "solvency", "inflation-rate", "deflation", "stagnation",
  "recession-proof", "austerity", "subsidy", "procurement", "outsourcing",
  "privatisation", "nationalisation", "monetary", "fiscal", "regulation",
  "deregulation", "protectionism", "globalisation", "capitalism", "socialism",
  "welfare-state", "trade-deficit", "trade-surplus", "gross-domestic-product", "per-capita",
];

// ── C1 Science ───────────────────────────────────────────────
const C1_SCI: string[] = [
  "hypothesis", "methodology", "variable", "correlation", "causation",
  "empirical", "quantitative", "qualitative", "sample-size", "statistical",
  "observational", "experimental", "replicable", "peer-reviewed", "anomaly",
  "phenomenon", "catalyst", "molecule", "particle", "radiation",
  "gravitational", "thermodynamic", "quantum-mechanics", "evolution", "mutation",
];

// ── C2 Academic ──────────────────────────────────────────────
const C2_ACAD: string[] = [
  "eloquent", "articulate", "coherent", "compelling", "cogent",
  "pertinent", "salient", "incontrovertible", "irrefutable", "nuanced",
  "dichotomous", "multifaceted", "paradoxical", "contentious", "polemical",
  "proliferate", "exacerbate", "ameliorate", "galvanise", "catalyse",
  "circumvent", "perpetuate", "precipitate", "disseminate", "extrapolate",
  "hegemony", "zeitgeist", "antithesis", "synthesis", "nuance",
];

// ── IELTS Writing Task 1 trend vocabulary ────────────────────
const TASK1_TRENDS: string[] = [
  "rise", "increase", "grow", "climb", "soar",
  "surge", "rocket", "double", "triple", "peak",
  "fall", "decline", "decrease", "drop", "plunge",
  "plummet", "slump", "halve", "dip", "bottom-out",
  "fluctuate", "oscillate", "vary", "waver", "stabilise",
  "level-off", "remain-steady", "plateau", "hold-steady", "stagnate",
  "sharp", "steep", "steady", "gradual", "moderate",
  "slight", "minimal", "negligible", "dramatic", "substantial",
  "marginal", "modest", "considerable", "significant", "marked",
];

// ── Writing power words extras ───────────────────────────────
const WRITING_EXTRAS: string[] = [
  "accordingly", "additionally", "alternatively", "besides", "correspondingly",
  "despite", "furthermore", "in-contrast", "in-summary", "in-conclusion",
  "likewise", "meanwhile", "namely", "on-the-contrary", "overall",
  "similarly", "specifically", "subsequently", "to-illustrate", "ultimately",
  "admittedly", "arguably", "conceivably", "essentially", "evidently",
  "fundamentally", "presumably", "seemingly", "supposedly", "undeniably",
];

// ── Build the full list ──────────────────────────────────────
function build(words: string[], level: VocabLevel, source: VocabSource): VocabEntry[] {
  return words.map(w => ({ word: w, level, source }));
}

export const VOCAB: VocabEntry[] = dedupe([
  ...build(B1_OX3, "B1", "Oxford 3000"),
  ...build(B1_IELTS, "B1", "IELTS Common"),
  ...build(B1_EXTRAS, "B1", "Oxford 3000"),
  ...build(B2_AWL, "B2", "AWL"),
  ...build(B2_OX5, "B2", "Oxford 5000"),
  ...build(B2_IELTS, "B2", "IELTS Common"),
  ...build(B2_ENV, "B2", "IELTS Common"),
  ...build(B2_HEALTH, "B2", "IELTS Common"),
  ...build(B2_TECH, "B2", "IELTS Common"),
  ...build(B2_EDU, "B2", "IELTS Common"),
  ...build(B2_SOCIETY, "B2", "IELTS Common"),
  ...build(B2_TRAVEL, "B2", "IELTS Common"),
  ...build(B2_FOOD, "B2", "IELTS Common"),
  ...build(C1_AWL, "C1", "AWL"),
  ...build(C1_OX5, "C1", "Oxford 5000"),
  ...build(C1_ENV, "C1", "IELTS Common"),
  ...build(C1_HEALTH, "C1", "IELTS Common"),
  ...build(C1_TECH, "C1", "IELTS Common"),
  ...build(C1_SOC, "C1", "IELTS Common"),
  ...build(C1_ECON, "C1", "IELTS Common"),
  ...build(C1_SCI, "C1", "AWL"),
  ...build(C2_AWL, "C2", "AWL"),
  ...build(C2_OX5, "C2", "Oxford 5000"),
  ...build(C2_ACAD, "C2", "Oxford 5000"),
  ...build(WRITING, "C1", "IELTS Common"),
  ...build(WRITING_EXTRAS, "C1", "IELTS Common"),
  ...build(TASK1_TRENDS, "B2", "IELTS Common"),
]);

function dedupe(entries: VocabEntry[]): VocabEntry[] {
  const seen = new Set<string>();
  return entries.filter(e => {
    const key = e.word.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export const VOCAB_SOURCES: Record<VocabSource, { label: string; url: string }> = {
  AWL: { label: "Academic Word List", url: "https://www.wgtn.ac.nz/lals/resources/academicwordlist" },
  "Oxford 3000": { label: "Oxford 3000", url: "https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000" },
  "Oxford 5000": { label: "Oxford 5000", url: "https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000" },
  "IELTS Common": { label: "IELTS Common Topics", url: "https://ieltsliz.com/ielts-vocabulary/" },
};
