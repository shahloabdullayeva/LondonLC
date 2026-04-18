/* global React, ReactDOM */
const { useState: useSA, useEffect: useEA } = React;

const App = () => {
  const [route, setRoute] = useSA(() => {
    try { return localStorage.getItem('llc-route') || 'dashboard'; } catch (e) { return 'dashboard'; }
  });
  const [editing, setEditing] = useSA(false);
  const [tw, setTw] = useSA(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('llc-tweaks') || 'null');
      if (saved) return { ...window.TWEAK_DEFAULTS, ...saved };
    } catch (e) {}
    return window.TWEAK_DEFAULTS;
  });

  useEA(() => {
    document.documentElement.setAttribute('data-theme', tw.theme);
    document.documentElement.setAttribute('data-font', tw.font);
    document.documentElement.setAttribute('data-density', tw.density);
    document.documentElement.setAttribute('data-sidebar', tw.sidebar);
  }, [tw]);

  useEA(() => {
    try { localStorage.setItem('llc-route', route); } catch (e) {}
  }, [route]);

  // Edit-mode protocol with host
  useEA(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setEditing(true);
      if (d.type === '__deactivate_edit_mode') setEditing(false);
    };
    window.addEventListener('message', onMsg);
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (err) {}
    return () => window.removeEventListener('message', onMsg);
  }, []);

  // Keyboard nav
  useEA(() => {
    const onKey = (e) => {
      if (e.key === '?') setEditing(v => !v);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  let page;
  switch (route) {
    case 'dashboard': page = <window.Dashboard setRoute={setRoute}/>; break;
    case 'results':   page = <window.Results/>; break;
    case 'profile':   page = <window.Profile/>; break;
    case 'reading':   page = <window.PracticeHub kind="reading" setRoute={setRoute}/>; break;
    case 'listening': page = <window.PracticeHub kind="listening" setRoute={setRoute}/>; break;
    case 'writing':   page = <window.Writing/>; break;
    case 'articles':  page = <window.Articles/>; break;
    case 'podcasts':  page = <window.Podcasts setRoute={setRoute}/>; break;
    case 'music':     page = <window.Music/>; break;
    case 'messages':  page = <window.Messages/>; break;
    case 'test':      page = <window.PracticeTest setRoute={setRoute}/>; break;
    default: page = <window.Dashboard setRoute={setRoute}/>;
  }

  return (
    <div className="app" data-screen-label={route}>
      <window.Sidebar route={route} setRoute={setRoute}/>
      <main className="main">
        <window.Topbar route={route} setRoute={setRoute}/>
        {page}
      </main>

      <window.Tweaks editing={editing} setEditing={setEditing} state={tw} setState={setTw}/>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
