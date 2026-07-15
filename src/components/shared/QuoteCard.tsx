import { motion } from "framer-motion";
import type { QuoteItem } from "@/data/types";

interface QuoteCardProps {
  quote: QuoteItem;
  accent?: string;
  index?: number;
}

export default function QuoteCard({ quote, accent = "#e50914", index = 0 }: QuoteCardProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel rounded-2xl p-8 relative overflow-hidden"
    >
      <div
        className="absolute -top-6 -left-2 text-8xl font-serif opacity-10 select-none"
        style={{ color: accent }}
      >
        &ldquo;
      </div>
      <p className="relative font-serif italic text-xl md:text-2xl leading-relaxed text-white/90">{quote.quote}</p>
      {quote.author && <footer className="relative mt-4 text-sm text-white/40">&mdash; {quote.author}</footer>}
    </motion.blockquote>
  );
}
