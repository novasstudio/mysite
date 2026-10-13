import Image from "next/image";
import type { Game } from "@/data/games";

export function GameArtwork({ game, variant = "card", index = 0, priority = false }: { game: Game; variant?: "icon" | "card" | "hero" | "shot"; index?: number; priority?: boolean }) {
  const src = variant === "icon" ? game.artwork.icon : variant === "shot" ? game.artwork.screenshots[index] : game.artwork.hero;
  return <span className={`game-art game-art-${variant}`}><Image src={src} alt={variant === "shot" ? `${game.name} gameplay screenshot ${index + 1}` : `${game.name} artwork`} fill sizes={variant === "shot" ? "(max-width: 720px) 76vw, 320px" : "(max-width: 720px) 92vw, 640px"} priority={priority} /></span>;
}
