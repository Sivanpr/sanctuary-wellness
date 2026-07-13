import Link from "next/link";

// Mock data — will be replaced with live Wix Members + Data API calls
const mockMember = {
  name: "Sarah",
  plan: "Bloom",
  credits: 12,
  upcomingClasses: [
    { title: "Sunrise Vinyasa", date: "Tomorrow, 7:00am", instructor: "Maya Cohen" },
    { title: "Breathwork Journey", date: "Friday, 6:00pm", instructor: "Roni Tal" },
  ],
  coachingSessions: [
    { coach: "Anat Mizrahi", date: "Next Tuesday, 3:00pm", type: "Life Coaching" },
  ],
  myOffers: [
    { skill: "Resume Writing", credits: 2, bookings: 3 },
    { skill: "English Tutoring", credits: 1, bookings: 5 },
  ],
  recentActivity: [
    { action: "Gave: 1hr Resume Review to Noa L.", credits: "+2 credits", date: "2 days ago" },
    { action: "Received: Meditation Session from Anat M.", credits: "-1 credit", date: "4 days ago" },
    { action: "Booked: Yin Deep Stretch", credits: "–", date: "5 days ago" },
  ],
};

export default function MembersPage() {
  const m = mockMember;

  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--sage)] mb-2">My Space</p>
          <h1 className="text-4xl font-light text-[var(--sage-dark)]">
            Welcome back, {m.name} 🌸
          </h1>
          <p className="text-[var(--earth)] mt-2">Your {m.plan} membership is active.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="p-8 bg-[var(--sage-dark)] text-white rounded-2xl text-center">
            <p className="text-5xl font-light mb-2">{m.credits}</p>
            <p className="text-sm text-[var(--sage-light)] uppercase tracking-widest">Give &amp; Grow Credits</p>
          </div>
          <div className="p-8 bg-white border border-[var(--blush)] rounded-2xl text-center">
            <p className="text-5xl font-light text-[var(--sage-dark)] mb-2">{m.upcomingClasses.length}</p>
            <p className="text-sm text-[var(--earth)] uppercase tracking-widest">Upcoming Classes</p>
          </div>
          <div className="p-8 bg-white border border-[var(--blush)] rounded-2xl text-center">
            <p className="text-5xl font-light text-[var(--sage-dark)] mb-2">{m.myOffers.reduce((a, o) => a + o.bookings, 0)}</p>
            <p className="text-sm text-[var(--earth)] uppercase tracking-widest">Women Helped</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming classes */}
          <div className="bg-white rounded-2xl border border-[var(--blush)] p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[var(--sage-dark)]">Upcoming Classes</h2>
              <Link href="/classes" className="text-xs text-[var(--sage)] uppercase tracking-widest hover:underline">
                Book more →
              </Link>
            </div>
            <div className="space-y-4">
              {m.upcomingClasses.map((cls) => (
                <div key={cls.title} className="flex items-start justify-between py-3 border-b border-[var(--blush-light)] last:border-0">
                  <div>
                    <p className="font-medium text-[var(--charcoal)]">{cls.title}</p>
                    <p className="text-sm text-[var(--earth)]">with {cls.instructor}</p>
                  </div>
                  <span className="text-xs text-[var(--sage)] whitespace-nowrap ml-4">{cls.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coaching */}
          <div className="bg-white rounded-2xl border border-[var(--blush)] p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[var(--sage-dark)]">Coaching Sessions</h2>
              <Link href="/coaching" className="text-xs text-[var(--sage)] uppercase tracking-widest hover:underline">
                Book more →
              </Link>
            </div>
            <div className="space-y-4">
              {m.coachingSessions.map((s) => (
                <div key={s.coach} className="flex items-start justify-between py-3 border-b border-[var(--blush-light)] last:border-0">
                  <div>
                    <p className="font-medium text-[var(--charcoal)]">{s.type}</p>
                    <p className="text-sm text-[var(--earth)]">with {s.coach}</p>
                  </div>
                  <span className="text-xs text-[var(--sage)] whitespace-nowrap ml-4">{s.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My skills */}
          <div className="bg-white rounded-2xl border border-[var(--blush)] p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[var(--sage-dark)]">My Skill Offers</h2>
              <Link href="/give-back" className="text-xs text-[var(--sage)] uppercase tracking-widest hover:underline">
                Add offer →
              </Link>
            </div>
            <div className="space-y-4">
              {m.myOffers.map((o) => (
                <div key={o.skill} className="flex items-center justify-between py-3 border-b border-[var(--blush-light)] last:border-0">
                  <div>
                    <p className="font-medium text-[var(--charcoal)]">{o.skill}</p>
                    <p className="text-sm text-[var(--earth)]">{o.credits} credit{o.credits > 1 ? "s" : ""} per session</p>
                  </div>
                  <span className="text-xs bg-[var(--sage-light)] text-white px-3 py-1 rounded-full">
                    {o.bookings} bookings
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent activity */}
          <div className="bg-white rounded-2xl border border-[var(--blush)] p-8">
            <h2 className="text-lg font-semibold text-[var(--sage-dark)] mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {m.recentActivity.map((a) => (
                <div key={a.action} className="flex items-start justify-between py-3 border-b border-[var(--blush-light)] last:border-0">
                  <div>
                    <p className="text-sm text-[var(--charcoal)]">{a.action}</p>
                    <p className="text-xs text-[var(--earth)] mt-1">{a.date}</p>
                  </div>
                  <span className={`text-xs font-medium ml-4 whitespace-nowrap ${a.credits.startsWith("+") ? "text-[var(--sage)]" : "text-[var(--earth)]"}`}>
                    {a.credits}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
