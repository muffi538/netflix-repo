import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import FloatingParticles from "@/components/shared/FloatingParticles";

export default function ClosingMessage() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.6 });
  const [phase, setPhase] = useState<"idle" | "message" | "thanks">("idle");

  useEffect(() => {
    if (!inView || phase !== "idle") return;
    setPhase("message");
    const t = window.setTimeout(() => setPhase("thanks"), 4200);
    return () => window.clearTimeout(t);
  }, [inView, phase]);

  return (
    <section ref={ref} className="relative h-[80vh] min-h-[520px] w-full flex items-center justify-center overflow-hidden bg-black">
      <FloatingParticles count={26} color="229,9,20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(229,9,20,0.12),transparent_70%)]" />

      <div className="relative z-10 text-center px-6 min-h-[160px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {phase === "message" && (
            <motion.div
              key="message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="space-y-3"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-serif italic text-xl md:text-3xl text-white/85"
              >
                No matter where life takes us&hellip;
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="font-serif italic text-xl md:text-3xl text-white/85"
              >
                these memories stay forever.
              </motion.p>
            </motion.div>
          )}

          {phase === "thanks" && (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                className="heading-display text-6xl md:text-8xl tracking-wide text-white"
                style={{ textShadow: "0 0 60px rgba(229,9,20,0.5)" }}
              >
                Thank You <span className="text-ember">❤️</span>
              </h2>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
