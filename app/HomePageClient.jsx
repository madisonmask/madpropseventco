"use client";

import { useEffect, useRef, useState } from "react";

// Gallery settings
const START_DELAY_MS = 3000;
const PIXELS_PER_SECOND = 25; // Lower this for slower movement.

const projects = [
  {
    title: "Fan Expo Toy Box",
    image: "/fan-expo-toy-box.jpg",
    alt: "Life-size collectible toy box photo opportunity for Fan Expo Dallas",
  },
  {
    title: "Bungalow 60 Branded Entry Arch",
    image: "/archway.jpg",
    alt: "Custom pink Bungalow 60 entrance arch with matching planter boxes",
  },
  {
    title: "America 250 Birthday Cake",
    image: "/fourthofjulycake.jpg",
    alt: "Giant red, white and blue birthday cake celebrating America's 250th anniversary",
  },
  {
    title: "Texas Silent Disco Installation",
    image: "/silentdiscotexas.png",
    alt: "Texas-shaped silent disco installation with headphones and a record",
  },
  {
    title: "Downtown Dallas Arts Installation",
    image: "/downtowndallasarts.png",
    alt: "Custom public art installation created for Downtown Dallas",
  },
  {
    title: "Dallas College Fashion Show",
    image: "/caedletters.png",
    alt: "Large custom-built CAED display letters",
  },
  {
    title: "Grateful Community Wall",
    image: "/grateful-wall.jpg",
    alt: "Interactive community wall and event photo backdrop in Dallas",
  },
  {
    title: "You Are Here Marker",
    image: "/you-are-here.jpg",
    alt: "Large public art marker and photo opportunity in Dallas",
  },
  {
    title: "St. Patrick's Day Bench",
    image: "/st-patricks-bench.jpg",
    alt: "St. Patrick's Day bench and seasonal event photo opportunity",
  },
  {
    title: "Year of the Snake",
    image: "/year-of-the-snake.jpg",
    alt: "Custom Year of the Snake themed event installation",
  },
];

const clientLogos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
];

export default function HomePageClient() {
  const galleryRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);

  // Respect visitors who prefer reduced motion.
  useEffect(() => {
    const preference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updatePreference = () => {
      setReducedMotion(preference.matches);
    };

    updatePreference();
    preference.addEventListener("change", updatePreference);

    return () => {
      preference.removeEventListener("change", updatePreference);
    };
  }, []);

  // Watch for the gallery entering the screen.
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(gallery);

    return () => observer.disconnect();
  }, []);

  // Wait three seconds before the first automatic movement.
  // Leaving the section before the timer finishes resets the delay.
  useEffect(() => {
    if (!visible || started) return;

    const timer = window.setTimeout(() => {
      setStarted(true);
    }, START_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [visible, started]);

  // Slowly scroll the gallery and loop through the duplicated cards.
  useEffect(() => {
    if (
      !started ||
      !visible ||
      paused ||
      hovered ||
      focused ||
      reducedMotion
    ) {
      return;
    }

    const gallery = galleryRef.current;
    if (!gallery) return;

    let frame;
    let previousTime;
    let position = gallery.scrollLeft;

    const animate = (time) => {
      if (previousTime !== undefined) {
        const elapsed = Math.min(time - previousTime, 50);
        const group = gallery.querySelector(".gallery-group");
        const groupWidth = group?.getBoundingClientRect().width || 0;

        position += (PIXELS_PER_SECOND * elapsed) / 1000;

        if (groupWidth && position >= groupWidth) {
          position -= groupWidth;
        }

        gallery.scrollLeft = position;
      }

      previousTime = time;
      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frame);
  }, [started, visible, paused, hovered, focused, reducedMotion]);

  return (
    <main id="madprops-site">
      <div className="poster">
        {/* HERO — no top buttons */}
        <header className="hero">
          <h1 className="sr-only">
            Mad Props Event Co — Custom Event Props and Scenic
            Fabrication in Dallas
          </h1>

        <img
  className="circus-art"
  src="/madprops-circus-hero.webp"
  alt="Mad Props Event Co — Welcome to the Greatest Show"
  fetchPriority="high"
          />

          <p className="intro">
            Bold, photo-worthy props and temporary installations built
            for brands, festivals, private events, and public spaces
            across Dallas–Fort Worth.
          </p>
        </header>

        {/* SERVICES */}
        <section
          className="section cream"
          aria-label="Custom fabrication services"
        >
          <div className="circus-divider" aria-hidden="true">
            ❧ ━ ★ ━ ❧
          </div>

          <div className="services">
            <div className="service">
              <span className="service-star" aria-hidden="true">
                ★
              </span>
              Custom Event Props
            </div>

            <div className="service">
              <span className="service-star" aria-hidden="true">
                ✦
              </span>
              Scenic Fabrication
            </div>

            <div className="service">
              <span className="service-star" aria-hidden="true">
                ★
              </span>
              Photo Backdrops &amp; Branded Installs
            </div>
          </div>
        </section>

        {/* RECENT WORK */}
        <section
          className="section work-section"
          id="work"
          aria-labelledby="work-heading"
        >
          <h2 className="banner work-banner" id="work-heading">
            Recent Work
          </h2>

          <p className="section-copy">
            Recent custom event installations, scenic builds, and
            photo-worthy props created for public activations, seasonal
            events, and branded experiences in Dallas and across DFW.
          </p>

          {!reducedMotion && (
            <div className="gallery-controls">
              <button
                type="button"
                onClick={() => setPaused((current) => !current)}
                aria-pressed={paused}
                aria-controls="project-gallery"
              >
                {paused ? "Resume gallery" : "Pause gallery"}
              </button>
            </div>
          )}

          <div
            id="project-gallery"
            className="gallery-shell"
            ref={galleryRef}
            tabIndex={0}
            role="region"
            aria-label="Recent projects. Scroll horizontally to browse."
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setFocused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setFocused(false);
              }
            }}
            onTouchStart={() => setPaused(true)}
          >
            <div className="gallery-track">
              {[0, 1].map((copy) => (
                <div
                  className="gallery-group"
                  key={copy}
                  aria-hidden={copy === 1 ? true : undefined}
                >
                  {projects.map((project) => (
                    <figure className="project-card" key={project.image}>
                      <img
                        src={project.image}
                        alt={copy === 0 ? project.alt : ""}
                        loading="lazy"
                        width="600"
                        height="450"
                      />

                      <figcaption>{project.title}</figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          className="section cream"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="circus-divider" aria-hidden="true">
            ❧ ━ ★ ━ ❧
          </div>

          <h2 className="banner" id="about-heading">
            About
          </h2>

          <div className="bio-layout">
            <div className="portrait">
              <img
                src="/me.jpg"
                alt="Madison Mask, founder and fabricator at Mad Props Event Co"
                loading="lazy"
                width="460"
                height="560"
              />

              <div className="portrait-caption">
                Madison Mask
                <small>Founder &amp; Fabricator</small>
              </div>
            </div>

            <div className="bio">
              <h3>The Ring Leader</h3>

              <p>
                Mad Props Event Co is led by Madison Mask, a Dallas-based
                art producer and fabricator focused on creating bold,
                playful, and highly shareable event builds.
              </p>

              <p>
                With a background in event production and hands-on
                fabrication, Madison bridges concept and execution to
                create custom event props, scenic fabrication, and
                large-scale installations that people actually interact
                with.
              </p>

              <p>
                Based in Dallas and serving the greater DFW area, the
                work blends scrappy creativity with real fabrication
                know-how, so ideas do not just look good online — they
                get built for real events, real spaces, and real
                audiences.
              </p>
            </div>
          </div>

          <div className="difference">
            <h3>★ What Sets It Apart</h3>

            <p>
              Fast-turn builds, creative problem solving, and a strong
              focus on photo moments, brand visibility, and scenic
              pieces that make events feel custom.
            </p>

            <p>
              From private parties and HOA events to downtown activations
              and branded installs, every build is designed to feel
              intentional, interactive, and memorable.
            </p>
          </div>
        </section>

        {/* CLIENTS */}
        <section
          className="section"
          id="clients"
          aria-labelledby="clients-heading"
        >
          <div className="circus-divider" aria-hidden="true">
            ❧ ━ ★ ━ ❧
          </div>

          <h2 className="banner" id="clients-heading">
            Clients &amp; Collaborators
          </h2>

          <p className="section-copy">
            Mad Props Event Co works with organizations, event teams,
            and creative collaborators on custom fabrication, scenic
            builds, and event photo backdrops across Dallas–Fort Worth.
          </p>

          <div className="client-grid">
            {clientLogos.map((logo, index) => (
              <div className="client-slot" key={logo}>
                <img
                  src={logo}
                  alt={`Client or collaborator logo ${index + 1}`}
                  loading="lazy"
                  width="200"
                  height="100"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          className="closing"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="circus-divider" aria-hidden="true">
            ❧ ━ ★ ━ ❧
          </div>

          <h2 id="contact-heading">Step Right Up</h2>

          <p className="contact-copy">
            Looking for custom event props in Dallas, a photo backdrop
            for an activation, or scenic fabrication for a festival,
            corporate event, HOA event, or private party? Let’s build it.
          </p>

          <div className="contact-links">
            <a href="mailto:madison@madpropsevent.co">
              <small>Email</small>
              <span>madison@madpropsevent.co ↗</span>
            </a>

            <a
              href="https://instagram.com/madpropseventco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <small>Instagram</small>
              <span>@madpropseventco ↗</span>
            </a>
          </div>
        </section>

        <footer className="footer-line">
          MAD PROPS EVENT CO · DALLAS–FORT WORTH
          <br />
          Big ideas. Built for real life.
        </footer>
      </div>

      <style>{`
        #madprops-site {
          --ink: #190708;
          --red: #e51e3e;
          --pink: #efa9b1;
          --pale: #fff3ed;
          --blue: #7dd3fc;

          width: 100%;
          max-width: 1360px;
          margin: 0 auto;
          padding: 20px;
          background: var(--pink);
          color: var(--ink);
          font-family: Arial, Helvetica, sans-serif;
          line-height: 1.5;
          color-scheme: light;
        }

        #madprops-site *,
        #madprops-site *::before,
        #madprops-site *::after {
          box-sizing: border-box;
        }

        /* Explicit colors prevent inherited white text. */
        #madprops-site h1,
        #madprops-site h2,
        #madprops-site h3,
        #madprops-site p,
        #madprops-site span,
        #madprops-site small,
        #madprops-site figcaption,
        #madprops-site a,
        #madprops-site a:visited,
        #madprops-site button,
        #madprops-site .service,
        #madprops-site .portrait-caption,
        #madprops-site .circus-divider,
        #madprops-site .footer-line {
          color: var(--ink) !important;
          text-shadow: none;
        }

        #madprops-site .poster {
          position: relative;
          overflow: hidden;
          border: 6px solid var(--ink);
          outline: 5px solid var(--pale);
          box-shadow:
            0 0 0 11px var(--ink),
            17px 19px 0 var(--red);
          background: var(--pink);
        }

        #madprops-site .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        #madprops-site .hero {
          padding: 0 0 38px;
          border-bottom: 9px solid var(--ink);
          background: var(--pink);
          text-align: center;
        }

        #madprops-site .circus-art {
          display: block;
          width: 100%;
          height: auto;
          margin: 0;
        }

        #madprops-site .intro {
          max-width: 76%;
          margin: 22px auto 0;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.65;
        }

        #madprops-site .section {
          position: relative;
          padding: 32px 48px 55px;
          border-bottom: 6px double var(--ink);
          background: var(--pink);
        }

        #madprops-site .section.cream {
          background: #f9d5d7;
        }

        #madprops-site .circus-divider {
          margin: 0 0 20px;
          text-align: center;
          font-size: 32px;
          letter-spacing: 0.16em;
        }

        #madprops-site .banner {
          width: fit-content;
          max-width: 100%;
          margin: 0 auto 34px;
          padding: 10px 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(24px, 4vw, 40px);
          font-weight: 900;
          line-height: 1.2;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-align: center;
          overflow-wrap: anywhere;
        }

        #madprops-site .section-copy {
          max-width: 670px;
          margin: 0 auto 30px;
          font-size: 16px;
          line-height: 1.65;
          text-align: center;
        }

        #madprops-site .services {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 26px;
          padding: 0 6px 15px;
        }

        #madprops-site .service {
          padding: 24px 17px;
          border: 5px double var(--ink);
          background: var(--pale);
          box-shadow: 7px 8px 0 var(--red);
          transform: rotate(-3deg);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 17px;
          font-weight: 900;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          line-height: 1.4;
        }

        #madprops-site .service:nth-child(2) {
          background: var(--blue);
          transform: translateY(16px) rotate(2deg);
        }

        #madprops-site .service:nth-child(3) {
          transform: rotate(-2deg);
        }

        #madprops-site .service-star {
          display: block;
          margin-bottom: 8px;
          font-size: 25px;
        }

        #madprops-site .work-banner {
          padding: 16px 32px;
          border: 4px solid var(--ink);
          background: var(--pale);
          box-shadow: 6px 6px 0 var(--red);
        }

        #madprops-site .gallery-controls {
          display: flex;
          justify-content: flex-end;
          margin: 0 0 16px;
        }

        #madprops-site .gallery-controls button {
          cursor: pointer;
          padding: 10px 16px;
          border: 3px solid var(--ink);
          border-radius: 0;
          background: var(--pale);
          box-shadow: 4px 4px 0 var(--red);
          font: 700 14px Arial, sans-serif;
        }

        #madprops-site .gallery-shell {
          overflow-x: auto;
          overflow-y: hidden;
          padding: 24px 20px 35px;
          border: 5px solid var(--ink);
          background:
            radial-gradient(
              circle,
              rgba(229, 30, 62, 0.55) 2px,
              transparent 2px
            ) 0 0 / 20px 20px,
            var(--ink);
          box-shadow: 9px 9px 0 var(--red);
          scroll-behavior: auto;
          scrollbar-width: thin;
          scrollbar-color: var(--blue) var(--ink);
        }

        #madprops-site .gallery-track {
          display: flex;
          width: max-content;
        }

        #madprops-site .gallery-group {
          display: flex;
          flex: none;
          gap: 22px;
          padding-right: 22px;
        }

        #madprops-site .project-card {
          flex: 0 0 300px;
          width: 300px;
          margin: 0;
          padding: 10px;
          border: 4px solid var(--ink);
          background: var(--pale);
          box-shadow: 5px 5px 0 var(--blue);
        }

        #madprops-site .project-card:nth-child(even) {
          transform: translateY(8px) rotate(1deg);
        }

        #madprops-site .project-card img {
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          border: 3px solid var(--ink);
        }

        #madprops-site .project-card figcaption {
          margin-top: 9px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 13px;
          font-weight: 900;
          line-height: 1.4;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        #madprops-site .bio-layout {
          display: grid;
          grid-template-columns: 230px minmax(0, 1fr);
          gap: 34px;
          align-items: start;
        }

        #madprops-site .portrait {
          padding: 13px;
          border: 5px solid var(--ink);
          background: var(--pale);
          box-shadow: 8px 8px 0 var(--red);
          transform: rotate(-3deg);
        }

        #madprops-site .portrait img {
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 23 / 28;
          object-fit: cover;
          border: 3px solid var(--ink);
        }

        #madprops-site .portrait-caption {
          padding: 16px 0 5px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 17px;
          font-weight: 700;
          text-align: center;
        }

        #madprops-site .portrait-caption small {
          display: block;
          margin-top: 6px;
          font: 13px Arial, sans-serif;
        }

        #madprops-site .bio h3 {
          margin: 0 0 18px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 32px;
          font-weight: 700;
          line-height: 1.2;
        }

        #madprops-site .bio p,
        #madprops-site .difference p {
          margin: 0 0 18px;
          font-size: 16px;
          line-height: 1.75;
        }

        #madprops-site .difference {
          margin: 40px 0 8px;
          padding: 28px 32px;
          border: 6px double var(--red);
          outline: 4px solid var(--ink);
          background: var(--pale);
          box-shadow: 10px 10px 0 var(--red);
          transform: rotate(-1deg);
        }

        #madprops-site .difference h3 {
          margin: 0 0 18px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 27px;
          font-weight: 700;
          line-height: 1.3;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        #madprops-site .difference p:last-child {
          margin-bottom: 0;
        }

        #madprops-site .client-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        #madprops-site .client-slot {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 110px;
          border: 5px double var(--ink);
          background: var(--pale);
          box-shadow: 6px 6px 0 var(--red);
        }

        #madprops-site .client-slot:nth-child(even) {
          box-shadow: 6px 6px 0 var(--blue);
        }

        #madprops-site .client-slot img {
          display: block;
          width: 100%;
          max-width: 200px;
          height: 100px;
          padding: 14px;
          object-fit: contain;
        }

        #madprops-site .closing {
          padding: 35px 55px 43px;
          border-top: 5px solid var(--ink);
          background: var(--blue);
          text-align: center;
        }

        #madprops-site .closing h2 {
          margin: 5px 0 20px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(30px, 5vw, 42px);
          font-weight: 900;
          line-height: 1.2;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        #madprops-site .contact-copy {
          max-width: 680px;
          margin: 0 auto 25px;
          font-size: 16px;
          line-height: 1.7;
        }

        #madprops-site .contact-links {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        #madprops-site .contact-links a {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 9px;
          padding: 16px 20px;
          border: 3px solid var(--ink);
          background: var(--blue);
          box-shadow: 6px 6px 0 var(--ink);
          text-decoration: none;
          overflow-wrap: anywhere;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.03em;
        }

        #madprops-site .contact-links a:hover {
          background: var(--pale);
        }

        #madprops-site .contact-links small {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        #madprops-site .footer-line {
          padding: 20px;
          border-top: 4px solid var(--ink);
          background: var(--pale);
          font-size: 12px;
          line-height: 1.6;
          text-align: center;
          letter-spacing: 0.13em;
        }

        #madprops-site a:focus-visible,
        #madprops-site button:focus-visible,
        #madprops-site .gallery-shell:focus-visible {
          outline: 4px solid var(--ink);
          outline-offset: 5px;
        }

        @media (max-width: 720px) {
          #madprops-site {
            padding: 12px;
          }

          #madprops-site .intro {
            max-width: 88%;
            font-size: 16px;
          }

          #madprops-site .section {
            padding: 30px 20px 45px;
          }

          #madprops-site .circus-divider {
            font-size: 25px;
          }

          #madprops-site .services {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          #madprops-site .service:nth-child(2) {
            transform: rotate(2deg);
          }

          #madprops-site .work-banner {
            padding: 14px 20px;
          }

          #madprops-site .gallery-shell {
            padding: 20px 14px 32px;
          }

          #madprops-site .project-card {
            width: 240px;
            flex-basis: 240px;
          }

          #madprops-site .bio-layout,
          #madprops-site .contact-links {
            grid-template-columns: 1fr;
          }

          #madprops-site .portrait {
            width: 220px;
            max-width: 100%;
            margin: 0 auto 10px;
          }

          #madprops-site .difference {
            padding: 23px 20px;
          }

          #madprops-site .difference h3 {
            font-size: 23px;
          }

          #madprops-site .client-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 15px;
          }

          #madprops-site .closing {
            padding: 25px 20px 35px;
          }
        }
      `}</style>
    </main>
  );
}

