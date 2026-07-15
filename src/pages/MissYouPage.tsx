import BackButton from "@/components/shared/BackButton";
import SectionHeader from "@/components/shared/SectionHeader";
import Timeline from "@/components/shared/Timeline";
import QuoteCard from "@/components/shared/QuoteCard";
import PhotoGallery from "@/components/shared/PhotoGallery";
import FloatingParticles from "@/components/shared/FloatingParticles";
import MissYouHero from "@/components/sections/missyou/MissYouHero";
import LetterSection from "@/components/sections/missyou/LetterSection";
import ClosingMessage from "@/components/sections/missyou/ClosingMessage";
import {
  missyouHero,
  missyouTimeline,
  missyouLetter,
  missyouQuotes,
  missyouGallery,
} from "@/data/missyouData";

const ACCENT = "#e50914";

export default function MissYouPage() {
  return (
    <div className="relative bg-black min-h-screen">
      <BackButton />

      <MissYouHero
        image={missyouHero.image}
        video={missyouHero.video}
        title={missyouHero.title}
        subtitle={missyouHero.subtitle}
      />

      <section className="relative px-6 md:px-16 py-24 max-w-6xl mx-auto">
        <SectionHeader eyebrow="The Journey" title="Every Chapter" />
        <Timeline items={missyouTimeline} accent={ACCENT} />
      </section>

      <section className="relative px-6 md:px-16 py-24">
        <SectionHeader eyebrow="One Last Thing" title="A Letter" align="center" />
        <LetterSection letter={missyouLetter} />
      </section>

      <section className="relative px-6 md:px-16 py-24 max-w-5xl mx-auto">
        <SectionHeader eyebrow="In Their Words" title="What Stays With Us" align="center" />
        <div className="grid md:grid-cols-3 gap-6">
          {missyouQuotes.map((q, i) => (
            <QuoteCard key={q.id} quote={q} accent={ACCENT} index={i} />
          ))}
        </div>
      </section>

      <section className="relative px-6 md:px-16 py-24 max-w-6xl mx-auto">
        <SectionHeader eyebrow="Forever" title="The Final Gallery" />
        <PhotoGallery items={missyouGallery} accent={ACCENT} />
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
