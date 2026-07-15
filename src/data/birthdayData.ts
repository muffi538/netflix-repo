import type { VideoItem } from "./types";

export const birthdayHero = {
  image: "/media/birthday/photos/hero.jpg",
  video: "/media/birthday/videos/hero.mp4",
  eyebrow: "Memory Series",
  title: "Birthday Shi",
  subtitle: "Cake, candles, chaos, and everyone we love in one room.",
  featuring: "The whole crew, way too much cake, one questionable playlist",
  badges: ["4 Chapters", "🎂 All Ages", "Rewatch Value: High"],
};

export const birthdayVideos: VideoItem[] = [
  { id: "bv-1", src: "/media/birthday/videos/clip-1.mp4", poster: "/media/birthday/photos/video-poster-1.jpg", caption: "The surprise reaction" },
  { id: "bv-2", src: "/media/birthday/videos/clip-2.mp4", poster: "/media/birthday/photos/video-poster-2.jpg", caption: "Cutting the cake" },
  { id: "bv-3", src: "/media/birthday/videos/clip-3.mp4", poster: "/media/birthday/photos/video-poster-3.jpg", caption: "Dance floor moments" },
];
