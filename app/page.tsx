import Link from "next/link";

const offerings = [
  {
    href: "/classes",
    // Woman receiving a relaxing massage treatment
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    title: "Wellness Treatments",
    desc: "Therapeutic massage, acupuncture, and healing therapies to restore your body and spirit.",
  },
  {
    href: "/classes",
    // Woman practicing yoga in a bright studio
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    title: "Movement & Mindfulness",
    desc: "Yoga, Pilates, and meditation classes to strengthen your body and calm your mind.",
  },
  {
    href: "/coaching",
    // Two women in a warm, engaged coaching conversation
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80",
    title: "Personal Coaching",
    desc: "One-on-one guidance from certified coaches across life, career, and wellness.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — full bleed with image */}
      <section
        className="relative min-h-[92vh] flex items-end md:items-center"
        style={{
          // Woman meditating in nature, serene and empowered
          backgroundImage: "url('https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Subtle left-side gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(232,224,213,0.85) 0%, rgba(232,224,213,0.4) 55%, transparent 100%)" }}
        />
        <div className="relative z-10 px-8 md:px-16 py-16 max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brown)" strokeWidth="1.5">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
            <span className="text-sm tracking-widest uppercase" style={{ color: "var(--brown)", fontFamily: "Arial, sans-serif" }}>
              Women&apos;s Wellness Sanctuary
            </span>
          </div>
          <h1
            className="font-bold leading-none mb-6"
            style={{ color: "var(--brown)", fontSize: "clamp(3rem, 8vw, 5.5rem)", fontFamily: "Georgia, serif", lineHeight: 1.05 }}
          >
            Your Sacred<br />Space to<br />Blossom
          </h1>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--brown-mid)", fontFamily: "Arial, sans-serif", maxWidth: "480px" }}>
            A sanctuary where women empower each other through wellness, growth, and the beautiful exchange of skills and support. Find your strength, spread your wings.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/classes"
              className="flex items-center gap-2 px-7 py-4 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ background: "var(--linen)", color: "var(--brown)", border: "1.5px solid var(--brown)", fontFamily: "Arial, sans-serif" }}
            >
              Explore Services <span>→</span>
            </Link>
            <Link
              href="/membership"
              className="flex items-center gap-2 px-7 py-4 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ background: "transparent", color: "var(--brown)", border: "1.5px solid var(--brown)", fontFamily: "Arial, sans-serif" }}
            >
              Learn More <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Nurture section */}
      <section className="py-24 px-6" style={{ background: "var(--linen)" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-center font-bold mb-4"
            style={{ color: "var(--brown)", fontSize: "clamp(2rem, 5vw, 3rem)", fontFamily: "Georgia, serif" }}
          >
            Nurture Your Whole Self
          </h2>
          <p className="text-center mb-16 text-base" style={{ color: "var(--brown-light)", fontFamily: "Arial, sans-serif" }}>
            From wellness treatments to empowering classes, discover services designed<br className="hidden md:block" /> to help you flourish in every aspect of your life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerings.map((o) => (
              <div key={o.title} className="rounded-2xl overflow-hidden" style={{ background: "var(--off-white)" }}>
                <div className="h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={o.image} alt={o.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2" style={{ color: "var(--brown)", fontFamily: "Georgia, serif" }}>{o.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--brown-light)", fontFamily: "Arial, sans-serif" }}>{o.desc}</p>
                  <Link href={o.href} className="text-sm flex items-center gap-1 hover:opacity-70 transition-opacity" style={{ color: "var(--brown)" }}>
                    Explore <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Exchange / Credit Economy */}
      <section className="py-24 px-6" style={{ background: "var(--sage-section)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brown)" strokeWidth="1.5">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              <line x1="12" y1="12" x2="12" y2="16" />
              <line x1="10" y1="14" x2="14" y2="14" />
            </svg>
            <span className="text-sm tracking-widest uppercase" style={{ color: "var(--brown)", fontFamily: "Arial, sans-serif" }}>
              Community Exchange
            </span>
          </div>
          <h2
            className="font-bold mb-6"
            style={{ color: "var(--brown)", fontSize: "clamp(2rem, 5vw, 3rem)", fontFamily: "Georgia, serif", lineHeight: 1.1 }}
          >
            Share Skills,<br />Build Community
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "var(--brown-mid)", fontFamily: "Arial, sans-serif" }}>
            Our unique credit economy allows you to offer your talents and receive support from other amazing women. No money involved—just the beautiful exchange of skills, time, and empowerment.
          </p>
          <ul className="space-y-3 mb-10">
            {["Offer your skills and earn credits", "Request help and use your credits", "Build meaningful connections", "Empower and be empowered"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "var(--brown)", fontFamily: "Arial, sans-serif" }}>
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--brown)" }} />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/give-back"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium transition-opacity hover:opacity-80"
            style={{ background: "var(--brown)", color: "var(--linen)", fontFamily: "Arial, sans-serif" }}
          >
            Explore Credit Hub <span>→</span>
          </Link>
        </div>
      </section>

      {/* Community photo + CTA */}
      <section style={{ background: "var(--linen)" }}>
        <div
          className="h-72 md:h-96 w-full"
          style={{
            // Group of women smiling and hugging together
            backgroundImage: "url('https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=1400&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        <div className="py-24 px-6 text-center max-w-3xl mx-auto">
          <h2 className="font-bold mb-4" style={{ color: "var(--brown)", fontSize: "clamp(2rem, 5vw, 3rem)", fontFamily: "Georgia, serif" }}>
            Ready to Begin Your Journey?
          </h2>
          <p className="text-base mb-10" style={{ color: "var(--brown-light)", fontFamily: "Arial, sans-serif" }}>
            Join a community of incredible women who believe in growth, healing, and the power of supporting each other. Your sanctuary awaits.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/membership"
              className="flex items-center gap-2 px-8 py-4 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ background: "var(--brown)", color: "var(--linen)", fontFamily: "Arial, sans-serif" }}
            >
              Join Sanctuary Today ♡
            </Link>
            <Link
              href="/classes"
              className="flex items-center gap-2 px-8 py-4 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ background: "transparent", color: "var(--brown)", border: "1.5px solid var(--brown)", fontFamily: "Arial, sans-serif" }}
            >
              Explore Services →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
