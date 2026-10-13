import Link from "next/link";
import type { Game } from "@/data/games";
import { GameArtwork } from "./GameArtwork";

export function GameCard({ game, index = 0 }: { game: Game; index?: number }) {
  return <article className={`game-card theme-${game.theme}`}>
    <Link href={`/games/${game.slug}`} className="game-card-art" aria-label={`Explore ${game.name}`}><GameArtwork game={game} /><span className="game-number">0{index + 1}</span></Link>
    <div className="game-card-body">
      <div className="game-card-title"><div><div className="tags">{game.genres.map((genre) => <span key={genre}>{genre}</span>)}</div><h3>{game.name}</h3></div><Link href={`/games/${game.slug}`} aria-label={`Explore ${game.name}`} className="round-link">↗</Link></div>
      <p>{game.shortDescription}</p>
    </div>
  </article>;
}
