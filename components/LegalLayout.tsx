import type { ReactNode } from "react";

export function LegalLayout({ label, title, updated, children }: { label?: string; title: string; updated: string; children: ReactNode }) {
  return <main className="legal-page"><div className="legal-hero"><div className="container narrow">{label && <span className="eyebrow">{label}</span>}<h1>{title}</h1><p>Last updated: {updated}</p></div></div><article className="legal-content container narrow">{children}</article></main>;
}
