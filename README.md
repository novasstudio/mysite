# LaunchPlay Website

A production-ready static studio website for LaunchPlay, built with Next.js, TypeScript, Tailwind CSS, and the App Router. The site includes a studio landing page, data-driven game pages, game-specific support and privacy routes, legal pages, SEO metadata, a sitemap, and responsive layouts.

## Install

```bash
npm install
```

## Develop

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

The project uses `output: "export"`, so the static production site is generated in `out/`.

## Deploy to Vercel

1. Push the project to a Git provider.
2. Import the repository in Vercel.
3. Keep the detected framework preset as **Next.js**.
4. Deploy. No environment variables or database are required.

You can also install the Vercel CLI and run `vercel` from the project directory.

## Add a game

Add one object to `data/games.ts`. The following routes are generated automatically from its `slug`:

- `/games/[slug]`
- `/games/[slug]/privacy`
- `/games/[slug]/support`

Include the game name, descriptions, genres, features, store URLs, support email, visual theme, and privacy-service flags. If you need a distinct visual theme, extend the `theme` union and add its matching styles in `app/globals.css`.

## Replace game icons and screenshots

The initial site uses original CSS artwork so it works without copyrighted or external assets. To use real images:

1. Create `public/games/[slug]/`.
2. Add `icon.png`, `screenshot-1.jpg`, `screenshot-2.jpg`, and `screenshot-3.jpg`.
3. Add `icon` and `screenshots` fields to the `Game` type and game object in `data/games.ts`.
4. Replace `GameArtwork` usages in `GameCard` and the game detail page with `next/image` components.

Recommended sizes: 1024×1024 px for icons and at least 1290×2796 px for portrait screenshots. Keep aspect ratios consistent to prevent layout shift.

## Change support email

Set `supportEmail` on each game in `data/games.ts`. Update the studio-wide placeholder addresses in:

- `app/contact/page.tsx`
- `app/privacy/page.tsx`

## Edit privacy policies

- Studio policy: `app/privacy/page.tsx`
- Shared game policy template: `app/games/[slug]/privacy/page.tsx`
- Per-game service flags and optional configuration: `privacy` in `data/games.ts`

The included legal text is a development template, not legal advice. Review it against the actual SDKs, data collection, audience, and distribution regions before publishing.

## Custom domain

In Vercel, open **Project Settings → Domains**, add your domain, and follow the shown DNS instructions. Update `metadataBase`, Open Graph URLs, `robots.ts`, and `sitemap.ts` if your production domain is not `launchplay.games`.

## Store links

Replace the `#coming-soon` values in `data/games.ts` with each game's App Store and Google Play URLs before launch.
