import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--brown)", color: "var(--linen)" }} className="mt-0">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--linen)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="var(--brown)" />
              </svg>
            </div>
            <span className="text-lg font-bold" style={{ fontFamily: "Georgia, serif" }}>Sanctuary</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--linen-dark)" }}>
            A sacred space for women to grow, heal, and lift each other. Open to all — because wellness belongs to everyone.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--linen-dark)" }}>Explore</p>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/classes", label: "Classes" },
              { href: "/coaching", label: "Coaching" },
              { href: "/membership", label: "Membership" },
              { href: "/give-back", label: "Give & Grow" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:opacity-70 transition-opacity" style={{ color: "var(--linen)" }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--linen-dark)" }}>Our Values</p>
          <ul className="space-y-2 text-sm" style={{ color: "var(--linen-dark)" }}>
            <li>Love of nature</li>
            <li>Mutual care &amp; community</li>
            <li>Self-empowerment</li>
            <li>Inclusive for all women</li>
          </ul>
        </div>
      </div>
      <div className="border-t text-center py-6 text-xs" style={{ borderColor: "var(--brown-mid)", color: "var(--linen-dark)" }}>
        © {new Date().getFullYear()} Sanctuary Women&apos;s Wellness. All rights reserved.
      </div>
    </footer>
  );
}
