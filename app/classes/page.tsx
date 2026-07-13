import Link from "next/link";

const categories = [
  {
    name: "Yoga",
    // Woman in a graceful warrior pose in a bright studio
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80",
    classes: [
      { title: "Sunrise Vinyasa", instructor: "Maya Cohen", time: "Mon & Wed 7:00am", level: "All levels", credits: 1 },
      { title: "Restorative Yoga", instructor: "Leila Nassar", time: "Tue & Thu 6:00pm", level: "Beginner friendly", credits: 1 },
      { title: "Yin Deep Stretch", instructor: "Sarah Ben-David", time: "Saturday 9:00am", level: "All levels", credits: 1 },
    ],
  },
  {
    name: "Pilates",
    // Woman on a pilates reformer machine
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    classes: [
      { title: "Mat Pilates Foundations", instructor: "Noa Levi", time: "Mon & Fri 8:00am", level: "Beginner", credits: 1 },
      { title: "Reformer Pilates", instructor: "Dana Shapiro", time: "Tue & Thu 10:00am", level: "Intermediate", credits: 2 },
      { title: "Pilates Flow", instructor: "Noa Levi", time: "Wednesday 5:30pm", level: "All levels", credits: 1 },
    ],
  },
  {
    name: "Mind & Soul",
    // Woman meditating peacefully with eyes closed, soft light
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&q=80",
    classes: [
      { title: "Guided Meditation", instructor: "Anat Mizrahi", time: "Daily 7:30am", level: "All levels", credits: 0 },
      { title: "Breathwork Journey", instructor: "Roni Tal", time: "Friday 6:00pm", level: "All levels", credits: 1 },
      { title: "Somatic Healing", instructor: "Dr. Michal Katz", time: "Sunday 10:00am", level: "All levels", credits: 2 },
    ],
  },
  {
    name: "Movement",
    // Woman dancing expressively in a studio
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&q=80",
    classes: [
      { title: "Dance for Joy", instructor: "Shira Goldstein", time: "Wednesday 7:00pm", level: "All levels", credits: 1 },
      { title: "Qigong & Flow", instructor: "Maya Cohen", time: "Thursday 8:00am", level: "All levels", credits: 1 },
      { title: "Aerial Silk Intro", instructor: "Tamar Elias", time: "Saturday 2:00pm", level: "Beginner", credits: 2 },
    ],
  },
];

export default function ClassesPage() {
  return (
    <div style={{ background: "var(--linen)" }}>
      {/* Header */}
      <div className="py-24 px-6 text-center max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--brown-light)", fontFamily: "Arial, sans-serif" }}>Classes</p>
        <h1 className="font-bold mb-6" style={{ color: "var(--brown)", fontSize: "clamp(2.5rem, 6vw, 4rem)", fontFamily: "Georgia, serif" }}>
          Move. Breathe. Be.
        </h1>
        <p style={{ color: "var(--brown-light)", fontFamily: "Arial, sans-serif" }}>
          All classes are led by women, for women. Pay with your membership or Give &amp; Grow credits.
        </p>
      </div>

      <div className="px-6 pb-24 max-w-6xl mx-auto space-y-20">
        {categories.map((cat) => (
          <div key={cat.name}>
            {/* Category header with image */}
            <div className="rounded-2xl overflow-hidden h-48 mb-8 relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-end p-6" style={{ background: "linear-gradient(to top, rgba(74,44,26,0.7) 0%, transparent 60%)" }}>
                <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>{cat.name}</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cat.classes.map((cls) => (
                <div key={cls.title} className="p-6 rounded-2xl" style={{ background: "var(--off-white)", border: "1px solid var(--linen-dark)" }}>
                  <h3 className="font-bold mb-1" style={{ color: "var(--brown)", fontFamily: "Georgia, serif" }}>{cls.title}</h3>
                  <p className="text-sm mb-3" style={{ color: "var(--brown-light)", fontFamily: "Arial, sans-serif" }}>with {cls.instructor}</p>
                  <p className="text-xs mb-1" style={{ color: "var(--brown-mid)", fontFamily: "Arial, sans-serif" }}>🕐 {cls.time}</p>
                  <p className="text-xs mb-5" style={{ color: "var(--brown-light)", fontFamily: "Arial, sans-serif" }}>✦ {cls.level}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "var(--brown-light)", fontFamily: "Arial, sans-serif" }}>
                      {cls.credits === 0 ? "Free for members" : `${cls.credits} credit${cls.credits > 1 ? "s" : ""}`}
                    </span>
                    <Link href="#" className="px-4 py-2 text-xs font-medium transition-opacity hover:opacity-80" style={{ background: "var(--brown)", color: "var(--linen)", fontFamily: "Arial, sans-serif" }}>
                      Book →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="py-20 px-6 text-center" style={{ background: "var(--sage-section)" }}>
        <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--brown)", fontFamily: "Georgia, serif" }}>Want to teach a class?</h3>
        <p className="mb-8 max-w-md mx-auto" style={{ color: "var(--brown-mid)", fontFamily: "Arial, sans-serif" }}>
          If you&apos;re a certified instructor, offer your classes through Sanctuary and earn Give &amp; Grow credits.
        </p>
        <Link href="/give-back" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium transition-opacity hover:opacity-80" style={{ background: "var(--brown)", color: "var(--linen)", fontFamily: "Arial, sans-serif" }}>
          Become an Instructor →
        </Link>
      </div>
    </div>
  );
}
