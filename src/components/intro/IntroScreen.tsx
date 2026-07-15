import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LightFlash from "./LightFlash";
import LogoReveal from "./LogoReveal";

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [exiting, setExiting] = useState(false);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const autoExit = setTimeout(() => setExiting(true), 4100);
    const skipTimer = setTimeout(() => setShowSkip(true), 900);
    return () => {
      clearTimeout(autoExit);
      clearTimeout(skipTimer);
    };
  }, []);

  useEffect(() => {
    if (!exiting) return;
    const t = setTimeout(onComplete, 700);
    return () => clearTimeout(t);
  }, [exiting, onComplete]);

  return (
    <motion.div
      animate={{ opacity: exiting ? 0 : 1, scale: exiting ? 1.06 : 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[200] bg-black overflow-hidden flex items-center justify-center noise-overlay"
    >
      {/* Radial ember glow pulse behind logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.5, scale: 1.4 }}
        transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        className="absolute w-[60vw] h-[60vw] rounded-full bg-ember/25 blur-[120px]"
      />

      {/* Converging center line -> expands into vertical bar */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="absolute h-px w-full bg-gradient-to-r from-transparent via-white/80 to-transparent"
      />
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 0.7, delay: 0.25, times: [0, 0.5, 1], ease: "easeInOut" }}
        className="absolute w-[3px] h-full bg-gradient-to-b from-transparent via-ember to-transparent"
      />

      <LightFlash delay={0.95} />

      <LogoReveal />

      {showSkip && !exiting && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setExiting(true)}
          className="absolute bottom-8 right-8 text-xs tracking-[0.2em] uppercase text-white/40 hover:text-white/80 transition-colors px-4 py-2 rounded-full border border-white/10 hover:border-white/30"
        >
          Skip Intro
        </motion.button>
      )}
    </motion.div>
  );
}
