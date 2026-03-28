import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-6">
          <span className="font-serif text-xl font-semibold tracking-tight">EVNT</span>
          <Button variant="editorialOutline" size="sm" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </nav>

      {/* 1. HERO */}
      <section className="min-h-screen flex items-center pt-24">
        <div className="container max-w-5xl">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold leading-[1.05] tracking-tight">
            We don't plan events.
            <br />
            <span className="italic font-normal">We build experiences<br className="hidden md:block" /> that drive revenue.</span>
          </h1>
          <p className="mt-10 text-muted-foreground font-sans text-xs tracking-[0.2em] uppercase max-w-md">
            EVNT partners with modern brands to turn events into a measurable growth channel.
          </p>
          <div className="mt-14">
            <Button variant="editorial" size="lg" className="px-12 py-7" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. STATEMENT */}
      <section className="py-40 md:py-56">
        <div className="container max-w-5xl">
          <p className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.08] tracking-tight">
            Events are no longer a brand play.
            <br />
            <span className="italic">They're a growth channel.</span>
          </p>
        </div>
      </section>

      {/* NEW STATEMENT SECTION */}
      <section className="py-36 md:py-48 border-t border-border">
        <div className="container max-w-4xl text-center">
          <p className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight">
            Curated rooms.
            <br />
            <span className="italic font-normal">Not crowded ones.</span>
          </p>
        </div>
      </section>

      {/* 3. CONTEXT */}
      <section className="py-32 md:py-40 border-t border-border">
        <div className="container max-w-xl">
          <div className="font-sans text-sm md:text-base leading-relaxed text-muted-foreground space-y-5">
            <p>Digital marketing is oversaturated. AI made outreach easier — and trust harder to earn.</p>
            <p>Real-world interaction is now the scarcest asset in modern marketing.</p>
            <p className="text-foreground font-medium">Events are where relationships actually form.</p>
          </div>
        </div>
      </section>

      {/* 4. FRAMEWORK */}
      <section className="py-36 md:py-48 border-t border-border">
        <div className="container max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight mb-20">
            The right people. The right conditions.
          </h2>
          <ul className="space-y-5 font-sans text-muted-foreground text-xs md:text-sm tracking-[0.15em] uppercase">
            <li>Audience-first, always</li>
            <li>Real attendance — not obligation</li>
            <li>Meaningful interaction by design</li>
            <li>Relationships accelerated</li>
            <li>Aligned to pipeline, not impressions</li>
          </ul>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section className="py-36 md:py-48 border-t border-border">
        <div className="container">
          <h2 className="text-xs font-sans uppercase tracking-[0.2em] text-muted-foreground mb-20">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24">
            {[
              { title: "Event Strategy", desc: "Audience, format, and purpose — defined." },
              { title: "Creative Direction", desc: "Experiences people actually want to attend." },
              { title: "Production & Execution", desc: "End-to-end delivery. Quality and detail." },
              { title: "Programming & Content", desc: "Moments that drive conversation." },
            ].map((s) => (
              <div key={s.title}>
                <h3 className="text-xl md:text-2xl font-serif font-semibold mb-2">{s.title}</h3>
                <p className="font-sans text-muted-foreground text-xs md:text-sm tracking-wide">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW WE WORK */}
      <section className="py-36 md:py-48 border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight mb-14">
            A strategic partner.<br />Not a vendor.
          </h2>
          <div className="font-sans text-sm md:text-base leading-relaxed text-muted-foreground space-y-5 max-w-xl">
            <p>EVNT operates as a fractional Chief Events Officer — embedded with your marketing and sales teams.</p>
            <p>One-off events don't scale. Programs do.</p>
            <div className="pt-6 space-y-1 text-foreground font-medium text-xs tracking-[0.15em] uppercase">
              <p>Strategy on retainer.</p>
              <p>Execution per event.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW STATEMENT SECTION 2 */}
      <section className="py-36 md:py-48 border-t border-border">
        <div className="container max-w-4xl text-center">
          <p className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight">
            Relationships drive revenue.
            <br />
            <span className="italic font-normal">Not impressions.</span>
          </p>
        </div>
      </section>

      {/* 7. EVENT TYPES */}
      <section className="py-36 md:py-48 border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="text-xs font-sans uppercase tracking-[0.2em] text-muted-foreground mb-20">Event Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              "Executive dinners",
              "Workshops & experiences",
              "Industry summits",
              "Retreats & offsites",
              "Field marketing & roadshows",
              "Developer & community events",
            ].map((type) => (
              <p key={type} className="font-serif text-lg md:text-xl">{type}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CREDIBILITY */}
      <section className="py-36 md:py-48 border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight mb-14">
            Built on experience.
          </h2>
          <div className="space-y-3 font-sans text-xs md:text-sm tracking-[0.1em] uppercase text-muted-foreground">
            <p>750+ events executed</p>
            <p>$100M+ in pipeline influenced</p>
            <p>10+ years in experiential and growth marketing</p>
            <p>TikTok, Meta, Snapchat, YouTube — and more</p>
          </div>
        </div>
      </section>

      {/* 9. DIFFERENTIATION */}
      <section className="py-40 md:py-56 bg-foreground text-background">
        <div className="container max-w-4xl">
          <ul className="space-y-10 md:space-y-14 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.1] tracking-tight">
            <li>Curated rooms over large audiences</li>
            <li>Relationships over impressions</li>
            <li>Pipeline over vanity metrics</li>
            <li>Experience design over event planning</li>
            <li>Programs over one-off events</li>
          </ul>
        </div>
      </section>

      {/* 10. MEASUREMENT */}
      <section className="py-36 md:py-48">
        <div className="container max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight mb-14">
            Measured like a<br />growth channel.
          </h2>
          <div className="font-sans text-sm md:text-base leading-relaxed text-muted-foreground space-y-5 max-w-xl">
            <p>Events integrate directly into your CRM — tracked alongside every other growth lever.</p>
            <p>Attendee quality. Pipeline influence. Deal acceleration. Not just attendance.</p>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section id="contact" className="py-40 md:py-56 border-t border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight mb-10">
            If events are part of your growth strategy, build them that way.
          </h2>
          <div className="mt-14">
            <Button variant="editorial" size="lg" className="px-12 py-7">
              Start a Conversation
            </Button>
          </div>
          <p className="mt-10 text-muted-foreground font-sans text-xs italic tracking-wide">
            Let's build something worth showing up for.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-14 border-t border-border">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif text-lg font-semibold tracking-tight">EVNT</span>
          <a href="mailto:hello@evnt.com" className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            hello@evnt.com
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Index;
