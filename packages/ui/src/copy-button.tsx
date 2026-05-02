import * as React from "react";
import { CheckIcon } from "./icons";

export interface CopyButtonProps {
  value: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function CopyButton({ value, size = 14, className, style }: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignored
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={copied ? "copied" : "copy"}
      className={className}
      style={{
        appearance: "none",
        border: "1px solid transparent",
        background: "transparent",
        color: copied ? "var(--sn-success)" : "var(--sn-fg-muted)",
        padding: 6,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--sn-r-xs)",
        transition: "color 120ms ease, border-color 120ms ease",
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!copied) e.currentTarget.style.color = "var(--sn-fg)";
      }}
      onMouseLeave={(e) => {
        if (!copied) e.currentTarget.style.color = "var(--sn-fg-muted)";
      }}
    >
      {copied ? (
        <CheckIcon size={size} />
      ) : (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="9" y="9" width="11" height="11" rx="1.5" />
          <path d="M5 15V5a1 1 0 0 1 1-1h10" />
        </svg>
      )}
    </button>
  );
}
