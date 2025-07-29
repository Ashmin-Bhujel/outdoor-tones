import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const matterRegular = localFont({
  src: "../public/fonts/matterregular.woff2",
});

export const metadata: Metadata = {
  title: "Outdoor Tones",
  description:
    "Scroll animation project using GSAP and Lenis for smooth scrolling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${matterRegular.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
