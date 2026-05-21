import * as React from "react";

const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ");

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label = ({ required, children, className, ...rest }: LabelProps) => (
  <label className={cx("sn-label", className)} {...rest}>
    {children}
    {required && (
      <span className="sn-label__required" aria-hidden="true">
        *
      </span>
    )}
  </label>
);

export interface FieldProps {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Field = ({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  className,
  style,
}: FieldProps) => (
  <div className={cx("sn-field", className)} style={style}>
    {label && (
      <Label htmlFor={htmlFor} required={required}>
        {label}
      </Label>
    )}
    {children}
    {error ? (
      <span className="sn-error" role="alert">
        {error}
      </span>
    ) : hint ? (
      <span className="sn-hint">{hint}</span>
    ) : null}
  </div>
);
