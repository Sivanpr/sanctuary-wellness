import Link from "next/link";

const plans = [
  {
    name: "Seed",
    price: "Free",
    period: "",
    description: "For women who need access but can't pay right now. Supported by the community.",
    features: ["2 classes per month", "Access to Give & Grow credits", "Community events", "Member directory"],
    cta: "Join Free",
    highlight: false,
    badge: "Community Supported",
  },
  {
    name: "Bloom",
    price: "$49",
    period: "/ month",
    description: "The full Sanctuary experience. Unlimited classes, coaching discounts, and more.",
    features: ["Unlimited classes", "2 coaching sessions/month", "Priority booking", "10 Give & Grow credits/month", "Member events & workshops"],
    cta: "Start Blooming →",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Roots",
    price: "$19",
    period: "/ month",
    description: "Essential access for women starting their wellness journey.",
    features: ["6 classes per month", "1 coaching session/month", "5 Give & Grow credits/month", "Community events"],
    cta: "Get Started →",
    highlight: false,
    badge: null,
  },
  {
    name: "Sanctuary",
    price: "$99",
    period: "/ month",
    description: "For women ready to lead, deepen, and give back in the fullest way.",
    features: ["Everything in Bloom", "Unlimited coaching", "30 Give & Grow credits/month", "Host your own workshops", "Mentor a Seed member", "Annual wellness retreat"],
    cta: "Join Sanctuary →",
    highlight: false,
    badge: "All-Access",
  },
];

export default function MembershipPage() {
  return (
    <div className="py-24 px-6" style={{ background: "var(--linen)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--brown-light)", fontFamily: "Arial, sans-serif" }}>Membership</p>
          <h1 className="font-bold mb-6" style={{ color: "var(--brown)", fontSize: "clamp(2.5rem, 6vw, 4rem)", fontFamily: "Georgia, serif" }}>
            Find Your Place in Sanctuary
          </h1>
          <p className="max-w-xl mx-auto leading-relaxed" style={{ color: "var(--brown-light)", fontFamily: "Arial, sans-serif" }}>
            Every woman deserves access to wellness. Our plans are designed to meet you where you are — from free community-supported access to full immersion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-2xl p-8 flex flex-col"
              style={{
                background: plan.highlight ? "var(--brown)" : "var(--off-white)",
                border: plan.highlight ? "none" : "1px solid var(--linen-dark)",
              }}
            >
              {plan.badge && (
                <span
                  className="absolute -top-3 left-6 px-4 py-1 rounded-full text-xs uppercase tracking-widest"
                  style={{
                    background: plan.highlight ? "var(--linen)" : "var(--linen-dark)",
                    color: "var(--brown)",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  {plan.badge}
                </span>
              )}
              <h2 className="text-xl font-bold mb-1" style={{ color: plan.highlight ? "var(--linen)" : "var(--brown)", fontFamily: "Georgia, serif" }}>
                {plan.name}
              </h2>
              <div className="mb-4">
                <span className="text-3xl font-bold" style={{ color: plan.highlight ? "var(--linen)" : "var(--brown)", fontFamily: "Georgia, serif" }}>{plan.price}</span>
                <span className="text-sm ml-1" style={{ color: plan.highlight ? "var(--linen-dark)" : "var(--brown-light)", fontFamily: "Arial, sans-serif" }}>{plan.period}</span>
              </div>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: plan.highlight ? "var(--linen-dark)" : "var(--brown-light)", fontFamily: "Arial, sans-serif" }}>
                {plan.description}
              </p>
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm flex items-start gap-2" style={{ color: plan.highlight ? "var(--linen)" : "var(--brown)", fontFamily: "Arial, sans-serif" }}>
                    <span style={{ color: plan.highlight ? "var(--linen-dark)" : "var(--brown-light)" }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className="text-center py-3 text-sm font-medium transition-opacity hover:opacity-80"
                style={{
                  background: plan.highlight ? "var(--linen)" : "var(--brown)",
                  color: plan.highlight ? "var(--brown)" : "var(--linen)",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-10 rounded-2xl" style={{ background: "var(--sage-section)" }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--brown)", fontFamily: "Georgia, serif" }}>
            Can&apos;t afford a plan right now?
          </h3>
          <p className="mb-6 max-w-lg mx-auto" style={{ color: "var(--brown-mid)", fontFamily: "Arial, sans-serif" }}>
            Our Seed membership is community-supported. Apply with honesty — no proof needed, no shame. Sanctuary is for every woman.
          </p>
          <Link href="#" className="text-sm underline underline-offset-4 hover:opacity-70 transition-opacity" style={{ color: "var(--brown)" }}>
            Apply for community-supported access →
          </Link>
        </div>
      </div>
    </div>
  );
}
