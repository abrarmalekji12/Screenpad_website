import { motion } from 'framer-motion';
import './App.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const sections = [
  {
    title: '1. Information We Collect',
    content: `ScreenPad is designed with privacy in mind. We collect minimal information to provide and improve our service:
    
• Device Information: Device model, OS version, and connection type (Wi-Fi / USB) are used solely to establish a remote connection session. This data is never stored on our servers.
• Feedback & Support: If you voluntarily submit feedback via our website or contact us by email, we store your email address (if provided) and message content solely to respond to your inquiry.
• Analytics: We may collect aggregated, anonymized usage statistics (e.g., number of active sessions) to improve app performance. This data cannot be used to identify individual users.`,
  },
  {
    title: '2. Information We Do NOT Collect',
    content: `We want to be explicit about what we never collect:
    
• We do NOT access, record, or transmit the content displayed on your screen during screen casting.
• We do NOT log keystrokes entered via the keyboard feature.
• We do NOT collect personal identifiers such as your name, phone number, or location unless you directly provide them for support.
• We do NOT sell, rent, or share your data with third-party advertisers.`,
  },
  {
    title: '3. How the App Works',
    content: `ScreenPad creates a direct, local network connection between your Android device and your PC or Mac. All data transmitted (mouse movements, keyboard input, file transfers) travels exclusively over your local network (Wi-Fi) or a direct USB connection.

No data from your remote control sessions is routed through or stored on AMSoftwares servers. The connection is peer-to-peer between your devices.`,
  },
  {
    title: '4. File Transfer',
    content: `The file transfer feature operates entirely over your local network. Files are transferred directly between your phone and PC without passing through any third-party server. We do not access, read, or retain any files transferred using ScreenPad.`,
  },
  {
    title: '5. Permissions Used',
    content: `ScreenPad requests the following Android permissions, each used strictly for the stated purpose:

• Network Access: To discover and connect to your PC on the local network.
• Wi-Fi State: To detect network availability and connection type.
• Storage (Optional): To browse and transfer files between your phone and PC.
• Foreground Service: To maintain a stable connection in the background while you use the app.

No permissions are used beyond their stated purpose.`,
  },
  {
    title: '6. Third-Party Services',
    content: `The ScreenPad Android app may use the following third-party services, each governed by their own privacy policies:

• Google Play Services: For app distribution and updates.
• Google Analytics for Firebase (if applicable): For aggregated, anonymized crash reporting and performance monitoring.

Our website (screenpad.app) uses Google Fonts for typography, which may log a request to Google's servers. No other third-party tracking scripts are loaded on this site.`,
  },
  {
    title: '7. Data Retention',
    content: `We retain feedback and support emails only as long as necessary to resolve your inquiry. Anonymized analytics data may be retained for up to 24 months in aggregated form. You may request deletion of any data you have provided to us by contacting us at the email below.`,
  },
  {
    title: '8. Children\'s Privacy',
    content: `ScreenPad is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will promptly delete it.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we do, we will update the "Last Updated" date at the top of this page. We encourage you to review this policy periodically. Continued use of ScreenPad after changes are posted constitutes your acceptance of the updated policy.`,
  },
  {
    title: '10. Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us:

📧 Email: fromamsoftwares@gmail.com
🌐 Website: https://screenpad.app`,
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      {/* Minimal Navbar */}
      <nav id="navbar" className="scrolled" style={{ position: 'sticky' }}>
        <div className="container">
          <div className="nav-inner">
            <a href="/" className="nav-brand">
              <img src="/spicon.png" alt="ScreenPad logo" />
              <span>APP</span>&nbsp;ScreenPad
            </a>
            <a href="/" className="btn btn-outline" style={{ padding: '8px 20px', fontSize: '0.875rem' }}>
              ← Back to Home
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="privacy-hero" style={{ padding: '80px 0 40px', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)',
          top: -100, left: -100, pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="section-label" style={{ margin: '0 0 20px' }}>
              Legal
            </motion.div>
            <motion.h1 variants={fadeUp} style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 16,
              color: 'var(--text)',
            }}>
              Privacy Policy
            </motion.h1>
            <motion.p variants={fadeUp} style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: 8 }}>
              Last Updated: <strong style={{ color: 'var(--text)' }}>April 5, 2026</strong>
            </motion.p>
            <motion.p variants={fadeUp} style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: 620, lineHeight: 1.75 }}>
              At AMSoftwares, your privacy is a priority. This policy describes how ScreenPad collects, uses,
              and protects any information when you use our app or visit this website.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '20px 0 100px', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ maxWidth: 800, margin: '0 auto' }}>

            {/* Summary Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                background: 'rgba(99,102,241,0.08)',
                border: '1px solid rgba(99,102,241,0.25)',
                borderRadius: 'var(--radius)',
                padding: '24px 28px',
                marginBottom: 48,
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
              }}
            >
              <span style={{ fontSize: '1.5rem', flexShrink: 0, marginTop: 2 }}>🔒</span>
              <div>
                <strong style={{ color: 'var(--primary-lt)', display: 'block', marginBottom: 6, fontSize: '1rem' }}>
                  The Short Version
                </strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                  ScreenPad does not collect your personal data, record your screen, or log your keystrokes.
                  All remote control sessions happen directly over your local network — nothing goes through our servers.
                  We only store feedback you voluntarily send us.
                </p>
              </div>
            </motion.div>

            {/* Policy Sections */}
            {sections.map((sec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                style={{
                  marginBottom: 40,
                  paddingBottom: 40,
                  borderBottom: i < sections.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <h2 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--text)',
                  marginBottom: 16,
                }}>
                  {sec.title}
                </h2>
                <div style={{
                  color: 'var(--text-muted)',
                  fontSize: '1rem',
                  lineHeight: 1.9,
                  whiteSpace: 'pre-line',
                }}>
                  {sec.content}
                </div>
              </motion.div>
            ))}

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px 36px',
                marginTop: 16,
                textAlign: 'center',
              }}
            >
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: 20 }}>
                Have a privacy concern or want to request data deletion?
              </p>
              <a
                href="mailto:fromamsoftwares@gmail.com"
                className="btn btn-primary"
                style={{ display: 'inline-flex' }}
              >
                ✉️ Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-bottom" style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <p className="footer-copy">
              © {new Date().getFullYear()} ScreenPad · AMSoftwares. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: 20 }}>
              <a href="/" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Home</a>
              <a href="/privacy" style={{ color: 'var(--primary-lt)', fontSize: '0.9rem' }}>Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
