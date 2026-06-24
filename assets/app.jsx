/* =========================================================================
   app.jsx — composes the page. Reads window.LYZOO_VARIANT ('lead' | 'calc').
   ========================================================================= */
const CONSULT_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0r7HKSbcnhQOqTJ_W8jAbXbqAn63KuqPWtR2ZgxR0QJhuNy-o-N1Ishv23XLA-ArfiKC04l7Fk?gv=true";

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "displayFont": "Newsreader",
  "bodyFont": "Hanken Grotesk",
  "accent": "#4f46e5",
  "animate": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const variant = window.LYZOO_VARIANT || 'lead';
  useReveal();

  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty('--serif', `"${t.displayFont}", Georgia, serif`);
    r.setProperty('--sans', `"${t.bodyFont}", system-ui, sans-serif`);
    r.setProperty('--indigo', t.accent);
  }, [t.displayFont, t.bodyFont, t.accent]);

  useEffect(() => {
    document.body.classList.toggle('no-anim', !t.animate);
  }, [t.animate]);

  const onEnquire = () => scrollToId('enquire');
  const onConsult = () => window.open(CONSULT_URL, '_blank', 'noopener');

  const isAds = variant === 'ads';

  return (
    <React.Fragment>
      {!isAds && <Header onEnquire={onEnquire} navItems={variant==='calc' ? NAV_CALC : NAV}/>}
      <main>
        {isAds ? (
          <React.Fragment>
            <HeroAds onConsult={onConsult}/>
            <PainSolution/>
            <Process/>
            <Pricing onEnquire={onEnquire}/>
            <Comparison/>
            <Services onEnquire={onEnquire}/>
            <FAQ/>
            <ClosingWithFooter onEnquire={onEnquire} onConsult={onConsult}/>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Hero onEnquire={onEnquire} onConsult={onConsult} variant={variant === 'calc' ? 'calc' : 'lead'}/>
            <TrustStrip/>
            <Services onEnquire={onEnquire}/>
            {variant === 'calc' && <Calculator onEnquire={onEnquire}/>}
            <WhyUs/>
            <Process/>
            <Couriers/>
            <Comparison/>
            <FAQ/>
            <LeadForm/>
            <Closing onEnquire={onEnquire} onConsult={onConsult}/>
          </React.Fragment>
        )}
      </main>
      {!isAds && <Footer/>}
      <MobileCTA onEnquire={onEnquire}/>


      <TweaksPanel>
        <TweakSection label="Typography"/>
        <TweakSelect label="Display font" value={t.displayFont}
          options={["Newsreader","Spectral","DM Serif Display"]}
          onChange={v => setTweak('displayFont', v)}/>
        <TweakSelect label="Body font" value={t.bodyFont}
          options={["Hanken Grotesk","Plus Jakarta Sans","Manrope"]}
          onChange={v => setTweak('bodyFont', v)}/>
        <TweakSection label="Brand"/>
        <TweakColor label="Accent" value={t.accent}
          options={["#4f46e5","#103164","#4f4c81","#2c92d5"]}
          onChange={v => setTweak('accent', v)}/>
        <TweakToggle label="Background motion" value={t.animate}
          onChange={v => setTweak('animate', v)}/>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
