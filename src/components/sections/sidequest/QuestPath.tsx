import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface QuestPathProps {
  stops: { id: string; label: string }[];
}

export default function QuestPath({ stops }: QuestPathProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 30%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 20, restDelta: 0.001 });

  return (
    <div ref={ref} className="relative py-10">
      <div className="relative h-1 mx-6 md:mx-16 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          style={{ scaleX: progress, transformOrigin: "left" }}
          className="absolute inset-0 bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-500"
        />
      </div>

      <div className="flex justify-between mt-4 mx-2 md:mx-10">
        {stops.map((stop, i) => (
          <motion.div
            key={stop.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex flex-col items-center gap-2 max-w-[80px] md:max-w-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)]" />
            <span className="text-[10px] md:text-xs uppercase tracking-wider text-white/50 text-center">
              {stop.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
