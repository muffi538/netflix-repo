import { useMemo } from "react";
import { motion } from "framer-motion";

export default function FloatingStickers({ stickers }: { stickers: string[] }) {
  const items = useMemo(
    () =>
      stickers.map((s, i) => ({
        emoji: s,
        id: i,
        top: 10 + Math.random() * 80,
        left: Math.random() * 100,
        size: 24 + Math.random() * 24,
        duration: 5 + Math.random() * 4,
        delay: Math.random() * 3,
      })),
    [stickers]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((s) => (
        <motion.span
          key={s.id}
          className="absolute select-none opacity-60"
          style={{ top: `${s.top}%`, left: `${s.left}%`, fontSize: s.size }}
          animate={{ y: [0, -18, 0], rotate: [0, 8, -8, 0] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {s.emoji}
        </motion.span>
      ))}
    </div>
  );
}
