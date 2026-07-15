import { useEffect, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";

interface TopNavTab {
  id: string;
  label: string;
}

interface TopNavProps {
  accent?: string;
  profileEmoji?: string;
  tabs?: TopNavTab[];
}

export default function TopNav({ accent = "#e50914", profileEmoji, tabs = [] }: TopNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md border-b border-white/10" : "bg-gradient-to-b from-black/80 via-black/30 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between gap-6 px-5 md:px-10 h-16">
        <Link to="/" className="flex items-center gap-2 shrink-0 group">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50 group-hover:text-white transition-colors" />
          </svg>
          <span
            className="heading-display text-2xl tracking-wide text-ember group-hover:brightness-110 transition"
            style={{ textShadow: "0 0 20px rgba(229,9,20,0.5)" }}
          >
            FOREVER
          </span>
        </Link>

        {tabs.length > 0 && (
          <nav className="hidden md:flex items-center gap-7 overflow-x-auto no-scrollbar mx-auto">
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className="text-sm text-white/60 hover:text-white transition-colors whitespace-nowrap font-medium hover:[text-shadow:0_0_16px_var(--nav-accent-glow)]"
                style={{ "--nav-accent-glow": `${accent}aa` } as CSSProperties}
              >
                {tab.label}
              </a>
            ))}
          </nav>
        )}

        <Link
          to="/"
          className="shrink-0 w-8 h-8 rounded-md flex items-center justify-center text-base border border-white/15 bg-white/5 hover:border-white/40 transition-colors"
          style={{ boxShadow: `0 0 16px ${accent}33` }}
        >
          {profileEmoji ?? "🎬"}
        </Link>
      </div>

      {tabs.length > 0 && (
        <nav className="md:hidden flex items-center gap-5 overflow-x-auto no-scrollbar px-5 pb-3 -mt-1">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className="text-xs text-white/60 hover:text-white transition-colors whitespace-nowrap font-medium"
            >
              {tab.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
