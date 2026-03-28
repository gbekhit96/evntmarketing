import { Button } from "@/components/ui/button";
import eventDinnerTable from "@/assets/event-dinner-table.jpg";
import spaceInterior from "@/assets/space-interior.jpg";
import detailHands from "@/assets/detail-hands.jpg";
import venueWide from "@/assets/venue-wide.jpg";
import tableOverhead from "@/assets/table-overhead.jpg";

const W = "max-w-[1200px] mx-auto px-6 md:px-12";

const Index = () => {
  return (
    <main className="text-cream">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-wine-deep/95 backdrop-blur-sm border-b border-cream/10">
        <div className={`${W} flex items-center justify-between py-5`}>
          <span className="font-serif text-lg font-semibold tracking-tight text-cream">EVNT</span>
          <Button variant="editorialOutline" size="sm" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </nav>

      {/* HERO — burgundy */}
      <section className="bg-wine-deep pt-36 pb-24 md:pt-44 md:pb-32">
        <div className={W}>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold leading-[0.95] tracking-tighter max-w-5xl text-cream">
            Turn events into
            <br />
            <span className="italic font-normal text-cream/80">your #1 pipeline channel.</span>
          </h1>
          <div className="mt-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
            <p className="text-cream-muted font-sans text-sm max-w-sm leading-relaxed">
              EVNT is a strategic B2B event partner for growth-stage and enterprise brands. We build event programs that drive pipeline, accelerate deals, and create lasting relationships.
            </p>
            <Button variant="editorial" size="lg" className="px-10 py-6 w-fit" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>

      {/* PROOF BAR — charcoal */}
      <section className="bg-charcoal py-16 border-b border-cream/10">
        <div className={W}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16">
            <div>
              <p className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-cream">750+</p>
              <p className="font-sans text-xs tracking-wide text-cream-muted mt-1">Events executed</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-cream">$100M+</p>
              <p className="font-sans text-xs tracking-wide text-cream-muted mt-1">Pipeline influenced</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-cream">10+</p>
              <p className="font-sans text-xs tracking-wide text-cream-muted mt-1">Years in experiential & growth</p>
            </div>
          </div>
          <div className="mt-14 pt-10 border-t border-cream/10">
            <p className="text-[11px] font-sans uppercase tracking-[0.25em] text-cream-muted mb-8">Trusted by</p>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
              {["TikTok", "Meta", "Snapchat", "YouTube", "Google"].map((brand) => (
                <span key={brand} className="font-sans text-sm md:text-base font-medium text-cream/40 tracking-wide">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE — full width */}
      <section className="bg-charcoal">
        <div className={`${W} py-12 md:py-16`}>
          <div className="overflow-hidden">
            <img
              src={venueWide}
              alt="Premium event venue"
              className="w-full h-[400px] md:h-[560px] object-cover"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </section>

      {/* WHAT WE DO — charcoal light */}
      <section className="bg-charcoal-light py-24 md:py-32">
        <div className={`${W} grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16`}>
          <div className="md:col-span-4">
            <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] text-cream-muted">What We Do</h2>
          </div>
          <div className="md:col-span-6">
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif leading-[1.15] tracking-tight mb-8 text-cream">
              We build and run event programs that generate qualified pipeline and accelerate revenue.
            </p>
            <div className="font-sans text-sm leading-relaxed text-cream-muted space-y-4 max-w-md">
              <p>Not brand awareness. Not impressions. Pipeline.</p>
              <p>Every event is designed around a specific business outcome — a room of qualified buyers, a set of relationships advanced, a deal moved forward.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR — burgundy */}
      <section className="bg-wine-deep py-24 md:py-32">
        <div className={`${W} grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16`}>
          <div className="md:col-span-4">
            <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] text-cream/50">Who It's For</h2>
          </div>
          <div className="md:col-span-6">
            <div className="font-sans text-sm leading-relaxed text-cream/70 space-y-4 max-w-md">
              <p className="text-cream font-medium">B2B companies using events as a growth channel.</p>
              <p>Marketing leaders who need events that show up in the CRM — not just in a photo album.</p>
              <p>Sales teams that need warm rooms, not cold lists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE PAIR */}
      <section className="bg-charcoal">
        <div className={`${W} py-8`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="overflow-hidden">
              <img
                src={eventDinnerTable}
                alt="Immersive dinner experience"
                className="w-full h-[300px] md:h-[400px] object-cover"
                loading="lazy"
                width={1920}
                height={1080}
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={spaceInterior}
                alt="Architectural event space"
                className="w-full h-[300px] md:h-[400px] object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT — charcoal */}
      <section className="bg-charcoal py-32 md:py-44">
        <div className={`${W} text-center`}>
          <p className="text-3xl sm:text-5xl md:text-7xl font-serif leading-[1.05] tracking-tighter text-cream">
            We don't fill rooms.
            <br />
            <span className="italic font-normal text-cream/70">We fill pipelines.</span>
          </p>
        </div>
      </section>

      {/* SERVICES — charcoal light */}
      <section className="bg-charcoal-light py-24 md:py-32">
        <div className={W}>
          <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] text-cream-muted mb-16 md:mb-20">How We Deliver</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-14 md:gap-y-16">
            {[
              { title: "Event Strategy", desc: "Define the audience, format, and business case for every event." },
              { title: "Creative Direction", desc: "Design experiences worth showing up for — not attending out of obligation." },
              { title: "Production & Execution", desc: "Full delivery. Every detail. On time, on budget, on brand." },
              { title: "Measurement & Attribution", desc: "CRM-integrated tracking. Pipeline attribution. Real ROI." },
            ].map((s) => (
              <div key={s.title} className="border-t border-cream/10 pt-6">
                <h3 className="text-lg md:text-xl font-serif font-semibold mb-2 text-cream">{s.title}</h3>
                <p className="font-sans text-cream-muted text-xs md:text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK — burgundy */}
      <section className="bg-wine-deep py-24 md:py-32">
        <div className={`${W} grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16`}>
          <div className="md:col-span-5">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tighter text-cream">
              Built as a partner.<br />Not a vendor.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <div className="font-sans text-sm leading-relaxed text-cream/70 space-y-4">
              <p className="text-cream font-medium">EVNT operates as your fractional Chief Events Officer.</p>
              <p>We embed with your marketing and sales teams and build events as a repeatable, measurable growth channel.</p>
              <p>One-off events don't compound. Programs do.</p>
            </div>
            <div className="mt-8 space-y-1 text-cream font-medium font-sans text-[11px] tracking-[0.2em] uppercase">
              <p>Strategy on retainer.</p>
              <p>Execution per event.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE */}
      <section className="bg-charcoal">
        <div className={`${W} py-8`}>
          <div className="overflow-hidden">
            <img
              src={tableOverhead}
              alt="Elegantly set dinner table"
              className="w-full h-[350px] md:h-[500px] object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </section>

      {/* EVENT TYPES — charcoal light */}
      <section className="bg-charcoal-light py-24 md:py-32">
        <div className={`${W} grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16`}>
          <div className="md:col-span-4">
            <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] text-cream-muted">Formats</h2>
          </div>
          <div className="md:col-span-6">
            <div className="space-y-4">
              {[
                "Executive dinners",
                "Workshops & experiences",
                "Industry summits",
                "Retreats & offsites",
                "Field marketing & roadshows",
                "Developer & community events",
              ].map((type) => (
                <p key={type} className="font-serif text-base md:text-lg text-cream">{type}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION — wine */}
      <section className="py-32 md:py-44 bg-wine">
        <div className={W}>
          <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] text-cream/40 mb-16">Why EVNT</h2>
          <ul className="space-y-10 md:space-y-14 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] tracking-tighter max-w-4xl text-cream">
            <li>Curated rooms, not crowded ones</li>
            <li>Pipeline, not impressions</li>
            <li>Programs, not one-offs</li>
            <li>Measured like a growth channel</li>
            <li>Built for revenue, not applause</li>
          </ul>
        </div>
      </section>

      {/* MEASUREMENT — charcoal */}
      <section className="bg-charcoal py-24 md:py-32">
        <div className={`${W} grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16`}>
          <div className="md:col-span-5">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tighter text-cream">
              Every event<br />is measured.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <div className="font-sans text-sm leading-relaxed text-cream-muted space-y-4 max-w-md">
              <p>Events feed directly into your CRM. Every attendee tracked. Every conversation logged. Every deal influenced — attributed.</p>
              <p className="text-cream font-medium">Attendee quality. Pipeline influence. Deal velocity. That's what we report on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA — burgundy */}
      <section id="contact" className="bg-wine-deep py-32 md:py-44">
        <div className={`${W} text-center`}>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-semibold leading-[1.0] tracking-tighter max-w-4xl mx-auto mb-6 text-cream">
            Ready to make events your highest-performing channel?
          </h2>
          <p className="text-cream/60 font-sans text-sm max-w-md mx-auto mb-12">
            Let's talk about building an event program that shows up in your pipeline — not just your photo gallery.
          </p>
          <Button variant="editorial" size="lg" className="px-10 py-6">
            Start a Conversation
          </Button>
        </div>
      </section>

      {/* FOOTER — charcoal */}
      <footer className="bg-charcoal py-12 border-t border-cream/10">
        <div className={`${W} flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <span className="font-serif text-lg font-semibold tracking-tight text-cream">EVNT</span>
          <a href="mailto:hello@evnt.com" className="font-sans text-[11px] text-cream-muted hover:text-cream transition-colors tracking-[0.15em]">
            hello@evnt.com
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Index;
