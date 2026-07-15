import BackButton from "@/components/shared/BackButton";
import SectionHeader from "@/components/shared/SectionHeader";
import Timeline from "@/components/shared/Timeline";
import PhotoGallery from "@/components/shared/PhotoGallery";
import VideoGallery from "@/components/shared/VideoGallery";
import QuoteCard from "@/components/shared/QuoteCard";
import BirthdayHero from "@/components/sections/birthday/BirthdayHero";
import {
  birthdayHero,
  birthdayTimeline,
  birthdayGallery,
  birthdayVideos,
  birthdayQuotes,
} from "@/data/birthdayData";

const ACCENT = "#f5a623";

export default function BirthdayPage() {
  return (
    <div className="relative bg-black min-h-screen">
      <BackButton />

      <BirthdayHero
        image={birthdayHero.image}
        video={birthdayHero.video}
        title={birthdayHero.title}
        subtitle={birthdayHero.subtitle}
      />

      <div
        className="pointer-events-none absolute top-[85vh] left-0 right-0 h-[40vh] opacity-30"
        style={{ background: `radial-gradient(ellipse at 30% 0%, ${ACCENT}33, transparent 60%)` }}
      />

      <section className="relative px-6 md:px-16 py-24 max-w-6xl mx-auto">
        <SectionHeader eyebrow="The Story" title="How It Went Down" />
        <Timeline items={birthdayTimeline} accent={ACCENT} />
      </section>

      <section className="relative px-6 md:px-16 py-24 max-w-6xl mx-auto">
        <SectionHeader eyebrow="Gallery" title="Every Angle" />
        <PhotoGallery items={birthdayGallery} accent={ACCENT} />
      </section>

      <section className="relative px-6 md:px-16 py-24 max-w-6xl mx-auto">
        <SectionHeader eyebrow="On Tape" title="The Highlight Reel" />
        <VideoGallery items={birthdayVideos} accent={ACCENT} />
      </section>

      <section className="relative px-6 md:px-16 py-24 max-w-5xl mx-auto">
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
