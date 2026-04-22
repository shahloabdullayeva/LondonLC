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

// ── Build the full list ──────────────────────────────────────
function build(words: string[], level: VocabLevel, source: VocabSource): VocabEntry[] {
  return words.map(w => ({ word: w, level, source }));
}

export const VOCAB: VocabEntry[] = [
  ...build(B1_OX3, "B1", "Oxford 3000"),
  ...build(B1_IELTS, "B1", "IELTS Common"),
  ...build(B2_AWL, "B2", "AWL"),
  ...build(B2_OX5, "B2", "Oxford 5000"),
  ...build(B2_IELTS, "B2", "IELTS Common"),
  ...build(C1_AWL, "C1", "AWL"),
  ...build(C1_OX5, "C1", "Oxford 5000"),
  ...build(C2_AWL, "C2", "AWL"),
  ...build(C2_OX5, "C2", "Oxford 5000"),
  ...build(WRITING, "C1", "IELTS Common"),
];

export const VOCAB_SOURCES: Record<VocabSource, { label: string; url: string }> = {
  AWL: { label: "Academic Word List", url: "https://www.wgtn.ac.nz/lals/resources/academicwordlist" },
  "Oxford 3000": { label: "Oxford 3000", url: "https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000" },
  "Oxford 5000": { label: "Oxford 5000", url: "https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000" },
  "IELTS Common": { label: "IELTS Common Topics", url: "https://ieltsliz.com/ielts-vocabulary/" },
};
