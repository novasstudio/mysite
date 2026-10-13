import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return <footer className="footer"><div className="container footer-top"><div><Logo /><h2>More play.<br/>More possibility.</h2></div><div className="footer-links" aria-label="Footer navigation"><span>Explore</span><Link href="/games">Games</Link><Link href="/about">Studio</Link><Link href="/support">Support</Link></div><div className="footer-links"><span>Info</span><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div><div className="container footer-bottom"><span>© 2026 Crispy Cravings LLC. All rights reserved.</span><span>LaunchPlay · Independent game studio</span></div></footer>;
}
