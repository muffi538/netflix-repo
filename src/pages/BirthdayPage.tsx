import TopNav from "@/components/shared/TopNav";
import HeroTitleCard from "@/components/shared/HeroTitleCard";
import { birthdayHero } from "@/data/birthdayData";

const ACCENT = "#f5a623";

export default function BirthdayPage() {
  return (
    <div className="relative bg-black min-h-screen">
      <TopNav accent={ACCENT} profileEmoji="🎂" />

      <HeroTitleCard
        id="birthday"
        eyebrow={birthdayHero.eyebrow}
        title={birthdayHero.title}
        subtitle={birthdayHero.subtitle}
        featuring={birthdayHero.featuring}
        badges={birthdayHero.badges}
        image={birthdayHero.image}
        video={birthdayHero.video}
        accent={ACCENT}
      />

      <footer className="py-16 text-center text-white/25 text-xs tracking-[0.3em] uppercase">
        Birthday Shi &middot; Chapter 01
      </footer>
    </div>
  );
}
