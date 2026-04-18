"use client";
// /student/messages — conversation list + thread with bubbles.
// Pure UI: seeded with teacher/admin/group placeholders since there's
// no real messaging backend yet. Student drafts send to a local buffer.
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";
import StudentShell from "@/components/StudentShell";
import { getSession, type StudentSession } from "@/lib/store";

type Msg = { from: "me" | "them"; t: string; when: string };
type Convo = {
  id: number;
  nm: string;
  role: "teacher" | "admin" | "group";
  unread?: number;
  pv: string;
  last: string;
  online?: boolean;
  replyWithin?: string;
  msgs: Msg[];
};

const SEED: Convo[] = [
  {
    id: 1, nm: "Ms. Shahlo (Teacher)", role: "teacher", unread: 2, pv: "Great improvement on your last reading task — let's push for…", last: "18:22",
    online: true, replyWithin: "2h",
    msgs: [
      { from: "them", t: "Hi — I reviewed your Writing Task 2 on remote work.", when: "Yesterday · 10:04" },
      { from: "them", t: "Structure is much stronger this time. Your thesis is clear, and the two body paragraphs each have a defensible claim.", when: "Yesterday · 10:04" },
      { from: "me", t: "Thank you! I practiced the signposting you suggested last week.", when: "Yesterday · 12:18" },
      { from: "them", t: "It shows. Two things to keep pushing on: (1) lexical range — you lean on \"important\" and \"problem\" too often, and (2) cohesion between paragraphs. Try linking back to your thesis at each paragraph start.", when: "Yesterday · 14:30" },
      { from: "them", t: "Can you send me another Task 2 by Friday? Pick any topic from the band-7 prompt bank.", when: "Today · 18:22" },
    ],
  },
  {
    id: 2, nm: "Mr. Bekzod (Speaking)", role: "teacher", unread: 0, pv: "Nice job on Part 2 — remember the fluency trick we…", last: "14 Apr",
    replyWithin: "1d",
    msgs: [
      { from: "them", t: "Nice job on Part 2 yesterday.", when: "14 Apr · 09:00" },
      { from: "them", t: "Remember the fluency trick we worked on — buying time with discourse markers.", when: "14 Apr · 09:01" },
    ],
  },
  {
    id: 3, nm: "Study group · SP-IELTS 1", role: "group", unread: 0, pv: "Yosina: anyone have notes from today's listening?", last: "12 Apr",
    msgs: [
      { from: "them", t: "Yosina: anyone have notes from today's listening?", when: "12 Apr · 19:20" },
    ],
  },
  {
    id: 4, nm: "London · LC admin", role: "admin", unread: 0, pv: "Reminder: mock exam on Saturday at 10:00 AM", last: "09 Apr",
    msgs: [
      { from: "them", t: "Reminder: mock exam on Saturday at 10:00 AM. Arrive 15 minutes early.", when: "09 Apr · 16:00" },
    ],
  },
];

export default function MessagesPage() {
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null>(null);
  const [convos, setConvos] = useState<Convo[]>(SEED);
  const [curId, setCurId] = useState<number>(SEED[0].id);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    const s = getSession();
    if (!s || s.isAdmin) { router.push("/auth/login"); return; }
    setSession(s);
  }, [router]);

  const current = useMemo(() => convos.find(c => c.id === curId) ?? convos[0], [convos, curId]);

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    setConvos(prev => prev.map(c => {
      if (c.id !== curId) return c;
      const when = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      return { ...c, pv: text.slice(0, 80), last: "now", msgs: [...c.msgs, { from: "me", t: text, when: `Today · ${when}` }] };
    }));
    setDraft("");
  };

  if (!session) return null;

  return (
    <StudentShell>
      <p className="eyebrow">Connect · Teachers &amp; group</p>
      <h1 className="h1"><em>Messages</em></h1>
      <p className="lede" style={{ marginTop: 16, marginBottom: 28, maxWidth: "60ch" }}>
        Direct line to your teachers and study group. Writing feedback, scheduling, quick
        questions. Messaging backend ships in a future release — these threads are seeded.
      </p>

      <div className="msg-wrap">
        <div className="msg-list">
          {convos.map(c => (
            <div
              key={c.id}
              className={`msg-convo-item${curId === c.id ? " on" : ""}`}
              onClick={() => setCurId(c.id)}
            >
              <div className="nm">
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {c.unread ? <span className="un" /> : null}
                  {c.nm}
                </span>
                <span className="dt">{c.last}</span>
              </div>
              <div className="pv">{c.pv}</div>
            </div>
          ))}
        </div>

        <div className="msg-thread">
          <div className="msg-head">
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: "var(--ff-serif)", fontSize: 18, fontWeight: 500, color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {current.nm}
              </div>
              <div style={{ fontFamily: "var(--ff-mono)", fontSize: 10.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-3)", marginTop: 4 }}>
                {current.online ? "● online" : "○ offline"}
                {current.replyWithin ? ` · typically replies within ${current.replyWithin}` : ""}
              </div>
            </div>
          </div>

          <div className="msg-body">
            {current.msgs.map((m, i) => (
              <div key={i} className={`bubble ${m.from}`}>
                {m.t}
                <span className="when">{m.when}</span>
              </div>
            ))}
          </div>

          <div className="msg-compose">
            <textarea
              value={draft}
              onChange={e => setDraft(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
              placeholder="Write a message…"
              rows={1}
            />
            <button className="btn primary" onClick={send} disabled={!draft.trim()}>
              Send <Send size={12} />
            </button>
          </div>
        </div>
      </div>
    </StudentShell>
  );
}
