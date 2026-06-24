/* =========================================================================
   ui.jsx — shared primitives, icons, strategy-notes, scroll reveal
   Exposes everything on window for the other babel scripts.
   ========================================================================= */
const { useState, useEffect, useRef, useCallback } = React;

/* ---------- Scroll reveal (robust: shows in-view immediately, safety net) ---------- */
function useReveal() {
  useEffect(() => {
    const reveal = (el) => el && el.classList.add('in');
    const els = Array.from(document.querySelectorAll('.reveal'));
    if (!('IntersectionObserver' in window)) {els.forEach(reveal);return;}
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {if (en.isIntersecting) {reveal(en.target);io.unobserve(en.target);}});
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
    const vh = window.innerHeight || 800;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.95) reveal(el); // already on/near screen → reveal now
      else io.observe(el);
    });
    // safety: never leave content hidden if the observer misbehaves
    const t = setTimeout(() => els.forEach(reveal), 2200);
    return () => {io.disconnect();clearTimeout(t);};
  }, []);
}

/* ---------- Strategy notes ---------- */
function Note({ tag, why, copy, cro, mobile, dark }) {
  return (
    <div className={"note" + (dark ? " on-dark" : "")} aria-hidden="true">
      <span className="note-tag">✦ Strategy · {tag}</span>
      <dl className="grid2">
        {why && <div><dt>Why this section</dt><dd>{why}</dd></div>}
        {cro && <div><dt>CRO trigger</dt><dd>{cro}</dd></div>}
        {copy && <div><dt>Copy direction</dt><dd>{copy}</dd></div>}
        {mobile && <div><dt>Mobile UX</dt><dd>{mobile}</dd></div>}
      </dl>
    </div>);

}

function NotesToggle() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('notes-on', on);
  }, [on]);
  return (
    <button className="notes-toggle" onClick={() => setOn((v) => !v)} aria-pressed={on}>
      <span className="dot"></span>
      {on ? "Hide strategy notes" : "Show strategy notes"}
    </button>);

}

/* ---------- Section heading ---------- */
function SecHead({ eyebrow, title, lede, center, dark, children }) {
  return (
    <div className={"sec-head reveal" + (center ? " center" : "")}>
      {eyebrow && <span className={"eyebrow" + (dark ? " on-dark" : "")}>{eyebrow}</span>}
      <h2 className="h2">{title}</h2>
      {lede && <p className="lede">{lede}</p>}
      {children}
    </div>);

}

/* ---------- Icons (stroke line set, brand-neutral) ---------- */
const I = {
  arrow: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>,
  check: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 13l4 4L19 7" /></svg>,
  checkCircle: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="11" fill="rgba(79,70,229,.1)" /><path d="M7 12.5l3.2 3.2L17 9" stroke="var(--indigo)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  /* services */
  tag: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 7v5.2a2 2 0 0 0 .6 1.4l7 7a2 2 0 0 0 2.8 0l5.6-5.6a2 2 0 0 0 0-2.8l-7-7A2 2 0 0 0 12.2 4H7a4 4 0 0 0-4 4Z" /><circle cx="8" cy="8.5" r="1.4" fill="currentColor" stroke="none" /></svg>,
  box: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 8.5 12 3 3 8.5v7L12 21l9-5.5v-7Z" /><path d="m3 8.5 9 5.5 9-5.5M12 14v7" /></svg>,
  truck: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M2 7.5A1.5 1.5 0 0 1 3.5 6H14a1 1 0 0 1 1 1v9H4" /><path d="M15 9h3.4a2 2 0 0 1 1.7 1l1.6 2.6a2 2 0 0 1 .3 1V16h-3" /><circle cx="7" cy="17.5" r="2" /><circle cx="17.5" cy="17.5" r="2" /></svg>,
  label: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M7 10h6M7 14h4" /><path d="M17 9.5v5" /></svg>,
  store: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 9V5h16v4M4 9l-1 0 1.2-3.2A1 1 0 0 1 5.2 5M4 9a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0M4 9v10h16V9" /><path d="M9 19v-5h6v5" /></svg>,
  layers: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></svg>,
  /* trust */
  shield: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3 5 6v5.5c0 4.5 3 7.5 7 9.5 4-2 7-5 7-9.5V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></svg>,
  clock: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>,
  pin: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>,
  eye: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>,
  chart: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 19V5M4 19h16M8 16v-4M12 16V8M16 16v-6" /></svg>,
  handshake: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m11 17 2 2a1.4 1.4 0 0 0 2-2l3-3" /><path d="M3 11 7 7l4 1 2-2 5 3 3-1" /><path d="m7 13 3 3M3 11l3 5" /></svg>,
  headset: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><rect x="2.5" y="13" width="4" height="6" rx="1.6" /><rect x="17.5" y="13" width="4" height="6" rx="1.6" /><path d="M20 19a4 4 0 0 1-4 3h-2" /></svg>,
  /* misc */
  phone: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 4h3.5l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5V20a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>,
  mail: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p} style={{ width: "1px" }}><rect x="3" y="5" width="18" height="14" rx="2.5" style={{ opacity: "1", height: "100px", width: "100px" }} /><path d="m4 7 8 6 8-6" /></svg>,
  calc: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="4" y="3" width="16" height="18" rx="2.5" /><path d="M8 7h8M8 12h.01M12 12h.01M16 12v5M8 16h.01M12 16h.01" /></svg>,
  menu: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>,
  close: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>,
  chevron: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m6 9 6 6 6-6" /></svg>,
  spark: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></svg>,
  globe: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" /></svg>,
  refresh: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 4v4h-4M21 12a9 9 0 0 1-15 6.7L3 16M3 20v-4h4" /></svg>,
  doc: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></svg>
};

/* Wordmark used as a fallback / footer mark */
function Wordmark({ light }) {
  return (
    <span className="lyzoo-mark" style={{ color: light ? "#fff" : "var(--ink)" }}>
      <span className="dotmark" aria-hidden="true"></span>Lyzoo
    </span>);

}

Object.assign(window, { useReveal, Note, NotesToggle, SecHead, I, Wordmark, useState, useEffect, useRef, useCallback });