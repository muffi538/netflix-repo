import type { GalleryItem, MemeCard, VideoItem } from "./types";

export const randombsHero = {
  title: "Random BS",
  subtitle: "Chaotic. Unfiltered. Absolutely no context needed.",
};

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
];
