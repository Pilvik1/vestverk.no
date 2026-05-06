# Vestverk — Builder Studio Website

A premium, understated studio site centered on showcasing four projects, with a custom WebGL liquid-shader ambient layer and thick frosted-glass panels as the content surface.

## Ambient background (custom shader)

Inspired by the reference clip but generated entirely in code — no video file.

- `components/AmbientBackground.tsx` renders a fixed full-viewport `<canvas>` running a tiny custom GLSL fragment shader (~80 lines, no three.js).
  - Domain-warped fractal noise produces slow-flowing marbled forms.
  - Two or three palette stops (deep violet → electric cyan → soft mint) blended by the noise field. Palette tunable via uniforms so it stays cohesive with the dark UI.
  - Slow time multiplier (≈0.05–0.08) for calm, meditative motion.
  - Resolution scaled to `devicePixelRatio` capped at 1.5 for performance.
  - `requestAnimationFrame` loop; pauses on `visibilitychange`.
  - Respects `prefers-reduced-motion`: renders a single static frame.
- Overlaid with a dark gradient scrim (top + bottom) and a faint vignette so glass panels read clearly.
- Lives behind every route via `__root.tsx`.

## Glass panel system

Single reusable `components/GlassPanel.tsx` for the "architectural glass" feel:

- `backdrop-filter: blur(28px) saturate(140%)` — substantial, not cheap SaaS gloss.
- Background: dark glass via `color-mix` of base + ~55% opacity (light variant available for inverted moments).
- Hairline border with a top-edge light gradient (brighter top, fading down) mimicking refracted edge light.
- Inset highlight on top edge + faint inner shadow on bottom for depth.
- Large radius (~20–28px), minimal soft long shadow.
- Variants: `default`, `elevated`, `inset` (anchored bars like header/footer).

Used for header, hero, project cards, about block, contact block, footer.

## Visual direction

- **Palette** (oklch tokens in `src/styles.css`):
  - Background base behind shader: deep near-black
  - Foreground: soft off-white
  - Muted-foreground: warm gray
  - UI accent: restrained warm white for hover/status — chroma comes from the shader, not the UI
- **Typography**: confident display serif (Instrument Serif) for headlines, neutral sans (Inter Tight) for body — Google Fonts via `__root.tsx` head.
- **Motion**: framer-motion for soft fades, slight Y reveals on scroll, smooth hover lifts on project cards.

## Site structure

```
src/routes/
  __root.tsx          shell, fonts, meta, language provider, AmbientBackground, header, footer
  index.tsx           Home: hero glass panel + projects
  projects.tsx        Full project list as glass cards
  about.tsx           Short factual paragraph in a glass panel
  contact.tsx         Email in a glass panel
```

Per-route `head()` with unique title/description/og tags.

## Layout

- **Header**: thin sticky glass bar. `Vestverk` wordmark left; `Projects / About / Contact` center-right; `NO / EN` toggle far right.
- **Hero (home)**: asymmetric two-column composition inside a large glass panel — headline left, supporting text + scroll cue right.
- **Projects**: vertical stack of glass cards. Each card shows project name (large), status pill, one-line description, external arrow. Hover lifts ~4px and brightens the border. Regwatch is non-clickable with an "In progress" pill.
- **Footer**: minimal glass strip — email + copyright.

## Components

- `components/AmbientBackground.tsx`
- `components/GlassPanel.tsx`
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/ProjectCard.tsx`
- `components/LanguageProvider.tsx` — context with `lang` (persisted to localStorage) + `t(key)` helper
- `lib/i18n.ts` — `{ en, no }` dictionary covering every visible string

## Content (verbatim)

- Hero EN: "Building focused digital ventures." / "Vestverk creates and publishes independent digital products."
- Hero NO: "Bygger fokuserte digitale satsinger." / "Vestverk lager og publiserer selvstendige digitale produkter."
- Projects: Vetted, felgen.app, verin.no, Regwatch — names, statuses, URLs, one-line descriptions exactly as supplied.
- About EN: "Vestverk is a small builder studio based in Norway. We create focused digital products with long-term intent." (with NO translation)
- Contact: `hakon@vestverk.no` mailto.

## Technical details

- TanStack Start file-based routing; no backend.
- Tailwind v4 tokens in `src/styles.css` (oklch). Glass tokens: `--glass-bg`, `--glass-border`, `--glass-highlight`.
- Add deps: `framer-motion`.
- Per-route `head()` SEO; single H1 per page.
- Replace placeholder `index.tsx`.

## Out of scope

No testimonials, no logos wall, no loud CTAs, no consulting/VC framing, no Lovable Cloud.