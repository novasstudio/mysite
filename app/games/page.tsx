import type { Metadata } from "next";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";

export const metadata: Metadata = { title: "Games", description: "Discover Purrdoku and BBQ Rush, two original mobile games from LaunchPlay.", alternates: { canonical: "/games/" } };

export default function GamesPage() {
  return <main className="inner-page"><section className="page-hero games-page-hero"><div className="container"><span className="eyebrow">The collection</span><h1>Made to play.<br/><span>Made to stay.</span></h1><p>Distinct worlds, instant charm, and gameplay that feels good from the very first tap.</p></div></section><section className="section games-list"><div className="container game-grid">{games.map((game, index) => <GameCard key={game.slug} game={game} index={index}/>)}</div></section></main>;
}
