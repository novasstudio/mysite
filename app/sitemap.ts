import type { MetadataRoute } from "next";
import { games } from "@/data/games";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://launchplay.ai";
  const routes = ["", "/games", "/about", "/support", "/contact", "/privacy", "/terms"].map(path => ({ url: `${base}${path || "/"}${path ? "/" : ""}`, lastModified: new Date("2026-09-17"), changeFrequency: "monthly" as const, priority: path === "" ? 1 : .7 }));
  const gameRoutes = games.flatMap(game => [
    { url: `${base}/games/${game.slug}/`, lastModified: new Date("2026-09-17"), changeFrequency: "monthly" as const, priority: .8 },
    { url: `${base}/games/${game.slug}/privacy/`, lastModified: new Date("2026-09-17"), changeFrequency: "yearly" as const, priority: .4 },
    { url: `${base}/games/${game.slug}/support/`, lastModified: new Date("2026-09-17"), changeFrequency: "monthly" as const, priority: .5 },
  ]);
  return [...routes, ...gameRoutes];
}
