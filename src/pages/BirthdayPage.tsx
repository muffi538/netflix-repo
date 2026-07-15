import TopNav from "@/components/shared/TopNav";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollRow from "@/components/shared/ScrollRow";
import VideoRowCard from "@/components/shared/VideoRowCard";
import HeroTitleCard from "@/components/shared/HeroTitleCard";
import { birthdayHero, birthdayVideos } from "@/data/birthdayData";

const ACCENT = "#f5a623";
const TABS = [{ id: "videos", label: "Videos" }];

export default function BirthdayPage() {
  return (
    <div className="relative bg-black min-h-screen">
      <TopNav accent={ACCENT} profileEmoji="🎂" tabs={TABS} />

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

      <section id="videos" className="relative py-20 md:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <SectionHeader eyebrow="On Tape" title="The Highlight Reel" />
        </div>
        <div className="pl-5 md:pl-10 pr-5 md:pr-10">
          <ScrollRow accent={ACCENT}>
            {birthdayVideos.map((item) => (
              <VideoRowCard key={item.id} item={item} accent={ACCENT} />
            ))}
          </ScrollRow>
        </div>
      </section>

      <footer className="py-16 text-center text-white/25 text-xs tracking-[0.3em] uppercase">
        Birthday Shi &middot; Chapter 01
      </footer>
    </div>
  );
}
