"use client";
import Image from "next/image";

export default function Footer() {
  const services = [
    "Social Media Management", "Meta Ads for Admissions", "Website Development",
    "Branding & Positioning", "Content Calendar", "Google Business Profile",
    "Reels & Video Scripts", "Lead Generation",
  ];

  return (
    <>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 3rem;
          align-items: start;
        }
        .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .footer-bottom-inner { flex-direction: column; align-items: flex-start !important; }
        }
      `}</style>

      <footer id="contact" style={styles.footer}>
        <div style={styles.top}>
          <div className="container">
            <div className="footer-grid">
              {/* Brand */}
              <div>
                <div style={styles.logo}>
                  <Image
                    src="/vipprow-logo-removebg-preview.png"
                    alt="Vipprow Digital Marketing"
                    width={150}
                    height={45}
                    style={{ height: "40px", width: "auto", objectFit: "contain" }}
                  />
                </div>
                <p style={styles.brandDesc}>
                  India's premier digital marketing agency for beauty academies, salons and makeup studios.
                </p>
                <div style={styles.contactInfo}>
                  <a href="tel:7974718311" style={styles.contactItem}>📞 7974718311</a>
                  <a href="https://portfolio.vipprow.com" style={styles.contactItem} target="_blank" rel="noreferrer"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>&nbsp;portfolio.vipprow.com</a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 style={styles.colTitle}>Services</h4>
                <ul style={styles.list}>
                  {services.map((s) => (
                    <li key={s}>
                      <a href="#services" style={styles.listLink}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
                      >
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clients */}
              <div>
                <h4 style={styles.colTitle}>Our Clients</h4>
                <ul style={styles.list}>
                  {["Belleza Beauty School", "Gaura Makeup Studio", "The Big Tree Beauty Academy", "TipSalon", "Allure Makeup Studio"].map((c) => (
                    <li key={c} style={styles.clientItem}>{c}</li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div>
                <h4 style={styles.colTitle}>Let's Grow Together</h4>
                <p style={styles.ctaText}>
                  Whether launching a new academy or scaling an existing one — we have the strategy and skills to grow it.
                </p>
                <a href="tel:7974718311" className="btn-primary" style={{ display: "inline-flex", marginTop: "1rem" }}>
                  Start Now →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.bottom}>
          <div className="container">
            <div className="footer-bottom-inner">
              <p style={styles.copyright}>© 2024 Vipprow Digital Marketing. All rights reserved.</p>
              <p style={styles.tagline}>Digital Marketing · Website Development · Lead Generation · Social Media Branding</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: { background: "var(--color-secondary)", borderTop: "1px solid var(--color-border)" },
  top: { padding: "5rem 0 3rem" },
  logo: { display: "flex", alignItems: "baseline", gap: "2px", marginBottom: "1.25rem" },
  logoV: { fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--color-primary)", lineHeight: 1 },
  logoText: { fontFamily: "var(--font-accent)", fontSize: "var(--text-xl)", color: "var(--color-text)", letterSpacing: "4px" },
  brandDesc: { fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem", margin: "0 0 1.5rem" },
  contactInfo: { display: "flex", flexDirection: "column", gap: "0.6rem" },
  contactItem: { fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)", display: "flex", alignItems: "center", gap: "0.5rem", transition: "color var(--transition-normal)", textDecoration: "none" },
  colTitle: { fontFamily: "var(--font-accent)", fontSize: "var(--text-xs)", fontWeight: "var(--fw-semibold)", letterSpacing: "2px", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: "1.25rem" },
  list: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" },
  listLink: { fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)", transition: "color var(--transition-normal)", cursor: "pointer" },
  clientItem: { fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)" },
  ctaText: { fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 },
  bottom: { borderTop: "1px solid var(--color-border)", padding: "1.5rem 0" },
  copyright: { fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "rgba(168,152,128,0.5)", margin: 0 },
  tagline: { fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "rgba(168,152,128,0.35)", letterSpacing: "1px", margin: 0 },
};
