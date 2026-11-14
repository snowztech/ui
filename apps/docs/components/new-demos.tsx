"use client";

import * as React from "react";
import { Segmented, Tabs } from "@snowztech/ui/client";

export function SegmentedDemo() {
  const [view, setView] = React.useState<"list" | "grid" | "table">("list");
  return <Segmented label="view" options={["list", "grid", "table"] as const} value={view} onChange={setView} />;
}

export function TabsDemo() {
  return (
    <Tabs
      items={[
        { label: "Overview", content: <p className="tabs-demo">Tabs switch content in place. Arrow keys move between them.</p> },
        { label: "Usage", content: <p className="tabs-demo">Use them for views of the same thing, not for navigation between pages.</p> },
        { label: "Billing", content: <p className="tabs-demo">Links with aria-current work too, for tabs that are pages.</p> },
      ]}
    />
  );
}
