import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "@snowztech/ui · design system",
  description: "The snowztech design system. Tokens, components, and the snowflake mark.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* The fonts ship with @snowztech/ui-css. Frost is the default, so JetBrains Mono is preloaded. */}
        <link rel="preload" href="/fonts/jetbrains-mono.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="stylesheet" href="/fonts.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try { var t = localStorage.getItem("theme"); if (t === "light") document.documentElement.setAttribute("data-theme", "light"); if (localStorage.getItem("mode") === "powder") document.documentElement.setAttribute("data-sn-mode", "powder"); } catch (e) {}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
