/* global React */
const { useState: useSD, useEffect: useED, useMemo: useMD } = React;

// Streak visualization - last 30 days
const StreakBars = ({ days = 30, streak = 12 }) => {
  const arr = [];
  for (let i = days - 1; i >= 0; i--) {
    const on = i < streak;
    const today = i === 0;
    arr.push(<i key={i} className={`${on ? 'on' : ''} ${today ? 'today' : ''}`}/>);
  }
  return <div className="streak">{arr}</div>;
};

// Line chart for band progression
const BandChart = () => {
  const pts = [5.0, 5.5, 5.5, 6.0, 5.5, 6.0, 6.5, 6.0, 6.5, 6.5, 7.0, 6.5];
  const max = 9, min = 4;
  const w = 520, h = 140, pad = 16;
  const x = i => pad + (i / (pts.length - 1)) * (w - pad * 2);
  const y = v => h - pad - ((v - min) / (max - min)) * (h - pad * 2);
  const d = pts.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i)},${y(v)}`).join(' ');
  const area = d + ` L${x(pts.length - 1)},${h - pad} L${x(0)},${h - pad} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25"/>
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {[5, 6, 7].map(b => (
        <g key={b}>
          <line x1={pad} x2={w - pad} y1={y(b)} y2={y(b)} stroke="var(--line)" strokeDasharray="2 3"/>
          <text x={pad - 4} y={y(b) + 3} fontFamily="var(--ff-mono)" fontSize="9" fill="var(--text-3)" textAnchor="end">{b.toFixed(1)}</text>
        </g>
      ))}
      <path d={area} fill="url(#bg)"/>
      <path d={d} fill="none" stroke="var(--accent)" strokeWidth="1.5"/>
      {pts.map((v, i) => (
        <circle key={i} cx={x(i)} cy={y(v)} r={i === pts.length - 1 ? 3.5 : 2.2} fill="var(--accent)"/>
      ))}
      <text x={x(pts.length - 1) + 6} y={y(pts[pts.length - 1]) + 3} fontFamily="var(--ff-serif)" fontSize="12" fill="var(--text)">{pts[pts.length - 1].toFixed(1)}</text>
    </svg>
  );
};

const Dashboard = ({ setRoute }) => {
  const [quoteIdx, setQuoteIdx] = useSD(0);
  useED(() => { setQuoteIdx(Math.floor(Math.random() * window.QUOTES.length)); }, []);
  const q = window.QUOTES[quoteIdx];

  return (
    <div className="page page-in">
      {/* HERO */}
      <div className="grid cols-12" style={{ marginBottom: 40 }}>
        <div className="span-8" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="eyebrow">
            <span>Today · {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
            <span className="rule"/>
            <span>Week 6 of 12</span>
          </p>
          <h1 className="h1">
            Good evening, <em>Aziza.</em><br/>
            You're on a <span className="amp">{window.ME.streak}-day</span> streak.
          </h1>
          <p className="lede" style={{ marginTop: 24 }}>
            Four practice sessions this week — one shy of your goal. One 20-minute writing task stands between you and a full week.
          </p>
          <div className="flex g12" style={{ marginTop: 28 }}>
            <button className="btn primary" onClick={() => setRoute('test')}>
              <Icon name="play" size={13}/> Continue today's task
            </button>
            <button className="btn ghost" onClick={() => setRoute('reading')}>
              Browse practice library <Icon name="arrow-right" size={13}/>
            </button>
          </div>
        </div>

        <div className="span-4" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: '1px solid var(--line)', paddingLeft: 32 }}>
          <p className="eyebrow">Quote of the day</p>
          <blockquote className="pullquote">
            {q.t}
            <cite>— {q.a}</cite>
          </blockquote>
        </div>
      </div>

      {/* STATS */}
      <div className="grid cols-4" style={{ marginBottom: 32 }}>
        <div className="stat">
          <span className="lab">Current Band</span>
          <span className="val">6.5</span>
          <span className="trend up">↑ 0.5 since Feb</span>
        </div>
        <div className="stat">
          <span className="lab">This Week</span>
          <span className="val">4<span style={{ fontSize: 20, color: 'var(--text-3)', marginLeft: 4 }}>/ 5</span></span>
          <span className="trend">sessions completed</span>
        </div>
        <div className="stat">
          <span className="lab">Study Streak</span>
          <span className="val">{window.ME.streak}<span style={{ fontSize: 20, color: 'var(--text-3)', marginLeft: 4 }}>days</span></span>
          <span className="trend up">personal best: 14</span>
        </div>
        <div className="stat">
          <span className="lab">Total Attempts</span>
          <span className="val">38</span>
          <span className="trend">31 completed · 2 cancelled</span>
        </div>
      </div>

      {/* BAND CURVE + STREAK */}
      <div className="grid cols-12" style={{ marginBottom: 32 }}>
        <div className="card span-8">
          <div className="flex jcb aic" style={{ marginBottom: 16 }}>
            <div>
              <p className="eyebrow" style={{ margin: 0 }}>Band progression</p>
              <h3 className="h2" style={{ marginTop: 6, marginBottom: 0 }}>Your curve</h3>
            </div>
            <div className="flex g8">
              <span className="chip on">3 months</span>
              <span className="chip">6 months</span>
              <span className="chip">Year</span>
            </div>
          </div>
          <BandChart/>
          <div className="flex jcb" style={{ marginTop: 14, fontFamily: 'var(--ff-mono)', fontSize: 10.5, color: 'var(--text-3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            <span>Feb</span><span>Mar</span><span>Apr</span>
          </div>
        </div>

        <div className="card span-4">
          <p className="eyebrow" style={{ margin: 0 }}>Last 30 days</p>
          <h3 className="h2" style={{ marginTop: 6, marginBottom: 18 }}>Consistency</h3>
          <StreakBars/>
          <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div>
              <div style={{ fontFamily: 'var(--ff-serif)', fontSize: 28, fontWeight: 500 }}>86%</div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-3)' }}>Days active</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--ff-serif)', fontSize: 28, fontWeight: 500 }}>42<span style={{ fontSize: 14, color: 'var(--text-3)' }}>m</span></div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-3)' }}>Avg / day</div>
            </div>
          </div>
        </div>
      </div>

      {/* TASKS + LEADERBOARD */}
      <div className="grid cols-12" style={{ marginBottom: 32 }}>
        <div className="card span-7 flush">
          <div className="card-hd">
            <span className="ttl">Up next</span>
            <span className="sub">{window.TASKS.length} tasks · assigned by Ms. Shahlo</span>
          </div>
          <div style={{ padding: '0 var(--pad) var(--pad)' }}>
            {window.TASKS.map((t, i) => (
              <div key={i} className="list-row" onClick={() => setRoute('test')}>
                <span className="num">0{i + 1}</span>
                <div className="body">
                  <div className="ttl">{t.t}</div>
                  <div className="meta"><b>{t.d}</b> &nbsp;·&nbsp; {t.kind} &nbsp;·&nbsp; {t.min} min</div>
                </div>
                <span className="chip">{t.kind}</span>
                <Icon name="arrow-right" size={14}/>
              </div>
            ))}
          </div>
        </div>

        <div className="card span-5">
          <div className="flex jcb aic" style={{ marginBottom: 10 }}>
            <div>
              <p className="eyebrow" style={{ margin: 0 }}>Group · SP-IELTS 1</p>
              <h3 className="h2" style={{ marginTop: 6, marginBottom: 0 }}>Leaderboard</h3>
            </div>
            <span className="chip">This month</span>
          </div>
          {window.LEADERBOARD.map((r, i) => (
            <div key={i} className={`leader-row`}>
              <span className={`rk ${r.me ? 'me' : ''}`}>{String(i + 1).padStart(2, '0')}</span>
              <span className={`nm ${r.me ? 'me' : ''}`}>{r.nm}{r.me ? <span style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, color: 'var(--accent)', marginLeft: 8, letterSpacing: '0.1em' }}>YOU</span> : null}</span>
              <span className="sc">{r.sc.toFixed(1)}</span>
              <span className="stk"><Icon name="flame" size={10}/> {r.stk}d</span>
            </div>
          ))}
        </div>
      </div>

      {/* RECENT */}
      <div className="divider"><span>Recent activity</span></div>
      <div className="card flush">
        <table className="tbl">
          <thead>
            <tr>
              <th>Test</th><th>Type</th><th style={{ textAlign: 'right' }}>Score</th><th style={{ textAlign: 'right' }}>Band</th><th>When</th><th>Duration</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            {window.RECENT.map((r, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 500 }}>{r.test}</td>
                <td><span className="chip" style={{ fontSize: 9.5 }}>{r.type}</span></td>
                <td style={{ textAlign: 'right', fontFamily: 'var(--ff-mono)' }}>
                  {r.score !== null && r.max ? `${r.score}/${r.max}` : '—'}
                </td>
                <td style={{ textAlign: 'right', fontFamily: 'var(--ff-serif)', fontSize: 17, fontWeight: 500 }}>
                  {r.band != null ? r.band.toFixed(1) : '—'}
                </td>
                <td style={{ color: 'var(--text-2)' }}>{r.when}</td>
                <td style={{ fontFamily: 'var(--ff-mono)', fontSize: 12, color: 'var(--text-2)' }}>{r.dur}</td>
                <td>
                  {r.status === 'cancelled' ? <span className="chip danger">cancelled</span> :
                   r.status === 'graded' ? <span className="chip on">graded</span> :
                   <span className="chip">completed</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* LIBRARY PEEK */}
      <div className="divider"><span>From the library</span></div>
      <div className="grid cols-3">
        {window.PODCASTS.slice(0, 3).map((p, i) => (
          <div key={i} className="media-card" onClick={() => setRoute('podcasts')}>
            <div className="thumb">
              <span className="badge">{p.cat}</span>
              <span className="time">{p.min} min</span>
              <div className="play"><Icon name="play" size={16}/></div>
            </div>
            <div className="body">
              <div className="cat">Podcast</div>
              <div className="t">{p.t}</div>
              <div className="f"><span>{p.host}</span><span>listen →</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, { Dashboard });
