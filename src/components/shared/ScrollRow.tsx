import { useRef, useState, type ReactNode } from "react";

interface ScrollRowProps {
  children: ReactNode;
  accent?: string;
}

const ChevronIcon = ({ flip = false }: { flip?: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`w-5 h-5 ${flip ? "rotate-180" : ""}`}>
    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ScrollRow({ children, accent = "#e50914" }: ScrollRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const scrollByAmount = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <div
      className="relative group/row"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        ref={ref}
        className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-2"
      >
        {children}
      </div>

      {hovering && (
        <>
          <button
            onClick={() => scrollByAmount(-1)}
            aria-label="Scroll left"
            className="hidden md:flex absolute left-0 top-0 bottom-2 w-12 items-center justify-center bg-gradient-to-r from-black/80 to-transparent text-white/80 hover:text-white transition-colors"
          >
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center bg-black/50 border border-white/20"
              style={{ boxShadow: `0 0 20px ${accent}44` }}
            >
              <ChevronIcon flip />
            </span>
          </button>
          <button
            onClick={() => scrollByAmount(1)}
            aria-label="Scroll right"
            className="hidden md:flex absolute right-0 top-0 bottom-2 w-12 items-center justify-center bg-gradient-to-l from-black/80 to-transparent text-white/80 hover:text-white transition-colors"
          >
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center bg-black/50 border border-white/20"
              style={{ boxShadow: `0 0 20px ${accent}44` }}
            >
              <ChevronIcon />
            </span>
          </button>
        </>
      )}
    </div>
  );
}
