import { motion } from "framer-motion";
import type { GalleryItem } from "@/data/types";
import PlaceholderImage from "./PlaceholderImage";

interface PolaroidProps {
  item: GalleryItem;
  rotation?: number;
  index?: number;
  accent?: string;
}

export default function Polaroid({ item, rotation = 0, index = 0, accent = "#2dd4bf" }: PolaroidProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
      className="bg-[#f5f5f0] p-3 pb-12 rounded-sm shadow-2xl w-full max-w-[220px] mx-auto cursor-pointer relative"
    >
      <PlaceholderImage src={item.src} alt={item.caption ?? "memory"} accent={accent} className="aspect-square w-full" />
      {item.caption && (
        <p className="absolute bottom-3 left-0 right-0 text-center font-serif italic text-black/70 text-sm px-2">
          {item.caption}
        </p>
      )}
    </motion.div>
  );
}
