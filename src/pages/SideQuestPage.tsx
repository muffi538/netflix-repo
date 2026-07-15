import BackButton from "@/components/shared/BackButton";
import SectionHeader from "@/components/shared/SectionHeader";
import Timeline from "@/components/shared/Timeline";
import VideoGallery from "@/components/shared/VideoGallery";
import Polaroid from "@/components/shared/Polaroid";
import SideQuestHero from "@/components/sections/sidequest/SideQuestHero";
import TravelCard from "@/components/sections/sidequest/TravelCard";
import QuestPath from "@/components/sections/sidequest/QuestPath";
import {
  sidequestHero,
  sidequestTimeline,
  travelCards,
  polaroidGallery,
  sidequestVideos,
  questPath,
} from "@/data/sidequestData";

const ACCENT = "#2dd4bf";
const rotations = [-6, 4, -3, 6, -5, 3];

export default function SideQuestPage() {
  return (
    <div className="relative bg-black min-h-screen">
      <BackButton />

      <SideQuestHero image={sidequestHero.image} title={sidequestHero.title} subtitle={sidequestHero.subtitle} />

      <section className="relative px-6 md:px-16 pt-16 max-w-6xl mx-auto">
        <SectionHeader eyebrow="The Route" title="The Quest Log" />
        <QuestPath stops={questPath} />
      </section>

      <section className="relative px-6 md:px-16 py-16 max-w-6xl mx-auto">
        <Timeline items={sidequestTimeline} accent={ACCENT} />
      </section>

      <section className="relative px-6 md:px-16 py-24 max-w-6xl mx-auto">
        <SectionHeader eyebrow="Along The Way" title="Stops Worth Remembering" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {travelCards.map((card, i) => (
            <TravelCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </section>

      <section className="relative px-6 md:px-16 py-24 max-w-6xl mx-auto">
        <SectionHeader eyebrow="Polaroids" title="Pocket Memories" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
          {polaroidGallery.map((item, i) => (
            <Polaroid key={item.id} item={item} rotation={rotations[i % rotations.length]} index={i} accent={ACCENT} />
          ))}
        </div>
      </section>

      <section className="relative px-6 md:px-16 py-24 max-w-6xl mx-auto">
        <SectionHeader eyebrow="On Tape" title="Field Footage" />
        <VideoGallery items={sidequestVideos} accent={ACCENT} />
      </section>

      <footer className="py-16 text-center text-white/25 text-xs tracking-[0.3em] uppercase">
        SideQuest &middot; Chapter 02
      </footer>
    </div>
  );
}
