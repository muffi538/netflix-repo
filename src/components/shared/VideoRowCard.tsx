import { motion } from "framer-motion";
import type { VideoItem } from "@/data/types";
import PlaceholderVideo from "./PlaceholderVideo";

export default function VideoRowCard({ item, accent = "#e50914" }: { item: VideoItem; accent?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="shrink-0 snap-start w-64 sm:w-72 md:w-80"
    >
      <PlaceholderVideo
        src={item.src}
        poster={item.poster}
        caption={item.caption}
        accent={accent}
        className="rounded-lg aspect-video shadow-2xl"
      />
    </motion.div>
  );
}
