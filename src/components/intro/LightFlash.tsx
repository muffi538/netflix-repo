import { motion } from "framer-motion";

interface LightFlashProps {
  delay?: number;
}

export default function LightFlash({ delay = 0 }: LightFlashProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.5, delay, times: [0, 0.3, 1], ease: "easeOut" }}
        className="absolute inset-0 bg-white"
      />
      <motion.div
        initial={{ x: "-120%", skewX: -12, opacity: 0 }}
        animate={{ x: "120%", skewX: -12, opacity: [0, 1, 1, 0] }}
        transition={{ duration: 0.9, delay: delay + 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none"
      />
    </>
  );
}
