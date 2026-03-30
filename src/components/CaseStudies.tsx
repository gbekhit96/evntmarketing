const caseStudies = [
  {
    gif: "/lovable-uploads/paid-creator-summit.gif",
    client: "#PAID",
    headline: "Sold-out summit. $2M+ in pipeline.",
    body: "EVNT built and ran the Creator Marketing Summit end-to-end — strategy, production, and attendee acquisition.",
  },
  {
    gif: "/lovable-uploads/youtube-sneaker-workshop.gif",
    client: "YOUTUBE",
    headline: "One workshop. A room full of the right creators.",
    body: "An intimate sneaker-culture experience that connected YouTube's creator partners with the brand in a high-signal environment.",
  },
  {
    gif: "/lovable-uploads/asap-shopping-experience.gif",
    client: "ASAP",
    headline: "A shopping experience that felt like a cultural moment.",
    body: "An immersive retail activation blending music, fashion, and community — designed to convert attention into connection.",
  },
];

const CaseStudies = () => (
  <section style={{ backgroundColor: "#f5f4f0", paddingTop: "100px", paddingBottom: "80px" }}>
    <div className="max-w-[1200px] mx-auto px-6 md:px-12">
      <p className="text-[11px] font-sans uppercase mb-3" style={{ color: "#9a9a9a", letterSpacing: "0.1em" }}>
        Our Work
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-[48px] font-serif leading-[1.1] tracking-tight mb-10" style={{ color: "#0D0D0D", fontWeight: 900 }}>
        Proof it works.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {caseStudies.map((study) => (
          <div key={study.client} className="relative overflow-hidden" style={{ height: "420px" }}>
            {/* Media area - top 60% */}
            <div className="absolute inset-x-0 top-0" style={{ height: "60%" }}>
              <img
                src={study.gif}
                alt={study.headline}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.35)" }} />
            </div>
            {/* Text area - bottom 40% */}
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-center" style={{ height: "40%", backgroundColor: "#0a0a0a" }}>
              <p className="text-[11px] uppercase text-white mb-2" style={{ letterSpacing: "0.15em", opacity: 0.6 }}>
                {study.client}
              </p>
              <p className="text-white font-bold leading-[1.3]" style={{ fontSize: "20px" }}>
                {study.headline}
              </p>
              <p style={{ color: "#9a9a9a", fontSize: "13px", marginTop: "8px" }}>
                {study.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
