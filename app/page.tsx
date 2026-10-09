"use client";

const whatsapp = (text: string) => "https://wa.me/919876543210?text=" + encodeURIComponent(text);

const demos = [
  { n: "01", type: "EDUCATION", name: "BrightPath Academy", desc: "A confident first impression for tuition centres and coaching institutes.", style: "edu", tags: ["Course overview", "Enquiry CTA"] },
  { n: "02", type: "GROCERY & RETAIL", name: "DailyBasket Store", desc: "A friendly local storefront that makes products, timings and ordering easy to find.", style: "grocery", tags: ["Product highlights", "Quick contact"] },
  { n: "03", type: "STATIONERY", name: "Paper & Pine", desc: "A clean, colourful catalogue concept for stationery and gift shops.", style: "paper", tags: ["Category showcase", "Store details"] }
];

const services = [
  ["↗", "Business websites", "A polished home for your business, services, location and contact details."],
  ["▤", "Tuition & coaching", "Show subjects, batches, faculty, results and a simple enquiry path."],
  ["▧", "Local shop showcase", "Highlight products, opening hours, offers and how customers can reach you."],
  ["⌁", "Mobile-first design", "A smooth experience for people finding you on their phones."],
  ["◎", "Google-ready basics", "Clear page titles, useful content and links that help customers find you."],
  ["☏", "WhatsApp enquiries", "Give visitors a direct way to ask questions or request a callback."]
];

export default function Home() {
  return <main id="top">
    <nav className="nav shell">
      <a className="brand" href="#top"><span className="brand-mark">L</span><span>local<span className="brand-light">launch</span><small>WEB STUDIO · DEHRADUN</small></span></a>
      <div className="nav-links"><a href="#work">Demo work</a><a href="#services">What we build</a><a href="#process">How it works</a></div>
      <a className="nav-cta" href={whatsapp("Hi! I want a website for my business.")} target="_blank" rel="noreferrer">Let’s talk <span>↗</span></a>
    </nav>

    <section className="hero shell">
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse"></span> MADE FOR LOCAL BUSINESSES</div>
        <h1>Your business<br/>deserves to be<br/><em>found online.</em></h1>
        <p className="hero-sub">Modern, mobile-friendly websites for Dehradun’s tuition centres, neighbourhood shops and ambitious small businesses.</p>
        <div className="hero-actions"><a className="button button-dark" href={whatsapp("Hi! I’d like to discuss a website for my business.")} target="_blank" rel="noreferrer">Build my website <span>↗</span></a><a className="text-link" href="#work">Explore demo websites ↓</a></div>
        <div className="trust-row"><div className="avatar-stack"><span>Tu</span><span>Sh</span><span>Lo</span></div><p><strong>Built around your business</strong><br/>Personal service. Clear pricing. No tech talk.</p></div>
      </div>
      <div className="hero-art">
        <div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div>
        <div className="floating-note note-top"><span className="note-icon">↗</span><span><b>More enquiries</b><small>Make it easy to reach you</small></span></div>
        <div className="laptop"><div className="browser-bar"><span></span><span></span><span></span><div>yourbusiness.in</div></div>
          <div className="mock-site"><div className="mock-nav"><b>YOUR BRAND<span>.</span></b><div>About　 Services　 Contact</div></div>
            <div className="mock-content"><div className="mock-label">WELCOME TO YOUR NEXT CHAPTER</div><h3>A better way<br/>to grow <i>together.</i></h3><p>Good work deserves a great first impression.</p><div className="mock-btn">Discover more ↗</div></div>
            <div className="mock-side"><div className="sun-shape"></div><div className="side-card"><b>01</b><span>Made for<br/>your people</span></div></div>
          </div><div className="laptop-base"></div>
        </div>
        <div className="floating-note note-bottom"><span className="check">✓</span><span><b>Looks great on mobile</b><small>Designed for real people</small></span></div>
        <div className="hero-sticker">LOCAL<br/>MINDS.<br/><span>BIG IDEAS.</span></div>
      </div>
      <div className="hero-bottom"><span>01 / DIGITAL PRESENCE</span><span>DESIGNED IN DEHRADUN, FOR YOUR NEXT STEP</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section className="intro-band"><div className="shell intro-inner"><p>YOUR NEXT CUSTOMER IS ALREADY SEARCHING.</p><h2>Let’s make sure they<br/><span>find <i>you.</i></span></h2><div className="intro-right"><p>Whether you teach, sell essentials, or are launching something new, a clear website helps people understand what you do and how to choose you.</p><a href="#services" className="circle-arrow">↘</a></div></div></section>

    <section className="section shell" id="work">
      <div className="section-heading"><div><div className="eyebrow">A FEW STARTING POINTS</div><h2>Imagine your business<br/><em>looking like this.</em></h2></div><p>These are concept demos to help you picture what your own website could feel like. Your design will be shaped around your business.</p></div>
      <div className="demo-grid">{demos.map(d => <article className="demo-card" key={d.n}>
        <div className={"demo-preview " + d.style}><div className="preview-top"><span>{d.name.split(" ")[0]}<b>.</b></span><span>MENU ☰</span></div>
          {d.style === "edu" && <div className="preview-edu"><div className="mini-pill">LEARN WITHOUT LIMITS</div><h3>Big dreams.<br/><i>Strong foundations.</i></h3><p>Personal attention. Better learning.</p><div className="mini-button">Explore classes ↗</div><div className="edu-sun">✳</div></div>}
          {d.style === "grocery" && <div className="preview-grocery"><div className="grocery-badge">FRESH<br/>EVERY DAY</div><h3>Good food.<br/><i>Good mood.</i></h3><p>Your neighbourhood store, made easy.</p><div className="fruit-row"><span>🍊</span><span>🥑</span><span>🍋</span><span>🍎</span></div></div>}
          {d.style === "paper" && <div className="preview-paper"><div className="paper-stamp">MAKE<br/>SOMETHING<br/><i>lovely.</i></div><div className="paper-pencil">✎</div><p>Little things for big ideas.</p><div className="paper-swatch"></div></div>}
          <div className="preview-foot"><span>WEBSITE CONCEPT</span><span>↗</span></div>
        </div>
        <div className="demo-info"><div className="demo-meta"><span>{d.n} / {d.type}</span><span className="demo-icon">✳</span></div><h3>{d.name}</h3><p>{d.desc}</p><div className="tag-row">{d.tags.map(t => <span key={t}>{t}</span>)}</div></div>
      </article>)}</div>
      <div className="work-note"><span className="note-star">✳</span><p><b>Your business, not a template.</b> These concepts show the possibilities. We’ll tailor the look, content and calls-to-action to your customers.</p><a href={whatsapp("I saw your website demos and want to discuss a custom website.")} target="_blank" rel="noreferrer">Talk about your idea ↗</a></div>
    </section>

    <section className="services-section" id="services"><div className="shell"><div className="section-heading light-heading"><div><div className="eyebrow">SMALL BUSINESS, BIG POTENTIAL</div><h2>Everything you need<br/>to <em>show up well.</em></h2></div><p>No complicated jargon. Just a useful, professional website that makes your business easier to trust and contact.</p></div>
      <div className="service-grid">{services.map((s,i) => <article className="service-card" key={s[1]}><div className="service-number">0{i+1}</div><div className="service-icon">{s[0]}</div><h3>{s[1]}</h3><p>{s[2]}</p><span className="service-arrow">↗</span></article>)}</div>
    </div></section>

    <section className="pricing-section shell" id="pricing"><div className="pricing-copy"><div className="eyebrow">STRAIGHTFORWARD STARTING PRICES</div><h2>Good websites.<br/><em>Clear costs.</em></h2><p>Start with what your business needs today. We can add more as you grow.</p><div className="price-note">FINAL QUOTE DEPENDS ON PAGES & FEATURES</div></div>
      <div className="price-card"><div className="price-top"><span>THE ESSENTIAL</span><span className="price-badge">GREAT FOR STARTING</span></div><div className="price">₹4,999<span> onwards</span></div><p className="price-desc">A professional online home for your business.</p><div className="price-rule"></div><ul><li><span>✓</span> Custom-designed one-page website</li><li><span>✓</span> Mobile-friendly layout</li><li><span>✓</span> Services, location & contact details</li><li><span>✓</span> WhatsApp enquiry button</li><li><span>✓</span> Basic on-page SEO setup</li><li><span>✓</span> Help getting it live</li></ul><a className="button button-lime" href={whatsapp("Hi! I’m interested in the Essential website package. Please share details.")} target="_blank" rel="noreferrer">Ask about this package <span>↗</span></a><small className="price-disclaimer">Domain and any paid third-party services may cost extra. Final scope and price agreed before work starts.</small></div>
    </section>

    <section className="process-section" id="process"><div className="shell"><div className="process-heading"><div className="eyebrow">NO CONFUSING PROCESS</div><h2>From “I need a website”<br/>to <em>“That’s my website.”</em></h2></div><div className="steps"><article><span>01</span><div><h3>Tell me about your business</h3><p>We’ll discuss your customers, goals, content and the kind of website that suits you.</p></div></article><article><span>02</span><div><h3>Review your design</h3><p>You’ll see a draft, share feedback and help shape the final result.</p></div></article><article><span>03</span><div><h3>Go live with confidence</h3><p>Once approved, we’ll help publish your website and show you the basics.</p></div></article></div></div></section>

    <section className="cta-section"><div className="shell cta-inner"><div className="cta-spark">✳</div><div className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</div><h2>Ready to look as good<br/>online as you are <em>in person?</em></h2><p>Tell me what you do. Let’s make a website that helps the right people find you.</p><a className="button button-dark" href={whatsapp("Hi! I’m a local business owner and would like to discuss a website.")} target="_blank" rel="noreferrer">Start a conversation <span>↗</span></a><div className="cta-doodle">GOOD IDEAS<br/>GROW HERE ↗</div></div></section>

    <footer className="footer"><div className="shell footer-main"><a className="brand footer-brand" href="#top"><span className="brand-mark">L</span><span>local<span className="brand-light">launch</span><small>WEB STUDIO · DEHRADUN</small></span></a><p>Thoughtful websites for the people<br/>building local businesses.</p><div className="footer-contact"><span>LET’S MAKE SOMETHING GOOD</span><a href={whatsapp("Hi! I’d like to talk about a website.")} target="_blank" rel="noreferrer">WhatsApp me ↗</a><a href="mailto:hello@locallaunch.in">hello@locallaunch.in</a></div></div><div className="shell footer-bottom"><span>© 2026 LOCALLAUNCH WEB STUDIO</span><span>MADE WITH CARE IN DEHRADUN, INDIA</span><a href="#top">BACK TO TOP ↑</a></div></footer>
  </main>;
}
