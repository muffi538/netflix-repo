import { motion } from "framer-motion";
import RibbonMark from "./RibbonMark";

const REST_LETTERS = "OREVER".split("");
const F_DELAY = 0.3;
const REST_START = 1.05;

export default function LogoReveal() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative flex items-end">
        <RibbonMark delay={F_DELAY} className="h-14 sm:h-16 md:h-20 mr-1" />
        {REST_LETTERS.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.7,
              delay: REST_START + i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="heading-display text-6xl sm:text-7xl md:text-8xl tracking-[0.08em] text-white"
            style={{ textShadow: "0 0 40px rgba(229,9,20,0.55)" }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.15, ease: [0.16, 1, 0.3, 1] }}
        className="h-[2px] w-full mt-3 bg-gradient-to-r from-transparent via-ember to-transparent"
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.4 }}
        className="mt-4 text-xs sm:text-sm tracking-[0.5em] uppercase text-white/50"
      >
        A Memory Collection
      </motion.p>
    </div>
  );
}
