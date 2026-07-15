import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryItem } from "@/data/types";
import PlaceholderImage from "./PlaceholderImage";

interface PhotoGalleryProps {
  items: GalleryItem[];
  accent?: string;
}

const spanClass: Record<string, string> = {
  sm: "md:col-span-1 md:row-span-1",
  md: "md:col-span-1 md:row-span-2",
  lg: "md:col-span-2 md:row-span-2",
};

export default function PhotoGallery({ items, accent = "#e50914" }: PhotoGalleryProps) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[160px] gap-3 md:gap-4">
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setActive(item)}
            className={`relative rounded-lg overflow-hidden group ${spanClass[item.span ?? "sm"]}`}
          >
            <PlaceholderImage src={item.src} alt={item.caption ?? "memory"} accent={accent} className="w-full h-full" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
            {item.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs md:text-sm text-white/90 text-left font-medium">{item.caption}</p>
              </div>
            )}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
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
                src={active.src}
                alt={active.caption ?? "memory"}
                accent={accent}
                priority
                className="rounded-xl aspect-video w-full shadow-2xl"
              />
              {active.caption && <p className="text-center text-white/70 mt-4">{active.caption}</p>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
