import TopNav from "@/components/shared/TopNav";
import SectionHeader from "@/components/shared/SectionHeader";
import EpisodeList from "@/components/shared/EpisodeList";
import StatBar from "@/components/shared/StatBar";
import ScrollRow from "@/components/shared/ScrollRow";
import PhotoRowCard from "@/components/shared/PhotoRowCard";
import VideoRowCard from "@/components/shared/VideoRowCard";
import QuoteCard from "@/components/shared/QuoteCard";
import HeroTitleCard from "@/components/shared/HeroTitleCard";
import {
  birthdayHero,
  birthdayTimeline,
  birthdayGallery,
  birthdayVideos,
  birthdayQuotes,
  birthdayStats,
} from "@/data/birthdayData";

const ACCENT = "#f5a623";
const TABS = [
  { id: "episodes", label: "Chapters" },
  { id: "gallery", label: "Gallery" },
  { id: "videos", label: "Videos" },
  { id: "quotes", label: "Quotable" },
];

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

      <section id="episodes" className="relative px-5 md:px-10 py-20 md:py-24 max-w-6xl mx-auto scroll-mt-20">
        <SectionHeader eyebrow="The Story" title="Chapters" />
        <EpisodeList items={birthdayTimeline} accent={ACCENT} />
      </section>

      <section className="relative px-5 md:px-10 py-16 max-w-6xl mx-auto">
        <SectionHeader eyebrow="By The Numbers" title="Birthday Stats" />
        <StatBar stats={birthdayStats} accent={ACCENT} />
      </section>

      <section id="gallery" className="relative py-20 md:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <SectionHeader eyebrow="Gallery" title="Every Angle" />
        </div>
        <div className="pl-5 md:pl-10 pr-5 md:pr-10">
          <ScrollRow accent={ACCENT}>
            {birthdayGallery.map((item) => (
              <PhotoRowCard key={item.id} item={item} accent={ACCENT} />
            ))}
          </ScrollRow>
        </div>
      </section>

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

      <section id="quotes" className="relative px-5 md:px-10 py-20 md:py-24 max-w-5xl mx-auto scroll-mt-20">
        <SectionHeader eyebrow="Said On The Day" title="Quotable" align="center" />
        <div className="grid md:grid-cols-3 gap-6">
          {birthdayQuotes.map((q, i) => (
            <QuoteCard key={q.id} quote={q} accent={ACCENT} index={i} />
          ))}
        </div>
      </section>

      <footer className="py-16 text-center text-white/25 text-xs tracking-[0.3em] uppercase">
        Birthday Shi &middot; Chapter 01
      </footer>
    </div>
  );
}
