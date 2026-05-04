"use client";

import * as React from "react";
import type { ReactNode } from "react";

interface SnippetsProps {
  children: ReactNode;
  // labels in render order, e.g. ["html", "react"]
  labels?: string[];
}

// Tabs HTML and React snippets side-by-side. With a single child, renders
// bare (no tab bar) since there's nothing to switch between.
export function Snippets({ children, labels = ["html", "react"] }: SnippetsProps) {
  const items = React.Children.toArray(children);
  if (items.length <= 1) {
    return <div className="docs-snippets docs-snippets--single">{items[0]}</div>;
  }

  return <Tabs items={items} labels={labels} />;
}

function Tabs({ items, labels }: { items: ReactNode[]; labels: string[] }) {
  const [active, setActive] = React.useState(0);
  const id = React.useId();

  return (
    <div className="docs-snippets">
      <div role="tablist" className="docs-snippets-tabs">
        {labels.map((label, i) => (
          <button
            key={label}
            type="button"
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${id}-panel-${i}`}
            className="docs-snippets-tab"
            onClick={() => setActive(i)}
          >
            {label}
          </button>
        ))}
      </div>
      {items.map((child, i) => (
        <div
          key={i}
          role="tabpanel"
          id={`${id}-panel-${i}`}
          aria-labelledby={`${id}-tab-${i}`}
          className="docs-snippets-panel"
          data-active={i === active}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
