# Goen landing — Variant B "Signal"

Next.js (App Router, TypeScript, plain CSS) build of `Goen Landing B - Signal.dc.html`
from Claude Design. Deployed on Vercel from `main`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Layout

| Path | What it is |
| --- | --- |
| `app/page.tsx` | Every section, top to bottom: header, hero, overview + orbit, the shift, product rail, stories, FAQ, waitlist, footer |
| `app/globals.css` | Design tokens and all styles, grouped by section |
| `lib/content.ts` | All copy and data: shift words, product cards, testimonials, FAQ, orbit layout |
| `components/ScrollEffects.tsx` | One rAF scroll handler: header pill, reveals, hero zoom, CTA parallax, word fill, horizontal rail |
| `components/Faq.tsx` | Single-open accordion |
| `components/Waitlist.tsx` | Waitlist form (front end only) |
| `public/img/` | WebP exports of the handoff images; avatars pre-cropped to 320px squares |

## Notes

- **The waitlist does not store anything yet.** Submitting shows the "You're in" state
  only. To collect sign-ups, POST `{ name, email }` from `onSubmit` in
  `components/Waitlist.tsx` to a backend (the hero app in `Goen-events/goen` has an `/api/waitlist` route that writes to Supabase).
- **Placeholder links** in the footer (About, Careers, socials, Privacy, Terms) point to `#`.
- **Testimonials and the "1,000+ people" figure** are copy from the design, not real data.
- Reduced motion turns off reveals, zoom, parallax and card scaling, and shows the shift text fully filled.
