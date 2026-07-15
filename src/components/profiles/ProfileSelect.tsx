import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { profiles, type Profile } from "@/data/profiles";
import ProfileCard from "./ProfileCard";

interface ZoomState {
  profile: Profile;
  rect: DOMRect;
  diagonal: number;
}

export default function ProfileSelect() {
  const [zoom, setZoom] = useState<ZoomState | null>(null);
  const navigate = useNavigate();

  const handleSelect = (profile: Profile, el: HTMLButtonElement) => {
    if (zoom) return;
    const rect = el.getBoundingClientRect();
    const diagonal = Math.hypot(window.innerWidth, window.innerHeight);
    setZoom({ profile, rect, diagonal });
    window.setTimeout(() => navigate(profile.path), 780);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: zoom ? 0 : 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-14"
      >
        <h1 className="heading-display text-3xl md:text-5xl tracking-wide text-white/95">Who&rsquo;s Watching?</h1>
        <p className="text-white/40 text-sm md:text-base mt-3">Pick a memory to relive.</p>
      </motion.div>

      <motion.div
        animate={{ opacity: zoom ? 0 : 1, scale: zoom ? 0.96 : 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap justify-center gap-x-6 gap-y-10 md:gap-x-10 max-w-5xl"
      >
        {profiles.map((profile, i) => (
          <ProfileCard key={profile.id} profile={profile} index={i} onSelect={handleSelect} />
        ))}
      </motion.div>

      <AnimatePresence>
        {zoom && (
          <motion.div
            key="zoom-circle"
            className="fixed rounded-full z-[150] pointer-events-none"
            style={{
              left: zoom.rect.left + zoom.rect.width / 2,
              top: zoom.rect.top + zoom.rect.height / 2,
              backgroundColor: zoom.profile.accent,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ width: zoom.rect.width, height: zoom.rect.width, opacity: 0.95 }}
            animate={{ width: zoom.diagonal * 2.4, height: zoom.diagonal * 2.4, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {zoom && (
          <motion.div
            key="zoom-content"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[151] flex flex-col items-center justify-center gap-4 pointer-events-none"
          >
            <span className="text-7xl drop-shadow-2xl">{zoom.profile.emoji}</span>
            <span className="heading-display text-2xl md:text-3xl text-white tracking-wide">{zoom.profile.name}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
