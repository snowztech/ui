import * as React from "react";

const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ");

type Common = {
  variant?: "primary" | "secondary" | "ghost" | "accent" | "danger";
  size?: "sm" | "md" | "lg";
};

export type ButtonProps = Common &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  );

/** A button, or a link styled as one when you pass `href`. */
export function Button({ variant = "secondary", size = "md", className, ...rest }: ButtonProps) {
  const cls = cx(
    "sn-btn",
    `sn-btn--${variant}`,
    size === "sm" && "sn-btn--sm",
    size === "lg" && "sn-btn--lg",
    className,
  );
  if (rest.href !== undefined) {
    return <a className={cls} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }
  const { type = "button", ...button } = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return <button type={type} className={cls} {...button} />;
}
