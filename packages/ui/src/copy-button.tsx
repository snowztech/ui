import * as React from "react";

const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ");

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
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignored
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={copied ? "copied" : "copy"}
      data-copied={copied || undefined}
      className={cx("sn-copy-btn", className)}
      style={style}
    >
      <svg className="sn-copy-btn__idle" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="9" y="9" width="11" height="11" rx="1.5" />
        <path d="M5 15V5a1 1 0 0 1 1-1h10" />
      </svg>
      <svg className="sn-copy-btn__copied" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m4 12 5 5L20 6" />
      </svg>
    </button>
  );
}
