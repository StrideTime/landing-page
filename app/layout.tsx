import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Stride - Track Progress, Not Just Time",
  description:
    "Understand your work patterns, stay motivated, and achieve more with intelligent productivity tracking. Privacy-first time tracking and productivity analytics.",
  keywords: [
    "productivity",
    "time tracking",
    "task management",
    "analytics",
    "progress tracking",
    "achievement system",
  ],
  authors: [{ name: "Stride" }],
  openGraph: {
    title: "Stride - Track Progress, Not Just Time",
    description:
      "Understand your work patterns, stay motivated, and achieve more with intelligent productivity tracking.",
    type: "website",
    siteName: "Stride",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stride - Track Progress, Not Just Time",
    description:
      "Understand your work patterns, stay motivated, and achieve more with intelligent productivity tracking.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
