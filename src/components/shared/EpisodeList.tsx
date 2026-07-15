import { motion } from "framer-motion";
import type { TimelineItem } from "@/data/types";
import PlaceholderImage from "./PlaceholderImage";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface EpisodeListProps {
  items: TimelineItem[];
  accent?: string;
}

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function EpisodeList({ items, accent = "#e50914" }: EpisodeListProps) {
  const [relived, setRelived] = useLocalStorage<string[]>("memoryreel:relived", []);

  const toggle = (id: string) => {
    setRelived((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <div className="flex flex-col divide-y divide-white/10 border-t border-b border-white/10">
      {items.map((item, i) => {
        const isRelived = relived.includes(item.id);
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: Math.min(i, 4) * 0.06 }}
            className="flex items-center gap-5 md:gap-8 py-6 group"
          >
            <span className="heading-display text-3xl md:text-5xl text-white/25 w-10 md:w-16 shrink-0 text-center">
              {String(i + 1).padStart(2, "0")}
            </span>

            {item.image && (
              <div className="relative shrink-0 w-28 sm:w-40 md:w-52 aspect-video rounded-md overflow-hidden">
                <PlaceholderImage src={item.image} alt={item.title} accent={accent} className="w-full h-full" />
              </div>
            )}

            <div className="flex-1 min-w-0">
              <span className="text-[11px] tracking-[0.25em] uppercase font-semibold" style={{ color: accent }}>
                {item.date}
              </span>
              <h3 className="heading-display text-xl md:text-2xl tracking-wide mt-1 text-white/95 truncate">
                {item.title}
              </h3>
              <p className="text-white/55 text-sm md:text-base mt-1 leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>

            <button
              onClick={() => toggle(item.id)}
              aria-label="Mark as relived"
              className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
                isRelived ? "text-white" : "text-white/30 border-white/20 hover:text-white/70 hover:border-white/50"
              }`}
              style={isRelived ? { backgroundColor: accent, borderColor: accent } : undefined}
            >
              <CheckIcon />
            </button>
          </motion.div>
        );
      })}
    </div>
  );
}
