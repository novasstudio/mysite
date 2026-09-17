import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
export const metadata: Metadata = { title: "Terms of Service", description: "Terms governing the use of LaunchPlay websites and games." };
export default function Terms() { return <LegalLayout label="LEGAL" title="Terms of Service" updated="September 17, 2026">
  <p>These Terms of Service govern your access to the LaunchPlay website and, where referenced, our games and related services. By using our services, you agree to these terms.</p>
  <h2>Using Our Services</h2><p>You may use our services for personal, lawful, non-commercial entertainment. You agree not to disrupt the services, attempt unauthorized access, misuse content, or use the services in violation of applicable law.</p>
  <h2>Intellectual Property</h2><p>LaunchPlay and its licensors own the games, website, artwork, branding, software, and other content made available through the services. These terms do not transfer ownership to you.</p>
  <h2>Third-Party Services</h2><p>App stores, advertisements, and external links may be operated by third parties. Their own terms and policies apply to your use of those services.</p>
  <h2>Updates and Availability</h2><p>We may update, change, suspend, or discontinue a feature or service. We do not promise that every service will always be available or free from errors.</p>
  <h2>Disclaimer</h2><p>To the extent permitted by law, services are provided “as is” and “as available,” without warranties of any kind. Nothing in these terms excludes rights that cannot legally be excluded.</p>
  <h2>Limitation of Liability</h2><p>To the extent permitted by law, LaunchPlay will not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of the services.</p>
  <h2>Changes to These Terms</h2><p>We may update these terms. Continued use after an update means you accept the revised terms where permitted by law.</p>
  <h2>Contact</h2><p>Questions about these terms may be sent to <a href="mailto:hello@launchplay.games">hello@launchplay.games</a>.</p>
  <div className="template-note"><strong>Important:</strong> These terms are a general template and are not legal advice. They should be reviewed for your actual products and distribution regions before publication.</div>
  </LegalLayout>; }
