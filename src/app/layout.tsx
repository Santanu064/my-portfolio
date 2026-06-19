import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santanu Ghosh | Full-Stack Engineer & SaaS Architect",
  description:
    "Premium full-stack portfolio for SaaS platforms, admin dashboards, inventory systems, and business automation solutions.",
  openGraph: {
    title: "Santanu Ghosh | Full-Stack Engineer & SaaS Architect",
    description:
      "Engineering high-performance ecosystems and intelligent automation for scale-hungry teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
