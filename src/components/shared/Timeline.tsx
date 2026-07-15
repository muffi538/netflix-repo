import { motion } from "framer-motion";
import type { TimelineItem } from "@/data/types";
import PlaceholderImage from "./PlaceholderImage";

interface TimelineProps {
  items: TimelineItem[];
  accent?: string;
}

export default function Timeline({ items, accent = "#e50914" }: TimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
        style={{ background: `linear-gradient(to bottom, transparent, ${accent}66, transparent)` }}
      />

      <div className="flex flex-col gap-16">
        {items.map((item, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 pl-12 md:pl-0 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className="absolute left-4 md:left-1/2 top-1.5 w-3 h-3 rounded-full -translate-x-1/2 z-10"
                style={{ backgroundColor: accent, boxShadow: `0 0 12px ${accent}` }}
              />

              <div className="md:w-1/2 md:px-10">
                {item.image && (
                  <PlaceholderImage
                    src={item.image}
                    alt={item.title}
                    accent={accent}
                    className="rounded-xl aspect-video shadow-2xl"
                  />
                )}
              </div>

              <div className="md:w-1/2 md:px-10">
                <span className="text-xs tracking-[0.25em] uppercase font-semibold" style={{ color: accent }}>
                  {item.date}
                </span>
                <h3 className="heading-display text-2xl md:text-3xl mt-2 mb-2 tracking-wide">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
