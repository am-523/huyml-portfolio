# DESIGN.md — Huyml Aesthetic & Awwwards Standard System

## Brief & Identity
- **Subject**: Independent Digital Designer & Art Director (Inspired by Huy Phan / Huyml).
- **Core Message**: "Shaping digital experiences with clarity, intention, character, and being a good friend with digital agencies, design studios, startups and businesses around the world."
- **Goal**: High-calibre, award-winning interactive portfolio that demonstrates art direction mastery, editorial typography, continuous motion, and tactile interactivity.

---

## Concept Card
- **Idea**: Precision editorial minimalism where every viewport acts like an exhibition catalog poster, contrasting tactile brutalist layout with responsive fluid micro-interactions.
- **Metaphor**: Modern Architecture & Print Monograph meets kinetic digital canvas.
- **Signature Moment**: 
  - Dual-mode Inverted Magnetic Cursor (`mix-blend-mode: difference`) that expands and surfaces contextual action cues ("VIEW", "EXPLORE", "PLAY").
  - Floating tilt image-reveal preview that tracks the pointer smoothly over project lists.
  - Generative tactile soundscapes powered by Web Audio API (tactile clicks, soft frequency pulses).
  - Live UTC+7 (HCMC) time clock and global status indicator.
- **Emotion**: Confident, restrained, meticulously crafted, unforgettable.
- **Motion Verb**: "Glide with weight and settle with snap" — smooth inertia (Lenis) with crisp typographic reveals.
- **Screenshot Moment**: The oversized hero layout juxtaposed with the live status badge, sound toggle, and the project showcase preview hover.

---

## Art Direction System

### Color Palette
- `--bg-primary`: `#ECECEC` (The signature warm cement off-white)
- `--bg-secondary`: `#E2E2E2` (Subtle container / pill background)
- `--bg-surface`: `#F4F4F4` (Card backgrounds)
- `--text-primary`: `#111111` (Deep charcoal ink)
- `--text-muted`: `#737373` (Muted metadata and captions)
- `--border-light`: `rgba(17, 17, 17, 0.09)` (Hairline dividers)
- `--accent-red`: `#E63946` (Live status indicator dot)
- `--cursor-invert`: `#FFFFFF` (Used with `mix-blend-mode: difference`)

### Typography
- **Display / Headers**: `"Syne"`, sans-serif (700 / 800) — distinctive editorial punch with tight letter-spacing (`-0.03em`).
- **Body / Metadata**: `"Inter"`, sans-serif (400 / 500 / 600) — neutral, highly legible Swiss grotesque aesthetic.
- **Accent Monospace**: `"Space Mono"`, monospace (400) — for timestamps, indices (`[01]`, `[P1]`), and awards tags.

### Layout Grid & Rhythm
- Fixed minimal sticky header with difference blending.
- 12-column responsive modular grid.
- Asymmetrical editorial spacing with generous gutters (24px to 48px).
- Generous breathing room (`clamp(80px, 12vh, 160px)` between primary sections).

### Motion Tokens
- **Smooth Scroll**: Lenis inertial scrolling with `lerp: 0.1`, `smoothWheel: true`.
- **Eases**: `cubic-bezier(0.16, 1, 0.3, 1)` (out-expo) for responsive snaps, `cubic-bezier(0.25, 1, 0.5, 1)` for cursor tracking.
- **Hover Transitions**: `0.35s cubic-bezier(0.16, 1, 0.3, 1)` for scale and translates.
