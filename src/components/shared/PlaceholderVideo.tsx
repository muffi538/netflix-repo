import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import PlaceholderImage from "./PlaceholderImage";

interface PlaceholderVideoProps {
  src: string;
  poster?: string;
  caption?: string;
  className?: string;
  accent?: string;
  autoPlayMuted?: boolean;
}

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-0.5">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default function PlaceholderVideo({
  src,
  poster,
  caption,
  className,
  accent = "#e50914",
  autoPlayMuted = false,
}: PlaceholderVideoProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(autoPlayMuted);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);

  const togglePlay = () => {
    if (autoPlayMuted) return;
    const el = videoRef.current;
    if (!el || failed) return;
    if (el.paused) {
      el.play().catch(() => setFailed(true));
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden bg-charcoal group", !autoPlayMuted && "cursor-pointer", className)}
      onClick={togglePlay}
    >
      {poster && !ready ? (
        <PlaceholderImage src={poster} alt={caption ?? "video"} className="absolute inset-0 w-full h-full" accent={accent} />
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, #141414 0%, #0a0a0a 60%, ${accent}14 100%)` }}
        />
      )}

      {inView && !failed && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted={autoPlayMuted}
          loop={autoPlayMuted}
          autoPlay={autoPlayMuted}
          playsInline
          preload="none"
          onCanPlay={() => setReady(true)}
          onError={() => setFailed(true)}
          onEnded={() => setPlaying(false)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      <AnimatePresence>
        {!playing && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/30"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 rounded-full glass flex items-center justify-center shadow-glow-white text-white"
              style={{ boxShadow: `0 0 30px ${accent}55` }}
            >
              <PlayIcon />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {caption && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-sm text-white/85 font-medium">{caption}</p>
        </div>
      )}
    </div>
  );
}
