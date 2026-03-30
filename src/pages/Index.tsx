import { Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import eventDinnerTable from "@/assets/event-dinner-table.jpg";
import patron360 from "@/assets/patron-360.jpg";
import spaceInterior from "@/assets/patron-360-divider.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import tableSetting from "@/assets/table-setting.jpg";
import detailHands from "@/assets/detail-hands.jpg";
import venueWide from "@/assets/venue-wide.jpg";
import kerryAnnePhoto from "@/assets/kerry-anne.jpg";
import gabePhoto from "@/assets/gabe.jpg";
import NorthAmericaMap from "@/components/NorthAmericaMap";
import CaseStudies from "@/components/CaseStudies";

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

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/[0.6]" aria-hidden="true" />
        <div className={`${W} relative z-10`}>
          <h1 className="font-semibold leading-[1.05] tracking-tighter max-w-5xl" style={{ fontSize: 'clamp(48px, 6vw, 80px)', color: '#F9FAF6' }}>
            We don't plan events; <span className="italic font-normal" style={{ color: '#F9FAF6' }}>we build experiences that drive pipeline.</span>
          </h1>
          <p className="mt-6 text-cream/50 font-sans text-sm max-w-sm leading-relaxed">
            We embed with your team as a Fractional Chief Events Officer — turning events into a channel that shows up in your CRM.
          </p>
        </div>
      </section>

      {/* CREDENTIAL BAR */}
      <section className="w-full" style={{ backgroundColor: '#0A0707' }}>
        <div className="border-t border-cream/10" />
        <div className={`${W} py-[60px]`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 text-center">
            {[
              { num: "1,000+", label: "Events executed" },
              { num: "40+", label: "Enterprise brands" },
              { num: "$300M+", label: "Pipeline generated" },
            ].map((s) => (
              <div key={s.num}>
                <p className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-cream leading-none">{s.num}</p>
                <p className="font-sans text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-cream/40 mt-3">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border-b border-cream/10" />
      </section>

      {/* TRUSTED BY */}
      <section style={{ backgroundColor: '#0A0707' }} className="pt-[60px] pb-6">
        <div className={W}>
          <p className="text-[11px] font-sans uppercase tracking-[0.25em] text-cream/25 mb-12 text-center">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-10">
            {[
              { src: "https://cdn.simpleicons.org/tiktok/ffffff", alt: "TikTok" },
              { src: "https://cdn.simpleicons.org/meta/ffffff", alt: "Meta" },
              { src: "https://cdn.simpleicons.org/snapchat/ffffff", alt: "Snapchat" },
              { src: "https://cdn.simpleicons.org/youtube/ffffff", alt: "YouTube" },
              
              { src: "https://cdn.simpleicons.org/bmw/ffffff", alt: "BMW" },
              { src: "https://cdn.simpleicons.org/pinterest/ffffff", alt: "Pinterest" },
            ].map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                style={{ height: '31px', width: 'auto' }}
                className="object-contain opacity-60 brightness-0 invert"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <section style={{ backgroundColor: '#0A0707' }} className="py-20">
        <div className={`${W} grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20`}>
          <div className="md:col-span-7">
            <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] text-cream/30 mb-3">Why Now</h2>
            <p className="text-3xl sm:text-4xl md:text-[3rem] font-serif font-semibold leading-[1.08] tracking-tight text-cream max-w-xl mb-4">
              Every other channel is getting harder. Events are getting more powerful.
            </p>
            <p className="font-sans text-sm md:text-[15px] leading-relaxed text-cream/55 max-w-lg">
              Events convert at 18–25%. Cold outreach converts at 2–3%.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex flex-col justify-center items-start md:items-end text-left md:text-right">
            <p className="text-7xl sm:text-8xl md:text-[8rem] lg:text-[10rem] font-serif font-bold tracking-tighter leading-none text-cream">
              21%
            </p>
            <p className="font-sans text-[11px] md:text-xs tracking-[0.12em] uppercase text-cream/35 mt-4 max-w-[220px]">
              average event conversion rate vs. 2–3% for cold outreach
            </p>
          </div>
        </div>
      </section>

      {/* FULL-BLEED IMAGE */}
      <section className="w-full overflow-hidden" style={{ height: '450px' }}>
        <img
          src={tableSetting}
          alt="Intimate dinner table setting with floral centerpiece"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1080}
        />
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-20" style={{ backgroundColor: '#F9FAF6' }}>
        <div className={W}>
          <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(13,13,13,0.35)' }}>What We Build</h2>
          <p className="text-3xl sm:text-4xl md:text-[3rem] font-serif font-semibold leading-[1.08] tracking-tight mb-10" style={{ color: '#0D0D0D' }}>
            One partner. Every format.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-16">
            {[
              { title: "Intimate & High-Touch", desc: "Executive dinners, roundtables, and curated experiences. The highest-signal room you can put a buyer in." },
              { title: "Field & Activation", desc: "Pop-ups, roadshows, brand activations, and creator-integrated experiences. Built for reach that converts." },
              { title: "Flagship & Owned IP", desc: "Conferences, summits, and retreat programs that position your brand as the convener of your industry." },
            ].map((s) => (
              <div key={s.title} className="border-t pt-6" style={{ borderColor: 'rgba(13,13,13,0.12)' }}>
                <h3 className="text-lg md:text-xl font-serif font-semibold mb-3" style={{ color: '#0D0D0D' }}>{s.title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'rgba(13,13,13,0.55)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden" style={{ height: '450px' }}>
        <img
          src={patron360}
          alt="Patrón 360 immersive brand activation event"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          width={1920}
          height={1080}
        />
      </section>

      {/* WHY EVNT */}
      <section className="bg-charcoal-light py-20">
        <div className={W}>
          <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] text-cream/30 mb-3">Why EVNT</h2>
          <div className="space-y-12 max-w-4xl">
            <div>
              <p className="text-xl sm:text-3xl md:text-[2.75rem] lg:text-5xl font-serif leading-[1.1] tracking-tighter text-cream">Curated rooms, not crowded ones.</p>
              <p className="font-sans text-sm leading-relaxed text-cream/45 mt-5 max-w-xl">We don't measure success by attendance. We measure it by who's in the room and what happens after.</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl md:text-[2.75rem] lg:text-5xl font-serif leading-[1.1] tracking-tighter text-cream">Pipeline, not impressions.</p>
              <p className="font-sans text-sm leading-relaxed text-cream/45 mt-5 max-w-xl">Every event we run is tracked as a marketing channel — attendee quality, pipeline influence, and deal velocity. In your CRM.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-wine-deep py-20">
        <div className={W}>
          <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] text-cream/30 mb-3">How We Work</h2>
          <p className="text-3xl sm:text-4xl md:text-[3rem] font-serif font-semibold leading-[1.08] tracking-tight text-cream max-w-3xl mb-10">
            Three ways to work with us.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-16">
            {[
              { title: "Retainer", desc: "We embed as your Fractional Chief Events Officer — owning strategy, program development, and ongoing management." },
              { title: "Project", desc: "Individual events executed on a project basis. Full production, on-the-ground delivery, and post-event reporting." },
              { title: "Creator", desc: "Integrate creator talent directly into your events. We handle sourcing, contracts, and activation." },
            ].map((col) => (
              <div key={col.title} className="border-t border-cream/15 pt-6">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-cream mb-3">{col.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-cream/45">{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL-BLEED IMAGE 2 */}
      <section className="w-full overflow-hidden" style={{ height: '400px' }}>
        <img
          src={spaceInterior}
          alt="Architectural event space with dramatic lighting"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1024}
          height={1024}
        />
      </section>

      {/* THE TEAM */}
      <section className="py-20" style={{ backgroundColor: '#F9FAF6' }}>
        <div className={W}>
          <h2 className="text-[11px] font-sans uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(13,13,13,0.35)' }}>The Team</h2>
          <p className="text-3xl sm:text-4xl md:text-[3rem] font-serif font-semibold leading-[1.08] tracking-tight mb-4" style={{ color: '#0D0D0D' }}>
            Senior operators. Not account managers.
          </p>
          <p className="font-sans text-sm leading-relaxed mb-10" style={{ color: 'rgba(13,13,13,0.55)' }}>
            Every engagement is led by Kerry-Anne and Gabriel — not handed to a junior team.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 md:gap-20 max-w-3xl">
            {[
              {
                name: "Kerry-Anne Hamilton",
                title: "CEO",
                bio: "10+ years in experiential marketing. $100M+ in pipeline. Architect of events programs at TikTok, Meta, Snapchat, YouTube, and #paid.",
                photo: kerryAnnePhoto,
              },
              {
                name: "Gabriel Bekhit",
                title: "COO",
                bio: "6 years building experiential strategy for BMW, Diageo, Patrón, and Publicis.",
                photo: gabePhoto,
              },
            ].map((person) => (
              <div key={person.name}>
                {person.photo ? (
                  <img src={person.photo} alt={person.name} className="w-full aspect-[3/4] mb-6 object-cover object-top" />
                ) : (
                  <div className="w-full aspect-[3/4] mb-6 overflow-hidden" style={{ backgroundColor: '#DDD8CE' }} />
                )}
                <h3 className="text-xl md:text-2xl font-serif font-semibold" style={{ color: '#0D0D0D' }}>{person.name}</h3>
                <p className="font-sans text-[10px] md:text-[11px] tracking-[0.25em] uppercase mt-1 mb-4" style={{ color: 'rgba(13,13,13,0.4)' }}>{person.title}</p>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'rgba(13,13,13,0.55)' }}>{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE WE WORK */}
      <section style={{ backgroundColor: '#0A0707', paddingTop: '100px', paddingBottom: '80px' }}>
        <div className={W}>
          <p className="text-[11px] font-sans uppercase tracking-[0.1em] mb-3" style={{ color: '#9a9a9a' }}>Where We Work</p>
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-serif leading-[1.1] tracking-tight text-white mb-10" style={{ fontWeight: 900 }}>
            We've executed across North America.
          </h2>
        </div>
        <div className={W}>
          <NorthAmericaMap />
        </div>
      </section>

      {/* OUR WORK */}
      <CaseStudies />

      {/* FINAL CTA */}
      <section id="contact" className="bg-wine-deep py-20">
        <div className={`${W} text-center`}>
          <h2 className="font-semibold leading-[0.98] tracking-tighter max-w-4xl mx-auto mb-10 text-cream" style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}>
            Your next pipeline quarter starts with the right room.
          </h2>
          <Button variant="editorial" size="lg" className="px-10 py-6">
            Let's Talk
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#0A0707' }} className="border-t border-wine">
        <div className={`${W} py-14 md:py-16`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <span className="font-serif text-lg font-semibold tracking-tight text-cream">EVNT</span>
            <nav className="flex items-center gap-8">
              {["Work", "Services", "Team", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="font-sans text-[11px] tracking-[0.15em] uppercase text-cream/40 hover:text-cream transition-colors">
                  {link}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-5">
              <a href="mailto:hello@evnt.com" className="font-sans text-[11px] text-cream/40 hover:text-cream transition-colors tracking-[0.1em]">
              <a href="mailto:khamilton@evntmarketing.co" className="font-sans text-[11px] text-cream/40 hover:text-cream transition-colors tracking-[0.1em]">
                khamilton@evntmarketing.co
              </a>
              </a>
              <a href="#" className="text-cream/40 hover:text-cream transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="text-cream/40 hover:text-cream transition-colors" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          <p className="font-sans text-[10px] tracking-[0.15em] text-cream/25 text-center mt-12">© EVNT. North America.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
