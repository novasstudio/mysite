# LaunchPlay — Cloudflare Pages Deployment

This project is a 100% static Next.js export. It does not require a Node.js server, SSR, API routes, Server Actions, a database, or environment variables at runtime.

## Cloudflare Pages build settings

| Setting | Value |
| --- | --- |
| Framework preset | None, or Next.js (Static HTML Export) if available |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Deploy command | Leave empty |
| Root directory | `/` |
| Node.js version | `20` |

If the Cloudflare dashboard does not pick up `.nvmrc`, add the build environment variable `NODE_VERSION` with the value `20`.

## Important: do not use the Workers deploy command

This repository already exports a complete static site to `out/`. Do not configure `npx wrangler deploy`, `opennextjs-cloudflare`, or `.next` as the output directory. Those settings invoke the Workers/OpenNext adapter and are incompatible with this static-export configuration.

If the dashboard requires a deploy command or shows `.next` as the output directory, the project was created as a Workers application. Create a **Pages** application instead, connect the same GitHub repository, select the static settings above, and leave the deploy command empty.
## Connect GitHub

1. Push the project to GitHub.
2. Sign in to the Cloudflare dashboard.
3. Open **Workers & Pages**.
4. Choose **Create application → Pages → Connect to Git**.
5. Select `novasstudio/mysite`.
6. Enter the build settings shown above.
7. Select **Save and Deploy**.

Cloudflare will install dependencies, run the static build, and publish the generated `out/` directory. Every later push to `main` creates a new production deployment.

## Custom domain

1. Open **Cloudflare Dashboard → Workers & Pages → LaunchPlay → Custom domains**.
2. Select **Set up a custom domain** and add `launchplay.ai`.
3. Add `www.launchplay.ai` as a second custom domain.
4. Keep `launchplay.ai` as the primary domain.

The included `public/_redirects` file permanently redirects `www.launchplay.ai` to `https://launchplay.ai`. Cloudflare copies this rule into the deployment output during the build.

## Production checks

After deployment, verify:

- `/`
- `/games/`
- `/about/`
- `/support/`
- `/privacy/`
- `/terms/`
- `/contact/`
- `/games/sand-art-puzzle/`
- `/games/sand-art-puzzle/privacy/`
- `/games/sand-art-puzzle/support/`
- `/robots.txt`
- `/sitemap.xml`

The production URLs intended for App Store Connect are clean paths such as:

- `https://launchplay.ai/games/sand-art-puzzle/`
- `https://launchplay.ai/games/sand-art-puzzle/privacy/`
- `https://launchplay.ai/games/sand-art-puzzle/support/`

## Before publishing

- Confirm that the LaunchPlay email inboxes are active.
- Replace the placeholder App Store and Google Play URLs in `data/games.ts`.
- Review the legal templates against the real SDKs, data collection, audience, and release territories.
- Confirm both apex and `www` domains have valid HTTPS certificates.
