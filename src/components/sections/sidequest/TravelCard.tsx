import { motion } from "framer-motion";
import type { TravelCard as TravelCardType } from "@/data/types";
import PlaceholderImage from "@/components/shared/PlaceholderImage";

export default function TravelCard({ card, index = 0 }: { card: TravelCardType; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="group rounded-2xl overflow-hidden glass-panel"
    >
      <PlaceholderImage src={card.image} alt={card.place} accent="#2dd4bf" className="aspect-[4/3] w-full" />
      <div className="p-5">
        <span className="text-xs tracking-[0.25em] uppercase text-teal-400/80 font-semibold">{card.date}</span>
        <h3 className="heading-display text-2xl mt-1 tracking-wide">{card.place}</h3>
        <p className="text-white/55 text-sm mt-2 leading-relaxed">{card.description}</p>
      </div>
    </motion.div>
  );
}
