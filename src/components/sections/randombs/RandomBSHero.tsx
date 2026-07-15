import { motion } from "framer-motion";
import FloatingStickers from "./FloatingStickers";
import { stickers } from "@/data/randombsData";

export default function RandomBSHero({ title, subtitle }: { title: string; subtitle: string }) {
  const words = title.split(" ");

  return (
    <section className="relative h-[80vh] min-h-[480px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-black" />
      <motion.div
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[50vw] h-[50vw] rounded-full bg-purple-600/30 blur-[120px] -top-1/4 -left-1/4"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-[45vw] h-[45vw] rounded-full bg-pink-500/25 blur-[120px] -bottom-1/4 -right-1/4"
      />

      <FloatingStickers stickers={stickers} />

      <div className="relative z-10 text-center px-6">
        <span className="inline-block text-xs tracking-[0.35em] uppercase text-purple-400 font-semibold mb-4">
          Episode Three
        </span>
        <h1 className="heading-display text-6xl sm:text-7xl md:text-8xl tracking-wide text-white flex flex-wrap justify-center gap-x-5">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -8 : 8 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, type: "spring", stiffness: 140, damping: 12 }}
              style={{ textShadow: "0 0 50px rgba(168,85,247,0.4)" }}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-white/60 text-base md:text-lg mt-6 max-w-xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
