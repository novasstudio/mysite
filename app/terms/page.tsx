import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of LaunchPlay websites and mobile games.",
  alternates: { canonical: "/terms/" },
  openGraph: {
    title: "Terms of Service | LaunchPlay",
    description: "Terms governing the use of LaunchPlay websites and mobile games.",
    url: "/terms/",
  },
};

export default function Terms() {
  return (
    <LegalLayout label="LEGAL" title="Terms of Service" updated="September 19, 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) are an agreement between you and LaunchPlay (&quot;LaunchPlay,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). They govern your use of launchplay.ai, our mobile games&mdash;including Sand Art Puzzle, Purrdoku, and Color Traffic Jam&mdash;and any related service that links to these Terms (together, the &quot;Services&quot;). By using a Service, you agree to these Terms. If you do not agree, do not use the Service.
      </p>
      <h2>1. Eligibility</h2>
      <p>
        You must be legally able to enter into these Terms. If you are under the age of legal majority where you live, a parent or legal guardian must review and agree to these Terms for you. A Service may impose a higher minimum age, including as described in our Privacy Policy or an app-store listing.
      </p>
      <h2>2. License to use the Services</h2>
      <p>
        Subject to these Terms, LaunchPlay grants you a limited, personal, non-exclusive, non-transferable, non-sublicensable, revocable license to download and use our games on devices you own or control for lawful, non-commercial entertainment. You receive a license to use the Services; no ownership rights are transferred to you.
      </p>
      <h2>3. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the Services unlawfully, fraudulently, or in a way that infringes another person&apos;s rights;</li>
        <li>cheat, exploit bugs, automate play, manipulate scores or rewards, or interfere with normal gameplay;</li>
        <li>reverse engineer, decompile, modify, distribute, sell, lease, or create derivative works from a Service except where applicable law expressly permits it;</li>
        <li>access or test systems without authorization, bypass security, introduce malware, overload infrastructure, or disrupt another player&apos;s use;</li>
        <li>remove proprietary notices or use LaunchPlay names, logos, art, or other content without permission; or</li>
        <li>help another person do any of the above.</li>
      </ul>
      <h2>4. Accounts and game progress</h2>
      <p>
        Some Services may offer accounts, cloud saves, or platform sign-in. You are responsible for keeping access credentials secure and for activity under your account. Tell us promptly if you suspect unauthorized access. Local-only progress may be lost if you uninstall a game, clear its data, change devices, or lose the device. We cannot guarantee recovery unless a Service expressly includes a supported backup or synchronization feature.
      </p>
      <h2>5. Purchases, subscriptions, and virtual items</h2>
      <p>
        A Service may offer virtual items, ad removal, subscriptions, or other paid features. Prices and available features are shown before purchase. Payments, billing, cancellations, and refunds are handled by the app store through which you purchased and are subject to that store&apos;s terms, mandatory consumer law, and any product-specific terms shown at purchase.
      </p>
      <p>
        Virtual items and currency are licensed, have no cash value, cannot be redeemed for money, and may not be sold or transferred unless the Service expressly allows it. We may change or discontinue virtual content as reasonably necessary to operate the Service, subject to applicable law. If a subscription renews automatically, the store will disclose the price and renewal period and provide cancellation controls in your store account.
      </p>
      <h2>6. Advertising and third-party services</h2>
      <p>
        Games may display third-party advertising or link to app stores, websites, or services we do not control. Third parties may apply their own terms and privacy policies. LaunchPlay is not responsible for third-party content, availability, or practices, although this does not limit rights that cannot legally be excluded.
      </p>
      <h2>7. Intellectual property</h2>
      <p>
        The Services—including their software, game mechanics as protected by law, artwork, audio, text, characters, designs, trademarks, and other content—are owned by LaunchPlay or its licensors and are protected by intellectual-property laws. Feedback you voluntarily provide may be used by us without restriction or payment, but you keep ownership of any rights you already hold in that feedback.
      </p>
      <h2>8. Updates, availability, and termination</h2>
      <p>
        We may patch, update, change, suspend, or discontinue all or part of a Service for technical, security, legal, business, or gameplay reasons. Updates may be required to continue using a Service. We may restrict or terminate access if you materially or repeatedly breach these Terms, create risk or legal exposure, or misuse a Service. You may stop using the Services at any time. Provisions that by their nature should survive termination—including ownership, disclaimers, liability limits, and dispute terms—will survive.
      </p>
      <h2>9. Privacy</h2>
      <p>
        Our <Link href="/privacy">Privacy Policy</Link> explains how we handle personal information. A game-specific privacy notice may provide additional details for that title.
      </p>
      <h2>10. Disclaimers</h2>
      <p>
        To the fullest extent permitted by law, the Services are provided &quot;as is&quot; and &quot;as available.&quot; LaunchPlay disclaims implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. We do not promise uninterrupted, secure, or error-free operation, or that progress and data will never be lost. Nothing in these Terms limits warranties or consumer rights that cannot lawfully be excluded.
      </p>
      <h2>11. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, LaunchPlay and its licensors and service providers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, data, goodwill, or opportunities arising from the Services. Where liability cannot be excluded, it will be limited to the greater of the amount you paid to LaunchPlay for the affected Service during the 12 months before the event giving rise to the claim or US$50. These limitations do not apply where prohibited by law or to liability that cannot legally be limited.
      </p>
      <h2>12. Governing law and disputes</h2>
      <p>
        Before filing a formal claim, you and LaunchPlay agree to try in good faith to resolve the dispute informally for 30 days. Send a notice describing the issue and requested resolution to <a href="mailto:hello@launchplay.ai?subject=Legal%20Notice">hello@launchplay.ai</a>. The governing law and courts will be those applicable to LaunchPlay&apos;s registered business location, without overriding mandatory rights or courts available to consumers under local law. These Terms do not currently require individual arbitration or waive participation in a class action.
      </p>
      <h2>13. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. We will post the revised Terms here, change the date above, and provide additional notice when required. Changes apply from their stated effective date. If you do not agree to an update, stop using the affected Service.
      </p>
      <h2>14. General terms</h2>
      <p>
        If a provision is unenforceable, the remaining provisions remain effective and the affected provision will be enforced to the maximum extent allowed. Our failure to enforce a provision is not a waiver. You may not assign these Terms without our written consent; we may assign them as part of a reorganization, merger, acquisition, or sale of assets. These Terms, the Privacy Policy, and any product-specific terms form the entire agreement about the Services.
      </p>
      <h2>15. Contact</h2>
      <p>
        For questions about these Terms, email <a href="mailto:hello@launchplay.ai">hello@launchplay.ai</a>. For help with a game, visit <Link href="/support">Game Support</Link> or email <a href="mailto:support@launchplay.ai">support@launchplay.ai</a> and include the game name.
      </p>
    </LegalLayout>
  );
}
