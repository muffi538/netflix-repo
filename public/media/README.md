# Media Folder Guide

Drop your real photos and videos into these folders using the **exact filenames**
already referenced in the code, and they'll show up automatically — no code
changes needed. Every placeholder gracefully falls back to a styled gradient
card until a real file exists at its path, so the site never shows a broken
image icon.

## Profile avatars — `/public/media/profiles/`

| File | Used by |
| --- | --- |
| `birthday.jpg` | Birthday Shi profile |
| `randombs.jpg` | Random BS profile |
| `missyou.jpg` | I Am Gon Miss U A Lot profile |

## Birthday Shi — `/public/media/birthday/`

- `photos/hero.jpg` — hero background image (used behind the hero video)
- `videos/hero.mp4` — hero background video
- `videos/clip-1.mp4` … `clip-3.mp4` + matching `photos/video-poster-1.jpg` … `video-poster-3.jpg` — video gallery

## Random BS — `/public/media/randombs/`

- `photos/hero.jpg` — hero background image
- `photos/masonry-1.jpg` … `masonry-8.jpg` — masonry gallery
- `photos/meme-1.jpg` … `meme-4.jpg` — meme cards (also reused in the rotating card stack)
- `videos/clip-1.mp4`, `clip-2.mp4` + posters — video gallery

## I Am Gon Miss U A Lot — `/public/media/missyou/`

- `photos/hero.jpg` — hero background image
- `videos/hero.mp4` — hero background video
- `photos/timeline-1.jpg` … `timeline-3.jpg` — timeline entries
- `photos/gallery-1.jpg` … `gallery-6.jpg` — final gallery

## Notes

- All paths are defined in one place per section: `src/data/*Data.ts`. Rename
  or add media by editing those files — nothing else needs to change.
- Recommended photo aspect ratios: hero images `16:9`, gallery `4:5` or `1:1`,
  polaroids `1:1`.
- Keep videos short (under ~15s) and compressed (H.264 mp4, under a few MB)
  since they lazy-load as users scroll and some autoplay muted in hero
  sections.
- Nothing will break if a file is missing — the placeholder gradient + icon
  just keeps showing until you add it.
