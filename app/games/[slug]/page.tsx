import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { games, getGame } from "@/data/games";
import { GameArtwork } from "@/components/GameArtwork";

export const dynamicParams = false;
export function generateStaticParams() { return games.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const game = getGame((await params).slug); return game ? { title: game.name, description: game.shortDescription, alternates: { canonical: `/games/${game.slug}/` }, openGraph: { title: `${game.name} | LaunchPlay`, description: game.shortDescription, images: [game.artwork.hero] } } : {}; }

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const game = getGame((await params).slug); if (!game) notFound();
  return <main className={`game-page theme-${game.theme}`}>
    <section className="game-hero"><div className="container game-hero-grid">
      <div className="game-hero-copy"><div className="game-title-row"><GameArtwork game={game} variant="icon" priority/><span className="eyebrow">LaunchPlay original</span></div><h1>{game.name}</h1><h2>{game.tagline}</h2><p>{game.description}</p><div className="store-row">
        {game.appStoreUrl && <a className="store-button" href={game.appStoreUrl} target="_blank" rel="noreferrer"><small>Download on the</small><b>App Store</b></a>}
        {game.googlePlayUrl && <a className="store-button" href={game.googlePlayUrl} target="_blank" rel="noreferrer"><small>Get it on</small><b>Google Play</b></a>}
      </div></div>
      <div className="game-hero-visual"><GameArtwork game={game} variant="hero" priority/><span className="visual-sticker">{game.genres[0]}<br/><b>PLAY</b></span></div>
    </div></section>
    <section className="section screenshot-section"><div className="container"><div className="section-heading"><span className="eyebrow">Inside the game</span><h2>A world worth<br/>tapping into.</h2></div><div className="shot-grid">{game.artwork.screenshots.map((_, i) => <GameArtwork key={i} game={game} variant="shot" index={i}/>)}</div></div></section>
    <section className="section about-game"><div className="container"><div className="about-game-head"><span className="eyebrow">Why you&apos;ll love it</span><h2>Easy to pick up.<br/>Hard to leave.</h2><p>{game.description}</p></div><div className="game-feature-grid">{game.features.map((feature, i) => <div className="game-feature" key={feature.title}><span>0{i + 1}</span><h3>{feature.title}</h3><p>{feature.description}</p></div>)}</div></div></section>
    <section className="game-links"><div className="container game-links-inner"><div><span className="eyebrow">Player care</span><h2>Need a hand?</h2><p>Answers, troubleshooting, and friendly support are one tap away.</p></div><div><Link className="button button-light" href={`/games/${game.slug}/support`}>Game support <span>↗</span></Link><Link className="text-link" href={`/games/${game.slug}/privacy`}>Privacy policy <span>↗</span></Link></div></div></section>
  </main>;
}
