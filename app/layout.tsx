import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For Sathya ❤️",
  description:
    "A little cinematic journey through the beautiful life of Sathya.",
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