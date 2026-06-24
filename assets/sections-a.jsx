/* =========================================================================
   sections-a.jsx Header, Hero, TrustStrip, Services, WhyUs
   ========================================================================= */

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "How it works" },
  { href: "#couriers", label: "Couriers" },
  { href: "#faq", label: "FAQ" },
];

const NAV_CALC = [
  { href: "#services", label: "Services" },
  { href: "#calculator", label: "Calculator" },
  { href: "#process", label: "How it works" },
  { href: "#couriers", label: "Couriers" },
  { href: "#faq", label: "FAQ" },
];

function Header({ onEnquire, minimal, navItems }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);
  return (
    <header className={"site-header" + (scrolled ? " scrolled" : "")}>
      <div className="wrap nav">
        <a className="brand" href="#top" aria-label="Lyzoo home">
<img src="data:image/png;base64,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5ZVYIiIioj2ousRqKrorsYiwHIYJ0Mg+T8DzSiwRERHRHlRdYiES2Y1dTtwjNosj1QjLtvJKLBEREdGeVF1iUyWJcIktP2KTOPJeizYLiyoOthkRERERVaq6xCIlarPQwJVsFEdO/VabhcZLykZEREREVKnqEktERERE1GgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4LLFERERElDgssURERESUOCyxRERERJQ4aoM9CdqLZ6nIj20eCq8dfcMty2wcN0FbIVCnfTYPhcd1fcPpM2xMRESUFEFw+T6l0tZ9U6Wt+0FkX3XSXNLUWtXSms2bZ64dHv7MWvsxVInncM9YYieAJZYovk5bcOmBpRmj/2jzamwenXVZPv/JDTZvtK7F3Sd51UU2rxrw+/5lvdfauBbZ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" alt="Lyzoo" style={{height:38,width:'auto',display:'block'}}/>
        </a>
        {!minimal && (
          <nav className="nav-links">
            {(navItems || NAV).map(n => <a key={n.href} href={n.href}>{n.label}</a>)}
          </nav>
        )}
        <div className="nav-cta">
          <a className="nav-phone" href="tel:+447440586966"><I.phone/>+44 7440 586966</a>
          <button className="btn btn-primary" onClick={onEnquire}>Get a quote <I.arrow className="arr"/></button>
          {!minimal && <button className="hamburger" onClick={() => setOpen(true)} aria-label="Open menu"><I.menu/></button>}
        </div>
      </div>
      <div className={"drawer" + (open ? " open" : "")}>
        <div className="drawer-scrim" onClick={() => setOpen(false)}></div>
        <div className="drawer-panel">
          <div className="drawer-head">
            <Wordmark/>
            <button onClick={() => setOpen(false)} aria-label="Close menu"><I.close/></button>
          </div>
          {(navItems || NAV).map(n => <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>)}
          <a href="tel:+447440586966" onClick={() => setOpen(false)}>+44 7440 586966</a>
          <button className="btn btn-primary btn-lg" style={{marginTop:16}} onClick={() => { setOpen(false); onEnquire(); }}>Get a quote <I.arrow className="arr"/></button>
        </div>
      </div>
    </header>
  );
}

function Hero({ onEnquire, onConsult, variant }) {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow reveal">Manchester-based fulfilment & Amazon prep</span>
          <h1 className="display reveal" style={{transitionDelay:'.05s'}}>
            Your stock, <span className="serif-i grad-ink">prepped, stored</span> & shipped without the chaos.
          </h1>
          <p className="lede reveal" style={{transitionDelay:'.1s'}}>
            UK 3PL and Amazon prep built for sellers who want fewer headaches and faster dispatch.
            Receiving, FNSKU labelling, FBA prep, FBM and e-commerce fulfilment all under one roof.
          </p>
          <div className="hero-cta reveal" style={{transitionDelay:'.15s'}}>
            <button className="btn btn-primary btn-lg" onClick={onEnquire}>
              {variant === 'calc' ? 'Get my custom quote' : 'Get a fulfilment quote'} <I.arrow className="arr"/>
            </button>
            <button className="btn btn-ghost btn-lg" onClick={onConsult}>Book a free consultation</button>
          </div>
          <div className="hero-trust reveal" style={{transitionDelay:'.2s'}}>
            <span className="ht"><I.shield/> Amazon-compliant prep</span>
            <span className="sep"></span>
            <span className="ht"><I.truck/> Evri · Royal Mail · DPD</span>
            <span className="sep"></span>
            <span className="ht"><I.eye/> Full transparency</span>
          </div>
          
        </div>
        <div className="hero-visual reveal" style={{transitionDelay:'.1s'}} aria-hidden="true">
          <div className="hv-mesh"></div>
          <div className="hv-stage">
            <div className="hv-ring r1"></div>
            <div className="hv-ring r2"></div>
            <div className="hv-core"><I.box className="glyph"/></div>
          </div>
          <div className="hv-card hv-c1">
            <span className="ico" style={{background:'linear-gradient(135deg,var(--indigo),var(--blue))'}}><I.label/></span>
            <div><div className="t">FNSKU labelled</div><div className="s">Amazon-compliant</div></div>
          </div>
          <div className="hv-card hv-c2">
            <span className="ico" style={{background:'linear-gradient(135deg,var(--blue),var(--cyan))'}}><I.truck/></span>
            <div><div className="t">Dispatched today</div><div className="s">Evri · RM · DPD</div></div>
          </div>
          <div className="hv-card hv-c3">
            <span className="ico" style={{background:'linear-gradient(135deg,var(--teal),var(--cyan))'}}><I.checkCircle/></span>
            <div><div className="t">Inspected & stored</div><div className="s">Live stock view</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

const COURIERS = [
  { name: "Evri", color: "#3edad8", desc: "Economy & nationwide parcels" },
  { name: "Royal Mail", color: "#103164", desc: "Tracked 24/48 & letterbox" },
  { name: "DPD", color: "#2c92d5", desc: "Next-day & premium delivery" },
];

function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="wrap row reveal">
        <span className="lbl">Integrated with leading UK couriers</span>
        <div className="courier-row">
          {COURIERS.map(c => (
            <span className="courier" key={c.name}><span className="blip" style={{background:c.color}}></span>{c.name}</span>
          ))}
          <span className="courier"><span className="blip" style={{background:'var(--lav)'}}></span>Amazon FBA / FBM</span>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: 'truck', g: 'linear-gradient(135deg,var(--cyan),var(--teal))', t: 'FBM Fulfilment', d: 'Seller-fulfilled orders picked, packed and dispatched via Evri, Royal Mail and DPD from our Manchester warehouse.' },
  { icon: 'store', g: 'linear-gradient(135deg,var(--indigo),var(--blue))', t: 'E-commerce Fulfilment', d: 'Shopify, eBay, TikTok Shop and D2C order fulfilment. Every order picked, packed and dispatched on time.' },
  { icon: 'refresh', g: 'linear-gradient(135deg,var(--teal),var(--blue))', t: 'Returns Handling', d: 'Returns received, inspected and sorted into sellable, rework or unsellable so nothing slips through the cracks.' },
];

function Services({ onEnquire }) {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <SecHead eyebrow="What we handle" center
          title="More ways we support your operation"
          lede="Beyond Amazon prep and FBA, we handle FBM, e-commerce fulfilment and returns from the same Manchester warehouse."/>
        <div className="grid cols-3 reveal" style={{marginTop:48}}>
          {SERVICES.map((s, i) => (
            <article className="svc-card card" key={s.t}>
              <span className="glow" style={{background:s.g}}></span>
              <span className="ico" style={{background:s.g}}>{I[s.icon]()}</span>
              <h3 className="h3">{s.t}</h3>
              <p>{s.d}</p>
            </article>
          ))}
        </div>
        
      </div>
    </section>
  );
}

const WHY = [
  { icon: 'eye', t: 'Total transparency', d: 'Clear scopes, agreed deliverables and consistent reporting you always know where your stock is.' },
  { icon: 'clock', t: 'Same-day dispatch', d: 'Orders received before the daily cut-off go out the same day across all major couriers.' },
  { icon: 'shield', t: 'Amazon-compliant by default', d: 'Prep done to Amazon’s exact specs, so your shipments aren’t refused, relabelled or charged back.' },
  { icon: 'handshake', t: 'A real partner, not a portal', d: 'A named account team that invests in your outcomes we grow alongside the businesses we support.' },
];

function WhyUs() {
  const P = window.LYZOO_PRICING;
  return (
    <section className="section" style={{background:'#fff', borderBlock:'1px solid var(--line)'}}>
      <div className="wrap why-grid">
        <div className="reveal">
          <SecHead eyebrow="Why Lyzoo"
            title="Fulfilment that earns your trust, then keeps it"
            lede="We don’t just store boxes. We run a tight, transparent operation so you can put your energy into growing not chasing your 3PL."/>
          <div className="why-list" style={{marginTop:28}}>
            {WHY.map(w => (
              <div className="why-item" key={w.t}>
                <span className="ico">{I[w.icon]()}</span>
                <div><h4>{w.t}</h4><p>{w.d}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="why-visual reveal" style={{transitionDelay:'.1s'}}>
          <div className="proof-card">
            <div className="pc-head">
              <span className="ico"><I.pin/></span>
              <div>
                <div style={{fontWeight:800,color:'var(--ink)'}}>Manchester fulfilment centre</div>
                <div style={{color:'var(--muted)',fontSize:'.9rem'}}>Shurgard, Ashton Old Road, M12 6LP</div>
              </div>
            </div>
            <div>
              <div className="proof-row"><span className="k">Receiving & inspection</span><span className="v">from {P.currency}0.04 / unit</span></div>
              <div className="proof-row"><span className="k">FNSKU labelling</span><span className="v">from {P.currency}0.08 / unit</span></div>
              <div className="proof-row"><span className="k">Pallet processing</span><span className="v">{P.currency}5.85 / pallet</span></div>
              <div className="proof-row"><span className="k">Storage</span><span className="v">{P.currency}16.67 / m³ · 30d</span></div>
              <div className="proof-row"><span className="k">Shipping</span><span className="v" style={{color:'var(--indigo)'}}>Quoted on enquiry</span></div>
            </div>
            <div style={{fontSize:'.82rem',color:'var(--muted)'}}>Indicative rates, ex. VAT. Your exact quote depends on volume and product profile.</div>
          </div>
        </div>
      </div>
      <div className="wrap"></div>
    </section>
  );
}

Object.assign(window, { Header, Hero, TrustStrip, Services, WhyUs, COURIERS, NAV, NAV_CALC });
