import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import type { Profile } from "@/data/profiles";
import PlaceholderImage from "@/components/shared/PlaceholderImage";

interface ProfileCardProps {
  profile: Profile;
  index: number;
  onSelect: (profile: Profile, el: HTMLButtonElement) => void;
}

const ProfileCard = forwardRef<HTMLButtonElement, ProfileCardProps>(({ profile, index, onSelect }, ref) => {
  const [photoLoaded, setPhotoLoaded] = useState(false);

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
        className="relative aspect-square w-[30vw] sm:w-[18vw] md:w-[13vw] max-w-[170px] min-w-[96px] rounded-[26%] overflow-hidden group animate-float-slow outline-none"
        whileHover={{ scale: 1.1, y: -10 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <div
          className="absolute -inset-2 rounded-[30%] transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 blur-xl"
          style={{ backgroundColor: profile.accentSoft }}
        />

        <PlaceholderImage
          src={profile.image}
          alt={profile.name}
          accent={profile.accent}
          hideIcon
          placeholderBackground={`linear-gradient(155deg, ${profile.accent} 0%, ${profile.accent}cc 55%, #000 140%)`}
          className="absolute inset-0 w-full h-full rounded-[26%] ring-1 ring-white/15 group-hover:ring-white/40 transition-all"
          onLoad={() => setPhotoLoaded(true)}
        />

        {!photoLoaded && (
          <div
            className="absolute inset-0 flex items-center justify-center text-5xl md:text-6xl pointer-events-none"
            style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.35))" }}
          >
            {profile.emoji}
          </div>
        )}
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
