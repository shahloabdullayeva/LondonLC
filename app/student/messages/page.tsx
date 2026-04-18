"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Send, MessageCircle } from "lucide-react";
import StudentShell from "@/components/StudentShell";
import {
  getSession,
  ensureConversations,
  getMessages,
  sendMessage,
  type StudentSession,
  type Conversation,
  type Message,
} from "@/lib/store";

export default function MessagesPage() {
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null>(null);
  const [convos, setConvos] = useState<Conversation[]>([]);
  const [curId, setCurId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const s = getSession();
    if (!s || s.isAdmin) { router.push("/auth/login"); return; }
    setSession(s);

    ensureConversations(s.id, `${s.name} ${s.surname}`, s.group_name).then(list => {
      setConvos(list);
      if (list.length > 0) setCurId(list[0].id);
      setLoading(false);
    });
  }, [router]);

  useEffect(() => {
    if (!curId) return;
    getMessages(curId).then(setMessages);

    if (pollRef.current) clearInterval(pollRef.current);
    pollRef.current = setInterval(() => {
      getMessages(curId).then(setMessages);
    }, 5000);

    return () => { if (pollRef.current) clearInterval(pollRef.current); };
  }, [curId]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages]);

  const current = useMemo(() => convos.find(c => c.id === curId) ?? null, [convos, curId]);

  const handleSend = async () => {
    const text = draft.trim();
    if (!text || !session || !curId) return;
    setSending(true);
    const msg = await sendMessage(curId, session.id, `${session.name} ${session.surname}`, text);
    if (msg) {
      setMessages(prev => [...prev, msg]);
      setConvos(prev => prev.map(c =>
        c.id === curId ? { ...c, lastMessageAt: msg.createdAt, lastMessagePreview: text.slice(0, 100) } : c
      ));
    }
    setDraft("");
    setSending(false);
  };

  if (!session) return null;

  const myId = session.id;

  return (
    <StudentShell>
      <p className="eyebrow">Connect · Teachers &amp; group</p>
      <h1 className="h1"><em>Messages</em></h1>
      <p className="lede" style={{ marginTop: 16, marginBottom: 28, maxWidth: "60ch" }}>
        Direct line to your teachers and study group. Writing feedback, scheduling, quick questions.
      </p>

      {loading ? (
        <div style={{ textAlign: "center", padding: 60, color: "var(--text-3)" }}>Loading conversations…</div>
      ) : (
        <div className="msg-wrap">
          <div className="msg-list">
            {convos.length === 0 ? (
              <div style={{ padding: 20, textAlign: "center", color: "var(--text-3)", fontSize: 13 }}>
                No conversations yet.
              </div>
            ) : convos.map(c => (
              <div
                key={c.id}
                className={`msg-convo-item${curId === c.id ? " on" : ""}`}
                onClick={() => setCurId(c.id)}
              >
                <div className="nm">
                  <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {c.name || "Conversation"}
                  </span>
                  <span className="dt">
                    {c.lastMessageAt ? new Date(c.lastMessageAt).toLocaleDateString([], { day: "numeric", month: "short" }) : ""}
                  </span>
                </div>
                <div className="pv">{c.lastMessagePreview || "No messages yet"}</div>
              </div>
            ))}
          </div>

          <div className="msg-thread">
            {current ? (
              <>
                <div className="msg-head">
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: "var(--ff-serif)", fontSize: 18, fontWeight: 500, color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {current.name || "Conversation"}
                    </div>
                    <div style={{ fontFamily: "var(--ff-mono)", fontSize: 10.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-3)", marginTop: 4 }}>
                      {current.type === "dm" ? "Direct message" : "Group chat"}
                    </div>
                  </div>
                </div>

                <div className="msg-body" ref={bodyRef}>
                  {messages.length === 0 ? (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", color: "var(--text-3)", gap: 8 }}>
                      <MessageCircle size={32} style={{ opacity: 0.3 }} />
                      <p style={{ fontSize: 13 }}>No messages yet. Say hello!</p>
                    </div>
                  ) : messages.map(m => (
                    <div key={m.id} className={`bubble ${m.senderId === myId ? "me" : "them"}`}>
                      {current.type === "group" && m.senderId !== myId && (
                        <div style={{ fontFamily: "var(--ff-mono)", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 4, fontWeight: 600 }}>
                          {m.senderName}
                        </div>
                      )}
                      {m.content}
                      <span className="when">
                        {new Date(m.createdAt).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="msg-compose">
                  <textarea
                    value={draft}
                    onChange={e => setDraft(e.target.value)}
                    onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                    placeholder="Write a message…"
                    rows={1}
                    disabled={sending}
                  />
                  <button className="btn primary" onClick={handleSend} disabled={!draft.trim() || sending}>
                    {sending ? "…" : <>Send <Send size={12} /></>}
                  </button>
                </div>
              </>
            ) : (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "var(--text-3)" }}>
                Select a conversation
              </div>
            )}
          </div>
        </div>
      )}
    </StudentShell>
  );
}
