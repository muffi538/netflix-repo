import { forwardRef } from "react";
import { motion } from "framer-motion";
import type { Profile } from "@/data/profiles";
import PlaceholderImage from "@/components/shared/PlaceholderImage";

interface ProfileCardProps {
  profile: Profile;
  index: number;
  onSelect: (profile: Profile, el: HTMLButtonElement) => void;
}

const ProfileCard = forwardRef<HTMLButtonElement, ProfileCardProps>(({ profile, index, onSelect }, ref) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 * index, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-4 group"
    >
      <motion.button
        ref={ref}
        onClick={(e) => onSelect(profile, e.currentTarget)}
        style={{ animationDelay: `${index * 0.4}s` }}
        className="relative aspect-[2/3] w-[38vw] sm:w-[24vw] md:w-[18vw] max-w-[220px] min-w-[120px] rounded-2xl overflow-hidden group animate-float-slow outline-none"
        whileHover={{ scale: 1.08, y: -10 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <div
          className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
          style={{ boxShadow: `0 0 50px 6px ${profile.accentSoft}` }}
        />

        <PlaceholderImage
          src={profile.image}
          alt={profile.name}
          accent={profile.accent}
          className="absolute inset-0 w-full h-full rounded-2xl border border-white/10 group-hover:border-white/30 transition-colors"
        />

        <div
          className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl pointer-events-none"
          style={{ filter: `drop-shadow(0 0 24px ${profile.accentSoft})` }}
        >
          {profile.emoji}
        </div>

        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
      </motion.button>

      <div className="text-center">
        <p className="font-medium text-white/85 group-hover:text-white text-sm md:text-base tracking-wide">
          {profile.name}
        </p>
        <p className="text-[11px] md:text-xs text-white/35 mt-0.5">{profile.tagline}</p>
      </div>
    </motion.div>
  );
});

ProfileCard.displayName = "ProfileCard";
export default ProfileCard;
