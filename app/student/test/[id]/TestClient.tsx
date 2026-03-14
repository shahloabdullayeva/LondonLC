"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock, AlertTriangle, CheckCircle, X, ChevronLeft, ChevronRight,
  Headphones, BookOpen, Volume2, Sun, Moon, Minus, Plus, List
} from "lucide-react";
import { getSession, saveAttempt, isIPBlocked } from "@/lib/store";
import { getTestById, type IELTSTest, type IELTSSection } from "@/data/ielts-tests";
import { formatTime, bandScore } from "@/lib/utils";
import type { StudentSession, DeviceInfo } from "@/lib/store";

type Phase = "warning" | "test" | "audio_playing" | "transfer" | "submitted" | "cancelled";

type Highlight = { id: string; text: string; color: string; sectionIdx: number; side: "passage" | "questions"; rawStart: number; rawEnd: number; questionId?: string };

const HIGHLIGHT_COLORS = [
  { bg: "#fde68a", label: "Yellow" },
  { bg: "#bbf7d0", label: "Green" },
  { bg: "#bae6fd", label: "Blue" },
  { bg: "#fecdd3", label: "Pink" },
  { bg: "underline", label: "Underline" },
];

// Walk DOM text nodes to compute absolute char offset within container
// Count visible chars from start of container to a range endpoint using Range.toString()
// This correctly handles element nodes (not just text nodes) as range containers.
function getRangeCharCount(container: HTMLElement, rangeNode: Node, rangeOffset: number): number {
  try {
    const r = document.createRange();
    r.setStart(container, 0);
    r.setEnd(rangeNode, rangeOffset);
    return r.toString().length;
  } catch {
    return 0;
  }
}

// Map visible-char DOM offset → raw text offset (raw text has ** markers and \n chars that don't appear in DOM)
// skipInvisible=true: land on next visible char (use for rawStart)
// skipInvisible=false: stop right after last visible char (use for rawEnd)
function domOffsetToRawOffset(rawText: string, domOffset: number, skipInvisible = true): number {
  let domIdx = 0;
  let i = 0;
  while (i <= rawText.length) {
    if (domIdx === domOffset) {
      if (skipInvisible) {
        while (i < rawText.length) {
          const c = rawText[i];
          if (c === '\n') { i++; continue; }
          if (c === '*' && i + 1 < rawText.length && rawText[i + 1] === '*') { i += 2; continue; }
          break;
        }
      }
      return i;
    }
    if (i === rawText.length) break;
    const ch = rawText[i];
    if (ch === '*' && i + 1 < rawText.length && rawText[i + 1] === '*') { i += 2; continue; }
    if (ch === '\n') { i++; continue; }
    domIdx++;
    i++;
  }
  return rawText.length;
}

// Read the current theme from the HTML class
function getTheme(): "dark" | "light" {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export default function TestPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const isPracticeMode = searchParams.get("practice") === "1";
  const testId = params.id as string;
  const deviceInfoRef = useRef<DeviceInfo>({
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    platform: typeof navigator !== "undefined" ? navigator.platform : "",
    language: typeof navigator !== "undefined" ? navigator.language : "",
    screenWidth: typeof screen !== "undefined" ? screen.width : 0,
    screenHeight: typeof screen !== "undefined" ? screen.height : 0,
    ip: "fetching...",
    timestamp: new Date().toISOString(),
  });

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
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [toolbarPos, setToolbarPos] = useState<{ x: number; y: number } | null>(null);
  // showViolationWarning replaced by phase === "cancelled"
  const [pendingText, setPendingText] = useState("");
  const [pendingRawStart, setPendingRawStart] = useState(0);
  const [pendingRawEnd, setPendingRawEnd] = useState(0);
  const [pendingQuestionId, setPendingQuestionId] = useState<string | undefined>(undefined);
  const [pendingSide, setPendingSide] = useState<"passage" | "questions">("passage");
  const [cancelMessage, setCancelMessage] = useState("");
  const [pageMode, setPageMode] = useState<"dark" | "white">("dark");
  const [fontSize, setFontSize] = useState(15);
  const [showDetails, setShowDetails] = useState(false);

  // Detect theme on mount and when it changes
  useEffect(() => {
    setTheme(getTheme());
    const obs = new MutationObserver(() => setTheme(getTheme()));
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  // White page mode overrides system theme
  const effectiveTheme = pageMode === "white" ? "light" : theme;

  // Theme-aware colours
  const T = effectiveTheme === "dark" ? {
    bg: "#0a051f", nav: "#0e0828", card: "#140b35", passage: "#1a0e42",
    text: "#f0eaff", textSub: "rgba(255,255,255,0.5)", textMuted: "rgba(255,255,255,0.35)",
    border: "rgba(255,255,255,0.08)", accent: "#7c3aed", accentBtn: "linear-gradient(135deg,#6d28d9,#7c3aed)",
    accentDim: "rgba(124,58,237,0.12)", accentBorder: "rgba(124,58,237,0.2)",
    inputBg: "#0a051f", shadow: "rgba(0,0,0,0.6)",
  } : {
    bg: pageMode === "white" ? "#faf8f4" : "#ffffff",
    nav: pageMode === "white" ? "#f0ede6" : "#f4f0ff",
    card: pageMode === "white" ? "#faf8f4" : "#ffffff",
    passage: pageMode === "white" ? "#f5f2ec" : "#f9f7ff",
    text: pageMode === "white" ? "#2c2416" : "#1a0040",
    textSub: pageMode === "white" ? "rgba(44,36,22,0.6)" : "rgba(26,0,64,0.55)",
    textMuted: pageMode === "white" ? "rgba(44,36,22,0.45)" : "rgba(26,0,64,0.4)",
    border: pageMode === "white" ? "rgba(44,36,22,0.12)" : "rgba(109,40,217,0.12)",
    accent: "#6d28d9", accentBtn: "linear-gradient(135deg,#6d28d9,#7c3aed)",
    accentDim: "rgba(109,40,217,0.08)", accentBorder: "rgba(109,40,217,0.2)",
    inputBg: pageMode === "white" ? "#faf8f4" : "#ffffff",
    shadow: pageMode === "white" ? "rgba(44,36,22,0.08)" : "rgba(109,40,217,0.1)",
  };

  // ── Highlight toolbar dismiss ────────────────────────────────────────
  useEffect(() => {
    if (!toolbarPos) return;
    const dismiss = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("[data-highlight-toolbar]")) {
        setToolbarPos(null); setPendingText("");
      }
    };
    document.addEventListener("mousedown", dismiss);
    return () => document.removeEventListener("mousedown", dismiss);
  }, [toolbarPos]);

  const handleTextMouseUp = (e: React.MouseEvent, side: "passage" | "questions") => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed) return;
    const text = sel.toString().trim();
    if (text.length < 2) return;
    if (sel.rangeCount === 0) return;

    let rawStart = -1;
    let rawEnd = -1;
    let questionId: string | undefined;

    try {
      const range = sel.getRangeAt(0);
      const container = e.currentTarget as HTMLElement;

      if (side === "passage") {
        const passageText = test?.sections[currentSection]?.passageText || "";
        const startDom = getRangeCharCount(container, range.startContainer, range.startOffset);
        const endDom = getRangeCharCount(container, range.endContainer, range.endOffset);
        rawStart = domOffsetToRawOffset(passageText, startDom, true);
        rawEnd = domOffsetToRawOffset(passageText, endDom, false);
        rawEnd = Math.min(Math.max(rawEnd, rawStart + 1), passageText.length);
      } else {
        // Questions side: position within the specific question element
        const startEl = range.startContainer.nodeType === Node.TEXT_NODE
          ? (range.startContainer as Text).parentElement
          : range.startContainer as HTMLElement;
        const qEl = startEl?.closest("[data-question-id]") as HTMLElement | null;
        questionId = qEl?.dataset.questionId;
        if (qEl) {
          rawStart = getRangeCharCount(qEl, range.startContainer, range.startOffset);
          rawEnd = rawStart + text.length;
        }
      }
    } catch {
      rawStart = -1;
      rawEnd = -1;
    }

    if (rawStart < 0 || rawEnd <= rawStart) return;

    setPendingText(text);
    setPendingRawStart(rawStart);
    setPendingRawEnd(rawEnd);
    setPendingQuestionId(questionId);
    setPendingSide(side);
    const toolY = Math.max(e.clientY - 56, 60);
    setToolbarPos({ x: e.clientX, y: toolY });
  };

  const applyHighlight = (color: string) => {
    if (!pendingText) return;
    setHighlights(prev => [...prev, {
      id: `h-${Date.now()}`,
      text: pendingText,
      color,
      sectionIdx: currentSection,
      side: pendingSide,
      rawStart: pendingRawStart,
      rawEnd: pendingRawEnd,
      questionId: pendingQuestionId,
    }]);
    setToolbarPos(null); setPendingText("");
    window.getSelection()?.removeAllRanges();
  };

  const removeHighlight = (id: string) => setHighlights(prev => prev.filter(h => h.id !== id));

  const handlePassageClick = (e: React.MouseEvent) => {
    const el = e.target as HTMLElement;
    if (el.tagName === "MARK" && el.dataset.hid) removeHighlight(el.dataset.hid);
  };

  const buildAnnotatedHtml = (rawText: string, sectionIdx: number, side: "passage" | "questions"): string => {
    const active = highlights.filter(h => h.sectionIdx === sectionIdx && h.side === side);

    type Pos = { start: number; end: number; id: string; color: string };
    const positioned: Pos[] = active
      .filter(h => h.rawStart < h.rawEnd && h.rawStart >= 0 && h.rawEnd <= rawText.length)
      .map(h => ({ start: h.rawStart, end: h.rawEnd, id: h.id, color: h.color }));

    positioned.sort((a, b) => a.start - b.start);
    const clean: Pos[] = [];
    let lastEnd = 0;
    for (const p of positioned) {
      if (p.start >= lastEnd) { clean.push(p); lastEnd = p.end; }
    }

    const fmt = (s: string) => s
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n\n/g, "<br/><br/>")
      .replace(/\n/g, "<br/>");

    const styleFor = (color: string) => color === "underline"
      ? `text-decoration:underline;text-decoration-color:#7c3aed;text-underline-offset:3px;cursor:pointer`
      : `background:${color};border-radius:3px;cursor:pointer;padding:0 1px`;

    let html = "";
    let pos = 0;
    for (const p of clean) {
      html += fmt(rawText.slice(pos, p.start));
      html += `<mark data-hid="${p.id}" style="${styleFor(p.color)}" title="Click to remove">${fmt(rawText.slice(p.start, p.end))}</mark>`;
      pos = p.end;
    }
    html += fmt(rawText.slice(pos));

    return `<div>${html}</div>`;
  };

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const transferTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const violationRef = useRef(0);
  const cancelledRef = useRef(false);
  const anticheatActiveRef = useRef(false);
  const audioAutoStartedRef = useRef(-1);

  // ── Fetch IP on mount + check if blocked ────────────────────────────
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then(r => r.json())
      .then(async (data) => {
        const ip = data.ip || "unknown";
        deviceInfoRef.current = { ...deviceInfoRef.current, ip };
        if (!isPracticeMode) {
          const blocked = await isIPBlocked(ip);
          if (blocked) router.push("/auth/login");
        }
      })
      .catch(() => { deviceInfoRef.current = { ...deviceInfoRef.current, ip: "unknown" }; });
  }, [isPracticeMode, router]);

  // ── Load session and test ───────────────────────────────────────────
  useEffect(() => {
    const s = getSession();
    if (!s) { router.push("/auth/login"); return; }
    if (s.isAdmin && !isPracticeMode) { router.push("/admin/dashboard"); return; }
    setSession(s);
    const t = getTestById(testId);
    if (!t) { router.push(s.isAdmin ? "/admin/dashboard" : "/student/dashboard"); return; }
    setTest(t);
    setTimeLeft(t.durationMinutes * 60);
    setTransferTimeLeft(t.transferMinutes * 60);
  }, [testId, router, isPracticeMode]);

  // ── Anti-cheat: tab visibility ──────────────────────────────────────
  useEffect(() => {
    if (isPracticeMode) return; // no anti-cheat for teacher practice
    if (phase !== "test" && phase !== "audio_playing" && phase !== "transfer") return;

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
  }, [phase, isPracticeMode]);

  // ── Anti-cheat: context menu + copy/paste ───────────────────────────
  useEffect(() => {
    if (isPracticeMode) return; // no anti-cheat for teacher practice
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
  }, [phase, isPracticeMode]);

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
      groupName: isPracticeMode ? "__teacher_practice__" : session.group_name,
      testId: test.id,
      testTitle: test.title,
      testType: test.type,
      testLevel: test.level,
      answers,
      score: 0,
      maxScore: test.sections.reduce((a, s) => a + s.questions.length, 0),
      bandScore: 0,
      status: "cancelled" as const,
      cancelReason: reason,
      startedAt: new Date(startTime).toISOString(),
      submittedAt: new Date().toISOString(),
      timeSpentSeconds: Math.floor((Date.now() - startTime) / 1000),
      deviceInfo: { ...deviceInfoRef.current, timestamp: new Date().toISOString() },
      isTeacherAttempt: isPracticeMode,
      teacherId: isPracticeMode ? session.id : undefined,
    };
    saveAttempt(attempt); // fire-and-forget async save
    setCancelMessage(reason);
    setPhase("cancelled");
  }, [session, test, answers, startTime, isPracticeMode]);

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
      groupName: isPracticeMode ? "__teacher_practice__" : session.group_name,
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
      deviceInfo: { ...deviceInfoRef.current, timestamp: new Date().toISOString() },
      isTeacherAttempt: isPracticeMode,
      teacherId: isPracticeMode ? session.id : undefined,
    };
    saveAttempt(attempt); // fire-and-forget async save
    setPhase("submitted");
  }, [submitted, session, test, answers, startTime, isPracticeMode]);

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
  // PHASE: Cancelled
  // ============================================================
  if (phase === "cancelled") {
    return (
      <div style={{ minHeight: "100vh", background: "#0a051f", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "Inter, system-ui, sans-serif" }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          style={{ maxWidth: 420, width: "100%", textAlign: "center" }}>
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(239,68,68,0.15)", border: "2px solid rgba(239,68,68,0.35)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <AlertTriangle size={32} color="#ef4444" />
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 10 }}>Test Cancelled</h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 32, padding: "0 8px" }}>
            {cancelMessage}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <button onClick={() => { cancelledRef.current = false; window.location.reload(); }}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px", background: "linear-gradient(135deg,#7c3aed,#6d28d9)", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", borderRadius: 12, cursor: "pointer", boxShadow: "0 4px 15px rgba(124,58,237,0.4)" }}>
              Try Again
            </button>
            <button onClick={() => router.push(isPracticeMode ? "/admin/dashboard" : "/student/dashboard")}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px", background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: 15, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12, cursor: "pointer" }}>
              Go to Dashboard
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ============================================================
  // PHASE: Submitted
  // ============================================================
  if (phase === "submitted" && result) {
    return <ResultScreen result={result} test={test} session={session} answers={answers}
      onBack={() => router.push(isPracticeMode ? "/admin/dashboard" : "/student/dashboard")} />;
  }

  // ============================================================
  // PHASE: Transfer time (listening only)
  // ============================================================
  if (phase === "transfer") {
    return (
      <div style={{ minHeight: "100vh", background: "#0a051f", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", fontFamily: "Inter, system-ui, sans-serif" }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          style={{ textAlign: "center", maxWidth: 440, width: "100%" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(124,58,237,0.15)", border: "2px solid rgba(124,58,237,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <Clock size={28} color="#7c3aed" />
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: "#e8eeff", marginBottom: 8 }}>Transfer Time</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 28, lineHeight: 1.6 }}>
            You now have <strong style={{ color: "#e8eeff" }}>10 minutes</strong> to review your answers.
          </p>
          <div style={{ fontSize: 60, fontWeight: 900, color: transferTimeLeft < 60 ? "#ef4444" : "#7c3aed", marginBottom: 32, fontFamily: "monospace" }}>
            {formatTime(transferTimeLeft)}
          </div>
          <button onClick={submitTest}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", background: "linear-gradient(135deg,#6d28d9,#7c3aed)", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", borderRadius: 12, cursor: "pointer" }}>
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
    <div className="test-zone" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: T.bg, fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Test header */}
      <header style={{ position: "sticky", top: 0, zIndex: 20, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", height: 54, background: T.nav, borderBottom: `1px solid ${T.border}` }}>
        {/* Left: test info */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: T.accentDim }}>
            {test.type === "listening"
              ? <Headphones size={14} color={T.accent} />
              : <BookOpen size={14} color={T.accent} />}
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.text }}>{test.title}</div>
            <div style={{ fontSize: 11, color: T.textMuted }}>Section {currentSection + 1} of {test.sections.length}</div>
          </div>
        </div>

        {/* Center: sections nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {test.sections.map((s, i) => (
            <button key={s.id}
              onClick={() => test.type === "reading" && setCurrentSection(i)}
              title={s.title}
              style={{ padding: "6px 14px", borderRadius: 8, border: "none", cursor: test.type === "reading" ? "pointer" : "default", fontWeight: 600, fontSize: 13, transition: "all 0.15s",
                background: currentSection === i ? T.accent : "transparent",
                color: currentSection === i ? "#fff" : T.textMuted }}>
              P{i + 1}
            </button>
          ))}
        </div>

        {/* Right: controls + timer + submit */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {/* Font size */}
          <div style={{ display: "flex", alignItems: "center", gap: 2, border: `1px solid ${T.border}`, borderRadius: 8, overflow: "hidden" }}>
            <button onClick={() => setFontSize(s => Math.max(12, s - 1))} title="Decrease font size"
              style={{ padding: "5px 7px", background: "transparent", border: "none", cursor: "pointer", color: T.textMuted, display: "flex", alignItems: "center" }}>
              <Minus size={12} />
            </button>
            <span style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, minWidth: 22, textAlign: "center" }}>{fontSize}</span>
            <button onClick={() => setFontSize(s => Math.min(22, s + 1))} title="Increase font size"
              style={{ padding: "5px 7px", background: "transparent", border: "none", cursor: "pointer", color: T.textMuted, display: "flex", alignItems: "center" }}>
              <Plus size={12} />
            </button>
          </div>
          {/* White/Dark mode toggle */}
          <button onClick={() => setPageMode(m => m === "dark" ? "white" : "dark")} title={pageMode === "dark" ? "Switch to white page" : "Switch to dark mode"}
            style={{ padding: "5px 8px", background: T.accentDim, border: `1px solid ${T.accentBorder}`, borderRadius: 8, cursor: "pointer", color: T.accent, display: "flex", alignItems: "center" }}>
            {pageMode === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 10, background: T.nav, border: `1px solid ${T.border}`, fontSize: 14, fontWeight: 700, color: timeLeft < 300 ? "#ef4444" : T.accent, fontFamily: "monospace" }}>
            <Clock size={14} />
            {formatTime(timeLeft)}
          </div>
          <button onClick={() => { if (confirm("Are you sure you want to submit your test? This cannot be undone.")) submitTest(); }}
            style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 16px", background: T.accentBtn, color: "#fff", fontWeight: 700, fontSize: 13, border: "none", borderRadius: 10, cursor: "pointer" }}>
            Submit <CheckCircle size={14} />
          </button>
        </div>
      </header>

      {/* Progress bar */}
      <div style={{ height: 3, background: T.border, borderRadius: 0 }}>
        <div style={{ height: "100%", background: "linear-gradient(90deg,#7c3aed,#b87fff)", borderRadius: 0, transition: "width 0.3s ease", width: `${((currentSection + 1) / test.sections.length) * 100}%` }} />
      </div>

      {/* Audio banner (listening – audio playing) */}
      {phase === "audio_playing" && (
        <div style={{ background: T.card, borderBottom: `1px solid ${T.accentBorder}`, padding: "10px 20px", display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <Volume2 size={16} color={T.accent} />
            <span style={{ fontSize: 13, fontWeight: 700, color: T.accent }}>
              Section {audioCurrentSection + 1} – Audio Playing
            </span>
          </div>
          <div style={{ flex: 1, height: 6, background: T.accentDim, borderRadius: 3, overflow: "hidden" }}>
            <div style={{ height: "100%", background: "linear-gradient(90deg,#7c3aed,#c4b5fd)", borderRadius: 3, width: `${audioTotal > 0 ? (audioProgress / audioTotal) * 100 : 0}%`, transition: "width 0.5s linear" }} />
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
            <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} style={{ width: 3, borderRadius: 2, background: T.accent, animation: `soundwave ${0.5 + (i % 4) * 0.15}s ease-in-out infinite alternate`, animationDelay: `${i * 0.07}s` }} />
              ))}
            </div>
            <span style={{ fontSize: 12, color: T.accent, fontFamily: "monospace", fontWeight: 600 }}>
              {formatTime(audioProgress)} / {formatTime(audioTotal)}
            </span>
          </div>
          <style>{`@keyframes soundwave { from { height: 4px; } to { height: 18px; } }`}</style>
        </div>
      )}

      {/* Mobile toggle (reading only) */}
      {test.type === "reading" && (
        <div style={{ display: "flex", background: T.nav, borderBottom: `1px solid ${T.border}`, padding: "8px 16px", gap: 8 }} className="mobile-toggle-bar">
          {(["passage", "questions"] as const).map(v => (
            <button key={v} onClick={() => setMobileView(v)}
              style={{ flex: 1, padding: "8px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13, transition: "all 0.15s",
                background: mobileView === v ? T.accent : "transparent",
                color: mobileView === v ? "#fff" : T.textMuted }}>
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
            style={{ width: passageCollapsed ? 0 : "50%", minWidth: passageCollapsed ? 0 : undefined, overflow: "hidden", transition: "width 0.25s ease", background: T.passage, position: "relative", display: "flex", flexDirection: "column" }}>
            {/* Passage header with highlight controls */}
            <div style={{ padding: "10px 20px 0", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
              <span style={{ fontSize: 11, color: T.textMuted, fontWeight: 600 }}>Select text to highlight · Click highlight to remove</span>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                {HIGHLIGHT_COLORS.map(c => (
                  <div key={c.bg} style={{ width: 14, height: 14, borderRadius: "50%", background: c.bg, border: "1.5px solid rgba(0,0,0,0.15)" }} title={c.label} />
                ))}
                {highlights.filter(h => h.sectionIdx === currentSection).length > 0 && (
                  <button onClick={() => setHighlights(prev => prev.filter(h => h.sectionIdx !== currentSection))}
                    style={{ marginLeft: 4, fontSize: 10, padding: "2px 7px", borderRadius: 6, border: `1px solid ${T.border}`, background: "transparent", color: T.textMuted, cursor: "pointer", fontWeight: 600 }}>
                    Clear
                  </button>
                )}
              </div>
            </div>
            <div style={{ flex: 1, overflowY: "auto", padding: "16px 32px 28px" }}>
              <h2 style={{ fontSize: 17, fontWeight: 800, color: T.text, marginBottom: 20 }}>{section.passageTitle}</h2>
              <div
                onMouseUp={(e) => handleTextMouseUp(e, "passage")}
                onClick={handlePassageClick}
                style={{ color: T.text, lineHeight: 1.9, fontSize: fontSize, userSelect: "text" }}
                dangerouslySetInnerHTML={{ __html: buildAnnotatedHtml(section.passageText, currentSection, "passage") }}
              />
            </div>
          </div>
        )}

        {/* Floating highlight toolbar */}
        {toolbarPos && (
          <div data-highlight-toolbar
            style={{ position: "fixed", left: Math.min(Math.max(toolbarPos.x, 100), window.innerWidth - 100), top: Math.max(toolbarPos.y, 8), transform: "translateX(-50%)", zIndex: 1000,
              background: pageMode === "white" ? "#f0ede6" : "#1a0e42", border: `1px solid ${T.border}`, borderRadius: 10, padding: "6px 10px",
              display: "flex", alignItems: "center", gap: 7, boxShadow: `0 6px 24px rgba(0,0,0,0.4)` }}>
            <span style={{ fontSize: 10, color: T.textMuted, marginRight: 2, whiteSpace: "nowrap" }}>
              {pendingSide === "passage" ? "Highlight:" : "Mark:"}
            </span>
            {HIGHLIGHT_COLORS.filter(c => c.bg !== "underline").map(c => (
              <button key={c.bg} onClick={() => applyHighlight(c.bg)} title={c.label}
                style={{ width: 20, height: 20, borderRadius: "50%", background: c.bg, border: "2px solid rgba(0,0,0,0.15)", cursor: "pointer", transition: "transform 0.1s" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.25)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
            ))}
            <button onClick={() => applyHighlight("underline")} title="Underline"
              style={{ padding: "2px 7px", borderRadius: 6, background: "transparent", border: "2px solid #7c3aed", color: "#7c3aed", fontSize: 12, fontWeight: 800, cursor: "pointer", textDecoration: "underline", textUnderlineOffset: "2px" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(124,58,237,0.12)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
              U
            </button>
            <button onClick={() => { setToolbarPos(null); setPendingText(""); window.getSelection()?.removeAllRanges(); }} title="Cancel"
              style={{ padding: "2px 5px", borderRadius: 5, background: "transparent", border: "none", color: T.textMuted, cursor: "pointer", fontSize: 14, lineHeight: 1 }}>✕</button>
          </div>
        )}

        {/* Divider toggle button (reading only, desktop) */}
        {test.type === "reading" && (
          <div className="divider-toggle" style={{ position: "relative", width: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, flexShrink: 0 }}>
            <div style={{ position: "absolute", top: 0, bottom: 0, width: 1, background: T.border }} />
            <button onClick={() => setPassageCollapsed(p => !p)}
              title={passageCollapsed ? "Show passage" : "Hide passage"}
              style={{ position: "relative", width: 28, height: 28, borderRadius: "50%", background: T.accentDim, border: `1.5px solid ${T.accentBorder}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: T.accent, fontSize: 14, fontWeight: 700, zIndex: 1, flexShrink: 0, transition: "background 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.background = T.accentDim)}
              onMouseLeave={e => (e.currentTarget.style.background = T.accentDim)}>
              {passageCollapsed ? "›" : "‹"}
            </button>
          </div>
        )}

        {/* Right: Questions */}
        <div className={`questions-panel ${test.type === "reading" && mobileView === "passage" ? "panel-hidden" : "panel-visible"}`}
          style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: T.bg }}>
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}
          onMouseUp={(e) => handleTextMouseUp(e, "questions")}>

          {/* Listening: passage text */}
          {test.type === "listening" && section.passageText && (
            <div style={{ marginBottom: 20, padding: 16, borderRadius: 12, background: T.nav, border: `1px solid ${T.border}` }}>
              <pre style={{ whiteSpace: "pre-wrap", fontSize: 14, color: T.text, fontFamily: "Inter, system-ui, sans-serif", lineHeight: 1.7 }}>
                {section.passageText}
              </pre>
            </div>
          )}

          <div style={{ fontSize: 13, marginBottom: 20, padding: "11px 14px", borderRadius: 10, background: T.accentDim, color: T.accent, border: `1px solid ${T.accentBorder}`, fontWeight: 500, lineHeight: 1.5 }}>
            {section.instructions}
          </div>

          {section.diagramUrl && (
            <div style={{ marginBottom: 24, textAlign: "center" }}>
              <img src={section.diagramUrl} alt="Diagram" style={{ maxWidth: "100%", borderRadius: 10, border: `1px solid ${T.border}` }} />
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {section.questions.map((q) => (
              <QuestionItem key={q.id} question={q}
                answer={answers[q.id] || ""}
                onAnswer={(val) => setAnswer(q.id, val)}
                T={T} fontSize={fontSize}
                questionHighlights={highlights.filter(h => h.sectionIdx === currentSection && h.side === "questions")}
                onRemoveHighlight={removeHighlight}
              />
            ))}
          </div>

          {/* Section navigation (reading) */}
          {test.type === "reading" && (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 32, paddingTop: 24, borderTop: `1px solid ${T.border}` }}>
              <button onClick={() => setCurrentSection((n) => Math.max(0, n - 1))} disabled={currentSection === 0}
                style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "9px 18px", background: T.accentDim, color: T.accent, border: `1px solid ${T.accentBorder}`, borderRadius: 10, cursor: currentSection === 0 ? "not-allowed" : "pointer", fontWeight: 600, fontSize: 13, opacity: currentSection === 0 ? 0.4 : 1 }}>
                <ChevronLeft size={14} /> Previous
              </button>
              <span style={{ fontSize: 13, color: T.textMuted }}>{currentSection + 1} / {test.sections.length}</span>
              {currentSection < test.sections.length - 1 ? (
                <button onClick={() => { setCurrentSection((n) => Math.min(test.sections.length - 1, n + 1)); setMobileView("passage"); }}
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "9px 18px", background: T.accentDim, color: T.accent, border: `1px solid ${T.accentBorder}`, borderRadius: 10, cursor: "pointer", fontWeight: 600, fontSize: 13 }}>
                  Next <ChevronRight size={14} />
                </button>
              ) : (
                <button onClick={() => { if (confirm("Submit the test now?")) submitTest(); }}
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "9px 18px", background: T.accentBtn, color: "#fff", border: "none", borderRadius: 10, cursor: "pointer", fontWeight: 700, fontSize: 13 }}>
                  Submit <CheckCircle size={14} />
                </button>
              )}
            </div>
          )}
        </div>{/* end scroll area */}

        {/* Question progress tracker */}
        {(() => {
          const totalQ = section.questions.length;
          const answeredQ = section.questions.filter(q => (answers[q.id] || "").trim()).length;
          const leftQ = totalQ - answeredQ;
          return (
            <div style={{ flexShrink: 0, borderTop: `1px solid ${T.border}`, background: T.nav, padding: "10px 16px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: T.text }}>Part {currentSection + 1}</span>
                <div style={{ display: "flex", gap: 12 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#10b981" }}>{answeredQ} answered</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: leftQ > 0 ? "#ef4444" : T.textMuted }}>{leftQ} left</span>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {section.questions.map((q) => {
                  const done = !!(answers[q.id] || "").trim();
                  return (
                    <button key={q.id}
                      onClick={() => document.getElementById(`question-${q.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" })}
                      style={{ width: 30, height: 30, borderRadius: 7, border: done ? "none" : `1px solid ${T.border}`, background: done ? "#10b981" : T.accentDim, color: done ? "#fff" : T.textMuted, fontSize: 11, fontWeight: 700, cursor: "pointer", transition: "all 0.15s" }}>
                      {q.number}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })()}
        </div>{/* end questions-panel */}
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
function buildQuestionHtml(text: string, questionHighlights: Highlight[], questionId: string): string {
  const active = questionHighlights.filter(h => h.questionId === questionId);

  type Pos = { start: number; end: number; id: string; color: string };
  const positioned: Pos[] = active
    .filter(h => h.rawStart < h.rawEnd && h.rawStart >= 0 && h.rawEnd <= text.length)
    .map(h => ({ start: h.rawStart, end: Math.min(h.rawEnd, text.length), id: h.id, color: h.color }));

  positioned.sort((a, b) => a.start - b.start);
  const clean: Pos[] = [];
  let lastEnd = 0;
  for (const p of positioned) {
    if (p.start >= lastEnd) { clean.push(p); lastEnd = p.end; }
  }

  const styleFor = (color: string) => color === "underline"
    ? `text-decoration:underline;text-decoration-color:#7c3aed;text-underline-offset:3px;cursor:pointer`
    : `background:${color};border-radius:3px;cursor:pointer;padding:0 1px`;

  let result = "";
  let pos = 0;
  for (const p of clean) {
    result += text.slice(pos, p.start);
    result += `<mark data-hid="${p.id}" style="${styleFor(p.color)}" title="Click to remove">${text.slice(p.start, p.end)}</mark>`;
    pos = p.end;
  }
  result += text.slice(pos);
  return result.replace(/\n/g, "<br/>");
}

function QuestionItem({
  question, answer, onAnswer, T, fontSize, questionHighlights, onRemoveHighlight,
}: {
  question: IELTSSection["questions"][0];
  answer: string;
  onAnswer: (v: string) => void;
  T: { bg: string; nav: string; card: string; text: string; textSub: string; textMuted: string; border: string; accent: string; accentDim: string; accentBorder: string; inputBg: string; [k: string]: string };
  fontSize: number;
  questionHighlights: Highlight[];
  onRemoveHighlight: (id: string) => void;
}) {
  const btnBase: React.CSSProperties = { padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", border: "1px solid", transition: "all 0.15s" };

  const handleQuestionClick = (e: React.MouseEvent) => {
    const el = e.target as HTMLElement;
    if (el.tagName === "MARK" && el.dataset.hid) onRemoveHighlight(el.dataset.hid);
  };

  return (
    <div id={`question-${question.id}`} style={{ paddingBottom: 24, borderBottom: `1px solid ${T.border}` }}>
      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: "50%", background: T.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#fff" }}>
          {question.number}
        </span>
        <div onClick={handleQuestionClick}
          data-question-id={question.id}
          style={{ fontSize: fontSize - 1, color: T.text, lineHeight: 1.6, userSelect: "text" }}
          dangerouslySetInnerHTML={{ __html: buildQuestionHtml(question.question, questionHighlights, question.id) }}
        />
      </div>

      <div style={{ marginLeft: 38 }}>
        {/* Multiple choice */}
        {question.type === "multiple_choice" && question.options && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {question.options.map((opt) => (
              <label key={opt.value} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                <div style={{ width: 18, height: 18, borderRadius: "50%", border: `2px solid ${answer === opt.value ? T.accent : T.border}`, background: answer === opt.value ? T.accent : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                  onClick={() => onAnswer(opt.value)}>
                  {answer === opt.value && <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff" }} />}
                </div>
                <input type="radio" name={`q-${question.id}`} value={opt.value} checked={answer === opt.value} onChange={() => onAnswer(opt.value)} style={{ display: "none" }} />
                <span style={{ fontSize: 14, color: T.text }}>{opt.label}</span>
              </label>
            ))}
          </div>
        )}

        {/* True/False/NG */}
        {question.type === "true_false_ng" && question.options && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {question.options.map((opt) => (
              <button key={opt.value} onClick={() => onAnswer(opt.value)}
                style={{ ...btnBase, background: answer === opt.value ? T.accent : T.nav, color: answer === opt.value ? "#fff" : T.textSub, borderColor: answer === opt.value ? T.accent : T.border }}>
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
                style={{ ...btnBase, background: answer === opt.value ? T.accent : T.nav, color: answer === opt.value ? "#fff" : T.textSub, borderColor: answer === opt.value ? T.accent : T.border }}>
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
            style={{ padding: "9px 14px", borderRadius: 8, fontSize: 14, background: T.inputBg, border: `1.5px solid ${T.border}`, color: T.text, outline: "none", minWidth: 200, fontFamily: "Inter, system-ui, sans-serif", userSelect: "text", WebkitUserSelect: "text" } as React.CSSProperties}
            onFocus={e => e.currentTarget.style.borderColor = T.accent}
            onBlur={e => e.currentTarget.style.borderColor = T.border}
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
    <div style={{ minHeight: "100vh", background: "#0a051f", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "Inter, system-ui, sans-serif" }}>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        style={{ maxWidth: 520, width: "100%", background: "#140b35", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: "36px 32px", boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }}>

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
            style={{ flexShrink: 0, width: 20, height: 20, borderRadius: 6, border: `2px solid ${agreed ? "#7c3aed" : "rgba(255,255,255,0.2)"}`, background: agreed ? "#7c3aed" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2, cursor: "pointer", transition: "all 0.15s" }}>
            {agreed && <CheckCircle size={13} color="#fff" />}
          </div>
          <span style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
            I understand and agree to the exam rules above. I am ready to begin.
          </span>
        </label>

        <button onClick={onAccept} disabled={!agreed}
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px", background: agreed ? "linear-gradient(135deg,#6d28d9,#7c3aed)" : "rgba(124,58,237,0.3)", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", borderRadius: 12, cursor: agreed ? "pointer" : "not-allowed", boxShadow: agreed ? "0 4px 15px rgba(37,99,235,0.4)" : "none", transition: "all 0.2s" }}>
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
  result, test, session, answers, onBack,
}: {
  result: { score: number; max: number; band: number };
  test: IELTSTest;
  session: StudentSession;
  answers: Record<string, string>;
  onBack: () => void;
}) {
  const [showDetails, setShowDetails] = useState(false);
  const pct = Math.round((result.score / result.max) * 100);
  const msg = pct >= 80 ? "Excellent performance!" : pct >= 60 ? "Good effort — keep practising!" : "Keep working hard — you can do it!";

  // Find a short excerpt from the passage containing the correct answer
  const getPassageExcerpt = (passageText: string | undefined, answer: string): string => {
    if (!passageText || !answer || answer === "TRUE" || answer === "FALSE" || answer === "NOT GIVEN" || answer === "YES" || answer === "NO" || answer.length <= 1) return "";
    const parts = answer.split("/");
    for (const part of parts) {
      const idx = passageText.toLowerCase().indexOf(part.trim().toLowerCase());
      if (idx >= 0) {
        const start = Math.max(0, idx - 60);
        const end = Math.min(passageText.length, idx + part.length + 60);
        let excerpt = passageText.slice(start, end).replace(/\n/g, " ").trim();
        if (start > 0) excerpt = "…" + excerpt;
        if (end < passageText.length) excerpt = excerpt + "…";
        return excerpt;
      }
    }
    return "";
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a051f", fontFamily: "Inter, system-ui, sans-serif", overflowY: "auto" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          style={{ maxWidth: 480, width: "100%", textAlign: "center" }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg,#6d28d9,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <CheckCircle size={36} color="#fff" />
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: "#e8eeff", marginBottom: 6 }}>Test Complete!</h1>
          <p style={{ color: "rgba(255,255,255,0.4)", marginBottom: 32 }}>Well done, {session.name}! Here are your results.</p>

          <div style={{ background: "#140b35", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: "32px", marginBottom: 16 }}>
            <div style={{ fontSize: 72, fontWeight: 900, color: "#7c3aed", lineHeight: 1, marginBottom: 4 }}>{result.band}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.4)", marginBottom: 24 }}>IELTS Score</div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
              {[
                { label: "Raw Score", value: `${result.score}/${result.max}` },
                { label: "Percentage", value: `${pct}%` },
              ].map(s => (
                <div key={s.label} style={{ padding: 16, borderRadius: 14, background: "#0e0828", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: "#e8eeff", marginBottom: 4 }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ height: 6, background: "rgba(255,255,255,0.07)", borderRadius: 3, marginBottom: 8 }}>
              <div style={{ height: "100%", background: "linear-gradient(90deg,#7c3aed,#b87fff)", borderRadius: 3, width: `${pct}%`, transition: "width 0.5s ease" }} />
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{msg}</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 4 }}>
            <button onClick={() => setShowDetails(d => !d)}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px", background: showDetails ? "rgba(124,58,237,0.2)" : "rgba(255,255,255,0.06)", color: "#fff", fontWeight: 700, fontSize: 14, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, cursor: "pointer" }}>
              <List size={15} /> {showDetails ? "Hide Details" : "View Answer Details"}
            </button>
            <button onClick={onBack}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px", background: "linear-gradient(135deg,#6d28d9,#7c3aed)", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", borderRadius: 12, cursor: "pointer", boxShadow: "0 4px 15px rgba(37,99,235,0.4)" }}>
              Back to Dashboard <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Answer Details Panel */}
      {showDetails && (
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 48px" }}>
          {test.sections.map((sec, sIdx) => (
            <div key={sec.id} style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 16, fontWeight: 800, color: "#e8eeff", marginBottom: 6 }}>{sec.title}{sec.passageTitle ? ` – ${sec.passageTitle}` : ""}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {sec.questions.map((q) => {
                  const userAns = (answers[q.id] || "").trim().toLowerCase();
                  const correctOptions = q.correctAnswer.toLowerCase().split("/").map(s => s.trim());
                  const isCorrect = correctOptions.some(c => userAns === c || userAns.includes(c));
                  const excerpt = getPassageExcerpt(sec.passageText, q.correctAnswer);
                  return (
                    <div key={q.id} style={{ background: isCorrect ? "rgba(16,185,129,0.07)" : "rgba(239,68,68,0.07)", border: `1px solid ${isCorrect ? "rgba(16,185,129,0.2)" : "rgba(239,68,68,0.2)"}`, borderRadius: 12, padding: "14px 16px" }}>
                      <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
                        <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "50%", background: isCorrect ? "#10b981" : "#ef4444", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#fff", marginTop: 1 }}>
                          {isCorrect ? "✓" : "✗"}
                        </span>
                        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.5, flex: 1 }}>
                          <strong style={{ color: "#e8eeff" }}>Q{q.number}.</strong> {q.question.split("\n")[0]}
                        </span>
                      </div>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginLeft: 32 }}>
                        <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 6, background: isCorrect ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)", color: isCorrect ? "#34d399" : "#fca5a5" }}>
                          Your answer: {answers[q.id] || "(no answer)"}
                        </span>
                        {!isCorrect && (
                          <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 6, background: "rgba(124,58,237,0.15)", color: "#c4b5fd" }}>
                            Correct: {q.correctAnswer}
                          </span>
                        )}
                      </div>
                      {excerpt && (
                        <div style={{ marginTop: 8, marginLeft: 32, padding: "8px 12px", background: "rgba(255,255,255,0.04)", borderLeft: "3px solid rgba(124,58,237,0.5)", borderRadius: "0 6px 6px 0", fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, fontStyle: "italic" }}>
                          {excerpt}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
