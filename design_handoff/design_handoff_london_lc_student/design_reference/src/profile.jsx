/* global React */
const { useState: useSPR } = React;

// ========== PROFILE ==========
const Profile = () => {
  const badges = [
    { n: 'First Week', on: true }, { n: '10-day Streak', on: true },
    { n: 'Band 6', on: true }, { n: 'Reader (10 passages)', on: true },
    { n: '50 Flashcards', on: true }, { n: 'Band 7', on: false },
    { n: '30-day Streak', on: false }, { n: 'Perfect Week', on: false },
  ];

  return (
    <div className="page page-in">
      <p className="eyebrow">Account</p>
      <h1 className="h1">My <em>Profile</em></h1>

      <div className="grid cols-12" style={{ marginTop: 32 }}>
        <div className="card span-4">
          <div className="flex g16" style={{ marginBottom: 20 }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--accent)', color: 'var(--accent-ink)', display: 'grid', placeItems: 'center', fontFamily: 'var(--ff-serif)', fontSize: 26, fontWeight: 500 }}>
              {window.ME.initials}
            </div>
            <div>
              <div style={{ fontFamily: 'var(--ff-serif)', fontSize: 22, fontWeight: 500 }}>{window.ME.name}</div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{window.ME.username} · {window.ME.group}</div>
            </div>
          </div>

          <hr style={{ margin: '16px 0' }}/>

          {[
            ['Full name', 'Aziza Karimova'],
            ['Username', 'AzizaK22'],
            ['Group', 'SP-IELTS 1'],
            ['Teacher', 'Ms. Shahlo'],
            ['Joined', '14 March 2026'],
            ['Target band', '7.0 · 30 Jun 2026'],
          ].map(([k, v], i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--line)', fontSize: 13 }}>
              <span style={{ color: 'var(--text-3)', fontFamily: 'var(--ff-mono)', fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', alignSelf: 'center' }}>{k}</span>
              <span style={{ fontWeight: 500 }}>{v}</span>
            </div>
          ))}

          <button className="btn ghost" style={{ width: '100%', marginTop: 20 }}>Change password</button>
        </div>

        <div className="span-8">
          <div className="grid cols-4" style={{ marginBottom: 20 }}>
            <div className="stat"><span className="lab">Current</span><span className="val">6.5</span><span className="trend up">↑ 1.5</span></div>
            <div className="stat"><span className="lab">Goal</span><span className="val">7.0</span><span className="trend">Jun 30</span></div>
            <div className="stat"><span className="lab">Streak</span><span className="val">12d</span><span className="trend">PB 14</span></div>
            <div className="stat"><span className="lab">Hours</span><span className="val">41</span><span className="trend">this month</span></div>
          </div>

          <div className="card" style={{ marginBottom: 20 }}>
            <p className="eyebrow" style={{ margin: 0 }}>Skill breakdown</p>
            <h3 className="h2" style={{ marginTop: 6, marginBottom: 20 }}>Where you are</h3>
            {[
              { k: 'Reading', v: 7.0 }, { k: 'Listening', v: 6.5 },
              { k: 'Writing', v: 6.0 }, { k: 'Speaking', v: 6.5 },
            ].map((c, i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <div className="flex jcb" style={{ fontSize: 14, marginBottom: 6 }}>
                  <span style={{ fontFamily: 'var(--ff-serif)', fontSize: 16, fontWeight: 500 }}>{c.k}</span>
                  <span style={{ fontFamily: 'var(--ff-mono)' }}>{c.v.toFixed(1)} / 9.0</span>
                </div>
                <div className="bar" style={{ height: 6 }}><span style={{ width: `${(c.v/9)*100}%` }}/></div>
              </div>
            ))}
          </div>

          <div className="card">
            <p className="eyebrow" style={{ margin: 0 }}>Achievements</p>
            <h3 className="h2" style={{ marginTop: 6, marginBottom: 18 }}>Badges · {badges.filter(b => b.on).length} of {badges.length}</h3>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {badges.map((b, i) => (
                <div key={i} style={{
                  border: '1px solid var(--line)',
                  borderRadius: 8,
                  padding: '16px 14px',
                  textAlign: 'center',
                  background: b.on ? 'var(--surface-2)' : 'transparent',
                  opacity: b.on ? 1 : 0.4,
                }}>
                  <div style={{
                    width: 36, height: 36, margin: '0 auto 10px',
                    borderRadius: '50%',
                    border: `1px solid ${b.on ? 'var(--accent)' : 'var(--line-2)'}`,
                    display: 'grid', placeItems: 'center',
                    background: b.on ? 'color-mix(in oklab, var(--accent) 12%, transparent)' : 'transparent',
                    color: b.on ? 'var(--accent)' : 'var(--text-3)',
                  }}>
                    <Icon name={b.on ? 'check' : 'x'} size={14}/>
                  </div>
                  <div style={{ fontFamily: 'var(--ff-serif)', fontSize: 13, fontWeight: 500, letterSpacing: '-0.005em' }}>{b.n}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { Profile });
