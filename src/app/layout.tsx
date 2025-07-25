import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
export const viewport = {
  themeColor: "#2E3440",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "md Presentation",
    template: "%s - md Presentation",
  },
  description:
    "A no-nonsense tool for crafting minimalist, professional platform-independent presentations directly from Markdown using familiar Vim motions.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💠</text></svg>",
    apple: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💠</text></svg>",
  },
  openGraph: {
    title: "md Presentation",
    description:
      "A no-nonsense tool for crafting minimalist, professional platform-independent presentations directly from Markdown using familiar Vim motions.",
    url: "https://github.com/chraltro/mdpresentation",
    siteName: "md Presentation",
    images: [
      {
        url: "https://github.com/chraltro/mdpresentation/image.png",
        width: 1200,
        height: 630,
        alt: "md Presentation - Markdown Presentation Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "md Presentation",
    description:
      "A no-nonsense tool for crafting minimalist, professional platform-independent presentations directly from Markdown using familiar Vim motions.",
    images: ["https://github.com/chraltro/mdpresentation/editor.png"],
    creator: "@dijith_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": "standard",
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "dijith" }],
  keywords: [
    "markdown presentation",
    "html slides",
    "vim motions",
    "markdown editor",
    "minimalist slides",
    "offline first",
    "nord theme",
    "md presentation"
  ],
  alternates: {
    canonical: "https://github.com/chraltro/mdpresentation",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "md Presentation",
    description:
      "A no-nonsense tool for creating professional, platform-independent HTML presentations from Markdown using familiar Vim motions.",
    url: "https://github.com/chraltro/mdpresentation",
    applicationCategory: "Productivity",
    creator: {
      "@type": "Person",
      name: "dijith",
    },
  };
  return (
    <html lang="en">
      <Head>
        <script type="application/ld+json" id="schema-markup">
          {JSON.stringify(schema)}
        </script>
      </Head>
      <body className={`${inter.className}  bg-nordic  `}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}