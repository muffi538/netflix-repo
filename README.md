# Forever — A Memory Collection

A premium, Netflix-inspired cinematic memory site. Black UI, cinematic lighting,
glassmorphism, and 60fps Framer Motion animation throughout — an original
intro and profile-select experience leading into four immersive memory
sections.

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
    profiles/      profile-select grid + cinematic zoom transition
    shared/         reusable placeholder-aware primitives (image, video,
                     timeline, galleries, quote cards, loading, particles...)
    sections/       theme-specific components per memory section
  pages/            one page per route (Home + 4 sections)
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
