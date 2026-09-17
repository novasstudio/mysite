import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><Logo /><p>Small games for big little moments.</p></div>
        <div className="footer-links" aria-label="Footer navigation">
          <Link href="/games">Games</Link><Link href="/about">About</Link><Link href="/support">Support</Link>
          <Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="container footer-bottom"><span>© 2026 LaunchPlay. All rights reserved.</span><span>Made for play <span className="footer-spark">✦</span></span></div>
    </footer>
  );
}
