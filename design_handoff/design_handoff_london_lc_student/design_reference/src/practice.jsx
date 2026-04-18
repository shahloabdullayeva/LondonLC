/* global React */
const { useState: useSP, useEffect: useEP, useMemo: useMP } = React;

// ========== PRACTICE TEST RUNNER ==========
const PracticeTest = ({ setRoute }) => {
  const [answers, setAnswers] = useSP({});
  const [curQ, setCurQ] = useSP(0);
  const [secs, setSecs] = useSP(58 * 60);
  const [submitted, setSubmitted] = useSP(false);

  useEP(() => {
    if (submitted) return;
    const t = setInterval(() => setSecs(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [submitted]);

  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  const timerCls = secs < 300 ? 'danger' : secs < 600 ? 'warn' : '';

  const q = window.Q_SET[curQ];
  const progress = Object.keys(answers).length;

  const chooseOpt = (optIdx) => setAnswers(a => ({ ...a, [q.n]: optIdx }));

  if (submitted) {
    const score = window.Q_SET.filter(qq => answers[qq.n] === [2, 1, 2, 1, 1][window.Q_SET.indexOf(qq)]).length;
    return (
      <div className="page page-in" style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', paddingTop: 80 }}>
        <p className="eyebrow" style={{ justifyContent: 'center' }}>Cambridge IELTS 20 · Reading · Section 2</p>
        <h1 className="h1" style={{ fontSize: 80 }}>{score}<em style={{ fontSize: 44, color: 'var(--text-3)' }}> / {window.Q_SET.length}</em></h1>
        <p className="lede" style={{ margin: '24px auto' }}>
          Nice work. You got {score} of {window.Q_SET.length} questions correct on this passage. Full section score will combine with the other two passages.
        </p>
        <div className="flex g12" style={{ justifyContent: 'center', marginTop: 32 }}>
          <button className="btn primary" onClick={() => setRoute('dashboard')}>Back to dashboard</button>
          <button className="btn ghost" onClick={() => { setAnswers({}); setCurQ(0); setSubmitted(false); setSecs(58 * 60); }}>Try another passage</button>
        </div>
      </div>
    );
  }

  return (
    <div className="page page-in">
      <div className="exam-bar">
        <div>
          <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-3)' }}>Cambridge IELTS 20 · Academic Reading</div>
          <div style={{ fontFamily: 'var(--ff-serif)', fontSize: 20, fontWeight: 500, marginTop: 4 }}>Passage 2 of 3 · Questions 14–26</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 4 }}>Time remaining</div>
          <div className={`timer ${timerCls}`}>{fmt(secs)}</div>
        </div>
        <div className="flex g8">
          <button className="btn ghost sm">Review</button>
          <button className="btn primary sm" onClick={() => setSubmitted(true)}>Submit section</button>
        </div>
      </div>

      <div className="runner">
        <div className="reading-col">
          <h2>{window.READING_PASSAGE.t}</h2>
          <div className="author">{window.READING_PASSAGE.a}</div>
          {window.READING_PASSAGE.ps.map((p, i) => (
            <p key={i}><b style={{ fontFamily: 'var(--ff-mono)', fontSize: 10.5, marginRight: 8, color: 'var(--text-3)', letterSpacing: '0.08em' }}>{String.fromCharCode(65 + i)}</b>{p}</p>
          ))}
        </div>

        <div className="q-col">
          <div className="q-card">
            <div className="q-num">Question {q.n} of 26 · Multiple choice</div>
            <div className="q-text">{q.prompt}</div>
            {q.opts.map((opt, i) => (
              <div key={i}
                className={`q-opt ${answers[q.n] === i ? 'on' : ''}`}
                onClick={() => chooseOpt(i)}
              >
                <span className="mk">{String.fromCharCode(65 + i)}</span>
                <span>{opt}</span>
              </div>
            ))}
            <div className="q-nav">
              <button className="btn ghost sm" onClick={() => setCurQ(c => Math.max(0, c - 1))} disabled={curQ === 0}>
                <Icon name="arrow-left" size={12}/> Prev
              </button>
              <button className="btn sm" onClick={() => setCurQ(c => Math.min(window.Q_SET.length - 1, c + 1))} style={{ flex: 1 }}>
                Next <Icon name="arrow-right" size={12}/>
              </button>
            </div>
          </div>

          <div className="q-card" style={{ padding: 18 }}>
            <div className="q-num">Progress · {progress} of 26 answered</div>
            <div className="bar" style={{ marginTop: 10 }}><span style={{ width: `${(progress / 26) * 100}%` }}/></div>
            <div className="q-dots">
              {Array.from({ length: 13 }).map((_, i) => {
                const qnum = 14 + i;
                const done = answers[qnum] != null;
                const cur = i === curQ && qnum <= 14 + window.Q_SET.length - 1;
                return (
                  <span key={i} className={`q-dot ${done ? 'done' : ''} ${cur ? 'cur' : ''}`}>{qnum}</span>
                );
              })}
            </div>
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, color: 'var(--text-3)', marginTop: 14, lineHeight: 1.6, letterSpacing: '0.04em' }}>
              <b style={{ color: 'var(--text-2)' }}>TIP</b> · Leaving the tab will end the section. Keep focus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========== Results page (simple list) ==========
const Results = () => (
  <div className="page page-in">
    <p className="eyebrow">Since joined · {window.ME.joined}</p>
    <h1 className="h1">My <em>Results</em></h1>
    <p className="lede" style={{ marginTop: 16, marginBottom: 32 }}>Every attempt. Every score. Sorted by latest.</p>

    <div className="grid cols-4" style={{ marginBottom: 28 }}>
      <div className="stat"><span className="lab">Attempts</span><span className="val">38</span><span className="trend">lifetime</span></div>
      <div className="stat"><span className="lab">Completed</span><span className="val">31</span><span className="trend up">82% completion rate</span></div>
      <div className="stat"><span className="lab">Avg Band</span><span className="val">6.3</span><span className="trend up">↑ from 5.4</span></div>
      <div className="stat"><span className="lab">Goal</span><span className="val">7.0</span><span className="trend">by 30 June 2026</span></div>
    </div>

    <div className="card flush">
      <table className="tbl">
        <thead><tr>
          <th>Test</th><th>Type</th><th style={{textAlign:'right'}}>Score</th><th style={{textAlign:'right'}}>Band</th><th>When</th><th>Duration</th><th>Status</th>
        </tr></thead>
        <tbody>
          {window.RECENT.concat(window.RECENT).map((r, i) => (
            <tr key={i}>
              <td style={{ fontWeight: 500 }}>{r.test}</td>
              <td><span className="chip" style={{ fontSize: 9.5 }}>{r.type}</span></td>
              <td style={{ textAlign: 'right', fontFamily: 'var(--ff-mono)' }}>{r.score !== null && r.max ? `${r.score}/${r.max}` : '—'}</td>
              <td style={{ textAlign: 'right', fontFamily: 'var(--ff-serif)', fontSize: 17 }}>{r.band != null ? r.band.toFixed(1) : '—'}</td>
              <td style={{ color: 'var(--text-2)' }}>{r.when}</td>
              <td style={{ fontFamily: 'var(--ff-mono)', fontSize: 12, color: 'var(--text-2)' }}>{r.dur}</td>
              <td>{r.status === 'cancelled' ? <span className="chip danger">cancelled</span> : r.status === 'graded' ? <span className="chip on">graded</span> : <span className="chip">completed</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// Generic practice section hub - Reading/Listening
const PracticeHub = ({ kind, setRoute }) => {
  const label = { reading: 'Reading', listening: 'Listening' }[kind];
  const sets = [
    { book: 'Cambridge IELTS 20', sections: 3, done: 1, new: true },
    { book: 'Cambridge IELTS 19', sections: 3, done: 3 },
    { book: 'Cambridge IELTS 18', sections: 3, done: 2 },
    { book: 'Cambridge IELTS 17', sections: 3, done: 0 },
    { book: 'Cambridge IELTS 16', sections: 3, done: 0 },
    { book: 'Academic Practice Set A', sections: 4, done: 2 },
  ];

  return (
    <div className="page page-in">
      <p className="eyebrow">Practice · {label}</p>
      <h1 className="h1">{label} <em>practice</em></h1>
      <p className="lede" style={{ marginTop: 16, marginBottom: 32 }}>
        Work through official Cambridge {kind} tests at your own pace. Each full test is three sections, 40 questions, 60 minutes.
      </p>

      <div className="grid cols-3">
        {sets.map((s, i) => (
          <div key={i} className="card" style={{ cursor: 'pointer' }} onClick={() => setRoute('test')}>
            <div className="flex jcb">
              <p className="eyebrow" style={{ margin: 0 }}>{s.new ? 'New · April 2026' : 'Official'}</p>
              {s.done === s.sections ? <span className="chip on">complete</span> : s.done > 0 ? <span className="chip">in progress</span> : <span className="chip">not started</span>}
            </div>
            <h3 className="h2" style={{ marginTop: 12, marginBottom: 14 }}>{s.book}</h3>
            <div className="bar"><span style={{ width: `${(s.done/s.sections)*100}%` }}/></div>
            <div className="flex jcb" style={{ marginTop: 10, fontFamily: 'var(--ff-mono)', fontSize: 10.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)' }}>
              <span>{s.done} of {s.sections} sections</span>
              <span>continue →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, { PracticeTest, Results, PracticeHub });
