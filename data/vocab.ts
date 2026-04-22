// Curated IELTS vocabulary bank — compact format.
// Definitions are fetched at runtime from dictionaryapi.dev.

export type VocabLevel = "B1" | "B2" | "C1" | "C2";
export type VocabSource = "AWL" | "Oxford 3000" | "Oxford 5000" | "IELTS Common";

export type VocabEntry = {
  word: string;
  level: VocabLevel;
  source: VocabSource;
};

// ── B1 Oxford 3000 (core) ────────────────────────────────────
const B1_OX3: string[] = [
  "achieve", "ability", "advantage", "benefit", "cause",
  "consider", "create", "demand", "develop", "discover",
  "effect", "encourage", "essential", "establish", "experience",
  "factor", "function", "generation", "growth", "improve",
  "increase", "individual", "influence", "involve", "knowledge",
  "lack", "manage", "material", "method", "necessary",
  "opinion", "opportunity", "physical", "population", "process",
  "purpose", "quality", "range", "reduce", "research",
  "responsible", "situation", "society", "solution", "structure",
  "suggest", "support", "tradition", "value", "vehicle",
];

// ── B1 IELTS topics ──────────────────────────────────────────
const B1_IELTS: string[] = [
  "commute", "curriculum", "literacy", "nutrition", "renewable",
  "unemployment", "welfare", "workforce", "pollution", "resource",
  "volunteer", "coastal", "domestic", "rural", "ancient",
];

// ── B2 Academic Word List ────────────────────────────────────
const B2_AWL: string[] = [
  "acquire", "allocate", "approach", "assess", "assume",
  "authority", "capable", "challenge", "communication", "complex",
  "component", "concept", "conduct", "consequence", "considerable",
  "constitute", "consumer", "context", "contribute", "controversy",
  "convert", "data", "define", "demonstrate", "derive",
  "distinct", "distribute", "dominate", "element", "emerge",
  "enable", "ensure", "estimate", "evidence", "evolve",
  "export", "finance", "framework", "fund", "generate",
  "guarantee", "hypothesis", "identify", "impact", "imply",
  "indicate", "initial", "instance", "integrate", "interact",
  "interpret", "invest", "isolate", "justify", "legislate",
  "locate", "maintain", "mature", "mechanism", "migrate",
  "minimum", "modify", "monitor", "negotiate", "network",
  "norm", "notion", "objective", "occur", "option",
  "outcome", "overall", "parallel", "participate", "perceive",
  "perspective", "philosophy", "policy", "potential", "precede",
  "predict", "primary", "principle", "proceed", "prohibit",
  "promote", "proportion", "publish", "pursue", "react",
  "recover", "regime", "regulate", "reinforce", "reject",
  "release", "relevant", "reluctant", "rely", "require",
  "resolve", "respond", "restore", "restrict", "retain",
  "revenue", "reverse", "revise", "revolution", "scheme",
  "sector", "secure", "seek", "select", "sequence",
  "series", "shift", "significant", "source", "specific",
  "stable", "status", "strategy", "structure", "submit",
  "subsequent", "substitute", "sufficient", "summary", "supplement",
  "survey", "sustain", "symbol", "target", "technique",
  "technology", "temporary", "theme", "theory", "thesis",
  "topic", "trace", "transfer", "transform", "trend",
  "trigger", "ultimate", "undertake", "unique", "valid",
  "vary", "version", "visible", "vision", "volume",
];

// ── B2 Oxford 5000 ───────────────────────────────────────────
const B2_OX5: string[] = [
  "diverse", "urban", "chronic", "inflation", "recession",
  "entrepreneur", "prosperity", "deforestation", "emission", "conservation",
  "stereotype", "censorship", "propaganda", "legislation", "scholarship",
  "vocational", "tuition", "deterrent", "sustainability",
];

// ── B2 IELTS topic vocab ─────────────────────────────────────
const B2_IELTS: string[] = [
  "biodiversity", "infrastructure", "surveillance", "cybersecurity", "obsolete",
  "algorithm", "sedentary", "preventive", "rehabilitation", "incarceration",
  "jurisdiction", "remuneration", "lucrative", "commuter", "congestion",
  "fossil", "pesticide", "drought", "endangered", "habitat",
  "species", "vaccine", "therapy", "diagnosis", "symptom",
  "obesity", "hygiene", "sanitation", "tutor", "diploma",
  "undergraduate", "postgraduate", "dissertation", "subsidy", "tariff",
  "deficit", "surplus", "commodity", "monopoly",
];

// ── B2 Environment ───────────────────────────────────────────
const B2_ENV: string[] = [
  "ecosystem", "extinction", "preservation", "landfill", "recycling",
  "atmosphere", "ozone", "reforestation", "erosion", "flood",
  "earthquake", "hurricane", "wildlife", "organic", "petroleum",
  "contaminate", "dispose", "glacier", "marine", "reservoir",
  "greenhouse", "sewage", "toxic", "ecological", "tropical",
];

// ── B2 Health ────────────────────────────────────────────────
const B2_HEALTH: string[] = [
  "infection", "cholesterol", "posture", "fatigue", "insomnia",
  "nutrient", "calorie", "carbohydrate", "protein", "metabolism",
  "immune", "allergy", "disorder", "prescription", "surgery",
  "antibiotic", "dosage", "recovery", "wellness", "anxiety",
  "depression", "remedy", "pediatric",
];

// ── B2 Technology ────────────────────────────────────────────
const B2_TECH: string[] = [
  "software", "hardware", "platform", "network", "database",
  "smartphone", "wireless", "broadband", "encryption", "firewall",
  "browser", "server", "artificial", "automate", "simulate",
  "virtual", "robot", "drone",
];

// ── B2 Education ─────────────────────────────────────────────
const B2_EDU: string[] = [
  "semester", "graduate", "syllabus", "seminar", "lecture",
  "workshop", "assignment", "assessment", "deadline", "revision",
  "textbook", "discipline", "academic", "faculty", "enrol",
  "attendance", "bursary",
];

// ── B2 Society & Work ────────────────────────────────────────
const B2_SOCIETY: string[] = [
  "equality", "diversity", "minority", "majority", "immigrant",
  "emigrate", "identity", "heritage", "ritual", "custom",
  "demographic", "migration", "assimilate", "nationality", "ethnic",
  "religion", "charity", "activist", "campaign", "reform",
  "regulation", "bureaucracy", "employer", "recruit", "resign",
  "promotion", "pension", "colleague", "workplace",
];

// ── B2 Travel & Tourism ──────────────────────────────────────
const B2_TRAVEL: string[] = [
  "destination", "tourism", "itinerary", "accommodation", "passport",
  "visa", "currency", "cuisine", "landmark", "monument",
  "resort", "expedition", "excursion", "cruise", "voyage",
  "overseas", "customs",
];

// ── B2 Food & Agriculture ────────────────────────────────────
const B2_FOOD: string[] = [
  "agriculture", "harvest", "cultivate", "livestock", "dairy",
  "poultry", "grain", "fertiliser", "irrigation", "crop",
  "pasture", "processed", "vegan", "vegetarian", "seasoning",
];

// ── C1 Academic Word List ────────────────────────────────────
const C1_AWL: string[] = [
  "advocate", "ambiguous", "analogy", "compensate", "comprise",
  "conform", "contradict", "convention", "credible", "crucial",
  "currency", "diminish", "discrete", "discriminate", "displace",
  "domain", "duration", "erode", "exploit", "fluctuate",
  "founded", "hierarchical", "highlight", "implicit", "incidence",
  "incorporate", "inherent", "initiative", "innovation", "integral",
  "integrity", "manipulate", "mutual", "offset", "ongoing",
  "overlap", "paradigm", "passive", "phenomenon", "practitioner",
  "premium", "presume", "prevalent", "prospect", "protocol",
  "radical", "rational", "rigid", "scenario", "scope",
  "simulate", "subordinate", "successor", "suppress", "suspend",
  "tolerance", "underlie", "widespread",
];

// ── C1 Oxford 5000 ───────────────────────────────────────────
const C1_OX5: string[] = [
  "compelling", "detrimental", "feasible", "implement", "mitigate",
  "scrutinise", "alleviate", "bolster", "discrepancy", "exacerbate",
  "pertinent", "tenacious", "meticulous", "resilient", "nostalgia",
  "autonomy",
];

// ── C1 Environment ───────────────────────────────────────────
const C1_ENV: string[] = [
  "depletion", "mitigation", "adaptation", "acidification", "salinity",
  "encroachment", "poaching", "degradation", "sanctuary", "mangrove",
  "wetland", "biofuel", "hydrocarbon", "permafrost", "microplastic",
  "indigenous",
];

// ── C1 Health ────────────────────────────────────────────────
const C1_HEALTH: string[] = [
  "contagious", "pathogen", "antibody", "inoculation", "pandemic",
  "outbreak", "epidemiology", "genome", "hereditary", "genetic",
  "malnutrition", "ailment", "placebo", "consultation", "referral",
  "prognosis", "palliative", "geriatric", "neurological", "cardiovascular",
  "respiratory",
];

// ── C1 Technology ────────────────────────────────────────────
const C1_TECH: string[] = [
  "cryptocurrency", "blockchain", "quantum", "nanotechnology", "biometric",
  "authentication", "scalability", "latency", "bandwidth", "dataset",
  "robotics", "prosthetic", "telemedicine",
];

// ── C1 Society & Politics ────────────────────────────────────
const C1_SOC: string[] = [
  "ideology", "totalitarian", "authoritarian", "democracy", "populism",
  "nationalism", "patriotism", "xenophobia", "tolerance", "coexistence",
  "cohesion", "polarisation", "electorate", "suffrage", "referendum",
  "constituency", "parliamentary", "judiciary", "legislature", "constitution",
  "amendment", "coalition", "mandate", "sovereignty",
];

// ── C1 Economy ───────────────────────────────────────────────
const C1_ECON: string[] = [
  "consumption", "expenditure", "profitability", "turnover", "liquidity",
  "solvency", "deflation", "stagnation", "austerity", "procurement",
  "outsourcing", "privatisation", "nationalisation", "monetary", "fiscal",
  "deregulation", "protectionism", "globalisation", "capitalism", "socialism",
];

// ── C1 Science ───────────────────────────────────────────────
const C1_SCI: string[] = [
  "methodology", "variable", "correlation", "causation", "empirical",
  "quantitative", "qualitative", "statistical", "observational", "experimental",
  "anomaly", "catalyst", "molecule", "particle", "radiation",
  "thermodynamic", "mutation",
];

// ── C2 Academic Word List ────────────────────────────────────
const C2_AWL: string[] = [
  "arbitrary", "coherent", "concurrent", "definitive", "deviate",
  "differentiate", "explicit", "finite", "incentive", "inevitable",
  "nucleus", "parameter", "predecessor", "preliminary", "rationale",
  "rhetoric", "subsidiary", "undermine", "utilitarian",
];

// ── C2 Oxford 5000 ───────────────────────────────────────────
const C2_OX5: string[] = [
  "cogent", "dichotomy", "epitome", "ubiquitous", "quintessential",
  "serendipity", "juxtapose", "ephemeral", "notwithstanding", "pedagogy",
];

// ── C2 Academic flair ────────────────────────────────────────
const C2_ACAD: string[] = [
  "eloquent", "articulate", "pertinent", "salient", "incontrovertible",
  "irrefutable", "nuanced", "multifaceted", "paradoxical", "contentious",
  "proliferate", "ameliorate", "galvanise", "circumvent", "perpetuate",
  "precipitate", "disseminate", "extrapolate", "hegemony", "antithesis",
  "synthesis",
];

// ── IELTS Writing Task 1 trend vocabulary ────────────────────
const TASK1_TRENDS: string[] = [
  "soar", "surge", "plunge", "plummet", "slump",
  "fluctuate", "oscillate", "stabilise", "plateau", "stagnate",
  "sharp", "steep", "gradual", "moderate", "slight",
  "negligible", "dramatic", "substantial", "marginal", "considerable",
];

// ── Writing power words ──────────────────────────────────────
const WRITING: string[] = [
  "furthermore", "nevertheless", "consequently", "arguably", "undoubtedly",
  "moreover", "conversely", "henceforth", "albeit", "hence",
  "whereas", "insofar", "accordingly", "additionally", "besides",
  "likewise", "meanwhile", "namely", "subsequently", "ultimately",
  "admittedly", "conceivably", "essentially", "evidently", "fundamentally",
  "presumably", "seemingly", "undeniably",
];

// ── Build the full list (deduped) ────────────────────────────
function build(words: string[], level: VocabLevel, source: VocabSource): VocabEntry[] {
  return words.map(w => ({ word: w, level, source }));
}

function dedupe(entries: VocabEntry[]): VocabEntry[] {
  const seen = new Set<string>();
  return entries.filter(e => {
    const key = e.word.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export const VOCAB: VocabEntry[] = dedupe([
  ...build(B1_OX3, "B1", "Oxford 3000"),
  ...build(B1_IELTS, "B1", "IELTS Common"),
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
  ...build(TASK1_TRENDS, "B2", "IELTS Common"),
  ...build(C1_AWL, "C1", "AWL"),
  ...build(C1_OX5, "C1", "Oxford 5000"),
  ...build(C1_ENV, "C1", "IELTS Common"),
  ...build(C1_HEALTH, "C1", "IELTS Common"),
  ...build(C1_TECH, "C1", "IELTS Common"),
  ...build(C1_SOC, "C1", "IELTS Common"),
  ...build(C1_ECON, "C1", "IELTS Common"),
  ...build(C1_SCI, "C1", "AWL"),
  ...build(WRITING, "C1", "IELTS Common"),
  ...build(C2_AWL, "C2", "AWL"),
  ...build(C2_OX5, "C2", "Oxford 5000"),
  ...build(C2_ACAD, "C2", "Oxford 5000"),
]);

export const VOCAB_SOURCES: Record<VocabSource, { label: string; url: string }> = {
  AWL: { label: "Academic Word List", url: "https://www.wgtn.ac.nz/lals/resources/academicwordlist" },
  "Oxford 3000": { label: "Oxford 3000", url: "https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000" },
  "Oxford 5000": { label: "Oxford 5000", url: "https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000" },
  "IELTS Common": { label: "IELTS Common Topics", url: "https://ieltsliz.com/ielts-vocabulary/" },
};
