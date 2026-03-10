"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock, AlertTriangle, CheckCircle, X, ChevronLeft, ChevronRight,
  Headphones, BookOpen, Volume2
} from "lucide-react";
import { getSession, saveAttempt } from "@/lib/store";
import { getTestById, type IELTSTest, type IELTSSection } from "@/data/ielts-tests";
import { formatTime, bandScore } from "@/lib/utils";
import type { StudentSession } from "@/lib/store";

type Phase = "warning" | "test" | "audio_playing" | "transfer" | "submitted";

export default function TestPage() {
  const router = useRouter();
  const params = useParams();
  const testId = params.id as string;

  const [session, setSession] = useState<StudentSession | null>(null);
  const [test, setTest] = useState<IELTSTest | null>(null);
  const [phase, setPhase] = useState<Phase>("warning");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentSection, setCurrentSection] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [transferTimeLeft, setTransferTimeLeft] = useState(0);
  const [violationCount, setViolationCount] = useState(0);
  const [showViolationWarning, setShowViolationWarning] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<{ score: number; max: number; band: number } | null>(null);
  const [startTime] = useState(Date.now());
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioTotal, setAudioTotal] = useState(0);
  const [audioCurrentSection, setAudioCurrentSection] = useState(0);
  const [mobileView, setMobileView] = useState<"passage" | "questions">("passage");
  const [passageCollapsed, setPassageCollapsed] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const transferTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const violationRef = useRef(0);
  const cancelledRef = useRef(false);
  const anticheatActiveRef = useRef(false);
  const audioAutoStartedRef = useRef(-1);

  // ── Load session and test ───────────────────────────────────────────
  useEffect(() => {
    const s = getSession();
    if (!s || s.isAdmin) { router.push("/auth/login"); return; }
    setSession(s);
    const t = getTestById(testId);
    if (!t) { router.push("/student/dashboard"); return; }
    setTest(t);
    setTimeLeft(t.durationMinutes * 60);
    setTransferTimeLeft(t.transferMinutes * 60);
  }, [testId, router]);

  // ── Anti-cheat: tab visibility ──────────────────────────────────────
  useEffect(() => {
    if (phase !== "test" && phase !== "audio_playing" && phase !== "transfer") return;

    // Grace period: ignore visibility events for the first 3 seconds
    anticheatActiveRef.current = false;
    const activateTimer = setTimeout(() => {
      anticheatActiveRef.current = true;
    }, 3000);

    const handleVisibility = () => {
      if (document.hidden && anticheatActiveRef.current) {
        violationRef.current += 1;
        setViolationCount(violationRef.current);
        cancelTest("You left the exam screen. Your test has been cancelled.");
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      clearTimeout(activateTimer);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [phase]);

  // ── Anti-cheat: context menu + copy/paste ───────────────────────────
  useEffect(() => {
    if (phase !== "test" && phase !== "audio_playing" && phase !== "transfer") return;

    const block = (e: Event) => e.preventDefault();
    document.addEventListener("contextmenu", block);
    document.addEventListener("copy", block);
    document.addEventListener("paste", block);
    document.addEventListener("cut", block);

    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && ["c", "v", "x", "a", "p"].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
      if (e.key === "PrintScreen") e.preventDefault();
    };
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("copy", block);
      document.removeEventListener("paste", block);
      document.removeEventListener("cut", block);
      document.removeEventListener("keydown", handleKey);
    };
  }, [phase]);

  // ── Main test timer ─────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "test") return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          submitTest();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase]);

  // ── Transfer timer ──────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "transfer") return;
    transferTimerRef.current = setInterval(() => {
      setTransferTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(transferTimerRef.current!);
          submitTest();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => { if (transferTimerRef.current) clearInterval(transferTimerRef.current); };
  }, [phase]);

  // ── Audio simulation (for listening tests) ─────────────────────────
  const startAudio = useCallback(() => {
    if (!test) return;
    if (audioTimerRef.current) clearInterval(audioTimerRef.current);
    const sec = test.sections[audioCurrentSection];
    const dur = sec.audioDurationSeconds || 300;
    setAudioTotal(dur);
    setAudioProgress(0);
    setPhase("audio_playing");

    audioTimerRef.current = setInterval(() => {
      setAudioProgress((p) => {
        if (p >= dur - 1) {
          clearInterval(audioTimerRef.current!);
          if (audioCurrentSection < test.sections.length - 1) {
            setAudioCurrentSection((n) => n + 1);
            setCurrentSection((n) => n + 1);
            setPhase("test");
          } else {
            setPhase("transfer");
          }
          return dur;
        }
        return p + 1;
      });
    }, 1000);
  }, [test, audioCurrentSection]);

  // ── Auto-start audio for listening tests ────────────────────────────
  useEffect(() => {
    if (phase === "test" && test?.type === "listening" && audioCurrentSection !== audioAutoStartedRef.current) {
      audioAutoStartedRef.current = audioCurrentSection;
      startAudio();
    }
  }, [phase, audioCurrentSection, test, startAudio]);

  // ── Cancel test ─────────────────────────────────────────────────────
  const cancelTest = useCallback((reason: string) => {
    if (cancelledRef.current || !session || !test) return;
    cancelledRef.current = true;
    [timerRef, transferTimerRef, audioTimerRef].forEach((r) => {
      if (r.current) clearInterval(r.current);
    });
    const attempt = {
      id: `${session.id}-${test.id}-${Date.now()}`,
      studentId: session.id,
      studentName: session.name,
      studentSurname: session.surname,
      groupName: session.group_name,
      testId: test.id,
      testTitle: test.title,
      testType: test.type,
      testLevel: test.level,
      answers,
      score: 0,
      maxScore: test.sections.reduce((a, s) => a + s.questions.length, 0),
      bandScore: 0,
      status: "cancelled" as const,
      startedAt: new Date(startTime).toISOString(),
      submittedAt: new Date().toISOString(),
      timeSpentSeconds: Math.floor((Date.now() - startTime) / 1000),
    };
    saveAttempt(attempt);
    alert(`Test cancelled: ${reason}`);
    router.push("/student/dashboard");
  }, [session, test, answers, startTime, router]);

  // ── Submit test ─────────────────────────────────────────────────────
  const submitTest = useCallback(() => {
    if (submitted || !session || !test) return;
    setSubmitted(true);
    [timerRef, transferTimerRef, audioTimerRef].forEach((r) => {
      if (r.current) clearInterval(r.current);
    });

    let score = 0;
    let max = 0;
    test.sections.forEach((sec) => {
      sec.questions.forEach((q) => {
        max += q.points;
        const userAns = (answers[q.id] || "").trim().toLowerCase();
        const correct = q.correctAnswer.toLowerCase();
        // For multi-answer questions, check if any correct answer matches
        const correctOptions = correct.split("/").map((s) => s.trim());
        if (correctOptions.some((c) => userAns === c || userAns.includes(c))) {
          score += q.points;
        }
      });
    });

    const band = bandScore(score, max, test.type);
    setResult({ score, max, band });

    const attempt = {
      id: `${session.id}-${test.id}-${Date.now()}`,
      studentId: session.id,
      studentName: session.name,
      studentSurname: session.surname,
      groupName: session.group_name,
      testId: test.id,
      testTitle: test.title,
      testType: test.type,
      testLevel: test.level,
      answers,
      score,
      maxScore: max,
      bandScore: band,
      status: "completed" as const,
      startedAt: new Date(startTime).toISOString(),
      submittedAt: new Date().toISOString(),
      timeSpentSeconds: Math.floor((Date.now() - startTime) / 1000),
    };
    saveAttempt(attempt);
    setPhase("submitted");
  }, [submitted, session, test, answers, startTime]);

  const setAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  if (!session || !test) return null;

  // ============================================================
  // PHASE: Warning screen
  // ============================================================
  if (phase === "warning") {
    return <WarningScreen test={test} onAccept={() => {
      if (test.type === "listening") {
        setPhase("test"); // For listening, show questions first then trigger audio
      } else {
        setPhase("test");
      }
    }} />;
  }

  // ============================================================
  // PHASE: Submitted
  // ============================================================
  if (phase === "submitted" && result) {
    return <ResultScreen result={result} test={test} session={session}
      onBack={() => router.push("/student/dashboard")} />;
  }

  // ============================================================
  // PHASE: Transfer time (listening only)
  // ============================================================
  if (phase === "transfer") {
    return (
      <div style={{ minHeight: "100vh", background: "#020817", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", fontFamily: "Inter, system-ui, sans-serif" }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          style={{ textAlign: "center", maxWidth: 440, width: "100%" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(61,98,224,0.15)", border: "2px solid rgba(61,98,224,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <Clock size={28} color="#3d62e0" />
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: "#e8eeff", marginBottom: 8 }}>Transfer Time</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 28, lineHeight: 1.6 }}>
            You now have <strong style={{ color: "#e8eeff" }}>10 minutes</strong> to review your answers.
          </p>
          <div style={{ fontSize: 60, fontWeight: 900, color: transferTimeLeft < 60 ? "#ef4444" : "#3d62e0", marginBottom: 32, fontFamily: "monospace" }}>
            {formatTime(transferTimeLeft)}
          </div>
          <button onClick={submitTest}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", background: "linear-gradient(135deg,#1e3bbf,#3d62e0)", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", borderRadius: 12, cursor: "pointer" }}>
            Submit Now <CheckCircle size={16} />
          </button>
        </motion.div>
      </div>
    );
  }

  const section = test.sections[currentSection];

  // ============================================================
  // PHASE: Test (reading or listening questions) + audio_playing
  // ============================================================
  if (phase !== "test" && phase !== "audio_playing") return null;

  return (
    <div className="test-zone" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#020817", fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Violation warning */}
      <AnimatePresence>
        {showViolationWarning && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.75)" }}>
            <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
              style={{ background: "#0b1530", border: "2px solid #ef4444", borderRadius: 16, padding: 32, maxWidth: 360, width: "100%", margin: "0 16px", textAlign: "center" }}>
              <AlertTriangle size={40} color="#ef4444" style={{ margin: "0 auto 16px" }} />
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#e8eeff", marginBottom: 8 }}>Test Cancelled</h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 24 }}>
                You left the exam screen. Your test has been automatically cancelled.
              </p>
              <button onClick={() => setShowViolationWarning(false)}
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "11px 24px", background: "linear-gradient(135deg,#1e3bbf,#3d62e0)", color: "#fff", fontWeight: 700, border: "none", borderRadius: 10, cursor: "pointer", width: "100%" }}>
                Return to Dashboard
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test header */}
      <header style={{ position: "sticky", top: 0, zIndex: 20, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", height: 54, background: "#060c1f", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        {/* Left: test info */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: test.type === "listening" ? "#2d1b5c" : "#3d2000" }}>
            {test.type === "listening"
              ? <Headphones size={14} color="#c4b5fd" />
              : <BookOpen size={14} color="#fcd34d" />}
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#e8eeff" }}>{test.title}</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>Section {currentSection + 1} of {test.sections.length}</div>
          </div>
        </div>

        {/* Center: sections nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {test.sections.map((s, i) => (
            <button key={s.id}
              onClick={() => test.type === "reading" && setCurrentSection(i)}
              title={s.title}
              style={{ padding: "6px 14px", borderRadius: 8, border: "none", cursor: test.type === "reading" ? "pointer" : "default", fontWeight: 600, fontSize: 13, transition: "all 0.15s",
                background: currentSection === i ? "#3d62e0" : "transparent",
                color: currentSection === i ? "#fff" : "rgba(255,255,255,0.35)" }}>
              P{i + 1}
            </button>
          ))}
        </div>

        {/* Right: timer + submit */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 10, background: "#060c1f", border: "1px solid rgba(255,255,255,0.08)", fontSize: 14, fontWeight: 700, color: timeLeft < 300 ? "#ef4444" : "#3d62e0", fontFamily: "monospace" }}>
            <Clock size={14} />
            {formatTime(timeLeft)}
          </div>
          <button onClick={() => { if (confirm("Are you sure you want to submit your test? This cannot be undone.")) submitTest(); }}
            style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 16px", background: "linear-gradient(135deg,#1e3bbf,#3d62e0)", color: "#fff", fontWeight: 700, fontSize: 13, border: "none", borderRadius: 10, cursor: "pointer" }}>
            Submit <CheckCircle size={14} />
          </button>
        </div>
      </header>

      {/* Progress bar */}
      <div style={{ height: 3, background: "rgba(255,255,255,0.07)", borderRadius: 0 }}>
        <div style={{ height: "100%", background: "linear-gradient(90deg,#3d62e0,#7598ff)", borderRadius: 0, transition: "width 0.3s ease", width: `${((currentSection + 1) / test.sections.length) * 100}%` }} />
      </div>

      {/* Audio banner (listening – audio playing) */}
      {phase === "audio_playing" && (
        <div style={{ background: "#1a0a3a", borderBottom: "1px solid #3b1f6a", padding: "10px 20px", display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <Volume2 size={16} color="#c4b5fd" />
            <span style={{ fontSize: 13, fontWeight: 700, color: "#c4b5fd" }}>
              Section {audioCurrentSection + 1} – Audio Playing
            </span>
          </div>
          <div style={{ flex: 1, height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 3, overflow: "hidden" }}>
            <div style={{ height: "100%", background: "linear-gradient(90deg,#7c3aed,#c4b5fd)", borderRadius: 3, width: `${audioTotal > 0 ? (audioProgress / audioTotal) * 100 : 0}%`, transition: "width 0.5s linear" }} />
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
            <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} style={{ width: 3, borderRadius: 2, background: "#a78bfa", animation: `soundwave ${0.5 + (i % 4) * 0.15}s ease-in-out infinite alternate`, animationDelay: `${i * 0.07}s` }} />
              ))}
            </div>
            <span style={{ fontSize: 12, color: "#a78bfa", fontFamily: "monospace", fontWeight: 600 }}>
              {formatTime(audioProgress)} / {formatTime(audioTotal)}
            </span>
          </div>
          <style>{`@keyframes soundwave { from { height: 4px; } to { height: 18px; } }`}</style>
        </div>
      )}

      {/* Mobile toggle (reading only) */}
      {test.type === "reading" && (
        <div style={{ display: "flex", background: "#060c1f", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "8px 16px", gap: 8 }} className="mobile-toggle-bar">
          {(["passage", "questions"] as const).map(v => (
            <button key={v} onClick={() => setMobileView(v)}
              style={{ flex: 1, padding: "8px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13, transition: "all 0.15s",
                background: mobileView === v ? "#3d62e0" : "transparent",
                color: mobileView === v ? "#fff" : "rgba(255,255,255,0.4)" }}>
              {v === "passage" ? "📖 Passage" : "✏️ Questions"}
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "row", overflow: test.type === "reading" ? "hidden" : "visible", height: test.type === "reading" ? "calc(100vh - 57px)" : "auto" }}>

        {/* Left: Passage (reading) */}
        {test.type === "reading" && section.passageText && (
          <div className={`passage-panel ${mobileView === "passage" ? "panel-visible" : "panel-hidden"}`}
            style={{ width: passageCollapsed ? 0 : "50%", minWidth: passageCollapsed ? 0 : undefined, overflow: "hidden", transition: "width 0.25s ease", background: "#0d1b3e", position: "relative", display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 1, overflowY: "auto", padding: "28px 32px" }}>
              <h2 style={{ fontSize: 17, fontWeight: 800, color: "#e8eeff", marginBottom: 20 }}>{section.passageTitle}</h2>
              <div style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.9, fontSize: 15 }}
                dangerouslySetInnerHTML={{
                  __html: section.passageText
                    .replace(/\n\n/g, "</p><p style='margin-bottom:14px'>")
                    .replace(/\n/g, "<br/>")
                    .replace(/^/, "<p style='margin-bottom:14px'>")
                    .replace(/$/, "</p>")
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                }}
              />
            </div>
          </div>
        )}

        {/* Divider toggle button (reading only, desktop) */}
        {test.type === "reading" && (
          <div className="divider-toggle" style={{ position: "relative", width: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, flexShrink: 0 }}>
            <div style={{ position: "absolute", top: 0, bottom: 0, width: 1, background: "rgba(255,255,255,0.08)" }} />
            <button onClick={() => setPassageCollapsed(p => !p)}
              title={passageCollapsed ? "Show passage" : "Hide passage"}
              style={{ position: "relative", width: 28, height: 28, borderRadius: "50%", background: "#1a2a5e", border: "1.5px solid rgba(255,255,255,0.15)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#93c5fd", fontSize: 14, fontWeight: 700, zIndex: 1, flexShrink: 0, transition: "background 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#2a3f8f")}
              onMouseLeave={e => (e.currentTarget.style.background = "#1a2a5e")}>
              {passageCollapsed ? "›" : "‹"}
            </button>
          </div>
        )}

        {/* Right: Questions */}
        <div className={`questions-panel ${test.type === "reading" && mobileView === "passage" ? "panel-hidden" : "panel-visible"}`}
          style={{ flex: 1, overflowY: "auto", padding: "24px 28px", background: "#020817" }}>

          {/* Listening: passage text */}
          {test.type === "listening" && section.passageText && (
            <div style={{ marginBottom: 20, padding: 16, borderRadius: 12, background: "#060c1f", border: "1px solid rgba(255,255,255,0.08)" }}>
              <pre style={{ whiteSpace: "pre-wrap", fontSize: 14, color: "#e8eeff", fontFamily: "Inter, system-ui, sans-serif", lineHeight: 1.7 }}>
                {section.passageText}
              </pre>
            </div>
          )}

          <div style={{ fontSize: 13, marginBottom: 20, padding: "11px 14px", borderRadius: 10, background: "rgba(61,98,224,0.12)", color: "#93c5fd", border: "1px solid rgba(61,98,224,0.2)", fontWeight: 500, lineHeight: 1.5 }}>
            {section.instructions}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {section.questions.map((q) => (
              <QuestionItem key={q.id} question={q}
                answer={answers[q.id] || ""}
                onAnswer={(val) => setAnswer(q.id, val)} />
            ))}
          </div>

          {/* Section navigation (reading) */}
          {test.type === "reading" && (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 32, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <button onClick={() => setCurrentSection((n) => Math.max(0, n - 1))} disabled={currentSection === 0}
                style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "9px 18px", background: "rgba(61,98,224,0.12)", color: "#93c5fd", border: "1px solid rgba(61,98,224,0.2)", borderRadius: 10, cursor: currentSection === 0 ? "not-allowed" : "pointer", fontWeight: 600, fontSize: 13, opacity: currentSection === 0 ? 0.4 : 1 }}>
                <ChevronLeft size={14} /> Previous
              </button>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>{currentSection + 1} / {test.sections.length}</span>
              {currentSection < test.sections.length - 1 ? (
                <button onClick={() => { setCurrentSection((n) => Math.min(test.sections.length - 1, n + 1)); setMobileView("passage"); }}
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "9px 18px", background: "rgba(61,98,224,0.12)", color: "#93c5fd", border: "1px solid rgba(61,98,224,0.2)", borderRadius: 10, cursor: "pointer", fontWeight: 600, fontSize: 13 }}>
                  Next <ChevronRight size={14} />
                </button>
              ) : (
                <button onClick={() => { if (confirm("Submit the test now?")) submitTest(); }}
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "9px 18px", background: "linear-gradient(135deg,#1e3bbf,#3d62e0)", color: "#fff", border: "none", borderRadius: 10, cursor: "pointer", fontWeight: 700, fontSize: 13 }}>
                  Submit <CheckCircle size={14} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <style>{`
        /* Desktop: both panels side by side, hide mobile bar */
        @media (min-width: 768px) {
          .mobile-toggle-bar { display: none !important; }
          .divider-toggle { display: flex !important; }
          .passage-panel { display: flex !important; }
          .questions-panel { display: block !important; }
        }
        /* Mobile: one panel at a time, hide divider button */
        @media (max-width: 767px) {
          .mobile-toggle-bar { display: flex !important; }
          .divider-toggle { display: none !important; }
          .passage-panel, .questions-panel { width: 100% !important; flex: none !important; }
          .panel-hidden { display: none !important; }
          .panel-visible { display: block !important; }
        }
      `}</style>
    </div>
  );
}

// ============================================================
// Question Item Component
// ============================================================
function QuestionItem({
  question, answer, onAnswer,
}: {
  question: IELTSSection["questions"][0];
  answer: string;
  onAnswer: (v: string) => void;
}) {
  const btnBase: React.CSSProperties = { padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", border: "1px solid", transition: "all 0.15s" };
  return (
    <div style={{ paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: "50%", background: "#3d62e0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#fff" }}>
          {question.number}
        </span>
        <p style={{ fontSize: 14, color: "#e8eeff", lineHeight: 1.6 }}>{question.question}</p>
      </div>

      <div style={{ marginLeft: 38 }}>
        {/* Multiple choice */}
        {question.type === "multiple_choice" && question.options && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {question.options.map((opt) => (
              <label key={opt.value} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                <div style={{ width: 18, height: 18, borderRadius: "50%", border: `2px solid ${answer === opt.value ? "#3d62e0" : "rgba(255,255,255,0.2)"}`, background: answer === opt.value ? "#3d62e0" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                  onClick={() => onAnswer(opt.value)}>
                  {answer === opt.value && <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff" }} />}
                </div>
                <input type="radio" name={`q-${question.id}`} value={opt.value} checked={answer === opt.value} onChange={() => onAnswer(opt.value)} style={{ display: "none" }} />
                <span style={{ fontSize: 14, color: "#e8eeff" }}>{opt.label}</span>
              </label>
            ))}
          </div>
        )}

        {/* True/False/NG */}
        {question.type === "true_false_ng" && question.options && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {question.options.map((opt) => (
              <button key={opt.value} onClick={() => onAnswer(opt.value)}
                style={{ ...btnBase, background: answer === opt.value ? "#3d62e0" : "#060c1f", color: answer === opt.value ? "#fff" : "rgba(255,255,255,0.6)", borderColor: answer === opt.value ? "#3d62e0" : "rgba(255,255,255,0.12)" }}>
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {/* Matching */}
        {question.type === "matching" && question.options && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {question.options.map((opt) => (
              <button key={opt.value} onClick={() => onAnswer(opt.value)}
                style={{ ...btnBase, background: answer === opt.value ? "#3d62e0" : "#060c1f", color: answer === opt.value ? "#fff" : "rgba(255,255,255,0.6)", borderColor: answer === opt.value ? "#3d62e0" : "rgba(255,255,255,0.12)" }}>
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {/* Fill blank / short answer / etc. */}
        {["fill_blank", "short_answer", "summary_completion", "sentence_completion",
          "table_completion", "note_completion", "diagram_labelling"].includes(question.type) && (
          <input type="text" value={answer} onChange={(e) => onAnswer(e.target.value)}
            placeholder="Write your answer here..."
            style={{ padding: "9px 14px", borderRadius: 8, fontSize: 14, background: "#020817", border: "1.5px solid rgba(255,255,255,0.12)", color: "#e8eeff", outline: "none", minWidth: 200, fontFamily: "Inter, system-ui, sans-serif", userSelect: "text", WebkitUserSelect: "text" } as React.CSSProperties}
            onFocus={e => e.currentTarget.style.borderColor = "#3d62e0"}
            onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}
          />
        )}
      </div>
    </div>
  );
}

// ============================================================
// Warning Screen
// ============================================================
function WarningScreen({ test, onAccept }: { test: IELTSTest; onAccept: () => void }) {
  const [agreed, setAgreed] = useState(false);

  const rules = [
    { icon: "🚫", text: "Do NOT switch tabs or open other windows. Your test will be immediately cancelled if you leave this screen." },
    { icon: "📋", text: "Copy and paste are disabled. All answers must be typed manually." },
    { icon: "⏱️", text: test.type === "reading"
      ? `You have exactly ${test.durationMinutes} minutes. The timer cannot be paused.`
      : `The audio lasts approximately ${test.durationMinutes} minutes and CANNOT be paused or rewound. You will then have ${test.transferMinutes} minutes to transfer your answers.` },
    { icon: "📵", text: "Put your phone face-down and away from view." },
    test.type === "listening"
      ? { icon: "🎧", text: "Use headphones if possible. Ensure your volume is set to a comfortable level before starting." }
      : { icon: "📖", text: "Read all three passages carefully before answering. You may refer back to the passages at any time." },
    { icon: "✅", text: "Once you submit, you cannot change your answers." },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#020817", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "Inter, system-ui, sans-serif" }}>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        style={{ maxWidth: 520, width: "100%", background: "#0b1530", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: "36px 32px", boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }}>

        <div style={{ width: 56, height: 56, borderRadius: 14, background: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
          <AlertTriangle size={26} color="#d97706" />
        </div>

        <h1 style={{ fontSize: 24, fontWeight: 900, color: "#e8eeff", textAlign: "center", marginBottom: 4 }}>Before You Begin</h1>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textAlign: "center", marginBottom: 24 }}>
          {test.title} — {test.type.charAt(0).toUpperCase() + test.type.slice(1)} Test
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
          {rules.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 12, padding: "12px 14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, fontSize: 13 }}>
              <span style={{ flexShrink: 0, fontSize: 16, lineHeight: 1.4 }}>{item.icon}</span>
              <span style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.55 }}>{item.text}</span>
            </div>
          ))}
        </div>

        <label style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer", marginBottom: 24 }}>
          <div onClick={() => setAgreed(!agreed)}
            style={{ flexShrink: 0, width: 20, height: 20, borderRadius: 6, border: `2px solid ${agreed ? "#3d62e0" : "rgba(255,255,255,0.2)"}`, background: agreed ? "#3d62e0" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2, cursor: "pointer", transition: "all 0.15s" }}>
            {agreed && <CheckCircle size={13} color="#fff" />}
          </div>
          <span style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
            I understand and agree to the exam rules above. I am ready to begin.
          </span>
        </label>

        <button onClick={onAccept} disabled={!agreed}
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px", background: agreed ? "linear-gradient(135deg,#1e3bbf,#3d62e0)" : "rgba(61,98,224,0.3)", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", borderRadius: 12, cursor: agreed ? "pointer" : "not-allowed", boxShadow: agreed ? "0 4px 15px rgba(37,99,235,0.4)" : "none", transition: "all 0.2s" }}>
          Start Test <ChevronRight size={16} />
        </button>
      </motion.div>
    </div>
  );
}

// ============================================================
// Result Screen
// ============================================================
function ResultScreen({
  result, test, session, onBack,
}: {
  result: { score: number; max: number; band: number };
  test: IELTSTest;
  session: StudentSession;
  onBack: () => void;
}) {
  const pct = Math.round((result.score / result.max) * 100);
  const msg = pct >= 80 ? "Excellent performance!" : pct >= 60 ? "Good effort — keep practising!" : "Keep working hard — you can do it!";

  return (
    <div style={{ minHeight: "100vh", background: "#020817", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "Inter, system-ui, sans-serif" }}>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        style={{ maxWidth: 420, width: "100%", textAlign: "center" }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg,#1e3bbf,#4a6de8)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
          <CheckCircle size={36} color="#fff" />
        </div>
        <h1 style={{ fontSize: 30, fontWeight: 900, color: "#e8eeff", marginBottom: 6 }}>Test Complete!</h1>
        <p style={{ color: "rgba(255,255,255,0.4)", marginBottom: 32 }}>Well done, {session.name}! Here are your results.</p>

        <div style={{ background: "#0b1530", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: "32px", marginBottom: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 900, color: "#3d62e0", lineHeight: 1, marginBottom: 4 }}>{result.band}</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.4)", marginBottom: 24 }}>IELTS Band Score</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
            {[
              { label: "Raw Score", value: `${result.score}/${result.max}` },
              { label: "Percentage", value: `${pct}%` },
            ].map(s => (
              <div key={s.label} style={{ padding: 16, borderRadius: 14, background: "#060c1f", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#e8eeff", marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div style={{ height: 6, background: "rgba(255,255,255,0.07)", borderRadius: 3, marginBottom: 8 }}>
            <div style={{ height: "100%", background: "linear-gradient(90deg,#3d62e0,#7598ff)", borderRadius: 3, width: `${pct}%`, transition: "width 0.5s ease" }} />
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{msg}</p>
        </div>

        <button onClick={onBack}
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px", background: "linear-gradient(135deg,#1e3bbf,#3d62e0)", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", borderRadius: 12, cursor: "pointer", boxShadow: "0 4px 15px rgba(37,99,235,0.4)" }}>
          Back to Dashboard <ChevronRight size={16} />
        </button>
      </motion.div>
    </div>
  );
}
