import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

/* ─── API ─── */
const API = 'https://desktopapp.pythonanywhere.com/';

function getCookie(name) {
  let v = null;
  if (document.cookie && document.cookie !== '') {
    document.cookie.split(';').forEach(c => {
      const t = c.trim();
      if (t.startsWith(name + '=')) v = decodeURIComponent(t.substring(name.length + 1));
    });
  }
  return v;
}

/* ─── Screenshot images ─── */
const screenshots = [
  { src: '/Sp/images/screen1.png', label: 'Remote Control' },
  { src: '/Sp/images/screen2.png', label: 'Touch Interface' },
  { src: '/Sp/images/screen3.png', label: 'File Browser' },
  { src: '/Sp/images/screen4.png', label: 'Media Controller' },
  { src: '/Sp/images/screen5.png', label: 'Keyboard Pad' },
  { src: '/Sp/images/Feature.png', label: 'Feature Overview' },
];

/* ─── Animation variants ─── */
const fadeUp = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
const fadeIn = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.6 } } };
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

/* ════════════════════ NAVBAR ════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#screenshot', label: 'Screenshots' },
    { href: '#about', label: 'About' },
    { href: 'https://desktopapp.pythonanywhere.com/privacy', label: 'Privacy Policy', external: true },
  ];

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="container">
          <div className="nav-inner">
            <a href="#home" className="nav-brand">
              <img src="/spicon.png" alt="ScreenPad logo" />
              <span>APP</span>&nbsp;ScreenPad
            </a>

            <ul className="nav-links">
              {links.map(l => (
                <li key={l.label}>
                  <a href={l.href} target={l.external ? '_blank' : undefined} rel={l.external ? 'noreferrer' : undefined}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav-cta">
              <button className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '.9rem' }} onClick={() => document.getElementById('desktopPopup').classList.add('open')}>
                Download
              </button>
            </div>

            <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setMobileOpen(false)}>×</button>
        {links.map(l => (
          <a key={l.label} href={l.href}
            target={l.external ? '_blank' : undefined}
            rel={l.external ? 'noreferrer' : undefined}
            onClick={() => setMobileOpen(false)}>
            {l.label}
          </a>
        ))}
        <button className="btn btn-primary" style={{ marginTop: 12 }} onClick={() => { setMobileOpen(false); document.getElementById('desktopPopup').classList.add('open'); }}>
          Download Now
        </button>
      </div>
    </>
  );
}

/* ════════════════════ HERO ════════════════════ */
function Hero() {
  return (
    <section id="home">
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div className="container">
        <div className="hero-grid">

          {/* Left: content */}
          <motion.div className="hero-content" variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="hero-badge">
              Available for Windows &amp; macOS
            </motion.div>

            <motion.h1 variants={fadeUp} className="hero-title">
              Remote Desktop.<br />
              <span className="gradient-text">PC on Touch.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="hero-desc">
              Turn your phone into a touch-enabled remote desktop.
              Install the ScreenPad Android app on your phone and the desktop app on
              Windows or macOS to get started.
            </motion.p>

            <motion.div variants={fadeUp} className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => document.getElementById('desktopPopup').classList.add('open')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download Desktop App
              </button>
              <a
                href="https://play.google.com/store/apps/details?id=com.mytools.screenpad"
                className="btn btn-android"
                target="_blank"
                rel="noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.341l1.5-2.598a.5.5 0 00-.866-.5l-1.52 2.63A8.992 8.992 0 0112 14a8.992 8.992 0 01-4.637 1.31L5.843 12.72a.5.5 0 00-.866.5l1.5 2.598A8.97 8.97 0 003 22h18a8.97 8.97 0 00-3.477-6.659zM12 4a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
                Download Android App
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="hero-stats">
              <div>
                <div className="stat-num">50K+</div>
                <div className="stat-label">Downloads</div>
              </div>
              <div>
                <div className="stat-num">Win &amp; Mac</div>
                <div className="stat-label">Platforms</div>
              </div>
              <div>
                <div className="stat-num">Free</div>
                <div className="stat-label">Always</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: hero image */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-img-wrapper">
              <img src="/Sp/images/Feature.png" alt="ScreenPad Feature Preview" />
            </div>

            <div className="hero-floating-card">
              <div className="floating-icon">🖥️</div>
              <div className="floating-text">
                <strong>Full PC Control</strong>
                <span>Via your Android phone</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ════════════════════ SCREENSHOTS ════════════════════ */
function Screenshots() {
  const [idx, setIdx] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const perPage = 3;
  const pages = Math.ceil(screenshots.length / perPage);

  const offset = -(idx * (100 / perPage) * perPage);

  return (
    <section id="screenshot">
      <div className="container">
        <motion.div
          className="screenshot-header"
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="section-label">Screenshots</motion.div>
          <motion.h2 variants={fadeUp} className="section-heading">See it in Action</motion.h2>
          <motion.p variants={fadeUp} className="section-sub">
            A peek at the ScreenPad experience — from the touch interface to the full remote desktop view.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}
        >
          <div className="screenshot-track-wrap">
            <div
              className="screenshot-track"
              style={{ transform: `translateX(${offset}%)` }}
            >
              {screenshots.map((s, i) => (
                <div
                  key={i}
                  className="screenshot-slide"
                  onClick={() => setLightboxSrc(s.src)}
                  style={{ flex: `0 0 calc(${100 / perPage}% - ${(perPage - 1) * 20 / perPage}px)` }}
                >
                  <img src={s.src} alt={s.label} />
                </div>
              ))}
            </div>
          </div>

          <div className="screenshot-controls">
            <button className="ss-btn" onClick={() => setIdx(i => Math.max(0, i - 1))}>←</button>
            <button className="ss-btn" onClick={() => setIdx(i => Math.min(pages - 1, i + 1))}>→</button>
          </div>

          <div className="ss-dots">
            {Array.from({ length: pages }).map((_, i) => (
              <div key={i} className={`ss-dot${i === idx ? ' active' : ''}`} onClick={() => setIdx(i)} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            className="lightbox open"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightboxSrc(null)}
          >
            <button className="lightbox-close" onClick={() => setLightboxSrc(null)}>×</button>
            <motion.img
              src={lightboxSrc}
              alt="enlarged screenshot"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ════════════════════ FLUTTERPILOT DIVIDER ════════════════════ */
function Divider() {
  return (
    <section id="divider">
      <div className="container">
        <motion.div
          className="divider-inner glass"
          style={{ padding: '56px 64px' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="divider-text">
            <div className="section-label" style={{ marginBottom: 20 }}>From AMSoftwares</div>
            <h2>
              Building utility tools and software that increase productivity.{' '}
              <span>Turn prompts or Figma into real mobile app screens</span> — no coding required.
              Visual editor with full manual control; try FlutterPilot on Web &amp; Mobile and export clean,
              production-ready app code (Flutter).
            </h2>
          </div>

          <div>
            <a
              href="http://flutterpilot.com"
              className="fp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2L3.5 20.29a1 1 0 0 0 1.03 1.41L12 20l7.47 1.7a1 1 0 0 0 1.03-1.41L12 2z" />
              </svg>
              Visit FlutterPilot
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════ ABOUT ════════════════════ */
function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          className="about-grid"
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
        >
          <motion.div className="about-content" variants={fadeUp}>
            <div className="section-label">Our Team</div>
            <h2 className="section-heading">Welcome to ScreenPad</h2>
            <h3>ScreenPad Team</h3>
            <p>
              Download more apps from AMSoftwares. We build utility tools and software that increase productivity
              and simplify your digital workflow. ScreenPad turns your Android phone into a fully
              touch-enabled remote desktop controller, working seamlessly with Windows and macOS.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.mytools.screenpad"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Get the App
            </a>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="team-card">
              <img src="/Sp/images/amsoftwares.png" alt="AMSoftwares" />
              <div className="team-info">
                <h3>Abrar Malekji</h3>
                <span>App Developer · AMSoftwares</span>
                <div className="team-socials">
                  <a href="#" aria-label="Facebook">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Twitter/X">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                    </svg>
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════ FEEDBACK ════════════════════ */
function Feedback() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const subject = subjectRef.current.value.trim();
    if (!subject) return;
    setSubmitting(true);

    const form = new FormData();
    form.append('name', emailRef.current.value.trim());
    form.append('subject', subject);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', API + 'feedback', true);
    xhr.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) { setDone(true); setSubmitting(false); }
    };
    xhr.send(form);
  }

  return (
    <section id="newsletter">
      <div className="newsletter-glow" />
      <div className="container">
        <div className="feedback-wrapper">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="section-label" style={{ margin: '0 auto 20px' }}>
              Feedback
            </motion.div>
            <motion.h2 variants={fadeUp} className="section-heading">
              Give your valuable Suggestions :)
            </motion.h2>
            <motion.p variants={fadeUp} className="section-sub">
              What do you think about our Work.
            </motion.p>
          </motion.div>

          <motion.div
            className="feedback-form"
            style={{ marginTop: 48 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {!done ? (
                <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="form-group">
                    <label htmlFor="sp-email">Your Email (optional)</label>
                    <input ref={emailRef} type="text" id="sp-email" placeholder="e.g. ab@cd.xyz" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="sp-subject">Your Valuable Response</label>
                    <textarea
                      ref={subjectRef} id="sp-subject"
                      placeholder="e.g. Software is not working, or error etc..."
                      style={{ height: 160 }}
                      required
                    />
                  </div>
                  <button className="feedback-submit" type="submit" disabled={submitting}>
                    {submitting ? 'Sending...' : 'Submit Feedback'}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="thanks"
                  className="thank-you-state"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="thank-you-icon">🙏</div>
                  <h3>Thank you so much!</h3>
                  <p>For your Suggestion, Feel free to give another Anytime :)</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════ DOWNLOAD POPUP ════════════════════ */
function DownloadPopup() {
  function close() { document.getElementById('desktopPopup').classList.remove('open'); }

  const goTo = (path) => { window.location.href = API + path; close(); };

  return (
    <div className="popup-overlay" id="desktopPopup" onClick={e => { if (e.target === e.currentTarget) close(); }}>
      <div className="popup-box">
        <button className="popup-close" onClick={close}>×</button>

        <div className="popup-title-row">
          <img src="/spicon.png" alt="" />
          <h3>Download ScreenPad</h3>
        </div>
        <p className="popup-subtitle">Choose your desktop platform</p>

        <hr className="popup-divider" />

        <div className="popup-platform">
          <div className="popup-platform-header"><span>🪟</span> Windows</div>
          <div className="popup-btns">
            <button className="popup-dl-btn" onClick={() => goTo('download/data/ScreenPad_po_64xbit_pc__dot_exe')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              64-bit
            </button>
            <button className="popup-dl-btn" onClick={() => goTo('download/data/ScreenPad_po_32xbit_pc__dot_exe')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              32-bit
            </button>
          </div>
        </div>

        <div className="popup-platform">
          <div className="popup-platform-header"><span>🍎</span> macOS</div>
          <div className="popup-btns">
            <button className="popup-dl-btn" onClick={() => goTo('download/data/Screenpad-arm64_dot_dmg')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Apple Silicon
            </button>
            <button className="popup-dl-btn" onClick={() => goTo('download/data/Screenpad-x86_64_dot_dmg')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Intel x86_64
            </button>
          </div>
        </div>

        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <a href="https://play.google.com/store/apps/details?id=com.mytools.screenpad" className="btn btn-android" target="_blank" rel="noreferrer" style={{ width: '100%', justifyContent: 'center' }}>
            📱 Download Android App
          </a>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════ FOOTER ════════════════════ */
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="nav-brand" style={{ textDecoration: 'none' }}>
              <img src="/spicon.png" alt="ScreenPad" />
              <span>APP</span>&nbsp;ScreenPad
            </a>
            <p>
              Turn your phone into a touch-enabled remote desktop.
              Built by AMSoftwares, available for Windows and macOS.
            </p>
          </div>

          <div className="footer-links">
            <h4>Product</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#screenshot">Screenshots</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#newsletter">Feedback</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="https://desktopapp.pythonanywhere.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a></li>
              <li><a href="https://desktopapp.pythonanywhere.com/sphelp" target="_blank" rel="noreferrer">Help &amp; Support</a></li>
              <li><a href="http://flutterpilot.com" target="_blank" rel="noreferrer">FlutterPilot</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} ScreenPad · AMSoftwares. All rights reserved.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9 9 0 01-2.88 1.1A4.52 4.52 0 0016.11 0a4.48 4.48 0 00-4.48 4.48c0 .35.04.7.11 1.03A12.76 12.76 0 011.64.9a4.48 4.48 0 001.39 5.98 4.44 4.44 0 01-2.03-.56v.06a4.48 4.48 0 003.59 4.39 4.52 4.52 0 01-2.02.08 4.48 4.48 0 004.18 3.11A9 9 0 010 19.54a12.73 12.73 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.17 9.17 0 0023 3z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23A11.5 11.5 0 0112 5.8c1.02.004 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0024 12C24 5.37 18.63 0 12 0z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════ BACK TO TOP ════════════════════ */
function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <button
      className={`back-top${visible ? ' visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

/* ════════════════════ ROOT APP ════════════════════ */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Screenshots />
        <Divider />
        <About />
        <Feedback />
      </main>
      <Footer />
      <DownloadPopup />
      <BackToTop />
    </>
  );
}
