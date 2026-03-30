const caseStudies = [
  {
    photo: "/lovable-uploads/paid-cms.jpg",
    client: "#PAID",
    headline: "350 people. One room. A conference that actually converted.",
    body: "We ideated, built, and ran the Creator Marketing Summit from scratch — and rebooked it. Now title-sponsored by YouTube.",
  },
  {
    photo: "/lovable-uploads/youtube-sneaker.jpg",
    client: "YOUTUBE",
    headline: "The best sales meeting they never saw coming.",
    body: "50 internal reps. A custom sneaker. Thought leadership that stuck. Pipeline that followed.",
  },
  {
    photo: "/lovable-uploads/tiktok-aesop.jpg",
    client: "TIKTOK",
    headline: "The deal starts before the deck.",
    body: "We put TikTok's team and #paid creators in an Aesop store. Relationships built. Conversations started. Conversions followed.",
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
            {/* Photo area - top 55% */}
            <div className="absolute inset-x-0 top-0" style={{ height: "55%" }}>
              <img
                src={study.photo}
                alt={study.headline}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            {/* Text area - bottom 45% */}
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-center" style={{ height: "45%", backgroundColor: "#0a0a0a" }}>
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
