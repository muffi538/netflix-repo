import TopNav from "@/components/shared/TopNav";
import SectionHeader from "@/components/shared/SectionHeader";
import StatBar from "@/components/shared/StatBar";
import ScrollRow from "@/components/shared/ScrollRow";
import VideoRowCard from "@/components/shared/VideoRowCard";
import HeroTitleCard from "@/components/shared/HeroTitleCard";
import MasonryGallery from "@/components/sections/randombs/MasonryGallery";
import MemeCard from "@/components/sections/randombs/MemeCard";
import RotatingCardStack from "@/components/sections/randombs/RotatingCardStack";
import FloatingStickers from "@/components/sections/randombs/FloatingStickers";
import PopQuiz from "@/components/sections/randombs/PopQuiz";
import {
  randombsHero,
  masonryGallery,
  memeCards,
  randombsVideos,
  randombsStats,
  quizQuestions,
  stickers,
} from "@/data/randombsData";

const ACCENT = "#a855f7";
const TABS = [
  { id: "gallery", label: "Evidence" },
  { id: "memes", label: "Meme Cards" },
  { id: "quiz", label: "Pop Quiz" },
  { id: "videos", label: "Videos" },
];

export default function RandomBSPage() {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      <TopNav accent={ACCENT} profileEmoji="😂" tabs={TABS} />

      <div className="relative">
        <HeroTitleCard
          id="randombs"
          eyebrow={randombsHero.eyebrow}
          title={randombsHero.title}
          subtitle={randombsHero.subtitle}
          featuring={randombsHero.featuring}
          badges={randombsHero.badges}
          image={randombsHero.image}
          accent={ACCENT}
          playHref="#gallery"
        />
        <FloatingStickers stickers={stickers} avoidBottomLeft />
      </div>

      <section id="gallery" className="relative px-5 md:px-10 py-20 md:py-24 max-w-6xl mx-auto scroll-mt-20">
        <SectionHeader eyebrow="Evidence" title="The Masonry Of Chaos" />
        <MasonryGallery items={masonryGallery} />
      </section>

      <section className="relative px-5 md:px-10 py-16 max-w-6xl mx-auto">
        <SectionHeader eyebrow="By The Numbers" title="Chaos Stats" />
        <StatBar stats={randombsStats} accent={ACCENT} />
      </section>

      <section id="memes" className="relative px-5 md:px-10 py-20 md:py-24 max-w-6xl mx-auto scroll-mt-20">
        <SectionHeader eyebrow="Hall Of Fame" title="Meme Cards" align="center" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-4">
          {memeCards.map((card, i) => (
            <MemeCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </section>

      <section className="relative px-5 md:px-10 py-24 max-w-3xl mx-auto">
        <SectionHeader eyebrow="Pick One" title="Random Rotation" align="center" />
        <RotatingCardStack cards={memeCards} />
      </section>

      <section id="quiz" className="relative px-5 md:px-10 py-20 md:py-24 scroll-mt-20">
        <SectionHeader eyebrow="Test Yourself" title="Pop Quiz" align="center" />
        <PopQuiz questions={quizQuestions} />
      </section>

      <section id="videos" className="relative py-20 md:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <SectionHeader eyebrow="On Tape" title="Do Not Watch This Sober" />
        </div>
        <div className="pl-5 md:pl-10 pr-5 md:pr-10">
          <ScrollRow accent={ACCENT}>
            {randombsVideos.map((item) => (
              <VideoRowCard key={item.id} item={item} accent={ACCENT} />
            ))}
          </ScrollRow>
        </div>
      </section>

      <footer className="py-16 text-center text-white/25 text-xs tracking-[0.3em] uppercase">
        Random BS &middot; Chapter 03
      </footer>
    </div>
  );
}
