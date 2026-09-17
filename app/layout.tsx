import type { Metadata } from "next";
import { Manrope, Nunito_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-display" });
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://launchplay.games"),
  title: { default: "LaunchPlay | Casual Mobile Games", template: "%s | LaunchPlay" },
  description: "LaunchPlay creates simple, colorful and relaxing mobile games, including casual and puzzle games for players around the world.",
  openGraph: { title: "LaunchPlay", description: "Small games. Big joy.", url: "https://launchplay.games", siteName: "LaunchPlay", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${manrope.variable} ${nunito.variable}`}><body><Navbar />{children}<Footer /></body></html>;
}
