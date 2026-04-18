/* global React */
const { useState: useSW, useEffect: useEW, useRef: useRW } = React;

// ========== WRITING ==========
const Writing = () => {
  const [text, setText] = useSW(`Remote work has become a defining feature of the modern workplace. While it offers flexibility and reduces commuting, it also introduces new challenges around collaboration and mental health.

In my view, the benefits of remote work outweigh the drawbacks, particularly for knowledge workers. Flexibility allows employees to structure their time around personal responsibilities, and studies from Stanford and MIT suggest that productivity, contrary to early scepticism, tends to remain stable or even improve.

However, the costs are real. Junior staff in particular lose the informal mentorship that emerges from being physically present, and loneliness among distributed teams has been widely documented.`);

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const chars = text.length;

  return (
    <div className="page page-in">
      <p className="eyebrow">Writing · Task 2</p>
      <h1 className="h1"><em>Writing</em> feedback</h1>
      <p className="lede" style={{ marginTop: 16, marginBottom: 32 }}>
        Write your essay. Submit for review. Receive line-by-line feedback from Ms. Shahlo within 24 hours — scored on the four official IELTS criteria.
      </p>

      <div className="grid" style={{ gridTemplateColumns: '1.2fr 1fr', gap: 24 }}>
        <div>
          {/* Prompt */}
          <div className="card" style={{ marginBottom: 20 }}>
            <p className="eyebrow" style={{ margin: 0 }}>Prompt · 40 minutes · minimum 250 words</p>
            <p style={{ fontFamily: 'var(--ff-serif)', fontSize: 19, lineHeight: 1.45, margin: '10px 0 0' }}>
              "Many companies now allow their employees to work remotely. Do you think the advantages of remote work outweigh the disadvantages?"
            </p>
          </div>

          <div className="editor">
            <div className="hd">
              <span>Draft · auto-saved 12:04</span>
              <div className="flex g12" style={{ textTransform: 'none', letterSpacing: 0, fontFamily: 'var(--ff-mono)' }}>
                <span style={{ color: words >= 250 ? 'var(--accent)' : 'var(--warn)' }}>{words} words</span>
                <span style={{ color: 'var(--text-3)' }}>{chars} chars</span>
              </div>
            </div>
            <div
              className="area"
              contentEditable
              suppressContentEditableWarning
              onInput={e => setText(e.currentTarget.innerText)}
            >{text}</div>
            <div className="hd" style={{ borderTop: '1px solid var(--line)', borderBottom: 0 }}>
              <span>Ms. Shahlo · typically replies within 24h</span>
              <button className="btn primary sm">Submit for review <Icon name="send" size={12}/></button>
            </div>
          </div>
        </div>

        <div>
          <div className="card" style={{ marginBottom: 20 }}>
            <div className="flex jcb aic" style={{ marginBottom: 18 }}>
              <div>
                <p className="eyebrow" style={{ margin: 0 }}>Your last score</p>
                <h3 className="h2" style={{ margin: '6px 0 0' }}>Band 6.5</h3>
              </div>
              <div className="score-ring">
                <svg>
                  <circle cx="45" cy="45" r="40" fill="none" stroke="var(--line-2)" strokeWidth="3"/>
                  <circle cx="45" cy="45" r="40" fill="none" stroke="var(--accent)" strokeWidth="3"
                    strokeDasharray={`${(6.5/9)*251.3} 251.3`} strokeLinecap="round"/>
                </svg>
                <div>
                  <div className="val">6.5</div>
                  <div className="lab">of 9.0</div>
                </div>
              </div>
            </div>

            {[
              { k: 'Task response', v: 7.0 },
              { k: 'Coherence & cohesion', v: 6.5 },
              { k: 'Lexical resource', v: 6.0 },
              { k: 'Grammar range & accuracy', v: 6.5 },
            ].map((c, i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                <div className="flex jcb" style={{ fontSize: 13, marginBottom: 4 }}>
                  <span>{c.k}</span>
                  <span style={{ fontFamily: 'var(--ff-mono)', color: 'var(--text)' }}>{c.v.toFixed(1)}</span>
                </div>
                <div className="bar"><span style={{ width: `${(c.v/9)*100}%` }}/></div>
              </div>
            ))}
          </div>

          <div className="card">
            <p className="eyebrow" style={{ margin: 0, marginBottom: 14 }}>Teacher comments · in-line</p>
            <div className="comment">
              <div className="hd"><b>Lexical</b><span>Para 2</span></div>
              <div className="txt">"Flexibility" appears three times in this paragraph. Try: <i>latitude, autonomy, discretion.</i></div>
            </div>
            <div className="comment">
              <div className="hd"><b>Cohesion</b><span>Para 3</span></div>
              <div className="txt">Strong contrast move here — try opening with a signposting phrase like <i>"That said…"</i> or <i>"On the other hand,"</i> to make the shift explicit.</div>
            </div>
            <div className="comment">
              <div className="hd"><b>Task response</b><span>Overall</span></div>
              <div className="txt">Your position is clear from paragraph 1, which is rare — well done. Missing: a concrete example in para 3 to back the "loneliness" claim.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========== MESSAGES ==========
const Messages = () => {
  const [curId, setCurId] = useSW(1);
  const [draft, setDraft] = useSW('');
  const convo = window.MESSAGES.find(m => m.id === curId);
  const msgs = convo?.msgs || [
    { from: 'them', t: '(Open conversation)', when: '—' },
  ];

  return (
    <div className="page page-in">
      <p className="eyebrow">Connect · Teachers & group</p>
      <h1 className="h1"><em>Messages</em></h1>
      <p className="lede" style={{ marginTop: 16, marginBottom: 28, maxWidth: '60ch' }}>
        Direct line to your teachers and study group. Writing feedback, scheduling, quick questions.
      </p>

      <div className="msg-wrap">
        <div className="msg-list">
          {window.MESSAGES.map(m => (
            <div key={m.id} className={`msg-convo-item ${curId === m.id ? 'on' : ''}`} onClick={() => setCurId(m.id)}>
              <div className="nm">
                <span>{m.unread ? <span className="un"/> : null}{m.nm}</span>
                <span className="dt">{m.last}</span>
              </div>
              <div className="pv">{m.pv}</div>
            </div>
          ))}
        </div>

        <div className="msg-thread">
          <div className="msg-head">
            <div>
              <div style={{ fontFamily: 'var(--ff-serif)', fontSize: 18, fontWeight: 500 }}>{convo?.nm}</div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', marginTop: 2 }}>
                ● online · typically replies within 2h
              </div>
            </div>
            <div className="flex g8">
              <button className="btn ghost sm">View profile</button>
            </div>
          </div>

          <div className="msg-body">
            {msgs.map((m, i) => (
              <div key={i} className={`bubble ${m.from}`}>
                {m.t}
                <span className="when">{m.when}</span>
              </div>
            ))}
          </div>

          <div className="msg-compose">
            <textarea value={draft} onChange={e => setDraft(e.target.value)} placeholder="Write a message…" rows={1}/>
            <button className="btn primary" onClick={() => setDraft('')}>
              Send <Icon name="send" size={12}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { Writing, Messages });
