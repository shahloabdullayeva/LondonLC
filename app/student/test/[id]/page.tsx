"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock, AlertTriangle, CheckCircle, X, ChevronLeft, ChevronRight,
  Headphones, BookOpen, Volume2, Play
} from "lucide-react";
import { getSession, saveAttempt } from "@/lib/store";
import { getTestById, type IELTSTest, type IELTSSection } from "@/data/ielts-tests";
import { formatTime, bandScore } from "@/lib/utils";
import type { StudentSession } from "@/lib/store";

type Phase = "warning" | "reading" | "test" | "audio_playing" | "transfer" | "submitted";

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

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const transferTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const violationRef = useRef(0);
  const cancelledRef = useRef(false);

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

    const handleVisibility = () => {
      if (document.hidden) {
        violationRef.current += 1;
        setViolationCount(violationRef.current);
        setShowViolationWarning(true);
        if (violationRef.current >= 2) {
          cancelTest("You left the exam screen too many times.");
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
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
    const sec = test.sections[audioCurrentSection];
    const dur = sec.audioDurationSeconds || 300;
    setAudioTotal(dur);
    setAudioProgress(0);
    setPhase("audio_playing");

    audioTimerRef.current = setInterval(() => {
      setAudioProgress((p) => {
        if (p >= dur - 1) {
          clearInterval(audioTimerRef.current!);
          // Move to next section or transfer
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
      <div className="min-h-screen flex flex-col items-center justify-center px-6"
        style={{ background: "var(--bg-primary)" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{ background: "var(--accent-light)" }}>
            <Clock size={28} style={{ color: "var(--accent)" }} />
          </div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
            Transfer Time
          </h2>
          <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
            You now have <strong>10 minutes</strong> to transfer your answers to the answer sheet.
            Review your answers carefully.
          </p>
          <div className={`text-5xl font-black mb-8 ${transferTimeLeft < 60 ? "timer-warning" : ""}`}
            style={{ color: "var(--accent)" }}>
            {formatTime(transferTimeLeft)}
          </div>
          <button onClick={submitTest} className="btn-primary">
            Submit Now <CheckCircle size={16} />
          </button>
        </motion.div>
      </div>
    );
  }

  const section = test.sections[currentSection];

  // ============================================================
  // PHASE: Audio playing (listening)
  // ============================================================
  if (phase === "audio_playing") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6"
        style={{ background: "var(--bg-primary)" }}>
        <div className="text-center max-w-md w-full">
          <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse-slow"
            style={{ background: "linear-gradient(135deg, #5b21b6, #7c3aed)" }}>
            <Volume2 size={28} className="text-white" />
          </div>
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
            Section {audioCurrentSection + 1} – Now Playing
          </h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
            Listen carefully. The audio cannot be paused or rewound.
          </p>

          {/* Progress bar */}
          <div className="progress-bar mb-2">
            <div className="progress-bar-fill" style={{ width: `${(audioProgress / audioTotal) * 100}%` }} />
          </div>
          <div className="flex justify-between text-xs mb-8" style={{ color: "var(--text-muted)" }}>
            <span>{formatTime(audioProgress)}</span>
            <span>{formatTime(audioTotal)}</span>
          </div>

          {/* Soundwave animation */}
          <div className="flex items-center justify-center gap-1 mb-6">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i}
                className="w-1 rounded-full"
                style={{
                  background: "var(--accent)",
                  height: `${8 + Math.sin(Date.now() / 200 + i) * 8 + 8}px`,
                  animation: `soundwave ${0.5 + (i % 5) * 0.1}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.05}s`,
                }}
              />
            ))}
          </div>

          <div className="p-4 rounded-xl text-sm" style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border)",
            color: "var(--text-secondary)",
          }}>
            <strong>Note:</strong> Write your answers on the question paper as you listen.
            You will have 10 minutes to transfer your answers when all sections are complete.
          </div>
        </div>
        <style>{`
          @keyframes soundwave {
            from { transform: scaleY(0.5); }
            to { transform: scaleY(1.5); }
          }
        `}</style>
      </div>
    );
  }

  // ============================================================
  // PHASE: Test (reading or listening questions)
  // ============================================================
  return (
    <div className="min-h-screen flex flex-col test-zone" style={{ background: "var(--bg-primary)" }}>
      {/* Violation warning */}
      <AnimatePresence>
        {showViolationWarning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="warning-modal-backdrop"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="rounded-2xl p-8 max-w-sm w-full mx-4 text-center"
              style={{ background: "var(--bg-card)", border: "2px solid #ef4444" }}
            >
              <AlertTriangle size={40} className="text-red-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                Warning! ({violationCount}/2)
              </h2>
              <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
                You left the exam screen. This is a violation.
                {violationCount < 2
                  ? " One more violation will automatically cancel your test."
                  : " Your test will now be cancelled."}
              </p>
              <button
                onClick={() => setShowViolationWarning(false)}
                className="btn-primary w-full"
              >
                Return to Test
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test header */}
      <header className="sticky top-0 z-20 px-4 py-3 flex items-center justify-between"
        style={{ background: "var(--bg-primary)", borderBottom: "1px solid var(--border)" }}>
        {/* Left: test info */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: test.type === "listening" ? "#ede9fe" : "#fef3c7" }}>
            {test.type === "listening"
              ? <Headphones size={14} style={{ color: "#5b21b6" }} />
              : <BookOpen size={14} style={{ color: "#92400e" }} />}
          </div>
          <div>
            <div className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>
              {test.title}
            </div>
            <div className="text-xs" style={{ color: "var(--text-muted)" }}>
              Section {currentSection + 1} of {test.sections.length}
            </div>
          </div>
        </div>

        {/* Center: sections nav */}
        <div className="hidden md:flex items-center gap-1">
          {test.sections.map((s, i) => (
            <button
              key={s.id}
              onClick={() => test.type === "reading" && setCurrentSection(i)}
              className={`section-tab ${currentSection === i ? "active" : ""}`}
              title={s.title}
            >
              P{i + 1}
            </button>
          ))}
        </div>

        {/* Right: timer + submit */}
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-bold ${timeLeft < 300 ? "timer-warning" : ""}`}
            style={{ background: "var(--bg-secondary)", color: timeLeft < 300 ? "var(--danger)" : "var(--accent)" }}>
            <Clock size={14} />
            {formatTime(timeLeft)}
          </div>
          {test.type === "listening" && phase === "test" && (
            <button onClick={startAudio}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #5b21b6, #7c3aed)" }}>
              <Play size={14} /> Play Audio
            </button>
          )}
          <button onClick={() => {
            if (confirm("Are you sure you want to submit your test? This cannot be undone.")) {
              submitTest();
            }
          }} className="btn-primary text-sm py-1.5 px-4">
            Submit <CheckCircle size={14} />
          </button>
        </div>
      </header>

      {/* Progress bar */}
      <div className="progress-bar" style={{ borderRadius: 0 }}>
        <div className="progress-bar-fill" style={{
          width: `${((currentSection + 1) / test.sections.length) * 100}%`
        }} />
      </div>

      {/* Content */}
      <div className={`flex-1 flex flex-col md:flex-row ${test.type === "reading" ? "overflow-hidden" : ""}`}
        style={{ height: test.type === "reading" ? "calc(100vh - 80px)" : "auto" }}>

        {/* Left: Passage (reading) */}
        {test.type === "reading" && section.passageText && (
          <div className="w-full md:w-1/2 overflow-y-auto p-6"
            style={{ borderRight: "1px solid var(--border)" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {section.passageTitle}
            </h2>
            <div className="passage-text"
              style={{ color: "var(--text-primary)" }}
              dangerouslySetInnerHTML={{
                __html: section.passageText
                  .replace(/\n\n/g, "</p><p>")
                  .replace(/\n/g, "<br/>")
                  .replace(/^/, "<p>")
                  .replace(/$/, "</p>")
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
              }}
            />
          </div>
        )}

        {/* Right: Questions */}
        <div className={`${test.type === "reading" ? "w-full md:w-1/2 overflow-y-auto" : "w-full"} p-6`}>
          {/* Listening: show passage text (notes/questions layout) */}
          {test.type === "listening" && section.passageText && (
            <div className="mb-6 p-4 rounded-xl"
              style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
              <pre className="whitespace-pre-wrap text-sm"
                style={{ color: "var(--text-primary)", fontFamily: "var(--font-inter)" }}>
                {section.passageText}
              </pre>
            </div>
          )}

          <div className="text-sm mb-4 p-3 rounded-xl"
            style={{ background: "var(--accent-light)", color: "var(--accent)", border: "1px solid var(--border)" }}>
            {section.instructions}
          </div>

          <div className="space-y-6">
            {section.questions.map((q) => (
              <QuestionItem key={q.id} question={q}
                answer={answers[q.id] || ""}
                onAnswer={(val) => setAnswer(q.id, val)} />
            ))}
          </div>

          {/* Section navigation (reading) */}
          {test.type === "reading" && (
            <div className="flex justify-between mt-8 pt-6"
              style={{ borderTop: "1px solid var(--border)" }}>
              <button
                onClick={() => setCurrentSection((n) => Math.max(0, n - 1))}
                disabled={currentSection === 0}
                className="btn-secondary text-sm py-2 px-4 disabled:opacity-40"
              >
                <ChevronLeft size={14} /> Previous
              </button>
              <span className="text-sm self-center" style={{ color: "var(--text-muted)" }}>
                {currentSection + 1} / {test.sections.length}
              </span>
              {currentSection < test.sections.length - 1 ? (
                <button
                  onClick={() => setCurrentSection((n) => Math.min(test.sections.length - 1, n + 1))}
                  className="btn-secondary text-sm py-2 px-4"
                >
                  Next <ChevronRight size={14} />
                </button>
              ) : (
                <button onClick={() => {
                  if (confirm("Submit the test now?")) submitTest();
                }} className="btn-primary text-sm py-2 px-4">
                  Submit <CheckCircle size={14} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
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
  return (
    <div className="pb-6" style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="flex gap-3 mb-3">
        <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ background: "var(--accent)" }}>
          {question.number}
        </span>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>
          {question.question}
        </p>
      </div>

      <div className="ml-10">
        {/* Multiple choice */}
        {question.type === "multiple_choice" && question.options && (
          <div className="space-y-2">
            {question.options.map((opt) => (
              <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${answer === opt.value ? "border-0" : ""}`}
                  style={{
                    background: answer === opt.value ? "var(--accent)" : "transparent",
                    borderColor: answer === opt.value ? "var(--accent)" : "var(--border)",
                  }}>
                  {answer === opt.value && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
                <input type="radio" name={`q-${question.id}`} value={opt.value}
                  checked={answer === opt.value}
                  onChange={() => onAnswer(opt.value)}
                  className="sr-only" />
                <span className="text-sm" style={{ color: "var(--text-primary)" }}>{opt.label}</span>
              </label>
            ))}
          </div>
        )}

        {/* True/False/NG */}
        {question.type === "true_false_ng" && question.options && (
          <div className="flex flex-wrap gap-2">
            {question.options.map((opt) => (
              <button key={opt.value}
                onClick={() => onAnswer(opt.value)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 border`}
                style={answer === opt.value
                  ? { background: "var(--accent)", color: "white", borderColor: "var(--accent)" }
                  : { background: "var(--bg-secondary)", color: "var(--text-secondary)", borderColor: "var(--border)" }
                }
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {/* Matching */}
        {question.type === "matching" && question.options && (
          <div className="flex flex-wrap gap-2">
            {question.options.map((opt) => (
              <button key={opt.value}
                onClick={() => onAnswer(opt.value)}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all border"
                style={answer === opt.value
                  ? { background: "var(--accent)", color: "white", borderColor: "var(--accent)" }
                  : { background: "var(--bg-secondary)", color: "var(--text-secondary)", borderColor: "var(--border)" }
                }
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {/* Fill blank / short answer / note completion etc. */}
        {["fill_blank", "short_answer", "summary_completion", "sentence_completion",
          "table_completion", "note_completion", "diagram_labelling"].includes(question.type) && (
          <input
            type="text"
            value={answer}
            onChange={(e) => onAnswer(e.target.value)}
            placeholder="Write your answer here..."
            className="answer-input"
            style={{ userSelect: "text", WebkitUserSelect: "text" }}
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

  return (
    <div className="min-h-screen flex items-center justify-center p-6"
      style={{ background: "var(--bg-primary)" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg w-full rounded-3xl p-8"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow-lg)" }}
      >
        <div className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center"
          style={{ background: "#fef3c7" }}>
          <AlertTriangle size={26} style={{ color: "#d97706" }} />
        </div>

        <h1 className="text-2xl font-black text-center mb-1" style={{ color: "var(--text-primary)" }}>
          Before You Begin
        </h1>
        <p className="text-center text-sm mb-6" style={{ color: "var(--text-muted)" }}>
          {test.title} — {test.type.charAt(0).toUpperCase() + test.type.slice(1)} Test
        </p>

        <div className="space-y-3 mb-6">
          {[
            { icon: "🚫", text: "Do NOT switch tabs or open other windows. Your test will be cancelled after 2 violations." },
            { icon: "📋", text: "Copy and paste are disabled. All answers must be typed manually." },
            { icon: "⏱️", text: test.type === "reading"
              ? `You have exactly ${test.durationMinutes} minutes. The timer cannot be paused.`
              : `The audio lasts approximately ${test.durationMinutes} minutes and CANNOT be paused or rewound. You will then have ${test.transferMinutes} minutes to transfer your answers.` },
            { icon: "📵", text: "Put your phone face-down and away from view." },
            test.type === "listening"
              ? { icon: "🎧", text: "Use headphones if possible. Ensure your volume is set to a comfortable level before starting." }
              : { icon: "📖", text: "Read all three passages carefully before answering. You may refer back to the passages at any time." },
            { icon: "✅", text: "Once you submit, you cannot change your answers." },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-xl text-sm"
              style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
              <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
              <span style={{ color: "var(--text-secondary)" }}>{item.text}</span>
            </div>
          ))}
        </div>

        <label className="flex items-start gap-3 cursor-pointer mb-6">
          <div
            onClick={() => setAgreed(!agreed)}
            className="w-5 h-5 rounded flex-shrink-0 mt-0.5 flex items-center justify-center cursor-pointer border-2 transition-all"
            style={{
              background: agreed ? "var(--accent)" : "transparent",
              borderColor: agreed ? "var(--accent)" : "var(--border)",
            }}
          >
            {agreed && <CheckCircle size={12} className="text-white" />}
          </div>
          <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
            I understand and agree to the exam rules above. I am ready to begin.
          </span>
        </label>

        <button
          onClick={onAccept}
          disabled={!agreed}
          className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
        >
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

  return (
    <div className="min-h-screen flex items-center justify-center p-6"
      style={{ background: "var(--bg-primary)" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center"
      >
        <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #1e3bbf, #4a6de8)" }}>
          <CheckCircle size={36} className="text-white" />
        </div>

        <h1 className="text-3xl font-black mb-1" style={{ color: "var(--text-primary)" }}>
          Test Complete!
        </h1>
        <p className="mb-8" style={{ color: "var(--text-muted)" }}>
          Well done, {session.name}! Here are your results.
        </p>

        <div className="rounded-3xl p-8 mb-6"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow-lg)" }}>
          {/* Band score */}
          <div className="text-7xl font-black mb-1 logo-gradient">
            {result.band}
          </div>
          <div className="text-sm font-semibold mb-6" style={{ color: "var(--text-muted)" }}>
            IELTS Band Score
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-2xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
              <div className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                {result.score}/{result.max}
              </div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>Raw Score</div>
            </div>
            <div className="p-4 rounded-2xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
              <div className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                {pct}%
              </div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>Percentage</div>
            </div>
          </div>

          {/* Progress circle */}
          <div className="progress-bar mb-1">
            <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
          </div>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            {pct >= 80 ? "Excellent performance!" : pct >= 60 ? "Good effort — keep practising!" : "Keep working hard — you can do it!"}
          </p>
        </div>

        <button onClick={onBack} className="btn-primary w-full">
          Back to Dashboard <ChevronRight size={16} />
        </button>
      </motion.div>
    </div>
  );
}
