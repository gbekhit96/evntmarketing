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
      <section className="min-h-screen flex items-center py-32">
        <div className="container max-w-6xl">
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-semibold leading-[0.95] tracking-tighter">
            We don't plan
            <br />
            events. <span className="italic font-normal">We build</span>
            <br />
            <span className="italic font-normal">revenue.</span>
          </h1>
          <p className="mt-12 text-muted-foreground font-sans text-[11px] tracking-[0.25em] uppercase max-w-sm">
            Events as a measurable growth channel.
          </p>
          <div className="mt-16">
            <Button variant="editorial" size="lg" className="px-12 py-7" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. STATEMENT */}
      <section className="py-48 md:py-64">
        <div className="container max-w-5xl">
          <p className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif leading-[1.0] tracking-tighter">
            Events aren't a brand play.
            <br />
            <span className="italic">They're a growth lever.</span>
          </p>
        </div>
      </section>

      {/* NEW STATEMENT */}
      <section className="py-44 md:py-60 border-t border-border">
        <div className="container max-w-5xl text-center">
          <p className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tighter">
            We don't fill rooms.
            <br />
            <span className="italic font-normal">We build the right ones.</span>
          </p>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="py-40 md:py-52 border-t border-border">
        <div className="container max-w-lg">
          <div className="font-sans text-xs md:text-sm leading-loose text-muted-foreground space-y-5">
            <p>Outreach is noise. Trust is scarce.</p>
            <p>Real-world interaction is the most valuable asset in modern marketing.</p>
            <p className="text-foreground font-medium">Relationships form in rooms — not inboxes.</p>
          </div>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="py-44 md:py-56 border-t border-border">
        <div className="container max-w-5xl">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.0] tracking-tighter mb-24">
            The right people.<br />The right conditions.
          </h2>
          <ul className="space-y-5 font-sans text-muted-foreground text-[11px] md:text-xs tracking-[0.2em] uppercase">
            <li>Audience-first</li>
            <li>Attendance by intent, not obligation</li>
            <li>Interaction by design</li>
            <li>Relationships accelerated</li>
            <li>Pipeline-aligned</li>
          </ul>
        </div>
      </section>

      {/* STATEMENT 2 */}
      <section className="py-44 md:py-60 border-t border-border">
        <div className="container max-w-5xl text-center">
          <p className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tighter">
            Curated rooms.
            <br />
            <span className="italic font-normal">Not crowded ones.</span>
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-44 md:py-56 border-t border-border">
        <div className="container">
          <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] text-muted-foreground mb-24">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-28">
            {[
              { title: "Event Strategy", desc: "Audience. Format. Purpose." },
              { title: "Creative Direction", desc: "Worth attending." },
              { title: "Production & Execution", desc: "Quality. Detail. End to end." },
              { title: "Programming & Content", desc: "Conversation, not content." },
            ].map((s) => (
              <div key={s.title}>
                <h3 className="text-xl md:text-2xl font-serif font-semibold mb-2">{s.title}</h3>
                <p className="font-sans text-muted-foreground text-[11px] md:text-xs tracking-wide">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-44 md:py-56 border-t border-border">
        <div className="container max-w-4xl">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.0] tracking-tighter mb-16">
            Strategic partner.<br />Not a vendor.
          </h2>
          <div className="font-sans text-xs md:text-sm leading-loose text-muted-foreground space-y-5 max-w-md">
            <p>Embedded with your team as a fractional Chief Events Officer.</p>
            <p>One-off events don't scale. Programs do.</p>
          </div>
          <div className="mt-10 space-y-1 text-foreground font-medium font-sans text-[11px] tracking-[0.2em] uppercase">
            <p>Strategy on retainer.</p>
            <p>Execution per event.</p>
          </div>
        </div>
      </section>

      {/* EVENT TYPES */}
      <section className="py-44 md:py-56 border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] text-muted-foreground mb-24">Event Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

      {/* CREDIBILITY */}
      <section className="py-44 md:py-56 border-t border-border">
        <div className="container max-w-4xl">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.0] tracking-tighter mb-16">
            Built on experience.
          </h2>
          <div className="space-y-4 font-sans text-[11px] md:text-xs tracking-[0.15em] uppercase text-muted-foreground">
            <p>750+ events</p>
            <p>$100M+ pipeline influenced</p>
            <p>10+ years in growth & experiential</p>
            <p>TikTok · Meta · Snapchat · YouTube</p>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION — MANIFESTO */}
      <section className="py-48 md:py-64 bg-foreground text-background">
        <div className="container max-w-5xl">
          <ul className="space-y-14 md:space-y-20 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05] tracking-tighter">
            <li>Curated rooms over large audiences</li>
            <li>Relationships over impressions</li>
            <li>Pipeline over vanity metrics</li>
            <li>Experience design over event planning</li>
            <li>Programs over one-off events</li>
          </ul>
        </div>
      </section>

      {/* MEASUREMENT */}
      <section className="py-44 md:py-56">
        <div className="container max-w-4xl">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.0] tracking-tighter mb-14">
            Measured like a<br />growth channel.
          </h2>
          <div className="font-sans text-xs md:text-sm leading-loose text-muted-foreground max-w-md">
            <p>Integrated into your CRM. Tracked alongside every growth lever. Attendee quality, pipeline influence, deal acceleration — not vanity.</p>
          </div>
        </div>
      </section>

      {/* STATEMENT 3 */}
      <section className="py-44 md:py-60 border-t border-border">
        <div className="container max-w-5xl text-center">
          <p className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tighter">
            Relationships drive revenue.
            <br />
            <span className="italic font-normal">Not impressions.</span>
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="py-48 md:py-64 border-t border-border">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.0] tracking-tighter mb-12">
            If events drive growth, build them that way.
          </h2>
          <div className="mt-16">
            <Button variant="editorial" size="lg" className="px-12 py-7">
              Start a Conversation
            </Button>
          </div>
          <p className="mt-12 text-muted-foreground font-sans text-[11px] italic tracking-widest">
            Worth showing up for.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-border">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif text-lg font-semibold tracking-tight">EVNT</span>
          <a href="mailto:hello@evnt.com" className="font-sans text-[11px] text-muted-foreground hover:text-foreground transition-colors tracking-[0.15em]">
            hello@evnt.com
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Index;
