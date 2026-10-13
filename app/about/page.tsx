import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/data/games";
import { GameArtwork } from "@/components/GameArtwork";

export const metadata: Metadata = { title: "Studio", description: "Meet LaunchPlay, an independent mobile game studio building bright, polished worlds.", alternates: { canonical: "/about/" } };

export default function About() {
  return <main className="inner-page about-page"><section className="page-hero about-hero"><div className="container"><span className="eyebrow">This is LaunchPlay</span><h1>We build the kind of games<br/><span>we want to keep playing.</span></h1><p>Independent in spirit. Global in ambition. Playful down to the smallest detail.</p></div></section>
    <section className="section"><div className="container about-story"><div className="story-copy"><span className="eyebrow">Our story</span><h2>A young studio with a clear point of view.</h2><p>LaunchPlay began with a simple belief: a mobile game doesn&apos;t need to be complicated to feel special.</p><p>It needs a strong idea, a world with personality, and hundreds of thoughtful decisions that players may never notice—but always feel.</p><p>Today, we&apos;re a growing independent studio with two original games out in the world and many more ideas on the way.</p><Link className="text-link" href="/games">See what we&apos;ve made <span>↗</span></Link></div><div className="story-collage"><div><GameArtwork game={games[0]} /></div><div><GameArtwork game={games[1]} /></div></div></div></section>
    <section className="section values"><div className="container"><div className="section-heading"><span className="eyebrow">Our principles</span><h2>Built differently.<br/>Felt instantly.</h2></div><div className="value-grid"><div><span>01</span><h3>Clarity first</h3><p>The best games invite you in without getting in your way.</p></div><div><span>02</span><h3>Feel matters</h3><p>Every tap, transition, and tiny reward should feel considered.</p></div><div><span>03</span><h3>Joy is serious</h3><p>Color, character, and delight are core to the experience.</p></div></div></div></section>
  </main>;
}
