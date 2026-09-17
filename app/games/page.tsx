import type { Metadata } from "next";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";

export const metadata: Metadata = { title: "Our Games", description: "Discover relaxing puzzles, colorful challenges, and casual games from LaunchPlay.", alternates: { canonical: "/games/" }, openGraph: { title: "Our Games | LaunchPlay", description: "Discover relaxing puzzles, colorful challenges, and casual games from LaunchPlay.", url: "/games/" } };

export default function GamesPage() {
  return <main className="inner-page"><section className="page-hero"><div className="container"><span className="eyebrow">PLAY A LITTLE</span><h1>Our Games</h1><p>Discover relaxing puzzles, colorful challenges, and casual games from LaunchPlay.</p></div></section><section className="section"><div className="container"><div className="game-grid">{games.map((game) => <GameCard key={game.slug} game={game}/>)}</div></div></section></main>;
}
