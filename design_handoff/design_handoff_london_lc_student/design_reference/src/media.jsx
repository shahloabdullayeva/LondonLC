/* global React */
const { useState: useSM, useEffect: useEM, useRef: useRM } = React;

// ========== PODCASTS ==========
const Podcasts = ({ setRoute }) => {
  const [cur, setCur] = useSM(0);
  const p = window.PODCASTS[cur];

  return (
    <div className="page page-in">
      <p className="eyebrow">Library · Audio</p>
      <h1 className="h1">Podcasts <em>& episodes</em></h1>
      <p className="lede" style={{ marginTop: 16, marginBottom: 32 }}>
        English-learning episodes curated weekly — BBC 6 Minute English, TED-Ed, and longer TED talks for advanced listeners.
      </p>

      <div className="grid" style={{ gridTemplateColumns: '320px 1fr 300px', gap: 24 }}>
        {/* episode list */}
        <div className="card flush" style={{ maxHeight: 580, overflowY: 'auto' }}>
          <div className="card-hd" style={{ paddingBottom: 14 }}>
            <span className="sub">Episodes · {window.PODCASTS.length}</span>
          </div>
          {window.PODCASTS.map((ep, i) => (
            <div key={i} onClick={() => setCur(i)} style={{
              padding: '14px 20px', borderTop: '1px solid var(--line)',
              background: i === cur ? 'var(--surface-2)' : 'transparent',
              borderLeft: i === cur ? '2px solid var(--accent)' : '2px solid transparent',
              cursor: 'pointer',
            }}>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 9.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 4 }}>
                {ep.cat}{ep.new ? <span style={{ color: 'var(--accent)', marginLeft: 8 }}>● NEW</span> : null}
              </div>
              <div style={{ fontFamily: 'var(--ff-serif)', fontSize: 15, fontWeight: 500, letterSpacing: '-0.005em', lineHeight: 1.3, marginBottom: 4 }}>
                {ep.t}
              </div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10.5, color: 'var(--text-3)' }}>
                {ep.min} min · {ep.host}
              </div>
            </div>
          ))}
        </div>

        {/* player */}
        <div className="card" style={{ padding: 32 }}>
          <p className="eyebrow">{p.cat}</p>
          <h2 style={{ fontFamily: 'var(--ff-serif)', fontSize: 34, fontWeight: 500, letterSpacing: '-0.01em', margin: '6px 0 10px', lineHeight: 1.15 }}>{p.t}</h2>
          <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 24 }}>
            Hosted by {p.host} · {p.min} minutes
          </div>

          <div style={{
            background: 'var(--surface-2)', border: '1px solid var(--line)', borderRadius: 10, padding: 24, marginBottom: 20,
            aspectRatio: '16 / 7', display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <svg viewBox="0 0 600 80" style={{ width: '100%', height: 60 }}>
              {Array.from({ length: 120 }).map((_, i) => {
                const h = 8 + Math.abs(Math.sin(i * 0.7) * 26) + Math.abs(Math.sin(i * 0.11) * 10);
                const active = i < 38;
                return <rect key={i} x={i * 5} y={40 - h / 2} width="2.5" height={h} fill={active ? 'var(--accent)' : 'var(--line-2)'} rx="1"/>;
              })}
            </svg>
          </div>

          <div className="flex aic jcb" style={{ marginBottom: 20 }}>
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 12, color: 'var(--text-2)' }}>01:54</div>
            <div className="flex aic g16">
              <button className="btn icon ghost"><Icon name="arrow-left" size={16}/></button>
              <button className="btn primary" style={{ width: 52, height: 52, borderRadius: '50%', padding: 0, justifyContent: 'center' }}>
                <Icon name="play" size={18}/>
              </button>
              <button className="btn icon ghost"><Icon name="arrow-right" size={16}/></button>
            </div>
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 12, color: 'var(--text-2)' }}>{String(p.min).padStart(2, '0')}:00</div>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <span className="chip">0.75×</span>
            <span className="chip on">1.0×</span>
            <span className="chip">1.25×</span>
            <span className="chip">1.5×</span>
            <span className="chip" style={{ marginLeft: 'auto' }}>Show transcript</span>
          </div>
        </div>

        {/* about */}
        <div className="card">
          <p className="eyebrow">About this episode</p>
          <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6, margin: 0 }}>
            Neil and Rob discuss how much sleep we really need and teach some useful vocabulary around rest and fatigue — including "to nod off", "a power nap", and "sleep-deprived".
          </p>

          <div className="divider" style={{ margin: '24px 0 14px' }}><span>Key vocab</span></div>
          {['to nod off', 'power nap', 'sleep-deprived', 'circadian rhythm', 'insomnia'].map((w, i) => (
            <div key={i} style={{ padding: '8px 0', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'var(--ff-serif)', fontSize: 15 }}>{w}</span>
              <button className="btn sm ghost" style={{ padding: '2px 8px', fontSize: 10.5 }}>+ save</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ========== ARTICLES ==========
const Articles = () => {
  const cats = ['All', 'Technology', 'Geopolitics', 'Politics', 'Business', 'Economics', 'Science'];
  const [cat, setCat] = useSM('All');
  const list = cat === 'All' ? window.ARTICLES : window.ARTICLES.filter(a => a.cat === cat);

  return (
    <div className="page page-in">
      <p className="eyebrow">Library · Long reads</p>
      <h1 className="h1">Articles <em>& guides</em></h1>
      <p className="lede" style={{ marginTop: 16, marginBottom: 28 }}>
        Selected reading for band 6.5 and above. Every article is tagged by difficulty and topic, and comes with guided comprehension questions.
      </p>

      <div className="flex g8" style={{ flexWrap: 'wrap', marginBottom: 28 }}>
        {cats.map(c => (
          <span key={c} className={`chip ${cat === c ? 'on' : ''}`} style={{ cursor: 'pointer' }} onClick={() => setCat(c)}>{c}</span>
        ))}
      </div>

      {cat === 'All' ? (
        <div className="card flush" style={{ marginBottom: 28 }}>
          <div className="grid" style={{ gridTemplateColumns: '1.2fr 1fr', gap: 0 }}>
            <div style={{
              background: 'repeating-linear-gradient(135deg, var(--line-2) 0 1px, transparent 1px 11px), var(--surface-2)',
              minHeight: 360,
              display: 'grid', placeItems: 'center',
              fontFamily: 'var(--ff-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-3)',
            }}>
              [ featured image ]
            </div>
            <div style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Editor's pick · Technology</div>
              <h2 style={{ fontFamily: 'var(--ff-serif)', fontSize: 38, fontWeight: 500, letterSpacing: '-0.015em', lineHeight: 1.1, margin: '0 0 16px' }}>
                How the young use AI matters more than for how long
              </h2>
              <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.6, margin: '0 0 20px', maxWidth: '44ch' }}>
                A generation reaching adulthood with always-on AI assistants is developing new reading and writing habits — some generative, some dangerously passive.
              </p>
              <div className="flex g16" style={{ fontFamily: 'var(--ff-mono)', fontSize: 10.5, color: 'var(--text-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20 }}>
                <span>Sarra Sigaier · The Economist</span><span>·</span><span>6 min read</span><span>·</span><span>band 7.5</span>
              </div>
              <button className="btn primary" style={{ alignSelf: 'flex-start' }}>Read article <Icon name="arrow-right" size={13}/></button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="grid cols-3">
        {list.map((a, i) => (
          <div key={i} className="media-card">
            <div className="thumb">
              <span className="badge">{a.cat}</span>
              <span className="time">{a.min} min</span>
            </div>
            <div className="body">
              <div className="cat">{a.cat}</div>
              <div className="t">{a.t}</div>
              <div className="f"><span>{a.src}</span><span>read →</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ========== MUSIC — YouTube embed based ==========
const Music = () => {
  const [cur, setCur] = useSM(0);
  const moods = ['All', 'Focus', 'Deep focus', 'Study', 'Calm', 'Morning', 'Background'];
  const [mood, setMood] = useSM('All');
  const list = mood === 'All' ? window.MUSIC : window.MUSIC.filter(m => m.mood === mood);
  const track = window.MUSIC[cur];

  return (
    <div className="page page-in">
      <p className="eyebrow">Library · Study Sounds · via YouTube</p>
      <h1 className="h1"><em>Music</em> for studying</h1>
      <p className="lede" style={{ marginTop: 16, marginBottom: 32 }}>
        Quiet, lyric-free pieces curated to sit beneath your studying — not on top of it. Streamed directly from YouTube, so nothing lives on our servers.
      </p>

      <div className="flex g8" style={{ marginBottom: 24, flexWrap: 'wrap' }}>
        {moods.map(m => (
          <span key={m} className={`chip ${mood === m ? 'on' : ''}`} style={{ cursor: 'pointer' }} onClick={() => setMood(m)}>{m}</span>
        ))}
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1.5fr 1fr', gap: 24, marginBottom: 24 }}>
        {/* Player */}
        <div className="card" style={{ padding: 24 }}>
          <div className="flex jcb aic" style={{ marginBottom: 12 }}>
            <div>
              <p className="eyebrow" style={{ margin: 0 }}>Now playing · {track.channel}</p>
              <h2 style={{ fontFamily: 'var(--ff-serif)', fontSize: 24, fontWeight: 500, letterSpacing: '-0.01em', margin: '6px 0 0', lineHeight: 1.2 }}>{track.t}</h2>
            </div>
            {track.live ? <span className="chip danger">● LIVE</span> : <span className="chip">{typeof track.min === 'number' ? `${track.min} min` : track.min}</span>}
          </div>

          <div style={{
            aspectRatio: '16 / 9',
            borderRadius: 10,
            overflow: 'hidden',
            border: '1px solid var(--line-2)',
            background: '#000',
            marginTop: 14,
          }}>
            <iframe
              key={track.yt}
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/${track.yt}?rel=0&modestbranding=1`}
              title={track.t}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ display: 'block', border: 0 }}
            />
          </div>

          <div className="flex g8" style={{ marginTop: 14, flexWrap: 'wrap' }}>
            <span className="chip">{track.mood}</span>
            <span className="chip">YouTube</span>
            <a href={`https://www.youtube.com/watch?v=${track.yt}`} target="_blank" rel="noreferrer" className="chip" style={{ marginLeft: 'auto', cursor: 'pointer' }}>
              open on YouTube ↗
            </a>
          </div>
        </div>

        {/* Queue */}
        <div className="card flush" style={{ maxHeight: 520, overflowY: 'auto' }}>
          <div className="card-hd" style={{ paddingBottom: 10 }}>
            <span className="ttl" style={{ fontSize: 18 }}>Queue</span>
            <span className="sub">{list.length} tracks</span>
          </div>

          {list.map((m) => {
            const i = window.MUSIC.indexOf(m);
            const active = i === cur;
            return (
              <div key={i}
                onClick={() => setCur(i)}
                style={{
                  display: 'grid', gridTemplateColumns: '64px 1fr auto',
                  alignItems: 'center', gap: 12,
                  padding: '12px 18px',
                  borderTop: '1px solid var(--line)',
                  cursor: 'pointer',
                  background: active ? 'var(--surface-2)' : 'transparent',
                  borderLeft: active ? '2px solid var(--accent)' : '2px solid transparent',
                }}
              >
                <div style={{
                  width: 64, aspectRatio: '16 / 9', borderRadius: 4, overflow: 'hidden',
                  background: `url(https://i.ytimg.com/vi/${m.yt}/mqdefault.jpg) center / cover, var(--surface-2)`,
                  position: 'relative', border: '1px solid var(--line-2)',
                }}>
                  {active ? (
                    <div style={{
                      position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
                      background: 'rgba(0,0,0,0.45)', color: 'var(--accent)',
                    }}>
                      <Icon name="play" size={13}/>
                    </div>
                  ) : null}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--ff-serif)', fontSize: 14, fontWeight: 500, letterSpacing: '-0.005em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {m.t}
                  </div>
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, color: 'var(--text-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {m.channel} · {m.mood}
                  </div>
                </div>
                <span style={{ fontFamily: 'var(--ff-mono)', fontSize: 10.5, color: m.live ? 'var(--danger)' : 'var(--text-3)' }}>
                  {m.live ? 'LIVE' : typeof m.min === 'number' ? `${m.min}m` : m.min}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10.5, color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'center' }}>
        Streamed from YouTube · no audio stored on London · LC servers
      </div>
    </div>
  );
};

Object.assign(window, { Podcasts, Articles, Music });
