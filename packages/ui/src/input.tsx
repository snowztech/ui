import * as React from "react";

const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ");

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
  invalid?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = "md", invalid, className, ...rest },
  ref,
) {
  return (
    <input
      ref={ref}
      className={cx(
        "sn-input",
        size === "sm" && "sn-input--sm",
        size === "lg" && "sn-input--lg",
        invalid && "sn-input--invalid",
        className,
      )}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );
});
