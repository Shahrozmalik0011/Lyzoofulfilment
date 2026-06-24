/* =========================================================================
   sections-ads.jsx V3 (ads): pain-led hero with the lead form above the fold,
   plus a pain → solution reinforcement section.
   ========================================================================= */

const PAINS = [
  "Buried in prep when you should be growing your brand",
  "Shipments refused or charged back for non-compliant prep",
  "Stock you can’t see and a 3PL you can’t get hold of",
  "Late dispatch quietly costing you the Buy Box and reviews",
  "Evenings and weekends swallowed by packing orders",
];

function HeroAds({ onConsult }) {
  return (
    <section className="hero hero-ads wrap" id="top">
      <div className="hero-ads-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow">UK fulfilment & Amazon prep · Manchester</span>
          <h1 className="h1">Fulfilment shouldn’t cost you your <span className="serif-i grad-ink">time, margin and weekends.</span></h1>
          <ul className="pain-list">
            {PAINS.map((p, i) => (
              <li key={i}><span className="x"><I.close/></span>{p}</li>
            ))}
          </ul>
          <p className="hero-ads-solve">
            Lyzoo takes the whole operation off your plate received, inspected, prepped to spec and stored with full visibility. <strong>Tell us what you need and we'll send a tailored quote. →</strong>
          </p>
          <div className="hero-contact">
            <a className="hc-btn hc-phone" href="tel:+447440586966"><I.phone/> +44 7440 586966</a>
            <a className="hc-btn hc-wa" href="https://wa.me/447440586966?text=Hi%20Lyzoo%2C%20I'd%20like%20a%20fulfilment%20quote" target="_blank" rel="noopener" style={{background:'#25d366',color:'#fff',boxShadow:'0 12px 32px rgba(37,211,102,.38)',border:'none'}}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52ZM12 21.94a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.67.96.98-3.57-.24-.37A9.9 9.9 0 0 1 2.06 12C2.06 6.5 6.5 2.06 12 2.06c2.65 0 5.14 1.03 7.01 2.9a9.87 9.87 0 0 1 2.93 7.02c0 5.5-4.44 9.96-9.94 9.96Zm5.44-7.45c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.34.22-.64.07a8.1 8.1 0 0 1-2.38-1.47 8.93 8.93 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.19-.24-.57-.48-.5-.67-.5h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.34Z"/></svg>
              WhatsApp us
            </a>
          </div>
          <div className="hero-trust">
            <span className="ht"><I.shield/> Amazon-compliant prep</span>
            <span className="sep"></span>
            <span className="ht"><I.pin/> Manchester-based</span>
          </div>
        </div>

        <div className="hero-form reveal" style={{transitionDelay:'.08s'}}>
          <div id="enquire" className="lead-card solo">
            <div className="lead-main" style={{paddingBottom:0}}>
              <div className="form-head">
                <h3 className="h3">Get your tailored quote</h3>
                <p>No obligation · real human reply · itemised pricing</p>
              </div>
              <div className="form-reassure" style={{justifyContent:'flex-start',marginBottom:6}}>
                <span className="rc"><I.check/> No spam</span>
                <span className="rc"><I.check/> Itemised pricing</span>
                <span className="rc"><I.check/> Shipping included</span>
              </div>
            </div>
            <LeadFormEngine/>
          </div>
        </div>
      </div>
      
    </section>
  );
}

const PS_BAD = [
  "You (or a junior) prepping units late into the night",
  "Guessing whether prep meets Amazon’s latest rules",
  "Chasing a 3PL that treats you like a ticket number",
  "No real view of what’s in stock or what shipped",
  "Growth capped by how much you can physically handle",
];
const PS_GOOD = [
  "A team that receives, inspects and preps to spec for you",
  "Amazon-compliant labelling, polybagging and cartonisation",
  "A named contact who actually answers not a portal",
  "Transparent, itemised pricing and clear reporting",
  "Capacity that scales from first shipment to pallet volumes",
];

function PainSolution() {
  return (
    <section className="section" id="why" style={{background:'var(--bg)', paddingTop:'clamp(24px,3vw,48px)'}}>
      <div className="wrap">
        <SecHead eyebrow="Sound familiar?" center
          title="From doing it all yourself to a partner that has it handled"
          lede="Most sellers have an operations problem, not a sales one. This is the shift Lyzoo makes."/>
        <div className="ps-grid reveal" style={{marginTop:40}}>
          <div className="ps-card bad">
            <h3><span className="pill">Right now</span> Without a real partner</h3>
            <ul className="ps-list">
              {PS_BAD.map((t,i) => <li key={i}><I.close/>{t}</li>)}
            </ul>
          </div>
          <div className="ps-card good">
            <h3><span className="pill">With Lyzoo</span> Operations, handled</h3>
            <ul className="ps-list">
              {PS_GOOD.map((t,i) => <li key={i}><I.check/>{t}</li>)}
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
}

Object.assign(window, { HeroAds, PainSolution });
