import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
export const metadata: Metadata = { title: "Privacy Policy", description: "LaunchPlay studio privacy policy.", alternates: { canonical: "/privacy/" }, openGraph: { title: "Privacy Policy | LaunchPlay", description: "LaunchPlay studio privacy policy.", url: "/privacy/" } };
export default function Privacy() { return <LegalLayout label="LEGAL" title="Privacy Policy" updated="September 17, 2026">
  <p>This Privacy Policy describes how LaunchPlay handles information when you visit our website or contact our studio. Individual games have their own privacy policies, available from each game page.</p>
  <h2>Information You Provide</h2><p>If you email us, we receive the information you choose to include, such as your email address, device details, and the contents of your message. Please do not send sensitive personal information.</p>
  <h2>Website Information</h2><p>This is a static informational website. We do not provide user accounts, payments, comments, or community features. Our hosting provider may process standard technical logs, such as IP address, browser type, and request time, for security and service operation.</p>
  <h2>How We Use Information</h2><p>We use information to respond to messages, provide player support, maintain site security, and improve our games and services. We do not sell personal information.</p>
  <h2>Third-Party Links</h2><p>Our website may link to app stores and third-party services. Their websites and privacy practices are governed by their own policies.</p>
  <h2>Data Retention and Security</h2><p>We retain correspondence only as long as reasonably needed for support, business, security, or legal purposes. We use reasonable safeguards, but no transmission or storage method is completely secure.</p>
  <h2>Your Choices</h2><p>You may contact us to ask about information you previously provided or to request deletion, subject to applicable exceptions. Availability of specific rights depends on your location.</p>
  <h2>Children&apos;s Privacy</h2><p>Our website is not intended to collect personal information from children. Parents or guardians who believe a child contacted us should email us so we can address the request.</p>
  <h2>Changes to This Policy</h2><p>We may revise this policy from time to time. Any update will be posted here with a revised “Last updated” date.</p>
  <h2>Contact</h2><p>For privacy questions, email <a href="mailto:hello@launchplay.ai">hello@launchplay.ai</a>.</p>
  <div className="template-note"><strong>Important:</strong> This policy is a general website template and is not legal advice. Review it against your actual hosting, analytics, games, SDKs, and applicable laws before publishing.</div>
  </LegalLayout>; }
