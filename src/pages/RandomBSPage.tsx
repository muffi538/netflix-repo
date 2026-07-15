import BackButton from "@/components/shared/BackButton";
import SectionHeader from "@/components/shared/SectionHeader";
import VideoGallery from "@/components/shared/VideoGallery";
import RandomBSHero from "@/components/sections/randombs/RandomBSHero";
import MasonryGallery from "@/components/sections/randombs/MasonryGallery";
import MemeCard from "@/components/sections/randombs/MemeCard";
import RotatingCardStack from "@/components/sections/randombs/RotatingCardStack";
import { randombsHero, masonryGallery, memeCards, randombsVideos } from "@/data/randombsData";

export default function RandomBSPage() {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      <BackButton />

      <RandomBSHero title={randombsHero.title} subtitle={randombsHero.subtitle} />

      <section className="relative px-6 md:px-16 py-24 max-w-6xl mx-auto">
        <SectionHeader eyebrow="Evidence" title="The Masonry Of Chaos" />
        <MasonryGallery items={masonryGallery} />
      </section>

      <section className="relative px-6 md:px-16 py-24 max-w-6xl mx-auto">
        <SectionHeader eyebrow="Hall Of Fame" title="Meme Cards" align="center" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-4">
          {memeCards.map((card, i) => (
            <MemeCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </section>

      <section className="relative px-6 md:px-16 py-24 max-w-3xl mx-auto">
        <SectionHeader eyebrow="Pick One" title="Random Rotation" align="center" />
        <RotatingCardStack cards={memeCards} />
      </section>

      <section className="relative px-6 md:px-16 py-24 max-w-6xl mx-auto">
        <SectionHeader eyebrow="On Tape" title="Do Not Watch This Sober" />
        <VideoGallery items={randombsVideos} accent="#a855f7" />
      </section>

      <footer className="py-16 text-center text-white/25 text-xs tracking-[0.3em] uppercase">
        Random BS &middot; Chapter 03
      </footer>
    </div>
  );
}
