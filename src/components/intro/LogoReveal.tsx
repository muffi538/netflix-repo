import { motion } from "framer-motion";

const WORDS = ["Thank", "You", "Mira"];
const WORDS_START = 0.5;

export default function LogoReveal() {
  return (
    <div className="relative flex flex-col items-center px-6">
      <div className="relative flex flex-nowrap items-end justify-center gap-x-2 sm:gap-x-5 md:gap-x-6">
        {WORDS.map((word, i) => (
          <motion.span
            key={word}
            initial={{ opacity: 0, y: 40, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.7,
              delay: WORDS_START + i * 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="heading-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.02em] sm:tracking-[0.04em] text-white font-bold whitespace-nowrap"
            style={{ textShadow: "0 0 40px rgba(229,9,20,0.55)" }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.65, ease: [0.16, 1, 0.3, 1] }}
        className="h-[2px] w-full max-w-xs mt-3 bg-gradient-to-r from-transparent via-ember to-transparent"
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.9 }}
        className="mt-4 text-xs sm:text-sm tracking-[0.5em] uppercase text-white/50"
      >
        Here&rsquo;s a lil something
      </motion.p>
    </div>
  );
}
