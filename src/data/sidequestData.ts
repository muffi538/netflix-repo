import type { TimelineItem, VideoItem, TravelCard, GalleryItem, StatItem } from "./types";

export const sidequestHero = {
  image: "/media/sidequest/photos/hero.jpg",
  eyebrow: "Memory Series",
  title: "SideQuest",
  subtitle: "Not every plan needs a plan. Every detour worth taking.",
  featuring: "One half-charged phone, zero working plans, the crew",
  badges: ["4 Stops", "🌍 Adventure", "Rewatch Value: High"],
};

export const sidequestStats: StatItem[] = [
  { id: "ss-1", label: "Wrong Turns", value: 6 },
  { id: "ss-2", label: "Miles Covered", value: 92 },
  { id: "ss-3", label: "Diner Pancakes", value: 14 },
  { id: "ss-4", label: "Times We Got Lost On Purpose", value: 5 },
];

export const sidequestTimeline: TimelineItem[] = [
  { id: "st-1", date: "Stop 01", title: "Wrong Turn, Right Choice", description: "We took the wrong exit and found the best view of the trip.", image: "/media/sidequest/photos/timeline-1.jpg" },
  { id: "st-2", date: "Stop 02", title: "The 3am Diner", description: "Best pancakes of our lives, questionable life decisions.", image: "/media/sidequest/photos/timeline-2.jpg" },
  { id: "st-3", date: "Stop 03", title: "Lost the Map", description: "Turns out we didn't need one.", image: "/media/sidequest/photos/timeline-3.jpg" },
  { id: "st-4", date: "Stop 04", title: "Summit", description: "The climb was brutal. The view made it worth it.", image: "/media/sidequest/photos/timeline-4.jpg" },
];

export const travelCards: TravelCard[] = [
  { id: "tc-1", place: "The Coast Road", date: "Day 1", description: "Windows down, no destination, just vibes.", image: "/media/sidequest/photos/travel-1.jpg" },
  { id: "tc-2", place: "The Mountains", date: "Day 2", description: "Thin air, thick memories.", image: "/media/sidequest/photos/travel-2.jpg" },
  { id: "tc-3", place: "The Old Town", date: "Day 3", description: "Got lost in the alleys on purpose.", image: "/media/sidequest/photos/travel-3.jpg" },
  { id: "tc-4", place: "The Campsite", date: "Day 4", description: "No wifi, full connection.", image: "/media/sidequest/photos/travel-4.jpg" },
];

export const polaroidGallery: GalleryItem[] = [
  { id: "pg-1", src: "/media/sidequest/photos/polaroid-1.jpg", caption: "somewhere, nowhere" },
  { id: "pg-2", src: "/media/sidequest/photos/polaroid-2.jpg", caption: "found this on the road" },
  { id: "pg-3", src: "/media/sidequest/photos/polaroid-3.jpg", caption: "10/10 detour" },
  { id: "pg-4", src: "/media/sidequest/photos/polaroid-4.jpg", caption: "the crew" },
  { id: "pg-5", src: "/media/sidequest/photos/polaroid-5.jpg", caption: "golden hour" },
  { id: "pg-6", src: "/media/sidequest/photos/polaroid-6.jpg", caption: "we'll be back" },
];

export const sidequestVideos: VideoItem[] = [
  { id: "sv-1", src: "/media/sidequest/videos/clip-1.mp4", poster: "/media/sidequest/photos/video-poster-1.jpg", caption: "The road trip playlist moment" },
  { id: "sv-2", src: "/media/sidequest/videos/clip-2.mp4", poster: "/media/sidequest/photos/video-poster-2.jpg", caption: "Making it to the top" },
];

export const questPath = [
  { id: "qp-1", label: "Departure" },
  { id: "qp-2", label: "Wrong Turn" },
  { id: "qp-3", label: "The Diner" },
  { id: "qp-4", label: "The Climb" },
  { id: "qp-5", label: "The Summit" },
];
