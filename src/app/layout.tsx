import type { Metadata } from "next";
import { Epilogue, Barlow_Condensed, Roboto_Mono } from "next/font/google";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import PageLoader from "@/components/ui/PageLoader";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ICAD Technologies | Global Excellence in Tech Consulting",
  description: "Strategic tech consulting and high-performance digital engineering for enterprise leaders.",
  metadataBase: new URL("https://icadtech.com"),
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
  },
  openGraph: {
    title: "ICAD Technologies | Global Excellence in Tech Consulting",
    description: "Strategic tech consulting and high-performance digital engineering for enterprise leaders.",
    url: "/",
    siteName: "ICAD Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICAD Technologies | Global Excellence in Tech Consulting",
    description: "Strategic tech consulting and high-performance digital engineering for enterprise leaders.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${epilogue.variable} ${barlowCondensed.variable} ${robotoMono.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-background text-on-background antialiased selection:bg-secondary selection:text-on-secondary">
        <SmoothScrollProvider>
          <PageLoader />
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
