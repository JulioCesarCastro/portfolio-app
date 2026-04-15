# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with Turbopack at localhost:3000
npm run build      # Static export to ./out (used by GitHub Pages CI)
npm run lint       # Run ESLint
```

There are no tests configured in this project.

## Architecture

Single-page portfolio built with **Next.js 15** (static export), **React 19**, **TypeScript**, and **TailwindCSS 4**.

- `src/app/page.tsx` — root page that stacks all section components in order
- `src/app/layout.tsx` — global layout with Geist font and `suppressHydrationWarning` (browser extensions cause hydration mismatches)
- `src/app/globals.css` — defines CSS custom properties (`--jc-*`) and maps them to Tailwind tokens via `@theme inline`
- `src/components/` — one component per portfolio section plus reusable cards
- `src/lib/emailService.ts` — wraps `@emailjs/browser` for the contact form; reads `NEXT_PUBLIC_EMAILJS_*` env vars
- `src/lib/downloadPDFService.ts` — triggers browser download of `/documents/Currículo Julio Cesar.pdf` from `public/`

**Static export**: `next.config.js` sets `output: 'export'` and `images: { unoptimized: true }`. The build output goes to `./out` and is deployed to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`. `next start` does NOT work with static export.

## Styling

All custom colors are prefixed with `jc` (e.g. `bg-jcbackground`, `text-jctext-secondary`). They are defined in both `globals.css` (`@theme inline`) and `tailwind.config.js`. Background is `#151925`, accent red is `#FF0138`.

## Environment Variables

Required for the contact form (create `.env.local`):
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```
