export interface Profile {
  id: string;
  name: string;
  emoji: string;
  path: string;
  image: string;
  accent: string;
  accentSoft: string;
  tagline: string;
}

export const profiles: Profile[] = [
  {
    id: "birthday",
    name: "Birthday Shi",
    emoji: "🎂",
    path: "/birthday",
    image: "/media/profiles/birthday.jpg",
    accent: "#f5a623",
    accentSoft: "rgba(245, 166, 35, 0.35)",
    tagline: "Happy. Colorful. Nostalgic.",
  },
  {
    id: "sidequest",
    name: "SideQuest",
    emoji: "🌍",
    path: "/sidequest",
    image: "/media/profiles/sidequest.jpg",
    accent: "#2dd4bf",
    accentSoft: "rgba(45, 212, 191, 0.35)",
    tagline: "Every detour worth taking.",
  },
  {
    id: "randombs",
    name: "Random BS",
    emoji: "😂",
    path: "/random-bs",
    image: "/media/profiles/randombs.jpg",
    accent: "#a855f7",
    accentSoft: "rgba(168, 85, 247, 0.35)",
    tagline: "Chaotic. Unfiltered. Us.",
  },
  {
    id: "missyou",
    name: "I Am Gon Miss U A Lot",
    emoji: "❤️",
    path: "/miss-you",
    image: "/media/profiles/missyou.jpg",
    accent: "#e50914",
    accentSoft: "rgba(229, 9, 20, 0.35)",
    tagline: "These memories stay forever.",
  },
];
