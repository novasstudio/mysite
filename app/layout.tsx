import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://launchplay.ai"),
  title: { default: "LaunchPlay | Bright Worlds. Bold Play.", template: "%s | LaunchPlay" },
  description: "LaunchPlay is an independent mobile game studio creating colorful, polished games for players everywhere.",
  alternates: { canonical: "/" },
  openGraph: { title: "LaunchPlay | Bright Worlds. Bold Play.", description: "An independent mobile game studio creating colorful, polished games.", url: "https://launchplay.ai", siteName: "LaunchPlay", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}><body><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><div id="main-content">{children}</div><Footer /></body></html>;
}
