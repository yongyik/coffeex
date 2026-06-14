import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyCoffee | 手工咖啡与甜品",
  description: "MyCoffee 是一间温暖的咖啡店，提供手工咖啡、特调饮品、甜品与舒适的聚会空间。",
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
