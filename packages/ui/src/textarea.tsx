import * as React from "react";

const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ");

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { invalid, className, ...rest },
  ref,
) {
  return (
    <textarea
      ref={ref}
      className={cx("sn-textarea", invalid && "sn-textarea--invalid", className)}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );
});
