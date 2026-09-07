# Numinous Gravitas

Independent institution building across enterprise, capital, knowledge, education, philanthropy, and faith. Substance over noise, endurance over fashion, stewardship over consumption.

This repo is the institutional website — an editorial, typography-first site built with Next.js.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for restrained scroll reveals
- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) (serif/display) + [Inter](https://fonts.google.com/specimen/Inter) (sans/utility)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/          Routes (Next.js App Router — one folder per page)
  components/
    ui/         Reusable primitives (Container, Reveal, ArrowLink, ...)
    layout/     Site chrome (Header, Footer)
    sections/   Composed blocks reused across multiple pages
    forms/      Form components
  content/      Page copy and structured data, one file per domain
```

## Build & deploy

The site is fully static (no server actions, cookies, or dynamic data), so it builds to a static export:

```bash
npm run build
```

Output is written to `out/`. This deploys to [Cloudflare Pages](https://pages.cloudflare.com) with:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `out` |

`.node-version` pins the Node version Cloudflare Pages uses for the build.
