const caseStudies = [
  {
    headline: "350 people. One room. A conference that actually converted.",
    body: "We ideated, built, and ran the Creator Marketing Summit from scratch — and rebooked it. Now title-sponsored by YouTube.",
    logo: null,
    logoText: "#paid",
  },
  {
    headline: "The best sales meeting they never saw coming.",
    body: "50 internal reps. A custom sneaker. Thought leadership that stuck. Pipeline that followed.",
    logo: "https://cdn.simpleicons.org/youtube/ffffff",
    logoText: null,
  },
  {
    headline: "The deal starts before the deck.",
    body: "We put TikTok's team and #paid creators in an Aesop store. Relationships built. Conversations started. Conversions followed.",
    logo: "https://cdn.simpleicons.org/tiktok/ffffff",
    logoText: null,
  },
];

const CaseStudies = () => (
  <section style={{ backgroundColor: "#0a0a0a", paddingTop: "100px", paddingBottom: "80px" }}>
    <div className="max-w-[1200px] mx-auto px-6 md:px-12">
      <p className="text-[11px] font-sans uppercase mb-3" style={{ color: "#9a9a9a", letterSpacing: "0.1em" }}>
        Our Work
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-[48px] font-serif leading-[1.1] tracking-tight text-white mb-10" style={{ fontWeight: 900 }}>
        Proof it works.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {caseStudies.map((study, i) => (
          <div
            key={i}
            className="flex flex-col justify-between"
            style={{
              height: "280px",
              backgroundColor: "#141414",
              border: "1px solid #2a2a2a",
              padding: "32px",
            }}
          >
            <div>
              <p className="text-white font-bold leading-[1.3]" style={{ fontSize: "20px" }}>
                {study.headline}
              </p>
              <p style={{ color: "#9a9a9a", fontSize: "13px", marginTop: "8px" }}>
                {study.body}
              </p>
            </div>
            <div className="flex justify-end">
              {study.logo ? (
                <img
                  src={study.logo}
                  alt=""
                  style={{ height: "20px", opacity: 0.5 }}
                  loading="lazy"
                />
              ) : (
                <span
                  className="uppercase font-sans"
                  style={{ color: "#ffffff", fontSize: "11px", letterSpacing: "0.1em", opacity: 0.5 }}
                >
                  {study.logoText}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
