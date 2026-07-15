import { motion } from "framer-motion";

export default function LoadingScreen({ label = "Loading" }: { label?: string }) {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center gap-6">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
        className="w-10 h-10 rounded-full border-2 border-white/15 border-t-ember"
      />
      <motion.p
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="text-xs tracking-[0.3em] uppercase text-white/50"
      >
        {label}
      </motion.p>
    </div>
  );
}
