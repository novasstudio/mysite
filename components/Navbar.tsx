import Link from "next/link";
import { Logo } from "./Logo";

export function Navbar() {
  return <header className="nav-wrap"><nav className="nav container" aria-label="Main navigation"><Logo /><div className="nav-links"><Link href="/games">Games</Link><Link href="/about">Studio</Link><Link href="/support">Support</Link></div><Link className="nav-cta" href="/games">Play our games <span aria-hidden="true">↗</span></Link></nav></header>;
}
