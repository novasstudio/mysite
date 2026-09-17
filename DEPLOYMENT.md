# LaunchPlay Deployment Guide

The site is prepared for deployment to Vercel from the `main` branch of `https://github.com/novasstudio/mysite.git`.

## Before production

- Confirm the production domain. The project currently uses `https://launchplay.games` in metadata, the sitemap, and `robots.txt`.
- Confirm that `hello@launchplay.games`, `support@launchplay.games`, and `business@launchplay.games` can receive mail.
- Replace the App Store and Google Play placeholder links in `data/games.ts` when the games are published.
- Review every game privacy policy against the SDKs and data practices in the actual production build.
- Have the legal pages reviewed for the countries where the games and website will be available.

## Deploy with Vercel

1. Sign in to Vercel with the GitHub account that can access `novasstudio/mysite`.
2. Select **Add New → Project** and import `novasstudio/mysite`.
3. Keep the framework preset as **Next.js** and the root directory as `./`.
4. No environment variables are required.
5. Select **Deploy**.

Vercel will run `npm install` and `npm run build`. The project uses static export and generates the deployable site in `out/`.

## Connect a custom domain

1. Open **Project Settings → Domains** in Vercel.
2. Add the production domain and configure the DNS records Vercel displays.
3. Wait for DNS verification and HTTPS certificate issuance.
4. Choose the apex domain or `www` as primary and redirect the other version.

If the domain is not `launchplay.games`, update `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, and `README.md` before deployment.

## Post-deployment checks

Verify the home page, all game pages, game privacy and support pages, About, Support, Contact, Privacy, Terms, `/robots.txt`, and `/sitemap.xml`. Test desktop and phone layouts, confirm the logo loads, test email links, and check the browser console.

Every later push to `main` will trigger a production deployment after Vercel's Git integration is connected. Pull requests receive preview deployments automatically.
