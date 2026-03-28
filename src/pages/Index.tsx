import { Button } from "@/components/ui/button";
import eventDinnerTable from "@/assets/event-dinner-table.jpg";
import spaceInterior from "@/assets/space-interior.jpg";
import detailHands from "@/assets/detail-hands.jpg";
import venueWide from "@/assets/venue-wide.jpg";
import tableOverhead from "@/assets/table-overhead.jpg";
import logoYoutube from "@/assets/logos/youtube.png";
import logoMeta from "@/assets/logos/meta.png";
import logoPinterest from "@/assets/logos/pinterest.png";
import logoSnapchat from "@/assets/logos/snapchat.png";
import logoTiktok from "@/assets/logos/tiktok.png";
import logoBmw from "@/assets/logos/bmw.png";

const W = "max-w-[1200px] mx-auto px-6 md:px-12";

const Index = () => {
  return (
    <main className="text-cream">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-wine-deep/95 backdrop-blur-sm border-b border-cream/5">
        <div className={`${W} flex items-center justify-between py-5`}>
          <span className="font-serif text-lg font-semibold tracking-tight text-cream">EVNT</span>
          <Button variant="editorialOutline" size="sm" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </nav>

      {/* HERO — burgundy */}
      <section className="bg-wine-deep pt-40 pb-28 md:pt-48 md:pb-36">
        <div className={W}>
          <h1 className="text-5xl sm:text-7xl md:text-[7rem] lg:text-[9rem] font-semibold leading-[0.92] tracking-tighter max-w-6xl text-cream">
            Turn events into
            <br />
            <span className="italic font-normal text-cream/75">your #1 pipeline<br className="hidden sm:block" /> channel.</span>
          </h1>
          <div className="mt-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10">
            <p className="text-cream/50 font-sans text-sm max-w-sm leading-relaxed">
              EVNT is a strategic B2B event partner. We build event programs that drive pipeline, accelerate deals, and create lasting relationships.
            </p>
            <Button variant="editorial" size="lg" className="px-10 py-6 w-fit" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>

      {/* TRUSTED BY — logo grid */}
      <section className="bg-charcoal py-20 md:py-24 border-b border-cream/5">
        <div className={W}>
          <p className="text-[11px] font-sans uppercase tracking-[0.25em] text-cream/25 mb-14">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-16">
            {[
              { src: logoYoutube, alt: "YouTube" },
              { src: logoMeta, alt: "Meta" },
              { src: logoPinterest, alt: "Pinterest" },
              { src: logoSnapchat, alt: "Snapchat" },
              { src: logoTiktok, alt: "TikTok" },
              { src: logoUnilever, alt: "Unilever" },
              { src: logoBmw, alt: "BMW" },
            ].map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-5 md:h-6 w-auto object-contain opacity-50 brightness-0 invert"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* STATS — bold numbers */}
      <section className="bg-charcoal-light py-24 md:py-32">
        <div className={W}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-12 md:gap-20">
            {[
              { num: "750+", label: "Events executed" },
              { num: "$100M+", label: "Pipeline influenced" },
              { num: "10+", label: "Years in experiential & growth" },
            ].map((s) => (
              <div key={s.num} className="text-center sm:text-left">
                <p className="text-6xl md:text-7xl lg:text-8xl font-serif font-semibold tracking-tighter text-cream leading-none">{s.num}</p>
                <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-cream/35 mt-4">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL-BLEED IMAGE — edge to edge, no padding */}
      <section className="w-full h-[55vh] md:h-[75vh] overflow-hidden">
        <img
          src={venueWide}
          alt="Premium event venue at dusk"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </section>

      {/* WHAT WE DO — charcoal */}
      <section className="bg-charcoal py-28 md:py-36">
        <div className={`${W} grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16`}>
          <div className="md:col-span-4">
            <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] text-cream/30">What We Do</h2>
          </div>
          <div className="md:col-span-6">
            <p className="text-2xl sm:text-3xl md:text-[2.75rem] font-serif leading-[1.12] tracking-tight mb-10 text-cream">
              Event programs that generate qualified pipeline and accelerate revenue.
            </p>
            <div className="font-sans text-sm leading-relaxed text-cream/50 space-y-4 max-w-md">
              <p>Not brand awareness. Not impressions. Pipeline.</p>
              <p>Every event designed around a specific business outcome.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR — charcoal light */}
      <section className="bg-charcoal-light py-28 md:py-36">
        <div className={`${W} grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16`}>
          <div className="md:col-span-4">
            <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] text-cream/30">Who It's For</h2>
          </div>
          <div className="md:col-span-6">
            <div className="font-sans text-sm leading-relaxed text-cream/50 space-y-4 max-w-md">
              <p className="text-cream font-medium">B2B companies using events as a growth channel.</p>
              <p>Marketing leaders who need events that show up in the CRM.</p>
              <p>Sales teams that need warm rooms, not cold lists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE PAIR — tight crops */}
      <section className="bg-charcoal py-2">
        <div className={W}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="overflow-hidden h-[350px] md:h-[450px]">
              <img
                src={eventDinnerTable}
                alt="Immersive dinner experience"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                width={1920}
                height={1080}
              />
            </div>
            <div className="overflow-hidden h-[350px] md:h-[450px]">
              <img
                src={detailHands}
                alt="Close-up detail at intimate gathering"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT — burgundy, centered, dominant */}
      <section className="bg-wine-deep py-36 md:py-48">
        <div className={`${W} text-center`}>
          <p className="text-4xl sm:text-6xl md:text-[5.5rem] font-serif leading-[1.0] tracking-tighter text-cream">
            We don't fill rooms.
            <br />
            <span className="italic font-normal text-cream/65">We fill pipelines.</span>
          </p>
        </div>
      </section>

      {/* SERVICES — charcoal */}
      <section className="bg-charcoal py-28 md:py-36">
        <div className={W}>
          <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] text-cream/30 mb-16 md:mb-20">How We Deliver</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-14 md:gap-y-16">
            {[
              { title: "Event Strategy", desc: "Define the audience, format, and business case." },
              { title: "Creative Direction", desc: "Experiences worth showing up for." },
              { title: "Production & Execution", desc: "Full delivery. Every detail. On brand." },
              { title: "Measurement & Attribution", desc: "CRM-integrated. Pipeline-attributed. Real ROI." },
            ].map((s) => (
              <div key={s.title} className="border-t border-cream/8 pt-6">
                <h3 className="text-lg md:text-xl font-serif font-semibold mb-3 text-cream">{s.title}</h3>
                <p className="font-sans text-cream/40 text-xs md:text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK — charcoal light */}
      <section className="bg-charcoal-light py-28 md:py-36">
        <div className={`${W} grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16`}>
          <div className="md:col-span-5">
            <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-semibold leading-[1.05] tracking-tighter text-cream">
              Built as a partner.<br />Not a vendor.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <div className="font-sans text-sm leading-relaxed text-cream/50 space-y-4">
              <p className="text-cream font-medium">Your fractional Chief Events Officer.</p>
              <p>Embedded with your marketing and sales teams. Building events as a repeatable, measurable growth channel.</p>
              <p>One-off events don't compound. Programs do.</p>
            </div>
            <div className="mt-10 space-y-1 text-cream font-medium font-sans text-[11px] tracking-[0.2em] uppercase">
              <p>Strategy on retainer.</p>
              <p>Execution per event.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL-BLEED IMAGE 2 */}
      <section className="w-full h-[45vh] md:h-[60vh] overflow-hidden">
        <img
          src={spaceInterior}
          alt="Architectural event space with dramatic lighting"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1024}
          height={1024}
        />
      </section>

      {/* EVENT TYPES — charcoal */}
      <section className="bg-charcoal py-28 md:py-36">
        <div className={`${W} grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16`}>
          <div className="md:col-span-4">
            <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] text-cream/30">Formats</h2>
          </div>
          <div className="md:col-span-6">
            <div className="space-y-5">
              {[
                "Executive dinners",
                "Workshops & experiences",
                "Industry summits",
                "Retreats & offsites",
                "Field marketing & roadshows",
                "Developer & community events",
              ].map((type) => (
                <p key={type} className="font-serif text-base md:text-lg text-cream/80">{type}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION — charcoal light, manifesto */}
      <section className="bg-charcoal-light py-32 md:py-44">
        <div className={W}>
          <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] text-cream/30 mb-20">Why EVNT</h2>
          <ul className="space-y-10 md:space-y-14 text-xl sm:text-3xl md:text-[2.75rem] lg:text-5xl font-serif leading-[1.1] tracking-tighter max-w-4xl text-cream">
            <li>Curated rooms, not crowded ones</li>
            <li className="text-cream/60">Pipeline, not impressions</li>
            <li>Programs, not one-offs</li>
            <li className="text-cream/60">Measured like a growth channel</li>
            <li>Built for revenue, not applause</li>
          </ul>
        </div>
      </section>

      {/* MEASUREMENT — charcoal */}
      <section className="bg-charcoal py-28 md:py-36">
        <div className={`${W} grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16`}>
          <div className="md:col-span-5">
            <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-semibold leading-[1.05] tracking-tighter text-cream">
              Every event<br />is measured.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <div className="font-sans text-sm leading-relaxed text-cream/50 space-y-4 max-w-md">
              <p>Events feed directly into your CRM. Every attendee tracked. Every deal influenced — attributed.</p>
              <p className="text-cream font-medium">Attendee quality. Pipeline influence. Deal velocity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA — burgundy, strong close */}
      <section id="contact" className="bg-wine-deep py-36 md:py-48">
        <div className={`${W} text-center`}>
          <h2 className="text-4xl sm:text-5xl md:text-[5rem] font-semibold leading-[0.98] tracking-tighter max-w-4xl mx-auto mb-8 text-cream">
            Ready to make events your highest-performing channel?
          </h2>
          <p className="text-cream/40 font-sans text-sm max-w-md mx-auto mb-14">
            Build an event program that shows up in your pipeline.
          </p>
          <Button variant="editorial" size="lg" className="px-10 py-6">
            Start a Conversation
          </Button>
        </div>
      </section>

      {/* FOOTER — charcoal */}
      <footer className="bg-charcoal py-12 border-t border-cream/5">
        <div className={`${W} flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <span className="font-serif text-lg font-semibold tracking-tight text-cream">EVNT</span>
          <a href="mailto:hello@evnt.com" className="font-sans text-[11px] text-cream/40 hover:text-cream transition-colors tracking-[0.15em]">
            hello@evnt.com
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Index;
