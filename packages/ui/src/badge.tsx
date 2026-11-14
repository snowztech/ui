import * as React from "react";

const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ");

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "success" | "warning" | "danger";
}

export function Badge({ variant = "default", className, ...rest }: BadgeProps) {
  return <span className={cx("sn-badge", variant !== "default" && `sn-badge--${variant}`, className)} {...rest} />;
}
