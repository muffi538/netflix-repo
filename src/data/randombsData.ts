import type { GalleryItem, MemeCard, VideoItem, StatItem, QuizQuestion } from "./types";

export const randombsHero = {
  image: "/media/randombs/photos/hero.jpg",
  eyebrow: "Memory Series",
  title: "Random BS",
  subtitle: "Chaotic. Unfiltered. Absolutely no context needed.",
  featuring: "Everyone who said \"delete that\" and nobody who listened",
  badges: ["Unrated", "😂 Chaos Certified", "Rewatch Value: Dangerously High"],
};

export const randombsStats: StatItem[] = [
  { id: "rs-1", label: "Things We Regret", value: 11 },
  { id: "rs-2", label: "Group Chat Messages", value: 99, suffix: "+" },
  { id: "rs-3", label: "Screenshots Taken", value: 47 },
  { id: "rs-4", label: "Times “Delete That” Was Said", value: 22 },
];

export const quizQuestions: QuizQuestion[] = [
  { id: "qq-1", question: "Do you remember why this photo exists?", yesResponse: "Liar. Nobody remembers.", noResponse: "Honestly, same." },
  { id: "qq-2", question: "Was this our best idea or worst idea?", yesResponse: "There was no in-between, apparently.", noResponse: "Correct answer." },
  { id: "qq-3", question: "Would you do it all again?", yesResponse: "Obviously. In a heartbeat.", noResponse: "Sure you wouldn't." },
];

export const masonryGallery: GalleryItem[] = [
  { id: "mg-1", src: "/media/randombs/photos/masonry-1.jpg", caption: "no comment", span: "lg" },
  { id: "mg-2", src: "/media/randombs/photos/masonry-2.jpg", caption: "why do we have this", span: "sm" },
  { id: "mg-3", src: "/media/randombs/photos/masonry-3.jpg", caption: "iconic honestly", span: "md" },
  { id: "mg-4", src: "/media/randombs/photos/masonry-4.jpg", caption: "delete this immediately", span: "sm" },
  { id: "mg-5", src: "/media/randombs/photos/masonry-5.jpg", caption: "certified moment", span: "md" },
  { id: "mg-6", src: "/media/randombs/photos/masonry-6.jpg", caption: "still not over this", span: "lg" },
  { id: "mg-7", src: "/media/randombs/photos/masonry-7.jpg", caption: "peak comedy", span: "sm" },
  { id: "mg-8", src: "/media/randombs/photos/masonry-8.jpg", caption: "10/10 chaos", span: "md" },
];

export const memeCards: MemeCard[] = [
  { id: "mc-1", image: "/media/randombs/photos/meme-1.jpg", caption: "the audacity", rotation: -4 },
  { id: "mc-2", image: "/media/randombs/photos/meme-2.jpg", caption: "we do not talk about this", rotation: 3 },
  { id: "mc-3", image: "/media/randombs/photos/meme-3.jpg", caption: "screenshotted for legal reasons", rotation: -2 },
  { id: "mc-4", image: "/media/randombs/photos/meme-4.jpg", caption: "this aged badly", rotation: 5 },
];

export const stickers = ["💀", "😭", "🔥", "🤡", "✨", "😩", "🫠", "💯"];

export const randombsVideos: VideoItem[] = [
  { id: "rv-1", src: "/media/randombs/videos/clip-1.mp4", poster: "/media/randombs/photos/video-poster-1.jpg", caption: "don't ask" },
  { id: "rv-2", src: "/media/randombs/videos/clip-2.mp4", poster: "/media/randombs/photos/video-poster-2.jpg", caption: "the reenactment" },
  { id: "rv-3", src: "/media/randombs/videos/clip-3.mp4", poster: "/media/randombs/photos/video-poster-3.jpg", caption: "peak chaos, no context" },
];
