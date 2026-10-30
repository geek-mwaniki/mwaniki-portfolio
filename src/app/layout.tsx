import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import SiteHeader from "@/components/layout/site-header";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mwaniki | Digital Transformation & Technology",
    template: "%s | Mwaniki",
  },
  description:
    "Professional portfolio showcasing software engineering, digital transformation, technology and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} min-h-full flex flex-col antialiased`}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}