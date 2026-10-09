"use client";

const phone = "919876543210";
const wa = (message: string) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const products = [
  { name: "Everyday Notebook Set", category: "NOTEBOOKS", price: "₹249", oldPrice: "₹299", image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=900&q=85", label: "BESTSELLER" },
  { name: "Pastel Highlighter Set", category: "PENS & MARKERS", price: "₹179", oldPrice: "", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85", label: "STUDY FAVOURITE" },
  { name: "Minimal Desk Planner", category: "PLANNERS", price: "₹329", oldPrice: "", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85", label: "NEW ARRIVAL" },
  { name: "Creative Art Essentials", category: "ART SUPPLIES", price: "₹399", oldPrice: "₹449", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85", label: "FOR CREATORS" }
];

const categories = [
  { title: "Notebooks & Journals", sub: "Ideas start here", icon: "▤", tone: "blush" },
  { title: "Pens & Writing", sub: "Your everyday essentials", icon: "✎", tone: "sage" },
  { title: "Art & Craft", sub: "Make room for creativity", icon: "✳", tone: "butter" },
  { title: "Office Supplies", sub: "Work smarter, stay organised", icon: "▦", tone: "blue" }
];

export default function Home() {
  return <main id="top">
    <div className="announcement">A LITTLE SOMETHING FOR YOUR NEXT BIG IDEA <span>✦</span> VISIT US IN DEHRADUN</div>
    <header className="store-header shell">
      <a className="store-brand" href="#top"><span className="brand-symbol">p<span>.</span></span><span className="brand-name">paper & pine<small>STATIONERY · GIFTS · GOOD IDEAS</small></span></a>
      <nav className="store-nav"><a href="#shop">Shop</a><a href="#categories">Categories</a><a href="#about">Our story</a><a href="#visit">Find us</a></nav>
      <a className="header-order" href={wa("Hi! I'd like to browse and order stationery from Paper & Pine.")} target="_blank" rel="noreferrer"><span>Order on WhatsApp</span><b>↗</b></a>
    </header>

    <section className="store-hero">
      <div className="hero-copy">
        <div className="eyebrow"><span></span> GOOD THINGS FOR GOOD IDEAS</div>
        <h1>Make space<br/>for <em>what’s next.</em></h1>
        <p>Thoughtful stationery for your study sessions, big plans, everyday notes and wonderfully messy creative moments.</p>
        <div className="hero-buttons"><a className="primary-button" href="#shop">Explore the collection <span>↗</span></a><a className="under-link" href="#categories">Find your favourites ↓</a></div>
        <div className="hero-promise"><span className="promise-icon">✳</span><span><b>Little details. Big difference.</b><small>Useful, lovely things for school, work and play.</small></span></div>
      </div>
      <div className="hero-photo">
        <div className="photo-frame"><img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=90" alt="Notebook, pen and thoughtfully arranged stationery on a desk"/></div>
        <div className="round-stamp">WRITE<br/>YOUR<br/><i>story</i> ✦</div>
        <div className="photo-caption"><span>THE EVERYDAY EDIT</span><span>01 — 04</span></div>
      </div>
      <div className="hero-bottom"><span>MADE FOR THE MAKERS & THE NOTE-TAKERS</span><span>DEHRADUN, INDIA　↗</span></div>
    </section>

    <section className="benefit-strip"><div><span>✳</span><p><b>Everyday essentials</b><small>For school, college & office</small></p></div><div><span>♡</span><p><b>Gift-worthy finds</b><small>Small things, happy hearts</small></p></div><div><span>✎</span><p><b>Creative supplies</b><small>Make something your own</small></p></div><div><span>☏</span><p><b>Easy local ordering</b><small>Message us on WhatsApp</small></p></div></section>

    <section className="categories-section shell" id="categories">
      <div className="section-title"><div><div className="eyebrow">A PLACE FOR EVERY KIND OF IDEA</div><h2>Shop by <em>your mood.</em></h2></div><p>From the first page of a new notebook to the final touch on a project, find just what you need.</p></div>
      <div className="category-grid">{categories.map((c) => <a href="#shop" className={`category-card ${c.tone}`} key={c.title}><div className="category-icon">{c.icon}</div><div><h3>{c.title}</h3><p>{c.sub}</p></div><span className="category-arrow">↗</span></a>)}</div>
    </section>

    <section className="shop-section" id="shop"><div className="shell">
      <div className="section-title shop-title"><div><div className="eyebrow">THE PAPER & PINE EDIT</div><h2>Little things we <em>love.</em></h2></div><a className="under-link" href={wa("Hi! Please share your full stationery catalogue and current prices.")} target="_blank" rel="noreferrer">Ask for the full catalogue ↗</a></div>
      <div className="product-grid">{products.map((p) => <article className="product-card" key={p.name}><a className="product-image" href={wa(`Hi! I'm interested in ${p.name} (${p.price}). Is it available?`)} target="_blank" rel="noreferrer"><img src={p.image} alt={p.name}/><span className="product-label">{p.label}</span><span className="quick-view">Ask about item ↗</span></a><div className="product-info"><div className="product-category">{p.category}</div><h3>{p.name}</h3><div className="product-price">{p.price} {p.oldPrice && <del>{p.oldPrice}</del>}<a href={wa(`Hi! I'd like to enquire about ${p.name} priced at ${p.price}.`)} target="_blank" rel="noreferrer" aria-label={`Enquire about ${p.name}`}>+</a></div></div></article>)}</div>
      <p className="catalogue-note">Product photos are illustrative. Message us to confirm current stock, colours and prices.</p>
    </div></section>

    <section className="story-section" id="about"><div className="story-image"><img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1100&q=85" alt="Books and stationery on a desk"/></div><div className="story-copy"><div className="eyebrow">A LITTLE ABOUT US</div><h2>For the love<br/>of <em>putting pen<br/>to paper.</em></h2><p>We believe the right notebook, a favourite pen or a fresh set of colours can make an ordinary day feel full of possibility. Paper & Pine brings together useful everyday stationery and little finds that make studying, planning and creating feel more personal.</p><p>Whether you’re stocking up for school, organising your desk or picking a thoughtful gift, we’re here to help you find your next favourite.</p><a className="primary-button" href={wa("Hi! I'd love to know more about Paper & Pine and your stationery collection.")} target="_blank" rel="noreferrer">Say hello <span>↗</span></a></div></section>

    <section className="visit-section shell" id="visit"><div className="visit-card"><div className="visit-copy"><div className="eyebrow">COME SAY HELLO</div><h2>Your next favourite<br/>thing is <em>closer than you think.</em></h2><p>Shopping for something specific? Have a question about availability? We’d love to help.</p><a className="primary-button" href={wa("Hi Paper & Pine! Please share your store location, opening hours and available products.")} target="_blank" rel="noreferrer">Message us on WhatsApp <span>↗</span></a></div><div className="visit-details"><div><span className="detail-icon">⌖</span><p><b>Find our store</b><small>Dehradun, Uttarakhand</small><small>Message us for directions</small></p></div><div><span className="detail-icon">◷</span><p><b>Opening hours</b><small>Contact us for today's timings</small></p></div><div><span className="detail-icon">☏</span><p><b>Quick enquiries</b><small>Ask about products, prices & stock</small></p></div></div></div></section>

    <footer className="store-footer"><div className="shell footer-top"><a className="store-brand" href="#top"><span className="brand-symbol">p<span>.</span></span><span className="brand-name">paper & pine<small>STATIONERY · GIFTS · GOOD IDEAS</small></span></a><p>For every list, little sketch<br/>and big idea in between.</p><a className="footer-whatsapp" href={wa("Hi Paper & Pine!")} target="_blank" rel="noreferrer">LET’S CHAT ↗</a></div><div className="shell footer-bottom"><span>© 2026 PAPER & PINE · CONCEPT STORE WEBSITE</span><span>MADE FOR EVERYDAY CREATIVITY</span><a href="#top">BACK TO TOP ↑</a></div></footer>
  </main>;
}
