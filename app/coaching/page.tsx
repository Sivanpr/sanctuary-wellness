import Link from "next/link";

const coaches = [
  {
    name: "Dr. Michal Katz",
    specialty: "Trauma-Informed Therapy",
    methods: ["Somatic Experiencing", "EMDR", "IFS"],
    bio: "15 years helping women heal from trauma and reclaim their bodies as safe places.",
    availability: "Tue, Thu, Sat",
    credits: 4,
  },
  {
    name: "Anat Mizrahi",
    specialty: "Life & Mindset Coaching",
    methods: ["NLP", "Positive Psychology", "Visualization"],
    bio: "Guiding women through major life transitions with clarity, courage, and compassion.",
    availability: "Mon, Wed, Fri",
    credits: 3,
  },
  {
    name: "Roni Tal",
    specialty: "Breathwork & Nervous System",
    methods: ["Holotropic Breathwork", "Polyvagal Theory"],
    bio: "Helps women regulate their nervous systems and access deep states of peace and power.",
    availability: "Wed, Sun",
    credits: 3,
  },
  {
    name: "Tamar Ben-Or",
    specialty: "Career & Leadership",
    methods: ["Executive Coaching", "Strengths-Based", "Co-Active"],
    bio: "Empowering women to own their ambition, lead authentically, and build careers they love.",
    availability: "Mon, Tue, Thu",
    credits: 4,
  },
  {
    name: "Shira Goldstein",
    specialty: "Nutrition & Embodiment",
    methods: ["Intuitive Eating", "Functional Nutrition"],
    bio: "A whole-body approach to food, weight, and your relationship with yourself.",
    availability: "Mon, Wed, Sat",
    credits: 3,
  },
  {
    name: "Leila Nassar",
    specialty: "Relationship & Family",
    methods: ["EFT Couples", "Attachment Theory", "Family Systems"],
    bio: "Supporting women in building nourishing relationships — with themselves and others.",
    availability: "Tue, Thu, Sun",
    credits: 4,
  },
];

export default function CoachingPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--sage)] mb-4">Coaching</p>
          <h1 className="text-4xl md:text-5xl font-light text-[var(--sage-dark)] mb-6">
            Grow with guidance
          </h1>
          <p className="text-[var(--earth)] max-w-xl mx-auto leading-relaxed">
            Our coaches are all women who walk the same path. One-on-one sessions, fully confidential, matched to where you are in life right now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className="bg-white rounded-2xl border border-[var(--blush)] p-8 flex flex-col hover:border-[var(--sage)] hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--blush-light)] flex items-center justify-center text-2xl mb-5">
                🌸
              </div>
              <h3 className="font-semibold text-[var(--sage-dark)] text-lg mb-1">{coach.name}</h3>
              <p className="text-sm text-[var(--sage)] font-medium mb-3">{coach.specialty}</p>
              <p className="text-sm text-[var(--earth)] leading-relaxed mb-4">{coach.bio}</p>

              <div className="mb-4">
                <p className="text-xs text-[var(--earth)] uppercase tracking-widest mb-2">Methods</p>
                <div className="flex flex-wrap gap-2">
                  {coach.methods.map((m) => (
                    <span key={m} className="px-2 py-1 bg-[var(--blush-light)] text-[var(--earth)] text-xs rounded-full">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[var(--earth)] mb-6">
                <span>🗓 {coach.availability}</span>
                <span className="text-[var(--gold)]">{coach.credits} credits / session</span>
              </div>

              <Link
                href="#"
                className="mt-auto text-center py-3 rounded-full text-sm bg-[var(--sage)] text-white hover:bg-[var(--sage-dark)] transition-colors"
              >
                Book a Session
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-10 bg-[var(--blush-light)] rounded-2xl">
            <h3 className="text-xl font-light text-[var(--sage-dark)] mb-4">First session free</h3>
            <p className="text-[var(--earth)] text-sm leading-relaxed">
              Every new member gets one complimentary 30-minute intro session with any coach of their choice. No commitment required.
            </p>
          </div>
          <div className="p-10 bg-[var(--sage-dark)] text-white rounded-2xl">
            <h3 className="text-xl font-light mb-4">Are you a coach?</h3>
            <p className="text-[var(--sage-light)] text-sm leading-relaxed mb-6">
              Join our practitioner community. Offer sessions through Bloom and be part of something that truly changes lives.
            </p>
            <Link href="/give-back" className="text-sm text-[var(--gold)] underline underline-offset-4">
              Apply to join the team →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
