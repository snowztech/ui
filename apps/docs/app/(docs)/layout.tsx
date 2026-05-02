import Link from "next/link";
import { Monogram, MarkCrystal, GithubIcon } from "@snowztech/ui";
import { ThemeToggle } from "@snowztech/ui/client";

const docsLinks = [
  { href: "/", label: "overview" },
  { href: "/install", label: "install" },
  { href: "/logo-lab", label: "logo lab" },
];

const apiLinks = [
  { href: "/tokens", label: "tokens" },
  { href: "/components", label: "components" },
  { href: "/icons", label: "icons" },
];

const exampleLinks = [
  { href: "/examples/link-in-bio", label: "link in bio" },
  { href: "/examples/personal-page", label: "personal page" },
  { href: "/examples/saas-landing", label: "saas landing" },
  { href: "/examples/dashboard", label: "dashboard" },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="docs-shell">
      <aside className="docs-nav">
        <Link href="/" className="docs-brand">
          <Monogram size={32} mark={MarkCrystal} radius={6} glyphScale={0.6} />
          <div className="docs-brand-text">
            <span className="docs-brand-name">snowztech<span style={{ color: "var(--sn-fg-muted)" }}>/ui</span></span>
            <span className="docs-brand-version">v0.0.1</span>
          </div>
        </Link>

        <h2>docs</h2>
        {docsLinks.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
        <h2>api</h2>
        {apiLinks.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
        <h2>examples</h2>
        {exampleLinks.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}

        <div className="docs-nav-footer">
          <a
            href="https://github.com/snowztech/ui"
            target="_blank"
            rel="noreferrer"
            className="docs-footer-link"
          >
            <GithubIcon size={14} /> github
          </a>
        </div>
      </aside>

      <div className="docs-content">
        <header className="docs-topbar">
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <span style={{ color: "var(--sn-fg-faint)", fontSize: "var(--sn-text-2xs)" }}>
              v0.0.1
            </span>
          </div>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <a
              href="https://github.com/snowztech/ui"
              target="_blank"
              rel="noreferrer"
              aria-label="github"
              className="docs-icon-btn"
            >
              <GithubIcon size={16} />
            </a>
            <ThemeToggle />
          </div>
        </header>
        <main className="docs-main">{children}</main>
      </div>
    </div>
  );
}
