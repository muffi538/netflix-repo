import { motion } from "framer-motion";
import type { VideoItem } from "@/data/types";
import PlaceholderVideo from "./PlaceholderVideo";

interface VideoGalleryProps {
  items: VideoItem[];
  accent?: string;
}

export default function VideoGallery({ items, accent = "#e50914" }: VideoGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <PlaceholderVideo
            src={item.src}
            poster={item.poster}
            caption={item.caption}
            accent={accent}
            className="rounded-xl aspect-video shadow-2xl"
          />
        </motion.div>
      ))}
    </div>
  );
}
