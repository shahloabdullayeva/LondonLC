/* global React */
const { useState: useST, useEffect: useET } = React;

// ========== TWEAKS PANEL ==========
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "terminal",
  "font": "editorial",
  "density": "spacious",
  "sidebar": "expanded"
}/*EDITMODE-END*/;

const Tweaks = ({ editing, setEditing, state, setState }) => {
  const set = (k, v) => {
    const next = { ...state, [k]: v };
    setState(next);
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
    } catch (e) {}
    try { localStorage.setItem('llc-tweaks', JSON.stringify(next)); } catch (e) {}
  };

  if (!editing) return null;

  const Seg = ({ k, options }) => (
    <div className="seg">
      {options.map(([val, lab]) => (
        <button key={val} className={state[k] === val ? 'on' : ''} onClick={() => set(k, val)}>{lab}</button>
      ))}
    </div>
  );

  return (
    <div className="tweaks-panel">
      <h3>
        Tweaks
        <button className="btn icon ghost" onClick={() => setEditing(false)} style={{ padding: 4 }}>
          <Icon name="x" size={14}/>
        </button>
      </h3>

      <div className="group">
        <label>Theme</label>
        <div className="swatches">
          <button className={`academy ${state.theme === 'academy' ? 'on' : ''}`} onClick={() => set('theme', 'academy')}>Academy</button>
          <button className={`terminal ${state.theme === 'terminal' ? 'on' : ''}`} onClick={() => set('theme', 'terminal')}>Terminal</button>
          <button className={`dusk ${state.theme === 'dusk' ? 'on' : ''}`} onClick={() => set('theme', 'dusk')}>Dusk</button>
        </div>
      </div>

      <div className="group">
        <label>Font pair</label>
        <Seg k="font" options={[
          ['editorial', 'Editorial'],
          ['serif', 'Serif'],
          ['modern', 'Modern'],
          ['grotesk', 'Grotesk'],
        ]}/>
      </div>

      <div className="group">
        <label>Density</label>
        <Seg k="density" options={[
          ['dense', 'Dense'],
          ['balanced', 'Balanced'],
          ['spacious', 'Spacious'],
        ]}/>
      </div>

      <div className="group">
        <label>Sidebar</label>
        <Seg k="sidebar" options={[
          ['expanded', 'Expanded'],
          ['icon', 'Icon-only'],
        ]}/>
      </div>
    </div>
  );
};

Object.assign(window, { Tweaks, TWEAK_DEFAULTS });
