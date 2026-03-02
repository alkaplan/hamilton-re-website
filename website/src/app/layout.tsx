import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hamilton Real Estate Partners",
    template: "%s | Hamilton Real Estate Partners",
  },
  description:
    "Multifamily real estate investor in Columbus, Ohio. Real Estate Private Equity with a disciplined strategy.",
  openGraph: {
    title: "Hamilton Real Estate Partners",
    description:
      "Multifamily real estate investor in Columbus, Ohio. Real Estate Private Equity with a disciplined strategy.",
    url: "https://hamiltonrepartners.com",
    siteName: "Hamilton Real Estate Partners",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
