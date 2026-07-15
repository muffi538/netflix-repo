import { motion } from "framer-motion";

export default function LetterSection({ letter }: { letter: string }) {
  const paragraphs = letter.trim().split("\n\n");

  return (
    <div className="relative max-w-2xl mx-auto">
      <FloatingGlow />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel rounded-2xl p-8 md:p-12 relative"
      >
        <span className="block text-4xl mb-4 opacity-40">✉️</span>
        <div className="space-y-5">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="font-serif text-white/75 leading-relaxed text-base md:text-lg whitespace-pre-line"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function FloatingGlow() {
  return (
    <div
      className="absolute -inset-10 -z-10 rounded-full blur-[100px] opacity-40"
      style={{ background: "radial-gradient(circle, rgba(229,9,20,0.25), transparent 70%)" }}
    />
  );
}
