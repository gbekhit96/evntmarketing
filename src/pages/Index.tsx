import { Button } from "@/components/ui/button";
import eventDinnerTable from "@/assets/event-dinner-table.jpg";
import spaceInterior from "@/assets/space-interior.jpg";
import detailHands from "@/assets/detail-hands.jpg";
import venueWide from "@/assets/venue-wide.jpg";
import tableOverhead from "@/assets/table-overhead.jpg";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between py-5">
          <span className="font-serif text-lg font-semibold tracking-tight">EVNT</span>
          <Button variant="editorialOutline" size="sm" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-32 md:pt-48 md:pb-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold leading-[0.95] tracking-tighter max-w-5xl">
            We don't plan events.
            <br />
            <span className="italic font-normal">We build revenue.</span>
          </h1>
          <div className="mt-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
            <p className="text-muted-foreground font-sans text-[11px] tracking-[0.25em] uppercase max-w-xs">
              Events as a measurable growth channel.
            </p>
            <Button variant="editorial" size="lg" className="px-10 py-6 w-fit" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>

      {/* HERO IMAGE — full width with consistent margins */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pb-32 md:pb-40">
        <div className="overflow-hidden">
          <img
            src={venueWide}
            alt="Premium venue at dusk with city skyline"
            className="w-full h-[400px] md:h-[560px] object-cover"
            width={1920}
            height={1080}
          />
        </div>
      </section>

      {/* STATEMENT */}
      <section className="py-32 md:py-44 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <p className="text-3xl sm:text-5xl md:text-7xl font-serif leading-[1.05] tracking-tighter max-w-4xl">
            Events aren't a brand play.
            <br />
            <span className="italic">They're a growth lever.</span>
          </p>
        </div>
      </section>

      {/* CONTEXT — split layout */}
      <section className="py-32 md:py-44 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] text-muted-foreground">The Opportunity</h2>
          </div>
          <div className="md:col-span-6">
            <div className="font-sans text-sm md:text-base leading-relaxed text-muted-foreground space-y-5">
              <p>Outreach is noise. Trust is scarce.</p>
              <p>Real-world interaction is the most valuable asset in modern marketing.</p>
              <p className="text-foreground font-medium">Relationships form in rooms — not inboxes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT 2 */}
      <section className="py-32 md:py-44 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <p className="text-3xl sm:text-5xl md:text-7xl font-serif leading-[1.05] tracking-tighter">
            We don't fill rooms.
            <br />
            <span className="italic font-normal">We build the right ones.</span>
          </p>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="overflow-hidden">
            <img
              src={heroDinner}
              alt="Intimate dinner setting with candlelight"
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
      </section>

      {/* FRAMEWORK — structured split */}
      <section className="py-32 md:py-44 border-t border-border mt-32 md:mt-44">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tighter">
              The right people.<br />The right conditions.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <ul className="space-y-4 font-sans text-muted-foreground text-[11px] md:text-xs tracking-[0.2em] uppercase">
              <li>Audience-first</li>
              <li>Attendance by intent, not obligation</li>
              <li>Interaction by design</li>
              <li>Relationships accelerated</li>
              <li>Pipeline-aligned</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES — structured grid */}
      <section className="py-32 md:py-44 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] text-muted-foreground mb-16 md:mb-20">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-14 md:gap-y-16">
            {[
              { title: "Event Strategy", desc: "Audience. Format. Purpose." },
              { title: "Creative Direction", desc: "Worth attending." },
              { title: "Production & Execution", desc: "Quality. Detail. End to end." },
              { title: "Programming & Content", desc: "Conversation, not content." },
            ].map((s) => (
              <div key={s.title} className="border-t border-border pt-6">
                <h3 className="text-lg md:text-xl font-serif font-semibold mb-2">{s.title}</h3>
                <p className="font-sans text-muted-foreground text-xs tracking-wide">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK — split */}
      <section className="py-32 md:py-44 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tighter">
              Strategic partner.<br />Not a vendor.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <div className="font-sans text-sm leading-relaxed text-muted-foreground space-y-5">
              <p>Embedded with your team as a fractional Chief Events Officer.</p>
              <p>One-off events don't scale. Programs do.</p>
            </div>
            <div className="mt-8 space-y-1 text-foreground font-medium font-sans text-[11px] tracking-[0.2em] uppercase">
              <p>Strategy on retainer.</p>
              <p>Execution per event.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SINGLE IMAGE BREAK */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-8">
        <div className="overflow-hidden">
          <img
            src={tableOverhead}
            alt="Elegantly set dinner table overhead"
            className="w-full h-[350px] md:h-[500px] object-cover"
            loading="lazy"
            width={1920}
            height={1080}
          />
        </div>
      </section>

      {/* EVENT TYPES — structured split */}
      <section className="py-32 md:py-44 border-t border-border mt-8">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] text-muted-foreground">Event Types</h2>
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
                <p key={type} className="font-serif text-base md:text-lg">{type}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY — structured split */}
      <section className="py-32 md:py-44 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tighter">
              Built on experience.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <div className="space-y-4 font-sans text-[11px] md:text-xs tracking-[0.15em] uppercase text-muted-foreground">
              <p>750+ events</p>
              <p>$100M+ pipeline influenced</p>
              <p>10+ years in growth & experiential</p>
              <p>TikTok · Meta · Snapchat · YouTube</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION — MANIFESTO on wine */}
      <section className="py-32 md:py-44 bg-wine text-wine-foreground">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <ul className="space-y-10 md:space-y-14 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] tracking-tighter max-w-4xl">
            <li>Curated rooms over large audiences</li>
            <li>Relationships over impressions</li>
            <li>Pipeline over vanity metrics</li>
            <li>Experience design over event planning</li>
            <li>Programs over one-off events</li>
          </ul>
        </div>
      </section>

      {/* MEASUREMENT — structured split */}
      <section className="py-32 md:py-44">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tighter">
              Measured like a growth channel.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              CRM-integrated. Pipeline-tracked. Attendee quality, deal acceleration — not vanity.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="py-32 md:py-44 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-semibold leading-[1.0] tracking-tighter max-w-3xl mx-auto mb-10">
            If events drive growth, build them that way.
          </h2>
          <div className="mt-12">
            <Button variant="editorial" size="lg" className="px-10 py-6">
              Start a Conversation
            </Button>
          </div>
          <p className="mt-10 text-muted-foreground font-sans text-[11px] italic tracking-widest">
            Worth showing up for.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
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
