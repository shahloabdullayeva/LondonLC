/* global React */
const { useState: useS1, useEffect: useE1 } = React;

// ========== ICONS ==========
const Icon = ({ name, size = 16 }) => {
  const p = {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round',
  };
  switch (name) {
    case 'home':      return <svg {...p}><path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></svg>;
    case 'chart':     return <svg {...p}><path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/></svg>;
    case 'book':      return <svg {...p}><path d="M4 4h10a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4z"/><path d="M18 20V8a4 4 0 0 1 4-4"/></svg>;
    case 'head':      return <svg {...p}><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/></svg>;
    case 'pen':       return <svg {...p}><path d="M4 20h4L20 8l-4-4L4 16z"/><path d="M14 6l4 4"/></svg>;
    case 'article':   return <svg {...p}><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>;
    case 'mic':       return <svg {...p}><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>;
    case 'music':     return <svg {...p}><path d="M9 17V5l10-2v12"/><circle cx="6" cy="17" r="3"/><circle cx="16" cy="15" r="3"/></svg>;
    case 'msg':       return <svg {...p}><path d="M4 5h16v12H8l-4 4z"/></svg>;
    case 'user':      return <svg {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>;
    case 'logout':    return <svg {...p}><path d="M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4"/><path d="M10 8l-4 4 4 4M6 12h11"/></svg>;
    case 'settings':  return <svg {...p}><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.5-2.4.9a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.5a7 7 0 0 0-2 1.2l-2.4-.9-2 3.5 2 1.5a7 7 0 0 0 0 2.4l-2 1.5 2 3.5 2.4-.9a7 7 0 0 0 2 1.2L10 21h4l.5-2.5a7 7 0 0 0 2-1.2l2.4.9 2-3.5-2-1.5c.07-.4.1-.8.1-1.2z"/></svg>;
    case 'search':    return <svg {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>;
    case 'flame':     return <svg {...p}><path d="M12 3c0 4-4 5-4 9a4 4 0 0 0 8 0c0-2-1-3-1-5 3 2 4 4 4 7a7 7 0 0 1-14 0c0-5 4-7 7-11z"/></svg>;
    case 'play':      return <svg {...p} fill="currentColor" stroke="none"><path d="M6 4l14 8-14 8z"/></svg>;
    case 'arrow-right': return <svg {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case 'arrow-left':  return <svg {...p}><path d="M19 12H5M11 6l-6 6 6 6"/></svg>;
    case 'plus':      return <svg {...p}><path d="M12 5v14M5 12h14"/></svg>;
    case 'check':     return <svg {...p}><path d="M5 12l4 4 10-10"/></svg>;
    case 'x':         return <svg {...p}><path d="M6 6l12 12M18 6 6 18"/></svg>;
    case 'send':      return <svg {...p}><path d="M3 12 21 3l-6 18-3-8z"/></svg>;
    case 'clock':     return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case 'sparkle':   return <svg {...p}><path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18"/></svg>;
    default: return <svg {...p}><rect x="4" y="4" width="16" height="16"/></svg>;
  }
};

const NAV = [
  { sec: 'Overview', items: [
    { k: 'dashboard', lab: 'Dashboard', ico: 'home' },
    { k: 'results', lab: 'My Results', ico: 'chart' },
    { k: 'profile', lab: 'My Profile', ico: 'user' },
  ]},
  { sec: 'Practice', items: [
    { k: 'reading', lab: 'Reading', ico: 'book', chev: true },
    { k: 'listening', lab: 'Listening', ico: 'head', chev: true },
    { k: 'writing', lab: 'Writing', ico: 'pen', chev: true },
  ]},
  { sec: 'Library', items: [
    { k: 'articles', lab: 'Articles', ico: 'article' },
    { k: 'podcasts', lab: 'Podcasts', ico: 'mic' },
    { k: 'music', lab: 'Music', ico: 'music' },
  ]},
  { sec: 'Connect', items: [
    { k: 'messages', lab: 'Messages', ico: 'msg', pill: '2' },
  ]},
];

const Sidebar = ({ route, setRoute }) => (
  <aside className="sb">
    <div className="sb-brand">
      <span className="name">London</span>
      <span className="dot"/>
      <span className="lc">LC</span>
    </div>

    <div className="sb-me">
      <div className="av">{window.ME.initials}</div>
      <div className="info">
        <div className="nm">{window.ME.name}</div>
        <div className="gp">{window.ME.group}</div>
      </div>
    </div>

    {NAV.map(s => (
      <React.Fragment key={s.sec}>
        <div className="sb-section">{s.sec}</div>
        {s.items.map(i => (
          <div key={i.k}
            className={`sb-link ${route === i.k ? 'active' : ''}`}
            onClick={() => setRoute(i.k)}
            title={i.lab}
          >
            <span className="ico"><Icon name={i.ico}/></span>
            <span className="lab">{i.lab}</span>
            {i.pill ? <span className="pill">{i.pill}</span> : null}
            {i.chev ? <span className="chev">›</span> : null}
          </div>
        ))}
      </React.Fragment>
    ))}

    <div className="sb-foot">
      <div className="sb-link">
        <span className="ico"><Icon name="logout"/></span>
        <span className="lab">Sign Out</span>
      </div>
    </div>
  </aside>
);

// Topbar: breadcrumb + quick search
const Topbar = ({ route, setRoute }) => {
  const labels = {
    dashboard: 'Dashboard', results: 'My Results', profile: 'Profile',
    reading: 'Reading', listening: 'Listening', writing: 'Writing',
    articles: 'Articles', podcasts: 'Podcasts', music: 'Music',
    messages: 'Messages', test: 'Practice Test',
  };
  return (
    <div className="topbar">
      <div className="crumbs">
        London · LC &nbsp;/&nbsp; Student &nbsp;/&nbsp; <b>{labels[route] || route}</b>
      </div>
      <div className="tools">
        <button className="btn ghost sm"><Icon name="search" size={13}/> <span style={{opacity:0.7, marginLeft:4}}>Search</span> <span className="kbd" style={{marginLeft:8}}>⌘K</span></button>
      </div>
    </div>
  );
};

Object.assign(window, { Icon, Sidebar, Topbar });
