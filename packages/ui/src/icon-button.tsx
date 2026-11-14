import * as React from "react";

const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ");

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Required: the button has no visible text. */
  "aria-label": string;
  size?: "sm" | "md" | "lg";
  bordered?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { size = "md", bordered, className, type = "button", ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cx(
        "sn-icon-btn",
        size === "sm" && "sn-icon-btn--sm",
        size === "lg" && "sn-icon-btn--lg",
        bordered && "sn-icon-btn--bordered",
        className,
      )}
      {...rest}
    />
  );
});
