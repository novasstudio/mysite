import Link from "next/link";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <Logo />
        <div className="nav-links">
          <Link href="/games">Games</Link>
          <Link href="/about">About</Link>
          <Link href="/support">Support</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <Link className="button button-small nav-cta" href="/games">Explore Games <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  );
}
