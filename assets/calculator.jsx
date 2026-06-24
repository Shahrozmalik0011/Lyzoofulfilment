/* =========================================================================
   calculator.jsx — simple, self-serve prep + receiving + storage estimator (V2)
   Inspired by FBA-prep calculators, deliberately stripped back.
   ========================================================================= */

function fmt(n) {
  return '£' + n.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function Stepper({ value, onChange, step = 50, min = 0 }) {
  const dec = () => onChange(Math.max(min, value - step));
  const inc = () => onChange(value + step);
  return (
    <div className="stepper">
      <button type="button" onClick={dec} aria-label="decrease">–</button>
      <input type="number" value={value} min={min}
        onChange={e => onChange(Math.max(min, parseInt(e.target.value || '0', 10) || 0))}/>
      <button type="button" onClick={inc} aria-label="increase">+</button>
    </div>
  );
}

function Calculator({ onEnquire }) {
  const P = window.LYZOO_PRICING;
  // prep options shown (exclude bundling/un-bundling to keep it simple)
  const PREP = P.prep.filter(p => !['bundle','unbundle'].includes(p.id));
  const recv = P.receiving.find(r => r.id === 'recv'); // 0.04
  const storageRate = P.storage.price; // 16.67

  const [units, setUnits] = useState(500);
  const [prepId, setPrepId] = useState('fnsku');
  const [withRecv, setWithRecv] = useState(true);
  const [cubic, setCubic] = useState(0);

  const prep = PREP.find(p => p.id === prepId);
  const prepCost = units * prep.price;
  const recvCost = withRecv ? units * recv.price : 0;
  const storeCost = cubic * storageRate;
  const total = prepCost + recvCost + storeCost;
  const perUnit = units > 0 ? (prepCost + recvCost) / units : 0;

  return (
    <section className="section" id="calculator">
      <div className="wrap">
        <SecHead eyebrow="Instant estimate" center
          title="Estimate your prep & fulfilment costs in seconds"
          lede="Adjust the numbers below for a transparent, indicative cost. Shipping is tailored to your volume and quoted on enquiry."/>
        <div className="calc-card reveal" style={{marginTop:44}}>
          <div className="calc-form">

            <div className="calc-row">
              <div className="qty-line">
                <div className="ql">How many units this month?
                  <span className="qs">Total units to be prepped & received</span></div>
                <Stepper value={units} onChange={setUnits} step={50} min={0}/>
              </div>
            </div>

            <div className="calc-row">
              <div className="cr-head">
                <span className="t">Prep per unit</span>
                <span className="p">Choose the prep each unit needs</span>
              </div>
              <div className="chip-select">
                {PREP.map(p => (
                  <button type="button" key={p.id}
                    className={"chip-opt" + (prepId === p.id ? " sel" : "")}
                    onClick={() => setPrepId(p.id)}>
                    {p.name.replace(' — ', ' ')}<span className="cp">{fmt(p.price)}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="calc-row">
              <div className="cr-head"><span className="t">Add-ons</span></div>
              <div className="toggle-row">
                <div className="ql">Receiving & inspection
                  <span className="qs">Book-in and condition check · {fmt(recv.price)} / unit</span></div>
                <button type="button" className={"tg" + (withRecv ? " on" : "")} onClick={() => setWithRecv(v => !v)} aria-pressed={withRecv} aria-label="Toggle receiving"></button>
              </div>
              <div className="toggle-row" style={{borderTop:'1px solid var(--line)'}}>
                <div className="ql">Storage
                  <span className="qs">Per cubic metre, 30 days · {fmt(storageRate)} / m³</span></div>
                <Stepper value={cubic} onChange={setCubic} step={1} min={0}/>
              </div>
            </div>

            <p style={{fontSize:'.82rem',color:'var(--muted)',marginTop:18,marginBottom:0}}>
              Bundling, palletisation, returns and forwarding are itemised on your full quote. All figures exclude VAT.
            </p>
          </div>

          <aside className="calc-sum">
            <h4>Your estimate</h4>
            <div className="sum-rows">
              <div className="sum-row">
                <span className="sk">{prep.name} × {units.toLocaleString('en-GB')}</span>
                <span className="sv">{fmt(prepCost)}</span>
              </div>
              {withRecv && (
                <div className="sum-row">
                  <span className="sk">Receiving & inspection × {units.toLocaleString('en-GB')}</span>
                  <span className="sv">{fmt(recvCost)}</span>
                </div>
              )}
              {cubic > 0 && (
                <div className="sum-row">
                  <span className="sk">Storage · {cubic} m³ / 30d</span>
                  <span className="sv">{fmt(storeCost)}</span>
                </div>
              )}
              <div className="sum-row muted">
                <span className="sk">Shipping (Evri · RM · DPD)</span>
                <span className="sv">On enquiry</span>
              </div>
            </div>
            <div className="sum-total">
              <div className="tl">Estimated monthly total</div>
              <div className="tv">{fmt(total)}</div>
              <div className="per">≈ {fmt(perUnit)} per unit, prep + receiving · ex. VAT</div>
            </div>
            <p className="sum-note">Indicative only. Your exact quote depends on product profile, packaging and volume commitments.</p>
            <div className="calc-cta">
              <button className="btn btn-primary btn-lg" onClick={onEnquire}>Lock in this quote <I.arrow className="arr"/></button>
            </div>
          </aside>
        </div>
        <Note tag="Cost calculator"
          why="Price uncertainty is the #1 reason fulfilment leads stall. Letting visitors self-serve a number removes friction and builds trust through radical transparency — the opposite of 'request pricing' gatekeeping."
          cro="The calculator is an interactive commitment device: once a visitor has built 'their' number, the CTA reframes from 'enquire' to 'lock in this quote', and shipping-on-enquiry creates the reason to convert."
          copy="Keep labels plain and outcome-focused. The per-unit line makes the figure feel reasonable; the disclaimer protects accuracy without killing momentum."
          mobile="Form and summary stack vertically; steppers and chips are thumb-sized; the running total stays directly below the inputs so cause-and-effect is obvious."/>
      </div>
    </section>
  );
}

window.Calculator = Calculator;
