"use client";

export default function Page() {
  const projects = [
    { title: "Grateful Community Wall", image: "/grateful-wall.jpg" },
    { title: "You Are Here Marker", image: "/you-are-here.jpg" },
    { title: "St. Patrick's Day Bench", image: "/st-patricks-bench.jpg" },
    { title: "Year of the Snake", image: "/year-of-the-snake.jpg" },
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
      filter: "drop-shadow(8px 8px 0 #160608)",
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
    heading: {
      margin: 0,
      textAlign: "center",
      fontSize: "52px",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.18em",
      textShadow: "2px 2px 0 #ffffff, 5px 5px 0 #160608",
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
    },
    img: {
      width: "100%",
      height: "220px",
      objectFit: "cover",
      border: "4px solid #160608",
    },
    text: {
      marginTop: "10px",
      fontWeight: 900,
      textTransform: "uppercase",
      fontSize: "18px",
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
      `}</style>

      <main style={styles.main}>
        <section style={styles.hero}>
          <img src="/logo.png" style={styles.logo} />

          <div style={styles.introBox}>
            Custom props, playful scenic fabrication, and bold temporary installs
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Recent Work</h2>

          <div style={styles.galleryWrap}>
            <div className="moving-gallery-track" style={styles.galleryTrack}>
              {[...projects, ...projects].map((p, i) => (
                <div key={i} style={styles.card}>
                  <img src={p.image} style={styles.img} />
                  <div style={styles.text}>{p.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
