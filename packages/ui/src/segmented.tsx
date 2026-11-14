import * as React from "react";

const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ");

export interface SegmentedProps<T extends string> {
  options: readonly T[] | ReadonlyArray<{ value: T; label: React.ReactNode }>;
  value: T;
  onChange: (value: T) => void;
  /** Names the group for screen readers. */
  label: string;
  size?: "sm" | "md";
  className?: string;
}

export function Segmented<T extends string>({ options, value, onChange, label, size = "md", className }: SegmentedProps<T>) {
  const items = options.map((o) => (typeof o === "string" ? { value: o as T, label: o as React.ReactNode } : o));
  return (
    <div role="group" aria-label={label} className={cx("sn-segmented", size === "sm" && "sn-segmented--sm", className)}>
      {items.map((o) => (
        <button key={o.value} type="button" aria-pressed={o.value === value} onClick={() => onChange(o.value)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}
