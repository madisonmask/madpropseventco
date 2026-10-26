"use client";

import { useRef, useState } from "react";
import "./carnival.css";
import Script from "next/script";


export default function MadPropsCarnival() {
  const pendingRef = useRef(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");


  async function submitInquiry(event) {
    event.preventDefault();

    const form = event.currentTarget;
    if (pendingRef.current || !form.reportValidity()) return;

    const data = Object.fromEntries(new FormData(form));

    pendingRef.current = true;
    setSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Unable to send. Please try again or email madison@madpropsevent.co."
        );
      }

      setStatus(result.message || "Thanks! Your inquiry has been submitted.");
      form.reset();
    } catch (error) {
      setStatus(
        error.message ||
          "Unable to send. Please email madison@madpropsevent.co."
      );
    } finally {
      pendingRef.current = false;
      setSending(false);
    }
  }

  return (
    <main id="madprops-site">
      <div className="poster">

        <header className="hero">
          <h1 className="sr-only">
            Mad Props Event Co — Custom Event Props and Scenic Fabrication in
            Dallas
          </h1>

          <div className="circus-header">
            <img
              className="circus-art"
              src="/madprops-circus-hero.webp"
              alt="Mad Props Event Co — Welcome to the Greatest Show"
              fetchPriority="high"
            />
          </div>

          <a className="hero-contact-button" href="#contact">Step Right Up ↗</a>

          <p className="intro">
            Bold, photo-worthy props and temporary installations built for
            brands, festivals, private events, and public spaces across
            Dallas–Fort Worth.
          </p>
        </header>

        <section
          className="section services-section"
          aria-label="Custom fabrication services"
        >
          <div className="services">
            <div className="service">
              <span className="service-star" aria-hidden="true">★</span>
              Custom Event Props
            </div>
            <div className="service">
              <span className="service-star" aria-hidden="true">✦</span>
              Scenic Fabrication
            </div>
            <div className="service">
              <span className="service-star" aria-hidden="true">★</span>
              Photo Backdrops &amp; Branded Installs
            </div>
          </div>
        </section>

        <section
          className="section"
          id="work"
          aria-labelledby="work-heading"
        >
          <h2 className="banner" id="work-heading">Recent Work</h2>

          <p className="section-copy">
            Recent custom event installations, scenic builds, and photo-worthy
            props created for public activations, seasonal events, and branded
            experiences in Dallas and across DFW.
          </p>

          <div className="instagram-feed">
            <blockquote className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/madpropseventco/"
              data-instgrm-version="14">
              <a href="https://www.instagram.com/madpropseventco/" target="_blank" rel="noopener noreferrer">
                View @madpropseventco on Instagram ↗
              </a>
            </blockquote>
          </div>
          <p className="instagram-fallback">
            <a href="https://www.instagram.com/madpropseventco/" target="_blank" rel="noopener noreferrer">
              See more on Instagram ↗
            </a>
          </p>
          <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload"
            onReady={() => window.instgrm?.Embeds?.process()} />
        </section>

        <section
          className="section cream"
          id="about"
          aria-labelledby="about-heading"
        >
          <h2 className="banner" id="about-heading">About</h2>

          <div className="bio-layout">
            <div className="portrait">
              <img
                src="/me.jpg"
                alt="Madison Mask, founder and fabricator at Mad Props Event Co"
                loading="lazy"
                width={460}
                height={560}
              />
              <div className="portrait-caption">
                Madison Mask
                <small>Founder &amp; Fabricator</small>
              </div>
            </div>

            <div className="bio">
              <h3>The Ring Leader</h3>
              <p>
                Mad Props Event Co is led by Madison Mask, a Dallas-based art
                producer and fabricator focused on creating bold, playful, and
                highly shareable event builds.
              </p>
              <p>
                With a background in event production and hands-on fabrication,
                Madison bridges concept and execution to create custom event
                props, scenic fabrication, and large-scale installations that
                people actually interact with.
              </p>
              <p>
                Based in Dallas and serving the greater DFW area, the work
                blends scrappy creativity with real fabrication know-how, so
                ideas do not just look good online — they get built for real
                events, real spaces, and real audiences.
              </p>
            </div>
          </div>
        </section>

        <section
          className="section"
          id="clients"
          aria-labelledby="clients-heading"
        >
          <h2 className="banner" id="clients-heading">
            Clients &amp; Collaborators
          </h2>
          <p className="section-copy">
            Mad Props Event Co works with organizations, event teams, and
            creative collaborators on custom fabrication, scenic builds, and
            event photo backdrops across Dallas–Fort Worth.
          </p>

          <div className="client-grid">
            {[1, 2, 3, 4, 5, 6].map((number) => (
              <div className="client-slot" key={number}>
                <img
                  src={`/logo${number}.png`}
                  alt={`Client or collaborator logo ${number}`}
                  loading="lazy"
                  width={200}
                  height={100}
                />
              </div>
            ))}
          </div>
        </section>

        <section
          className="closing"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading">Step Right Up</h2>
          <p className="contact-copy">
            Looking for custom event props in Dallas, a photo backdrop for an
            activation, or scenic fabrication for a festival, corporate event,
            HOA event, or private party? Let’s build it.
          </p>

          <form
            className="inquiry-form"
            aria-label="Project inquiry"
            onSubmit={submitInquiry}
            aria-busy={sending}
          >
            <div className="form-row">
              <label htmlFor="inquiry-name">
                Name / company <span>(required)</span>
                <input
                  id="inquiry-name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={120}
                />
              </label>
              <label htmlFor="inquiry-email">
                Email <span>(required)</span>
                <input
                  id="inquiry-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={200}
                />
              </label>
            </div>

            <div className="form-row">
              <label htmlFor="inquiry-phone">
                Phone <span>(optional)</span>
                <input
                  id="inquiry-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={40}
                />
              </label>
              <label htmlFor="inquiry-date">
                Event date <span>(required)</span>
                <input id="inquiry-date" name="date" type="date" required />
              </label>
            </div>

            <label htmlFor="inquiry-budget">
              Estimated budget (USD) <span>(required)</span>
              <input id="inquiry-budget" name="budget" type="number"
                min="1" step="1" required placeholder="2500" />
            </label>

            <label htmlFor="inquiry-details">
              Project details <span>(required)</span>
              <textarea
                id="inquiry-details"
                name="details"
                rows={5}
                required
                maxLength={1800}
                placeholder="Tell me what you have in mind, where the event is, and any important details."
              />
            </label>

            <div hidden aria-hidden="true">
              <label>
                Leave blank
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <p className="form-note" id="form-note">
              Send your project details directly to Mad Props.
            </p>
            <button
              type="submit"
              disabled={sending}
              aria-describedby="form-note"
            >
              {sending ? "Sending…" : "Send inquiry ↗"}
            </button>
            <p id="inquiry-status" role="status" aria-live="polite">
              {status}
            </p>
          </form>

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
    </main>
  );
}

