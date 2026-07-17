# The Flea Market — Los Angeles Apparel

A landing page for **The Flea Market**, the in-person overstock market from Los Angeles Apparel — imperfect garments, overstock, and short runs sold on 59th Street, plus a rotating selection on Depop.

**Live market:** 711 E 59th St, Los Angeles, CA 90001 · Open daily 10AM–8PM · Free entry
**Instagram:** [@losangelesapparelmarket](https://www.instagram.com/losangelesapparelmarket/)

## Stack
- Single static `index.html` — no build step
- Tailwind CSS (CDN)
- Type: Anton (display) · Archivo (body) · Space Mono (data) · Michroma (brand wordmark, standing in for Eurostile Extended)
- Animated hero background: vanilla SVG (`feTurbulence` + displacement) ported from a React/framer-motion component (kept as reference in [`components/ui/`](components/ui/))

## Local preview
```bash
node serve.mjs   # serves the project root at http://localhost:3000
```

## Deploy
Static site — Vercel serves `index.html` at the root with zero config.

---
*Concept/community site presented to Los Angeles Apparel.*
