"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  { title: "docs", links: [["/", "overview"], ["/identity", "identity"], ["/install", "install"]] },
  { title: "api", links: [["/tokens", "tokens"], ["/components", "components"], ["/states", "states"], ["/icons", "icons"]] },
  { title: "examples", links: [["/examples/personal-page", "personal page"], ["/examples/saas-landing", "saas landing"]] },
] as const;

export function DocsNav() {
  const path = usePathname();
  return (
    <nav className="sn-navlist" aria-label="Docs">
      {sections.map((s) => (
        <React.Fragment key={s.title}>
          <h2 className="sn-navlist__title">{s.title}</h2>
          {s.links.map(([href, label]) => (
            <Link key={href} href={href} aria-current={path === href ? "page" : undefined}>{label}</Link>
          ))}
        </React.Fragment>
      ))}
    </nav>
  );
}
