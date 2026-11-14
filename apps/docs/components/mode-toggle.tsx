"use client";

import * as React from "react";
import { Segmented } from "@snowztech/ui/client";

type Mode = "frost" | "powder";

// Docs-only tool: flips data-sn-mode on <html> so every page can be checked in
// both modes. Product sites pick one and never show this.
export function ModeToggle() {
  const [mode, setMode] = React.useState<Mode>("frost");

  React.useEffect(() => {
    setMode(document.documentElement.dataset.snMode === "powder" ? "powder" : "frost");
  }, []);

  const pick = (m: Mode) => {
    setMode(m);
    if (m === "powder") document.documentElement.dataset.snMode = "powder";
    else delete document.documentElement.dataset.snMode;
    try { localStorage.setItem("mode", m); } catch {}
  };

  return <Segmented label="mode" size="sm" options={["frost", "powder"] as const} value={mode} onChange={pick} />;
}
