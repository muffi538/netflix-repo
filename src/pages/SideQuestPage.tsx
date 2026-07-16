import TopNav from "@/components/shared/TopNav";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollRow from "@/components/shared/ScrollRow";
import VideoRowCard from "@/components/shared/VideoRowCard";
import HeroTitleCard from "@/components/shared/HeroTitleCard";
import { sidequestHero, sidequestVideos } from "@/data/sidequestData";

const ACCENT = "#2dd4bf";
const TABS = [{ id: "videos", label: "Videos" }];

export default function SideQuestPage() {
  return (
    <div className="relative bg-black min-h-screen">
      <TopNav accent={ACCENT} profileEmoji="🌍" tabs={TABS} />

      <HeroTitleCard
        id="sidequest"
        eyebrow={sidequestHero.eyebrow}
        title={sidequestHero.title}
        subtitle={sidequestHero.subtitle}
        featuring={sidequestHero.featuring}
        badges={sidequestHero.badges}
        image={sidequestHero.image}
        accent={ACCENT}
      />

      <section id="videos" className="relative py-20 md:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <SectionHeader eyebrow="On Tape" title="Field Footage" />
        </div>
        <div className="pl-5 md:pl-10 pr-5 md:pr-10">
          <ScrollRow accent={ACCENT}>
            {sidequestVideos.map((item) => (
              <VideoRowCard key={item.id} item={item} accent={ACCENT} />
            ))}
          </ScrollRow>
        </div>
      </section>

      <footer className="py-16 text-center text-white/25 text-xs tracking-[0.3em] uppercase">
        SideQuest &middot; Chapter 02
      </footer>
    </div>
  );
}
