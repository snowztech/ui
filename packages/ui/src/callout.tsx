import * as React from "react";

const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ");

export interface CalloutProps {
  variant?: "note" | "tip" | "warning" | "danger";
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Callout = ({ variant, title, children, className, style }: CalloutProps) => (
  <aside className={cx("sn-callout", variant && `sn-callout--${variant}`, className)} style={style}>
    {title && <strong className="sn-callout__title">{title}</strong>}
    {children}
  </aside>
);
