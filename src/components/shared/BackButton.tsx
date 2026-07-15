import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function BackButton({ label = "Profiles" }: { label?: string }) {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      onClick={() => navigate("/")}
      className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
        <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </motion.button>
  );
}
