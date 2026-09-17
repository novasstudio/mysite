import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link className="brand" href="/" aria-label="LaunchPlay home">
      <span className="brand-mark brand-image" aria-hidden="true"><Image src="/brand/logo.png" width={128} height={128} alt="" priority sizes="44px" /></span>
      <span className="brand-type"><strong>Launch<span>Play</span></strong><small>GAMES</small></span>
    </Link>
  );
}
