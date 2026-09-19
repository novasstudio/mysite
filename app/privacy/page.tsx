import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How LaunchPlay collects, uses, shares, and protects information across our website and mobile games.",
  alternates: { canonical: "/privacy/" },
  openGraph: {
    title: "Privacy Policy | LaunchPlay",
    description: "How LaunchPlay handles information across our website and mobile games.",
    url: "/privacy/",
  },
};

const sections = [
  ["scope", "1. Scope"],
  ["collection", "2. Information we collect"],
  ["use", "3. How we use information"],
  ["sharing", "4. How we share information"],
  ["choices", "5. Your rights and choices"],
  ["retention", "6. Retention and security"],
  ["transfers", "7. International transfers"],
  ["children", "8. Children’s privacy"],
  ["updates", "9. Changes to this policy"],
  ["contact", "10. Contact us"],
] as const;

export default function Privacy() {
  return (
    <LegalLayout label="LEGAL" title="Privacy Policy" updated="September 19, 2026">
      <p>
        This Privacy Policy explains how LaunchPlay (&quot;LaunchPlay,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) handles personal information when you visit launchplay.ai, play our mobile games, contact us, or use another service that links to this policy (together, the &quot;Services&quot;). It also explains the choices and rights that may be available to you.
      </p>
      <nav className="legal-toc" aria-label="Privacy policy contents">
        <strong>Contents</strong>
        <ol>{sections.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
      </nav>
      <h2 id="scope">1. Scope</h2>
      <p>
        This policy applies to the LaunchPlay website and to LaunchPlay games that link to it, including Sand Art Puzzle, Purrdoku, and Color Traffic Jam. A game-specific notice may provide additional details and will control if it conflicts with this general policy. This policy does not cover third-party services that we do not control, such as app stores, advertising networks, or websites reached through external links.
      </p>
      <h2 id="collection">2. Information we collect</h2>
      <p>What we collect depends on the Service and the features you use. A category listed below may not apply to every game.</p>
      <h3>Information you provide</h3>
      <ul>
        <li><strong>Support and contact information:</strong> your email address, message, attachments, game name, device details, and any other information you choose to send when requesting support or contacting the studio.</li>
        <li><strong>Feedback and promotions:</strong> responses, contact details, and other information you submit if you take part in a survey, playtest, contest, or similar activity.</li>
        <li><strong>Account information:</strong> if a Service offers an account or sign-in feature, it may receive a display name, profile image, email address, or platform identifier from you or the sign-in provider.</li>
      </ul>
      <h3>Information collected automatically</h3>
      <ul>
        <li><strong>Device and app data:</strong> device model, operating system and version, language, time zone, app version, package identifier, and mobile carrier.</li>
        <li><strong>Identifiers and approximate location:</strong> an in-game or installation identifier, device identifiers, advertising identifiers where permitted, IP address, and country or region inferred from IP address or device settings. We do not seek to collect precise GPS location.</li>
        <li><strong>Gameplay and usage data:</strong> progress, levels, scores, achievements, feature interactions, session dates and duration, preferences, and ad events such as requests, impressions, or clicks.</li>
        <li><strong>Diagnostics:</strong> crash reports, error logs, performance information, and related technical data. Purrdoku is currently configured without external crash reporting; our other listed games may use it.</li>
      </ul>
      <h3>Information from other services</h3>
      <p>
        Apple App Store, Google Play, sign-in providers, advertising partners, and similar services may provide us with information such as a platform user ID, purchase or subscription status, product identifier, receipt or order identifier, and transaction time. Payment card and bank information is processed by the app store or payment provider, not by LaunchPlay.
      </p>
      <p>
        Our website is informational and does not currently offer accounts, comments, or direct payments. Its hosting provider may process standard request logs, including IP address, browser type, requested page, and request time, to deliver and secure the site.
      </p>
      <h2 id="use">3. How we use information</h2>
      <p>We may use information to:</p>
      <ul>
        <li>operate the Services, save progress and preferences, provide requested features, and process app-store purchases;</li>
        <li>answer questions, troubleshoot problems, and provide player support;</li>
        <li>measure gameplay, diagnose crashes, improve performance, develop features, and understand how the Services are used;</li>
        <li>show, limit, measure, and attribute advertising where a game includes ads and applicable law permits it;</li>
        <li>protect players and the Services, prevent fraud or abuse, enforce our terms, and comply with legal obligations; and</li>
        <li>carry out another purpose disclosed when information is collected, with your consent where required.</li>
      </ul>
      <p>
        Where applicable law requires a legal basis, we rely on performance of our contract with you, our legitimate interests in operating and improving the Services, compliance with legal obligations, or your consent. You may withdraw consent at any time, without affecting earlier processing.
      </p>
      <h2 id="sharing">4. How we share information</h2>
      <p>We do not sell personal information for money. We may disclose limited information:</p>
      <ul>
        <li><strong>To service providers:</strong> companies that provide hosting, analytics, crash reporting, customer support, security, and other services on our behalf.</li>
        <li><strong>To advertising partners:</strong> when a game contains advertising, partners may receive identifiers, device data, approximate location, and ad interaction data to deliver and measure ads. Under some US state laws, interest-based advertising may be considered a &quot;sale&quot; or &quot;sharing.&quot;</li>
        <li><strong>To app stores and platforms:</strong> as needed to distribute a game, validate a purchase, provide platform features, or respond to a support issue.</li>
        <li><strong>For legal and safety reasons:</strong> when reasonably necessary to comply with law or valid legal process, protect rights and safety, investigate abuse, or enforce our agreements.</li>
        <li><strong>For a business transaction:</strong> in connection with a merger, financing, acquisition, reorganization, or sale of assets, subject to appropriate safeguards.</li>
        <li><strong>With your direction or consent.</strong></li>
      </ul>
      <p>Third parties process information under their own policies when they act independently from LaunchPlay.</p>
      <h2 id="choices">5. Your rights and choices</h2>
      <p>
        Depending on where you live, you may have the right to request access to, correction of, deletion of, or a portable copy of personal information; restrict or object to processing; withdraw consent; opt out of targeted advertising or certain disclosures; and appeal a refusal to act on a request. We will not discriminate against you for exercising a privacy right.
      </p>
      <ul>
        <li>Use your device settings to reset or limit advertising identifiers and app permissions.</li>
        <li>Use any consent or privacy controls made available in the relevant game or platform.</li>
        <li>Uninstalling a game removes data stored only on that device, but does not necessarily delete information already held by a service provider.</li>
        <li>Email <a href="mailto:hello@launchplay.ai?subject=Privacy%20Rights%20Request">hello@launchplay.ai</a> with the subject &quot;Privacy Rights Request&quot; to submit a request. Include the game name, player or installation ID if available, your country or state, and the right you wish to exercise. Do not send a password or full payment-card number.</li>
      </ul>
      <p>
        We may ask for information reasonably necessary to verify your identity or authority. An authorized agent may submit a request where permitted by law, but we may require proof of authorization. Legal exceptions may allow or require us to retain certain information. Residents of the EEA, United Kingdom, or Switzerland may also complain to their local data protection authority.
      </p>
      <h2 id="retention">6. Retention and security</h2>
      <p>
        We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including providing the Services, resolving support requests, meeting legal and accounting obligations, preventing fraud, and resolving disputes. Retention periods vary by data type and context. We use reasonable administrative and technical safeguards, but no system or transmission method can be guaranteed to be completely secure.
      </p>
      <h2 id="transfers">7. International transfers</h2>
      <p>
        LaunchPlay and its service providers may process information in countries other than the country where you live. Where required, we use recognized safeguards for these transfers. Privacy and data-protection laws may differ between countries.
      </p>
      <h2 id="children">8. Children&apos;s privacy</h2>
      <p>
        The Services are intended for a general audience and are not directed to children under 13, or the higher minimum age required in their location. We do not knowingly collect personal information from a child without any consent required by law. A parent or guardian who believes a child provided personal information should email <a href="mailto:hello@launchplay.ai?subject=Child%20Data%20Request">hello@launchplay.ai</a> with the subject &quot;Child Data Request&quot; and include the game name and any available player or installation ID. We may take reasonable steps to verify the requester&apos;s identity and relationship to the child before acting.
      </p>
      <h2 id="updates">9. Changes to this policy</h2>
      <p>
        We may update this policy as our Services or legal obligations change. We will post the revised policy here, update the date above, and provide additional notice when required. If you do not agree with an updated policy, stop using the affected Service.
      </p>
      <h2 id="contact">10. Contact us</h2>
      <p>
        For privacy questions or requests, email <a href="mailto:hello@launchplay.ai">hello@launchplay.ai</a>. For help with a specific title, visit <Link href="/support">Game Support</Link> or email <a href="mailto:support@launchplay.ai">support@launchplay.ai</a>. Please identify the relevant game in your message.
      </p>
    </LegalLayout>
  );
}
