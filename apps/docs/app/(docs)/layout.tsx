import * as React from "react";
import Link from "next/link";
import { Monogram, MarkSnowflake, GithubIcon, MenuIcon } from "@snowztech/ui";
import { ThemeToggle } from "@snowztech/ui/client";
import pkg from "@snowztech/ui/package.json";
import { ModeToggle } from "../../components/mode-toggle";
import { DocsNav } from "../../components/docs-nav";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="docs-shell">
      <input type="checkbox" id="docs-nav-toggle" className="docs-nav-toggle-input" aria-hidden="true" />
      <aside className="docs-nav">
        <Link href="/" className="docs-brand">
          <Monogram size={32} mark={MarkSnowflake} radius={6} glyphScale={0.6} />
          <div className="docs-brand-text">
            <span className="docs-brand-name">snowztech<span style={{ color: "var(--sn-fg-muted)" }}>/ui</span></span>
            <span className="docs-brand-version">v{pkg.version}</span>
          </div>
        </Link>
        <DocsNav />
      </aside>

      <label htmlFor="docs-nav-toggle" className="docs-nav-backdrop" aria-hidden="true" />

      <div className="docs-content">
        <header className="docs-topbar">
          <label htmlFor="docs-nav-toggle" className="sn-icon-btn sn-icon-btn--sm docs-nav-toggle-btn" aria-label="toggle navigation">
            <MenuIcon size={16} />
          </label>
          <div className="docs-topbar-actions">
            <ModeToggle />
            <a href="/demo.html" target="_blank" rel="noreferrer" className="sn-btn sn-btn--ghost sn-btn--sm">demo</a>
            <a href="https://github.com/snowztech/ui" target="_blank" rel="noreferrer" aria-label="github" className="sn-icon-btn sn-icon-btn--sm">
              <GithubIcon size={16} />
            </a>
            <ThemeToggle className="sn-theme-toggle--sm" />
          </div>
        </header>
        <main className="docs-main">{children}</main>
      </div>
    </div>
  );
}
