import { motion, AnimatePresence } from "framer-motion";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function MyListButton({ id }: { id: string }) {
  const [list, setList] = useLocalStorage<string[]>("memoryreel:mylist", []);
  const added = list.includes(id);

  const toggle = () => {
    setList((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/35 bg-black/30 backdrop-blur-sm text-white font-semibold text-sm hover:border-white/70 hover:bg-white/10 transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        {added ? (
          <motion.svg
            key="check"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            viewBox="0 0 24 24"
            fill="none"
            className="w-4 h-4"
          >
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        ) : (
          <motion.svg
            key="plus"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            viewBox="0 0 24 24"
            fill="none"
            className="w-4 h-4"
          >
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        )}
      </AnimatePresence>
      {added ? "Added to List" : "My List"}
    </motion.button>
  );
}
