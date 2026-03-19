export default function MadPropsVintageCircusSite() {
  const services = [
    "Custom props",
    "Scenic fabrication",
    "Event installs",
  ];

  const projects = [
    "Oversized icons",
    "Photo moments",
    "Brand activations",
    "Temporary spectacle",
  ];

  return (
    <div className="min-h-screen bg-[#f0b2b6] px-4 py-8 text-[#160608] md:px-8">
      <main className="mx-auto max-w-5xl border-[10px] border-[#160608] bg-[#f0b2b6] shadow-[20px_20px_0_#e21b3c]">
        <section className="border-b-[8px] border-[#160608] px-6 py-12 text-center md:px-10 md:py-16">
          <div className="mx-auto inline-block rounded-full border-[6px] border-[#e21b3c] bg-[#f7cfd4] px-6 py-2">
            <p className="text-xs font-black uppercase tracking-[0.45em] md:text-sm">
              Dallas Event Fabrication
            </p>
          </div>

          <h1 className="mt-8 text-6xl font-black uppercase leading-[0.88] tracking-[0.06em] text-[#160608] [text-shadow:2px_2px_0_#ffffff,6px_6px_0_#160608] md:text-8xl">
            Mad
            <br />
            Props
          </h1>

          <p className="mt-6 text-2xl font-black uppercase tracking-[0.28em] md:text-4xl">
            Event Co
          </p>

          <div className="mx-auto mt-8 max-w-3xl border-[5px] border-[#160608] bg-[#f7cfd4] px-6 py-5 shadow-[8px_8px_0_#e21b3c]">
            <p className="text-base font-bold leading-8 md:text-xl">
              Custom props, playful scenic fabrication, and bold temporary installs
              for events, activations, and branded moments.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#work"
              className="border-[4px] border-[#160608] bg-[#160608] px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-[#f7cfd4] shadow-[5px_5px_0_#e21b3c] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_#e21b3c]"
            >
              See Work
            </a>
            <a
              href="#contact"
              className="border-[4px] border-[#160608] bg-[#f7cfd4] px-6 py-3 text-sm font-black uppercase tracking-[0.2em] shadow-[5px_5px_0_#160608] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_#160608]"
            >
              Contact
            </a>
          </div>
        </section>

        <section className="border-b-[8px] border-[#160608] bg-[#160608] px-6 py-5 text-center md:px-10">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f7cfd4] md:text-xl">
            Vintage circus style • handmade builds • big personality
          </p>
        </section>

        <section className="border-b-[8px] border-[#160608] px-6 py-12 md:px-10" id="services">
          <h2 className="text-center text-4xl font-black uppercase tracking-[0.18em] [text-shadow:2px_2px_0_#ffffff,5px_5px_0_#160608] md:text-5xl">
            Featured Acts
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="border-[5px] border-[#160608] bg-[#f7cfd4] p-6 text-center shadow-[7px_7px_0_#e21b3c]"
              >
                <p className="text-sm font-black uppercase tracking-[0.3em]">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b-[8px] border-[#160608] px-6 py-12 md:px-10" id="about">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="border-[5px] border-[#160608] bg-[#f7cfd4] p-7 shadow-[8px_8px_0_#160608]">
              <h2 className="text-3xl font-black uppercase tracking-[0.15em] md:text-4xl">
                About
              </h2>
              <p className="mt-5 text-base leading-8 md:text-lg">
                Mad Props Event Co creates eye-catching builds for parties,
                activations, retail moments, public art, and branded experiences.
                The style is playful, handcrafted, graphic, and a little theatrical.
              </p>
            </div>

            <div className="border-[5px] border-[#160608] bg-[#e21b3c] p-7 text-[#fff5f6] shadow-[8px_8px_0_#160608]">
              <h3 className="text-2xl font-black uppercase tracking-[0.18em] md:text-3xl">
                Built For
              </h3>
              <p className="mt-5 text-base font-bold leading-8 md:text-lg">
                Brand activations, event decor, scenic moments, temporary installs,
                and custom props with personality.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b-[8px] border-[#160608] px-6 py-12 md:px-10" id="work">
          <h2 className="text-center text-4xl font-black uppercase tracking-[0.18em] [text-shadow:2px_2px_0_#ffffff,5px_5px_0_#160608] md:text-5xl">
            Recent Work
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project}
                className="border-[5px] border-[#160608] bg-[#f7cfd4] p-8 text-center shadow-[8px_8px_0_#e21b3c]"
              >
                <div className="flex min-h-[180px] items-center justify-center border-[4px] border-dashed border-[#160608] bg-[#f0b2b6] p-6">
                  <p className="text-2xl font-black uppercase tracking-[0.12em]">
                    {project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-12 text-center md:px-10" id="contact">
          <h2 className="text-4xl font-black uppercase tracking-[0.18em] [text-shadow:2px_2px_0_#ffffff,5px_5px_0_#160608] md:text-5xl">
            Step Right Up
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 md:text-lg">
            Ready to make something unforgettable? Reach out for custom builds,
            scenic fabrication, and event installs.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="border-[5px] border-[#160608] bg-[#f7cfd4] p-6 shadow-[7px_7px_0_#e21b3c]">
              <p className="text-xs font-black uppercase tracking-[0.3em]">Email</p>
              <p className="mt-3 break-all text-lg font-black">hello@madpropseventco.com</p>
            </div>
            <div className="border-[5px] border-[#160608] bg-[#f7cfd4] p-6 shadow-[7px_7px_0_#e21b3c]">
              <p className="text-xs font-black uppercase tracking-[0.3em]">Instagram</p>
              <p className="mt-3 text-lg font-black">@madpropseventco</p>
            </div>
            <div className="border-[5px] border-[#f7cfd4] bg-[#160608] p-6 text-[#f7cfd4] shadow-[7px_7px_0_#e21b3c]">
              <p className="text-xs font-black uppercase tracking-[0.3em]">Based In</p>
              <p className="mt-3 text-lg font-black">Dallas, Texas</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
