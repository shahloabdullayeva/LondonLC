"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Mic, MicOff, Play, SkipForward, BarChart3, RotateCcw, Volume2 } from "lucide-react";
import StudentShell from "@/components/StudentShell";
import { getSession, type StudentSession } from "@/lib/store";

const DISPLAY = `"Fraunces", "Iowan Old Style", Georgia, serif`;

type SpeakingPart = { part: number; title: string; instructions: string; questions: string[] };

const TESTS: { id: string; title: string; parts: SpeakingPart[] }[] = [
  {
    id: "sp-1",
    title: "Speaking Practice 1",
    parts: [
      {
        part: 1, title: "Introduction & Interview",
        instructions: "The examiner will ask you general questions about yourself and familiar topics.",
        questions: [
          "What is your full name?",
          "Where are you from?",
          "Do you work or are you a student?",
          "What do you enjoy doing in your free time?",
          "How often do you use the internet, and what do you usually do online?",
        ],
      },
      {
        part: 2, title: "Individual Long Turn",
        instructions: "You have 1 minute to prepare, then speak for 1–2 minutes on the topic below.",
        questions: [
          "Describe a book that you have recently read.\n\nYou should say:\n• what the book was about\n• why you decided to read it\n• what you liked or disliked about it\nand explain whether you would recommend it to others.",
        ],
      },
      {
        part: 3, title: "Two-way Discussion",
        instructions: "The examiner will ask deeper questions related to the Part 2 topic.",
        questions: [
          "Do you think reading is becoming less popular among young people? Why or why not?",
          "How has technology changed the way people read?",
          "Some people say that schools should encourage students to read more fiction. Do you agree?",
          "In what ways can reading help a person in their professional life?",
        ],
      },
    ],
  },
  {
    id: "sp-2",
    title: "Speaking Practice 2",
    parts: [
      {
        part: 1, title: "Introduction & Interview",
        instructions: "The examiner will ask you general questions about yourself and familiar topics.",
        questions: [
          "What is your full name?",
          "Where do you currently live?",
          "Do you like the area where you live? Why or why not?",
          "What kind of weather do you prefer?",
          "How important is music in your life?",
        ],
      },
      {
        part: 2, title: "Individual Long Turn",
        instructions: "You have 1 minute to prepare, then speak for 1–2 minutes on the topic below.",
        questions: [
          "Describe a place you have visited that you found particularly interesting.\n\nYou should say:\n• where the place is\n• when you visited it\n• what you did there\nand explain why you found it interesting.",
        ],
      },
      {
        part: 3, title: "Two-way Discussion",
        instructions: "The examiner will ask deeper questions related to the Part 2 topic.",
        questions: [
          "Why do people enjoy travelling to new places?",
          "Do you think tourism has a positive or negative effect on local communities?",
          "How has international travel changed in the last few decades?",
          "Should governments invest more in preserving historical sites? Why?",
        ],
      },
    ],
  },
  {
    id: "sp-3",
    title: "Speaking Practice 3",
    parts: [
      {
        part: 1, title: "Introduction & Interview",
        instructions: "The examiner will ask you general questions about yourself and familiar topics.",
        questions: [
          "What is your full name?",
          "What do you do — do you work or study?",
          "What is your favourite subject or area of work?",
          "Do you prefer to spend your free time alone or with others?",
          "How do you usually get your daily news?",
        ],
      },
      {
        part: 2, title: "Individual Long Turn",
        instructions: "You have 1 minute to prepare, then speak for 1–2 minutes on the topic below.",
        questions: [
          "Describe a skill you would like to learn in the future.\n\nYou should say:\n• what the skill is\n• why you want to learn it\n• how you would go about learning it\nand explain how this skill would benefit your life.",
        ],
      },
      {
        part: 3, title: "Two-way Discussion",
        instructions: "The examiner will ask deeper questions related to the Part 2 topic.",
        questions: [
          "What kinds of skills are most valued in the workplace today?",
          "Do you think schools prepare students well for the skills they need in adult life?",
          "How has technology changed the skills people need to succeed?",
          "Is it more important to have practical skills or academic knowledge?",
        ],
      },
    ],
  },
];

type Answer = { part: number; question: string; transcript: string };
type GradingResult = {
  fluency: number;
  lexical: number;
  grammar: number;
  pronunciation: number;
  overall: number;
  feedback: { criterion: string; comment: string }[];
};

function speak(text: string): Promise<void> {
  return new Promise(resolve => {
    if (typeof window === "undefined" || !window.speechSynthesis) { resolve(); return; }
    window.speechSynthesis.cancel();
    const plain = text.replace(/[•\n]/g, " ").replace(/\s+/g, " ").trim();
    const utt = new SpeechSynthesisUtterance(plain);
    utt.rate = 0.92;
    utt.pitch = 1.0;
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v =>
      v.name.includes("Microsoft") && v.lang.startsWith("en") && v.name.includes("Online")
    ) || voices.find(v =>
      v.name.includes("Google UK English")
    ) || voices.find(v =>
      v.lang.startsWith("en-GB")
    ) || voices.find(v =>
      v.lang.startsWith("en")
    );
    if (preferred) utt.voice = preferred;
    utt.onend = () => resolve();
    utt.onerror = () => resolve();
    window.speechSynthesis.speak(utt);
  });
}

export default function SpeakingPage() {
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null>(null);
  const [selectedTest, setSelectedTest] = useState<typeof TESTS[0] | null>(null);
  const [partIdx, setPartIdx] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [phase, setPhase] = useState<"select" | "intro" | "speaking" | "recording" | "grading" | "results">("select");
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [liveTranscript, setLiveTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [result, setResult] = useState<GradingResult | null>(null);
  const [prepTimer, setPrepTimer] = useState(0);
  const recognitionRef = useRef</* SpeechRecognition */ unknown>(null);

  useEffect(() => {
    const s = getSession();
    if (!s || s.isAdmin) { router.push("/auth/login"); return; }
    setSession(s);
  }, [router]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.speechSynthesis?.getVoices();
      const h = () => window.speechSynthesis?.getVoices();
      window.speechSynthesis?.addEventListener?.("voiceschanged", h);
      return () => window.speechSynthesis?.removeEventListener?.("voiceschanged", h);
    }
  }, []);

  const currentPart = selectedTest?.parts[partIdx];
  const currentQ = currentPart?.questions[qIdx];
  const totalQuestions = selectedTest?.parts.reduce((s, p) => s + p.questions.length, 0) ?? 0;
  const answeredCount = answers.length;

  const startRecording = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const W = window as any;
    const SR = W.SpeechRecognition || W.webkitSpeechRecognition;
    if (!SR) { alert("Your browser does not support speech recognition. Please use Chrome or Edge."); return; }
    const rec = new SR();
    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = "en-US";
    let final = "";
    rec.onresult = (e: any) => {
      let interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) final += e.results[i][0].transcript + " ";
        else interim += e.results[i][0].transcript;
      }
      setLiveTranscript((final + interim).trim());
    };
    rec.onerror = () => { setIsListening(false); };
    rec.onend = () => { setIsListening(false); };
    rec.start();
    recognitionRef.current = rec;
    setIsListening(true);
    setPhase("recording");
  }, []);

  const stopListening = useCallback(() => {
    const rec = recognitionRef.current as any;
    if (rec) { rec.stop(); recognitionRef.current = null; }
    setIsListening(false);
  }, []);

  const askQuestion = useCallback(async () => {
    if (!currentQ) return;
    // Stop any active recording before examiner speaks
    const rec = recognitionRef.current as any;
    if (rec) { rec.stop(); recognitionRef.current = null; }
    setIsListening(false);
    setPhase("speaking");
    setIsSpeaking(true);
    await speak(currentQ);
    setIsSpeaking(false);

    if (currentPart?.part === 2 && qIdx === 0) {
      setPrepTimer(60);
      setPhase("speaking");
    } else {
      startRecording();
    }
  }, [currentQ, currentPart, qIdx, startRecording]);

  useEffect(() => {
    if (prepTimer > 0) {
      const t = setTimeout(() => setPrepTimer(p => p - 1), 1000);
      return () => clearTimeout(t);
    } else if (prepTimer === 0 && phase === "speaking" && currentPart?.part === 2 && !isListening && !isSpeaking) {
      if (answers.length > 0 || qIdx > 0) return;
      startRecording();
    }
  }, [prepTimer, phase, currentPart, isListening, isSpeaking, startRecording, answers.length, qIdx]);

  const nextQuestion = useCallback(() => {
    // Capture transcript now before stopping clears anything
    const transcript = liveTranscript.trim();
    const rec = recognitionRef.current as any;
    if (rec) { rec.stop(); recognitionRef.current = null; }
    setIsListening(false);
    if (currentPart && currentQ && transcript) {
      setAnswers(prev => [...prev, { part: currentPart.part, question: currentQ, transcript }]);
    }
    setLiveTranscript("");
    setTimeout(() => {
      if (!selectedTest) return;
      const part = selectedTest.parts[partIdx];
      if (qIdx < part.questions.length - 1) {
        const newQIdx = qIdx + 1;
        const nextQ = part.questions[newQIdx];
        setQIdx(newQIdx);
        // Speak next question directly — avoids stale closure on askQuestion
        setTimeout(async () => {
          setPhase("speaking");
          setIsSpeaking(true);
          await speak(nextQ);
          setIsSpeaking(false);
          startRecording();
        }, 500);
      } else if (partIdx < selectedTest.parts.length - 1) {
        setPartIdx(p => p + 1);
        setQIdx(0);
        setPhase("intro");
      } else {
        gradeAnswers();
      }
    }, 300);
  }, [liveTranscript, currentPart, currentQ, selectedTest, partIdx, qIdx, startRecording]);

  const gradeAnswers = async () => {
    setPhase("grading");
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !anonKey) return;

    const transcript = answers.map(a =>
      `[Part ${a.part}] Examiner: ${a.question}\nStudent: ${a.transcript}`
    ).join("\n\n");

    try {
      const res = await fetch(`${supabaseUrl}/functions/v1/grade-speaking`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${anonKey}` },
        body: JSON.stringify({ transcript }),
      });
      if (res.ok) {
        const data = await res.json();
        setResult(data);
      }
    } catch {}
    setPhase("results");
  };

  const startTest = (test: typeof TESTS[0]) => {
    setSelectedTest(test);
    setPartIdx(0);
    setQIdx(0);
    setAnswers([]);
    setResult(null);
    setPhase("intro");
  };

  const reset = () => {
    window.speechSynthesis?.cancel();
    const rec = recognitionRef.current as any;
    if (rec) { rec.stop(); recognitionRef.current = null; }
    setSelectedTest(null);
    setPhase("select");
    setAnswers([]);
    setResult(null);
    setLiveTranscript("");
    setPartIdx(0);
    setQIdx(0);
  };

  if (!session) return null;

  if (phase === "select") {
    return (
      <StudentShell>
        <p className="eyebrow">Practice · Speaking</p>
        <h1 className="h1"><em>Speaking</em> practice</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14, marginTop: 28 }}>
          {TESTS.map(test => (
            <div key={test.id} className="card" style={{ padding: 20, cursor: "pointer", transition: "border-color 0.15s, transform 0.15s" }}
              onClick={() => startTest(test)}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.transform = "none"; }}>
              <div style={{ fontFamily: "var(--ff-mono)", fontSize: 10, fontWeight: 600, color: "var(--text-3)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Speaking Mock Test
              </div>
              <h3 style={{ fontFamily: DISPLAY, fontSize: 18, fontWeight: 500, marginBottom: 8 }}>{test.title}</h3>
              <p style={{ fontSize: 13, color: "var(--text-2)", marginBottom: 16 }}>
                3 parts · {test.parts.reduce((s, p) => s + p.questions.length, 0)} questions · ~12 min
              </p>
              <button className="btn primary sm" style={{ width: "100%" }}>Start <Mic size={13} /></button>
            </div>
          ))}
        </div>
      </StudentShell>
    );
  }

  if (phase === "results") {
    return (
      <StudentShell>
        <p className="eyebrow">Speaking · Results</p>
        <h1 className="h1"><em>Your</em> score</h1>
        {result ? (
          <div style={{ marginTop: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 32 }}>
              <div className="score-ring">
                <svg width="90" height="90" viewBox="0 0 90 90">
                  <circle cx="45" cy="45" r={40} fill="none" stroke="var(--line-2)" strokeWidth="3" />
                  <circle cx="45" cy="45" r={40} fill="none" stroke="var(--accent)" strokeWidth="3"
                    strokeDasharray={`${(result.overall / 9) * 2 * Math.PI * 40} ${2 * Math.PI * 40}`} strokeLinecap="round" />
                </svg>
                <div style={{ textAlign: "center" }}>
                  <div className="val">{result.overall.toFixed(1)}</div>
                  <div className="lab">of 9.0</div>
                </div>
              </div>
              <div>
                <p className="eyebrow" style={{ margin: 0 }}>Overall band</p>
                <h3 style={{ fontFamily: DISPLAY, fontSize: 36, fontWeight: 500, margin: "6px 0 0" }}>Band {result.overall.toFixed(1)}</h3>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
              {[
                { k: "Fluency & coherence", v: result.fluency },
                { k: "Lexical resource", v: result.lexical },
                { k: "Grammar", v: result.grammar },
                { k: "Pronunciation", v: result.pronunciation },
              ].map(c => (
                <div key={c.k}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6, color: "var(--text-2)" }}>
                    <span>{c.k}</span>
                    <span style={{ fontFamily: "var(--ff-mono)", fontWeight: 600 }}>{c.v.toFixed(1)}</span>
                  </div>
                  <div className="bar"><span style={{ width: `${(c.v / 9) * 100}%` }} /></div>
                </div>
              ))}
            </div>

            {result.feedback && (
              <div className="card" style={{ marginBottom: 24 }}>
                <p className="eyebrow" style={{ margin: "0 0 16px" }}>Examiner feedback</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
                  {result.feedback.map((f, i) => (
                    <div key={i} style={{ padding: "14px 16px", background: "var(--surface-2)", border: "1px solid var(--line)", borderRadius: 10 }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", marginBottom: 8, fontFamily: "var(--ff-mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                        {f.criterion}
                      </div>
                      <div style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text-2)" }}>{f.comment}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: "flex", gap: 12 }}>
              <button className="btn primary" onClick={reset}><RotateCcw size={14} /> Try another test</button>
            </div>
          </div>
        ) : (
          <p style={{ color: "var(--text-3)", marginTop: 28 }}>Scoring failed. Your answers were recorded but could not be graded.</p>
        )}
      </StudentShell>
    );
  }

  return (
    <StudentShell>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div>
            <p className="eyebrow" style={{ margin: 0 }}>Part {(currentPart?.part ?? 1)} of 3</p>
            <h2 style={{ fontFamily: DISPLAY, fontSize: 28, fontWeight: 500, margin: "4px 0 0" }}>
              {currentPart?.title}
            </h2>
          </div>
          <button className="btn ghost sm" onClick={reset}>Exit</button>
        </div>

        {/* Progress */}
        <div className="bar" style={{ marginBottom: 28, height: 3 }}>
          <span style={{ width: `${(answeredCount / totalQuestions) * 100}%` }} />
        </div>

        {phase === "intro" && (
          <div className="card" style={{ textAlign: "center", padding: "48px 32px" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>
              {currentPart?.part === 1 ? "🎙️" : currentPart?.part === 2 ? "📋" : "💬"}
            </div>
            <h3 style={{ fontFamily: DISPLAY, fontSize: 24, fontWeight: 500, marginBottom: 12 }}>
              Part {currentPart?.part}: {currentPart?.title}
            </h3>
            <p style={{ color: "var(--text-2)", fontSize: 15, lineHeight: 1.6, maxWidth: 480, margin: "0 auto 28px" }}>
              {currentPart?.instructions}
            </p>
            <button className="btn primary" onClick={askQuestion}>
              <Play size={14} /> Begin
            </button>
          </div>
        )}

        {(phase === "speaking" || phase === "recording") && currentQ && (
          <div className="card" style={{ padding: "32px 28px" }}>
            {/* Question display */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 8 }}>
                Question {qIdx + 1} of {currentPart?.questions.length}
              </div>
              <p style={{ fontFamily: DISPLAY, fontSize: 20, fontWeight: 500, lineHeight: 1.45, whiteSpace: "pre-line" }}>
                {currentQ}
              </p>
              {isSpeaking && (
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12, color: "var(--accent)", fontSize: 13 }}>
                  <Volume2 size={14} /> Examiner speaking…
                </div>
              )}
            </div>

            {/* Prep timer for Part 2 */}
            {prepTimer > 0 && currentPart?.part === 2 && (
              <div style={{ textAlign: "center", padding: "20px 0", marginBottom: 16 }}>
                <div style={{ fontFamily: "var(--ff-mono)", fontSize: 48, fontWeight: 500, color: "var(--accent)" }}>
                  {Math.floor(prepTimer / 60)}:{String(prepTimer % 60).padStart(2, "0")}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-3)" }}>Preparation time</div>
              </div>
            )}

            {/* Live transcript */}
            {(isListening || liveTranscript) && (
              <div style={{
                padding: "16px 20px", borderRadius: 10,
                background: "var(--surface-2)", border: "1px solid var(--line)",
                minHeight: 80, marginBottom: 20,
                fontFamily: DISPLAY, fontSize: 16, lineHeight: 1.6,
                color: liveTranscript ? "var(--text)" : "var(--text-3)",
              }}>
                {liveTranscript || "Listening…"}
              </div>
            )}

            {/* Controls */}
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              {!isListening && phase !== "recording" && prepTimer === 0 && !isSpeaking && (
                <button className="btn primary" onClick={startRecording}>
                  <Mic size={14} /> Start speaking
                </button>
              )}
              {isListening && (
                <button className="btn" onClick={() => {
                  stopListening();
                  if (!liveTranscript.trim()) setPhase("speaking");
                }} style={{ background: "rgba(239,68,68,0.12)", borderColor: "rgba(239,68,68,0.3)", color: "#fca5a5" }}>
                  <MicOff size={14} /> Stop
                </button>
              )}
              {!isListening && liveTranscript && (
                <button className="btn primary" onClick={nextQuestion}>
                  <SkipForward size={14} /> Next
                </button>
              )}
              {!isListening && !liveTranscript && phase === "recording" && (
                <button className="btn primary" onClick={nextQuestion}>
                  <SkipForward size={14} /> Skip
                </button>
              )}
            </div>

            {isListening && (
              <div style={{ textAlign: "center", marginTop: 16 }}>
                <div style={{
                  display: "inline-block", width: 12, height: 12, borderRadius: "50%",
                  background: "#ef4444", animation: "pulse 1.2s infinite",
                }} />
                <span style={{ fontSize: 12, color: "var(--text-3)", marginLeft: 8 }}>Recording</span>
              </div>
            )}
          </div>
        )}

        {phase === "grading" && (
          <div className="card" style={{ textAlign: "center", padding: "64px 32px" }}>
            <div style={{ fontSize: 36, marginBottom: 16 }}>⏳</div>
            <h3 style={{ fontFamily: DISPLAY, fontSize: 24, fontWeight: 500, marginBottom: 8 }}>Grading your responses</h3>
            <p style={{ color: "var(--text-3)", fontSize: 14 }}>The AI examiner is reviewing your transcript…</p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
      `}</style>
    </StudentShell>
  );
}
