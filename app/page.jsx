"use client";

export default function Page() {
  const services = ["Custom props", "Scenic fabrication", "Event installs"];

  const projects = [
    { title: "Grateful Community Wall", image: "/grateful-wall.jpg" },
    { title: "You Are Here Marker", image: "/you-are-here.jpg" },
    { title: "St. Patrick's Day Bench", image: "/st-patricks-bench.jpg" },
    { title: "Year of the Snake", image: "/year-of-the-snake.jpg" },
  ];

  const logos = [
    { name: "Client One", src: "/logo1.png" },
    { name: "Client Two", src: "/logo2.png" },
    { name: "Client Three", src: "/logo3.png" },
    { name: "Client Four", src: "/logo4.png" },
    { name: "Client Five", src: "/logo5.png" },
    { name: "Client Six", src: "/logo6.png" },
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#f0b2b6",
      padding: "32px 16px",
      color: "#160608",
      fontFamily: "Arial, Helvetica, sans-serif",
    },
    main: {
      maxWidth: "1100px",
      margin: "0 auto",
      border: "10px solid #160608",
      background: "#f0b2b6",
      boxShadow: "20px 20px 0 #e21b3c",
    },
    section: {
      padding: "24px 24px 40px",
      borderBottom: "8px solid #160608",
    },
    hero: {
      textAlign: "center",
      padding: "0 24px 40px",
      borderBottom: "8px solid #160608",
    },
    logo: {
      display: "block",
      maxWidth: "560px",
      width: "100%",
      margin: "0 auto 8px",
      transform: "rotate(-1deg)",
      filter: "drop-shadow(1px 1px 0 #160608)",
    },
    introBox: {
      maxWidth: "760px",
      margin: "12px auto 0",
      border: "5px solid #160608",
      background: "#f7cfd4",
      padding: "24px 28px",
      boxShadow: "8px 8px 0 #e21b3c",
      fontSize: "22px",
      fontWeight: 700,
      lineHeight: 1.7,
    },
    buttonRow: {
      display: "flex",
      gap: "16px",
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: "32px",
    },
    buttonDark: {
      display: "inline-block",
      border: "4px solid #160608",
      background: "#160608",
      color: "#f7cfd4",
      padding: "14px 24px",
      fontSize: "14px",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      textDecoration: "none",
      boxShadow: "5px 5px 0 #e21b3c",
    },
    buttonLight: {
      display: "inline-block",
      border: "4px solid #160608",
      background: "#f7cfd4",
      color: "#160608",
      padding: "14px 24px",
      fontSize: "14px",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      textDecoration: "none",
      boxShadow: "5px 5px 0 #160608",
    },
    strip: {
      padding: "22px 24px",
      borderBottom: "8px solid #160608",
      background: "#160608",
      textAlign: "center",
      color: "#f7cfd4",
      fontSize: "20px",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.22em",
    },
    heading: {
      margin: 0,
      textAlign: "center",
      fontSize: "52px",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.18em",
      textShadow: "2px 2px 0 #ffffff, 5px 5px 0 #160608",
    },
    grid3: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: "24px",
      marginTop: "40px",
    },
    serviceCard: {
      border: "5px solid #160608",
      background: "#f7cfd4",
      padding: "24px",
      textAlign: "center",
      boxShadow: "7px 7px 0 #e21b3c",
    },
    cardTitle: {
      margin: 0,
      fontSize: "14px",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.3em",
    },
    aboutGrid: {
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "24px",
    },
    aboutCard: {
      border: "5px solid #160608",
      background: "#f7cfd4",
      padding: "28px",
      boxShadow: "8px 8px 0 #160608",
    },
    aboutAccent: {
      border: "5px solid #160608",
      background: "#e21b3c",
      color: "#fff5f6",
      padding: "28px",
      boxShadow: "8px 8px 0 #160608",
    },
    subheading: {
      margin: 0,
      fontSize: "36px",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.15em",
    },
    body: {
      marginTop: "20px",
      marginBottom: 0,
      fontSize: "20px",
      lineHeight: 1.8,
    },
    galleryWrap: {
      overflow: "hidden",
      marginTop: "40px",
      border: "5px solid #160608",
      background: "#f7cfd4",
      boxShadow: "8px 8px 0 #e21b3c",
      padding: "20px",
    },
    galleryTrack: {
      display: "flex",
      gap: "20px",
      width: "max-content",
    },
    card: {
      width: "300px",
      flex: "0 0 auto",
      border: "4px solid #160608",
      background: "#f7cfd4",
      padding: "12px",
      boxShadow: "6px 6px 0 #e21b3c",
      boxSizing: "border-box",
    },
    img: {
      width: "100%",
      height: "220px",
      objectFit: "cover",
      border: "4px solid #160608",
      display: "block",
      boxSizing: "border-box",
    },
    text: {
      marginTop: "10px",
      fontWeight: 900,
      textTransform: "uppercase",
      fontSize: "18px",
    },
    logosGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: "20px",
      marginTop: "40px",
      alignItems: "center",
    },
    logoItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "12px",
      background: "#f7cfd4",
      border: "3px solid #160608",
    },
    logoImg: {
      maxWidth: "100%",
      maxHeight: "60px",
      objectFit: "contain",
      filter: "grayscale(100%)",
      opacity: 0.85,
    },
    contact: {
      padding: "48px 24px",
      textAlign: "center",
    },
    contactText: {
      maxWidth: "760px",
      margin: "20px auto 0",
      fontSize: "20px",
      lineHeight: 1.8,
    },
    contactGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: "24px",
      marginTop: "40px",
    },
    contactCard: {
      border: "5px solid #160608",
      background: "#f7cfd4",
      padding: "24px",
      boxShadow: "7px 7px 0 #e21b3c",
    },
    contactDark: {
      border: "5px solid #f7cfd4",
      background: "#160608",
      color: "#f7cfd4",
      padding: "24px",
      boxShadow: "7px 7px 0 #e21b3c",
    },
    label: {
      margin: 0,
      fontSize: "12px",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.3em",
    },
    value: {
      marginTop: "14px",
      marginBottom: 0,
      fontSize: "24px",
      fontWeight: 900,
      wordBreak: "break-word",
    },
  };

  return (
    <div style={styles.page}>
      <style>{`
        @keyframes scrollGallery {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .moving-gallery-track {
          animation: scrollGallery 30s linear infinite;
          will-change: transform;
        }

        @media (max-width: 900px) {
          .services-grid,
          .about-grid,
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <main style={styles.main}>
        <section style={styles.hero}>
          <img src="/logo.png" alt="Mad Props Logo" style={styles.logo} />

          <div style={styles.introBox}>
            Custom props, playful scenic fabrication, and bold temporary installs
            for events, activations, and branded moments.
          </div>

          <div style={styles.buttonRow}>
            <a href="#work" style={styles.buttonDark}>See Work</a>
            <a href="#contact" style={styles.buttonLight}>Contact</a>
          </div>
        </section>

        <section style={styles.strip}>
          Vintage circus style • handmade builds • big personality
        </section>

        <section style={styles.section} id="services">
          <h2 style={styles.heading}>Featured Acts</h2>
          <div className="services-grid" style={styles.grid3}>
            {services.map((s) => (
              <div key={s} style={styles.serviceCard}>
                <p style={styles.cardTitle}>{s}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section} id="about">
          <div className="about-grid" style={styles.aboutGrid}>
            <div style={styles.aboutCard}>
              <h2 style={styles.subheading}>About</h2>
              <p style={styles.body}>
                Mad Props Event Co creates eye-catching builds for parties,
                activations, retail moments, public art, and branded experiences.
                The style is playful, handcrafted, graphic, and a little theatrical.
              </p>
            </div>

            <div style={styles.aboutAccent}>
              <h3 style={styles.subheading}>Built For</h3>
              <p style={styles.body}>
                Brand activations, event decor, scenic installs, and custom props.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.section} id="work">
          <h2 style={styles.heading}>Recent Work</h2>

          <div style={styles.galleryWrap}>
            <div className="moving-gallery-track" style={styles.galleryTrack}>
              {[...projects, ...projects].map((p, i) => (
                <div key={i} style={styles.card}>
                  <img src={p.image} alt={p.title} style={styles.img} />
                  <div style={styles.text}>{p.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Clients & Collaborators</h2>

          <div style={styles.logosGrid}>
            {logos.map((logo) => (
              <div key={logo.name} style={styles.logoItem}>
                <img src={logo.src} alt={logo.name} style={styles.logoImg} />
              </div>
            ))}
          </div>
        </section>

        <section style={styles.contact} id="contact">
          <h2 style={styles.heading}>Step Right Up</h2>
          <p style={styles.contactText}>
            Ready to make something unforgettable?
          </p>

          <div className="contact-grid" style={styles.contactGrid}>
            <div style={styles.contactCard}>
              <p style={styles.label}>Email</p>
              <p style={styles.value}>hello@madpropseventco.com</p>
            </div>
            <div style={styles.contactCard}>
              <p style={styles.label}>Instagram</p>
              <p style={styles.value}>@madpropseventco</p>
            </div>
            <div style={styles.contactDark}>
              <p style={styles.label}>Based In</p>
              <p style={styles.value}>Dallas, Texas</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
