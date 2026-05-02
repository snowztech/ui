import Link from "next/link";
import { MarkCrystal, ChevronLeftIcon } from "@snowztech/ui";
import { ThemeToggle } from "@snowztech/ui/client";

export default function ExamplesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{
        position: "sticky", top: 0, zIndex: 50,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "10px 20px",
        borderBottom: "1px solid var(--sn-border)",
        background: "var(--sn-bg)",
        fontSize: "var(--sn-text-xs)",
      }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--sn-fg-muted)" }}>
          <ChevronLeftIcon size={14} />
          <span>back to docs</span>
        </Link>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 16, color: "var(--sn-fg-faint)" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <MarkCrystal size={14} />
            <span>example · built with @snowztech/ui</span>
          </span>
          <ThemeToggle />
        </div>
      </div>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}
