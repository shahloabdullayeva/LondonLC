"use client";
import { useEffect, useMemo, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Send, Loader2, ImagePlus, X, PenLine, Download } from "lucide-react";
import StudentShell from "@/components/StudentShell";
import {
  getSession,
  submitEssay,
  gradeTask1WithAI,
  getSubmissions,
  createPremiumRequest,
  getStudentPremiumRequest,
  type StudentSession,
  type WritingSubmission,
  type Correction,
} from "@/lib/store";

const CORRECTION_COLORS: Record<Correction["type"], { bg: string; fg: string; label: string }> = {
  grammar:     { bg: "rgba(239,68,68,0.14)",  fg: "#fca5a5", label: "Grammar" },
  vocabulary:  { bg: "rgba(59,130,246,0.14)", fg: "#93c5fd", label: "Vocabulary" },
  cohesion:    { bg: "rgba(168,85,247,0.14)", fg: "#d8b4fe", label: "Cohesion" },
  style:       { bg: "rgba(16,185,129,0.14)", fg: "#6ee7b7", label: "Style" },
  spelling:    { bg: "rgba(234,179,8,0.14)",  fg: "#fde047", label: "Spelling" },
  punctuation: { bg: "rgba(236,72,153,0.14)", fg: "#f9a8d4", label: "Punctuation" },
};

const DRAFT_KEY = "llc.writing.task1.draft.v1";

function downloadTask1PDF(s: WritingSubmission, studentName: string) {
  if (typeof window === "undefined") return;
  const w = window.open("", "_blank", "width=900,height=1100");
  if (!w) return;
  const esc = (x: string) =>
    x.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const scores = [
    { k: "Task achievement", v: s.taskResponse },
    { k: "Coherence & cohesion", v: s.coherenceCohesion },
    { k: "Lexical resource", v: s.lexicalResource },
    { k: "Grammar range & accuracy", v: s.grammarAccuracy },
  ];
  const corrections = s.corrections ?? [];
  const feedback = s.feedback ?? [];
  const strengths = s.strengths ?? [];
  const nextSteps = s.nextSteps ?? [];
  const graded = s.gradedAt ? new Date(s.gradedAt) : new Date(s.createdAt);
  const slug = s.prompt.replace(/[^a-zA-Z0-9 ]/g, "").trim().split(/\s+/).slice(0, 6).join("-").toLowerCase() || "task1";
  const filename = `${slug}-band-${s.overallBand?.toFixed(1) ?? "draft"}`;
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
<h1>IELTS Writing Task 1 — Band ${s.overallBand?.toFixed(1) ?? "—"}</h1>
<section><h2>Question</h2><p>${esc(s.prompt)}</p></section>
<section><h2>Response</h2><p class="essay">${esc(s.essay)}</p></section>
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
<footer>Generated by London LC · Graded by Claude Sonnet 4.6</footer>
<script>
  document.title = ${JSON.stringify(filename)};
  window.addEventListener('load', () => setTimeout(() => window.print(), 250));
</script>
</body></html>`);
  w.document.close();
}

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
const MAX_IMG_WIDTH = 1200;

function fileToBase64(file: File): Promise<{ data: string; mediaType: string }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;
      if (width > MAX_IMG_WIDTH) {
        height = Math.round(height * (MAX_IMG_WIDTH / width));
        width = MAX_IMG_WIDTH;
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
      resolve({
        data: dataUrl.slice(dataUrl.indexOf(",") + 1),
        mediaType: "image/jpeg",
      });
      URL.revokeObjectURL(img.src);
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

export default function WritingTask1Page() {
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

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [imageMediaType, setImageMediaType] = useState<string>("image/png");
  const [dragOver, setDragOver] = useState(false);
  const [taskDescription, setTaskDescription] = useState("");

  const [history, setHistory] = useState<WritingSubmission[]>([]);
  const [violations, setViolations] = useState(0);
  const [paymentRequested, setPaymentRequested] = useState(false);
  const [requestSending, setRequestSending] = useState(false);
  const [selectedTier, setSelectedTier] = useState(10);

  useEffect(() => {
    const s = getSession();
    if (!s || s.isAdmin) { router.push("/auth/login"); return; }
    setSession(s);
    try { setText(localStorage.getItem(DRAFT_KEY) || ""); } catch {}
    getSubmissions(s.id).then(rows => setHistory(rows));
    getStudentPremiumRequest(s.id).then(r => { if (r) setPaymentRequested(true); });
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
  const targetHit = words >= 150;
  const extraCredits = session?.gradingCredits ?? 0;
  const gradedCount = history.filter(h => h.overallBand != null).length;
  const totalAllowed = FREE_GRADING_LIMIT + extraCredits;
  const canGrade = gradedCount < totalAllowed;
  const remaining = Math.max(0, totalAllowed - gradedCount);

  const handleImageFile = useCallback(async (file: File) => {
    if (!file.type.startsWith("image/")) {
      setErrorMsg("Please upload an image file (PNG, JPG, etc.).");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setErrorMsg("Image must be under 10 MB.");
      return;
    }
    setErrorMsg("");
    const { data, mediaType } = await fileToBase64(file);
    setImageBase64(data);
    setImageMediaType(mediaType);
    setImagePreview(URL.createObjectURL(file));
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleImageFile(file);
  }, [handleImageFile]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleImageFile(file);
  }, [handleImageFile]);

  const clearImage = () => {
    setImagePreview(null);
    setImageBase64(null);
    setImageMediaType("image/png");
  };

  const handleSubmit = async () => {
    if (!session || !targetHit || !imageBase64 || status === "submitting" || status === "grading") return;

    setStatus("submitting");
    setErrorMsg("");
    setGradingProgress(5);
    setGradingStage("Saving your response…");

    const promptLabel = taskDescription.trim() ? `[Task 1] ${taskDescription}` : "[Task 1] Describe the visual";
    const sub = await submitEssay(session.id, `${session.name} ${session.surname}`, promptLabel, text);
    if (!sub) {
      setStatus("error");
      setGradingProgress(0);
      setErrorMsg("Failed to save response. Check your connection.");
      return;
    }

    setStatus("grading");
    setLastSub(sub);
    setGradingProgress(15);
    setGradingStage("Uploading image to examiner…");

    const progressTimer = setInterval(() => {
      setGradingProgress(prev => {
        if (prev < 30) return prev + 2;
        if (prev < 55) return prev + 1.5;
        if (prev < 75) return prev + 0.8;
        if (prev < 90) return prev + 0.3;
        return prev;
      });
    }, 1000);

    const stageTimer = setTimeout(() => {
      setGradingStage("Reading your response…");
      setTimeout(() => setGradingStage("Grading against IELTS criteria…"), 5000);
      setTimeout(() => setGradingStage("Writing detailed feedback…"), 12000);
      setTimeout(() => setGradingStage("Almost done…"), 22000);
    }, 3000);

    const grading = await gradeTask1WithAI(sub.id, imageBase64, imageMediaType, taskDescription, text);
    clearInterval(progressTimer);
    clearTimeout(stageTimer);

    if (!grading) {
      setStatus("error");
      setGradingProgress(0);
      setErrorMsg("Response saved but AI grading failed. Your teacher can still review it manually.");
      return;
    }

    setGradingProgress(100);
    setGradingStage("Done!");

    const updated: WritingSubmission = {
      ...sub,
      taskResponse: grading.taskAchievement,
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

  if (!session) return null;

  const studentName = `${session.name} ${session.surname}`;
  const hasScore = lastSub?.overallBand != null;
  const criteria = hasScore ? [
    { k: "Task achievement", v: lastSub!.taskResponse! },
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

  return (
    <StudentShell>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        <Link href="/student/writing" className="chip" style={{ textDecoration: "none" }}>Task 2</Link>
        <span className="chip" style={{ background: "var(--accent)", color: "var(--bg)", borderColor: "var(--accent)" }}>Task 1</span>
      </div>

      <p className="eyebrow">Writing · Task 1 · Academic</p>
      <h1 className="h1"><em>Describe</em> the visual</h1>
      <p className="lede" style={{ marginTop: 16, marginBottom: 12 }}>
        Upload a chart, graph, diagram or map, write your response (minimum 150 words),
        and get scored on the four official IELTS criteria with specific feedback.
      </p>
      {canGrade && (
        <p style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 28, fontFamily: "var(--ff-mono)" }}>
          Gradings remaining: {remaining} of {totalAllowed}
        </p>
      )}
      {!canGrade && <div style={{ marginBottom: 28 }} />}

      {hasScore && (
        <div style={{ marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div>
            <p className="eyebrow" style={{ margin: 0 }}>Response graded</p>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn ghost sm" onClick={() => lastSub && downloadTask1PDF(lastSub, studentName)}>
              <Download size={12} /> Download PDF
            </button>
            <button
              className="btn primary sm"
              onClick={() => {
                setLastSub(null);
                setStatus("idle");
                setText("");
                setFilter("all");
                clearImage();
              }}
            >
              <PenLine size={12} /> Write a new response
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
              {requestSending ? "Sending…" : `I’ve sent payment for ${selectedTier} essays`}
            </button>
          )}
        </div>
      )}

      {!hasScore && canGrade && (
        <div>
          {/* Image upload */}
          <div className="card" style={{ marginBottom: 20 }}>
            <p className="eyebrow" style={{ margin: "0 0 12px" }}>Visual stimulus</p>

            {imagePreview ? (
              <div style={{ position: "relative" }}>
                <img
                  src={imagePreview}
                  alt="Uploaded visual"
                  style={{
                    width: "100%",
                    maxHeight: 400,
                    objectFit: "contain",
                    borderRadius: 8,
                    border: "1px solid var(--line)",
                    background: "var(--surface-2)",
                    display: "block",
                  }}
                />
                <button
                  onClick={clearImage}
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    border: "none",
                    background: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    cursor: "pointer",
                    display: "grid",
                    placeItems: "center",
                  }}
                  aria-label="Remove image"
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <div
                onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                onClick={() => document.getElementById("task1-img-input")?.click()}
                style={{
                  border: `2px dashed ${dragOver ? "var(--accent)" : "var(--line)"}`,
                  borderRadius: 12,
                  padding: "48px 24px",
                  textAlign: "center",
                  cursor: "pointer",
                  background: dragOver ? "rgba(120, 160, 255, 0.06)" : "transparent",
                  transition: "all 0.15s",
                }}
              >
                <ImagePlus size={36} style={{ opacity: 0.5, marginBottom: 12 }} />
                <div style={{ fontSize: 14, color: "var(--text-2)", marginBottom: 4 }}>
                  Drop an image here or click to upload
                </div>
                <div style={{ fontSize: 11, color: "var(--text-3)" }}>
                  PNG, JPG or WebP — max 10 MB
                </div>
                <input
                  id="task1-img-input"
                  type="file"
                  accept="image/*"
                  onChange={handleFileInput}
                  style={{ display: "none" }}
                />
              </div>
            )}
          </div>

          {/* Question prompt */}
          <div className="card" style={{ marginBottom: 20 }}>
            <p className="eyebrow" style={{ margin: "0 0 8px" }}>Question prompt</p>
            <textarea
              value={taskDescription}
              onChange={e => setTaskDescription(e.target.value)}
              rows={3}
              placeholder="e.g. The table below shows the population of three countries between 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant."
              style={{
                width: "100%", display: "block", resize: "vertical",
                background: "var(--surface-2)",
                border: "1px solid var(--line)", borderRadius: 8,
                color: "var(--text)", fontFamily: "var(--ff-serif)",
                fontSize: 15, lineHeight: 1.5,
                padding: "10px 14px", outline: "none",
              }}
            />
            <p style={{ fontSize: 11, color: "var(--text-3)", margin: "6px 0 0" }}>
              Paste the exact question from your test paper (the line that starts with &ldquo;The chart/table/diagram below shows…&rdquo;).
            </p>
          </div>

          {/* Writing area */}
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
              onPaste={e => { if (!session?.anticheatBypass) { e.preventDefault(); setErrorMsg("Pasting is disabled. Please type your response yourself."); } }}
              placeholder="Write your response here…"
              disabled={status === "submitting" || status === "grading"}
              style={{
                width: "100%", display: "block", resize: "vertical",
                background: "transparent", border: "none",
                color: "var(--text)", fontFamily: "var(--ff-serif)",
                fontSize: 17, lineHeight: 1.7,
                padding: "32px 36px", minHeight: 260, outline: "none",
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
                {status === "grading" ? gradingStage : "Graded by Claude Sonnet 4.6"}
              </span>
              <button
                className="btn primary sm"
                disabled={!targetHit || !imageBase64 || status === "submitting" || status === "grading"}
                onClick={handleSubmit}
                title={!imageBase64 ? "Upload an image first" : !targetHit ? "Write at least 150 words" : ""}
              >
                {status === "submitting" ? (
                  <><Loader2 size={12} className="spin" /> Saving…</>
                ) : status === "grading" ? (
                  <><Loader2 size={12} className="spin" /> Grading…</>
                ) : (
                  <>Submit for AI review <Send size={12} /></>
                )}
              </button>
            </div>
          </div>

          {!imageBase64 && targetHit && (
            <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.3)", color: "#fde047", fontSize: 13 }}>
              Upload an image of your chart, graph, diagram or map before submitting.
            </div>
          )}

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

      {/* Score display */}
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
                    <p className="eyebrow" style={{ margin: 0, marginBottom: 12 }}>What&apos;s working</p>
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
