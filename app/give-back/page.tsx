import Link from "next/link";

const skillCategories = [
  { icon: "🧠", category: "Mind & Healing", examples: ["Therapy session", "Meditation teaching", "Emotional support listening", "Breathwork session"] },
  { icon: "💼", category: "Professional Skills", examples: ["Legal advice", "Financial planning", "Career coaching", "CV review"] },
  { icon: "🎨", category: "Creative Arts", examples: ["Graphic design", "Photography", "Writing & editing", "Music lessons"] },
  { icon: "🌿", category: "Home & Life", examples: ["Cooking a meal", "Childcare swap", "Home organization", "Gardening help"] },
  { icon: "💪", category: "Wellness", examples: ["Yoga instruction", "Personal training", "Massage", "Nutritional guidance"] },
  { icon: "🛠", category: "Tech & Digital", examples: ["Website help", "Social media setup", "Tech troubleshooting", "Digital literacy"] },
];

const howItWorks = [
  { step: "1", title: "List your skill", desc: "Offer what you're good at — an hour of your time, a session, a service." },
  { step: "2", title: "Connect with a sister", desc: "Another member finds your offer and books it. You receive her credits." },
  { step: "3", title: "Spend your credits", desc: "Use earned credits for classes, coaching sessions, or other member services." },
  { step: "4", title: "The circle grows", desc: "No money changes hands. Just women supporting women in an expanding web of care." },
];

export default function GiveBackPage() {
  return (
    <div style={{ background: "var(--linen)" }}>
      {/* Header */}
      <div className="py-24 px-6 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brown)" strokeWidth="1.5">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            <line x1="12" y1="12" x2="12" y2="16" />
            <line x1="10" y1="14" x2="14" y2="14" />
          </svg>
          <span className="text-sm uppercase tracking-widest" style={{ color: "var(--brown)", fontFamily: "Arial, sans-serif" }}>Community Exchange</span>
        </div>
        <h1 className="font-bold mb-6" style={{ color: "var(--brown)", fontSize: "clamp(2.5rem, 6vw, 4rem)", fontFamily: "Georgia, serif", lineHeight: 1.1 }}>
          Share Skills,<br />Build Community
        </h1>
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
      </div>

      {/* How it works */}
      <div className="py-16 px-6" style={{ background: "var(--off-white)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12" style={{ color: "var(--brown)", fontFamily: "Georgia, serif" }}>How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {howItWorks.map((s) => (
              <div key={s.step} className="text-center p-8 rounded-2xl" style={{ background: "var(--linen)", border: "1px solid var(--linen-dark)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4" style={{ background: "var(--brown)", color: "var(--linen)", fontFamily: "Georgia, serif" }}>
                  {s.step}
                </div>
                <h3 className="font-bold mb-3" style={{ color: "var(--brown)", fontFamily: "Georgia, serif" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--brown-light)", fontFamily: "Arial, sans-serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="py-20 px-6 text-center" style={{ background: "var(--sage-section)" }}>
        <p className="text-xl leading-relaxed max-w-2xl mx-auto font-bold" style={{ color: "var(--brown)", fontFamily: "Georgia, serif" }}>
          &ldquo;This is not charity. This is community. Every woman who receives has already given, or will give. The circle has no beginning and no end.&rdquo;
        </p>
      </div>

      {/* Skill categories */}
      <div className="py-24 px-6" style={{ background: "var(--linen)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "var(--brown)", fontFamily: "Georgia, serif" }}>What women are sharing</h2>
          <p className="text-center mb-12" style={{ color: "var(--brown-light)", fontFamily: "Arial, sans-serif" }}>Every skill is welcome. Big or small.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <div key={cat.category} className="p-8 rounded-2xl" style={{ background: "var(--off-white)", border: "1px solid var(--linen-dark)" }}>
                <div className="text-3xl mb-4">{cat.icon}</div>
                <h3 className="font-bold mb-4" style={{ color: "var(--brown)", fontFamily: "Georgia, serif" }}>{cat.category}</h3>
                <ul className="space-y-2">
                  {cat.examples.map((ex) => (
                    <li key={ex} className="text-sm flex items-center gap-2" style={{ color: "var(--brown-light)", fontFamily: "Arial, sans-serif" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--brown-light)" }} /> {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="py-16 px-6" style={{ background: "var(--off-white)" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-10 rounded-2xl text-center" style={{ background: "var(--linen)", border: "1px solid var(--linen-dark)" }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: "var(--brown)", fontFamily: "Georgia, serif" }}>I want to give</h3>
            <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--brown-light)", fontFamily: "Arial, sans-serif" }}>
              List your skill and start earning credits that unlock the full Sanctuary experience.
            </p>
            <Link href="#" className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium transition-opacity hover:opacity-80" style={{ background: "var(--brown)", color: "var(--linen)", fontFamily: "Arial, sans-serif" }}>
              List a Skill →
            </Link>
          </div>
          <div className="p-10 rounded-2xl text-center" style={{ background: "var(--sage-section)" }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: "var(--brown)", fontFamily: "Georgia, serif" }}>I need support</h3>
            <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--brown-mid)", fontFamily: "Arial, sans-serif" }}>
              Browse what other members are offering and use your credits to receive care.
            </p>
            <Link href="#" className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium transition-opacity hover:opacity-80" style={{ background: "var(--brown)", color: "var(--linen)", fontFamily: "Arial, sans-serif" }}>
              Browse Offers →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
