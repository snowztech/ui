"use client";

import * as React from "react";

// Docs-only. Copies every :hover, :focus-visible and :active rule from the
// loaded stylesheets onto [data-force="…"], so the states page can show each
// state at once using the library's real CSS.
// :focus counts as focus-visible here: inputs style :focus, buttons :focus-visible.
const patterns: [string, RegExp][] = [
  ["hover", /:hover/],
  ["focus-visible", /:focus(-visible)?(?![-\w])/],
  ["active", /:active/],
];

// Splits a selector list on top-level commas only, so :is(a, b) stays whole.
function splitSelectors(text: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === "(") depth++;
    else if (c === ")") depth--;
    else if (c === "," && depth === 0) { parts.push(text.slice(start, i)); start = i + 1; }
  }
  parts.push(text.slice(start));
  return parts;
}

export function ForceStates() {
  React.useEffect(() => {
    const out: string[] = [];
    const walk = (rules: CSSRuleList) => {
      for (const rule of Array.from(rules)) {
        if (rule instanceof CSSStyleRule) {
          for (const [state, re] of patterns) {
            const parts = splitSelectors(rule.selectorText).filter((part) => re.test(part));
            if (!parts.length) continue;
            const sel = parts.map((part) => part.replace(new RegExp(re.source, "g"), `[data-force~="${state}"]`)).join(",");
            out.push(`${sel}{${rule.style.cssText}}`);
          }
        } else if ("cssRules" in rule) {
          walk((rule as CSSGroupingRule).cssRules);
        }
      }
    };
    for (const sheet of Array.from(document.styleSheets)) {
      try { walk(sheet.cssRules); } catch { /* cross-origin sheet */ }
    }
    const style = document.createElement("style");
    style.textContent = out.join("\n");
    document.head.append(style);
    return () => style.remove();
  }, []);
  return null;
}
