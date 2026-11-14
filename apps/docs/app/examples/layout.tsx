import Link from "next/link";
import { ChevronLeftIcon } from "@snowztech/ui";
import { ThemeToggle } from "@snowztech/ui/client";
import { ModeToggle } from "../../components/mode-toggle";

export default function ExamplesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="ex-bar">
        <Link href="/" className="sn-btn sn-btn--ghost sn-btn--sm"><ChevronLeftIcon size={14} /> back to docs</Link>
        <div className="docs-topbar-actions">
          <span className="sn-fine">example built with @snowztech/ui</span>
          <ModeToggle />
          <ThemeToggle className="sn-theme-toggle--sm" />
        </div>
      </div>
      {children}
    </>
  );
}
