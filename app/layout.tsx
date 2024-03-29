import type { Metadata } from "next";
import { martianMono } from "./ui/fonts";
import './ui/global.css';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={martianMono.className}>{children}</body>
    </html>
  );
}
