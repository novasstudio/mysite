import Link from "next/link";
import Image from "next/image";
import brandLogo from "@/logo.png";

export function Logo() {
  return (
    <Link className="brand" href="/" aria-label="LaunchPlay home">
      <span className="brand-mark brand-image" aria-hidden="true"><Image src={brandLogo} alt="" priority sizes="44px" /></span>
      <span className="brand-type"><strong>Launch<span>Play</span></strong><small>GAMES</small></span>
    </Link>
  );
}
