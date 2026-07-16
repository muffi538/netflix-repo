import type { VideoItem } from "./types";

export const sidequestHero = {
  image: "/media/sidequest/photos/hero.jpg",
  eyebrow: "Memory Series",
  title: "SideQuest",
  subtitle: "Not every plan needs a plan. Every detour worth taking.",
  featuring: "One half-charged phone, zero working plans, the crew",
  badges: ["4 Stops", "🌍 Adventure", "Rewatch Value: High"],
};

export const sidequestVideos: VideoItem[] = [
  { id: "sv-1", src: "/media/sidequest/videos/clip-1.mp4", poster: "/media/sidequest/photos/video-poster-1.jpg", caption: "The road trip playlist moment" },
  { id: "sv-2", src: "/media/sidequest/videos/clip-2.mp4", poster: "/media/sidequest/photos/video-poster-2.jpg", caption: "Making it to the top" },
];
