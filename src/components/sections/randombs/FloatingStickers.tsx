import { useMemo } from "react";
import { motion } from "framer-motion";

interface FloatingStickersProps {
  stickers: string[];
  avoidBottomLeft?: boolean;
}

export default function FloatingStickers({ stickers, avoidBottomLeft = false }: FloatingStickersProps) {
  const items = useMemo(
    () =>
      stickers.map((s, i) => {
        const top = avoidBottomLeft ? 4 + Math.random() * 48 : 10 + Math.random() * 80;
        const left = avoidBottomLeft ? 45 + Math.random() * 55 : Math.random() * 100;
        return {
          emoji: s,
          id: i,
          top,
          left,
          size: 24 + Math.random() * 24,
          duration: 5 + Math.random() * 4,
          delay: Math.random() * 3,
        };
      }),
    [stickers, avoidBottomLeft]
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
