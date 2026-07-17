# `etheral-shadow` — reference component

These files (`etheral-shadow.tsx`, `demo.tsx`) are the **original React + framer-motion**
component that was requested. **This project is currently a single static `index.html`
(vanilla + Tailwind CDN, no build step), so these `.tsx` files are inert reference only.**

The animated background is already live on the site — it was **ported to vanilla
HTML/SVG/CSS/JS** inside `index.html` (search for `hero-shadow` / `#heroShadow` /
`animateHeroShadow`). The port reproduces the same effect (SVG `feTurbulence` +
double `feDisplacementMap` on a masked gray shape, with the hue-rotate matrix animated
via `requestAnimationFrame` instead of framer-motion), sitting behind the hero text.

The two mask/noise images the component points at (framer CDN) are downloaded locally to
`brand_assets/shadow-mask.png` and `brand_assets/noise.png`.

---

## If you later convert this project to React (shadcn / Tailwind / TypeScript)

The component drops in as-is. `/components/ui` is the shadcn convention — the CLI writes
generated primitives there and the `@/components/ui/*` import alias (see `components.json`
+ `tsconfig` paths) resolves to it, so keeping this folder name means `import { Component }
from "@/components/ui/etheral-shadow"` works with zero config changes.

Setup from scratch:

```bash
# 1. Scaffold a Tailwind + TypeScript app (Vite example)
npm create vite@latest my-app -- --template react-ts
cd my-app

# 2. Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. shadcn (creates components.json, sets up the @/components/ui alias)
npx shadcn@latest init

# 4. This component's runtime dependency
npm install framer-motion
```

Then place `etheral-shadow.tsx` in `src/components/ui/` and use it as shown in `demo.tsx`.

Props: `color` (CSS color of the shape), `animation={{ scale, speed }}` (1–100 each),
`noise={{ opacity, scale }}`, `sizing` (`"fill"` | `"stretch"`).
