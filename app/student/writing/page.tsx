"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Send, Loader2, Download, ChevronDown, ChevronUp, RefreshCw, Pencil, Clock, PenLine } from "lucide-react";
import StudentShell from "@/components/StudentShell";
import {
  getSession,
  getSubmissions,
  submitEssay,
  gradeEssayWithAI,
  createPremiumRequest,
  getStudentPremiumRequest,
  type StudentSession,
  type WritingSubmission,
  type Correction,
} from "@/lib/store";

const ANTI_PASTE_ENABLED = true;

const PROMPTS = [
  `Some people think that governments should invest more money in public transport. Others think that building more roads for cars is the better option. Discuss both views and give your own opinion.`,
  `Many companies now allow their employees to work remotely. Do you think the advantages of remote work outweigh the disadvantages? Discuss both views and give your own opinion.`,
  `In many countries, the gap between the rich and the poor is increasing. What problems does this cause and what solutions can be proposed?`,
  `Some people believe that university education should be free for everyone, while others think students should pay for their own education. Discuss both views and give your opinion.`,
  `Nowadays many people choose to be self-employed rather than work for a company or organisation. Why might this be the case? What could be the disadvantages of being self-employed?`,
  `Some people think that the best way to reduce crime is to give longer prison sentences. Others think there are better alternative ways of reducing crime. Discuss both views and give your opinion.`,
  `In some countries, young people are encouraged to work or travel for a year between finishing school and starting university. Discuss the advantages and disadvantages for young people who do this.`,
  `Some people say that advertising is extremely successful at persuading us to buy things. Others say that advertising is so common that we no longer pay attention to it. Discuss both views and give your own opinion.`,
  `Many people believe that social media has had a negative effect on both individuals and society. To what extent do you agree or disagree?`,
  `Some people think that children should begin their formal education at a very early age and should spend most of their time on school studies. Others believe that young children should spend most of their time playing. Discuss both views and give your opinion.`,
  `The internet has transformed the way information is shared and consumed, but it has also created problems that did not exist before. What are the most serious problems associated with the internet and what solutions can you suggest?`,
  `In the future, nobody will buy printed newspapers or books because they will be able to read everything they want online for free. To what extent do you agree or disagree with this statement?`,
  `Some people think that the increasing use of computers and mobile phones for communication has had a negative effect on young people's reading and writing skills. To what extent do you agree or disagree?`,
  `Environmental problems should be solved by governments rather than by individuals. To what extent do you agree or disagree?`,
  `In many cities, the use of video cameras in public places is being increased in order to reduce crime, but some people believe that these measures restrict our individual freedom. Do the benefits of increased security outweigh the drawbacks?`,
  `Some experts believe that it is better for children to begin learning a foreign language at primary school rather than secondary school. Do the advantages of this outweigh the disadvantages?`,
  `It is sometimes argued that too many students go to university, while others claim that a university education should be a universal right. Discuss both sides of this argument and give your own opinion.`,
  `People now have the freedom to work and live anywhere in the world due to the development of communication technology and transportation. Do the advantages of this development outweigh the disadvantages?`,
];

const CORRECTION_COLORS: Record<Correction["type"], { bg: string; fg: string; label: string }> = {
  grammar:     { bg: "rgba(239,68,68,0.14)",  fg: "#fca5a5", label: "Grammar" },
  vocabulary:  { bg: "rgba(59,130,246,0.14)", fg: "#93c5fd", label: "Vocabulary" },
  cohesion:    { bg: "rgba(168,85,247,0.14)", fg: "#d8b4fe", label: "Cohesion" },
  style:       { bg: "rgba(16,185,129,0.14)", fg: "#6ee7b7", label: "Style" },
  spelling:    { bg: "rgba(234,179,8,0.14)",  fg: "#fde047", label: "Spelling" },
  punctuation: { bg: "rgba(236,72,153,0.14)", fg: "#f9a8d4", label: "Punctuation" },
};

const DRAFT_KEY = "llc.writing.draft.v1";
const PROMPT_KEY = "llc.writing.prompt.v1";

function ScoreRing({ value, max = 9 }: { value: number; max?: number }) {
  const r = 40;
  const c = 2 * Math.PI * r;
  const filled = (Math.min(value, max) / max) * c;
  return (
    <div className="score-ring">
      <svg width="90" height="90" viewBox="0 0 90 90">
        <circle cx="45" cy="45" r={r} fill="none" stroke="var(--line-2)" strokeWidth="3" />
        <circle cx="45" cy="45" r={r} fill="none" stroke="var(--accent)" strokeWidth="3"
          strokeDasharray={`${filled} ${c}`} strokeLinecap="round" />
      </svg>
      <div style={{ textAlign: "center" }}>
        <div className="val">{value.toFixed(1)}</div>
        <div className="lab">of {max.toFixed(1)}</div>
      </div>
    </div>
  );
}

type GradingStatus = "idle" | "submitting" | "grading" | "done" | "error";

const FREE_GRADING_LIMIT = 2;

function pickRandomPrompt(exclude?: string): string {
  const pool = exclude ? PROMPTS.filter(p => p !== exclude) : PROMPTS;
  return pool[Math.floor(Math.random() * pool.length)];
}

function promptSlug(prompt: string): string {
  return prompt
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 6)
    .join("-")
    .toLowerCase() || "essay";
}

function downloadSubmissionPDF(s: WritingSubmission, studentName: string) {
  if (typeof window === "undefined") return;
  const w = window.open("", "_blank", "width=900,height=1100");
  if (!w) return;
  const esc = (x: string) =>
    x.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const scores = [
    { k: "Task response", v: s.taskResponse },
    { k: "Coherence & cohesion", v: s.coherenceCohesion },
    { k: "Lexical resource", v: s.lexicalResource },
    { k: "Grammar range & accuracy", v: s.grammarAccuracy },
  ];
  const corrections = s.corrections ?? [];
  const feedback = s.feedback ?? [];
  const strengths = s.strengths ?? [];
  const nextSteps = s.nextSteps ?? [];
  const graded = s.gradedAt ? new Date(s.gradedAt) : new Date(s.createdAt);
  const filename = `${promptSlug(s.prompt)}-band-${s.overallBand?.toFixed(1) ?? "draft"}`;
  w.document.write(`<!doctype html>
<html><head><meta charset="utf-8"><title>${esc(filename)}</title>
<style>
  @page { margin: 14mm 14mm 16mm; }
  body { font-family: "Iowan Old Style", Georgia, serif; color: #111; font-size: 11.5pt; line-height: 1.55; padding: 20pt 24pt; }
  header { display: flex; justify-content: space-between; border-bottom: 1px solid #333; padding-bottom: 10pt; margin-bottom: 14pt; }
  .brand { font-family: ui-monospace, monospace; font-size: 10pt; letter-spacing: 0.14em; text-transform: uppercase; }
  .meta { font-size: 9.5pt; text-align: right; color: #333; }
  h1 { font-size: 22pt; font-weight: 600; margin: 0 0 18pt; letter-spacing: -0.01em; }
  h2 { font-size: 12pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; margin: 16pt 0 6pt; color: #222; border-bottom: 1px solid #ccc; padding-bottom: 3pt; }
  h3 { font-size: 11pt; margin: 8pt 0 3pt; }
  section { margin-bottom: 10pt; page-break-inside: avoid; }
  table { width: 100%; border-collapse: collapse; font-size: 11pt; }
  td { padding: 4pt 0; border-bottom: 1px solid #eee; }
  td:last-child { text-align: right; font-family: ui-monospace, monospace; }
  .essay { white-space: pre-wrap; }
  .corr { margin: 6pt 0; padding: 6pt 0; border-bottom: 1px dashed #ccc; page-break-inside: avoid; }
  .tag { display: inline-block; font-size: 8.5pt; font-family: ui-monospace, monospace; letter-spacing: 0.1em; text-transform: uppercase; color: #555; border: 1px solid #999; padding: 1pt 6pt; border-radius: 999px; margin-bottom: 4pt; }
  .orig { color: #a00; font-size: 10.5pt; }
  .sugg { color: #070; font-size: 10.5pt; font-weight: 600; margin: 2pt 0; }
  .expl { color: #444; font-size: 10pt; font-style: italic; }
  ul { padding-left: 16pt; }
  footer { margin-top: 16pt; padding-top: 8pt; border-top: 1px solid #ccc; font-family: ui-monospace, monospace; font-size: 8.5pt; letter-spacing: 0.1em; text-transform: uppercase; color: #666; text-align: center; }
</style></head><body>
<header>
  <div class="brand">London · LC</div>
  <div class="meta">
    <div><b>${esc(studentName)}</b></div>
    <div>${graded.toLocaleString()}</div>
    <div>${s.wordCount} words</div>
  </div>
</header>
<h1>IELTS Writing Task 2 — Band ${s.overallBand?.toFixed(1) ?? "—"}</h1>
<section><h2>Prompt</h2><p>${esc(s.prompt)}</p></section>
<section><h2>Essay</h2><p class="essay">${esc(s.essay)}</p></section>
<section><h2>Scores</h2><table><tbody>
  ${scores.map(c => `<tr><td>${esc(c.k)}</td><td>${c.v?.toFixed(1) ?? "—"}</td></tr>`).join("")}
  <tr><td><b>Overall</b></td><td><b>${s.overallBand?.toFixed(1) ?? "—"}</b></td></tr>
</tbody></table></section>
${feedback.length ? `<section><h2>Examiner feedback</h2>${feedback.map(f => `<div><h3>${esc(f.criterion)}</h3><p>${esc(f.comment)}</p></div>`).join("")}</section>` : ""}
${corrections.length ? `<section><h2>Corrections (${corrections.length})</h2>${corrections.map(c => {
  const tag = (CORRECTION_COLORS[c.type] ?? CORRECTION_COLORS.style).label;
  return `<div class="corr"><div class="tag">${esc(tag)}</div><div class="orig">Original: &ldquo;${esc(c.original)}&rdquo;</div><div class="sugg">Suggested: &ldquo;${esc(c.suggestion)}&rdquo;</div><div class="expl">${esc(c.explanation)}</div></div>`;
}).join("")}</section>` : ""}
${strengths.length ? `<section><h2>What's working</h2><ul>${strengths.map(x => `<li>${esc(x)}</li>`).join("")}</ul></section>` : ""}
${nextSteps.length ? `<section><h2>Next steps</h2><ul>${nextSteps.map(x => `<li>${esc(x)}</li>`).join("")}</ul></section>` : ""}
<footer>Generated by London LC · Graded by Claude Opus 4.7</footer>
<script>
  document.title = ${JSON.stringify(filename)};
  window.addEventListener('load', () => setTimeout(() => window.print(), 250));
</script>
</body></html>`);
  w.document.close();
}

export default function WritingPage() {
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null>(null);
  const [text, setText] = useState("");
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [status, setStatus] = useState<GradingStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [gradingProgress, setGradingProgress] = useState(0);
  const [gradingStage, setGradingStage] = useState("");
  const [lastSub, setLastSub] = useState<WritingSubmission | null>(null);
  const [filter, setFilter] = useState<"all" | Correction["type"]>("all");
  const [prompt, setPrompt] = useState<string>(PROMPTS[0]);
  const [customMode, setCustomMode] = useState(false);
  const [customDraft, setCustomDraft] = useState("");
  const [history, setHistory] = useState<WritingSubmission[]>([]);
  const [historyOpen, setHistoryOpen] = useState<string | null>(null);
  const [violations, setViolations] = useState(0);
  const [paymentRequested, setPaymentRequested] = useState(false);
  const [requestSending, setRequestSending] = useState(false);
  const [selectedTier, setSelectedTier] = useState(10);

  useEffect(() => {
    const s = getSession();
    if (!s || s.isAdmin) { router.push("/auth/login"); return; }
    setSession(s);

    let storedPrompt: string | null = null;
    try {
      storedPrompt = sessionStorage.getItem(PROMPT_KEY);
      setText(localStorage.getItem(DRAFT_KEY) || "");
    } catch {}

    const next = storedPrompt && storedPrompt.trim() ? storedPrompt : pickRandomPrompt();
    setPrompt(next);
    try { sessionStorage.setItem(PROMPT_KEY, next); } catch {}

    getStudentPremiumRequest(s.id).then(r => { if (r) setPaymentRequested(true); });
    getSubmissions(s.id).then(rows => {
      setHistory(rows);
    });
  }, [router]);

  useEffect(() => {
    if (!session) return;
    const id = window.setTimeout(() => {
      try { localStorage.setItem(DRAFT_KEY, text); } catch {}
      setSavedAt(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    }, 500);
    return () => window.clearTimeout(id);
  }, [text, session]);

  useEffect(() => {
    if (!session || session.anticheatBypass) return;
    const handleVisibility = () => {
      if (document.hidden) setViolations(v => v + 1);
    };
    const handleBlur = () => setViolations(v => v + 1);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("blur", handleBlur);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("blur", handleBlur);
    };
  }, [session]);

  const words = useMemo(() => text.trim().split(/\s+/).filter(Boolean).length, [text]);
  const chars = text.length;
  const targetHit = words >= 250;
  const isPremium = session?.isPremium === true;
  const extraCredits = session?.gradingCredits ?? 0;
  const gradedCount = history.filter(h => h.overallBand != null).length;
  const totalAllowed = FREE_GRADING_LIMIT + extraCredits;
  const canGrade = isPremium || gradedCount < totalAllowed;
  const remaining = Math.max(0, totalAllowed - gradedCount);

  const shufflePrompt = () => {
    if (status === "submitting" || status === "grading") return;
    const next = pickRandomPrompt(prompt);
    setPrompt(next);
    setCustomMode(false);
    try { sessionStorage.setItem(PROMPT_KEY, next); } catch {}
  };

  const openCustom = () => {
    if (status === "submitting" || status === "grading") return;
    setCustomDraft(prompt);
    setCustomMode(true);
  };

  const saveCustom = () => {
    const trimmed = customDraft.trim();
    if (trimmed.length < 20) {
      setErrorMsg("Custom topic must be at least 20 characters.");
      return;
    }
    setErrorMsg("");
    setPrompt(trimmed);
    setCustomMode(false);
    try { sessionStorage.setItem(PROMPT_KEY, trimmed); } catch {}
  };

  const handleSubmit = async () => {
    if (!session || !targetHit || status === "submitting" || status === "grading") return;

    setStatus("submitting");
    setErrorMsg("");
    setGradingProgress(5);
    setGradingStage("Saving your essay…");

    const sub = await submitEssay(session.id, `${session.name} ${session.surname}`, prompt, text);
    if (!sub) {
      setStatus("error");
      setGradingProgress(0);
      setErrorMsg("Failed to save essay. Check your connection.");
      return;
    }

    setStatus("grading");
    setLastSub(sub);
    setGradingProgress(15);
    setGradingStage("Sending to examiner…");

    const progressTimer = setInterval(() => {
      setGradingProgress(prev => {
        if (prev < 35) return prev + 2;
        if (prev < 60) return prev + 1.5;
        if (prev < 80) return prev + 0.8;
        if (prev < 92) return prev + 0.3;
        return prev;
      });
    }, 1000);

    const stageTimer = setTimeout(() => {
      setGradingStage("Reading your essay…");
      setTimeout(() => setGradingStage("Grading against IELTS criteria…"), 4000);
      setTimeout(() => setGradingStage("Writing detailed feedback…"), 10000);
      setTimeout(() => setGradingStage("Generating corrections…"), 18000);
      setTimeout(() => setGradingStage("Almost done…"), 28000);
    }, 2000);

    const grading = await gradeEssayWithAI(sub.id, prompt, text);
    clearInterval(progressTimer);
    clearTimeout(stageTimer);

    if (!grading) {
      setStatus("error");
      setGradingProgress(0);
      setErrorMsg("Essay saved but AI grading failed. Your teacher can still review it manually.");
      return;
    }

    setGradingProgress(100);
    setGradingStage("Done!");

    const updated: WritingSubmission = {
      ...sub,
      taskResponse: grading.taskResponse,
      coherenceCohesion: grading.coherenceCohesion,
      lexicalResource: grading.lexicalResource,
      grammarAccuracy: grading.grammarAccuracy,
      overallBand: grading.overallBand,
      feedback: grading.feedback,
      corrections: grading.corrections,
      strengths: grading.strengths,
      nextSteps: grading.nextSteps,
      gradedAt: new Date().toISOString(),
    };
    setLastSub(updated);
    setHistory(prev => [updated, ...prev.filter(h => h.id !== updated.id)]);

    setStatus("done");
    try { localStorage.removeItem(DRAFT_KEY); } catch {}
    setText("");
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    if (!ANTI_PASTE_ENABLED || session?.anticheatBypass) return;
    e.preventDefault();
    setErrorMsg("Pasting is disabled. Please type your essay yourself.");
  };

  if (!session) return null;

  const studentName = `${session.name} ${session.surname}`;
  const hasScore = lastSub?.overallBand != null;
  const criteria = hasScore ? [
    { k: "Task response", v: lastSub!.taskResponse! },
    { k: "Coherence & cohesion", v: lastSub!.coherenceCohesion! },
    { k: "Lexical resource", v: lastSub!.lexicalResource! },
    { k: "Grammar range & accuracy", v: lastSub!.grammarAccuracy! },
  ] : [];
  const allCorrections: Correction[] = lastSub?.corrections ?? [];
  const visibleCorrections = filter === "all"
    ? allCorrections
    : allCorrections.filter(c => c.type === filter);
  const typeCounts = allCorrections.reduce<Record<string, number>>((acc, c) => {
    acc[c.type] = (acc[c.type] ?? 0) + 1;
    return acc;
  }, {});

  const handleDownloadCurrent = () => {
    if (lastSub) downloadSubmissionPDF(lastSub, studentName);
  };

  return (
    <StudentShell>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        <span className="chip" style={{ background: "var(--accent)", color: "var(--bg)", borderColor: "var(--accent)" }}>Task 2</span>
        <Link href="/student/writing/task1" className="chip" style={{ textDecoration: "none" }}>Task 1</Link>
      </div>

      <p className="eyebrow">Writing · Task 2</p>
      <h1 className="h1"><em>Writing</em> feedback</h1>
      <p className="lede" style={{ marginTop: 16, marginBottom: 12 }}>
        Write your essay, submit for AI review, then get scored on the four
        official IELTS criteria with specific feedback. Draft auto-saves locally.
      </p>
      {!isPremium && canGrade && (
        <p style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 28, fontFamily: "var(--ff-mono)" }}>
          Gradings remaining: {remaining} of {totalAllowed}
        </p>
      )}
      {isPremium && (
        <p style={{ fontSize: 12, color: "var(--accent)", marginBottom: 28, fontFamily: "var(--ff-mono)" }}>
          ★ Premium — unlimited gradings
        </p>
      )}
      {!isPremium && !canGrade && <div style={{ marginBottom: 28 }} />}

      {hasScore && (
        <div style={{ marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div>
            <p className="eyebrow" style={{ margin: 0 }}>Essay graded</p>
            <p style={{ fontSize: 14, color: "var(--text-2)", margin: "4px 0 0", maxWidth: 640 }}>
              &ldquo;{lastSub!.prompt.length > 120 ? lastSub!.prompt.slice(0, 117) + "…" : lastSub!.prompt}&rdquo;
            </p>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn ghost sm" onClick={handleDownloadCurrent}>
              <Download size={12} /> Download PDF
            </button>
            <button
              className="btn primary sm"
              onClick={() => {
                setLastSub(null);
                setStatus("idle");
                setText("");
                setFilter("all");
                const next = pickRandomPrompt(prompt);
                setPrompt(next);
                try { sessionStorage.setItem(PROMPT_KEY, next); } catch {}
              }}
            >
            <PenLine size={12} /> Write a new essay
            </button>
          </div>
        </div>
      )}

      {!canGrade && !hasScore && (
        <div className="card" style={{ textAlign: "center", padding: "48px 24px", marginBottom: 24 }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>&#11088;</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Get more essays</h2>
          <p style={{ color: "var(--text-2)", maxWidth: 480, margin: "0 auto 24px", lineHeight: 1.6 }}>
            You&apos;ve used all your AI gradings. Buy more to keep getting detailed feedback,
            corrections, strengths, and personalised next steps for Task 1 and Task 2.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
            {[
              { n: 10, price: "20,000" },
              { n: 30, price: "40,000" },
              { n: 50, price: "65,000" },
            ].map(t => (
              <button
                key={t.n}
                onClick={() => setSelectedTier(t.n)}
                style={{
                  padding: "16px 20px", borderRadius: 12, cursor: "pointer",
                  border: selectedTier === t.n ? "2px solid var(--accent)" : "2px solid var(--line)",
                  background: selectedTier === t.n ? "rgba(120,160,255,0.08)" : "var(--surface-2)",
                  textAlign: "center", minWidth: 120, transition: "all 0.15s",
                }}
              >
                <div style={{ fontSize: 24, fontWeight: 800, color: "var(--text)" }}>{t.n}</div>
                <div style={{ fontSize: 11, color: "var(--text-3)", marginBottom: 4 }}>essays</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--accent)" }}>{t.price} UZS</div>
              </button>
            ))}
          </div>

          <div style={{ maxWidth: 400, margin: "0 auto 20px", padding: "16px 24px", background: "var(--surface-2)", border: "1px solid var(--line)", borderRadius: 12, textAlign: "left" }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 8 }}>
              Send payment to:
            </p>
            <div style={{ fontFamily: "var(--ff-mono)", fontSize: 18, fontWeight: 700, color: "var(--text)", letterSpacing: "0.05em", marginBottom: 4 }}>
              9860 3501 4244 8355
            </div>
            <p style={{ fontSize: 12, color: "var(--text-3)", margin: 0 }}>Uzcard · London LC</p>
          </div>

          {paymentRequested ? (
            <div style={{ padding: "12px 20px", borderRadius: 10, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", color: "#22c55e", fontSize: 14, fontWeight: 600 }}>
              &#10003; Payment request sent for {selectedTier} essays — waiting for approval
            </div>
          ) : (
            <button
              className="btn primary"
              disabled={requestSending}
              onClick={async () => {
                if (!session) return;
                setRequestSending(true);
                await createPremiumRequest(session.id, `${session.name} ${session.surname}`, selectedTier);
                setPaymentRequested(true);
                setRequestSending(false);
              }}
            >
              {requestSending ? "Sending…" : `I've sent payment for ${selectedTier} essays`}
            </button>
          )}
        </div>
      )}

      <div className="writing-grid" style={{ display: "grid", gridTemplateColumns: hasScore ? "1fr" : "1fr", gap: 24 }}>
        {!hasScore && canGrade && (
        <div>
          <div className="card" style={{ marginBottom: 20 }}>
            <div className="flex jcb aic" style={{ marginBottom: 12, gap: 12, flexWrap: "wrap" }}>
              <p className="eyebrow" style={{ margin: 0 }}>Prompt · 40 minutes · minimum 250 words</p>
              <div style={{ display: "flex", gap: 6 }}>
                <button
                  className="chip"
                  onClick={shufflePrompt}
                  disabled={status === "submitting" || status === "grading"}
                  title="Get a new random topic"
                >
                  <RefreshCw size={11} style={{ marginRight: 4, verticalAlign: -1 }} /> Shuffle
                </button>
                <button
                  className="chip"
                  onClick={openCustom}
                  disabled={status === "submitting" || status === "grading"}
                  title="Write your own topic"
                >
                  <Pencil size={11} style={{ marginRight: 4, verticalAlign: -1 }} /> Custom
                </button>
              </div>
            </div>

            {customMode ? (
              <>
                <textarea
                  value={customDraft}
                  onChange={e => setCustomDraft(e.target.value)}
                  placeholder="Type your own IELTS Task 2 question…"
                  rows={4}
                  style={{
                    width: "100%", display: "block", resize: "vertical",
                    background: "var(--surface-2)",
                    border: "1px solid var(--line)", borderRadius: 8,
                    color: "var(--text)", fontFamily: "var(--ff-serif)",
                    fontSize: 16, lineHeight: 1.5,
                    padding: "12px 14px", outline: "none",
                  }}
                />
                <div style={{ display: "flex", gap: 8, marginTop: 10, justifyContent: "flex-end" }}>
                  <button className="chip" onClick={() => setCustomMode(false)}>Cancel</button>
                  <button className="btn primary sm" onClick={saveCustom}>Use this topic</button>
                </div>
              </>
            ) : (
              <p style={{ fontFamily: "var(--ff-serif)", fontSize: 18, lineHeight: 1.5, margin: "0", color: "var(--text)" }}>
                &ldquo;{prompt}&rdquo;
              </p>
            )}
          </div>

          <div className="editor">
            <div className="hd">
              <span>{savedAt ? `Draft · auto-saved ${savedAt}` : "Draft"}</span>
              <div style={{ display: "flex", gap: 12, textTransform: "none", letterSpacing: 0 }}>
                <span style={{ color: targetHit ? "var(--accent)" : "var(--warn)" }}>{words} words</span>
                <span style={{ color: "var(--text-3)" }}>{chars} chars</span>
              </div>
            </div>
            <textarea
              className="area"
              value={text}
              onChange={e => setText(e.target.value)}
              onPaste={handlePaste}
              placeholder="Start writing…"
              disabled={status === "submitting" || status === "grading"}
              style={{
                width: "100%", display: "block", resize: "vertical",
                background: "transparent", border: "none",
                color: "var(--text)", fontFamily: "var(--ff-serif)",
                fontSize: 17, lineHeight: 1.7,
                padding: "32px 36px", minHeight: 340, outline: "none",
              }}
            />
            {(status === "submitting" || status === "grading") && (
              <div style={{ padding: "16px 36px 0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 12, color: "var(--text-2)", fontWeight: 500 }}>{gradingStage}</span>
                  <span style={{ fontSize: 12, color: "var(--text-3)", fontFamily: "var(--ff-mono)" }}>{Math.round(gradingProgress)}%</span>
                </div>
                <div style={{ height: 4, background: "var(--line)", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ height: "100%", background: "var(--accent)", borderRadius: 4, transition: "width 0.8s ease", width: `${gradingProgress}%` }} />
                </div>
              </div>
            )}
            <div className="hd" style={{ borderTop: "1px solid var(--line)", borderBottom: 0 }}>
              <span style={{ fontSize: 11, color: "var(--text-3)" }}>
                {status === "grading" ? gradingStage : "Graded by Claude Opus 4.7"}
              </span>
              <button
                className="btn primary sm"
                disabled={!targetHit || status === "submitting" || status === "grading"}
                onClick={handleSubmit}
              >
                {status === "submitting" ? (
                  <><Loader2 size={12} className="spin" /> Saving…</>
                ) : status === "grading" ? (
                  <><Loader2 size={12} className="spin" /> Grading…</>
                ) : status === "done" ? (
                  <>Submit another <Send size={12} /></>
                ) : (
                  <>Submit for AI review <Send size={12} /></>
                )}
              </button>
            </div>
          </div>

          {errorMsg && (
            <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#fca5a5", fontSize: 13 }}>
              {errorMsg}
            </div>
          )}

          {violations > 0 && !session?.anticheatBypass && (
            <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)", color: "#fca5a5", fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 16 }}>&#9888;</span>
              You left this page {violations} time{violations > 1 ? "s" : ""}. This is recorded and visible to your teacher.
            </div>
          )}
        </div>
        )}

        {hasScore && (
          <div className="card score-hero">
            <div className="score-hero-top">
              <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <ScoreRing value={lastSub!.overallBand!} />
                <div>
                  <p className="eyebrow" style={{ margin: 0 }}>Overall band</p>
                  <h3 className="h2" style={{ margin: "6px 0 0", fontSize: 36 }}>Band {lastSub!.overallBand!.toFixed(1)}</h3>
                </div>
              </div>
              <button
                className="btn primary sm"
                onClick={handleDownloadCurrent}
              >
                <Download size={12} /> Download PDF report
              </button>
            </div>

            <div className="score-hero-grid">
              {criteria.map(c => (
                <div key={c.k}>
                  <div className="flex jcb" style={{ fontSize: 13, marginBottom: 6, color: "var(--text-2)" }}>
                    <span>{c.k}</span>
                    <span style={{ fontFamily: "var(--ff-mono)", color: "var(--text)", fontWeight: 600 }}>{c.v.toFixed(1)}</span>
                  </div>
                  <div className="bar"><span style={{ width: `${(c.v / 9) * 100}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {hasScore && (
        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 20 }}>
          {lastSub!.feedback && lastSub!.feedback.length > 0 && (
            <div className="card">
              <p className="eyebrow" style={{ margin: 0, marginBottom: 16 }}>Examiner feedback · Claude Opus 4.7</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
                {lastSub!.feedback.map((f, i) => (
                  <div key={i} style={{
                    padding: "14px 16px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--line)",
                    borderRadius: 10,
                  }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", marginBottom: 8, fontFamily: "var(--ff-mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      {f.criterion}
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text-2)" }}>{f.comment}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {allCorrections.length > 0 && (
            <div className="card">
              <div className="flex jcb aic" style={{ marginBottom: 16, flexWrap: "wrap", gap: 12 }}>
                <p className="eyebrow" style={{ margin: 0 }}>Line-by-line corrections · {allCorrections.length}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  <button
                    onClick={() => setFilter("all")}
                    className="chip"
                    data-active={filter === "all"}
                  >
                    All · {allCorrections.length}
                  </button>
                  {(Object.keys(CORRECTION_COLORS) as Correction["type"][]).map(t => {
                    const n = typeCounts[t] ?? 0;
                    if (n === 0) return null;
                    return (
                      <button
                        key={t}
                        onClick={() => setFilter(t)}
                        className="chip"
                        data-active={filter === t}
                        style={{ color: CORRECTION_COLORS[t].fg, background: filter === t ? CORRECTION_COLORS[t].bg : undefined }}
                      >
                        {CORRECTION_COLORS[t].label} · {n}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 12 }}>
                {visibleCorrections.map((c, i) => {
                  const col = CORRECTION_COLORS[c.type] ?? CORRECTION_COLORS.style;
                  return (
                    <div key={i} style={{
                      border: "1px solid var(--line)", borderRadius: 10,
                      padding: "14px 16px", background: "var(--surface-2)",
                    }}>
                      <div style={{
                        display: "inline-block",
                        fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase",
                        padding: "3px 8px", borderRadius: 999,
                        background: col.bg, color: col.fg, marginBottom: 10,
                        fontFamily: "var(--ff-mono)",
                      }}>
                        {col.label}
                      </div>
                      <div style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.6, marginBottom: 8 }}>
                        <span style={{ textDecoration: "line-through", opacity: 0.7 }}>{c.original}</span>
                      </div>
                      <div style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.6, marginBottom: 10, fontWeight: 500 }}>
                        → {c.suggestion}
                      </div>
                      <div style={{ fontSize: 12.5, color: "var(--text-3)", lineHeight: 1.6 }}>
                        {c.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {(lastSub!.strengths?.length || lastSub!.nextSteps?.length) ? (
            <div className="card">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
                {lastSub!.strengths && lastSub!.strengths.length > 0 && (
                  <div>
                    <p className="eyebrow" style={{ margin: 0, marginBottom: 12 }}>What's working</p>
                    <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, color: "var(--text-2)", lineHeight: 1.7 }}>
                      {lastSub!.strengths.map((s, i) => <li key={i} style={{ marginBottom: 6 }}>{s}</li>)}
                    </ul>
                  </div>
                )}
                {lastSub!.nextSteps && lastSub!.nextSteps.length > 0 && (
                  <div>
                    <p className="eyebrow" style={{ margin: 0, marginBottom: 12 }}>Next steps</p>
                    <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, color: "var(--text-2)", lineHeight: 1.7 }}>
                      {lastSub!.nextSteps.map((s, i) => <li key={i} style={{ marginBottom: 6 }}>{s}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      )}

      {history.length > 0 && (
        <div className="card" style={{ marginTop: 28 }}>
          <div className="flex jcb aic" style={{ marginBottom: 14 }}>
            <p className="eyebrow" style={{ margin: 0 }}>
              <Clock size={11} style={{ verticalAlign: -1, marginRight: 6 }} />
              Your history · {history.length}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {history.map(h => {
              const isOpen = historyOpen === h.id;
              const date = new Date(h.createdAt).toLocaleString(undefined, {
                month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit",
              });
              return (
                <div key={h.id} style={{ border: "1px solid var(--line)", borderRadius: 10, background: "var(--surface-2)" }}>
                  <button
                    onClick={() => setHistoryOpen(isOpen ? null : h.id)}
                    style={{
                      width: "100%", padding: "12px 14px",
                      display: "flex", alignItems: "center", gap: 12,
                      background: "transparent", border: "none", cursor: "pointer",
                      color: "var(--text)", fontFamily: "inherit", textAlign: "left",
                    }}
                  >
                    <div style={{
                      fontSize: 12, fontWeight: 700,
                      padding: "3px 10px", borderRadius: 999, minWidth: 52, textAlign: "center",
                      background: h.overallBand ? "rgba(16,185,129,0.15)" : "rgba(234,179,8,0.15)",
                      color: h.overallBand ? "#10b981" : "#eab308",
                      fontFamily: "var(--ff-mono)",
                    }}>
                      {h.overallBand ? h.overallBand.toFixed(1) : "···"}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {h.prompt}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 2, fontFamily: "var(--ff-mono)" }}>
                        {date} · {h.wordCount} words
                      </div>
                    </div>
                    {isOpen ? <ChevronUp size={14} color="var(--text-3)" /> : <ChevronDown size={14} color="var(--text-3)" />}
                  </button>

                  {isOpen && (
                    <div style={{ padding: "0 14px 14px", borderTop: "1px solid var(--line)" }}>
                      <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: 10 }}>
                        {h.overallBand != null && (
                          <button
                            className="chip"
                            onClick={() => downloadSubmissionPDF(h, studentName)}
                          >
                            <Download size={11} style={{ verticalAlign: -1, marginRight: 4 }} /> Download PDF
                          </button>
                        )}
                      </div>
                      <div style={{ marginTop: 10 }}>
                        <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 6, fontFamily: "var(--ff-mono)" }}>Essay</div>
                        <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.65, whiteSpace: "pre-line", maxHeight: 240, overflowY: "auto", padding: "10px 12px", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 8 }}>
                          {h.essay}
                        </div>
                      </div>
                      {h.overallBand != null && (
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginTop: 12 }}>
                          {[
                            { label: "TR", val: h.taskResponse },
                            { label: "CC", val: h.coherenceCohesion },
                            { label: "LR", val: h.lexicalResource },
                            { label: "GRA", val: h.grammarAccuracy },
                          ].map(k => (
                            <div key={k.label} style={{ padding: "8px 10px", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 6 }}>
                              <div style={{ fontSize: 9, color: "var(--text-3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2, fontFamily: "var(--ff-mono)" }}>{k.label}</div>
                              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>{k.val?.toFixed(1) ?? "—"}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .writing-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 1s linear infinite; }

        .chip {
          font-family: var(--ff-mono);
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 5px 10px;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: transparent;
          color: var(--text-2);
          cursor: pointer;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
        }
        .chip:hover { border-color: var(--line-2); color: var(--text); }
        .chip:disabled { opacity: 0.5; cursor: not-allowed; }
        .chip[data-active="true"] { background: var(--accent); color: var(--bg); border-color: var(--accent); }

        .score-hero-top {
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; margin-bottom: 24px; flex-wrap: wrap;
        }
        .score-hero-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 720px) {
          .score-hero-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }
      `}</style>
    </StudentShell>
  );
}
