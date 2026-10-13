import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/data/games";
import { GameArtwork } from "@/components/GameArtwork";
export const metadata: Metadata = { title: "Game Support", description: "Find help and support for LaunchPlay games.", alternates: { canonical: "/support/" } };
export default function Support() { return <main className="inner-page"><section className="page-hero"><div className="container"><span className="eyebrow">Player care</span><h1>We&apos;ve got you.</h1><p>Choose your game for quick answers, troubleshooting, and direct support.</p></div></section><section className="section"><div className="container support-grid">{games.map(game => <article className="support-card" key={game.slug}><div className="support-icon"><GameArtwork game={game}/></div><div><div className="tags">{game.genres.map(g=><span key={g}>{g}</span>)}</div><h2>{game.name}</h2><p>{game.shortDescription}</p><Link className="text-link" href={`/games/${game.slug}/support`}>Get support <span>↗</span></Link></div></article>)}</div></section></main>; }
