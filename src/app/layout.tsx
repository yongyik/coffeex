import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} | Kuala Lumpur 手工咖啡店`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    "咖啡店",
    "Kuala Lumpur cafe",
    "手工咖啡",
    "拿铁",
    "美式咖啡",
    "甜品",
    "咖啡菜单",
    "MyCoffee",
  ],

  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: `${siteConfig.name} | Kuala Lumpur 手工咖啡店`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "zh_MY",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Kuala Lumpur 手工咖啡店`,
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-amber-50">
        {/* 全站固定背景图 */}
        <div
          aria-hidden="true"
          className="fixed inset-0 z-0 bg-[url('/images/site-bg.webp')] bg-cover bg-center"
        />
        {/* 可选：加一层遮罩，文字更清楚 */}
        <div aria-hidden="true" className="fixed inset-0 z-0 bg-black/40" />

        <Header />
        <main className="relative z-10 min-h-screen">{children}</main>
        <div className="relative z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}
