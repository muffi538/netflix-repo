import type { TimelineItem, GalleryItem, QuoteItem, StatItem } from "./types";

export const missyouHero = {
  image: "/media/missyou/photos/hero.jpg",
  video: "/media/missyou/videos/hero.mp4",
  eyebrow: "Final Episode",
  title: "I Am Gon Miss U A Lot",
  subtitle: "For every moment that mattered, and every one still to come.",
  featuring: "You, me, and every version of us that got us here",
  badges: ["Final Chapter", "❤️ All The Feels", "Rewatch Value: Immeasurable"],
};

export const missyouStats: StatItem[] = [
  { id: "ms-1", label: "Years Of This", value: 5 },
  { id: "ms-2", label: "Memories Made", value: 99, suffix: "+" },
  { id: "ms-3", label: "Inside Jokes", value: 41 },
  { id: "ms-4", label: "Times It Was Worth It", value: 100, suffix: "%" },
];

export const missyouTimeline: TimelineItem[] = [
  { id: "mt-1", date: "The Beginning", title: "Where It Started", description: "None of us knew what this would turn into.", image: "/media/missyou/photos/timeline-1.jpg" },
  { id: "mt-2", date: "The Middle", title: "Every Day In Between", description: "The ordinary days that became the ones we remember most.", image: "/media/missyou/photos/timeline-2.jpg" },
  { id: "mt-3", date: "Right Now", title: "Here We Are", description: "Grateful for every second, even this one.", image: "/media/missyou/photos/timeline-3.jpg" },
];

export const missyouLetter = `If you're reading this, it means it's time.

I don't really know how to say this without it sounding like every other goodbye, so I won't try to make it sound like anything else. I just want you to know that every single memory here — the loud ones, the quiet ones, the ones that made no sense at the time — mattered. They still do.

Wherever this next chapter takes you, take all of it with you. The inside jokes, the late nights, the random Tuesdays that somehow became core memories. None of that goes away just because the address changes.

Thank you for every bit of it.`;

export const missyouQuotes: QuoteItem[] = [
  { id: "mq-1", quote: "Distance means so little when someone means so much." },
  { id: "mq-2", quote: "It's not goodbye. It's just not today." },
  { id: "mq-3", quote: "Some people leave footprints on your heart, and you're never quite the same." },
];

export const missyouGallery: GalleryItem[] = [
  { id: "mg-1", src: "/media/missyou/photos/gallery-1.jpg", caption: "always" },
  { id: "mg-2", src: "/media/missyou/photos/gallery-2.jpg", caption: "forever grateful" },
  { id: "mg-3", src: "/media/missyou/photos/gallery-3.jpg", caption: "until next time" },
  { id: "mg-4", src: "/media/missyou/photos/gallery-4.jpg", caption: "never far" },
  { id: "mg-5", src: "/media/missyou/photos/gallery-5.jpg", caption: "same time, next chapter" },
  { id: "mg-6", src: "/media/missyou/photos/gallery-6.jpg", caption: "thank you" },
];
