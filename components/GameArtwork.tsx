import type { Game } from "@/data/games";

export function GameArtwork({ game, variant = "card", index = 0 }: { game: Game; variant?: "card" | "hero" | "shot"; index?: number }) {
  return (
    <div className={`game-art art-${game.theme} art-${variant} shot-${index}`} role="img" aria-label={`${game.name} artwork placeholder`}>
      {game.theme === "sand" && <><span className="sun" /><span className="sand-jar"><i /><i /><i /></span><span className="mini-star s1">✦</span><span className="mini-star s2">✦</span></>}
      {game.theme === "purr" && <><span className="cat"><i /><i /><b>• ᴗ •</b></span><span className="tile t1">3</span><span className="tile t2">7</span><span className="mini-star s1">✦</span></>}
      {game.theme === "traffic" && <><span className="road" /><span className="car c1" /><span className="car c2" /><span className="car c3" /><span className="pin">●</span></>}
      {variant === "shot" && <span className="shot-label">{index === 0 ? "PLAY" : index === 1 ? "SOLVE" : "RELAX"}</span>}
    </div>
  );
}
