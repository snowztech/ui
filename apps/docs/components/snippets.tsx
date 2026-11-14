"use client";

import * as React from "react";
import type { ReactNode } from "react";
import { Tabs } from "@snowztech/ui/client";

interface SnippetsProps {
  children: ReactNode;
  labels?: string[];
}

export function Snippets({ children, labels = ["html", "react"] }: SnippetsProps) {
  const items = React.Children.toArray(children);
  if (items.length <= 1) return <div className="docs-snippets">{items[0]}</div>;
  return (
    <Tabs
      size="sm"
      className="docs-snippets"
      items={items.map((content, i) => ({ label: labels[i], content }))}
    />
  );
}
