# LaunchPlay Website

The official static website for LaunchPlay, built with Next.js, TypeScript, Tailwind CSS, and the App Router. It includes the studio landing page, data-driven game pages, game-specific privacy and support pages, legal pages, SEO metadata, a sitemap, and responsive layouts.

Production domain: `https://launchplay.ai`

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

The project uses `output: "export"`. A successful build generates the complete static website in `out/`.

## Cloudflare Pages configuration

Use these values when connecting the GitHub repository in **Cloudflare Dashboard → Workers & Pages → Create application → Pages → Connect to Git**:

| Setting | Value |
| --- | --- |
| Repository | `novasstudio/mysite` |
| Framework preset | None, or Next.js (Static HTML Export) if available |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Deploy command | Leave empty |
| Root directory | `/` |
| Node.js version | `20` |

No runtime environment variables, database, server, or API are required. Do not use `npx wrangler deploy`, OpenNext, or `.next`; those are Workers/server deployment settings and are not used by this static Pages project. If Cloudflare does not detect `.nvmrc`, set the build variable `NODE_VERSION=20`.

## Custom domain

In **Cloudflare Dashboard → Workers & Pages → LaunchPlay → Custom domains**:

1. Add `launchplay.ai`.
2. Add `www.launchplay.ai`.
3. Keep `launchplay.ai` as the primary domain.

The `public/_redirects` file redirects all `www.launchplay.ai` requests to the apex domain. The `public/_headers` file applies security and static-asset cache headers.

## Add a game

Add one object to `data/games.ts`. These routes are generated automatically from its `slug`:

- `/games/[slug]/`
- `/games/[slug]/privacy/`
- `/games/[slug]/support/`

Include the game name, descriptions, genres, features, store URLs, support email, visual theme, and privacy-service flags.

## Game images

Place production assets under:

```text
public/games/[slug]/icon.png
public/games/[slug]/screenshot-1.jpg
public/games/[slug]/screenshot-2.jpg
public/games/[slug]/screenshot-3.jpg
```

The supplied LaunchPlay logo is stored at `public/brand/logo.png`. Static assets placed in `public/` are copied directly to `out/` during the build.

## Store links and support email

- Replace `#coming-soon` values in `data/games.ts` with real App Store and Google Play URLs.
- Set each game's `supportEmail` in `data/games.ts`.
- Studio email addresses are defined in `app/contact/page.tsx` and the legal pages.

## Privacy policies

- Studio policy: `app/privacy/page.tsx`
- Shared game template: `app/games/[slug]/privacy/page.tsx`
- Per-game service flags: `privacy` in `data/games.ts`

The included legal content is a development template, not legal advice. Review it against the actual SDKs, data collection, audience, and distribution regions before publishing.

For the complete deployment checklist, see `DEPLOYMENT.md`.
