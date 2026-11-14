import * as React from "react";

const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ");

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "raised" | "inset" | "accent";
  /** The element to render. A card in a list is often an `article` or an `a`. */
  as?: "div" | "article" | "section" | "a" | "li";
  href?: string;
}

export function Card({ variant = "default", as: Tag = "div", className, ...rest }: CardProps) {
  return <Tag className={cx("sn-card", variant !== "default" && `sn-card--${variant}`, className)} {...rest} />;
}
