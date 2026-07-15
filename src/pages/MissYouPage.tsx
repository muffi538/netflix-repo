import TopNav from "@/components/shared/TopNav";
import SectionHeader from "@/components/shared/SectionHeader";
import EpisodeList from "@/components/shared/EpisodeList";
import StatBar from "@/components/shared/StatBar";
import ScrollRow from "@/components/shared/ScrollRow";
import PhotoRowCard from "@/components/shared/PhotoRowCard";
import QuoteCard from "@/components/shared/QuoteCard";
import FloatingParticles from "@/components/shared/FloatingParticles";
import HeroTitleCard from "@/components/shared/HeroTitleCard";
import LetterSection from "@/components/sections/missyou/LetterSection";
import ClosingMessage from "@/components/sections/missyou/ClosingMessage";
import {
  missyouHero,
  missyouTimeline,
  missyouLetter,
  missyouQuotes,
  missyouGallery,
  missyouStats,
} from "@/data/missyouData";

const ACCENT = "#e50914";
const TABS = [
  { id: "episodes", label: "The Journey" },
  { id: "letter", label: "The Letter" },
  { id: "gallery", label: "Gallery" },
];

export default function MissYouPage() {
  return (
    <div className="relative bg-black min-h-screen">
      <TopNav accent={ACCENT} profileEmoji="❤️" tabs={TABS} />

      <HeroTitleCard
        id="missyou"
        eyebrow={missyouHero.eyebrow}
        title={missyouHero.title}
        subtitle={missyouHero.subtitle}
        featuring={missyouHero.featuring}
        badges={missyouHero.badges}
        image={missyouHero.image}
        video={missyouHero.video}
        accent={ACCENT}
      />

      <section id="episodes" className="relative px-5 md:px-10 py-20 md:py-24 max-w-6xl mx-auto scroll-mt-20">
        <SectionHeader eyebrow="The Journey" title="Every Chapter" />
        <EpisodeList items={missyouTimeline} accent={ACCENT} />
      </section>

      <section className="relative px-5 md:px-10 py-16 max-w-6xl mx-auto">
        <SectionHeader eyebrow="By The Numbers" title="What We Built" />
        <StatBar stats={missyouStats} accent={ACCENT} />
      </section>

      <section id="letter" className="relative px-5 md:px-10 py-20 md:py-24 scroll-mt-20">
        <SectionHeader eyebrow="One Last Thing" title="A Letter" align="center" />
        <LetterSection letter={missyouLetter} />
      </section>

      <section className="relative px-5 md:px-10 py-20 md:py-24 max-w-5xl mx-auto">
        <SectionHeader eyebrow="In Their Words" title="What Stays With Us" align="center" />
        <div className="grid md:grid-cols-3 gap-6">
          {missyouQuotes.map((q, i) => (
            <QuoteCard key={q.id} quote={q} accent={ACCENT} index={i} />
          ))}
        </div>
      </section>

      <section id="gallery" className="relative py-20 md:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <SectionHeader eyebrow="Forever" title="The Final Gallery" />
        </div>
        <div className="pl-5 md:pl-10 pr-5 md:pr-10">
          <ScrollRow accent={ACCENT}>
            {missyouGallery.map((item) => (
              <PhotoRowCard key={item.id} item={item} accent={ACCENT} />
            ))}
          </ScrollRow>
        </div>
      </section>

      <div className="relative">
        <FloatingParticles count={18} color="255,255,255" className="absolute inset-x-0 top-0 h-40 z-10" />
        <ClosingMessage />
      </div>

      <footer className="py-16 text-center text-white/25 text-xs tracking-[0.3em] uppercase bg-black">
        I Am Gon Miss U A Lot &middot; Final Chapter
      </footer>
    </div>
  );
}
