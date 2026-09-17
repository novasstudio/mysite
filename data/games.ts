export type Game = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  shortDescription: string;
  genres: string[];
  features: { title: string; description: string; icon: string }[];
  appStoreUrl: string;
  googlePlayUrl: string;
  supportEmail: string;
  theme: "sand" | "purr" | "traffic";
  privacy: {
    usesAds: boolean;
    usesAnalytics: boolean;
    usesCrashReporting: boolean;
    customSections?: { title: string; body: string }[];
  };
};

export const games: Game[] = [
  {
    slug: "sand-art-puzzle",
    name: "Sand Art Puzzle",
    tagline: "Pour color. Find your calm.",
    shortDescription: "Relax, fill, and bring colorful pictures to life.",
    description: "A soothing color puzzle where every pour reveals a tiny work of art. Take your time, find the right shades, and enjoy the satisfying finish.",
    genres: ["Puzzle", "Relaxing"],
    theme: "sand",
    appStoreUrl: "#coming-soon",
    googlePlayUrl: "#coming-soon",
    supportEmail: "support@launchplay.games",
    features: [
      { title: "Easy to Play", description: "Pick a color, pour the sand, and watch the picture appear.", icon: "tap" },
      { title: "Relaxing Gameplay", description: "Unhurried levels made for a peaceful little break.", icon: "calm" },
      { title: "Colorful Levels", description: "Bright, tactile artwork with a satisfying reveal.", icon: "color" },
      { title: "Fun Challenges", description: "Fresh pictures and clever color choices to explore.", icon: "star" },
    ],
    privacy: { usesAds: true, usesAnalytics: true, usesCrashReporting: true },
  },
  {
    slug: "purrdoku",
    name: "Purrdoku",
    tagline: "A cozy puzzle with catitude.",
    shortDescription: "A cozy cat-themed logic puzzle experience.",
    description: "Curl up with a warm, playful take on logic puzzles. Friendly felines, thoughtful challenges, and calm moments make every grid feel like home.",
    genres: ["Puzzle", "Logic"],
    theme: "purr",
    appStoreUrl: "#coming-soon",
    googlePlayUrl: "#coming-soon",
    supportEmail: "support@launchplay.games",
    features: [
      { title: "Easy to Learn", description: "Familiar logic with clear, friendly guidance.", icon: "tap" },
      { title: "Cozy Mood", description: "Soft colors and charming cats keep every session calm.", icon: "calm" },
      { title: "Daily Puzzles", description: "A fresh reason to stretch your brain each day.", icon: "color" },
      { title: "Smart Challenges", description: "A gentle difficulty curve with rewarding solutions.", icon: "star" },
    ],
    privacy: { usesAds: true, usesAnalytics: true, usesCrashReporting: false },
  },
  {
    slug: "color-traffic-jam",
    name: "Color Traffic Jam",
    tagline: "Sort the cars. Clear the way.",
    shortDescription: "Sort, solve, and clear the traffic.",
    description: "Turn a busy parking lot into a satisfying flow of color. Match riders, move the right cars, and untangle each playful traffic puzzle.",
    genres: ["Puzzle", "Casual"],
    theme: "traffic",
    appStoreUrl: "#coming-soon",
    googlePlayUrl: "#coming-soon",
    supportEmail: "support@launchplay.games",
    features: [
      { title: "One-Tap Controls", description: "Simple interactions put the whole puzzle at your fingertips.", icon: "tap" },
      { title: "Satisfying Flow", description: "Every solved jam ends in a colorful little celebration.", icon: "calm" },
      { title: "Playful Worlds", description: "Cheerful streets and bright characters in every level.", icon: "color" },
      { title: "Clever Puzzles", description: "Plan ahead as each new traffic jam adds a twist.", icon: "star" },
    ],
    privacy: { usesAds: true, usesAnalytics: true, usesCrashReporting: true },
  },
];

export function getGame(slug: string) {
  return games.find((game) => game.slug === slug);
}
