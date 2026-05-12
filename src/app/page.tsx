import Image from "next/image";

const CALENDLY = "https://calendar.app.google/W461DP2eGoo2Auy4A";

const BRANDS: { name: string; color: string; weight: string; tracking?: string }[] = [
  { name: "Samsung",     color: "#1428A0", weight: "800" },
  { name: "Razer",       color: "#44D62C", weight: "900", tracking: "0.05em" },
  { name: "OtterBox",    color: "#004B8D", weight: "700" },
  { name: "Jabra",       color: "#C31432", weight: "700" },
  { name: "Mophie",      color: "#1a1a1a", weight: "700" },
  { name: "RØDE",        color: "#E31837", weight: "900", tracking: "0.08em" },
  { name: "Mackie",      color: "#1a1a1a", weight: "900", tracking: "0.04em" },
  { name: "Speck",       color: "#FF6B00", weight: "800" },
  { name: "Blue Parrot", color: "#003087", weight: "700" },
  { name: "Plantronics", color: "#003087", weight: "600" },
  { name: "ZAGG",        color: "#1a1a1a", weight: "900", tracking: "0.06em" },
];

const FLYWHEEL_NODES = [
  { deg: 0,   label: "AVN",          sub: "Vendor Negotiations" },
  { deg: 60,  label: "PO Mgmt",      sub: "Fill Rate & Orders" },
  { deg: 120, label: "Ads",          sub: "Sponsored + DSP" },
  { deg: 180, label: "Keywords",     sub: "SEO & Rankings" },
  { deg: 240, label: "Content",      sub: "A+ & Brand Store" },
  { deg: 300, label: "Shortages",    sub: "Claims & Recovery" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      {/* ═══ NAV ═══ */}
      <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Image src="/wip-logo-v2.png" alt="WIP Consulting" width={200} height={130} className="h-10 sm:h-11 w-auto" priority />
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-white/70">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#results"  className="hover:text-white transition-colors">Results</a>
            <a href="#approach" className="hover:text-white transition-colors">Approach</a>
          </nav>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
             className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg transition-all hover:scale-[1.02]">
            Get In Touch
          </a>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <section className="relative bg-slate-950 pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-22">

          {/* Left — copy */}
          <div className="relative z-10">
            <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-5">
              Former Amazon Vendor Manager
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-extrabold text-white leading-[1.06] mb-4">
              Embedded.{" "}
              <span className="text-amber-400">Accountable.</span>{" "}
              All&nbsp;In.
            </h1>
            <p className="text-white/45 text-base sm:text-lg font-medium italic mb-6 max-w-md">
              I show up like a co-founder. Not an agency.
            </p>
            <p className="text-white/60 text-[15px] leading-relaxed mb-8 max-w-lg">
              I&apos;m JJ. As a Vendor Manager at Amazon, I oversaw more than $1B in revenue across
              35 vendor accounts. I left to work with a small number of brands as their dedicated
              1P partner — not because I had to, but because this is what I love. I treat your
              business like it&apos;s mine. No juniors, no handoffs, no layers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-8 py-4 rounded-lg transition-all hover:scale-[1.02]">
                Book a Strategy Call
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
              <a href="#results"
                 className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold text-sm px-8 py-4 rounded-lg transition-all">
                See Results
              </a>
            </div>
          </div>

          {/* Right — Amazon Flywheel */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-[500px] ml-auto" style={{ aspectRatio: "1" }}>

              {/* SVG layer: rings, spokes, rotating track */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer decorative rings */}
                <circle cx="250" cy="250" r="238" stroke="white" strokeOpacity="0.03" strokeWidth="1"/>
                <circle cx="250" cy="250" r="195" stroke="white" strokeOpacity="0.05" strokeWidth="1"/>

                {/* Spokes from center to each node */}
                <line x1="250" y1="250" x2="250" y2="95"  stroke="rgba(245,158,11,0.10)" strokeWidth="1"/>
                <line x1="250" y1="250" x2="384" y2="173" stroke="rgba(245,158,11,0.10)" strokeWidth="1"/>
                <line x1="250" y1="250" x2="384" y2="327" stroke="rgba(245,158,11,0.10)" strokeWidth="1"/>
                <line x1="250" y1="250" x2="250" y2="405" stroke="rgba(245,158,11,0.10)" strokeWidth="1"/>
                <line x1="250" y1="250" x2="116" y2="327" stroke="rgba(245,158,11,0.10)" strokeWidth="1"/>
                <line x1="250" y1="250" x2="116" y2="173" stroke="rgba(245,158,11,0.10)" strokeWidth="1"/>

                {/* Static node dots */}
                <circle cx="250" cy="95"  r="4" fill="rgba(245,158,11,0.55)"/>
                <circle cx="384" cy="173" r="4" fill="rgba(245,158,11,0.40)"/>
                <circle cx="384" cy="327" r="4" fill="rgba(245,158,11,0.40)"/>
                <circle cx="250" cy="405" r="4" fill="rgba(245,158,11,0.40)"/>
                <circle cx="116" cy="327" r="4" fill="rgba(245,158,11,0.40)"/>
                <circle cx="116" cy="173" r="4" fill="rgba(245,158,11,0.40)"/>

                {/* Rotating track — dashed ring + chevron arrowheads at 4 compass points */}
                <g className="flywheel-track-group">
                  <circle cx="250" cy="250" r="155" stroke="rgba(245,158,11,0.22)" strokeWidth="1.5" strokeDasharray="5 7"/>
                  {/* Top (250,95) → clockwise = rightward */}
                  <path d="M246,85 L256,95 L246,105" stroke="rgba(245,158,11,0.65)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Right (405,250) → clockwise = downward */}
                  <path d="M395,246 L405,256 L415,246" stroke="rgba(245,158,11,0.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Bottom (250,405) → clockwise = leftward */}
                  <path d="M254,415 L244,405 L254,395" stroke="rgba(245,158,11,0.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Left (95,250) → clockwise = upward */}
                  <path d="M105,254 L95,244 L85,254" stroke="rgba(245,158,11,0.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>

              {/* Node labels — HTML layer, static positions */}
              {FLYWHEEL_NODES.map(({ deg, label, sub }) => {
                const rad = (deg - 90) * (Math.PI / 180);
                const pctX = 50 + 31 * Math.cos(rad);
                const pctY = 50 + 31 * Math.sin(rad);
                return (
                  <div key={deg} className="absolute" style={{ left: `${pctX}%`, top: `${pctY}%`, transform: "translate(-50%, -50%)" }}>
                    <div className="bg-slate-800/90 backdrop-blur-sm border border-amber-500/25 rounded-lg px-3 py-2 text-center whitespace-nowrap">
                      <div className="text-amber-400 text-[10px] font-bold tracking-wide uppercase leading-tight">{label}</div>
                      <div className="text-white/35 text-[9px] mt-0.5 leading-tight">{sub}</div>
                    </div>
                  </div>
                );
              })}

              {/* Center hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[88px] h-[88px] rounded-full bg-gradient-to-br from-amber-500/25 to-amber-600/5 border border-amber-500/30 flex flex-col items-center justify-center text-center">
                  <span className="text-amber-400 text-[8px] font-bold tracking-wider uppercase leading-tight">The WIP</span>
                  <span className="text-white text-sm font-extrabold leading-tight mt-0.5">Flywheel</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar — visibly dark, non-redundant metrics */}
        <div className="bg-slate-900 border-t border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-6 gap-x-4">
              {[
                { value: "$1B+",   label: "Amazon Revenue Managed" },
                { value: "35",     label: "Vendors at Amazon" },
                { value: "3–5",    label: "Brands Max, by Design" },
                { value: "$2.1M+", label: "Shortages Recovered" },
                { value: "100%",   label: "Client Retention Rate" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">{s.value}</div>
                  <div className="text-white/35 text-[11px] font-medium mt-1 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave to white */}
        <div className="bg-slate-900">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full block" preserveAspectRatio="none" style={{ display: "block", height: "60px" }}>
            <path d="M0 60V30C240 0 480 0 720 15C960 30 1200 45 1440 30V60H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ═══ BRANDS MARQUEE ═══ */}
      <section className="py-14 sm:py-20 overflow-hidden border-b border-slate-100">
        <p className="text-center text-slate-400 text-xs font-bold tracking-[0.2em] uppercase mb-10">
          Brands I&apos;ve Worked With
        </p>
        <div className="overflow-hidden">
          <div className="marquee-track">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center px-10 py-5 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm transition-all cursor-default"
                style={{ minWidth: "160px" }}
              >
                <span
                  style={{
                    color: brand.color,
                    fontWeight: brand.weight,
                    letterSpacing: brand.tracking ?? "-0.01em",
                    fontSize: "17px",
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                  }}
                >
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDIES ═══ */}
      <section id="results" className="py-20 sm:py-28 px-5 sm:px-8 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/[0.04] rounded-full blur-[140px]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase">Proven Results</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
              The Numbers Speak.
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Real outcomes from brands I&rsquo;ve worked with — inside Amazon and as a consultant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {[
              {
                category: "Consumer Electronics",
                headline: "Took a neglected 1P account from near-zero to $30M in Amazon revenue through full-stack vendor management.",
                stats: [{ value: "$30M", label: "Revenue Built" }, { value: "+156%", label: "YoY Growth" }],
              },
              {
                category: "Pro Audio",
                headline: "Recovered $2.1M in shortage claims and rebuilt fill rate infrastructure for a legacy manufacturer.",
                stats: [{ value: "$2.1M", label: "Recovered" }, { value: "99.2%", label: "Fill Rate" }],
              },
              {
                category: "Gaming Accessories",
                headline: "Captured 100% Buy Box ownership and tripled run rate through terms restructuring and content overhaul.",
                stats: [{ value: "100%", label: "Buy Box" }, { value: "3×", label: "Run Rate" }],
              },
            ].map((cs) => (
              <div key={cs.category} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.07] transition-all">
                <span className="text-amber-400 text-xs font-bold tracking-[0.15em] uppercase">{cs.category}</span>
                <p className="text-white/65 text-[15px] leading-relaxed mt-4 mb-8 min-h-[80px]">{cs.headline}</p>
                <div className="flex gap-8 pt-6 border-t border-white/[0.07]">
                  {cs.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">{stat.value}</div>
                      <div className="text-white/35 text-xs font-medium mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="py-20 sm:py-28 px-5 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Full-Stack Amazon Management.
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              From vendor negotiations to ad campaigns — one person, full ownership, $1B of experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Vendor Negotiations & Terms",
                desc: "AVN/AVS strategy, accrual management, and terms optimization to protect your margins year over year.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-500"><path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>,
              },
              {
                title: "PO Management & Fill Rate",
                desc: "Forecast alignment, PO acceptance, and fill rate optimization to keep Amazon buying consistently.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-500"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>,
              },
              {
                title: "Amazon Ads",
                desc: "Full-funnel ad strategy, optimization, and scaling for Sponsored Products, Brands, Display, and DSP.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-500"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>,
              },
              {
                title: "A+ Content Creation",
                desc: "Enhanced brand content that converts. Storytelling and design that drives purchase decisions at the listing level.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-500"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/><path d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/></svg>,
              },
              {
                title: "SEO & Listing Optimization",
                desc: "Rank for the right searches and dominate page one. Products on the first page capture 80% of all clicks.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-500"><path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/></svg>,
              },
              {
                title: "Brand Store Management",
                desc: "Immersive brand store experiences that convert browsers into buyers and showcase your full catalog.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-500"><path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"/></svg>,
              },
              {
                title: "Shortage Claims & Recovery",
                desc: "Dispute management, BOL documentation, and systematic recovery of every dollar Amazon owes you.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-500"><path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
              },
              {
                title: "Inventory & Promotion Strategy",
                desc: "From Prime Day to peak season, aligning supply with demand and maximizing every key sales event.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-500"><path d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/></svg>,
              },
              {
                title: "P&L & Margin Protection",
                desc: "Net PPM management, CRAP list prevention, and profitability strategy at the ASIN level.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-500"><path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg>,
              },
            ].map((s) => (
              <div key={s.title} className="service-card group">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-5 group-hover:bg-amber-100 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-8 py-4 rounded-lg transition-all hover:scale-[1.02]">
              Let&rsquo;s Talk Amazon Growth
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ WHAT WINNING BRANDS GET RIGHT ═══ */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 bg-[#f3f3f1]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase">The Playbook</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-2">
              What Winning Brands Get Right on Amazon.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stat: "100%", statLabel: "Buy Box target",
                title: "Owning the Buy Box",
                desc: "It doesn't come easily, but it unlocks record sales velocity. You need to give Amazon exactly what they want — and they'll do the same in return.",
              },
              {
                stat: "99.2%", statLabel: "Fill rate achieved",
                title: "Stock Optimization",
                desc: "Consistent supply is the foundation of consistent sales. Track demand, avoid overstock, and never go out of stock on your best-performing products.",
              },
              {
                stat: "80%", statLabel: "of clicks go to page 1",
                title: "Listing Optimization",
                desc: "Products on the first page of Amazon search results capture the overwhelming majority of sales. Ranking is not optional — it's the whole game.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 hover:shadow-md transition-all">
                <div className="text-4xl font-extrabold text-amber-500 mb-1">{item.stat}</div>
                <div className="text-slate-400 text-[11px] font-bold tracking-wide uppercase mb-5">{item.statLabel}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ APPROACH — Alternating blocks ═══ */}
      <section id="approach" className="py-20 sm:py-28 px-5 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-24">

          {/* Block 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="aspect-[4/3] rounded-2xl bg-slate-900 overflow-hidden relative">
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="grid grid-cols-5 gap-1.5 w-full items-end h-48">
                    {[40,55,35,70,60,85,50,75,90,65,80,95,70,88,100,78,92,85,95,100].map((h, i) => (
                      <div key={i} className="bg-gradient-to-t from-amber-500/60 to-amber-400/90 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900 to-transparent h-16" />
                <div className="absolute bottom-3 left-5 right-5 flex justify-between text-white/25 text-[10px] font-mono">
                  <span>Q1 &rsquo;23</span><span>Q2</span><span>Q3</span><span>Q4</span><span>Q1 &rsquo;24</span>
                </div>
              </div>
            </div>
            <div>
              <span className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase">Former Vendor Manager</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-3 mb-4 leading-snug">
                I sat in the Amazon seat. Now I sit in yours.
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                I managed the P&L. I ran the negotiations. I decided which brands got featured
                and which got cut. Now I bring that entire playbook to your side of the table.
                You&rsquo;re not hiring an agency — you&rsquo;re hiring the person who used to be the buyer.
              </p>
              <div className="flex gap-8">
                <div><div className="text-3xl font-extrabold text-slate-900">$1B+</div><div className="text-slate-400 text-xs font-medium mt-1">P&L Managed</div></div>
                <div><div className="text-3xl font-extrabold text-slate-900">35</div><div className="text-slate-400 text-xs font-medium mt-1">Vendors</div></div>
              </div>
            </div>
          </div>

          {/* Block 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase">Fractional, Not Agency</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-3 mb-4 leading-snug">
                An integrated extension of your team.
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                I embed with your team as your 1P executive. No account managers, no layers, no
                handoffs. You get a direct line to the person doing the work. I join your calls,
                own your numbers, and operate like I&rsquo;m on payroll — without the overhead.
              </p>
              <div className="flex gap-8">
                <div><div className="text-3xl font-extrabold text-slate-900">3–5</div><div className="text-slate-400 text-xs font-medium mt-1">Brands Max</div></div>
                <div><div className="text-3xl font-extrabold text-slate-900">Weekly</div><div className="text-slate-400 text-xs font-medium mt-1">Cadence</div></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl bg-slate-900 overflow-hidden relative p-8">
                <div className="h-full flex flex-col justify-center gap-4">
                  <div className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Agency vs. Fractional</div>
                  {[
                    { label: "Account ratio", agency: "1:50",      jj: "1:4" },
                    { label: "VM experience", agency: "None",       jj: "$1B+" },
                    { label: "Execution",     agency: "Monthly",    jj: "Weekly" },
                    { label: "Your contact",  agency: "Junior AM",  jj: "Ex-VM" },
                    { label: "Strategy",      agency: "Template",   jj: "Custom" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-3">
                      <div className="w-24 text-white/40 text-[11px] font-medium shrink-0">{row.label}</div>
                      <div className="flex-1 flex gap-1.5">
                        <div className="flex-1"><div className="h-7 rounded bg-white/[0.06] flex items-center px-2.5"><span className="text-white/30 text-[10px]">{row.agency}</span></div></div>
                        <div className="flex-1"><div className="h-7 rounded bg-amber-500/20 border border-amber-500/30 flex items-center px-2.5"><span className="text-amber-300 text-[10px] font-bold">{row.jj}</span></div></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Block 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="aspect-[4/3] rounded-2xl bg-slate-900 overflow-hidden relative p-8">
                <div className="h-full flex flex-col justify-center gap-3">
                  <div className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase mb-3">1P Setup Checklist</div>
                  {[
                    "Vendor terms & program audit",
                    "Chargeback prevention setup",
                    "Catalog architecture & ASIN strategy",
                    "Shortage dispute infrastructure",
                    "AVN negotiation framework",
                    "Fill rate & PO management SOP",
                    "Retail readiness & conversion optimization",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <span className="text-white/60 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <span className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase">Infrastructure First</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-3 mb-4 leading-snug">
                I set it up right so you don&rsquo;t get burned.
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                Most brands sign up for programs they can&rsquo;t recover from. I build the backend
                infrastructure from day one — terms, chargebacks, dispute processes — so you&rsquo;re
                protected before the first PO lands. That foundation is what everything else is built on.
              </p>
              <div className="flex gap-8">
                <div><div className="text-3xl font-extrabold text-slate-900">$2.1M</div><div className="text-slate-400 text-xs font-medium mt-1">Recovered</div></div>
                <div><div className="text-3xl font-extrabold text-slate-900">$30M</div><div className="text-slate-400 text-xs font-medium mt-1">Brand Built</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.04)_0%,transparent_65%)]"/>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <span className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase">The Process</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
            <div className="hidden md:block absolute top-[42px] left-[22%] right-[22%] h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            {[
              {
                step: "01", title: "Book a Strategy Call",
                desc: "A focused 30-minute conversation. I learn your brand, your numbers, and where Amazon 1P fits in your growth plan. No pitch deck. No script.",
              },
              {
                step: "02", title: "Get a Custom Roadmap",
                desc: "A specific 90-day plan built around your catalog and goals — not a generic deck. Real priorities, real timelines, real math.",
              },
              {
                step: "03", title: "I Execute",
                desc: "Embedded in your business, driving results weekly. The same operating cadence I ran at Amazon — applied directly to your brand.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 relative z-10 hover:bg-white/[0.07] transition-all">
                <div className="text-5xl font-extrabold text-amber-400/25 mb-4 leading-none">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/45 text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-8 py-4 rounded-lg transition-all hover:scale-[1.02]">
              Start with a Call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ THE PROBLEM ═══ */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 bg-[#f3f3f1]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
              Most Agencies Don&rsquo;t Understand 1P.
            </h2>
            <p className="text-slate-500 text-lg">That&rsquo;s an expensive mistake.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01", title: "They're Built for 3P",
                desc: "Most agencies built their entire playbook around Seller Central and paid advertising. Vendor Central is a completely different animal — and most have never touched it.",
              },
              {
                num: "02", title: "No Buyer Experience",
                desc: "AVN terms, accrual structures, CRAP list management, shortage dispute frameworks — if you've never managed Amazon's P&L, you're guessing at things that cost real money.",
              },
              {
                num: "03", title: "Cookie-Cutter Playbooks",
                desc: "Enterprise 1P strategy requires someone who has managed genuine complexity at scale. Not a junior account manager following a templated process.",
              },
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-2xl p-8 hover:shadow-md transition-all border border-slate-100">
                <div className="text-4xl font-extrabold text-amber-400/40 mb-5 leading-none">{item.num}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-slate-950 py-24 sm:py-32 px-5 sm:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/[0.05] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/[0.03] rounded-full blur-[100px]" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase">Ready to work together?</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4">
            Let&rsquo;s Unlock Your Next<br/>
            <span className="text-amber-400">$10M in Amazon Revenue.</span>
          </h2>
          <p className="text-white/45 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            I take on 3–5 brands at a time. If you&rsquo;re serious about 1P, let&rsquo;s talk.
          </p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base px-10 py-4 rounded-lg transition-all hover:scale-[1.02]">
            Book a Strategy Call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
          <p className="text-white/25 text-sm mt-6">
            Or email{" "}
            <a href="mailto:jj@wipconsulting.us" className="text-white/40 hover:text-white/70 underline underline-offset-4 transition-colors">
              jj@wipconsulting.us
            </a>
          </p>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-slate-950 border-t border-white/[0.06] py-12 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div>
              <Image src="/wip-logo-v2.png" alt="WIP Consulting" width={160} height={105} className="h-9 w-auto opacity-70 mb-4" />
              <p className="text-white/30 text-sm leading-relaxed">Former Amazon VM. Embedded 1P partner for brands serious about the channel.</p>
            </div>
            <div>
              <h4 className="text-white/60 text-xs font-bold tracking-[0.15em] uppercase mb-4">Services</h4>
              <ul className="space-y-2.5 text-sm text-white/35">
                <li><a href="#services" className="hover:text-white/60 transition-colors">Vendor Negotiations</a></li>
                <li><a href="#services" className="hover:text-white/60 transition-colors">Amazon Ads</a></li>
                <li><a href="#services" className="hover:text-white/60 transition-colors">Shortage Recovery</a></li>
                <li><a href="#services" className="hover:text-white/60 transition-colors">Brand Store</a></li>
                <li><a href="#services" className="hover:text-white/60 transition-colors">P&L Protection</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white/60 text-xs font-bold tracking-[0.15em] uppercase mb-4">Company</h4>
              <ul className="space-y-2.5 text-sm text-white/35">
                <li><a href="#approach" className="hover:text-white/60 transition-colors">Approach</a></li>
                <li><a href="#results" className="hover:text-white/60 transition-colors">Results</a></li>
                <li><a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Book a Call</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white/60 text-xs font-bold tracking-[0.15em] uppercase mb-4">Contact</h4>
              <ul className="space-y-2.5 text-sm text-white/35">
                <li><a href="mailto:jj@wipconsulting.us" className="hover:text-white/60 transition-colors">jj@wipconsulting.us</a></li>
                <li><a href="https://www.linkedin.com/in/jjtomlin/" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">LinkedIn</a></li>
                <li className="text-white/20">Nashville, TN</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/20 text-xs">&copy; {new Date().getFullYear()} WIP Consulting Co. All rights reserved.</p>
            <p className="text-white/15 text-xs">1P Sales & Channel Architecture · Nashville, TN</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
