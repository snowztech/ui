import * as React from "react";

const cx = (...parts: Array<string | undefined | false>) => parts.filter(Boolean).join(" ");

export function Kbd({ className, ...rest }: React.HTMLAttributes<HTMLElement>) {
  return <kbd className={cx("sn-kbd", className)} {...rest} />;
}
