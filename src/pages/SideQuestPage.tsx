import TopNav from "@/components/shared/TopNav";
import SectionHeader from "@/components/shared/SectionHeader";
import EpisodeList from "@/components/shared/EpisodeList";
import StatBar from "@/components/shared/StatBar";
import ScrollRow from "@/components/shared/ScrollRow";
import VideoRowCard from "@/components/shared/VideoRowCard";
import HeroTitleCard from "@/components/shared/HeroTitleCard";
import Polaroid from "@/components/shared/Polaroid";
import TravelCard from "@/components/sections/sidequest/TravelCard";
import QuestPath from "@/components/sections/sidequest/QuestPath";
import {
  sidequestHero,
  sidequestTimeline,
  travelCards,
  polaroidGallery,
  sidequestVideos,
  questPath,
  sidequestStats,
} from "@/data/sidequestData";

const ACCENT = "#2dd4bf";
const rotations = [-6, 4, -3, 6, -5, 3];
const TABS = [
  { id: "episodes", label: "The Route" },
  { id: "stops", label: "Stops" },
  { id: "gallery", label: "Polaroids" },
  { id: "videos", label: "Videos" },
];

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

      <section id="episodes" className="relative px-5 md:px-10 pt-20 max-w-6xl mx-auto scroll-mt-20">
        <SectionHeader eyebrow="The Route" title="The Quest Log" />
        <QuestPath stops={questPath} />
      </section>

      <section className="relative px-5 md:px-10 py-16 max-w-6xl mx-auto">
        <EpisodeList items={sidequestTimeline} accent={ACCENT} />
      </section>

      <section className="relative px-5 md:px-10 py-16 max-w-6xl mx-auto">
        <SectionHeader eyebrow="By The Numbers" title="Trip Stats" />
        <StatBar stats={sidequestStats} accent={ACCENT} />
      </section>

      <section id="stops" className="relative px-5 md:px-10 py-20 md:py-24 max-w-6xl mx-auto scroll-mt-20">
        <SectionHeader eyebrow="Along The Way" title="Stops Worth Remembering" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {travelCards.map((card, i) => (
            <TravelCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </section>

      <section id="gallery" className="relative py-20 md:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <SectionHeader eyebrow="Polaroids" title="Pocket Memories" />
        </div>
        <div className="pl-5 md:pl-10 pr-5 md:pr-10">
          <ScrollRow accent={ACCENT}>
            {polaroidGallery.map((item, i) => (
              <div key={item.id} className="shrink-0 snap-start w-48 md:w-56">
                <Polaroid item={item} rotation={rotations[i % rotations.length]} index={i} accent={ACCENT} />
              </div>
            ))}
          </ScrollRow>
        </div>
      </section>

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
