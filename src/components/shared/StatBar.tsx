import { motion } from "framer-motion";
import type { StatItem } from "@/data/types";

export default function StatBar({ stats, accent = "#e50914" }: { stats: StatItem[]; accent?: string }) {
  const max = Math.max(...stats.map((s) => s.value), 1);

  return (
    <div className="flex flex-col gap-6 max-w-3xl">
      {stats.map((stat, i) => (
        <div key={stat.id} className="flex items-center gap-4 md:gap-6">
          <span className="w-32 sm:w-44 shrink-0 text-sm md:text-base text-white/70 font-medium">{stat.label}</span>
          <div className="flex-1 h-3 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: stat.value / max }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left", backgroundColor: accent }}
              className="h-full rounded-full"
            />
          </div>
          <span className="w-16 shrink-0 text-right heading-display text-xl md:text-2xl tracking-wide" style={{ color: accent }}>
            {stat.value}
            {stat.suffix ?? ""}
          </span>
        </div>
      ))}
    </div>
  );
}
