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
        <div className="container max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight">
            We don't plan events.
            <br />
            <span className="italic font-normal">We build experiences that drive revenue.</span>
          </h1>
          <p className="mt-8 text-muted-foreground font-sans text-sm tracking-wide uppercase max-w-xl">
            EVNT partners with modern brands to turn events into a measurable growth channel.
          </p>
          <div className="mt-12">
            <Button variant="editorial" size="lg" className="px-10 py-6" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. STATEMENT */}
      <section className="py-32 md:py-48">
        <div className="container max-w-5xl">
          <p className="text-3xl sm:text-4xl md:text-6xl font-serif leading-[1.15] tracking-tight">
            Events are no longer a brand play.
            <br />
            <span className="italic">They're a growth channel.</span>
          </p>
        </div>
      </section>

      {/* 3. CONTEXT */}
      <section className="py-24 border-t border-border">
        <div className="container max-w-2xl">
          <div className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground space-y-6">
            <p>Digital marketing is oversaturated.</p>
            <p>AI has made content and outreach easier — and trust harder to earn.</p>
            <p>As a result, real-world interaction has become one of the most valuable and scarce assets in modern marketing.</p>
            <p>Events are no longer optional.</p>
            <p className="text-foreground font-medium">They're where relationships actually form.</p>
          </div>
        </div>
      </section>

      {/* 4. FRAMEWORK */}
      <section className="py-32 md:py-40 border-t border-border">
        <div className="container max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-[1.15] tracking-tight mb-16">
            Engineering rooms where the right people meet under the right conditions.
          </h2>
          <ul className="space-y-4 font-sans text-muted-foreground text-sm md:text-base tracking-wide">
            <li>Audience-first, always</li>
            <li>Designed for real attendance — not obligation</li>
            <li>Built to create meaningful interaction</li>
            <li>Structured to accelerate relationships</li>
            <li>Aligned to pipeline, not impressions</li>
          </ul>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section className="py-32 border-t border-border">
        <div className="container">
          <h2 className="text-sm font-sans uppercase tracking-widest text-muted-foreground mb-16">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {[
              { title: "Event Strategy", desc: "Defining the right audience, format, and purpose" },
              { title: "Creative Direction", desc: "Designing experiences people actually want to attend" },
              { title: "Production & Execution", desc: "End-to-end delivery with a focus on quality and detail" },
              { title: "Programming & Content", desc: "Building moments that drive engagement and conversation" },
            ].map((s) => (
              <div key={s.title}>
                <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3">{s.title}</h3>
                <p className="font-sans text-muted-foreground text-sm md:text-base">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW WE WORK */}
      <section className="py-32 border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-[1.15] tracking-tight mb-12">
            Built as a strategic partner, not a vendor.
          </h2>
          <div className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground space-y-6">
            <p>
              EVNT operates as a fractional Chief Events Officer, embedding with marketing and sales teams to build events as a repeatable growth channel.
            </p>
            <p>
              We focus on long-term programs, not one-off moments — combining strategy, execution, and measurement into a single system.
            </p>
            <div className="pt-4 space-y-1 text-foreground font-medium text-sm tracking-wide">
              <p>Event strategy is managed on retainer.</p>
              <p>Execution is handled per event.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EVENT TYPES */}
      <section className="py-32 border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="text-sm font-sans uppercase tracking-widest text-muted-foreground mb-16">Event Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Executive dinners",
              "Workshops & experiences",
              "Industry events & summits",
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
      <section className="py-32 border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-[1.15] tracking-tight mb-12">
            Built on experience.
          </h2>
          <div className="space-y-3 font-sans text-base md:text-lg text-muted-foreground">
            <p>750+ events executed</p>
            <p>$100M+ in pipeline influenced</p>
            <p>10+ years in experiential and growth marketing</p>
            <p>Experience across global brands and platforms including TikTok, Meta, Snapchat, and YouTube.</p>
          </div>
        </div>
      </section>

      {/* 9. DIFFERENTIATION */}
      <section className="py-32 md:py-40 bg-foreground text-background">
        <div className="container max-w-4xl">
          <ul className="space-y-6 md:space-y-8 text-xl sm:text-2xl md:text-4xl font-serif leading-tight tracking-tight">
            <li>Curated rooms over large audiences</li>
            <li>Relationships over impressions</li>
            <li>Pipeline over vanity metrics</li>
            <li>Experience design over event planning</li>
            <li>Programs over one-off events</li>
          </ul>
        </div>
      </section>

      {/* 10. MEASUREMENT */}
      <section className="py-32 border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-[1.15] tracking-tight mb-12">
            Measured like a growth channel.
          </h2>
          <div className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground space-y-6">
            <p>Events are integrated directly into CRM systems and tracked alongside sales and marketing activity.</p>
            <p>We measure attendee quality, relationship development, pipeline influence, and deal acceleration — not just attendance.</p>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section id="contact" className="py-32 md:py-40 border-t border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-[1.15] tracking-tight mb-8">
            If events are part of your growth strategy, they should be built that way.
          </h2>
          <div className="mt-12">
            <Button variant="editorial" size="lg" className="px-10 py-6">
              Start a Conversation
            </Button>
          </div>
          <p className="mt-8 text-muted-foreground font-sans text-sm italic">
            Let's build something worth showing up for.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-border">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif text-lg font-semibold tracking-tight">EVNT</span>
          <a href="mailto:hello@evnt.com" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
            hello@evnt.com
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Index;
