import { useState } from "react";
import { motion } from "framer-motion";
import PlaceholderImage from "./PlaceholderImage";
import PlaceholderVideo from "./PlaceholderVideo";
import MyListButton from "./MyListButton";
import VideoPlayerModal from "./VideoPlayerModal";

interface HeroTitleCardProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  featuring: string;
  badges: string[];
  image: string;
  video?: string;
  accent: string;
}

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default function HeroTitleCard({
  id,
  eyebrow,
  title,
  subtitle,
  featuring,
  badges,
  image,
  video,
  accent,
}: HeroTitleCardProps) {
  const [playerOpen, setPlayerOpen] = useState(false);

  return (
    <section className="relative h-[100vh] min-h-[620px] w-full overflow-hidden flex items-end">
      <div className="absolute inset-0">
        {video ? (
          <PlaceholderVideo src={video} poster={image} accent={accent} autoPlayMuted className="w-full h-full" />
        ) : (
          <PlaceholderImage src={image} alt={title} accent={accent} priority className="w-full h-full" />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

      <div className="relative z-10 px-5 md:px-10 pb-16 md:pb-20 pt-32 max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded border"
          style={{ borderColor: `${accent}66`, backgroundColor: `${accent}1a` }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
          <span className="text-[11px] tracking-[0.25em] uppercase font-semibold" style={{ color: accent }}>
            {eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="heading-display text-6xl sm:text-7xl md:text-8xl tracking-wide text-white leading-[0.95]"
          style={{ textShadow: `0 0 70px ${accent}55` }}
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.6 }}
          className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-5"
        >
          {badges.map((badge, i) => (
            <span
              key={i}
              className="text-xs font-semibold px-2.5 py-1 rounded border border-white/25 text-white/80"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52, duration: 0.6 }}
          className="text-white/75 text-base md:text-lg mt-5 leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.6 }}
          className="text-white/40 text-sm mt-3"
        >
          <span className="text-white/55">Featuring:</span> {featuring}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mt-8"
        >
          <motion.button
            onClick={() => setPlayerOpen(true)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-white text-black font-bold text-sm hover:bg-white/85 transition-colors"
          >
            <PlayIcon />
            Play
          </motion.button>
          <MyListButton id={id} />
        </motion.div>
      </div>

      <VideoPlayerModal
        open={playerOpen}
        onClose={() => setPlayerOpen(false)}
        video={video}
        image={image}
        title={title}
      />
    </section>
  );
}
