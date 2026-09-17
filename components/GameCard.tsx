import Link from "next/link";
import type { Game } from "@/data/games";
import { GameArtwork } from "./GameArtwork";

export function GameCard({ game }: { game: Game }) {
  return (
    <article className="game-card">
      <Link href={`/games/${game.slug}`} className="game-card-art" aria-label={`View ${game.name}`}><GameArtwork game={game} /></Link>
      <div className="game-card-body">
        <div className="tags">{game.genres.map((genre) => <span key={genre}>{genre}</span>)}</div>
        <h3>{game.name}</h3><p>{game.shortDescription}</p>
        <Link className="text-link" href={`/games/${game.slug}`}>View game <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
