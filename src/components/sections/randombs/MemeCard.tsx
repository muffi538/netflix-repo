import { motion } from "framer-motion";
import type { MemeCard as MemeCardType } from "@/data/types";
import PlaceholderImage from "@/components/shared/PlaceholderImage";

export default function MemeCard({ card, index = 0 }: { card: MemeCardType; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
      whileInView={{ opacity: 1, scale: 1, rotate: card.rotation ?? 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: "spring", stiffness: 120, damping: 14, delay: index * 0.1 }}
      whileHover={{ rotate: 0, scale: 1.06, zIndex: 10 }}
      className="bg-charcoal rounded-2xl overflow-hidden shadow-2xl border border-white/10 cursor-pointer"
    >
      <PlaceholderImage src={card.image} alt={card.caption} accent="#a855f7" className="aspect-square w-full" />
      <div className="p-4">
        <p className="font-semibold text-white/90">{card.caption}</p>
      </div>
    </motion.div>
  );
}
