import Link from "next/link";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";
import { SectionTitle } from "@/components/SectionTitle";
import { GameArtwork } from "@/components/GameArtwork";

export default function Home() {
  return <main>
    <section className="hero">
      <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><i>✦</i> Independent mobile game studio</span>
          <h1>Small Games.<br/><span>Big Joy.</span></h1>
          <p>We create simple, colorful, and relaxing mobile games designed to bring a little joy to every day.</p>
          <div className="button-row"><Link className="button" href="/games">Explore Our Games <span>→</span></Link><Link className="button button-secondary" href="/about">About LaunchPlay</Link></div>
          <div className="hero-note"><span className="tiny-faces">● ● ●</span><span>Thoughtfully made for<br/>little moments of calm</span></div>
        </div>
        <div className="hero-visual" aria-label="A playful collection of LaunchPlay game worlds">
          <div className="float-card card-back"><GameArtwork game={games[1]} /></div>
          <div className="float-card card-main"><GameArtwork game={games[0]} /></div>
          <div className="float-card card-front"><GameArtwork game={games[2]} /></div>
          <span className="floating-piece piece-star">✦</span><span className="floating-piece piece-dot"/><span className="floating-piece piece-pill"/>
        </div>
      </div>
      <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><i>↓</i></div>
    </section>

    <section className="section games-home">
      <div className="container"><div className="section-heading-row"><SectionTitle eyebrow="OUR GAMES" title="Simple to play. Hard to put down." text="Colorful puzzles and calming challenges, made with care for players everywhere."/><Link className="text-link all-games" href="/games">See all games <span>→</span></Link></div>
      <div className="game-grid">{games.map((game) => <GameCard key={game.slug} game={game}/>)}</div></div>
    </section>

    <section className="section philosophy">
      <div className="container"><SectionTitle eyebrow="WHY LAUNCHPLAY" title="Little things make a big difference." align="center"/>
      <div className="feature-grid">
        <div className="feature-card"><div className="feature-icon icon-tap">⌁</div><h3>Easy to Play</h3><p>Simple controls and intuitive experiences that feel good from the first tap.</p></div>
        <div className="feature-card featured"><div className="feature-icon icon-calm">☼</div><h3>Relaxing by Design</h3><p>Thoughtful games designed to help players slow down, unwind, and enjoy the moment.</p></div>
        <div className="feature-card"><div className="feature-icon icon-joy">✦</div><h3>Made with Joy</h3><p>Colorful worlds, satisfying interactions, and playful details in every experience.</p></div>
      </div></div>
    </section>

    <section className="section studio-section"><div className="container studio-grid">
      <div className="studio-art"><div className="joy-window"><span className="cloud c-a"/><span className="cloud c-b"/><span className="joy-smile">⌣</span><span className="joy-sun">✦</span><span className="hill h-a"/><span className="hill h-b"/></div><span className="studio-badge">Made with<br/><b>JOY</b></span></div>
      <div className="studio-copy"><span className="eyebrow">THE STUDIO</span><h2>Games made for<br/>everyday joy.</h2><p>LaunchPlay is an independent mobile game studio focused on creating simple, polished, and enjoyable casual experiences.</p><p>Our goal is simple: create games that are easy to understand, satisfying to play, and fun to come back to.</p><Link className="text-link" href="/about">Meet LaunchPlay <span>→</span></Link>
      <div className="studio-stats"><div><b>Casual</b><span>GAMES</span></div><div><b>Mobile</b><span>FIRST</span></div><div><b>Worldwide</b><span>PLAYERS</span></div><div><b>More</b><span>COMING SOON</span></div></div></div>
    </div></section>

    <section className="section cta-wrap"><div className="container"><div className="cta"><span className="cta-shape cs1">✦</span><span className="cta-shape cs2">●</span><span className="cta-shape cs3">⌁</span><span className="eyebrow light">YOUR NEXT FAVORITE GAME</span><h2>Ready for a little more joy?</h2><p>Discover colorful puzzles, relaxing moments, and plenty of reasons to smile.</p><Link className="button button-white" href="/games">Explore Games <span>→</span></Link></div></div></section>
  </main>;
}
