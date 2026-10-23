export type Game = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  shortDescription: string;
  genres: string[];
  features: { title: string; description: string }[];
  appStoreUrl?: string;
  googlePlayUrl?: string;
  supportEmail: string;
  theme: "purr" | "bbq";
  artwork: { icon: string; hero: string; screenshots: string[] };
  privacy: { usesAds: boolean; usesAnalytics: boolean; usesCrashReporting: boolean };
};

export const games: Game[] = [
  {
    slug: "purrdoku",
    name: "Purrdoku",
    tagline: "Every cat has a perfect place.",
    shortDescription: "A cozy logic puzzle filled with colorful grids and magical cats.",
    description: "Study the grid, follow three simple rules, and find the perfect square for every magical cat. Purrdoku turns thoughtful logic into a bright, satisfying little ritual.",
    genres: ["Logic", "Puzzle"],
    theme: "purr",
    appStoreUrl: "https://apps.apple.com/app/id6813807358",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.cps.game.purrdoku",
    supportEmail: "crispy@launchplay.ai",
    artwork: {
      icon: "/games/purrdoku/icon.webp",
      hero: "/games/purrdoku/hero.webp",
      screenshots: [1, 2, 3, 4, 5].map((n) => `/games/purrdoku/shot-${n}.webp`),
    },
    features: [
      { title: "Simple rules", description: "One cat per color, row, and column—with no cats side by side." },
      { title: "Clever grids", description: "Fresh layouts reward calm observation and thoughtful moves." },
      { title: "Magical charm", description: "A vibrant world of wizard cats, soft color, and playful detail." },
      { title: "Helpful hints", description: "A gentle nudge is always nearby when a puzzle gets tricky." },
    ],
    privacy: { usesAds: true, usesAnalytics: true, usesCrashReporting: false },
  },
  {
    slug: "bbq-rush",
    name: "BBQ Rush",
    tagline: "Grill. Serve. Grow.",
    shortDescription: "Build a tiny BBQ shop into a sizzling restaurant empire.",
    description: "Fire up the grill, serve hungry guests, hire a brilliant team, and grow a humble BBQ shop into the busiest restaurant in town.",
    genres: ["Simulation", "Casual"],
    theme: "bbq",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=cps.game.bbq",
    supportEmail: "crispy@launchplay.ai",
    artwork: {
      icon: "/games/bbq-rush/icon.webp",
      hero: "/games/bbq-rush/hero.webp",
      screenshots: [1, 2, 3, 4, 5].map((n) => `/games/bbq-rush/shot-${n}.webp`),
    },
    features: [
      { title: "Run the grill", description: "Cook sizzling plates and keep every hungry customer smiling." },
      { title: "Build your team", description: "Hire and upgrade staff to make the restaurant hum." },
      { title: "Deliver more", description: "Take on delivery orders and unlock new ways to grow." },
      { title: "Become a tycoon", description: "Upgrade equipment, expand the floor, and build your BBQ empire." },
    ],
    privacy: { usesAds: true, usesAnalytics: true, usesCrashReporting: true },
  },
  {
    slug: "fluffy-forest",
    name: "Fluffy:Forest",
    tagline: "A cozy forest adventure awaits.",
    shortDescription: "Step into the gentle, fluffy world of Fluffy:Forest.",
    description: "Discover Fluffy:Forest, a cozy new game from LaunchPlay.",
    genres: ["Casual", "Adventure"],
    theme: "purr",
    supportEmail: "crispy@launchplay.ai",
    artwork: {
      icon: "/games/fluffy-forest/icon.webp",
      hero: "/games/fluffy-forest/hero.webp",
      screenshots: [1, 2, 3, 4, 5].map((n) => `/games/fluffy-forest/shot-${n}.webp`),
    },
    features: [],
    privacy: { usesAds: false, usesAnalytics: false, usesCrashReporting: false },
  },
];

export function getGame(slug: string) {
  return games.find((game) => game.slug === slug);
}
