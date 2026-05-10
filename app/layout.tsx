import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BOXpad - Modern Blog Platform",
    template: "%s | BOXpad",
  },
  description: "A modern blog application showcasing clean UI design, API integration, and responsive components. Built with Next.js, TypeScript, and Tailwind CSS.",
  keywords: ["blog", "nextjs", "react", "typescript", "tailwind", "boxpad", "social media", "blogging platform"],
  authors: [{ name: "BOXpad Team" }],
  creator: "BOXpad",
  publisher: "BOXpad",
  applicationName: "BOXpad",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "BOXpad - Modern Blog Platform",
    description: "A modern blog application showcasing clean UI design, API integration, and responsive components.",
    siteName: "BOXpad",
    images: [
      {
        url: "/boxpad-og.png",
        width: 1200,
        height: 630,
        alt: "BOXpad - Modern Blog Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BOXpad - Modern Blog Platform",
    description: "A modern blog application showcasing clean UI design, API integration, and responsive components.",
    images: ["/boxpad-og.png"],
    creator: "@boxpad",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">{children}</body>
    </html>
  );
}
