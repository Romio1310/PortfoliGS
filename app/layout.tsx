import "@/app/styles/globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { incognito } from "./assets/font/font";
import { gitlabmono } from "./assets/font/font";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Providers } from "./providers";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const options = {
  title: "Gurdeep Singh | Software Developer",
  description:
    "A Computer Science Enthusiast crafting code, chasing innovation, and diving deep into tech. Always up for new challenges and creative projects 🚀",
  url: "https://gurdeepsingh.tech",
  ogImage: "/og.png",
};

// Use a timestamp to force browser to reload favicon
const timestamp = new Date().getTime();

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  icons: {
    icon: [
      { url: `/favicon.ico?v=${timestamp}`, sizes: 'any' },
      { url: `/icon1.png?v=${timestamp}`, type: 'image/png', sizes: '192x192' },
      { url: `/icon2.png?v=${timestamp}`, type: 'image/png', sizes: '512x512' },
      { url: `/icon3.png?v=${timestamp}`, type: 'image/png', sizes: '32x32' },
      { url: `/icon4.png?v=${timestamp}`, type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: `/apple-icon.png?v=${timestamp}`, sizes: '180x180' }
    ],
    shortcut: [{ url: `/favicon.ico?v=${timestamp}` }],
  },
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "gurdeepsingh.tech",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  other: {
    "google-site-verification": "yZ_aUN6nCvamtqLDonfQ-D2cDiMEXlLCUaS3yX9T9o",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          rel="icon" 
          href={`/favicon.ico?v=${timestamp}`} 
          sizes="any"
        />
        <link 
          rel="shortcut icon" 
          href={`/favicon.ico?v=${timestamp}`} 
        />
        <link 
          rel="apple-touch-icon" 
          href={`/apple-icon.png?v=${timestamp}`} 
        />
      </head>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      />
    </html>
  );
}
