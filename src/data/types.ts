export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  caption?: string;
  span?: "sm" | "md" | "lg";
}

export interface VideoItem {
  id: string;
  src: string;
  poster?: string;
  caption?: string;
}

export interface QuoteItem {
  id: string;
  quote: string;
  author?: string;
}

export interface MemeCard {
  id: string;
  image: string;
  caption: string;
  rotation?: number;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  yesResponse: string;
  noResponse: string;
}
