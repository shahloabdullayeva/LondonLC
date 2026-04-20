"use client";
import { useEffect, useMemo, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Send, Loader2, ImagePlus, X, PenLine } from "lucide-react";
import StudentShell from "@/components/StudentShell";
import {
  getSession,
  submitEssay,
  gradeTask1WithAI,
  getSubmissions,
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

function fileToBase64(file: File): Promise<{ data: string; mediaType: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const commaIdx = result.indexOf(",");
      resolve({
        data: result.slice(commaIdx + 1),
        mediaType: file.type || "image/png",
      });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function WritingTask1Page() {
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null>(null);
  const [text, setText] = useState("");
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [status, setStatus] = useState<GradingStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [lastSub, setLastSub] = useState<WritingSubmission | null>(null);
  const [filter, setFilter] = useState<"all" | Correction["type"]>("all");

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [imageMediaType, setImageMediaType] = useState<string>("image/png");
  const [dragOver, setDragOver] = useState(false);
  const [taskDescription, setTaskDescription] = useState(
    "Summarise the information by selecting and reporting the main features, and make comparisons where relevant."
  );

  const [history, setHistory] = useState<WritingSubmission[]>([]);

  useEffect(() => {
    const s = getSession();
    if (!s || s.isAdmin) { router.push("/auth/login"); return; }
    setSession(s);
    try { setText(localStorage.getItem(DRAFT_KEY) || ""); } catch {}
    getSubmissions(s.id).then(rows => setHistory(rows));
  }, [router]);

  useEffect(() => {
    if (!session) return;
    const id = window.setTimeout(() => {
      try { localStorage.setItem(DRAFT_KEY, text); } catch {}
      setSavedAt(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    }, 500);
    return () => window.clearTimeout(id);
  }, [text, session]);

  const words = useMemo(() => text.trim().split(/\s+/).filter(Boolean).length, [text]);
  const chars = text.length;
  const targetHit = words >= 150;

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

    const promptLabel = `[Task 1] ${taskDescription}`;
    const sub = await submitEssay(session.id, `${session.name} ${session.surname}`, promptLabel, text);
    if (!sub) {
      setStatus("error");
      setErrorMsg("Failed to save response. Check your connection.");
      return;
    }

    setStatus("grading");
    setLastSub(sub);

    const grading = await gradeTask1WithAI(sub.id, imageBase64, imageMediaType, taskDescription, text);
    if (!grading) {
      setStatus("error");
      setErrorMsg("Response saved but AI grading failed. Your teacher can still review it manually.");
      return;
    }

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
      <p className="lede" style={{ marginTop: 16, marginBottom: 32 }}>
        Upload a chart, graph, diagram or map, write your response (minimum 150 words),
        and get scored on the four official IELTS criteria with specific feedback.
      </p>

      {hasScore && (
        <div style={{ marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div>
            <p className="eyebrow" style={{ margin: 0 }}>Response graded</p>
          </div>
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
      )}

      {!hasScore && (
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

          {/* Task description */}
          <div className="card" style={{ marginBottom: 20 }}>
            <p className="eyebrow" style={{ margin: "0 0 8px" }}>Task instruction</p>
            <textarea
              value={taskDescription}
              onChange={e => setTaskDescription(e.target.value)}
              rows={2}
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
              You can edit this to match the exact wording on your test paper.
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
            <div className="hd" style={{ borderTop: "1px solid var(--line)", borderBottom: 0 }}>
              <span style={{ fontSize: 11, color: "var(--text-3)" }}>
                {status === "grading" ? "Claude is reading your response…" : "Graded by Claude Opus 4.7"}
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
