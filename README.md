# Forever — A Memory Collection

A premium, Netflix-inspired cinematic memory site. Black UI, cinematic lighting,
glassmorphism, and 60fps Framer Motion animation throughout — an original
intro and blob-avatar profile picker leading into Netflix title-page-style
memory sections (full-bleed hero, Play/My List, episode list, horizontal
scroll rows, stats, and more).

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router

## Getting started

```bash
npm install
npm run dev
```

```bash
npm run build   # type-checks and produces a production build in dist/
npm run preview # preview the production build locally
```

## Structure

```
src/
  components/
    intro/        cinematic intro (light flash, logo reveal)
    profiles/      blob-avatar profile grid + cinematic zoom transition
    shared/         reusable placeholder-aware primitives — TopNav,
                     HeroTitleCard, EpisodeList, ScrollRow, PhotoRowCard,
                     VideoRowCard, MyListButton, StatBar, QuoteCard,
                     PlaceholderImage/Video, LoadingScreen, particles...
    sections/       theme-specific components per memory section
                     (e.g. Random BS's PopQuiz)
  pages/            one page per route (Home + memory sections)
  data/             all copy + media paths, per section — edit these to
                     change content without touching components
public/
  media/            drop real photos/videos here — see media/README.md
```

## Adding your own media

Every image and video is a placeholder component that gracefully falls back
to a styled gradient card until a real file exists. See
[`public/media/README.md`](./public/media/README.md) for the exact filenames
and folders expected by each section.
