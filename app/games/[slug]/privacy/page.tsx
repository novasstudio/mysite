import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { games, getGame } from "@/data/games";
import { LegalLayout } from "@/components/LegalLayout";
export const dynamicParams = false;
export function generateStaticParams() { return games.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const game = getGame(slug); return game ? { title: `${game.name} Privacy Policy`, description: `Privacy policy for ${game.name} by LaunchPlay.`, alternates: { canonical: `/games/${game.slug}/privacy/` }, openGraph: { title: `${game.name} Privacy Policy | LaunchPlay`, description: `Privacy policy for ${game.name} by LaunchPlay.`, url: `/games/${game.slug}/privacy/` } } : {}; }
export default async function GamePrivacy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const game = getGame(slug); if (!game) notFound();
  return <LegalLayout label="GAME PRIVACY" title={`Privacy Policy for ${game.name}`} updated="September 17, 2026">
    <div className="template-note"><strong>Developer note:</strong> This is a privacy policy template. It must be reviewed and updated to reflect the game&apos;s actual SDKs, data practices, distribution regions, and legal requirements before publication.</div>
    <p>This Privacy Policy explains how LaunchPlay may collect, use, and protect information when you play {game.name} (the “Game”). By using the Game, you acknowledge the practices described below.</p>
    <h2>Information We Collect</h2><p>The Game may process limited technical information needed to operate, improve, and protect the experience. This may include device type, operating system, app version, language, approximate region, game events, and diagnostic information. We do not ask you to create an account for this Game.</p>
    <h2>Advertising</h2><p>{game.privacy.usesAds ? "The Game may use third-party advertising services. These providers may process device identifiers and interaction data to deliver, measure, or limit ads, subject to your device settings and applicable consent requirements." : "The current configuration indicates that the Game does not use third-party advertising services. This statement should be verified before release."}</p>
    <h2>Analytics</h2><p>{game.privacy.usesAnalytics ? "We may use analytics services to understand general gameplay patterns, stability, and feature performance. This helps us improve the Game without requiring a player account." : "The current configuration indicates that the Game does not use third-party analytics. This statement should be verified before release."}</p>
    <h2>Crash Reporting</h2><p>{game.privacy.usesCrashReporting ? "The Game may send technical crash and diagnostic reports so we can identify errors and improve reliability." : "The current configuration indicates that the Game does not use an external crash-reporting service."}</p>
    <h2>Third-Party Services</h2><p>Where third-party services are used, their processing is governed by their own privacy policies. The final published policy should name and link every provider included in the production build.</p>
    <h2>Children&apos;s Privacy</h2><p>We do not knowingly collect personal information from children in a way that is inconsistent with applicable law. If you believe a child has provided personal information, please contact us so we can review and address the request.</p>
    <h2>Data Security</h2><p>We use reasonable administrative and technical measures intended to protect information. No digital service can guarantee complete security, and data should be retained only as long as needed for the purposes described.</p>
    <h2>Changes to This Policy</h2><p>We may update this policy as the Game, its services, or legal requirements change. The date at the top of this page will show the latest revision.</p>
    <h2>Contact Us</h2><p>Questions about this policy may be sent to <a href={`mailto:${game.supportEmail}`}>{game.supportEmail}</a>.</p>
  </LegalLayout>;
}
