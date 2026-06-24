/* =========================================================================
   sections-b.jsx Process, Couriers, Comparison, FAQ
   ========================================================================= */

const PROCESS = [
{ icon: 'box', t: 'Receive', d: 'Your stock arrives at our Manchester centre and is booked in the same day.' },
{ icon: 'eye', t: 'Inspect', d: 'Every delivery is checked against your ASN for quantity, damage and condition.' },
{ icon: 'label', t: 'Prep', d: 'FNSKU labelling, polybagging, bundling and cartonisation to Amazon spec.' },
{ icon: 'store', t: 'Store', d: 'Inventory stored securely with live visibility, charged by the cubic metre.' },
{ icon: 'truck', t: 'Dispatch', d: 'Forwarded to Amazon or shipped to your customer via Evri, RM or DPD.' }];


function Process() {
  return (
    <section className="section" id="process" style={{ paddingTop: 'clamp(24px,3vw,48px)' }}>
      <div className="wrap">
        <SecHead eyebrow="How it works" center
        title="A simple, transparent process from goods-in to dispatch"
        lede="No jargon, no guesswork. Every client moves through the same structured flow with clear communication at each step." />
        <div className="proc-track reveal" style={{ marginTop: 56 }}>
          <div className="proc-line"></div>
          {PROCESS.map((p, i) =>
          <div className="proc-step" key={p.t}>
              <div className="node">{I[p.icon]()}<span className="num">{i + 1}</span></div>
              <h4>{p.t}</h4>
              <p>{p.d}</p>
            </div>
          )}
        </div>
        
      </div>
    </section>);

}

function Couriers() {
  const data = [
  { name: "Evri", abbr: "ev", color: "#3edad8", desc: "Cost-effective nationwide parcel delivery for everyday e-commerce orders." },
  { name: "Royal Mail", abbr: "RM", color: "#103164", desc: "Tracked 24 & 48 and letterbox-friendly options trusted across the UK." },
  { name: "DPD", abbr: "DPD", color: "#2c92d5", desc: "Premium next-day and one-hour delivery windows for higher-value items." }];

  return (
    <section className="section" id="couriers" style={{ background: 'var(--bg)' }}>
      <div className="wrap courier-band">
        <div className="reveal">
          <SecHead eyebrow="Courier partnerships"
          title="Your orders, on the carrier that fits each parcel"
          lede="We route every shipment through the most suitable courier so you get the right balance of speed and cost without managing multiple accounts yourself." />
          <div style={{ marginTop: 24 }}>
            <span className="enquiry-note" style={{ fontWeight: "200", height: "100px", width: "500px" }}><I.mail /> Shipping rates are tailored to your volume quoted on enquiry</span>
          </div>
          
        </div>
        <div className="courier-cards reveal" style={{ transitionDelay: '.1s' }}>
          {data.map((c) =>
          <div className="cc" key={c.name}>
              <span className="badge" style={{ background: c.color }}>{c.abbr}</span>
              <div><div className="nm">{c.name}</div><div className="ds">{c.desc}</div></div>
            </div>
          )}
        </div>
      </div>
    </section>);

}


const PRICE_CARDS = [
  {
    label: 'Amazon Prep',
    icon: 'label',
    color: 'linear-gradient(135deg,var(--indigo),var(--lav))',
    items: [
      { name: 'FNSKU Labelling', price: '£0.07', unit: 'per unit' },
      { name: 'Polybag Small', price: '£0.21', unit: 'per unit' },
      { name: 'Polybag Medium', price: '£0.24', unit: 'per unit' },
      { name: 'Bubble Wrap', price: '£0.42', unit: 'per unit' },
      { name: 'Bundling', price: '£0.21', unit: 'per bundle' },
    ],
  },
  {
    label: 'Receiving & Storage',
    icon: 'box',
    color: 'linear-gradient(135deg,var(--blue),var(--cyan))',
    items: [
      { name: 'Receiving & Inspection', price: '£0.03', unit: 'per unit' },
      { name: 'Pallet Processing', price: '£4.88', unit: 'per pallet' },
      { name: 'Case Processing', price: '£1.75', unit: 'per case' },
      { name: 'Storage', price: '£13.89', unit: 'm³ / 30 days' },
    ],
  },
  {
    label: 'Returns',
    icon: 'refresh',
    color: 'linear-gradient(135deg,var(--teal),var(--blue))',
    items: [
      { name: 'Returns Units', price: '£0.08', unit: 'per unit' },
      { name: 'Returns Handling', price: '£0.21', unit: 'per unit' },
      { name: 'Returns Boxes', price: '£1.67', unit: 'per box' },
    ],
  },
];

function Pricing({ onEnquire }) {
  return (
    <section className="section" id="pricing" style={{background:'#fff', borderBlock:'1px solid var(--line)'}}>
      <div className="wrap">
        <SecHead eyebrow="Transparent pricing" center
          title="No hidden fees. Just clear, itemised rates."
          lede="All prices exclude VAT. Shipping is quoted on enquiry based on your volume and carrier requirements."/>
        <div className="grid cols-3 reveal" style={{marginTop:44}}>
          {PRICE_CARDS.map((card,ci) => (
            <div key={card.label} style={{borderRadius:'var(--r-lg)',overflow:'hidden',boxShadow:'var(--sh-md)',display:'flex',flexDirection:'column'}}>
              {/* Card header */}
              <div style={{background:card.color,padding:'24px 28px 20px',display:'flex',alignItems:'center',gap:14}}>
                <span style={{width:44,height:44,borderRadius:12,background:'rgba(255,255,255,.18)',display:'inline-flex',alignItems:'center',justifyContent:'center',flexShrink:0,color:'#fff',backdropFilter:'blur(4px)'}}>{I[card.icon]({style:{width:22,height:22}})}</span>
                <div>
                  <div style={{fontWeight:800,fontSize:'1.08rem',color:'#fff',letterSpacing:'.01em'}}>{card.label}</div>
                  <div style={{fontSize:'.8rem',color:'rgba(255,255,255,.75)',marginTop:2}}>All prices ex. VAT</div>
                </div>
              </div>
              {/* Row items */}
              <div style={{background:'#fff',flex:1,display:'flex',flexDirection:'column'}}>
                {card.items.map((item,i) => (
                  <div key={item.name} style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,padding:'14px 24px',background:'#fff',borderBottom:i<card.items.length-1?'1px solid var(--line)':'none'}}>
                    <span style={{fontSize:'.92rem',color:'var(--body)',fontWeight:500}}>{item.name}</span>
                    <span style={{display:'flex',flexDirection:'column',alignItems:'flex-end',flexShrink:0,gap:1}}>
                      <span style={{fontWeight:800,color:'var(--ink)',fontSize:'1.02rem'}}>{item.price}</span>
                      <span style={{fontSize:'.72rem',color:'var(--muted)',letterSpacing:'.02em'}}>{item.unit}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:32}}>
          <span style={{display:'inline-flex',alignItems:'center',gap:'.6em',padding:'.7em 1.2em',background:'#f1f0ff',color:'var(--violet)',borderRadius:'999px',fontWeight:600,fontSize:'.9rem'}}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{width:17,height:17}}><path d="M3 7v5.2a2 2 0 0 0 .6 1.4l7 7a2 2 0 0 0 2.8 0l5.6-5.6a2 2 0 0 0 0-2.8l-7-7A2 2 0 0 0 12.2 4H7a4 4 0 0 0-4 4Z"/><circle cx="8" cy="8.5" r="1.4" fill="currentColor" stroke="none"/></svg>
            Shipping rates depend on your volume and parcel profile quoted on enquiry
          </span>
        </div>
      </div>
    </section>
  );
}

const CMP_ROWS = [
{ f: "Amazon-compliant prep (FNSKU, polybag, bundling)", l: true, diy: false, o: "partial" },
{ f: "Same-day dispatch across Evri, RM & DPD", l: true, diy: false, o: "partial" },
{ f: "Goods-in inspection on every delivery", l: true, diy: "partial", o: false },
{ f: "Transparent, itemised rate card", l: true, diy: true, o: false },
{ f: "Named account team & direct contact", l: true, diy: " ", o: false },
{ f: "Scales from first shipment to pallet volumes", l: true, diy: false, o: true },
{ f: "You keep your evenings & weekends", l: true, diy: false, o: true }];


function CmpCell({ v }) {
  if (v === true) return <span className="yes"><I.check /> Yes</span>;
  if (v === false) return <span className="no">No</span>;
  if (v === "partial") return <span className="no">Limited</span>;
  return <span className="no">{v}</span>;
}

function Comparison() {
  return (
    <section className="section" id="compare" style={{paddingBlock:'clamp(24px,3vw,48px)'}}>
      <div className="wrap">
        <SecHead eyebrow="Why outsource to Lyzoo" center
        title="Self-prep vs. Lyzoo"
        lede="Most sellers either burn hours doing prep themselves or get lost in an impersonal warehouse. Here’s where Lyzoo sits." />
        <div className="cmp reveal" style={{ marginTop: 44 }}>
          <table>
            <thead>
              <tr>
                <th style={{ minWidth: 220 }}></th>
                <th className="c-other">Doing it yourself</th>
                <th className="c-lyzoo" style={{textAlign:'center'}}>Lyzoo</th>
              </tr>
            </thead>
            <tbody>
              {CMP_ROWS.map((r) =>
              <tr key={r.f}>
                  <td>{r.f}</td>
                  <td><CmpCell v={r.diy} /></td>
                  <td className="c-lyzoo"><CmpCell v={r.l} /></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
      </div>
    </section>);

}

const FAQS = [
  { q: "Do you prep to Amazon's exact requirements?", a: "Yes. FNSKU labelling, polybagging with suffocation warnings, bundling, bubble wrapping and cartonisation are all done to Amazon's current receiving rules so your shipments are not refused or charged back." },
  { q: "Can you handle both FBA prep and FBM fulfilment?", a: "Absolutely. Many of our clients use us for both. We prep and forward inventory into Amazon FBA and fulfil seller-fulfilled (FBM) and direct e-commerce orders from the same warehouse." },
  { q: "How quickly can you onboard my inventory?", a: "Most sellers are booked in within a few working days of approving a scope. Once we agree your requirements, you send your stock to our Manchester centre and we handle receiving, inspection and prep from there." },
];


function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq" style={{ background: '#fff', borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <SecHead eyebrow="Questions, answered" center
        title="Everything sellers ask before switching"
        lede="Still unsure? Start an enquiry and we’ll answer anything specific to your products." />
        <div className="faq-list reveal" style={{ marginTop: 44 }}>
          {FAQS.map((f, i) =>
          <div className={"faq-item" + (open === i ? " open" : "")} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                {f.q}<I.chevron className="chev" />
              </button>
              <div className="faq-a" style={{ maxHeight: open === i ? '260px' : '0' }}>
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          )}
        </div>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          
        </div>
      </div>
    </section>);

}

Object.assign(window, { Process, Couriers, Comparison, FAQ, Pricing });