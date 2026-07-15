import type { TimelineItem, GalleryItem, VideoItem, QuoteItem } from "./types";

export const birthdayHero = {
  image: "/media/birthday/photos/hero.jpg",
  video: "/media/birthday/videos/hero.mp4",
  title: "Birthday Shi",
  subtitle: "Cake, candles, chaos, and everyone we love in one room.",
};

export const birthdayTimeline: TimelineItem[] = [
  { id: "bt-1", date: "The Countdown", title: "Planning the Chaos", description: "Group chats blowing up, secret plans, and someone always almost spoiling it.", image: "/media/birthday/photos/timeline-1.jpg" },
  { id: "bt-2", date: "The Arrival", title: "Surprise!", description: "The look on their face when the lights came back on.", image: "/media/birthday/photos/timeline-2.jpg" },
  { id: "bt-3", date: "Golden Hour", title: "Cake & Candles", description: "One wish, way too many candles, and a countdown everyone messed up.", image: "/media/birthday/photos/timeline-3.jpg" },
  { id: "bt-4", date: "Midnight", title: "The After Party", description: "Where the real stories happened.", image: "/media/birthday/photos/timeline-4.jpg" },
];

export const birthdayGallery: GalleryItem[] = [
  { id: "bg-1", src: "/media/birthday/photos/gallery-1.jpg", caption: "Blowing out the candles", span: "lg" },
  { id: "bg-2", src: "/media/birthday/photos/gallery-2.jpg", caption: "The whole crew", span: "md" },
  { id: "bg-3", src: "/media/birthday/photos/gallery-3.jpg", caption: "Cake fight incoming", span: "sm" },
  { id: "bg-4", src: "/media/birthday/photos/gallery-4.jpg", caption: "Balloons everywhere", span: "md" },
  { id: "bg-5", src: "/media/birthday/photos/gallery-5.jpg", caption: "Gift unwrapping", span: "sm" },
  { id: "bg-6", src: "/media/birthday/photos/gallery-6.jpg", caption: "Confetti everywhere", span: "lg" },
];

export const birthdayVideos: VideoItem[] = [
  { id: "bv-1", src: "/media/birthday/videos/clip-1.mp4", poster: "/media/birthday/photos/video-poster-1.jpg", caption: "The surprise reaction" },
  { id: "bv-2", src: "/media/birthday/videos/clip-2.mp4", poster: "/media/birthday/photos/video-poster-2.jpg", caption: "Cutting the cake" },
  { id: "bv-3", src: "/media/birthday/videos/clip-3.mp4", poster: "/media/birthday/photos/video-poster-3.jpg", caption: "Dance floor moments" },
];

export const birthdayQuotes: QuoteItem[] = [
  { id: "bq-1", quote: "Another year older, same amount of trouble." },
  { id: "bq-2", quote: "Best birthday because the best people showed up." },
  { id: "bq-3", quote: "Make a wish — but honestly, we already have everything we need." },
];
