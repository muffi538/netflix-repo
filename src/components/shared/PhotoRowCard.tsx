import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryItem } from "@/data/types";
import PlaceholderImage from "./PlaceholderImage";

export default function PhotoRowCard({ item, accent = "#e50914" }: { item: GalleryItem; accent?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.08, zIndex: 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="relative shrink-0 snap-start w-40 sm:w-48 md:w-56 aspect-[3/4] rounded-lg overflow-hidden group"
      >
        <PlaceholderImage src={item.src} alt={item.caption ?? "memory"} accent={accent} className="w-full h-full" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
        {item.caption && (
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/85 to-transparent">
            <p className="text-xs text-white/90 text-left font-medium">{item.caption}</p>
          </div>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[90] bg-black/90 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl w-full"
            >
              <PlaceholderImage
                src={item.src}
                alt={item.caption ?? "memory"}
                accent={accent}
                priority
                className="rounded-xl aspect-video w-full shadow-2xl"
              />
              {item.caption && <p className="text-center text-white/70 mt-4">{item.caption}</p>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
