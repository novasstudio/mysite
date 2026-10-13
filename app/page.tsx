import Link from "next/link";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";
import { GameArtwork } from "@/components/GameArtwork";

export default function Home() {
  return <main>
    <section className="hero">
      <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><i /> Independent game studio</span>
          <h1>Bright worlds.<br/><span>Bold play.</span></h1>
          <p>We make colorful mobile games with instant charm, satisfying play, and just enough magic to keep you coming back.</p>
          <div className="button-row"><Link className="button" href="/games">Discover our games <span>↗</span></Link><Link className="button button-secondary" href="/about">Meet the studio</Link></div>
          <div className="hero-proof"><b>2</b><span>Original games<br/>live worldwide</span><i /></div>
        </div>
        <div className="hero-showcase" aria-label="LaunchPlay game collection">
          <div className="showcase-card showcase-purr"><GameArtwork game={games[0]} priority /><div><GameArtwork game={games[0]} variant="icon" /><span><b>{games[0].name}</b><small>Logic, with catitude.</small></span></div></div>
          <div className="showcase-card showcase-bbq"><GameArtwork game={games[1]} priority /><div><GameArtwork game={games[1]} variant="icon" /><span><b>{games[1].name}</b><small>Build your flavor empire.</small></span></div></div>
          <span className="spark spark-a">✦</span><span className="spark spark-b">✦</span>
        </div>
      </div>
      <div className="marquee" aria-hidden="true"><span>PLAYFUL BY DESIGN</span><i>✦</i><span>BUILT WITH HEART</span><i>✦</i><span>MADE TO DELIGHT</span><i>✦</i><span>PLAYFUL BY DESIGN</span></div>
    </section>

    <section className="section games-home" id="games">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">Now playing</span><h2>Two worlds.<br/>One playful spirit.</h2><p>From clever cats to a sizzling restaurant rush, every LaunchPlay game is made to feel instantly inviting.</p></div>
        <div className="game-grid">{games.map((game, index) => <GameCard key={game.slug} game={game} index={index}/>)}</div>
      </div>
    </section>

    <section className="studio-manifesto">
      <div className="container manifesto-grid">
        <div><span className="eyebrow">The studio</span><h2>Small team.<br/>Serious spark.</h2></div>
        <div><p>LaunchPlay is an independent mobile game studio turning simple ideas into memorable, polished worlds.</p><p>We move fast, obsess over feel, and build every game around one question: <strong>does this make play more joyful?</strong></p><Link className="text-link" href="/about">Our point of view <span>↗</span></Link></div>
      </div>
      <div className="container studio-values"><div><b>01</b><span>Simple to start</span></div><div><b>02</b><span>Satisfying to master</span></div><div><b>03</b><span>Joyful to return to</span></div></div>
    </section>

    <section className="section cta-section"><div className="container"><div className="cta"><span className="eyebrow">Next level</span><h2>We&apos;re only getting started.</h2><p>New ideas are already taking shape. Follow the journey—and find your next favorite game.</p><Link className="button button-light" href="/games">Explore LaunchPlay <span>↗</span></Link><span className="cta-orbit orbit-a"/><span className="cta-orbit orbit-b"/></div></div></section>
  </main>;
}
