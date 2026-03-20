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

  const pressLinks = [
    { title: "Feature Title One", outlet: "Publication / Outlet", href: "#" },
    { title: "Feature Title Two", outlet: "Publication / Outlet", href: "#" },
    { title: "Feature Title Three", outlet: "Publication / Outlet", href: "#" },
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#f0b2b6",
      padding: "32px 16px",
      color: "#160608",
      fontFamily: "Arial, Helvetica, sans-serif",
      position: "relative",
      overflowX: "hidden",
    },
    main: {
      maxWidth: "1100px",
      margin: "0 auto",
      border: "10px solid #160608",
      background: "#f0b2b6",
      boxShadow: "20px 20px 0 #e21b3c",
      position: "relative",
      zIndex: 2,
      overflow: "hidden",
    },
    posterBorder: {
      position: "absolute",
      inset: "12px",
      border: "3px solid #160608",
      pointerEvents: "none",
      zIndex: 1,
    },
    posterBorderInner: {
      position: "absolute",
      inset: "24px",
      border: "2px solid #160608",
      pointerEvents: "none",
      zIndex: 1,
      opacity: 0.75,
    },
    section: {
      padding: "30px 150px 46px",
      borderBottom: "8px solid #160608",
      position: "relative",
      zIndex: 4,
    },
    hero: {
      textAlign: "center",
      padding: "26px 150px 46px",
      borderBottom: "8px solid #160608",
      position: "relative",
      zIndex: 4,
    },
    heroTopBand: {
      display: "inline-block",
      marginBottom: "18px",
      padding: "10px 18px",
      border: "4px solid #160608",
      background: "#160608",
      color: "#f7cfd4",
      fontSize: "12px",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.34em",
      boxShadow: "6px 6px 0 #e21b3c",
    },
    logoWrap: {
      position: "relative",
      display: "inline-block",
      padding: "0 120px",
      marginTop: "6px",
    },
    logo: {
      display: "block",
      maxWidth: "560px",
      width: "100%",
      margin: "0 auto 8px",
      transform: "rotate(-1deg)",
      filter: "drop-shadow(2px 2px 0 #160608)",
      position: "relative",
      zIndex: 5,
    },
    topOrnamentLeft: {
      position: "absolute",
      left: "-4px",
      top: "-6px",
      width: "120px",
      zIndex: 3,
      pointerEvents: "none",
    },
    topOrnamentRight: {
      position: "absolute",
      right: "-4px",
      top: "-6px",
      width: "120px",
      zIndex: 3,
      pointerEvents: "none",
      transform: "scaleX(-1)",
    },
    ribbonWrap: {
      display: "flex",
      justifyContent: "center",
      marginTop: "8px",
      marginBottom: "14px",
    },
    ribbon: {
      position: "relative",
      display: "inline-block",
      padding: "12px 28px",
      background: "#e21b3c",
      color: "#fff5f6",
      border: "4px solid #160608",
      fontSize: "13px",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.28em",
      boxShadow: "7px 7px 0 #160608",
    },
    introBox: {
      maxWidth: "760px",
      margin: "16px auto 0",
      border: "5px solid #160608",
      background: "#f7cfd4",
      padding: "24px 28px",
      boxShadow: "8px 8px 0 #e21b3c",
      fontSize: "22px",
      fontWeight: 700,
      lineHeight: 1.7,
      position: "relative",
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
      borderTop: "8px solid #160608",
      background: "#160608",
      textAlign: "center",
      color: "#f7cfd4",
      fontSize: "20px",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.22em",
      position: "relative",
      zIndex: 4,
    },
    headingWrap: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "18px",
    },
    headingFlourish: {
      width: "78px",
      height: "24px",
      flex: "0 0 auto",
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
      position: "relative",
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
      gridTemplateColumns: "1fr",
      gap: "24px",
      marginTop: "40px",
    },
    aboutInlineWrap: {
      float: "right",
      width: "180px",
      marginLeft: "20px",
      marginBottom: "10px",
      border: "4px solid #160608",
      background: "#f7cfd4",
      padding: "6px",
      boxShadow: "5px 5px 0 #e21b3c",
    },
    aboutImage: {
      width: "100%",
      height: "220px",
      objectFit: "cover",
      display: "block",
      border: "3px solid #160608",
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
      padding: "14px",
      background: "#f7cfd4",
      border: "3px solid #160608",
      boxShadow: "5px 5px 0 #e21b3c",
    },
    logoImg: {
      maxWidth: "100%",
      maxHeight: "60px",
      objectFit: "contain",
      filter: "grayscale(100%)",
      opacity: 0.85,
    },
    pressGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: "24px",
      marginTop: "40px",
    },
    pressCard: {
      display: "block",
      textDecoration: "none",
      color: "#160608",
      border: "5px solid #160608",
      background: "#f7cfd4",
      padding: "24px",
      boxShadow: "7px 7px 0 #e21b3c",
    },
    pressMeta: {
      margin: 0,
      fontSize: "12px",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.28em",
    },
    pressTitle: {
      marginTop: "16px",
      marginBottom: 0,
      fontSize: "24px",
      fontWeight: 900,
      lineHeight: 1.35,
      textTransform: "uppercase",
    },
    pressArrow: {
      marginTop: "18px",
      marginBottom: 0,
      fontSize: "14px",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.22em",
    },
    ornamentLeft: {
      position: "absolute",
      left: "16px",
      top: "140px",
      width: "120px",
      height: "78%",
      opacity: 1,
      zIndex: 3,
      pointerEvents: "none",
    },
    ornamentRight: {
      position: "absolute",
      right: "16px",
      top: "140px",
      width: "120px",
      height: "78%",
      opacity: 1,
      zIndex: 3,
      pointerEvents: "none",
      transform: "scaleX(-1)",
    },
    contact: {
      padding: "48px 150px",
      textAlign: "center",
      position: "relative",
      zIndex: 4,
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

  const headingBlock = (title) => (
    <div style={styles.headingWrap}>
      <svg viewBox="0 0 90 24" style={styles.headingFlourish} fill="none">
        <path d="M4 12 H86" stroke="#160608" strokeWidth="4" strokeLinecap="round" />
        <circle cx="45" cy="12" r="6" fill="#e21b3c" stroke="#160608" strokeWidth="3" />
        <path d="M20 12 C12 6, 12 18, 20 12 Z" fill="#160608" />
        <path d="M70 12 C78 6, 78 18, 70 12 Z" fill="#160608" />
      </svg>
      <h2 style={styles.heading}>{title}</h2>
      <svg viewBox="0 0 90 24" style={styles.headingFlourish} fill="none">
        <path d="M4 12 H86" stroke="#160608" strokeWidth="4" strokeLinecap="round" />
        <circle cx="45" cy="12" r="6" fill="#e21b3c" stroke="#160608" strokeWidth="3" />
        <path d="M20 12 C12 6, 12 18, 20 12 Z" fill="#160608" />
        <path d="M70 12 C78 6, 78 18, 70 12 Z" fill="#160608" />
      </svg>
    </div>
  );

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
          .contact-grid,
          .press-grid,
          .logos-grid {
            grid-template-columns: 1fr !important;
          }

          .side-ornament,
          .top-ornament,
          .heading-flourish {
            display: none !important;
          }
        }
      `}</style>

      <main style={styles.main}>
        <div style={styles.posterBorder} />
        <div style={styles.posterBorderInner} />

        <div className="side-ornament" style={styles.ornamentLeft}>
          <svg viewBox="0 0 140 900" width="100%" height="100%" fill="none" style={{ overflow: "visible" }}>
            <path d="M70 20 C38 54, 38 100, 70 134 C102 168, 102 214, 70 248 C38 282, 38 328, 70 362 C102 396, 102 442, 70 476 C38 510, 38 556, 70 590 C102 624, 102 670, 70 704 C38 738, 38 784, 70 818" stroke="#160608" strokeWidth="7" strokeLinecap="round"/>
            <path d="M70 80 C18 80, 14 118, 48 146 C18 172, 18 218, 70 226" stroke="#160608" strokeWidth="7" strokeLinecap="round"/>
            <path d="M70 80 C122 80, 126 118, 92 146 C122 172, 122 218, 70 226" stroke="#160608" strokeWidth="7" strokeLinecap="round"/>
            <path d="M70 340 C18 340, 14 378, 48 406 C18 432, 18 478, 70 486" stroke="#160608" strokeWidth="7" strokeLinecap="round"/>
            <path d="M70 340 C122 340, 126 378, 92 406 C122 432, 122 478, 70 486" stroke="#160608" strokeWidth="7" strokeLinecap="round"/>
            <path d="M70 600 C18 600, 14 638, 48 666 C18 692, 18 738, 70 746" stroke="#160608" strokeWidth="7" strokeLinecap="round"/>
            <path d="M70 600 C122 600, 126 638, 92 666 C122 692, 122 738, 70 746" stroke="#160608" strokeWidth="7" strokeLinecap="round"/>
            <circle cx="70" cy="20" r="12" fill="#e21b3c" stroke="#160608" strokeWidth="4"/>
            <circle cx="70" cy="248" r="12" fill="#e21b3c" stroke="#160608" strokeWidth="4"/>
            <circle cx="70" cy="476" r="12" fill="#e21b3c" stroke="#160608" strokeWidth="4"/>
            <circle cx="70" cy="704" r="12" fill="#e21b3c" stroke="#160608" strokeWidth="4"/>
            <path d="M70 860 l-20 -28 h40 z" fill="#e21b3c" stroke="#160608" strokeWidth="4"/>
          </svg>
        </div>

        <div className="side-ornament" style={styles.ornamentRight}>
          <svg viewBox="0 0 140 900" width="100%" height="100%" fill="none" style={{ overflow: "visible" }}>
            <path d="M70 20 C38 54, 38 100, 70 134 C102 168, 102 214, 70 248 C38 282, 38 328, 70 362 C102 396, 102 442, 70 476 C38 510, 38 556, 70 590 C102 624, 102 670, 70 704 C38 738, 38 784, 70 818" stroke="#160608" strokeWidth="7" strokeLinecap="round"/>
            <path d="M70 80 C18 80, 14 118, 48 146 C18 172, 18 218, 70 226" stroke="#160608" strokeWidth="7" strokeLinecap="round"/>
            <path d="M70 80 C122 80, 126 118, 92 146 C122 172, 122 218, 70 226" stroke="#160608" strokeWidth="7" strokeLinecap="round"/>
            <path d="M70 340 C18 340, 14 378, 48 406 C18 432, 18 478, 70 486" stroke="#160608" strokeWidth="7" strokeLinecap="round"/>
            <path d="M70 340 C122 340, 126 378, 92 406 C122 432, 122 478, 70 486" stroke="#160608" strokeWidth="7" strokeLinecap="round"/>
            <path d="M70 600 C18 600, 14 638, 48 666 C18 692, 18 738, 70 746" stroke="#160608" strokeWidth="7" strokeLinecap="round"/>
            <path d="M70 600 C122 600, 126 638, 92 666 C122 692, 122 738, 70 746" stroke="#160608" strokeWidth="7" strokeLinecap="round"/>
            <circle cx="70" cy="20" r="12" fill="#e21b3c" stroke="#160608" strokeWidth="4"/>
            <circle cx="70" cy="248" r="12" fill="#e21b3c" stroke="#160608" strokeWidth="4"/>
            <circle cx="70" cy="476" r="12" fill="#e21b3c" stroke="#160608" strokeWidth="4"/>
            <circle cx="70" cy="704" r="12" fill="#e21b3c" stroke="#160608" strokeWidth="4"/>
            <path d="M70 860 l-20 -28 h40 z" fill="#e21b3c" stroke="#160608" strokeWidth="4"/>
          </svg>
        </div>

        <section style={styles.hero}>
          <div style={styles.heroTopBand}>Mad Props Event Co Presents</div>

          <div style={styles.logoWrap}>
            <div className="top-ornament" style={styles.topOrnamentLeft}>
              <svg viewBox="0 0 140 220" width="100%" height="100%" fill="none">
                <path d="M70 18 C40 38, 34 76, 70 102 C106 128, 100 166, 70 194" stroke="#160608" strokeWidth="6" strokeLinecap="round"/>
                <path d="M70 50 C24 50, 18 82, 48 100 C22 116, 22 148, 70 154" stroke="#160608" strokeWidth="6" strokeLinecap="round"/>
                <path d="M70 50 C116 50, 122 82, 92 100 C118 116, 118 148, 70 154" stroke="#160608" strokeWidth="6" strokeLinecap="round"/>
                <circle cx="70" cy="18" r="10" fill="#e21b3c" stroke="#160608" strokeWidth="4"/>
                <circle cx="70" cy="102" r="10" fill="#e21b3c" stroke="#160608" strokeWidth="4"/>
              </svg>
            </div>

            <div className="top-ornament" style={styles.topOrnamentRight}>
              <svg viewBox="0 0 140 220" width="100%" height="100%" fill="none">
                <path d="M70 18 C40 38, 34 76, 70 102 C106 128, 100 166, 70 194" stroke="#160608" strokeWidth="6" strokeLinecap="round"/>
                <path d="M70 50 C24 50, 18 82, 48 100 C22 116, 22 148, 70 154" stroke="#160608" strokeWidth="6" strokeLinecap="round"/>
                <path d="M70 50 C116 50, 122 82, 92 100 C118 116, 118 148, 70 154" stroke="#160608" strokeWidth="6" strokeLinecap="round"/>
                <circle cx="70" cy="18" r="10" fill="#e21b3c" stroke="#160608" strokeWidth="4"/>
                <circle cx="70" cy="102" r="10" fill="#e21b3c" stroke="#160608" strokeWidth="4"/>
              </svg>
            </div>

            <img src="/logo.png" alt="Mad Props Logo" style={styles.logo} />
          </div>

          <div style={styles.ribbonWrap}>
            <div style={styles.ribbon}>Custom Props • Scenic Fabrication • Event Spectacle</div>
          </div>

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
          {headingBlock("Featured Acts")}
          <div className="services-grid" style={styles.grid3}>
            {services.map((s) => (
              <div key={s} style={styles.serviceCard}>
                <p style={styles.cardTitle}>{s}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section} id="about">
          {headingBlock("About")}
          <div className="about-grid" style={styles.aboutGrid}>
            <div style={styles.aboutCard}>
              <h3 style={styles.subheading}>The Main Attraction</h3>

              <div style={styles.aboutInlineWrap}>
                <img src="/me.jpg" alt="Madison Mask" style={styles.aboutImage} />
              </div>

              <p style={styles.body}>
                Mad Props Event Co is led by Madison Mask — an art producer and fabricator focused on creating bold, playful, and highly shareable event builds.
              </p>
              <p style={styles.body}>
                With a background in event production and hands-on fabrication, Madison bridges concept and execution — turning ideas into physical experiences that people actually interact with.
              </p>
              <p style={styles.body}>
                Based in Dallas, the work blends scrappy creativity with real fabrication know-how — meaning ideas don’t just look good, they actually get built.
              </p>
            </div>

            <div style={styles.aboutAccent}>
              <h3 style={styles.subheading}>What Sets It Apart</h3>
              <p style={styles.body}>
                Fast-turn builds, creative problem solving, and a focus on moments that photograph well and stick with people.
              </p>
              <p style={styles.body}>
                From scrappy installs to large-scale activations, everything is designed to feel custom, intentional, and a little unexpected.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.section} id="work">
          {headingBlock("Recent Work")}

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
          {headingBlock("Clients & Collaborators")}

          <div className="logos-grid" style={styles.logosGrid}>
            {logos.map((logo) => (
              <div key={logo.name} style={styles.logoItem}>
                <img src={logo.src} alt={logo.name} style={styles.logoImg} />
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section} id="press">
          {headingBlock("Media & News")}

          <div className="press-grid" style={styles.pressGrid}>
            {pressLinks.map((item) => (
              <a key={item.title} href={item.href} style={styles.pressCard}>
                <p style={styles.pressMeta}>{item.outlet}</p>
                <p style={styles.pressTitle}>{item.title}</p>
                <p style={styles.pressArrow}>Read More</p>
              </a>
            ))}
          </div>
        </section>

        <section style={styles.contact} id="contact">
          {headingBlock("Step Right Up")}
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
