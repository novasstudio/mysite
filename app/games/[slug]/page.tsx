import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { games, getGame } from "@/data/games";
import { GameArtwork } from "@/components/GameArtwork";

export const dynamicParams = false;
export function generateStaticParams() { return games.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const game = getGame(slug); return game ? { title: game.name, description: game.shortDescription, alternates: { canonical: `/games/${game.slug}/` }, openGraph: { title: `${game.name} | LaunchPlay`, description: game.shortDescription, url: `/games/${game.slug}/` } } : {}; }

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const game = getGame(slug); if (!game) notFound();
  return <main className={`game-page theme-${game.theme}`}>
    <section className="game-hero"><div className="container game-hero-grid"><div className="game-hero-copy"><div className="game-icon"><GameArtwork game={game}/></div><div className="tags">{game.genres.map(g => <span key={g}>{g}</span>)}</div><h1>{game.name}</h1><h2>{game.tagline}</h2><p>{game.description}</p><div className="store-row"><a className="store-button" href={game.appStoreUrl} aria-label={`${game.name} on the App Store`}><small>Download on the</small><b>App Store</b></a><a className="store-button" href={game.googlePlayUrl} aria-label={`${game.name} on Google Play`}><small>GET IT ON</small><b>Google Play</b></a></div><span className="coming-note" id="coming-soon">Store links coming soon</span></div><div className="game-phone"><div className="phone-shell"><span className="phone-speaker"/><GameArtwork game={game} variant="hero"/></div><span className="phone-spark">✦</span></div></div></section>
    <section className="section screenshot-section"><div className="container"><div className="mini-heading"><span className="eyebrow">A CLOSER LOOK</span><h2>Playful from every angle.</h2></div><div className="shot-grid">{[0,1,2].map(i => <GameArtwork key={i} game={game} variant="shot" index={i}/>)}</div></div></section>
    <section className="section about-game"><div className="container"><div className="about-game-head"><span className="eyebrow">ABOUT THE GAME</span><h2>A small escape,<br/>right in your pocket.</h2><p>{game.description}</p></div><div className="game-feature-grid">{game.features.map((f, i) => <div className="game-feature" key={f.title}><span>{["↟","☼","◉","✦"][i]}</span><h3>{f.title}</h3><p>{f.description}</p></div>)}</div></div></section>
    <section className="game-links"><div className="container game-links-inner"><div><h2>Need a hand?</h2><p>Find answers, troubleshooting tips, and ways to reach us.</p></div><div><Link className="button button-secondary" href={`/games/${game.slug}/support`}>Game Support</Link><Link className="text-link" href={`/games/${game.slug}/privacy`}>Privacy Policy <span>→</span></Link></div></div></section>
  </main>;
}
