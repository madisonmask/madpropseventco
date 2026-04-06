"use client";

<div style={{
  position: "absolute",
  width: "1px",
  height: "1px",
  overflow: "hidden"
}}>
  <a href="/event-photo-backdrop-dallas">Event Photo Backdrops in Dallas</a>
  <a href="/custom-event-props-dallas">Custom Event Props in Dallas</a>
  <a href="/scenic-fabrication-dallas">Scenic Fabrication in Dallas</a>
</div>

export default function HomePageClient() {
  const services = [
    "Custom event props in Dallas",
    "Scenic fabrication for Events",
    "Photo Backdrops & Branded Installations",
  ];

  const projects = [
  {
    title: "Grateful Community Wall",
    image: "/grateful-wall.jpg",
    alt: "Custom community event wall installation in Dallas by Mad Props Event Co",
    seoText:
      "Custom event installation in Dallas designed as an interactive community wall and photo backdrop for public events, brand activations, and shareable experiences.",
  },
  {
    title: "You Are Here Marker",
    image: "/you-are-here.jpg",
    alt: "Interactive public art marker and event installation in Dallas-Fort Worth",
    seoText:
      "Large-scale scenic fabrication and public event installation in Dallas-Fort Worth created as a visual landmark, wayfinding moment, and interactive photo opportunity.",
  },
  {
    title: "St. Patrick's Day Bench",
    image: "/st-patricks-bench.jpg",
    alt: "St. Patrick's Day photo backdrop and seasonal event installation in Dallas",
    seoText:
      "Seasonal St. Patrick's Day event backdrop in Dallas built for community programming, holiday activations, and social-media-friendly photo moments.",
  },
  {
    title: "Year of the Snake",
    image: "/year-of-the-snake.jpg",
    alt: "Custom themed event prop and scenic fabrication piece in Dallas",
    seoText:
      "Custom themed scenic fabrication piece for a temporary event installation in Dallas, designed for branded environments, festivals, and immersive event decor.",
  },
];
  const logos = [
    { name: "Client One", src: "/logo1.png" },
    { name: "Client Two", src: "/logo2.png" },
    { name: "Client Three", src: "/logo3.png" },
    { name: "Client Four", src: "/logo4.png" },
    { name: "Client Five", src: "/logo5.png" },
    { name: "Client Six", src: "/logo6.png" },
  ];

  const LIGHT_BLUE = "#7dd3fc";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mad Props Event Co",
    image: "https://www.madpropsevent.co/og-image.jpg",
    url: "https://www.madpropsevent.co/",
    email: "madison@madpropsevent.co",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dallas",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: [
      "Dallas, TX",
      "Fort Worth, TX",
      "Plano, TX",
      "Frisco, TX",
      "Arlington, TX",
      "DFW",
    ],
    description:
      "Mad Props Event Co designs and builds custom event props, photo backdrops, scenic fabrication, and temporary installations for events in Dallas-Fort Worth.",
    sameAs: ["https://instagram.com/madpropseventco"],
    services: [
      "Custom event props",
      "Scenic fabrication",
      "Photo backdrops",
      "Event installations",
      "Festival props",
      "Branded activations",
    ],
  };

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
    skipLink: {
      position: "absolute",
      left: "-9999px",
      top: "auto",
      width: "1px",
      height: "1px",
      overflow: "hidden",
    },
    main: {
      maxWidth: "1300px",
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
      padding: "30px 100px 46px",
      borderBottom: "8px solid #160608",
      position: "relative",
      zIndex: 4,
    },
  hero: {
  textAlign: "center",
  padding: "24px 60px 40px",
  borderBottom: "8px solid #160608",
  position: "relative",
  zIndex: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
},
   heroTopBand: {
  display: "inline-block",
  marginBottom: "20px",
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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "760px",
  margin: "0 auto",
  padding: 0,
},
    logo: {
  display: "block",
  maxWidth: "620px",
  width: "100%",
  margin: "0 auto",
  transform: "none",
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
  marginTop: "18px",
  marginBottom: "18px",
  width: "100%",
},
 ribbon: {
  display: "inline-block",
  maxWidth: "1100px",
  width: "100%",
  padding: "14px 24px",
  background: "#7dd3fc",
  color: "#fff5f6",
  border: "4px solid #160608",
  fontSize: "13px",
  fontWeight: 900,
  textTransform: "uppercase",
  letterSpacing: "0.24em",
  boxShadow: "7px 7px 0 #160608",
},
    introBox: {
  maxWidth: "760px",
  margin: "10px auto 0",
  border: "5px solid #160608",
  background: "#f7cfd4",
  padding: "22px 24px",
  boxShadow: "8px 8px 0 #e21b3c",
  fontSize: "20px",
  fontWeight: 700,
  lineHeight: 1.6,
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
    },
    cardTitle: {
      margin: 0,
      fontSize: "14px",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
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
    sectionIntro: {
      maxWidth: "920px",
      margin: "20px auto 0",
      textAlign: "center",
      fontSize: "18px",
      lineHeight: 1.7,
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
      padding: "48px 100px",
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
    contactGridWrap: {
      marginTop: "40px",
    },
    contactGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "24px",
      marginTop: 0,
      alignItems: "stretch",
    },
    contactCard: {
      border: "5px solid #160608",
      background: "#f7cfd4",
      padding: "20px 16px",
      boxShadow: "7px 7px 0 #e21b3c",
      minHeight: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      textDecoration: "none",
      color: "inherit",
    },
    value: {
      margin: 0,
      fontSize: "20px",
      lineHeight: 1.35,
      fontWeight: 900,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  };

  const headingBlock = (title) => (
    <div style={styles.headingWrap}>
      <svg className="heading-flourish" viewBox="0 0 90 24" style={styles.headingFlourish} fill="none">
        <path d="M4 12 H86" stroke="#160608" strokeWidth="4" strokeLinecap="round" />
        <circle cx="45" cy="12" r="6" fill={LIGHT_BLUE} stroke="#160608" strokeWidth="3" />
        <path d="M20 12 C12 6, 12 18, 20 12 Z" fill="#160608" />
        <path d="M70 12 C78 6, 78 18, 70 12 Z" fill="#160608" />
      </svg>
      <h2 className="poster-heading" style={styles.heading}>{title}</h2>
      <svg className="heading-flourish" viewBox="0 0 90 24" style={styles.headingFlourish} fill="none">
        <path d="M4 12 H86" stroke="#160608" strokeWidth="4" strokeLinecap="round" />
        <circle cx="45" cy="12" r="6" fill={LIGHT_BLUE} stroke="#160608" strokeWidth="3" />
        <path d="M20 12 C12 6, 12 18, 20 12 Z" fill="#160608" />
        <path d="M70 12 C78 6, 78 18, 70 12 Z" fill="#160608" />
      </svg>
    </div>
  );

  return (
    <div style={styles.page}>
      <a href="#main-content" style={styles.skipLink}>Skip to content</a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style>{`
        @keyframes scrollGallery {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .moving-gallery-track {
          animation: scrollGallery 30s linear infinite;
          will-change: transform;
        }

        .moving-gallery-track:hover {
          animation-play-state: paused;
        }

        .skip-link:focus,
        a[href="#main-content"]:focus {
          position: absolute !important;
          left: 16px !important;
          top: 16px !important;
          width: auto !important;
          height: auto !important;
          overflow: visible !important;
          background: #160608;
          color: #fff5f6;
          padding: 12px 16px;
          z-index: 9999;
        }

        @media (max-width: 900px) {
          .services-grid,
          .about-grid,
          .contact-grid,
          .logos-grid {
            grid-template-columns: 1fr !important;
          }

          .side-ornament,
          .top-ornament,
          .heading-flourish {
            display: none !important;
          }

          .poster-main {
            box-shadow: 10px 10px 0 #e21b3c !important;
          }
        }

        @media (max-width: 700px) {
          .poster-main {
            border-width: 7px !important;
          }

          .poster-border,
          .poster-border-inner {
            display: none !important;
          }

          .poster-section,
          .poster-hero,
          .poster-contact {
            padding-left: 18px !important;
            padding-right: 18px !important;
          }

          .poster-heading {
            font-size: 34px !important;
            letter-spacing: 0.1em !important;
            line-height: 1.05 !important;
          }

          .poster-intro {
            font-size: 17px !important;
            line-height: 1.55 !important;
            padding: 18px 16px !important;
          }

          .poster-contact-text {
            font-size: 17px !important;
            line-height: 1.55 !important;
          }

          .poster-contact-card {
            padding: 18px 14px !important;
          }

          .poster-contact-value {
            font-size: 16px !important;
          }

          .poster-about-inline {
            float: none !important;
            width: 100% !important;
            max-width: 220px;
            margin: 0 auto 16px !important;
          }

          .poster-logo-wrap {
            padding: 0 !important;
          }

          .poster-logo {
            max-width: 100% !important;
          }

          .poster-ribbon {
            font-size: 11px !important;
            letter-spacing: 0.16em !important;
            padding: 10px 12px !important;
          }
        }
      `}</style>

      <main className="poster-main" style={styles.main} id="main-content">
        <div className="poster-border" style={styles.posterBorder} />
        <div className="poster-border-inner" style={styles.posterBorderInner} />

        <div className="side-ornament" style={styles.ornamentLeft}>
          <svg viewBox="0 0 140 900" width="100%" height="100%" fill="none" style={{ overflow: "visible" }}>
            <path d="M70 20 C38 54, 38 100, 70 134 C102 168, 102 214, 70 248 C38 282, 38 328, 70 362 C102 396, 102 442, 70 476 C38 510, 38 556, 70 590 C102 624, 102 670, 70 704 C38 738, 38 784, 70 818" stroke="#160608" strokeWidth="7" strokeLinecap="round" />
            <path d="M70 80 C18 80, 14 118, 48 146 C18 172, 18 218, 70 226" stroke="#160608" strokeWidth="7" strokeLinecap="round" />
            <path d="M70 80 C122 80, 126 118, 92 146 C122 172, 122 218, 70 226" stroke="#160608" strokeWidth="7" strokeLinecap="round" />
            <path d="M70 340 C18 340, 14 378, 48 406 C18 432, 18 478, 70 486" stroke="#160608" strokeWidth="7" strokeLinecap="round" />
            <path d="M70 340 C122 340, 126 378, 92 406 C122 432, 122 478, 70 486" stroke="#160608" strokeWidth="7" strokeLinecap="round" />
            <path d="M70 600 C18 600, 14 638, 48 666 C18 692, 18 738, 70 746" stroke="#160608" strokeWidth="7" strokeLinecap="round" />
            <path d="M70 600 C122 600, 126 638, 92 666 C122 692, 122 738, 70 746" stroke="#160608" strokeWidth="7" strokeLinecap="round" />
            <circle cx="70" cy="20" r="12" fill={LIGHT_BLUE} stroke="#160608" strokeWidth="4" />
            <circle cx="70" cy="248" r="12" fill={LIGHT_BLUE} stroke="#160608" strokeWidth="4" />
            <circle cx="70" cy="476" r="12" fill={LIGHT_BLUE} stroke="#160608" strokeWidth="4" />
            <circle cx="70" cy="704" r="12" fill={LIGHT_BLUE} stroke="#160608" strokeWidth="4" />
            <path d="M70 860 l-20 -28 h40 z" fill="#7dd3fc" stroke="#160608" strokeWidth="4" />
          </svg>
        </div>

        <div className="side-ornament" style={styles.ornamentRight}>
          <svg viewBox="0 0 140 900" width="100%" height="100%" fill="none" style={{ overflow: "visible" }}>
            <path d="M70 20 C38 54, 38 100, 70 134 C102 168, 102 214, 70 248 C38 282, 38 328, 70 362 C102 396, 102 442, 70 476 C38 510, 38 556, 70 590 C102 624, 102 670, 70 704 C38 738, 38 784, 70 818" stroke="#160608" strokeWidth="7" strokeLinecap="round" />
            <path d="M70 80 C18 80, 14 118, 48 146 C18 172, 18 218, 70 226" stroke="#160608" strokeWidth="7" strokeLinecap="round" />
            <path d="M70 80 C122 80, 126 118, 92 146 C122 172, 122 218, 70 226" stroke="#160608" strokeWidth="7" strokeLinecap="round" />
            <path d="M70 340 C18 340, 14 378, 48 406 C18 432, 18 478, 70 486" stroke="#160608" strokeWidth="7" strokeLinecap="round" />
            <path d="M70 340 C122 340, 126 378, 92 406 C122 432, 122 478, 70 486" stroke="#160608" strokeWidth="7" strokeLinecap="round" />
            <path d="M70 600 C18 600, 14 638, 48 666 C18 692, 18 738, 70 746" stroke="#160608" strokeWidth="7" strokeLinecap="round" />
            <path d="M70 600 C122 600, 126 638, 92 666 C122 692, 122 738, 70 746" stroke="#160608" strokeWidth="7" strokeLinecap="round" />
            <circle cx="70" cy="20" r="12" fill="#7dd3fc" stroke="#160608" strokeWidth="4" />
            <circle cx="70" cy="248" r="12" fill="#7dd3fc" stroke="#160608" strokeWidth="4" />
            <circle cx="70" cy="476" r="12" fill="#7dd3fc" stroke="#160608" strokeWidth="4" />
            <circle cx="70" cy="704" r="12" fill="#7dd3fc" stroke="#160608" strokeWidth="4" />
            <path d="M70 860 l-20 -28 h40 z" fill="#7dd3fc" stroke="#160608" strokeWidth="4" />
          </svg>
        </div>

        <header className="poster-hero" style={styles.hero}>
          <div style={{ ...styles.heroTopBand, marginBottom: "24px" }}>
            Welcome to the Greatest Show
          </div>

          <div className="poster-logo-wrap" style={styles.logoWrap}>
            <div className="top-ornament" style={styles.topOrnamentLeft}>
              <svg viewBox="0 0 140 220" width="100%" height="100%" fill="none">
                <path d="M70 18 C40 38, 34 76, 70 102 C106 128, 100 166, 70 194" stroke="#160608" strokeWidth="6" strokeLinecap="round" />
                <path d="M70 50 C24 50, 18 82, 48 100 C22 116, 22 148, 70 154" stroke="#160608" strokeWidth="6" strokeLinecap="round" />
                <path d="M70 50 C116 50, 122 82, 92 100 C118 116, 118 148, 70 154" stroke="#160608" strokeWidth="6" strokeLinecap="round" />
                <circle cx="70" cy="18" r="10" fill="#e21b3c" stroke="#160608" strokeWidth="4" />
                <circle cx="70" cy="102" r="10" fill="#e21b3c" stroke="#160608" strokeWidth="4" />
              </svg>
            </div>

            <div className="top-ornament" style={styles.topOrnamentRight}>
              <svg viewBox="0 0 140 220" width="100%" height="100%" fill="none">
                <path d="M70 18 C40 38, 34 76, 70 102 C106 128, 100 166, 70 194" stroke="#160608" strokeWidth="6" strokeLinecap="round" />
                <path d="M70 50 C24 50, 18 82, 48 100 C22 116, 22 148, 70 154" stroke="#160608" strokeWidth="6" strokeLinecap="round" />
                <path d="M70 50 C116 50, 122 82, 92 100 C118 116, 118 148, 70 154" stroke="#160608" strokeWidth="6" strokeLinecap="round" />
                <circle cx="70" cy="18" r="10" fill="#e21b3c" stroke="#160608" strokeWidth="4" />
                <circle cx="70" cy="102" r="10" fill="#e21b3c" stroke="#160608" strokeWidth="4" />
              </svg>
            </div>

            <img
              className="poster-logo"
              src="/logo.png"
              alt="Mad Props Event Co logo"
              style={styles.logo}
            />
          </div>

          <div style={styles.ribbonWrap}>
            <div className="poster-ribbon" style={styles.ribbon}>
              Dallas Event Props • Scenic Fabrication • Photo Backdrops
            </div>
          </div>

     <h1 style={{
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0
}}>
  Custom Event Props, Photo Backdrops & Scenic Fabrication in Dallas
</h1>

          <div className="poster-intro" style={styles.introBox}>
            Mad Props Event Co creates custom event props, scenic fabrication, photo backdrops, and
            bold temporary installations for corporate events, festivals, brand activations,
            private parties, and community events across Dallas-Fort Worth.
          </div>

          <div style={styles.buttonRow}>
            <a href="#work" style={styles.buttonDark}>See Work</a>
            <a href="#contact" style={styles.buttonLight}>Contact Mad Props</a>
          </div>
        </header>

    <section className="poster-section" style={styles.section} id="work" aria-labelledby="work-heading">
  {headingBlock("Recent Work")}
  <div style={styles.galleryWrap}>
    <div className="moving-gallery-track" style={styles.galleryTrack}>
      {[...projects, ...projects].map((p, i) => (
        <figure key={i} style={styles.card}>
          <img src={p.image} alt={p.alt} style={styles.img} loading="lazy" />
          <figcaption style={styles.text}>{p.title}</figcaption>
          <p style={styles.srOnly}>{p.seoText}</p>
        </figure>
      ))}
    </div>
  </div>
</section>

        <section className="poster-section" style={styles.section} id="work" aria-labelledby="work-heading">
          {headingBlock("Recent Work")}
          <p style={styles.sectionIntro}>
            Recent custom event installations, scenic builds, and photo-worthy props created for
            public activations, seasonal events, and branded experiences in Dallas and across DFW.
          </p>
          <div style={styles.galleryWrap}>
            <div className="moving-gallery-track" style={styles.galleryTrack}>
              {[...projects, ...projects].map((p, i) => (
                <figure key={i} style={styles.card}>
                  <img src={p.image} alt={p.alt} style={styles.img} loading="lazy" />
                  <figcaption style={styles.text}>{p.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="poster-section" style={styles.section} id="about" aria-labelledby="about-heading">
          {headingBlock("About")}
          <div className="about-grid" style={styles.aboutGrid}>
            <div style={styles.aboutCard}>
              <h3 style={styles.subheading}>The Ring Leader</h3>
              <div className="poster-about-inline" style={styles.aboutInlineWrap}>
                <img
                  src="/me.jpg"
                  alt="Madison Mask, founder of Mad Props Event Co in Dallas"
                  style={styles.aboutImage}
                  loading="lazy"
                />
              </div>
              <p style={styles.body}>
                Mad Props Event Co is led by Madison Mask, a Dallas-based art producer and fabricator
                focused on creating bold, playful, and highly shareable event builds.
              </p>
              <p style={styles.body}>
                With a background in event production and hands-on fabrication, Madison bridges concept
                and execution to create custom event props, scenic fabrication, and large-scale
                installations that people actually interact with.
              </p>
              <p style={styles.body}>
                Based in Dallas and serving the greater DFW area, the work blends scrappy creativity
                with real fabrication know-how, so ideas do not just look good online — they get built
                for real events, real spaces, and real audiences.
              </p>
            </div>

            <div style={styles.aboutAccent}>
              <h3 style={styles.subheading}>What Sets It Apart</h3>
              <p style={styles.body}>
                Fast-turn builds, creative problem solving, and a strong focus on photo moments,
                brand visibility, and scenic pieces that make events feel custom.
              </p>
              <p style={styles.body}>
                From private parties and HOA events to downtown activations and branded installs,
                every build is designed to feel intentional, interactive, and memorable.
              </p>
            </div>
          </div>
        </section>

        <section className="poster-section" style={styles.section} aria-labelledby="clients-heading">
          {headingBlock("Clients & Collaborators")}
          <p style={styles.sectionIntro}>
            Mad Props Event Co works with organizations, event teams, and creative collaborators on
            custom fabrication, scenic builds, and event photo backdrops across Dallas-Fort Worth.
          </p>
          <div className="logos-grid" style={styles.logosGrid}>
            {logos.map((logo) => (
              <div key={logo.name} style={styles.logoItem}>
                <img
                  src={logo.src}
                  alt={`${logo.name} collaborator logo`}
                  style={styles.logoImg}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="poster-contact" style={styles.contact} id="contact" aria-labelledby="contact-heading">
          {headingBlock("Step Right Up")}
          <p className="poster-contact-text" style={styles.contactText}>
            Looking for custom event props in Dallas, a photo backdrop for an activation, or scenic
            fabrication for a festival, corporate event, HOA event, or private party? Let’s build it.
          </p>

          <div style={styles.contactGridWrap}>
            <div className="contact-grid" style={styles.contactGrid}>
              <a
                href="mailto:madison@madpropsevent.co"
                className="poster-contact-card"
                style={styles.contactCard}
                aria-label="Email Mad Props Event Co"
              >
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "6px" }}>
                    Email
                  </div>
                  <span className="poster-contact-value" style={styles.value}>
                    madison@madpropsevent.co
                  </span>
                </div>
              </a>

              <a
                href="https://instagram.com/madpropseventco"
                target="_blank"
                rel="noreferrer"
                className="poster-contact-card"
                style={styles.contactCard}
                aria-label="Visit Mad Props Event Co on Instagram"
              >
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "6px" }}>
                    Instagram
                  </div>
                  <span className="poster-contact-value" style={styles.value}>
                    @madpropseventco
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>

  );
}

