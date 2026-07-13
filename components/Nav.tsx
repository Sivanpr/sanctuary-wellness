"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/classes", label: "Classes" },
  { href: "/coaching", label: "Coaching" },
  { href: "/membership", label: "Membership" },
  { href: "/give-back", label: "Give & Grow" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50" style={{ background: "var(--linen)", borderBottom: "1px solid var(--linen-dark)" }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "var(--brown)" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-wide" style={{ color: "var(--brown)", fontFamily: "Georgia, serif" }}>
            Sanctuary
          </span>
        </Link>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/members" className="text-sm" style={{ color: "var(--brown-light)" }}>
            Sign In
          </Link>
          <button className="p-1" style={{ color: "var(--brown)" }} aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" style={{ color: "var(--brown)" }} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: "var(--linen)", borderTop: "1px solid var(--linen-dark)" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium" style={{ color: "var(--brown)" }} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/members" className="text-sm" style={{ color: "var(--brown-light)" }} onClick={() => setOpen(false)}>
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
}
