import { useState } from "react";
import { motion } from "framer-motion";
import type { MemeCard as MemeCardType } from "@/data/types";
import PlaceholderImage from "@/components/shared/PlaceholderImage";

export default function RotatingCardStack({ cards }: { cards: MemeCardType[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const shuffle = () => {
    setDirection((d) => -d);
    setIndex((i) => (i + 1) % cards.length);
  };

  const card = cards[index];

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-64 h-80 md:w-72 md:h-96">
        {cards.map((c, i) => {
          const offset = (i - index + cards.length) % cards.length;
          if (offset > 2) return null;
          return (
            <motion.div
              key={c.id}
              className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-charcoal"
              style={{ zIndex: cards.length - offset }}
              animate={{
                scale: 1 - offset * 0.06,
                y: offset * 14,
                rotate: offset === 0 ? 0 : direction * (offset * 3),
                opacity: offset === 0 ? 1 : 0.55 - offset * 0.15,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
            >
              <PlaceholderImage src={c.image} alt={c.caption} accent="#a855f7" className="w-full h-full" />
              {offset === 0 && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/85 to-transparent">
                  <p className="text-white font-semibold">{c.caption}</p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.button
        onClick={shuffle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95, rotate: 8 }}
        className="px-6 py-3 rounded-full glass text-sm font-medium text-white/85 hover:text-white flex items-center gap-2"
      >
        <span>Shuffle</span>
        <span className="text-lg">🔀</span>
      </motion.button>
    </div>
  );
}
