import { motion } from "framer-motion";
import type { GalleryItem } from "@/data/types";
import PlaceholderImage from "@/components/shared/PlaceholderImage";

export default function MasonryGallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="columns-2 md:columns-4 gap-4 space-y-4">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
          whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? -1 : 1, zIndex: 10 }}
          className="break-inside-avoid rounded-xl overflow-hidden relative group"
        >
          <PlaceholderImage
            src={item.src}
            alt={item.caption ?? "chaos"}
            accent="#a855f7"
            className={`w-full ${item.span === "lg" ? "aspect-[3/4]" : item.span === "md" ? "aspect-square" : "aspect-[4/5]"}`}
          />
          {item.caption && (
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-xs text-white/90 font-medium">{item.caption}</p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
