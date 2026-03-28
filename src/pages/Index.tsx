import { Button } from "@/components/ui/button";
import heroDinner from "@/assets/hero-dinner.jpg";
import spaceInterior from "@/assets/space-interior.jpg";
import detailHands from "@/assets/detail-hands.jpg";
import venueWide from "@/assets/venue-wide.jpg";
import tableOverhead from "@/assets/table-overhead.jpg";

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

      {/* FULL-WIDTH IMAGE BREAK */}
      <section className="w-full h-[50vh] md:h-[70vh] overflow-hidden">
        <img
          src={heroDinner}
          alt="Intimate dinner setting with candlelight"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
      </section>

      {/* 2. STATEMENT — centered */}
      <section className="py-48 md:py-64">
        <div className="container max-w-5xl text-center">
          <p className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif leading-[1.0] tracking-tighter">
            Events aren't a brand play.
            <br />
            <span className="italic">They're a growth lever.</span>
          </p>
        </div>
      </section>

      {/* SPLIT: Image left, text right — CONTEXT */}
      <section className="border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
          <div className="overflow-hidden">
            <img
              src={spaceInterior}
              alt="Architectural event space with dramatic lighting"
              className="w-full h-full object-cover min-h-[400px]"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
          <div className="flex items-center py-20 md:py-0 px-8 md:px-16 lg:px-24">
            <div className="font-sans text-xs md:text-sm leading-loose text-muted-foreground space-y-5 max-w-sm">
              <p>Outreach is noise. Trust is scarce.</p>
              <p>Real-world interaction is the most valuable asset in modern marketing.</p>
              <p className="text-foreground font-medium">Relationships form in rooms — not inboxes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT — "We don't fill rooms" */}
      <section className="py-44 md:py-60">
        <div className="container max-w-5xl text-center">
          <p className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tighter">
            We don't fill rooms.
            <br />
            <span className="italic font-normal">We build the right ones.</span>
          </p>
        </div>
      </section>

      {/* FRAMEWORK — right aligned */}
      <section className="py-44 md:py-56 border-t border-border">
        <div className="container">
          <div className="md:ml-auto md:max-w-2xl md:text-right">
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
        </div>
      </section>

      {/* FULL-WIDTH IMAGE BREAK */}
      <section className="w-full h-[50vh] md:h-[70vh] overflow-hidden">
        <img
          src={venueWide}
          alt="Premium venue at dusk with city skyline"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
      </section>

      {/* SERVICES — left aligned */}
      <section className="py-44 md:py-56">
        <div className="container">
          <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] text-muted-foreground mb-24">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-28 max-w-4xl">
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

      {/* SPLIT: Text left, image right — HOW WE WORK */}
      <section className="border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
          <div className="flex items-center py-20 md:py-0 px-8 md:px-16 lg:px-24 order-2 md:order-1">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.0] tracking-tighter mb-14">
                Strategic partner.<br />Not a vendor.
              </h2>
              <div className="font-sans text-xs md:text-sm leading-loose text-muted-foreground space-y-5 max-w-sm">
                <p>Embedded with your team as a fractional Chief Events Officer.</p>
                <p>One-off events don't scale. Programs do.</p>
              </div>
              <div className="mt-10 space-y-1 text-foreground font-medium font-sans text-[11px] tracking-[0.2em] uppercase">
                <p>Strategy on retainer.</p>
                <p>Execution per event.</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden order-1 md:order-2">
            <img
              src={detailHands}
              alt="Close-up of cocktail glass at intimate gathering"
              className="w-full h-full object-cover min-h-[400px]"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
        </div>
      </section>

      {/* STATEMENT — centered */}
      <section className="py-44 md:py-60">
        <div className="container max-w-5xl text-center">
          <p className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tighter">
            Curated rooms.
            <br />
            <span className="italic font-normal">Not crowded ones.</span>
          </p>
        </div>
      </section>

      {/* EVENT TYPES — right aligned */}
      <section className="py-44 md:py-56 border-t border-border">
        <div className="container">
          <div className="md:ml-auto md:max-w-xl md:text-right">
            <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] text-muted-foreground mb-20">Event Types</h2>
            <div className="space-y-5">
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
        </div>
      </section>

      {/* CREDIBILITY — left aligned */}
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

      {/* FULL-WIDTH IMAGE BREAK */}
      <section className="w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={tableOverhead}
          alt="Overhead view of elegantly set dinner table"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
      </section>

      {/* DIFFERENTIATION — MANIFESTO on wine bg */}
      <section className="py-48 md:py-64 bg-wine text-wine-foreground">
        <div className="container max-w-5xl">
          <ul className="space-y-16 md:space-y-24 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05] tracking-tighter">
            <li>Curated rooms over large audiences</li>
            <li>Relationships over impressions</li>
            <li>Pipeline over vanity metrics</li>
            <li>Experience design over event planning</li>
            <li>Programs over one-off events</li>
          </ul>
        </div>
      </section>

      {/* MEASUREMENT — centered */}
      <section className="py-44 md:py-56">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.0] tracking-tighter mb-14">
            Measured like a<br />growth channel.
          </h2>
          <p className="font-sans text-xs md:text-sm leading-loose text-muted-foreground max-w-md mx-auto">
            CRM-integrated. Pipeline-tracked. Attendee quality, deal acceleration — not vanity.
          </p>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="py-44 md:py-60 border-t border-border">
        <div className="container max-w-5xl text-center">
          <p className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tighter">
            Relationships drive revenue.
            <br />
            <span className="italic font-normal">Not impressions.</span>
          </p>
        </div>
      </section>

      {/* FINAL CTA — wine bg */}
      <section id="contact" className="py-48 md:py-64 bg-wine text-wine-foreground">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.0] tracking-tighter mb-12">
            If events drive growth, build them that way.
          </h2>
          <div className="mt-16">
            <Button variant="editorialOutline" size="lg" className="px-12 py-7 border-wine-foreground text-wine-foreground hover:bg-wine-foreground hover:text-wine">
              Start a Conversation
            </Button>
          </div>
          <p className="mt-12 text-wine-foreground/70 font-sans text-[11px] italic tracking-widest">
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
