"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock, AlertTriangle, CheckCircle, X, ChevronLeft, ChevronRight,
  Headphones, BookOpen, Volume2, Sun, Moon, Minus, Plus, List,
  Ban, Clipboard, Timer, PhoneOff
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

// Walk text nodes in DOM order to count visible chars from container start to (rangeNode, rangeOffset).
// Uses TreeWalker + compareDocumentPosition so element-node range endpoints and void elements
// (BR, IMG) never cause Range.toString() to collapse to zero.
function getRangeCharCount(container: HTMLElement, rangeNode: Node, rangeOffset: number): number {
  if (rangeNode !== container && !container.contains(rangeNode)) return -1;
  try {
    const r = document.createRange();
    r.setStart(container, 0);
    r.setEnd(rangeNode, rangeOffset);
    return r.cloneContents().textContent?.length ?? -1;
  } catch {
    return -1;
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
  const [passageWidthPct, setPassageWidthPct] = useState(50);
  const contentAreaRef = useRef<HTMLDivElement>(null);
  const isResizingRef = useRef(false);
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
  const [pageMode, setPageMode] = useState<"dark" | "sepia" | "white">("dark");
  const [fontSize, setFontSize] = useState(15);
  const [showDetails, setShowDetails] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const questionsScrollRef = useRef<HTMLDivElement>(null);

  // Detect theme on mount and when it changes
  useEffect(() => {
    setTheme(getTheme());
    const obs = new MutationObserver(() => setTheme(getTheme()));
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  // White/sepia = light; dark = always dark
  const effectiveTheme = pageMode === "dark" ? "dark" : "light";

  // Theme-aware colours. Dark theme is pure black/grey (no purple tint).
  const T = effectiveTheme === "dark" ? {
    bg: "#0a0a0a", nav: "#0d0d0d", card: "#151515", passage: "#111111",
    text: "#f0f0f0", textSub: "rgba(255,255,255,0.5)", textMuted: "rgba(255,255,255,0.35)",
    border: "rgba(255,255,255,0.08)", accent: "#ffffff", accentBtn: "#2a2a2a",
    accentDim: "rgba(255,255,255,0.07)", accentBorder: "rgba(255,255,255,0.15)",
    inputBg: "#151515", shadow: "rgba(0,0,0,0.6)",
  } : pageMode === "sepia" ? {
    bg: "#f4e8d0", nav: "#ecdfc4", card: "#f4e8d0", passage: "#efe2ca",
    text: "#3b2a14", textSub: "rgba(59,42,20,0.6)", textMuted: "rgba(59,42,20,0.45)",
    border: "rgba(59,42,20,0.14)", accent: "#3b2a14", accentBtn: "#3b2a14",
    accentDim: "rgba(59,42,20,0.08)", accentBorder: "rgba(59,42,20,0.2)",
    inputBg: "#f4e8d0", shadow: "rgba(59,42,20,0.1)",
  } : {
    bg: "#faf8f4", nav: "#f0ede6", card: "#faf8f4", passage: "#f5f2ec",
    text: "#2c2416", textSub: "rgba(44,36,22,0.6)", textMuted: "rgba(44,36,22,0.45)",
    border: "rgba(44,36,22,0.12)", accent: "#2c2416", accentBtn: "#2c2416",
    accentDim: "rgba(44,36,22,0.06)", accentBorder: "rgba(44,36,22,0.18)",
    inputBg: "#faf8f4", shadow: "rgba(44,36,22,0.08)",
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
        const endDom = getRangeCharCount(container, range.endContainer, range.endOffset);
        if (endDom < 0) return;
        const startDom = getRangeCharCount(container, range.startContainer, range.startOffset);
        if (startDom < 0) return;
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

  const handleDividerMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isResizingRef.current = true;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
    const onMouseMove = (ev: MouseEvent) => {
      if (!isResizingRef.current || !contentAreaRef.current) return;
      const rect = contentAreaRef.current.getBoundingClientRect();
      const pct = Math.min(Math.max(((ev.clientX - rect.left) / rect.width) * 100, 20), 80);
      setPassageWidthPct(pct);
    };
    const onMouseUp = () => {
      isResizingRef.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
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

    const ulColor = effectiveTheme === "dark" ? "#ffffff" : "#ffffff";
    const styleFor = (color: string) => color === "underline"
      ? `background:transparent;color:inherit;text-decoration:underline;text-decoration-color:${ulColor};text-decoration-thickness:2px;text-underline-offset:3px;cursor:pointer`
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
  const audioElRef = useRef<HTMLAudioElement | null>(null);
  const violationRef = useRef(0);
  const cancelledRef = useRef(false);
  const anticheatActiveRef = useRef(false);
  const audioAutoStartedRef = useRef(-1);
  const cancelTestRef = useRef<(reason: string) => void>(() => {});

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

  // ── Anti-cheat: tab visibility + window focus + fullscreen ──────────
  useEffect(() => {
    if (isPracticeMode) return;
    if (phase !== "test" && phase !== "audio_playing" && phase !== "transfer") return;

    anticheatActiveRef.current = false;
    const activateTimer = setTimeout(() => {
      anticheatActiveRef.current = true;
    }, 3000);

    const cancel = (reason: string) => cancelTestRef.current(reason);
    const REASON = "Your test was cancelled because the exam screen lost focus — this can happen if you switch apps, open another tab, take a screenshot, or use your phone's screen-capture gesture. Please try again and keep the exam window active.";
    const FS_REASON = "Your test was cancelled because you exited fullscreen mode. Please try again and keep the exam in fullscreen.";

    const handleVisibility = () => {
      if (document.hidden && anticheatActiveRef.current) cancel(REASON);
    };

    const handleBlur = () => {
      if (anticheatActiveRef.current) cancel(REASON);
    };

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && anticheatActiveRef.current) cancel(FS_REASON);
    };

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("blur", handleBlur);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      clearTimeout(activateTimer);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
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

  // ── Audio playback (for listening tests) ───────────────────────────
  // Two modes:
  //   1) Whole-test audio: test.audioUrl points to a single ~30 min MP3
  //      that plays continuously across all 4 parts (matches real IELTS).
  //      startAudio is called ONCE when entering the test phase.
  //   2) Per-section audio (legacy): each section has its own audioUrl and
  //      the test auto-advances to the next section's audio when one ends.
  //   3) No audioUrl at all: timed simulation fallback.
  const startAudio = useCallback(() => {
    if (!test) return;
    // Whole-test audio: if already playing, don't restart it — just keep it.
    const hasWholeTestAudio = !!(test as { audioUrl?: string }).audioUrl;
    if (hasWholeTestAudio && audioElRef.current && !audioElRef.current.paused) {
      setPhase("audio_playing");
      return;
    }
    if (audioTimerRef.current) clearInterval(audioTimerRef.current);
    if (audioElRef.current) {
      try { audioElRef.current.pause(); } catch {}
      audioElRef.current = null;
    }
    const sec = test.sections[audioCurrentSection];
    const fallbackDur = hasWholeTestAudio
      ? ((test as { audioDurationSeconds?: number }).audioDurationSeconds || 1800)
      : (sec.audioDurationSeconds || 300);
    setAudioTotal(fallbackDur);
    setAudioProgress(0);
    setPhase("audio_playing");

    const advance = () => {
      if (hasWholeTestAudio) {
        // Whole-test audio ended → straight to transfer phase.
        setPhase("transfer");
        return;
      }
      if (audioCurrentSection < test.sections.length - 1) {
        setAudioCurrentSection((n) => n + 1);
        // Only follow the audio with the visible-questions pane if the
        // student hasn't manually navigated elsewhere. That way clicking
        // P2/P3/P4 to look ahead is never yanked back.
        setCurrentSection((cur) =>
          cur === audioCurrentSection ? cur + 1 : cur
        );
        setPhase("test");
      } else {
        setPhase("transfer");
      }
    };

    const url = hasWholeTestAudio
      ? (test as { audioUrl?: string }).audioUrl
      : (sec as { audioUrl?: string }).audioUrl;
    if (url) {
      // Real audio playback via HTMLAudioElement.
      const audio = new Audio(url);
      audio.preload = "auto";
      audioElRef.current = audio;
      audio.addEventListener("loadedmetadata", () => {
        if (!isNaN(audio.duration) && isFinite(audio.duration)) {
          setAudioTotal(Math.floor(audio.duration));
        }
      });
      audio.addEventListener("timeupdate", () => {
        setAudioProgress(Math.floor(audio.currentTime));
      });
      audio.addEventListener("ended", () => {
        advance();
      });
      audio.addEventListener("error", () => {
        // If the MP3 fails to load, fall back to the timed simulation so
        // the student's test isn't blocked.
        console.warn("Audio failed to load for", sec.id, "— falling back to timed simulation");
        audioElRef.current = null;
        audioTimerRef.current = setInterval(() => {
          setAudioProgress((p) => {
            if (p >= fallbackDur - 1) {
              clearInterval(audioTimerRef.current!);
              advance();
              return fallbackDur;
            }
            return p + 1;
          });
        }, 1000);
      });
      audio.play().catch((err) => {
        console.warn("Audio autoplay blocked:", err);
      });
      return;
    }

    // No audioUrl on this section — keep the original timed simulation.
    audioTimerRef.current = setInterval(() => {
      setAudioProgress((p) => {
        if (p >= fallbackDur - 1) {
          clearInterval(audioTimerRef.current!);
          advance();
          return fallbackDur;
        }
        return p + 1;
      });
    }, 1000);
  }, [test, audioCurrentSection]);

  // ── Auto-start audio for listening tests ────────────────────────────
  useEffect(() => {
    if (phase !== "test" || test?.type !== "listening") return;
    const hasWholeTestAudio = !!(test as { audioUrl?: string }).audioUrl;
    if (hasWholeTestAudio) {
      // Whole-test audio: start it ONCE (on first entry to test phase).
      // Don't re-invoke on section changes — the MP3 keeps playing across
      // P1/P2/P3/P4 and only advance() moves us to transfer when it ends.
      if (audioAutoStartedRef.current === -1) {
        audioAutoStartedRef.current = 0;
        startAudio();
      }
      return;
    }
    // Per-section audio: start each section's audio when it becomes current.
    if (audioCurrentSection !== audioAutoStartedRef.current) {
      audioAutoStartedRef.current = audioCurrentSection;
      startAudio();
    }
  }, [phase, audioCurrentSection, test, startAudio]);

  // ── Stop audio on unmount (student navigates away / closes tab) ─────
  useEffect(() => {
    return () => {
      if (audioElRef.current) {
        try { audioElRef.current.pause(); } catch {}
        audioElRef.current = null;
      }
      if (audioTimerRef.current) {
        clearInterval(audioTimerRef.current);
        audioTimerRef.current = null;
      }
    };
  }, []);

  // ── Stop audio when phase leaves a listening state ──────────────────
  // Covers back-button / dashboard nav / anywhere `phase` changes away
  // from an active listening phase without going through cancel/submit.
  useEffect(() => {
    if (phase !== "audio_playing" && phase !== "test") {
      if (audioElRef.current) {
        try { audioElRef.current.pause(); } catch {}
        audioElRef.current = null;
      }
      if (audioTimerRef.current) {
        clearInterval(audioTimerRef.current);
        audioTimerRef.current = null;
      }
    }
  }, [phase]);

  // ── IntersectionObserver: sync passage panel with question scroll ────
  useEffect(() => {
    if (!test || test.type !== "reading") return;
    const refs = sectionRefs.current;
    const scrollContainer = questionsScrollRef.current;
    if (!scrollContainer) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.sectionIdx);
            if (!isNaN(idx)) setCurrentSection(idx);
          }
        });
      },
      { root: scrollContainer, threshold: 0, rootMargin: "-30% 0px -60% 0px" }
    );
    refs.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [test, phase]);

  // ── Cancel test ─────────────────────────────────────────────────────
  const cancelTest = useCallback((reason: string) => {
    if (cancelledRef.current || !session || !test) return;
    cancelledRef.current = true;
    [timerRef, transferTimerRef, audioTimerRef].forEach((r) => {
      if (r.current) clearInterval(r.current);
    });
    if (audioElRef.current) {
      try { audioElRef.current.pause(); } catch {}
      audioElRef.current = null;
    }
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
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    setCancelMessage(reason);
    setPhase("cancelled");
  }, [session, test, answers, startTime, isPracticeMode]);
  cancelTestRef.current = cancelTest;

  // ── Submit test ─────────────────────────────────────────────────────
  const submitTest = useCallback(() => {
    if (submitted || !session || !test) return;
    setSubmitted(true);
    [timerRef, transferTimerRef, audioTimerRef].forEach((r) => {
      if (r.current) clearInterval(r.current);
    });
    if (audioElRef.current) {
      try { audioElRef.current.pause(); } catch {}
      audioElRef.current = null;
    }

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
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    setPhase("submitted");
  }, [submitted, session, test, answers, startTime, isPracticeMode]);

  const setAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  if (!session || !test) return null;

  // ============================================================
  // PHASE: Warning screen
  // Skipped for teachers in practice mode — anti-cheat is off for
  // them, so the "don't leave the exam screen" lecture is just noise.
  // Their test starts the moment the component mounts.
  // ============================================================
  if (phase === "warning") {
    if (isPracticeMode) {
      setPhase("test");
      return null;
    }
    return <WarningScreen test={test} onAccept={() => {
      // Request fullscreen before starting — hides browser tabs and prevents easy alt-tabbing
      document.documentElement.requestFullscreen().catch(() => {/* user denied or not supported */});
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
      <div style={{ minHeight: "100vh", background: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "Inter, system-ui, sans-serif" }}>
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
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px", background: "#2a2a2a", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", borderRadius: 12, cursor: "pointer", boxShadow: "0 4px 15px rgba(255,255,255,0.25)" }}>
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
  // PHASE: Transfer time (listening only) — IELTS-style answer sheet
  // The student gets 10 minutes to review and edit any of their 40
  // answers before final submission. Each row is pre-filled with what
  // they already entered while the audio was playing.
  // ============================================================
  if (phase === "transfer") {
    const allQuestions = test.sections.flatMap(s => s.questions);
    const danger = transferTimeLeft < 60;
    return (
      <div style={{ minHeight: "100vh", background: "#0a0a0a", fontFamily: "Inter, system-ui, sans-serif", display: "flex", flexDirection: "column" }}>
        {/* Sticky header — countdown + submit */}
        <header style={{ position: "sticky", top: 0, zIndex: 10, background: "#0a0a0a", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontWeight: 700, marginBottom: 4 }}>Answer sheet</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>{test.title}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 10, background: danger ? "rgba(239,68,68,0.15)" : "rgba(255,255,255,0.05)", border: `1px solid ${danger ? "rgba(239,68,68,0.4)" : "rgba(255,255,255,0.1)"}`, color: danger ? "#ef4444" : "#fff", fontFamily: "'IBM Plex Mono', monospace", fontSize: 18, fontWeight: 700 }}>
              <Clock size={16} /> {formatTime(transferTimeLeft)}
            </div>
            <button onClick={() => { if (confirm("Submit your answers now? You won't be able to edit afterwards.")) submitTest(); }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 22px", background: "#fff", color: "#0a0a0a", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", border: "none", borderRadius: 999, cursor: "pointer" }}>
              Submit <CheckCircle size={14} />
            </button>
          </div>
        </header>

        {/* Intro */}
        <div style={{ padding: "20px 24px 0", maxWidth: 720, margin: "0 auto", width: "100%" }}>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.6, marginBottom: 18 }}>
            You have <strong style={{ color: "#fff" }}>10 minutes</strong> to transfer your answers to this sheet. All your answers from
            the test are already filled in below — review and edit any of them before you click <strong style={{ color: "#fff" }}>Submit</strong>.
          </p>
        </div>

        {/* Answer grid */}
        <main style={{ flex: 1, padding: "8px 24px 80px", maxWidth: 720, margin: "0 auto", width: "100%" }}>
          {test.sections.map((sec, sIdx) => (
            <div key={sec.id} style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontWeight: 700, margin: "12px 0 8px" }}>
                Part {sIdx + 1}
              </div>
              <div style={{ background: "#151515", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, overflow: "hidden" }}>
                {sec.questions.map((q, qi) => (
                  <div key={q.id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", borderBottom: qi < sec.questions.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                    <span style={{ flexShrink: 0, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, fontSize: 14, color: "#fff", minWidth: 28, textAlign: "right" }}>
                      {q.number}
                    </span>
                    <input
                      type="text"
                      value={answers[q.id] || ""}
                      onChange={(e) => setAnswer(q.id, e.target.value)}
                      placeholder="—"
                      style={{
                        flex: 1, padding: "8px 12px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 8,
                        color: "#fff", fontSize: 15, outline: "none",
                        fontFamily: "inherit",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Bottom progress */}
          <div style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 16 }}>
            {allQuestions.filter(q => (answers[q.id] || "").trim()).length} / {allQuestions.length} answered
          </div>
        </main>
      </div>
    );
  }

  const section = test.sections[currentSection];

  const readingProgressPct = (() => {
    if (test.type !== "reading") return ((currentSection + 1) / test.sections.length) * 100;
    const allQ = test.sections.flatMap(s => s.questions);
    const answered = allQ.filter(q => (answers[q.id] || "").trim()).length;
    return (answered / Math.max(allQ.length, 1)) * 100;
  })();

  // ============================================================
  // PHASE: Test (reading or listening questions) + audio_playing
  // ============================================================
  if (phase !== "test" && phase !== "audio_playing") return null;

  return (
    <div className="test-zone" style={{ height: "100svh", display: "flex", flexDirection: "column", background: T.bg, fontFamily: "Inter, system-ui, sans-serif", overflow: "hidden" }}>
      {/* Test header */}
      <header className="test-header" style={{ position: "sticky", top: 0, zIndex: 20, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 12px", minHeight: 54, gap: 8, background: T.nav, borderBottom: `1px solid ${T.border}` }}>
        {/* Left: test info — title hidden on mobile to make room for P1-P4 + Submit */}
        <div className="test-header-info" style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0, flexShrink: 1 }}>
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
              onClick={() => {
                if (test.type === "reading") {
                  const el = sectionRefs.current[i];
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  setMobileView("questions");
                } else {
                  // Listening: just change which section's questions are shown.
                  // Audio keeps playing whatever it was playing — students can
                  // look ahead/back without disturbing playback.
                  setCurrentSection(i);
                  setMobileView("questions");
                }
              }}
              title={s.title}
              style={{ padding: "6px 14px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13, transition: "all 0.15s",
                background: currentSection === i ? T.accent : "transparent",
                color: currentSection === i ? (T.accent === "#ffffff" ? "#0a0a0a" : "#fff") : T.textMuted }}>
              P{i + 1}
            </button>
          ))}
        </div>

        {/* Right: controls + timer + submit */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
          {/* Font size — hidden on mobile */}
          <div className="test-header-font" style={{ display: "flex", alignItems: "center", gap: 2, border: `1px solid ${T.border}`, borderRadius: 8, overflow: "hidden" }}>
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
          {/* Theme cycle — hidden on small phones */}
          <button
            onClick={() => setPageMode(m => m === "dark" ? "sepia" : m === "sepia" ? "white" : "dark")}
            title={pageMode === "dark" ? "Switch to sepia" : pageMode === "sepia" ? "Switch to white" : "Switch to dark"}
            className="test-header-theme"
            style={{ padding: "5px 10px", background: T.accentDim, border: `1px solid ${T.accentBorder}`, borderRadius: 8, cursor: "pointer", color: T.accent, display: "flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 600 }}>
            {pageMode === "dark" ? <Sun size={14} /> : pageMode === "sepia" ? <Sun size={14} /> : <Moon size={14} />}
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
        <div style={{ height: "100%", background: "linear-gradient(90deg,#ffffff,#b87fff)", borderRadius: 0, transition: "width 0.3s ease", width: `${readingProgressPct}%` }} />
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
            <div style={{ height: "100%", background: "#ffffff", borderRadius: 3, width: `${audioTotal > 0 ? (audioProgress / audioTotal) * 100 : 0}%`, transition: "width 0.5s linear" }} />
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

      {/* Mobile toggle (reading only — listening is single column) */}
      {test.type === "reading" && (section.passageText || section.diagramUrl) && (
        <div style={{ display: "flex", background: T.nav, borderBottom: `1px solid ${T.border}`, padding: "8px 16px", gap: 8 }} className="mobile-toggle-bar">
          {(["passage", "questions"] as const).map(v => (
            <button key={v} onClick={() => setMobileView(v)}
              style={{ flex: 1, padding: "8px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13, transition: "all 0.15s",
                background: mobileView === v ? T.accent : "transparent",
                color: mobileView === v ? "#fff" : T.textMuted }}>
              {v === "passage" ? (test.type === "reading" ? "Passage" : section.diagramUrl ? "Map" : "Notes") : "Questions"}
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div ref={contentAreaRef} style={{ flex: 1, display: "flex", flexDirection: "row", overflow: "hidden", minHeight: 0 }}>

        {/* Left: Passage (reading only) / Notes or Map (listening stacks
            everything inline in a single column, so no left pane for it). */}
        {test.type === "reading" && (section.passageText || section.diagramUrl) && (
          <div className={`passage-panel ${mobileView === "passage" ? "panel-visible" : "panel-hidden"}`}
            style={{ width: `${passageWidthPct}%`, minWidth: 0, overflow: "hidden", transition: isResizingRef.current ? "none" : "width 0.22s ease", background: T.passage, position: "relative", display: "flex", flexDirection: "column", flexShrink: 0 }}>
            {/* Passage header with highlight controls — shown only when there's selectable text */}
            {section.passageText && (
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
            )}
            <div style={{ flex: 1, overflowY: "auto", padding: "16px 32px 28px", minHeight: 0 }}>
              {section.passageTitle && (
                <h2 style={{ fontSize: 17, fontWeight: 800, color: T.text, marginBottom: 20 }}>{section.passageTitle}</h2>
              )}
              {section.passageText && (
                <div
                  onMouseUp={(e) => handleTextMouseUp(e, "passage")}
                  onClick={handlePassageClick}
                  style={{ color: T.text, lineHeight: 1.9, fontSize: fontSize, userSelect: "text" }}
                  dangerouslySetInnerHTML={{ __html: buildAnnotatedHtml(section.passageText, currentSection, "passage") }}
                />
              )}
              {section.diagramUrl && (
                <div style={{ textAlign: "center", marginTop: section.passageText ? 20 : 0 }}>
                  <img src={section.diagramUrl} alt="Diagram"
                    style={{ maxWidth: "100%", borderRadius: 10, border: `1px solid ${T.border}`, background: "#fff" }} />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Floating highlight toolbar */}
        {toolbarPos && (
          <div data-highlight-toolbar
            style={{ position: "fixed", left: Math.min(Math.max(toolbarPos.x, 100), window.innerWidth - 100), top: Math.max(toolbarPos.y, 8), transform: "translateX(-50%)", zIndex: 1000,
              background: pageMode === "dark" ? "#111111" : T.nav, border: `1px solid ${T.border}`, borderRadius: 10, padding: "6px 10px",
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
              style={{ padding: "2px 7px", borderRadius: 6, background: "transparent", border: "2px solid #ffffff", color: "#ffffff", fontSize: 12, fontWeight: 800, cursor: "pointer", textDecoration: "underline", textUnderlineOffset: "2px" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
              U
            </button>
            <button onClick={() => { setToolbarPos(null); setPendingText(""); window.getSelection()?.removeAllRanges(); }} title="Cancel"
              style={{ padding: "2px 5px", borderRadius: 5, background: "transparent", border: "none", color: T.textMuted, cursor: "pointer", fontSize: 14, lineHeight: 1 }}>✕</button>
          </div>
        )}

        {/* Resizable divider (reading only — listening is single-column) */}
        {test.type === "reading" && (section.passageText || section.diagramUrl) && (
          <div className="divider-toggle"
            style={{ position: "relative", width: 10, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, flexShrink: 0, cursor: "col-resize" }}
            onMouseDown={handleDividerMouseDown}>
            {/* Track line */}
            <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 2, background: T.border, transform: "translateX(-50%)", pointerEvents: "none" }} />
            {/* Drag grip dots */}
            <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 4, pointerEvents: "none" }}>
              {[0,1,2].map(i => <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: T.textMuted, opacity: 0.7 }} />)}
            </div>
          </div>
        )}

        {/* Right: Questions */}
        <div className={`questions-panel ${test.type === "reading" && (section.passageText || section.diagramUrl) && mobileView === "passage" ? "panel-hidden" : "panel-visible"}`}
          style={{ flex: 1, minWidth: 0, minHeight: 0, display: "flex", flexDirection: "column", overflow: "hidden", background: T.bg }}>
        <div ref={questionsScrollRef} style={{ flex: 1, overflowY: "auto", padding: "24px 28px", minHeight: 0 }}
          onMouseUp={(e) => handleTextMouseUp(e, "questions")}>

          {test.type === "reading" ? (
            // ── Reading: all sections stacked for infinite scroll ──
            <>
              {test.sections.map((sec, sIdx) => (
                <div
                  key={sec.id}
                  ref={(el) => { sectionRefs.current[sIdx] = el; }}
                  data-section-idx={sIdx}
                  style={{ marginBottom: sIdx < test.sections.length - 1 ? 60 : 0 }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, paddingBottom: 12, borderBottom: `2px solid ${T.accentBorder}` }}>
                    <span style={{ padding: "3px 10px", borderRadius: 20, background: T.accent, color: "#fff", fontSize: 11, fontWeight: 700 }}>
                      Passage {sIdx + 1}
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: T.textMuted }}>{sec.passageTitle}</span>
                  </div>

                  <div style={{ fontSize: 13, marginBottom: 20, padding: "11px 14px", borderRadius: 10, background: T.accentDim, color: T.accent, border: `1px solid ${T.accentBorder}`, fontWeight: 500, lineHeight: 1.5, whiteSpace: "pre-line" }}>
                    {sec.instructions}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    {sec.questions.map((q) => (
                      <React.Fragment key={q.id}>
                        {q.groupLabel && (
                          <div style={{ fontSize: 13, padding: "10px 14px", borderRadius: 10, background: T.accentDim, color: T.accent, border: `1px solid ${T.accentBorder}`, fontWeight: 500, lineHeight: 1.6, whiteSpace: "pre-line" }}>
                            {q.groupLabel.split(/\n(?=\d+[\s\.])/)[0].trim()}
                          </div>
                        )}
                        {sec.diagramUrl && q.type === "diagram_labelling" &&
                          sec.questions.findIndex(x => x.type === "diagram_labelling") === sec.questions.indexOf(q) && (
                          <div style={{ textAlign: "center", margin: "8px 0 4px" }}>
                            <img src={sec.diagramUrl} alt="Diagram" style={{ maxWidth: "100%", borderRadius: 10, border: `1px solid ${T.border}` }} />
                          </div>
                        )}
                        <QuestionItem question={q}
                          answer={answers[q.id] || ""}
                          onAnswer={(val) => setAnswer(q.id, val)}
                          T={T} fontSize={fontSize}
                          questionHighlights={highlights.filter(h => h.sectionIdx === sIdx && h.side === "questions")}
                          onRemoveHighlight={removeHighlight}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}

              {/* Submit button at the end of all questions */}
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 40, paddingTop: 24, borderTop: `1px solid ${T.border}` }}>
                <button onClick={() => { if (confirm("Submit the test now?")) submitTest(); }}
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 24px", background: T.accentBtn, color: "#fff", border: "none", borderRadius: 10, cursor: "pointer", fontWeight: 700, fontSize: 13 }}>
                  Submit <CheckCircle size={14} />
                </button>
              </div>
            </>
          ) : (
            // ── Listening: all 4 parts stacked in one scrolling column ──
            // The original two-pane layout is dropped for listening — notes,
            // maps, and answer inputs all live in the same single column now.
            <>
              {test.sections.map((sec, sIdx) => (
                <div key={sec.id} ref={(el) => { sectionRefs.current[sIdx] = el; }} data-section-idx={sIdx}
                  style={{ marginBottom: sIdx < test.sections.length - 1 ? 56 : 0 }}>
                  {/* Part header */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, paddingBottom: 12, borderBottom: `2px solid ${T.accentBorder}` }}>
                    <span style={{ padding: "3px 10px", borderRadius: 20, background: T.accent, color: T.accent === "#ffffff" ? "#0a0a0a" : "#fff", fontSize: 11, fontWeight: 700 }}>
                      Part {sIdx + 1}
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: T.textMuted }}>{sec.passageTitle || sec.title}</span>
                  </div>

                  {/* Diagram / map shown inline above instructions */}
                  {sec.diagramUrl && (
                    <div style={{ textAlign: "center", marginBottom: 20 }}>
                      <img src={sec.diagramUrl} alt="Diagram" style={{ maxWidth: "100%", borderRadius: 10, border: `1px solid ${T.border}`, background: "#fff" }} />
                    </div>
                  )}

                  {/* Notes text (for Parts 1 & 4) — shown above the question list
                      to give students context while they answer. */}
                  {sec.passageText && (
                    <div style={{ marginBottom: 20, padding: "16px 20px", background: T.passage, border: `1px solid ${T.border}`, borderRadius: 12, color: T.text, lineHeight: 1.8, fontSize: fontSize - 1, whiteSpace: "pre-line" }}>
                      {sec.passageText}
                    </div>
                  )}

                  {/* Instructions banner */}
                  <div style={{ fontSize: 13, marginBottom: 20, padding: "11px 14px", borderRadius: 10, background: T.accentDim, color: T.accent, border: `1px solid ${T.accentBorder}`, fontWeight: 500, lineHeight: 1.5 }}>
                    {sec.instructions}
                  </div>

                  {/* Questions — same merge (Choose TWO pairs) + matching + single logic as before */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    {(() => {
                      // Merge adjacent "Choose TWO" pairs into a single checkbox UI.
                      // Detection: two consecutive multiple_choice questions share the
                      // same correctAnswer string containing "/" and have equal option lists.
                      const qs = sec.questions;
                  type Item = { kind: "single"; q: typeof qs[0] } | { kind: "pair"; q1: typeof qs[0]; q2: typeof qs[0] };
                  const items: Item[] = [];
                  for (let i = 0; i < qs.length; i++) {
                    const q = qs[i];
                    const nxt = qs[i + 1];
                    const isPair = !!nxt
                      && q.type === "multiple_choice"
                      && nxt.type === "multiple_choice"
                      && typeof q.correctAnswer === "string"
                      && q.correctAnswer.includes("/")
                      && nxt.correctAnswer === q.correctAnswer
                      && !!q.options && !!nxt.options
                      && q.options.length === nxt.options.length;
                    if (isPair) {
                      items.push({ kind: "pair", q1: q, q2: nxt });
                      i++;
                    } else {
                      items.push({ kind: "single", q });
                    }
                  }
                  return items.map((item) => {
                    if (item.kind === "pair") {
                      const { q1, q2 } = item;
                      const a1 = answers[q1.id] || "";
                      const a2 = answers[q2.id] || "";
                      const selected: string[] = [];
                      if (a1) selected.push(a1);
                      if (a2 && a2 !== a1) selected.push(a2);
                      const selectedSet = new Set(selected);
                      const toggle = (value: string) => {
                        let next: string[];
                        if (selectedSet.has(value)) {
                          next = selected.filter((v) => v !== value);
                        } else {
                          if (selected.length >= 2) return;
                          next = [...selected, value];
                        }
                        setAnswer(q1.id, next[0] || "");
                        setAnswer(q2.id, next[1] || "");
                      };
                      return (
                        <React.Fragment key={`pair-${q1.id}-${q2.id}`}>
                          {q1.groupLabel && (
                            <div style={{ fontSize: 13, padding: "10px 14px", borderRadius: 10, background: T.accentDim, color: T.accent, border: `1px solid ${T.accentBorder}`, fontWeight: 500, lineHeight: 1.6, whiteSpace: "pre-line" }}>
                              {/* For Choose TWO pairs, strip the A-E option lines from the
                                  groupLabel — the checkboxes below repeat them visually.
                                  Keep the question header and the parenthetical notes. */}
                              {q1.groupLabel
                                .split("\n")
                                .filter((ln) => !/^[A-Za-z]\s{2,}/.test(ln))
                                .join("\n")
                                .trim()}
                            </div>
                          )}
                          <div id={`question-${q1.id}`} style={{ paddingBottom: 24, borderBottom: `1px solid ${T.border}` }}>
                            <div style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "center", flexWrap: "wrap" }}>
                              <span style={{ flexShrink: 0, fontSize: 15, fontWeight: 800, color: T.text, fontFamily: "'IBM Plex Mono', 'Courier New', monospace", minWidth: 38 }}>
                                {q1.number}&amp;{q2.number}
                              </span>
                              <span style={{ fontSize: fontSize - 1, color: T.text, fontWeight: 600 }}>
                                Choose TWO answers ({selected.length}/2 selected)
                              </span>
                            </div>
                            <div id={`question-${q2.id}`} style={{ marginLeft: 38, display: "flex", flexDirection: "column", gap: 8 }}>
                              {q1.options!.map((opt) => {
                                const isChecked = selectedSet.has(opt.value);
                                const isDisabled = !isChecked && selected.length >= 2;
                                return (
                                  <div key={opt.value}
                                    onClick={() => { if (!isDisabled) toggle(opt.value); }}
                                    style={{ display: "flex", alignItems: "center", gap: 10, cursor: isDisabled ? "not-allowed" : "pointer", opacity: isDisabled ? 0.45 : 1, userSelect: "none", padding: "4px 0" }}>
                                    <div
                                      style={{ width: 18, height: 18, borderRadius: 4, border: `2px solid ${isChecked ? T.accent : T.border}`, background: isChecked ? T.accent : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                      {isChecked && (
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M2 6.5L4.5 9L10 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                      )}
                                    </div>
                                    <span style={{ fontSize: 14, color: T.text }}>{opt.label}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    }
                    const q = item.q;
                    // Matching question: 5+ options and a single-letter
                    // correctAnswer. Instead of repeating a giant radio list
                    // for every item, render one compact "Q# activity [letter]"
                    // line — the options box is already shown once above via
                    // the groupLabel on the first matching question.
                    const isMatching = q.type === "multiple_choice"
                      && !!q.options
                      && q.options.length >= 5
                      && typeof q.correctAnswer === "string"
                      && /^[A-Za-z]$/.test(q.correctAnswer.trim());
                    if (isMatching) {
                      const currentAnswer = answers[q.id] || "";
                      const validLetters = q.options!.map((o) => o.value.toUpperCase());
                      return (
                        <React.Fragment key={q.id}>
                          {q.groupLabel && (
                            <div style={{ fontSize: 13, padding: "10px 14px", borderRadius: 10, background: T.accentDim, color: T.accent, border: `1px solid ${T.accentBorder}`, fontWeight: 500, lineHeight: 1.6, whiteSpace: "pre-line" }}>
                              {q.groupLabel.trim()}
                            </div>
                          )}
                          <div id={`question-${q.id}`} style={{ paddingBottom: 14, borderBottom: `1px solid ${T.border}` }}>
                            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                              <span style={{ flexShrink: 0, fontSize: 15, fontWeight: 800, color: T.text, fontFamily: "'IBM Plex Mono', 'Courier New', monospace", minWidth: 26, textAlign: "right" }}>
                                {q.number}
                              </span>
                              <span style={{ fontSize: fontSize - 1, color: T.text, flex: 1, minWidth: 200 }}>
                                {q.question.replace(/^\d+[\.\)]\s*/, "")}
                              </span>
                              <input type="text" value={currentAnswer} maxLength={1}
                                onChange={(e) => {
                                  const raw = e.target.value.toUpperCase().slice(-1);
                                  if (raw === "" || validLetters.includes(raw)) setAnswer(q.id, raw);
                                }}
                                placeholder={`${validLetters[0]}–${validLetters[validLetters.length - 1]}`}
                                style={{ width: 60, padding: "6px 10px", borderRadius: 6, background: T.inputBg, border: `1.5px solid ${T.border}`, color: T.text, outline: "none", fontSize: 16, fontWeight: 700, textAlign: "center", fontFamily: "inherit", textTransform: "uppercase" }}
                                onFocus={e => e.currentTarget.style.borderColor = T.accent}
                                onBlur={e => e.currentTarget.style.borderColor = T.border}
                              />
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    }
                    return (
                      <React.Fragment key={q.id}>
                        {q.groupLabel && (
                          <div style={{ fontSize: 13, padding: "10px 14px", borderRadius: 10, background: T.accentDim, color: T.accent, border: `1px solid ${T.accentBorder}`, fontWeight: 500, lineHeight: 1.6, whiteSpace: "pre-line" }}>
                            {q.groupLabel.split(/\n(?=\d+[\s\.])/)[0].trim()}
                          </div>
                        )}
                        <QuestionItem question={q}
                          answer={answers[q.id] || ""}
                          onAnswer={(val) => setAnswer(q.id, val)}
                          T={T} fontSize={fontSize}
                          questionHighlights={highlights.filter(h => h.sectionIdx === sIdx && h.side === "questions")}
                          onRemoveHighlight={removeHighlight}
                        />
                      </React.Fragment>
                    );
                      });
                    })()}
                  </div>
                </div>
              ))}

              {/* Submit button at the end of the listening sheet */}
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 40, paddingTop: 24, borderTop: `1px solid ${T.border}` }}>
                <button onClick={() => { if (confirm("Submit the test now?")) submitTest(); }}
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 24px", background: T.accentBtn, color: "#fff", border: "none", borderRadius: 10, cursor: "pointer", fontWeight: 700, fontSize: 13 }}>
                  Submit <CheckCircle size={14} />
                </button>
              </div>
            </>
          )}
        </div>{/* end scroll area */}

        {/* Question progress tracker */}
        {(() => {
          // Listening is now all-parts-stacked too, so both types flatMap.
          const allQuestions = test.sections.flatMap(s => s.questions);
          const totalQ = allQuestions.length;
          const answeredQ = allQuestions.filter(q => (answers[q.id] || "").trim()).length;
          const leftQ = totalQ - answeredQ;
          return (
            <div style={{ flexShrink: 0, borderTop: `1px solid ${T.border}`, background: T.nav, padding: "10px 16px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                <div style={{ display: "flex", gap: 6 }}>
                  {test.sections.map((s, i) => (
                    <span key={s.id} style={{ fontSize: 11, fontWeight: 700, color: currentSection === i ? T.accent : T.textMuted }}>
                      P{i + 1}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#10b981" }}>{answeredQ} answered</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: leftQ > 0 ? "#ef4444" : T.textMuted }}>{leftQ} left</span>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {/* Same list for both test types now: every question in every part */}
                {test.sections.map((s, sIdx) => (
                  <React.Fragment key={s.id}>
                    {sIdx > 0 && <div style={{ width: "100%", height: 0 }} />}
                    {s.questions.map((q) => {
                      const done = !!(answers[q.id] || "").trim();
                      return (
                        <button key={q.id}
                          onClick={() => document.getElementById(`question-${q.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" })}
                          style={{ width: 30, height: 30, borderRadius: 7, border: done ? "none" : `1px solid ${T.border}`, background: done ? "#10b981" : T.accentDim, color: done ? "#fff" : T.textMuted, fontSize: 11, fontWeight: 700, cursor: "pointer", transition: "all 0.15s" }}>
                          {q.number}
                        </button>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>
            </div>
          );
        })()}
        </div>{/* end questions-panel */}
      </div>

      <style>{`
        /* 100dvh fallback for older browsers */
        .test-zone { height: 100vh; height: 100dvh; }
        /* Desktop: both panels side by side, hide mobile bar */
        @media (min-width: 768px) {
          .mobile-toggle-bar { display: none !important; }
          .divider-toggle { display: flex !important; }
          .passage-panel { display: flex !important; }
          .questions-panel { display: flex !important; }
        }
        /* Mobile: one panel at a time, hide divider */
        @media (max-width: 767px) {
          .mobile-toggle-bar { display: flex !important; }
          .divider-toggle { display: none !important; }
          .passage-panel, .questions-panel { width: 100% !important; flex: 1 !important; }
          .panel-hidden { display: none !important; }
          .panel-visible { display: flex !important; flex-direction: column !important; }
          /* Bigger tap targets on mobile */
          button { min-height: 36px; }
          /* Test header: hide the title block and the secondary controls
             so P1-P4, timer and Submit all fit on one row. */
          .test-header-info { display: none !important; }
          .test-header-font { display: none !important; }
          .test-header-theme { display: none !important; }
          .test-header { padding: 0 10px !important; gap: 6px !important; }
          .test-header button { min-height: 34px; padding: 4px 10px !important; }
        }
      `}</style>
    </div>
  );
}

// ============================================================
// Question Item Component
// ============================================================
function buildQuestionHtml(text: string, questionHighlights: Highlight[], questionId: string, ulColor = "#ffffff"): string {
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
    ? `background:transparent;color:inherit;text-decoration:underline;text-decoration-color:${ulColor};text-decoration-thickness:2px;text-underline-offset:3px;cursor:pointer`
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

  const isGapFill = ["fill_blank", "short_answer", "summary_completion", "sentence_completion",
    "table_completion", "note_completion", "diagram_labelling"].includes(question.type);

  // Strip leading "N. " or "N) " from question text since number badge already shows it
  const cleanQuestionText = question.question.replace(/^\d+[\.\)]\s*/, "");
  const hasInlineBlank = isGapFill && cleanQuestionText.includes("_______");

  // For summary_completion and note_completion the full sentence already lives
  // in the passage/notes block above — rendering it again on the right is
  // noisy duplication. Show just "N [input]" for these types.
  const isPassageCovered = question.type === "summary_completion" || question.type === "note_completion";

  return (
    <div id={`question-${question.id}`} style={{ paddingBottom: isPassageCovered ? 12 : 24, borderBottom: `1px solid ${T.border}` }}>
      <div style={{ display: "flex", gap: 12, marginBottom: (hasInlineBlank || isPassageCovered) ? 0 : 12, alignItems: (hasInlineBlank || isPassageCovered) ? "center" : "flex-start", flexWrap: "wrap" }}>
        <span style={{ flexShrink: 0, fontSize: 15, fontWeight: 800, color: T.text, fontFamily: "'IBM Plex Mono', 'Courier New', monospace", minWidth: 26, textAlign: "right" }}>
          {question.number}
        </span>

        {isPassageCovered ? (
          // Compact: just the input. The numbered blank in the passage above
          // provides all the context. No duplicate sentence on this side.
          <input
            type="text"
            value={answer}
            onChange={(e) => onAnswer(e.target.value)}
            placeholder="..."
            style={{ flex: 1, maxWidth: 260, padding: "6px 12px", borderRadius: 6, fontSize: fontSize - 1, background: T.inputBg, border: `1.5px solid ${T.border}`, color: T.text, outline: "none", fontFamily: "Inter, system-ui, sans-serif" }}
            onFocus={e => e.currentTarget.style.borderColor = T.accent}
            onBlur={e => e.currentTarget.style.borderColor = T.border}
          />
        ) : hasInlineBlank ? (
          // Inline gap fill: render text with input box inline
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 4, fontSize: fontSize - 1, color: T.text, lineHeight: 2, flex: 1 }}>
            {cleanQuestionText.split("_______").map((part, i, arr) => (
              <React.Fragment key={i}>
                <span>{part}</span>
                {i < arr.length - 1 && (
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => onAnswer(e.target.value)}
                    placeholder="..."
                    style={{ padding: "3px 10px", borderRadius: 6, fontSize: fontSize - 1, background: T.inputBg, border: `1.5px solid ${T.border}`, color: T.text, outline: "none", minWidth: 120, maxWidth: 180, fontFamily: "Inter, system-ui, sans-serif", userSelect: "text", WebkitUserSelect: "text" } as React.CSSProperties}
                    onFocus={e => e.currentTarget.style.borderColor = T.accent}
                    onBlur={e => e.currentTarget.style.borderColor = T.border}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div onClick={handleQuestionClick}
            data-question-id={question.id}
            style={{ fontSize: fontSize - 1, color: T.text, lineHeight: 1.6, userSelect: "text", flex: 1 }}
            dangerouslySetInnerHTML={{ __html: buildQuestionHtml(cleanQuestionText, questionHighlights, question.id, T.bg.startsWith("#0") ? "#ffffff" : "#ffffff") }}
          />
        )}
      </div>

      {!hasInlineBlank && !isPassageCovered && (
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

          {/* True/False/NG (or Yes/No/NG) — falls back to default buttons if options missing */}
          {question.type === "true_false_ng" && (() => {
            const defaultTFNG = [
              { label: "TRUE", value: "TRUE" },
              { label: "FALSE", value: "FALSE" },
              { label: "NOT GIVEN", value: "NOT GIVEN" },
            ];
            const defaultYNG = [
              { label: "YES", value: "YES" },
              { label: "NO", value: "NO" },
              { label: "NOT GIVEN", value: "NOT GIVEN" },
            ];
            const isYNG = question.correctAnswer === "YES" || question.correctAnswer === "NO";
            const opts = question.options && question.options.length > 0
              ? question.options
              : (isYNG ? defaultYNG : defaultTFNG);
            return (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {opts.map((opt) => (
                  <button key={opt.value} onClick={() => onAnswer(opt.value)}
                    style={{ ...btnBase, background: answer === opt.value ? T.accent : T.nav, color: answer === opt.value ? "#fff" : T.textSub, borderColor: answer === opt.value ? T.accent : T.border }}>
                    {opt.label}
                  </button>
                ))}
              </div>
            );
          })()}

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

          {/* Fill blank / short answer fallback (no inline blank marker) */}
          {isGapFill && (
            <input type="text" value={answer} onChange={(e) => onAnswer(e.target.value)}
              placeholder="Write your answer here..."
              style={{ padding: "9px 14px", borderRadius: 8, fontSize: 14, background: T.inputBg, border: `1.5px solid ${T.border}`, color: T.text, outline: "none", minWidth: 200, fontFamily: "Inter, system-ui, sans-serif", userSelect: "text", WebkitUserSelect: "text" } as React.CSSProperties}
              onFocus={e => e.currentTarget.style.borderColor = T.accent}
              onBlur={e => e.currentTarget.style.borderColor = T.border}
            />
          )}
        </div>
      )}
    </div>
  );
}

// ============================================================
// Warning Screen
// ============================================================
function WarningScreen({ test, onAccept }: { test: IELTSTest; onAccept: () => void }) {
  const [agreed, setAgreed] = useState(false);

  const rules = [
    { icon: <Ban size={15} />, text: "Do NOT switch tabs or open other windows. Your test will be immediately cancelled if you leave this screen." },
    { icon: <Clipboard size={15} />, text: "Copy and paste are disabled. All answers must be typed manually." },
    { icon: <Timer size={15} />, text: test.type === "reading"
      ? `You have exactly ${test.durationMinutes} minutes. The timer cannot be paused.`
      : `The audio lasts approximately ${test.durationMinutes} minutes and CANNOT be paused or rewound. You will then have ${test.transferMinutes} minutes to transfer your answers.` },
    { icon: <PhoneOff size={15} />, text: "Put your phone face-down and away from view." },
    test.type === "listening"
      ? { icon: <Headphones size={15} />, text: "Use headphones if possible. Ensure your volume is set to a comfortable level before starting." }
      : { icon: <BookOpen size={15} />, text: "Read all three passages carefully before answering. You may refer back to the passages at any time." },
    { icon: <CheckCircle size={15} />, text: "Once you submit, you cannot change your answers." },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "Inter, system-ui, sans-serif" }}>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        style={{ maxWidth: 520, width: "100%", background: "#151515", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: "36px 32px", boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }}>

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
              <span style={{ flexShrink: 0, display: "flex", alignItems: "center", paddingTop: 2, color: "rgba(255,255,255,0.5)" }}>{item.icon}</span>
              <span style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.55 }}>{item.text}</span>
            </div>
          ))}
        </div>

        <label style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer", marginBottom: 24 }}>
          <div onClick={() => setAgreed(!agreed)}
            style={{ flexShrink: 0, width: 20, height: 20, borderRadius: 6, border: `2px solid ${agreed ? "#ffffff" : "rgba(255,255,255,0.2)"}`, background: agreed ? "#ffffff" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2, cursor: "pointer", transition: "all 0.15s" }}>
            {agreed && <CheckCircle size={13} color="#fff" />}
          </div>
          <span style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
            I understand and agree to the exam rules above. I am ready to begin.
          </span>
        </label>

        <button onClick={onAccept} disabled={!agreed}
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px", background: agreed ? "#2a2a2a" : "rgba(255,255,255,0.15)", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", borderRadius: 12, cursor: agreed ? "pointer" : "not-allowed", boxShadow: agreed ? "0 4px 15px rgba(37,99,235,0.4)" : "none", transition: "all 0.2s" }}>
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
    <div style={{ minHeight: "100vh", background: "#0a0a0a", fontFamily: "Inter, system-ui, sans-serif", overflowY: "auto" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          style={{ maxWidth: 480, width: "100%", textAlign: "center" }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#2a2a2a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <CheckCircle size={36} color="#fff" />
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: "#e8eeff", marginBottom: 6 }}>Test Complete!</h1>
          <p style={{ color: "rgba(255,255,255,0.4)", marginBottom: 32 }}>Well done, {session.name}! Here are your results.</p>

          <div style={{ background: "#151515", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: "32px", marginBottom: 16 }}>
            <div style={{ fontSize: 72, fontWeight: 900, color: "#ffffff", lineHeight: 1, marginBottom: 4 }}>{result.band}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.4)", marginBottom: 24 }}>IELTS Score</div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
              {[
                { label: "Raw Score", value: `${result.score}/${result.max}` },
                { label: "Percentage", value: `${pct}%` },
              ].map(s => (
                <div key={s.label} style={{ padding: 16, borderRadius: 14, background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: "#e8eeff", marginBottom: 4 }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ height: 6, background: "rgba(255,255,255,0.07)", borderRadius: 3, marginBottom: 8 }}>
              <div style={{ height: "100%", background: "linear-gradient(90deg,#ffffff,#b87fff)", borderRadius: 3, width: `${pct}%`, transition: "width 0.5s ease" }} />
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{msg}</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 4 }}>
            <button onClick={() => setShowDetails(d => !d)}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px", background: showDetails ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)", color: "#fff", fontWeight: 700, fontSize: 14, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, cursor: "pointer" }}>
              <List size={15} /> {showDetails ? "Hide Details" : "View Answer Details"}
            </button>
            <button onClick={onBack}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px", background: "#2a2a2a", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", borderRadius: 12, cursor: "pointer", boxShadow: "0 4px 15px rgba(37,99,235,0.4)" }}>
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
                          <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 6, background: "rgba(255,255,255,0.07)", color: "#ffffff" }}>
                            Correct: {q.correctAnswer}
                          </span>
                        )}
                      </div>
                      {excerpt && (
                        <div style={{ marginTop: 8, marginLeft: 32, padding: "8px 12px", background: "rgba(255,255,255,0.04)", borderLeft: "3px solid rgba(255,255,255,0.3)", borderRadius: "0 6px 6px 0", fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, fontStyle: "italic" }}>
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
