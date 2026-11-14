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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
