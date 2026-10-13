import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact", description: "Contact LaunchPlay and Crispy Cravings LLC.", alternates: { canonical: "/contact/" } };

export default function Contact() {
  return <main className="inner-page contact-page"><section className="page-hero"><div className="container"><span className="eyebrow">Open line</span><h1>Let&apos;s make<br/><span>something happen.</span></h1><p>Players, partners, and fellow game makers—we&apos;d love to hear from you.</p></div></section><section className="section"><div className="container contact-grid company-contact-grid"><a className="contact-card" href="mailto:crispy@launchplay.ai"><span className="contact-index">01</span><span className="contact-label">Email</span><h2>crispy@launchplay.ai</h2><p>Player support, partnerships, press, and general inquiries.</p><b>Send an email <span>↗</span></b></a><div className="contact-card company-card"><span className="contact-index">02</span><span className="contact-label">Company</span><h2>Crispy Cravings LLC</h2><address>318 Cambridge Ave<br/>Palo Alto, CA 94306<br/>United States</address></div></div></section></main>;
}
