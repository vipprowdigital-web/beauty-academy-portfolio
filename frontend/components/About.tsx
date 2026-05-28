"use client";

export default function About() {
  const pillars = [
    { icon: "✦", title: "Beauty Specialists", desc: "We exclusively work with beauty brands. No generic agency, no learning curve — pure beauty marketing expertise from day one." },
    { icon: "◈", title: "Results Driven", desc: "Every strategy is designed for one goal: more admissions, more enquiries, more brand authority." },
    { icon: "◇", title: "Premium Quality", desc: "From content to campaigns — our work reflects the luxury and professionalism your academy deserves." },
  ];

  return (
    <>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>

      <section id="about" className="section" style={styles.section}>
        <div className="container">
          <div className="about-grid">
            {/* Left */}
            <div>
              <span className="section-label">About Vipprow</span>
              <div className="gold-line" />
              <h2 style={styles.heading}>
                India's Beauty Academy
                <br />
                Marketing Experts
              </h2>
              <p style={styles.para}>
                Vipprow is a digital marketing and website development agency exclusively
                specialized in Beauty Academy, Salon, Makeup Studio and Training Institute Marketing.
              </p>
              <p style={styles.para}>
                We help beauty brands build a premium image, attract quality students,
                generate leads and increase admissions through result-focused digital strategies.
              </p>
              <div style={styles.tags}>
                {["Meta Ads", "Social Media", "Website Dev", "Lead Gen", "Branding", "Google SEO"].map((t) => (
                  <span key={t} style={styles.tag}>{t}</span>
                ))}
              </div>
            </div>

            {/* Right */}
            <div style={styles.right}>
              {pillars.map((p) => (
                <div key={p.title} className="card" style={styles.card}>
                  <span style={styles.cardIcon}>{p.icon}</span>
                  <h3 style={styles.cardTitle}>{p.title}</h3>
                  <p style={styles.cardDesc}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: { background: "var(--color-secondary)" },
  heading: {
    fontFamily: "var(--font-heading)",
    fontSize: "var(--text-4xl)",
    fontWeight: "var(--fw-bold)",
    lineHeight: 1.2,
    color: "var(--color-text)",
    marginBottom: "1.5rem",
  },

  para: {
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-md)",
    color: "var(--color-text-muted)",
    lineHeight: 1.8,
    marginBottom: "1rem",
  },
  tags: { display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.5rem" },
  tag: {
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-xs)",
    fontWeight: "var(--fw-medium)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    padding: "0.4rem 1rem",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-full)",
    color: "var(--color-primary)",
    background: "rgba(201,169,110,0.08)",
  },
  right: { display: "flex", flexDirection: "column", gap: "1.25rem" },
  card: { padding: "1.75rem" },
  cardIcon: { fontSize: "1.5rem", color: "var(--color-primary)", display: "block", marginBottom: "0.75rem" },
  cardTitle: {
    fontFamily: "var(--font-heading)",
    fontSize: "var(--text-lg)",
    fontWeight: "var(--fw-semibold)",
    color: "var(--color-text)",
    marginBottom: "0.5rem",
  },
  cardDesc: {
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    color: "var(--color-text-muted)",
    lineHeight: 1.7,
    margin: 0,
  },
};
